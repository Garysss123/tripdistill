import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { parse } from 'parse5';

const root = path.resolve(import.meta.dirname, '..');
const distRoot = path.join(root, 'dist');
const harnessPath = path.join(distRoot, 'qa', 'paris-responsive', 'index.html');
const liveOriginArg = process.argv.find((argument) => argument.startsWith('--url='))?.slice('--url='.length);
const liveOrigin = (liveOriginArg || 'https://paris-qa.trip-68e.pages.dev').replace(/\/+$/, '');
const isLive = process.argv.includes('--live');
const expectedRoutes = [
  ['/france/paris/', 'Paris hub'],
  ['/france/paris/seine-islands-latin-quarter/', 'Seine Islands & Latin Quarter'],
  ['/france/paris/louvre-tuileries-opera/', 'Louvre, Tuileries & Opera'],
  ['/france/paris/eiffel-invalides-montparnasse/', 'Eiffel Tower & Invalides'],
  ['/france/paris-region-day-trips/', 'Versailles- Fontainebleau- Giverny hub'],
  ['/france/paris-region-day-trips/versailles-palace-estate/', 'Versailles Palace & Estate'],
  ['/france/paris-region-day-trips/fontainebleau-palace-forest/', 'Fontainebleau Palace & Forest'],
  ['/france/paris-region-day-trips/giverny-monet-vernon/', 'Giverny, Monet & Vernon']
];
const expectedLocales = [
  { code: 'en', prefix: '' },
  { code: 'zh-Hant', prefix: '/zh' },
  { code: 'ja', prefix: '/ja' },
  { code: 'ko', prefix: '/ko' },
  { code: 'th', prefix: '/th' }
];
const expectedHreflangs = new Set(['en', 'zh-Hant', 'ja', 'ko', 'th', 'x-default']);
const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');

function luminance(color) {
  const channels = color.match(/[0-9a-f]{2}/gi)?.map((part) => parseInt(part, 16) / 255);
  if (!channels || channels.length !== 3) fail(`Invalid contrast-test color ${color}.`);
  const linear = channels.map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

function contrastRatio(foreground, background) {
  const first = luminance(foreground);
  const second = luminance(background);
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}

function fail(message) {
  throw new Error(message);
}

function walk(node, visit) {
  visit(node);
  for (const child of node.childNodes || []) walk(child, visit);
}

function attr(node, name) {
  return node.attrs?.find((item) => item.name === name)?.value || '';
}

function text(node) {
  if (node.nodeName === '#text') return node.value;
  return (node.childNodes || []).map(text).join('');
}

function nodes(document, tagName) {
  const found = [];
  walk(document, (node) => { if (node.tagName === tagName) found.push(node); });
  return found;
}

function safeDistPath(urlPath) {
  const pathname = new URL(urlPath, 'https://tripdistill.com').pathname;
  if (!pathname.startsWith('/') || pathname.includes('..')) fail(`Unsafe route asset ${urlPath}`);
  const result = path.resolve(distRoot, `.${pathname}`);
  if (!result.startsWith(distRoot + path.sep)) fail(`Asset escaped dist: ${urlPath}`);
  return result;
}

function getManifest(html, label) {
  const document = parse(html);
  const manifests = nodes(document, 'script').filter((node) => attr(node, 'id') === 'qa-manifest');
  if (manifests.length !== 1 || attr(manifests[0], 'type') !== 'application/json') fail(`${label}: expected one embedded JSON manifest.`);
  try { return JSON.parse(text(manifests[0])); } catch { fail(`${label}: embedded manifest is invalid JSON.`); }
}

function assertHarness(html, label) {
  const document = parse(html);
  const robotEntries = nodes(document, 'meta').filter((node) => attr(node, 'name').toLowerCase() === 'robots');
  if (robotEntries.length !== 1 || !attr(robotEntries[0], 'content').split(',').map((part) => part.trim().toLowerCase()).includes('noindex')) {
    fail(`${label}: expected exactly one robots meta containing noindex.`);
  }
  if (nodes(document, 'select').filter((node) => attr(node, 'id') === 'route').length !== 1) fail(`${label}: missing unique guide selector.`);
  if (nodes(document, 'select').filter((node) => attr(node, 'id') === 'locale').length !== 1) fail(`${label}: missing unique language selector.`);
  const frames = nodes(document, 'iframe');
  if (frames.length !== 2 || !frames.some((node) => attr(node, 'id') === 'frame-320') || !frames.some((node) => attr(node, 'id') === 'frame-390')) {
    fail(`${label}: expected paired 320 px and 390 px frames.`);
  }
  const routeOptions = [];
  walk(document, (node) => {
    if (node.tagName === 'select' && attr(node, 'id') === 'route') {
      for (const child of node.childNodes || []) if (child.tagName === 'option') routeOptions.push({ value: attr(child, 'value'), label: text(child).trim() });
    }
  });
  if (routeOptions.length !== expectedRoutes.length) fail(`${label}: expected ${expectedRoutes.length} route options, got ${routeOptions.length}.`);
  expectedRoutes.forEach(([, labelText], index) => {
    if (routeOptions[index]?.value !== String(index) || routeOptions[index]?.label !== labelText) fail(`${label}: incorrect route option ${index + 1}.`);
  });
  const manifest = getManifest(html, label);
  if (manifest.project !== 'trip' || manifest.branch !== 'paris-qa') fail(`${label}: manifest targets ${manifest.project}/${manifest.branch}, expected trip/paris-qa.`);
  if (!/^[0-9a-f]{40}$/.test(manifest.sourceCommit || '')) fail(`${label}: missing exact source commit.`);
  if (manifest.routeCount !== 40 || manifest.pages?.length !== 40) fail(`${label}: expected 40 localized route records.`);
  if (JSON.stringify(manifest.viewportWidths) !== JSON.stringify([320, 390])) fail(`${label}: viewport widths must be exactly 320 and 390.`);
  if (JSON.stringify(manifest.routes.map(({ path: routePath, label: routeLabel }) => [routePath, routeLabel])) !== JSON.stringify(expectedRoutes)) fail(`${label}: route manifest does not match the approved Paris and day-trip scope.`);
  if (JSON.stringify(manifest.locales.map(({ code, prefix }) => ({ code, prefix }))) !== JSON.stringify(expectedLocales)) fail(`${label}: locale routing does not match en, zh-Hant, ja, ko, th.`);
  return manifest;
}

function inspectLocalizedPage(manifest, record, label) {
  const routePath = safeDistPath(record.urlPath);
  const pagePath = record.urlPath.endsWith('/') ? path.join(routePath, 'index.html') : routePath;
  const bytes = fs.readFileSync(pagePath);
  if (bytes.byteLength !== record.bytes || hash(bytes) !== record.sha256) fail(`${label}: built route content hash mismatch for ${record.locale} ${record.urlPath}.`);
  if (bytes.byteLength > manifest.maxHtmlBytes) fail(`${label}: ${record.urlPath} exceeds the ${manifest.maxHtmlBytes} byte HTML budget.`);
  const document = parse(bytes.toString('utf8'));
  const htmlNode = nodes(document, 'html')[0];
  if (attr(htmlNode, 'lang') !== record.locale) fail(`${label}: wrong document language on ${record.urlPath}: ${attr(htmlNode, 'lang')}.`);
  const bodyNode = nodes(document, 'body')[0];
  if (!attr(bodyNode, 'data-page').startsWith('fr-paris')) fail(`${label}: missing Paris or day-trip page identity on ${record.urlPath}.`);
  const titles = nodes(document, 'title');
  if (titles.length !== 1 || !text(titles[0]).trim()) fail(`${label}: missing unique title on ${record.urlPath}.`);
  const h1s = nodes(document, 'h1');
  if (h1s.length !== 1 || !text(h1s[0]).trim()) fail(`${label}: expected one descriptive H1 on ${record.urlPath}.`);
  if (!nodes(document, 'main').length) fail(`${label}: missing main landmark on ${record.urlPath}.`);
  const canonicals = nodes(document, 'link').filter((node) => attr(node, 'rel').toLowerCase() === 'canonical');
  const canonicalExpected = `https://tripdistill.com${record.urlPath}`;
  if (canonicals.length !== 1 || attr(canonicals[0], 'href') !== canonicalExpected) fail(`${label}: canonical mismatch on ${record.urlPath}.`);
  const hreflang = new Map(nodes(document, 'link').filter((node) => attr(node, 'rel').toLowerCase() === 'alternate' && attr(node, 'hreflang')).map((node) => [attr(node, 'hreflang'), attr(node, 'href')]));
  if (hreflang.size !== expectedHreflangs.size || [...expectedHreflangs].some((code) => !hreflang.has(code))) fail(`${label}: incomplete or duplicate hreflang set on ${record.urlPath}.`);
  for (const locale of expectedLocales) {
    const expected = `https://tripdistill.com${locale.prefix}${record.path}`;
    if (hreflang.get(locale.code) !== expected) fail(`${label}: ${record.urlPath} has incorrect ${locale.code} alternate.`);
  }
  if (hreflang.get('x-default') !== `https://tripdistill.com${record.path}`) fail(`${label}: x-default mismatch on ${record.urlPath}.`);
  const images = nodes(document, 'img');
  for (const image of images) {
    if (!attr(image, 'alt').trim()) fail(`${label}: image missing alt on ${record.urlPath}.`);
    if (!attr(image, 'width') || !attr(image, 'height')) fail(`${label}: image missing intrinsic dimensions on ${record.urlPath}.`);
    const src = attr(image, 'src');
    if (src.startsWith('/') && !fs.existsSync(safeDistPath(src))) fail(`${label}: missing image ${src} from ${record.urlPath}.`);
  }
  const pageText = text(bodyNode);
  if (/\b[^\s<>]+\.(?:jpe?g|png|webp)\b/i.test(pageText)) fail(`${label}: raw image filename visible in ${record.urlPath}.`);
  const localLinks = nodes(document, 'a').map((node) => attr(node, 'href')).filter((href) => href.startsWith('/') && !href.startsWith('//'));
  for (const href of localLinks) {
    const pathname = new URL(href, 'https://tripdistill.com').pathname;
    const target = safeDistPath(pathname);
    const file = pathname.endsWith('/') ? path.join(target, 'index.html') : fs.existsSync(target) ? target : path.join(target, 'index.html');
    if (!fs.existsSync(file)) fail(`${label}: broken internal link ${href} from ${record.urlPath}.`);
  }
  return { document, bytes };
}

async function fetchNoStore(url) {
  return fetch(url, { cache: 'no-store', redirect: 'manual', signal: AbortSignal.timeout(20000) });
}

if (!fs.existsSync(harnessPath)) fail(`Missing ${path.relative(root, harnessPath)}; run npm run build:paris-qa-harness after npm run build.`);
const localHarnessHtml = fs.readFileSync(harnessPath, 'utf8');
const manifest = assertHarness(localHarnessHtml, 'local Paris harness');
const sitemapPath = path.join(distRoot, 'sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const sitemapCount = [...sitemap.matchAll(/<loc>/g)].length;
if (sitemapCount !== 4560 || sitemap.includes('/qa/paris-responsive/')) fail(`Local sitemap must contain 4,560 site URLs and no QA route; found ${sitemapCount}.`);

const pageResults = manifest.pages.map((record) => inspectLocalizedPage(manifest, record, 'local QA'));
const pagesByRoute = new Map(manifest.pages.map((record, index) => [`${record.locale}${record.path}`, { record, ...pageResults[index] }]));
for (const locale of expectedLocales) {
  for (const [routePath] of expectedRoutes) {
    const { record, document } = pagesByRoute.get(`${locale.code}${routePath}`);
    const styles = nodes(document, 'link').filter((node) => attr(node, 'rel').toLowerCase() === 'stylesheet').map((node) => new URL(attr(node, 'href'), 'https://tripdistill.com').pathname);
    const isParisRoute = routePath.startsWith('/france/paris/');
    const isDayTripChild = ['/versailles-palace-estate/', '/fontainebleau-palace-forest/', '/giverny-monet-vernon/'].some((suffix) => routePath.endsWith(suffix));
    const expectedFieldCss = isParisRoute ? '/css/france-paris.css' : isDayTripChild ? '/css/france-field.css' : '/css/france.css';
    if (!styles.includes('/css/france.css') || !styles.includes(expectedFieldCss)) fail(`Missing route stylesheet ${expectedFieldCss} on ${locale.code} ${routePath}.`);
    const isHub = routePath === '/france/paris/' || routePath === '/france/paris-region-day-trips/';
    if (isHub) continue;
    if (!nodes(document, 'details').length) fail(`Missing visible FAQ controls on ${locale.code} ${routePath}.`);
    const bodyText = text(nodes(document, 'body')[0]);
    if (!bodyText.includes('CC0') && !bodyText.includes('CC BY')) fail(`Missing readable photo license in ${locale.code} ${routePath}.`);
    if (!nodes(document, 'a').some((node) => attr(node, 'href').includes('commons.wikimedia.org'))) fail(`Missing linked photo source in ${locale.code} ${routePath}.`);
    if (routePath.startsWith('/france/paris-region-day-trips/')) {
      if (/\b[^\s<>]+\.(?:jpe?g|png|webp)\b/i.test(bodyText)) fail(`Raw image filename visible on ${locale.code} ${routePath}.`);
      if (bodyText.includes('The famous excursions around Paris use different rail terminals')) fail(`Repeated hub copy visible in child route ${locale.code} ${routePath}.`);
      if (routePath.endsWith('/versailles-palace-estate/')) {
        const links = nodes(document, 'a').map((node) => attr(node, 'href'));
        if (!links.includes('https://commons.wikimedia.org/wiki/File:Palace_of_Versailles_Garden.jpg')) fail(`Verified Versailles Commons source missing on ${locale.code} ${routePath}.`);
        if (!links.includes('https://creativecommons.org/licenses/by-sa/4.0/')) fail(`Versailles CC BY-SA 4.0 link missing on ${locale.code} ${routePath}.`);
        if (!bodyText.includes('Rlumstead') || !bodyText.includes('CC BY-SA 4.0')) fail(`Versailles creator/license credit missing on ${locale.code} ${routePath}.`);
        if (locale.code === 'en' && !bodyText.includes('this adaptation is shared under CC BY-SA 4.0')) fail(`Versailles adaptation/share-alike note missing from English credit on ${routePath}.`);
      }
      if (locale.code === 'en') {
        const required = routePath.endsWith('/versailles-palace-estate/')
          ? ['Rive Gauche', 'Hall of Mirrors', 'Passport', '10 minutes']
          : routePath.endsWith('/fontainebleau-palace-forest/')
            ? ['Fontainebleau–Avon', 'bus 1', 'Cour des Adieux', 'April 1814']
            : ['Vernon–Giverny', 'For 2026', '1 April through 1 November', '1.5–2 hours', 'wheelchair accessible'];
        for (const phrase of required) if (!bodyText.includes(phrase)) fail(`English day-trip content lacks “${phrase}” on ${routePath}.`);
      }
    }
  }
}

const parisCss = manifest.assets.find((asset) => asset.path === '/css/france-paris.css');
if (!parisCss) fail('The Paris stylesheet is absent from the route asset manifest.');
const totalStyleBytes = manifest.assets.filter((asset) => asset.path.endsWith('.css')).reduce((sum, asset) => sum + asset.bytes, 0);
if (totalStyleBytes > manifest.maxRouteStylesBytes) fail(`Reviewed route styles total ${totalStyleBytes} bytes, over the ${manifest.maxRouteStylesBytes} byte budget.`);
const images = manifest.assets.filter((asset) => /\.(?:avif|gif|jpe?g|png|webp)$/i.test(asset.path));
const tooLarge = images.find((asset) => asset.bytes > manifest.maxSingleImageBytes);
if (tooLarge) fail(`Image exceeds the ${manifest.maxSingleImageBytes} byte budget: ${tooLarge.path} (${tooLarge.bytes} bytes).`);
const louvreImage = '/assets/images/france-paris-louvre-salle-mollien-20261006.webp';
if (!images.some((asset) => asset.path === louvreImage)) fail('The replacement Louvre image is not included in the route image manifest.');
const parisCssText = fs.readFileSync(safeDistPath('/css/france-paris.css'), 'utf8');
if (/overflow-x\s*:\s*hidden/i.test(parisCssText)) fail('Paris CSS uses overflow-x:hidden, which can conceal responsive overflow.');
if (!/body\[data-page="fr-paris"\]/.test(parisCssText) || !/body\[data-page\^="fr-paris-"\]/.test(parisCssText)) fail('Paris min-width/viewport rules are not scoped to Paris page bodies.');
if (!/:focus-visible/.test(parisCssText) || !/outline\s*:\s*3px/i.test(parisCssText)) fail('Paris CSS must provide a visible keyboard focus indicator.');
const contrastPairs = [
  ['#173943', '#f1eee5'], ['#315e69', '#fffdf8'], ['#7a4c26', '#f1eee5'],
  ['#344d54', '#f1eee5'], ['#ffffff', '#315e69'], ['#e6edef', '#214b56'],
  ['#f3d8a9', '#315e69'], ['#174c58', '#fffdf8'], ['#754d2a', '#f1eee5']
];
for (const [foreground, background] of contrastPairs) {
  const ratio = contrastRatio(foreground, background);
  if (ratio < 4.5) fail(`Paris palette pair ${foreground} on ${background} has estimated contrast ${ratio.toFixed(2)}:1, below 4.5:1.`);
}

if (!isLive) {
  const dayTripPages = manifest.pages.filter((record) => record.path.startsWith('/france/paris-region-day-trips/')).length;
  console.log(`Paris/day-trip QA harness passed locally: ${manifest.pages.length}/40 route-language HTML hashes (${dayTripPages} day-trip records), language/canonical/hreflang, H1/landmarks, internal links, visible image credits, ${images.length} image assets, ${totalStyleBytes} stylesheet bytes, 4,560 sitemap URLs, noindex harness.`);
} else {
  const harnessResponse = await fetchNoStore(`${liveOrigin}/qa/paris-responsive/?release-check=${Date.now()}`);
  if (harnessResponse.status !== 200) fail(`Live harness returned HTTP ${harnessResponse.status}.`);
  const liveHarnessHtml = await harnessResponse.text();
  const liveManifest = assertHarness(liveHarnessHtml, 'live Paris harness');
  if (liveManifest.sourceCommit !== manifest.sourceCommit || liveManifest.branch !== 'paris-qa' || liveManifest.project !== 'trip') fail('Live harness manifest does not match the locally built release commit/project/branch.');
  const requests = [
    ...manifest.pages.map((record) => ({ path: record.urlPath, sha256: record.sha256, label: `${record.locale} ${record.path}` })),
    ...manifest.assets.map((asset) => ({ path: asset.path, sha256: asset.sha256, label: asset.path }))
  ];
  let checked = 0;
  for (let index = 0; index < requests.length; index += 8) {
    const batch = requests.slice(index, index + 8);
    const results = await Promise.all(batch.map(async (item) => {
      const response = await fetchNoStore(`${liveOrigin}${item.path}?release-check=${Date.now()}`);
      if (response.status !== 200) fail(`Preview ${item.label} returned HTTP ${response.status}.`);
      const bytes = Buffer.from(await response.arrayBuffer());
      if (hash(bytes) !== item.sha256) fail(`Preview ${item.label} does not match the committed release asset hash.`);
      return item.label;
    }));
    checked += results.length;
  }
  const sitemapResponse = await fetchNoStore(`${liveOrigin}/sitemap.xml?release-check=${Date.now()}`);
  if (sitemapResponse.status !== 200) fail(`Preview sitemap returned HTTP ${sitemapResponse.status}.`);
  const remoteSitemap = await sitemapResponse.text();
  if ([...remoteSitemap.matchAll(/<loc>/g)].length !== 4560 || remoteSitemap.includes('/qa/paris-responsive/')) fail('Preview sitemap must contain exactly 4,560 site URLs and exclude the harness.');
  console.log(`Paris/day-trip QA preview passed: harness HTTP 200, 40 route pages and ${manifest.assets.length} local assets matched exact SHA-256, noindex, sitemap 4,560 URLs; ${checked} checks at ${liveOrigin}.`);
}
