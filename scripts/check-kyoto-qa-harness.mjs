import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const projectRoot = path.resolve(import.meta.dirname, '..');
const distRoot = path.join(projectRoot, 'dist');
const harnessRelative = path.join('qa', 'kyoto-responsive');
const harnessPath = path.join(distRoot, harnessRelative, 'index.html');
const releasePath = path.join(distRoot, harnessRelative, 'release.json');
const liveFlag = process.argv.includes('--live');
const originArg = process.argv.find((arg) => arg.startsWith('--url='))?.slice('--url='.length);
const origin = (originArg || 'https://kyoto-qa.trip-68e.pages.dev').replace(/\/+$/, '');

const expectedRoutes = [
  ['/japan/kyoto/', 'Kyoto hub'],
  ['/japan/kyoto/arashiyama-sagano/', 'Arashiyama & Sagano'],
  ['/japan/kyoto/fushimi-inari-sake-district/', 'Fushimi Inari & Sake District'],
  ['/japan/kyoto/gion-pontocho/', 'Gion & Pontocho']
];
const expectedLocales = [
  ['en', 'English', ''],
  ['zh-Hant', 'Traditional Chinese', '/zh'],
  ['ja', 'Japanese', '/ja'],
  ['ko', 'Korean', '/ko'],
  ['th', 'Thai', '/th']
];
const expectedWidths = [320, 390];

function walk(node, visit) {
  visit(node);
  for (const child of node.childNodes || []) walk(child, visit);
}

function text(node) {
  if (node.nodeName === '#text') return node.value;
  return (node.childNodes || []).map(text).join('');
}

function attr(node, name) {
  return node.attrs?.find((item) => item.name === name)?.value || '';
}

function hash(value) {
  return createHash('sha256').update(value).digest('hex');
}

function routeRows() {
  const rows = [];
  for (const [code, label, prefix] of expectedLocales) {
    for (const [routePath] of expectedRoutes) rows.push({ locale: code, label, path: `${prefix}${routePath}` });
  }
  return rows;
}

function assertNoindex(html, label) {
  const document = parse(html);
  const robots = [];
  walk(document, (node) => {
    if (node.tagName === 'meta' && attr(node, 'name').toLowerCase() === 'robots') robots.push(attr(node, 'content'));
  });
  if (robots.length !== 1 || !robots[0].split(',').map((part) => part.trim().toLowerCase()).includes('noindex')) {
    throw new Error(`${label}: expected one robots meta tag containing noindex`);
  }
  const selectors = new Map();
  const frames = [];
  const widthGroups = [];
  walk(document, (node) => {
    if (node.tagName === 'select') selectors.set(attr(node, 'id'), node);
    if (node.tagName === 'iframe') frames.push(node);
    if (node.tagName === 'div' && attr(node, 'id') === 'viewport-widths') widthGroups.push(node);
  });
  if (!selectors.has('route') || !selectors.has('locale')) throw new Error(`${label}: missing route or locale selector`);
  for (const [id, values] of [['route', expectedRoutes.map((_, i) => String(i))], ['locale', expectedLocales.map(([code]) => code)]]) {
    const actual = [];
    walk(selectors.get(id), (node) => { if (node.tagName === 'option') actual.push(attr(node, 'value')); });
    if (JSON.stringify(actual) !== JSON.stringify(values)) throw new Error(`${label}: #${id} options mismatch (${actual.join(', ')})`);
  }
  const widthLabels = [];
  if (widthGroups.length === 1) walk(widthGroups[0], (node) => { if (node.tagName === 'span') widthLabels.push(Number.parseInt(text(node), 10)); });
  if (widthGroups.length !== 1 || JSON.stringify(widthLabels) !== JSON.stringify(expectedWidths)) throw new Error(`${label}: fixed 320/390 viewport labels are missing or malformed`);
  if (frames.length !== 2 || !frames.some((frame) => attr(frame, 'id') === 'frame320' && attr(frame, 'width') === '320') || !frames.some((frame) => attr(frame, 'id') === 'frame390' && attr(frame, 'width') === '390')) {
    throw new Error(`${label}: expected exactly two iframes fixed at 320 and 390 CSS pixels`);
  }
  const configNode = [];
  walk(document, (node) => { if (node.tagName === 'script' && attr(node, 'id') === 'qa-config') configNode.push(node); });
  if (configNode.length !== 1) throw new Error(`${label}: missing one embedded route/locale config`);
  const config = JSON.parse(text(configNode[0]));
  if (JSON.stringify(config.routes.map(({ path, label }) => [path, label])) !== JSON.stringify(expectedRoutes)) throw new Error(`${label}: route config mismatch`);
  if (JSON.stringify(config.locales.map(({ code, label, prefix }) => [code, label, prefix])) !== JSON.stringify(expectedLocales)) throw new Error(`${label}: locale config mismatch`);
}

function assertRouteHtml(html, row, label) {
  const document = parse(html);
  let root = null;
  const titles = [];
  const h1s = [];
  const canonicals = [];
  const alternates = [];
  walk(document, (node) => {
    if (node.tagName === 'html') root = node;
    if (node.tagName === 'title') titles.push(text(node).trim());
    if (node.tagName === 'h1' && text(node).trim()) h1s.push(text(node).trim());
    if (node.tagName === 'link' && attr(node, 'rel').toLowerCase() === 'canonical') canonicals.push(attr(node, 'href'));
    if (node.tagName === 'link' && attr(node, 'rel').toLowerCase() === 'alternate') alternates.push(attr(node, 'hreflang'));
  });
  if (attr(root, 'lang') !== row.locale) throw new Error(`${label}: html lang ${attr(root, 'lang')} != ${row.locale}`);
  if (titles.length !== 1 || !titles[0]) throw new Error(`${label}: title missing or duplicated`);
  if (h1s.length !== 1) throw new Error(`${label}: expected exactly one non-empty H1`);
  if (canonicals.length !== 1 || canonicals[0] !== `https://tripdistill.com${row.path}`) throw new Error(`${label}: canonical mismatch (${canonicals.join(', ')})`);
  const expectedHreflangs = ['en', 'zh-Hant', 'ja', 'ko', 'th', 'x-default'];
  if (alternates.length !== expectedHreflangs.length || expectedHreflangs.some((code) => !alternates.includes(code))) throw new Error(`${label}: hreflang set mismatch`);
}

async function fetchNoStore(url) {
  return fetch(url, { cache: 'no-store', signal: AbortSignal.timeout(20000) });
}

if (!fs.existsSync(harnessPath) || !fs.existsSync(releasePath)) throw new Error('Build the site and Kyoto harness first.');
const localHarness = fs.readFileSync(harnessPath, 'utf8');
const localReleaseBytes = fs.readFileSync(releasePath);
const release = JSON.parse(localReleaseBytes.toString('utf8'));
assertNoindex(localHarness, 'dist harness');
if (release.project !== 'trip' || release.branch !== 'kyoto-qa' || release.routeCount !== 20) throw new Error('Release identity must be project trip, branch kyoto-qa, and 20 routes.');
if (JSON.stringify(release.viewportWidths) !== JSON.stringify(expectedWidths)) throw new Error('Release manifest viewport widths mismatch.');
if (JSON.stringify(release.routes.map(({ path, label }) => [path, label])) !== JSON.stringify(expectedRoutes)) throw new Error('Release manifest route list mismatch.');
if (JSON.stringify(release.locales.map(({ code, label }) => [code, label])) !== JSON.stringify(expectedLocales.map(([code, label]) => [code, label]))) throw new Error('Release manifest locale list mismatch.');

const rows = routeRows();
if (release.pages.length !== rows.length) throw new Error(`Release manifest has ${release.pages.length} localized routes; expected 20.`);
for (const row of rows) {
  const record = release.pages.find((page) => page.locale === row.locale && page.path === row.path);
  if (!record) throw new Error(`Release manifest missing route ${row.locale} ${row.path}.`);
  const localPath = path.join(distRoot, row.path.slice(1), 'index.html');
  const body = fs.readFileSync(localPath);
  if (hash(body) !== record.sha256) throw new Error(`Local build hash mismatch for ${row.locale} ${row.path}.`);
  assertRouteHtml(body.toString('utf8'), row, `local ${row.locale} ${row.path}`);
}
for (const image of release.images) {
  const localPath = path.join(distRoot, decodeURIComponent(image.path).slice(1));
  if (!fs.existsSync(localPath) || hash(fs.readFileSync(localPath)) !== image.sha256) throw new Error(`Local image hash mismatch: ${image.path}`);
}
const localSitemap = fs.readFileSync(path.join(distRoot, 'sitemap.xml'), 'utf8');
if (localSitemap.includes('/qa/kyoto-responsive/')) throw new Error('Kyoto harness must stay out of the sitemap.');
if ((localSitemap.match(/<loc>/g) || []).length !== 4560) throw new Error('Expected the existing 4,560 sitemap routes.');

if (!liveFlag) {
  assertNoindex(localHarness, 'local harness');
  console.log(`Local Kyoto QA harness passed: noindex; four route options; five locale options; 320/390 CSS-pixel frames; 20 route metadata checks; ${release.images.length} local image hashes; harness absent from 4,560-route sitemap; commit ${release.commit}.`);
} else {
  if (new URL(origin).hostname !== 'kyoto-qa.trip-68e.pages.dev' && !new URL(origin).hostname.endsWith('.trip-68e.pages.dev')) {
    throw new Error(`Live origin is not a deployment hostname for the verified trip-68e Pages project: ${origin}`);
  }
  const harnessUrl = `${origin}/qa/kyoto-responsive/`;
  let response;
  for (let attempt = 1; attempt <= 10; attempt += 1) {
    response = await fetchNoStore(`${harnessUrl}?release-check=${Date.now()}`);
    if (response.status === 200) break;
    if (attempt === 10) throw new Error(`Live harness returned HTTP ${response.status} after ${attempt} attempts.`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
  const remoteHarness = await response.text();
  assertNoindex(remoteHarness, 'live harness');
  if (hash(Buffer.from(remoteHarness)) !== hash(Buffer.from(localHarness))) throw new Error('Live harness body differs from local build.');

  const remoteReleaseResponse = await fetchNoStore(`${origin}/qa/kyoto-responsive/release.json`);
  if (remoteReleaseResponse.status !== 200) throw new Error(`Live release manifest returned HTTP ${remoteReleaseResponse.status}.`);
  const remoteRelease = Buffer.from(await remoteReleaseResponse.arrayBuffer());
  if (hash(remoteRelease) !== hash(localReleaseBytes)) throw new Error('Live release manifest differs from local build identity.');
  const liveIdentity = JSON.parse(remoteRelease.toString('utf8'));

  let checkedPages = 0;
  for (const row of rows) {
    const pageRecord = liveIdentity.pages.find((page) => page.locale === row.locale && page.path === row.path);
    const pageResponse = await fetchNoStore(`${origin}${row.path}`);
    if (pageResponse.status !== 200) throw new Error(`Live route ${row.locale} ${row.path} returned HTTP ${pageResponse.status}.`);
    const body = Buffer.from(await pageResponse.arrayBuffer());
    if (hash(body) !== pageRecord.sha256) throw new Error(`Live HTML hash differs from build for ${row.locale} ${row.path}.`);
    assertRouteHtml(body.toString('utf8'), row, `live ${row.locale} ${row.path}`);
    checkedPages += 1;
  }

  for (const image of liveIdentity.images) {
    const imageResponse = await fetchNoStore(`${origin}${image.path}`);
    if (imageResponse.status !== 200) throw new Error(`Live image ${image.path} returned HTTP ${imageResponse.status}.`);
    const body = Buffer.from(await imageResponse.arrayBuffer());
    if (hash(body) !== image.sha256) throw new Error(`Live image hash differs from build for ${image.path}.`);
  }

  const sitemapResponse = await fetchNoStore(`${origin}/sitemap.xml`);
  if (sitemapResponse.status !== 200) throw new Error(`Live sitemap returned HTTP ${sitemapResponse.status}.`);
  const liveSitemap = await sitemapResponse.text();
  if (liveSitemap.includes('/qa/kyoto-responsive/')) throw new Error('Live sitemap must not list the harness.');
  if ((liveSitemap.match(/<loc>/g) || []).length !== 4560) throw new Error('Live sitemap is not the expected 4,560 routes.');
  console.log(`Live Kyoto QA passed at ${origin}: noindex harness, 20/20 localized HTML hashes and metadata, ${liveIdentity.images.length}/${liveIdentity.images.length} image body hashes, unchanged 4,560-route sitemap; project ${liveIdentity.project}, branch ${liveIdentity.branch}, commit ${liveIdentity.commit}.`);
}
