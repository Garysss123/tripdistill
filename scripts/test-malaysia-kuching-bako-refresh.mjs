import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { parse } from 'parse5';
import { malaysiaDepthClusters, malaysiaDepthGuides } from '../data/malaysia-depth-guides.mjs';
import { integrationRouteGroups, integrationRoutes, integrationSearchRoutes, integrationSprintBaseline, localizedCurrentSitemapDateChangeRoutes, postHawaiiNewOrleansRoutes, postIntegrationAustraliaRoutes, postIntegrationCanberraRoutes, postIntegrationHawaiiRoutes, postNewOrleansAtlantaRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baselineCommit = integrationSprintBaseline;
const reviewedDate = '2026-10-12';
const routes = [
  '/malaysia/kuching-bako/',
  '/malaysia/kuching-bako/kuching-waterfront-old-courthouse/',
  '/malaysia/kuching-bako/borneo-cultures-museum/',
  '/malaysia/kuching-bako/semenggoh-wildlife-centre/',
  '/malaysia/kuching-bako/bako-national-park/'
];
const currentMalaysiaRoutes = [
  '/malaysia/semporna-tun-sakaran/',
  '/malaysia/semporna-tun-sakaran/semporna-jetty-operator/',
  '/malaysia/semporna-tun-sakaran/bohey-dulang-bodgaya/',
  '/malaysia/semporna-tun-sakaran/mabul-kapalai/',
  '/malaysia/semporna-tun-sakaran/sipadan-permit-day/'
];
const sandakanRoutes = [
  '/malaysia/sandakan-kinabatangan/',
  '/malaysia/sandakan-kinabatangan/sandakan-heritage-waterfront/',
  '/malaysia/sandakan-kinabatangan/sepilok-conservation-centres/',
  '/malaysia/sandakan-kinabatangan/sukau-kinabatangan/',
  '/malaysia/sandakan-kinabatangan/gomantong-batu-puteh/'
];
const newlyIntegratedRoutes = [
  '/malaysia/perhentian-redang/',
  '/malaysia/perhentian-redang/kuala-besut-transfer/',
  '/malaysia/perhentian-redang/perhentian-kecil/',
  '/malaysia/perhentian-redang/perhentian-besar/',
  '/malaysia/perhentian-redang/redang-merang-transfer/',
  '/malaysia/kota-kinabalu-tunku-abdul-rahman/',
  '/malaysia/kota-kinabalu-tunku-abdul-rahman/gaya-street-waterfront/',
  '/malaysia/kota-kinabalu-tunku-abdul-rahman/tanjung-aru-museum/',
  '/malaysia/kota-kinabalu-tunku-abdul-rahman/manukan-mamutik/',
  '/malaysia/kota-kinabalu-tunku-abdul-rahman/sapi-gaya-islands/',
  '/malaysia/gunung-mulu/',
  '/malaysia/gunung-mulu/deer-lang-caves/',
  '/malaysia/gunung-mulu/clearwater-wind-caves/',
  '/malaysia/gunung-mulu/pinnacles-expedition/',
  '/malaysia/gunung-mulu/canopy-night-walks/'
];
const newlyReviewedKualaLumpurRoutes = [
  '/malaysia/kuala-lumpur-putrajaya/',
  '/malaysia/kuala-lumpur-putrajaya/merdeka-chinatown/',
  '/malaysia/kuala-lumpur-putrajaya/klcc-bukit-bintang/',
  '/malaysia/kuala-lumpur-putrajaya/batu-caves/',
  '/malaysia/kuala-lumpur-putrajaya/putrajaya-civic-core/'
];
const newlyReviewedKinabaluRoutes = [
  '/malaysia/',
  '/malaysia/kinabalu-park-kundasang/',
  '/malaysia/kinabalu-park-kundasang/park-headquarters-botanical-garden/',
  '/malaysia/kinabalu-park-kundasang/mount-kinabalu-summit/',
  '/malaysia/kinabalu-park-kundasang/kundasang-ranau/',
  '/malaysia/kinabalu-park-kundasang/poring-hot-springs/'
];
const locales = [
  { prefix: '', dateNeedle: '12 October 2026' },
  { prefix: '/zh', dateNeedle: '2026 年 10 月 12 日' },
  { prefix: '/ja', dateNeedle: '2026年10月12日' },
  { prefix: '/ko', dateNeedle: '2026년 10월 12일' },
  { prefix: '/th', dateNeedle: '12 ตุลาคม 2026' }
];
const selectedRoutes = new Set(routes);
const integrationMalaysiaRoutes = [
  ...routes,
  ...currentMalaysiaRoutes,
  ...sandakanRoutes,
  ...newlyIntegratedRoutes,
  ...newlyReviewedKualaLumpurRoutes,
  ...newlyReviewedKinabaluRoutes
];
assert.deepEqual(new Set(integrationMalaysiaRoutes), new Set(integrationRouteGroups.malaysia), 'the exact 41 Malaysia route cohort is represented in the shared sprint scope');
const guideByUrl = new Map(malaysiaDepthGuides.map((guide) => [guide.url, guide]));
const cluster = malaysiaDepthClusters.find((item) => item.hubSlug === 'kuching-bako');
assert.ok(cluster, 'Kuching & Bako source cluster exists');
assert.equal(cluster.reviewedOnIso, reviewedDate, 'hub review date is current');
assert.equal(cluster.explicitRelatedPhotoCredits, true, 'photo-source and license credits are enabled');
assert.deepEqual(cluster.guides.map((guide) => `/malaysia/${cluster.hubSlug}/${guide.slug}/`), routes.slice(1), 'only the four selected children belong to this hub');
assert.deepEqual(malaysiaDepthGuides.filter((guide) => guide.hubSlug === cluster.hubSlug).map((guide) => guide.url), routes.slice(1), 'no additional Kuching child was added');

function pagePath(prefix, route, outputRoot = root) {
  return path.join(outputRoot, `${prefix}${route}`, 'index.html');
}

function collectText(node) {
  if (node.nodeName === '#text') return node.value || '';
  if (['script', 'style'].includes(node.tagName)) return '';
  return (node.childNodes || []).map(collectText).join(' ');
}

function travelGuide(html, prefix, route) {
  const raw = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(raw, `${prefix}${route}: JSON-LD exists`);
  const parsed = JSON.parse(raw);
  const graph = parsed['@graph'] || [parsed];
  const guide = graph.find((item) => item['@type'] === 'TravelGuide');
  assert.ok(guide, `${prefix}${route}: TravelGuide schema exists`);
  assert.equal(guide.url, `https://tripdistill.com${prefix}${route}`, `${prefix}${route}: schema URL matches route`);
  return { graph, guide };
}

function readSitemap(outputRoot) {
  const raw = fs.readFileSync(path.join(outputRoot, 'sitemap.xml'), 'utf8');
  return new Map([...raw.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
    .map(([, url, date]) => [url || '/', date]));
}

const sourceSitemap = readSitemap(root);
const baselineSitemapRaw = execFileSync('git', ['show', `${baselineCommit}:sitemap.xml`], { encoding: 'utf8' });
const baselineSitemap = new Map([...baselineSitemapRaw.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
  .map(([, url, date]) => [url || '/', date]));
assert.equal(sourceSitemap.size, 4560, 'source sitemap remains at 4,560 URLs');
assert.deepEqual(new Set(sourceSitemap.keys()), new Set(baselineSitemap.keys()), 'refresh adds or removes no sitemap URLs');
const expectedLocalizedRoutes = localizedCurrentSitemapDateChangeRoutes(locales.map(({ prefix }) => prefix));
const changedSitemapRoutes = [...sourceSitemap].filter(([url, date]) => baselineSitemap.get(url) !== date).map(([url]) => url);
assert.equal(integrationRoutes.length, 302, 'the exact UK, Australia, France, Italy, Switzerland, Canada, Malaysia and twelve Vietnam route scope contains 302 existing English pages');
assert.deepEqual(new Set(changedSitemapRoutes), expectedLocalizedRoutes, 'only the exact historical scope and five disjoint follow-on groups × five locales receive new lastmod');
for (const route of expectedLocalizedRoutes) assert.equal(sourceSitemap.get(route), reviewedDate, `${route}: sitemap lastmod`);

const baseSearch = JSON.parse(execFileSync('git', ['show', `${baselineCommit}:data/search-index.json`], { encoding: 'utf8' }));
const englishSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const baseSearchByUrl = new Map(baseSearch.map((record) => [record.url, record]));
const englishSearchByUrl = new Map(englishSearch.map((record) => [record.url, record]));
assert.deepEqual(new Set(englishSearchByUrl.keys()), new Set(baseSearchByUrl.keys()), 'English search URL set is unchanged');
const changedSearchRoutes = [...englishSearchByUrl].filter(([url, record]) => !isDeepStrictEqual(record, baseSearchByUrl.get(url))).map(([url]) => url);
assert.deepEqual(new Set(changedSearchRoutes), new Set([...integrationSearchRoutes, ...postIntegrationHawaiiRoutes, ...postIntegrationAustraliaRoutes, ...postHawaiiNewOrleansRoutes, ...postIntegrationCanberraRoutes, ...postNewOrleansAtlantaRoutes]), 'only the exact integrated country, Hawaii, Australia, Canberra, New Orleans and Atlanta English search records changed');
assert.equal(englishSearch.filter((record) => selectedRoutes.has(record.url)).length, routes.length, 'all five existing English search records remain present');

const images = new Map();
for (const route of routes.slice(1)) {
  const guide = guideByUrl.get(route);
  assert.ok(guide, `${route}: source record exists`);
  assert.equal(guide.reviewedOnIso, reviewedDate, `${route}: source review date`);
  assert.notEqual(guide.relatedImages, false, `${route}: reviewed related photos remain enabled`);
  assert.ok(guide.image.source && guide.image.licenseUrl && guide.image.localSha1, `${route}: exact photo source, license URL and local hash are recorded`);
  const photoBytes = fs.readFileSync(path.join(root, guide.image.src.slice(1)));
  assert.equal(crypto.createHash('sha1').update(photoBytes).digest('hex'), guide.image.localSha1, `${route}: local photo bytes match their recorded SHA-1`);
  images.set(guide.image.src, guide.image);
}
assert.equal(images.size, 4, 'the four selected child routes retain four individually reviewed photographs');

const localizedSearch = new Map(locales.filter(({ prefix }) => prefix).map(({ prefix }) => {
  const file = path.join(root, prefix.slice(1), 'data/search-index.json');
  assert.ok(fs.existsSync(file), `${prefix}: localized search index exists`);
  return [prefix, JSON.parse(fs.readFileSync(file, 'utf8'))];
}));

for (const route of routes) {
  const englishRecord = englishSearchByUrl.get(route);
  assert.ok(englishRecord, `${route}: English search record exists`);
  const sourceGuide = guideByUrl.get(route);
  if (sourceGuide) assert.equal(sourceGuide.reviewedOnIso, reviewedDate, `${route}: source review date`);

  for (const { prefix, dateNeedle } of locales) {
    const file = pagePath(prefix, route);
    assert.ok(fs.existsSync(file), `${prefix}${route}: localized page exists`);
    const html = fs.readFileSync(file, 'utf8');
    const document = parse(html);
    const text = collectText(document).replace(/\s+/g, ' ');
    const { graph, guide } = travelGuide(html, prefix, route);
    assert.equal(guide.dateModified, reviewedDate, `${prefix}${route}: structured date`);
    assert.ok(graph.some((node) => node['@type'] === 'FAQPage'), `${prefix}${route}: FAQ structured data exists`);
    assert.ok(html.includes(`rel="canonical" href="https://tripdistill.com${prefix}${route}"`), `${prefix}${route}: canonical link`);
    assert.ok(text.includes(dateNeedle), `${prefix}${route}: visible localized review date`);
    for (const { prefix: alternate } of locales) {
      assert.ok(html.includes(`href="https://tripdistill.com${alternate}${route}"`), `${prefix}${route}: alternate ${alternate}${route}`);
    }
    assert.equal(sourceSitemap.get(`${prefix}${route}`), reviewedDate, `${prefix}${route}: sitemap date`);

    if (prefix) {
      const englishPage = fs.readFileSync(pagePath('', route), 'utf8');
      const { graph: englishGraph, guide: englishGuide } = travelGuide(englishPage, '', route);
      assert.notEqual(guide.name, englishGuide.name, `${prefix}${route}: structured page name is translated`);
      const localFaq = graph.find((node) => node['@type'] === 'FAQPage');
      const englishFaq = englishGraph.find((node) => node['@type'] === 'FAQPage');
      assert.equal(localFaq.mainEntity.length, englishFaq.mainEntity.length, `${prefix}${route}: translated FAQ count matches English`);
      localFaq.mainEntity.forEach((item, index) => {
        assert.notEqual(item.name, englishFaq.mainEntity[index].name, `${prefix}${route}: FAQ question ${index + 1} is translated`);
        assert.notEqual(item.acceptedAnswer.text, englishFaq.mainEntity[index].acceptedAnswer.text, `${prefix}${route}: FAQ answer ${index + 1} is translated`);
      });
      const localizedRecord = localizedSearch.get(prefix).find((record) => record.url === `${prefix}${route}`);
      assert.ok(localizedRecord, `${prefix}${route}: localized search record exists`);
      assert.notEqual(localizedRecord.title, englishRecord.title, `${prefix}${route}: search title is translated`);
      assert.notEqual(localizedRecord.summary, englishRecord.summary, `${prefix}${route}: search summary is translated`);
      assert.notEqual(localizedRecord.parent, englishRecord.parent, `${prefix}${route}: search parent label is translated`);
    }

    if (route === routes[0] && !prefix) {
      for (const phrase of [
        '3 nights · compact', '4 nights · all four chapters', '5 nights · weather margin',
        'Kuching International Airport (KCH)', 'Kuching Waterfront', 'Old Courthouse',
        'Main Bazaar', 'Carpenter Street', 'Padang Merdeka', 'Sarawak ID', 'METMalaysia',
        'March–October', 'November–February', 'BAS.MY'
      ]) assert.ok(text.toLowerCase().includes(phrase.toLowerCase()), `${route}: hub retains the route plan (${phrase})`);
      for (const source of cluster.sources.map(([url]) => url)) assert.ok(html.includes(source), `${route}: official source link ${source}`);
      assert.ok(text.includes('not independent legal clearance'), `${route}: photo-credit boundary is visible`);
    }

    if (!prefix) {
      for (const image of images.values()) {
        assert.ok(html.includes(image.source), `${route}: all displayed chapter photo source pages are linked`);
        assert.ok(html.includes(image.licenseUrl), `${route}: all displayed chapter photo licenses are linked`);
      }
    }

    if (sourceGuide) {
      assert.ok(html.includes(sourceGuide.image.src), `${prefix}${route}: reviewed photo remains in use`);
      assert.ok(html.includes(sourceGuide.image.source), `${prefix}${route}: exact Commons page is linked`);
      assert.ok(html.includes(sourceGuide.image.licenseUrl), `${prefix}${route}: declared license page is linked`);
      if (!prefix) {
        assert.ok(text.includes('not independent legal clearance'), `${route}: photo-credit boundary is visible`);
        assert.ok(text.includes('Resized, center-cropped and converted to WebP; no other material edits.'), `${route}: image adaptation is disclosed`);
      }
    }
  }
}

const englishChildren = routes.slice(1).map((route) => ({ route, text: collectText(parse(fs.readFileSync(pagePath('', route), 'utf8'))).replace(/\s+/g, ' ') }));
const childChecks = new Map([
  [routes[1], ['Old Courthouse → same-bank Waterfront', 'Main Bazaar', 'Carpenter Street', 'full street sequence adds inland blocks']],
  [routes[2], ['Love our Rivers', 'In Harmony with Nature', 'Time Changes', 'Objects of Desire', 'last admission at 16:00', '7 October 2026']],
  [routes[3], ['24 km from Kuching', 'named return taxi/driver', 'no guarantee', 'SarawakID account', 'both road legs']],
  [routes[4], ['Terminal Bako', 'Stesen Bas Saujana', 'no bus fare, boat fare or departure time', 'March–October', 'November–February', 'one open trail']]
]);
for (const { route, text } of englishChildren) {
  for (const phrase of childChecks.get(route)) assert.ok(text.toLowerCase().includes(phrase.toLowerCase()), `${route}: route-specific verified detail (${phrase})`);
  const guide = guideByUrl.get(route);
  for (const [source] of guide.sources || []) assert.ok(fs.readFileSync(pagePath('', route), 'utf8').includes(source), `${route}: specific official source ${source}`);
}

if (process.argv.includes('--dist')) {
  const distRoot = path.join(root, 'dist');
  const distSitemap = readSitemap(distRoot);
  assert.equal(distSitemap.size, 4560, 'built sitemap remains at 4,560 URLs');
  assert.deepEqual(new Set(distSitemap.keys()), new Set(baselineSitemap.keys()), 'built refresh adds or removes no URL');
  for (const route of routes) {
    for (const { prefix } of locales) {
      const html = fs.readFileSync(pagePath(prefix, route, distRoot), 'utf8');
      const { guide } = travelGuide(html, prefix, route);
      assert.equal(guide.dateModified, reviewedDate, `dist ${prefix}${route}: structured date`);
      assert.ok(html.includes(`rel="canonical" href="https://tripdistill.com${prefix}${route}"`), `dist ${prefix}${route}: canonical link`);
      assert.equal(distSitemap.get(`${prefix}${route}`), reviewedDate, `dist ${prefix}${route}: sitemap date`);
    }
  }
  for (const { prefix } of locales.filter(({ prefix }) => prefix)) {
    const records = JSON.parse(fs.readFileSync(path.join(distRoot, prefix.slice(1), 'data/search-index.json'), 'utf8'));
    for (const route of routes) assert.ok(records.some((record) => record.url === `${prefix}${route}`), `dist ${prefix}${route}: localized search record`);
  }
}

console.log(`Kuching & Bako refresh regression passed: ${routes.length} routes × ${locales.length} locales; dates, schemas, translations, official sources, photo hashes, search scope, unchanged URL set${process.argv.includes('--dist') ? ', and built output' : ''}.`);
