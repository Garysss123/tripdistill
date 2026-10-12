#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parse } from 'parse5';
import { canadaClusters } from '../data/canada-guides.mjs';
import { canadaAtlanticNorthClusters } from '../data/canada-atlantic-north-guides.mjs';
import { integrationSearchRoutes, postIntegrationAustraliaRoutes, postIntegrationHawaiiRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = '15f37f6a806581b8e347483ff2df52131d0a2fae';
const ca17Snapshot = '5f0713a66f150ca1d7b8d37db9f4439a2d69b530';
const cluster = canadaAtlanticNorthClusters.find((item) => item.slug === 'whitehorse-kluane');
assert.ok(cluster, 'Whitehorse & Kluane cluster must exist.');
const routes = [
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
  '/canada/yellowknife-great-slave/ingraham-trail/'
];
const laterCa18DatedRoutes = laterCa18SearchRoutes.slice(1);
const previouslyCompleted = [
  'vancouver-north-shore', 'victoria-south-island', 'pacific-rim-tofino',
  'banff-lake-louise', 'jasper-icefields', 'calgary-badlands', 'toronto',
  'montreal', 'quebec-city-charlevoix', 'newfoundland-labrador',
  'ottawa-gatineau', 'niagara', 'saguenay-tadoussac', 'halifax-nova-scotia',
  'prince-edward-island', 'winnipeg-churchill'
];
const locales = ['', '/zh', '/ja', '/ko', '/th'];
const localizedDirectories = [['zh', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];

assert.equal(cluster.reviewDate, '12 October 2026');
assert.equal(cluster.isoDate, '2026-10-12');
assert.equal(cluster.guides.length, 3);
assert.deepEqual([`/canada/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)], routes);
assert.equal(cluster.firstVisitPlan?.days.length, 3, 'Hub must provide a usable first-visit sequence.');
assert.ok(cluster.faq.length >= 4, 'Hub must answer practical access and seasonal questions.');
assert.ok(cluster.sources.length >= 10, 'Hub must link to official transport, road, weather and park sources.');
for (const guide of cluster.guides) {
  assert.equal(guide.routeChoices?.options.length, 3, `${guide.url}: three distinct route choices required.`);
  assert.ok(guide.sources?.length >= 5, `${guide.url}: route-specific sources required.`);
  assert.ok(guide.sources.every(([url, label]) => url.startsWith('https://') && label.trim()), `${guide.url}: sources must be HTTPS and labeled.`);
  assert.ok(guide.faq?.length >= 4, `${guide.url}: practical FAQs required.`);
  assert.equal(guide.stages?.length, 4, `${guide.url}: four route stages required.`);
  assert.equal(guide.watch?.length, 3, `${guide.url}: three route failure points required.`);
}
assert.match(cluster.hubIntro, /160 km/);
assert.match(cluster.fallback, /Kokanee|0\.5-km/);
assert.match(cluster.guides.find((guide) => guide.slug === 'kluane-haines-junction').route.join(' '), /7\.6 km|15-km|King/i);
assert.match(cluster.guides.find((guide) => guide.slug === 'miles-canyon-aurora').route.join(' '), /15-km|winter|aurora/i);

function gitShow(spec) {
  const result = spawnSync('git', ['show', spec], { cwd: root, encoding: 'utf8' });
  assert.equal(result.status, 0, `Could not read ${spec}: ${result.stderr}`);
  return result.stdout;
}
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
  const main = findTag(parse(html), 'main');
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

const canadaRoutes = ['/canada/', ...canadaClusters.flatMap((item) => [`/canada/${item.slug}/`, ...item.guides.map((guide) => guide.url)])];
assert.equal(canadaClusters.length, 18);
assert.equal(canadaRoutes.length, 73);
assert.equal(new Set(canadaRoutes).size, 73, 'The source inventory must contain 73 unique routes.');
const completed = previouslyCompleted.flatMap((slug) => {
  const item = canadaClusters.find((candidate) => candidate.slug === slug);
  assert.ok(item, `Previously completed cluster ${slug} must exist.`);
  return [`/canada/${slug}/`, ...item.guides.map((guide) => guide.url)];
});
assert.equal(completed.length, 64, 'CA16 must account for 64 existing source routes.');
assert.equal(new Set(completed).size, 64);
assert.ok(routes.every((route) => !completed.includes(route)));
const afterSprintCompleted = [...completed, ...routes];
assert.equal(afterSprintCompleted.length, 68, 'CA17 must raise completed coverage to 68/73.');
assert.equal(new Set(afterSprintCompleted).size, 68);
const finalRoutes = ['/canada/', '/canada/yellowknife-great-slave/',
  '/canada/yellowknife-great-slave/old-town-great-slave/',
  '/canada/yellowknife-great-slave/aurora-dark-sky/',
  '/canada/yellowknife-great-slave/ingraham-trail/'];
assert.deepEqual([...finalRoutes].sort(), canadaRoutes.filter((route) => !afterSprintCompleted.includes(route)).sort(), 'Only the country page and Yellowknife cluster may remain.');

const baseModel = gitShow(`${base}:data/canada-atlantic-north-guides.mjs`);
const ca17Model = gitShow(`${ca17Snapshot}:data/canada-atlantic-north-guides.mjs`);
const currentModel = fs.readFileSync(path.join(root, 'data/canada-atlantic-north-guides.mjs'), 'utf8');
const startMarker = "slug: 'whitehorse-kluane'";
const endMarker = "slug: 'yellowknife-great-slave'";
const baseStart = baseModel.indexOf(startMarker);
const ca17Start = ca17Model.indexOf(startMarker);
const currentStart = currentModel.indexOf(startMarker);
const baseEnd = baseModel.indexOf(endMarker, baseStart);
const ca17End = ca17Model.indexOf(endMarker, ca17Start);
const currentEnd = currentModel.indexOf(endMarker, currentStart);
assert.ok(baseStart >= 0 && ca17Start >= 0 && currentStart >= 0 && baseEnd > baseStart && ca17End > ca17Start && currentEnd > currentStart);
assert.equal(baseModel.slice(0, baseStart), currentModel.slice(0, currentStart), 'Earlier Atlantic/northern clusters must remain byte-identical.');
assert.equal(ca17Model.slice(ca17Start, ca17End), currentModel.slice(currentStart, currentEnd), 'The CA17 Whitehorse source block must remain byte-identical after later batches.');

const previousSearch = JSON.parse(gitShow(`${base}:data/search-index.json`));
const sourceSearch = JSON.parse(gitShow(`${ca17Snapshot}:data/search-index.json`));
const search = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const previousCanada = previousSearch.filter((item) => item.url.startsWith('/canada/'));
const canadaSearch = search.filter((item) => item.url.startsWith('/canada/'));
assert.equal(canadaSearch.length, 73, 'English Canada search must retain 73 routes.');
assert.equal(new Set(canadaSearch.map((item) => item.url)).size, 73, 'English Canada search URLs must remain unique.');
assert.deepEqual(canadaSearch.map((item) => item.url).sort(), previousCanada.map((item) => item.url).sort(), 'Canada search URL set must remain unchanged.');
const targetSet = new Set(routes);
const laterCa18Set = new Set(laterCa18SearchRoutes);
assert.deepEqual(search.filter((item) => targetSet.has(item.url)), sourceSearch.filter((item) => targetSet.has(item.url)), 'Integrated CA17 target search records must match the exact source snapshot.');
const laterIntegrationSearchSet = new Set([...postIntegrationHawaiiRoutes, ...postIntegrationAustraliaRoutes]);
assert.deepEqual(search.filter((item) => !integrationSearchRoutes.includes(item.url) && !laterIntegrationSearchSet.has(item.url)), previousSearch.filter((item) => !integrationSearchRoutes.includes(item.url) && !laterIntegrationSearchSet.has(item.url)), 'Every search record outside the exact integration sprint scope, four later Hawaii routes and four later Australia routes must remain unchanged from the CA16 source base.');
for (const route of routes) {
  const current = canadaSearch.find((item) => item.url === route);
  const previous = previousCanada.find((item) => item.url === route);
  assert.ok(current?.summary?.trim() && current.summary.length >= 120, `${route}: English search summary must be substantive.`);
  assert.notEqual(current.summary, previous?.summary, `${route}: search summary must reflect the refreshed copy.`);
}

const previousDates = new Map([...gitShow(`${base}:sitemap.xml`).matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)].map((match) => [match[1], match[2]]));
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const dates = new Map([...sitemap.matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)].map((match) => [match[1], match[2]]));
assert.deepEqual([...dates.keys()].sort(), [...previousDates.keys()].sort(), 'Sitemap URL set must be unchanged.');
const expectedDateChanges = locales.flatMap((locale) => [...routes, ...laterCa18DatedRoutes].map((route) => locale + route)).sort();
const actualDateChanges = [...dates].filter(([route, date]) => locales.some((locale) => route.startsWith(`${locale}/canada/`)) && previousDates.get(route) !== date).map(([route]) => route).sort();
assert.deepEqual(actualDateChanges, expectedDateChanges, 'Only the four CA17 routes and four later CA18 Yellowknife routes × five editions may change sitemap dates.');
for (const route of expectedDateChanges) assert.equal(dates.get(route), '2026-10-12', `${route}: lastmod must match the review date.`);
for (const route of locales.map((locale) => `${locale}/canada/prince-edward-island/`)) {
  assert.equal(dates.get(route), previousDates.get(route), `${route}: preserve the earlier PEI date.`);
}

const gains = [];
for (const route of routes) {
  const relative = `${route.slice(1)}index.html`;
  const current = fs.readFileSync(path.join(root, relative), 'utf8');
  const previous = gitShow(`${base}:${relative}`);
  const gain = mainWords(current, route) - mainWords(previous, route);
  assert.ok(gain > 50, `${route}: body must materially grow (got ${gain} words).`);
  gains.push(`${route} +${gain}`);
  for (const locale of locales) {
    const localizedRoute = locale + route;
    const file = path.join(root, localizedRoute.slice(1), 'index.html');
    assert.ok(fs.existsSync(file), `${localizedRoute}: localized page must exist after localization.`);
    const html = fs.readFileSync(file, 'utf8');
    assert.ok(html.includes(`rel="canonical" href="https://tripdistill.com${localizedRoute}"`), `${localizedRoute}: canonical must match.`);
    assert.ok(html.includes('hreflang="en"'), `${localizedRoute}: English hreflang must exist.`);
    if (locale) assert.ok(html.includes(`lang="${locale === '/zh' ? 'zh-Hant' : locale.slice(1)}"`), `${localizedRoute}: language metadata must match.`);
    assert.equal(articleSchema(html, localizedRoute)?.dateModified, cluster.isoDate, `${localizedRoute}: Article dateModified must match review date.`);
  }
}

for (const [directory, prefix] of localizedDirectories) {
  const localizedSearch = JSON.parse(fs.readFileSync(path.join(root, directory, 'data/search-index.json'), 'utf8'));
  const localizedCanada = localizedSearch.filter((item) => item.url.startsWith(`${prefix}/canada/`));
  assert.equal(localizedCanada.length, 73, `${prefix}: localized search must retain 73 Canadian routes.`);
  assert.equal(new Set(localizedCanada.map((item) => item.url)).size, 73, `${prefix}: localized search URLs must be unique.`);
  for (const route of routes) {
    const item = localizedCanada.find((record) => record.url === `${prefix}${route}`);
    assert.ok(item?.summary?.trim() && item.summary.length >= 80, `${prefix}${route}: localized summary must be present.`);
    assert.notEqual(item.summary, canadaSearch.find((record) => record.url === route)?.summary, `${prefix}${route}: localized search summary must not fall back to English.`);
  }
}

const changedPages = spawnSync('git', ['diff', '--name-only', base, '--', 'canada', 'zh/canada', 'ja/canada', 'ko/canada', 'th/canada'], { cwd: root, encoding: 'utf8' });
assert.equal(changedPages.status, 0, `Could not inspect page scope: ${changedPages.stderr}`);
assert.deepEqual(changedPages.stdout.trim().split('\n').filter(Boolean).sort(), [...routes, ...laterCa18SearchRoutes].map((route) => `${route.slice(1)}index.html`).sort(), 'Only CA17 and later CA18 English source pages may be committed; localized pages are build outputs checked above.');
for (const directory of ['canada/niagara', 'canada/prince-edward-island']) {
  const result = spawnSync('git', ['diff', '--quiet', base, '--', directory], { cwd: root });
  assert.equal(result.status, 0, `${directory}: parallel Niagara/PEI copy must remain unchanged.`);
}

console.log(`CA17 route/date regression passed: exact 64/73 CA16 base and final 68/73 coverage; CA18's remaining five routes are separately accounted for; 73 Canada search URLs unchanged; CA17/CA18 records and date deltas are scoped; PEI dates and Niagara copy preserved; five-edition pages, search, canonicals, hreflang and Article dates checked. Body gains: ${gains.join('; ')}.`);
