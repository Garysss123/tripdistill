import { isGreeceRoutePath } from './greece-route-test-utils.mjs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { SaxesParser } from 'saxes';
import { switzerlandClusters } from '../data/switzerland-guides.mjs';
import { switzerlandCh12ClusterRefresh, switzerlandCh12GuideRefresh } from '../data/switzerland-ch12-refresh.mjs';
import { switzerlandImageManifest, switzerlandRetiredImageRecords } from '../data/switzerland-image-manifest.mjs';
import { localizeHtml } from './i18n-lib.mjs';
import { switzerlandCh15AffectedRoutes, switzerlandCh15Routes, switzerlandCh16Routes } from './switzerland-ch15-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baseCommit = '6b34b02cf93b435575e745497564f4b88dac2afa';
const locales = ['', '/zh', '/ja', '/ko', '/th'];
const localeCodes = ['en', 'zh-Hant', 'ja', 'ko', 'th'];
const targetRoutes = [
  '/switzerland/st-gallen-appenzell/',
  '/switzerland/st-gallen-appenzell/st-gallen-abbey/',
  '/switzerland/st-gallen-appenzell/appenzell-village/',
  '/switzerland/st-gallen-appenzell/ebenalp-seealpsee/'
];
const targetSet = new Set(targetRoutes);
const graubuendenRoutes = [
  '/switzerland/graubunden-corridors/',
  '/switzerland/graubunden-corridors/chur-rhine-gorge/',
  '/switzerland/graubunden-corridors/davos-parsenn/',
  '/switzerland/graubunden-corridors/arosa-line/'
];
const graubuendenSet = new Set(graubuendenRoutes);
const ch14Routes = ['/switzerland/', '/switzerland/lugano-southern-ticino/', '/switzerland/locarno-ascona-valleys/', '/switzerland/schaffhausen-rhine-falls/'];
const ch14Set = new Set(ch14Routes);
const ch14NewDateRoutes = ch14Routes.slice(1);
const cluster = switzerlandClusters.find((item) => item.slug === 'st-gallen-appenzell');
const allRoutes = ['/switzerland/', ...switzerlandClusters.flatMap((item) => [`/switzerland/${item.slug}/`, ...item.guides.map((guide) => guide.url)])];
const batchMarkers = ['-ch12-st-gallen-pages-20261012.json', '-ch12-st-gallen-search-20261012.json'];

function read(relative) { return fs.readFileSync(path.join(root, relative), 'utf8'); }
function normalizeSharedAssetVersions(html) {
  return html
    .replace(/\/css\/site\.css\?v=[^"'\s]+/gu, '/css/site.css?v=<shared>')
    .replace(/\/js\/main\.js\?v=[^"'\s]+/gu, '/js/main.js?v=<shared>');
}
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

for (const route of allRoutes.filter((item) => !targetSet.has(item) && !graubuendenSet.has(item) && !ch14Set.has(item) && !switzerlandCh15AffectedRoutes.includes(item) && !switzerlandCh16Routes.includes(item))) {
  const relative = `${route.slice(1)}index.html`;
  const baseline = execFileSync('git', ['show', `${baseCommit}:${relative}`], { cwd: root });
  assert.equal(normalizeSharedAssetVersions(fs.readFileSync(path.join(root, relative), 'utf8')), normalizeSharedAssetVersions(baseline.toString('utf8')), `${route} stays unchanged from the exact base apart from shared asset cache versions`);
}

const expectedLocalized = new Set(locales.flatMap((prefix) => [...targetRoutes, ...graubuendenRoutes, ...ch14NewDateRoutes, ...switzerlandCh15Routes, ...switzerlandCh16Routes].map((route) => `${prefix}${route}`)));
const baseSitemap = execFileSync('git', ['show', `${baseCommit}:sitemap.xml`], { cwd: root, encoding: 'utf8' });
const beforeSitemap = sitemapRecords(baseSitemap);
const afterSitemap = sitemapRecords(read('sitemap.xml'));
assert.equal(beforeSitemap.size, 4560, 'base sitemap has 4,560 URLs');
assert.equal(afterSitemap.size, beforeSitemap.size + 330, 'the exact Spain and Greece release adds 330 localized URLs');
assert.deepEqual([...afterSitemap.keys()].filter((url) => !url.includes('/spain/') && !isGreeceRoutePath(url)).sort(), [...beforeSitemap.keys()].sort(), 'CH12 changes no pre-existing non-Spain URL');
const changedDates = [...afterSitemap].filter(([route, date]) => route.includes('/switzerland/') && beforeSitemap.get(route) !== date);
assert.equal(changedDates.length, expectedLocalized.size, 'CH12–CH16 routes receive only their declared dates across five editions');
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

function parseSvgElements(xml) {
  const stack = [];
  const errors = [];
  let rootNode;
  const parser = new SaxesParser({ xmlns: true });
  parser.on('opentag', (tag) => {
    const attributes = Object.fromEntries(Object.entries(tag.attributes).map(([name, value]) => [name, value.value]));
    const node = { tag: tag.local, attributes, text: '', children: [] };
    if (stack.length) stack.at(-1).children.push(node);
    else rootNode = node;
    stack.push(node);
  });
  parser.on('text', (value) => { if (stack.length) stack.at(-1).text += value; });
  parser.on('cdata', (value) => { if (stack.length) stack.at(-1).text += value; });
  parser.on('closetag', () => { stack.pop(); });
  parser.on('doctype', () => { throw new Error('DOCTYPE is forbidden in SVG'); });
  parser.on('error', (error) => { errors.push(error); });
  parser.write(xml).close();
  if (errors.length) throw new Error(`Invalid SVG XML: ${errors[0].message}`);
  assert.ok(rootNode, 'SVG XML must have a root element');
  assert.equal(stack.length, 0, 'SVG XML must close every element');

  const nodes = [];
  const visit = (node) => { nodes.push(node); node.children.forEach(visit); };
  visit(rootNode);
  return { root: rootNode, nodes };
}

function validateCh12Svg(xml) {
  const { root: svg, nodes } = parseSvgElements(xml);
  assert.equal(svg.tag.endsWith('svg'), true);
  assert.equal(svg.attributes.width, '1600');
  assert.equal(svg.attributes.height, '1066');
  const allowed = new Set(['svg', 'title', 'desc', 'rect', 'line', 'circle', 'text']);
  for (const node of nodes) {
    const { tag, attributes: a } = node;
    assert.ok(allowed.has(tag), `unapproved geometry/text element: ${tag}`);
    if (tag === 'rect') {
      assert.ok(Number(a.x) >= 0 && Number(a.y) >= 0);
      assert.ok(Number(a.x) + Number(a.width) <= 1600 && Number(a.y) + Number(a.height) <= 1066);
    } else if (tag === 'line') {
      for (const [key, limit] of [['x1', 1600], ['x2', 1600], ['y1', 1066], ['y2', 1066]]) {
        assert.ok(0 <= Number(a[key]) && Number(a[key]) <= limit, `line ${key} is outside the canvas`);
      }
    } else if (tag === 'circle') {
      assert.ok(Number(a.cx) - Number(a.r) >= 0 && Number(a.cx) + Number(a.r) <= 1600);
      assert.ok(Number(a.cy) - Number(a.r) >= 0 && Number(a.cy) + Number(a.r) <= 1066);
    } else if (tag === 'text') {
      assert.ok(0 <= Number(a.x) && Number(a.x) <= 1600 && 0 <= Number(a.y) && Number(a.y) <= 1066);
    }
  }
  assert.ok(nodes.some((node) => node.tag === 'title' && node.text));
  assert.ok(nodes.some((node) => node.tag === 'desc' && node.text.includes('not a geographic map')));
  const branch = nodes.filter((node) => node.tag === 'line' && node.attributes.x1 === '524' && node.attributes.x2 === '620');
  const branchLevels = new Set(branch.map((node) => JSON.stringify([node.attributes.stroke, node.attributes.y1])));
  assert.deepEqual(branchLevels, new Set([['#d71920', '384'], ['#d7a94b', '578'], ['#416d75', '767']].map(JSON.stringify)));
  const expected = {
    en: ['Rail / cableway access', 'Signed path · check the day', 'Low village or city fallback'],
    'zh-Hant': ['鐵道／纜車接駁', '標示步道', '低地村落／城市備案'],
    ja: ['鉄道／ロープウェイ', '標識ルート', '低地の村／都市へ変更'],
    ko: ['철도·케이블카 접근', '표지 등산로', '저지대 마을·도시 대안'],
    th: ['รถไฟ／กระเช้าขึ้นเขา', 'ทางมีป้าย', 'ทางเลือกที่หมู่บ้านหรือเมือง']
  };
  for (const [language, labels] of Object.entries(expected)) {
    const texts = nodes.filter((node) => node.tag === 'text' && node.attributes['data-language'] === language);
    assert.equal(texts.length, 4, `${language} must have its heading and three explanations`);
    for (const [index, [label, color]] of labels.map((label, index) => [label, ['#d71920', '#d7a94b', '#416d75'][index]]).entries()) {
      const nodeIndex = nodes.findIndex((node) => node.tag === 'text' && node.attributes['data-language'] === language && node.text.includes(label));
      assert.ok(nodeIndex >= 0, `${language} label missing: ${label}`);
      assert.equal(nodes[nodeIndex - 1]?.tag, 'circle', `${language}: ${label} needs its marker immediately before it`);
      assert.equal(nodes[nodeIndex - 1].attributes.fill, color, `${language}: ${label} color mapping`);
    }
  }
}

const svgSource = read(diagram.src.slice(1));
for (const malformed of ['<svg><rect></svg>', '<!DOCTYPE svg [<!ENTITY x "blocked">]><svg>&x;</svg>']) {
  assert.throws(() => parseSvgElements(malformed), 'malformed XML and DOCTYPE input must be rejected');
}
validateCh12Svg(svgSource);
assert.throws(() => validateCh12Svg(svgSource.replace('<desc', '<script/><desc')), 'unapproved SVG elements must be rejected');
assert.throws(() => validateCh12Svg(svgSource.replace('x2="620"', 'x2="1620"')), 'coordinates outside the canvas must be rejected');
assert.throws(() => validateCh12Svg(svgSource.replace('Rail / cableway access', 'Rail access')), 'missing localized route labels must be rejected');

const targetSearch = JSON.parse(read('data/search-index.json')).filter((record) => targetSet.has(record.url));
const baseSearch = JSON.parse(execFileSync('git', ['show', `${baseCommit}:data/search-index.json`], { cwd: root, encoding: 'utf8' }));
assert.equal(targetSearch.length, 4, 'the four existing English search records remain');
for (const record of JSON.parse(read('data/search-index.json')).filter((item) => item.url.startsWith('/switzerland/') && !targetSet.has(item.url) && !graubuendenSet.has(item.url) && !ch14Set.has(item.url) && !switzerlandCh15Routes.includes(item.url) && !switzerlandCh16Routes.includes(item.url))) {
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
  for (const route of allRoutes.filter((item) => !targetSet.has(item) && !graubuendenSet.has(item) && !ch14Set.has(item) && !switzerlandCh15AffectedRoutes.includes(item) && !switzerlandCh16Routes.includes(item))) {
    const baseHtml = execFileSync('git', ['show', `${baseCommit}:${route.slice(1)}index.html`], { cwd: root, encoding: 'utf8' });
    const expectedHtml = localizeHtml(baseHtml, oldTranslations, code, route);
    assert.equal(normalizeSharedAssetVersions(read(path.relative(root, pathFor(prefix, route)))), normalizeSharedAssetVersions(expectedHtml), `${prefix}${route} is unchanged under its earlier reviewed catalog apart from shared asset cache versions`);
  }
}

console.log(`CH12 five-language regression passed: four St Gallen/Appenzell routes, ${expectedLocalized.size} cumulative CH12–CH16 dated edition URLs, 4,560 sitemap URLs, no new routes, Article/search agreement, non-target pages and search entries preserved outside later edited routes, protected Lucerne/Zermatt assets preserved, SVG XML/geometry/color-language regression passed. Visible English main-body word counts: ${JSON.stringify(wordCounts)}.`);
