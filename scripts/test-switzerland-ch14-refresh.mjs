import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { switzerlandClusters } from '../data/switzerland-guides.mjs';
import { switzerlandCh14CountryRefresh, switzerlandCh14HubRefresh, switzerlandCh14IsoDate } from '../data/switzerland-ch14-refresh.mjs';
import { switzerlandImageManifest } from '../data/switzerland-image-manifest.mjs';
import { localizeHtml, localizeSearchIndex, loadCatalog } from './i18n-lib.mjs';
import { switzerlandCh15AffectedRoutes, switzerlandCh15Routes, switzerlandCh16Routes } from './switzerland-ch15-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = 'fec6b5fa8001c933512d5aa58dc1b24d5b62bf06';
const localePrefixes = ['', '/zh', '/ja', '/ko', '/th'];
const localeCodes = ['en', 'zh-Hant', 'ja', 'ko', 'th'];
const targetRoutes = [
  '/switzerland/',
  '/switzerland/lugano-southern-ticino/',
  '/switzerland/locarno-ascona-valleys/',
  '/switzerland/schaffhausen-rhine-falls/'
];
const targetSet = new Set(targetRoutes);
const allRoutes = ['/switzerland/', ...switzerlandClusters.flatMap((item) => [`/switzerland/${item.slug}/`, ...item.guides.map((guide) => guide.url)])];
const batchSuffix = '-switzerland-ch14-pages-20261012.json';
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');
const pagePath = (prefix, route) => path.join(root, prefix.slice(1), route.slice(1), 'index.html');

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
function sitemap(xml) {
  return new Map([...xml.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)].map((match) => [match[1], match[2]]));
}
function normalizeSharedAssetVersions(html) {
  return html
    .replace(/\/css\/site\.css\?v=[^"'\s]+/gu, '/css/site.css?v=<shared>')
    .replace(/\/js\/main\.js\?v=[^"'\s]+/gu, '/js/main.js?v=<shared>');
}
function words(html) {
  const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0] || '';
  const text = main.replace(/<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&(?:amp|lt|gt|quot|#39);/g, ' ').replace(/\s+/g, ' ').trim();
  return text ? text.split(' ').length : 0;
}
function previousTranslations(code) {
  const directory = path.join(root, 'data/i18n/reviewed', code);
  const merged = {};
  for (const name of fs.readdirSync(directory).filter((item) => item.endsWith('.json') && !item.endsWith(batchSuffix)).sort()) {
    const batch = JSON.parse(fs.readFileSync(path.join(directory, name), 'utf8'));
    if (batch.qualityStatus === 'reviewed') Object.assign(merged, batch.translations || {});
  }
  return merged;
}

assert.equal(switzerlandCh14IsoDate, '2026-10-12');
assert.equal(switzerlandCh14CountryRefresh.isoDate, '2026-10-12');
assert.deepEqual(Object.keys(switzerlandCh14HubRefresh).sort(), ['locarno-ascona-valleys', 'lugano-southern-ticino', 'schaffhausen-rhine-falls']);
assert.equal(allRoutes.length, 65, 'Switzerland retains the existing 65 English routes');
for (const [slug, refresh] of Object.entries(switzerlandCh14HubRefresh)) {
  const cluster = switzerlandClusters.find((item) => item.slug === slug);
  assert.ok(cluster, `${slug} is an existing hub`);
  assert.equal(cluster.guides.length, 3, `${slug} keeps its three existing child guides`);
  assert.equal(refresh.itineraryDays.length, 4, `${slug} has a four-stage base itinerary`);
  assert.equal(refresh.alternatives.length, 3, `${slug} has three stay-length variants`);
}

for (const route of allRoutes.filter((item) => !targetSet.has(item) && !switzerlandCh15AffectedRoutes.includes(item) && !switzerlandCh16Routes.includes(item))) {
  const relative = `${route.slice(1)}index.html`;
  assert.equal(normalizeSharedAssetVersions(fs.readFileSync(path.join(root, relative), 'utf8')), normalizeSharedAssetVersions(execFileSync('git', ['show', `${base}:${relative}`], { cwd: root, encoding: 'utf8' })), `${route} remains unchanged from the exact base apart from shared asset cache versions`);
}

const baseMap = sitemap(execFileSync('git', ['show', `${base}:sitemap.xml`], { cwd: root, encoding: 'utf8' }));
const currentMap = sitemap(read('sitemap.xml'));
assert.equal(baseMap.size, 4560, 'base sitemap contains the existing 4,560 URLs');
assert.equal(currentMap.size, baseMap.size, 'sitemap route count is unchanged');
assert.deepEqual([...currentMap.keys()].sort(), [...baseMap.keys()].sort(), 'CH14 adds or removes no URL');
const editions = new Set(localePrefixes.flatMap((prefix) => [...targetRoutes, ...switzerlandCh15Routes, ...switzerlandCh16Routes].map((route) => `${prefix}${route}`)));
const changedLastmods = [...currentMap].filter(([route, date]) => route.includes('/switzerland/') && baseMap.get(route) !== date);
assert.equal(changedLastmods.length, 60, 'the three CH14 hubs, four CH15 guides and five CH16 guides receive new lastmods; the country date already matched the exact base');
for (const [route, date] of changedLastmods) {
  assert.ok(editions.has(route), `unexpected sitemap date change for ${route}`);
  assert.equal(date, '2026-10-12');
}
for (const route of editions) assert.equal(currentMap.get(route), '2026-10-12', `${route} carries the CH14 review date`);

const baseSearch = JSON.parse(execFileSync('git', ['show', `${base}:data/search-index.json`], { cwd: root, encoding: 'utf8' }));
const currentSearch = JSON.parse(read('data/search-index.json'));
assert.equal(currentSearch.length, baseSearch.length, 'search URL count is unchanged');
const targetSearch = currentSearch.filter((item) => targetSet.has(item.url));
assert.equal(targetSearch.length, 4, 'search changes only the four existing target records');
for (const record of currentSearch.filter((item) => item.url.startsWith('/switzerland/') && !targetSet.has(item.url) && !switzerlandCh15Routes.includes(item.url) && !switzerlandCh16Routes.includes(item.url))) {
  assert.deepEqual(record, baseSearch.find((item) => item.url === record.url), `non-target search record changed: ${record.url}`);
}

const routeFacts = {
  '/switzerland/': ['5–7 nights', '8–10 nights', '12–14 nights', 'Choose either Rigi or Pilatus', 'Zurich (2), Lucerne (3), Bern (2)', 'Lugano or Locarno (4–5)'],
  '/switzerland/lugano-southern-ticino/': ['Three nights', 'SNL', 'Monte Brè', 'Monte San Salvatore', 'Monte Generoso', 'Capolago-Riva San Vitale'],
  '/switzerland/locarno-ascona-valleys/': ['Three nights', 'Locarno-Muralto', 'FART', 'Centovalli', 'Verzasca', 'Maggia'],
  '/switzerland/schaffhausen-rhine-falls/': ['One night', 'Neuhausen Rheinfall', 'Schloss Laufen am Rheinfall', 'Dachsen', 'Stein am Rhein']
};
const baseBodyWords = targetRoutes.reduce((total, route) => total + words(execFileSync('git', ['show', `${base}:${route.slice(1)}index.html`], { cwd: root, encoding: 'utf8' })), 0);
let currentBodyWords = 0;
for (const route of targetRoutes) {
  const html = read(`${route.slice(1)}index.html`);
  const metadata = article(html);
  assert.ok(metadata, `${route} has Article JSON-LD`);
  assert.equal(metadata.datePublished, '2026-09-12');
  assert.equal(metadata.dateModified, '2026-10-12');
  assert.ok(html.includes('Editorial review: 12 October 2026'), `${route} has its honest review date`);
  for (const fact of routeFacts[route]) assert.ok(html.includes(fact), `${route} contains ${fact}`);
  const searchRecord = targetSearch.find((item) => item.url === route);
  assert.ok(searchRecord, `${route} has a current search record`);
  assert.equal(searchRecord.summary, metadata.description, `${route} search and Article summaries match`);
  const count = words(html);
  currentBodyWords += count;
  assert.ok(count > 650, `${route} has substantive planning content (${count} words)`);
  for (const [index, prefix] of localePrefixes.entries()) {
    const editionRoute = `${prefix}${route}`;
    const localized = read(path.relative(root, pagePath(prefix, route)));
    assert.ok(localized.includes(`<html lang="${localeCodes[index]}"`), `${editionRoute} declares the right language`);
    assert.ok(localized.includes(`hreflang="${localeCodes[index]}" href="https://tripdistill.com${editionRoute}"`), `${editionRoute} has its own alternate reference`);
    const localizedArticle = article(localized);
    assert.ok(localizedArticle, `${editionRoute} has Article metadata`);
    assert.equal(localizedArticle.datePublished, '2026-09-12');
    assert.equal(localizedArticle.dateModified, '2026-10-12');
    if (index > 0) {
      const translations = loadCatalog(localeCodes[index]).translations;
      assert.ok(translations[metadata.description], `${editionRoute} has a reviewed description translation`);
      assert.ok(localized.includes(translations[metadata.description]), `${editionRoute} renders its localized summary`);
      const localSearch = JSON.parse(read(`${prefix.slice(1)}/data/search-index.json`));
      const localRecord = localSearch.find((item) => item.url === editionRoute);
      assert.ok(localRecord, `${editionRoute} has a localized search record`);
      assert.equal(localRecord.summary, translations[metadata.description]);
    }
  }
}
assert.ok(currentBodyWords - baseBodyWords >= 1500, 'CH14 adds at least 1,500 visible English main-body words across four routes');

for (const code of ['zh-Hant', 'ja', 'ko', 'th']) {
  const directory = path.join(root, 'data/i18n/reviewed', code);
  const name = fs.readdirSync(directory).find((item) => item.endsWith(batchSuffix));
  assert.ok(name, `${code} has the CH14 four-route reviewed batch`);
  const batch = JSON.parse(fs.readFileSync(path.join(directory, name), 'utf8'));
  assert.equal(batch.qualityStatus, 'reviewed');
  assert.deepEqual(batch.routes, targetRoutes);
  assert.equal(Object.keys(batch.translations).length, 126);
  assert.ok(Object.values(batch.translations).every((value) => typeof value === 'string' && value.trim()));
  assert.equal(batch.reviewProvenance.independentSecondModel, false, 'review provenance states there was no independent second model');
  assert.ok(batch.reviewProvenance.writer.includes('runtime does not expose a selectable GPT-6 Luna variant'));
  assert.ok(batch.reviewProvenance.reviewer.includes('Same-model'));
}

const diagram = switzerlandImageManifest['switzerland-country/country-route-choice'];
assert.equal(diagram.assetType, 'original-planning-diagram');
assert.equal(diagram.creator, 'TripDistill Editorial Team');
assert.equal(diagram.license, null);
assert.equal(diagram.rightsStatus, 'Project original; no separate reuse license declared');
assert.equal(diagram.rightsStatusUrl, 'https://tripdistill.com/terms-of-use/');
assert.equal(diagram.localSha1, '09aa3fca3edbb8fe02732a6483da595081cc7b2d');
const diagramBytes = fs.readFileSync(path.join(root, diagram.src.slice(1)));
assert.equal(crypto.createHash('sha1').update(diagramBytes).digest('hex'), diagram.localSha1);
const countryHtml = read('switzerland/index.html');
assert.ok(countryHtml.includes(diagram.src));
assert.ok(countryHtml.includes(diagram.rightsStatus));
assert.ok(countryHtml.includes(diagram.diagramNote));
for (const route of targetRoutes.slice(1)) assert.ok(!read(`${route.slice(1)}index.html`).includes(diagram.src), `${route} does not reuse the country schematic`);
const svgCheck = "import sys,xml.etree.ElementTree as E; r=E.parse(sys.argv[1]).getroot(); n=list(r.iter()); t=lambda x:x.tag.rsplit('}',1)[-1]; allowed={'svg','title','desc','rect','line','circle','text'}; assert t(r)=='svg' and r.attrib.get('width')=='1600' and r.attrib.get('height')=='1066'; assert all(t(x) in allowed for x in n); assert all(float(x.attrib['x'])>=0 and float(x.attrib['y'])>=0 and float(x.attrib['x'])+float(x.attrib['width'])<=1600 and float(x.attrib['y'])+float(x.attrib['height'])<=1066 for x in n if t(x)=='rect'); assert all(0<=float(x.attrib[k])<=lim for x in n if t(x)=='line' for k,lim in [('x1',1600),('x2',1600),('y1',1066),('y2',1066)]); assert all(float(x.attrib['cx'])-float(x.attrib['r'])>=0 and float(x.attrib['cx'])+float(x.attrib['r'])<=1600 and float(x.attrib['cy'])-float(x.attrib['r'])>=0 and float(x.attrib['cy'])+float(x.attrib['r'])<=1066 for x in n if t(x)=='circle'); assert all(0<=float(x.attrib['x'])<=1600 and 0<=float(x.attrib['y'])<=1066 for x in n if t(x)=='text'); assert any(t(x)=='title' and x.text for x in n) and any(t(x)=='desc' and 'not a geographic map' in x.text for x in n); texts=[x.text or '' for x in n if t(x)=='text']; expected=['EN · Zurich → Lucerne | city + lake','繁中 · 蘇黎世 → 琉森｜城市＋湖泊','日本語 · チューリヒ → ルツェルン｜都市＋湖','한국어 · 취리히 → 루체른 | 도시 + 호수','ไทย · ซูริก → ลูเซิร์น | เมือง + ทะเลสาบ','EN · Lugano → Locarno | Ticino valleys','繁中 · 盧加諾 → 洛迦諾｜提契諾山谷','日本語 · ルガーノ → ロカルノ｜ティチーノの谷','한국어 · 루가노 → 로카르노 | 티치노 계곡','ไทย · ลูการ์โน → โลการ์โน | หุบเขาทีชีโน','EN · Zurich → Schaffhausen | Rhine Falls','繁中 · 蘇黎世 → 沙夫豪森｜萊茵瀑布','日本語 · チューリヒ → シャフハウゼン｜ライン滝','한국어 · 취리히 → 샤프하우젠 | 라인 폭포','ไทย · ซูริก → ชาฟเฮาเซิน | น้ำตกไรน์']; assert all(label in texts for label in expected); assert 'not a geographic map' in ''.join(x.text or '' for x in n)";
execFileSync('python3', ['-c', svgCheck, path.join(root, diagram.src.slice(1))], { cwd: root, stdio: 'pipe' });

for (const [index, prefix] of localePrefixes.entries()) {
  if (!prefix) continue;
  const code = localeCodes[index];
  const prior = previousTranslations(code);
  const localSearch = JSON.parse(read(`${prefix.slice(1)}/data/search-index.json`));
  const expectedSearch = localizeSearchIndex(baseSearch.filter((item) => item.url.startsWith('/switzerland/') && !targetSet.has(item.url) && !switzerlandCh15Routes.includes(item.url) && !switzerlandCh16Routes.includes(item.url)), prior, code);
  for (const record of localSearch.filter((item) => item.url.slice(prefix.length).startsWith('/switzerland/') && !targetSet.has(item.url.slice(prefix.length)) && !switzerlandCh15Routes.includes(item.url.slice(prefix.length)) && !switzerlandCh16Routes.includes(item.url.slice(prefix.length)))) {
    assert.deepEqual(record, expectedSearch.find((item) => item.url === record.url), `${code} non-target search record changed: ${record.url}`);
  }
  for (const route of allRoutes.filter((item) => !targetSet.has(item) && !switzerlandCh15AffectedRoutes.includes(item) && !switzerlandCh16Routes.includes(item))) {
    const baseHtml = execFileSync('git', ['show', `${base}:${route.slice(1)}index.html`], { cwd: root, encoding: 'utf8' });
    const priorOutput = localizeHtml(baseHtml, prior, code, route);
    assert.equal(normalizeSharedAssetVersions(read(path.relative(root, pagePath(prefix, route)))), normalizeSharedAssetVersions(priorOutput), `${prefix}${route} changed outside the CH14 translation batch apart from shared asset cache versions`);
  }
}

console.log(`CH14 regression passed: four existing Switzerland pages, ${currentBodyWords} visible English main-body words (+${currentBodyWords - baseBodyWords}), ${changedLastmods.length} cumulative CH14–CH16 dated edition URLs, 4,560 sitemap URLs, no URL changes, five-language content and metadata, non-target pages/search preserved outside later edited guides, and original SVG provenance/geometry checks.`);
