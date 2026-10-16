import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const projectRoot = path.resolve(import.meta.dirname, '..');
const distRoot = path.join(projectRoot, 'dist');
const harnessRelative = path.join('qa', 'kyoto-responsive');
const harnessPath = path.join(distRoot, harnessRelative, 'index.html');
const releasePath = path.join(distRoot, harnessRelative, 'release.json');
const photoInventoryPath = path.join(projectRoot, 'reports', 'photo-license-inventory.json');
const liveFlag = process.argv.includes('--live');
const originArg = process.argv.find((arg) => arg.startsWith('--url='))?.slice('--url='.length);
const origin = (originArg || 'https://kyoto-qa.trip-68e.pages.dev').replace(/\/+$/, '');

const expectedRoutes = [
  ['/japan/kyoto/', 'Kyoto hub'],
  ['/japan/kyoto/arashiyama-sagano/', 'Arashiyama & Sagano'],
  ['/japan/kyoto/fushimi-inari-sake-district/', 'Fushimi Inari & Sake District'],
  ['/japan/kyoto/gion-pontocho/', 'Gion & Pontocho'],
  ['/japan/kyoto/kiyomizudera-higashiyama/', 'Kiyomizudera & Higashiyama'],
  ['/japan/kyoto/central-kyoto-nishiki/', 'Central Kyoto & Nishiki'],
  ['/japan/kyoto/kyoto-station-south/', 'Kyoto Station & South'],
  ['/japan/kyoto/kinkakuji-northwest/', 'Kinkakuji & Northwest'],
  ['/japan/kyoto/philosophers-path-okazaki/', "Philosopher's Path & Okazaki"]
];
const expectedLocales = [
  ['en', 'English', ''],
  ['zh-Hant', 'Traditional Chinese', '/zh'],
  ['ja', 'Japanese', '/ja'],
  ['ko', 'Korean', '/ko'],
  ['th', 'Thai', '/th']
];
const expectedWidths = [320, 390];
const photoInventory = JSON.parse(fs.readFileSync(photoInventoryPath, 'utf8'));
const photoRecordByAsset = new Map(photoInventory.entries.flatMap((entry) => entry.sourceRecords || []).map((record) => [record.assetPath, record]));
const translationsByLocale = new Map();
for (const [locale] of expectedLocales.filter(([code]) => code !== 'en')) {
  const merged = {};
  for (const batchName of ['90-kyoto-photo-credit-completion.json', '91-kyoto-five-district-guides.json']) {
    const batchPath = path.join(projectRoot, 'data', 'i18n', 'reviewed', locale, batchName);
    if (!fs.existsSync(batchPath)) throw new Error(`Missing reviewed Kyoto translation batch ${batchName} for ${locale}.`);
    const batch = JSON.parse(fs.readFileSync(batchPath, 'utf8'));
    if (batch.locale !== locale || batch.qualityStatus !== 'reviewed') throw new Error(`Kyoto translation batch ${batchName} is not reviewed for ${locale}.`);
    Object.assign(merged, batch.translations);
  }
  translationsByLocale.set(locale, merged);
}

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

function normalize(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function localizedKey(locale, key) {
  if (locale === 'en') return key;
  const value = translationsByLocale.get(locale)?.[normalize(key)];
  if (!value) throw new Error(`Missing reviewed photo-credit translation for ${locale}: ${normalize(key)}`);
  return normalize(value);
}

function assertKyotoCss(css, label) {
  const scopedRules = [...css.matchAll(/body\[data-city="kyoto"\]\s*\{([^{}]*)\}/gi)];
  const widthRules = scopedRules.filter((rule) => /\bmin-width\s*:\s*0(?:px)?\s*;/i.test(rule[1]));
  if (widthRules.length !== 1) {
    throw new Error(`${label}: expected one scoped Kyoto body min-width: 0 rule.`);
  }
  if (/\boverflow(?:-x|-y)?\s*:\s*(?:hidden|clip)\b/i.test(widthRules[0][1])) {
    throw new Error(`${label}: the Kyoto width rule must not hide or clip overflow.`);
  }
  const bodyRule = css.match(/(?:^|\})\s*body\s*\{([^{}]*)\}/i)?.[1] || '';
  if (!/\bmin-height\s*:\s*100vh\s*;/i.test(bodyRule)) throw new Error(`${label}: the document body lost its natural page-scroll height.`);
  const navRule = css.match(/\.area-jump-nav\s*\{([^{}]*)\}/i)?.[1] || '';
  if (!/\boverflow-x\s*:\s*auto\s*;/i.test(navRule) || /\boverflow-x\s*:\s*(?:hidden|clip)\b/i.test(navRule)) {
    throw new Error(`${label}: Kyoto child-guide jump navigation must remain horizontally scrollable.`);
  }
}

function assertDistrictCss(css, label) {
  for (const variant of ['slope', 'market', 'station', 'northwest', 'canal']) {
    if (!css.includes('.kd-story--' + variant)) throw new Error(`${label}: missing the ${variant} district layout.`);
  }
  if (!css.includes('@media (max-width: 620px)') || !css.includes('grid-template-columns: minmax(0, 1fr)')) {
    throw new Error(`${label}: district cards are missing their narrow-screen single-column layout.`);
  }
  if (!/\.kd-story-card\s*\{[^{}]*min-width:\s*0\s*;/s.test(css)) throw new Error(`${label}: district cards need min-width: 0 for translated copy.`);
}

function assertPhotoCredits(html, row, label) {
  const document = parse(html);
  const imagePaths = new Set();
  const sourceSections = [];
  walk(document, (node) => {
    if (node.tagName === 'img') {
      const src = attr(node, 'src');
      if (src.startsWith('/assets/images/')) imagePaths.add(decodeURIComponent(src));
    }
    if (node.tagName === 'section' && attr(node, 'class').split(/\s+/).includes('sources')) sourceSections.push(node);
  });
  if (sourceSections.length !== 1) throw new Error(`${label}: expected one photo/source-credit section.`);
  const photoItems = [];
  walk(sourceSections[0], (node) => { if (node.tagName === 'li' && attr(node, 'data-photo-asset')) photoItems.push(node); });
  const creditedPaths = photoItems.map((node) => attr(node, 'data-photo-asset'));
  if (new Set(creditedPaths).size !== creditedPaths.length || JSON.stringify([...new Set(creditedPaths)].sort()) !== JSON.stringify([...imagePaths].sort())) {
    throw new Error(`${label}: visible photo-credit assets do not exactly match the page images.`);
  }
  for (const item of photoItems) {
    const assetPath = attr(item, 'data-photo-asset');
    const record = photoRecordByAsset.get(assetPath);
    if (!record) throw new Error(`${label}: no verified source record for ${assetPath}.`);
    if (attr(item, 'data-photo-creator') !== record.creator || attr(item, 'data-photo-license') !== record.license) {
      throw new Error(`${label}: credit metadata mismatch for ${assetPath}.`);
    }
    const sourceTitleLinks = [];
    const licenseLinks = [];
    const creditNodes = [];
    const editNodes = [];
    walk(item, (node) => {
      if (node.tagName === 'a' && attr(node, 'data-photo-source-title') !== '') sourceTitleLinks.push(node);
      if (node.tagName === 'a' && attr(node, 'data-photo-license-link') !== '') licenseLinks.push(node);
      if (attr(node, 'data-photo-credit-key') !== '') creditNodes.push(node);
      if (attr(node, 'data-photo-edit-key') !== '') editNodes.push(node);
    });
    if (sourceTitleLinks.length !== 1 || attr(sourceTitleLinks[0], 'href') !== record.sourceUrl || normalize(text(sourceTitleLinks[0])) !== record.sourceTitle || attr(sourceTitleLinks[0], 'translate') !== 'no' || attr(sourceTitleLinks[0], 'lang') !== 'en') {
      throw new Error(`${label}: exact source title/link missing for ${assetPath}.`);
    }
    if (licenseLinks.length !== 1 || attr(licenseLinks[0], 'href') !== record.licenseUrl || normalize(text(licenseLinks[0])) !== record.license || attr(licenseLinks[0], 'translate') !== 'no' || attr(licenseLinks[0], 'lang') !== 'en') {
      throw new Error(`${label}: exact linked license/version missing for ${assetPath}.`);
    }
    if (creditNodes.length !== 1 || editNodes.length !== 1) throw new Error(`${label}: creator or edit disclosure missing for ${assetPath}.`);
    const creditKey = attr(creditNodes[0], 'data-photo-credit-key');
    const editKey = attr(editNodes[0], 'data-photo-edit-key');
    const creditText = localizedKey(row.locale, creditKey);
    const editText = localizedKey(row.locale, editKey);
    if (normalize(text(creditNodes[0])) !== creditText || !creditText.includes(record.creator)) throw new Error(`${label}: localized creator attribution mismatch for ${assetPath}.`);
    if (normalize(text(editNodes[0])) !== editText) throw new Error(`${label}: localized edit disclosure mismatch for ${assetPath}.`);
    const requiresShareAlike = record.license.startsWith('CC BY-SA ');
    if ((attr(item, 'data-photo-share-alike') === 'true') !== requiresShareAlike) throw new Error(`${label}: share-alike marker mismatch for ${assetPath}.`);
    if (requiresShareAlike && !editText.includes(record.license)) throw new Error(`${label}: derivative notice does not name the same ${record.license} version for ${assetPath}.`);
  }
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
  const bodies = [];
  const jumpNavs = [];
  const titles = [];
  const h1s = [];
  const canonicals = [];
  const alternates = [];
  walk(document, (node) => {
    if (node.tagName === 'html') root = node;
    if (node.tagName === 'body') bodies.push(node);
    if (node.tagName === 'nav' && attr(node, 'class').split(/\s+/).includes('area-jump-nav')) jumpNavs.push(node);
    if (node.tagName === 'title') titles.push(text(node).trim());
    if (node.tagName === 'h1' && text(node).trim()) h1s.push(text(node).trim());
    if (node.tagName === 'link' && attr(node, 'rel').toLowerCase() === 'canonical') canonicals.push(attr(node, 'href'));
    if (node.tagName === 'link' && attr(node, 'rel').toLowerCase() === 'alternate') alternates.push(attr(node, 'hreflang'));
  });
  if (attr(root, 'lang') !== row.locale) throw new Error(`${label}: html lang ${attr(root, 'lang')} != ${row.locale}`);
  if (bodies.length !== 1 || attr(bodies[0], 'data-city') !== 'kyoto') throw new Error(`${label}: route is missing its Kyoto-scoped body marker.`);
  const isHub = row.path.endsWith('/japan/kyoto/');
  if (isHub && jumpNavs.length !== 0) throw new Error(`${label}: unexpected child-guide jump scroller on the hub.`);
  if (!isHub && (jumpNavs.length !== 1 || attr(jumpNavs[0], 'tabindex') !== '0' || !attr(jumpNavs[0], 'aria-label'))) {
    throw new Error(`${label}: child-guide horizontal jump scroller must remain named and keyboard-focusable.`);
  }
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
if (release.project !== 'trip' || release.branch !== 'kyoto-qa' || release.routeCount !== 45) throw new Error('Release identity must be project trip, branch kyoto-qa, and 45 routes.');
if (JSON.stringify(release.viewportWidths) !== JSON.stringify(expectedWidths)) throw new Error('Release manifest viewport widths mismatch.');
if (JSON.stringify(release.routes.map(({ path, label }) => [path, label])) !== JSON.stringify(expectedRoutes)) throw new Error('Release manifest route list mismatch.');
if (JSON.stringify(release.locales.map(({ code, label }) => [code, label])) !== JSON.stringify(expectedLocales.map(([code, label]) => [code, label]))) throw new Error('Release manifest locale list mismatch.');
if (release.stylesheet?.path !== '/css/site.css' || !/^[a-f0-9]{64}$/.test(release.stylesheet?.sha256 || '')) throw new Error('Release manifest must include the exact shared stylesheet identity.');

const localStylesheetPath = path.join(distRoot, 'css', 'site.css');
const localStylesheet = fs.readFileSync(localStylesheetPath);
if (hash(localStylesheet) !== release.stylesheet.sha256) throw new Error('Local stylesheet hash differs from release manifest.');
assertKyotoCss(localStylesheet.toString('utf8'), 'local /css/site.css');
if (release.districtStylesheet?.path !== '/css/kyoto-districts.css' || !/^[a-f0-9]{64}$/.test(release.districtStylesheet?.sha256 || '')) throw new Error('Release manifest must include the exact Kyoto district stylesheet identity.');
const localDistrictStylesheet = fs.readFileSync(path.join(distRoot, 'css', 'kyoto-districts.css'));
if (hash(localDistrictStylesheet) !== release.districtStylesheet.sha256) throw new Error('Local Kyoto district stylesheet hash differs from release manifest.');
assertDistrictCss(localDistrictStylesheet.toString('utf8'), 'local /css/kyoto-districts.css');

const rows = routeRows();
if (release.pages.length !== rows.length) throw new Error(`Release manifest has ${release.pages.length} localized routes; expected 45.`);
for (const row of rows) {
  const record = release.pages.find((page) => page.locale === row.locale && page.path === row.path);
  if (!record) throw new Error(`Release manifest missing route ${row.locale} ${row.path}.`);
  const localPath = path.join(distRoot, row.path.slice(1), 'index.html');
  const body = fs.readFileSync(localPath);
  if (hash(body) !== record.sha256) throw new Error(`Local build hash mismatch for ${row.locale} ${row.path}.`);
  assertRouteHtml(body.toString('utf8'), row, `local ${row.locale} ${row.path}`);
  assertPhotoCredits(body.toString('utf8'), row, `local ${row.locale} ${row.path}`);
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
  console.log(`Local Kyoto QA harness passed: noindex; nine routes × five locales; paired 320/390 CSS-pixel frames; 45 route, scroller and photo-attribution checks; both CSS hashes; ${release.images.length} local image hashes; harness absent from 4,560-route sitemap; commit ${release.commit}.`);
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

  const stylesheetResponse = await fetchNoStore(`${origin}${liveIdentity.stylesheet.path}`);
  if (stylesheetResponse.status !== 200) throw new Error(`Live stylesheet returned HTTP ${stylesheetResponse.status}.`);
  const remoteStylesheet = Buffer.from(await stylesheetResponse.arrayBuffer());
  if (hash(remoteStylesheet) !== liveIdentity.stylesheet.sha256) throw new Error('Live stylesheet hash differs from build.');
  assertKyotoCss(remoteStylesheet.toString('utf8'), 'live /css/site.css');
  const districtStylesheetResponse = await fetchNoStore(`${origin}${liveIdentity.districtStylesheet.path}`);
  if (districtStylesheetResponse.status !== 200) throw new Error(`Live district stylesheet returned HTTP ${districtStylesheetResponse.status}.`);
  const remoteDistrictStylesheet = Buffer.from(await districtStylesheetResponse.arrayBuffer());
  if (hash(remoteDistrictStylesheet) !== liveIdentity.districtStylesheet.sha256) throw new Error('Live Kyoto district stylesheet hash differs from build.');
  assertDistrictCss(remoteDistrictStylesheet.toString('utf8'), 'live /css/kyoto-districts.css');

  let checkedPages = 0;
  for (const row of rows) {
    const pageRecord = liveIdentity.pages.find((page) => page.locale === row.locale && page.path === row.path);
    const pageResponse = await fetchNoStore(`${origin}${row.path}`);
    if (pageResponse.status !== 200) throw new Error(`Live route ${row.locale} ${row.path} returned HTTP ${pageResponse.status}.`);
    const body = Buffer.from(await pageResponse.arrayBuffer());
    if (hash(body) !== pageRecord.sha256) throw new Error(`Live HTML hash differs from build for ${row.locale} ${row.path}.`);
    assertRouteHtml(body.toString('utf8'), row, `live ${row.locale} ${row.path}`);
    assertPhotoCredits(body.toString('utf8'), row, `live ${row.locale} ${row.path}`);
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
  console.log(`Live Kyoto QA passed at ${origin}: noindex harness; 45/45 localized HTML, scroller and photo-attribution checks; both stylesheet SHA-256 values; ${liveIdentity.images.length}/${liveIdentity.images.length} image body hashes; unchanged 4,560-route sitemap; project ${liveIdentity.project}, branch ${liveIdentity.branch}, commit ${liveIdentity.commit}.`);
}
