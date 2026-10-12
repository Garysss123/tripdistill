# Italy IT12 content refresh — 12 October 2026

## Scope and result

Based on `70ab977ef29c4c7a101ac819a19fded1af45911a` on `codex/sprint-it-12-content-20261012`. The refresh updates the existing Italy overview and nine selected hubs with their three existing children each: 37 routes total across Veneto art cities, the Dolomites/Trentino/South Tyrol, Turin/Piedmont, Genoa/Liguria, Marche/Abruzzo, Basilicata/Calabria, western Sicily, eastern Sicily, and Sardinia. The remaining 44 Italy routes were left out of the content refresh. No URL or image asset was added or removed.

Each selected child has a named geographic walk line, a recommended base and stay length, a named rail/bus/ferry/lift or road threshold, an advance check where the destination controls entry, and a same-area seasonal/weather fallback. Hub copy covers transfer nights and the distinct regional transport systems. Advice does not promise current fares, exact departure times, ticket availability, lift operation, trail access, or ferry return; it directs readers to the controlling operator or site for their dates.

## Official checks represented in the page sources

The selected guides link to official sources for the access decisions they describe, including:

- **Veneto:** [Visit Verona](https://www.visitverona.it/en/), [Vicenzaè opening and ticket information](https://www.vicenzae.org/en/tourism/vicenza-palladio-and-the-villas/what-to-see-in-vicenza-opening-times-of-museums-and-monuments-in-vicenza-area), and the [Scrovegni Chapel](https://www.cappelladegliscrovegni.it/index.php/en/).
- **Dolomites / Trentino / South Tyrol:** [South Tyrol mobility](https://www.suedtirol.info/en/en/information/mobility), [Dolomiti Bus visitor services](https://tourism.dolomitibus.it/en/), and [Visit Trentino travel information](https://www.visittrentino.info/en/articles/practical-info/travelling).
- **Turin / Piedmont:** [GTT Torino](https://www.gtt.to.it/cms/en/), [Trenitalia](https://www.trenitalia.com/en.html), [Museo Egizio](https://www.museoegizio.it/en/), and [Visit Langhe Monferrato Roero](https://www.visitlmr.it/en).
- **Genoa / Liguria:** [AMT Genova](https://www.amt.genova.it/amt/), [Cinque Terre National Park](https://www.parconazionale5terre.it/), and [Servizio Marittimo del Tigullio](https://traghettiportofino.it/en/).
- **Marche / Abruzzo:** [Parco del Conero](https://www.parcodelconero.org/), [Gran Sasso and Monti della Laga National Park](https://www.gransassolagapark.it/), and [Adriabus](https://www.adriabus.eu/).
- **Basilicata / Calabria:** [Ferrovie Appulo Lucane](https://ferrovieappulolucane.it/), [Pollino National Park](https://parcopollino.gov.it/), and [Basilicata Turistica](https://www.basilicataturistica.it/).
- **Sicily:** [Regione Siciliana archaeological parks](https://parchiarcheologici.regione.sicilia.it/), [Liberty Lines](https://www.libertylines.it/), [Trenitalia](https://www.trenitalia.com/en.html), and [INGV Osservatorio Etneo](https://www.ct.ingv.it/).
- **Sardinia:** [ARST](https://www.arst.sardegna.it/), [Fondazione Barumini ticket and guided-entry rules](https://www.fondazionebarumini.it/en/tickets-and-opening-hours/), and [La Maddalena Archipelago National Park](https://www.lamaddalenapark.it/).

The ARST and Comune di Baunei official pages were linked as primary checkpoints but could not be read through the available text reader during this review. Readers should confirm current conditions directly with those operators and local authorities. All live transport, opening, booking, weather, permit and access details need date-specific confirmation.

## Translation, photos, and diagrams

GPT-6 Codex translated and self-reviewed 113 new/changed content keys in Traditional Chinese, Japanese, Korean, and Thai. This was a single-model pass, not an independent second-model or human native-speaker review. Approval and translation coverage pass with 55,909 active strings per locale and zero missing or stale entries. Obsolete reviewed source keys for superseded copy were pruned so the catalogs remain current.

All 27 selected child-route photos were visually checked against their named route subjects. The photo files and their source/creator/license declarations were retained. One inaccurate Verona alt description was corrected to describe the Piazza Bra arcades visible from the Arena; the source, creator and license fields were not changed. This records a local visual match, not independent proof of ownership, a rights-chain investigation, or legal clearance. Existing CC BY-SA declarations were not treated as an automatic conflict. No new diagram was required, and no SVG was changed; the separate IT09 SVG correction remains untouched.

## Dates and regression evidence

Publication dates remain 26 September 2026. The 37 selected English routes and their four localized editions have `dateModified` and sitemap `lastmod` set to 12 October 2026. The sitemap retains the exact 4,560-URL set; exactly 185 entries changed (37 routes × 5 languages). Italy search remains 81 records per edition.

Verification passed:

- `npm run build` — 5,466 distribution files, including 4,577 HTML files and 800 image files; all 4,560 sitemap routes verified.
- `npm run audit` — full repository chain passed, including i18n and search guards, photo-license/provenance checks, Italy/France/UK/Malaysia/China regression suites, Lake District and Somerset SVG checks, and site audit.
- `npm run test:italy-it12-date-sync` — 370 source/dist documents across the 37 routes and five languages; exact sitemap set, 185 date changes, publication dates, localized search summaries, and child plans checked.
- `npm run audit:italy` — 20 hubs, 60 focused guides, 81 English / 405 five-language routes, 60 credited images, 60 unique planning instruments/layouts, and 16 rendered structure families.
- `git diff --check` — clean.

No browser, local server, or interaction review was performed. No whole-site external-source crawl, deployment, production action, merge, force push, or integration/main update was performed.
