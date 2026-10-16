# TripDistill three-page body update

This change adds route decisions to three existing English page bodies and their Traditional Chinese, Japanese, Korean and Thai editions. The additions sit in the hub or route introduction before the card sections; no card description was used as a substitute for body copy.

The historical review had already verified non-card body improvements on 904 of the 907 routes; these three pages had existing copy but were the remaining routes without the requested decision-level evidence. This pass adds that evidence in place, without counting or creating new routes, and the historical 907-route ledger remains intact.

## What changed

### Red Centre

Before, the hub named Yulara, Watarrka and Mparntwe as separate bases and said fuel, daylight and closures govern remote legs. It did not tell readers which Watarrka road suits a 2WD or where the 4WD permit route changes the fuel plan.

The new body paragraph distinguishes the sealed Stuart–Lasseter–Luritja 2WD approach via Erldunda from the unsealed Mereenie Loop via Larapinta Drive, which needs a 4WD and pass. It directs drivers to refuel before the loop, check live road and fuel conditions, and keep Uluṟu/Kata Tjuṯa, Watarrka and Mparntwe/Tjoritja as separate itinerary blocks. NT Parks describes the sealed 2WD approach and Mereenie permit requirement; Tourism NT warns there are no fuel facilities on the loop; Road Report NT supplies current conditions.

### Basque Coast and Pyrenees hub

Before, the hub described the coast and mountains as different systems and mentioned regional rail, local buses and seasonal valley services without naming the connections.

The new body paragraph names the Bordeaux–Hendaye TER corridor, TXIK TXAK T1 and 12 endpoints, and liO 965 Lourdes–Cauterets and 968 Lourdes–Luz-Saint-Sauveur. It identifies the Gavarnie extension as summer-timetable service and makes a date-valid return the valley choice: stay near the valley or arrange confirmed road transport when the seasonal leg or return does not fit. The body does not imply that the summer extension runs in October and gives no fixed times or fares.

### Bayonne and Biarritz

Before, the route advised completing one center first, said Bayonne station is near the center and Biarritz station is inland, and recommended a transit return buffer. It did not identify which bus line ends where.

The new body paragraph states that TXIK TXAK 12 runs from Gare de Biarritz via Mairie de Biarritz–Edouard VII and Jardin Public to Bayonne Place des Basques, not Bayonne rail station; it also names T1 from Gare de Bayonne to Mairie de Biarritz L. Barthou. It distinguishes central Biarritz stops for Grande Plage from Cité de l’Océan for the southern coast, names the separate TER stations, and asks travelers to match the return before adding a second center.

## Reference-page comparison

The body decisions follow the specificity already present in the corresponding Japan pages. The Hokkaido hub names the direct New Chitose–Sapporo train, separates Otaru from long transfers to Hakodate, Kushiro and Shiretoko, and recommends local nights or an alternate airport for the distant corridors. The Osaka hub distinguishes KIX access by JR and Nankai and selects a mode by hotel location. The Namba route names its four separate stations, their operators and lines, and tells readers to save the operator, line and exit. Those are body-level decisions, not card-only details.

## Official references

- [NT Parks — Watarrka National Park](https://nt.gov.au/parks/find-a-park/watarrka-national-park)
- [Tourism NT — Mereenie Loop permit and fuel notes](https://northernterritory.com/itineraries/queens-on-tour)
- [Road Report NT — current road status](https://roadreport.nt.gov.au/)
- [TER Nouvelle-Aquitaine](https://www.ter.sncf.com/nouvelle-aquitaine)
- [TXIK TXAK — coastal network and endpoints](https://itineraires.txiktxak.fr/fr/plan-du-site/reseau/TXIK-TXAK-Littoral/TXIKTXAK-LITTORAL)
- [TXIK TXAK — current timetable portal](https://www.txiktxak.fr/preparez-votre-trajet/fiches-horaires-hiver-a-telecharger/)
- [liO Occitanie — timetables and route plans](https://www.lio-occitanie.fr/horaires-et-plans/)

The reviewed source pages and the current route timetable support the named line endpoints and seasonal service distinction. Current departures, road conditions and prices remain date-sensitive, so none are frozen into the copy. No Iraty line 65 summer service is presented as available.

## Translation and catalog maintenance

Reviewed batches add the route copy and new source labels for all four locales. Catalog approval required removing 16 obsolete date-label keys already unused by current English pages (two keys in each of eight existing batches). Exact pre-prune batch blobs are retained with SHA-256 hashes in `data/i18n/archive/tripdistill-three-pages/2026-10-15/manifest.json`.

## Sitemap

The three routes carry `2026-10-15` as `lastmod` in all five sitemap editions. This also restores the previously missing Red Centre hub entry; the synchronized sitemap contains 912 English routes and 4,560 URLs across five editions.

## Verification

- `npm run audit` passed on 2026-10-16, including the exact historical route/date guard update for these three routes.
- `npm run test:canada-ca12-route-dates` passed after registering the three exact route/date additions; other date and search records remain scoped.
- `npm run build` passed: 5,501 generated files, 4,577 HTML files, 825 images, and 4,560 verified sitemap routes.
- `git diff --check` passed.
- No browser, UI, deployment or pixel acceptance was performed.

## 2026-10-16 traceable body-count addendum

This addendum records the three English source pages against `b585e6eb24a144dec8263ad9d7464913d4473acd`, the parent baseline of the current three-page source commit `e30fbf0f11b0d0b5f9ddb971ef3233f24e278c1e`. Counts use the same `parse5` non-card body extraction as `scripts/test-australia-final-content.mjs`: read text under `main#main-content`; omit scripts, styles, noscript, SVG, source/credit sections, hub directories, related grids/cards, country cards and advertisement sections; join text nodes, collapse whitespace, then count whitespace-separated tokens. Headings, the hero, decision paragraphs, operating guidance and FAQs remain in scope. The SHA-256 values below are over that normalized body text, before token counting. These are English source counts; the five-language audit separately checks localized page and search parity.

| English route | Baseline words | Current words | Delta | Baseline body SHA-256 | Current body SHA-256 |
| --- | ---: | ---: | ---: | --- | --- |
| `/australia/red-centre/` | 620 | 717 | +97 | `cbe14e3e829686459e1e13a6ef641fb7291ea78f65b0027e063a42092e3bd054` | `c86c9695f7870efc00e039684d5e381b6537f9f51e5f6cdcbc906a2e12719a0d` |
| `/france/basque-coast-pyrenees/` | 859 | 969 | +110 | `81b403dcfbb43a026b359db7d5bc992f7148d314d98b11d5ed7fcea92ec3e3b1` | `611569f86260b3e9d061f74c7d04371244c972111dbd2b788e8a6dfc6f1beab8` |
| `/france/basque-coast-pyrenees/bayonne-biarritz/` | 955 | 1,072 | +117 | `977057f48dff22105747480bd5f37bd0afba31ca63e74fd01946357b9241f42d` | `b2cf6667dd211a55c3a3ff40dbbd7216569b2608351b1abfc6566d0df0ebdce8` |
| **Total** | **2,434** | **2,758** | **+324** | — | — |

The Red Centre check now independently compares its current non-card body to the stated `b585e6e` baseline, asserts the 620 / 717 / +97 counts and both hashes, verifies that the new 2WD-versus-Mereenie 4WD paragraph appears once in the hub hero and is absent from the baseline, and checks its linked official sources: [NT Parks — Watarrka](https://nt.gov.au/parks/find-a-park/watarrka-national-park), [Tourism NT — Mereenie Loop permit and fuel notes](https://northernterritory.com/itineraries/queens-on-tour) and [Road Report NT](https://roadreport.nt.gov.au/).

The 13 October Australia CSV remains a historical 92/97 ledger: its Red Centre row remains `620 / 620 / 0` with status `carried-forward prior 92/97`. This addendum keeps the newer Red Centre evidence traceable without reclassifying or rewriting that completed historical batch. No other page body is changed by this audit correction.

This correction passed `node scripts/test-australia-final-content.mjs`, full `npm run audit` and `git diff --check`. The audit's existing Vietnam localization-scope regression now recognizes only the exact eight archived batch snapshots and manifest already recorded above, verifies each archived blob against its SHA-256 manifest entry, and continues rejecting other unregistered localization changes. `npm run build` passed with 5,501 files (4,577 HTML, 825 images) and 4,560 sitemap routes. No rendered UI or deployment check was performed in this correction.
