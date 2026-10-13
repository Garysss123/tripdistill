import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { parse } from 'parse5';
import { australiaSouthClusters } from '../data/australia-south-guides.mjs';
import { postIntegrationAustraliaRoutes, postIntegrationCanberraRoutes, postIntegrationAlpsMargaretRoutes, postIntegrationMargaretRemainingRoutes, postIntegrationBroomeRoutes, postIntegrationBroomeTasmaniaRoutes } from './integration-sprint-scope.mjs';

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
const adelaideRoutes = [
  '/australia/adelaide-wine-island/',
  '/australia/adelaide-wine-island/city-parklands-north-terrace/',
  '/australia/adelaide-wine-island/barossa-valley/',
  '/australia/adelaide-wine-island/fleurieu-mclaren-vale/'
];
const sydneyRoutes = [
  '/australia/sydney-harbour-coast/',
  '/australia/sydney-harbour-coast/circular-quay-rocks/',
  '/australia/sydney-harbour-coast/opera-house-botanic-garden/',
  '/australia/sydney-harbour-coast/bondi-coogee-coastal-walk/'
];
const brisbaneRoutes = [
  '/australia/brisbane-moreton-bay/',
  '/australia/brisbane-moreton-bay/city-river-south-bank/',
  '/australia/brisbane-moreton-bay/minjerribah-north-stradbroke/',
  '/australia/brisbane-moreton-bay/mulgumpin-moreton-island/'
];
const blueMountainsRoutes = [
  '/australia/blue-mountains-nsw-coast/',
  '/australia/blue-mountains-nsw-coast/katoomba-echo-point/',
  '/australia/blue-mountains-nsw-coast/wentworth-falls-tableland/',
  '/australia/blue-mountains-nsw-coast/blackheath-grose-valley/'
];
const greatOceanRoutes = [
  '/australia/great-ocean-road-gariwerd/',
  '/australia/great-ocean-road-gariwerd/torquay-bells-beach/',
  '/australia/great-ocean-road-gariwerd/apollo-bay-otways/',
  '/australia/great-ocean-road-gariwerd/port-campbell-twelve-apostles/'
];
const goldCoastRoutes = [
  '/australia/gold-coast-scenic-rim/',
  '/australia/gold-coast-scenic-rim/surfers-paradise-broadbeach/',
  '/australia/gold-coast-scenic-rim/burleigh-heads-tallebudgera/',
  '/australia/gold-coast-scenic-rim/coolangatta-snapper-rocks/'
];
const cairnsRoutes = [
  '/australia/cairns-wet-tropics/',
  '/australia/cairns-wet-tropics/cairns-esplanade-reef-terminal/',
  '/australia/cairns-wet-tropics/kuranda-rail-skyrail/',
  '/australia/cairns-wet-tropics/northern-beaches-palm-cove/'
];
const laterAustraliaGapRoutes = [
  '/australia/sydney-harbour-coast/barangaroo-darling-harbour/',
  '/australia/sydney-harbour-coast/manly-north-head/',
  '/australia/blue-mountains-nsw-coast/royal-national-park-coast/',
  '/australia/blue-mountains-nsw-coast/jervis-bay-booderee/',
  '/australia/brisbane-moreton-bay/new-farm-fortitude-valley/',
  '/australia/brisbane-moreton-bay/west-end-cultural-precinct/',
  '/australia/gold-coast-scenic-rim/springbrook-national-park/',
  '/australia/gold-coast-scenic-rim/lamington-national-park/',
  '/australia/melbourne-port-phillip/fitzroy-carlton-collingwood/',
  '/australia/melbourne-port-phillip/phillip-island/',
  '/australia/great-ocean-road-gariwerd/lorne-waterfalls/',
  '/australia/great-ocean-road-gariwerd/gariwerd-grampians/',
  '/australia/adelaide-wine-island/adelaide-hills-hahndorf/',
  '/australia/adelaide-wine-island/kangaroo-island/',
  '/australia/perth-fremantle-rottnest/kings-park/',
  '/australia/perth-fremantle-rottnest/cottesloe-scarborough/'
];
const editedRoutes = [...routes, ...adelaideRoutes, ...sydneyRoutes, ...brisbaneRoutes, ...blueMountainsRoutes, ...greatOceanRoutes, ...goldCoastRoutes, ...cairnsRoutes, ...laterAustraliaGapRoutes, ...postIntegrationAustraliaRoutes, ...postIntegrationCanberraRoutes, ...postIntegrationAlpsMargaretRoutes, ...postIntegrationMargaretRemainingRoutes, ...postIntegrationBroomeRoutes, ...postIntegrationBroomeTasmaniaRoutes];
const editedUrls = new Set(editions.flatMap(({ prefix }) => editedRoutes.map((route) => `${prefix}${route}`)));
assert.equal(editedUrls.size, 360, 'seventy-two exact Australia route dates across five language editions, including the four remaining Margaret River, Broome and Broome/Tasmania guides');
for (const [url, originalDate] of originalEntries) {
  const pathname = new URL(url, 'https://tripdistill.com').pathname;
  if (!pathname.includes('/australia/')) continue;
  const isAlpsMargaretRoute = [...postIntegrationAlpsMargaretRoutes, ...postIntegrationMargaretRemainingRoutes, ...postIntegrationBroomeRoutes, ...postIntegrationBroomeTasmaniaRoutes].some((route) => pathname.endsWith(route));
  const expectedDate = isAlpsMargaretRoute ? '2026-10-13' : editedUrls.has(pathname) ? '2026-10-12' : originalDate;
  assert.equal(currentEntries.get(url), expectedDate, `only the exact 60 selected Australia route dates change: ${url}`);
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

const adelaide = australiaSouthClusters.find((cluster) => cluster.slug === 'adelaide-wine-island');
assert.ok(adelaide, 'Adelaide cluster exists');
assert.deepEqual(adelaideRoutes, [
  `/australia/${adelaide.slug}/`,
  ...['city-parklands-north-terrace', 'barossa-valley', 'fleurieu-mclaren-vale'].map((slug) => `/australia/${adelaide.slug}/${slug}/`)
], 'only the Adelaide hub and three selected existing guides are under review');
const adelaideHeadings = new Map([
  [adelaideRoutes[0], ['Adelaide, Wine Country & Kangaroo Island Give the civic grid, valley roads and peninsula connections their own time.', '阿德雷德、葡萄酒產區與袋鼠島 為市政街區、山谷道路與半島交通各自留出時間。', 'アデレード、ワインカントリー＆カンガルー島 市街地、谷間の道路、半島の移動にそれぞれ時間を確保しましょう。', '애들레이드, 와인 산지 & Kangaroo Island 도심 구역, 계곡 도로, 반도 교통에 각각 시간을 배정하세요.', 'Adelaide แหล่งไวน์ และ Kangaroo Island แบ่งเวลาให้ย่านเมือง ถนนในหุบเขา และการเดินทางบนคาบสมุทรแยกกัน']],
  [adelaideRoutes[1], ['Adelaide Park Lands & North Terrace civic green belt.', '阿德雷德公園綠地與 North Terrace 城市綠帶。', 'アデレード・パークランズ＆ノース・テラス 市民の緑地帯。', 'Adelaide Park Lands & North Terrace 시민 녹지대.', 'Adelaide Park Lands และ North Terrace แนวพื้นที่สีเขียวของเมือง']],
  [adelaideRoutes[2], ['Barossa Valley tasting-with-driver contract.', 'Barossa Valley 品酒與駕駛安排。', 'バロッサ・バレー 運転者を確保した試飲の取り決め。', 'Barossa Valley 운전자와 함께하는 시음 운영 조건.', 'Barossa Valley แผนชิมไวน์กับคนขับไม่ดื่ม']],
  [adelaideRoutes[3], ['Fleurieu Peninsula & McLaren Vale vine-to-coast circuit.', 'Fleurieu 半島與 McLaren Vale 葡萄園至海岸環線。', 'フルリュー半島＆マクラーレン・ヴェイル ぶどう畑から海岸へ巡るルート。', 'Fleurieu Peninsula & McLaren Vale 포도밭에서 해안으로 이어지는 순환.', 'Fleurieu Peninsula และ McLaren Vale วงรอบจากไร่องุ่นสู่ชายฝั่ง']]
]);
const reviewDateText = new Map([
  ['en', '12 October 2026'],
  ['zh-Hant', '2026 年 10 月 12 日'],
  ['ja', '2026年10月12日'],
  ['ko', '2026년 10월 12일'],
  ['th', '12 ตุลาคม 2026']
]);
const distSitemapEntries = sitemapEntries(fs.readFileSync(path.join(root, 'dist', 'sitemap.xml'), 'utf8'));
for (const route of adelaideRoutes) {
  for (const [localeIndex, { code, prefix }] of editions.entries()) {
    const page = readPage(root, prefix, route);
    const dist = readPage(path.join(root, 'dist'), prefix, route);
    const expectedHeading = adelaideHeadings.get(route)[localeIndex];
    assert.ok(page.text.includes(expectedHeading), `${code} source ${route} contains its reviewed heading`);
    assert.ok(dist.text.includes(expectedHeading), `${code} dist ${route} contains its reviewed heading`);
    assert.ok(page.text.includes(reviewDateText.get(code)), `${code} source ${route} shows the localized review date`);
    assert.ok(dist.text.includes(reviewDateText.get(code)), `${code} dist ${route} shows the localized review date`);
    for (const { ast } of [page, dist]) {
      const rootHtml = walk(ast, (node) => node.tagName === 'html')[0];
      assert.equal(attr(rootHtml, 'lang'), code === 'zh-Hant' ? 'zh-Hant' : code, `${code} Adelaide page language`);
      const canonical = walk(ast, (node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical')[0];
      assert.equal(attr(canonical, 'href'), `https://tripdistill.com${prefix}${route}`, `${code} Adelaide canonical`);
      const jsonLd = walk(ast, (node) => node.tagName === 'script' && attr(node, 'type') === 'application/ld+json')[0];
      const schema = JSON.parse((jsonLd.childNodes || []).map((node) => node.value || '').join(''));
      const article = schema['@graph'].find((item) => item['@type'] === 'Article');
      assert.equal(article.dateModified, '2026-10-12', `${code} Adelaide article date`);
    }
    const localized = `${prefix}${route}`;
    assert.equal(currentEntries.get(localized), '2026-10-12', `${code} Adelaide source sitemap date`);
    assert.equal(distSitemapEntries.get(localized), '2026-10-12', `${code} Adelaide dist sitemap date`);
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
const expectedAdelaideSummaries = new Map([
  [adelaideRoutes[0], adelaide.hubIntro],
  ...adelaide.guides.filter((guide) => adelaideRoutes.includes(guide.url)).map((guide) => [guide.url, guide.summary])
]);
for (const route of adelaideRoutes) {
  const record = search.find((item) => item.url === route);
  assert.ok(record, `Adelaide search record exists: ${route}`);
  assert.equal(record.summary, expectedAdelaideSummaries.get(route), `Adelaide search summary matches source copy: ${route}`);
}

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

  console.log('Australia refresh regression passed: exact Melbourne, Adelaide, Sydney, Brisbane, Blue Mountains, Great Ocean Road, Gold Coast, Cairns, Top End/Whitsundays, Canberra, Margaret River, Broome and Broome/Tasmania route groups × 5 language editions, only the 360 selected sitemap dates changed, unchanged sitemap URL set, Adelaide localized headings/dates/source-and-dist parity/search summaries, Melbourne localized content and search parity, accurate hero alternatives, and unchanged photo-source/license declarations.');
