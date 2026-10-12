# Sorrento, Amalfi Coast & Capri refresh — 12 October 2026

## Scope and content

Branch: `codex/sprint-it-11-content-20261012`

Exact starting commit: `a9b6017a52dcf177d51a5173642c80b5b6b80d5e`

Existing routes refreshed:

- `/italy/sorrento-amalfi-capri/`
- `/italy/sorrento-amalfi-capri/sorrento-gateway/`
- `/italy/sorrento-amalfi-capri/positano-amalfi-ravello/`
- `/italy/sorrento-amalfi-capri/capri-anacapri/`

No URL was added or removed. The Italy set remains 81 English routes and 405 pages across five languages. English `<main>` whitespace-token counts against the exact source commit changed as follows:

| Route | Before | After | Change |
|---|---:|---:|---:|
| Hub | 1,234 | 1,752 | +518 |
| Sorrento Gateway | 1,315 | 1,528 | +213 |
| Positano, Amalfi & Ravello | 1,268 | 1,521 | +253 |
| Capri & Anacapri | 1,278 | 1,491 | +213 |

The hub distinguishes three-, four- and five-night plans; Piazza Tasso and the Circumvesuviana station as different Sorrento lodging areas; and Sorrento, Salerno and Amalfi as different onward-transport bases. It explains the Napoli Centrale–Napoli Garibaldi–Sorrento EAV connection and the vertical gap between Sorrento station and Marina Piccola. It names SITA Sud 5110 for Amalfi–Ravello–Scala when operating, and distinguishes Travelmar piers from Sorrento–Capri ferry terminals.

The three child pages now give separate, place-specific walking sequences, lodging decisions, booking checks, seasonal adjustments and complete local alternatives. Sorrento's loop runs from the station through Piazza Tasso, Via San Cesareo, Sedil Dominova, the cathedral quarter, Chiostro di San Francesco and Villa Comunale, with the Marina Piccola descent conditional on current access. The coast page walks the Amalfi pier-to-cathedral core and describes the separately verified bus to Ravello. The Capri page chooses either Capri town or Anacapri as the main ascent and protects the mainland return. No Blue Grotto entry, ferry departure, fare or future availability is guaranteed.

## Editorial comparison

Source-level comparison used the actual existing Osaka hub (`/japan/osaka/`) and Namba guide (`/japan/osaka/namba/`). Osaka groups days geographically and differentiates its city zones; Namba gives separate market, lane and canal walks with named station access and trade-offs. This cluster applies the same checks to its own bases, station-to-port elevation, road and marine corridors, named stops, return gates and route sacrifices. This was not a browser or viewport comparison.

## Official source checks

Checked the focused operator and destination pages on 12 October 2026:

- [EAV service information](https://www.eavsrl.it/), [station departure/arrival planner](https://orariotreni.eavsrl.it/) and [rail service notices](https://www.eavsrl.it/infomobilita-ferrovia/)
- [SITA Sud Campania timetables](https://sitasudtrasporti.it/campania/orari/) and [Campania service/ticket information](https://sitasudtrasporti.it/campania/)
- [Travelmar timetable and fare information](https://www.travelmar.it/en/timetable)
- [SNAV booking and route page](https://www.snav.it/en/shop-2)
- [Capri Tourism](https://www.capritourism.com/en), [Capri archaeological museums and parks](https://museicapri.cultura.gov.it/) and [Visit Amalfi](https://www.visitamalfi.info/en/)

These sources expose current route tools, timetables, notices or booking interfaces; exact fares, dated departures and future capacity are left to the traveler to verify for the travel date. SITA route/day notices, sea state, lift and island-bus status, venue opening conditions, road disruption and the last return are treated as separate checks. The Comune di Sorrento page was not readable in the available source reader (502), and Punta Campanella timed out. Neither is used to substantiate a current operating claim. No whole-site source crawler was run.

## Photos

The existing local 1600×1066 WebPs were viewed at pixel level and match their route subjects. Image bytes, credits and source records were not changed.

| Route | Checked Commons source | Existing credited creator and stated license | Decision |
|---|---|---|---|
| Sorrento Gateway | [File:Sorrento Cliff 2.jpg](https://commons.wikimedia.org/wiki/File:Sorrento_Cliff_2.jpg) | Halley from Boston · CC BY 2.0 | Retain; cliff and marina subject match |
| Positano, Amalfi & Ravello | [File:Positano panorama.jpg](https://commons.wikimedia.org/wiki/File:Positano_panorama.jpg) | Nicola Cerroni · CC BY-SA 4.0 | Retain; stacked Positano town subject matches |
| Capri & Anacapri | [File:Faraglioni in Capri 09.jpg](https://commons.wikimedia.org/wiki/File:Faraglioni_in_Capri_09.jpg) | Abxbay · CC BY-SA 4.0 | Retain; Faraglioni subject matches |

The three source pages state separate licenses. Different license versions on different works are not treated as an automatic conflict. This records the checked source-page declarations and pixel match only; it does not establish independent rights ownership, chain of title or legal clearance. Since none of the images mismatched, no image was disabled and no replacement SVG was needed.

## Translations and search

Files: `data/i18n/reviewed/{zh-Hant,ja,ko,th}/zzzzzznc-italy-sorrento-pages-20261012.json`.

Each locale adds 55 new route strings and reuses 205 existing reviewed keys. GPT-6 Codex translated and performed same-model self-review; no independent second model, human review or external translation review is claimed. A 13-key-per-route sample and the route batch validator passed for each locale. Each locale catalog contains 55,885 required strings with zero missing or stale entries. The page-summary translations are also the translations consumed by the search index, so no duplicate search-only strings were created. The Italy search index remains at 81 route records per language.

The previous Sorrento batch (`46c-italy-sorrento-amalfi-capri.json`) contained 19 obsolete source strings per locale after the English content changed. Only those stale keys were removed; all other historical translations remain. This narrow cleanup was required for current catalog approval and does not count as new translation work.

## Dates and route regression

All four pages carry `dateModified: 2026-10-12` and retain `datePublished: 2026-09-26`. A direct sitemap comparison against the exact starting commit found:

- 4,560 URLs before and after; zero additions and zero removals.
- Exactly 20 `lastmod` changes: four routes × five language editions, from `2026-09-26` to `2026-10-12`.
- All other sitemap dates unchanged.
- 81 Italy search records per language, with localized summaries equal to the reviewed page translations.

## Verification and limits

- `npm run audit:i18n` — passed; four locale catalogs at 55,885 strings each, no missing or stale entries.
- `npm run audit:italy` — passed; 20 hubs, 60 guides and 405 five-language pages.
- `npm run test:italy-sorrento-date-sync` — passed; 40 source/dist pages, 20 localized sitemap entries, original publication dates, page plans and search summaries.
- `npm run build` — passed; 5,466 files (4,577 HTML and 800 images), 4,560 sitemap routes.
- `npm run audit` — passed, including i18n/search, photo inventory/provenance, China CN14B, Italy Emilia SVG XML/geometry and localized legends, UK Lake District/Somerset diagrams, UK/France/Malaysia regressions and the site route audit.
- `git diff --check` — passed before final commit.

No browser/headless/CDP, viewport or UI review, local server, whole-site source crawler, integration/main/prod update, deployment or production action was performed. The separate IT09 diagram correction `503ab836a39ac74ff21c36219f0711459dcaff56` remains untouched and pending merge. Photo source-page checks are not an independent rights-chain or legal review.
