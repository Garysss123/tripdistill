const routeLabels = ['Arrive', 'Cross the threshold', 'Use the layer', 'Protect the return'];
export const italyLayoutFamilies = new Set([
  'booked-door-score', 'rail-to-street-braid', 'lagoon-waterline', 'hill-town-section',
  'ztl-threshold-ring', 'excavation-traverse', 'coast-capacity-braid', 'island-return-billet',
  'summit-operating-stack', 'two-shore-clock', 'piazza-circuit', 'collection-attention-spread',
  'market-daypart-table', 'living-sacred-threshold', 'volcano-status-board', 'road-stage-folio'
]);

export function italyGuide(definition) {
  const required = [
    'slug', 'name', 'instrument', 'layout', 'imageQuery', 'imageAlt',
    'purpose', 'summary', 'access', 'tradeoff', 'fallback', 'duration',
    'combine', 'verify'
  ];
  for (const key of required) {
    if (!definition?.[key]) throw new Error(`Italy guide ${definition?.slug || '(unnamed)'} lacks ${key}.`);
  }
  if (!Array.isArray(definition.choices) || definition.choices.length !== 3) {
    throw new Error(`Italy guide ${definition.slug} must define three meaningful choices.`);
  }
  if (!Array.isArray(definition.stages) || definition.stages.length !== 4) {
    throw new Error(`Italy guide ${definition.slug} must define four route stages.`);
  }
  if (!Array.isArray(definition.watch) || definition.watch.length !== 3) {
    throw new Error(`Italy guide ${definition.slug} must define three specific failure points.`);
  }
  if (!Array.isArray(definition.sources) || definition.sources.length < 2) {
    throw new Error(`Italy guide ${definition.slug} must define at least two relevant official sources.`);
  }
  const structure = definition.structure || definition.layout;
  if (!italyLayoutFamilies.has(structure)) {
    throw new Error(`Italy guide ${definition.slug} uses unknown structure family ${structure}.`);
  }
  return { ...definition, structure };
}

export function defineItalyCluster(cluster) {
  const required = [
    'slug', 'name', 'region', 'band', 'family', 'label', 'tagline',
    'hubIntro', 'stay', 'transfer', 'season', 'fallback'
  ];
  for (const key of required) {
    if (!cluster?.[key]) throw new Error(`Italy cluster ${cluster?.slug || '(unnamed)'} lacks ${key}.`);
  }
  if (!Array.isArray(cluster.sources) || cluster.sources.length < 3) {
    throw new Error(`Italy cluster ${cluster.slug} must define at least three official sources.`);
  }
  if (!Array.isArray(cluster.guides) || cluster.guides.length !== 3) {
    throw new Error(`Italy cluster ${cluster.slug} must define exactly three focused guides.`);
  }
  const seen = new Set();
  const guides = cluster.guides.map((guide, index) => {
    if (seen.has(guide.slug)) throw new Error(`Duplicate Italy guide slug in ${cluster.slug}: ${guide.slug}`);
    seen.add(guide.slug);
    return {
      ...guide,
      chapter: index + 1,
      hubSlug: cluster.slug,
      hubName: cluster.name,
      region: cluster.region,
      family: cluster.family,
      url: `/italy/${cluster.slug}/${guide.slug}/`,
      route: guide.stages.map((stage, stageIndex) => [routeLabels[stageIndex], stage[0], stage[1]]),
      faq: [
        [`How much time should I give ${guide.name}?`, guide.duration],
        [`What should I combine with ${guide.name}?`, guide.combine],
        ['What should I verify before leaving?', guide.verify]
      ]
    };
  });
  return { ...cluster, guides };
}

export const italyImageEditNote = 'Resized, display-cropped and converted to WebP; no other material edits.';
