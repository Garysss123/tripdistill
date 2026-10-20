#!/usr/bin/env node
import { isGreeceRoutePath } from './greece-route-test-utils.mjs';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { parse } from 'parse5';
import { spainPhotoAssets } from './spain-release-scope.mjs';
import { postIntegrationBroomeTasmaniaRoutes, postAustraliaFinalRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const branch = git(['branch', '--show-current']).trim();
const sourceBranch = branch === 'codex/sprint-au-broome-content-20261013';
const integrationBranch = ['codex/integration-sprint-20261011', 'codex/integration-sprint-20261011-preflight', 'codex/thailand-country-overview-20261014', 'codex/tripdistill-remaining-3-pages-20261015', 'codex/release-tripdistill-20261016', 'codex/spain-tripdistill-20261020', 'codex/greece-tripdistill-20261020'].includes(branch);
const releaseContext = branch === 'codex/release-tripdistill-20261016' || branch === 'codex/spain-tripdistill-20261020' || branch === 'codex/greece-tripdistill-20261020';
const base = '5578d6da740ca9d7ec07fca6c7eed65cc67868e8';
const sourceTerminal = '8baea8a720ebd88ff6834e60235e29c03343c4c4';
const correction = '768151d3f42378358c122a1cde55100fcec9eafa';
const isoDate = '2026-10-13';
const routes = [
  '/australia/broome-kimberley/',
  '/australia/broome-kimberley/rubibi-broome-cable-beach/',
  '/australia/broome-kimberley/dampier-peninsula/',
  '/australia/broome-kimberley/gibb-river-road/'
];
const untouchedRoutes = [
  'australia/broome-kimberley/kununurra-lake-argyle/index.html',
  'australia/broome-kimberley/purnululu-bungle-bungle/index.html'
];
const locales = [
  { code: 'zh-Hant', prefix: '/zh', date: '2026年10月13日', script: /[\u3400-\u9fff]/u },
  { code: 'ja', prefix: '/ja', date: '2026年10月13日', script: /[\u3040-\u30ff\u3400-\u9fff]/u },
  { code: 'ko', prefix: '/ko', date: '2026년 10월 13일', script: /[\uac00-\ud7af]/u },
  { code: 'th', prefix: '/th', date: '13 ตุลาคม 2026', script: /[\u0e00-\u0e7f]/u }
];
const pageBatchName = 'zzzzzzzzzj-au-broome-pages-20261013.json';
const searchBatchName = 'zzzzzzzzzk-au-broome-search-20261013.json';
const provenance = {
  writer: 'Task assistant, GPT-6 Codex execution family; exact runtime model ID unverified and requested GPT-6 Luna runtime could not be verified in the selected environment',
  reviewer: 'Same task assistant/model-family self-review; non-independent; exact runtime model ID unverified',
  independentSecondModel: false
};
const referenceWords = [1397, 1030, 1030, 1030];
const expectedDelta = [1077, 1163, 1178, 1179];
const requiredPhrases = [
  ['three Broome nights', 'fourteen days', 'Kooljaman', 'unknown', 'do not infer', 'Broome town'],
  ['three nights', 'Gantheaume Point', '2.16 m', 'TransBroome', 'Yawuru', 'last bus'],
  ['200 km', 'Cygnet Bay', 'Bardi-led', 'private Native Title', '3 km', '4WD', 'unknown'],
  ['fourteen days', 'Derby', 'Kununurra', 'unknown depth', 'Emergency WA', 'high-clearance 4WD', 'Seasonal opening']
];

function git(args, binary = false) {
  return execFileSync('git', args, { cwd: root, encoding: binary ? undefined : 'utf8', maxBuffer: 32 * 1024 * 1024 });
}
function fileFor(route, prefix = '') { return path.join(root, `${prefix}${route}`.replace(/^\//u, ''), 'index.html'); }
function all(node, predicate, out = []) {
  if (predicate(node)) out.push(node);
  for (const child of node.childNodes || []) all(child, predicate, out);
  return out;
}
function one(node, predicate) {
  if (predicate(node)) return node;
  for (const child of node.childNodes || []) {
    const found = one(child, predicate);
    if (found) return found;
  }
  return null;
}
function attrs(node) { return Object.fromEntries((node?.attrs || []).map(({ name, value }) => [name, value])); }
function textContent(node) {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value;
  if (['script', 'style', 'noscript', 'svg'].includes(node.tagName)) return '';
  return (node.childNodes || []).map(textContent).join(' ');
}
function mainText(html) {
  const doc = parse(html);
  const main = one(doc, (node) => node.tagName === 'main' && attrs(node).id === 'main-content');
  assert(main, 'HTML is missing #main-content.');
  const chunks = [];
  function walk(node) {
    if (node.nodeName === '#text') { chunks.push(node.value); return; }
    if (['script', 'style', 'noscript', 'svg'].includes(node.tagName)) return;
    const a = attrs(node);
    const classes = (a.class || '').split(/\s+/u);
    if (classes.some((name) => ['sources', 'au-hub-directory', 'au-related-grid', 'au-related-card'].includes(name))) return;
    if (a['aria-label'] === 'Advertisement') return;
    for (const child of node.childNodes || []) walk(child);
  }
  walk(main);
  return chunks.join(' ').replace(/\s+/gu, ' ').trim();
}
function words(text) { return text ? text.split(/\s+/u).length : 0; }
function jsonLd(doc) {
  return all(doc, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json').flatMap((node) => {
    try {
      const data = JSON.parse((node.childNodes || []).map((child) => child.value || '').join(''));
      return data['@graph'] || [data];
    } catch { return []; }
  });
}
function searchMap(text) { return new Map(JSON.parse(text).map((entry) => [entry.url, entry])); }
function sitemapMap(xml) {
  const map = new Map();
  for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/gu)) {
    const route = block.match(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc>/u)?.[1];
    const date = block.match(/<lastmod>([^<]*)<\/lastmod>/u)?.[1];
    if (route !== undefined && date) map.set(route || '/', date);
  }
  return map;
}
function normalizeSharedAssetVersions(html) {
  return html
    .replace(/\/css\/site\.css\?v=[^"'\s]+/gu, '/css/site.css?v=<shared>')
    .replace(/\/js\/main\.js\?v=[^"'\s]+/gu, '/js/main.js?v=<shared>');
}
function searchMapFromRevision(revision) { return searchMap(git(['show', `${revision}:data/search-index.json`])); }
function substantiveHtmlPaths(fromRevision, toRevision, directory) {
  return git(['diff', '--name-only', fromRevision, toRevision, '--', directory]).split(/\r?\n/u)
    .filter((name) => name.endsWith('/index.html'))
    .filter((name) => normalizeSharedAssetVersions(git(['show', `${fromRevision}:${name}`])) !== normalizeSharedAssetVersions(git(['show', `${toRevision}:${name}`])));
}

assert(sourceBranch || integrationBranch, 'Selected source or named integration branch.');
if (sourceBranch) {
  const firstParents = git(['rev-list', '--first-parent', '--max-count=2', 'HEAD']).trim().split(/\r?\n/u);
  assert.equal(firstParents[1], base, 'Broome source branch is based directly on the exact requested checkpoint.');
  git(['merge-base', '--is-ancestor', base, 'HEAD']);
} else {
  const sourceTerminal = '8baea8a720ebd88ff6834e60235e29c03343c4c4';
  const sourceInHead = spawnSync('git', ['merge-base', '--is-ancestor', sourceTerminal, 'HEAD'], { cwd: root }).status === 0;
  const sourceInMerge = spawnSync('git', ['merge-base', '--is-ancestor', sourceTerminal, 'MERGE_HEAD'], { cwd: root }).status === 0;
  assert(sourceInHead || sourceInMerge, 'The exact Broome source terminal is in integration history.');
}

const integrationFollowups = integrationBranch ? [...postIntegrationBroomeTasmaniaRoutes, ...postAustraliaFinalRoutes] : [];
const tripDistillFollowups = integrationBranch ? ['/australia/red-centre/'] : [];
const expectedHtml = [...routes, ...integrationFollowups, ...tripDistillFollowups].map((route) => `${route.slice(1)}index.html`).sort();
const changedHtml = git(['diff', '--name-only', base, '--', 'australia']).split(/\r?\n/u).filter((name) => name.endsWith('/index.html'))
  .filter((name) => normalizeSharedAssetVersions(git(['show', `${base}:${name}`])) !== normalizeSharedAssetVersions(fs.readFileSync(path.join(root, name), 'utf8'))).sort();
if (releaseContext) {
  const allowedReleaseHtml = new Set([
    ...substantiveHtmlPaths(base, '7f797a9685649e945a5660ea1352ce239d638389', 'australia'),
    ...substantiveHtmlPaths('6d3008dac99de4d2bc9988e6d06a5f393021f81c', 'ddea19cb80796325ed0a76087c39ad25e17f2b07', 'australia')
  ]);
  assert.deepEqual(changedHtml.filter((name) => !allowedReleaseHtml.has(name)), [], 'Australia route changes must belong to the pinned integration/main parents.');
  assert.deepEqual(expectedHtml.filter((name) => !changedHtml.includes(name)), [], 'The four Broome source routes and exact registered integration follow-ups remain in the substantive diff.');
} else assert.deepEqual(changedHtml, expectedHtml, 'Only the four Broome source routes and exact registered integration follow-ups may change.');
if (sourceBranch) for (const route of untouchedRoutes) git(['diff', '--quiet', base, '--', route]);

for (let index = 0; index < routes.length; index += 1) {
  const route = routes[index];
  const html = fs.readFileSync(fileFor(route), 'utf8');
  const doc = parse(html);
  assert.equal(attrs(one(doc, (node) => node.tagName === 'html')).lang, 'en', `${route}: English language.`);
  assert.equal(attrs(one(doc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical')).href, `https://tripdistill.com${route}`, `${route}: canonical.`);
  const article = jsonLd(doc).find((item) => item['@type'] === 'Article');
  assert.equal(article?.dateModified, isoDate, `${route}: Article dateModified.`);
  const body = mainText(html);
  const baseHtml = git(['show', `${base}:${route.slice(1)}index.html`]);
  assert.equal(words(body) - words(mainText(baseHtml)), expectedDelta[index], `${route}: exact main-copy word delta.`);
  assert(words(body) > referenceWords[index], `${route}: exceeds same-level Japan Hokkaido/Otaru reference floor.`);
  assert(body.includes('reviewed 13 October 2026'), `${route}: visible English review date.`);
  for (const phrase of requiredPhrases[index]) assert(body.toLowerCase().includes(phrase.toLowerCase()), `${route}: itinerary includes ${phrase}.`);
  const faq = jsonLd(doc).find((item) => item['@type'] === 'FAQPage');
  const visibleFaq = all(doc, (node) => node.tagName === 'details').map((details) => {
    const question = textContent(one(details, (node) => node.tagName === 'summary')).replace(/\s+/gu, ' ').trim();
    const answer = textContent(details).replace(/\s+/gu, ' ').trim().slice(question.length).trim();
    return { question, answer };
  });
  assert(faq?.mainEntity?.length > 0, `${route}: FAQ schema exists.`);
  assert.deepEqual(faq.mainEntity.map((item) => ({ question: item.name, answer: item.acceptedAnswer?.text })), visibleFaq, `${route}: visible FAQ and schema match.`);
}

const baseSearch = searchMap(git(['show', `${base}:data/search-index.json`]));
const currentSearch = searchMap(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
assert.equal(baseSearch.size, 955, 'Base English search index has 955 records.');
assert.equal(currentSearch.size, 1021, 'Current English search index keeps 1021 records.');
assert.deepEqual([...currentSearch.keys()].filter((url) => !url.includes('/spain/') && !isGreeceRoutePath(url)).sort(), [...baseSearch.keys()].sort(), 'Search URL set is unchanged.');
const changedSearch = [...currentSearch.keys()].filter((url) => !url.includes('/spain/') && !isGreeceRoutePath(url) && (sourceBranch || url.startsWith('/australia/')) && JSON.stringify(currentSearch.get(url)) !== JSON.stringify(baseSearch.get(url))).sort();
if (releaseContext) {
  const integrationSearch = searchMapFromRevision('7f797a9685649e945a5660ea1352ce239d638389');
  const mainBaseSearch = searchMapFromRevision('6d3008dac99de4d2bc9988e6d06a5f393021f81c');
  const mainSearch = searchMapFromRevision('ddea19cb80796325ed0a76087c39ad25e17f2b07');
  const allowedSearch = new Set([
    ...[...integrationSearch.keys()].filter((url) => !url.includes('/spain/') && !isGreeceRoutePath(url) && JSON.stringify(integrationSearch.get(url)) !== JSON.stringify(baseSearch.get(url))),
    ...[...mainSearch.keys()].filter((url) => !url.includes('/spain/') && !isGreeceRoutePath(url) && JSON.stringify(mainSearch.get(url)) !== JSON.stringify(mainBaseSearch.get(url)))
  ]);
  assert.deepEqual(changedSearch.filter((url) => !allowedSearch.has(url)), [], 'Australia search record changes must belong to the pinned integration/main parents.');
  assert.deepEqual([...routes, ...integrationFollowups].filter((url) => !changedSearch.includes(url)), [], 'The Broome and registered follow-up search records remain in the substantive diff.');
} else assert.deepEqual(changedSearch, [...routes, ...integrationFollowups].sort(), 'Only the four Broome search records and exact registered integration follow-ups changed in the relevant scope.');
const terminalSearch = searchMap(git(['show', `8baea8a720ebd88ff6834e60235e29c03343c4c4:data/search-index.json`]));
for (const route of routes) assert.deepEqual(currentSearch.get(route), terminalSearch.get(route), `${route}: integrated search record matches the exact Broome source terminal.`);

const baseSitemap = sitemapMap(git(['show', `${base}:sitemap.xml`]));
const currentSitemap = sitemapMap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560, 'Base sitemap has 4,560 URLs.');
assert.equal(currentSitemap.size, 4890, 'Current sitemap contains 4,890 URLs across five editions.');
assert.deepEqual([...currentSitemap.keys()].filter((url) => !url.includes('/spain/') && !isGreeceRoutePath(url)).sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set is unchanged.');
const datedRoutes = [...routes, ...integrationFollowups, ...tripDistillFollowups].flatMap((route) => ['', ...locales.map((locale) => locale.prefix)].map((prefix) => `${prefix}${route}`)).sort();
const changedDates = [...currentSitemap.keys()].filter((url) => !url.includes('/spain/') && !isGreeceRoutePath(url) && (sourceBranch || new URL(url, 'https://tripdistill.com').pathname.includes('/australia/')) && currentSitemap.get(url) !== baseSitemap.get(url)).sort();
if (releaseContext) {
  const integrationDates = sitemapMap(git(['show', '7f797a9685649e945a5660ea1352ce239d638389:sitemap.xml']));
  const mainBaseDates = sitemapMap(git(['show', '6d3008dac99de4d2bc9988e6d06a5f393021f81c:sitemap.xml']));
  const mainDates = sitemapMap(git(['show', 'ddea19cb80796325ed0a76087c39ad25e17f2b07:sitemap.xml']));
  const allowedDates = new Set([
    ...[...integrationDates.keys()].filter((url) => !url.includes('/spain/') && !isGreeceRoutePath(url) && integrationDates.get(url) !== baseSitemap.get(url)),
    ...[...mainDates.keys()].filter((url) => !url.includes('/spain/') && !isGreeceRoutePath(url) && mainDates.get(url) !== mainBaseDates.get(url))
  ]);
  assert.deepEqual(changedDates.filter((url) => !allowedDates.has(url)), [], 'Australia sitemap date changes must belong to the pinned integration/main parents.');
  assert.deepEqual(datedRoutes.filter((url) => !changedDates.includes(url)), [], 'The Broome and registered follow-up route editions remain in the substantive date diff.');
} else assert.deepEqual(changedDates, datedRoutes, 'Only the exact requested routes × five language editions received new lastmod dates in the relevant source scope.');
for (const route of datedRoutes) assert.equal(currentSitemap.get(route), tripDistillFollowups.some((baseRoute) => route.endsWith(baseRoute)) ? '2026-10-15' : isoDate, `${route}: sitemap lastmod.`);

for (const locale of locales) {
  const dir = path.join(root, 'data/i18n/reviewed', locale.code);
  const pageBatch = JSON.parse(fs.readFileSync(path.join(dir, pageBatchName), 'utf8'));
  assert.equal(pageBatch.locale, locale.code, `${locale.code}: page batch locale.`);
  assert.equal(pageBatch.qualityStatus, 'reviewed', `${locale.code}: page batch review state.`);
  assert.deepEqual(pageBatch.routes, routes, `${locale.code}: exact page scope.`);
  assert.deepEqual(pageBatch.reviewProvenance, provenance, `${locale.code}: truthful same-model review provenance.`);
  assert.equal(Object.keys(pageBatch.translations).length, 218, `${locale.code}: complete new page translations, including the shared Crossing label.`);
  assert(Object.values(pageBatch.translations).every((target) => target.trim()), `${locale.code}: no blank page translation.`);
  const searchBatch = JSON.parse(fs.readFileSync(path.join(dir, searchBatchName), 'utf8'));
  assert.equal(searchBatch.qualityStatus, 'reviewed', `${locale.code}: search batch review state.`);
  assert.deepEqual(searchBatch.routes, ['/data/search-index.json'], `${locale.code}: search batch scope.`);
  assert.deepEqual(searchBatch.reviewProvenance, provenance, `${locale.code}: search provenance.`);
  assert.equal(Object.keys(searchBatch.translations).length, 21, `${locale.code}: search translations.`);
  assert(Object.values(searchBatch.translations).every((target) => target.trim()), `${locale.code}: no blank search translation.`);
  const localSearch = searchMap(fs.readFileSync(path.join(root, locale.prefix.slice(1), 'data/search-index.json'), 'utf8'));
  for (const route of routes) {
    const localHtml = fs.readFileSync(fileFor(route, locale.prefix), 'utf8');
    const localDoc = parse(localHtml);
    const body = mainText(localHtml);
    assert.equal(attrs(one(localDoc, (node) => node.tagName === 'html')).lang, locale.code, `${locale.code} ${route}: document language.`);
    assert.equal(attrs(one(localDoc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical')).href, `https://tripdistill.com${locale.prefix}${route}`, `${locale.code} ${route}: canonical.`);
    assert(body.replace(/\s+/gu, '').includes(locale.date.replace(/\s+/gu, '')), `${locale.code} ${route}: visible localized review date.`);
    assert(locale.script.test(body), `${locale.code} ${route}: translated body script.`);
    assert.equal(jsonLd(localDoc).find((item) => item['@type'] === 'Article')?.dateModified, isoDate, `${locale.code} ${route}: Article date.`);
    const summary = currentSearch.get(route)?.summary;
    const summaryKey = summary?.replace(/\s+/gu, ' ').trim();
    const translation = searchBatch.translations[summaryKey] || pageBatch.translations[summaryKey];
    assert(translation, `${locale.code} ${route}: search summary has a reviewed translation.`);
    assert.equal(localSearch.get(`${locale.prefix}${route}`)?.summary, translation, `${locale.code} ${route}: localized search summary matches reviewed copy.`);
  }
}

for (const asset of ['assets/images/australia-kangaroo-island-regional-days.svg', 'assets/images/australia-kings-park-entry-choice.svg']) {
  assert.equal(fs.readFileSync(path.join(root, asset), 'utf8'), git(['show', `${correction}:${asset}`]), `${asset}: earlier parallel arrow correction is byte-for-byte intact.`);
}
const newImagePaths = git(['diff', '--name-status', base, sourceTerminal, '--', 'assets/images']).split(/\r?\n/u).filter((line) => /^A\s/u.test(line));
assert.deepEqual(newImagePaths, [], 'No image or SVG asset was added.');
const untrackedImagePaths = git(['ls-files', '--others', '--exclude-standard', '--', 'assets/images']).split(/\r?\n/u).filter(Boolean);
assert.deepEqual(untrackedImagePaths.filter((assetPath) => !spainPhotoAssets.has(assetPath)), [], 'Only the exact licensed Spain photo set may be untracked alongside the unchanged Broome batch.');

console.log(`Australia Broome content regression passed: exact base and ${sourceBranch ? 'four-route' : 'eight-route cumulative'} scope; ${sourceBranch ? 'unchanged Kununurra/Purnululu' : 'separately registered Broome/Tasmania follow-up'}; Japan Hokkaido/Otaru content floors; five-language pages and search; scoped Article/sitemap dates; 4,560 unchanged sitemap URLs; and preserved arrow SVG correction. Source/markup checks only; no rendered UI or pixel review.`);
