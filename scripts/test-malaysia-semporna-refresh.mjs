import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { parse } from 'parse5';
import { imageCredits, malaysiaDepthClusters, malaysiaDepthGuides, retiredMalaysiaImageCredits } from '../data/malaysia-depth-guides.mjs';
import { integrationRouteGroups, integrationRoutes, integrationSearchRoutes, integrationSprintBaseline, localizedCurrentSitemapDateChangeRoutes, postIntegrationSourceRefreshRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baselineCommit = '022870fcc645493460430fe6399027ea4a9b391a';
const integrationScopeBaseline = integrationSprintBaseline;
const reviewedDate = '2026-10-12';
const routes = [
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
const kuchingRoutes = [
  '/malaysia/kuching-bako/',
  '/malaysia/kuching-bako/kuching-waterfront-old-courthouse/',
  '/malaysia/kuching-bako/borneo-cultures-museum/',
  '/malaysia/kuching-bako/semenggoh-wildlife-centre/',
  '/malaysia/kuching-bako/bako-national-park/'
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
  '/malaysia/gunung-mulu/canopy-night-walks/',
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
  { prefix: '', searchPrefix: '', dateNeedle: '12 October 2026' },
  { prefix: '/zh', searchPrefix: '/zh', dateNeedle: '2026 年 10 月 12 日' },
  { prefix: '/ja', searchPrefix: '/ja', dateNeedle: '2026年10月12日' },
  { prefix: '/ko', searchPrefix: '/ko', dateNeedle: '2026년 10월 12일' },
  { prefix: '/th', searchPrefix: '/th', dateNeedle: '12 ตุลาคม 2026' }
];
const selectedRoutes = new Set(routes);
const expectedIntegrationRoutes = new Set([
  ...routes,
  ...sandakanRoutes,
  ...kuchingRoutes,
  ...newlyIntegratedRoutes,
  ...newlyReviewedKinabaluRoutes
]);
assert.deepEqual(expectedIntegrationRoutes, new Set(integrationRouteGroups.malaysia), 'the exact 41 Malaysia route cohort is represented in the shared sprint scope');
const cluster = malaysiaDepthClusters.find((item) => item.hubSlug === 'semporna-tun-sakaran');
const guides = malaysiaDepthGuides.filter((guide) => guide.hubSlug === 'semporna-tun-sakaran');
const guideByUrl = new Map(guides.map((guide) => [guide.url, guide]));
assert.ok(cluster, 'Semporna & Tun Sakaran source cluster exists');
assert.equal(cluster.reviewedOnIso, reviewedDate, 'hub review date is current');
assert.equal(cluster.explicitRelatedPhotoCredits, true, 'exact image source and license credits are enabled');
assert.deepEqual(cluster.guides.map((guide) => `/malaysia/${cluster.hubSlug}/${guide.slug}/`), routes.slice(1), 'the existing cluster has exactly four children');
assert.deepEqual(guides.map((guide) => guide.url), routes.slice(1), 'no Semporna child route was added');

function pagePath(prefix, route, outputRoot = root) {
  return path.join(outputRoot, `${prefix}${route}`, 'index.html');
}

function findNode(node, tagName) {
  if (node.tagName === tagName) return node;
  for (const child of node.childNodes || []) {
    const found = findNode(child, tagName);
    if (found) return found;
  }
  return undefined;
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

function sha1(bytes) { return crypto.createHash('sha1').update(bytes).digest('hex'); }
function sha256(bytes) { return crypto.createHash('sha256').update(bytes).digest('hex'); }
function gitBytes(spec) { return execFileSync('git', ['show', spec], { maxBuffer: 64 * 1024 * 1024 }); }

const sourceSitemap = readSitemap(root);
const baselineSitemapRaw = gitBytes(`${integrationScopeBaseline}:sitemap.xml`).toString('utf8');
const baselineSitemap = new Map([...baselineSitemapRaw.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
  .map(([, url, date]) => [url || '/', date]));
assert.equal(sourceSitemap.size, 4560, 'source sitemap stays at 4,560 URLs');
assert.deepEqual(new Set(sourceSitemap.keys()), new Set(baselineSitemap.keys()), 'refresh adds or removes no sitemap URL');
const expectedLocalizedRoutes = localizedCurrentSitemapDateChangeRoutes(locales.map(({ prefix }) => prefix));
const changedSitemapRoutes = [...sourceSitemap].filter(([url, date]) => baselineSitemap.get(url) !== date).map(([url]) => url);
assert.equal(integrationRoutes.length, 262, 'the exact UK, Australia, France, Italy, Switzerland, Canada and Malaysia source route scope contains 262 existing English pages');
assert.deepEqual(new Set(changedSitemapRoutes), expectedLocalizedRoutes, 'only the historical integration routes and four Hawaii and four New Orleans source-refresh routes × five locales receive a new lastmod');
for (const route of expectedLocalizedRoutes) assert.equal(sourceSitemap.get(route), reviewedDate, `${route}: sitemap lastmod`);

const baseSearch = JSON.parse(gitBytes(`${integrationScopeBaseline}:data/search-index.json`).toString('utf8'));
const englishSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const baseSearchByUrl = new Map(baseSearch.map((record) => [record.url, record]));
const englishSearchByUrl = new Map(englishSearch.map((record) => [record.url, record]));
assert.deepEqual(new Set(englishSearchByUrl.keys()), new Set(baseSearchByUrl.keys()), 'English search URL set is unchanged');
const changedEnglishSearch = [...englishSearchByUrl].filter(([url, record]) => !isDeepStrictEqual(record, baseSearchByUrl.get(url))).map(([url]) => url);
assert.deepEqual(new Set(changedEnglishSearch), new Set([...integrationSearchRoutes, ...postIntegrationSourceRefreshRoutes]), 'only the exact integrated UK, France, Italy, Switzerland, Canada, Malaysia plus Hawaii and New Orleans source-refresh search records changed');

const localSearchByPrefix = new Map();
for (const { prefix } of locales.filter(({ prefix }) => prefix)) {
  const dir = prefix.slice(1);
  const current = JSON.parse(fs.readFileSync(path.join(root, dir, 'data/search-index.json'), 'utf8'));
  const currentByUrl = new Map(current.map((record) => [record.url, record]));
  assert.deepEqual(new Set(currentByUrl.keys()), new Set(baseSearch.map((record) => `${prefix}${record.url}`)), `${prefix}: localized search keeps the unchanged English URL set with its locale prefix`);
  assert.equal(current.length, baseSearch.length, `${prefix}: all existing search records are localized`);
  localSearchByPrefix.set(prefix, currentByUrl);
}

const visibleDateNeedles = new Map(locales.map(({ prefix, dateNeedle }) => [prefix, dateNeedle]));
const activePhotographs = [imageCredits.sempornaLagoon, imageCredits.sempornaTaxi];
for (const photo of activePhotographs) {
  assert.ok(photo.sourceTitle && photo.creator && photo.licenseUrl && photo.localSha1, `${photo.src}: exact source title, creator, license and hash are recorded`);
  assert.equal(sha1(fs.readFileSync(path.join(root, photo.src.slice(1)))), photo.localSha1, `${photo.src}: local photograph hash matches metadata`);
}

const retired = retiredMalaysiaImageCredits.sempornaPark;
assert.equal(retired.inventoryStatus, 'unused', 'the visually mismatched sunset photograph is disabled');
assert.ok(retired.retirementNote.includes('not Mabul, Kapalai or Sipadan'), 'retirement records the subject mismatch');
const retiredBytes = fs.readFileSync(path.join(root, retired.src.slice(1)));
assert.equal(sha1(retiredBytes), retired.localSha1, 'retired original WebP remains byte-for-byte unchanged');
assert.equal(sha1(gitBytes(`${baselineCommit}:${retired.src.slice(1)}`)), retired.localSha1, 'retired WebP matches the base revision too');

const diagrams = [imageCredits.sempornaMabulPlan, imageCredits.sempornaSipadanPlan];
const languageLabels = ['EN', '繁體中文', '日本語', '한국어', 'ไทย'];
for (const diagram of diagrams) {
  const bytes = fs.readFileSync(path.join(root, diagram.src.slice(1)));
  const svg = bytes.toString('utf8');
  assert.equal(sha1(bytes), diagram.localSha1, `${diagram.src}: SVG SHA-1 matches metadata`);
  assert.equal(sha256(bytes), diagram.localSha256, `${diagram.src}: SVG SHA-256 matches metadata`);
  assert.equal(diagram.license, null, `${diagram.src}: no reuse license is declared`);
  assert.equal(diagram.commercialReuseEligibility, 'unknown', `${diagram.src}: commercial reuse eligibility remains unknown`);
  for (const label of languageLabels) assert.ok(svg.includes(`>${label}</text>`), `${diagram.src}: visible ${label} legend`);
  assert.ok(/not to scale/i.test(svg), `${diagram.src}: the schematic is marked not to scale`);
}
const xmlParseCheck = `
import sys
from xml.etree import ElementTree

svg_namespace = '{http://www.w3.org/2000/svg}'
required_labels = ['EN', '繁體中文', '日本語', '한국어', 'ไทย']
for filename in sys.argv[1:]:
    root = ElementTree.parse(filename).getroot()
    if root.tag != svg_namespace + 'svg':
        raise SystemExit(f'{filename}: root is not an SVG XML element')
    visible_text = ' '.join(''.join(node.itertext()) for node in root.iter(svg_namespace + 'text'))
    for label in required_labels:
        if label not in visible_text:
            raise SystemExit(f'{filename}: parsed visible XML text lacks {label!r}')
    if filename.endswith('tripdistill-semporna-sipadan-permit-flow.svg'):
        for phrase in ['BRIEF & DIVE', 'RETURN & REST']:
            if phrase not in visible_text:
                raise SystemExit(f'{filename}: parsed label changed or disappeared: {phrase!r}')
print(f'Strict XML parse passed for {len(sys.argv) - 1} Semporna SVG files; each parsed as an SVG root with all five visible language labels.')
`;
const xmlSvgPaths = diagrams.map((diagram) => path.join(root, diagram.src.slice(1)));
if (process.argv.includes('--dist')) {
  xmlSvgPaths.push(...diagrams.map((diagram) => path.join(root, 'dist', diagram.src.slice(1))));
}
const xmlParseOutput = execFileSync('python3', [
  '-c', xmlParseCheck,
  ...xmlSvgPaths
], { cwd: root, encoding: 'utf8' });
assert.match(xmlParseOutput, new RegExp(`Strict XML parse passed for ${xmlSvgPaths.length} Semporna SVG files`));
process.stdout.write(xmlParseOutput);

for (const route of routes) {
  const englishRecord = englishSearchByUrl.get(route);
  assert.ok(englishRecord, `${route}: English search record exists`);
  const sourceGuide = guideByUrl.get(route);
  if (sourceGuide) assert.equal(sourceGuide.reviewedOnIso, reviewedDate, `${route}: source guide review date`);

  for (const { prefix } of locales) {
    const file = pagePath(prefix, route);
    assert.ok(fs.existsSync(file), `${prefix}${route}: localized page exists`);
    const html = fs.readFileSync(file, 'utf8');
    const document = parse(html);
    const text = collectText(findNode(document, 'main')).replace(/\s+/g, ' ');
    const { graph, guide } = travelGuide(html, prefix, route);
    assert.equal(guide.dateModified, reviewedDate, `${prefix}${route}: structured date`);
    assert.ok(graph.some((node) => node['@type'] === 'FAQPage'), `${prefix}${route}: FAQ structured data exists`);
    assert.ok(html.includes(`rel="canonical" href="https://tripdistill.com${prefix}${route}"`), `${prefix}${route}: canonical link`);
    assert.ok(text.includes(visibleDateNeedles.get(prefix)), `${prefix}${route}: visible localized review date`);
    assert.ok(html.includes('rel="stylesheet" href="/css/malaysia-sabah.css?v=20261012-1"'), `${prefix}${route}: Semporna CSS revision`);
    for (const { prefix: alternate } of locales) {
      assert.ok(html.includes(`href="https://tripdistill.com${alternate}${route}"`), `${prefix}${route}: alternate ${alternate}${route}`);
    }
    assert.equal(sourceSitemap.get(`${prefix}${route}`), reviewedDate, `${prefix}${route}: sitemap date`);
    assert.ok(!html.includes(retired.src), `${prefix}${route}: mismatched sunset image stays disabled`);

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
      const localizedRecord = localSearchByPrefix.get(prefix).get(`${prefix}${route}`);
      assert.ok(localizedRecord, `${prefix}${route}: localized search record exists`);
      assert.notEqual(localizedRecord.title, englishRecord.title, `${prefix}${route}: search title is translated`);
      assert.notEqual(localizedRecord.summary, englishRecord.summary, `${prefix}${route}: search summary is translated`);
      assert.notEqual(localizedRecord.parent, englishRecord.parent, `${prefix}${route}: search parent label is translated`);
    }

    if (!prefix && route === routes[0]) {
      for (const phrase of [
        '3 nights · choose two sea chapters', '4 nights · two trips + one buffer', '5 nights · island stay or three chapters',
        'Tawau Airport · TWU', 'Semporna town', 'Named jetty', 'Same return chain',
        'Semporna town preparation loop', 'Bohey Dulang permitted trail', 'Mabul host-led village and resort zones',
        'Kapalai reservation-only boardwalk', 'Sipadan in-water site only', 'school/public holidays',
        'sea, weather, trail, permit or operator link changes', 'No current prices, daily boat times or openings are promised here.'
      ]) assert.ok(text.toLowerCase().includes(phrase.toLowerCase()), `${route}: hub route plan contains “${phrase}”`);
      for (const [source] of cluster.sources) assert.ok(html.includes(source), `${route}: official source link ${source}`);
      assert.ok(text.includes('not independent legal clearance'), `${route}: photo-credit limit is visible`);
      assert.ok(diagrams.every((diagram) => html.includes(diagram.src)), `${route}: original planning diagrams are credited`);
    }

    if (!prefix && sourceGuide) {
      assert.ok(html.includes(sourceGuide.image.src), `${route}: the reviewed chapter image is used`);
      assert.ok(html.includes(sourceGuide.image.source), `${route}: the exact image source page is linked`);
      if (sourceGuide.image.licenseUrl) assert.ok(html.includes(sourceGuide.image.licenseUrl), `${route}: the declared photo license is linked`);
    }
  }
}

const englishMainText = (route, outputRoot = root) => collectText(findNode(parse(fs.readFileSync(pagePath('', route, outputRoot), 'utf8')), 'main')).replace(/\s+/g, ' ');
const explicitlyUnlinkedUnavailableSources = new Set([
  // The source record says direct retrieval was blocked; the reviewed page does not present it as checked evidence.
  'https://sabahparks.org.my/index.php/services/diving-sipadan'
]);
for (const [route, phrases] of [
  [routes[1], ['Tawau Airport (TWU)', 'named jetty', 'same contracted provider owns the return handoff', 'no current duration or departure is guaranteed']],
  [routes[2], ['700 m uphill', 'covered shoes', 'same authorized path', 'If trail, sea or park staff stand down']],
  [routes[3], ['Mabul is an inhabited island', 'Do not assume either is a public promenade', 'guest-only area', 'last reviewed in March 2022']],
  [routes[4], ['last reviewed on 5 May 2025', 'not a verified 2026/27 rule set', 'named-date allocation', 'no generic hour count']]
]) {
  const text = englishMainText(route).toLowerCase();
  for (const phrase of phrases) assert.ok(text.includes(phrase.toLowerCase()), `${route}: verified chapter detail (${phrase})`);
  for (const [source] of guideByUrl.get(route).sources || []) {
    if (!explicitlyUnlinkedUnavailableSources.has(source)) assert.ok(fs.readFileSync(pagePath('', route), 'utf8').includes(source), `${route}: official source ${source}`);
  }
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
      assert.ok(!html.includes(retired.src), `dist ${prefix}${route}: mismatched sunset image stays disabled`);
    }
  }
  for (const diagram of diagrams) {
    const bytes = fs.readFileSync(path.join(distRoot, diagram.src.slice(1)));
    assert.equal(sha1(bytes), diagram.localSha1, `dist ${diagram.src}: original SVG bytes are preserved`);
  }
  for (const { prefix } of locales.filter(({ prefix }) => prefix)) {
    const records = JSON.parse(fs.readFileSync(path.join(distRoot, prefix.slice(1), 'data/search-index.json'), 'utf8'));
    for (const route of routes) assert.ok(records.some((record) => record.url === `${prefix}${route}`), `dist ${prefix}${route}: localized search record`);
  }
}

console.log(`Semporna & Tun Sakaran refresh regression passed: ${routes.length} existing routes × ${locales.length} locales; nights and named handoffs, walk/access boundaries, dated seasonal/booking limits, translated schema/search, photo retirement/hashes, SVG hashes/legends, exact sitemap/search scope and unchanged URL set${process.argv.includes('--dist') ? ', and built output' : ''}.`);
