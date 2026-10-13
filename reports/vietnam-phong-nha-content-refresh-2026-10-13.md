# Phong Nha–Ke Bang route refresh — 13 October 2026

## Scope and historical deduplication

This source-only batch starts at exact commit `cc6de926e49c81324d09cb02590366fefbd8a4eb` on `codex/sprint-vn-after-mui-ne-20261013`; its parent is `1c54448e4548004d6d012fd12682c33d69fbd25f`. The precise Vietnam coverage ledger recorded 67 of 99 substantive English routes and 32 remaining. The four routes below were listed among those remaining paths. No route was added or removed.

- `/vietnam/phong-nha-ke-bang/`
- `/vietnam/phong-nha-ke-bang/son-river-phong-nha-cave/`
- `/vietnam/phong-nha-ke-bang/chay-river-dark-cave/`
- `/vietnam/phong-nha-ke-bang/nuoc-mooc-forest-springs/`

`npm run test:vietnam-phong-nha-refresh` compares Parse5-visible `#main-content` text at the initial atlas commit `8a1ada3b4021d077fd468c9c318d91823177c0cb`, the exact requested base, and the current source. It omits navigation, scripts, styles, SVG, ads, source-credit blocks and review-date phrases, then counts whitespace-separated visible words. Each selected route has the same initial-atlas and requested-base fingerprint and a different current fingerprint, so none had a prior substantive body update. The test separately verifies Paradise–Tien Son Cave: its base fingerprint differs from the initial atlas after the 12 October refresh, and its current fingerprint still equals the base. It is therefore excluded and unchanged.

| Route | Base words | Current words | Added words |
| --- | ---: | ---: | ---: |
| Phong Nha–Ke Bang hub | 1,064 | 1,531 | +467 |
| Son River–Phong Nha Cave | 594 | 968 | +374 |
| Chay River–Dark Cave | 586 | 948 | +362 |
| Nuoc Mooc Forest Springs | 581 | 941 | +360 |
| **Total** | **2,825** | **4,388** | **+1,563** |

Coverage advances from 67/99 to 71/99 substantive routes, leaving 28. The route-specific SHA-256 fingerprints and the excluded historical route record are in [the coverage ledger](vietnam-coverage-ledger-20261013.json).

## Route choices and additions

The hub frames a two-, three- or four-night stay. Two nights allow one confirmed field day between transfers. Three nights allow a separate second outing. Four nights provide two distinct field days and a full weather reserve. Phong Nha village is the local base when the confirmed pickup serves it; Dong Hoi can work for rail or airport connections but adds a road transfer at each end. No public connection, journey time or last departure is asserted.

The guide keeps Son River–Phong Nha Cave, the managed Chay River–Dark Cave program and Nuoc Mooc forest visit as separate day choices. It does not count two trips in the same catchment as independent weather alternatives. Reserve a full day for each, verify the actual check-in, route and return before committing, and leave an unbooked weather day. If water level, rain, a closure, provider advice or an unanswered access question makes a route uncertain, cancel it, return to base or use the reserve; do not improvise an unverified substitute or attach uncertain return travel to a same-day train or flight.

The three focused pages explain the distinct boat/cave, supervised river activity and forest/stream access decisions. They call out check-in, daylight and return-buffer dependencies and instruct travelers to confirm the present operator and route conditions. The hub and pages retain unknowns instead of guessing: opening and gate times, fares, ticket availability, booking rules, transport service and duration, last return, exact route and water conditions, activity availability, access limits, age or health rules, and cancellation or refund terms.

## Official references and time limits

The three [National Park official pages—Son River cave](https://phongnhakebang.vn/travel/phong-nha-ky-quan-de-nhat-dong1-en), [Chay River–Dark Cave](https://phongnhakebang.vn/travel/tuyen-du-lich-song-chay-hang-toi5-en) and [Nuoc Mooc](https://phongnhakebang.vn/travel/diem-du-lich-sinh-thai-suoi-nuoc-mooc7-en)—were marked in the guides as unavailable to this review on **13 October 2026**. No hours, ticket, operating schedule or present access detail was inferred from those pages. Travelers are directed to verify current information with the park and responsible operator.

The [National Centre for Hydro-Meteorological Forecasting](https://www.nchmf.gov.vn/kttv/) portal is linked for a current, locality-specific travel-date check. The separately dated [13 October flash-flood and landslide bulletin](https://www.nchmf.gov.vn/kttv/vi-VN/1/tin-canh-bao-lu-quet-sat-lo-dat-sut-lun-dat-do-mua-lu-hoac-dong-chay-tren-khu-vuc-cac-tinh-thanh-pho-quang-tri-hue-va-da-nang-post54593.html) concerns its named provinces; it is a regional hazard reference, not a Phong Nha park status or site-specific forecast. It is not presented as a live condition or go/no-go determination.

## Five-language copy and provenance

All four pages have actual Traditional Chinese, Japanese, Korean and Thai translations, with corresponding translated search terms. New reviewed page batches contain 92 source keys and search batches contain 14 keys per locale. The four locale catalogs each contain 58,793 required strings with no missing or stale keys after audit. Only 82 obsolete keys per locale were removed from the corresponding existing reviewed Phong Nha batch; draft and parallel-work batches were preserved.

Translation and self-review used the same Codex model runtime. The exact model/runtime identifier was not exposed. This is same-model self-review, not an independent second-model or human review; the batch provenance sets `independentSecondModel` to `false`.

## Dates, search and review boundary

The English and each localized search index remain at 955 records. Exactly four English search records changed to match the updated route copy; exactly 20 existing sitemap `lastmod` values changed (four pages across five editions). The sitemap retains the exact 4,560-URL set. Canonical URL, reciprocal hreflang, Article dates and localized route/search parity are covered by the Phong Nha regression.

No SVG was added. No browser UI review was performed, so HTML/CSS appearance, mobile layout, visual hierarchy and reading order are not claimed as passed. No headless browser, CDP, local server, whole-site HTTP crawl or security-setting change was used. No main integration or deployment was performed; only this source branch is pushed.

## Verification

- `npm run audit` — full project regression suite and scope checks passed.
- `npm run build` — passed; produced 5,495 files (4,577 HTML and 821 images, 324.5 MiB), verified 4,560 sitemap routes and reported 14,505 files of headroom to the safety boundary.
- `npm run test:vietnam-phong-nha-refresh` — four route fingerprints and body deltas; Paradise–Tien Son historical exclusion; exact Vietnam HTML/search/date scope; five-edition metadata and 4,560 sitemap URLs.
- `npm run audit:i18n` — 58,793 current strings per locale, zero missing or stale keys.
- `npm run audit:vietnam` — 14 hubs, 84 child routes, 99 English routes, 495 localized sitemap entries and 99 search records.
- `npm run test:integration-sprint-scope` — accumulated source-branch route, date, search and sitemap boundary.
- `git diff --check` — whitespace check.

The automated checks validate source, metadata, translation coverage and file scope. They do not establish visual UI acceptance or independent translation review.
