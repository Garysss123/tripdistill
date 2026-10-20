#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { italyClusters } from '../data/italy-guides.mjs';

const reviewDate = '2026-10-12';
const publishedDate = '2026-09-26';
const routes = [
  '/italy/milan/',
  '/italy/milan/duomo-brera/',
  '/italy/milan/last-supper-castello/',
  '/italy/milan/navigli-porta-nuova-design/'
];
const editions = [
  { locale: 'en', prefix: '' },
  { locale: 'zh-Hant', prefix: 'zh/' },
  { locale: 'ja', prefix: 'ja/' },
  { locale: 'ko', prefix: 'ko/' },
  { locale: 'th', prefix: 'th/' }
];
const datePatterns = {
  en: /12\s+October\s+2026/i,
  'zh-Hant': /2026\s*年\s*10\s*月\s*12\s*日/,
  ja: /2026\s*年\s*10\s*月\s*12\s*日/,
  ko: /2026\s*년\s*10\s*월\s*12\s*일/,
  th: /12\s*ตุลาคม\s*2026/
};
const cluster = italyClusters.find((item) => item.slug === 'milan');
assert.ok(cluster, 'Milan cluster is missing');
assert.equal(cluster.reviewDate, '12 October 2026');
assert.equal(cluster.reviewIsoDate, reviewDate);
assert.equal(cluster.publishedIsoDate, publishedDate);
assert.equal(cluster.guides.length, 3, 'Milan must retain exactly three existing children');
for (const guide of cluster.guides) {
  assert.ok(guide.localPlan, `${guide.url}: route-specific plan is missing`);
  for (const key of ['stay', 'walk', 'booking', 'season']) {
    assert.ok(guide.localPlan[key]?.trim(), `${guide.url}: ${key} copy is missing`);
  }
}
for (const field of ['stay', 'walk', 'booking', 'season']) {
  assert.equal(new Set(cluster.guides.map((guide) => guide.localPlan[field])).size, 3, `Milan ${field} copy must be route-specific`);
}

const outputs = fs.existsSync('dist') ? ['', 'dist/'] : [''];
let checkedPages = 0;
for (const output of outputs) {
  const sitemapFile = output + 'sitemap.xml';
  const sitemap = fs.readFileSync(sitemapFile, 'utf8');
  const entries = new Map([...sitemap.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
    .map(([, route, date]) => [route, date]));
  assert.equal(entries.size, 4725, `${sitemapFile}: route count changed`);
  const italyRoutes = [...entries.keys()].filter((route) => route.startsWith('/italy/') || /^\/(?:zh|ja|ko|th)\/italy\//.test(route));
  assert.equal(italyRoutes.length, 81 * editions.length, `${sitemapFile}: Italy route count changed`);

  for (const { locale, prefix } of editions) {
    for (const route of routes) {
      const localizedRoute = '/' + prefix + route.slice(1);
      assert.equal(entries.get(localizedRoute), reviewDate, `${sitemapFile}: ${localizedRoute} lastmod mismatch`);
      const file = output + prefix + route.slice(1) + 'index.html';
      const html = fs.readFileSync(file, 'utf8');
      assert.ok(html.includes(`"dateModified":"${reviewDate}"`), `${file}: structured review date is missing`);
      assert.ok(html.includes(`"datePublished":"${publishedDate}"`), `${file}: original publication date changed`);
      assert.match(html, datePatterns[locale], `${file}: visible localized review date is stale`);
      if (route !== routes[0]) assert.match(html, /data-it-local-plan/, `${file}: route-specific plan is missing`);
      const guide = cluster.guides.find((item) => item.url === route);
      if (locale === 'en' && guide) {
        for (const key of ['stay', 'walk', 'booking', 'season']) {
          assert.ok(html.includes(guide.localPlan[key]), `${file}: ${key} copy was not rendered`);
        }
      }
      checkedPages += 1;
    }
  }

  const searchFile = output + 'data/search-index.json';
  const search = JSON.parse(fs.readFileSync(searchFile, 'utf8'));
  const italySearchRoutes = search.filter((record) => record.url.startsWith('/italy/'));
  assert.equal(italySearchRoutes.length, 81, `${searchFile}: Italy search route count changed`);
  for (const route of routes) assert.ok(italySearchRoutes.some((record) => record.url === route), `${searchFile}: ${route} search record is missing`);
}

console.log(`Italy Milan route-date regression passed: ${checkedPages} source/dist pages across four existing routes and five locales; original publication dates retained, review dates and sitemaps synchronized, and Italy route/search counts unchanged.`);
