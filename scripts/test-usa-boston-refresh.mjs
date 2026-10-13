#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const root = path.resolve(import.meta.dirname, '..');
const base = 'bc08029d36448bcb9d0a42a986caddec883b3d1f';
const baseParent = 'b7d32c7e1585d5af3cf3d4291dd323e5d2da30eb';
const september = '71def01cd4d489552b9f5d67ca1a202becaa0435e';
const routes = [
  '/usa/boston/',
  '/usa/boston/freedom-trail/',
  '/usa/boston/cambridge-harvard/',
  '/usa/boston/harbor-islands/'
];
const laterOverviewJuneauRoutes = ['/usa/', '/usa/alaska/juneau-southeast/'];
const laterJuneauSearchRoutes = ['/usa/alaska/juneau-southeast/'];
const locales = [
  { code: 'en', prefix: '', hreflang: 'en', script: /[A-Za-z]/u, reviewDate: '13 October 2026' },
  { code: 'zh-Hant', prefix: '/zh', hreflang: 'zh-Hant', script: /[\u3400-\u9fff]/u, reviewDate: '2026 年 10 月 13 日' },
  { code: 'ja', prefix: '/ja', hreflang: 'ja', script: /[\u3040-\u30ff\u3400-\u9fff]/u, reviewDate: '2026年10月13日' },
  { code: 'ko', prefix: '/ko', hreflang: 'ko', script: /[\uac00-\ud7af]/u, reviewDate: '2026년 10월 13일' },
  { code: 'th', prefix: '/th', hreflang: 'th', script: /[\u0e00-\u0e7f]/u, reviewDate: '13 ตุลาคม 2026' }
];
const priorScopeReports = [
  'reports/usa-historical-source-scope-ledger-2026-10-12.md',
  'reports/usa-hawaii-refresh-2026-10-12.md',
  'reports/usa-new-orleans-refresh-2026-10-12.md',
  'reports/usa-atlanta-refresh-2026-10-12.md',
  'reports/usa-miami-orlando-neighborhood-refresh-2026-10-13.md',
  'reports/usa-chicago-refresh-2026-10-13.md',
  'reports/usa-new-england-refresh-2026-10-13.md',
  'reports/usa-arizona-refresh-2026-10-13.md',
  'reports/usa-los-angeles-refresh-2026-10-13.md',
  'reports/usa-san-diego-refresh-2026-10-13.md'
];

const git = (args) => execFileSync('git', args, { cwd: root, maxBuffer: 32 * 1024 * 1024 });
const gitText = (revision, file) => git(['show', `${revision}:${file}`]).toString('utf8');
const gitBytes = (revision, file) => git(['show', `${revision}:${file}`]);
const relative = (route) => `${route.slice(1)}index.html`;
const currentPath = (prefix, route) => path.join(root, prefix, route.slice(1), 'index.html');

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
  assert.ok(main, 'document has a main landmark');
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

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
}

assert.equal(git(['rev-parse', base]).toString('utf8').trim(), base, 'the requested source commit exists exactly');
assert.equal(git(['rev-parse', `${base}^`]).toString('utf8').trim(), baseParent, 'the Boston task starts at the exact San Diego source terminal');
const baseUsaPages = git(['ls-tree', '-r', '--name-only', base, '--', 'usa']).toString('utf8')
  .trim().split('\n').filter((file) => file.endsWith('/index.html') || file === 'usa/index.html');
assert.equal(baseUsaPages.length, 97, 'the exact Boston task base has 97 English U.S. routes');

const priorScopeText = priorScopeReports.map((file) => gitText(base, file)).join('\n');
for (const route of routes) assert.ok(!priorScopeText.includes(`\`${route}\``), `${route}: absent from the ten prior exact-base source-scope reports`);

const changedBostonFiles = git(['diff', '--name-only', base, '--', 'usa/boston'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedBostonFiles, routes.map(relative).sort(), 'exactly the four Boston English documents changed');
const changedUsaBodies = [];
const bodyStats = [];
for (const file of baseUsaPages) {
  const before = mainText(gitText(base, file));
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const after = mainText(html);
  if (before !== after) changedUsaBodies.push(file);
  const route = `/${file.slice(0, -'index.html'.length)}`;
  if (laterOverviewJuneauRoutes.includes(route)) {
    const overviewJuneauBase = 'b4045e0b7265cc6c3ceb8f16acb3e591d4b87eda';
    assert.notEqual(after, mainText(gitText(overviewJuneauBase, file)), `${route}: later overview/Juneau follow-up changes after its exact task base`);
    assert.equal(mainText(gitText(overviewJuneauBase, file)), mainText(gitText(september, file)), `${route}: exact task-base body matches the September historical body`);
    assert.equal(article(html)?.dateModified, '2026-10-13', `${route}: overview/Juneau Article date is current`);
    assert.match(html, route === '/usa/' ? /data-editorial-revision="usa-country-20261013"/ : /data-editorial-revision="alaska-juneau-20261013"/, `${route}: overview/Juneau revision marker`);
    continue;
  }
  if (!routes.includes(route)) continue;
  assert.notEqual(after, before, `${route}: substantive English body changed from the exact source base`);
  assert.equal(before, mainText(gitText(september, file)), `${route}: exact task-base body matches 11 September`);
  const data = article(html);
  assert.equal(data?.datePublished, '2026-09-11', `${route}: original publication date is preserved`);
  assert.equal(data?.dateModified, '2026-10-13', `${route}: Article modification date is current`);
  assert.match(html, /data-editorial-revision="boston-20261013"/, `${route}: Boston editorial marker`);
  assert.match(mainText(html), /Selected official access, weather and seasonal service information checked on 13 October 2026\./, `${route}: visible source-check date`);
  bodyStats.push({ route, beforeWords: before.split(/\s+/).length, afterWords: after.split(/\s+/).length });
}
assert.deepEqual(changedUsaBodies.sort(), [...routes, ...laterOverviewJuneauRoutes].map(relative).sort(), 'only the four Boston pages and the two enumerated later overview/Juneau bodies changed');
for (const file of git(['ls-tree', '-r', '--name-only', base, '--', 'usa/new-york']).toString('utf8').trim().split('\n').filter((name) => name.endsWith('/index.html'))) {
  assert.deepEqual(fs.readFileSync(path.join(root, file)), gitBytes(base, file), `${file}: New York sample remains byte-for-byte unchanged`);
}
assert.equal(git(['diff', '--name-only', base, '--', 'usa/new-york']).toString('utf8').trim(), '', 'no New York sample file changed');

const requiredCopy = new Map([
  ['/usa/boston/', ['Two nights', 'Three nights', 'Four nights', 'South Station', 'Red Line', 'Blue Line', 'Aquarium', '2027 calendar']],
  ['/usa/boston/freedom-trail/', ['2.5-mile route', 'stairs-only', 'severe weather', 'locked, staff-only or private entrance']],
  ['/usa/boston/cambridge-harvard/', ['free 16-stop Revolutionary-era', '45–60 minute tour', 'Friday before the tour week', '15 minutes before']],
  ['/usa/boston/harbor-islands/', ['12 October', '13 October 2026', '2027 calendar', 'Long Wharf', 'Hingham', 'unofficial landing']]
]);
for (const [route, phrases] of requiredCopy) {
  const content = mainText(fs.readFileSync(currentPath('', route), 'utf8'));
  for (const phrase of phrases) assert.ok(content.includes(phrase), `${route}: route-specific decision includes “${phrase}”`);
}

const requiredSources = new Map([
  ['/usa/boston/', ['https://www.massport.com/logan-airport/getting-to-logan/public-transportation', 'https://www.massport.com/logan-airport/getting-to-logan/on-airport-shuttle', 'https://www.mbta.com/trip-planner', 'https://www.mbta.com/alerts', 'https://www.nps.gov/bost/planyourvisit/index.htm', 'https://www.weather.gov/box', 'https://www.bostonharborislands.org/ferryschedule/']],
  ['/usa/boston/freedom-trail/', ['https://www.nps.gov/thingstodo/walk-the-freedom-trail.htm', 'https://www.nps.gov/bost/planyourvisit/basicinfo.htm', 'https://www.nps.gov/bost/planyourvisit/index.htm']],
  ['/usa/boston/cambridge-harvard/', ['https://www.harvard.edu/visit/tours/', 'https://www.harvard.edu/visit/maps-directions/', 'https://www.mbta.com/alerts']],
  ['/usa/boston/harbor-islands/', ['https://www.bostonharborislands.org/ferryschedule/', 'https://www.nps.gov/boha/planyourvisit/accessibility.htm', 'https://www.nps.gov/bost/planyourvisit/index.htm', 'https://www.weather.gov/box']]
]);
for (const [route, urls] of requiredSources) {
  const html = fs.readFileSync(currentPath('', route), 'utf8');
  for (const url of urls) assert.ok(html.includes(`href="${url}"`), `${route}: official source link exists: ${url}`);
}

const baseSearch = new Map(JSON.parse(gitText(base, 'data/search-index.json')).map((entry) => [entry.url, entry]));
const currentSearch = new Map(readJson('data/search-index.json').map((entry) => [entry.url, entry]));
assert.equal(baseSearch.size, 955, 'English search has 955 records at the source base');
assert.equal(currentSearch.size, 955, 'English search retains 955 records');
assert.deepEqual(new Set(currentSearch.keys()), new Set(baseSearch.keys()), 'English search URL set remains unchanged');
assert.deepEqual([...currentSearch].filter(([url, entry]) => JSON.stringify(entry) !== JSON.stringify(baseSearch.get(url))).map(([url]) => url).sort(), [...routes, ...laterJuneauSearchRoutes].sort(), 'only the four Boston and the Juneau English search summaries changed; overview search remains unchanged');

const baseSitemap = sitemap(gitText(base, 'sitemap.xml'));
const currentSitemap = sitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560, 'source-base sitemap has 4,560 URLs');
assert.equal(currentSitemap.size, 4560, 'current sitemap retains 4,560 URLs');
assert.deepEqual(new Set(currentSitemap.keys()), new Set(baseSitemap.keys()), 'all 4,560 sitemap URLs remain unchanged');
const datedPaths = [...routes, ...laterOverviewJuneauRoutes].flatMap((route) => locales.map(({ prefix }) => `${prefix}${route}`)).sort();
assert.deepEqual([...currentSitemap].filter(([route, date]) => baseSitemap.get(route) !== date).map(([route]) => route).sort(), datedPaths, 'only the four Boston and two overview/Juneau routes across five editions receive new sitemap dates');
for (const route of datedPaths) assert.equal(currentSitemap.get(route), '2026-10-13', `${route}: sitemap lastmod`);

for (const locale of locales) {
  const searchPath = locale.code === 'en' ? 'data/search-index.json' : `${locale.prefix.slice(1)}/data/search-index.json`;
  const records = readJson(searchPath);
  const afterRecords = new Map(records.map((entry) => [entry.url, entry]));
  assert.equal(records.length, 955, `${locale.code}: search has 955 records`);
  if (locale.code === 'en') {
    const beforeRecords = new Map(JSON.parse(gitText(base, searchPath)).map((entry) => [entry.url, entry]));
    assert.deepEqual([...afterRecords].filter(([url, entry]) => JSON.stringify(entry) !== JSON.stringify(beforeRecords.get(url))).map(([url]) => url).sort(), [...routes, ...laterJuneauSearchRoutes].sort(), 'English: only Boston and Juneau search summaries changed');
  }
  const catalog = locale.code === 'en' ? null : readJson(`data/i18n/${locale.code}.json`).translations;
  for (const route of routes) {
    const html = fs.readFileSync(currentPath(locale.prefix, route), 'utf8');
    const content = mainText(html);
    assert.ok(locale.script.test(content), `${locale.code}: localized body contains native script for ${route}`);
    assert.ok(content.length > 1000, `${locale.code}: localized body is substantive for ${route}`);
    assert.ok(content.includes(locale.reviewDate), `${locale.code}: localized body records 13 October source review for ${route}`);
    assert.equal(article(html)?.datePublished, '2026-09-11', `${locale.code}: original publication date remains on ${route}`);
    assert.equal(article(html)?.dateModified, '2026-10-13', `${locale.code}: Article modification date on ${route}`);
    assert.match(html, new RegExp(`hreflang="${locale.hreflang}"`), `${locale.code}: hreflang metadata on ${route}`);
    assert.ok(html.includes('data-editorial-revision="boston-20261013"'), `${locale.code}: editorial marker on ${route}`);
    assert.equal(currentSitemap.get(`${locale.prefix}${route}`), '2026-10-13', `${locale.code}: sitemap date on ${route}`);
    const summary = afterRecords.get(`${locale.prefix}${route}`)?.summary;
    assert.ok(summary && locale.script.test(summary), `${locale.code}: localized search summary on ${route}`);
    if (locale.code !== 'en') assert.equal(summary, catalog[currentSearch.get(route)?.summary], `${locale.code}: search summary matches the reviewed translation on ${route}`);
  }
}

for (const locale of locales.slice(1)) {
  const directory = path.join(root, 'data', 'i18n', 'reviewed', locale.code);
  const file = fs.readdirSync(directory).find((name) => name.endsWith('-usa-boston-refresh-pages-20261013.json'));
  assert.ok(file, `${locale.code}: Boston translation batch exists`);
  const batch = JSON.parse(fs.readFileSync(path.join(directory, file), 'utf8'));
  assert.deepEqual(batch.routes, routes, `${locale.code}: exact translation batch scope`);
  assert.equal(batch.qualityStatus, 'reviewed', `${locale.code}: batch is reviewed`);
  assert.equal(Object.keys(batch.translations).length, 28, `${locale.code}: batch owns 28 fresh source keys`);
  assert.ok(Object.values(batch.translations).every((value) => value.trim()), `${locale.code}: all translated values are nonempty`);
  assert.equal(batch.reviewProvenance?.independentSecondModel, false, `${locale.code}: independent review is not claimed`);
  assert.ok(batch.reviewProvenance?.writer.includes('exact runtime variant unavailable'), `${locale.code}: exact runtime limitation is recorded`);
  assert.ok(batch.reviewProvenance?.reviewer.includes('same-model self-review'), `${locale.code}: same-model self-review is recorded`);
}

for (const file of git(['ls-tree', '-r', '--name-only', base, '--', 'usa/new-york']).toString('utf8').trim().split('\n').filter((name) => name.endsWith('/index.html'))) {
  assert.deepEqual(fs.readFileSync(path.join(root, file)), gitBytes(base, file), `${file}: New York unchanged after localization`);
}
assert.equal(git(['diff', '--name-only', base, '--', 'assets']).toString('utf8').trim(), '', 'no image asset or image-credit source changed');
assert.equal(git(['diff', '--name-only', base, '--', '*.svg']).toString('utf8').trim(), '', 'no SVG file changed or was added');
assert.equal(git(['ls-files', '--others', '--exclude-standard', '*.svg']).toString('utf8').trim(), '', 'no untracked SVG exists');

console.log(`Boston source regression passed: four history-deduplicated Boston pages plus two later overview/Juneau body/date follow-ups; Juneau alone adds a search change; exact-base history, 955 records per locale, ${datedPaths.length} dates, unchanged New York/4,560 URLs and no assets or SVGs changed.`);
console.log(JSON.stringify(bodyStats, null, 2));
