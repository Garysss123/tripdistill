#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';

const reviewDate = '2026-10-12';
const routes = [
  '/united-kingdom/peak-district-derbyshire/',
  '/united-kingdom/peak-district-derbyshire/bakewell-chatsworth/',
  '/united-kingdom/peak-district-derbyshire/hope-valley-edale/',
  '/united-kingdom/peak-district-derbyshire/dovedale-ashbourne/'
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

function schemaObjects(value, found = []) {
  if (!value || typeof value !== 'object') return found;
  found.push(value);
  for (const child of Object.values(value)) {
    if (child && typeof child === 'object') schemaObjects(child, found);
  }
  return found;
}

let checkedPages = 0;
for (const output of ['', 'dist/']) {
  for (const { locale, prefix } of editions) {
    for (const route of routes) {
      const file = `${output}${prefix}${route.slice(1)}index.html`;
      const html = fs.readFileSync(file, 'utf8');
      const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
      assert.ok(scripts.length, `${file}: missing JSON-LD`);
      const objects = scripts.flatMap(([, raw]) => schemaObjects(JSON.parse(raw)));
      const articles = objects.filter((item) => item['@type'] === 'Article' && item.dateModified);
      assert.equal(articles.length, 1, `${file}: expected one Article.dateModified`);
      assert.equal(articles[0].dateModified, reviewDate, `${file}: dateModified mismatch`);
      assert.match(html, datePatterns[locale], `${file}: visible review date missing or stale`);
      checkedPages += 1;
    }
  }
}

const uniqueLocalizedRoutes = new Set(editions.flatMap(({ prefix }) => routes.map((route) => `/${prefix}${route.slice(1)}`)));
assert.equal(uniqueLocalizedRoutes.size, 20, 'four routes across five editions must represent 20 unique sitemap URLs');

for (const sitemapFile of ['sitemap.xml', 'dist/sitemap.xml']) {
  const sitemap = fs.readFileSync(sitemapFile, 'utf8');
  const records = [...sitemap.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
    .map(([, route, date]) => [route, date]);
  const targetedRecords = records.filter(([route]) => uniqueLocalizedRoutes.has(route));
  assert.equal(targetedRecords.length, 20, `${sitemapFile}: expected exactly one record for each of 20 unique localized URLs`);
  assert.equal(new Set(targetedRecords.map(([route]) => route)).size, 20, `${sitemapFile}: duplicate localized URL record`);
  const lastmodByRoute = new Map(targetedRecords);
  for (const route of uniqueLocalizedRoutes) {
    assert.equal(lastmodByRoute.get(route), reviewDate, `${sitemapFile}: ${route} lastmod mismatch`);
  }
}

console.log(`UK Peak District route-date regression passed: ${checkedPages} source/dist page files across four routes and five locales. The 20 unique localized sitemap URLs each appear once in both source and dist sitemaps with lastmod ${reviewDate}.`);
