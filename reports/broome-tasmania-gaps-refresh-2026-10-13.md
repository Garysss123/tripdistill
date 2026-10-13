# Broome & Tasmania gap refresh — 13 October 2026

## Scope and route ledger

- **Source branch:** `codex/sprint-au-broome-tasmania-gaps-20261013`
- **Exact starting commit:** `8baea8a720ebd88ff6834e60235e29c03343c4c4`
- **Previous ledger:** 88/97 substantive Australia routes.
- **This batch:** two Broome / Kimberley routes, the Tasmania hub, and one Tasmania guide.
- **After this batch:** 92/97; five substantive routes remain, including the Australia overview.

No path or URL was added or removed. English substantive `<main>` text was compared against the exact starting commit, omitting related cards, source lists and ads. The four pages exceed their same-level Japan source floors: the Hokkaido hub has 1,397 words and the Otaru local guide has 1,030.

| Existing route | Main words after edit | Increase from exact base | Main-content work |
| --- | ---: | ---: | --- |
| `/australia/broome-kimberley/kununurra-lake-argyle/` | 1,748 | +1,412 | Three-night planning shape; town versus lake bed; Ord River cruise versus Lake Argyle cruise versus self-drive; confirm departure, transfer and return; heat, water and crocodile checks; Purnululu is a separate multi-night trip. |
| `/australia/broome-kimberley/purnululu-bungle-bungle/` | 1,742 | +1,386 | Reserved two-night ground visit versus a separately booked flight; 304 km Kununurra approach; 53 km Spring Creek Track taking about 1.5–3 hours; suitable high-clearance 4WD, fuel reserve and no phone service; closures mean wait at the gateway, with no informal detour or alternate-gate workaround. |
| `/australia/tasmania/` | 1,459 | +956 | Three-, 7–9- and 12–15-night shapes; compare Hobart, Devonport and Launceston bases; ferry arrival at Devonport; check one-way vehicle terms and public-transport last mile; weather, fire, road and park closure fallback. |
| `/australia/tasmania/nipaluna-hobart-salamanca/` | 1,644 | +1,305 | Central/waterfront versus Battery Point bed; Salamanca Market is a date-confirmed Saturday option; TMAG hours and access; airport and Metro return checks; lower-harbour option when Kelly’s Steps, weather or walking needs do not suit. |

Unknown departures, transfers, late services, access conditions, fees and openings are not assumed. Where an official closure or emergency warning applies, the guide says to cancel or remain at the current gateway and remove that leg; it does not direct travelers around a barrier. Cultural and Country guidance is included with care not to imply access to private or culturally restricted places.

## Dated source basis

The four pages identify their planning/source review date as **13 October 2026** and tell readers to verify changeable details again before booking or departure. Official, route-specific sources linked from the pages include:

- Western Australia DBCA: [Mirima National Park](https://exploreparks.dbca.wa.gov.au/park/mirima-national-park), [Purnululu National Park](https://exploreparks.dbca.wa.gov.au/park/purnululu-national-park), park alerts, and Aboriginal engagement guidance.
- [Main Roads WA Travel Map](https://travelmap.mainroads.wa.gov.au/Home/Map), [Bureau of Meteorology Kimberley forecast](https://www.bom.gov.au/wa/forecasts/kimberley.shtml), and Emergency WA warnings.
- Tasmania Parks and Wildlife Service [alerts](https://parks.tas.gov.au/explore-our-parks/know-before-you-go/alerts), [Transport Tasmania public transport](https://www.transport.tas.gov.au/public_transport), Tasmania/BOM forecasts, and the Spirit of Tasmania operator for the current sailing, vehicle check-in, disruption and arrival details.
- Hobart Airport bus/transfer information; [TMAG visitor and access information](https://www.tmag.tas.gov.au/visit); [Salamanca Market calendar and notices](https://www.salamancamarket.com.au/); [Metro Tasmania journey planner](https://www.metrotas.com.au/planner/); and City of Hobart pedestrian/access guidance.

DBCA’s park information supports the stated Spring Creek Track distance and typical drive-time range, high-clearance 4WD suitability, absence of park fuel/phone service, separation between park ends and two-night minimum. Current road, park, marine, fire, weather, ferry, museum, market and transit status is time-sensitive. Operator details are explicitly framed as needing confirmation for the travel date; broad regional maps are not presented as a shuttle timetable.

## Search, dates, translation and assets

- Search remains 955 records; only these four existing records changed. Their four visible page dates and Article `dateModified` values are 13 October 2026.
- Sitemap remains 4,560 URLs: 912 routes in each of English, Traditional Chinese, Japanese, Korean and Thai. Exactly these four paths across five editions (20 entries) received `lastmod` 2026-10-13; the URL inventory is identical to the starting commit.
- Each non-English page batch has 222 new keys and each search batch has 32 new keys. That is 888 page translations and 128 search translations across the four locales. The strings are actual Traditional Chinese, Japanese, Korean and Thai translations; batch sampling and each locale validator passed. The site-wide merged catalog reports 57,507/57,507 strings, zero missing, zero stale, and `reviewed` in each locale.
- Provenance explicitly records that the exact runtime model ID is unavailable and that the same task assistant performed the review. The self-review is non-independent; no human or independent second-model review is claimed.
- A stale-key dry run preceded pruning. Exactly 368 obsolete values were removed from 16 old reviewed Australian batch files; active keys and all new batches were retained.
- No new image or SVG was added. The parallel arrow correction SVGs remain byte-for-byte unchanged.

## Verification and limits

- `npm run audit` passed after a successful build, including i18n coverage/merge, Australia and global source/structure checks, all cumulative route regressions, and the final site audit: 4,560 published routes, 955 search records per language and 4,560 unique localized page titles.
- `npm run build` passed: 5,475 files (4,577 HTML and 809 images), with all 4,560 sitemap routes present in `dist`.
- The new `test:australia-broome-tasmania-gaps` regression checks the exact base/route scope, Japan word-count floors, required itinerary decisions, dated official links, FAQ/schema agreement, localized dates/canonicals/search summaries, 4,560 unchanged sitemap URLs, and unchanged arrow assets. The relevant old cumulative Australia regressions were extended to recognize this exact follow-up scope.
- All eight new page/search batch validations and all eight batch samples passed. `npm run i18n:status` reports no invalid/in-progress batch and no catalog missing/stale values.
- These are source, translation, metadata and built-artifact checks. No headless or CDP session, local server, HTTP site crawl, security-setting change, integration/main edit or deployment was used. Rendered desktop/mobile UI, interactions and pixels remain unreviewed; no UI pass is claimed.
