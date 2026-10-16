import { isDeepStrictEqual } from 'node:util';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const harnessDir = path.join(dist, 'qa', 'kyoto-operating-review-responsive');
const htmlPath = path.join(harnessDir, 'index.html');
const manifestPath = path.join(harnessDir, 'release.json');
const live = process.argv.includes('--live');
const origin = (process.argv.find((value) => value.startsWith('--url='))?.slice(6) || 'https://hokkaido-qa.trip-68e.pages.dev').replace(/\/+$/, '');
const routes = [
  { path: '/japan/kyoto/central-kyoto-nishiki/', label: 'Central Kyoto & Nishiki' },
  { path: '/japan/kyoto/kinkakuji-northwest/', label: 'Kinkakuji & Northwest Kyoto' },
  { path: '/japan/kyoto/kiyomizudera-higashiyama/', label: 'Kiyomizudera & Southern Higashiyama' },
  { path: '/japan/kyoto/kyoto-station-south/', label: 'Kyoto Station & South' },
  { path: '/japan/kyoto/philosophers-path-okazaki/', label: "Philosopher's Path & Okazaki" }
];
const locales = [
  { code: 'en', label: 'English', prefix: '' },
  { code: 'zh-Hant', label: 'Traditional Chinese', prefix: '/zh' },
  { code: 'ja', label: 'Japanese', prefix: '/ja' },
  { code: 'ko', label: 'Korean', prefix: '/ko' },
  { code: 'th', label: 'Thai', prefix: '/th' }
];
const viewportWidths = [320, 390];
const assert = (ok, message) => { if (!ok) throw new Error(message); };
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');
const attr = (node, name) => node.attrs?.find((item) => item.name === name)?.value || '';
function walk(node, visit) { visit(node); for (const child of node.childNodes || []) walk(child, visit); }
function find(node, predicate) { if (predicate(node)) return node; for (const child of node.childNodes || []) { const found = find(child, predicate); if (found) return found; } return null; }
function textOf(node) { if (node.nodeName === '#text') return node.value; if (node.tagName === 'br') return ' '; return (node.childNodes || []).map(textOf).join(''); }
function git(args) { const safeDirectory = root.replaceAll('\\', '/'); return execFileSync('git', ['-c', `safe.directory=${safeDirectory}`, ...args], { cwd: root, encoding: 'utf8' }).trim(); }
function distFile(urlPath) { const pathname = decodeURIComponent(new URL(urlPath, 'https://tripdistill.com').pathname); return path.join(dist, pathname.replace(/^\//, '')); }
function escapeRegex(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

assert(fs.existsSync(manifestPath) && fs.existsSync(htmlPath), 'Build the Kyoto operating-review QA harness first.');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const html = fs.readFileSync(htmlPath, 'utf8');
const sitemapBytes = fs.readFileSync(path.join(dist, 'sitemap.xml'));
const sitemap = sitemapBytes.toString('utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expectedPages = locales.flatMap((locale) => routes.map((route) => ({ locale: locale.code, path: `${locale.prefix}${route.path}` })));
assert(manifest.project === 'trip' && manifest.branch === 'hokkaido-qa', 'Manifest must identify the existing trip project and hokkaido-qa branch.');
assert(manifest.routeCount === routes.length && manifest.pageCount === expectedPages.length, 'Manifest must cover five Kyoto routes in all five locales.');
assert(isDeepStrictEqual(manifest.routes, routes) && isDeepStrictEqual(manifest.locales, locales.map(({ code, label }) => ({ code, label }))), 'Manifest route or locale inventory changed.');
assert(isDeepStrictEqual(manifest.pages.map(({ locale, path }) => ({ locale, path })), expectedPages), 'Manifest route-language page inventory changed.');
assert(isDeepStrictEqual(manifest.viewportWidths, viewportWidths), 'Harness must contain paired 320/390 CSS-pixel frames.');
assert(manifest.commit === git(['rev-parse', 'HEAD']) && git(['branch', '--show-current']) === 'hokkaido-qa', 'Manifest identity must match local hokkaido-qa HEAD.');
assert(!git(['status', '--porcelain']), 'Build the Kyoto preview manifest from a committed, clean worktree.');
assert(sitemapUrls.length === 4560 && new Set(sitemapUrls).size === 4560, 'Public sitemap must retain 4,560 unique URLs.');
assert(!sitemap.includes('/qa/kyoto-operating-review-responsive/'), 'Kyoto QA harness must stay outside the public sitemap.');
assert(htmlIsNoindex(html), 'Harness must be explicitly noindex.');
function htmlIsNoindex(source) { return source.includes('name="robots" content="noindex,nofollow,noarchive"'); }

const harnessDoc = parse(html);
const routeSelect = find(harnessDoc, (node) => node.tagName === 'select' && attr(node, 'id') === 'route');
const localeSelect = find(harnessDoc, (node) => node.tagName === 'select' && attr(node, 'id') === 'locale');
const routeLabel = find(harnessDoc, (node) => node.tagName === 'label' && attr(node, 'for') === 'route');
const localeLabel = find(harnessDoc, (node) => node.tagName === 'label' && attr(node, 'for') === 'locale');
const configNode = find(harnessDoc, (node) => node.tagName === 'script' && attr(node, 'id') === 'qa-config');
assert(routeSelect && localeSelect && routeLabel && localeLabel && configNode, 'Harness needs accessible route and language controls.');
const config = JSON.parse(configNode.childNodes?.[0]?.value || '{}');
assert(isDeepStrictEqual(config.routes, routes) && isDeepStrictEqual(config.locales, locales), 'Rendered harness selectors must offer all requested guides and languages.');
const frames = [];
walk(harnessDoc, (node) => { if (node.tagName === 'iframe') frames.push({ width: Number(attr(node, 'width')), title: attr(node, 'title') }); });
assert(isDeepStrictEqual(frames.map(({ width }) => width), viewportWidths) && frames.every((frame) => frame.title), 'Harness needs titled paired viewport frames.');

const faqRecords = [];
for (const page of manifest.pages) {
  const pageBytes = fs.readFileSync(distFile(`${page.path}index.html`));
  assert(hash(pageBytes) === page.sha256, `${page.path} differs from the reviewed built artifact.`);
  const doc = parse(pageBytes.toString('utf8'));
  const expectedLocale = locales.slice(1).find((locale) => page.path.startsWith(locale.prefix + '/')) || locales[0];
  const route = routes.find((item) => page.path === `${expectedLocale.prefix}${item.path}`);
  let lang = '', marker = '', h1Count = 0, title = '', description = '', canonical = '';
  const alternates = new Map();
  const ids = new Set();
  const refs = [];
  const alts = [];
  const linkRels = [];
  const visibleFaq = [];
  let faqSchema = null;
  walk(doc, (node) => {
    if (node.tagName === 'html') lang = attr(node, 'lang');
    if (node.tagName === 'body') marker = attr(node, 'data-page');
    if (node.tagName === 'h1') h1Count += 1;
    if (node.tagName === 'title') title = textOf(node).trim();
    if (node.tagName === 'meta' && attr(node, 'name').toLowerCase() === 'description') description = attr(node, 'content').trim();
    if (node.tagName === 'link' && attr(node, 'rel') === 'canonical') canonical = attr(node, 'href');
    if (node.tagName === 'link' && attr(node, 'rel') === 'alternate' && attr(node, 'hreflang')) alternates.set(attr(node, 'hreflang'), attr(node, 'href'));
    const id = attr(node, 'id'); if (id) { assert(!ids.has(id), `${page.path} repeats id ${id}.`); ids.add(id); }
    if (attr(node, 'aria-labelledby')) refs.push(...attr(node, 'aria-labelledby').split(/\s+/));
    if (node.tagName === 'img') alts.push(attr(node, 'alt').trim());
    if (node.tagName === 'a' && attr(node, 'target') === '_blank') linkRels.push(attr(node, 'rel').split(/\s+/));
    if (node.tagName === 'details') {
      const question = find(node, (child) => child.tagName === 'summary');
      const answer = find(node, (child) => child.tagName === 'p');
      assert(question && answer, `${page.path} has a malformed visible FAQ.`);
      visibleFaq.push({ '@type': 'Question', name: textOf(question).replace(/\s+/g, ' ').trim(), acceptedAnswer: { '@type': 'Answer', text: textOf(answer).replace(/\s+/g, ' ').trim() } });
    }
    if (node.tagName === 'script' && attr(node, 'type') === 'application/ld+json') {
      try { const data = JSON.parse(node.childNodes?.[0]?.value || '{}'); faqSchema = (data['@graph'] || []).find((item) => item['@type'] === 'FAQPage') || faqSchema; } catch { /* other JSON-LD is covered by the site audit */ }
    }
  });
  assert(route && lang === page.locale && expectedLocale.code === page.locale, `${page.path} declares the wrong locale or route.`);
  assert(marker === route.path.replace(/\/+$/, '').split('/').at(-1) && h1Count === 1, `${page.path} has the wrong page marker or heading count.`);
  assert(title.length >= 20 && title.length <= 100 && description.length >= 40 && description.length <= 300, `${page.path} SEO title or description is empty or out of range.`);
  assert(canonical === `https://tripdistill.com${page.path}`, `${page.path} canonical changed.`);
  assert(alts.every(Boolean), `${page.path} has an image without alt text.`);
  for (const id of refs) assert(ids.has(id), `${page.path} has broken aria-labelledby target ${id}.`);
  for (const rel of linkRels) assert(rel.includes('noopener'), `${page.path} has a new-tab link without noopener.`);
  assert(faqSchema && isDeepStrictEqual(faqSchema.mainEntity, visibleFaq), `${page.path} FAQPage schema differs from the visible questions and answers.`);
  for (const locale of locales) assert(alternates.get(locale.code) === `https://tripdistill.com${locale.prefix}${route.path}`, `${page.path} has an incorrect ${locale.code} alternate.`);
  assert(alternates.get('x-default') === `https://tripdistill.com${route.path}`, `${page.path} x-default changed.`);
  assert(sitemapUrls.includes(`https://tripdistill.com${page.path}`), `Sitemap omits ${page.path}.`);
  faqRecords.push(page.path);
}
for (const asset of manifest.assets) assert(hash(fs.readFileSync(distFile(asset.path))) === asset.sha256, `Asset hash mismatch: ${asset.path}.`);
assert(isDeepStrictEqual(manifest.assets.map((item) => item.path), [...new Set(manifest.assets.map((item) => item.path))].sort()), 'Asset manifest must be unique and sorted.');
assert(manifest.sitemap.urlCount === 4560 && hash(sitemapBytes) === manifest.sitemap.sha256, 'Manifest must pin the unchanged 4,560-URL sitemap.');

console.log(`Local Kyoto harness verified: ${routes.length} guides × ${locales.length} locales = ${faqRecords.length}/25 pages, paired ${viewportWidths.join('/')}px frames, route/language selectors, FAQ/schema, hreflang/canonical, image alt text, ${manifest.assets.length} assets, noindex and unchanged 4,560-URL sitemap.`);

if (live) {
  async function fetchBytes(urlPath, expectedHash) {
    const response = await fetch(origin + urlPath, { redirect: 'follow' });
    assert(response.status === 200, `${urlPath} returned HTTP ${response.status}.`);
    const bytes = Buffer.from(await response.arrayBuffer());
    if (expectedHash) assert(hash(bytes) === expectedHash, `${urlPath} differs from the reviewed artifact.`);
    return bytes;
  }
  const remoteManifest = JSON.parse((await fetchBytes('/qa/kyoto-operating-review-responsive/release.json')).toString('utf8'));
  assert(isDeepStrictEqual(remoteManifest, manifest), 'Live Kyoto harness manifest differs from the local release manifest.');
  const harnessBytes = await fetchBytes('/qa/kyoto-operating-review-responsive/', hash(fs.readFileSync(htmlPath)));
  assert(htmlIsNoindex(harnessBytes.toString('utf8')), 'Live Kyoto harness is missing its noindex policy.');
  for (const page of manifest.pages) await fetchBytes(page.path, page.sha256);
  for (const asset of manifest.assets) await fetchBytes(asset.path, asset.sha256);
  const liveSitemap = await fetchBytes('/sitemap.xml', manifest.sitemap.sha256);
  const liveUrls = [...liveSitemap.toString('utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert(liveUrls.length === 4560 && new Set(liveUrls).size === 4560, 'Live sitemap count or uniqueness changed.');
  console.log(`Live Kyoto render harness verified at ${origin}/qa/kyoto-operating-review-responsive/: ${manifest.pages.length}/25 pages, ${manifest.assets.length}/${manifest.assets.length} assets, noindex selectors, paired ${viewportWidths.join('/')}px frames, and unchanged sitemap.`);
}
