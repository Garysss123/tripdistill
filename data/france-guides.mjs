import { franceNorthWestClusters } from './france-north-west-guides.mjs';
import { franceCentralEastClusters } from './france-central-east-guides.mjs';
import { franceAtlanticSouthwestClusters } from './france-atlantic-southwest-guides.mjs';
import { franceMediterraneanClusters } from './france-mediterranean-guides.mjs';
import { franceImageManifest } from './france-image-manifest.mjs';
import { franceImageEditNote } from './france-guide-builder.mjs';

export const franceCountrySources = [
  ['https://www.france.fr/en/', 'France.fr — official destination guide'],
  ['https://www.sncf-connect.com/en-en/', 'SNCF Connect — national and regional rail planning'],
  ['https://meteofrance.com/', 'Météo-France — official forecasts and warnings'],
  ['https://france-visas.gouv.fr/en/', 'France Visas — official entry information']
];

export const franceSourceClusters = [
  ...franceNorthWestClusters,
  ...franceCentralEastClusters,
  ...franceAtlanticSouthwestClusters,
  ...franceMediterraneanClusters
];

if (franceSourceClusters.length !== 20) {
  throw new Error(`Expected 20 France hubs, found ${franceSourceClusters.length}.`);
}

export const franceClusters = franceSourceClusters.map((cluster) => ({
  ...cluster,
  guides: cluster.guides.map((guide) => {
    const key = `${cluster.slug}/${guide.slug}`;
    const image = franceImageManifest[key];
    if (!image) throw new Error(`Missing France image manifest entry: ${key}`);
    return { ...guide, image: { ...image, editNote: franceImageEditNote } };
  })
}));

export const franceGuides = franceClusters.flatMap((cluster) => cluster.guides);

if (franceGuides.length !== 60) {
  throw new Error(`Expected 60 France focused guides, found ${franceGuides.length}.`);
}

const routes = [
  '/france/',
  ...franceClusters.map((cluster) => `/france/${cluster.slug}/`),
  ...franceGuides.map((guide) => guide.url)
];
if (new Set(routes).size !== 81) throw new Error('France route set must contain 81 unique English routes.');

if (new Set(franceClusters.map((cluster) => cluster.family)).size !== franceClusters.length) {
  throw new Error('France hub families must be unique.');
}

if (new Set(franceGuides.map((guide) => guide.instrument)).size !== franceGuides.length) {
  throw new Error('France planning instruments must be unique.');
}
