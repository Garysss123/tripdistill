#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const root = path.resolve(import.meta.dirname, '..');
const baselineCommit = '75c8caf79053a67cf645a53bed215a72eff07baf';
const initialAtlasCommit = '8a1ada3b4021d077fd468c9c318d91823177c0cb';
const origin = 'https://tripdistill.com';
const routes = [
  '/vietnam/mekong-delta/',
  '/vietnam/mekong-delta/can-tho-cai-rang/',
  '/vietnam/mekong-delta/chau-doc-sam-tra-su/',
  '/vietnam/mekong-delta/ben-tre-coconut-islets/'
];
const followingDaLatRoutes = [
  '/vietnam/da-lat-central-highlands/',
  '/vietnam/da-lat-central-highlands/bidoup-nui-ba-national-park/',
  '/vietnam/da-lat-central-highlands/cau-dat-coffee-farms/',
  '/vietnam/da-lat-central-highlands/langbiang-kho-highlands/'
];
const followingMuiNeRoutes = [
  '/vietnam/mui-ne-binh-thuan/',
  '/vietnam/mui-ne-binh-thuan/bau-trang-white-dunes/',
  '/vietnam/mui-ne-binh-thuan/mui-ne-red-sand-dunes/',
  '/vietnam/mui-ne-binh-thuan/mui-ne-kiteboarding-coast/'
];
const followingPhongNhaRoutes = [
  '/vietnam/phong-nha-ke-bang/',
  '/vietnam/phong-nha-ke-bang/son-river-phong-nha-cave/',
  '/vietnam/phong-nha-ke-bang/chay-river-dark-cave/',
  '/vietnam/phong-nha-ke-bang/nuoc-mooc-forest-springs/'
];
const followingPhuQuocRoutes = [
  '/vietnam/phu-quoc-southern-islands/',
  '/vietnam/phu-quoc-southern-islands/duong-dong-long-beach/',
  '/vietnam/phu-quoc-southern-islands/an-thoi-marine-park/',
  '/vietnam/phu-quoc-southern-islands/ham-ninh-fishing-village/'
];
const followingNhaTrangRoutes = [
  '/vietnam/nha-trang-khanh-hoa/',
  '/vietnam/nha-trang-khanh-hoa/nha-trang-city-beach/',
  '/vietnam/nha-trang-khanh-hoa/po-nagar-hon-chong/',
  '/vietnam/nha-trang-khanh-hoa/hon-mun-island-marine-route/'
];
const afterNhaTrangRoutes = [
  '/vietnam/da-lat-central-highlands/buon-ma-thuot-dray-nur/',
  '/vietnam/da-lat-central-highlands/yok-don-buon-don/',
  '/vietnam/ha-long-cat-ba/sung-sot-titov/',
  '/vietnam/ha-long-cat-ba/viet-hai-cai-beo/'
];
const southernGapsRoutes = ['/vietnam/ho-chi-minh-city/can-gio-mangroves/','/vietnam/ho-chi-minh-city/thu-thiem-thao-dien/','/vietnam/mekong-delta/my-tho-thoi-son-island/','/vietnam/mekong-delta/sa-dec-flower-literary-quarter/'];
const southernGapsHubs = ['vietnam/ho-chi-minh-city/index.html','vietnam/mekong-delta/index.html'];
const bayGapsRoutes = [
  '/vietnam/nha-trang-khanh-hoa/ba-ho-waterfalls/',
  '/vietnam/nha-trang-khanh-hoa/cam-ranh-bai-dai/',
  '/vietnam/nha-trang-khanh-hoa/nha-trang-bay-conservation-transfer/',
  '/vietnam/phu-quoc-southern-islands/con-dao-national-park/'
];
const editions = [
  { code: 'en', prefix: '' },
  { code: 'zh-Hant', prefix: '/zh' },
  { code: 'ja', prefix: '/ja' },
  { code: 'ko', prefix: '/ko' },
  { code: 'th', prefix: '/th' }
];
const editDate = '2026-10-13';
const fileForRoute = (route) => path.join(root, `${route.slice(1)}index.html`);
const git = (args, encoding = 'utf8') => execFileSync('git', args, { cwd: root, encoding });
const readAt = (commit, repoPath) => git(['show', `${commit}:${repoPath}`]);
const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex');
const attr = (node, name) => node.attrs?.find((item) => item.name === name)?.value || '';
const classList = (node) => attr(node, 'class').split(/\s+/).filter(Boolean);
const walk = (node, visit) => {
  visit(node);
  for (const child of node.childNodes || []) walk(child, visit);
};

// The body fingerprint excludes source/credit lists and visible review-date-only edits.
function bodyText(html) {
  const document = parse(html);
  let main = null;
  walk(document, (node) => {
    if (node.tagName === 'main' && attr(node, 'id') === 'main-content') main = node;
  });
  assert(main, 'HTML has no #main-content.');
  const pieces = [];
  const textElements = /^(h1|h2|h3|p|li|summary|strong|em|span|small|a|button|figcaption)$/;
  function collect(node) {
    if (node.nodeName === '#text') {
      pieces.push(node.value);
      return;
    }
    if (node.tagName && ['script', 'style', 'svg', 'noscript'].includes(node.tagName)) return;
    if (node.tagName === 'nav') return;
    if (node.attrs?.some((item) => item.name === 'data-ad-slot')) return;
    if (node.tagName === 'section' && classList(node).includes('sources')) return;
    if (node.tagName && textElements.test(node.tagName)) {
      for (const child of node.childNodes || []) collect(child);
      pieces.push(' ');
      return;
    }
    for (const child of node.childNodes || []) collect(child);
  }
  collect(main);
  return pieces.join('')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b(?:reviewed|editorial review)\s*:?\s+\d{1,2}\s+(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function findAll(document, predicate) {
  const matches = [];
  walk(document, (node) => { if (predicate(node)) matches.push(node); });
  return matches;
}

function localizedFile(locale, route) {
  const prefix = editions.find((edition) => edition.code === locale).prefix;
  return path.join(root, `${prefix}${route}`.slice(1) + 'index.html');
}

function parseSitemap(xml) {
  const entries = [...xml.matchAll(/<url>\s*<loc>(.*?)<\/loc>\s*<lastmod>(.*?)<\/lastmod>[\s\S]*?<\/url>/g)]
    .map(([, url, lastmod]) => [new URL(url, origin).pathname, lastmod]);
  const map = new Map(entries);
  assert.equal(map.size, entries.length, 'Sitemap contains duplicate URL paths.');
  return map;
}

function articleDate(html, expectedPath) {
  const document = parse(html);
  const scripts = findAll(document, (node) => node.tagName === 'script' && attr(node, 'type') === 'application/ld+json');
  for (const script of scripts) {
    const raw = (script.childNodes || []).map((node) => node.value || '').join('');
    if (!raw) continue;
    const graph = JSON.parse(raw)['@graph'] || [];
    const article = graph.find((item) => item['@type'] === 'Article' && new URL(item.url, origin).pathname === expectedPath);
    if (article) return article.dateModified;
  }
  return null;
}

const bodyChecks = [];
for (const route of routes) {
  const repoPath = `${route.slice(1)}index.html`;
  const initial = bodyText(readAt(initialAtlasCommit, repoPath));
  const base = bodyText(readAt(baselineCommit, repoPath));
  const current = bodyText(fs.readFileSync(fileForRoute(route), 'utf8'));
  const initialHash = sha256(initial);
  const baseHash = sha256(base);
  const currentHash = sha256(current);
  assert.equal(initialHash, baseHash, `${route}: body had already changed before this sprint.`);
  assert.notEqual(currentHash, baseHash, `${route}: current visible body is unchanged from the requested base.`);
  const baseWords = base.split(/\s+/).filter(Boolean).length;
  const currentWords = current.split(/\s+/).filter(Boolean).length;
  assert.ok(currentWords - baseWords >= 400, `${route}: expected a substantive body change; got ${currentWords - baseWords} words.`);
  bodyChecks.push({ url: route, initialWords: baseWords, baseWords, currentWords, bodyWordDelta: currentWords - baseWords, initialMainTextSha256: initialHash, baseMainTextSha256: baseHash, currentMainTextSha256: currentHash });
}

const changedVietnamFiles = git(['diff', '--name-only', baselineCommit, '--', 'vietnam']).trim().split('\n').filter(Boolean).sort();
assert.deepEqual(changedVietnamFiles, [...new Set([...routes, ...followingDaLatRoutes, ...followingMuiNeRoutes, ...followingPhongNhaRoutes, ...followingPhuQuocRoutes, ...followingNhaTrangRoutes, ...afterNhaTrangRoutes, ...southernGapsRoutes, ...bayGapsRoutes].map((route) => `${route.slice(1)}index.html`).concat(southernGapsHubs))].sort(), 'Only the four Mekong, four Da Lat, four Mui Ne, four Phong Nha, four Phu Quoc and four Nha Trang English Vietnam paths may change.');

const baselineSearch = JSON.parse(readAt(baselineCommit, 'data/search-index.json'));
const currentSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
assert.equal(baselineSearch.length, 955);
assert.equal(currentSearch.length, 955);
const byUrl = (records) => new Map(records.map((record) => [record.url, record]));
const baseSearchByUrl = byUrl(baselineSearch);
const currentSearchByUrl = byUrl(currentSearch);
assert.deepEqual([...currentSearchByUrl.keys()].sort(), [...baseSearchByUrl.keys()].sort(), 'English search URL set changed.');
const changedSearchRoutes = [...currentSearchByUrl]
  .filter(([url, record]) => JSON.stringify(record) !== JSON.stringify(baseSearchByUrl.get(url)))
  .map(([url]) => url)
  .sort();
assert.deepEqual(changedSearchRoutes, [...followingMuiNeRoutes, ...followingPhongNhaRoutes, ...followingPhuQuocRoutes, ...followingNhaTrangRoutes, ...afterNhaTrangRoutes, ...southernGapsRoutes, ...bayGapsRoutes].sort(), 'Only the later Mui Ne, Phong Nha, Phu Quoc, Nha Trang and post-Nha-Trang English summaries may change.');

const expectedDatePaths = new Set(editions.flatMap(({ prefix }) => [...routes, ...followingDaLatRoutes, ...followingMuiNeRoutes, ...followingPhongNhaRoutes, ...followingPhuQuocRoutes, ...followingNhaTrangRoutes, ...afterNhaTrangRoutes, ...southernGapsRoutes, ...bayGapsRoutes].map((route) => `${prefix}${route}`)));
const baseSitemap = parseSitemap(readAt(baselineCommit, 'sitemap.xml'));
const currentSitemap = parseSitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560);
assert.equal(currentSitemap.size, 4560);
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set changed.');
const changedDatePaths = [...currentSitemap]
  .filter(([url, date]) => baseSitemap.get(url) !== date)
  .map(([url]) => url)
  .sort();
assert.deepEqual(changedDatePaths, [...expectedDatePaths].sort(), 'Only the four Mekong, four Da Lat, four Mui Ne, four Phong Nha, four Phu Quoc and four Nha Trang routes in five editions may receive new sitemap dates.');
for (const pagePath of expectedDatePaths) assert.equal(currentSitemap.get(pagePath), editDate, `${pagePath}: sitemap date`);

for (const route of routes) {
  const englishHtml = fs.readFileSync(fileForRoute(route), 'utf8');
  for (const edition of editions) {
    const pagePath = `${edition.prefix}${route}`;
    const html = edition.code === 'en' ? englishHtml : fs.readFileSync(localizedFile(edition.code, route), 'utf8');
    const document = parse(html);
    const h1s = findAll(document, (node) => node.tagName === 'h1');
    assert.equal(h1s.length, 1, `${edition.code} ${route}: expected one h1.`);
    const canonical = findAll(document, (node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical')[0];
    assert(canonical, `${edition.code} ${route}: canonical is missing.`);
    assert.equal(new URL(attr(canonical, 'href'), origin).pathname, pagePath, `${edition.code} ${route}: canonical path`);
    const links = findAll(document, (node) => node.tagName === 'link' && attr(node, 'rel') === 'alternate');
    const alternates = new Map(links.map((node) => [attr(node, 'hreflang'), new URL(attr(node, 'href'), origin).pathname]));
    assert.deepEqual([...alternates.keys()].sort(), ['en', 'ja', 'ko', 'th', 'x-default', 'zh-Hant'].sort(), `${edition.code} ${route}: hreflang set`);
    for (const other of editions) assert.equal(alternates.get(other.code), `${other.prefix}${route}`, `${edition.code} ${route}: ${other.code} alternate`);
    assert.equal(alternates.get('x-default'), route, `${edition.code} ${route}: x-default`);
    assert.equal(articleDate(html, pagePath), editDate, `${edition.code} ${route}: Article.dateModified`);
  }
}

for (const edition of editions.slice(1)) {
  const catalog = JSON.parse(fs.readFileSync(path.join(root, `data/i18n/${edition.code}.json`), 'utf8')).translations;
  const localizedIndex = JSON.parse(fs.readFileSync(path.join(root, edition.prefix.slice(1), 'data/search-index.json'), 'utf8'));
  assert.equal(localizedIndex.length, 955, `${edition.code} search record count`);
  for (const route of routes) {
    const source = currentSearchByUrl.get(route);
    const localizedPath = `${edition.prefix}${route}`;
    const localized = localizedIndex.find((record) => record.url === localizedPath);
    assert(localized, `${edition.code} search record missing for ${route}.`);
    for (const field of ['title', 'summary', 'type']) {
      assert(catalog[source[field]]?.trim(), `${edition.code} search source key lacks a translation: ${field} ${route}`);
      assert.equal(localized[field], catalog[source[field]], `${edition.code} localized search field does not match the reviewed translation: ${field} ${route}`);
    }
  }
}

console.log(`Mekong refresh regression passed: ${routes.length} Mekong bodies remain expanded by 400+ visible words; Da Lat and Mui Ne follow-on paths are registered; localized metadata/date checks and the 4,560-URL sitemap remain exact.`);
console.log(JSON.stringify(bodyChecks, null, 2));
