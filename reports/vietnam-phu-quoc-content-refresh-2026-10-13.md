# Phu Quoc route-content refresh — 13 October 2026

## Scope and historical deduplication

This source-only batch starts at exact commit `01144e03bf6173f468cb836d0899163e1a98c4ea` on branch `codex/sprint-vn-after-phong-nha-20261013`. The precise Vietnam coverage ledger listed all four routes below among the 28 remaining substantive candidates after the Phong Nha sprint. The Parse5-visible `#main-content` fingerprints at the initial atlas commit and requested base match for all four, so their English bodies had not received an earlier substantive refresh.

- `/vietnam/phu-quoc-southern-islands/`
- `/vietnam/phu-quoc-southern-islands/duong-dong-long-beach/`
- `/vietnam/phu-quoc-southern-islands/an-thoi-marine-park/`
- `/vietnam/phu-quoc-southern-islands/ham-ninh-fishing-village/`

The regression separately confirms that the preceding Phong Nha hub, Son River–Phong Nha Cave, Chay River–Dark Cave, Nuoc Mooc Forest Springs and Paradise–Tien Son route remain byte-for-byte the same in visible body text as the requested base. Paradise–Tien Son was already substantively refreshed before the Phong Nha follow-up; the four Phong Nha routes were completed on the immediately preceding branch. They are preserved as historical exclusions in [the ledger](vietnam-coverage-ledger-20261013.json).

| Route | Base words | Current words | Added words |
| --- | ---: | ---: | ---: |
| Phu Quoc hub | 1,113 | 2,078 | +965 |
| Dương Đông & Long Beach | 564 | 1,154 | +590 |
| An Thoi Archipelago | 555 | 1,240 | +685 |
| Ham Ninh Fishing Village | 566 | 1,202 | +636 |
| **Total** | **2,798** | **5,674** | **+2,876** |

The visible word count omits navigation, scripts, styles, SVG, ad slots, source-credit sections and review-date phrases. Exact SHA-256 body fingerprints are recorded in the ledger and regression output. Coverage advances from 71/99 to **75/99 substantive English routes**, leaving 24.

## Route planning and limits

The hub compares two-, three- and four-night stays. Two nights give one usable day from a single verified base; three nights separate the west and south days; four nights add an unbooked weather reserve. It explains why a south or east split only helps after its actual departure point, lodging and two-way road transfer are confirmed. Arrival and departure days stay reserved for the airport or ferry handoff.

The handoff names Phu Quoc International Airport and the date-specific Hà Tiên/Rạch Giá ferry to Bai Vong. It follows the operator’s 45-minute early-arrival instruction and requires a separately confirmed Bai Vong road pickup. No island bus, taxi fare, drive duration, tour pickup, same-day flight connection or unverified public gate is promised.

The west-coast page separates Dương Đông, market/harbor edges and Long Beach access. It says a resort frontage does not establish public access and that no specific public gate, lifeguard or swim-safety status was verified. The An Thoi page treats its “Marine Park” name as editorial page wording rather than proof of a legal boundary or tour permit. It requires a named operator, actual pier, reef/landing, authority, flotation, cancellation terms and return. The Ham Ninh page describes a daylight working-village visit only if the public approach and road return are confirmed; it does not present a photographed pier as an open visitor attraction.

When access is closed, denied or unanswered, the guides say to return to the confirmed base, keep the day on land or reschedule. They do not suggest testing another resort gate, work pier, island, boat or operator. A weather-cancelled boat remains cancelled unless its responsible operator confirms a lawful, safe alternative.

## Official references checked 13 October 2026

- [Vietnam Tourism — Phu Quoc](https://vietnam.travel/places-to-go/mekong-delta/phu-quoc) describes the broad November–April drier season and May–October wetter season with rougher seas, and lists air/ferry arrival context. These are seasonal notes, not a visit-date forecast.
- [Vietnam Tourism — Phu Quoc for Nature Lovers](https://vietnam.travel/things-to-do/phu-quoc-nature) supplies destination context for Ham Ninh and the An Thoi archipelago. It does not establish current pier access, public entry, hours, operator permits or a specific reef boundary.
- [Phu Quoc Express ferry calendar](https://phuquocexpress.com/en/calendar) showed October 2026 Ha Tien–Phu Quoc and Rach Gia–Phu Quoc service entries. The operator describes schedules as period-specific and subject to weather and operating changes.
- [Phu Quoc Express Ha Tien–Phu Quoc schedule information](https://phuquocexpress.com/en/ha-tien-phu-quoc-train-schedule-2024) directs passengers to follow the sailing time on the issued ticket and arrive 45 minutes before departure. It is linked for the October 2026 schedule context, not as a promise of a future sailing.
- The [National Centre for Hydro-Meteorological Forecasting marine bulletin](https://www.nchmf.gov.vn/kttv/vi-VN/1/thoi-tiet-bien-24h-s12h3-15.html) was titled for day and night on 13 October 2026. Its Gulf of Thailand passage mentioned scattered showers/thunderstorms, gusts during storms, reduced visibility during storms, and waves around 0.5–1.5 m with higher waves during storms. This is a dated regional snapshot, not a forecast for a later trip or one An Thoi reef, and not a go/no-go instruction.
- The [Phu Quoc National Park official overview](https://vqgpq.angiang.gov.vn/tong-quan-vuon-quoc-gia-phu-quoc) provides the park’s conservation context but no current visitor gate, hours or tour access information. The guide does not infer visitor status from it.
- [UNESCO’s Kien Giang Biosphere Reserve page](https://www.unesco.org/en/mab/kien-giang?hub=66369) establishes a broad regional biosphere-reserve context. It does not identify whether an individual An Thoi outing’s reef, beach or landing is legally designated, publicly open or covered by an operator permit.

Current Long Beach public entry, Ham Ninh pier access/hours, An Thoi trip boundaries and permits, local tide tables, island road pickup conditions, live swim flags and site-specific operator cancellations remained unverified on the review date. The pages date-label official references and preserve these unknowns.

## Five-language translation record

All four routes have actual English, Traditional Chinese, Japanese, Korean and Thai text. Each locale received a new reviewed page batch with 97 fresh translated keys; the remaining 155 route keys were already covered by reviewed catalog entries. Search titles, summaries and types reuse the translated keys from these page batches or earlier reviewed entries, so there was no separate fresh search-only string batch. Generated localized search indexes keep 955 records and match the reviewed translations.

Translation and self-review were done in the same model session. The exact runtime model identifier was not exposed. The review checked route names, transport sequence, negation, access boundaries, source dates and fallback logic, but is not an independent second-model or human review. Batch provenance sets `independentSecondModel` to `false`.

The four prior Phu Quoc reviewed batches each contained 63 keys made obsolete by the new page copy; only those obsolete entries were removed. The full approval audit also found one already-stale `Brief` key in the legacy Malaysia Mulu reviewed batch and one `Taste` key in the legacy HCMC reviewed batch per locale. Those eight unused keys were removed so global approval could complete; every other entry and all draft/parallel-work batches were preserved. Each locale now has 58,825 required strings and zero missing or stale catalog entries.

## Date, route and build scope

The four English routes and their four localized editions receive the review date 13 October 2026: exactly 20 existing sitemap `lastmod` entries. The sitemap remains 4,560 URLs, English search remains 955 records, Vietnam remains 99 English routes and 495 localized sitemap entries. Canonical URLs, reciprocal `hreflang`, Article `dateModified` and localized page/search summary parity are asserted by `scripts/test-vietnam-phu-quoc-refresh.mjs`.

The four existing English route files, source records, new targeted night-plan CSS, sitemap date synchronization, regression test, package audit hook, this report, README entry, ledger and reviewed translation batches are the tracked deliverables. Localized HTML and localized search indexes are generated ignored artifacts; `npm run localize:pages` regenerated 912 pages per locale without adding them to the tracked diff. No SVG was added or changed.

No headless browser, CDP, local server, whole-site HTTP crawl or security-setting change was used. HTML/CSS visual appearance, mobile layout and reading order were not reviewed and are not claimed as passed. The new Phu Quoc night-plan CSS still needs visual review. The branch is not integrated to `main` and is not deployed.

## Verification

**Build:** `npm run build` passed. It produced 5,496 files (4,577 HTML, 821 images; 324.6 MiB) and verified all 4,560 sitemap routes in the output.

**Full audit:** `npm run audit` passed, including translation coverage and approval (58,825 required strings per locale, zero missing/stale), Vietnam route and search audits, all historical cumulative sprint-scope regressions, photo-license inventory, and the final site audit (4,560 localized pages and 955 search records per language). The cumulative source/integration regressions now include only the four additional Phu Quoc routes: 1,420 date updates across 284 routes in five editions and 241 English search changes; the exact 4,560 URL inventory is unchanged.

**Target regression:** `scripts/test-vietnam-phu-quoc-refresh.mjs` passed exact-base fingerprint deduplication, four visible-body deltas, unchanged Phong Nha/Paradise routes, five-language page/search metadata, 20 exact `lastmod` changes, 955 search records, ledger totals and no-SVG scope. `git diff --check` passed.

Translation generation and same-session self-review are not an independent second-model or human review. The model runtime identifier is unknown. No headless browser, CDP, local server, whole-site HTTP crawl or security-setting change was used. HTML/CSS appearance, mobile layout and reading order remain unreviewed; no UI pass is claimed. No SVG was added or changed. This remains a source-only branch with no `main` integration or deployment.
