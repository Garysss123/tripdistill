# Switzerland CH10 content refresh — 12 October 2026

## Scope

Working branch: `codex/sprint-ch-10-content-20261012`

Source parent: `bfbdf6cf83dc8d44f40a492f3dabdaf3075aae12` (CH09 Bern)

This refresh covers the Switzerland country page and the seven remaining hubs: Basel & the Rhine, St Moritz & Upper Engadin, Chur/Davos/Graubünden, Lugano & Southern Ticino, Locarno/Ascona/valleys, Schaffhausen & Rhine Falls, and St Gallen & Appenzell. Their 21 existing child routes were refreshed. The route model remains 16 hubs, 48 children and 65 English Switzerland routes; no route was added. The previous 36 source routes, including the Bern batch, were excluded.

## Editorial changes

Each hub now compares a practical overnight base, named rail/tram/bus/boat/lift connections, an elevation or season gate, and a lower-risk fallback. The child guides give four ordered route stages, a realistic time envelope, a named access point, a distinct trade-off, and current operator/weather checks. The guides avoid guaranteed fares, headways, operating dates or availability. They direct travelers to confirm exact-date conditions with the named operator.

Country and English search summaries now frame planning around overnight bases, transfer systems and protected returns. The target article metadata and visible review dates are 12 October 2026; `datePublished` remains 12 September 2026. The search index retains its current route set and has one current entry for each refreshed route.

Official local references are linked from the source data, including [Basel Tourism](https://www.basel.com/en), [BVB](https://www.bvb.ch/en/), [Rhaetian Railway](https://www.rhb.ch/en), [Graubünden Tourism](https://www.graubuenden.ch/en), [Monte Generoso Railway](https://montegeneroso.ch/en), [Centovalli Railway](https://www.centovalli.ch/en/), [Schaffhauserland](https://en.schaffhauserland.ch/), [Rhine Falls](https://rheinfall.ch/en/) and the [Abbey District of St Gallen](https://www.stiftsbezirk.ch/en/).

## Images and rights notes

The 21 active photos across the seven refreshed hubs were visually checked in a local contact sheet. No subject mismatch was found. The existing source, creator and license declarations remain attached to each asset; different licenses are preserved as separate declarations. No image or license manifest was changed, and no SVG was introduced. Protected Lucerne/Rigi and Zermatt SVG bytes are checked by the CH10 regression.

This work verifies page attribution metadata, not independent rights clearance. No browser-based UI review or separate rights-chain investigation was performed.

## Checks and current blocker

- `npm run generate:switzerland` passed and rendered the 29 existing English routes.
- `npm run test:switzerland-ch10-refresh` passed: 29 routes, 21 child route plans, five-language alternate links, 145 target sitemap entries, 4,560 sitemap URLs, and no added or removed route. It found 140 changed `lastmod` values; the other five target entries (the shared country URL in each edition) already carried 12 October from earlier Swiss work.
- `npm run test:photo-license-guard` passed. `npm run test:malaysia-melaka-route-dates` passed.
- Locale batch export/merge, the full audit, and build remain blocked because `parse5` is absent. The earlier `npm ci --ignore-scripts` attempt failed when npm tried to create its cache under `/home/agent/.npm`, outside this environment’s writable roots. No alternate cache path was used. Consequently, this branch does **not** claim completed five-language self-translation/review or generated localized pages.
- The China CN14B and UK Lake/Somerset regression scripts that import `parse5` could not start. Locale-dependent route-date checks also could not pass without generated locale output; France date-sync reports missing `dist` pages. The Melaka regression, which does not require those generated pages, passed.

No browser, headless, CDP, server, security scan, full-site crawler, force push, integration merge or production action was performed.
