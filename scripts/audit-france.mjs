import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
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
check(franceGuides.filter((item) => item.image.assetType === 'original-planning-diagram').length === 1, 'France must retain exactly one original planning diagram');

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
  const imageFile = path.join(root, guide.image.src.replace(/^\//, ''));
  if (guide.image.assetType === 'original-planning-diagram') {
    check(guide.image.creator && guide.image.source === `https://tripdistill.com${guide.image.src}` && guide.image.editNote, `${guide.url}: incomplete original-diagram provenance`);
    check(guide.image.license === null && guide.image.rightsStatus === 'Project original; no separate reuse license declared' && guide.image.rightsStatusUrl === 'https://tripdistill.com/terms-of-use/' && guide.image.commercialReuseEligibility === 'unknown' && guide.image.attributionTerms, `${guide.url}: original diagram rights status must stay explicit without asserting a license`);
    check(fs.existsSync(imageFile) && /<svg[\s>]/i.test(read(guide.image.src.slice(1))), `${guide.url}: original SVG is missing or invalid`);
    if (fs.existsSync(imageFile)) {
      const svgSource = fs.readFileSync(imageFile, 'utf8');
      check(crypto.createHash('sha1').update(svgSource).digest('hex') === guide.image.localSha1, `${guide.url}: SVG local SHA-1 mismatch`);
      if (guide.image.src === '/assets/images/france-grenoble-bastille-route-sequence.svg') {
        check(/<marker id="arrow"[^>]*markerWidth="12"[^>]*markerHeight="12"[^>]*markerUnits="userSpaceOnUse"/.test(svgSource), `${guide.url}: route arrowheads must use a compact fixed-size marker`);
        const connectors = [...svgSource.matchAll(/class="route-connector" d="M(\d+) 456H(\d+)"/g)].map((match) => [Number(match[1]), Number(match[2])]);
        const cardGaps = [[368, 455], [733, 820], [1098, 1185]];
        check(connectors.length === cardGaps.length, `${guide.url}: expected one route connector in each of the three card gaps`);
        for (const [index, [start, end]] of connectors.entries()) {
          const [leftCardRight, rightCardLeft] = cardGaps[index] || [Infinity, -Infinity];
          check(start < end && start >= leftCardRight + 10 && end <= rightCardLeft - 16, `${guide.url}: connector ${index + 1} must keep its line and arrowhead clear of both cards`);
        }
      }
    }
  } else {
    check(guide.image.creator && guide.image.license && guide.image.source && guide.image.remoteSha1 && guide.image.editNote, `${guide.url}: incomplete image provenance`);
    check(/^https:\/\/commons\.wikimedia\.org\//.test(guide.image.source), `${guide.url}: image source is not Wikimedia Commons`);
    check(/^(CC0|Public domain|CC BY(?:-SA)? [1-4](?:\.\d)?(?: [a-z]{2})?)$/i.test(guide.image.license), `${guide.url}: unapproved image license ${guide.image.license}`);
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
  const depth = route.split('/').filter(Boolean).length;
  const floor = route === '/france/' ? 7600 : depth === 2 ? 6500 : 7000;
  check(pageText.length >= floor, `${route}: rendered editorial copy below France floor (${pageText.length} < ${floor})`);
  const expectedFranceCss = '/css/france.css?v=20261007-3';
  check(html.includes(expectedFranceCss), `${route}: France CSS missing`);
  if (route.startsWith('/france/lyon-rhone/')) {
    check(html.includes('/css/france-lyon-operations.css?v=20261011-1'), `${route}: Lyon operations stylesheet missing`);
    check(html.includes('11 October 2026') && html.includes('"dateModified":"2026-10-11"'), `${route}: Lyon review date is not synchronized`);
    check(html.includes('https://meteofrance.com/previsions-meteo-france/lyon/69000'), `${route}: official Lyon forecast source missing`);
  }
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
  for (const guide of credited) {
    if (guide.image.assetType === 'original-planning-diagram') {
      check(html.includes(guide.image.source) && html.includes(escape(guide.image.creator)) && html.includes(escape(guide.image.editNote)) && html.includes(guide.image.rightsStatusUrl), `${route}: visible original-diagram source/creator/rights credit missing for ${guide.slug}`);
    } else {
      check(html.includes(guide.image.source) && html.includes(escape(guide.image.creator)) && html.includes(guide.image.license), `${route}: visible image credit missing for ${guide.slug}`);
    }
  }
  if (route === '/france/') {
    check(dom.filter((node) => classHas(node, 'fr-country-card')).length === 20, `${route}: expected 20 hub cards`);
    check(dom.filter((node) => classHas(node, 'fr-network-grid')).length === 1, `${route}: national operating model missing`);
  } else if (franceGuides.some((guide) => guide.url === route)) {
    const expectedFieldCss = '/css/france-field.css?v=20261007-3';
    check(html.includes(expectedFieldCss), `${route}: France field CSS missing`);
    check(dom.filter((node) => classHas(node, 'fr-purpose')).length === 1, `${route}: independent purpose panel missing`);
    check(dom.filter((node) => classHas(node, 'fr-choice-deck')).length === 1 && (html.match(/class="fr-choice-deck"/g) || []).length === 1, `${route}: choice deck missing`);
    check((html.match(/<li><span>0[1-4]<\/span><small>/g) || []).length === 4, `${route}: four route stages missing`);
    check(dom.filter((node) => classHas(node, 'fr-watch')).length === 1, `${route}: failure-point section missing`);
    check(dom.filter((node) => classHas(node, 'fr-live-check')).length === 1, `${route}: near-claim official-source panel missing`);
    check(dom.filter((node) => classHas(node, 'fr-related')).length === 1, `${route}: related-guide section missing`);
    check(/data-fr-layout="[^"]+"/.test(html) && /data-fr-instrument="[^"]+"/.test(html) && /data-fr-variant="(?:[1-9]|1[0-2])"/.test(html), `${route}: child visual instrument markers missing`);
    if (route.startsWith('/france/lyon-rhone/')) check(dom.filter((node) => classHas(node, 'fr-route-operations')).length === 1, `${route}: route-specific entry, return and weather plan missing`);
    for (const [url] of franceGuides.find((guide) => guide.url === route).sources) check(html.includes(url), `${route}: route-specific official source missing from rendered page`);
  } else {
    check(dom.filter((node) => classHas(node, 'fr-guide-card')).length === 3, `${route}: expected three child cards`);
    check(/data-fr-family="[^"]+"/.test(html) && /data-fr-hub-variant="[1-8]"/.test(html), `${route}: hub family/variant markers missing`);
    if (route === '/france/lyon-rhone/') {
      check(dom.filter((node) => classHas(node, 'fr-hub-itinerary')).length === 1, `${route}: Lyon four-night operating plan missing`);
      for (const day of ['Day 1 · Vieux Lyon and Fourvière', 'Day 2 · Presqu’île and Croix-Rousse', 'Day 3 · Choose Pérouges or Beaujolais']) check(pageText.includes(day), `${route}: missing actionable itinerary day ${day}`);
    }
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
        check(localized.includes(guide.image.source) && localized.includes(guide.image.creator) && localized.includes(guide.image.rightsStatusUrl), `${prefix + route}: localized original-diagram provenance missing for ${guide.slug}`);
      } else {
        check(localized.includes(guide.image.source) && localized.includes(guide.image.license), `${prefix + route}: localized image provenance missing for ${guide.slug}`);
      }
    }
  }
}

const search = JSON.parse(read('data/search-index.json')).filter((item) => item.url.startsWith('/france/'));
check(search.length === 81 && new Set(search.map((item) => item.url)).size === 81, 'France search index must contain exactly 81 unique routes');
for (const route of routes) check(search.some((item) => item.url === route), `${route}: missing from search index`);

const lyonCluster = franceClusters.find((cluster) => cluster.slug === 'lyon-rhone');
if (lyonCluster) {
  const lyonSummary = { route: `/france/${lyonCluster.slug}/`, source: lyonCluster.searchSummary || lyonCluster.hubIntro };
  for (const [language, prefix] of locales) {
    if (englishOnly && prefix) continue;
    let catalog;
    if (language !== 'en') {
      try {
        catalog = JSON.parse(read(`data/i18n/${language}.json`));
        check(catalog.qualityStatus === 'reviewed', `${language}: Lyon search summary catalog is not approved`);
      } catch {
        check(false, `${language}: approved translation catalog is missing`);
        catalog = { translations: {} };
      }
    }
    const localizedIndexPath = prefix ? `${prefix.slice(1)}/data/search-index.json` : 'data/search-index.json';
    let localizedSearch;
    try { localizedSearch = JSON.parse(read(localizedIndexPath)); }
    catch {
      check(false, `${language}: search index is missing at ${localizedIndexPath}`);
      continue;
    }
    const localizedRoute = `${prefix}${lyonSummary.route}`;
    const record = localizedSearch.find((entry) => entry.url === localizedRoute);
    const expectedSummary = language === 'en' ? lyonSummary.source : catalog?.translations?.[lyonSummary.source];
    check(!!record, `${language}: ${localizedRoute} missing from search index`);
    if (language !== 'en') check(!!expectedSummary, `${language}: no approved Lyon search summary`);
    if (record && expectedSummary) check(record.summary === expectedSummary, `${language}: Lyon search summary mismatch at ${localizedRoute}`);
  }
}

const brittany = franceClusters.find((cluster) => cluster.slug === 'brittany-coasts');
if (brittany) {
  const brittanySearchRecords = [
    { route: `/france/${brittany.slug}/`, source: brittany.searchSummary || brittany.hubIntro },
    ...brittany.guides.map((guide) => ({ route: guide.url, source: guide.searchSummary || guide.summary }))
  ];
  for (const [language, prefix] of locales) {
    if (englishOnly && prefix) continue;
    let catalog;
    if (language !== 'en') {
      try {
        catalog = JSON.parse(read(`data/i18n/${language}.json`));
        check(catalog.qualityStatus === 'reviewed', `${language}: Brittany search summary catalog is not approved`);
      } catch {
        check(false, `${language}: approved translation catalog is missing`);
        catalog = { translations: {} };
      }
    }
    const localizedIndexPath = prefix ? `${prefix.slice(1)}/data/search-index.json` : 'data/search-index.json';
    let localizedSearch;
    try { localizedSearch = JSON.parse(read(localizedIndexPath)); }
    catch {
      check(false, `${language}: search index is missing at ${localizedIndexPath}`);
      continue;
    }
    for (const item of brittanySearchRecords) {
      const localizedRoute = `${prefix}${item.route}`;
      const record = localizedSearch.find((entry) => entry.url === localizedRoute);
      check(!!record, `${language}: ${localizedRoute} missing from search index`);
      const expectedSummary = language === 'en' ? item.source : catalog?.translations?.[item.source];
      if (language !== 'en') check(!!expectedSummary, `${language}: no approved translation for Brittany search summary at ${item.route}`);
      if (record && expectedSummary) check(record.summary === expectedSummary, `${language}: Brittany search summary mismatch at ${localizedRoute}`);
    }
  }
}

const fr02GuideRoutes = new Set([
  '/france/basque-coast-pyrenees/saint-jean-de-luz-basque-inland/',
  '/france/basque-coast-pyrenees/gavarnie-cauterets-pyrenees/',
  '/france/provence-inland/luberon-villages-abbey/',
  '/france/corsica/bastia-cap-corse/',
  '/france/corsica/bonifacio-porto-vecchio/'
]);
const fr02SearchRecords = franceGuides
  .filter((guide) => fr02GuideRoutes.has(guide.url))
  .map((guide) => ({ route: guide.url, source: guide.searchSummary || guide.summary }));
check(fr02SearchRecords.length === 5, 'FR02 must provide a search summary for exactly five target routes');
for (const [language, prefix] of locales) {
  if (englishOnly && prefix) continue;
  let catalog;
  if (language !== 'en') {
    try {
      catalog = JSON.parse(read(`data/i18n/${language}.json`));
      check(catalog.qualityStatus === 'reviewed', `${language}: FR02 search summary catalog is not approved`);
    } catch {
      check(false, `${language}: approved translation catalog is missing`);
      catalog = { translations: {} };
    }
  }
  const localizedIndexPath = prefix ? `${prefix.slice(1)}/data/search-index.json` : 'data/search-index.json';
  let localizedSearch;
  try { localizedSearch = JSON.parse(read(localizedIndexPath)); }
  catch {
    check(false, `${language}: search index is missing at ${localizedIndexPath}`);
    continue;
  }
  for (const item of fr02SearchRecords) {
    const localizedRoute = `${prefix}${item.route}`;
    const record = localizedSearch.find((entry) => entry.url === localizedRoute);
    check(!!record, `${language}: ${localizedRoute} missing from search index`);
    const expectedSummary = language === 'en' ? item.source : catalog?.translations?.[item.source];
    if (language !== 'en') check(!!expectedSummary, `${language}: no approved FR02 search summary at ${item.route}`);
    if (record && expectedSummary) check(record.summary === expectedSummary, `${language}: FR02 search summary mismatch at ${localizedRoute}`);
  }
}

const burgundy = franceClusters.find((cluster) => cluster.slug === 'burgundy');
const burgundySearchRecords = burgundy ? [
  { route: `/france/${burgundy.slug}/`, source: burgundy.searchSummary || burgundy.hubIntro },
  ...burgundy.guides.map((guide) => ({ route: guide.url, source: guide.searchSummary || guide.summary }))
] : [];
check(burgundySearchRecords.length === 4, 'FR05 must provide search summaries for the Burgundy hub and its three existing guides');
for (const [language, prefix] of locales) {
  if (englishOnly && prefix) continue;
  let catalog;
  if (language !== 'en') {
    try {
      catalog = JSON.parse(read(`data/i18n/${language}.json`));
      check(catalog.qualityStatus === 'reviewed', `${language}: Burgundy search summary catalog is not approved`);
    } catch {
      check(false, `${language}: approved translation catalog is missing`);
      catalog = { translations: {} };
    }
  }
  const localizedIndexPath = prefix ? `${prefix.slice(1)}/data/search-index.json` : 'data/search-index.json';
  let localizedSearch;
  try { localizedSearch = JSON.parse(read(localizedIndexPath)); }
  catch {
    check(false, `${language}: search index is missing at ${localizedIndexPath}`);
    continue;
  }
  for (const item of burgundySearchRecords) {
    const localizedRoute = `${prefix}${item.route}`;
    const record = localizedSearch.find((entry) => entry.url === localizedRoute);
    check(!!record, `${language}: ${localizedRoute} missing from search index`);
    const expectedSummary = language === 'en' ? item.source : catalog?.translations?.[item.source];
    if (language !== 'en') check(!!expectedSummary, `${language}: no approved FR05 search summary at ${item.route}`);
    if (record && expectedSummary) check(record.summary === expectedSummary, `${language}: FR05 search summary mismatch at ${localizedRoute}`);
  }
}

const dordogne = franceClusters.find((cluster) => cluster.slug === 'dordogne-perigord');
const dordogneSearchRecords = dordogne ? [
  { route: `/france/${dordogne.slug}/`, source: dordogne.searchSummary || dordogne.hubIntro },
  ...dordogne.guides.map((guide) => ({ route: guide.url, source: guide.searchSummary || guide.summary }))
] : [];
check(dordogneSearchRecords.length === 4, 'FR06 must provide search summaries for the Dordogne hub and its three existing guides');
for (const [language, prefix] of locales) {
  if (englishOnly && prefix) continue;
  let catalog;
  if (language !== 'en') {
    try {
      catalog = JSON.parse(read(`data/i18n/${language}.json`));
      check(catalog.qualityStatus === 'reviewed', `${language}: Dordogne search summary catalog is not approved`);
    } catch {
      check(false, `${language}: approved translation catalog is missing`);
      catalog = { translations: {} };
    }
  }
  const localizedIndexPath = prefix ? `${prefix.slice(1)}/data/search-index.json` : 'data/search-index.json';
  let localizedSearch;
  try { localizedSearch = JSON.parse(read(localizedIndexPath)); }
  catch {
    check(false, `${language}: search index is missing at ${localizedIndexPath}`);
    continue;
  }
  for (const item of dordogneSearchRecords) {
    const localizedRoute = `${prefix}${item.route}`;
    const record = localizedSearch.find((entry) => entry.url === localizedRoute);
    check(!!record, `${language}: ${localizedRoute} missing from search index`);
    const expectedSummary = language === 'en' ? item.source : catalog?.translations?.[item.source];
    if (language !== 'en') check(!!expectedSummary, `${language}: no approved Dordogne search summary at ${item.route}`);
    if (record && expectedSummary) check(record.summary === expectedSummary, `${language}: Dordogne search summary mismatch at ${localizedRoute}`);
  }
}

const toulouseOccitanie = franceClusters.find((cluster) => cluster.slug === 'toulouse-albi-carcassonne');
const toulouseOccitanieSearchRecords = toulouseOccitanie ? [
  { route: `/france/${toulouseOccitanie.slug}/`, source: toulouseOccitanie.searchSummary || toulouseOccitanie.hubIntro },
  ...toulouseOccitanie.guides.map((guide) => ({ route: guide.url, source: guide.searchSummary || guide.summary }))
] : [];
check(toulouseOccitanieSearchRecords.length === 4, 'FR08 must provide search summaries for the Toulouse/Occitanie hub and its three existing guides');
for (const [language, prefix] of locales) {
  if (englishOnly && prefix) continue;
  let catalog;
  if (language !== 'en') {
    try {
      catalog = JSON.parse(read(`data/i18n/${language}.json`));
      check(catalog.qualityStatus === 'reviewed', `${language}: Toulouse/Occitanie search summary catalog is not approved`);
    } catch {
      check(false, `${language}: approved translation catalog is missing`);
      catalog = { translations: {} };
    }
  }
  const localizedIndexPath = prefix ? `${prefix.slice(1)}/data/search-index.json` : 'data/search-index.json';
  let localizedSearch;
  try { localizedSearch = JSON.parse(read(localizedIndexPath)); }
  catch {
    check(false, `${language}: search index is missing at ${localizedIndexPath}`);
    continue;
  }
  for (const item of toulouseOccitanieSearchRecords) {
    const localizedRoute = `${prefix}${item.route}`;
    const record = localizedSearch.find((entry) => entry.url === localizedRoute);
    check(!!record, `${language}: ${localizedRoute} missing from search index`);
    const expectedSummary = language === 'en' ? item.source : catalog?.translations?.[item.source];
    if (language !== 'en') check(!!expectedSummary, `${language}: no approved FR08 search summary at ${item.route}`);
    if (record && expectedSummary) check(record.summary === expectedSummary, `${language}: FR08 search summary mismatch at ${localizedRoute}`);
  }
}

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
  const parisEditedRoutes = new Set([
    '/france/paris/',
    '/france/paris/seine-islands-latin-quarter/',
    '/france/paris/louvre-tuileries-opera/',
    '/france/paris/eiffel-invalides-montparnasse/'
  ]);
  const normandyEditedRoutes = new Set([
    '/france/normandy/',
    '/france/normandy/rouen-seine-cathedral/',
    '/france/normandy/bayeux-dday-landscape/',
    '/france/normandy/mont-saint-michel-bay/'
  ]);
  const franceResponsiveEditedRoutes = new Set(franceClusters
    .filter((cluster) => cluster.slug !== 'paris')
    .flatMap((cluster) => [`/france/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)]));
  const brittanyEditedRoutes = new Set([
    '/france/brittany-coasts/',
    '/france/brittany-coasts/saint-malo-dinan/',
    '/france/brittany-coasts/morbihan-carnac/',
    '/france/brittany-coasts/quimper-crozon/'
  ]);
  const fr02EditedRoutes = new Set([
    '/france/basque-coast-pyrenees/saint-jean-de-luz-basque-inland/',
    '/france/basque-coast-pyrenees/gavarnie-cauterets-pyrenees/',
    '/france/provence-inland/luberon-villages-abbey/',
    '/france/corsica/bastia-cap-corse/',
    '/france/corsica/bonifacio-porto-vecchio/'
  ]);
  const lyonEditedRoutes = new Set([
    '/france/lyon-rhone/',
    '/france/lyon-rhone/vieux-lyon-fourviere/',
    '/france/lyon-rhone/presquile-croix-rousse/',
    '/france/lyon-rhone/beaujolais-perouges/'
  ]);
  const alsaceEditedRoutes = new Set([
    '/france/alsace/',
    '/france/alsace/strasbourg-grande-ile/',
    '/france/alsace/colmar-canals-museums/',
    '/france/alsace/alsace-wine-route-villages/'
  ]);
  const burgundyEditedRoutes = new Set([
    '/france/burgundy/',
    '/france/burgundy/dijon-ducal-city/',
    '/france/burgundy/beaune-hospices-vineyards/',
    '/france/burgundy/vezelay-fontenay-abbeys/'
  ]);
  const bordeauxGirondeEditedRoutes = new Set([
    '/france/bordeaux-gironde/',
    '/france/bordeaux-gironde/bordeaux-river-wine-city/',
    '/france/bordeaux-gironde/saint-emilion-vineyards/',
    '/france/bordeaux-gironde/arcachon-dune-pilat/'
  ]);
  const dordogneEditedRoutes = new Set([
    '/france/dordogne-perigord/',
    '/france/dordogne-perigord/sarlat-market-old-town/',
    '/france/dordogne-perigord/vezere-prehistory/',
    '/france/dordogne-perigord/dordogne-castles-villages/'
  ]);
  const toulouseOccitanieEditedRoutes = new Set([
    '/france/toulouse-albi-carcassonne/',
    '/france/toulouse-albi-carcassonne/toulouse-garonne-aerospace/',
    '/france/toulouse-albi-carcassonne/albi-episcopal-city/',
    '/france/toulouse-albi-carcassonne/carcassonne-cite-bastide/'
  ]);
  const marseilleEditedRoutes = new Set([
    '/france/marseille-calanques/',
    '/france/marseille-calanques/old-port-panier-mucem/',
    '/france/marseille-calanques/calanques-access-choice/',
    '/france/marseille-calanques/cassis-la-ciotat/'
  ]);
  const coteDAzurEditedRoutes = new Set([
    '/france/cote-dazur/',
    '/france/cote-dazur/nice-old-town-hills/',
    '/france/cote-dazur/eze-monaco-menton/',
    '/france/cote-dazur/antibes-cannes-west-coast/'
  ]);
  const frenchAlpsEditedRoutes = new Set([
    '/france/french-alps/',
    '/france/french-alps/annecy-lake-old-town/',
    '/france/french-alps/chamonix-mountain-systems/',
    '/france/french-alps/grenoble-bastille-chartreuse/'
  ]);
  for (const route of routes) {
    const expectedDate = marseilleEditedRoutes.has(route) || coteDAzurEditedRoutes.has(route) || frenchAlpsEditedRoutes.has(route) ? '2026-10-12' : lyonEditedRoutes.has(route) || alsaceEditedRoutes.has(route) || burgundyEditedRoutes.has(route) || bordeauxGirondeEditedRoutes.has(route) || dordogneEditedRoutes.has(route) || toulouseOccitanieEditedRoutes.has(route) ? '2026-10-11' : brittanyEditedRoutes.has(route) ? '2026-10-10' : fr02EditedRoutes.has(route) ? '2026-10-11' : normandyEditedRoutes.has(route) ? '2026-10-07' : parisEditedRoutes.has(route) ? '2026-10-06' : franceResponsiveEditedRoutes.has(route) ? '2026-10-07' : '2026-09-20';
    check(sitemap.includes(`<loc>https://tripdistill.com${route}</loc><lastmod>${expectedDate}</lastmod>`), `${route}: sitemap missing or stale`);
  }
  for (const route of fr02EditedRoutes) {
    for (const [language, prefix] of locales) {
      const localizedRoute = `${prefix}${route}`;
      check(sitemap.includes(`<loc>https://tripdistill.com${localizedRoute}</loc><lastmod>2026-10-11</lastmod>`), `${language}: ${localizedRoute} sitemap date is not 2026-10-11`);
    }
  }
  for (const route of brittanyEditedRoutes) {
    for (const [language, prefix] of locales) {
      const localizedRoute = `${prefix}${route}`;
      check(sitemap.includes(`<loc>https://tripdistill.com${localizedRoute}</loc><lastmod>2026-10-10</lastmod>`), `${language}: ${localizedRoute} sitemap date is not 2026-10-10`);
    }
  }
  for (const route of lyonEditedRoutes) {
    for (const [language, prefix] of locales) {
      const localizedRoute = `${prefix}${route}`;
      check(sitemap.includes(`<loc>https://tripdistill.com${localizedRoute}</loc><lastmod>2026-10-11</lastmod>`), `${language}: ${localizedRoute} sitemap date is not 2026-10-11`);
    }
  }
  for (const route of alsaceEditedRoutes) {
    for (const [language, prefix] of locales) {
      const localizedRoute = `${prefix}${route}`;
      check(sitemap.includes(`<loc>https://tripdistill.com${localizedRoute}</loc><lastmod>2026-10-11</lastmod>`), `${language}: ${localizedRoute} sitemap date is not 2026-10-11`);
    }
  }
  for (const route of burgundyEditedRoutes) {
    for (const [language, prefix] of locales) {
      const localizedRoute = `${prefix}${route}`;
      check(sitemap.includes(`<loc>https://tripdistill.com${localizedRoute}</loc><lastmod>2026-10-11</lastmod>`), `${language}: ${localizedRoute} sitemap date is not 2026-10-11`);
    }
  }
  for (const route of [...bordeauxGirondeEditedRoutes, ...dordogneEditedRoutes, ...toulouseOccitanieEditedRoutes]) {
    for (const [language, prefix] of locales) {
      const localizedRoute = `${prefix}${route}`;
      check(sitemap.includes(`<loc>https://tripdistill.com${localizedRoute}</loc><lastmod>2026-10-11</lastmod>`), `${language}: ${localizedRoute} sitemap date is not 2026-10-11`);
    }
  }
  for (const route of marseilleEditedRoutes) {
    if (englishOnly) continue;
    for (const [language, prefix] of locales) {
      const localizedRoute = `${prefix}${route}`;
      check(sitemap.includes(`<loc>https://tripdistill.com${localizedRoute}</loc><lastmod>2026-10-12</lastmod>`), `${language}: ${localizedRoute} sitemap date is not 2026-10-12`);
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  console.error(`France audit: ${failures.length} failure(s).`);
  process.exitCode = 1;
} else {
  console.log(`France audit passed: 20 hubs, 60 focused guides, 81 English / 405 five-language routes, 60 credited images and 60 unique planning instruments; Grenoble route connectors clear all card edges${englishOnly ? ' (localized file checks deferred)' : ''}.`);
}
