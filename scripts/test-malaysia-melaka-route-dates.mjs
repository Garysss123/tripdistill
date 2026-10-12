import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const date = '2026-10-12';
const routes = [
  '/malaysia/melaka/',
  '/malaysia/melaka/dutch-square-st-pauls/',
  '/malaysia/melaka/jonker-harmony-street/',
  '/malaysia/melaka/melaka-river-kampung-morten/',
  '/malaysia/melaka/bandar-hilir-portuguese-settlement/'
];
const routeSet = new Set(routes);

for (const route of routes) {
  const file = path.join(root, route.replace(/^\//, ''), 'index.html');
  assert.ok(fs.existsSync(file), `Missing existing English route: ${route}`);
  const html = fs.readFileSync(file, 'utf8');
  assert.match(html, new RegExp(`<link rel="canonical" href="https://tripdistill\\.com${route.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}">`), `Canonical changed: ${route}`);
  assert.ok(html.includes(`"dateModified":"${date}"`), `English JSON-LD date is stale: ${route}`);
}

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const localePrefix = /^\/(?:zh|ja|ko|th)(?=\/)/;
const melakaRecords = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].flatMap(([, block]) => {
  const location = block.match(/<loc>https:\/\/tripdistill\.com([^<]+)<\/loc>/)?.[1];
  if (!location || !routeSet.has(location.replace(localePrefix, ''))) return [];
  return [{ location, block }];
});
assert.equal(melakaRecords.length, routes.length * 5, 'Melaka sitemap must contain exactly the five existing routes in five editions');
for (const { location, block } of melakaRecords) {
  assert.match(block, new RegExp(`<lastmod>${date}</lastmod>`), `Sitemap date is stale: ${location}`);
}

const searchIndex = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const searchRecords = searchIndex.filter((record) => routeSet.has(record.url));
assert.equal(searchRecords.length, routes.length, 'Search index must contain exactly one existing record per Melaka route');
assert.equal(new Set(searchRecords.map((record) => record.url)).size, routes.length, 'Search index has duplicate Melaka URLs');

console.log(`Melaka route-date regression passed: ${routes.length} existing routes, ${melakaRecords.length} sitemap entries, and ${searchRecords.length} search records.`);
