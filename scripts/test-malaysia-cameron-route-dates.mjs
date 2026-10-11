import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const reviewedDate = '2026-10-11';
const routes = [
  '/malaysia/cameron-highlands/',
  '/malaysia/cameron-highlands/tanah-rata-trails/',
  '/malaysia/cameron-highlands/brinchang-kea-farm/',
  '/malaysia/cameron-highlands/mossy-forest-gunung-brinchang/'
];
const localePrefixes = ['', '/zh', '/ja', '/ko', '/th'];
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');

function routeFile(prefix, route) {
  return path.join(root, `${prefix}${route}`, 'index.html');
}

function guideDate(html, route, prefix) {
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(match, `${route} must have a JSON-LD script`);
  const schema = JSON.parse(match[1]);
  const graph = schema['@graph'] || [schema];
  const guide = graph.find((node) => node['@type'] === 'TravelGuide');
  assert.ok(guide, `${route} must have TravelGuide structured data`);
  assert.equal(guide.url, `https://tripdistill.com${prefix}${route}`);
  return guide.dateModified;
}

for (const route of routes) {
  for (const prefix of localePrefixes) {
    const file = routeFile(prefix, route);
    assert.ok(fs.existsSync(file), `localized route must be generated: ${prefix}${route}`);
    const html = fs.readFileSync(file, 'utf8');
    assert.equal(guideDate(html, route, prefix), reviewedDate, `${prefix}${route} structured modification date`);
    for (const languagePrefix of ['', '/zh', '/ja', '/ko', '/th']) {
      const href = `href="https://tripdistill.com${languagePrefix}${route}"`;
      assert.ok(html.includes(href), `${prefix}${route} must retain reciprocal locale alternate ${href}`);
    }
    const sitemapUrl = `https://tripdistill.com${prefix}${route}`;
    const entry = new RegExp(`<url><loc>${escapeRegExp(sitemapUrl)}</loc><lastmod>([^<]+)</lastmod>`);
    const match = sitemap.match(entry);
    assert.ok(match, `sitemap must include ${sitemapUrl}`);
    assert.equal(match[1], reviewedDate, `${sitemapUrl} lastmod`);
  }
}

const contentChecks = [
  ['/malaysia/cameron-highlands/', ['March–September', 'October–February', 'no direct train', 'did not confirm a current permit']],
  ['/malaysia/cameron-highlands/tanah-rata-trails/', ['Parit Falls', 'exact forest gate', 'separate leg']],
  ['/malaysia/cameron-highlands/brinchang-kea-farm/', ['Sungei Palas', '08:30–16:30', 'no admission price']],
  ['/malaysia/cameron-highlands/mossy-forest-gunung-brinchang/', ['unverified', 'vehicle restriction', 'Pahang Forestry']]
];
for (const [route, phrases] of contentChecks) {
  const html = fs.readFileSync(routeFile('', route), 'utf8');
  for (const phrase of phrases) assert.ok(html.includes(phrase), `${route} must retain its reviewed Cameron detail: ${phrase}`);
}

const search = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
for (const route of routes) assert.ok(search.some((record) => record.url === route), `search must retain ${route}`);
const untouched = new RegExp(`<url><loc>https://tripdistill\\.com/malaysia/cameron-highlands/ringlet-bertam-valley/</loc><lastmod>2026-08-30</lastmod>`);
assert.match(sitemap, untouched, 'the unselected Ringlet & Bertam Valley route must retain its prior sitemap date');

console.log(`Cameron Highlands route-date regression passed for ${routes.length} routes and ${routes.length * localePrefixes.length} language editions.`);
