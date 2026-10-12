#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parse } from 'parse5';
import { canadaClusters } from '../data/canada-guides.mjs';
import { canadaImageManifest } from '../data/canada-image-manifest.mjs';
import { integrationSearchRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = '5f0713a66f150ca1d7b8d37db9f4439a2d69b530';
const sourceTerminal = '48cf7c9c85dd2e0e3d3df6d1901904339d345c02';
const routes = [
  '/canada/',
  '/canada/yellowknife-great-slave/',
  '/canada/yellowknife-great-slave/old-town-great-slave/',
  '/canada/yellowknife-great-slave/aurora-dark-sky/',
  '/canada/yellowknife-great-slave/ingraham-trail/'
];
const datedRoutes = routes.slice(1);
const completedBefore = [
  'vancouver-north-shore', 'victoria-south-island', 'pacific-rim-tofino',
  'banff-lake-louise', 'jasper-icefields', 'calgary-badlands', 'toronto',
  'montreal', 'quebec-city-charlevoix', 'newfoundland-labrador',
  'ottawa-gatineau', 'niagara', 'saguenay-tadoussac', 'halifax-nova-scotia',
  'prince-edward-island', 'winnipeg-churchill', 'whitehorse-kluane'
];
const locales = ['', '/zh', '/ja', '/ko', '/th'];
const localizedDirectories = [['zh', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
const targetSet = new Set(routes);

function gitShow(spec) {
  const result = spawnSync('git', ['show', spec], { cwd: root, encoding: 'utf8' });
  assert.equal(result.status, 0, `Could not read ${spec}: ${result.stderr}`);
  return result.stdout;
}
function collectText(node, output = [], skipCountryCards = false) {
  if (node.nodeName === '#text') output.push(node.value);
  if (node.tagName === 'script' || node.tagName === 'style') return output;
  if (skipCountryCards && node.attrs?.some((attribute) => attribute.name === 'class' && attribute.value.split(/\s+/).includes('ca-country-grid'))) return output;
  for (const child of node.childNodes || []) collectText(child, output, skipCountryCards);
  return output;
}
function findTag(node, tagName) {
  if (node.tagName === tagName) return node;
  for (const child of node.childNodes || []) {
    const found = findTag(child, tagName);
    if (found) return found;
  }
}
function mainWords(html, route, skipCountryCards = false) {
  const main = findTag(parse(html), 'main');
  assert.ok(main, `${route}: page must expose a main landmark.`);
  return collectText(main, [], skipCountryCards).join(' ').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean).length;
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

const allRoutes = ['/canada/', ...canadaClusters.flatMap((cluster) => [`/canada/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)])];
assert.equal(canadaClusters.length, 18, 'Canada must retain all 18 hubs.');
assert.equal(allRoutes.length, 73, 'Canada must retain all 73 existing routes.');
assert.equal(new Set(allRoutes).size, 73, 'Every route in the Canada ledger must be unique.');
assert.equal(new Set(completedBefore).size, 17, 'The previously completed cluster ledger must not repeat a hub.');
const completedRoutes = completedBefore.flatMap((slug) => {
  const cluster = canadaClusters.find((candidate) => candidate.slug === slug);
  assert.ok(cluster, `Previously completed cluster ${slug} must exist.`);
  return [`/canada/${slug}/`, ...cluster.guides.map((guide) => guide.url)];
});
assert.equal(completedRoutes.length, 68, 'The 17 already refreshed hubs account for 68 existing routes.');
assert.equal(new Set(completedRoutes).size, 68, 'Previously completed route ledger must be unique.');
assert.deepEqual([...routes].sort(), allRoutes.filter((route) => !completedRoutes.includes(route)).sort(), 'These five exact paths must be the complement of the 68 previously refreshed routes.');
assert.deepEqual([...routes].sort(), [...targetSet].sort(), 'CA18 target routes must not repeat.');

const cluster = canadaClusters.find((candidate) => candidate.slug === 'yellowknife-great-slave');
assert.ok(cluster, 'Yellowknife & Great Slave Lake cluster must exist.');
assert.equal(cluster.reviewDate, '12 October 2026');
assert.equal(cluster.isoDate, '2026-10-12');
assert.equal(cluster.guides.length, 3);
assert.deepEqual([`/canada/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)], datedRoutes);
assert.equal(cluster.firstVisitPlan?.days.length, 3, 'Hub must provide usable trip-length alternatives.');
assert.ok(cluster.faq?.length >= 5, 'Hub must answer practical access and fallback questions.');
assert.ok(cluster.sources?.length >= 8, 'Hub must cite official transit, road, weather, park and cultural visitor sources.');
for (const guide of cluster.guides) {
  assert.equal(guide.routeChoices?.options.length, 3, `${guide.url}: three distinct route choices required.`);
  assert.ok(guide.sources?.length >= 5, `${guide.url}: route-specific sources required.`);
  assert.ok(guide.sources.every(([url, label]) => url.startsWith('https://') && label.trim()), `${guide.url}: sources must be HTTPS and labeled.`);
  assert.ok(guide.faq?.length >= 4, `${guide.url}: practical FAQs required.`);
  assert.equal(guide.stages?.length, 4, `${guide.url}: four route stages required.`);
  assert.equal(guide.watch?.length, 3, `${guide.url}: three route failure points required.`);
}
assert.match(cluster.hubIntro, /city-bus day/);
assert.match(cluster.transfer, /not a shuttle to the Ingraham Trail/);
assert.match(cluster.guides.find((guide) => guide.slug === 'ingraham-trail').verify, /Highway 4/);
assert.match(cluster.guides.find((guide) => guide.slug === 'aurora-dark-sky').summary, /neither predicts a guaranteed display/);

const baseModel = gitShow(`${base}:data/canada-atlantic-north-guides.mjs`);
const currentModel = fs.readFileSync(path.join(root, 'data/canada-atlantic-north-guides.mjs'), 'utf8');
const endMarker = "slug: 'yellowknife-great-slave'";
const baseStart = baseModel.indexOf(endMarker);
const currentStart = currentModel.indexOf(endMarker);
assert.ok(baseStart >= 0 && currentStart >= 0);
assert.equal(baseModel.slice(0, baseStart), currentModel.slice(0, currentStart), 'Earlier Canada Atlantic/northern route data must remain byte-identical.');

const previousSearch = JSON.parse(gitShow(`${base}:data/search-index.json`));
const sourceSearch = JSON.parse(gitShow(`${sourceTerminal}:data/search-index.json`));
const search = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const previousCanada = previousSearch.filter((item) => item.url.startsWith('/canada/'));
const canadaSearch = search.filter((item) => item.url.startsWith('/canada/'));
assert.equal(canadaSearch.length, 73, 'English Canada search must retain 73 routes.');
assert.equal(new Set(canadaSearch.map((item) => item.url)).size, 73, 'English Canada search URLs must remain unique.');
assert.deepEqual(canadaSearch.map((item) => item.url).sort(), previousCanada.map((item) => item.url).sort(), 'Canada search route set must remain unchanged.');
assert.deepEqual(search.filter((item) => targetSet.has(item.url)), sourceSearch.filter((item) => targetSet.has(item.url)), 'Integrated CA18 target search records must match the exact recovery source terminal.');
assert.deepEqual(search.filter((item) => !integrationSearchRoutes.includes(item.url)), previousSearch.filter((item) => !integrationSearchRoutes.includes(item.url)), 'Every search record outside the exact integration sprint scope must remain unchanged from the CA17 source base.');
for (const route of routes) {
  const current = canadaSearch.find((item) => item.url === route);
  const previous = previousCanada.find((item) => item.url === route);
  assert.ok(current?.summary?.trim() && current.summary.length >= 120, `${route}: English search summary must be substantive.`);
  assert.notEqual(current.summary, previous?.summary, `${route}: search summary must reflect substantive body copy.`);
}
assert.match(canadaSearch.find((item) => item.url === '/canada/').summary, /rail between eastern cities/);
assert.match(canadaSearch.find((item) => item.url === datedRoutes[0]).summary, /Route 1|Highway 4|aurora/i);

const previousSitemap = gitShow(`${base}:sitemap.xml`);
const readDates = (source) => new Map([...source.matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)].map((match) => [match[1], match[2]]));
const previousDates = readDates(previousSitemap);
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const dates = readDates(sitemap);
assert.deepEqual([...dates.keys()].sort(), [...previousDates.keys()].sort(), 'Sitemap route set must remain unchanged.');
const expectedDateChanges = locales.flatMap((locale) => datedRoutes.map((route) => locale + route)).sort();
const actualDateChanges = [...dates].filter(([route, date]) => locales.some((locale) => route.startsWith(`${locale}/canada/`)) && previousDates.get(route) !== date).map(([route]) => route).sort();
assert.deepEqual(actualDateChanges, expectedDateChanges, 'Only the four newly refreshed Yellowknife routes × five editions may change sitemap dates.');
for (const route of expectedDateChanges) assert.equal(dates.get(route), '2026-10-12', `${route}: lastmod must match the review date.`);
for (const locale of locales) {
  assert.equal(dates.get(locale + '/canada/'), previousDates.get(locale + '/canada/'), 'The country route already carried the 12 October review date and must not create a duplicate sitemap delta.');
}

const gains = [];
for (const route of routes) {
  const relative = `${route.slice(1)}index.html`;
  const current = fs.readFileSync(path.join(root, relative), 'utf8');
  const previous = gitShow(`${base}:${relative}`);
  const gain = mainWords(current, route, route === '/canada/') - mainWords(previous, route, route === '/canada/');
  assert.ok(gain > 50, `${route}: visible main-body copy must materially improve beyond cards (got +${gain} words).`);
  gains.push(`${route} +${gain}`);
  for (const locale of locales) {
    const localizedRoute = locale + route;
    const file = path.join(root, localizedRoute.slice(1), 'index.html');
    assert.ok(fs.existsSync(file), `${localizedRoute}: localized page must exist after localization.`);
    const html = fs.readFileSync(file, 'utf8');
    assert.ok(html.includes(`rel="canonical" href="https://tripdistill.com${localizedRoute}"`), `${localizedRoute}: canonical must match.`);
    assert.ok(html.includes('hreflang="en"'), `${localizedRoute}: English hreflang must exist.`);
    if (locale) assert.ok(html.includes(`lang="${locale === '/zh' ? 'zh-Hant' : locale.slice(1)}"`), `${localizedRoute}: language metadata must match.`);
    assert.equal(articleSchema(html, localizedRoute)?.dateModified, '2026-10-12', `${localizedRoute}: Article dateModified must match the review date.`);
  }
}

for (const [directory, prefix] of localizedDirectories) {
  const localizedSearch = JSON.parse(fs.readFileSync(path.join(root, directory, 'data/search-index.json'), 'utf8'));
  const localizedCanada = localizedSearch.filter((item) => item.url.startsWith(`${prefix}/canada/`));
  assert.equal(localizedCanada.length, 73, `${prefix}: localized search must retain 73 Canadian routes.`);
  assert.equal(new Set(localizedCanada.map((item) => item.url)).size, 73, `${prefix}: localized search URLs must be unique.`);
  for (const route of routes) {
    const record = localizedCanada.find((item) => item.url === `${prefix}${route}`);
    assert.ok(record?.summary?.trim() && record.summary.replace(/\s/g, '').length >= 40, `${prefix}${route}: translated search summary must be present and substantive.`);
    assert.notEqual(record.summary, canadaSearch.find((item) => item.url === route)?.summary, `${prefix}${route}: localized summary must not fall back to English.`);
  }
}

const changedPages = spawnSync('git', ['diff', '--name-only', base, '--', 'canada', 'zh/canada', 'ja/canada', 'ko/canada', 'th/canada'], { cwd: root, encoding: 'utf8' });
assert.equal(changedPages.status, 0, `Could not inspect page scope: ${changedPages.stderr}`);
assert.deepEqual(changedPages.stdout.trim().split('\n').filter(Boolean).sort(), routes.map((route) => `${route.slice(1)}index.html`).sort(), 'Only five existing English source pages may change; localized files are generated and checked above.');
for (const directory of ['canada/niagara', 'canada/prince-edward-island']) {
  const result = spawnSync('git', ['diff', '--quiet', base, '--', directory], { cwd: root });
  assert.equal(result.status, 0, `${directory}: parallel route copy must remain unchanged.`);
}
const imageDiff = spawnSync('git', ['diff', '--quiet', `${base}..${sourceTerminal}`, '--', 'assets/images'], { cwd: root });
assert.equal(imageDiff.status, 0, 'The exact CA18 source batch must not change any image asset.');
const previousImageManifest = await import(`data:text/javascript;base64,${Buffer.from(gitShow('HEAD:data/canada-image-manifest.mjs')).toString('base64')}`);
const targetImageKeys = datedRoutes.map((route) => route.replace(/^\/canada\//, ''));
assert.deepEqual(
  Object.fromEntries(targetImageKeys.map((key) => [key, canadaImageManifest[key]])),
  Object.fromEntries(targetImageKeys.map((key) => [key, previousImageManifest.canadaImageManifest[key]])),
  'The existing Yellowknife image metadata must be preserved.'
);

console.log(`CA18 route/date/search regression passed: exact CA17 base; 73 unique Canada route paths; 68 prior plus five selected paths; five visible body deltas (country count excludes all card grids); 73 unique search paths in all five editions; only four routes × five sitemap dates changed; country date, Niagara, PEI and image inventory preserved. Body gains: ${gains.join('; ')}.`);
console.log(`Unique 73-path Canada ledger:\n${allRoutes.join('\n')}`);
