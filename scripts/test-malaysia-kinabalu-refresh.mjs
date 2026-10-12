#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { malaysiaDepthGuides, imageCredits } from '../data/malaysia-depth-guides.mjs';
import { integrationRoutes, integrationSearchRoutes, integrationSprintBaseline, localizedIntegrationSitemapRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const outputRoot = process.argv.includes('--dist') ? path.join(root, 'dist') : root;
const baseCommit = '3605d757281f3e2bd4e23acb4503815cb86c092a';
const reviewDate = '2026-10-12';
const routes = [
  '/malaysia/',
  '/malaysia/kinabalu-park-kundasang/',
  '/malaysia/kinabalu-park-kundasang/park-headquarters-botanical-garden/',
  '/malaysia/kinabalu-park-kundasang/mount-kinabalu-summit/',
  '/malaysia/kinabalu-park-kundasang/kundasang-ranau/',
  '/malaysia/kinabalu-park-kundasang/poring-hot-springs/'
];
const locales = [
  { code: 'en', dir: '', prefix: '', date: /12 October 2026/, script: null },
  { code: 'zh-Hant', dir: 'zh', prefix: '/zh', date: /2026\s*年\s*10\s*月\s*12\s*日/, script: /[\u3400-\u9fff]/gu },
  { code: 'ja', dir: 'ja', prefix: '/ja', date: /2026\s*年\s*10\s*月\s*12\s*日/, script: /[\u3040-\u30ff\u3400-\u9fff]/gu },
  { code: 'ko', dir: 'ko', prefix: '/ko', date: /2026\s*년\s*10\s*월\s*12\s*일/, script: /[\uac00-\ud7af]/gu },
  { code: 'th', dir: 'th', prefix: '/th', date: /12\s+ตุลาคม\s+2026/, script: /[\u0e00-\u0e7f]/gu }
];
const selected = new Set(routes);
const guideByUrl = new Map(malaysiaDepthGuides.map((guide) => [guide.url, guide]));
const fragments = new Map([
  [routes[0], ['9 nights', '12 nights', '15 nights', 'Sabah base comparison', 'Padang Merdeka', 'George Town']],
  [routes[1], ['Park Headquarters', 'Kundasang', 'Ranau', 'Padang Merdeka', 'Four days · three base nights', 'return separately']],
  [routes[2], ['Silau-Silau Trail', 'Botanical Garden', 'confirmed open that day', 'Park Headquarters', 'last-mile ride']],
  [routes[3], ['Timpohon Gate', 'mountain accommodation', 'registration time', 'recovery night', 'cancellation or rebooking']],
  [routes[4], ['Kundasang War Memorial', 'public garden path', 'separate road legs', 'Return before the cloud']],
  [routes[5], ['Poring entrance', 'Canopy Walkway', 'hot-spring', 'separate lower-elevation road day', 'Return to the same base']]
]);
const faqCounts = new Map([[routes[0], 4], [routes[1], 6], ...routes.slice(2).map((route) => [route, 3])]);

function gitBytes(spec) {
  return execFileSync('git', ['show', spec], { cwd: root, maxBuffer: 64 * 1024 * 1024 });
}
function gitPaths(args) {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim().split('\n').filter(Boolean);
}
function readJson(file) { return JSON.parse(fs.readFileSync(file, 'utf8')); }
function hash(bytes) { return crypto.createHash('sha256').update(bytes).digest('hex'); }
function walk(node, visit) {
  visit(node);
  for (const child of node.childNodes || []) walk(child, visit);
}
function attrs(node) { return Object.fromEntries((node.attrs || []).map(({ name, value }) => [name, value])); }
function textWithin(html, wantedId = 'main-content') {
  const document = parse(html);
  const pieces = [];
  const visit = (node, inMain = false) => {
    const isMain = node.tagName === 'main' && attrs(node).id === wantedId;
    const active = inMain || isMain;
    if (active && node.nodeName === '#text') pieces.push(node.value || '');
    if (active && ['script', 'style'].includes(node.tagName)) return;
    for (const child of node.childNodes || []) visit(child, active);
  };
  visit(document);
  return pieces.join(' ').replace(/\s+/g, ' ').trim();
}
function localHtmlPath(prefix, route) {
  return path.join(outputRoot, prefix, route.slice(1), 'index.html');
}
function graph(html, route) {
  const document = parse(html);
  const scripts = [];
  walk(document, (node) => {
    if (node.tagName === 'script' && attrs(node).type === 'application/ld+json') scripts.push(node);
  });
  assert.equal(scripts.length, 1, `${route}: exactly one JSON-LD script`);
  return JSON.parse(scripts[0].childNodes[0].value)['@graph'];
}
function sitemapRows(raw) {
  assert.match(raw, /^<\?xml version="1\.0" encoding="UTF-8"\?>[\s\S]*<\/urlset>\s*$/, 'sitemap XML is complete');
  return new Map([...raw.matchAll(/<url><loc>(.*?)<\/loc><lastmod>(.*?)<\/lastmod>/gs)].map(([, url, date]) => [url, date]));
}
function normalizeEnglishRoute(file) {
  const suffix = file.replace(/^malaysia\//, '').replace(/index\.html$/, '');
  return `/malaysia/${suffix}`;
}

const baseMalaysiaFiles = gitPaths(['ls-tree', '-r', '--name-only', baseCommit, '--', 'malaysia']).filter((file) => /(?:^|\/)index\.html$/.test(file));
const currentMalaysiaFiles = gitPaths(['ls-files', '--', 'malaysia']).filter((file) => /(?:^|\/)index\.html$/.test(file));
const baseMalaysiaRoutes = baseMalaysiaFiles.map(normalizeEnglishRoute).sort();
const currentMalaysiaRoutes = currentMalaysiaFiles.map(normalizeEnglishRoute).sort();
assert.equal(baseMalaysiaRoutes.length, 71, 'MY14 base contains 71 English Malaysia routes');
assert.deepEqual(currentMalaysiaRoutes, baseMalaysiaRoutes, 'Malaysia route inventory remains the original 71 routes');

const changedMalaysiaBodies = currentMalaysiaFiles.filter((file) => !gitBytes(`${baseCommit}:${file}`).equals(fs.readFileSync(path.join(root, file)))).map(normalizeEnglishRoute).sort();
assert.deepEqual(changedMalaysiaBodies, [...selected].sort(), 'only the six confirmed incomplete Malaysia bodies changed');

const currentSitemap = sitemapRows(fs.readFileSync(path.join(outputRoot, 'sitemap.xml'), 'utf8'));
const baseSitemap = sitemapRows(gitBytes(`${integrationSprintBaseline}:sitemap.xml`).toString('utf8'));
assert.equal(currentSitemap.size, 4560, 'sitemap retains 4,560 localized URLs');
assert.deepEqual(new Set(currentSitemap.keys()), new Set(baseSitemap.keys()), 'no URL was added or removed');
const selectedLocalizedPaths = localizedIntegrationSitemapRoutes(locales.map(({ prefix }) => prefix));
const changedDates = [...currentSitemap].filter(([url, date]) => baseSitemap.get(url) !== date).map(([url]) => new URL(url).pathname);
assert.equal(integrationRoutes.length, 258, 'the exact UK, Australia, France, Italy, Switzerland, Canada and Malaysia source route scope contains 258 existing English pages');
assert.deepEqual(new Set(changedDates), selectedLocalizedPaths, 'only the exact integrated UK, France, Italy, Switzerland, Canada and Malaysia routes changed lastmod');
for (const route of selectedLocalizedPaths) assert.equal(currentSitemap.get(`https://tripdistill.com${route}`), reviewDate, `${route}: sitemap date`);

const sourceSearch = readJson(path.join(outputRoot, 'data/search-index.json'));
const baseSourceSearch = readJsonFromGit(`${integrationSprintBaseline}:data/search-index.json`);
const byUrl = (rows) => new Map(rows.map((row) => [row.url, row]));
const sourceByUrl = byUrl(sourceSearch);
const baseSourceByUrl = byUrl(baseSourceSearch);
assert.equal(sourceSearch.length, 955, 'English search keeps 955 records');
assert.deepEqual(new Set(sourceByUrl.keys()), new Set(baseSourceByUrl.keys()), 'English search URL inventory is unchanged');
const sourceChangedSearch = [...sourceByUrl].filter(([url, row]) => JSON.stringify(row) !== JSON.stringify(baseSourceByUrl.get(url))).map(([url]) => url);
assert.deepEqual(new Set(sourceChangedSearch), new Set(integrationSearchRoutes), 'only the exact integrated UK, France, Italy, Switzerland, Canada and Malaysia search records changed');

const wordDeltas = [];
const imageRefs = new Set();
for (const locale of locales) {
  const localeSearchPath = path.join(outputRoot, locale.dir, 'data/search-index.json');
  const localeSearch = readJson(localeSearchPath);
  const localeByUrl = byUrl(localeSearch);
  assert.equal(localeSearch.length, 955, `${locale.code}: search keeps 955 records`);
  const expectedSearchUrls = new Set(sourceSearch.map((row) => `${locale.prefix}${row.url}`));
  assert.deepEqual(new Set(localeByUrl.keys()), expectedSearchUrls, `${locale.code}: localized search route set matches English`);

  for (const route of routes) {
    const localizedRoute = locale.prefix + route;
    const html = fs.readFileSync(localHtmlPath(locale.dir, route), 'utf8');
    const main = textWithin(html);
    const schema = graph(html, localizedRoute);
    const guide = schema.find((entry) => entry['@type'] === 'TravelGuide');
    const faq = schema.find((entry) => entry['@type'] === 'FAQPage');
    assert.ok(guide, `${localizedRoute}: TravelGuide schema exists`);
    assert.equal(guide.dateModified, reviewDate, `${localizedRoute}: schema date is current`);
    assert.match(main, locale.date, `${localizedRoute}: localized review date is visible in the article`);
    assert.doesNotMatch(main, /\[UNTRANSLATED\]/, `${localizedRoute}: no untranslated marker`);
    assert.equal(faq?.mainEntity?.length, faqCounts.get(route), `${localizedRoute}: FAQ schema has the visible route-specific count`);
    if (locale.code !== 'en') {
      assert.ok(main.match(locale.script)?.length >= 20, `${localizedRoute}: substantive body uses the target script`);
      assert.notEqual(localeByUrl.get(localizedRoute)?.title, sourceByUrl.get(route)?.title, `${localizedRoute}: search title is localized`);
      assert.notEqual(localeByUrl.get(localizedRoute)?.summary, sourceByUrl.get(route)?.summary, `${localizedRoute}: search summary is localized`);
      assert.notDeepEqual(localeByUrl.get(localizedRoute)?.keywords, sourceByUrl.get(route)?.keywords, `${localizedRoute}: search keywords are localized`);
    } else {
      for (const fragment of fragments.get(route)) assert.ok(main.includes(fragment), `${route}: substantive route content includes “${fragment}”`);
      const sourceHtml = fs.readFileSync(path.join(root, route.slice(1), 'index.html'), 'utf8');
      const oldHtml = gitBytes(`${baseCommit}:${route.slice(1)}index.html`).toString('utf8');
      const oldWords = textWithin(oldHtml).split(/\s+/).length;
      const newWords = textWithin(sourceHtml).split(/\s+/).length;
      assert.ok(newWords > oldWords, `${route}: body adds substantive text`);
      wordDeltas.push(`${route} +${newWords - oldWords}`);
      assert.ok(sourceByUrl.get(route)?.summary, `${route}: English search record exists`);

      const parsed = parse(sourceHtml);
      const routeGuide = guideByUrl.get(route);
      if (routeGuide) {
        const hero = [];
        walk(parsed, (node) => { if (node.tagName === 'img' && attrs(node).src === routeGuide.image.src) hero.push(node); });
        assert.ok(hero.length, `${route}: recorded lead image is present`);
        assert.ok(attrs(hero[0]).alt?.length > 24, `${route}: lead image has descriptive alt text`);
        assert.ok(sourceHtml.includes(routeGuide.image.source) && sourceHtml.includes(routeGuide.image.creator) && sourceHtml.includes(routeGuide.image.license), `${route}: lead image retains its visible source credit`);
      }
      walk(parsed, (node) => {
        if (node.tagName !== 'img') return;
        const src = attrs(node).src || '';
        if (!src.startsWith('/') || src.startsWith('//') || src.startsWith('/data:')) return;
        const assetPath = src.slice(1).split(/[?#]/)[0];
        const currentAsset = path.join(root, assetPath);
        if (!fs.existsSync(currentAsset)) return;
        const baseAsset = gitBytes(`${baseCommit}:${assetPath}`);
        assert.equal(hash(fs.readFileSync(currentAsset)), hash(baseAsset), `${assetPath}: route image bytes are unchanged`);
        imageRefs.add(assetPath);
      });
    }
  }
}

for (const key of ['kinabaluPeak', 'kinabaluVillage', 'kinabaluTrail']) {
  const photo = imageCredits[key];
  assert.ok(photo?.source && photo?.creator && photo?.license, `${key}: source-page credit exists`);
  const assetPath = photo.src.replace(/^\//, '');
  assert.equal(hash(fs.readFileSync(path.join(root, assetPath))), hash(gitBytes(`${baseCommit}:${assetPath}`)), `${assetPath}: photo bytes match MY14 base`);
}

console.log(`${process.argv.includes('--dist') ? 'dist' : 'source'} Malaysia MY15 refresh passed: six pre-existing routes × five editions; 30 dates; 955 search records per edition; unchanged 71-route Malaysia inventory and 4,560-URL sitemap; unchanged route images.`);
console.log(`English <main> delta vs ${baseCommit}: ${wordDeltas.join('; ')} words (total +${wordDeltas.reduce((total, row) => total + Number(row.match(/\+(\d+)/)?.[1] || 0), 0)}).`);
console.log(`Local image files referenced by these pages: ${[...imageRefs].length}; all file bytes match the exact base.`);

function readJsonFromGit(spec) { return JSON.parse(gitBytes(spec).toString('utf8')); }
