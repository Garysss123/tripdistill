const stageLabels = ['Orient', 'Move', 'Read', 'Return'];

export function australiaGuide(definition) {
  const required = ['slug', 'name', 'motif', 'instrument', 'imageQuery', 'imageAlt', 'summary', 'orientation', 'access', 'sequence', 'boundary', 'duration', 'combine', 'verify'];
  for (const key of required) {
    if (!definition?.[key]) throw new Error(`Australia guide ${definition?.slug || '(unnamed)'} lacks ${key}.`);
  }
  if (!Array.isArray(definition.stages) || definition.stages.length !== 4) {
    throw new Error(`Australia guide ${definition.slug} must define four route stages.`);
  }
  if (!Array.isArray(definition.risks) || definition.risks.length !== 3) {
    throw new Error(`Australia guide ${definition.slug} must define three weak-point checks.`);
  }
  return definition;
}

export function defineAustraliaCluster(cluster) {
  if (!cluster?.slug || !cluster?.name || !cluster?.region || !cluster?.family || !Array.isArray(cluster.guides) || cluster.guides.length !== 5) {
    throw new Error(`Australia cluster ${cluster?.slug || '(unnamed)'} must define exactly five guides.`);
  }
  if (!Array.isArray(cluster.sources) || cluster.sources.length < 3) {
    throw new Error(`Australia cluster ${cluster.slug} must define at least three official sources.`);
  }
  const seen = new Set();
  const guides = cluster.guides.map((guide, index) => {
    if (seen.has(guide.slug)) throw new Error(`Duplicate Australia guide slug in ${cluster.slug}: ${guide.slug}`);
    seen.add(guide.slug);
    return {
      ...guide,
      chapter: index + 1,
      hubSlug: cluster.slug,
      hubName: cluster.name,
      region: cluster.region,
      band: cluster.band,
      family: cluster.family,
      url: `/australia/${cluster.slug}/${guide.slug}/`,
      lead: `${guide.summary} The useful plan begins by asking you to ${guide.orientation.charAt(0).toLowerCase()}${guide.orientation.slice(1)} It then protects the return before adding another distant stop.`,
      decisions: [
        ['Arrival contract', guide.access],
        ['Route logic', guide.sequence],
        ['Country and care boundary', guide.boundary]
      ],
      route: guide.stages.map((stage, stageIndex) => [stageLabels[stageIndex], stage[0], stage[1]]),
      checks: guide.risks,
      faq: [
        [`How much time should ${guide.name} receive?`, guide.duration],
        [`Can I combine ${guide.name} with another major chapter?`, guide.combine],
        ['What should I verify before leaving?', guide.verify]
      ]
    };
  });
  return { ...cluster, guides };
}

export const australiaImageEditNote = 'Resized, display-cropped and converted to WebP; no other material edits.';
