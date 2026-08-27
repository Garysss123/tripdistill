import fs from 'node:fs';
import path from 'node:path';
import { allLocales, localeConfigs } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const siteCssVersion = '20260828-1';
const mainJsVersion = '20260828-1';
const chinaCssVersion = '20260827-3';
const shanghaiCssVersion = '20260827-2';
const hangzhouCssVersion = '20260828-1';

function routeToFile(route) {
  if (route === '/') return 'index.html';
  return path.join(route.replace(/^\//, ''), 'index.html');
}

function isLocalizedRoute(route) {
  return localeConfigs.some((locale) => route === locale.prefix + '/' || route.startsWith(locale.prefix + '/'));
}

function localeUrl(route, locale) {
  return 'https://tripdistill.com' + (locale.prefix ? (route === '/' ? locale.prefix + '/' : locale.prefix + route) : route);
}

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const routes = [...sitemap.matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc>/g)]
  .map((match) => match[1] || '/')
  .filter((route, index, values) => !isLocalizedRoute(route) && values.indexOf(route) === index);

for (const route of routes) {
  const file = path.join(root, routeToFile(route));
  if (!fs.existsSync(file)) throw new Error('Missing English route while syncing language metadata: ' + route);
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/\/css\/site\.css\?v=[0-9-]+/g, '/css/site.css?v=' + siteCssVersion);
  html = html.replace(/\/js\/main\.js\?v=[0-9-]+/g, '/js/main.js?v=' + mainJsVersion);
  html = html.replace(/\/css\/china\.css\?v=[0-9-]+/g, '/css/china.css?v=' + chinaCssVersion);
  html = html.replace(/\/css\/shanghai\.css\?v=[0-9-]+/g, '/css/shanghai.css?v=' + shanghaiCssVersion);
  html = html.replace(/\/css\/hangzhou\.css\?v=[0-9-]+/g, '/css/hangzhou.css?v=' + hangzhouCssVersion);
  html = html.replace(/<link\b(?=[^>]*\brel="alternate")[^>]*>/gi, '');

  const canonicalTag = html.match(/<link\b(?=[^>]*\brel="canonical")[^>]*>/i)?.[0];
  const canonicalUrl = canonicalTag?.match(/\bhref="([^"]+)"/i)?.[1] || '';
  const expectedCanonical = localeUrl(route, allLocales[0]);
  if (!canonicalTag || canonicalUrl !== expectedCanonical) {
    throw new Error(`Canonical tag for ${route} is "${canonicalUrl}", expected "${expectedCanonical}"`);
  }

  const alternates = allLocales
    .map((locale) => `<link rel="alternate" hreflang="${locale.code}" href="${localeUrl(route, locale)}">`)
    .concat(`<link rel="alternate" hreflang="x-default" href="${expectedCanonical}">`)
    .join('');
  html = html.replace(canonicalTag, canonicalTag + alternates);
  fs.writeFileSync(file, html);
}

const notFoundPath = path.join(root, '404.html');
let notFound = fs.readFileSync(notFoundPath, 'utf8');
notFound = notFound.replace(/\/css\/site\.css\?v=[0-9-]+/g, '/css/site.css?v=' + siteCssVersion);
notFound = notFound.replace(/\/js\/main\.js\?v=[0-9-]+/g, '/js/main.js?v=' + mainJsVersion);
fs.writeFileSync(notFoundPath, notFound);

console.log(`Synchronized five-language metadata and release assets across ${routes.length} English routes.`);
