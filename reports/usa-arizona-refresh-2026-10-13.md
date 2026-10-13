# Arizona U.S. source refresh — 13 October 2026

## Scope and deduplication

Working branch: `codex/sprint-us-after-new-england-20261013`
Exact source base: `45cae962fdc7fb500cfceb505203efbfd2dbc396` (the New England source terminal).

The source ledger records 49 of 97 U.S. routes at the New England checkpoint: the disclosed historical 25, Hawaii (4), New Orleans (4), Atlanta (4), Miami/Orlando (4), Chicago (4) and New England (4). That ledger is not exhaustive history or editorial approval. I compared candidate route `<main>` bodies at the exact base with the 11 September version `71def01cd4d489552b9f5d67ca1a202becaa0435e`; the four selected bodies remained unchanged from that version and are outside the 49-path set:

- `/usa/arizona/`
- `/usa/arizona/phoenix-scottsdale/`
- `/usa/arizona/grand-canyon/`
- `/usa/arizona/sedona/`

The comparison does not claim those pages had never been edited historically; it establishes that these four had not received a later body rewrite by this base. The New England pages, New York acceptance sample and `/usa/` overview remain byte-identical to the exact source base. The disclosed source-work subtotal is now 53/97, still a limited ledger and not an acceptance count.

## What changed

The hub gives distinct 4–5, 6–7 and 8–10-night shapes. The shorter plan selects two zones instead of forcing Phoenix, Sedona and the South Rim together; the longer plans assign nights to actual bases and protect transfer, weather and airport time. The road sequence names the Phoenix–Sedona I-17 approach and the Sedona–Flagstaff–I-40–AZ-64 South Rim route, with AZ511 and point-forecast checks before travel. The PHX Sky Train section distinguishes the 24-hour airport connector from Valley Metro and each attraction's last mile; it records the airport's advisory of reduced frequency or delay during overnight work, especially 10 p.m.–5 a.m.

Phoenix and Sedona each compare one, two and three nights and connect the chosen base to the day plan. Phoenix groups the Heard Museum, Desert Botanical Garden and Old Town by area, with a verified indoor alternative if outdoor heat, storms or a closure changes the day. Sedona names the park-and-ride leads associated with Cathedral Rock/Little Horse, Soldier Pass, Mescal and Dry Creek, and says to check the route, operating day, parking rule, timetable and final return. It makes clear that a shuttle ride does not establish trail suitability.

The South Rim page separates a focused one-night visit from a two-night stay, and compares Tusayan with Flagstaff by the actual entrance drive. It includes the posted 12 September–30 November 2026 fall schedule: Blue, Orange and Red service periods; the listed first/last service; Hikers’ Express departures; Hermit Road's private-vehicle restriction; and the closed 2026 Tusayan/Purple service. These are date-specific source facts, not a guarantee of operation on a future visit.

The North Rim is described separately from the South Rim and Grand Canyon West. The NPS notice checked 13 October says the 2026 North Rim season is scheduled through 30 November or the first major snowstorm, whichever comes first; the notice lists limited day-use service and no overnight lodging, the campground's 15 October end date, gas closure from 19 September, and Cape Royal/Point Imperial road closure from sunset 15 October through sunrise 3 November for repair. The page directs travelers to use current NPS access and weather notices. If access or weather fails, the stated choices are a currently confirmed open rim-level visit, a verified town-based museum/rest day, or postponement. It explicitly rejects bypassing barriers, entering closed trails, or using a distant rim as a quick fallback.

## Dated official-source checks and limits

The operating pages below were checked on 13 October 2026 unless a separate update date is given:

- [NPS South Rim shuttle buses](https://www.nps.gov/grca/planyourvisit/shuttle-buses.htm): fall 2026 dates and route service; schedule may change or suspend in inclement weather.
- [NPS Grand Canyon conditions](https://www.nps.gov/grca/planyourvisit/conditions.htm) and [current South Rim operations](https://www.nps.gov/grca/planyourvisit/grand-canyon-national-park-public-health-update.htm): current conditions, roads and visitor services.
- [NPS North Rim status](https://www.nps.gov/grca/northrimstatus.htm): checked 13 October; the page said it was last updated 6 October 2026. Its opening and closure dates are preserved as a dated snapshot.
- [PHX Sky Train](https://www.skyharbor.com/ground-transportation/phx-sky-train/): airport connections, 24-hour service and overnight maintenance advisory.
- [Arizona 511](https://www.az511.gov/), [NWS Phoenix](https://www.weather.gov/psr/) and [NWS Flagstaff](https://www.weather.gov/fgz/): live travel and forecast entry points. No transient forecast was copied into future-date guidance; readers are directed to select the actual location and date.
- Sedona's [trailhead shuttle](https://sedonashuttle.com/trailhead-shuttles/) and [how to ride](https://sedonashuttle.com/how-to-ride/) pages: direct retrieval returned 403 during this review; indexed official snippets were available. The guide treats named stops as route-finding leads, asserts no exact departure time, and instructs travelers to confirm live service details before setting out.

Where operating details remain unknown or cannot be verified, the guide says to recheck, defer or choose a confirmed open alternative. It does not imply that an unverified route, schedule or access point is safe or available.

The content was compared at source level with same-tier Japan hub/local-guide references under Hokkaido. This checks the depth of base choices, named route connections, alternatives and practical constraints; it is not rendered UI review.

## Search, dates, translations and assets

Four existing English search summaries changed; the English search index remains at 955 records. All four summaries exactly reuse page source keys translated in the page batches, so the search-key delta has zero fresh keys and no empty search batch was created. Exactly 20 existing sitemap dates changed (four routes × five editions); the sitemap remains at 4,560 URLs.

Traditional Chinese, Japanese, Korean and Thai batches each add 81 new page keys and reuse 175 previously reviewed keys. The same runtime translated and self-reviewed the batches. Its exact model identity is unavailable; this is not independent second-model or human review. A dry-run found exactly 42 now-stale keys in each locale's older `39c-arizona-editorial.json`; the cleanup removed those 168 obsolete entries while retaining active translations. Each locale catalog has 58,613 active strings with zero missing or stale keys.

No image or SVG file changed. There is no new SVG to geometry-check and no new photo claim is made.

## Verification and release boundary

The Arizona regression verifies the exact four English page paths, source-base and 11 September body deduplication, unchanged New England/New York/`/usa/` content, the four English search records, five-edition dates, localized page/search coverage, reciprocal language metadata, and the unchanged 4,560-URL sitemap. The integration-scope regression now accounts for 28 scoped U.S. refresh routes, 253 English search changes, and 1,420 dates across 284 routes × five editions from its historical integration baseline. Full `npm run audit` passed, including the five-language site audit: 4,560 published routes (912 per language), 955 search records per language, and 4,560 unique localized page titles. `npm run build` passed: 5,493 files (4,577 HTML and 821 images), with all 4,560 sitemap routes verified and 14,507 files of Cloudflare Pages headroom before the safety boundary.

No headless browser, CDP, local server, whole-site HTTP crawl or security-setting change was used. Rendered desktop/mobile UI, viewport, keyboard and interaction acceptance remain unverified. The source terminal is integrated into `codex/integration-sprint-20261011` by merge commit `0ba49c97ccb9abdeaea1883623a6117956feee21` (parent `6d2785609e56b6990d5faf4eeb0681e941ac171b`, tree `d1c626f62f4e845b8c582a6fba649660254f9afc`). The combined Chicago/Da Lat/Arizona checkpoint passed full `npm run audit` and `npm run build`; its cumulative 813/907 substantive-route ledger, exact scope and build counts are recorded in [README](../README.md#chicago-da-lat-and-arizona-integration-checkpoint--13-october-2026). This updates only the integration branch; it does not update `main`, deploy or claim rendered UI acceptance.
