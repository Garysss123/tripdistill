# Vietnam overview and northern routes follow-up

Reviewed 12 October 2026 on `codex/sprint-vn-overview-north-gaps-20261013`, created from `7ac91c72f5655c9b00aaeae7c8943bfa3c083304`. This source-only follow-up substantively improves four existing routes: the Vietnam country overview, Hanoi’s West Lake–Trúc Bạch chapter, the Sa Pa–Ô Quy Hồ waterfalls chapter, and the Mèo Vạc–Du Già loop. No page URLs were added or removed.

## Coverage and body evidence

The ledger retains the verified 39 historically improved routes, then records the prior four-route content batch (43/99) and this batch as separate checkpoints. Reassessment of the four routes previously excluded as card, credit or CTA edits shows new visible-body improvements here: **47/99 substantive routes, with 52 remaining**. The country page’s body now contributes a route-length and regional trade-off guide; it is not counted for its updated hub cards.

| Existing route | Base words | Current words | Increase |
| --- | ---: | ---: | ---: |
| [`/vietnam/`](../vietnam/index.html) | 515 | 1,252 | 737 |
| [`/vietnam/hanoi/west-lake-truc-bach/`](../vietnam/hanoi/west-lake-truc-bach/index.html) | 617 | 1,073 | 456 |
| [`/vietnam/sapa-northwest-highlands/o-quy-ho-waterfalls/`](../vietnam/sapa-northwest-highlands/o-quy-ho-waterfalls/index.html) | 633 | 1,103 | 470 |
| [`/vietnam/ha-giang/meo-vac-du-gia/`](../vietnam/ha-giang/meo-vac-du-gia/index.html) | 624 | 1,144 | 520 |
| **Total** | **2,389** | **4,572** | **2,183** |

Counts use the ledger’s Parse5 `#main-content` visible-text method: omit scripts, styles, SVG, advertisements, official-source and photo-credit sections, regional/country cards, and visible review dates; split normalized text on whitespace. The [coverage ledger](vietnam-coverage-ledger-20261013.json) records each base/current SHA-256, the four routes’ previous exclusion evidence, all earlier route fingerprints and the exact 52-route remainder.

## Route decisions added

- **Country overview:** allocates seven nights to one northern corridor, twelve nights to a north–south rail spine plus one flight, and fourteen nights to an optional Mekong extension. It explains which region must be removed before adding Sa Pa or Hà Giang, connects named rail/airport handoffs to lodging transfers, and reserves slack for weather and arrival/departure days.
- **West Lake and Trúc Bạch:** sets a three-to-four-hour daylight visit with a pagoda, safe road crossings, one short Trúc Bạch/Ngu Xá segment, a meal and saved pickup. It rejects a promised full-lakeside circuit; rain, darkness, restricted grounds and unsafe crossings trigger a vehicle or indoor fallback.
- **Ô Quy Hồ waterfalls:** uses QL4D as a daylight out-and-back from Sa Pa, with a driver, agreed pickup and no return after dark. Silver Waterfall is conditional on current managed access; Love Waterfall is optional only after its operator confirms service. Fog, storms, wet steps or a closure reduce the route to a safe pass viewpoint or a Sa Pa town day.
- **Mèo Vạc–Du Già:** lays out a two-day/one-night transfer with daylight driving, a locally confirmed driver/operator, recovery time and a spare night for weather or road disruption. Thác Ba Tiên is optional only after the commune confirms its public access and operating conditions; the page makes no live open/closed claim.

## Official operating references

- The country guide links [Vietnam Railways’ timetable and ticket portal](https://giotaugiave.dsvn.vn/), the [Airports Corporation of Vietnam directory](https://acv.vn/en/airports-2) and the [National Center for Hydro-Meteorological Forecasting](https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html). Readers are told to match train date, station and berth and to verify each transfer instead of relying on an assumed connection.
- The Hanoi chapter cites the [Hanoi People’s Committee heritage-site list](https://hanoi.gov.vn/di-tich-danh-thang), its [West Lake cultural-space plan](https://sovhtt.hanoi.gov.vn/en/developing-the-cultural-space-of-west-lake-for-residents-and-tourists/) and the [2026 Trúc Bạch itinerary announcement](https://english.hanoi.gov.vn/department-commune-and-ward-news/hanoi-tourism-welcomes-2026-get-on-hanoi-program-launched-2655260203010101551.htm). These support orientation and planning context, not a guarantee of current entry or opening hours.
- The Sa Pa chapter uses the [Lai Châu tourism authority’s Ô Quy Hồ Pass page](https://dulich.laichau.gov.vn/en/place/details/o-quy-ho-pass-1) for QL4D and the pass corridor. The [Sa Pa Tourism Office’s waterfall access description](https://sapa-tourism.com/golden-stream-and-love-waterfall-an-easy-trip-in-the-middle-of-the-forest/) is dated 2021 and is treated only as route orientation; the live operator and access status must be reconfirmed. Forecasts are linked from the national hydro-meteorological center.
- The Mèo Vạc chapter cites [Resolution 202/2025/QH15](https://baochinhphu.vn/nghi-quyet-cua-quoc-hoi-ve-sap-xep-don-vi-hanh-chinh-cap-tinh-102250612191145158.htm) for the Hà Giang–Tuyên Quang provincial merger and the [Tuyên Quang Department of Culture, Sports and Tourism’s 25 June 2026 safety/operations notice for Thác Ba Tiên](https://sovhttdl.tuyenquang.gov.vn/vi/tin-bai/tuyen-quang-tung-buoc-chuan-hoa-cong-tac-quan-ly-du-lich-trai-nghiem-co-yeu-to-mao-hiem?id=239119&type=NEWS). The department and commune-government sites returned HTTP 403 in this environment. The commune link now points to the official [Du Già Commune portal](https://dugia.tuyenquang.gov.vn/); current access still requires local confirmation.

## Localization, images and same-level reference

All four routes carry the 12 October 2026 review date in English and the four localized editions. Exactly four English search records changed; each locale’s search index also contains the corresponding four route records with localized summaries. A targeted check passed for all 20 page/search pairs and the 20 five-edition sitemap `lastmod` entries, while the 4,560-URL sitemap set remained unchanged. One 194-key reviewed batch per locale (`zh-Hant`, `ja`, `ko`, `th`) supplies the new page and search text. The stale-key pass removed 300 obsolete approved strings (75 per locale) from earlier reviewed Vietnam batches; no pending drafts were changed.

The runtime exposes only the label `GPT-6`, without evidence of a Luna variant. Translation and source/target review were completed, but the batch provenance correctly records same-model self-review and `independentSecondModel: false`; it does not claim an independent Luna Max review.

The same-layer source comparison used [`/japan/`](../japan/index.html) for the country route, [`/japan/hokkaido/`](../japan/hokkaido/index.html) for regional choices and [`/japan/hokkaido/otaru-shakotan/`](../japan/hokkaido/otaru-shakotan/index.html) for the focused guide. The source-text comparison used the named geographic sequence, transfer and return checks, weather fallback, base choice and official-source pattern; it was not a browser-rendered acceptance review. Existing route photos were pixel-reviewed locally and their files are unchanged. The new country route treatment uses HTML/CSS; it was not browser-rendered. No SVG was added, so no new SVG XML, geometry or pixel check applies. The parent conversation still needs its separate image and rendered-layout review.

## Verification and publishing boundary

The English body diff is limited to these four Vietnam routes. The same four English search records changed, and only these four paths have new sitemap dates across the five editions (20 date entries); the 4,560-URL set is unchanged. Regression scope lists were updated to recognize these accumulated Vietnam routes.

Full `npm run audit` passed, including the Vietnam audit and the complete locale, route, search, sitemap and source regressions. The audit ended with 4,560 published routes (912 per language), 955 search records per language and 4,560 unique localized titles. `npm run build` passed and built 5,494 files (4,577 HTML, 821 images, 323.9 MiB), verifying all 4,560 sitemap routes. `git diff --check` passed. No headless browser, CDP, local server, security-setting change, `main` or `integration` update, or deployment was run. The branch is source-only; after this local check it will be pushed only to its source branch and read back.
