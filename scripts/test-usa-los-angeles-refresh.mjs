#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const root = path.resolve(import.meta.dirname, '..');
const base = 'd5f7d1689b784b4930cd9f7d4496ab3148929162';
const sourceTerminal = 'b7d32c7e1585d5af3cf3d4291dd323e5d2da30eb';
const september = '71def01cd4d489552b9f5d67ca1a202becaa0435e';
const routes = [
  '/usa/los-angeles/',
  '/usa/los-angeles/downtown-arts/',
  '/usa/los-angeles/hollywood-griffith/',
  '/usa/los-angeles/santa-monica-venice/'
];
const locales = [
  { code: 'en', prefix: '', hreflang: 'en', script: /[A-Za-z]/u },
  { code: 'zh-Hant', prefix: '/zh', hreflang: 'zh-Hant', script: /[\u3400-\u9fff]/u },
  { code: 'ja', prefix: '/ja', hreflang: 'ja', script: /[\u3040-\u30ff\u3400-\u9fff]/u },
  { code: 'ko', prefix: '/ko', hreflang: 'ko', script: /[\uac00-\ud7af]/u },
  { code: 'th', prefix: '/th', hreflang: 'th', script: /[\u0e00-\u0e7f]/u }
];
const git = (args) => execFileSync('git', args, { cwd: root });
const gitText = (revision, file) => git(['show', `${revision}:${file}`]).toString('utf8');
const relative = (route) => `${route.slice(1)}index.html`;
const pathFor = (prefix, route) => path.join(root, `${prefix}${route}`, 'index.html');

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
  assert.ok(main, 'page has a main landmark');
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

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
}

const baseUsaPages = git(['ls-tree', '-r', '--name-only', base, '--', 'usa']).toString('utf8')
  .trim().split('\n').filter((file) => file.endsWith('/index.html') || file === 'usa/index.html');
assert.equal(baseUsaPages.length, 97, 'the exact Arizona source base has 97 English U.S. routes');
assert.equal(git(['rev-parse', `${base}^`]).toString('utf8').trim(), '45cae962fdc7fb500cfceb505203efbfd2dbc396', 'the exact base parent is the New England source terminal');
assert.equal(git(['rev-parse', `${sourceTerminal}^1`]).toString('utf8').trim(), base, 'the Los Angeles source terminal has the exact Arizona parent');
assert.equal(git(['rev-parse', `${sourceTerminal}^{tree}`]).toString('utf8').trim(), 'ba6cff9ee753c9db53e5da79590021f4fe9af63d', 'the Los Angeles source terminal tree matches the verified source');

const selectedFiles = new Set(routes.map(relative));
const changedEnglishPages = git(['diff', '--name-only', base, '--', 'usa'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedEnglishPages, [...selectedFiles].sort(), 'exactly four existing Los Angeles English pages changed');

const priorScopeReports = [
  'reports/usa-historical-source-scope-ledger-2026-10-12.md',
  'reports/usa-hawaii-refresh-2026-10-12.md',
  'reports/usa-new-orleans-refresh-2026-10-12.md',
  'reports/usa-atlanta-refresh-2026-10-12.md',
  'reports/usa-miami-orlando-neighborhood-refresh-2026-10-13.md',
  'reports/usa-chicago-refresh-2026-10-13.md',
  'reports/usa-new-england-refresh-2026-10-13.md',
  'reports/usa-arizona-refresh-2026-10-13.md'
];
const priorScopeText = priorScopeReports.map((file) => gitText(base, file)).join('\n');
for (const route of routes) assert.ok(!priorScopeText.includes(`\`${route}\``), `${route}: disjoint from all eight exact-base source-scope reports`);

for (const file of baseUsaPages) {
  const before = mainText(gitText(base, file));
  const afterHtml = fs.readFileSync(path.join(root, file), 'utf8');
  if (!selectedFiles.has(file)) {
    assert.equal(mainText(afterHtml), before, `${file}: English main content remains unchanged outside the four selected pages`);
  } else {
    assert.notEqual(mainText(afterHtml), before, `${file}: substantive content differs from the exact base`);
    assert.equal(before, mainText(gitText(september, file)), `${file}: exact-base main body still matches 11 September`);
    assert.equal(article(afterHtml)?.dateModified, '2026-10-13', `${file}: Article dateModified`);
    assert.match(afterHtml, /data-editorial-revision="los-angeles-20261013"/);
    assert.match(afterHtml, /Transit, road, weather, DASH and pier-access pages were checked on 13 October 2026\./);
  }
}

for (const unchanged of ['usa/index.html', 'usa/new-york/index.html', ...[
  'usa/new-england/index.html',
  'usa/new-england/portland-maine/index.html',
  'usa/new-england/acadia/index.html',
  'usa/new-england/white-mountains-vermont/index.html'
]]) {
  assert.equal(fs.readFileSync(path.join(root, unchanged), 'utf8'), gitText(base, unchanged), `${unchanged}: remains byte-for-byte unchanged`);
}

const expectedCopy = new Map([
  ['/usa/los-angeles/', ['For two nights', 'With three or four nights', 'With five or more', 'Metro Connector Shuttle', 'authorized airport pickup']],
  ['/usa/los-angeles/downtown-arts/', ['For one Downtown night', '351 S Hill Street', 'Grand Central Market', 'closed worksite', 'step-free access']],
  ['/usa/los-angeles/hollywood-griffith/', ['Hollywood/Highland → B Line', 'Vermont/Sunset', 'DASH Observatory/Los Feliz', 'building closes Mondays, Thanksgiving and Christmas', 'southbound DASH']],
  ['/usa/los-angeles/santa-monica-venice/', ['For one night', 'Pier Bridge replacement construction was underway', 'Metro Line 33', 'coastal flood, high-surf and beach-hazard advisories', 'Do not cross closure lines']]
]);
for (const [route, phrases] of expectedCopy) {
  const body = mainText(fs.readFileSync(pathFor('', route), 'utf8'));
  for (const phrase of phrases) assert.ok(body.includes(phrase), `${route}: includes route-specific planning detail “${phrase}”`);
}

const officialSources = new Map([
  ['/usa/los-angeles/', ['https://www.flylax.com/lax-traffic-and-ground-transportation', 'https://www.metro.net/riding/schedules/', 'https://quickmap.dot.ca.gov/', 'https://www.weather.gov/lox/']],
  ['/usa/los-angeles/downtown-arts/', ['https://www.angelsflight.org/', 'https://www.metro.net/riding/schedules/', 'https://quickmap.dot.ca.gov/']],
  ['/usa/los-angeles/hollywood-griffith/', ['https://www.ladottransit.com/dash/observatory-los-feliz/', 'https://www.metro.net/riding/schedules/', 'https://www.weather.gov/lox/']],
  ['/usa/los-angeles/santa-monica-venice/', ['https://www.metro.net/riding/schedules/', 'https://www.bigbluebus.com/', 'https://www.santamonica.gov/programs/pier-bridge-improvements', 'https://www.weather.gov/lox/']]
]);
for (const [route, urls] of officialSources) {
  const html = fs.readFileSync(pathFor('', route), 'utf8');
  for (const url of urls) assert.ok(html.includes(`href="${url}"`), `${route}: links official source ${url}`);
}

const currentSearch = new Map(readJson('data/search-index.json').map((entry) => [entry.url, entry]));
const baseSearchFromGit = new Map(JSON.parse(gitText(base, 'data/search-index.json')).map((entry) => [entry.url, entry]));
assert.equal(baseSearchFromGit.size, 955, 'base English search index has 955 entries');
assert.equal(currentSearch.size, 955, 'current English search index has 955 entries');
assert.deepEqual(new Set(currentSearch.keys()), new Set(baseSearchFromGit.keys()), 'English search URL inventory is unchanged');
assert.deepEqual([...currentSearch].filter(([url, value]) => url.startsWith('/usa/') && JSON.stringify(value) !== JSON.stringify(baseSearchFromGit.get(url))).map(([url]) => url).sort(), [...routes].sort(), 'only the four Los Angeles search summaries changed among the exact 97-route U.S. index; later non-U.S. integration scopes are checked separately');

const baseSitemap = sitemap(gitText(base, 'sitemap.xml'));
const currentSitemap = sitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560, 'base sitemap has exactly 4,560 URLs');
assert.equal(currentSitemap.size, 4560, 'current sitemap has exactly 4,560 URLs');
assert.deepEqual(new Set(currentSitemap.keys()), new Set(baseSitemap.keys()), 'the sitemap URL inventory is unchanged');
const datedPaths = routes.flatMap((route) => locales.map(({ prefix }) => `${prefix}${route}`)).sort();
assert.deepEqual([...currentSitemap].filter(([route, date]) => route.replace(/^\/(?:zh|ja|ko|th)(?=\/)/, '').startsWith('/usa/') && baseSitemap.get(route) !== date).map(([route]) => route).sort(), datedPaths, 'only four Los Angeles routes across five editions receive new U.S. sitemap dates; other country updates are audited separately');
for (const route of datedPaths) assert.equal(currentSitemap.get(route), '2026-10-13', `${route}: lastmod`);

for (const locale of locales) {
  const expectedScript = locale.script;
  const search = locale.code === 'en' ? readJson('data/search-index.json') : readJson(`${locale.prefix.slice(1)}/data/search-index.json`);
  for (const route of routes) {
    const html = fs.readFileSync(pathFor(locale.prefix, route), 'utf8');
    const content = mainText(html);
    assert.ok(expectedScript.test(content), `${locale.code}: localized native-script content exists on ${route}`);
    assert.equal(article(html)?.dateModified, '2026-10-13', `${locale.code}: Article date on ${route}`);
    assert.match(html, new RegExp(`hreflang="${locale.hreflang}"`), `${locale.code}: hreflang on ${route}`);
    assert.ok(html.includes('data-editorial-revision="los-angeles-20261013"'), `${locale.code}: editorial marker on ${route}`);
    const summaryUrl = `${locale.prefix}${route}`;
    const record = search.find((entry) => entry.url === summaryUrl);
    assert.ok(record?.summary && expectedScript.test(record.summary), `${locale.code}: translated search summary on ${route}`);
    assert.equal(currentSitemap.get(summaryUrl), '2026-10-13', `${locale.code}: sitemap date on ${route}`);
  }
}

for (const locale of locales.slice(1)) {
  const localeDir = path.join(root, 'data', 'i18n', 'reviewed', locale.code);
  const batchName = fs.readdirSync(localeDir).find((name) => name.endsWith('-usa-los-angeles-pages-20261013.json'));
  assert.ok(batchName, `${locale.code}: new page batch exists`);
  const batch = JSON.parse(fs.readFileSync(path.join(localeDir, batchName), 'utf8'));
  assert.deepEqual(batch.routes, routes, `${locale.code}: exact batch route scope`);
  assert.equal(batch.qualityStatus, 'reviewed', `${locale.code}: reviewed batch status`);
  assert.equal(Object.keys(batch.translations).length, 33, `${locale.code}: 33 fresh source keys`);
  assert.ok(Object.values(batch.translations).every((value) => value.trim()), `${locale.code}: all new source keys translated`);
  assert.equal(batch.reviewProvenance?.independentSecondModel, false, `${locale.code}: no independent second-model claim`);
  assert.ok(batch.reviewProvenance?.writer.includes('exact runtime variant unavailable'), `${locale.code}: writer model identity limit recorded`);
  assert.ok(batch.reviewProvenance?.reviewer.includes('same-model self-review'), `${locale.code}: same-model self-review recorded`);
}

assert.equal(git(['diff', '--name-only', base, sourceTerminal, '--', 'assets']).toString('utf8').trim(), '', 'the Los Angeles source batch changes no image asset bytes or records');
assert.equal(git(['diff', '--name-only', base, sourceTerminal, '--', '*.svg']).toString('utf8').trim(), '', 'the Los Angeles source batch adds or changes no SVG');
console.log('Los Angeles source regression passed: four deduplicated routes, exact-base scope, translated page/search content, 20 dates, 4,560 URLs, New York unchanged, and no asset/SVG changes.');
