#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
import { SaxesParser } from 'saxes';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const base = 'd38eb8b13e90eaa121d4696a7d7a34b84e481b98';
const routes = [
  '/australia/blue-mountains-nsw-coast/',
  '/australia/blue-mountains-nsw-coast/katoomba-echo-point/',
  '/australia/blue-mountains-nsw-coast/wentworth-falls-tableland/',
  '/australia/blue-mountains-nsw-coast/blackheath-grose-valley/'
];
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
const reviewIsoDate = '2026-10-12';
const reviewDate = '12 October 2026';
const svgPath = '/assets/images/australia-blue-mountains-western-line-planning.svg';
const issues = [];

function git(args, binary = false) {
  return execFileSync('git', args, { cwd: root, encoding: binary ? undefined : 'utf8', maxBuffer: 32 * 1024 * 1024 });
}

function fileFor(route, prefix = '') {
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
    if (classes.some((name) => ['sources', 'au-hub-directory', 'au-related-grid', 'au-related-card'].includes(name))) return;
    if (a['aria-label'] === 'Advertisement') return;
    for (const child of node.childNodes || []) walk(child);
  }
  walk(main);
  return parts.join(' ').replace(/\s+/g, ' ').trim();
}

function wordCount(text) { return text.split(/\s+/).filter(Boolean).length; }

function schemaAndVisibleFaq(html) {
  const document = parse(html);
  const script = findAll(document, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json')
    .map((node) => (node.childNodes || []).map((child) => child.value || '').join(''))
    .map((json) => { try { return JSON.parse(json); } catch { return null; } })
    .find(Boolean);
  const article = script?.['@graph']?.find((item) => item['@type'] === 'Article');
  const faq = script?.['@graph']?.find((item) => item['@type'] === 'FAQPage');
  const visibleFaq = findAll(document, (node) => node.tagName === 'details').map((details) => ({
    question: textContent(findOne(details, (node) => node.tagName === 'summary')).replace(/\s+/g, ' ').trim(),
    answer: textContent(findOne(details, (node) => node.tagName === 'div' && attrs(node).class === 'faq-answer')).replace(/\s+/g, ' ').trim()
  }));
  return { article, faq, visibleFaq };
}

function sha256(bytes) { return crypto.createHash('sha256').update(bytes).digest('hex'); }

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
  assert.equal(rows.length, new Set(rows.map(({ loc }) => loc)).size, 'Sitemap locations must be unique.');
  return new Map(rows.map(({ loc, lastmod }) => [new URL(loc).pathname, lastmod]));
}

function parseSvg(xml) {
  const tags = [];
  const textRows = [];
  let currentText = null;
  const parser = new SaxesParser({ xmlns: true });
  parser.on('opentag', (tag) => {
    tags.push(tag);
    if (tag.local === 'text') currentText = { lang: tag.attributes.lang?.value || '', text: '' };
  });
  parser.on('text', (value) => { if (currentText) currentText.text += value; });
  parser.on('closetag', (tag) => { if (tag.local === 'text' && currentText) { textRows.push(currentText); currentText = null; } });
  parser.write(xml).close();
  return { tags, textRows };
}

function svgNumber(tag, name, fallback = 0) {
  const value = tag.attributes[name]?.value;
  return value === undefined ? fallback : Number(value);
}

const expectedEnglish = routes.map((route) => `${route.slice(1)}index.html`).sort();
const changedEnglish = git(['diff', '--name-only', base, '--', 'australia/blue-mountains-nsw-coast'])
  .split(/\r?\n/).filter((name) => name.endsWith('.html')).sort();
assert.deepEqual(changedEnglish, expectedEnglish, 'Only the four selected English routes may change.');

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

for (const route of routes) {
  const english = fs.readFileSync(fileFor(route), 'utf8');
  const document = parse(english);
  const rootHtml = findOne(document, (node) => node.tagName === 'html');
  assert.equal(attrs(rootHtml).lang, 'en', `${route}: English lang attribute.`);
  const canonical = findOne(document, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical');
  assert.equal(attrs(canonical).href, `https://tripdistill.com${route}`, `${route}: canonical URL.`);
  const { article, faq, visibleFaq } = schemaAndVisibleFaq(english);
  assert.equal(article?.dateModified, reviewIsoDate, `${route}: Article dateModified.`);
  assert.equal(article?.mainEntityOfPage, `https://tripdistill.com${route}`, `${route}: structured Article route.`);
  const structuredFaq = (faq?.mainEntity || []).map((item) => ({ question: item.name, answer: item.acceptedAnswer?.text }));
  assert.equal(JSON.stringify(structuredFaq), JSON.stringify(visibleFaq), `${route}: visible and structured FAQs must match.`);
  assert(english.includes(`reviewed ${reviewDate}`), `${route}: visible page review date.`);
  assert(english.includes(`reviewed on ${reviewDate}`), `${route}: visible source review date.`);

  const before = git(['show', `${base}:${route.slice(1)}index.html`]);
  const delta = wordCount(editorialText(english)) - wordCount(editorialText(before));
  assert(delta >= 400, `${route}: substantive body text increased by only ${delta} words after excluding cards, sources and ads.`);

  for (const [locale, prefix] of locales.slice(1)) {
    const localized = fs.readFileSync(fileFor(route, prefix), 'utf8');
    const localizedDocument = parse(localized);
    const localizedHtml = findOne(localizedDocument, (node) => node.tagName === 'html');
    assert.equal(attrs(localizedHtml).lang, locale, `${locale} ${route}: lang attribute.`);
    assert(localized.includes(localizedReviewDate[locale]), `${locale} ${route}: localized review date.`);
    const heading = findOne(localizedDocument, (node) => node.tagName === 'h1');
    const headingText = textContent(heading).replace(/\s+/g, ' ').trim();
    assert(headingText && localeScripts[locale].test(headingText), `${locale} ${route}: translated h1 script.`);
    const localizedSchema = schemaAndVisibleFaq(localized);
    assert.equal(localizedSchema.article?.dateModified, reviewIsoDate, `${locale} ${route}: Article dateModified.`);
    const localizedStructuredFaq = (localizedSchema.faq?.mainEntity || []).map((item) => ({ question: item.name, answer: item.acceptedAnswer?.text }));
    assert.equal(JSON.stringify(localizedStructuredFaq), JSON.stringify(localizedSchema.visibleFaq), `${locale} ${route}: visible and structured FAQs.`);
  }
}

for (const locale of ['zh-Hant', 'ja', 'ko', 'th']) {
  const file = path.join(root, `data/i18n/reviewed/${locale}/zzzzzd-australia-blue-mountains-pages-20261012.json`);
  const batch = JSON.parse(fs.readFileSync(file, 'utf8'));
  assert.equal(batch.qualityStatus, 'reviewed', `${locale}: translation batch quality status.`);
  assert.deepEqual(batch.routes, routes, `${locale}: translation batch route scope.`);
  assert.equal(Object.keys(batch.translations).length, 153, `${locale}: expected current locale delta count.`);
  assert(Object.values(batch.translations).every((value) => typeof value === 'string' && value.trim()), `${locale}: every translation is present.`);
  assert.equal(batch.reviewProvenance?.reviewer, 'GPT-6 Luna; same-model self-review', `${locale}: translation review provenance.`);
  assert.equal(batch.reviewProvenance?.independentSecondModel, false, `${locale}: translation review must not claim an independent second model.`);
}

const baseSearch = JSON.parse(git(['show', `${base}:data/search-index.json`]));
const currentSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const baseSearchByUrl = new Map(baseSearch.map((item) => [item.url, item]));
const currentSearchByUrl = new Map(currentSearch.map((item) => [item.url, item]));
assert.deepEqual([...currentSearchByUrl.keys()].sort(), [...baseSearchByUrl.keys()].sort(), 'Search-index URL set and count must remain unchanged.');
const changedSearch = [...currentSearchByUrl.keys()].filter((url) => JSON.stringify(currentSearchByUrl.get(url)) !== JSON.stringify(baseSearchByUrl.get(url))).sort();
assert.deepEqual(changedSearch, [...routes].sort(), 'Only the four selected search records may change.');
for (const route of routes) {
  const record = currentSearchByUrl.get(route);
  assert(record?.summary && fs.readFileSync(fileFor(route), 'utf8').includes(record.summary), `${route}: search summary must match page copy.`);
}

const baseSitemap = sitemapEntries(git(['show', `${base}:sitemap.xml`]));
const currentSitemap = sitemapEntries(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.deepEqual([...currentSitemap.keys()].sort(), [...baseSitemap.keys()].sort(), 'Sitemap URL set must remain unchanged.');
const expectedLastmod = routes.flatMap((route) => locales.map(([, prefix]) => `${prefix}${route}`)).sort();
const changedLastmod = [...new Set([...baseSitemap.keys(), ...currentSitemap.keys()])]
  .filter((route) => baseSitemap.get(route) !== currentSitemap.get(route)).sort();
assert.deepEqual(changedLastmod, expectedLastmod, 'Exactly the four selected routes in five editions may receive a new sitemap lastmod.');
for (const route of expectedLastmod) assert.equal(currentSitemap.get(route), reviewIsoDate, `${route}: sitemap lastmod.`);

const svgFile = path.join(root, svgPath.slice(1));
const svg = fs.readFileSync(svgFile, 'utf8');
assert(!/<script\b|\son[a-z]+\s*=|<foreignObject\b|\s(?:href|xlink:href)\s*=\s*["']https?:\/\//i.test(svg), 'SVG must not include scripts, handlers, foreign objects or external references.');
const { tags: svgTags, textRows } = parseSvg(svg);
const svgRoot = svgTags[0];
assert.equal(svgRoot.local, 'svg');
assert.equal(svgRoot.attributes.width?.value, '1600');
assert.equal(svgRoot.attributes.height?.value, '1140');
assert.equal(svgRoot.attributes.viewBox?.value, '0 0 1600 1140');
assert(svg.includes('id="title"') && svg.includes('id="desc"'), 'SVG accessible title and description are required.');
const bounds = { minX: 0, minY: 0, maxX: 1600, maxY: 1140 };
let geometryCount = 0;
for (const tag of svgTags) {
  if (tag.local === 'rect') {
    const x = svgNumber(tag, 'x'); const y = svgNumber(tag, 'y');
    const width = svgNumber(tag, 'width'); const height = svgNumber(tag, 'height');
    assert(x >= bounds.minX && y >= bounds.minY && x + width <= bounds.maxX && y + height <= bounds.maxY, 'SVG rectangle extends beyond viewBox.');
    geometryCount += 1;
  } else if (tag.local === 'circle') {
    const cx = svgNumber(tag, 'cx'); const cy = svgNumber(tag, 'cy'); const radius = svgNumber(tag, 'r');
    assert(cx - radius >= bounds.minX && cy - radius >= bounds.minY && cx + radius <= bounds.maxX && cy + radius <= bounds.maxY, 'SVG circle extends beyond viewBox.');
    geometryCount += 1;
  } else if (tag.local === 'path') {
    const values = (tag.attributes.d?.value || '').match(/[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g) || [];
    assert(values.length >= 4 && values.length % 2 === 0, 'SVG path must use reviewed absolute coordinate pairs.');
    const points = values.map(Number);
    for (let index = 0; index < points.length; index += 2) {
      assert(points[index] >= bounds.minX && points[index] <= bounds.maxX && points[index + 1] >= bounds.minY && points[index + 1] <= bounds.maxY, 'SVG path control point extends beyond viewBox.');
    }
    geometryCount += 1;
  } else if (tag.local === 'text') {
    const x = svgNumber(tag, 'x'); const y = svgNumber(tag, 'y');
    assert(x >= bounds.minX && x <= bounds.maxX && y >= bounds.minY && y <= bounds.maxY, 'SVG text anchor extends beyond viewBox.');
  } else {
    assert(['svg', 'title', 'desc', 'defs', 'linearGradient', 'stop', 'style', 'g'].includes(tag.local), `SVG contains unreviewed element ${tag.local}.`);
  }
}
assert(geometryCount >= 10, 'SVG requires bounded corridor and decision geometry.');
const legendRows = textRows.filter((row) => ['en', 'zh-Hant', 'ja', 'ko', 'th'].includes(row.lang));
assert.deepEqual(legendRows.map((row) => row.lang).sort(), ['en', 'ja', 'ko', 'th', 'zh-Hant'].sort(), 'SVG legend must include exactly one row in each of five locales.');
for (const [lang, term] of [['en', 'Solid: rail corridor'], ['zh-Hant', '實線'], ['ja', '実線'], ['ko', '실선'], ['th', 'เส้นทึบ']]) {
  assert(legendRows.find((row) => row.lang === lang)?.text.includes(term), `SVG ${lang} legend text is missing.`);
}
const svgCopy = svg.toLowerCase();
assert(svgCopy.includes('not a map or timetable') && svgCopy.includes('not to geographic scale'), 'SVG must clearly state the diagram limits.');

const dataModule = await import('../data/australia-blue-mountains-diagram.mjs');
const diagram = dataModule.australiaBlueMountainsDiagram;
assert.equal(diagram.src, svgPath);
assert.equal(diagram.license, null, 'The original diagram must not claim a public reuse license.');
assert.equal(diagram.rightsStatus, 'Project original; no separate reuse license declared');
assert.equal(diagram.commercialReuseEligibility, 'unknown');
assert.equal(diagram.localSha1, crypto.createHash('sha1').update(fs.readFileSync(svgFile)).digest('hex'));
const hubHtml = fs.readFileSync(fileFor(routes[0]), 'utf8');
const hubDocument = parse(hubHtml);
const schematicImage = findOne(hubDocument, (node) => node.tagName === 'img' && attrs(node).src === svgPath);
assert(schematicImage && /not.to.scale/i.test(attrs(schematicImage).alt), 'Hub image needs a descriptive not-to-scale alt.');
assert(hubHtml.includes(`href="${diagram.source}"`) && hubHtml.includes(`href="${diagram.rightsStatusUrl}"`) && hubHtml.includes('Project original; no separate reuse license declared'), 'Hub must visibly credit the original and its rights status.');

const imageManifest = (await import('../data/australia-image-manifest.mjs')).australiaImageManifest;
const photoChecks = [
  { slug: 'katoomba-echo-point', source: 'https://commons.wikimedia.org/wiki/File:Three_Sisters,_Blue_Mountains_(1).jpg', creator: 'Alicia Brogan ( Ali b at English Wikipedia )', license: 'CC BY-SA 3.0' },
  { slug: 'wentworth-falls-tableland', source: 'https://commons.wikimedia.org/wiki/File:Wentworth_Falls_from_Princes_Rock.jpg', creator: 'Lschoen', license: 'CC BY-SA 4.0' },
  { slug: 'blackheath-grose-valley', source: 'https://commons.wikimedia.org/wiki/File:Govetts_Leap_-_Blue_Mountains_-_panoramio.jpg', creator: 'Pavel Špindler', license: 'CC BY 3.0' }
];
for (const photo of photoChecks) {
  const guide = imageManifest[`blue-mountains-nsw-coast/${photo.slug}`];
  const bytes = fs.readFileSync(path.join(root, guide.src.slice(1)));
  const baselineBytes = git(['show', `${base}:${guide.src.slice(1)}`], true);
  assert.equal(sha256(bytes), sha256(baselineBytes), `${photo.slug}: existing photo bytes were changed.`);
  assert.equal(guide.source, photo.source, `${photo.slug}: exact image source page.`);
  const route = `${routes[0]}${photo.slug}/`;
  const html = fs.readFileSync(fileFor(route), 'utf8');
  assert(html.includes(photo.source) && html.includes(photo.creator) && html.includes(photo.license), `${photo.slug}: visible source, creator and declared license are separate from subject review.`);
}

for (const preserved of [
  'assets/images/tripdistill-brisbane-bay-crossings.svg',
  'australia/brisbane-moreton-bay/index.html',
  'australia/brisbane-moreton-bay/city-river-south-bank/index.html',
  'australia/brisbane-moreton-bay/minjerribah-north-stradbroke/index.html',
  'australia/brisbane-moreton-bay/mulgumpin-moreton-island/index.html'
]) {
  const baseline = git(['show', `${base}:${preserved}`], true);
  const current = fs.readFileSync(path.join(root, preserved));
  assert.equal(sha256(current), sha256(baseline), `${preserved}: parallel Brisbane source/image fix must be preserved byte-for-byte.`);
}

console.log('Blue Mountains Australia regression passed: four existing substantive route bodies, 20 dated editions, exact search/sitemap scope, four reviewed locale deltas, SVG XML/five-language legend/bounds/provenance, separate photo subject/license records, and byte-identical Brisbane assets/pages.');
