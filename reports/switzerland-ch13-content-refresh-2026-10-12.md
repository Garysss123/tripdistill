# Switzerland CH13 — Chur, Davos & Graubünden content refresh

**Date:** 12 October 2026
**Source branch:** `codex/sprint-ch-13-content-20261012`
**Exact base:** `69d5db6a3ea0f7d9df100c698b0c854810726563`
**Scope:** one existing hub and its three existing child paths.

## Scope and route depth

The four routes are [Chur, Davos & Graubünden](/switzerland/graubunden-corridors/), [Chur Old Town & Rhine Gorge](/switzerland/graubunden-corridors/chur-rhine-gorge/), [Davos & Parsenn](/switzerland/graubunden-corridors/davos-parsenn/) and [Arosa & the Mountain Railway](/switzerland/graubunden-corridors/arosa-line/). Switzerland had 48 of 65 refreshed English paths at the base and has 52 after this batch. The remaining 13 are the existing Lugano, Locarno/Ascona and Schaffhausen hub/child groups plus the country overview. None were activated or rewritten here. The route set, English page count and sitemap URL set are unchanged; no URL was added.

The hub explains why Chur is a rail and lodging hinge rather than a compact loop, compares two nights in Chur with a third flexible night, and describes when a Davos or Arosa overnight is useful. It distinguishes the Rhine Gorge rail corridor, Davos via Landquart and the separate Chur–Arosa line. Each child now includes transport and last-mile legs, a lodging/base trade-off, a realistic day scope, a named route sequence, three choices, a weather alternative, three route-specific failure points and three FAQs. Future train times, lift operation, fares and prices are not promised.

The route organization was compared against the source content of the same-level Japan pages [/japan/osaka/](/japan/osaka/) and [/japan/osaka/namba/](/japan/osaka/namba/). Osaka sets out a three-to-five-night stay range, base-area trade-offs, airport choices, geography-based day shapes and weather swaps. Namba distinguishes several rail operators and stations, names its access points and gives a place-to-place walking sequence with a shorter option. CH13 applies those planning functions to separate Swiss rail branches, transfer points and return decisions. This was a source/content comparison, not a browser-rendered or viewport review. No local server, browser, headless session, CDP, or whole-site external crawler was used.

## Official facts checked

The live pages were checked on 12 October 2026. These references support route orientation and planning prompts, not a future departure guarantee:

- The [Rhine Gorge Association arrival page](https://www.rheinschlucht.ch/en/plan/arrival/) describes RhB service between Reichenau-Tamins and Ilanz as hourly and lists rail, PostBus and local bus access. The guide explicitly treats this as general orientation and sends travelers to the date-specific [SBB planner](https://www.sbb.ch/en) for the actual journey and return.
- [RhB’s Rhine Gorge ticket page](https://www.rhb.ch/en/regional-passes/rhine-gorge-ticket/) describes the transport area and rail/PostBus coverage. No fare or future ticket price is asserted.
- [Flims Laax’s Rhine Gorge page](https://www.flimslaax.com/en/outdoor-activities/natural-phenomena/rhine-gorge) gives an approximately 1.5-hour estimate for the Valendas–Versam walk and an approximately 45-minute approach from Flims Waldhaus to Il Spir. These are operator estimates, not personal pace or trail-condition guarantees. The page also describes the Il Spir platform as year-round and notes seasonal access for Islabord and Spitg. CH13 keeps those access chains distinct and requires a current trail and bus check.
- The same Flims Laax guidance calls for marked trails, says not to cycle on the riverside hiking path, and posts a gravel-bank nesting-bird restriction from 1 April to 15 July. The guide preserves that restriction and warns against inventing an exit along the river.
- [Davos Klosters Mountains](https://www.davosklostersmountains.ch/en/mountains) and its [Parsenn page](https://www.davosklostersmountains.ch/de/mountains/berge/parsenn) distinguish winter and summer activities and the Davos/ Klosters approaches. The article names Davos Dorf and Davos Platz separately and tells travelers to check the exact lift, route, forecast and descent. It does not claim that a lift is currently running.
- [Arosa Lenzerheide](https://arosalenzerheide.swiss/en) and its [route planner](https://maps.arosalenzerheide.swiss/en/tourplanner/) are linked for current mountain and path information. [MeteoSwiss](https://www.meteoswiss.admin.ch/) is linked for forecasts and warnings at the intended elevation.

The copy does not assert unverified prices, exact future departure times or guaranteed headways. Exact rail connections, trail access, lift status, descent, local buses and weather remain date-specific checks.

## Localization and dates

Traditional Chinese, Japanese, Korean and Thai reviewed batches cover these four routes, including translated photo captions and the supplemental diagram’s title, credit, rights note and explanatory text. Batch validators report zero missing route keys. Route-specific sample outputs were read. All use same-model writing and self-review; `reviewProvenance` records that no independent second model was used. The execution runtime did not expose a GPT-6 Luna variant, and this report makes no Luna or Luna Max claim.

The source pages retain their 12 September 2026 `datePublished` values and carry 12 October 2026 `dateModified`. Exactly 20 existing route editions—four routes across five languages—receive that sitemap date. The sitemap remains at 4,560 URLs. The CH13 regression compares all non-target English routes to the exact base and checks non-target localized pages/search records against the pre-CH13 reviewed translations.

## Verification record

The CH13-specific regression checks the exact base and branch scope, 65 existing English routes, 4,560 unchanged sitemap URLs, 20 expected date updates, target article/search metadata in five languages, and non-target page/search preservation. It parses the supplemental SVG as XML and checks its viewBox geometry, permitted element set, branch colors and four legend entries in each of five languages. It also checks the SVG SHA, active photo source metadata and unchanged local photo SHA.

The repository’s i18n approval check exposed stale, unused keys in pre-existing reviewed translation batches, including keys made obsolete when the original Chur photo was retained and the diagram moved to a supplemental figure. The official stale-key prune removed only keys with no current use. The CH13 regression verifies that every non-target localized page and search record remains identical to output reconstructed from the exact base and prior live translations.

**Run results:**

- `npm run i18n:approve`: passed for all four catalogs, 56,152 of 56,152 required strings each, zero missing and zero stale keys.
- `npm run test:switzerland-ch13-refresh`: passed; 5,640 visible English main-body words across four routes, exactly 20 expected five-language article dates, 4,560 unchanged sitemap URLs, translated metadata/search, preserved non-target pages and search records, photo SHA and supplemental SVG XML/geometry/legend checks.
- `npm run audit`: passed, including Switzerland, cross-country date/search/image regressions, the photo-license inventory, and the final site-wide route/title/search audit.
- `npm run build`: passed; 5,473 files (4,577 HTML and 807 images), all 4,560 sitemap routes verified in the build artifact.
- `git diff --check`: passed after the final targeted generation.

This is not a blanket editorial acceptance. No browser-rendered desktop/mobile comparison was made; no integration, deployment or source-branch publication is authorized by this report. The other 13 unfinished Switzerland paths remain untouched.
