#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { parse } from 'parse5';
import { followingVietnamDaLatRoutes, followingVietnamNhaTrangRoutes, followingVietnamAfterNhaTrangRoutes, followingVietnamSouthernGapsRoutes, followingVietnamBayGapsRoutes, followingVietnamCavesIslandsGapsRoutes, postFloridaChicagoRoutes, postNewEnglandArizonaRoutes, postArizonaLosAngelesRoutes, postLosAngelesBostonRoutes, postLosAngelesSanDiegoRoutes, postIntegrationBroomeRoutes, postIntegrationBroomeTasmaniaRoutes, postAustraliaFinalRoutes, postIntegrationMuiNeRoutes, postIntegrationPhongNhaRoutes, postIntegrationPhuQuocRoutes, postBostonOverviewJuneauRoutes, postBostonOverviewJuneauSearchRoutes } from './integration-sprint-scope.mjs';
const root = path.resolve(import.meta.dirname, '..');
const branch = git(['branch', '--show-current']).trim();
const sourceBranch = branch === 'codex/sprint-au-margaret-remaining-20261013';
const integrationBranch = ['codex/integration-sprint-20261011', 'codex/integration-sprint-20261011-preflight'].includes(branch);
const base = 'a99fbe9fe996ccedbac42b1b9386447a11403854';
const integrationBase = '2784debcbf3eb6908dd108df4125b924779282eb';
const sourceTerminal = '5578d6da740ca9d7ec07fca6c7eed65cc67868e8';
const correction = '768151d3f42378358c122a1cde55100fcec9eafa';
const isoDate = '2026-10-13';
const routes = [
  '/australia/margaret-river-southwest/busselton-dunsborough/',
  '/australia/margaret-river-southwest/cape-naturaliste-coast/',
  '/australia/margaret-river-southwest/boranup-caves-augusta/',
  '/australia/margaret-river-southwest/albany-torndirrup/'
];
const comparisonBase = integrationBranch ? integrationBase : base;
const locales = [
  { code: 'zh-Hant', prefix: '/zh', date: '2026 年 10 月 13 日', script: /[\u3400-\u9fff]/u },
  { code: 'ja', prefix: '/ja', date: '2026年10月13日', script: /[\u3040-\u30ff\u3400-\u9fff]/u },
  { code: 'ko', prefix: '/ko', date: '2026년 10월 13일', script: /[\uac00-\ud7af]/u },
  { code: 'th', prefix: '/th', date: '13 ตุลาคม 2026', script: /[\u0e00-\u0e7f]/u }
];
const pageBatchName = 'zzzzzzzzzh-au-margaret-remaining-pages-20261013.json';
const searchBatchName = 'zzzzzzzzzi-au-margaret-remaining-search-20261013.json';
const provenance = {
  writer: 'Task assistant, GPT-6 Codex execution family; exact runtime model ID unverified and requested GPT-6 Luna runtime could not be verified in the selected environment',
  reviewer: 'Same task assistant/model-family self-review; non-independent; exact runtime model ID unverified',
  independentSecondModel: false
};
const requiredPhrases = [
  ['SW1', 'luggage', 'two-night', 'Busselton Jetty', 'Wadandi'],
  ['3.4 km', '6.8 km', 'Sugarloaf', '59 steps', 'fire closure', 'SW1'],
  ['Jewel Cave', '45 km', '350 steps', 'Bussell Highway', 'Augusta', 'fire closure'],
  ['GS1', 'GS2', 'GS3', 'two nights', 'three nights', 'Bald Head', 'Stony Hill', '72-metre', 'Menang']
];

function git(args, binary = false) {
  return execFileSync('git', args, { cwd: root, encoding: binary ? undefined : 'utf8', maxBuffer: 32 * 1024 * 1024 });
}
function fileFor(route, prefix = '') {
  return path.join(root, `${prefix}${route}`.replace(/^\//u, ''), 'index.html');
}
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
      const value = (node.childNodes || []).map((child) => child.value || '').join('');
      const data = JSON.parse(value);
      return data['@graph'] || [data];
    } catch { return []; }
  });
}
function urlRecords(xml) {
  const entries = new Map();
  for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/gu)) {
    const url = block.match(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc>/u)?.[1];
    const date = block.match(/<lastmod>([^<]*)<\/lastmod>/u)?.[1];
    if (url !== undefined && date) entries.set(url || '/', date);
  }
  return entries;
}
function searchMap(text) { return new Map(JSON.parse(text).map((entry) => [entry.url, entry])); }

assert(sourceBranch || integrationBranch, 'The source branch or named integration branch must be checked.');
git(['merge-base', '--is-ancestor', base, 'HEAD']);
if (sourceBranch) {
  const parent = git(['rev-list', '--first-parent', '--max-count=2', 'HEAD']).trim().split(/\r?\n/u);
  if (parent[0] !== base) assert.equal(parent[1], base, 'The new commit is directly based on the requested commit.');
} else {
  const sourceInHead = spawnSync('git', ['merge-base', '--is-ancestor', sourceTerminal, 'HEAD'], { cwd: root }).status === 0;
  const mergeHead = spawnSync('git', ['rev-parse', '--verify', 'MERGE_HEAD'], { cwd: root });
  const sourceInMerge = mergeHead.status === 0 && spawnSync('git', ['merge-base', '--is-ancestor', sourceTerminal, 'MERGE_HEAD'], { cwd: root }).status === 0;
  assert(sourceInHead || sourceInMerge, 'The exact Margaret remaining source terminal is in the integration history.');
}

const changedEnglish = git(['diff', '--name-only', comparisonBase, '--', 'australia']).split(/\r?\n/u).filter((name) => name.endsWith('/index.html')).sort();
assert.deepEqual(changedEnglish, (integrationBranch ? [...routes, ...postIntegrationBroomeRoutes, ...postIntegrationBroomeTasmaniaRoutes, ...postAustraliaFinalRoutes] : routes).map((route) => `${route.slice(1)}index.html`).sort(), 'Only the four requested English child pages and exact integrated Broome follow-on changed.');
for (const untouched of [
  'australia/margaret-river-southwest/index.html',
  'australia/margaret-river-southwest/margaret-river-wine-food/index.html'
]) git(['diff', '--quiet', base, '--', untouched]);

const referenceGuide = words(mainText(fs.readFileSync(path.join(root, 'japan/hokkaido/otaru-shakotan/index.html'), 'utf8')));
assert.equal(referenceGuide, 1030, 'Same-level Japan/Otaru local-guide reference word count.');
for (const [index, route] of routes.entries()) {
  const html = fs.readFileSync(fileFor(route), 'utf8');
  const doc = parse(html);
  assert.equal(attrs(one(doc, (node) => node.tagName === 'html')).lang, 'en', `${route}: English language.`);
  assert.equal(attrs(one(doc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical')).href, `https://tripdistill.com${route}`, `${route}: canonical URL.`);
  assert.equal(jsonLd(doc).find((record) => record['@type'] === 'Article')?.dateModified, isoDate, `${route}: Article dateModified.`);
  const body = mainText(html);
  assert(words(body) > referenceGuide, `${route}: exceeds the same-level Japan/Otaru reference floor.`);
  for (const phrase of requiredPhrases[index]) assert(body.toLowerCase().includes(phrase.toLowerCase()), `${route}: route copy includes ${phrase}.`);
  assert(body.includes('reviewed 13 October 2026'), `${route}: visible review date.`);
  const faq = jsonLd(doc).find((record) => record['@type'] === 'FAQPage');
  const visibleFaq = all(doc, (node) => node.tagName === 'details').map((details) => {
    const question = textContent(one(details, (node) => node.tagName === 'summary')).replace(/\s+/gu, ' ').trim();
    const answer = textContent(details).replace(/\s+/gu, ' ').trim().slice(question.length).trim();
    return { question, answer };
  });
  assert(faq?.mainEntity?.length > 0, `${route}: FAQ schema exists.`);
  assert.deepEqual(faq.mainEntity.map((item) => ({ question: item.name, answer: item.acceptedAnswer?.text })), visibleFaq, `${route}: visible FAQ and schema match.`);
}

const baseSearch = searchMap(git(['show', `${comparisonBase}:data/search-index.json`]));
const currentSearch = searchMap(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
assert.equal(baseSearch.size, 955, 'Base English search index has 955 records.');
assert.equal(currentSearch.size, 955, 'Current English search index keeps all 955 records.');
assert.deepEqual([...currentSearch.keys()].sort(), [...baseSearch.keys()].sort(), 'English search URL set is unchanged.');
const expectedSearchRoutes = [...routes, ...postFloridaChicagoRoutes, ...postNewEnglandArizonaRoutes, ...(integrationBranch ? [...postArizonaLosAngelesRoutes, ...postLosAngelesBostonRoutes, ...postLosAngelesSanDiegoRoutes, ...postIntegrationBroomeRoutes, ...postIntegrationBroomeTasmaniaRoutes, ...postAustraliaFinalRoutes, ...postIntegrationMuiNeRoutes, ...postIntegrationPhongNhaRoutes, ...postIntegrationPhuQuocRoutes, ...followingVietnamNhaTrangRoutes, ...followingVietnamAfterNhaTrangRoutes, ...followingVietnamSouthernGapsRoutes, ...followingVietnamBayGapsRoutes, ...followingVietnamCavesIslandsGapsRoutes, ...postBostonOverviewJuneauSearchRoutes] : [])].sort();
assert.deepEqual([...currentSearch.keys()].filter((url) => JSON.stringify(currentSearch.get(url)) !== JSON.stringify(baseSearch.get(url))).sort(), expectedSearchRoutes, 'Only the selected Margaret, Chicago, Arizona, Los Angeles, Boston, Broome, Mui Ne, Phong Nha, Phu Quoc, southern Vietnam and separately scoped Juneau search records changed from the exact selected checkpoint.');
if (integrationBranch) {
  const terminalBodies = new Map(routes.map((route) => [route, git([`show`, `${sourceTerminal}:${route.slice(1)}index.html`])]));
  for (const route of routes) assert.equal(fs.readFileSync(fileFor(route), 'utf8'), terminalBodies.get(route), `${route}: integrated body matches the exact Margaret source terminal.`);
}

const baseSitemap = urlRecords(git(['show', `${comparisonBase}:sitemap.xml`]));
const currentSitemap = urlRecords(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560, 'Base sitemap has 4,560 URLs.');
assert.equal(currentSitemap.size, 4560, 'Current sitemap keeps 4,560 URLs.');
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set is unchanged.');
const datedRoutes = [...routes, ...postFloridaChicagoRoutes, ...postNewEnglandArizonaRoutes, ...followingVietnamDaLatRoutes, ...(integrationBranch ? [...postArizonaLosAngelesRoutes, ...postLosAngelesBostonRoutes, ...postLosAngelesSanDiegoRoutes, ...postIntegrationBroomeRoutes, ...postIntegrationBroomeTasmaniaRoutes, ...postAustraliaFinalRoutes, ...postIntegrationMuiNeRoutes, ...postIntegrationPhongNhaRoutes, ...postIntegrationPhuQuocRoutes, ...followingVietnamNhaTrangRoutes, ...followingVietnamAfterNhaTrangRoutes, ...followingVietnamSouthernGapsRoutes, ...followingVietnamBayGapsRoutes, ...followingVietnamCavesIslandsGapsRoutes, ...postBostonOverviewJuneauRoutes] : [])];
const changedDates = datedRoutes.flatMap((route) => ['', ...locales.map((locale) => locale.prefix)].map((prefix) => `${prefix}${route}`)).sort();
assert.deepEqual([...currentSitemap.keys()].filter((url) => currentSitemap.get(url) !== baseSitemap.get(url)).sort(), changedDates, 'Only the selected Margaret, Chicago, Arizona, Da Lat, Los Angeles, Boston, Broome, Mui Ne and Southern Vietnam routes × five locale lastmod values changed.');
for (const url of changedDates) assert.equal(currentSitemap.get(url), isoDate, `${url}: lastmod date.`);

for (const locale of locales) {
  const dir = path.join(root, 'data/i18n/reviewed', locale.code);
  const pageBatch = JSON.parse(fs.readFileSync(path.join(dir, pageBatchName), 'utf8'));
  assert.equal(pageBatch.locale, locale.code, `${locale.code}: page-batch locale.`);
  assert.equal(pageBatch.qualityStatus, 'reviewed', `${locale.code}: page review state.`);
  assert.deepEqual(pageBatch.routes, routes, `${locale.code}: exact four-page scope.`);
  assert.deepEqual(pageBatch.reviewProvenance, provenance, `${locale.code}: same-model provenance and runtime disclosure.`);
  assert.equal(Object.keys(pageBatch.translations).length, 226, `${locale.code}: complete new page strings.`);
  assert(Object.values(pageBatch.translations).every((target) => target.trim()), `${locale.code}: no blank page translations.`);
  const searchBatch = JSON.parse(fs.readFileSync(path.join(dir, searchBatchName), 'utf8'));
  assert.equal(searchBatch.qualityStatus, 'reviewed', `${locale.code}: search review state.`);
  assert.deepEqual(searchBatch.routes, ['/data/search-index.json'], `${locale.code}: search batch scope.`);
  assert.deepEqual(searchBatch.reviewProvenance, provenance, `${locale.code}: search review provenance.`);
  assert.equal(Object.keys(searchBatch.translations).length, 28, `${locale.code}: all 28 search strings.`);
  assert(Object.values(searchBatch.translations).every((target) => target.trim()), `${locale.code}: no blank search translations.`);
  const localSearch = searchMap(fs.readFileSync(path.join(root, locale.prefix.slice(1), 'data/search-index.json'), 'utf8'));
  for (const route of routes) {
    const html = fs.readFileSync(fileFor(route, locale.prefix), 'utf8');
    const doc = parse(html);
    const body = mainText(html);
    assert.equal(attrs(one(doc, (node) => node.tagName === 'html')).lang, locale.code, `${locale.code} ${route}: document language.`);
    assert.equal(attrs(one(doc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical')).href, `https://tripdistill.com${locale.prefix}${route}`, `${locale.code} ${route}: canonical URL.`);
    assert(body.includes(locale.date), `${locale.code} ${route}: localized visible review date.`);
    assert(locale.script.test(body), `${locale.code} ${route}: localized body uses its script.`);
    assert.equal(jsonLd(doc).find((record) => record['@type'] === 'Article')?.dateModified, isoDate, `${locale.code} ${route}: Article date.`);
    const sourceSummary = currentSearch.get(route)?.summary;
    const translatedSummary = searchBatch.translations[sourceSummary] || pageBatch.translations[sourceSummary];
    assert(translatedSummary, `${locale.code} ${route}: summary has a reviewed translation.`);
    assert.equal(localSearch.get(`${locale.prefix}${route}`)?.summary, translatedSummary, `${locale.code} ${route}: localized search summary matches reviewed copy.`);
  }
}

for (const asset of ['assets/images/australia-kangaroo-island-regional-days.svg', 'assets/images/australia-kings-park-entry-choice.svg']) {
  assert.equal(fs.readFileSync(path.join(root, asset), 'utf8'), git(['show', `${correction}:${asset}`]), `${asset}: prior parallel arrow correction is byte-for-byte intact.`);
}
assert.equal(git(['ls-files', '--others', '--exclude-standard', '--', 'assets/images']).trim(), '', 'No new image or SVG asset was created.');

console.log(`Australia Margaret remaining regression passed (${integrationBranch ? 'integration' : 'source'} mode): exact four-route scope, untouched hub and wine/food page, Japan/Otaru content floor, reviewed five-language pages and search, 4,560 unchanged sitemap URLs, and preserved arrow SVG correction. This is a source/markup and data check, not a rendered UI or pixel review.`);
