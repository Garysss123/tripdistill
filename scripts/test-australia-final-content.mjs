#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { parse } from 'parse5';
import { australiaClusters, australiaGuides } from '../data/australia-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = '335f19b4f3cbc69038ff943a1beec7049c135a2c';
const sourceTerminal = '70fbc1aa3706f2f33ee7b6b62e66aaee6c18962d';
const sourceTree = '11b7937f472389104a3a3b61700e41e534dd039b';
const baseParent = '8baea8a720ebd88ff6834e60235e29c03343c4c4';
const date = '2026-10-13';
const correction = '768151d3f42378358c122a1cde55100fcec9eafa';
const routes = [
  '/australia/',
  '/australia/tasmania/cradle-freycinet/',
  '/australia/tasmania/kunanyi-mount-wellington/',
  '/australia/tasmania/launceston-tamar-valley/',
  '/australia/tasmania/port-arthur-tasman-peninsula/'
];
const locales = [
  { code: 'zh-Hant', prefix: '/zh', date: /2026\s*年\s*10\s*月\s*13\s*日/u, script: /[\u3400-\u9fff]/u },
  { code: 'ja', prefix: '/ja', date: /2026年10月13日/u, script: /[\u3040-\u30ff\u3400-\u9fff]/u },
  { code: 'ko', prefix: '/ko', date: /2026년\s*10월\s*13일/u, script: /[\uac00-\ud7af]/u },
  { code: 'th', prefix: '/th', date: /13\s*ตุลาคม\s*2026/u, script: /[\u0e00-\u0e7f]/u }
];
const provenance = {
  writer: 'Task assistant; exact runtime model ID unavailable in the selected execution environment.',
  reviewer: 'Same task assistant self-review; non-independent; exact runtime model ID unavailable.',
  independentSecondModel: false
};
const pageBatchName = 'zzzzzzzzzn-au-final-content-pages-20261013.json';
const searchBatchName = 'zzzzzzzzzzo-au-final-content-search-20261013.json';
const expectedBody = new Map([
  ['/australia/', { base: 574, current: 1861, delta: 1287, floor: 1397 }],
  ['/australia/tasmania/cradle-freycinet/', { base: 328, current: 1514, delta: 1186, floor: 1030 }],
  ['/australia/tasmania/kunanyi-mount-wellington/', { base: 342, current: 1422, delta: 1080, floor: 1030 }],
  ['/australia/tasmania/launceston-tamar-valley/', { base: 314, current: 1411, delta: 1097, floor: 1030 }],
  ['/australia/tasmania/port-arthur-tasman-peninsula/', { base: 338, current: 1429, delta: 1091, floor: 1030 }]
]);
const requiredBodyText = new Map([
  ['/australia/', ['14 nights · city and reef by air', 'Nights 1–4 · Sydney:', 'Nights 9–13 · Cairns:', '18 nights · mainland plus Tasmania by booked ferry', 'Night 17 · on the Spirit of Tasmania', 'last mile closes', 'weather', 'unknown']],
  ['/australia/tasmania/cradle-freycinet/', ['Cradle Valley', 'Coles Bay', 'Dove Lake', 'Crater Lake', 'Visitor Centre', 'Ronny Creek', '20 minutes', 'transfer day', 'cold wind and heavy rain']],
  ['/australia/tasmania/kunanyi-mount-wellington/', ['Pinnacle Road', 'The Springs', 'staged opening', 'Explorer Bus', '4WD', 'road gate', 'Hobart fallback']],
  ['/australia/tasmania/launceston-tamar-valley/', ['two nights', '17 December', 'bird hide', 'last-mile', 'sober driver', 'closed bridge', 'Launceston']],
  ['/australia/tasmania/port-arthur-tasman-peninsula/', ['Port Arthur', '17 October', 'Waterfall Bay Road', 'Devil’s Kitchen', 'one coast', 'return', 'barrier']]
]);
const officialSources = new Map([
  ['/australia/', ['https://www.australia.com/en/places/tasmania.html', 'https://www.spiritoftasmania.com.au/', 'https://transportnsw.info/travel-info/ways-to-get-around/regional-trains-and-coaches/regional-trains', 'https://parks.tas.gov.au/explore-our-parks/know-before-you-go/alerts']],
  ['/australia/tasmania/cradle-freycinet/', ['https://parks.tas.gov.au/explore-our-parks/cradle-mountain', 'https://parks.tas.gov.au/explore-our-parks/freycinet-national-park', 'https://parks.tas.gov.au/explore-our-parks/know-before-you-go/alerts']],
  ['/australia/tasmania/kunanyi-mount-wellington/', ['https://www.hobartcity.com.au/Things-To-Do/Kunanyi-Mt-Wellington/Pinnacle-Road-status', 'https://wellingtonpark.org.au/', 'https://mtwellingtonexplorer.com.au/']],
  ['/australia/tasmania/launceston-tamar-valley/', ['https://parks.tas.gov.au/explore-our-parks/know-before-you-go/alerts', 'https://www.metrotas.com.au/timetables/launceston/', 'https://parks.tas.gov.au/explore-our-parks/tamar-island-wetlands']],
  ['/australia/tasmania/port-arthur-tasman-peninsula/', ['https://parks.tas.gov.au/explore-our-parks/know-before-you-go/alerts', 'https://www.alert.tas.gov.au/', 'https://portarthur.org.au/what-to-do/']]
]);

function git(args, binary = false) {
  return execFileSync('git', args, { cwd: root, encoding: binary ? undefined : 'utf8', maxBuffer: 64 * 1024 * 1024 });
}
function attrs(node) { return Object.fromEntries((node?.attrs || []).map(({ name, value }) => [name, value])); }
function one(node, predicate) {
  if (predicate(node)) return node;
  for (const child of node.childNodes || []) {
    const found = one(child, predicate);
    if (found) return found;
  }
  return null;
}
function all(node, predicate, out = []) {
  if (predicate(node)) out.push(node);
  for (const child of node.childNodes || []) all(child, predicate, out);
  return out;
}
function text(node) {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value;
  if (['script', 'style', 'noscript', 'svg'].includes(node.tagName)) return '';
  return (node.childNodes || []).map(text).join(' ');
}
function mainText(html) {
  const doc = parse(html);
  const main = one(doc, (node) => node.tagName === 'main' && attrs(node).id === 'main-content');
  assert(main, 'HTML is missing #main-content.');
  const chunks = [];
  function walk(node) {
    if (node.nodeName === '#text') { chunks.push(node.value); return; }
    if (['script', 'style', 'noscript', 'svg'].includes(node.tagName)) return;
    const a = attrs(node);
    const classes = (a.class || '').split(/\s+/u);
    if (classes.some((name) => ['sources', 'au-hub-directory', 'au-related-grid', 'au-related-card', 'au-country-grid'].includes(name)) || a['aria-label'] === 'Advertisement') return;
    for (const child of node.childNodes || []) walk(child);
  }
  walk(main);
  return chunks.join(' ').replace(/\s+/gu, ' ').trim();
}
function wordCount(value) { return value ? value.split(/\s+/u).length : 0; }
function jsonLd(doc) {
  return all(doc, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json').flatMap((node) => {
    try {
      const data = JSON.parse((node.childNodes || []).map((child) => child.value || '').join(''));
      return data['@graph'] || [data];
    } catch { return []; }
  });
}
function routeFile(route, prefix = '') { return path.join(root, `${prefix}${route}`.replace(/^\//u, ''), 'index.html'); }
function bodyAt(commit, route) { return mainText(git(['show', `${commit}:${route.slice(1)}index.html`])); }
function searchMap(raw) { return new Map(JSON.parse(raw).map((entry) => [entry.url, entry])); }
function sitemapMap(raw) {
  const map = new Map();
  for (const [, block] of raw.matchAll(/<url>([\s\S]*?)<\/url>/gu)) {
    const url = block.match(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc>/u)?.[1];
    const lastmod = block.match(/<lastmod>([^<]*)<\/lastmod>/u)?.[1];
    if (url !== undefined && lastmod) map.set(url || '/', lastmod);
  }
  return map;
}
function toCsv(value) { return `"${String(value).replaceAll('"', '""')}"`; }

git(['merge-base', '--is-ancestor', base, 'HEAD']);
assert.equal(git(['rev-parse', `${base}^`]).trim(), baseParent, 'The authorized checkpoint has the expected parent.');
assert.equal(git(['rev-parse', `${sourceTerminal}^1`]).trim(), base, 'The exact AU source terminal has the authorized source base as parent.');
assert.equal(git(['rev-parse', `${sourceTerminal}^{tree}`]).trim(), sourceTree, 'The AU source terminal tree matches the reviewed source.');
git(['merge-base', '--is-ancestor', sourceTerminal, 'HEAD']);

const inventory = ['/australia/', ...australiaClusters.map((cluster) => `/australia/${cluster.slug}/`), ...australiaGuides.map((guide) => guide.url)];
assert.equal(australiaClusters.length, 16, 'Australia hub inventory.');
assert.equal(australiaGuides.length, 80, 'Australia guide inventory.');
assert.equal(inventory.length, 97, '97 unique substantive-body ledger rows are expected.');
assert.equal(new Set(inventory).size, 97, 'The route inventory contains no duplicate slugs.');
assert.deepEqual(routes.filter((route) => !inventory.includes(route)), [], 'Every current route belongs to the Australia inventory.');
assert.equal(bodyAt(base, '/australia/tasmania/'), mainText(fs.readFileSync(routeFile('/australia/tasmania/'), 'utf8')), 'The Tasmania hub is not counted again as one of this batch’s five bodies.');

const laterReviewedBodyRoutes = ['/australia/red-centre/'];
const englishHtml = [...routes, ...laterReviewedBodyRoutes].map((route) => `${route.slice(1)}index.html`).sort();
assert.deepEqual(git(['diff', '--name-only', base, '--', 'australia']).split(/\r?\n/u).filter((name) => name.endsWith('/index.html')).sort(), englishHtml, 'Only the country overview, four exact Tasmania child routes, and the separately reviewed Red Centre body changed in English.');
const actualEnglish = new Map();
for (const route of inventory) {
  const current = mainText(fs.readFileSync(routeFile(route), 'utf8'));
  const previous = bodyAt(base, route);
  actualEnglish.set(route, { current: wordCount(current), base: wordCount(previous), delta: wordCount(current) - wordCount(previous) });
  if (laterReviewedBodyRoutes.includes(route)) continue;
  if (expectedBody.has(route)) {
    const expected = expectedBody.get(route);
    assert.deepEqual(actualEnglish.get(route), { current: expected.current, base: expected.base, delta: expected.delta }, `${route}: exact-body word evidence, with country cards/sources/ads excluded.`);
    assert(actualEnglish.get(route).current > expected.floor, `${route}: same-level Japan body floor.`);
    for (const phrase of requiredBodyText.get(route)) assert(current.toLowerCase().includes(phrase.toLowerCase()), `${route}: required route detail ${phrase}.`);
    assert.equal(fs.readFileSync(routeFile(route), 'utf8'), git(['show', `${sourceTerminal}:${route.slice(1)}index.html`]), `${route}: integrated English body matches the exact AU source terminal.`);
  } else {
    assert.equal(current, previous, `${route}: no non-target body may be double-counted or changed in this batch.`);
  }
}
assert.equal(wordCount(mainText(fs.readFileSync(routeFile('/japan/hokkaido/'), 'utf8'))), 1397, 'Hokkaido same-level regional-hub floor.');
assert.equal(wordCount(mainText(fs.readFileSync(routeFile('/japan/hokkaido/otaru-shakotan/'), 'utf8'))), 1030, 'Otaru same-level local-guide floor.');

// History check: the four target guide bodies last had editorial copy in the 4 October guide pass;
// later October 4–5 records changed layout/cache details. The overview's 9 October record synced dates.
const childContentCommit = 'ceb2d501';
for (const route of routes.slice(1)) assert.equal(bodyAt(childContentCommit, route), bodyAt(base, route), `${route}: the October 4 body remained unchanged through the exact base.`);
assert(git(['log', '--format=%h %cs %s', '-1', base, '--', 'australia/index.html']).includes('f3afd19c'), 'The previous country overview edit is the October 9 review-date sync, not this substantive body work.');
for (const route of routes) {
  const html = fs.readFileSync(routeFile(route), 'utf8');
  const doc = parse(html);
  assert.equal(attrs(one(doc, (node) => node.tagName === 'html')).lang, 'en', `${route}: English lang.`);
  assert.equal(attrs(one(doc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical')).href, `https://tripdistill.com${route}`, `${route}: canonical.`);
  for (const source of officialSources.get(route)) assert(html.includes(`href="${source}"`), `${route}: dated official source ${source}.`);
  const article = jsonLd(doc).find((record) => record['@type'] === 'Article');
  assert.equal(article?.dateModified, date, `${route}: Article date.`);
  const visibleFaq = all(doc, (node) => node.tagName === 'details').map((details) => {
    const question = text(one(details, (node) => node.tagName === 'summary')).replace(/\s+/gu, ' ').trim();
    const answer = text(details).replace(/\s+/gu, ' ').trim().slice(question.length).trim();
    return { question, answer };
  });
  const faq = jsonLd(doc).find((record) => record['@type'] === 'FAQPage');
  assert(faq?.mainEntity?.length, `${route}: FAQ structured data.`);
  assert.deepEqual(faq.mainEntity.map((record) => ({ question: record.name, answer: record.acceptedAnswer?.text })), visibleFaq, `${route}: FAQ schema matches visible questions and answers.`);
}

const baseSearch = searchMap(git(['show', `${base}:data/search-index.json`]));
const sourceSearch = searchMap(git(['show', `${sourceTerminal}:data/search-index.json`]));
const currentSearch = searchMap(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
assert.equal(currentSearch.size, 955, 'English search inventory remains 955 records.');
assert.equal(new Set(currentSearch.keys()).size, 955, 'English search URLs are unique.');
assert.deepEqual([...currentSearch.keys()].sort(), [...baseSearch.keys()].sort(), 'English search URL inventory is unchanged.');
assert.deepEqual([...sourceSearch.keys()].sort(), [...baseSearch.keys()].sort(), 'The AU source preserves the English search URL inventory.');
assert.deepEqual([...sourceSearch.keys()].filter((url) => JSON.stringify(sourceSearch.get(url)) !== JSON.stringify(baseSearch.get(url))).sort(), [...routes].sort(), 'The AU source changes only the five selected search records.');
for (const route of routes) assert.deepEqual(currentSearch.get(route), sourceSearch.get(route), `${route}: integrated search record matches the exact AU source terminal.`);

const baseSitemap = sitemapMap(git(['show', `${base}:sitemap.xml`]));
const sourceSitemap = sitemapMap(git(['show', `${sourceTerminal}:sitemap.xml`]));
const currentSitemap = sitemapMap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560, 'Exact-base sitemap has 4,560 URLs.');
assert.equal(sourceSitemap.size, 4560, 'AU source retains 4,560 sitemap URLs.');
assert.equal(currentSitemap.size, 4560, 'Current sitemap retains 4,560 URLs.');
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL inventory is unchanged.');
assert.deepEqual([...sourceSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'AU source leaves the exact sitemap URL inventory unchanged.');
const datedUrls = routes.flatMap((route) => ['', ...locales.map((locale) => locale.prefix)].map((prefix) => `${prefix}${route}`)).sort();
assert.deepEqual([...sourceSitemap.keys()].filter((url) => sourceSitemap.get(url) !== baseSitemap.get(url)).sort(), datedUrls, 'The AU source changes exactly five routes × five sitemap dates.');
for (const url of datedUrls) {
  assert.equal(sourceSitemap.get(url), date, `${url}: source sitemap lastmod.`);
  assert.equal(currentSitemap.get(url), date, `${url}: integrated sitemap lastmod.`);
}

for (const locale of locales) {
  const directory = path.join(root, 'data/i18n/reviewed', locale.code);
  const pageBatch = JSON.parse(fs.readFileSync(path.join(directory, pageBatchName), 'utf8'));
  const searchBatch = JSON.parse(fs.readFileSync(path.join(directory, searchBatchName), 'utf8'));
  assert.equal(pageBatch.locale, locale.code, `${locale.code}: page locale.`);
  assert.equal(pageBatch.qualityStatus, 'reviewed', `${locale.code}: page batch reviewed.`);
  assert.deepEqual(pageBatch.routes, routes, `${locale.code}: exact five page routes.`);
  assert.deepEqual(pageBatch.reviewProvenance, provenance, `${locale.code}: same-assistant, non-independent review/runtime disclosure.`);
  assert.equal(Object.keys(pageBatch.translations).length, 278, `${locale.code}: unique page translations.`);
  assert(Object.values(pageBatch.translations).every((value) => value.trim()), `${locale.code}: page translations are nonblank.`);
  assert.equal(searchBatch.locale, locale.code, `${locale.code}: search locale.`);
  assert.equal(searchBatch.qualityStatus, 'reviewed', `${locale.code}: search batch reviewed.`);
  assert.deepEqual(searchBatch.routes, ['/data/search-index.json'], `${locale.code}: search batch owns the synthetic search route.`);
  assert.deepEqual(searchBatch.reviewProvenance, provenance, `${locale.code}: search provenance.`);
  assert.equal(Object.keys(searchBatch.translations).length, 9, `${locale.code}: unique search-only translations.`);
  assert(Object.values(searchBatch.translations).every((value) => value.trim()), `${locale.code}: search translations are nonblank.`);
  const localSearch = searchMap(fs.readFileSync(path.join(root, locale.prefix.slice(1), 'data/search-index.json'), 'utf8'));
  assert.equal(localSearch.size, 955, `${locale.code}: localized search inventory.`);
  for (const route of routes) {
    const html = fs.readFileSync(routeFile(route, locale.prefix), 'utf8');
    const doc = parse(html);
    const body = mainText(html);
    assert.equal(attrs(one(doc, (node) => node.tagName === 'html')).lang, locale.code, `${locale.code} ${route}: lang.`);
    assert.equal(attrs(one(doc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical')).href, `https://tripdistill.com${locale.prefix}${route}`, `${locale.code} ${route}: canonical.`);
    assert(locale.date.test(body), `${locale.code} ${route}: localized visible 13 October 2026 date.`);
    assert(locale.script.test(body), `${locale.code} ${route}: translated body uses its target script.`);
    assert.equal(jsonLd(doc).find((record) => record['@type'] === 'Article')?.dateModified, date, `${locale.code} ${route}: Article date.`);
    const summary = currentSearch.get(route)?.summary;
    const translatedSummary = searchBatch.translations[summary] || pageBatch.translations[summary];
    assert(translatedSummary, `${locale.code} ${route}: translated search summary exists.`);
    assert.equal(localSearch.get(`${locale.prefix}${route}`)?.summary, translatedSummary, `${locale.code} ${route}: localized search summary matches the reviewed target.`);
  }
}

const ledgerPath = path.join(root, 'reports/australia-substantive-body-ledger-2026-10-13.csv');
const ledger = fs.readFileSync(ledgerPath, 'utf8').trim().split(/\r?\n/u).map((line) => {
  assert(line.startsWith('"') && line.endsWith('"'), 'Ledger rows use quoted CSV fields.');
  return line.slice(1, -1).split('","').map((field) => field.replaceAll('""', '"'));
});
assert.deepEqual(ledger[0], ['route', 'route_type', 'coverage_status', 'base_body_words', 'current_body_words', 'delta_words', 'evidence'], 'Ledger column schema.');
assert.equal(ledger.length - 1, 97, 'Ledger contains exactly 97 route records.');
const ledgerRoutes = ledger.slice(1).map((row) => row[0]);
assert.equal(new Set(ledgerRoutes).size, 97, 'Ledger has no duplicate URLs.');
assert.deepEqual([...ledgerRoutes].sort(), [...inventory].sort(), 'Ledger neither omits nor invents an Australia route.');
const statuses = ledger.slice(1).reduce((counts, row) => counts.set(row[2], (counts.get(row[2]) || 0) + 1), new Map());
assert.deepEqual(Object.fromEntries(statuses), { 'carried-forward prior 92/97': 92, 'completed in this batch': 5 }, 'Ledger adds five unique body records to the previously evidenced 92.');
for (const row of ledger.slice(1)) {
  const [, , status, oldWords, newWords, delta] = row;
  if (laterReviewedBodyRoutes.includes(row[0])) {
    assert.equal(status, 'carried-forward prior 92/97', `${row[0]}: keep the historical ledger status for the later-reviewed body.`);
    continue;
  }
  assert.equal(Number(newWords), actualEnglish.get(row[0]).current, `${row[0]}: ledger current body count.`);
  assert.equal(Number(oldWords), actualEnglish.get(row[0]).base, `${row[0]}: ledger exact-base body count.`);
  assert.equal(Number(delta), actualEnglish.get(row[0]).delta, `${row[0]}: ledger exact-base body delta.`);
  assert.equal(status === 'completed in this batch', expectedBody.has(row[0]), `${row[0]}: one-and-only-one ledger status.`);
}

for (const asset of ['assets/images/australia-kangaroo-island-regional-days.svg', 'assets/images/australia-kings-park-entry-choice.svg']) {
  assert.equal(fs.readFileSync(path.join(root, asset), 'utf8'), git(['show', `${correction}:${asset}`]), `${asset}: earlier parallel arrow fix is byte-identical.`);
}
assert.equal(git(['diff', '--name-only', base, sourceTerminal, '--', 'assets/images']).trim(), '', 'No image or SVG changed in the exact AU source batch.');
assert.equal(git(['ls-files', '--others', '--exclude-standard', '--', 'assets/images']).trim(), '', 'No untracked image or SVG exists.');

console.log('Australia final-content regression passed: exact source ancestry/tree, five substantive bodies, 97 unique ledger routes, Japan content floors, official source links, FAQ/schema parity, 4,560 unchanged sitemap URLs with 25 dated entries, 955 search records, five-language reviewed pages/search, preserved arrow fixes, and no image/SVG edits. Source/markup checks only; rendered UI remains unverified.');
