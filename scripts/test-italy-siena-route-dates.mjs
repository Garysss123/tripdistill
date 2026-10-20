import fs from 'node:fs';
import path from 'node:path';
import { italyClusters } from '../data/italy-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
const routes = [
  '/italy/siena-southern-tuscany/',
  '/italy/siena-southern-tuscany/siena-civic-cathedral/',
  '/italy/siena-southern-tuscany/val-dorcia-towns/',
  '/italy/siena-southern-tuscany/maremma-park-coast/'
];
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const cluster = italyClusters.find((item) => item.slug === 'siena-southern-tuscany');
check(Boolean(cluster), 'Siena / Val d’Orcia / Maremma cluster is missing');
check(cluster?.reviewDate === '12 October 2026' && cluster?.reviewIsoDate === '2026-10-12', 'Siena cluster review date metadata is stale');
check(cluster?.publishedIsoDate === '2026-09-26', 'Siena cluster publication date changed');

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const entries = new Map([...sitemap.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
  .map((match) => [match[1], match[2]]));
check(entries.size === 4725, `Expected 4,560 sitemap routes, found ${entries.size}`);
const italyRoutes = [...entries.keys()].filter((route) => route.startsWith('/italy/') || /^\/(?:zh|ja|ko|th)\/italy\//.test(route));
check(italyRoutes.length === 81 * locales.length, `Expected 405 Italy sitemap entries, found ${italyRoutes.length}`);
const search = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
check(search.filter((record) => record.url.startsWith('/italy/')).length === 81, 'Italy search index route count changed');

for (const route of routes) {
  const guide = cluster?.guides.find((item) => item.url === route);
  const page = route === routes[0] ? cluster : guide;
  check(Boolean(page), `${route}: route is absent from the existing Siena cluster`);
  check(entries.has(route), `${route}: English sitemap route is missing`);
  check(search.some((record) => record.url === route), `${route}: English search record is missing`);
  for (const [locale, prefix] of locales) {
    const localizedRoute = prefix + route;
    check(entries.get(localizedRoute) === '2026-10-12', `${localizedRoute}: expected sitemap lastmod 2026-10-12`);
    const pagePath = path.join(root, localizedRoute.slice(1), 'index.html');
    check(fs.existsSync(pagePath), `${localizedRoute}: generated page is missing`);
    if (!fs.existsSync(pagePath)) continue;
    const html = fs.readFileSync(pagePath, 'utf8');
    check(html.includes('"dateModified":"2026-10-12"'), `${localizedRoute}: structured dateModified is stale`);
    check(html.includes('"datePublished":"2026-09-26"'), `${localizedRoute}: original publication date was not preserved`);
    if (guide) {
      check(html.includes('it-local-plan'), `${localizedRoute}: route-specific local plan is not rendered`);
      check(html.includes('data-it-structure='), `${localizedRoute}: route structure marker is missing`);
    }
    if (locale === 'en' && guide) {
      check(html.includes(guide.localPlan.stay) && html.includes(guide.localPlan.walk) && html.includes(guide.localPlan.booking) && html.includes(guide.localPlan.season), `${localizedRoute}: local plan copy is not rendered`);
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  console.error(`Italy Siena route-date test failed: ${failures.length} issue(s).`);
  process.exitCode = 1;
} else {
  console.log('Italy Siena route-date test passed: 4 existing pages, 20 language editions, original publication date retained, and no change to the 4,560-route sitemap or 81-route Italy search set.');
}
