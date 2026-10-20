import { isGreeceRoutePath } from './greece-route-test-utils.mjs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { switzerlandClusters } from '../data/switzerland-guides.mjs';
import { switzerlandCh13ClusterRefresh, switzerlandCh13GuideRefresh } from '../data/switzerland-ch13-refresh.mjs';
import { switzerlandImageManifest } from '../data/switzerland-image-manifest.mjs';
import { localizeHtml, localizeSearchIndex, loadCatalog } from './i18n-lib.mjs';
import { SaxesParser } from 'saxes';
import { switzerlandCh15AffectedRoutes, switzerlandCh15Routes, switzerlandCh16Routes } from './switzerland-ch15-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = '69d5db6a3ea0f7d9df100c698b0c854810726563';
const prefixes = ['', '/zh', '/ja', '/ko', '/th'];
const codes = ['en', 'zh-Hant', 'ja', 'ko', 'th'];
const routes = ['/switzerland/graubunden-corridors/', '/switzerland/graubunden-corridors/chur-rhine-gorge/', '/switzerland/graubunden-corridors/davos-parsenn/', '/switzerland/graubunden-corridors/arosa-line/'];
const target = new Set(routes);
const ch14Routes = ['/switzerland/', '/switzerland/lugano-southern-ticino/', '/switzerland/locarno-ascona-valleys/', '/switzerland/schaffhausen-rhine-falls/'];
const ch14Set = new Set(ch14Routes);
const ch14NewDateRoutes = ch14Routes.slice(1);
const cluster = switzerlandClusters.find((item) => item.slug === 'graubunden-corridors');
const allRoutes = ['/switzerland/', ...switzerlandClusters.flatMap((item) => [`/switzerland/${item.slug}/`, ...item.guides.map((guide) => guide.url)])];
const batchSuffix = '-ch13-graubunden-pages-20261012.json';
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const localizedPath = (prefix, route) => path.join(root, `${prefix}${route}`.slice(1), 'index.html');

function article(html) {
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const graph = JSON.parse(match[1]);
      const found = (Array.isArray(graph['@graph']) ? graph['@graph'] : [graph]).find((item) => item['@type'] === 'Article');
      if (found) return found;
    } catch {}
  }
  return null;
}
function sitemap(xml) {
  return new Map([...xml.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)].map((match) => [match[1], match[2]]));
}
function normalizeSharedAssetVersions(html) {
  return html
    .replace(/\/css\/site\.css\?v=[^"'\s]+/gu, '/css/site.css?v=<shared>')
    .replace(/\/js\/main\.js\?v=[^"'\s]+/gu, '/js/main.js?v=<shared>');
}
function words(html) {
  const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0] || '';
  const text = main.replace(/<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&(?:amp|lt|gt|quot|#39);/g, ' ').replace(/\s+/g, ' ').trim();
  return text ? text.split(' ').length : 0;
}
function previousTranslations(code) {
  const directory = path.join(root, 'data/i18n/reviewed', code);
  const merged = {};
  for (const name of fs.readdirSync(directory).filter((item) => item.endsWith('.json') && !item.endsWith(batchSuffix)).sort()) {
    const batch = JSON.parse(fs.readFileSync(path.join(directory, name), 'utf8'));
    if (batch.qualityStatus === 'reviewed') Object.assign(merged, batch.translations || {});
  }
  return merged;
}
assert.equal(routes.length, 4);
assert.equal(cluster.guides.length, 3);
assert.equal(switzerlandCh13ClusterRefresh.isoDate, '2026-10-12');
assert.equal(Object.keys(switzerlandCh13GuideRefresh).length, 3);
assert.equal(allRoutes.length, 65);
for (const route of allRoutes.filter((item) => !target.has(item) && !ch14Set.has(item) && !switzerlandCh15AffectedRoutes.includes(item) && !switzerlandCh16Routes.includes(item))) {
  const file = `${route.slice(1)}index.html`;
  assert.equal(normalizeSharedAssetVersions(fs.readFileSync(path.join(root, file), 'utf8')), normalizeSharedAssetVersions(execFileSync('git', ['show', `${base}:${file}`], { cwd: root, encoding: 'utf8' })), `${route} differs from the exact base apart from shared asset cache versions`);
}

const before = sitemap(execFileSync('git', ['show', `${base}:sitemap.xml`], { cwd: root, encoding: 'utf8' }));
const after = sitemap(read('sitemap.xml'));
assert.equal(before.size, 4560);
assert.equal(after.size, before.size + 330, 'the exact Spain and Greece release adds 330 localized URLs');
assert.deepEqual([...after.keys()].filter((url) => !url.includes('/spain/') && !isGreeceRoutePath(url)).sort(), [...before.keys()].sort(), 'no sitemap URL changed');
const editions = new Set(prefixes.flatMap((prefix) => [...routes, ...ch14NewDateRoutes, ...switzerlandCh15Routes, ...switzerlandCh16Routes].map((route) => `${prefix}${route}`)));
const dateChanges = [...after].filter(([route, date]) => route.includes('/switzerland/') && before.get(route) !== date);
assert.equal(dateChanges.length, 80, 'cumulative CH13 pages, three downstream CH14 hubs, four CH15 guides and five CH16 guides receive dates; the country date already matched the CH13 base');
for (const [route, date] of dateChanges) {
  assert.ok(editions.has(route), `unexpected lastmod change: ${route}`);
  assert.equal(date, '2026-10-12');
}

const baseSearch = JSON.parse(execFileSync('git', ['show', `${base}:data/search-index.json`], { cwd: root, encoding: 'utf8' }));
const search = JSON.parse(read('data/search-index.json'));
const targetSearch = search.filter((item) => target.has(item.url));
assert.equal(targetSearch.length, 4);
for (const record of search.filter((item) => item.url.startsWith('/switzerland/') && !target.has(item.url) && !ch14Set.has(item.url) && !switzerlandCh15Routes.includes(item.url) && !switzerlandCh16Routes.includes(item.url))) {
  assert.deepEqual(record, baseSearch.find((item) => item.url === record.url), `non-target search changed: ${record.url}`);
}
const perRouteFacts = {
  [routes[0]]: ['Davos Dorf', 'Reichenau-Tamins', 'SBB', 'MeteoSwiss'],
  [routes[1]]: ['Valendas-Sagogn', 'Versam-Safien', '1 April–15 July', 'MeteoSwiss'],
  [routes[2]]: ['Davos Dorf', 'Davos Platz', 'Parsennbahn', 'Landquart'],
  [routes[3]]: ['Arosa Lenzerheide', 'MeteoSwiss', 'RhB', 'SBB']
};
let totalWords = 0;
for (const route of routes) {
  const html = read(`${route.slice(1)}index.html`);
  const metadata = article(html);
  assert.ok(metadata, `${route} Article JSON-LD exists`);
  assert.equal(metadata.datePublished, '2026-09-12');
  assert.equal(metadata.dateModified, '2026-10-12');
  assert.ok(html.includes('Official sources and photo credits'));
  for (const phrase of perRouteFacts[route]) assert.ok(html.includes(phrase), `${route} includes ${phrase}`);
  const record = targetSearch.find((item) => item.url === route);
  assert.ok(record);
  assert.equal(record.summary, metadata.description);
  const count = words(html);
  totalWords += count;
  assert.ok(count > 650, `${route} planning body is too short (${count})`);
  for (const [index, prefix] of prefixes.entries()) {
    const url = `${prefix}${route}`;
    assert.ok(html.includes(`hreflang="${codes[index]}" href="https://tripdistill.com${url}"`));
    const localized = read(path.relative(root, localizedPath(prefix, route)));
    const localMetadata = article(localized);
    assert.ok(localized.includes(`<html lang="${codes[index]}"`));
    assert.ok(localMetadata);
    assert.equal(localMetadata.datePublished, '2026-09-12');
    assert.equal(localMetadata.dateModified, '2026-10-12');
    if (index > 0) {
      const translations = loadCatalog(codes[index]).translations;
      assert.ok(localized.includes(translations[record.summary]), `${url} contains its localized summary`);
      const localizedSearch = JSON.parse(read(`${prefix.slice(1)}/data/search-index.json`)).find((item) => item.url === url);
      assert.equal(localizedSearch.summary, translations[record.summary]);
    }
  }
}

for (const code of ['zh-Hant', 'ja', 'ko', 'th']) {
  const directory = path.join(root, 'data/i18n/reviewed', code);
  const name = fs.readdirSync(directory).find((item) => item.endsWith(batchSuffix));
  assert.ok(name);
  const batch = JSON.parse(fs.readFileSync(path.join(directory, name), 'utf8'));
  assert.equal(batch.qualityStatus, 'reviewed');
  assert.deepEqual(batch.routes, routes);
  assert.ok(Object.values(batch.translations).every((value) => typeof value === 'string' && value.trim()));
  assert.equal(batch.reviewProvenance.independentSecondModel, false);
  assert.ok(batch.reviewProvenance.writer.includes('runtime does not expose Luna variant'));
}

const diagram = switzerlandImageManifest['graubunden-corridors/corridor-choice-diagram'];
assert.equal(diagram.assetType, 'original-planning-diagram');
assert.equal(diagram.license, null);
assert.equal(diagram.rightsStatus, 'Project original; no separate reuse license declared');
assert.ok(fs.existsSync(path.join(root, diagram.src.slice(1))));
assert.equal(crypto.createHash('sha1').update(fs.readFileSync(path.join(root, diagram.src.slice(1)))).digest('hex'), diagram.localSha1);
const churPhoto = switzerlandImageManifest['graubunden-corridors/chur-rhine-gorge'];
assert.equal(churPhoto.assetType, undefined);
assert.equal(churPhoto.displayTitle, 'Chur Old Town, railway and river edge');
assert.equal(churPhoto.creator, 'Freaktalius');
assert.equal(churPhoto.license, 'CC BY-SA 4.0');
assert.equal(churPhoto.source, 'https://commons.wikimedia.org/wiki/File:Chur_(Altstadt).jpg');
assert.equal(crypto.createHash('sha1').update(fs.readFileSync(path.join(root, churPhoto.src.slice(1)))).digest('hex'), '1439bd3bfb0701253fe605ae5798a8ab68548d75');
const churGuide = read('switzerland/graubunden-corridors/chur-rhine-gorge/index.html');
assert.ok(churGuide.includes(diagram.src));
assert.ok(churGuide.includes(diagram.rightsStatus));
assert.ok(churGuide.includes(diagram.diagramNote));
assert.ok(churGuide.includes(churPhoto.src));

const expectedLabels = {"en":["Red · Rhine Gorge rail / walk","Gold · Davos / Parsenn","Teal · Chur–Arosa rail","Fallback · Chur Old Town"],"zh-Hant":["紅色 · 萊茵峽谷鐵路／步行","金色 · 達沃斯／Parsenn","藍綠色 · 庫爾—阿羅薩鐵路","備案 · 庫爾舊城"],"ja":["赤・ライン峡谷の鉄道／徒歩","金・ダボス／パルゼン","青緑・クール—アローザ線","代替案・クール旧市街"],"ko":["빨강 · 라인 협곡 철도/도보","금색 · 다보스/파르젠","청록 · 쿠어–아로자 철도","대안 · 쿠어 구시가지"],"th":["สีแดง · รถไฟ/ทางเดินไรน์กอร์จ","สีทอง · ดาวอส/พาร์เซนน์","สีเขียวอมฟ้า · รถไฟคูร์–อาโรซา","แผนสำรอง · เมืองเก่าคูร์"]};
function parseAndCheckSvg(relativePath, expectedDescription) {
  const svg = fs.readFileSync(path.join(root, relativePath), 'utf8');
  const roots = [];
  const stack = [];
  let parseError;
  const parser = new SaxesParser({ xmlns: true });
  parser.on('error', (error) => { parseError ??= error; });
  parser.on('opentag', (tag) => {
    const node = {
      tag: tag.local,
      uri: tag.uri,
      attrs: Object.fromEntries(Object.values(tag.attributes).map((attribute) => [attribute.name, attribute.value])),
      content: []
    };
    if (stack.length) stack.at(-1).content.push(node);
    else roots.push(node);
    stack.push(node);
  });
  parser.on('text', (value) => { stack.at(-1)?.content.push(value); });
  parser.on('cdata', (value) => { stack.at(-1)?.content.push(value); });
  parser.on('closetag', () => { stack.pop(); });
  parser.write(svg).close();
  assert.equal(parseError, undefined, 'SVG must parse as XML: ' + (parseError?.message || ''));
  assert.equal(roots.length, 1, 'SVG XML has exactly one root element');
  const flatten = (node) => [node, ...node.content.filter((item) => typeof item === 'object').flatMap(flatten)];
  const textContent = (node) => node.content.map((item) => typeof item === 'string' ? item : textContent(item)).join('');
  const rootNode = roots[0];
  const nodes = flatten(rootNode);
  assert.equal(rootNode.tag, 'svg');
  assert.equal(rootNode.attrs.width, '1600');
  assert.equal(rootNode.attrs.height, '1066');
  const allowed = new Set(['svg', 'title', 'desc', 'rect', 'line', 'circle', 'text']);
  assert.ok(nodes.every((node) => allowed.has(node.tag)), 'only bounded vector/text geometry is allowed');
  assert.ok(nodes.some((node) => node.tag === 'title' && textContent(node).trim()), 'SVG has a non-empty title');
  const description = nodes.filter((node) => node.tag === 'desc').map(textContent).join('');
  assert.ok(description.includes(expectedDescription), 'SVG description preserves its map disclaimer');
  const labels = nodes.filter((node) => node.tag === 'text').map((node) => [node.attrs['data-language'] || '', textContent(node)]);
  for (const node of nodes) {
    const a = node.attrs;
    if (node.tag === 'rect') {
      const [x, y, width, height] = [a.x, a.y, a.width, a.height].map(Number);
      assert.ok([x, y, width, height].every(Number.isFinite), 'rectangle coordinates are numeric');
      assert.ok(x >= 0 && y >= 0 && x + width <= 1600 && y + height <= 1066, 'rectangle stays within the SVG viewBox');
    } else if (node.tag === 'line') {
      const [x1, y1, x2, y2] = [a.x1, a.y1, a.x2, a.y2].map(Number);
      assert.ok([x1, y1, x2, y2].every(Number.isFinite), 'line coordinates are numeric');
      assert.ok(x1 >= 0 && x1 <= 1600 && x2 >= 0 && x2 <= 1600 && y1 >= 0 && y1 <= 1066 && y2 >= 0 && y2 <= 1066, 'line stays within the SVG viewBox');
    } else if (node.tag === 'circle') {
      const [cx, cy, radius] = [a.cx, a.cy, a.r].map(Number);
      assert.ok([cx, cy, radius].every(Number.isFinite), 'circle geometry is numeric');
      assert.ok(cx - radius >= 0 && cx + radius <= 1600 && cy - radius >= 0 && cy + radius <= 1066, 'circle stays within the SVG viewBox');
    } else if (node.tag === 'text') {
      const [x, y] = [a.x, a.y].map(Number);
      assert.ok(textContent(node).trim(), 'SVG label is non-empty');
      assert.ok(Number.isFinite(x) && Number.isFinite(y) && x >= 0 && x <= 1600 && y >= 0 && y <= 1066, 'SVG text anchor stays within the viewBox');
    }
  }
  return { nodes, labels };
}
const { nodes, labels } = parseAndCheckSvg(diagram.src.slice(1), 'not geographic position');
const languages = ['en', 'ja', 'ko', 'th', 'zh-Hant'];
assert.deepEqual([...new Set(labels.map(([language]) => language).filter(Boolean))].sort(), [...languages].sort());
for (const language of languages) {
  const localized = labels.filter(([code]) => code === language).map(([, value]) => value);
  assert.equal(localized.length, 5, language + ': SVG has exactly five text labels');
  for (const expected of expectedLabels[language]) assert.ok(localized.some((value) => value.includes(expected)), language + ': SVG is missing expected label ' + expected);
}
assert.ok(['#d71920:390', '#d7a94b:520', '#416d75:650'].every((marker) => {
  const [color, y] = marker.split(':');
  return nodes.some((node) => node.tag === 'line' && node.attrs.stroke === color && node.attrs.y1 === y);
}), 'SVG retains its three color-coded gateway route markers');

for (const [index, prefix] of prefixes.entries()) {
  if (!prefix) continue;
  const code = codes[index];
  const earlierTranslations = previousTranslations(code);
  const localizedSearchFile = `${prefix.slice(1)}/data/search-index.json`;
  const localizedSearch = JSON.parse(read(localizedSearchFile));
  const nonTargetBaseSearch = baseSearch.filter((item) => item.url.startsWith('/switzerland/') && !target.has(item.url) && !ch14Set.has(item.url) && !switzerlandCh15Routes.includes(item.url) && !switzerlandCh16Routes.includes(item.url));
  const baseLocalizedSearch = localizeSearchIndex(nonTargetBaseSearch, earlierTranslations, code);
  for (const record of localizedSearch.filter((item) => item.url.slice(prefix.length).startsWith('/switzerland/') && !target.has(item.url.slice(prefix.length)) && !ch14Set.has(item.url.slice(prefix.length)) && !switzerlandCh15Routes.includes(item.url.slice(prefix.length)) && !switzerlandCh16Routes.includes(item.url.slice(prefix.length))) ) {
    assert.deepEqual(record, baseLocalizedSearch.find((item) => item.url === record.url), `${code} non-target search ${record.url} changed`);
  }
  for (const route of allRoutes.filter((item) => !target.has(item) && !ch14Set.has(item) && !switzerlandCh15AffectedRoutes.includes(item) && !switzerlandCh16Routes.includes(item))) {
    const baseHtml = execFileSync('git', ['show', `${base}:${route.slice(1)}index.html`], { cwd: root, encoding: 'utf8' });
    const previousOutput = localizeHtml(baseHtml, earlierTranslations, code, route);
    assert.equal(normalizeSharedAssetVersions(read(path.relative(root, localizedPath(prefix, route)))), normalizeSharedAssetVersions(previousOutput), `${prefix}${route} changed outside this batch apart from shared asset cache versions`);
  }
}

console.log(`CH13 regression passed: four existing Graubünden pages, ${totalWords} visible English main-body words, ${editions.size} cumulative dated edition URLs including CH14–CH16, 4,560 sitemap URLs, no URL changes, five-language metadata and search, non-target pages/search preserved outside later edited routes, and supplemental SVG/retained-photo provenance checks.`);
