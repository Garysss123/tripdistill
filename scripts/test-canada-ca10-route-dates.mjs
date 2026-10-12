#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parse } from 'parse5';
import { canadaClusters } from '../data/canada-guides.mjs';
import { canadaImageManifest } from '../data/canada-image-manifest.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = '2bb3ca78bb81bef88f01f4f11bbe84d75865418c';
const integrationBase = '1a5b5b679ac92f7c95bdb3b7dd81c54c8ce069a3';
const cluster = canadaClusters.find((item) => item.slug === 'newfoundland-labrador');
assert.ok(cluster, 'Newfoundland & Labrador cluster must exist.');
const routes = [
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
assert.equal(cluster.guides.length, 3);
assert.deepEqual([`/canada/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)], routes);
assert.equal(cluster.reviewDate, '12 October 2026');
assert.equal(cluster.isoDate, '2026-10-12');

const previousSearch = spawnSync('git', ['show', `${base}:data/search-index.json`], { cwd: root, encoding: 'utf8' });
assert.equal(previousSearch.status, 0, `Could not read the CA09 search index: ${previousSearch.stderr}`);
const previousSearchRecords = JSON.parse(previousSearch.stdout);
const previousCanadaRoutes = previousSearchRecords.filter((record) => record.url.startsWith('/canada/')).map((record) => record.url).sort();
const integrationSearch = spawnSync('git', ['show', `${integrationBase}:data/search-index.json`], { cwd: root, encoding: 'utf8' });
assert.equal(integrationSearch.status, 0, `Could not read the pre-CA10 integration search index: ${integrationSearch.stderr}`);
const integrationSearchRecords = JSON.parse(integrationSearch.stdout);
const search = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const canadaSearch = search.filter((record) => record.url.startsWith('/canada/'));
const canadaRoutes = canadaSearch.map((record) => record.url).sort();
assert.equal(canadaSearch.length, 73, 'Canada search route count must remain 73.');
assert.equal(new Set(canadaRoutes).size, 73, 'Canada search URLs must remain unique.');
assert.deepEqual(canadaRoutes, previousCanadaRoutes, 'CA10 must retain the exact 73 Canada routes from CA09.');
assert.deepEqual(
  search.filter((record) => record.url.startsWith('/canada/') && !routes.includes(record.url) && !laterCa11Routes.includes(record.url)),
  integrationSearchRecords.filter((record) => record.url.startsWith('/canada/') && !routes.includes(record.url) && !laterCa11Routes.includes(record.url)),
  'CA10 must leave all non-target and later-CA11 Canada search records unchanged from the exact pre-CA10 integration parent.'
);
for (const route of routes) {
  const record = canadaSearch.find((item) => item.url === route);
  assert.ok(record, `${route}: missing from Canada search.`);
  assert.ok(record.summary.length >= 120, `${route}: search summary must be substantive.`);
  assert.ok(record.keywords.length >= 4, `${route}: search keywords must retain useful coverage.`);
  assert.notEqual(record.summary, previousSearchRecords.find((item) => item.url === route)?.summary, `${route}: search summary must change with the substantive route refresh.`);
}

const locales = ['', '/zh', '/ja', '/ko', '/th'];
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const previousSitemap = spawnSync('git', ['show', `${integrationBase}:sitemap.xml`], { cwd: root, encoding: 'utf8' });
assert.equal(previousSitemap.status, 0, `Could not read the pre-CA10 integration sitemap: ${previousSitemap.stderr}`);
const readSitemapDates = (contents) => new Map([...contents.matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)].map((match) => [match[1], match[2]]));
const previousSitemapDates = readSitemapDates(previousSitemap.stdout);
const sitemapDates = readSitemapDates(sitemap);
assert.deepEqual([...sitemapDates.keys()].sort(), [...previousSitemapDates.keys()].sort(), 'CA10 must retain the exact CA09 sitemap URL set.');
const expectedDateChanges = locales.flatMap((locale) => [...routes, ...laterCa11Routes].map((route) => locale + route)).sort();
const actualDateChanges = [...sitemapDates].filter(([route, date]) => route.includes('/canada/') && previousSitemapDates.get(route) !== date).map(([route]) => route).sort();
assert.deepEqual(actualDateChanges, expectedDateChanges, 'Only the four CA10 article routes × five editions may have changed sitemap dates.');

function collectJsonLd(node, output = []) {
  if (node.tagName === 'script' && node.attrs?.some((attr) => attr.name === 'type' && attr.value === 'application/ld+json')) {
    try { output.push(JSON.parse(node.childNodes?.map((child) => child.value || '').join('') || '')); }
    catch { assert.fail('A CA10 localized page contains malformed JSON-LD.'); }
  }
  for (const child of node.childNodes || []) collectJsonLd(child, output);
  return output;
}

for (const locale of locales) {
  for (const route of routes) {
    const localizedRoute = locale + route;
    assert.equal(sitemapDates.get(localizedRoute), '2026-10-12', `${localizedRoute}: sitemap lastmod must be 2026-10-12.`);
    const file = path.join(root, localizedRoute.slice(1), 'index.html');
    assert.ok(fs.existsSync(file), `${localizedRoute}: localized page must exist.`);
    const html = fs.readFileSync(file, 'utf8');
    const graph = collectJsonLd(parse(html)).flatMap((item) => item['@graph'] || [item]);
    const article = graph.find((item) => item['@type'] === 'Article');
    assert.equal(article?.dateModified, '2026-10-12', `${localizedRoute}: Article dateModified must be current.`);
    assert.ok(html.includes(`rel="canonical" href="https://tripdistill.com${localizedRoute}"`), `${localizedRoute}: canonical URL mismatch.`);
    if (route.endsWith('/gros-morne/')) {
      const diagram = cluster.guides.find((guide) => guide.slug === 'gros-morne')?.routeDiagram;
      assert.ok(diagram, 'Gros Morne route diagram metadata must exist.');
      assert.ok(html.includes(diagram.src) && html.includes(diagram.source) && html.includes(diagram.rightsStatusUrl), `${localizedRoute}: diagram source and rights-status links must be present.`);
    }
  }
}

const expectedAlts = {
  'newfoundland-labrador/st-johns-signal-hill': 'Rocky Signal Hill headland above the Atlantic at St. John’s',
  'newfoundland-labrador/bonavista-trinity': 'St. Paul’s Anglican Church and graveyard in Trinity, Newfoundland',
  'newfoundland-labrador/gros-morne': 'Rocky shore and mountains at Western Brook Pond in Gros Morne National Park'
};
for (const [key, alt] of Object.entries(expectedAlts)) assert.equal(canadaImageManifest[key]?.alt, alt, `${key}: source manifest alt must match the viewed pixels.`);

const countryPage = fs.readFileSync(path.join(root, 'canada/index.html'), 'utf8');
assert.ok(countryPage.includes('href="/canada/newfoundland-labrador/"'), 'The country page may show the updated regional card, but it does not count as a refreshed article.');
console.log('CA10 route/date regression passed: exactly four existing Newfoundland articles; 73 Canada search routes and all non-target/non-later-CA11 records unchanged from the exact pre-CA10 integration parent; exact sitemap URL set with only four CA10 and four later CA11 route dates changed across five editions; localized Article/canonical dates and diagram provenance; corrected photo alt text. The Canada overview card is ancillary and is not counted in the 40/73 article increment.');
