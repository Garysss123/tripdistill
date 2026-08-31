import fs from 'node:fs';
import path from 'node:path';
import { vietnamClusters, vietnamGuides } from '../data/vietnam-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const problems = [];
const metaDescriptions = new Map();
const expectedCss = '/css/vietnam.css?v=20260831-2';
const expectedFieldCss = '/css/vietnam-field.css?v=20260831-1';
const expectedScript = '/js/main.js?v=20260831-1';
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];

function routeFile(route) {
  return path.join(root, route.replace(/^\//, ''), 'index.html');
}

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}="([^"]*)"`, 'i'))?.[1] || '';
}

function internalTargets(html) {
  return [...html.matchAll(/\b(?:href|src)="(\/[^"?#]*)/gi)].map((match) => match[1]);
}

function localTarget(reference) {
  if (reference.startsWith('/assets/') || reference.startsWith('/css/') || reference.startsWith('/js/') || reference.startsWith('/components/') || reference.startsWith('/data/') || reference.startsWith('/favicon.')) {
    return path.join(root, reference.replace(/^\//, ''));
  }
  return reference.endsWith('/') ? routeFile(reference) : path.join(root, reference.replace(/^\//, ''));
}

function checkImageCredit(html, image, route) {
  for (const required of [image.src, image.source, image.creator, image.license, image.editNote]) {
    const escaped = String(required).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
    if (!html.includes(required) && !html.includes(escaped)) problems.push(`${route}: visible image attribution is missing ${required}`);
  }
}

function visibleWordCount(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

const routes = [
  { route: '/vietnam/', kind: 'country' },
  ...vietnamClusters.map((cluster) => ({ route: `/vietnam/${cluster.slug}/`, kind: 'hub', cluster })),
  ...vietnamGuides.map((guide) => ({ route: guide.url, kind: 'guide', guide }))
];

function editorialTokens(guide) {
  return new Set(`${guide.lead} ${guide.orientation} ${guide.sequence}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter((token) => token.length > 3));
}

function jaccard(left, right) {
  let overlap = 0;
  for (const token of left) if (right.has(token)) overlap += 1;
  return overlap / (left.size + right.size - overlap);
}

if (vietnamClusters.length !== 14) problems.push(`Expected 14 Vietnam hubs, found ${vietnamClusters.length}`);
if (vietnamGuides.length !== 84) problems.push(`Expected 84 Vietnam guides, found ${vietnamGuides.length}`);
if (new Set(vietnamClusters.map((cluster) => cluster.family)).size !== 14) problems.push('Vietnam hubs do not have fourteen distinct visual families');
if (new Set(vietnamGuides.map((guide) => guide.instrument)).size < 17) problems.push('Vietnam guides use fewer than seventeen layout instruments');
if (new Set(vietnamGuides.map((guide) => guide.image.src)).size !== 84) problems.push('Vietnam guides do not have 84 unique image files');
const retiredSourceHosts = new Set(['tuyengiao.hagiang.gov.vn', 'visithcmc.net', 'quangbinhtourism.gov.vn', 'svhttdl.binhthuan.gov.vn', 'dongthaptourism.com.vn']);
for (const cluster of vietnamClusters) {
  if (cluster.sources.length < 3) problems.push(`${cluster.slug}: fewer than three official planning sources`);
  if (new Set(cluster.sources.map(([url]) => url)).size !== cluster.sources.length) problems.push(`${cluster.slug}: duplicate official source URL`);
  for (const [url] of cluster.sources) {
    if (retiredSourceHosts.has(new URL(url).hostname)) problems.push(`${cluster.slug}: retired or TLS-invalid source host ${new URL(url).hostname}`);
  }
}
for (const field of ['name', 'summary', 'lead', 'orientation', 'arrival', 'sequence', 'boundary', 'duration', 'combine', 'verify']) {
  if (new Set(vietnamGuides.map((guide) => guide[field])).size !== vietnamGuides.length) problems.push(`Vietnam guide field ${field} contains exact duplicate copy`);
}
const guideTokenSets = vietnamGuides.map(editorialTokens);
for (let left = 0; left < vietnamGuides.length; left += 1) {
  for (let right = left + 1; right < vietnamGuides.length; right += 1) {
    const similarity = jaccard(guideTokenSets[left], guideTokenSets[right]);
    if (similarity >= 0.35) problems.push(`${vietnamGuides[left].url} and ${vietnamGuides[right].url}: overly similar editorial core (${similarity.toFixed(3)})`);
  }
}

for (const guide of vietnamGuides) {
  if (!/^(?:CC0|Public domain|CC BY(?:-SA)?)(?:\s|$)/i.test(guide.image.license)) problems.push(`${guide.url}: unsupported image license ${guide.image.license}`);
  const imagePath = path.join(root, guide.image.src.replace(/^\//, ''));
  if (!fs.existsSync(imagePath)) problems.push(`${guide.url}: missing image ${guide.image.src}`);
}

for (const record of routes) {
  const file = routeFile(record.route);
  if (!fs.existsSync(file)) {
    problems.push(`${record.route}: missing page`);
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const descriptionTag = html.match(/<meta\b[^>]*\bname="description"[^>]*>/i)?.[0] || '';
  const description = attribute(descriptionTag, 'content');
  if ([...description].length < 120 || [...description].length > 170) problems.push(`${record.route}: meta description length ${[...description].length}`);
  if (metaDescriptions.has(description)) problems.push(`${record.route}: duplicate meta description also used by ${metaDescriptions.get(description)}`);
  else metaDescriptions.set(description, record.route);
  const wordCount = visibleWordCount(html);
  if (wordCount < 600) problems.push(`${record.route}: only ${wordCount} visible English words`);
  if ((html.match(/<h1\b/gi) || []).length !== 1) problems.push(`${record.route}: expected one h1`);
  for (const imageTag of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt="[^"]+"/i.test(imageTag[0])) problems.push(`${record.route}: image is missing meaningful alt text`);
  }
  for (const externalLink of html.matchAll(/<a\b[^>]*\bhref="https?:\/\/[^">]+"[^>]*>/gi)) {
    if (!/\btarget="_blank"/i.test(externalLink[0]) || !/\brel="[^"]*noopener[^"]*"/i.test(externalLink[0])) problems.push(`${record.route}: external source link is missing safe new-tab attributes`);
  }
  if (!html.includes(expectedCss)) problems.push(`${record.route}: missing Vietnam stylesheet`);
  if (!html.includes(expectedScript)) problems.push(`${record.route}: missing current main script`);
  if (!html.includes('"@type":"Article"')) problems.push(`${record.route}: missing valid Article JSON-LD`);
  if (html.includes('"@type":"TravelGuide"')) problems.push(`${record.route}: uses unregistered TravelGuide JSON-LD type`);
  if (!html.includes('data-adsense-client="ca-pub-1732059148394592"')) problems.push(`${record.route}: missing AdSense publisher`);
  if (!html.includes('31 August 2026')) problems.push(`${record.route}: missing editorial review date`);
  if (!html.includes(`<link rel="canonical" href="https://tripdistill.com${record.route}">`)) problems.push(`${record.route}: invalid canonical`);
  for (const [locale, prefix] of locales) {
    if (!html.includes(`hreflang="${locale}" href="https://tripdistill.com${prefix}${record.route}"`)) problems.push(`${record.route}: missing ${locale} hreflang`);
  }
  if (!html.includes(`hreflang="x-default" href="https://tripdistill.com${record.route}"`)) problems.push(`${record.route}: missing x-default hreflang`);
  if (record.kind !== 'country' && !html.includes(expectedFieldCss)) problems.push(`${record.route}: missing Vietnam field stylesheet`);
  if (record.kind === 'country' && (html.match(/class="vn-country-card"/g) || []).length !== 14) problems.push(`${record.route}: expected fourteen country cards`);
  if (record.kind === 'country') {
    for (const cluster of vietnamClusters) checkImageCredit(html, cluster.guides[0].image, record.route);
  }
  if (record.kind === 'hub') {
    if ((html.match(/class="vn-hub-card"/g) || []).length !== 6) problems.push(`${record.route}: expected six hub cards`);
    for (const guide of record.cluster.guides) checkImageCredit(html, guide.image, record.route);
  }
  if (record.kind === 'guide') {
    const cluster = vietnamClusters.find((item) => item.slug === record.guide.hubSlug);
    for (const sibling of cluster.guides) checkImageCredit(html, sibling.image, record.route);
    if ((html.match(/class="vn-route-step"/g) || []).length !== 4) problems.push(`${record.route}: expected four route stages`);
    if ((html.match(/class="vn-check"/g) || []).length !== 3) problems.push(`${record.route}: expected three checks`);
    if ((html.match(/class="vn-related-card"/g) || []).length !== 5) problems.push(`${record.route}: expected five sibling links`);
    if (!html.includes(`data-vn-family="${record.guide.family}"`)) problems.push(`${record.route}: missing family marker`);
    if (!html.includes(`data-vn-instrument="${record.guide.instrument}"`)) problems.push(`${record.route}: missing instrument marker`);
  }
  for (const reference of internalTargets(html)) {
    const target = localTarget(reference);
    if (!fs.existsSync(target)) problems.push(`${record.route}: missing internal target ${reference}`);
  }
}

for (const [file, marker] of [
  ['index.html', 'href="/vietnam/"'],
  ['about/index.html', 'Vietnam, Malaysia, China'],
  ['components/header.html', 'data-nav-key="vietnam"'],
  ['components/sidebar.html', 'VIETNAM_CHAPTERS_START'],
  ['components/footer.html', 'href="/vietnam/"']
]) {
  if (!fs.readFileSync(path.join(root, file), 'utf8').includes(marker)) problems.push(`${file}: missing Vietnam shell integration`);
}

const search = JSON.parse(fs.readFileSync(path.join(root, 'data', 'search-index.json'), 'utf8'));
const vietnamSearch = search.filter((item) => item.url.startsWith('/vietnam/'));
if (vietnamSearch.length !== 99) problems.push(`Expected 99 Vietnam search records, found ${vietnamSearch.length}`);
if (new Set(vietnamSearch.map((item) => item.url)).size !== vietnamSearch.length) problems.push('Vietnam search records contain duplicate URLs');

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
for (const record of routes) {
  for (const [, prefix] of locales) {
    if (!sitemap.includes(`<loc>https://tripdistill.com${prefix}${record.route}</loc><lastmod>2026-08-31</lastmod>`)) problems.push(`${record.route}: missing ${prefix || 'English'} sitemap record`);
  }
}

if (problems.length) {
  console.error(`Vietnam audit failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(`- ${problem}`);
  process.exitCode = 1;
} else {
  console.log(`Vietnam audit passed: ${vietnamClusters.length} hubs, ${vietnamGuides.length} child guides, ${routes.length} English routes, ${routes.length * locales.length} localized sitemap URLs, ${vietnamSearch.length} search records.`);
}
