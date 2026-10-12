#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { switzerlandImageManifest, switzerlandRetiredImageRecords } from '../data/switzerland-image-manifest.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baseCommit = 'a014412eceb30efae51894be3b6167debaa96ca3';
const routes = [
  '/switzerland/lucerne-lake-mountains/',
  '/switzerland/lucerne-lake-mountains/old-town-lakefront/',
  '/switzerland/lucerne-lake-mountains/pilatus-round-trip/',
  '/switzerland/lucerne-lake-mountains/rigi-lake-circuit/'
];
const locales = [
  { code: 'en', prefix: '' },
  { code: 'zh-Hant', prefix: '/zh' },
  { code: 'ja', prefix: '/ja' },
  { code: 'ko', prefix: '/ko' },
  { code: 'th', prefix: '/th' }
];
const diagramPath = '/assets/images/switzerland-lucerne-lake-mountains-rigi-route-choice.svg';
const retiredPhotoPath = '/assets/images/switzerland-lucerne-lake-mountains-rigi-lake-circuit.webp';
const retiredPhotoSha1 = 'f4d0669944063db98152960cb4a93581732ec470';

function walk(node, out = []) {
  out.push(node);
  for (const child of node.childNodes || []) walk(child, out);
  return out;
}
function attr(node, name) { return node?.attrs?.find((item) => item.name === name)?.value; }
function text(node) {
  if (!node) return '';
  return node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join(' ');
}
function readPage(baseDir, locale, route) {
  const page = path.join(root, baseDir, locale.prefix.replace(/^\//, ''), route.slice(1), 'index.html');
  assert.ok(fs.existsSync(page), `missing page ${page}`);
  const html = fs.readFileSync(page, 'utf8');
  return { html, nodes: walk(parse(html)), page };
}
function sitemapRecords(xml) {
  return new Map([...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)]
    .map((match) => [match[1], match[2]]));
}
function mainWordCount(html) {
  const main = walk(parse(html)).find((node) => node.tagName === 'main');
  assert.ok(main, 'page must have a main element');
  return text(main).trim().split(/\s+/).filter(Boolean).length;
}
function articleNode(nodes) {
  for (const script of nodes.filter((node) => node.tagName === 'script' && attr(node, 'type') === 'application/ld+json')) {
    try {
      const json = JSON.parse(text(script));
      const graph = Array.isArray(json['@graph']) ? json['@graph'] : [json];
      const article = graph.find((item) => item['@type'] === 'Article');
      if (article) return article;
    } catch {}
  }
  return null;
}

// Keep the route inventory and modification scope stable against the exact
// integration source this branch was created from.
const baseSitemap = execFileSync('git', ['show', `${baseCommit}:sitemap.xml`], { cwd: root, encoding: 'utf8' });
const currentSitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const baseRecords = sitemapRecords(baseSitemap);
const currentRecords = sitemapRecords(currentSitemap);
assert.equal(baseRecords.size, 4560, 'base route inventory');
assert.equal(currentRecords.size, baseRecords.size, 'no sitemap URL additions or removals');
assert.deepEqual([...currentRecords.keys()].sort(), [...baseRecords.keys()].sort(), 'URL set is unchanged');
const expectedDateChanges = new Set(locales.flatMap((locale) => routes.map((route) => `https://tripdistill.com${locale.prefix}${route}`)));
for (const url of expectedDateChanges) {
  assert.ok(currentRecords.has(url), `Lucerne sitemap route remains published: ${url}`);
  assert.notEqual(baseRecords.get(url), currentRecords.get(url), `Lucerne review date changed: ${url}`);
  assert.equal(currentRecords.get(url), '2026-10-12', `review date for ${url}`);
}
assert.equal(expectedDateChanges.size, 20);

const englishCopies = new Map();
for (const locale of locales) {
  for (const route of routes) {
    const page = readPage('', locale, route);
    const main = page.nodes.find((node) => node.tagName === 'main');
    const body = text(main);
    assert.ok(body.trim().length > 700, `${locale.code} ${route} has substantive main copy`);
    assert.ok(articleNode(page.nodes), `${locale.code} ${route} has Article structured data`);
    const article = articleNode(page.nodes);
    assert.equal(article.datePublished, '2026-09-12', `${locale.code} ${route} publication date remains stable`);
    assert.equal(article.dateModified, '2026-10-12', `${locale.code} ${route} modification date`);

    const canonical = page.nodes.find((node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical');
    assert.equal(attr(canonical, 'href'), `https://tripdistill.com${locale.prefix}${route}`, `${locale.code} ${route} canonical`);
    for (const targetLocale of locales) {
      const alternate = page.nodes.find((node) => node.tagName === 'link' && attr(node, 'rel') === 'alternate' && attr(node, 'hreflang') === targetLocale.code);
      assert.equal(attr(alternate, 'href'), `https://tripdistill.com${targetLocale.prefix}${route}`, `${locale.code} ${route} ${targetLocale.code} alternate`);
    }

    const searchUrl = `${locale.prefix}${route}`;
    const searchFile = path.join(root, locale.prefix.replace(/^\//, ''), 'data/search-index.json');
    const search = JSON.parse(fs.readFileSync(searchFile, 'utf8'));
    const matches = search.filter((record) => record.url === searchUrl);
    assert.equal(matches.length, 1, `${locale.code} ${route} has one search record`);
    assert.equal(matches[0].summary, article.description, `${locale.code} ${route} search summary matches the structured article description`);
    assert.ok(matches[0].keywords.length > 0, `${locale.code} ${route} keeps search keywords`);
    if (locale.code === 'en') englishCopies.set(route, body);
    else assert.notEqual(matches[0].summary, JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8')).find((record) => record.url === route)?.summary,
      `${locale.code} ${route} search summary is translated`);

    if (route.endsWith('/rigi-lake-circuit/')) {
      assert.ok(page.html.includes(diagramPath), `${locale.code} Rigi page displays the original SVG`);
      assert.ok(page.nodes.some((node) => node.tagName === 'p' && attr(node, 'class') === 'ch-diagram-note' && text(node).trim().length > 80),
        `${locale.code} Rigi page displays a localized, substantive SVG legend`);
      assert.ok(!page.html.includes(retiredPhotoPath), `${locale.code} Rigi page does not load the retired Bürgenstock photo`);
      assert.ok(page.html.includes('terms-of-use'), `${locale.code} Rigi page shows the project-original rights note`);
    } else {
      assert.ok(page.nodes.some((node) => node.tagName === 'small' && attr(node, 'class') === 'ch-diagram-card-note' && text(node).trim().length > 60),
        `${locale.code} ${route} displays the localized diagram key beside its SVG card`);
    }
  }
}

const EnglishRequirements = {
  '/switzerland/lucerne-lake-mountains/': ['Two nights', 'Three nights', 'Bahnhofquai', 'VBL bus 1', 'Alpnachstad', 'MeteoSwiss'],
  '/switzerland/lucerne-lake-mountains/old-town-lakefront/': ['Bahnhofquai', 'Kapellbrücke', 'Kornmarkt', 'Weinmarkt', 'Spreuerbrücke', 'Museggmauer'],
  '/switzerland/lucerne-lake-mountains/pilatus-round-trip/': ['Bus 1', 'stand A', 'S5', 'pier 2', '19 October', '27 November'],
  '/switzerland/lucerne-lake-mountains/rigi-lake-circuit/': ['Vitznau', 'Arth-Goldau', 'SBB', 'seasonal timetable', 'MeteoSwiss']
};
for (const [route, phrases] of Object.entries(EnglishRequirements)) {
  const body = englishCopies.get(route) || '';
  for (const phrase of phrases) assert.ok(body.includes(phrase), `${route} must retain the route-specific detail “${phrase}”`);
}

const baseWordCounts = {};
let totalWordGain = 0;
for (const route of routes) {
  const file = route.slice(1) + 'index.html';
  const before = execFileSync('git', ['show', `${baseCommit}:${file}`], { cwd: root, encoding: 'utf8' });
  const after = fs.readFileSync(path.join(root, file), 'utf8');
  const delta = mainWordCount(after) - mainWordCount(before);
  assert.ok(delta > 300, `${route} must add substantive body copy`);
  baseWordCounts[route] = delta;
  totalWordGain += delta;
}
assert.ok(totalWordGain >= 2000, 'rendered English main-text copy must materially grow against the exact base');

const liveRigiImage = switzerlandImageManifest['lucerne-lake-mountains/rigi-lake-circuit'];
assert.equal(liveRigiImage.src, diagramPath, 'Rigi guide must use the original planning diagram');
assert.equal(liveRigiImage.assetType, 'original-planning-diagram');
assert.equal(liveRigiImage.license, null, 'do not imply a separate SVG reuse license');
assert.match(liveRigiImage.rightsStatus, /no separate reuse license declared/i);
assert.match(liveRigiImage.localSha1, /^[a-f0-9]{40}$/);
const retiredRecord = switzerlandRetiredImageRecords.lucerneRigiView;
const retiredFile = path.join(root, retiredPhotoPath.slice(1));
assert.ok(fs.existsSync(retiredFile), 'preserve the retired WebP bytes');
assert.equal(crypto.createHash('sha1').update(fs.readFileSync(retiredFile)).digest('hex'), retiredPhotoSha1, 'retired WebP bytes remain unchanged');
assert.equal(retiredRecord.src, retiredPhotoPath);
assert.equal(retiredRecord.inventoryStatus, 'unused');
assert.match(retiredRecord.retirementNote, /Bürgenstock\/Felsenweg.*Mount Rigi/i);

const inventoryPath = path.join(root, 'reports/photo-license-inventory.json');
assert.ok(fs.existsSync(inventoryPath), 'full audit must generate the image inventory');
const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
const provenance = inventory.entries.flatMap((entry) => entry.sourceRecords || []);
const svgRecord = provenance.find((record) => record.assetPath === diagramPath);
const retiredInventoryRecord = provenance.find((record) => record.assetPath === retiredPhotoPath);
assert.ok(svgRecord, 'inventory must include the new SVG source record');
assert.equal(svgRecord.assetType, 'original-planning-diagram');
assert.equal(svgRecord.creator, 'TripDistill Editorial Team');
assert.equal(svgRecord.license, null);
assert.equal(svgRecord.useCount, 4);
assert.ok(retiredInventoryRecord, 'inventory retains the retired photo provenance');
assert.equal(retiredInventoryRecord.inventoryStatus, 'unused');
assert.equal(retiredInventoryRecord.useCount, 0);

for (const locale of locales) {
  for (const route of routes) {
    const page = readPage('dist', locale, route);
    assert.ok(articleNode(page.nodes), `dist ${locale.code} ${route} exists`);
    assert.equal(articleNode(page.nodes).dateModified, '2026-10-12', `dist ${locale.code} ${route} date`);
  }
}

console.log(`Switzerland Lucerne regression passed: ${routes.length} existing routes, five locales, 20 sitemap dates, ${totalWordGain} added English main-text words; per-route: ${JSON.stringify(baseWordCounts)}.`);
