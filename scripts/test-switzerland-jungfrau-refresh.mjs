#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { switzerlandImageManifest } from '../data/switzerland-image-manifest.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baseCommit = '83ba1e43c6fe872ae74747c21d1f6a2829253293';
const routes = [
  '/switzerland/jungfrau-region/',
  '/switzerland/jungfrau-region/lauterbrunnen-valley/',
  '/switzerland/jungfrau-region/wengen-kleine-scheidegg/',
  '/switzerland/jungfrau-region/grindelwald-first/'
];
const locales = [
  { code: 'en', prefix: '' },
  { code: 'zh-Hant', prefix: '/zh' },
  { code: 'ja', prefix: '/ja' },
  { code: 'ko', prefix: '/ko' },
  { code: 'th', prefix: '/th' }
];
const protectedLucerneRoutes = [
  '/switzerland/lucerne-lake-mountains/',
  '/switzerland/lucerne-lake-mountains/old-town-lakefront/',
  '/switzerland/lucerne-lake-mountains/pilatus-round-trip/',
  '/switzerland/lucerne-lake-mountains/rigi-lake-circuit/'
];
const diagramPath = '/assets/images/switzerland-lucerne-lake-mountains-rigi-route-choice.svg';
const diagramSha1 = '8b45fae5724444f48aa928e3225dacc232efc382';

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

// Confirm this sprint is constrained to four existing routes and exactly the
// matching five-language sitemap dates against its declared source commit.
const baseSitemap = execFileSync('git', ['show', `${baseCommit}:sitemap.xml`], { cwd: root, encoding: 'utf8' });
const currentSitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const baseRecords = sitemapRecords(baseSitemap);
const currentRecords = sitemapRecords(currentSitemap);
assert.equal(baseRecords.size, 4560, 'source route inventory');
assert.equal(currentRecords.size, baseRecords.size, 'no sitemap URL additions or removals');
assert.deepEqual([...currentRecords.keys()].sort(), [...baseRecords.keys()].sort(), 'route inventory is unchanged');
const expectedDateChanges = new Set(locales.flatMap((locale) => routes.map((route) => `https://tripdistill.com${locale.prefix}${route}`)));
const dateChanges = [...currentRecords].filter(([url, date]) => baseRecords.get(url) !== date);
assert.equal(dateChanges.length, 20, 'four existing routes x five locales receive updated dates');
for (const [url, date] of dateChanges) {
  assert.ok(expectedDateChanges.has(url), `unexpected sitemap date change: ${url}`);
  assert.equal(date, '2026-10-12', `review date for ${url}`);
}

const englishBodies = new Map();
for (const locale of locales) {
  const localizedSearch = JSON.parse(fs.readFileSync(path.join(root, locale.prefix.replace(/^\//, ''), 'data/search-index.json'), 'utf8'));
  const englishSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
  for (const route of routes) {
    const page = readPage('', locale, route);
    const main = page.nodes.find((node) => node.tagName === 'main');
    const body = text(main);
    assert.ok(body.trim().length > 700, `${locale.code} ${route} has substantive rendered content`);
    const article = articleNode(page.nodes);
    assert.ok(article, `${locale.code} ${route} has Article structured data`);
    assert.equal(article.datePublished, '2026-09-12', `${locale.code} ${route} publication date remains stable`);
    assert.equal(article.dateModified, '2026-10-12', `${locale.code} ${route} modification date`);

    const canonical = page.nodes.find((node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical');
    assert.equal(attr(canonical, 'href'), `https://tripdistill.com${locale.prefix}${route}`, `${locale.code} ${route} canonical`);
    for (const targetLocale of locales) {
      const alternate = page.nodes.find((node) => node.tagName === 'link' && attr(node, 'rel') === 'alternate' && attr(node, 'hreflang') === targetLocale.code);
      assert.equal(attr(alternate, 'href'), `https://tripdistill.com${targetLocale.prefix}${route}`, `${locale.code} ${route} ${targetLocale.code} alternate`);
    }

    const searchUrl = `${locale.prefix}${route}`;
    const searchMatches = localizedSearch.filter((record) => record.url === searchUrl);
    assert.equal(searchMatches.length, 1, `${locale.code} ${route} has one search entry`);
    assert.equal(searchMatches[0].summary, article.description, `${locale.code} ${route} search text matches article description`);
    assert.ok(searchMatches[0].keywords.length > 0, `${locale.code} ${route} retains searchable keywords`);
    if (locale.code === 'en') englishBodies.set(route, body);
    else {
      const englishSummary = englishSearch.find((record) => record.url === route)?.summary;
      assert.notEqual(searchMatches[0].summary, englishSummary, `${locale.code} ${route} search summary is localized`);
      assert.ok(body.length > 700, `${locale.code} ${route} translated page body is present`);
    }

    const heroImage = page.nodes.find((node) => node.tagName === 'img' && attr(node, 'fetchpriority') === 'high');
    assert.ok(heroImage && attr(heroImage, 'alt')?.trim(), `${locale.code} ${route} has an accessible hero image description`);
    const heroCaption = page.nodes.find((node) => node.tagName === 'figcaption');
    assert.ok(heroCaption && text(heroCaption).trim().length > 8, `${locale.code} ${route} has a human-readable hero image caption`);
    const routeKey = route.split('/').filter(Boolean).at(-1);
    const imageGuideKey = route.endsWith('/jungfrau-region/') ? 'jungfrau-region/lauterbrunnen-valley' : `jungfrau-region/${routeKey}`;
    const sourceImageLabel = switzerlandImageManifest[imageGuideKey]?.label;
    assert.ok(sourceImageLabel && !page.html.includes(sourceImageLabel), `${locale.code} ${route} does not expose the raw Commons filename`);
  }
}

const englishRequirements = {
  '/switzerland/jungfrau-region/': ['Two nights', 'Three nights', 'Four nights', 'Interlaken Ost', 'Wengernalpbahn', 'Grindelwald Terminal', 'seat reservations', 'weather'],
  '/switzerland/jungfrau-region/lauterbrunnen-valley/': ['Staubbach', 'Trümmelbachfälle', 'Grütschalp', 'BLM', 'Stechelberg', 'Schilthornbahn', 'Sleeping one or two nights in Lauterbrunnen'],
  '/switzerland/jungfrau-region/wengen-kleine-scheidegg/': ['car-free', 'Wengen station', 'Dorfstrasse', 'Wengernalpbahn', 'Kleine Scheidegg', 'Männlichen', 'one-night stop'],
  '/switzerland/jungfrau-region/grindelwald-first/': ['two nights', 'Firstbahn', 'Grindelwald Terminal', 'Eiger Express', 'First and Cliff Walk', 'Bachalpsee', 'seasonal']
};
for (const [route, phrases] of Object.entries(englishRequirements)) {
  const body = englishBodies.get(route) || '';
  for (const phrase of phrases) assert.ok(body.includes(phrase), `${route} must retain route-specific planning detail “${phrase}”`);
}

const wordDeltas = {};
let totalWordGain = 0;
for (const route of routes) {
  const file = route.slice(1) + 'index.html';
  const before = execFileSync('git', ['show', `${baseCommit}:${file}`], { cwd: root, encoding: 'utf8' });
  const after = fs.readFileSync(path.join(root, file), 'utf8');
  const delta = mainWordCount(after) - mainWordCount(before);
  assert.ok(delta > 150, `${route} must add substantive rendered English planning content`);
  wordDeltas[route] = delta;
  totalWordGain += delta;
}

// The source revision commits English Lucerne pages; the localized pages are
// generated outputs and are checked below for the visible five-language Rigi
// diagram/legend. Keep every committed Lucerne source page byte-for-byte.
for (const route of protectedLucerneRoutes) {
  const relative = route.slice(1) + 'index.html';
  const baseline = execFileSync('git', ['show', `${baseCommit}:${relative}`], { cwd: root, encoding: 'utf8' });
  assert.equal(fs.readFileSync(path.join(root, relative), 'utf8'), baseline, `protected Lucerne source route unchanged: ${relative}`);
}
const svgFile = path.join(root, diagramPath.slice(1));
assert.equal(crypto.createHash('sha1').update(fs.readFileSync(svgFile)).digest('hex'), diagramSha1, 'original Rigi SVG bytes remain unchanged');
const rigiImage = switzerlandImageManifest['lucerne-lake-mountains/rigi-lake-circuit'];
assert.equal(rigiImage.src, diagramPath, 'Rigi remains on the original project SVG');
for (const locale of locales) {
  const rigi = readPage('', locale, protectedLucerneRoutes.at(-1));
  assert.ok(rigi.html.includes(diagramPath), `${locale.code} Rigi route still uses the original SVG`);
  assert.ok(rigi.nodes.some((node) => node.tagName === 'p' && attr(node, 'class') === 'ch-diagram-note' && text(node).trim().length > 80), `${locale.code} Rigi SVG legend remains visible`);
}

// Pixel review corrected these two contextual labels while preserving their
// existing sourced files and displayed credit/license records.
const imageManifest = switzerlandImageManifest;
assert.equal(imageManifest['jungfrau-region/wengen-kleine-scheidegg'].alt, 'Snowbound Kleine Scheidegg buildings below the Jungfrau massif');
assert.equal(imageManifest['jungfrau-region/grindelwald-first'].alt, 'Bachalpsee and the mountain panorama on the Grindelwald-First route');
assert.equal(imageManifest['jungfrau-region/lauterbrunnen-valley'].displayTitle, 'Lauterbrunnen Valley and Staubbach Falls');
assert.equal(imageManifest['jungfrau-region/wengen-kleine-scheidegg'].displayTitle, 'Snowbound Kleine Scheidegg below the Jungfrau massif');
assert.equal(imageManifest['jungfrau-region/grindelwald-first'].displayTitle, 'Bachalpsee and the Grindelwald-First panorama');
for (const page of [routes[0], ...routes.slice(1)]) {
  const html = fs.readFileSync(path.join(root, page.slice(1), 'index.html'), 'utf8');
  assert.ok(html.includes('creativecommons.org'), `source page shows image rights information: ${page}`);
}

for (const locale of locales) {
  for (const route of routes) {
    const page = readPage('dist', locale, route);
    const article = articleNode(page.nodes);
    assert.ok(article, `dist ${locale.code} ${route} exists`);
    assert.equal(article.dateModified, '2026-10-12', `dist ${locale.code} ${route} date`);
  }
}

console.log(`Switzerland Jungfrau regression passed: ${routes.length} existing routes, five locales, 20 date changes, ${totalWordGain} added English main-text words (${JSON.stringify(wordDeltas)}); protected Lucerne/Rigi checks passed.`);
