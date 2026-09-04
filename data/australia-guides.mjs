import { australiaEastClusters } from './australia-east-guides.mjs';
import { australiaSouthClusters } from './australia-south-guides.mjs';
import { australiaNorthClusters } from './australia-north-guides.mjs';
import { australiaWestIslandClusters } from './australia-west-islands-guides.mjs';
import { australiaImageManifest } from './australia-image-manifest.mjs';
import { australiaImageEditNote } from './australia-guide-builder.mjs';

const bySlug = new Map([
  ...australiaEastClusters,
  ...australiaSouthClusters,
  ...australiaNorthClusters,
  ...australiaWestIslandClusters
].map((cluster) => [cluster.slug, cluster]));

const orderedSlugs = [
  'sydney-harbour-coast',
  'blue-mountains-nsw-coast',
  'melbourne-port-phillip',
  'great-ocean-road-gariwerd',
  'brisbane-moreton-bay',
  'gold-coast-scenic-rim',
  'cairns-wet-tropics',
  'whitsundays-great-barrier-reef',
  'darwin-top-end',
  'red-centre',
  'perth-fremantle-rottnest',
  'margaret-river-southwest',
  'broome-kimberley',
  'adelaide-wine-island',
  'tasmania',
  'canberra-australian-alps'
];

export const australiaClusters = orderedSlugs.map((slug) => {
  const cluster = bySlug.get(slug);
  if (!cluster) throw new Error(`Missing Australia cluster ${slug}.`);
  return {
    ...cluster,
    guides: cluster.guides.map((guide) => {
      const key = `${cluster.slug}/${guide.slug}`;
      const image = australiaImageManifest[key];
      if (!image) throw new Error(`Missing verified Australia image manifest entry: ${key}`);
      return { ...guide, image: { ...image, editNote: australiaImageEditNote } };
    })
  };
});

if (bySlug.size !== orderedSlugs.length) {
  throw new Error(`Australia cluster parity failed: expected ${orderedSlugs.length}, found ${bySlug.size}.`);
}

export const australiaGuides = australiaClusters.flatMap((cluster) => cluster.guides);

if (australiaClusters.length !== 16 || australiaGuides.length !== 80) {
  throw new Error(`Australia route model failed: ${australiaClusters.length} hubs and ${australiaGuides.length} guides.`);
}

const routeSet = new Set(australiaGuides.map((guide) => guide.url));
const assetSet = new Set(australiaGuides.map((guide) => guide.image.src));
if (routeSet.size !== australiaGuides.length) throw new Error('Australia guide routes must be unique.');
if (assetSet.size !== australiaGuides.length) throw new Error('Australia guide images must be unique.');

export const australiaCountrySources = [
  ['https://www.australia.com/en/places.html', 'Tourism Australia — destinations, states and territories'],
  ['https://www.australia.com/en/facts-and-planning/getting-around.html', 'Tourism Australia — getting around and continental distances'],
  ['https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder', 'Australian Department of Home Affairs — visa finder'],
  ['https://www.bom.gov.au/australia/index.shtml', 'Australian Bureau of Meteorology — national weather and warnings'],
  ['https://parksaustralia.gov.au/', 'Parks Australia — Commonwealth national parks']
];
