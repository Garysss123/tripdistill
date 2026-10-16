import { italyCentralCampaniaClusters } from './italy-central-campania-guides.mjs';
import { italyCentralNortheastClusters } from './italy-central-northeast-guides.mjs';
import { italyNorthwestAdriaticClusters } from './italy-northwest-adriatic-guides.mjs';
import { italySouthIslandsClusters } from './italy-south-islands-guides.mjs';
import { italyCountryIt12, italyIt12Refresh } from './italy-it12-content.mjs';
import { italyImageManifest } from './italy-image-manifest.mjs';
import { italyImageEditNote } from './italy-guide-builder.mjs';

export const italyCountrySources = [
  ['https://www.italia.it/en', 'Italia.it — official national tourism portal'],
  ['https://www.italia.it/en/italy/practical-information/how-to-travel-around-italy', 'Italia.it — official travel-around-Italy guidance'],
  ['https://www.trenitalia.com/en.html', 'Trenitalia — official national and regional rail planning'],
  ['https://www.it-alert.gov.it/en/how-it-works/', 'IT-alert — official public warning information']
];

const italyBaseSourceClusters = [
  ...italyCentralCampaniaClusters,
  ...italyCentralNortheastClusters,
  ...italyNorthwestAdriaticClusters,
  ...italySouthIslandsClusters
];

export const italySourceClusters = italyBaseSourceClusters.map((cluster) => {
  const { guides: guideUpdates, ...clusterUpdate } = italyIt12Refresh[cluster.slug] || {};
  if (!guideUpdates) return cluster;
  const knownGuides = new Set(cluster.guides.map((guide) => guide.slug));
  for (const slug of Object.keys(guideUpdates)) {
    if (!knownGuides.has(slug)) throw new Error(`IT12 refresh references unknown ${cluster.slug} guide ${slug}.`);
  }
  const mergedCluster = { ...cluster, ...clusterUpdate };
  return {
    ...mergedCluster,
    guides: mergedCluster.guides.map((guide) => {
      const update = guideUpdates[guide.slug];
      if (!update) throw new Error(`IT12 refresh omitted ${cluster.slug}/${guide.slug}.`);
      const merged = { ...guide, ...update };
      // Share the checked cluster logistics verbatim across its three focused pages;
      // keep the route-specific walk sequence as the child-level plan.
      return { ...merged, localPlan: {
        ...merged.localPlan,
        intro: mergedCluster.tagline,
        stay: mergedCluster.stay,
        booking: mergedCluster.season,
        season: mergedCluster.fallback
      } };
    })
  };
});

export { italyCountryIt12 };

if (italySourceClusters.length !== 20) {
  throw new Error(`Expected 20 Italy hubs, found ${italySourceClusters.length}.`);
}

export const italyClusters = italySourceClusters.map((cluster) => ({
  ...cluster,
  guides: cluster.guides.map((guide) => {
    const key = `${cluster.slug}/${guide.slug}`;
    const image = italyImageManifest[key];
    if (!image) throw new Error(`Missing Italy image manifest entry: ${key}`);
    return { ...guide, image: { ...image, editNote: image.editNote || italyImageEditNote } };
  })
}));

export const italyGuides = italyClusters.flatMap((cluster) => cluster.guides);

if (italyGuides.length !== 60) {
  throw new Error(`Expected 60 Italy focused guides, found ${italyGuides.length}.`);
}

const routes = [
  '/italy/',
  ...italyClusters.map((cluster) => `/italy/${cluster.slug}/`),
  ...italyGuides.map((guide) => guide.url)
];
if (new Set(routes).size !== 81) throw new Error('Italy route set must contain 81 unique English routes.');

if (new Set(italyClusters.map((cluster) => cluster.family)).size !== italyClusters.length) {
  throw new Error('Italy hub families must be unique.');
}

if (new Set(italyGuides.map((guide) => guide.instrument)).size !== italyGuides.length) {
  throw new Error('Italy planning instruments must be unique.');
}
