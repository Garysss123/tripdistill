#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { collectTranslationWork } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baselineCommit = 'c604392705e094d5f0ee1effa9e98e38f04ed8c6';
const initialAtlasCommit = '8a1ada3b4021d077fd468c9c318d91823177c0cb';
const origin = 'https://tripdistill.com';
const routes = [
  '/vietnam/da-lat-central-highlands/buon-ma-thuot-dray-nur/',
  '/vietnam/da-lat-central-highlands/yok-don-buon-don/',
  '/vietnam/ha-long-cat-ba/sung-sot-titov/',
  '/vietnam/ha-long-cat-ba/viet-hai-cai-beo/'
];
const southernGapsRoutes = [
  '/vietnam/ho-chi-minh-city/can-gio-mangroves/',
  '/vietnam/ho-chi-minh-city/thu-thiem-thao-dien/',
  '/vietnam/mekong-delta/my-tho-thoi-son-island/',
  '/vietnam/mekong-delta/sa-dec-flower-literary-quarter/'
];
const southernGapsHubs = ['vietnam/ho-chi-minh-city/index.html', 'vietnam/mekong-delta/index.html'];
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
  const baseWords = base.split(/\s+/).filter(Boolean).length;
  const currentWords = current.split(/\s+/).filter(Boolean).length;
  assert.ok(currentWords - baseWords >= 350, `${route}: expected a substantive body change; got ${currentWords - baseWords} words.`);
  bodyChecks.push({ url: route, initialWords: baseWords, baseWords, currentWords, wordDelta: currentWords - baseWords, initialMainTextSha256: initialHash, baseMainTextSha256: baseHash, currentMainTextSha256: currentHash });
}

const changedEnglishVietnamFiles = git(['diff', '--name-only', baselineCommit, '--', 'vietnam']).trim().split('\n').filter(Boolean).sort();
const expectedEnglishVietnamFiles = [...routes.map((route) => `${route.slice(1)}index.html`), ...southernGapsRoutes.map((route) => `${route.slice(1)}index.html`), ...bayGapsRoutes.map((route) => `${route.slice(1)}index.html`), ...southernGapsHubs].sort();
assert.deepEqual(changedEnglishVietnamFiles, expectedEnglishVietnamFiles, 'Only the historical guide batches, their two hub excerpts and the separately recorded bay-gaps overlay may change under vietnam/.');

const baseSearch = JSON.parse(readAt(baselineCommit, 'data/search-index.json'));
const currentSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
assert.equal(baseSearch.length, 955);
assert.equal(currentSearch.length, 955);
const byUrl = (records) => new Map(records.map((record) => [record.url, record]));
const baseSearchByUrl = byUrl(baseSearch);
const currentSearchByUrl = byUrl(currentSearch);
assert.deepEqual([...currentSearchByUrl.keys()].sort(), [...baseSearchByUrl.keys()].sort(), 'English search URL set changed.');
const changedSearchRoutes = [...currentSearchByUrl]
  .filter(([url, record]) => JSON.stringify(record) !== JSON.stringify(baseSearchByUrl.get(url)))
  .map(([url]) => url).sort();
assert.deepEqual(changedSearchRoutes, [...routes, ...southernGapsRoutes, ...bayGapsRoutes].sort(), 'Only the historical guide batches and the separately recorded bay-gaps overlay may change English search records.');

const baseSitemap = parseSitemap(readAt(baselineCommit, 'sitemap.xml'));
const currentSitemap = parseSitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560);
assert.equal(currentSitemap.size, 4560);
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set changed.');
const expectedDatePaths = new Set(editions.flatMap(({ prefix }) => [...routes, ...southernGapsRoutes, ...bayGapsRoutes].map((route) => `${prefix}${route}`)));
const changedDatePaths = [...currentSitemap]
  .filter(([url, date]) => baseSitemap.get(url) !== date)
  .map(([url]) => url).sort();
assert.deepEqual(changedDatePaths, [...expectedDatePaths].sort(), 'Only the four selected routes in five editions may receive a new sitemap date.');
for (const pagePath of expectedDatePaths) assert.equal(currentSitemap.get(pagePath), editDate, `${pagePath}: sitemap date`);

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
  assert.equal(localizedIndex.length, 955, `${edition.code} search record count`);
  const localizedMap = byUrl(localizedIndex);
  const expectedLocalizedSearchPaths = currentSearch.map((record) => `${edition.prefix}${record.url}`).sort();
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
  for (const kind of ['pages', 'search']) {
    const suffix = kind === 'pages' ? '*defk-vn-pages-20261013.json' : '*defl-vn-search-20261013.json';
    const matches = fs.readdirSync(path.join(root, 'data/i18n/reviewed', edition.code)).filter((name) => name.endsWith(suffix.slice(1)));
    assert.equal(matches.length, 1, `${edition.code}: expected one new ${kind} batch.`);
    const batch = JSON.parse(fs.readFileSync(path.join(root, 'data/i18n/reviewed', edition.code, matches[0]), 'utf8'));
    assert.equal(batch.qualityStatus, 'reviewed');
    assert.deepEqual(batch.routes, kind === 'pages' ? routes : ['/data/search-index.json'], `${edition.code} ${kind}: batch route scope`);
    assert.equal(batch.translationProvenance?.independentSecondModel, false, `${edition.code} ${kind}: independent review must not be claimed.`);
    assert.match(batch.translationProvenance?.reviewer || '', /exact runtime model identifier not exposed/);
  }
}

const archiveRoot = path.join(root, 'data/i18n/archive/vietnam-after-nha-trang/2026-10-13');
const archiveManifest = JSON.parse(fs.readFileSync(path.join(archiveRoot, 'manifest.json'), 'utf8'));
assert.equal(archiveManifest.sourceBaseCommit, baselineCommit);
assert.equal(archiveManifest.files.length, 16, 'Expected exact-base snapshots of the 16 reviewed batches whose stale keys were pruned.');
for (const archived of archiveManifest.files) {
  const content = fs.readFileSync(path.join(root, archived.archivePath));
  assert.equal(content.length, archived.bytes, `${archived.archivePath}: archived byte count`);
  assert.equal(sha256(content), archived.sha256, `${archived.archivePath}: archived source hash`);
  assert.equal(content.toString('utf8'), readAt(baselineCommit, archived.sourcePath), `${archived.sourcePath}: archive must match the exact base blob.`);
}

const previousNhaTrangRoutes = [
  '/vietnam/nha-trang-khanh-hoa/',
  '/vietnam/nha-trang-khanh-hoa/nha-trang-city-beach/',
  '/vietnam/nha-trang-khanh-hoa/po-nagar-hon-chong/',
  '/vietnam/nha-trang-khanh-hoa/hon-mun-island-marine-route/'
];
for (const route of previousNhaTrangRoutes) {
  const repoPath = `${route.slice(1)}index.html`;
  assert.equal(sha256(bodyText(readAt(baselineCommit, repoPath))), sha256(bodyText(fs.readFileSync(fileForRoute(route), 'utf8'))), `${route}: previous Nha Trang refresh changed.`);
}

const changedSvgs = git(['diff', '--name-only', baselineCommit, '--', '*.svg']).trim().split('\n').filter(Boolean);
assert.deepEqual(changedSvgs, [], 'No SVG was requested or added in this content-only route batch.');

const activeTranslationSources = new Set(collectTranslationWork().flatMap((record) => record.units));
const reviewedDiffs = [...new Set([
  ...git(['diff', '--name-only', baselineCommit, '--', 'data/i18n/reviewed']).trim().split('\n').filter(Boolean),
  ...git(['ls-files', '--others', '--exclude-standard', '--', 'data/i18n/reviewed']).trim().split('\n').filter(Boolean)
])].sort();
const baseReviewedPaths = git(['ls-tree', '-r', '--name-only', baselineCommit, '--', 'data/i18n/reviewed']).trim().split('\n').filter(Boolean);
const expectedReviewedDiffs = [];
for (const edition of editions.slice(1)) {
  const directory = path.join(root, 'data/i18n/reviewed', edition.code);
  const newNames = fs.readdirSync(directory).filter((name) => name.endsWith('defk-vn-pages-20261013.json') || name.endsWith('defl-vn-search-20261013.json'));
  assert.equal(newNames.length, 2, `${edition.code}: expected exactly two new reviewed batches.`);
  expectedReviewedDiffs.push(...newNames.map((name) => `data/i18n/reviewed/${edition.code}/${name}`));
  const southernNames = fs.readdirSync(directory).filter((name) => name.endsWith('defm-vietnam-south-pages.json') || name.endsWith('defn-vietnam-south-search.json'));
  assert.equal(southernNames.length, 2, `${edition.code}: expected exactly two southern-gaps batches.`);
  expectedReviewedDiffs.push(...southernNames.map((name) => `data/i18n/reviewed/${edition.code}/${name}`));
  const bayNames = fs.readdirSync(directory).filter((name) => name.endsWith('defo-bay-gaps-pages-20261013.json') || name.endsWith('defo-bay-gaps-search-20261013.json'));
  assert.equal(bayNames.length, 2, `${edition.code}: expected exactly two bay-gaps batches.`);
  expectedReviewedDiffs.push(...bayNames.map((name) => `data/i18n/reviewed/${edition.code}/${name}`));
}
for (const repoPath of baseReviewedPaths) {
  const before = JSON.parse(readAt(baselineCommit, repoPath));
  const staleKeys = Object.keys(before.translations || {}).filter((source) => !activeTranslationSources.has(source));
  if (!staleKeys.length) continue;
  expectedReviewedDiffs.push(repoPath);
  const after = JSON.parse(fs.readFileSync(path.join(root, repoPath), 'utf8'));
  assert.deepEqual(after, {
    ...before,
    translations: Object.fromEntries(Object.entries(before.translations).filter(([source]) => activeTranslationSources.has(source)))
  }, `${repoPath}: only obsolete source keys may be pruned from an existing reviewed batch.`);
}
expectedReviewedDiffs.sort();
assert.deepEqual(reviewedDiffs, expectedReviewedDiffs, 'Draft and parallel-work files must remain untouched; existing reviewed batches may only lose keys absent from the current source set.');
const nonReviewedI18nDiffs = git(['diff', '--name-only', baselineCommit, '--', 'data/i18n']).trim().split('\n').filter(Boolean)
  .filter((repoPath) => !repoPath.startsWith('data/i18n/reviewed/') && !repoPath.startsWith('data/i18n/archive/vietnam-after-nha-trang/2026-10-13/') && !repoPath.startsWith('data/i18n/archive/vietnam-southern-gaps/2026-10-13/') && !repoPath.startsWith('data/i18n/archive/vietnam-bay-gaps/2026-10-13/') && !/^data\/i18n\/(?:zh-Hant|ja|ko|th)\.json$/.test(repoPath));
assert.deepEqual(nonReviewedI18nDiffs, [], 'No draft, parallel, terms or unrelated localization files may change in this sprint.');

const ledger = JSON.parse(fs.readFileSync(path.join(root, 'reports/vietnam-coverage-ledger-20261013.json'), 'utf8'));
assert.equal(ledger.branch, 'codex/sprint-vn-southern-gaps-20261013');
assert.equal(ledger.sourceBaseCommit, '76bac54c6881348aabc9ec4c4e10299a705f1df9');
assert.equal(ledger.totals.englishRoutes, 99);
assert.equal(ledger.totals.previousSubstantiveRoutes, 79);
assert.equal(ledger.totals.previousSprintNewSubstantiveRoutes, 4);
assert.equal(ledger.totals.newSubstantiveRoutes, 4);
assert.equal(ledger.totals.afterSprintSubstantiveRoutes, 87);
assert.equal(ledger.totals.remainingRoutes, 12);
assert.equal(ledger.previousSouthernGapsCheckpoint.sourceBaseCommit, baselineCommit);
assert.equal(ledger.previousSouthernGapsCheckpoint.totals.afterSprintSubstantiveRoutes, 83);
assert.deepEqual(ledger.previousSouthernGapsCheckpoint.currentSprintRoutes.map((route) => route.url).sort(), [...routes].sort());
for (const check of bodyChecks) {
  const entry = ledger.previousSouthernGapsCheckpoint.currentSprintRoutes.find((route) => route.url === check.url);
  assert.equal(entry.baseWords, check.baseWords, `${check.url}: ledger base words`);
  assert.equal(entry.currentWords, check.currentWords, `${check.url}: ledger current words`);
  assert.equal(entry.currentMainTextSha256, check.currentMainTextSha256, `${check.url}: ledger current body hash`);
}
const expectedRemaining = [
  '/vietnam/mekong-delta/ca-mau-u-minh-ha-cape/',
  '/vietnam/mui-ne-binh-thuan/phan-thiet-poshanu-heritage/',
  '/vietnam/mui-ne-binh-thuan/phu-quy-island/',
  '/vietnam/mui-ne-binh-thuan/ta-cu-ke-ga-coast/',
  '/vietnam/nha-trang-khanh-hoa/ba-ho-waterfalls/',
  '/vietnam/nha-trang-khanh-hoa/cam-ranh-bai-dai/',
  '/vietnam/nha-trang-khanh-hoa/nha-trang-bay-conservation-transfer/',
  '/vietnam/phong-nha-ke-bang/hang-en-expedition/',
  '/vietnam/phong-nha-ke-bang/son-doong-expedition/',
  '/vietnam/phu-quoc-southern-islands/con-dao-national-park/',
  '/vietnam/phu-quoc-southern-islands/ganh-dau-bai-thom/',
  '/vietnam/phu-quoc-southern-islands/national-park-suoi-tranh/'
];
assert.deepEqual(ledger.remainingRoutesAfterSprint, expectedRemaining);
assert.equal(ledger.previousActiveSprint.branch, 'codex/sprint-vn-after-phu-quoc-20261013');
assert.equal(ledger.previousActiveSprint.sourceBaseCommit, 'a639c760ec728d90a0c271e512cbb7af2fa8bfa4');
assert.equal(ledger.previousActiveSprint.totals.afterSprintSubstantiveRoutes, 79);
assert.equal(ledger.previousActiveSprint.totals.remainingRoutes, 20);
assert.equal(ledger.previousActiveSprint.currentSprintRoutes.length, 4);
assert.equal(ledger.previousActiveSprint.remainingRoutesAfterSprint.length, 20);
assert.equal(ledger.previousTopLevelSprint.branch, 'codex/sprint-vn-after-phong-nha-20261013');

console.log('Historical Da Lat/Ha Long and southern-gaps regression passed with the separately recorded bay-gaps overlay: prior bodies and archives remain intact; the overlay adds only four route records and 20 dates; the checkpoint ledger remains 87/99 with 12 remaining routes.');
console.log(JSON.stringify(bodyChecks, null, 2));
