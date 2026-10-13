#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const root = path.resolve(import.meta.dirname, '..');
const baselineCommit = 'a639c760ec728d90a0c271e512cbb7af2fa8bfa4';
const sourceTerminal = 'c604392705e094d5f0ee1effa9e98e38f04ed8c6';
const integrationBase = 'e664be07b5e06f6b04a1cec7048b645a18bf7738';
const initialAtlasCommit = '8a1ada3b4021d077fd468c9c318d91823177c0cb';
const origin = 'https://tripdistill.com';
const routes = [
  '/vietnam/nha-trang-khanh-hoa/',
  '/vietnam/nha-trang-khanh-hoa/nha-trang-city-beach/',
  '/vietnam/nha-trang-khanh-hoa/po-nagar-hon-chong/',
  '/vietnam/nha-trang-khanh-hoa/hon-mun-island-marine-route/'
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
    if (node.tagName && ['script', 'style', 'svg', 'noscript', 'nav'].includes(node.tagName)) return;
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
  return pieces.join('').replace(/\s+/g, ' ').trim()
    .replace(/\b(?:reviewed|editorial review)\s*:?\s+\d{1,2}\s+(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b/gi, '')
    .replace(/\s+/g, ' ').trim();
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

assert.equal(git(['rev-parse', `${sourceTerminal}^`]).trim(), baselineCommit, 'Nha Trang source terminal has the exact authorized Phu Quoc parent.');
assert.equal(git(['rev-parse', `${sourceTerminal}^{tree}`]).trim(), '069731bc35aaa19ca38ab1c00ae1141811cbde9c', 'Nha Trang source terminal tree matches the verified source.');
assert.equal(git(['merge-base', baselineCommit, sourceTerminal]).trim(), baselineCommit, 'Nha Trang source descends from its exact source parent.');
const sourceBodyFiles = git(['diff', '--name-only', baselineCommit, sourceTerminal, '--', 'vietnam/nha-trang-khanh-hoa']).trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(sourceBodyFiles, routes.map((route) => `${route.slice(1)}index.html`).sort(), 'Nha Trang source changes exactly the four selected English body paths.');

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
  assert.notEqual(currentHash, baseHash, `${route}: visible body is unchanged from the requested base.`);
  assert.equal(fs.readFileSync(fileForRoute(route), 'utf8'), readAt(sourceTerminal, repoPath), `${route}: integrated HTML matches the exact Nha Trang source terminal.`);
  const baseWords = base.split(/\s+/).filter(Boolean).length;
  const currentWords = current.split(/\s+/).filter(Boolean).length;
  assert.ok(currentWords - baseWords >= 350, `${route}: expected a substantive body change; got ${currentWords - baseWords} words.`);
  bodyChecks.push({ url: route, baseWords, currentWords, wordDelta: currentWords - baseWords, initialMainTextSha256: initialHash, baseMainTextSha256: baseHash, currentMainTextSha256: currentHash });
}

const changedEnglishVietnamFiles = git(['diff', '--name-only', integrationBase, '--', 'vietnam']).trim().split('\n').filter(Boolean).sort();
assert.deepEqual(changedEnglishVietnamFiles, routes.map((route) => `${route.slice(1)}index.html`).sort(), 'Only the four selected English Nha Trang route bodies may change under vietnam/.');

const baseSearch = JSON.parse(readAt(integrationBase, 'data/search-index.json'));
const currentSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const sourceSearch = JSON.parse(readAt(sourceTerminal, 'data/search-index.json'));
assert.equal(baseSearch.length, 955);
assert.equal(currentSearch.length, 955);
const byUrl = (records) => new Map(records.map((record) => [record.url, record]));
const baseSearchByUrl = byUrl(baseSearch);
const currentSearchByUrl = byUrl(currentSearch);
assert.deepEqual([...currentSearchByUrl.keys()].sort(), [...baseSearchByUrl.keys()].sort(), 'English search URL set changed.');
const changedSearchRoutes = [...currentSearchByUrl]
  .filter(([url, record]) => JSON.stringify(record) !== JSON.stringify(baseSearchByUrl.get(url)))
  .map(([url]) => url).sort();
assert.deepEqual(changedSearchRoutes, [...routes].sort(), 'Only the four matching English search records may change.');
const sourceSearchByUrl = byUrl(sourceSearch);
for (const route of routes) assert.deepEqual(currentSearchByUrl.get(route), sourceSearchByUrl.get(route), `${route}: English search record must match the exact Nha Trang source terminal.`);

const baseSitemap = parseSitemap(readAt(integrationBase, 'sitemap.xml'));
const currentSitemap = parseSitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
const sourceSitemap = parseSitemap(readAt(sourceTerminal, 'sitemap.xml'));
assert.equal(baseSitemap.size, 4560);
assert.equal(currentSitemap.size, 4560);
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set changed.');
const expectedDatePaths = new Set(editions.flatMap(({ prefix }) => routes.map((route) => `${prefix}${route}`)));
const changedDatePaths = [...currentSitemap]
  .filter(([url, date]) => baseSitemap.get(url) !== date)
  .map(([url]) => url).sort();
assert.deepEqual(changedDatePaths, [...expectedDatePaths].sort(), 'Only the four new routes in five editions may receive a new sitemap date.');
for (const pagePath of expectedDatePaths) assert.equal(currentSitemap.get(pagePath), editDate, `${pagePath}: sitemap date`);
for (const route of routes) for (const edition of editions) {
  const pagePath = `${edition.prefix}${route}`;
  assert.equal(currentSitemap.get(pagePath), sourceSitemap.get(pagePath), `${pagePath}: sitemap date must match the exact Nha Trang source terminal.`);
}

for (const route of routes) {
  const sourceSearch = currentSearchByUrl.get(route);
  assert(sourceSearch.summary, `${route}: English search summary missing.`);
  for (const edition of editions) {
    const pagePath = `${edition.prefix}${route}`;
    const html = edition.code === 'en' ? fs.readFileSync(fileForRoute(route), 'utf8') : fs.readFileSync(localizedFile(edition.code, route), 'utf8');
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
  const prefix = edition.prefix;
  assert.equal(localizedIndex.length, 955, `${edition.code} search record count`);
  const localizedMap = byUrl(localizedIndex);
  const expectedLocalizedSearchPaths = currentSearch.map((record) => `${prefix}${record.url}`).sort();
  assert.deepEqual([...localizedMap.keys()].sort(), expectedLocalizedSearchPaths, `${edition.code} search URL set does not match the English source index.`);
  for (const route of routes) {
    const source = currentSearchByUrl.get(route);
    const localizedPath = `${edition.prefix}${route}`;
    const localized = localizedIndex.find((record) => record.url === localizedPath);
    assert(localized, `${edition.code} search record missing for ${route}.`);
    for (const field of ['title', 'summary', 'type']) {
      assert(catalog[source[field]]?.trim(), `${edition.code} search source key lacks a translation: ${field} ${route}`);
      assert.equal(localized[field], catalog[source[field]], `${edition.code} localized search field does not match the reviewed translation: ${field} ${route}`);
    }
    const localizedHtml = fs.readFileSync(localizedFile(edition.code, route), 'utf8');
    const localizedBody = bodyText(localizedHtml);
    assert(localizedBody.includes(catalog[source.summary]), `${edition.code} ${route}: generated page does not contain the translated summary.`);
    assert(!localizedBody.includes(source.summary), `${edition.code} ${route}: the English summary leaked into the localized page.`);
  }
}

const bodyRoutePaths = new Set(routes);
const siblings = [
  '/vietnam/nha-trang-khanh-hoa/ba-ho-waterfalls/',
  '/vietnam/nha-trang-khanh-hoa/cam-ranh-bai-dai/',
  '/vietnam/nha-trang-khanh-hoa/nha-trang-bay-conservation-transfer/'
];
for (const route of siblings) {
  const repoPath = `${route.slice(1)}index.html`;
  assert.equal(sha256(bodyText(readAt(baselineCommit, repoPath))), sha256(bodyText(fs.readFileSync(fileForRoute(route), 'utf8'))), `${route}: non-selected Nha Trang page changed.`);
}
assert.equal(bodyRoutePaths.size, 4);

const previousRefresh = [
  '/vietnam/phu-quoc-southern-islands/',
  '/vietnam/phu-quoc-southern-islands/duong-dong-long-beach/',
  '/vietnam/phu-quoc-southern-islands/an-thoi-marine-park/',
  '/vietnam/phu-quoc-southern-islands/ham-ninh-fishing-village/',
  '/vietnam/phong-nha-ke-bang/',
  '/vietnam/phong-nha-ke-bang/son-river-phong-nha-cave/',
  '/vietnam/phong-nha-ke-bang/chay-river-dark-cave/',
  '/vietnam/phong-nha-ke-bang/nuoc-mooc-forest-springs/',
  '/vietnam/phong-nha-ke-bang/paradise-tien-son-caves/'
];
for (const route of previousRefresh) {
  const repoPath = `${route.slice(1)}index.html`;
  assert.equal(sha256(bodyText(readAt(baselineCommit, repoPath))), sha256(bodyText(fs.readFileSync(fileForRoute(route), 'utf8'))), `${route}: previously completed Vietnam route was changed.`);
}

const changedSvgs = git(['diff', '--name-only', integrationBase, '--', '*.svg']).trim().split('\n').filter(Boolean);
assert.deepEqual(changedSvgs, [], 'No SVG was requested or added in this content-only route batch.');
const ledger = JSON.parse(fs.readFileSync(path.join(root, 'reports/vietnam-coverage-ledger-20261013.json'), 'utf8'));
assert.equal(ledger.branch, 'codex/sprint-vn-after-phu-quoc-20261013');
assert.equal(ledger.sourceBaseCommit, baselineCommit);
assert.equal(ledger.totals.englishRoutes, 99);
assert.equal(ledger.totals.previousSubstantiveRoutes, 71);
assert.equal(ledger.totals.previousSprintNewSubstantiveRoutes, 4);
assert.equal(ledger.totals.newSubstantiveRoutes, 4);
assert.equal(ledger.totals.afterSprintSubstantiveRoutes, 79);
assert.equal(ledger.totals.remainingRoutes, 20);
assert.deepEqual(ledger.currentSprintRoutes.map((route) => route.url).sort(), [...routes].sort());
assert(ledger.excludedHistoricalRoutes.some((route) => route.url === '/vietnam/phu-quoc-southern-islands/'));
assert(ledger.excludedHistoricalRoutes.some((route) => route.url === '/vietnam/phong-nha-ke-bang/paradise-tien-son-caves/'));
assert.equal(ledger.remainingRoutesAfterSprint.length, 20);
assert.deepEqual(ledger.remainingRoutesAfterSprint, [...ledger.remainingRoutesAfterSprint].sort());
assert.equal(ledger.previousTopLevelSprint.branch, 'codex/sprint-vn-after-phong-nha-20261013');
assert.equal(ledger.previousTopLevelSprint.sourceBaseCommit, '01144e03bf6173f468cb836d0899163e1a98c4ea');
assert.equal(ledger.previousTopLevelSprint.totals.afterSprintSubstantiveRoutes, 75);
assert.equal(ledger.previousTopLevelSprint.totals.remainingRoutes, 24);
assert.equal(ledger.previousTopLevelSprint.currentSprintRoutes.length, 4);
assert.equal(ledger.previousTopLevelSprint.remainingRoutesAfterSprint.length, 24);

console.log('Nha Trang refresh regression passed: four exact-base untouched English bodies each gained at least 350 visible words; three non-selected Nha Trang routes and nine previous Phu Quoc/Phong Nha bodies remain unchanged; exactly 20 existing sitemap dates changed; all four localized editions contain translated page/search summaries with matching 955-record URL sets; five-language canonical, hreflang, Article dates and ledger totals match; no SVG changed.');
console.log(JSON.stringify(bodyChecks, null, 2));
