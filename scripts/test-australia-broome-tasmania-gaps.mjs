#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { parse } from 'parse5';

const root = path.resolve(import.meta.dirname, '..');
const branch = 'codex/sprint-au-broome-tasmania-gaps-20261013';
const base = '8baea8a720ebd88ff6834e60235e29c03343c4c4';
const sourceTerminal = '335f19b4f3cbc69038ff943a1beec7049c135a2c';
const correction = '768151d3f42378358c122a1cde55100fcec9eafa';
const date = '2026-10-13';
const routes = [
  '/australia/broome-kimberley/kununurra-lake-argyle/',
  '/australia/broome-kimberley/purnululu-bungle-bungle/',
  '/australia/tasmania/',
  '/australia/tasmania/nipaluna-hobart-salamanca/'
];
const locales = [
  { code: 'zh-Hant', prefix: '/zh', date: '2026 年 10 月 13 日', script: /[\u3400-\u9fff]/u },
  { code: 'ja', prefix: '/ja', date: '2026年10月13日', script: /[\u3040-\u30ff\u3400-\u9fff]/u },
  { code: 'ko', prefix: '/ko', date: '2026년 10월 13일', script: /[\uac00-\ud7af]/u },
  { code: 'th', prefix: '/th', date: '13 ตุลาคม 2026', script: /[\u0e00-\u0e7f]/u }
];
const batchProvenance = {
  writer: 'Task assistant; exact runtime model ID unavailable in the selected execution environment.',
  reviewer: 'Same task assistant self-review; non-independent; exact runtime model ID unavailable.',
  independentSecondModel: false
};
const pageBatchName = 'zzzzzzzzzl-au-broome-tasmania-pages-20261013.json';
const searchBatchName = 'zzzzzzzzzm-au-broome-tasmania-search-20261013.json';
const phrases = [
  ['three nights', 'Purnululu', 'Lake Argyle', 'last-mile', 'crocodile', 'reviewed 13 October 2026'],
  ['two nights', 'Spring Creek Track', 'high-clearance 4WD', 'no phone', 'closed', 'reviewed 13 October 2026'],
  ['three nights', '7–9 nights', '12–15 nights', 'Devonport', 'Launceston', 'Hobart', 'reviewed 13 October 2026'],
  ['Battery Point', 'Salamanca Market', 'Kelly’s Steps', 'TMAG', 'Saturday', 'reviewed 13 October 2026']
];
const officialSources = [
  ['https://exploreparks.dbca.wa.gov.au/park/mirima-national-park', 'https://travelmap.mainroads.wa.gov.au/Home/Map', 'https://www.bom.gov.au/wa/forecasts/kimberley.shtml'],
  ['https://exploreparks.dbca.wa.gov.au/park/purnululu-national-park', 'https://travelmap.mainroads.wa.gov.au/Home/Map', 'https://www.bom.gov.au/wa/forecasts/kimberley.shtml'],
  ['https://parks.tas.gov.au/explore-our-parks/know-before-you-go/alerts', 'https://www.transport.tas.gov.au/public_transport', 'https://www.bom.gov.au/tas/forecasts/'],
  ['https://www.tmag.tas.gov.au/visit', 'https://www.salamancamarket.com.au/', 'https://www.metrotas.com.au/planner/']
];

function git(args, binary = false) {
  return execFileSync('git', args, { cwd: root, encoding: binary ? undefined : 'utf8', maxBuffer: 32 * 1024 * 1024 });
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
function text(node) {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value;
  if (['script', 'style', 'noscript', 'svg'].includes(node.tagName)) return '';
  return (node.childNodes || []).map(text).join(' ');
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
function wordCount(value) { return value ? value.split(/\s+/u).length : 0; }
function jsonLd(doc) {
  return all(doc, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json').flatMap((node) => {
    try {
      const data = JSON.parse((node.childNodes || []).map((child) => child.value || '').join(''));
      return data['@graph'] || [data];
    } catch { return []; }
  });
}
function searchMap(raw) { return new Map(JSON.parse(raw).map((entry) => [entry.url, entry])); }
function sitemapMap(raw) {
  const map = new Map();
  for (const [, block] of raw.matchAll(/<url>([\s\S]*?)<\/url>/gu)) {
    const url = block.match(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc>/u)?.[1];
    const lastmod = block.match(/<lastmod>([^<]*)<\/lastmod>/u)?.[1];
    if (url !== undefined && lastmod) map.set(url || '/', lastmod);
  }
  return map;
}
function fileFor(route, prefix = '') { return path.join(root, `${prefix}${route}`.replace(/^\//u, ''), 'index.html'); }

assert.equal(git(['rev-parse', `${sourceTerminal}^1`]).trim(), base, 'Exact AU source terminal parent.');
assert.equal(git(['rev-parse', `${sourceTerminal}^{tree}`]).trim(), '57308daba879626f870eea6c62a57879151ede00', 'Exact AU source terminal tree.');
git(['merge-base', '--is-ancestor', base, sourceTerminal]);
const expectedHtml = routes.map((route) => `${route.slice(1)}index.html`).sort();
const changedHtml = git(['diff', '--name-only', base, sourceTerminal, '--', 'australia']).split(/\r?\n/u).filter((name) => name.endsWith('/index.html')).sort();
assert.deepEqual(changedHtml, expectedHtml, 'Only the four selected English routes changed from the authorized base.');

const hubWords = wordCount(mainText(fs.readFileSync(path.join(root, 'japan/hokkaido/index.html'), 'utf8')));
const guideWords = wordCount(mainText(fs.readFileSync(path.join(root, 'japan/hokkaido/otaru-shakotan/index.html'), 'utf8')));
assert.equal(hubWords, 1397, 'Hokkaido regional-hub source reference.');
assert.equal(guideWords, 1030, 'Otaru local-guide source reference.');
for (const [index, route] of routes.entries()) {
  const html = fs.readFileSync(fileFor(route), 'utf8');
  assert.equal(mainText(html), mainText(git(['show', `${sourceTerminal}:${route.slice(1)}index.html`])), `${route}: current body matches the exact source terminal.`);
  const doc = parse(html);
  assert.equal(attrs(one(doc, (node) => node.tagName === 'html')).lang, 'en', `${route}: lang.`);
  assert.equal(attrs(one(doc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical')).href, `https://tripdistill.com${route}`, `${route}: canonical.`);
  const body = mainText(html);
  assert(wordCount(body) > (index === 2 ? hubWords : guideWords), `${route}: source text exceeds the matching Japan reference.`);
  for (const phrase of phrases[index]) assert(body.toLowerCase().includes(phrase.toLowerCase()), `${route}: itinerary contains ${phrase}.`);
  for (const source of officialSources[index]) assert(html.includes(`href="${source}"`), `${route}: dated official/current source ${source}.`);
  const article = jsonLd(doc).find((record) => record['@type'] === 'Article');
  assert.equal(article?.dateModified, date, `${route}: Article date.`);
  const faq = jsonLd(doc).find((record) => record['@type'] === 'FAQPage');
  const visibleFaq = all(doc, (node) => node.tagName === 'details').map((details) => {
    const question = text(one(details, (node) => node.tagName === 'summary')).replace(/\s+/gu, ' ').trim();
    const answer = text(details).replace(/\s+/gu, ' ').trim().slice(question.length).trim();
    return { question, answer };
  });
  assert(faq?.mainEntity?.length > 0, `${route}: FAQ structured data.`);
  assert.deepEqual(faq.mainEntity.map((record) => ({ question: record.name, answer: record.acceptedAnswer?.text })), visibleFaq, `${route}: FAQ markup and structured data agree.`);
}

const baseSearch = searchMap(git(['show', `${base}:data/search-index.json`]));
const sourceSearch = searchMap(git(['show', `${sourceTerminal}:data/search-index.json`]));
const currentSearch = searchMap(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
assert.equal(currentSearch.size, 955, 'Search records retained.');
assert.deepEqual([...currentSearch.keys()].sort(), [...baseSearch.keys()].sort(), 'Search URL inventory is unchanged.');
assert.deepEqual([...sourceSearch.keys()].filter((url) => JSON.stringify(sourceSearch.get(url)) !== JSON.stringify(baseSearch.get(url))).sort(), [...routes].sort(), 'Exact AU source search delta includes only the four selected records.');
for (const route of routes) assert.deepEqual(currentSearch.get(route), sourceSearch.get(route), `${route}: integrated search record matches the exact source terminal.`);

const baseSitemap = sitemapMap(git(['show', `${base}:sitemap.xml`]));
const sourceSitemap = sitemapMap(git(['show', `${sourceTerminal}:sitemap.xml`]));
const currentSitemap = sitemapMap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(currentSitemap.size, 4560, 'Sitemap retains 4,560 localized URLs.');
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL inventory is unchanged.');
const datedUrls = routes.flatMap((route) => ['', ...locales.map((locale) => locale.prefix)].map((prefix) => `${prefix}${route}`)).sort();
assert.deepEqual([...sourceSitemap.keys()].filter((url) => sourceSitemap.get(url) !== baseSitemap.get(url)).sort(), datedUrls, 'The exact AU source commit dates only four routes × five editions.');
for (const url of datedUrls) assert.equal(currentSitemap.get(url), date, `${url}: sitemap date.`);

for (const locale of locales) {
  const directory = path.join(root, 'data/i18n/reviewed', locale.code);
  const pageBatch = JSON.parse(fs.readFileSync(path.join(directory, pageBatchName), 'utf8'));
  assert.equal(pageBatch.locale, locale.code, `${locale.code}: page locale.`);
  assert.equal(pageBatch.qualityStatus, 'reviewed', `${locale.code}: page batch state.`);
  assert.deepEqual(pageBatch.routes, routes, `${locale.code}: page batch routes.`);
  assert.deepEqual(pageBatch.reviewProvenance, batchProvenance, `${locale.code}: exact runtime and non-independent self-review disclosure.`);
  assert.equal(Object.keys(pageBatch.translations).length, 221, `${locale.code}: new page strings (the shared exit heading reuses the earlier Sandakan-reviewed entry).`);
  assert(Object.values(pageBatch.translations).every((value) => value.trim()), `${locale.code}: no blank page targets.`);
  const searchBatch = JSON.parse(fs.readFileSync(path.join(directory, searchBatchName), 'utf8'));
  assert.equal(searchBatch.qualityStatus, 'reviewed', `${locale.code}: search batch state.`);
  assert.deepEqual(searchBatch.routes, ['/data/search-index.json'], `${locale.code}: search batch route.`);
  assert.deepEqual(searchBatch.reviewProvenance, batchProvenance, `${locale.code}: search provenance.`);
  assert.equal(Object.keys(searchBatch.translations).length, 32, `${locale.code}: search strings.`);
  assert(Object.values(searchBatch.translations).every((value) => value.trim()), `${locale.code}: no blank search targets.`);
  const localSearch = searchMap(fs.readFileSync(path.join(root, locale.prefix.slice(1), 'data/search-index.json'), 'utf8'));
  for (const route of routes) {
    const html = fs.readFileSync(fileFor(route, locale.prefix), 'utf8');
    const doc = parse(html);
    const body = mainText(html);
    assert.equal(attrs(one(doc, (node) => node.tagName === 'html')).lang, locale.code, `${locale.code} ${route}: lang.`);
    assert.equal(attrs(one(doc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical')).href, `https://tripdistill.com${locale.prefix}${route}`, `${locale.code} ${route}: canonical.`);
    assert(body.replace(/\s+/gu, '').includes(locale.date.replace(/\s+/gu, '')), `${locale.code} ${route}: localized visible date.`);
    assert(locale.script.test(body), `${locale.code} ${route}: localized body script.`);
    assert.equal(jsonLd(doc).find((record) => record['@type'] === 'Article')?.dateModified, date, `${locale.code} ${route}: Article date.`);
    const summary = currentSearch.get(route)?.summary;
    const translatedSummary = searchBatch.translations[summary] || pageBatch.translations[summary];
    assert(translatedSummary, `${locale.code} ${route}: translated search summary exists.`);
    assert.equal(localSearch.get(`${locale.prefix}${route}`)?.summary, translatedSummary, `${locale.code} ${route}: translated search summary matches the reviewed batch.`);
  }
}

for (const asset of ['assets/images/australia-kangaroo-island-regional-days.svg', 'assets/images/australia-kings-park-entry-choice.svg']) {
  assert.equal(fs.readFileSync(path.join(root, asset), 'utf8'), git(['show', `${correction}:${asset}`]), `${asset}: earlier parallel arrow correction is unchanged.`);
}
assert.equal(git(['diff', '--name-only', base, sourceTerminal, '--', 'assets/images']).trim(), '', 'No image or SVG changed in the exact AU source commit.');
assert.equal(git(['ls-files', '--others', '--exclude-standard', '--', 'assets/images']).trim(), '', 'No untracked image or SVG exists.');

console.log('Broome/Tasmania gap regression passed: exact checkpoint and four-route scope; Japan editorial floors; dated official sources; five-language page/search/date parity; 4,560 unchanged sitemap URLs; preserved arrow correction and no new SVG. Source/markup checks only; rendered UI remains unverified.');
