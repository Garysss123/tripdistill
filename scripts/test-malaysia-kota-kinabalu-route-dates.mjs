#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { malaysiaDepthGuides } from '../data/malaysia-depth-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const hub = '/malaysia/kota-kinabalu-tunku-abdul-rahman/';
const routes = [
  hub,
  `${hub}gaya-street-waterfront/`,
  `${hub}tanjung-aru-museum/`,
  `${hub}manukan-mamutik/`,
  `${hub}sapi-gaya-islands/`
];
const locales = ['', 'zh', 'ja', 'ko', 'th'];
const guides = new Map(malaysiaDepthGuides.map((guide) => [guide.url, guide]));
const sourceSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapRows = new Map([...sitemap.matchAll(/<loc>(.*?)<\/loc>\s*<lastmod>(.*?)<\/lastmod>/gs)].map(([, url, date]) => [url, date]));

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

function localizedPath(locale, route) {
  return `${locale ? `/${locale}` : ''}${route}`;
}

const normalizedSearchRoutes = new Map();
for (const locale of locales) {
  const searchPath = locale ? `${locale}/data/search-index.json` : 'data/search-index.json';
  const rows = JSON.parse(fs.readFileSync(path.join(root, searchPath), 'utf8'));
  normalizedSearchRoutes.set(locale, rows.map((row) => row.url.replace(/^\/(?:zh|ja|ko|th)(?=\/)/, '')));
}
for (const locale of locales.slice(1)) {
  assert.deepEqual([...normalizedSearchRoutes.get(locale)].sort(), [...normalizedSearchRoutes.get('')].sort(), `${locale} search index keeps the same route inventory`);
}

for (const route of routes) {
  const guide = guides.get(route);
  if (route !== hub) {
    assert.ok(guide, `source data includes ${route}`);
    assert.equal(guide.reviewedOnIso, '2026-10-12', `${route} source review date is current`);
  }

  const sourceHtmlPath = path.join(root, route.slice(1), 'index.html');
  const sourceHtml = fs.readFileSync(sourceHtmlPath, 'utf8');
  const sourceDoc = parse(sourceHtml);
  const sourceSchemas = elements(sourceDoc, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json');
  assert.equal(sourceSchemas.length, 1, `${route} has one structured-data block`);
  const sourceGraph = JSON.parse(sourceSchemas[0].childNodes[0].value)['@graph'];
  assert.equal(sourceGraph.find((node) => node['@type'] === 'TravelGuide').dateModified, '2026-10-12', `${route} structured date is current`);
  assert.ok(sourceHtml.includes('reviewed 12 October 2026'), `${route} shows the English review date`);

  const englishRecord = sourceSearch.find((row) => row.url === route);
  assert.ok(englishRecord, `${route} is in the English search index`);
  if (guide) {
    const image = elements(sourceDoc, (node) => node.tagName === 'img').find((node) => attrs(node).src === guide.image.src);
    assert.ok(image, `${route} uses its recorded lead image`);
    assert.ok(attrs(image).alt && attrs(image).alt.length > 24, `${route} lead image has descriptive alt text`);
    assert.ok(sourceHtml.includes(guide.image.source), `${route} retains its exact image source link`);
    assert.ok(sourceHtml.includes(guide.image.creator) && sourceHtml.includes(guide.image.license), `${route} retains creator and license credit`);
  }

  for (const locale of locales) {
    const pathRoute = localizedPath(locale, route);
    const url = `https://tripdistill.com${pathRoute}`;
    assert.equal(sitemapRows.get(url), '2026-10-12', `${pathRoute} sitemap lastmod is current`);
    const filePath = locale ? `${locale}${route}` : route.slice(1);
    const html = fs.readFileSync(path.join(root, filePath, 'index.html'), 'utf8');
    const document = parse(html);
    const schemas = elements(document, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json');
    assert.equal(schemas.length, 1, `${pathRoute} has one structured-data block`);
    const graph = JSON.parse(schemas[0].childNodes[0].value)['@graph'];
    assert.equal(graph.find((node) => node['@type'] === 'TravelGuide').dateModified, '2026-10-12', `${pathRoute} structured date is current`);

    const localizedSearchPath = locale ? `${locale}/data/search-index.json` : 'data/search-index.json';
    const localizedRows = JSON.parse(fs.readFileSync(path.join(root, localizedSearchPath), 'utf8'));
    const localizedRecord = localizedRows.find((row) => row.url === pathRoute);
    assert.ok(localizedRecord, `${pathRoute} is in its search index`);
    if (locale) {
      assert.notEqual(localizedRecord.title, englishRecord.title, `${pathRoute} search title is translated`);
      assert.notEqual(localizedRecord.summary, englishRecord.summary, `${pathRoute} search summary is translated`);
      assert.notEqual(localizedRecord.parent, englishRecord.parent, `${pathRoute} search section is translated`);
      assert.notDeepEqual(localizedRecord.keywords, englishRecord.keywords, `${pathRoute} search keywords are translated`);
      if (guide) {
        const englishImage = elements(sourceDoc, (node) => node.tagName === 'img').find((node) => attrs(node).src === guide.image.src);
        const localizedImage = elements(document, (node) => node.tagName === 'img').find((node) => attrs(node).src === guide.image.src);
        assert.ok(localizedImage, `${pathRoute} retains the lead image`);
        assert.notEqual(attrs(localizedImage).alt, attrs(englishImage).alt, `${pathRoute} lead-image alt text is translated`);
        assert.ok(html.includes(guide.image.creator) && html.includes(guide.image.license), `${pathRoute} retains the visible image credit`);
      }
    }
  }
}

console.log(`Kota Kinabalu/Tunku Abdul Rahman date, image-credit, search and locale regressions passed: ${routes.length} routes × ${locales.length} language editions.`);
