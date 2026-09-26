import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parse } from 'parse5';
import { italyClusters, italyGuides } from '../data/italy-guides.mjs';
import { italyLayoutFamilies } from '../data/italy-guide-builder.mjs';

const root = path.resolve(import.meta.dirname, '..');
const failures = [];
const englishOnly = process.argv.includes('--english-only');
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
const routes = ['/italy/', ...italyClusters.map((cluster) => `/italy/${cluster.slug}/`), ...italyGuides.map((guide) => guide.url)];
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');
const check = (condition, message) => { if (!condition) failures.push(message); };
const escape = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');

function creatorIdentity(value) {
  const creator = String(value).trim();
  const originalUploader = creator.match(/^The original uploader was\s+(.+?)\s+at\s+/i);
  if (originalUploader) return originalUploader[1].trim();
  const municipality = creator.match(/^Municipality of\s+(.+)$/i);
  if (municipality) return municipality[1].trim();
  return creator.split(/\s+from\s+|,\s*https?:|\s+\(\s*talk\s*\)/i)[0].trim();
}

function nodes(html) {
  const out = [];
  const visit = (node) => { out.push(node); for (const child of node.childNodes || []) visit(child); };
  visit(parse(html));
  return out;
}
const attr = (node, name) => node?.attrs?.find((item) => item.name === name)?.value;
const text = (node) => node?.nodeName === '#text' ? node.value : ['script', 'style'].includes(node?.tagName) ? '' : (node?.childNodes || []).map(text).join(' ');
const classHas = (node, name) => (attr(node, 'class') || '').split(/\s+/).includes(name);

check(italyClusters.length === 20, `Expected 20 Italy hubs, found ${italyClusters.length}`);
check(italyGuides.length === 60, `Expected 60 Italy guides, found ${italyGuides.length}`);
check(routes.length === 81 && new Set(routes).size === 81, 'Expected 81 unique English Italy routes');
check(new Set(italyClusters.map((item) => item.family)).size === 20, 'Italy hub families must be unique');
check(new Set(italyGuides.map((item) => item.instrument)).size === 60, 'Italy planning instruments must be unique');
check(new Set(italyGuides.map((item) => item.layout)).size === 60, 'Italy child layout labels must be unique');
check(new Set(italyGuides.map((item) => item.image.src)).size === 60, 'Italy guide images must be unique');
check(new Set(italyGuides.map((item) => item.imageQuery)).size === 60, 'Italy image queries must be unique');
check(new Set(italyGuides.map((item) => item.imageAlt)).size === 60, 'Italy image alternative text must be unique');

const usedStructures = new Set(italyGuides.map((item) => item.structure));
check(usedStructures.size === 16, `Expected all 16 Italy structure families, found ${usedStructures.size}`);
for (const structure of italyLayoutFamilies) check(usedStructures.has(structure), `Italy structure family is unused: ${structure}`);
for (const structure of usedStructures) check(italyLayoutFamilies.has(structure), `Italy guide uses unapproved structure family: ${structure}`);

for (const [field, label] of [
  ['hubIntro', 'hub introductions'], ['stay', 'hub stay strategies'], ['transfer', 'hub transfer strategies'],
  ['season', 'hub season guidance'], ['fallback', 'hub fallbacks']
]) check(new Set(italyClusters.map((item) => item[field])).size === italyClusters.length, `Italy ${label} must not be cloned across hubs`);

for (const [field, label] of [
  ['purpose', 'guide purposes'], ['summary', 'guide summaries'], ['access', 'guide access guidance'],
  ['tradeoff', 'guide trade-offs'], ['fallback', 'guide fallbacks'], ['verify', 'guide verification guidance']
]) check(new Set(italyGuides.map((item) => item[field])).size === italyGuides.length, `Italy ${label} must not be cloned across child guides`);

check(new Set(italyGuides.map((item) => JSON.stringify(item.choices))).size === 60, 'Italy three-way choice sets must be unique per child guide');
check(new Set(italyGuides.map((item) => JSON.stringify(item.route))).size === 60, 'Italy four-stage routes must be unique per child guide');
check(new Set(italyGuides.map((item) => JSON.stringify(item.watch))).size === 60, 'Italy failure-point sets must be unique per child guide');

for (const cluster of italyClusters) {
  check(cluster.guides.length === 3, `${cluster.slug}: expected three child guides`);
  check(cluster.hubIntro.length >= 180, `${cluster.slug}: hub introduction below editorial floor`);
  check(cluster.stay.length >= 110 && cluster.transfer.length >= 125 && cluster.season.length >= 110 && cluster.fallback.length >= 100, `${cluster.slug}: thin hub operating model`);
  check(cluster.sources.length >= 3, `${cluster.slug}: insufficient official sources`);
}

for (const guide of italyGuides) {
  check(guide.purpose.length >= 120, `${guide.url}: thin independent reader purpose`);
  check(guide.summary.length >= 120, `${guide.url}: thin summary`);
  check(guide.access.length >= 130 && guide.tradeoff.length >= 120 && guide.fallback.length >= 110, `${guide.url}: thin operating guidance`);
  check(guide.duration.length >= 80 && guide.combine.length >= 85 && guide.verify.length >= 95, `${guide.url}: thin duration/combine/verification guidance`);
  check(guide.choices.length === 3 && guide.route.length === 4 && guide.watch.length === 3 && guide.faq.length === 3, `${guide.url}: choice/route/watch/FAQ parity`);
  check(guide.sources.length >= 2 && guide.sources.every(([url, label]) => /^https:\/\//.test(url) && label), `${guide.url}: incomplete route-specific official sources`);
  check(guide.image.creator && guide.image.license && guide.image.source && guide.image.remoteSha1 && guide.image.editNote, `${guide.url}: incomplete image provenance`);
  check(guide.image.creator.length <= 80, `${guide.url}: image creator attribution is not normalized for readable display`);
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
  const pageText = text(dom[0]).replace(/\s+/g, ' ').trim();
  const title = text(dom.find((node) => node.tagName === 'title')).trim();
  const description = attr(dom.find((node) => node.tagName === 'meta' && attr(node, 'name') === 'description'), 'content');
  check(title && !titles.has(title), `${route}: missing or duplicate title`); titles.add(title);
  check(description && description.length >= 120 && description.length <= 170 && !descriptions.has(description), `${route}: invalid or duplicate meta description`); descriptions.add(description);
  check(dom.filter((node) => node.tagName === 'h1').length === 1, `${route}: expected exactly one H1`);
  const depth = route.split('/').filter(Boolean).length;
  const floor = route === '/italy/' ? 7600 : depth === 2 ? 6500 : 7000;
  check(pageText.length >= floor, `${route}: rendered editorial copy below Italy floor (${pageText.length} < ${floor})`);
  check(html.includes('/css/italy.css?v=20260926-1'), `${route}: Italy CSS missing`);
  check(html.includes('/css/site.css?v=20260926-1'), `${route}: shared CSS cache key missing or stale`);
  check(html.includes('/js/main.js?v=20260911-1'), `${route}: shared JS missing`);
  check(html.includes('"@type":"BreadcrumbList"') && html.includes('"@type":"FAQPage"'), `${route}: breadcrumb or FAQ JSON-LD missing`);
  check(route === '/italy/' ? html.includes('"@type":"WebPage"') : html.includes('"@type":"Article"'), `${route}: page-level JSON-LD type missing`);
  check(dom.some((node) => classHas(node, 'ad-slot')), `${route}: AdSense placeholder missing`);
  check(!/\b(?:TODO|lorem ipsum|coming soon|placeholder copy)\b/i.test(pageText), `${route}: placeholder copy found`);
  for (const node of dom.filter((item) => item.tagName === 'script' && attr(item, 'type') === 'application/ld+json')) {
    try { JSON.parse((node.childNodes || []).map((child) => child.value || '').join('')); } catch { failures.push(`${route}: malformed JSON-LD`); }
  }

  const hub = italyClusters.find((cluster) => route === `/italy/${cluster.slug}/` || route.startsWith(`/italy/${cluster.slug}/`));
  const credited = route === '/italy/' ? italyClusters.map((cluster) => cluster.guides[0]) : hub?.guides || [];
  for (const guide of credited) check(html.includes(guide.image.source) && html.includes(escape(guide.image.creator)) && html.includes(guide.image.license), `${route}: visible image credit missing for ${guide.slug}`);
  if (route === '/italy/') {
    check(dom.filter((node) => classHas(node, 'it-country-card')).length === 20, `${route}: expected 20 hub cards`);
    check(dom.filter((node) => classHas(node, 'it-network-grid')).length === 1, `${route}: peninsula operating model missing`);
    check(html.includes('<strong>16</strong><span>decision structures</span>'), `${route}: structure-family inventory missing`);
  } else if (italyGuides.some((guide) => guide.url === route)) {
    const guide = italyGuides.find((item) => item.url === route);
    check(html.includes('/css/italy-field.css?v=20260926-1'), `${route}: Italy field CSS missing`);
    check(dom.filter((node) => classHas(node, 'it-purpose')).length === 1, `${route}: independent purpose panel missing`);
    check(dom.filter((node) => classHas(node, 'it-decision-instrument')).length === 1, `${route}: decision instrument missing`);
    check((html.match(/<li><b>0[1-4]<\/b><small>/g) || []).length === 4, `${route}: four route stages missing`);
    check(dom.filter((node) => classHas(node, 'it-breakpoints')).length === 1, `${route}: failure-point section missing`);
    check(dom.filter((node) => classHas(node, 'it-live-desk')).length === 1, `${route}: near-claim official-source panel missing`);
    check(dom.filter((node) => classHas(node, 'it-related')).length === 1, `${route}: related-guide section missing`);
    check(html.includes(`data-it-family="${escape(guide.family)}"`), `${route}: guide family marker missing`);
    check(html.includes(`data-it-layout="${escape(guide.layout)}"`), `${route}: guide layout marker missing`);
    check(html.includes(`data-it-structure="${escape(guide.structure)}"`), `${route}: guide structure marker missing`);
    check(html.includes(`data-it-instrument="${escape(guide.instrument)}"`), `${route}: guide instrument marker missing`);
    check(html.includes(`it-structure-${escape(guide.structure)}`), `${route}: structure renderer class missing`);
    for (const [url] of guide.sources) check(html.includes(url), `${route}: route-specific official source missing from rendered page`);
  } else {
    check(dom.filter((node) => classHas(node, 'it-guide-card')).length === 3, `${route}: expected three child cards`);
    check(/data-it-family="[^"]+"/.test(html) && /data-it-hub-variant="[1-8]"/.test(html), `${route}: hub family/variant markers missing`);
  }

  for (const [language, prefix] of locales) {
    check(html.includes(`hreflang="${language}" href="https://tripdistill.com${prefix}${route}"`), `${route}: missing hreflang ${language}`);
    if (englishOnly && prefix) continue;
    const localizedFile = path.join(root, (prefix + route).slice(1), 'index.html');
    check(fs.existsSync(localizedFile), `${prefix + route}: localized page missing`);
    if (!fs.existsSync(localizedFile)) continue;
    const localized = fs.readFileSync(localizedFile, 'utf8');
    check(localized.includes(`rel="canonical" href="https://tripdistill.com${prefix}${route}"`), `${prefix + route}: localized canonical mismatch`);
    for (const guide of credited) {
      const identity = creatorIdentity(guide.image.creator);
      check(localized.includes(guide.image.source) && localized.includes(guide.image.license) && identity.length >= 3 && localized.includes(escape(identity)), `${prefix + route}: localized image provenance missing for ${guide.slug}`);
    }
  }
}

const search = JSON.parse(read('data/search-index.json')).filter((item) => item.url.startsWith('/italy/'));
check(search.length === 81 && new Set(search.map((item) => item.url)).size === 81, 'Italy search index must contain exactly 81 unique routes');
for (const route of routes) check(search.some((item) => item.url === route), `${route}: missing from search index`);
const header = read('components/header.html');
const sidebar = read('components/sidebar.html');
const footer = read('components/footer.html');
const home = read('index.html');
check(header.includes('<!-- ITALY_HEADER_START -->') && header.includes('data-nav-key="italy"'), 'Italy header integration missing');
check(sidebar.includes('<!-- EUROPE_NAV_START -->') && sidebar.includes('<!-- ITALY_NAV_START -->') && sidebar.includes('data-sidebar-id="italy"'), 'Europe/Italy sidebar integration missing');
check(sidebar.includes('data-sidebar-id="united-kingdom"') && sidebar.includes('data-sidebar-id="france"') && sidebar.includes('data-sidebar-id="switzerland"'), 'United Kingdom, France or Switzerland navigation was not preserved');
check(footer.includes('<!-- ITALY_FOOTER_START -->'), 'Italy footer integration missing');
check(home.includes('<!-- ITALY_HOME_START -->') && home.includes('<!-- ITALY_HOME_CREDIT_START -->'), 'Italy home card or credit missing');
check(read('scripts/build-dist.mjs').includes("'italy'"), 'Italy absent from build allowlist');
if (fs.existsSync(path.join(root, 'sitemap.xml'))) {
  const sitemap = read('sitemap.xml');
  for (const route of routes) check(sitemap.includes(`<loc>https://tripdistill.com${route}</loc><lastmod>2026-09-26</lastmod>`), `${route}: sitemap missing or stale`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  console.error(`Italy audit: ${failures.length} failure(s).`);
  process.exitCode = 1;
} else {
  console.log(`Italy audit passed: 20 hubs, 60 focused guides, 81 English / 405 five-language routes, 60 credited images, 60 unique planning instruments and layouts, and 16 rendered structure families${englishOnly ? ' (localized file checks deferred)' : ''}.`);
}
