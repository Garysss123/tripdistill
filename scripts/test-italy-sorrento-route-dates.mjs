#!/usr/bin/env node
import { isGreeceRoutePath } from './greece-route-test-utils.mjs';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { italyClusters } from '../data/italy-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = 'a9b6017a52dcf177d51a5173642c80b5b6b80d5e';
const reviewDate = '2026-10-12';
const publishedDate = '2026-09-26';
const localeEditions = [
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
const cluster = italyClusters.find((item) => item.slug === 'sorrento-amalfi-capri');
assert.ok(cluster, 'Sorrento/Amalfi/Capri cluster is missing');
assert.equal(cluster.reviewDate, '12 October 2026');
assert.equal(cluster.reviewIsoDate, reviewDate);
assert.equal(cluster.publishedIsoDate, publishedDate);
const routes = [`/italy/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)];
assert.equal(routes.length, 4);
const it12Slugs = [
  'veneto-art-cities',
  'dolomites-trentino-south-tyrol',
  'turin-piedmont',
  'genoa-liguria',
  'marche-abruzzo',
  'basilicata-calabria',
  'western-sicily',
  'eastern-sicily',
  'sardinia'
];
const it12Routes = [
  '/italy/',
  ...italyClusters.filter((item) => it12Slugs.includes(item.slug))
    .flatMap((item) => [`/italy/${item.slug}/`, ...item.guides.map((guide) => guide.url)])
];
assert.equal(italyClusters.length + italyClusters.flatMap((item) => item.guides).length + 1, 81,
  'Italy source route set changed');

const parseSitemap = (text) => new Map([...text.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
  .map(([, route, date]) => [route, date]));
const baseline = parseSitemap(execFileSync('git', ['show', `${base}:sitemap.xml`], { cwd: root, encoding: 'utf8' }));
const expectedChanges = new Set(localeEditions.flatMap(({ prefix }) => [...routes, ...it12Routes].map((route) => prefix + route)));
const fields = ['title', 'intro', 'stayTitle', 'stay', 'walkTitle', 'walk', 'bookingTitle', 'booking', 'seasonTitle', 'season'];
const catalogs = Object.fromEntries(localeEditions.slice(1).map(({ locale }) => [
  locale,
  JSON.parse(fs.readFileSync(path.join(root, `data/i18n/${locale}.json`), 'utf8')).translations
]));
const outputs = fs.existsSync(path.join(root, 'dist')) ? ['', 'dist/'] : [''];
let checkedPages = 0;

for (const output of outputs) {
  const currentSitemap = fs.readFileSync(path.join(root, output, 'sitemap.xml'), 'utf8');
  const entries = parseSitemap(currentSitemap);
  assert.equal(entries.size, 4890, `${output}sitemap URL count changed`);
  assert.deepEqual([...entries.keys()].filter((url) => !url.includes('/spain/') && !isGreeceRoutePath(url)).sort(), [...baseline.keys()].sort(), `${output}sitemap URL set changed`);
  const changed = [...entries].filter(([route, date]) => expectedChanges.has(route) && baseline.get(route) !== date);
  assert.equal(changed.length, 205, `${output}sitemap changed ${changed.length} selected lastmod values instead of 205`);
  assert.deepEqual(new Set(changed.map(([route]) => route)), expectedChanges,
    `${output}sitemap lastmod changes escaped the Sorrento and IT12 route sets`);
  for (const [route, date] of changed) {
    assert.equal(baseline.get(route), publishedDate, `${route}: source lastmod was not 26 September`);
    assert.equal(date, reviewDate, `${route}: refreshed lastmod is not 12 October`);
  }

  for (const { locale, prefix } of localeEditions) {
    const italySitemapEntries = [...entries.keys()].filter((route) => route.startsWith(`${prefix}/italy/`));
    assert.equal(italySitemapEntries.length, 81, `${output}sitemap ${locale} Italy route count changed`);
    for (const route of routes) {
      const localizedRoute = prefix + route;
      assert.equal(entries.get(localizedRoute), reviewDate, `${output}sitemap ${localizedRoute} lastmod mismatch`);
      const file = path.join(root, output, prefix ? prefix.slice(1) : '', route.slice(1), 'index.html');
      const html = fs.readFileSync(file, 'utf8');
      assert.ok(html.includes(`"dateModified":"${reviewDate}"`), `${file}: review date missing`);
      assert.ok(html.includes(`"datePublished":"${publishedDate}"`), `${file}: original publication date changed`);
      assert.match(html, datePatterns[locale], `${file}: visible localized review date missing`);
      const guide = cluster.guides.find((item) => item.url === route);
      if (guide) {
        assert.ok(html.includes('data-it-local-plan'), `${file}: route-specific plan is not rendered`);
        for (const field of fields) {
          const source = guide.localPlan[field];
          const translation = locale === 'en' ? source : catalogs[locale][source];
          assert.ok(translation, `${locale}: missing local-plan translation for ${field} on ${route}`);
          const escaped = String(translation).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;').replaceAll("'", '&#39;');
          assert.ok(html.includes(escaped), `${file}: local-plan ${field} is not localized`);
        }
      }
      checkedPages++;
    }

    const searchPath = path.join(root, output, prefix ? prefix.slice(1) : '', 'data/search-index.json');
    const search = JSON.parse(fs.readFileSync(searchPath, 'utf8'));
    const italySearch = search.filter((record) => record.url.startsWith(`${prefix}/italy/`));
    assert.equal(italySearch.length, 81, `${searchPath}: Italy search record count changed`);
    for (const route of routes) {
      const sourceSummary = route === routes[0]
        ? cluster.hubIntro
        : cluster.guides.find((guide) => guide.url === route).summary;
      const expectedSummary = locale === 'en' ? sourceSummary : catalogs[locale][sourceSummary];
      const record = italySearch.find((item) => item.url === prefix + route);
      assert.ok(record, `${searchPath}: missing ${prefix + route}`);
      assert.equal(record.summary, expectedSummary, `${searchPath}: localized summary drifted for ${prefix + route}`);
    }
  }
}

console.log(`Italy Sorrento/Amalfi/Capri date regression passed: ${checkedPages} source/dist pages across four existing routes and five languages; exact 4,560-URL sitemap set retained, exactly 205 selected lastmod values changed (185 IT12 plus 20 Sorrento), publication dates and localized search/local plans hold.`);
