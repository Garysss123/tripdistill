# Kyoto route refresh QA — 2026-10-06

## Scope

Edited the existing Kyoto city hub and three local guides only:

- `/japan/kyoto/`
- `/japan/kyoto/arashiyama-sagano/`
- `/japan/kyoto/fushimi-inari-sake-district/`
- `/japan/kyoto/gion-pontocho/`

No country or route was added. The four English pages and their four localized editions keep the existing URLs, page hierarchy and Kyoto-specific design system.

## Editorial checks

Compared the same-level Japan field guide `/japan/osaka/namba/` for route purpose, named place detail, station guidance and itinerary logic. Kyoto's existing collage, landscape hero, route board, timeline and district-specific styling remain intact. This batch changes page copy, descriptions, FAQ structured data and credits; it does not change CSS or JavaScript.

Content checks for this batch:

- Kyoto hub: describes four geographic corridors, distinguishes the eight area guides, uses official rail approach times and sequences four days without cross-city zig-zags.
- Arashiyama and Sagano: distinguishes JR, Randen and Hankyu approaches; separates station travel from walking; describes Tenryu-ji's Sogen Pond borrowed scenery, its north gate into the grove and a quieter Sagano option.
- Fushimi: distinguishes a lower-precinct visit from two deeper climbs, names shrine landmarks, explains the rail shift to the canal and brewery area, and preserves the shrine's photography and circulation requests.
- Gion and Pontocho: identifies the Yasaka-jinja origin context, separates four adjacent zones, makes the single east-to-west river crossing explicit, and keeps geiko/maiko privacy guidance.
- FAQ answers and matching JSON-LD answers were checked for parity where the same question is represented in both.
- Refreshed meta descriptions, Open Graph descriptions, destination schema descriptions and review date. Existing page titles and routes remain unchanged.

Fact sources include the [Kyoto official access guide for Saga-Arashiyama](https://kyoto.travel/en/getting-around/comfortable-access-to-saga-arashiyama/), [Kyoto's Saga-Arashiyama area guide](https://kyoto.travel/en/areas/saga-arashiyama/), [Tenryu-ji garden and north-gate information](https://www.tenryuji.com/en/precincts/), [Fushimi Inari official access](https://inari.jp/en/access/), [history](https://inari.jp/en/history/), [shrine map](https://inari.jp/en/map/) and [visitor requests](https://inari.jp/en/request/), [Kyoto's Fushimi guide](https://kyoto.travel/en/areas/fushimi/), [Kyoto's Gion and Kiyomizu guide](https://kyoto.travel/en/areas/gion-kiyomizu/), and [responsible-travel guidance](https://kyoto.travel/en/responsible-travel). Current operations and restrictions remain subject to each authority's notices.

## Images and licensing

Checked the exact Commons source pages and visually reviewed all 12 distinct photographs used across these four routes. All 12 pages were accessible, the image subjects fit their uses, and the displayed licenses permit commercial reuse. No replacement was needed. The hub now credits all 10 images shown there; each field guide credits its two displayed photographs. Credits link the full source title and exact license version, retain creator names and state WebP conversion, resizing and display cropping.

Corrected the Fushimi canal image from an erroneous local `CC BY 2.5` claim to the Commons page's `CC BY-SA 3.0` (which also lists GFDL). The Pontocho Commons page uses creator spelling “Sergiy Galyonkin”; an embedded EXIF field spells it “Sergiy Galonkin.” The source-page spelling is used on the site, and the variance is recorded in the inventory. No contact was made.

The active inventory snapshot in this checkout records 78 source-page-checked asset entries and 701 entries whose license claims lack structured independent verification; this is not a task-wide unique-page count. The separate task-wide reconciliation summarizes 779 asset paths, 771 distinct Commons URLs, 729 exact pages reached and 42 exact URLs inaccessible or identity-unresolved. Most report-only reachability checks were not synchronized into the active inventory; the snapshots also differ by one (the earlier reconciliation snapshot reads 79/700). Use 729/42 for global page-review coverage, and do not treat a reached source page as rights clearance. See [the Kyoto photo-source review](kyoto-photo-source-review-2026-10-05.md) and [the site photo-license inventory](photo-license-inventory.json).

## Localization, routes and build

Each of the four Luna-reviewed locale batches contains 93 new keys and passed its batch validator with 0 missing keys. Long Commons filenames remain exact; localized parentheticals identify them as original filenames. Superseded Kyoto keys were pruned; the final corrections removed two old keys per locale. The full audit reports zero missing or stale strings.

Final checks:

- `npm run audit:i18n`: passed; 51,770/51,770 strings in each of zh-Hant, ja, ko and th; 207,080 reviewed targets checked; zero missing or stale entries.
- `npm run audit`: passed; 4,560 localized routes, 955 search records per language and 4,560 unique localized page titles, alongside the country/site regression audits.
- `npm run build`: passed; 5,429 files, 4,577 HTML pages and 780 image files; all 4,560 sitemap routes verified; 14,571 Pages-file headroom.
- Built-output route check: 20/20 pages (four routes in five languages) have the expected `lang`, one H1, title, canonical URL, all six alternates including x-default, expected number of photo-source links and exact Commons title text.
- Sitemap remains at 4,560 URLs; exactly the 20 existing Kyoto URLs now have `lastmod=2026-10-06`.
- `git diff --check`: passed.

## Route correction follow-up

The later itinerary correction keeps the Gion dinner option on the east bank. The hub now says to stay in Gion for dinner, or cross the Kamo River once to Pontocho on the west bank. The same route sentence was checked in English, Traditional Chinese, Japanese, Korean and Thai. The Gion & Pontocho child guide already placed Gion east of the river and Pontocho west, with its single Shijo Bridge crossing; no reversal was present there.

The Fushimi lower-precinct route and its FAQ describe a satisfying shorter visit rather than a complete visit to all shrine grounds. Kumatakasha is now an optional mountain stop for visitors who choose a longer climb, not a standard midpoint or required stage. Its separate entry on the shrine map was checked against the official Fushimi Inari map. The structured destination description reuses the reviewed Fushimi summary instead of saying “711-founded”; the itinerary attributes 711 to the shrine’s recorded enshrinement on Inariyama.

A preview-only responsive harness at dist/qa/kyoto-responsive/ checks the four Kyoto routes in all five languages at paired 320/390 CSS-pixel iframe widths. It carries noindex,nofollow,noarchive, a release manifest with exact HTML/image SHA-256 values and stays out of the ordinary sitemap/build. It is generated and deployed only by the dedicated kyoto-qa preview flow. No local browser screenshots or visual claims are included.

## Visual QA limit

No local browser or viewport screenshots were used, per the current instruction not to use a local browser. The implementation leaves the existing Kyoto layout and stylesheet untouched; rendered desktop/mobile comparison remains unverified in this batch. The full visual redesign request therefore remains outside this bounded Kyoto content and licensing update.

## Five-guide access and interpretation follow-up

This follow-up edits five existing English child pages only: Central Kyoto & Nishiki, Kyoto Station & South, Philosopher's Path & Okazaki, Kinkakuji & Northwest, and Kiyomizudera & Higashiyama. Their URLs, language prefixes, route hierarchy, stylesheets and image credits are unchanged. No country, route, photograph or third-party runtime was added.

The copy replaces vague directions with executable access choices: it locates Gion east of the Kamo River and Pontocho west, names the single Shijo Bridge crossing, distinguishes JR Inari Station from Keihan Fushimi-inari, and explains that the JR Nara Line runs directly from Kyoto Station to JR Inari. For Ginkakuji, the route now names the Karasuma Line to Imadegawa, the Doshisha-side City Bus 203 stop, Ginkakuji-michi and the eastward canal approach; Keage remains the distinct south-end option. Kinkakuji now has the Kitaoji Blue Bus Stop group E–G / routes 204 or 205 / Kinkakuji-michi sequence. Kiyomizudera now distinguishes City Bus 100/206 to Gojozaka plus the uphill walk from the roughly 25-minute walk from Keihan Kiyomizu-Gojo, and links the temple's visitor, emergency-road and wheelchair access maps.

The rainy-day section gives three nearby museums different reasons to choose them: MoMAK's modern Japanese art with emphasis on nihonga and crafts; the Kyoto City KYOCERA Museum's current exhibitions and seasonal Collection Room; and the Kyoto Museum of Crafts and Design's 74 Kyoto craft product categories and changing demonstrations. It directs readers to current calendars instead of asserting fixed exhibition schedules, prices or timed-entry rules. The museum/library and route notes are paired with official source links on the pages.

Sources checked on 6 October 2026:

- [Kyoto City Official Travel Guide — Ginkakuji and Philosopher's Path access](https://kyoto.travel/en/getting-around/comfortable-access-to-ginkaku-ji-temple-philosophers-path/)
- [Kyoto City Official Travel Guide — Kinkakuji access](https://kyoto.travel/en/getting-around/comfortable-access-to-kinkaku-ji-temple-kinugasa/)
- [Kiyomizudera — official location and access](https://www.kiyomizudera.or.jp/en/location/)
- [Fushimi Inari Taisha — official station access](https://inari.jp/en/access/)
- [National Museum of Modern Art, Kyoto — collection](https://www.momak.go.jp/English/collection/) and [visitor information](https://www.momak.go.jp/English/guide/hoursAdmission.html)
- [Kyoto City KYOCERA Museum of Art](https://kyotocity-kyocera.museum/en/)
- [Kyoto Museum of Crafts and Design](https://kmtc.jp/en/)
- [Kyoto City Official Travel Guide — Central Kyoto](https://kyoto.travel/en/areas/central/), [Gion and Kiyomizu](https://kyoto.travel/en/areas/gion-kiyomizu/), and [Japan National Tourism Organization — Pontocho](https://www.japan.travel/en/spot/79/)

Four reviewed locale batches (`93-kyoto-access-copy-refresh.json`) supply the same five-route update in zh-Hant, ja, ko and th. Each has 46/46 newly required targets filled; the exact batch validators and samples passed. Locale review also corrected active older wording in zh-Hant (12 values) and Korean (8 values), then removed 23 superseded entries per locale from the older batch. `npm run audit:i18n` passes with 51,853 required strings per language and no missing or stale translations; 207,412 reviewed targets were checked.

The full `npm run audit` passed all country and editorial regressions and the site audit (4,560 localized routes; 912 per locale; 955 search records per language; 4,560 unique localized titles). `npm run build` passed with 5,430 files, 4,577 HTML files and 780 images (309.0 MiB); it verified all 4,560 sitemap routes and left 14,570 Pages-file slots before the safety boundary. `git diff --check` passed. The final branch, commit, and deployment identity are included in the delivery handoff.

No local browser was launched and no screenshots or rendered viewport measurements are claimed. The harness defines paired 320/390 CSS-pixel frames and validates localized route metadata, photo credits and asset/style hashes; it is source/artifact verification, not a visual rendering sign-off.

## Preview release

Published to the existing Cloudflare Pages project `trip` on preview branch `kyoto-qa`; the stable preview alias is [kyoto-qa.trip-68e.pages.dev](https://kyoto-qa.trip-68e.pages.dev). Wrangler's read-only project listing confirmed `trip` is mapped to `trip-68e.pages.dev` and `tripdistill.com`. Production was not deployed or changed.

The live harness returned 45/45 localized Kyoto pages with the expected route metadata and photo-credit checks, matching shared and Kyoto stylesheet hashes, and 16/16 referenced image body hashes. The existing 4,560-route sitemap remains unchanged. This verifies the published HTML/assets and release identity; no screenshot, browser-rendered visual inspection, keyboard interaction sweep, or live-web performance measurement was performed.
