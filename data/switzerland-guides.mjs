import { switzerlandWestClusters } from './switzerland-west-guides.mjs';
import { switzerlandAlpsEastClusters } from './switzerland-alps-east-guides.mjs';
import { switzerlandImageManifest } from './switzerland-image-manifest.mjs';
import { switzerlandImageEditNote } from './switzerland-guide-builder.mjs';

export const switzerlandCountrySources = [
  ['https://www.myswitzerland.com/en/', 'Switzerland Tourism'],
  ['https://www.sbb.ch/en', 'SBB — national rail and public transport planning'],
  ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss'],
  ['https://www.bazg.admin.ch/en/travel-and-purchases-allowances-and-duty-free-limit', 'Swiss Federal Office for Customs and Border Security — travel information']
];

export const switzerlandSourceClusters = [...switzerlandWestClusters, ...switzerlandAlpsEastClusters];

if (switzerlandSourceClusters.length !== 16) {
  throw new Error(`Expected 16 Switzerland hubs, found ${switzerlandSourceClusters.length}.`);
}

export const switzerlandClusters = switzerlandSourceClusters.map((cluster) => ({
  ...cluster,
  guides: cluster.guides.map((guide) => {
    const key = `${cluster.slug}/${guide.slug}`;
    const image = switzerlandImageManifest[key];
    if (!image) throw new Error(`Missing Switzerland image manifest entry: ${key}`);
    return { ...guide, image: { ...image, editNote: switzerlandImageEditNote } };
  })
}));

export const switzerlandGuides = switzerlandClusters.flatMap((cluster) => cluster.guides);

if (switzerlandGuides.length !== 48) {
  throw new Error(`Expected 48 Switzerland focused guides, found ${switzerlandGuides.length}.`);
}

const routes = ['/switzerland/', ...switzerlandClusters.map((cluster) => `/switzerland/${cluster.slug}/`), ...switzerlandGuides.map((guide) => guide.url)];
if (new Set(routes).size !== 65) throw new Error('Switzerland route set must contain 65 unique English routes.');

if (new Set(switzerlandClusters.map((cluster) => cluster.family)).size !== switzerlandClusters.length) {
  throw new Error('Switzerland hub families must be unique.');
}

if (new Set(switzerlandGuides.map((guide) => guide.instrument)).size !== switzerlandGuides.length) {
  throw new Error('Switzerland planning instruments must be unique.');
}
