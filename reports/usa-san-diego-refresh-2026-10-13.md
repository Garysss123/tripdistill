# San Diego U.S. source refresh — 13 October 2026

## Source boundary and duplicate check

Branch: `codex/sprint-us-after-los-angeles-20261013`, created from exact base `b7d32c7e1585d5af3cf3d4291dd323e5d2da30eb`; that base's parent is `d5f7d1689b784b4930cd9f7d4496ab3148929162`. The historical body comparison uses `71def01cd4d489552b9f5d67ca1a202becaa0435e` (11 September 2026).

The four chosen paths existed at the exact base, and each normalized visible `<main>` body matched the 11 September version. They do not appear in the nine source-scope reports already recorded at that base: the historical U.S. ledger and Hawaii, New Orleans, Atlanta, Miami/Orlando, Chicago, New England, Arizona and Los Angeles refreshes. This moves that particular disclosed source-work subtotal from 57 to 61 of 97 existing U.S. paths. The reports are not a complete history; 61/97 is not a quality-acceptance count. New York was not selected or edited. The `/usa/` overview is also byte-for-byte unchanged.

| Existing route | Main-body words at base → current | Substantive decisions added |
|---|---:|---|
| [`/usa/san-diego/`](/usa/san-diego/) | 1,195 → 1,532 | Compares downtown, Little Italy, La Jolla village and Coronado as bases; distinguishes two, three, four and five-plus nights; treats SAN → Route 992 or Flyer → Old Town as a real transfer; separates the Route 7 park, Route 30 coast and ferry chains; includes the last mile and arrival/return day. |
| [`/usa/san-diego/balboa-park/`](/usa/san-diego/balboa-park/) | 1,301 → 1,543 | Chooses one collection, garden circuit or zoo day by scale; separates public space, institutional admission and pass terms; dates the city parking/tram snapshot; traces Route 7, the venue walk and return. |
| [`/usa/san-diego/la-jolla/`](/usa/san-diego/la-jolla/) | 1,172 → 1,408 | Maps Route 30 service separately from the Cove last mile; distinguishes Point La Jolla/Boomer Beach's year-round closure from Children’s Pool's seasonal beach restriction; offers a village or other permitted public-space alternative and refuses closure workarounds. |
| [`/usa/san-diego/harbor-coronado/`](/usa/san-diego/harbor-coronado/) | 1,162 → 1,456 | Compares a Midway visit with a ferry day; names the distinct Broadway Pier and Fifth Avenue Landing tables; labels the $9/15-minute snapshot date; separates the bay-side landing, Route 904 and ocean shore, with a checked return and a safe fallback. |

Word counts are whitespace-delimited text from the parsed visible `<main>` element at the exact base and current generated page. They document body scope and are not a measure of editorial quality.

## Official references checked on 13 October 2026

- [San Diego International Airport: public transportation](https://www.san.org/before-you-go-travel-tips/public-transportation/) — Route 992 and the San Diego Flyer to Old Town; the terminal is not a Trolley rail stop.
- [MTS route maps and alerts](https://www.sdmts.com/transit-services/bus-routes), [Route 7 sheet](https://www.sdmts.com/sites/default/files/routes/pdf/7.pdf) and [Route 30 sheet](https://www.sdmts.com/sites/default/files/routes/pdf/30.pdf) — checked sheets effective 6 September 2026. Route 30 corridor service does not guarantee a door-to-Cove connection.
- [City Balboa Park parking page](https://www.sandiego.gov/parking/balboapark) — page updated 27 August 2026; at review it said paid parking ran through 31 December 2026 and was scheduled to end 1 January 2027, identified Lower Inspiration Point's first three hours for non-city residents, and listed the free tram as 8 a.m.–8 p.m. These are a dated snapshot, not a future promise.
- [City Point La Jolla notice](https://www.sandiego.gov/park-and-recreation/point-lajolla) and [Lifeguards: Children’s Pool](https://www.sandiego.gov/lifeguards/beaches/pool) — distinct year-round and seasonal access restrictions. Follow current signs and lifeguard instructions; do not use a nearby stair, track or beach to bypass a closure.
- [National Weather Service San Diego](https://www.weather.gov/sgx/) and [San Diego Lifeguards beach information](https://www.sandiego.gov/lifeguards/beaches) — dynamic forecast, warnings and local beach guidance. These sources are check points for the travel date, not guarantees for later conditions.
- [Flagship ferry schedules](https://www.flagshipsd.com/ferry-routes) and [departure directions](https://www.flagshipsd.com/parking-and-directions) — separate departure piers and route tables. The Broadway Pier page showed a 15-minute crossing and $9 one-way adult fare in the 13 October review snapshot; schedule, capacity, fare and terms can change and must be rechecked for the exact sailing.
- [MTS Route 904 sheet](https://www.sdmts.com/sites/default/files/routes/pdf/904.pdf) — effective 7 June 2026 and lists Ferry Landing, Orange Avenue and Hotel del/Strand-area stops. This dated PDF is not proof of service on every future date; verify operating day, direction and return.
- [City of Coronado beach information](https://www.coronado.ca.us/244/Coronado-Beach) — local beach/access rules. The ferry landing is on the bay; the ocean shore is a separate leg.

## Translation, generated metadata and scope

Each of the Traditional Chinese, Japanese, Korean and Thai reviewed batches has 165 new translated keys; 76 other source keys were already covered and reused. The translation targets were written in the target language and validated for locale script/literal preservation. The same GPT-6 runtime translated and self-reviewed each batch. Its exact runtime variant is unavailable, and the reviewer is not independent: no second-model or human review is claimed. The cleanup dry-run identified exactly 148 stale keys in each superseded `38c-san-diego-editorial.json` batch (592 total); those obsolete keys were pruned while retaining existing route records and drafts.

English, Traditional Chinese, Japanese, Korean and Thai each retain 955 search records. Four San Diego search summaries changed per edition. Four routes across five editions receive the 13 October 2026 `dateModified`/sitemap date: exactly 20 date changes, with all 4,560 sitemap URLs retained. The USA route inventory remains 97. No image or SVG file changed or was added.

## Verification and limits

- `node scripts/test-usa-san-diego-refresh.mjs` passed exact-base and September body comparison, duplicate-scope checks, four-page body/search scope, dates, five-edition content, New York and overview immutability, sitemap cardinality and asset/SVG scope. The cumulative Florida, Chicago, New England, Arizona and Los Angeles regressions and the integration-scope test were also extended to account for this authorized later San Diego batch; all passed.
- Full repository `npm run audit` passed, including i18n literal/script/coverage/audit, all country and route regressions, `audit:usa`, `audit:usa-editorial`, the cumulative U.S. source-scope tests, integration scope and final site audit. Translation audit reported 58,640 required strings per locale with zero missing or stale entries; final site audit found 4,560 published routes and 955 search records per language.
- `npm run build` passed: 5,493 files (4,577 HTML, 821 images; 324.5 MiB), 4,560 sitemap routes verified in `dist`, with 14,507 files of reported headroom before the Cloudflare Pages safety boundary.
- The work was source-only. No headless browser, CDP, local server, HTTP crawl or security-configuration change was used. No rendered UI or visual acceptance is claimed. No `main` integration or deployment is included.
