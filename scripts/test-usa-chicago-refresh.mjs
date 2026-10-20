#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { postNewEnglandIntegrationRoutes, postNewEnglandArizonaRoutes, postArizonaLosAngelesRoutes, postLosAngelesBostonRoutes, postLosAngelesSanDiegoRoutes, postBostonOverviewJuneauRoutes, postBostonOverviewJuneauSearchRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = '654f0475dcbaa22f88f88a20169e1f18a04b14ab';
const september = '71def01cd4d489552b9f5d67ca1a202becaa0435';
const routes = [
  '/usa/chicago/',
  '/usa/chicago/loop-riverwalk/',
  '/usa/chicago/museum-lakefront/',
  '/usa/chicago/neighborhoods/'
];
const chicagoTerminal = 'dc88a75c561d3e7a4f30bd00afadb6e8d52841d7';
const newEnglandTerminal = '45cae962fdc7fb500cfceb505203efbfd2dbc396';
const newEnglandRoutes = postNewEnglandIntegrationRoutes;
const arizonaRoutes = postNewEnglandArizonaRoutes;
const arizonaTerminal = 'd5f7d1689b784b4930cd9f7d4496ab3148929162';
const losAngelesRoutes = postArizonaLosAngelesRoutes;
const bostonRoutes = postLosAngelesBostonRoutes;
const overviewJuneauBase = 'b4045e0b7265cc6c3ceb8f16acb3e591d4b87eda';
const overviewJuneauTerminal = '73bcb05ae123fe3e4b70f057fa4dc7fc88979693';
const sanDiegoRoutes = postLosAngelesSanDiegoRoutes;
const sanDiegoTerminal = 'bc08029d36448bcb9d0a42a986caddec883b3d1f';
const bostonTerminal = 'b4045e0b7265cc6c3ceb8f16acb3e591d4b87eda';
const losAngelesTerminal = 'b7d32c7e1585d5af3cf3d4291dd323e5d2da30eb';
const locales = [
  { code: 'en', prefix: '', script: /[A-Za-z]/u },
  { code: 'zh-Hant', prefix: '/zh', script: /[\u3400-\u9fff]/u },
  { code: 'ja', prefix: '/ja', script: /[\u3040-\u30ff\u3400-\u9fff]/u },
  { code: 'ko', prefix: '/ko', script: /[\uac00-\ud7af]/u },
  { code: 'th', prefix: '/th', script: /[\u0e00-\u0e7f]/u }
];
const newYorkPath = 'usa/new-york/index.html';
const selectedPaths = new Set([...routes, ...newEnglandRoutes, ...arizonaRoutes, ...losAngelesRoutes, ...sanDiegoRoutes, ...bostonRoutes, ...postBostonOverviewJuneauRoutes].map((route) => route.slice(1) + 'index.html'));
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
function normalizeSharedAssetVersions(html) {
  return html
    .replace(/\/css\/site\.css\?v=[^"'\s]+/gu, '/css/site.css?v=<shared>')
    .replace(/\/js\/main\.js\?v=[^"'\s]+/gu, '/js/main.js?v=<shared>');
}
function searchByUrl(json) { return new Map(json.map((entry) => [entry.url, entry])); }
const wordCount = (value) => (value.match(/\b[A-Za-z0-9]+(?:['’][A-Za-z0-9]+)*\b/g) || []).length;

const basePaths = gitList(base, '--', 'usa').filter((file) => file.endsWith('/index.html') || file === 'usa/index.html');
assert.equal(basePaths.length, 97, 'the selected source commit has 97 U.S. routes');
const basePathSet = new Set(basePaths);
const changedBodyPaths = [];
const bodyStats = [];
const auditedPaths = [...new Set([...basePaths, ...[...selectedPaths].filter((file) => !basePathSet.has(file))])].sort();
for (const relativePath of auditedPaths) {
  const beforeHtml = basePathSet.has(relativePath) ? gitShow(base, relativePath) : '';
  const targetFile = path.join(root, relativePath);
  assert.ok(fs.existsSync(targetFile), `existing route remains present: ${relativePath}`);
  const afterHtml = fs.readFileSync(targetFile, 'utf8');
  const before = beforeHtml ? mainText(beforeHtml) : '';
  const after = mainText(afterHtml);
  if (before !== after) changedBodyPaths.push(relativePath);
  const route = `/${relativePath.slice(0, -'index.html'.length)}`;
  if (postBostonOverviewJuneauRoutes.includes(route)) {
    if (basePathSet.has(relativePath)) {
      assert.equal(mainText(gitShow(overviewJuneauBase, relativePath)), mainText(gitShow(september, relativePath)), `${route}: exact follow-up task base preserves the September historical body`);
      assert.notEqual(after, mainText(gitShow(overviewJuneauBase, relativePath)), `${route}: dated follow-up changes after its exact task base`);
    } else {
      assert(!gitList(overviewJuneauBase, '--', relativePath).includes(relativePath), `${route}: exact follow-up task base confirms this route was newly added`);
      assert(after.length > 0, `${route}: the newly added follow-up has substantive English body text`);
    }
    assert.equal(after, mainText(gitShow(overviewJuneauTerminal, relativePath)), `${route}: body matches exact overview/Juneau source terminal`);
    const articleData = article(afterHtml);
    assert.equal(articleData?.dateModified, '2026-10-13', `${route}: Article dateModified`);
    assert.match(afterHtml, route === '/usa/' ? /data-editorial-revision="usa-country-20261013"/ : /data-editorial-revision="alaska-juneau-20261013"/, `${route}: exact source marker`);
    continue;
  }
  if (!selectedPaths.has(relativePath)) assert.equal(after, before, `${relativePath}: main body remains unchanged outside the exact Chicago, New England and later Arizona source batches`);
  else {
    assert.notEqual(after, before, `${relativePath}: substantive body must change`);
    assert.equal(mainText(gitShow(september, relativePath)), before, `${relativePath}: historical September body must match exact task base`);
    const isChicago = routes.includes(route);
    const sourceTerminal = isChicago ? chicagoTerminal : newEnglandRoutes.includes(route) ? newEnglandTerminal : losAngelesRoutes.includes(route) ? losAngelesTerminal : sanDiegoRoutes.includes(route) ? sanDiegoTerminal : bostonRoutes.includes(route) ? bostonTerminal : arizonaTerminal;
    assert.equal(after, mainText(gitShow(sourceTerminal, relativePath)), `${relativePath}: ${isChicago ? 'Chicago' : newEnglandRoutes.includes(route) ? 'already-counted New England' : losAngelesRoutes.includes(route) ? 'later Los Angeles' : sanDiegoRoutes.includes(route) ? 'later San Diego' : bostonRoutes.includes(route) ? 'later Boston' : 'later Arizona'} body matches its exact source terminal`);
    const data = article(afterHtml);
    assert.equal(data?.dateModified, '2026-10-13', `${relativePath}: Article dateModified`);
    assert.equal(data?.datePublished, '2026-09-11', `${relativePath}: original publication date remains`);
    assert.match(afterHtml, new RegExp(`data-editorial-revision="${isChicago ? 'chicago' : newEnglandRoutes.includes(route) ? 'new-england' : losAngelesRoutes.includes(route) ? 'los-angeles' : sanDiegoRoutes.includes(route) ? 'san-diego' : bostonRoutes.includes(route) ? 'boston' : 'arizona'}-20261013"`), `${relativePath}: editorial revision marker`);
    assert.match(afterHtml, /Editorial review: 13 October 2026\./, `${relativePath}: visible English review date`);
    if (isChicago) bodyStats.push({ route, beforeChars: before.length, afterChars: after.length, beforeWords: wordCount(before), afterWords: wordCount(after), beforeSha256: crypto.createHash('sha256').update(before).digest('hex'), afterSha256: crypto.createHash('sha256').update(after).digest('hex') });
  }
}
assert.deepEqual(changedBodyPaths.sort(), [...selectedPaths].sort(), 'Chicago bodies plus the exact later New England, Arizona, Los Angeles, San Diego and Boston batches changed');
assert.equal(normalizeSharedAssetVersions(gitBuffer(base, newYorkPath).toString('utf8')), normalizeSharedAssetVersions(fs.readFileSync(path.join(root, newYorkPath), 'utf8')), 'New York acceptance sample remains unchanged from the exact task base apart from shared asset cache versions');

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
assert.equal(currentSearch.size, 988, 'English search index retains 988 records');
assert.deepEqual(new Set([...currentSearch.keys()].filter((url) => !url.includes('/spain/'))), new Set(baseSearch.keys()), 'English search URL set remains unchanged');
const changedSearchRoutes = [...currentSearch].filter(([url, value]) => !url.includes('/spain/') && url.startsWith('/usa/') && JSON.stringify(value) !== JSON.stringify(baseSearch.get(url))).map(([url]) => url).sort();
assert.deepEqual(changedSearchRoutes, [...routes, ...newEnglandRoutes, ...arizonaRoutes, ...losAngelesRoutes, ...sanDiegoRoutes, ...bostonRoutes, ...postBostonOverviewJuneauSearchRoutes].sort(), 'Chicago adds four English search changes; later Juneau search is added explicitly and overview search remains unchanged');

const baseSitemap = sitemap(gitShow(base, 'sitemap.xml'));
const currentSitemap = sitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560, 'source-base sitemap has 4,560 URLs');
assert.equal(currentSitemap.size, 4725, 'current sitemap retains 4,560 URLs');
assert.deepEqual(new Set([...currentSitemap.keys()].filter((url) => !url.includes('/spain/'))), new Set(baseSitemap.keys()), 'sitemap URL set remains unchanged');
const datePaths = routes.flatMap((route) => locales.map(({ prefix }) => `${prefix}${route}`)).sort();
const changedDates = [...currentSitemap].filter(([route, date]) => route.replace(/^\/(?:zh|ja|ko|th)(?=\/)/, '').startsWith('/usa/') && baseSitemap.get(route) !== date).map(([route]) => route).sort();
const expectedUsDates = [...routes, ...newEnglandRoutes, ...arizonaRoutes, ...losAngelesRoutes, ...sanDiegoRoutes, ...bostonRoutes, ...postBostonOverviewJuneauRoutes].flatMap((route) => locales.map(({ prefix }) => `${prefix}${route}`)).sort();
assert.deepEqual(changedDates, expectedUsDates, 'Chicago, New England, Arizona and Los Angeles routes have their exact five-edition dates');
for (const route of datePaths) assert.equal(currentSitemap.get(route), '2026-10-13', `${route}: sitemap lastmod`);

for (const route of routes) {
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
  assert.equal(records.size, 988, `${locale.code} search index has 988 records`);
  const summaries = [];
  for (const route of routes) {
    const entry = records.get(`${locale.prefix}${route}`);
    assert.ok(entry?.summary, `${locale.code} localized search summary exists for ${route}`);
    assert.ok(locale.script.test(entry.summary), `${locale.code} search summary is translated for ${route}`);
    summaries.push(entry.summary);
  }
}

console.log(`USA Chicago refresh regression passed: four Chicago routes plus exact New England, Arizona, Los Angeles, San Diego and Boston batches and two separately accounted overview/Juneau bodies; only Juneau adds search; ${expectedUsDates.length} scoped edition dates, 955 records per locale and the 4,560-URL set preserved.`);
console.log(JSON.stringify(bodyStats, null, 2));
