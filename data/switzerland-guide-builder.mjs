const routeLabels = ['Arrive', 'Orient', 'Commit', 'Return'];

const guideEditorialExtensions = {
  'muottas-diavolezza': {
    combine: 'A short Pontresina or St Moritz block is enough; keep the second mountain system for another clear window so visibility, not sunk cost, chooses the higher excursion.'
  },
  'chur-rhine-gorge': {
    duration: 'Allow two to three hours for the old town alone and most of a day when a verified gorge rail or walking segment is part of the plan; the transfer to the chosen exit station belongs inside that time budget.'
  },
  'davos-parsenn': {
    verify: 'Check Davos Klosters lift status, RhB trains, MeteoSwiss and the current trail or snow report for the exact mountain sector you intend to use before leaving the valley floor.'
  },
  'arosa-line': {
    combine: 'Pair with a Chur evening only; the mountain railway already consumes a meaningful part of the day, so keep Davos and the Rhine Gorge for separate corridors.',
    verify: 'Check the RhB Chur–Arosa timetable, Arosa Lenzerheide lift status, MeteoSwiss and current trail or snow conditions, then save a comfortable return train before committing to elevation.'
  },
  'san-salvatore-morcote': {
    combine: 'Pair with a Lugano evening after returning from Morcote; keep Monte Brè or Monte Generoso for another day so the lake transfer remains a real village visit rather than a chain of viewpoints.'
  },
  'schaffhausen-old-town': {
    duration: 'Allow three to four hours for the center and Munot, with another meal or museum block only if Schaffhausen itself—not the waterfall—is meant to carry most of the day.',
    verify: 'Check Schaffhauserland for current Munot and museum access, then use SBB for the onward train to Rhine Falls or Stein am Rhein so the city loop ends at a useful departure rather than a rushed connection.'
  },
  'stein-am-rhein': {
    duration: 'Two to four hours is usually enough for the painted center, one river-edge block and a relaxed meal; add more only for a specific museum, signed walk or seasonal boat connection.'
  },
  'appenzell-village': {
    duration: 'Allow three to five hours for the village, a meal and one signed countryside walk; a shorter visit works when paired with St Gallen, while a longer stay should add a specific museum or public trail rather than repetitive wandering.'
  }
};

const clusterEditorialExtensions = {
  'st-gallen-appenzell': {
    stay: 'Staying near St Gallen station favors museums and regional rail, while an Appenzell night trades network convenience for a quieter village evening and an earlier start toward the Alpstein.'
  }
};

function applyEditorialExtensions(definition, extensions) {
  const extra = extensions[definition?.slug];
  if (!extra) return definition;
  return Object.fromEntries(Object.entries(definition).map(([key, value]) => [
    key,
    extra[key] ? `${value} ${extra[key]}` : value
  ]));
}

export function switzerlandGuide(definition) {
  definition = applyEditorialExtensions(definition, guideEditorialExtensions);
  const required = ['slug', 'name', 'instrument', 'layout', 'imageQuery', 'imageAlt', 'summary', 'access', 'tradeoff', 'fallback', 'duration', 'combine', 'verify'];
  for (const key of required) {
    if (!definition?.[key]) throw new Error(`Switzerland guide ${definition?.slug || '(unnamed)'} lacks ${key}.`);
  }
  if (!Array.isArray(definition.choices) || definition.choices.length !== 3) {
    throw new Error(`Switzerland guide ${definition.slug} must define three meaningful choices.`);
  }
  if (!Array.isArray(definition.stages) || definition.stages.length !== 4) {
    throw new Error(`Switzerland guide ${definition.slug} must define four route stages.`);
  }
  if (!Array.isArray(definition.watch) || definition.watch.length !== 3) {
    throw new Error(`Switzerland guide ${definition.slug} must define three watch points.`);
  }
  return definition;
}

export function defineSwitzerlandCluster(cluster) {
  cluster = applyEditorialExtensions(cluster, clusterEditorialExtensions);
  const required = ['slug', 'name', 'region', 'band', 'family', 'label', 'tagline', 'hubIntro', 'stay', 'transfer', 'season', 'fallback'];
  for (const key of required) {
    if (!cluster?.[key]) throw new Error(`Switzerland cluster ${cluster?.slug || '(unnamed)'} lacks ${key}.`);
  }
  if (!Array.isArray(cluster.sources) || cluster.sources.length < 3) {
    throw new Error(`Switzerland cluster ${cluster.slug} must define at least three official sources.`);
  }
  if (!Array.isArray(cluster.guides) || cluster.guides.length !== 3) {
    throw new Error(`Switzerland cluster ${cluster.slug} must define exactly three focused guides.`);
  }
  const seen = new Set();
  const guides = cluster.guides.map((guide, index) => {
    if (seen.has(guide.slug)) throw new Error(`Duplicate Switzerland guide slug in ${cluster.slug}: ${guide.slug}`);
    seen.add(guide.slug);
    return {
      ...guide,
      chapter: index + 1,
      hubSlug: cluster.slug,
      hubName: cluster.name,
      region: cluster.region,
      family: cluster.family,
      url: `/switzerland/${cluster.slug}/${guide.slug}/`,
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

export const switzerlandImageEditNote = 'Resized, display-cropped and converted to WebP; no other material edits.';
