import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const root = path.resolve(import.meta.dirname, '..');
const reviewedDate = '2026-10-12';
const routes = [
  '/malaysia/taman-negara/',
  '/malaysia/taman-negara/kuala-tahan-park-headquarters/',
  '/malaysia/taman-negara/canopy-bukit-teresek/',
  '/malaysia/taman-negara/tahan-river-lata-berkoh/',
  '/malaysia/taman-negara/merapoh-sungai-relau/'
];
const localePrefixes = ['', '/zh', '/ja', '/ko', '/th'];
const localizedDiagramNotes = {
  '': 'Profile key: the five labels represent a conceptual canopy-to-village sequence',
  '/zh': '剖面圖例：五個標籤表示從樹冠到村莊的概念順序',
  '/ja': '断面図の凡例：5つのラベルは樹冠から村までの概念的な順序',
  '/ko': '프로필 범례: 다섯 라벨은 캐노피에서 마을까지의 개념적 순서',
  '/th': 'คำอธิบายภาพตัดขวาง: ป้ายทั้งห้าแสดงลำดับแนวคิดจากเรือนยอดถึงหมู่บ้าน'
};
const localizedSourceReviewDates = {
  '/zh': '規劃資訊與授權條款已於 2026 年 10 月 12 日查核。',
  '/ja': '計画情報とライセンスは2026年10月12日に確認しました。',
  '/ko': '여행 정보와 라이선스는 2026년 10월 12일 확인했습니다.',
  '/th': 'ตรวจสอบข้อมูลการวางแผนและใบอนุญาตเมื่อ 12 ตุลาคม 2026'
};
const selected = new Set(routes);
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function routeFile(prefix, route, outputRoot = root) {
  return path.join(outputRoot, `${prefix}${route}`, 'index.html');
}

function textContent(node) {
  if (node.nodeName === '#text') return node.value;
  if (['script', 'style'].includes(node.tagName)) return '';
  return (node.childNodes || []).map(textContent).join(' ');
}

function travelGuideDate(html, prefix, route) {
  const raw = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(raw, `${prefix}${route}: JSON-LD is required`);
  const schema = JSON.parse(raw);
  const graph = schema['@graph'] || [schema];
  const guide = graph.find((node) => node['@type'] === 'TravelGuide');
  assert.ok(guide, `${prefix}${route}: TravelGuide schema is required`);
  assert.equal(guide.url, `https://tripdistill.com${prefix}${route}`, `${prefix}${route}: schema URL`);
  return guide.dateModified;
}

const sitemapRaw = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapEntries = new Map([...sitemapRaw.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
  .map(([, url, date]) => [url || '/', date]));
assert.equal(sitemapEntries.size, 4560, 'The full sitemap URL set remains unchanged at 4,560 entries');
const distRoot = path.join(root, 'dist');
const distSitemapRaw = fs.readFileSync(path.join(distRoot, 'sitemap.xml'), 'utf8');
const distSitemapEntries = new Map([...distSitemapRaw.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
  .map(([, url, date]) => [url || '/', date]));
assert.equal(distSitemapEntries.size, 4560, 'The built sitemap preserves 4,560 entries');

for (const route of routes) {
  for (const prefix of localePrefixes) {
    const file = routeFile(prefix, route);
    assert.ok(fs.existsSync(file), `localized page exists: ${prefix}${route}`);
    const html = fs.readFileSync(file, 'utf8');
    assert.equal(travelGuideDate(html, prefix, route), reviewedDate, `${prefix}${route}: modified date`);
    assert.ok(html.includes(`rel="canonical" href="https://tripdistill.com${prefix}${route}"`), `${prefix}${route}: canonical`);
    for (const alternatePrefix of localePrefixes) {
      assert.ok(html.includes(`href="https://tripdistill.com${alternatePrefix}${route}"`), `${prefix}${route}: alternate ${alternatePrefix}${route}`);
    }
    if (route === routes[0]) {
      assert.ok(html.includes(localizedDiagramNotes[prefix]), `${prefix}${route}: visible diagram key is translated`);
      if (prefix) assert.ok(html.includes(localizedSourceReviewDates[prefix]), `${prefix}${route}: source review date is translated`);
    }
    assert.equal(sitemapEntries.get(`${prefix}${route}`), reviewedDate, `${prefix}${route}: sitemap date`);

    const distFile = routeFile(prefix, route, distRoot);
    assert.ok(fs.existsSync(distFile), `built localized page exists: ${prefix}${route}`);
    const distHtml = fs.readFileSync(distFile, 'utf8');
    assert.equal(travelGuideDate(distHtml, prefix, route), reviewedDate, `dist ${prefix}${route}: modified date`);
    assert.ok(distHtml.includes(`rel="canonical" href="https://tripdistill.com${prefix}${route}"`), `dist ${prefix}${route}: canonical`);
    assert.equal(distSitemapEntries.get(`${prefix}${route}`), reviewedDate, `dist ${prefix}${route}: sitemap date`);
  }
}

const englishHub = fs.readFileSync(routeFile('', routes[0]), 'utf8');
const englishHubText = textContent(parse(englishHub)).replace(/\s+/g, ' ');
for (const phrase of [
  'KTM Intercity', 'Jerantut', 'Kuala Tembeling Jetty', 'Mutiara Taman Negara Resort',
  '2 nights', '3 nights', '4 nights', 'Bukit Teresek', 'Lata Berkoh',
  'school/public holidays', 'weather reserve', 'current fare', 'not verified', 'boat', 'Profile key', 'Not to scale'
]) assert.ok(englishHubText.toLowerCase().includes(phrase.toLowerCase()), `hub retains planning detail: ${phrase}`);

const expectedSourceLinks = [
  'https://www.pahangtourism.org.my/destination/nature-adventure/jerantut/taman-negara',
  'https://www.pahangtourism.org.my/travel-info/downloads/1-brochure?download=12:taman-negara-brochure',
  'https://www.ktmb.com.my/TrainTime.html',
  'https://www.met.gov.my/en/forecast/weather/district/',
  'https://www.wildlife.gov.my/en/taman-negara-pahang-kuala-tahan/',
  'https://www.wildlife.gov.my/en/taman-negara-pahang-sg-relau-merapoh/'
];
for (const source of expectedSourceLinks) assert.ok(englishHub.includes(source), `official source is linked: ${source}`);
assert.ok(englishHub.includes('https://creativecommons.org/licenses/by/4.0/'), 'hub links the CC BY 4.0 license');

const childPlanningPhrases = [
  ['KTM Intercity', 'Mutiara Taman Negara Resort', 'guide meeting point'],
  ['boardwalks, roots, mud, steps', 'Bukit Teresek', 'No current hours or ticket price'],
  ['boat provider’s name', 'Lata Berkoh', 'weather cancellation'],
  ['Merapoh/Sungai Relau', 'PERHILITAN', 'last-mile road transfer']
];
for (let index = 1; index < routes.length; index += 1) {
  const html = fs.readFileSync(routeFile('', routes[index]), 'utf8');
  const pageText = textContent(parse(html)).replace(/\s+/g, ' ');
  for (const phrase of childPlanningPhrases[index - 1]) {
    assert.ok(pageText.toLowerCase().includes(phrase.toLowerCase()), `${routes[index]} retains planning detail: ${phrase}`);
  }
  assert.ok(html.includes('Flexible fallback'), `${routes[index]} has a route-specific fallback`);
  const expectedLicense = index === 3
    ? 'https://creativecommons.org/publicdomain/zero/1.0/'
    : 'https://creativecommons.org/licenses/by/4.0/';
  assert.ok(html.includes(expectedLicense), `${routes[index]} links the image's declared license`);
}

const search = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
assert.equal(search.filter((record) => selected.has(record.url)).length, routes.length, 'search retains exactly the five selected route records');
const hubSearch = search.find((record) => record.url === routes[0]);
assert.ok(hubSearch.summary.includes('Jerantut rail-to-road/boat chain') && hubSearch.summary.includes('Merapoh/Sungai Relau is a separate expedition gateway'), 'hub search summary matches the refreshed route model');
for (const prefix of localePrefixes.slice(1)) {
  const localizedSearchPath = path.join(root, prefix.slice(1), 'data/search-index.json');
  assert.ok(fs.existsSync(localizedSearchPath), `localized search index exists: ${prefix}`);
  const localizedSearch = JSON.parse(fs.readFileSync(localizedSearchPath, 'utf8'));
  const localizedSelected = new Set(routes.map((route) => `${prefix}${route}`));
  const parentLabels = localizedSearch.filter((record) => localizedSelected.has(record.url)).map((record) => record.parent);
  assert.ok(parentLabels.every((label) => label && !label.includes('Malaysia - Taman Negara')), `${prefix}: search parent label is localized`);
  const distLocalizedSearchPath = path.join(distRoot, prefix.slice(1), 'data/search-index.json');
  assert.ok(fs.existsSync(distLocalizedSearchPath), `built localized search index exists: ${prefix}`);
  const distLocalizedSearch = JSON.parse(fs.readFileSync(distLocalizedSearchPath, 'utf8'));
  const distParentLabels = distLocalizedSearch.filter((record) => localizedSelected.has(record.url)).map((record) => record.parent);
  assert.ok(distParentLabels.every((label) => label && !label.includes('Malaysia - Taman Negara')), `dist ${prefix}: search parent label is localized`);
}

const baseSitemap = new Map([...execFileSync('git', ['show', 'HEAD:sitemap.xml'], { encoding: 'utf8' }).matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
  .map(([, url, date]) => [url || '/', date]));
assert.deepEqual(new Set(sitemapEntries.keys()), new Set(baseSitemap.keys()), 'refresh adds or removes no sitemap URL');
assert.deepEqual(new Set(distSitemapEntries.keys()), new Set(baseSitemap.keys()), 'built refresh adds or removes no sitemap URL');
const tamanTargets = new Set(localePrefixes.flatMap((prefix) => routes.map((route) => `${prefix}${route}`)));
const provenceRoutes = [
  '/france/provence-inland/',
  '/france/provence-inland/avignon-papal-city/',
  '/france/provence-inland/aix-markets-cezanne/'
];
const provenceTargets = new Set(localePrefixes.flatMap((prefix) => provenceRoutes.map((route) => `${prefix}${route}`)));
const kotaKinabaluRoutes = [
  '/malaysia/kota-kinabalu-tunku-abdul-rahman/',
  '/malaysia/kota-kinabalu-tunku-abdul-rahman/gaya-street-waterfront/',
  '/malaysia/kota-kinabalu-tunku-abdul-rahman/tanjung-aru-museum/',
  '/malaysia/kota-kinabalu-tunku-abdul-rahman/manukan-mamutik/',
  '/malaysia/kota-kinabalu-tunku-abdul-rahman/sapi-gaya-islands/'
];
const kotaKinabaluTargets = new Set(localePrefixes.flatMap((prefix) => kotaKinabaluRoutes.map((route) => `${prefix}${route}`)));
const expectedUpdates = new Map([
  ...[...tamanTargets].map((url) => [url, reviewedDate]),
  ...[...provenceTargets].map((url) => [url, '2026-10-12']),
  ...[...kotaKinabaluTargets].map((url) => [url, '2026-10-12'])
]);
for (const [url, date] of baseSitemap) {
  assert.equal(sitemapEntries.get(url), expectedUpdates.get(url) || date, `sitemap date scope: ${url}`);
  assert.equal(distSitemapEntries.get(url), expectedUpdates.get(url) || date, `dist sitemap date scope: ${url}`);
}
assert.equal(tamanTargets.size, 25, 'expected exactly 5 Taman routes × 5 language editions');
assert.equal(provenceTargets.size, 15, 'expected only the three Provence routes × 5 language editions as the separate concurrent date change');
assert.equal(kotaKinabaluTargets.size, 25, 'expected exactly 5 Kota Kinabalu routes × 5 language editions');

console.log(`Taman Negara refresh regression passed: exactly ${routes.length} Taman routes × ${localePrefixes.length} languages, 25 Taman, 15 Provence and 25 Kota Kinabalu date entries, synchronized search, linked official sources, and no URL-set changes.`);
