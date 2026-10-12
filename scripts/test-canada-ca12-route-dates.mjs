#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { canadaClusters } from '../data/canada-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = 'a4679e646708b5a772e56f72df017900fdb0bc4d';
const englishOnly = process.argv.includes('--english-only');
const cluster = canadaClusters.find((item) => item.slug === 'niagara');
assert.ok(cluster, 'Niagara cluster must exist.');
const routes = [
  '/canada/niagara/',
  '/canada/niagara/falls-parkway/',
  '/canada/niagara/niagara-gorge/',
  '/canada/niagara/niagara-on-the-lake/'
];
const laterCa13Routes = [
  '/canada/saguenay-tadoussac/',
  '/canada/saguenay-tadoussac/tadoussac-marine/',
  '/canada/saguenay-tadoussac/fjord-hiking/',
  '/canada/saguenay-tadoussac/saguenay-city-valley/'
];
const laterCa14Routes = [
  '/canada/halifax-nova-scotia/',
  '/canada/halifax-nova-scotia/halifax-waterfront-citadel/',
  '/canada/halifax-nova-scotia/peggys-cove-lunenburg/',
  '/canada/halifax-nova-scotia/cape-breton-cabot/'
];
const laterCa15Routes = [
  '/canada/prince-edward-island/',
  '/canada/prince-edward-island/charlottetown/',
  '/canada/prince-edward-island/cavendish-north-shore/',
  '/canada/prince-edward-island/coastal-drives/'
];
const laterCa16Routes = [
  '/canada/winnipeg-churchill/',
  '/canada/winnipeg-churchill/forks-exchange/',
  '/canada/winnipeg-churchill/human-rights-assiniboine/',
  '/canada/winnipeg-churchill/churchill-hudson-bay/'
];

const laterCa17Routes = [
  '/canada/whitehorse-kluane/',
  '/canada/whitehorse-kluane/whitehorse-river/',
  '/canada/whitehorse-kluane/kluane-haines-junction/',
  '/canada/whitehorse-kluane/miles-canyon-aurora/'
];

const laterCa18SearchRoutes = [
  '/canada/',
  '/canada/yellowknife-great-slave/',
  '/canada/yellowknife-great-slave/old-town-great-slave/',
  '/canada/yellowknife-great-slave/aurora-dark-sky/',
  '/canada/yellowknife-great-slave/ingraham-trail/',
];
const laterCa18DatedRoutes = [
  '/canada/yellowknife-great-slave/',
  '/canada/yellowknife-great-slave/old-town-great-slave/',
  '/canada/yellowknife-great-slave/aurora-dark-sky/',
  '/canada/yellowknife-great-slave/ingraham-trail/',
];
assert.equal(cluster.guides.length, 3);
assert.deepEqual([`/canada/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)], routes);
assert.equal(cluster.reviewDate, '12 October 2026');
assert.equal(cluster.isoDate, '2026-10-12');

const previousSearchResult = spawnSync('git', ['show', `${base}:data/search-index.json`], { cwd: root, encoding: 'utf8' });
assert.equal(previousSearchResult.status, 0, `Could not read the CA11 base search index: ${previousSearchResult.stderr}`);
const previousSearch = JSON.parse(previousSearchResult.stdout);
const search = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const targetSet = new Set(routes);
const previousCanada = previousSearch.filter((item) => item.url.startsWith('/canada/'));
const canada = search.filter((item) => item.url.startsWith('/canada/'));
assert.equal(canada.length, 73, 'Canada search must retain 73 existing routes.');
assert.equal(new Set(canada.map((item) => item.url)).size, 73, 'Canada search URLs must remain unique.');
assert.deepEqual(canada.map((item) => item.url).sort(), previousCanada.map((item) => item.url).sort(), 'The 73-route Canada URL set must not change.');
assert.deepEqual(search.filter((item) => !targetSet.has(item.url) && !laterCa13Routes.includes(item.url) && !laterCa14Routes.includes(item.url) && !laterCa15Routes.includes(item.url) && !laterCa16Routes.includes(item.url) && !laterCa17Routes.includes(item.url) && !laterCa18SearchRoutes.includes(item.url)), previousSearch.filter((item) => !targetSet.has(item.url) && !laterCa13Routes.includes(item.url) && !laterCa14Routes.includes(item.url) && !laterCa15Routes.includes(item.url) && !laterCa16Routes.includes(item.url) && !laterCa17Routes.includes(item.url) && !laterCa18SearchRoutes.includes(item.url)), 'All non-target and later CA13–CA16 search records must remain unchanged and in order.');
for (const route of routes) {
  const record = canada.find((item) => item.url === route);
  assert.ok(record?.summary?.trim() && record.summary.length >= 120, `${route}: target search summary must be substantive.`);
  assert.notEqual(record.summary, previousSearch.find((item) => item.url === route)?.summary, `${route}: search summary must reflect the updated guide.`);
}

const locales = ['', '/zh', '/ja', '/ko', '/th'];
const readDates = (source) => new Map([...source.matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)].map((match) => [match[1], match[2]]));
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const previousSitemapResult = spawnSync('git', ['show', `${base}:sitemap.xml`], { cwd: root, encoding: 'utf8' });
assert.equal(previousSitemapResult.status, 0, `Could not read the CA11 base sitemap: ${previousSitemapResult.stderr}`);
const dates = readDates(sitemap);
const previousDates = readDates(previousSitemapResult.stdout);
assert.deepEqual([...dates.keys()].sort(), [...previousDates.keys()].sort(), 'The sitemap URL set must remain exact.');
const expectedDateChanges = locales.flatMap((locale) => [...routes, ...laterCa13Routes, ...laterCa14Routes, ...laterCa15Routes, ...laterCa16Routes, ...laterCa17Routes, ...laterCa18DatedRoutes].map((route) => locale + route)).sort();
const actualDateChanges = [...dates].filter(([route, date]) => previousDates.get(route) !== date).map(([route]) => route).sort();
assert.deepEqual(actualDateChanges, expectedDateChanges, 'Only the four Niagara and later CA13 routes × five editions may have changed sitemap dates.');
for (const route of expectedDateChanges) assert.equal(dates.get(route), '2026-10-12', `${route}: lastmod must be current.`);

function mainWords(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
  assert.ok(main, 'English route page must contain a main element.');
  const text = main.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:nbsp|amp|quot|apos|lt|gt);|&#\d+;|&#x[\da-f]+;/gi, ' ')
    .replace(/\s+/g, ' ').trim();
  return text ? text.split(' ').length : 0;
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
  const previous = spawnSync('git', ['show', `${base}:${relative}`], { cwd: root, encoding: 'utf8' });
  assert.equal(previous.status, 0, `${route}: base page is missing.`);
  const delta = mainWords(current) - mainWords(previous.stdout);
  assert.ok(delta > 50, `${route}: body copy must show a substantial word-count increase (got ${delta}).`);
  assert.equal(articleSchema(current, route)?.dateModified, cluster.isoDate, `${route}: Article dateModified mismatch.`);
  for (const locale of englishOnly ? [''] : locales) {
    const localizedRoute = locale + route;
    const localizedFile = path.join(root, localizedRoute.slice(1), 'index.html');
    assert.ok(fs.existsSync(localizedFile), `${localizedRoute}: localized page must exist after localize:pages.`);
    const localized = fs.readFileSync(localizedFile, 'utf8');
    assert.ok(localized.includes(`rel="canonical" href="https://tripdistill.com${localizedRoute}"`), `${localizedRoute}: canonical URL mismatch.`);
    assert.equal(articleSchema(localized, localizedRoute)?.dateModified, cluster.isoDate, `${localizedRoute}: Article dateModified mismatch.`);
  }
  console.log(`${route}: +${delta} visible main-body words; article and five-edition dates checked.`);
}

const changedCanadaPages = spawnSync('git', ['diff', '--name-only', base, '--', 'canada'], { cwd: root, encoding: 'utf8' });
assert.equal(changedCanadaPages.status, 0, `Could not inspect Canada page diff: ${changedCanadaPages.stderr}`);
assert.deepEqual(
  changedCanadaPages.stdout.trim().split('\n').filter(Boolean).sort(),
  [...new Set(['canada/index.html', ...routes.map((route) => `${route.slice(1)}index.html`), ...laterCa13Routes.map((route) => `${route.slice(1)}index.html`), ...laterCa14Routes.map((route) => `${route.slice(1)}index.html`), ...laterCa15Routes.map((route) => `${route.slice(1)}index.html`), ...laterCa16Routes.map((route) => `${route.slice(1)}index.html`), ...laterCa17Routes.map((route) => `${route.slice(1)}index.html`), ...laterCa18SearchRoutes.map((route) => `${route.slice(1)}index.html`)])].sort(),
  'Only the four target route pages, later CA13 routes and ancillary Canada card may change under canada/.'
);

console.log(`CA12 route/date regression passed: exactly four existing article routes, separate country card, 73 unchanged Canada URLs, no non-target or later-CA13/CA14/CA15 search/page changes, exact five-edition sitemap set and dates, and ${englishOnly ? 'English' : 'all localized'} Article/canonical metadata.`);
