import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parse } from 'parse5';
import { canadaClusters, canadaGuides } from '../data/canada-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const failures = [];
const englishOnly = process.argv.includes('--english-only');
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
const routes = ['/canada/', ...canadaClusters.map((cluster) => `/canada/${cluster.slug}/`), ...canadaGuides.map((guide) => guide.url)];
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');
const check = (condition, message) => { if (!condition) failures.push(message); };
const escape = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

function nodes(html) {
  const out = [];
  const visit = (node) => { out.push(node); for (const child of node.childNodes || []) visit(child); };
  visit(parse(html));
  return out;
}
const attr = (node, name) => node?.attrs?.find((item) => item.name === name)?.value;
const text = (node) => node?.nodeName === '#text' ? node.value : ['script', 'style'].includes(node?.tagName) ? '' : (node?.childNodes || []).map(text).join(' ');
const classHas = (node, name) => (attr(node, 'class') || '').split(/\s+/).includes(name);

check(canadaClusters.length === 18, `Expected 18 Canada hubs, found ${canadaClusters.length}`);
check(canadaGuides.length === 54, `Expected 54 Canada guides, found ${canadaGuides.length}`);
check(routes.length === 73 && new Set(routes).size === 73, 'Expected 73 unique English Canada routes');
check(new Set(canadaClusters.map((item) => item.family)).size === 18, 'Canada hub families must be unique');
check(new Set(canadaGuides.map((item) => item.instrument)).size === 54, 'Canada planning instruments must be unique');
check(new Set(canadaGuides.map((item) => item.image.src)).size === 54, 'Canada guide images must be unique');
check(new Set(canadaGuides.map((item) => item.layout)).size === 25, 'Expected 25 Canada child layout families');

for (const cluster of canadaClusters) {
  check(cluster.guides.length === 3, `${cluster.slug}: expected three child guides`);
  check(cluster.hubIntro.length >= 120 && cluster.stay.length >= 100 && cluster.transfer.length >= 100 && cluster.season.length >= 90 && cluster.fallback.length >= 90, `${cluster.slug}: thin hub planning copy`);
  check(cluster.sources.length >= 3, `${cluster.slug}: insufficient official sources`);
}

for (const guide of canadaGuides) {
  check(guide.summary.length >= 120, `${guide.url}: thin summary`);
  check(guide.access.length >= 100 && guide.tradeoff.length >= 100 && guide.fallback.length >= 90, `${guide.url}: thin operating guidance`);
  check(guide.route.length === 4 && guide.checks.length === 3 && guide.faq.length === 3, `${guide.url}: route/check/FAQ parity`);
  check(guide.image.creator && guide.image.license && guide.image.source && guide.image.remoteSha1, `${guide.url}: incomplete image provenance`);
  check(/^https:\/\/commons\.wikimedia\.org\//.test(guide.image.source), `${guide.url}: image source is not Wikimedia Commons`);
  check(/^(CC0|Public domain|CC BY(?:-SA)? [1-4](?:\.\d)?(?: [a-z]{2})?)$/i.test(guide.image.license), `${guide.url}: unapproved image license ${guide.image.license}`);
  const imageFile = path.join(root, guide.image.src.replace(/^\//, ''));
  const probe = spawnSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0:s=x', imageFile], { encoding: 'utf8' });
  check(probe.status === 0 && probe.stdout.trim() === '1600x1066', `${guide.url}: image missing or not 1600x1066`);
}

const titles = new Set();
const descriptions = new Set();
for (const route of routes) {
  const relative = route.slice(1) + 'index.html';
  check(fs.existsSync(path.join(root, relative)), `${route}: English file missing`);
  if (!fs.existsSync(path.join(root, relative))) continue;
  const html = read(relative);
  const dom = nodes(html);
  const title = text(dom.find((node) => node.tagName === 'title')).trim();
  const description = attr(dom.find((node) => node.tagName === 'meta' && attr(node, 'name') === 'description'), 'content');
  check(title && !titles.has(title), `${route}: missing or duplicate title`); titles.add(title);
  check(description && description.length >= 120 && description.length <= 170 && !descriptions.has(description), `${route}: invalid or duplicate meta description`); descriptions.add(description);
  check(dom.filter((node) => node.tagName === 'h1').length === 1, `${route}: expected exactly one H1`);
  check(html.includes('/css/canada.css?v=20260912-1'), `${route}: Canada CSS missing`);
  check(html.includes('/js/main.js?v=20260911-1'), `${route}: shared JS missing`);
  check(html.includes('"@type":"Article"') && html.includes('"@type":"BreadcrumbList"') && html.includes('"@type":"FAQPage"'), `${route}: required JSON-LD graph missing`);
  check(dom.some((node) => classHas(node, 'ad-slot')), `${route}: AdSense placeholder missing`);
  check(!/\b(?:TODO|lorem ipsum|coming soon|placeholder copy)\b/i.test(text(dom[0])), `${route}: placeholder copy found`);
  for (const node of dom.filter((item) => item.tagName === 'script' && attr(item, 'type') === 'application/ld+json')) {
    try { JSON.parse((node.childNodes || []).map((child) => child.value || '').join('')); } catch { failures.push(`${route}: malformed JSON-LD`); }
  }

  const hub = canadaClusters.find((cluster) => route === `/canada/${cluster.slug}/` || route.startsWith(`/canada/${cluster.slug}/`));
  const credited = route === '/canada/' ? canadaClusters.map((cluster) => cluster.guides[0]) : hub?.guides || [];
  for (const guide of credited) {
    check(html.includes(guide.image.source) && html.includes(escape(guide.image.creator)) && html.includes(guide.image.license), `${route}: visible image credit missing for ${guide.slug}`);
  }

  if (route === '/canada/') {
    check(dom.filter((node) => classHas(node, 'ca-country-card')).length === 18, `${route}: expected 18 hub cards`);
  } else if (canadaGuides.some((guide) => guide.url === route)) {
    check(dom.filter((node) => classHas(node, 'ca-route-step')).length === 4, `${route}: expected four route stages`);
    check(dom.filter((node) => classHas(node, 'ca-related-card')).length === 2, `${route}: expected two related child cards`);
    check(/data-ca-layout="[^"]+"/.test(html) && /data-ca-instrument="[^"]+"/.test(html), `${route}: child layout markers missing`);
  } else {
    check(dom.filter((node) => classHas(node, 'ca-hub-card')).length === 3, `${route}: expected three child cards`);
    check(/data-ca-family="[^"]+"/.test(html), `${route}: hub family marker missing`);
  }

  for (const [language, prefix] of locales) {
    check(html.includes(`hreflang="${language}" href="https://tripdistill.com${prefix}${route}"`), `${route}: missing hreflang ${language}`);
    if (englishOnly && prefix) continue;
    const localizedFile = path.join(root, (prefix + route).slice(1), 'index.html');
    check(fs.existsSync(localizedFile), `${prefix + route}: localized page missing`);
    if (!fs.existsSync(localizedFile)) continue;
    const localized = fs.readFileSync(localizedFile, 'utf8');
    check(localized.includes(`rel="canonical" href="https://tripdistill.com${prefix}${route}"`), `${prefix + route}: localized canonical mismatch`);
    for (const guide of credited) check(localized.includes(guide.image.source) && localized.includes(guide.image.license), `${prefix + route}: localized image provenance missing for ${guide.slug}`);
  }
}

const search = JSON.parse(read('data/search-index.json')).filter((item) => item.url.startsWith('/canada/'));
check(search.length === 73 && new Set(search.map((item) => item.url)).size === 73, 'Canada search index must contain exactly 73 unique routes');
for (const route of routes) check(search.some((item) => item.url === route), `${route}: missing from search index`);

const header = read('components/header.html');
const sidebar = read('components/sidebar.html');
const footer = read('components/footer.html');
const home = read('index.html');
check(header.includes('<!-- CANADA_HEADER_START -->') && header.includes('data-nav-key="canada"'), 'Canada header integration missing');
check(sidebar.includes('<!-- CANADA_NAV_START -->') && sidebar.includes('data-sidebar-id="canada"'), 'Canada sidebar integration missing');
check(footer.includes('<!-- CANADA_FOOTER_START -->'), 'Canada footer integration missing');
check(home.includes('<!-- CANADA_HOME_START -->') && home.includes('<!-- CANADA_HOME_CREDIT_START -->'), 'Canada home card or credit missing');
check(read('scripts/build-dist.mjs').includes("'canada'"), 'Canada absent from build allowlist');

if (fs.existsSync(path.join(root, 'sitemap.xml'))) {
  const sitemap = read('sitemap.xml');
  for (const route of routes) check(sitemap.includes(`<loc>https://tripdistill.com${route}</loc><lastmod>2026-09-12</lastmod>`), `${route}: sitemap missing or stale`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  console.error(`Canada audit: ${failures.length} failure(s).`);
  process.exitCode = 1;
} else {
  console.log(`Canada audit passed: 18 hubs, 54 focused guides, 73 English / 365 five-language routes, 54 credited images and 25 child layout families${englishOnly ? ' (localized file checks deferred)' : ''}.`);
}
