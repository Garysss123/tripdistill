import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const base = '55147104cc93f80b6c9ec7f0b01436b01661e435';
const september = '71def01cd4d489552b9f5d67ca1a202becaa0435e';
const floridaRoutes = [
  '/usa/miami/south-beach/',
  '/usa/miami/little-havana-wynwood/',
  '/usa/orlando/theme-parks/',
  '/usa/orlando/winter-park/'
];
const chicagoRoutes = [
  '/usa/chicago/',
  '/usa/chicago/loop-riverwalk/',
  '/usa/chicago/museum-lakefront/',
  '/usa/chicago/neighborhoods/'
];
const routes = [...floridaRoutes, ...chicagoRoutes];
const localePrefixes = ['', '/zh', '/ja', '/ko', '/th'];
const root = path.resolve(import.meta.dirname, '..');

function gitShow(revision, relativePath) {
  return execFileSync('git', ['show', `${revision}:${relativePath}`], { cwd: root, encoding: 'utf8' });
}

function findTag(node, tagName) {
  if (node?.tagName === tagName) return node;
  for (const child of node?.childNodes || []) {
    const found = findTag(child, tagName);
    if (found) return found;
  }
  return null;
}

function textContent(node) {
  if (node?.nodeName === '#text') return node.value;
  if (node?.tagName === 'script' || node?.tagName === 'style') return '';
  return (node?.childNodes || []).map(textContent).join(' ');
}

function normalizedMain(html) {
  const main = findTag(parse(html), 'main');
  assert.ok(main, 'page must have a main landmark');
  return textContent(main).replace(/\s+/g, ' ').trim();
}

function articleDate(html) {
  const document = parse(html);
  const scripts = [];
  const walk = (node) => {
    if (node?.tagName === 'script' && node.attrs?.some((attr) => attr.name === 'type' && attr.value === 'application/ld+json')) {
      scripts.push(node.childNodes?.map((child) => child.value || '').join('') || '');
    }
    for (const child of node?.childNodes || []) walk(child);
  };
  walk(document);
  for (const raw of scripts) {
    try {
      const data = JSON.parse(raw);
      const article = data['@graph']?.find((item) => item['@type'] === 'Article');
      if (article) return article.dateModified;
    } catch {}
  }
  return null;
}

function htmlPath(route) {
  return `${route.slice(1)}index.html`;
}

const targetSet = new Set(routes.map(htmlPath));
const newYorkAcceptancePath = 'usa/new-york/index.html';
const basePaths = execFileSync('git', ['ls-tree', '-r', '--name-only', base, '--', 'usa'], { cwd: root, encoding: 'utf8' })
  .trim().split('\n').filter((file) => file.endsWith('/index.html') || file === 'usa/index.html');
assert.equal(basePaths.length, 97, 'base U.S. route inventory must remain 97');

const changedBodyPaths = [];
for (const relativePath of basePaths) {
  const before = normalizedMain(gitShow(base, relativePath));
  const currentPath = path.join(root, relativePath);
  assert.ok(fs.existsSync(currentPath), `existing route remains present: ${relativePath}`);
  const afterHtml = fs.readFileSync(currentPath, 'utf8');
  const after = normalizedMain(afterHtml);
  if (before !== after) changedBodyPaths.push(relativePath);
  if (targetSet.has(relativePath)) {
    assert.notEqual(after, before, `${relativePath} must have a substantive body change`);
    assert.equal(articleDate(afterHtml), '2026-10-13', `${relativePath} Article dateModified`);
    assert.match(afterHtml, /Editorial review: 13 October 2026\./, `${relativePath} visible review date`);
  }
}
for (const route of floridaRoutes) {
  const relativePath = htmlPath(route);
  assert.equal(normalizedMain(gitShow(september, relativePath)), normalizedMain(gitShow(base, relativePath)),
    `${relativePath} must match its 11 September source body at the exact Florida task base`);
}
assert.deepEqual(changedBodyPaths.sort(), [...targetSet].sort(), 'only the four Florida and four Chicago English U.S. bodies changed');
assert.equal(normalizedMain(fs.readFileSync(path.join(root, newYorkAcceptancePath), 'utf8')),
  normalizedMain(gitShow(base, newYorkAcceptancePath)), 'New York acceptance sample body remains unchanged');

const requiredText = new Map([
  ['/usa/miami/south-beach/', ['Route 150', 'Two nights', 'National Weather Service']],
  ['/usa/miami/little-havana-wynwood/', ['2516 NW 2nd Avenue', '$12', 'Four nights']],
  ['/usa/orlando/theme-parks/', ['Three nights', 'Park-to-Park', 'MCO is not a direct rail station']],
  ['/usa/orlando/winter-park/', ['445 North Park Avenue', '312 East Morse Boulevard', 'weekday-only']]
]);
for (const [route, phrases] of requiredText) {
  const html = fs.readFileSync(path.join(root, htmlPath(route)), 'utf8');
  for (const phrase of phrases) assert.ok(html.includes(phrase), `${route} contains route-specific decision: ${phrase}`);
}

const oldSearch = JSON.parse(gitShow(base, 'data/search-index.json'));
const newSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
assert.equal(oldSearch.length, 955, 'base search record count');
assert.equal(newSearch.length, 955, 'English search record count remains 955');
const oldByUrl = new Map(oldSearch.map((record) => [record.url, record]));
const newByUrl = new Map(newSearch.map((record) => [record.url, record]));
const changedSearch = [...newByUrl.keys()].filter((url) => JSON.stringify(oldByUrl.get(url)) !== JSON.stringify(newByUrl.get(url))).sort();
assert.deepEqual(changedSearch, [...routes].sort(), 'only the four Florida and four Chicago target English search summaries changed');

const sitemapBefore = gitShow(base, 'sitemap.xml');
const sitemapAfter = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
function sitemapRecords(xml) {
  return [...xml.matchAll(/<url><loc>([^<]+)<\/loc><lastmod>([^<]+)<\/lastmod>/g)].map((match) => [match[1], match[2]]);
}
const oldSitemap = sitemapRecords(sitemapBefore);
const newSitemap = sitemapRecords(sitemapAfter);
assert.equal(oldSitemap.length, 4560, 'base sitemap has 4,560 URLs');
assert.equal(newSitemap.length, 4560, 'sitemap keeps 4,560 URLs');
const oldDates = new Map(oldSitemap);
const newDates = new Map(newSitemap);
assert.deepEqual([...newDates.keys()].sort(), [...oldDates.keys()].sort(), 'sitemap URL set is unchanged');
const expectedDatedUrls = routes.flatMap((route) => localePrefixes.map((prefix) => `https://tripdistill.com${prefix}${route}`)).sort();
const changedDates = [...newDates.keys()].filter((url) => oldDates.get(url) !== newDates.get(url)).sort();
assert.deepEqual(changedDates, expectedDatedUrls, 'only four routes x five editions have a changed sitemap date');
for (const url of expectedDatedUrls) assert.equal(newDates.get(url), '2026-10-13', `${url} lastmod`);

for (const route of routes) {
  for (const prefix of localePrefixes) {
    const localizedPath = path.join(root, `${prefix}${route}index.html`);
    assert.ok(fs.existsSync(localizedPath), `localized route exists: ${prefix}${route}`);
    const html = fs.readFileSync(localizedPath, 'utf8');
    assert.equal(articleDate(html), '2026-10-13', `${prefix}${route} structured date`);
  }
}
for (const prefix of ['/zh', '/ja', '/ko', '/th']) {
  const searchPath = path.join(root, prefix, 'data/search-index.json');
  const records = JSON.parse(fs.readFileSync(searchPath, 'utf8'));
  assert.equal(records.length, 955, `${prefix} search record count`);
  for (const route of routes) assert.ok(records.find((record) => record.url === `${prefix}${route}`)?.summary, `${prefix}${route} localized search summary`);
}

console.log(`USA Florida + Chicago refresh regression passed: ${floridaRoutes.length} Florida and ${chicagoRoutes.length} Chicago substantive English bodies; only eight English search records changed; ${expectedDatedUrls.length} route-edition dates updated; all 4,560 sitemap URLs preserved.`);
