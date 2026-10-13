#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { postIntegrationPhuQuocRoutes, followingVietnamNhaTrangRoutes, followingVietnamAfterNhaTrangRoutes, followingVietnamSouthernGapsRoutes, followingVietnamBayGapsRoutes, followingVietnamCavesIslandsGapsRoutes, followingVietnamCoastalGapsRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baselineCommit = 'cc6de926e49c81324d09cb02590366fefbd8a4eb';
const sourceTerminal = '01144e03bf6173f468cb836d0899163e1a98c4ea';
const initialAtlasCommit = '8a1ada3b4021d077fd468c9c318d91823177c0cb';
const origin = 'https://tripdistill.com';
const routes = [
  '/vietnam/phong-nha-ke-bang/',
  '/vietnam/phong-nha-ke-bang/son-river-phong-nha-cave/',
  '/vietnam/phong-nha-ke-bang/chay-river-dark-cave/',
  '/vietnam/phong-nha-ke-bang/nuoc-mooc-forest-springs/'
];
const editions = [
  { code: 'en', prefix: '' },
  { code: 'zh-Hant', prefix: '/zh' },
  { code: 'ja', prefix: '/ja' },
  { code: 'ko', prefix: '/ko' },
  { code: 'th', prefix: '/th' }
];
const editDate = '2026-10-13';
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
    if (node.tagName && ['script', 'style', 'svg', 'noscript', 'nav'].includes(node.tagName)) return;
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
  return pieces.join('').replace(/\s+/g, ' ').trim()
    .replace(/\b(?:reviewed|editorial review)\s*:?\s+\d{1,2}\s+(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b/gi, '')
    .replace(/\s+/g, ' ').trim();
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
assert.equal(git(['rev-parse', `${sourceTerminal}^1`]).trim(), baselineCommit, 'Phong Nha source terminal has the exact authorized parent.');
assert.equal(git(['rev-parse', `${sourceTerminal}^{tree}`]).trim(), '97cf53203b697ca824ba86dbffd86b8ae9af5d10', 'Phong Nha source terminal has the verified tree.');
assert.deepEqual(
  git(['diff', '--name-only', baselineCommit, sourceTerminal, '--', 'vietnam']).trim().split('\n').filter(Boolean).sort(),
  routes.map((route) => `${route.slice(1)}index.html`).sort(),
  'Phong Nha source terminal changes exactly the four selected existing English bodies.'
);
for (const route of routes) {
  const repoPath = `${route.slice(1)}index.html`;
  const initial = bodyText(readAt(initialAtlasCommit, repoPath));
  const base = bodyText(readAt(baselineCommit, repoPath));
  const current = bodyText(fs.readFileSync(fileForRoute(route), 'utf8'));
  const initialHash = sha256(initial);
  const baseHash = sha256(base);
  const currentHash = sha256(current);
  assert.equal(initialHash, baseHash, `${route}: body had already changed before this sprint.`);
  assert.notEqual(currentHash, baseHash, `${route}: visible body is unchanged from the requested base.`);
  assert.equal(currentHash, sha256(bodyText(readAt(sourceTerminal, repoPath))), `${route}: current body matches the exact Phong Nha source terminal.`);
  const baseWords = base.split(/\s+/).filter(Boolean).length;
  const currentWords = current.split(/\s+/).filter(Boolean).length;
  assert.ok(currentWords - baseWords >= 350, `${route}: expected a substantive body change; got ${currentWords - baseWords} words.`);
  bodyChecks.push({ url: route, baseWords, currentWords, bodyWordDelta: currentWords - baseWords, initialMainTextSha256: initialHash, baseMainTextSha256: baseHash, currentMainTextSha256: currentHash });
}

const changedVietnamFiles = git(['diff', '--name-only', baselineCommit, '--', 'vietnam']).trim().split('\n').filter(Boolean).sort();
const expectedVietnamFiles = [...new Set([...routes, ...postIntegrationPhuQuocRoutes, ...followingVietnamNhaTrangRoutes, ...followingVietnamAfterNhaTrangRoutes, ...followingVietnamSouthernGapsRoutes, ...followingVietnamBayGapsRoutes, ...followingVietnamCavesIslandsGapsRoutes, ...followingVietnamCoastalGapsRoutes].map((route) => `${route.slice(1)}index.html`).concat(['vietnam/ho-chi-minh-city/index.html', 'vietnam/mekong-delta/index.html']))].sort();
assert.deepEqual(changedVietnamFiles, expectedVietnamFiles, 'Only the previously scoped Vietnam routes and exact southern follow-on pages/hubs may differ.');

const baseSearch = JSON.parse(readAt(baselineCommit, 'data/search-index.json'));
const currentSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
assert.equal(baseSearch.length, 955);
assert.equal(currentSearch.length, 955);
const byUrl = (records) => new Map(records.map((record) => [record.url, record]));
const baseSearchByUrl = byUrl(baseSearch);
const currentSearchByUrl = byUrl(currentSearch);
assert.deepEqual([...currentSearchByUrl.keys()].sort(), [...baseSearchByUrl.keys()].sort(), 'English search URL set changed.');
const changedSearchRoutes = [...currentSearchByUrl]
  .filter(([url, record]) => JSON.stringify(record) !== JSON.stringify(baseSearchByUrl.get(url)))
  .map(([url]) => url).sort();
assert.deepEqual(changedSearchRoutes.filter((route) => route.startsWith('/vietnam/')), [...routes, ...postIntegrationPhuQuocRoutes, ...followingVietnamNhaTrangRoutes, ...followingVietnamAfterNhaTrangRoutes, ...followingVietnamSouthernGapsRoutes, ...followingVietnamBayGapsRoutes, ...followingVietnamCavesIslandsGapsRoutes, ...followingVietnamCoastalGapsRoutes].sort(), 'Only the exact historic Vietnam route groups and separately recorded Bay-gaps search records may change after this source base.');
const sourceSearch = JSON.parse(readAt(sourceTerminal, 'data/search-index.json'));
const sourceBaseSearch = JSON.parse(readAt(baselineCommit, 'data/search-index.json'));
const sourceSearchByUrl = byUrl(sourceSearch);
const sourceBaseSearchByUrl = byUrl(sourceBaseSearch);
assert.deepEqual(
  [...sourceSearchByUrl].filter(([url, record]) => JSON.stringify(record) !== JSON.stringify(sourceBaseSearchByUrl.get(url))).map(([url]) => url).sort(),
  [...routes].sort(),
  'Phong Nha source search delta is exactly the four selected routes.'
);
for (const route of routes) assert.deepEqual(currentSearchByUrl.get(route), sourceSearchByUrl.get(route), `${route}: integrated English search record matches the exact source terminal.`);

const baseSitemap = parseSitemap(readAt(baselineCommit, 'sitemap.xml'));
const currentSitemap = parseSitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560);
assert.equal(currentSitemap.size, 4560);
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set changed.');
const sourceExpectedDatePaths = new Set(editions.flatMap(({ prefix }) => routes.map((route) => `${prefix}${route}`)));
const expectedDatePaths = new Set(editions.flatMap(({ prefix }) => [...routes, ...postIntegrationPhuQuocRoutes, ...followingVietnamNhaTrangRoutes, ...followingVietnamAfterNhaTrangRoutes, ...followingVietnamSouthernGapsRoutes, ...followingVietnamBayGapsRoutes, ...followingVietnamCavesIslandsGapsRoutes, ...followingVietnamCoastalGapsRoutes].map((route) => `${prefix}${route}`)));
const changedDatePaths = [...currentSitemap]
  .filter(([url, date]) => baseSitemap.get(url) !== date)
  .map(([url]) => url).sort();
const sourceSitemap = parseSitemap(readAt(sourceTerminal, 'sitemap.xml'));
const sourceBaseSitemap = parseSitemap(readAt(baselineCommit, 'sitemap.xml'));
assert.deepEqual(
  [...sourceSitemap].filter(([url, date]) => sourceBaseSitemap.get(url) !== date).map(([url]) => url).sort(),
  [...sourceExpectedDatePaths].sort(),
  'Phong Nha source sitemap delta is exactly four routes across five editions.'
);
for (const pagePath of expectedDatePaths) assert.equal(currentSitemap.get(pagePath), editDate, `${pagePath}: sitemap date`);

for (const route of routes) {
  const sourceSearch = currentSearchByUrl.get(route);
  assert(sourceSearch.summary, `${route}: English search summary missing.`);
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
    for (const other of editions) assert.equal(alternates.get(other.code), `${other.prefix}${route}`, `${edition.code} ${route}: ${other.code} alternate`);
    assert.equal(alternates.get('x-default'), route, `${edition.code} ${route}: x-default`);
    assert.equal(articleDate(html, pagePath), editDate, `${edition.code} ${route}: Article.dateModified`);
  }
}

for (const edition of editions.slice(1)) {
  const catalog = JSON.parse(fs.readFileSync(path.join(root, `data/i18n/${edition.code}.json`), 'utf8')).translations;
  const localizedIndex = JSON.parse(fs.readFileSync(path.join(root, edition.prefix.slice(1), 'data/search-index.json'), 'utf8'));
  assert.equal(localizedIndex.length, 955, `${edition.code} search record count`);
  for (const route of routes) {
    const source = currentSearchByUrl.get(route);
    const localizedPath = `${edition.prefix}${route}`;
    const localized = localizedIndex.find((record) => record.url === localizedPath);
    assert(localized, `${edition.code} search record missing for ${route}.`);
    for (const field of ['title', 'summary', 'type']) {
      assert(catalog[source[field]]?.trim(), `${edition.code} search source key lacks a translation: ${field} ${route}`);
      assert.equal(localized[field], catalog[source[field]], `${edition.code} localized search field does not match the reviewed translation: ${field} ${route}`);
    }
  }
}

const previouslyUpdated = '/vietnam/phong-nha-ke-bang/paradise-tien-son-caves/';
const historicalBaseBody = bodyText(readAt(baselineCommit, `${previouslyUpdated.slice(1)}index.html`));
const historicalInitialBody = bodyText(readAt(initialAtlasCommit, `${previouslyUpdated.slice(1)}index.html`));
const historicalCurrentBody = bodyText(fs.readFileSync(fileForRoute(previouslyUpdated), 'utf8'));
const historicalExclusion = {
  url: previouslyUpdated,
  reason: 'Substantive route body was already refreshed on 12 October 2026; keep it outside this follow-on batch.',
  initialMainTextSha256: sha256(historicalInitialBody),
  baseMainTextSha256: sha256(historicalBaseBody),
  currentMainTextSha256: sha256(historicalCurrentBody)
};
assert.notEqual(historicalExclusion.initialMainTextSha256, historicalExclusion.baseMainTextSha256, 'Previously refreshed Paradise/Tien Son route must remain a historical exclusion.');
assert.equal(historicalExclusion.currentMainTextSha256, historicalExclusion.baseMainTextSha256, 'Previously refreshed Paradise/Tien Son route must remain unchanged in this sprint.');

console.log('Phong Nha refresh regression passed: four bodies were unchanged at exact base cc6de926 and each gained at least 350 visible words; historically refreshed Paradise/Tien Son was excluded and untouched; search records match the English summaries; five-language canonical, hreflang, dates, and exactly 4,560 sitemap URLs are intact.');
console.log(JSON.stringify(bodyChecks, null, 2));
console.log(JSON.stringify({ excludedHistoricalRoutes: [historicalExclusion] }, null, 2));
