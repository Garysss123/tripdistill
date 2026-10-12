#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { canadaClusters } from '../data/canada-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const cluster = canadaClusters.find((item) => item.slug === 'jasper-icefields');
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const locales = ['', '/zh', '/ja', '/ko', '/th'];
const routes = [`/canada/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)];
const datedRoutes = [...routes, '/canada/'];
check(routes.length === 4, `Expected one Jasper hub and its three existing guides, found ${routes.length}.`);
check(cluster.reviewDate === '12 October 2026' && cluster.isoDate === '2026-10-12', 'Jasper editorial review date must be 12 October 2026.');

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapDates = new Map([...sitemap.matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)].map((match) => [match[1], match[2]]));
const canadaSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8')).filter((record) => record.url.startsWith('/canada/'));
check(canadaSearch.length === 73 && new Set(canadaSearch.map((record) => record.url)).size === 73, 'Canada search must retain its 73 existing unique English routes.');
for (const route of routes) {
  const record = canadaSearch.find((item) => item.url === route);
  check(Boolean(record), `${route}: missing from Canada search index.`);
  if (record) check(record.summary.length >= 120 && record.keywords.length >= 4, `${route}: search summary or keywords are too thin.`);
}
check(canadaSearch.find((item) => item.url === '/canada/jasper-icefields/')?.summary.includes('four or five nights'), 'Jasper hub search summary must describe the stay decision.');
check(canadaSearch.find((item) => item.url.endsWith('/icefields-parkway/'))?.summary.includes('232 km'), 'Parkway search summary must include the verified route distance.');

function collect(node, output = []) {
  if (node.tagName === 'script' && node.attrs?.some((attr) => attr.name === 'type' && attr.value === 'application/ld+json')) {
    try { output.push(JSON.parse(node.childNodes?.map((child) => child.value || '').join('') || '')); }
    catch { errors.push('A Jasper page contains malformed JSON-LD.'); }
  }
  for (const child of node.childNodes || []) collect(child, output);
  return output;
}
for (const locale of locales) {
  for (const route of datedRoutes) {
    const localizedRoute = locale + route;
    check(sitemapDates.get(localizedRoute) === '2026-10-12', `${localizedRoute}: sitemap lastmod must be 2026-10-12.`);
    const file = path.join(root, localizedRoute.slice(1), 'index.html');
    check(fs.existsSync(file), `${localizedRoute}: localized page is missing.`);
    if (!fs.existsSync(file)) continue;
    const html = fs.readFileSync(file, 'utf8');
    const graph = collect(parse(html)).flatMap((item) => item['@graph'] || [item]);
    const article = graph.find((item) => item['@type'] === 'Article');
    check(article?.dateModified === '2026-10-12', `${localizedRoute}: Article dateModified must be 2026-10-12.`);
    check(html.includes(`rel="canonical" href="https://tripdistill.com${localizedRoute}"`), `${localizedRoute}: canonical URL mismatch.`);
  }
}
if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`CA08 date/search test failed with ${errors.length} error(s).`);
  process.exitCode = 1;
} else {
  console.log('CA08 date/search test passed: 4 Jasper routes plus the updated Canada index × 5 locales, Article metadata, canonical URLs, sitemap lastmod, and all 73 existing Canada search routes.');
}
