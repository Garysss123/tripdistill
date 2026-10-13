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
  postNewOrleansAtlantaRoutes,
  postAtlantaFloridaRoutes,
  postFloridaChicagoRoutes,
  postChicagoNewEnglandRoutes,
  postNewEnglandArizonaRoutes,
  postArizonaLosAngelesRoutes,
  postOctober13Routes,
  localizedIntegrationSitemapRoutes
} from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const git = (args) => execFileSync('git', args, { cwd: root });
const readFromGit = (spec) => git(['show', spec]);
const sorted = (values) => [...values].sort();

assert.equal(integrationRouteGroups.unitedKingdom.length, 9);
assert.equal(integrationRouteGroups.australia.length, 32);
assert.equal(integrationRouteGroups.france.length, 17);
assert.equal(integrationRouteGroups.switzerland.length, 61);
assert.ok(integrationRouteGroups.switzerland.includes('/switzerland/'), 'the substantively refreshed Switzerland country overview stays in the route ledger');
assert.equal(integrationRouteGroups.italy.length, 61);
assert.equal(integrationRouteGroups.canada.length, 41);
assert.equal(integrationRouteGroups.malaysia.length, 41);
assert.equal(integrationRoutes.length, 262);
assert.equal(integrationSitemapRoutes.length, 256);
assert.equal(integrationSearchRoutes.length, 225);
assert.deepEqual(
  readFromGit(`${integrationSprintBaseline}:switzerland/index.html`),
  readFromGit('545800b8d30c9494e3555e56ca02df6dc4ad6094:switzerland/index.html'),
  'the original Zurich refresh did not substantively update the Switzerland country overview'
);

const changedFiles = git([
  'diff', '--name-only', integrationSprintBaseline, '--',
  'united-kingdom', 'australia', 'france', 'switzerland', 'italy', 'canada', 'malaysia'
]).toString('utf8').trim().split('\n').filter(Boolean);
const changedBodyRoutes = changedFiles
  .filter((file) => file.endsWith('/index.html'))
  .map((file) => `/${file.slice(0, -'index.html'.length)}`);
assert.deepEqual(sorted(changedBodyRoutes), sorted(integrationRoutes), 'the exact 262 English route bodies changed across UK, Australia, France, Switzerland, Italy, Canada and Malaysia');

const taskBase = 'c7df46be0dc3f40649ff44d672861e971d0c082b';
const newOrleansRoutes = [
  '/usa/new-orleans/',
  '/usa/new-orleans/french-quarter/',
  '/usa/new-orleans/garden-district/',
  '/usa/new-orleans/river-wetlands/'
];
const changedNewOrleansHtml = git(['diff', '--name-only', taskBase, '--', 'usa/new-orleans'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedNewOrleansHtml, newOrleansRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the source branch adds exactly the four authorized New Orleans English body paths');
const atlantaRoutes = [
  '/usa/atlanta/',
  '/usa/atlanta/king-historic-district/',
  '/usa/atlanta/midtown-museums/',
  '/usa/atlanta/beltline/'
];
const atlantaBase = 'dffbdfaacd0f8b583b35cbb4985ae007d3daf1a7';
const changedAtlantaHtml = git(['diff', '--name-only', atlantaBase, '--', 'usa/atlanta'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedAtlantaHtml, atlantaRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the source branch adds exactly the four selected Atlanta English body paths after its exact base');
assert.deepEqual(git(['diff', '--name-only', taskBase, '--', 'usa/new-york']).toString('utf8').trim(), '', 'the New York acceptance sample is unchanged from the exact task base');
const newEnglandBase = 'dc88a75c561d3e7a4f30bd00afadb6e8d52841d7';
const newEnglandHtml = git(['diff', '--name-only', newEnglandBase, '--', 'usa/new-england'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(newEnglandHtml, postChicagoNewEnglandRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the source branch adds exactly the four selected New England English body paths after the exact Chicago base');
const arizonaBase = '45cae962fdc7fb500cfceb505203efbfd2dbc396';
const arizonaHtml = git(['diff', '--name-only', arizonaBase, '--', 'usa/arizona'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(arizonaHtml, postNewEnglandArizonaRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the source branch adds exactly the four selected Arizona English body paths after the exact New England source base');
assert.deepEqual(git(['diff', '--name-only', arizonaBase, '--', 'usa/new-england']).toString('utf8').trim(), '', 'the completed New England pages remain unchanged after the exact source base');
assert.deepEqual(git(['diff', '--name-only', arizonaBase, '--', 'usa/new-york', 'usa/index.html']).toString('utf8').trim(), '', 'New York and the U.S. overview remain unchanged after the exact source base');
const losAngelesHtml = git(['diff', '--name-only', arizonaBase, '--', 'usa/los-angeles'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(losAngelesHtml, postArizonaLosAngelesRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the source branch adds exactly the four selected Los Angeles English body paths after the exact Arizona source base');

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
for (const prefix of prefixes) for (const route of [...postIntegrationHawaiiRoutes, ...postHawaiiNewOrleansRoutes]) expectedChangedSitemapPaths.add(`${prefix}${route}`);
for (const prefix of prefixes) for (const route of postNewOrleansAtlantaRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
for (const prefix of prefixes) for (const route of postAtlantaFloridaRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
for (const prefix of prefixes) for (const route of postFloridaChicagoRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
for (const prefix of prefixes) for (const route of postChicagoNewEnglandRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
for (const prefix of prefixes) for (const route of postNewEnglandArizonaRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
for (const prefix of prefixes) for (const route of postArizonaLosAngelesRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
assert.equal(changedSitemapUrls.length, 1440);
assert.deepEqual(
  new Set(changedSitemapUrls.map((url) => new URL(url).pathname)),
  expectedChangedSitemapPaths,
  'only the exact historical integration and twenty-eight scoped U.S. refresh route dates across five editions have updated sitemap dates'
);
for (const url of changedSitemapUrls) {
  const route = new URL(url).pathname;
  const expectedDate = postOctober13Routes.some((candidate) => route.endsWith(candidate)) ? '2026-10-13' : '2026-10-12';
  assert.equal(currentSitemap.get(url), expectedDate, `${url}: current sitemap date`);
}
const taskBaseSitemap = parseSitemap(readFromGit(`${taskBase}:sitemap.xml`).toString('utf8'));
const changedTaskBaseNewOrleansUrls = [...currentSitemap]
  .filter(([url, date]) => newOrleansRoutes.some((route) => new URL(url).pathname.endsWith(route)) && taskBaseSitemap.get(url) !== date)
  .map(([url]) => new URL(url).pathname).sort();
assert.deepEqual(changedTaskBaseNewOrleansUrls, prefixes.flatMap((prefix) => newOrleansRoutes.map((route) => `${prefix}${route}`)).sort(), 'exactly the four New Orleans dates across all five editions changed from the task base');
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
assert.equal(changedSearchRoutes.length, 257);
assert.deepEqual(new Set(changedSearchRoutes), new Set([...integrationSearchRoutes, ...postIntegrationHawaiiRoutes, ...postHawaiiNewOrleansRoutes, ...postNewOrleansAtlantaRoutes, ...postOctober13Routes]), 'only the exact 225 historical and 28 later source-refresh English search records changed');

console.log('Integration scope regression passed: 262 historical integration English bodies plus 32 scoped U.S. refresh paths, 1,440 date changes over 288 routes × five editions, 257 English search changes, and the unchanged 4,560-URL set.');
