# Milan hub and field-guide refresh — 12 October 2026

## Scope and source comparison

The work is on `codex/sprint-it-08-content-20261012`, created at `02dfbbcfe90df1d4d01ad713031e380f34527ebe` (IT07 Siena). The branch still has that exact commit as its parent until the requested commit is created. The chosen cluster is Milan: its existing hub and all three existing children were retained. The Italy set remains 20 hubs, 60 focused guides, 81 English routes, and 405 routes across five language editions; the site sitemap remains 4,560 URLs.

No Italy28 content was touched: Rome, Venice, Florence, Naples, Puglia, Italian Lakes and Siena were treated as already sourced. The source comparison read the actual Japan Osaka hub (`/japan/osaka/`) and Namba field guide (`/japan/osaka/namba/`), matching regional-base decisions and station-aware local walking/fallback detail at the same content level. This was a source comparison only; the prohibited browser/UI inspection was not performed.

English rendered `<main>` word counts were compared with `git show 02dfbbcfe90df1d4d01ad713031e380f34527ebe:<route>` using the same HTML extraction and token counter for both versions:

| Existing route | Base words | Current words | Change |
| --- | ---: | ---: | ---: |
| `/italy/milan/` | 1,345 | 1,899 | +554 |
| `/italy/milan/duomo-brera/` | 1,462 | 1,586 | +124 |
| `/italy/milan/last-supper-castello/` | 1,444 | 1,556 | +112 |
| `/italy/milan/navigli-porta-nuova-design/` | 1,423 | 1,558 | +135 |
| **Total** | **5,674** | **6,599** | **+925** |

## Content changes

The hub now matches stay length to the itinerary: two nights gives one full route day and a short centre walk or reserved Cenacolo slot; three nights supports the three separate route days; a fourth night absorbs a fixed booking, rain or fair-week constraint. It names bases near Duomo/Missori/Brera, Cadorna/Magenta, Porta Garibaldi/Isola and Porta Genova, and explains the trade-off at Centrale and Porta Venezia.

Airport and city transport are named without fixed fares or unverified headways: Malpensa Express to Milano Centrale or Cadorna; Linate via ATM M4 and San Babila; intercity gateways Milano Centrale, Porta Garibaldi and Cadorna; and the official Cenacolo visitor directions via M1 Cadorna or Conciliazione, M2 Cadorna and Tram 16. Travellers are directed to ATM's current planner and service notices for the actual date.

The three children use distinct operating plans:

- **Duomo / Brera:** base near the first booked door; walk Piazza del Duomo → Galleria Vittorio Emanuele II → Piazza della Scala → Via Brera, then choose either the Pinacoteca or the lanes and Orto Botanico; finish toward Lanza or Montenapoleone.
- **Last Supper / Castello:** use Cadorna or Magenta for an early slot; keep the visit away from flights, long-distance trains and hotel changes; continue west-to-east along Corso Magenta toward Via Carducci and the Castello; select one museum, courtyard area or Parco Sempione.
- **Porta Nuova / Navigli:** keep Porta Garibaldi, Piazza Gae Aulenti and Isola as the northern walk; plan one ATM crossing to Porta Genova; choose one Naviglio Grande bank and preserve a clear return. The base choice distinguishes northern rail access from a later canal dinner.

Booking and seasonal copy separates the Duomo roof, cathedral, archaeological areas and collections; directs travellers to check Brera, Castello and ADI calendars independently; and keeps same-district alternatives for sold-out, closed, wet or hot days. It does not assume a showroom is open to individual visitors or any night service is running.

## Official sources and limits

Reviewed references include the [ATM journey planner, maps and service notices](https://www.atm.it/en/Pages/default.aspx), [Malpensa Express routes and service information](https://www.malpensaexpress.it/), the [Museo del Cenacolo Vinciano visitor and reservation instructions](https://cenacolovinciano.org/en/info/), the [Duomo visitor site](https://www.duomomilano.it/en/), [Pinacoteca di Brera](https://pinacotecabrera.org/en/), [ADI Design Museum](https://www.adidesignmuseum.org/en/), and [YesMilano visitor information](https://www.yesmilano.it/en/must-see-attractions). The Cenacolo page currently specifies advance reservations for all admission types, named tickets, no date/time change, and arrival at least 30 minutes before entry; travellers are told to reopen the official page and their ticket for their date. These are current-source statements, not a guarantee of future inventory.

The [Castello Sforzesco official site](https://www.milanocastello.it/en) was identified for current museum and access checks, but the automated page reader returned an error during this review. No opening-hour or ticket claim is based on that page. The wider Italy source crawler was not run because the task prohibited a site-wide crawler.

## Photos and rights

All three existing 1600×1066 WebPs were inspected at pixel level and match the subjects represented by their routes. Their bytes and displayed credits were not changed; no mismatch required a replacement or original SVG.

| Route subject | Commons source and declared terms | Local WebP SHA-256 |
| --- | --- | --- |
| Milan Cathedral | [Milan-duomo-front-facade.jpg](https://commons.wikimedia.org/wiki/File:Milan-duomo-front-facade.jpg), Skarkkai, CC0 1.0 | `f729626dab6b0c110262e26b22d6a4111e6b1bf9d8a0518b974a69072443f76f` |
| Santa Maria delle Grazie | [Santa Maria delle Grazie.jpg](https://commons.wikimedia.org/wiki/File:Santa_Maria_delle_Grazie.jpg), Masi27185, manifest selects CC BY-SA 3.0 | `c840cdf749a27997baa34675ee7aadb5fa9d90b93f537b57fccd644c145c1656` |
| Naviglio Grande | [Milano Naviglio Grande am Abend 1.jpg](https://commons.wikimedia.org/wiki/File:Milano_Naviglio_Grande_am_Abend_1.jpg), Zairon, CC BY-SA 4.0 | `74dd111a069f418d30db64152be1d72fbd1934ffcf614acaee10019be55b6112` |

The Santa Maria Commons page offers more than one license choice, including CC BY-SA 3.0 and GFDL; the manifest's chosen CC BY-SA terms are not treated as an attribution conflict. The Commons declarations and visual match do not independently establish chain of title, legal clearance or every downstream right.

## Translation, search and dates

Four new reviewed page batches add 46 source strings each in Traditional Chinese, Japanese, Korean and Thai, and reuse 206 route keys already covered by sibling batches. A separate two-key `/italy/` batch per locale covers the current Milan hub-card excerpt and the current Siena card excerpt, whose text had changed in earlier work. The writer and same-model reviewer are GPT-6.1 Codex; `reviewProvenance` records that the review is not independent, and no human or external review is claimed. Long-form samples were reviewed for district, station, nights, booking, weather and fallback meaning. Locales use their established Italy place-name terminology and the glossary was extended for Milan route terms.

The retired Milan batch had 15 now-stale strings per locale removed; one obsolete Siena card key per locale was also pruned before the two current `/italy/` excerpts were covered. The final i18n audit reports 55,773 current strings and zero missing/stale keys in each of four translated editions. The Italy search index remains 81 route records; the new hub and child cards are synchronized.

All four existing pages retain `datePublished: 2026-09-26` and carry `dateModified` / sitemap `lastmod: 2026-10-12` in English and the four translated editions. This updates 20 existing sitemap entries only. The source and dist checks confirm 4,560 total sitemap URLs, 405 Italy locale URLs and 81 Italy search routes, with no URL addition or removal.

## Verification and remaining review

Passed checks:

- `npm run build`: 5,466 files (4,577 HTML, 800 images), all 4,560 sitemap routes verified.
- `npm run audit`: full i18n coverage/approval, search guards, photo license/provenance checks, country audits, route-date/search regressions, China CN14B, Malaysia regressions, UK Lake District and Somerset SVG/XML checks, NYC/USA structure checks and final site audit.
- `npm run audit:italy`: 20 hubs, 60 focused guides, 81 English / 405 five-language routes and all Italy structural checks.
- `npm run test:italy-milan-date-sync`: 40 source/dist documents across four routes and five locales; review/publication dates, rendered local plans, sitemaps and route/search counts checked.
- `git diff --check`.

No browser, headless browser, CDP, local server, UI screenshot, production deployment, integration or main update was performed. Desktop/mobile rendering, interaction and final editorial acceptance remain unverified. The current branch push only backs up this source branch; integration/main/prod and deployment remain out of scope. Automated checks and source-page license statements do not constitute user acceptance, AdSense eligibility or independent legal review.
