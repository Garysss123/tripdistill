# Switzerland CH16 — final five existing guide bodies

**Review date:** 12 October 2026

**Source branch:** `codex/sprint-ch-16-content-20261013`

**Exact base:** `99a5daff45c7c5ae862019f48adebac112f52f77` on `codex/sprint-ch-15-content-20261013`
**Scope:** five existing local-guide paths; no route or draft added.

## Residual-route proof

The Switzerland inventory has 65 unique paths: one country overview, 16 hubs and 48 child guides. The previous refresh ledger is CH01–13: 13 hubs plus 39 children (52 paths); CH14: the country overview plus three hubs (4); CH15: four children (4). Subtracting those disjoint sets leaves exactly five existing guide bodies for CH16: [Lugano Center & Lakefront](/switzerland/lugano-southern-ticino/lugano-lakefront/), [Monte San Salvatore & Morcote](/switzerland/lugano-southern-ticino/san-salvatore-morcote/), [Locarno & Ascona Lakefront](/switzerland/locarno-ascona-valleys/locarno-ascona/), [Rhine Falls: Choose the Right Bank](/switzerland/schaffhausen-rhine-falls/rhine-falls/) and [Schaffhausen Old Town & Munot](/switzerland/schaffhausen-rhine-falls/schaffhausen-old-town/).

The CH16 regression derives the route inventory from `data/switzerland-guides.mjs`, asserts 65 entries and 65 unique paths, identifies CH14 and CH15 from their refresh data, and asserts that CH16 covers exactly the five routes above. It then checks that the 52 remaining paths are disjoint and that all four ledgers union to 65. Each target body's current source is compared with the exact CH15 base; non-target English page files must remain byte-identical to that base. A page date or search card cannot satisfy the body checks: each target must have more than 650 visible `<main>` words, gain at least 200 words against its own base, and contain its route-specific transport, service-limit and alternative details.

## Planning decisions added

- **Lugano:** makes the FFS station-to-lake trip a one-way descent using the TPL funicular to Piazza Cioccaro, then names the old-town, Via Nassa and Parco Ciani sequence. It compares a compact centre loop with the park or a separately dated lake sailing and protects the uphill return by funicular, bus or walk.
- **Monte San Salvatore and Morcote:** distinguishes Paradiso's timed summit funicular from Morcote's separate lake-level bus or seasonal boat approach. It dates the 2026 operating window and 9 November–12 March 2027 maintenance closure, includes the operator's mobility limits, and tells travelers when the two stops do not fit one return window.
- **Locarno and Ascona:** uses Locarno-Muralto as the rail anchor and requires an exact FART stop or dated Lake Maggiore sailing for Ascona. It notes that FART line 314 is the Locarno–Ronco sopra Ascona service and keeps each town's walking visit distinct from the transfer.
- **Rhine Falls:** asks travelers to choose north or south before selecting a station. It distinguishes the free north-bank grounds and basin approach from the paid Schloss Laufen platforms and their separate opening/access limits; crossing and seasonal boat trips are additional choices.
- **Schaffhausen Old Town:** gives a lower-town Vordergasse loop before the uphill Munot decision, distinguishes the museum's date-specific hours, and keeps a Rhine Falls bank or Stein am Rhein as a separate transfer block.

Same-level Japan source comparison: Hokkaido's [regional guide](/japan/hokkaido/) groups gateways and corridors, weighs rail versus car, and sets realistic trip shapes; [Otaru & Shakotan](/japan/hokkaido/otaru-shakotan/) separates Otaru's compact rail walk from Shakotan's seasonal coast and makes the last return a decision. CH16 carries the same source-level planning functions into short urban and lake days: named start points, distinct service systems, trade-offs, a usable route order and a local fallback. This is a source-content comparison, not rendered-page or desktop/mobile acceptance.

## Official sources checked

Operator and destination pages were checked on 12 October 2026. They support the claims and links near the relevant page text; they do not guarantee a future timetable, opening, fare, availability or access condition.

- Lugano: [TPL funicular](https://www.tplsa.ch/2/49/tpl-funicolare.html), [TPL timetables and notices](https://www.tplsa.ch/8/0/newlinee-e-orari.html), [Lake Lugano Navigation](https://www.lakelugano.ch/en), and [SBB](https://www.sbb.ch/en).
- Monte San Salvatore and Morcote: the operator's [timetable, fares and accessibility page](https://www.montesansalvatore.ch/en/timetable-and-fares/), TPL and SBB, plus Lake Lugano Navigation's dated service calendar.
- Locarno and Ascona: [FART line 314](https://fartiamo.ch/en/line-314/), [FART route and service information](https://fartiamo.ch/en/), [Navigazione Laghi](https://www.navigazionelaghi.it/en/), [SBB](https://www.sbb.ch/en) and [Ascona-Locarno](https://www.ascona-locarno.com/en).
- Rhine Falls: the official [access, opening and price list](https://rheinfall.ch/en/inform/opening-hours-prices/list), [arrival and bank guidance](https://rheinfall.ch/en/inform/journey/list), [Rhyfall Mändli boat information](https://rhyfall-maendli.ch/en/boat-tours-experiences/short-tour/) and SBB.
- Schaffhausen: [Schaffhauserland's Munot visitor information](https://en.schaffhauserland.ch/map/poi/munot-33334310-d1a3-4b30-bb1c-9eb9acbe3c1b.html), [Museum zu Allerheiligen's visit and current exhibition information](https://www.allerheiligen.ch/en/) and SBB.

## Images and localization

Five existing WebPs were pixel-viewed locally at full display resolution; their source/license declarations and image bytes are unchanged. The human-readable photo titles now replace Commons filenames in the captions. The Monte San Salvatore guide's image description now matches the flowered bicycle, lake and mountain in the frame; the Schaffhausen description identifies Vordergasse and its facades rather than a Munot that is not pictured. The [photo review](switzerland-ch16-photo-review-2026-10-12.md) records these checks and the exact source pages. Pixel relevance and Commons declarations do not independently clear copyright or commercial reuse rights. No new image or SVG was created.

All five routes keep publication date `2026-09-12` and use `2026-10-12` as the modification and visible review date in English, Traditional Chinese, Japanese, Korean and Thai. Search summaries reuse the page translations; each locale also has a separate search batch for any newly introduced keywords. The locale page batches contain 243 new translations each across 352 unique source keys, with 109 keys covered by earlier reviewed batches. The selected translation workflow requested GPT-6 Luna; the runtime model identifier cannot be independently verified. Review was same-model/same-session and is not an independent second-model or human review.

Exactly five existing article dates across five editions (25 `lastmod` values) change to `2026-10-12`. Sitemap size and route set stay at 4,560 URLs; the five English search summaries and their route-specific keywords are the only English search records changed. The regression compares every other English Switzerland body and search record against the exact base.

## Verification and limits

- `i18n:batch` and route-sized `i18n:sample` passed for all eight CH16 locale batches (four page batches and four search batches); each page batch has 243 values, each search batch has 27, and none has blank values or reused long targets.
- `npm run audit:i18n` passed with 56,421 current strings and zero missing or stale keys in each of the four merged locale catalogs. The dry run identified 644 stale keys in reviewed historical batches (161 per locale); only keys absent from current source units were removed, leaving drafts untouched.
- `npm run audit:switzerland` passed: 16 hubs, 48 focused guides, 65 English and 325 five-language routes, 48 credited images and 48 unique planning instruments.
- `npm run test:switzerland-ch16-refresh` passed. It proves 52 CH01–13 + 4 CH14 + 4 CH15 + 5 CH16 = 65 unique routes; five substantive body gains (+3,149 words total); five-language dates, Article/search summaries and localized search terms; no other English Switzerland body/search changes against the exact base; and exactly 25 changed sitemap dates with the 4,560-URL set preserved. The historic Swiss regressions from the earlier guide cohorts also passed.
- The complete `npm run audit` passed, including all translation, country, search, date, source-image and site-inventory checks. `npm run build` passed with 5,474 files (4,577 HTML, 808 images) and verified all 4,560 sitemap routes. The complete build exceeded the first audit attempt's prerequisite because an existing Peak District regression reads `dist`; building first and rerunning the audit passed.
- Final `git diff --check` passed. No new SVG was created, so no SVG XML/geometry or SVG pixel check applies. The five existing photos were pixel-viewed locally; their bytes and manifest source/license declarations are unchanged. The photo review verifies visible subject and alt-text fit, not independent copyright or commercial-use clearance.

The requested translation workflow named GPT-6 Luna, but the runtime model identifier could not be independently verified. Translation review was same-session self-review and sampling, not independent second-model or human review. No full-site external source crawler, headless browser, CDP, local server, integration branch, deployment or production action was used. This source coverage does not establish rendered UI acceptance, independent rights clearance or final editorial approval of the entire Swiss site.

No full-site external source crawler, headless browser, CDP, local server, integration branch, deployment or production action is included. These source changes do not establish rendered UI acceptance, independent photo-rights clearance, user editorial approval of all 65 pages, or AdSense eligibility.
