# Da Lat & Central Highlands route refresh — 13 October 2026

## Scope and history check

This source-only batch starts from the exact requested commit `a0210a56c0205158ffbd1021768b101b31aa9a86` on `codex/sprint-vn-after-mekong-20261013`. The selected paths were present in the coverage ledger’s remaining set after the Mekong batch. `scripts/test-vietnam-dalat-refresh.mjs` compares Parse5-visible `#main-content` text at the initial atlas (`8a1ada3b4021d077fd468c9c318d91823177c0cb`), the requested base, and the working tree. It excludes navigation, scripts/styles/SVG/noscript, ads, `.sources`, and visible review-date phrases, then counts whitespace-separated words.

Every selected path has identical initial-atlas and requested-base fingerprints, establishing that its substantive body had not previously changed. The same check confirms a distinct current body and an expansion of at least 400 visible words. Counts and SHA-256 fingerprints are recorded in `vietnam-coverage-ledger-20261013.json`.

| Route | Words before | Words now | Added visible words |
| --- | ---: | ---: | ---: |
| `/vietnam/da-lat-central-highlands/` | 1,154 | 1,812 | 658 |
| `/vietnam/da-lat-central-highlands/bidoup-nui-ba-national-park/` | 634 | 1,149 | 515 |
| `/vietnam/da-lat-central-highlands/cau-dat-coffee-farms/` | 641 | 1,151 | 510 |
| `/vietnam/da-lat-central-highlands/langbiang-kho-highlands/` | 622 | 1,146 | 524 |

Coverage moves from 59/99 to 63/99 substantive routes, leaving 36. The route body comparison also guards that only these four new Da Lat pages and the four preceding Mekong pages changed under the English `vietnam/` tree relative to the source base.

## Route choices and content additions

- **Da Lat hub:** two nights leave one full day, so choose the city or one rural route. Three to four nights allow separate city and confirmed route days plus weather slack. For five or more nights, treat Buon Ma Thuot or other remote highlands as a separate stay with a daylight transfer, rather than a Da Lat out-and-back. Current road times and scheduled services are explicitly unknown.
- **Cầu Đất:** keep the same central Da Lat hotel for two or three nights. Two nights force a choice between the city walk and one confirmed farm host; three nights separate them; a fourth gives room to move for fog or rain. The visit requires a host-confirmed gate, permission, route, road transfer and return. If no host confirms, stay in town; no unverified farm is offered as a substitute.
- **Langbiang:** use three Da Lat nights for one city day and one confirmed mountain day; a fourth night adds rescheduling room. Confirm trailhead, guide, transport, permitted route and same-day return with the park. Keep the city lake, market and station walk as a complete wet-weather alternative; do not improvise another trail or connect an uncertain hike to a flight or intercity bus.
- **Bidoup–Nui Ba:** treat the forest as a reservation-led visit. Two Da Lat nights fit a park day only if daylight remains on both travel edges; three allow recovery or weather movement. Park lodging is a distinct option only after the park confirms the exact room, meals and exit arrangements. A closed or unconfirmed route means a Da Lat day or a later confirmed park visit.

These route choices were compared at the source-content level with the same-hierarchy Japan examples `japan/hokkaido/index.html` and `japan/hokkaido/otaru-shakotan/index.html`: night-count and base trade-offs, grouped route days, and explicit transfer, weather and closure decisions. This was a content comparison only, not a browser or pixel review.

## Official sources and limits

Official pages below were checked on **13 October 2026** and cited with that date in the route content:

- [Vietnam Tourism: Da Lat](https://vietnam.travel/places-to-go/south-central-coast-central-highlands/dalat) — broad climate, Lien Khuong access and city/coffee context; not a live timetable, forecast, or Cầu Đất access notice.
- [Bidoup–Nui Ba National Park](https://bidoupnuiba.gov.vn/) — official route and visitor-service listings; a service listing does not confirm a date-specific booking.
- [Park: Langbiang one-day route](https://bidoupnuiba.gov.vn/dich-vu/tour-tuyen-du-lich-sinh-thai/tuyen-langbiang-1-ngay/) — lists a one-day route, gives an orientation point about 36 km from Da Lat, and says transport should be registered with the Ecotourism and Environmental Education Center. The page also repeats unrelated route copy, so its label and inconsistent related duration are not treated as a current departure or verified route grade.
- [Park: “BIDOUP 17 Km” route](https://bidoupnuiba.gov.vn/dich-vu/tour-tuyen-du-lich-sinh-thai/tuyen-sinh-thai-bidoup-17-km/) — the visible page repeats unrelated route copy and has inconsistent duration details. Its title is not used as proof of a route length, timing, booking or overnight option.
- [National Center for Hydro-Meteorological Forecasting](https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html) — the official portal to check for the actual travel date; this review makes no current weather claim.

The review tool rejected the [UNESCO Langbiang page](https://www.unesco.org/en/mab/langbiang); it was not retried through another route and is not used. The [Lâm Đồng government services page](https://lamdong.gov.vn/sites/en/dalatcity/SitePages/service.aspx) returned no readable lines; it was not bypassed and is not used. No unofficial source substituted for either page.

Current Cầu Đất farm openings, visitor permission, public bus availability, exact road and walking times, park permits and route availability, lodging/meal availability, and travel-date weather remain **unknown until the host or park confirms them**. Do not infer access from a map pin, café, general service menu or route title.

## Translation and archived batches

Each locale source batch originally contained 91 keys for the four routes. During integration, its generic “Decide” label was removed because the existing shared catalog already owns that source key; the integrated batches therefore add 90 entries and reuse the label from its prior reviewed owner. The other 206 existing route keys per locale are supplied by earlier reviewed batches. Across the four routes, all 297 unique source strings (506 raw units) still resolve with zero missing keys. Representative source-target samples and the longest route text were reviewed in the same model/session that wrote the translations. This is a self-review, not an independent second-model or human review; the runtime/build identity was not exposed. Unrelated draft batches were left intact.

Before stale-key pruning, the four superseded reviewed Da Lat batches were copied byte-for-byte under `data/i18n/archive/vietnam-da-lat/2026-10-13/`, with hashes in the archive manifest. Only 33 stale keys per locale (132 total) were removed from those superseded batches; the post-prune dry run found no stale keys. New locale batches remain as reviewed, route-scoped files under `data/i18n/reviewed/{zh-Hant,ja,ko,th}/`.

## Verification and review boundary

`npm run audit` and `npm run build` both passed after the source edits. The build produced 5,494 files (4,577 HTML and 821 images) and verified all 4,560 sitemap routes. The audit included `audit:i18n` (58,703 strings per locale, zero missing/stale keys), `audit:vietnam`, all three accumulated Vietnam refresh regressions, the exact integration-scope regression, and the remaining site audits. `npm run test:vietnam-dalat-refresh` confirms the four historical body fingerprints, exact English body scope, unchanged English search records, 955 search records per edition, five-edition canonical/hreflang/Article dates, and the unchanged 4,560-URL sitemap with exactly the expected localized date changes.

No SVG was added. The three route diagrams use existing HTML/CSS diagram rendering; no browser, headless session, CDP, local server or HTTP site crawl was used. HTML/CSS visual acceptance is therefore not claimed. Source terminal `1c54448e4548004d6d012fd12682c33d69fbd25f` is integrated into `codex/integration-sprint-20261011` by merge commit `6d2785609e56b6990d5faf4eeb0681e941ac171b` (parent `8bc4e2052e5b4d33b396bb2b7355d1f6d83132df`, tree `9e051287c5ec90f4ae3cdfbabaa865915e61aaaa`). Its four routes raise Vietnam to 63/99. The combined Chicago/Da Lat/Arizona checkpoint passed full `npm run audit` and `npm run build`; cumulative scope and static checks are recorded in [README](../README.md#chicago-da-lat-and-arizona-integration-checkpoint--13-october-2026). This updates only the integration branch; it does not update `main`, deploy or claim rendered UI acceptance.
