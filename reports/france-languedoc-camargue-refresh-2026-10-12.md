# Languedoc–Camargue regional refresh — 12 October 2026

## Scope and route choice

This source-only sprint starts from `a014412eceb30efae51894be3b6167debaa96ca3`, the checked tip of `codex/integration-sprint-20261011`, on `codex/sprint-fr-13-20261012`. It updates the existing hub and all three children:

- `/france/languedoc-camargue/`
- `/france/languedoc-camargue/montpellier-sete/`
- `/france/languedoc-camargue/nimes-pont-du-gard/`
- `/france/languedoc-camargue/arles-camargue/`

These pages had not received substantive copy changes in the current France refresh sequence. Provence inland, Côte d’Azur and Marseille/Calanques were already completed and were not redone. The French Alps branch based on `88ffaa0eca4ddea5042e37f385415dfc4b5b947a` remains a separate completed source branch and was not integrated. No URL was added or removed.

Whitespace-token counts of English `<main>` text versus the exact integration base are +933 on the hub, +364 on Montpellier/Sète, +392 on Nîmes/Pont du Gard and +422 on Arles/Camargue: **+2,111 words net**.

For source-level editorial comparison I read `japan/index.html`, `japan/osaka/index.html` and `japan/osaka/namba/index.html`. I used their clear overnight-area choices, station-aware access chains and bounded neighborhood walks as a checklist, then applied it to this region’s separate city rail bases and rural last-mile routes.

## Editorial changes

The hub now gives four-, five- and six-night base choices, with a seventh night for a separate city and rural day in each of three bases. It distinguishes Montpellier Saint-Roch from Sud de France, Nîmes Centre from the Nîmes Pont du Gard TGV station, and Nîmes from Arles as different excursion bases. Hotel moves are treated as partial travel days; the plan says which rural branch to drop when the dated return does not fit.

The route pages now describe walkable areas and access as a sequence:

- Montpellier: Place de la Comédie → Écusson → Peyrou; Antigone is a separate TaM tram branch. Sète uses the station → central canals/Quai de la Résistance → one market or museum, with Mont Saint-Clair treated as a separate hill or current local-bus connection.
- Nîmes: Arena/Esplanade → Maison Carrée/Écusson → Jardins de la Fontaine. The aqueduct day names liO Car 121 from Nîmes and the stop “Vers – Rond Point Pont du Gard”; it explicitly says Nîmes Pont du Gard TGV station is not the monument.
- Arles: Gare SNCF → Place de la République → Place du Forum → Roman Theatre/Arena → Rhône-side return. A Camargue day names one ENViA A50 stop—Pont de Gau or Saintes-Maries-de-la-Mer/La Brise—instead of promising a complete wetland loop.

Each route has a base/night trade-off, a distinct walk or itinerary, a seasonal booking check, and a same-base fallback for a missed rural bus, weather, heat, fire/access restriction or changed opening. Summer and October–March ENViA tables are treated separately. The copy gives no unverified departure, frequency, fare, ticket availability or opening hour; it tells readers to confirm a dated outbound and return with the operator and site.

## Official source checks and limits

The operator and destination pages were checked individually for the named access chains and current planning references:

- [TER Occitanie](https://www.ter.sncf.com/occitanie) for dated Montpellier–Sète–Nîmes–Arles rail planning and station selection.
- [TaM Montpellier transport map](https://www.tam-voyages.com/fr/cartographie/transport) for city tram/bus connections.
- [Pont du Gard access](https://pontdugard.fr/en/getting-here) for the official Nîmes / liO Car 121 directions and “Vers – Rond Point Pont du Gard” destination. The [liO timetable page](https://www.lio-occitanie.fr/horaires-et-plans/) publishes date-valid regional plans.
- [ENViA network update and A50 timetable](https://www.tout-envia.com/du-nouveau-sur-mon-reseau/) for Arles Gare SNCF, Pont de Gau and La Brise stop names and seasonal tables; [Camargue Regional Nature Park](https://www.parc-camargue.fr/) and the [Pont de Gau bird park’s visitor information](https://www.parcornithologique.com/en/practical-information/open-hours.html) for protected-area and site checks.
- [Météo-France](https://meteofrance.com/) for date-specific weather planning. Official visitor references are also linked in the source data for [Montpellier](https://www.montpellier-france.com/), [Sète](https://en.tourisme-sete.com/), [Nîmes](https://www.nimes-tourisme.com/en/) and [Arles](https://www.arlestourisme.com/en/).

The browser source check did not return the Sète and Nîmes tourism pages (502 responses); no volatile claim in this copy depends on them. No whole-site crawler or HTTP smoke check was run. The reader is directed to the dated operator and venue pages for actual departures, fares, hours, service notices and access.

## Images and attribution

All three existing local WebP files were opened and visually inspected at pixel level. Each is 1600 × 1066 and accurately depicts its labeled subject: Montpellier’s Place de la Comédie, the Pont du Gard aqueduct, and Arles’s Roman arena. The Arles image is explicitly an Arles city image; it is not presented as a Camargue wetland photograph. Source and license fields in the manifest match the declarations on the linked Commons pages:

| Existing local file | Source-page declaration | Local SHA-256 |
| --- | --- | --- |
| `assets/images/france-languedoc-camargue-montpellier-sete.webp` | [Montpellier Place de la Comédie](https://commons.wikimedia.org/wiki/File:Montpellier_Place_de_la_Com%C3%A9die_(2377994462).jpg) — Wolfgang Staudt, CC BY 2.0 | `5d02a81da9e5eb7a44841d267081eddc02905359e7345f11403037ea509cc6f0` |
| `assets/images/france-languedoc-camargue-nimes-pont-du-gard.webp` | [Pont du Gard SE Provence](https://commons.wikimedia.org/wiki/File:Pont_du_Gard_SE_Provence.jpg) — Wolfgang Moroder, CC BY-SA 3.0 | `47c1f269775f8233996ea2073198ff24798327ae4f9577dc6d02b73d19bcd931` |
| `assets/images/france-languedoc-camargue-arles-camargue.webp` | [Arles Roman arena](https://commons.wikimedia.org/wiki/File:Colosseum_(8620143470).jpg) — decar66, CC BY 2.0 | `d1a763fb0656118253246c874e3074a8afb9f14ebb6546ca76a7b83117a3e38b` |

The local image files and their pixels were not changed. The Pont du Gard manifest creator field was normalized to the actual listed author, `Wolfgang Moroder`; its visible credit retains the source link, license and edit note. Source-page declarations were checked; uploader authority, chain of title and independent legal clearance are not claimed. No image conflict required an original diagram, so no SVG or legacy photo was replaced.

## Languages, search and dates

The four routes are synchronized in English, Traditional Chinese, Japanese, Korean and Thai. Four new reviewed page batches contain 156 keys each. Their metadata records GPT-6 Luna as writer and “GPT-6 Luna; same-model self-review” as reviewer, with `independentSecondModel:false`; this is direct same-model review, not a claim of outside or second-model review. Replaced copy left 68 obsolete keys in each of the four older locale batches; those 272 stale values were pruned while active translations were retained. Locale batch validation and samples passed, including the long-target reuse check.

Page search summaries are synchronized in the source search index and all localized editions. The new `test:france-languedoc-search` regression checks the four route records in source and `dist/`, including the reviewed summary translation in all four locales. Four routes’ five Article dates and all 20 existing sitemap entries are dated `2026-10-12`; `datePublished` remains unchanged. A base-to-branch sitemap comparison found exactly 20 `lastmod` changes, zero URL additions or removals, and no date change outside this group.

## Verification and UI limits

Final checks passed:

- `npm run audit`: translation coverage (55,741 active strings per locale, zero stale), i18n and search guards, photo/license guards, France/UK date checks, Malaysia/CN14B/China and Lake/Somerset diagram regressions, and the full site audit (4,560 localized routes and 955 search records per language).
- `npm run build`: 5,466 files (4,577 HTML and 800 images); all 4,560 sitemap routes verified in `dist/`.
- `npm run test:france-date-sync`: all 81 English France routes and 405 sitemap URLs checked; Languedoc dates match in five Article editions and sitemap.
- `npm run test:france-languedoc-search`: 40 route records across source and `dist/`, English plus all four locales. `npm run test:france-provence-search` also passed as a no-drift regression for the already completed Provence group.
- The audit’s UK route-date tests, UK Lake/Somerset diagram checks, Malaysia Cameron/Langkawi/Melaka/fourth-child checks, Malaysia schematic, China route-date and CN14B checks, France audit, photo inventory, SVG/provenance guards and site audit all passed.
- `git diff --check` passed. During verification the France audit initially lacked a Languedoc date exception; its guard was updated to assert the four routes in all five locales. A UK Peak District check also requires `dist/`, so the normal build was run before the final full audit rerun; that rerun passed.

No local browser, headless browser, CDP, server, security scan, deployment or external review was used. Desktop/mobile rendering, overflow and interactions remain unreviewed. This is source and static-build verification, not a production smoke test or legal image-rights clearance.
