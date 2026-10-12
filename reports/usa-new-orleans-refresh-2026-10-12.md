# New Orleans U.S. source refresh — 12 October 2026

## Scope and historical comparison

This source-only refresh starts from exact commit `c7df46be0dc3f40649ff44d672861e971d0c082b` on `codex/sprint-us-after-hawaii-20261013`. It changes four already-existing English article bodies outside the 25 paths in the [U.S. historical source-scope ledger](usa-historical-source-scope-ledger-2026-10-12.md) and its four Hawaii paths:

- [`/usa/new-orleans/`](../usa/new-orleans/index.html)
- [`/usa/new-orleans/french-quarter/`](../usa/new-orleans/french-quarter/index.html)
- [`/usa/new-orleans/garden-district/`](../usa/new-orleans/garden-district/index.html)
- [`/usa/new-orleans/river-wetlands/`](../usa/new-orleans/river-wetlands/index.html)

At the exact task base, each page's normalized English `<main>` was identical to its version at `71def01cd4d489552b9f5d67ca1a202becaa0435e` (11 September). Thus this is a four-route body refresh beyond the documented 25 + 4 = 29 paths, not a duplicate count of the prior work. The comparison identifies source history; it does not score the earlier text. The four pages now have 1,387, 1,402, 1,477 and 1,448 visible-body words, changes of +106, +23, +54 and +26 against the task base, respectively. Those small deltas reflect replacing already substantial copy with more decision-useful detail; word count is not the editorial gate. New York's acceptance sample and all other English U.S. article bodies remain unchanged from the task base. The U.S. collection still contains 97 English routes, and neither the 29 disclosed paths nor the 33 paths accounted for here is a claim that the whole collection has passed.

## Editorial changes

The route sequence now distinguishes a Quarter/museum/music day, an Uptown/Garden District day, an urban river ferry crossing and a separate wetland drive. The hub weighs a two-night versus three-night stay and Quarter, CBD/Warehouse and Uptown bases against return time after a performance. It gives MSY's exact Airport Express 202 pickup at Door 2, Level 1, Zones B4/B5; compares the separate RTA and Jefferson Transit E1 operators and fares; and names the only shared Regional Ride pass. City movement adds Routes 12 and 11, bus alternatives 32 and 57, the accessibility limitations of the St. Charles cars and the need to check live service.

The French Quarter guide orders Jackson Square, selected Royal Street stops, the Historic New Orleans Collection at 520 Royal Street, a meal and a chosen current performance. It distinguishes free museum entry from ticket availability and states checked opening hours. The Garden District guide uses Route 12 to Washington Avenue, a bounded public-street walk and a chosen Magazine Street finish. It corrects Lafayette Cemetery No. 1 access: the City still lists it as closed to the public except guided tours, and the current PRC Save Our Cemeteries booking is the official tour option, with duration, price and booking required stated in the page. If dates or mobility do not fit, the route stays outside the cemetery.

The river/wetlands guide separates the Canal Street–Algiers Point ferry from a sightseeing cruise and from a road-based wetland day. Its 12 October NPS check states that Barataria's visitor center and most trails are closed from 2 February 2026 for repairs expected to take up to two years; it directs readers to the relocated Wetland Trace / education-center address, current ranger days and fees, and the limited day-use facilities at Twin Canals. Heat, rain, flooding, access changes, a missed return or an unsuitable closure lead to a shorter city-side or confirmed indoor alternative. The archive wetland photo is explicitly not evidence of current access.

The source-structure comparison was the existing Japan Hokkaido/Otaru hub-and-guide depth floor. The target pages have route order, named connections, day/night trade-offs, bounded visits, current operating constraints, weather/closure alternatives, and targeted FAQs/source links. This is a source-content review, not browser, viewport or user-acceptance approval; the repository's broader U.S. editorial gate still applies.

## Official-source checks

The source text links these operator and destination references, checked 12 October 2026:

- [MSY public transportation](https://flymsy.com/public-transportation/) for airport pickup points, route 202 and E1, fares and separate operators.
- [NORTA route tools](https://www.norta.com/rider-tools), [current fares](https://www.norta.com/ride-with-us/how-to-pay/fares) and [transit accessibility](https://www.norta.com/ride-with-us/know-before-you-go/transit-accessibility/accessibility-for-riders) for routes, pass coverage and access limits.
- [Historic New Orleans Collection visitor information](https://hnoc.org/visit/our-campus), [St. Louis Cathedral visit information](https://www.stlouiscathedral.org/tours) and [Preservation Hall's current program](https://www.preservationhall.com/) for exact destinations and visits.
- [City cemetery access notice](https://nola.gov/next/property-management/topics/division-of-cemeteries/) and [PRC Save Our Cemeteries' Lafayette No. 1 tour booking](https://prcno.org/cemetery-tour/lafayette-cemetery-no-1/) for the walk-in closure and sole official scheduled tour.
- [NPS Barataria Preserve notice](https://www.nps.gov/jela/planyourvisit/barataria-preserve.htm) for the repair closure, relocated services, programming, fee and facility limitations.
- [New Orleans & Company](https://www.neworleans.com/) and [Uptown/Garden District orientation](https://www.neworleans.com/plan/neighborhoods/uptown-garden-district/) for visitor and neighborhood context.

Published fares, hours and operating notices are time-sensitive. The pages label the check date and direct travelers to recheck live schedules, alerts, tickets and conditions before departure. Suggested itinerary order and pacing are editorial judgments, not official itineraries.

## Five-language derivatives, dates and assets

All four existing routes have matching 12 October 2026 review/schema dates in English, Traditional Chinese, Japanese, Korean and Thai. Exactly 20 existing sitemap `lastmod` values changed (four routes × five editions); the 4,560-URL sitemap set did not change. The four existing English search records were refreshed in place and the translated search summaries generated for all four locales; each locale retains 955 search records. Each of the four reviewed catalogs now approves 58,410 active strings with zero missing or stale keys. The New Orleans page batches add 28 source-key translations per locale and the search batches add 14 translated keyword keys per locale. A dry run confirmed 23 superseded inactive source units were unused; their 92 locale entries were then pruned so catalogs have no stale keys. The English draft inventory and active URLs were not expanded.

Translation provenance says “Current Codex runtime; exact model variant not exposed.” Drafting and the same-runtime self-review are not independent review, and this record does not claim GPT-6 Luna or a second-model signoff. Three existing photo alternatives were made more specific to their pictured subjects; image bytes, source records and license declarations were not changed. No new photo or SVG was added. Existing photo checks and source-page declarations are not independent rights-chain clearance.

## Verification and limits

`npm run audit` passed, including the 97-English-route/485-page U.S. audit, the U.S. editorial structure/date audit, the exact New York non-change check, the four New Orleans body and search/date scope checks, the cumulative integration-scope regressions, four locale catalogs with 58,410 approved strings apiece and zero missing/stale keys, and all 4,560 published pages with 955 search records per language. `npm run build` passed with 5,493 files (4,577 HTML and 821 images; 324.1 MiB), all 4,560 sitemap routes verified, and 14,507 files of Cloudflare Pages headroom. `git diff --check` passed. The source comparison has exactly four changed English U.S. article HTML files; the remaining files are the declared date, search, translation, image-alt, generation, audit, regression and report derivatives. The `main` and integration branches are outside this source task; no deployment is claimed. No headless browser, CDP, local server or site-wide crawler was used, so this report makes no browser/UI acceptance claim.

The historical 25-path ledger is not exhaustive history, and the original U.S. batch still needs its planned editorial rework. This four-page improvement does not approve the U.S. collection as a whole.
