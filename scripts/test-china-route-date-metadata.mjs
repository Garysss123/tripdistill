import assert from 'node:assert/strict';
import fs from 'node:fs';

const routes = [
  ...[
    '/china/datong/',
    '/china/luoyang/',
    '/china/pingyao/',
    '/china/xian/',
    '/china/beijing/central-axis-forbidden-city/',
    '/china/beijing/jingshan-beihai/',
    '/china/beijing/shichahai-drum-tower/',
    '/china/hangzhou/lingyin-feilai-peak/',
    '/china/hangzhou/longjing-nine-creeks/',
    '/china/hangzhou/xixi-wetland/',
    '/china/shanghai/peoples-square-museums/',
    '/china/shanghai/yuyuan-old-city/',
    '/china/shanghai/the-bund-huangpu/',
  ].map((route) => ({ route, reviewDate: '2026-10-09' })),
  ...[
    '/china/hangzhou/west-lake-north-broken-bridge/',
    '/china/hangzhou/west-lake-south-leifeng/',
    '/china/hangzhou/hefang-southern-song/',
    '/china/beijing/temple-of-heaven-qianmen/',
    '/china/beijing/yonghe-guozijian/',
    '/china/beijing/798-chaoyang/',
    '/china/beijing/mutianyu-great-wall/',
    '/china/nanjing/',
    '/china/suzhou/',
    '/china/hangzhou/grand-canal-gongchen-bridge/',
    '/china/hangzhou/liangzhu-archaeological-city/',
    '/china/guangzhou/',
    '/china/shenzhen/',
    '/china/xiamen-fujian-tulou/',
    '/china/guilin-yangshuo/',
  ].map((route) => ({ route, reviewDate: '2026-10-10' })),
];
const editions = [
  { locale: 'en', prefix: '' },
  { locale: 'zh-Hant', prefix: 'zh/' },
  { locale: 'ja', prefix: 'ja/' },
  { locale: 'ko', prefix: 'ko/' },
  { locale: 'th', prefix: 'th/' },
];

function visibleDatePattern(date, locale) {
  const [, year, month, day] = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (month !== '10') throw new Error(`Unsupported review month in ${date}`);
  if (locale === 'en') return new RegExp(`(?:${Number(day)}\\s+October\\s+${year}|October\\s+${Number(day)},?\\s+${year})`, 'i');
  if (locale === 'zh-Hant' || locale === 'ja') return new RegExp(`${year}\\s*年\\s*10\\s*月\\s*${Number(day)}\\s*日`);
  if (locale === 'ko') return new RegExp(`${year}\\s*년\\s*10\\s*월\\s*${Number(day)}\\s*일`);
  if (locale === 'th') return new RegExp(`${Number(day)}\\s*ตุลาคม\\s*${year}`);
  throw new Error(`Unsupported locale: ${locale}`);
}

function schemaObjects(value, found = []) {
  if (!value || typeof value !== 'object') return found;
  found.push(value);
  for (const child of Object.values(value)) {
    if (child && typeof child === 'object') schemaObjects(child, found);
  }
  return found;
}

const roots = ['', 'dist/'];
let checked = 0;
for (const root of roots) {
  for (const { route, reviewDate } of routes) {
    for (const edition of editions) {
      const file = `${root}${edition.prefix}${route.slice(1)}index.html`;
      const html = fs.readFileSync(file, 'utf8');
      const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
      assert.ok(scripts.length, `${file}: missing JSON-LD`);
      const schemas = scripts.map(([, raw]) => JSON.parse(raw));
      const objects = schemas.flatMap((schema) => schemaObjects(schema));
      const pages = objects.filter((item) => item['@type'] === 'WebPage' && item.dateModified);
      assert.equal(pages.length, 1, `${file}: expected one WebPage.dateModified`);
      assert.equal(pages[0].dateModified, reviewDate, `${file}: dateModified mismatch`);
      assert.equal(
        objects.some((item) => Object.hasOwn(item, 'datePublished')),
        false,
        `${file}: datePublished must remain absent and unmodified`,
      );

      const sources = html.match(/<section class="section sources"[\s\S]*?<\/section>/)?.[0];
      assert.ok(sources, `${file}: missing visible sources/review section`);
      const visible = sources
        .replace(/<script[\s\S]*?<\/script>/g, ' ')
        .replace(/<style[\s\S]*?<\/style>/g, ' ')
        .replace(/<[^>]*>/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ');
      assert.match(visible, visibleDatePattern(reviewDate, edition.locale), `${file}: visible review date mismatch`);
      checked += 1;
    }
  }
}

for (const sitemapFile of ['sitemap.xml', 'dist/sitemap.xml']) {
  const sitemap = fs.readFileSync(sitemapFile, 'utf8');
  const records = new Map([...sitemap.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)]
    .map(([, route, date]) => [route, date]));
  for (const { route, reviewDate } of routes) {
    for (const edition of editions) {
      const localizedRoute = `/${edition.prefix}${route.slice(1)}`;
      assert.equal(records.get(localizedRoute), reviewDate, `${sitemapFile}: ${localizedRoute} lastmod mismatch`);
    }
  }
}

console.log(`China route date regression passed: ${checked} documents (${routes.length} routes × ${editions.length} editions in source and dist); all 140 reviewed sitemap entries match (65 at 2026-10-09, 75 at 2026-10-10), visible dates match, and datePublished remains absent.`);
