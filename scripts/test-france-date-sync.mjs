import fs from 'node:fs';
import path from 'node:path';
import { franceClusters, franceGuides } from '../data/france-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const locales = ['', '/zh', '/ja', '/ko', '/th'];
const routes = ['/france/', ...franceClusters.map((cluster) => `/france/${cluster.slug}/`), ...franceGuides.map((guide) => guide.url)];
const lyonRoutes = [
  '/france/lyon-rhone/',
  '/france/lyon-rhone/vieux-lyon-fourviere/',
  '/france/lyon-rhone/presquile-croix-rousse/',
  '/france/lyon-rhone/beaujolais-perouges/'
];
const alsaceRoutes = [
  '/france/alsace/',
  '/france/alsace/strasbourg-grande-ile/',
  '/france/alsace/colmar-canals-museums/',
  '/france/alsace/alsace-wine-route-villages/'
];
const burgundyRoutes = [
  '/france/burgundy/',
  '/france/burgundy/dijon-ducal-city/',
  '/france/burgundy/beaune-hospices-vineyards/',
  '/france/burgundy/vezelay-fontenay-abbeys/'
];
const bordeauxRoutes = [
  '/france/bordeaux-gironde/',
  '/france/bordeaux-gironde/bordeaux-river-wine-city/',
  '/france/bordeaux-gironde/saint-emilion-vineyards/',
  '/france/bordeaux-gironde/arcachon-dune-pilat/'
];
const dordogneRoutes = [
  '/france/dordogne-perigord/',
  '/france/dordogne-perigord/sarlat-market-old-town/',
  '/france/dordogne-perigord/vezere-prehistory/',
  '/france/dordogne-perigord/dordogne-castles-villages/'
];
const selectedRoutes = [...lyonRoutes, ...alsaceRoutes, ...burgundyRoutes, ...bordeauxRoutes, ...dordogneRoutes];
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const entries = new Map([...sitemap.matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
  .map(([, route, lastmod]) => [route, lastmod]));
const reviewedRoutes = [
  ...franceClusters.filter((cluster) => cluster.reviewedOn?.iso === '2026-10-11').map((cluster) => `/france/${cluster.slug}/`),
  ...franceGuides.filter((guide) => guide.reviewedOn?.iso === '2026-10-11').map((guide) => guide.url)
];

check(routes.length === 81 && new Set(routes).size === 81, `Expected 81 France routes, found ${routes.length}`);
check(reviewedRoutes.length === 20 && selectedRoutes.length === 20 && selectedRoutes.every((route) => reviewedRoutes.includes(route)), `Expected the Lyon/Rhône, Alsace, Burgundy, Bordeaux/Gironde and Dordogne hubs plus their three children to be the newly review-dated France routes; found ${reviewedRoutes.join(', ')}`);

for (const route of routes) {
  const englishLastmod = entries.get(route);
  check(!!englishLastmod, `${route}: English sitemap entry missing`);
  for (const prefix of locales) {
    const localizedRoute = `${prefix}${route}`;
    const localizedLastmod = entries.get(localizedRoute);
    check(!!localizedLastmod, `${localizedRoute}: sitemap entry missing`);
    if (englishLastmod && localizedLastmod) check(localizedLastmod === englishLastmod, `${localizedRoute}: localized lastmod ${localizedLastmod} differs from English ${englishLastmod}`);
  }
}

for (const route of selectedRoutes) {
  for (const prefix of locales) {
    const localizedRoute = `${prefix}${route}`;
    const htmlPath = path.join(root, localizedRoute.slice(1), 'index.html');
    if (!fs.existsSync(htmlPath)) {
      errors.push(`${localizedRoute}: built page missing; run npm run build before this check`);
      continue;
    }
    const html = fs.readFileSync(htmlPath, 'utf8');
    const schemaRaw = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
    let schema;
    try { schema = JSON.parse(schemaRaw); } catch { errors.push(`${localizedRoute}: JSON-LD missing or invalid`); continue; }
    const page = (schema['@graph'] || []).find((item) => item['@type'] === 'Article');
    check(page?.datePublished === '2026-09-19', `${localizedRoute}: unexpected original publication date`);
    check(page?.dateModified === '2026-10-11', `${localizedRoute}: dateModified should be 2026-10-11, found ${page?.dateModified || '(missing)'}`);
    check(entries.get(localizedRoute) === '2026-10-11', `${localizedRoute}: sitemap lastmod should be 2026-10-11`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`France date synchronization: ${errors.length} failure(s).`);
  process.exitCode = 1;
} else {
  console.log(`France date synchronization passed: ${routes.length} English routes and ${routes.length * locales.length} sitemap URLs; all localized dates match, and the twenty Lyon/Rhône + Alsace + Burgundy + Bordeaux/Gironde + Dordogne routes use 2026-10-11 in all five article schemas and sitemap entries.`);
}
