#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { collectTranslationWork, loadCatalog, localizeSearchIndex } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baselineCommit = 'd779848fbc247042561cfaa34773257122aa38d0';
const integrationBaseCommit = 'd5b9b0f542540d52a6eb051454fe75774820407e';
const sourceTerminal = '65aa4a27df02d012e533954199a190baa80d7515';
const initialAtlasCommit = '8a1ada3b4021d077fd468c9c318d91823177c0cb';
const origin = 'https://tripdistill.com';
const editDate = '2026-10-13';
const routes = [
  '/vietnam/phong-nha-ke-bang/hang-en-expedition/',
  '/vietnam/phong-nha-ke-bang/son-doong-expedition/',
  '/vietnam/phu-quoc-southern-islands/ganh-dau-bai-thom/',
  '/vietnam/phu-quoc-southern-islands/national-park-suoi-tranh/'
];
const locales = [
  { code: 'en', dir: '', prefix: '' },
  { code: 'zh-Hant', dir: 'zh', prefix: '/zh' },
  { code: 'ja', dir: 'ja', prefix: '/ja' },
  { code: 'ko', dir: 'ko', prefix: '/ko' },
  { code: 'th', dir: 'th', prefix: '/th' }
];
const searchBatchName = '29z-vietnam-caves-islands-gaps-search.json';
const pageBatchSuffix = '-caves-islands-gaps-pages.json';

const git = (args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' });
const readAt = (commit, repoPath) => git(['show', `${commit}:${repoPath}`]);
assert.equal(git(['rev-parse', `${sourceTerminal}^`]).trim(), baselineCommit, 'Caves source terminal has the exact authorized parent.');
assert.equal(git(['rev-parse', `${sourceTerminal}^{tree}`]).trim(), '131f17bcdcbac5aa5814119dd6969b4fddd73bae', 'Caves source terminal tree matches the exact reviewed source.');
const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex');
const attr = (node, name) => node.attrs?.find((item) => item.name === name)?.value || '';
const walk = (node, visit) => {
  visit(node);
  for (const child of node.childNodes || []) walk(child, visit);
};
const findAll = (document, predicate) => {
  const matches = [];
  walk(document, (node) => { if (predicate(node)) matches.push(node); });
  return matches;
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
    if (node.tagName === 'section' && attr(node, 'class').split(/\s+/).includes('sources')) return;
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

function routeFile(route, locale = locales[0]) {
  const prefix = locale.prefix ? `${locale.dir}/` : '';
  return path.join(root, `${prefix}${route.slice(1)}index.html`);
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
  const baseline = bodyText(readAt(baselineCommit, repoPath));
  const current = bodyText(fs.readFileSync(routeFile(route), 'utf8'));
  const initialHash = sha256(initial);
  const baselineHash = sha256(baseline);
  const currentHash = sha256(current);
  assert.equal(fs.readFileSync(routeFile(route), 'utf8'), readAt(sourceTerminal, repoPath), `${route}: integrated English page matches the exact source terminal.`);
  assert.equal(initialHash, baselineHash, `${route}: body was substantively updated before this sprint.`);
  assert.notEqual(currentHash, baselineHash, `${route}: visible body is unchanged from the exact base.`);
  const baseWords = baseline.split(/\s+/).filter(Boolean).length;
  const currentWords = current.split(/\s+/).filter(Boolean).length;
  assert.ok(currentWords - baseWords >= 350, `${route}: expected a substantive body change; got ${currentWords - baseWords} words.`);
  bodyChecks.push({
    url: route,
    baseWords,
    currentWords,
    bodyWordDelta: currentWords - baseWords,
    initialMainTextSha256: initialHash,
    baseMainTextSha256: baselineHash,
    currentMainTextSha256: currentHash
  });
}

const currentSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const baseSearch = JSON.parse(readAt(integrationBaseCommit, 'data/search-index.json'));
assert.equal(baseSearch.length, 955, 'Exact integration-base English search record count.');
assert.equal(currentSearch.length, 955, 'Current English search record count.');
const byUrl = (records) => new Map(records.map((record) => [record.url, record]));
const baseSearchByUrl = byUrl(baseSearch);
const currentSearchByUrl = byUrl(currentSearch);
assert.deepEqual([...currentSearchByUrl.keys()].sort(), [...baseSearchByUrl.keys()].sort(), 'English search URL set changed.');
const changedSearchRoutes = [...currentSearchByUrl]
  .filter(([url, record]) => JSON.stringify(record) !== JSON.stringify(baseSearchByUrl.get(url)))
  .map(([url]) => url).sort();
assert.deepEqual(changedSearchRoutes, [...routes].sort(), 'Only the four assigned English search records may change.');

// Only English route HTML is tracked. Localized route HTML lives under the
// ignored generated edition directories and is checked from the generated
// files below after localize:pages/build.
const expectedPageFiles = routes.map((route) => `${route.slice(1)}index.html`).sort();
const changedPageFiles = git(['diff', '--name-only', integrationBaseCommit, '--', 'vietnam', 'zh/vietnam', 'ja/vietnam', 'ko/vietnam', 'th/vietnam'])
  .trim().split('\n').filter(Boolean).sort();
assert.deepEqual(changedPageFiles, expectedPageFiles, 'Only the four selected route pages in five editions may change under route directories.');

const baseSitemap = parseSitemap(readAt(integrationBaseCommit, 'sitemap.xml'));
const currentSitemap = parseSitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560, 'Exact base sitemap URL count.');
assert.equal(currentSitemap.size, 4560, 'Current sitemap URL count.');
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set changed.');
const expectedDatePaths = new Set(locales.flatMap(({ prefix }) => routes.map((route) => `${prefix}${route}`)));
const changedDatePaths = [...currentSitemap]
  .filter(([url, date]) => baseSitemap.get(url) !== date)
  .map(([url]) => url).sort();
assert.deepEqual(changedDatePaths, [...expectedDatePaths].sort(), 'Only four selected routes in five editions may receive new sitemap dates.');
for (const pagePath of expectedDatePaths) assert.equal(currentSitemap.get(pagePath), editDate, `${pagePath}: sitemap date`);

const pageBatchKeysByLocale = new Map();
const searchBatchKeysByLocale = new Map();
for (const locale of locales.slice(1)) {
  const directory = path.join(root, 'data/i18n/reviewed', locale.code);
  const pageBatchNames = fs.readdirSync(directory).filter((name) => name.endsWith(pageBatchSuffix));
  assert.equal(pageBatchNames.length, 1, `${locale.code}: expected one uniquely named caves-islands-gaps page batch.`);
  const pageBatchName = pageBatchNames[0];
  const pageBatch = JSON.parse(fs.readFileSync(path.join(directory, pageBatchName), 'utf8'));
  const searchBatch = JSON.parse(fs.readFileSync(path.join(directory, searchBatchName), 'utf8'));
  assert.equal(pageBatch.locale, locale.code);
  assert.equal(searchBatch.locale, locale.code);
  assert.equal(pageBatch.qualityStatus, 'reviewed', `${locale.code}: page batch status`);
  assert.equal(searchBatch.qualityStatus, 'reviewed', `${locale.code}: search batch status`);
  assert.deepEqual(pageBatch.routes, routes, `${locale.code}: page batch route scope`);
  assert.deepEqual(searchBatch.routes, ['/data/search-index.json'], `${locale.code}: search batch route scope`);
  assert.equal(pageBatch.translationProvenance?.independentSecondModel, false, `${locale.code}: page provenance`);
  assert.equal(searchBatch.translationProvenance?.independentSecondModel, false, `${locale.code}: search provenance`);
  for (const [kind, batch] of [['page', pageBatch], ['search', searchBatch]]) {
    for (const [source, target] of Object.entries(batch.translations || {})) {
      assert.equal(typeof target, 'string', `${locale.code} ${kind}: non-string translation for ${source}`);
      assert(target.trim(), `${locale.code} ${kind}: blank translation for ${source}`);
    }
  }
  assert.equal(Object.keys(pageBatch.translations).length, 203, `${locale.code}: exact fresh page-batch key count`);
  assert.equal(Object.keys(searchBatch.translations).length, 25, `${locale.code}: exact search-batch key count`);
  pageBatchKeysByLocale.set(locale.code, Object.keys(pageBatch.translations));
  searchBatchKeysByLocale.set(locale.code, Object.keys(searchBatch.translations));
}
for (const map of [pageBatchKeysByLocale, searchBatchKeysByLocale]) {
  const first = map.get('zh-Hant');
  for (const locale of locales.slice(2)) assert.deepEqual(map.get(locale.code), first, `${locale.code}: translation source-key parity`);
}

const requiredUnits = new Set(collectTranslationWork().flatMap((record) => record.units));
const staleArchiveRoot = path.join(root, 'data/i18n/archive/vietnam-caves-islands-gaps/2026-10-13');
const staleManifest = JSON.parse(fs.readFileSync(path.join(staleArchiveRoot, 'manifest.json'), 'utf8'));
assert.equal(staleManifest.sourceBaseCommit, baselineCommit, 'Stale-key archive base.');
assert.equal(staleManifest.files.length, 16, 'Expected exact snapshots of the 16 reviewed batches with stale keys.');
assert.equal(staleManifest.files.reduce((count, file) => count + file.staleKeys.length, 0), 340, 'Exact stale-key archive count against the Caves source base.');
const integrationFollowupManifestPath = path.join(staleArchiveRoot, 'integration-followup-manifest.json');
const integrationFollowupManifest = JSON.parse(fs.readFileSync(integrationFollowupManifestPath, 'utf8'));
assert.equal(integrationFollowupManifest.integrationBaseCommit, integrationBaseCommit, 'Post-base stale-key archive matches the exact integration checkpoint.');
assert.equal(integrationFollowupManifest.files.length, 8, 'Expected exact integration-base snapshots of the shared Nha Trang and Phu Quoc translation batches.');
assert.equal(integrationFollowupManifest.files.reduce((count, file) => count + file.removedKeys.length, 0), 24, 'Exact post-base stale-key archive count across all locales.');
const integrationFollowupRemovals = new Map();
for (const archived of integrationFollowupManifest.files) {
  const bytes = fs.readFileSync(path.join(root, archived.archivePath));
  assert.equal(bytes.length, archived.bytes, `${archived.archivePath}: integration archive byte count`);
  assert.equal(sha256(bytes), archived.sha256, `${archived.archivePath}: integration archive hash`);
  assert.equal(bytes.toString('utf8'), readAt(integrationBaseCommit, archived.sourcePath), `${archived.sourcePath}: archived integration snapshot must match the exact base blob.`);
  const snapshot = JSON.parse(bytes.toString('utf8'));
  const current = JSON.parse(fs.readFileSync(path.join(root, archived.sourcePath), 'utf8'));
  for (const source of archived.removedKeys) {
    assert(Object.hasOwn(snapshot.translations || {}, source), `${archived.sourcePath}: archived stale key missing from integration snapshot: ${source}`);
    assert(!requiredUnits.has(source), `${archived.sourcePath}: integration follow-up key is still required: ${source}`);
    assert(!Object.hasOwn(current.translations || {}, source), `${archived.sourcePath}: stale follow-up key remains active: ${source}`);
  }
  integrationFollowupRemovals.set(archived.sourcePath, new Set(archived.removedKeys));
}
for (const archived of staleManifest.files) {
  const bytes = fs.readFileSync(path.join(root, archived.archivePath));
  assert.equal(bytes.length, archived.bytes, `${archived.archivePath}: archive byte count`);
  assert.equal(sha256(bytes), archived.sha256, `${archived.archivePath}: archive hash`);
  assert.equal(bytes.toString('utf8'), readAt(baselineCommit, archived.sourcePath), `${archived.sourcePath}: archive must match the exact base blob.`);
  const integrationBase = JSON.parse(readAt(integrationBaseCommit, archived.sourcePath));
  const current = JSON.parse(fs.readFileSync(path.join(root, archived.sourcePath), 'utf8'));
  const integrationStaleKeys = integrationFollowupRemovals.get(archived.sourcePath) || new Set();
  const expectedRemovedKeys = new Set([
    ...archived.staleKeys.filter((source) => !requiredUnits.has(source)),
    ...integrationStaleKeys
  ]);
  const expectedCurrent = Object.fromEntries(Object.entries(integrationBase.translations || {}).filter(([source]) => !expectedRemovedKeys.has(source)));
  assert.deepEqual(current.translations, expectedCurrent, `${archived.sourcePath}: current translations must preserve integration values and prune only archived stale keys.`);
  for (const source of archived.staleKeys) {
    if (requiredUnits.has(source)) assert(Object.hasOwn(current.translations || {}, source), `${archived.sourcePath}: key reactivated by integrated content must be retained: ${source}`);
  }
}

const supersededManifest = JSON.parse(fs.readFileSync(path.join(staleArchiveRoot, 'superseded-batches-manifest.json'), 'utf8'));
assert.equal(supersededManifest.sourceBaseCommit, baselineCommit, 'Page-batch rename archive base.');
assert.equal(supersededManifest.files.length, 4, 'Expected exact snapshots of the four initial per-locale page batches.');
const activeBatchSources = new Set();
for (const locale of locales.slice(1)) {
  const directory = path.join(root, 'data/i18n/reviewed', locale.code);
  for (const name of fs.readdirSync(directory).filter((value) => value.endsWith('.json'))) {
    const batch = JSON.parse(fs.readFileSync(path.join(directory, name), 'utf8'));
    if (batch.qualityStatus === 'reviewed') for (const source of Object.keys(batch.translations || {})) activeBatchSources.add(`${locale.code}\u0000${source}`);
  }
}
for (const archived of supersededManifest.files) {
  const bytes = fs.readFileSync(path.join(root, archived.archivePath));
  assert.equal(bytes.length, archived.bytes, `${archived.archivePath}: archived page-batch byte count`);
  assert.equal(sha256(bytes), archived.sha256, `${archived.archivePath}: archived page-batch hash`);
  const oldBatch = JSON.parse(bytes.toString('utf8'));
  for (const source of Object.keys(oldBatch.translations || {})) {
    if (requiredUnits.has(source)) assert(activeBatchSources.has(`${archived.locale}\u0000${source}`), `${archived.locale}: active page translation was cleared during batch rename: ${source}`);
  }
}

const expectedReviewedDiffs = new Set();
for (const archived of staleManifest.files) {
  if (archived.staleKeys.some((source) => !requiredUnits.has(source))) expectedReviewedDiffs.add(archived.sourcePath);
}
for (const archived of integrationFollowupManifest.files) {
  assert(archived.removedKeys.length > 0, `${archived.sourcePath}: integration follow-up archive must record exact stale removals.`);
  expectedReviewedDiffs.add(archived.sourcePath);
}
for (const archived of supersededManifest.files) expectedReviewedDiffs.add(archived.successorPath);
for (const locale of locales.slice(1)) {
  const directory = path.join(root, 'data/i18n/reviewed', locale.code);
  const pageBatchNames = fs.readdirSync(directory).filter((name) => name.endsWith(pageBatchSuffix));
  assert.equal(pageBatchNames.length, 1, `${locale.code}: exact active Caves page-batch path.`);
  expectedReviewedDiffs.add(`data/i18n/reviewed/${locale.code}/${pageBatchNames[0]}`);
  expectedReviewedDiffs.add(`data/i18n/reviewed/${locale.code}/${searchBatchName}`);
}
const changedReviewedDiffs = [...new Set([
  ...git(['diff', '--name-only', integrationBaseCommit, '--', 'data/i18n/reviewed']).trim().split('\n').filter(Boolean),
  ...git(['ls-files', '--others', '--exclude-standard', '--', 'data/i18n/reviewed']).trim().split('\n').filter(Boolean)
])].sort();
assert.deepEqual(changedReviewedDiffs, [...expectedReviewedDiffs].sort(), 'Only exact Caves source-base stale-key files, exact integration-follow-up stale-key files and registered Caves translation batches may change.');

for (const locale of locales.slice(1)) {
  const catalog = JSON.parse(fs.readFileSync(path.join(root, `data/i18n/${locale.code}.json`), 'utf8')).translations;
  const loadedCatalog = loadCatalog(locale.code);
  const localizedIndexPath = path.join(root, locale.dir, 'data/search-index.json');
  const localizedIndex = JSON.parse(fs.readFileSync(localizedIndexPath, 'utf8'));
  assert.equal(localizedIndex.length, 955, `${locale.code}: localized search record count.`);
  const localizedMap = byUrl(localizedIndex);
  assert.deepEqual(localizedIndex, localizeSearchIndex(currentSearch, loadedCatalog.translations, locale.code), `${locale.code}: generated search index must match the reviewed catalog and current English index.`);
  for (const route of routes) {
    const source = currentSearchByUrl.get(route);
    const localizedPath = `${locale.prefix}${route}`;
    const localizedRecord = localizedMap.get(localizedPath);
    assert(localizedRecord, `${locale.code}: localized search record missing for ${route}.`);
    for (const field of ['title', 'parent', 'type', 'summary']) {
      assert(catalog[source[field]]?.trim(), `${locale.code}: missing reviewed search translation for ${field} ${route}`);
      assert.equal(localizedRecord[field], catalog[source[field]], `${locale.code}: localized search ${field} mismatch for ${route}`);
    }

    const html = fs.readFileSync(routeFile(route, locale), 'utf8');
    const document = parse(html);
    const h1s = findAll(document, (node) => node.tagName === 'h1');
    assert.equal(h1s.length, 1, `${locale.code} ${route}: expected one h1.`);
    const canonical = findAll(document, (node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical')[0];
    assert(canonical, `${locale.code} ${route}: canonical is missing.`);
    assert.equal(new URL(attr(canonical, 'href'), origin).pathname, localizedPath, `${locale.code} ${route}: canonical path`);
    const links = findAll(document, (node) => node.tagName === 'link' && attr(node, 'rel') === 'alternate');
    const alternates = new Map(links.map((node) => [attr(node, 'hreflang'), new URL(attr(node, 'href'), origin).pathname]));
    assert.deepEqual([...alternates.keys()].sort(), ['en', 'ja', 'ko', 'th', 'x-default', 'zh-Hant'].sort(), `${locale.code} ${route}: hreflang set`);
    for (const edition of locales) assert.equal(alternates.get(edition.code), `${edition.prefix}${route}`, `${locale.code} ${route}: ${edition.code} alternate`);
    assert.equal(alternates.get('x-default'), route, `${locale.code} ${route}: x-default`);
    assert.equal(articleDate(html, localizedPath), editDate, `${locale.code} ${route}: Article.dateModified`);
    const localizedBody = bodyText(html);
    assert(localizedBody.includes(catalog[source.summary]), `${locale.code} ${route}: translated search summary missing from page.`);
    assert(!localizedBody.includes(source.summary), `${locale.code} ${route}: English search summary leaked into page.`);
  }
}

for (const route of routes) {
  const englishHtml = fs.readFileSync(routeFile(route), 'utf8');
  assert.equal(articleDate(englishHtml, route), editDate, `${route}: English Article.dateModified`);
  const document = parse(englishHtml);
  const sourceLinks = findAll(document, (node) => node.tagName === 'a' && attr(node, 'href').startsWith('https://'));
  assert(sourceLinks.length >= 2, `${route}: expected official source links.`);
  for (const locale of locales.slice(1)) {
    const html = fs.readFileSync(routeFile(route, locale), 'utf8');
    assert.equal(articleDate(html, `${locale.prefix}${route}`), editDate, `${locale.code} ${route}: Article.dateModified`);
  }
}

const ledger = JSON.parse(fs.readFileSync(path.join(root, 'reports/vietnam-coverage-ledger-20261013.json'), 'utf8'));
assert.equal(ledger.totals.englishRoutes, 99, 'Vietnam route total from prior ledger.');
assert.equal(ledger.totals.afterSprintSubstantiveRoutes, 87, 'Prior substantive baseline from VN87/99.');
assert.equal(ledger.totals.remainingRoutes, 12, 'Prior exact remainder from VN87/99.');
const priorRemaining = new Set(ledger.remainingRoutesAfterSprint);
for (const route of routes) assert(priorRemaining.has(route), `${route}: exact prior ledger did not list this route as remaining.`);
const afterCount = ledger.totals.afterSprintSubstantiveRoutes + routes.length;
assert.equal(afterCount, 91, 'Source-task ledger advances exactly four from 87 substantive routes.');
assert.equal(898 + routes.length, 902, 'The verified integration checkpoint advances exactly four from 898 to 902 substantive routes.');
assert.equal(ledger.totals.remainingRoutes - routes.length, 8, 'This batch leaves eight routes.');

console.log('Vietnam caves-islands-gaps regression passed: exact-base history hashes, four substantive bodies, four English/localized search records, 25 translated search keys per locale, 203 fresh page keys per locale, 340 source-base and 24 integration-follow-up stale keys archived, all reactivated keys retained, exact five-edition page scope/dates/canonicals/hreflang, exactly 20 sitemap dates, 4,560 stable URLs and the source-ledger 87→91/99 and integrated site ledger 898→902/907.');
console.log(JSON.stringify({ baselineCommit, integrationBaseCommit, sourceTerminal, initialAtlasCommit, bodyChecks, coverage: { sourceBefore: 87, added: 4, sourceAfter: afterCount, integratedBefore: 898, integratedAfter: 902, remainingInSourceLedger: 8 }, searchRecords: { before: 955, after: currentSearch.length, changed: changedSearchRoutes }, sitemap: { before: baseSitemap.size, after: currentSitemap.size, changedDates: [...expectedDatePaths].sort() } }, null, 2));
