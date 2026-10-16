# Malaysia MY13: Gunung Mulu refresh — 12 October 2026

## Scope and route selection

The topic branch was created from MY12 source commit c0015c40305735164f12140d649b8e948d3bf323. The MY12 review confirms it had substantive updates for Perhentian and Kota Kinabalu only. From the remaining Malaysia groups, Gunung Mulu was selected because its five existing pages still lacked a usable base-and-nights model, named transfer sequence, cave-day pacing and weather/booking fallback. Kuala Lumpur & Putrajaya and Kinabalu Park were not changed.

Only these existing English routes were regenerated:

- /malaysia/gunung-mulu/
- /malaysia/gunung-mulu/deer-lang-caves/
- /malaysia/gunung-mulu/clearwater-wind-caves/
- /malaysia/gunung-mulu/pinnacles-expedition/
- /malaysia/gunung-mulu/canopy-night-walks/

The source and five sitemap editions retain the same 4,560 URL set. No route was added. Content, search records and lastmod changed only for the five Mulu routes (25 localized sitemap entries). Existing Penang, Cameron Highlands, Ipoh, Langkawi, Melaka, Taman Negara, Perhentian, Kota Kinabalu, Sandakan, Kuching and Semporna article bodies were not regenerated.

## What changed

The hub now gives a four-night planning model for arrival, the two different guided cave days, one flexible canopy/night-walk slot and a weather reserve. An approximately seven-night option adds the listed three-day/two-night Pinnacles product and a return night. These are editorial planning estimates, not required durations.

The hub names Park Headquarters as the practical base, recommends confirming the exact Garden Bungalow or other lodging, airport pickup, meal access and each return transfer in writing, and separates the MYY-to-MZV flight, MZV-to-lodging pickup, Park HQ-to-Melinau Wharf handoff and guided walking/boat legs. Its walking sequence names Park HQ–Lang–Deer, Park HQ–Melinau Wharf–Wind–Clearwater and, for the separately booked expedition, Kuala Litut–Camp 5.

The four child pages now explain:

- Deer and Lang: a guided boardwalk out-and-back, conditional dusk bat viewing, an arrival-night buffer and a full field day.
- Wind and Clearwater: the booked road/boat handoffs, full-day pacing, river-change fallback and keeping the return night in Mulu.
- Pinnacles: current listed duration, Camp 5 and Kuala Litut, fitness/guide turnaround decisions and a recovery night before flying.
- Canopy and Night Walk: separate bookings, meeting and return points, a rest interval, weather cancellations and an alternate evening.

All five pages carry 12 October 2026 review dates in visible copy and structured metadata. English search summaries and all four localized search editions were synchronized.

## Evidence and limits

Official references used:

- [Mulu Park — Plan your trip](https://mulupark.com/plan-your-trip/)
- [Mulu Park — Tours and activities](https://mulupark.com/tours-activities/)
- [Mulu Park — Pinnacles](https://mulupark.com/pinnacles/)
- [UNESCO — Gunung Mulu National Park](https://whc.unesco.org/en/list/1013/)
- [Sarawak Tourism Board — Gunung Mulu National Park](https://www.sarawaktourism.com/web/places-to-visit/place-view/gunung-mulu-national-park)
- [METMalaysia — district forecast](https://www.met.gov.my/en/forecast/weather/district/)

UNESCO's entry supports the no-road-access constraint. Mulu Park's current visitor guidance describes the destination as visitable year-round, while the Pinnacles listing describes a guided three-day/two-night product. The official park pages were not reliably retrievable from this environment during the review (direct requests returned 403/502); those details are therefore qualified in the pages and must be rechecked on the live park booking page. No fare, flight frequency, departure time, capacity or successful summit is promised. The itinerary advises checking the district forecast and operator/park status close to travel, and keeping a spare day or night when a flight connection matters.

Four existing Mulu images were checked at pixel level against their linked Commons source pages. The subjects match: Deer Cave (John Mason, CC BY 2.0), Clearwater Cave (John Mason, CC BY 2.0), the Pinnacles (Nur Nafis Naim, CC BY-SA 4.0) and the Mulu rainforest walkway (Luke Price, CC BY 2.0). Their bytes, source records and visible credits are unchanged from MY12. These are separate source declarations, not a license conflict. This source-page check is not independent rights clearance. No mismatch was found, so no photograph was retired and no replacement SVG was needed.

## Localization and maintenance

Traditional Chinese, Japanese, Korean and Thai were translated and self-reviewed from the same English copy. The reviewed batches in each locale are:

- zzzzzzzzzzz-my13-gunung-mulu-pages-20261012.json — 64 child-page keys
- zzzzzzzzzzzz-my13-gunung-mulu-search-20261012.json — 1 search-title key
- zzzzzzzzzzzzzz-my13-gunung-mulu-hub-pages-20261012.json — 58 hub keys

Each locale catalog passes with 55,966 active strings and zero missing or stale keys. Before merge, 248 obsolete values were removed from already inactive translation entries (51 Mulu, 10 Kuching and 1 navigation key per locale); this did not change those routes' rendered content.

## Verification

- npm run audit passed: all four translation catalogs, photo-license and provenance guards, search, route/date and country regressions, China/CN14B, Lake District, Somerset, UK, France and Malaysia; final site audit reports 4,560 localized routes, 955 search records per language and 4,560 unique localized titles.
- npm run build passed: 5,468 files (4,577 HTML, 802 images), all 4,560 sitemap URLs verified, with 14,532 Pages-file headroom.
- npm run test:malaysia-gunung-mulu-refresh and its --dist run passed. They check existing routes, five-language dates, English/localized search coverage, unchanged sitemap URL set and unchanged image bytes.
- The Semporna, Sandakan and Kuching snapshot regressions were updated only to include the subsequently reviewed Mulu route cohort in their expected sitemap/search scope; their own route-specific assertions still pass.
- git diff --check passed.

No browser, headless browser, local server, CDP, deployment, force push, integration branch or production branch was used. Rendered viewport and interaction review remains outstanding.
