# Vietnam next-content sprint: route and evidence record

Reviewed 12 October 2026 on `codex/sprint-vn-next-content-20261013`, created from `4c7a5d2bd65a6a82474813c04db718dedb1ffc48` (tree `61dd4ddbec5930a99af646b83fbf2fd6c6e44245`; parents `ca2c1517ae3d962b5a4370c6c73c056f4ba14939` and `60f1b297bb15ace05803e8bee50e534914666e35`). This topic branch is kept separate from `main` and `integration`; publish state is recorded after the final push/readback.

## Historical de-duplication

The earlier 40/99 figure is corrected: the verified historical total is **39/99**. The exact route set is six Hanoi, six Sapa, six Ha Giang, seven Ninh Binh, seven Hue, and seven Da Nang/Hoi An routes. Their visible English main-body fingerprints were compared between initial atlas snapshot `8a1ada3b4021d077fd468c9c318d91823177c0cb` and the requested base `4c7a5d2bd65a6a82474813c04db718dedb1ffc48`. After excluding sources, credits, cards and review-date text, all 39 have different fingerprints and positive body word gains (8,345 words total). Exact URLs, per-route SHA-256 hashes, word counts, and the 56 routes left outside the credited set are saved in the [coverage ledger](vietnam-coverage-ledger-20261013.json).

| Historical route group | Count |
| --- | ---: |
| Hanoi | 6 |
| Sapa | 6 |
| Ha Giang | 6 |
| Ninh Binh | 7 |
| Hue | 7 |
| Da Nang/Hoi An | 7 |
| **Previously improved** | **39** |

The country overview `/vietnam/` is not counted: after removing its regional cards, source/credit blocks and review date, its visible-body SHA-256 is identical at both snapshots (`e7c9cc972cbf5765b052a049cb34bfc7eebde1278357f729fafb59d72a3a2880`). The West Lake, O Quy Ho and Meo Vac child pages are also excluded because their changes were credit/CTA-level only. Those exclusions are recorded in the ledger.

The four selected current-sprint routes are disjoint from the historical 39 and had identical visible body text at the initial snapshot and the requested base. All four now have substantive body updates. This yields **43/99 improved and 56 remaining**, after the full audit/build gates below passed. The route ledger records the selected pages' base/current hashes and increments.

| Exact route | Normalized body words at base | Normalized body SHA-256 |
| --- | ---: | --- |
| `/vietnam/ha-long-cat-ba/core-cruise/` | 592 | `600aa82ca9168ff6c72727407babb733db8f2c1f7be6fa3dfbb2a645475e8df9` |
| `/vietnam/phong-nha-ke-bang/paradise-tien-son-caves/` | 558 | `006a5ee973800cac18331207e1ded428d011836ad5c89bf12c8793a2d8af6942` |
| `/vietnam/ho-chi-minh-city/saigon-river-waterbus/` | 525 | `67d4f5297310afd04d89172aa5344b463e99ecd934479b5af012620f7b3d3df4` |
| `/vietnam/da-lat-central-highlands/da-lat-lake-railway-core/` | 624 | `05b0c21cf1c9082b7c55243a68b91ea5ad467a11c4a73a319d2b66a4b7de2ce9` |

This proves the four bodies were not materially refreshed between those snapshots; it does not prove the unavailable 40-route list or any Vietnam-wide remaining count. All four are existing full pages, not cards or date-only updates.

Using the ledger's normalized visible-body method (excluding source/credit blocks, cards and review dates), the four current pages gain 1,189 words: Ha Long +266, Paradise/Tien Son +290, Saigon Waterbus +352 and Da Lat +281. Existing page image references are unchanged.

The raw child-page reference checked was `japan/hokkaido/otaru-shakotan/index.html`; its route is built around an executable access decision, named sequence, last-return and weather fallback, separate base choice, and official sources. The Vietnam pages retain their field-guide template and receive individual HTML decision diagrams and place-specific route logic.

## Official operating checks used

- Ha Long: [daytime vessels](https://halongbay.com.vn/boats?type=2), [overnight vessels](https://halongbay.com.vn/boats?type=1) and [approved itineraries](https://halongbay.com.vn/tours) list separate port assignments. The text now tells readers to match the named vessel to its actual pier and keep a shore fallback. The management board’s [weather notices](https://halongbay.com.vn/en/p/1013-canh-bao-som-dong-loc-tren-bien) support checking the day-of call.
- Phong Nha: the park’s [Paradise Cave page](https://phongnhakebang.vn/travel/dong-thien-duong13-en) gives the 1.6 km shaded approach, 500 m walk and 1 km public boardwalk. Its [Tien Son page](https://phongnhakebang.vn/travel/dong-tien-son-chon-bong-lai-canh3-en) gives roughly 600 steps and currently limits the public route to 400 m because of a hazard. The page dates that volatile limit to this review and asks visitors to recheck it.
- Ho Chi Minh City: [route information](https://saigonwaterbus.com/water-bus), [online booking](https://saigonwaterbus.com/dat-ve-truc-tuyen), [online-ticket terms](https://saigonwaterbus.com/dieu-khoan-su-dung-dat-ve-va-thanh-toan-truc-tuyen), and the [live departure page](https://saigonwaterbus.com/lich-khoi-hanh) support the one-way ticket, separate return, current-service check and road fallback guidance.
- Da Lat: the [Vietnam National Authority of Tourism](https://vietnamtourism.gov.vn/en/post/20204) and [Lâm Đồng city service page](https://lamdong.gov.vn/sites/en/dalatcity/SitePages/service.aspx) identify the station/tourist route, but the material available for this review does not prove a live departure. No historical timetable is presented as current; the rail leg stays optional until both directions are confirmed.

## Change and gate record

- Four existing English pages now have route-specific decisions, operating limits, contingencies and official source links. Existing credited photos remain in place. Four responsive route diagrams use semantic HTML/CSS; no SVG or raster artwork was created.
- Search changes are limited to the same four route records. Sitemap lastmod changes cover the four routes in five locale URL editions (20 URLs), dated `2026-10-12`.
- `npm run audit:vietnam` passed: 14 hubs, 84 child guides, 99 English routes, 495 localized sitemap URLs and 99 Vietnam search records.
- One 193-key batch per locale (`zh-Hant`, `ja`, `ko`, `th`) is complete and marked reviewed. Each records GPT-6 Luna as writer and same-model self-reviewer, with `independentSecondModel: false`. The reviewer is not independent, and the exact runtime build was not exposed.
- A stale-key scan found and removed 68 obsolete strings per locale from the four prior Vietnam batches (18 Ha Long, 18 Phong Nha, 19 Da Lat, 13 Ho Chi Minh City), for 272 removals total; the final stale-key scan reports zero. All active translation keys are present.
- Full `npm run audit` passed, including translation, locale-script, route-scope, page, source, and site audits. `npm run build` exited 0 and built 5,493 files (4,577 HTML, 821 images, 323.8 MiB), verifying all 4,560 sitemap routes.
- The sitemap and search regression guards have exact Vietnam route scope added for this sprint because older snapshot guards only listed prior Australia, Switzerland, Canada and Malaysia deltas. No deployment was run. No SVG/raster artwork was created, so no new SVG XML/geometry or pixel check applied. The HTML/CSS diagrams were not browser-rendered because browser/headless/local-server use was prohibited; the main task context still needs its requested visual review.

## Exact parity and verification

The sitemap retains 4,560 URLs with zero additions or removals; exactly 20 lastmod values change (the four paths in `en`, `zh-Hant`, `ja`, `ko` and `th`). Exactly four English search records change; all other English search rows are unchanged. Localized page and search generation, translation coverage, canonical/date parity and the complete audit/build passed. `git diff --check` passed. No SVG or raster assets changed. No deployment was run; the final topic-branch commit and remote readback are reported after push.
