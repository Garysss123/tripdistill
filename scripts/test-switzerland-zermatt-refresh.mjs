import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { parse } from 'parse5';
import { switzerlandImageManifest, switzerlandRetiredImageRecords } from '../data/switzerland-image-manifest.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baseCommit = '7da2e50f1cbef1b97bcf65e151e21ee33c03a62a';
const locales = [
  { code: 'en', dir: '', prefix: '' },
  { code: 'zh-Hant', dir: 'zh', prefix: '/zh' },
  { code: 'ja', dir: 'ja', prefix: '/ja' },
  { code: 'ko', dir: 'ko', prefix: '/ko' },
  { code: 'th', dir: 'th', prefix: '/th' }
];
const routes = [
  '/switzerland/zermatt-matterhorn/',
  '/switzerland/zermatt-matterhorn/village-gornergrat/',
  '/switzerland/zermatt-matterhorn/sunnegga-five-lakes/',
  '/switzerland/zermatt-matterhorn/glacier-paradise/'
];
const children = routes.slice(1);
const expectedDateChanges = new Set(locales.flatMap((locale) => routes.map((route) => `${locale.prefix}${route}`)));

function descendants(node) {
  return [node, ...(node.childNodes || []).flatMap(descendants)];
}

function nodeText(node) {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value;
  return (node.childNodes || []).map(nodeText).join(' ');
}

function getAttr(node, name) {
  return node?.attrs?.find((item) => item.name === name)?.value;
}

function parsePage(html) {
  const nodes = descendants(parse(html));
  const main = nodes.find((node) => node.tagName === 'main');
  const jsonScripts = nodes.filter((node) => node.tagName === 'script' && getAttr(node, 'type') === 'application/ld+json');
  const schema = jsonScripts.flatMap((node) => {
    try { return JSON.parse(nodeText(node)); } catch { return []; }
  });
  const graph = schema.flatMap((item) => item['@graph'] || []);
  return { nodes, main, body: nodeText(main).replace(/\s+/g, ' ').trim(), graph };
}

function localizedPath(locale, route) {
  return path.join(root, locale.dir, route.slice(1), 'index.html');
}

function routeWordCount(html) {
  return parsePage(html).body.split(/\s+/).filter(Boolean).length;
}

function currentMain(route) {
  return fs.readFileSync(path.join(root, route.slice(1), 'index.html'), 'utf8');
}

function baselineFile(relative) {
  return execFileSync('git', ['show', `${baseCommit}:${relative}`], { cwd: root, encoding: null });
}

function sitemapRecords(xml) {
  return new Map([...xml.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
    .map((match) => [match[1], match[2]]));
}

const englishBodies = new Map();
for (const locale of locales) {
  const searchPath = path.join(root, locale.dir, 'data', 'search-index.json');
  const search = JSON.parse(fs.readFileSync(searchPath, 'utf8'));
  for (const route of routes) {
    const html = fs.readFileSync(localizedPath(locale, route), 'utf8');
    const page = parsePage(html);
    assert.ok(page.main && page.body.length > 1500, `${locale.code} ${route}: substantive localized body`);
    const article = page.graph.find((item) => item['@type'] === 'Article');
    assert.ok(article, `${locale.code} ${route}: Article JSON-LD`);
    assert.equal(article.datePublished, '2026-09-12', `${locale.code} ${route}: publication date remains stable`);
    assert.equal(article.dateModified, '2026-10-12', `${locale.code} ${route}: refreshed modification date`);

    const canonical = page.nodes.find((node) => node.tagName === 'link' && getAttr(node, 'rel') === 'canonical');
    assert.equal(getAttr(canonical, 'href'), `https://tripdistill.com${locale.prefix}${route}`, `${locale.code} ${route}: canonical`);
    for (const target of locales) {
      const alternate = page.nodes.find((node) => node.tagName === 'link' && getAttr(node, 'rel') === 'alternate' && getAttr(node, 'hreflang') === target.code);
      assert.equal(getAttr(alternate, 'href'), `https://tripdistill.com${target.prefix}${route}`, `${locale.code} ${route}: ${target.code} hreflang`);
    }

    const record = search.filter((item) => item.url === `${locale.prefix}${route}`);
    assert.equal(record.length, 1, `${locale.code} ${route}: one search entry`);
    assert.equal(record[0].summary, article.description, `${locale.code} ${route}: localized search summary matches Article`);
    assert.ok(record[0].keywords.length > 0, `${locale.code} ${route}: search keywords`);

    const image = page.nodes.find((node) => node.tagName === 'img' && getAttr(node, 'fetchpriority') === 'high');
    const caption = page.nodes.find((node) => node.tagName === 'figcaption');
    assert.ok(getAttr(image, 'alt')?.trim(), `${locale.code} ${route}: accessible hero description`);
    assert.ok(nodeText(caption).trim().length > 8, `${locale.code} ${route}: visible image caption`);
    if (locale.code === 'en') englishBodies.set(route, page.body);
  }
}

const requiredEnglish = {
  '/switzerland/zermatt-matterhorn/': ['Two nights', 'Three nights', 'four nights', 'SBB to Visp', 'Matterhorn Gotthard Bahn', 'Visp–Zermatt', 'Täsch', 'Gornergrat', 'Sunnegga', 'Furi', 'Schwarzsee', 'Trockener Steg', 'June–September'],
  '/switzerland/zermatt-matterhorn/village-gornergrat/': ['Bahnhofstrasse', 'Kirchplatz', 'church bridge', 'old village', 'Gornergrat Railway', 'Mountaineers’ Cemetery'],
  '/switzerland/zermatt-matterhorn/sunnegga-five-lakes/': ['Blauherd–Stellisee–Grindjisee–Grünsee–Moosjisee–Leisee–Sunnegga', '9.8 km', '2 hours 30 minutes', '454 m', 'June–September'],
  '/switzerland/zermatt-matterhorn/glacier-paradise/': ['Zermatt–Furi–Schwarzsee–Trockener Steg–Matterhorn Glacier Paradise', '3,883 metres', 'Glacier Palace', 'descend promptly']
};
for (const [route, phrases] of Object.entries(requiredEnglish)) {
  const body = englishBodies.get(route) || '';
  for (const phrase of phrases) assert.ok(body.includes(phrase), `${route}: required planning detail “${phrase}”`);
}

const wordDeltas = {};
for (const route of routes) {
  const relative = route.slice(1) + 'index.html';
  const before = baselineFile(relative).toString('utf8');
  const after = currentMain(route);
  const delta = routeWordCount(after) - routeWordCount(before);
  assert.ok(delta > 150, `${route}: substantive English main-text expansion`);
  wordDeltas[route] = delta;
}

for (const [key, expectedAlt, expectedTitle] of [
  ['zermatt-matterhorn/village-gornergrat', 'Matterhorn rising above the rocky grassy slope between Zermatt and Gornergrat', 'Matterhorn above the slope between Zermatt and Gornergrat'],
  ['zermatt-matterhorn/sunnegga-five-lakes', 'Matterhorn reflected in Stellisee beneath sunset clouds', 'Matterhorn reflected in Stellisee at sunset']
]) {
  const image = switzerlandImageManifest[key];
  assert.equal(image.alt, expectedAlt, `${key}: pixel-reviewed alt`);
  assert.equal(image.displayTitle, expectedTitle, `${key}: visible image title`);
  assert.ok(/^[a-f0-9]{40}$/i.test(image.remoteSha1), `${key}: preserved source SHA-1 declaration`);
  assert.ok(children.some((route) => fs.readFileSync(path.join(root, route.slice(1), 'index.html'), 'utf8').includes(image.source)), `${key}: source URL visible on a child page`);
}

const glacierKey = 'zermatt-matterhorn/glacier-paradise';
const glacierDiagram = switzerlandImageManifest[glacierKey];
const glacierRoute = '/switzerland/zermatt-matterhorn/glacier-paradise/';
const glacierDiagramPath = path.join(root, glacierDiagram.src.slice(1));
assert.equal(glacierDiagram.assetType, 'original-planning-diagram');
assert.equal(glacierDiagram.license, null, 'original schematic must not claim a public reuse license');
assert.equal(glacierDiagram.rightsStatus, 'Project original; no separate reuse license declared');
assert.equal(glacierDiagram.rightsStatusUrl, 'https://tripdistill.com/terms-of-use/');
assert.match(glacierDiagram.alt, /not a geographic map and not to scale/i);
assert.ok(glacierDiagram.diagramNote.length > 80);
assert.ok(glacierDiagram.diagramCardNote.length > 60);
assert.match(crypto.createHash('sha1').update(fs.readFileSync(glacierDiagramPath)).digest('hex'), /^[a-f0-9]{40}$/);
for (const locale of locales) {
  const html = fs.readFileSync(localizedPath(locale, glacierRoute), 'utf8');
  const page = parsePage(html);
  assert.ok(html.includes(glacierDiagram.src), `${locale.code}: Glacier page displays the original schematic`);
  assert.ok(!html.includes('/assets/images/switzerland-zermatt-matterhorn-glacier-paradise.webp'), `${locale.code}: photo with unresolved multiple source-page license declarations is disabled`);
  const figureNote = page.nodes.find((node) => node.tagName === 'p' && getAttr(node, 'class') === 'ch-diagram-note');
  assert.ok(nodeText(figureNote).trim().length > 80, `${locale.code}: localized, substantive schematic legend is visible`);
  assert.ok(html.includes(glacierDiagram.rightsStatusUrl), `${locale.code}: original artwork links the Terms of Use`);
  if (locale.code !== 'en') assert.notEqual(nodeText(figureNote).trim(), glacierDiagram.diagramNote, `${locale.code}: legend is translated`);
}
const retiredGlacier = switzerlandRetiredImageRecords.zermattGlacierParadiseMultipleLicenseDeclarations;
const retiredGlacierPath = path.join(root, retiredGlacier.src.slice(1));
assert.deepEqual(fs.readFileSync(retiredGlacierPath), baselineFile(retiredGlacier.src.slice(1)), 'photo file bytes remain unchanged after precautionary retirement');
assert.equal(crypto.createHash('sha1').update(fs.readFileSync(retiredGlacierPath)).digest('hex'), retiredGlacier.localSha1);
assert.equal(retiredGlacier.inventoryStatus, 'unused');
assert.deepEqual(retiredGlacier.sourceDeclaredLicenses, ['Public domain', 'CC BY-SA 4.0']);
assert.match(retiredGlacier.rightsStatus, /records both Public domain and CC BY-SA 4\.0 declarations/i);
assert.match(retiredGlacier.rightsStatus, /have not been independently determined/i);
assert.match(retiredGlacier.retirementNote, /not a finding of infringement or that the declarations are incompatible/i);
assert.match(retiredGlacier.retirementNote, /reuse status was not independently determined/i);
assert.equal(glacierDiagram.localSha1, crypto.createHash('sha1').update(fs.readFileSync(glacierDiagramPath)).digest('hex'));

const rigiRoute = '/switzerland/lucerne-lake-mountains/rigi-lake-circuit/';
const rigiRelative = rigiRoute.slice(1) + 'index.html';
assert.deepEqual(fs.readFileSync(path.join(root, rigiRelative)), baselineFile(rigiRelative), 'protected Rigi source HTML unchanged');
const rigi = switzerlandImageManifest['lucerne-lake-mountains/rigi-lake-circuit'];
assert.ok(rigi.src.endsWith('.svg'), 'Rigi remains on its original SVG');
const rigiAsset = rigi.src.slice(1);
assert.deepEqual(fs.readFileSync(path.join(root, rigiAsset)), baselineFile(rigiAsset), 'protected Rigi SVG bytes unchanged');

const oldSitemap = sitemapRecords(baselineFile('sitemap.xml').toString('utf8'));
const newSitemap = sitemapRecords(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.deepEqual([...newSitemap.keys()].sort(), [...oldSitemap.keys()].sort(), 'sitemap route set unchanged');
const changedDates = [...newSitemap].filter(([route, date]) => oldSitemap.get(route) !== date);
assert.deepEqual(new Set(changedDates.map(([route]) => route)), expectedDateChanges, 'only four existing routes across five editions have changed lastmod');
for (const [route, date] of changedDates) assert.equal(date, '2026-10-12', `${route}: sitemap lastmod`);

const expectedPhotos = ['zermatt-matterhorn/village-gornergrat', 'zermatt-matterhorn/sunnegga-five-lakes'];
for (const key of expectedPhotos) {
  const relative = switzerlandImageManifest[key].src.slice(1);
  assert.deepEqual(fs.readFileSync(path.join(root, relative)), baselineFile(relative), `${key}: existing image bytes retained`);
}

console.log(`Zermatt refresh regression passed: four existing routes, five locales, ${expectedDateChanges.size} sitemap dates, ${JSON.stringify(wordDeltas)} English main-text word deltas; localized search, canonical/hreflang, two pixel-reviewed Commons photos, precautionary retirement with multiple source-page license declarations retained, five localized schematic legends, unchanged URL set and protected Rigi checks passed.`);
