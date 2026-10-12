import fs from 'node:fs';
import path from 'node:path';
import { italyClusters } from '../data/italy-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
const routes = [
  '/italy/puglia/',
  '/italy/puglia/bari-trani-castel-del-monte/',
  '/italy/puglia/alberobello-itria-valley/',
  '/italy/puglia/lecce-otranto-gallipoli/'
];
const entries = new Map([...sitemap.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
  .map((match) => [match[1], match[2]]));
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };

const puglia = italyClusters.find((cluster) => cluster.slug === 'puglia');
check(Boolean(puglia), 'Italy Puglia cluster is missing');
check(puglia?.reviewIsoDate === '2026-10-11', 'Puglia source review ISO date is not 2026-10-11');
check(puglia?.reviewDate === '11 October 2026', 'Puglia visible review date is not 11 October 2026');
const lakes = italyClusters.find((cluster) => cluster.slug === 'italian-lakes');
check(lakes?.reviewIsoDate === '2026-10-12', 'Italian Lakes source review ISO date is not 2026-10-12');
check(lakes?.reviewDate === '12 October 2026', 'Italian Lakes visible review date is not 12 October 2026');

for (const route of routes) {
  for (const [, prefix] of locales) {
    const localizedRoute = prefix ? `${prefix}${route}` : route;
    check(entries.get(localizedRoute) === '2026-10-11', `${localizedRoute}: expected lastmod 2026-10-11`);
    const file = path.join(root, localizedRoute.slice(1), 'index.html');
    check(fs.existsSync(file), `${localizedRoute}: generated page is missing`);
    if (fs.existsSync(file)) {
      const html = fs.readFileSync(file, 'utf8');
      check(html.includes('"dateModified":"2026-10-11"'), `${localizedRoute}: structured dateModified is stale`);
    }
  }
}

const italianRoutes = [...entries.keys()].filter((route) => route.startsWith('/italy/') || /^\/(?:zh|ja|ko|th)\/italy\//.test(route));
for (const route of italianRoutes) {
  const isRome = route.includes('/rome/');
  const isPuglia = route.includes('/puglia/');
  const isEmiliaRomagna = route.includes('/emilia-romagna/');
  const isLakes = route.includes('/italian-lakes/');
  const isSiena = route.includes('/siena-southern-tuscany/');
  const isMilan = route.includes('/milan/');
  const expected = isPuglia ? '2026-10-11' : isRome ? '2026-10-04' : isEmiliaRomagna || isLakes || isSiena || isMilan ? '2026-10-12' : '2026-09-26';
  check(entries.get(route) === expected, `${route}: expected Italy date ${expected}, found ${entries.get(route)}`);
}
check(italianRoutes.length === 81 * locales.length, `Expected 405 Italy sitemap entries, found ${italianRoutes.length}`);

if (failures.length) {
  console.error(failures.join('\n'));
  console.error(`Italy Puglia route-date test failed: ${failures.length} issue(s).`);
  process.exitCode = 1;
} else {
  console.log('Italy Puglia route-date test passed: 4 routes synchronized across five locales; unchanged Italy routes retain their prior dates.');
}
