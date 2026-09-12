const stageLabels = ['Arrive', 'Move', 'Read', 'Return'];

export function canadaGuide(definition) {
  const required = ['slug', 'name', 'instrument', 'layout', 'imageQuery', 'imageAlt', 'summary', 'access', 'tradeoff', 'fallback', 'duration', 'combine', 'verify'];
  for (const key of required) {
    if (!definition?.[key]) throw new Error(`Canada guide ${definition?.slug || '(unnamed)'} lacks ${key}.`);
  }
  if (!Array.isArray(definition.stages) || definition.stages.length !== 4) {
    throw new Error(`Canada guide ${definition.slug} must define four route stages.`);
  }
  if (!Array.isArray(definition.watch) || definition.watch.length !== 3) {
    throw new Error(`Canada guide ${definition.slug} must define three watch points.`);
  }
  return definition;
}

export function defineCanadaCluster(cluster) {
  const required = ['slug', 'name', 'region', 'band', 'family', 'label', 'tagline', 'hubIntro', 'stay', 'transfer', 'season', 'fallback'];
  for (const key of required) {
    if (!cluster?.[key]) throw new Error(`Canada cluster ${cluster?.slug || '(unnamed)'} lacks ${key}.`);
  }
  if (!Array.isArray(cluster.sources) || cluster.sources.length < 3) {
    throw new Error(`Canada cluster ${cluster.slug} must define at least three official sources.`);
  }
  if (!Array.isArray(cluster.guides) || cluster.guides.length !== 3) {
    throw new Error(`Canada cluster ${cluster.slug} must define exactly three focused guides.`);
  }
  const seen = new Set();
  const guides = cluster.guides.map((guide, index) => {
    if (seen.has(guide.slug)) throw new Error(`Duplicate Canada guide slug in ${cluster.slug}: ${guide.slug}`);
    seen.add(guide.slug);
    return {
      ...guide,
      chapter: index + 1,
      hubSlug: cluster.slug,
      hubName: cluster.name,
      region: cluster.region,
      family: cluster.family,
      url: `/canada/${cluster.slug}/${guide.slug}/`,
      decisions: [
        ['Arrival and base', guide.access],
        ['What this day gives you', guide.tradeoff],
        ['Weather or closure fallback', guide.fallback]
      ],
      route: guide.stages.map((stage, stageIndex) => [stageLabels[stageIndex], stage[0], stage[1]]),
      checks: guide.watch,
      faq: [
        [`How much time should ${guide.name} receive?`, guide.duration],
        [`Can I combine ${guide.name} with another major Canada stop?`, guide.combine],
        ['What should I verify before leaving?', guide.verify]
      ]
    };
  });
  return { ...cluster, guides };
}

export const canadaImageEditNote = 'Resized, display-cropped and converted to WebP; no other material edits.';
