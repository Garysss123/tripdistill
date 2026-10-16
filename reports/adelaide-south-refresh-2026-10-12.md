# Adelaide South Australia refresh review — 12 October 2026

## Scope and baseline

This source-only batch starts at `dd0a42a44c56d297cd7d5acc6401fe3bbbd9e9d2` on `codex/sprint-au-next-after-melbourne-20261012`. It changes four existing routes:

- `/australia/adelaide-wine-island/`
- `/australia/adelaide-wine-island/city-parklands-north-terrace/`
- `/australia/adelaide-wine-island/barossa-valley/`
- `/australia/adelaide-wine-island/fleurieu-mclaren-vale/`

No route was added or removed. The Hahndorf and Kangaroo Island guides were left alone. Rendered English `<main>` text, counted as whitespace-delimited tokens against the exact base, changed as follows:

| Existing route | Before | After | Added |
| --- | ---: | ---: | ---: |
| Adelaide hub | 899 | 1,446 | +547 |
| North Terrace & Park Lands | 696 | 1,248 | +552 |
| Barossa Valley | 676 | 1,256 | +580 |
| Fleurieu & McLaren Vale | 697 | 1,278 | +581 |
| **Total** | **2,968** | **5,228** | **+2,260** |

These counts describe source-body growth and do not establish editorial acceptance.

## Content and editorial comparison

The hub compares three-, five- and seven-night itineraries, describes central Adelaide as the city base, and makes the Barossa, McLaren Vale/Willunga and Kangaroo Island distinct trips. The three-night shape uses the city plus one chosen region; the five-night shape moves to one rural base; the seven-night option only adds two regions when each gets at least two nights and transfer time. It does not present the two wine regions as easy same-day excursions.

The city guide starts at Adelaide Railway Station or a central stop, chooses one North Terrace museum/gallery, continues toward one Botanic Garden section, and returns by a checked tram, bus or walk. It asks visitors to check current gates, hours, step-free access and service changes, with shorter heat, fatigue and event-day alternatives.

The Barossa guide uses Tanunda as the base and the visitor centre/Murray Street as an orientation point. It recommends two nights for a full regional day; the Gawler–LinkSA bus connection is conditional on the travel-date timetable, not a promised rail connection. A producer visit needs a separately confirmed driver, tour or transfer. The fallback is a town-focused day without tastings if access is uncertain.

The Fleurieu guide treats Route 751 as a southbound town corridor. It describes the Aldinga–Willunga–McLaren Vale–Seaford–Noarlunga sequence and asks readers to confirm the 751 variant, direction, stop and return. Winery, beach and evening rides are separate last-mile arrangements. A no-car fallback stays in a served town; a coast-plus-cellar day requires a booked sober driver or tour.

The same-level Japan comparison used the existing `japan/tokyo/asakusa-ueno/` local guide and `japan/hokkaido/` regional hub. I reviewed their source text for concrete station/transfer descriptions, geographic sequencing, lodging choices, activity selection and alternatives. Adelaide applies those content patterns to its own geography. This review did not include browser-rendered desktop/mobile pages or interaction checks.

## Official information checked

The following operator, venue and destination pages were opened on 12 October 2026. The article directs readers to recheck changeable schedules, hours, gates and access on their travel date.

- [Adelaide Metro Route 751](https://www.adelaidemetro.com.au/routes/751) lists the route via Willunga, McLaren Vale and Seaford between Aldinga Shopping Centre and Noarlunga Hospital, with variants. The article does not imply that it serves every cellar door or coast stop.
- [Adelaide Metro timetables and service updates](https://www.adelaidemetro.com.au/routes-and-schedules/timetables) is the live check for the selected direction, stop and return.
- [LinkSA route information](https://www.linksa.com.au/bus-routes/) lists Barossa routes 1110/1111 along the Angaston–Gawler corridor. The guide does not call these winery shuttles or promise the train/bus connection.
- [Keoride Barossa](https://www.sa.keoride.com.au/) describes a resident-oriented service area; the guide tells visitors to verify eligibility and terms instead of assuming visitor pickup or winery drop-offs.
- The [Barossa Visitor Centre](https://www.barossa.com/visit/barossa-visitor-centre/) page confirms 66–68 Murray Street, Tanunda, and offers itinerary and booking assistance. The guide does not hardcode its hours.
- The [Adelaide Botanic Garden visitor plan](https://www.botanicgardens.sa.gov.au/visit/adelaide-botanic-garden/plan-your-visit) and [South Australian Museum visitor page](https://www.samuseum.sa.gov.au/visit/plan-your-visit/opening-times-location) support the named city sequence and the advice to check current hours, entrances and access.
- [Tourism Australia’s Adelaide guide](https://www.australia.com/en/places/adelaide-and-surrounds/guide-to-adelaide.html) supplies Adelaide/Kaurna cultural context. [Barossa](https://www.barossa.com/) identifies Ngadjuri, Peramangk and Kaurna Country. The text distinguishes living cultural places from private agricultural land and asks readers to follow local access rules.
- The [South Australian Tourism Commission’s McLaren Vale guide](https://southaustralia.com/destinations/fleurieu-peninsula/places/mclaren-vale) is the destination reference for the Fleurieu child.

The project-wide automated Australia source crawler was not run; these selected references were checked directly. Future schedules, fares, operator availability, individual producer openings and visitor eligibility remain date-specific and are not asserted as known.

## Translations and image review

Each locale (`zh-Hant`, `ja`, `ko`, `th`) has a reviewed batch for the four routes. The batch contains 148 newly covered keys; 123 more route keys were already covered by earlier batches. Batch validators reported four declared routes, 438 raw units, 271 unique source keys, and zero missing keys. The locale samples passed the check against reusing one long target for a different sentence. The old Adelaide batches each held 82 stale translations for content no longer in these pages; only those 328 obsolete targets were pruned.

The batch metadata records GPT-6 Luna as writer and “GPT-6 Luna; same-model self-review” as reviewer. It records `independentSecondModel: false`. No Luna Max, independent model or human review is claimed.

No image bytes, image source record or page image was changed, and no SVG was added. The five existing Adelaide-cluster images were inspected at pixel level for subject match; their visible credits and exact Commons source-page declarations were checked separately. That declaration check is not independent uploader-authority, chain-of-title or legal rights clearance.

## Verification

- `npm run audit` passed, including translation, search, image-provenance, country, route-date and site audits.
- `npm run build` passed: 5,466 files, 4,577 HTML pages, and 4,560 verified sitemap routes.
- `npm run audit:australia` passed: 16 hubs, 80 field guides, 97 English routes, 485 localized routes, 80 unique verified images and 97 search records.
- Four `i18n:batch` and `i18n:sample` runs passed. `audit:i18n` merged 55,786 reviewed translations per locale with zero missing or stale entries.
- `test:australia-melbourne-refresh` passed. Its route allowlist now protects the four earlier Melbourne routes while explicitly allowing these four Adelaide date changes. It checks the four Adelaide headings and localized review dates across all five locales in source and `dist`, canonical/article metadata, English search-summary parity and the global sitemap URL set.
- Compared directly with the exact task base, only the four selected route dates changed in the sitemap: 20 `lastmod` values across five languages. The 4,560 sitemap URLs and order are unchanged.
- `git diff --check` passed after the final edits.

The complete review remains source-only. No browser/headless/CDP, local server, independent translation reviewer, restricted Australia-wide source crawl, integration branch or deployment was used. The repository’s rendered desktop/mobile and interaction release gate remains unverified and must be completed by the parent workflow before calling this user-accepted or deploy-ready.
