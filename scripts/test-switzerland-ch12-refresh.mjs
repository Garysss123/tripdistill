import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { switzerlandClusters } from '../data/switzerland-guides.mjs';
import { switzerlandCh12ClusterRefresh, switzerlandCh12GuideRefresh } from '../data/switzerland-ch12-refresh.mjs';
import { switzerlandImageManifest, switzerlandRetiredImageRecords } from '../data/switzerland-image-manifest.mjs';
import { localizeHtml } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baseCommit = '6b34b02cf93b435575e745497564f4b88dac2afa';
const integrationBaseCommit = 'bc1c7ddf96820b3455986efa202588ffc0d2ae6b';
const locales = ['', '/zh', '/ja', '/ko', '/th'];
const localeCodes = ['en', 'zh-Hant', 'ja', 'ko', 'th'];
const targetRoutes = [
  '/switzerland/st-gallen-appenzell/',
  '/switzerland/st-gallen-appenzell/st-gallen-abbey/',
  '/switzerland/st-gallen-appenzell/appenzell-village/',
  '/switzerland/st-gallen-appenzell/ebenalp-seealpsee/'
];
const targetSet = new Set(targetRoutes);
const ch11Routes = [
  '/switzerland/st-moritz-engadin/',
  '/switzerland/st-moritz-engadin/st-moritz-lakes/',
  '/switzerland/st-moritz-engadin/bernina-pontresina/',
  '/switzerland/st-moritz-engadin/muottas-diavolezza/'
];
const laterCa11Routes = [
  '/canada/ottawa-gatineau/',
  '/canada/ottawa-gatineau/parliament-rideau/',
  '/canada/ottawa-gatineau/national-museums/',
  '/canada/ottawa-gatineau/gatineau-park/'
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
  '/australia/brisbane-moreton-bay/mulgumpin-moreton-island/'
];
const laterAustraliaSearchOnlyRoutes = [
  '/australia/perth-fremantle-rottnest/',
  '/australia/perth-fremantle-rottnest/boorloo-city-elizabeth-quay/',
  '/australia/perth-fremantle-rottnest/wadjemup-rottnest/',
  '/australia/perth-fremantle-rottnest/walyalup-fremantle/'
];
const newSwissSearchRoutes = new Set([...targetRoutes, ...ch11Routes, ...laterCa11Routes, ...laterAustraliaRoutes, ...laterAustraliaSearchOnlyRoutes]);
const cluster = switzerlandClusters.find((item) => item.slug === 'st-gallen-appenzell');
const allRoutes = ['/switzerland/', ...switzerlandClusters.flatMap((item) => [`/switzerland/${item.slug}/`, ...item.guides.map((guide) => guide.url)])];
const batchMarkers = ['-ch12-st-gallen-pages-20261012.json', '-ch12-st-gallen-search-20261012.json'];

function read(relative) { return fs.readFileSync(path.join(root, relative), 'utf8'); }
function pathFor(prefix, route) { return path.join(root, prefix.slice(1), route.slice(1), 'index.html'); }
function articleFrom(html) {
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(match[1]);
      const graph = Array.isArray(data['@graph']) ? data['@graph'] : [data];
      const article = graph.find((item) => item['@type'] === 'Article');
      if (article) return article;
    } catch {}
  }
  return null;
}
function sitemapRecords(xml) {
  return new Map([...xml.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
    .map((match) => [match[1], match[2]]));
}
function wordCount(html) {
  const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0] || '';
  const text = main.replace(/<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&(?:amp|lt|gt|quot|#39);/g, ' ').replace(/\s+/g, ' ').trim();
  return text ? text.split(' ').length : 0;
}

assert.equal(targetRoutes.length, 4, 'CH12 covers one existing hub and its three existing child paths');
assert.equal(new Set(targetRoutes).size, 4, 'CH12 paths are unique');
assert.equal(switzerlandCh12ClusterRefresh.isoDate, '2026-10-12', 'hub review date is explicit');
assert.equal(Object.keys(switzerlandCh12GuideRefresh).length, 3, 'only the three St Gallen/Appenzell guides are active in CH12');
assert.equal(allRoutes.length, 65, 'Switzerland retains its existing 65 English routes');

for (const route of allRoutes.filter((item) => !targetSet.has(item))) {
  const relative = `${route.slice(1)}index.html`;
  const baseline = execFileSync('git', ['show', `${baseCommit}:${relative}`], { cwd: root });
  assert.deepEqual(fs.readFileSync(path.join(root, relative)), baseline, `${route} stays byte-identical to the exact base`);
}

const expectedLocalized = new Set(locales.flatMap((prefix) => targetRoutes.map((route) => `${prefix}${route}`)));
const baseSitemap = execFileSync('git', ['show', `${baseCommit}:sitemap.xml`], { cwd: root, encoding: 'utf8' });
const beforeSitemap = sitemapRecords(baseSitemap);
const afterSitemap = sitemapRecords(read('sitemap.xml'));
assert.equal(beforeSitemap.size, 4560, 'base sitemap has 4,560 URLs');
assert.equal(afterSitemap.size, beforeSitemap.size, 'sitemap URL count is unchanged');
assert.deepEqual([...afterSitemap.keys()].sort(), [...beforeSitemap.keys()].sort(), 'CH12 adds or removes no URL');
const changedDates = [...afterSitemap].filter(([route, date]) => route.includes('/switzerland/') && beforeSitemap.get(route) !== date);
assert.equal(changedDates.length, 20, 'only four existing routes across five editions receive the CH12 review date');
for (const [route, date] of changedDates) {
  assert.ok(expectedLocalized.has(route), `unexpected lastmod change: ${route}`);
  assert.equal(date, '2026-10-12', `${route} is dated to the review day`);
}

const protectedAssets = {
  'assets/images/switzerland-lucerne-lake-mountains-rigi-route-choice.svg': '7ba0854acd7bd4602f5559cfb37f73b497408dafb1afec7a9094bf43b9b5e4cf',
  'assets/images/tripdistill-zermatt-glacier-route-choice.svg': '671a60852805748c8bf7ea4f5fc362305dc8f8c932fbd58fd661a8921794d366'
};
for (const [asset, sha256] of Object.entries(protectedAssets)) {
  assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root, asset))).digest('hex'), sha256, `${asset} remains unchanged`);
}

const diagram = switzerlandImageManifest['st-gallen-appenzell/ebenalp-seealpsee'];
assert.equal(diagram.assetType, 'original-planning-diagram', 'the Ebenalp visual is an original diagram');
assert.equal(diagram.license, null, 'the new diagram has no separate reuse license claim');
assert.ok(diagram.diagramNote.includes('Five-language route and color key'), 'live credit explains the route/color system');
assert.ok(fs.existsSync(path.join(root, diagram.src.slice(1))), 'the new diagram asset exists');
const retiredPhoto = switzerlandRetiredImageRecords.stGallenEbenalpPhoto;
assert.equal(retiredPhoto.inventoryStatus, 'unused', 'the unverified photo is retained as inactive metadata');
assert.ok(retiredPhoto.sourceDeclaredLicenses.includes('CC BY-SA 3.0'), 'historical source-declared license remains distinct from verification');
assert.equal(crypto.createHash('sha1').update(fs.readFileSync(path.join(root, retiredPhoto.src.slice(1)))).digest('hex'), retiredPhoto.localSha1, 'retired source image bytes are preserved');

const pythonSvgCheck = String.raw`import sys, xml.etree.ElementTree as ET
root = ET.parse(sys.argv[1]).getroot()
assert root.tag.endswith('svg')
assert root.attrib.get('width') == '1600' and root.attrib.get('height') == '1066'
allowed = {'svg','title','desc','rect','line','circle','text'}
nodes = list(root.iter())
for node in nodes:
    tag = node.tag.rsplit('}',1)[-1]
    assert tag in allowed, f'unapproved geometry/text element: {tag}'
    a = node.attrib
    if tag == 'rect':
        assert float(a['x']) >= 0 and float(a['y']) >= 0
        assert float(a['x']) + float(a['width']) <= 1600 and float(a['y']) + float(a['height']) <= 1066
    elif tag == 'line':
        for key, limit in [('x1',1600),('x2',1600),('y1',1066),('y2',1066)]:
            assert 0 <= float(a[key]) <= limit
    elif tag == 'circle':
        assert float(a['cx']) - float(a['r']) >= 0 and float(a['cx']) + float(a['r']) <= 1600
        assert float(a['cy']) - float(a['r']) >= 0 and float(a['cy']) + float(a['r']) <= 1066
    elif tag == 'text':
        assert 0 <= float(a['x']) <= 1600 and 0 <= float(a['y']) <= 1066
assert any(n.tag.endswith('title') and n.text for n in nodes)
assert any(n.tag.endswith('desc') and 'not a geographic map' in n.text for n in nodes)
colors = {'#d71920','#d7a94b','#416d75'}
branch = [n for n in nodes if n.tag.endswith('line') and n.attrib.get('x1') == '524' and n.attrib.get('x2') == '620']
assert {(n.attrib.get('stroke'), n.attrib.get('y1')) for n in branch} == {('#d71920','384'),('#d7a94b','578'),('#416d75','767')}
expected = {
 'en':['Rail / cableway access','Signed path · check the day','Low village or city fallback'],
 'zh-Hant':['鐵道／纜車接駁','標示步道','低地村落／城市備案'],
 'ja':['鉄道／ロープウェイ','標識ルート','低地の村／都市へ変更'],
 'ko':['철도·케이블카 접근','표지 등산로','저지대 마을·도시 대안'],
 'th':['รถไฟ／กระเช้าขึ้นเขา','ทางมีป้าย','ทางเลือกที่หมู่บ้านหรือเมือง']
}
for lang, labels in expected.items():
    texts=[n for n in nodes if n.tag.endswith('text') and n.attrib.get('data-language') == lang]
    assert len(texts) == 4, f'{lang} must have its heading and three explanations'
    for label, color in zip(labels, ['#d71920','#d7a94b','#416d75']):
        i=next(i for i,n in enumerate(nodes) if n.tag.endswith('text') and n.attrib.get('data-language') == lang and label in (n.text or ''))
        prior=nodes[i-1]
        assert prior.tag.endswith('circle') and prior.attrib.get('fill') == color, f'{lang}: {label} color mapping'
`;
execFileSync('python3', ['-c', pythonSvgCheck, path.join(root, diagram.src.slice(1))], { cwd: root, stdio: 'pipe' });

const targetSearch = JSON.parse(read('data/search-index.json')).filter((record) => targetSet.has(record.url));
const baseSearch = JSON.parse(execFileSync('git', ['show', `${integrationBaseCommit}:data/search-index.json`], { cwd: root, encoding: 'utf8' }));
assert.equal(targetSearch.length, 4, 'the four existing English search records remain');
for (const record of JSON.parse(read('data/search-index.json')).filter((item) => !newSwissSearchRoutes.has(item.url))) {
  assert.deepEqual(record, baseSearch.find((item) => item.url === record.url), `non-target search record ${record.url} remains unchanged`);
}

const wordCounts = {};
for (const route of targetRoutes) {
  const html = read(`${route.slice(1)}index.html`);
  const article = articleFrom(html);
  assert.ok(article, `${route} has Article structured data`);
  assert.equal(article.datePublished, '2026-09-12', `${route} keeps its original publication date`);
  assert.equal(article.dateModified, '2026-10-12', `${route} carries the review date`);
  assert.ok(html.includes('Official sources and'), `${route} keeps its source/credit block`);
  if (route === targetRoutes[0]) assert.ok(html.includes('MeteoSwiss') && html.includes('SBB — date-specific rail planning') && html.includes('Abbey District — opening hours'), `${route} names the regional forecast, rail planner and visitor calendar`);
  if (route.endsWith('/ebenalp-seealpsee/')) assert.ok(html.includes('MeteoSwiss') && html.includes('Wasserauen–Ebenalp Cableway'), `${route} names the mountain forecast and lift operator`);
  if (route.endsWith('/st-gallen-abbey/')) assert.ok(html.includes('Abbey District — opening hours') && html.includes('SBB — date-specific rail planning'), `${route} names the venue and rail planner`);
  if (route.endsWith('/appenzell-village/')) assert.ok(html.includes('Appenzell — official village map') && html.includes('Appenzell — museum directory'), `${route} names the village map and museum directory`);
  const record = targetSearch.find((item) => item.url === route);
  assert.ok(record, `${route} is searchable`);
  assert.equal(record.summary, article.description, `${route} search summary matches its Article description`);
  wordCounts[route] = wordCount(html);
  assert.ok(wordCounts[route] > 650, `${route} has full planning depth (${wordCounts[route]} visible main-body words)`);
  for (const [i, prefix] of locales.entries()) {
    const localizedPath = `${prefix}${route}`;
    assert.ok(html.includes(`hreflang="${localeCodes[i]}" href="https://tripdistill.com${localizedPath}"`), `${route} advertises ${localeCodes[i]}`);
    const localizedHtml = read(path.relative(root, pathFor(prefix, route)));
    const localizedArticle = articleFrom(localizedHtml);
    assert.ok(localizedHtml.includes(`<html lang="${localeCodes[i]}"`), `${localizedPath} has its language tag`);
    assert.ok(localizedArticle, `${localizedPath} has Article structured data`);
    assert.equal(localizedArticle.datePublished, '2026-09-12', `${localizedPath} preserves its publication date`);
    assert.equal(localizedArticle.dateModified, '2026-10-12', `${localizedPath} carries the review date`);
  }
}

const imageChecks = [
  ['/switzerland/st-gallen-appenzell/st-gallen-abbey/', 'Baroque façade and towers of St Gallen Cathedral in the Abbey District', 'CC0'],
  ['/switzerland/st-gallen-appenzell/appenzell-village/', 'construction crane and cars visible in the foreground', 'CC BY-SA 3.0'],
  ['/switzerland/st-gallen-appenzell/ebenalp-seealpsee/', 'Ebenalp and Seealpsee access-choice schematic', 'no separate reuse license declared']
];
for (const [route, alt, rights] of imageChecks) {
  const html = read(`${route.slice(1)}index.html`);
  assert.ok(html.includes(alt), `${route} presents the pixel-reviewed subject description`);
  assert.ok(html.includes(rights), `${route} states its recorded image rights separately`);
}
assert.ok(!read('switzerland/st-gallen-appenzell/ebenalp-seealpsee/index.html').includes(retiredPhoto.src), 'the unverified photo is not live on the hiking page');

const currentPageBatchSuffix = batchMarkers[0];
for (const [i, prefix] of locales.entries()) {
  if (!prefix) continue;
  const code = localeCodes[i];
  const catalog = JSON.parse(read(`data/i18n/${code}.json`)).translations;
  const localizedSearch = JSON.parse(read(`${prefix.slice(1)}/data/search-index.json`));
  for (const source of targetSearch) {
    const localized = localizedSearch.find((record) => record.url === `${prefix}${source.url}`);
    assert.ok(localized, `${code} search contains ${prefix}${source.url}`);
    assert.equal(localized.summary, catalog[source.summary], `${code} search description is reviewed for ${source.url}`);
    const html = read(path.relative(root, pathFor(prefix, source.url)));
    assert.ok(html.includes(catalog[source.summary]), `${code} page and search share the translated route summary`);
  }

  const batchDirectory = path.join(root, 'data', 'i18n', 'reviewed', code);
  const pageBatch = fs.readdirSync(batchDirectory).find((name) => name.endsWith(currentPageBatchSuffix));
  assert.ok(pageBatch, `${code} has the CH12 reviewed content batch`);
  const oldTranslations = {};
  for (const filename of fs.readdirSync(batchDirectory).filter((name) => name.endsWith('.json') && !batchMarkers.some((suffix) => name.endsWith(suffix))).sort()) {
    const batch = JSON.parse(fs.readFileSync(path.join(batchDirectory, filename), 'utf8'));
    if (batch.qualityStatus === 'reviewed') Object.assign(oldTranslations, batch.translations || {});
  }
  for (const route of allRoutes.filter((item) => !targetSet.has(item))) {
    const baseHtml = execFileSync('git', ['show', `${baseCommit}:${route.slice(1)}index.html`], { cwd: root, encoding: 'utf8' });
    const expectedHtml = localizeHtml(baseHtml, oldTranslations, code, route);
    assert.equal(read(path.relative(root, pathFor(prefix, route))), expectedHtml, `${prefix}${route} is unchanged under its earlier reviewed catalog`);
  }
}

console.log(`CH12 five-language regression passed: four St Gallen/Appenzell routes, exactly 20 dated edition URLs, 4,560 sitemap URLs, no new routes, Article/search agreement, all non-target English/localized pages and search entries unchanged, protected Lucerne/Zermatt assets preserved, SVG XML/geometry/color-language regression passed. Visible English main-body word counts: ${JSON.stringify(wordCounts)}.`);
