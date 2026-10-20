#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const root = path.resolve(import.meta.dirname, '..');
const baselineCommit = '92996ef6631fb3775f1bf4f996292059b4aeca83';
const initialAtlasCommit = '8a1ada3b4021d077fd468c9c318d91823177c0cb';
const origin = 'https://tripdistill.com';
const routes = [
  '/vietnam/ho-chi-minh-city/',
  '/vietnam/ho-chi-minh-city/district-1-colonial-core/',
  '/vietnam/ho-chi-minh-city/cho-lon-binh-tay/',
  '/vietnam/ho-chi-minh-city/cu-chi-tunnels/'
];
const editions = [
  { code: 'en', prefix: '' },
  { code: 'zh-Hant', prefix: '/zh' },
  { code: 'ja', prefix: '/ja' },
  { code: 'ko', prefix: '/ko' },
  { code: 'th', prefix: '/th' }
];
const baseDate = '2026-10-13';
const fileForRoute = (route) => path.join(root, `${route.slice(1)}index.html`);
const git = (args, encoding = 'utf8') => execFileSync('git', args, { cwd: root, encoding });
const readAt = (commit, repoPath) => git(['show', `${commit}:${repoPath}`]);
const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex');
const attr = (node, name) => node.attrs?.find((item) => item.name === name)?.value || '';
const classList = (node) => attr(node, 'class').split(/\s+/).filter(Boolean);
const walk = (node, visit) => {
  visit(node);
  for (const child of node.childNodes || []) walk(child, visit);
};
const textContent = (node) => {
  if (node.nodeName === '#text') return node.value;
  return (node.childNodes || []).map(textContent).join(' ');
};

// This comparison is intentionally derived from visible main content, not file dates or existence.
// Keep the same rules for the baseline and current page; review-date-only changes are removed.
function bodyText(html) {
  const document = parse(html);
  let main = null;
  walk(document, (node) => {
    if (node.tagName === 'main' && attr(node, 'id') === 'main-content') main = node;
  });
  assert(main, 'HTML has no #main-content.');
  const pieces = [];
  const textElements = /^(h1|h2|h3|p|li|summary|strong|em|span|small|a|button|figcaption)$/;
  function collect(node) {
    if (node.nodeName === '#text') {
      pieces.push(node.value);
      return;
    }
    if (node.tagName && ['script', 'style', 'svg', 'noscript'].includes(node.tagName)) return;
    if (node.tagName === 'nav') return;
    if (node.attrs?.some((item) => item.name === 'data-ad-slot')) return;
    if (node.tagName === 'section' && classList(node).includes('sources')) return;
    if (node.tagName && textElements.test(node.tagName)) {
      for (const child of node.childNodes || []) collect(child);
      pieces.push(' ');
      return;
    }
    for (const child of node.childNodes || []) collect(child);
  }
  collect(main);
  return pieces.join('')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b(?:reviewed|editorial review)\s*:?\s+\d{1,2}\s+(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function findAll(document, predicate) {
  const matches = [];
  walk(document, (node) => { if (predicate(node)) matches.push(node); });
  return matches;
}

function localizedFile(locale, route) {
  const prefix = editions.find((edition) => edition.code === locale).prefix;
  return path.join(root, `${prefix}${route}`.slice(1) + 'index.html');
}

function parseSitemap(xml) {
  const entries = [...xml.matchAll(/<url>\s*<loc>(.*?)<\/loc>\s*<lastmod>(.*?)<\/lastmod>[\s\S]*?<\/url>/g)]
    .map(([, url, lastmod]) => [new URL(url, origin).pathname, lastmod]);
  const map = new Map(entries);
  assert.equal(map.size, entries.length, 'Sitemap contains duplicate URL paths.');
  return map;
}

function articleDate(html, expectedPath) {
  const document = parse(html);
  const scripts = findAll(document, (node) => node.tagName === 'script' && attr(node, 'type') === 'application/ld+json');
  for (const script of scripts) {
    const raw = (script.childNodes || []).map((node) => node.value || '').join('');
    if (!raw) continue;
    const graph = JSON.parse(raw)['@graph'] || [];
    const article = graph.find((item) => item['@type'] === 'Article' && new URL(item.url, origin).pathname === expectedPath);
    if (article) return article.dateModified;
  }
  return null;
}

const bodyChecks = [];
for (const route of routes) {
  const repoPath = `${route.slice(1)}index.html`;
  const initial = bodyText(readAt(initialAtlasCommit, repoPath));
  const base = bodyText(readAt(baselineCommit, repoPath));
  const current = bodyText(fs.readFileSync(fileForRoute(route), 'utf8'));
  const initialHash = sha256(initial);
  const baseHash = sha256(base);
  const currentHash = sha256(current);
  assert.equal(initialHash, baseHash, `${route}: the body had already changed before this sprint.`);
  assert.notEqual(currentHash, baseHash, `${route}: current visible body is unchanged from the requested base.`);
  const baseWords = base.split(/\s+/).filter(Boolean).length;
  const currentWords = current.split(/\s+/).filter(Boolean).length;
  assert.ok(currentWords - baseWords >= 400, `${route}: expected a substantive body expansion; got ${currentWords - baseWords} words.`);
  bodyChecks.push({ url: route, baseWords, currentWords, bodyWordDelta: currentWords - baseWords, baseMainTextSha256: baseHash, currentMainTextSha256: currentHash });

  const changed = git(['diff', '--name-only', baselineCommit, '--', repoPath]).trim();
  assert.equal(changed, repoPath, `${route}: only its expected English page path should change.`);
}

const baselineSearch = JSON.parse(readAt(baselineCommit, 'data/search-index.json'));
const currentSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
assert.equal(baselineSearch.length, 955);
assert.equal(currentSearch.length, baselineSearch.length + 33, 'Only the 33 English Spain routes may add search records.');
const byUrl = (records) => new Map(records.map((record) => [record.url, record]));
const baseSearchByUrl = byUrl(baselineSearch);
const currentSearchByUrl = byUrl(currentSearch);
const currentNonSpainSearchByUrl = new Map([...currentSearchByUrl].filter(([url]) => !url.startsWith('/spain/')));
const newSpainSearchRoutes = [...currentSearchByUrl.keys()].filter((url) => url.startsWith('/spain/'));
assert.equal(newSpainSearchRoutes.length, 33, 'All 33 English Spain routes should have search records.');
assert.deepEqual([...currentNonSpainSearchByUrl.keys()].filter((url) => !url.includes('/spain/')).sort(), [...baseSearchByUrl.keys()].sort(), 'A non-Spain English search URL changed.');
const changedSearchRoutes = [...currentSearchByUrl]
  .filter(([url, record]) => !url.includes('/spain/') && routes.includes(url) && JSON.stringify(record) !== JSON.stringify(baseSearchByUrl.get(url)))
  .map(([url]) => url)
  .sort();
assert.deepEqual(changedSearchRoutes, [], 'The existing four HCMC search records should remain stable for this body-only refresh.');

const expectedDatePaths = new Set(editions.flatMap(({ prefix }) => routes.map((route) => `${prefix}${route}`)));
const baseSitemap = parseSitemap(readAt(baselineCommit, 'sitemap.xml'));
const currentSitemap = parseSitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560);
assert.equal(currentSitemap.size, baseSitemap.size + 165, 'Only 33 new Spain routes across five editions may add sitemap URLs.');
const baseSitemapPaths = [...baseSitemap.keys()].sort();
const currentNonSpainSitemapPaths = [...currentSitemap.keys()]
  .filter((url) => !url.replace(/^\/(?:zh|ja|ko|th)(?=\/)/u, '').startsWith('/spain/'))
  .sort();
const newSpainSitemapPaths = [...currentSitemap.keys()]
  .filter((url) => url.replace(/^\/(?:zh|ja|ko|th)(?=\/)/u, '').startsWith('/spain/'));
assert.deepEqual(currentNonSpainSitemapPaths, baseSitemapPaths, 'A non-Spain sitemap URL changed.');
assert.equal(newSpainSitemapPaths.length, 165, 'Every new Spain route must be present in each of the five editions.');
const changedDatePaths = [...currentSitemap]
  .filter(([url, date]) => !url.includes('/spain/') && routes.some((route) => url.endsWith(route)) && baseSitemap.get(url) !== date)
  .map(([url]) => url)
  .sort();
assert.deepEqual(changedDatePaths, [...expectedDatePaths].sort(), 'Only the four HCMC routes in five editions may receive new sitemap dates from the exact batch base.');
for (const pagePath of expectedDatePaths) assert.equal(currentSitemap.get(pagePath), baseDate, `${pagePath}: sitemap date`);

for (const route of routes) {
  const englishHtml = fs.readFileSync(fileForRoute(route), 'utf8');
  for (const edition of editions) {
    const pagePath = `${edition.prefix}${route}`;
    const html = edition.code === 'en' ? englishHtml : fs.readFileSync(localizedFile(edition.code, route), 'utf8');
    const document = parse(html);
    const h1s = findAll(document, (node) => node.tagName === 'h1');
    assert.equal(h1s.length, 1, `${edition.code} ${route}: expected one h1.`);
    const canonical = findAll(document, (node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical')[0];
    assert(canonical, `${edition.code} ${route}: canonical is missing.`);
    assert.equal(new URL(attr(canonical, 'href'), origin).pathname, pagePath, `${edition.code} ${route}: canonical path`);
    const links = findAll(document, (node) => node.tagName === 'link' && attr(node, 'rel') === 'alternate');
    const alternates = new Map(links.map((node) => [attr(node, 'hreflang'), new URL(attr(node, 'href'), origin).pathname]));
    assert.deepEqual([...alternates.keys()].sort(), ['en', 'ja', 'ko', 'th', 'x-default', 'zh-Hant'].sort(), `${edition.code} ${route}: hreflang set`);
    for (const other of editions) {
      const target = `${other.prefix}${route}`;
      assert.equal(alternates.get(other.code), target, `${edition.code} ${route}: ${other.code} alternate`);
    }
    assert.equal(alternates.get('x-default'), route, `${edition.code} ${route}: x-default`);
    assert.equal(articleDate(html, pagePath), baseDate, `${edition.code} ${route}: Article.dateModified`);
  }
}

for (const edition of editions.slice(1)) {
  const catalog = JSON.parse(fs.readFileSync(path.join(root, `data/i18n/${edition.code}.json`), 'utf8')).translations;
  const localizedIndex = JSON.parse(fs.readFileSync(path.join(root, edition.prefix.slice(1), 'data/search-index.json'), 'utf8'));
  for (const route of routes) {
    const source = currentSearchByUrl.get(route);
    const localizedPath = `${edition.prefix}${route}`;
    const localized = localizedIndex.find((record) => record.url === localizedPath);
    assert(localized, `${edition.code} search record missing for ${route}.`);
    for (const field of ['title', 'summary', 'type']) {
      assert(catalog[source[field]]?.trim(), `${edition.code} search source key lacks a translation: ${field} ${route}`);
      assert.equal(localized[field], catalog[source[field]], `${edition.code} localized search field does not match its reviewed translation: ${field} ${route}`);
    }
  }
}

console.log(`HCMC refresh regression passed: ${routes.length} unchanged-before/currently-expanded visible bodies, four stable and five-language-covered search records, 20 localized date/canonical/hreflang paths, and 165 new Spain sitemap URLs with every non-Spain URL unchanged.`);
console.log(JSON.stringify(bodyChecks, null, 2));
