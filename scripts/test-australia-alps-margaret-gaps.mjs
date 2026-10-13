#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { parse } from 'parse5';
import { collectTranslationWork } from './i18n-lib.mjs';
import { postIntegrationMargaretRemainingRoutes, postIntegrationBroomeRoutes, postIntegrationBroomeTasmaniaRoutes, postAustraliaFinalRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const branch = git(['branch', '--show-current']).trim();
const sourceBranch = branch === 'codex/sprint-au-alps-margaret-gaps-20261013';
const integrationBranch = ['codex/integration-sprint-20261011', 'codex/integration-sprint-20261011-preflight'].includes(branch);
const base = '5f1205bbbee0ef636c34e883c399e6fceaa7b508';
const integrationBase = '2784debcbf3eb6908dd108df4125b924779282eb';
const sourceTerminal = 'a99fbe9fe996ccedbac42b1b9386447a11403854';
const contentCommit = '55e3b9710c24b45975bdaea5769ab3e4a39ffc44';
const correction = '31fc43817cd436e2f868058f4393ed59a800aec8';
const isoDate = '2026-10-13';
const routes = [
  '/australia/canberra-australian-alps/namadgi-national-park/',
  '/australia/canberra-australian-alps/snowy-mountains-kosciuszko/',
  '/australia/margaret-river-southwest/',
  '/australia/margaret-river-southwest/margaret-river-wine-food/'
];
const locales = [
  { code: 'en', prefix: '', date: 'reviewed 13 October 2026', script: /[A-Za-z]/u },
  { code: 'zh-Hant', prefix: '/zh', date: '2026 年 10 月 13 日', script: /[\u3400-\u9fff]/u },
  { code: 'ja', prefix: '/ja', date: '2026年10月13日', script: /[\u3040-\u30ff\u3400-\u9fff]/u },
  { code: 'ko', prefix: '/ko', date: '2026년 10월 13일', script: /[\uac00-\ud7af]/u },
  { code: 'th', prefix: '/th', date: '13 ตุลาคม 2026', script: /[\u0e00-\u0e7f]/u }
];
const expectedDelta = new Map([
  [routes[0], 998],
  [routes[1], 981],
  [routes[2], 1236],
  [routes[3], 1008]
]);
const requiredPhrases = [
  ['Woodland Walk', 'Booroomba Rocks', 'Square Rock', 'Yankee Hat', 'Gibraltar Falls Lookout'],
  ['Jindabyne', 'Cooma', 'Charlotte Pass', 'Thredbo', '18.6km', 'chain', 'winter'],
  ['3 nights', '5 nights', '7 nights', 'Transwa SW1', 'Albany', 'Margaret River'],
  ['zero-alcohol', 'designated driver', 'two', 'daylight', 'Transwa SW1', 'tasting']
];
const pageBatchName = 'zzzzzzzzzf-au-alps-margaret-pages-20261013.json';
const searchBatchName = 'zzzzzzzzzg-au-alps-margaret-search-20261013.json';
const provenance = {
  writer: 'Task assistant, GPT-6 Codex execution family; exact runtime model ID unverified and requested GPT-6 Luna runtime could not be verified in the selected environment',
  reviewer: 'Same task assistant/model-family self-review; non-independent; exact runtime model ID unverified',
  independentSecondModel: false
};

function git(args, binary = false) {
  return execFileSync('git', args, { cwd: root, encoding: binary ? undefined : 'utf8', maxBuffer: 32 * 1024 * 1024 });
}
function isAncestor(ancestor, descendant) {
  try {
    execFileSync('git', ['merge-base', '--is-ancestor', ancestor, descendant], { cwd: root, stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
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
function attrs(node) {
  return Object.fromEntries((node?.attrs || []).map(({ name, value }) => [name, value]));
}
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
if (sourceBranch) {
  const firstParents = git(['rev-list', '--first-parent', '--max-count=4', 'HEAD']).trim().split(/\r?\n/u);
  assert(firstParents.includes(base) && firstParents.indexOf(base) <= 2, 'The source branch descends from the exact base through the expected correction commit.');
} else {
  const sourceInHead = isAncestor(sourceTerminal, 'HEAD');
  const sourceInMerge = isAncestor(sourceTerminal, 'MERGE_HEAD');
  assert(sourceInHead || sourceInMerge, 'The exact Alps/Margaret source terminal is in the current integration history.');
  assert.equal(git(['merge-base', base, sourceTerminal]).trim(), base, 'The exact source terminal descends from its authorized Canberra base.');
  assert.equal(git(['rev-parse', `${contentCommit}^1`]).trim(), '768151d3f42378358c122a1cde55100fcec9eafa', 'The route content follows the reviewed Adelaide/Perth arrow-correction commit.');
}
const correctionFiles = [
  'assets/images/australia-kangaroo-island-regional-days.svg',
  'assets/images/australia-kings-park-entry-choice.svg',
  'data/australia-adelaide-perth-diagrams.mjs',
  'reports/adelaide-perth-gaps-refresh-2026-10-12.md'
];
for (const file of correctionFiles) {
  assert.equal(fs.readFileSync(path.join(root, file), 'utf8'), git(['show', `${correction}:${file}`]), `${file}: parallel arrow correction stays byte-for-byte intact.`);
}

const comparisonBase = integrationBranch ? integrationBase : base;
const changedEnglish = git(['diff', '--name-only', comparisonBase, '--', 'australia']).split(/\r?\n/u).filter((name) => name.endsWith('/index.html')).sort();
const expectedChangedEnglish = integrationBranch ? [...postIntegrationMargaretRemainingRoutes, ...postIntegrationBroomeRoutes, ...postIntegrationBroomeTasmaniaRoutes, ...postAustraliaFinalRoutes] : routes;
assert.deepEqual(changedEnglish, expectedChangedEnglish.map((route) => `${route.slice(1)}index.html`).sort(), 'Only the exact source batch or subsequent four Margaret guides changed in the selected checkpoint.');

const referenceHub = words(mainText(fs.readFileSync(path.join(root, 'japan/hokkaido/index.html'), 'utf8')));
const referenceGuide = words(mainText(fs.readFileSync(path.join(root, 'japan/hokkaido/otaru-shakotan/index.html'), 'utf8')));
assert.equal(referenceHub, 1397, 'Same-level Hokkaido hub reference word count.');
assert.equal(referenceGuide, 1030, 'Same-level Hokkaido/Otaru local-guide reference word count.');
for (const [index, route] of routes.entries()) {
  const html = fs.readFileSync(fileFor(route), 'utf8');
  const doc = parse(html);
  assert.equal(attrs(one(doc, (node) => node.tagName === 'html')).lang, 'en', `${route}: English language.`);
  assert.equal(attrs(one(doc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical')).href, `https://tripdistill.com${route}`, `${route}: canonical URL.`);
  const article = jsonLd(doc).find((record) => record['@type'] === 'Article');
  assert.equal(article?.dateModified, isoDate, `${route}: Article dateModified.`);
  const body = mainText(html);
  const previous = git(['show', `${base}:${route.slice(1)}index.html`]);
  assert.equal(words(body) - words(mainText(previous)), expectedDelta.get(route), `${route}: main-text delta against the exact base.`);
  assert(words(body) > (index === 2 ? referenceHub : referenceGuide), `${route}: exceeds the same-level Hokkaido/Otaru reference floor.`);
  for (const phrase of requiredPhrases[index]) assert(body.toLowerCase().includes(phrase.toLowerCase()), `${route}: substantive itinerary includes ${phrase}.`);
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
assert.equal(baseSearch.size, 955, 'Base English search index has 955 site-wide records.');
assert.equal(currentSearch.size, 955, 'Current English search index keeps all 955 site-wide records.');
assert.deepEqual([...currentSearch.keys()].sort(), [...baseSearch.keys()].sort(), 'English search URL set is unchanged.');
const changedSearch = [...currentSearch.keys()].filter((url) => JSON.stringify(currentSearch.get(url)) !== JSON.stringify(baseSearch.get(url))).sort();
const changedAustraliaSearch = changedSearch.filter((url) => url.startsWith('/australia/'));
assert.deepEqual(sourceBranch ? changedSearch : changedAustraliaSearch, [...expectedChangedEnglish].sort(), 'Only the exact source batch or subsequent four Margaret search records changed in the selected checkpoint.');
const terminalSearch = searchMap(git(['show', `${sourceTerminal}:data/search-index.json`]));
for (const route of routes) assert.deepEqual(currentSearch.get(route), terminalSearch.get(route), `${route}: integrated search record matches the exact source terminal.`);

const baseSitemap = urlRecords(git(['show', `${comparisonBase}:sitemap.xml`]));
const currentSitemap = urlRecords(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560, 'Base sitemap has 4,560 URLs.');
assert.equal(currentSitemap.size, 4560, 'Current sitemap keeps 4,560 URLs.');
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set is unchanged.');
const changedDates = expectedChangedEnglish.flatMap((route) => locales.map((locale) => `${locale.prefix}${route}`)).sort();
const actualChangedDates = [...currentSitemap.keys()].filter((url) => currentSitemap.get(url) !== baseSitemap.get(url));
const changedAustraliaDates = actualChangedDates.filter((url) => expectedChangedEnglish.some((route) => new URL(url, 'https://tripdistill.com').pathname.endsWith(route)));
assert.deepEqual(sourceBranch ? actualChangedDates.sort() : changedAustraliaDates.sort(), changedDates, 'Only the exact selected four routes × five locale lastmod values changed in the checkpoint.');
for (const url of changedDates) assert.equal(currentSitemap.get(url), isoDate, `${url}: lastmod date.`);

const pages = collectTranslationWork();
const requiredPageUnits = new Set(pages.filter((record) => routes.includes(record.route)).flatMap((record) => record.units));
for (const locale of locales.slice(1)) {
  const dir = path.join(root, 'data/i18n/reviewed', locale.code);
  const pageBatch = JSON.parse(fs.readFileSync(path.join(dir, pageBatchName), 'utf8'));
  assert.equal(pageBatch.locale, locale.code, `${locale.code}: page-batch locale.`);
  assert.equal(pageBatch.qualityStatus, 'reviewed', `${locale.code}: page-batch review state.`);
  assert.deepEqual(pageBatch.routes, routes, `${locale.code}: exact four-page scope.`);
  assert.deepEqual(pageBatch.reviewProvenance, provenance, `${locale.code}: truthful non-independent review provenance.`);
  assert.equal(Object.keys(pageBatch.translations).length, 214, `${locale.code}: full page batch. `);
  assert(Object.entries(pageBatch.translations).every(([source, target]) => requiredPageUnits.has(source) && target.trim()), `${locale.code}: no stale or blank page translations.`);

  const searchBatch = JSON.parse(fs.readFileSync(path.join(dir, searchBatchName), 'utf8'));
  assert.equal(searchBatch.locale, locale.code, `${locale.code}: search-batch locale.`);
  assert.equal(searchBatch.qualityStatus, 'reviewed', `${locale.code}: search review state.`);
  assert.deepEqual(searchBatch.routes, ['/data/search-index.json'], `${locale.code}: search-batch scope.`);
  assert.deepEqual(searchBatch.reviewProvenance, provenance, `${locale.code}: truthful search provenance.`);
  assert.equal(Object.keys(searchBatch.translations).length, 28, `${locale.code}: all 28 new search terms.`);
  assert(Object.values(searchBatch.translations).every((target) => target.trim()), `${locale.code}: no blank search translations.`);

  const localSearchPath = path.join(root, locale.prefix.slice(1), 'data/search-index.json');
  const localSearch = searchMap(fs.readFileSync(localSearchPath, 'utf8'));
  for (const route of routes) {
    const html = fs.readFileSync(fileFor(route, locale.prefix), 'utf8');
    const doc = parse(html);
    const body = mainText(html);
    assert.equal(attrs(one(doc, (node) => node.tagName === 'html')).lang, locale.code, `${locale.code} ${route}: document language.`);
    assert.equal(attrs(one(doc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical')).href, `https://tripdistill.com${locale.prefix}${route}`, `${locale.code} ${route}: canonical URL.`);
    assert(body.includes(locale.date), `${locale.code} ${route}: localized visible review date.`);
    assert.equal(jsonLd(doc).find((record) => record['@type'] === 'Article')?.dateModified, isoDate, `${locale.code} ${route}: Article date.`);
    assert(locale.script.test(body), `${locale.code} ${route}: localized body uses its declared script.`);
    const sourceSummary = currentSearch.get(route)?.summary;
    const reviewedSummary = searchBatch.translations[sourceSummary] || pageBatch.translations[sourceSummary];
    assert(reviewedSummary, `${locale.code} ${route}: translated summary is in a reviewed batch.`);
    assert.equal(localSearch.get(`${locale.prefix}${route}`)?.summary, reviewedSummary, `${locale.code} ${route}: translated search summary matches the reviewed page batch.`);
  }
}

const changedSvgPaths = git(['diff', '--name-only', base, '--', 'assets/images']).trim().split(/\r?\n/u).filter(Boolean).sort();
const correctedArrowSvgs = correctionFiles.filter((file) => file.endsWith('.svg')).sort();
assert.deepEqual(sourceBranch ? changedSvgPaths : changedSvgPaths.filter((file) => file.startsWith('assets/images/australia-')), correctedArrowSvgs, 'The only changed Australian SVG paths from the exact base are the two preserved parallel arrow corrections.');
assert.equal(git(['ls-files', '--others', '--exclude-standard', '--', 'assets/images']).trim(), '', 'No untracked image or SVG asset exists.');

console.log(`Australia Alps/Margaret River regression passed (${integrationBranch ? 'integration' : 'source'} mode): exact base and four route scope; Hokkaido/Otaru content floors and substantive route decisions; translated pages, dates and search; 4,560 unchanged sitemap URLs; 31fc438 arrow correction preserved byte-for-byte. This is a source/markup and data check, not a rendered UI or pixel review.`);
