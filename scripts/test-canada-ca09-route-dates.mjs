#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parse } from 'parse5';
import { canadaClusters } from '../data/canada-guides.mjs';
import { canadaImageManifest } from '../data/canada-image-manifest.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = 'f87440e3baf68ac4cb5dd0465422554e99432e0a';
const sourceTerminal = '2bb3ca78bb81bef88f01f4f11bbe84d75865418c';
const cluster = canadaClusters.find((item) => item.slug === 'calgary-badlands');
assert.ok(cluster, 'Calgary & Alberta Badlands cluster must exist.');
const routes = [
  '/canada/calgary-badlands/',
  '/canada/calgary-badlands/calgary-core/',
  '/canada/calgary-badlands/drumheller-royal-tyrrell/',
  '/canada/calgary-badlands/dinosaur-provincial-park/'
];
const laterCa10Routes = [
  '/canada/newfoundland-labrador/',
  '/canada/newfoundland-labrador/st-johns-signal-hill/',
  '/canada/newfoundland-labrador/bonavista-trinity/',
  '/canada/newfoundland-labrador/gros-morne/'
];
const laterCa11Routes = [
  '/canada/ottawa-gatineau/',
  '/canada/ottawa-gatineau/parliament-rideau/',
  '/canada/ottawa-gatineau/national-museums/',
  '/canada/ottawa-gatineau/gatineau-park/'
];
const laterCa12Routes = [
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
assert.equal(cluster.guides.length, 3);
assert.deepEqual([`/canada/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)], routes);
assert.equal(cluster.reviewDate, '12 October 2026');
assert.equal(cluster.isoDate, '2026-10-12');

const previousSearch = spawnSync('git', ['show', `${base}:data/search-index.json`], { cwd: root, encoding: 'utf8' });
assert.equal(previousSearch.status, 0, `Could not read the CA08 search index: ${previousSearch.stderr}`);
const previousSearchRecords = JSON.parse(previousSearch.stdout);
const sourceSearch = spawnSync('git', ['show', `${sourceTerminal}:data/search-index.json`], { cwd: root, encoding: 'utf8' });
assert.equal(sourceSearch.status, 0, `Could not read the exact CA09 source terminal search index: ${sourceSearch.stderr}`);
const sourceSearchRecords = JSON.parse(sourceSearch.stdout);
const previousCanadaRoutes = previousSearchRecords.filter((record) => record.url.startsWith('/canada/')).map((record) => record.url).sort();
const search = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const canadaSearch = search.filter((record) => record.url.startsWith('/canada/'));
const canadaRoutes = canadaSearch.map((record) => record.url).sort();
assert.equal(canadaSearch.length, 73, 'Canada search route count must remain 73.');
assert.equal(new Set(canadaRoutes).size, 73, 'Canada search URLs must remain unique.');
assert.deepEqual(canadaRoutes, previousCanadaRoutes, 'CA09 must retain the exact 73 Canada routes from CA08.');
assert.deepEqual(
  sourceSearchRecords.filter((record) => !routes.includes(record.url)),
  previousSearchRecords.filter((record) => !routes.includes(record.url)),
  'The exact CA09 source terminal must leave every non-CA09 search record unchanged from its source base.'
);
assert.deepEqual(
  search.filter((record) => routes.includes(record.url)),
  sourceSearchRecords.filter((record) => routes.includes(record.url)),
  'Integrated CA09 search records must match the exact source terminal.'
);
for (const route of routes) {
  const record = canadaSearch.find((item) => item.url === route);
  assert.ok(record, `${route}: missing from Canada search.`);
  assert.ok(record.summary.length >= 120, `${route}: search summary must be substantive.`);
  assert.ok(record.keywords.length >= 4, `${route}: search keywords must retain useful coverage.`);
}
assert.ok(canadaSearch.find((item) => item.url === routes[0]).summary.includes('two-hour drive'), 'The hub search summary must distinguish the two badlands corridors.');
assert.ok(canadaSearch.find((item) => item.url === routes[3]).summary.includes('48 km northeast of Brooks'), 'The Dinosaur Park summary must identify the southern access anchor.');

const locales = ['', '/zh', '/ja', '/ko', '/th'];
const datedRoutes = [...routes, '/canada/'];
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const previousSitemap = spawnSync('git', ['show', `${base}:sitemap.xml`], { cwd: root, encoding: 'utf8' });
assert.equal(previousSitemap.status, 0, `Could not read the CA08 sitemap: ${previousSitemap.stderr}`);
const readSitemapDates = (contents) => new Map([...contents.matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)].map((match) => [match[1], match[2]]));
const previousSitemapDates = readSitemapDates(previousSitemap.stdout);
const sourceSitemap = spawnSync('git', ['show', `${sourceTerminal}:sitemap.xml`], { cwd: root, encoding: 'utf8' });
assert.equal(sourceSitemap.status, 0, `Could not read the exact CA09 source terminal sitemap: ${sourceSitemap.stderr}`);
const sourceSitemapDates = readSitemapDates(sourceSitemap.stdout);
const sitemapDates = readSitemapDates(sitemap);
assert.deepEqual([...sourceSitemapDates.keys()].filter((url) => !url.includes('/spain/')).sort(), [...previousSitemapDates.keys()].sort(), 'The CA09 source terminal must retain the exact CA08 sitemap URL set.');
assert.deepEqual([...sitemapDates.keys()].filter((url) => !url.includes('/spain/')).sort(), [...previousSitemapDates.keys()].sort(), 'CA09 must retain the exact CA08 sitemap URL set.');
const expectedSourceSitemapDateChanges = locales.flatMap((locale) => routes.map((route) => locale + route)).sort();
const actualSourceSitemapDateChanges = [...sourceSitemapDates].filter(([route, date]) => previousSitemapDates.get(route) !== date).map(([route]) => route).sort();
assert.deepEqual(actualSourceSitemapDateChanges, expectedSourceSitemapDateChanges, 'The exact CA09 source terminal may change only its four article routes across five editions.');

function collectJsonLd(node, output = []) {
  if (node.tagName === 'script' && node.attrs?.some((attr) => attr.name === 'type' && attr.value === 'application/ld+json')) {
    try { output.push(JSON.parse(node.childNodes?.map((child) => child.value || '').join('') || '')); }
    catch { assert.fail('A CA09 localized page contains malformed JSON-LD.'); }
  }
  for (const child of node.childNodes || []) collectJsonLd(child, output);
  return output;
}

for (const locale of locales) {
  for (const route of datedRoutes) {
    const localizedRoute = locale + route;
    assert.equal(sitemapDates.get(localizedRoute), '2026-10-12', `${localizedRoute}: sitemap lastmod must be 2026-10-12.`);
    const file = path.join(root, localizedRoute.slice(1), 'index.html');
    assert.ok(fs.existsSync(file), `${localizedRoute}: localized page must exist.`);
    const html = fs.readFileSync(file, 'utf8');
    const graph = collectJsonLd(parse(html)).flatMap((item) => item['@graph'] || [item]);
    const article = graph.find((item) => item['@type'] === 'Article');
    assert.equal(article?.dateModified, '2026-10-12', `${localizedRoute}: Article dateModified must be current.`);
    assert.ok(html.includes(`rel="canonical" href="https://tripdistill.com${localizedRoute}"`), `${localizedRoute}: canonical URL mismatch.`);
  }
}

const tyrrellAsset = canadaImageManifest['calgary-badlands/drumheller-royal-tyrrell'];
assert.equal(tyrrellAsset.alt, 'Dinosaur displays inside the Royal Tyrrell Museum', 'Manifest alt text must describe the verified museum pixels.');
for (const locale of locales) {
  const file = path.join(root, locale.slice(1), 'canada/calgary-badlands/drumheller-royal-tyrrell/index.html');
  const html = fs.readFileSync(file, 'utf8');
  assert.ok(html.includes('Albertosaurus_-_Canada%27s_Dinosaur_Museum'), `${locale || 'en'}: museum image source credit must be present.`);
  assert.ok(html.includes('CC0'), `${locale || 'en'}: museum license evidence must be present.`);
}

console.log('CA09 route/date regression passed: exactly four existing body routes; 73 unique Canada routes and source-terminal non-target search scope and exact source date scope preserved; exact sitemap URL set; five localized versions plus the separately refreshed country card; current canonical/article dates; and corrected museum alt text with source/license provenance.');
