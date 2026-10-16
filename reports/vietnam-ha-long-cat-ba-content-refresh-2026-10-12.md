# Ha Long and Cat Ba route-content refresh — 12 October 2026

## Scope and result

This source-only sprint starts from `10b3f39eb069646b8381bfe43767a0998f4ad2c8` on `codex/sprint-vn-ha-long-content-20261013`. It revises four existing routes and adds no routes:

| Route | Base words | Current words | Change |
| --- | ---: | ---: | ---: |
| `/vietnam/ha-long-cat-ba/` | 898 | 1,442 | +544 |
| `/vietnam/ha-long-cat-ba/bai-tu-long/` | 579 | 1,055 | +476 |
| `/vietnam/ha-long-cat-ba/lan-ha-town/` | 609 | 1,141 | +532 |
| `/vietnam/ha-long-cat-ba/national-park/` | 577 | 1,126 | +549 |

The audited Vietnam count moves from 47 to **51 of 99** substantive English route bodies, leaving 48. Word counts and normalized visible-main-text SHA-256 fingerprints are recorded in [`vietnam-coverage-ledger-20261013.json`](vietnam-coverage-ledger-20261013.json). The count excludes navigation, source and credit blocks, cards, SVG text, scripts, styles, advertisements and visible review-date phrases.

## Route decisions added

- **Regional hub:** maps the system west-to-east-to-south: Vân Đồn/Ao Tiên for Bai Tu Long, named Ha Long cruise ports and routes, then Đồng Bài–Cái Viềng and Cat Ba Town for Lan Ha and the island’s land routes. The existing core-cruise page was already complete and was not rewritten.
- **Bai Tu Long:** distinguishes the Vân Đồn/Ao Tiên departure from Ha Long City ports and gives the park-published island and anchorage order as the itinerary’s geographic spine. The page asks readers to match the named route, boat, return and weather call before booking.
- **Cat Ba Town and Lan Ha:** names the Đồng Bài–Cái Viềng ferry handoff, the island-road transfer to town, and Bến Bèo as a separately booked Lan Ha departure point. It makes the published ferry schedule date-bound, identifies storm suspension as a real service interruption, and gives a land-based town day as a fallback when the sea or ferry is disrupted.
- **National Park:** treats the park as a separate north-island road day from Cat Ba Town, with one park-confirmed marked trail before optional Quan Y and Trung Trang cave stops. A late start, rain, thunder, wet footing, a closed gate or an unconfirmed return car triggers a shorter day or return to town.

## Source checks and limits

The Ha Long Management Board’s [approved route list](https://halongbay.com.vn/tours), [day-boat list](https://halongbay.com.vn/boats?type=2) and [overnight-boat list](https://halongbay.com.vn/boats?type=1) anchor the port and vessel checks. The board’s [marine squall advisory](https://halongbay.com.vn/en/p/1013-canh-bao-som-dong-loc-tren-bien) supports the instruction to check the operator’s same-day weather decision.

The Bai Tu Long National Park’s [published visitor route](https://vuonquocgiabaitulong.vn/vi/diem-den/3) starts at Ao Tiên and lists Trà Thần/Trà Ngọ Lớn, Cái Lim, Máng Hà anchorage and Cái Dé in sequence. The park describes its site as being in a trial period; the page therefore treats the published itinerary as a planning reference and asks travelers to confirm current operation with their licensed boat operator.

For Cat Ba, the Hai Phong People’s Committee published a [Đồng Bài–Cái Viềng ferry timetable](https://haiphong.gov.vn/lich-tau-pha/dieu-chinh-lich-chay-pha-ben-dong-bai-cai-vieng-tu-ngay-1-9-2026-964317) applying from 1 September through 31 December 2026. The page states a 05:00 start, a last scheduled departure at 17:30, service about every 30–40 minutes and a possible extension to 19:00; these are dated published times, not a guarantee of an individual crossing. A separate [Hai Phong storm notice](https://soxd.haiphong.gov.vn/tin-tuc/dung-hoat-dong-chay-pha-dong-bai-cai-vieng-va-pha-duong-ao-de-phong-chong-bao-so-4-thong-bao-so--952821) records suspension of the Đồng Bài–Cái Viềng service during storm risk. [Sun World Cat Ba’s transfer guide](https://sunworld.vn/en/cat-ba/transportation/how-to-get-from-hai-phong-to-cat-ba-quickly-and-conveniently-in-2026-29061) and [Lan Ha access guide](https://sunworld.vn/en/cat-ba/transportation/how-to-get-from-cat-ba-to-lan-ha-bay-a-detailed-guide-29071) support the onward road-and-pier handoffs. Recheck all ferry and operator notices close to travel.

The [Cat Ba National Park official site](https://catba.net.vn/?lang=en) could not be fetched during this review. I did not work around that access failure. As a result, this sprint does not assert current trail opening, park hours, ticket terms or guide rules; the page directs readers to ask park management before departure. The [UNESCO Ha Long Bay–Cat Ba Archipelago listing](https://whc.unesco.org/en/list/672/) supplies landscape context, not live access permission.

## Editorial comparison, localization and review

The same-level Hokkaido and Otaru/Shakotan pages were read as source-content references. Hokkaido separates regional corridors and night allocation; Otaru distinguishes the easy town rail-and-walk day from Shakotan’s seasonal bus, sea-weather and last-return constraints. This sprint applies the same kind of route-choice logic to separate named ports, island transfers, boat days and road days. This was a content comparison only; it was not a browser or visual comparison.

The four updated pages were generated and localized into Traditional Chinese, Japanese, Korean and Thai. Their route review dates, canonical/hreflang metadata and five language search records were synchronized to 12 October 2026. Each locale has 189 owned source keys in the sprint batch; all four batches passed route-coverage validation and sample review. The active catalogs were approved at 58,556/58,556 required translations per locale, with zero missing keys. Runtime model identity was not exposed. The translated copy received same-session source/target review; there was no independent second-model or human review, and no Luna Max runtime evidence is claimed.

The preceding route refresh left obsolete Vietnamese keys in older reviewed batches. Those eight original files were preserved under `data/i18n/archive/vietnam-ha-long/2026-10-12/` with a SHA-256 manifest before pruning their stale active keys. Draft translation files were not changed.

## Verification and release boundary

Full `npm run audit` passed, including translation coverage, all country audits, route/date/scope regressions and the 4,560-route site audit. `npm run build` passed with 5,494 files (4,577 HTML, 821 images), validated all 4,560 sitemap URLs, and left 14,506 Pages-file headroom. A focused check confirmed all 20 pages across the five editions have one h1, the expected canonical and `Article.dateModified: 2026-10-12`; exactly those 20 sitemap dates changed, while the URL set stayed unchanged. Only the four requested English route files and their four English search records changed in their respective scopes.

No browser was launched, so HTML/CSS route diagrams still need visual inspection; there are no new SVG assets in this sprint. The branch contains no deployment. The locale batches received same-session review; runtime model identity remains unknown, and no independent second-model or human review is claimed.
