# Nha Trang route-content refresh — 13 October 2026

## Scope and historical deduplication

This source-only sprint starts at exact commit `a639c760ec728d90a0c271e512cbb7af2fa8bfa4` on `codex/sprint-vn-after-phu-quoc-20261013`. The four selected pages are the Nha Trang hub, Nha Trang City & Tran Phu Beach, Po Nagar Cham Towers & Hon Chong, and the Hon Mun Island Marine Route. Their Parse5-visible `#main-content` fingerprints match both that exact base and the initial atlas commit, so none had received an earlier substantive body refresh. The regression also checks that Ba Ho Waterfalls, Cam Ranh–Bai Dai, Nha Trang Bay Conservation & Island Transfer, and the nine previously completed Phu Quoc/Phong Nha routes remain unchanged in visible body text.

| Route | Base words | Current words | Added words |
| --- | ---: | ---: | ---: |
| Nha Trang hub | 1,235 | 1,973 | +738 |
| Nha Trang City & Tran Phu Beach | 666 | 1,178 | +512 |
| Po Nagar Cham Towers & Hon Chong | 663 | 1,223 | +560 |
| Hon Mun Island Marine Route | 667 | 1,234 | +567 |
| **Total** | **3,231** | **5,608** | **+2,377** |

Visible word counts omit navigation, scripts, styles, SVG, ad slots, source-credit sections and review-date phrases. Exact initial, base and current SHA-256 fingerprints are recorded by `scripts/test-vietnam-nha-trang-refresh.mjs` and in the coverage ledger. Vietnam coverage advances from 75/99 to **79/99 substantive English route bodies**, leaving 20.

## Route planning and operating limits

The hub separates two-, three- and four-night trips. Two nights support one complete central-city day after arrival; three can separate the beach and culture routes; four allow an unbooked weather reserve before considering a conditional boat day. Central Nha Trang is the practical base for the city beach, station and Po Nagar. Cam Ranh–Bai Dai is a separate airport-side coast requiring its own confirmed road transfer. Arrival and departure days are transfer days, and no boat outing is placed before a fixed flight or train.

The city-beach page uses the Tran Phu shore as a public-facing route while stating that a resort frontage does not prove public entry and that no date-specific lifeguard roster or swim flags were verified. If there is no responsible current swim signal, the guide says not to swim. Po Nagar and Hon Chong form a separate road route; the shrine is described as a living Cham and Mother Goddess place, with its posted hours labelled as a 13 October 2026 lookup. Staff instructions, worship boundaries, the presently usable stair and the northern viewpoint’s public access require confirmation. The text was clarified to follow staff directions on which stair is open and to stay clear of closed approaches.

Hon Mun is conditional on the Bay Management Board confirming the proposed protected-water zone and activity and a named operator confirming its permit, actual pier, vessel, crew, safety terms, route, return and weather cancellation. The reserve page does not grant visitor permission. If any access or safety answer is missing, the route says to cancel or postpone; it does not send travelers to another unverified island, gate, pier or boat. A shore walk without swimming or a separately confirmed land route remains a fallback only when each site is open and safe.

## Official references checked 13 October 2026

- [Vietnam Tourism — Nha Trang](https://vietnam.travel/node/220) provides broad destination orientation, places Cam Ranh International Airport about 30 km south of the city and locates the train station centrally. It also describes a broad September–December wet season. These are orientation and seasonal context, not a hotel transfer, swim signal or visit-date forecast.
- [Khanh Hoa Department of Culture, Sports and Tourism — Nha Trang Bay](https://dulichso.khanhhoa.gov.vn/en/article/nha-trang-bay-13c) supports the bay and coastal-arc geography. It is not a current public-access permit, visitor-zone notice or boat schedule.
- [Khanh Hoa Department of Culture, Sports and Tourism — Po Nagar Cham Towers](https://dulichso.khanhhoa.gov.vn/en/article/po-nagar-cham-towers-a-millennium-old-heritage-7f7) describes the shrine’s Cham and local Mother Goddess context and showed posted hours of 06:00–17:30 when checked. Current entry, usable stairs, ritual access and closures must be reconfirmed at the site.
- [National Biodiversity Conservation — Nha Trang Bay Nature Reserve](https://nbca.gov.vn/khu-du-tru-thien-nhien-vinh-nha-trang-khanh-hoa/) was updated 16 June 2026 and provides reserve and reef context. It does not establish current Hon Mun tourist zones, landing rights, permits or operator availability.
- [Khanh Hoa Department — boat and ferry safety](https://dulichso.khanhhoa.gov.vn/en/article/things-to-know-when-traveling-by-boat-or-ferry-to-islands-1f7) provides general crew-authority and life-jacket guidance, not approval of a particular service.
- The [National Centre for Hydro-Meteorological Forecasting marine bulletin](https://www.nchmf.gov.vn/kttv/vi-VN/1/thoi-tiet-bien-24h-s12h3-15.html) for 13 October 2026 gave a dated Gia Lai–Khánh Hòa regional snapshot, including showers or thunderstorms, possible strong gusts and 1–2 m waves, higher during storms. It is not a forecast for a future trip, a specific Hon Mun zone or a go/no-go decision.

Current public access to particular beach sections, live swim flags, Po Nagar stair availability, Hon Chong viewpoint entry, Hon Mun zone permissions, licensing, pier, timetable, fares, tide and the actual trip-day marine decision were not established by these sources. Those unknowns are stated on the affected pages.

## Five-language translation record

All four routes have English, Traditional Chinese, Japanese, Korean and Thai page copy. Fresh route copy was translated in each locale, with a separate search-index batch; generated localized pages and all localized search summaries were checked against the reviewed translations. Translation and self-review used the same model session. Its exact runtime model identifier is not exposed. The self-review covered names, order, negation, protected access, source dates, transfers, weather and fallback meaning; it was not independent second-model or human review (`independentSecondModel: false`).

During the required-key check, 24 active legacy translations per locale that had been removed during stale-key pruning were restored from the exact sprint base into their original reviewed batches. Draft and parallel-work batches were not edited. A later prune removed 8 obsolete search keys per locale from the newly created search batches after targeted index generation. Final locale approval/audit results are recorded below.

## Dates, index and route scope

All four existing routes in five editions receive `dateModified` and sitemap `lastmod` 13 October 2026: exactly 20 date updates. The full sitemap remains 4,560 URLs. English search remains 955 records with the same URL set; each localized search index also has 955 records. The new regression asserts exact base/initial body fingerprints, the four and only four changed English Vietnam route files, the exact four changed search records, the 4,560 URL set, the 20 expected dates, all five-language canonical and reciprocal `hreflang` values, article dates, localized summaries and unchanged route exclusions. The existing Phu Quoc regression is retained and passes against the updated cumulative branch.

Tracked route-body edits are limited to:

- `vietnam/nha-trang-khanh-hoa/index.html`
- `vietnam/nha-trang-khanh-hoa/nha-trang-city-beach/index.html`
- `vietnam/nha-trang-khanh-hoa/po-nagar-hon-chong/index.html`
- `vietnam/nha-trang-khanh-hoa/hon-mun-island-marine-route/index.html`

Other deliverables include the Nha Trang source records, search index, sitemap synchronizer and generated dates, reviewed locale batches and required-key cleanup, coverage ledger, package audit hook, regression tests, README entry and this report. Localized HTML/search outputs are generated ignored artifacts. No SVG was added or changed; no separate SVG validation was needed.

## Verification

`npm run audit` passed after the final route and locale edits. The audit includes the Nha Trang and cumulative Vietnam scope regressions, locale required-key checks, sitemap/date tests and the site audit: 4,560 published routes (912 per edition), 955 search records per language and 4,560 unique localized titles. Locale validation checked 58,905 required strings per locale with zero missing or stale keys. `npm run build` passed and produced 5,496 files (4,577 HTML files and 821 images); the build verified all 4,560 sitemap routes. The focused Nha Trang and Phu Quoc tests also passed. The final commit hash, exact parent, tree hash and matching remote topic-branch reference are reported after push.

No headless browser, CDP, local server, whole-site HTTP crawl or security-setting change was used. HTML/CSS visual appearance, mobile layout and reading order were not reviewed and are not claimed as passed. This is a source-only topic branch, not a `main` integration or deployment.
