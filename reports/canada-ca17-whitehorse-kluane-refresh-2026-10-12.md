# CA17 Canada source sprint: Whitehorse & Kluane

- Date: 12 October 2026
- Branch: `codex/sprint-ca-17-content-20261013`
- Exact base: `15f37f6a806581b8e347483ff2df52131d0a2fae` (CA16)
- CA16 parent: `5e65f15ccb9f877e280e6aa1de80cead92eff838`

## URL reconciliation and selection

Canada has 73 existing English routes: `/canada/` and 18 clusters with one hub plus three field guides each. CA16 recorded 64 completed URLs. This pass selected only the four existing Whitehorse & Kluane routes:

- `/canada/whitehorse-kluane/`
- `/canada/whitehorse-kluane/whitehorse-river/`
- `/canada/whitehorse-kluane/kluane-haines-junction/`
- `/canada/whitehorse-kluane/miles-canyon-aurora/`

The route inventory remains 73 unique URLs. CA17 brings the material-refresh count to 68/73; the exact final five are `/canada/` and the Yellowknife & Great Slave Lake hub and its three guides. The country card and all other regional copy are outside this pass. No route was added or removed.

The source regression compares this cluster block against the exact base and verifies that the Whitehorse pages existed before CA17. The four English `<main>` bodies gained 642, 844, 946 and 943 whitespace-delimited visible words, respectively. These deltas demonstrate the extent of the copy change, not editorial quality by themselves.

## Route decisions and operating limits

The hub compares Whitehorse as the services and recovery base with Haines Junction as the road-accessible Kluane base. It uses a four- or five-night first-trip frame, calls out the 160 km Whitehorse–park leg, and states that Kluane trailheads have no public transportation. Its three-day sample separates the city day, the highway transfer and one chosen park route. Seasonal visitor-centre hours, daylight, weather, fuel/service confirmation and a weather-move night are part of the plan. A roadside visit and a flightseeing trip into the remote interior are described as different products.

The Whitehorse River guide distinguishes city transit from regional trail access. It links the S.S. Klondike to the downtown river path and city bus, asks readers to check each cultural site’s date-specific hours, and holds Miles Canyon and Kluane for separate access plans. Rain, smoke, freeze–thaw, holiday closures and fatigue have specific lower-effort or preparation-day fallbacks.

The Kluane & Haines Junction guide compares concrete effort levels while keeping the road leg explicit: the 0.5 km wheelchair-accessible Kokanee boardwalk at Kathleen Lake, the 7.6 km St. Elias Lake route listed at 2–4 hours on easy terrain, Auriol’s 15 km loop listed at 4–6 hours/moderate, and the steep 10 km King’s Throne return listed at 4–6 hours/difficult. It warns that conditions, notices and a visitor-centre listing do not establish same-day access. As checked on 12 October, Parks Canada listed Kathleen Lake camping and oTENTik as closed until May 2027; this is dated status to recheck, not an evergreen promise. Lower routes, an operating visitor centre, staying in town or moving the park day are the fallbacks.

The Miles Canyon guide makes the roughly 15 km downtown walking loop a daylight activity and the shorter vehicle approach a separate choice. Travel Yukon describes the south-side access road as seasonally closed in winter and the north approach via Chadburn Lake Road as year-round. Aurora viewing remains an optional late-night probability window: darkness, clear sky, cold, operator pickup or a safe legal vehicle return all have separate go/no-go checks. The guide protects the next morning from fatigue and tells the reader to end the attempt when conditions are poor.

For same-layer editorial comparison I read the source for [`japan/hokkaido/index.html`](../japan/hokkaido/index.html) and [`japan/hokkaido/otaru-shakotan/index.html`](../japan/hokkaido/otaru-shakotan/index.html). The Hokkaido hub makes gateway, rail-versus-car, nights and seasonal buffer choices; Otaru separates the easy Sapporo rail day from the exposed Shakotan branch and gates it on the last return and sea conditions. CA17 applies those source-level tests to city transit versus remote road access, separate bases, a moveable park day, route effort and return safety. This was a source comparison only; no browser, headless, CDP or local-server rendering review was performed.

## Official source checks

Planning facts and operational limits were checked against the direct official or primary pages below on 12 October 2026. Live weather, road conditions, schedules and opening hours must be checked again for a travel date.

- [Parks Canada: Kluane visit and access](https://parks.canada.ca/pn-np/yt/kluane/visit) — park location, Haines Junction gateway, remote interior access and seasonal visitor-centre information.
- [Parks Canada: hiking in Kluane](https://parks.canada.ca/pn-np/yt/kluane/activ/randonnee-hiking) — named trail distances, listed time/difficulty, access limits and notices.
- [Parks Canada: Kathleen Lake](https://parks.canada.ca/pn-np/yt/kluane/visit/services/kathleen) — Kokanee boardwalk, day-use area and dated seasonal facility status.
- [City of Whitehorse: transit](https://www.whitehorse.ca/living-in-whitehorse/transit/) and [routes and schedules](https://www.whitehorse.ca/routes-schedules/) — city service and current timetable amendments.
- [Parks Canada: S.S. Klondike visitor information](https://parks.canada.ca/lhn-nhs/yt/ssklondike/visit) — riverbank pedestrian access and transit access.
- [Kwanlin Dün Cultural Centre](https://kwanlindunculturalcentre.com/) — verify date-specific visitor hours.
- [511 Yukon](https://511yukon.ca/) — current closures, visibility, road conditions and wildlife-collision information.
- [Environment and Climate Change Canada](https://weather.gc.ca/) — local forecasts and alerts.
- [Travel Yukon: hiking near Whitehorse and Miles Canyon](https://www.travelyukon.com/en/see-and-do/activities/hiking-near-whitehorse-exploring-miles-canyon) — named walking loop and seasonal access notes.
- [Canadian Space Agency: aurora viewing tips](https://www.asc-csa.gc.ca/eng/astronomy/northern-lights/aurora-viewing-tips.asp) and [University of Alaska Fairbanks Geophysical Institute aurora forecast](https://www.gi.alaska.edu/monitors/aurora-forecast) — darkness, cloud, cold and activity context; a forecast is not a visibility guarantee.

No whole-site crawler or broad source crawl was run. No fares, unverified headways, guaranteed services or future operating schedules were invented.

## Images and provenance

No image was added or downloaded. The three existing 1600×1066 WebP files were visually checked against the visible subjects: the Whitehorse Yukon River scene, Dall sheep beneath a steep Kluane face, and Miles Canyon with its suspension bridge. The Kluane alt text was corrected to describe the Dall sheep actually visible. Photo bytes and source/creator/license declarations were otherwise left intact; this visual/source check is not independent uploader-authority, rights-chain or legal clearance.

The exact files and SHA-256 values are:

- [`canada-whitehorse-kluane-whitehorse-river.webp`](../assets/images/canada-whitehorse-kluane-whitehorse-river.webp) — `397545ddb2990663dd0614da07e9bca038e799921c12a2ce07ffbef381a150bf`
- [`canada-whitehorse-kluane-kluane-haines-junction.webp`](../assets/images/canada-whitehorse-kluane-kluane-haines-junction.webp) — `526055d772e4a8bfb49aaf0c7cf5d436b2988e19b9aae6c4e17160adb1502575`
- [`canada-whitehorse-kluane-miles-canyon-aurora.webp`](../assets/images/canada-whitehorse-kluane-miles-canyon-aurora.webp) — `4f2a3a30f382c0541f1d34999882880fc851976a5776250c5ed4c92ab795b89c`

No SVG was added, so no new XML, geometry or SVG pixel check was required. The parent/main conversation should inspect these three existing photographs independently as requested.

## Five-language output and review provenance

Four reviewed batches, `zzzzzzk-ca17-whitehorse-20261012.json`, cover the same four page routes in `zh-Hant`, `ja`, `ko` and `th`. Each carries 205 newly translated keys plus 33 still-current reviewed translations retained from that locale’s legacy Whitehorse batch. The legacy batch’s 95 obsolete entries per locale were moved intact to `data/i18n/superseded/`; no draft batch was altered or deleted. Seventy-four other route keys are supplied by existing reviewed sibling batches. The English search summaries are also visible page summary units, so their translations are owned by the page batches; no empty or duplicate search delta was added.

The batch validators and route samplers passed for all four locales. Samples included localized headings, the longest route guidance, date labels, official-source titles, search summaries and access figures; no long target was reused for different source sentences. Global translation approval later checked 56,407 current strings per locale. The translations were written and self-reviewed by GPT-6 Codex. The execution environment did not expose a more specific runtime model identifier, so this report does not claim GPT-6 Luna, a second model, an independent review or a human review.

## Scope, dates and limitations

English page metadata and all four existing search records were regenerated from the Whitehorse source only. All 73 Canada search URLs remain unique and unchanged as a set; only the four selected search records changed. The four pages carry `12 October 2026` / `2026-10-12` in the five editions. Exactly 20 existing sitemap `lastmod` entries changed (the four routes × five editions). The regression compares the full sitemap URL/date maps against the exact CA16 base, confirms the PEI dates did not move, and confirms the Niagara directory remained unchanged. The CA09–CA16 cumulative regressions were updated to recognize these four later CA17 routes, then all eight passed.

No main/integration branch, deployment, local web server, headless browser, CDP, security configuration or unrelated content was changed. The parallel Niagara correction remains for its integration writer. A build is not deployment, visual acceptance or production verification.

## Audit and build

`npm run audit` passed, including the i18n merge, all four CA17 batch validations and samples, Canada structural/source-date checks, CA09–CA17 route/date/search regressions, image provenance and the full site audit. Translation audit approved 56,407 strings in each localized catalog; the site audit verified 4,560 published routes, 955 search records per language and 4,560 unique localized page titles.

`npm run build` passed and created 5,477 local `dist` files (4,577 HTML and 805 images, 320.9 MiB). It verified all 4,560 sitemap routes and reported 14,523 files of headroom before the Pages safety boundary. This was a local build only; nothing was deployed.

The first audit run stopped at a missing local `dist` prerequisite for the existing UK Peak District regression. After the required local build, the complete audit passed. The Canada date audit initially needed the four CA17 routes added to the shared Canada date guard; after that correction the Canada audit and full regression chain passed. `git diff --check` passed. No browser render, whole-site crawler, external review, headless/CDP session, local server or security-setting change was made.
