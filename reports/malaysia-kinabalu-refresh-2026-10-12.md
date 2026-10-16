# Kinabalu Park & Kundasang and Malaysia overview refresh — 12 October 2026

## Scope and confirmed remaining routes

This source-only task starts at `3605d757281f3e2bd4e23acb4503815cb86c092a` (parent `b0c6696bf28893c4498858830a714acd084f435f`) on `codex/sprint-my-15-content-20261012`. README history, the Malaysia route tree and prior source updates confirm 71 existing English Malaysia routes: 65 substantive route bodies were already refreshed, leaving this one five-page cluster and `/malaysia/`. The batch completes exactly these six existing routes:

- `/malaysia/`
- `/malaysia/kinabalu-park-kundasang/`
- `/malaysia/kinabalu-park-kundasang/park-headquarters-botanical-garden/`
- `/malaysia/kinabalu-park-kundasang/mount-kinabalu-summit/`
- `/malaysia/kinabalu-park-kundasang/kundasang-ranau/`
- `/malaysia/kinabalu-park-kundasang/poring-hot-springs/`

No route was added, removed or redirected. The English `<main>` text gains 3,255 whitespace-delimited words against the exact base: country +786; cluster hub +359; Park Headquarters +528; summit +507; Kundasang/Ranau +575; Poring +500. Word growth is supporting evidence, not editorial acceptance by itself.

## Content changes

The country page now gives travelers substantive choices across 9-, 12- and 15-night plans: one-night departure/transfer protection; a three-night Kuala Lumpur, two-night Melaka and three-night George Town route; additional Ipoh, Cameron Highlands or Langkawi branches; and a Sabah option that keeps city, mountain and climb days distinct. It compares rail, coach, flight and road handoffs and names walking areas in Kuala Lumpur and George Town. Its Sabah decision copy distinguishes Park Headquarters, Kundasang and Ranau, gives the highlands four nights in the 15-night example, and says to arrange the Ranau-to-property or park-gate leg and return separately.

The Kinabalu hub compares two nights near Park Headquarters with an additional Kundasang night for its own memorial or farm day, and another night for a daylight Poring road visit. Its sample four-day/three-night non-climber route names Kota Kinabalu → Padang Merdeka → Ranau (or a separately agreed driver), a confirmed Park Headquarters last mile, one staff-confirmed signed walk, a distinct road transfer to the memorial and a protected return. Summit climbing is a separate booked package with its own mountain bed and recovery night.

The four child routes each have a distinct plan and weak-point check:

- Park Headquarters: visitor orientation, Botanical Garden only if open, one signed Silau-Silau section only after same-day access is confirmed, and a return on the same known path; no loop or distance is assumed.
- Mount Kinabalu summit: verify the full current booking, registration counter and time, assigned trailhead/transfer (Timpohon Gate only when assigned), guide, mountain accommodation, cancellation conditions and post-descent recovery. No summit, fee, capacity, schedule or climb date is guaranteed.
- Kundasang and Ranau: compare the actual property road pin, meals and next-day road; keep the memorial’s posted public route inside its grounds and book the other stops as separate road legs. The pages do not imply a walkable town loop.
- Poring: handle the hot springs, canopy walkway and paths as separate facilities whose access and maintenance need date-specific confirmation; book a named return vehicle and keep the visit as its own daylight road day.

Seasonal and weather alternatives preserve the existing base and use verified open activities rather than an unconfirmed path, shoulder or transit service. The copy does not invent fares, departure times, headways, transfer durations or future opening status.

## Official references checked and limits

The [Sabah Tourism Board transport page](https://sabahtourism.com/essential/getting-around/) was reachable. It lists Padang Merdeka in Kota Kinabalu as a long-distance taxi/minibus point for West Coast and interior towns including Ranau. It does not establish service to every Kinabalu Park property or the Poring gate; the guides therefore name the onward leg and return as separate arrangements. The [METMalaysia forecast service](https://www.met.gov.my/en/forecast/weather/district/) exposes district, town, tourist-destination and marine forecasts. The pages direct readers to check close to travel and still ask the park, carrier or boat operator for its same-day decision; a forecast is not an operating notice or summit guarantee.

Sabah Parks’ [Kinabalu Park](https://www.sabahparks.org.my/kinabalu-park) and [Mount Kinabalu climb](https://sabahparks.org.my/index.php/kinabalu-park/mount-kinabalu) pages returned HTTP 403 during this review, as did the Poring pages. Those authority links remain in the guides for travelers to check current rules, access, fees, booking and facilities. The [Silau-Silau visitor page](https://discovermalaysia-unesco.com/portfolio/silau-silau-trail-2/) is used for orientation only; the guide defers same-day trail access to the park. [Sutera Sanctuary Lodges](https://suterasanctuarycollection.com/destinations/kinabalu-park/) is linked for accommodation/operator information, not a claim of live room availability.

## Photos and rights scope

The three existing 1,440 × 960 WebP images were inspected against their linked Commons pages and their subjects match: Kinabalu from Park Headquarters (Tecrc, CC BY-SA 4.0; SHA-256 `f308c2c7eba3c8100dcf1f313a36216310814688d9200ee015c30eb6321a6c93`), the Kundasang panorama (kallerna, CC BY-SA 4.0; `c1d14a16e95d7f0ab81808ff5bfde531104b729844c6187af622dfdac7dc2e88`) and the forest trail (kallerna, CC BY-SA 4.0; `bacf744ff3a2a53a4246535ff1ec40379c38e3c1a7271d025f48d7731ce30b3f`). Their bytes, source URLs, creator/license declarations and visible lead-photo credits are unchanged from the base. No mismatch was found, so no image or SVG replacement was needed. The linked source-page statements are not independent verification of uploader authority or chain of title; no independent rights clearance is claimed. Existing multi-version license choices are not treated as an automatic conflict.

The deferred Sipadan `e2af…` asset/fix was not edited or overwritten.

## Translations and source-key cleanup

Each of `zh-Hant`, `ja`, `ko` and `th` has a reviewed page batch with 209 newly translated source keys across the six routes, plus eight new translated search-index keys. The page batches validated 881 raw route units, 665 unique keys, 456 previously reviewed shared keys and zero missing keys. The translation writer and reviewer were the same available model; this is self-review, not independent second-model or human review. A stale-key dry run identified 600 obsolete values across the four languages; those were removed from superseded Malaysia batches while every key still used by current source pages was retained. The global i18n audit subsequently reports 56,040 current translations per locale with zero missing or stale entries.

## Verification

- `npm run audit:i18n` — passed; 224,160 reviewed targets checked, zero problems, 56,040 strings in each localized catalog.
- `npm run test:malaysia-kinabalu-refresh` — passed for source: six original paths × five editions, 30 selected sitemap dates, 71-route Malaysia inventory, 4,560 unchanged sitemap URLs, 955 search entries per locale, target-only English body changes and unchanged route images.
- `npm run build` — passed; produced 5,468 files (4,577 HTML, 802 images, 320.5 MiB), verified all 4,560 sitemap URLs and left 14,532 files of Pages headroom.
- `npm run test:malaysia-kinabalu-refresh -- --dist` — passed with the same six-route/five-edition, date, search, route-inventory and image-byte checks as source.
- `git diff --check` — passed.
- `npm run audit` — passed after the build. This includes i18n/search/photo guards; Malaysia route/date/search/photo regressions; China route dates and CN14B; UK Lake District and Somerset diagram tests; France, UK, Italy, and total-site audits. Final site audit: 4,560 localized routes, 955 search records per locale and 4,560 unique localized titles. The first pre-build attempt halted when the UK Peak District test could not find `dist/`; the build then succeeded and the complete audit passed.

The build-backed legacy scope tests now include only this MY15 six-route cohort in their cumulative date/search expectations; Sandakan, Semporna, Kuching, Kuala Lumpur and this batch’s source/dist tests all passed. No photo inventory conflicts were reported. Global inventory still records that many sitewide source-page license declarations are not independently verified; this review makes no broader rights claim.

The full audit includes the China/CN14B, UK Lake District and Somerset SVG, France, UK, Malaysia route/search/photo and date regressions. Existing SVG regression tests validate actual XML parsing and geometry for those previously committed diagrams; this batch has no new SVG geometry to validate. No browser/headless/CDP, server, whole-site source crawler, force operation, security scan, integration/main push or deployment was run. Rendered desktop/mobile and interaction acceptance therefore remains unverified.
