# Switzerland CH10 content refresh — Batch 1 — 12 October 2026

## Scope and status

Working branch: `codex/sprint-ch-10-content-20261012`

Requested source parent: `bfbdf6cf83dc8d44f40a492f3dabdaf3075aae12` (CH09 Bern)

Batch: Basel & the Rhine hub plus its three existing child routes.

The active batch contains four routes: `/switzerland/basel-rhine/`, `/switzerland/basel-rhine/old-town-rhine/`, `/switzerland/basel-rhine/art-museums/`, and `/switzerland/basel-rhine/kleinbasel-border-rhine/`. These are rendered in English, Traditional Chinese, Japanese, Korean and Thai. No routes were added; the Switzerland inventory remains 16 hubs, 48 child guides, 65 English routes and 4,560 sitemap URLs.

The remaining 25 English drafts from the wider CH10 refresh are retained in source data but are not activated, included as completed refreshes, or assigned new localized sitemap dates. The Switzerland country page is also not refreshed in this batch. The prior 36 Switzerland source routes, including the completed Bern batch, remain excluded.

## Editorial changes

The Basel hub identifies a two-night first-visit base and when a third night helps, distinguishes Basel SBB from Badischer Bahnhof, and organizes a day around the old town, one major museum and the Rhine. Its child pages give named tram/walk sequences, realistic time envelopes, route choices and lower-effort alternatives. Seasonal access, museum opening days, timed entry and exact-date transit are directed to official operator or venue checks; the copy does not guarantee fares, headways or availability.

The English pages and route search summaries update with the 12 October 2026 review date while retaining their existing publication dates. Four corresponding records in the English search index were refreshed. Localized page and search output was generated from the reviewed translation batches.

## Sources and images

Official references in the Basel source data include Basel Tourism, BVB, Kunstmuseum Basel, Fondation Beyeler and the applicable city/venue sources. Exact fares, departures, opening hours and reservation availability remain date-dependent and are not promised.

The existing Basel photos remain separately attributed under their recorded source licenses. No image or license manifest was changed and no new SVG was introduced. Protected Rigi and Zermatt SVG files are checked byte-for-byte by regression tests. This work does not claim independent image-rights-chain clearance or a browser-based UI review.

## Environment and verification

The initial `npm ci --ignore-scripts` exited with npm `ENOENT` while trying to use its default cache under `/home/agent/.npm`, outside the writable workspace. This was a normal command failure, not a tool rejection or AutoReview block. After the user authorized a workspace-local cache, `npm ci --ignore-scripts --cache=/workspace/.cache/npm-ch10` succeeded without changing global configuration or credentials.

Verification passed on this source branch. `npm run audit` passed, including i18n coverage and locale-script checks; photo-license and site-image provenance guards; all country audits; Swiss route/date regressions; China CN14B; UK Lake/Somerset; UK, France and Malaysia date regressions; and the local static site audit. The CH10 guard confirms four existing routes, five-language alternate links and sitemap entries, exactly 20 newly dated localized URLs, the unchanged 4,560-URL inventory, and that later drafts remain unactivated. `npm run build` passed and verified all 4,560 sitemap routes in the 5,471-file `dist` artifact. These mechanical checks do not establish independent semantic or native-speaker review.

No browser, headless, CDP, server, security scan, full-site crawler, force push, integration merge or production action was performed.
