import { unitedKingdomEnglandSouthClusters } from './united-kingdom-england-south-guides.mjs';
import { unitedKingdomEnglandMidlandsNorthClusters } from './united-kingdom-england-midlands-north-guides.mjs';
import { unitedKingdomEnglandNorthScotlandClusters } from './united-kingdom-england-north-scotland-guides.mjs';
import { unitedKingdomIslandsWalesNiClusters } from './united-kingdom-islands-wales-ni-guides.mjs';
import { unitedKingdomImageManifest } from './united-kingdom-image-manifest.mjs';
import { unitedKingdomImageEditNote } from './united-kingdom-guide-builder.mjs';

export const unitedKingdomCountrySources = [
  ['https://www.visitbritain.com/en', 'VisitBritain — official destination guide'],
  ['https://www.nationalrail.co.uk/', 'National Rail — rail planning and disruption information'],
  ['https://www.metoffice.gov.uk/', 'Met Office — official forecasts and warnings'],
  ['https://www.gov.uk/uk-border-control', 'GOV.UK — official border control information']
];

export const unitedKingdomSourceClusters = [
  ...unitedKingdomEnglandSouthClusters,
  ...unitedKingdomEnglandMidlandsNorthClusters,
  ...unitedKingdomEnglandNorthScotlandClusters,
  ...unitedKingdomIslandsWalesNiClusters
];

if (unitedKingdomSourceClusters.length !== 20) {
  throw new Error(`Expected 20 United Kingdom hubs, found ${unitedKingdomSourceClusters.length}.`);
}

export const unitedKingdomClusters = unitedKingdomSourceClusters.map((cluster) => ({
  ...cluster,
  guides: cluster.guides.map((guide) => {
    const key = `${cluster.slug}/${guide.slug}`;
    const image = unitedKingdomImageManifest[key];
    if (!image) throw new Error(`Missing United Kingdom image manifest entry: ${key}`);
    return { ...guide, image: { ...image, editNote: unitedKingdomImageEditNote } };
  })
}));

export const unitedKingdomGuides = unitedKingdomClusters.flatMap((cluster) => cluster.guides);

if (unitedKingdomGuides.length !== 60) {
  throw new Error(`Expected 60 United Kingdom focused guides, found ${unitedKingdomGuides.length}.`);
}

const routes = [
  '/united-kingdom/',
  ...unitedKingdomClusters.map((cluster) => `/united-kingdom/${cluster.slug}/`),
  ...unitedKingdomGuides.map((guide) => guide.url)
];
if (new Set(routes).size !== 81) throw new Error('United Kingdom route set must contain 81 unique English routes.');

if (new Set(unitedKingdomClusters.map((cluster) => cluster.family)).size !== unitedKingdomClusters.length) {
  throw new Error('United Kingdom hub families must be unique.');
}

if (new Set(unitedKingdomGuides.map((guide) => guide.instrument)).size !== unitedKingdomGuides.length) {
  throw new Error('United Kingdom planning instruments must be unique.');
}
