#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
import { SaxesParser } from 'saxes';
import { australiaClusters } from '../data/australia-guides.mjs';
import { collectTranslationWork } from './i18n-lib.mjs';
import { postHawaiiNewOrleansRoutes, postNewOrleansAtlantaRoutes, postOctober13Routes } from './integration-sprint-scope.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const base = '99f9f2f1f7d586164c5dd3308711b0346fc5be5b';
const taskBase = 'c7df46be0dc3f40649ff44d672861e971d0c082b';
const priorCairnsBodyCommit = '43551cf59c9f9be20639130970e933c54f10b568';
const cluster = australiaClusters.find(({ slug }) => slug === 'cairns-wet-tropics');
assert(cluster, 'Cairns cluster must exist.');
const routes = [
  '/australia/cairns-wet-tropics/',
  '/australia/cairns-wet-tropics/cairns-esplanade-reef-terminal/',
  '/australia/cairns-wet-tropics/kuranda-rail-skyrail/',
  '/australia/cairns-wet-tropics/northern-beaches-palm-cove/'
];
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
const reviewIsoDate = '2026-10-12';
const reviewDate = '12 October 2026';
const pageBatchName = 'zzzzzg-australia-cairns-pages-20261012.json';
const searchBatchName = 'zzzzzh-australia-cairns-search-20261012.json';
const photoPaths = [
  'assets/images/australia-cairns-wet-tropics-cairns-esplanade-reef-terminal.webp',
  'assets/images/australia-cairns-wet-tropics-kuranda-rail-skyrail.webp',
  'assets/images/australia-cairns-wet-tropics-northern-beaches-palm-cove.webp'
];
const localeScripts = {
  'zh-Hant': /[\u3400-\u9fff]/u,
  ja: /[\u3040-\u30ff\u3400-\u9fff]/u,
  ko: /[\uac00-\ud7af]/u,
  th: /[\u0e00-\u0e7f]/u
};
const localizedReviewDate = {
  'zh-Hant': '2026 年 10 月 12 日',
  ja: '2026年10月12日',
  ko: '2026년 10월 12일',
  th: '12 ตุลาคม 2026'
};

function git(args, binary = false) {
  return execFileSync('git', args, { cwd: root, encoding: binary ? undefined : 'utf8', maxBuffer: 32 * 1024 * 1024 });
}

function pageFile(route, prefix = '') {
  return path.join(root, `${prefix}${route}`.replace(/^\//, ''), 'index.html');
}

function findAll(node, predicate, output = []) {
  if (predicate(node)) output.push(node);
  for (const child of node.childNodes || []) findAll(child, predicate, output);
  return output;
}

function findOne(node, predicate) {
  if (predicate(node)) return node;
  for (const child of node.childNodes || []) {
    const found = findOne(child, predicate);
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
  if (['script', 'style', 'svg'].includes(node.tagName)) return '';
  return (node.childNodes || []).map(textContent).join(' ');
}

function editorialText(html) {
  const document = parse(html);
  const main = findOne(document, (node) => node.tagName === 'main' && attrs(node).id === 'main-content');
  assert(main, 'Missing #main-content.');
  const parts = [];
  function walk(node) {
    if (node.nodeName === '#text') { parts.push(node.value); return; }
    if (['script', 'style', 'svg'].includes(node.tagName)) return;
    const a = attrs(node);
    const classes = (a.class || '').split(/\s+/);
    if (classes.some((name) => ['sources', 'au-hub-directory', 'au-hub-route', 'au-related-grid', 'au-related-card'].includes(name))) return;
    if (a['aria-label'] === 'Advertisement') return;
    for (const child of node.childNodes || []) walk(child);
  }
  walk(main);
  return parts.join(' ').replace(/\s+/g, ' ').trim();
}

function schemaAndVisibleFaq(html) {
  const document = parse(html);
  const json = findAll(document, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json')
    .map((node) => (node.childNodes || []).map((child) => child.value || '').join(''))
    .map((value) => { try { return JSON.parse(value); } catch { return null; } })
    .find(Boolean);
  const article = json?.['@graph']?.find((item) => item['@type'] === 'Article');
  const faq = json?.['@graph']?.find((item) => item['@type'] === 'FAQPage');
  const visibleFaq = findAll(document, (node) => node.tagName === 'details').map((details) => ({
    question: textContent(findOne(details, (node) => node.tagName === 'summary')).replace(/\s+/g, ' ').trim(),
    answer: textContent(findOne(details, (node) => node.tagName === 'div' && attrs(node).class === 'faq-answer')).replace(/\s+/g, ' ').trim()
  }));
  return { article, faq, visibleFaq };
}

function sitemapEntries(xml) {
  const rows = [];
  let current = null;
  let active = '';
  const parser = new SaxesParser({ xmlns: true });
  parser.on('opentag', (tag) => { active = tag.local; if (tag.local === 'url') current = {}; });
  parser.on('text', (value) => {
    if (!current) return;
    if (active === 'loc') current.loc = (current.loc || '') + value;
    if (active === 'lastmod') current.lastmod = (current.lastmod || '') + value;
  });
  parser.on('closetag', (tag) => { if (tag.local === 'url') { rows.push(current); current = null; } active = ''; });
  parser.write(xml).close();
  assert.equal(rows.length, new Set(rows.map(({ loc }) => loc)).size, 'Sitemap locations must remain unique.');
  return new Map(rows.map(({ loc, lastmod }) => [new URL(loc).pathname, lastmod]));
}

const expectedHtml = [...postHawaiiNewOrleansRoutes, ...postNewOrleansAtlantaRoutes, ...postOctober13Routes].map((route) => route.replace(/^\//, '') + 'index.html').sort();
const changedHtml = git(['diff', '--name-only', taskBase, '--']).split(/\r?\n/).filter((name) => name.endsWith('.html')).sort();
assert.deepEqual(changedHtml, expectedHtml, 'From the exact source-task base, only the four authorized New Orleans, four Atlanta, four Florida and four Chicago English pages changed.');
const priorBodyHtml = git(['show', '--pretty=format:', '--name-only', priorCairnsBodyCommit, '--', 'australia/cairns-wet-tropics'])
  .split(/\r?\n/).filter((name) => name.endsWith('.html')).sort();
const priorBodyRoutes = priorBodyHtml.map((name) => '/' + name.replace(/index\.html$/, ''));
const repeatRoutes = routes.filter((route) => priorBodyRoutes.includes(route)).sort();
const newCoverageRoutes = routes.filter((route) => !priorBodyRoutes.includes(route)).sort();
assert.deepEqual(repeatRoutes, [
  '/australia/cairns-wet-tropics/cairns-esplanade-reef-terminal/',
  '/australia/cairns-wet-tropics/kuranda-rail-skyrail/'
], 'Only the Esplanade and Kuranda routes repeat the earlier substantive Cairns batch.');
assert.deepEqual(newCoverageRoutes, [
  '/australia/cairns-wet-tropics/',
  '/australia/cairns-wet-tropics/northern-beaches-palm-cove/'
], 'Only the Cairns hub and Palm Cove are new substantive coverage in this batch.');

const deltas = [];
for (const route of routes) {
  const english = fs.readFileSync(pageFile(route), 'utf8');
  const document = parse(english);
  const htmlRoot = findOne(document, (node) => node.tagName === 'html');
  assert.equal(attrs(htmlRoot).lang, 'en', route + ': English lang attribute.');
  const canonical = findOne(document, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical');
  assert.equal(attrs(canonical).href, 'https://tripdistill.com' + route, route + ': canonical URL.');
  const { article, faq, visibleFaq } = schemaAndVisibleFaq(english);
  assert.equal(article?.dateModified, reviewIsoDate, route + ': structured article date.');
  assert.equal(article?.mainEntityOfPage, 'https://tripdistill.com' + route, route + ': structured article URL.');
  assert.deepEqual((faq?.mainEntity || []).map((item) => ({ question: item.name, answer: item.acceptedAnswer?.text })), visibleFaq, route + ': visible and structured FAQs must agree.');
  assert(english.includes('reviewed ' + reviewDate), route + ': visible review date.');
  assert(english.includes('reviewed on ' + reviewDate), route + ': source-review date.');
  const before = git(['show', `${base}:${route.slice(1)}index.html`]);
  const delta = editorialText(english).split(/\s+/).filter(Boolean).length - editorialText(before).split(/\s+/).filter(Boolean).length;
  assert(delta >= 200, route + ': substantive body gain is only ' + delta + ' words.');
  deltas.push({ route, words: delta });
  for (const [locale, prefix] of locales.slice(1)) {
    const localized = fs.readFileSync(pageFile(route, prefix), 'utf8');
    const localDoc = parse(localized);
    assert.equal(attrs(findOne(localDoc, (node) => node.tagName === 'html')).lang, locale, locale + ' ' + route + ': lang attribute.');
    assert(localized.includes(localizedReviewDate[locale]), locale + ' ' + route + ': localized review date.');
    assert(localeScripts[locale].test(textContent(findOne(localDoc, (node) => node.tagName === 'h1'))), locale + ' ' + route + ': translated heading script.');
    const localSchema = schemaAndVisibleFaq(localized);
    assert.equal(localSchema.article?.dateModified, reviewIsoDate, locale + ' ' + route + ': article date.');
    assert.deepEqual((localSchema.faq?.mainEntity || []).map((item) => ({ question: item.name, answer: item.acceptedAnswer?.text })), localSchema.visibleFaq, locale + ' ' + route + ': visible and structured FAQs must agree.');
    const localCanonical = findOne(localDoc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical');
    assert.equal(attrs(localCanonical).href, 'https://tripdistill.com' + prefix + route, locale + ' ' + route + ': canonical URL.');
  }
}

const pageWork = new Map(collectTranslationWork().map((record) => [record.route, record]));
const requiredPageKeys = new Set(routes.flatMap((route) => pageWork.get(route).units));
const requiredSearchKeys = new Set(pageWork.get('/data/search-index.json').units);
for (const locale of ['zh-Hant', 'ja', 'ko', 'th']) {
  const pageBatch = JSON.parse(fs.readFileSync(path.join(root, 'data/i18n/reviewed', locale, pageBatchName), 'utf8'));
  assert.equal(pageBatch.qualityStatus, 'reviewed', locale + ': page batch review status.');
  assert.deepEqual(pageBatch.routes, routes, locale + ': page batch route scope.');
  assert.equal(Object.keys(pageBatch.translations).length, 125, locale + ': expected current page-key delta.');
  assert(Object.values(pageBatch.translations).every((value) => typeof value === 'string' && value.trim()), locale + ': page translations must be complete.');
  assert.equal(pageBatch.reviewProvenance?.writer, 'GPT-6 Luna (original entries); continuation model unverified', locale + ': original-entry and continuation writer provenance.');
  assert.equal(pageBatch.reviewProvenance?.reviewer, 'GPT-6 Luna same-model self-review (original entries); continuation re-read, model unverified', locale + ': original-entry and continuation review provenance.');
  assert.equal(pageBatch.reviewProvenance?.independentSecondModel, false, locale + ': independent-model field.');
  for (const source of Object.keys(pageBatch.translations)) assert(requiredPageKeys.has(source), locale + ': page batch contains a key outside the four selected routes.');

  const searchBatch = JSON.parse(fs.readFileSync(path.join(root, 'data/i18n/reviewed', locale, searchBatchName), 'utf8'));
  assert.equal(searchBatch.qualityStatus, 'reviewed', locale + ': search batch review status.');
  assert.deepEqual(searchBatch.routes, ['/data/search-index.json'], locale + ': search batch scope.');
  assert.equal(Object.keys(searchBatch.translations).length, 4, locale + ': four route-specific search summaries.');
  assert(Object.values(searchBatch.translations).every((value) => typeof value === 'string' && value.trim() && localeScripts[locale].test(value)), locale + ': search translations must be complete and localized.');
  for (const source of Object.keys(searchBatch.translations)) assert(requiredSearchKeys.has(source), locale + ': search batch contains a key outside the current index.');
}

const englishSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const baseSearch = JSON.parse(git(['show', `${taskBase}:data/search-index.json`]));
const englishSearchByUrl = new Map(englishSearch.map((item) => [item.url, item]));
const baseSearchByUrl = new Map(baseSearch.map((item) => [item.url, item]));
assert.deepEqual([...englishSearchByUrl.keys()].sort(), [...baseSearchByUrl.keys()].sort(), 'Search URL set must remain unchanged.');
const changedSearch = [...englishSearchByUrl.keys()].filter((url) => JSON.stringify(englishSearchByUrl.get(url)) !== JSON.stringify(baseSearchByUrl.get(url))).sort();
assert.deepEqual(changedSearch, [...postHawaiiNewOrleansRoutes, ...postNewOrleansAtlantaRoutes, ...postOctober13Routes].sort(), 'From the exact source-task base, only the four New Orleans, four Atlanta, four Florida and four Chicago search records changed.');
const expectedSearchSummary = new Map([
  ['/australia/cairns-wet-tropics/', cluster.searchSummary],
  ...cluster.guides.filter((guide) => routes.includes(guide.url)).map((guide) => [guide.url, guide.searchSummary])
]);
for (const route of routes) assert.equal(englishSearchByUrl.get(route)?.summary, expectedSearchSummary.get(route), route + ': current English search summary.');
for (const [locale, prefix] of locales.slice(1)) {
  const localizedSearch = JSON.parse(fs.readFileSync(path.join(root, prefix.slice(1), 'data/search-index.json'), 'utf8'));
  const localizedByUrl = new Map(localizedSearch.map((item) => [item.url, item]));
  const batch = JSON.parse(fs.readFileSync(path.join(root, 'data/i18n/reviewed', locale, searchBatchName), 'utf8'));
  for (const route of routes) {
    const sourceSummary = expectedSearchSummary.get(route);
    assert.equal(localizedByUrl.get(prefix + route)?.summary, batch.translations[sourceSummary], `${locale} ${route}: localized search summary must match its reviewed translation batch.`);
  }
}

const baseSitemap = sitemapEntries(git(['show', `${taskBase}:sitemap.xml`]));
const currentSitemap = sitemapEntries(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set must remain unchanged.');
const expectedLastmod = [...postHawaiiNewOrleansRoutes, ...postNewOrleansAtlantaRoutes, ...postOctober13Routes].flatMap((route) => locales.map(([, prefix]) => prefix + route)).sort();
const changedLastmod = [...new Set([...baseSitemap.keys(), ...currentSitemap.keys()])].filter((route) => baseSitemap.get(route) !== currentSitemap.get(route)).sort();
assert.deepEqual(changedLastmod, expectedLastmod, 'From the exact source-task base, only the four New Orleans, four Atlanta, four Florida and four Chicago routes across five editions receive new lastmod dates.');
for (const route of expectedLastmod) assert.equal(currentSitemap.get(route), postOctober13Routes.some((candidate) => route.endsWith(candidate)) ? '2026-10-13' : reviewIsoDate, route + ': sitemap date.');
for (const route of routes) for (const [, prefix] of locales) assert.equal(currentSitemap.get(prefix + route), reviewIsoDate, prefix + route + ': Cairns date remains current.');

for (const file of photoPaths) assert.deepEqual(fs.readFileSync(path.join(root, file)), git(['show', `${base}:${file}`], true), file + ': existing photo bytes must be unchanged.');
const imageManifest = fs.readFileSync(path.join(root, 'data/australia-image-manifest.mjs'), 'utf8');
for (const name of photoPaths.map((file) => path.basename(file))) assert(imageManifest.includes(name), `${name}: image must remain in the established provenance manifest.`);

for (const [route, requiredText] of [
  [routes[1], 'Cairns Museum — visitor information'],
  [routes[1], 'Sunlover — getting to the Reef Fleet Terminal'],
  [routes[2], 'Skyrail — visitor FAQs'],
  [routes[2], 'Kuranda Scenic Railway — Classic Experience'],
  [routes[3], 'Translink — date-specific journey planner and service updates'],
  [routes[3], 'Surf Life Saving Australia — Beachsafe beach information']
]) assert(fs.readFileSync(pageFile(route), 'utf8').includes(requiredText), `${route}: missing targeted official source ${requiredText}.`);

console.log(`Cairns Australia regression passed: four edited routes (+${deltas.map(({ words }) => words).join(', ')} words), two repeat improvements and two new substantive routes, five-language dates/FAQ/canonical parity, exact current-branch New Orleans search/date scope, current Cairns date parity, 125 page keys + four search keys per locale, original Luna provenance and unverified continuation runtime, and unchanged photo bytes.`);
