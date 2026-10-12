# Marseille & Calanques editorial review — 12 October 2026

## Scope

This pass updates the four existing pages in the Marseille–Calanques cluster:

- `/france/marseille-calanques/`
- `/france/marseille-calanques/old-port-panier-mucem/`
- `/france/marseille-calanques/calanques-access-choice/`
- `/france/marseille-calanques/cassis-la-ciotat/`

No URL was added. Luberon had already received this cycle's refresh on 11 October. Toulouse, Albi and Carcassonne remain outside this change because FR08 `c3e74a51` is being integrated serially.

## Content-depth reference and body delta

For the regional hub, I compared the source content with [`/japan/hokkaido/`](/japan/hokkaido/), which distinguishes trip length, airport gateway, corridor-based transport and seasonal choices. For the child-guide level, I used [`/japan/tokyo/asakusa-ueno/`](/japan/tokyo/asakusa-ueno/) for grouped walking zones, named transit, realistic route duration and alternatives. The Marseille pages now express those same planning decisions through their own port, station, trail and marine access systems. This is a source-content comparison; no browser or rendered UI inspection was used.

Against base `280625de7213be213a57a546d08dae6c691d2a67`, visible English `<main>` text increases by 606 words on the hub and 309, 387 and 314 words on its three children, a net **1,616 words** across the four routes. The follow-up locale completion adds no further English body changes.

## Editorial changes

The hub now recommends three nights for a city day, one park-or-boat day and a flexible coast day; a fourth night separates a demanding trail from a sea excursion. It compares Vieux-Port/Canebière, Castellane/Prado and Saint-Charles by the actual departures they serve, and recommends an extra Cassis night only when the port and return transfer justify it.

The four pages identify RTM M1, buses 49/55/60, B1 toward Luminy, and bus 78 to Cassis. They distinguish the Marseille, Cassis and La Ciotat rail stations from their ports, link date-specific SNCF TER planners, and avoid quoting mutable fares or departure times. Walk guidance divides the Old Port–Panier–La Major–Fort Saint-Jean–Mucem sequence into north-bank and south-bank choices, and explains the Sugiton lookout versus the steeper cove descent and return.

Season planning states the dated 2026 Sugiton reservation windows as past on this review date and does not infer 2027 rules. It keeps same-day fire closures, route conditions and sea cancellations as live checks, explains that regular boat excursions do not land in the coves, and supplies city-walk or town-side alternatives. The existing 2026-09-19 publication date is preserved; the four English articles and sitemap entries use the 2026-10-12 review date.

## Sources checked

- [Marseille Tourism: bus lines 49, 55, 60 and 78](https://www.marseille-tourisme.com/en/organize-your-stay/practical-information/bus-marseille/)
- [RTM: current Marseille transit maps and service](https://www.rtm.fr/en)
- [Calanques National Park: Sugiton walk and Luminy access](https://www.calanques-parcnational.fr/en/belvedere-et-calanque-de-sugiton)
- [Calanques National Park: Sugiton reservation notice](https://www.calanques-parcnational.fr/en/news/sugiton-reservations)
- [Calanques National Park: daily access notices](https://www.calanques-parcnational.fr/en)
- [Marseille Tourism: boat access and landing limits](https://www.marseille-tourisme.com/en/discover-marseille/nature/the-calanques-of-marseille/how-to-access-the-calanques/the-calanques-of-marseille-by-boat/)
- [SNCF TER: Marseille–Cassis date planner](https://www.ter.sncf.com/sud-provence-alpes-cote-d-azur/trajet-marseille-cassis)
- [SNCF TER: Marseille–La Ciotat date planner](https://www.ter.sncf.com/sud-provence-alpes-cote-d-azur/trajet-marseille-la-ciotat)
- [Cassis Tourist Office: local boat access](https://www.ot-cassis.com/en/explore/the-calanques/the-calanques-by-boat/)

## Verification

- `npm run generate:france` — passed; 81 English France routes generated.
- `npm run sync:sitemap` — passed; 912 routes across five sitemap editions. Diff inspection found exactly 20 modified sitemap entries: these four paths in five language prefixes, dated 2026-10-12. The English search index changed exactly these four records.
- The four page batches each contain 141 new translated keys; each validator reports 0 missing keys for its four declared routes. The older Marseille batch had 88 obsolete source keys per locale; after verifying they no longer occur in current source or search units, the stale-key tool removed all 352. `npm run audit:i18n` passed with 55,151 current strings per locale and zero missing or stale entries.
- The four changed search rows add no distinct locale strings beyond the page batches. The `/data/search-index.json` exporter found all 4,776 search units already covered; its required non-empty delta guard correctly rejects an empty batch. The updated localized records use the matching translations from the page batches. The global audit generated and checked 955 search records in each locale.
- `npm run audit:france` and `npm run test:france-date-sync` — passed across 81 France routes and all 405 sitemap editions. The original 2026-09-19 publication date is preserved; the four target Articles and all 20 target sitemap entries are dated 2026-10-12.
- `npm run test:i18n-search-guards`, `npm run test:photo-license-guard`, `npm run test:site-image-provenance`, `node --check` for the changed scripts, and `git diff --check` — passed.
- `npm run audit` — passed the complete site audit: 4,560 localized pages (912 per language), 955 search records per language, all regional audits, the photo inventory, China CN14B, and Lake District diagram regressions.
- `npm run build` — passed with 5,464 files (4,577 HTML and 798 images), verified all 4,560 sitemap URLs, and left 14,536 Pages files before the safety boundary.
- Additional regressions passed: China CN14B and China route dates; UK Lake diagrams, Somerset original SVG, Cornwall, Oxford/Cotswolds and Bath dates; Malaysia Cameron Highlands and Langkawi dates.
- The photo inventory regression passed. Across the full site, 242 assets have a source-page check recorded; 525 used assets remain without an independent page check and 523 license claims remain independently unverified. These aggregate counts do not assert global rights clearance.

## Translation and UI review status

The `zh-Hant`, `ja`, `ko` and `th` batches now each contain 141 non-empty new page translations, preserve all exact source keys, and have passed route-coverage validation and long-form samples for the hub and all three guides. They record `GPT-6 Luna` as both writer and same-model self-reviewer, with `independentSecondModel: false`. This is not Luna Max, independent second-model review or human review. The four locale catalogs and generated route/search editions pass the project guards and full audit.

The localized search records reuse the exact source strings translated by the page batches; the exporter found zero fresh search keys and its validator disallows a no-op search delta. The catalogs therefore supply those same translations to the generated indexes without a duplicate-owner batch. The README workflow now documents this exact-key reuse case and the explicitly authorized, provenance-recorded current-Luna self-review fallback while preserving all validators.

No browser, local server or headless review was used. Pixel-level image subjects and hashes were checked separately, but rendered desktop/mobile appearance and interaction still need the parent workspace's UI review. Commons licensing here records source-page declarations; it does not establish independent rights or chain-of-title clearance.

The three image findings, source declarations and checked hashes are recorded in [the accompanying photo review](france-marseille-calanques-photo-review-2026-10-12.md).
