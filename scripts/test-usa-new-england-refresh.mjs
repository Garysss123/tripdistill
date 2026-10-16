#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { postIntegrationMargaretRemainingRoutes, postFloridaChicagoRoutes, followingVietnamDaLatRoutes, postNewEnglandArizonaRoutes, postArizonaLosAngelesRoutes, postIntegrationBroomeRoutes, postIntegrationBroomeTasmaniaRoutes, postIntegrationMuiNeRoutes, postIntegrationPhongNhaRoutes, postIntegrationPhuQuocRoutes, followingVietnamNhaTrangRoutes, followingVietnamAfterNhaTrangRoutes, followingVietnamSouthernGapsRoutes, followingVietnamBayGapsRoutes, followingVietnamCavesIslandsGapsRoutes, followingVietnamCoastalGapsRoutes, postAustraliaFinalRoutes, postLosAngelesBostonRoutes, postLosAngelesSanDiegoRoutes, postBostonOverviewJuneauRoutes, postBostonOverviewJuneauSearchRoutes, postIntegrationTripDistillRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = 'f2a2aa1d9aaab0151a6bd75dfc31c907c63afb28';
const exactTaskBase = 'dc88a75c561d3e7a4f30bd00afadb6e8d52841d7';
const chicagoTerminal = 'dc88a75c561d3e7a4f30bd00afadb6e8d52841d7';
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
const chicagoRoutes = postFloridaChicagoRoutes;
const arizonaRoutes = postNewEnglandArizonaRoutes;
const losAngelesRoutes = postArizonaLosAngelesRoutes;
const bostonRoutes = postLosAngelesBostonRoutes;
const sanDiegoRoutes = postLosAngelesSanDiegoRoutes;
const overviewJuneauBase = 'b4045e0b7265cc6c3ceb8f16acb3e591d4b87eda';
const overviewJuneauTerminal = '73bcb05ae123fe3e4b70f057fa4dc7fc88979693';
const sanDiegoTerminal = 'bc08029d36448bcb9d0a42a986caddec883b3d1f';
const bostonTerminal = 'b4045e0b7265cc6c3ceb8f16acb3e591d4b87eda';
const arizonaTerminal = 'd5f7d1689b784b4930cd9f7d4496ab3148929162';
const losAngelesTerminal = 'b7d32c7e1585d5af3cf3d4291dd323e5d2da30eb';
const targets = new Set([...routes, ...chicagoRoutes, ...arizonaRoutes, ...losAngelesRoutes, ...sanDiegoRoutes, ...bostonRoutes, ...postBostonOverviewJuneauRoutes].map((route) => route.slice(1) + 'index.html'));
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
assert.equal(basePaths.length, 97, 'exact integration checkpoint has 97 English U.S. routes');

const changedBodyPaths = [];
const bodyStats = [];
for (const relativePath of basePaths) {
  const before = mainText(gitText(base, relativePath));
  const currentPath = path.join(root, relativePath);
  assert.ok(fs.existsSync(currentPath), `existing route remains present: ${relativePath}`);
  const afterHtml = fs.readFileSync(currentPath, 'utf8');
  const after = mainText(afterHtml);
  if (before !== after) changedBodyPaths.push(relativePath);
  const route = `/${relativePath.slice(0, -'index.html'.length)}`;
  if (postBostonOverviewJuneauRoutes.includes(route)) {
    assert.equal(mainText(gitText(overviewJuneauBase, relativePath)), mainText(gitText(september, relativePath)), `${route}: exact follow-up base retains September historical body`);
    assert.notEqual(after, mainText(gitText(overviewJuneauBase, relativePath)), `${route}: dated follow-up changes the body`);
    assert.equal(after, mainText(gitText(overviewJuneauTerminal, relativePath)), `${route}: body matches the exact follow-up terminal`);
    assert.equal(article(afterHtml)?.dateModified, '2026-10-13', `${route}: Article dateModified`);
    assert.match(afterHtml, route === '/usa/' ? /data-editorial-revision="usa-country-20261013"/ : /data-editorial-revision="alaska-juneau-20261013"/, `${route}: exact follow-up marker`);
  } else if (!targets.has(relativePath)) {
    assert.equal(after, before, `${relativePath}: English main body remains unchanged outside the four selected paths`);
  } else if (chicagoRoutes.some((route) => relativePath === `${route.slice(1)}index.html`)) {
    assert.notEqual(after, before, `${relativePath}: Chicago body changed in its separately scoped batch`);
    assert.equal(after, mainText(gitText(chicagoTerminal, relativePath)), `${relativePath}: Chicago body matches the exact Chicago source terminal`);
  } else {
    assert.notEqual(after, before, `${relativePath}: substantive body differs from its exact batch base`);
    if (arizonaRoutes.includes(route)) {
      assert.equal(after, mainText(gitText(arizonaTerminal, relativePath)), `${relativePath}: later Arizona body matches the exact source terminal`);
      assert.equal(mainText(gitText('45cae962fdc7fb500cfceb505203efbfd2dbc396', relativePath)), before, `${relativePath}: exact Arizona base body matches the checkpoint`);
    } else if (losAngelesRoutes.includes(route)) {
      assert.equal(after, mainText(gitText(losAngelesTerminal, relativePath)), `${relativePath}: later Los Angeles body matches the exact source terminal`);
      assert.equal(mainText(gitText('d5f7d1689b784b4930cd9f7d4496ab3148929162', relativePath)), before, `${relativePath}: exact Los Angeles base body matches the checkpoint`);
      const data = article(afterHtml);
      assert.equal(data?.dateModified, '2026-10-13', `${relativePath}: Article dateModified`);
      assert.match(afterHtml, /data-editorial-revision="los-angeles-20261013"/, `${relativePath}: Los Angeles editorial revision`);
    } else if (sanDiegoRoutes.includes(route)) {
      assert.equal(after, mainText(gitText(sanDiegoTerminal, relativePath)), `${relativePath}: later San Diego body matches the exact source terminal`);
      const data = article(afterHtml);
      assert.equal(data?.dateModified, '2026-10-13', `${relativePath}: San Diego Article dateModified`);
      assert.match(afterHtml, /data-editorial-revision="san-diego-20261013"/, `${relativePath}: San Diego editorial revision`);
    } else if (bostonRoutes.includes(route)) {
      assert.equal(after, mainText(gitText(bostonTerminal, relativePath)), `${relativePath}: later Boston body matches the exact source terminal`);
      assert.equal(mainText(gitText('bc08029d36448bcb9d0a42a986caddec883b3d1f', relativePath)), before, `${relativePath}: exact Boston source base matches the current integration checkpoint`);
      const data = article(afterHtml);
      assert.equal(data?.dateModified, '2026-10-13', `${relativePath}: Boston Article dateModified`);
      assert.match(afterHtml, /data-editorial-revision="boston-20261013"/, `${relativePath}: Boston editorial revision`);
    } else {
      assert.equal(mainText(gitText(exactTaskBase, relativePath)), before, `${relativePath}: exact New England task-base body matches the current integration checkpoint`);
      assert.equal(mainText(gitText(september, relativePath)), before, `${relativePath}: exact task-base body matches its 11 September body`);
      const data = article(afterHtml);
      assert.equal(data?.dateModified, '2026-10-13', `${relativePath}: Article dateModified`);
      assert.equal(data?.datePublished, '2026-09-11', `${relativePath}: original publication date is retained`);
      assert.match(afterHtml, /data-editorial-revision="new-england-20261013"/, `${relativePath}: editorial revision marker`);
      assert.match(afterHtml, /Editorial review: 13 October 2026\./, `${relativePath}: visible review date`);
      assert.match(afterHtml, /Source information checked on 13 October 2026\./, `${relativePath}: source-check date`);
      bodyStats.push({ route, beforeChars: before.length, afterChars: after.length, beforeWords: wordCount(before), afterWords: wordCount(after), beforeSha256: crypto.createHash('sha256').update(before).digest('hex'), afterSha256: crypto.createHash('sha256').update(after).digest('hex') });
    }
  }
}
assert.deepEqual(changedBodyPaths.sort(), [...targets].sort(), 'exactly four New England, Chicago, Arizona, Los Angeles, San Diego and Boston English U.S. bodies changed');
assert.deepEqual(gitBytes(base, 'usa/new-york/index.html'), fs.readFileSync(path.join(root, 'usa/new-york/index.html')), 'New York acceptance sample remains byte-for-byte unchanged');
assert.equal(mainText(gitText(base, 'usa/index.html')), mainText(gitText(overviewJuneauBase, 'usa/index.html')), 'the U.S. overview at the exact New England base matches the follow-up source base body');

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
assert.equal(baseSearch.size, 955, 'integration-base English search index has 955 records');
assert.equal(currentSearch.size, 955, 'English search index retains 955 records');
assert.deepEqual(new Set(currentSearch.keys()), new Set(baseSearch.keys()), 'English search URL set is unchanged');
const changedSearchRoutes = [...currentSearch].filter(([url, value]) => JSON.stringify(value) !== JSON.stringify(baseSearch.get(url))).map(([url]) => url).sort();
assert.deepEqual(changedSearchRoutes, [...routes, ...chicagoRoutes, ...postIntegrationMargaretRemainingRoutes, ...arizonaRoutes, ...losAngelesRoutes, ...postIntegrationBroomeRoutes, ...postIntegrationBroomeTasmaniaRoutes, ...postIntegrationMuiNeRoutes, ...postIntegrationPhongNhaRoutes, ...postIntegrationPhuQuocRoutes, ...followingVietnamNhaTrangRoutes, ...followingVietnamAfterNhaTrangRoutes, ...followingVietnamSouthernGapsRoutes, ...followingVietnamBayGapsRoutes, ...followingVietnamCavesIslandsGapsRoutes, ...followingVietnamCoastalGapsRoutes, ...postAustraliaFinalRoutes, ...sanDiegoRoutes, ...bostonRoutes, ...postBostonOverviewJuneauSearchRoutes, '/thailand/'].sort(), 'only the selected route summaries, coastal Vietnam, final Australia, Juneau and Thailand overview changed; the USA overview summary remains unchanged');

const baseSitemap = sitemap(gitText(base, 'sitemap.xml'));
const currentSitemap = sitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560, 'integration-base sitemap has 4,560 URLs');
assert.equal(currentSitemap.size, 4560, 'current sitemap retains 4,560 URLs');
assert.deepEqual(new Set(currentSitemap.keys()), new Set(baseSitemap.keys()), 'sitemap URL set is unchanged');
const datedRoutes = [...routes, ...chicagoRoutes, ...postIntegrationMargaretRemainingRoutes, ...followingVietnamDaLatRoutes, ...arizonaRoutes, ...losAngelesRoutes, ...postIntegrationBroomeRoutes, ...postIntegrationBroomeTasmaniaRoutes, ...postIntegrationMuiNeRoutes, ...postIntegrationPhongNhaRoutes, ...postIntegrationPhuQuocRoutes, ...followingVietnamNhaTrangRoutes, ...followingVietnamAfterNhaTrangRoutes, ...followingVietnamSouthernGapsRoutes, ...followingVietnamBayGapsRoutes, ...followingVietnamCavesIslandsGapsRoutes, ...followingVietnamCoastalGapsRoutes, ...postAustraliaFinalRoutes, ...postIntegrationTripDistillRoutes, ...sanDiegoRoutes, ...bostonRoutes, ...postBostonOverviewJuneauRoutes];
const datedPaths = datedRoutes.flatMap((route) => locales.map(({ prefix }) => `${prefix}${route}`)).concat(locales.map(({ prefix }) => `${prefix}/thailand/`)).sort();
const changedDates = [...currentSitemap].filter(([route, date]) => baseSitemap.get(route) !== date).map(([route]) => route).sort();
assert.deepEqual(changedDates, datedPaths, 'only the selected New England, Chicago, Margaret, Da Lat, Arizona, Los Angeles, Broome/Tasmania, Mui Ne, Phong Nha, San Diego, Boston and Thailand overview routes across five editions receive changed sitemap dates');
for (const route of datedPaths) assert.equal(currentSitemap.get(route), postIntegrationTripDistillRoutes.some((candidate) => route.endsWith(candidate)) ? '2026-10-15' : route.endsWith('/thailand/') ? '2026-10-14' : '2026-10-13', `${route}: sitemap lastmod`);

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
  for (const route of [...routes, ...postBostonOverviewJuneauSearchRoutes]) {
    const entry = records.find((record) => record.url === `${locale.prefix}${route}`);
    assert.ok(entry?.summary, `${locale.code} localized search summary exists: ${route}`);
    assert.ok(locale.script.test(entry.summary), `${locale.code} search summary is translated: ${route}`);
  }
}

console.log(`USA New England refresh regression passed: four substantive New England routes plus exact later scopes; New York unchanged; overview/Juneau are separate historical follow-ups, Juneau adds its search update alongside final Australia, ${datedPaths.length} dates and 4,560 sitemap URLs preserved.`);
console.log(JSON.stringify(bodyStats, null, 2));
