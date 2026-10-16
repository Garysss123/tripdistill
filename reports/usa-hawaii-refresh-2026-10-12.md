# Hawaii four-route editorial refresh — 12 October 2026

## Scope and history

This source-only work is on `codex/sprint-us-next-content-20261013`, based exactly on `5a3f8c2cb6b9de348471a1b56605f9334ef8f2b7`. It refreshes four existing routes: [Hawaii](/usa/hawaii/), [Oʻahu](/usa/hawaii/oahu/), [Maui](/usa/hawaii/maui/) and [Hawaiʻi Island](/usa/hawaii/hawaii-island/). It does not change the New York acceptance sample, the `/usa/` overview, or any URL.

The selected routes are disjoint from the 25 U.S. paths disclosed in the earlier source-work list in this report. That list is a documented scope, not an exhaustive history of all U.S. source changes. Do not extrapolate a total touched-route count from it or from the 97-route inventory.

At the exact base, all four rendered `<main>` bodies match their 11 September 2026 source bodies byte-for-byte after HTML parsing and whitespace normalization. The comparison revision is `71def01cd4d489552b9f5d67ca1a202becaa0435e`; normalized text lengths are 7,607, 9,088, 8,452 and 8,570 characters, in the route order above. This establishes a lack of later body rewrite by the selected base; it does not rate the old copy.

## What changed

The extracted visible English `<main>` token counts changed as follows. Counts help show the body delta and do not establish editorial acceptance.

| Existing route | Before | After | Delta |
| --- | ---: | ---: | ---: |
| `/usa/hawaii/` | 1,226 | 1,463 | +237 |
| `/usa/hawaii/oahu/` | 1,437 | 1,562 | +125 |
| `/usa/hawaii/maui/` | 1,350 | 1,640 | +290 |
| `/usa/hawaii/hawaii-island/` | 1,361 | 1,510 | +149 |

**Hawaii selector:** compares Oʻahu, Maui and Hawaiʻi Island by trip length, airport, base and transport. It makes the inter-island flight a visible moving day, maps airport-to-lodging ground transfers, and explains when a seven-night trip should stay on one island. A ten-night Oʻahu/Maui example keeps the connection and final-airport buffer in the schedule; a shorter-trip fallback removes the second island.

**Oʻahu:** distinguishes walkable/Transit Honolulu days from Pearl Harbor west of the city and Kailua across the Koʻolau. It assigns the downtown palace, Diamond Head, Pearl Harbor and a Windward Coast branch to separate days. It separates ʻIolani Palace's 60–90-minute visit and advance-only ticketing from Diamond Head's strenuous 1.5–2-hour trail and nonresident reservation. For the USS Arizona boat program, it uses the NPS one-hour arrival recommendation and ten-minute check-in deadline, and gives a museum/visitor-center alternative when no boat seat is available.

**Maui:** compares a South or West Maui base with central Kahului access, then keeps Haleakalā Summit and Hāna–Kīpahulu as distinct day choices. NPS road estimates are specific to the starting base: about 2.5 hours from Kahului, 3 hours from Wailea and 3.5 hours from Lahaina to the Summit District; Kīpahulu is about four hours from Kahului before stops. The two park districts have no connecting park road. The route spells out the sunrise reservation, fuel, daylight, narrow Hāna-road and weather decisions, and keeps a town/base-area fallback.

**Hawaiʻi Island:** compares west-side KOA/Kona with east-side ITO/Hilo and Volcano, using the airport, lodging base and park road as one decision. The NPS estimate from Kailua-Kona is 2–2.5 hours each way to Hawaiʻi Volcanoes National Park before a visit. Hele-On reaches the park area but is not an internal shuttle; the guide requires checking both bus legs and offers a rental/tour or local-town alternative. As checked on 12 October, Kīlauea construction affected the usual visitor center and parking. The temporary Welcome Center at Kīlauea Military Camp was listed as open 9:00 a.m.–4:45 p.m.; visitors are told to reconfirm hours and use current ranger direction. Volcanic gas, air quality, storm damage and partial state-park closures have separate checks and alternatives.

## Official-source checks

The page copy links claims to the operator or land manager rather than a general search page. Sources read on 12 October 2026 include [Go Hawaiʻi island information and maps](https://www.gohawaii.com/islands), [TheBus](https://www.thebus.org/), [Hawaiʻi State Parks notices](https://dlnr.hawaii.gov/dsp/important-park-notices/), [Diamond Head reservations and trail information](https://dlnr.hawaii.gov/dsp/parks/oahu/diamond-head-state-monument/), [ʻIolani Palace tours](https://www.iolanipalace.org/visit/tours-admission/), [NPS Pearl Harbor reservations](https://www.nps.gov/perl/planyourvisit/permits.htm) and [USS Arizona operations](https://www.nps.gov/perl/uss-arizona-memorial-programs.htm).

For Maui, the linked checks are [Go Hawaiʻi regional drive context](https://www.gohawaii.com/islands/maui/regions), [NPS approaches](https://www.nps.gov/hale/planyourvisit/directions.htm), [sunrise reservation rules](https://www.nps.gov/hale/planyourvisit/haleakala-sunrise-reservations-faq.htm), [current park conditions](https://www.nps.gov/hale/planyourvisit/conditions.htm) and [Maui County recovery updates](https://www.mauirecovers.org/). For Hawaiʻi Island, they include [NPS airport/road directions](https://www.nps.gov/havo/planyourvisit/directions.htm), [construction closures](https://www.nps.gov/havo/planyourvisit/construction-closures.htm), [temporary Welcome Center details](https://www.nps.gov/havo/planyourvisit/welcome-center.htm), [park conditions and air quality](https://www.nps.gov/havo/planyourvisit/conditions.htm) and [NPS/USGS activity information](https://www.nps.gov/havo/planyourvisit/lava2.htm). Island-level forecasts, ocean conditions and State Parks storm notices link separately to the [Honolulu National Weather Service](https://www.weather.gov/hfo/), [Hawaiʻi Ocean Safety](https://oceansafety.hawaii.gov/) and State Parks.

The 12 October closure and operating details are a dated source snapshot, not a future opening guarantee. Recheck schedules, reservations, roads, weather, air quality and closures for the actual trip date.

## Languages and images

Traditional Chinese, Japanese, Korean and Thai translations accompany the changed route copy and route-specific search summaries. Each `43a-hawaii-refresh-20261012.json` page batch has 234 translations (349 raw units, 266 unique source keys; 32 route keys were already available in sibling batches). The translation batches declare GPT-6 Luna as writer and same-model self-review; runtime metadata cannot verify the model identity, and this is not independent second-model or human review. Four inactive prior Hawaii batches were pruned of 205 obsolete keys per locale while active translations were retained. The approved catalogs have 58,391 current strings per locale, with no missing or stale entries.

The three existing route photos—Oʻahu, Haleakalā and Kīlauea—were inspected as pixels and match their subjects. No photo bytes or SVG assets changed. Existing source/credit declarations remain visible. This is not independent confirmation of uploader authority or a full rights-chain review.

## Verification and remaining review

- `npm run audit` passed, including all locale, site, image-provenance, country and historical scope regressions. Site audit: 4,560 unique routes (912 in each of five editions), 955 search records per language, no URL added or removed.
- `npm run build` passed: 5,493 files (4,577 HTML, 821 images; 324.0 MiB); all 4,560 sitemap routes verified.
- Relative to the exact task base, the content diff has four English route-body files, four changed English search summaries and 20 changed sitemap `lastmod` values (four routes × five editions). The 4,560-URL inventory is unchanged. The integrated historical-scope regression separately checks its older baseline: 262 historical English route bodies, 1,300 dates across 260 routes × five editions (256 historical routes plus four Hawaii routes), 229 changed English search records (225 historical plus four Hawaii), and the unchanged 4,560-URL set.
- No new SVG was produced, so no SVG XML/geometry image audit applies. Existing photo pixels were checked as described above.
- Japan/Hokkaido and Otaru were inspected as same-level source-content references for trip-shape, transport, geographic sequencing, time tradeoffs, seasonal operations and fallback depth. The user's no-browser, no-headless, no-CDP and no-local-server limits were followed; the rendered HTML/CSS, desktop/mobile layout and interactive behavior therefore remain unverified.
- This four-route work does **not** grant country-level U.S. editorial approval. Per current project status, the earlier U.S. batch remains pending editorial-quality rework; New York remains the accepted sample only.

No change was made to `main`, the integration branch or deployment.
