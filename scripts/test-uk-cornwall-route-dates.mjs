import assert from 'node:assert/strict';
import fs from 'node:fs';

const reviewDate = '2026-10-11';
const routes = [
  '/united-kingdom/cornwall-devon/',
  '/united-kingdom/cornwall-devon/st-ives-penwith/',
  '/united-kingdom/cornwall-devon/falmouth-roseland/',
  '/united-kingdom/cornwall-devon/exeter-dartmoor-edge/'
];
const editions = [
  { locale: 'en', prefix: '' },
  { locale: 'zh-Hant', prefix: 'zh/' },
  { locale: 'ja', prefix: 'ja/' },
  { locale: 'ko', prefix: 'ko/' },
  { locale: 'th', prefix: 'th/' }
];

function dateVisibleIn(html, locale) {
  const patterns = {
    en: /11\s+October\s+2026/i,
    'zh-Hant': /2026\s*年\s*10\s*月\s*11\s*日|11\s+October\s+2026/i,
    ja: /2026\s*年\s*10\s*月\s*11\s*日|11\s+October\s+2026/i,
    ko: /2026\s*년\s*10\s*월\s*11\s*일|11\s+October\s+2026/i,
    th: /11\s*ตุลาคม\s*2026|11\s+October\s+2026/i
  };
  return patterns[locale];
}

function schemaObjects(value, found = []) {
  if (!value || typeof value !== 'object') return found;
  found.push(value);
  for (const child of Object.values(value)) {
    if (child && typeof child === 'object') schemaObjects(child, found);
  }
  return found;
}

let checked = 0;
for (const root of ['', 'dist/']) {
  for (const { locale, prefix } of editions) {
    for (const route of routes) {
      const file = `${root}${prefix}${route.slice(1)}index.html`;
      const html = fs.readFileSync(file, 'utf8');
      const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
      assert.ok(scripts.length, `${file}: missing JSON-LD`);
      const objects = scripts.flatMap(([, raw]) => schemaObjects(JSON.parse(raw)));
      const articles = objects.filter((item) => item['@type'] === 'Article' && item.dateModified);
      assert.equal(articles.length, 1, `${file}: expected one Article.dateModified`);
      assert.equal(articles[0].dateModified, reviewDate, `${file}: dateModified mismatch`);
      assert.match(html, dateVisibleIn(html, locale), `${file}: visible review date missing or stale`);
      checked += 1;
    }
  }
}

for (const sitemapFile of ['sitemap.xml', 'dist/sitemap.xml']) {
  const sitemap = fs.readFileSync(sitemapFile, 'utf8');
  const records = new Map([...sitemap.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
    .map(([, route, date]) => [route, date]));
  for (const { prefix } of editions) {
    for (const route of routes) {
      const localizedRoute = `/${prefix}${route.slice(1)}`;
      assert.equal(records.get(localizedRoute), reviewDate, `${sitemapFile}: ${localizedRoute} lastmod mismatch`);
    }
  }
}

console.log(`UK Cornwall route-date regression passed: ${checked} source/dist pages across four routes and five locales; all 40 sitemap lastmod values are ${reviewDate}, and page dates match.`);
