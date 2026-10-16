import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { pacificRimCluster } from '../data/canada-pacific-rim-guide.mjs';

const root = path.resolve(import.meta.dirname, '..');
const locales = ['', '/zh', '/ja', '/ko', '/th'];
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const routes = [
  `/canada/${pacificRimCluster.slug}/`,
  ...pacificRimCluster.guides.map((guide) => guide.url)
];

check(routes.length === 4, `Expected one Pacific Rim hub and three existing children; found ${routes.length}.`);
check(pacificRimCluster.reviewDate === '12 October 2026' && pacificRimCluster.isoDate === '2026-10-12', 'Pacific Rim source review date must be 12 October 2026.');

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapDates = new Map([...sitemap.matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)].map((match) => [match[1], match[2]]));
const canadaSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8')).filter((record) => record.url.startsWith('/canada/'));
check(canadaSearch.length === 73 && new Set(canadaSearch.map((record) => record.url)).size === 73, 'Canada must remain at exactly 73 existing search routes.');
check(routes.every((route) => canadaSearch.some((record) => record.url === route)), 'The four Pacific Rim routes must remain in the Canada search index.');

function collect(node, output = []) {
  if (node.tagName === 'script' && node.attrs?.some((attr) => attr.name === 'type' && attr.value === 'application/ld+json')) {
    try { output.push(JSON.parse(node.childNodes?.map((child) => child.value || '').join('') || '')); }
    catch { errors.push('A Pacific Rim page contains malformed JSON-LD.'); }
  }
  for (const child of node.childNodes || []) collect(child, output);
  return output;
}

for (const locale of locales) {
  for (const route of routes) {
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
  console.error(`Pacific Rim route-date test failed with ${errors.length} error(s).`);
  process.exitCode = 1;
} else {
  console.log(`Pacific Rim date test passed: 4 existing routes × 5 locales, matching Article metadata, canonical URLs, sitemap lastmod, and 73 Canada search routes.`);
}
