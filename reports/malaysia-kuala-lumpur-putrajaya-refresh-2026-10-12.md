# Malaysia MY14: Kuala Lumpur & Putrajaya refresh — 12 October 2026

## Scope and route selection

The topic branch is `codex/sprint-my-14-content-20261012`, created from MY13 commit `b0c6696bf28893c4498858830a714acd084f435f` (parent `c0015c40305735164f12140d649b8e948d3bf323`). The README, source collection, MY12/MY13 reports and Git history show 14 regional clusters with four children each: twelve existing five-page clusters (60 hub/child routes) had substantive bodies before this pass. Kuala Lumpur & Putrajaya was still unrefreshed; Kinabalu Park & Kundasang and the country hub remain after it.

Only these five existing routes were revised:

- `/malaysia/kuala-lumpur-putrajaya/`
- `/malaysia/kuala-lumpur-putrajaya/merdeka-chinatown/`
- `/malaysia/kuala-lumpur-putrajaya/klcc-bukit-bintang/`
- `/malaysia/kuala-lumpur-putrajaya/batu-caves/`
- `/malaysia/kuala-lumpur-putrajaya/putrajaya-civic-core/`

The 13 other regional clusters, the Malaysia country hub and all paths remain unchanged. In particular, this pass did not rewrite Penang, Cameron Highlands, Ipoh, Langkawi, Melaka, Taman Negara, Perhentian/Redang, Kota Kinabalu, Sandakan, Kuching, Semporna, Gunung Mulu or Kinabalu Park.

## Content added

The exact-base rendered English `<main>` text adds 1,391 whitespace-delimited words: hub +371; Merdeka/Chinatown +226; KLCC/Bukit Bintang +220; Batu Caves +273; Putrajaya Civic Core +301.

The hub compares three, four and five nights around a single rail-connected hotel base. It distinguishes KL Sentral/Brickfields, Chinatown/Merdeka, KLCC and Bukit Bintang by the transfer each simplifies, then separates the historic walking day, tower/park district, northbound Batu Caves branch and Putrajaya branch. It leaves a rain/rest buffer and warns that arrival/departure times determine the number of usable full days.

The children now name the practical legs and access decisions:

- Merdeka/Chinatown: arrive at Masjid Jamek, follow public streets from the Klang–Gombak confluence and Merdeka Square to Petaling Street, then leave from Pasar Seni. Worship, museum entry and river access remain subject to site notices.
- KLCC/Bukit Bintang: choose KLCC or Bukit Bintang as the same-district base; use the signed covered walkway only when current signs show it is open, with rail or street routing as alternatives.
- Batu Caves: treat this as a half-day KTM Komuter branch with a verified return; the 272 steps are optional and depend on heat, rain, footwear, mobility and crowds.
- Putrajaya: use KLIA Transit to Putrajaya & Cyberjaya station, then arrange a named local transfer and pickup for Precinct 1; walk a compact civic/lake sequence and return via the confirmed chain.

Each page adds a named walk/sequence, lodging duration guidance, official date-sensitive checks, and an alternative for heat, storms, closures, service changes or unavailable tickets. No exact fare, headway, departure, admission slot, visitor opening or journey duration is promised. The Japan same-level comparison used `/japan/osaka/` and `/japan/osaka/namba/` as source-content references for base choices, station specificity and day sequencing. Desktop/mobile rendered comparison was not performed.

## Official reference checks and limits

The page links to and was checked against a bounded set of official sources:

- [Tourism Malaysia destination-guide portal](https://ebrochures.malaysia.travel/destination-guide/)
- [MyRapid Journey Planner and service-status entry point](https://myrapid.com.my/)
- [MyRapid integrated transit map, dated 11 June 2026](https://myrapid.com.my/wp-content/uploads/2026/06/Integrated-Transit-Map_110626_V2.pdf)
- [KTM Berhad train timetables](https://www.ktmb.com.my/traintime.html) and [MyRailtime date-specific lookup](https://online.ktmb.com.my/TimeTable/Search)
- [KLIA Ekspres KLIA Transit stations and service information](https://www.kliaekspres.com/products-fares/klia-transit/)
- [PETRONAS Twin Towers admission/ticketing](https://www.petronastwintowers.com.my/plan-your-visit/admission-ticketing/)
- [Suria KLCC Park visitor information](https://www.suriaklcc.com.my/attractions/klcc-park/)
- Perbadanan Putrajaya [visitor destinations](https://tourism.ppj.gov.my/destination) and [visitor map](https://tourism.ppj.gov.my/map)

The Tourism Malaysia standalone Kuala Lumpur guide and a legacy MyRapid planner path returned 403 during source checking; the official destination portal and current MyRapid homepage/map were used instead. The local transfer from Putrajaya & Cyberjaya station is clearly separated from the rail leg. Travelers are directed to check dated operator/service/visitor notices before travel. No timetable, fare or guaranteed service is asserted.

## Photos and rights-record limits

All four pre-existing Kuala Lumpur cluster photos were opened at local pixel dimensions and compared with their linked Commons pages. They match their subjects; the original bytes and source declarations are unchanged:

| Asset subject | Recorded creator | Declared source-page license |
| --- | --- | --- |
| Sultan Abdul Samad Building | Marcin Konsek | CC BY-SA 4.0 |
| Kuala Lumpur skyline | CEphoto, Uwe Aranas | CC BY-SA 3.0 |
| Batu Caves | Bernard Spragg. NZ | CC0 1.0 |
| Putra Mosque and lake | Azuladnan | CC BY-SA 4.0 |

The skyline Commons page offers multiple license versions; that is not treated as an automatic conflict. The local pixel and source-page checks do not prove uploader authority or establish an independent legal rights chain. No mismatch was found, so no image was disabled and no new SVG was made. Existing original Melaka/Somerset SVG XML and geometry regressions remain covered by the broader audit. Sipadan images and guards were not modified.

## Localization, search and dates

The five existing pages and their search records are synchronized in English, Traditional Chinese, Japanese, Korean and Thai. Each localized edition has one reviewed 193-key page batch and one one-key search delta. All batches record writer and reviewer as `Codex GPT-6`, with `independentSecondModel: false`; this is same-model self-review, not a claim of a second-model or human translation review.

748 obsolete values across the four locales were removed from superseded Malaysia/translation batches so approval has no stale translation keys. No active route string was removed. After approval, each locale has 55,973 active strings and no missing or stale entries. The localized build has 912 pages and 955 search records per locale.

Exactly 25 existing `lastmod` values changed (five existing routes × five locales), all to 12 October 2026. Source and `dist` sitemaps retain the same 4,560 URLs. Exactly five English search records changed; each localized index still has 955 records and an unchanged URL set.

## Verification and release limits

- `npm run build` passed: 5,468 files (4,577 HTML, 802 images; 320.4 MiB) and all 4,560 sitemap routes verified.
- `npm run test:malaysia-kuala-lumpur-refresh` and `npm run test:malaysia-kuala-lumpur-refresh -- --dist` passed. The regression checks exact-base body growth, five existing routes × five locales, localized FAQ/schema and dates, the 25-date scope, unchanged sitemap/search URL sets, 955 search records per locale, and unchanged image bytes.
- The existing Kuching/Sarawak scope regression was updated to include the five subsequently reviewed KL pages in its expected shared Malaysia sitemap/search delta. Its five Kuching pages' route, content, translation, source-link and photo-hash assertions remain in place and pass.
- `npm run audit` passed after the targeted fixture update. It includes translation coverage/scripts, search and image-license/provenance guards, Malaysia route/date/photo/SVG checks, China CN14B, Lake District and Somerset diagram tests, UK/France regressions and the site audit.
- `git diff --check` passed.

No browser, headless browser, CDP, local server, full-site crawler, deployment, integration/main/prod action or force push was used. The required repository editorial gate calls for rendered desktop/mobile comparison; that UI evidence remains outstanding because the delegated task prohibited browser and server use. A pushed topic branch is not an integration or production release.
