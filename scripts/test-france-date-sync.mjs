import fs from 'node:fs';
import path from 'node:path';
import { franceClusters, franceGuides } from '../data/france-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const locales = ['', '/zh', '/ja', '/ko', '/th'];
const routes = ['/france/', ...franceClusters.map((cluster) => `/france/${cluster.slug}/`), ...franceGuides.map((guide) => guide.url)];
const selectedRoutes = [
  '/france/lyon-rhone/',
  '/france/lyon-rhone/vieux-lyon-fourviere/',
  '/france/lyon-rhone/presquile-croix-rousse/',
  '/france/lyon-rhone/beaujolais-perouges/'
];
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const entries = new Map([...sitemap.matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
  .map(([, route, lastmod]) => [route, lastmod]));
const reviewedRoutes = [
  ...franceClusters.filter((cluster) => cluster.reviewedOn?.iso === '2026-10-11').map((cluster) => `/france/${cluster.slug}/`),
  ...franceGuides.filter((guide) => guide.reviewedOn?.iso === '2026-10-11').map((guide) => guide.url)
];

check(routes.length === 81 && new Set(routes).size === 81, `Expected 81 France routes, found ${routes.length}`);
check(reviewedRoutes.length === 4 && selectedRoutes.every((route) => reviewedRoutes.includes(route)), `Expected Lyon/Rhône hub and three children to be the only newly review-dated France routes; found ${reviewedRoutes.join(', ')}`);

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
  const html = fs.readFileSync(path.join(root, route.slice(1), 'index.html'), 'utf8');
  const schemaRaw = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  let schema;
  try { schema = JSON.parse(schemaRaw); } catch { errors.push(`${route}: JSON-LD missing or invalid`); continue; }
  const page = (schema['@graph'] || []).find((item) => item['@type'] === 'Article');
  check(page?.datePublished === '2026-09-19', `${route}: unexpected original publication date`);
  check(page?.dateModified === '2026-10-11', `${route}: dateModified should be 2026-10-11, found ${page?.dateModified || '(missing)'}`);
  for (const prefix of locales) check(entries.get(`${prefix}${route}`) === '2026-10-11', `${prefix}${route}: sitemap lastmod should be 2026-10-11`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`France date synchronization: ${errors.length} failure(s).`);
  process.exitCode = 1;
} else {
  console.log(`France date synchronization passed: ${routes.length} English routes and ${routes.length * locales.length} sitemap URLs; all localized dates match, and the four Lyon/Rhône pages use 2026-10-11.`);
}
