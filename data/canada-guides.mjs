import { canadaWestClusters } from './canada-west-guides.mjs';
import { canadaCentralClusters } from './canada-central-guides.mjs';
import { canadaAtlanticNorthClusters } from './canada-atlantic-north-guides.mjs';
import { canadaImageManifest } from './canada-image-manifest.mjs';
import { canadaImageEditNote } from './canada-guide-builder.mjs';

const bySlug = new Map([
  ...canadaWestClusters,
  ...canadaCentralClusters,
  ...canadaAtlanticNorthClusters
].map((cluster) => [cluster.slug, cluster]));

const orderedSlugs = [
  'vancouver-north-shore',
  'victoria-south-island',
  'pacific-rim-tofino',
  'banff-lake-louise',
  'jasper-icefields',
  'calgary-badlands',
  'toronto',
  'niagara',
  'ottawa-gatineau',
  'montreal',
  'quebec-city-charlevoix',
  'saguenay-tadoussac',
  'halifax-nova-scotia',
  'prince-edward-island',
  'newfoundland-labrador',
  'winnipeg-churchill',
  'whitehorse-kluane',
  'yellowknife-great-slave'
];

export const canadaClusters = orderedSlugs.map((slug) => {
  const cluster = bySlug.get(slug);
  if (!cluster) throw new Error(`Missing Canada cluster ${slug}.`);
  return {
    ...cluster,
    guides: cluster.guides.map((guide) => {
      const key = `${cluster.slug}/${guide.slug}`;
      const manifestImage = canadaImageManifest[key];
      const image = manifestImage?.inventoryStatus === 'unused' ? null : manifestImage;
      if (!image && !guide.mapTreatment) throw new Error(`Missing verified Canada image manifest entry or map treatment: ${key}`);
      if (image && guide.mapTreatment) throw new Error(`Canada guide cannot use both a photo and map treatment: ${key}`);
      return { ...guide, image: image ? { ...image, editNote: canadaImageEditNote } : null };
    })
  };
});

if (bySlug.size !== orderedSlugs.length) {
  throw new Error(`Canada cluster parity failed: expected ${orderedSlugs.length}, found ${bySlug.size}.`);
}

export const canadaGuides = canadaClusters.flatMap((cluster) => cluster.guides);

if (canadaClusters.length !== 18 || canadaGuides.length !== 54) {
  throw new Error(`Canada route model failed: ${canadaClusters.length} hubs and ${canadaGuides.length} guides.`);
}

const routeSet = new Set(canadaGuides.map((guide) => guide.url));
const imageGuides = canadaGuides.filter((guide) => guide.image);
const assetSet = new Set(imageGuides.map((guide) => guide.image.src));
const instrumentSet = new Set(canadaGuides.map((guide) => guide.instrument));
const familySet = new Set(canadaClusters.map((cluster) => cluster.family));
if (routeSet.size !== canadaGuides.length) throw new Error('Canada guide routes must be unique.');
if (assetSet.size !== imageGuides.length) throw new Error('Canada guide images must be unique.');
if (canadaGuides.some((guide) => Boolean(guide.image) === Boolean(guide.mapTreatment))) throw new Error('Every Canada guide must have exactly one photo or map treatment.');
if (instrumentSet.size !== canadaGuides.length) throw new Error('Canada guide instruments must be unique.');
if (familySet.size !== canadaClusters.length) throw new Error('Canada hub families must be unique.');

export const canadaCountrySources = [
  ['https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html', 'Immigration, Refugees and Citizenship Canada — visitor entry information'],
  ['https://weather.gc.ca/', 'Environment and Climate Change Canada — weather and alerts'],
  ['https://parks.canada.ca/voyage-travel/reserve', 'Parks Canada — current reservations and seasonal booking windows'],
  ['https://parks.canada.ca/voyage-travel', 'Parks Canada — destination planning and visitor services'],
  ['https://travel.gc.ca/', 'Government of Canada — travel and transportation information'],
  ['https://www.viarail.ca/en/plan/train-schedules', 'VIA Rail Canada — current train schedules'],
  ['https://parks.canada.ca/pn-np/mb/wapusk/visit', 'Parks Canada — Churchill and Wapusk access; no road access to Churchill'],
  ['https://drivenwt.ca/', 'Government of the Northwest Territories — current highways and winter roads'],
  ['https://www.nwtparks.ca/visiting-parks/operating-dates', 'Northwest Territories Parks — seasonal operating dates']
];
