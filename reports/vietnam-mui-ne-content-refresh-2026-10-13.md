# Mui Ne & Binh Thuan route refresh — 13 October 2026

## Scope and historical deduplication

This source-only batch starts from exact commit `1c54448e4548004d6d012fd12682c33d69fbd25f` on `codex/sprint-vn-after-dalat-20261013`; the requested base has parent `a0210a56c0205158ffbd1021768b101b31aa9a86`. It changes four existing paths only:

- `/vietnam/mui-ne-binh-thuan/`
- `/vietnam/mui-ne-binh-thuan/bau-trang-white-dunes/`
- `/vietnam/mui-ne-binh-thuan/mui-ne-red-sand-dunes/`
- `/vietnam/mui-ne-binh-thuan/mui-ne-kiteboarding-coast/`

The remaining-route ledger listed all four after the preceding Da Lat sprint. `scripts/test-vietnam-mui-ne-refresh.mjs` compares Parse5-visible `#main-content` text at the initial atlas commit `8a1ada3b4021d077fd468c9c318d91823177c0cb`, the exact requested base, and the edited tree. For every selected route, the initial-atlas and requested-base SHA-256 fingerprints match, while the current fingerprint differs. This establishes that these four bodies had not already received a substantive rewrite. The comparison excludes navigation, scripts, styles, SVG, ads, `.sources` and review-date phrases, then counts whitespace-separated visible text tokens.

| Route | Base tokens | Current tokens | Added tokens |
| --- | ---: | ---: | ---: |
| Mui Ne & Binh Thuan hub | 1,145 | 1,638 | +493 |
| Bau Trang White Dunes | 603 | 1,080 | +477 |
| Mui Ne Red Sand Dunes | 638 | 1,019 | +381 |
| Mui Ne Kiteboarding Coast | 570 | 981 | +411 |
| **Total** | **2,956** | **4,718** | **+1,762** |

Vietnam coverage advances from 63/99 to 67/99 substantive English routes, leaving 32. No route was added or removed. The preceding Ho Chi Minh City, Mekong Delta and Da Lat route bodies are outside this four-page content scope.

## Route decisions added

The hub compares two, three and four nights. Two nights fit one principal outing; three allow a contrasting coast day; four leave one weather reserve. Ham Tien or Mui Ne stays the practical single beach base for the close coast; Phan Thiet town is a separate choice only when a confirmed arrival or town visit warrants another road transfer. It tells travelers to count usable days after arrival and before departure rather than assume a train, coach or excursion schedule.

The child routes keep different access contracts separate: the red dunes are a short, confirmed cool-hour visit; Bau Trang is a dedicated remote road day with a daylight return; and kiteboarding is a supervised school activity with a same-day go/no-go decision. The pages do not stack the remote drive with a lesson. A forecast warning or local closure means cancel, return to the coast base or reschedule; an unmarked road is not an alternate route. If an entrance, vehicle boundary, operator, pickup or return cannot be confirmed, the guide says to skip that activity.

The source-content comparison used the Japan regional hub `/japan/hokkaido/` and focused guide `/japan/hokkaido/furano-biei/` at matching hierarchy levels. It compared actual source text for night and base trade-offs, named route sequencing, seasonal decisions, transport handoffs and conditional alternatives. This is not a rendered desktop/mobile comparison or editorial acceptance.

## Official references and unknowns

The refreshed routes cite two official references checked on **13 October 2026**:

- [Viet Nam National Authority of Tourism — Mui Ne dunes and water sports](https://www.vietnam.travel/things-to-do/mui-ne-land-sand-dunes-and-water-sports) describes the general dune and water-sport context. It does not establish a current public entrance, vehicle boundary, beach zone, operator authorization or closure.
- [National Centre for Hydro-Meteorological Forecasting](https://www.nchmf.gov.vn/kttv/) provides inland, marine and hazard bulletins for a travel-date check. A national forecast is not an access permit or local road-opening notice.

The Binh Thuan government tourism-area plan PDF was not readable during review, and the Phu Quy government tourism page did not provide a usable source for these four routes. They were not bypassed or used as evidence. No substitute was used to infer their contents. Exact-date train or coach services, fares, journey times, current entrances, local closures, vehicle permissions, public transport, beach zoning and kite-school authorization remain unknown and must be confirmed with the responsible authority or operator. The pages make no current operating guarantee.

## Five-language work and stale keys

The four routes were translated into Traditional Chinese, Japanese, Korean and Thai. Each locale has one new reviewed page batch; its search batch adds no new keys because the page batches own the current title, summary and type translations. The shared “Before paying” label uses its existing reviewed catalog entry rather than introducing a competing batch translation. The changed search summaries describe the same night/base choices and access conditions as the corresponding guide content. The integration-wide approval run checked 60,753 required strings per locale, with no missing translations or stale entries.

Translation and self-review used the same assistant-model workflow. The runtime/model identifier was not exposed, so GPT-6 Luna selection cannot be verified. This is not an independent second-model or human review. Draft batches were preserved. The standard stale-key prune removed 64 obsolete keys from each old Mui Ne batch (256 total) and one obsolete key from each old Semporna batch (4 total), for 260 reviewed-key removals; active translations were retained.

## Dates, search, design and checks

The English search index remains at 955 records; exactly the four matching Mui Ne summaries changed, and the four localized indexes each retain 955 records with their translated title, summary and type. Exactly 20 existing `lastmod` values changed across four routes and five editions. The sitemap remains exactly 4,560 URLs. Canonical, hreflang and Article modification dates are checked for all five editions by the route regression.

The hub adds the route-specific `css/vietnam-mui-ne.css` planning presentation. No SVG was added. No photo was added or replaced. Desktop/mobile HTML and CSS appearance, including translated layout and responsive reading order, still needs visual review; no UI acceptance is claimed.

Checks passed:

- `npm run test:vietnam-mui-ne-refresh`
- `npm run audit:vietnam`
- `npm run test:vietnam-hcmc-refresh`
- `npm run test:vietnam-mekong-refresh`
- `npm run test:vietnam-dalat-refresh`
- `npm run test:integration-sprint-scope`
- `npm run audit` — 4,560 published edition routes (912 per language), 955 search records per language, and 4,560 unique localized titles
- `npm run build` — 5,499 files (4,577 HTML, 825 images; 327.7 MiB), all 4,560 sitemap URLs verified
- `git diff --check`

No headless browser, CDP, local server, whole-site HTTP crawl, safety-setting change, main integration or deployment was performed. The source branch is kept separate from `main` and production.
