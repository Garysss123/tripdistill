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
const marseilleRoutes = [
  '/france/marseille-calanques/',
  '/france/marseille-calanques/old-port-panier-mucem/',
  '/france/marseille-calanques/calanques-access-choice/',
  '/france/marseille-calanques/cassis-la-ciotat/'
];
const coteDAzurRoutes = [
  '/france/cote-dazur/',
  '/france/cote-dazur/nice-old-town-hills/',
  '/france/cote-dazur/eze-monaco-menton/',
  '/france/cote-dazur/antibes-cannes-west-coast/'
];
const provenceRoutes = [
  '/france/provence-inland/',
  '/france/provence-inland/avignon-papal-city/',
  '/france/provence-inland/aix-markets-cezanne/'
];
const frenchAlpsRoutes = [
  '/france/french-alps/',
  '/france/french-alps/annecy-lake-old-town/',
  '/france/french-alps/chamonix-mountain-systems/',
  '/france/french-alps/grenoble-bastille-chartreuse/'
];
const languedocRoutes = [
  '/france/languedoc-camargue/',
  '/france/languedoc-camargue/montpellier-sete/',
  '/france/languedoc-camargue/nimes-pont-du-gard/',
  '/france/languedoc-camargue/arles-camargue/'
];
const corsicaRoutes = [
  '/france/corsica/',
  '/france/corsica/ajaccio-west-coast/',
  '/france/corsica/bastia-cap-corse/',
  '/france/corsica/bonifacio-porto-vecchio/'
];
const lilleRecoveryRoutes = [
  '/france/',
  '/france/lille-french-flanders/',
  '/france/lille-french-flanders/old-lille-roubaix/',
  '/france/lille-french-flanders/arras-vimy-remembrance/',
  '/france/lille-french-flanders/opal-coast-headlands/'
];
const octoberElevenRoutes = [...lyonRoutes, ...alsaceRoutes, ...burgundyRoutes, ...bordeauxRoutes, ...dordogneRoutes, ...occitanieRoutes];
const selectedRoutes = [...octoberElevenRoutes, ...marseilleRoutes, ...coteDAzurRoutes, ...provenceRoutes, ...frenchAlpsRoutes];
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const entries = new Map([...sitemap.matchAll(/<loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
  .map(([, route, lastmod]) => [route, lastmod]));
const reviewedRoutes = [
  ...franceClusters.filter((cluster) => cluster.reviewedOn?.iso === '2026-10-11').map((cluster) => `/france/${cluster.slug}/`),
  ...franceGuides.filter((guide) => guide.reviewedOn?.iso === '2026-10-11').map((guide) => guide.url)
];
const marseilleReviewedRoutes = [
  ...franceClusters.filter((cluster) => cluster.slug === 'marseille-calanques' && cluster.reviewedOn?.iso === '2026-10-12').map((cluster) => `/france/${cluster.slug}/`),
  ...franceGuides.filter((guide) => guide.hubSlug === 'marseille-calanques' && guide.reviewedOn?.iso === '2026-10-12').map((guide) => guide.url)
];
const provenceReviewedRoutes = [
  ...franceClusters.filter((cluster) => cluster.hubContent?.reviewedOn?.iso === '2026-10-12').map((cluster) => `/france/${cluster.slug}/`),
  ...franceGuides.filter((guide) => guide.reviewedOn?.iso === '2026-10-12').map((guide) => guide.url)
].filter((route) => provenceRoutes.includes(route));
const frenchAlpsReviewedRoutes = [
  ...franceClusters.filter((cluster) => cluster.slug === 'french-alps' && cluster.reviewedOn?.iso === '2026-10-12').map((cluster) => `/france/${cluster.slug}/`),
  ...franceGuides.filter((guide) => guide.hubSlug === 'french-alps' && guide.reviewedOn?.iso === '2026-10-12').map((guide) => guide.url)
];
const languedocReviewedRoutes = [
  ...franceClusters.filter((cluster) => cluster.hubContent?.reviewedOn?.iso === '2026-10-12').map((cluster) => `/france/${cluster.slug}/`),
  ...franceGuides.filter((guide) => guide.reviewedOn?.iso === '2026-10-12').map((guide) => guide.url)
].filter((route) => languedocRoutes.includes(route));
const corsicaReviewedRoutes = [
  ...franceClusters.filter((cluster) => cluster.slug === 'corsica' && cluster.reviewDateISO === '2026-10-12').map((cluster) => `/france/${cluster.slug}/`),
  ...franceGuides.filter((guide) => guide.hubSlug === 'corsica' && guide.reviewDateISO === '2026-10-12').map((guide) => guide.url)
].filter((route) => corsicaRoutes.includes(route));

check(routes.length === 81 && new Set(routes).size === 81, `Expected 81 France routes, found ${routes.length}`);
check(reviewedRoutes.length === 24 && octoberElevenRoutes.length === 24 && octoberElevenRoutes.every((route) => reviewedRoutes.includes(route)), `Expected the Lyon/Rhône, Alsace, Burgundy, Bordeaux/Gironde, Dordogne and Toulouse/Occitanie hubs plus their three children to retain their review dates; found ${reviewedRoutes.join(', ')}`);
check(marseilleReviewedRoutes.length === 4 && marseilleRoutes.length === 4 && marseilleRoutes.every((route) => marseilleReviewedRoutes.includes(route)), `Expected the Marseille/Calanques hub and its three children to be the 2026-10-12 review-dated routes; found ${marseilleReviewedRoutes.join(', ')}`);
check(frenchAlpsReviewedRoutes.length === 4 && frenchAlpsRoutes.length === 4 && frenchAlpsRoutes.every((route) => frenchAlpsReviewedRoutes.includes(route)), `Expected the French Alps hub and its three children to be the 2026-10-12 review-dated routes; found ${frenchAlpsReviewedRoutes.join(', ')}`);
check(coteDAzurRoutes.length === 4 && coteDAzurRoutes.every((route) => {
  const cluster = franceClusters.find((item) => `/france/${item.slug}/` === route);
  const guide = franceGuides.find((item) => item.url === route);
  return (cluster?.reviewDateISO || guide?.reviewDateISO) === '2026-10-12';
}), 'Expected the Nice/Côte d’Azur hub and its three existing children to use 2026-10-12');
check(provenceReviewedRoutes.length === 3 && provenceRoutes.length === 3 && provenceRoutes.every((route) => provenceReviewedRoutes.includes(route)), `Expected the Provence inland hub, Avignon and Aix to carry the 2026-10-12 review date; found ${provenceReviewedRoutes.join(', ')}`);
check(languedocReviewedRoutes.length === 4 && languedocRoutes.length === 4 && languedocRoutes.every((route) => languedocReviewedRoutes.includes(route)), `Expected the Languedoc-Camargue hub and all three guides to carry the 2026-10-12 review date; found ${languedocReviewedRoutes.join(', ')}`);
check(corsicaReviewedRoutes.length === 4 && corsicaRoutes.length === 4 && corsicaRoutes.every((route) => corsicaReviewedRoutes.includes(route)), `Expected the Corsica hub and all three guides to carry the 2026-10-12 review date; found ${corsicaReviewedRoutes.join(', ')}`);

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
    const expectedModified = [...marseilleRoutes, ...coteDAzurRoutes, ...provenceRoutes, ...frenchAlpsRoutes].includes(route) ? '2026-10-12' : '2026-10-11';
    check(page?.dateModified === expectedModified, `${localizedRoute}: dateModified should be ${expectedModified}, found ${page?.dateModified || '(missing)'}`);
    check(entries.get(localizedRoute) === expectedModified, `${localizedRoute}: sitemap lastmod should be ${expectedModified}`);
  }
}

for (const route of [...marseilleRoutes, ...provenceRoutes]) {
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

for (const route of languedocRoutes) {
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

for (const route of corsicaRoutes) {
  const expectedPublished = route === '/france/corsica/bastia-cap-corse/' || route === '/france/corsica/bonifacio-porto-vecchio/' ? '2026-10-11' : '2026-09-19';
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
    check(page?.datePublished === expectedPublished, `${localizedRoute}: unexpected original publication date`);
    check(page?.dateModified === '2026-10-12', `${localizedRoute}: dateModified should be 2026-10-12, found ${page?.dateModified || '(missing)'}`);
    check(entries.get(localizedRoute) === '2026-10-12', `${localizedRoute}: sitemap lastmod should be 2026-10-12`);
  }
}

for (const route of lilleRecoveryRoutes) {
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
    const page = (schema['@graph'] || []).find((item) => item['@type'] === (route === '/france/' ? 'WebPage' : 'Article'));
    check(page?.datePublished === '2026-09-19', `${localizedRoute}: original publication date should remain 2026-09-19`);
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
    ? `France English date synchronization passed: ${routes.length} English routes; the twenty-four Lyon/Rhône + Alsace + Burgundy + Bordeaux/Gironde + Dordogne + Toulouse/Occitanie routes use 2026-10-11, and the four Marseille/Calanques, four Nice/Côte d’Azur, three Provence inland and four Languedoc-Camargue routes use 2026-10-12 with original publication dates preserved.`
    : `France date synchronization passed: ${routes.length} English routes and ${routes.length * locales.length} sitemap URLs; all localized dates match, and the Lille recovery’s five pages, Marseille/Calanques, Nice/Côte d’Azur, Provence inland, Languedoc-Camargue and Corsica use 2026-10-12 in all five localized schemas and sitemap entries.`);
}
