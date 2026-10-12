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
    assert.ok(crypto.createHash('sha1').update(fs.readFileSync(imagePath)).digest('hex'));
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
