# Sandakan–Kinabatangan refresh review — 12 October 2026

## Scope and selection

This source-only batch uses `a014412eceb30efae51894be3b6167debaa96ca3` (the latest integration source available at task start) as its base, on `codex/sprint-my-09-20261012`. History review found that the existing Sandakan cluster had not received a substantive route-body refresh since 30 August 2026 (`84cde42f` / `4d120dcf`). It was therefore selected as the next untouched Malaysia hub and four-child group. The completed Perhentian/Redang (`d8efdbad`) and Kota Kinabalu (`332e21c9`) work, and the Taman Negara, Melaka, Penang, Cameron Highlands, Ipoh and Langkawi batches, were not redone.

Exactly five existing URLs were revised; there are no additions or removals:

| Existing route | English `<main>` words at base | After | Net change |
| --- | ---: | ---: | ---: |
| [Sandakan & Kinabatangan](/malaysia/sandakan-kinabatangan/) | 1,412 | 2,220 | +808 |
| [Sandakan Heritage & Waterfront](/malaysia/sandakan-kinabatangan/sandakan-heritage-waterfront/) | 547 | 1,064 | +517 |
| [Sepilok Conservation Centres](/malaysia/sandakan-kinabatangan/sepilok-conservation-centres/) | 549 | 1,074 | +525 |
| [Sukau & Kinabatangan River](/malaysia/sandakan-kinabatangan/sukau-kinabatangan/) | 562 | 1,007 | +445 |
| [Gomantong & Batu Puteh](/malaysia/sandakan-kinabatangan/gomantong-batu-puteh/) | 532 | 1,146 | +614 |
| **Total** | **3,602** | **6,511** | **+2,909** |

The counts are whitespace-separated visible-text tokens from each source `<main>`, compared with the exact base commit. They are scope evidence, not a quality measure.

## Editorial changes

The hub compares a compressed four-night plan with a more resilient five-night plan: Sandakan arrival/city time, a Sepilok or transfer night, two named-lodge nights, and a protected Sandakan return night when a next-day flight matters. A sixth night is an optional slower city day or extra river window. It distinguishes Sandakan town, Sepilok, and the Sukau/Bilit/Abai lodge areas by what each base buys and by the transfer and meal/cruise package to compare.

Transport sections name the legs and handoffs: SDK or a Sandakan hotel; the Sandakan city-centre–Sepilok road leg; the onward road or operator boat to Kota Kinabatangan, Sukau, Bilit or Abai; and the actual lodge jetty or door. A public bus to Kota Kinabatangan is explicitly only the town-side leg. Site access and return pickups must be confirmed with the named operator; no current fares, boat departures or bus timetable are invented.

The Sandakan walking plan separates the downtown waterfront/market, the uphill Agnes Keith House/St Michael’s block and the outlying Memorial Park road trip (about 11 km outside town). It does not imply a continuous signed heritage trail. Sepilok is planned around one anchor institution and at most one separately checked second visit; no animal appearance is promised. Sukau/Bilit/Abai are treated as distinct river communities, with two nights as a practical minimum and three for more rest/weather margin. Gomantong and Batu Puteh are separate authorized visits with road legs, daylight return margin, community consent and a concrete closure/wet-boardwalk fallback.

Every route has area-specific day sequencing, named transport handoffs, advance booking prompts for school/public holidays, date-specific weather and access checks, and a lower-risk alternative. Wildlife sighting, access, transport and opening are not guaranteed. Rain or a changed river/cave condition triggers a confirmed operator alternative or a skipped visit, not an improvised boat, unapproved cave entry or fragile same-day flight connection.

## Official source checks and limits

The reviewed source links are embedded on the guides and in `data/malaysia-depth-guides.mjs`. Checked official context includes Sabah Tourism Board’s [Sandakan district](https://sabahtourism.com/district/sandakan/) (page updated 10 October 2026), [Sepilok Orangutan Rehabilitation Centre](https://sabahtourism.com/destination/sepilok-orangutan-rehabilitation-centre/), [Kinabatangan district](https://sabahtourism.com/district/kinabatangan/), [Kinabatangan River](https://sabahtourism.com/destination/kinabatangan-river/), [Gomantong Cave](https://sabahtourism.com/destination/gomantong-cave/), [Agnes Keith House](https://sabahtourism.com/destination/agnes-keith-house/), [Sandakan Memorial Park](https://sabahtourism.com/destination/sandakan-memorial-park/), [St Michael’s and All Angels Church](https://sabahtourism.com/destination/st-michaels-and-all-angels-church-sandakan/), the [Sabah Tourism advisory](https://sabahtourism.com/advisory/), [KOPEL’s Batu Puteh community-tourism facts](https://www.kopelkinabatangan.com/kopel-facts), and [METMalaysia’s district forecast](https://www.met.gov.my/en/forecast/weather/district/). The Sabah Tourism Sepilok page listed about 23 km/40 minutes from Sandakan city centre and the stated session windows in the checked snapshot; these are orientation and dated page facts, not airport traffic or guaranteed entry. It also warns that orangutans may not attend feeding when natural food is available.

Sabah Tourism’s Gomantong page identifies Simud Hitam as the public visitor cave and Simud Putih as restricted. Its displayed schedule and adult rates are explicitly attributed on-page and in the FAQ to an article last reviewed **12 September 2024**: Mon–Thu/weekends 08:00–13:00 and 14:00–17:00; Friday 08:00–11:30 and 14:00–17:00; last entry 16:00; adult RM5 Malaysian / RM30 international. These are dated source-page figures, not current confirmation. Child/camera fees and travel-date operations remain unknown. The Sabah Wildlife Department live check could not be completed in this review environment (the official page request returned 502), so the guide tells travellers to reconfirm access and fees with the department before departure.

Sabah Tourism’s published Kinabatangan journey figures (roughly 1.5 hours overland from Sandakan and 1.5–2 hours by boat for some operator routes) are described only as orientation. No live road time, schedule, fare or lodge pickup is claimed. Forecasts are prompts to check conditions, not marine, river or road safety notices.

## Five-language content and dates

The five routes, visible review dates, schema and search content are synchronized in English, Traditional Chinese, Japanese, Korean and Thai. Four reviewed locale page batches each own 184 keys across the five routes; four separate shared-search batches each add one localized “Malaysia — Sandakan & Kinabatangan” label. Route summaries, titles and parent labels were verified in the generated localized indexes by the scoped regression. Old Sandakan/Sabah batches had 128 obsolete keys per locale; 512 stale values were removed across the four locales while active keys were retained. The page and search batch filenames use `my09-sandakan` and the `20261012` date.

Translation writer/reviewer provenance is GPT-6 Luna, with same-model self-translation and self-review. All eight new locale batches were run through the batch validator after review; each page batch reported 184 keys, each search batch one key, and zero missing route keys. The full localization audit found 55,710 required strings per locale and zero missing or stale values. This does not claim Luna Max, a second model, human review or external approval.

Exactly 25 sitemap `lastmod` values changed (the five existing paths × five language editions), all to `2026-10-12`; the source-level scope regression compared against the exact base and confirmed an unchanged 4,560-URL set. Only the five English search records changed in `data/search-index.json`; the four localized search indexes were rebuilt at 955 records each.

## Images

All three existing WebPs used across the four children were opened and inspected at 1,440 × 960 pixels and checked against their exact Commons file pages. Subjects and corrected descriptive alts match the visible pixels. All local image bytes remain unchanged; no mismatch or contradictory source-page term was found, so no photo was retired and no original SVG was needed. The route pages link the source and license, disclose resizing, center crop and WebP conversion, and state same-license sharing. See the [photo review](malaysia-sandakan-photo-review-2026-10-12.md) for exact dimensions, dates, creators and SHA-256 hashes.

The Commons source pages declare CC BY-SA 3.0. This is a record of those page declarations, not independent uploader-authority, chain-of-title or legal clearance. The full-site photo inventory still reports 511 license claims not independently verified; this bounded refresh does not clear that sitewide backlog.

## Verification

- `npm run build` passed: 5,466 files (4,577 HTML and 800 images), 319.6 MiB, with all 4,560 sitemap URLs verified.
- `npm run audit` passed after the build. It includes the full five-language/i18n and search guards, photo-license and image-provenance guards, France/date, UK/date, Malaysia Cameron/Langkawi/Melaka/fourth-child, China route dates and CN14B, Lake District and Somerset diagrams, NYC/U.S. structural, and 4,560-route site audits.
- All eight new locale batches passed `scripts/validate-i18n-batch.mjs`; `test:malaysia-sandakan-refresh` passed for 5 routes × 5 locales, exact sitemap/search scope, schema/hreflang, visible dates, source/photo disclosures and unchanged URL set.
- `node scripts/test-malaysia-sandakan-kinabatangan-refresh.mjs --dist` passed against built pages and indexes.
- `node scripts/audit-photo-license-inventory.mjs` regenerated the committed inventory with the three target source-page and pixel reviews; `git diff --check` passed.

This work is source-only. No integration or main push, deployment, browser/headless/CDP session, local web server or whole-site restricted source crawl was performed. It does not establish rendered desktop/mobile UI acceptance.
