import { vietnamNorthClusters } from './vietnam-north-guides.mjs';
import { vietnamCentralClusters } from './vietnam-central-guides.mjs';
import { vietnamSouthClusters } from './vietnam-south-guides.mjs';

const order = [
  'hanoi',
  'sapa-northwest-highlands',
  'ha-giang',
  'ha-long-cat-ba',
  'ninh-binh',
  'phong-nha-ke-bang',
  'hue',
  'da-nang-hoi-an',
  'nha-trang-khanh-hoa',
  'da-lat-central-highlands',
  'mui-ne-binh-thuan',
  'ho-chi-minh-city',
  'mekong-delta',
  'phu-quoc-southern-islands'
];
const bandBySlug = new Map([
  ...order.slice(0, 6).map((slug) => [slug, 'north']),
  ...order.slice(6, 10).map((slug) => [slug, 'central']),
  ...order.slice(10).map((slug) => [slug, 'south'])
]);
const rank = new Map(order.map((slug, index) => [slug, index]));
const rawClusters = [...vietnamNorthClusters, ...vietnamCentralClusters, ...vietnamSouthClusters];

if (rawClusters.length !== order.length) throw new Error(`Expected ${order.length} Vietnam clusters, found ${rawClusters.length}.`);
if (new Set(rawClusters.map((cluster) => cluster.slug)).size !== rawClusters.length) throw new Error('Vietnam cluster slugs must be unique.');
for (const slug of order) if (!rawClusters.some((cluster) => cluster.slug === slug)) throw new Error(`Missing Vietnam cluster: ${slug}`);

export const vietnamClusters = rawClusters
  .map((cluster) => ({ ...cluster, band: bandBySlug.get(cluster.slug) }))
  .sort((left, right) => rank.get(left.slug) - rank.get(right.slug));

export const vietnamGuides = vietnamClusters.flatMap((cluster) => cluster.guides);

if (vietnamGuides.length !== 84) throw new Error(`Expected 84 Vietnam child guides, found ${vietnamGuides.length}.`);
if (new Set(vietnamGuides.map((guide) => guide.url)).size !== vietnamGuides.length) throw new Error('Vietnam guide URLs must be unique.');

export const vietnamCountrySources = [
  ['https://vietnam.travel/place-to-go', 'Vietnam Tourism — official destinations and regional planning'],
  ['https://evisa.gov.vn/?option=MO', 'Vietnam Immigration Department — official e-visa portal'],
  ['https://dsvn.vn/?bk=english', 'Vietnam Railways — official passenger booking and schedules'],
  ['https://acv.vn/en/airports-2', 'Airports Corporation of Vietnam — official airport directory'],
  ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — official forecasts and warnings'],
  ['https://www.vietnam.travel/things-to-do/how-travel-responsibly-vietnam', 'Vietnam Tourism — responsible travel guidance'],
  ['https://whc.unesco.org/en/statesparties/vn', 'UNESCO World Heritage Centre — Vietnam properties and conservation records']
];
