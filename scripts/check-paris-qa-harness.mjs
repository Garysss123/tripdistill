import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { Script } from 'node:vm';
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
  ['/canada/toronto/', 'Toronto hub'],
  ['/canada/toronto/downtown-waterfront/', 'Downtown & Waterfront'],
  ['/canada/toronto/annex-kensington-museums/', 'Toronto Museums, the Annex & Kensington'],
  ['/canada/toronto/toronto-islands/', 'Toronto Islands'],
  ['/canada/quebec-city-charlevoix/', 'Quebec City & Charlevoix'],
  ['/canada/quebec-city-charlevoix/old-quebec/', 'Old Québec & the Fortified City'],
  ['/canada/quebec-city-charlevoix/montmorency-orleans/', 'Montmorency Falls & Île d’Orléans'],
  ['/canada/quebec-city-charlevoix/charlevoix-baie-saint-paul/', 'Charlevoix & Baie-Saint-Paul'],
  ['/canada/vancouver-north-shore/', 'Vancouver & the North Shore hub'],
  ['/canada/vancouver-north-shore/downtown-stanley-granville/', 'Vancouver Downtown, Stanley Park & Granville Island'],
  ['/canada/vancouver-north-shore/north-shore-grouse-capilano/', 'Grouse, Capilano & Lynn Canyon'],
  ['/canada/vancouver-north-shore/sea-to-sky-whistler/', 'Sea-to-Sky & Whistler'],
  ['/canada/victoria-south-island/', 'Victoria & South Vancouver Island hub'],
  ['/canada/victoria-south-island/inner-harbour-james-bay/', 'Inner Harbour, James Bay & Beacon Hill'],
  ['/canada/victoria-south-island/butchart-saanich/', 'Butchart Gardens & Saanich Peninsula'],
  ['/canada/victoria-south-island/sooke-juan-de-fuca/', 'Sooke & Juan de Fuca Coast'],
  ['/switzerland/zurich-lake/', 'Zurich & Lake Zurich'],
  ['/switzerland/zurich-lake/lake-uetliberg/', 'Lake Zurich & Uetliberg'],
  ['/switzerland/zurich-lake/old-town-lindenhof/', 'Old Town, Lindenhof & the Limmat'],
  ['/switzerland/zurich-lake/zurich-west-museums/', 'Zurich West & Museum Quarter'],
  ['/south-korea/', 'South Korea country guide'],
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
  ['/south-korea/busan/dadaepo-amisan/', 'Dadaepo & Amisan'],
  ['/south-korea/busan/haedong-yonggungsa-gijang/', 'Haedong Yonggungsa & Gijang'],
  ['/south-korea/busan/seomyeon-jeonpo/', 'Seomyeon & Jeonpo'],
  ['/south-korea/gyeongju/', 'Gyeongju hub'],
  ['/south-korea/gyeongju/daereungwon-hwangnidan-gil/', 'Daereungwon & Hwangnidan-gil'],
  ['/south-korea/gyeongju/wolseong-donggung-wolji/', 'Wolseong & Donggung/Wolji'],
  ['/south-korea/gyeongju/bulguksa-seokguram/', 'Bulguksa & Seokguram'],
  ['/south-korea/gyeongju/namsan/', 'Namsan mountain trails'],
  ['/south-korea/gyeongju/yangdong-village/', 'Yangdong Village'],
  ['/south-korea/gyeongju/bomun-lake/', 'Bomun Lake'],
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
  ['/vietnam/sapa-northwest-highlands/bac-ha-market-hoang-a-tuong/', 'Bac Ha Market and Hoang A Tuong'],
  ['/vietnam/ha-giang/', 'Hà Giang hub'],
  ['/vietnam/ha-giang/quan-ba-heavens-gate/', 'Quản Bạ & Heaven’s Gate'],
  ['/vietnam/ha-giang/yen-minh-pine-forest/', 'Yên Minh & Pine Forest'],
  ['/vietnam/ha-giang/dong-van-old-quarter/', 'Đồng Văn Old Quarter'],
  ['/vietnam/ha-giang/lung-cu-flag-tower/', 'Lũng Cú Flag Tower'],
  ['/vietnam/ha-giang/ma-pi-leng-nho-que/', 'Mã Pí Lèng & Nho Quế'],
  ['/vietnam/ninh-binh/', 'Ninh Binh hub'],
  ['/vietnam/ninh-binh/trang-an-boat-complex/', 'Trang An Boat Complex'],
  ['/vietnam/ninh-binh/hoa-lu-ancient-capital/', 'Hoa Lu Ancient Capital'],
  ['/vietnam/ninh-binh/tam-coc-bich-dong/', 'Tam Coc & Bich Dong'],
  ['/vietnam/ninh-binh/hang-mua-dragon-mountain/', 'Hang Mua & Dragon Mountain'],
  ['/vietnam/ninh-binh/van-long-wetland/', 'Van Long Wetland'],
  ['/vietnam/ninh-binh/cuc-phuong-conservation/', 'Cuc Phuong Forest & Conservation'],
  ['/vietnam/hue/', 'Hue hub'],
  ['/vietnam/hue/imperial-city-citadel/', 'Imperial City & Citadel'],
  ['/vietnam/hue/royal-tombs/', 'Royal Tombs of Minh Mang, Tu Duc & Khai Dinh'],
  ['/vietnam/hue/thien-mu-perfume-river/', 'Thien Mu & Perfume River'],
  ['/vietnam/hue/thanh-toan-rural-loop/', 'Thanh Toan Rural & Canal Loop'],
  ['/vietnam/hue/bach-ma-national-park/', 'Bach Ma National Park'],
  ['/vietnam/hue/lang-co-lap-an-lagoon/', 'Lang Co & Lap An Lagoon'],
  ['/south-korea/jeju/', 'Jeju Island hub'],
  ['/south-korea/jeju/hallasan/', 'Hallasan summit and lower trails'],
  ['/south-korea/jeju/jeju-city-yongduam/', 'Jeju City & Yongduam'],
  ['/south-korea/jeju/seongsan-udo/', 'Seongsan & Udo'],
  ['/south-korea/jeju/woljeongri-gimnyeong/', 'Woljeongri & Gimnyeong'],
  ['/south-korea/jeju/seogwipo-jeongbang/', 'Seogwipo & Jeongbang'],
  ['/south-korea/jeju/jungmun-andeok/', 'Jungmun & Andeok'],
  ['/south-korea/jeju/moseulpo-gapado/', 'Moseulpo & Gapado'],
  ['/south-korea/jeju/aewol-hyeopjae/', 'Aewol & Hyeopjae'],
  ['/malaysia/george-town-penang/', 'George Town & Penang hub'],
  ['/malaysia/george-town-penang/armenian-street-core-zone/', 'Armenian Street & Core Zone'],
  ['/malaysia/george-town-penang/weld-quay-clan-jetties/', 'Weld Quay & Clan Jetties'],
  ['/malaysia/george-town-penang/penang-hill-air-itam/', 'Penang Hill & Air Itam'],
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

function compositeHex(background, foreground, opacity) {
  const base = background.match(/[0-9a-f]{2}/gi)?.map((part) => parseInt(part, 16));
  const over = foreground.match(/[0-9a-f]{2}/gi)?.map((part) => parseInt(part, 16));
  if (!base || !over || base.length !== 3 || over.length !== 3) fail(`Invalid compositing color ${background} over ${foreground}.`);
  return `#${base.map((channel, index) => Math.round(channel * (1 - opacity) + over[index] * opacity).toString(16).padStart(2, '0')).join('')}`;
}

function cssHexProperty(cssBlock, property) {
  return cssBlock.match(new RegExp(`(?:^|[;\\s])${property}\\s*:\\s*(#[0-9a-f]{6})`, 'i'))?.[1]?.toLowerCase() || '';
}

function rgbaColor(cssBlock, channels) {
  const match = cssBlock.match(new RegExp(`rgba?\\(\\s*${channels}\\s*,\\s*([\\d.]+)\\s*\\)`, 'i'));
  if (!match) fail(`Missing RGBA color with channels ${channels}.`);
  const rgb = channels.split(',').map((value) => Number(value.trim()));
  return { hex: `#${rgb.map((value) => value.toString(16).padStart(2, '0')).join('')}`, alpha: Number(match[1]) };
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
  const intro = nodes(document, 'p').find((node) => attr(node, 'class').split(/\s+/).includes('intro'));
  if (!intro || !/20 Canada routes across Montreal, Toronto, Quebec City–Charlevoix, Vancouver & the North Shore, and Victoria & South Vancouver Island/.test(text(intro)) || !/the South Korea country overview/.test(text(intro)) || !/seven Gyeongju routes/.test(text(intro)) || !/four George Town & Penang routes/.test(text(intro))) fail(`${label}: harness introduction must identify the South Korea country overview and count all 20 Canada routes, seven Gyeongju routes and four George Town & Penang routes.`);
  if (!/four Zurich & Lake Zurich routes/.test(text(intro))) fail(`${label}: harness introduction must identify all four Zurich routes.`);
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
  for (const width of [320, 390]) {
    const diagnostics = nodes(document, 'p').filter((node) => attr(node, 'id') === `diagnostics-${width}`);
    if (diagnostics.length !== 1 || attr(diagnostics[0], 'aria-live') !== 'polite' || !attr(diagnostics[0], 'class').split(/\s+/).includes('frame-diagnostics')) {
      fail(`${label}: expected one visible, politely announced ${width} px frame diagnostics region.`);
    }
  }
  const harnessStyles = nodes(document, 'style').map(text).join('\n');
  if (!harnessStyles.includes('.frame-diagnostics') || /overflow-x\s*:\s*(?:hidden|clip)\b/i.test(harnessStyles)) {
    fail(`${label}: frame diagnostics must be visible and the harness must not conceal overflow.`);
  }
  const runtimeScripts = nodes(document, 'script').filter((node) => !attr(node, 'id') && !attr(node, 'src') && !attr(node, 'type'));
  if (runtimeScripts.length !== 1) fail(`${label}: expected one executable harness controller.`);
  const runtimeScript = text(runtimeScripts[0]);
  try { new Script(runtimeScript, { filename: `${label}-inline.js` }); }
  catch (error) { fail(`${label}: inline harness controller has invalid JavaScript: ${error.message}`); }
  const requiredReadinessChecks = [
    'FRAME_READY_TIMEOUT_MS = 20000',
    'selectionGeneration',
    'frame.dataset.navigationGeneration',
    'generation !== selectionGeneration',
    'tripdistill-qa-',
    "route.path + '#tripdistill-qa-' + generation + '-' + item.width",
    'expectedUrl.hash',
    'changedFrames',
    'doc.readyState !== \'complete\'',
    'doc.fonts.ready',
    'tripdistill:components-ready',
    'Recheck after listener registration',
    'requestAnimationFrame',
    'frameWindow.innerWidth',
    'root.scrollWidth',
    'root.clientWidth',
    'getComputedStyle(root).minWidth',
    'Possible element overhangs',
    'Timed out after'
  ];
  for (const required of requiredReadinessChecks) {
    if (!runtimeScript.includes(required)) fail(`${label}: harness readiness or width diagnostics are missing ${required}.`);
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
  const expectedPageRecords = expectedRoutes.length * expectedLocales.length;
  if (manifest.routeCount !== expectedPageRecords || manifest.pages?.length !== expectedPageRecords) fail(`${label}: expected ${expectedPageRecords} localized route records.`);
  if (JSON.stringify(manifest.viewportWidths) !== JSON.stringify([320, 390])) fail(`${label}: viewport widths must be exactly 320 and 390.`);
  if (JSON.stringify(manifest.routes.map(({ path: routePath, label: routeLabel }) => [routePath, routeLabel])) !== JSON.stringify(expectedRoutes)) fail(`${label}: route manifest does not match the approved France, Canada including Toronto and Vancouver, Zurich, South Korea, Vietnam and Penang scope.`);
  if (JSON.stringify(manifest.locales.map(({ code, prefix }) => ({ code, prefix }))) !== JSON.stringify(expectedLocales)) fail(`${label}: locale routing does not match en, zh-Hant, ja, ko, th.`);
  return manifest;
}

function inspectLocalizedPage(manifest, record, label) {
  const routePath = safeDistPath(record.urlPath);
  const pagePath = record.urlPath.endsWith('/') ? path.join(routePath, 'index.html') : routePath;
  const bytes = fs.readFileSync(pagePath);
  if (bytes.byteLength !== record.bytes || hash(bytes) !== record.sha256) fail(`${label}: built route content hash mismatch for ${record.locale} ${record.urlPath}.`);
  if (bytes.byteLength > manifest.maxHtmlBytes) fail(`${label}: ${record.urlPath} exceeds the ${manifest.maxHtmlBytes} byte HTML budget.`);
  const html = bytes.toString('utf8');
  const document = parse(html);
  const htmlNode = nodes(document, 'html')[0];
  if (attr(htmlNode, 'lang') !== record.locale) fail(`${label}: wrong document language on ${record.urlPath}: ${attr(htmlNode, 'lang')}.`);
  const bodyNode = nodes(document, 'body')[0];
  const franceIdentity = record.path.startsWith('/france/') && attr(bodyNode, 'data-country') === 'france' && ['fr-paris', 'fr-normandy', 'fr-loire-valley', 'fr-champagne'].some((prefix) => attr(bodyNode, 'data-page').startsWith(prefix));
  const canadaIdentity = record.path.startsWith('/canada/') && attr(bodyNode, 'data-country') === 'canada' && attr(bodyNode, 'data-page').startsWith('ca-');
  const zurichIdentity = record.path.startsWith('/switzerland/zurich-lake/') && attr(bodyNode, 'data-country') === 'switzerland' && attr(bodyNode, 'data-region') === 'zurich-lake';
  const penangIdentity = record.path === '/malaysia/george-town-penang/' ? attr(bodyNode, 'data-country') === 'malaysia' && attr(bodyNode, 'data-cluster') === 'malaysia-straits' : record.path.startsWith('/malaysia/george-town-penang/') && attr(bodyNode, 'data-country') === 'malaysia' && attr(bodyNode, 'data-region') === 'george-town-penang';
  const koreaCountryIdentity = record.path === '/south-korea/' && attr(bodyNode, 'data-page') === 'south-korea' && attr(bodyNode, 'data-country') === 'south-korea' && attr(bodyNode, 'data-city') === 'south-korea';
  const seoulIdentity = record.path.startsWith('/south-korea/seoul/') && attr(bodyNode, 'data-country') === 'south-korea' && attr(bodyNode, 'data-city') === 'seoul';
  const busanIdentity = record.path.startsWith('/south-korea/busan/') && attr(bodyNode, 'data-country') === 'south-korea' && attr(bodyNode, 'data-city') === 'busan';
  const gyeongjuIdentity = record.path.startsWith('/south-korea/gyeongju/') && attr(bodyNode, 'data-country') === 'south-korea' && attr(bodyNode, 'data-city') === 'gyeongju';
  const hanoiIdentity = record.path.startsWith('/vietnam/hanoi/') && attr(bodyNode, 'data-country') === 'vietnam' && attr(bodyNode, 'data-region') === 'hanoi';
  const sapaIdentity = record.path.startsWith('/vietnam/sapa-northwest-highlands/') && attr(bodyNode, 'data-country') === 'vietnam' && attr(bodyNode, 'data-region') === 'sapa-northwest-highlands';
  const haGiangIdentity = record.path.startsWith('/vietnam/ha-giang/') && attr(bodyNode, 'data-country') === 'vietnam' && attr(bodyNode, 'data-region') === 'ha-giang';
  const ninhBinhIdentity = record.path.startsWith('/vietnam/ninh-binh/') && attr(bodyNode, 'data-country') === 'vietnam' && attr(bodyNode, 'data-region') === 'ninh-binh';
  const hueIdentity = record.path.startsWith('/vietnam/hue/') && attr(bodyNode, 'data-country') === 'vietnam' && attr(bodyNode, 'data-region') === 'hue' && attr(bodyNode, 'data-vn-family') === 'violet-rain-archive';
  const jejuIdentity = record.path.startsWith('/south-korea/jeju/') && attr(bodyNode, 'data-country') === 'south-korea' && attr(bodyNode, 'data-city') === 'jeju';
  if (!franceIdentity && !canadaIdentity && !zurichIdentity && !penangIdentity && !koreaCountryIdentity && !seoulIdentity && !busanIdentity && !gyeongjuIdentity && !hanoiIdentity && !sapaIdentity && !haGiangIdentity && !ninhBinhIdentity && !hueIdentity && !jejuIdentity) fail(`${label}: wrong route identity on ${record.urlPath}.`);
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
  return { document, bytes, html };
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
const hueDatedRoutes = [
  '/vietnam/hue/',
  '/vietnam/hue/imperial-city-citadel/',
  '/vietnam/hue/royal-tombs/',
  '/vietnam/hue/thien-mu-perfume-river/',
  '/vietnam/hue/thanh-toan-rural-loop/',
  '/vietnam/hue/bach-ma-national-park/',
  '/vietnam/hue/lang-co-lap-an-lagoon/'
];
for (const locale of expectedLocales) {
  for (const route of hueDatedRoutes) {
    const localizedRoute = `${locale.prefix}${route}`;
    if (!sitemap.includes(`<loc>https://tripdistill.com${localizedRoute}</loc><lastmod>2026-10-08</lastmod>`)) fail(`Hue sitemap lastmod must be 2026-10-08 for ${localizedRoute}.`);
  }
}

const pageResults = manifest.pages.map((record) => inspectLocalizedPage(manifest, record, 'local QA'));
const pagesByRoute = new Map(manifest.pages.map((record, index) => [`${record.locale}${record.path}`, { record, ...pageResults[index] }]));
for (const locale of expectedLocales) {
  for (const [routePath] of expectedRoutes) {
    const { record, document, html } = pagesByRoute.get(`${locale.code}${routePath}`);
    const styles = nodes(document, 'link').filter((node) => attr(node, 'rel').toLowerCase() === 'stylesheet').map((node) => new URL(attr(node, 'href'), 'https://tripdistill.com').pathname);
    const styleHrefs = nodes(document, 'link').filter((node) => attr(node, 'rel').toLowerCase() === 'stylesheet').map((node) => attr(node, 'href'));
    if (routePath === '/south-korea/') {
      const body = nodes(document, 'body')[0];
      const bodyText = text(body);
      const links = nodes(document, 'a').map((node) => attr(node, 'href'));
      if (!links.includes('https://www.metmuseum.org/toah/ht/06/eak.html')) fail(`Missing the Silla chronology source on ${locale.code} South Korea overview.`);
      if (!bodyText.includes('676') || !bodyText.includes('935')) fail(`Missing distinct Silla-era dates on ${locale.code} South Korea overview.`);
      if (locale.code === 'en') {
        for (const phrase of ['Silla Kingdom (57 BCE', 'Unified Silla (676', 'only by the late seventh century', 'Gyeongju was its capital', 'For separate-ticket flights', 'same-day connection may work']) {
          if (!bodyText.includes(phrase)) fail(`South Korea overview is missing its reviewed historical/conditional wording: ${phrase}.`);
        }
        if (bodyText.includes('The Silla kingdom ruled the Korean peninsula from 57 BCE to 935 CE') || bodyText.includes('Separate the domestic flight from an international departure rather than relying on a same-day connection')) fail('Superseded Silla or categorical flight wording remains on the English overview.');
      }
      if (locale.code === 'zh-Hant') {
        for (const phrase of ['新羅王國（公元前57年至676年）', '統一新羅（676年至935年）', '七世紀後期', '慶州曾是新羅的首都', '機票分開購買', '當日轉機也可能可行']) {
          if (!bodyText.includes(phrase)) fail(`Traditional Chinese South Korea overview is missing its reviewed historical/conditional wording: ${phrase}.`);
        }
        for (const phrase of ['走廊搭鐵路，延伸距離靠公車', '付款安排行程前', '國內線和國際線請分開日期']) {
          if (bodyText.includes(phrase)) fail(`Superseded Traditional Chinese South Korea wording remains: ${phrase}.`);
        }
      }
    }
    if (routePath.startsWith('/malaysia/george-town-penang/')) {
      const body = nodes(document, 'body')[0];
      const bodyText = text(body);
      const links = nodes(document, 'a').map((node) => attr(node, 'href'));
      const isPenangHub = routePath === '/malaysia/george-town-penang/';
      const penangBodySelector = isPenangHub
        ? 'body[data-country="malaysia"][data-cluster="malaysia-straits"][data-page="george-town-penang"]'
        : 'body[data-country="malaysia"][data-region="george-town-penang"]';
      const malaysiaCss = fs.readFileSync(safeDistPath('/css/malaysia.css'), 'utf8');
      const penangBodyRule = cssRuleBlock(malaysiaCss, penangBodySelector);
      if (!penangBodyRule || !/min-width\s*:\s*0\s*;/.test(penangBodyRule)) fail(`Penang body selector does not release the global 320px floor on ${locale.code} ${routePath}.`);
      for (const container of ['.site-shell', '.page-content']) {
        const selector = `${penangBodySelector} ${container}`;
        const containerRule = cssRuleBlock(malaysiaCss, selector);
        if (!containerRule || !/min-width\s*:\s*0\s*;/.test(containerRule)) fail(`Penang selector ${selector} does not allow shrinking on ${locale.code} ${routePath}.`);
        if (/overflow-x\s*:\s*(?:hidden|clip)\b/i.test(containerRule)) fail(`Penang selector ${selector} hides horizontal overflow instead of allowing content to size on ${locale.code} ${routePath}.`);
      }
      if (!styleHrefs.includes('/css/malaysia.css?v=20261008-1')) fail(`Missing current Penang narrow-viewport stylesheet on ${locale.code} ${routePath}.`);
      if (attr(body, 'data-country') !== 'malaysia') fail('Wrong Penang route country on ' + locale.code + ' ' + routePath + '.');
      if (isPenangHub && (attr(body, 'data-cluster') !== 'malaysia-straits' || attr(body, 'data-page') !== 'george-town-penang')) fail('Wrong Penang hub identity on ' + locale.code + '.');
      if (!isPenangHub && attr(body, 'data-region') !== 'george-town-penang') fail('Wrong Penang child identity on ' + locale.code + ' ' + routePath + '.');
      if (nodes(document, 'details').length < 3) fail('Missing destination-specific Penang FAQ controls on ' + locale.code + ' ' + routePath + '.');
      if (!links.some((href) => href.includes('commons.wikimedia.org')) || !links.some((href) => href.includes('creativecommons.org/licenses/'))) fail('Missing linked image source or exact license on ' + locale.code + ' ' + routePath + '.');
      if (!/CC BY(?:-SA)? [234]\.0/.test(bodyText)) fail('Missing visible commercial-use image license on ' + locale.code + ' ' + routePath + '.');
      if (locale.code === 'en') {
        if (routePath === '/malaysia/george-town-penang/' && !['Armenian Street', 'Clan Jetties', 'Air Itam', 'Penang Hill'].every((phrase) => bodyText.includes(phrase))) fail('Penang hub is missing its three distinct area choices.');
        if (routePath.endsWith('/armenian-street-core-zone/') && !['Cannon Square', 'Khoo Kongsi', 'Cheah Kongsi', '1906', 'Lebuh Pantai'].every((phrase) => bodyText.includes(phrase))) fail('Armenian Street route is missing its named landmarks or exit.');
        if (routePath.endsWith('/weld-quay-clan-jetties/') && !['Pangkalan Raja Tun Uda', 'Butterworth', 'Pengkalan Weld', 'Chew Jetty'].every((phrase) => bodyText.includes(phrase))) fail('Weld Quay route is missing its ferry or public-path choices.');
        if (routePath.endsWith('/penang-hill-air-itam/') && !['1924', 'Flagstaff Hill', 'Edgecliff', 'Kek Lok Si', 'Lower Station'].every((phrase) => bodyText.includes(phrase))) fail('Penang Hill route is missing its railway, heritage or exit choices.');
        if (routePath !== '/malaysia/george-town-penang/') {
          const decision = classNodes(document, 'md-decision-strip')[0];
          const routeSection = nodes(document, 'section').find((node) => attr(node, 'id') === 'route');
          const routeHead = classNodes(routeSection, 'md-section-head')[0];
          const routeLead = nodes(routeHead, 'p')[0];
          const decisionParagraphs = nodes(decision, 'p').map((node) => text(node).replace(/\s+/g, ' ').trim().toLowerCase());
          const normalizedLead = text(routeLead).replace(/\s+/g, ' ').trim().toLowerCase();
          if (decisionParagraphs.includes(normalizedLead) || classNodes(document, 'md-boundary').length) fail('Penang child repeats a decision paragraph in the route/boundary sections on ' + routePath + '.');
        }
        const searchEntry = sourceSearchIndex.find((item) => item.url === routePath);
        if (!searchEntry) fail('Penang page is missing its search record for ' + routePath + '.');
        if (routePath.endsWith('/armenian-street-core-zone/') && !searchEntry.summary.includes('Khoo Kongsi')) fail('Armenian Street search summary omits its named landmark.');
        if (routePath.endsWith('/weld-quay-clan-jetties/') && !searchEntry.summary.includes('Pengkalan Weld')) fail('Weld Quay search summary omits its named waterfront.');
        if (routePath.endsWith('/penang-hill-air-itam/') && !searchEntry.summary.includes('Flagstaff Hill')) fail('Penang Hill search summary omits the funicular terminus.');
      }
      continue;
    }
    if (routePath.startsWith('/switzerland/zurich-lake/')) {
      const body = nodes(document, 'body')[0];
      const bodyText = text(body);
      const links = nodes(document, 'a').map((node) => attr(node, 'href'));
      const isHub = routePath === '/switzerland/zurich-lake/';
      const expectedPage = isHub ? 'ch-zurich-lake' : 'ch-zurich-lake-' + routePath.split('/').filter(Boolean).at(-1);
      if (attr(body, 'data-country') !== 'switzerland' || attr(body, 'data-region') !== 'zurich-lake' || attr(body, 'data-page') !== expectedPage) fail(`Wrong Zurich page identity on ${locale.code} ${routePath}.`);
      if (!styleHrefs.includes('/css/switzerland.css?v=20260912-1')) fail(`Missing Switzerland stylesheet on ${locale.code} ${routePath}.`);
      const isZurichWest = routePath === '/switzerland/zurich-lake/zurich-west-museums/';
      const expectedFieldCssVersion = isZurichWest ? '20261008-3' : '20261008-2';
      if (!isHub && !styleHrefs.includes(`/css/switzerland-field.css?v=${expectedFieldCssVersion}`)) fail(`Missing Zurich field-guide stylesheet on ${locale.code} ${routePath}.`);
      if (nodes(document, 'details').length < 3) fail(`Missing visible Zurich FAQ controls on ${locale.code} ${routePath}.`);
      if (!links.some((href) => href.includes('commons.wikimedia.org')) || !links.some((href) => href.includes('creativecommons.org/licenses/'))) fail(`Missing linked Zurich photo source or license on ${locale.code} ${routePath}.`);
      if (!/CC BY(?:-SA)? [234]\.0/.test(bodyText)) fail(`Missing visible Zurich image-license version on ${locale.code} ${routePath}.`);
      const requiredOfficialSource = {
        '/switzerland/zurich-lake/': 'https://www.zuerich.com/en/visit/nature/lindenhof',
        '/switzerland/zurich-lake/lake-uetliberg/': 'https://www.zsg.ch/en/',
        '/switzerland/zurich-lake/old-town-lindenhof/': 'https://www.zuerich.com/en/visit/nature/lindenhof',
        '/switzerland/zurich-lake/zurich-west-museums/': 'https://im-viadukt.ch/en/infos'
      }[routePath];
      if (!links.includes(requiredOfficialSource)) fail(`Missing route-specific Zurich official source on ${locale.code} ${routePath}.`);
      if (locale.code === 'zh-Hant') {
        for (const staleLabel of ['田野工具', '保護返程', '利馬特河跨越帳冊']) {
          if (bodyText.includes(staleLabel)) fail(`Zurich Traditional Chinese still contains the unclear label [${staleLabel}] on ${routePath}.`);
        }
        const expectedLocaleLabel = {
          '/switzerland/zurich-lake/lake-uetliberg/': '瑞士北部・路線指南 02',
          '/switzerland/zurich-lake/old-town-lindenhof/': '利馬特河兩岸步行路線',
          '/switzerland/zurich-lake/zurich-west-museums/': '瑞士北部・路線指南 03'
        }[routePath];
        if (expectedLocaleLabel && !bodyText.includes(expectedLocaleLabel)) fail(`Zurich Traditional Chinese is missing its revised route label [${expectedLocaleLabel}] on ${routePath}.`);
        if (!isHub && !bodyText.includes('抵達後先確認方向、選好路線，並預留回程時間。')) fail(`Zurich Traditional Chinese is missing its practical return-planning cue on ${routePath}.`);
      }
      if (isZurichWest) {
        const zurichFieldCss = fs.readFileSync(safeDistPath('/css/switzerland-field.css'), 'utf8');
        const mobile980 = zurichFieldCss.lastIndexOf('@media (max-width:980px)');
        const mobile620 = zurichFieldCss.lastIndexOf('@media (max-width:620px)');
        const scope = 'body[data-page="ch-zurich-lake-zurich-west-museums"]';
        const choiceDeckRule = cssRuleBlock(zurichFieldCss, scope + ' .ch-choice-deck,', mobile980);
        const choiceCardRule = cssRuleBlock(zurichFieldCss, scope + ' .ch-choice-deck article,', mobile980);
        const choiceTextRule = cssRuleBlock(zurichFieldCss, scope + ' .ch-choice-deck h2,', mobile980);
        const watchGridRule = cssRuleBlock(zurichFieldCss, scope + ' .ch-field[data-ch-variant="3"] .ch-watch > div {', mobile980);
        const watchCardRule = cssRuleBlock(zurichFieldCss, scope + ' .ch-field[data-ch-variant="3"] .ch-watch article {', mobile980);
        const watchTextRule = cssRuleBlock(zurichFieldCss, scope + ' .ch-field[data-ch-variant="3"] .ch-watch h3,', mobile980);
        const sectionScopeRule = cssRuleBlock(zurichFieldCss, scope + ' .ch-regional-context,', mobile980);
        const sectionDescendantsRule = cssRuleBlock(zurichFieldCss, scope + ' .ch-regional-context *,', mobile980);
        for (const selector of [scope + ' .ch-regional-context', scope + ' .ch-route', scope + ' .ch-fallback', scope + ' .ch-watch', scope + ' .ch-related', scope + ' .ch-faq']) {
          if (!sectionScopeRule.includes(selector)) fail('Zurich West mobile section guard is missing ' + selector + '.');
        }
        if (!/min-width\s*:\s*0\s*;/i.test(sectionScopeRule) || !/max-width\s*:\s*100%\s*;/i.test(sectionScopeRule) || !/overflow-wrap\s*:\s*anywhere\s*;/i.test(sectionScopeRule)) fail('Zurich West mobile sections must shrink and allow translated words to wrap on ' + locale.code + '.');
        if (!/min-width\s*:\s*0\s*;/i.test(sectionDescendantsRule) || !/max-width\s*:\s*100%\s*;/i.test(sectionDescendantsRule) || !/overflow-wrap\s*:\s*anywhere\s*;/i.test(sectionDescendantsRule)) fail('Zurich West mobile section content must shrink and wrap on ' + locale.code + '.');
        if (mobile980 < 0 || !/grid-template-columns\s*:\s*minmax\(0\s*,\s*1fr\)\s*;/i.test(choiceDeckRule) || !/min-width\s*:\s*0\s*;/i.test(choiceDeckRule)) fail('Zurich West choice deck must use one shrinkable mobile column on ' + locale.code + '.');
        if (!/min-width\s*:\s*0\s*;/i.test(choiceCardRule) || !/max-width\s*:\s*100%\s*;/i.test(choiceCardRule) || !/overflow-wrap\s*:\s*anywhere\s*;/i.test(choiceTextRule)) fail('Zurich West choice cards and text must fit the mobile column on ' + locale.code + '.');
        if (!/grid-template-columns\s*:\s*minmax\(0\s*,\s*1fr\)\s*;/i.test(watchGridRule) || !/min-width\s*:\s*0\s*;/i.test(watchGridRule) || !/max-width\s*:\s*100%\s*;/i.test(watchGridRule)) fail('Zurich West variant 3 watch grid must use a shrinkable mobile column on ' + locale.code + '.');
        if (!/min-width\s*:\s*0\s*;/i.test(watchCardRule) || !/max-width\s*:\s*100%\s*;/i.test(watchCardRule) || !/overflow-wrap\s*:\s*anywhere\s*;/i.test(watchTextRule)) fail('Zurich West watch cards and translated text must shrink and wrap on ' + locale.code + '.');
        const narrowGridRule = cssRuleBlock(zurichFieldCss, scope + ' .ch-regional-context > div,', mobile620);
        const narrowItemsRule = cssRuleBlock(zurichFieldCss, scope + ' .ch-route li,', mobile620);
        for (const selector of [scope + ' .ch-regional-context > div', scope + ' .ch-route ol', scope + ' .ch-fallback', scope + ' .ch-related > div', scope + ' .ch-related a']) {
          if (!narrowGridRule.includes(selector)) fail('Zurich West narrow layout is missing scoped grid selector ' + selector + '.');
        }
        if (mobile620 < 0 || !/grid-template-columns\s*:\s*minmax\(0\s*,\s*1fr\)\s*;/i.test(narrowGridRule) || !/min-width\s*:\s*0\s*;/i.test(narrowGridRule) || !/max-width\s*:\s*100%\s*;/i.test(narrowGridRule)) fail('Zurich West context, route, fallback and related grids must use shrinkable columns at 620px on ' + locale.code + '.');
        if (!narrowItemsRule.includes(scope + ' .ch-fallback > div') || !narrowItemsRule.includes(scope + ' .ch-related a > div') || !/min-width\s*:\s*0\s*;/i.test(narrowItemsRule) || !/max-width\s*:\s*100%\s*;/i.test(narrowItemsRule)) fail('Zurich West narrow grid items must fit their columns on ' + locale.code + '.');
        if ([choiceDeckRule, choiceCardRule, choiceTextRule, watchGridRule, watchCardRule, watchTextRule, sectionScopeRule, sectionDescendantsRule, narrowGridRule, narrowItemsRule].some((rule) => /overflow-x\s*:\s*(?:hidden|clip)\b/i.test(rule))) fail('Zurich West responsive rules must not hide horizontal overflow on ' + locale.code + '.');
      }
      if (locale.code === 'en') {
        const requiredByRoute = {
          '/switzerland/zurich-lake/': ['Limmat', 'Lake Zurich', 'Zurich West', 'Do not make every rail line, lake and summit compete for the same day.'],
          '/switzerland/zurich-lake/lake-uetliberg/': ['Bellevue', 'Bürkliplatz', 'S10 runs only to Selnau', '12 December 2026'],
          '/switzerland/zurich-lake/old-town-lindenhof/': ['Rennweg', 'Lindenhof', 'Schipfe', 'Grossmünster', 'Fraumünster'],
          '/switzerland/zurich-lake/zurich-west-museums/': ['Hardbrücke', '1894 Viadukt arches', 'Markthalle', 'Toni-Areal']
        }[routePath];
        for (const phrase of requiredByRoute) if (!bodyText.includes(phrase)) fail(`Zurich guide is missing route-specific detail [${phrase}] on ${routePath}.`);
        const searchEntry = sourceSearchIndex.find((item) => item.url === routePath);
        if (!searchEntry) fail(`Zurich page is missing its search record on ${routePath}.`);
      }
      continue;
    }
    if (routePath.startsWith('/vietnam/hue/')) {
      const body = nodes(document, 'body')[0];
      const bodyText = text(body);
      const links = nodes(document, 'a').map((node) => attr(node, 'href'));
      const expectedPage = routePath === '/vietnam/hue/' ? 'hue' : routePath.split('/').filter(Boolean).at(-1);
      if (attr(body, 'data-page') !== expectedPage || attr(body, 'data-vn-family') !== 'violet-rain-archive') fail(`Wrong Hue page identity on ${locale.code} ${routePath}.`);
      const expectedHueStylesheet = '/css/vietnam-hue.css?v=20261008-3';
      if (!styleHrefs.includes(expectedHueStylesheet)) fail(`Missing Hue edition stylesheet on ${locale.code} ${routePath}.`);
      const requiredOfficialSource = {
        '/vietnam/hue/': 'https://eticket.hueworldheritage.org.vn/',
        '/vietnam/hue/imperial-city-citadel/': 'https://eticket.hueworldheritage.org.vn/',
        '/vietnam/hue/royal-tombs/': 'https://eticket.hueworldheritage.org.vn/',
        '/vietnam/hue/thien-mu-perfume-river/': 'https://eticket.hueworldheritage.org.vn/',
        '/vietnam/hue/thanh-toan-rural-loop/': 'https://sdl.hue.gov.vn/diem-du-lich-nong-thon/diem-du-lich-cau-ngoi-thanh-toan.html',
        '/vietnam/hue/bach-ma-national-park/': 'https://nbca.gov.vn/vuon-quoc-gia-bach-ma/',
        '/vietnam/hue/lang-co-lap-an-lagoon/': 'https://hue.gov.vn/Cong-dan/Giai-trinh-y-kien-cu-tri/action/chitiet/tid/e1577ab0-d248-40f2-9235-b242009286c3'
      }[routePath];
      if (!links.includes(requiredOfficialSource)) fail(`Missing route-specific official source on ${locale.code} ${routePath}.`);
      const tombSource = 'https://commons.wikimedia.org/wiki/File:Royal_Tomb_of_Minh_Mang_(14720605126).jpg';
      const tombLicense = 'https://creativecommons.org/licenses/by-sa/2.0/';
      const tombCredits = nodes(document, 'li').filter((node) => nodes(node, 'a').some((link) => attr(link, 'href') === tombSource));
      if (tombCredits.length !== 1) fail(`Expected one exact Minh Mang photo credit on ${locale.code} ${routePath}.`);
      const creditLinks = nodes(tombCredits[0], 'a').map((node) => attr(node, 'href'));
      const editDisclosure = nodes(tombCredits[0], 'span').map(text).find((value) => value.length > 24);
      if (!creditLinks.includes(tombLicense) || !text(tombCredits[0]).includes('CC BY-SA 2.0') || !editDisclosure) fail(`Hue tomb credit must show the linked exact license and adapted-image share-alike disclosure on ${locale.code} ${routePath}.`);
      if (/\b(?:VND|USD)\s*[\d,.]+|[$₫]\s*[\d,.]+/i.test(bodyText)) fail(`Unverified ticket/operator price appears on ${locale.code} ${routePath}.`);
      if (locale.code === 'en') {
        const requiredByRoute = {
          '/vietnam/hue/': ['1802 to 1945', 'north-bank', 'south-bank civic streets', 'Perfume River'],
          '/vietnam/hue/imperial-city-citadel/': ['Meridian Gate', 'Thai Hoa Palace', 'Forbidden Purple City'],
          '/vietnam/hue/royal-tombs/': ['Minh Mang', 'Tu Duc', 'Khai Dinh', 'Build the day around two sites, not all three.', 'For two open-air garden visits, pair Minh Mang with Tu Duc.', 'For a stronger architectural contrast, pair either garden with Khai Dinh.', 'Keep the third tomb optional; add it only if you have a full-day window', 'keep the garden pair to a half-day plan', 'actual finish time, transfer and current weather leave a confirmed buffer', 'Treat Bach Ma as a different outing.'],
          '/vietnam/hue/thien-mu-perfume-river/': ['seven-tier tower', 'active religious complex', 'licensed service', 'departure pier'],
          '/vietnam/hue/thanh-toan-rural-loop/': ['covered bridge', 'Tran Thi Dao', 'agricultural display', 'public lane'],
          '/vietnam/hue/bach-ma-national-park/': ['do not treat all four as stops on one hike', 'Confirm entry', 'Return to Hue in daylight'],
          '/vietnam/hue/lang-co-lap-an-lagoon/': ['transfer', 'public ground', 'working boats', 'Keep the onward leg intact']
        }[routePath];
        for (const phrase of requiredByRoute) if (!bodyText.includes(phrase)) fail(`Hue route is missing locally specific interpretation or practical choice “${phrase}” on ${routePath}.`);
        if (routePath === '/vietnam/hue/royal-tombs/') {
          const routeSection = nodes(document, 'section').find((node) => attr(node, 'id') === 'route');
          const routeSteps = nodes(routeSection, 'article').filter((node) => (attr(node, 'class') || '').split(/\s+/).includes('vn-route-step'));
          if (routeSteps.length !== 4) fail('Royal Tombs must keep its four route stages after removing the repeated introduction.');
          if (nodes(routeSection, 'p').some((node) => (attr(node.parentNode, 'class') || '').split(/\s+/).includes('vn-section-head'))) fail('Royal Tombs route section repeats itinerary copy before the four stages.');
          if (!bodyText.includes('Use a half day as a planning estimate for two tombs') || !bodyText.includes('add a third only if you can leave a full-day window') || bodyText.includes('allow a full day for all three')) fail('Royal Tombs must make a third tomb conditional on a full-day window and confirmed return, rather than a blanket extension.');
        }
        const schemaScripts = nodes(document, 'script').filter((node) => attr(node, 'type') === 'application/ld+json');
        const schema = schemaScripts.flatMap((node) => { try { const parsed = JSON.parse(text(node)); return parsed['@graph'] || [parsed]; } catch { return []; } });
        const article = schema.find((item) => item['@type'] === 'Article');
        if (article?.dateModified !== '2026-10-08') fail(`Hue reviewed route must expose matching dateModified metadata on ${routePath}.`);
      }
      continue;
    }
    if (routePath.startsWith('/south-korea/jeju/')) {
      const body = nodes(document, 'body')[0];
      const bodyText = text(body);
      const links = nodes(document, 'a').map((node) => attr(node, 'href'));
      if (attr(body, 'data-country') !== 'south-korea' || attr(body, 'data-city') !== 'jeju') fail(`Wrong Jeju responsive scope on ${locale.code} ${routePath}.`);
      if (!styles.includes('/css/jeju.css') || !styleHrefs.includes('/css/jeju.css?v=20261007-1')) fail(`Missing current Jeju responsive stylesheet on ${locale.code} ${routePath}.`);
      if (!nodes(document, 'details').length) fail(`Missing visible Jeju FAQ controls on ${locale.code} ${routePath}.`);
      if (!bodyText.includes('CC BY') && !bodyText.includes('CC0') && !bodyText.includes('Public domain')) fail(`Missing readable Jeju photo license in ${locale.code} ${routePath}.`);
      if (!links.some((href) => href.includes('commons.wikimedia.org'))) fail(`Missing linked Jeju photo source on ${locale.code} ${routePath}.`);
      const hasJejuPrimarySource = routePath.endsWith('/hallasan/')
        ? links.some((href) => href.includes('visithalla.jeju.go.kr/reservation/status.do'))
        : links.some((href) => /visitjeju\.net/.test(href));
      if (!hasJejuPrimarySource) fail(`Missing a primary Jeju destination source on ${locale.code} ${routePath}.`);
      if (locale.code === 'en') {
        if (routePath === '/south-korea/jeju/' && classNodes(document, 'jeju-atlas-card').length !== 8) fail('Jeju hub must retain eight distinct area cards.');
        if (routePath.endsWith('/seogwipo-jeongbang/') && (!classNodes(document, 'seogwipo-history-grid').length || !['HERITAGE / 2008', 'LEGEND / SEOBUL', 'DOCUMENTED / SONAMMEORI'].every((phrase) => bodyText.includes(phrase)))) fail('Seogwipo guide must retain its three evidence-separated history cards.');
        if (routePath.endsWith('/jungmun-andeok/') && (!classNodes(document, 'geo-course-picker').length || !['COURSE A', 'COURSE B', 'COURSE C'].every((phrase) => bodyText.includes(phrase)))) fail('Jungmun guide must retain all three official geotrail choices.');
        if (routePath.endsWith('/moseulpo-gapado/')) {
          if (!classNodes(document, 'ferry-manifest').length || !classNodes(document, 'gapado-day-clock').length) fail('Gapado guide must retain the passenger manifest and separate crossing/island clocks.');
          if (!bodyText.includes('10 minutes') || !bodyText.includes('about an hour') || !bodyText.includes('one-way')) fail('Gapado guide must keep source-backed crossing/exploration estimates and one-way-sailing uncertainty.');
          if (bodyText.includes('06:00')) fail('Gapado guide must not imply a fixed ferry check time.');
          if (!links.some((href) => href.includes('wonderfulis.co.kr'))) fail('Gapado guide must link to the live ferry operator timetable.');
        }
        if (routePath.endsWith('/hallasan/')) {
          if (!bodyText.includes('The summit is one chapter of Hallasan') || !bodyText.includes('Seongpanak and Gwaneumsa are the two routes shown by the current reservation system')) fail('Hallasan must distinguish summit access from the mountain’s lower-trail experience.');
          if (!links.some((href) => href.includes('visithalla.jeju.go.kr/reservation/status.do'))) fail('Hallasan must link directly to the live official reservation status.');
        }
        if (routePath.endsWith('/jeju-city-yongduam/')) {
          if (!bodyText.includes('Read the rock from its west side') || !bodyText.includes('about 10 metres high')) fail('Yongduam must retain its local geology and viewpoint interpretation.');
        }
        if (routePath.endsWith('/seongsan-udo/')) {
          if (!bodyText.includes('Official guidance currently lists Seongsan Port and Jongdal Port') || !bodyText.includes('Confirm the exact operator, terminal, outward sailing, arrival port and return on the day')) fail('Udo guidance must cover the two current departure-port options and day-of ferry verification.');
          if (!links.some((href) => href.includes('contentsid=CONT_000000000500477'))) fail('Seongsan and Udo must link to Visit Jeju’s current island and ferry guidance.');
          if (!links.some((href) => href.includes('contentsid=CNTS_300000000014703'))) fail('Seongsan and Udo must link to the current Seongsan passenger-terminal guide.');
        }
        if (routePath.endsWith('/woljeongri-gimnyeong/')) {
          if (!bodyText.includes('Walk the rock people built their fields around') || !bodyText.includes('those published scales differ')) fail('Woljeongri and Gimnyeong must retain the sourced village-geology and route-scale distinction.');
        }
      }
      if (routePath.endsWith('/moseulpo-gapado/') && bodyText.includes('06:00')) fail(`Stale fixed-time ferry check remains in ${locale.code} ${routePath}.`);
      continue;
    }
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
    if (routePath.startsWith('/south-korea/gyeongju/')) {
      const body = nodes(document, 'body')[0];
      const bodyText = text(body);
      const links = nodes(document, 'a').map((node) => attr(node, 'href'));
      const pageIds = new Map([
        ['/south-korea/gyeongju/', 'gyeongju'],
        ['/south-korea/gyeongju/daereungwon-hwangnidan-gil/', 'daereungwon-hwangnidan-gil'],
        ['/south-korea/gyeongju/wolseong-donggung-wolji/', 'wolseong-donggung-wolji'],
        ['/south-korea/gyeongju/bulguksa-seokguram/', 'bulguksa-seokguram'],
        ['/south-korea/gyeongju/namsan/', 'namsan'],
        ['/south-korea/gyeongju/yangdong-village/', 'yangdong-village'],
        ['/south-korea/gyeongju/bomun-lake/', 'bomun-lake']
      ]);
      if (attr(body, 'data-country') !== 'south-korea' || attr(body, 'data-city') !== 'gyeongju' || attr(body, 'data-page') !== pageIds.get(routePath)) fail(`Wrong Gyeongju responsive scope on ${locale.code} ${routePath}.`);
      if (!styles.includes('/css/gyeongju.css') || !styleHrefs.includes('/css/gyeongju.css?v=20261007-1')) fail(`Missing current Gyeongju responsive stylesheet on ${locale.code} ${routePath}.`);
      if (!nodes(document, 'details').length) fail(`Missing visible Gyeongju FAQ controls on ${locale.code} ${routePath}.`);
      if (!links.some((href) => href.includes('commons.wikimedia.org'))) fail(`Missing linked Gyeongju photo source on ${locale.code} ${routePath}.`);
      if (!bodyText.includes('CC BY') && !bodyText.includes('CC0') && !bodyText.includes('Public domain')) fail(`Missing readable Gyeongju photo license on ${locale.code} ${routePath}.`);
      const hasGyeongjuPrimary = links.some((href) => /visitkorea\.or\.kr/.test(href));
      const hasRouteSource = routePath.endsWith('/bomun-lake/')
        ? links.some((href) => href.includes('gyeongju.go.kr/tour/page.do?mnu_uid=4859'))
        : links.some((href) => href.includes('whc.unesco.org'));
      if (!hasGyeongjuPrimary || !hasRouteSource) fail(`Missing primary Gyeongju destination sources on ${locale.code} ${routePath}.`);
      const gyeongjuCss = fs.readFileSync(safeDistPath('/css/gyeongju.css'), 'utf8');
      const bodyWidthRule = cssRuleBlock(gyeongjuCss, 'body[data-city="gyeongju"]');
      if (!/min-width\s*:\s*0\s*;/.test(bodyWidthRule)) fail(`Gyeongju body does not shrink below the global 320px floor on ${locale.code} ${routePath}.`);
      if (!gyeongjuCss.includes('.gyeongju-area-hero > * { min-width: 0; }')) fail(`Gyeongju hero/grid children lack narrow-width protection on ${locale.code} ${routePath}.`);
      if (/overflow-x\s*:\s*(?:hidden|clip)/i.test(bodyWidthRule)) fail(`Gyeongju narrow-width protection must not conceal horizontal overflow on ${locale.code} ${routePath}.`);
      if (!/\.tumulus-hero,\s*\.namsan-hero,\s*\.bomun-hero,\s*\.yangdong-hero\s*\{\s*grid-template-columns:\s*1fr\s*;/i.test(gyeongjuCss)) fail(`Gyeongju outer guides need a single-column narrow layout on ${locale.code} ${routePath}.`);
      if (locale.code === 'en') {
        const requirementsByRoute = new Map([
          ['/south-korea/gyeongju/', ['Two full days make a sound first visit', 'Daereungwon', 'Tohamsan', 'KTX Station']],
          ['/south-korea/gyeongju/daereungwon-hwangnidan-gil/', ['Cheonmachong', 'only tomb at Daereungwon open to visitors', 'Cheomseongdae', 'Hwangnidan-gil']],
          ['/south-korea/gyeongju/wolseong-donggung-wolji/', ['Wolji Gallery', '30,000', '21:30', 'Anapji']],
          ['/south-korea/gyeongju/bulguksa-seokguram/', ['Dabotap', 'Seokgatap', '9 km by road', '3 km by hiking trail']],
          ['/south-korea/gyeongju/namsan/', ['Dongnamsan', 'Samneung', 'Chilbulam', 'Sinseonam', '7.5 km', '3\u20134 hours']],
          ['/south-korea/gyeongju/yangdong-village/', ['14th\u201315th centuries', 'Seobaekdang', 'Mucheomdang', 'public paths', 'separate half-day']],
          ['/south-korea/gyeongju/bomun-lake/', ['10 km east of downtown', '7 km', 'Bomun Water Stage', 'Mulneoul Bridge', 'modern tourism zone']]
        ]);
        const requirements = requirementsByRoute.get(routePath) || [];
        for (const phrase of requirements) if (!bodyText.includes(phrase)) fail(`Gyeongju editorial QA is missing '${phrase}' on ${routePath}.`);
      }
      if (routePath.endsWith('/bomun-lake/')) {
        const imageSources = nodes(document, 'img').map((node) => attr(node, 'src'));
        const restoredPhoto = '/assets/images/korea-gyeongju-bomun-autumn.webp';
        const schematic = '/assets/images/korea-gyeongju-bomun-route.svg';
        if (!imageSources.includes(restoredPhoto) || !imageSources.includes(schematic)) fail(`Bomun must retain both the licensed lake photo and the original route schematic on ${locale.code}.`);
        if (!links.some((href) => href === 'https://commons.wikimedia.org/wiki/File:Korea-Gyeongju-Bomun_Lake_in_autumn-01.jpg') || !bodyText.includes('Grete Howard') || !bodyText.includes('CC BY 3.0')) fail(`Bomun's restored photo needs its exact Commons source, creator and license on ${locale.code}.`);
      }
      const contrastRoute = routePath.endsWith('/namsan/') ? 'namsan' : routePath.endsWith('/yangdong-village/') ? 'yangdong' : routePath.endsWith('/bomun-lake/') ? 'bomun' : '';
      if (contrastRoute && locale.code === 'en') {
        const heroRule = cssRuleBlock(gyeongjuCss, `.${contrastRoute}-hero {`);
        const kickerRule = cssRuleBlock(gyeongjuCss, `.${contrastRoute}-hero .eyebrow`);
        const titleRule = cssRuleBlock(gyeongjuCss, `.${contrastRoute}-hero h1`);
        const paragraphRule = cssRuleBlock(gyeongjuCss, `.${contrastRoute}-hero p`);
        const background = cssHexProperty(heroRule, 'background');
        const baseText = cssHexProperty(heroRule, 'color');
        const kicker = cssHexProperty(kickerRule, 'color');
        const title = cssHexProperty(titleRule, 'color') || baseText;
        if (!background || !baseText || !kicker || !title || !paragraphRule) fail(`Gyeongju ${contrastRoute} hero is missing measurable text and background colors.`);
        let contrastSurface = background;
        if (contrastRoute === 'namsan') {
          const patternRule = cssRuleBlock(gyeongjuCss, '.namsan-hero::before');
          const patternColor = patternRule.match(/#([0-9a-f]{6})/i)?.[0];
          const opacity = Number(patternRule.match(/opacity\s*:\s*([\d.]+)/i)?.[1]);
          if (!patternColor || !Number.isFinite(opacity)) fail('Namsan pattern contrast needs its actual tint and opacity.');
          contrastSurface = compositeHex(background, patternColor, opacity);
        }
        const paragraphHex = cssHexProperty(paragraphRule, 'color');
        const paragraphAlpha = paragraphRule.includes('rgba(') ? rgbaColor(paragraphRule, '255,255,255') : null;
        const paragraphForeground = paragraphHex || (paragraphAlpha ? compositeHex(contrastSurface, paragraphAlpha.hex, paragraphAlpha.alpha) : '');
        if (!paragraphForeground) fail(`Gyeongju ${contrastRoute} hero paragraph color is not statically measurable.`);
        const ratios = [contrastRatio(baseText, contrastSurface), contrastRatio(kicker, contrastSurface), contrastRatio(title, contrastSurface), contrastRatio(paragraphForeground, contrastSurface)];
        if (ratios.some((ratio) => ratio < 4.5)) fail(`Gyeongju ${contrastRoute} hero text contrast falls below WCAG AA: ${ratios.map((ratio) => ratio.toFixed(2)).join(', ')}:1.`);
        console.log(`Gyeongju ${contrastRoute} static hero text contrast passed (minimum ${Math.min(...ratios).toFixed(2)}:1).`);
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
    if (routePath.startsWith('/vietnam/ninh-binh/')) {
      const body = nodes(document, 'body')[0];
      const bodyText = text(body);
      const links = nodes(document, 'a').map((node) => attr(node, 'href'));
      const ninhBinhStyle = '/css/vietnam-ninh-binh.css?v=20261007-1';
      if (attr(body, 'data-country') !== 'vietnam' || attr(body, 'data-region') !== 'ninh-binh') fail(`Wrong Ninh Binh route scope on ${locale.code} ${routePath}.`);
      if (!styleHrefs.includes(ninhBinhStyle)) fail(`Missing current Ninh Binh stylesheet on ${locale.code} ${routePath}.`);
      const expectedFaqCount = routePath === '/vietnam/ninh-binh/' ? 6 : 3;
      if (nodes(document, 'details').length !== expectedFaqCount) fail(`Expected ${expectedFaqCount} destination-specific Ninh Binh FAQ controls on ${locale.code} ${routePath}.`);
      const commonsLinks = [...new Set(links.filter((href) => href.includes('commons.wikimedia.org')))];
      if (commonsLinks.length < 3) fail(`Ninh Binh photo source credits are incomplete on ${locale.code} ${routePath}.`);
      const tamCocCredit = nodes(document, 'li').find((node) => text(node).includes('Tycho (Shansov.net)'));
      if (!tamCocCredit) fail(`Missing Tycho (Shansov.net) attribution on ${locale.code} ${routePath}.`);
      const creditLinks = nodes(tamCocCredit, 'a').map((node) => attr(node, 'href'));
      if (!creditLinks.includes('https://creativecommons.org/licenses/by-sa/3.0/')) fail(`Missing linked CC BY-SA 3.0 license on ${locale.code} ${routePath}.`);
      const adaptationKey = '. Resized, display-cropped and converted to WebP; adapted version remains available under CC BY-SA 3.0.';
      const visibleAdaptation = locale.code === 'en' ? adaptationKey : localeCatalogs[locale.code][adaptationKey];
      if (!visibleAdaptation || !text(tamCocCredit).includes(visibleAdaptation)) fail(`Missing localized adaptation note on ${locale.code} ${routePath}.`);
      const requiredSources = routePath === '/vietnam/ninh-binh/'
        ? ['whc.unesco.org/en/list/1438', 'vietnam.travel/things-to-do/guide-boat-tours-ninh-binh', 'sodulich.ninhbinh.gov.vn']
        : routePath.endsWith('/trang-an-boat-complex/')
          ? ['whc.unesco.org/en/list/1438', 'vietnam.travel/things-to-do/guide-boat-tours-ninh-binh', 'trangandanhthang.vn/khu-du-lich-trang-an']
          : routePath.endsWith('/hoa-lu-ancient-capital/')
            ? ['whc.unesco.org/en/list/1438', 'sodulich.ninhbinh.gov.vn/en/culture-heritage/hoa-lu-ancient-capital']
            : routePath.endsWith('/tam-coc-bich-dong/')
              ? ['sodulich.ninhbinh.gov.vn/en/leisure-ecotourism/tam-coc-bich-dong', 'trangandanhthang.vn/tam-coc-bich-dong']
              : routePath.endsWith('/hang-mua-dragon-mountain/')
                ? ['sodulich.ninhbinh.gov.vn/en/leisure-ecotourism/discover-the-mua-cave-in-ninh-binh-358', 'whc.unesco.org/en/list/1438']
                : routePath.endsWith('/van-long-wetland/')
                  ? ['sodulich.ninhbinh.gov.vn/vi/tai-nguyen-du-lich-tu-nhien/khu-bao-ton-thien-nhien-dat-ngap-nuoc-van-long-18', 'iucngreenlist.org/sites/van-long-nature-reserve']
                  : ['sodulich.ninhbinh.gov.vn/en/leisure-ecotourism/cuc-phuong-national-park-the-oldest-national-park-in-vietnam-359', 'vuonquocgiacucphuong.vn/en/news/'];
      for (const source of requiredSources) if (!links.some((href) => href.includes(source))) fail(`Missing Ninh Binh primary source ${source} on ${locale.code} ${routePath}.`);
      if (/Conditions change faster than an editorial page|Arrival contract|Three weak points to solve/i.test(bodyText)) fail(`Generic template filler remains on ${locale.code} ${routePath}.`);
      const longParagraphs = nodes(document, 'p').map((node) => text(node).replace(/\s+/g, ' ').trim()).filter((copy) => copy.length >= 100);
      if (new Set(longParagraphs).size !== longParagraphs.length) fail(`Repeated long Ninh Binh paragraph remains on ${locale.code} ${routePath}.`);
      if (locale.code === 'zh-Hant' && routePath.endsWith('/hoa-lu-ancient-capital/')) {
        if (!bodyText.includes('\u67e5\u770b\u884c\u524d\u6aa2\u67e5')) fail('Hoa Lu Traditional Chinese reader CTA must use practical pre-visit wording.');
        if (bodyText.includes('\u65e5\u67f1\u5bfa') || !bodyText.includes('Nh\u1ea5t Tr\u1ee5 \u5bfa\uff08\u83ef\u95ad\uff09')) fail('Hoa Lu Traditional Chinese must preserve the Nh\u1ea5t Tr\u1ee5 proper name.');
      }
      if (locale.code === 'en') {
        const requirements = routePath === '/vietnam/ninh-binh/'
          ? ['more than 30,000 years', '10th-century capital of Hoa Lu', 'Van Lam pier']
          : routePath.endsWith('/trang-an-boat-complex/')
            ? ['official Trang An pier', 'separate from Tam Coc', 'current pier map']
            : routePath.endsWith('/hoa-lu-ancient-capital/')
              ? ['968', '1010', 'Nhat Tru Pagoda', 'stone sutra pillar']
              : routePath.endsWith('/tam-coc-bich-dong/')
                ? ['three caves', 'Hang Ca, Hang Hai and Hang Ba', '1774', 'Bich Dong']
                : routePath.endsWith('/hang-mua-dragon-mountain/')
                  ? ['486 summit steps', 'Tam Coc', 'dated reference', 'controlled descent']
                  : routePath.endsWith('/van-long-wetland/')
                    ? ['3,000 hectares', 'Ramsar', 'Delacour', 'half day']
                    : ['1962', '29 or more seats', 'electric shuttle', '300 per day', '1 September 2026'];
        for (const phrase of requirements) if (!bodyText.includes(phrase)) fail(`Ninh Binh editorial QA is missing '${phrase}' on ${routePath}.`);
        if (routePath.endsWith('/van-long-wetland/') && !/never guaranteed|not guaranteed|not a sighting/i.test(bodyText)) fail(`Van Long wildlife sightings must not be promised on ${routePath}.`);
      }
      continue;
    }
    if (routePath.startsWith('/vietnam/ha-giang/')) {
      const body = nodes(document, 'body')[0];
      const bodyText = text(body);
      const links = nodes(document, 'a').map((node) => attr(node, 'href'));
      if (attr(body, 'data-country') !== 'vietnam' || attr(body, 'data-region') !== 'ha-giang') fail(`Wrong Ha Giang route scope on ${locale.code} ${routePath}.`);
      if (!styles.includes('/css/vietnam.css') || !styles.includes('/css/vietnam-ha-giang.css') || !styleHrefs.includes('/css/vietnam-ha-giang.css?v=20261007-2')) fail(`Missing current Ha Giang responsive stylesheet on ${locale.code} ${routePath}.`);
      const routeSlug = routePath.split('/').filter(Boolean).at(-1);
      const haGiangCss = fs.readFileSync(safeDistPath('/css/vietnam-ha-giang.css'), 'utf8');
      const haGiangBodyWidthRule = cssRuleBlock(haGiangCss, `[data-page="${routeSlug}"]`);
      if (!/min-width\s*:\s*0\s*;/.test(haGiangBodyWidthRule)) fail(`Ha Giang body keeps the global 320px minimum on ${locale.code} ${routePath}.`);
      const haGiangContainerWidthRule = cssRuleBlock(haGiangCss, ') :is(');
      for (const selector of ['.site-shell', '.page-content', '.vn-hub-hero', '.vn-field-hero', '.vn-field-copy']) {
        if (!haGiangContainerWidthRule.includes(selector)) fail(`Ha Giang narrow-width rule is missing ${selector} on ${locale.code} ${routePath}.`);
      }
      if (!nodes(document, 'details').length) fail(`Missing visible Ha Giang FAQ controls on ${locale.code} ${routePath}.`);
      const commonsLinks = links.filter((href) => href.includes('commons.wikimedia.org'));
      if (commonsLinks.length !== 6) fail(`Expected six distinct Ha Giang image source credits on ${locale.code} ${routePath}, got ${commonsLinks.length}.`);
      if (!links.some((href) => /vietnam\.travel/.test(href)) || !links.some((href) => /unesco\.org/.test(href))) fail(`Missing official Vietnam Tourism and UNESCO sources on ${locale.code} ${routePath}.`);
      if (!bodyText.includes('CC BY-SA') && !bodyText.includes('CC0') && !bodyText.includes('Public domain')) fail(`Missing readable Ha Giang image license credits on ${locale.code} ${routePath}.`);
      if (/Arrival contract|Check the weak points|Three weak points to solve|weak points/i.test(bodyText)) fail(`Generic Ha Giang contract/weak-points label remains on ${locale.code} ${routePath}.`);
      const longParagraphs = nodes(document, 'p').map((node) => text(node).replace(/\s+/g, ' ').trim()).filter((copy) => copy.length >= 80);
      if (new Set(longParagraphs).size !== longParagraphs.length) fail(`A long Ha Giang route paragraph is rendered more than once on ${locale.code} ${routePath}.`);
      if (locale.code === 'zh-Hant' && ['/vietnam/ha-giang/dong-van-old-quarter/', '/vietnam/ha-giang/ma-pi-leng-nho-que/'].includes(routePath)) {
        const title = text(nodes(document, 'h1')[0]);
        const openingParentheses = (title.match(/[（(]/g) || []).length;
        const closingParentheses = (title.match(/[）)]/g) || []).length;
        if (openingParentheses !== closingParentheses) fail(`Unbalanced subtitle parentheses on zh-Hant ${routePath}.`);
      }
      const englishHeadings = [
        'Road-day decisions',
        'Six legs with different road and daylight demands',
        'Visibility, pull-offs and rider readiness',
        'Services, fog and forest access',
        'Lane traffic, home thresholds and market work',
        'Stairs, weather and site instructions',
        'Traffic, rain and a separate boat transfer'
      ];
      if (locale.code !== 'en' && englishHeadings.some((heading) => bodyText.includes(heading))) fail(`English Ha Giang presentation copy leaked into ${locale.code} ${routePath}.`);
      if (locale.code === 'en') {
        const requirements = routePath === '/vietnam/ha-giang/'
          ? ['Quản Bạ’s valley gate', 'Yên Minh’s pine hills', 'Vietnam Tourism’s four-day route', 'Nho Quế boat descent']
          : routePath.endsWith('/quan-ba-heavens-gate/')
            ? ['Twin Mountains', 'Tam Sơn', 'QL4C', 'Visibility, pull-offs and rider readiness']
            : routePath.endsWith('/yen-minh-pine-forest/')
              ? ['pine belt', 'September–November', 'Tam Sơn', 'Services, fog and forest access']
              : routePath.endsWith('/dong-van-old-quarter/')
                ? ['forty preserved houses', 'covered market', 'private threshold', 'Lane traffic, home thresholds and market work']
                : routePath.endsWith('/lung-cu-flag-tower/')
                  ? ['200 steps', 'Lô Lô Chải', 'three hours', 'Stairs, weather and site instructions']
                  : ['24-kilometre', '700–800 metres', 'different road, operator and return plan', 'Traffic, rain and a separate boat transfer'];
        for (const phrase of requirements) if (!bodyText.toLowerCase().includes(phrase.toLowerCase())) fail(`Ha Giang editorial QA is missing '${phrase}' on ${routePath}.`);
        if (routePath !== '/vietnam/ha-giang/' && !bodyText.includes('Check conditions')) fail(`Ha Giang route checks action is missing on ${routePath}.`);
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
    if (routePath.startsWith('/canada/victoria-south-island/')) {
      const isVictoriaHub = routePath === '/canada/victoria-south-island/';
      const isSookeRoute = routePath.endsWith('/sooke-juan-de-fuca/');
      const victoriaCss = fs.readFileSync(safeDistPath('/css/canada-victoria.css'), 'utf8');
      if (!styles.includes('/css/canada.css') || !styles.includes('/css/canada-victoria.css')) fail(`Missing Victoria route stylesheets on ${locale.code} ${routePath}.`);
      const isButchartRoute = routePath.endsWith('/butchart-saanich/');
      const isVictoriaNarrowTarget = isVictoriaHub || isButchartRoute || isSookeRoute;
      const expectedVictoriaCssVersion = isVictoriaNarrowTarget ? '20261008-3' : '20261008-2';
      if (!styleHrefs.includes(`/css/canada-victoria.css?v=${expectedVictoriaCssVersion}`)) fail(`Missing current Victoria responsive stylesheet on ${locale.code} ${routePath}.`);
      if (!isVictoriaHub && !styles.includes('/css/canada-field.css')) fail(`Missing Canada field stylesheet on ${locale.code} ${routePath}.`);
      if (!attr(nodes(document, 'body')[0], 'data-region').includes('victoria-south-island')) fail(`Missing Victoria region marker on ${locale.code} ${routePath}.`);
      if (nodes(document, 'details').length < 3) fail(`Missing Victoria route FAQs on ${locale.code} ${routePath}.`);
      const expectedPage = isVictoriaHub ? 'ca-victoria-south-island' : `ca-victoria-south-island-${routePath.split('/').filter(Boolean).at(-1)}`;
      if (attr(nodes(document, 'body')[0], 'data-page') !== expectedPage) fail(`Wrong Victoria page identity on ${locale.code} ${routePath}.`);
      const bodyText = text(nodes(document, 'body')[0]);
      if (!bodyText.includes('CC BY') && !bodyText.includes('CC0')) fail(`Missing readable Victoria photo license on ${locale.code} ${routePath}.`);
      if (!nodes(document, 'a').some((node) => attr(node, 'href').includes('commons.wikimedia.org'))) fail(`Missing linked Victoria photo source on ${locale.code} ${routePath}.`);
      if (!isVictoriaHub && classNodes(document, 'ca-route-step').length !== 4) fail(`Victoria child must expose four route stages on ${locale.code} ${routePath}.`);
      if (isSookeRoute) {
        const choices = classNodes(document, 'ca-victoria-route-choices');
        if (choices.length !== 1 || nodes(choices[0], 'li').length !== 3 || !classNodes(document, 'ca-victoria-route-note').length) fail(`Sooke route must show three labeled schematic choices and its scale note on ${locale.code}.`);
        if (html.includes('/assets/images/canada-victoria-south-island-sooke-juan-de-fuca.webp') || html.includes('Rocky_coast_between_Little_Kuitshe')) fail(`Unverified Sooke photo still appears on ${locale.code}.`);
        const graphScripts = nodes(document, 'script').filter((node) => attr(node, 'type') === 'application/ld+json');
        const graph = graphScripts.flatMap((node) => { try { const parsed = JSON.parse(text(node)); return parsed['@graph'] || [parsed]; } catch { return []; } });
        if (nodes(document, 'meta').some((node) => attr(node, 'property') === 'og:image') || graph.some((item) => item['@type'] === 'Article' && item.image)) fail(`Text-only Sooke route must not advertise a removed photo as its social or structured image on ${locale.code}.`);
      }
      if (locale.code === 'en') {
        const requirements = isVictoriaHub
          ? ['70/70X', '22 km', 'route 75', '50–60 minutes', '45-minute drive']
          : routePath.endsWith('/inner-harbour-james-bay/')
            ? ['James Bay', 'Beacon Hill Park', '2–4 hours', 'weekday']
            : routePath.endsWith('/butchart-saanich/')
              ? ['55-acre', 'former quarry', '50–60 minutes', 'Brentwood Bay']
              : ['Sooke Potholes', 'China Beach', 'Botanical Beach', '1.2 m', '47 km', 'route 61', '1 km'];
        for (const phrase of requirements) if (!bodyText.toLowerCase().includes(phrase.toLowerCase())) fail(`Victoria editorial QA is missing '${phrase}' on ${routePath}.`);
      }
      if (!victoriaCss.includes('body[data-page="ca-victoria-south-island-sooke-juan-de-fuca"] .ca-field-hero--text-visual') || !victoriaCss.includes('@media (max-width: 1040px)') || !victoriaCss.includes('@media (max-width: 720px)') || !/min-width:\s*0/.test(victoriaCss) || /overflow(?:-x)?:\s*(?:hidden|clip)/i.test(victoriaCss)) fail(`Victoria responsive map guard or visible overflow protection is missing on ${locale.code} ${routePath}.`);
      if (isVictoriaNarrowTarget) {
        const targetSelector = `body[data-page="${expectedPage}"]`;
        const contentClass = isVictoriaHub ? '.ca-hub' : '.ca-field';
        const narrowRuleStart = victoriaCss.indexOf('/* These three Victoria pages must shrink');
        const bodyWidthRule = cssRuleBlock(victoriaCss, targetSelector, narrowRuleStart);
        const contentWidthRule = cssRuleBlock(victoriaCss, `${targetSelector} .site-shell,`, narrowRuleStart);
        const contentWidthSelectorStart = victoriaCss.indexOf(`${targetSelector} .site-shell,`, narrowRuleStart);
        const textWrapSelectorStart = victoriaCss.indexOf(`${targetSelector} ${contentClass}`, contentWidthSelectorStart + contentWidthRule.length);
        const textWrapRule = cssRuleBlock(victoriaCss, `${targetSelector} ${contentClass}`, textWrapSelectorStart);
        const descendantsRule = cssRuleBlock(victoriaCss, `${targetSelector} ${contentClass} *`, narrowRuleStart);
        if (narrowRuleStart < 0 || !bodyWidthRule.includes(targetSelector) || !/min-width\s*:\s*0\s*;/i.test(bodyWidthRule) || !/max-width\s*:\s*100%\s*;/i.test(bodyWidthRule)) fail(`Victoria target body must release the 320px floor and fit the viewport on ${locale.code} ${routePath}.`);
        if (!contentWidthRule.includes(`${targetSelector} .page-content`) || !/min-width\s*:\s*0\s*;/i.test(contentWidthRule) || !/max-width\s*:\s*100%\s*;/i.test(contentWidthRule)) fail(`Victoria target shell and content must shrink to the available width on ${locale.code} ${routePath}.`);
        if (!textWrapRule.includes('overflow-wrap: anywhere') || !descendantsRule.includes('min-width: 0') || !descendantsRule.includes('max-width: 100%') || !descendantsRule.includes('overflow-wrap: anywhere')) fail(`Victoria target content must wrap and release descendant minimum widths on ${locale.code} ${routePath}.`);
        if ([bodyWidthRule, contentWidthRule, textWrapRule, descendantsRule].some((rule) => /overflow(?:-x)?:\s*(?:hidden|clip)\b/i.test(rule))) fail(`Victoria target rules must not conceal horizontal overflow on ${locale.code} ${routePath}.`);
        const mobile720 = victoriaCss.lastIndexOf('@media (max-width: 720px)');
        if (isVictoriaHub) {
          const hubGridRule = cssRuleBlock(victoriaCss, targetSelector + ' .ca-hub-hero,', mobile720);
          const contractGridRule = cssRuleBlock(victoriaCss, targetSelector + ' .ca-contract-grid', mobile720);
          for (const selector of [targetSelector + ' .ca-hub-hero', targetSelector + ' .ca-hub-grid', targetSelector + ' .ca-hub-stats', targetSelector + ' .ca-route-compare', targetSelector + ' .ca-hub-heading']) {
            if (!hubGridRule.includes(selector)) fail('Victoria hub narrow layout is missing scoped grid selector ' + selector + '.');
          }
          if (mobile720 < 0 || !/grid-template-columns\s*:\s*minmax\(0\s*,\s*1fr\)\s*;/i.test(hubGridRule) || !/min-width\s*:\s*0\s*;/i.test(hubGridRule) || !/max-width\s*:\s*100%\s*;/i.test(hubGridRule)) fail('Victoria hub grids must use a shrinkable mobile column on ' + locale.code + '.');
          if (!/grid-template-columns\s*:\s*repeat\(2\s*,\s*minmax\(0\s*,\s*1fr\)\)\s*;/i.test(contractGridRule) || !/min-width\s*:\s*0\s*;/i.test(contractGridRule)) fail('Victoria hub contract grid must retain two shrinkable mobile columns on ' + locale.code + '.');
          if ([hubGridRule, contractGridRule].some((rule) => /overflow-x\s*:\s*(?:hidden|clip)\b/i.test(rule))) fail('Victoria hub responsive rules must not hide horizontal overflow on ' + locale.code + '.');
        } else {
          const fieldGridRule = cssRuleBlock(victoriaCss, targetSelector + ' .ca-field-hero,', mobile720);
          const expectedFieldSelectors = ['.ca-field-hero', '.ca-decision-grid', '.ca-orientation', '.ca-route-grid', '.ca-fallback-card', '.ca-check-grid', '.ca-section-heading', '.ca-related-grid', '.ca-related-card'];
          for (const selector of expectedFieldSelectors) {
            if (!fieldGridRule.includes(targetSelector + ' ' + selector)) fail('Victoria field narrow layout is missing scoped grid selector ' + targetSelector + ' ' + selector + '.');
          }
          if (mobile720 < 0 || !/grid-template-columns\s*:\s*minmax\(0\s*,\s*1fr\)\s*;/i.test(fieldGridRule) || !/min-width\s*:\s*0\s*;/i.test(fieldGridRule) || !/max-width\s*:\s*100%\s*;/i.test(fieldGridRule)) fail('Victoria field grids must use a shrinkable mobile column on ' + locale.code + '.');
          if (/overflow-x\s*:\s*(?:hidden|clip)\b/i.test(fieldGridRule)) fail('Victoria field responsive grids must not hide horizontal overflow on ' + locale.code + '.');
        }
      }
      continue;
    }
    if (routePath.startsWith('/canada/montreal/') || routePath.startsWith('/canada/quebec-city-charlevoix/') || routePath.startsWith('/canada/toronto/') || routePath.startsWith('/canada/vancouver-north-shore/')) {
      const isTorontoRoute = routePath.startsWith('/canada/toronto/');
      const isVancouverRoute = routePath.startsWith('/canada/vancouver-north-shore/');
      const regionCss = routePath.startsWith('/canada/montreal/') ? '/css/canada-montreal.css' : isTorontoRoute ? '/css/canada-toronto.css' : isVancouverRoute ? '/css/canada-vancouver.css' : '/css/canada-quebec-city.css';
      const isCanadaHub = routePath === '/canada/montreal/' || routePath === '/canada/quebec-city-charlevoix/' || routePath === '/canada/toronto/' || routePath === '/canada/vancouver-north-shore/';
      if (!styles.includes('/css/canada.css') || !styles.includes(regionCss)) fail(`Missing Canada route stylesheet ${regionCss} on ${locale.code} ${routePath}.`);
      const regionCssVersion = isTorontoRoute ? '20261007-2' : isVancouverRoute ? '20261007-1' : routePath === '/canada/montreal/mount-royal-museums/' ? '20261007-3' : '20261007-2';
      if (!styleHrefs.some((href) => href === `${regionCss}?v=${regionCssVersion}`)) fail(`Missing current Canada responsive stylesheet on ${locale.code} ${routePath}.`);
      if (!isCanadaHub && !styles.includes('/css/canada-field.css')) fail(`Missing Canada field stylesheet on ${locale.code} ${routePath}.`);
      if (!nodes(document, 'details').length) fail(`Missing visible Canada FAQ controls on ${locale.code} ${routePath}.`);
      const canadaBodyText = text(nodes(document, 'body')[0]);
      if (!canadaBodyText.includes('CC BY') && !canadaBodyText.includes('CC0')) fail(`Missing readable Canada photo license in ${locale.code} ${routePath}.`);
      if (!nodes(document, 'a').some((node) => attr(node, 'href').includes('commons.wikimedia.org'))) fail(`Missing linked Canada photo source on ${locale.code} ${routePath}.`);
      if (isTorontoRoute) {
        const torontoCss = fs.readFileSync(safeDistPath('/css/canada-toronto.css'), 'utf8');
        if (!torontoCss.includes('body[data-page="ca-toronto"]') || !torontoCss.includes('body[data-page^="ca-toronto-"]') || !/min-width:\s*0/.test(torontoCss) || !torontoCss.includes('.ca-field-hero')) fail(`Toronto narrow-width CSS guard is missing on ${locale.code} ${routePath}.`);
        if (!/body\[data-page="ca-toronto"\]\s+\.ca-hub-hero\s+\.ca-kicker,\s*body\[data-page\^="ca-toronto-"\]\s+\.ca-field-hero\s+\.ca-kicker\s*\{\s*color:\s*#f4e4c1;\s*\}/i.test(torontoCss)) fail(`Toronto dark-hero kicker contrast treatment is missing on ${locale.code} ${routePath}.`);
        if (!isCanadaHub && classNodes(document, 'ca-route-step').length !== 4) fail(`Toronto child route must expose four route stages on ${locale.code} ${routePath}.`);
      }
      if (isVancouverRoute) {
        const vancouverCss = fs.readFileSync(safeDistPath('/css/canada-vancouver.css'), 'utf8');
        if (!vancouverCss.includes('body[data-page="ca-vancouver-north-shore"]') || !vancouverCss.includes('body[data-page^="ca-vancouver-north-shore-"]') || !/min-width:\s*0/.test(vancouverCss) || !/overflow-wrap:\s*anywhere/.test(vancouverCss)) fail(`Vancouver responsive min-width guard is missing on ${locale.code} ${routePath}.`);
        if (!/body\[data-page="ca-vancouver-north-shore"\]\s+\.ca-hub-hero\s+\.ca-kicker,\s*body\[data-page\^="ca-vancouver-north-shore-"\]\s+\.ca-field-hero\s+\.ca-kicker\s*\{\s*color:\s*#f4e4c1;\s*\}/i.test(vancouverCss)) fail(`Vancouver dark-hero kicker contrast treatment is missing on ${locale.code} ${routePath}.`);
        if (!isCanadaHub && classNodes(document, 'ca-route-step').length !== 4) fail(`Vancouver child route must expose four route stages on ${locale.code} ${routePath}.`);
      }
      continue;
    }
    if (routePath === '/south-korea/') {
      if (!styles.includes('/css/site.css')) fail(`Missing shared site stylesheet on ${locale.code} South Korea overview.`);
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
const siteCssText = fs.readFileSync(safeDistPath('/css/site.css'), 'utf8');
const koreaCountryWidthRule = cssRuleBlock(siteCssText, 'body[data-country="south-korea"]');
if (!/min-width\s*:\s*0\s*;/i.test(koreaCountryWidthRule)) fail('South Korea pages must shrink below the global 320 px body minimum.');
if (/overflow-x\s*:\s*(?:hidden|clip)/i.test(koreaCountryWidthRule)) fail('South Korea country width correction must not conceal horizontal overflow.');
const zurichScope = 'body[data-country="switzerland"][data-region="zurich-lake"]';
const zurichMobileWidthMedia = fs.readFileSync(safeDistPath('/css/switzerland.css'), 'utf8').lastIndexOf('@media (max-width: 980px)');
const switzerlandCssText = fs.readFileSync(safeDistPath('/css/switzerland.css'), 'utf8');
const zurichBodyWidthRule = cssRuleBlock(switzerlandCssText, `${zurichScope} {`, zurichMobileWidthMedia);
if (zurichMobileWidthMedia < 0 || !/min-width\s*:\s*0\s*;/i.test(zurichBodyWidthRule) || !/max-width\s*:\s*100%\s*;/i.test(zurichBodyWidthRule)) fail('Zurich bodies must shrink below the global 320 px minimum at the responsive breakpoint.');
if (/overflow-x\s*:\s*(?:hidden|clip)/i.test(zurichBodyWidthRule)) fail('Zurich body width correction must not conceal horizontal overflow.');
const zurichShellWidthRule = cssRuleBlock(switzerlandCssText, `${zurichScope} .site-shell,`, zurichMobileWidthMedia);
if (!zurichShellWidthRule.includes(`${zurichScope} .page-content`) || !/min-width\s*:\s*0\s*;/i.test(zurichShellWidthRule) || !/max-width\s*:\s*100%\s*;/i.test(zurichShellWidthRule)) fail('Zurich shell and content must remain shrinkable within the viewport.');
if (/overflow-x\s*:\s*(?:hidden|clip)/i.test(zurichShellWidthRule)) fail('Zurich shell/content correction must not conceal horizontal overflow.');
const zurichFieldCssText = fs.readFileSync(safeDistPath('/css/switzerland-field.css'), 'utf8');
const zurichFieldMobileMedia = zurichFieldCssText.lastIndexOf('@media (max-width:980px)');
const zurichOrientationSelector = `${zurichScope} .ch-field .ch-orientation`;
const zurichOrientationRule = cssRuleBlock(zurichFieldCssText, `${zurichOrientationSelector} {`, zurichFieldMobileMedia);
if (zurichFieldMobileMedia < 0 || !/grid-template-columns\s*:\s*minmax\(0\s*,\s*1fr\)\s*;/i.test(zurichOrientationRule) || !/min-width\s*:\s*0\s*;/i.test(zurichOrientationRule) || !/max-width\s*:\s*100%\s*;/i.test(zurichOrientationRule)) fail('Zurich field orientation must collapse into one shrinkable column at mobile widths.');
const zurichOrientationCardsRule = cssRuleBlock(zurichFieldCssText, `${zurichOrientationSelector} > div,`, zurichFieldMobileMedia);
if (!/min-width\s*:\s*0\s*;/i.test(zurichOrientationCardsRule) || !/max-width\s*:\s*100%\s*;/i.test(zurichOrientationCardsRule)) fail('Zurich orientation cards and aside must fit their mobile column.');
const zurichOrientationTextRule = cssRuleBlock(zurichFieldCssText, `${zurichOrientationSelector} h2,`, zurichFieldMobileMedia);
if (!/min-width\s*:\s*0\s*;/i.test(zurichOrientationTextRule) || !/overflow-wrap\s*:\s*anywhere\s*;/i.test(zurichOrientationTextRule)) fail('Zurich orientation text must wrap inside the mobile column.');
for (const [label, rule] of [['body', zurichBodyWidthRule], ['shell', zurichShellWidthRule], ['orientation', zurichOrientationRule], ['orientation cards', zurichOrientationCardsRule], ['orientation text', zurichOrientationTextRule]]) {
  if (/overflow-x\s*:\s*(?:hidden|clip)/i.test(rule)) fail(`Zurich ${label} rule must not hide horizontal overflow.`);
}
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
const ninhBinhCss = fs.readFileSync(safeDistPath('/css/vietnam-ninh-binh.css'), 'utf8');
const ninhBinhScope = 'body[data-country="vietnam"][data-region="ninh-binh"]';
const ninhBinhBodyWidthRule = cssRuleBlock(ninhBinhCss, ninhBinhScope);
if (!/min-width\s*:\s*0\s*;/i.test(ninhBinhBodyWidthRule) || !/max-width\s*:\s*100%\s*;/i.test(ninhBinhBodyWidthRule)) fail('Ninh Binh body does not shrink below the global 320px minimum.');
if (/overflow-x\s*:\s*(?:hidden|clip)/i.test(ninhBinhBodyWidthRule)) fail('Ninh Binh width correction must not hide horizontal overflow.');
const ninhBinhHubHero = cssRuleBlock(ninhBinhCss, ninhBinhScope + ' .vn-hub-hero');
const ninhBinhHubKicker = cssRuleBlock(ninhBinhCss, ninhBinhScope + ' .vn-hub-hero h1 span');
const hubBase = ninhBinhHubHero.match(/linear-gradient\(125deg,\s*#[0-9a-f]{6},\s*#[0-9a-f]{6}\s+62%,\s*(#[0-9a-f]{6})\)/i)?.[1];
const hubStripeOpacity = Number(ninhBinhHubHero.match(/rgba\(232,\s*240,\s*235,\s*([\d.]+)\)/i)?.[1]);
const hubRadialOpacity = Number(ninhBinhHubHero.match(/rgba\(119,\s*164,\s*147,\s*([\d.]+)\)/i)?.[1]);
const hubText = cssHexProperty(ninhBinhHubKicker, 'color');
if (!hubBase || !Number.isFinite(hubStripeOpacity) || !Number.isFinite(hubRadialOpacity) || !hubText) fail('Unable to derive the Ninh Binh hub hero contrast surfaces from CSS.');
const hubBackground = compositeHex(compositeHex(hubBase, '#e8f0eb', hubStripeOpacity), '#77a493', hubRadialOpacity);
const hubContrast = contrastRatio(hubText, hubBackground);
if (hubContrast < 4.5) fail(`Ninh Binh hub hero kicker contrast is ${hubContrast.toFixed(2)}:1, below WCAG AA 4.5:1.`);
const ninhBinhFieldHero = cssRuleBlock(ninhBinhCss, ninhBinhScope + ' .vn-field-hero');
const ninhBinhFieldKicker = cssRuleBlock(ninhBinhCss, ninhBinhScope + ' .vn-field-copy h1 span');
const fieldBaseStops = [...ninhBinhFieldHero.matchAll(/linear-gradient\(125deg,\s*(#[0-9a-f]{6}),\s*(#[0-9a-f]{6})\)/ig)].flatMap((match) => [match[1], match[2]]);
const ninhBinhFieldPatternOpacity = Number(ninhBinhFieldHero.match(/repeating-radial-gradient\([\s\S]*?rgba\(209,\s*154,\s*87,\s*([\d.]+)\)/i)?.[1]);
const fieldText = cssHexProperty(ninhBinhFieldKicker, 'color');
if (!fieldBaseStops.length || !Number.isFinite(ninhBinhFieldPatternOpacity) || !fieldText) fail('Unable to derive the Ninh Binh field hero contrast surfaces from CSS.');
const fieldBase = fieldBaseStops.reduce((brightest, color) => luminance(color) > luminance(brightest) ? color : brightest);
const fieldBackground = compositeHex(fieldBase, '#d19a57', ninhBinhFieldPatternOpacity);
const fieldContrast = contrastRatio(fieldText, fieldBackground);
if (fieldContrast < 4.5) fail(`Ninh Binh field hero kicker contrast is ${fieldContrast.toFixed(2)}:1, below WCAG AA 4.5:1.`);
console.log(`Ninh Binh estimated dark-hero kicker contrast passed: hub ${hubContrast.toFixed(2)}:1, field ${fieldContrast.toFixed(2)}:1.`);
const hueCssText = fs.readFileSync(safeDistPath('/css/vietnam-hue.css'), 'utf8');
const hueScope = 'body[data-vn-family="violet-rain-archive"]';
const hueBodyWidth = cssRuleBlock(hueCssText, `${hueScope} {`);
if (!/min-width\s*:\s*0\s*;/i.test(hueBodyWidth)) fail('Hue body selector does not release the global 320px minimum on narrow screens.');
const hueContainerWidth = cssRuleBlock(hueCssText, `${hueScope} .site-shell,`);
if (!hueContainerWidth.includes(`${hueScope} .page-content`) || !/min-width\s*:\s*0\s*;/i.test(hueContainerWidth) || !/max-width\s*:\s*100%\s*;/i.test(hueContainerWidth)) fail('Hue shell and content must shrink within the narrow viewport.');
if (/overflow-x\s*:\s*(?:hidden|clip)/i.test(hueContainerWidth)) fail('Hue shell/content rules must not conceal horizontal overflow.');
if (hueCssText.lastIndexOf('@media (max-width:380px)') < 0) fail('Hue min-width release must be scoped to its family marker at the narrow breakpoint.');
const hueVietnamCss = fs.readFileSync(safeDistPath('/css/vietnam.css'), 'utf8');
const hueThemeRule = cssRuleBlock(hueVietnamCss, '[data-vn-family="violet-rain-archive"]');
const rootThemeRule = cssRuleBlock(hueVietnamCss, ':root');
const cssVariable = (block, name) => block.match(new RegExp(`${name}\\s*:\\s*(#[0-9a-f]{6})`, 'i'))?.[1]?.toLowerCase() || '';
const hueDark = cssVariable(hueThemeRule, '--vn-dark');
const huePaper = cssVariable(hueThemeRule, '--vn-paper');
const hueInk = cssVariable(rootThemeRule, '--vn-ink');
const hueAccentText = cssVariable(rootThemeRule, '--vn-accent-text');
if (![hueDark, huePaper, hueInk, hueAccentText].every(Boolean)) fail('Cannot derive Hue foreground/background tokens for the static contrast estimate.');
const hueInkContrast = contrastRatio(hueInk, huePaper);
const hueBodyAccentContrast = contrastRatio(hueAccentText, huePaper);
if (hueInkContrast < 4.5 || hueBodyAccentContrast < 4.5) fail(`Hue dark text contrast is below WCAG AA: ink ${hueInkContrast.toFixed(2)}:1, accent ${hueBodyAccentContrast.toFixed(2)}:1.`);
const hueHeroAccentRule = cssRuleBlock(hueCssText, `${hueScope} .vn-hub-copy h1 span,`);
const hueStageAccentRule = cssRuleBlock(hueCssText, `${hueScope} .vn-route-step:nth-child(even) > span,`);
if (!/color\s*:\s*#f3c979\s*;/i.test(hueHeroAccentRule) || !/color\s*:\s*#f3c979\s*;/i.test(hueStageAccentRule)) fail('Hue dark-hero and dark-stage accent text must use the high-contrast gold token.');
const hueGold = cssHexProperty(hueHeroAccentRule, 'color');
const hueDarkSurfaces = ['#292430', '#46343a', '#294547', hueDark];
const hueGoldContrast = Math.min(...hueDarkSurfaces.map((surface) => contrastRatio(hueGold, surface)));
if (hueGoldContrast < 4.5) fail(`Hue gold text is below WCAG AA against the tested dark surfaces (${hueGoldContrast.toFixed(2)}:1).`);
const hueFieldTextRule = cssRuleBlock(hueCssText, `${hueScope} .vn-field-hero .vn-field-copy,`);
if (!hueFieldTextRule.includes(`${hueScope} .vn-field-hero .vn-field-copy h1`) || !hueFieldTextRule.includes(`${hueScope} .vn-field-hero .vn-breadcrumb a`) || !/color\s*:\s*#fff\s*;/i.test(hueFieldTextRule)) fail('Hue dark field heroes must explicitly set readable white heading and breadcrumb text after instrument-specific styles.');
const hueFieldAccentRule = cssRuleBlock(hueCssText, `${hueScope} .vn-field-hero .vn-breadcrumb strong,`);
if (!hueFieldAccentRule.includes(`${hueScope} .vn-field-hero .vn-kicker`) || !hueFieldAccentRule.includes(`${hueScope} .vn-field-hero .vn-field-copy h1 span`) || !/color\s*:\s*#f3c979\s*;/i.test(hueFieldAccentRule)) fail('Hue dark field hero accents must retain the verified high-contrast gold.');
const hueSecondaryButtonRule = cssRuleBlock(hueCssText, `${hueScope} .vn-field-hero .button.secondary`);
if (!/color\s*:\s*#fff\s*;/i.test(hueSecondaryButtonRule) || !/border-color\s*:\s*rgba\(255\s*,\s*255\s*,\s*255\s*,\s*\.72\s*\)\s*;/i.test(hueSecondaryButtonRule)) fail('Hue secondary hero action must use readable text and a visible border on the dark hero.');
const hueStampRule = cssRuleBlock(hueCssText, `${hueScope} .vn-field-stamp {`);
const hueStampStrongRule = cssRuleBlock(hueCssText, `${hueScope} .vn-field-stamp strong`);
if (!/color\s*:\s*#fff\s*;/i.test(hueStampRule) || !/background\s*:\s*#292430\s*;/i.test(hueStampRule) || !/border-color\s*:\s*#f3c979\s*;/i.test(hueStampRule) || !/color\s*:\s*#f3c979\s*;/i.test(hueStampStrongRule)) fail('Hue field stamp must have explicit high-contrast text, background and border colors.');
const hueFieldWhiteContrast = Math.min(...hueDarkSurfaces.map((surface) => contrastRatio('#ffffff', surface)));
if (hueFieldWhiteContrast < 7) fail(`Hue hero white text is below its 7:1 static contrast target (${hueFieldWhiteContrast.toFixed(2)}:1).`);
console.log(`Hue CSS checks passed: body and containers shrink; dark text ${hueInkContrast.toFixed(2)}:1 / ${hueBodyAccentContrast.toFixed(2)}:1; hero white ${hueFieldWhiteContrast.toFixed(2)}:1 and gold ${hueGoldContrast.toFixed(2)}:1 on tested dark surfaces.`);
const jejuCssText = fs.readFileSync(safeDistPath('/css/jeju.css'), 'utf8');
const jejuBodyWidth = cssRuleBlock(jejuCssText, 'body[data-country="south-korea"][data-city="jeju"]');
if (!/min-width\s*:\s*0\s*;/i.test(jejuBodyWidth) || !/max-width\s*:\s*100%\s*;/i.test(jejuBodyWidth)) fail('Jeju body must shrink below the global 320px minimum without widening the viewport.');
if (/overflow-x\s*:\s*(?:hidden|clip)/i.test(jejuBodyWidth)) fail('Jeju narrow-width protection must not conceal horizontal overflow.');
if (!/\.jeju-route-units,\s*\.geo-course-picker,\s*\.seogwipo-history-grid,\s*\.gapado-clock-readings\s*\{\s*grid-template-columns:\s*1fr\s*;/i.test(jejuCssText)) fail('Jeju field-guide cards must collapse to one column at the mobile breakpoint.');
if (!/\.jeju-route-units article,\s*\.geo-course-picker article\s*\{[^}]*min-width:\s*0\s*;/i.test(jejuCssText)) fail('Jeju course cards must be allowed to shrink without clipping content.');
const jejuKickerRule = cssRuleBlock(jejuCssText, '.jeju-atlas-card.has-photo > span');
const jejuKicker = cssHexProperty(jejuKickerRule, 'color');
const jejuKickerPlate = rgbaColor(jejuKickerRule, '8,26,28');
const jejuKickerOpacity = Number(jejuKickerRule.match(/opacity\s*:\s*([\d.]+)/i)?.[1]);
if (!jejuKicker || !jejuKickerPlate || !Number.isFinite(jejuKickerOpacity) || jejuKickerOpacity !== 1) fail('Jeju photo-card labels need an opaque readable foreground and dark label plate.');
const jejuKickerSurface = compositeHex('#ffffff', jejuKickerPlate.hex, jejuKickerPlate.alpha);
const jejuKickerContrast = contrastRatio(jejuKicker, jejuKickerSurface);
if (jejuKickerContrast < 4.5) fail('Jeju photo-card top labels fall below estimated WCAG AA contrast on a white-image worst case.');
const jejuPhotoCards = ['gateway', 'west', 'summit', 'falls', 'geology', 'ferry', 'sunrise', 'lava'];
const jejuHeroRatios = [];
for (const card of jejuPhotoCards) {
  const overlayRule = cssRuleBlock(jejuCssText, `.jeju-atlas-card.${card}.has-photo::before`);
  const darkStop = [...overlayRule.matchAll(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/gi)].at(-1);
  if (!darkStop || Number(darkStop[4]) < .92) fail(`Jeju ${card} photo card needs a dark lower text surface.`);
  const darkColor = `#${[darkStop[1], darkStop[2], darkStop[3]].map((channel) => Number(channel).toString(16).padStart(2, '0')).join('')}`;
  const worstBackground = compositeHex('#ffffff', darkColor, Number(darkStop[4]));
  const ratios = [contrastRatio('#ffffff', worstBackground), contrastRatio('#ffd19a', worstBackground)];
  if (ratios.some((ratio) => ratio < 4.5)) fail(`Jeju ${card} photo-card lower text is below estimated WCAG AA contrast on a white-image worst case.`);
  jejuHeroRatios.push(...ratios);
}
console.log(`Jeju static narrow-width checks passed; photo-card kicker and lower text minimum estimated contrast ${Math.min(jejuKickerContrast, ...jejuHeroRatios).toFixed(2)}:1 (CSS estimate, not rendered measurement).`);
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

const vancouverCssText = fs.readFileSync(safeDistPath('/css/canada-vancouver.css'), 'utf8');
const vancouverHubKicker = cssRuleBlock(vancouverCssText, 'body[data-page="ca-vancouver-north-shore"] .ca-hub-hero .ca-kicker,');
const vancouverFieldKicker = cssRuleBlock(vancouverCssText, 'body[data-page^="ca-vancouver-north-shore-"] .ca-field-hero .ca-kicker');
if (!/color\s*:\s*#f4e4c1\s*;/i.test(vancouverHubKicker) || !/color\s*:\s*#f4e4c1\s*;/i.test(vancouverFieldKicker)) fail('Vancouver dark-hero kickers must use the scoped Montreal warm-neutral foreground.');
const vancouverHubRule = cssRuleBlock(vancouverCssText, 'body[data-page="ca-vancouver-north-shore"] .ca-hub-hero {');
const vancouverHubOverlay = cssRuleBlock(vancouverCssText, 'body[data-page="ca-vancouver-north-shore"] .ca-hub-hero::before');
const vancouverHubBase = cssHexProperty(vancouverHubRule, 'background');
const hubGroupOpacity = Number(vancouverHubOverlay.match(/opacity\s*:\s*([\d.]+)/i)?.[1]);
const hubTeal = rgbaColor(vancouverHubOverlay, '82,162,160');
const hubWhite = rgbaColor(vancouverHubOverlay, '255,255,255');
if (!vancouverHubBase || !Number.isFinite(hubGroupOpacity)) fail('Vancouver hub hero base/overlay colors are required for contrast validation.');
let hubPatternColor = compositeHex(vancouverHubBase, hubTeal.hex, hubTeal.alpha);
hubPatternColor = compositeHex(hubPatternColor, hubWhite.hex, hubWhite.alpha);
const vancouverHubWorstBackground = compositeHex(vancouverHubBase, hubPatternColor, hubGroupOpacity);
const genericFieldPattern = cssRuleBlock(fs.readFileSync(safeDistPath('/css/canada-field.css'), 'utf8'), '.ca-field-hero::before');
const fieldPatternOpacity = Number(genericFieldPattern.match(/opacity\s*:\s*([\d.]+)/i)?.[1]);
const vancouverFieldHeroRule = cssRuleBlock(vancouverCssText, 'body[data-page^="ca-vancouver-north-shore-"] .ca-field-hero {');
const tintPercent = Number(vancouverFieldHeroRule.match(/color-mix\(in\s+srgb,\s*var\(--ca-family\)\s+([\d.]+)%/i)?.[1]);
if (!Number.isFinite(fieldPatternOpacity) || !Number.isFinite(tintPercent)) fail('Vancouver field hero overlay colors are required for contrast validation.');
const vancouverHeroSurfaces = [['hub', vancouverHubWorstBackground]];
for (const [label, page] of [
  ['downtown', 'ca-vancouver-north-shore-downtown-stanley-granville'],
  ['North Shore', 'ca-vancouver-north-shore-north-shore-grouse-capilano'],
  ['Sea-to-Sky', 'ca-vancouver-north-shore-sea-to-sky-whistler']
]) {
  const fieldTokens = cssRuleBlock(vancouverCssText, `body[data-page="${page}"] .ca-field {`);
  const dark = cssHexProperty(fieldTokens, '--ca-family-dark');
  const family = cssHexProperty(fieldTokens, '--ca-family');
  if (!dark || !family) fail(`Vancouver ${label} hero palette is missing its actual family colors.`);
  let background = compositeHex(dark, family, tintPercent / 100);
  background = compositeHex(background, family, fieldPatternOpacity);
  vancouverHeroSurfaces.push([label, background]);
}
const vancouverContrast = vancouverHeroSurfaces.map(([label, background]) => [label, background, contrastRatio('#f4e4c1', background)]);
for (const [label, background, ratio] of vancouverContrast) if (ratio < 4.5) fail(`Vancouver ${label} kicker contrast on ${background} is ${ratio.toFixed(2)}:1, below WCAG AA 4.5:1.`);
console.log(`Vancouver dark-hero kicker contrast passed: ${vancouverContrast.map(([label, background, ratio]) => `${label} ${ratio.toFixed(2)}:1 on ${background}`).join(', ')}.`);

if (!isLive) {
  const parisPages = manifest.pages.filter((record) => record.path.startsWith('/france/paris/')).length;
  const dayTripPages = manifest.pages.filter((record) => record.path.startsWith('/france/paris-region-day-trips/')).length;
  const normandyPages = manifest.pages.filter((record) => record.path.startsWith('/france/normandy/')).length;
  const loirePages = manifest.pages.filter((record) => record.path.startsWith('/france/loire-valley/')).length;
  const champagnePages = manifest.pages.filter((record) => record.path.startsWith('/france/champagne/')).length;
  const canadaPages = manifest.pages.filter((record) => record.path.startsWith('/canada/montreal/') || record.path.startsWith('/canada/quebec-city-charlevoix/') || record.path.startsWith('/canada/toronto/') || record.path.startsWith('/canada/vancouver-north-shore/') || record.path.startsWith('/canada/victoria-south-island/')).length;
  const zurichPages = manifest.pages.filter((record) => record.path.startsWith('/switzerland/zurich-lake/')).length;
  const koreaCountryPages = manifest.pages.filter((record) => record.path === '/south-korea/').length;
  const seoulPages = manifest.pages.filter((record) => record.path.startsWith('/south-korea/seoul/')).length;
  const busanPages = manifest.pages.filter((record) => record.path.startsWith('/south-korea/busan/')).length;
  const gyeongjuPages = manifest.pages.filter((record) => record.path.startsWith('/south-korea/gyeongju/')).length;
  const hanoiPages = manifest.pages.filter((record) => record.path.startsWith('/vietnam/hanoi/')).length;
  const sapaPages = manifest.pages.filter((record) => record.path.startsWith('/vietnam/sapa-northwest-highlands/')).length;
  const haGiangPages = manifest.pages.filter((record) => record.path.startsWith('/vietnam/ha-giang/')).length;
  const ninhBinhPages = manifest.pages.filter((record) => record.path.startsWith('/vietnam/ninh-binh/')).length;
    const huePages = manifest.pages.filter((record) => record.path.startsWith('/vietnam/hue/')).length;
  const penangPages = manifest.pages.filter((record) => record.path.startsWith('/malaysia/george-town-penang/')).length;
  const jejuPages = manifest.pages.filter((record) => record.path.startsWith('/south-korea/jeju/')).length;
  const meoVacPath = safeDistPath('/vietnam/ha-giang/meo-vac-du-gia/');
  const meoVacHtml = fs.readFileSync(path.join(meoVacPath, 'index.html'), 'utf8');
  const meoVacDocument = parse(meoVacHtml);
  const meoVacBody = text(nodes(meoVacDocument, 'body')[0]);
  if (!meoVacBody.includes('reviewed 31 August 2026') || !meoVacHtml.includes('"dateModified":"2026-08-31"')) fail('Meo Vac credit-only dependency must retain its 31 August 2026 editorial date.');
  for (const source of ['vietnam-ha-giang-yen-minh-pines-20261007.webp', 'vietnam-ha-giang-dong-van-market-20261007.webp', 'vietnam-ha-giang-lung-cu-context-20261007.webp']) {
    if (!meoVacHtml.includes(source)) fail(`Meo Vac credit dependency is missing linked Ha Giang image ${source}.`);
  }
    console.log(`Responsive QA harness passed locally: ${manifest.pages.length}/${expectedRoutes.length * expectedLocales.length} route-language HTML hashes (${parisPages} Paris, ${dayTripPages} day-trip, ${normandyPages} Normandy, ${loirePages} Loire, ${champagnePages} Champagne, ${canadaPages} Canada, ${zurichPages} Zurich, ${koreaCountryPages} South Korea country overview, ${seoulPages} Seoul, ${busanPages} Busan, ${gyeongjuPages} Gyeongju, ${jejuPages} Jeju, ${hanoiPages} Hanoi, ${sapaPages} Sapa, ${haGiangPages} Ha Giang, ${ninhBinhPages} Ninh Binh, ${huePages} Hue, ${penangPages} Penang records), language/canonical/hreflang, H1/landmarks, internal links, visible image credits, ${images.length} image assets, max route CSS ${maxPageStyle.bytes}/${manifest.maxPageStylesBytes} bytes, ${totalUniqueStyleAssetBytes} unique CSS bytes, 4,560 sitemap URLs, noindex harness.`);
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
  console.log(`Responsive QA preview passed: harness HTTP 200, ${manifest.pages.length}/${expectedRoutes.length * expectedLocales.length} route-language pages and ${manifest.assets.length} local assets matched exact SHA-256, noindex, sitemap 4,560 URLs; ${checked} checks at ${liveOrigin}.`);
}
