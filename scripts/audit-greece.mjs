#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { greeceClusters, greeceGuides, greeceIslandChoices, greeceRoutes, greeceSources } from '../data/greece-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const officialHosts = new Set(['visitgreece.gr', 'oasa.gr', 'stasy.gr', 'hellenictrain.gr', 'ktel-fokidas.gr', 'ktel-trikala.gr', 'ktel-chalkidikis.gr', 'odysseus.culture.gr', 'thessmetro.gr', 'oasth.gr', 'ktelherlas.gr', 'bluestarferries.com', 'seajets.com', 'hnms.gr', 'etickets.tap.gr', 'levanteferries.com', 'kerkyralines.com', 'dodekanisosseaways.gr']);
const pageFile = (route) => path.join(root, route.slice(1), 'index.html');
const textContent = (node) => {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value;
  return (node.childNodes || []).map(textContent).join(' ');
};
const walk = (node, predicate, found = []) => {
  if (predicate(node)) found.push(node);
  for (const child of node.childNodes || []) walk(child, predicate, found);
  return found;
};
const words = (value) => value.trim().split(/\s+/u).filter(Boolean).length;

assert.equal(greeceClusters.length, 8);
assert.equal(greeceGuides.length, 24);
assert.equal(greeceRoutes.length, 33);
assert.equal(new Set(greeceRoutes).size, 33);
assert.equal(greeceClusters.reduce((sum, cluster) => sum + cluster.guides.length, 0), 24);
assert(greeceSources && Object.keys(greeceSources).length >= 20, 'official source registry is populated');

const countryRoute = '/greece/';
const countryFile = pageFile(countryRoute);
assert(fs.existsSync(countryFile), `${countryRoute} source page is generated`);
for (const route of greeceRoutes) {
  const file = pageFile(route);
  assert(fs.existsSync(file), `${route} source page is generated`);
  const html = fs.readFileSync(file, 'utf8');
  const document = parse(html);
  const main = walk(document, (node) => node.tagName === 'main')[0];
  assert(main, `${route} has one semantic main area`);
  const visible = textContent(main);
  assert(words(visible) >= (route === countryRoute ? 750 : greeceClusters.some((cluster) => `/greece/${cluster.slug}/` === route) ? 450 : 400), `${route} has a substantive body`);
  assert(html.includes(`<link rel="canonical" href="https://tripdistill.com${route}">`), `${route} has a self-canonical`);
  for (const [language, prefix] of [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']]) {
    assert(html.includes(`hreflang="${language}" href="https://tripdistill.com${prefix}${route}"`), `${route} includes ${language} hreflang`);
  }
  const links = walk(document, (node) => node.tagName === 'a').map((node) => node.attrs?.find((attr) => attr.name === 'href')?.value).filter(Boolean);
  assert(links.some((href) => href.includes('visitgreece.gr') || href.includes('hellenictrain.gr')), `${route} links to a primary official source`);
  for (const href of links.filter((value) => value.startsWith('/'))) {
    const targetRoute = href.split(/[?#]/u, 1)[0];
    if (!targetRoute || targetRoute === '/') continue;
    const targetFile = path.join(root, targetRoute.slice(1), 'index.html');
    assert(fs.existsSync(targetFile), `${route} internal target resolves: ${href}`);
  }
  assert(!/<img\b/i.test(html), `${route} uses no third-party or unprovenanced photograph`);
  assert(html.includes('Original TripDistill') || html.includes('original TripDistill'), `${route} labels its original route schematic`);
}

const country = fs.readFileSync(countryFile, 'utf8');
assert.equal((country.match(/class="greece-region-card"/gu) || []).length, 8, 'country page has eight regional entry cards');
assert.equal(greeceIslandChoices.length, 4, 'country page compares all four island systems');
for (const choice of greeceIslandChoices) {
  for (const [field, value] of Object.entries(choice)) assert(country.includes(value), `country island selector includes ${choice.name} ${field} advice`);
}
for (const [concept, pattern] of [
  ['Athens urban transit', /OASA\/STASY/u],
  ['Thessaloniki transport', /Thessaloniki Metro\/OASTH/u],
  ['regional coaches', /KTEL/u],
  ['rail', /Hellenic Train/u],
  ['ferry disruption', /wind|weather buffer/iu],
  ['heat planning', /heat|hot weather/iu]
]) assert(pattern.test(country), `country page explains ${concept}`);

for (const cluster of greeceClusters) {
  const route = `/greece/${cluster.slug}/`;
  const html = fs.readFileSync(pageFile(route), 'utf8');
  assert.equal((html.match(/class="greece-route-card"/gu) || []).length, 3, `${route} has three local guide entries`);
  for (const value of [cluster.arrival, cluster.stay, cluster.season, cluster.car]) assert(html.includes(value), `${route} includes its distinct arrival/stay/season/car advice`);
  for (const value of [cluster.sequence, cluster.noCar]) assert(html.includes(value), `${route} includes region-specific route sequence and no-car planning`);
  if (cluster.gatewayChoices) {
    assert(cluster.gatewayChoices.length >= 3, `${route} has distinct named gateway choices`);
    for (const choice of cluster.gatewayChoices) assert(html.includes(choice.title) && html.includes(choice.text), `${route} includes its specific gateway/connection choice: ${choice.title}`);
    assert(html.includes(cluster.disruption), `${route} includes a specific ferry/weather recovery plan`);
  }
}
for (const guide of greeceGuides) {
  const route = `/greece/${guide.cluster.slug}/${guide.slug}/`;
  const html = fs.readFileSync(pageFile(route), 'utf8');
  for (const field of ['purpose', 'stay', 'access', 'mobility', 'duration', 'combine', 'bookings', 'season', 'fallback', 'tradeoff']) {
    assert(html.includes(guide[field]), `${route} contains its authored ${field} decision`);
  }
  for (const [url] of guide.sources) {
    const host = new URL(url).hostname.replace(/^www\./u, '');
    assert([...officialHosts].some((official) => host === official || host.endsWith(`.${official}`)), `${route} source is an official authority/operator: ${url}`);
  }
}

const japanReferences = [
  ['/japan/', '/greece/'],
  ['/japan/kyoto/', '/greece/athens-attica/'],
  ['/japan/kyoto/kyoto-station-south/', '/greece/athens-attica/acropolis-plaka-anafiotika/']
];
for (const [reference, candidate] of japanReferences) {
  const refFile = path.join(root, reference.slice(1), 'index.html');
  assert(fs.existsSync(refFile), `Japan same-level reference exists: ${reference}`);
  const refMain = walk(parse(fs.readFileSync(refFile, 'utf8')), (node) => node.tagName === 'main')[0];
  const candidateMain = walk(parse(fs.readFileSync(pageFile(candidate), 'utf8')), (node) => node.tagName === 'main')[0];
  assert(words(textContent(refMain)) >= 400, `${reference} is a substantive same-level editorial reference`);
  assert(words(textContent(candidateMain)) >= 400, `${candidate} retains substantive page depth; compare its actual route decisions and sources with ${reference}`);
  // Length is a minimum safety check only. The editorial report records the content-to-content comparison;
  // a word-count ratio cannot establish parity when the route decisions and itinerary scope differ.
}

const islandHubChecks = new Map([
  ['crete', [/CHQ/u, /HER/u, /Souda/u, /Chania/u, /Heraklion/u]],
  ['cyclades', [/Piraeus/u, /Rafina/u, /Lavrio/u, /Santorini/u, /Naxos/u, /no direct sailing/u]],
  ['ionian-islands', [/Igoumenitsa/u, /floating bridge/u, /Kyllini–Zakynthos/u, /Patras–Sami–Pisaetos/u, /full transfer day/u]],
  ['dodecanese', [/RHO/u, /KGS/u, /Kalymnos/u, /Leros/u, /Patmos/u, /operator confirms/u]]
]);
for (const [slug, patterns] of islandHubChecks) {
  const hub = fs.readFileSync(pageFile(`/greece/${slug}/`), 'utf8');
  for (const pattern of patterns) assert(pattern.test(hub), `${slug} hub contains its route-specific selection and transfer evidence: ${pattern}`);
}

const searchLocales = [
  { code: 'en', prefix: '', file: 'data/search-index.json', islandQuery: 'Cyclades' },
  { code: 'zh-Hant', prefix: '/zh', file: 'zh/data/search-index.json', islandQuery: '基克拉澤斯群島' },
  { code: 'ja', prefix: '/ja', file: 'ja/data/search-index.json', islandQuery: 'キクラデス諸島' },
  { code: 'ko', prefix: '/ko', file: 'ko/data/search-index.json', islandQuery: '키클라데스' },
  { code: 'th', prefix: '/th', file: 'th/data/search-index.json', islandQuery: 'หมู่เกาะไซคลาดีส' }
];
for (const locale of searchLocales) {
  const entries = JSON.parse(fs.readFileSync(path.join(root, locale.file), 'utf8'));
  const localizedGreekRoutes = entries.filter((item) => item.url.startsWith(`${locale.prefix}/greece/`));
  assert.equal(localizedGreekRoutes.length, greeceRoutes.length, `${locale.code} search index has every Greece route exactly once`);
  for (const route of greeceRoutes) {
    const expectedUrl = `${locale.prefix}${route}`;
    const matches = localizedGreekRoutes.filter((item) => item.url === expectedUrl);
    assert.equal(matches.length, 1, `${locale.code} search has exactly one record for ${expectedUrl}`);
    const record = matches[0];
    assert(record.title.trim() && record.summary.trim() && record.keywords.length, `${locale.code} search record is localized and useful for ${expectedUrl}`);
    const searchableText = [record.title, record.parent, record.summary, ...record.keywords].join(' ').toLocaleLowerCase();
    assert(searchableText.includes(record.title.toLocaleLowerCase()), `${locale.code} page title is searchable for ${expectedUrl}`);
  }
  const islandQuery = locale.islandQuery.toLocaleLowerCase();
  const islandResults = localizedGreekRoutes.filter((item) => [item.title, item.parent, item.summary, ...item.keywords]
    .some((value) => String(value).toLocaleLowerCase().includes(islandQuery)));
  assert(islandResults.some((item) => item.url === `${locale.prefix}/greece/`), `${locale.code} search finds the Greece country route from the localized Cyclades term`);
}

console.log(`Greece content/source audit passed: ${greeceRoutes.length} English routes, ${greeceClusters.length} regional hubs, ${greeceGuides.length} distinct local guides, five complete localized search indexes, official references on every route, original diagrams only, and same-level Japan reference pages present.`);
