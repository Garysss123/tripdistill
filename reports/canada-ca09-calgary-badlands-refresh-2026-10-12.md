# Calgary & Alberta Badlands Canada hub and field-guide refresh

Reviewed 12 October 2026 on `codex/sprint-ca-09-content-20261012`, based directly on CA08 commit `f87440e3baf68ac4cb5dd0465422554e99432e0a`. The branch began at that exact commit. README, reports, instructions and Git history account for 32 of Canada's 73 existing English routes as already refreshed (the original five groups, Pacific Rim, Banff and Jasper); Calgary & Alberta Badlands was selected as the next untouched four-route group. No URL was added or removed. The `/canada/` overview card was refreshed as supporting navigation copy and is not counted as a completed article.

## Routes and English content delta

Rendered `<main>` word counts use `parse5`, compare each English page at the exact CA08 base to the working page, and count whitespace-delimited tokens. They measure copy volume, not editorial quality.

| Existing route | Added rendered words |
|---|---:|
| [Calgary & Alberta Badlands hub](/canada/calgary-badlands/) | 987 |
| [Calgary Core, Rivers & CTrain](/canada/calgary-badlands/calgary-core/) | 474 |
| [Drumheller & Royal Tyrrell Museum](/canada/calgary-badlands/drumheller-royal-tyrrell/) | 523 |
| [Dinosaur Provincial Park](/canada/calgary-badlands/dinosaur-provincial-park/) | 552 |
| **Total** | **2,536** |

The hub makes the two fossil landscapes separate road corridors. Three nights covers Calgary and Drumheller only (two Calgary nights and one Drumheller night). Four nights is the minimum for both badlands corridors (two Calgary nights, one near Drumheller and one near Brooks or the park). A fifth night gives the Drumheller valley a second day and creates weather room. The sequence puts a full gallery visit on a separate day from the roughly two-hour Drumheller–Dinosaur Provincial Park drive; it does not treat Banff as a same-day extension.

The city guide distinguishes Calgary's CTrain from its airport bus, the bounded 7 Avenue Free Fare Zone and the limited usefulness of a nominal intercity coach without its museum/valley connection. It lays out one downtown crossing, one Bow or Elbow River-pathway section, one indoor cultural stop and a transit-aware return. The Drumheller page builds around timed Royal Tyrrell admission, about two hours in the galleries, one nearby signed/outdoor stop and a local overnight. The Dinosaur Park guide uses Brooks as the southern access anchor, a full field day and an overnight near Brooks or the park, with separate booking and access decisions for the public scenic loop, signed walks and guided programs.

Each route gives concrete alternatives for heat, storms/lightning, smoke, cold, snow/ice, closures or road warnings. The fallbacks reduce or move exposed activity; they do not suggest entering closed land or using a long drive as shelter. Transport outside Calgary is described as vehicle or a date-confirmed named operator/coach with its local connection and return checked. ValleyConnect is described as seasonal and already closed for the 2026 season on the report date; it is not represented as year-round transport or a connection to Dinosaur Provincial Park.

For the required Japan reference comparison, the hub's corridor-first and transfer-first choices were checked against [Hokkaido's regional guide](/japan/hokkaido/), the city page against [Sapporo](/japan/hokkaido/sapporo/), and the route-planning detail against [Otaru & Shakotan](/japan/hokkaido/otaru-shakotan/). The comparison covered named gateways and final connections, the distinction between easy rail and seasonal/rural legs, a usable sequence with duration, separate overnight trade-offs and weather/access fallbacks. Source/content comparison was static; desktop/mobile browser rendering is a separate mainline acceptance task and is not claimed here.

## Official operating snapshot

Operating details below were checked on 12 October 2026 and are dated snapshots, not guarantees for future travel. Recheck live notices before booking or departure.

- Calgary Transit renamed the airport express from Route 300 to [Route 500](https://www.calgarytransit.com/news/introducing-the-new-500-series-express-routes.html) effective 31 August 2026; it remains a bus, and there is no CTrain station at the terminal. The [station map](https://www.calgarytransit.com/rider-information/lrt-and-bus-station-maps.html) and [fare rules](https://www.calgarytransit.com/fare-evasion) support the bounded downtown free-fare zone language.
- [Travel Drumheller's ValleyConnect page](https://traveldrumheller.com/valleyconnect/) lists seasonal service; the checked 2026 season had ended by 12 October. It does not provide a route to Dinosaur Provincial Park. The guides therefore require travelers without a car to verify each coach, tour, terminal and onward return leg for their own date.
- The [Royal Tyrrell Museum](https://www.tyrrellmuseum.com/visit/hours_admission) uses timed admission. Its fall schedule checked on 12 October listed Tuesday–Sunday hours of 10 a.m.–5 p.m., last ticket time 3:30 p.m. and no entry after 4 p.m.; holiday Mondays can have separate hours. The museum's [visit planning page](https://www.tyrrellmuseum.com/visit/Plan_Your_Day) supports an approximately two-hour gallery visit, and its [directions page](https://www.tyrrellmuseum.com/visit/Directions_Parking) places it about 6 km northwest of Drumheller in Midland Provincial Park; it is day-use, with free parking and no overnight camping at the museum site.
- [Alberta Parks' Dinosaur Provincial Park page](https://www.albertaparks.ca/parks/south/dinosaur-pp/) places the park 48 km northeast of Brooks and provides alerts. On the dated [visitor-centre schedule](https://www.albertaparks.ca/parks/south/dinosaur-pp/information-facilities/park-contacts/dinosaur-visitor-centre/) checked on 12 October, 9 a.m.–5 p.m. applied through that day; 13 October–20 December listed weekday visits by appointment and weekend hours of 11 a.m.–4 p.m. The [campground page](https://www.albertaparks.ca/parks/south/dinosaur-pp/information-facilities/camping/dinosaur/) listed a year-round campground but seasonal services; its notice said water had been shut off on 5 October. The [tour page](https://www.albertaparks.ca/parks/south/dinosaur-pp/activities-events/dinosaur-tours-events/) requires a booking/conditions check, and the [activities page](https://www.albertaparks.ca/parks/south/dinosaur-pp/activities-events/) supports the distinction between public routes and protected material. Current road and weather checks link to [Alberta 511](https://511.alberta.ca/) and [Environment and Climate Change Canada](https://weather.gc.ca/).

The exact source links are present on the relevant localized guides. No fares, fixed departure times, future opening date, tour seat, or universal campground service is promised.

## Translation, search and dates

Traditional Chinese, Japanese, Korean and Thai page, search and Canada-card content was translated and self-reviewed in the same GPT-6 Luna model, as authorized for this batch. This is not independent-model, Luna Max or human semantic review. The four page batches add 119 new route strings per locale and reuse 110 previously reviewed source strings; the separate search batches add 18 translated keywords per locale, and the card batch adds one translated summary per locale. These counts do not represent four newly completed routes in each locale beyond the four English source pages.

The Canada search index remains at the exact 73 unique routes from CA08; only the four Calgary/Badlands records change. The country-card copy is tracked separately from article completion. The four article routes carry 12 October 2026 article/sitemap dates across five editions. Exactly 20 existing sitemap `lastmod` values changed (four routes × five languages); URLs were unchanged. The existing country page date was already current from CA08.

The full catalog audit also found 364 obsolete keys in earlier reviewed batches (one each in the older Vietnam, Victoria and Shell groups per locale, plus 88 in the former Calgary batch per locale). The repository's existing stale-prune tool removed those inactive keys; required active translations were retained. Final audit evidence is recorded below after the complete run.

## Image subject and source declarations

The three existing 1600 × 1066 WebPs were inspected at pixel level, separately from their Commons page declarations:

- Calgary core shows the downtown skyline, Bow River corridor and surrounding greenway, consistent with the route subject.
- Royal Tyrrell shows indoor dinosaur displays; the alt text was corrected to “Dinosaur displays inside the Royal Tyrrell Museum” in the data manifest and localized pages.
- Dinosaur Provincial Park shows exposed badlands in the Red Deer River valley.

The exact Commons pages separately declare: [Calgary river/berm image](https://commons.wikimedia.org/wiki/File:A_berm_is_built_along_the_Bow_river_near_downtown_Calgary,_Alberta,_Canada_in_2022.jpg), Dwayne Reilander, CC BY-SA 4.0; [Royal Tyrrell exhibit image](https://commons.wikimedia.org/wiki/File:Albertosaurus_-_Canada%27s_Dinosaur_Museum._(12643048524).jpg), Bernard Spragg NZ, CC0; and [Dinosaur Provincial Park landscape](https://commons.wikimedia.org/wiki/File:Badlands,_Red_Deer_River_Valley,_Dinosaur_Provincial_Park,_Alberta._(50352612681).jpg), edk7, CC BY-SA 2.0. Credits identify the relevant source/creator/license. Pixel correspondence and Commons declarations are separate evidence; neither establishes uploader authority or an independent rights chain. No new image or SVG was added.

## Validation record

- `npm run audit:i18n`: passed across four localized editions × 55,845 required strings (223,380 targets), with zero missing/stale keys; locale-script scan reported zero problems.
- `npm run audit`: passed. The site audit checked 4,560 published routes (912 per edition), 955 search records per language and 4,560 unique localized page titles; Canada, existing CA06/CA07/CA08, CA09, UK, France, Italy, Malaysia, China/CN14B, image provenance and other registered regressions passed.
- `node scripts/test-canada-ca09-route-dates.mjs`: passed; exactly four article routes, the same 73 unique Canada routes, every non-target search record unchanged, the exact sitemap URL set retained, and only the four CA09 routes dated across five editions. All localized canonicals and Article dates, the separate country-card date, and the corrected image alt/source/license credit were checked.
- `node scripts/audit-canada.mjs`: passed; 18 hubs, 54 focused guides, 73 English / 365 five-language routes and expected sitemap dates.
- `npm run build`: passed with 5,469 files (4,577 HTML and 801 images); all 4,560 sitemap URLs verified in `dist`.
- `git diff --check`: passed.

No browser, headless browser, CDP, local server, deployment, integration/main update or production action was performed. The separate mainline task owns browser acceptance. No independent human/second-model translation review or photo-rights-chain clearance is claimed.
