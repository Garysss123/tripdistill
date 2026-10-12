#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { switzerlandImageManifest, switzerlandRetiredImageRecords } from '../data/switzerland-image-manifest.mjs';

const root = path.resolve(import.meta.dirname, '..');
const baseCommit = 'a014412eceb30efae51894be3b6167debaa96ca3';
const routes = [
  '/switzerland/lucerne-lake-mountains/',
  '/switzerland/lucerne-lake-mountains/old-town-lakefront/',
  '/switzerland/lucerne-lake-mountains/pilatus-round-trip/',
  '/switzerland/lucerne-lake-mountains/rigi-lake-circuit/'
];
const locales = [
  { code: 'en', prefix: '' },
  { code: 'zh-Hant', prefix: '/zh' },
  { code: 'ja', prefix: '/ja' },
  { code: 'ko', prefix: '/ko' },
  { code: 'th', prefix: '/th' }
];
const diagramPath = '/assets/images/switzerland-lucerne-lake-mountains-rigi-route-choice.svg';
const retiredPhotoPath = '/assets/images/switzerland-lucerne-lake-mountains-rigi-lake-circuit.webp';
const retiredPhotoSha1 = 'f4d0669944063db98152960cb4a93581732ec470';

function walk(node, out = []) {
  out.push(node);
  for (const child of node.childNodes || []) walk(child, out);
  return out;
}
function attr(node, name) { return node?.attrs?.find((item) => item.name === name)?.value; }
function text(node) {
  if (!node) return '';
  return node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join(' ');
}
function readPage(baseDir, locale, route) {
  const page = path.join(root, baseDir, locale.prefix.replace(/^\//, ''), route.slice(1), 'index.html');
  assert.ok(fs.existsSync(page), `missing page ${page}`);
  const html = fs.readFileSync(page, 'utf8');
  return { html, nodes: walk(parse(html)), page };
}
function sitemapRecords(xml) {
  return new Map([...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)]
    .map((match) => [match[1], match[2]]));
}
function mainWordCount(html) {
  const main = walk(parse(html)).find((node) => node.tagName === 'main');
  assert.ok(main, 'page must have a main element');
  return text(main).trim().split(/\s+/).filter(Boolean).length;
}
function articleNode(nodes) {
  for (const script of nodes.filter((node) => node.tagName === 'script' && attr(node, 'type') === 'application/ld+json')) {
    try {
      const json = JSON.parse(text(script));
      const graph = Array.isArray(json['@graph']) ? json['@graph'] : [json];
      const article = graph.find((item) => item['@type'] === 'Article');
      if (article) return article;
    } catch {}
  }
  return null;
}
function svgTokens(d) {
  return d.match(/[a-zA-Z]|[-+]?(?:\d*\.)?\d+(?:[eE][-+]?\d+)?/g) || [];
}
function svgPathEndpoint(d) {
  const tokens = svgTokens(d);
  let index = 0;
  let command = null;
  let point = [0, 0];
  let subpathStart = [0, 0];
  const arity = { M: 2, m: 2, L: 2, l: 2, C: 6, c: 6, S: 4, s: 4 };
  while (index < tokens.length) {
    if (/^[a-zA-Z]$/.test(tokens[index])) {
      command = tokens[index++];
      continue;
    }
    assert.ok(command && arity[command], `unsupported SVG command in path: ${d}`);
    const values = tokens.slice(index, index + arity[command]).map(Number);
    assert.equal(values.length, arity[command], `incomplete SVG ${command} command: ${d}`);
    index += arity[command];
    const relative = command === command.toLowerCase();
    if (command === 'M' || command === 'm') {
      point = relative ? [point[0] + values[0], point[1] + values[1]] : values;
      subpathStart = [...point];
      command = relative ? 'l' : 'L';
    } else if (command === 'L' || command === 'l') {
      point = relative ? [point[0] + values[0], point[1] + values[1]] : values;
    } else {
      const end = command === 'C' || command === 'c' ? values.slice(4, 6) : values.slice(2, 4);
      point = relative ? [point[0] + end[0], point[1] + end[1]] : end;
    }
    if (tokens[index] === 'Z' || tokens[index] === 'z') {
      point = [...subpathStart];
      index++;
      command = null;
    }
  }
  return point;
}
function svgPathStart(d) {
  const values = svgTokens(d).filter((token) => !/^[a-zA-Z]$/.test(token)).map(Number);
  assert.ok(values.length >= 2, `SVG path has no starting point: ${d}`);
  return values.slice(0, 2);
}
function svgArrowBounds(d) {
  const values = svgTokens(d).filter((token) => !/^[a-zA-Z]$/.test(token)).map(Number);
  assert.equal(values.length, 6, `arrowhead must be one closed, three-point triangle: ${d}`);
  const xs = [values[0], values[2], values[4]];
  const ys = [values[1], values[3], values[5]];
  return { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) };
}
function svgTrianglePoints(d) {
  const values = svgTokens(d).filter((token) => !/^[a-zA-Z]$/.test(token)).map(Number);
  assert.equal(values.length, 6, `arrowhead must be one closed, three-point triangle: ${d}`);
  return [[values[0], values[1]], [values[2], values[3]], [values[4], values[5]]];
}
function svgCubicSegments(d) {
  const tokens = svgTokens(d);
  let index = 0;
  let command = null;
  let point = [0, 0];
  const segments = [];
  while (index < tokens.length) {
    if (/^[a-zA-Z]$/.test(tokens[index])) {
      command = tokens[index++];
      continue;
    }
    assert.ok(command === 'M' || command === 'C', `train-clearance path uses unexpected command: ${d}`);
    if (command === 'M') {
      point = tokens.slice(index, index + 2).map(Number);
      assert.equal(point.length, 2);
      index += 2;
      command = 'L';
      continue;
    }
    const values = tokens.slice(index, index + 6).map(Number);
    assert.equal(values.length, 6, `incomplete SVG C command: ${d}`);
    index += 6;
    const segment = { start: [...point], control1: values.slice(0, 2), control2: values.slice(2, 4), end: values.slice(4, 6) };
    segments.push(segment);
    point = [...segment.end];
  }
  return segments;
}
function cubicPoint(segment, t) {
  const u = 1 - t;
  const weight0 = u ** 3;
  const weight1 = 3 * u ** 2 * t;
  const weight2 = 3 * u * t ** 2;
  const weight3 = t ** 3;
  return [0, 1].map((axis) => weight0 * segment.start[axis] + weight1 * segment.control1[axis] + weight2 * segment.control2[axis] + weight3 * segment.end[axis]);
}
function intersects(a, b, padding = 0) {
  return !(a.maxX + padding < b.minX || a.minX - padding > b.maxX || a.maxY + padding < b.minY || a.minY - padding > b.maxY);
}

// Keep the route inventory and modification scope stable against the exact
// integration source this branch was created from.
const baseSitemap = execFileSync('git', ['show', `${baseCommit}:sitemap.xml`], { cwd: root, encoding: 'utf8' });
const currentSitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const baseRecords = sitemapRecords(baseSitemap);
const currentRecords = sitemapRecords(currentSitemap);
assert.equal(baseRecords.size, 4560, 'base route inventory');
assert.equal(currentRecords.size, baseRecords.size, 'no sitemap URL additions or removals');
assert.deepEqual([...currentRecords.keys()].sort(), [...baseRecords.keys()].sort(), 'URL set is unchanged');
const expectedDateChanges = new Set(locales.flatMap((locale) => routes.map((route) => `https://tripdistill.com${locale.prefix}${route}`)));
const dateChanges = [...currentRecords].filter(([url, date]) => baseRecords.get(url) !== date);
assert.equal(dateChanges.length, 20, 'four routes x five locales have modified dates');
for (const [url, date] of dateChanges) {
  assert.ok(expectedDateChanges.has(url), `unexpected sitemap date change: ${url}`);
  assert.equal(date, '2026-10-12', `review date for ${url}`);
}
assert.equal(expectedDateChanges.size, 20);

const svgText = fs.readFileSync(path.join(root, diagramPath.slice(1)), 'utf8');
const svgNodes = walk(parse(svgText));
const routeTargets = ['lake-gate', 'ridge-from-lake', 'rail-gate', 'ridge-from-rail', 'lucerne-lowland'];
const targetPaths = svgNodes.filter((node) => node.tagName === 'path' && attr(node, 'data-target'));
const arrowPaths = svgNodes.filter((node) => node.tagName === 'path' && attr(node, 'data-arrow'));
assert.deepEqual(targetPaths.map((node) => attr(node, 'data-target')).sort(), [...routeTargets].sort(), 'the diagram keeps exactly five named route legs');
assert.deepEqual(arrowPaths.map((node) => attr(node, 'data-arrow')).sort(), [...routeTargets].sort(), 'each route leg has one fixed arrowhead');
assert.doesNotMatch(svgText, /<marker\b|marker-end=/, 'route arrowheads use fixed geometry, not stroke-scaled markers');
const targetByName = new Map(targetPaths.map((node) => [attr(node, 'data-target'), node]));
const arrowByName = new Map(arrowPaths.map((node) => [attr(node, 'data-arrow'), node]));
const expectedArrowTips = new Map([
  ['lake-gate', [968, 287]],
  ['ridge-from-lake', [1200, 313]],
  ['rail-gate', [1194, 640]],
  ['ridge-from-rail', [1550, 356]],
  ['lucerne-lowland', [573, 728]]
]);
const expectedArrowDirections = new Map([
  ['lake-gate', [1, 0]],
  ['ridge-from-lake', [1, 0]],
  ['rail-gate', [1, 0]],
  ['ridge-from-rail', [-1, -1]],
  ['lucerne-lowland', [38, -49]]
]);
const arrowBounds = new Map();
for (const [name, expected] of expectedArrowTips) {
  const routeNode = targetByName.get(name);
  const arrowNode = arrowByName.get(name);
  const routeTip = svgPathEndpoint(attr(routeNode, 'd'));
  const arrowTip = svgPathStart(attr(arrowNode, 'd'));
  assert.deepEqual(routeTip, expected, `${name} route endpoint stays in its clear gateway/approach position`);
  assert.deepEqual(arrowTip, routeTip, `${name} arrow tip joins the route endpoint`);
  const [tip, base1, base2] = svgTrianglePoints(attr(arrowNode, 'd'));
  const baseCenter = [(base1[0] + base2[0]) / 2, (base1[1] + base2[1]) / 2];
  const arrowVector = [tip[0] - baseCenter[0], tip[1] - baseCenter[1]];
  const expectedDirection = expectedArrowDirections.get(name);
  const directionDot = arrowVector[0] * expectedDirection[0] + arrowVector[1] * expectedDirection[1];
  const directionCosine = directionDot / (Math.hypot(...arrowVector) * Math.hypot(...expectedDirection));
  assert.ok(directionCosine >= 0.9, `${name} arrowhead faces along its route leg`);
  const bounds = svgArrowBounds(attr(arrowNode, 'd'));
  assert.ok(bounds.maxX - bounds.minX >= 18 && bounds.maxX - bounds.minX <= 26, `${name} arrowhead width stays visible and compact`);
  assert.ok(bounds.maxY - bounds.minY >= 18 && bounds.maxY - bounds.minY <= 26, `${name} arrowhead height stays visible and compact`);
  arrowBounds.set(name, bounds);
}

const svgLabels = svgNodes.filter((node) => node.tagName === 'text' && attr(node, 'data-label'));
assert.deepEqual(svgLabels.map((node) => attr(node, 'data-label')).sort(), ['lake-gate', 'rail-gate', 'ridge', 'start-node']);
const labelBounds = svgLabels.map((node) => {
  const labelText = text(node).trim();
  const fontSize = Number(attr(node, 'font-size'));
  const letterSpacing = Number(attr(node, 'letter-spacing'));
  const width = labelText.length * (fontSize * 0.85 + letterSpacing);
  const centerX = Number(attr(node, 'x'));
  const baselineY = Number(attr(node, 'y'));
  assert.equal(attr(node, 'text-anchor') || attr(node.parentNode, 'text-anchor'), 'middle');
  return { minX: centerX - width / 2, maxX: centerX + width / 2, minY: baselineY - fontSize, maxY: baselineY + fontSize * 0.25 };
});
for (const [name, bounds] of arrowBounds) {
  for (const label of labelBounds) assert.ok(!intersects(bounds, label, 8), `${name} arrowhead clears all four SVG labels`);
}

const lakeArrowTip = expectedArrowTips.get('lake-gate');
const railArrowTip = expectedArrowTips.get('rail-gate');
const lakeGateClearance = Math.hypot(lakeArrowTip[0] - 1055, lakeArrowTip[1] - 287) - 52 - 7;
const railGateClearance = Math.hypot(railArrowTip[0] - 1267, railArrowTip[1] - 656) - 52 - 7;
assert.ok(lakeGateClearance >= 20, 'the lake-gateway arrow clears the outer node ring');
assert.ok(railGateClearance >= 12, 'the rail-gateway arrow clears the outer node ring');

const trainObstacle = svgNodes.find((node) => node.tagName === 'g' && attr(node, 'data-obstacle') === 'rail-gate-train');
assert.ok(trainObstacle, 'the rail-train symbol is marked for route-clearance regression');
const [trainMinX, trainMinY, trainMaxX, trainMaxY] = attr(trainObstacle, 'data-bounds').split(/\s+/).map(Number);
const trainBounds = { minX: trainMinX, minY: trainMinY, maxX: trainMaxX, maxY: trainMaxY };
const railRoute = targetByName.get('rail-gate');
const railSegments = svgCubicSegments(attr(railRoute, 'd'));
assert.ok(railSegments.length >= 3, 'rail approach keeps a shaped route around the station symbol');
for (const segment of railSegments) {
  for (let step = 0; step <= 100; step++) {
    const [x, y] = cubicPoint(segment, step / 100);
    assert.ok(!(x >= trainMinX - 8 && x <= trainMaxX + 8 && y >= trainMinY - 8 && y <= trainMaxY + 8), 'the gold rail approach clears the train symbol and its stroke');
  }
}
assert.ok(!intersects(arrowBounds.get('rail-gate'), trainBounds, 8), 'the rail-gateway arrow clears the train symbol');

const captionFrame = svgNodes.find((node) => node.tagName === 'rect' && attr(node, 'data-caption-frame') === 'conceptual-scale');
const caption = svgNodes.find((node) => node.tagName === 'text' && attr(node, 'data-caption-text') === 'conceptual-scale');
assert.ok(captionFrame && caption, 'the conceptual-scale caption has a named frame and text');
const frameX = Number(attr(captionFrame, 'x'));
const frameY = Number(attr(captionFrame, 'y'));
const frameWidth = Number(attr(captionFrame, 'width'));
const frameHeight = Number(attr(captionFrame, 'height'));
const captionX = Number(attr(caption, 'x'));
const captionY = Number(attr(caption, 'y'));
const captionFontSize = Number(attr(caption, 'font-size'));
const captionLength = Number(attr(caption, 'textLength'));
assert.equal(attr(captionFrame, 'fill'), '#183b4a');
assert.equal(attr(caption, 'fill'), '#fffdf8');
assert.match(text(caption), /CONCEPTUAL ROUTE SHAPES · NOT TO SCALE/);
assert.equal(attr(caption, 'text-anchor'), 'middle');
assert.equal(captionX, frameX + frameWidth / 2, 'caption text stays centered in its dark frame');
assert.ok(captionLength > 0 && captionLength <= frameWidth - 48, 'caption text length fits with at least 24 SVG units of side padding');
assert.ok(captionX - captionLength / 2 >= frameX + 24 && captionX + captionLength / 2 <= frameX + frameWidth - 24);
assert.ok(captionY - captionFontSize >= frameY + 4 && captionY + captionFontSize * 0.3 <= frameY + frameHeight - 4, 'caption baseline and glyph height stay within the dark frame');
assert.ok(frameY - arrowBounds.get('lucerne-lowland').maxY >= 70, 'the green lowland arrow clears the caption frame');

const englishCopies = new Map();
for (const locale of locales) {
  for (const route of routes) {
    const page = readPage('', locale, route);
    const main = page.nodes.find((node) => node.tagName === 'main');
    const body = text(main);
    assert.ok(body.trim().length > 700, `${locale.code} ${route} has substantive main copy`);
    assert.ok(articleNode(page.nodes), `${locale.code} ${route} has Article structured data`);
    const article = articleNode(page.nodes);
    assert.equal(article.datePublished, '2026-09-12', `${locale.code} ${route} publication date remains stable`);
    assert.equal(article.dateModified, '2026-10-12', `${locale.code} ${route} modification date`);

    const canonical = page.nodes.find((node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical');
    assert.equal(attr(canonical, 'href'), `https://tripdistill.com${locale.prefix}${route}`, `${locale.code} ${route} canonical`);
    for (const targetLocale of locales) {
      const alternate = page.nodes.find((node) => node.tagName === 'link' && attr(node, 'rel') === 'alternate' && attr(node, 'hreflang') === targetLocale.code);
      assert.equal(attr(alternate, 'href'), `https://tripdistill.com${targetLocale.prefix}${route}`, `${locale.code} ${route} ${targetLocale.code} alternate`);
    }

    const searchUrl = `${locale.prefix}${route}`;
    const searchFile = path.join(root, locale.prefix.replace(/^\//, ''), 'data/search-index.json');
    const search = JSON.parse(fs.readFileSync(searchFile, 'utf8'));
    const matches = search.filter((record) => record.url === searchUrl);
    assert.equal(matches.length, 1, `${locale.code} ${route} has one search record`);
    assert.equal(matches[0].summary, article.description, `${locale.code} ${route} search summary matches the structured article description`);
    assert.ok(matches[0].keywords.length > 0, `${locale.code} ${route} keeps search keywords`);
    if (locale.code === 'en') englishCopies.set(route, body);
    else assert.notEqual(matches[0].summary, JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8')).find((record) => record.url === route)?.summary,
      `${locale.code} ${route} search summary is translated`);

    if (route.endsWith('/rigi-lake-circuit/')) {
      assert.ok(page.html.includes(diagramPath), `${locale.code} Rigi page displays the original SVG`);
      assert.ok(page.nodes.some((node) => node.tagName === 'p' && attr(node, 'class') === 'ch-diagram-note' && text(node).trim().length > 80),
        `${locale.code} Rigi page displays a localized, substantive SVG legend`);
      assert.ok(!page.html.includes(retiredPhotoPath), `${locale.code} Rigi page does not load the retired Bürgenstock photo`);
      assert.ok(page.html.includes('terms-of-use'), `${locale.code} Rigi page shows the project-original rights note`);
    } else {
      assert.ok(page.nodes.some((node) => node.tagName === 'small' && attr(node, 'class') === 'ch-diagram-card-note' && text(node).trim().length > 60),
        `${locale.code} ${route} displays the localized diagram key beside its SVG card`);
    }
  }
}

const EnglishRequirements = {
  '/switzerland/lucerne-lake-mountains/': ['Two nights', 'Three nights', 'Bahnhofquai', 'VBL bus 1', 'Alpnachstad', 'MeteoSwiss'],
  '/switzerland/lucerne-lake-mountains/old-town-lakefront/': ['Bahnhofquai', 'Kapellbrücke', 'Kornmarkt', 'Weinmarkt', 'Spreuerbrücke', 'Museggmauer'],
  '/switzerland/lucerne-lake-mountains/pilatus-round-trip/': ['Bus 1', 'stand A', 'S5', 'pier 2', '19 October', '27 November'],
  '/switzerland/lucerne-lake-mountains/rigi-lake-circuit/': ['Vitznau', 'Arth-Goldau', 'SBB', 'seasonal timetable', 'MeteoSwiss']
};
for (const [route, phrases] of Object.entries(EnglishRequirements)) {
  const body = englishCopies.get(route) || '';
  for (const phrase of phrases) assert.ok(body.includes(phrase), `${route} must retain the route-specific detail “${phrase}”`);
}

const baseWordCounts = {};
let totalWordGain = 0;
for (const route of routes) {
  const file = route.slice(1) + 'index.html';
  const before = execFileSync('git', ['show', `${baseCommit}:${file}`], { cwd: root, encoding: 'utf8' });
  const after = fs.readFileSync(path.join(root, file), 'utf8');
  const delta = mainWordCount(after) - mainWordCount(before);
  assert.ok(delta > 300, `${route} must add substantive body copy`);
  baseWordCounts[route] = delta;
  totalWordGain += delta;
}
assert.ok(totalWordGain >= 2000, 'rendered English main-text copy must materially grow against the exact base');

const liveRigiImage = switzerlandImageManifest['lucerne-lake-mountains/rigi-lake-circuit'];
assert.equal(liveRigiImage.src, diagramPath, 'Rigi guide must use the original planning diagram');
assert.equal(liveRigiImage.assetType, 'original-planning-diagram');
assert.equal(liveRigiImage.license, null, 'do not imply a separate SVG reuse license');
assert.match(liveRigiImage.rightsStatus, /no separate reuse license declared/i);
assert.match(liveRigiImage.localSha1, /^[a-f0-9]{40}$/);
const retiredRecord = switzerlandRetiredImageRecords.lucerneRigiView;
const retiredFile = path.join(root, retiredPhotoPath.slice(1));
assert.ok(fs.existsSync(retiredFile), 'preserve the retired WebP bytes');
assert.equal(crypto.createHash('sha1').update(fs.readFileSync(retiredFile)).digest('hex'), retiredPhotoSha1, 'retired WebP bytes remain unchanged');
assert.equal(retiredRecord.src, retiredPhotoPath);
assert.equal(retiredRecord.inventoryStatus, 'unused');
assert.match(retiredRecord.retirementNote, /Bürgenstock\/Felsenweg.*Mount Rigi/i);

const inventoryPath = path.join(root, 'reports/photo-license-inventory.json');
assert.ok(fs.existsSync(inventoryPath), 'full audit must generate the image inventory');
const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
const provenance = inventory.entries.flatMap((entry) => entry.sourceRecords || []);
const svgRecord = provenance.find((record) => record.assetPath === diagramPath);
const retiredInventoryRecord = provenance.find((record) => record.assetPath === retiredPhotoPath);
assert.ok(svgRecord, 'inventory must include the new SVG source record');
assert.equal(svgRecord.assetType, 'original-planning-diagram');
assert.equal(svgRecord.creator, 'TripDistill Editorial Team');
assert.equal(svgRecord.license, null);
assert.equal(svgRecord.useCount, 4);
assert.ok(retiredInventoryRecord, 'inventory retains the retired photo provenance');
assert.equal(retiredInventoryRecord.inventoryStatus, 'unused');
assert.equal(retiredInventoryRecord.useCount, 0);

for (const locale of locales) {
  for (const route of routes) {
    const page = readPage('dist', locale, route);
    assert.ok(articleNode(page.nodes), `dist ${locale.code} ${route} exists`);
    assert.equal(articleNode(page.nodes).dateModified, '2026-10-12', `dist ${locale.code} ${route} date`);
  }
}

console.log(`Switzerland Lucerne regression passed: ${routes.length} existing routes, five locales, 20 sitemap dates, ${totalWordGain} added English main-text words; per-route: ${JSON.stringify(baseWordCounts)}.`);
