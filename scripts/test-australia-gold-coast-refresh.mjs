#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
import { SaxesParser } from 'saxes';
import { collectTranslationWork } from './i18n-lib.mjs';
import { australiaGoldCoastDiagram } from '../data/australia-gold-coast-diagram.mjs';
import { postIntegrationAustraliaRoutes, postIntegrationCanberraRoutes, postIntegrationAlpsMargaretRoutes, postIntegrationMargaretRemainingRoutes, postIntegrationBroomeRoutes, postIntegrationBroomeTasmaniaRoutes, postAustraliaFinalRoutes } from './integration-sprint-scope.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const base = 'ec5e2f319333e946e5792b99777e5ce99a97e2b6';
const blueMountains = '8ca64553fadfaf69baab2790c41f543a649c8043';
const routes = [
  '/australia/gold-coast-scenic-rim/',
  '/australia/gold-coast-scenic-rim/surfers-paradise-broadbeach/',
  '/australia/gold-coast-scenic-rim/burleigh-heads-tallebudgera/',
  '/australia/gold-coast-scenic-rim/coolangatta-snapper-rocks/'
];
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
const reviewIsoDate = '2026-10-12';
const reviewDate = '12 October 2026';
const batchName = 'zzzzzf-australia-gold-coast-pages-20261012.json';
const svgPath = 'assets/images/australia-gold-coast-coast-to-range-planning.svg';
const photoPaths = [
  'assets/images/australia-gold-coast-scenic-rim-surfers-paradise-broadbeach.webp',
  'assets/images/australia-gold-coast-scenic-rim-burleigh-heads-tallebudgera.webp',
  'assets/images/australia-gold-coast-scenic-rim-coolangatta-snapper-rocks.webp'
];

function git(args, binary = false) {
  return execFileSync('git', args, { cwd: root, encoding: binary ? undefined : 'utf8', maxBuffer: 32 * 1024 * 1024 });
}

function pageFile(route, prefix = '') {
  return path.join(root, `${prefix}${route}`.replace(/^\//, ''), 'index.html');
}

function findAll(node, predicate, output = []) {
  if (predicate(node)) output.push(node);
  for (const child of node.childNodes || []) findAll(child, predicate, output);
  return output;
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
  if (['script', 'style', 'svg'].includes(node.tagName)) return '';
  return (node.childNodes || []).map(textContent).join(' ');
}

function editorialText(html) {
  const document = parse(html);
  const main = findOne(document, (node) => node.tagName === 'main' && attrs(node).id === 'main-content');
  assert(main, 'Missing #main-content.');
  const parts = [];
  function walk(node) {
    if (node.nodeName === '#text') { parts.push(node.value); return; }
    if (['script', 'style', 'svg'].includes(node.tagName)) return;
    const a = attrs(node);
    const classes = (a.class || '').split(/\s+/);
    if (classes.some((name) => ['sources', 'au-hub-directory', 'au-hub-route', 'au-related-grid', 'au-related-card'].includes(name))) return;
    if (a['aria-label'] === 'Advertisement') return;
    for (const child of node.childNodes || []) walk(child);
  }
  walk(main);
  return parts.join(' ').replace(/\s+/g, ' ').trim();
}

function schemaAndVisibleFaq(html) {
  const document = parse(html);
  const json = findAll(document, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json')
    .map((node) => (node.childNodes || []).map((child) => child.value || '').join(''))
    .map((value) => { try { return JSON.parse(value); } catch { return null; } })
    .find(Boolean);
  const article = json?.['@graph']?.find((item) => item['@type'] === 'Article');
  const faq = json?.['@graph']?.find((item) => item['@type'] === 'FAQPage');
  const visibleFaq = findAll(document, (node) => node.tagName === 'details').map((details) => ({
    question: textContent(findOne(details, (node) => node.tagName === 'summary')).replace(/\s+/g, ' ').trim(),
    answer: textContent(findOne(details, (node) => node.tagName === 'div' && attrs(node).class === 'faq-answer')).replace(/\s+/g, ' ').trim()
  }));
  return { article, faq, visibleFaq };
}

function sitemapEntries(xml) {
  const rows = [];
  let current = null;
  let active = '';
  const parser = new SaxesParser({ xmlns: true });
  parser.on('opentag', (tag) => { active = tag.local; if (tag.local === 'url') current = {}; });
  parser.on('text', (value) => {
    if (!current) return;
    if (active === 'loc') current.loc = (current.loc || '') + value;
    if (active === 'lastmod') current.lastmod = (current.lastmod || '') + value;
  });
  parser.on('closetag', (tag) => { if (tag.local === 'url') { rows.push(current); current = null; } active = ''; });
  parser.write(xml).close();
  assert.equal(rows.length, new Set(rows.map(({ loc }) => loc)).size, 'Sitemap locations must remain unique.');
  return new Map(rows.map(({ loc, lastmod }) => [new URL(loc).pathname, lastmod]));
}

function parseSvg(xml) {
  const tags = [];
  const textRows = [];
  let active = null;
  const parser = new SaxesParser({ xmlns: true });
  parser.on('opentag', (tag) => {
    tags.push(tag);
    if (tag.local === 'text') active = { lang: tag.attributes.lang?.value || '', text: '' };
  });
  parser.on('text', (value) => { if (active) active.text += value; });
  parser.on('closetag', (tag) => { if (tag.local === 'text' && active) { textRows.push(active); active = null; } });
  parser.write(xml).close();
  return { tags, textRows };
}

function number(tag, name, fallback = 0) {
  const value = tag.attributes[name]?.value;
  return value === undefined ? fallback : Number(value);
}

const localeScripts = {
  'zh-Hant': /[\u3400-\u9fff]/u,
  ja: /[\u3040-\u30ff\u3400-\u9fff]/u,
  ko: /[\uac00-\ud7af]/u,
  th: /[\u0e00-\u0e7f]/u
};
const localizedReviewDate = {
  'zh-Hant': '2026 年 10 月 12 日',
  ja: '2026年10月12日',
  ko: '2026년 10월 12일',
  th: '12 ตุลาคม 2026'
};

const expectedHtml = [...routes, '/australia/gold-coast-scenic-rim/springbrook-national-park/', '/australia/gold-coast-scenic-rim/lamington-national-park/'].map((route) => route.replace(/^\//, '') + 'index.html').sort();
const changedHtml = git(['diff', '--name-only', base, '--', 'australia/gold-coast-scenic-rim'])
  .split(/\r?\n/).filter((name) => name.endsWith('.html')).sort();
assert.deepEqual(changedHtml, expectedHtml, 'Only the four selected Gold Coast routes and the two exact new Scenic Rim guides may change from the requested base.');

const deltas = [];
for (const route of routes) {
  const english = fs.readFileSync(pageFile(route), 'utf8');
  const document = parse(english);
  const htmlRoot = findOne(document, (node) => node.tagName === 'html');
  assert.equal(attrs(htmlRoot).lang, 'en', route + ': English lang attribute.');
  const canonical = findOne(document, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical');
  assert.equal(attrs(canonical).href, 'https://tripdistill.com' + route, route + ': canonical URL.');
  const { article, faq, visibleFaq } = schemaAndVisibleFaq(english);
  assert.equal(article?.dateModified, reviewIsoDate, route + ': structured article date.');
  assert.equal(article?.mainEntityOfPage, 'https://tripdistill.com' + route, route + ': structured article URL.');
  assert.deepEqual((faq?.mainEntity || []).map((item) => ({ question: item.name, answer: item.acceptedAnswer?.text })), visibleFaq, route + ': visible and structured FAQs must agree.');
  assert(english.includes('reviewed ' + reviewDate), route + ': visible review date.');
  assert(english.includes('reviewed on ' + reviewDate), route + ': source-review date.');
  const before = git(['show', base + ':' + route.slice(1) + 'index.html']);
  const delta = editorialText(english).split(/\s+/).filter(Boolean).length - editorialText(before).split(/\s+/).filter(Boolean).length;
  assert(delta >= 400, route + ': substantive body gain is only ' + delta + ' words.');
  deltas.push({ route, words: delta });

  for (const [locale, prefix] of locales.slice(1)) {
    const localized = fs.readFileSync(pageFile(route, prefix), 'utf8');
    const localDoc = parse(localized);
    assert.equal(attrs(findOne(localDoc, (node) => node.tagName === 'html')).lang, locale, locale + ' ' + route + ': lang attribute.');
    assert(localized.includes(localizedReviewDate[locale]), locale + ' ' + route + ': localized visible review date.');
    const h1 = textContent(findOne(localDoc, (node) => node.tagName === 'h1')).replace(/\s+/g, ' ').trim();
    assert(h1 && localeScripts[locale].test(h1), locale + ' ' + route + ': translated heading script.');
    const localSchema = schemaAndVisibleFaq(localized);
    assert.equal(localSchema.article?.dateModified, reviewIsoDate, locale + ' ' + route + ': article date.');
    assert.deepEqual((localSchema.faq?.mainEntity || []).map((item) => ({ question: item.name, answer: item.acceptedAnswer?.text })), localSchema.visibleFaq, locale + ' ' + route + ': visible and structured FAQs must agree.');
    const localCanonical = findOne(localDoc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical');
    assert.equal(attrs(localCanonical).href, 'https://tripdistill.com' + prefix + route, locale + ' ' + route + ': canonical URL.');
  }
}

const pageWork = new Map(collectTranslationWork().map((record) => [record.route, record]));
const required = new Set(routes.flatMap((route) => pageWork.get(route).units));
for (const locale of ['zh-Hant', 'ja', 'ko', 'th']) {
  const file = path.join(root, 'data/i18n/reviewed', locale, batchName);
  const batch = JSON.parse(fs.readFileSync(file, 'utf8'));
  assert.equal(batch.qualityStatus, 'reviewed', locale + ': page batch review status.');
  assert.deepEqual(batch.routes, routes, locale + ': page batch route scope.');
  assert.equal(Object.keys(batch.translations).length, 154, locale + ': expected 154 fresh translation keys.');
  assert(Object.values(batch.translations).every((value) => typeof value === 'string' && value.trim()), locale + ': all page targets must be complete.');
  assert.equal(batch.reviewProvenance?.writer, 'GPT-6 Luna', locale + ': translation writer provenance.');
  assert.equal(batch.reviewProvenance?.reviewer, 'GPT-6 Luna; same-model self-review', locale + ': self-review provenance.');
  assert.equal(batch.reviewProvenance?.independentSecondModel, false, locale + ': no independent review claim.');
  for (const source of Object.keys(batch.translations)) assert(required.has(source), locale + ': page batch contains a key outside selected routes.');
}

const baseSearch = JSON.parse(git(['show', base + ':data/search-index.json']));
const currentSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const baseSearchByUrl = new Map(baseSearch.map((item) => [item.url, item]));
const currentSearchByUrl = new Map(currentSearch.map((item) => [item.url, item]));
assert.deepEqual([...currentSearchByUrl.keys()].sort(), [...baseSearchByUrl.keys()].sort(), 'Search URL set must remain unchanged.');
const changedSearch = [...currentSearchByUrl.keys()].filter((url) => routes.includes(url) && JSON.stringify(currentSearchByUrl.get(url)) !== JSON.stringify(baseSearchByUrl.get(url))).sort();
assert.deepEqual(changedSearch, [...routes].sort(), 'Each selected Gold Coast search record must change from the requested base.');
for (const route of routes) {
  const record = currentSearchByUrl.get(route);
  assert(record?.summary && fs.readFileSync(pageFile(route), 'utf8').includes(record.summary), route + ': search summary must match page copy.');
  for (const [locale, prefix] of locales.slice(1)) {
    const searchFile = path.join(root, prefix.slice(1), 'data/search-index.json');
    const records = JSON.parse(fs.readFileSync(searchFile, 'utf8'));
    const localRecord = records.find((item) => item.url === prefix + route);
    assert(localRecord?.title && localRecord?.summary, locale + ' ' + route + ': localized search entry.');
    assert(localeScripts[locale].test(localRecord.title), locale + ' ' + route + ': translated search title.');
  }
}

const baseSitemap = sitemapEntries(git(['show', base + ':sitemap.xml']));
const currentSitemap = sitemapEntries(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set must remain unchanged.');
const expectedLastmod = [...routes, ...postIntegrationAustraliaRoutes, ...postIntegrationCanberraRoutes, ...postIntegrationAlpsMargaretRoutes, ...postIntegrationMargaretRemainingRoutes, ...postIntegrationBroomeRoutes, ...postIntegrationBroomeTasmaniaRoutes, ...postAustraliaFinalRoutes].flatMap((route) => locales.map(([, prefix]) => prefix + route)).sort();
const changedLastmod = [...new Set([...baseSitemap.keys(), ...currentSitemap.keys()])]
  .filter((route) => expectedLastmod.includes(route) && baseSitemap.get(route) !== currentSitemap.get(route)).sort();
assert.deepEqual(changedLastmod, expectedLastmod, 'The four selected routes across five editions must receive a new lastmod.');
for (const route of expectedLastmod) assert.equal(currentSitemap.get(route), [...postIntegrationAlpsMargaretRoutes, ...postIntegrationMargaretRemainingRoutes, ...postIntegrationBroomeRoutes, ...postIntegrationBroomeTasmaniaRoutes, ...postAustraliaFinalRoutes].some((path) => route.endsWith(path)) ? '2026-10-13' : reviewIsoDate, route + ': sitemap lastmod.');

const svg = fs.readFileSync(path.join(root, svgPath), 'utf8');
assert(!/<script\b|\son[a-z]+\s*=|<foreignObject\b|\s(?:href|xlink:href)\s*=\s*["']https?:\/\//i.test(svg), 'SVG has no scripts, handlers, foreign objects or external references.');
const parsedSvg = parseSvg(svg);
const svgRoot = parsedSvg.tags[0];
assert.equal(svgRoot.local, 'svg');
assert.equal(svgRoot.attributes.width?.value, '1600');
assert.equal(svgRoot.attributes.height?.value, '1380');
assert.equal(svgRoot.attributes.viewBox?.value, '0 0 1600 1380');
assert(svg.includes('id="title"') && svg.includes('id="desc"'), 'SVG must have accessible title and description.');
const bounds = { maxX: 1600, maxY: 1380 };
let geometryCount = 0;
for (const tag of parsedSvg.tags) {
  if (tag.local === 'rect') {
    const x = number(tag, 'x'); const y = number(tag, 'y');
    const width = number(tag, 'width'); const height = number(tag, 'height');
    assert(x >= 0 && y >= 0 && x + width <= bounds.maxX && y + height <= bounds.maxY, 'SVG rectangle extends beyond viewBox.');
    geometryCount += 1;
  } else if (tag.local === 'circle') {
    const cx = number(tag, 'cx'); const cy = number(tag, 'cy'); const radius = number(tag, 'r');
    assert(cx - radius >= 0 && cy - radius >= 0 && cx + radius <= bounds.maxX && cy + radius <= bounds.maxY, 'SVG circle extends beyond viewBox.');
    geometryCount += 1;
  } else if (tag.local === 'line') {
    for (const axis of ['x1', 'x2']) assert(number(tag, axis) >= 0 && number(tag, axis) <= bounds.maxX, 'SVG line x-coordinate extends beyond viewBox.');
    for (const axis of ['y1', 'y2']) assert(number(tag, axis) >= 0 && number(tag, axis) <= bounds.maxY, 'SVG line y-coordinate extends beyond viewBox.');
    geometryCount += 1;
  } else if (tag.local === 'text') {
    assert(number(tag, 'x') >= 0 && number(tag, 'x') <= bounds.maxX && number(tag, 'y') >= 0 && number(tag, 'y') <= bounds.maxY, 'SVG text anchor extends beyond viewBox.');
  } else {
    assert(['svg', 'title', 'desc', 'defs', 'linearGradient', 'stop', 'style'].includes(tag.local), 'SVG contains unreviewed element ' + tag.local + '.');
  }
}
assert(geometryCount >= 12, 'SVG must include bounded route, panel and node geometry.');
const legends = parsedSvg.textRows.filter((row) => ['en', 'zh-Hant', 'ja', 'ko', 'th'].includes(row.lang));
assert.deepEqual(legends.map((row) => row.lang).sort(), ['en', 'ja', 'ko', 'th', 'zh-Hant'].sort(), 'SVG must have one legend for each requested language.');
for (const [locale, term] of [['en', 'L1 stations are shown'], ['zh-Hant', 'L1 車站依目前列示順序'], ['ja', 'L1の駅は掲載順'], ['ko', 'L1 역은 표시된 순서'], ['th', 'สถานี L1 เรียงตามลำดับ']]) {
  assert(legends.find((row) => row.lang === locale)?.text.includes(term), 'SVG legend is missing ' + locale + ' scope guidance.');
}
assert(/not.to.scale/i.test(svg) && /no.*timetable/i.test(svg) && /service.*guaranteed/i.test(svg), 'SVG must disclaim scale, timetable and service guarantees.');
assert.equal(australiaGoldCoastDiagram.src, '/' + svgPath);
assert.equal(australiaGoldCoastDiagram.license, null);
assert.equal(australiaGoldCoastDiagram.rightsStatus, 'Project original; no separate reuse license declared');
assert.equal(australiaGoldCoastDiagram.commercialReuseEligibility, 'unknown');
assert.equal(australiaGoldCoastDiagram.localSha1, crypto.createHash('sha1').update(svg).digest('hex'));
const hubHtml = fs.readFileSync(pageFile(routes[0]), 'utf8');
const hubDoc = parse(hubHtml);
const schematic = findOne(hubDoc, (node) => node.tagName === 'img' && attrs(node).src === '/' + svgPath);
assert(schematic && /not.to.scale/i.test(attrs(schematic).alt), 'Gold Coast hub must provide descriptive schematic alt text.');
assert(/commercial reuse eligibility is unknown/i.test(hubHtml), 'Visible diagram note must disclose unknown reuse eligibility.');
assert(hubHtml.includes('href="https://tripdistill.com/' + svgPath + '"') && hubHtml.includes('https://tripdistill.com/terms-of-use/'), 'Diagram note must link the original and Terms of Use.');

for (const photo of photoPaths) {
  const before = git(['show', base + ':' + photo], true);
  const after = fs.readFileSync(path.join(root, photo));
  assert.deepEqual(crypto.createHash('sha256').update(after).digest(), crypto.createHash('sha256').update(before).digest(), photo + ': existing photo bytes changed.');
}
const changedAssets = [...new Set([
  ...git(['diff', '--name-only', base, '--', 'assets/images']).split(/\r?\n/).filter(Boolean),
  ...git(['ls-files', '--others', '--exclude-standard', '--', 'assets/images']).split(/\r?\n/).filter(Boolean)
])].sort();
assert.deepEqual(changedAssets.filter((assetPath) => [
  'assets/images/australia-blue-mountains-western-line-planning.svg', svgPath
].includes(assetPath)), [
  'assets/images/australia-blue-mountains-western-line-planning.svg',
  svgPath
].sort(), 'Only the preserved Blue Mountains correction and new Gold Coast SVG may change in the image directory.');

for (const file of [
  'assets/images/australia-blue-mountains-western-line-planning.svg',
  'data/australia-blue-mountains-diagram.mjs'
]) {
  assert.deepEqual(fs.readFileSync(path.join(root, file)), git(['show', `${blueMountains}:${file}`], true), file + ': parallel Blue Mountains fix must remain byte-identical to 8ca64553.');
}

if (deltas.length !== 4 || deltas.some(({ words }) => words < 400)) throw new Error('All four selected pages must retain substantive body gains.');
console.log('Gold Coast refresh regression passed: four existing routes, five-language dates and FAQ parity, 154 reviewed fresh strings per locale, unchanged route/search/sitemap sets, four scoped search summaries, 20 sitemap dates, 5-language SVG XML and geometry bounds, unchanged photo bytes, and preserved Blue Mountains commit 8ca64553.');
for (const { route, words } of deltas) console.log(`${route} +${words} rendered body words`);
