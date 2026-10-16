import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parse } from 'parse5';
import { parseSvgDimensions } from './svg-dimensions.mjs';
import { switzerlandClusters, switzerlandGuides } from '../data/switzerland-guides.mjs';
import { switzerlandCh14CountryRefresh, switzerlandCh14HubRefresh, switzerlandCh14IsoDate } from '../data/switzerland-ch14-refresh.mjs';
import { switzerlandCh15GuideRefresh, switzerlandCh15IsoDate } from '../data/switzerland-ch15-refresh.mjs';
import { switzerlandCh16GuideRefresh, switzerlandCh16IsoDate } from '../data/switzerland-ch16-refresh.mjs';

const root = path.resolve(import.meta.dirname, '..');
const failures = [];
const englishOnly = process.argv.includes('--english-only');
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
const routes = ['/switzerland/', ...switzerlandClusters.map((cluster) => `/switzerland/${cluster.slug}/`), ...switzerlandGuides.map((guide) => guide.url)];
const zurich = switzerlandClusters.find((cluster) => cluster.slug === 'zurich-lake');
const zurichRoutes = zurich ? ['/switzerland/', `/switzerland/${zurich.slug}/`, ...zurich.guides.map((guide) => guide.url)] : [];
const zurichLastmod = '2026-10-08';
const lucerne = switzerlandClusters.find((cluster) => cluster.slug === 'lucerne-lake-mountains');
const lucerneRoutes = lucerne ? [`/switzerland/${lucerne.slug}/`, ...lucerne.guides.map((guide) => guide.url)] : [];
const lucerneLastmod = '2026-10-12';
const jungfrau = switzerlandClusters.find((cluster) => cluster.slug === 'jungfrau-region');
const jungfrauRoutes = jungfrau ? [`/switzerland/${jungfrau.slug}/`, ...jungfrau.guides.map((guide) => guide.url)] : [];
const jungfrauLastmod = '2026-10-12';
const zermatt = switzerlandClusters.find((cluster) => cluster.slug === 'zermatt-matterhorn');
const zermattRoutes = zermatt ? [`/switzerland/${zermatt.slug}/`, ...zermatt.guides.map((guide) => guide.url)] : [];
const zermattLastmod = '2026-10-12';
const interlaken = switzerlandClusters.find((cluster) => cluster.slug === 'interlaken-lakes');
const interlakenRoutes = interlaken ? [`/switzerland/${interlaken.slug}/`, ...interlaken.guides.map((guide) => guide.url)] : [];
const interlakenLastmod = '2026-10-12';
const lausanneRoutes = [
  '/switzerland/lausanne-lavaux/',
  '/switzerland/lausanne-lavaux/old-city-ouchy/',
  '/switzerland/lausanne-lavaux/lavaux-terraces/',
  '/switzerland/lausanne-lavaux/olympic-lake-cruise/'
];
const lausanneLastmod = '2026-10-12';
const montreux = switzerlandClusters.find((cluster) => cluster.slug === 'montreux-riviera');
const montreuxRoutes = [
  '/switzerland/montreux-riviera/',
  '/switzerland/montreux-riviera/montreux-chillon/',
  '/switzerland/montreux-riviera/rochers-de-naye/',
  '/switzerland/montreux-riviera/vevey-lakeside/'
];
const montreuxLastmod = '2026-10-12';
const bernEmmentalRoutes = [
  '/switzerland/bern-emmental/',
  '/switzerland/bern-emmental/old-city-aare/',
  '/switzerland/bern-emmental/museums-rose-garden/',
  '/switzerland/bern-emmental/emmental-day-trip/'
];
const bernEmmentalLastmod = '2026-10-12';
const geneva = switzerlandClusters.find((cluster) => cluster.slug === 'geneva-lake');
const genevaRoutes = ['/switzerland/geneva-lake/', '/switzerland/geneva-lake/old-town-lakefront/', '/switzerland/geneva-lake/international-quarter/', '/switzerland/geneva-lake/carouge-arve/'];
const genevaSitemapRoutes = ['/switzerland/', ...genevaRoutes];
const genevaLastmod = '2026-10-12';
const basel = switzerlandClusters.find((cluster) => cluster.slug === 'basel-rhine');
const baselRoutes = basel ? [`/switzerland/${basel.slug}/`, ...basel.guides.map((guide) => guide.url)] : [];
const baselLastmod = '2026-10-12';
const ch11Routes = new Set([
  '/switzerland/st-moritz-engadin/',
  '/switzerland/st-moritz-engadin/st-moritz-lakes/',
  '/switzerland/st-moritz-engadin/bernina-pontresina/',
  '/switzerland/st-moritz-engadin/muottas-diavolezza/'
]);
const ch11Lastmod = '2026-10-12';
const ch12Cluster = switzerlandClusters.find((cluster) => cluster.slug === 'st-gallen-appenzell');
const ch12Routes = ch12Cluster ? [`/switzerland/${ch12Cluster.slug}/`, ...ch12Cluster.guides.map((guide) => guide.url)] : [];
const ch12Lastmod = '2026-10-12';
const ch13Cluster = switzerlandClusters.find((cluster) => cluster.slug === 'graubunden-corridors');
const ch13Routes = ch13Cluster ? [`/switzerland/${ch13Cluster.slug}/`, ...ch13Cluster.guides.map((guide) => guide.url)] : [];
const ch13Lastmod = '2026-10-12';
const ch14Routes = new Set(['/switzerland/', ...Object.keys(switzerlandCh14HubRefresh).map((slug) => `/switzerland/${slug}/`)]);
const ch14Lastmod = switzerlandCh14IsoDate;
const ch15Routes = new Set(switzerlandGuides.filter((guide) => Object.hasOwn(switzerlandCh15GuideRefresh, guide.slug)).map((guide) => guide.url));
const ch15Lastmod = switzerlandCh15IsoDate;
const ch16Routes = new Set(switzerlandGuides.filter((guide) => Object.hasOwn(switzerlandCh16GuideRefresh, guide.slug)).map((guide) => guide.url));
const ch16Lastmod = switzerlandCh16IsoDate;
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');
const check = (condition, message) => { if (!condition) failures.push(message); };
const escape = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
check(ch14Routes.size === 4 && switzerlandCh14CountryRefresh.isoDate === ch14Lastmod, 'CH14 must date exactly the country overview and three existing hubs');
check(ch15Routes.size === 4, 'CH15 must date exactly four existing Switzerland guide routes');
check(ch16Routes.size === 5, 'CH16 must date exactly five existing Switzerland guide routes');

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
check(Boolean(zermatt) && zermatt?.reviewDate === '12 October 2026' && zermatt?.isoDate === zermattLastmod, 'Zermatt editorial review metadata must match the source review date');
check(Boolean(interlaken) && interlaken?.reviewDate === '12 October 2026' && interlaken?.isoDate === interlakenLastmod, 'Interlaken editorial review metadata must match the source review date');
check(Boolean(geneva) && geneva?.reviewDate === '12 October 2026' && geneva?.isoDate === genevaLastmod, 'Geneva editorial review metadata must match the source review date');
check(Boolean(montreux) && montreux?.reviewDate === '12 October 2026' && montreux?.isoDate === montreuxLastmod, 'Montreux editorial review metadata must match the source review date');
check(montreux?.guides.map((guide) => guide.slug).join(',') === 'montreux-chillon,rochers-de-naye,vevey-lakeside', 'Montreux refresh must retain its hub and same three child routes');
check(genevaRoutes.length === 4 && geneva?.guides.map((guide) => guide.slug).join(',') === 'old-town-lakefront,international-quarter,carouge-arve', 'Geneva refresh must retain the hub and its same three child routes');
if (geneva) {
  check(geneva.faq?.length === 3, 'Geneva hub must have three date-aware, district-specific FAQs');
  check(/Cornavin/.test(geneva.stay) && /two nights/.test(geneva.stay) && /(?:choose three|third night)/i.test(geneva.stay), 'Geneva lodging guidance must identify nights and bases');
  check(/tram 15/.test(geneva.transfer) && /tram 12/.test(geneva.transfer) && /bus 5/.test(geneva.transfer), 'Geneva hub must name the Nations and Carouge transit legs');
  check(geneva.guides[0].image.assetType === 'original-planning-diagram' && geneva.guides[0].image.src.endsWith('.svg'), 'Geneva Old Town image must use the new original route diagram');
}
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
  if (guide.image.assetType === 'original-planning-diagram') {
    check(guide.image.creator && guide.image.source && guide.image.rightsStatus && guide.image.rightsStatusUrl && guide.image.localSha1 && guide.image.editNote && guide.image.diagramNote, `${guide.url}: incomplete original-diagram provenance`);
    check(guide.image.source === `https://tripdistill.com${guide.image.src}` && guide.image.rightsStatusUrl === 'https://tripdistill.com/terms-of-use/', `${guide.url}: original-diagram source or rights link must be exact and same-origin`);
    check(guide.image.license === null, `${guide.url}: do not imply a separate reuse license for the original diagram`);
    check(/^[a-f0-9]{40}$/i.test(guide.image.localSha1), `${guide.url}: original-diagram SHA-1 missing or malformed`);
    check(guide.image.src.endsWith('.svg') && /not to scale/i.test(guide.image.editNote), `${guide.url}: original diagram must be a labeled schematic`);
  } else {
    check(guide.image.creator && guide.image.license && guide.image.source && guide.image.remoteSha1 && guide.image.editNote, `${guide.url}: incomplete image provenance`);
    check(/^https:\/\/commons\.wikimedia\.org\//.test(guide.image.source), `${guide.url}: image source is not Wikimedia Commons`);
    check(/^(CC0|Public domain|CC BY(?:-SA)? [1-4](?:\.\d)?(?: [a-z]{2})?)$/i.test(guide.image.license), `${guide.url}: unapproved image license ${guide.image.license}`);
  }
  const imageFile = path.join(root, guide.image.src.replace(/^\//, ''));
  if (guide.image.assetType === 'original-planning-diagram') {
    try {
      const dimensions = parseSvgDimensions(fs.readFileSync(imageFile, 'utf8'));
      check(dimensions.width === 1600 && dimensions.height === 1066, `${guide.url}: SVG image is not 1600x1066`);
    } catch (error) {
      check(false, `${guide.url}: SVG image missing or invalid (${error.message})`);
    }
  } else {
    const probe = spawnSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0:s=x', imageFile], { encoding: 'utf8' });
    check(probe.status === 0 && probe.stdout.trim() === '1600x1066', `${guide.url}: image missing or not 1600x1066`);
  }
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
  check(html.includes('/js/main.js?v=20261016-1'), `${route}: shared JS missing`);
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
  for (const guide of credited) {
    if (guide.image.assetType === 'original-planning-diagram') {
      const legend = route === '/switzerland/' ? '' : route === guide.url ? guide.image.diagramNote : guide.image.diagramCardNote;
      check(html.includes(guide.image.source) && html.includes(escape(guide.image.creator)) && html.includes(guide.image.rightsStatusUrl) && html.includes(guide.image.rightsStatus) && (!legend || html.includes(escape(legend))), `${route}: visible original-diagram provenance or localized English legend missing for ${guide.slug}`);
    } else {
      check(html.includes(guide.image.source) && html.includes(escape(guide.image.creator)) && html.includes(guide.image.license), `${route}: visible image credit missing for ${guide.slug}`);
    }
  }
  if (route === '/switzerland/') {
    check(dom.filter((node) => classHas(node, 'ch-country-card')).length === 16, `${route}: expected 16 hub cards`);
  } else if (switzerlandGuides.some((guide) => guide.url === route)) {
    check(dom.filter((node) => node.tagName === 'li' && node.parentNode && classHas(node.parentNode, 'ch-route')).length === 0 || html.includes('Four-stage operating line'), `${route}: route structure missing`);
    check(dom.filter((node) => classHas(node, 'ch-related')).length === 1, `${route}: related-guide section missing`);
    check(/data-ch-layout="[^"]+"/.test(html) && /data-ch-instrument="[^"]+"/.test(html) && /data-ch-variant="[1-8]"/.test(html), `${route}: child visual instrument markers missing`);
    const fieldCssVersion = route === '/switzerland/zurich-lake/zurich-west-museums/' ? '20261008-3' : '20261008-2';
    check(html.includes(`/css/switzerland-field.css?v=${fieldCssVersion}`), `${route}: current field stylesheet version missing`);
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
      if (guide.image.assetType === 'original-planning-diagram') {
        check(html.includes(guide.image.source) && html.includes(guide.image.rightsStatus) && html.includes(escape(guide.image.diagramNote)), `${route}: original diagram caption, rights note or visible legend missing`);
      } else {
        check(guide.image.displayTitle && html.includes(escape(guide.image.displayTitle)), `${route}: human-readable image caption/credit missing`);
        check(!html.includes(escape(guide.image.label)), `${route}: raw Commons filename is visible in the page copy`);
      }
      for (const [url, label] of guide.sources || []) {
        check(html.includes(escape(url)) && html.includes(escape(label)), `${route}: route-specific official source missing (${label})`);
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
    for (const guide of credited) {
      if (guide.image.assetType === 'original-planning-diagram') {
        const legendClass = route === '/switzerland/' ? '' : route === guide.url ? 'class="ch-diagram-note"' : 'class="ch-diagram-card-note"';
        check(localized.includes(guide.image.source) && localized.includes(guide.image.rightsStatusUrl) && (!legendClass || localized.includes(legendClass)), `${prefix + route}: localized original-diagram provenance or visible legend missing for ${guide.slug}`);
      } else {
        check(localized.includes(guide.image.source) && localized.includes(guide.image.license), `${prefix + route}: localized image provenance missing for ${guide.slug}`);
      }
    }
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
    const expectedLastmod = ch16Routes.has(route) ? ch16Lastmod : ch15Routes.has(route) ? ch15Lastmod : ch14Routes.has(route) ? ch14Lastmod : ch13Routes.includes(route) ? ch13Lastmod : ch12Routes.includes(route) ? ch12Lastmod : ch11Routes.has(route) ? ch11Lastmod : baselRoutes.includes(route) ? baselLastmod : genevaSitemapRoutes.includes(route) ? genevaLastmod : montreuxRoutes.includes(route) ? montreuxLastmod : bernEmmentalRoutes.includes(route) ? bernEmmentalLastmod : zurichRoutes.includes(route) ? zurichLastmod : lucerneRoutes.includes(route) ? lucerneLastmod : jungfrauRoutes.includes(route) ? jungfrauLastmod : zermattRoutes.includes(route) ? zermattLastmod : interlakenRoutes.includes(route) ? interlakenLastmod : lausanneRoutes.includes(route) ? lausanneLastmod : '2026-09-12';
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
