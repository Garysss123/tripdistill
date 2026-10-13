#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { parse } from 'parse5';
import { imageCredits, malaysiaDepthClusters, malaysiaDepthGuides } from '../data/malaysia-depth-guides.mjs';
import { integrationRoutes, integrationSearchRoutes, integrationSprintBaseline, localizedCurrentSitemapDateChangeRoutes, postHawaiiNewOrleansRoutes, postIntegrationAustraliaRoutes, postIntegrationCanberraRoutes, postIntegrationAlpsMargaretRoutes, postHaLongHCMCIntegrationRoutes, postIntegrationHawaiiRoutes, postNewOrleansAtlantaRoutes, postAtlantaFloridaRoutes, postNewEnglandIntegrationRoutes, postIntegrationMargaretRemainingRoutes, postFloridaChicagoRoutes, followingVietnamDaLatRoutes, postNewEnglandArizonaRoutes, postArizonaLosAngelesRoutes, postLosAngelesBostonRoutes, postLosAngelesSanDiegoRoutes, postIntegrationBroomeRoutes, postIntegrationMuiNeRoutes, postIntegrationPhongNhaRoutes, postIntegrationPhuQuocRoutes, followingVietnamNhaTrangRoutes, postIntegrationBroomeTasmaniaRoutes, postBostonOverviewJuneauSearchRoutes, postAustraliaFinalRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const outputRoot = process.argv.includes('--dist') ? path.join(root, 'dist') : root;
const baselineCommit = 'c0015c40305735164f12140d649b8e948d3bf323';
const reviewedDate = '2026-10-12';
const routes = [
  '/malaysia/gunung-mulu/',
  '/malaysia/gunung-mulu/deer-lang-caves/',
  '/malaysia/gunung-mulu/clearwater-wind-caves/',
  '/malaysia/gunung-mulu/pinnacles-expedition/',
  '/malaysia/gunung-mulu/canopy-night-walks/'
];
const locales = [
  { code: 'en', prefix: '', dir: '', dateNeedle: '12 October 2026' },
  { code: 'zh-Hant', prefix: '/zh', dir: 'zh', dateNeedle: '2026 年 10 月 12 日' },
  { code: 'ja', prefix: '/ja', dir: 'ja', dateNeedle: '2026年10月12日' },
  { code: 'ko', prefix: '/ko', dir: 'ko', dateNeedle: '2026년 10월 12일' },
  { code: 'th', prefix: '/th', dir: 'th', dateNeedle: '12 ตุลาคม 2026' }
];
const cluster = malaysiaDepthClusters.find((item) => item.hubSlug === 'gunung-mulu');
const guides = malaysiaDepthGuides.filter((guide) => guide.hubSlug === 'gunung-mulu');
assert.ok(cluster, 'Gunung Mulu source cluster exists');
assert.equal(cluster.reviewedOnIso, reviewedDate, 'hub source review date is current');
assert.deepEqual(guides.map((guide) => guide.url), routes.slice(1), 'the existing hub has exactly four child routes');
assert.deepEqual(cluster.guides.map((guide) => '/malaysia/' + cluster.hubSlug + '/' + guide.slug + '/'), routes.slice(1), 'no child route was added');
for (const guide of guides) assert.equal(guide.reviewedOnIso, reviewedDate, guide.url + ' source review date is current');

function readSitemap(directory) {
  const raw = fs.readFileSync(path.join(directory, 'sitemap.xml'), 'utf8');
  return new Map([...raw.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
    .map(([, url, date]) => [url || '/', date]));
}
function gitBytes(spec) { return execFileSync('git', ['show', spec], { cwd: root, maxBuffer: 64 * 1024 * 1024 }); }
function readJson(file) { return JSON.parse(fs.readFileSync(file, 'utf8')); }
function localizedPath(prefix, route) { return path.join(outputRoot, prefix + route, 'index.html'); }
function travelGuide(html, route) {
  const raw = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(raw, route + ': JSON-LD exists');
  const guide = JSON.parse(raw)['@graph'].find((item) => item['@type'] === 'TravelGuide');
  assert.ok(guide, route + ': TravelGuide schema exists');
  return guide;
}
function visibleText(html) {
  const document = parse(html);
  const pieces = [];
  const visit = (node) => {
    if (node.nodeName === '#text') pieces.push(node.value || '');
    if (['script', 'style'].includes(node.tagName)) return;
    for (const child of node.childNodes || []) visit(child);
  };
  visit(document);
  return pieces.join(' ').replace(/\s+/g, ' ');
}

const sitemap = readSitemap(outputRoot);
const baseSitemap = new Map([...gitBytes(integrationSprintBaseline + ':sitemap.xml').toString('utf8').matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
  .map(([, url, date]) => [url || '/', date]));
assert.equal(sitemap.size, 4560, 'sitemap remains at 4,560 localized URLs');
assert.deepEqual(new Set(sitemap.keys()), new Set(baseSitemap.keys()), 'refresh adds or removes no sitemap URL');
const localizedRoutes = new Set(locales.flatMap(({ prefix }) => routes.map((route) => prefix + route)));
const changedSitemapRoutes = [...sitemap].filter(([url, date]) => baseSitemap.get(url) !== date).map(([url]) => url);
const expectedIntegratedLocalizedRoutes = localizedCurrentSitemapDateChangeRoutes(locales.map(({ prefix }) => prefix));
assert.equal(integrationRoutes.length, 302, 'the exact UK, Australia, France, Italy, Switzerland, Canada, Malaysia and twelve Vietnam route scope contains 302 existing English pages');
assert.deepEqual(new Set(changedSitemapRoutes), expectedIntegratedLocalizedRoutes, 'only the exact baseline and registered follow-on route groups receive their localized lastmod values');
for (const route of localizedRoutes) assert.equal(sitemap.get(route), reviewedDate, route + ' sitemap lastmod');

const baseSearch = JSON.parse(gitBytes(integrationSprintBaseline + ':data/search-index.json').toString('utf8'));
const currentSearch = readJson(path.join(outputRoot, 'data/search-index.json'));
const byUrl = (records) => new Map(records.map((record) => [record.url, record]));
const baseSearchByUrl = byUrl(baseSearch);
const currentSearchByUrl = byUrl(currentSearch);
assert.deepEqual(new Set(currentSearchByUrl.keys()), new Set(baseSearchByUrl.keys()), 'English search URL set is unchanged');
const changedSearchRoutes = [...currentSearchByUrl].filter(([url, record]) => !isDeepStrictEqual(record, baseSearchByUrl.get(url))).map(([url]) => url);
assert.deepEqual(new Set(changedSearchRoutes), new Set([...integrationSearchRoutes, ...postIntegrationHawaiiRoutes, ...postIntegrationAustraliaRoutes, ...postIntegrationCanberraRoutes, ...postIntegrationAlpsMargaretRoutes, ...postHawaiiNewOrleansRoutes, ...postNewOrleansAtlantaRoutes, ...postAtlantaFloridaRoutes, ...postFloridaChicagoRoutes, ...postNewEnglandIntegrationRoutes, ...postIntegrationMargaretRemainingRoutes, ...postNewEnglandArizonaRoutes, ...postArizonaLosAngelesRoutes, ...postLosAngelesBostonRoutes, ...postLosAngelesSanDiegoRoutes, ...postIntegrationBroomeRoutes, ...postIntegrationMuiNeRoutes, ...postIntegrationPhongNhaRoutes, ...postIntegrationPhuQuocRoutes, ...followingVietnamNhaTrangRoutes, ...postIntegrationBroomeTasmaniaRoutes, ...postBostonOverviewJuneauSearchRoutes, ...postAustraliaFinalRoutes]), 'only the exact integrated country and registered follow-on search records changed');
for (const route of routes) assert.ok(currentSearchByUrl.has(route), route + ' remains searchable');

for (const locale of locales.filter(({ dir }) => dir)) {
  const current = readJson(path.join(outputRoot, locale.dir, 'data/search-index.json'));
  const currentByUrl = byUrl(current);
  const baselineUrls = new Set(baseSearch.map((record) => locale.prefix + record.url));
  const prefixedRoutes = new Set(routes.map((route) => locale.prefix + route));
  assert.deepEqual(new Set(currentByUrl.keys()), baselineUrls, locale.code + ': localized search URL set retains every existing prefixed route');
  for (const route of prefixedRoutes) assert.ok(currentByUrl.get(route)?.summary, locale.code + route + ': localized search record exists');
}

const requiredText = new Map([
  [routes[0], ['Four nights is an editorial planning estimate', 'Miri Airport (MYY)', 'Mulu Airport (MZV)', 'Garden Bungalow', 'Melinau Wharf', 'Camp 5', 'year-round destination', 'three-day, two-night']],
  [routes[1], ['Park HQ', 'Lang Cave', 'Deer Cave', 'bat-viewing area', 'arrival night in Mulu']],
  [routes[2], ['Melinau Wharf', 'Wind Cave', 'Clearwater Cave', 'both the outward and return legs', 'full field day']],
  [routes[3], ['Kuala Litut', 'Camp 5', 'three days and two nights', 'fitness rules', 'recovery night']],
  [routes[4], ['Canopy Skywalk', 'Night Walk', 'separate activity slots', 'another evening', 'Rain or wind']]
]);
for (const route of routes) {
  const html = fs.readFileSync(localizedPath('', route), 'utf8');
  const guide = travelGuide(html, route);
  assert.equal(guide.url, 'https://tripdistill.com' + route, route + ': schema URL matches route');
  assert.equal(guide.dateModified, reviewedDate, route + ': schema review date is current');
  assert.ok(html.includes('reviewed 12 October 2026'), route + ': visible English review date is current');
  const text = visibleText(html);
  for (const fragment of requiredText.get(route)) assert.ok(text.includes(fragment), route + ': required planning detail "' + fragment + '" appears');
  assert.ok(currentSearchByUrl.get(route)?.summary, route + ': English search record has a summary');

  for (const locale of locales) {
    const localeRoute = locale.prefix + route;
    const localeHtml = fs.readFileSync(localizedPath(locale.prefix, route), 'utf8');
    const localizedGuide = travelGuide(localeHtml, localeRoute);
    assert.equal(localizedGuide.dateModified, reviewedDate, locale.code + localeRoute + ': localized schema date is current');
    assert.ok(localeHtml.includes(locale.dateNeedle), locale.code + localeRoute + ': localized visible date is current');
    assert.doesNotMatch(visibleText(localeHtml), /\[UNTRANSLATED\]/, locale.code + localeRoute + ': no translation placeholder is visible');
    const searchDirectory = locale.dir || '.';
    const localizedSearch = readJson(path.join(outputRoot, searchDirectory, 'data/search-index.json'));
    assert.ok(localizedSearch.find((item) => item.url === localeRoute)?.summary, locale.code + localeRoute + ': localized search record exists');
  }
}

for (const key of ['muluDeer', 'muluClearwater', 'muluPinnacles', 'sarawakMulu']) {
  const image = imageCredits[key];
  assert.ok(image?.source && image?.creator && image?.license, key + ': existing source-page image declaration remains complete');
  const asset = image.src.replace(/^\//, '');
  const current = fs.readFileSync(path.join(outputRoot, asset));
  const baseline = gitBytes(baselineCommit + ':' + asset);
  const hash = (bytes) => crypto.createHash('sha256').update(bytes).digest('hex');
  assert.equal(hash(current), hash(baseline), key + ': image bytes are unchanged from MY12 source');
}
console.log((process.argv.includes('--dist') ? 'dist' : 'source') + ' Gunung Mulu refresh passed: 5 existing routes, 4 translated editions, synchronized dates/search, unchanged 4,560-URL sitemap, unchanged photo bytes.');
