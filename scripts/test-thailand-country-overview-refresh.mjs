#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceBase = '2dfb69529b96e29ff77f1e579baceb0b22da5e13';
const batchPrefix = 'z'.repeat(222);
const pageBatchName = `${batchPrefix}a-th-pages.json`;
const searchBatchName = `${batchPrefix}b-th-search.json`;
const locales = [
  { code: 'zh-Hant', prefix: 'zh', script: /[\u3400-\u9fff]/u },
  { code: 'ja', prefix: 'ja', script: /[\u3040-\u30ff\u3400-\u9fff]/u },
  { code: 'ko', prefix: 'ko', script: /[\uac00-\ud7af]/u },
  { code: 'th', prefix: 'th', script: /[\u0e00-\u0e7f]/u }
];

function git(args) {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
}

function attrs(node) {
  return Object.fromEntries((node?.attrs || []).map(({ name, value }) => [name, value]));
}

function findOne(node, predicate) {
  if (predicate(node)) return node;
  for (const child of node.childNodes || []) {
    const found = findOne(child, predicate);
    if (found) return found;
  }
  return null;
}

function nodeText(node) {
  if (node?.nodeName === '#text') return node.value;
  return (node?.childNodes || []).map(nodeText).join(' ');
}

function editorialMainText(html) {
  const document = parse(html);
  const main = findOne(document, (node) => node.tagName === 'main' && attrs(node).id === 'main-content');
  assert(main, 'Thailand country page must contain #main-content.');
  const chunks = [];
  function walk(node) {
    if (node.nodeName === '#text') { chunks.push(node.value); return; }
    if (['script', 'style', 'svg'].includes(node.tagName)) return;
    const nodeAttrs = attrs(node);
    const classes = (nodeAttrs.class || '').split(/\s+/u);
    if (classes.some((name) => ['thai-route-tapestry', 'related-guides', 'sources', 'ad-slot'].includes(name))) return;
    for (const child of node.childNodes || []) walk(child);
  }
  walk(main);
  return chunks.join(' ').replace(/\s+/gu, ' ').trim();
}

const englishPath = path.join(root, 'thailand/index.html');
const english = fs.readFileSync(englishPath, 'utf8');
const previous = git(['show', `${sourceBase}:thailand/index.html`]);
const oldBody = editorialMainText(previous);
const newBody = editorialMainText(english);
const wordCount = (text) => text.split(/\s+/u).filter(Boolean).length;
assert(wordCount(newBody) - wordCount(oldBody) >= 400, 'The overview must gain substantive non-card planning copy against the exact task base.');
const thailandChanges = git(['diff', '--name-only', sourceBase, '--', 'thailand']).trim().split(/\r?\n/u).filter(Boolean);
const normalizeSharedAssetVersions = (html) => html
  .replace(/\/css\/site\.css\?v=[^"'\s]+/gu, '/css/site.css?v=<shared>')
  .replace(/\/js\/main\.js\?v=[^"'\s]+/gu, '/js/main.js?v=<shared>');
const substantiveThailandChanges = [];
for (const changedPath of thailandChanges) {
  const previousHtml = git(['show', `${sourceBase}:${changedPath}`]);
  const currentHtml = fs.readFileSync(path.join(root, changedPath), 'utf8');
  if (normalizeSharedAssetVersions(previousHtml) !== normalizeSharedAssetVersions(currentHtml)) {
    substantiveThailandChanges.push(changedPath);
  }
}
assert.deepEqual(
  substantiveThailandChanges,
  ['thailand/index.html'],
  'Only the Thailand country overview may change substantively among the 37 Thailand source routes; shared site.css and main.js cache versions may be refreshed globally.'
);

const archiveDirectory = path.join(root, 'data/i18n/archive/thailand-country-overview-refresh/2026-10-14');
const archiveManifest = JSON.parse(fs.readFileSync(path.join(archiveDirectory, 'manifest.json'), 'utf8'));
assert.equal(archiveManifest.sourceBaseCommit, sourceBase, 'Stale-key archive must use the exact task base.');
assert.equal(archiveManifest.branch, 'codex/thailand-country-overview-20261014', 'Stale-key archive branch provenance.');
assert.equal(archiveManifest.files.length, 8, 'Four locales × two reviewed Thailand batches were archived before pruning.');
assert.equal(archiveManifest.files.reduce((sum, entry) => sum + entry.staleKeys.length, 0), 180, 'Exact count of superseded reviewed translation keys archived.');
for (const entry of archiveManifest.files) {
  const snapshot = fs.readFileSync(path.join(root, entry.archivePath));
  assert.equal(snapshot.length, entry.bytes, `${entry.archivePath}: archived byte count.`);
  assert.equal(crypto.createHash('sha256').update(snapshot).digest('hex'), entry.sha256, `${entry.archivePath}: archived hash.`);
  assert.equal(snapshot.toString('utf8'), git(['show', `${sourceBase}:${entry.sourcePath}`]), `${entry.sourcePath}: archive must match exact base blob.`);
  const archivedBatch = JSON.parse(snapshot.toString('utf8'));
  const currentBatch = JSON.parse(fs.readFileSync(path.join(root, entry.sourcePath), 'utf8'));
  for (const source of entry.staleKeys) {
    assert(Object.hasOwn(archivedBatch.translations, source), `${entry.sourcePath}: stale key is present in its archive.`);
    assert(!Object.hasOwn(currentBatch.translations, source), `${entry.sourcePath}: stale key remains active.`);
  }
  for (const [source, target] of Object.entries(archivedBatch.translations)) {
    if (!entry.staleKeys.includes(source)) assert.equal(currentBatch.translations[source], target, `${entry.sourcePath}: active translation must be preserved byte-for-byte.`);
  }
}

const routeShapes = findOne(parse(english), (node) => node.tagName === 'section' && attrs(node).id === 'itinerary');
assert(routeShapes, 'The overview must contain the trip-length section.');
const routeText = nodeText(routeShapes).replace(/\s+/gu, ' ').trim();
const mainText = newBody;
for (const required of [
  '7 DAYS · 6 HOTEL NIGHTS', '10 DAYS · 9 HOTEL NIGHTS', '14 DAYS · 13 HOTEL NIGHTS',
  '4 + 4 + 1 = 9', '4 + 8 + 1 = 13', 'BKK / DMK', 'Pa Sak River',
  'Bangkok → Chiang Mai', 'ANDAMAN GATEWAY → PIER → ISLAND',
  'wetter into December', 'same-base weather day'
]) {
  assert(mainText.toLowerCase().includes(required.toLowerCase()), `The substantive overview is missing the required planning detail: ${required}`);
}
assert(routeText.includes('7 DAYS · 6 HOTEL NIGHTS') && routeText.includes('10 DAYS · 9 HOTEL NIGHTS') && routeText.includes('14 DAYS · 13 HOTEL NIGHTS'), 'All three itinerary lengths must appear in the itinerary section.');
assert(english.includes('14 October 2026'), 'The country-level review date must be explicit.');

const sourceLinks = [
  'https://tdac.immigration.go.th/manual/en/faq.html',
  'https://www.tmd.go.th/forecast/daily',
  'https://www.tmd.go.th/warning-and-events/warning-storm',
  'https://ttsview.railway.co.th/timetable_modern.php?ln=en',
  'https://dticket.railway.co.th/DTicketPublicWeb/home/Home',
  'https://suvarnabhumi.airportthai.co.th/service/transportation',
  'https://donmueang.airportthai.co.th/service/transportation'
];
for (const href of sourceLinks) assert(english.includes(href), `Missing current official source link: ${href}`);

const search = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const searchRecord = search.filter((record) => record.url === '/thailand/');
assert.equal(searchRecord.length, 1, 'The Thailand overview must keep one search record.');
assert.match(searchRecord[0].summary, /7-, 10- and 14-day/u, 'The search summary must advertise the route-length comparison.');
const baseSearch = JSON.parse(git(['show', `${sourceBase}:data/search-index.json`]));
const changedSearchRoutes = search.filter((record) => JSON.stringify(record) !== JSON.stringify(baseSearch.find((oldRecord) => oldRecord.url === record.url))).map(({ url }) => url).sort();
assert.deepEqual(changedSearchRoutes, ['/thailand/'], 'Only the Thailand overview search record may change.');

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const baseSitemap = git(['show', `${sourceBase}:sitemap.xml`]);
const datedOverviewRoutes = [...sitemap.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/gu)]
  .map((match) => ({ route: match[1], lastmod: match[2] }))
  .filter(({ route }) => route.replace(/^\/(?:zh|ja|ko|th)(?=\/)/u, '') === '/thailand/');
assert.equal(datedOverviewRoutes.length, 5, 'All five editions must retain the same Thailand overview route.');
assert(datedOverviewRoutes.every(({ lastmod }) => lastmod === '2026-10-14'), 'Only the Thailand overview date must be synchronized across all five editions.');
const sitemapDateMap = (source) => new Map([...source.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/gu)].map((match) => [match[1], match[2]]));
const previousDates = sitemapDateMap(baseSitemap);
const changedDateRoutes = [...sitemapDateMap(sitemap)].filter(([route, date]) => previousDates.get(route) !== date).map(([route]) => route).sort();
const tripDistillEditedRoutes = [
  '/australia/red-centre/',
  '/france/basque-coast-pyrenees/',
  '/france/basque-coast-pyrenees/bayonne-biarritz/'
];
const expectedSitemapDateRoutes = [
  ...['', '/zh', '/ja', '/ko', '/th'].flatMap((prefix) => [`${prefix}/thailand/`, ...tripDistillEditedRoutes.map((route) => `${prefix}${route}`)])
].sort();
assert.deepEqual(changedDateRoutes, expectedSitemapDateRoutes, 'Exactly the Thailand overview and the three reviewed TripDistill routes may receive synchronized sitemap dates.');

for (const locale of locales) {
  const batchPath = path.join(root, `data/i18n/reviewed/${locale.code}/${pageBatchName}`);
  const batch = JSON.parse(fs.readFileSync(batchPath, 'utf8'));
  assert.equal(batch.locale, locale.code, `${locale.code}: batch locale must match its directory.`);
  assert.equal(batch.qualityStatus, 'reviewed', `${locale.code}: the country batch must pass its review gate.`);
  assert.deepEqual(batch.routes, ['/thailand/'], `${locale.code}: batch may own only the country overview.`);
  assert(Object.values(batch.translations).every((value) => typeof value === 'string' && value.trim()), `${locale.code}: every new page string must be translated.`);

  const searchBatchPath = path.join(root, `data/i18n/reviewed/${locale.code}/${searchBatchName}`);
  const searchBatch = JSON.parse(fs.readFileSync(searchBatchPath, 'utf8'));
  assert.equal(searchBatch.locale, locale.code, `${locale.code}: search batch locale must match its directory.`);
  assert.equal(searchBatch.qualityStatus, 'reviewed', `${locale.code}: search batch must pass its review gate.`);
  assert.deepEqual(searchBatch.routes, ['/data/search-index.json'], `${locale.code}: search delta must use its separate shared-index route.`);
  const localizedSummary = searchBatch.translations[searchRecord[0].summary] || batch.translations[searchRecord[0].summary];
  assert(localizedSummary?.trim(), `${locale.code}: Thailand search summary must have reviewed translation.`);

  const pagePath = path.join(root, `${locale.prefix}/thailand/index.html`);
  assert(fs.existsSync(pagePath), `${locale.code}: localized overview must be generated.`);
  const localized = fs.readFileSync(pagePath, 'utf8');
  const localizedText = editorialMainText(localized);
  assert(localizedText.length > 800, `${locale.code}: localized overview body must be present.`);
  assert(locale.script.test(localizedText), `${locale.code}: localized overview must contain destination-language script.`);
  assert(!localizedText.includes('Match each trip length to its hotel nights'), `${locale.code}: new country planning section must not remain in English.`);
  const localizedSearchPath = path.join(root, `${locale.prefix}/data/search-index.json`);
  const localizedSearch = JSON.parse(fs.readFileSync(localizedSearchPath, 'utf8'));
  const localizedRecord = localizedSearch.find((record) => record.url === `/${locale.prefix}/thailand/`);
  assert.equal(localizedRecord?.summary, localizedSummary, `${locale.code}: localized search summary must match the reviewed batch.`);
}

console.log(`Thailand country overview regression passed: +${wordCount(newBody) - wordCount(oldBody)} non-card English words from ${sourceBase.slice(0, 7)}, 7/10/14-day hotel-night arithmetic, seasonal and transfer decisions, current official links, one search record, five synchronized dates and four generated translations.`);
