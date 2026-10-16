# Los Angeles U.S. source refresh — 13 October 2026

## Scope and deduplication

Working branch: `codex/sprint-us-after-arizona-20261013`

Exact source base: `d5f7d1689b784b4930cd9f7d4496ab3148929162`

Base parent: `45cae962fdc7fb500cfceb505203efbfd2dbc396`

At the exact base, the disclosed U.S. source-work ledger stood at 53 of 97 routes. I compared candidate rendered English `<main>` bodies at the base with the 11 September source `71def01cd4d489552b9f5d67ca1a202becaa0435e`. Four existing Los Angeles paths still had identical normalized body text and did not appear in the previous 53-path report set:

- `/usa/los-angeles/`
- `/usa/los-angeles/downtown-arts/`
- `/usa/los-angeles/hollywood-griffith/`
- `/usa/los-angeles/santa-monica-venice/`

Their `<main>` bodies grew by 242, 183, 237 and 376 whitespace-delimited words, respectively (1,038 total). This is a body-difference measure, not an editorial quality score. The disclosed subtotal becomes 57/97; the underlying ledger is explicitly limited and is not an exhaustive edit history or an acceptance count. `/usa/new-york/`, `/usa/`, the New England routes and the four Arizona pages remain byte-for-byte unchanged from the exact base.

## Route changes

**Los Angeles hub.** The base comparison now weighs one base for two nights, one connected base for three or four nights, and an inland/coastal split only when the trip has at least five nights and the coast is a real priority. It counts arrival and departure days separately and names the packing, check-out, luggage-storage and check-in cost of a hotel move. The dated LAX chain is terminal → marked Lower/Arrivals shuttle stop → Metro Connector Shuttle → LAX/Metro Transit Center → suitable C/K line direction → hotel last walk. When the suitable late public connection is unknown, the page offers an authorized pickup or an airport-area overnight and daylight continuation.

**Downtown LA & the Arts District.** The page compares one night for one full museum-to-market day with two nights for a separate architecture walk or confirmed indoor visit. Its named sequence connects the upper Bunker Hill area with the Angels Flight entrance at 350 S Grand Avenue, lower entrance at 351 S Hill Street, and Grand Central Market. If the funicular, lift or a public connection is closed, the plan uses only a verified accessible public path or omits the hill leg; it rejects service entrances, private lobbies and closed-worksite shortcuts. Weather, construction or access changes can shorten the day or move a confirmed museum booking.

**Hollywood & Griffith Park.** One night near Hollywood/Highland is suitable only when the boulevard block and DASH schedule fit the Observatory return; two nights separate daytime Hollywood from the hill visit. The route names Hollywood/Highland → B Line toward Union Station → Vermont/Sunset → LADOT DASH Observatory/Los Feliz → Griffith Observatory, with the same confirmed chain back. A 13 October snapshot of LADOT's page says DASH runs daily while the Observatory building closes Mondays, Thanksgiving and Christmas; these are separate calendars. The guide rejects an unverified trail, residential-road detour, closed hill road or barrier crossing when the building, bus or road is closed or uncertain.

**Santa Monica & Venice.** One night supports a Santa Monica pier/coast day; two make a Venice extension or weather buffer more realistic. The route starts at Downtown Santa Monica station and follows the signed downtown/Ocean Avenue approach to the Pier. The city’s bridge replacement was under construction on the 13 October check, so entry depends on the route officially signed and confirmed open on the visit date. A Venice extension is a separate leg: the page requires a named endpoint and a verified return from that exact stop. Metro Line 33 is described only at the published Santa Monica–Venice Blvd–Downtown LA corridor level; its stops may not fit a beach-side finish. If the entire return cannot be verified, the itinerary returns to the E Line in Santa Monica and leaves Venice for another day. The NWS snapshot is explicitly dated and not presented as a future forecast.

## Dated official sources and limits

Time-sensitive transport, road, weather, DASH and Pier access sources were checked on 13 October 2026, unless a source-specific date is stated:

- [LAX ground transportation](https://www.flylax.com/lax-traffic-and-ground-transportation) describes the terminal-to-transit-center connection. The page and airport terminal stop should be checked again on the actual travel date.
- [LA Metro line schedules and maps](https://www.metro.net/riding/schedules/) lists the B, C, E and K lines and Line 33’s Santa Monica–Downtown LA via Venice Blvd corridor. The [Line 33 PDF](https://cdn.beta.metro.net/wp-content/uploads/2026/06/01143606/033_TT_06-7-26.pdf) is dated 7 June 2026; its stops and timetable are not asserted as future service.
- [LADOT DASH Observatory/Los Feliz](https://www.ladottransit.com/dash/observatory-los-feliz/) shows an effective January 2026 schedule, route stops, the Observatory closure days and service caveats. It says times can vary with traffic and weather. The schedule is not a promise of a future departure.
- [Caltrans QuickMap](https://quickmap.dot.ca.gov/) was opened as the current-road-status entry point, but its map returned no text through the available reader. No specific live road condition was copied from it.
- [NWS Los Angeles/Oxnard](https://www.weather.gov/lox/) showed a latest map update of 12 October 2026 at 7:32 p.m. PDT; the display then listed coastal flood, high surf and beach hazards. This is a dated snapshot, not a forecast or assurance for a later trip.
- The [City of Santa Monica Pier Bridge Improvements](https://www.santamonica.gov/programs/pier-bridge-improvements) page reported construction underway. The [Pier visitor FAQ](https://www.santamonicapier.org/faqs) separates pier access from each attraction’s hours and conditions. No future completion date or guaranteed temporary path is claimed; use a signed route that officials confirm open that day.
- [Santa Monica Big Blue Bus](https://www.bigbluebus.com/) provides a trip planner and service alerts. No route number, beach-side stop or future departure is promised from that page.
- The existing [LA Recreation and Parks Venice Beach page](https://www.laparks.org/venice/) did not load through the available source reader. The page does not infer a current closure status from that failed retrieval.

No fare, travel time, future timetable, attraction availability or closure status is guaranteed. Where access or the last return cannot be verified, the guide tells readers to stay in the current district, use a confirmed authorized ride, or reschedule. It does not suggest bypassing closures or using an unofficial route.

The same-level Japan comparison was made at source-content level with the [Osaka hub](/japan/osaka/) and [Asakusa & Ueno local guide](/japan/tokyo/asakusa-ueno/). Their actual content distinguishes stay length and evening base at hub level, and a named, connected place sequence and protected museum block at local-guide level. This comparison does not include rendered desktop/mobile review.

## Search, translation, dates and assets

The four English search summaries reuse the four page description translations. Each reviewed Traditional Chinese, Japanese, Korean and Thai page batch adds 33 fresh keys and reuses 216 earlier keys. Each batch records GPT-6 as writer and same-model self-review, with the exact runtime variant unavailable and `independentSecondModel: false`; this is not independent model or human review. A dry-run found 23 stale keys per locale in the earlier `38b-los-angeles-editorial.json` batch. Those 92 superseded strings were removed from those four batches only. No separate empty search batch was added. Each language retains 955 search records.

Exactly 20 existing sitemap `lastmod` values changed (four routes × five editions); the URL set remains 4,560. No image asset changed. No SVG was added or changed, so there are no new SVG filenames or geometry to inspect.

## Verification and release boundary

The Los Angeles regression checks the exact base and parent, the four distinct routes’ unchanged September source bodies, all 97 English route bodies for out-of-scope changes, New York and `/usa/` byte identity, the four English search updates, translated pages and summaries, batch provenance, exactly 20 dates, all 4,560 sitemap URLs, and no image or SVG changes. The four older U.S. source-regression scopes and shared integration ledger were extended to recognize these later LA routes while retaining their exact earlier task bases.

Verification on the completed source tree:

- `npm run audit` passed. This includes translation coverage and locale guards, U.S. content/date/search checks, all four earlier U.S. source-refresh regressions, the Los Angeles regression, the integration scope regression, and final site audit: 4,560 published language routes, 955 search records per edition, and 4,560 unique localized page titles.
- `npm run build` passed: 5,493 files (4,577 HTML and 821 images; 324.5 MiB), with 4,560 sitemap routes verified in `dist/` and 14,507 files of Cloudflare Pages headroom reported.
- Translation merge/audit found 58,623/58,623 required strings in each language with zero missing or stale keys. Search indexes remain at 955 records in all five editions. The LA task changes four English summaries, 20 sitemap dates and no URL identities.
- The shared integration-scope regression now records 32 post-integration U.S. refresh paths and 57/97 disclosed U.S. source-work routes. Against that older terminal, it verifies 257 changed English search records, 1,440 historical/localized sitemap date changes across 288 routes × five editions and the unchanged 4,560-URL set. These cumulative counts are history scope, not this batch’s delta.
- `git diff --check` passed before commit. The task adds or changes no image or SVG.

No headless browser, CDP, local server, whole-site HTTP crawl or security-setting change was used. Rendered desktop/mobile UI, keyboard, viewport and interaction acceptance remain unverified. This source-only batch targets its requested branch only; it does not include a `main` or integration merge or a deployment.
