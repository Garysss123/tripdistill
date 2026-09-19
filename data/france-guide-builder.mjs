const routeLabels = ['Arrive', 'Read the place', 'Commit', 'Return'];

export function franceGuide(definition) {
  const required = [
    'slug', 'name', 'instrument', 'layout', 'imageQuery', 'imageAlt',
    'purpose', 'summary', 'access', 'tradeoff', 'fallback', 'duration',
    'combine', 'verify'
  ];
  for (const key of required) {
    if (!definition?.[key]) throw new Error(`France guide ${definition?.slug || '(unnamed)'} lacks ${key}.`);
  }
  if (!Array.isArray(definition.choices) || definition.choices.length !== 3) {
    throw new Error(`France guide ${definition.slug} must define three meaningful choices.`);
  }
  if (!Array.isArray(definition.stages) || definition.stages.length !== 4) {
    throw new Error(`France guide ${definition.slug} must define four route stages.`);
  }
  if (!Array.isArray(definition.watch) || definition.watch.length !== 3) {
    throw new Error(`France guide ${definition.slug} must define three specific failure points.`);
  }
  if (!Array.isArray(definition.sources) || definition.sources.length < 2) {
    throw new Error(`France guide ${definition.slug} must define at least two relevant official sources.`);
  }
  return definition;
}

export function defineFranceCluster(cluster) {
  const required = [
    'slug', 'name', 'region', 'band', 'family', 'label', 'tagline',
    'hubIntro', 'stay', 'transfer', 'season', 'fallback'
  ];
  for (const key of required) {
    if (!cluster?.[key]) throw new Error(`France cluster ${cluster?.slug || '(unnamed)'} lacks ${key}.`);
  }
  if (!Array.isArray(cluster.sources) || cluster.sources.length < 3) {
    throw new Error(`France cluster ${cluster.slug} must define at least three official sources.`);
  }
  if (!Array.isArray(cluster.guides) || cluster.guides.length !== 3) {
    throw new Error(`France cluster ${cluster.slug} must define exactly three focused guides.`);
  }
  const seen = new Set();
  const guides = cluster.guides.map((guide, index) => {
    if (seen.has(guide.slug)) throw new Error(`Duplicate France guide slug in ${cluster.slug}: ${guide.slug}`);
    seen.add(guide.slug);
    return {
      ...guide,
      chapter: index + 1,
      hubSlug: cluster.slug,
      hubName: cluster.name,
      region: cluster.region,
      family: cluster.family,
      url: `/france/${cluster.slug}/${guide.slug}/`,
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

export const franceImageEditNote = 'Resized, display-cropped and converted to WebP; no other material edits.';
