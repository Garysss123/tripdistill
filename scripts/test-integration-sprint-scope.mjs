#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import {
  integrationRoutes,
  integrationRouteGroups,
  integrationSearchRoutes,
  integrationSitemapRoutes,
  integrationSprintBaseline,
  postIntegrationHawaiiRoutes,
  postHawaiiNewOrleansRoutes,
  postIntegrationAustraliaRoutes,
  postIntegrationCanberraRoutes,
  postIntegrationAlpsMargaretRoutes,
  postNewOrleansAtlantaRoutes,
  postAtlantaFloridaRoutes,
  postHaLongHCMCIntegrationRoutes,
  localizedIntegrationSitemapRoutes
} from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const git = (args) => execFileSync('git', args, { cwd: root });
const readFromGit = (spec) => git(['show', spec]);
const sorted = (values) => [...values].sort();

assert.equal(integrationRouteGroups.unitedKingdom.length, 9);
assert.equal(integrationRouteGroups.australia.length, 48);
assert.equal(integrationRouteGroups.france.length, 17);
assert.equal(integrationRouteGroups.switzerland.length, 61);
assert.ok(integrationRouteGroups.switzerland.includes('/switzerland/'), 'the substantively refreshed Switzerland country overview stays in the route ledger');
assert.equal(integrationRouteGroups.italy.length, 61);
assert.equal(integrationRouteGroups.canada.length, 53);
assert.equal(integrationRouteGroups.malaysia.length, 41);
assert.equal(integrationRouteGroups.vietnam.length, 12);
assert.equal(integrationRoutes.length, 302);
assert.equal(integrationSitemapRoutes.length, 301);
assert.equal(integrationSearchRoutes.length, 271);
for (const route of [
  '/switzerland/lugano-southern-ticino/lugano-lakefront/',
  '/switzerland/lugano-southern-ticino/san-salvatore-morcote/',
  '/switzerland/locarno-ascona-valleys/locarno-ascona/',
  '/switzerland/schaffhausen-rhine-falls/rhine-falls/',
  '/switzerland/schaffhausen-rhine-falls/schaffhausen-old-town/'
]) {
  assert(integrationSitemapRoutes.includes(route), `${route}: CH16 date belongs in exact integration scope`);
  assert(integrationSearchRoutes.includes(route), `${route}: CH16 search belongs in exact integration scope`);
}
const haLongBase = '10b3f39eb069646b8381bfe43767a0998f4ad2c8';
const haLongTerminal = '92996ef6631fb3775f1bf4f996292059b4aeca83';
const haLongRoutes = [
  '/vietnam/ha-long-cat-ba/',
  '/vietnam/ha-long-cat-ba/bai-tu-long/',
  '/vietnam/ha-long-cat-ba/lan-ha-town/',
  '/vietnam/ha-long-cat-ba/national-park/'
];
const alpsMargaretBase = '5f1205bbbee0ef636c34e883c399e6fceaa7b508';
const alpsMargaretContent = '55e3b9710c24b45975bdaea5769ab3e4a39ffc44';
const alpsMargaretTerminal = 'a99fbe9fe996ccedbac42b1b9386447a11403854';
const alpsMargaretRoutes = postIntegrationAlpsMargaretRoutes;
assert.equal(git(['rev-parse', `${alpsMargaretContent}^1`]).toString('utf8').trim(), '768151d3f42378358c122a1cde55100fcec9eafa', 'the Alps/Margaret content source has the exact reviewed arrow-fix parent');
assert.equal(git(['rev-parse', `${alpsMargaretTerminal}^1`]).toString('utf8').trim(), alpsMargaretContent, 'the Alps/Margaret terminal has the exact content parent');
assert.equal(git(['rev-parse', `${alpsMargaretTerminal}^{tree}`]).toString('utf8').trim(), 'a2452494f1f0240329a90c1ccf7036f2c0aab3ef', 'the Alps/Margaret terminal tree matches the verified source');
assert.equal(git(['merge-base', alpsMargaretBase, alpsMargaretTerminal]).toString('utf8').trim(), alpsMargaretBase, 'the Alps/Margaret source descends from its exact Canberra base');
const changedAlpsMargaretHtml = git(['diff', '--name-only', alpsMargaretBase, alpsMargaretContent, '--', 'australia'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedAlpsMargaretHtml, alpsMargaretRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Alps/Margaret content source changes exactly four English bodies');
for (const route of alpsMargaretRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${alpsMargaretContent}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches the exact Alps/Margaret content commit`);

assert.equal(git(['rev-parse', `${haLongTerminal}^1`]).toString('utf8').trim(), haLongBase, 'the Ha Long terminal has the exact authorized Vietnam parent');
assert.equal(git(['rev-parse', `${haLongTerminal}^{tree}`]).toString('utf8').trim(), '9cc6e4dccc94b701e6a6579c0f05b32b275beb28', 'the Ha Long source terminal tree matches the verified source');
assert.equal(git(['merge-base', haLongBase, haLongTerminal]).toString('utf8').trim(), haLongBase, 'the Ha Long source descends from its exact base');
assert.deepEqual(sorted(integrationRouteGroups.vietnam.filter((route) => route.startsWith('/vietnam/ha-long-cat-ba/'))), sorted(['/vietnam/ha-long-cat-ba/core-cruise/', ...haLongRoutes]), "Ha Long's current four routes are disjoint from the already-counted core-cruise guide.");
const changedHaLongHtml = git(['diff', '--name-only', haLongBase, haLongTerminal, '--', 'vietnam/ha-long-cat-ba'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedHaLongHtml, haLongRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Ha Long source changes exactly four existing body paths, excluding core-cruise');
for (const route of haLongRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${haLongTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches the exact Ha Long terminal`);
assert.equal(readFromGit(`${haLongBase}:vietnam/ha-long-cat-ba/core-cruise/index.html`).toString('utf8'), readFromGit(`${haLongTerminal}:vietnam/ha-long-cat-ba/core-cruise/index.html`).toString('utf8'), 'the already-counted core-cruise body is unchanged by the Ha Long follow-on');

assert.deepEqual(
  readFromGit(`${integrationSprintBaseline}:switzerland/index.html`),
  readFromGit('545800b8d30c9494e3555e56ca02df6dc4ad6094:switzerland/index.html'),
  'the original Zurich refresh did not substantively update the Switzerland country overview'
);

const changedFiles = git([
  'diff', '--name-only', integrationSprintBaseline, '--',
  'united-kingdom', 'australia', 'france', 'switzerland', 'italy', 'canada', 'malaysia', 'vietnam', 'usa/hawaii', 'usa/new-orleans', 'usa/atlanta', 'usa/miami', 'usa/orlando'
]).toString('utf8').trim().split('\n').filter(Boolean);
const changedBodyRoutes = changedFiles
  .filter((file) => file.endsWith('/index.html'))
  .map((file) => `/${file.slice(0, -'index.html'.length)}`);
assert.equal(changedBodyRoutes.length, 334);
assert.deepEqual(sorted(changedBodyRoutes), sorted([...integrationRoutes, ...postIntegrationHawaiiRoutes, ...postIntegrationAustraliaRoutes, ...postHawaiiNewOrleansRoutes, ...postIntegrationCanberraRoutes, ...postNewOrleansAtlantaRoutes, ...postIntegrationAlpsMargaretRoutes, ...postAtlantaFloridaRoutes, ...postHaLongHCMCIntegrationRoutes]), 'the exact integration scope and eight separate four-route follow-on batches changed');

const taskBase = 'c7df46be0dc3f40649ff44d672861e971d0c082b';
const newOrleansTerminal = 'dffbdfaacd0f8b583b35cbb4985ae007d3daf1a7';
const newOrleansRoutes = [
  '/usa/new-orleans/',
  '/usa/new-orleans/french-quarter/',
  '/usa/new-orleans/garden-district/',
  '/usa/new-orleans/river-wetlands/'
];
assert.equal(git(['rev-parse', `${newOrleansTerminal}^1`]).toString('utf8').trim(), taskBase, 'the New Orleans source terminal must have the exact authorized Hawaii parent');
assert.equal(git(['rev-parse', `${newOrleansTerminal}^{tree}`]).toString('utf8').trim(), '15f9c37ba5a27ab84ecb3b1ada1f1a645ef2ec10', 'the New Orleans source terminal tree must match the verified source');
assert.equal(git(['merge-base', taskBase, newOrleansTerminal]).toString('utf8').trim(), taskBase, 'the New Orleans source must descend from the exact authorized base');
const changedNewOrleansHtml = git(['diff', '--name-only', taskBase, '--', 'usa/new-orleans'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedNewOrleansHtml, newOrleansRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the source branch adds exactly the four authorized New Orleans English body paths');
for (const route of newOrleansRoutes) {
  const relative = `${route.slice(1)}index.html`;
  assert.equal(fs.readFileSync(path.join(root, relative), 'utf8'), readFromGit(`${newOrleansTerminal}:${relative}`).toString('utf8'), `${route}: integrated English body matches the exact New Orleans source terminal`);
}
const atlantaTerminal = '55147104cc93f80b6c9ec7f0b01436b01661e435';
const atlantaBase = 'dffbdfaacd0f8b583b35cbb4985ae007d3daf1a7';
const atlantaRoutes = postNewOrleansAtlantaRoutes;
assert.equal(git(['rev-parse', `${atlantaTerminal}^1`]).toString('utf8').trim(), atlantaBase, 'the Atlanta source terminal has the exact authorized New Orleans parent');
assert.equal(git(['rev-parse', `${atlantaTerminal}^{tree}`]).toString('utf8').trim(), '6d50ae96a20b8a9e4069a7d0d7d27fb3f1daeaed', 'the Atlanta source terminal tree matches the verified source');
assert.equal(git(['merge-base', atlantaBase, atlantaTerminal]).toString('utf8').trim(), atlantaBase, 'the Atlanta source descends from its exact base');
const changedAtlantaHtml = git(['diff', '--name-only', atlantaBase, '--', 'usa/atlanta'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedAtlantaHtml, atlantaRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Atlanta source changes exactly its four selected English routes');
for (const route of atlantaRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${atlantaTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches exact Atlanta terminal`);
assert.deepEqual(git(['diff', '--name-only', taskBase, '--', 'usa/new-york']).toString('utf8').trim(), '', 'the New York acceptance sample is unchanged from the exact task base');
const floridaTerminal = '654f0475dcbaa22f88f88a20169e1f18a04b14ab';
const floridaRoutes = postAtlantaFloridaRoutes;
assert.equal(git(['rev-parse', `${floridaTerminal}^1`]).toString('utf8').trim(), atlantaTerminal, 'the Florida terminal has the exact authorized Atlanta parent');
assert.equal(git(['rev-parse', `${floridaTerminal}^{tree}`]).toString('utf8').trim(), 'e58a2ef60dbbb84e85b6d4a1f306a74c38431ddc', 'the Florida terminal tree matches the verified source');
assert.equal(git(['merge-base', atlantaTerminal, floridaTerminal]).toString('utf8').trim(), atlantaTerminal, 'the Florida source descends from the exact Atlanta base');
const changedFloridaHtml = git(['diff', '--name-only', atlantaTerminal, floridaTerminal, '--', 'usa/miami', 'usa/orlando'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedFloridaHtml, floridaRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Florida source changes exactly four existing Miami/Orlando English bodies');
for (const route of floridaRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${floridaTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches exact Florida source`);
assert.deepEqual(git(['diff', '--name-only', integrationSprintBaseline, '--', 'usa/chicago']).toString('utf8').trim(), '', 'the Chicago source batch remains outside this integration checkpoint');
const hcmcTerminal = '75c8caf79053a67cf645a53bed215a72eff07baf';
const hcmcBase = '92996ef6631fb3775f1bf4f996292059b4aeca83';
const hcmcRoutes = postHaLongHCMCIntegrationRoutes;
assert.equal(git(['rev-parse', `${hcmcTerminal}^1`]).toString('utf8').trim(), hcmcBase, 'the HCMC terminal has the exact authorized Ha Long parent');
assert.equal(git(['rev-parse', `${hcmcTerminal}^{tree}`]).toString('utf8').trim(), '9cb808e06ae3468a0b79844d08f2ac5f2831c50f', 'the HCMC terminal tree matches the verified source');
assert.equal(git(['merge-base', hcmcBase, hcmcTerminal]).toString('utf8').trim(), hcmcBase, 'the HCMC source descends from the exact Ha Long base');
const changedHcmcHtml = git(['diff', '--name-only', hcmcBase, hcmcTerminal, '--', 'vietnam/ho-chi-minh-city'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedHcmcHtml, hcmcRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the HCMC source changes exactly four existing English bodies');
for (const route of hcmcRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${hcmcTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches exact HCMC source`);



function parseSitemap(xml) {
  return new Map([...xml.matchAll(/<url><loc>(.*?)<\/loc><lastmod>(.*?)<\/lastmod>.*?<\/url>/gs)]
    .map(([, url, date]) => [url, date]));
}

const baselineSitemap = parseSitemap(readFromGit(`${integrationSprintBaseline}:sitemap.xml`).toString('utf8'));
const currentSitemap = parseSitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baselineSitemap.size, 4560);
assert.equal(currentSitemap.size, 4560);
assert.deepEqual(new Set(currentSitemap.keys()), new Set(baselineSitemap.keys()), 'the exact 4,560-URL set is unchanged');
const changedSitemapUrls = [...currentSitemap]
  .filter(([url, date]) => baselineSitemap.get(url) !== date)
  .map(([url]) => url);
const prefixes = ['', '/zh', '/ja', '/ko', '/th'];
const expectedChangedSitemapPaths = localizedIntegrationSitemapRoutes(prefixes);
for (const prefix of prefixes) {
  for (const route of postIntegrationHawaiiRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postHawaiiNewOrleansRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postIntegrationCanberraRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postIntegrationAlpsMargaretRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postNewOrleansAtlantaRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postAtlantaFloridaRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postHaLongHCMCIntegrationRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postIntegrationAustraliaRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
}
assert.equal(changedSitemapUrls.length, 1665);
assert.deepEqual(
  new Set(changedSitemapUrls.map((url) => new URL(url).pathname)),
  expectedChangedSitemapPaths,
  'only the exact 297 integrated and eight disjoint four-route follow-on batches have updated sitemap dates across five editions'
);
for (const url of changedSitemapUrls) {
  const route = new URL(url).pathname;
  const expectedDate = [...alpsMargaretRoutes, ...postAtlantaFloridaRoutes, ...hcmcRoutes].some((candidate) => route.endsWith(candidate)) ? '2026-10-13' : '2026-10-12';
  assert.equal(currentSitemap.get(url), expectedDate, `${url}: current sitemap date`);
}
const alpsMargaretBaseSitemap = parseSitemap(readFromGit(`${alpsMargaretBase}:sitemap.xml`).toString('utf8'));
const changedAlpsMargaretDates = [...currentSitemap]
  .filter(([url, date]) => alpsMargaretRoutes.some((route) => new URL(url).pathname.endsWith(route)) && alpsMargaretBaseSitemap.get(url) !== date)
  .map(([url]) => new URL(url).pathname).sort();
assert.deepEqual(changedAlpsMargaretDates, prefixes.flatMap((prefix) => alpsMargaretRoutes.map((route) => `${prefix}${route}`)).sort(), 'exactly four Alps/Margaret dates across five editions changed from the exact Canberra base');
const taskBaseSitemap = parseSitemap(readFromGit(`${taskBase}:sitemap.xml`).toString('utf8'));
const changedTaskBaseNewOrleansUrls = [...currentSitemap]
  .filter(([url, date]) => newOrleansRoutes.some((route) => new URL(url).pathname.endsWith(route)) && taskBaseSitemap.get(url) !== date)
  .map(([url]) => new URL(url).pathname).sort();
assert.deepEqual(changedTaskBaseNewOrleansUrls, prefixes.flatMap((prefix) => newOrleansRoutes.map((route) => `${prefix}${route}`)).sort(), 'exactly the four New Orleans dates across all five editions changed from the task base');
const haLongBaseSitemap = parseSitemap(readFromGit(`${haLongBase}:sitemap.xml`).toString('utf8'));
const changedHaLongDates = [...currentSitemap]
  .filter(([url, date]) => haLongRoutes.some((route) => new URL(url).pathname.endsWith(route)) && haLongBaseSitemap.get(url) !== date)
  .map(([url]) => new URL(url).pathname).sort();
assert.deepEqual(changedHaLongDates, prefixes.flatMap((prefix) => haLongRoutes.map((route) => `${prefix}${route}`)).sort(), 'exactly four Ha Long dates across five editions changed from the exact Vietnam base');
const taskBaseAtlantaSitemap = parseSitemap(readFromGit(`${atlantaBase}:sitemap.xml`).toString('utf8'));
const changedTaskBaseAtlantaUrls = [...currentSitemap]
  .filter(([url, date]) => atlantaRoutes.some((route) => new URL(url).pathname.endsWith(route)) && taskBaseAtlantaSitemap.get(url) !== date)
  .map(([url]) => new URL(url).pathname).sort();
assert.deepEqual(changedTaskBaseAtlantaUrls, prefixes.flatMap((prefix) => atlantaRoutes.map((route) => `${prefix}${route}`)).sort(), 'exactly the four selected Atlanta dates across all five editions changed from the exact task base');

const baselineSearch = JSON.parse(readFromGit(`${integrationSprintBaseline}:data/search-index.json`).toString('utf8'));
const currentSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const recordsByUrl = (records) => new Map(records.map((record) => [record.url, record]));
const baselineSearchByUrl = recordsByUrl(baselineSearch);
const currentSearchByUrl = recordsByUrl(currentSearch);
assert.equal(baselineSearch.length, 955);
assert.equal(currentSearch.length, 955);
assert.deepEqual(new Set(currentSearchByUrl.keys()), new Set(baselineSearchByUrl.keys()), 'the English search URL set is unchanged');
const changedSearchRoutes = [...currentSearchByUrl]
  .filter(([url, record]) => !isDeepStrictEqual(record, baselineSearchByUrl.get(url)))
  .map(([url]) => url);
assert.equal(changedSearchRoutes.length, 299);
assert.deepEqual(new Set(changedSearchRoutes), new Set([...integrationSearchRoutes, ...postIntegrationHawaiiRoutes, ...postIntegrationAustraliaRoutes, ...postHawaiiNewOrleansRoutes, ...postIntegrationCanberraRoutes, ...postNewOrleansAtlantaRoutes, ...postIntegrationAlpsMargaretRoutes, ...postAtlantaFloridaRoutes]), 'only the exact integrated and seven search-changing four-route follow-on groups changed');
const alpsMargaretSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${alpsMargaretTerminal}:data/search-index.json`).toString('utf8')));
for (const route of alpsMargaretRoutes) assert.deepEqual(currentSearchByUrl.get(route), alpsMargaretSourceSearch.get(route), `${route}: exact Alps/Margaret source search record is integrated`);
const haLongSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${haLongTerminal}:data/search-index.json`).toString('utf8')));
for (const route of haLongRoutes) assert.deepEqual(currentSearchByUrl.get(route), haLongSourceSearch.get(route), `${route}: exact Ha Long source search record is integrated`);
const atlantaSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${atlantaTerminal}:data/search-index.json`).toString('utf8')));
for (const route of atlantaRoutes) assert.deepEqual(currentSearchByUrl.get(route), atlantaSourceSearch.get(route), `${route}: exact Atlanta source search record is integrated`);
const floridaSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${floridaTerminal}:data/search-index.json`).toString('utf8')));
for (const route of floridaRoutes) assert.deepEqual(currentSearchByUrl.get(route), floridaSourceSearch.get(route), `${route}: exact Florida source search record is integrated`);
const hcmcSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${hcmcTerminal}:data/search-index.json`).toString('utf8')));
for (const route of hcmcRoutes) assert.deepEqual(currentSearchByUrl.get(route), hcmcSourceSearch.get(route), `${route}: exact HCMC source search record is integrated`);

console.log('Integration scope regression passed: 334 exact English bodies, 1,665 date changes over 333 routes × five editions, 299 English search changes, and the unchanged 4,560-URL set.');
