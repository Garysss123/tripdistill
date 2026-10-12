#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { parse } from 'parse5';
import { SaxesParser } from 'saxes';

const root = path.resolve(import.meta.dirname, '..');
const base = 'b1844b4507a3912925df4dbcf22d1ef23cb9ea7c';
const routes = [
  '/australia/brisbane-moreton-bay/',
  '/australia/brisbane-moreton-bay/city-river-south-bank/',
  '/australia/brisbane-moreton-bay/minjerribah-north-stradbroke/',
  '/australia/brisbane-moreton-bay/mulgumpin-moreton-island/'
];
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
const isoDate = '2026-10-12';
const svgPath = '/assets/images/tripdistill-brisbane-bay-crossings.svg';
const issues = [];

function git(args, binary = false) {
  return execFileSync('git', args, { cwd: root, encoding: binary ? undefined : 'utf8', maxBuffer: 32 * 1024 * 1024 });
}

function assertIssue(ok, message) {
  if (!ok) issues.push(message);
}

function routeFile(route, prefix = '') {
  return path.join(root, `${prefix}${route}`.replace(/^\//, ''), 'index.html');
}

function findNode(node, predicate) {
  if (predicate(node)) return node;
  for (const child of node.childNodes || []) {
    const result = findNode(child, predicate);
    if (result) return result;
  }
  return null;
}

function findAll(node, predicate, results = []) {
  if (predicate(node)) results.push(node);
  for (const child of node.childNodes || []) findAll(child, predicate, results);
  return results;
}

function attrs(node) {
  return Object.fromEntries((node.attrs || []).map(({ name, value }) => [name, value]));
}

function textContent(node) {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value;
  if (['script', 'style', 'svg'].includes(node.tagName)) return '';
  return (node.childNodes || []).map(textContent).join(' ');
}

function editorialText(html) {
  const doc = parse(html);
  const main = findNode(doc, (node) => node.tagName === 'main' && attrs(node).id === 'main-content');
  assert(main, 'HTML is missing #main-content.');
  const parts = [];
  function walk(node) {
    if (node.nodeName === '#text') {
      parts.push(node.value);
      return;
    }
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

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function sitemapEntries(xml) {
  const entries = [];
  let current = null;
  let activeTag = '';
  const parser = new SaxesParser({ xmlns: true });
  parser.on('opentag', (tag) => {
    activeTag = tag.local;
    if (tag.local === 'url') current = {};
  });
  parser.on('text', (value) => {
    if (!current) return;
    if (activeTag === 'loc') current.loc = (current.loc || '') + value;
    if (activeTag === 'lastmod') current.lastmod = (current.lastmod || '') + value;
  });
  parser.on('closetag', (tag) => {
    if (tag.local === 'url') {
      entries.push(current);
      current = null;
    }
    activeTag = '';
  });
  parser.write(xml).close();
  assert.equal(entries.length, new Set(entries.map(({ loc }) => loc)).size, 'Sitemap URLs must be unique.');
  return new Map(entries.map(({ loc, lastmod }) => [new URL(loc).pathname, lastmod]));
}

function parseXml(xml) {
  const tags = [];
  let text = '';
  const parser = new SaxesParser({ xmlns: true });
  parser.on('opentag', (tag) => tags.push(tag));
  parser.on('text', (value) => { text += ` ${value}`; });
  parser.write(xml).close();
  assert.equal(tags[0]?.local, 'svg', 'SVG must have one well-formed svg root.');
  return { tags, text };
}

function numberAttribute(tag, name, fallback = 0) {
  const value = tag.attributes[name]?.value;
  return value === undefined ? fallback : Number(value);
}

function pathBounds(data) {
  const tokens = data.match(/[A-Za-z]|[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g) || [];
  const points = [];
  let index = 0;
  let command = '';
  const read = () => {
    const token = tokens[index++];
    assert(token !== undefined && !/^[A-Za-z]$/.test(token), `Malformed SVG path: ${data}`);
    const value = Number(token);
    assert(Number.isFinite(value), `Non-finite SVG coordinate in path: ${data}`);
    return value;
  };
  while (index < tokens.length) {
    if (/^[A-Za-z]$/.test(tokens[index])) command = tokens[index++];
    assert(command && ['M', 'L'].includes(command), `Unsupported SVG path command ${command}.`);
    const x = read();
    const y = read();
    points.push([x, y]);
    if (command === 'M') command = 'L';
  }
  assert(points.length > 0, 'SVG path has no coordinates.');
  return {
    minX: Math.min(...points.map(([x]) => x)), maxX: Math.max(...points.map(([x]) => x)),
    minY: Math.min(...points.map(([, y]) => y)), maxY: Math.max(...points.map(([, y]) => y))
  };
}

function articleAndFaq(html) {
  const doc = parse(html);
  const scripts = findAll(doc, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json');
  let graph = null;
  for (const script of scripts) {
    try { graph = JSON.parse((script.childNodes || []).map((node) => node.value || '').join('')); break; } catch { /* inspect the next JSON-LD block */ }
  }
  const article = graph?.['@graph']?.find((item) => item['@type'] === 'Article');
  const faq = graph?.['@graph']?.find((item) => item['@type'] === 'FAQPage');
  const visibleFaq = findAll(doc, (node) => node.tagName === 'details').map((details) => {
    const summary = findNode(details, (node) => node.tagName === 'summary');
    const answer = findNode(details, (node) => node.tagName === 'div' && attrs(node).class === 'faq-answer');
    return {
      question: textContent(summary).replace(/\s+/g, ' ').trim(),
      answer: textContent(answer).replace(/\s+/g, ' ').trim()
    };
  });
  return { article, faq, visibleFaq };
}

const expectedEnglishHtml = routes.map((route) => `${route.slice(1)}index.html`).sort();
const changedEnglishHtml = git(['diff', '--name-only', base, '--', 'australia']).split(/\r?\n/).filter((name) => name.endsWith('.html')).sort();
assertIssue(changedEnglishHtml.join('|') === expectedEnglishHtml.join('|'), `English HTML diff must be exactly the four selected routes; found ${changedEnglishHtml.join(', ')}.`);

const expectedScripts = {
  'zh-Hant': /[\u3400-\u9fff]/u,
  ja: /[\u3040-\u30ff\u3400-\u9fff]/u,
  ko: /[\uac00-\ud7af]/u,
  th: /[\u0e00-\u0e7f]/u
};
const expectedReviewDate = {
  'zh-Hant': '2026 年 10 月 12 日',
  ja: '2026年10月12日',
  ko: '2026년 10월 12일',
  th: '12 ตุลาคม 2026'
};

for (const route of routes) {
  const englishFile = routeFile(route);
  assertIssue(fs.existsSync(englishFile), `Missing English page ${route}.`);
  if (!fs.existsSync(englishFile)) continue;
  const html = fs.readFileSync(englishFile, 'utf8');
  const doc = parse(html);
  const htmlNode = findNode(doc, (node) => node.tagName === 'html');
  assertIssue(attrs(htmlNode).lang === 'en', `${route}: English lang attribute is not set.`);
  const canonical = findNode(doc, (node) => node.tagName === 'link' && attrs(node).rel === 'canonical');
  assertIssue(attrs(canonical).href === `https://tripdistill.com${route}`, `${route}: canonical URL changed.`);
  const { article, faq, visibleFaq } = articleAndFaq(html);
  assertIssue(article?.dateModified === isoDate, `${route}: Article dateModified is not ${isoDate}.`);
  assertIssue(article?.mainEntityOfPage === `https://tripdistill.com${route}`, `${route}: structured Article URL changed.`);
  const structuredFaq = (faq?.mainEntity || []).map((item) => ({ question: item.name, answer: item.acceptedAnswer?.text }));
  assertIssue(structuredFaq.length === visibleFaq.length && JSON.stringify(structuredFaq) === JSON.stringify(visibleFaq), `${route}: visible FAQ and structured FAQ do not match.`);
  assertIssue(html.includes('reviewed 12 October 2026') && html.includes('Route and access facts were checked on 12 October 2026'), `${route}: visible route/source review date is missing.`);

  const baseline = git(['show', `${base}:${route.slice(1)}index.html`]);
  const delta = wordCount(editorialText(html)) - wordCount(editorialText(baseline));
  const minDelta = route === routes[0] ? 180 : 350;
  assertIssue(delta >= minDelta, `${route}: body text grew by only ${delta} words after excluding cards and citations; expected at least ${minDelta}.`);

  for (const [locale, prefix] of locales.slice(1)) {
    const file = routeFile(route, prefix);
    assertIssue(fs.existsSync(file), `${locale}: missing translated page ${prefix}${route}.`);
    if (!fs.existsSync(file)) continue;
    const localized = fs.readFileSync(file, 'utf8');
    const localizedDoc = parse(localized);
    const localizedHtml = findNode(localizedDoc, (node) => node.tagName === 'html');
    assertIssue(attrs(localizedHtml).lang === locale, `${locale}: lang attribute is wrong on ${route}.`);
    assertIssue(localized.includes(expectedReviewDate[locale]), `${locale}: localized review date is missing on ${route}.`);
    const main = findNode(localizedDoc, (node) => node.tagName === 'main' && attrs(node).id === 'main-content');
    const heading = findNode(main, (node) => /^h1$/.test(node.tagName));
    const headingText = textContent(heading).replace(/\s+/g, ' ').trim();
    assertIssue(headingText && expectedScripts[locale].test(headingText), `${locale}: translated h1 is missing the locale's script on ${route}.`);
    const localSchema = articleAndFaq(localized);
    assertIssue(localSchema.article?.dateModified === isoDate, `${locale}: Article dateModified is not synchronized for ${route}.`);
    const localFaq = (localSchema.faq?.mainEntity || []).map((item) => ({ question: item.name, answer: item.acceptedAnswer?.text }));
    assertIssue(localFaq.length === localSchema.visibleFaq.length && JSON.stringify(localFaq) === JSON.stringify(localSchema.visibleFaq), `${locale}: visible and structured FAQs differ on ${route}.`);
  }
}

const oldSearch = JSON.parse(git(['show', `${base}:data/search-index.json`]));
const newSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const oldSearchByUrl = new Map(oldSearch.map((record) => [record.url, record]));
const newSearchByUrl = new Map(newSearch.map((record) => [record.url, record]));
assertIssue(oldSearchByUrl.size === newSearchByUrl.size && [...oldSearchByUrl.keys()].sort().join('|') === [...newSearchByUrl.keys()].sort().join('|'), 'Search-index URL set or count changed.');
const changedSearch = [...newSearchByUrl.keys()].filter((url) => JSON.stringify(newSearchByUrl.get(url)) !== JSON.stringify(oldSearchByUrl.get(url))).sort();
assertIssue(changedSearch.join('|') === [...routes].sort().join('|'), `Exactly the four selected search records must change; found ${changedSearch.join(', ')}.`);
for (const route of routes) {
  const record = newSearchByUrl.get(route);
  assertIssue(Boolean(record?.summary?.trim()), `${route}: search summary is missing.`);
  const html = fs.readFileSync(routeFile(route), 'utf8');
  assertIssue(record?.summary && html.includes(record.summary), `${route}: search summary does not match the visible/metadata page copy.`);
}

for (const locale of ['zh-Hant', 'ja', 'ko', 'th']) {
  const pageBatch = JSON.parse(fs.readFileSync(path.join(root, `data/i18n/reviewed/${locale}/zzzzzc-australia-brisbane-pages-20261012.json`), 'utf8'));
  assertIssue(pageBatch.qualityStatus === 'reviewed' && pageBatch.routes.join('|') === routes.join('|'), `${locale}: page batch review status or route scope is wrong.`);
  assertIssue(Object.keys(pageBatch.translations).length === 198 && Object.values(pageBatch.translations).every((value) => typeof value === 'string' && value.trim()), `${locale}: all 198 page strings (including retained existing hub-card translations) must be translated.`);
  assertIssue(!fs.existsSync(path.join(root, `data/i18n/reviewed/${locale}/zzzzzd-australia-brisbane-search-20261012.json`)), `${locale}: duplicate search batch should not shadow the same four page-summary keys.`);
}

const svg = fs.readFileSync(path.join(root, svgPath.slice(1)), 'utf8');
assertIssue(!/<script\b|\son[a-z]+\s*=|<foreignObject\b|\s(?:href|xlink:href)\s*=\s*["']https?:\/\//i.test(svg), 'Original SVG must not contain scripts, event handlers, foreign objects or external references.');
const { tags: svgTags, text: svgText } = parseXml(svg);
const svgRoot = svgTags[0];
assertIssue(svgRoot.attributes.width?.value === '1600' && svgRoot.attributes.height?.value === '1200' && svgRoot.attributes.viewBox?.value === '0 0 1600 1200', 'SVG size and viewBox must remain 1600×1200.');
const bounds = { x: 0, y: 0, width: 1600, height: 1200 };
let geometryCount = 0;
for (const tag of svgTags) {
  const name = tag.local;
  if (name === 'rect') {
    const x = numberAttribute(tag, 'x'); const y = numberAttribute(tag, 'y');
    const width = numberAttribute(tag, 'width'); const height = numberAttribute(tag, 'height');
    assertIssue(x >= 0 && y >= 0 && x + width <= bounds.width && y + height <= bounds.height, 'An SVG rectangle falls outside the viewBox.');
    geometryCount += 1;
  } else if (name === 'line') {
    for (const axis of ['x1', 'x2']) assertIssue(numberAttribute(tag, axis) >= 0 && numberAttribute(tag, axis) <= bounds.width, 'An SVG line x-coordinate falls outside the viewBox.');
    for (const axis of ['y1', 'y2']) assertIssue(numberAttribute(tag, axis) >= 0 && numberAttribute(tag, axis) <= bounds.height, 'An SVG line y-coordinate falls outside the viewBox.');
    geometryCount += 1;
  } else if (name === 'path') {
    const box = pathBounds(tag.attributes.d?.value || '');
    assertIssue(box.minX >= bounds.x && box.minY >= bounds.y && box.maxX <= bounds.width && box.maxY <= bounds.height, 'An SVG path coordinate falls outside the viewBox.');
    geometryCount += 1;
  } else if (name === 'text') {
    const x = numberAttribute(tag, 'x'); const y = numberAttribute(tag, 'y');
    assertIssue(x >= bounds.x && x <= bounds.width && y >= bounds.y && y <= bounds.height, 'An SVG text anchor falls outside the viewBox.');
  } else if (!['svg', 'title', 'desc', 'style'].includes(name)) {
    assertIssue(false, `SVG contains unreviewed geometry element ${name}.`);
  }
}
assertIssue(geometryCount >= 24, `SVG geometry regression found only ${geometryCount} bounded shapes.`);
for (const term of [
  'KEY · not to scale', '非按比例', '縮尺なし', '축척 아님', 'ไม่ได้มาตราส่วน',
  '繁中 —', '日本語 —', '한국어 —', 'ไทย —',
  'No island-to-island service, bearing, distance or departure time is implied.'
]) assertIssue(svgText.includes(term), `SVG is missing legend or scope term “${term}”.`);
assertIssue(svg.includes('schematic only') && svg.includes('no timetable or distance claim'), 'SVG must identify itself as schematic and make no timetable or distance claim.');

const hubHtml = fs.readFileSync(routeFile(routes[0]), 'utf8');
const hubDoc = parse(hubHtml);
const image = findNode(hubDoc, (node) => node.tagName === 'img' && attrs(node).src === svgPath);
assertIssue(Boolean(image && /not.to.scale/i.test(attrs(image).alt)), 'Hub schematic must have its own descriptive not-to-scale alt text.');
assertIssue(hubHtml.includes(`href="${svgPath}"`) && hubHtml.includes('href="/terms-of-use/"') && hubHtml.includes('No separate reuse license is declared; reuse rights have not been cleared.'), 'Hub source note must link the original, Terms of Use, and state that reuse rights are not cleared.');

const baseSitemap = sitemapEntries(git(['show', `${base}:sitemap.xml`]));
const currentSitemap = sitemapEntries(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assertIssue([...baseSitemap.keys()].sort().join('|') === [...currentSitemap.keys()].sort().join('|'), 'Sitemap URL set changed; this task must not add or remove routes.');
const expectedSitemapRoutes = routes.flatMap((route) => locales.map(([, prefix]) => `${prefix}${route}`)).sort();
const changedLastmod = [...new Set([...baseSitemap.keys(), ...currentSitemap.keys()])].filter((route) => baseSitemap.get(route) !== currentSitemap.get(route)).sort();
assertIssue(changedLastmod.join('|') === expectedSitemapRoutes.join('|'), `Exactly the 20 selected route/language lastmod values must change; found ${changedLastmod.length}.`);
for (const route of expectedSitemapRoutes) assertIssue(currentSitemap.get(route) === isoDate, `${route}: sitemap lastmod is not ${isoDate}.`);

if (issues.length) {
  console.error('Brisbane Australia refresh regression failed:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log('Brisbane refresh regression passed: four existing route bodies, all five editions, FAQ/schema/date parity, exact search and sitemap scope, reviewed translation coverage, and original SVG XML/legend/geometry/provenance checks.');
}
