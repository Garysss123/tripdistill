import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { switzerlandClusters } from '../data/switzerland-guides.mjs';
import { switzerlandCh10ClusterRefresh, switzerlandCh10GuideRefresh } from '../data/switzerland-ch10-refresh.mjs';
import { switzerlandCh10CountryPageDraft } from '../data/switzerland-ch10-country-draft.mjs';
import { switzerlandCh15AffectedRoutes, switzerlandCh15Routes, switzerlandCh16Routes } from './switzerland-ch15-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baseCommit = 'a0da2c3b2d27276bc83993b19ae96521798c032b';
const locales = ['', '/zh', '/ja', '/ko', '/th'];
const batchCluster = switzerlandClusters.find((cluster) => cluster.slug === 'basel-rhine');
const expectedRoutes = [`/switzerland/${batchCluster.slug}/`, ...batchCluster.guides.map((guide) => guide.url)];
const ch11Cluster = switzerlandClusters.find((cluster) => cluster.slug === 'st-moritz-engadin');
const ch11Routes = [`/switzerland/${ch11Cluster.slug}/`, ...ch11Cluster.guides.map((guide) => guide.url)];
const ch12Cluster = switzerlandClusters.find((cluster) => cluster.slug === 'st-gallen-appenzell');
const ch12Routes = [`/switzerland/${ch12Cluster.slug}/`, ...ch12Cluster.guides.map((guide) => guide.url)];
const ch13Cluster = switzerlandClusters.find((cluster) => cluster.slug === 'graubunden-corridors');
const ch13Routes = [`/switzerland/${ch13Cluster.slug}/`, ...ch13Cluster.guides.map((guide) => guide.url)];
const ch14Routes = ['/switzerland/', '/switzerland/lugano-southern-ticino/', '/switzerland/locarno-ascona-valleys/', '/switzerland/schaffhausen-rhine-falls/'];
const ch14NewDateRoutes = ch14Routes.slice(1);
const editedRoutes = new Set([...expectedRoutes, ...ch11Routes, ...ch12Routes, ...ch13Routes, ...ch14Routes, ...switzerlandCh15AffectedRoutes, ...switzerlandCh16Routes]);
const allRoutes = ['/switzerland/', ...switzerlandClusters.flatMap((cluster) => [`/switzerland/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)])];
const protectedAssets = {
  'assets/images/switzerland-lucerne-lake-mountains-rigi-route-choice.svg': '7ba0854acd7bd4602f5559cfb37f73b497408dafb1afec7a9094bf43b9b5e4cf',
  'assets/images/tripdistill-zermatt-glacier-route-choice.svg': '671a60852805748c8bf7ea4f5fc362305dc8f8c932fbd58fd661a8921794d366'
};

function sitemapRecords(xml) {
  return new Map([...xml.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
    .map((match) => [match[1], match[2]]));
}

function read(relative) { return fs.readFileSync(path.join(root, relative), 'utf8'); }
function normalizeSharedAssetVersions(html) {
  return html
    .replace(/\/css\/site\.css\?v=[^"'\s]+/gu, '/css/site.css?v=<shared>')
    .replace(/\/js\/main\.js\?v=[^"'\s]+/gu, '/js/main.js?v=<shared>');
}
function routeFile(prefix, route) { return path.join(root, prefix.slice(1), route.slice(1), 'index.html'); }
function articleFrom(html) {
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const match of scripts) {
    try {
      const data = JSON.parse(match[1]);
      const graph = Array.isArray(data['@graph']) ? data['@graph'] : [data];
      const article = graph.find((item) => item['@type'] === 'Article');
      if (article) return article;
    } catch {}
  }
  return null;
}

assert.equal(expectedRoutes.length, 4, 'batch one is one hub plus its three existing child routes');
assert.equal(new Set(expectedRoutes).size, 4, 'CH10 batch route list has no duplicates');
assert.equal(switzerlandClusters.length, 16, 'Switzerland still has 16 hubs');
assert.equal(switzerlandClusters.flatMap((cluster) => cluster.guides).length, 48, 'Switzerland still has 48 children');
assert.equal(Object.keys(switzerlandCh10ClusterRefresh).length, 7, 'all seven CH10 hub drafts remain preserved');
assert.equal(Object.keys(switzerlandCh10GuideRefresh).length, 21, 'all 21 CH10 child drafts remain preserved');
assert.ok(switzerlandCh10CountryPageDraft.summary && switzerlandCh10CountryPageDraft.hero, 'the country-page draft remains preserved for a later batch');

for (const route of allRoutes.filter((item) => !editedRoutes.has(item))) {
  const relative = `${route.slice(1)}index.html`;
  const baseline = execFileSync('git', ['show', `${baseCommit}:${relative}`], { cwd: root });
  assert.equal(normalizeSharedAssetVersions(fs.readFileSync(path.join(root, relative), 'utf8')), normalizeSharedAssetVersions(baseline.toString('utf8')), `${route} remains inactive apart from shared asset cache versions`);
}

const baseSitemap = execFileSync('git', ['show', `${baseCommit}:sitemap.xml`], { cwd: root, encoding: 'utf8' });
const currentSitemap = read('sitemap.xml');
const before = sitemapRecords(baseSitemap);
const after = sitemapRecords(currentSitemap);
assert.equal(before.size, 4560, 'base sitemap has 4,560 URLs');
assert.equal(after.size, before.size, 'sitemap URL count is unchanged');
assert.deepEqual([...after.keys()].sort(), [...before.keys()].sort(), 'no route was added or removed');

const allowedDatedUrls = new Set(locales.flatMap((prefix) => [...ch11Routes, ...ch12Routes, ...ch13Routes, ...ch14NewDateRoutes, ...switzerlandCh15Routes, ...switzerlandCh16Routes].map((route) => `${prefix}${route}`)));
const changedDates = [...after].filter(([route, date]) => route.includes('/switzerland/') && before.get(route) !== date);
assert.equal(changedDates.length, allowedDatedUrls.size, 'only the CH11, CH12, CH13 and three downstream CH14 hub pages across five editions receive new dates after the verified CH10 source');
for (const [route, date] of changedDates) {
  assert.ok(allowedDatedUrls.has(route), `unexpected sitemap date change: ${route}`);
  assert.equal(date, '2026-10-12', `CH11 sitemap date for ${route}`);
}
for (const route of allowedDatedUrls) assert.equal(after.get(route), '2026-10-12', `current CH11 sitemap date for ${route}`);
for (const route of locales.flatMap((prefix) => expectedRoutes.map((item) => `${prefix}${item}`))) {
  assert.equal(after.get(route), '2026-10-12', `verified CH10 date remains intact for ${route}`);
}

for (const [asset, sha256] of Object.entries(protectedAssets)) {
  assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root, asset))).digest('hex'), sha256, `${asset} protected bytes`);
}

const englishSearch = JSON.parse(read('data/search-index.json'));
for (const cluster of [batchCluster]) {
  const hubRoute = `/switzerland/${cluster.slug}/`;
  const hubHtml = read(`switzerland/${cluster.slug}/index.html`);
  const hubArticle = articleFrom(hubHtml);
  assert.ok(hubArticle, `${hubRoute} Article JSON-LD exists`);
  assert.equal(hubArticle.datePublished, '2026-09-12', `${hubRoute} publication date preserved`);
  assert.equal(hubArticle.dateModified, '2026-10-12', `${hubRoute} review date`);
  for (const field of [cluster.stay, cluster.transfer, cluster.season, cluster.fallback]) {
    assert.ok(hubHtml.includes(field.replaceAll('&', '&amp;')), `${hubRoute} contains hub planning detail`);
  }
  const hubSearch = englishSearch.filter((record) => record.url === hubRoute);
  assert.equal(hubSearch.length, 1, `${hubRoute} has one English search record`);
  assert.equal(hubSearch[0].summary, hubArticle.description, `${hubRoute} search and Article descriptions match`);

  for (const guide of cluster.guides) {
    const html = read(guide.url.slice(1) + 'index.html');
    const article = articleFrom(html);
    assert.ok(article, `${guide.url} Article JSON-LD exists`);
    assert.equal(article.datePublished, '2026-09-12', `${guide.url} publication date preserved`);
    assert.equal(article.dateModified, '2026-10-12', `${guide.url} review date`);
    assert.equal((html.match(/<li><span>0[1-4]<\/span>/g) || []).length, 4, `${guide.url} has four ordered route stages`);
    assert.ok(html.includes(guide.summary.replaceAll('&', '&amp;')), `${guide.url} route summary is rendered`);
    assert.ok(html.includes('Official sources and photo credits'), `${guide.url} retains visible source and photo-credit block`);
    const imagePath = path.join(root, guide.image.src.replace(/^\//, ''));
    assert.ok(fs.existsSync(imagePath), `${guide.url} image asset exists`);
    const entry = englishSearch.filter((record) => record.url === guide.url);
    assert.equal(entry.length, 1, `${guide.url} has one English search record`);
    assert.equal(entry[0].summary, article.description, `${guide.url} search and Article descriptions match`);
  }
}

for (const route of expectedRoutes) {
  const html = read(route.slice(1) + 'index.html');
  for (const [index, locale] of locales.entries()) {
    const code = ['en', 'zh-Hant', 'ja', 'ko', 'th'][index];
    const prefix = locale;
    assert.ok(html.includes(`hreflang="${code}" href="https://tripdistill.com${prefix}${route}"`), `${route} points to ${code} edition`);
  }
}

console.log(`CH10 preservation checks passed: Basel’s ${expectedRoutes.length} routes remain dated and intact; CH11–CH16 updates changed only their declared dates since a0da2c3; ${after.size} sitemap URLs and later drafts remain intact.`);
