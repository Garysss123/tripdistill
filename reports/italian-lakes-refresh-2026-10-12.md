# Italian Lakes hub and field-guide refresh — 12 October 2026

## Scope and route changes

This source-only refresh starts at the exact codex/integration-sprint-20261011 base a014412eceb30efae51894be3b6167debaa96ca3 on codex/sprint-it-06-content-20261012. It updates the existing [Italian Lakes hub](/italy/italian-lakes/), [Lake Como Central Lake](/italy/italian-lakes/lake-como-central-lake/), [Lake Maggiore & the Borromean Islands](/italy/italian-lakes/lake-maggiore-islands/) and [Lake Garda Shores](/italy/italian-lakes/lake-garda-shores/) routes. The Italy collection still has 81 English routes. No route was added or removed.

Rendered English <main> text gained 789 whitespace-delimited words over that exact base: hub +365, Como +133, Maggiore +137 and Garda +154. The hub now distinguishes two-, three- and four-night plans and names the practical bases: Como city, Varenna-Esino, Stresa, Desenzano and Peschiera. It separates the distinct Como rail stations, uphill station-to-pier walks, island piers and onward northern Garda connections. Each child now has a unique stay, district-walk, booking and seasonal plan. The routes group walks by shore and town rather than imply a continuous circuit: Varenna/Bellagio, Stresa/Isola Bella and the separate Desenzano, Peschiera or Malcesine walking zones. Each plan names a shore-side or rail-base fallback.

The published planning copy uses named operators, stations, attractions, piers and local streets but does not promise a departure, fare or timed connection. The dated [Navigazione Laghi schedules and notices](https://www.navigazionelaghi.it/en/) showed an autumn timetable for Maggiore (5 October–8 November 2026), a Garda timetable (5 October 2026–25 March 2027), and a Como timetable (5 October–1 November 2026) with weekday and Sunday/holiday ferry tables separated. Notices included temporary suspensions and route limitations. The text therefore directs travelers to check the exact date, day type, weather, capacity and return sailing. The [Trenord route and timetable planner](https://www.trenord.it/en/routes-and-timetables/), [Villa Monastero visitor page](https://www.villamonastero.eu/en/), [Terre Borromeo's Isola Bella hours and prices](https://www.terreborromeo.it/en/isola-bella/hours-prices) and [Funivia Malcesine–Monte Baldo](https://www.funiviedelbaldo.it/en/) were checked as separate authorities for rail, attraction admission and seasonal lift information. Their current details remain date-sensitive; no fixed price or future sailing is asserted.

## Images and rights limits

All three existing local WebPs were visually inspected at 1600 × 1066 pixels. Their visible subjects match the route subjects: the Como ferry panorama, an aerial view of Isola Bella, and Malcesine's waterfront, castle and mountains. Source-page declarations and selected site credits match the existing manifest. The [Como Commons page](https://commons.wikimedia.org/wiki/File:Bellagio_and_Lake_Como_from_Menaggio-Varenna_ferry.jpg) lists Daniel Case and both CC BY-SA 3.0 and GFDL choices; the site uses CC BY-SA 3.0, and the multiple listed licenses are not treated as a conflict. The [Maggiore Commons page](https://commons.wikimedia.org/wiki/File:Borromeo-P3P-20170530-010_(36234155645).jpg) identifies CucombreLibre, an aerial Isola Bella image and CC BY 2.0. The Garda image's exact encoded Commons page could not be reopened by the current page reader; its creator, subject and CC0 1.0 declaration match the existing source record and the 4 October 2026 source-page check in [Italy photo license batch 01](italy-image-license-batch-01.md).

| Route | Local image | Creator; selected source-page license | Local SHA-256 |
|---|---|---|---|
| Como | assets/images/italy-italian-lakes-lake-como-central-lake.webp | Daniel Case; CC BY-SA 3.0 | 23baf526bfe5580c126cb43d885912422771858d7f7293fa4893551bc5b4c13c |
| Maggiore | assets/images/italy-italian-lakes-lake-maggiore-islands.webp | CucombreLibre; CC BY 2.0 | 0cd8a161d6f14d535b4a8d5643dda81115275fb6fec81aabed921f306b4c706d |
| Garda | assets/images/italy-italian-lakes-lake-garda-shores.webp | Avisadehh; CC0 1.0 | bf1fa6d2cec67bc2894c2ede5721a41521a68b83aa054b28a591a5d690f89146 |

No image or credit was changed, no subject mismatch was found, and no replacement SVG was needed. Existing source-page declarations and pixel agreement do not establish uploader authority, ownership or an independent chain of title.

## Translation, dates and search

Each of Traditional Chinese, Japanese, Korean and Thai has a reviewed page batch zzzzy-italy-lakes-pages-20261012.json with 47 new strings; 214 existing keys per locale were reused. The older 46l-italy-italian-lakes.json batch had 11 obsolete strings removed in each locale, while current strings were retained. GPT-6 Luna is recorded as writer and same-model self-reviewer; no independent model, Luna Max, human or external approval is claimed.

The three changed child summaries now appear in their existing search records in English and all four localized editions. No separate search batch was necessary because each summary is already owned by its page translation. Each edition still has 955 search records.

All four existing routes now show dateModified / the review date 12 October 2026 in five editions, while their original datePublished remains 26 September 2026. The sitemap still contains 4,560 URLs, with exactly 20 lastmod changes (four routes × five languages), and no URL additions or removals.

## Verification and boundaries

npm run audit and npm run build passed. The build produced 5,466 files (4,577 HTML and 800 images) and verified all 4,560 sitemap routes. The Italian Lakes regression checked 40 source/build page files across four routes and five editions, the review and publication dates, local-plan rendering, all 20 localized sitemap entries and the 81-route Italy count. The Italy audit, Puglia date test, four locale validators, search/i18n guards, photo-license inventory, image provenance, China route/CN14B, Malaysia Cameron/Langkawi/Melaka/fourth-child, France date, UK route/date/search, UK Lake District and Somerset SVG, and site audits passed. git diff --check passed.

No UI/viewport review, browser, headless process, CDP, local server, whole-site source crawler, deployment, integration/main update or production action was performed. Desktop/mobile visual and interaction review remains unverified.
