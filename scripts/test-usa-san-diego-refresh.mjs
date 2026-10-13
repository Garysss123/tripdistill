#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { postLosAngelesBostonRoutes, postBostonOverviewJuneauRoutes, postBostonOverviewJuneauSearchRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = 'b7d32c7e1585d5af3cf3d4291dd323e5d2da30eb';
const september = '71def01cd4d489552b9f5d67ca1a202becaa0435e';
const parent = 'd5f7d1689b784b4930cd9f7d4496ab3148929162';
const routes = [
  '/usa/san-diego/',
  '/usa/san-diego/balboa-park/',
  '/usa/san-diego/harbor-coronado/',
  '/usa/san-diego/la-jolla/'
];
const laterBostonRoutes = postLosAngelesBostonRoutes;
const overviewJuneauBase = 'b4045e0b7265cc6c3ceb8f16acb3e591d4b87eda';
const overviewJuneauTerminal = '73bcb05ae123fe3e4b70f057fa4dc7fc88979693';
const bostonTerminal = 'b4045e0b7265cc6c3ceb8f16acb3e591d4b87eda';
const translatedRoutes = [
  '/usa/san-diego/',
  '/usa/san-diego/balboa-park/',
  '/usa/san-diego/la-jolla/',
  '/usa/san-diego/harbor-coronado/'
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
assert.equal(baseUsaPages.length, 97, 'the exact Los Angeles source base has 97 English U.S. routes');
assert.equal(git(['rev-parse', `${base}^`]).toString('utf8').trim(), parent, 'the exact base parent is the Los Angeles source terminal');
const sourceTerminal = 'bc08029d36448bcb9d0a42a986caddec883b3d1f';
assert.equal(git(['rev-parse', `${sourceTerminal}^1`]).toString('utf8').trim(), base, 'San Diego source terminal has the exact Los Angeles parent');
assert.equal(git(['rev-parse', `${sourceTerminal}^{tree}`]).toString('utf8').trim(), '2ca0dc7e9ea5ecd5d64824775848bfdd9154f603', 'San Diego source terminal has the verified tree');

const selectedFiles = new Set(routes.map(relative));
const changedEnglishPages = git(['diff', '--name-only', base, '--', 'usa/san-diego'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedEnglishPages, [...selectedFiles].sort(), 'exactly four existing San Diego English pages changed');

const priorScopeReports = [
  'reports/usa-historical-source-scope-ledger-2026-10-12.md',
  'reports/usa-hawaii-refresh-2026-10-12.md',
  'reports/usa-new-orleans-refresh-2026-10-12.md',
  'reports/usa-atlanta-refresh-2026-10-12.md',
  'reports/usa-miami-orlando-neighborhood-refresh-2026-10-13.md',
  'reports/usa-chicago-refresh-2026-10-13.md',
  'reports/usa-new-england-refresh-2026-10-13.md',
  'reports/usa-arizona-refresh-2026-10-13.md',
  'reports/usa-los-angeles-refresh-2026-10-13.md'
];
const priorScopeText = priorScopeReports.map((file) => gitText(base, file)).join('\n');
for (const route of routes) assert.ok(!priorScopeText.includes(`\`${route}\``), `${route}: disjoint from all nine exact-base source-scope reports`);

for (const file of baseUsaPages) {
  const before = mainText(gitText(base, file));
  const afterHtml = fs.readFileSync(path.join(root, file), 'utf8');
  const route = `/${file.slice(0, -'index.html'.length)}`;
  if (postBostonOverviewJuneauRoutes.includes(route)) {
    assert.equal(mainText(gitText(overviewJuneauBase, file)), mainText(gitText(september, file)), `${route}: exact follow-up source base matches the historical September body`);
    assert.notEqual(mainText(afterHtml), mainText(gitText(overviewJuneauBase, file)), `${route}: dated follow-up changes the existing body`);
    assert.equal(mainText(afterHtml), mainText(gitText(overviewJuneauTerminal, file)), `${route}: body matches exact follow-up source terminal`);
    assert.equal(article(afterHtml)?.dateModified, '2026-10-13', `${route}: Article dateModified`);
    assert.match(afterHtml, route === '/usa/' ? /data-editorial-revision="usa-country-20261013"/ : /data-editorial-revision="alaska-juneau-20261013"/, `${route}: exact editorial marker`);
  } else if (laterBostonRoutes.some((route) => relative(route) === file)) {
    assert.notEqual(mainText(afterHtml), before, `${file}: later Boston body changed after San Diego`);
    assert.equal(mainText(gitText(bostonTerminal, file)), mainText(afterHtml), `${file}: Boston body matches its exact source terminal`);
    assert.equal(article(afterHtml)?.dateModified, '2026-10-13', `${file}: Boston Article dateModified`);
    assert.match(afterHtml, /data-editorial-revision="boston-20261013"/, `${file}: Boston editorial marker`);
  } else if (!selectedFiles.has(file)) {
    assert.equal(mainText(afterHtml), before, `${file}: English main content remains unchanged outside San Diego and the later Boston batch`);
  } else {
    assert.notEqual(mainText(afterHtml), before, `${file}: substantive content differs from the exact base`);
    assert.equal(mainText(afterHtml), mainText(gitText(sourceTerminal, file)), `${file}: San Diego body matches the exact source terminal`);
    assert.equal(before, mainText(gitText(september, file)), `${file}: exact-base main body still matches 11 September`);
    assert.equal(article(afterHtml)?.dateModified, '2026-10-13', `${file}: Article dateModified`);
    assert.match(afterHtml, /data-editorial-revision="san-diego-20261013"/);
    assert.match(afterHtml, /Official access and transit pages were checked on 13 October 2026\./);
  }
}

const unchangedFiles = [
  ...git(['ls-tree', '-r', '--name-only', base, '--', 'usa/new-york']).toString('utf8')
    .trim().split('\n').filter((file) => file.endsWith('/index.html'))
];
for (const unchanged of unchangedFiles) {
  assert.equal(fs.readFileSync(path.join(root, unchanged), 'utf8'), gitText(base, unchanged), `${unchanged}: remains byte-for-byte unchanged`);
}

const expectedCopy = new Map([
  ['/usa/san-diego/', ['Four nights · three useful days', 'MTS Route 992', 'terminal → Flyer → Old Town Transit Center', 'Route 7 journey', 'Route 30', 'Five or more nights']],
  ['/usa/san-diego/balboa-park/', ['MTS Route 7 runs between downtown and University & College', '27 August 2026', '31 December 2026', 'Lower Inspiration Point', 'Route 7 return direction']],
  ['/usa/san-diego/la-jolla/', ['MTS Route 30 runs between Old Town and UTC', 'closed year-round', '15 December through 15 May', 'Route 30 does not promise a door-to-Cove transfer', 'do not descend to a closed shore']],
  ['/usa/san-diego/harbor-coronado/', ['Broadway Pier and Fifth Avenue Landing', '15-minute crossing', '$9 one-way adult fare', 'MTS Route 904', 'Never treat the Coronado Bridge as an improvised pedestrian return']]
]);
for (const [route, phrases] of expectedCopy) {
  const body = mainText(fs.readFileSync(pathFor('', route), 'utf8'));
  for (const phrase of phrases) assert.ok(body.includes(phrase), `${route}: includes route-specific planning detail “${phrase}”`);
}

const officialSources = new Map([
  ['/usa/san-diego/', ['https://www.san.org/before-you-go-travel-tips/public-transportation/', 'https://www.sdmts.com/transit-services/bus-routes', 'https://www.weather.gov/sgx/']],
  ['/usa/san-diego/balboa-park/', ['https://www.sdmts.com/sites/default/files/routes/pdf/7.pdf', 'https://www.sandiego.gov/parking/balboapark']],
  ['/usa/san-diego/la-jolla/', ['https://www.sdmts.com/sites/default/files/routes/pdf/30.pdf', 'https://www.sandiego.gov/park-and-recreation/point-lajolla', 'https://www.sandiego.gov/lifeguards/beaches/pool']],
  ['/usa/san-diego/harbor-coronado/', ['https://www.flagshipsd.com/ferry-routes', 'https://www.sdmts.com/sites/default/files/routes/pdf/904.pdf', 'https://www.coronado.ca.us/244/Coronado-Beach']]
]);
for (const [route, urls] of officialSources) {
  const html = fs.readFileSync(pathFor('', route), 'utf8');
  for (const url of urls) assert.ok(html.includes(`href="${url}"`), `${route}: links official source ${url}`);
}

const currentSearch = new Map(readJson('data/search-index.json').map((entry) => [entry.url, entry]));
const baseSearchFromGit = new Map(JSON.parse(gitText(base, 'data/search-index.json')).map((entry) => [entry.url, entry]));
const sourceSearch = new Map(JSON.parse(gitText(sourceTerminal, 'data/search-index.json')).map((entry) => [entry.url, entry]));
const bostonSearch = new Map(JSON.parse(gitText(bostonTerminal, 'data/search-index.json')).map((entry) => [entry.url, entry]));
assert.equal(baseSearchFromGit.size, 955, 'base English search index has 955 entries');
assert.equal(currentSearch.size, 955, 'current English search index has 955 entries');
assert.deepEqual(new Set(currentSearch.keys()), new Set(baseSearchFromGit.keys()), 'English search URL inventory is unchanged');
for (const route of routes) assert.deepEqual(currentSearch.get(route), sourceSearch.get(route), `${route}: San Diego search record matches its exact source terminal`);
for (const route of laterBostonRoutes) assert.deepEqual(currentSearch.get(route), bostonSearch.get(route), `${route}: Boston search record matches its exact source terminal`);
const overviewJuneauSearch = new Map(JSON.parse(gitText(overviewJuneauTerminal, 'data/search-index.json')).map((entry) => [entry.url, entry]));
for (const route of postBostonOverviewJuneauSearchRoutes) assert.deepEqual(currentSearch.get(route), overviewJuneauSearch.get(route), `${route}: Juneau search record matches its exact source terminal`);

const baseSitemap = sitemap(gitText(base, 'sitemap.xml'));
const currentSitemap = sitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560, 'base sitemap has exactly 4,560 URLs');
assert.equal(currentSitemap.size, 4560, 'current sitemap has exactly 4,560 URLs');
assert.deepEqual(new Set(currentSitemap.keys()), new Set(baseSitemap.keys()), 'the sitemap URL inventory is unchanged');
const datedPaths = [...routes, ...laterBostonRoutes, ...postBostonOverviewJuneauRoutes].flatMap((route) => locales.map(({ prefix }) => `${prefix}${route}`)).sort();
for (const route of datedPaths) assert.equal(currentSitemap.get(route), '2026-10-13', `${route}: lastmod`);

for (const locale of locales) {
  const search = locale.code === 'en' ? readJson('data/search-index.json') : readJson(`${locale.prefix.slice(1)}/data/search-index.json`);
  for (const route of routes) {
    const html = fs.readFileSync(pathFor(locale.prefix, route), 'utf8');
    const content = mainText(html);
    assert.ok(locale.script.test(content), `${locale.code}: localized native-script content exists on ${route}`);
    assert.equal(article(html)?.dateModified, '2026-10-13', `${locale.code}: Article date on ${route}`);
    assert.match(html, new RegExp(`hreflang="${locale.hreflang}"`), `${locale.code}: hreflang on ${route}`);
    assert.ok(html.includes('data-editorial-revision="san-diego-20261013"'), `${locale.code}: editorial marker on ${route}`);
    const summaryUrl = `${locale.prefix}${route}`;
    const record = search.find((entry) => entry.url === summaryUrl);
    assert.ok(record?.summary && locale.script.test(record.summary), `${locale.code}: translated search summary on ${route}`);
    assert.equal(currentSitemap.get(summaryUrl), '2026-10-13', `${locale.code}: sitemap date on ${route}`);
  }
  for (const route of postBostonOverviewJuneauRoutes) {
    const html = fs.readFileSync(pathFor(locale.prefix, route), 'utf8');
    assert.ok(locale.script.test(mainText(html)), `${locale.code}: later route has native-script body text on ${route}`);
    assert.equal(article(html)?.dateModified, '2026-10-13', `${locale.code}: later Article date on ${route}`);
    assert.equal(currentSitemap.get(`${locale.prefix}${route}`), '2026-10-13', `${locale.code}: later sitemap date on ${route}`);
    if (postBostonOverviewJuneauSearchRoutes.includes(route)) assert.ok(search.find((entry) => entry.url === `${locale.prefix}${route}`)?.summary, `${locale.code}: Juneau search summary exists`);
  }
}

for (const locale of locales.slice(1)) {
  const localeDir = path.join(root, 'data', 'i18n', 'reviewed', locale.code);
  const batchName = fs.readdirSync(localeDir).find((name) => name.endsWith('-usa-san-diego-refresh-pages-20261013.json'));
  assert.ok(batchName, `${locale.code}: new page batch exists`);
  const batch = JSON.parse(fs.readFileSync(path.join(localeDir, batchName), 'utf8'));
  assert.deepEqual(batch.routes, translatedRoutes, `${locale.code}: exact batch route scope`);
  assert.equal(batch.qualityStatus, 'reviewed', `${locale.code}: reviewed batch status`);
  assert.equal(Object.keys(batch.translations).length, 165, `${locale.code}: 165 fresh source keys`);
  assert.ok(Object.values(batch.translations).every((value) => value.trim()), `${locale.code}: all new source keys translated`);
  assert.equal(batch.reviewProvenance?.independentSecondModel, false, `${locale.code}: no independent second-model claim`);
  assert.ok(batch.reviewProvenance?.writer.includes('exact runtime variant unavailable'), `${locale.code}: writer model identity limit recorded`);
  assert.ok(batch.reviewProvenance?.reviewer.includes('same-model self-review'), `${locale.code}: same-model self-review recorded`);
}

assert.equal(git(['diff', '--name-only', base, sourceTerminal, '--', 'assets']).toString('utf8').trim(), '', 'the exact San Diego source commit changed no image assets');
assert.equal(git(['diff', '--name-only', base, sourceTerminal, '--', '*.svg']).toString('utf8').trim(), '', 'the exact San Diego source commit changed no SVG');
console.log(`San Diego source regression passed: four deduplicated routes plus exact Boston and overview/Juneau follow-ups; Juneau alone changes search, ${datedPaths.length} dates, New York/4,560 URLs unchanged and no asset/SVG changes.`);
