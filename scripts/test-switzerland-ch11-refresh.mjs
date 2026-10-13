import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { switzerlandClusters } from '../data/switzerland-guides.mjs';
import { switzerlandCh10ClusterRefresh, switzerlandCh10GuideRefresh } from '../data/switzerland-ch10-refresh.mjs';
import { switzerlandCh10CountryPageDraft } from '../data/switzerland-ch10-country-draft.mjs';
import { switzerlandCh11ClusterRefresh, switzerlandCh11GuideRefresh } from '../data/switzerland-ch11-refresh.mjs';
import { localizeHtml } from './i18n-lib.mjs';
import { followingVietnamAfterNhaTrangRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baseCommit = 'a0da2c3b2d27276bc83993b19ae96521798c032b';
const integrationBaseCommit = 'bc1c7ddf96820b3455986efa202588ffc0d2ae6b';
const englishOnly = process.argv.includes('--english-only');
const locales = ['', '/zh', '/ja', '/ko', '/th'];
const localeCodes = ['en', 'zh-Hant', 'ja', 'ko', 'th'];
const batchCluster = switzerlandClusters.find((cluster) => cluster.slug === 'st-moritz-engadin');
const expectedRoutes = [`/switzerland/${batchCluster.slug}/`, ...batchCluster.guides.map((guide) => guide.url)];
const ch12Cluster = switzerlandClusters.find((cluster) => cluster.slug === 'st-gallen-appenzell');
const ch12Routes = [`/switzerland/${ch12Cluster.slug}/`, ...ch12Cluster.guides.map((guide) => guide.url)];
const ch13Cluster = switzerlandClusters.find((cluster) => cluster.slug === 'graubunden-corridors');
const ch13Routes = [`/switzerland/${ch13Cluster.slug}/`, ...ch13Cluster.guides.map((guide) => guide.url)];
const laterCa13Routes = [
  '/canada/saguenay-tadoussac/',
  '/canada/saguenay-tadoussac/tadoussac-marine/',
  '/canada/saguenay-tadoussac/fjord-hiking/',
  '/canada/saguenay-tadoussac/saguenay-city-valley/'
];
const laterGoldCoastRoutes = [
  '/australia/gold-coast-scenic-rim/',
  '/australia/gold-coast-scenic-rim/surfers-paradise-broadbeach/',
  '/australia/gold-coast-scenic-rim/burleigh-heads-tallebudgera/',
  '/australia/gold-coast-scenic-rim/coolangatta-snapper-rocks/'
];
const laterCairnsRoutes = [
  '/australia/cairns-wet-tropics/',
  '/australia/cairns-wet-tropics/cairns-esplanade-reef-terminal/',
  '/australia/cairns-wet-tropics/kuranda-rail-skyrail/',
  '/australia/cairns-wet-tropics/northern-beaches-palm-cove/'
];
const laterCa14Routes = [
  '/canada/halifax-nova-scotia/',
  '/canada/halifax-nova-scotia/cape-breton-cabot/',
  '/canada/halifax-nova-scotia/halifax-waterfront-citadel/',
  '/canada/halifax-nova-scotia/peggys-cove-lunenburg/'
];
const ch14Routes = ['/switzerland/', '/switzerland/lugano-southern-ticino/', '/switzerland/locarno-ascona-valleys/', '/switzerland/schaffhausen-rhine-falls/'];
const ch14NewDateRoutes = ch14Routes.slice(1);
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
const laterAustraliaRoutes = [
  '/australia/melbourne-port-phillip/',
  '/australia/melbourne-port-phillip/cbd-laneways-tram-grid/',
  '/australia/melbourne-port-phillip/federation-square-southbank/',
  '/australia/melbourne-port-phillip/st-kilda-foreshore/',
  '/australia/adelaide-wine-island/',
  '/australia/adelaide-wine-island/city-parklands-north-terrace/',
  '/australia/adelaide-wine-island/barossa-valley/',
  '/australia/adelaide-wine-island/fleurieu-mclaren-vale/',
  '/australia/sydney-harbour-coast/',
  '/australia/sydney-harbour-coast/circular-quay-rocks/',
  '/australia/sydney-harbour-coast/opera-house-botanic-garden/',
  '/australia/sydney-harbour-coast/bondi-coogee-coastal-walk/',
  '/australia/brisbane-moreton-bay/',
  '/australia/brisbane-moreton-bay/city-river-south-bank/',
  '/australia/brisbane-moreton-bay/minjerribah-north-stradbroke/',
  '/australia/brisbane-moreton-bay/mulgumpin-moreton-island/',
  '/australia/blue-mountains-nsw-coast/',
  '/australia/blue-mountains-nsw-coast/katoomba-echo-point/',
  '/australia/blue-mountains-nsw-coast/wentworth-falls-tableland/',
  '/australia/blue-mountains-nsw-coast/blackheath-grose-valley/',
  '/australia/great-ocean-road-gariwerd/',
  '/australia/great-ocean-road-gariwerd/torquay-bells-beach/',
  '/australia/great-ocean-road-gariwerd/apollo-bay-otways/',
  '/australia/great-ocean-road-gariwerd/port-campbell-twelve-apostles/'
];
const laterAustraliaSearchOnlyRoutes = [
  '/australia/perth-fremantle-rottnest/',
  '/australia/perth-fremantle-rottnest/boorloo-city-elizabeth-quay/',
  '/australia/perth-fremantle-rottnest/wadjemup-rottnest/',
  '/australia/perth-fremantle-rottnest/walyalup-fremantle/'
];
const laterVietnamRoutes = [
  '/vietnam/ha-long-cat-ba/core-cruise/',
  '/vietnam/phong-nha-ke-bang/paradise-tien-son-caves/',
  '/vietnam/ho-chi-minh-city/saigon-river-waterbus/',
  '/vietnam/da-lat-central-highlands/da-lat-lake-railway-core/',
  '/vietnam/',
  '/vietnam/hanoi/west-lake-truc-bach/',
  '/vietnam/sapa-northwest-highlands/o-quy-ho-waterfalls/',
  '/vietnam/ha-giang/meo-vac-du-gia/'
];
const currentVietnamRoutes = [
  '/vietnam/ha-long-cat-ba/',
  '/vietnam/ha-long-cat-ba/bai-tu-long/',
  '/vietnam/ha-long-cat-ba/lan-ha-town/',
  '/vietnam/ha-long-cat-ba/national-park/'
];
const laterVietnamMuiNeRoutes = [
  '/vietnam/mui-ne-binh-thuan/',
  '/vietnam/mui-ne-binh-thuan/bau-trang-white-dunes/',
  '/vietnam/mui-ne-binh-thuan/mui-ne-red-sand-dunes/',
  '/vietnam/mui-ne-binh-thuan/mui-ne-kiteboarding-coast/'
];
const laterVietnamPhongNhaRoutes = [
  '/vietnam/phong-nha-ke-bang/',
  '/vietnam/phong-nha-ke-bang/son-river-phong-nha-cave/',
  '/vietnam/phong-nha-ke-bang/chay-river-dark-cave/',
  '/vietnam/phong-nha-ke-bang/nuoc-mooc-forest-springs/'
];
const laterVietnamPhuQuocRoutes = [
  '/vietnam/phu-quoc-southern-islands/',
  '/vietnam/phu-quoc-southern-islands/duong-dong-long-beach/',
  '/vietnam/phu-quoc-southern-islands/an-thoi-marine-park/',
  '/vietnam/phu-quoc-southern-islands/ham-ninh-fishing-village/'
];
const laterVietnamNhaTrangRoutes = [
  '/vietnam/nha-trang-khanh-hoa/',
  '/vietnam/nha-trang-khanh-hoa/nha-trang-city-beach/',
  '/vietnam/nha-trang-khanh-hoa/po-nagar-hon-chong/',
  '/vietnam/nha-trang-khanh-hoa/hon-mun-island-marine-route/'
];
const preservedOrLaterRoutes = new Set([...expectedRoutes, ...ch12Routes, ...ch13Routes, ...ch14Routes, ...laterCa11Routes, ...laterCa12Routes, ...laterCa13Routes, ...laterCa14Routes, ...laterAustraliaRoutes, ...laterAustraliaSearchOnlyRoutes, ...laterGoldCoastRoutes, ...laterCairnsRoutes, ...laterVietnamRoutes, ...currentVietnamRoutes, ...laterVietnamMuiNeRoutes, ...laterVietnamPhongNhaRoutes, ...laterVietnamPhuQuocRoutes, ...laterVietnamNhaTrangRoutes, ...followingVietnamAfterNhaTrangRoutes]);
const allRoutes = ['/switzerland/', ...switzerlandClusters.flatMap((cluster) => [`/switzerland/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)])];
const baselinePages = new Map();
const protectedAssets = {
  'assets/images/switzerland-lucerne-lake-mountains-rigi-route-choice.svg': '7ba0854acd7bd4602f5559cfb37f73b497408dafb1afec7a9094bf43b9b5e4cf',
  'assets/images/tripdistill-zermatt-glacier-route-choice.svg': '671a60852805748c8bf7ea4f5fc362305dc8f8c932fbd58fd661a8921794d366'
};

function read(relative) { return fs.readFileSync(path.join(root, relative), 'utf8'); }
function pathFor(prefix, route) { return path.join(root, prefix.slice(1), route.slice(1), 'index.html'); }
function sitemapRecords(xml) {
  return new Map([...xml.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
    .map((match) => [match[1], match[2]]));
}
function articleFrom(html) {
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const match of scripts) {
    try {
      const data = JSON.parse(match[1]);
      const graph = Array.isArray(data['@graph']) ? data['@graph'] : [data];
      const article = graph.find((item) => item['@type'] === 'Article');
      if (article) return article;
    } catch {}
  }
  return null;
}

assert.equal(expectedRoutes.length, 4, 'CH11 is one hub plus its three existing guides');
assert.equal(new Set(expectedRoutes).size, 4, 'CH11 contains four unique routes');
assert.equal(Object.keys(switzerlandCh10ClusterRefresh).length, 7, 'the seven earlier hub drafts remain preserved');
assert.equal(Object.keys(switzerlandCh10GuideRefresh).length, 21, 'the 21 earlier guide drafts remain preserved');
assert.ok(switzerlandCh10CountryPageDraft.summary && switzerlandCh10CountryPageDraft.hero, 'the country-page draft remains preserved');
assert.ok(switzerlandCh11ClusterRefresh.hubIntro && Object.keys(switzerlandCh11GuideRefresh).length === 3, 'only the St Moritz cluster is active in CH11');

for (const route of allRoutes.filter((item) => !preservedOrLaterRoutes.has(item))) {
  const relative = `${route.slice(1)}index.html`;
  const baseline = execFileSync('git', ['show', `${baseCommit}:${relative}`], { cwd: root });
  baselinePages.set(route, baseline.toString('utf8'));
  assert.deepEqual(fs.readFileSync(path.join(root, relative)), baseline, `${route} remains byte-identical to the verified CH10 source`);
}

const expectedLocalizedRoutes = new Set(locales.flatMap((prefix) => [...expectedRoutes, ...ch12Routes, ...ch13Routes, ...ch14NewDateRoutes].map((route) => `${prefix}${route}`)));
const baseSitemap = execFileSync('git', ['show', `${baseCommit}:sitemap.xml`], { cwd: root, encoding: 'utf8' });
const before = sitemapRecords(baseSitemap);
const after = sitemapRecords(read('sitemap.xml'));
assert.equal(before.size, 4560, 'verified CH10 sitemap contains 4,560 URLs');
assert.equal(after.size, before.size, 'sitemap URL count is unchanged');
assert.deepEqual([...after.keys()].sort(), [...before.keys()].sort(), 'CH11 adds or removes no sitemap route');
const changedDates = [...after].filter(([route, date]) => route.includes('/switzerland/') && before.get(route) !== date);
assert.equal(changedDates.length, expectedLocalizedRoutes.size, 'only CH11, CH12, CH13 and the three downstream CH14 hubs across five editions receive new dates');
for (const [route, date] of changedDates) {
  assert.ok(expectedLocalizedRoutes.has(route), `unexpected changed date: ${route}`);
  assert.equal(date, '2026-10-12', `CH11 date for ${route}`);
}
for (const route of expectedLocalizedRoutes) assert.equal(after.get(route), '2026-10-12', `current date for ${route}`);

for (const [asset, sha256] of Object.entries(protectedAssets)) {
  const actual = crypto.createHash('sha256').update(fs.readFileSync(path.join(root, asset))).digest('hex');
  assert.equal(actual, sha256, `${asset} remains byte-identical to protect parallel image work`);
}

const targetSet = new Set(expectedRoutes);
const englishSearch = JSON.parse(read('data/search-index.json'));
const baseEnglishSearch = JSON.parse(execFileSync('git', ['show', `${integrationBaseCommit}:data/search-index.json`], { cwd: root, encoding: 'utf8' }));
const currentTargetSearch = englishSearch.filter((record) => targetSet.has(record.url));
assert.equal(currentTargetSearch.length, 4, 'each CH11 English route appears once in search');
for (const record of englishSearch.filter((item) => !preservedOrLaterRoutes.has(item.url))) {
  assert.deepEqual(record, baseEnglishSearch.find((item) => item.url === record.url), `non-target search entry ${record.url} is unchanged`);
}

for (const cluster of [batchCluster]) {
  const hubRoute = `/switzerland/${cluster.slug}/`;
  const hubHtml = read(`${hubRoute.slice(1)}index.html`);
  const hubArticle = articleFrom(hubHtml);
  assert.ok(hubArticle, `${hubRoute} Article JSON-LD exists`);
  assert.equal(hubArticle.datePublished, '2026-09-12', `${hubRoute} original publication date is preserved`);
  assert.equal(hubArticle.dateModified, '2026-10-12', `${hubRoute} review date is current`);
  for (const field of [cluster.tagline, cluster.hubIntro, cluster.stay, cluster.transfer, cluster.season, cluster.fallback]) {
    assert.ok(hubHtml.includes(field.replaceAll('&', '&amp;')), `${hubRoute} renders its active planning detail`);
  }
  const hubSearch = currentTargetSearch.filter((record) => record.url === hubRoute);
  assert.equal(hubSearch.length, 1, `${hubRoute} has one English search record`);
  assert.equal(hubSearch[0].summary, hubArticle.description, `${hubRoute} search summary and Article description match`);
  assert.ok(hubHtml.includes('Engadin Tourism') && hubHtml.includes('Rhaetian Railway'), `${hubRoute} has visible traceable official sources`);

  for (const guide of cluster.guides) {
    const html = read(`${guide.url.slice(1)}index.html`);
    const article = articleFrom(html);
    assert.ok(article, `${guide.url} Article JSON-LD exists`);
    assert.equal(article.datePublished, '2026-09-12', `${guide.url} original publication date is preserved`);
    assert.equal(article.dateModified, '2026-10-12', `${guide.url} review date is current`);
    assert.equal((html.match(/<li><span>0[1-4]<\/span>/g) || []).length, 4, `${guide.url} renders four ordered route stages`);
    assert.ok(html.includes(guide.summary.replaceAll('&', '&amp;')), `${guide.url} renders its route summary`);
    assert.ok(html.includes('Local context') && html.includes('Three ways to shape the visit'), `${guide.url} renders focused place context and alternatives`);
    assert.ok(html.includes('Official sources and photo credits'), `${guide.url} retains source and photo-credit block`);
    assert.ok(html.includes('MeteoSwiss') || html.includes('Engadin Tourism') || html.includes('Rhaetian Railway'), `${guide.url} names a relevant official source`);
    const imagePath = path.join(root, guide.image.src.replace(/^\//, ''));
    assert.ok(fs.existsSync(imagePath), `${guide.url} image asset exists`);
    const entry = currentTargetSearch.filter((record) => record.url === guide.url);
    assert.equal(entry.length, 1, `${guide.url} has one English search record`);
    assert.equal(entry[0].summary, article.description, `${guide.url} search summary and Article description match`);
  }
}

assert.ok(read('switzerland/st-moritz-engadin/muottas-diavolezza/index.html').includes('Muottas Muragl funicular station and track above the Upper Engadin'), 'the Muottas photo alt text matches the visible transport subject');
assert.ok(read('switzerland/st-moritz-engadin/muottas-diavolezza/index.html').includes('Adrian Michael') && read('switzerland/st-moritz-engadin/muottas-diavolezza/index.html').includes('CC BY-SA 3.0'), 'photo subject suitability and the declared license are recorded separately');
const berninaHtml = read('switzerland/st-moritz-engadin/bernina-pontresina/index.html');
assert.ok(berninaHtml.includes('As checked on 12 October 2026') && berninaHtml.includes('trains 951 and 952') && berninaHtml.includes('29 October to 13 November'), 'the dated RhB diversion notice is visible and explicitly time-bounded');

for (const route of expectedRoutes) {
  const html = read(`${route.slice(1)}index.html`);
  for (const [index, locale] of locales.entries()) {
    const prefix = locale;
    const localizedRoute = `${prefix}${route}`;
    assert.ok(html.includes(`hreflang="${localeCodes[index]}" href="https://tripdistill.com${localizedRoute}"`), `${route} advertises the ${localeCodes[index]} edition`);
    if (englishOnly && prefix) continue;
    const localizedHtml = read(path.relative(root, pathFor(prefix, route)));
    assert.ok(localizedHtml.includes(`<html lang="${localeCodes[index]}"`), `${localizedRoute} has the correct document language`);
    const localizedArticle = articleFrom(localizedHtml);
    assert.ok(localizedArticle, `${localizedRoute} Article JSON-LD exists`);
    assert.equal(localizedArticle.datePublished, '2026-09-12', `${localizedRoute} preserves the original publication date`);
    assert.equal(localizedArticle.dateModified, '2026-10-12', `${localizedRoute} has the reviewed date`);
    const sourceCreditHeading = prefix
      ? JSON.parse(read(`data/i18n/${localeCodes[index]}.json`)).translations['Official sources and photo credits']
      : 'Official sources and photo credits';
    assert.ok(sourceCreditHeading && localizedHtml.includes(sourceCreditHeading), `${localizedRoute} retains its reviewed localized source/credit section`);
  }
}

if (!englishOnly) {
  const sourceIndex = englishSearch.filter((record) => targetSet.has(record.url));
  const sharedCreditNote = '. Resized, display-cropped and converted to WebP; no other material edits.';
  for (const [index, prefix] of locales.entries()) {
    if (!prefix) continue;
    const code = localeCodes[index];
    const catalog = JSON.parse(read(`data/i18n/${code}.json`)).translations;
    const localizedSearch = JSON.parse(read(`${prefix.slice(1)}/data/search-index.json`));
    assert.ok(catalog['Official sources and photo credits'], `${code} translates the source and photo-credit heading`);
    assert.ok(catalog[sharedCreditNote], `${code} translates the image-edit explanation`);
    for (const sourceRecord of sourceIndex) {
      const localizedUrl = `${prefix}${sourceRecord.url}`;
      const localizedRecord = localizedSearch.find((record) => record.url === localizedUrl);
      assert.ok(localizedRecord, `${code} search has ${localizedUrl}`);
      assert.equal(localizedRecord.summary, catalog[sourceRecord.summary], `${code} search summary is the reviewed translation of ${sourceRecord.url}`);
      const route = sourceRecord.url;
      const html = read(path.relative(root, pathFor(prefix, route)));
      const pageSummary = route === `/switzerland/${batchCluster.slug}/`
        ? batchCluster.hubIntro
        : batchCluster.guides.find((guide) => guide.url === route).summary;
      assert.ok(html.includes(catalog[pageSummary]), `${code} page renders its localized ${route} summary`);
      assert.ok(html.includes(catalog['Official sources and photo credits']), `${code} page renders a localized source/credit heading`);
      assert.ok(html.includes(catalog[sharedCreditNote]), `${code} page renders localized image-edit credit prose`);
    }

    const batchDirectory = path.join(root, 'data', 'i18n', 'reviewed', code);
    const ch11Batch = fs.readdirSync(batchDirectory).find((name) => name.includes('-ch11-st-moritz-pages-20261012.json'));
    assert.ok(ch11Batch, `${code} has the CH11 page translation batch`);
    const oldTranslations = {};
    for (const filename of fs.readdirSync(batchDirectory).filter((name) => name.endsWith('.json') && name !== ch11Batch && !name.endsWith('-ch12-st-gallen-pages-20261012.json') && !name.endsWith('-ch12-st-gallen-search-20261012.json')).sort()) {
      const batch = JSON.parse(fs.readFileSync(path.join(batchDirectory, filename), 'utf8'));
      if (batch.qualityStatus === 'reviewed') Object.assign(oldTranslations, batch.translations || {});
    }
    for (const route of allRoutes.filter((item) => !preservedOrLaterRoutes.has(item))) {
      const expectedHtml = localizeHtml(baselinePages.get(route), oldTranslations, code, route);
      const actualHtml = fs.readFileSync(pathFor(prefix, route), 'utf8');
      assert.equal(actualHtml, expectedHtml, `${prefix}${route} remains byte-identical to its unchanged English source and earlier reviewed catalog`);
    }
  }
}

console.log(`CH11 ${englishOnly ? 'English-source' : 'five-language'} regression passed: four St Moritz/Upper Engadin routes, ${expectedLocalizedRoutes.size} cumulative CH11/CH12/CH13/CH14 dated edition URLs, 4,560 sitemap URLs, search/Article agreement, ${englishOnly ? 'hreflang targets' : 'localized search summaries and source/photo-credit prose'}, inactive drafts and all non-target Swiss pages preserved outside the exact later routes.`);
