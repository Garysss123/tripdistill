#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { switzerlandImageManifest, switzerlandRetiredImageRecords } from '../data/switzerland-image-manifest.mjs';
import { switzerlandCh15Routes, switzerlandCh16Routes } from './switzerland-ch15-scope.mjs';
import { spawnPython3 } from './python-runner.mjs';

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
assert.equal(currentRecords.size, baseRecords.size + 165, 'the exact Spain release adds 165 localized URLs');
assert.deepEqual([...currentRecords.keys()].filter((url) => !url.includes('/spain/')).sort(), [...baseRecords.keys()].sort(), 'no route was added or removed');
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
const dateChanges = [...currentRecords].filter(([url, date]) => !url.includes('/spain/') && url.includes('/switzerland/') && baseRecords.get(url) !== date);
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
const xmlCheck = `
import json, sys, unicodedata, xml.etree.ElementTree as ET
root = ET.fromstring(sys.stdin.read())
tag = lambda node: node.tag.rsplit('}', 1)[-1]
assert tag(root) == 'svg'
assert root.attrib.get('viewBox') == '0 0 1600 1066'
assert root.attrib.get('width') == '1600' and root.attrib.get('height') == '1066'
allowed = {'svg','title','desc','rect','line','circle','text'}
nodes = list(root.iter())
assert all(tag(node) in allowed for node in nodes), 'only bounded vector/text geometry is allowed'
texts = []
for node in nodes:
    name = tag(node)
    a = node.attrib
    if name == 'rect':
        x,y,w,h = (float(a.get(k,'0')) for k in ('x','y','width','height'))
        assert x >= 0 and y >= 0 and x+w <= 1600 and y+h <= 1066
    elif name == 'circle':
        x,y,r = (float(a[k]) for k in ('cx','cy','r'))
        assert x-r >= 0 and y-r >= 0 and x+r <= 1600 and y+r <= 1066
    elif name == 'line':
        points = [float(a[k]) for k in ('x1','y1','x2','y2')]
        assert all(0 <= v <= 1600 for v in points[::2]) and all(0 <= v <= 1066 for v in points[1::2])
    elif name == 'text':
        value = ''.join(node.itertext()).strip()
        assert value
        size = float(a.get('font-size','16'))
        width = 0.0
        for ch in value:
            category = unicodedata.category(ch)
            if category in ('Mn','Mc','Me','Cf'):
                continue
            if '\u0e00' <= ch <= '\u0e7f':
                width += size * 0.9
            elif unicodedata.east_asian_width(ch) in ('W','F'):
                width += size
            else:
                width += size * 0.56
        x = float(a['x'])
        anchor = a.get('text-anchor','start')
        left = x if anchor == 'start' else x-width/2 if anchor == 'middle' else x-width
        assert left >= 0 and left+width <= 1600, (value, left, width)
        y = float(a['y'])
        assert y-size*0.9 >= 0 and y+size*0.25 <= 1066, (value, y, size)
        texts.append((a.get('data-language'), value))
languages = {lang for lang,value in texts if lang}
assert languages == {'en','zh-Hant','ja','ko','th'}
visible = [value for lang,value in texts]
assert all(any(marker in value for value in visible) for marker in ('Choose one gateway','選擇一個入口','入口を一つ選ぶ','거점 하나 선택','เลือกจุดเริ่มต้นหนึ่งแห่ง'))
print(json.dumps({'root': tag(root), 'elements': len(nodes), 'texts': len(texts), 'languages': sorted(languages)}))
`;
const xmlResult = spawnPython3(['-c', xmlCheck], { cwd: root, input: svg, encoding: 'utf8' });
assert.equal(xmlResult.status, 0, `SVG must parse as XML and fit its geometry: ${xmlResult.stderr}`);
console.log(`Bern/Emmental refresh regressions passed: 20 Bern/Emmental route-edition checks, ${dateChanges.length} cumulative sitemap dates including CH11–CH16, unchanged 4,560-URL inventory, five localized route/search editions, retired-photo preservation, protected Rigi/Zermatt diagrams, and XML geometry (${xmlResult.stdout.trim()}).`);
