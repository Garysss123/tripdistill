#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parse } from 'parse5';
import { canadaClusters } from '../data/canada-guides.mjs';
import { canadaAtlanticNorthClusters } from '../data/canada-atlantic-north-guides.mjs';
import { integrationSearchRoutes, postHawaiiNewOrleansRoutes, postIntegrationAustraliaRoutes, postIntegrationCanberraRoutes, postIntegrationAlpsMargaretRoutes, postHaLongHCMCIntegrationRoutes, postIntegrationHawaiiRoutes, postNewOrleansAtlantaRoutes, postAtlantaFloridaRoutes, postFloridaChicagoRoutes, postNewEnglandIntegrationRoutes, postNewEnglandArizonaRoutes, postIntegrationMargaretRemainingRoutes, postArizonaLosAngelesRoutes, postLosAngelesBostonRoutes, postLosAngelesSanDiegoRoutes, postIntegrationBroomeRoutes, postIntegrationBroomeTasmaniaRoutes, postIntegrationMuiNeRoutes, postIntegrationPhongNhaRoutes, postIntegrationPhuQuocRoutes, followingVietnamNhaTrangRoutes, followingVietnamAfterNhaTrangRoutes, followingVietnamSouthernGapsRoutes, followingVietnamBayGapsRoutes, postBostonOverviewJuneauSearchRoutes, postAustraliaFinalRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = '5e65f15ccb9f877e280e6aa1de80cead92eff838';
const sourceTerminal = '15f37f6a806581b8e347483ff2df52131d0a2fae';
const originalCanadaAddition = '239ad32f';
const cluster = canadaAtlanticNorthClusters.find((item) => item.slug === 'winnipeg-churchill');
assert.ok(cluster, 'Winnipeg & Churchill cluster must exist.');
const routes = [
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
const completedSlugs = [
  'vancouver-north-shore', 'victoria-south-island', 'pacific-rim-tofino',
  'banff-lake-louise', 'jasper-icefields', 'calgary-badlands', 'toronto',
  'montreal', 'quebec-city-charlevoix', 'newfoundland-labrador',
  'ottawa-gatineau', 'niagara', 'saguenay-tadoussac', 'halifax-nova-scotia',
  'prince-edward-island'
];
const initialRemainingSlugs = ['winnipeg-churchill', 'whitehorse-kluane', 'yellowknife-great-slave'];
const locales = ['', '/zh', '/ja', '/ko', '/th'];
const localizedDirectories = [['zh', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];

assert.equal(cluster.reviewDate, '12 October 2026');
assert.equal(cluster.isoDate, '2026-10-12');
assert.equal(cluster.guides.length, 3);
assert.deepEqual([`/canada/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)], routes);
assert.equal(cluster.firstVisitPlan?.days.length, 3, 'Hub must compare city-only, flight-led and rail-led trip shapes.');
assert.ok(cluster.faq.length >= 4, 'Hub must answer practical no-road and schedule questions.');
assert.ok(cluster.sources.length >= 7, 'Hub must cite current transit, city and northern-access sources.');
for (const guide of cluster.guides) {
  assert.equal(guide.routeChoices?.options.length, 3, `${guide.url}: three distinct route choices required.`);
  assert.ok(guide.sources?.length >= 5, `${guide.url}: route-specific official sources required.`);
  assert.ok(guide.sources.every(([url, label]) => url.startsWith('https://') && label.trim()), `${guide.url}: sources must be HTTPS and labeled.`);
  assert.ok(guide.faq?.length >= 4, `${guide.url}: practical FAQs required.`);
  assert.equal(guide.stages?.length, 4, `${guide.url}: four route stages required.`);
  assert.equal(guide.watch?.length, 3, `${guide.url}: three route failure points required.`);
}
assert.match(cluster.transfer, /no road|no roads|沒有公路/i);
assert.match(cluster.season, /mid-June|6月中|6월 중순|มิถุนายน/);

function gitShow(spec) {
  const result = spawnSync('git', ['show', spec], { cwd: root, encoding: 'utf8' });
  assert.equal(result.status, 0, `Could not read ${spec}: ${result.stderr}`);
  return result.stdout;
}
function sourceBlock(source) {
  const start = source.indexOf("slug: 'winnipeg-churchill'");
  const end = source.indexOf("slug: 'whitehorse-kluane'", start);
  assert.ok(start >= 0 && end > start, 'Historical Winnipeg source boundaries must be present.');
  return source.slice(start, end);
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
assert.equal(new Set(canadaRoutes).size, 73, 'The source inventory must have 73 unique routes.');
assert.equal(completedSlugs.length, 15);
assert.equal(new Set(completedSlugs).size, 15);
assert.equal(completedSlugs.length * 4, 60);
const remainingRoutes = ['/canada/', ...initialRemainingSlugs.flatMap((slug) => {
  const item = canadaClusters.find((candidate) => candidate.slug === slug);
  assert.ok(item, `Remaining cluster ${slug} must exist.`);
  return [`/canada/${slug}/`, ...item.guides.map((guide) => guide.url)];
})];
assert.equal(remainingRoutes.length, 13, 'Before CA16, the country page plus three unrefreshed groups must be the remaining 13 URLs.');
const completedRoutes = completedSlugs.flatMap((slug) => {
  const item = canadaClusters.find((candidate) => candidate.slug === slug);
  assert.ok(item, `Completed cluster ${slug} must exist.`);
  return [`/canada/${slug}/`, ...item.guides.map((guide) => guide.url)];
});
assert.equal(completedRoutes.length, 60, 'The 15 completed clusters must account for exactly 60 URLs.');
assert.equal(new Set(completedRoutes).size, 60, 'Completed cluster URLs must be unique.');
assert.deepEqual([...completedRoutes].sort(), canadaRoutes.filter((route) => !remainingRoutes.includes(route)).sort(), 'The exact 60 completed URLs must be the complement of the 13 remaining URLs.');
const postSprintRemaining = ['/canada/', ...['whitehorse-kluane', 'yellowknife-great-slave'].flatMap((slug) => {
  const item = canadaClusters.find((candidate) => candidate.slug === slug);
  assert.ok(item, `Post-sprint remaining cluster ${slug} must exist.`);
  return [`/canada/${slug}/`, ...item.guides.map((guide) => guide.url)];
})];
assert.equal(postSprintRemaining.length, 9, 'After refreshing Winnipeg, the country page plus two groups must be the exact remaining 9 URLs.');
assert.deepEqual([...postSprintRemaining].sort(), canadaRoutes.filter((route) => !completedRoutes.includes(route) && !routes.includes(route)).sort(), 'The exact final 9 URLs must be the complement of the 60 previously completed plus four CA16 routes.');
assert.deepEqual(routes, [`/canada/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)]);
assert.ok(routes.every((route) => remainingRoutes.includes(route)), 'CA16 must select from the initial 13 unrefreshed URLs.');

const baseModel = gitShow(`${base}:data/canada-atlantic-north-guides.mjs`);
const originalModel = gitShow(`${originalCanadaAddition}:data/canada-atlantic-north-guides.mjs`);
assert.equal(sourceBlock(baseModel), sourceBlock(originalModel), 'The selected Winnipeg source block must match the initial Canada addition; it was not substantively edited in CA06–CA15.');
for (const route of routes) {
  const relative = `${route.slice(1)}index.html`;
  const original = gitShow(`${originalCanadaAddition}:${relative}`);
  const previous = gitShow(`${base}:${relative}`);
  assert.equal(mainWords(previous, route), mainWords(original, route), `${route}: the existing page body must not have been substantively refreshed before CA16.`);
}

for (const route of routes) gitShow(`${base}:${route.slice(1)}index.html`);
const targetSet = new Set(routes);
const previousSearch = JSON.parse(gitShow(`${base}:data/search-index.json`));
const sourceSearch = JSON.parse(gitShow(`${sourceTerminal}:data/search-index.json`));
const search = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const previousCanada = previousSearch.filter((item) => item.url.startsWith('/canada/'));
const canadaSearch = search.filter((item) => item.url.startsWith('/canada/'));
assert.equal(canadaSearch.length, 73, 'English Canada search must retain 73 routes.');
assert.equal(new Set(canadaSearch.map((item) => item.url)).size, 73, 'English Canada search URLs must stay unique.');
assert.deepEqual(canadaSearch.map((item) => item.url).sort(), previousCanada.map((item) => item.url).sort(), 'The exact Canada search URL set must be unchanged.');
assert.deepEqual(search.filter((item) => targetSet.has(item.url)), sourceSearch.filter((item) => targetSet.has(item.url)), 'Integrated CA16 target search records must match the exact source terminal.');
const laterIntegrationSearchSet = new Set([...postIntegrationHawaiiRoutes, ...postIntegrationAustraliaRoutes, ...postIntegrationCanberraRoutes, ...postIntegrationAlpsMargaretRoutes, ...postHawaiiNewOrleansRoutes, ...postNewOrleansAtlantaRoutes, ...postAtlantaFloridaRoutes, ...postFloridaChicagoRoutes, ...postNewEnglandIntegrationRoutes, ...postNewEnglandArizonaRoutes, ...postIntegrationMargaretRemainingRoutes, ...postArizonaLosAngelesRoutes, ...postLosAngelesBostonRoutes, ...postLosAngelesSanDiegoRoutes, ...postIntegrationBroomeRoutes, ...postIntegrationBroomeTasmaniaRoutes, ...postIntegrationMuiNeRoutes, ...postIntegrationPhongNhaRoutes, ...postIntegrationPhuQuocRoutes, ...followingVietnamNhaTrangRoutes, ...followingVietnamAfterNhaTrangRoutes, ...followingVietnamSouthernGapsRoutes, ...followingVietnamBayGapsRoutes, ...postBostonOverviewJuneauSearchRoutes, ...postAustraliaFinalRoutes]);
assert.deepEqual(search.filter((item) => !integrationSearchRoutes.includes(item.url) && !laterIntegrationSearchSet.has(item.url)), previousSearch.filter((item) => !integrationSearchRoutes.includes(item.url) && !laterIntegrationSearchSet.has(item.url)), 'Every search record outside the exact integration sprint scope and verified Hawaii, Australia, Canberra, New Orleans, Atlanta and New England routes must remain unchanged from the CA15 source base.');
for (const route of routes) {
  const current = canadaSearch.find((item) => item.url === route);
  const previous = previousSearch.find((item) => item.url === route);
  assert.ok(current?.summary?.trim() && current.summary.length >= 120, `${route}: English search summary must be substantive.`);
  assert.notEqual(current.summary, previous?.summary, `${route}: search summary must reflect the refreshed copy.`);
}

const previousDates = new Map([...gitShow(`${base}:sitemap.xml`).matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)].map((match) => [match[1], match[2]]));
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const dates = new Map([...sitemap.matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)].map((match) => [match[1], match[2]]));
assert.deepEqual([...dates.keys()].sort(), [...previousDates.keys()].sort(), 'Sitemap URL set must be unchanged.');
const expectedDateChanges = locales.flatMap((locale) => [...routes, ...laterCa17Routes, ...laterCa18DatedRoutes].map((route) => locale + route)).sort();
const actualDateChanges = [...dates].filter(([route, date]) => locales.some((locale) => route.startsWith(`${locale}/canada/`)) && previousDates.get(route) !== date).map(([route]) => route).sort();
assert.deepEqual(actualDateChanges, expectedDateChanges, 'Only the four selected routes × five editions may change sitemap dates.');
for (const route of expectedDateChanges) assert.equal(dates.get(route), '2026-10-12', `${route}: sitemap lastmod must be 2026-10-12.`);

const deltas = [];
for (const route of routes) {
  const relative = `${route.slice(1)}index.html`;
  const current = fs.readFileSync(path.join(root, relative), 'utf8');
  const previous = gitShow(`${base}:${relative}`);
  const delta = mainWords(current, route) - mainWords(previous, route);
  assert.ok(delta > 50, `${route}: body needs a substantive increase (got ${delta} visible words).`);
  deltas.push(`${route} +${delta}`);
  for (const locale of locales) {
    const localizedRoute = locale + route;
    const file = path.join(root, localizedRoute.slice(1), 'index.html');
    assert.ok(fs.existsSync(file), `${localizedRoute}: localized page must exist.`);
    const html = fs.readFileSync(file, 'utf8');
    assert.ok(html.includes(`rel="canonical" href="https://tripdistill.com${localizedRoute}"`), `${localizedRoute}: canonical must match route.`);
    assert.ok(html.includes('hreflang="en"'), `${localizedRoute}: reciprocal English hreflang must be present.`);
    if (locale) assert.ok(html.includes(`lang="${locale === '/zh' ? 'zh-Hant' : locale.slice(1)}"`), `${localizedRoute}: document language must match locale.`);
    assert.equal(articleSchema(html, localizedRoute)?.dateModified, cluster.isoDate, `${localizedRoute}: Article dateModified must match review date.`);
  }
}

for (const [directory, locale] of localizedDirectories) {
  const localizedSearch = JSON.parse(fs.readFileSync(path.join(root, directory, 'data/search-index.json'), 'utf8'));
  const localizedCanada = localizedSearch.filter((item) => item.url.startsWith(`${locale}/canada/`));
  assert.equal(localizedCanada.length, 73, `${locale}: localized search must retain 73 Canadian routes.`);
  assert.equal(new Set(localizedCanada.map((item) => item.url)).size, 73, `${locale}: localized search URLs must remain unique.`);
  for (const route of routes) {
    const record = localizedCanada.find((item) => item.url === `${locale}${route}`);
    assert.ok(record?.summary?.trim() && record.summary.length >= 80, `${locale}${route}: localized search summary must be present.`);
  }
}

const changedCanadaPages = spawnSync('git', ['diff', '--name-only', base, '--', 'canada', 'zh/canada', 'ja/canada', 'ko/canada', 'th/canada'], { cwd: root, encoding: 'utf8' });
assert.equal(changedCanadaPages.status, 0, `Could not inspect Canada page diff: ${changedCanadaPages.stderr}`);
const expectedChangedPages = [...routes, ...laterCa17Routes, ...laterCa18SearchRoutes].map((route) => `${route.slice(1)}index.html`).sort();
assert.deepEqual(changedCanadaPages.stdout.trim().split('\n').filter(Boolean).sort(), expectedChangedPages, 'Only four source HTML pages may change; localized pages are generated and separately checked for all five editions. Niagara and other groups must remain untouched.');

console.log(`CA16 route/date regression passed: verified the prior 60/73 and initial 13-route remainder; with CA16, 64/73 are complete and the exact final 9 are checked; Winnipeg source/page body match the original Canada addition before this pass; no Canada URLs added or removed; only four target search records and 20 target sitemap dates changed; five-edition canonical, hreflang, Article dates and localized search checked. Body gains: ${deltas.join('; ')}.`);
