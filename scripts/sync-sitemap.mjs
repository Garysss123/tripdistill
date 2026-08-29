import fs from 'node:fs';
import path from 'node:path';
import { allLocales, localeConfigs } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const sitemapPath = path.join(root, 'sitemap.xml');
const lastmod = '2026-08-30';
const newRoutes = [
  ['/malaysia/', 'monthly', '0.9'],
  ['/malaysia/langkawi/', 'monthly', '0.8'],
  ['/malaysia/cameron-highlands/', 'monthly', '0.8'],
  ['/malaysia/taman-negara/', 'monthly', '0.8'],
  ['/malaysia/perhentian-redang/', 'monthly', '0.8']
];

function isLocalizedRoute(route) {
  return localeConfigs.some((locale) => route === locale.prefix + '/' || route.startsWith(locale.prefix + '/'));
}

function localizedRoute(route, locale) {
  return locale.prefix ? (route === '/' ? locale.prefix + '/' : locale.prefix + route) : route;
}

const existing = fs.readFileSync(sitemapPath, 'utf8');
const records = new Map();
for (const match of existing.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod><changefreq>([^<]*)<\/changefreq><priority>([^<]*)<\/priority><\/url>/g)) {
  const route = match[1] || '/';
  if (isLocalizedRoute(route)) continue;
  records.set(route, { route, lastmod: match[2], changefreq: match[3], priority: match[4] });
}
for (const [route, changefreq, priority] of newRoutes) records.set(route, { route, lastmod, changefreq, priority });

const english = [...records.values()];
const lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
for (const locale of allLocales) {
  for (const record of english) {
    const route = localizedRoute(record.route, locale);
    lines.push(`  <url><loc>https://tripdistill.com${route}</loc><lastmod>${record.lastmod}</lastmod><changefreq>${record.changefreq}</changefreq><priority>${record.priority}</priority></url>`);
  }
}
lines.push('</urlset>', '');
fs.writeFileSync(sitemapPath, lines.join('\n'));
console.log(`Sitemap synchronized: ${english.length} routes across ${allLocales.length} language editions (${english.length * allLocales.length} URLs).`);
