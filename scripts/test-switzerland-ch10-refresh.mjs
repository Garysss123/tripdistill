import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { switzerlandClusters } from '../data/switzerland-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baseCommit = 'bfbdf6cf83dc8d44f40a492f3dabdaf3075aae12';
const locales = ['', '/zh', '/ja', '/ko', '/th'];
const refreshedSlugs = new Set([
  'basel-rhine',
  'st-moritz-engadin',
  'graubunden-corridors',
  'lugano-southern-ticino',
  'locarno-ascona-valleys',
  'schaffhausen-rhine-falls',
  'st-gallen-appenzell'
]);
const expectedRoutes = [
  '/switzerland/',
  ...switzerlandClusters.filter((cluster) => refreshedSlugs.has(cluster.slug)).flatMap((cluster) => [
    `/switzerland/${cluster.slug}/`,
    ...cluster.guides.map((guide) => guide.url)
  ])
];
const protectedAssets = {
  'assets/images/switzerland-lucerne-lake-mountains-rigi-route-choice.svg': '7aa01e299447ab7e80b94d93a44c1664774e548976424713b0549edcb21767d5',
  'assets/images/tripdistill-zermatt-glacier-route-choice.svg': 'c2557a543a6ff6eb4690763cc2822b2a15bc0bae1a95847cc9bd2c39073a8ea8'
};

function sitemapRecords(xml) {
  return new Map([...xml.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
    .map((match) => [match[1], match[2]]));
}

function read(relative) { return fs.readFileSync(path.join(root, relative), 'utf8'); }
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

assert.equal(expectedRoutes.length, 29, 'country page plus seven hubs and 21 existing child routes');
assert.equal(new Set(expectedRoutes).size, 29, 'CH10 route list has no duplicates');
assert.equal(switzerlandClusters.length, 16, 'Switzerland still has 16 hubs');
assert.equal(switzerlandClusters.flatMap((cluster) => cluster.guides).length, 48, 'Switzerland still has 48 children');

const baseSitemap = execFileSync('git', ['show', `${baseCommit}:sitemap.xml`], { cwd: root, encoding: 'utf8' });
const currentSitemap = read('sitemap.xml');
const before = sitemapRecords(baseSitemap);
const after = sitemapRecords(currentSitemap);
assert.equal(before.size, 4560, 'base sitemap has 4,560 URLs');
assert.equal(after.size, before.size, 'sitemap URL count is unchanged');
assert.deepEqual([...after.keys()].sort(), [...before.keys()].sort(), 'no route was added or removed');

const allowedDatedUrls = new Set(locales.flatMap((prefix) => expectedRoutes.map((route) => `${prefix}${route}`)));
const changedDates = [...after].filter(([route, date]) => before.get(route) !== date);
assert.ok(changedDates.length <= 145, 'only the 29 CH10 pages across five editions may receive new dates');
for (const [route, date] of changedDates) {
  assert.ok(allowedDatedUrls.has(route), `unexpected sitemap date change: ${route}`);
  assert.equal(date, '2026-10-12', `CH10 sitemap date for ${route}`);
}
for (const route of allowedDatedUrls) assert.equal(after.get(route), '2026-10-12', `current sitemap date for ${route}`);

for (const [asset, sha256] of Object.entries(protectedAssets)) {
  assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root, asset))).digest('hex'), sha256, `${asset} protected bytes`);
}

const englishSearch = JSON.parse(read('data/search-index.json'));
for (const cluster of switzerlandClusters.filter((item) => refreshedSlugs.has(item.slug))) {
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

const country = read('switzerland/index.html');
const countryArticle = articleFrom(country);
assert.equal(countryArticle?.dateModified, '2026-10-12', 'country Article review date');
assert.ok(country.includes('reviewed 12 October 2026'), 'country visible review date');
assert.equal(englishSearch.filter((record) => record.url === '/switzerland/').length, 1, 'country search record is unique');

for (const route of expectedRoutes) {
  const html = read(route.slice(1) + 'index.html');
  for (const [index, locale] of locales.entries()) {
    const code = ['en', 'zh-Hant', 'ja', 'ko', 'th'][index];
    const prefix = locale;
    assert.ok(html.includes(`hreflang="${code}" href="https://tripdistill.com${prefix}${route}"`), `${route} points to ${code} edition`);
  }
}

console.log(`CH10 content checks passed: ${expectedRoutes.length} existing routes, 21 child operating plans, five-language alternate links and ${allowedDatedUrls.size} sitemap entries, ${changedDates.length} changed sitemap dates, 4,560 total URLs.`);
