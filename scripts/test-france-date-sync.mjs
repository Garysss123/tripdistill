import fs from 'node:fs';
import path from 'node:path';
import { franceClusters, franceGuides } from '../data/france-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const englishOnly = process.argv.includes('--english-only');
const locales = englishOnly ? [''] : ['', '/zh', '/ja', '/ko', '/th'];
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
const occitanieRoutes = [
  '/france/toulouse-albi-carcassonne/',
  '/france/toulouse-albi-carcassonne/toulouse-garonne-aerospace/',
  '/france/toulouse-albi-carcassonne/albi-episcopal-city/',
  '/france/toulouse-albi-carcassonne/carcassonne-cite-bastide/'
];
const selectedRoutes = [...lyonRoutes, ...alsaceRoutes, ...burgundyRoutes, ...bordeauxRoutes, ...dordogneRoutes, ...occitanieRoutes];
const marseilleRoutes = [
  '/france/marseille-calanques/',
  '/france/marseille-calanques/old-port-panier-mucem/',
  '/france/marseille-calanques/calanques-access-choice/',
  '/france/marseille-calanques/cassis-la-ciotat/'
];
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const entries = new Map([...sitemap.matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
  .map(([, route, lastmod]) => [route, lastmod]));
const reviewedRoutes = [
  ...franceClusters.filter((cluster) => cluster.reviewedOn?.iso === '2026-10-11').map((cluster) => `/france/${cluster.slug}/`),
  ...franceGuides.filter((guide) => guide.reviewedOn?.iso === '2026-10-11').map((guide) => guide.url)
];
const marseilleReviewedRoutes = [
  ...franceClusters.filter((cluster) => cluster.reviewedOn?.iso === '2026-10-12').map((cluster) => `/france/${cluster.slug}/`),
  ...franceGuides.filter((guide) => guide.reviewedOn?.iso === '2026-10-12').map((guide) => guide.url)
];

check(routes.length === 81 && new Set(routes).size === 81, `Expected 81 France routes, found ${routes.length}`);
check(reviewedRoutes.length === 24 && selectedRoutes.length === 24 && selectedRoutes.every((route) => reviewedRoutes.includes(route)), `Expected the Lyon/Rhône, Alsace, Burgundy, Bordeaux/Gironde, Dordogne and Toulouse/Occitanie hubs plus their three children to retain their review dates; found ${reviewedRoutes.join(', ')}`);
check(marseilleReviewedRoutes.length === 4 && marseilleRoutes.length === 4 && marseilleRoutes.every((route) => marseilleReviewedRoutes.includes(route)), `Expected the Marseille/Calanques hub and all three children to be the 2026-10-12 review-dated routes; found ${marseilleReviewedRoutes.join(', ')}`);

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

for (const route of marseilleRoutes) {
  for (const prefix of locales) {
    const localizedRoute = `${prefix}${route}`;
    const htmlPath = path.join(root, localizedRoute.slice(1), 'index.html');
    if (!fs.existsSync(htmlPath)) {
      errors.push(`${localizedRoute}: built page missing; run npm run build after all four locale batches are reviewed`);
      continue;
    }
    const html = fs.readFileSync(htmlPath, 'utf8');
    const schemaRaw = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
    let schema;
    try { schema = JSON.parse(schemaRaw); } catch { errors.push(`${localizedRoute}: JSON-LD missing or invalid`); continue; }
    const page = (schema['@graph'] || []).find((item) => item['@type'] === 'Article');
    check(page?.datePublished === '2026-09-19', `${localizedRoute}: unexpected original publication date`);
    check(page?.dateModified === '2026-10-12', `${localizedRoute}: dateModified should be 2026-10-12, found ${page?.dateModified || '(missing)'}`);
    check(entries.get(localizedRoute) === '2026-10-12', `${localizedRoute}: sitemap lastmod should be 2026-10-12`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`France date synchronization: ${errors.length} failure(s).`);
  process.exitCode = 1;
} else {
  console.log(englishOnly
    ? `France English date synchronization passed: ${routes.length} English routes; the twenty-four Lyon/Rhône + Alsace + Burgundy + Bordeaux/Gironde + Dordogne + Toulouse/Occitanie routes use 2026-10-11, and the four Marseille/Calanques routes use 2026-10-12 with their 2026-09-19 publication date preserved.`
    : `France date synchronization passed: ${routes.length} English routes and ${routes.length * 5} sitemap URLs; all localized dates match, the twenty-four Lyon/Rhône + Alsace + Burgundy + Bordeaux/Gironde + Dordogne + Toulouse/Occitanie routes use 2026-10-11, and the four Marseille/Calanques routes use 2026-10-12 in all five article schemas and sitemap entries.`);
}
