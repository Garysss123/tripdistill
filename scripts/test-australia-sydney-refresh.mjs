import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { parse } from 'parse5';
import { SaxesParser } from 'saxes';
import { australiaClusters, australiaGuides } from '../data/australia-guides.mjs';
import { australiaSydneyDiagram } from '../data/australia-sydney-diagram.mjs';
import { australiaImageManifest } from '../data/australia-image-manifest.mjs';
import { postIntegrationAustraliaRoutes, postIntegrationCanberraRoutes, postIntegrationAlpsMargaretRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = '0b95d241600659dfb360de29a655e180baafc75c';
const routes = [
  '/australia/sydney-harbour-coast/',
  '/australia/sydney-harbour-coast/circular-quay-rocks/',
  '/australia/sydney-harbour-coast/opera-house-botanic-garden/',
  '/australia/sydney-harbour-coast/bondi-coogee-coastal-walk/',
  '/australia/sydney-harbour-coast/barangaroo-darling-harbour/',
  '/australia/sydney-harbour-coast/manly-north-head/'
];
const brisbaneRoutes = [
  '/australia/brisbane-moreton-bay/',
  '/australia/brisbane-moreton-bay/city-river-south-bank/',
  '/australia/brisbane-moreton-bay/minjerribah-north-stradbroke/',
  '/australia/brisbane-moreton-bay/mulgumpin-moreton-island/',
  '/australia/brisbane-moreton-bay/new-farm-fortitude-valley/',
  '/australia/brisbane-moreton-bay/west-end-cultural-precinct/'
];
const blueMountainsRoutes = [
  '/australia/blue-mountains-nsw-coast/',
  '/australia/blue-mountains-nsw-coast/katoomba-echo-point/',
  '/australia/blue-mountains-nsw-coast/wentworth-falls-tableland/',
  '/australia/blue-mountains-nsw-coast/blackheath-grose-valley/',
  '/australia/blue-mountains-nsw-coast/royal-national-park-coast/',
  '/australia/blue-mountains-nsw-coast/jervis-bay-booderee/'
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
  '/australia/gold-coast-scenic-rim/coolangatta-snapper-rocks/',
  '/australia/gold-coast-scenic-rim/springbrook-national-park/',
  '/australia/gold-coast-scenic-rim/lamington-national-park/'
];
const cairnsRoutes = [
  '/australia/cairns-wet-tropics/',
  '/australia/cairns-wet-tropics/cairns-esplanade-reef-terminal/',
  '/australia/cairns-wet-tropics/kuranda-rail-skyrail/',
  '/australia/cairns-wet-tropics/northern-beaches-palm-cove/'
];
const melbourneOceanGapRoutes = [
  '/australia/melbourne-port-phillip/fitzroy-carlton-collingwood/',
  '/australia/melbourne-port-phillip/phillip-island/',
  '/australia/great-ocean-road-gariwerd/lorne-waterfalls/',
  '/australia/great-ocean-road-gariwerd/gariwerd-grampians/'
];
const adelaidePerthGapRoutes = [
  '/australia/adelaide-wine-island/adelaide-hills-hahndorf/',
  '/australia/adelaide-wine-island/kangaroo-island/',
  '/australia/perth-fremantle-rottnest/kings-park/',
  '/australia/perth-fremantle-rottnest/cottesloe-scarborough/'
];
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
const isoDate = '2026-10-12';
const selectedGuideSlugs = ['circular-quay-rocks', 'opera-house-botanic-garden', 'bondi-coogee-coastal-walk', 'barangaroo-darling-harbour', 'manly-north-head'];
const search = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const issues = [];

function git(args, binary = false) {
  return execFileSync('git', args, { cwd: root, encoding: binary ? undefined : 'utf8', maxBuffer: 32 * 1024 * 1024 });
}

function assertIssue(ok, message) {
  if (!ok) issues.push(message);
}

function routeFile(route, prefix = '') {
  return path.join(root, `${prefix}${route}`.replace(/^\//, ''), 'index.html');
}

function findNode(node, predicate) {
  if (predicate(node)) return node;
  for (const child of node.childNodes || []) {
    const result = findNode(child, predicate);
    if (result) return result;
  }
  return null;
}

function textContent(node) {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value;
  return (node.childNodes || []).map(textContent).join(' ');
}

function attrs(node) {
  return Object.fromEntries((node.attrs || []).map(({ name, value }) => [name, value]));
}

function editorialText(html) {
  const doc = parse(html);
  const main = findNode(doc, (node) => node.tagName === 'main' && attrs(node).id === 'main-content');
  assert(main, 'HTML is missing #main-content.');
  const parts = [];
  function walk(node) {
    if (node.nodeName === '#text') {
      parts.push(node.value);
      return;
    }
    if (['script', 'style', 'svg'].includes(node.tagName)) return;
    const a = attrs(node);
    const classes = (a.class || '').split(/\s+/);
    if (
      classes.some((name) => ['sources', 'au-hub-directory', 'au-hub-route', 'au-related-grid'].includes(name)) ||
      a['aria-label'] === 'Advertisement' ||
      a['aria-labelledby'] === 'au-related-title'
    ) return;
    for (const child of node.childNodes || []) walk(child);
  }
  walk(main);
  return parts.join(' ').replace(/\s+/g, ' ').trim();
}

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function readManifest(source) {
  const match = source.match(/export const australiaImageManifest = (\{[\s\S]*\});\s*$/);
  assert(match, 'Could not parse the base Australia photo manifest.');
  return JSON.parse(match[1]);
}

function parseXml(xml, onTag = () => {}) {
  const parser = new SaxesParser({ xmlns: true });
  let rootCount = 0;
  const stack = [];
  parser.on('opentag', (tag) => {
    if (!stack.length) rootCount += 1;
    onTag(tag, stack);
    stack.push(tag.name);
  });
  parser.on('closetag', () => stack.pop());
  parser.write(xml).close();
  assert.equal(rootCount, 1, 'XML must have one document root.');
}

function numberAttribute(tag, name, fallback = 0) {
  const value = tag.attributes[name]?.value;
  return value === undefined ? fallback : Number(value);
}

function pathBounds(data) {
  const tokens = data.match(/[A-Za-z]|[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g) || [];
  const points = [];
  let index = 0;
  let command = '';
  let current = [0, 0];
  const start = [0, 0];
  const read = () => {
    const token = tokens[index++];
    assert(token !== undefined && !/^[A-Za-z]$/.test(token), `Malformed SVG path: ${data}`);
    const value = Number(token);
    assert(Number.isFinite(value), `Non-finite SVG coordinate in path: ${data}`);
    return value;
  };
  const point = (x, y) => {
    points.push([x, y]);
    current = [x, y];
  };
  while (index < tokens.length) {
    if (/^[A-Za-z]$/.test(tokens[index])) command = tokens[index++];
    assert(command && command === command.toUpperCase(), `Unsupported relative SVG path command ${command}.`);
    if (command === 'M' || command === 'L') {
      const x = read(); const y = read(); point(x, y);
      if (command === 'M') {
        start[0] = x; start[1] = y;
        command = 'L';
      }
    } else if (command === 'C') {
      const x1 = read(); const y1 = read(); const x2 = read(); const y2 = read(); const x = read(); const y = read();
      points.push([x1, y1], [x2, y2]);
      point(x, y);
    } else if (command === 'H') {
      point(read(), current[1]);
    } else if (command === 'V') {
      point(current[0], read());
    } else if (command === 'Z') {
      point(start[0], start[1]);
      command = '';
    } else {
      throw new Error(`Unsupported SVG path command ${command}.`);
    }
  }
  assert(points.length > 0, 'SVG path has no coordinates.');
  return {
    minX: Math.min(...points.map(([x]) => x)), maxX: Math.max(...points.map(([x]) => x)),
    minY: Math.min(...points.map(([, y]) => y)), maxY: Math.max(...points.map(([, y]) => y))
  };
}

function sitemapEntries(xml) {
  const entries = [];
  let current = null;
  let activeTag = '';
  const parser = new SaxesParser({ xmlns: true });
  parser.on('opentag', (tag) => {
    activeTag = tag.local;
    if (tag.local === 'url') current = {};
  });
  parser.on('text', (value) => {
    if (!current) return;
    if (activeTag === 'loc') current.loc = (current.loc || '') + value;
    if (activeTag === 'lastmod') current.lastmod = (current.lastmod || '') + value;
  });
  parser.on('closetag', (tag) => {
    if (tag.local === 'url') {
      entries.push(current);
      current = null;
    }
    activeTag = '';
  });
  parser.write(xml).close();
  return new Map(entries.map(({ loc, lastmod }) => [new URL(loc).pathname, lastmod]));
}

const cluster = australiaClusters.find((item) => item.slug === 'sydney-harbour-coast');
assert(cluster, 'Sydney hub is missing from the Australia source model.');
assertIssue(cluster.reviewIsoDate === isoDate, 'Sydney hub review date is not 12 October 2026.');
assertIssue(cluster.diagram?.src === australiaSydneyDiagram.src, 'Sydney hub does not use the original route schematic.');
assertIssue(cluster.guides.filter((guide) => guide.reviewIsoDate === isoDate).map((guide) => guide.slug).sort().join('|') === [...selectedGuideSlugs].sort().join('|'), 'The reviewed Sydney child-guide scope must be exactly the five selected routes.');
assertIssue(cluster.guides.filter((guide) => guide.reviewIsoDate).length === 5, 'An unselected Sydney child route has a new review date.');
assertIssue(australiaGuides.length === 80, `Australia guide count changed: ${australiaGuides.length}.`);

const changedHtml = git(['diff', '--name-only', base, '--', 'australia']).split(/\r?\n/).filter((name) => name.endsWith('.html')).sort();
const expectedHtml = [...routes, ...brisbaneRoutes, ...blueMountainsRoutes, ...greatOceanRoutes, ...goldCoastRoutes, ...cairnsRoutes, ...melbourneOceanGapRoutes, ...adelaidePerthGapRoutes, ...postIntegrationAustraliaRoutes, ...postIntegrationCanberraRoutes, ...postIntegrationAlpsMargaretRoutes].map((route) => `${route.slice(1)}index.html`).sort();
assertIssue(changedHtml.join('|') === expectedHtml.join('|'), `English HTML diff must be limited to the Sydney and exact later Australia route groups, including Canberra; found ${changedHtml.join(', ')}.`);

const indexByRoute = new Map(search.map((record) => [record.url, record]));
for (const route of routes) {
  const htmlPath = routeFile(route);
  assertIssue(fs.existsSync(htmlPath), `Missing English page ${route}.`);
  const html = fs.readFileSync(htmlPath, 'utf8');
  const doc = parse(html);
  const main = findNode(doc, (node) => node.tagName === 'main' && attrs(node).id === 'main-content');
  assertIssue(Boolean(main), `${route}: main article is missing.`);
  const dataRoute = indexByRoute.get(route);
  assertIssue(Boolean(dataRoute), `${route}: search-index record is missing.`);
  let sourceSummary;
  if (route.endsWith('sydney-harbour-coast/')) sourceSummary = cluster.hubIntro;
  else sourceSummary = cluster.guides.find((guide) => guide.url === route)?.summary;
  assertIssue(dataRoute?.summary === sourceSummary, `${route}: search summary is out of sync with the page source.`);

  const baseline = git(['show', `${base}:${route.slice(1)}index.html`]);
  const delta = wordCount(editorialText(html)) - wordCount(editorialText(baseline));
  assertIssue(delta >= 450, `${route}: substantive text grew by only ${delta} words after excluding teaser cards, route cards and citations.`);

  const pageData = route === routes[0] ? cluster : cluster.guides.find((guide) => guide.url === route);
  assertIssue(pageData?.reviewIsoDate === isoDate, `${route}: source date is not synchronized.`);
  const schemaNode = findNode(doc, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json');
  let graph;
  try { graph = JSON.parse(textContent(schemaNode)); } catch { graph = null; }
  const article = graph?.['@graph']?.find((item) => item['@type'] === 'Article');
  assertIssue(article?.dateModified === isoDate, `${route}: Article dateModified is not synchronized.`);
}

const baseManifest = readManifest(git(['show', `${base}:data/australia-image-manifest.mjs`]));
for (const slug of ['circular-quay-rocks', 'opera-house-botanic-garden', 'bondi-coogee-coastal-walk']) {
  const key = `sydney-harbour-coast/${slug}`;
  const prior = baseManifest[key];
  const current = australiaImageManifest[key];
  assert(prior && current, `Missing retained Sydney photograph record ${key}.`);
  for (const field of ['src', 'source', 'label', 'creator', 'license', 'commonsTitle', 'remoteSha1']) {
    assertIssue(current[field] === prior[field], `${key}: ${field} provenance changed.`);
  }
  const beforeBytes = git(['show', `${base}:${prior.src.slice(1)}`], true);
  const afterBytes = fs.readFileSync(path.join(root, prior.src.slice(1)));
  const beforeHash = crypto.createHash('sha1').update(beforeBytes).digest('hex');
  const afterHash = crypto.createHash('sha1').update(afterBytes).digest('hex');
  assertIssue(afterHash === beforeHash, `${key}: retained photograph bytes changed.`);
}
assertIssue(australiaImageManifest['sydney-harbour-coast/circular-quay-rocks']?.alt === 'Sydney Harbour Bridge viewed across Sydney Cove from Circular Quay', 'Circular Quay photo alternative text does not match the inspected subject.');

const diagramBytes = fs.readFileSync(path.join(root, australiaSydneyDiagram.src.slice(1)));
const diagram = diagramBytes.toString('utf8');
const diagramSha1 = crypto.createHash('sha1').update(diagramBytes).digest('hex');
assertIssue(diagramSha1 === australiaSydneyDiagram.localSha1, 'Original Sydney diagram SHA-1 does not match its data record.');
assertIssue(australiaSydneyDiagram.creator === 'TripDistill Editorial Team' && australiaSydneyDiagram.license === null, 'Original diagram creator or declared-license status is incorrect.');
assertIssue(australiaSydneyDiagram.rightsStatus === 'Project original; no separate reuse license declared' && australiaSydneyDiagram.commercialReuseEligibility === 'unknown', 'Original diagram rights must remain explicitly undeclared/unknown.');
assertIssue(australiaSydneyDiagram.source === `https://tripdistill.com${australiaSydneyDiagram.src}`, 'Original diagram source must identify the exact hosted artwork.');
assertIssue(!/\b(?:CC0\b|CC\s+BY(?:-(?:SA|NC|ND))*\b|Creative\s+Commons\b)/i.test(diagram), 'Original diagram must not claim a Creative Commons license.');
assertIssue(!/<script\b|\son[a-z]+\s*=|<foreignObject\b|\s(?:href|xlink:href)\s*=\s*["']https?:\/\//i.test(diagram), 'Original SVG must not contain script, events, foreign objects or external references.');

const svgTags = [];
let svgText = '';
const svgParser = new SaxesParser({ xmlns: true });
svgParser.on('opentag', (tag) => svgTags.push(tag));
svgParser.on('text', (value) => { svgText += ` ${value}`; });
svgParser.write(diagram).close();
const svgRoot = svgTags[0];
assertIssue(svgRoot?.local === 'svg' && svgRoot.attributes.viewBox?.value === '0 0 1600 1000', 'Sydney SVG must be well-formed with a 1600×1000 viewBox.');
const bounds = { x: 0, y: 0, width: 1600, height: 1000 };
let geometricCount = 0;
for (const tag of svgTags) {
  if (tag.local === 'rect') {
    const x = numberAttribute(tag, 'x'); const y = numberAttribute(tag, 'y');
    const width = numberAttribute(tag, 'width'); const height = numberAttribute(tag, 'height');
    assertIssue(x >= bounds.x && y >= bounds.y && x + width <= bounds.width && y + height <= bounds.height, 'An SVG rectangle falls outside the viewBox.');
    geometricCount += 1;
  } else if (tag.local === 'circle') {
    const cx = numberAttribute(tag, 'cx'); const cy = numberAttribute(tag, 'cy'); const radius = numberAttribute(tag, 'r');
    assertIssue(cx - radius >= 0 && cy - radius >= 0 && cx + radius <= bounds.width && cy + radius <= bounds.height, 'An SVG circle falls outside the viewBox.');
    geometricCount += 1;
  } else if (tag.local === 'line') {
    for (const axis of ['x1', 'x2']) assertIssue(numberAttribute(tag, axis) >= 0 && numberAttribute(tag, axis) <= bounds.width, 'An SVG line x-coordinate falls outside the viewBox.');
    for (const axis of ['y1', 'y2']) assertIssue(numberAttribute(tag, axis) >= 0 && numberAttribute(tag, axis) <= bounds.height, 'An SVG line y-coordinate falls outside the viewBox.');
    geometricCount += 1;
  } else if (tag.local === 'path') {
    const pathBox = pathBounds(tag.attributes.d?.value || '');
    assertIssue(pathBox.minX >= 0 && pathBox.minY >= 0 && pathBox.maxX <= bounds.width && pathBox.maxY <= bounds.height, 'An SVG path/control point falls outside the viewBox.');
    geometricCount += 1;
  } else if (tag.local === 'text') {
    const x = numberAttribute(tag, 'x'); const y = numberAttribute(tag, 'y');
    assertIssue(x >= 0 && x <= bounds.width && y >= 0 && y <= bounds.height, 'An SVG text anchor falls outside the viewBox.');
  } else if (tag.local === 'svg') {
    continue;
  } else if (!['defs', 'style', 'title', 'desc'].includes(tag.local)) {
    assertIssue(false, `SVG contains unreviewed geometry element ${tag.local}.`);
  }
}
assertIssue(geometricCount >= 20, `SVG geometry regression found only ${geometricCount} bounded shapes.`);
const legendTerms = [
  'Train', '鐵路', '鉄道', '철도', 'รถไฟ',
  'Ferry', '渡輪', 'フェリー', '페리', 'เรือข้ามฟาก',
  'Bus', '公車', 'バス', '버스', 'รถโดยสาร',
  'Walk', '步行', '徒歩', '도보', 'เดิน',
  'not to scale', '非按比例', '縮尺なし', '축척 없음', 'ไม่ได้มาตราส่วน'
];
for (const term of legendTerms) assertIssue(svgText.includes(term), `SVG is missing the five-language legend term “${term}”.`);
assertIssue(svgText.includes('No distance, bearing, timetable or service is implied.'), 'SVG must state that it is not a route, scale, distance or timetable promise.');
const hubHtml = fs.readFileSync(routeFile(routes[0]), 'utf8');
const hubDoc = parse(hubHtml);
const diagramImage = findNode(hubDoc, (node) => node.tagName === 'img' && attrs(node).src === australiaSydneyDiagram.src);
assertIssue(Boolean(diagramImage && attrs(diagramImage).alt === cluster.diagramAlt), 'Original SVG must appear on the hub with its descriptive alt text.');
assertIssue(hubHtml.includes(australiaSydneyDiagram.source) && hubHtml.includes(australiaSydneyDiagram.rightsStatus), 'Hub must display diagram source and its separate reuse-rights status.');

const expectedDateText = {
  'zh-Hant': '2026 年 10 月 12 日',
  ja: '2026年10月12日',
  ko: '2026년 10월 12일',
  th: '12 ตุลาคม 2026'
};
const localeSamples = {
  'zh-Hant': '三晚可集中遊覽港灣',
  ja: '3泊なら港周辺',
  ko: '3박이면 항구 지역',
  th: 'พัก 3 คืนก็เที่ยวท่าเรือ'
};
for (const [locale, prefix] of locales.slice(1)) {
  for (const route of routes) {
    const file = routeFile(route, prefix);
    assertIssue(fs.existsSync(file), `${locale}: missing localized route ${route}.`);
    if (!fs.existsSync(file)) continue;
    const html = fs.readFileSync(file, 'utf8');
    const doc = parse(html);
    const htmlNode = findNode(doc, (node) => node.tagName === 'html');
    assertIssue(attrs(htmlNode).lang === locale, `${locale}: lang attribute is not set on ${route}.`);
    assertIssue(html.includes(expectedDateText[locale]), `${locale}: localized review date is missing on ${route}.`);
    const localizedHubDiagram = findNode(doc, (node) => node.tagName === 'img' && attrs(node).src === australiaSydneyDiagram.src);
    if (route === routes[0]) {
      assertIssue(Boolean(localizedHubDiagram), `${locale}: translated hub is missing the route schematic.`);
      assertIssue(textContent(findNode(doc, (node) => node.tagName === 'main' && attrs(node).id === 'main-content')).includes(localeSamples[locale]), `${locale}: localized hub trip-shape copy is missing.`);
    }
    const schemaNode = findNode(doc, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json');
    let graph;
    try { graph = JSON.parse(textContent(schemaNode)); } catch { graph = null; }
    const article = graph?.['@graph']?.find((item) => item['@type'] === 'Article');
    assertIssue(article?.dateModified === isoDate, `${locale}: Article dateModified differs for ${route}.`);
  }
}

const baseSitemap = sitemapEntries(git(['show', `${base}:sitemap.xml`]));
const currentSitemap = sitemapEntries(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
const baseUrls = [...baseSitemap.keys()].sort();
const currentUrls = [...currentSitemap.keys()].sort();
assertIssue(baseUrls.join('|') === currentUrls.join('|'), 'The published sitemap URL set changed.');
// The integration-sprint scope regression validates every non-target route and
// date against the fixed global baseline. This test scopes its date assertion
// to the Australia routes selected by the AU regressions below.
const targetSitemapPaths = [...routes, ...brisbaneRoutes, ...blueMountainsRoutes, ...greatOceanRoutes, ...goldCoastRoutes, ...cairnsRoutes, ...melbourneOceanGapRoutes, ...adelaidePerthGapRoutes, ...postIntegrationAustraliaRoutes, ...postIntegrationCanberraRoutes, ...postIntegrationAlpsMargaretRoutes].flatMap((route) => locales.map(([, prefix]) => `${prefix}${route}`)).sort();
const changedLastmod = [...new Set([...baseSitemap.keys(), ...currentSitemap.keys()])]
  .filter((route) => new URL(`https://tripdistill.com${route}`).pathname.includes('/australia/') && baseSitemap.get(route) !== currentSitemap.get(route)).sort();
assertIssue(changedLastmod.join('|') === targetSitemapPaths.join('|'), `Exactly the selected Sydney and later AU route/language lastmod values, including Canberra, must change; found ${changedLastmod.length}.`);
for (const route of targetSitemapPaths) {
  const expectedDate = postIntegrationAlpsMargaretRoutes.some((path) => route.endsWith(path)) ? '2026-10-13' : isoDate;
  assertIssue(currentSitemap.get(route) === expectedDate, `${route}: sitemap lastmod is not ${expectedDate}.`);
}

if (issues.length) {
  console.error('Sydney Australia refresh regression failed:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log(`Sydney refresh regression passed: ${routes.length} Sydney routes with substantive deltas above 450 words, unchanged URL/photo source integrity, five-language date/sitemap scope across later Australia batches including Canberra, original SVG XML/legend/geometry, and no out-of-scope English HTML diffs.`);
}
