import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const reviewedDate = '2026-10-12';
const routes = [
  '/malaysia/langkawi/',
  '/malaysia/langkawi/pantai-cenang-tengah/',
  '/malaysia/langkawi/machinchang-skycab/',
  '/malaysia/langkawi/kilim-geoforest/'
];
const localePrefixes = ['', '/zh', '/ja', '/ko', '/th'];
const untouchedRoute = '/malaysia/langkawi/dayang-bunting-island/';
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
    assert.ok(html.includes(`rel="canonical" href="https://tripdistill.com${prefix}${route}"`), `${prefix}${route} canonical URL`);
    for (const languagePrefix of localePrefixes) {
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
  ['/malaysia/langkawi/', ['Three nights are best treated as arrival plus two usable days', 'Kuah Jetty', 'Kuala Kedah', 'Oriental Village', 'Perlis–Kedah marine forecast', 'source-page photo declarations']],
  ['/malaysia/langkawi/pantai-cenang-tengah/', ['room pin', 'LGK', 'storm weather', 'no current universal activity fare']],
  ['/malaysia/langkawi/machinchang-skycab/', ['Panorama Langkawi', 'No fixed fare', 'Oriental Village']],
  ['/malaysia/langkawi/kilim-geoforest/', ['exact Kilim-area jetty', 'not a captain’s departure decision', 'same agreed jetty']]
];
for (const [route, phrases] of contentChecks) {
  const html = fs.readFileSync(routeFile('', route), 'utf8');
  for (const phrase of phrases) assert.ok(html.toLowerCase().includes(phrase.toLowerCase()), `${route} must retain its reviewed detail: ${phrase}`);
}

const search = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
for (const route of routes.slice(1)) assert.ok(search.some((record) => record.url === route), `search must retain ${route}`);
const hubSearch = search.find((record) => record.url === routes[0]);
assert.ok(hubSearch, 'search must retain the Langkawi hub');
assert.ok(hubSearch.summary.includes('four distinct zones'), 'search summary must describe the revised Langkawi route logic');
const untouched = new RegExp(`<url><loc>https://tripdistill\\.com${escapeRegExp(untouchedRoute)}</loc><lastmod>2026-08-30</lastmod>`);
assert.match(sitemap, untouched, 'the unselected Dayang Bunting route must retain its prior sitemap date');

console.log(`Langkawi route-date regression passed for ${routes.length} routes and ${routes.length * localePrefixes.length} language editions.`);
