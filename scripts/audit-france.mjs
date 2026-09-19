import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parse } from 'parse5';
import { franceClusters, franceGuides } from '../data/france-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const failures = [];
const englishOnly = process.argv.includes('--english-only');
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
const routes = ['/france/', ...franceClusters.map((cluster) => `/france/${cluster.slug}/`), ...franceGuides.map((guide) => guide.url)];
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');
const check = (condition, message) => { if (!condition) failures.push(message); };
const escape = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');

function nodes(html) {
  const out = [];
  const visit = (node) => { out.push(node); for (const child of node.childNodes || []) visit(child); };
  visit(parse(html));
  return out;
}
const attr = (node, name) => node?.attrs?.find((item) => item.name === name)?.value;
const text = (node) => node?.nodeName === '#text' ? node.value : ['script', 'style'].includes(node?.tagName) ? '' : (node?.childNodes || []).map(text).join(' ');
const classHas = (node, name) => (attr(node, 'class') || '').split(/\s+/).includes(name);

check(franceClusters.length === 20, `Expected 20 France hubs, found ${franceClusters.length}`);
check(franceGuides.length === 60, `Expected 60 France guides, found ${franceGuides.length}`);
check(routes.length === 81 && new Set(routes).size === 81, 'Expected 81 unique English France routes');
check(new Set(franceClusters.map((item) => item.family)).size === 20, 'France hub families must be unique');
check(new Set(franceGuides.map((item) => item.instrument)).size === 60, 'France planning instruments must be unique');
check(new Set(franceGuides.map((item) => item.layout)).size === 60, 'France child layout labels must be unique');
check(new Set(franceGuides.map((item) => item.image.src)).size === 60, 'France guide images must be unique');

for (const [field, label] of [
  ['hubIntro', 'hub introductions'], ['stay', 'hub stay strategies'], ['transfer', 'hub transfer strategies'],
  ['season', 'hub season guidance'], ['fallback', 'hub fallbacks']
]) check(new Set(franceClusters.map((item) => item[field])).size === franceClusters.length, `France ${label} must not be cloned across hubs`);

for (const [field, label] of [
  ['purpose', 'guide purposes'], ['summary', 'guide summaries'], ['access', 'guide access guidance'],
  ['tradeoff', 'guide trade-offs'], ['fallback', 'guide fallbacks'], ['verify', 'guide verification guidance']
]) check(new Set(franceGuides.map((item) => item[field])).size === franceGuides.length, `France ${label} must not be cloned across child guides`);

check(new Set(franceGuides.map((item) => JSON.stringify(item.choices))).size === 60, 'France three-way choice sets must be unique per child guide');
check(new Set(franceGuides.map((item) => JSON.stringify(item.route))).size === 60, 'France four-stage routes must be unique per child guide');
check(new Set(franceGuides.map((item) => JSON.stringify(item.watch))).size === 60, 'France failure-point sets must be unique per child guide');

for (const cluster of franceClusters) {
  check(cluster.guides.length === 3, `${cluster.slug}: expected three child guides`);
  check(cluster.hubIntro.length >= 180, `${cluster.slug}: hub introduction below editorial floor`);
  check(cluster.stay.length >= 110 && cluster.transfer.length >= 125 && cluster.season.length >= 110 && cluster.fallback.length >= 100, `${cluster.slug}: thin hub operating model`);
  check(cluster.sources.length >= 3, `${cluster.slug}: insufficient official sources`);
}

for (const guide of franceGuides) {
  check(guide.purpose.length >= 120, `${guide.url}: thin independent reader purpose`);
  check(guide.summary.length >= 120, `${guide.url}: thin summary`);
  check(guide.access.length >= 130 && guide.tradeoff.length >= 120 && guide.fallback.length >= 110, `${guide.url}: thin operating guidance`);
  check(guide.duration.length >= 80 && guide.combine.length >= 85 && guide.verify.length >= 95, `${guide.url}: thin duration/combine/verification guidance`);
  check(guide.choices.length === 3 && guide.route.length === 4 && guide.watch.length === 3 && guide.faq.length === 3, `${guide.url}: choice/route/watch/FAQ parity`);
  check(guide.sources.length >= 2 && guide.sources.every(([url, label]) => /^https:\/\//.test(url) && label), `${guide.url}: incomplete route-specific official sources`);
  check(guide.image.creator && guide.image.license && guide.image.source && guide.image.remoteSha1 && guide.image.editNote, `${guide.url}: incomplete image provenance`);
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
  const floor = route === '/france/' ? 7600 : depth === 2 ? 6500 : 7000;
  check(pageText.length >= floor, `${route}: rendered editorial copy below France floor (${pageText.length} < ${floor})`);
  check(html.includes('/css/france.css?v=20260919-1'), `${route}: France CSS missing`);
  check(html.includes('/js/main.js?v=20260911-1'), `${route}: shared JS missing`);
  check(html.includes('"@type":"BreadcrumbList"') && html.includes('"@type":"FAQPage"'), `${route}: breadcrumb or FAQ JSON-LD missing`);
  check(route === '/france/' ? html.includes('"@type":"WebPage"') : html.includes('"@type":"Article"'), `${route}: page-level JSON-LD type missing`);
  check(dom.some((node) => classHas(node, 'ad-slot')), `${route}: AdSense placeholder missing`);
  check(!/\b(?:TODO|lorem ipsum|coming soon|placeholder copy)\b/i.test(pageText), `${route}: placeholder copy found`);
  for (const node of dom.filter((item) => item.tagName === 'script' && attr(item, 'type') === 'application/ld+json')) {
    try { JSON.parse((node.childNodes || []).map((child) => child.value || '').join('')); } catch { failures.push(`${route}: malformed JSON-LD`); }
  }

  const hub = franceClusters.find((cluster) => route === `/france/${cluster.slug}/` || route.startsWith(`/france/${cluster.slug}/`));
  const credited = route === '/france/' ? franceClusters.map((cluster) => cluster.guides[0]) : hub?.guides || [];
  for (const guide of credited) check(html.includes(guide.image.source) && html.includes(escape(guide.image.creator)) && html.includes(guide.image.license), `${route}: visible image credit missing for ${guide.slug}`);
  if (route === '/france/') {
    check(dom.filter((node) => classHas(node, 'fr-country-card')).length === 20, `${route}: expected 20 hub cards`);
    check(dom.filter((node) => classHas(node, 'fr-network-grid')).length === 1, `${route}: national operating model missing`);
  } else if (franceGuides.some((guide) => guide.url === route)) {
    check(html.includes('/css/france-field.css?v=20260919-1'), `${route}: France field CSS missing`);
    check(dom.filter((node) => classHas(node, 'fr-purpose')).length === 1, `${route}: independent purpose panel missing`);
    check(dom.filter((node) => classHas(node, 'fr-choice-deck')).length === 1 && (html.match(/class="fr-choice-deck"/g) || []).length === 1, `${route}: choice deck missing`);
    check((html.match(/<li><span>0[1-4]<\/span><small>/g) || []).length === 4, `${route}: four route stages missing`);
    check(dom.filter((node) => classHas(node, 'fr-watch')).length === 1, `${route}: failure-point section missing`);
    check(dom.filter((node) => classHas(node, 'fr-live-check')).length === 1, `${route}: near-claim official-source panel missing`);
    check(dom.filter((node) => classHas(node, 'fr-related')).length === 1, `${route}: related-guide section missing`);
    check(/data-fr-layout="[^"]+"/.test(html) && /data-fr-instrument="[^"]+"/.test(html) && /data-fr-variant="(?:[1-9]|1[0-2])"/.test(html), `${route}: child visual instrument markers missing`);
    for (const [url] of franceGuides.find((guide) => guide.url === route).sources) check(html.includes(url), `${route}: route-specific official source missing from rendered page`);
  } else {
    check(dom.filter((node) => classHas(node, 'fr-guide-card')).length === 3, `${route}: expected three child cards`);
    check(/data-fr-family="[^"]+"/.test(html) && /data-fr-hub-variant="[1-8]"/.test(html), `${route}: hub family/variant markers missing`);
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

const search = JSON.parse(read('data/search-index.json')).filter((item) => item.url.startsWith('/france/'));
check(search.length === 81 && new Set(search.map((item) => item.url)).size === 81, 'France search index must contain exactly 81 unique routes');
for (const route of routes) check(search.some((item) => item.url === route), `${route}: missing from search index`);
const header = read('components/header.html');
const sidebar = read('components/sidebar.html');
const footer = read('components/footer.html');
const home = read('index.html');
check(header.includes('<!-- FRANCE_HEADER_START -->') && header.includes('data-nav-key="france"'), 'France header integration missing');
check(sidebar.includes('<!-- EUROPE_NAV_START -->') && sidebar.includes('<!-- FRANCE_NAV_START -->') && sidebar.includes('data-sidebar-id="europe"') && sidebar.includes('data-sidebar-id="france"'), 'Europe/France sidebar integration missing');
check(sidebar.includes('<!-- SWITZERLAND_NAV_START -->') && sidebar.includes('data-sidebar-id="switzerland"'), 'Europe/Switzerland navigation was not preserved');
check(footer.includes('<!-- FRANCE_FOOTER_START -->'), 'France footer integration missing');
check(home.includes('<!-- FRANCE_HOME_START -->') && home.includes('<!-- FRANCE_HOME_CREDIT_START -->'), 'France home card or credit missing');
check(read('scripts/build-dist.mjs').includes("'france'"), 'France absent from build allowlist');
if (fs.existsSync(path.join(root, 'sitemap.xml'))) {
  const sitemap = read('sitemap.xml');
  for (const route of routes) check(sitemap.includes(`<loc>https://tripdistill.com${route}</loc><lastmod>2026-09-20</lastmod>`), `${route}: sitemap missing or stale`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  console.error(`France audit: ${failures.length} failure(s).`);
  process.exitCode = 1;
} else {
  console.log(`France audit passed: 20 hubs, 60 focused guides, 81 English / 405 five-language routes, 60 credited images and 60 unique planning instruments${englishOnly ? ' (localized file checks deferred)' : ''}.`);
}
