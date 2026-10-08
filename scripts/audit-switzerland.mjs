import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parse } from 'parse5';
import { switzerlandClusters, switzerlandGuides } from '../data/switzerland-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const failures = [];
const englishOnly = process.argv.includes('--english-only');
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
const routes = ['/switzerland/', ...switzerlandClusters.map((cluster) => `/switzerland/${cluster.slug}/`), ...switzerlandGuides.map((guide) => guide.url)];
const zurich = switzerlandClusters.find((cluster) => cluster.slug === 'zurich-lake');
const zurichRoutes = zurich ? ['/switzerland/', `/switzerland/${zurich.slug}/`, ...zurich.guides.map((guide) => guide.url)] : [];
const zurichLastmod = '2026-10-08';
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');
const check = (condition, message) => { if (!condition) failures.push(message); };
const escape = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');

function nodes(html) {
  const out = [];
  const visit = (node) => { out.push(node); for (const child of node.childNodes || []) visit(child); };
  visit(parse(html));
  return out;
}
function descendants(node) {
  const out = [];
  const visit = (item) => { out.push(item); for (const child of item?.childNodes || []) visit(child); };
  if (node) visit(node);
  return out;
}
const attr = (node, name) => node?.attrs?.find((item) => item.name === name)?.value;
const text = (node) => node?.nodeName === '#text' ? node.value : ['script', 'style'].includes(node?.tagName) ? '' : (node?.childNodes || []).map(text).join(' ');
const classHas = (node, name) => (attr(node, 'class') || '').split(/\s+/).includes(name);

check(switzerlandClusters.length === 16, `Expected 16 Switzerland hubs, found ${switzerlandClusters.length}`);
check(switzerlandGuides.length === 48, `Expected 48 Switzerland guides, found ${switzerlandGuides.length}`);
check(routes.length === 65 && new Set(routes).size === 65, 'Expected 65 unique English Switzerland routes');
check(new Set(switzerlandClusters.map((item) => item.family)).size === 16, 'Switzerland hub families must be unique');
check(new Set(switzerlandGuides.map((item) => item.instrument)).size === 48, 'Switzerland planning instruments must be unique');
check(new Set(switzerlandGuides.map((item) => item.layout)).size === 48, 'Switzerland child layout labels must be unique');
check(new Set(switzerlandGuides.map((item) => item.image.src)).size === 48, 'Switzerland guide images must be unique');

for (const [field, label] of [
  ['hubIntro', 'hub introductions'],
  ['stay', 'hub stay strategies'],
  ['transfer', 'hub transfer strategies'],
  ['season', 'hub season guidance'],
  ['fallback', 'hub fallbacks']
]) {
  check(new Set(switzerlandClusters.map((item) => item[field])).size === switzerlandClusters.length, `Switzerland ${label} must not be cloned across hubs`);
}
for (const [field, label] of [
  ['summary', 'guide summaries'],
  ['access', 'guide access guidance'],
  ['tradeoff', 'guide trade-offs'],
  ['fallback', 'guide fallbacks'],
  ['verify', 'guide verification guidance']
]) {
  check(new Set(switzerlandGuides.map((item) => item[field])).size === switzerlandGuides.length, `Switzerland ${label} must not be cloned across child guides`);
}
check(new Set(switzerlandGuides.map((item) => JSON.stringify(item.choices))).size === switzerlandGuides.length, 'Switzerland three-way choice sets must be unique per child guide');
check(new Set(switzerlandGuides.map((item) => JSON.stringify(item.route))).size === switzerlandGuides.length, 'Switzerland four-stage routes must be unique per child guide');
check(new Set(switzerlandGuides.map((item) => JSON.stringify(item.watch))).size === switzerlandGuides.length, 'Switzerland failure-point sets must be unique per child guide');

for (const cluster of switzerlandClusters) {
  check(cluster.guides.length === 3, `${cluster.slug}: expected three child guides`);
  check(cluster.hubIntro.length >= 180, `${cluster.slug}: hub introduction below editorial floor`);
  check(cluster.stay.length >= 100 && cluster.transfer.length >= 120 && cluster.season.length >= 100 && cluster.fallback.length >= 90, `${cluster.slug}: thin hub operating model`);
  check(cluster.sources.length >= 3, `${cluster.slug}: insufficient official sources`);
}
check(Boolean(zurich), 'Zurich hub must exist');
if (zurich) {
  check(zurich.guides.length === 3, 'Zurich must retain exactly three child guides');
  check(zurich.reviewDate === '8 October 2026' && zurich.isoDate === zurichLastmod, 'Zurich editorial review metadata must match the source review date');
  check(zurich.faq?.length === 3 && new Set(zurich.faq.map(([question]) => question)).size === 3, 'Zurich hub must have three distinct, region-specific FAQs');
  for (const guide of zurich.guides) {
    check(Boolean(guide.fieldContext?.heading) && guide.fieldContext?.cards?.length === 3, `${guide.url}: three local context cards required instead of inherited hub prose`);
    check(guide.sources?.length >= 3, `${guide.url}: needs its own route-specific official source list`);
    check(guide.fieldContext?.cards?.every((card) => card.sources?.length), `${guide.url}: every local context card must cite a source`);
    check(guide.imageTitle && guide.image.displayTitle === guide.imageTitle, `${guide.url}: image manifest display title must match source editorial data`);
  }
}
for (const guide of switzerlandGuides) {
  check(guide.summary.length >= 120, `${guide.url}: thin summary`);
  check(guide.access.length >= 120 && guide.tradeoff.length >= 120 && guide.fallback.length >= 100, `${guide.url}: thin operating guidance`);
  check(guide.duration.length >= 70 && guide.combine.length >= 80 && guide.verify.length >= 90, `${guide.url}: thin duration/combine/verification guidance`);
  check(guide.choices.length === 3 && guide.route.length === 4 && guide.watch.length === 3 && guide.faq.length === 3, `${guide.url}: choice/route/watch/FAQ parity`);
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
  check(pageText.length >= (route === '/switzerland/' ? 6500 : route.split('/').filter(Boolean).length === 2 ? 5200 : 5000), `${route}: rendered editorial copy below Switzerland floor (${pageText.length})`);
  check(html.includes('/css/switzerland.css?v=20260912-1'), `${route}: Switzerland CSS missing`);
  check(html.includes('/js/main.js?v=20260911-1'), `${route}: shared JS missing`);
  check(html.includes('"@type":"Article"') && html.includes('"@type":"BreadcrumbList"') && html.includes('"@type":"FAQPage"'), `${route}: required JSON-LD graph missing`);
  check(dom.some((node) => classHas(node, 'ad-slot')), `${route}: AdSense placeholder missing`);
  check(!/\b(?:TODO|lorem ipsum|coming soon|placeholder copy)\b/i.test(pageText), `${route}: placeholder copy found`);
  for (const node of dom.filter((item) => item.tagName === 'script' && attr(item, 'type') === 'application/ld+json')) {
    try { JSON.parse((node.childNodes || []).map((child) => child.value || '').join('')); } catch { failures.push(`${route}: malformed JSON-LD`); }
  }
  const hub = switzerlandClusters.find((cluster) => route === `/switzerland/${cluster.slug}/` || route.startsWith(`/switzerland/${cluster.slug}/`));
  const credited = route === '/switzerland/' ? switzerlandClusters.map((cluster) => cluster.guides[0]) : hub?.guides || [];
  if (zurichRoutes.includes(route)) {
    const visibleGuides = route === '/switzerland/' ? zurich.guides.slice(0, 1) : zurich.guides;
    for (const guide of visibleGuides) {
      check(guide.image.displayTitle && html.includes(escape(guide.image.displayTitle)), `${route}: human-readable Zurich image credit missing for ${guide.slug}`);
      check(!html.includes(escape(guide.image.label)), `${route}: raw Zurich Commons filename is visible for ${guide.slug}`);
    }
  }
  for (const guide of credited) check(html.includes(guide.image.source) && html.includes(escape(guide.image.creator)) && html.includes(guide.image.license), `${route}: visible image credit missing for ${guide.slug}`);
  if (route === '/switzerland/') {
    check(dom.filter((node) => classHas(node, 'ch-country-card')).length === 16, `${route}: expected 16 hub cards`);
  } else if (switzerlandGuides.some((guide) => guide.url === route)) {
    check(dom.filter((node) => node.tagName === 'li' && node.parentNode && classHas(node.parentNode, 'ch-route')).length === 0 || html.includes('Four-stage operating line'), `${route}: route structure missing`);
    check(dom.filter((node) => classHas(node, 'ch-related')).length === 1, `${route}: related-guide section missing`);
    check(/data-ch-layout="[^"]+"/.test(html) && /data-ch-instrument="[^"]+"/.test(html) && /data-ch-variant="[1-8]"/.test(html), `${route}: child visual instrument markers missing`);
    check(html.includes('/css/switzerland-field.css?v=20261008-2'), `${route}: current field stylesheet version missing`);
    const guide = switzerlandGuides.find((item) => item.url === route);
    if (guide?.fieldContext) {
      const localContext = dom.find((node) => classHas(node, 'ch-local-context'));
      const localText = text(localContext).replace(/\s+/g, ' ').trim();
      const cards = descendants(localContext).filter((node) => node.tagName === 'article');
      check(Boolean(localContext), `${route}: route-specific local context section missing`);
      check(cards.length === 3 && cards.length === guide.fieldContext.cards.length, `${route}: local context must render three cards`);
      for (const field of ['hubIntro', 'stay', 'transfer', 'season', 'fallback']) {
        check(!localText.includes(zurich[field]), `${route}: local context repeats inherited Zurich ${field}`);
      }
      check(html.includes(escape(guide.image.alt)), `${route}: image alt does not match the visually reviewed asset description`);
      check(guide.image.displayTitle && html.includes(escape(guide.image.displayTitle)), `${route}: human-readable image caption/credit missing`);
      check(!html.includes(escape(guide.image.label)), `${route}: raw Commons filename is visible in the page copy`);
      for (const [url, label] of guide.sources || []) {
        check(html.includes(url) && html.includes(escape(label)), `${route}: route-specific official source missing (${label})`);
      }
      for (const [index, card] of guide.fieldContext.cards.entries()) {
        const actualLinks = descendants(cards[index]).filter((node) => node.tagName === 'a').map((node) => attr(node, 'href'));
        const expectedLinks = card.sources.map((sourceIndex) => guide.sources[sourceIndex]?.[0]);
        check(expectedLinks.every((url) => url && actualLinks.includes(url)), `${route}: local context card ${index + 1} is missing its cited source link`);
      }
    }
  } else {
    check(dom.filter((node) => classHas(node, 'ch-hub-card')).length === 3, `${route}: expected three child cards`);
    check(/data-ch-family="[^"]+"/.test(html) && /data-ch-hub-variant="[1-6]"/.test(html), `${route}: hub family/variant markers missing`);
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

const search = JSON.parse(read('data/search-index.json')).filter((item) => item.url.startsWith('/switzerland/'));
check(search.length === 65 && new Set(search.map((item) => item.url)).size === 65, 'Switzerland search index must contain exactly 65 unique routes');
for (const route of routes) check(search.some((item) => item.url === route), `${route}: missing from search index`);
const header = read('components/header.html');
const sidebar = read('components/sidebar.html');
const footer = read('components/footer.html');
const home = read('index.html');
check(header.includes('<!-- SWITZERLAND_HEADER_START -->') && header.includes('data-nav-key="switzerland"'), 'Switzerland header integration missing');
check(sidebar.includes('<!-- SWITZERLAND_NAV_START -->') && sidebar.includes('data-sidebar-id="europe"') && sidebar.includes('data-sidebar-id="switzerland"'), 'Europe/Switzerland sidebar integration missing');
check(footer.includes('<!-- SWITZERLAND_FOOTER_START -->'), 'Switzerland footer integration missing');
check(home.includes('<!-- SWITZERLAND_HOME_START -->') && home.includes('<!-- SWITZERLAND_HOME_CREDIT_START -->'), 'Switzerland home card or credit missing');
check(read('scripts/build-dist.mjs').includes("'switzerland'"), 'Switzerland absent from build allowlist');
if (fs.existsSync(path.join(root, 'sitemap.xml'))) {
  const sitemap = read('sitemap.xml');
  for (const route of routes) {
    const expectedLastmod = zurichRoutes.includes(route) ? zurichLastmod : '2026-09-12';
    check(sitemap.includes(`<loc>https://tripdistill.com${route}</loc><lastmod>${expectedLastmod}</lastmod>`), `${route}: sitemap missing or stale`);
    for (const [language, prefix] of locales) check(sitemap.includes(`<loc>https://tripdistill.com${prefix}${route}</loc><lastmod>${expectedLastmod}</lastmod>`), `${prefix}${route}: localized sitemap date missing or stale`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  console.error(`Switzerland audit: ${failures.length} failure(s).`);
  process.exitCode = 1;
} else {
  console.log(`Switzerland audit passed: 16 hubs, 48 focused guides, 65 English / 325 five-language routes, 48 credited images and 48 unique planning instruments${englishOnly ? ' (localized file checks deferred)' : ''}.`);
}
