import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { parse } from 'parse5';

const root = path.resolve(import.meta.dirname, '..');
const distRoot = path.join(root, 'dist');
const outputDir = path.join(distRoot, 'qa', 'paris-responsive');
const outputPath = path.join(outputDir, 'index.html');
const git = (...args) => execFileSync('git', ['-c', `safe.directory=${root.replaceAll('\\', '/')}`, ...args], { cwd: root, encoding: 'utf8' }).trim();
const branch = git('branch', '--show-current');
const sourceCommit = git('rev-parse', 'HEAD');
const sourceTreeClean = git('status', '--porcelain').length === 0;

if (!fs.existsSync(path.join(distRoot, 'sitemap.xml'))) {
  throw new Error('Build dist first with `npm run build`; no dist/sitemap.xml found.');
}
if (branch !== 'paris-qa') throw new Error(`Refusing to create Paris QA harness from branch ${branch}; expected paris-qa.`);

const sitemap = fs.readFileSync(path.join(distRoot, 'sitemap.xml'), 'utf8');
if (sitemap.includes('/qa/paris-responsive/')) throw new Error('Paris QA harness must not be included in the sitemap.');

const locales = [
  { code: 'en', label: 'English', prefix: '' },
  { code: 'zh-Hant', label: '繁體中文', prefix: '/zh' },
  { code: 'ja', label: '日本語', prefix: '/ja' },
  { code: 'ko', label: '한국어', prefix: '/ko' },
  { code: 'th', label: 'ไทย', prefix: '/th' }
];
const routes = [
  { path: '/france/paris/', label: 'Paris hub' },
  { path: '/france/paris/seine-islands-latin-quarter/', label: 'Seine Islands & Latin Quarter' },
  { path: '/france/paris/louvre-tuileries-opera/', label: 'Louvre, Tuileries & Opera' },
  { path: '/france/paris/eiffel-invalides-montparnasse/', label: 'Eiffel Tower & Invalides' },
  { path: '/france/paris-region-day-trips/', label: 'Versailles- Fontainebleau- Giverny hub' },
  { path: '/france/paris-region-day-trips/versailles-palace-estate/', label: 'Versailles Palace & Estate' },
  { path: '/france/paris-region-day-trips/fontainebleau-palace-forest/', label: 'Fontainebleau Palace & Forest' },
  { path: '/france/paris-region-day-trips/giverny-monet-vernon/', label: 'Giverny, Monet & Vernon' },
  { path: '/france/normandy/', label: 'Normandy hub' },
  { path: '/france/normandy/rouen-seine-cathedral/', label: 'Rouen Cathedral, Old Streets & the Seine' },
  { path: '/france/normandy/bayeux-dday-landscape/', label: 'Bayeux & the D-Day Landscape' },
  { path: '/france/normandy/mont-saint-michel-bay/', label: 'Mont-Saint-Michel & the Bay Approach' },
  { path: '/france/loire-valley/', label: 'Loire Valley hub' },
  { path: '/france/loire-valley/blois-chambord/', label: 'Blois & Chambord' },
  { path: '/france/loire-valley/amboise-chenonceau/', label: 'Amboise, Clos Lucé & Chenonceau' },
  { path: '/france/loire-valley/tours-villandry-azay/', label: 'Tours, Villandry & Azay-le-Rideau' },
  { path: '/france/champagne/', label: 'Reims, Épernay & Champagne Country' },
  { path: '/france/champagne/reims-cathedral-cellars/', label: 'Reims Cathedral & Cellar Districts' },
  { path: '/france/champagne/epernay-avenue-vineyards/', label: 'Épernay, Avenue de Champagne & Vineyard Villages' },
  { path: '/france/champagne/troyes-southern-champagne/', label: 'Troyes & Southern Champagne' },
  { path: '/canada/montreal/', label: 'Montreal' },
  { path: '/canada/montreal/old-montreal-old-port/', label: 'Old Montreal & Old Port' },
  { path: '/canada/montreal/plateau-mile-end/', label: 'Plateau & Mile End' },
  { path: '/canada/montreal/mount-royal-museums/', label: 'Mount Royal & Museum Mile' },
  { path: '/canada/toronto/', label: 'Toronto hub' },
  { path: '/canada/toronto/downtown-waterfront/', label: 'Downtown & Waterfront' },
  { path: '/canada/toronto/annex-kensington-museums/', label: 'Toronto Museums, the Annex & Kensington' },
  { path: '/canada/toronto/toronto-islands/', label: 'Toronto Islands' },
  { path: '/canada/quebec-city-charlevoix/', label: 'Quebec City & Charlevoix' },
  { path: '/canada/quebec-city-charlevoix/old-quebec/', label: 'Old Québec & the Fortified City' },
  { path: '/canada/quebec-city-charlevoix/montmorency-orleans/', label: 'Montmorency Falls & Île d’Orléans' },
  { path: '/canada/quebec-city-charlevoix/charlevoix-baie-saint-paul/', label: 'Charlevoix & Baie-Saint-Paul' },
  { path: '/canada/vancouver-north-shore/', label: 'Vancouver & the North Shore hub' },
  { path: '/canada/vancouver-north-shore/downtown-stanley-granville/', label: 'Vancouver Downtown, Stanley Park & Granville Island' },
  { path: '/canada/vancouver-north-shore/north-shore-grouse-capilano/', label: 'Grouse, Capilano & Lynn Canyon' },
  { path: '/canada/vancouver-north-shore/sea-to-sky-whistler/', label: 'Sea-to-Sky & Whistler' },
  { path: '/canada/victoria-south-island/', label: 'Victoria & South Vancouver Island hub' },
  { path: '/canada/victoria-south-island/inner-harbour-james-bay/', label: 'Inner Harbour, James Bay & Beacon Hill' },
  { path: '/canada/victoria-south-island/butchart-saanich/', label: 'Butchart Gardens & Saanich Peninsula' },
  { path: '/canada/victoria-south-island/sooke-juan-de-fuca/', label: 'Sooke & Juan de Fuca Coast' },
  { path: '/switzerland/zurich-lake/', label: 'Zurich & Lake Zurich' },
  { path: '/switzerland/zurich-lake/lake-uetliberg/', label: 'Lake Zurich & Uetliberg' },
  { path: '/switzerland/zurich-lake/old-town-lindenhof/', label: 'Old Town, Lindenhof & the Limmat' },
  { path: '/switzerland/zurich-lake/zurich-west-museums/', label: 'Zurich West & Museum Quarter' },
  { path: '/south-korea/', label: 'South Korea country guide' },
  { path: '/south-korea/seoul/', label: 'Seoul hub' },
  { path: '/south-korea/seoul/bukchon-seochon/', label: 'Bukchon & Seochon' },
  { path: '/south-korea/seoul/jongno-gwanghwamun/', label: 'Jongno & Gwanghwamun' },
  { path: '/south-korea/seoul/myeongdong-namsan/', label: 'Myeongdong & Namsan' },
  { path: '/south-korea/seoul/hongdae-yeonnam/', label: 'Hongdae & Yeonnam' },
  { path: '/south-korea/seoul/seongsu-seoul-forest/', label: 'Seongsu & Seoul Forest' },
  { path: '/south-korea/seoul/gangnam-jamsil/', label: 'Gangnam & Jamsil' },
  { path: '/south-korea/seoul/itaewon-hannam/', label: 'Itaewon & Hannam' },
  { path: '/south-korea/seoul/yeouido-hangang/', label: 'Yeouido & Hangang' },
  { path: '/south-korea/busan/', label: 'Busan hub' },
  { path: '/south-korea/busan/nampo-jagalchi/', label: 'Nampo & Jagalchi' },
  { path: '/south-korea/busan/gamcheon-songdo/', label: 'Gamcheon & Songdo' },
  { path: '/south-korea/busan/haeundae-dongbaek/', label: 'Haeundae & Dongbaek' },
  { path: '/south-korea/busan/gwangalli-millak/', label: 'Gwangalli & Millak' },
  { path: '/south-korea/busan/yeongdo-taejongdae/', label: 'Yeongdo & Taejongdae' },
  { path: '/south-korea/busan/dadaepo-amisan/', label: 'Dadaepo & Amisan' },
  { path: '/south-korea/busan/haedong-yonggungsa-gijang/', label: 'Haedong Yonggungsa & Gijang' },
  { path: '/south-korea/busan/seomyeon-jeonpo/', label: 'Seomyeon & Jeonpo' },
  { path: '/south-korea/gyeongju/', label: 'Gyeongju hub' },
  { path: '/south-korea/gyeongju/daereungwon-hwangnidan-gil/', label: 'Daereungwon & Hwangnidan-gil' },
  { path: '/south-korea/gyeongju/wolseong-donggung-wolji/', label: 'Wolseong & Donggung/Wolji' },
  { path: '/south-korea/gyeongju/bulguksa-seokguram/', label: 'Bulguksa & Seokguram' },
  { path: '/south-korea/gyeongju/namsan/', label: 'Namsan mountain trails' },
  { path: '/south-korea/gyeongju/yangdong-village/', label: 'Yangdong Village' },
  { path: '/south-korea/gyeongju/bomun-lake/', label: 'Bomun Lake' },
  { path: '/vietnam/hanoi/', label: 'Hanoi hub' },
  { path: '/vietnam/hanoi/hoan-kiem-old-quarter/', label: 'Hoan Kiem & Old Quarter' },
  { path: '/vietnam/hanoi/ba-dinh-thang-long/', label: 'Ba Dinh & Thang Long' },
  { path: '/vietnam/hanoi/french-quarter-opera-house/', label: 'French Quarter & Opera House' },
  { path: '/vietnam/hanoi/long-bien-red-river/', label: 'Long Bien & Red River' },
  { path: '/vietnam/hanoi/van-mieu-museum-quarter/', label: 'Van Mieu & Museum Quarter' },
  { path: '/vietnam/sapa-northwest-highlands/', label: 'Sapa and the Northwest Highlands hub' },
  { path: '/vietnam/sapa-northwest-highlands/town-ham-rong/', label: 'Sapa Town and Ham Rong' },
  { path: '/vietnam/sapa-northwest-highlands/fansipan-summit/', label: 'Fansipan Summit' },
  { path: '/vietnam/sapa-northwest-highlands/muong-hoa-lao-chai-ta-van/', label: 'Muong Hoa, Lao Chai and Ta Van' },
  { path: '/vietnam/sapa-northwest-highlands/cat-cat-village/', label: 'Cat Cat Village and Waterfall' },
  { path: '/vietnam/sapa-northwest-highlands/o-quy-ho-waterfalls/', label: 'O Quy Ho, Silver Waterfall and Love Waterfall' },
  { path: '/vietnam/sapa-northwest-highlands/bac-ha-market-hoang-a-tuong/', label: 'Bac Ha Market and Hoang A Tuong' },
  { path: '/vietnam/ha-giang/', label: 'Hà Giang hub' },
  { path: '/vietnam/ha-giang/quan-ba-heavens-gate/', label: 'Quản Bạ & Heaven’s Gate' },
  { path: '/vietnam/ha-giang/yen-minh-pine-forest/', label: 'Yên Minh & Pine Forest' },
  { path: '/vietnam/ha-giang/dong-van-old-quarter/', label: 'Đồng Văn Old Quarter' },
  { path: '/vietnam/ha-giang/lung-cu-flag-tower/', label: 'Lũng Cú Flag Tower' },
  { path: '/vietnam/ha-giang/ma-pi-leng-nho-que/', label: 'Mã Pí Lèng & Nho Quế' },
  { path: '/vietnam/ninh-binh/', label: 'Ninh Binh hub' },
  { path: '/vietnam/ninh-binh/trang-an-boat-complex/', label: 'Trang An Boat Complex' },
  { path: '/vietnam/ninh-binh/hoa-lu-ancient-capital/', label: 'Hoa Lu Ancient Capital' },
  { path: '/vietnam/ninh-binh/tam-coc-bich-dong/', label: 'Tam Coc & Bich Dong' },
  { path: '/vietnam/ninh-binh/hang-mua-dragon-mountain/', label: 'Hang Mua & Dragon Mountain' },
  { path: '/vietnam/ninh-binh/van-long-wetland/', label: 'Van Long Wetland' },
  { path: '/vietnam/ninh-binh/cuc-phuong-conservation/', label: 'Cuc Phuong Forest & Conservation' },
  { path: '/vietnam/hue/', label: 'Hue hub' },
  { path: '/vietnam/hue/imperial-city-citadel/', label: 'Imperial City & Citadel' },
  { path: '/vietnam/hue/royal-tombs/', label: 'Royal Tombs of Minh Mang, Tu Duc & Khai Dinh' },
  { path: '/vietnam/hue/thien-mu-perfume-river/', label: 'Thien Mu & Perfume River' },
  { path: '/vietnam/hue/thanh-toan-rural-loop/', label: 'Thanh Toan Rural & Canal Loop' },
  { path: '/vietnam/hue/bach-ma-national-park/', label: 'Bach Ma National Park' },
  { path: '/vietnam/hue/lang-co-lap-an-lagoon/', label: 'Lang Co & Lap An Lagoon' },
  { path: '/vietnam/da-nang-hoi-an/', label: 'Da Nang & Hoi An hub' },
  { path: '/vietnam/da-nang-hoi-an/han-river-city-core/', label: 'Han River & Da Nang City Core' },
  { path: '/vietnam/da-nang-hoi-an/son-tra-peninsula/', label: 'Son Tra Peninsula Wildlife & Linh Ung' },
  { path: '/vietnam/da-nang-hoi-an/marble-mountains-non-nuoc/', label: 'Marble Mountains & Non Nuoc' },
  { path: '/vietnam/da-nang-hoi-an/my-khe-an-thuong/', label: 'My Khe Beach & An Thuong' },
  { path: '/vietnam/da-nang-hoi-an/hoi-an-ancient-town/', label: 'Hoi An Ancient Town' },
  { path: '/vietnam/da-nang-hoi-an/my-son-sanctuary/', label: 'My Son Sanctuary' },
  { path: '/south-korea/jeju/', label: 'Jeju Island hub' },
  { path: '/south-korea/jeju/hallasan/', label: 'Hallasan summit and lower trails' },
  { path: '/south-korea/jeju/jeju-city-yongduam/', label: 'Jeju City & Yongduam' },
  { path: '/south-korea/jeju/seongsan-udo/', label: 'Seongsan & Udo' },
  { path: '/south-korea/jeju/woljeongri-gimnyeong/', label: 'Woljeongri & Gimnyeong' },
  { path: '/south-korea/jeju/seogwipo-jeongbang/', label: 'Seogwipo & Jeongbang' },
  { path: '/south-korea/jeju/jungmun-andeok/', label: 'Jungmun & Andeok' },
  { path: '/south-korea/jeju/moseulpo-gapado/', label: 'Moseulpo & Gapado' },
  { path: '/south-korea/jeju/aewol-hyeopjae/', label: 'Aewol & Hyeopjae' },
  { path: '/malaysia/george-town-penang/', label: 'George Town & Penang hub' },
  { path: '/malaysia/george-town-penang/armenian-street-core-zone/', label: 'Armenian Street & Core Zone' },
  { path: '/malaysia/george-town-penang/weld-quay-clan-jetties/', label: 'Weld Quay & Clan Jetties' },
  { path: '/malaysia/george-town-penang/penang-hill-air-itam/', label: 'Penang Hill & Air Itam' },
  { path: '/thailand/bangkok/', label: 'Bangkok hub' },
  { path: '/thailand/bangkok/rattanakosin-grand-palace/', label: 'Rattanakosin & Grand Palace' },
  { path: '/thailand/bangkok/banglamphu-phra-athit/', label: 'Banglamphu & Phra Athit' },
  { path: '/thailand/bangkok/yaowarat-talat-noi/', label: 'Yaowarat & Talat Noi' },
  { path: '/thailand/bangkok/chatuchak-ari/', label: 'Chatuchak & Ari' },
  { path: '/thailand/bangkok/silom-sathorn/', label: 'Silom & Sathorn' },
  { path: '/thailand/bangkok/sukhumvit-thong-lo/', label: 'Sukhumvit & Thong Lo' },
  { path: '/thailand/bangkok/siam-ratchaprasong/', label: 'Siam & Ratchaprasong' },
  { path: '/thailand/bangkok/thonburi-khlong-bang-luang/', label: 'Thonburi & Khlong Bang Luang' },
  { path: '/thailand/chiang-mai/', label: 'Chiang Mai hub' },
  { path: '/thailand/chiang-mai/old-city-moat/', label: 'Old City & Moat' },
  { path: '/thailand/chiang-mai/wat-ket-ping-river/', label: 'Wat Ket & Ping River' },
  { path: '/thailand/chiang-mai/doi-suthep-wat-pha-lat/', label: 'Doi Suthep & Wat Pha Lat' },
  { path: '/thailand/chiang-mai/doi-inthanon/', label: 'Doi Inthanon: Summit & Trails' },
  { path: '/thailand/chiang-mai/mae-kampong/', label: 'Mae Kampong: Miang Tea & Village Walk' },
  { path: '/thailand/chiang-mai/nimman-university/', label: 'Nimman, One Nimman & CMU' },
  { path: '/thailand/chiang-mai/chang-moi-warorot/', label: 'Chang Moi & Warorot' },
  { path: '/thailand/chiang-mai/mae-rim-mae-sa/', label: 'Mae Rim & Mae Sa' },
  { path: '/thailand/andaman/', label: 'Thailand Andaman hub' },
  { path: '/thailand/andaman/phuket-old-town-south/', label: 'Phuket Old Town & South' },
  { path: '/thailand/andaman/phang-nga-ko-yao/', label: 'Phang Nga Bay & Ko Yao' },
  { path: '/thailand/andaman/krabi-railay/', label: 'Krabi & Railay' },
];
const viewportWidths = [320, 390];
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');

function walk(node, visit) {
  visit(node);
  for (const child of node.childNodes || []) walk(child, visit);
}

function attr(node, name) {
  return node.attrs?.find((item) => item.name === name)?.value || '';
}

function localAssetPath(urlPath) {
  const pathname = new URL(urlPath, 'https://tripdistill.com').pathname;
  if (!pathname.startsWith('/') || pathname.includes('..')) throw new Error(`Unsafe asset path: ${urlPath}`);
  const filePath = path.resolve(distRoot, `.${pathname}`);
  if (!filePath.startsWith(distRoot + path.sep)) throw new Error(`Asset escaped dist: ${urlPath}`);
  return filePath;
}

const routeRecords = [];
const assetPaths = new Set();
for (const locale of locales) {
  for (const route of routes) {
    const localePath = `${locale.prefix}${route.path}`;
    const pagePath = path.join(distRoot, localePath.replace(/^\//, ''), 'index.html');
    if (!fs.existsSync(pagePath)) throw new Error(`Missing built route ${locale.code}: ${localePath}`);
    const bytes = fs.readFileSync(pagePath);
    const html = bytes.toString('utf8');
    const document = parse(html);
    const assets = [];
    walk(document, (node) => {
      if (node.tagName === 'link' && attr(node, 'rel').toLowerCase().split(/\s+/).includes('stylesheet')) {
        assets.push(attr(node, 'href'));
      }
      if ((node.tagName === 'img' || node.tagName === 'source') && attr(node, 'src')) assets.push(attr(node, 'src'));
      if ((node.tagName === 'img' || node.tagName === 'source') && attr(node, 'srcset')) {
        for (const candidate of attr(node, 'srcset').split(',')) assets.push(candidate.trim().split(/\s+/)[0]);
      }
    });
    for (const asset of assets) if (asset.startsWith('/')) assetPaths.add(new URL(asset, 'https://tripdistill.com').pathname);
    routeRecords.push({
      locale: locale.code,
      path: route.path,
      label: route.label,
      urlPath: localePath,
      bytes: bytes.byteLength,
      sha256: sha256(bytes)
    });
  }
}

const assets = [...assetPaths].sort().map((urlPath) => {
  const assetPath = localAssetPath(urlPath);
  if (!fs.existsSync(assetPath)) throw new Error(`Missing local route asset ${urlPath}`);
  const bytes = fs.readFileSync(assetPath);
  return { path: urlPath, bytes: bytes.byteLength, sha256: sha256(bytes) };
});
const manifest = {
  project: 'trip',
  branch,
  sourceCommit,
  sourceTreeClean,
  viewportWidths,
  routes,
  locales: locales.map(({ code, label, prefix }) => ({ code, label, prefix })),
  routeCount: routeRecords.length,
  routesByLocale: Object.fromEntries(locales.map((locale) => [locale.code, routes.length])),
  maxHtmlBytes: 160_000,
  maxSingleImageBytes: 700_000,
  maxPageStylesBytes: 320_000,
  routeStyleBudgets: Object.fromEntries([
    '/thailand/chiang-mai/',
    '/thailand/chiang-mai/old-city-moat/',
    '/thailand/chiang-mai/wat-ket-ping-river/',
    '/thailand/chiang-mai/doi-suthep-wat-pha-lat/',
    '/thailand/chiang-mai/doi-inthanon/',
    '/thailand/chiang-mai/mae-kampong/',
    '/thailand/chiang-mai/nimman-university/',
    '/thailand/chiang-mai/chang-moi-warorot/',
    '/thailand/chiang-mai/mae-rim-mae-sa/',
    '/thailand/andaman/',
    '/thailand/andaman/phuket-old-town-south/',
    '/thailand/andaman/phang-nga-ko-yao/',
    '/thailand/andaman/krabi-railay/'
  ].map((routePath) => [routePath, 350_000])),
  imageBudgets: Object.fromEntries([
    '/assets/images/thailand-chiang-mai-doi-inthanon.webp',
    '/assets/images/thailand-chiang-mai-mae-kampong.webp',
    '/assets/images/thailand-chiang-mai-one-nimman-street-20261008.webp',
    '/assets/images/thailand-chiang-mai-old-city.webp',
    '/assets/images/thailand-chiang-mai-warorot.webp',
    '/assets/images/thailand-chiang-mai-mae-rim.webp'
  ].map((assetPath) => [assetPath, 900_000])),
  pages: routeRecords,
  assets
};

const page = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow,noarchive">
  <meta name="referrer" content="same-origin">
  <title>France, Canada, Zurich, South Korea, Vietnam, Penang, Bangkok and Chiang Mai responsive QA harness</title>
  <style>
    :root { color-scheme: light; font-family: system-ui, sans-serif; background: #f2f0eb; color: #1e2931; }
    * { box-sizing: border-box; }
    body { margin: 0; min-width: 280px; }
    main { max-width: 1280px; margin: 0 auto; padding: clamp(16px, 3vw, 34px); }
    h1 { margin: 0 0 8px; font-size: clamp(1.5rem, 3vw, 2rem); }
    .intro { max-width: 76ch; margin: 0 0 20px; color: #4a5963; line-height: 1.55; }
    .controls { display: grid; grid-template-columns: minmax(220px, 1fr) minmax(180px, .7fr) auto; gap: 12px; align-items: end; }
    label { display: grid; gap: 6px; font-weight: 650; }
    select { min-height: 44px; min-width: 0; border: 1px solid #71808a; border-radius: 6px; background: white; color: inherit; font: inherit; padding: 8px 10px; }
    :focus-visible { outline: 3px solid #a14323; outline-offset: 3px; }
    .status { min-height: 1.5em; margin: 14px 0 6px; color: #3d4d56; }
    .status[data-state="loading"] { color: #654a12; }
    .status[data-state="error"] { color: #8d241b; font-weight: 700; }
    .preview-rail { overflow-x: auto; padding: 6px 2px 18px; }
    .frames { display: flex; width: max-content; gap: 18px; margin: 0 auto; align-items: start; }
    figure { margin: 0; }
    figcaption { margin: 0 0 8px; font-weight: 700; }
    iframe { display: block; height: min(78vh, 940px); min-height: 660px; border: 0; background: #fff; box-shadow: 0 7px 24px #1e293128; }
    .frame-diagnostics { max-width: 390px; min-height: 5.5em; margin: 8px 0 0; padding: 8px; border: 1px solid #c4cbc9; border-radius: 4px; background: #fff; color: #24353c; font: 11px/1.45 ui-monospace, monospace; white-space: pre-wrap; overflow-wrap: anywhere; }
    .frame-diagnostics[data-state="error"] { border-color: #b43a2e; color: #7d2119; background: #fff4f1; }
    .meta { margin-top: 16px; color: #59666e; font: 12px/1.45 ui-monospace, monospace; overflow-wrap: anywhere; }
    @media (max-width: 700px) { main { padding: 14px 10px; } .controls { grid-template-columns: 1fr; } .frames { margin-left: 0; } }
  </style>
</head>
<body>
  <main>
    <a href="#main-content">Skip to controls</a>
    <section id="main-content" aria-labelledby="page-title">
      <h1 id="page-title">France, Canada, Zurich, South Korea, Vietnam, Penang, Bangkok and Chiang Mai responsive QA harness</h1>
      <p class="intro">Review 16 Paris, day-trip, Normandy and Loire guides, four Champagne routes, 20 Canada routes across Montreal, Toronto, Quebec City–Charlevoix, Vancouver &amp; the North Shore, and Victoria &amp; South Vancouver Island, four Zurich &amp; Lake Zurich routes, the South Korea country overview, nine Seoul routes, six Busan routes, seven Gyeongju routes, four Jeju routes, six Hanoi routes, seven Sapa and Northwest Highlands routes, six Ha Giang loop routes, seven Ninh Binh routes, the Hue hub with six detail guides, and Da Nang &amp; Hoi An with six field guides, plus four George Town &amp; Penang routes, nine Bangkok routes and the Chiang Mai hub with eight area guides in all five published languages at paired 320 px and 390 px CSS viewport widths.</p>
      <div class="controls">
        <label for="route">Guide
          <select id="route">${routes.map((route, index) => `<option value="${index}">${route.label}</option>`).join('')}</select>
        </label>
        <label for="locale">Language
          <select id="locale">${locales.map((locale) => `<option value="${locale.code}">${locale.label}</option>`).join('')}</select>
        </label>
        <p class="status" id="status" role="status" aria-live="polite"></p>
      </div>
      <div class="preview-rail"><div class="frames">
        <figure><figcaption>320 CSS px</figcaption><iframe id="frame-320" title="Guide route, English, 320 CSS pixels wide"></iframe><p class="frame-diagnostics" id="diagnostics-320" aria-label="320 CSS pixel frame diagnostics" aria-live="polite">Waiting for a route and language selection.</p></figure>
        <figure><figcaption>390 CSS px</figcaption><iframe id="frame-390" title="Guide route, English, 390 CSS pixels wide"></iframe><p class="frame-diagnostics" id="diagnostics-390" aria-label="390 CSS pixel frame diagnostics" aria-live="polite">Waiting for a route and language selection.</p></figure>
      </div></div>
      <p class="meta" id="release"></p>
    </section>
  </main>
  <script id="qa-manifest" type="application/json">${JSON.stringify(manifest).replaceAll('<', '\\u003c')}</script>
  <script>
    const manifest = JSON.parse(document.querySelector('#qa-manifest').textContent);
    const routeSelect = document.querySelector('#route');
    const localeSelect = document.querySelector('#locale');
    const status = document.querySelector('#status');
    const FRAME_READY_TIMEOUT_MS = 20000;
    const COMPONENT_HOST_IDS = ['layout-header', 'layout-sidebar', 'layout-footer'];
    const frames = manifest.viewportWidths.map((width) => ({
      width,
      element: document.querySelector('#frame-' + width),
      diagnostics: document.querySelector('#diagnostics-' + width)
    }));
    let selectionGeneration = 0;
    const activeFrameWaits = new Map();

    function setDiagnostic(item, state, message) {
      item.diagnostics.dataset.state = state;
      item.diagnostics.textContent = message;
    }

    function componentReadiness(doc) {
      const hasMainScript = Array.from(doc.scripts).some(function (script) {
        try { return new URL(script.src, doc.baseURI).pathname === '/js/main.js'; }
        catch { return false; }
      });
      if (!hasMainScript) return { applicable: false, ready: true, summary: 'shared components: not applicable' };
      const hosts = COMPONENT_HOST_IDS.map(function (id) { return doc.getElementById(id); });
      const missing = COMPONENT_HOST_IDS.filter(function (id, index) { return !hosts[index]; });
      if (missing.length) return { applicable: true, ready: false, error: 'missing component slots: ' + missing.join(', ') };
      const pending = hosts.filter(function (host) { return host.children.length === 0 && !host.textContent.trim(); });
      const alerts = hosts.filter(function (host) { return host.querySelector('[role="alert"]'); }).length;
      return {
        applicable: true,
        ready: pending.length === 0,
        summary: pending.length === 0
          ? 'shared components: ' + hosts.length + '/' + hosts.length + ' slots populated' + (alerts ? '; ' + alerts + ' visible error fallback(s)' : '')
          : 'shared components: waiting for ' + pending.length + '/' + hosts.length + ' slots'
      };
    }

    function waitForComponents(doc, currentDocumentError) {
      const initial = componentReadiness(doc);
      if (!initial.applicable || initial.ready || initial.error) {
        return { promise: Promise.resolve(initial), cancel: function () {} };
      }
      const frameWindow = doc.defaultView;
      if (!frameWindow) return { promise: Promise.resolve({ applicable: true, ready: false, error: 'page window is unavailable' }), cancel: function () {} };
      let resolveWait;
      let complete = false;
      const promise = new Promise(function (resolve) { resolveWait = resolve; });
      function finish(result) {
        if (complete) return;
        complete = true;
        frameWindow.removeEventListener('tripdistill:components-ready', checkReadiness);
        resolveWait(result);
      }
      function checkReadiness() {
        const documentError = currentDocumentError();
        if (documentError) return finish(documentError);
        const readiness = componentReadiness(doc);
        if (readiness.ready || readiness.error) finish(readiness);
      }
      frameWindow.addEventListener('tripdistill:components-ready', checkReadiness);
      // Recheck after listener registration so an already-completed fragment load cannot be missed.
      checkReadiness();
      return { promise, cancel: function () { finish({ cancelled: true }); } };
    }

    function isExpectedDocument(frame, doc, expectedUrl, generation) {
      if (generation !== selectionGeneration || frame.dataset.navigationGeneration !== String(generation) || !doc || frame.contentDocument !== doc) return false;
      try {
        const actualUrl = new URL(doc.location.href);
        return actualUrl.origin === expectedUrl.origin && actualUrl.pathname === expectedUrl.pathname && actualUrl.search === expectedUrl.search && actualUrl.hash === expectedUrl.hash;
      } catch { return false; }
    }

    function frameDiagnostics(doc, expectedUrl, generation, componentSummary, fontSummary) {
      const root = doc.documentElement;
      const body = doc.body;
      const frameWindow = doc.defaultView;
      const viewportWidth = root.clientWidth;
      const rootOverflow = Math.max(0, root.scrollWidth - root.clientWidth);
      const bodyOverflow = body ? Math.max(0, body.scrollWidth - body.clientWidth) : 0;
      const possibleOverhangs = body ? Array.from(body.querySelectorAll('*')).map(function (element) {
        const style = frameWindow.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        if (style.display === 'none' || style.visibility === 'hidden' || rect.width === 0) return null;
        const overBy = Math.max(rect.right - viewportWidth, -rect.left, 0);
        if (overBy <= 1) return null;
        const classes = typeof element.className === 'string' ? element.className.trim().split(/\\s+/).filter(Boolean).slice(0, 2) : [];
        return { label: element.tagName.toLowerCase() + (element.id ? '#' + element.id : '') + (classes.length ? '.' + classes.join('.') : ''), overBy: Math.round(overBy) };
      }).filter(Boolean).sort(function (a, b) { return b.overBy - a.overBy; }).slice(0, 4) : [];
      const htmlMinWidth = frameWindow.getComputedStyle(root).minWidth;
      const bodyMinWidth = body ? frameWindow.getComputedStyle(body).minWidth : 'unavailable';
      return {
        rootOverflow,
        text: [
          'Ready - selection ' + generation + ' - document complete - ' + componentSummary + ' - ' + fontSummary,
          'URL: ' + doc.location.pathname + doc.location.hash + ' (expected ' + expectedUrl.pathname + expectedUrl.hash + ')',
          'Viewport width: inner ' + frameWindow.innerWidth + ' / root client ' + root.clientWidth + ' / root scroll ' + root.scrollWidth + ' CSS px (horizontal overflow ' + rootOverflow + ' px)',
          'Body width: client ' + (body ? body.clientWidth : 'n/a') + ' / scroll ' + (body ? body.scrollWidth : 'n/a') + ' CSS px (overflow ' + bodyOverflow + ' px)',
          'Computed min-width: html ' + htmlMinWidth + ' - body ' + bodyMinWidth,
          'Possible element overhangs: ' + (possibleOverhangs.length ? possibleOverhangs.map(function (entry) { return entry.label + ' (+' + entry.overBy + 'px)'; }).join('; ') : 'none detected')
        ].join('\\n')
      };
    }

    function startFrameWait(item, expectedUrl, sourcePath, generation, onComplete) {
      const frame = item.element;
      return new Promise(function (resolve) {
        let settled = false;
        let timeoutId;
        let componentWait = null;
        let settlingDocument = null;
        let settlingStarted = false;
        let phase = 'document load';

        function cleanup() {
          clearTimeout(timeoutId);
          frame.removeEventListener('load', onFrameLoad);
          if (settlingDocument) settlingDocument.removeEventListener('readystatechange', onReadyStateChange);
          if (componentWait) componentWait.cancel();
          if (activeFrameWaits.get(frame) === cancelWait) activeFrameWaits.delete(frame);
        }

        function finish(result) {
          if (settled) return;
          settled = true;
          cleanup();
          if (generation === selectionGeneration && frame.dataset.navigationGeneration === String(generation)) {
            if (result.ok) {
              try {
                const measurements = frameDiagnostics(result.doc, expectedUrl, generation, result.componentSummary, result.fontSummary);
                result.rootOverflow = measurements.rootOverflow;
                setDiagnostic(item, 'ready', measurements.text);
              } catch (error) {
                result = { error: 'Width diagnostics failed: ' + error.message };
                setDiagnostic(item, 'error', 'Error - selection ' + generation + '\\n' + result.error);
              }
            } else if (result.error) {
              setDiagnostic(item, 'error', 'Error - selection ' + generation + '\\n' + result.error);
            }
            onComplete(result);
          }
          resolve(result);
        }

        function cancelWait() { finish({ cancelled: true }); }

        function currentDocumentError(doc) {
          if (generation !== selectionGeneration || frame.dataset.navigationGeneration !== String(generation)) return { cancelled: true };
          if (!doc || frame.contentDocument !== doc) return { error: 'The active iframe document changed during ' + phase + '.' };
          let currentUrl;
          try { currentUrl = new URL(doc.location.href); } catch { return { error: 'The active iframe URL is unavailable during ' + phase + '.' }; }
          if (currentUrl.origin !== expectedUrl.origin || currentUrl.pathname !== expectedUrl.pathname || currentUrl.search !== expectedUrl.search || currentUrl.hash !== expectedUrl.hash) {
            return { error: 'The active iframe URL changed during ' + phase + '. Expected ' + expectedUrl.pathname + '; current ' + currentUrl.pathname + '.' };
          }
          return null;
        }

        async function settleDocument(doc) {
          if (settlingStarted) return;
          settlingStarted = true;
          const initialError = currentDocumentError(doc);
          if (initialError) return finish(initialError);
          let fontSummary = 'fonts API unavailable';
          phase = 'font readiness';
          try {
            if (doc.fonts && doc.fonts.ready) {
              await doc.fonts.ready;
              fontSummary = 'fonts ready';
            }
          } catch (error) { return finish({ error: 'Font readiness failed: ' + error.message }); }
          const afterFontsError = currentDocumentError(doc);
          if (afterFontsError) return finish(afterFontsError);

          phase = 'shared component fragments';
          componentWait = waitForComponents(doc, function () { return currentDocumentError(doc); });
          const componentResult = await componentWait.promise;
          componentWait = null;
          if (componentResult.cancelled) return finish({ cancelled: true });
          if (componentResult.error) return finish({ error: componentResult.error });
          const afterComponentsError = currentDocumentError(doc);
          if (afterComponentsError) return finish(afterComponentsError);

          phase = 'two settled animation frames';
          const frameWindow = doc.defaultView;
          if (!frameWindow) return finish({ error: 'The active page window is unavailable before layout settled.' });
          await new Promise(function (resolveFrames) {
            frameWindow.requestAnimationFrame(function () { frameWindow.requestAnimationFrame(resolveFrames); });
          });
          const afterFramesError = currentDocumentError(doc);
          if (afterFramesError) return finish(afterFramesError);
          const finalComponents = componentReadiness(doc);
          if (finalComponents.error) return finish({ error: finalComponents.error });
          if (!finalComponents.ready) return finish({ error: 'Component fragments became empty before layout settled.' });
          finish({ ok: true, doc, componentSummary: finalComponents.summary, fontSummary });
        }

        function onReadyStateChange() {
          if (settlingDocument && settlingDocument.readyState === 'complete') {
            void settleDocument(settlingDocument).catch(function (error) { finish({ error: 'Readiness failed during ' + phase + ': ' + error.message }); });
          }
        }

        function onFrameLoad() {
          if (generation !== selectionGeneration || frame.dataset.navigationGeneration !== String(generation)) return;
          let doc;
          try { doc = frame.contentDocument; } catch { return; }
          if (!doc || !isExpectedDocument(frame, doc, expectedUrl, generation)) return; // Ignore load events from the previous selection.
          if (doc.readyState !== 'complete') {
            settlingDocument = doc;
            doc.addEventListener('readystatechange', onReadyStateChange);
            return;
          }
          if (settlingDocument === doc) return;
          settlingDocument = doc;
          void settleDocument(doc).catch(function (error) { finish({ error: 'Readiness failed during ' + phase + ': ' + error.message }); });
        }

        timeoutId = setTimeout(function () {
          let currentPath = 'unavailable';
          try { currentPath = frame.contentDocument.location.href; } catch {}
          finish({ error: 'Timed out after ' + Math.round(FRAME_READY_TIMEOUT_MS / 1000) + 's during ' + phase + '. Expected ' + expectedUrl.pathname + expectedUrl.hash + '; current frame URL is ' + currentPath + '.' });
        }, FRAME_READY_TIMEOUT_MS);
        frame.dataset.navigationGeneration = String(generation);
        frame.addEventListener('load', onFrameLoad);
        activeFrameWaits.set(frame, cancelWait);
        frame.src = sourcePath;
        // Cached pages may already be complete before load dispatch; validate the active document too.
        queueMicrotask(onFrameLoad);
      });
    }

    function updateFrames() {
      const generation = ++selectionGeneration;
      for (const cancel of activeFrameWaits.values()) cancel();
      activeFrameWaits.clear();
      const route = manifest.routes[Number(routeSelect.value)];
      const locale = manifest.locales.find((item) => item.code === localeSelect.value);
      const completed = new Map();
      const expectedByWidth = new Map();
      status.dataset.state = 'loading';
      status.textContent = 'Loading ' + route.label + ' - ' + locale.label + ' - selection ' + generation + ' - waiting for both frames.';

      function renderProgress() {
        if (generation !== selectionGeneration) return;
        const failures = Array.from(completed.entries()).filter(function (entry) { return !entry[1].ok && !entry[1].cancelled; });
        const pending = frames.filter(function (item) { return !completed.has(item.width); }).map(function (item) { return item.width + 'px'; });
        if (failures.length) {
          status.dataset.state = 'error';
          status.textContent = 'Readiness error: ' + failures.map(function (entry) { return entry[0] + 'px - ' + entry[1].error; }).join(' | ') + (pending.length ? ' - still waiting for ' + pending.join(' and ') : '');
        } else if (pending.length) {
          status.dataset.state = 'loading';
          status.textContent = 'Loading ' + route.label + ' - ' + locale.label + ' - selection ' + generation + ' - ready: ' + Array.from(completed.keys()).map(function (width) { return width + 'px'; }).join(', ') + '; waiting: ' + pending.join(' and ') + '.';
        } else {
          const changedFrames = frames.filter(function (item) {
            const result = completed.get(item.width);
            return !result || !result.ok || !isExpectedDocument(item.element, result.doc, expectedByWidth.get(item.width), generation);
          });
          if (changedFrames.length) {
            status.dataset.state = 'error';
            status.textContent = 'Readiness error: current URL changed in ' + changedFrames.map(function (item) { return item.width + 'px'; }).join(' and ') + ' after its selection loaded. Select the route again to restart the measurement.';
          } else {
            const overflow = Array.from(completed.entries()).filter(function (entry) { return entry[1].rootOverflow > 0; }).map(function (entry) { return entry[0] + 'px +' + entry[1].rootOverflow + 'px'; });
            status.dataset.state = 'ready';
            status.textContent = overflow.length
              ? 'Both frames ready - root horizontal overflow detected: ' + overflow.join(', ') + '. Inspect the per-frame diagnostics.'
              : 'Both frames ready - selection ' + generation + ' - no document-root horizontal overflow detected.';
          }
        }
      }

      const waits = frames.map(function (item) {
        item.element.style.width = item.width + 'px';
        item.element.title = route.label + ', ' + locale.label + ', ' + item.width + ' CSS pixels wide';
        setDiagnostic(item, 'loading', 'Loading ' + locale.prefix + route.path + '...\\nWaiting for the current document, components and settled layout.');
        const sourcePath = locale.prefix + route.path + '#tripdistill-qa-' + generation + '-' + item.width;
        const expectedUrl = new URL(sourcePath, window.location.origin);
        expectedByWidth.set(item.width, expectedUrl);
        return startFrameWait(item, expectedUrl, sourcePath, generation, function (result) {
          if (generation !== selectionGeneration || result.cancelled) return;
          completed.set(item.width, result);
          renderProgress();
        });
      });
      Promise.all(waits).then(renderProgress).catch(function (error) {
        if (generation !== selectionGeneration) return;
        status.dataset.state = 'error';
        status.textContent = 'Readiness controller error: ' + error.message;
        frames.filter(function (item) { return !completed.has(item.width); }).forEach(function (item) {
          setDiagnostic(item, 'error', 'Error - selection ' + generation + '\\nReadiness controller error: ' + error.message);
        });
      });
    }
    routeSelect.addEventListener('change', updateFrames);
    localeSelect.addEventListener('change', updateFrames);
    updateFrames();
    document.querySelector('#release').textContent = 'Preview project ' + manifest.project + ' · branch ' + manifest.branch + ' · source ' + manifest.sourceCommit + ' · ' + (manifest.sourceTreeClean ? 'clean source tree' : 'working tree included before release commit');
  </script>
</body>
</html>
`;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, page, 'utf8');
console.log(`Generated paired-width Paris QA harness: ${path.relative(root, outputPath).replaceAll(path.sep, '/')}`);
console.log(`${manifest.routeCount} route-language pages, ${assets.length} unique local image/stylesheet assets; source ${sourceCommit}${sourceTreeClean ? '' : ' (working tree not clean)'}.`);
