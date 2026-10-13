# Ho Chi Minh City content refresh — 13 October 2026

## Scope and route-history check

This source-branch batch updates four routes from `codex/sprint-vn-after-ha-long-20261013`, based on `92996ef6631fb3775f1bf4f996292059b4aeca83`:

| Route | Visible main-text words at base → current | Added | Substantive change |
|---|---:|---:|---|
| [`/vietnam/ho-chi-minh-city/`](../vietnam/ho-chi-minh-city/) | 1,113 → 1,701 | 588 | Reworked two-, three-, four- and five-night choices; compared one-base stays; sequenced central, Chợ Lớn and Củ Chi days; added transfer and weather/closure buffers. |
| [`/vietnam/ho-chi-minh-city/district-1-colonial-core/`](../vietnam/ho-chi-minh-city/district-1-colonial-core/) | 582 → 1,174 | 592 | Added a 4–6-hour walking plan, Palace-first access check, explicit route and exit, base tradeoffs, rain/closure fallback, and the Palace’s published visitor hours with special-notice caveat. |
| [`/vietnam/ho-chi-minh-city/cho-lon-binh-tay/`](../vietnam/ho-chi-minh-city/cho-lon-binh-tay/) | 555 → 1,142 | 587 | Added a 4–5-hour half/full-day decision, direct ride and named entrance/pickup, compact market-to-temple loop, one-base guidance, and a shortened indoor/return fallback. |
| [`/vietnam/ho-chi-minh-city/cu-chi-tunnels/`](../vietnam/ho-chi-minh-city/cu-chi-tunnels/) | 580 → 1,167 | 587 | Added a full daylight day plus recovery evening, choice between Bến Đình and Bến Dược, separate official distance figures, same-hotel return, and explicit preconfirmation/flight-buffer rules. |

Total visible main-text increase: **2,354 words**. The route test extracts visible `#main-content` text with Parse5, excluding navigation, scripts, styles, SVG, ads, source/credit blocks and visible review-date phrases. For every selected route, the normalized body hash at the initial Vietnam atlas commit `8a1ada3b4021d077fd468c9c318d91823177c0cb` equals the requested source-base hash, and the current hash differs. Thus these four bodies had not received a prior substantive rewrite; page existence and date changes were not used as completion evidence.

Coverage moves from **51/99 to 55/99** substantive Vietnam routes; **44** remain. The remaining route list and historical checkpoints are preserved in [`vietnam-coverage-ledger-20261013.json`](vietnam-coverage-ledger-20261013.json).

## Source checks and limits

Official pages were checked on **13 October 2026**:

- [Vietnam Tourism — Ho Chi Minh City profile](https://vietnam.travel/places-to-go/southeastern-vietnam/ho-chi-minh-city): district orientation, travel context and broad wet/dry season guidance. Its weather summary is not a day-specific forecast.
- [Vietnam Tourism — HCMC attractions](https://vietnam.travel/things-to-do/7-must-see-attractions-hcmc): listed Bến Đình at about 35 km and Bến Dược at about 70 km from the city. These are reference distances, not live travel times.
- [Vietnam Tourism — HCMC itinerary](https://vietnam.travel/things-to-do/ho-chi-minh-city-itinerary): places Thiên Hậu in District 5.
- [Independence Palace visitor information](https://dinhdoclap.gov.vn/en/): published 07:00–18:00 daily, including holidays, subject to special notices. Recheck the official page before visiting.
- [Củ Chi Historic Relics & Tunnel Complex](https://diadaocuchi.com.vn/): the official site timed out during this check. We did not retry through another route or bypass the failure; current hours, admission, program, entrance access and transport remain unverified.

Transit-authority pages were not usable during this check, so the copy gives no current metro route, bus number, sailing time or live road duration. Where access depends on service or a venue being open, it directs the traveler to confirm close to travel and gives a shorten, skip or return-to-base option.

## Localization, search and metadata

All four pages were fully localized in Traditional Chinese, Japanese, Korean and Thai. Each reviewed batch covers all four routes and 131 translation keys; each edition has zero missing required strings and zero stale active entries. The current localized search fields were checked against approved catalog translations. The source English search records already matched the reviewed content and remain unchanged.

The batches record `GPT-6` as writer and same-model reviewer. Runtime variant is not independently evidenced, and no second-model review is claimed. Review notes cover route headings and edges, longer planning passages, transit wording, dates, rain/closure alternatives and proper names, including corrections to ambiguous traffic and recovery phrases.

## Verification and visual review

- `npm run audit` — full site audit passed after the route/date scope regression was updated to include this source branch’s four routes.
- `npm run build` — passed; build reported 5,494 files, including 4,577 HTML files and 821 images, and verified 4,560 sitemap routes.
- Vietnam audit and `test:vietnam-hcmc-refresh` — passed: 14 hubs, 84 child guides, 99 English routes, 495 localized sitemap URLs, 99 search records; 20 edition pages have the expected canonical, hreflang and Article date; the 4,560-URL set is unchanged.
- i18n audit, search/date/path regressions, `git diff --check` — passed.
- **No SVG was added.** Existing HTML/CSS route maps remain pending later screen review. No browser/UI pass is claimed.

This is a source-only branch review. No merge, integration, deployment, headless browser, CDP session, local server, HTTP crawl or security-setting change was performed. Historical drafts remain in place; originals of pruned obsolete reviewed translation keys are retained under `data/i18n/archive/translation-key-prune/2026-10-13/`.
