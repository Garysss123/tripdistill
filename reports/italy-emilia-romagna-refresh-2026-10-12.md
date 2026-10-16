# Emilia-Romagna hub and field-guide refresh — 12 October 2026

This source-only refresh starts from `16d6703ed9b40f6319c0f96ac484bf6f9012908a` on `codex/sprint-it-09-content-20261012`. It updates the existing [Emilia-Romagna hub](/italy/emilia-romagna/) and its [Bologna Porticoes & Markets](/italy/emilia-romagna/bologna-porticoes-markets/), [Modena & Parma Along Via Emilia](/italy/emilia-romagna/modena-parma-via-emilia/) and [Ravenna, Ferrara & Po Delta](/italy/emilia-romagna/ravenna-ferrara-po-delta/) guides. No URL was added or removed. This was the remaining untouched Italy cluster selected after excluding the 32 routes with prior source-level deep rewrites; ordinary historical edits did not count as a deep rewrite for this selection.

## Content changes

The four English `<main>` sections gained 769 whitespace-delimited word tokens over the exact base: hub +356, Bologna +150, Modena/Parma +143 and Ravenna/Ferrara/Delta +120. The hub makes a four-to-six-night region plan and distinguishes Bologna's rail spine, the Via Emilia pair and the separate eastern gateways. Its children now specify a workable bed location, named station-to-street sequence, walking plan, reservation or operator check, seasonal adjustment and same-base fallback. The guidance does not promise a fare, departure time, live connection or future ticket availability.

The official source set includes [Emilia-Romagna Turismo](https://emiliaromagnaturismo.it/en), [Trenitalia](https://www.trenitalia.com/en.html), [Trenitalia TPER](https://www.trenitaliatper.it/), [Bologna Welcome](https://www.bolognawelcome.com/en), [Musei Civici Bologna](https://www.museibologna.it/), [UNESCO's Porticoes of Bologna entry](https://whc.unesco.org/en/list/1650/), [Visit Modena](https://www.visitmodena.it/en/), [Parma Welcome](https://www.parmawelcome.it/en/), [Ravenna Turismo](https://www.turismo.ra.it/en/), [Ferrara Info](https://www.ferrarainfo.com/en/) and [Po Delta Park](https://www.parcodeltapo.it/). Bologna Welcome's official page displayed the Asinelli Tower closed for maintenance during the 12 October check; the guide therefore says to recheck the current notice before planning a climb. This is a dated observation, not a claim about future opening.

The hub and three guides were compared against their exact English source HTML using visible `<main>` text. This verifies source changes only; it is not browser/UI acceptance.

## Five-language content, search and dates

The Traditional Chinese, Japanese, Korean and Thai reviewed page batches each add 69 new translated strings; 194 existing page keys per locale are reused. Each batch records a single-model translation and same-model self-review (`independentSecondModel: false`); no model identity or independent reviewer is asserted. A separate one-string batch per locale updates the Emilia-Romagna country-card/search summary without taking ownership of other clusters' existing search strings. All 55,815 merged translations per locale pass with no missing keys.

All 20 route-language pages retain publication date `2026-09-26` and carry review date `2026-10-12`. The 4,560-URL sitemap set is unchanged; exactly 20 Emilia-Romagna `<lastmod>` values were refreshed (four routes × five languages). The search index retains 955 records per locale, with four summaries updated. The Italy source set remains 81 English routes and 405 pages across five languages.

## Photos and original diagrams

Both existing Bologna and Modena WebPs were inspected at pixel level and removed from the active public image manifest. Bologna's pixels show Piazza Maggiore rather than a clear portico route. The Modena image matches its cathedral subject. Their Commons pages display CC BY-SA 4.0 but also link separate authorisation information that was not checked. This is recorded as an unresolved source condition, not a license conflict or an independent rights-chain finding. The original files remain in the repository for internal review and are excluded from `dist`.

The Bologna and Modena/Parma pages now use two original, project-authored schematic SVGs with visible localized legends. XML parsing and geometry checks confirmed valid XML, expected viewBoxes, marker/path counts and all parsed path geometry within the viewBox. The original diagrams declare no separate public reuse license. The Ravenna San Vitale photo remains in use: its pixels match the subject and its manifest cites the Commons source page's CC BY 2.0 declaration and creator. These checks do not establish legal clearance or a complete chain of title.

## Verification record

`npm run build` passed: 5,466 files, 4,577 HTML files and 800 image assets; all 4,560 sitemap routes verified in `dist`. `npm run audit` passed, including i18n and search guards, the 81-route/405-page Italy audit, Italy route dates, China CN14B, Lake District and Somerset diagrams, UK, France, Malaysia, the photo-license inventory and the site audit. The separate France Provence inland search regression passed for 30 records across source, `dist` and five language editions.

The Emilia date regression passed for 40 source/dist documents across four routes and five languages, preserving publication date and route/search/sitemap counts. The diagram regression parsed both source SVGs and checked their geometry against the 960×640 viewBox; it also confirmed five-language visible legends/provenance and that the retired photos remain local-only. The photo inventory passed with three retained local-only photos, ten original-art records, 520 assets still recorded without an independent source-page check, zero active attribution gaps and zero source metadata conflicts. `git diff --check` passed.

### Parent visual-review correction

The parent review found that Bologna marker 3 was drawn at the end of the solid city route even though its legend identified San Luca as a separate branch; the rust branch ended without a marker, and the third portico bar touched the old marker-3 circle. The SVG now ends the solid route at marker 2, draws the dashed branch from marker 2 to marker 3, and places marker 3 clear of the portico bars. The Modena/Parma SVG now labels its two optional branch endpoints 4 and 5; the five-language visible key has distinct entries for the Maranello last mile and booked producer visit. The XML regression asserts these route-to-marker endpoint relationships, not only valid XML and in-canvas geometry.

No browser, headless browser, CDP, local server, whole-site image crawler or production interface was used. No integration/main/prod update, deployment, or force push was performed.
