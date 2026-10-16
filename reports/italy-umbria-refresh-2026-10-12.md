# Umbria hub and field-guide refresh — 12 October 2026

## Scope and baseline

- Branch: `codex/sprint-it-10-content-20261012`
- Source commit: `a9af0403913619d18be3b4d46ed4db0ebc33153d` (`IT09EmiliaRomagna`)
- Updated existing routes: `/italy/umbria/`, `/italy/umbria/perugia-ridge-city/`, `/italy/umbria/assisi-franciscan-city/` and `/italy/umbria/orvieto-cliff-city/`.
- No route was added or removed. Italy remains 81 English routes and 405 pages across five languages.
- The 5 October 2026 Umbria batch changed derivative photo-credit copy only. It did not satisfy this content-refresh scope.
- The pending IT09 change `503ab836a39ac74ff21c36219f0711459dcaff56` was kept separate. This work does not modify Bologna or Modena SVGs, their legends, or the Emilia-Romagna route files.

## Content changes

The hub now distinguishes three-, four- and five-night itineraries, suggests bases around Corso Vannucci/Piazza IV Novembre, Assisi station and upper Orvieto, and connects them to named arrival and local-access choices. It includes a lower-effort alternative when a transfer or service is unavailable.

Each child now gives a named base, a coherent walking sequence, a booking action and a seasonal adjustment:

- **Perugia:** Pincetto to Corso Vannucci and Piazza IV Novembre, then an optional gallery/palace stop or a longer Etruscan Arch/aqueduct walk, with a return route to the same base.
- **Assisi:** station arrival using Assisi Link, then Piazza Inferiore, Via San Francesco, Piazza del Comune and Tempio di Minerva, with Rocca as an optional extension and a checked return connection.
- **Orvieto:** Piazza Cahen, optional Pozzo di San Patrizio, Corso Cavour/Piazza della Repubblica and the Duomo/Cappella San Brizio; the underground visit is treated as a separately booked activity and the return goes back through Piazza Cahen.

Source-level comparisons used the existing Japan hub [`/japan/osaka/`](../japan/osaka/) and focused guide [`/japan/osaka/namba/`](../japan/osaka/namba/). The source parser counted 1,475 and 1,675 whitespace-delimited `<main>` tokens respectively. This was a text/source comparison only; no rendered desktop/mobile review was performed.

English `<main>` text, measured with the repository's parse5 extraction and whitespace-token method against the exact source commit:

| Route | Before | After | Change |
| --- | ---: | ---: | ---: |
| Umbria hub | 1,343 | 1,623 | +280 |
| Perugia Ridge City | 1,487 | 1,564 | +77 |
| Assisi Franciscan City | 1,529 | 1,623 | +94 |
| Orvieto Cliff City | 1,458 | 1,554 | +96 |
| **Total** | **5,817** | **6,364** | **+547** |

## Current transport references and limits

- [Busitalia Assisi Link](https://www.fsbusitalia.it/it/turismo/collegamenti-integrati/assisi-link.html) describes a bus connection from the Assisi station exit to the hill city. The guide names the connection but gives no guaranteed schedule or fare.
- [Busitalia Umbria alternative mobility](https://www.fsbusitalia.it/it/umbria/orari-linee-umbria/mobilita-alternativa-parcheggi-umbria.html) describes Perugia's mechanized pedestrian paths and Orvieto's funicular/minibus access, alongside service notices. Readers are directed to check current operating notices.
- [Busitalia Orvieto Link](https://www.fsbusitalia.it/it/turismo/collegamenti-integrati/orvieto-link.html) documents the station forecourt interchange and funicular link toward Piazza Cahen. No fixed headway or fare is stated.
- The official [Minimetrò site](https://www.minimetrospa.it/) timed out in the available reader. The page therefore makes no precise headway or fare claim and asks readers to confirm live service.

Schedules, prices, seasonal service, admission and reservation availability can change. The article does not promise any unknown fare, timetable or future ticket inventory.

## Images

The existing WebPs were opened locally and checked against their exact Commons pages. The visible subjects agree with their route assignments:

| Asset | Pixel subject | Commons record |
| --- | --- | --- |
| `assets/images/italy-umbria-perugia-ridge-city.webp` | Palazzo dei Priori / central civic square | [Perugia file](https://commons.wikimedia.org/wiki/File:Perugia_-_Palazzo_dei_Priori_-_2025-09-07_21-53-14_001.JPG), Maddy16869, CC BY-SA 4.0 |
| `assets/images/italy-umbria-assisi-franciscan-city.webp` | Basilica of Saint Francis and hillside town | [Assisi file](https://commons.wikimedia.org/wiki/File:Papal_Basilica_of_Saint_Francis_of_Assisi.jpg), Peter K Burian, CC BY-SA 4.0 |
| `assets/images/italy-umbria-orvieto-cliff-city.webp` | Orvieto above the cliff | [Orvieto file](https://commons.wikimedia.org/wiki/File:Orvieto_panorama.jpg), Hans Peter Schaefer, CC BY-SA 3.0 |

The existing credits and asset records were retained. Each photograph has its own source and license record; differing license versions across separate photos do not imply a conflict. No photo mismatch was found, so no asset was retired and no replacement SVG was needed. These checks do not claim independent rights-chain or legal clearance.

## Localization, search and dates

- Four reviewed locale batches cover Traditional Chinese, Japanese, Korean and Thai. Each has 430 raw units and 254 unique keys: 53 newly translated keys and 201 reused keys. The new 53 strings per locale were same-model translated and semantically self-reviewed by GPT-6 Codex; no independent second-model or human translation review is claimed.
- Seventeen stale Umbria entries per locale were pruned from the older batch. No unrelated batch keys were removed.
- The English Italy search index remains at 81 records. Localized search summaries reuse the reviewed page-summary translations; each localized search index retains 955 records.
- The hub and children now carry review date 12 October 2026 while preserving publication date 26 September 2026.
- Direct sitemap comparison with the source commit found 4,560 URLs before and after, zero additions, zero removals and exactly 20 changed `<lastmod>` entries: four existing routes across five languages, from `2026-09-26` to `2026-10-12`.
- The Umbria route-date regression checks 40 source/dist documents, all 20 localized sitemap entries, publication dates, route/search counts and rendered local-plan translations.

## Verification

- `npm run build` — passed; generated 5,466 files (4,577 HTML, 800 images) and verified 4,560 sitemap routes.
- `npm run audit` — passed after the build. Includes translation and search guards, the Italy audit and date regressions, Emilia SVG XML/geometry and legend regressions, China CN14B, UK Lake District/Somerset diagrams, Malaysia regressions, photo inventory/provenance guards and site-wide route checks.
- `npm run test:italy-umbria-date-sync` — passed for 40 source/dist pages across four routes and five languages.
- `npm run test:italy-puglia-date-sync` — passed after its aggregate Italy date expectation was extended to include the four explicitly reviewed Umbria routes. No other route date expectation changed.
- `git diff --check` — passed.

The first audit attempt preceded the build and stopped at a UK regression that reads `dist/`; the build generated the expected artifact and the full audit then passed. No browser, headless browser, local server or UI inspection was used. No whole-site source crawler, deployment, integration/main/prod update or force push was performed.
