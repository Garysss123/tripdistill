import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { switzerlandClusters } from '../data/switzerland-guides.mjs';
import { switzerlandCh15GuideRefresh, switzerlandCh15IsoDate, switzerlandCh15ReviewDate } from '../data/switzerland-ch15-refresh.mjs';
import { switzerlandImageManifest } from '../data/switzerland-image-manifest.mjs';
import { loadCatalog } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = '7264d71dee1ec7f0c37dc8e5aeaefcd4561498b8';
const sourceTerminal = '99a5daff45c7c5ae862019f48adebac112f52f77';
const integrationBase = '4c7a5d2bd65a6a82474813c04db718dedb1ffc48';
const laterCa15Routes = [
  '/canada/prince-edward-island/',
  '/canada/prince-edward-island/charlottetown/',
  '/canada/prince-edward-island/cavendish-north-shore/',
  '/canada/prince-edward-island/coastal-drives/'
];
const laterAustraliaGapRoutes = [
  '/australia/sydney-harbour-coast/barangaroo-darling-harbour/',
  '/australia/sydney-harbour-coast/manly-north-head/',
  '/australia/blue-mountains-nsw-coast/royal-national-park-coast/',
  '/australia/blue-mountains-nsw-coast/jervis-bay-booderee/',
  '/australia/brisbane-moreton-bay/new-farm-fortitude-valley/',
  '/australia/brisbane-moreton-bay/west-end-cultural-precinct/',
  '/australia/gold-coast-scenic-rim/springbrook-national-park/',
  '/australia/gold-coast-scenic-rim/lamington-national-park/'
];
const locales = [
  { code: 'en', prefix: '' },
  { code: 'zh-Hant', prefix: '/zh' },
  { code: 'ja', prefix: '/ja' },
  { code: 'ko', prefix: '/ko' },
  { code: 'th', prefix: '/th' }
];
const targetRoutes = [
  '/switzerland/lugano-southern-ticino/mendrisiotto-generoso/',
  '/switzerland/locarno-ascona-valleys/maggia-centovalli/',
  '/switzerland/locarno-ascona-valleys/verzasca-valley/',
  '/switzerland/schaffhausen-rhine-falls/stein-am-rhein/'
];
const batchRoutes = [
  ...targetRoutes,
  '/switzerland/lugano-southern-ticino/lugano-lakefront/',
  '/switzerland/lugano-southern-ticino/san-salvatore-morcote/',
  '/switzerland/schaffhausen-rhine-falls/rhine-falls/',
  '/switzerland/schaffhausen-rhine-falls/schaffhausen-old-town/'
];
const targetSet = new Set(targetRoutes);
const derivedCardRoutes = new Set([
  '/switzerland/lugano-southern-ticino/',
  '/switzerland/locarno-ascona-valleys/',
  '/switzerland/schaffhausen-rhine-falls/',
  '/switzerland/lugano-southern-ticino/lugano-lakefront/',
  '/switzerland/lugano-southern-ticino/san-salvatore-morcote/',
  '/switzerland/locarno-ascona-valleys/locarno-ascona/',
  '/switzerland/locarno-ascona-valleys/maggia-centovalli/',
  '/switzerland/locarno-ascona-valleys/verzasca-valley/',
  '/switzerland/schaffhausen-rhine-falls/rhine-falls/',
  '/switzerland/schaffhausen-rhine-falls/schaffhausen-old-town/'
]);
const allRoutes = ['/switzerland/', ...switzerlandClusters.flatMap((cluster) => [`/switzerland/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)])];
const batchSuffix = '-switzerland-ch15-pages-20261012.json';
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');
const pageFile = (prefix, route) => path.join(root, prefix.slice(1), route.slice(1), 'index.html');

function article(html) {
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const json = JSON.parse(match[1]);
      const graph = Array.isArray(json['@graph']) ? json['@graph'] : [json];
      const found = graph.find((item) => item['@type'] === 'Article');
      if (found) return found;
    } catch {}
  }
  return null;
}

function words(html) {
  const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0] || '';
  const text = main.replace(/<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&(?:amp|lt|gt|quot|#39);/g, ' ').replace(/\s+/g, ' ').trim();
  return text ? text.split(' ').length : 0;
}

function sitemap(xml) {
  return new Map([...xml.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)].map((match) => [match[1], match[2]]));
}

function removeDerivedCards(html, route) {
  if (route.endsWith('/mendrisiotto-generoso/') || route.endsWith('/maggia-centovalli/') || route.endsWith('/verzasca-valley/') || route.endsWith('/stein-am-rhein/')) return html;
  if (route.split('/').filter(Boolean).length === 2) {
    return html
      .replace(/<section class="ch-guide-board"[\s\S]*?<\/section>/, '<!-- derived guide board removed for scope comparison -->')
      .replace(/<section class="ch-comparison"[\s\S]*?<\/section>/, '<!-- derived guide comparison removed for scope comparison -->')
      .replace(/<section class="section sources"[\s\S]*?<\/section>/, '<!-- derived photo credits removed for scope comparison -->');
  }
  return html
    .replace(/<section class="ch-related"[\s\S]*?<\/section>/, '<!-- derived related cards removed for scope comparison -->')
    .replace(/<section class="section sources"[\s\S]*?<\/section>/, '<!-- derived photo credits removed for scope comparison -->');
}

assert.equal(switzerlandCh15IsoDate, '2026-10-12');
assert.equal(switzerlandCh15ReviewDate, '12 October 2026');
assert.deepEqual(Object.keys(switzerlandCh15GuideRefresh).sort(), [
  'maggia-centovalli', 'mendrisiotto-generoso', 'stein-am-rhein', 'verzasca-valley'
]);
assert.equal(allRoutes.length, 65, 'Switzerland retains its 65 English routes');
assert.equal(new Set(allRoutes).size, 65, 'the existing route set remains unique');

for (const [slug, guide] of Object.entries(switzerlandCh15GuideRefresh)) {
  assert.equal(guide.isoDate, switzerlandCh15IsoDate, `${slug} has the CH15 modification date`);
  assert.equal(guide.reviewDate, switzerlandCh15ReviewDate, `${slug} has the CH15 review date`);
  assert.equal(guide.choices.length, 3, `${slug} has three real route choices`);
  assert.equal(guide.stages.length, 4, `${slug} has a four-stage executable plan`);
  assert.equal(guide.watch.length, 3, `${slug} has three distinct risk checks`);
  assert.equal(guide.faq.length, 3, `${slug} has three complete FAQs`);
  assert.ok(guide.sources.length >= 4, `${slug} has direct official planning sources`);
  assert.ok(guide.fieldContext.cards.length >= 2, `${slug} explains its local options beside official sources`);
}

const baseSitemap = sitemap(execFileSync('git', ['show', `${base}:sitemap.xml`], { cwd: root, encoding: 'utf8' }));
const sourceSitemap = sitemap(execFileSync('git', ['show', `${sourceTerminal}:sitemap.xml`], { cwd: root, encoding: 'utf8' }));
const integrationSitemap = sitemap(execFileSync('git', ['show', `${integrationBase}:sitemap.xml`], { cwd: root, encoding: 'utf8' }));
const currentSitemap = sitemap(read('sitemap.xml'));
assert.equal(baseSitemap.size, 4560, 'the base has 4,560 localized URLs');
assert.equal(sourceSitemap.size, baseSitemap.size, 'the CH15 source terminal retains the base URL count');
assert.equal(integrationSitemap.size, baseSitemap.size, 'the pre-CH15 integration retains the base URL count');
assert.equal(currentSitemap.size, baseSitemap.size, 'CH15 creates or removes no URL');
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'all sitemap URLs are unchanged');
const targetLocalized = new Set(locales.flatMap(({ prefix }) => targetRoutes.map((route) => `${prefix}${route}`)));
const laterCa15Localized = new Set(locales.flatMap(({ prefix }) => laterCa15Routes.map((route) => `${prefix}${route}`)));
const laterAustraliaGapLocalized = new Set(locales.flatMap(({ prefix }) => laterAustraliaGapRoutes.map((route) => `${prefix}${route}`)));
const sourceDateChanges = [...sourceSitemap].filter(([route, date]) => baseSitemap.get(route) !== date).map(([route]) => route).sort();
assert.deepEqual(sourceDateChanges, [...targetLocalized].sort(), 'the exact CH15 source terminal changes only the four target routes across five locales');
const integrationDateChanges = [...currentSitemap].filter(([route, date]) => integrationSitemap.get(route) !== date).map(([route]) => route).sort();
assert.deepEqual(integrationDateChanges, [...targetLocalized, ...laterCa15Localized, ...laterAustraliaGapLocalized].sort(), 'the cumulative integration changes only the four CH15, four later CA15 and eight exact AU gap routes across five locales');
for (const route of targetLocalized) assert.equal(currentSitemap.get(route), switzerlandCh15IsoDate, `${route} carries the CH15 review date`);

const baseSearch = JSON.parse(execFileSync('git', ['show', `${base}:data/search-index.json`], { cwd: root, encoding: 'utf8' }));
const sourceSearch = JSON.parse(execFileSync('git', ['show', `${sourceTerminal}:data/search-index.json`], { cwd: root, encoding: 'utf8' }));
const integrationSearch = JSON.parse(execFileSync('git', ['show', `${integrationBase}:data/search-index.json`], { cwd: root, encoding: 'utf8' }));
const currentSearch = JSON.parse(read('data/search-index.json'));
assert.equal(currentSearch.length, baseSearch.length, 'the English search record count is unchanged');
assert.equal(sourceSearch.length, baseSearch.length, 'the CH15 source terminal retains all search records');
assert.equal(integrationSearch.length, currentSearch.length, 'the pre-CH15 integration and current search record counts match');
for (const record of sourceSearch.filter((item) => !targetSet.has(item.url))) assert.deepEqual(record, baseSearch.find((item) => item.url === record.url), `CH15 source terminal changed a non-target search record: ${record.url}`);
const laterCa15Set = new Set(laterCa15Routes);
const laterAustraliaGapSet = new Set(laterAustraliaGapRoutes);
for (const record of currentSearch.filter((item) => !targetSet.has(item.url) && !laterCa15Set.has(item.url) && !laterAustraliaGapSet.has(item.url))) assert.deepEqual(record, integrationSearch.find((item) => item.url === record.url), `CH15/CA15/AU-gap integration changed an undeclared non-target search record: ${record.url}`);
for (const route of targetRoutes) assert.deepEqual(currentSearch.find((item) => item.url === route), sourceSearch.find((item) => item.url === route), `${route} search record matches the exact CH15 source terminal`);

let totalBaseWords = 0;
let totalCurrentWords = 0;
const perRouteWordDeltas = [];
for (const route of targetRoutes) {
  const clusterSlug = route.split('/')[2];
  const guideSlug = route.split('/')[3];
  const cluster = switzerlandClusters.find((item) => item.slug === clusterSlug);
  const guide = cluster.guides.find((item) => item.slug === guideSlug);
  const manifestImage = switzerlandImageManifest[`${clusterSlug}/${guideSlug}`];
  assert.ok(manifestImage, `${route} retains a documented existing image asset`);
  const english = read(`${route.slice(1)}index.html`);
  assert.equal(english, execFileSync('git', ['show', `${sourceTerminal}:${route.slice(1)}index.html`], { cwd: root, encoding: 'utf8' }).toString('utf8'), `${route} matches the exact CH15 source terminal`);
  const metadata = article(english);
  assert.ok(metadata, `${route} has Article metadata`);
  assert.equal(metadata.datePublished, '2026-09-12', `${route} keeps its original publication date`);
  assert.equal(metadata.dateModified, switzerlandCh15IsoDate, `${route} has the synchronized review date`);
  assert.equal(metadata.description, guide.summary, `${route} metadata uses its revised summary`);
  assert.ok(english.includes(manifestImage.src), `${route} displays its related existing photograph`);
  assert.ok(english.includes(switzerlandCh15ReviewDate), `${route} visibly displays its review date`);
  for (const [sourceUrl] of guide.sources) assert.ok(english.includes(`href="${sourceUrl}"`), `${route} visibly links its official source ${sourceUrl}`);
  for (const term of ({
    'mendrisiotto-generoso': ['Capolago-Riva San Vitale', 'Fiore di pietra', 'historic-centre audio tour'],
    'maggia-centovalli': ['Locarno–Cevio–Cavergno', 'Intragna', 'Camedo'],
    'verzasca-valley': ['PostBus 321', 'Sonogno', 'Safe Waters', 'Sentierone'],
    'stein-am-rhein': ['Hohenklingen Castle', 'market square', 'URh boat']
  })[guideSlug]) assert.ok(english.includes(term), `${route} contains its route-specific decision detail: ${term}`);
  const searchRecord = currentSearch.find((item) => item.url === route);
  assert.ok(searchRecord, `${route} retains an English search record`);
  assert.equal(searchRecord.summary, guide.summary, `${route} search and Article summaries match`);
  const count = words(english);
  const baseCount = words(execFileSync('git', ['show', `${base}:${route.slice(1)}index.html`], { cwd: root, encoding: 'utf8' }));
  totalCurrentWords += count;
  totalBaseWords += baseCount;
  perRouteWordDeltas.push(`${route}: +${count - baseCount} (${baseCount} → ${count})`);
  for (const { code, prefix } of locales) {
    const editionRoute = `${prefix}${route}`;
    const localized = read(path.relative(root, pageFile(prefix, route)));
    assert.ok(localized.includes(`<html lang="${code}"`), `${editionRoute} declares the correct language`);
    assert.ok(localized.includes(`hreflang="${code}" href="https://tripdistill.com${editionRoute}"`), `${editionRoute} keeps its self alternate`);
    const localizedArticle = article(localized);
    assert.ok(localizedArticle, `${editionRoute} has Article metadata`);
    assert.equal(localizedArticle.dateModified, switzerlandCh15IsoDate, `${editionRoute} has the same CH15 modification date`);
    const localSearch = JSON.parse(read(`${prefix.slice(1)}/data/search-index.json`));
    assert.ok(localSearch.some((item) => item.url === editionRoute), `${editionRoute} has a localized search record`);
    if (code !== 'en') {
      const translations = loadCatalog(code).translations;
      assert.ok(translations[guide.summary], `${editionRoute} has a reviewed summary translation`);
      assert.equal(localizedArticle.description, translations[guide.summary], `${editionRoute} Article description is translated`);
      assert.ok(localized.includes(translations[guide.summary]), `${editionRoute} renders its translated summary`);
      assert.equal(localSearch.find((item) => item.url === editionRoute)?.summary, translations[guide.summary], `${editionRoute} search uses the same translated summary`);
    }
  }
}
assert.ok(totalCurrentWords - totalBaseWords >= 1500, `CH15 adds at least 1,500 visible English body words (${totalCurrentWords - totalBaseWords})`);

for (const route of allRoutes.filter((item) => !targetSet.has(item))) {
  const relative = `${route.slice(1)}index.html`;
  const before = execFileSync('git', ['show', `${base}:${relative}`], { cwd: root, encoding: 'utf8' });
  const sourcePage = execFileSync('git', ['show', `${sourceTerminal}:${relative}`], { cwd: root, encoding: 'utf8' });
  const current = read(relative);
  if (derivedCardRoutes.has(route)) {
    assert.equal(removeDerivedCards(current, route), removeDerivedCards(before, route), `${route} changes only derivative guide or related-card sections`);
    assert.equal(current, sourcePage.toString('utf8'), `${route} matches the exact CH15 source terminal's derived card update`);
  } else {
    assert.equal(current, before, `${route} remains byte-identical to the exact CH15 base`);
  }
}

for (const code of ['zh-Hant', 'ja', 'ko', 'th']) {
  const directory = path.join(root, 'data/i18n/reviewed', code);
  const name = fs.readdirSync(directory).find((item) => item.endsWith(batchSuffix));
  assert.ok(name, `${code} has a CH15 four-route reviewed batch`);
  const batch = JSON.parse(fs.readFileSync(path.join(directory, name), 'utf8'));
  assert.equal(batch.qualityStatus, 'reviewed');
  assert.deepEqual(batch.routes, batchRoutes);
  assert.ok(Object.values(batch.translations).every((value) => typeof value === 'string' && value.trim()), `${code} batch has no blank translation`);
  assert.equal(batch.reviewProvenance.independentSecondModel, false, `${code} records that there was no independent second model`);
  assert.ok(batch.reviewProvenance.writer.includes('does not expose a verifiable model identifier'), `${code} states that the execution environment does not verify the model identifier`);
  assert.ok(batch.reviewProvenance.reviewer.includes('Same-model'), `${code} labels the self-review accurately`);
}

console.log(`CH15 regression passed: four existing routes, +${totalCurrentWords - totalBaseWords} English body words, five-language dates and search, no URL changes, and only derivative card updates outside the four substantive pages.`);
console.log(`English <main> body word-count deltas against ${base}: ${perRouteWordDeltas.join('; ')}`);
