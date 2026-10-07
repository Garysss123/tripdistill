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
  ['/france/paris-region-day-trips/giverny-monet-vernon/', 'Giverny, Monet & Vernon'],
  ['/france/normandy/', 'Normandy hub'],
  ['/france/normandy/rouen-seine-cathedral/', 'Rouen Cathedral, Old Streets & the Seine'],
  ['/france/normandy/bayeux-dday-landscape/', 'Bayeux & the D-Day Landscape'],
  ['/france/normandy/mont-saint-michel-bay/', 'Mont-Saint-Michel & the Bay Approach'],
  ['/france/loire-valley/', 'Loire Valley hub'],
  ['/france/loire-valley/blois-chambord/', 'Blois & Chambord'],
  ['/france/loire-valley/amboise-chenonceau/', 'Amboise, Clos Lucé & Chenonceau'],
  ['/france/loire-valley/tours-villandry-azay/', 'Tours, Villandry & Azay-le-Rideau'],
  ['/france/champagne/', 'Reims, Épernay & Champagne Country'],
  ['/france/champagne/reims-cathedral-cellars/', 'Reims Cathedral & Cellar Districts'],
  ['/france/champagne/epernay-avenue-vineyards/', 'Épernay, Avenue de Champagne & Vineyard Villages'],
  ['/france/champagne/troyes-southern-champagne/', 'Troyes & Southern Champagne'],
  ['/canada/montreal/', 'Montreal'],
  ['/canada/montreal/old-montreal-old-port/', 'Old Montreal & Old Port'],
  ['/canada/montreal/plateau-mile-end/', 'Plateau & Mile End'],
  ['/canada/montreal/mount-royal-museums/', 'Mount Royal & Museum Mile'],
  ['/canada/quebec-city-charlevoix/', 'Quebec City & Charlevoix'],
  ['/canada/quebec-city-charlevoix/old-quebec/', 'Old Québec & the Fortified City'],
  ['/canada/quebec-city-charlevoix/montmorency-orleans/', 'Montmorency Falls & Île d’Orléans'],
  ['/canada/quebec-city-charlevoix/charlevoix-baie-saint-paul/', 'Charlevoix & Baie-Saint-Paul'],
  ['/south-korea/seoul/', 'Seoul hub'],
  ['/south-korea/seoul/bukchon-seochon/', 'Bukchon & Seochon'],
  ['/south-korea/seoul/jongno-gwanghwamun/', 'Jongno & Gwanghwamun'],
  ['/south-korea/seoul/myeongdong-namsan/', 'Myeongdong & Namsan'],
  ['/south-korea/seoul/hongdae-yeonnam/', 'Hongdae & Yeonnam'],
  ['/south-korea/seoul/seongsu-seoul-forest/', 'Seongsu & Seoul Forest'],
  ['/south-korea/seoul/gangnam-jamsil/', 'Gangnam & Jamsil'],
  ['/south-korea/seoul/itaewon-hannam/', 'Itaewon & Hannam'],
  ['/south-korea/seoul/yeouido-hangang/', 'Yeouido & Hangang'],
  ['/south-korea/busan/', 'Busan hub'],
  ['/south-korea/busan/nampo-jagalchi/', 'Nampo & Jagalchi'],
  ['/south-korea/busan/gamcheon-songdo/', 'Gamcheon & Songdo'],
  ['/south-korea/busan/haeundae-dongbaek/', 'Haeundae & Dongbaek'],
  ['/south-korea/busan/gwangalli-millak/', 'Gwangalli & Millak'],
  ['/south-korea/busan/yeongdo-taejongdae/', 'Yeongdo & Taejongdae'],
  ['/vietnam/hanoi/', 'Hanoi hub'],
  ['/vietnam/hanoi/hoan-kiem-old-quarter/', 'Hoan Kiem & Old Quarter'],
  ['/vietnam/hanoi/ba-dinh-thang-long/', 'Ba Dinh & Thang Long'],
  ['/vietnam/hanoi/french-quarter-opera-house/', 'French Quarter & Opera House'],
  ['/vietnam/hanoi/long-bien-red-river/', 'Long Bien & Red River'],
  ['/vietnam/hanoi/van-mieu-museum-quarter/', 'Van Mieu & Museum Quarter'],
  ['/vietnam/sapa-northwest-highlands/', 'Sapa and the Northwest Highlands hub'],
  ['/vietnam/sapa-northwest-highlands/town-ham-rong/', 'Sapa Town and Ham Rong'],
  ['/vietnam/sapa-northwest-highlands/fansipan-summit/', 'Fansipan Summit'],
  ['/vietnam/sapa-northwest-highlands/muong-hoa-lao-chai-ta-van/', 'Muong Hoa, Lao Chai and Ta Van'],
  ['/vietnam/sapa-northwest-highlands/cat-cat-village/', 'Cat Cat Village and Waterfall'],
  ['/vietnam/sapa-northwest-highlands/o-quy-ho-waterfalls/', 'O Quy Ho, Silver Waterfall and Love Waterfall'],
  ['/vietnam/sapa-northwest-highlands/bac-ha-market-hoang-a-tuong/', 'Bac Ha Market and Hoang A Tuong']
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
const sourceSearchIndex = JSON.parse(fs.readFileSync(path.join(root, 'data', 'search-index.json'), 'utf8'));
const localeCatalogs = Object.fromEntries(expectedLocales.filter((locale) => locale.code !== 'en').map((locale) => [locale.code, JSON.parse(fs.readFileSync(path.join(root, 'data', 'i18n', `${locale.code}.json`), 'utf8')).translations]));

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

function textOutsideSourceCredits(node) {
  if (node.tagName === 'section' && attr(node, 'class').split(/\s+/).includes('sources')) return '';
  if (node.nodeName === '#text') return node.value;
  return (node.childNodes || []).map(textOutsideSourceCredits).join('');
}

function nodes(document, tagName) {
  const found = [];
  walk(document, (node) => { if (node.tagName === tagName) found.push(node); });
  return found;
}

function classNodes(rootNode, className, tagName = '') {
  const found = [];
  walk(rootNode, (node) => {
    if (node.tagName && (!tagName || node.tagName === tagName) && attr(node, 'class').split(/\s+/).includes(className)) found.push(node);
  });
  return found;
}

function elementChildren(rootNode, tagName = '') {
  return (rootNode.childNodes || []).filter((node) => node.tagName && (!tagName || node.tagName === tagName));
}

function safeDistPath(urlPath) {
  const pathname = new URL(urlPath, 'https://tripdistill.com').pathname;
  if (!pathname.startsWith('/') || pathname.includes('..')) fail(`Unsafe route asset ${urlPath}`);
  const result = path.resolve(distRoot, `.${pathname}`);
  if (result !== distRoot && !result.startsWith(distRoot + path.sep)) fail(`Asset escaped dist: ${urlPath}`);
  return result;
}

function cssRuleBlock(css, selector, fromIndex = 0) {
  const start = css.indexOf(selector, fromIndex);
  if (start < 0) return '';
  const open = css.indexOf('{', start);
  if (open < 0) return '';
  let depth = 0;
  for (let index = open; index < css.length; index += 1) {
    if (css[index] === '{') depth += 1;
    if (css[index] === '}') {
      depth -= 1;
      if (depth === 0) return css.slice(start, index + 1);
    }
  }
  return '';
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
  if (manifest.routeCount !== 280 || manifest.pages?.length !== 280) fail(`${label}: expected 280 localized route records.`);
  if (JSON.stringify(manifest.viewportWidths) !== JSON.stringify([320, 390])) fail(`${label}: viewport widths must be exactly 320 and 390.`);
  if (JSON.stringify(manifest.routes.map(({ path: routePath, label: routeLabel }) => [routePath, routeLabel])) !== JSON.stringify(expectedRoutes)) fail(`${label}: route manifest does not match the approved France, Canada, Seoul, Busan, Hanoi and Sapa scope.`);
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
  const franceIdentity = record.path.startsWith('/france/') && attr(bodyNode, 'data-country') === 'france' && ['fr-paris', 'fr-normandy', 'fr-loire-valley', 'fr-champagne'].some((prefix) => attr(bodyNode, 'data-page').startsWith(prefix));
  const canadaIdentity = record.path.startsWith('/canada/') && attr(bodyNode, 'data-country') === 'canada' && attr(bodyNode, 'data-page').startsWith('ca-');
  const seoulIdentity = record.path.startsWith('/south-korea/seoul/') && attr(bodyNode, 'data-country') === 'south-korea' && attr(bodyNode, 'data-city') === 'seoul';
  const busanIdentity = record.path.startsWith('/south-korea/busan/') && attr(bodyNode, 'data-country') === 'south-korea' && attr(bodyNode, 'data-city') === 'busan';
  const hanoiIdentity = record.path.startsWith('/vietnam/hanoi/') && attr(bodyNode, 'data-country') === 'vietnam' && attr(bodyNode, 'data-region') === 'hanoi';
  const sapaIdentity = record.path.startsWith('/vietnam/sapa-northwest-highlands/') && attr(bodyNode, 'data-country') === 'vietnam' && attr(bodyNode, 'data-region') === 'sapa-northwest-highlands';
  if (!franceIdentity && !canadaIdentity && !seoulIdentity && !busanIdentity && !hanoiIdentity && !sapaIdentity) fail(`${label}: wrong route identity on ${record.urlPath}.`);
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
  const editorialText = textOutsideSourceCredits(bodyNode);
  if (/\b[^\s<>]+\.(?:jpe?g|png|webp)\b/i.test(editorialText)) fail(`${label}: raw image filename visible outside a linked source-credit list in ${record.urlPath}.`);
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
    const styleHrefs = nodes(document, 'link').filter((node) => attr(node, 'rel').toLowerCase() === 'stylesheet').map((node) => attr(node, 'href'));
    if (routePath.startsWith('/south-korea/seoul/')) {
      const body = nodes(document, 'body')[0];
      if (attr(body, 'data-country') !== 'south-korea' || attr(body, 'data-city') !== 'seoul') fail(`Wrong Seoul responsive scope on ${locale.code} ${routePath}.`);
      if (!styles.includes('/css/south-korea-seoul.css') || !styleHrefs.some((href) => /^\/css\/south-korea-seoul\.css\?v=20261007-\d+$/.test(href))) fail(`Missing current Seoul responsive stylesheet on ${locale.code} ${routePath}.`);
      if (!nodes(document, 'details').length) fail(`Missing visible Seoul FAQ controls on ${locale.code} ${routePath}.`);
      const bodyText = text(body);
      const routeImages = nodes(document, 'img');
      const linkedKoglLicense = nodes(document, 'a').some((node) => attr(node, 'href').includes('/info/licenseType1.do') && attr(node, 'class').split(/\s+/).includes('photo-license'));
      if (routeImages.length && !bodyText.includes('CC BY') && !bodyText.includes('CC0') && !bodyText.includes('KOGL') && !linkedKoglLicense) fail(`Missing readable Seoul photo license in ${locale.code} ${routePath}.`);
      if (routeImages.length && !nodes(document, 'a').some((node) => attr(node, 'href').includes('commons.wikimedia.org') || attr(node, 'href').includes('archive.visitseoul.net'))) fail(`Missing linked Seoul photo source on ${locale.code} ${routePath}.`);
      if (!nodes(document, 'a').some((node) => /visitseoul\.net|english\.seoul\.go\.kr|english\.visitkorea\.or\.kr/.test(attr(node, 'href')))) fail(`Missing a primary Seoul destination source on ${locale.code} ${routePath}.`);
      const illustrationRequirements = routePath.endsWith('/gangnam-jamsil/')
        ? ['seoul-route-art--samseong', 'seoul-route-art--jamsil']
        : routePath.endsWith('/itaewon-hannam/')
          ? ['seoul-route-art--hannam']
          : routePath.endsWith('/yeouido-hangang/')
            ? ['seoul-route-art--river', 'seoul-route-art--banpo']
            : [];
      for (const className of illustrationRequirements) if (!classNodes(document, className).length) fail(`Missing Seoul editorial illustration ${className} on ${locale.code} ${routePath}.`);
      if (locale.code === 'en' && routePath.endsWith('/bukchon-seochon/') && !bodyText.includes('10 a.m.')) fail(`Bukchon visitor-hour boundary is missing from ${routePath}.`);
      continue;
    }
    if (routePath.startsWith('/south-korea/busan/')) {
      const body = nodes(document, 'body')[0];
      const bodyText = text(body);
      const links = nodes(document, 'a').map((node) => attr(node, 'href'));
      if (attr(body, 'data-country') !== 'south-korea' || attr(body, 'data-city') !== 'busan') fail(`Wrong Busan responsive scope on ${locale.code} ${routePath}.`);
      if (!styles.includes('/css/south-korea-busan.css') || !styleHrefs.includes('/css/south-korea-busan.css?v=20261007-2')) fail(`Missing current Busan editorial stylesheet on ${locale.code} ${routePath}.`);
      if (!nodes(document, 'details').length) fail(`Missing visible Busan FAQ controls on ${locale.code} ${routePath}.`);
      if (!bodyText.includes('CC BY') && !bodyText.includes('CC0')) fail(`Missing readable Busan photo license on ${locale.code} ${routePath}.`);
      if (!links.some((href) => href.includes('commons.wikimedia.org'))) fail(`Missing linked Busan photo source on ${locale.code} ${routePath}.`);
      if (!links.some((href) => /visitbusan\.net|busan\.go\.kr|visitkorea\.or\.kr/.test(href))) fail(`Missing a primary Busan destination source on ${locale.code} ${routePath}.`);
      if (locale.code === 'en' && routePath.endsWith('/yeongdo-taejongdae/')) {
        if (!bodyText.includes('Do not rely on a fixed weekly closure claim')) fail(`Danubi timetable uncertainty is not explicit on ${routePath}.`);
        if (!bodyText.includes('day-specific notices can change service')) fail(`Danubi live-check caveat is missing on ${routePath}.`);
      }
      continue;
    }
    if (routePath.startsWith('/vietnam/hanoi/')) {
      const body = nodes(document, 'body')[0];
      if (attr(body, 'data-country') !== 'vietnam' || attr(body, 'data-region') !== 'hanoi') fail(`Wrong Hanoi responsive scope on ${locale.code} ${routePath}.`);
      if (!styles.includes('/css/vietnam-hanoi.css') || !styleHrefs.includes('/css/vietnam-hanoi.css?v=20261007-1')) fail(`Missing current Hanoi responsive stylesheet on ${locale.code} ${routePath}.`);
      if (!nodes(document, 'details').length) fail(`Missing visible Hanoi FAQ controls on ${locale.code} ${routePath}.`);
      const bodyText = text(body);
      if (!bodyText.includes('CC BY') && !bodyText.includes('CC0') && !bodyText.includes('Public domain')) fail(`Missing readable Hanoi photo license in ${locale.code} ${routePath}.`);
      if (!nodes(document, 'a').some((node) => attr(node, 'href').includes('commons.wikimedia.org'))) fail(`Missing linked Hanoi photo source on ${locale.code} ${routePath}.`);
      if (locale.code === 'en') {
        const requirements = routePath === '/vietnam/hanoi/'
          ? ['Three plans with different clocks', 'Hang Bac', 'Thang Long']
          : routePath.endsWith('/hoan-kiem-old-quarter/')
            ? ['Hang Bac', 'Hang Gai', 'pedestrian']
            : routePath.endsWith('/ba-dinh-thang-long/')
              ? ['2 September 1945', 'fortress dating to the 7th century', '18 Hoang Dieu']
              : routePath.endsWith('/french-quarter-opera-house/')
                ? ['turn of the 20th century', '13:30', 'first Monday of each month']
                : routePath.endsWith('/long-bien-red-river/')
                  ? ['working transport landscape', 'legal public edge', 'after rain']
                  : ['1070', '1076', 'five courtyards', '58 Quoc Tu Giam'];
        for (const phrase of requirements) if (!bodyText.includes(phrase)) fail(`Hanoi editorial QA is missing '${phrase}' on ${routePath}.`);
      }
      continue;
    }
    if (routePath.startsWith('/vietnam/sapa-northwest-highlands/')) {
      const body = nodes(document, 'body')[0];
      const bodyText = text(body);
      const links = nodes(document, 'a').map((node) => attr(node, 'href'));
      const isLegacyOQuyHoPage = routePath.endsWith('/o-quy-ho-waterfalls/');
      if (attr(body, 'data-country') !== 'vietnam' || attr(body, 'data-region') !== 'sapa-northwest-highlands') fail(`Wrong Sapa responsive scope on ${locale.code} ${routePath}.`);
      if (!nodes(document, 'details').length) fail(`Missing visible Sapa FAQ controls on ${locale.code} ${routePath}.`);
      if (!links.some((href) => href.includes('commons.wikimedia.org'))) fail(`Missing linked Sapa photo source on ${locale.code} ${routePath}.`);
      if (!links.some((href) => /vietnam\.travel|sapa-tourism\.com|sunworld\.vn|vietnamtourism\.gov\.vn/.test(href))) fail(`Missing primary Sapa destination source on ${locale.code} ${routePath}.`);
      for (const license of [
        'https://creativecommons.org/licenses/by-sa/4.0/',
        'https://creativecommons.org/licenses/by-sa/2.0/'
      ]) if (!links.includes(license)) fail(`Missing linked Sapa image license ${license} on ${locale.code} ${routePath}.`);
      if (isLegacyOQuyHoPage) {
        if (!bodyText.includes('CC BY-SA 4.0')) fail(`Missing O Quy Ho photo license text on ${locale.code} ${routePath}.`);
      } else {
        for (const licenseVersion of ['4.0', '2.0']) {
          const sourceNote = `. Changes: image resized, display-cropped and converted to WebP. Share-alike: the adapted image is released under the same CC BY-SA ${licenseVersion} license.`;
          const translatedNote = locale.code === 'en' ? sourceNote : localeCatalogs[locale.code][sourceNote];
          if (!translatedNote || !bodyText.includes(translatedNote)) fail(`Missing localized CC BY-SA ${licenseVersion} adaptation/share-alike note on ${locale.code} ${routePath}.`);
        }
        const boundaryBlocks = classNodes(document, 'vn-boundary');
        if (boundaryBlocks.length > 1 || boundaryBlocks.some((block) => nodes(block, 'p').length)) fail(`Repeated Sapa boundary copy remains on ${locale.code} ${routePath}.`);
        if (bodyText.includes('Conditions change faster than an editorial page')) fail(`Generic template filler remains on ${locale.code} ${routePath}.`);
        const currentSapaStyle = styleHrefs.some((href) => /^\/css\/vietnam-sapa\.css\?v=20261007-\d+$/.test(href));
        if (!styles.includes('/css/vietnam-sapa.css') || !currentSapaStyle) fail(`Missing current Sapa responsive stylesheet on ${locale.code} ${routePath}.`);
      }
      if (locale.code === 'en' && !isLegacyOQuyHoPage) {
        const requirements = routePath === '/vietnam/sapa-northwest-highlands/'
          ? ['April', 'September', 'Bac Ha', 'Sunday']
          : routePath.endsWith('/town-ham-rong/')
            ? ['Ham Rong', 'stone church', 'steep']
            : routePath.endsWith('/fansipan-summit/')
              ? ['3,143', '6-kilometre', '15 minutes']
              : routePath.endsWith('/muong-hoa-lao-chai-ta-van/')
                ? ['Lao Chai', 'Ta Van', 'three hours', 'irrigation channels']
                : routePath.endsWith('/cat-cat-village/')
                  ? ['2 kilometres', '19th-century', 'waterfall', 'uphill']
                  : ['Sunday', '1914', '1921', 'mansion'];
        for (const phrase of requirements) if (!bodyText.toLowerCase().includes(phrase.toLowerCase())) fail(`Sapa editorial QA is missing '${phrase}' on ${routePath}.`);
      }
      continue;
    }
    if (routePath.startsWith('/canada/montreal/') || routePath.startsWith('/canada/quebec-city-charlevoix/')) {
      const regionCss = routePath.startsWith('/canada/montreal/') ? '/css/canada-montreal.css' : '/css/canada-quebec-city.css';
      const isCanadaHub = routePath === '/canada/montreal/' || routePath === '/canada/quebec-city-charlevoix/';
      if (!styles.includes('/css/canada.css') || !styles.includes(regionCss)) fail(`Missing Canada route stylesheet ${regionCss} on ${locale.code} ${routePath}.`);
      const regionCssVersion = routePath === '/canada/montreal/mount-royal-museums/' ? '20261007-3' : '20261007-2';
      if (!styleHrefs.some((href) => href === `${regionCss}?v=${regionCssVersion}`)) fail(`Missing current Canada responsive stylesheet on ${locale.code} ${routePath}.`);
      if (!isCanadaHub && !styles.includes('/css/canada-field.css')) fail(`Missing Canada field stylesheet on ${locale.code} ${routePath}.`);
      if (!nodes(document, 'details').length) fail(`Missing visible Canada FAQ controls on ${locale.code} ${routePath}.`);
      const canadaBodyText = text(nodes(document, 'body')[0]);
      if (!canadaBodyText.includes('CC BY') && !canadaBodyText.includes('CC0')) fail(`Missing readable Canada photo license in ${locale.code} ${routePath}.`);
      if (!nodes(document, 'a').some((node) => attr(node, 'href').includes('commons.wikimedia.org'))) fail(`Missing linked Canada photo source on ${locale.code} ${routePath}.`);
      continue;
    }
    const isParisRoute = routePath.startsWith('/france/paris/');
    const isDayTripChild = ['/versailles-palace-estate/', '/fontainebleau-palace-forest/', '/giverny-monet-vernon/'].some((suffix) => routePath.endsWith(suffix));
    const isNormandyChild = routePath.startsWith('/france/normandy/') && routePath !== '/france/normandy/';
    const isLoireChild = routePath.startsWith('/france/loire-valley/') && routePath !== '/france/loire-valley/';
    const expectedFieldCss = isParisRoute ? '/css/france-paris.css' : isDayTripChild || isNormandyChild || isLoireChild ? '/css/france-field.css' : '/css/france.css';
    if (!styles.includes('/css/france.css') || !styles.includes(expectedFieldCss)) fail(`Missing route stylesheet ${expectedFieldCss} on ${locale.code} ${routePath}.`);
    if (routePath.startsWith('/france/paris-region-day-trips/')) {
      if (!styleHrefs.includes('/css/france.css?v=20261007-3')) fail(`Missing current day-trip responsive stylesheet version on ${locale.code} ${routePath}.`);
      if (isDayTripChild && !styleHrefs.includes('/css/france-field.css?v=20261007-3')) fail(`Missing current day-trip field stylesheet version on ${locale.code} ${routePath}.`);
    }
    const isHub = routePath === '/france/paris/' || routePath === '/france/paris-region-day-trips/' || routePath === '/france/normandy/' || routePath === '/france/loire-valley/';
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
          ? ['Rive Gauche', 'Hall of Mirrors', 'Passport', '10-minute walk', 'line N from Montparnasse', 'line U from La Défense']
          : routePath.endsWith('/fontainebleau-palace-forest/')
            ? ['Fontainebleau–Avon', 'bus 3401 (formerly 1)', 'François I Gallery', 'Rosso Fiorentino', 'Salle de Bal', 'Napoleon I', '16 September 2024']
            : ['Vernon–Giverny', 'SNGO', '€10 return', 'Japanese prints', 'Clos Normand', 'Water Garden', 'For 2026', '1 April through 1 November', '1.5–2 hours', 'wheelchair accessible'];
        for (const phrase of required) if (!bodyText.includes(phrase)) fail(`English day-trip content lacks “${phrase}” on ${routePath}.`);
      }
    }
  }
}

const pageBodyText = (locale, routePath) => {
  const page = pagesByRoute.get(locale + routePath);
  if (!page) fail('Missing localized page record for ' + locale + ' ' + routePath + '.');
  return text(nodes(page.document, 'body')[0]);
};
const normandyChildRoutes = [
  '/france/normandy/rouen-seine-cathedral/',
  '/france/normandy/bayeux-dday-landscape/',
  '/france/normandy/mont-saint-michel-bay/'
];
const normandyMatrixRoutes = ['/france/normandy/', ...normandyChildRoutes];
const loireChildRoutes = [
  '/france/loire-valley/blois-chambord/',
  '/france/loire-valley/amboise-chenonceau/',
  '/france/loire-valley/tours-villandry-azay/'
];
const loireMatrixRoutes = ['/france/loire-valley/', ...loireChildRoutes];
for (const locale of expectedLocales) {
  for (const routePath of normandyMatrixRoutes) {
    const page = pagesByRoute.get(locale.code + routePath);
    const body = nodes(page.document, 'body')[0];
    const cssLinks = nodes(page.document, 'link').filter((node) => attr(node, 'rel').toLowerCase() === 'stylesheet').map((node) => attr(node, 'href'));
    if (attr(body, 'data-country') !== 'france' || attr(body, 'data-region') !== 'normandy') fail(`Wrong regional width-fix scope on ${locale.code} ${routePath}.`);
    if (!cssLinks.includes('/css/france.css?v=20261007-3')) fail(`Current France width-fix stylesheet is missing on ${locale.code} ${routePath}.`);
    if (routePath !== '/france/normandy/' && !cssLinks.includes('/css/france-field.css?v=20261007-3')) fail(`Current France shared-field stylesheet is missing on ${locale.code} ${routePath}.`);
  }
  for (const routePath of normandyChildRoutes) {
    const page = pagesByRoute.get(locale.code + routePath);
    const document = page.document;
    const body = nodes(document, 'body')[0];
    if (attr(body, 'data-country') !== 'france' || attr(body, 'data-region') !== 'normandy') fail(`Wrong shared France responsive scope on ${locale.code} ${routePath}.`);
    for (const templateClass of ['fr-choice-deck', 'fr-contract', 'fr-regional-context', 'fr-route', 'fr-live-check', 'fr-fallback', 'fr-watch', 'fr-related', 'fr-faq']) {
      if (!classNodes(document, templateClass, 'section').length) fail(`Missing shared ${templateClass} template on ${locale.code} ${routePath}.`);
    }
    const choiceDeck = classNodes(document, 'fr-choice-deck', 'section')[0];
    if (elementChildren(choiceDeck, 'article').length !== 3) fail(`Expected three direct choice cards on ${locale.code} ${routePath}.`);
    const routeSection = classNodes(document, 'fr-route', 'section')[0];
    const routeList = elementChildren(routeSection, 'ol')[0];
    if (!routeList || elementChildren(routeList, 'li').length !== 4) fail(`Expected four route stages on ${locale.code} ${routePath}.`);
    const watchSection = classNodes(document, 'fr-watch', 'section')[0];
    const riskGrid = elementChildren(watchSection, 'div')[0];
    if (!riskGrid || elementChildren(riskGrid, 'article').length !== 3) fail(`Expected three cards in direct .fr-watch > div risk grid on ${locale.code} ${routePath}.`);
    if (nodes(document, 'details').length !== 3) fail(`Expected three destination-specific FAQ controls on ${locale.code} ${routePath}.`);
  }
  for (const routePath of loireMatrixRoutes) {
    const page = pagesByRoute.get(locale.code + routePath);
    const body = nodes(page.document, 'body')[0];
    const cssLinks = nodes(page.document, 'link').filter((node) => attr(node, 'rel').toLowerCase() === 'stylesheet').map((node) => attr(node, 'href'));
    if (attr(body, 'data-country') !== 'france' || attr(body, 'data-region') !== 'loire-valley') fail(`Wrong Loire responsive scope on ${locale.code} ${routePath}.`);
    if (!cssLinks.includes('/css/france.css?v=20261007-3')) fail(`Current France stylesheet is missing on ${locale.code} ${routePath}.`);
    if (routePath !== '/france/loire-valley/' && !cssLinks.includes('/css/france-field.css?v=20261007-3')) fail(`Current France field stylesheet is missing on ${locale.code} ${routePath}.`);
  }
  for (const routePath of loireChildRoutes) {
    const page = pagesByRoute.get(locale.code + routePath);
    const document = page.document;
    for (const templateClass of ['fr-choice-deck', 'fr-contract', 'fr-regional-context', 'fr-route', 'fr-live-check', 'fr-fallback', 'fr-watch', 'fr-related', 'fr-faq']) {
      if (!classNodes(document, templateClass, 'section').length) fail(`Missing shared ${templateClass} template on ${locale.code} ${routePath}.`);
    }
    const choiceDeck = classNodes(document, 'fr-choice-deck', 'section')[0];
    if (elementChildren(choiceDeck, 'article').length !== 3) fail(`Expected three direct Loire choice cards on ${locale.code} ${routePath}.`);
    const routeSection = classNodes(document, 'fr-route', 'section')[0];
    const routeList = elementChildren(routeSection, 'ol')[0];
    if (!routeList || elementChildren(routeList, 'li').length !== 4) fail(`Expected four Loire route stages on ${locale.code} ${routePath}.`);
    const watchSection = classNodes(document, 'fr-watch', 'section')[0];
    const riskGrid = elementChildren(watchSection, 'div')[0];
    if (!riskGrid || elementChildren(riskGrid, 'article').length !== 3) fail(`Expected three cards in direct Loire .fr-watch > div risk grid on ${locale.code} ${routePath}.`);
    if (nodes(document, 'details').length !== 3) fail(`Expected three destination-specific Loire FAQ controls on ${locale.code} ${routePath}.`);
  }
}

const loireHubText = pageBodyText('en', '/france/loire-valley/');
for (const phrase of ['Rémi line 2', 'about 35 minutes', '400 m from Chenonceau’s ticket office', 'Fil Bleu line 32', 'Villandry Centre', 'garden-only ticket', '2.1 km walk']) {
  if (!loireHubText.includes(phrase)) fail(`Loire hub is missing the verified corridor decision “${phrase}”.`);
}
const loireChineseHubText = pageBodyText('zh-Hant', '/france/loire-valley/');
if (!loireChineseHubText.includes('\u7f85\u4e9e\u723e\u6cb3\u8c37\u554f\u7b54') || loireChineseHubText.includes('\u5df4\u9ece\u5730\u5340\u8cc7\u8a0a')) fail('The zh-Hant Loire hub label must name the Loire and must not call it the Paris region.');
const loireEnglishRequirements = [
  ['/france/loire-valley/blois-chambord/', ['four architectural periods', '1519', 'architect is unknown', 'double-helix staircase', 'Fine Arts Museum', 'Rémi line 2 shuttle returns you from the estate to Blois-Chambord station', 'a separately checked onward train', 'The Loire at Blois']],
  ['/france/loire-valley/amboise-chenonceau/', ['400 m', 'Catherine Briçonnet', 'Diane de Poitiers', 'Green Cabinet', 'occupied and free zones', 'Chenonceaux station', 'surviving keep of the earlier medieval', 'built separately between 1513 and 1517']],
  ['/france/loire-valley/tours-villandry-azay/', ['garden-only', '280 m', '2.1 km', 'Fil Bleu line 32', 'R5 Résabus', 'on demand', 'Joachim Carvallo', 'eight hectares']]
];
for (const [routePath, requiredPhrases] of loireEnglishRequirements) {
  const bodyText = pageBodyText('en', routePath);
  for (const phrase of requiredPhrases) if (!bodyText.includes(phrase)) fail(`Loire editorial QA is missing “${phrase}” on ${routePath}.`);
}
for (const [routePath, expectedQuestions] of [
  ['/france/loire-valley/blois-chambord/', ['Does the Blois-Chambord train station sit at Chambord?', 'Was Chambord designed by Leonardo da Vinci?', 'What should I see inside the Château de Blois?']],
  ['/france/loire-valley/amboise-chenonceau/', ['Can I walk from the Royal Château of Amboise to Clos Lucé?', 'How far is Chenonceaux station from the château?', 'Did Leonardo da Vinci design Chenonceau?']],
  ['/france/loire-valley/tours-villandry-azay/', ['Can I buy a Villandry garden-only ticket?', 'How far is Azay-le-Rideau station from the château?', 'Which Villandry bus stop should I use?']]
]) {
  const page = pagesByRoute.get('en' + routePath);
  const questions = nodes(page.document, 'summary').map(text).map((value) => value.trim());
  for (const question of expectedQuestions) if (!questions.includes(question)) fail(`Missing Loire-specific FAQ question “${question}” on ${routePath}.`);
}
const loireSourceRequirements = [
  ['/france/loire-valley/blois-chambord/', ['remi-centrevaldeloire.fr/s-evader/chateau-chambord-lechappee-royale', 'en.chateaudeblois.fr/2194-four-architectural-styles.htm', 'en.chateaudeblois.fr/2369-illustrious-historical-figures.htm', 'chambord.org/en/history/the-chateau/architecture/']],
  ['/france/loire-valley/amboise-chenonceau/', ['vinci-closluce.com/en/prices/', 'chenonceau.com/en/chateau/the-history-of-the-chateau/', 'chenonceau.com/en/practical-information/how-to-get-here/']],
  ['/france/loire-valley/tours-villandry-azay/', ['chateauvillandry.fr/useful-information/prices-opening-times-how-to-get-there-how-to-visit-villandry/', 'chateauvillandry.fr/villandry-through-the-ages/the-gardens-of-villandry-are-restored-to-their-renaissance-glory/', 'azay-le-rideau.fr/en/visit/practical-information', 'azay-le-rideau.fr/en/discover/the-landscaped-park', 'filbleu.fr/en/timetable-routes/all-lines/ligne-32', 'filbleu.fr/en/timetable-routes/all-lines/ligne-r5', 'filbleu.fr/en/services/resabus-transport-on-demand']]
];
for (const [routePath, requiredSources] of loireSourceRequirements) {
  const hrefs = nodes(pagesByRoute.get('en' + routePath).document, 'a').map((node) => attr(node, 'href'));
  for (const source of requiredSources) if (!hrefs.some((href) => href.includes(source))) fail(`Loire route source ${source} is missing from ${routePath}.`);
}
const bayeuxBodyText = pageBodyText('en', '/france/normandy/bayeux-dday-landscape/');
for (const phrase of ['Romanesque and Gothic', '2,300 m²', '7 June to 29 August 1944', 'Allied and German', 'Falaise–Chambois', 'cliff above Omaha Beach', 'Mulberry B', 'autumn 2027', 'not a complete Gold, Juno and Sword battlefield circuit']) {
  if (!bayeuxBodyText.includes(phrase)) fail(`Bayeux editorial QA is missing the verified interpretation phrase “${phrase}”.`);
}
for (const [routePath, expectedQuestions] of [
  ['/france/normandy/rouen-seine-cathedral/', ['Can I visit Rouen Cathedral while a service is taking place?', 'How should I plan the walk back to Rouen Rive Droite?', 'What is a useful indoor choice if it rains?']],
  ['/france/normandy/bayeux-dday-landscape/', ['Will the Bayeux Tapestry gallery be open before autumn 2027?', 'Can I reach the D-Day coast from Bayeux without a car?', 'Which Bayeux museum explains the campaign beyond D-Day?']],
  ['/france/normandy/mont-saint-michel-bay/', ['Do I need an Abbey ticket to enter the village?', 'Can I visit the Abbey if stairs or steep paths are difficult?', 'Can I walk across the bay without a guide?']]
]) {
  const page = pagesByRoute.get('en' + routePath);
  const questions = nodes(page.document, 'summary').map(text).map((value) => value.trim());
  for (const question of expectedQuestions) if (!questions.includes(question)) fail(`Missing destination-specific FAQ question “${question}” on ${routePath}.`);
}
for (const [routePath, forbidden] of [
  ['/france/normandy/rouen-seine-cathedral/', ['nomad.normandie.fr', 'musee-arromanches.fr', 'ot-montsaintmichel.com']],
  ['/france/normandy/mont-saint-michel-bay/', ['nomad.normandie.fr/lignes-de-cars/ligne-120', 'nomad.normandie.fr/lignes-de-cars/ligne-121', 'ter.sncf.com/normandie']]
]) {
  const page = pagesByRoute.get('en' + routePath);
  const hrefs = nodes(page.document, 'a').map((node) => attr(node, 'href'));
  for (const urlPart of forbidden) if (hrefs.some((href) => href.includes(urlPart))) fail(`Irrelevant shared regional source ${urlPart} remains on ${routePath}.`);
}
const bayeuxHrefs = nodes(pagesByRoute.get('en/france/normandy/bayeux-dday-landscape/').document, 'a').map((node) => attr(node, 'href'));
for (const sourceUrl of ['bayeuxmuseum.com/en/memorial-museum-battle-of-normandy/', 'abmc.gov/', 'musee-arromanches.fr/en/history/', 'nomad.normandie.fr/lignes-de-cars/ligne-120', 'nomad.normandie.fr/lignes-de-cars/ligne-121']) {
  if (!bayeuxHrefs.some((href) => href.includes(sourceUrl))) fail(`Bayeux source scoping omitted ${sourceUrl}.`);
}
const versaillesPages = [
  pageBodyText('en', '/france/paris-region-day-trips/'),
  pageBodyText('en', '/france/paris-region-day-trips/versailles-palace-estate/')
];
for (const routePath of ['/france/paris-region-day-trips/versailles-palace-estate/']) {
  const record = sourceSearchIndex.find((item) => item.url === routePath);
  if (!record) fail('Missing English search-index summary for ' + routePath + '.');
  if (!/line N.{0,100}Montparnasse/i.test(record.summary) || !/line U.{0,100}La Défense/i.test(record.summary)) {
    fail('Search summary must identify line N from Montparnasse and line U from La Défense on ' + routePath + '.');
  }
}
for (const bodyText of versaillesPages) {
  const hasLineNOrigin = /(?:line N|Transilien N).{0,100}(?:Paris-Montparnasse|Montparnasse)|(?:Paris-Montparnasse|Montparnasse).{0,100}(?:line N|Transilien N)/i.test(bodyText);
  const hasLineUOrigin = /line U.{0,100}La Défense|La Défense.{0,100}line U/i.test(bodyText);
  if (!hasLineNOrigin || !hasLineUOrigin || !/line U.{0,100}La Défense.{0,100}La Verrière/i.test(bodyText) || /line N\/U from Montparnasse/i.test(bodyText)) {
    fail('Paris–Versailles guidance must keep line N/Montparnasse and line U/La Défense–La Verrière distinct.');
  }
}
const fontainebleauPages = [
  { routePath: '/france/paris-region-day-trips/fontainebleau-palace-forest/', bodyText: pageBodyText('en', '/france/paris-region-day-trips/fontainebleau-palace-forest/') }
];
for (const { routePath, bodyText } of fontainebleauPages) {
  const record = sourceSearchIndex.find((item) => item.url === routePath);
  if (!record || !record.summary.includes('3401 (formerly 1)') || !bodyText.includes('3401 (formerly 1)')) {
    fail('Current Fontainebleau bus 3401 and its former number must be present on ' + routePath + ' and in its search summary.');
  }
}
if (!pageBodyText('en', '/france/paris-region-day-trips/').includes('3401 (formerly 1)')) {
  fail('The day-trip hub must show Fontainebleau bus 3401 and its former number.');
}
const parisCss = manifest.assets.find((asset) => asset.path === '/css/france-paris.css');
if (!parisCss) fail('The Paris stylesheet is absent from the route asset manifest.');
const stylesheetBytes = new Map(manifest.assets.filter((asset) => asset.path.endsWith('.css')).map((asset) => [asset.path, asset.bytes]));
const pageStyleBytes = manifest.pages.map((record, index) => {
  const paths = new Set(nodes(pageResults[index].document, 'link')
    .filter((node) => attr(node, 'rel').toLowerCase() === 'stylesheet')
    .map((node) => new URL(attr(node, 'href'), 'https://tripdistill.com').pathname));
  let total = 0;
  for (const cssPath of paths) {
    if (!stylesheetBytes.has(cssPath)) fail(`Route stylesheet ${cssPath} is absent from the asset manifest.`);
    total += stylesheetBytes.get(cssPath);
  }
  return { route: record.urlPath, bytes: total };
});
const maxPageStyle = pageStyleBytes.reduce((largest, item) => item.bytes > largest.bytes ? item : largest, { route: '', bytes: 0 });
if (maxPageStyle.bytes > manifest.maxPageStylesBytes) fail(`Largest route stylesheet payload is ${maxPageStyle.bytes} bytes on ${maxPageStyle.route}, over the ${manifest.maxPageStylesBytes} byte budget.`);
const totalUniqueStyleAssetBytes = [...stylesheetBytes.values()].reduce((sum, bytes) => sum + bytes, 0);
const images = manifest.assets.filter((asset) => /\.(?:avif|gif|jpe?g|png|webp)$/i.test(asset.path));
const tooLarge = images.find((asset) => asset.bytes > manifest.maxSingleImageBytes);
if (tooLarge) fail(`Image exceeds the ${manifest.maxSingleImageBytes} byte budget: ${tooLarge.path} (${tooLarge.bytes} bytes).`);
const louvreImage = '/assets/images/france-paris-louvre-salle-mollien-20261006.webp';
if (!images.some((asset) => asset.path === louvreImage)) fail('The replacement Louvre image is not included in the route image manifest.');
const parisCssText = fs.readFileSync(safeDistPath('/css/france-paris.css'), 'utf8');
if (/overflow-x\s*:\s*hidden/i.test(parisCssText)) fail('Paris CSS uses overflow-x:hidden, which can conceal responsive overflow.');
if (!/body\[data-page="fr-paris"\]/.test(parisCssText) || !/body\[data-page\^="fr-paris-"\]/.test(parisCssText)) fail('Paris min-width/viewport rules are not scoped to Paris page bodies.');
if (!/:focus-visible/.test(parisCssText) || !/outline\s*:\s*3px/i.test(parisCssText)) fail('Paris CSS must provide a visible keyboard focus indicator.');
const franceCssText = fs.readFileSync(safeDistPath('/css/france.css'), 'utf8');
const regionWidthSelector = 'body[data-country="france"][data-region]:not([data-region="paris"])';
const regionWidthRule = cssRuleBlock(franceCssText, regionWidthSelector);
if (!/min-width\s*:\s*0\s*;/i.test(regionWidthRule) || !/max-width\s*:\s*100%\s*;/i.test(regionWidthRule)) fail('France regional bodies, shells and content must be allowed to shrink below the global 320 px minimum.');
if (/overflow-x\s*:\s*(?:hidden|clip)/i.test(regionWidthRule)) fail('France regional width correction must not conceal horizontal overflow.');
const franceFieldCssText = fs.readFileSync(safeDistPath('/css/france-field.css'), 'utf8');
const narrowFieldMedia = franceFieldCssText.lastIndexOf('@media (max-width: 620px)');
if (narrowFieldMedia < 0) fail('France field CSS is missing the narrow mobile breakpoint.');
const choiceDeckSelector = 'body[data-region="paris-region-day-trips"] .fr-field[data-fr-variant] .fr-choice-deck';
const choiceDeckRule = cssRuleBlock(franceFieldCssText, choiceDeckSelector);
if (!/grid-template-columns\s*:\s*minmax\(0\s*,\s*1fr\)\s*;/i.test(choiceDeckRule) || !/min-width\s*:\s*0\s*;/i.test(choiceDeckRule)) fail('Paris-region choice decks must collapse to one shrinkable column on narrow screens.');
const choiceCardRule = cssRuleBlock(franceFieldCssText, `${choiceDeckSelector} article`);
if (!/min-width\s*:\s*0\s*;/i.test(choiceCardRule) || !/max-width\s*:\s*100%\s*;/i.test(choiceCardRule)) fail('Paris-region choice cards must fit their narrow grid track.');
const choiceTextRule = cssRuleBlock(franceFieldCssText, `${choiceDeckSelector} h2,`);
if (!/overflow-wrap\s*:\s*anywhere\s*;/i.test(choiceTextRule) || !/min-width\s*:\s*0\s*;/i.test(choiceTextRule)) fail('Paris-region choice text must wrap safely inside its cards.');
for (const [label, rule] of [['choice deck', choiceDeckRule], ['choice card', choiceCardRule], ['choice text', choiceTextRule]]) {
  if (/overflow-x\s*:\s*(?:hidden|clip)/i.test(rule)) fail(`Day-trip ${label} rule must not conceal horizontal overflow.`);
}
const responsiveGridSelector = 'body[data-country="france"][data-region]:not([data-region="paris"]) .fr-field[data-fr-variant] .fr-choice-deck,';
const responsiveGridRule = cssRuleBlock(franceFieldCssText, responsiveGridSelector, narrowFieldMedia);
if (!/grid-template-columns\s*:\s*minmax\(0\s*,\s*1fr\)\s*;/i.test(responsiveGridRule) || !/min-width\s*:\s*0\s*;/i.test(responsiveGridRule)) fail('Shared France field grids must collapse to shrinkable single columns at narrow widths.');
for (const gridSelector of ['.fr-contract', '.fr-regional-context > div', '.fr-route ol', '.fr-live-check', '.fr-fallback', '.fr-watch > div', '.fr-related > div']) {
  if (!responsiveGridRule.includes(gridSelector)) fail(`Shared France responsive guard omits ${gridSelector}.`);
}
if (/overflow-x\s*:\s*(?:hidden|clip)/i.test(responsiveGridRule)) fail('Shared France grid corrections must not conceal horizontal overflow.');
const contrastPairs = [
  ['#173943', '#f1eee5'], ['#315e69', '#fffdf8'], ['#7a4c26', '#f1eee5'],
  ['#344d54', '#f1eee5'], ['#ffffff', '#315e69'], ['#e6edef', '#214b56'],
  ['#f3d8a9', '#315e69'], ['#174c58', '#fffdf8'], ['#754d2a', '#f1eee5'],
  ['#f4e4c1', '#203c36']
];
for (const [foreground, background] of contrastPairs) {
  const ratio = contrastRatio(foreground, background);
  if (ratio < 4.5) fail(`Paris palette pair ${foreground} on ${background} has estimated contrast ${ratio.toFixed(2)}:1, below 4.5:1.`);
}
const montrealCssText = fs.readFileSync(safeDistPath('/css/canada-montreal.css'), 'utf8');
const mountRoyalEyebrowRule = cssRuleBlock(montrealCssText, 'body[data-page="ca-montreal-mount-royal-museums"] .ca-field-copy .ca-kicker');
if (!/color\s*:\s*#f4e4c1\s*;/i.test(mountRoyalEyebrowRule)) fail('Mount Royal date/eyebrow must use the scoped warm neutral foreground.');
if (contrastRatio('#f4e4c1', '#203c36') < 4.5) fail('Mount Royal eyebrow estimated contrast is below WCAG AA 4.5:1.');

if (!isLive) {
  const parisPages = manifest.pages.filter((record) => record.path.startsWith('/france/paris/')).length;
  const dayTripPages = manifest.pages.filter((record) => record.path.startsWith('/france/paris-region-day-trips/')).length;
  const normandyPages = manifest.pages.filter((record) => record.path.startsWith('/france/normandy/')).length;
  const loirePages = manifest.pages.filter((record) => record.path.startsWith('/france/loire-valley/')).length;
  const champagnePages = manifest.pages.filter((record) => record.path.startsWith('/france/champagne/')).length;
  const canadaPages = manifest.pages.filter((record) => record.path.startsWith('/canada/montreal/') || record.path.startsWith('/canada/quebec-city-charlevoix/')).length;
  const seoulPages = manifest.pages.filter((record) => record.path.startsWith('/south-korea/seoul/')).length;
  const busanPages = manifest.pages.filter((record) => record.path.startsWith('/south-korea/busan/')).length;
  const hanoiPages = manifest.pages.filter((record) => record.path.startsWith('/vietnam/hanoi/')).length;
  const sapaPages = manifest.pages.filter((record) => record.path.startsWith('/vietnam/sapa-northwest-highlands/')).length;
  console.log(`Responsive QA harness passed locally: ${manifest.pages.length}/280 route-language HTML hashes (${parisPages} Paris, ${dayTripPages} day-trip, ${normandyPages} Normandy, ${loirePages} Loire, ${champagnePages} Champagne, ${canadaPages} Canada, ${seoulPages} Seoul, ${busanPages} Busan, ${hanoiPages} Hanoi, ${sapaPages} Sapa records), language/canonical/hreflang, H1/landmarks, internal links, visible image credits, ${images.length} image assets, max route CSS ${maxPageStyle.bytes}/${manifest.maxPageStylesBytes} bytes, ${totalUniqueStyleAssetBytes} unique CSS bytes, 4,560 sitemap URLs, noindex harness.`);
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
  console.log(`Responsive QA preview passed: harness HTTP 200, ${manifest.pages.length}/280 route-language pages and ${manifest.assets.length} local assets matched exact SHA-256, noindex, sitemap 4,560 URLs; ${checked} checks at ${liveOrigin}.`);
}
