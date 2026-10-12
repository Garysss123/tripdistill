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
  localizedIntegrationSitemapRoutes
} from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const git = (args) => execFileSync('git', args, { cwd: root });
const readFromGit = (spec) => git(['show', spec]);
const sorted = (values) => [...values].sort();

assert.equal(integrationRouteGroups.unitedKingdom.length, 9);
assert.equal(integrationRouteGroups.australia.length, 12);
assert.equal(integrationRouteGroups.france.length, 17);
assert.equal(integrationRouteGroups.switzerland.length, 45);
assert.equal(integrationRouteGroups.italy.length, 61);
assert.equal(integrationRouteGroups.canada.length, 25);
assert.equal(integrationRouteGroups.malaysia.length, 41);
assert.equal(integrationRoutes.length, 210);
assert.equal(integrationSitemapRoutes.length, 209);
assert.equal(integrationSearchRoutes.length, 178);

const changedFiles = git([
  'diff', '--name-only', integrationSprintBaseline, '--',
  'united-kingdom', 'australia', 'france', 'switzerland', 'italy', 'canada', 'malaysia'
]).toString('utf8').trim().split('\n').filter(Boolean);
const changedBodyRoutes = changedFiles
  .filter((file) => file.endsWith('/index.html'))
  .map((file) => `/${file.slice(0, -'index.html'.length)}`);
assert.deepEqual(sorted(changedBodyRoutes), sorted(integrationRoutes), 'the exact 210 English route bodies changed across UK, Australia, France, Switzerland, Italy, Canada and Malaysia');

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
assert.equal(changedSitemapUrls.length, 1045);
assert.deepEqual(
  new Set(changedSitemapUrls.map((url) => new URL(url).pathname)),
  expectedChangedSitemapPaths,
  'only the exact 209 routes across five editions have updated sitemap dates'
);
for (const url of changedSitemapUrls) assert.equal(currentSitemap.get(url), '2026-10-12', `${url}: current sitemap date`);

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
assert.equal(changedSearchRoutes.length, 178);
assert.deepEqual(new Set(changedSearchRoutes), new Set(integrationSearchRoutes), 'only the exact 178 expected English search records changed');

console.log('Integration scope regression passed: 210 exact English bodies, 1,045 date changes over 209 routes × five editions, 178 English search changes, and the unchanged 4,560-URL set.');
