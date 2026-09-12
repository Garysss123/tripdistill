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
      const image = canadaImageManifest[key];
      if (!image) throw new Error(`Missing verified Canada image manifest entry: ${key}`);
      return { ...guide, image: { ...image, editNote: canadaImageEditNote } };
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
const assetSet = new Set(canadaGuides.map((guide) => guide.image.src));
const instrumentSet = new Set(canadaGuides.map((guide) => guide.instrument));
const familySet = new Set(canadaClusters.map((cluster) => cluster.family));
if (routeSet.size !== canadaGuides.length) throw new Error('Canada guide routes must be unique.');
if (assetSet.size !== canadaGuides.length) throw new Error('Canada guide images must be unique.');
if (instrumentSet.size !== canadaGuides.length) throw new Error('Canada guide instruments must be unique.');
if (familySet.size !== canadaClusters.length) throw new Error('Canada hub families must be unique.');

export const canadaCountrySources = [
  ['https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html', 'Immigration, Refugees and Citizenship Canada — visitor entry information'],
  ['https://weather.gc.ca/', 'Environment and Climate Change Canada — weather and alerts'],
  ['https://parks.canada.ca/', 'Parks Canada — national parks, historic sites and marine conservation areas'],
  ['https://travel.gc.ca/', 'Government of Canada — travel and transportation information'],
  ['https://www.viarail.ca/en', 'VIA Rail Canada — intercity passenger rail']
];
