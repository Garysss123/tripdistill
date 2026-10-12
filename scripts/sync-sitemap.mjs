import fs from 'node:fs';
import path from 'node:path';
import { allLocales, localeConfigs } from './i18n-lib.mjs';
import { malaysiaDepthClusters, malaysiaDepthGuides } from '../data/malaysia-depth-guides.mjs';
import { vietnamClusters, vietnamGuides } from '../data/vietnam-guides.mjs';
import { australiaClusters, australiaGuides } from '../data/australia-guides.mjs';
import { usaRoutes } from '../data/usa-guides.mjs';
import { canadaClusters, canadaGuides } from '../data/canada-guides.mjs';
import { switzerlandClusters, switzerlandGuides } from '../data/switzerland-guides.mjs';
import { franceClusters, franceGuides } from '../data/france-guides.mjs';
import { unitedKingdomClusters, unitedKingdomGuides } from '../data/united-kingdom-guides.mjs';
import { italyClusters, italyGuides } from '../data/italy-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const sitemapPath = path.join(root, 'sitemap.xml');
const malaysiaLastmod = '2026-08-30';
const malaysiaMelakaLastmod = '2026-10-12';
const malaysiaMelakaEditedRoutes = [
  '/malaysia/melaka/',
  '/malaysia/melaka/dutch-square-st-pauls/',
  '/malaysia/melaka/jonker-harmony-street/',
  '/malaysia/melaka/melaka-river-kampung-morten/',
  '/malaysia/melaka/bandar-hilir-portuguese-settlement/'
];
const malaysiaIpohLastmod = '2026-10-11';
const malaysiaTamanNegaraLastmod = '2026-10-12';
const malaysiaTamanNegaraEditedRoutes = [
  '/malaysia/taman-negara/',
  '/malaysia/taman-negara/kuala-tahan-park-headquarters/',
  '/malaysia/taman-negara/canopy-bukit-teresek/',
  '/malaysia/taman-negara/tahan-river-lata-berkoh/',
  '/malaysia/taman-negara/merapoh-sungai-relau/'
];
const malaysiaLangkawiLastmod = '2026-10-12';
const malaysiaLangkawiEditedRoutes = [
  '/malaysia/langkawi/',
  '/malaysia/langkawi/pantai-cenang-tengah/',
  '/malaysia/langkawi/machinchang-skycab/',
  '/malaysia/langkawi/kilim-geoforest/'
];
const malaysiaIpohEditedRoutes = [
  '/malaysia/ipoh-kinta-valley/',
  '/malaysia/ipoh-kinta-valley/old-town-railway-civic-quarter/',
  '/malaysia/ipoh-kinta-valley/gunung-rapat-cave-temples/',
  '/malaysia/ipoh-kinta-valley/gopeng-gua-tempurung/'
];
const malaysiaCameronLastmod = '2026-10-11';
const malaysiaCameronEditedRoutes = [
  '/malaysia/cameron-highlands/',
  '/malaysia/cameron-highlands/tanah-rata-trails/',
  '/malaysia/cameron-highlands/brinchang-kea-farm/',
  '/malaysia/cameron-highlands/mossy-forest-gunung-brinchang/'
];
const malaysiaFourthChildrenLastmod = '2026-10-12';
const malaysiaFourthChildrenRoutes = [
  '/malaysia/george-town-penang/little-india-esplanade/',
  '/malaysia/cameron-highlands/ringlet-bertam-valley/',
  '/malaysia/ipoh-kinta-valley/batu-gajah-kellies-castle/',
  '/malaysia/langkawi/dayang-bunting-island/'
];
const vietnamLastmod = '2026-08-31';
const vietnamHueLastmod = '2026-10-08';
const australiaLastmod = '2026-09-04';
const canadaLastmod = '2026-09-12';
const victoriaResponsiveLastmod = '2026-10-08';
const switzerlandLastmod = '2026-09-12';
const zurichLastmod = '2026-10-08';
const southKoreaLastmod = '2026-10-08';
const thailandBangkokLastmod = '2026-10-08';
const thailandChiangMaiLastmod = '2026-10-08';
const thailandAndamanLastmod = '2026-10-09';
const thailandAyutthayaLastmod = '2026-10-09';
const franceLastmod = '2026-09-20';
const franceBrittanyLastmod = '2026-10-10';
const franceFr02Lastmod = '2026-10-11';
const franceDordogneLastmod = '2026-10-11';
const franceToulouseOccitanieLastmod = '2026-10-11';
const franceMarseilleLastmod = '2026-10-12';
const franceMarseilleEditedRoutes = [
  '/france/marseille-calanques/',
  '/france/marseille-calanques/old-port-panier-mucem/',
  '/france/marseille-calanques/calanques-access-choice/',
  '/france/marseille-calanques/cassis-la-ciotat/'
];
const franceCoteDAzurLastmod = '2026-10-12';
const franceProvenceLastmod = '2026-10-12';
const franceProvenceEditedRoutes = [
  '/france/provence-inland/',
  '/france/provence-inland/avignon-papal-city/',
  '/france/provence-inland/aix-markets-cezanne/'
];
const franceDordogneEditedRoutes = [
  '/france/dordogne-perigord/',
  '/france/dordogne-perigord/sarlat-market-old-town/',
  '/france/dordogne-perigord/vezere-prehistory/',
  '/france/dordogne-perigord/dordogne-castles-villages/'
];
const franceFr02EditedRoutes = [
  '/france/basque-coast-pyrenees/saint-jean-de-luz-basque-inland/',
  '/france/basque-coast-pyrenees/gavarnie-cauterets-pyrenees/',
  '/france/provence-inland/luberon-villages-abbey/',
  '/france/corsica/bastia-cap-corse/',
  '/france/corsica/bonifacio-porto-vecchio/'
];
const franceBrittanyEditedRoutes = [
  '/france/brittany-coasts/',
  '/france/brittany-coasts/saint-malo-dinan/',
  '/france/brittany-coasts/morbihan-carnac/',
  '/france/brittany-coasts/quimper-crozon/'
];
const franceToulouseOccitanieEditedRoutes = [
  '/france/toulouse-albi-carcassonne/',
  '/france/toulouse-albi-carcassonne/toulouse-garonne-aerospace/',
  '/france/toulouse-albi-carcassonne/albi-episcopal-city/',
  '/france/toulouse-albi-carcassonne/carcassonne-cite-bastide/'
];
const franceCoteDAzurEditedRoutes = [
  '/france/cote-dazur/',
  '/france/cote-dazur/nice-old-town-hills/',
  '/france/cote-dazur/eze-monaco-menton/',
  '/france/cote-dazur/antibes-cannes-west-coast/'
];
const unitedKingdomLastmod = '2026-09-20';
const unitedKingdomLondonLastmod = '2026-10-11';
const unitedKingdomPeakLastmod = '2026-10-12';
const unitedKingdomPeakEditedRoutes = [
  '/united-kingdom/peak-district-derbyshire/',
  '/united-kingdom/peak-district-derbyshire/bakewell-chatsworth/',
  '/united-kingdom/peak-district-derbyshire/hope-valley-edale/',
  '/united-kingdom/peak-district-derbyshire/dovedale-ashbourne/'
];
const unitedKingdomBirminghamEditedRoutes = [
  '/united-kingdom/birmingham-west-midlands/',
  '/united-kingdom/birmingham-west-midlands/birmingham-canals-jewellery-quarter/',
  '/united-kingdom/birmingham-west-midlands/stratford-shakespeare/',
  '/united-kingdom/birmingham-west-midlands/ironbridge-shrewsbury/'
];
const unitedKingdomLondonEditedRoutes = [
  '/united-kingdom/london/',
  '/united-kingdom/london/westminster-south-bank/',
  '/united-kingdom/london/bloomsbury-covent-garden/',
  '/united-kingdom/london/tower-city-greenwich/'
];
const italyLastmod = '2026-09-26';
const italyIt12Lastmod = '2026-10-12';
const romeLastmod = '2026-10-04';
const italyPugliaLastmod = '2026-10-11';
const italySienaLastmod = '2026-10-12';
const italyPugliaEditedRoutes = [
  '/italy/puglia/',
  '/italy/puglia/bari-trani-castel-del-monte/',
  '/italy/puglia/alberobello-itria-valley/',
  '/italy/puglia/lecce-otranto-gallipoli/'
];
const italyIt12EditedRoutes = [
  '/italy/',
  '/italy/veneto-art-cities/',
  '/italy/veneto-art-cities/verona-arena-river/',
  '/italy/veneto-art-cities/vicenza-palladian-city/',
  '/italy/veneto-art-cities/padua-frescoes-basilica/',
  '/italy/dolomites-trentino-south-tyrol/',
  '/italy/dolomites-trentino-south-tyrol/bolzano-renon/',
  '/italy/dolomites-trentino-south-tyrol/cortina-tre-cime/',
  '/italy/dolomites-trentino-south-tyrol/trento-brenta-dolomites/',
  '/italy/turin-piedmont/',
  '/italy/turin-piedmont/royal-turin-egyptian-museum/',
  '/italy/turin-piedmont/venaria-sacra-san-michele/',
  '/italy/turin-piedmont/langhe-alba-asti/',
  '/italy/genoa-liguria/',
  '/italy/genoa-liguria/genoa-old-port-rolli/',
  '/italy/genoa-liguria/cinque-terre-rail-trails/',
  '/italy/genoa-liguria/camogli-portofino-san-fruttuoso/',
  '/italy/marche-abruzzo/',
  '/italy/marche-abruzzo/ancona-conero/',
  '/italy/marche-abruzzo/urbino-pesaro/',
  '/italy/marche-abruzzo/abruzzo-national-parks/',
  '/italy/basilicata-calabria/',
  '/italy/basilicata-calabria/matera-sassi-murgia/',
  '/italy/basilicata-calabria/maratea-pollino/',
  '/italy/basilicata-calabria/tropea-scilla-reggio/',
  '/italy/western-sicily/',
  '/italy/western-sicily/palermo-monreale-cefalu/',
  '/italy/western-sicily/agrigento-selinunte/',
  '/italy/western-sicily/trapani-erice-egadi/',
  '/italy/eastern-sicily/',
  '/italy/eastern-sicily/catania-etna/',
  '/italy/eastern-sicily/taormina-naxos-aeolian-gateway/',
  '/italy/eastern-sicily/syracuse-noto-ragusa/',
  '/italy/sardinia/',
  '/italy/sardinia/cagliari-su-nuraxi/',
  '/italy/sardinia/la-maddalena-gallura/',
  '/italy/sardinia/gulf-orosei-gennargentu/'
];
const hokkaidoLastmod = '2026-10-06';
const japanOverviewLastmod = '2026-10-06';
const chinaEditedLastmod = '2026-10-09';
const chinaEditedRoutes = [
  '/china/beijing/central-axis-forbidden-city/',
  '/china/beijing/jingshan-beihai/',
  '/china/beijing/shichahai-drum-tower/',
  '/china/datong/',
  '/china/hangzhou/lingyin-feilai-peak/',
  '/china/hangzhou/longjing-nine-creeks/',
  '/china/hangzhou/xixi-wetland/',
  '/china/luoyang/',
  '/china/pingyao/',
  '/china/shanghai/peoples-square-museums/',
  '/china/shanghai/the-bund-huangpu/',
  '/china/shanghai/yuyuan-old-city/',
  '/china/xian/'
];
// Three Hangzhou pages received a narrow transit correction on October 10;
// keep their localized lastmod values current without dating the whole cluster.
const chinaHangzhouTransitCorrectionLastmod = '2026-10-10';
const chinaHangzhouTransitCorrectionRoutes = [
  '/china/hangzhou/west-lake-north-broken-bridge/',
  '/china/hangzhou/west-lake-south-leifeng/',
  '/china/hangzhou/hefang-southern-song/'
];
// These six routes have substantive page diffs in the 10 October Shanghai revisions
// b5394c6315d8424e06dacfc859d51a1d6a8aa644 and 92f55cfba2f5d10253d6a85a5a4e99ed4e465b5f.
const chinaShanghaiRoutesLastmod = '2026-10-10';
const chinaShanghaiRoutes = [
  '/china/shanghai/',
  '/china/shanghai/lujiazui-pudong/',
  '/china/shanghai/zhujiajiao-water-town/',
  '/china/shanghai/hongkou-suzhou-creek/',
  '/china/shanghai/west-bund-longhua/',
  '/china/shanghai/wukang-road-xuhui/'
];
// Four Beijing local guides received a route and transit revision on October 10.
const chinaBeijingRoutesLastmod = '2026-10-10';
const chinaBeijingRoutes = [
  '/china/beijing/temple-of-heaven-qianmen/',
  '/china/beijing/yonghe-guozijian/',
  '/china/beijing/798-chaoyang/',
  '/china/beijing/mutianyu-great-wall/'
];
// Four Lower Yangtze guides received a route and planning review on October 10.
const chinaLowerYangtzeRoutesLastmod = '2026-10-10';
const chinaLowerYangtzeRoutes = [
  '/china/nanjing/',
  '/china/suzhou/',
  '/china/hangzhou/grand-canal-gongchen-bridge/',
  '/china/hangzhou/liangzhu-archaeological-city/'
];
// Four Guangdong, Fujian, and Guangxi local guides received a route review on October 10.
const chinaSouthernChinaRoutesLastmod = '2026-10-10';
const chinaSouthernChinaRoutes = [
  '/china/guangzhou/',
  '/china/shenzhen/',
  '/china/xiamen-fujian-tulou/',
  '/china/guilin-yangshuo/'
];
// Four Central China city guides received a route and access review on October 11.
const chinaCentralRoutesLastmod = '2026-10-11';
const chinaCentralRoutes = [
  '/china/changsha/',
  '/china/wuhan/',
  '/china/chengdu/',
  '/china/chongqing/'
];
// Harbin, Hohhot, Huangshan and Qingdao received a northern-route review on October 11.
const chinaNorthernRoutesLastmod = '2026-10-11';
const chinaNorthernRoutes = [
  '/china/harbin/',
  '/china/hohhot-inner-mongolia/',
  '/china/huangshan/',
  '/china/qingdao/'
];
// The five southwest pages received a full route/source and image review on October 11.
const chinaSouthwestRoutesLastmod = '2026-10-11';
const chinaSouthwestRoutes = [
  '/china/dali/',
  '/china/guiyang-guizhou/',
  '/china/kunming/',
  '/china/lijiang-shangri-la/',
  '/china/zhangjiajie/'
];
// CN14A refreshed Sanya and Dunhuang with route, access and current-source updates.
const chinaCn14aRoutesLastmod = '2026-10-11';
const chinaCn14aRoutes = [
  '/china/dunhuang-hexi-corridor/',
  '/china/sanya-hainan/'
];
// CN14B updates the two requested guides and the shared destination hub image/credit wiring.
const chinaCn14bLastmod = '2026-10-11';
const chinaCn14bRoutes = [
  '/china/',
  '/china/lhasa-tibetan-plateau/',
  '/china/xinjiang-corridor/'
];
// CN15 materially revises the China country, Beijing and Hangzhou hubs and the Summer Palace field guide.
const chinaCN15RoutesLastmod = '2026-10-11';
const chinaCN15Routes = [
  '/china/',
  '/china/beijing/',
  '/china/hangzhou/',
  '/china/beijing/summer-palace/'
];
const unitedKingdomEditedLastmod = '2026-10-09';
const unitedKingdomBathLastmod = '2026-10-11';
const unitedKingdomBathEditedRoutes = [
  '/united-kingdom/bath-bristol-somerset/',
  '/united-kingdom/bath-bristol-somerset/bath-roman-georgian-city/',
  '/united-kingdom/bath-bristol-somerset/bristol-harbourside-clifton/',
  '/united-kingdom/bath-bristol-somerset/wells-glastonbury-mendips/'
];
const unitedKingdomLiverpoolManchesterLastmod = '2026-10-12';
const unitedKingdomLiverpoolManchesterEditedRoutes = [
  '/united-kingdom/liverpool-manchester/',
  '/united-kingdom/liverpool-manchester/liverpool-waterfront-cathedrals/',
  '/united-kingdom/liverpool-manchester/manchester-industrial-city/',
  '/united-kingdom/liverpool-manchester/chester-walls-roman-city/'
];
const unitedKingdomKentSussexLastmod = '2026-10-12';
const unitedKingdomKentSussexEditedRoutes = [
  '/united-kingdom/kent-sussex-south-coast/',
  '/united-kingdom/kent-sussex-south-coast/brighton-lanes-seafront/',
  '/united-kingdom/kent-sussex-south-coast/canterbury-dover/',
  '/united-kingdom/kent-sussex-south-coast/seven-sisters-eastbourne/'
];
const unitedKingdomBirminghamLastmod = '2026-10-12';
const unitedKingdomBelfastLastmod = '2026-10-12';
const unitedKingdomBelfastEditedRoutes = [
  '/united-kingdom/belfast-northern-ireland/',
  '/united-kingdom/belfast-northern-ireland/belfast-civic-maritime/',
  '/united-kingdom/belfast-northern-ireland/giants-causeway-coast/',
  '/united-kingdom/belfast-northern-ireland/derry-walls-bogside/'
];
// The North Wales and Scottish Islands hubs are updated generated summaries;
// their dates follow the dated child routes, though hubs do not count as main routes.
const unitedKingdomEditedRoutes = [
  '/united-kingdom/cardiff-south-wales/',
  '/united-kingdom/north-wales-eryri/',
  '/united-kingdom/north-wales-eryri/caernarfon-anglesey/',
  '/united-kingdom/north-wales-eryri/conwy-llandudno/',
  '/united-kingdom/north-wales-eryri/yr-wyddfa-gateways/',
  '/united-kingdom/scottish-islands/isle-of-skye/',
  '/united-kingdom/scottish-islands/',
  '/united-kingdom/scottish-islands/lewis-harris/',
  '/united-kingdom/scottish-islands/orkney-mainland/',
  '/united-kingdom/cardiff-south-wales/cardiff-castle-bay/',
  '/united-kingdom/cardiff-south-wales/bannau-brycheiniog/',
  '/united-kingdom/cardiff-south-wales/swansea-gower/'
];
const unitedKingdomLakeLastmod = '2026-10-11';
const unitedKingdomLakeEditedRoutes = [
  '/united-kingdom/lake-district-cumbria/',
  '/united-kingdom/lake-district-cumbria/windermere-ambleside/',
  '/united-kingdom/lake-district-cumbria/keswick-derwentwater/',
  '/united-kingdom/lake-district-cumbria/carlisle-hadrians-wall-west/'
];
const unitedKingdomNortheastLastmod = '2026-10-10';
const unitedKingdomNortheastEditedRoutes = [
  '/united-kingdom/northeast-northumberland/',
  '/united-kingdom/northeast-northumberland/newcastle-gateshead-quays/',
  '/united-kingdom/northeast-northumberland/durham-cathedral-city/',
  '/united-kingdom/northeast-northumberland/bamburgh-holy-island/'
];
const unitedKingdomYorkshireLastmod = '2026-10-10';
const unitedKingdomYorkshireEditedRoutes = [
  '/united-kingdom/',
  '/united-kingdom/yorkshire/',
  '/united-kingdom/yorkshire/york-walls-minster/',
  '/united-kingdom/yorkshire/leeds-saltaire/',
  '/united-kingdom/yorkshire/whitby-north-york-moors/'
];
const unitedKingdomCambridgeLastmod = '2026-10-10';
const unitedKingdomCambridgeEditedRoutes = [
  '/united-kingdom/cambridge-east-anglia/',
  '/united-kingdom/cambridge-east-anglia/cambridge-colleges-backs/',
  '/united-kingdom/cambridge-east-anglia/ely-cathedral-fens/',
  '/united-kingdom/cambridge-east-anglia/norwich-north-norfolk/'
];
const unitedKingdomEdinburghLastmod = '2026-10-10';
const unitedKingdomEdinburghEditedRoutes = [
  '/united-kingdom/edinburgh-lothians/',
  '/united-kingdom/edinburgh-lothians/old-town-castle-royal-mile/',
  '/united-kingdom/edinburgh-lothians/new-town-dean-village/',
  '/united-kingdom/edinburgh-lothians/north-berwick-east-lothian/'
];
const unitedKingdomCornwallLastmod = '2026-10-11';
const unitedKingdomOxfordLastmod = '2026-10-11';
const unitedKingdomOxfordEditedRoutes = [
  '/united-kingdom/oxford-cotswolds/',
  '/united-kingdom/oxford-cotswolds/oxford-colleges-museums/',
  '/united-kingdom/oxford-cotswolds/blenheim-woodstock/',
  '/united-kingdom/oxford-cotswolds/cotswold-towns-without-car/'
];
const unitedKingdomGlasgowLastmod = '2026-10-11';
const unitedKingdomGlasgowEditedRoutes = [
  '/united-kingdom/',
  '/united-kingdom/glasgow-clyde/',
  '/united-kingdom/glasgow-clyde/central-merchant-city-clyde/',
  '/united-kingdom/glasgow-clyde/west-end-kelvingrove/',
  '/united-kingdom/glasgow-clyde/loch-lomond-clyde-branch/'
];
const unitedKingdomCornwallEditedRoutes = [
  '/united-kingdom/cornwall-devon/',
  '/united-kingdom/cornwall-devon/st-ives-penwith/',
  '/united-kingdom/cornwall-devon/falmouth-roseland/',
  '/united-kingdom/cornwall-devon/exeter-dartmoor-edge/'
];
const usaEditedLastmod = '2026-10-09';
// These thirteen U.S. routes received material editorial updates across four Oct 9 batches.
// Localized URLs inherit the same date; all other U.S. route dates retain the default.
const usaEditedRoutes = [
  '/usa/alaska/',
  '/usa/alaska/anchorage-kenai/',
  '/usa/alaska/denali/',
  '/usa/sierra-parks/',
  '/usa/sierra-parks/sequoia-giant-forest/',
  '/usa/sierra-parks/kings-canyon/',
  '/usa/yellowstone-tetons/',
  '/usa/yellowstone-tetons/geyser-basins/',
  '/usa/yellowstone-tetons/canyon-lamar/',
  '/usa/yellowstone-tetons/grand-teton/',
  '/usa/utah-parks/',
  '/usa/utah-parks/bryce/',
  '/usa/utah-parks/moab-arches-canyonlands/'
];
const usaFloridaBrightlineLastmod = '2026-10-10';
// These four Florida routes received Brightline and onward-transfer updates on Oct 10.
// Localized URLs inherit the same date; other Florida routes retain their current dates.
const usaFloridaBrightlineRoutes = [
  '/usa/miami/',
  '/usa/miami/everglades/',
  '/usa/orlando/',
  '/usa/orlando/kennedy-space-center/'
];
const usaTexasLastmod = '2026-10-10';
// These four Texas routes received the cross-city train and door-to-door update on Oct 10.
// Localized URLs inherit the same lastmod; all other USA route dates stay unchanged.
const usaTexasRoutes = [
  '/usa/texas/',
  '/usa/texas/austin/',
  '/usa/texas/san-antonio/',
  '/usa/texas/houston/'
];
const usaColoradoLastmod = '2026-10-10';
const usaColoradoRoutes = [
  '/usa/colorado/',
  '/usa/colorado/denver/',
  '/usa/colorado/mountain-towns/',
  '/usa/colorado/rocky-mountain/'
];
const australiaReviewDates = new Map([
  ['/australia/', '2026-10-09'],
  ...australiaClusters
    .filter((cluster) => cluster.reviewIsoDate)
    .map((cluster) => [`/australia/${cluster.slug}/`, cluster.reviewIsoDate]),
  ...australiaGuides
    .filter((guide) => guide.reviewIsoDate)
    .map((guide) => [guide.url, guide.reviewIsoDate])
]);
const parisLastmod = '2026-10-06';
const parisRegionDayTripsLastmod = '2026-10-07';
const normandyLastmod = '2026-10-07';
const franceResponsiveLastmod = '2026-10-07';
const lyonReviewedLastmod = '2026-10-11';
const alsaceReviewedLastmod = '2026-10-11';
const bordeauxGirondeReviewedLastmod = '2026-10-11';
const parisEditedRoutes = [
  '/france/paris/',
  '/france/paris/seine-islands-latin-quarter/',
  '/france/paris/louvre-tuileries-opera/',
  '/france/paris/eiffel-invalides-montparnasse/'
];
const parisRegionDayTripsEditedRoutes = [
  '/france/paris-region-day-trips/',
  '/france/paris-region-day-trips/versailles-palace-estate/',
  '/france/paris-region-day-trips/fontainebleau-palace-forest/',
  '/france/paris-region-day-trips/giverny-monet-vernon/'
];
const vietnamHueEditedRoutes = [
  '/vietnam/hue/',
  '/vietnam/hue/imperial-city-citadel/',
  '/vietnam/hue/royal-tombs/',
  '/vietnam/hue/thien-mu-perfume-river/',
  '/vietnam/hue/thanh-toan-rural-loop/',
  '/vietnam/hue/bach-ma-national-park/',
  '/vietnam/hue/lang-co-lap-an-lagoon/'
];
const normandyEditedRoutes = [
  '/france/normandy/',
  '/france/normandy/rouen-seine-cathedral/',
  '/france/normandy/bayeux-dday-landscape/',
  '/france/normandy/mont-saint-michel-bay/'
];
const lyonReviewedRoutes = [
  '/france/lyon-rhone/',
  '/france/lyon-rhone/vieux-lyon-fourviere/',
  '/france/lyon-rhone/presquile-croix-rousse/',
  '/france/lyon-rhone/beaujolais-perouges/'
];
const alsaceReviewedRoutes = [
  '/france/alsace/',
  '/france/alsace/strasbourg-grande-ile/',
  '/france/alsace/colmar-canals-museums/',
  '/france/alsace/alsace-wine-route-villages/'
];
const burgundyReviewedRoutes = [
  '/france/burgundy/',
  '/france/burgundy/dijon-ducal-city/',
  '/france/burgundy/beaune-hospices-vineyards/',
  '/france/burgundy/vezelay-fontenay-abbeys/'
];
const bordeauxGirondeReviewedRoutes = [
  '/france/bordeaux-gironde/',
  '/france/bordeaux-gironde/bordeaux-river-wine-city/',
  '/france/bordeaux-gironde/saint-emilion-vineyards/',
  '/france/bordeaux-gironde/arcachon-dune-pilat/'
];
const zurichEditedRoutes = [
  '/switzerland/',
  '/switzerland/zurich-lake/',
  '/switzerland/zurich-lake/old-town-lindenhof/',
  '/switzerland/zurich-lake/lake-uetliberg/',
  '/switzerland/zurich-lake/zurich-west-museums/'
];
const southKoreaEditedRoutes = ['/south-korea/'];
const victoriaResponsiveEditedRoutes = [
  '/canada/victoria-south-island/',
  '/canada/victoria-south-island/butchart-saanich/',
  '/canada/victoria-south-island/sooke-juan-de-fuca/'
];
const thailandBangkokEditedRoutes = [
  '/thailand/bangkok/chatuchak-ari/',
  '/thailand/bangkok/silom-sathorn/',
  '/thailand/bangkok/sukhumvit-thong-lo/',
  '/thailand/bangkok/siam-ratchaprasong/',
  '/thailand/bangkok/thonburi-khlong-bang-luang/'
];
const thailandChiangMaiEditedRoutes = [
  '/thailand/chiang-mai/',
  '/thailand/chiang-mai/old-city-moat/',
  '/thailand/chiang-mai/wat-ket-ping-river/',
  '/thailand/chiang-mai/doi-suthep-wat-pha-lat/'
];
const thailandAndamanEditedRoutes = [
  '/thailand/andaman/',
  '/thailand/andaman/krabi-railay/',
  '/thailand/andaman/phi-phi-islands/',
  '/thailand/andaman/ko-lanta/',
  '/thailand/andaman/trang-islands/',
  '/thailand/andaman/ko-lipe-tarutao/',
  '/thailand/andaman/similan-surin/'
];
const thailandAyutthayaEditedRoutes = [
  '/thailand/ayutthaya/',
  '/thailand/ayutthaya/wat-mahathat-ratchaburana/',
  '/thailand/ayutthaya/palace-quarter-wat-phra-si-sanphet/',
  '/thailand/ayutthaya/wat-chaiwatthanaram-west-bank/',
  '/thailand/ayutthaya/railway-station-chao-phrom/',
  '/thailand/ayutthaya/west-island-wat-lokayasutharam/',
  '/thailand/ayutthaya/wat-yai-chai-mongkhon-phanan-choeng/',
  '/thailand/ayutthaya/foreign-settlements-south-river/',
  '/thailand/ayutthaya/bang-pa-in-palace/',
];
// The shared narrow-viewport correction is scoped to every France regional route outside Paris city.
const franceResponsiveEditedRoutes = franceClusters
  .filter((cluster) => cluster.slug !== 'paris')
  .flatMap((cluster) => [`/france/${cluster.slug}/`, ...cluster.guides.map((guide) => guide.url)]);
// These route-specific edit dates come from the current source history:
// 15147d0 changed the nine Tokyo routes, 42cdc8b changed five Kyoto guides,
// and 6297cc7 changed Osaka Bay. /japan/ reflects this overview source edit.
// Dates record content changes, not a full re-check of every operating detail.
// The localized URLs inherit each date.
const japanEditedRoutes = [
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
const newRoutes = [
  ['/', italyLastmod, 'weekly', '1.0'],
  ...usaRoutes.map(route=>[route,'2026-09-11','monthly',route==='/usa/'?'0.9':'0.7']),
  ['/about/', italyLastmod, 'monthly', '0.5'],
  ['/japan/hokkaido/', hokkaidoLastmod, 'monthly', '0.8'],
  ['/japan/hokkaido/sapporo/', hokkaidoLastmod, 'monthly', '0.7'],
  ['/japan/hokkaido/otaru-shakotan/', hokkaidoLastmod, 'monthly', '0.7'],
  ['/japan/hokkaido/hakodate-onuma/', hokkaidoLastmod, 'monthly', '0.7'],
  ['/japan/hokkaido/furano-biei/', hokkaidoLastmod, 'monthly', '0.7'],
  ['/japan/hokkaido/asahikawa-daisetsuzan/', hokkaidoLastmod, 'monthly', '0.7'],
  ['/japan/hokkaido/niseko-yoichi/', hokkaidoLastmod, 'monthly', '0.7'],
  ['/italy/', italyLastmod, 'monthly', '0.9'],
  ...italyClusters.map((cluster) => [`/italy/${cluster.slug}/`, ['italian-lakes', 'milan', 'emilia-romagna', 'umbria', 'sorrento-amalfi-capri'].includes(cluster.slug) ? cluster.reviewIsoDate || italyLastmod : cluster.slug === 'rome' ? romeLastmod : cluster.slug === 'siena-southern-tuscany' ? italySienaLastmod : italyLastmod, 'monthly', '0.8']),
  ...italyGuides.map((guide) => [guide.url, ['italian-lakes', 'milan', 'emilia-romagna', 'umbria', 'sorrento-amalfi-capri'].includes(guide.hubSlug) ? italyClusters.find((cluster) => cluster.slug === guide.hubSlug)?.reviewIsoDate || italyLastmod : guide.hubSlug === 'rome' ? romeLastmod : guide.hubSlug === 'siena-southern-tuscany' ? italySienaLastmod : italyLastmod, 'monthly', '0.7']),
  ['/united-kingdom/', unitedKingdomLastmod, 'monthly', '0.9'],
  ...unitedKingdomClusters.map((cluster) => [`/united-kingdom/${cluster.slug}/`, unitedKingdomLastmod, 'monthly', '0.8']),
  ...unitedKingdomGuides.map((guide) => [guide.url, unitedKingdomLastmod, 'monthly', '0.7']),
  ['/france/', franceLastmod, 'monthly', '0.9'],
  ...franceClusters.map((cluster) => [`/france/${cluster.slug}/`, cluster.reviewedOn?.iso || franceLastmod, 'monthly', '0.8']),
  ...franceGuides.map((guide) => [guide.url, guide.reviewedOn?.iso || franceLastmod, 'monthly', '0.7']),
  ['/switzerland/', switzerlandLastmod, 'monthly', '0.9'],
  ...switzerlandClusters.map((cluster) => [`/switzerland/${cluster.slug}/`, switzerlandLastmod, 'monthly', '0.8']),
  ...switzerlandGuides.map((guide) => [guide.url, switzerlandLastmod, 'monthly', '0.7']),
  ['/canada/', canadaLastmod, 'monthly', '0.9'],
  ...canadaClusters.map((cluster) => [`/canada/${cluster.slug}/`, canadaLastmod, 'monthly', '0.8']),
  ...canadaGuides.map((guide) => [guide.url, canadaLastmod, 'monthly', '0.7']),
  ['/malaysia/', malaysiaLastmod, 'monthly', '0.9'],
  ...malaysiaDepthClusters.map((cluster) => [`/malaysia/${cluster.hubSlug}/`, malaysiaLastmod, 'monthly', '0.8']),
  ...malaysiaDepthGuides.map((guide) => [guide.url, malaysiaLastmod, 'monthly', '0.7']),
  ['/vietnam/', vietnamLastmod, 'monthly', '0.9'],
  ...vietnamClusters.map((cluster) => [`/vietnam/${cluster.slug}/`, vietnamLastmod, 'monthly', '0.8']),
  ...vietnamGuides.map((guide) => [guide.url, vietnamLastmod, 'monthly', '0.7']),
  ['/australia/', australiaLastmod, 'monthly', '0.9'],
  ...australiaClusters.map((cluster) => [`/australia/${cluster.slug}/`, australiaLastmod, 'monthly', '0.8']),
  ...australiaGuides.map((guide) => [guide.url, australiaLastmod, 'monthly', '0.7'])
];

function isLocalizedRoute(route) {
  return localeConfigs.some((locale) => route === locale.prefix + '/' || route.startsWith(locale.prefix + '/'));
}

function localizedRoute(route, locale) {
  return locale.prefix ? (route === '/' ? locale.prefix + '/' : locale.prefix + route) : route;
}

const existing = fs.readFileSync(sitemapPath, 'utf8');
const records = new Map();
for (const match of existing.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod><changefreq>([^<]*)<\/changefreq><priority>([^<]*)<\/priority><\/url>/g)) {
  const route = match[1] || '/';
  if (isLocalizedRoute(route)) continue;
  records.set(route, { route, lastmod: match[2], changefreq: match[3], priority: match[4] });
}
for (const [route, lastmod, changefreq, priority] of newRoutes) records.set(route, { route, lastmod, changefreq, priority });
for (const route of malaysiaIpohEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Ipoh route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: malaysiaIpohLastmod });
}
for (const route of malaysiaTamanNegaraEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Taman Negara route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: malaysiaTamanNegaraLastmod });
}
for (const route of malaysiaMelakaEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot preserve edited Melaka route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: malaysiaMelakaLastmod });
}
for (const route of italyPugliaEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Italy Puglia route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: italyPugliaLastmod });
}
for (const route of italyIt12EditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Italy IT12 route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: italyIt12Lastmod });
}
for (const route of chinaEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited China route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: chinaEditedLastmod });
}
for (const route of chinaHangzhouTransitCorrectionRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date corrected Hangzhou route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: chinaHangzhouTransitCorrectionLastmod });
}
for (const route of chinaShanghaiRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date revised Shanghai route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: chinaShanghaiRoutesLastmod });
}
for (const route of chinaBeijingRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date revised Beijing route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: chinaBeijingRoutesLastmod });
}
for (const route of chinaLowerYangtzeRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date reviewed Lower Yangtze route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: chinaLowerYangtzeRoutesLastmod });
}
for (const route of chinaSouthernChinaRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date reviewed southern China route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: chinaSouthernChinaRoutesLastmod });
}
for (const route of chinaCentralRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date reviewed Central China route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: chinaCentralRoutesLastmod });
}
for (const route of chinaNorthernRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date reviewed northern China route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: chinaNorthernRoutesLastmod });
}
for (const route of chinaSouthwestRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date reviewed southwest China route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: chinaSouthwestRoutesLastmod });
}
for (const route of chinaCn14aRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date revised CN14A China route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: chinaCn14aRoutesLastmod });
}
for (const route of chinaCn14bRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date CN14B China route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: chinaCn14bLastmod });
}
for (const route of chinaCN15Routes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date reviewed CN15 China route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: chinaCN15RoutesLastmod });
}
for (const route of unitedKingdomEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited UK route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: unitedKingdomEditedLastmod });
}
for (const route of unitedKingdomPeakEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Peak District route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: unitedKingdomPeakLastmod });
}
for (const route of unitedKingdomBathEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited UK Bath/Bristol/Somerset route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: unitedKingdomBathLastmod });
}
for (const route of unitedKingdomLondonEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited London route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: unitedKingdomLondonLastmod });
}
for (const route of unitedKingdomLiverpoolManchesterEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited UK Liverpool/Manchester route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: unitedKingdomLiverpoolManchesterLastmod });
}
for (const route of unitedKingdomKentSussexEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited UK Kent/Sussex route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: unitedKingdomKentSussexLastmod });
}
for (const route of unitedKingdomBirminghamEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Birmingham/West Midlands route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: unitedKingdomBirminghamLastmod });
}
for (const route of unitedKingdomBelfastEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited UK Belfast route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: unitedKingdomBelfastLastmod });
}
for (const route of unitedKingdomLakeEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited UK Lake route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: unitedKingdomLakeLastmod });
}
for (const route of unitedKingdomNortheastEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited UK Northeast route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: unitedKingdomNortheastLastmod });
}
for (const route of unitedKingdomYorkshireEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited UK Yorkshire route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: unitedKingdomYorkshireLastmod });
}
for (const route of unitedKingdomCambridgeEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited UK Cambridge route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: unitedKingdomCambridgeLastmod });
}
for (const route of unitedKingdomEdinburghEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited UK Edinburgh route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: unitedKingdomEdinburghLastmod });
}
for (const route of unitedKingdomCornwallEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited UK Cornwall route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: unitedKingdomCornwallLastmod });
}
for (const route of unitedKingdomOxfordEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited UK Oxford/Cotswolds route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: unitedKingdomOxfordLastmod });
}
for (const route of unitedKingdomGlasgowEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited UK Glasgow route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: unitedKingdomGlasgowLastmod });
}
// The country overview also renders the latest Peak District hub card; its
// lastmod must follow this batch after earlier Yorkshire and Glasgow updates.
const unitedKingdomOverviewRecord = records.get('/united-kingdom/');
if (!unitedKingdomOverviewRecord) throw new Error('Cannot date UK overview absent from sitemap');
records.set('/united-kingdom/', { ...unitedKingdomOverviewRecord, lastmod: unitedKingdomPeakLastmod });
for (const route of usaEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited U.S. route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: usaEditedLastmod });
}
for (const route of usaFloridaBrightlineRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Florida route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: usaFloridaBrightlineLastmod });
}
for (const route of usaTexasRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot update missing sitemap route ${route}`);
  records.set(route, { ...record, lastmod: usaTexasLastmod });
}
for (const route of usaColoradoRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot update missing sitemap route ${route}`);
  records.set(route, { ...record, lastmod: usaColoradoLastmod });
}
for (const [route, lastmod] of australiaReviewDates) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date reviewed Australia route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod });
}
for (const route of japanEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Japan route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: japanOverviewLastmod });
}
for (const route of malaysiaCameronEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Cameron Highlands route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: malaysiaCameronLastmod });
}
for (const route of malaysiaLangkawiEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Langkawi route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: malaysiaLangkawiLastmod });
}
for (const route of malaysiaFourthChildrenRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Malaysia child route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: malaysiaFourthChildrenLastmod });
}
for (const route of parisEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Paris route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: parisLastmod });
}
for (const route of parisRegionDayTripsEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Paris region day-trip route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: parisRegionDayTripsLastmod });
}
for (const route of franceResponsiveEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date France regional responsive edit route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: franceResponsiveLastmod });
}
for (const route of franceMarseilleEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Marseille/Calanques route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: franceMarseilleLastmod });
}
for (const route of franceProvenceEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Provence Inland route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: franceProvenceLastmod });
}
for (const route of franceFr02EditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited France FR02 route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: franceFr02Lastmod });
}
for (const route of franceDordogneEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Dordogne route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: franceDordogneLastmod });
}
for (const route of franceBrittanyEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Brittany route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: franceBrittanyLastmod });
}
for (const route of franceToulouseOccitanieEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Toulouse/Occitanie route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: franceToulouseOccitanieLastmod });
}
for (const route of franceCoteDAzurEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Côte d’Azur route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: franceCoteDAzurLastmod });
}
for (const route of normandyEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Normandy route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: normandyLastmod });
}
for (const route of lyonReviewedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date reviewed Lyon route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: lyonReviewedLastmod });
}
for (const route of alsaceReviewedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date reviewed Alsace route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: alsaceReviewedLastmod });
}
for (const route of burgundyReviewedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date reviewed Burgundy route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: '2026-10-11' });
}
for (const route of bordeauxGirondeReviewedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date reviewed Bordeaux/Gironde route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: bordeauxGirondeReviewedLastmod });
}

for (const route of victoriaResponsiveEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error('Cannot date Victoria responsive edit route absent from sitemap: ' + route);
  records.set(route, { ...record, lastmod: victoriaResponsiveLastmod });
}

for (const route of zurichEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Zurich route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: zurichLastmod });
}

for (const route of southKoreaEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited South Korea route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: southKoreaLastmod });
}

for (const route of thailandBangkokEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Bangkok route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: thailandBangkokLastmod });
}

for (const route of thailandChiangMaiEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Chiang Mai route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: thailandChiangMaiLastmod });
}

for (const route of thailandAndamanEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Andaman route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: thailandAndamanLastmod });
}

for (const route of thailandAyutthayaEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Ayutthaya route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: thailandAyutthayaLastmod });
}

for (const route of vietnamHueEditedRoutes) {
  const record = records.get(route);
  if (!record) throw new Error(`Cannot date edited Hue route absent from sitemap: ${route}`);
  records.set(route, { ...record, lastmod: vietnamHueLastmod });
}

const english = [...records.values()];
const lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
for (const locale of allLocales) {
  for (const record of english) {
    const route = localizedRoute(record.route, locale);
    lines.push(`  <url><loc>https://tripdistill.com${route}</loc><lastmod>${record.lastmod}</lastmod><changefreq>${record.changefreq}</changefreq><priority>${record.priority}</priority></url>`);
  }
}
lines.push('</urlset>', '');
fs.writeFileSync(sitemapPath, lines.join('\n'));
console.log(`Sitemap synchronized: ${english.length} routes across ${allLocales.length} language editions (${english.length * allLocales.length} URLs).`);
