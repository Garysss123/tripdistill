#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { collectTranslationWork } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baseCommit = 'd779848fbc247042561cfaa34773257122aa38d0';
const initialAtlasCommit = '8a1ada3b4021d077fd468c9c318d91823177c0cb';
const branch = 'codex/sprint-vn-coastal-gaps-20261013';
const routes = [
  '/vietnam/mekong-delta/ca-mau-u-minh-ha-cape/',
  '/vietnam/mui-ne-binh-thuan/phan-thiet-poshanu-heritage/',
  '/vietnam/mui-ne-binh-thuan/phu-quy-island/',
  '/vietnam/mui-ne-binh-thuan/ta-cu-ke-ga-coast/'
];
const editions = [
  { code: 'en', prefix: '' },
  { code: 'zh-Hant', prefix: '/zh' },
  { code: 'ja', prefix: '/ja' },
  { code: 'ko', prefix: '/ko' },
  { code: 'th', prefix: '/th' }
];
const editDate = '2026-10-13';
const archiveRoot = 'data/i18n/archive/vietnam-coastal-gaps/2026-10-13';
const git = (args, encoding = 'utf8') => execFileSync('git', args, { cwd: root, encoding });
const readAt = (commit, repoPath) => git(['show', `${commit}:${repoPath}`]);
const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex');
const fileForRoute = (route) => path.join(root, route.slice(1) + 'index.html');
const attr = (node, name) => node.attrs?.find((item) => item.name === name)?.value || '';
const classList = (node) => attr(node, 'class').split(/\s+/).filter(Boolean);
const walk = (node, visit) => {
  visit(node);
  for (const child of node.childNodes || []) walk(child, visit);
};

function findAll(document, predicate) {
  const matches = [];
  walk(document, (node) => { if (predicate(node)) matches.push(node); });
  return matches;
}

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
    if (node.nodeName === '#text') { pieces.push(node.value); return; }
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

function parseSitemap(xml) {
  const entries = [...xml.matchAll(/<url>\s*<loc>(.*?)<\/loc>\s*<lastmod>(.*?)<\/lastmod>[\s\S]*?<\/url>/g)]
    .map(([, url, lastmod]) => [new URL(url).pathname, lastmod]);
  const result = new Map(entries);
  assert.equal(result.size, entries.length, 'Sitemap contains duplicate URL paths.');
  return result;
}

function articleDate(html, expectedPath) {
  const document = parse(html);
  const scripts = findAll(document, (node) => node.tagName === 'script' && attr(node, 'type') === 'application/ld+json');
  for (const script of scripts) {
    const raw = (script.childNodes || []).map((node) => node.value || '').join('');
    if (!raw) continue;
    const graph = JSON.parse(raw)['@graph'] || [];
    const article = graph.find((item) => item['@type'] === 'Article' && new URL(item.url, 'https://tripdistill.com').pathname === expectedPath);
    if (article) return article.dateModified;
  }
  return null;
}

const bodyChecks = [];
for (const route of routes) {
  const repoPath = route.slice(1) + 'index.html';
  const initial = bodyText(readAt(initialAtlasCommit, repoPath));
  const base = bodyText(readAt(baseCommit, repoPath));
  const current = bodyText(fs.readFileSync(fileForRoute(route), 'utf8'));
  const initialHash = sha256(initial);
  const baseHash = sha256(base);
  const currentHash = sha256(current);
  assert.equal(initialHash, baseHash, route + ': visible body was already changed before this batch.');
  assert.notEqual(currentHash, baseHash, route + ': visible body is unchanged from the requested base.');
  const baseWords = base.split(/\s+/).filter(Boolean).length;
  const currentWords = current.split(/\s+/).filter(Boolean).length;
  assert.ok(currentWords - baseWords >= 350, route + ': expected substantive body changes; got ' + (currentWords - baseWords) + ' words.');
  bodyChecks.push({
    url: route, initialWords: baseWords, baseWords, currentWords, wordDelta: currentWords - baseWords,
    initialMainTextSha256: initialHash, baseMainTextSha256: baseHash, currentMainTextSha256: currentHash
  });
}

const changedEnglishVietnamFiles = git(['diff', '--name-only', baseCommit, '--', 'vietnam']).trim().split('\n').filter(Boolean).sort();
assert.deepEqual(changedEnglishVietnamFiles, routes.map((route) => route.slice(1) + 'index.html').sort(), 'Only the four coastal English guide bodies may change from this base.');

const baseSearch = JSON.parse(readAt(baseCommit, 'data/search-index.json'));
const currentSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
assert.equal(baseSearch.length, 955);
assert.equal(currentSearch.length, 955);
const byUrl = (records) => new Map(records.map((record) => [record.url, record]));
const baseSearchByUrl = byUrl(baseSearch);
const currentSearchByUrl = byUrl(currentSearch);
assert.deepEqual([...currentSearchByUrl.keys()].sort(), [...baseSearchByUrl.keys()].sort(), 'English search URL set changed.');
const changedSearchRoutes = [...currentSearchByUrl]
  .filter(([, record]) => JSON.stringify(record) !== JSON.stringify(baseSearchByUrl.get(record.url)))
  .map(([url]) => url).sort();
assert.deepEqual(changedSearchRoutes, [...routes].sort(), 'Only the four coastal English search records may change.');

const baseSitemap = parseSitemap(readAt(baseCommit, 'sitemap.xml'));
const currentSitemap = parseSitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560);
assert.equal(currentSitemap.size, 4560);
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set changed.');
const expectedDatePaths = new Set(editions.flatMap(({ prefix }) => routes.map((route) => prefix + route)));
const changedDatePaths = [...currentSitemap].filter(([url, date]) => baseSitemap.get(url) !== date).map(([url]) => url).sort();
assert.deepEqual(changedDatePaths, [...expectedDatePaths].sort(), 'Only these four routes in five editions may receive new sitemap dates.');
for (const pagePath of expectedDatePaths) assert.equal(currentSitemap.get(pagePath), editDate, pagePath + ': sitemap date');

for (const route of routes) {
  const sourceSearch = currentSearchByUrl.get(route);
  assert(sourceSearch?.summary, route + ': English search summary missing.');
  for (const edition of editions) {
    const pagePath = edition.prefix + route;
    const htmlPath = edition.code === 'en' ? fileForRoute(route) : path.join(root, (edition.prefix + route).slice(1) + 'index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');
    const document = parse(html);
    assert.equal(findAll(document, (node) => node.tagName === 'h1').length, 1, edition.code + ' ' + route + ': expected one h1.');
    const canonical = findAll(document, (node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical')[0];
    assert(canonical, edition.code + ' ' + route + ': canonical is missing.');
    assert.equal(new URL(attr(canonical, 'href'), 'https://tripdistill.com').pathname, pagePath, edition.code + ' ' + route + ': canonical path');
    const links = findAll(document, (node) => node.tagName === 'link' && attr(node, 'rel') === 'alternate');
    const alternates = new Map(links.map((node) => [attr(node, 'hreflang'), new URL(attr(node, 'href'), 'https://tripdistill.com').pathname]));
    assert.deepEqual([...alternates.keys()].sort(), ['en', 'ja', 'ko', 'th', 'x-default', 'zh-Hant'].sort(), edition.code + ' ' + route + ': hreflang set');
    for (const other of editions) assert.equal(alternates.get(other.code), other.prefix + route, edition.code + ' ' + route + ': ' + other.code + ' alternate');
    assert.equal(alternates.get('x-default'), route, edition.code + ' ' + route + ': x-default');
    assert.equal(articleDate(html, pagePath), editDate, edition.code + ' ' + route + ': Article.dateModified');
  }
}

for (const edition of editions.slice(1)) {
  const catalog = JSON.parse(fs.readFileSync(path.join(root, 'data/i18n/' + edition.code + '.json'), 'utf8')).translations;
  const localizedIndex = JSON.parse(fs.readFileSync(path.join(root, edition.prefix.slice(1), 'data/search-index.json'), 'utf8'));
  assert.equal(localizedIndex.length, 955, edition.code + ' search record count');
  const localizedMap = byUrl(localizedIndex);
  assert.deepEqual([...localizedMap.keys()].sort(), currentSearch.map((record) => edition.prefix + record.url).sort(), edition.code + ' localized search URL set');
  for (const route of routes) {
    const source = currentSearchByUrl.get(route);
    const localized = localizedMap.get(edition.prefix + route);
    assert(localized, edition.code + ' search record missing for ' + route);
    for (const field of ['title', 'summary', 'type']) {
      assert(catalog[source[field]]?.trim(), edition.code + ' source text missing translation: ' + field + ' ' + route);
      assert.equal(localized[field], catalog[source[field]], edition.code + ' localized search mismatch: ' + field + ' ' + route);
    }
    assert.deepEqual(localized.keywords, source.keywords.map((keyword) => catalog[keyword] || keyword), edition.code + ' translated search keywords mismatch: ' + route);
    const text = bodyText(fs.readFileSync(path.join(root, (edition.prefix + route).slice(1) + 'index.html'), 'utf8'));
    assert(text.includes(catalog[source.summary]), edition.code + ' ' + route + ': translated summary missing from localized page.');
    assert(!text.includes(source.summary), edition.code + ' ' + route + ': English summary leaked into localized page.');
  }
  for (const [suffix, route, count] of [
    ['defo-vietnam-coastal-pages.json', routes, 157],
    ['defp-vietnam-coastal-search.json', ['/data/search-index.json'], 22]
  ]) {
    const directory = path.join(root, 'data/i18n/reviewed', edition.code);
    const matches = fs.readdirSync(directory).filter((name) => name.endsWith(suffix));
    assert.equal(matches.length, 1, edition.code + ': expected one ' + suffix + ' batch.');
    const batch = JSON.parse(fs.readFileSync(path.join(directory, matches[0]), 'utf8'));
    assert.equal(batch.qualityStatus, 'reviewed', edition.code + ' batch status');
    assert.deepEqual(batch.routes, route, edition.code + ' batch routes');
    assert.equal(Object.keys(batch.translations).length, count, edition.code + ' batch translation count');
    assert(Object.values(batch.translations).every((value) => typeof value === 'string' && value.trim()), edition.code + ' batch contains blank translation.');
    assert.equal(batch.translationProvenance?.independentSecondModel, false, edition.code + ' must not claim independent translation review.');
    assert.match(batch.translationProvenance?.reviewer || '', /exact runtime model identifier not exposed/);
  }
}

const activeTranslationSources = new Set(collectTranslationWork().flatMap((record) => record.units));
const manifest = JSON.parse(fs.readFileSync(path.join(root, archiveRoot, 'manifest.json'), 'utf8'));
assert.equal(manifest.sourceBaseCommit, baseCommit);
assert.equal(manifest.files.length, 20);
const archivedSources = [];
for (const archived of manifest.files) {
  const content = fs.readFileSync(path.join(root, archived.archivePath));
  assert.equal(content.length, archived.bytes, archived.archivePath + ': archived byte count');
  assert.equal(sha256(content), archived.sha256, archived.archivePath + ': archived SHA-256');
  assert.equal(content.toString('utf8'), readAt(baseCommit, archived.sourcePath), archived.sourcePath + ': archived bytes differ from the exact base blob.');
  const before = JSON.parse(content.toString('utf8'));
  const after = JSON.parse(fs.readFileSync(path.join(root, archived.sourcePath), 'utf8'));
  assert.deepEqual(after, {
    ...before,
    translations: Object.fromEntries(Object.entries(before.translations || {}).filter(([source]) => activeTranslationSources.has(source)))
  }, archived.sourcePath + ': prune may remove only keys absent from the current source set.');
  archivedSources.push(archived.sourcePath);
}

const reviewedDiffs = [...new Set([
  ...git(['diff', '--name-only', baseCommit, '--', 'data/i18n/reviewed']).trim().split('\n').filter(Boolean),
  ...git(['ls-files', '--others', '--exclude-standard', '--', 'data/i18n/reviewed']).trim().split('\n').filter(Boolean)
])].sort();
const expectedReviewedDiffs = [...archivedSources];
for (const edition of editions.slice(1)) {
  const directory = path.join(root, 'data/i18n/reviewed', edition.code);
  for (const suffix of ['defo-vietnam-coastal-pages.json', 'defp-vietnam-coastal-search.json']) {
    const name = fs.readdirSync(directory).find((file) => file.endsWith(suffix));
    expectedReviewedDiffs.push('data/i18n/reviewed/' + edition.code + '/' + name);
  }
}
assert.deepEqual(reviewedDiffs, [...new Set(expectedReviewedDiffs)].sort(), 'Only hash-archived stale translation files and this coastal batch’s eight reviewed locale files may change.');

const changedSvgs = git(['diff', '--name-only', baseCommit, '--', '*.svg']).trim().split('\n').filter(Boolean);
assert.deepEqual(changedSvgs, [], 'No SVG changes are in scope for this route batch.');

const ledger = JSON.parse(fs.readFileSync(path.join(root, 'reports/vietnam-coverage-ledger-20261013.json'), 'utf8'));
assert.equal(ledger.branch, branch);
assert.equal(ledger.sourceBaseCommit, baseCommit);
assert.equal(ledger.totals.englishRoutes, 99);
assert.equal(ledger.totals.previousSubstantiveRoutes, 87);
assert.equal(ledger.totals.previousSprintNewSubstantiveRoutes, 4);
assert.equal(ledger.totals.newSubstantiveRoutes, 4);
assert.equal(ledger.totals.afterSprintSubstantiveRoutes, 91);
assert.equal(ledger.totals.remainingRoutes, 8);
assert.deepEqual(ledger.currentSprintRoutes.map((route) => route.url).sort(), [...routes].sort());
for (const check of bodyChecks) {
  const entry = ledger.currentSprintRoutes.find((route) => route.url === check.url);
  for (const field of ['baseWords', 'currentWords', 'wordDelta', 'baseMainTextSha256', 'initialMainTextSha256', 'currentMainTextSha256']) {
    assert.equal(entry[field], check[field], check.url + ': ledger ' + field);
  }
}
assert.equal(ledger.previousCheckpoint.branch, 'codex/sprint-vn-southern-gaps-20261013');
assert.equal(ledger.previousCheckpoint.totals.afterSprintSubstantiveRoutes, 87);
assert.equal(ledger.previousCheckpoint.totals.remainingRoutes, 12);
assert.deepEqual(ledger.previousCheckpoint.remainingRoutesAfterSprint.filter((route) => routes.includes(route)).sort(), [...routes].sort(), 'The four targets must have been counted as unfinished in the previous checkpoint.');
assert.deepEqual(ledger.remainingRoutesAfterSprint, [
  '/vietnam/nha-trang-khanh-hoa/ba-ho-waterfalls/',
  '/vietnam/nha-trang-khanh-hoa/cam-ranh-bai-dai/',
  '/vietnam/nha-trang-khanh-hoa/nha-trang-bay-conservation-transfer/',
  '/vietnam/phong-nha-ke-bang/hang-en-expedition/',
  '/vietnam/phong-nha-ke-bang/son-doong-expedition/',
  '/vietnam/phu-quoc-southern-islands/con-dao-national-park/',
  '/vietnam/phu-quoc-southern-islands/ganh-dau-bai-thom/',
  '/vietnam/phu-quoc-southern-islands/national-park-suoi-tranh/'
]);

console.log('Vietnam coastal regression passed: four exact-base untouched guides gained at least 350 visible words each; four English and all translated search records match; four editions plus English have valid canonical, hreflang and dates; 20 pruned source files match exact archived blobs; 4,560 sitemap URLs remain; 91/99 coverage leaves the exact eight routes.');
console.log(JSON.stringify(bodyChecks, null, 2));
