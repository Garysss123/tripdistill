import fs from 'node:fs';
import path from 'node:path';
import { allLocales, localeConfigs } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const sitemapPath = path.join(root, 'sitemap.xml');
const lastmod = '2026-08-28';
const newRoutes = [
  ['/china/', 'monthly', '0.9'],
  ['/china/guangzhou/', 'monthly', '0.9'],
  ['/china/shenzhen/', 'monthly', '0.9'],
  ['/china/xiamen-fujian-tulou/', 'monthly', '0.9'],
  ['/china/sanya-hainan/', 'monthly', '0.9'],
  ['/china/guilin-yangshuo/', 'monthly', '0.9'],
  ['/china/changsha/', 'monthly', '0.9'],
  ['/china/wuhan/', 'monthly', '0.9'],
  ['/china/chengdu/', 'monthly', '0.9'],
  ['/china/chongqing/', 'monthly', '0.9'],
  ['/china/kunming/', 'monthly', '0.9'],
  ['/china/dali/', 'monthly', '0.9'],
  ['/china/lijiang-shangri-la/', 'monthly', '0.9'],
  ['/china/zhangjiajie/', 'monthly', '0.9'],
  ['/china/guiyang-guizhou/', 'monthly', '0.9'],
  ['/china/dunhuang-hexi-corridor/', 'monthly', '0.9'],
  ['/china/xinjiang-corridor/', 'monthly', '0.9'],
  ['/china/lhasa-tibetan-plateau/', 'monthly', '0.9'],
  ['/china/datong/', 'monthly', '0.9'],
  ['/china/pingyao/', 'monthly', '0.9'],
  ['/china/luoyang/', 'monthly', '0.9'],
  ['/china/xian/', 'monthly', '0.9'],
  ['/china/harbin/', 'monthly', '0.9'],
  ['/china/hohhot-inner-mongolia/', 'monthly', '0.9'],
  ['/china/suzhou/', 'monthly', '0.9'],
  ['/china/nanjing/', 'monthly', '0.9'],
  ['/china/huangshan/', 'monthly', '0.9'],
  ['/china/qingdao/', 'monthly', '0.9'],
  ['/china/hangzhou/', 'monthly', '0.9'],
  ['/china/hangzhou/west-lake-north-broken-bridge/', 'monthly', '0.8'],
  ['/china/hangzhou/west-lake-south-leifeng/', 'monthly', '0.8'],
  ['/china/hangzhou/lingyin-feilai-peak/', 'monthly', '0.8'],
  ['/china/hangzhou/longjing-nine-creeks/', 'monthly', '0.8'],
  ['/china/hangzhou/grand-canal-gongchen-bridge/', 'monthly', '0.8'],
  ['/china/hangzhou/hefang-southern-song/', 'monthly', '0.8'],
  ['/china/hangzhou/xixi-wetland/', 'monthly', '0.8'],
  ['/china/hangzhou/liangzhu-archaeological-city/', 'monthly', '0.8']
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
