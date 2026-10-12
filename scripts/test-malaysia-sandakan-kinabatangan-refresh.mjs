import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { parse } from 'parse5';
import { malaysiaDepthClusters, malaysiaDepthGuides } from '../data/malaysia-depth-guides.mjs';
import { integrationRouteGroups, integrationRoutes, integrationSearchRoutes, integrationSprintBaseline, localizedCurrentSitemapDateChangeRoutes, postIntegrationHawaiiRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const reviewedDate = '2026-10-12';
const integrationScopeBaseline = integrationSprintBaseline;
const routes = [
  '/malaysia/sandakan-kinabatangan/',
  '/malaysia/sandakan-kinabatangan/sandakan-heritage-waterfront/',
  '/malaysia/sandakan-kinabatangan/sepilok-conservation-centres/',
  '/malaysia/sandakan-kinabatangan/sukau-kinabatangan/',
  '/malaysia/sandakan-kinabatangan/gomantong-batu-puteh/'
];
const kuchingRoutes = [
  '/malaysia/kuching-bako/',
  '/malaysia/kuching-bako/kuching-waterfront-old-courthouse/',
  '/malaysia/kuching-bako/borneo-cultures-museum/',
  '/malaysia/kuching-bako/semenggoh-wildlife-centre/',
  '/malaysia/kuching-bako/bako-national-park/'
];
const sempornaRoutes = [
  '/malaysia/semporna-tun-sakaran/',
  '/malaysia/semporna-tun-sakaran/semporna-jetty-operator/',
  '/malaysia/semporna-tun-sakaran/bohey-dulang-bodgaya/',
  '/malaysia/semporna-tun-sakaran/mabul-kapalai/',
  '/malaysia/semporna-tun-sakaran/sipadan-permit-day/'
];
const perhentianRoutes = [
  '/malaysia/perhentian-redang/',
  '/malaysia/perhentian-redang/kuala-besut-transfer/',
  '/malaysia/perhentian-redang/perhentian-kecil/',
  '/malaysia/perhentian-redang/perhentian-besar/',
  '/malaysia/perhentian-redang/redang-merang-transfer/'
];
const kotaKinabaluRoutes = [
  '/malaysia/kota-kinabalu-tunku-abdul-rahman/',
  '/malaysia/kota-kinabalu-tunku-abdul-rahman/gaya-street-waterfront/',
  '/malaysia/kota-kinabalu-tunku-abdul-rahman/tanjung-aru-museum/',
  '/malaysia/kota-kinabalu-tunku-abdul-rahman/manukan-mamutik/',
  '/malaysia/kota-kinabalu-tunku-abdul-rahman/sapi-gaya-islands/'
];
const gunungMuluRoutes = [
  '/malaysia/gunung-mulu/',
  '/malaysia/gunung-mulu/deer-lang-caves/',
  '/malaysia/gunung-mulu/clearwater-wind-caves/',
  '/malaysia/gunung-mulu/pinnacles-expedition/',
  '/malaysia/gunung-mulu/canopy-night-walks/'
];
const kualaLumpurPutrajayaRoutes = [
  '/malaysia/kuala-lumpur-putrajaya/',
  '/malaysia/kuala-lumpur-putrajaya/merdeka-chinatown/',
  '/malaysia/kuala-lumpur-putrajaya/klcc-bukit-bintang/',
  '/malaysia/kuala-lumpur-putrajaya/batu-caves/',
  '/malaysia/kuala-lumpur-putrajaya/putrajaya-civic-core/'
];
const kinabaluRoutes = [
  '/malaysia/',
  '/malaysia/kinabalu-park-kundasang/',
  '/malaysia/kinabalu-park-kundasang/park-headquarters-botanical-garden/',
  '/malaysia/kinabalu-park-kundasang/mount-kinabalu-summit/',
  '/malaysia/kinabalu-park-kundasang/kundasang-ranau/',
  '/malaysia/kinabalu-park-kundasang/poring-hot-springs/'
];
const integrationMalaysiaRoutes = [
  ...routes,
  ...kuchingRoutes,
  ...sempornaRoutes,
  ...perhentianRoutes,
  ...kotaKinabaluRoutes,
  ...gunungMuluRoutes,
  ...kualaLumpurPutrajayaRoutes,
  ...kinabaluRoutes
];
assert.deepEqual(new Set(integrationMalaysiaRoutes), new Set(integrationRouteGroups.malaysia), 'the exact 41 Malaysia route cohort is represented in the shared sprint scope');
const locales = [
  { prefix: '', date: 'Editorial review: 12 October 2026', hubDate: 'Editorial review: 12 October 2026' },
  { prefix: '/zh', date: '編輯審閱：2026 年 10 月 12 日', hubDate: '編輯檢視：2026 年 10 月 12 日' },
  { prefix: '/ja', date: '編集確認：2026年10月12日', hubDate: '編集確認：2026年10月12日' },
  { prefix: '/ko', date: '편집 검토: 2026년 10월 12일', hubDate: '편집 검토: 2026년 10월 12일' },
  { prefix: '/th', date: 'ตรวจทานบรรณาธิการ: 12 ตุลาคม 2026', hubDate: 'ตรวจเนื้อหาโดยกองบรรณาธิการ: 12 ตุลาคม 2026' }
];
const selectedRoutes = new Set(routes);
const childPlanningChecks = new Map([
  [routes[1], ['about 11 km outside town', 'not a dependable current route map', 'uphill block', 'outlying memorial']],
  [routes[2], ['23 km/40 minutes', 'Mon–Thu and Sat–Sun', 'Friday 09:00–11:00', 'not a promise of entry']],
  [routes[3], ['Two nights at one named lodge', 'Kota Kinabatangan reaches the town-side stop', 'included dawn/dusk outings', 'Sightings are never guaranteed']],
  [routes[4], ['Simud Hitam', 'Simud Putih is restricted', 'KOPEL/Miso Walai', 'Friday 08:00–11:30', 'last entry at 16:00', 'RM5 for Malaysian visitors', 'last reviewed on 12 September 2024', 'not same-day confirmation']]
]);
const guideByUrl = new Map(malaysiaDepthGuides.map((guide) => [guide.url, guide]));
const cluster = malaysiaDepthClusters.find((item) => item.hubSlug === 'sandakan-kinabatangan');
assert.ok(cluster, 'Sandakan–Kinabatangan source cluster exists');
assert.deepEqual(cluster.guides.map((guide) => `/malaysia/${cluster.hubSlug}/${guide.slug}/`), routes.slice(1), 'only the four existing Sandakan children belong to this hub');
assert.equal(cluster.explicitRelatedPhotoCredits, true, 'all related photos have visible source and license credits');
assert.deepEqual(malaysiaDepthGuides.filter((guide) => guide.hubSlug === cluster.hubSlug).map((guide) => guide.url), routes.slice(1), 'no additional guide was added to the reviewed cluster');

function pagePath(prefix, route, outputRoot = root) {
  return path.join(outputRoot, `${prefix}${route}`, 'index.html');
}

function collectText(node) {
  if (node.nodeName === '#text') return node.value || '';
  if (['script', 'style'].includes(node.tagName)) return '';
  return (node.childNodes || []).map(collectText).join(' ');
}

function walk(node, visit) {
  visit(node);
  for (const child of node.childNodes || []) walk(child, visit);
}

function nodes(document, predicate) {
  const found = [];
  walk(document, (node) => { if (node.tagName && predicate(node)) found.push(node); });
  return found;
}

function attributes(node) {
  return Object.fromEntries((node.attrs || []).map(({ name, value }) => [name, value]));
}

function travelGuide(html, prefix, route) {
  const raw = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(raw, `${prefix}${route}: JSON-LD exists`);
  const parsed = JSON.parse(raw);
  const graph = parsed['@graph'] || [parsed];
  const guide = graph.find((item) => item['@type'] === 'TravelGuide');
  assert.ok(guide, `${prefix}${route}: TravelGuide schema exists`);
  assert.equal(guide.url, `https://tripdistill.com${prefix}${route}`, `${prefix}${route}: schema URL matches canonical route`);
  return { graph, guide };
}

const sourceSitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemap = new Map([...sourceSitemap.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
  .map(([, url, date]) => [url || '/', date]));
assert.equal(sitemap.size, 4560, 'source sitemap remains at 4,560 URLs');
const baselineSitemapRaw = execFileSync('git', ['show', `${integrationScopeBaseline}:sitemap.xml`], { encoding: 'utf8' });
const baselineSitemap = new Map([...baselineSitemapRaw.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
  .map(([, url, date]) => [url || '/', date]));
assert.deepEqual(new Set(sitemap.keys()), new Set(baselineSitemap.keys()), 'refresh adds or removes no sitemap URLs');
const expectedTargets = new Set(locales.flatMap(({ prefix }) => routes.map((route) => `${prefix}${route}`)));
const integrationTargets = localizedCurrentSitemapDateChangeRoutes(locales.map(({ prefix }) => prefix));
const actualDateChanges = [...sitemap].filter(([url, date]) => baselineSitemap.get(url) !== date).map(([url]) => url);
assert.equal(integrationRoutes.length, 262, 'the exact UK, Australia, France, Italy, Switzerland, Canada and Malaysia source route scope contains 262 existing English pages');
assert.deepEqual(new Set(actualDateChanges), integrationTargets, 'only the historical integration and four later Hawaii routes × five locales receive new lastmod values');
for (const url of expectedTargets) assert.equal(sitemap.get(url), reviewedDate, `${url}: sitemap lastmod`);

const baseSearch = JSON.parse(execFileSync('git', ['show', `${integrationScopeBaseline}:data/search-index.json`], { encoding: 'utf8' }));
const englishSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const baselineSearchByUrl = new Map(baseSearch.map((record) => [record.url, record]));
const englishSearchByUrl = new Map(englishSearch.map((record) => [record.url, record]));
assert.deepEqual(new Set(englishSearchByUrl.keys()), new Set(baselineSearchByUrl.keys()), 'English search URL set is unchanged');
const changedSearchUrls = [...englishSearchByUrl].filter(([url, record]) => !isDeepStrictEqual(record, baselineSearchByUrl.get(url))).map(([url]) => url);
assert.deepEqual(new Set(changedSearchUrls), new Set([...integrationSearchRoutes, ...postIntegrationHawaiiRoutes]), 'only the exact integrated UK, France, Italy, Switzerland, Canada, Malaysia and Hawaii English search records changed');
assert.equal(englishSearch.filter((record) => selectedRoutes.has(record.url)).length, routes.length, 'all five selected English search records exist');

const imageBySource = new Map();
for (const route of routes.slice(1)) {
  const guide = guideByUrl.get(route);
  assert.ok(guide, `${route}: source record exists`);
  assert.equal(guide.reviewedOnIso, reviewedDate, `${route}: source review date`);
  assert.notEqual(guide.relatedImages, false, `${route}: related chapter photos remain enabled and credited`);
  assert.ok(guide.image.source && guide.image.licenseUrl && guide.image.localSha1, `${route}: photo has exact source, license URL and recorded local hash`);
  imageBySource.set(guide.image.source, guide.image);
  const imagePath = path.join(root, guide.image.src.slice(1));
  const bytes = fs.readFileSync(imagePath);
  assert.equal(crypto.createHash('sha1').update(bytes).digest('hex'), guide.image.localSha1, `${route}: local photo bytes match the recorded hash`);
}
assert.equal(imageBySource.size, 3, 'the four existing children use three unique reviewed local photographs');

const translatedSearch = new Map(locales.filter(({ prefix }) => prefix).map(({ prefix }) => {
  const language = prefix.slice(1);
  const file = path.join(root, language, 'data/search-index.json');
  assert.ok(fs.existsSync(file), `${prefix}: localized search index exists`);
  return [prefix, JSON.parse(fs.readFileSync(file, 'utf8'))];
}));

for (const route of routes) {
  const sourceGuide = guideByUrl.get(route);
  if (sourceGuide) assert.equal(sourceGuide.reviewedOnIso, reviewedDate, `${route}: source review date`);
  const englishRecord = englishSearchByUrl.get(route);
  assert.ok(englishRecord, `${route}: English search entry`);

  for (const { prefix, date } of locales) {
    const file = pagePath(prefix, route);
    assert.ok(fs.existsSync(file), `${prefix}${route}: localized page exists`);
    const html = fs.readFileSync(file, 'utf8');
    const document = parse(html);
    const { graph, guide } = travelGuide(html, prefix, route);
    assert.equal(guide.dateModified, reviewedDate, `${prefix}${route}: structured date`);
    const faq = graph.find((item) => item['@type'] === 'FAQPage');
    assert.ok(faq, `${prefix}${route}: FAQ structured data remains valid`);
    assert.ok(html.includes(`rel="canonical" href="https://tripdistill.com${prefix}${route}"`), `${prefix}${route}: canonical link`);
    assert.ok(html.includes(route === routes[0] ? locales.find((item) => item.prefix === prefix).hubDate : date), `${prefix}${route}: visible localized editorial review date`);
    for (const { prefix: alternate } of locales) {
      assert.ok(html.includes(`href="https://tripdistill.com${alternate}${route}"`), `${prefix}${route}: alternate ${alternate}${route}`);
    }
    assert.equal(sitemap.get(`${prefix}${route}`), reviewedDate, `${prefix}${route}: sitemap date`);

    if (prefix) {
      const englishFile = pagePath('', route);
      const englishSchema = travelGuide(fs.readFileSync(englishFile, 'utf8'), '', route);
      assert.notEqual(guide.name, englishSchema.guide.name, `${prefix}${route}: structured page name is translated`);
      const englishFaq = englishSchema.graph.find((item) => item['@type'] === 'FAQPage');
      assert.equal(faq.mainEntity.length, englishFaq.mainEntity.length, `${prefix}${route}: translated FAQ count matches English`);
      faq.mainEntity.forEach((question, index) => {
        assert.notEqual(question.name, englishFaq.mainEntity[index].name, `${prefix}${route}: FAQ question ${index + 1} is translated`);
        assert.notEqual(question.acceptedAnswer.text, englishFaq.mainEntity[index].acceptedAnswer.text, `${prefix}${route}: FAQ answer ${index + 1} is translated`);
      });
      const localeSearch = translatedSearch.get(prefix);
      const localUrl = `${prefix}${route}`;
      const localRecord = localeSearch.find((record) => record.url === localUrl);
      assert.ok(localRecord, `${localUrl}: localized search entry`);
      assert.notEqual(localRecord.title, englishRecord.title, `${localUrl}: translated search title`);
      assert.notEqual(localRecord.summary, englishRecord.summary, `${localUrl}: translated search summary`);
      assert.notEqual(localRecord.parent, englishRecord.parent, `${localUrl}: translated search parent label`);
    }

    if (route === routes[0] && !prefix) {
      const text = collectText(document).replace(/\s+/g, ' ');
      for (const phrase of ['Five-night example', 'SDK Airport', 'Kota Kinabatangan', 'Walk by zone', 'METMalaysia', 'Sandakan return night']) {
        assert.ok(text.toLowerCase().includes(phrase.toLowerCase()), `${prefix}${route}: hub retains the five-night and transfer plan (${phrase})`);
      }
      for (const source of [
        'https://sabahtourism.com/district/sandakan/',
        'https://sabahtourism.com/destination/sepilok-orangutan-rehabilitation-centre/',
        'https://sabahtourism.com/district/kinabatangan/',
        'https://sabahtourism.com/destination/kinabatangan-river/',
        'https://www.met.gov.my/en/forecast/weather/district/'
      ]) assert.ok(html.includes(source), `${prefix}${route}: current primary source link ${source}`);
    } else if (route !== routes[0]) {
      const guide = sourceGuide;
      const text = collectText(document).replace(/\s+/g, ' ');
      assert.ok(html.includes(guide.image.src), `${prefix}${route}: original reviewed image remains in use`);
      assert.ok(html.includes(guide.image.source), `${prefix}${route}: exact photo source page is credited`);
      assert.ok(html.includes(guide.image.licenseUrl), `${prefix}${route}: exact declared license is linked`);
      for (const sourceImage of imageBySource.values()) {
        assert.ok(html.includes(sourceImage.source), `${prefix}${route}: each displayed related image has its source page credited`);
        assert.ok(html.includes(sourceImage.licenseUrl), `${prefix}${route}: each displayed related image has its license linked`);
      }
      if (!prefix) {
        assert.ok(html.includes('Resized, center-cropped and converted to WebP; no other material edits.'), `${route}: image transformation disclosure remains visible`);
        assert.ok(html.includes('The adapted image is shared under CC BY-SA 3.0.'), `${route}: share-alike adaptation notice remains visible`);
        assert.ok(html.includes('not independent legal clearance'), `${route}: photo-rights limitation is visible`);
        for (const phrase of childPlanningChecks.get(route)) {
          assert.ok(text.toLowerCase().includes(phrase.toLowerCase()), `${route}: editorial route condition (${phrase})`);
        }
      }
    }
  }
}

const hubHtml = fs.readFileSync(pagePath('', routes[0]), 'utf8');
const hubDocument = parse(hubHtml);
const hubImageSources = nodes(hubDocument, (node) => node.tagName === 'img').map((node) => attributes(node).src);
assert.ok(hubImageSources.length >= 4, 'hub retains the hero and all four child chapter photos');
assert.ok(hubHtml.includes('no ethical guide can guarantee'), 'wildlife sighting disclaimer is visible');
assert.ok(hubHtml.includes('town arrival is not lodge arrival'), 'bus stop and lodge arrival are distinguished');
assert.ok(hubHtml.includes('protected return night'), 'the itinerary protects a Sandakan return night');

if (process.argv.includes('--dist')) {
  const distRoot = path.join(root, 'dist');
  const distSitemapRaw = fs.readFileSync(path.join(distRoot, 'sitemap.xml'), 'utf8');
  const distSitemap = new Map([...distSitemapRaw.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
    .map(([, url, date]) => [url || '/', date]));
  assert.equal(distSitemap.size, 4560, 'built sitemap remains at 4,560 URLs');
  for (const route of routes) {
    for (const { prefix } of locales) {
      const html = fs.readFileSync(pagePath(prefix, route, distRoot), 'utf8');
      const { guide } = travelGuide(html, prefix, route);
      assert.equal(guide.dateModified, reviewedDate, `dist ${prefix}${route}: structured date`);
      assert.equal(distSitemap.get(`${prefix}${route}`), reviewedDate, `dist ${prefix}${route}: sitemap date`);
      assert.ok(html.includes(`rel="canonical" href="https://tripdistill.com${prefix}${route}"`), `dist ${prefix}${route}: canonical link`);
    }
  }
  for (const { prefix } of locales.filter(({ prefix }) => prefix)) {
    const language = prefix.slice(1);
    const localSearch = JSON.parse(fs.readFileSync(path.join(distRoot, language, 'data/search-index.json'), 'utf8'));
    const selectedLocalized = new Set(routes.map((route) => `${prefix}${route}`));
    for (const route of selectedLocalized) assert.ok(localSearch.some((record) => record.url === route), `dist ${route}: localized search entry`);
  }
}

console.log(`Sandakan–Kinabatangan refresh regression passed: ${routes.length} routes × ${locales.length} locales, scoped sitemap/search edits, current source dates, photo attribution/hash checks${process.argv.includes('--dist') ? ', and built output' : ''}.`);
