#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';

const reviewDate = '2026-10-12';
const routes = [
  '/united-kingdom/kent-sussex-south-coast/',
  '/united-kingdom/kent-sussex-south-coast/brighton-lanes-seafront/',
  '/united-kingdom/kent-sussex-south-coast/canterbury-dover/',
  '/united-kingdom/kent-sussex-south-coast/seven-sisters-eastbourne/'
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

let checked = 0;
const outputs = fs.existsSync('dist') ? ['', 'dist/'] : [''];
for (const output of outputs) {
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

const sitemapFiles = ['sitemap.xml', ...(fs.existsSync('dist/sitemap.xml') ? ['dist/sitemap.xml'] : [])];
for (const sitemapFile of sitemapFiles) {
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

console.log(`UK Kent/Sussex route-date regression passed: ${checked} pages across four routes and five locales (${outputs.length === 2 ? 'source and dist' : 'source'}); all 20 localized sitemap URLs per checked sitemap are ${reviewDate}.`);
