import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { switzerlandClusters } from '../data/switzerland-guides.mjs';
import { switzerlandCh13ClusterRefresh, switzerlandCh13GuideRefresh } from '../data/switzerland-ch13-refresh.mjs';
import { switzerlandImageManifest } from '../data/switzerland-image-manifest.mjs';
import { localizeHtml, localizeSearchIndex, loadCatalog } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = '69d5db6a3ea0f7d9df100c698b0c854810726563';
const prefixes = ['', '/zh', '/ja', '/ko', '/th'];
const codes = ['en', 'zh-Hant', 'ja', 'ko', 'th'];
const routes = ['/switzerland/graubunden-corridors/', '/switzerland/graubunden-corridors/chur-rhine-gorge/', '/switzerland/graubunden-corridors/davos-parsenn/', '/switzerland/graubunden-corridors/arosa-line/'];
const target = new Set(routes);
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
for (const route of allRoutes.filter((item) => !target.has(item))) {
  const file = `${route.slice(1)}index.html`;
  assert.deepEqual(fs.readFileSync(path.join(root, file)), execFileSync('git', ['show', `${base}:${file}`], { cwd: root }), `${route} differs from the exact base`);
}

const before = sitemap(execFileSync('git', ['show', `${base}:sitemap.xml`], { cwd: root, encoding: 'utf8' }));
const after = sitemap(read('sitemap.xml'));
assert.equal(before.size, 4560);
assert.equal(after.size, before.size);
assert.deepEqual([...after.keys()].sort(), [...before.keys()].sort(), 'no sitemap URL changed');
const editions = new Set(prefixes.flatMap((prefix) => routes.map((route) => `${prefix}${route}`)));
const dateChanges = [...after].filter(([route, date]) => route.includes('/switzerland/') && before.get(route) !== date);
assert.equal(dateChanges.length, 20);
for (const [route, date] of dateChanges) {
  assert.ok(editions.has(route), `unexpected lastmod change: ${route}`);
  assert.equal(date, '2026-10-12');
}

const baseSearch = JSON.parse(execFileSync('git', ['show', `${base}:data/search-index.json`], { cwd: root, encoding: 'utf8' }));
const search = JSON.parse(read('data/search-index.json'));
const targetSearch = search.filter((item) => target.has(item.url));
assert.equal(targetSearch.length, 4);
for (const record of search.filter((item) => item.url.startsWith('/switzerland/') && !target.has(item.url))) {
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

const svgCheck = "import sys,xml.etree.ElementTree as E; r=E.parse(sys.argv[1]).getroot(); n=list(r.iter()); t=lambda x:x.tag.rsplit('}',1)[-1]; allowed={'svg','title','desc','rect','line','circle','text'}; assert r.tag.endswith('svg') and r.attrib.get('width')=='1600' and r.attrib.get('height')=='1066'; assert all(t(x) in allowed for x in n); assert all(float(x.attrib['x'])>=0 and float(x.attrib['y'])>=0 and float(x.attrib['x'])+float(x.attrib['width'])<=1600 and float(x.attrib['y'])+float(x.attrib['height'])<=1066 for x in n if t(x)=='rect'); assert all(0<=float(x.attrib[k])<=lim for x in n if t(x)=='line' for k,lim in [('x1',1600),('x2',1600),('y1',1066),('y2',1066)]); assert all(float(x.attrib['cx'])-float(x.attrib['r'])>=0 and float(x.attrib['cx'])+float(x.attrib['r'])<=1600 and float(x.attrib['cy'])-float(x.attrib['r'])>=0 and float(x.attrib['cy'])+float(x.attrib['r'])<=1066 for x in n if t(x)=='circle'); assert all(0<=float(x.attrib['x'])<=1600 and 0<=float(x.attrib['y'])<=1066 for x in n if t(x)=='text'); assert any(t(x)=='title' and x.text for x in n) and any(t(x)=='desc' and 'not geographic position' in x.text for x in n); exp={'en':['Red · Rhine Gorge rail / walk','Gold · Davos / Parsenn','Teal · Chur–Arosa rail','Fallback · Chur Old Town'],'zh-Hant':['紅色 · 萊茵峽谷鐵路／步行','金色 · 達沃斯／Parsenn','藍綠色 · 庫爾—阿羅薩鐵路','備案 · 庫爾舊城'],'ja':['赤・ライン峡谷の鉄道／徒歩','金・ダボス／パルゼン','青緑・クール—アローザ線','代替案・クール旧市街'],'ko':['빨강 · 라인 협곡 철도/도보','금색 · 다보스/파르젠','청록 · 쿠어–아로자 철도','대안 · 쿠어 구시가지'],'th':['สีแดง · รถไฟ/ทางเดินไรน์กอร์จ','สีทอง · ดาวอส/พาร์เซนน์','สีเขียวอมฟ้า · รถไฟคูร์–อาโรซา','แผนสำรอง · เมืองเก่าคูร์']}; assert all(sum(t(x)=='text' and x.attrib.get('data-language')==lang for x in n)==5 for lang in exp); assert all(any(label in (x.text or '') and x.attrib.get('data-language')==lang for x in n) for lang,labels in exp.items() for label in labels); assert all(any(t(x)=='line' and x.attrib.get('stroke')==color and x.attrib.get('y1')==y for x in n) for color,y in [('#d71920','390'),('#d7a94b','520'),('#416d75','650')])";
execFileSync('python3', ['-c', svgCheck, path.join(root, diagram.src.slice(1))], { cwd: root, stdio: 'pipe' });

for (const [index, prefix] of prefixes.entries()) {
  if (!prefix) continue;
  const code = codes[index];
  const earlierTranslations = previousTranslations(code);
  const localizedSearchFile = `${prefix.slice(1)}/data/search-index.json`;
  const localizedSearch = JSON.parse(read(localizedSearchFile));
  const nonTargetBaseSearch = baseSearch.filter((item) => item.url.startsWith('/switzerland/') && !target.has(item.url));
  const baseLocalizedSearch = localizeSearchIndex(nonTargetBaseSearch, earlierTranslations, code);
  for (const record of localizedSearch.filter((item) => item.url.startsWith(`${prefix}/switzerland/`) && !target.has(item.url.slice(prefix.length))) ) {
    assert.deepEqual(record, baseLocalizedSearch.find((item) => item.url === record.url), `${code} non-target search ${record.url} changed`);
  }
  for (const route of allRoutes.filter((item) => !target.has(item))) {
    const baseHtml = execFileSync('git', ['show', `${base}:${route.slice(1)}index.html`], { cwd: root, encoding: 'utf8' });
    const previousOutput = localizeHtml(baseHtml, earlierTranslations, code, route);
    assert.equal(read(path.relative(root, localizedPath(prefix, route))), previousOutput, `${prefix}${route} changed outside this batch`);
  }
}

console.log(`CH13 regression passed: four existing Graubünden pages, ${totalWords} visible English main-body words, exactly 20 dated edition URLs, 4,560 sitemap URLs, no URL changes, five-language metadata and search, all non-target pages and search records preserved, and supplemental SVG/retained-photo provenance checks.`);
