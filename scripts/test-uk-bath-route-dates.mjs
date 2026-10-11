#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';

const reviewDate = '2026-10-11';
const routes = [
  '/united-kingdom/bath-bristol-somerset/',
  '/united-kingdom/bath-bristol-somerset/bath-roman-georgian-city/',
  '/united-kingdom/bath-bristol-somerset/bristol-harbourside-clifton/',
  '/united-kingdom/bath-bristol-somerset/wells-glastonbury-mendips/'
];
const editions = [
  { locale: 'en', prefix: '' },
  { locale: 'zh-Hant', prefix: 'zh/' },
  { locale: 'ja', prefix: 'ja/' },
  { locale: 'ko', prefix: 'ko/' },
  { locale: 'th', prefix: 'th/' }
];
const datePatterns = {
  en: /11\s+October\s+2026/i,
  'zh-Hant': /2026\s*年\s*10\s*月\s*11\s*日/,
  ja: /2026\s*年\s*10\s*月\s*11\s*日/,
  ko: /2026\s*년\s*10\s*월\s*11\s*일/,
  th: /11\s*ตุลาคม\s*2026/
};

function schemaObjects(value, found = []) {
  if (!value || typeof value !== 'object') return found;
  found.push(value);
  for (const child of Object.values(value)) {
    if (child && typeof child === 'object') schemaObjects(child, found);
  }
  return found;
}

let checked = 0;
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
      checked += 1;
    }
  }
}

for (const sitemapFile of ['sitemap.xml', 'dist/sitemap.xml']) {
  const sitemap = fs.readFileSync(sitemapFile, 'utf8');
  const records = new Map([...sitemap.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
    .map(([, route, date]) => [route, date]));
  for (const { prefix } of editions) {
    for (const route of routes) {
      const localizedRoute = `/${prefix}${route.slice(1)}`;
      assert.equal(records.get(localizedRoute), reviewDate, `${sitemapFile}: ${localizedRoute} lastmod mismatch`);
    }
  }
}

console.log(`UK Bath/Bristol/Somerset route-date regression passed: ${checked} source/dist pages across four routes and five locales; all 40 sitemap lastmod values are ${reviewDate}, and page dates match.`);
