#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { postIntegrationTripDistillReviewedPaths } from './integration-sprint-scope.mjs';
import { postIntegrationTripDistillRoutes } from './integration-sprint-scope.mjs';
import { collectTranslationWork } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baselineCommit = '76bac54c6881348aabc9ec4c4e10299a705f1df9';
const integrationBaseCommit = 'cab3f51a6229db30da1fbbea6ef0a728d5afe66a';
const sourceTerminal = 'd779848fbc247042561cfaa34773257122aa38d0';
const initialAtlasCommit = '8a1ada3b4021d077fd468c9c318d91823177c0cb';
const origin = 'https://tripdistill.com';
const routes = [
  '/vietnam/ho-chi-minh-city/can-gio-mangroves/',
  '/vietnam/ho-chi-minh-city/thu-thiem-thao-dien/',
  '/vietnam/mekong-delta/my-tho-thoi-son-island/',
  '/vietnam/mekong-delta/sa-dec-flower-literary-quarter/'
];
const bayGapsRoutes = [
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
const hubs = [
  'vietnam/ho-chi-minh-city/index.html',
  'vietnam/mekong-delta/index.html'
];
const editions = [
  { code: 'en', prefix: '' },
  { code: 'zh-Hant', prefix: '/zh' },
  { code: 'ja', prefix: '/ja' },
  { code: 'ko', prefix: '/ko' },
  { code: 'th', prefix: '/th' }
];
const editDate = '2026-10-13';
const archiveRoot = 'data/i18n/archive/vietnam-southern-gaps/2026-10-13';
const fileForRoute = (route) => path.join(root, route.slice(1) + 'index.html');
const git = (args, encoding = 'utf8') => execFileSync('git', args, { cwd: root, encoding });
const readAt = (commit, repoPath) => git(['show', commit + ':' + repoPath]);
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
  return path.join(root, (prefix + route).slice(1) + 'index.html');
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
assert.equal(git(['rev-parse', `${sourceTerminal}^`]).trim(), baselineCommit, 'the southern source terminal has the exact authorized 76bac54 parent');
assert.equal(git(['rev-parse', `${sourceTerminal}^{tree}`]).trim(), '81403ffd80259e41ae60cf2132c7f2f6c0559467', 'the southern source terminal tree matches the supplied commit');
for (const route of routes) {
  const repoPath = route.slice(1) + 'index.html';
  const initial = bodyText(readAt(initialAtlasCommit, repoPath));
  const base = bodyText(readAt(baselineCommit, repoPath));
  const current = bodyText(fs.readFileSync(fileForRoute(route), 'utf8'));
  const initialHash = sha256(initial);
  const baseHash = sha256(base);
  const currentHash = sha256(current);
  assert.equal(initialHash, baseHash, route + ': body had already changed before this sprint.');
  assert.notEqual(currentHash, baseHash, route + ': visible body is unchanged from the requested base.');
  assert.equal(fs.readFileSync(fileForRoute(route), 'utf8'), readAt(sourceTerminal, repoPath), route + ': integrated English file must match the exact southern source terminal.');
  const baseWords = base.split(/\s+/).filter(Boolean).length;
  const currentWords = current.split(/\s+/).filter(Boolean).length;
  assert.ok(currentWords - baseWords >= 350, route + ': expected a substantive body change; got ' + (currentWords - baseWords) + ' words.');
  bodyChecks.push({
    url: route,
    initialWords: baseWords,
    baseWords,
    currentWords,
    wordDelta: currentWords - baseWords,
    initialMainTextSha256: initialHash,
    baseMainTextSha256: baseHash,
    currentMainTextSha256: currentHash
  });
}

const changedEnglishVietnamFiles = git(['diff', '--name-only', integrationBaseCommit, '--', 'vietnam']).trim().split('\n').filter(Boolean).sort();
const expectedEnglishVietnamFiles = [...routes.map((route) => route.slice(1) + 'index.html'), ...bayGapsRoutes.map((route) => route.slice(1) + 'index.html'), ...cavesIslandsGapsRoutes.map((route) => route.slice(1) + 'index.html'), ...coastalGapsRoutes.map((route) => route.slice(1) + 'index.html'), ...hubs].sort();
assert.deepEqual(changedEnglishVietnamFiles, expectedEnglishVietnamFiles, 'English Vietnam page scope must contain the four Southern guides, the Bay-gaps guides, the cave/island and coastal follow-on guides, and their two updated hub excerpts.');
const sourceEnglishVietnamFiles = git(['diff', '--name-only', `${baselineCommit}..${sourceTerminal}`, '--', 'vietnam']).trim().split('\n').filter((repoPath) => repoPath.endsWith('.html')).sort();
const expectedSourceEnglishVietnamFiles = [...routes.map((route) => route.slice(1) + 'index.html'), ...hubs].sort();
assert.deepEqual(sourceEnglishVietnamFiles, expectedSourceEnglishVietnamFiles, 'the exact southern source terminal changes only the four guides and two hub excerpts under vietnam/.');
for (const repoPath of hubs) assert.equal(fs.readFileSync(path.join(root, repoPath), 'utf8'), readAt(sourceTerminal, repoPath), repoPath + ': integrated hub excerpt must match the exact southern source terminal.');

const baseSearch = JSON.parse(readAt(integrationBaseCommit, 'data/search-index.json'));
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
assert.deepEqual(changedSearchRoutes, [...routes, ...bayGapsRoutes, ...cavesIslandsGapsRoutes, ...coastalGapsRoutes, '/thailand/'].sort(), 'Only the Southern, Bay-gaps, cave/island, coastal and Thailand overview English search records may change.');
const sourceSearchByUrl = byUrl(sourceSearch);
for (const route of routes) assert.deepEqual(currentSearchByUrl.get(route), sourceSearchByUrl.get(route), route + ': English search record must match the exact southern source terminal.');

const baseSitemap = parseSitemap(readAt(integrationBaseCommit, 'sitemap.xml'));
const currentSitemap = parseSitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
const sourceSitemap = parseSitemap(readAt(sourceTerminal, 'sitemap.xml'));
assert.equal(baseSitemap.size, 4560);
assert.equal(currentSitemap.size, 4560);
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set changed.');
const expectedDatePaths = new Set(editions.flatMap(({ prefix }) => [...routes, ...bayGapsRoutes, ...cavesIslandsGapsRoutes, ...coastalGapsRoutes, ...postIntegrationTripDistillRoutes, '/thailand/'].map((route) => prefix + route)));
const changedDatePaths = [...currentSitemap]
  .filter(([url, date]) => baseSitemap.get(url) !== date)
  .map(([url]) => url).sort();
assert.deepEqual(changedDatePaths, [...expectedDatePaths].sort(), 'Only the selected Vietnam routes and Thailand overview in five editions may receive their declared sitemap dates.');
for (const pagePath of expectedDatePaths) {
  const route = pagePath.replace(/^\/(?:zh|ja|ko|th)(?=\/)/u, '');
  assert.equal(currentSitemap.get(pagePath), postIntegrationTripDistillRoutes.includes(route) ? '2026-10-15' : (route === '/thailand/' ? '2026-10-14' : editDate), pagePath + ': sitemap date');
}
for (const pagePath of editions.flatMap(({ prefix }) => routes.map((route) => prefix + route))) assert.equal(currentSitemap.get(pagePath), sourceSitemap.get(pagePath), pagePath + ': southern-route sitemap date matches the exact southern source terminal.');

for (const route of routes) {
  const sourceSearch = currentSearchByUrl.get(route);
  assert(sourceSearch?.summary, route + ': English search summary missing.');
  for (const edition of editions) {
    const pagePath = edition.prefix + route;
    const html = edition.code === 'en' ? fs.readFileSync(fileForRoute(route), 'utf8') : fs.readFileSync(localizedFile(edition.code, route), 'utf8');
    const document = parse(html);
    assert.equal(findAll(document, (node) => node.tagName === 'h1').length, 1, edition.code + ' ' + route + ': expected one h1.');
    const canonical = findAll(document, (node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical')[0];
    assert(canonical, edition.code + ' ' + route + ': canonical is missing.');
    assert.equal(new URL(attr(canonical, 'href'), origin).pathname, pagePath, edition.code + ' ' + route + ': canonical path');
    const links = findAll(document, (node) => node.tagName === 'link' && attr(node, 'rel') === 'alternate');
    const alternates = new Map(links.map((node) => [attr(node, 'hreflang'), new URL(attr(node, 'href'), origin).pathname]));
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
  const expectedLocalizedSearchPaths = currentSearch.map((record) => edition.prefix + record.url).sort();
  assert.deepEqual([...localizedMap.keys()].sort(), expectedLocalizedSearchPaths, edition.code + ' search URL set does not match the English source index.');
  for (const route of routes) {
    const source = currentSearchByUrl.get(route);
    const localizedPath = edition.prefix + route;
    const localized = localizedMap.get(localizedPath);
    assert(localized, edition.code + ' search record missing for ' + route);
    for (const field of ['title', 'summary', 'type']) {
      assert(catalog[source[field]]?.trim(), edition.code + ' search source key lacks a translation: ' + field + ' ' + route);
      assert.equal(localized[field], catalog[source[field]], edition.code + ' localized search field does not match the reviewed translation: ' + field + ' ' + route);
    }
    const localizedBody = bodyText(fs.readFileSync(localizedFile(edition.code, route), 'utf8'));
    assert(localizedBody.includes(catalog[source.summary]), edition.code + ' ' + route + ': generated page does not contain the translated summary.');
    assert(!localizedBody.includes(source.summary), edition.code + ' ' + route + ': the English summary leaked into the localized page.');
  }
  for (const [kind, suffix, expectedRoutes, expectedCount] of [
    ['pages', 'defm-vietnam-south-pages.json', routes, 109],
    ['search', 'defn-vietnam-south-search.json', ['/data/search-index.json'], 24]
  ]) {
    const directory = path.join(root, 'data/i18n/reviewed', edition.code);
    const matches = fs.readdirSync(directory).filter((name) => name.endsWith(suffix));
    assert.equal(matches.length, 1, edition.code + ': expected one new ' + kind + ' batch.');
    const batch = JSON.parse(fs.readFileSync(path.join(directory, matches[0]), 'utf8'));
    assert.equal(batch.qualityStatus, 'reviewed', edition.code + ' ' + kind + ': batch status');
    assert.deepEqual([...batch.routes].sort(), [...expectedRoutes].sort(), edition.code + ' ' + kind + ': batch route scope');
    assert.equal(Object.keys(batch.translations).length, expectedCount, edition.code + ' ' + kind + ': translated key count');
    assert(Object.values(batch.translations).every((value) => typeof value === 'string' && value.trim()), edition.code + ' ' + kind + ': blank translation exists');
    assert.equal(batch.translationProvenance?.independentSecondModel, false, edition.code + ' ' + kind + ': independent review must not be claimed.');
    assert.match(batch.translationProvenance?.reviewer || '', /exact runtime model identifier not exposed/);
  }
}

const activeTranslationSources = new Set(collectTranslationWork().flatMap((record) => record.units));
const manifest = JSON.parse(fs.readFileSync(path.join(root, archiveRoot, 'manifest.json'), 'utf8'));
assert.equal(manifest.sourceBaseCommit, baselineCommit);
assert.equal(manifest.files.length, 8);
for (const archived of manifest.files) {
  const content = fs.readFileSync(path.join(root, archived.archivePath));
  assert.equal(content.length, archived.bytes, archived.archivePath + ': archived byte count');
  assert.equal(sha256(content), archived.sha256, archived.archivePath + ': archived hash');
  assert.equal(content.toString('utf8'), readAt(baselineCommit, archived.sourcePath), archived.sourcePath + ': archive must match the exact base blob.');
  const before = JSON.parse(content.toString('utf8'));
  const after = JSON.parse(fs.readFileSync(path.join(root, archived.sourcePath), 'utf8'));
  assert.deepEqual(after, {
    ...before,
    translations: Object.fromEntries(Object.entries(before.translations || {}).filter(([source]) => activeTranslationSources.has(source)))
  }, archived.sourcePath + ': only keys absent from the active source set may be pruned.');
}

const reviewedDiffs = [...new Set([
  ...git(['diff', '--name-only', integrationBaseCommit, '--', 'data/i18n/reviewed']).trim().split('\n').filter(Boolean),
  ...git(['ls-files', '--others', '--exclude-standard', '--', 'data/i18n/reviewed']).trim().split('\n').filter(Boolean)
])].sort();
const cavesArchiveRoot = path.join(root, 'data/i18n/archive/vietnam-caves-islands-gaps/2026-10-13');
const cavesManifest = JSON.parse(fs.readFileSync(path.join(cavesArchiveRoot, 'manifest.json'), 'utf8'));
const cavesFollowupManifest = JSON.parse(fs.readFileSync(path.join(cavesArchiveRoot, 'integration-followup-manifest.json'), 'utf8'));
const cavesSupersededManifest = JSON.parse(fs.readFileSync(path.join(cavesArchiveRoot, 'superseded-batches-manifest.json'), 'utf8'));
const expectedReviewedDiffs = [
  ...JSON.parse(fs.readFileSync(path.join(root, 'data/i18n/archive/thailand-country-overview-refresh/2026-10-14/manifest.json'), 'utf8')).files.map((file) => file.sourcePath),
  ...manifest.files.map((file) => file.sourcePath),
  ...cavesManifest.files.filter((item) => item.staleKeys.some((source) => !activeTranslationSources.has(source))).map((item) => item.sourcePath),
  ...cavesFollowupManifest.files.map((item) => item.sourcePath),
  ...cavesSupersededManifest.files.map((item) => item.successorPath)
];
const sharedPruneManifest = JSON.parse(fs.readFileSync(path.join(root, archiveRoot, 'shared-prune/manifest.json'), 'utf8'));
assert.equal(sharedPruneManifest.sourceBaseCommit, integrationBaseCommit, 'shared stale-key archives must name the exact integration base.');
assert.equal(sharedPruneManifest.files.length, 4, 'archive the four locale copies of the stale shared reviewed key.');
for (const archived of sharedPruneManifest.files) {
  const content = fs.readFileSync(path.join(root, archived.archivePath));
  assert.equal(content.length, archived.bytes, archived.archivePath + ': archived byte count');
  assert.equal(sha256(content), archived.sha256, archived.archivePath + ': archived hash');
  assert.equal(content.toString('utf8'), readAt(integrationBaseCommit, archived.sourcePath), archived.sourcePath + ': shared prune archive must match the exact integration-base blob.');
  const before = JSON.parse(content.toString('utf8'));
  const after = JSON.parse(fs.readFileSync(path.join(root, archived.sourcePath), 'utf8'));
  assert.deepEqual(after, {
    ...before,
    translations: Object.fromEntries(Object.entries(before.translations || {}).filter(([source]) => activeTranslationSources.has(source)))
  }, archived.sourcePath + ': only obsolete source keys may be pruned from the shared reviewed batch.');
  assert.deepEqual(archived.removedSourceKeys, ['Water safety'], archived.sourcePath + ': only the exact audit-reported stale key may be removed.');
  expectedReviewedDiffs.push(archived.sourcePath);
}
for (const edition of editions.slice(1)) {
  const directory = path.join(root, 'data/i18n/reviewed', edition.code);
  for (const suffix of ['defm-vietnam-south-pages.json', 'defn-vietnam-south-search.json']) {
    const name = fs.readdirSync(directory).find((file) => file.endsWith(suffix));
    assert(name, edition.code + ': missing ' + suffix);
    expectedReviewedDiffs.push('data/i18n/reviewed/' + edition.code + '/' + name);
  }
  for (const suffix of ['defo-bay-gaps-pages-20261013.json', 'defo-bay-gaps-search-20261013.json']) {
    const name = fs.readdirSync(directory).find((file) => file.endsWith(suffix));
    assert(name, edition.code + ': missing ' + suffix);
    expectedReviewedDiffs.push('data/i18n/reviewed/' + edition.code + '/' + name);
  }
  const cavesPageBatch = fs.readdirSync(directory).find((name) => name.endsWith('-caves-islands-gaps-pages.json'));
  assert(cavesPageBatch, edition.code + ': Caves page batch is present.');
  expectedReviewedDiffs.push('data/i18n/reviewed/' + edition.code + '/' + cavesPageBatch);
  expectedReviewedDiffs.push('data/i18n/reviewed/' + edition.code + '/29z-vietnam-caves-islands-gaps-search.json');
}
const bayArchive = JSON.parse(fs.readFileSync(path.join(root, 'data/i18n/archive/vietnam-bay-gaps/2026-10-13/manifest.json'), 'utf8'));
expectedReviewedDiffs.push(...bayArchive.archivedFiles.map((file) => file.source));
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
expectedReviewedDiffs.push(...postIntegrationTripDistillReviewedPaths);
assert.deepEqual(reviewedDiffs, [...new Set(expectedReviewedDiffs)].sort(), 'Only historical southern-gaps files, the separately archived bay-gaps overlay, and their reviewed batches may change; drafts and parallel translations must stay untouched.');

const changedSvgs = git(['diff', '--name-only', integrationBaseCommit, '--', '*.svg']).trim().split('\n').filter(Boolean);
assert.deepEqual(changedSvgs, [], 'No SVG was requested or added in this content-only route batch.');

const ledger = JSON.parse(fs.readFileSync(path.join(root, 'reports/vietnam-coverage-ledger-20261013.json'), 'utf8'));
const southernCheckpoint = ledger.previousCheckpoint;
assert.equal(southernCheckpoint.branch, 'codex/sprint-vn-southern-gaps-20261013');
assert.equal(southernCheckpoint.sourceBaseCommit, baselineCommit);
assert.equal(southernCheckpoint.totals.englishRoutes, 99);
assert.equal(southernCheckpoint.totals.previousSubstantiveRoutes, 79);
assert.equal(southernCheckpoint.totals.previousSprintNewSubstantiveRoutes, 4);
assert.equal(southernCheckpoint.totals.newSubstantiveRoutes, 4);
assert.equal(southernCheckpoint.totals.afterSprintSubstantiveRoutes, 87);
assert.equal(southernCheckpoint.totals.remainingRoutes, 12);
assert.deepEqual(southernCheckpoint.currentSprintRoutes.map((route) => route.url).sort(), [...routes].sort());
for (const check of bodyChecks) {
  const entry = southernCheckpoint.currentSprintRoutes.find((route) => route.url === check.url);
  assert.equal(entry.baseWords, check.baseWords, check.url + ': ledger base words');
  assert.equal(entry.currentWords, check.currentWords, check.url + ': ledger current words');
  assert.equal(entry.currentMainTextSha256, check.currentMainTextSha256, check.url + ': ledger current body hash');
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
assert.deepEqual(southernCheckpoint.remainingRoutesAfterSprint, expectedRemaining);
assert.equal(southernCheckpoint.previousSouthernGapsCheckpoint.totals.afterSprintSubstantiveRoutes, 83);
assert.equal(southernCheckpoint.previousSouthernGapsCheckpoint.totals.remainingRoutes, 16);
assert.deepEqual(
  southernCheckpoint.previousSouthernGapsCheckpoint.remainingRoutesAfterSprint.filter((route) => routes.includes(route)).sort(),
  [...routes].sort(),
  'The four targets must have been unfinished in the previous coverage checkpoint.'
);

console.log('Southern Vietnam historical scope regression passed with separately archived Bay and caves/islands overlays: the four southern bodies, their metadata and 87/99 checkpoint remain intact; each follow-on adds only its four exact routes, 20 dates and separately named translations.');
console.log(JSON.stringify(bodyChecks, null, 2));
