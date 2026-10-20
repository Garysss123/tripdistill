#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { italyClusters } from '../data/italy-guides.mjs';

const reviewDate = '2026-10-12';
const publishedDate = '2026-09-26';
const routes = [
  '/italy/emilia-romagna/',
  '/italy/emilia-romagna/bologna-porticoes-markets/',
  '/italy/emilia-romagna/modena-parma-via-emilia/',
  '/italy/emilia-romagna/ravenna-ferrara-po-delta/'
];
const editions = [
  { locale: 'en', prefix: '' },
  { locale: 'zh-Hant', prefix: '/zh' },
  { locale: 'ja', prefix: '/ja' },
  { locale: 'ko', prefix: '/ko' },
  { locale: 'th', prefix: '/th' }
];
const datePatterns = {
  en: /reviewed 12 October 2026|Editorial review: 12 October 2026/,
  'zh-Hant': /2026年10月12日/,
  ja: /2026年10月12日/,
  ko: /2026년 10월 12일/,
  th: /12 ตุลาคม 2026/
};
const cluster = italyClusters.find((item) => item.slug === 'emilia-romagna');
assert.ok(cluster);
assert.equal(cluster.reviewDate, '12 October 2026');
assert.equal(cluster.reviewIsoDate, reviewDate);
assert.equal(cluster.publishedIsoDate, publishedDate);
assert.equal(cluster.guides.length, 3);

const outputs = fs.existsSync('dist') ? ['', 'dist/'] : [''];
let checked = 0;
for (const output of outputs) {
  const sitemap = fs.readFileSync(output + 'sitemap.xml', 'utf8');
  const entries = new Map([...sitemap.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
    .map(([, route, date]) => [route, date]));
  assert.equal(entries.size, 4890, `${output}sitemap.xml route count changed`);
  assert.equal([...entries.keys()].filter((route) => route.startsWith('/italy/') || /^\/(?:zh|ja|ko|th)\/italy\//.test(route)).length, 405,
    `${output}sitemap.xml Italy route count changed`);

  for (const { locale, prefix } of editions) {
    for (const route of routes) {
      const localizedRoute = prefix + route;
      assert.equal(entries.get(localizedRoute), reviewDate, `${output}sitemap.xml ${localizedRoute} lastmod mismatch`);
      const file = output + (prefix ? prefix.slice(1) + '/' : '') + route.slice(1) + 'index.html';
      const html = fs.readFileSync(file, 'utf8');
      assert.ok(html.includes(`"dateModified":"${reviewDate}"`), `${file}: review date missing`);
      assert.ok(html.includes(`"datePublished":"${publishedDate}"`), `${file}: original publication date changed`);
      assert.match(html, datePatterns[locale], `${file}: visible review date missing`);
      if (route !== routes[0]) assert.match(html, /data-it-local-plan/, `${file}: detailed route plan missing`);
      checked++;
    }
  }
  const search = JSON.parse(fs.readFileSync(output + 'data/search-index.json', 'utf8'));
  const italySearch = search.filter((record) => record.url.startsWith('/italy/'));
  assert.equal(italySearch.length, 81, `${output}search-index Italy route count changed`);
  for (const route of routes) assert.ok(italySearch.some((record) => record.url === route), `${output}search-index missing ${route}`);
  const current = JSON.parse(fs.readFileSync('data/search-index.json', 'utf8'));
  for (const guide of cluster.guides) assert.equal(current.find((record) => record.url === guide.url)?.summary, guide.summary, `${guide.url}: source search summary drifted`);
}
console.log(`Italy Emilia route-date regression passed: ${checked} source/dist documents across four existing routes and five languages; original publication dates remain, route/sitemap/search counts hold.`);
