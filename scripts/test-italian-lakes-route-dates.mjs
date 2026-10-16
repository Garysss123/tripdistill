#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { italyClusters } from '../data/italy-guides.mjs';

const reviewDate = '2026-10-12';
const publishedDate = '2026-09-26';
const routes = [
  '/italy/italian-lakes/',
  '/italy/italian-lakes/lake-como-central-lake/',
  '/italy/italian-lakes/lake-maggiore-islands/',
  '/italy/italian-lakes/lake-garda-shores/'
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

const cluster = italyClusters.find((item) => item.slug === 'italian-lakes');
assert.ok(cluster, 'Italian Lakes cluster is missing');
assert.equal(cluster.reviewIsoDate, reviewDate);
assert.equal(cluster.publishedIsoDate, publishedDate);
assert.equal(cluster.guides.length, 3, 'Italian Lakes should retain its three existing children');
for (const guide of cluster.guides) {
  assert.ok(guide.localPlan, guide.url + ': route-specific walking/stay plan is missing');
}

let checkedPages = 0;
const outputs = fs.existsSync('dist') ? ['', 'dist/'] : [''];
for (const output of outputs) {
  for (const { locale, prefix } of editions) {
    for (const route of routes) {
      const file = output + prefix + route.slice(1) + 'index.html';
      const html = fs.readFileSync(file, 'utf8');
      const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
      assert.ok(scripts.length, file + ': missing JSON-LD');
      const articles = scripts.flatMap(([, raw]) => schemaObjects(JSON.parse(raw)))
        .filter((item) => item['@type'] === 'Article' && item.dateModified);
      assert.equal(articles.length, 1, file + ': expected one Article.dateModified');
      assert.equal(articles[0].dateModified, reviewDate, file + ': dateModified mismatch');
      assert.equal(articles[0].datePublished, publishedDate, file + ': original publication date changed');
      assert.match(html, datePatterns[locale], file + ': visible review date missing or stale');
      if (route !== routes[0]) assert.match(html, /data-it-local-plan/, file + ': route-specific plan missing');
      checkedPages += 1;
    }
  }
}

for (const sitemapFile of ['sitemap.xml', ...(fs.existsSync('dist/sitemap.xml') ? ['dist/sitemap.xml'] : [])]) {
  const sitemap = fs.readFileSync(sitemapFile, 'utf8');
  const entries = new Map([...sitemap.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
    .map(([, route, date]) => [route, date]));
  for (const { prefix } of editions) {
    for (const route of routes) {
      const localized = '/' + prefix + route.slice(1);
      assert.equal(entries.get(localized), reviewDate, sitemapFile + ': ' + localized + ' lastmod mismatch');
    }
  }
  const italyRoutes = [...entries.keys()].filter((route) => route.startsWith('/italy/') || /^\/(?:zh|ja|ko|th)\/italy\//.test(route));
  assert.equal(italyRoutes.length, 81 * editions.length, sitemapFile + ': Italy route count changed');
}

console.log('Italian Lakes date regression passed: ' + checkedPages + ' source/dist pages across four existing routes and five locales; original publication dates retained and all 20 localized sitemap entries synchronized to ' + reviewDate + '.');
