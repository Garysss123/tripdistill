#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const root = path.resolve(import.meta.dirname, '..');
const base = '45cae962fdc7fb500cfceb505203efbfd2dbc396';
const september = '71def01cd4d489552b9f5d67ca1a202becaa0435e';
const routes = [
  '/usa/arizona/',
  '/usa/arizona/phoenix-scottsdale/',
  '/usa/arizona/grand-canyon/',
  '/usa/arizona/sedona/'
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

const baseUsaPages = git(['ls-tree', '-r', '--name-only', base, '--', 'usa']).toString('utf8')
  .trim().split('\n').filter((file) => file.endsWith('/index.html') || file === 'usa/index.html');
assert.equal(baseUsaPages.length, 97, 'exact Arizona source base has 97 English U.S. routes');
const targetFiles = new Set(routes.map(relative));
const changedArizonaHtml = git(['diff', '--name-only', base, '--', 'usa/arizona'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedArizonaHtml, [...targetFiles].sort(), 'exactly the four selected existing Arizona English pages changed');

for (const file of baseUsaPages) {
  const before = mainText(gitText(base, file));
  const afterHtml = fs.readFileSync(path.join(root, file), 'utf8');
  if (laterLosAngelesRoutes.some((route) => relative(route) === file)) {
    const losAngelesBase = 'd5f7d1689b784b4930cd9f7d4496ab3148929162';
    assert.notEqual(mainText(afterHtml), before, `${file}: later Los Angeles source body changes after Arizona`);
    assert.equal(mainText(gitText(losAngelesBase, file)), mainText(gitText(september, file)), `${file}: Los Angeles exact source base body matches the 11 September source`);
    assert.equal(article(afterHtml)?.dateModified, '2026-10-13', `${file}: Los Angeles Article dateModified`);
    assert.match(afterHtml, /data-editorial-revision="los-angeles-20261013"/, `${file}: Los Angeles editorial revision`);
  } else if (laterSanDiegoRoutes.some((route) => relative(route) === file)) {
    const sanDiegoBase = 'b7d32c7e1585d5af3cf3d4291dd323e5d2da30eb';
    assert.notEqual(mainText(afterHtml), before, `${file}: later San Diego source body changes after Arizona`);
    assert.equal(mainText(gitText(sanDiegoBase, file)), mainText(gitText(september, file)), `${file}: San Diego exact source base body matches the 11 September source`);
    assert.equal(article(afterHtml)?.dateModified, '2026-10-13', `${file}: San Diego Article dateModified`);
    assert.match(afterHtml, /data-editorial-revision="san-diego-20261013"/, `${file}: San Diego editorial revision`);
  } else if (laterBostonRoutes.some((route) => relative(route) === file)) {
    const bostonBase = 'bc08029d36448bcb9d0a42a986caddec883b3d1f';
    assert.notEqual(mainText(afterHtml), before, `${file}: later Boston source body changes after Arizona`);
    assert.equal(mainText(gitText(bostonBase, file)), mainText(gitText(september, file)), `${file}: Boston exact source base body matches the 11 September source`);
    assert.equal(article(afterHtml)?.dateModified, '2026-10-13', `${file}: Boston Article dateModified`);
    assert.match(afterHtml, /data-editorial-revision="boston-20261013"/, `${file}: Boston editorial revision`);
  } else if (!targetFiles.has(file)) {
    assert.equal(mainText(afterHtml), before, `${file}: English main content remains unchanged outside the four selected pages`);
  } else {
    assert.notEqual(mainText(afterHtml), before, `${file}: substantive English content differs from the exact source base`);
    assert.equal(mainText(gitText(base, file)), mainText(gitText(september, file)), `${file}: exact-base body still matches the 11 September source body`);
    assert.equal(article(afterHtml)?.dateModified, '2026-10-13', `${file}: Article dateModified`);
    assert.match(afterHtml, /data-editorial-revision="arizona-20261013"/);
    assert.match(afterHtml, /Official source pages were checked on 13 October 2026\./);
  }
}
assert.deepEqual(git(['diff', '--name-only', base, '--', 'usa/new-england', 'usa/new-york', 'usa/index.html']).toString('utf8').trim(), '', 'New England, New York and /usa/ remain unchanged from the exact Arizona base');

const expectedCopy = new Map([
  ['/usa/arizona/', ['4–5 nights', '6–7 nights', '8–10 nights', 'Phoenix 1–2 nights', 'Sedona 2 nights', 'South Rim 2 nights', 'Flagstaff', 'AZ511', '13 October 2026']],
  ['/usa/arizona/phoenix-scottsdale/', ['1 night', '2 nights', '3 nights', '44th Street and Washington', '10 p.m. to 5 a.m.', 'currently open indoor museum']],
  ['/usa/arizona/grand-canyon/', ['1 night', '2 nights', 'Fall 2026', '12 September through 30 November 2026', '15 minutes', '12 minutes', 'Cape Royal', 'first major snowstorm', 'verified town-based museum']],
  ['/usa/arizona/sedona/', ['1 night', '2 nights', '3 nights', 'North SR 179 Park & Ride', 'Posse Grounds', 'West SR 89A', 'Do not infer exact departure times', 'indexed snippets']]
]);
for (const [route, phrases] of expectedCopy) {
  const content = mainText(fs.readFileSync(pathFor('', route), 'utf8'));
  for (const phrase of phrases) assert.ok(content.includes(phrase), `${route}: route-specific copy includes “${phrase}”`);
}

const sourceLinks = new Map([
  ['/usa/arizona/', ['https://www.az511.gov/', 'https://www.weather.gov/psr/', 'https://www.weather.gov/fgz/']],
  ['/usa/arizona/phoenix-scottsdale/', ['https://www.skyharbor.com/ground-transportation/phx-sky-train/', 'https://www.weather.gov/psr/']],
  ['/usa/arizona/grand-canyon/', ['https://www.nps.gov/grca/planyourvisit/shuttle-buses.htm', 'https://www.nps.gov/grca/northrimstatus.htm', 'https://www.nps.gov/grca/planyourvisit/conditions.htm', 'https://www.az511.gov/']],
  ['/usa/arizona/sedona/', ['https://sedonashuttle.com/trailhead-shuttles/', 'https://sedonashuttle.com/how-to-ride/', 'https://www.az511.gov/', 'https://www.weather.gov/fgz/']]
]);
for (const [route, urls] of sourceLinks) {
  const html = fs.readFileSync(pathFor('', route), 'utf8');
  for (const url of urls) assert.ok(html.includes(`href="${url}"`), `${route}: official source is linked: ${url}`);
}

const baseSearch = new Map(JSON.parse(gitText(base, 'data/search-index.json')).map((entry) => [entry.url, entry]));
const currentSearch = new Map(JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8')).map((entry) => [entry.url, entry]));
assert.equal(baseSearch.size, 955);
assert.equal(currentSearch.size, 955);
assert.deepEqual(new Set(currentSearch.keys()), new Set(baseSearch.keys()), 'English search URL set is unchanged');
assert.deepEqual([...currentSearch].filter(([url, value]) => JSON.stringify(value) !== JSON.stringify(baseSearch.get(url))).map(([url]) => url).sort(), [...routes, ...laterLosAngelesRoutes, ...laterSanDiegoRoutes, ...laterBostonRoutes].sort(), 'only the four Arizona, Los Angeles, San Diego and Boston search summaries changed');

const baseSitemap = sitemap(gitText(base, 'sitemap.xml'));
const currentSitemap = sitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560);
assert.equal(currentSitemap.size, 4560);
assert.deepEqual(new Set(currentSitemap.keys()), new Set(baseSitemap.keys()), 'the sitemap URL set is unchanged');
const datedPaths = [...routes, ...laterLosAngelesRoutes, ...laterSanDiegoRoutes, ...laterBostonRoutes].flatMap((route) => locales.map(({ prefix }) => `${prefix}${route}`)).sort();
assert.deepEqual([...currentSitemap].filter(([route, date]) => baseSitemap.get(route) !== date).map(([route]) => route).sort(), datedPaths, 'only the four Arizona, Los Angeles and San Diego routes across five editions receive new sitemap dates');
for (const route of datedPaths) assert.equal(currentSitemap.get(route), '2026-10-13', `${route}: lastmod`);

for (const route of [...routes, ...laterSanDiegoRoutes, ...laterBostonRoutes]) {
  for (const locale of locales) {
    const html = fs.readFileSync(pathFor(locale.prefix, route), 'utf8');
    assert.ok(locale.script.test(mainText(html)), `${locale.code} page has native-script text: ${route}`);
    assert.equal(article(html)?.dateModified, '2026-10-13', `${locale.code} Article date: ${route}`);
    assert.match(html, new RegExp(`hreflang="${locale.hreflang}"`), `${locale.code} hreflang: ${route}`);
  }
}
for (const locale of locales.slice(1)) {
  const search = JSON.parse(fs.readFileSync(path.join(root, `${locale.prefix}/data/search-index.json`), 'utf8'));
  assert.equal(search.length, 955, `${locale.code} search record count`);
  for (const route of [...routes, ...laterBostonRoutes]) {
    const record = search.find((entry) => entry.url === `${locale.prefix}${route}`);
    assert.ok(record?.summary && locale.script.test(record.summary), `${locale.code} translated search summary: ${route}`);
  }
}

const svgFiles = git(['diff', '--name-only', base, '--', '*.svg']).toString('utf8').trim();
assert.equal(svgFiles, '', 'this Arizona batch adds or changes no SVG assets');
console.log(`USA Arizona refresh regression passed: four existing routes selected after exact-base history review; New England, New York and /usa/ unchanged; four Arizona plus four later Los Angeles, San Diego and Boston search records and ${datedPaths.length} edition dates; all 4,560 sitemap URLs preserved; no SVG changed.`);
