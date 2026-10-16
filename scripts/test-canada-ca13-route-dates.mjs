#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parse } from 'parse5';
import { canadaClusters } from '../data/canada-guides.mjs';
import { laterCa16Ca18SearchRoutes } from './canada-ca16-ca18-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = '2af2a29577957d56fe530844039491ca0b3dac06';
const integrationBase = '6c265971eabf44995f24a771784e8567c205834f';
const englishOnly = process.argv.includes('--english-only');
const cluster = canadaClusters.find((item) => item.slug === 'saguenay-tadoussac');
assert.ok(cluster, 'Saguenay–Tadoussac cluster must exist.');
const routes = [
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
assert.equal(cluster.guides.length, 3);
assert.deepEqual([`/canada/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)], routes);
assert.equal(cluster.reviewDate, '12 October 2026');
assert.equal(cluster.isoDate, '2026-10-12');

function gitShow(spec) {
  const result = spawnSync('git', ['show', spec], { cwd: root, encoding: 'utf8' });
  assert.equal(result.status, 0, `Could not read ${spec}: ${result.stderr}`);
  return result.stdout;
}
const previousSearch = JSON.parse(gitShow(`${base}:data/search-index.json`));
const integrationSearch = JSON.parse(gitShow(`${integrationBase}:data/search-index.json`));
const search = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const targetSet = new Set(routes);
const previousCanada = previousSearch.filter((item) => item.url.startsWith('/canada/'));
const canada = search.filter((item) => item.url.startsWith('/canada/'));
assert.equal(canada.length, 73, 'Canada search must retain 73 existing routes.');
assert.equal(new Set(canada.map((item) => item.url)).size, 73, 'Canada search URLs must remain unique.');
assert.deepEqual(canada.map((item) => item.url).sort(), previousCanada.map((item) => item.url).sort(), 'The 73-route Canada URL set must remain exact.');
assert.deepEqual(
  canada.filter((item) => !targetSet.has(item.url) && !laterCa14Routes.includes(item.url) && !laterCa15Routes.includes(item.url) && !laterCa16Ca18SearchRoutes.includes(item.url)),
  integrationSearch.filter((item) => item.url.startsWith('/canada/') && !targetSet.has(item.url) && !laterCa14Routes.includes(item.url) && !laterCa15Routes.includes(item.url) && !laterCa16Ca18SearchRoutes.includes(item.url)),
  'Only exact later CA14 Canada records may differ outside the CA13 target from the pre-CA13 integration checkpoint.'
);
for (const route of routes) {
  const record = canada.find((item) => item.url === route);
  assert.ok(record?.summary?.trim() && record.summary.length >= 120, `${route}: search summary must be substantive.`);
  assert.notEqual(record.summary, previousSearch.find((item) => item.url === route)?.summary, `${route}: search summary must reflect revised content.`);
}

const locales = ['', '/zh', '/ja', '/ko', '/th'];
const readDates = (source) => new Map([...source.matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)].map((match) => [match[1], match[2]]));
const dates = readDates(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
const previousDates = readDates(gitShow(`${base}:sitemap.xml`));
const integrationDates = readDates(gitShow(`${integrationBase}:sitemap.xml`));
assert.deepEqual([...dates.keys()].sort(), [...previousDates.keys()].sort(), 'The sitemap URL set must not change.');
const expectedDateChanges = locales.flatMap((locale) => routes.map((route) => locale + route)).sort();
const actualDateChanges = [...dates].filter(([route, date]) => routes.some((target) => route.endsWith(target)) && integrationDates.get(route) !== date).map(([route]) => route).sort();
assert.deepEqual(actualDateChanges, expectedDateChanges, 'Only the four Saguenay routes × five editions may have changed Canada sitemap dates since the pre-CA13 integration checkpoint.');
for (const route of expectedDateChanges) assert.equal(dates.get(route), '2026-10-12', `${route}: lastmod must be current.`);

function collectText(node, output = []) {
  if (node.nodeName === '#text') output.push(node.value);
  if (node.tagName === 'script' || node.tagName === 'style') return output;
  for (const child of node.childNodes || []) collectText(child, output);
  return output;
}
function mainWords(html, route) {
  const document = parse(html);
  const queue = [...(document.childNodes || [])];
  let main;
  while (queue.length) {
    const node = queue.shift();
    if (node.tagName === 'main') { main = node; break; }
    queue.push(...(node.childNodes || []));
  }
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

for (const route of routes) {
  const relative = `${route.slice(1)}index.html`;
  const current = fs.readFileSync(path.join(root, relative), 'utf8');
  const previous = gitShow(`${base}:${relative}`);
  const delta = mainWords(current, route) - mainWords(previous, route);
  assert.ok(delta > 50, `${route}: body copy needs a substantial increase (got ${delta}).`);
  assert.equal(articleSchema(current, route)?.dateModified, cluster.isoDate, `${route}: Article dateModified mismatch.`);
  for (const locale of englishOnly ? [''] : locales) {
    const localizedRoute = locale + route;
    const localizedFile = path.join(root, localizedRoute.slice(1), 'index.html');
    assert.ok(fs.existsSync(localizedFile), `${localizedRoute}: localized page must exist.`);
    const localized = fs.readFileSync(localizedFile, 'utf8');
    assert.ok(localized.includes(`rel="canonical" href="https://tripdistill.com${localizedRoute}"`), `${localizedRoute}: canonical URL mismatch.`);
    if (locale) assert.ok(localized.includes(`lang="${locale === '/zh' ? 'zh-Hant' : locale.slice(1)}"`), `${localizedRoute}: html language mismatch.`);
    if (relative.includes('tadoussac-marine') || relative.includes('fjord-hiking') || relative.includes('saguenay-city-valley')) {
      assert.equal(articleSchema(localized, localizedRoute)?.dateModified, cluster.isoDate, `${localizedRoute}: Article dateModified mismatch.`);
    }
  }
  console.log(`${route}: +${delta} visible English main-body words; article and five-edition dates checked.`);
}

const sourceTerminal = '6a505cc56532c2f008e08b3990b0e8b9436cfe9a';
const changedSourcePages = spawnSync('git', ['diff', '--name-only', base, sourceTerminal, '--', 'canada'], { cwd: root, encoding: 'utf8' });
assert.equal(changedSourcePages.status, 0, `Could not inspect source page diff: ${changedSourcePages.stderr}`);
assert.deepEqual(
  changedSourcePages.stdout.trim().split('\n').filter(Boolean).sort(),
  routes.map((route) => `${route.slice(1)}index.html`).sort(),
  'The exact source terminal changes only its CA13 four Saguenay pages.'
);

console.log(`CA13 route/date regression passed: four existing routes, no added Canada URLs, 73 unchanged Canada search URLs, exact five-edition sitemap date set including later CA14 and CA15, and ${englishOnly ? 'English' : 'all localized'} canonical/article metadata.`);
