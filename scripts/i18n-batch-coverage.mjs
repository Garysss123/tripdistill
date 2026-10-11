export function isSearchIndexDeltaRouteSet(routes) {
  return routes.length === 1 && routes[0] === '/data/search-index.json';
}

export function inspectBatchRouteCoverage({ routes, localSources, siblingSources, requiredSources }) {
  const required = new Set(requiredSources);
  const local = new Set(localSources);
  const siblings = new Set(siblingSources);
  const isSearchIndexDelta = isSearchIndexDeltaRouteSet(routes);
  const outside = [...local].filter((source) => !required.has(source));
  const missing = isSearchIndexDelta
    ? []
    : [...required].filter((source) => !local.has(source) && !siblings.has(source));

  return {
    isSearchIndexDelta,
    outside,
    missing,
    emptyDelta: isSearchIndexDelta && local.size === 0
  };
}
