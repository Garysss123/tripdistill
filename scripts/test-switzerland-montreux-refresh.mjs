#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { switzerlandClusters, switzerlandGuides } from '../data/switzerland-guides.mjs';
import { switzerlandImageManifest, switzerlandRetiredImageRecords } from '../data/switzerland-image-manifest.mjs';
import { collectTranslationWork, localeConfigs } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baseCommit = '063b1d71d0ead0908cc96b8fdc9e32242d07f01b';
const locales = [{ code: 'en', dir: '', prefix: '' }, ...localeConfigs.map((locale) => ({
  code: locale.code, dir: locale.dir, prefix: locale.prefix
}))];
const routes = [
  '/switzerland/montreux-riviera/',
  '/switzerland/montreux-riviera/montreux-chillon/',
  '/switzerland/montreux-riviera/rochers-de-naye/',
  '/switzerland/montreux-riviera/vevey-lakeside/'
];
const cluster = switzerlandClusters.find((item) => item.slug === 'montreux-riviera');
assert.ok(cluster, 'the existing Montreux, Vevey & Riviera hub remains in the source model');
assert.equal(cluster.reviewDate, '12 October 2026');
assert.equal(cluster.isoDate, '2026-10-12');
assert.deepEqual(cluster.guides.map((guide) => guide.slug), ['montreux-chillon', 'rochers-de-naye', 'vevey-lakeside']);
assert.equal(switzerlandClusters.length, 16, 'no new Swiss hub was added');
assert.equal(switzerlandGuides.length, 48, 'no new Swiss child page was added');

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
function sha1(bytes) { return crypto.createHash('sha1').update(bytes).digest('hex'); }
function wordCount(text) { return (text.match(/[\p{L}\p{N}]+/gu) || []).length; }

const wordDeltas = [];
for (const locale of locales) {
  const searchPath = path.join(root, locale.dir, 'data', 'search-index.json');
  const search = JSON.parse(fs.readFileSync(searchPath, 'utf8'));
  for (const route of routes) {
    const file = pagePath(locale, route);
    assert.ok(fs.existsSync(file), `${locale.code} ${route}: existing page remains present`);
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
    assert.ok(searchRecords[0].keywords.length >= 3, `${locale.code} ${route}: searchable route terms`);
    assert.ok(!html.includes('/assets/images/switzerland-montreux-riviera-rochers-de-naye.webp'), `${locale.code} ${route}: retired train image is not live`);

    if (route.endsWith('/rochers-de-naye/')) {
      const hero = page.nodes.find((node) => node.tagName === 'img' && attr(node, 'fetchpriority') === 'high');
      assert.equal(attr(hero, 'src'), '/assets/images/switzerland-montreux-riviera-rochers-de-naye-profile.svg', `${locale.code}: original schematic is active`);
      assert.ok(attr(hero, 'alt')?.trim(), `${locale.code}: accessible diagram alt`);
      const note = page.nodes.find((node) => node.tagName === 'p' && attr(node, 'class') === 'ch-diagram-note');
      assert.ok(nodeText(note).trim().length > 40, `${locale.code}: visible diagram explanation`);
      for (const point of ['Haut-de-Caux', '2,042', '55']) assert.ok(page.body.includes(point), `${locale.code}: named mountain decision ${point}`);
    }
    if (route.endsWith('/montreux-chillon/')) {
      for (const point of ['VMCV 201', 'S5', 'Veytaux-Chillon']) assert.ok(page.body.includes(point), `${locale.code}: named Chillon approach ${point}`);
      assert.match(page.body, /4\s*(?:km|公里|キロ|킬로|กม)/iu, `${locale.code}: published 4 km one-way shore figure`);
    }
    if (route.endsWith('/vevey-lakeside/')) {
      for (const point of ['Grande Place', 'Jardin Roussy']) assert.ok(page.body.includes(point), `${locale.code}: named Vevey walk point ${point}`);
      assert.match(page.body, /Chaplin|チャップリン|卓別林|채플린/iu, `${locale.code}: Chaplin’s World is localized or named`);
    }
    if (locale.code === 'en') {
      const relative = route.slice(1) + 'index.html';
      const before = parsePage(baseline(relative));
      wordDeltas.push(`${route}: ${wordCount(page.body) - wordCount(before.body)} words (${wordCount(before.body)} → ${wordCount(page.body)})`);
    }
  }
}

// The updated regional summary is also displayed on the existing Swiss landing page.
const countryRoute = '/switzerland/';
const countryWork = collectTranslationWork().find((record) => record.route === countryRoute);
assert.ok(countryWork, 'the existing Switzerland landing-page translation units exist');
const cardSource = countryWork.units.find((source) => source.startsWith('Montreux and Vevey share one shore but do not make one continuous attraction.'));
assert.ok(cardSource, 'updated Montreux landing-card excerpt is in the translation source set');
for (const locale of locales) {
  const page = parsePage(fs.readFileSync(pagePath(locale, countryRoute), 'utf8'));
  assert.ok(page.main, `${locale.code}: Switzerland landing page exists`);
  assert.equal(page.nodes.filter((node) => node.tagName === 'a' && (attr(node, 'class') || '').split(/\s+/).includes('ch-country-card')).length, 16, `${locale.code}: existing Swiss cards remain`);
  const translations = locale.code === 'en' ? null : JSON.parse(fs.readFileSync(path.join(root, 'data/i18n', `${locale.code}.json`), 'utf8')).translations;
  assert.ok(page.body.includes(translations?.[cardSource] || cardSource), `${locale.code}: updated Montreux card excerpt is localized`);
  const search = JSON.parse(fs.readFileSync(path.join(root, locale.dir, 'data/search-index.json'), 'utf8'));
  assert.equal(search.filter((item) => item.url === `${locale.prefix}${countryRoute}`).length, 1, `${locale.code}: one existing country search record`);
  assert.ok(!fs.readFileSync(pagePath(locale, countryRoute), 'utf8').includes('/assets/images/switzerland-montreux-riviera-rochers-de-naye.webp'), `${locale.code}: retired train image absent from landing page`);
}

// Date the four existing routes in all five editions without adding or removing a sitemap URL.
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const baseSitemap = baseline('sitemap.xml');
function sitemapMap(source) {
  return new Map([...source.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/gu)].map((match) => [match[1], match[2]]));
}
const currentMap = sitemapMap(sitemap), baseMap = sitemapMap(baseSitemap);
assert.deepEqual([...currentMap.keys()].sort(), [...baseMap.keys()].sort(), 'sitemap URL inventory is unchanged');
const routeLocs = new Set(routes.flatMap((route) => locales.map((locale) => `https://tripdistill.com${locale.prefix}${route}`)));
const bernEmmentalRoutes = [
  '/switzerland/bern-emmental/',
  '/switzerland/bern-emmental/old-city-aare/',
  '/switzerland/bern-emmental/museums-rose-garden/',
  '/switzerland/bern-emmental/emmental-day-trip/'
];
const bernEmmentalLocs = new Set(bernEmmentalRoutes.flatMap((route) => locales.map((locale) => `https://tripdistill.com${locale.prefix}${route}`)));
const baselRoutes = [
  '/switzerland/basel-rhine/',
  '/switzerland/basel-rhine/old-town-rhine/',
  '/switzerland/basel-rhine/art-museums/',
  '/switzerland/basel-rhine/kleinbasel-border-rhine/'
];
const baselLocs = new Set(baselRoutes.flatMap((route) => locales.map((locale) => `https://tripdistill.com${locale.prefix}${route}`)));
const stMoritzRoutes = [
  '/switzerland/st-moritz-engadin/',
  '/switzerland/st-moritz-engadin/st-moritz-lakes/',
  '/switzerland/st-moritz-engadin/bernina-pontresina/',
  '/switzerland/st-moritz-engadin/muottas-diavolezza/'
];
const stMoritzLocs = new Set(stMoritzRoutes.flatMap((route) => locales.map((locale) => `https://tripdistill.com${locale.prefix}${route}`)));
const stGallenRoutes = [
  '/switzerland/st-gallen-appenzell/',
  '/switzerland/st-gallen-appenzell/st-gallen-abbey/',
  '/switzerland/st-gallen-appenzell/appenzell-village/',
  '/switzerland/st-gallen-appenzell/ebenalp-seealpsee/'
];
const stGallenLocs = new Set(stGallenRoutes.flatMap((route) => locales.map((locale) => `https://tripdistill.com${locale.prefix}${route}`)));
const graubuendenRoutes = [
  '/switzerland/graubunden-corridors/',
  '/switzerland/graubunden-corridors/chur-rhine-gorge/',
  '/switzerland/graubunden-corridors/davos-parsenn/',
  '/switzerland/graubunden-corridors/arosa-line/'
];
const graubuendenLocs = new Set(graubuendenRoutes.flatMap((route) => locales.map((locale) => `https://tripdistill.com${locale.prefix}${route}`)));
for (const loc of routeLocs) assert.equal(currentMap.get(loc), '2026-10-12', `sitemap lastmod: ${loc}`);
const changedDates = new Set([...currentMap].filter(([loc, date]) => baseMap.get(loc) !== date).map(([loc]) => loc));
assert.deepEqual([...changedDates].sort(), [...new Set([...routeLocs, ...bernEmmentalLocs, ...baselLocs, ...stMoritzLocs, ...stGallenLocs, ...graubuendenLocs])].sort(), 'only the reviewed Swiss routes receive dates since the CH07 base');

// Retain the mismatched photo record and original bytes without asserting an independent license or title chain.
const oldPhoto = switzerlandRetiredImageRecords.montreuxRochersTrainMismatch;
assert.ok(oldPhoto, 'the old Montreux train photo provenance record is retained');
assert.equal(oldPhoto.inventoryStatus, 'unused');
assert.equal(oldPhoto.license, null, 'source-page terms are not promoted to an independent rights claim');
assert.deepEqual(oldPhoto.sourceDeclaredLicenses, ['CC BY-SA 3.0']);
assert.match(oldPhoto.rightsStatus, /no independent rights or chain-of-title verification/i);
assert.match(oldPhoto.retirementNote, /pixel review showed the train at Montreux station/i);
const oldBytes = fs.readFileSync(path.join(root, oldPhoto.src.slice(1)));
assert.equal(sha1(oldBytes), oldPhoto.localSha1, 'retired photo bytes match the recorded hash');
assert.equal(sha1(execFileSync('git', ['show', `${baseCommit}:${oldPhoto.src.slice(1)}`], { cwd: root })), oldPhoto.localSha1, 'retired photo bytes are unchanged from the requested base');
const diagramEntry = switzerlandImageManifest['montreux-riviera/rochers-de-naye'];
assert.equal(diagramEntry.assetType, 'original-planning-diagram');
assert.equal(diagramEntry.license, null);
assert.match(diagramEntry.editNote, /not to scale/i);
assert.match(diagramEntry.rightsStatus, /Project original/i);
const diagramPath = path.join(root, diagramEntry.src.slice(1));
assert.equal(sha1(fs.readFileSync(diagramPath)), diagramEntry.localSha1, 'original diagram matches its manifest hash');

// Parse the SVG as XML and validate its simple geometry and five visible language labels.
const xmlInspector = `import json, sys, xml.etree.ElementTree as ET
root = ET.parse(sys.argv[1]).getroot()
items = []
for node in root.iter():
    tag = node.tag.rsplit('}', 1)[-1]
    items.append({'tag': tag, 'attrs': node.attrib, 'text': ''.join(node.itertext()).strip() if tag == 'text' else ''})
print(json.dumps({'root': {'tag': root.tag.rsplit('}', 1)[-1], 'attrs': root.attrib}, 'items': items}, ensure_ascii=False))`;
const xml = spawnSync('python3', ['-c', xmlInspector, diagramPath], { encoding: 'utf8' });
assert.equal(xml.status, 0, `SVG must parse as XML: ${xml.stderr}`);
const diagram = JSON.parse(xml.stdout);
assert.equal(diagram.root.tag, 'svg');
assert.equal(diagram.root.attrs.viewBox, '0 0 1600 1066');
const permittedTags = new Set(['svg', 'title', 'desc', 'rect', 'line', 'circle', 'text']);
assert.ok(diagram.items.every((item) => permittedTags.has(item.tag)), 'SVG uses only the checked diagram element set');
for (const item of diagram.items) {
  const a = item.attrs;
  if (item.tag === 'rect') {
    const x = Number(a.x || 0), y = Number(a.y || 0), w = Number(a.width), h = Number(a.height);
    assert.ok(x >= 0 && y >= 0 && w >= 0 && h >= 0 && x + w <= 1600 && y + h <= 1066, 'rectangle is inside the viewBox');
  } else if (item.tag === 'circle') {
    const x = Number(a.cx), y = Number(a.cy), r = Number(a.r);
    assert.ok(r > 0 && x - r >= 0 && y - r >= 0 && x + r <= 1600 && y + r <= 1066, 'circle is inside the viewBox');
  } else if (item.tag === 'line') {
    for (const coordinate of [Number(a.x1), Number(a.x2)]) assert.ok(coordinate >= 0 && coordinate <= 1600, 'line x coordinate is inside the viewBox');
    for (const coordinate of [Number(a.y1), Number(a.y2)]) assert.ok(coordinate >= 0 && coordinate <= 1066, 'line y coordinate is inside the viewBox');
  } else if (item.tag === 'text') {
    const x = Number(a.x), y = Number(a.y), size = Number(a['font-size']);
    const estimate = Array.from(item.text).reduce((sum, character) => sum + size * (/[-\u3400-\u9fff\u3040-\u30ff\uac00-\ud7af\u0e00-\u0e7f]/u.test(character) ? 0.96 : 0.62), 0);
    const left = a['text-anchor'] === 'middle' ? x - estimate / 2 : x;
    const right = a['text-anchor'] === 'middle' ? x + estimate / 2 : x + estimate;
    assert.ok(x >= 0 && y >= size && y <= 1066 && left >= 0 && right <= 1600, `SVG text fits the canvas: ${item.text}`);
  }
}
const svgText = diagram.items.filter((item) => item.tag === 'text').map((item) => item.text).join(' ');
for (const language of ['EN', '繁中', '日本語', '한국어', 'ไทย']) assert.ok(svgText.includes(language), `SVG has a visible ${language} legend`);
const stations = diagram.items.filter((item) => item.tag === 'circle' && item.attrs['data-station-index'])
  .sort((a, b) => Number(a.attrs['data-station-index']) - Number(b.attrs['data-station-index']));
assert.equal(stations.length, 4, 'four named route points are drawn');
assert.ok(stations.every((station, index) => index === 0 || (Number(station.attrs.cx) > Number(stations[index - 1].attrs.cx) && Number(station.attrs.cy) < Number(stations[index - 1].attrs.cy))), 'the symbolic climb advances up and to the right');

// Protect the separate Rigi and Zermatt diagrams that the user asked to leave alone.
for (const asset of [
  'assets/images/switzerland-lucerne-lake-mountains-rigi-route-choice.svg',
  'assets/images/tripdistill-zermatt-glacier-route-choice.svg'
]) {
  const current = fs.readFileSync(path.join(root, asset));
  const base = execFileSync('git', ['show', `${baseCommit}:${asset}`], { cwd: root });
  assert.equal(sha1(current), sha1(base), `${asset} bytes are unchanged from the requested base`);
}

console.log(`Montreux refresh regression passed: ${routes.length} existing routes × ${locales.length} editions; canonical/hreflang/search/schema/date checks; unchanged sitemap URL set; retired-photo byte preservation; parsed SVG/XML geometry and five-language legend; Rigi/Zermatt assets protected.`);
console.log(`English article body word-count deltas against ${baseCommit}: ${wordDeltas.join('; ')}`);
console.log('This source-level audit does not claim browser/UI or independent image-rights-chain clearance.');
