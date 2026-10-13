#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const root = path.resolve(import.meta.dirname, '..');
const base = '654f0475dcbaa22f88f88a20169e1f18a04b14ab';
const september = '71def01cd4d489552b9f5d67ca1a202becaa0435e';
const routes = [
  '/usa/chicago/',
  '/usa/chicago/loop-riverwalk/',
  '/usa/chicago/museum-lakefront/',
  '/usa/chicago/neighborhoods/'
];
const laterNewEnglandRoutes = [
  '/usa/new-england/',
  '/usa/new-england/portland-maine/',
  '/usa/new-england/acadia/',
  '/usa/new-england/white-mountains-vermont/'
];
const laterArizonaRoutes = [
  '/usa/arizona/',
  '/usa/arizona/phoenix-scottsdale/',
  '/usa/arizona/sedona/',
  '/usa/arizona/grand-canyon/'
];
const laterLosAngelesRoutes = [
  '/usa/los-angeles/',
  '/usa/los-angeles/downtown-arts/',
  '/usa/los-angeles/hollywood-griffith/',
  '/usa/los-angeles/santa-monica-venice/'
];
const laterSanDiegoRoutes = [
  '/usa/san-diego/',
  '/usa/san-diego/balboa-park/',
  '/usa/san-diego/harbor-coronado/',
  '/usa/san-diego/la-jolla/'
];
const laterBostonRoutes = [
  '/usa/boston/',
  '/usa/boston/freedom-trail/',
  '/usa/boston/cambridge-harvard/',
  '/usa/boston/harbor-islands/'
];
const laterOverviewJuneauRoutes = ['/usa/', '/usa/alaska/juneau-southeast/'];
const laterJuneauSearchRoutes = ['/usa/alaska/juneau-southeast/'];
const locales = [
  { code: 'en', prefix: '', script: /[A-Za-z]/u },
  { code: 'zh-Hant', prefix: '/zh', script: /[\u3400-\u9fff]/u },
  { code: 'ja', prefix: '/ja', script: /[\u3040-\u30ff\u3400-\u9fff]/u },
  { code: 'ko', prefix: '/ko', script: /[\uac00-\ud7af]/u },
  { code: 'th', prefix: '/th', script: /[\u0e00-\u0e7f]/u }
];
const newYorkPath = 'usa/new-york/index.html';
const selectedPaths = new Set(routes.map((route) => route.slice(1) + 'index.html'));
const rootPath = (prefix, route) => path.join(root, `${prefix}${route}`, 'index.html');
const gitShow = (revision, relativePath) => execFileSync('git', ['show', `${revision}:${relativePath}`], { cwd: root, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
const gitBuffer = (revision, relativePath) => execFileSync('git', ['show', `${revision}:${relativePath}`], { cwd: root, maxBuffer: 32 * 1024 * 1024 });
const gitList = (revision, ...args) => execFileSync('git', ['ls-tree', '-r', '--name-only', revision, ...args], { cwd: root, encoding: 'utf8' }).trim().split('\n').filter(Boolean);

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
  assert.ok(main, 'HTML page must have main landmark');
  return textContent(main).replace(/\s+/g, ' ').trim();
}
function article(html) {
  const document = parse(html);
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
  walk(document);
  return found;
}
function sitemap(xml) {
  return new Map([...xml.matchAll(/<url><loc>(.*?)<\/loc><lastmod>(.*?)<\/lastmod>.*?<\/url>/gs)]
    .map(([, url, date]) => [new URL(url).pathname, date]));
}
function searchByUrl(json) { return new Map(json.map((entry) => [entry.url, entry])); }
const wordCount = (value) => (value.match(/\b[A-Za-z0-9]+(?:['’][A-Za-z0-9]+)*\b/g) || []).length;

const basePaths = gitList(base, '--', 'usa').filter((file) => file.endsWith('/index.html') || file === 'usa/index.html');
assert.equal(basePaths.length, 97, 'the selected source commit has 97 U.S. routes');
const changedBodyPaths = [];
const bodyStats = [];
for (const relativePath of basePaths) {
  const beforeHtml = gitShow(base, relativePath);
  const targetFile = path.join(root, relativePath);
  assert.ok(fs.existsSync(targetFile), `existing route remains present: ${relativePath}`);
  const afterHtml = fs.readFileSync(targetFile, 'utf8');
  const before = mainText(beforeHtml);
  const after = mainText(afterHtml);
  if (before !== after) changedBodyPaths.push(relativePath);
  if (!selectedPaths.has(relativePath) && !laterNewEnglandRoutes.some((route) => route.slice(1) + 'index.html' === relativePath) && !laterArizonaRoutes.some((route) => route.slice(1) + 'index.html' === relativePath) && !laterLosAngelesRoutes.some((route) => route.slice(1) + 'index.html' === relativePath) && !laterSanDiegoRoutes.some((route) => route.slice(1) + 'index.html' === relativePath) && !laterBostonRoutes.some((route) => route.slice(1) + 'index.html' === relativePath) && !laterOverviewJuneauRoutes.some((route) => route.slice(1) + 'index.html' === relativePath)) assert.equal(after, before, `${relativePath}: main body must remain unchanged outside this task and the explicitly listed later U.S. source batches`);
  else if (selectedPaths.has(relativePath)) {
    assert.notEqual(after, before, `${relativePath}: substantive body must change`);
    assert.equal(mainText(gitShow(september, relativePath)), before, `${relativePath}: historical September body must match exact task base`);
    const data = article(afterHtml);
    assert.equal(data?.dateModified, '2026-10-13', `${relativePath}: Article dateModified`);
    assert.equal(data?.datePublished, '2026-09-11', `${relativePath}: original publication date remains`);
    assert.match(afterHtml, /data-editorial-revision="chicago-20261013"/, `${relativePath}: editorial revision marker`);
    assert.match(afterHtml, /Editorial review: 13 October 2026\./, `${relativePath}: visible English review date`);
    bodyStats.push({ route: `/${relativePath}`, beforeChars: before.length, afterChars: after.length, beforeWords: wordCount(before), afterWords: wordCount(after), beforeSha256: crypto.createHash('sha256').update(before).digest('hex'), afterSha256: crypto.createHash('sha256').update(after).digest('hex') });
  } else if (laterNewEnglandRoutes.some((route) => route.slice(1) + 'index.html' === relativePath)) {
    const taskBase = 'dc88a75c561d3e7a4f30bd00afadb6e8d52841d7';
    assert.notEqual(after, before, `${relativePath}: later New England body changes after the Chicago task base`);
    assert.equal(mainText(gitShow(taskBase, relativePath)), mainText(gitShow(september, relativePath)), `${relativePath}: later New England selection matches the September body at its exact base`);
  } else if (laterArizonaRoutes.some((route) => route.slice(1) + 'index.html' === relativePath)) {
    const arizonaBase = '45cae962fdc7fb500cfceb505203efbfd2dbc396';
    assert.notEqual(after, before, `${relativePath}: later Arizona body changes after the Chicago task base`);
    assert.equal(mainText(gitShow(arizonaBase, relativePath)), mainText(gitShow(september, relativePath)), `${relativePath}: later Arizona selection matches the September body at its exact base`);
    assert.equal(article(afterHtml)?.dateModified, '2026-10-13', `${relativePath}: later Arizona Article date`);
    assert.match(afterHtml, /data-editorial-revision="arizona-20261013"/, `${relativePath}: later Arizona marker`);
  } else if (laterSanDiegoRoutes.some((route) => route.slice(1) + 'index.html' === relativePath)) {
    const sanDiegoBase = 'b7d32c7e1585d5af3cf3d4291dd323e5d2da30eb';
    assert.notEqual(after, before, `${relativePath}: later San Diego source body changes after the Chicago task base`);
    assert.equal(mainText(gitShow(sanDiegoBase, relativePath)), mainText(gitShow(september, relativePath)), `${relativePath}: later San Diego selection matches its exact source base September body`);
    assert.equal(article(afterHtml)?.dateModified, '2026-10-13', `${relativePath}: later San Diego Article date`);
    assert.match(afterHtml, /data-editorial-revision="san-diego-20261013"/, `${relativePath}: later San Diego marker`);
  } else if (laterBostonRoutes.some((route) => route.slice(1) + 'index.html' === relativePath)) {
    const bostonBase = 'bc08029d36448bcb9d0a42a986caddec883b3d1f';
    assert.notEqual(after, before, `${relativePath}: later Boston body changes after the Chicago task base`);
    assert.equal(mainText(gitShow(bostonBase, relativePath)), mainText(gitShow(september, relativePath)), `${relativePath}: Boston exact source base matches the September body`);
    assert.equal(article(afterHtml)?.dateModified, '2026-10-13', `${relativePath}: later Boston Article date`);
    assert.match(afterHtml, /data-editorial-revision="boston-20261013"/, `${relativePath}: later Boston marker`);
  } else if (laterOverviewJuneauRoutes.some((route) => route.slice(1) + 'index.html' === relativePath)) {
    const overviewJuneauBase = 'b4045e0b7265cc6c3ceb8f16acb3e591d4b87eda';
    assert.notEqual(after, mainText(gitShow(overviewJuneauBase, relativePath)), `${relativePath}: later overview/Juneau source follow-up changes after its exact task base`);
    assert.equal(mainText(gitShow(overviewJuneauBase, relativePath)), mainText(gitShow(september, relativePath)), `${relativePath}: exact task-base body matches the September historical body; this pass is not described as first-ever work`);
    assert.equal(article(afterHtml)?.dateModified, '2026-10-13', `${relativePath}: later overview/Juneau Article date`);
    assert.equal(article(afterHtml)?.datePublished, '2026-09-11', `${relativePath}: original publication date remains`);
    assert.match(afterHtml, relativePath === 'usa/index.html' ? /data-editorial-revision="usa-country-20261013"/ : /data-editorial-revision="alaska-juneau-20261013"/, `${relativePath}: later overview/Juneau marker`);
  } else {
    const losAngelesBase = 'd5f7d1689b784b4930cd9f7d4496ab3148929162';
    assert.notEqual(after, before, `${relativePath}: later Los Angeles body changes after the Chicago task base`);
    assert.equal(mainText(gitShow(losAngelesBase, relativePath)), mainText(gitShow(september, relativePath)), `${relativePath}: later Los Angeles selection matches its exact source base September body`);
    assert.equal(article(afterHtml)?.dateModified, '2026-10-13', `${relativePath}: later Los Angeles Article date`);
    assert.match(afterHtml, /data-editorial-revision="los-angeles-20261013"/, `${relativePath}: later Los Angeles marker`);
  }
}
assert.deepEqual(changedBodyPaths.sort(), [...selectedPaths, ...laterNewEnglandRoutes.map((route) => route.slice(1) + 'index.html'), ...laterArizonaRoutes.map((route) => route.slice(1) + 'index.html'), ...laterLosAngelesRoutes.map((route) => route.slice(1) + 'index.html'), ...laterSanDiegoRoutes.map((route) => route.slice(1) + 'index.html'), ...laterBostonRoutes.map((route) => route.slice(1) + 'index.html'), ...laterOverviewJuneauRoutes.map((route) => route.slice(1) + 'index.html')].sort(), 'only the four Chicago routes and explicitly scoped later U.S. body batches changed');
assert.deepEqual(gitBuffer(base, newYorkPath), fs.readFileSync(path.join(root, newYorkPath)), 'New York acceptance sample remains byte-for-byte unchanged from the exact task base');

const expectedEvidence = new Map([
  ['/usa/chicago/', ['Count usable full days, not hotel nights.', 'With two nights', 'Three usable days', 'With four nights', 'N62 Archer', 'terminals 1–3', 'State/Lake']],
  ['/usa/chicago/loop-riverwalk/', ['90-minute docent-led cruise', '112 E. Wacker', '30 minutes before departure', 'return to the last open street access', 'Chicago Cultural Center', 'Clark/Lake or Washington/Wabash']],
  ['/usa/chicago/museum-lakefront/', ['last entry at 4 p.m.', 'cannot re-enter', 'final admission is one hour before closing', 'Memorial Day weekend through Labor Day', 'Check the National Weather Service Chicago forecast']],
  ['/usa/chicago/neighborhoods/', ['Damen and Logan Square are separate Blue Line stations', 'several meals or shows', 'Chicago Cultural Center', '606']]
]);
for (const [route, phrases] of expectedEvidence) {
  const html = fs.readFileSync(rootPath('', route), 'utf8');
  const content = mainText(html);
  for (const phrase of phrases) assert.ok(content.includes(phrase), `${route}: route-specific decision evidence includes “${phrase}”`);
}
const requiredSources = [
  'https://www.transitchicago.com/airports/default.aspx',
  'https://www.transitchicago.com/alerts/',
  'https://cruise.architecture.org/city-tours/first-lady',
  'https://www.chicago.gov/city/en/depts/dca/supp_info/chicago_riverwalk.html',
  'https://www.chicago.gov/city/en/depts/dca/supp_info/chicago_cultural_center.html',
  'https://www.fieldmuseum.org/landing/visit',
  'https://www.sheddaquarium.org/plan-a-visit',
  'https://www.adlerplanetarium.org/plan-your-visit/',
  'https://www.transitchicago.com/bus/130/',
  'https://www.transitchicago.com/bus/146/',
  'https://www.transitchicago.com/blueline/',
  'https://www.weather.gov/lot/'
];
for (const route of routes) {
  const html = fs.readFileSync(rootPath('', route), 'utf8');
  for (const url of requiredSources) {
    if (html.includes(url)) assert.ok(html.includes(`href="${url}"`), `${route}: source URL is linked`);
  }
  assert.match(html, /Source information checked on 13 October 2026\./, `${route}: source check date`);
}

const baseSearch = searchByUrl(JSON.parse(gitShow(base, 'data/search-index.json')));
const currentSearch = searchByUrl(JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8')));
assert.equal(baseSearch.size, 955, 'source-base English search index has 955 records');
assert.equal(currentSearch.size, 955, 'English search index retains 955 records');
assert.deepEqual(new Set(currentSearch.keys()), new Set(baseSearch.keys()), 'English search URL set remains unchanged');
const changedSearchRoutes = [...currentSearch].filter(([url, value]) => JSON.stringify(value) !== JSON.stringify(baseSearch.get(url))).map(([url]) => url).sort();
assert.deepEqual(changedSearchRoutes, [...routes, ...laterNewEnglandRoutes, ...laterArizonaRoutes, ...laterLosAngelesRoutes, ...laterSanDiegoRoutes, ...laterBostonRoutes, ...laterJuneauSearchRoutes].sort(), 'only the Chicago, New England, Arizona, Los Angeles, San Diego, Boston and Juneau English search records changed; the country overview summary remains unchanged');

const baseSitemap = sitemap(gitShow(base, 'sitemap.xml'));
const currentSitemap = sitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560, 'source-base sitemap has 4,560 URLs');
assert.equal(currentSitemap.size, 4560, 'current sitemap retains 4,560 URLs');
assert.deepEqual(new Set(currentSitemap.keys()), new Set(baseSitemap.keys()), 'sitemap URL set remains unchanged');
const datePaths = [...routes, ...laterNewEnglandRoutes, ...laterArizonaRoutes, ...laterLosAngelesRoutes, ...laterSanDiegoRoutes, ...laterBostonRoutes, ...laterOverviewJuneauRoutes].flatMap((route) => locales.map(({ prefix }) => `${prefix}${route}`)).sort();
const changedDates = [...currentSitemap].filter(([route, date]) => baseSitemap.get(route) !== date).map(([route]) => route).sort();
assert.deepEqual(changedDates, datePaths, 'only selected Chicago routes and enumerated later source/date routes across five editions receive updated dates');
for (const route of datePaths) assert.equal(currentSitemap.get(route), '2026-10-13', `${route}: sitemap lastmod`);

for (const route of [...routes, ...laterNewEnglandRoutes, ...laterArizonaRoutes, ...laterLosAngelesRoutes, ...laterSanDiegoRoutes, ...laterBostonRoutes, ...laterOverviewJuneauRoutes]) {
  for (const locale of locales) {
    const htmlPath = rootPath(locale.prefix, route);
    assert.ok(fs.existsSync(htmlPath), `${locale.code} page exists for ${route}`);
    const html = fs.readFileSync(htmlPath, 'utf8');
    const content = mainText(html);
    assert.ok(locale.script.test(content), `${locale.code} body contains native language text for ${route}`);
    assert.equal(article(html)?.dateModified, '2026-10-13', `${locale.code} Article date for ${route}`);
    assert.match(html, new RegExp(`hreflang="${locale.code === 'zh-Hant' ? 'zh-Hant' : locale.code === 'en' ? 'en' : locale.code}"`), `${locale.code} alternate language metadata for ${route}`);
  }
}
for (const locale of locales.slice(1)) {
  const recordsPath = path.join(root, `${locale.prefix}/data/search-index.json`);
  assert.ok(fs.existsSync(recordsPath), `${locale.code} localized search index exists`);
  const records = searchByUrl(JSON.parse(fs.readFileSync(recordsPath, 'utf8')));
  assert.equal(records.size, 955, `${locale.code} search index has 955 records`);
  const summaries = [];
  for (const route of [...routes, ...laterNewEnglandRoutes, ...laterArizonaRoutes, ...laterLosAngelesRoutes, ...laterSanDiegoRoutes, ...laterBostonRoutes, ...laterJuneauSearchRoutes]) {
    const entry = records.get(`${locale.prefix}${route}`);
    assert.ok(entry?.summary, `${locale.code} localized search summary exists for ${route}`);
    assert.ok(locale.script.test(entry.summary), `${locale.code} search summary is translated for ${route}`);
    summaries.push(entry.summary);
  }
}

console.log(`USA Chicago refresh regression passed: four Chicago routes plus later New England, Arizona, Los Angeles, San Diego, Boston, U.S. overview and Juneau paths; Juneau alone adds a later search change; 97-route U.S. inventory and New York acceptance sample unchanged; ${datePaths.length} edition dates, 955 English/localized search records, 4,560 sitemap URLs preserved.`);
console.log(JSON.stringify(bodyStats, null, 2));
