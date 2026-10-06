import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
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
  { path: '/japan/osaka/tennoji-shinsekai/', label: 'Tennoji & Shinsekai' }
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
assert(manifest.routeCount === 20, `Expected 20 route-language pages, got ${manifest.routeCount}.`);
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
    walk(doc, (node) => {
      if (node.tagName === 'html') lang = attr(node, 'lang');
      if (node.tagName === 'body') city = attr(node, 'data-city');
      if (node.tagName === 'h1') h1Count += 1;
    });
    assert(lang === locale.code, `${urlPath} declares lang=${lang}, expected ${locale.code}.`);
    assert(city === 'osaka', `${urlPath} must retain the Osaka city marker, got ${city || '(none)'}.`);
    assert(h1Count === 1, `${urlPath} must have exactly one h1, got ${h1Count}.`);
    bodyChecks.push({ path: urlPath, record, html });
  }
}
assert(manifestPagePaths.size === 20 && expectedPagePaths.every((item) => manifestPagePaths.has(item)), 'Manifest contains unexpected or missing public routes.');

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

console.log(`Local Osaka harness verified: ${bodyChecks.length} pages, ${manifest.images.length} images, ${manifest.stylesheets.length} stylesheets, 320/390px frames, 4,560 public URLs.`);

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
  assert(JSON.stringify(remoteManifest) === JSON.stringify(manifest), 'Remote QA manifest identity differs from the local release.');
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
  console.log(`Live Osaka preview verified at ${origin}: 20/20 pages, ${manifest.images.length}/${manifest.images.length} images, ${manifest.stylesheets.length}/${manifest.stylesheets.length} stylesheets, and 4,560 sitemap URLs.`);
}
