#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { parse } from 'parse5';
import { SaxesParser } from 'saxes';
import { postIntegrationAustraliaRoutes, postIntegrationCanberraRoutes, postIntegrationAlpsMargaretRoutes, postIntegrationMargaretRemainingRoutes, postIntegrationBroomeRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = '19bd73df24866ac49389fdf4ccb572e91cc422f6';
const sourceTerminal = '31fc43817cd436e2f868058f4393ed59a800aec8';
const isoDate = '2026-10-12';
const routes = [
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
const locales = [
  { code: 'en', prefix: '', script: /[A-Za-z]/u, date: 'reviewed 12 October 2026' },
  { code: 'zh-Hant', prefix: '/zh', script: /[\u3400-\u9fff]/u, date: '2026 年 10 月 12 日' },
  { code: 'ja', prefix: '/ja', script: /[\u3040-\u30ff\u3400-\u9fff]/u, date: '2026年10月12日' },
  { code: 'ko', prefix: '/ko', script: /[\uac00-\ud7af]/u, date: '2026년 10월 12일' },
  { code: 'th', prefix: '/th', script: /[\u0e00-\u0e7f]/u, date: '12 ตุลาคม 2026' }
];
const issues = [];
const deltas = [];

function check(condition, message) {
  if (!condition) issues.push(message);
}

function git(args) {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
}

function fileFor(route, prefix = '') {
  return path.join(root, `${prefix}${route}`.replace(/^\//, ''), 'index.html');
}

function attrs(node) {
  return Object.fromEntries((node?.attrs || []).map(({ name, value }) => [name, value]));
}

function findAll(node, predicate, results = []) {
  if (predicate(node)) results.push(node);
  for (const child of node.childNodes || []) findAll(child, predicate, results);
  return results;
}

function findNode(node, predicate) {
  if (predicate(node)) return node;
  for (const child of node.childNodes || []) {
    const found = findNode(child, predicate);
    if (found) return found;
  }
  return null;
}

function textContent(node) {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value;
  if (['script', 'style', 'svg'].includes(node.tagName)) return '';
  return (node.childNodes || []).map(textContent).join(' ');
}

function editorialText(html) {
  const doc = parse(html);
  const main = findNode(doc, (node) => node.tagName === 'main' && attrs(node).id === 'main-content');
  const parts = [];
  function walk(node) {
    if (node.nodeName === '#text') { parts.push(node.value); return; }
    if (['script', 'style', 'svg'].includes(node.tagName)) return;
    const a = attrs(node);
    const classes = (a.class || '').split(/\s+/);
    if (classes.some((name) => ['sources', 'au-hub-directory', 'au-related-grid', 'au-related-card'].includes(name))) return;
    if (a['aria-label'] === 'Advertisement') return;
    for (const child of node.childNodes || []) walk(child);
  }
  if (main) walk(main);
  return parts.join(' ').replace(/\s+/g, ' ').trim();
}

function articleFaqAndImages(html) {
  const doc = parse(html);
  const htmlElement = findNode(doc, (node) => node.tagName === 'html');
  const canonical = findNode(doc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical');
  const main = findNode(doc, (node) => node.tagName === 'main' && attrs(node).id === 'main-content');
  const jsonLd = findAll(doc, (node) => node.tagName === 'script' && attrs(node)['type'] === 'application/ld+json')
    .map((node) => (node.childNodes || []).map((child) => child.value || '').join(''))
    .map((value) => { try { return JSON.parse(value); } catch { return null; } })
    .find(Boolean);
  const graph = jsonLd?.['@graph'] || [];
  const article = graph.find((item) => item['@type'] === 'Article');
  const faq = graph.find((item) => item['@type'] === 'FAQPage');
  const visibleFaq = findAll(doc, (node) => node.tagName === 'details').map((details) => {
    const summary = findNode(details, (node) => node.tagName === 'summary');
    const answer = findNode(details, (node) => node.tagName === 'div' && attrs(node).class === 'faq-answer');
    return {
      question: textContent(summary).replace(/\s+/g, ' ').trim(),
      answer: textContent(answer).replace(/\s+/g, ' ').trim()
    };
  });
  const images = findAll(main, (node) => node.tagName === 'img').map((node) => attrs(node));
  const sources = findAll(main, (node) => node.tagName === 'link' || node.tagName === 'a')
    .filter((node) => node.tagName === 'a').map((node) => attrs(node).href).filter(Boolean);
  return { htmlElement, canonical, article, faq, visibleFaq, images, sources };
}

function wordCount(text) {
  return text.split(/\s+/u).filter(Boolean).length;
}

function sitemapEntries(xml) {
  const entries = [];
  let current = null;
  let active = '';
  const parser = new SaxesParser({ xmlns: true });
  parser.on('opentag', ({ local }) => { active = local; if (local === 'url') current = {}; });
  parser.on('text', (value) => {
    if (!current) return;
    if (active === 'loc') current.loc = (current.loc || '') + value;
    if (active === 'lastmod') current.lastmod = (current.lastmod || '') + value;
  });
  parser.on('closetag', ({ local }) => { if (local === 'url') { entries.push(current); current = null; } });
  parser.write(xml).close();
  return new Map(entries.map(({ loc, lastmod }) => [new URL(loc).pathname, lastmod]));
}

function readBase(relativePath) {
  return git(['show', `${base}:${relativePath}`]);
}

const mergeHead = spawnSync('git', ['rev-parse', '--verify', 'MERGE_HEAD'], { cwd: root, encoding: 'utf8' });
const sourceInHead = spawnSync('git', ['merge-base', '--is-ancestor', sourceTerminal, 'HEAD'], { cwd: root }).status === 0;
const sourceInCurrentMerge = mergeHead.status === 0 && spawnSync('git', ['merge-base', '--is-ancestor', sourceTerminal, 'MERGE_HEAD'], { cwd: root }).status === 0;
check(sourceInHead || sourceInCurrentMerge, 'The exact pixel-corrected AU source terminal must be in the current integration history.');
check(git(['merge-base', base, sourceTerminal]).trim() === base, 'AU gap source must descend from its exact authorized base.');

const changedEnglish = git(['diff', '--name-only', base, '--', 'australia'])
  .split(/\r?\n/u).filter((name) => name.endsWith('/index.html')).sort();
const expectedEnglish = [...routes, ...laterAdelaidePerthRoutes, ...postIntegrationAustraliaRoutes, ...postIntegrationCanberraRoutes, ...postIntegrationAlpsMargaretRoutes, ...postIntegrationMargaretRemainingRoutes, ...postIntegrationBroomeRoutes].map((route) => `${route.slice(1)}index.html`).sort();
check(changedEnglish.join('|') === expectedEnglish.join('|'), `English route file scope differs: ${changedEnglish.join(', ')}`);

for (const route of routes) {
  const relative = `${route.slice(1)}index.html`;
  const html = fs.readFileSync(path.join(root, relative), 'utf8');
  check(html === git(['show', `${sourceTerminal}:${relative}`]), `${route}: English source page must match the pixel-corrected source terminal.`);
  const oldHtml = readBase(relative);
  const delta = wordCount(editorialText(html)) - wordCount(editorialText(oldHtml));
  deltas.push({ route, words: delta });
  check(delta >= 300, `${route}: body increase was only ${delta} words from the exact branch source.`);

  const source = articleFaqAndImages(html);
  check(attrs(source.htmlElement).lang === 'en', `${route}: English lang attribute changed.`);
  check(attrs(source.canonical).href === `https://tripdistill.com${route}`, `${route}: canonical changed.`);
  check(source.article?.mainEntityOfPage === `https://tripdistill.com${route}`, `${route}: Article URL changed.`);
  check(source.article?.dateModified === isoDate, `${route}: Article dateModified is not ${isoDate}.`);
  check(source.faq?.mainEntity?.length === source.visibleFaq.length, `${route}: visible and structured FAQ counts differ.`);
  const structuredFaq = (source.faq?.mainEntity || []).map((item) => ({ question: item.name, answer: item.acceptedAnswer?.text }));
  check(JSON.stringify(structuredFaq) === JSON.stringify(source.visibleFaq), `${route}: visible and structured FAQ content differs.`);
  check(html.includes('Planning facts and image licenses were reviewed on 12 October 2026'), `${route}: English verification date is missing.`);

  const old = articleFaqAndImages(oldHtml);
  check(source.images.map((image) => image.src).join('|') === old.images.map((image) => image.src).join('|'), `${route}: page image source scope changed.`);
  for (const image of source.images) {
    if (!image.src || !image.src.startsWith('/assets/')) continue;
    const currentBytes = fs.readFileSync(path.join(root, image.src.slice(1)));
    const oldBytes = execFileSync('git', ['show', `${base}:${image.src.slice(1)}`], { cwd: root, encoding: undefined, maxBuffer: 32 * 1024 * 1024 });
    check(currentBytes.equals(oldBytes), `${route}: image bytes changed for ${image.src}.`);
  }

  for (const locale of locales) {
    const localizedPath = fileFor(route, locale.prefix);
    check(fs.existsSync(localizedPath), `${locale.code}: localized page is missing at ${localizedPath}.`);
    if (!fs.existsSync(localizedPath)) continue;
    const localizedHtml = fs.readFileSync(localizedPath, 'utf8');
    const page = articleFaqAndImages(localizedHtml);
    check(attrs(page.htmlElement).lang === locale.code, `${locale.code}: lang attribute is wrong for ${route}.`);
    check(attrs(page.canonical).href === `https://tripdistill.com${locale.prefix}${route}`, `${locale.code}: canonical URL is wrong for ${route}.`);
    check(page.article?.dateModified === isoDate, `${locale.code}: Article dateModified is stale for ${route}.`);
    check(page.visibleFaq.length === source.visibleFaq.length, `${locale.code}: visible FAQ count differs for ${route}.`);
    check(localizedHtml.includes(locale.date), `${locale.code}: visible review date is missing for ${route}.`);
    const alternates = findAll(parse(localizedHtml), (node) => node.tagName === 'link' && attrs(node).rel === 'alternate');
    for (const target of locales) {
      check(alternates.some((node) => attrs(node).hreflang === target.code && attrs(node).href === `https://tripdistill.com${target.prefix}${route}`), `${locale.code}: ${target.code} hreflang is missing for ${route}.`);
    }
    const baseImageBytes = source.images.map((image) => image.src).join('|');
    check(page.images.map((image) => image.src).join('|') === baseImageBytes, `${locale.code}: localized page image source changed for ${route}.`);
  }
}

const baseSearch = JSON.parse(readBase('data/search-index.json'));
const currentSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const baseSearchByUrl = new Map(baseSearch.map((record) => [record.url, record]));
const currentSearchByUrl = new Map(currentSearch.map((record) => [record.url, record]));
check(baseSearchByUrl.size === currentSearchByUrl.size && [...baseSearchByUrl.keys()].sort().join('|') === [...currentSearchByUrl.keys()].sort().join('|'), 'Search URL set/count changed.');
const changedSearch = [...currentSearchByUrl.keys()].filter((url) => url.startsWith('/australia/') && JSON.stringify(currentSearchByUrl.get(url)) !== JSON.stringify(baseSearchByUrl.get(url))).sort();
check(changedSearch.join('|') === [...routes, ...laterAdelaidePerthRoutes, ...postIntegrationAustraliaRoutes, ...postIntegrationCanberraRoutes, ...postIntegrationAlpsMargaretRoutes, ...postIntegrationMargaretRemainingRoutes, ...postIntegrationBroomeRoutes].sort().join('|'), `Australia search changes escaped the exact Melbourne/Ocean, Adelaide/Perth and later Australia route scope: ${changedSearch.join(', ')}`);

const localesForBatches = locales.slice(1);
for (const locale of localesForBatches) {
  const directory = path.join(root, 'data', 'i18n', 'reviewed', locale.code);
  const pageBatch = JSON.parse(fs.readFileSync(path.join(directory, 'zzzzzzzz-au-melbourne-ocean-pages-20261012.json'), 'utf8'));
  const searchBatch = JSON.parse(fs.readFileSync(path.join(directory, 'zzzzzzzz-au-melbourne-ocean-search-20261012.json'), 'utf8'));
  check(pageBatch.qualityStatus === 'reviewed' && pageBatch.routes.join('|') === routes.join('|'), `${locale.code}: reviewed page batch route scope/status differs.`);
  check(searchBatch.qualityStatus === 'reviewed' && searchBatch.routes.join('|') === '/data/search-index.json', `${locale.code}: search batch route scope/status differs.`);
  const expectedSearchKeys = routes.flatMap((route) => {
    const record = currentSearchByUrl.get(route);
    const originalKeywords = new Set(baseSearchByUrl.get(route)?.keywords || []);
    return [record.summary, ...(record.keywords || []).filter((keyword) => !originalKeywords.has(keyword))];
  });
  check([...Object.keys(searchBatch.translations)].sort().join('|') === [...expectedSearchKeys].sort().join('|'), `${locale.code}: search translation delta includes unrelated or missing keys.`);
  check(Object.values(pageBatch.translations).every((value) => typeof value === 'string' && value.trim()), `${locale.code}: page batch has blank translations.`);

  const localizedSearchPath = path.join(root, locale.prefix.slice(1), 'data/search-index.json');
  check(fs.existsSync(localizedSearchPath), `${locale.code}: generated localized search index is missing.`);
  if (fs.existsSync(localizedSearchPath)) {
    const localizedSearch = JSON.parse(fs.readFileSync(localizedSearchPath, 'utf8'));
    const localizedByUrl = new Map(localizedSearch.map((record) => [record.url, record]));
    for (const route of routes) {
      const sourceRecord = currentSearchByUrl.get(route);
      const localizedRecord = localizedByUrl.get(`${locale.prefix}${route}`);
      check(Boolean(localizedRecord), `${locale.code}: localized search route is missing: ${route}`);
      if (!localizedRecord) continue;
      check(localizedRecord.summary === searchBatch.translations[sourceRecord.summary], `${locale.code}: localized search summary is stale: ${route}`);
      for (const sourceKeyword of sourceRecord.keywords || []) {
        if (!searchBatch.translations[sourceKeyword]) continue;
        check((localizedRecord.keywords || []).includes(searchBatch.translations[sourceKeyword]), `${locale.code}: translated search keyword is missing (${sourceKeyword}): ${route}`);
      }
    }
  }
}

const baseSitemap = sitemapEntries(readBase('sitemap.xml'));
const currentSitemap = sitemapEntries(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
check(baseSitemap.size === 4560 && currentSitemap.size === 4560, `Expected 4560 sitemap URLs, got ${baseSitemap.size}/${currentSitemap.size}.`);
check([...baseSitemap.keys()].sort().join('|') === [...currentSitemap.keys()].sort().join('|'), 'Sitemap URL set changed.');
const expectedChanged = [...routes, ...laterAdelaidePerthRoutes, ...postIntegrationAustraliaRoutes, ...postIntegrationCanberraRoutes, ...postIntegrationAlpsMargaretRoutes, ...postIntegrationMargaretRemainingRoutes, ...postIntegrationBroomeRoutes].flatMap((route) => locales.map((locale) => `${locale.prefix}${route}`)).sort();
const actualChanged = [...currentSitemap.keys()].filter((url) => expectedChanged.includes(url) && baseSitemap.get(url) !== currentSitemap.get(url)).sort();
check(actualChanged.join('|') === expectedChanged.join('|'), `Sitemap lastmod changes escaped four routes/five languages: ${actualChanged.join(', ')}`);
for (const url of expectedChanged) {
  const expectedDate = [...postIntegrationAlpsMargaretRoutes, ...postIntegrationMargaretRemainingRoutes, ...postIntegrationBroomeRoutes].some((route) => url.endsWith(route)) ? '2026-10-13' : isoDate;
  check(currentSitemap.get(url) === expectedDate, `${url}: lastmod date is wrong.`);
}

if (issues.length) {
  console.error('Melbourne/Ocean gap regression failed:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  for (const delta of deltas) console.log(`${delta.route}: +${delta.words} main-content words.`);
  console.log('Melbourne/Ocean gap regression passed: its exact four-route source delta plus later Adelaide/Perth search/date scope, 5-language dates/URL/search sync, unchanged photos, FAQ/schema parity and 4560-URL sitemap scope.');
}
