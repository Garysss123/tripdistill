#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
import { SaxesParser } from 'saxes';
import { collectTranslationWork } from './i18n-lib.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const base = '18b6789bdc780c5425dff77d7d027d4078b4f32a';
const integrationBase = 'e13d89e4919e10ea3c54440a2b69873b7160fe1d';
const routes = [
  '/australia/great-ocean-road-gariwerd/',
  '/australia/great-ocean-road-gariwerd/torquay-bells-beach/',
  '/australia/great-ocean-road-gariwerd/apollo-bay-otways/',
  '/australia/great-ocean-road-gariwerd/port-campbell-twelve-apostles/'
];
const laterCanadaCa13Routes = [
  '/canada/saguenay-tadoussac/',
  '/canada/saguenay-tadoussac/tadoussac-marine/',
  '/canada/saguenay-tadoussac/fjord-hiking/',
  '/canada/saguenay-tadoussac/saguenay-city-valley/'
];
const laterCanadaCa14DateRoutes = [
  '/canada/halifax-nova-scotia/',
  '/canada/halifax-nova-scotia/halifax-waterfront-citadel/',
  '/canada/halifax-nova-scotia/peggys-cove-lunenburg/',
  '/canada/halifax-nova-scotia/cape-breton-cabot/'
];
const laterCanadaCa14SearchRoutes = laterCanadaCa14DateRoutes.slice(1);
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
const laterSwitzerlandCh14Routes = [
  '/switzerland/',
  '/switzerland/lugano-southern-ticino/',
  '/switzerland/locarno-ascona-valleys/',
  '/switzerland/schaffhausen-rhine-falls/'
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
const currentBranchVietnamRoutes = [
  '/vietnam/ho-chi-minh-city/',
  '/vietnam/ho-chi-minh-city/district-1-colonial-core/',
  '/vietnam/ho-chi-minh-city/cho-lon-binh-tay/',
  '/vietnam/ho-chi-minh-city/cu-chi-tunnels/'
];
const followingMekongRoutes = [
  '/vietnam/mekong-delta/',
  '/vietnam/mekong-delta/can-tho-cai-rang/',
  '/vietnam/mekong-delta/chau-doc-sam-tra-su/',
  '/vietnam/mekong-delta/ben-tre-coconut-islets/'
];
const followingDaLatRoutes = [
  '/vietnam/da-lat-central-highlands/',
  '/vietnam/da-lat-central-highlands/bidoup-nui-ba-national-park/',
  '/vietnam/da-lat-central-highlands/cau-dat-coffee-farms/',
  '/vietnam/da-lat-central-highlands/langbiang-kho-highlands/'
];
const laterSwitzerlandCh14DateRoutes = laterSwitzerlandCh14Routes.slice(1);
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
const reviewIsoDate = '2026-10-12';
const reviewDate = '12 October 2026';
const svgPath = 'assets/images/australia-great-ocean-road-route-schematic.svg';

function git(args, binary = false) {
  return execFileSync('git', args, { cwd: root, encoding: binary ? undefined : 'utf8', maxBuffer: 32 * 1024 * 1024 });
}

function pageFile(route, prefix = '') {
  return path.join(root, (prefix + route).replace(/^\//, ''), 'index.html');
}

function findAll(node, predicate, output = []) {
  if (predicate(node)) output.push(node);
  for (const child of node.childNodes || []) findAll(child, predicate, output);
  return output;
}

function findOne(node, predicate) {
  if (predicate(node)) return node;
  for (const child of node.childNodes || []) {
    const found = findOne(child, predicate);
    if (found) return found;
  }
  return null;
}

function attrs(node) {
  return Object.fromEntries((node?.attrs || []).map(({ name, value }) => [name, value]));
}

function textContent(node) {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value;
  if (['script', 'style', 'svg'].includes(node.tagName)) return '';
  return (node.childNodes || []).map(textContent).join(' ');
}

function editorialText(html) {
  const document = parse(html);
  const main = findOne(document, (node) => node.tagName === 'main' && attrs(node).id === 'main-content');
  assert(main, 'Missing #main-content.');
  const parts = [];
  function walk(node) {
    if (node.nodeName === '#text') { parts.push(node.value); return; }
    if (['script', 'style', 'svg'].includes(node.tagName)) return;
    const a = attrs(node);
    const classes = (a.class || '').split(/\s+/);
    if (classes.some((name) => ['sources', 'au-hub-directory', 'au-hub-route', 'au-related-grid', 'au-related-card'].includes(name))) return;
    if (a['aria-label'] === 'Advertisement') return;
    for (const child of node.childNodes || []) walk(child);
  }
  walk(main);
  return parts.join(' ').replace(/\s+/g, ' ').trim();
}

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function schemaAndVisibleFaq(html) {
  const document = parse(html);
  const json = findAll(document, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json')
    .map((node) => (node.childNodes || []).map((child) => child.value || '').join(''))
    .map((value) => { try { return JSON.parse(value); } catch { return null; } })
    .find(Boolean);
  const article = json?.['@graph']?.find((item) => item['@type'] === 'Article');
  const faq = json?.['@graph']?.find((item) => item['@type'] === 'FAQPage');
  const visibleFaq = findAll(document, (node) => node.tagName === 'details').map((details) => ({
    question: textContent(findOne(details, (node) => node.tagName === 'summary')).replace(/\s+/g, ' ').trim(),
    answer: textContent(findOne(details, (node) => node.tagName === 'div' && attrs(node).class === 'faq-answer')).replace(/\s+/g, ' ').trim()
  }));
  return { article, faq, visibleFaq };
}

function sha256(bytes) {
  return crypto.createHash('sha256').update(bytes).digest('hex');
}

function sitemapEntries(xml) {
  const rows = [];
  let current = null;
  let active = '';
  const parser = new SaxesParser({ xmlns: true });
  parser.on('opentag', (tag) => { active = tag.local; if (tag.local === 'url') current = {}; });
  parser.on('text', (value) => {
    if (!current) return;
    if (active === 'loc') current.loc = (current.loc || '') + value;
    if (active === 'lastmod') current.lastmod = (current.lastmod || '') + value;
  });
  parser.on('closetag', (tag) => { if (tag.local === 'url') { rows.push(current); current = null; } active = ''; });
  parser.write(xml).close();
  assert.equal(rows.length, new Set(rows.map(({ loc }) => loc)).size, 'Sitemap locations must remain unique.');
  return new Map(rows.map(({ loc, lastmod }) => [new URL(loc).pathname, lastmod]));
}

function parseSvg(xml) {
  const tags = [];
  const textRows = [];
  let active = null;
  const parser = new SaxesParser({ xmlns: true });
  parser.on('opentag', (tag) => {
    tags.push(tag);
    if (tag.local === 'text') active = { lang: tag.attributes.lang?.value || '', text: '' };
  });
  parser.on('text', (value) => { if (active) active.text += value; });
  parser.on('closetag', (tag) => { if (tag.local === 'text' && active) { textRows.push(active); active = null; } });
  parser.write(xml).close();
  return { tags, textRows };
}

function svgNumber(tag, name, fallback = 0) {
  const value = tag.attributes[name]?.value;
  return value === undefined ? fallback : Number(value);
}

const localeScripts = {
  'zh-Hant': /[\u3400-\u9fff]/u,
  ja: /[\u3040-\u30ff\u3400-\u9fff]/u,
  ko: /[\uac00-\ud7af]/u,
  th: /[\u0e00-\u0e7f]/u
};
const localizedReviewDate = {
  'zh-Hant': '2026 年 10 月 12 日',
  ja: '2026年10月12日',
  ko: '2026년 10월 12일',
  th: '12 ตุลาคม 2026'
};
const expectedHtml = routes.map((route) => route.replace(/^\//, '') + 'index.html').sort();
const changedHtml = git(['diff', '--name-only', integrationBase, '--', 'australia/great-ocean-road-gariwerd'])
  .split(/\r?\n/).filter((name) => name.endsWith('.html')).sort();
assert.deepEqual(changedHtml, expectedHtml, 'Only the four selected Great Ocean Road English source pages may change since the prior integration checkpoint.');

const deltas = [];
for (const route of routes) {
  const english = fs.readFileSync(pageFile(route), 'utf8');
  const document = parse(english);
  const htmlRoot = findOne(document, (node) => node.tagName === 'html');
  assert.equal(attrs(htmlRoot).lang, 'en', route + ': English lang attribute.');
  const canonical = findOne(document, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical');
  assert.equal(attrs(canonical).href, 'https://tripdistill.com' + route, route + ': canonical URL.');
  const { article, faq, visibleFaq } = schemaAndVisibleFaq(english);
  assert.equal(article?.dateModified, reviewIsoDate, route + ': structured article date.');
  assert.equal(article?.mainEntityOfPage, 'https://tripdistill.com' + route, route + ': structured article URL.');
  assert.deepEqual((faq?.mainEntity || []).map((item) => ({ question: item.name, answer: item.acceptedAnswer?.text })), visibleFaq, route + ': visible and structured FAQs must agree.');
  assert(english.includes('reviewed ' + reviewDate), route + ': visible review date.');
  assert(english.includes('reviewed on ' + reviewDate), route + ': source-review date.');
  const before = git(['show', base + ':' + route.slice(1) + 'index.html']);
  const delta = wordCount(editorialText(english)) - wordCount(editorialText(before));
  assert(delta >= 400, route + ': substantive body gain is only ' + delta + ' words.');
  deltas.push(delta);

  for (const [locale, prefix] of locales.slice(1)) {
    const localized = fs.readFileSync(pageFile(route, prefix), 'utf8');
    const localDoc = parse(localized);
    assert.equal(attrs(findOne(localDoc, (node) => node.tagName === 'html')).lang, locale, locale + ' ' + route + ': lang attribute.');
    assert(localized.includes(localizedReviewDate[locale]), locale + ' ' + route + ': localized visible review date.');
    const h1 = textContent(findOne(localDoc, (node) => node.tagName === 'h1')).replace(/\s+/g, ' ').trim();
    assert(h1 && localeScripts[locale].test(h1), locale + ' ' + route + ': translated heading script.');
    const localizedSchema = schemaAndVisibleFaq(localized);
    assert.equal(localizedSchema.article?.dateModified, reviewIsoDate, locale + ' ' + route + ': article date.');
    assert.deepEqual((localizedSchema.faq?.mainEntity || []).map((item) => ({ question: item.name, answer: item.acceptedAnswer?.text })), localizedSchema.visibleFaq, locale + ' ' + route + ': visible and structured FAQs must agree.');
  }
}

for (const locale of ['zh-Hant', 'ja', 'ko', 'th']) {
  const file = path.join(root, 'data/i18n/reviewed', locale, 'zzzzze-australia-great-ocean-pages-20261012.json');
  const batch = JSON.parse(fs.readFileSync(file, 'utf8'));
  assert.equal(batch.qualityStatus, 'reviewed', locale + ': page batch review status.');
  assert.deepEqual(batch.routes, routes, locale + ': page batch route scope.');
  assert.equal(Object.keys(batch.translations).length, 164, locale + ': 163 source-batch keys plus one reused shared label.');
  const currentCatalog = JSON.parse(fs.readFileSync(path.join(root, `data/i18n/${locale}.json`), 'utf8')).translations;
  assert.equal(batch.translations['Return to the base'], currentCatalog['Return to the base'], locale + ': the shared return label is carried forward verbatim from its existing approved catalog value.');
  assert(Object.values(batch.translations).every((value) => typeof value === 'string' && value.trim()), locale + ': all page targets must be complete.');
  assert.equal(batch.reviewProvenance?.writer, 'GPT-6 Luna', locale + ': translation writer provenance.');
  assert.equal(batch.reviewProvenance?.reviewer, 'GPT-6 Luna; same-model self-review', locale + ': self-review provenance.');
  assert.equal(batch.reviewProvenance?.independentSecondModel, false, locale + ': no independent review claim.');
  const pageWork = new Map(collectTranslationWork().map((record) => [record.route, record]));
  const required = new Set(routes.flatMap((route) => pageWork.get(route).units));
  for (const source of Object.keys(batch.translations)) {
    assert(required.has(source) || source === 'Return to the base', locale + ': page batch contains a key outside the selected routes and documented shared-label repair.');
  }
  const searchBatchPath = path.join(root, 'data/i18n/reviewed', locale, 'zzzzzf-australia-great-ocean-search-20261012.json');
  if (fs.existsSync(searchBatchPath)) {
    const searchBatch = JSON.parse(fs.readFileSync(searchBatchPath, 'utf8'));
    assert.equal(searchBatch.qualityStatus, 'reviewed', locale + ': search batch review status.');
    assert.deepEqual(searchBatch.routes, ['/data/search-index.json'], locale + ': search batch scope.');
    assert(Object.values(searchBatch.translations).every((value) => typeof value === 'string' && value.trim()), locale + ': all search targets must be complete.');
  }
}

const baseSearch = JSON.parse(git(['show', integrationBase + ':data/search-index.json']));
const currentSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const baseSearchByUrl = new Map(baseSearch.map((item) => [item.url, item]));
const currentSearchByUrl = new Map(currentSearch.map((item) => [item.url, item]));
assert.deepEqual([...currentSearchByUrl.keys()].sort(), [...baseSearchByUrl.keys()].sort(), 'Search URL set must remain unchanged.');
const changedSearch = [...currentSearchByUrl.keys()].filter((url) => JSON.stringify(currentSearchByUrl.get(url)) !== JSON.stringify(baseSearchByUrl.get(url))).sort();
assert.deepEqual(changedSearch, [...routes, ...laterCanadaCa13Routes, ...laterCanadaCa14SearchRoutes, ...laterGoldCoastRoutes, ...laterCairnsRoutes, ...laterSwitzerlandCh14Routes, ...laterVietnamRoutes, ...currentVietnamRoutes, ...laterVietnamMuiNeRoutes].sort(), 'Only four selected Great Ocean Road, exact later CA13, CA14 child, Gold Coast, Cairns, CH14 and Vietnam search records may change since the prior integration checkpoint.');
for (const route of routes) {
  const record = currentSearchByUrl.get(route);
  assert(record?.summary && fs.readFileSync(pageFile(route), 'utf8').includes(record.summary), route + ': search summary must match the page copy.');
  for (const [locale, prefix] of locales.slice(1)) {
    const searchFile = path.join(root, prefix.slice(1), 'data/search-index.json');
    const records = JSON.parse(fs.readFileSync(searchFile, 'utf8'));
    const localRecord = records.find((item) => item.url === prefix + route);
    assert(localRecord?.title && localRecord?.summary, locale + ' ' + route + ': localized search entry.');
    assert(localeScripts[locale].test(localRecord.title), locale + ' ' + route + ': translated search title.');
  }
}

const baseSitemap = sitemapEntries(git(['show', integrationBase + ':sitemap.xml']));
const currentSitemap = sitemapEntries(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set must remain unchanged.');
const expectedLastmod = [...routes, ...laterCanadaCa13Routes, ...laterCanadaCa14DateRoutes, ...laterGoldCoastRoutes, ...laterCairnsRoutes, ...laterSwitzerlandCh14DateRoutes, ...laterVietnamRoutes, ...currentVietnamRoutes, ...currentBranchVietnamRoutes, ...followingMekongRoutes, ...followingDaLatRoutes, ...laterVietnamMuiNeRoutes].flatMap((route) => locales.map(([, prefix]) => prefix + route)).sort();
const changedLastmod = [...new Set([...baseSitemap.keys(), ...currentSitemap.keys()])]
  .filter((route) => baseSitemap.get(route) !== currentSitemap.get(route)).sort();
assert.deepEqual(changedLastmod, expectedLastmod, 'Only four selected Great Ocean Road, exact later CA13/CA14, Gold Coast, Cairns, CH14 and Vietnam routes, including the following Mekong and Da Lat batches, across five editions may receive a new lastmod since the prior integration checkpoint.');
for (const route of expectedLastmod) {
  const expectedDate = [...currentBranchVietnamRoutes, ...followingMekongRoutes, ...followingDaLatRoutes, ...laterVietnamMuiNeRoutes].some((path) => route.endsWith(path)) ? '2026-10-13' : reviewIsoDate;
  assert.equal(currentSitemap.get(route), expectedDate, route + ': sitemap lastmod.');
}

const svgFile = path.join(root, svgPath);
const svg = fs.readFileSync(svgFile, 'utf8');
assert(!/<script\b|\son[a-z]+\s*=|<foreignObject\b|\s(?:href|xlink:href)\s*=\s*["']https?:\/\//i.test(svg), 'SVG has no scripts, handlers, foreign objects or external references.');
const parsedSvg = parseSvg(svg);
const svgRoot = parsedSvg.tags[0];
assert.equal(svgRoot.local, 'svg');
assert.equal(svgRoot.attributes.width?.value, '1600');
assert.equal(svgRoot.attributes.height?.value, '1320');
assert.equal(svgRoot.attributes.viewBox?.value, '0 0 1600 1320');
assert(svg.includes('id="title"') && svg.includes('id="desc"'), 'SVG must have accessible title and description.');
const bounds = { maxX: 1600, maxY: 1320 };
let geometryCount = 0;
for (const tag of parsedSvg.tags) {
  if (tag.local === 'rect') {
    const x = svgNumber(tag, 'x'); const y = svgNumber(tag, 'y');
    const width = svgNumber(tag, 'width'); const height = svgNumber(tag, 'height');
    assert(x >= 0 && y >= 0 && x + width <= bounds.maxX && y + height <= bounds.maxY, 'SVG rectangle extends beyond viewBox.');
    geometryCount += 1;
  } else if (tag.local === 'circle') {
    const cx = svgNumber(tag, 'cx'); const cy = svgNumber(tag, 'cy'); const radius = svgNumber(tag, 'r');
    assert(cx - radius >= 0 && cy - radius >= 0 && cx + radius <= bounds.maxX && cy + radius <= bounds.maxY, 'SVG circle extends beyond viewBox.');
    geometryCount += 1;
  } else if (tag.local === 'line') {
    for (const axis of ['x1', 'x2']) assert(svgNumber(tag, axis) >= 0 && svgNumber(tag, axis) <= bounds.maxX, 'SVG line x-coordinate extends beyond viewBox.');
    for (const axis of ['y1', 'y2']) assert(svgNumber(tag, axis) >= 0 && svgNumber(tag, axis) <= bounds.maxY, 'SVG line y-coordinate extends beyond viewBox.');
    geometryCount += 1;
  } else if (tag.local === 'path') {
    const values = (tag.attributes.d?.value || '').match(/[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g) || [];
    assert(values.length >= 4 && values.length % 2 === 0, 'SVG path must have reviewed coordinate pairs.');
    const points = values.map(Number);
    for (let index = 0; index < points.length; index += 2) {
      assert(points[index] >= 0 && points[index] <= bounds.maxX && points[index + 1] >= 0 && points[index + 1] <= bounds.maxY, 'SVG path control point extends beyond viewBox.');
    }
    geometryCount += 1;
  } else if (tag.local === 'text') {
    assert(svgNumber(tag, 'x') >= 0 && svgNumber(tag, 'x') <= bounds.maxX && svgNumber(tag, 'y') >= 0 && svgNumber(tag, 'y') <= bounds.maxY, 'SVG text anchor extends beyond viewBox.');
  } else {
    assert(['svg', 'title', 'desc', 'defs', 'linearGradient', 'stop', 'style', 'g'].includes(tag.local), 'SVG contains unreviewed element ' + tag.local + '.');
  }
}
assert(geometryCount >= 10, 'SVG must include bounded route and branch geometry.');
const legends = parsedSvg.textRows.filter((row) => ['en', 'zh-Hant', 'ja', 'ko', 'th'].includes(row.lang));
assert.deepEqual(legends.map((row) => row.lang).sort(), ['en', 'ja', 'ko', 'th', 'zh-Hant'].sort(), 'SVG must have one legend for each requested language.');
for (const [locale, term] of [['en', 'Solid: Great Ocean Road sequence'], ['zh-Hant', '實線'], ['ja', '実線'], ['ko', '실선'], ['th', 'เส้นทึบ']]) {
  assert(legends.find((row) => row.lang === locale)?.text.includes(term), 'SVG legend is missing ' + locale + ' route guidance.');
}
for (const place of ['Torquay', 'Lorne', 'Apollo Bay', 'Port Campbell', 'Gariwerd']) assert(svg.includes(place), 'SVG is missing ' + place + '.');
assert(/not.to.scale/i.test(svg) && /no distance/i.test(svg) && /no.*timetable/i.test(svg), 'SVG must explain that it is not navigation and makes no schedule or distance claim.');
const diagram = (await import('../data/australia-great-ocean-road-diagram.mjs')).australiaGreatOceanRoadDiagram;
assert.equal(diagram.src, '/' + svgPath);
assert.equal(diagram.license, null);
assert.equal(diagram.rightsStatus, 'Project original; no separate reuse license declared');
assert.equal(diagram.commercialReuseEligibility, 'unknown');
assert.equal(diagram.localSha1, crypto.createHash('sha1').update(fs.readFileSync(svgFile)).digest('hex'));
const hubHtml = fs.readFileSync(pageFile(routes[0]), 'utf8');
const hubDoc = parse(hubHtml);
const schematic = findOne(hubDoc, (node) => node.tagName === 'img' && attrs(node).src === '/' + svgPath);
assert(schematic && /not.to.scale/i.test(attrs(schematic).alt), 'Hub must show a descriptive not-to-scale schematic.');
assert(hubHtml.includes('href="' + diagram.source + '"') && hubHtml.includes('href="' + diagram.rightsStatusUrl + '"') && hubHtml.includes(diagram.rightsStatus), 'Hub must credit the original and state its reuse status.');

const imageManifest = (await import('../data/australia-image-manifest.mjs')).australiaImageManifest;
const photoChecks = [
  { slug: 'torquay-bells-beach', source: 'https://commons.wikimedia.org/wiki/File:Bells_Beach,_Australia_(Unsplash).jpg', creator: 'Samantha Lynch samjaynee', license: 'CC0' },
  { slug: 'apollo-bay-otways', source: 'https://commons.wikimedia.org/wiki/File:Maits_Rest_Rainforest_Trail.jpg', creator: 'Michael John Sankey', license: 'CC BY-SA 4.0' },
  { slug: 'port-campbell-twelve-apostles', source: 'https://commons.wikimedia.org/wiki/File:Princetown_(AU),_Port_Campbell_National_Park,_Twelve_Apostles_--_2019_--_0930.jpg', creator: 'Dietmar Rabich', license: 'CC BY-SA 4.0' }
];
for (const photo of photoChecks) {
  const guide = imageManifest['great-ocean-road-gariwerd/' + photo.slug];
  const bytes = fs.readFileSync(path.join(root, guide.src.slice(1)));
  const baselineBytes = git(['show', base + ':' + guide.src.slice(1)], true);
  assert.equal(sha256(bytes), sha256(baselineBytes), photo.slug + ': image bytes must be preserved.');
  assert.equal(guide.source, photo.source, photo.slug + ': exact photo source.');
  assert.equal(guide.creator, photo.creator, photo.slug + ': declared creator.');
  assert.equal(guide.license, photo.license, photo.slug + ': declared license.');
  const page = fs.readFileSync(pageFile(routes.find((route) => route.endsWith(photo.slug + '/'))), 'utf8');
  assert(page.includes(photo.source) && page.includes(photo.creator) && page.includes(photo.license), photo.slug + ': visible source/creator/license credit.');
}

for (const slug of ['lorne-waterfalls', 'gariwerd-grampians']) {
  const route = '/australia/great-ocean-road-gariwerd/' + slug + '/';
  const englishFile = route.replace(/^\//, '') + 'index.html';
  assert.equal(sha256(fs.readFileSync(pageFile(route))), sha256(git(['show', base + ':' + englishFile], true)), englishFile + ': unselected English route must remain byte-identical.');
  for (const [locale, prefix] of locales.slice(1)) {
    const localized = pageFile(route, prefix);
    assert(fs.existsSync(localized), locale + ' ' + route + ': unselected localized route must still be generated.');
    const doc = parse(fs.readFileSync(localized, 'utf8'));
    assert.equal(attrs(findOne(doc, (node) => node.tagName === 'html')).lang, locale, locale + ' ' + route + ': unselected generated page must keep its language tag.');
    const canonical = findOne(doc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical');
    assert.equal(attrs(canonical).href, 'https://tripdistill.com' + prefix + route, locale + ' ' + route + ': unselected generated canonical URL.');
  }
}

console.log('Great Ocean Road Australia regression passed: body deltas ' + deltas.join(', ') + '; four existing route paths in five editions; dates, schemas, search and sitemap scope; reviewed translation provenance; SVG XML/geometry/five-language legend/rights; retained photo bytes/source/license records; and unchanged Lorne/Gariwerd child pages.');
