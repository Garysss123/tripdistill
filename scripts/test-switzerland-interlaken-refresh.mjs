#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { switzerlandImageManifest } from '../data/switzerland-image-manifest.mjs';
import { switzerlandCh15Routes, switzerlandCh16Routes } from './switzerland-ch15-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baseCommit = 'f3b99eca2fc82c6d86d9cef4ec8760ac32316d47';
const locales = [
  { code: 'en', dir: '', prefix: '' },
  { code: 'zh-Hant', dir: 'zh', prefix: '/zh' },
  { code: 'ja', dir: 'ja', prefix: '/ja' },
  { code: 'ko', dir: 'ko', prefix: '/ko' },
  { code: 'th', dir: 'th', prefix: '/th' }
];
const routes = [
  '/switzerland/interlaken-lakes/',
  '/switzerland/interlaken-lakes/interlaken-base/',
  '/switzerland/interlaken-lakes/brienz-giessbach/',
  '/switzerland/interlaken-lakes/thun-spiez/'
];
const genevaDateRoutes = [
  '/switzerland/',
  '/switzerland/geneva-lake/',
  '/switzerland/geneva-lake/old-town-lakefront/',
  '/switzerland/geneva-lake/international-quarter/',
  '/switzerland/geneva-lake/carouge-arve/'
];
const lausanneRoutes = [
  '/switzerland/lausanne-lavaux/',
  '/switzerland/lausanne-lavaux/old-city-ouchy/',
  '/switzerland/lausanne-lavaux/lavaux-terraces/',
  '/switzerland/lausanne-lavaux/olympic-lake-cruise/'
];
const montreuxRoutes = [
  '/switzerland/montreux-riviera/',
  '/switzerland/montreux-riviera/montreux-chillon/',
  '/switzerland/montreux-riviera/rochers-de-naye/',
  '/switzerland/montreux-riviera/vevey-lakeside/'
];
const bernEmmentalRoutes = [
  '/switzerland/bern-emmental/',
  '/switzerland/bern-emmental/old-city-aare/',
  '/switzerland/bern-emmental/museums-rose-garden/',
  '/switzerland/bern-emmental/emmental-day-trip/'
];
const baselRoutes = [
  '/switzerland/basel-rhine/',
  '/switzerland/basel-rhine/old-town-rhine/',
  '/switzerland/basel-rhine/art-museums/',
  '/switzerland/basel-rhine/kleinbasel-border-rhine/'
];
const stMoritzRoutes = [
  '/switzerland/st-moritz-engadin/',
  '/switzerland/st-moritz-engadin/st-moritz-lakes/',
  '/switzerland/st-moritz-engadin/bernina-pontresina/',
  '/switzerland/st-moritz-engadin/muottas-diavolezza/'
];
const stGallenRoutes = [
  '/switzerland/st-gallen-appenzell/',
  '/switzerland/st-gallen-appenzell/st-gallen-abbey/',
  '/switzerland/st-gallen-appenzell/appenzell-village/',
  '/switzerland/st-gallen-appenzell/ebenalp-seealpsee/'
];
const graubuendenRoutes = [
  '/switzerland/graubunden-corridors/',
  '/switzerland/graubunden-corridors/chur-rhine-gorge/',
  '/switzerland/graubunden-corridors/davos-parsenn/',
  '/switzerland/graubunden-corridors/arosa-line/'
];
const ch14HubRoutes = ['/switzerland/lugano-southern-ticino/', '/switzerland/locarno-ascona-valleys/', '/switzerland/schaffhausen-rhine-falls/'];
const expectedDateChanges = new Set(locales.flatMap((locale) => [...routes, ...genevaDateRoutes, ...lausanneRoutes, ...montreuxRoutes, ...bernEmmentalRoutes, ...baselRoutes, ...stMoritzRoutes, ...stGallenRoutes, ...graubuendenRoutes, ...ch14HubRoutes, ...switzerlandCh15Routes, ...switzerlandCh16Routes].map((route) => `${locale.prefix}${route}`)));

function descendants(node) { return [node, ...(node.childNodes || []).flatMap(descendants)]; }
function getAttr(node, name) { return node?.attrs?.find((item) => item.name === name)?.value; }
function nodeText(node) {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value;
  return (node.childNodes || []).map(nodeText).join(' ');
}
function parsePage(html) {
  const nodes = descendants(parse(html));
  const main = nodes.find((node) => node.tagName === 'main');
  const graph = nodes
    .filter((node) => node.tagName === 'script' && getAttr(node, 'type') === 'application/ld+json')
    .flatMap((node) => {
      try { return JSON.parse(nodeText(node))['@graph'] || []; } catch { return []; }
    });
  return { nodes, main, body: nodeText(main).replace(/\s+/g, ' ').trim(), graph };
}
function pagePath(locale, route) {
  return path.join(root, locale.dir, route.slice(1), 'index.html');
}
function baseline(relative) {
  return execFileSync('git', ['show', `${baseCommit}:${relative}`], { cwd: root, encoding: 'utf8' });
}
function sitemapRecords(xml) {
  return new Map([...xml.matchAll(/<url>\s*<loc>https:\/\/tripdistill\.com([^<]*)<\/loc>\s*<lastmod>([^<]*)<\/lastmod>/g)]
    .map((match) => [match[1], match[2]]));
}
function wordCount(text) { return text.split(/\s+/).filter(Boolean).length; }

const englishBodies = new Map();
const wordDeltas = {};
for (const locale of locales) {
  const search = JSON.parse(fs.readFileSync(path.join(root, locale.dir, 'data/search-index.json'), 'utf8'));
  for (const route of routes) {
    const file = pagePath(locale, route);
    assert.ok(fs.existsSync(file), `${locale.code} ${route}: generated page exists`);
    const html = fs.readFileSync(file, 'utf8');
    const page = parsePage(html);
    assert.ok(page.main && page.body.length > 1200, `${locale.code} ${route}: substantive localized page body`);
    const article = page.graph.find((item) => item['@type'] === 'Article');
    assert.ok(article, `${locale.code} ${route}: Article JSON-LD`);
    assert.equal(article.datePublished, '2026-09-12', `${locale.code} ${route}: original publication date retained`);
    assert.equal(article.dateModified, '2026-10-12', `${locale.code} ${route}: modification date`);
    assert.equal(article.inLanguage, locale.code, `${locale.code} ${route}: Article language`);

    const canonical = page.nodes.find((node) => node.tagName === 'link' && getAttr(node, 'rel') === 'canonical');
    assert.equal(getAttr(canonical, 'href'), `https://tripdistill.com${locale.prefix}${route}`, `${locale.code} ${route}: canonical`);
    for (const target of locales) {
      const alternate = page.nodes.find((node) => node.tagName === 'link' && getAttr(node, 'rel') === 'alternate' && getAttr(node, 'hreflang') === target.code);
      assert.equal(getAttr(alternate, 'href'), `https://tripdistill.com${target.prefix}${route}`, `${locale.code} ${route}: ${target.code} alternate`);
    }

    const record = search.filter((item) => item.url === `${locale.prefix}${route}`);
    assert.equal(record.length, 1, `${locale.code} ${route}: one search record`);
    assert.equal(record[0].summary, article.description, `${locale.code} ${route}: search and Article summaries agree`);
    assert.ok(record[0].keywords.length >= 3, `${locale.code} ${route}: route-specific search keywords`);
    const hero = page.nodes.find((node) => node.tagName === 'img' && getAttr(node, 'fetchpriority') === 'high');
    const caption = page.nodes.find((node) => node.tagName === 'figcaption');
    assert.ok(getAttr(hero, 'alt')?.trim(), `${locale.code} ${route}: accessible hero alt`);
    assert.ok(nodeText(caption).trim().length > 12, `${locale.code} ${route}: visible photo caption`);

    if (locale.code === 'en') {
      englishBodies.set(route, page.body);
      const relative = route.slice(1) + 'index.html';
      const before = parsePage(baseline(relative));
      const delta = wordCount(page.body) - wordCount(before.body);
      assert.ok(delta > 250, `${route}: substantive English page expansion`);
      wordDeltas[route] = delta;
    }
  }
}

const requiredEnglish = {
  '/switzerland/interlaken-lakes/': ['Two nights', 'Three nights', 'Four nights', 'Interlaken Ost', 'Interlaken West', 'Zentralbahn', 'BLS', '3 April–6 December', 'April–October', 'Harder Kulm'],
  '/switzerland/interlaken-lakes/interlaken-base/': ['Höheweg', 'Höhematte', 'Unterseen', 'Interlaken Ost', 'Interlaken West', '1,322 metres', '10-minute funicular', 'MeteoSwiss'],
  '/switzerland/interlaken-lakes/brienz-giessbach/': ['Giessbach See', 'Grandhotel', 'Zentralbahn', '3 April–6 December', 'April–October', 'Brienz village'],
  '/switzerland/interlaken-lakes/thun-spiez/': ['Obere Hauptgasse', 'Rathausplatz', 'Schlossberg', 'Aare', '15-minute walk', 'SBB', 'BLS']
};
for (const [route, phrases] of Object.entries(requiredEnglish)) {
  const body = englishBodies.get(route) || '';
  for (const phrase of phrases) assert.ok(body.includes(phrase), `${route}: required practical detail “${phrase}”`);
}

for (const [key, expectedAlt, expectedTitle] of [
  ['interlaken-lakes/interlaken-base', 'Interlaken and Lake Brienz below the Harder Kulm ridge', 'Interlaken and Lake Brienz below Harder Kulm'],
  ['interlaken-lakes/brienz-giessbach', 'Iseltwald village on Lake Brienz, looking toward Giessbach and Brienz', 'Iseltwald on Lake Brienz looking toward Giessbach and Brienz'],
  ['interlaken-lakes/thun-spiez', 'Spiez Castle on the shore of Lake Thun', 'Spiez Castle and Lake Thun']
]) {
  const image = switzerlandImageManifest[key];
  assert.equal(image.alt, expectedAlt, `${key}: pixel-reviewed alt`);
  assert.equal(image.displayTitle, expectedTitle, `${key}: visible subject caption`);
  assert.ok(/^[a-f0-9]{40}$/i.test(image.remoteSha1), `${key}: source SHA-1 declaration retained`);
  assert.ok(image.source.startsWith('https://commons.wikimedia.org/wiki/File:'), `${key}: exact Commons source remains linked`);
  const html = fs.readFileSync(pagePath(locales[0], `/switzerland/${key.replace('interlaken-lakes/', 'interlaken-lakes/')}/`), 'utf8');
  assert.ok(html.includes(image.source), `${key}: source URL visible on the page`);
  assert.ok(html.includes(image.creator) && html.includes(image.license), `${key}: creator and declared license visible`);
}

const oldSitemap = sitemapRecords(baseline('sitemap.xml'));
const newSitemap = sitemapRecords(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.deepEqual([...newSitemap.keys()].filter((url) => !url.includes('/spain/')).sort(), [...oldSitemap.keys()].sort(), 'sitemap URL set unchanged');
const changedDates = [...newSitemap].filter(([route, date]) => route.includes('/switzerland/') && oldSitemap.get(route) !== date);
assert.deepEqual(new Set(changedDates.map(([route]) => route)), expectedDateChanges, 'only the reviewed Swiss clusters and their dependent overview routes across five editions have changed lastmod');
for (const [route, date] of changedDates) assert.equal(date, '2026-10-12', `${route}: sitemap lastmod`);

console.log(`Interlaken refresh regression passed: four existing routes, five locales, ${expectedDateChanges.size} sitemap dates, ${JSON.stringify(wordDeltas)} English main-text word deltas; exact URLs, canonical/hreflang, article dates, translated search summaries, route detail, photo captions/credits/licenses and unchanged sitemap URL set passed.`);
