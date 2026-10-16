#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { switzerlandClusters, switzerlandGuides } from '../data/switzerland-guides.mjs';
import { switzerlandImageManifest, switzerlandRetiredImageRecords } from '../data/switzerland-image-manifest.mjs';
import { collectTranslationWork } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baseCommit = '77141526a1fa8497c53f5ce96e9bc79812ebf7dc';
const locales = [
  { code: 'en', dir: '', prefix: '' },
  { code: 'zh-Hant', dir: 'zh', prefix: '/zh' },
  { code: 'ja', dir: 'ja', prefix: '/ja' },
  { code: 'ko', dir: 'ko', prefix: '/ko' },
  { code: 'th', dir: 'th', prefix: '/th' }
];
const routes = [
  '/switzerland/geneva-lake/',
  '/switzerland/geneva-lake/old-town-lakefront/',
  '/switzerland/geneva-lake/international-quarter/',
  '/switzerland/geneva-lake/carouge-arve/'
];
const geneva = switzerlandClusters.find((cluster) => cluster.slug === 'geneva-lake');
assert.ok(geneva, 'Geneva hub exists');
assert.equal(geneva.reviewDate, '12 October 2026');
assert.equal(geneva.isoDate, '2026-10-12');
assert.deepEqual(geneva.guides.map((guide) => guide.slug), ['old-town-lakefront', 'international-quarter', 'carouge-arve']);
assert.equal(switzerlandClusters.length, 16, 'no additional Swiss hub was created');
assert.equal(switzerlandGuides.length, 48, 'no additional Swiss child page was created');
assert.equal(routes.length, 4, 'only the selected hub and its original three children are in scope');

function descendants(node) { return [node, ...(node.childNodes || []).flatMap(descendants)]; }
function attr(node, name) { return node?.attrs?.find((item) => item.name === name)?.value; }
function nodeText(node) {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value;
  return (node.childNodes || []).map(nodeText).join(' ');
}
function parsePage(html) {
  const nodes = descendants(parse(html));
  const main = nodes.find((node) => node.tagName === 'main');
  const graph = nodes.filter((node) => node.tagName === 'script' && attr(node, 'type') === 'application/ld+json')
    .flatMap((node) => {
      try { return JSON.parse(nodeText(node))['@graph'] || []; } catch { return []; }
    });
  return { nodes, main, body: nodeText(main).replace(/\s+/g, ' ').trim(), graph };
}
function pagePath(locale, route) { return path.join(root, locale.dir, route.slice(1), 'index.html'); }
function baseline(relative) { return execFileSync('git', ['show', `${baseCommit}:${relative}`], { cwd: root, encoding: 'utf8' }); }
function wordCount(text) { return (text.match(/[\p{L}\p{N}]+/gu) || []).length; }
function sha1(bytes) { return crypto.createHash('sha1').update(bytes).digest('hex'); }

const wordDeltas = [];
for (const locale of locales) {
  const searchPath = path.join(root, locale.dir, 'data', 'search-index.json');
  const search = JSON.parse(fs.readFileSync(searchPath, 'utf8'));
  for (const route of routes) {
    const file = pagePath(locale, route);
    assert.ok(fs.existsSync(file), `${locale.code} ${route}: localized page exists`);
    const html = fs.readFileSync(file, 'utf8');
    const page = parsePage(html);
    assert.ok(page.main && page.body.length > 1200, `${locale.code} ${route}: substantive page body`);
    const article = page.graph.find((item) => item['@type'] === 'Article');
    assert.ok(article, `${locale.code} ${route}: Article JSON-LD`);
    assert.equal(article.datePublished, '2026-09-12', `${locale.code} ${route}: publication date retained`);
    assert.equal(article.dateModified, '2026-10-12', `${locale.code} ${route}: modification date`);
    assert.equal(article.inLanguage, locale.code, `${locale.code} ${route}: language metadata`);

    const canonical = page.nodes.find((node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical');
    assert.equal(attr(canonical, 'href'), `https://tripdistill.com${locale.prefix}${route}`, `${locale.code} ${route}: canonical`);
    for (const target of locales) {
      const alternate = page.nodes.find((node) => node.tagName === 'link' && attr(node, 'rel') === 'alternate' && attr(node, 'hreflang') === target.code);
      assert.equal(attr(alternate, 'href'), `https://tripdistill.com${target.prefix}${route}`, `${locale.code} ${route}: ${target.code} alternate`);
    }

    const searchRecords = search.filter((item) => item.url === `${locale.prefix}${route}`);
    assert.equal(searchRecords.length, 1, `${locale.code} ${route}: one search record`);
    assert.equal(searchRecords[0].summary, article.description, `${locale.code} ${route}: search and Article descriptions agree`);
    assert.ok(searchRecords[0].keywords.length >= 3, `${locale.code} ${route}: route-specific search terms`);
    assert.ok(!html.includes('/assets/images/switzerland-geneva-lake-old-town-lakefront.webp'), `${locale.code} ${route}: mismatched photo is not live`);

    if (route.endsWith('/old-town-lakefront/')) {
      const hero = page.nodes.find((node) => node.tagName === 'img' && attr(node, 'fetchpriority') === 'high');
      assert.equal(attr(hero, 'src'), '/assets/images/switzerland-geneva-lake-route-choices.svg', `${locale.code}: original schematic is active`);
      const note = page.nodes.find((node) => node.tagName === 'p' && attr(node, 'class') === 'ch-diagram-note');
      assert.ok(nodeText(note).trim().length > 40, `${locale.code}: visible schematic explanation`);
      assert.match(nodeText(note), /(?:English|繁體中文|日本語|한국어|ไทย|英語|번체|タイ語)/, `${locale.code}: diagram note identifies its visible language coverage`);
      assert.ok(attr(hero, 'alt')?.trim(), `${locale.code}: accessible localized schematic alt`);
    }

    const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
    const escapedRoute = `${locale.prefix}${route}`.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    assert.match(sitemap, new RegExp(`<loc>https://tripdistill\\.com${escapedRoute}<\\/loc><lastmod>2026-10-12<\\/lastmod>`), `${locale.code} ${route}: sitemap date`);

    if (locale.code === 'en') {
      const relative = route.slice(1) + 'index.html';
      const before = parsePage(baseline(relative));
      wordDeltas.push(`${route}: ${wordCount(page.body) - wordCount(before.body)} words (${wordCount(before.body)} → ${wordCount(page.body)})`);
    }
  }
}

// The existing country landing page also displays the first Geneva asset and summary.
// Validate that dependent card/credit surface without counting it as a new route.
const countryRoute = '/switzerland/';
const countryWork = collectTranslationWork().find((record) => record.route === countryRoute);
assert.ok(countryWork, 'existing Switzerland country-page translation units exist');
const cardPrefixes = [
  'Geneva makes more sense as three walkable districts',
  'Lucerne is a compact city with a working rail-and-boat hinge',
  'Interlaken links Lake Thun, Lake Brienz and the Jungfrau valley railways',
  'Interlaken Ost is the rail fork; Lauterbrunnen and Grindelwald',
  'Zermatt is compact on foot but its mountain days are not interchangeable'
];
const cardSources = cardPrefixes.map((prefix) => countryWork.units.find((source) => source.startsWith(prefix)));
assert.ok(cardSources.every(Boolean), 'all current Swiss landing-card summary sources exist');
for (const locale of locales) {
  const file = pagePath(locale, countryRoute);
  const countryHtml = fs.readFileSync(file, 'utf8');
  const page = parsePage(countryHtml);
  assert.ok(page.main, `${locale.code}: Switzerland landing page exists`);
  assert.equal(page.nodes.filter((node) => node.tagName === 'a' && (attr(node, 'class') || '').split(/\s+/).includes('ch-country-card')).length, 16, `${locale.code}: all existing country cards remain`);
  const article = page.graph.find((item) => item['@type'] === 'Article');
  assert.equal(article?.dateModified, '2026-10-12', `${locale.code}: dependent landing-page metadata date`);
  const search = JSON.parse(fs.readFileSync(path.join(root, locale.dir, 'data/search-index.json'), 'utf8'));
  const records = search.filter((item) => item.url === `${locale.prefix}${countryRoute}`);
  assert.equal(records.length, 1, `${locale.code}: country landing search record`);
  if (locale.code !== 'en') assert.ok(records[0].summary.length > 40, `${locale.code}: country landing search summary is localized`);
  assert.ok(countryHtml.includes('https://tripdistill.com/assets/images/switzerland-geneva-lake-route-choices.svg'), `${locale.code}: current Geneva diagram credit is visible on the landing page`);
  assert.ok(!countryHtml.includes('/assets/images/switzerland-geneva-lake-old-town-lakefront.webp'), `${locale.code}: retired mismatched photo is absent from the landing page`);
  const translations = locale.code === 'en' ? null : JSON.parse(fs.readFileSync(path.join(root, 'data/i18n', `${locale.code}.json`), 'utf8')).translations;
  for (const source of cardSources) {
    const target = translations?.[source] || source;
    assert.ok(page.body.includes(target), `${locale.code}: updated existing country-card summary is localized`);
  }
  const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
  assert.ok(sitemap.includes(`<loc>https://tripdistill.com${locale.prefix}${countryRoute}</loc><lastmod>2026-10-12</lastmod>`), `${locale.code}: country landing sitemap date`);
}

const oldPhoto = switzerlandRetiredImageRecords.genevaOldTownMismatch;
assert.ok(oldPhoto, 'the mismatched photo provenance record is retained');
assert.equal(oldPhoto.inventoryStatus, 'unused');
assert.equal(oldPhoto.license, null, 'source-page declaration is recorded separately, not promoted to an independent rights claim');
assert.deepEqual(oldPhoto.sourceDeclaredLicenses, ['CC BY-SA 3.0']);
assert.match(oldPhoto.rightsStatus, /no independent rights or chain-of-title verification/i);
const oldBytes = fs.readFileSync(path.join(root, oldPhoto.src.slice(1)));
assert.equal(sha1(oldBytes), oldPhoto.localSha1, 'retired photo bytes match their recorded hash');
const oldBaseBytes = execFileSync('git', ['show', `${baseCommit}:${oldPhoto.src.slice(1)}`], { cwd: root });
assert.equal(sha1(oldBaseBytes), oldPhoto.localSha1, 'retired photo bytes remain identical to the task base');
assert.equal(switzerlandImageManifest['geneva-lake/old-town-lakefront'].assetType, 'original-planning-diagram');
assert.equal(switzerlandImageManifest['geneva-lake/old-town-lakefront'].license, null);
assert.equal(sha1(fs.readFileSync(path.join(root, switzerlandImageManifest['geneva-lake/old-town-lakefront'].src.slice(1)))), switzerlandImageManifest['geneva-lake/old-town-lakefront'].localSha1, 'original diagram hash matches manifest');

const svgFile = path.join(root, 'assets/images/switzerland-geneva-lake-route-choices.svg');
const xmlInspector = `import json, sys, xml.etree.ElementTree as ET
root = ET.parse(sys.argv[1]).getroot()
items = []
for node in root.iter():
    items.append({'tag': node.tag.rsplit('}', 1)[-1], 'attrs': node.attrib, 'text': ''.join(node.itertext()).strip() if node.tag.rsplit('}', 1)[-1] == 'text' else ''})
print(json.dumps({'root': {'tag': root.tag.rsplit('}', 1)[-1], 'attrs': root.attrib}, 'items': items}, ensure_ascii=False))`;
const xml = spawnSync('python3', ['-c', xmlInspector, svgFile], { encoding: 'utf8' });
assert.equal(xml.status, 0, `SVG must parse as real XML: ${xml.stderr}`);
const diagram = JSON.parse(xml.stdout);
assert.equal(diagram.root.tag, 'svg');
assert.equal(diagram.root.attrs.viewBox, '0 0 1600 1066');
const permittedTags = new Set(['svg', 'title', 'desc', 'rect', 'line', 'circle', 'text']);
assert.ok(diagram.items.every((item) => permittedTags.has(item.tag)), 'SVG uses only the checked schematic element set');
for (const item of diagram.items) {
  const a = item.attrs;
  if (item.tag === 'rect') {
    const x = Number(a.x || 0), y = Number(a.y || 0), w = Number(a.width), h = Number(a.height);
    assert.ok(x >= 0 && y >= 0 && w >= 0 && h >= 0 && x + w <= 1600 && y + h <= 1066, 'rectangle stays inside the viewBox');
  } else if (item.tag === 'circle') {
    const x = Number(a.cx), y = Number(a.cy), r = Number(a.r);
    assert.ok(r > 0 && x - r >= 0 && y - r >= 0 && x + r <= 1600 && y + r <= 1066, 'circle stays inside the viewBox');
  } else if (item.tag === 'line') {
    for (const coordinate of [Number(a.x1), Number(a.x2)]) assert.ok(coordinate >= 0 && coordinate <= 1600, 'line x coordinate stays inside the viewBox');
    for (const coordinate of [Number(a.y1), Number(a.y2)]) assert.ok(coordinate >= 0 && coordinate <= 1066, 'line y coordinate stays inside the viewBox');
  } else if (item.tag === 'text') {
    const x = Number(a.x), y = Number(a.y), size = Number(a['font-size']);
    const estimatedWidth = Array.from(item.text).reduce((sum, character) => sum + size * (/[-\u3400-\u9fff\u3040-\u30ff\uac00-\ud7af\u0e00-\u0e7f]/u.test(character) ? 0.96 : 0.62), 0);
    const left = a['text-anchor'] === 'middle' ? x - estimatedWidth / 2 : x;
    const right = a['text-anchor'] === 'middle' ? x + estimatedWidth / 2 : x + estimatedWidth;
    assert.ok(x >= 0 && y >= size && y <= 1066 && left >= 0 && right <= 1600, `SVG text fits the canvas: ${item.text}`);
  }
}
const allSvgText = diagram.items.filter((item) => item.tag === 'text').map((item) => item.text).join(' ');
for (const language of ['EN', '繁中', '日本語', '한국어', 'ไทย']) assert.ok(allSvgText.includes(language), `SVG has a visible ${language} legend`);

console.log(`Geneva refresh regression passed: ${routes.length} selected routes × ${locales.length} language editions plus the existing linked Switzerland landing card, 20 primary canonical/hreflang/search/schema/sitemap checks, retired-photo byte preservation, and parsed SVG/XML geometry.`);
console.log(`English main-body word-count deltas against ${baseCommit}: ${wordDeltas.join('; ')}`);
