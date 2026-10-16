#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { parse } from 'parse5';
import { collectTranslationWork } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const branch = execFileSync('git', ['branch', '--show-current'], { cwd: root, encoding: 'utf8' }).trim();
const base = '448f6cd5a03aff0ddbfea1a21226cc9f2be545b9';
const sourceTerminal = '5f1205bbbee0ef636c34e883c399e6fceaa7b508';
const sourceBranch = branch === 'codex/sprint-au-canberra-content-20261013';
const isoDate = '2026-10-12';
const routes = [
  '/australia/canberra-australian-alps/',
  '/australia/canberra-australian-alps/parliamentary-triangle/',
  '/australia/canberra-australian-alps/lake-burley-griffin-national-museum/',
  '/australia/canberra-australian-alps/war-memorial-mount-ainslie/'
];
const locales = [
  { code: 'en', prefix: '', date: 'reviewed 12 October 2026', script: /[A-Za-z]/u },
  { code: 'zh-Hant', prefix: '/zh', date: '2026 年 10 月 12 日', script: /[\u3400-\u9fff]/u },
  { code: 'ja', prefix: '/ja', date: '2026年10月12日', script: /[\u3040-\u30ff\u3400-\u9fff]/u },
  { code: 'ko', prefix: '/ko', date: '2026년 10월 12일', script: /[\uac00-\ud7af]/u },
  { code: 'th', prefix: '/th', date: '12 ตุลาคม 2026', script: /[\u0e00-\u0e7f]/u }
];
const expectedDelta = new Map([
  [routes[0], 1197],
  [routes[1], 893],
  [routes[2], 921],
  [routes[3], 1025]
]);
const pageBatchNames = ['zzzzzzzzzd-au-canberra-pages-20261012.json'];
const searchBatchName = 'zzzzzzzzze-au-canberra-search-20261012.json';
const batchProvenance = {
  writer: 'Task assistant and locale workers; GPT-6 Codex execution family, exact runtime model ID unverified; no Luna runtime exposed in the selected environment',
  reviewer: 'Same task/model-family review; non-independent; exact runtime model ID unverified',
  independentSecondModel: false
};

function git(args, binary = false) {
  return execFileSync('git', args, { cwd: root, encoding: binary ? undefined : 'utf8', maxBuffer: 32 * 1024 * 1024 });
}
function all(node, predicate, out = []) {
  if (predicate(node)) out.push(node);
  for (const child of node.childNodes || []) all(child, predicate, out);
  return out;
}
function attrs(node) {
  return Object.fromEntries((node?.attrs || []).map(({ name, value }) => [name, value]));
}
function one(node, predicate) {
  if (predicate(node)) return node;
  for (const child of node.childNodes || []) {
    const found = one(child, predicate);
    if (found) return found;
  }
  return null;
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
    if (classes.some((name) => ['sources', 'au-hub-directory', 'au-related-grid', 'au-related-card'].includes(name)) || a['aria-label'] === 'Advertisement') return;
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
function sitemapEntries(xml) {
  const records = new Map();
  for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/gu)) {
    const url = block.match(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc>/u)?.[1];
    const date = block.match(/<lastmod>([^<]*)<\/lastmod>/u)?.[1];
    if (url !== undefined && date) records.set(url || '/', date);
  }
  return records;
}
function jsonMap(text) { return new Map(JSON.parse(text).map((item) => [item.url, item])); }
function routeFile(route, prefix = '') { return path.join(root, `${prefix}${route}`.replace(/^\//u, ''), 'index.html'); }

assert(['codex/sprint-au-canberra-content-20261013', 'codex/integration-sprint-20261011', 'codex/integration-sprint-20261011-preflight', 'codex/thailand-country-overview-20261014', 'codex/tripdistill-remaining-3-pages-20261015'].includes(branch), 'Selected source, integration, independent Thailand overview or explicitly scoped TripDistill follow-on branch name.');
if (sourceBranch) {
  const head = git(['rev-parse', 'HEAD']).trim();
  assert(head === base || git(['rev-parse', `${head}^`]).trim() === base, 'Source branch must remain at the authorized base or its direct child.');
  const changedEnglish = git(['diff', '--name-only', base, '--', 'australia']).split(/\r?\n/u).filter((name) => name.endsWith('/index.html')).sort();
  assert.deepEqual(changedEnglish, routes.map((route) => `${route.slice(1)}index.html`).sort(), 'Only the four authorized English routes may change.');
} else {
  const mergeHead = spawnSync('git', ['rev-parse', '--verify', 'MERGE_HEAD'], { cwd: root, encoding: 'utf8' });
  const sourceInHead = spawnSync('git', ['merge-base', '--is-ancestor', sourceTerminal, 'HEAD'], { cwd: root }).status === 0;
  const sourceInMerge = mergeHead.status === 0 && spawnSync('git', ['merge-base', '--is-ancestor', sourceTerminal, 'MERGE_HEAD'], { cwd: root }).status === 0;
  assert(sourceInHead || sourceInMerge, 'The exact Canberra source terminal must be in integration history.');
  for (const route of routes) assert.equal(fs.readFileSync(routeFile(route), 'utf8'), git(['show', `${sourceTerminal}:${route.slice(1)}index.html`]), `${route}: integrated English body matches the source terminal.`);
}

for (const route of routes) {
  const html = fs.readFileSync(routeFile(route), 'utf8');
  const doc = parse(html);
  assert.equal(attrs(one(doc, (node) => node.tagName === 'html')).lang, 'en', `${route}: English language.`);
  assert.equal(attrs(one(doc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical')).href, `https://tripdistill.com${route}`, `${route}: canonical URL.`);
  const article = jsonLd(doc).find((record) => record['@type'] === 'Article');
  assert.equal(article?.dateModified, isoDate, `${route}: Article dateModified.`);
  const body = mainText(html);
  const previous = git(['show', `${base}:${route.slice(1)}index.html`]);
  assert.equal(words(body) - words(mainText(previous)), expectedDelta.get(route), `${route}: English rendered main-text delta.`);
  assert(words(body) > (route === routes[0] ? 1397 : 1030), `${route}: body exceeds the same-level Hokkaido/Otaru minimum.`);
  const faq = jsonLd(doc).find((record) => record['@type'] === 'FAQPage');
  const visibleFaq = all(doc, (node) => node.tagName === 'details').map((details) => {
    const summary = one(details, (node) => node.tagName === 'summary');
    const read = (node) => node?.nodeName === '#text' ? node.value : (node?.childNodes || []).map(read).join(' ');
    const question = read(summary).replace(/\s+/gu, ' ').trim();
    return { question, answer: read(details).replace(/\s+/gu, ' ').trim().slice(question.length).trim() };
  });
  assert(faq?.mainEntity?.length > 0, `${route}: FAQ schema exists.`);
  assert.deepEqual(faq.mainEntity.map((item) => ({ question: item.name, answer: item.acceptedAnswer?.text })), visibleFaq, `${route}: visible FAQ and schema match.`);
}

const baseSearch = jsonMap(git(['show', `${base}:data/search-index.json`]));
const currentSearch = jsonMap(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
assert.equal(baseSearch.size, 955, 'Base English search index has 955 site-wide records.');
assert.equal(currentSearch.size, 955, 'Current English search index keeps all 955 site-wide records.');
assert.deepEqual([...currentSearch.keys()].sort(), [...baseSearch.keys()].sort(), 'Search URL set is unchanged.');
const changedSearch = [...currentSearch.keys()].filter((url) => JSON.stringify(currentSearch.get(url)) !== JSON.stringify(baseSearch.get(url))).sort();
if (sourceBranch) assert.deepEqual(changedSearch, [...routes].sort(), 'Only the four authorized English search records changed.');
else {
  const sourceSearch = jsonMap(git(['show', `${sourceTerminal}:data/search-index.json`]));
  for (const route of routes) assert.deepEqual(currentSearch.get(route), sourceSearch.get(route), `${route}: integrated search record matches the source terminal.`);
}

const baseSitemap = sitemapEntries(git(['show', `${base}:sitemap.xml`]));
const currentSitemap = sitemapEntries(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560, 'Base sitemap contains 4,560 URLs.');
assert.equal(currentSitemap.size, 4560, 'Current sitemap contains 4,560 URLs.');
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set is unchanged.');
const expectedSitemap = routes.flatMap((route) => locales.map((locale) => `${locale.prefix}${route}`)).sort();
const changedSitemap = [...currentSitemap.keys()].filter((url) => currentSitemap.get(url) !== baseSitemap.get(url)).sort();
if (sourceBranch) assert.deepEqual(changedSitemap, expectedSitemap, 'Only the four routes × five locale sitemap dates changed.');
else for (const url of expectedSitemap) assert.equal(currentSitemap.get(url), isoDate, `${url}: integrated Canberra sitemap date.`);
for (const url of expectedSitemap) assert.equal(currentSitemap.get(url), isoDate, `${url}: sitemap lastmod.`);

const work = collectTranslationWork();
const requiredPages = new Set(work.filter((record) => routes.includes(record.route)).flatMap((record) => record.units));
for (const locale of locales.slice(1)) {
  const directory = path.join(root, 'data/i18n/reviewed', locale.code);
  const mergedPages = {};
  for (const name of pageBatchNames) {
    const batch = JSON.parse(fs.readFileSync(path.join(directory, name), 'utf8'));
    assert.equal(batch.locale, locale.code, `${locale.code}/${name}: locale.`);
    assert.equal(batch.qualityStatus, 'reviewed', `${locale.code}/${name}: reviewed state.`);
    assert.deepEqual(batch.routes, routes, `${locale.code}/${name}: exact page routes.`);
    assert.deepEqual(batch.reviewProvenance, batchProvenance, `${locale.code}/${name}: honest non-independent provenance.`);
    for (const [source, target] of Object.entries(batch.translations)) {
      assert(requiredPages.has(source), `${locale.code}/${name}: no stale source key.`);
      assert(target.trim(), `${locale.code}/${name}: non-empty translation.`);
      mergedPages[source] = target;
    }
  }
  const searchBatch = JSON.parse(fs.readFileSync(path.join(directory, searchBatchName), 'utf8'));
  assert.equal(searchBatch.locale, locale.code, `${locale.code}: search locale.`);
  assert.equal(searchBatch.qualityStatus, 'reviewed', `${locale.code}: search review state.`);
  assert.deepEqual(searchBatch.routes, ['/data/search-index.json'], `${locale.code}: search batch scope.`);
  assert.deepEqual(searchBatch.reviewProvenance, batchProvenance, `${locale.code}: search provenance.`);
  assert(Object.values(searchBatch.translations).every((value) => value.trim()), `${locale.code}: all search translations are non-empty.`);
  const localSearch = jsonMap(fs.readFileSync(path.join(root, locale.prefix.slice(1), 'data/search-index.json'), 'utf8'));
  for (const route of routes) {
    const html = fs.readFileSync(routeFile(route, locale.prefix), 'utf8');
    const doc = parse(html);
    assert.equal(attrs(one(doc, (node) => node.tagName === 'html')).lang, locale.code, `${locale.code} ${route}: language.`);
    assert.equal(attrs(one(doc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical')).href, `https://tripdistill.com${locale.prefix}${route}`, `${locale.code} ${route}: canonical.`);
    assert(html.includes(locale.date), `${locale.code} ${route}: localized review date.`);
    assert.equal(jsonLd(doc).find((record) => record['@type'] === 'Article')?.dateModified, isoDate, `${locale.code} ${route}: localized article date.`);
    assert(locale.script.test(mainText(html)), `${locale.code} ${route}: localized body script.`);
    const summary = currentSearch.get(route)?.summary;
    assert(searchBatch.translations[summary] || mergedPages[summary], `${locale.code} ${route}: translated search summary key exists.`);
    assert.equal(localSearch.get(`${locale.prefix}${route}`)?.summary, searchBatch.translations[summary] || mergedPages[summary], `${locale.code} ${route}: search summary matches a reviewed batch.`);
  }
}

const changedAssets = git(['diff', '--name-only', base, sourceTerminal, '--', 'assets/images']).trim();
assert.equal(changedAssets, '', 'The Canberra source branch changes no image or SVG asset.');
assert.equal(git(['ls-files', '--others', '--exclude-standard', '--', 'assets/images']).trim(), '', 'No untracked image or SVG asset was added.');

console.log(`Canberra gap regression passed (${sourceBranch ? 'source' : 'integration'} mode): exact source bodies, four existing routes, +4,036 main-text words, Hokkaido/Otaru floor, unchanged URL inventories, four search records, 20 five-language dates and reviewed translation provenance.`);
