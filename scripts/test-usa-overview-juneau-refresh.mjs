#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { collectTranslationWork } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = 'b4045e0b7265cc6c3ceb8f16acb3e591d4b87eda';
const sourceTerminal = '73bcb05ae123fe3e4b70f057fa4dc7fc88979693';
const baseParent = 'bc08029d36448bcb9d0a42a986caddec883b3d1f';
const september = '71def01cd4d489552b9f5d67ca1a202becaa0435e';
const septemberParent = '5ef5073b3beb5e06ffcc8cba58359dd09ee70b4b';
const routes = ['/usa/', '/usa/alaska/juneau-southeast/'];
const pageFiles = routes.map((route) => route.slice(1) + 'index.html');
const locales = [
  { code: 'en', dir: '', prefix: '', script: /[A-Za-z]/u, reviewText: 'Editorial review: 13 October 2026.' },
  { code: 'zh-Hant', dir: 'zh', prefix: '/zh', script: /[\u3400-\u9fff]/u, reviewText: '2026年10月13日' },
  { code: 'ja', dir: 'ja', prefix: '/ja', script: /[\u3040-\u30ff\u3400-\u9fff]/u, reviewText: '2026年10月13日' },
  { code: 'ko', dir: 'ko', prefix: '/ko', script: /[\uac00-\ud7af]/u, reviewText: '2026년 10월 13일' },
  { code: 'th', dir: 'th', prefix: '/th', script: /[\u0e00-\u0e7f]/u, reviewText: '13 ตุลาคม 2026' }
];

const git = (args) => execFileSync('git', args, { cwd: root, maxBuffer: 32 * 1024 * 1024 });
const gitText = (revision, file) => git(['show', `${revision}:${file}`]).toString('utf8');
const gitBytes = (revision, file) => git(['show', `${revision}:${file}`]);
const readJson = (file) => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));

function flatten(node) {
  return [node, ...(node.childNodes || []).flatMap(flatten)];
}

function textContent(node) {
  if (node?.nodeName === '#text') return node.value;
  if (['script', 'style', 'svg'].includes(node?.tagName)) return '';
  return (node?.childNodes || []).map(textContent).join(' ');
}

function mainText(html) {
  const main = flatten(parse(html)).find((node) => node.tagName === 'main');
  assert.ok(main, 'page has a main landmark');
  return textContent(main).replace(/\s+/g, ' ').trim();
}

function article(html) {
  for (const node of flatten(parse(html))) {
    if (node.tagName !== 'script' || !node.attrs?.some(({ name, value }) => name === 'type' && value === 'application/ld+json')) continue;
    const raw = node.childNodes?.map((child) => child.value || '').join('') || '';
    const data = JSON.parse(raw);
    const found = data['@graph']?.find((entry) => entry['@type'] === 'Article');
    if (found) return found;
  }
  return null;
}

function sitemap(xml) {
  return new Map([...xml.matchAll(/<url><loc>(.*?)<\/loc><lastmod>(.*?)<\/lastmod>.*?<\/url>/gs)]
    .map(([, url, date]) => [new URL(url).pathname, date]));
}

function localePagePath(locale, route) {
  return path.join(root, locale.dir, route.slice(1), 'index.html');
}

assert.equal(git(['rev-parse', base]).toString('utf8').trim(), base, 'the exact Boston source base exists');
assert.equal(git(['rev-parse', `${base}^`]).toString('utf8').trim(), baseParent, 'the source branch starts at the exact requested parent');
assert.equal(git(['rev-parse', sourceTerminal]).toString('utf8').trim(), sourceTerminal, 'the exact USA follow-up source terminal exists');
assert.ok(['codex/sprint-us-after-boston-20261013', 'codex/integration-sprint-20261011-preflight'].includes(git(['branch', '--show-current']).toString('utf8').trim()), 'work is either on the exact requested source branch or the isolated integration preflight branch');
assert.equal(git(['ls-tree', '-r', '--name-only', base, '--', 'usa']).toString('utf8').trim().split('\n').filter((file) => file.endsWith('/index.html') || file === 'usa/index.html').length, 97, 'base has the existing English USA routes');

const baseUsaPages = git(['ls-tree', '-r', '--name-only', base, '--', 'usa']).toString('utf8')
  .trim().split('\n').filter((file) => file.endsWith('/index.html') || file === 'usa/index.html');
const changedUsaFiles = git(['diff', '--name-only', base, sourceTerminal, '--', 'usa']).toString('utf8').trim().split('\n').filter(Boolean).sort();
assert.deepEqual(changedUsaFiles, pageFiles.slice().sort(), 'only the USA overview and Juneau source documents changed');

for (const file of pageFiles) {
  const before = mainText(gitText(base, file));
  const after = mainText(fs.readFileSync(path.join(root, file), 'utf8'));
  assert.notEqual(after, before, `${file}: requested English main body changed`);
  assert.equal(after, mainText(gitText(sourceTerminal, file)), `${file}: integrated English body matches the exact source terminal`);
}

for (const file of pageFiles) {
  const baseBody = mainText(gitText(base, file));
  assert.equal(baseBody, mainText(gitText(september, file)), `${file}: exact base body matches the 11 September source`);
  assert.notEqual(mainText(gitText(septemberParent, file)), baseBody, `${file}: a substantive older body change predates this task`);
}

const overviewHtml = fs.readFileSync(path.join(root, pageFiles[0]), 'utf8');
const overview = mainText(overviewHtml);
assert.match(overviewHtml, /data-editorial-revision="usa-country-20261013"/, 'overview carries its source-review revision');
assert.equal(article(overviewHtml)?.datePublished, '2026-09-11', 'overview keeps its original publication date');
assert.equal(article(overviewHtml)?.dateModified, '2026-10-13', 'overview modified date reflects this review');
for (const phrase of ['last updated 9 October 2026', '2026 free-entry offer is limited to U.S. citizens and residents', 'nonresidents pay regular entrance fees', '2026 free-entry dates']) {
  assert.ok(overview.includes(phrase), `overview contains the dated NPS fee fact: ${phrase}`);
}
assert.ok(overview.includes('Source information checked on 13 October 2026.'), 'overview visibly dates its source check');

const juneauHtml = fs.readFileSync(path.join(root, pageFiles[1]), 'utf8');
const juneau = mainText(juneauHtml);
assert.match(juneauHtml, /data-editorial-revision="alaska-juneau-20261013"/, 'Juneau carries its own route revision');
assert.equal(article(juneauHtml)?.datePublished, '2026-09-11', 'Juneau keeps its original publication date');
assert.equal(article(juneauHtml)?.dateModified, '2026-10-13', 'Juneau modified date reflects this review');
for (const phrase of [
  'One night', 'Two nights', 'Three nights', 'downtown base', 'Auke Bay',
  '0.4-mile walk', 'Route 6 Airport Connector', '1.5 miles (2.4 km)',
  'up to 1.5 hours one way', 'weekday-only', '907-789-0097',
  'National Weather Service Juneau forecast', 'choose the downtown cultural day'
]) assert.ok(juneau.includes(phrase), `Juneau includes the actual planning decision: ${phrase}`);
for (const url of [
  'https://dot.alaska.gov/amhs/comm/juneau.shtml',
  'https://juneaucapitaltransit.org/how-to-ride-to-the-mendenhall-glacier-visitor-center-with-capital-transit/',
  'https://www.traveljuneau.com/listing/mendenhall-glacier-visitor-center/44886/',
  'https://www.fs.usda.gov/r10/tongass/offices/mendenhall-glacier-visitor-center',
  'https://www.weather.gov/ajk/'
]) assert.ok(juneauHtml.includes(`href="${url}"`), `Juneau links the dated source: ${url}`);
assert.ok(juneau.includes('Juneau transit and seasonal visitor information were checked on 13 October 2026.'), 'Juneau visibly dates dynamic access checks');

const baseSearch = new Map(JSON.parse(gitText(base, 'data/search-index.json')).map((item) => [item.url, item]));
const currentSearch = new Map(readJson('data/search-index.json').map((item) => [item.url, item]));
assert.equal(baseSearch.size, 955, 'base English search index has 955 records');
assert.equal(currentSearch.size, 955, 'English search keeps 955 records');
assert.deepEqual(new Set(currentSearch.keys()), new Set(baseSearch.keys()), 'English search URL inventory is unchanged');
const changedFollowupSearch = routes.filter((url) => JSON.stringify(currentSearch.get(url)) !== JSON.stringify(baseSearch.get(url))).sort();
assert.deepEqual(changedFollowupSearch, ['/usa/alaska/juneau-southeast/'], 'only Juneau changes search within these two follow-up routes; overview search is unchanged');
assert.equal(currentSearch.get('/usa/alaska/juneau-southeast/').summary, 'Choose Juneau with a one-night downtown plan or a 2–3-night single-base stay, and map the full airport, Auke Bay and Mendenhall transfers before choosing each day.');

const baseSitemap = sitemap(gitText(base, 'sitemap.xml'));
const currentSitemap = sitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560, 'base sitemap has 4,560 URLs');
assert.equal(currentSitemap.size, 4560, 'sitemap keeps 4,560 URLs');
assert.deepEqual(new Set(currentSitemap.keys()), new Set(baseSitemap.keys()), 'sitemap route inventory is unchanged');
const datedRoutes = routes.flatMap((route) => locales.map((locale) => `${locale.prefix}${route}`)).sort();
const changedFollowupDates = datedRoutes.filter((route) => baseSitemap.get(route) !== currentSitemap.get(route)).sort();
assert.deepEqual(changedFollowupDates, datedRoutes, 'exactly the two follow-up paths across five editions receive a new lastmod within their own source scope');
for (const route of datedRoutes) assert.equal(currentSitemap.get(route), '2026-10-13', `${route}: sitemap date`);

const integrationFiles = ['index.html', 'components/header.html', 'components/sidebar.html', 'components/footer.html'];
const alaskaSiblings = baseUsaPages.filter((file) => file.startsWith('usa/alaska/') && !pageFiles.includes(file));
const protectedFiles = [...new Set([...integrationFiles, ...alaskaSiblings])];
const protectedBeforeScopedGeneration = new Map(protectedFiles.map((file) => [file, fs.readFileSync(path.join(root, file))]));
const targetBeforeScopedGeneration = new Map(pageFiles.map((file) => [file, fs.readFileSync(path.join(root, file))]));
execFileSync('node', ['scripts/generate-usa.mjs', '--routes=/usa/,/usa/alaska/juneau-southeast/'], { cwd: root, stdio: 'pipe' });
for (const file of protectedFiles) assert.deepEqual(fs.readFileSync(path.join(root, file)), protectedBeforeScopedGeneration.get(file), `${file}: scoped generation left it byte-for-byte unchanged`);
for (const file of pageFiles) assert.deepEqual(fs.readFileSync(path.join(root, file)), targetBeforeScopedGeneration.get(file), `${file}: scoped generation is deterministic`);

const workByRoute = new Map(collectTranslationWork().map((record) => [record.route, record]));
for (const locale of locales.slice(1)) {
  const batchDir = path.join(root, 'data/i18n/reviewed', locale.code);
  const batchName = fs.readdirSync(batchDir).find((name) => name.endsWith('-usa-juneau-20261013.json'));
  assert.ok(batchName, `${locale.code}: new reviewed translation batch exists`);
  const batch = JSON.parse(fs.readFileSync(path.join(batchDir, batchName), 'utf8'));
  assert.deepEqual(batch.routes, routes, `${locale.code}: exact two-page translation scope`);
  assert.equal(batch.qualityStatus, 'reviewed', `${locale.code}: new translations reviewed`);
  assert.equal(Object.keys(batch.translations).length, 24, `${locale.code}: all 24 fresh strings are owned`);
  assert.equal(batch.reviewProvenance?.independentSecondModel, false, `${locale.code}: no independent-model claim`);
  assert.ok(batch.reviewProvenance?.reviewer.includes('same-model self-review'), `${locale.code}: same-model self-review is recorded`);
  assert.ok(batch.reviewProvenance?.writer.includes('exact runtime variant unavailable'), `${locale.code}: exact runtime limitation is recorded`);

  const catalog = readJson(`data/i18n/${locale.code}.json`);
  assert.equal(catalog.qualityStatus, 'reviewed', `${locale.code}: approved merged catalog`);
  for (const route of routes) {
    const sourceKeys = workByRoute.get(route).units;
    const missing = sourceKeys.filter((source) => !catalog.translations[source]);
    assert.deepEqual(missing, [], `${locale.code} ${route}: no current source key is missing from the merged catalog`);
    const html = fs.readFileSync(localePagePath(locale, route), 'utf8');
    const text = mainText(html);
    assert.ok(locale.script.test(text), `${locale.code} ${route}: localized main uses the target script`);
    assert.equal(article(html)?.datePublished, '2026-09-11', `${locale.code} ${route}: publication date preserved`);
    assert.equal(article(html)?.dateModified, '2026-10-13', `${locale.code} ${route}: localized modified date synchronized`);
    assert.ok(html.includes(`hreflang="${locale.code}"`), `${locale.code} ${route}: alternate link present`);
    const localizedRouteUnits = new Set(sourceKeys);
    for (const [source, target] of Object.entries(batch.translations)) {
      if (localizedRouteUnits.has(source)) assert.ok(html.includes(target), `${locale.code} ${route}: new translation appears in generated HTML: ${source.slice(0, 60)}`);
    }
  }
  const localizedSearchPath = `${locale.dir}/data/search-index.json`;
  const localizedSearch = readJson(localizedSearchPath);
  assert.equal(localizedSearch.length, 955, `${locale.code}: localized search keeps 955 records`);
  assert.equal(localizedSearch.find((item) => item.url === `${locale.prefix}/usa/alaska/juneau-southeast/`)?.summary,
    catalog.translations[currentSearch.get('/usa/alaska/juneau-southeast/').summary], `${locale.code}: search summary uses the reviewed Juneau description`);
  for (const route of routes) assert.equal(currentSitemap.get(`${locale.prefix}${route}`), '2026-10-13', `${locale.code}: localized sitemap date`);
}

for (const file of integrationFiles) assert.deepEqual(gitBytes(sourceTerminal, file), gitBytes(base, file), `${file}: source batch leaves integration and navigation files unchanged`);
assert.equal(git(['diff', '--name-only', base, sourceTerminal, '--', '*.svg', 'assets']).toString('utf8').trim(), '', 'source batch changes no image assets or SVGs');

console.log('USA overview and Juneau source regression passed: prior 71def body history confirmed, two-page scoped generation, four reviewed locale additions, 955 search records per edition, exact 10 date updates and unchanged 4,560-URL inventory; no sibling Alaska page, New York, Seattle, shared navigation, image or SVG changed.');
