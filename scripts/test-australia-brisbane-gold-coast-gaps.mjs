#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { parse } from 'parse5';
import { SaxesParser } from 'saxes';
import { australiaGuides } from '../data/australia-guides.mjs';
import { collectTranslationWork } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const requestedParent = '6aa9321ff72077cf5143516f466add5ca2a830cc';
const taskStart = '7dc3979c38677d3b0994583016a07c3a7a52bcef';
const routes = [
  '/australia/brisbane-moreton-bay/new-farm-fortitude-valley/',
  '/australia/brisbane-moreton-bay/west-end-cultural-precinct/',
  '/australia/gold-coast-scenic-rim/springbrook-national-park/',
  '/australia/gold-coast-scenic-rim/lamington-national-park/'
];
const laterMelbourneOceanRoutes = [
  '/australia/melbourne-port-phillip/fitzroy-carlton-collingwood/',
  '/australia/melbourne-port-phillip/phillip-island/',
  '/australia/great-ocean-road-gariwerd/lorne-waterfalls/',
  '/australia/great-ocean-road-gariwerd/gariwerd-grampians/'
];
const laterAdelaidePerthRoutes = [
  '/australia/adelaide-wine-island/adelaide-hills-hahndorf/',
  '/australia/adelaide-wine-island/kangaroo-island/',
  '/australia/perth-fremantle-rottnest/kings-park/',
  '/australia/perth-fremantle-rottnest/cottesloe-scarborough/'
];
const laterTopEndWhitsundaysRoutes = [
  '/australia/darwin-top-end/darwin-waterfront-city/',
  '/australia/darwin-top-end/katherine-nitmiluk/',
  '/australia/whitsundays-great-barrier-reef/',
  '/australia/whitsundays-great-barrier-reef/townsville-magnetic-island/'
];
const laterCanberraRoutes = [
  '/australia/canberra-australian-alps/',
  '/australia/canberra-australian-alps/parliamentary-triangle/',
  '/australia/canberra-australian-alps/lake-burley-griffin-national-museum/',
  '/australia/canberra-australian-alps/war-memorial-mount-ainslie/'
];
const laterAlpsMargaretRoutes = [
  '/australia/canberra-australian-alps/namadgi-national-park/',
  '/australia/canberra-australian-alps/snowy-mountains-kosciuszko/',
  '/australia/margaret-river-southwest/',
  '/australia/margaret-river-southwest/margaret-river-wine-food/'
];
const latestMargaretRoutes = [
  '/australia/margaret-river-southwest/busselton-dunsborough/',
  '/australia/margaret-river-southwest/cape-naturaliste-coast/',
  '/australia/margaret-river-southwest/boranup-caves-augusta/',
  '/australia/margaret-river-southwest/albany-torndirrup/'
];
const currentBroomeRoutes = [
  '/australia/broome-kimberley/',
  '/australia/broome-kimberley/rubibi-broome-cable-beach/',
  '/australia/broome-kimberley/dampier-peninsula/',
  '/australia/broome-kimberley/gibb-river-road/'
];
const locales = [
  { code: 'en', prefix: '', script: null, date: '12 October 2026' },
  { code: 'zh-Hant', prefix: '/zh', script: /[\u3400-\u9fff]/u, date: '2026 年 10 月 12 日' },
  { code: 'ja', prefix: '/ja', script: /[\u3040-\u30ff\u3400-\u9fff]/u, date: '2026年10月12日' },
  { code: 'ko', prefix: '/ko', script: /[\uac00-\ud7af]/u, date: '2026년 10월 12일' },
  { code: 'th', prefix: '/th', script: /[\u0e00-\u0e7f]/u, date: '12 ตุลาคม 2026' }
];
const pageBatchName = 'zzzzzz-australia-brisbane-gold-coast-gaps-pages-20261012.json';
const searchBatchName = 'zzzzzzz-australia-brisbane-gold-coast-gaps-search-20261012.json';
const isoDate = '2026-10-12';
const preservedEnglishPlaceNames = new Set(['Green Mountains', 'Binna Burra']);

function git(args, binary = false) {
  return execFileSync('git', args, { cwd: root, encoding: binary ? undefined : 'utf8', maxBuffer: 32 * 1024 * 1024 });
}

function pageFile(route, prefix = '') {
  return path.join(root, `${prefix}${route}`.replace(/^\//, ''), 'index.html');
}

function allNodes(node, predicate, output = []) {
  if (predicate(node)) output.push(node);
  for (const child of node.childNodes || []) allNodes(child, predicate, output);
  return output;
}

function firstNode(node, predicate) {
  if (predicate(node)) return node;
  for (const child of node.childNodes || []) {
    const found = firstNode(child, predicate);
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

function mainText(html) {
  const document = parse(html);
  const main = firstNode(document, (node) => node.tagName === 'main' && attrs(node).id === 'main-content');
  assert(main, 'Missing #main-content.');
  const output = [];
  function walk(node) {
    if (node.nodeName === '#text') { output.push(node.value); return; }
    if (['script', 'style', 'svg'].includes(node.tagName)) return;
    const a = attrs(node);
    const classes = (a.class || '').split(/\s+/);
    if (classes.some((name) => ['sources', 'au-related-grid', 'au-related-card'].includes(name)) || a['aria-label'] === 'Advertisement') return;
    for (const child of node.childNodes || []) walk(child);
  }
  walk(main);
  return output.join(' ').replace(/\s+/g, ' ').trim();
}

function articleAndFaq(html) {
  const document = parse(html);
  const json = allNodes(document, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json')
    .map((node) => (node.childNodes || []).map((child) => child.value || '').join(''))
    .map((source) => { try { return JSON.parse(source); } catch { return null; } })
    .find(Boolean);
  const article = json?.['@graph']?.find((item) => item['@type'] === 'Article');
  const faq = json?.['@graph']?.find((item) => item['@type'] === 'FAQPage');
  const visibleFaq = allNodes(document, (node) => node.tagName === 'details').map((details) => ({
    question: textContent(firstNode(details, (node) => node.tagName === 'summary')).replace(/\s+/g, ' ').trim(),
    answer: textContent(firstNode(details, (node) => node.tagName === 'div' && attrs(node).class === 'faq-answer')).replace(/\s+/g, ' ').trim()
  }));
  return { article, faq, visibleFaq };
}

function sitemapEntries(xml) {
  const entries = [];
  let current = null;
  let active = '';
  const parser = new SaxesParser({ xmlns: true });
  parser.on('opentag', (tag) => { active = tag.local; if (tag.local === 'url') current = {}; });
  parser.on('text', (value) => {
    if (!current) return;
    if (active === 'loc') current.loc = (current.loc || '') + value;
    if (active === 'lastmod') current.lastmod = (current.lastmod || '') + value;
  });
  parser.on('closetag', (tag) => { if (tag.local === 'url') { entries.push(current); current = null; } active = ''; });
  parser.write(xml).close();
  assert.equal(entries.length, new Set(entries.map(({ loc }) => loc)).size, 'Sitemap URLs must be unique.');
  return new Map(entries.map(({ loc, lastmod }) => [new URL(loc).pathname, lastmod]));
}

const englishHtml = git(['diff', '--name-only', taskStart, '--', 'australia']).split(/\r?\n/)
  .filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(englishHtml, [...routes, ...laterMelbourneOceanRoutes, ...laterAdelaidePerthRoutes, ...laterTopEndWhitsundaysRoutes, ...laterCanberraRoutes, ...laterAlpsMargaretRoutes, ...latestMargaretRoutes, ...currentBroomeRoutes].map((route) => `${route.slice(1)}index.html`).sort(), 'Only the four authorized Brisbane/Gold Coast bodies and later Melbourne/Ocean, Adelaide/Perth, Top End/Whitsundays, Canberra, and Margaret routes may change from the exact sprint base.');

const baseSearch = JSON.parse(git(['show', `${taskStart}:data/search-index.json`]));
const currentSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const baseSearchByUrl = new Map(baseSearch.map((record) => [record.url, record]));
const currentSearchByUrl = new Map(currentSearch.map((record) => [record.url, record]));
assert.deepEqual([...currentSearchByUrl.keys()].sort(), [...baseSearchByUrl.keys()].sort(), 'Search URL set must remain unchanged.');
const changedSearch = [...currentSearchByUrl.keys()].filter((url) => JSON.stringify(currentSearchByUrl.get(url)) !== JSON.stringify(baseSearchByUrl.get(url))).sort();
assert.deepEqual(changedSearch, [...routes, ...laterMelbourneOceanRoutes, ...laterAdelaidePerthRoutes, ...laterTopEndWhitsundaysRoutes, ...laterCanberraRoutes, ...laterAlpsMargaretRoutes, ...latestMargaretRoutes, ...currentBroomeRoutes].sort(), 'Only the four authorized Brisbane/Gold Coast and later Melbourne/Ocean, Adelaide/Perth, Top End/Whitsundays, Canberra, and Margaret English search records may change.');

const baseSitemap = sitemapEntries(git(['show', `${taskStart}:sitemap.xml`]));
const currentSitemap = sitemapEntries(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set must remain unchanged.');
const changedDatePaths = [...new Set([...baseSitemap.keys(), ...currentSitemap.keys()])]
  .filter((route) => baseSitemap.get(route) !== currentSitemap.get(route)).sort();
const expectedDatePaths = [...routes, ...laterMelbourneOceanRoutes, ...laterAdelaidePerthRoutes, ...laterTopEndWhitsundaysRoutes, ...laterCanberraRoutes, ...laterAlpsMargaretRoutes, ...latestMargaretRoutes, ...currentBroomeRoutes].flatMap((route) => locales.map(({ prefix }) => `${prefix}${route}`)).sort();
assert.deepEqual(changedDatePaths, expectedDatePaths, 'Only the selected Brisbane/Gold Coast, Melbourne/Ocean, Adelaide/Perth, Top End/Whitsundays, and Canberra route/language sitemap dates may change.');
for (const route of expectedDatePaths) assert.equal(currentSitemap.get(route), [...laterAlpsMargaretRoutes, ...latestMargaretRoutes, ...currentBroomeRoutes].some((path) => route.endsWith(path)) ? '2026-10-13' : isoDate, `${route}: sitemap lastmod.`);

const work = new Map(collectTranslationWork().map((record) => [record.route, record]));
const requiredPageKeys = new Set(routes.flatMap((route) => work.get(route).units));
const requiredSearchKeys = new Set(work.get('/data/search-index.json').units);
const routeWords = [];
for (const route of routes) {
  const english = fs.readFileSync(pageFile(route), 'utf8');
  const document = parse(english);
  const htmlRoot = firstNode(document, (node) => node.tagName === 'html');
  assert.equal(attrs(htmlRoot).lang, 'en', `${route}: English language attribute.`);
  const canonical = firstNode(document, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical');
  assert.equal(attrs(canonical).href, `https://tripdistill.com${route}`, `${route}: English canonical URL.`);
  const { article, faq, visibleFaq } = articleAndFaq(english);
  assert.equal(article?.dateModified, isoDate, `${route}: structured modified date.`);
  assert.equal(article?.mainEntityOfPage, `https://tripdistill.com${route}`, `${route}: structured article URL.`);
  assert.deepEqual((faq?.mainEntity || []).map((item) => ({ question: item.name, answer: item.acceptedAnswer?.text })), visibleFaq, `${route}: visible and structured FAQ parity.`);
  assert(english.includes('reviewed 12 October 2026') && english.includes('Planning facts and image licenses were reviewed on 12 October 2026'), `${route}: English review dates.`);
  const priorBody = git(['show', `${taskStart}:${route.slice(1)}index.html`]);
  const requestedBaseBody = git(['show', `${requestedParent}:${route.slice(1)}index.html`]);
  assert.equal(priorBody, requestedBaseBody, `${route}: inherited Cairns correction must not change this selected route before the current batch.`);
  const before = requestedBaseBody;
  const delta = mainText(english).split(/\s+/).filter(Boolean).length - mainText(before).split(/\s+/).filter(Boolean).length;
  assert(delta >= 350, `${route}: expected a substantive body change; gained ${delta} rendered words.`);
  routeWords.push({ route, delta });

  const guide = australiaGuides.find((record) => record.url === route);
  assert(guide, `${route}: route missing from source model.`);
  const image = firstNode(document, (node) => node.tagName === 'img' && attrs(node).src === guide.image.src);
  assert(image && attrs(image).alt?.trim(), `${route}: relevant hero image requires descriptive alt text.`);
  const originalPhoto = git(['show', `${requestedParent}:${guide.image.src.slice(1)}`], true);
  const currentPhoto = fs.readFileSync(path.join(root, guide.image.src.slice(1)));
  assert.deepEqual(crypto.createHash('sha256').update(currentPhoto).digest(), crypto.createHash('sha256').update(originalPhoto).digest(), `${route}: existing photo bytes must remain unchanged.`);
  if (route.endsWith('/new-farm-fortitude-valley/')) assert(/New Farm toward Norman Park/.test(attrs(image).alt), 'New Farm photo alt should describe the actual river subject.');

  const search = currentSearchByUrl.get(route);
  assert(search?.summary && !baseSearchByUrl.get(route)?.summary.includes(search.summary), `${route}: updated English search summary.`);
  assert(requiredSearchKeys.has(search.summary), `${route}: search summary must be a current translation unit.`);

  for (const locale of locales.slice(1)) {
    const translated = fs.readFileSync(pageFile(route, locale.prefix), 'utf8');
    const localDocument = parse(translated);
    assert.equal(attrs(firstNode(localDocument, (node) => node.tagName === 'html')).lang, locale.code, `${locale.code} ${route}: lang attribute.`);
    const localCanonical = firstNode(localDocument, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical');
    assert.equal(attrs(localCanonical).href, `https://tripdistill.com${locale.prefix}${route}`, `${locale.code} ${route}: canonical URL.`);
    assert(translated.includes(locale.date), `${locale.code} ${route}: localized editorial date.`);
    const h1 = textContent(firstNode(localDocument, (node) => node.tagName === 'h1')).replace(/\s+/g, ' ').trim();
    assert(h1 && locale.script.test(h1), `${locale.code} ${route}: localized heading.`);
    const localSchema = articleAndFaq(translated);
    assert.equal(localSchema.article?.dateModified, isoDate, `${locale.code} ${route}: structured modified date.`);
    assert.deepEqual((localSchema.faq?.mainEntity || []).map((item) => ({ question: item.name, answer: item.acceptedAnswer?.text })), localSchema.visibleFaq, `${locale.code} ${route}: FAQ schema parity.`);
  }
}

for (const locale of locales.slice(1)) {
  const directory = path.join(root, 'data/i18n/reviewed', locale.code);
  const pageBatch = JSON.parse(fs.readFileSync(path.join(directory, pageBatchName), 'utf8'));
  assert.equal(pageBatch.locale, locale.code, `${locale.code}: page batch locale.`);
  assert.equal(pageBatch.qualityStatus, 'reviewed', `${locale.code}: page batch must complete Luna review.`);
  assert.deepEqual(pageBatch.routes, routes, `${locale.code}: page batch scope.`);
  assert.equal(Object.keys(pageBatch.translations).length, 203, `${locale.code}: fresh page translation key count after reuse of earlier reviewed translations.`);
  assert(Object.values(pageBatch.translations).every((value) => typeof value === 'string' && value.trim() && (locale.script.test(value) || preservedEnglishPlaceNames.has(value))), `${locale.code}: all page translations must be non-empty and localized, with only these official place names preserved in English: ${[...preservedEnglishPlaceNames].join(', ')}.`);
  for (const source of Object.keys(pageBatch.translations)) assert(requiredPageKeys.has(source), `${locale.code}: page batch contains an out-of-scope source key.`);
  assert.equal(pageBatch.reviewProvenance?.writer, 'GPT-6 Luna requested; runtime identity unverified', `${locale.code}: writer runtime provenance.`);
  assert.equal(pageBatch.reviewProvenance?.reviewer, 'GPT-6 Luna requested; same-model self-review (non-independent); runtime identity unverified', `${locale.code}: reviewer runtime provenance.`);
  assert.equal(pageBatch.reviewProvenance?.independentSecondModel, false, `${locale.code}: no independent-review claim.`);

  const searchBatch = JSON.parse(fs.readFileSync(path.join(directory, searchBatchName), 'utf8'));
  assert.equal(searchBatch.locale, locale.code, `${locale.code}: search batch locale.`);
  assert.equal(searchBatch.qualityStatus, 'reviewed', `${locale.code}: search batch must complete Luna review.`);
  assert.deepEqual(searchBatch.routes, ['/data/search-index.json'], `${locale.code}: search batch scope.`);
  assert.equal(Object.keys(searchBatch.translations).length, 4, `${locale.code}: expected four new search summaries.`);
  assert(Object.values(searchBatch.translations).every((value) => typeof value === 'string' && value.trim() && locale.script.test(value)), `${locale.code}: search translations must be non-empty and localized.`);
  for (const source of Object.keys(searchBatch.translations)) assert(requiredSearchKeys.has(source), `${locale.code}: search batch contains an out-of-scope source key.`);
  const localizedSearch = JSON.parse(fs.readFileSync(path.join(root, locale.prefix.slice(1), 'data/search-index.json'), 'utf8'));
  for (const route of routes) {
    const sourceSummary = currentSearchByUrl.get(route).summary;
    const entry = localizedSearch.find((record) => record.url === `${locale.prefix}${route}`);
    assert.equal(entry?.summary, searchBatch.translations[sourceSummary], `${locale.code} ${route}: localized search summary must match its reviewed batch.`);
  }
}

console.log('Brisbane/Gold Coast gap regression passed: its four bodies plus later Melbourne/Ocean and Adelaide/Perth bodies and search rows; scoped localized sitemap dates; unchanged URL/photo sets; four Brisbane/Gold Coast pages × five editions with canonical, date and FAQ parity; original reviewed page/search batches remain scoped and valid.');
for (const { route, delta } of routeWords) console.log(`${route} +${delta} substantive rendered words from requested parent ${requestedParent.slice(0, 8)}.`);
