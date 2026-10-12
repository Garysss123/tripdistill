#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { switzerlandClusters, switzerlandGuides } from '../data/switzerland-guides.mjs';
import { switzerlandImageManifest } from '../data/switzerland-image-manifest.mjs';
import { collectTranslationWork, localeConfigs } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baseCommit = 'd91e6e3cad2ba73a3b211d8c8fd0ba1e43dafe4e';
const locales = [{ code: 'en', dir: '', prefix: '' }, ...localeConfigs.map((locale) => ({
  code: locale.code, dir: locale.dir, prefix: locale.prefix
}))];
const routes = [
  '/switzerland/lausanne-lavaux/',
  '/switzerland/lausanne-lavaux/old-city-ouchy/',
  '/switzerland/lausanne-lavaux/lavaux-terraces/',
  '/switzerland/lausanne-lavaux/olympic-lake-cruise/'
];
const linkedOverview = '/switzerland/';
const cluster = switzerlandClusters.find((item) => item.slug === 'lausanne-lavaux');
assert.ok(cluster, 'the existing Lausanne & Lavaux hub remains in the source model');
assert.equal(cluster.reviewDate, '12 October 2026');
assert.equal(cluster.isoDate, '2026-10-12');
assert.deepEqual(cluster.guides.map((guide) => guide.slug), ['old-city-ouchy', 'lavaux-terraces', 'olympic-lake-cruise']);
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
function wordCount(text) { return (text.match(/[\p{L}\p{N}]+/gu) || []).length; }
function sha1(bytes) { return crypto.createHash('sha1').update(bytes).digest('hex'); }
function translation(locale, source) {
  if (locale.code === 'en') return source;
  const catalog = JSON.parse(fs.readFileSync(path.join(root, 'data/i18n', `${locale.code}.json`), 'utf8'));
  const value = catalog.translations?.[source];
  assert.ok(value, `${locale.code}: approved translation exists for ${source.slice(0, 90)}`);
  return value;
}

const routeSetFrom = (xml) => [...xml.matchAll(/<loc>(https:\/\/tripdistill\.com[^<]*)<\/loc>/g)].map((match) => new URL(match[1]).pathname).sort();
const beforeUrls = routeSetFrom(baseline('sitemap.xml'));
const afterSitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
assert.deepEqual(routeSetFrom(afterSitemap), beforeUrls, 'the sitemap URL set is unchanged');
const englishOverview = parsePage(fs.readFileSync(pagePath(locales[0], linkedOverview), 'utf8'));
const englishCard = englishOverview.nodes.find((node) => node.tagName === 'a' && attr(node, 'href') === '/switzerland/lausanne-lavaux/');
const englishCardSummary = nodeText(descendants(englishCard).find((node) => node.tagName === 'p')).replace(/\s+/g, ' ').trim();

const wordDeltas = [];
for (const locale of locales) {
  const searchPath = path.join(root, locale.dir, 'data', 'search-index.json');
  const search = JSON.parse(fs.readFileSync(searchPath, 'utf8'));
  for (const route of routes) {
    const html = fs.readFileSync(pagePath(locale, route), 'utf8');
    const page = parsePage(html);
    assert.ok(page.main && page.body.length > 1200, `${locale.code} ${route}: substantial page body`);
    const article = page.graph.find((item) => item['@type'] === 'Article');
    assert.ok(article, `${locale.code} ${route}: Article metadata`);
    assert.equal(article.datePublished, '2026-09-12', `${locale.code} ${route}: original publication date retained`);
    assert.equal(article.dateModified, '2026-10-12', `${locale.code} ${route}: refresh date`);
    assert.equal(article.inLanguage, locale.code, `${locale.code} ${route}: language metadata`);

    const canonical = page.nodes.find((node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical');
    assert.equal(attr(canonical, 'href'), `https://tripdistill.com${locale.prefix}${route}`, `${locale.code} ${route}: canonical`);
    for (const target of locales) {
      const alternate = page.nodes.find((node) => node.tagName === 'link' && attr(node, 'rel') === 'alternate' && attr(node, 'hreflang') === target.code);
      assert.equal(attr(alternate, 'href'), `https://tripdistill.com${target.prefix}${route}`, `${locale.code} ${route}: ${target.code} hreflang`);
    }
    const record = search.filter((item) => item.url === `${locale.prefix}${route}`);
    assert.equal(record.length, 1, `${locale.code} ${route}: one search record`);
    assert.equal(record[0].summary, article.description, `${locale.code} ${route}: search summary matches Article description`);
    assert.ok(record[0].keywords.length >= 3, `${locale.code} ${route}: route-specific search terms`);
    assert.match(afterSitemap, new RegExp(`<loc>https://tripdistill\\.com${locale.prefix.replaceAll('/', '\\/')}${route.replaceAll('/', '\\/')}<\\/loc><lastmod>2026-10-12<\\/lastmod>`), `${locale.code} ${route}: sitemap lastmod`);

    if (locale.code === 'en') {
      const relative = route.slice(1) + 'index.html';
      const before = parsePage(baseline(relative));
      wordDeltas.push(`${route}: +${wordCount(page.body) - wordCount(before.body)} words`);
    }
  }

  const overview = parsePage(fs.readFileSync(pagePath(locale, linkedOverview), 'utf8'));
  const cards = overview.nodes.filter((node) => node.tagName === 'a' && (attr(node, 'class') || '').split(/\s+/).includes('ch-country-card'));
  assert.equal(cards.length, 16, `${locale.code}: all original Switzerland cards remain`);
  const card = cards.find((node) => attr(node, 'href') === `${locale.prefix}/switzerland/lausanne-lavaux/` || attr(node, 'href') === '/switzerland/lausanne-lavaux/');
  assert.ok(card, `${locale.code}: existing Lausanne card remains linked`);
  const cardImage = descendants(card).find((node) => node.tagName === 'img');
  const cardSummary = nodeText(descendants(card).find((node) => node.tagName === 'p')).replace(/\s+/g, ' ').trim();
  const image = switzerlandImageManifest['lausanne-lavaux/old-city-ouchy'];
  assert.equal(attr(cardImage, 'src'), image.src, `${locale.code}: overview uses the existing Ouchy photo`);
  assert.equal(attr(cardImage, 'alt'), translation(locale, image.alt), `${locale.code}: corrected photo alt is localized`);
  assert.equal(cardSummary, translation(locale, englishCardSummary), `${locale.code}: updated overview card summary is localized`);
  const overviewArticle = overview.graph.find((item) => item['@type'] === 'Article');
  assert.equal(overviewArticle?.dateModified, '2026-10-12', `${locale.code}: existing linked overview date`);
  assert.match(afterSitemap, new RegExp(`<loc>https://tripdistill\\.com${locale.prefix.replaceAll('/', '\\/')}\\/switzerland\\/<\\/loc><lastmod>2026-10-12<\\/lastmod>`), `${locale.code}: dependent overview date`);
}

const expectedImageRecords = [
  ['lausanne-lavaux/old-city-ouchy', 'CC BY-SA 4.0', 'OlhaSolodenko'],
  ['lausanne-lavaux/lavaux-terraces', 'CC BY-SA 3.0', 'Severin.stalder'],
  ['lausanne-lavaux/olympic-lake-cruise', 'CC BY 2.5', 'jynus']
];
for (const [key, license, creator] of expectedImageRecords) {
  const image = switzerlandImageManifest[key];
  assert.ok(image, `${key}: existing image provenance is retained`);
  assert.equal(image.license, license, `${key}: Commons source-page license declaration is unchanged`);
  assert.equal(image.creator, creator, `${key}: source-page attribution is unchanged`);
  assert.equal(image.assetType, undefined, `${key}: matched photo is not misclassified as a schematic`);
  const currentBytes = fs.readFileSync(path.join(root, image.src.slice(1)));
  const baseBytes = execFileSync('git', ['show', `${baseCommit}:${image.src.slice(1)}`], { cwd: root });
  assert.equal(sha1(currentBytes), sha1(baseBytes), `${key}: existing image bytes are unchanged`);
}
assert.equal(switzerlandImageManifest['lausanne-lavaux/old-city-ouchy'].alt, 'Lake Geneva at Lausanne’s Ouchy waterfront, with a small boat near the shore');
assert.ok(!fs.existsSync(path.join(root, 'assets/images/switzerland-lausanne-lavaux-route.svg')), 'no replacement SVG was needed because the three photos match their source subjects');

const translationWork = collectTranslationWork();
const ownedRoutes = new Set([...routes, linkedOverview]);
assert.ok([...ownedRoutes].every((route) => translationWork.some((record) => record.route === route)), 'selected pages remain in translation work');
const renderedRouteSet = new Set(routeSetFrom(afterSitemap));
for (const route of routes) for (const locale of locales) assert.ok(renderedRouteSet.has(`${locale.prefix}${route}`), `${locale.code} ${route}: URL is in the unchanged sitemap set`);

console.log(`Lausanne refresh regression passed: ${routes.length} existing articles × ${locales.length} editions, one dependent overview card, ${routes.length * locales.length} article date/search/canonical/hreflang checks, five-edition overview card parity, preserved photo bytes and source declarations, and no sitemap URL change.`);
console.log(`English <main> word-count deltas against ${baseCommit}: ${wordDeltas.join('; ')}`);
