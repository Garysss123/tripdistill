# Southern Vietnam route-planning refresh

**Date:** 13 October 2026
**Branch:** codex/sprint-vn-southern-gaps-20261013
**Exact source base:** 76bac54c6881348aabc9ec4c4e10299a705f1df9
**Scope:** Four existing English guide bodies, their four search records, five-edition metadata, and the two regional hub excerpts that use the refreshed guide summaries. No route was added.

## History and body evidence

The coverage ledger and Git history were checked before writing. Each selected visible main body had the same SHA-256 at the initial-atlas commit and the exact requested base. Parse5-visible text excludes navigation, scripts, styles, SVG, ads, source lists and review-date phrases. Whitespace-separated word counts are evidence of a substantive change, not a quality score.

| Route | Base words | Current words | Change | Base SHA-256 | Current SHA-256 |
| --- | ---: | ---: | ---: | --- | --- |
| Cần Giờ mangroves | 559 | 1,218 | +659 | 672bd6916e5554f9011934ff3bfa3f0bfc9d488ef3e5ce6d6be761e1c823b29d | bc631539f76c92432919cb9b03f00e926fc1a58450f4a5500d9ce4ce392a03c2 |
| Thủ Thiêm–Thảo Điền riverfront | 524 | 1,194 | +670 | 683b87a29c35454c78ae2f09a92bd2ef776a91e01f74491e1f1af071b1110f86 | 26d26e81f12d3727ff79d1e6a5cf775eb0a10ccb1838794619ad5cad55400f13 |
| Mỹ Tho–Thới Sơn Island | 543 | 1,362 | +819 | 8582553cac111cf5c43a4d7557b444f8038a1237b495e8b4f656108070fff347 | 1da9691700422cfb6d6687422e92f817b387d9cd29f53c3f4b180eac84761f65 |
| Sa Đéc flower village and Huỳnh Thủy Lê house | 571 | 1,396 | +825 | 94fcb08a1143dee1db8c89f4dbb7f15f22c4f2af42e22cdc6f170283bce6f8b2 | 9fa50bea199f69ec1301b68891262c3e7f098f80fb4786eedea337ff4e9cf8e6 |

Total visible body growth is 2,973 words. The regression also checks that only these four guide pages and the Ho Chi Minh City and Mekong Delta hub excerpts changed under the English Vietnam page tree, while exactly four English search records changed.

## What changed

- **Thủ Thiêm–Thảo Điền:** Keep a central Ho Chi Minh City base. Two nights can support one of the two neighborhoods; three allow separate outings without changing hotels. Choose a date-specific Saigon Waterbus leg from Bạch Đằng, book each direction separately, arrive at least 15 minutes early, and confirm the return or a road pickup before paying. A cited example sailing time is identified as an operator example rather than a guaranteed departure. The guide does not promise metro service because the MAUR page timed out, and it treats the city riverfront planning video as planning context rather than proof of visitor access. If a public entrance or return cannot be verified, stay on the central bank.
- **Cần Giờ:** Treat this as a full day outside the center, not a quick city-park stop. Keep the hotel in central HCMC: two nights can fit one full nature day, while three protect another city day if weather or the crossing disrupts travel. Confirm the exact visitor entrance, activity, Bình Khánh vehicle-ferry handoff, driver, return and cancellation together. No current interval, bus route, drive time or Vàm Sát departure was verified. If those links cannot be confirmed, use a city day instead. A biosphere-reserve label is not permission to enter forest or working shore zones.
- **Mỹ Tho–Thới Sơn:** A central Mỹ Tho night is the useful minimum; two nights allow a slower town visit and a weather buffer. Book the intercity coach separately from the boat visit. Confirm the operator, named pier, large-boat/sampan handoff, included stops, return landing and onward terminal before leaving the hotel. No live pier schedule, fare, local bus or boat frequency was verified. If the operator cannot name the full return chain, postpone the island circuit and keep the town day.
- **Sa Đéc:** Stay one night in central town for a full daylight visit after arriving the prior afternoon; two nights allow a slower garden morning or a closure/weather retry. Confirm the coach terminal and pickup, a named garden cluster and public lane, the driver’s wait and return, and Huỳnh Thủy Lê house access before setting the sequence. Gardens are working nurseries, not open-air attractions. The Dong Thap tourism portal was unavailable during review, so local times, fares, openings and admissions remain unknown. If access cannot be confirmed, use the market and a public riverfront and skip private nursery lanes.

Each page has ordered route stages, a same-base fallback and explicit handoffs. None promises a live schedule, future opening, fare, wildlife sighting, or access to a restricted area.

## Official sources and limits

Sources were checked on 13 October 2026. Date-sensitive information must be checked again before travel.

- [Saigon Waterbus route and stops](https://saigonwaterbus.com/water-bus), [online booking and ticket terms](https://saigonwaterbus.com/dat-ve-truc-tuyen), and [departure information](https://saigonwaterbus.com/lich-khoi-hanh): named waterbus stops, one-way booking guidance and current date-specific departure lookup.
- [Ho Chi Minh City People’s Council riverfront-planning video](https://hdnd.hochiminhcity.gov.vn/videos/c/tp-ho-chi-minh-khoi-dong-quy-hoach-duong-ven-song): planning context only. It does not confirm public visitor access to a specific path.
- [Ho Chi Minh City Urban Railway Management Board](https://maur.hochiminhcity.gov.vn/): timed out during this review; no metro interval, fare or transfer claim relies on it.
- [UNESCO Man and the Biosphere Programme](https://www.unesco.org/en/mab): general reserve framework, not confirmation of access to any Cần Giờ zone. The exact Cần Giờ listing endpoint returned 404; [Vàm Sát Ecotourism](https://vamsat.com.vn/) returned 502.
- [Vietnam Tourism: Ho Chi Minh City](https://vietnam.travel/places-to-go/southeastern-vietnam/ho-chi-minh-city) and [four days in the Mekong Delta](https://vietnam.travel/things-to-do/4-memorable-days-mekong-delta): regional context, not a current Cần Giờ crossing or Mỹ Tho/Sa Đéc transport timetable.
- [Tiền Giang tourism portal](https://dulichtiengiang.gov.vn/) and [Dong Thap Tourism](https://dulich.dongthap.gov.vn/en/): unavailable during this review. Current local boat, coach, nursery, venue, fare and opening information remains unknown.
- [National Center for Hydro-Meteorological Forecasting](https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html): check the travel-date forecast and hydrology before exposed river and wetland legs.

Unavailable and erroring pages were left as unavailable; no access control, browser or network restriction was bypassed.

## Translation and coverage

Traditional Chinese, Japanese, Korean and Thai page translations and search terms were added. Each language has 109 fresh page keys and 24 localized search queries. The same model session translated and self-reviewed them; the runtime did not expose an exact selectable model identifier. This is not independent second-model or human review.

Before pruning, eight existing reviewed translation batches were copied byte-for-byte from the exact source base and verified in a SHA-256 manifest at data/i18n/archive/vietnam-southern-gaps/2026-10-13/. The active source set no longer contained 83 strings per language in the Ho Chi Minh City and Mekong batches, so those 332 stale keys were removed from the eight live reviewed files. No draft or parallel batch was included.

The Vietnam ledger advances from 83/99 to 87/99 substantive routes. The remaining 12 paths are:

- /vietnam/mekong-delta/ca-mau-u-minh-ha-cape/
- /vietnam/mui-ne-binh-thuan/phan-thiet-poshanu-heritage/
- /vietnam/mui-ne-binh-thuan/phu-quy-island/
- /vietnam/mui-ne-binh-thuan/ta-cu-ke-ga-coast/
- /vietnam/nha-trang-khanh-hoa/ba-ho-waterfalls/
- /vietnam/nha-trang-khanh-hoa/cam-ranh-bai-dai/
- /vietnam/nha-trang-khanh-hoa/nha-trang-bay-conservation-transfer/
- /vietnam/phong-nha-ke-bang/hang-en-expedition/
- /vietnam/phong-nha-ke-bang/son-doong-expedition/
- /vietnam/phu-quoc-southern-islands/con-dao-national-park/
- /vietnam/phu-quoc-southern-islands/ganh-dau-bai-thom/
- /vietnam/phu-quoc-southern-islands/national-park-suoi-tranh/

## Verification and limits

The focused southern-gaps regression compares initial-atlas and exact-base body hashes, exact English page and search scope, reviewed translation provenance, five-edition canonical/hreflang/article dates and localized search/page summaries, the 4,560-URL sitemap set, exactly 20 date updates, archived stale-key cleanup, and the 87/99 ledger. The historical Da Lat/Ha Long regression also runs against the original 83/99 snapshot while allowing this subsequent four-route batch.

Full npm run audit passed, including all locale, route, search, date, asset-provenance and integration-scope regressions. The four locale catalogs have 59,004 required strings each with zero missing or stale entries. The final site audit found 4,560 published routes, 955 search records per language and 4,560 unique localized page titles. The focused southern-gaps and historical Da Lat/Ha Long regressions passed.

Npm run build passed with 5,496 files (4,577 HTML, 821 images; 325.0 MiB), verified all 4,560 sitemap routes, and left 14,504 files before the Cloudflare Pages safety boundary. The 4,560 sitemap URLs remain unchanged; exactly 20 target lastmod values changed across five editions.

HTML/CSS visual and interaction review was not performed. No headless browser, CDP, local server, HTTP site crawl, deployment or main-branch update was performed.

## Authorized integration checkpoint — 13 October 2026

This source terminal was integrated onto `codex/integration-sprint-20261011` from exact remote base `cab3f51a6229db30da1fbbea6ef0a728d5afe66a`, itself a descendant of cumulative audit baseline `a014412eceb30efae51894be3b6167debaa96ca3`. The four guides advance the corrected site ledger from 890/907 to 894/907 and Vietnam from 83/99 to 87/99; exactly four search records and 20 five-edition sitemap dates changed, with all 4,560 URLs preserved.

The full integration `npm run audit` passed, including the translation, country, asset, source-scope and cumulative regressions. Each localized catalog has 61,333 required strings with zero missing or stale entries; each localized edition has 912 pages and 955 search records. `npm run build` produced 5,500 files (4,577 HTML, 825 images; 329.0 MiB), verified all 4,560 sitemap routes and left 14,500 files of Cloudflare Pages headroom.

The integration audit also found one stale `Water safety` source key in each of the four reviewed Ha Giang locale batches. Those exact integration-base blobs were separately archived under `data/i18n/archive/vietnam-southern-gaps/2026-10-13/shared-prune/manifest.json` before deleting only that stale key. This is separate from the source batch's 332 pruned keys. No `main` update, deployment or rendered visual acceptance is claimed.
