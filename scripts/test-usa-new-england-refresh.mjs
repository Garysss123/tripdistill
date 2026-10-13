#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const root = path.resolve(import.meta.dirname, '..');
const base = 'dc88a75c561d3e7a4f30bd00afadb6e8d52841d7';
const september = '71def01cd4d489552b9f5d67ca1a202becaa0435e';
const routes = [
  '/usa/new-england/',
  '/usa/new-england/portland-maine/',
  '/usa/new-england/acadia/',
  '/usa/new-england/white-mountains-vermont/'
];
const locales = [
  { code: 'en', prefix: '', hreflang: 'en', script: /[A-Za-z]/u },
  { code: 'zh-Hant', prefix: '/zh', hreflang: 'zh-Hant', script: /[\u3400-\u9fff]/u },
  { code: 'ja', prefix: '/ja', hreflang: 'ja', script: /[\u3040-\u30ff\u3400-\u9fff]/u },
  { code: 'ko', prefix: '/ko', hreflang: 'ko', script: /[\uac00-\ud7af]/u },
  { code: 'th', prefix: '/th', hreflang: 'th', script: /[\u0e00-\u0e7f]/u }
];
const targets = new Set(routes.map((route) => route.slice(1) + 'index.html'));
const pathFor = (prefix, route) => path.join(root, `${prefix}${route}`, 'index.html');
const gitText = (revision, file) => execFileSync('git', ['show', `${revision}:${file}`], { cwd: root, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
const gitBytes = (revision, file) => execFileSync('git', ['show', `${revision}:${file}`], { cwd: root, maxBuffer: 32 * 1024 * 1024 });
const gitPaths = (revision, directory) => execFileSync('git', ['ls-tree', '-r', '--name-only', revision, '--', directory], { cwd: root, encoding: 'utf8' }).trim().split('\n').filter(Boolean);

function findTag(node, name) {
  if (node?.tagName === name) return node;
  for (const child of node?.childNodes || []) {
    const found = findTag(child, name);
    if (found) return found;
  }
  return null;
}

function textContent(node) {
  if (node?.nodeName === '#text') return node.value;
  if (['script', 'style', 'svg'].includes(node?.tagName)) return '';
  return (node?.childNodes || []).map(textContent).join(' ');
}

function mainText(html) {
  const main = findTag(parse(html), 'main');
  assert.ok(main, 'HTML page must have a main landmark');
  return textContent(main).replace(/\s+/g, ' ').trim();
}

function article(html) {
  let found = null;
  function walk(node) {
    if (node?.tagName === 'script' && node.attrs?.some(({ name, value }) => name === 'type' && value === 'application/ld+json')) {
      try {
        const raw = node.childNodes?.map((child) => child.value || '').join('') || '';
        const data = JSON.parse(raw);
        found ||= data['@graph']?.find((item) => item['@type'] === 'Article') || null;
      } catch {}
    }
    for (const child of node?.childNodes || []) walk(child);
  }
  walk(parse(html));
  return found;
}

function sitemap(xml) {
  return new Map([...xml.matchAll(/<url><loc>(.*?)<\/loc><lastmod>(.*?)<\/lastmod>.*?<\/url>/gs)]
    .map(([, url, date]) => [new URL(url).pathname, date]));
}

const wordCount = (value) => (value.match(/\b[A-Za-z0-9]+(?:['’][A-Za-z0-9]+)*\b/gu) || []).length;
const basePaths = gitPaths(base, 'usa').filter((file) => file.endsWith('/index.html') || file === 'usa/index.html');
assert.equal(basePaths.length, 97, 'exact task base has 97 English U.S. routes');

const changedBodyPaths = [];
const bodyStats = [];
for (const relativePath of basePaths) {
  const before = mainText(gitText(base, relativePath));
  const currentPath = path.join(root, relativePath);
  assert.ok(fs.existsSync(currentPath), `existing route remains present: ${relativePath}`);
  const afterHtml = fs.readFileSync(currentPath, 'utf8');
  const after = mainText(afterHtml);
  if (before !== after) changedBodyPaths.push(relativePath);
  if (!targets.has(relativePath)) {
    assert.equal(after, before, `${relativePath}: English main body remains unchanged outside the four selected paths`);
  } else {
    assert.notEqual(after, before, `${relativePath}: substantive body differs from exact task base`);
    assert.equal(mainText(gitText(september, relativePath)), before, `${relativePath}: exact task-base body matches its 11 September body`);
    const data = article(afterHtml);
    assert.equal(data?.dateModified, '2026-10-13', `${relativePath}: Article dateModified`);
    assert.equal(data?.datePublished, '2026-09-11', `${relativePath}: original publication date is retained`);
    assert.match(afterHtml, /data-editorial-revision="new-england-20261013"/, `${relativePath}: editorial revision marker`);
    assert.match(afterHtml, /Editorial review: 13 October 2026\./, `${relativePath}: visible review date`);
    assert.match(afterHtml, /Source information checked on 13 October 2026\./, `${relativePath}: source-check date`);
    bodyStats.push({ route: `/${relativePath}`, beforeChars: before.length, afterChars: after.length, beforeWords: wordCount(before), afterWords: wordCount(after), beforeSha256: crypto.createHash('sha256').update(before).digest('hex'), afterSha256: crypto.createHash('sha256').update(after).digest('hex') });
  }
}
assert.deepEqual(changedBodyPaths.sort(), [...targets].sort(), 'exactly the four selected English U.S. main bodies changed');
assert.deepEqual(gitBytes(base, 'usa/new-york/index.html'), fs.readFileSync(path.join(root, 'usa/new-york/index.html')), 'New York acceptance sample remains byte-for-byte unchanged');
assert.deepEqual(gitBytes(base, 'usa/index.html'), fs.readFileSync(path.join(root, 'usa/index.html')), 'U.S. index remains byte-for-byte unchanged');

const expectedCopy = new Map([
  ['/usa/new-england/', ['Three or four nights', 'Five nights', 'Seven nights', 'two real transfer days', 'Portland Transportation Center', 'New England 511']],
  ['/usa/new-england/portland-maine/', ['Two nights', 'Three nights', 'Thompson’s Point', 'METRO Route 1', 'Portland Museum of Art']],
  ['/usa/new-england/acadia/', ['Bar Harbor', 'Trenton or Ellsworth', 'first and last service', '23 June through 12 October 2026', '20 May through 25 October 2026', 'Abbe Museum']],
  ['/usa/new-england/white-mountains-vermont/', ['Conway or North Conway', 'Lincoln or Franconia', 'Stowe or Waterbury', 'New England 511', 'National Weather Service', 'If the Kanc is closed']]
]);
for (const [route, phrases] of expectedCopy) {
  const html = fs.readFileSync(pathFor('', route), 'utf8');
  const content = mainText(html);
  for (const phrase of phrases) assert.ok(content.includes(phrase), `${route}: route-specific planning evidence contains “${phrase}”`);
}

const requiredSources = new Map([
  ['/usa/new-england/', ['https://amtrakdowneaster.com/stations/portland/', 'https://amtrakdowneaster.com/schedule/', 'https://newengland511.org/']],
  ['/usa/new-england/portland-maine/', ['https://amtrakdowneaster.com/stations/portland/', 'https://amtrakdowneaster.com/schedule/', 'https://www.portlandmuseum.org/visit/']],
  ['/usa/new-england/acadia/', ['https://www.exploreacadia.com/', 'https://www.nps.gov/acad/planyourvisit/vehicle_reservations.htm', 'https://www.nps.gov/acad/planyourvisit/conditions.htm', 'https://www.abbemuseum.org/two-locations']],
  ['/usa/new-england/white-mountains-vermont/', ['https://newengland511.org/', 'https://www.weather.gov/gyx/', 'https://whtmtn.art/', 'https://www.vtssm.org/visit']]
]);
for (const [route, urls] of requiredSources) {
  const html = fs.readFileSync(pathFor('', route), 'utf8');
  for (const url of urls) assert.ok(html.includes(`href="${url}"`), `${route}: official reference is linked: ${url}`);
}

const baseSearch = new Map(JSON.parse(gitText(base, 'data/search-index.json')).map((entry) => [entry.url, entry]));
const currentSearch = new Map(JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8')).map((entry) => [entry.url, entry]));
assert.equal(baseSearch.size, 955, 'source-base English search index has 955 records');
assert.equal(currentSearch.size, 955, 'English search index retains 955 records');
assert.deepEqual(new Set(currentSearch.keys()), new Set(baseSearch.keys()), 'English search URL set is unchanged');
const changedSearchRoutes = [...currentSearch].filter(([url, value]) => JSON.stringify(value) !== JSON.stringify(baseSearch.get(url))).map(([url]) => url).sort();
assert.deepEqual(changedSearchRoutes, [...routes].sort(), 'only the four selected English search summaries changed');

const baseSitemap = sitemap(gitText(base, 'sitemap.xml'));
const currentSitemap = sitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560, 'source-base sitemap has 4,560 URLs');
assert.equal(currentSitemap.size, 4560, 'current sitemap retains 4,560 URLs');
assert.deepEqual(new Set(currentSitemap.keys()), new Set(baseSitemap.keys()), 'sitemap URL set is unchanged');
const datedPaths = routes.flatMap((route) => locales.map(({ prefix }) => `${prefix}${route}`)).sort();
const changedDates = [...currentSitemap].filter(([route, date]) => baseSitemap.get(route) !== date).map(([route]) => route).sort();
assert.deepEqual(changedDates, datedPaths, 'only the selected four routes across five editions receive changed sitemap dates');
for (const route of datedPaths) assert.equal(currentSitemap.get(route), '2026-10-13', `${route}: sitemap lastmod`);

for (const route of routes) {
  for (const locale of locales) {
    const htmlPath = pathFor(locale.prefix, route);
    assert.ok(fs.existsSync(htmlPath), `${locale.code} edition page exists: ${route}`);
    const html = fs.readFileSync(htmlPath, 'utf8');
    assert.ok(locale.script.test(mainText(html)), `${locale.code} body contains native-language text: ${route}`);
    assert.equal(article(html)?.dateModified, '2026-10-13', `${locale.code} Article date: ${route}`);
    assert.match(html, new RegExp(`hreflang="${locale.hreflang}"`), `${locale.code} alternate-language metadata: ${route}`);
  }
}

for (const locale of locales.slice(1)) {
  const recordsPath = path.join(root, `${locale.prefix}/data/search-index.json`);
  assert.ok(fs.existsSync(recordsPath), `${locale.code} localized search index exists`);
  const records = JSON.parse(fs.readFileSync(recordsPath, 'utf8'));
  assert.equal(records.length, 955, `${locale.code} search index retains 955 records`);
  for (const route of routes) {
    const entry = records.find((record) => record.url === `${locale.prefix}${route}`);
    assert.ok(entry?.summary, `${locale.code} localized search summary exists: ${route}`);
    assert.ok(locale.script.test(entry.summary), `${locale.code} search summary is translated: ${route}`);
  }
}

console.log('USA New England refresh regression passed: four substantive routes selected by exact-body history; New York and /usa/ unchanged; four English search records changed; 20 edition dates updated; 4,560 sitemap URLs preserved.');
console.log(JSON.stringify(bodyStats, null, 2));
