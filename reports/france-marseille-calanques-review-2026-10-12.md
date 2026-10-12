# Marseille & Calanques editorial review — 12 October 2026

## Scope

This pass updates the four existing pages in the Marseille–Calanques cluster:

- `/france/marseille-calanques/`
- `/france/marseille-calanques/old-port-panier-mucem/`
- `/france/marseille-calanques/calanques-access-choice/`
- `/france/marseille-calanques/cassis-la-ciotat/`

No URL was added. Luberon had already received this cycle's refresh on 11 October. Toulouse, Albi and Carcassonne remain outside this change because FR08 `c3e74a51` is being integrated serially.

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
- `npm run audit:france -- --english-only` and `node scripts/test-france-date-sync.mjs --english-only` — passed. The earlier 2026-09-19 publication date is preserved.
- `npm run test:i18n-search-guards`, `npm run test:photo-license-guard`, `npm run test:site-image-provenance`, `node --check` for the changed scripts, and `git diff --check` — passed.
- `node scripts/audit-photo-license-inventory.mjs` — passed. Across the full site, 242 assets have a source-page check recorded; 525 used assets remain without an independent page check and 523 license claims remain independently unverified. These aggregate counts do not assert global rights clearance.
- `npm run audit:photo-license-inventory` reached and passed its new Marseille per-image assertions, then stopped on the absent prebuilt `/zh/france/bordeaux-gironde/` page.
- `npm run audit` and `npm run build` stop at the approval step for the new draft batches. China CN14B/date, UK Lake/Somerset/Cornwall/Oxford/Bath and Malaysia Cameron/Langkawi regressions likewise cannot read prebuilt localized pages in this checkout. The English France checks pass; the five-language checks remain pending translation and localization.

## Translation and UI review status

The exporter created one ordered, four-route **draft page batch** per locale for `zh-Hant`, `ja`, `ko` and `th`. Each covers 450 raw text units / 271 unique page strings, with 141 new strings left blank and 130 already covered by earlier batches. They remain `qualityStatus: "draft"`. There is no callable Luna Max translation/review capability in this execution environment, so this work is not represented as Luna-reviewed. The workflow gates approval, localized page generation and the later search-index batch on actual locale review; no batch was promoted and no localized search records were claimed as complete.

The English France audit and English date check passed. Full `npm run audit` and `npm run build` stop at `npm run i18n:approve`, which reports the four draft batches and their blank translations. Translation-dependent China, UK, Malaysia and full France regressions therefore cannot find the previously built localized pages in this fresh workspace. UI acceptance also remains open: no browser, local server or headless review was used.

This is an English/source update with localization drafts and review evidence, not a completed five-language delivery.

The three image findings, source declarations and checked hashes are recorded in [the accompanying photo review](france-marseille-calanques-photo-review-2026-10-12.md).
