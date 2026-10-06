export function inspectTranslationCoverage(requiredSources, translations) {
  const required = requiredSources instanceof Set ? requiredSources : new Set(requiredSources);
  const stale = Object.keys(translations || {}).filter((source) => !required.has(source));
  const missing = [...required].filter((source) => {
    const target = translations?.[source];
    return typeof target !== 'string' || !target.trim();
  });
  return { stale, missing };
}
