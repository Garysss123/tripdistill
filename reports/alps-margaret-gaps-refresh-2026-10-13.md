# Australian Alps and Margaret River gap refresh — 13 October 2026

## Scope and source branch

This batch is on `codex/sprint-au-alps-margaret-gaps-20261013`, created from exact base `5f1205bbbee0ef636c34e883c399e6fceaa7b508`. It revises exactly four existing English routes and adds no route:

- `/australia/canberra-australian-alps/namadgi-national-park/`
- `/australia/canberra-australian-alps/snowy-mountains-kosciuszko/`
- `/australia/margaret-river-southwest/`
- `/australia/margaret-river-southwest/margaret-river-wine-food/`

The page bodies were incomplete in the exact source snapshot. Their English `<main>` copy grew by +998, +981, +1,236 and +1,008 whitespace-delimited words respectively (+4,223 total), excluding related cards, source lists and advertising. The Hokkaido hub reference is 1,397 words and the Otaru/Shakotan local-guide reference is 1,030, using the same source/markup extractor; the Margaret River hub and each local guide exceed their corresponding reference. This advances the substantive Australia-route count from 76/97 to 80/97. It is a source and markup comparison, not a rendered-browser review.

## Route decisions added

**Namadgi** is planned as one full day from Canberra, using one trailhead and one open walk. The guide distinguishes the Visitor Centre/Naas Road approach and Woodland Walk from Booroomba Rocks, Square Rock via Corin Road, and Yankee Hat via Old Boboyan Road. It compares the 4.5km Cypress Pine Outlook walk with the separate 15km Mount Tennent summit, and gives a short walk or Canberra indoor day as the fallback when road, fire, smoke, weather or daylight removes the return margin. It notes that the Parks ACT track list showed Gibraltar Falls Lookout closed until further notice when checked on 13 October 2026; that status must be rechecked before travel.

**Snowy Mountains and Kosciuszko** are treated as a regional leg rather than a Canberra day trip. The guide makes Jindabyne the practical base for the Thredbo–Perisher corridor, distinguishes the Cooma/Jindabyne drive from the additional roads to Thredbo, Perisher and Charlotte Pass, and gives a two-night minimum plus a third night for a weather reserve. Charlotte Pass is the 18.6km, Grade 3, 6–8 hour return walk with winter road/oversnow access constraints; Thredbo depends on the Kosciuszko Express chairlift and its final descent. Weather or access failure means taking the reserved day in the gateway or using another route only after verifying it independently.

**Margaret River and the Southwest** now uses three nights for one base, five for a northern and central split, and seven to add a deliberate Augusta leg. Albany is a separate southern trip with at least two nights. The guide treats Transwa SW1 as a dated town-to-town coach, not a cellar-door or trailhead shuttle, and makes the last-mile transfer, check-in and daylight road move explicit. Weather, fire and park access can change the order or replace an exposed walk with a confirmed town meal or indoor booking.

**Margaret River Wine and Food** starts with the ride plan: a booked tour, confirmed sober driver or pre-arranged transfer. It keeps tastings to one nearby district, two or three purposeful appointments, a fixed meal and a daylight return. SW1 does not connect individual producers. If a booked driver falls through, the tasting route is cancelled; the fallback is a town-based meal. Cape walks, caves, the Augusta transfer and the long Perth drive stay on separate days.

## Official sources and access limits

The pages link the relevant source by name and topic. Official references checked for this batch include:

- [Parks ACT: Namadgi National Park](https://www.parks.act.gov.au/find-a-nature-park/namadgi-national-park) and [Namadgi walking tracks](https://www.parks.act.gov.au/find-a-nature-park/namadgi-national-park/namadgi-national-park-walking-tracks) for track grades, distances, unsealed approaches, park preparation, cultural context and recovery.
- [Parks ACT alerts](https://www.parks.act.gov.au/find-a-park/alerts) for the final current closure check. This page was not accessible to the browsing tool during this review. The access refusal was not bypassed, and no content from that alert page is claimed here.
- [NSW National Parks: Kosciuszko visitor information](https://www.nationalparks.nsw.gov.au/visit-a-park/parks/kosciuszko-national-park/visitor-info), the [Mount Kosciuszko Summit Walk](https://www.nationalparks.nsw.gov.au/things-to-do/walking-tracks/mount-kosciuszko-summit-walk/visitor-info), and the [Thredbo summit route](https://www.nationalparks.nsw.gov.au/things-to-do/walking-tracks/thredbo-to-mount-kosciuszko) for park sectors, gateways, road and seasonal constraints, route distance/grade, lift access and safety. [Live Traffic NSW](https://www.livetraffic.com/) is linked for dated road checks.
- [Transwa SW1](https://transwa.wa.gov.au/plan-your-journey/coach-lines/sw1), [Bureau of Meteorology WA forecasts](https://www.bom.gov.au/wa/forecasts/), [Explore Parks WA](https://exploreparks.dbca.wa.gov.au/experiences), and [Main Roads WA travel information](https://www.mainroads.wa.gov.au/travel-information/) for date-specific coach service, weather, official park/cave/coast experiences and road conditions. [Tourism Australia’s Margaret River overview](https://www.australia.com/en/places/perth-and-surrounds/guide-to-margaret-river.html) and the [Margaret River Busselton Tourism Association](https://www.margaretriver.com/) provide regional orientation.

The Leeuwin–Naturaliste-specific DBCA page returned HTTP 406, so no attempt was made to get around that restriction. The linked general Explore Parks WA page is used only for broad official experience planning. Park openings, fire danger, wind, coastal conditions, road status, coach service, venue appointments, lift operation and chains are treated as trip-date checks, not as standing promises.

## Translation, search and dates

Each page is directly translated into Traditional Chinese, Japanese, Korean and Thai. Four page batches contain 214 fresh keys each, and four search batches contain 28 fresh strings each. The earlier obsolete translations for the replaced source text were pruned from the eight affected older reviewed batches; the sitewide translation audit then reported 57,037 required strings, zero missing and zero stale in each locale. Page and search batch validation and sample checks passed. Provenance records the GPT-6 Codex execution family, exact runtime ID unverified, and same-assistant self-review as non-independent. The requested GPT-6 Luna runtime was not verifiable in the selected environment; no independent second-model review is claimed.

All four English search records were updated and translated search summaries/keywords were localized. Article `dateModified`, visible dates, and sitemap dates are set to 13 October 2026 for all four routes in all five editions. The sitemap retains exactly 4,560 URLs.

## Review limits and retained parallel correction

No headless browser, CDP, local server, HTTP crawler or security-setting change was used. Browser-rendered desktop/mobile layout, responsive overflow, interaction behavior and pixel appearance are unverified. No SVG was created for this batch. The two arrow SVGs from the parallel `31fc43817cd436e2f868058f4393ed59a800aec8` correction are retained unchanged relative to that commit: `assets/images/australia-kangaroo-island-regional-days.svg` and `assets/images/australia-kings-park-entry-choice.svg`. Their XML/geometry regression is not a pixel-render review; pixel acceptance remains separate.

## Verification

- `npm run audit` passed end to end: i18n coverage/audit (57,037 strings per locale, zero missing or stale), all Australia regressions and cumulative scope guards, country audits, and the final site audit (4,560 pages, 955 search records per edition).
- `npm run build` passed: 5,475 output files (4,577 HTML, 809 images; 321.7 MiB) and all 4,560 sitemap routes verified in `dist`.
- `npm run test:australia-alps-margaret-gaps` passed, checking the exact base and four-page scope, Hokkaido/Otaru text floors, route content and FAQ/schema parity, five-language localized pages and search summaries, 20 changed sitemap dates, and preserved parallel arrow assets.
- The four page batches passed structure/coverage validation and sample review in Traditional Chinese, Japanese, Korean and Thai. The four search batches passed validation/sample checks as well; all four page-batch samples finished without long-target reuse warnings.
- `git diff --check` passed before commit. The site-wide `npm run audit:australia-sources` was not run because that script sends HTTP range requests to every official citation; the user prohibited HTTP crawling. The official sources listed above were checked directly in the browsing tool, with access restrictions respected.

Commit, parent/tree IDs and source-branch push/readback are recorded below after completion.
