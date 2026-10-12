#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { italyCountryIt12, italyClusters } from '../data/italy-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = '70ab977ef29c4c7a101ac819a19fded1af45911a';
const reviewDate = '2026-10-12';
const publishedDate = '2026-09-26';
const selectedSlugs = [
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
const editions = [
  { locale: 'en', prefix: '' },
  { locale: 'zh-Hant', prefix: '/zh' },
  { locale: 'ja', prefix: '/ja' },
  { locale: 'ko', prefix: '/ko' },
  { locale: 'th', prefix: '/th' }
];
const datePatterns = {
  en: /reviewed 12 October 2026|Editorial review: 12 October 2026/,
  'zh-Hant': /2026\s*年\s*10\s*月\s*12\s*日/,
  ja: /2026年10月12日/,
  ko: /2026년 10월 12일/,
  th: /12 ตุลาคม 2026/
};
const clusters = italyClusters.filter((cluster) => selectedSlugs.includes(cluster.slug));
assert.equal(clusters.length, 9);
for (const cluster of clusters) {
  assert.equal(cluster.reviewDate, '12 October 2026', `${cluster.slug}: visible review date mismatch`);
  assert.equal(cluster.reviewIsoDate, reviewDate, `${cluster.slug}: review metadata mismatch`);
  assert.equal(cluster.publishedIsoDate, publishedDate, `${cluster.slug}: publication date changed`);
  assert.equal(cluster.guides.length, 3, `${cluster.slug}: selected child set changed`);
}
assert.equal(italyCountryIt12.reviewIsoDate, reviewDate);
assert.equal(italyCountryIt12.publishedIsoDate, publishedDate);
const routes = [
  '/italy/',
  ...clusters.flatMap((cluster) => [`/italy/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)])
];
assert.equal(routes.length, 37);
assert.equal(new Set(routes).size, 37);
assert.equal(italyClusters.length + italyClusters.flatMap((cluster) => cluster.guides).length + 1, 81,
  'Italy route inventory changed');

const parseSitemap = (text) => new Map([...text.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
  .map(([, route, date]) => [route, date]));
const baseline = parseSitemap(execFileSync('git', ['show', `${base}:sitemap.xml`], { cwd: root, encoding: 'utf8' }));
const expectedChanges = new Set(editions.flatMap(({ prefix }) => routes.map((route) => prefix + route)));
const locales = Object.fromEntries(editions.slice(1).map(({ locale }) => [
  locale,
  JSON.parse(fs.readFileSync(path.join(root, `data/i18n/${locale}.json`), 'utf8')).translations
]));
const sourceOutputs = fs.existsSync(path.join(root, 'dist')) ? ['', 'dist/'] : [''];
let checkedPages = 0;

function escapeHtml(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}

for (const output of sourceOutputs) {
  const entries = parseSitemap(fs.readFileSync(path.join(root, output, 'sitemap.xml'), 'utf8'));
  assert.equal(entries.size, 4560, `${output}sitemap URL count changed`);
  assert.deepEqual([...entries.keys()].sort(), [...baseline.keys()].sort(), `${output}sitemap URL set changed`);
  const changed = [...entries].filter(([route, date]) => baseline.get(route) !== date);
  assert.equal(changed.length, 185, `${output}sitemap changed ${changed.length} lastmod values instead of 185`);
  assert.deepEqual(new Set(changed.map(([route]) => route)), expectedChanges,
    `${output}sitemap lastmod changes escaped the selected 37 routes and five languages`);
  for (const [route, date] of changed) {
    assert.equal(baseline.get(route), publishedDate, `${route}: baseline was not 26 September`);
    assert.equal(date, reviewDate, `${route}: refreshed lastmod is not 12 October`);
  }

  for (const { locale, prefix } of editions) {
    const italyRoutes = [...entries.keys()].filter((route) => route.startsWith(`${prefix}/italy/`));
    assert.equal(italyRoutes.length, 81, `${output}sitemap ${locale} Italy route count changed`);
    const searchPath = path.join(root, output, prefix ? prefix.slice(1) : '', 'data/search-index.json');
    const search = JSON.parse(fs.readFileSync(searchPath, 'utf8'));
    const italySearch = search.filter((record) => record.url.startsWith(`${prefix}/italy/`));
    assert.equal(italySearch.length, 81, `${searchPath}: Italy search record count changed`);

    for (const route of routes) {
      const localizedRoute = prefix + route;
      assert.equal(entries.get(localizedRoute), reviewDate, `${output}sitemap ${localizedRoute} lastmod mismatch`);
      const file = path.join(root, output, prefix ? prefix.slice(1) : '', route.slice(1), 'index.html');
      const html = fs.readFileSync(file, 'utf8');
      assert.ok(html.includes(`"dateModified":"${reviewDate}"`), `${file}: review date missing`);
      assert.ok(html.includes(`"datePublished":"${publishedDate}"`), `${file}: original publication date changed`);
      assert.match(html, datePatterns[locale], `${file}: localized review date missing`);

      let summary;
      if (route === '/italy/') summary = italyCountryIt12.summary;
      else {
        const cluster = clusters.find((item) => route === `/italy/${item.slug}/` || route.startsWith(`/italy/${item.slug}/`));
        assert.ok(cluster, `${route}: route escaped selected cluster set`);
        summary = route === `/italy/${cluster.slug}/`
          ? cluster.hubIntro
          : cluster.guides.find((guide) => guide.url === route)?.summary;
      }
      const expectedSummary = locale === 'en' ? summary : locales[locale][summary];
      assert.ok(expectedSummary, `${locale}: missing search summary translation for ${route}`);
      const record = italySearch.find((item) => item.url === localizedRoute);
      assert.ok(record, `${searchPath}: missing ${localizedRoute}`);
      assert.equal(record.summary, expectedSummary, `${searchPath}: summary drift for ${localizedRoute}`);

      if (route !== '/italy/' && clusters.some((cluster) => cluster.guides.some((guide) => guide.url === route))) {
        const cluster = clusters.find((item) => item.guides.some((guide) => guide.url === route));
        const guide = cluster.guides.find((item) => item.url === route);
        assert.match(html, /data-it-local-plan/, `${file}: route-specific walk sequence missing`);
        for (const field of ['title', 'intro', 'stayTitle', 'stay', 'walkTitle', 'walk', 'bookingTitle', 'booking', 'seasonTitle', 'season']) {
          const source = guide.localPlan[field];
          const translation = locale === 'en' ? source : locales[locale][source];
          assert.ok(translation, `${locale}: missing local-plan ${field} on ${route}`);
          assert.ok(html.includes(escapeHtml(translation)), `${file}: local-plan ${field} is not localized`);
        }
      }
      checkedPages++;
    }
  }
}

console.log(`Italy IT12 date regression passed: ${checkedPages} source/dist pages across 37 existing routes and five languages; exact 4,560-URL sitemap set retained, exactly 185 intended lastmod values changed, publication dates and localized search/plans hold.`);
