const stageLabels = ['Arrive', 'Read', 'Deepen', 'Exit'];

export function defineVietnamCluster(cluster) {
  if (!cluster?.slug || !cluster?.name || !Array.isArray(cluster.guides) || cluster.guides.length !== 6) {
    throw new Error(`Vietnam cluster ${cluster?.slug || '(unnamed)'} must define exactly six guides.`);
  }
  const seen = new Set();
  const guides = cluster.guides.map((guide, index) => {
    if (!guide.slug || seen.has(guide.slug)) throw new Error(`Invalid or duplicate guide slug in ${cluster.slug}: ${guide.slug}`);
    seen.add(guide.slug);
    if (!guide.image?.src || !guide.image?.source || !guide.image?.creator || !guide.image?.license) {
      throw new Error(`Vietnam guide ${cluster.slug}/${guide.slug} lacks complete image provenance.`);
    }
    if (!Array.isArray(guide.stages) || guide.stages.length !== 4) {
      throw new Error(`Vietnam guide ${cluster.slug}/${guide.slug} must define four route stages.`);
    }
    if (!Array.isArray(guide.risks) || guide.risks.length !== 3) {
      throw new Error(`Vietnam guide ${cluster.slug}/${guide.slug} must define three weak-point checks.`);
    }
    return {
      ...guide,
      chapter: index + 1,
      hubSlug: cluster.slug,
      hubName: cluster.name,
      region: cluster.region,
      family: cluster.family,
      url: `/vietnam/${cluster.slug}/${guide.slug}/`,
      decisions: [
        ['Arrival contract', guide.arrival],
        ['Route logic', guide.sequence],
        ['Keep the boundary', guide.boundary]
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

export function image(source) {
  return {
    editNote: 'Resized, display-cropped and converted to WebP; no other material edits.',
    ...source
  };
}
