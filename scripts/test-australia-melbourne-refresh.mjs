import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { parse } from 'parse5';
import { australiaSouthClusters } from '../data/australia-south-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baseline = 'a014412eceb30efae51894be3b6167debaa96ca3';
const routes = [
  '/australia/melbourne-port-phillip/',
  '/australia/melbourne-port-phillip/cbd-laneways-tram-grid/',
  '/australia/melbourne-port-phillip/federation-square-southbank/',
  '/australia/melbourne-port-phillip/st-kilda-foreshore/'
];
const editions = [
  { code: 'en', prefix: '' },
  { code: 'zh-Hant', prefix: '/zh', checks: [
    ['2晚', '3晚', '4晚', '免費電車區'],
    ['德格雷夫斯街', '中心巷', '街區拱廊', '皇家拱廊', '免費電車區'],
    ['伊恩·波特中心', 'NGV國際館', '王子橋', '特展'],
    ['96號', '免費票數量有限', '手電筒', '海灘報告']
  ] },
  { code: 'ja', prefix: '/ja', checks: [
    ['2泊', '3泊', '4泊', '無料トラム区域'],
    ['デグレーブス・ストリート', 'センター・プレイス', 'ブロック・アーケード', 'ロイヤル・アーケード', '無料トラム区域'],
    ['イアン・ポッター・センター', 'NGVインターナショナル', 'プリンセス橋', '特別展'],
    ['96番', '無料券', '懐中電灯', '海水浴場レポート']
  ] },
  { code: 'ko', prefix: '/ko', checks: [
    ['2박', '3박', '4박', '무료 트램 구역'],
    ['디그레이브스 스트리트', '센터 플레이스', '블록 아케이드', '로열 아케이드', '무료 트램 구역'],
    ['이언 포터 센터', 'NGV 인터내셔널', '프린스 브리지', '특별전'],
    ['96번', '무료 티켓', '손전등', '해변 보고서']
  ] },
  { code: 'th', prefix: '/th', checks: [
    ['2 คืน', '3 คืน', '4 คืน', 'Free Tram Zone'],
    ['Degraves Street', 'Centre Place', 'Block Arcade', 'Royal Arcade', 'Free Tram Zone'],
    ['Ian Potter Centre', 'NGV International', 'Princes Bridge', 'นิทรรศการพิเศษ'],
    ['96', 'ตั๋วฟรีจำนวนจำกัด', 'ไฟฉาย', 'รายงานชายหาด']
  ] }
];
const hub = australiaSouthClusters.find((cluster) => cluster.slug === 'melbourne-port-phillip');
assert.ok(hub, 'Melbourne cluster exists');
assert.deepEqual(routes, [
  `/australia/${hub.slug}/`,
  ...['cbd-laneways-tram-grid', 'federation-square-southbank', 'st-kilda-foreshore'].map((slug) => `/australia/${hub.slug}/${slug}/`)
], 'only the hub and the three selected existing guides are under review');

function routeFile(baseDir, prefix, route) {
  return path.join(baseDir, prefix.replace(/^\//, ''), route.replace(/^\//, ''), 'index.html');
}

function walk(node, predicate, found = []) {
  if (predicate(node)) found.push(node);
  for (const child of node.childNodes || []) walk(child, predicate, found);
  return found;
}

function attr(node, name) {
  return node.attrs?.find((item) => item.name === name)?.value;
}

function textOf(node) {
  if (node.nodeName === '#text') return node.value || '';
  if (['script', 'style', 'noscript'].includes(node.tagName)) return '';
  return (node.childNodes || []).map(textOf).join(' ');
}

function readPage(baseDir, prefix, route) {
  const file = routeFile(baseDir, prefix, route);
  assert.ok(fs.existsSync(file), `page exists: ${path.relative(root, file)}`);
  const html = fs.readFileSync(file, 'utf8');
  return { html, ast: parse(html), text: textOf(parse(html)).replace(/\s+/g, ' ') };
}

function sitemapEntries(xml) {
  const entries = new Map();
  for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const url = block.match(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc>/)?.[1];
    const date = block.match(/<lastmod>([^<]*)<\/lastmod>/)?.[1];
    if (url !== undefined && date) entries.set(url || '/', date);
  }
  return entries;
}

const originalSitemap = execFileSync('git', ['show', `${baseline}:sitemap.xml`], { cwd: root, encoding: 'utf8' });
const currentSitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const originalEntries = sitemapEntries(originalSitemap);
const currentEntries = sitemapEntries(currentSitemap);
assert.deepEqual(new Set(currentEntries.keys()), new Set(originalEntries.keys()), 'sitemap URL set is unchanged');
const editedUrls = new Set(editions.flatMap(({ prefix }) => routes.map((route) => `${prefix}${route}`)));
assert.equal(editedUrls.size, 20, 'four selected routes across five language editions');
for (const [url, originalDate] of originalEntries) {
  assert.equal(currentEntries.get(url), editedUrls.has(url) ? '2026-10-12' : originalDate, `only selected route dates change: ${url}`);
}

for (const [index, route] of routes.entries()) {
  const english = readPage(root, '', route);
  const builtEnglish = readPage(path.join(root, 'dist'), '', route);
  const pageChecks = [
    ['Melbourne & Port Phillip', 'Flinders Street', 'Southern Cross', 'Free Tram Zone', '2 nights', '3 nights', '4 nights'],
    ['Degraves Street', 'Centre Place', 'Block Arcade', 'Royal Arcade', 'Free Tram Zone', 'rain', 'luggage'],
    ['Ian Potter Centre', 'NGV International', 'Princes Bridge', '180 St Kilda Road', 'special exhibitions', 'ticketed events'],
    ['Route 96', 'St Kilda Pier', 'free tickets', 'beach report', 'do not use a torch', 'evening gets late']
  ][index];
  for (const phrase of pageChecks) assert.ok(english.text.toLowerCase().includes(phrase.toLowerCase()), `${route} includes ${phrase}`);

  for (const { code, prefix, checks } of editions) {
    const page = code === 'en' ? english : readPage(root, prefix, route);
    const dist = code === 'en' ? builtEnglish : readPage(path.join(root, 'dist'), prefix, route);
    const rootHtml = walk(page.ast, (node) => node.tagName === 'html')[0];
    assert.equal(attr(rootHtml, 'lang'), code === 'zh-Hant' ? 'zh-Hant' : code, `${code} page language`);
    const canonical = walk(page.ast, (node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical')[0];
    assert.equal(attr(canonical, 'href'), `https://tripdistill.com${prefix}${route}`, `${code} canonical`);
    const jsonLd = walk(page.ast, (node) => node.tagName === 'script' && attr(node, 'type') === 'application/ld+json')[0];
    const schema = JSON.parse((jsonLd.childNodes || []).map((node) => node.value || '').join(''));
    const article = schema['@graph'].find((item) => item['@type'] === 'Article');
    assert.equal(article.dateModified, '2026-10-12', `${code} article modified date`);
    assert.ok(dist.html.includes(`rel="canonical" href="https://tripdistill.com${prefix}${route}"`), `${code} dist canonical`);
    assert.equal(currentEntries.get(`${prefix}${route}`), '2026-10-12', `${code} sitemap date`);
    if (checks) for (const phrase of checks[index]) {
      assert.ok(page.text.toLowerCase().includes(phrase.toLowerCase()), `${code} ${route} includes ${phrase}`);
      assert.ok(dist.text.toLowerCase().includes(phrase.toLowerCase()), `${code} dist ${route} includes ${phrase}`);
    }
  }
}

const expectedSummaries = new Map([
  [`/australia/${hub.slug}/`, hub.hubIntro],
  ...hub.guides.map((guide) => [guide.url, guide.summary])
]);
const search = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
for (const route of routes) {
  const record = search.find((item) => item.url === route);
  assert.ok(record, `search record exists: ${route}`);
  assert.equal(record.summary, expectedSummaries.get(route), `search summary matches source copy: ${route}`);
}
assert.equal(search.filter((record) => record.url.startsWith('/australia/melbourne-port-phillip/')).length, 6, 'the existing Melbourne search records remain intact');

const photoExpectations = new Map([
  ['/australia/melbourne-port-phillip/cbd-laneways-tram-grid/', ['Melbourne central business district viewed from above', 'https://commons.wikimedia.org/wiki/File:Melbourne_CBD_2008.jpg', 'CC BY 3.0']],
  ['/australia/melbourne-port-phillip/federation-square-southbank/', ['Yarra River and Princes Bridge beneath Melbourne’s night skyline', 'https://commons.wikimedia.org/wiki/File:Night_view_of_the_Melbourne_CBD,_over_the_Yarra_River,_showing_Princes_Bridge,_St_Kilda_Road,_St_Paul%27s_Cathedral,_and_Federation_Square._Peter_Neaum._-_panoramio.jpg', 'CC BY 3.0']],
  ['/australia/melbourne-port-phillip/st-kilda-foreshore/', ['St Kilda Beach, pier and Port Phillip Bay before midday', 'https://commons.wikimedia.org/wiki/File:Quiet_before_midday_-_St_Kilda_Beach_and_Pier_(3166045772).jpg', 'CC BY-SA 2.0']]
]);
for (const [route, [alt, source, license]] of photoExpectations) {
  const { ast } = readPage(root, '', route);
  const image = walk(ast, (node) => node.tagName === 'img' && attr(node, 'alt') === alt)[0];
  assert.ok(image, `${route} hero alternative text matches the visible photograph`);
  assert.ok(readPage(root, '', route).html.includes(source), `${route} retains its declared source page`);
  assert.ok(readPage(root, '', route).html.includes(license), `${route} retains its displayed license declaration`);
}

console.log('Melbourne refresh regression passed: 4 existing routes × 5 language editions, 20 date updates, unchanged sitemap URL set, localized content and search parity, accurate hero alternatives, and unchanged photo-source/license declarations.');
