import fs from 'node:fs';
import path from 'node:path';
import { allLocales, localeConfigs } from './i18n-lib.mjs';
import { malaysiaDepthClusters, malaysiaDepthGuides } from '../data/malaysia-depth-guides.mjs';
import { vietnamClusters, vietnamGuides } from '../data/vietnam-guides.mjs';
import { australiaClusters, australiaGuides } from '../data/australia-guides.mjs';
import { usaRoutes } from '../data/usa-guides.mjs';
import { canadaClusters, canadaGuides } from '../data/canada-guides.mjs';
import { switzerlandClusters, switzerlandGuides } from '../data/switzerland-guides.mjs';
import { franceClusters, franceGuides } from '../data/france-guides.mjs';
import { unitedKingdomClusters, unitedKingdomGuides } from '../data/united-kingdom-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const sitemapPath = path.join(root, 'sitemap.xml');
const malaysiaLastmod = '2026-08-30';
const vietnamLastmod = '2026-08-31';
const australiaLastmod = '2026-09-04';
const canadaLastmod = '2026-09-12';
const switzerlandLastmod = '2026-09-12';
const franceLastmod = '2026-09-20';
const unitedKingdomLastmod = '2026-09-20';
const newRoutes = [
  ['/', unitedKingdomLastmod, 'weekly', '1.0'],
  ...usaRoutes.map(route=>[route,'2026-09-11','monthly',route==='/usa/'?'0.9':'0.7']),
  ['/about/', unitedKingdomLastmod, 'monthly', '0.5'],
  ['/united-kingdom/', unitedKingdomLastmod, 'monthly', '0.9'],
  ...unitedKingdomClusters.map((cluster) => [`/united-kingdom/${cluster.slug}/`, unitedKingdomLastmod, 'monthly', '0.8']),
  ...unitedKingdomGuides.map((guide) => [guide.url, unitedKingdomLastmod, 'monthly', '0.7']),
  ['/france/', franceLastmod, 'monthly', '0.9'],
  ...franceClusters.map((cluster) => [`/france/${cluster.slug}/`, franceLastmod, 'monthly', '0.8']),
  ...franceGuides.map((guide) => [guide.url, franceLastmod, 'monthly', '0.7']),
  ['/switzerland/', switzerlandLastmod, 'monthly', '0.9'],
  ...switzerlandClusters.map((cluster) => [`/switzerland/${cluster.slug}/`, switzerlandLastmod, 'monthly', '0.8']),
  ...switzerlandGuides.map((guide) => [guide.url, switzerlandLastmod, 'monthly', '0.7']),
  ['/canada/', canadaLastmod, 'monthly', '0.9'],
  ...canadaClusters.map((cluster) => [`/canada/${cluster.slug}/`, canadaLastmod, 'monthly', '0.8']),
  ...canadaGuides.map((guide) => [guide.url, canadaLastmod, 'monthly', '0.7']),
  ['/malaysia/', malaysiaLastmod, 'monthly', '0.9'],
  ...malaysiaDepthClusters.map((cluster) => [`/malaysia/${cluster.hubSlug}/`, malaysiaLastmod, 'monthly', '0.8']),
  ...malaysiaDepthGuides.map((guide) => [guide.url, malaysiaLastmod, 'monthly', '0.7']),
  ['/vietnam/', vietnamLastmod, 'monthly', '0.9'],
  ...vietnamClusters.map((cluster) => [`/vietnam/${cluster.slug}/`, vietnamLastmod, 'monthly', '0.8']),
  ...vietnamGuides.map((guide) => [guide.url, vietnamLastmod, 'monthly', '0.7']),
  ['/australia/', australiaLastmod, 'monthly', '0.9'],
  ...australiaClusters.map((cluster) => [`/australia/${cluster.slug}/`, australiaLastmod, 'monthly', '0.8']),
  ...australiaGuides.map((guide) => [guide.url, australiaLastmod, 'monthly', '0.7'])
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
for (const [route, lastmod, changefreq, priority] of newRoutes) records.set(route, { route, lastmod, changefreq, priority });

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
