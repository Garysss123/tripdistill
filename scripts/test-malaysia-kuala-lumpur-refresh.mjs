#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { imageCredits } from '../data/malaysia-depth-guides.mjs';
import { integrationRoutes, integrationSearchRoutes, integrationSprintBaseline, localizedCurrentSitemapDateChangeRoutes, postHawaiiNewOrleansRoutes, postIntegrationAustraliaRoutes, postIntegrationCanberraRoutes, postIntegrationAlpsMargaretRoutes, postHaLongHCMCIntegrationRoutes, postIntegrationHawaiiRoutes, postNewOrleansAtlantaRoutes, postAtlantaFloridaRoutes, postNewEnglandIntegrationRoutes, postIntegrationMargaretRemainingRoutes, postFloridaChicagoRoutes, followingVietnamDaLatRoutes, postNewEnglandArizonaRoutes, postArizonaLosAngelesRoutes, postLosAngelesBostonRoutes, postLosAngelesSanDiegoRoutes, postIntegrationBroomeRoutes, postIntegrationMuiNeRoutes, postIntegrationPhongNhaRoutes, postIntegrationPhuQuocRoutes, followingVietnamNhaTrangRoutes, followingVietnamAfterNhaTrangRoutes, followingVietnamSouthernGapsRoutes, followingVietnamBayGapsRoutes, postIntegrationBroomeTasmaniaRoutes, postBostonOverviewJuneauSearchRoutes, postAustraliaFinalRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const outputRoot = process.argv.includes('--dist') ? path.join(root, 'dist') : root;
const baseCommit = 'b0c6696bf28893c4498858830a714acd084f435f';
const reviewDate = '2026-10-12';
const routes = [
  '/malaysia/kuala-lumpur-putrajaya/',
  '/malaysia/kuala-lumpur-putrajaya/merdeka-chinatown/',
  '/malaysia/kuala-lumpur-putrajaya/klcc-bukit-bintang/',
  '/malaysia/kuala-lumpur-putrajaya/batu-caves/',
  '/malaysia/kuala-lumpur-putrajaya/putrajaya-civic-core/'
];
const locales = [
  { code: 'en', prefix: '', dir: '', date: '12 October 2026', markers: ['Kuala Lumpur', 'Putrajaya'] },
  { code: 'zh-Hant', prefix: '/zh', dir: 'zh', date: '2026 年 10 月 12 日', markers: ['吉隆坡', '布城'] },
  { code: 'ja', prefix: '/ja', dir: 'ja', date: '2026年10月12日', markers: ['クアラルンプール', 'プトラジャヤ'] },
  { code: 'ko', prefix: '/ko', dir: 'ko', date: '2026년 10월 12일', markers: ['쿠알라룸푸르', '푸트라자야'] },
  { code: 'th', prefix: '/th', dir: 'th', date: '12 ตุลาคม 2026', markers: ['กัวลาลัมเปอร์', 'ปุตราจายา'] }
];
const fragments = new Map([
  [routes[0], ['Three nights can support two full city days', 'KL Sentral', 'KLIA Transit reaches Putrajaya & Cyberjaya station', 'Putrajaya & Cyberjaya station', 'KTM Komuter', 'Dataran Putra', 'four nights', 'five nights']],
  [routes[1], ['Masjid Jamek', 'Pasar Seni LRT/MRT', 'two or three nights', 'Klang–Gombak', 'one-way walk']],
  [routes[2], ['KLCC–Bukit Bintang Walkway', 'PETRONAS Twin Towers', 'Two nights in KLCC', 'heavy shower']],
  [routes[3], ['KTMB MyRailtime', '272 steps', 'half-day commitment', 'three nights', 'festival']],
  [routes[4], ['KLIA Transit', 'Putrajaya & Cyberjaya station', 'Precinct 1', 'four-night KL Sentral base', 'first-mile and last-mile']]
]);

function gitBytes(spec) {
  return execFileSync('git', ['show', spec], { cwd: root, maxBuffer: 64 * 1024 * 1024 });
}
function readJson(file) { return JSON.parse(fs.readFileSync(file, 'utf8')); }
function hash(bytes) { return crypto.createHash('sha256').update(bytes).digest('hex'); }
function localizedFile(prefix, route) { return path.join(outputRoot, prefix + route, 'index.html'); }
function visibleText(html) {
  const document = parse(html);
  const pieces = [];
  const visit = (node) => {
    if (node.nodeName === '#text') pieces.push(node.value || '');
    if (['script', 'style'].includes(node.tagName)) return;
    for (const child of node.childNodes || []) visit(child);
  };
  visit(document);
  return pieces.join(' ').replace(/\s+/g, ' ').trim();
}
function mainText(html) {
  const document = parse(html);
  const pieces = [];
  let inMain = false;
  const visit = (node) => {
    const isMain = node.tagName === 'main' && (node.attrs || []).some(({ name, value }) => name === 'id' && value === 'main-content');
    const wasInMain = inMain;
    if (isMain) inMain = true;
    if (inMain && node.nodeName === '#text') pieces.push(node.value || '');
    if (inMain && ['script', 'style'].includes(node.tagName)) return;
    for (const child of node.childNodes || []) visit(child);
    if (isMain) inMain = wasInMain;
  };
  visit(document);
  return pieces.join(' ').replace(/\s+/g, ' ').trim();
}
function graph(html, route) {
  const raw = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(raw, `${route}: JSON-LD exists`);
  return JSON.parse(raw)['@graph'];
}
function readSitemap(raw) {
  assert.match(raw, /^<\?xml version="1\.0" encoding="UTF-8"\?>[\s\S]*<\/urlset>\s*$/, 'sitemap is complete XML');
  return new Map([...raw.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod><changefreq>([^<]*)<\/changefreq><priority>([^<]*)<\/priority><\/url>/g)]
    .map(([, url, date]) => [url || '/', date]));
}

const currentSitemap = readSitemap(fs.readFileSync(path.join(outputRoot, 'sitemap.xml'), 'utf8'));
const baseSitemap = readSitemap(gitBytes(`${integrationSprintBaseline}:sitemap.xml`).toString('utf8'));
assert.equal(currentSitemap.size, 4560, 'sitemap retains 4,560 localized URLs');
assert.deepEqual(new Set(currentSitemap.keys()), new Set(baseSitemap.keys()), 'no sitemap URL was added or removed');
const localizedRoutes = localizedCurrentSitemapDateChangeRoutes(locales.map(({ prefix }) => prefix));
const changedDates = [...currentSitemap].filter(([url, date]) => baseSitemap.get(url) !== date).map(([url]) => url);
assert.equal(integrationRoutes.length, 302, 'the exact UK, Australia, France, Italy, Switzerland, Canada, Malaysia and twelve Vietnam route scope contains 302 existing English pages');
assert.deepEqual(new Set(changedDates), localizedRoutes, 'only the exact historical scope and five disjoint follow-on groups changed lastmod');
for (const route of locales.flatMap(({ prefix }) => routes.map((path) => prefix + path))) assert.equal(currentSitemap.get(route), reviewDate, `${route}: sitemap lastmod`);

const baseSearch = readJsonFromGit(`${integrationSprintBaseline}:data/search-index.json`);
const currentSearch = readJson(path.join(outputRoot, 'data/search-index.json'));
const byUrl = (records) => new Map(records.map((record) => [record.url, record]));
const baseSearchByUrl = byUrl(baseSearch);
const currentSearchByUrl = byUrl(currentSearch);
assert.equal(currentSearch.length, 955, 'English search keeps 955 records');
assert.deepEqual(new Set(currentSearchByUrl.keys()), new Set(baseSearchByUrl.keys()), 'English search URL set is unchanged');
const changedSearch = [...currentSearchByUrl].filter(([url, value]) => JSON.stringify(value) !== JSON.stringify(baseSearchByUrl.get(url))).map(([url]) => url);
assert.deepEqual(new Set(changedSearch), new Set([...integrationSearchRoutes, ...postIntegrationHawaiiRoutes, ...postIntegrationAustraliaRoutes, ...postIntegrationCanberraRoutes, ...postIntegrationAlpsMargaretRoutes, ...postHawaiiNewOrleansRoutes, ...postNewOrleansAtlantaRoutes, ...postAtlantaFloridaRoutes, ...postFloridaChicagoRoutes, ...postNewEnglandIntegrationRoutes, ...postIntegrationMargaretRemainingRoutes, ...postNewEnglandArizonaRoutes, ...postArizonaLosAngelesRoutes, ...postLosAngelesBostonRoutes, ...postLosAngelesSanDiegoRoutes, ...postIntegrationBroomeRoutes, ...postIntegrationMuiNeRoutes, ...postIntegrationPhongNhaRoutes, ...postIntegrationPhuQuocRoutes, ...followingVietnamNhaTrangRoutes, ...followingVietnamAfterNhaTrangRoutes, ...followingVietnamSouthernGapsRoutes, ...followingVietnamBayGapsRoutes, ...postIntegrationBroomeTasmaniaRoutes, ...postBostonOverviewJuneauSearchRoutes, ...postAustraliaFinalRoutes]), 'only the exact integrated country and registered follow-on search records changed');

const localizedPaths = new Set(locales.flatMap(({ prefix }) => routes.map((route) => prefix + route)));
const wordIncrements = [];
for (const locale of locales) {
  const localeSearchDir = path.join(outputRoot, locale.dir);
  const localeSearch = readJson(path.join(localeSearchDir, 'data/search-index.json'));
  const sourceKeys = new Set(currentSearch.map((entry) => locale.prefix + entry.url));
  const localeByUrl = byUrl(localeSearch);
  assert.equal(localeSearch.length, 955, `${locale.code}: search keeps 955 records`);
  assert.deepEqual(new Set(localeByUrl.keys()), sourceKeys, `${locale.code}: localized search URL set is unchanged`);
  for (const route of routes) {
    const localizedRoute = locale.prefix + route;
    const html = fs.readFileSync(localizedFile(locale.prefix, route), 'utf8');
    const text = visibleText(html);
    const guide = graph(html, localizedRoute).find((item) => item['@type'] === 'TravelGuide');
    const faq = graph(html, localizedRoute).find((item) => item['@type'] === 'FAQPage');
    assert.ok(guide, `${locale.code}${route}: TravelGuide exists`);
    assert.equal(guide.dateModified, reviewDate, `${locale.code}${route}: schema date`);
    assert.ok(text.includes(locale.date), `${locale.code}${route}: localized review date is visible`);
    assert.doesNotMatch(text, /\[UNTRANSLATED\]/, `${locale.code}${route}: no translation marker`);
    if (locale.code !== 'en') {
      assert.ok(locale.markers.some((marker) => text.includes(marker)), `${locale.code}${route}: destination copy is localized`);
      assert.ok(localeByUrl.get(localizedRoute)?.summary, `${locale.code}${route}: localized search entry exists`);
    }
    const expectedFaqCount = route === routes[0] ? 5 : 3;
    assert.equal(faq?.mainEntity?.length, expectedFaqCount, `${locale.code}${route}: FAQ schema count`);
    assert.ok(text.includes('Official') || locale.code !== 'en', `${locale.code}${route}: source section remains present`);
    if (locale.code === 'en') {
      for (const fragment of fragments.get(route)) assert.ok(text.includes(fragment), `${route}: expected substantive detail "${fragment}"`);
      const baseHtml = gitBytes(`${baseCommit}:${route.slice(1)}index.html`).toString('utf8');
      const oldWords = mainText(baseHtml).split(/\s+/).length;
      const newWords = mainText(html).split(/\s+/).length;
      assert.ok(newWords > oldWords, `${route}: English body adds substantive copy`);
      wordIncrements.push(`${route.replace('/malaysia/kuala-lumpur-putrajaya/', '') || 'hub'} +${newWords - oldWords} words`);
      assert.ok(currentSearchByUrl.get(route)?.summary, `${route}: English search entry exists`);
    }
    assert.ok(localizedPaths.has(localizedRoute), `${localizedRoute}: URL was in original route scope`);
  }
}

const imageKeys = ['klCivic', 'klSkyline', 'batuCaves', 'putrajaya'];
for (const key of imageKeys) {
  const image = imageCredits[key];
  assert.ok(image?.source && image?.creator && image?.license, `${key}: existing photo source record is complete`);
  const current = fs.readFileSync(path.join(root, image.src.replace(/^\//, '')));
  const base = gitBytes(`${baseCommit}:${image.src.replace(/^\//, '')}`);
  assert.equal(hash(current), hash(base), `${key}: original photo bytes are unchanged`);
}

console.log(`${process.argv.includes('--dist') ? 'dist' : 'source'} Kuala Lumpur & Putrajaya refresh passed: five existing routes, four localized editions, 25 dates, 955 search entries per edition, unchanged 4,560-URL sitemap and original photo bytes.`);
console.log(`English body delta vs MY13 base: ${wordIncrements.join('; ')}.`);

function readJsonFromGit(spec) { return JSON.parse(gitBytes(spec).toString('utf8')); }
