#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parse } from 'parse5';
import { canadaAtlanticNorthClusters } from '../data/canada-atlantic-north-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = 'cf9ae1b90a1e8e44ecd806b3b3aa5bd8735542f3';
const originalCanadaAddition = '239ad32f';
const locales = ['', '/zh', '/ja', '/ko', '/th'];
const cluster = canadaAtlanticNorthClusters.find((item) => item.slug === 'prince-edward-island');
assert.ok(cluster, 'Prince Edward Island cluster must exist.');
const routes = [
  '/canada/prince-edward-island/',
  '/canada/prince-edward-island/charlottetown/',
  '/canada/prince-edward-island/cavendish-north-shore/',
  '/canada/prince-edward-island/coastal-drives/'
];
assert.deepEqual([`/canada/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)], routes);
assert.equal(cluster.reviewDate, '12 October 2026');
assert.equal(cluster.isoDate, '2026-10-12');
assert.equal(cluster.guides.length, 3);
for (const guide of cluster.guides) {
  assert.equal(guide.routeChoices?.options.length, 3, `${guide.url}: provide three distinct route choices.`);
  assert.ok(guide.sources?.length >= 5, `${guide.url}: route-specific official source panel is required.`);
  assert.ok(guide.sources.every(([url, label]) => url.startsWith('https://') && label.trim()), `${guide.url}: source links must be HTTPS and labeled.`);
  assert.ok(guide.faq?.length >= 4, `${guide.url}: practical FAQs are required.`);
  assert.equal(guide.stages?.length, 4, `${guide.url}: provide a four-step route sequence.`);
  assert.equal(guide.watch?.length, 3, `${guide.url}: list three route failure points.`);
}
assert.ok(cluster.faq.length >= 4);
assert.equal(cluster.firstVisitPlan.days.length, 3);
assert.ok(cluster.season.includes('12 October 2026'));
assert.ok(cluster.sources.length >= 6);
assert.match(cluster.guides[0].summary, /Province House is closed for conservation work/);
assert.match(cluster.guides[1].verify, /high visitation in 2026/);
assert.match(cluster.guides[2].summary, /475 km/);

function gitShow(spec) {
  const result = spawnSync('git', ['show', spec], { cwd: root, encoding: 'utf8' });
  assert.equal(result.status, 0, `Could not read ${spec}: ${result.stderr}`);
  return result.stdout;
}
function sourcePeiBlock(source) {
  const start = source.indexOf("slug: 'prince-edward-island'");
  const end = source.indexOf("slug: 'newfoundland-labrador'", start);
  assert.ok(start >= 0 && end > start, 'Historical PEI source boundaries must be present.');
  return source.slice(start, end);
}
const baseModel = gitShow(`${base}:data/canada-atlantic-north-guides.mjs`);
const originalModel = gitShow(`${originalCanadaAddition}:data/canada-atlantic-north-guides.mjs`);
assert.equal(
  sourcePeiBlock(baseModel),
  sourcePeiBlock(originalModel),
  'The selected PEI source block must match its original Canada-collection addition; it was untouched in CA06–CA14.'
);
for (const route of routes) gitShow(`${base}:${route.slice(1)}index.html`);

const previousSearch = JSON.parse(gitShow(`${base}:data/search-index.json`));
const search = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const previousCanada = previousSearch.filter((item) => item.url.startsWith('/canada/'));
const canada = search.filter((item) => item.url.startsWith('/canada/'));
const targetSet = new Set(routes);
assert.equal(canada.length, 73, 'Canada search must retain 73 existing routes.');
assert.equal(new Set(canada.map((item) => item.url)).size, 73, 'Canada search URLs must remain unique.');
assert.deepEqual(canada.map((item) => item.url).sort(), previousCanada.map((item) => item.url).sort(), 'The Canada URL set must remain exactly 73 existing routes.');
assert.deepEqual(
  search.filter((item) => !targetSet.has(item.url)),
  previousSearch.filter((item) => !targetSet.has(item.url)),
  'Only the four selected PEI search records may change.'
);
for (const route of routes) {
  const current = canada.find((item) => item.url === route);
  const previous = previousSearch.find((item) => item.url === route);
  assert.ok(current?.summary?.trim() && current.summary.length >= 120, `${route}: search summary must be substantial.`);
  assert.notEqual(current.summary, previous?.summary, `${route}: search summary must reflect revised route choices.`);
}
assert.match(canada.find((item) => item.url === routes[0]).summary, /Cavendish–North Rustico/);
assert.match(canada.find((item) => item.url === routes[3]).summary, /North Cape/);
assert.match(canada.find((item) => item.url === routes[3]).summary, /475 km/);

const previousSitemap = gitShow(`${base}:sitemap.xml`);
const readDates = (source) => new Map([...source.matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)].map((match) => [match[1], match[2]]));
const previousDates = readDates(previousSitemap);
const dates = readDates(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.deepEqual([...dates.keys()].sort(), [...previousDates.keys()].sort(), 'The sitemap URL set must remain unchanged.');
const expectedDateChanges = locales.flatMap((locale) => routes.map((route) => locale + route)).sort();
const actualDateChanges = [...dates].filter(([route, date]) => previousDates.get(route) !== date).map(([route]) => route).sort();
assert.deepEqual(actualDateChanges, expectedDateChanges, 'Only the four selected routes × five editions may change sitemap dates.');
for (const route of expectedDateChanges) assert.equal(dates.get(route), '2026-10-12', `${route}: lastmod must be 12 October 2026.`);

function collectText(node, output = []) {
  if (node.nodeName === '#text') output.push(node.value);
  if (node.tagName === 'script' || node.tagName === 'style') return output;
  for (const child of node.childNodes || []) collectText(child, output);
  return output;
}
function findTag(node, tagName) {
  if (node.tagName === tagName) return node;
  for (const child of node.childNodes || []) {
    const found = findTag(child, tagName);
    if (found) return found;
  }
}
function mainWords(html, route) {
  const document = parse(html);
  const main = findTag(document, 'main');
  assert.ok(main, `${route}: page must have a main landmark.`);
  return collectText(main).join(' ').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean).length;
}
function articleSchema(html, route) {
  const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  const graph = scripts.flatMap((match) => {
    let data;
    try { data = JSON.parse(match[1]); }
    catch { assert.fail(`${route}: malformed JSON-LD.`); }
    return data['@graph'] || [data];
  });
  return graph.find((item) => item['@type'] === 'Article');
}

const deltas = [];
for (const route of routes) {
  const relative = `${route.slice(1)}index.html`;
  const current = fs.readFileSync(path.join(root, relative), 'utf8');
  const previous = gitShow(`${base}:${relative}`);
  const delta = mainWords(current, route) - mainWords(previous, route);
  assert.ok(delta > 50, `${route}: body copy needs a substantial increase (got ${delta}).`);
  deltas.push(`${route}: +${delta} visible English main-body words`);
  for (const locale of locales) {
    const localizedRoute = locale + route;
    const localizedFile = path.join(root, localizedRoute.slice(1), 'index.html');
    assert.ok(fs.existsSync(localizedFile), `${localizedRoute}: localized page must exist.`);
    const localized = fs.readFileSync(localizedFile, 'utf8');
    assert.ok(localized.includes(`rel="canonical" href="https://tripdistill.com${localizedRoute}"`), `${localizedRoute}: canonical URL mismatch.`);
    assert.ok(localized.includes(`hreflang="en"`), `${localizedRoute}: English hreflang must be present.`);
    if (locale) assert.ok(localized.includes(`lang="${locale === '/zh' ? 'zh-Hant' : locale.slice(1)}"`), `${localizedRoute}: html language mismatch.`);
    assert.equal(articleSchema(localized, localizedRoute)?.dateModified, cluster.isoDate, `${localizedRoute}: Article dateModified mismatch.`);
  }
}

const localizedSearches = [['zh', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
for (const [directory, locale] of localizedSearches) {
  const localizedSearch = JSON.parse(fs.readFileSync(path.join(root, directory, 'data/search-index.json'), 'utf8'));
  const localizedCanada = localizedSearch.filter((item) => item.url.startsWith(`${locale}/canada/`));
  assert.equal(localizedCanada.length, 73, `${locale}: localized Canada search must retain 73 routes.`);
  assert.equal(new Set(localizedCanada.map((item) => item.url)).size, 73, `${locale}: localized Canada search URLs must be unique.`);
  for (const route of routes) {
    const localized = localizedCanada.find((item) => item.url === `${locale}${route}`);
    assert.ok(localized?.summary?.trim() && localized.summary.length >= 80, `${locale}${route}: localized search summary must be present.`);
  }
}

const changedCanadaPages = spawnSync('git', ['diff', '--name-only', base, '--', 'canada'], { cwd: root, encoding: 'utf8' });
assert.equal(changedCanadaPages.status, 0, `Could not inspect English Canada page diff: ${changedCanadaPages.stderr}`);
assert.deepEqual(
  changedCanadaPages.stdout.trim().split('\n').filter(Boolean).sort(),
  routes.map((route) => `${route.slice(1)}index.html`).sort(),
  'Only the four selected English Canada pages may change.'
);

console.log(`CA15 route/date/search regression passed: four pre-existing PEI routes with source-block proof of no prior editorial refresh; 73 unchanged Canada URLs; exactly 20 localized sitemap dates updated; five-edition canonical/Article metadata and translated search summaries verified. ${deltas.join('; ')}.`);
