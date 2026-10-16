import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const harnessDir = path.join(dist, 'qa', 'osaka-responsive');
const manifestPath = path.join(harnessDir, 'release.json');
const htmlPath = path.join(harnessDir, 'index.html');
const live = process.argv.includes('--live');
const originArg = process.argv.find((arg) => arg.startsWith('--url='))?.slice('--url='.length);
const origin = (originArg || 'https://osaka-qa.trip-68e.pages.dev').replace(/\/+$/, '');
if (!fs.existsSync(manifestPath) || !fs.existsSync(htmlPath)) throw new Error('Build the Osaka harness first.');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const harness = fs.readFileSync(htmlPath, 'utf8');
const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expectedRoutes = [
  { path: '/japan/osaka/', label: 'Osaka city guide' },
  { path: '/japan/osaka/namba/', label: 'Namba' },
  { path: '/japan/osaka/umeda/', label: 'Umeda' },
  { path: '/japan/osaka/tennoji-shinsekai/', label: 'Tennoji & Shinsekai' },
  { path: '/japan/osaka/osaka-castle-area/', label: 'Osaka Castle area' },
  { path: '/japan/osaka/osaka-bay/', label: 'Osaka Bay & USJ' }
];
const expectedLocales = [
  { code: 'en', label: 'English', prefix: '' },
  { code: 'zh-Hant', label: 'Traditional Chinese', prefix: '/zh' },
  { code: 'ja', label: 'Japanese', prefix: '/ja' },
  { code: 'ko', label: 'Korean', prefix: '/ko' },
  { code: 'th', label: 'Thai', prefix: '/th' }
];

function hash(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

function localPath(urlPath) {
  return path.join(dist, decodeURIComponent(urlPath).replace(/^\//, ''));
}

function attr(node, name) {
  return node.attrs?.find((item) => item.name === name)?.value || '';
}

function walk(node, visit) {
  visit(node);
  for (const child of node.childNodes || []) walk(child, visit);
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(manifest.project === 'trip' && manifest.branch === 'osaka-qa', 'Manifest project/branch identity mismatch.');
assert(manifest.routeCount === 30, `Expected 30 route-language pages, got ${manifest.routeCount}.`);
assert(JSON.stringify(manifest.routes) === JSON.stringify(expectedRoutes), 'Manifest route inventory changed.');
assert(JSON.stringify(manifest.locales) === JSON.stringify(expectedLocales.map(({ code, label }) => ({ code, label }))), 'Manifest locale inventory changed.');
assert(JSON.stringify(manifest.viewportWidths) === JSON.stringify([320, 390]), 'Manifest viewport widths changed.');
assert(sitemapUrls.length === 4560 && new Set(sitemapUrls).size === 4560, `Expected 4,560 unique sitemap URLs, got ${sitemapUrls.length}.`);
assert(!sitemap.includes('/qa/osaka-responsive/'), 'The QA harness must not be in the public sitemap.');
assert(harness.includes('name="robots" content="noindex,nofollow,noarchive"'), 'Harness robots policy must remain noindex.');
assert(harness.includes('width="320"') && harness.includes('width="390"'), 'Harness must show 320px and 390px frames.');
const siteCss = fs.readFileSync(path.join(root, 'css', 'site.css'), 'utf8');
const cityShrinkRule = siteCss.match(/body\[data-city="kyoto"\],\s*body\[data-city="osaka"\]\s*\{([^}]*)\}/);
assert(cityShrinkRule && /min-width:\s*0\s*;/.test(cityShrinkRule[1]), 'Kyoto and Osaka pages must be able to shrink below the global 320px minimum.');
assert(!/overflow(?:-x)?:\s*hidden/.test(cityShrinkRule[1]), 'The city width fix must not hide overflow.');
const osakaCss = fs.readFileSync(path.join(root, 'css', 'osaka-editorial.css'), 'utf8');
const noteGrid = osakaCss.match(/\.osaka-field-notes__grid\s*\{([^}]*)\}/);
const noteCard = osakaCss.match(/\.osaka-field-note\s*\{([^}]*)\}/);
assert(noteGrid && /display:\s*grid/.test(noteGrid[1]) && /minmax\(0,\s*1fr\)/.test(noteGrid[1]), 'Osaka editorial note cards need shrinkable grid columns.');
assert(noteCard && /min-width:\s*0\s*;/.test(noteCard[1]), 'Osaka note cards need min-width: 0 for translated labels.');
assert(!/white-space:\s*nowrap/.test(osakaCss), 'Osaka editorial note labels must remain free to wrap.');
assert(/@media\s*\(max-width:\s*700px\)[\s\S]*?\.osaka-field-notes__grid[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1fr\)/.test(osakaCss), 'Osaka editorial note cards must collapse to one column on narrow screens.');

const manifestPagePaths = new Set(manifest.pages.map((page) => page.path));
const expectedPagePaths = [];
const bodyChecks = [];
for (const locale of expectedLocales) {
  for (const route of expectedRoutes) {
    const urlPath = `${locale.prefix}${route.path}`;
    expectedPagePaths.push(urlPath);
    const record = manifest.pages.find((item) => item.locale === locale.code && item.path === urlPath);
    assert(record, `Manifest is missing ${locale.code} ${urlPath}.`);
    assert(sitemapUrls.includes(`https://tripdistill.com${urlPath}`), `Public sitemap is missing ${urlPath}.`);
    const htmlFile = path.join(localPath(urlPath), 'index.html');
    assert(fs.existsSync(htmlFile), `Built route is missing ${urlPath}.`);
    const html = fs.readFileSync(htmlFile);
    assert(hash(html) === record.sha256, `Built HTML hash mismatch for ${urlPath}.`);
    const doc = parse(html.toString('utf8'));
    let lang = '';
    let city = '';
    let h1Count = 0;
    const ids = new Set();
    const labelledBy = [];
    let badImageAlt = false;
    walk(doc, (node) => {
      if (node.tagName === 'html') lang = attr(node, 'lang');
      if (node.tagName === 'body') city = attr(node, 'data-city');
      if (node.tagName === 'h1') h1Count += 1;
      const id = attr(node, 'id');
      if (id && ids.has(id)) throw new Error(`${urlPath} has a duplicate id: ${id}.`);
      if (id) ids.add(id);
      if (attr(node, 'aria-labelledby')) labelledBy.push(...attr(node, 'aria-labelledby').split(/\s+/).filter(Boolean));
      if (node.tagName === 'img' && !attr(node, 'alt').trim()) badImageAlt = true;
    });
    assert(lang === locale.code, `${urlPath} declares lang=${lang}, expected ${locale.code}.`);
    assert(city === 'osaka', `${urlPath} must retain the Osaka city marker, got ${city || '(none)'}.`);
    assert(h1Count === 1, `${urlPath} must have exactly one h1, got ${h1Count}.`);
    assert(!badImageAlt, `${urlPath} contains an image without alternative text.`);
    for (const labelledId of labelledBy) assert(ids.has(labelledId), `${urlPath} has an aria-labelledby reference without a target: ${labelledId}.`);
    bodyChecks.push({ path: urlPath, record, html });
  }
}
assert(manifestPagePaths.size === 30 && expectedPagePaths.every((item) => manifestPagePaths.has(item)), 'Manifest contains unexpected or missing public routes.');

const castleEnglish = fs.readFileSync(path.join(localPath('/japan/osaka/osaka-castle-area/'), 'index.html'), 'utf8');
const bayEnglish = fs.readFileSync(path.join(localPath('/japan/osaka/osaka-bay/'), 'index.html'), 'utf8');
const castleCredits = castleEnglish.match(/<section\b[^>]*\bclass="[^"]*\bsources\b[^"]*"[\s\S]*?<\/section>/i)?.[0] || '';
const bayCredits = bayEnglish.match(/<section\b[^>]*\bclass="[^"]*\bsources\b[^"]*"[\s\S]*?<\/section>/i)?.[0] || '';
for (const phrase of ['Toyotomi stronghold', 'Tokugawa rebuilding', 'reconstructed with donations from Osaka citizens', 'CC BY-SA 4.0']) {
  assert(castleEnglish.includes(phrase), `Castle guide is missing reviewed history or attribution text: ${phrase}.`);
}
for (const phrase of ['About three hours for park and keep', 'entry lines', 'outside this core route', 'Optional half-day extension']) {
  assert(castleEnglish.includes(phrase), `Castle guide is missing the reviewed core-route and optional-museum distinction: ${phrase}.`);
}
for (const phrase of ['may or may not require an Area Timed Entry Ticket', 'do not infer benefits from the pass name', '2–3 hours', 'barrier-free guidance']) {
  assert(bayEnglish.includes(phrase), `Bay guide is missing reviewed ticket, visit or access guidance: ${phrase}.`);
}
assert(!bayEnglish.includes('seasonal marine transport when operating'), 'Bay guide must not imply unverified between-cluster marine service.');
assert(castleEnglish.includes('href="/css/osaka-editorial.css') && bayEnglish.includes('href="/css/osaka-editorial.css'), 'Castle and bay guides must load the Osaka editorial stylesheet used by their field-note panels.');
assert(castleCredits && !castleCredits.includes('osaka-castle-moat.webp') && !bayCredits.includes('tempozan-dusk.webp'), 'Photo credit labels must not expose raw image filenames.');

for (const asset of [...manifest.images, ...manifest.stylesheets]) {
  const file = localPath(asset.path);
  assert(fs.existsSync(file), `Built asset is missing: ${asset.path}.`);
  assert(hash(fs.readFileSync(file)) === asset.sha256, `Built asset hash mismatch: ${asset.path}.`);
}

const indexDoc = parse(harness);
let hasRouteControl = false;
let hasLocaleControl = false;
let titledFrames = 0;
walk(indexDoc, (node) => {
  if (node.tagName === 'select' && attr(node, 'id') === 'route') hasRouteControl = true;
  if (node.tagName === 'select' && attr(node, 'id') === 'locale') hasLocaleControl = true;
  if (node.tagName === 'iframe' && attr(node, 'title')) titledFrames += 1;
});
assert(hasRouteControl && hasLocaleControl && titledFrames === 2, 'QA controls or accessible iframe titles are missing.');

console.log(`Local Osaka harness verified: ${bodyChecks.length} pages (10 new-route pages across five locales), ${manifest.images.length} images, ${manifest.stylesheets.length} stylesheets, 320/390px frames, shrink/wrap rules, unique IDs, linked labels, image alts and 4,560 public URLs.`);

if (live) {
  async function verifyRemote(urlPath, expectedHash) {
    const response = await fetch(origin + urlPath, { redirect: 'follow' });
    assert(response.status === 200, `${urlPath} returned HTTP ${response.status}.`);
    const bytes = Buffer.from(await response.arrayBuffer());
    assert(hash(bytes) === expectedHash, `${urlPath} differs from the reviewed local build.`);
  }
  const remoteManifestResponse = await fetch(`${origin}/qa/osaka-responsive/release.json`, { redirect: 'follow' });
  assert(remoteManifestResponse.status === 200, `Remote QA manifest returned HTTP ${remoteManifestResponse.status}.`);
  const remoteManifest = await remoteManifestResponse.json();
  assert(isDeepStrictEqual(remoteManifest, manifest), 'Remote QA manifest identity differs from the local release.');
  const remoteHarnessResponse = await fetch(`${origin}/qa/osaka-responsive/`, { redirect: 'follow' });
  assert(remoteHarnessResponse.status === 200, `Remote QA harness returned HTTP ${remoteHarnessResponse.status}.`);
  const remoteHarness = Buffer.from(await remoteHarnessResponse.arrayBuffer());
  assert(hash(remoteHarness) === hash(fs.readFileSync(htmlPath)), 'Remote QA harness HTML differs from the local release.');
  assert(remoteHarness.toString('utf8').includes('name="robots" content="noindex,nofollow,noarchive"'), 'Remote QA harness noindex policy is missing.');
  const liveSitemap = await fetch(`${origin}/sitemap.xml`, { redirect: 'follow' });
  assert(liveSitemap.status === 200, `Live sitemap returned HTTP ${liveSitemap.status}.`);
  const liveSitemapText = await liveSitemap.text();
  const liveUrls = [...liveSitemapText.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert(liveUrls.length === 4560 && new Set(liveUrls).size === 4560, `Live sitemap has ${liveUrls.length} unique URLs, expected 4,560.`);
  assert(hash(Buffer.from(liveSitemapText)) === hash(fs.readFileSync(path.join(dist, 'sitemap.xml'))), 'Live sitemap body differs from the local artifact.');
  for (const item of bodyChecks) await verifyRemote(item.path, item.record.sha256);
  for (const asset of [...manifest.images, ...manifest.stylesheets]) await verifyRemote(asset.path, asset.sha256);
  console.log(`Live Osaka preview verified at ${origin}: 30/30 pages (including all 10 castle/bay locale routes), ${manifest.images.length}/${manifest.images.length} images, ${manifest.stylesheets.length}/${manifest.stylesheets.length} stylesheets, and 4,560 sitemap URLs.`);
}
