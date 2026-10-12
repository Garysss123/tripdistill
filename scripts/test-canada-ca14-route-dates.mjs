#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parse } from 'parse5';
import { canadaAtlanticNorthClusters } from '../data/canada-atlantic-north-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = '6a505cc56532c2f008e08b3990b0e8b9436cfe9a';
const sourceTerminal = 'cf9ae1b90a1e8e44ecd806b3b3aa5bd8735542f3';
const englishOnly = process.argv.includes('--english-only');
const cluster = canadaAtlanticNorthClusters.find((item) => item.slug === 'halifax-nova-scotia');
assert.ok(cluster, 'Halifax & Nova Scotia cluster must exist.');
const routes = [
  '/canada/halifax-nova-scotia/',
  '/canada/halifax-nova-scotia/halifax-waterfront-citadel/',
  '/canada/halifax-nova-scotia/peggys-cove-lunenburg/',
  '/canada/halifax-nova-scotia/cape-breton-cabot/'
];
assert.equal(cluster.guides.length, 3);
assert.deepEqual([`/canada/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)], routes);
assert.equal(cluster.reviewDate, '12 October 2026');
assert.equal(cluster.isoDate, '2026-10-12');
for (const guide of cluster.guides) {
  assert.equal(guide.routeChoices?.options.length, 3, `${guide.url}: three clear route choices must be present.`);
  assert.ok(guide.sources?.length >= 4, `${guide.url}: route-specific source panel must be present.`);
  assert.ok(guide.sources.every(([url, label]) => url.startsWith('https://') && label.trim()), `${guide.url}: source links must be secure and labeled.`);
  assert.ok(guide.faq.length >= 4, `${guide.url}: practical FAQs must be present.`);
}
assert.match(cluster.guides[2].faq.find(([question]) => question.includes('reservation'))[1], /26 June through 25 October 2026/);
assert.match(cluster.guides[2].stages[1][1], /MacIntosh Brook, Lone Shieling/);
assert.match(cluster.guides[2].stages[2][1], /6\.5 km.*8\.2 km.*Middle Head.*5\.3 km/s);
assert.match(cluster.guides[0].imageAlt, /Alderney Landing.*Citadel Hill/);
assert.match(cluster.guides[1].imageAlt, /Peggy’s Point Lighthouse.*viewing path/);
assert.match(cluster.guides[2].imageAlt, /Cabot Trail.*Atlantic coast/);

function gitShow(spec) {
  const result = spawnSync('git', ['show', spec], { cwd: root, encoding: 'utf8' });
  assert.equal(result.status, 0, `Could not read ${spec}: ${result.stderr}`);
  return result.stdout;
}
const previousSearch = JSON.parse(gitShow(`${base}:data/search-index.json`));
const sourceSearch = JSON.parse(gitShow(`${sourceTerminal}:data/search-index.json`));
const search = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const targetSet = new Set(routes);
const previousCanada = previousSearch.filter((item) => item.url.startsWith('/canada/'));
const canada = search.filter((item) => item.url.startsWith('/canada/'));
assert.equal(canada.length, 73, 'Canada search must retain 73 existing routes.');
assert.equal(new Set(canada.map((item) => item.url)).size, 73, 'Canada search URLs must remain unique.');
assert.deepEqual(canada.map((item) => item.url).sort(), previousCanada.map((item) => item.url).sort(), 'The 73-route Canada URL set must remain exact.');
assert.deepEqual(sourceSearch.filter((item) => !targetSet.has(item.url)), previousSearch.filter((item) => !targetSet.has(item.url)), 'The exact CA14 source terminal must leave every non-target search record unchanged from its source base.');
assert.deepEqual(canada.filter((item) => targetSet.has(item.url)), sourceSearch.filter((item) => item.url.startsWith('/canada/') && targetSet.has(item.url)), 'Integrated CA14 search records must match the exact source terminal.');
assert.deepEqual(canada.filter((item) => !targetSet.has(item.url)), previousCanada.filter((item) => !targetSet.has(item.url)), 'Only the exact four CA14 Canada search records may differ from the source base.');
assert.equal(canada.find((item) => item.url === routes[0]).summary, previousSearch.find((item) => item.url === routes[0]).summary, 'Keep the hub introduction stable so the Canada country card is not churned.');
for (const route of routes.slice(1)) {
  const record = canada.find((item) => item.url === route);
  assert.ok(record?.summary?.trim() && record.summary.length >= 120, `${route}: search summary must be substantive.`);
  assert.notEqual(record.summary, previousSearch.find((item) => item.url === route)?.summary, `${route}: search summary must reflect revised content.`);
}

const locales = ['', '/zh', '/ja', '/ko', '/th'];
const readDates = (source) => new Map([...source.matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)].map((match) => [match[1], match[2]]));
const dates = readDates(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
const previousDates = readDates(gitShow(`${base}:sitemap.xml`));
const sourceDates = readDates(gitShow(`${sourceTerminal}:sitemap.xml`));
assert.deepEqual([...sourceDates.keys()].sort(), [...previousDates.keys()].sort(), 'The CA14 source terminal must retain the exact CA13 sitemap URL set.');
assert.deepEqual([...dates.keys()].sort(), [...previousDates.keys()].sort(), 'The sitemap URL set must not change.');
const expectedSourceDateChanges = locales.flatMap((locale) => routes.map((route) => locale + route)).sort();
const actualSourceDateChanges = [...sourceDates].filter(([route, date]) => previousDates.get(route) !== date).map(([route]) => route).sort();
assert.deepEqual(actualSourceDateChanges, expectedSourceDateChanges, 'The exact CA14 source terminal may change only its four article routes across five editions.');
for (const route of expectedSourceDateChanges) assert.equal(dates.get(route), '2026-10-12', `${route}: lastmod must be current.`);

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

for (const route of routes) {
  const relative = `${route.slice(1)}index.html`;
  const current = fs.readFileSync(path.join(root, relative), 'utf8');
  const previous = gitShow(`${base}:${relative}`);
  const delta = mainWords(current, route) - mainWords(previous, route);
  assert.ok(delta > 50, `${route}: body copy needs a substantial increase (got ${delta}).`);
  for (const locale of englishOnly ? [''] : locales) {
    const localizedRoute = locale + route;
    const localizedFile = path.join(root, localizedRoute.slice(1), 'index.html');
    assert.ok(fs.existsSync(localizedFile), `${localizedRoute}: localized page must exist.`);
    const localized = fs.readFileSync(localizedFile, 'utf8');
    assert.ok(localized.includes(`rel="canonical" href="https://tripdistill.com${localizedRoute}"`), `${localizedRoute}: canonical URL mismatch.`);
    if (locale) assert.ok(localized.includes(`lang="${locale === '/zh' ? 'zh-Hant' : locale.slice(1)}"`), `${localizedRoute}: html language mismatch.`);
    assert.equal(articleSchema(localized, localizedRoute)?.dateModified, cluster.isoDate, `${localizedRoute}: Article dateModified mismatch.`);
  }
  console.log(`${route}: +${delta} visible English main-body words; canonical, article and five-edition dates checked.`);
}

const changedCanadaPages = spawnSync('git', ['diff', '--name-only', base, '--', 'canada', 'zh/canada', 'ja/canada', 'ko/canada', 'th/canada'], { cwd: root, encoding: 'utf8' });
assert.equal(changedCanadaPages.status, 0, `Could not inspect Canada page diff: ${changedCanadaPages.stderr}`);
assert.deepEqual(
  changedCanadaPages.stdout.trim().split('\n').filter(Boolean).sort(),
  routes.map((route) => `${route.slice(1)}index.html`).sort(),
  'Only the four selected English source pages may change under canada/. Localized output paths are verified above; the country card is outside this pass.'
);

console.log(`CA14 route/date regression passed: four existing Halifax routes, no added Canada URLs, exact source-terminal and non-target Canada search scope, exact five-edition sitemap date set, and ${englishOnly ? 'English' : 'all localized'} canonical/article metadata.`);
