#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { italyClusters } from '../data/italy-guides.mjs';

const reviewDate = '2026-10-12';
const publishedDate = '2026-09-26';
const routes = [
  '/italy/umbria/',
  '/italy/umbria/perugia-ridge-city/',
  '/italy/umbria/assisi-franciscan-city/',
  '/italy/umbria/orvieto-cliff-city/'
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
const cluster = italyClusters.find((item) => item.slug === 'umbria');
assert.ok(cluster);
assert.equal(cluster.reviewDate, '12 October 2026');
assert.equal(cluster.reviewIsoDate, reviewDate);
assert.equal(cluster.publishedIsoDate, publishedDate);
assert.deepEqual(routes, [`/italy/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)]);
assert.equal(italyClusters.length + italyClusters.flatMap((item) => item.guides).length + 1, 81,
  'Italy route set changed');

const fields = ['title', 'intro', 'stayTitle', 'stay', 'walkTitle', 'walk', 'bookingTitle', 'booking', 'seasonTitle', 'season'];
const catalogs = Object.fromEntries(editions.slice(1).map(({ locale }) => [
  locale,
  JSON.parse(fs.readFileSync(`data/i18n/${locale}.json`, 'utf8')).translations
]));
const outputs = fs.existsSync('dist') ? ['', 'dist/'] : [''];
let checked = 0;
for (const output of outputs) {
  const sitemap = fs.readFileSync(output + 'sitemap.xml', 'utf8');
  const entries = new Map([...sitemap.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
    .map(([, route, date]) => [route, date]));
  assert.equal(entries.size, 4560, `${output}sitemap.xml route count changed`);
  assert.equal([...entries.keys()].filter((route) => route.startsWith('/italy/') || /^\/(?:zh|ja|ko|th)\/italy\//.test(route)).length, 405,
    `${output}sitemap.xml Italy route count changed`);

  for (const { locale, prefix } of editions) {
    const umbriaEntries = [...entries].filter(([route]) => (route === `${prefix}/italy/umbria/` || route.startsWith(`${prefix}/italy/umbria/`)));
    assert.equal(umbriaEntries.length, 4, `${output}sitemap.xml ${locale} Umbria route set changed`);
    for (const route of routes) {
      const localizedRoute = prefix + route;
      assert.equal(entries.get(localizedRoute), reviewDate, `${output}sitemap.xml ${localizedRoute} lastmod mismatch`);
      const file = output + (prefix ? prefix.slice(1) + '/' : '') + route.slice(1) + 'index.html';
      const html = fs.readFileSync(file, 'utf8');
      assert.ok(html.includes(`"dateModified":"${reviewDate}"`), `${file}: review date missing`);
      assert.ok(html.includes(`"datePublished":"${publishedDate}"`), `${file}: original publication date changed`);
      assert.match(html, datePatterns[locale], `${file}: visible review date missing`);
      if (route !== routes[0]) {
        const guide = cluster.guides.find((item) => item.url === route);
        assert.ok(html.includes('data-it-local-plan'), `${file}: detailed local plan missing`);
        for (const field of fields) {
          const source = guide.localPlan[field];
          const translation = locale === 'en' ? source : catalogs[locale][source];
          assert.ok(translation, `${locale}: missing local-plan translation for ${field} on ${route}`);
          const escaped = String(translation).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;').replaceAll("'", '&#39;');
          assert.ok(html.includes(escaped), `${file}: local-plan ${field} is not localized`);
        }
      }
      checked++;
    }
    const searchPath = output + (prefix ? prefix.slice(1) + '/' : '') + 'data/search-index.json';
    const search = JSON.parse(fs.readFileSync(searchPath, 'utf8'));
    const italySearch = search.filter((record) => record.url.startsWith(`${prefix}/italy/`));
    assert.equal(italySearch.length, 81, `${searchPath}: Italy search route count changed`);
    for (const route of routes) {
      const sourceSummary = route === routes[0] ? cluster.hubIntro : cluster.guides.find((guide) => guide.url === route).summary;
      const expectedSummary = locale === 'en' ? sourceSummary : catalogs[locale][sourceSummary];
      const record = italySearch.find((item) => item.url === prefix + route);
      assert.ok(record, `${searchPath}: missing ${prefix + route}`);
      assert.equal(record.summary, expectedSummary, `${searchPath}: localized search summary drifted for ${prefix + route}`);
    }
  }
}

console.log(`Italy Umbria route-date regression passed: ${checked} source/dist pages across four existing routes and five languages; all 20 localized sitemap entries, original publication dates, route counts and local-plan translations hold.`);
