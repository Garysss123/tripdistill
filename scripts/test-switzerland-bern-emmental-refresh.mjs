#!/usr/bin/env node
import { isGreeceRoutePath } from './greece-route-test-utils.mjs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { switzerlandImageManifest, switzerlandRetiredImageRecords } from '../data/switzerland-image-manifest.mjs';
import { switzerlandCh15Routes, switzerlandCh16Routes } from './switzerland-ch15-scope.mjs';
import { SaxesParser } from 'saxes';

const root = path.resolve(import.meta.dirname, '..');
const baseCommit = '1d6da4bf2fff506f290b2132b093f124d4252289';
const routes = [
  '/switzerland/bern-emmental/',
  '/switzerland/bern-emmental/old-city-aare/',
  '/switzerland/bern-emmental/museums-rose-garden/',
  '/switzerland/bern-emmental/emmental-day-trip/'
];
const locales = [
  { code: 'en', prefix: '' },
  { code: 'zh-Hant', prefix: '/zh' },
  { code: 'ja', prefix: '/ja' },
  { code: 'ko', prefix: '/ko' },
  { code: 'th', prefix: '/th' }
];
const protectedImages = [
  ['assets/images/switzerland-lucerne-lake-mountains-rigi-route-choice.svg', '20c0023e15bd8178f6d89e7837ce774c3522620c'],
  ['assets/images/tripdistill-zermatt-glacier-route-choice.svg', '2566e88965470810f8ae997d2a69f501aa7e3a35'],
  ['assets/images/switzerland-bern-emmental-emmental-day-trip.webp', baseCommit]
];
const diagramPath = '/assets/images/switzerland-bern-emmental-gateway-choices.svg';
const diagramSha1 = 'e0111ab8ddc5345216d6cc4cec956dde4a0c6a6a';

function walk(node, out = []) {
  out.push(node);
  for (const child of node.childNodes || []) walk(child, out);
  return out;
}
function attr(node, name) { return node?.attrs?.find((item) => item.name === name)?.value; }
function text(node) {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value;
  return (node.childNodes || []).map(text).join(' ');
}
function routeFile(locale, route) {
  return path.join(root, locale.prefix.replace(/^\//, ''), route.slice(1), 'index.html');
}
function readPage(locale, route) {
  const file = routeFile(locale, route);
  assert.ok(fs.existsSync(file), `missing ${locale.code} page ${route}`);
  const html = fs.readFileSync(file, 'utf8');
  return { html, nodes: walk(parse(html)), file };
}
function articleNode(nodes) {
  for (const script of nodes.filter((node) => node.tagName === 'script' && attr(node, 'type') === 'application/ld+json')) {
    try {
      const data = JSON.parse(text(script));
      const graph = Array.isArray(data['@graph']) ? data['@graph'] : [data];
      const article = graph.find((item) => item['@type'] === 'Article');
      if (article) return article;
    } catch {}
  }
  return null;
}
function sitemapRecords(xml) {
  return new Map([...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)]
    .map((match) => [match[1], match[2]]));
}
function mainWordCount(html) {
  const main = walk(parse(html)).find((node) => node.tagName === 'main');
  assert.ok(main, 'page needs a main landmark');
  return text(main).trim().split(/\s+/).filter(Boolean).length;
}

const baseSitemap = execFileSync('git', ['show', `${baseCommit}:sitemap.xml`], { cwd: root, encoding: 'utf8' });
const currentSitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const baseRecords = sitemapRecords(baseSitemap);
const currentRecords = sitemapRecords(currentSitemap);
assert.equal(baseRecords.size, 4560, 'starting sitemap has 4,560 URLs');
assert.equal(currentRecords.size, baseRecords.size + 330, 'the exact Spain and Greece release adds 330 localized URLs');
assert.deepEqual([...currentRecords.keys()].filter((url) => !url.includes('/spain/') && !isGreeceRoutePath(url)).sort(), [...baseRecords.keys()].sort(), 'no route was added or removed');
const baselRoutes = [
  '/switzerland/basel-rhine/',
  '/switzerland/basel-rhine/old-town-rhine/',
  '/switzerland/basel-rhine/art-museums/',
  '/switzerland/basel-rhine/kleinbasel-border-rhine/'
];
const stMoritzRoutes = [
  '/switzerland/st-moritz-engadin/',
  '/switzerland/st-moritz-engadin/st-moritz-lakes/',
  '/switzerland/st-moritz-engadin/bernina-pontresina/',
  '/switzerland/st-moritz-engadin/muottas-diavolezza/'
];
const stGallenRoutes = [
  '/switzerland/st-gallen-appenzell/',
  '/switzerland/st-gallen-appenzell/st-gallen-abbey/',
  '/switzerland/st-gallen-appenzell/appenzell-village/',
  '/switzerland/st-gallen-appenzell/ebenalp-seealpsee/'
];
const graubuendenRoutes = [
  '/switzerland/graubunden-corridors/',
  '/switzerland/graubunden-corridors/chur-rhine-gorge/',
  '/switzerland/graubunden-corridors/davos-parsenn/',
  '/switzerland/graubunden-corridors/arosa-line/'
];
const ch14HubRoutes = ['/switzerland/lugano-southern-ticino/', '/switzerland/locarno-ascona-valleys/', '/switzerland/schaffhausen-rhine-falls/'];
const expectedDateChanges = new Set(locales.flatMap((locale) => [...routes, ...baselRoutes, ...stMoritzRoutes, ...stGallenRoutes, ...graubuendenRoutes, ...ch14HubRoutes, ...switzerlandCh15Routes, ...switzerlandCh16Routes].map((route) => `https://tripdistill.com${locale.prefix}${route}`)));
const dateChanges = [...currentRecords].filter(([url, date]) => !url.includes('/spain/') && !isGreeceRoutePath(url) && url.includes('/switzerland/') && baseRecords.get(url) !== date);
assert.equal(dateChanges.length, 160, 'the cumulative Bern/Emmental, Basel and CH11–CH16 routes receive only their expected edition dates');
for (const [url, date] of dateChanges) {
  assert.ok(expectedDateChanges.has(url), `unexpected sitemap date change: ${url}`);
  assert.equal(date, '2026-10-12', `Bern/Emmental review date for ${url}`);
}

const englishBodies = new Map();
for (const locale of locales) {
  const searchFile = path.join(root, locale.prefix.replace(/^\//, ''), 'data/search-index.json');
  const search = JSON.parse(fs.readFileSync(searchFile, 'utf8'));
  const englishSearch = locale.code === 'en'
    ? search
    : JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));

  for (const route of routes) {
    const page = readPage(locale, route);
    const body = text(page.nodes.find((node) => node.tagName === 'main'));
    assert.ok(body.trim().length > 700, `${locale.code} ${route} has substantial page copy`);
    const htmlNode = page.nodes.find((node) => node.tagName === 'html');
    assert.equal(attr(htmlNode, 'lang'), locale.code, `${locale.code} document language`);

    const article = articleNode(page.nodes);
    assert.ok(article, `${locale.code} ${route} has Article JSON-LD`);
    assert.equal(article.datePublished, '2026-09-12', `${locale.code} publication date remains stable`);
    assert.equal(article.dateModified, '2026-10-12', `${locale.code} current review date`);
    const canonical = page.nodes.find((node) => node.tagName === 'link' && attr(node, 'rel') === 'canonical');
    assert.equal(attr(canonical, 'href'), `https://tripdistill.com${locale.prefix}${route}`, `${locale.code} canonical`);
    for (const target of locales) {
      const alternate = page.nodes.find((node) => node.tagName === 'link' && attr(node, 'rel') === 'alternate' && attr(node, 'hreflang') === target.code);
      assert.equal(attr(alternate, 'href'), `https://tripdistill.com${target.prefix}${route}`, `${locale.code} ${target.code} alternate`);
    }

    const searchUrl = `${locale.prefix}${route}`;
    const matches = search.filter((record) => record.url === searchUrl);
    assert.equal(matches.length, 1, `${locale.code} ${route} has one search entry`);
    assert.equal(matches[0].summary, article.description, `${locale.code} search description matches Article metadata`);
    assert.ok(matches[0].keywords.length > 0, `${locale.code} keeps route search keywords`);
    if (locale.code === 'en') englishBodies.set(route, body);
    else {
      assert.notEqual(matches[0].summary, englishSearch.find((record) => record.url === route)?.summary, `${locale.code} search summary is translated`);
      assert.ok(/[\u3400-\u9fff\u3040-\u30ff\uac00-\ud7af\u0e00-\u0e7f]/u.test(body), `${locale.code} has native-script body text`);
    }

    const hero = page.nodes.find((node) => node.tagName === 'img' && attr(node, 'fetchpriority') === 'high');
    assert.ok(hero && attr(hero, 'alt')?.trim(), `${locale.code} ${route} has a described hero image`);
    assert.ok(page.nodes.some((node) => node.tagName === 'a' && /^https:\/\/(?:bern\.com|www\.sbb\.ch|www\.bernmobil\.ch|whc\.unesco\.org|www\.emmentaler-schaukaeserei\.ch|www\.bls\.ch|www\.mybuxi\.ch)/.test(attr(node, 'href') || '')), `${locale.code} ${route} links current operator or heritage sources`);

    if (route.endsWith('/emmental-day-trip/')) {
      assert.equal(attr(hero, 'src'), diagramPath, `${locale.code} Emmental guide uses the original route schematic`);
      assert.notEqual(attr(hero, 'alt'), switzerlandRetiredImageRecords.bernEmmentalMismatch.alt, `${locale.code} does not show the retired image alternative`);
      assert.ok(page.nodes.some((node) => node.tagName === 'p' && attr(node, 'class') === 'ch-diagram-note' && text(node).trim().length > 60), `${locale.code} has a visible translated route legend`);
      assert.ok(!page.html.includes(switzerlandRetiredImageRecords.bernEmmentalMismatch.src), `${locale.code} does not render the mismatched photograph`);
    }
    if (locale.code === 'en') {
      const creditText = page.nodes.map(text).join(' ');
      assert.ok(creditText.includes('TripDistill Editorial Team') && creditText.includes('no separate reuse license declared'), 'original SVG credit does not imply separate reuse clearance');
    }
  }
}

const requirements = {
  '/switzerland/bern-emmental/': ['Two nights', 'Three nights', 'four nights', 'Bahnhofplatz', 'Bern-Ticket', 'Gurtenbahn', 'S1/S31', 'Huttwil', 'Hasle-Rüegsau', 'BLS', 'mybuxi'],
  '/switzerland/bern-emmental/old-city-aare/': ['Bern Hauptbahnhof', 'Bundesplatz', 'Zytglogge', 'Kramgasse', 'Münsterplatz', 'Nydeggbrücke', 'six kilometres', 'Aare'],
  '/switzerland/bern-emmental/museums-rose-garden/': ['Bern History Museum', 'Zentrum Paul Klee', 'Rosengarten', 'Gurten', 'streetcar 9', 'S1/S31'],
  '/switzerland/bern-emmental/emmental-day-trip/': ['Burgdorf', 'Affoltern im Emmental', 'Huttwil', 'Hasle-Rüegsau', 'BLS', 'mybuxi', 'full day', 'working/private land']
};
for (const [route, phrases] of Object.entries(requirements)) {
  const body = englishBodies.get(route) || '';
  for (const phrase of phrases) assert.ok(body.includes(phrase), `${route} must retain “${phrase}”`);
  const file = route.slice(1) + 'index.html';
  const baseline = execFileSync('git', ['show', `${baseCommit}:${file}`], { cwd: root, encoding: 'utf8' });
  const current = fs.readFileSync(path.join(root, file), 'utf8');
  assert.ok(mainWordCount(current) - mainWordCount(baseline) > 150, `${route} adds substantive route planning detail`);
}

const countryCardLocaleExamples = {
  'zh-Hant': '伯恩與愛蒙塔爾適合',
  ja: 'ベルンとエメンタールは',
  ko: '베른과 에멘탈은',
  th: 'เบิร์นและเอมเมนทัลเหมาะ'
};
for (const locale of locales) {
  const overview = readPage(locale, '/switzerland/');
  const expectedHref = `${locale.prefix}/switzerland/bern-emmental/`;
  const card = overview.nodes.find((node) => node.tagName === 'a' && attr(node, 'href') === expectedHref);
  assert.ok(card, `${locale.code} overview still links the Bern hub`);
  if (locale.code !== 'en') assert.ok(text(card).includes(countryCardLocaleExamples[locale.code]), `${locale.code} dependent country card is translated`);
}

const activeImage = switzerlandImageManifest['bern-emmental/emmental-day-trip'];
assert.equal(activeImage.src, diagramPath, 'the Emmental guide has the newly authored diagram');
assert.equal(activeImage.assetType, 'original-planning-diagram');
assert.equal(activeImage.license, null, 'no separate SVG reuse license is declared');
assert.match(activeImage.rightsStatus, /no separate reuse license declared/i);
assert.equal(crypto.createHash('sha1').update(fs.readFileSync(path.join(root, diagramPath.slice(1)))).digest('hex'), diagramSha1, 'diagram hash matches its source record');
assert.equal(activeImage.localSha1, diagramSha1, 'diagram inventory hash matches its file');
const retired = switzerlandRetiredImageRecords.bernEmmentalMismatch;
assert.equal(retired.inventoryStatus, 'unused', 'mismatched photo is retained but disabled');
assert.equal(retired.license, null, 'retired record does not claim rights clearance');
assert.deepEqual(retired.sourceDeclaredLicenses, ['CC BY-SA 4.0'], 'source declaration remains historical metadata');
assert.equal(retired.localSha1, 'cec21b3831e0d8421e32b36a142f973a64f55f47');

for (const [relative, referenceCommit] of protectedImages) {
  const previous = execFileSync('git', ['show', `${referenceCommit}:${relative}`], { cwd: root });
  assert.deepEqual(fs.readFileSync(path.join(root, relative)), previous, `protected or archived image bytes stay unchanged: ${relative}`);
}

const svg = fs.readFileSync(path.join(root, diagramPath.slice(1)), 'utf8');
const tree = [];
const stack = [];
let parseError;
const xmlParser = new SaxesParser({ xmlns: true });
xmlParser.on('doctype', () => { throw new Error('DOCTYPE is forbidden in SVG input'); });
xmlParser.on('error', (error) => { parseError ??= error; });
xmlParser.on('opentag', (tag) => {
  const node = {
    tag: tag.local,
    uri: tag.uri,
    attrs: Object.fromEntries(Object.values(tag.attributes).map((attribute) => [attribute.name, attribute.value])),
    content: []
  };
  if (stack.length) stack.at(-1).content.push(node);
  else tree.push(node);
  stack.push(node);
});
xmlParser.on('text', (text) => { stack.at(-1)?.content.push(text); });
xmlParser.on('cdata', (text) => { stack.at(-1)?.content.push(text); });
xmlParser.on('closetag', () => { stack.pop(); });
xmlParser.write(svg).close();
assert.equal(parseError, undefined, 'SVG must parse as XML: ' + (parseError?.message || ''));
assert.equal(tree.length, 1, 'SVG XML has exactly one root element');
const flatten = (node) => [node, ...node.content.filter((item) => typeof item === 'object').flatMap(flatten)];
const textContent = (node) => node.content.map((item) => typeof item === 'string' ? item : textContent(item)).join('');
const svgRoot = tree[0];
const nodes = flatten(svgRoot);
assert.equal(svgRoot.tag, 'svg');
assert.equal(svgRoot.uri, 'http://www.w3.org/2000/svg');
assert.equal(svgRoot.attrs.viewBox, '0 0 1600 1066');
assert.equal(svgRoot.attrs.width, '1600');
assert.equal(svgRoot.attrs.height, '1066');
const allowed = new Set(['svg', 'title', 'desc', 'rect', 'line', 'circle', 'text']);
assert.ok(nodes.every((node) => allowed.has(node.tag)), 'only bounded vector/text geometry is allowed');
const texts = [];
for (const node of nodes) {
  const name = node.tag;
  const a = node.attrs;
  if (name === 'rect') {
    const x = Number(a.x || 0), y = Number(a.y || 0), w = Number(a.width), h = Number(a.height);
    assert.ok(x >= 0 && y >= 0 && x + w <= 1600 && y + h <= 1066, 'rectangle stays within the SVG viewBox');
  } else if (name === 'circle') {
    const x = Number(a.cx), y = Number(a.cy), radius = Number(a.r);
    assert.ok(x - radius >= 0 && y - radius >= 0 && x + radius <= 1600 && y + radius <= 1066, 'circle stays within the SVG viewBox');
  } else if (name === 'line') {
    const points = [Number(a.x1), Number(a.y1), Number(a.x2), Number(a.y2)];
    assert.ok(points[0] >= 0 && points[0] <= 1600 && points[2] >= 0 && points[2] <= 1600, 'line x coordinates stay within the SVG viewBox');
    assert.ok(points[1] >= 0 && points[1] <= 1066 && points[3] >= 0 && points[3] <= 1066, 'line y coordinates stay within the SVG viewBox');
  } else if (name === 'text') {
    const value = textContent(node).trim();
    assert(value);
    const size = Number(a['font-size'] || 16);
    let width = 0;
    for (const character of value) {
      if (/[\p{M}\p{Cf}]/u.test(character)) continue;
      const codepoint = character.codePointAt(0);
      if (codepoint >= 0x0e00 && codepoint <= 0x0e7f) width += size * 0.9;
      else if (
        (codepoint >= 0x1100 && codepoint <= 0x115f)
        || codepoint === 0x2329 || codepoint === 0x232a
        || (codepoint >= 0x2e80 && codepoint <= 0x303e)
        || (codepoint >= 0x3040 && codepoint <= 0xa4cf)
        || (codepoint >= 0xac00 && codepoint <= 0xd7a3)
        || (codepoint >= 0xf900 && codepoint <= 0xfaff)
        || (codepoint >= 0xfe10 && codepoint <= 0xfe19)
        || (codepoint >= 0xfe30 && codepoint <= 0xfe6f)
        || (codepoint >= 0xff00 && codepoint <= 0xff60)
        || (codepoint >= 0xffe0 && codepoint <= 0xffe6)
        || (codepoint >= 0x1f300 && codepoint <= 0x1faff)
        || (codepoint >= 0x20000 && codepoint <= 0x3fffd)
      ) width += size;
      else width += size * 0.56;
    }
    const x = Number(a.x);
    const anchor = a['text-anchor'] || 'start';
    const left = anchor === 'start' ? x : anchor === 'middle' ? x - width / 2 : x - width;
    assert.ok(left >= 0 && left + width <= 1600, 'SVG text fits the canvas: ' + value);
    const y = Number(a.y);
    assert.ok(y - size * 0.9 >= 0 && y + size * 0.25 <= 1066, 'SVG text fits the canvas vertically: ' + value);
    texts.push([a['data-language'], value]);
  }
}
const languages = new Set(texts.map(([language]) => language).filter(Boolean));
assert.deepEqual([...languages].sort(), ['en', 'ja', 'ko', 'th', 'zh-Hant']);
const visible = texts.map(([, value]) => value);
const visibleMarkers = [
  'Choose one gateway',
  '\u9078\u64c7\u4e00\u500b\u5165\u53e3',
  '\u5165\u53e3\u3092\u4e00\u3064\u9078\u3076',
  '\uac70\uc810 \ud558\ub098 \uc120\ud0dd',
  '\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e08\u0e38\u0e14\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e41\u0e2b\u0e48\u0e07'
];
assert.ok(visibleMarkers.every((marker) => visible.some((value) => value.includes(marker))), 'each language has its expected visible route-choice label');
const xmlResult = { stdout: JSON.stringify({ root: svgRoot.tag, elements: nodes.length, texts: texts.length, languages: [...languages].sort() }) };
console.log(`Bern/Emmental refresh regressions passed: 20 Bern/Emmental route-edition checks, ${dateChanges.length} cumulative sitemap dates including CH11–CH16, unchanged 4,560-URL inventory, five localized route/search editions, retired-photo preservation, protected Rigi/Zermatt diagrams, and XML geometry (${xmlResult.stdout.trim()}).`);
