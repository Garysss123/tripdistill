import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const harnessDir = path.join(dist, 'qa', 'japan-overview-responsive');
const manifestPath = path.join(harnessDir, 'release.json');
const htmlPath = path.join(harnessDir, 'index.html');
const live = process.argv.includes('--live');
const origin = (process.argv.find((value) => value.startsWith('--url='))?.slice(6) || 'https://hokkaido-qa.trip-68e.pages.dev').replace(/\/+$/, '');
const route = { path: '/japan/', label: 'Japan overview' };
const editedRoutes = [
  '/japan/',
  '/japan/tokyo/',
  '/japan/tokyo/shinjuku/',
  '/japan/tokyo/shibuya-harajuku/',
  '/japan/tokyo/asakusa-ueno/',
  '/japan/tokyo/tokyo-station-ginza/',
  '/japan/tokyo/akihabara-kanda/',
  '/japan/tokyo/roppongi-azabu/',
  '/japan/tokyo/odaiba-toyosu/',
  '/japan/tokyo/ikebukuro/',
  '/japan/kyoto/central-kyoto-nishiki/',
  '/japan/kyoto/kinkakuji-northwest/',
  '/japan/kyoto/kiyomizudera-higashiyama/',
  '/japan/kyoto/kyoto-station-south/',
  '/japan/kyoto/philosophers-path-okazaki/',
  '/japan/osaka/osaka-bay/'
];
const locales = [
  { code: 'en', label: 'English', prefix: '' },
  { code: 'zh-Hant', label: 'Traditional Chinese', prefix: '/zh' },
  { code: 'ja', label: 'Japanese', prefix: '/ja' },
  { code: 'ko', label: 'Korean', prefix: '/ko' },
  { code: 'th', label: 'Thai', prefix: '/th' }
];
const expectedPhotoCredits = [
  { asset: '/assets/images/mount-fuji-sakura.webp', title: 'Mount Fuji April Cherry Blossom.jpg', creator: 'SRP1998', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mount_Fuji_April_Cherry_Blossom.jpg', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', shareAlike: true },
  { asset: '/assets/images/shibuya-night.webp', title: 'Shibuya crossing at night, Tokyo, Japan.jpg', creator: 'Joli Rumi', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Shibuya_crossing_at_night,_Tokyo,_Japan.jpg', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', shareAlike: true },
  { asset: '/assets/images/kyoto-yasaka-dori.webp', title: 'Yasaka-dori early morning with street lanterns and the Tower of Yasaka (Hokan-ji Temple), Kyoto, Japan.jpg', creator: 'Basile Morin', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Yasaka-dori_early_morning_with_street_lanterns_and_the_Tower_of_Yasaka_(Hokan-ji_Temple),_Kyoto,_Japan.jpg', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', shareAlike: true },
  { asset: '/assets/images/osaka-castle-sakura.webp', title: 'Osaka Castle cherry blossom, 2018', creator: 'Luka Peternel', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Osaka-Castle-cherry-blossom-2018-Luka-Peternel.jpg', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', shareAlike: true },
  { asset: '/assets/images/biei-landscape.webp', title: 'Biei landscape', creator: 'Chi King', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Biei_landscape_(7662422372).jpg', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', shareAlike: false },
  { asset: '/assets/images/fushimi-inari.webp', title: 'Torii path with lantern at Fushimi Inari Taisha Shrine, Kyoto, Japan.jpg', creator: 'Basile Morin', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine,_Kyoto,_Japan.jpg', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', shareAlike: true }
];
function assert(ok, message) { if (!ok) throw new Error(message); }
function hash(bytes) { return createHash('sha256').update(bytes).digest('hex'); }
function attr(node, name) { return node.attrs?.find((item) => item.name === name)?.value || ''; }
function walk(node, visit) { visit(node); for (const child of node.childNodes || []) walk(child, visit); }
function find(node, predicate) { if (predicate(node)) return node; for (const child of node.childNodes || []) { const found = find(child, predicate); if (found) return found; } return null; }
function textOf(node) { if (node.nodeName === '#text') return node.value; if (node.tagName === 'br') return ' '; return (node.childNodes || []).map(textOf).join(''); }
function git(args) { const safeDirectory = root.replaceAll('\\', '/'); return execFileSync('git', ['-c', `safe.directory=${safeDirectory}`, ...args], { cwd: root, encoding: 'utf8' }).trim(); }
function distFile(urlPath) { const pathname = decodeURIComponent(new URL(urlPath, 'https://tripdistill.com').pathname); return path.join(dist, pathname.replace(/^\//, '')); }
function escaped(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

assert(fs.existsSync(manifestPath) && fs.existsSync(htmlPath), 'Build the Japan overview QA harness first.');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const harness = fs.readFileSync(htmlPath, 'utf8');
const sitemapBytes = fs.readFileSync(path.join(dist, 'sitemap.xml'));
const sitemap = sitemapBytes.toString('utf8');
const stylesheetRecord = manifest.assets.find((item) => item.path === '/css/site.css');
assert(stylesheetRecord, 'Japan overview manifest must pin the shared stylesheet.');
const siteCss = fs.readFileSync(distFile(stylesheetRecord.path), 'utf8');
const japanBodyRule = /body\[data-page="japan"\]\s*\{([^}]*)\}/s.exec(siteCss)?.[1] || '';
const japanCompareRule = /body\[data-page="japan"\]\s+\.compare-wrap\s*\{([^}]*)\}/s.exec(siteCss)?.[1] || '';
const japanHeroRule = /body\[data-page="japan"\]\s+\.page-hero-content\s*\{([^}]*)\}/s.exec(siteCss)?.[1] || '';
const japanHeroTextRule = /body\[data-page="japan"\]\s+\.page-hero-content\s+p\s*\{([^}]*)\}/s.exec(siteCss)?.[1] || '';
assert(/min-width\s*:\s*0(?:px)?\s*;/i.test(japanBodyRule), 'Japan overview must override the shared 320px body minimum.');
assert(/max-width\s*:\s*100%\s*;/i.test(japanCompareRule) && /overflow-x\s*:\s*auto\s*;/i.test(japanCompareRule), 'The wide trip comparison must remain available in its own horizontal scroller.');
const panel = japanHeroRule.match(/background\s*:\s*rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(0?\.\d+)\s*\)/i);
const heroText = japanHeroTextRule.match(/color\s*:\s*(#[0-9a-f]{6})/i)?.[1];
assert(panel && heroText, 'Static hero contrast check needs an explicit translucent panel and text color.');
const backgroundRgb = panel.slice(1, 4).map(Number).map((channel) => channel * Number(panel[4]) + 255 * (1 - Number(panel[4])));
const foregroundRgb = heroText.match(/[0-9a-f]{2}/gi).map((channel) => parseInt(channel, 16));
function luminance(rgb) {
  const linear = rgb.map((channel) => channel / 255).map((channel) => channel <= .04045 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4);
  return .2126 * linear[0] + .7152 * linear[1] + .0722 * linear[2];
}
const heroContrastEstimate = (luminance(foregroundRgb) + .05) / (luminance(backgroundRgb) + .05);
assert(heroContrastEstimate >= 4.5, `Japan hero text's static worst-case white-image contrast estimate is only ${heroContrastEstimate.toFixed(2)}:1.`);
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert(manifest.project === 'trip' && manifest.branch === 'hokkaido-qa', 'Manifest must identify only the existing trip project and hokkaido-qa branch.');
assert(manifest.routeCount === 5 && isDeepStrictEqual(manifest.route, route), 'Manifest must cover the one Japan country route in five locales.');
assert(isDeepStrictEqual(manifest.editedSitemapRoutes, editedRoutes.map((path) => ({ path, lastmod: '2026-10-06' }))), 'Manifest must preserve the evidenced 16 route-level source-edit dates.');
assert(isDeepStrictEqual(manifest.locales, locales.map(({ code, label }) => ({ code, label }))), 'Manifest locale inventory changed.');
assert(isDeepStrictEqual(manifest.viewportWidths, [320, 390]), 'Harness must retain the 320 and 390 CSS-pixel frames.');
assert(manifest.commit === git(['rev-parse', 'HEAD']), 'Manifest commit must match local HEAD.');
assert(!git(['status', '--porcelain']), 'Build the preview manifest from a committed, clean worktree.');
assert(sitemapUrls.length === 4560 && new Set(sitemapUrls).size === 4560, 'Public sitemap must retain 4,560 unique URLs.');
assert(!sitemap.includes('/qa/japan-overview-responsive/'), 'Harness must stay outside the public sitemap.');
assert(harness.includes('name="robots" content="noindex,nofollow,noarchive"'), 'Harness must be explicitly noindex.');
assert(harness.includes('width="320"') && harness.includes('width="390"'), 'Harness must contain paired 320/390 pixel frames.');

const pageRecords = [];
const summaries = new Map();
for (const locale of locales) {
  const urlPath = `${locale.prefix}${route.path}`;
  const pageRecord = manifest.pages.find((item) => item.locale === locale.code && item.path === urlPath);
  assert(pageRecord, `Manifest is missing ${locale.code} ${urlPath}.`);
  const pageBytes = fs.readFileSync(distFile(urlPath + 'index.html'));
  assert(hash(pageBytes) === pageRecord.sha256, `Built route hash mismatch: ${urlPath}.`);
  const doc = parse(pageBytes.toString('utf8'));
  let lang = '';
  let marker = '';
  let h1Count = 0;
  let title = '';
  let description = '';
  let canonical = '';
  let emptyAlt = false;
  const alternates = new Map();
  const ids = new Set();
  const labels = [];
  const images = [];
  const photoCreditRows = [];
  const stylesheets = [];
  const scripts = [];
  const internalLinks = new Set();
  const externalLinks = new Set();
  walk(doc, (node) => {
    if (node.tagName === 'html') lang = attr(node, 'lang');
    if (node.tagName === 'body') marker = attr(node, 'data-page');
    if (node.tagName === 'h1') h1Count++;
    if (node.tagName === 'title') title = textOf(node).trim();
    if (node.tagName === 'meta' && attr(node, 'name').toLowerCase() === 'description') description = attr(node, 'content').trim();
    if (node.tagName === 'link' && attr(node, 'rel') === 'canonical') canonical = attr(node, 'href');
    if (node.tagName === 'link' && attr(node, 'rel') === 'alternate' && attr(node, 'hreflang')) alternates.set(attr(node, 'hreflang'), attr(node, 'href'));
    const id = attr(node, 'id'); if (id) { assert(!ids.has(id), `${urlPath} repeats id ${id}.`); ids.add(id); }
    if (attr(node, 'aria-labelledby')) labels.push(...attr(node, 'aria-labelledby').split(/\s+/));
    if (node.tagName === 'img') { const alt = attr(node, 'alt').trim(); if (!alt) emptyAlt = true; const src = attr(node, 'src'); if (src.startsWith('/')) images.push(src); }
    if (node.tagName === 'li' && attr(node, 'data-photo-asset')) photoCreditRows.push(node);
    if (node.tagName === 'link' && attr(node, 'rel') === 'stylesheet') stylesheets.push(attr(node, 'href'));
    if (node.tagName === 'script' && attr(node, 'src')) scripts.push(attr(node, 'src'));
    if (node.tagName === 'a') { const href = attr(node, 'href'); if (href.startsWith('/')) internalLinks.add(href); if (/^https?:\/\//i.test(href)) externalLinks.add(href); if (attr(node, 'target') === '_blank') assert(attr(node, 'rel').split(/\s+/).includes('noopener'), `${urlPath} has a new-tab link without noopener.`); }
  });
  assert(lang === locale.code && marker === 'japan' && h1Count === 1, `${urlPath} has incorrect language, page marker or heading count.`);
  assert(title.length >= 20 && title.length <= 100, `${urlPath} title is empty or out of bounds.`);
  assert(description.length >= 40 && description.length <= 300, `${urlPath} description is empty or out of bounds.`);
  assert(canonical === `https://tripdistill.com${urlPath}`, `${urlPath} canonical does not match the preserved route.`);
  assert(!emptyAlt, `${urlPath} contains an image with empty alt text.`);
  assert(photoCreditRows.length === expectedPhotoCredits.length, `${urlPath} must show all ${expectedPhotoCredits.length} overview image credits.`);
  for (const credit of expectedPhotoCredits) {
    const row = photoCreditRows.find((item) => attr(item, 'data-photo-asset') === credit.asset);
    assert(row, `${urlPath} is missing the visible credit for ${credit.asset}.`);
    assert(attr(row, 'data-photo-title') === credit.title && attr(row, 'data-photo-creator') === credit.creator && attr(row, 'data-photo-license') === credit.license, `${urlPath} has a mismatched title, creator or license for ${credit.asset}.`);
    const rowLinks = [];
    const editKeys = [];
    walk(row, (node) => { if (node.tagName === 'a') rowLinks.push(node); const editKey = attr(node, 'data-photo-edit-key'); if (editKey) editKeys.push(editKey); });
    const sourceLink = rowLinks.find((node) => attr(node, 'href') === credit.sourceUrl);
    const licenseLink = rowLinks.find((node) => attr(node, 'href') === credit.licenseUrl);
    assert(sourceLink && attr(sourceLink, 'data-photo-source-link') === 'true' && textOf(sourceLink).trim() && !/\.(?:jpe?g|webp)$/i.test(textOf(sourceLink).trim()), `${urlPath} must link the translated attribution to the exact source without exposing a raw image filename for ${credit.asset}.`);
    assert(licenseLink && textOf(licenseLink).trim() === credit.license, `${urlPath} must link the exact license version for ${credit.asset}.`);
    const editKey = editKeys[0] || '';
    assert(editKey.includes('converted to WebP'), `${urlPath} must disclose WebP conversion for ${credit.asset}.`);
    assert((attr(row, 'data-photo-share-alike') === 'true') === credit.shareAlike, `${urlPath} has an incorrect share-alike marker for ${credit.asset}.`);
    assert(credit.shareAlike ? editKey.includes(`same ${credit.license} license`) : !/share-alike/i.test(editKey), `${urlPath} must accurately state the applicable adaptation terms for ${credit.asset}.`);
  }
  for (const id of labels) assert(ids.has(id), `${urlPath} has broken aria-labelledby target ${id}.`);
  for (const item of locales) assert(alternates.get(item.code) === `https://tripdistill.com${item.prefix}${route.path}`, `${urlPath} has incorrect ${item.code} alternate.`);
  assert(alternates.get('x-default') === 'https://tripdistill.com/japan/', `${urlPath} x-default must point to the English country route.`);
  const exactUrl = `https://tripdistill.com${urlPath}`;
  assert(sitemapUrls.includes(exactUrl), `Sitemap omits ${urlPath}.`);
  for (const slug of ['tokyo', 'kyoto', 'osaka', 'hokkaido']) assert(internalLinks.has(`${locale.prefix}/japan/${slug}/`), `${urlPath} must link to the localized ${slug} guide.`);
  for (const required of ['https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html','https://japanrailpass.net/en/purchase/price/','https://smart-ex.jp/en/product/','https://services.digital.go.jp/en/visit-japan-web/']) assert(externalLinks.has(required), `${urlPath} is missing official entry/fare reference ${required}.`);

  const faqHeading = find(doc, (node) => node.tagName === 'h2' && attr(node, 'id') === 'japan-faq-title');
  assert(faqHeading, `${urlPath} has no visible Japan FAQ heading.`);
  const faqSection = (doc.childNodes || []).length ? find(doc, (node) => node.tagName === 'section' && (node.attrs || []).some((item) => item.name === 'aria-labelledby' && item.value === 'japan-faq-title')) : null;
  assert(faqSection, `${urlPath} has no visible FAQ section.`);
  const details = [];
  walk(faqSection, (node) => { if (node.tagName === 'details') details.push(node); });
  const visibleFaq = details.map((detail) => {
    const question = find(detail, (node) => node.tagName === 'summary');
    const answer = find(detail, (node) => node.tagName === 'p');
    assert(question && answer, `${urlPath} has a malformed visible FAQ.`);
    return { '@type': 'Question', name: textOf(question).replace(/\s+/g, ' ').trim(), acceptedAnswer: { '@type': 'Answer', text: textOf(answer).replace(/\s+/g, ' ').trim() } };
  });
  let faqSchema = null;
  walk(doc, (node) => {
    if (node.tagName !== 'script' || attr(node, 'type') !== 'application/ld+json') return;
    try { const data = JSON.parse(node.childNodes?.[0]?.value || '{}'); faqSchema = (data['@graph'] || []).find((item) => item['@type'] === 'FAQPage') || faqSchema; } catch { /* other JSON-LD is checked by the full site audit */ }
  });
  assert(faqSchema && isDeepStrictEqual(faqSchema.mainEntity, visibleFaq), `${urlPath} FAQPage schema does not exactly match the visible questions and answers.`);
  pageRecords.push({ locale: locale.code, path: urlPath, record: pageRecord, bytes: pageBytes, images, stylesheets, scripts });

  const searchRecord = manifest.searchIndexes.find((item) => item.locale === locale.code);
  assert(searchRecord, `Manifest is missing the ${locale.code} search index.`);
  const searchBytes = fs.readFileSync(distFile(searchRecord.path));
  assert(hash(searchBytes) === searchRecord.sha256, `${locale.code} search-index hash mismatch.`);
  const index = JSON.parse(searchBytes.toString('utf8'));
  const country = index.find((item) => item.url === urlPath);
  assert(country?.summary?.trim(), `${locale.code} Japan search summary is empty.`);
  summaries.set(locale.code, country.summary);
}
for (const locale of locales) {
  for (const editedRoute of manifest.editedSitemapRoutes) {
    const urlPath = `${locale.prefix}${editedRoute.path}`;
    const exactUrl = `https://tripdistill.com${urlPath}`;
    const lastmod = sitemap.match(new RegExp(`<url><loc>${escaped(exactUrl)}</loc><lastmod>([^<]+)</lastmod>`));
    assert(lastmod?.[1] === editedRoute.lastmod, `${urlPath} must retain its evidenced lastmod ${editedRoute.lastmod}.`);
  }
}
assert(new Set([...summaries.values()]).size === 5, 'Japan search summary must be distinct in each locale.');
for (const asset of manifest.assets) { const bytes = fs.readFileSync(distFile(asset.path)); assert(hash(bytes) === asset.sha256, `Asset hash mismatch: ${asset.path}.`); }
assert(isDeepStrictEqual(manifest.assets.map((item) => item.path), [...new Set(manifest.assets.map((item) => item.path))].sort()), 'Asset manifest must be unique and sorted.');
assert(manifest.sitemap.urlCount === 4560 && hash(sitemapBytes) === manifest.sitemap.sha256, 'Manifest must pin the unchanged 4,560-URL sitemap.');

const harnessDoc = parse(harness);
let localeControl = false;
let titledFrames = 0;
walk(harnessDoc, (node) => { if (node.tagName === 'select' && attr(node, 'id') === 'locale') localeControl = true; if (node.tagName === 'iframe' && attr(node, 'title')) titledFrames++; });
assert(localeControl && titledFrames === 2, 'Harness needs a labeled language selector and two titled frames.');
const localCommit = git(['rev-parse', 'HEAD']);
assert(manifest.commit === localCommit && manifest.branch === 'hokkaido-qa', 'Preview manifest identity must match local branch and commit.');
console.log(`Local Japan overview harness verified: ${pageRecords.length}/5 locale routes, FAQ/schema, SEO/hreflang, official entry/fare links, six exact visible photo credits per locale, localized search summaries, ${manifest.assets.length} referenced assets, ${manifest.editedSitemapRoutes.length * 5}/80 route-language dates, scoped 320px body shrink, intact table scroller, paired 320/390px frames, static worst-case hero contrast estimate ${heroContrastEstimate.toFixed(2)}:1 (white image under panel), noindex harness and 4,560 sitemap URLs. The static checks do not measure actual browser scrollWidth or image-pixel contrast.`);

if (live) {
  async function fetchBytes(urlPath, expectedHash) {
    const response = await fetch(origin + urlPath, { redirect: 'follow' });
    assert(response.status === 200, `${urlPath} returned HTTP ${response.status}.`);
    const bytes = Buffer.from(await response.arrayBuffer());
    if (expectedHash) assert(hash(bytes) === expectedHash, `${urlPath} differs from the reviewed artifact.`);
    return bytes;
  }
  const remoteManifestBytes = await fetchBytes('/qa/japan-overview-responsive/release.json');
  const remoteManifest = JSON.parse(remoteManifestBytes.toString('utf8'));
  assert(isDeepStrictEqual(remoteManifest, manifest), 'Live preview manifest differs from the local release manifest.');
  const harnessBytes = await fetchBytes('/qa/japan-overview-responsive/', hash(fs.readFileSync(htmlPath)));
  assert(harnessBytes.toString('utf8').includes('name="robots" content="noindex,nofollow,noarchive"'), 'Live harness noindex policy is missing.');
  for (const page of manifest.pages) await fetchBytes(page.path, page.sha256);
  for (const item of [...manifest.searchIndexes, ...manifest.assets]) await fetchBytes(item.path, item.sha256);
  const liveSitemap = await fetchBytes('/sitemap.xml', manifest.sitemap.sha256);
  const liveUrls = [...liveSitemap.toString('utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert(liveUrls.length === 4560 && new Set(liveUrls).size === 4560, 'Live sitemap count or uniqueness changed.');
  console.log(`Live Japan overview preview verified at ${origin}: 5/5 locale pages, ${manifest.assets.length}/${manifest.assets.length} assets, 5/5 localized search indexes, noindex harness and unchanged 4,560-URL sitemap.`);
}
