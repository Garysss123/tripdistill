#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { malaysiaDepthGuides } from '../data/malaysia-depth-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const routes = [
  '/malaysia/george-town-penang/little-india-esplanade/',
  '/malaysia/cameron-highlands/ringlet-bertam-valley/',
  '/malaysia/ipoh-kinta-valley/batu-gajah-kellies-castle/',
  '/malaysia/langkawi/dayang-bunting-island/'
];
const locales = ['', 'zh', 'ja', 'ko', 'th'];
const diagramKeyExpectations = {
  '': {
    heading: 'Diagram key',
    langkawi: 'Freshwater lake: swim or use an activity only in areas staff currently permit',
    ipoh: 'Batu Gajah and Ipoh are ETS stations, not the castle gate'
  },
  zh: {
    heading: '圖示圖例',
    langkawi: '淡水湖：只在工作人員目前允許的區域游泳或參與活動',
    ipoh: '峇都牙也與怡保是 ETS 車站，不是古堡入口'
  },
  ja: {
    heading: '図の凡例',
    langkawi: '淡水湖：遊泳やアクティビティはスタッフが現在許可する場所だけで行い',
    ipoh: 'バトゥ・ガジャ駅とイポー駅はETS駅で、城の入口ではありません'
  },
  ko: {
    heading: '도식 범례',
    langkawi: '담수호: 직원이 현재 허용하는 구역에서만 수영하거나 활동하고',
    ipoh: '바투가자와 이포는 ETS 역이지 성 입구가 아니며'
  },
  th: {
    heading: 'คำอธิบายแผนผัง',
    langkawi: 'ทะเลสาบน้ำจืด: ว่ายน้ำหรือทำกิจกรรมเฉพาะบริเวณที่เจ้าหน้าที่อนุญาตในขณะนั้น',
    ipoh: 'บาตูกาจาห์และอีโปห์เป็นสถานี ETS ไม่ใช่ทางเข้าปราสาท'
  }
};
const records = new Map(malaysiaDepthGuides.map((guide) => [guide.url, guide]));
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const englishSearch = JSON.parse(fs.readFileSync(path.join(root, 'data', 'search-index.json'), 'utf8'));
const localizedSearch = new Map(locales.filter(Boolean).map((locale) => [
  locale,
  JSON.parse(fs.readFileSync(path.join(root, locale, 'data', 'search-index.json'), 'utf8'))
]));

function walk(node, visit) {
  visit(node);
  for (const child of node.childNodes || []) walk(child, visit);
}

function elements(document, predicate) {
  const found = [];
  walk(document, (node) => { if (node.tagName && predicate(node)) found.push(node); });
  return found;
}

function attrs(node) {
  return Object.fromEntries((node.attrs || []).map(({ name, value }) => [name, value]));
}

function textContent(node) {
  if (node.nodeName === '#text') return node.value || '';
  return (node.childNodes || []).map(textContent).join('');
}

for (const route of routes) {
  const guide = records.get(route);
  assert.ok(guide, `source data includes ${route}`);
  assert.equal(guide.reviewedOnIso, '2026-10-12', `${route} source review date is current`);
  assert.equal(guide.relatedImages, false, `${route} related cards do not display uncredited sibling photographs`);
  const sourceHtml = fs.readFileSync(path.join(root, route.slice(1), 'index.html'), 'utf8');
  const document = parse(sourceHtml);
  const schema = elements(document, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json');
  assert.equal(schema.length, 1, `${route} has one structured-data block`);
  const graph = JSON.parse(schema[0].childNodes[0].value)['@graph'];
  assert.equal(graph.find((node) => node['@type'] === 'TravelGuide').dateModified, '2026-10-12', `${route} structured date matches source`);
  assert.ok(sourceHtml.includes('reviewed 12 October 2026'), `${route} visible review date matches source`);
  const englishRecord = englishSearch.find((record) => record.url === route);
  assert.ok(englishRecord, `${route} is present in the English search index`);

  const diagram = guide.image.originalSchematic;
  const imageRows = elements(document, (node) => node.tagName === 'img');
  const hero = imageRows.find((node) => attrs(node).src === guide.image.src);
  assert.ok(hero, `${route} uses its source image`);
  if (diagram) {
    assert.ok(attrs(hero).alt && attrs(hero).alt.includes('not to scale'), `${route} diagram has a clear non-navigation alt note`);
    const imagePath = path.join(root, guide.image.src.slice(1));
    const svg = fs.readFileSync(imagePath, 'utf8');
    assert.match(svg, /TripDistill project original/);
    assert.match(svg, /not a geographic map and not to scale/i);
    assert.doesNotMatch(svg, /CC BY|Creative Commons|open license/i);
    const row = elements(document, (node) => node.tagName === 'li' && elements(node, (child) => child.tagName === 'a' && attrs(child).href === guide.image.source && attrs(child).href.endsWith(guide.image.src)).length > 0);
    assert.ok(row.length, `${route} visibly credits its exact original diagram source`);
    assert.ok(elements(row[0], (node) => node.tagName === 'a' && attrs(node).href === guide.image.rightsStatusUrl).length, `${route} links project-original rights status`);
    assert.ok(fs.statSync(imagePath).size > 0);
    const actualSha1 = crypto.createHash('sha1').update(fs.readFileSync(imagePath)).digest('hex');
    assert.equal(actualSha1, guide.image.localSha1, `${route} local image hash matches its recorded source-integrity value`);
    const legend = elements(document, (node) => node.tagName === 'aside' && attrs(node).class === 'md-diagram-legend');
    assert.equal(legend.length, 1, `${route} has one visible, page-side diagram key`);
    assert.ok(textContent(legend[0]).includes(diagramKeyExpectations[''].heading), `${route} English diagram key has a visible title`);
  } else {
    assert.ok(attrs(hero).alt && attrs(hero).alt.length > 24, `${route} photo has descriptive alternative text`);
    assert.ok(elements(document, (node) => node.tagName === 'li' && textContent(node).includes(guide.image.creator)).length, `${route} photo retains its visible creator credit`);
  }

  for (const locale of locales) {
    const localizedRoute = `${locale ? `/${locale}` : ''}${route}`;
    const localizedUrl = `https://tripdistill.com${localizedRoute}`;
    assert.ok(sitemap.includes(`<loc>${localizedUrl}</loc><lastmod>2026-10-12</lastmod>`), `${localizedRoute} sitemap lastmod is current`);
    const localePath = locale ? `${locale}${route}` : route.slice(1);
    const localizedHtml = fs.readFileSync(path.join(root, localePath, 'index.html'), 'utf8');
    const localizedDoc = parse(localizedHtml);
    const localizedSchemas = elements(localizedDoc, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json');
    const localizedGraph = JSON.parse(localizedSchemas[0].childNodes[0].value)['@graph'];
    assert.equal(localizedGraph.find((node) => node['@type'] === 'TravelGuide').dateModified, '2026-10-12', `${localizedRoute} structured date is current`);
    assert.ok(localizedHtml.includes(guide.image.src), `${localizedRoute} keeps the source image`);
    if (diagram) {
      const key = elements(localizedDoc, (node) => node.tagName === 'aside' && attrs(node).class === 'md-diagram-legend');
      assert.equal(key.length, 1, `${localizedRoute} retains the visible diagram key`);
      const expectedKey = diagramKeyExpectations[locale];
      const keyText = textContent(key[0]);
      assert.ok(keyText.includes(expectedKey.heading), `${localizedRoute} diagram key heading is translated`);
      assert.ok(keyText.includes(route.includes('/dayang-bunting-island/') ? expectedKey.langkawi : expectedKey.ipoh), `${localizedRoute} route-specific condition text is visible and translated`);
    }
    if (locale) {
      const localizedRecord = localizedSearch.get(locale)?.find((record) => record.url === localizedRoute);
      assert.ok(localizedRecord, `${localizedRoute} is present in the localized search index`);
      assert.notEqual(localizedRecord.title, englishRecord.title, `${localizedRoute} search title is translated`);
      assert.notEqual(localizedRecord.summary, englishRecord.summary, `${localizedRoute} search summary is translated`);
      assert.notEqual(localizedRecord.parent, englishRecord.parent, `${localizedRoute} search section label is translated`);
      if (diagram) assert.notEqual(attrs(elements(localizedDoc, (node) => node.tagName === 'img').find((node) => attrs(node).src === guide.image.src)).alt, guide.image.alt, `${localizedRoute} diagram alt is translated`);
    }
  }
}

console.log(`Malaysia fourth-child date and image regressions passed: ${routes.length} routes × ${locales.length} language editions.`);
