#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { parse } from 'parse5';

const root = path.resolve(import.meta.dirname, '..');
const branch = git(['branch', '--show-current']).trim();
const sourceBranch = branch === 'codex/sprint-au-broome-content-20261013';
const integrationBranch = branch === 'codex/integration-sprint-20261011';
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

const expectedHtml = routes.map((route) => `${route.slice(1)}index.html`).sort();
const changedHtml = git(['diff', '--name-only', base, '--', 'australia']).split(/\r?\n/u).filter((name) => name.endsWith('/index.html')).sort();
assert.deepEqual(changedHtml, expectedHtml, 'Only the four Broome hub and child HTML routes changed.');
for (const route of untouchedRoutes) git(['diff', '--quiet', base, '--', route]);

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
assert.equal(currentSearch.size, 955, 'Current English search index keeps 955 records.');
assert.deepEqual([...currentSearch.keys()].sort(), [...baseSearch.keys()].sort(), 'Search URL set is unchanged.');
const changedSearch = [...currentSearch.keys()].filter((url) => (sourceBranch || url.startsWith('/australia/')) && JSON.stringify(currentSearch.get(url)) !== JSON.stringify(baseSearch.get(url))).sort();
assert.deepEqual(changedSearch, [...routes].sort(), 'Only four Broome search records changed in the relevant source scope.');
const terminalSearch = searchMap(git(['show', `8baea8a720ebd88ff6834e60235e29c03343c4c4:data/search-index.json`]));
for (const route of routes) assert.deepEqual(currentSearch.get(route), terminalSearch.get(route), `${route}: integrated search record matches the exact Broome source terminal.`);

const baseSitemap = sitemapMap(git(['show', `${base}:sitemap.xml`]));
const currentSitemap = sitemapMap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560, 'Base sitemap has 4,560 URLs.');
assert.equal(currentSitemap.size, 4560, 'Current sitemap keeps 4,560 URLs.');
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set is unchanged.');
const datedRoutes = routes.flatMap((route) => ['', ...locales.map((locale) => locale.prefix)].map((prefix) => `${prefix}${route}`)).sort();
const changedDates = [...currentSitemap.keys()].filter((url) => (sourceBranch || new URL(url, 'https://tripdistill.com').pathname.includes('/australia/')) && currentSitemap.get(url) !== baseSitemap.get(url)).sort();
assert.deepEqual(changedDates, datedRoutes, 'Only four routes × five language editions received new lastmod dates in the relevant source scope.');
for (const route of datedRoutes) assert.equal(currentSitemap.get(route), isoDate, `${route}: sitemap lastmod.`);

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
assert.equal(git(['ls-files', '--others', '--exclude-standard', '--', 'assets/images']).trim(), '', 'No untracked image or SVG asset exists.');

console.log('Australia Broome content regression passed: exact base and four-route scope; unchanged Kununurra/Purnululu; Japan Hokkaido/Otaru content floors; five-language pages and search; four-route Article/sitemap dates; 4,560 unchanged sitemap URLs; and preserved arrow SVG correction. Source/markup checks only; no rendered UI or pixel review.');
