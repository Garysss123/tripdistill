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
const integrationBaseCommit = '354d17a057cf73c344fd06e84cf43939ff635630';
const sourceTerminal = '8f0a1e526f48203df5fb2471f3b8fb1121e0559e';
const sourceTree = 'f2ac7c972b1900172695c6e28ce09d988abcf9a5';
const origin = 'https://tripdistill.com';
const branch = 'codex/sprint-vn-bay-gaps-20261013';
const routes = [
  '/vietnam/nha-trang-khanh-hoa/ba-ho-waterfalls/',
  '/vietnam/nha-trang-khanh-hoa/cam-ranh-bai-dai/',
  '/vietnam/nha-trang-khanh-hoa/nha-trang-bay-conservation-transfer/',
  '/vietnam/phu-quoc-southern-islands/con-dao-national-park/'
];
const cavesIslandsGapsRoutes = [
  '/vietnam/phong-nha-ke-bang/hang-en-expedition/',
  '/vietnam/phong-nha-ke-bang/son-doong-expedition/',
  '/vietnam/phu-quoc-southern-islands/ganh-dau-bai-thom/',
  '/vietnam/phu-quoc-southern-islands/national-park-suoi-tranh/'
];
const coastalGapsRoutes = [
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
const fileForRoute = (route, edition = editions[0]) => path.join(root, `${edition.prefix}${route}`.slice(1) + 'index.html');
const git = (args, encoding = 'utf8') => execFileSync('git', args, { cwd: root, encoding });
const readAt = (commit, repoPath) => git(['show', `${commit}:${repoPath}`]);
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
  walk(document, (node) => { if (node.tagName === 'main' && attr(node, 'id') === 'main-content') main = node; });
  assert(main, 'HTML has no #main-content.');
  const pieces = [];
  const textElements = /^(h1|h2|h3|p|li|summary|strong|em|span|small|a|button|figcaption)$/;
  function collect(node) {
    if (node.nodeName === '#text') { pieces.push(node.value); return; }
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

function parseSitemap(xml) {
  const entries = [...xml.matchAll(/<url>\s*<loc>(.*?)<\/loc>\s*<lastmod>(.*?)<\/lastmod>[\s\S]*?<\/url>/g)]
    .map(([, url, lastmod]) => [new URL(url, origin).pathname, lastmod]);
  const map = new Map(entries);
  assert.equal(map.size, entries.length, 'Sitemap contains duplicate URL paths.');
  return map;
}

function articleDate(html, pagePath) {
  const document = parse(html);
  for (const script of findAll(document, (node) => node.tagName === 'script' && attr(node, 'type') === 'application/ld+json')) {
    const raw = (script.childNodes || []).map((node) => node.value || '').join('');
    if (!raw) continue;
    const graph = JSON.parse(raw)['@graph'] || [];
    const article = graph.find((item) => item['@type'] === 'Article' && new URL(item.url, origin).pathname === pagePath);
    if (article) return article.dateModified;
  }
  return null;
}

assert.equal(git(['rev-parse', `${baseCommit}^{commit}`]).trim(), baseCommit, 'Exact requested base commit is unavailable.');
assert.equal(git(['rev-parse', `${sourceTerminal}^`]).trim(), baseCommit, 'Bay-gaps source has the exact authorized parent.');
assert.equal(git(['rev-parse', `${sourceTerminal}^{tree}`]).trim(), sourceTree, 'Bay-gaps source tree matches the verified terminal.');
assert.equal(git(['merge-base', baseCommit, sourceTerminal]).trim(), baseCommit, 'Bay-gaps source descends from the exact task base.');
assert.equal(git(['rev-parse', `${integrationBaseCommit}^{commit}`]).trim(), integrationBaseCommit, 'Exact current integration checkpoint is available.');
git(['merge-base', '--is-ancestor', integrationBaseCommit, 'HEAD']);

const bodyChecks = [];
for (const route of routes) {
  const repoPath = `${route.slice(1)}index.html`;
  const base = bodyText(readAt(baseCommit, repoPath));
  const currentHtml = fs.readFileSync(fileForRoute(route), 'utf8');
  const current = bodyText(currentHtml);
  const baseWords = base.split(/\s+/).filter(Boolean).length;
  const currentWords = current.split(/\s+/).filter(Boolean).length;
  assert.notEqual(sha256(current), sha256(base), `${route}: visible page body did not change from the exact base.`);
  assert.equal(currentHtml, readAt(sourceTerminal, repoPath), `${route}: integrated English body matches the exact bay-gaps source terminal.`);
  assert.ok(currentWords - baseWords >= 350, `${route}: expected at least 350 additional visible words; saw ${currentWords - baseWords}.`);
  bodyChecks.push({ url: route, baseWords, currentWords, wordDelta: currentWords - baseWords, baseMainTextSha256: sha256(base), currentMainTextSha256: sha256(current) });
}

const changedVietnamFiles = git(['diff', '--name-only', integrationBaseCommit, '--', 'vietnam']).trim().split('\n').filter(Boolean).sort();
assert.deepEqual(changedVietnamFiles, [...routes, ...cavesIslandsGapsRoutes, ...coastalGapsRoutes].map((route) => `${route.slice(1)}index.html`).sort(), 'Only the registered Bay, Caves/islands, and later coastal English bodies may change under vietnam/.');
const sourceVietnamFiles = git(['diff', '--name-only', `${baseCommit}..${sourceTerminal}`, '--', 'vietnam']).trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(sourceVietnamFiles, routes.map((route) => `${route.slice(1)}index.html`).sort(), 'The exact bay-gaps source changes only the four requested English guide bodies under vietnam/.');
const baseSearch = JSON.parse(readAt(integrationBaseCommit, 'data/search-index.json'));
const currentSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
assert.equal(baseSearch.length, 955);
assert.equal(currentSearch.length, 955);
const byUrl = (records) => new Map(records.map((record) => [record.url, record]));
const baseSearchByUrl = byUrl(baseSearch);
const currentSearchByUrl = byUrl(currentSearch);
assert.deepEqual([...currentSearchByUrl.keys()].sort(), [...baseSearchByUrl.keys()].sort(), 'Search URL set changed.');
const changedSearchRoutes = [...currentSearchByUrl].filter(([url, record]) => JSON.stringify(record) !== JSON.stringify(baseSearchByUrl.get(url))).map(([url]) => url).sort();
assert.deepEqual(changedSearchRoutes, [...routes, ...cavesIslandsGapsRoutes, ...coastalGapsRoutes, '/thailand/'].sort(), 'Only the registered Bay/Caves/islands/coastal and Thailand overview English search records may change.');

const baseSitemap = parseSitemap(readAt(integrationBaseCommit, 'sitemap.xml'));
const currentSitemap = parseSitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560);
assert.equal(currentSitemap.size, 4560);
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set changed.');
const expectedDatePaths = new Set(editions.flatMap(({ prefix }) => [...routes, ...cavesIslandsGapsRoutes, ...coastalGapsRoutes, '/thailand/'].map((route) => prefix + route)));
const changedDatePaths = [...currentSitemap].filter(([url, date]) => baseSitemap.get(url) !== date).map(([url]) => url).sort();
assert.deepEqual(changedDatePaths, [...expectedDatePaths].sort(), 'Only the selected Vietnam routes and Thailand overview in five editions may receive their declared dates.');
for (const pagePath of expectedDatePaths) {
  const route = pagePath.replace(/^\/(?:zh|ja|ko|th)(?=\/)/u, '');
  assert.equal(currentSitemap.get(pagePath), route === '/thailand/' ? '2026-10-14' : editDate, `${pagePath}: sitemap lastmod`);
}

for (const route of routes) {
  const sourceSearch = currentSearchByUrl.get(route);
  assert(sourceSearch?.summary, `${route}: English search summary missing.`);
  for (const edition of editions) {
    const pagePath = edition.prefix + route;
    const html = fs.readFileSync(fileForRoute(route, edition), 'utf8');
    const document = parse(html);
    assert.equal(findAll(document, (node) => node.tagName === 'h1').length, 1, `${edition.code} ${route}: expected one h1.`);
    const canonical = findAll(document, (node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical')[0];
    assert(canonical, `${edition.code} ${route}: canonical missing.`);
    assert.equal(new URL(attr(canonical, 'href'), origin).pathname, pagePath, `${edition.code} ${route}: canonical path`);
    const links = findAll(document, (node) => node.tagName === 'link' && attr(node, 'rel') === 'alternate');
    const alternates = new Map(links.map((node) => [attr(node, 'hreflang'), new URL(attr(node, 'href'), origin).pathname]));
    assert.deepEqual([...alternates.keys()].sort(), ['en', 'ja', 'ko', 'th', 'x-default', 'zh-Hant'].sort(), `${edition.code} ${route}: hreflang set`);
    for (const other of editions) assert.equal(alternates.get(other.code), other.prefix + route, `${edition.code} ${route}: ${other.code} alternate`);
    assert.equal(alternates.get('x-default'), route, `${edition.code} ${route}: x-default alternate`);
    assert.equal(articleDate(html, pagePath), editDate, `${edition.code} ${route}: Article.dateModified`);
    if (edition.code !== 'en') {
      const catalog = JSON.parse(fs.readFileSync(path.join(root, `data/i18n/${edition.code}.json`), 'utf8')).translations;
      const localizedBody = bodyText(html);
      const localizedIndex = JSON.parse(fs.readFileSync(path.join(root, `${edition.prefix.slice(1)}/data/search-index.json`), 'utf8'));
      const localized = byUrl(localizedIndex).get(pagePath);
      assert(localized, `${edition.code} ${route}: search record missing.`);
      for (const field of ['title', 'summary', 'type']) {
        assert(catalog[sourceSearch[field]]?.trim(), `${edition.code} ${route}: missing translation for search ${field}.`);
        assert.equal(localized[field], catalog[sourceSearch[field]], `${edition.code} ${route}: search ${field} does not match catalog.`);
      }
      assert(localizedBody.includes(catalog[sourceSearch.summary]), `${edition.code} ${route}: translated search summary is absent from page.`);
      assert(!localizedBody.includes(sourceSearch.summary), `${edition.code} ${route}: English search summary leaked into localized page.`);
      assert.equal(localizedIndex.length, 955, `${edition.code}: search index record count`);
    }
  }
}

const activeTranslationSources = new Set(collectTranslationWork().flatMap((record) => record.units));
const manifestPath = 'data/i18n/archive/vietnam-bay-gaps/2026-10-13/manifest.json';
const manifest = JSON.parse(fs.readFileSync(path.join(root, manifestPath), 'utf8'));
assert.equal(manifest.baseCommit, baseCommit);
assert.deepEqual(manifest.routes, routes);
assert.equal(manifest.removedUniqueSourceKeys.length, 60);
assert.equal(manifest.archivedFiles.length, 16);
assert.equal(manifest.archivedFiles.reduce((sum, item) => sum + item.removedKeys.length, 0), 240);
assert.equal(manifest.followUpPrune.additionalOwnerEntries, 12);
for (const archived of manifest.archivedFiles) {
  const snapshot = fs.readFileSync(path.join(root, archived.archive));
  assert.equal(sha256(snapshot), archived.sha256, `${archived.archive}: hash mismatch.`);
  assert.equal(snapshot.toString('utf8'), readAt(baseCommit, archived.source), `${archived.source}: archive differs from exact base.`);
  const before = JSON.parse(snapshot.toString('utf8'));
  const after = JSON.parse(fs.readFileSync(path.join(root, archived.source), 'utf8'));
  assert.deepEqual(after, { ...before, translations: Object.fromEntries(Object.entries(before.translations || {}).filter(([source]) => activeTranslationSources.has(source))) }, `${archived.source}: unrelated translations changed during stale-key cleanup.`);
  for (const source of archived.removedKeys) assert(!activeTranslationSources.has(source), `${archived.source}: removed key is still active.`);
}

const thailandManifest = JSON.parse(fs.readFileSync(path.join(root, 'data/i18n/archive/thailand-country-overview-refresh/2026-10-14/manifest.json'), 'utf8'));
const expectedReviewedDiffs = [
  ...thailandManifest.files.map((item) => item.sourcePath),
  ...manifest.archivedFiles.map((item) => item.source)
];
const cavesArchiveRoot = 'data/i18n/archive/vietnam-caves-islands-gaps/2026-10-13';
const cavesManifest = JSON.parse(fs.readFileSync(path.join(root, cavesArchiveRoot, 'manifest.json'), 'utf8'));
const cavesSupersededManifest = JSON.parse(fs.readFileSync(path.join(root, cavesArchiveRoot, 'superseded-batches-manifest.json'), 'utf8'));
expectedReviewedDiffs.push(...cavesManifest.files.filter((item) => item.staleKeys.some((source) => !activeTranslationSources.has(source))).map((item) => item.sourcePath));
expectedReviewedDiffs.push(...cavesSupersededManifest.files.map((item) => item.successorPath));
const cavesIntegrationFollowup = JSON.parse(fs.readFileSync(path.join(root, cavesArchiveRoot, 'integration-followup-manifest.json'), 'utf8'));
expectedReviewedDiffs.push(...cavesIntegrationFollowup.files.map((item) => item.sourcePath));
for (const edition of editions.slice(1)) {
  const directory = path.join(root, 'data/i18n/reviewed', edition.code);
  const pageBatches = fs.readdirSync(directory).filter((name) => name.endsWith('-caves-islands-gaps-pages.json'));
  assert.equal(pageBatches.length, 1, `${edition.code}: one caves/islands page batch is expected.`);
  expectedReviewedDiffs.push(`data/i18n/reviewed/${edition.code}/${pageBatches[0]}`);
  expectedReviewedDiffs.push(`data/i18n/reviewed/${edition.code}/29z-vietnam-caves-islands-gaps-search.json`);
}
for (const edition of editions.slice(1)) {
  const directory = path.join(root, 'data/i18n/reviewed', edition.code);
  for (const [kind, suffix, expectedRoutes, expectedKeys] of [
    ['pages', 'defo-bay-gaps-pages-20261013.json', routes, 187],
    ['search', 'defo-bay-gaps-search-20261013.json', ['/data/search-index.json'], 16]
  ]) {
    const matches = fs.readdirSync(directory).filter((name) => name.endsWith(suffix));
    assert.equal(matches.length, 1, `${edition.code}: expected one ${kind} batch.`);
    const name = matches[0];
    const batchPath = `data/i18n/reviewed/${edition.code}/${name}`;
    expectedReviewedDiffs.push(batchPath);
    const batch = JSON.parse(fs.readFileSync(path.join(root, batchPath), 'utf8'));
    assert.equal(batch.qualityStatus, 'reviewed', `${edition.code} ${kind}: status`);
    assert.deepEqual(batch.routes, expectedRoutes, `${edition.code} ${kind}: route scope`);
    assert.equal(Object.keys(batch.translations).length, expectedKeys, `${edition.code} ${kind}: translated key count`);
    assert(Object.values(batch.translations).every((value) => typeof value === 'string' && value.trim()), `${edition.code} ${kind}: blank translation.`);
    assert.equal(batch.reviewProvenance?.independentSecondModel, false, `${edition.code} ${kind}: independent review was overstated.`);
    assert.match(batch.reviewProvenance?.reviewer || '', /same-model self-review/);
  }
}
const coastalArchive = JSON.parse(fs.readFileSync(path.join(root, 'data/i18n/archive/vietnam-coastal-gaps/2026-10-13/manifest.json'), 'utf8'));
expectedReviewedDiffs.push(...coastalArchive.files.map((file) => file.sourcePath));
for (const edition of editions.slice(1)) {
  const directory = path.join(root, 'data/i18n/reviewed', edition.code);
  for (const suffix of ['defo-vietnam-coastal-pages.json', 'defp-vietnam-coastal-search.json']) {
    const matches = fs.readdirSync(directory).filter((name) => name.endsWith(suffix));
    assert.equal(matches.length, 1, `${edition.code}: expected one explicit coastal ${suffix.includes('search') ? 'search' : 'pages'} batch.`);
    expectedReviewedDiffs.push(`data/i18n/reviewed/${edition.code}/${matches[0]}`);
  }
  for (const suffix of ['a-th-pages.json', 'b-th-search.json']) {
    const matches = fs.readdirSync(directory).filter((name) => name.endsWith(suffix));
    assert.equal(matches.length, 1, `${edition.code}: expected one Thailand overview ${suffix.includes('search') ? 'search' : 'page'} batch.`);
    expectedReviewedDiffs.push(`data/i18n/reviewed/${edition.code}/${matches[0]}`);
  }
}
const reviewedDiffs = [...new Set([
  ...git(['diff', '--name-only', integrationBaseCommit, '--', 'data/i18n/reviewed']).trim().split('\n').filter(Boolean),
  ...git(['ls-files', '--others', '--exclude-standard', '--', 'data/i18n/reviewed']).trim().split('\n').filter(Boolean)
])].sort();
assert.deepEqual(reviewedDiffs, [...new Set(expectedReviewedDiffs)].sort(), 'Only the four Bay batches, registered Caves batches and both archived reviewed snapshot groups may change.');

const expectedLedgerRemaining = [
  '/vietnam/mekong-delta/ca-mau-u-minh-ha-cape/',
  '/vietnam/mui-ne-binh-thuan/phan-thiet-poshanu-heritage/',
  '/vietnam/mui-ne-binh-thuan/phu-quy-island/',
  '/vietnam/mui-ne-binh-thuan/ta-cu-ke-ga-coast/',
  '/vietnam/phong-nha-ke-bang/hang-en-expedition/',
  '/vietnam/phong-nha-ke-bang/son-doong-expedition/',
  '/vietnam/phu-quoc-southern-islands/ganh-dau-bai-thom/',
  '/vietnam/phu-quoc-southern-islands/national-park-suoi-tranh/'
];
const ledger = JSON.parse(fs.readFileSync(path.join(root, 'reports/vietnam-bay-gaps-coverage-ledger-2026-10-13.json'), 'utf8'));
assert.equal(ledger.branch, branch);
assert.equal(ledger.sourceBaseCommit, baseCommit);
assert.deepEqual(ledger.currentSprintRoutes.map((item) => item.url), routes);
assert.equal(ledger.totals.englishRoutes, 99);
assert.equal(ledger.totals.baseSubstantiveRoutes, 87);
assert.equal(ledger.totals.newSubstantiveRoutes, 4);
assert.equal(ledger.totals.afterSprintSubstantiveRoutes, 91);
assert.equal(ledger.totals.remainingRoutes, 8);
assert.deepEqual(ledger.remainingRoutesAfterSprint, expectedLedgerRemaining);
for (const check of bodyChecks) {
  const entry = ledger.currentSprintRoutes.find((item) => item.url === check.url);
  assert.equal(entry.baseWords, check.baseWords, `${check.url}: ledger base count`);
  assert.equal(entry.currentWords, check.currentWords, `${check.url}: ledger current count`);
  assert.equal(entry.currentMainTextSha256, check.currentMainTextSha256, `${check.url}: ledger body hash`);
}

console.log(`Bay-gaps scope regression passed: four exact-base bodies grew by ${bodyChecks.reduce((sum, item) => sum + item.wordDelta, 0)} visible words; only four English records changed; five-edition metadata, 20 dates, 4,560 sitemap URLs, translation batches and archived stale-key snapshots match; coverage is 91/99.`);
console.log(JSON.stringify(bodyChecks, null, 2));
