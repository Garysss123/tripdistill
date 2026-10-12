# French Alps four-route refresh — 12 October 2026

## Scope and editorial reference

This source-only refresh starts at `88844ac65e457923d22876232be8a4c4c49948b7`, the integration tip used to create `codex/sprint-fr-12-20261012`. It updates four existing routes only:

- `/france/french-alps/`
- `/france/french-alps/annecy-lake-old-town/`
- `/france/french-alps/chamonix-mountain-systems/`
- `/france/french-alps/grenoble-bastille-chartreuse/`

The selected hub and all three children were unchanged by this sprint's existing France batches; the Grenoble child also had no substantive body rewrite in the base history. Already-completed Provence Inland, Luberon, Marseille/Calanques and Côte d’Azur content was left outside scope. No route was added. The France country page and its existing overview card copy remain unchanged.

For same-level source context, I read the existing [`/japan/osaka/`](../japan/osaka/index.html) city hub and [`/japan/osaka/namba/`](../japan/osaka/namba/index.html) local guide. Osaka groups a day by geography, ties lodging and activity to named transport gateways, and explains what one day leaves out. The Alps routes apply those checks to separate lake, high-valley and basin systems. This was a source-content comparison, not a browser-rendered UI review.

## Body changes

Rendered English `<main>` text was compared against the exact integration parent using the checked-in generated pages:

| Route | Parent words | Updated words | Change |
|---|---:|---:|---:|
| French Alps hub | 1,049 | 2,090 | +1,041 |
| Annecy Old Town & Lake | 1,217 | 1,672 | +455 |
| Chamonix Mountain Systems | 1,220 | 1,655 | +435 |
| Grenoble, Bastille & Chartreuse | 1,213 | 1,699 | +486 |
| **Total** | **4,699** | **7,116** | **+2,417** |

The hub compares a three-night one-gateway stay, a five-night Annecy/Chamonix split and a seven-night option that adds Grenoble. Its six-card, five-night sequence covers arrival, the Annecy lake day, a named rail transfer, one mountain system, a Chamonix weather buffer and departure. It keeps Grenoble separate. TER Auvergne–Rhône–Alpes and the Mont-Blanc Express are described as separate legs via Saint-Gervais–Le Fayet; no through connection, fare or timetable is promised. SIBRA, M Réso, lake boats and mountain lifts each have their own operating check and return.

Annecy now compares a Gare/old-town base with a north-shore stay conditional on SIBRA return service. Its walk follows Rue de la Gare, the Thiou, Palais de l’Île, Jardin de l’Europe and Le Pâquier, then selects only one boat, bus-accessed shore or bounded bicycle segment. Chamonix names its central, Les Praz, Argentière and Vallorcine base trade-offs and separates the Aiguille du Midi terminal, Gare du Montenvers and Le Fayet tramway. Grenoble connects Gare/Europole and M Réso to the Musée de Grenoble, Place Saint-André, Jardin de Ville, Quai Stéphane Jay and the Bastille lower station; Le Sappey-en-Chartreuse is treated as a distinct regional trip. Each child has date-specific checks and a practical lower-risk alternative.

## Official operating checks

The route copy points travelers to the [TER Auvergne–Rhône–Alpes planner](https://www.ter.sncf.com/auvergne-rhone-alpes), [Mont-Blanc Express route, timetable and traffic page](https://www.mont-blanc-express.ch/en/experiences-lm), [SIBRA](https://www.sibra.fr/), [M Réso](https://www.reso-m.fr/), the [Annecy boat operator](https://www.bateaux-annecy.com/), [Météo-France mountain forecasts](https://meteofrance.com/meteo-montagne), and the [Grenoble–Bastille Cable Car](https://bastille-grenoble.fr/en/) and [Grenoble tourism office](https://www.grenoble-tourisme.com/en/).

On 12 October 2026, the [official Montenvers hours and prices page](https://www.montenverstrain.com/en/opening-hours-and-prices/) showed the 2026 summer train period through 1 November, a separate cable-car closure from 28 September to 16 October, and the ice cave closed through 1 November. These are dated 2026 notices, not a future-season forecast. The Grenoble operator publishes a day-specific operating calendar and says the last ascent is before closing; the copy therefore directs readers to the chosen date rather than inventing a fixed ascent time. Prices, departures, reservations and future opening dates remain with each operator.

## Images and provenance

I inspected the three existing 1,600 × 1,066 WebP frames at pixel level and checked their exact source pages:

- Annecy shows the old-town canal and waterfront. Its [Commons page](https://commons.wikimedia.org/wiki/File:Canal_@_Old_Town_@_Annecy_(35501456545).jpg) names Guilhem Vellut and declares CC BY 2.0; source SHA-1 `67906f432c94821646db902c7f98a1ce8b0294fe`; local derivative SHA-1 `8ae2d968add52ab39fb2a103705df718db0d22ec`.
- Chamonix shows the snow-covered valley and massif from Aiguille du Midi. Its [Commons page](https://commons.wikimedia.org/wiki/File:Valley_of_Chamonix_towards_the_north_from_Aiguille_du_Midi,_Chamonix-Mont-Blanc,_2007.jpg) names DimiTalen and declares CC0 1.0; source SHA-1 `c24f0e9cc3f6d43563b34e716073879879e145ae`; local derivative SHA-1 `77276703d2c5b2a8fc6d56c2059706592ab91786`.
- Grenoble's old image shows a close-up of the Bastille cable-car cabins and support, not the Alpine-basin panorama named by its former alt text. Its [Commons page](https://commons.wikimedia.org/wiki/File:T%C3%A9l%C3%A9ph%C3%A9rique_de_Grenoble_Bastille_-_Grenoble-Bastille_cable_car_-_%D9%86%D9%82%D9%84_%D8%A8%D8%A7%D9%84%D9%83%D8%A7%D8%A8%D9%84%D8%A7%D8%AA_%D8%BA%D8%B1%D9%88%D9%86%D9%88%D8%A8%D9%84-%D8%A7%D9%84%D8%A8%D8%A7%D8%B3%D8%AA%D9%8A%D9%84.jpg) names Sami Mlouhi and declares CC BY-SA 4.0. The WebP remains unchanged but is now unused; its local SHA-1 is `b648f0af01894517700af607d7b1a40b41b9ac6e`.

The Grenoble display now uses an original 1,600 × 1,066 TripDistill five-language route-sequence schematic with a visible legend. It is labeled not to scale, and has no separate reuse license declared; the Terms link and creator credit do not grant reuse permission. Its local SHA-1 is `748a1932d5aa7b3ee2291aa637790a3bfcbeff6f`. The exact source-page declarations and visual notes are recorded in `data/france-retired-image-records.mjs`, `data/france-image-manifest.mjs` and the [photo inventory](photo-license-inventory.md). These checks record what the source pages declare; they are not independent uploader-authority, rights-chain or legal clearance.

## Languages, search and dates

The four pages now have reviewed Traditional Chinese, Japanese, Korean and Thai copy. Page units are in `zzzzx-fr12-french-alps-pages-20261012.json`; the departure-stage and Annecy boat-credit additions are in `zzzzy-fr12-french-alps-itinerary-20261012.json`; the name-protected creator credit note is in `zzzzz-fr12-french-alps-credit-20261012.json` under each locale directory. Each new batch records GPT-6 Luna as writer and same-model self-review (`independentSecondModel: false`); no Luna Max, independent second model, human or external translation review is claimed. The updated hub search excerpt reuses the reviewed page-introduction source key; all six French Alps search strings were checked against the locale batches, so no empty or duplicate search delta was added. The four catalog audits report 55,540 active strings per locale with no missing or stale entries.

All four routes preserve their 19 September 2026 publication dates and use 12 October 2026 as the modification date across their five article editions and sitemap entries. Comparing the sitemap with the exact parent found 4,560 URLs retained, no additions or removals and exactly 20 `lastmod` changes (these four routes in five editions).

## Verification and limits

`npm run audit` passed after `npm run build` populated the `dist/` artifacts required by an existing UK regression. The final build contains 5,467 files (4,577 HTML and 801 images), verifies all 4,560 sitemap URLs and leaves 14,533 files below the Pages file boundary. The full audit includes the locale/script, translation, search, photo-license, image-provenance, France, France-date, UK, Malaysia, China/CN14B, Lake, Somerset, and site-wide regressions. `npm run test:france-date-sync` checks all 81 English routes and 405 sitemap URLs; the four selected routes pass in all five locales. `git diff --check` passed.

No whole-site restricted source crawler, browser, headless session, CDP, local server, smoke test or deployment was run. Therefore this record establishes source content, image-pixel and source-page checks, and static build/audit evidence; rendered desktop/mobile layout, keyboard behavior and visual acceptance remain with the parent cloud-browser review. No production or integration branch was changed.
