import fs from 'node:fs';
import path from 'node:path';
import { allLocales, localeConfigs } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const problems = [];
const notes = [];
const siteCssVersion = '/css/site.css?v=20260827-2';
const mainJsVersion = '/js/main.js?v=20260827-2';
const adsenseJsVersion = '/js/adsense.js?v=20260826-9';

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function routeToFile(route) {
  const pathname = decodeURIComponent(route.split(/[?#]/, 1)[0]);
  if (pathname === '/') return 'index.html';
  const clean = pathname.replace(/^\//, '');
  return clean.endsWith('/') ? path.join(clean, 'index.html') : clean;
}

function textContent(value = '') {
  return value
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function getAttribute(tag, name) {
  return tag.match(new RegExp('\\b' + name + '="([^"]*)"', 'i'))?.[1] || '';
}

function linkHref(html, rel, hreflang = '') {
  for (const match of html.matchAll(/<link\b[^>]*>/gi)) {
    if (getAttribute(match[0], 'rel') !== rel) continue;
    if (hreflang && getAttribute(match[0], 'hreflang') !== hreflang) continue;
    if (!hreflang && getAttribute(match[0], 'hreflang')) continue;
    return getAttribute(match[0], 'href');
  }
  return '';
}

function localeFromRoute(route) {
  return localeConfigs.find((locale) => route === locale.prefix + '/' || route.startsWith(locale.prefix + '/')) || allLocales[0];
}

function englishRoute(route) {
  const locale = localeFromRoute(route);
  if (!locale.prefix) return route;
  const stripped = route.slice(locale.prefix.length);
  return stripped || '/';
}

function localizedRoute(baseRoute, locale) {
  return locale.prefix ? (baseRoute === '/' ? locale.prefix + '/' : locale.prefix + baseRoute) : baseRoute;
}

function localeUrl(baseRoute, locale) {
  return 'https://tripdistill.com' + localizedRoute(baseRoute, locale);
}

function descriptionLength(value, locale) {
  const decoded = textContent(value);
  return locale.code === 'en' ? [...decoded].length : [...decoded.replace(/\s+/g, '')].length;
}

function validLocalizedDescription(description, locale) {
  const length = descriptionLength(description, locale);
  if (locale.code === 'zh-Hant') return length >= 35 && length <= 140 && /[\u3400-\u9fff]/u.test(description);
  if (locale.code === 'ja') return length >= 45 && length <= 180 && /[\u3040-\u30ff\u3400-\u9fff]/u.test(description);
  if (locale.code === 'ko') return length >= 45 && length <= 190 && /[\uac00-\ud7af]/u.test(description);
  if (locale.code === 'th') return length >= 60 && length <= 260 && /[\u0e00-\u0e7f]/u.test(description);
  return length >= 120 && length <= 170;
}

const sitemap = read('sitemap.xml');
const sitemapEntries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => {
  const entry = match[1];
  return {
    loc: entry.match(/<loc>(.*?)<\/loc>/)?.[1] || '',
    lastmod: entry.match(/<lastmod>(.*?)<\/lastmod>/)?.[1] || ''
  };
});
const publishedUrls = sitemapEntries.map((entry) => entry.loc);
const publishedRoutes = publishedUrls.map((absoluteUrl) => new URL(absoluteUrl).pathname);
const routeSet = new Set(publishedRoutes);
const routesByLocale = Object.fromEntries(allLocales.map((locale) => [locale.code, publishedRoutes.filter((route) => localeFromRoute(route).code === locale.code)]));
const englishRoutes = routesByLocale.en;
const titles = Object.fromEntries(allLocales.map((locale) => [locale.code, new Map()]));
const canonicals = new Set();

if (publishedUrls.length !== routeSet.size) problems.push('sitemap.xml contains duplicate routes');
for (const { loc, lastmod } of sitemapEntries) {
  if (!loc.startsWith('https://tripdistill.com/')) problems.push(`sitemap.xml: unsupported URL ${loc}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(lastmod) || Number.isNaN(Date.parse(`${lastmod}T00:00:00Z`))) {
    problems.push(`sitemap.xml: ${loc} has missing or invalid lastmod "${lastmod}"`);
  }
}

for (const route of englishRoutes) {
  for (const locale of localeConfigs) {
    const counterpart = localizedRoute(route, locale);
    if (!routeSet.has(counterpart)) problems.push(`${route}: missing ${locale.code} sitemap counterpart ${counterpart}`);
  }
}
for (const locale of localeConfigs) {
  for (const route of routesByLocale[locale.code]) {
    const baseRoute = englishRoute(route);
    if (!routeSet.has(baseRoute)) problems.push(`${route}: missing English sitemap counterpart ${baseRoute}`);
  }
  if (routesByLocale[locale.code].length !== englishRoutes.length) {
    problems.push(`Sitemap parity failed: ${englishRoutes.length} en versus ${routesByLocale[locale.code].length} ${locale.code} routes`);
  }
}

for (const absoluteUrl of publishedUrls) {
  const route = new URL(absoluteUrl).pathname;
  const locale = localeFromRoute(route);
  const baseRoute = englishRoute(route);
  const relativePath = routeToFile(route);
  const fullPath = path.join(root, relativePath);
  if (!fs.existsSync(fullPath)) {
    problems.push(`${absoluteUrl}: sitemap target is missing (${relativePath})`);
    continue;
  }

  const html = fs.readFileSync(fullPath, 'utf8');
  const title = textContent(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]);
  const descriptionTag = html.match(/<meta\b[^>]*\bname="description"[^>]*>/i)?.[0] || '';
  const description = getAttribute(descriptionTag, 'content');
  const canonical = linkHref(html, 'canonical');
  const htmlLanguage = html.match(/<html\b[^>]*\blang="([^"]+)"/i)?.[1] || '';
  const h1Count = (html.match(/<h1\b/gi) || []).length;

  if (htmlLanguage !== locale.code) problems.push(`${relativePath}: html lang is "${htmlLanguage}", expected "${locale.code}"`);
  if (!title) problems.push(`${relativePath}: missing title`);
  else if (titles[locale.code].has(title)) problems.push(`${relativePath}: duplicate ${locale.code} title also used by ${titles[locale.code].get(title)}`);
  else titles[locale.code].set(title, relativePath);
  if (!validLocalizedDescription(description, locale)) {
    problems.push(`${relativePath}: ${locale.code} meta description has invalid length or script (${descriptionLength(description, locale)} characters)`);
  }
  if (canonical !== absoluteUrl) problems.push(`${relativePath}: canonical is "${canonical}", expected "${absoluteUrl}"`);
  if (canonicals.has(canonical)) problems.push(`${relativePath}: duplicate canonical ${canonical}`);
  canonicals.add(canonical);
  for (const targetLocale of allLocales) {
    const expected = localeUrl(baseRoute, targetLocale);
    const actual = linkHref(html, 'alternate', targetLocale.code);
    if (actual !== expected) problems.push(`${relativePath}: ${targetLocale.code} hreflang is "${actual}", expected "${expected}"`);
  }
  const expectedEnglishUrl = localeUrl(baseRoute, allLocales[0]);
  if (linkHref(html, 'alternate', 'x-default') !== expectedEnglishUrl) problems.push(`${relativePath}: invalid x-default hreflang`);
  if (h1Count !== 1) problems.push(`${relativePath}: found ${h1Count} h1 elements`);

  for (const match of html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(match[1]); } catch (error) { problems.push(`${relativePath}: invalid JSON-LD (${error.message})`); }
  }

  const images = [...html.matchAll(/<img\b[^>]*>/gi)];
  for (const match of images) {
    if (!/\bwidth="\d+"/i.test(match[0]) || !/\bheight="\d+"/i.test(match[0])) problems.push(`${relativePath}: image is missing numeric width/height attributes`);
  }
  if (images.length && !/(?:CC0|CC BY(?:-SA)?|public domain|open-government|site-owned|generated (?:image|imagery))/i.test(html)) {
    problems.push(`${relativePath}: image page lacks a visible commercial-use license or provenance entry`);
  }

  if (!html.includes(siteCssVersion)) problems.push(`${relativePath}: stale or missing site stylesheet version`);
  if (!html.includes(mainJsVersion)) problems.push(`${relativePath}: stale or missing main script version`);
  if (!html.includes('data-adsense-client="ca-pub-1732059148394592"')) problems.push(`${relativePath}: missing AdSense publisher declaration`);
  if (!html.includes(adsenseJsVersion)) problems.push(`${relativePath}: stale or missing AdSense loader`);

  if (baseRoute.startsWith('/south-korea/jeju/') && !html.includes('/css/jeju.css?v=20260826-9')) problems.push(`${relativePath}: missing Jeju responsive stylesheet`);
  if (baseRoute.startsWith('/south-korea/gyeongju/') && !html.includes('/css/gyeongju.css?v=20260826-1')) problems.push(`${relativePath}: missing Gyeongju responsive stylesheet`);
  if (baseRoute.startsWith('/thailand/') && !html.includes('/css/thailand.css?v=20260826-1')) problems.push(`${relativePath}: missing Thailand responsive stylesheet`);
  if (baseRoute.startsWith('/thailand/chiang-mai/') && !html.includes('/css/lanna.css?v=20260826-1')) problems.push(`${relativePath}: missing Chiang Mai Lanna stylesheet`);
  if (baseRoute.startsWith('/thailand/andaman/') && !html.includes('/css/andaman.css?v=20260826-1')) problems.push(`${relativePath}: missing Andaman chart-room stylesheet`);
  if (baseRoute.startsWith('/thailand/ayutthaya/') && !html.includes('/css/ayutthaya.css?v=20260826-1')) problems.push(`${relativePath}: missing Ayutthaya river-atlas stylesheet`);
  if (baseRoute.startsWith('/china/') && !html.includes('/css/china.css?v=20260827-2')) problems.push(`${relativePath}: missing China lacquer-and-ink stylesheet`);
  if (baseRoute.startsWith('/china/shanghai/') && !html.includes('/css/shanghai.css?v=20260827-2')) problems.push(`${relativePath}: missing Shanghai Huangpu-fold stylesheet`);
}

const linkFiles = [
  ...publishedRoutes.map(routeToFile),
  ...allLocales.flatMap((locale) => ['header.html', 'sidebar.html', 'footer.html'].map((name) => path.join(locale.dir, 'components', name)).filter((name) => name !== path.join('', 'components', path.basename(name)))),
  'components/header.html',
  'components/sidebar.html',
  'components/footer.html',
  '404.html'
];

for (const relativePath of new Set(linkFiles)) {
  const fullPath = path.join(root, relativePath);
  if (!fs.existsSync(fullPath)) {
    problems.push(`${relativePath}: required page or component is missing`);
    continue;
  }
  const html = fs.readFileSync(fullPath, 'utf8');
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/gi)) {
    const reference = match[1];
    if (!reference.startsWith('/') || reference.startsWith('//')) continue;
    const target = routeToFile(reference);
    if (!fs.existsSync(path.join(root, target))) problems.push(`${relativePath}: missing local target ${reference}`);
  }
}

function readSearchIndex(relativePath) {
  try { return JSON.parse(read(relativePath)); }
  catch (error) {
    problems.push(`${relativePath}: invalid JSON (${error.message})`);
    return [];
  }
}

const searchIndexes = Object.fromEntries(allLocales.map((locale) => {
  const relativePath = locale.prefix ? `${locale.dir}/data/search-index.json` : 'data/search-index.json';
  return [locale.code, { relativePath, entries: readSearchIndex(relativePath) }];
}));
const englishSearchIndex = searchIndexes.en.entries;
for (const locale of allLocales) {
  const { relativePath, entries } = searchIndexes[locale.code];
  const seen = new Set();
  for (const item of entries) {
    const baseRoute = item.url.split('#', 1)[0];
    if (!fs.existsSync(path.join(root, routeToFile(baseRoute)))) problems.push(`${relativePath}: "${item.title}" points to missing route ${item.url}`);
    if (seen.has(item.url)) problems.push(`${relativePath}: duplicate search URL ${item.url}`);
    seen.add(item.url);
  }
  if (entries.length !== englishSearchIndex.length) problems.push(`Search index parity failed: ${englishSearchIndex.length} en versus ${entries.length} ${locale.code} records`);
  if (locale.code !== 'en') {
    for (let index = 0; index < Math.min(englishSearchIndex.length, entries.length); index += 1) {
      const expected = localizedRoute(englishSearchIndex[index].url.split('#', 1)[0], locale) + (englishSearchIndex[index].url.includes('#') ? '#' + englishSearchIndex[index].url.split('#').slice(1).join('#') : '');
      if (entries[index].url !== expected) problems.push(`${relativePath}: record ${index + 1} URL is ${entries[index].url}, expected ${expected}`);
    }
  }
}

const mainScript = read('js/main.js');
for (const marker of ['tripdistill-language-choice-v1', 'browserPreferredLocale', 'data-language-accept', 'data-language-stay', 'The site will not redirect automatically.', '網站不會自動重新導向。', '日本語版に切り替えますか？', '한국어판으로 전환할까요?', 'เปลี่ยนเป็นภาษาไทยหรือไม่']) {
  if (!mainScript.includes(marker)) problems.push(`js/main.js: missing language-suggestion safeguard "${marker}"`);
}
for (const component of ['components/header.html', 'components/footer.html']) {
  const html = read(component);
  for (const locale of allLocales) if (!html.includes(`data-language-option="${locale.code}"`)) problems.push(`${component}: missing ${locale.code} manual language option`);
}

notes.push(`${publishedUrls.length} published routes (${allLocales.map((locale) => `${routesByLocale[locale.code].length} ${locale.code}`).join(' + ')})`);
notes.push(`${englishSearchIndex.length} search records per language`);
notes.push(`${allLocales.reduce((sum, locale) => sum + titles[locale.code].size, 0)} unique localized page titles`);

if (problems.length) {
  console.error(`Site audit failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(`- ${problem}`);
  process.exitCode = 1;
} else {
  console.log(`Site audit passed: ${notes.join(', ')}.`);
}
