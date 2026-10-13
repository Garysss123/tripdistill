#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { parse } from 'parse5';
import { SaxesParser } from 'saxes';
import { australiaAdelaidePerthDiagrams } from '../data/australia-adelaide-perth-diagrams.mjs';

const root = path.resolve(import.meta.dirname, '..');
const branch = execFileSync('git', ['branch', '--show-current'], { cwd: root, encoding: 'utf8' }).trim();
const followOnSprint = branch === 'codex/sprint-au-top-end-whitsundays-gaps-20261013';
const canberraSprint = branch === 'codex/sprint-au-canberra-content-20261013';
const alpsMargaretSprint = branch === 'codex/sprint-au-alps-margaret-gaps-20261013';
const margaretRemainingSprint = branch === 'codex/sprint-au-margaret-remaining-20261013';
const base = margaretRemainingSprint ? 'a99fbe9fe996ccedbac42b1b9386447a11403854' : alpsMargaretSprint ? '5f1205bbbee0ef636c34e883c399e6fceaa7b508' : followOnSprint ? '90de552c65cf971a33dd4a1ef1976e0037392335' : canberraSprint ? '448f6cd5a03aff0ddbfea1a21226cc9f2be545b9' : 'a56b9b9a0c8d275ef5dc936b520b2b323ebe9ad3';
const isoDate = '2026-10-12';
const routes = [
  '/australia/adelaide-wine-island/adelaide-hills-hahndorf/',
  '/australia/adelaide-wine-island/kangaroo-island/',
  '/australia/perth-fremantle-rottnest/kings-park/',
  '/australia/perth-fremantle-rottnest/cottesloe-scarborough/'
];
const locales = [
  { code: 'en', prefix: '', date: 'reviewed 12 October 2026', script: /[A-Za-z]/u },
  { code: 'zh-Hant', prefix: '/zh', date: '2026 年 10 月 12 日', script: /[\u3400-\u9fff]/u },
  { code: 'ja', prefix: '/ja', date: '2026年10月12日', script: /[\u3040-\u30ff\u3400-\u9fff]/u },
  { code: 'ko', prefix: '/ko', date: '2026년 10월 12일', script: /[\uac00-\ud7af]/u },
  { code: 'th', prefix: '/th', date: '12 ตุลาคม 2026', script: /[\u0e00-\u0e7f]/u }
];
const expectedDelta = new Map([
  [routes[0], 957],
  [routes[1], 1128],
  [routes[2], 1026],
  [routes[3], 1060]
]);
const expectedEditorial = [
  ['Adelaide Metro', 'Hahndorf', 'Cleland', 'fire danger', 'return'],
  ['SeaLink', 'Penneshaw', 'Flinders Chase', '20–22 October 2026', 'weather-dependent'],
  ['Transperth', '935D', 'Federation Walkway', 'Boola Bardip', 'weather'],
  ['Route 102', 'Surf CAT', 'patrol', 'Cottesloe', 'Scarborough']
];
const pageBatchName = 'zzzzzzzzz-au-adelaide-perth-pages-20261012.json';
const searchBatchName = 'zzzzzzzzza-au-adelaide-perth-search-20261012.json';
const batchProvenance = {
  writer: 'Task assistant; GPT-6 Codex, with no Luna translation runtime available in the selected environment',
  reviewer: 'Same task assistant; same-model self-review (non-independent); exact Luna runtime was unavailable',
  independentSecondModel: false
};

function git(args, binary = false) {
  return execFileSync('git', args, { cwd: root, encoding: binary ? undefined : 'utf8', maxBuffer: 32 * 1024 * 1024 });
}

function fileFor(route, prefix = '') {
  return path.join(root, `${prefix}${route}`.replace(/^\//u, ''), 'index.html');
}

function findAll(node, predicate, out = []) {
  if (predicate(node)) out.push(node);
  for (const child of node.childNodes || []) findAll(child, predicate, out);
  return out;
}

function findOne(node, predicate) {
  if (predicate(node)) return node;
  for (const child of node.childNodes || []) {
    const found = findOne(child, predicate);
    if (found) return found;
  }
  return null;
}

function attrs(node) {
  return Object.fromEntries((node?.attrs || []).map(({ name, value }) => [name, value]));
}

function textContent(node) {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value;
  if (['script', 'style', 'noscript', 'svg'].includes(node.tagName)) return '';
  return (node.childNodes || []).map(textContent).join(' ');
}

function jsonLdGraphs(doc) {
  return findAll(doc, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json')
    .flatMap((node) => {
      try {
        const json = (node.childNodes || []).map((child) => child.value || '').join('');
        const data = JSON.parse(json);
        return data['@graph'] || [data];
      } catch {
        return [];
      }
    });
}

function editorialText(html) {
  const doc = parse(html);
  const main = findOne(doc, (node) => node.tagName === 'main' && attrs(node).id === 'main-content');
  assert(main, 'HTML is missing #main-content.');
  const words = [];
  function walk(node) {
    if (node.nodeName === '#text') { words.push(node.value); return; }
    if (['script', 'style', 'noscript', 'svg'].includes(node.tagName)) return;
    const a = attrs(node);
    const classes = (a.class || '').split(/\s+/u);
    if (classes.some((name) => ['sources', 'au-hub-directory', 'au-related-grid', 'au-related-card'].includes(name))) return;
    if (a['aria-label'] === 'Advertisement') return;
    for (const child of node.childNodes || []) walk(child);
  }
  walk(main);
  return words.join(' ').replace(/\s+/gu, ' ').trim();
}

function wordCount(text) {
  return text ? text.split(/\s+/u).length : 0;
}

function sitemapEntries(xml) {
  const entries = new Map();
  for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/gu)) {
    const url = block.match(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc>/u)?.[1];
    const date = block.match(/<lastmod>([^<]*)<\/lastmod>/u)?.[1];
    if (url !== undefined && date) entries.set(url || '/', date);
  }
  return entries;
}

function searchByUrl(json) {
  return new Map(JSON.parse(json).map((entry) => [entry.url, entry]));
}

function assertSvgSafe(file, digest) {
  const svg = fs.readFileSync(path.join(root, file), 'utf8');
  assert.equal(crypto.createHash('sha1').update(svg).digest('hex'), digest, `${file}: registered SHA-1.`);
  assert(!/<!DOCTYPE|<!ENTITY|<script\b|<foreignObject\b|\son[a-z]+\s*=|(?:href|xlink:href)\s*=/iu.test(svg), `${file}: SVG contains a forbidden external or active construct.`);
  const tags = [];
  const parser = new SaxesParser({ xmlns: true });
  parser.on('opentag', (tag) => tags.push(tag));
  parser.write(svg).close();
  assert.equal(tags[0]?.local, 'svg', `${file}: SVG root element.`);
  assert.equal(tags[0]?.attributes.width?.value, '1200', `${file}: width.`);
  assert.equal(tags[0]?.attributes.height?.value, '700', `${file}: height.`);
  assert.equal(tags[0]?.attributes.viewBox?.value, '0 0 1200 700', `${file}: viewBox.`);
  const allowedTags = new Set(['svg', 'rect', 'path', 'circle', 'line', 'polyline', 'polygon', 'ellipse']);
  for (const tag of tags) {
    assert(allowedTags.has(tag.local), `${file}: unexpected SVG element <${tag.local}>.`);
    for (const { name, value } of Object.values(tag.attributes)) {
      assert(['xmlns', 'width', 'height', 'viewBox', 'role', 'x', 'y', 'cx', 'cy', 'r', 'rx', 'ry', 'd', 'points', 'fill', 'stroke', 'stroke-width', 'stroke-dasharray', 'stroke-linecap', 'stroke-linejoin'].includes(name), `${file}: unexpected SVG attribute ${name}.`);
      if (['x', 'y', 'cx', 'cy', 'r', 'rx', 'ry'].includes(name)) {
        const number = Number(value);
        assert(Number.isFinite(number) && number >= 0 && number <= 1200, `${file}: geometry coordinate ${name} is out of bounds.`);
      }
      if (['d', 'points'].includes(name)) {
        const numbers = value.match(/-?\d+(?:\.\d+)?/gu)?.map(Number) || [];
        assert(numbers.every((number) => Math.abs(number) <= 1200), `${file}: path geometry has an implausible coordinate or relative delta.`);
      }
    }
    const number = (name, fallback = 0) => Number(tag.attributes[name]?.value ?? fallback);
    if (tag.local === 'rect') {
      assert(number('x') >= 0 && number('y') >= 0 && number('x') + number('width') <= 1200 && number('y') + number('height') <= 700, `${file}: rectangle exceeds the SVG canvas.`);
    }
    if (['circle', 'ellipse'].includes(tag.local)) {
      const rx = tag.local === 'circle' ? number('r') : number('rx');
      const ry = tag.local === 'circle' ? rx : number('ry');
      assert(number('cx') - rx >= 0 && number('cx') + rx <= 1200 && number('cy') - ry >= 0 && number('cy') + ry <= 700, `${file}: round geometry exceeds the SVG canvas.`);
    }
  }
  const flowArrowGeometry = new Map([
    ['australia-kangaroo-island-regional-days.svg', 'M250 337 270 345 250 353Z M485 332 510 345 485 358Z M697 337 713 345 697 353Z M876 337 892 345 876 353Z M1057 337 1075 345 1057 353Z'],
    ['australia-kings-park-entry-choice.svg', 'M492 247 489 269 474 259Z M492 453 474 441 489 431Z']
  ]).get(path.basename(file));
  if (flowArrowGeometry) {
    const flowArrows = tags.find((tag) => tag.local === 'path' && tag.attributes.d?.value === flowArrowGeometry);
    assert(flowArrows, `${file}: route arrowheads match the reviewed gap/branch geometry.`);
    if (path.basename(file) === 'australia-kangaroo-island-regional-days.svg') {
      assert.equal(tags.at(-1), flowArrows, `${file}: all five arrowheads are painted above the route nodes.`);
    } else {
      const topCardIndex = tags.findIndex((tag) => tag.local === 'rect' && tag.attributes.x?.value === '492' && tag.attributes.y?.value === '112');
      const bottomCardIndex = tags.findIndex((tag) => tag.local === 'rect' && tag.attributes.x?.value === '492' && tag.attributes.y?.value === '401');
      assert(topCardIndex >= 0 && bottomCardIndex >= 0, `${file}: both destination cards are present.`);
      assert(tags.indexOf(flowArrows) > Math.max(topCardIndex, bottomCardIndex), `${file}: diagonal arrows remain visible over both card edges.`);
    }
  }
}

assert(['codex/sprint-au-adelaide-perth-gaps-20261013', 'codex/sprint-au-top-end-whitsundays-gaps-20261013', 'codex/sprint-au-canberra-content-20261013', 'codex/sprint-au-alps-margaret-gaps-20261013', 'codex/sprint-au-margaret-remaining-20261013'].includes(branch), 'Source branch name.');
const firstParents = git(['rev-list', '--first-parent', '--max-count=4', 'HEAD']).split(/\r?\n/u);
const allowedParentHops = alpsMargaretSprint || margaretRemainingSprint ? 2 : 1;
assert(firstParents.includes(base) && firstParents.indexOf(base) <= allowedParentHops, 'The source branch must descend from its authorized exact base through only the expected scope and correction commits.');

if (margaretRemainingSprint) {
  const priorAdelaidePaths = routes.map((route) => `${route.slice(1)}index.html`);
  assert.equal(git(['diff', '--name-only', base, '--', ...priorAdelaidePaths]).trim(), '', 'Adelaide and Perth route pages remain unchanged from the requested Margaret follow-up base.');
  const correctionCommit = '768151d3f42378358c122a1cde55100fcec9eafa';
  for (const file of [
    'assets/images/australia-kangaroo-island-regional-days.svg',
    'assets/images/australia-kings-park-entry-choice.svg',
    'data/australia-adelaide-perth-diagrams.mjs',
    'reports/adelaide-perth-gaps-refresh-2026-10-12.md'
  ]) assert.equal(fs.readFileSync(path.join(root, file), 'utf8'), git(['show', `${correctionCommit}:${file}`]), `${file}: parallel Adelaide/Perth arrow correction is preserved.`);
  console.log('Adelaide/Perth protection passed: previous route pages and the 768151d3 arrow correction remain intact.');
  process.exit(0);
}

if (alpsMargaretSprint) {
  const targetRoutes = [
    '/australia/canberra-australian-alps/namadgi-national-park/',
    '/australia/canberra-australian-alps/snowy-mountains-kosciuszko/',
    '/australia/margaret-river-southwest/',
    '/australia/margaret-river-southwest/margaret-river-wine-food/'
  ];
  const changedEnglish = git(['diff', '--name-only', base, '--', 'australia']).split(/\r?\n/u).filter((name) => name.endsWith('/index.html')).sort();
  assert.deepEqual(changedEnglish, targetRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'Only the four authorized Canberra and Margaret River English routes may change.');
  const correctionCommit = '768151d3f42378358c122a1cde55100fcec9eafa';
  const correctionFiles = [
    'assets/images/australia-kangaroo-island-regional-days.svg',
    'assets/images/australia-kings-park-entry-choice.svg',
    'data/australia-adelaide-perth-diagrams.mjs',
    'reports/adelaide-perth-gaps-refresh-2026-10-12.md'
  ];
  for (const file of correctionFiles) {
    assert.equal(fs.readFileSync(path.join(root, file), 'utf8'), git(['show', `${correctionCommit}:${file}`]), `${file}: parallel 768151d3 arrow correction is preserved byte-for-byte.`);
  }
  for (const [file, digest] of [
    ['assets/images/australia-kangaroo-island-regional-days.svg', 'a79c937470360a8144977935661b29ce52301a81'],
    ['assets/images/australia-kings-park-entry-choice.svg', '5a606ca608847293d3bb755a1021490a5f439c0b']
  ]) assertSvgSafe(file, digest);
  console.log('Australia arrow correction regression passed: the exact 768151d3 files and branch-aligned arrows remain in the 5f1205bb-based source branch; this checks SVG structure and geometry, not rendered pixels.');
  process.exit(0);
}

if (followOnSprint) {
  const followOnRoutes = [
    '/australia/darwin-top-end/darwin-waterfront-city/',
    '/australia/darwin-top-end/katherine-nitmiluk/',
    '/australia/whitsundays-great-barrier-reef/',
    '/australia/whitsundays-great-barrier-reef/townsville-magnetic-island/'
  ];
  const changedEnglish = git(['diff', '--name-only', base, '--', 'australia']).split(/\r?\n/u).filter((name) => name.endsWith('/index.html')).sort();
  assert.deepEqual(changedEnglish, followOnRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'Only the four follow-on sprint route bodies may change.');
  const protectedPriorSprintPaths = [
    'australia/adelaide-wine-island/adelaide-hills-hahndorf/index.html',
    'australia/adelaide-wine-island/kangaroo-island/index.html',
    'australia/perth-fremantle-rottnest/kings-park/index.html',
    'australia/perth-fremantle-rottnest/cottesloe-scarborough/index.html'
  ];
  const changedProtectedPaths = git(['diff', '--name-only', base, '--', ...protectedPriorSprintPaths]).trim();
  assert.equal(changedProtectedPaths, '', 'The previously authorized Adelaide/Perth route fixes remain unchanged.');
  console.log('Australia follow-on scope regression passed: exact 90de552 base, four authorized Top End/Whitsundays route bodies, and prior Adelaide/Perth fixes preserved.');
  process.exit(0);
}

if (canberraSprint) {
  const protectedPriorSprintPaths = [
    'australia/adelaide-wine-island/adelaide-hills-hahndorf/index.html',
    'australia/adelaide-wine-island/kangaroo-island/index.html',
    'australia/perth-fremantle-rottnest/kings-park/index.html',
    'australia/perth-fremantle-rottnest/cottesloe-scarborough/index.html'
  ];
  assert.equal(git(['diff', '--name-only', base, '--', ...protectedPriorSprintPaths]).trim(), '', 'The authorized Adelaide/Perth route fixes remain unchanged.');
  const siblingArrowFixPaths = [
    'assets/images/australia-kangaroo-island-regional-days.svg',
    'assets/images/australia-kings-park-entry-choice.svg',
    'data/australia-adelaide-perth-diagrams.mjs',
    'reports/adelaide-perth-gaps-refresh-2026-10-12.md'
  ];
  assert.equal(git(['diff', '--name-only', base, '--', ...siblingArrowFixPaths]).trim(), '', 'The parallel 768151d3 arrow-correction files remain untouched for the integration writer.');
  console.log('Canberra branch protection passed: exact 448f6cd5 base; prior Adelaide/Perth content and parallel 768151d3 arrow-correction files are untouched.');
  process.exit(0);
}

const changedEnglish = git(['diff', '--name-only', base, '--', 'australia']).split(/\r?\n/u).filter((name) => name.endsWith('/index.html')).sort();
assert.deepEqual(changedEnglish, routes.map((route) => `${route.slice(1)}index.html`).sort(), 'Only the four authorized English route bodies may change.');

for (const [index, route] of routes.entries()) {
  const englishHtml = fs.readFileSync(fileFor(route), 'utf8');
  const englishDoc = parse(englishHtml);
  const englishRoot = findOne(englishDoc, (node) => node.tagName === 'html');
  assert.equal(attrs(englishRoot).lang, 'en', `${route}: English lang.`);
  const canonical = findOne(englishDoc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical');
  assert.equal(attrs(canonical).href, `https://tripdistill.com${route}`, `${route}: canonical.`);
  const schemas = jsonLdGraphs(englishDoc);
  const article = schemas.find((item) => item['@type'] === 'Article');
  assert.equal(article?.dateModified, isoDate, `${route}: Article dateModified.`);
  const previousHtml = git(['show', `${base}:${route.slice(1)}index.html`]);
  const delta = wordCount(editorialText(englishHtml)) - wordCount(editorialText(previousHtml));
  assert.equal(delta, expectedDelta.get(route), `${route}: rendered body word delta against the exact base.`);
  const bodyText = editorialText(englishHtml);
  for (const phrase of expectedEditorial[index]) assert(bodyText.toLowerCase().includes(phrase.toLowerCase()), `${route}: substantive body must include ${phrase}.`);

  const visibleFaq = findAll(englishDoc, (node) => node.tagName === 'details').map((details) => {
    const summary = textContent(findOne(details, (node) => node.tagName === 'summary')).replace(/\s+/gu, ' ').trim();
    const full = textContent(details).replace(/\s+/gu, ' ').trim();
    return { question: summary, answer: full.slice(summary.length).trim() };
  });
  const faq = schemas.find((item) => item['@type'] === 'FAQPage');
  assert(faq?.mainEntity?.length > 0, `${route}: FAQ schema is present.`);
  assert.equal(faq.mainEntity.length, visibleFaq.length, `${route}: visible FAQ/schema item count parity.`);
  assert.deepEqual(faq.mainEntity.map((item) => ({ question: item.name, answer: item.acceptedAnswer?.text })), visibleFaq, `${route}: visible FAQ/schema text parity.`);

  for (const locale of locales) {
    const localHtml = fs.readFileSync(fileFor(route, locale.prefix), 'utf8');
    const localDoc = parse(localHtml);
    const localRoot = findOne(localDoc, (node) => node.tagName === 'html');
    assert.equal(attrs(localRoot).lang, locale.code, `${locale.code} ${route}: lang.`);
    const localCanonical = findOne(localDoc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical');
    assert.equal(attrs(localCanonical).href, `https://tripdistill.com${locale.prefix}${route}`, `${locale.code} ${route}: canonical.`);
    assert(localHtml.includes(locale.date), `${locale.code} ${route}: localized reviewed date.`);
    const localText = editorialText(localHtml);
    assert(locale.script.test(localText), `${locale.code} ${route}: localized body script.`);
    const localArticle = jsonLdGraphs(localDoc).find((item) => item['@type'] === 'Article');
    assert.equal(localArticle?.dateModified, isoDate, `${locale.code} ${route}: Article dateModified.`);
  }
}

const baseSearch = searchByUrl(git(['show', `${base}:data/search-index.json`]));
const currentSearch = searchByUrl(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
assert.deepEqual([...currentSearch.keys()].sort(), [...baseSearch.keys()].sort(), 'Search index URL set is unchanged.');
const changedSearch = [...currentSearch.keys()].filter((url) => JSON.stringify(currentSearch.get(url)) !== JSON.stringify(baseSearch.get(url))).sort();
assert.deepEqual(changedSearch, [...routes].sort(), 'Exactly four English search records changed.');
for (const route of routes) assert(currentSearch.get(route)?.summary?.trim(), `${route}: English search summary exists.`);

const baseSitemap = sitemapEntries(git(['show', `${base}:sitemap.xml`]));
const currentSitemap = sitemapEntries(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baseSitemap.size, 4560, 'Base sitemap contains 4,560 URLs.');
assert.equal(currentSitemap.size, 4560, 'Current sitemap contains 4,560 URLs.');
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set is unchanged.');
const changedSitemap = [...currentSitemap.keys()].filter((url) => currentSitemap.get(url) !== baseSitemap.get(url)).sort();
const expectedSitemap = routes.flatMap((route) => locales.map((locale) => `${locale.prefix}${route}`)).sort();
assert.deepEqual(changedSitemap, expectedSitemap, 'Exactly four routes × five locales receive a new sitemap date.');
for (const url of expectedSitemap) assert.equal(currentSitemap.get(url), isoDate, `${url}: sitemap lastmod.`);

for (const locale of locales.slice(1)) {
  const directory = path.join(root, 'data/i18n/reviewed', locale.code);
  const pageBatch = JSON.parse(fs.readFileSync(path.join(directory, pageBatchName), 'utf8'));
  const searchBatch = JSON.parse(fs.readFileSync(path.join(directory, searchBatchName), 'utf8'));
  assert.equal(pageBatch.locale, locale.code, `${locale.code}: page batch locale.`);
  assert.equal(pageBatch.qualityStatus, 'reviewed', `${locale.code}: page batch review state.`);
  assert.deepEqual(pageBatch.routes, routes, `${locale.code}: page batch route scope.`);
  assert.equal(Object.keys(pageBatch.translations).length, 197, `${locale.code}: page batch fresh-key count.`);
  assert(Object.values(pageBatch.translations).every((text) => typeof text === 'string' && text.trim()), `${locale.code}: page translations are nonblank.`);
  assert.deepEqual(pageBatch.reviewProvenance, batchProvenance, `${locale.code}: honest same-model/runtime provenance.`);
  assert.equal(searchBatch.locale, locale.code, `${locale.code}: search batch locale.`);
  assert.equal(searchBatch.qualityStatus, 'reviewed', `${locale.code}: search batch review state.`);
  assert.deepEqual(searchBatch.routes, ['/data/search-index.json'], `${locale.code}: search batch scope.`);
  assert.equal(Object.keys(searchBatch.translations).length, 28, `${locale.code}: search batch fresh-key count.`);
  assert.deepEqual(searchBatch.reviewProvenance, batchProvenance, `${locale.code}: honest search review/runtime provenance.`);
  const localSearch = searchByUrl(fs.readFileSync(path.join(root, locale.prefix.slice(1), 'data/search-index.json'), 'utf8'));
  for (const route of routes) {
    const englishSummary = currentSearch.get(route)?.summary;
    assert(searchBatch.translations[englishSummary], `${locale.code} ${route}: translated search summary key exists.`);
    assert.equal(localSearch.get(`${locale.prefix}${route}`)?.summary, searchBatch.translations[englishSummary], `${locale.code} ${route}: localized summary matches reviewed batch.`);
    assert(locale.script.test(localSearch.get(`${locale.prefix}${route}`)?.summary || ''), `${locale.code} ${route}: localized search summary script.`);
  }
}

const changedAssets = [...new Set([
  ...git(['diff', '--name-only', base, '--', 'assets/images']).split(/\r?\n/u).filter(Boolean),
  ...git(['ls-files', '--others', '--exclude-standard', '--', 'assets/images']).split(/\r?\n/u).filter(Boolean)
])].sort();
const diagramFiles = routes.map((route) => `assets/images/${australiaAdelaidePerthDiagrams[route.replace(/^\/australia\//u, '').replace(/\/$/u, '')]?.src.split('/').at(-1)}`);
assert.deepEqual(changedAssets, diagramFiles.sort(), 'Only four new planning SVGs changed under assets/images.');
for (const route of routes) {
  const diagram = australiaAdelaidePerthDiagrams[route.replace(/^\/australia\//u, '').replace(/\/$/u, '')];
  assert(diagram, `${route}: original diagram record exists.`);
  assert.equal(diagram.width, 1200, `${route}: diagram width.`);
  assert.equal(diagram.height, 700, `${route}: diagram height.`);
  assert.equal(diagram.commercialReuseEligibility, 'unknown', `${route}: no unsupported rights claim.`);
  assertSvgSafe(`assets/images/${diagram.src.split('/').at(-1)}`, diagram.localSha1);
}

console.log('Adelaide/Perth gap regression passed: four exact route bodies (+4,171 words), five-language dates/canonicals/search, 20 scoped sitemap lastmod values, 197 page and 28 search strings per locale with non-independent review provenance, and four registered safe SVGs.');
