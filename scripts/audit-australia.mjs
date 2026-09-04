import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { australiaClusters, australiaGuides } from '../data/australia-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const problems = [];
const englishOnly = process.argv.includes('--english-only');
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
const lastmod = '2026-09-04';
const expectedCss = '/css/australia.css?v=20260904-1';
const expectedFieldCss = '/css/australia-field.css?v=20260904-1';
const expectedSiteCss = '/css/site.css?v=20260904-1';
const expectedScript = '/js/main.js?v=20260904-1';
const suspiciousLocalizedCopy = {
  'zh-Hant': ['作業系統', '熱處理', '自動城市漫步', '大陸旅行田野旅行', '渡輪軸承', '傳統業主', '瀑布的體積', '遠端停靠點', '保護回程'],
  ja: ['undefined', '加熱処理', 'バーンガロー', 'バーローバラ', 'マニリー', 'フェリーターム', '帰交通路', '軽鉄', 'ロックズ', '運行用の倉庫', '法的出口', '衝浪', 'sheltered', '1日間', '**'],
  ko: ['운영 체제', '자동적으로', '서핑을 즐기기 위한', '바라봉고', '바라보로', '가열 처리', '런던 국립공원', '법적인 주차장', '세틀 마을']
};

function countTokens(value, pattern) {
  const tokens = String(value).match(pattern) || [];
  return new Map(tokens.map((token) => [token, tokens.filter((item) => item === token).length]));
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function routeFile(route, prefix = '') {
  return path.join(root, `${prefix}${route}`.replace(/^\//, ''), 'index.html');
}

function walkHtml(directory) {
  if (!fs.existsSync(directory)) return [];
  const results = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) results.push(...walkHtml(absolute));
    else if (entry.isFile() && entry.name === 'index.html') results.push(absolute);
  }
  return results;
}

function text(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:amp|quot|#39|apos);/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function wordCount(html) {
  return text(html).split(/\s+/).filter(Boolean).length;
}

function count(html, pattern) {
  return (html.match(pattern) || []).length;
}

function escapedCreator(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}

const expectedEnglishRoutes = [
  '/australia/',
  ...australiaClusters.map((cluster) => `/australia/${cluster.slug}/`),
  ...australiaGuides.map((guide) => guide.url)
];
const expectedFiles = new Set(expectedEnglishRoutes.map((route) => path.resolve(routeFile(route))));
const actualFiles = new Set(walkHtml(path.join(root, 'australia')).map((file) => path.resolve(file)));
for (const file of expectedFiles) if (!actualFiles.has(file)) problems.push(`Missing English Australia route: ${path.relative(root, file)}`);
for (const file of actualFiles) if (!expectedFiles.has(file)) problems.push(`Orphan English Australia route: ${path.relative(root, file)}`);

if (australiaClusters.length !== 16) problems.push(`Expected 16 Australia hubs, found ${australiaClusters.length}`);
if (australiaGuides.length !== 80) problems.push(`Expected 80 Australia field guides, found ${australiaGuides.length}`);
if (new Set(australiaClusters.map((cluster) => cluster.family)).size !== 16) problems.push('Australia hubs must use 16 distinct family markers');
if (new Set(australiaGuides.map((guide) => guide.instrument)).size !== 80) problems.push('Australia field guides must use 80 distinct instrument markers');
if (new Set(australiaGuides.map((guide) => guide.image.src)).size !== 80) problems.push('Australia image paths are not unique');
if (new Set(australiaGuides.map((guide) => guide.image.commonsTitle)).size !== 80) problems.push('Australia Commons source files are not unique');

for (const guide of australiaGuides) {
  if (!guide.image.source.startsWith('https://commons.wikimedia.org/')) problems.push(`${guide.url}: image source is not Wikimedia Commons`);
  if (!/^(?:CC0|Public domain|CC BY(?:-SA)?)/i.test(guide.image.license)) problems.push(`${guide.url}: unsupported image license ${guide.image.license}`);
  if (!guide.image.creator || !guide.image.remoteSha1) problems.push(`${guide.url}: incomplete image provenance`);
  const local = path.join(root, guide.image.src.replace(/^\//, ''));
  if (!fs.existsSync(local)) {
    problems.push(`${guide.url}: missing local image ${guide.image.src}`);
  } else {
    const probe = spawnSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0:s=x', local], { encoding: 'utf8' });
    if (probe.status !== 0 || probe.stdout.trim() !== '1600x1066') problems.push(`${guide.url}: local image is not a valid 1600x1066 WebP`);
  }
}

const titles = new Map();
const descriptions = new Map();
const bodies = new Map();
for (const route of expectedEnglishRoutes) {
  const file = routeFile(route);
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, 'utf8');
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() || '';
  const description = html.match(/<meta name="description" content="([^"]*)">/i)?.[1]?.trim() || '';
  const normalizedBody = text(html).replace(/\b\d+\b/g, '#').toLowerCase();
  if (titles.has(title)) problems.push(`${route}: duplicate title also used by ${titles.get(title)}`); else titles.set(title, route);
  if (descriptions.has(description)) problems.push(`${route}: duplicate meta description also used by ${descriptions.get(description)}`); else descriptions.set(description, route);
  if (bodies.has(normalizedBody)) problems.push(`${route}: exact duplicate body also used by ${bodies.get(normalizedBody)}`); else bodies.set(normalizedBody, route);
  if (description.length < 120 || description.length > 170) problems.push(`${route}: English meta description length ${description.length}`);
  if (!html.includes(expectedCss) || !html.includes(expectedSiteCss) || !html.includes(expectedScript)) problems.push(`${route}: stale or missing Australia/global asset version`);
  if (!html.includes('"@type":"Article"') || html.includes('"@type":"TravelGuide"')) problems.push(`${route}: invalid Article structured data`);
  if (/\b(?:TODO|lorem ipsum|coming soon|placeholder copy)\b/i.test(html)) problems.push(`${route}: placeholder content found`);
}

const countryHtml = read('australia/index.html');
if (count(countryHtml, /class="au-country-card"/g) !== 16) problems.push('Australia country page must contain 16 regional cards');
if (wordCount(countryHtml) < 520) problems.push(`Australia country page is thin (${wordCount(countryHtml)} words)`);
for (const cluster of australiaClusters) {
  const route = `/australia/${cluster.slug}/`;
  const html = read(path.relative(root, routeFile(route)));
  if (count(html, /class="au-hub-card"/g) !== 5) problems.push(`${route}: must contain five field-guide cards`);
  if (!html.includes(`data-au-family="${cluster.family}"`)) problems.push(`${route}: family marker is missing`);
  if (wordCount(html) < 470) problems.push(`${route}: regional hub is thin (${wordCount(html)} words)`);
  for (const guide of cluster.guides) {
    if (!html.includes(`href="${guide.url}"`)) problems.push(`${route}: missing field-guide link ${guide.url}`);
    if (!html.includes(guide.image.source) || !html.includes(escapedCreator(guide.image.creator)) || !html.includes(guide.image.license)) problems.push(`${route}: missing visible provenance for ${guide.image.src}`);
  }
  for (const guide of cluster.guides) {
    const page = read(path.relative(root, routeFile(guide.url)));
    if (!page.includes(expectedFieldCss)) problems.push(`${guide.url}: missing field stylesheet`);
    if (!page.includes(`data-au-family="${cluster.family}"`) || !page.includes(`data-au-instrument="${guide.instrument}"`)) problems.push(`${guide.url}: family or instrument marker is missing`);
    if (count(page, /class="au-route-step"/g) !== 4 || count(page, /class="au-check"/g) !== 3 || count(page, /class="au-related-card"/g) !== 4) problems.push(`${guide.url}: route/check/related structure mismatch`);
    if (wordCount(page) < 430) problems.push(`${guide.url}: field guide is thin (${wordCount(page)} words)`);
    for (const sibling of cluster.guides) {
      if (!page.includes(sibling.image.source) || !page.includes(escapedCreator(sibling.image.creator)) || !page.includes(sibling.image.license)) problems.push(`${guide.url}: missing visible sibling image provenance ${sibling.image.src}`);
    }
  }
}

const sitemap = read('sitemap.xml');
let australiaSitemapCount = 0;
for (const route of expectedEnglishRoutes) {
  for (const [, prefix] of locales) {
    const localized = prefix + route;
    const record = `<url><loc>https://tripdistill.com${localized}</loc><lastmod>${lastmod}</lastmod>`;
    if (!sitemap.includes(record)) problems.push(`Sitemap missing current Australia record: ${localized}`);
    else australiaSitemapCount += 1;
  }
}
if (australiaSitemapCount !== 485) problems.push(`Expected 485 Australia sitemap records, found ${australiaSitemapCount}`);

if (!englishOnly) {
  for (const [locale, prefix] of locales) {
    const localizedPages = [];
    for (const route of expectedEnglishRoutes) {
      const file = routeFile(route, prefix);
      if (!fs.existsSync(file)) problems.push(`${locale}: missing localized Australia route ${prefix + route}`);
      else if (locale !== 'en') localizedPages.push(fs.readFileSync(file, 'utf8'));
    }
    if (locale !== 'en') {
      const batchDirectory = path.join(root, 'data', 'i18n', 'reviewed', locale);
      for (const name of fs.readdirSync(batchDirectory).filter((file) => /^30.*\.json$/.test(file)).sort()) {
        const batch = JSON.parse(fs.readFileSync(path.join(batchDirectory, name), 'utf8'));
        for (const [source, target] of Object.entries(batch.translations || {})) {
          const sourceYears = countTokens(source, /\b(?:19|20)\d{2}\b/g);
          const targetYears = countTokens(target, /\b(?:19|20)\d{2}\b/g);
          for (const [year, occurrences] of targetYears) {
            if (occurrences > (sourceYears.get(year) || 0)) problems.push(`${locale}/${name}: year ${year} was added to translation: ${source.slice(0, 80)}`);
          }
          if (!source.includes('\n') && target.includes('\n')) problems.push(`${locale}/${name}: translation adds an unsolicited line break: ${source.slice(0, 80)}`);
          if (!source.includes('**') && target.includes('**')) problems.push(`${locale}/${name}: translation adds Markdown emphasis: ${source.slice(0, 80)}`);
        }
      }
      const combined = localizedPages.join('\n');
      for (const phrase of suspiciousLocalizedCopy[locale] || []) {
        if (combined.includes(phrase)) problems.push(`${locale}: suspicious literal or generated copy remains: ${phrase}`);
      }
    }
  }
}

const search = JSON.parse(read('data/search-index.json'));
const australiaSearch = search.filter((record) => record.url.startsWith('/australia/'));
if (australiaSearch.length !== 97) problems.push(`Expected 97 Australia search records, found ${australiaSearch.length}`);
if (new Set(australiaSearch.map((record) => record.url)).size !== 97) problems.push('Australia search URLs are not unique');
for (const route of expectedEnglishRoutes) if (!australiaSearch.some((record) => record.url === route)) problems.push(`Search index missing ${route}`);

const header = read('components/header.html');
const sidebar = read('components/sidebar.html');
const footer = read('components/footer.html');
const home = read('index.html');
if (!header.includes('href="/australia/"') || !header.includes('data-nav-key="australia"')) problems.push('Header is missing Australia navigation');
if (!sidebar.includes('<!-- AUSTRALIA_NAV_START -->') || !sidebar.includes('<!-- AUSTRALIA_CHAPTERS_START -->')) problems.push('Sidebar is missing Australia markers');
if (count(sidebar, /data-australia-chapter=/g) !== 16) problems.push('Sidebar must contain 16 Australia field groups');
if (!footer.includes('<!-- AUSTRALIA_FOOTER_START -->')) problems.push('Footer is missing Australia links');
if (!home.includes('<!-- AUSTRALIA_HOME_CARD_START -->') || !home.includes('<!-- AUSTRALIA_HOME_CREDIT_START -->')) problems.push('Homepage is missing Australia card or credit');

if (problems.length) {
  console.error(`Australia audit failed with ${problems.length} problem(s):`);
  for (const problem of problems.slice(0, 200)) console.error(`- ${problem}`);
  if (problems.length > 200) console.error(`- ...and ${problems.length - 200} more`);
  process.exitCode = 1;
} else {
  console.log(`Australia audit passed: 16 hubs, 80 field guides, 97 English routes, 485 five-language routes, 80 unique verified images, 97 search records.`);
}
