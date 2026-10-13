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
  postNewOrleansAtlantaRoutes,
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
  'united-kingdom', 'australia', 'france', 'switzerland', 'italy', 'canada', 'malaysia', 'vietnam', 'usa/hawaii', 'usa/new-orleans', 'usa/atlanta'
]).toString('utf8').trim().split('\n').filter(Boolean);
const changedBodyRoutes = changedFiles
  .filter((file) => file.endsWith('/index.html'))
  .map((file) => `/${file.slice(0, -'index.html'.length)}`);
assert.equal(changedBodyRoutes.length, 322);
assert.deepEqual(sorted(changedBodyRoutes), sorted([...integrationRoutes, ...postIntegrationHawaiiRoutes, ...postIntegrationAustraliaRoutes, ...postHawaiiNewOrleansRoutes, ...postIntegrationCanberraRoutes, ...postNewOrleansAtlantaRoutes]), 'the exact 298-route integration scope, four-route Hawaii, Australia, New Orleans, Canberra and Atlanta follow-on bodies changed');

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
  for (const route of postNewOrleansAtlantaRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postIntegrationAustraliaRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
}
assert.equal(changedSitemapUrls.length, 1605);
assert.deepEqual(
  new Set(changedSitemapUrls.map((url) => new URL(url).pathname)),
  expectedChangedSitemapPaths,
  'only the exact 297 integrated and five disjoint four-route follow-on batches have updated sitemap dates across five editions'
);
for (const url of changedSitemapUrls) assert.equal(currentSitemap.get(url), '2026-10-12', `${url}: current sitemap date`);
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
assert.equal(changedSearchRoutes.length, 291);
assert.deepEqual(new Set(changedSearchRoutes), new Set([...integrationSearchRoutes, ...postIntegrationHawaiiRoutes, ...postIntegrationAustraliaRoutes, ...postHawaiiNewOrleansRoutes, ...postIntegrationCanberraRoutes, ...postNewOrleansAtlantaRoutes]), 'only the exact 267 integrated and four-route Hawaii, Australia, New Orleans, Canberra and Atlanta follow-on English search records changed');
const haLongSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${haLongTerminal}:data/search-index.json`).toString('utf8')));
for (const route of haLongRoutes) assert.deepEqual(currentSearchByUrl.get(route), haLongSourceSearch.get(route), `${route}: exact Ha Long source search record is integrated`);
const atlantaSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${atlantaTerminal}:data/search-index.json`).toString('utf8')));
for (const route of atlantaRoutes) assert.deepEqual(currentSearchByUrl.get(route), atlantaSourceSearch.get(route), `${route}: exact Atlanta source search record is integrated`);

console.log('Integration scope regression passed: 322 exact English bodies, 1,605 date changes over 321 routes × five editions, 291 English search changes, and the unchanged 4,560-URL set.');
