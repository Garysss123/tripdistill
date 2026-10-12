# France Lille, Arras & Opal Coast refresh — 12 October 2026

## Scope and provenance

This recovery branch starts from `5145002cdf33334197d111171302b07bb0a4b0eb` and rebuilds only five existing routes: `/france/`, `/france/lille-french-flanders/`, `/france/lille-french-flanders/old-lille-roubaix/`, `/france/lille-french-flanders/arras-vimy-remembrance/` and `/france/lille-french-flanders/opal-coast-headlands/`. The old FR15 ref was not available in the repository, so no missing WIP or old-task draft was treated as source. FR12 Alps content was not rebuilt.

The English `<main>` bodies grew by 380, 871, 638, 701 and 649 whitespace-separated text tokens respectively, measured against the parent HTML after stripping markup. This is a size comparison, not a quality score. The country, regional hub and focused guide were also compared at their respective content levels with `/japan/`, `/japan/osaka/` and `/japan/osaka/namba/`.

## Route changes

| Route | Added planning detail |
| --- | --- |
| `/france/` | A base-and-nights decision for 8–10 and 12–14 days; book arrival/departure stations, timed entries and limited-capacity activities first; select fewer bases for short stays; check luggage storage, station access and the final departure. Seasonal and closure fallbacks are stated. |
| `/france/lille-french-flanders/` | Treat Lille as a 2–3-night urban base and select one excursion for short stays. The hub separates the urban Lille/Roubaix system, an Arras–Vimy remembrance day with a rural last mile, and the exposed coast with its own base, wind check and return. |
| `/france/lille-french-flanders/old-lille-roubaix/` | Names Lille-Flandres and Lille-Europe as distinct terminals; directs visitors to check Ilévia Métro line 2 and Roubaix–Grand-Place, La Piscine's current approach and opening day, and the return to the correct Lille station. Two Lille nights support a city day plus Roubaix; three lower arrival and closure pressure. |
| `/france/lille-french-flanders/arras-vimy-remembrance/` | Uses Lille-Flandres–Arras TER as the rail trunk, then requires a separately confirmed guide, driver, taxi, bicycle or car plan with a written rural pickup and return. It gives Arras one night before an early visit or two for a buffer, recommends the Vimy visitor centre and signed paths, and keeps Arras/Wellington Quarry as a lower-exposure fallback. No public shuttle, fare or departure frequency is promised. |
| `/france/lille-french-flanders/opal-coast-headlands/` | Names Boulogne-Ville and Calais-Ville by destination, requires a dated local connection or other arranged last mile and a verified return before walking onto exposed ground, and favors two nights in Boulogne or Calais when the coast is central. Wind, tide, closures, seasonal service and sheltered museum/town alternatives shape the plan. |

Operating references were checked on 12 October 2026: [Veterans Affairs Canada's Vimy visitor information](https://www.veterans.gc.ca/en/remembrance/memorials/overseas/canadian-national-vimy-memorial), [TER Hauts-de-France](https://www.ter.sncf.com/hauts-de-france), [Ilévia's Lille–Roubaix route information](https://www.ilevia.fr/cms/institutionnel/itineraire-lille-roubaix), [Grand Site de France Les Deux-Caps](https://www.lesdeuxcaps.fr/), [Hauts-de-France Mobilités](https://www.hautsdefrance-mobilites.fr/), [La Piscine](https://www.roubaix-lapiscine.com/) and [Nausicaá](https://www.nausicaa.fr/en). Copy directs travelers to check the date-specific operator or visitor notice; unknown fares, departures, capacity and opening status remain unasserted.

## Images and rights status

The 1600 × 1066 Lille Grand Place WebP was inspected. Its foreground is a colorful parade, so its visible alt text now describes the parade beneath the historic façades. The source manifest records [the Commons file page](https://commons.wikimedia.org/wiki/File:Lille_grand_Place_2012.jpg), creator PIERRE ANDRE LECLERCQ and the page-declared CC BY-SA 4.0 license. The 1600 × 1066 Cap Blanc-Nez WebP was also inspected; the cliffs and shoreline match the description. Its manifest records [the Commons file page](https://commons.wikimedia.org/wiki/File:0_Escalles_-_Le_Cap_Blanc-Nez_(1).JPG), creator Jean-Pol GRANDMONT and the page-declared CC BY 3.0 license. These are source-page declarations, not independent rights clearance.

The former Vimy Commons photo remains on disk and in the retirement/provenance record, with its source URL, uploader, declared CC BY-SA 3.0 metadata, 1600 × 1066 dimensions, local SHA-1 `2012cdfb09da624b118ecd75a372cc6165497853` and SHA-256 `d0b42787ea2426ac6a5b7c390e832326d4abe9a03605a5e3eb38a112714af3a8`. Its [Commons file page](https://commons.wikimedia.org/wiki/File:2017-05_Canadian_National_Vimy_Memorial_01.jpg) carries a NoFoP-France warning; eligibility remains unresolved. The photo has zero live uses and is absent from localized pages, search and `dist`.

The replacement `/assets/images/france-lille-arras-vimy-sequence-legend.svg` is original project artwork (viewBox 1600 × 1066, SHA-1 `76516497410b7f12bb752f609bc831f57428d8aa`) with a five-language visible sequence legend. It is not a map, not to scale and not a live timetable. The source record declares TripDistill authorship and no separate reuse license; it claims no third-party image license.

## Localization, search and dates

Each of `zh-Hant`, `ja`, `ko` and `th` has an FR15 reviewed batch covering the same five routes, 87 newly owned source strings, 410 keys inherited from sibling batches and zero missing route keys. All four batches passed structural validation and sampling with no reused long translations. Translation was written and self-reviewed with GPT-6 Luna; it was not independently reviewed by a second model or a human. The changed Lille image alt is localized in all four editions.

Country and four Lille search records now describe the base/night, urban transit, Vimy last-mile and coast-return decisions. Sitemap comparison with the exact parent found 25 `lastmod` changes (five routes × five editions), all to `2026-10-12`, with no URL additions or removals. Date checks cover 81 France English routes and 4,560 sitemap URLs.

The old Lille batch's 31 source strings per locale were removed only after confirming they were absent from current routes, including the former Vimy photo labels and copy replaced by this refresh. Strict global i18n merging also exposed three obsolete France-shell strings, one obsolete France search summary, and one Corsica-only orphan string per locale; those stale translations were removed without changing Corsica page content. All four merged catalogs contain 55,840 current strings with zero missing or stale entries.

## Validation and limits

`npm run build` passed: 5,466 files (4,577 HTML, 800 images), all 4,560 sitemap URLs verified, 14,534 Pages files of headroom. The final full `npm run audit` passed: 4,560 localized routes, 955 search records per language, France and global i18n/search/photo/provenance checks, and the applicable Malaysia, China/CN14B, UK/Lake/Somerset, date and image regressions. `git diff --check` is also required clean before commit.

No browser, headless, CDP or server review was performed, so responsive rendering and interactive behavior remain unverified. No deployment or production action was taken. Build and static audits establish source consistency, not visual acceptance or independent image-rights clearance.
