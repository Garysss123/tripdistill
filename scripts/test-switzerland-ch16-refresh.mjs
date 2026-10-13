import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { switzerlandClusters, switzerlandGuides } from '../data/switzerland-guides.mjs';
import { switzerlandCh14HubRefresh } from '../data/switzerland-ch14-refresh.mjs';
import { switzerlandCh15GuideRefresh } from '../data/switzerland-ch15-refresh.mjs';
import { switzerlandCh16Routes } from './switzerland-ch15-scope.mjs';
import { switzerlandCh16GuideRefresh, switzerlandCh16IsoDate, switzerlandCh16ReviewDate } from '../data/switzerland-ch16-refresh.mjs';
import { switzerlandImageManifest } from '../data/switzerland-image-manifest.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = '99a5daff45c7c5ae862019f48adebac112f52f77';
const locales = [
  { code: 'en', prefix: '' },
  { code: 'zh-Hant', prefix: '/zh' },
  { code: 'ja', prefix: '/ja' },
  { code: 'ko', prefix: '/ko' },
  { code: 'th', prefix: '/th' }
];
const targetRoutes = [
  '/switzerland/lugano-southern-ticino/lugano-lakefront/',
  '/switzerland/lugano-southern-ticino/san-salvatore-morcote/',
  '/switzerland/locarno-ascona-valleys/locarno-ascona/',
  '/switzerland/schaffhausen-rhine-falls/rhine-falls/',
  '/switzerland/schaffhausen-rhine-falls/schaffhausen-old-town/'
];
const targetSet = new Set(targetRoutes);
const expectedSlugs = targetRoutes.map((route) => route.split('/').filter(Boolean).at(-1));
const ch14Routes = new Set(['/switzerland/', ...Object.keys(switzerlandCh14HubRefresh).map((slug) => `/switzerland/${slug}/`)]);
const ch15Routes = new Set(switzerlandGuides.filter((guide) => Object.hasOwn(switzerlandCh15GuideRefresh, guide.slug)).map((guide) => guide.url));
const ch16Routes = new Set(switzerlandGuides.filter((guide) => Object.hasOwn(switzerlandCh16GuideRefresh, guide.slug)).map((guide) => guide.url));
const allRoutes = ['/switzerland/', ...switzerlandClusters.flatMap((cluster) => [`/switzerland/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)])];
const pageSuffix = '-switzerland-ch16-pages-20261012.json';
const searchSuffix = '-switzerland-ch16-search-20261012.json';
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

assert.equal(switzerlandCh16IsoDate, '2026-10-12');
assert.equal(switzerlandCh16ReviewDate, '12 October 2026');
assert.deepEqual([...ch16Routes].sort(), [...targetRoutes].sort(), 'CH16 covers exactly the five residual body guides');
assert.deepEqual(Object.keys(switzerlandCh16GuideRefresh).sort(), [...expectedSlugs].sort());
assert.equal(allRoutes.length, 65);
assert.equal(new Set(allRoutes).size, 65);
assert.deepEqual([...ch16Routes].sort(), [...switzerlandCh16Routes].sort(), 'the CH16 test and historic-scope ledger name the same five paths');
assert.equal(ch14Routes.size, 4, 'CH14 is the country page and its three reviewed hubs');
assert.equal(ch15Routes.size, 4, 'CH15 is its four substantive child guides');
const olderCoverage = new Set(allRoutes.filter((route) => !ch14Routes.has(route) && !ch15Routes.has(route) && !ch16Routes.has(route)));
assert.equal(olderCoverage.size, 52, 'CH01–13 account for thirteen hubs and thirty-nine child guides');
assert.equal(new Set([...olderCoverage, ...ch14Routes, ...ch15Routes, ...ch16Routes]).size, 65, 'the path ledger covers every route exactly once');

for (const [slug, guide] of Object.entries(switzerlandCh16GuideRefresh)) {
  assert.equal(guide.isoDate, switzerlandCh16IsoDate, `${slug} has the CH16 date`);
  assert.equal(guide.reviewDate, switzerlandCh16ReviewDate, `${slug} has the visible review date`);
  assert.equal(guide.choices.length, 3, `${slug} has three meaningful choices`);
  assert.equal(guide.stages.length, 4, `${slug} has a four-stage route`);
  assert.equal(guide.watch.length, 3, `${slug} has three failure checks`);
  assert.equal(guide.faq.length, 3, `${slug} has three complete FAQs`);
  assert.ok(guide.sources.length >= 4, `${slug} has direct official planning references`);
  assert.ok(guide.fieldContext.cards.length >= 3, `${slug} has sourced field context`);
}

const baseSitemap = sitemap(execFileSync('git', ['show', `${base}:sitemap.xml`], { cwd: root, encoding: 'utf8' }));
const currentSitemap = sitemap(read('sitemap.xml'));
assert.equal(baseSitemap.size, 4560, 'the selected base has 4,560 localized URLs');
assert.equal(currentSitemap.size, baseSitemap.size, 'CH16 creates or removes no URL');
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'all sitemap URLs remain unchanged');
const expectedDated = new Set(locales.flatMap(({ prefix }) => targetRoutes.map((route) => `${prefix}${route}`)));
const changedDates = [...currentSitemap].filter(([route, date]) => route.includes('/switzerland/') && baseSitemap.get(route) !== date);
assert.equal(changedDates.length, 25, 'exactly five guides across five editions have updated dates');
for (const [route, date] of changedDates) {
  assert.ok(expectedDated.has(route), `unexpected sitemap date change: ${route}`);
  assert.equal(date, switzerlandCh16IsoDate);
}

const baseSearch = JSON.parse(execFileSync('git', ['show', `${base}:data/search-index.json`], { cwd: root, encoding: 'utf8' }));
const currentSearch = JSON.parse(read('data/search-index.json'));
assert.equal(currentSearch.length, baseSearch.length, 'English search count is unchanged');
assert.deepEqual(currentSearch.map((item) => item.url).sort(), baseSearch.map((item) => item.url).sort(), 'English search URLs are unchanged');
for (const record of currentSearch.filter((item) => item.url.startsWith('/switzerland/') && !targetSet.has(item.url))) {
  assert.deepEqual(record, baseSearch.find((item) => item.url === record.url), `non-target English search record changed: ${record.url}`);
}

let totalBaseWords = 0;
let totalCurrentWords = 0;
for (const route of targetRoutes) {
  const guide = switzerlandGuides.find((item) => item.url === route);
  const cluster = switzerlandClusters.find((item) => item.slug === guide.hubSlug);
  const image = switzerlandImageManifest[`${cluster.slug}/${guide.slug}`];
  assert.ok(image, `${route} retains a documented existing image`);
  const html = read(`${route.slice(1)}index.html`);
  const meta = article(html);
  assert.ok(meta, `${route} has Article metadata`);
  assert.equal(meta.datePublished, '2026-09-12', `${route} preserves publication date`);
  assert.equal(meta.dateModified, switzerlandCh16IsoDate, `${route} has the body review date`);
  assert.equal(meta.description, guide.summary, `${route} Article summary matches the guide source`);
  assert.ok(html.includes('Editorial review: 12 October 2026'), `${route} visibly states its review date`);
  assert.ok(html.includes(image.src), `${route} retains its documented image`);
  for (const [sourceUrl] of guide.sources) assert.ok(html.includes(`href="${sourceUrl}"`), `${route} visibly links ${sourceUrl}`);
  const terms = ({
    'lugano-lakefront': ['Piazza Cioccaro', 'Via Nassa', 'Parco Ciani', 'TPL funicular'],
    'san-salvatore-morcote': ['Paradiso', '14 March through 8 November', '12 March 2027', 'Morcote'],
    'locarno-ascona': ['Locarno-Muralto', 'line 314', 'Ronco sopra Ascona', 'Lake Maggiore'],
    'rhine-falls': ['Neuhausen Rheinfall', 'Schloss Laufen', 'does not provide access to the basin or pier', 'early April'],
    'schaffhausen-old-town': ['Vordergasse', 'Munot', 'Museum zu Allerheiligen', 'Stein am Rhein']
  })[guide.slug];
  for (const term of terms) assert.ok(html.toLowerCase().includes(term.toLowerCase()), `${route} contains decision detail: ${term}`);
  const count = words(html);
  const baseCount = words(execFileSync('git', ['show', `${base}:${route.slice(1)}index.html`], { cwd: root, encoding: 'utf8' }));
  assert.ok(count > 650, `${route} has substantive body content (${count} words)`);
  assert.ok(count - baseCount >= 200, `${route} materially expands (${baseCount} → ${count})`);
  totalBaseWords += baseCount;
  totalCurrentWords += count;
  const record = currentSearch.find((item) => item.url === route);
  assert.ok(record, `${route} retains a search record`);
  assert.equal(record.summary, guide.summary, `${route} search and Article summaries match`);
  for (const keyword of guide.searchKeywords) assert.ok(record.keywords.includes(keyword), `${route} indexes ${keyword}`);

  for (const { code, prefix } of locales) {
    const editionRoute = `${prefix}${route}`;
    const localized = read(path.relative(root, pageFile(prefix, route)));
    assert.ok(localized.includes(`<html lang="${code}"`), `${editionRoute} declares its language`);
    assert.ok(localized.includes(`hreflang="${code}" href="https://tripdistill.com${editionRoute}"`), `${editionRoute} keeps its self alternate`);
    const localizedArticle = article(localized);
    assert.ok(localizedArticle, `${editionRoute} has Article metadata`);
    assert.equal(localizedArticle.datePublished, '2026-09-12');
    assert.equal(localizedArticle.dateModified, switzerlandCh16IsoDate);
    const visibleDate = code === 'en' ? switzerlandCh16ReviewDate : code === 'ja' || code === 'zh-Hant' ? '2026年10月12日' : code === 'ko' ? '2026년 10월 12일' : '12 ตุลาคม 2026';
    assert.ok(localized.includes(visibleDate), `${editionRoute} localizes the visible review date`);
    const localSearch = JSON.parse(read(`${prefix.slice(1)}/data/search-index.json`));
    const localRecord = localSearch.find((item) => item.url === editionRoute);
    assert.ok(localRecord, `${editionRoute} has a localized search record`);
    if (code !== 'en') {
      const catalog = JSON.parse(read(`data/i18n/${code}.json`)).translations;
      assert.ok(catalog[guide.summary], `${editionRoute} has a reviewed summary`);
      assert.equal(localizedArticle.description, catalog[guide.summary]);
      assert.equal(localRecord.summary, catalog[guide.summary]);
    }
  }
}
assert.ok(totalCurrentWords - totalBaseWords >= 1500, `CH16 adds at least 1,500 English main words (${totalCurrentWords - totalBaseWords})`);

for (const route of allRoutes.filter((item) => !targetSet.has(item))) {
  const relative = `${route.slice(1)}index.html`;
  assert.equal(read(relative), execFileSync('git', ['show', `${base}:${relative}`], { cwd: root, encoding: 'utf8' }), `${route} English body remains byte-identical to the base`);
}

for (const code of ['zh-Hant', 'ja', 'ko', 'th']) {
  const directory = path.join(root, 'data/i18n/reviewed', code);
  const files = fs.readdirSync(directory).filter((name) => name.endsWith('.json'));
  const pageName = files.find((name) => name.endsWith(pageSuffix));
  const searchName = files.find((name) => name.endsWith(searchSuffix));
  assert.ok(pageName, `${code} has a CH16 page batch`);
  assert.ok(searchName, `${code} has a separate CH16 search batch`);
  const pageBatch = JSON.parse(fs.readFileSync(path.join(directory, pageName), 'utf8'));
  const searchBatch = JSON.parse(fs.readFileSync(path.join(directory, searchName), 'utf8'));
  assert.equal(pageBatch.qualityStatus, 'reviewed');
  assert.deepEqual(pageBatch.routes, targetRoutes);
  assert.equal(searchBatch.qualityStatus, 'reviewed');
  assert.deepEqual(searchBatch.routes, ['/data/search-index.json']);
  for (const batch of [pageBatch, searchBatch]) {
    assert.ok(Object.values(batch.translations).every((value) => typeof value === 'string' && value.trim()), `${code} has no blank targets`);
    assert.equal(batch.reviewProvenance.independentSecondModel, false);
    assert.match(batch.reviewProvenance.writer, /runtime model identifier is not independently verifiable/i);
    assert.match(batch.reviewProvenance.reviewer, /self-review|same-model/i);
  }
}

console.log(`CH16 regression passed: five existing guide bodies (+${totalCurrentWords - totalBaseWords} English main words), five-language date/search parity, and exactly 25 dated sitemap entries.`);
console.log(`Path de-dup against ${base}: CH01–13 ${olderCoverage.size} + CH14 ${ch14Routes.size} + CH15 ${ch15Routes.size} + CH16 ${ch16Routes.size} = ${allRoutes.length} unique routes.`);
