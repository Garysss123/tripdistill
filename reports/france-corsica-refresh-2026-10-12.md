# Corsica route-cluster refresh — 12 October 2026

## Scope

FR14 starts from `2506e2014d751e0a2bd5f1e32f9a43432c6dc64f` (`codex/sprint-fr-13-20261012`). It preserves the FR13 Languedoc–Camargue pages and keeps the four existing Corsica URLs; no URL was added, removed or renamed. FR12 French Alps (`1ced78b7416fac02c04ea851a1930ba65212b94f`) remains a separate queued source. Integration (`a014412eceb30efae51894be3b6167debaa96ca3`) was not written.

The refreshed group is the Corsica hub and its three existing children:

- `/france/corsica/`
- `/france/corsica/ajaccio-west-coast/`
- `/france/corsica/bastia-cap-corse/`
- `/france/corsica/bonifacio-porto-vecchio/`

Measured visible `<main>` text as whitespace-delimited words, compared with the FR13 base:

| Route | Before | After | Net body increase |
| --- | ---: | ---: | ---: |
| Corsica hub | 1,036 | 1,365 | +329 |
| Ajaccio & the West Coast | 1,178 | 1,550 | +372 |
| Bastia & Cap Corse | 1,576 | 1,905 | +329 |
| Bonifacio & Porto-Vecchio South | 1,633 | 1,966 | +333 |

## Reader changes

- The hub turns the island-wide warning into five-, seven-, and eight-plus-night base choices. It separates arrival/departure nights, transfer days and weather margin, and explains when a third base prevents a long return.
- Ajaccio now has a named airport/port/rail transfer decision, a bounded Place Foch–old-town–Place du Diamant walk, and a distinct full-day or overnight decision for Piana–Porto. Its page links to official city transport and airport shuttle information.
- Bastia connects the airport shuttle, rail station, ferry terminal and old port as different nodes; its walk runs from Place Saint-Nicolas/Terra Vecchia to the old port and Terra Nova/citadel. It treats the D80 east coast and full peninsula loop as separate days and the Macinaggio bus as a date-checked school-term service.
- The southern page distinguishes Figari–Porto-Vecchio from the separately verified Porto-Vecchio–Bonifacio leg, gives each town a bounded walk, and keeps beach transfers separate. Its Bastia coach reference is explicitly limited to the airport page’s 2026 seasonal listing and tells future travelers to recheck it.
- All four pages now have date-specific seasonal, fire, wind/sea and return-plan fallbacks. Copy directs readers to current operator dates and access notices; it makes no promise about a future fare, departure, seat, opening or shuttle.

## Current-source checks

Official source pages were checked on 12 October 2026. These links are the operators and destination authorities to reopen for a travel date:

- [Ajaccio city and peri-urban transport](https://www.ajaccio-tourisme.com/en/organize/getting-around/urban-and-periurban-transport/) lists city transport, the Port Tino Rossi–Porticcio ferry and the Ajaccio–Mezzana rail corridor. The [Ajaccio Airport shuttle page](https://ajaccio-aeroport.cci.corsica/en/shuttles/) did not establish a dependable public timetable in the checked snapshot, so the guide sends readers to the current Muvistrada map or a booked transfer instead of naming an airport bus.
- [Bastia Airport shuttle information](https://bastia-aeroport.cci.corsica/en/shuttles/) distinguishes the town/station shuttle (listed at about 25 minutes) and lists a Bastia–Porto-Vecchio coach for 1 June–31 October 2026. Neither is presented as a guaranteed future departure or direct Bonifacio service.
- The [Visit Corsica Macinaggio–Bastia listing](https://www.visit-corsica.com/en/Mon-sejour/Transporteurs/Tous-les-transporteurs/LIGNE-DE-BUS-MACINAGGIO-BASTIA-LIGNE-DE-TRANSPORT-SCOLAIRE) describes weekday service during school term. The page tells readers to check both dated legs.
- [Figari Airport shuttle information](https://figari-aeroport.cci.corsica/en/shuttles/) lists a year-round daily Figari–Porto-Vecchio connection (about 30 minutes) and a current timetable link; it does not list a direct Bonifacio shuttle. The guide requires a separate onward plan.
- [Chemins de fer de la Corse](https://cf-corse.corsica/) is the official rail planning link used in place of the old non-official `train-corse.com` reference.
- [Météo-France’s forest-fire forecast](https://meteofrance.com/meteo-des-forets) is linked as a forecast to check alongside local prefecture restrictions; it is not described as clearance to enter a closed area.

No fare, precise departure time, future operating day or site opening is asserted as a guarantee.

## Images

The three existing files were visually inspected at full image resolution and compared with their linked Commons source pages. Subjects match the route and visible source declarations; no subject mismatch or rights-record conflict was found. The files, visible credits and existing edit notes were retained, so an SVG replacement was not needed.

| Page image | Pixel check | Existing source declaration | Local SHA-256 |
| --- | --- | --- | --- |
| Ajaccio gulf / citadel view | Beach cove, water and fortress edge on the gulf; supports the west-coast setting | [Commons file](https://commons.wikimedia.org/wiki/File:Corsica_-_Ajaccio_-_Golfe_from_the_Citadelle_-_panoramio.jpg) · jeffwarder · CC BY-SA 3.0 | `a8cc331e938ebae1fc06de6a01f2196e63af7f1ad84568905de1fa7bbce9cee5` |
| Bastia harbor | Boats, waterfront and hillside city are visible | [Commons file](https://commons.wikimedia.org/wiki/File:Corse-bastia-port2.jpg) · Greudin · public domain | `9649269dc76a574e48a590f9de80ca5516a9505b386dd08a93b71ea0a75fc81c` |
| Bonifacio cliffs | Limestone cliff face and settlement edge are visible | [Commons file](https://commons.wikimedia.org/wiki/File:Bonifacio_cliffs_-Le_Grain_de_Sable.JPG) · JAn Dudík · CC BY-SA 3.0 | `b7dd7ea7954bdf114a622cde6571b7afbe903c6d0c601154f02a639473f2c727` |

The Commons pages and their license statements are source-page declarations, not independent chain-of-title verification.

## Localization, dates and search

- English plus zh-Hant, ja, ko and th share the four updated pages. Each reviewed locale batch contains 51 new source keys; other repeated route text is reused from reviewed batches. Translation metadata records GPT-6 Luna same-model self-review and no independent second reviewer.
- `dateModified` and all 20 English/localized Corsica sitemap entries are `2026-10-12`; original publication dates are preserved. No route identity changed.
- The four English search summaries now describe the actual base/transport decision. The added Corsica search regression checks the four route records in source and `dist` for all five languages.
- Retired Corsica headline/search keys were removed from three older reviewed batches in each locale; no unrelated batch keys were pruned.

## Checks and limitations

- `npm run audit` passed, including France structure/date/search, i18n coverage and stale-key checks, image-license/provenance guards, UK date/search checks, Malaysia date and Melaka-photo checks, China route dates and CN14B, Lake District/Somerset original-SVG regressions, and the site-wide static audit.
- `npm run build` passed: 5,466 files in `dist`, with 4,560 sitemap URLs verified.
- `git diff --check` passed.
- Browser rendering, viewport/layout and interaction checks were not run. The task forbids browser, headless, server and CDP checks; consequently this is a source/build review, not a browser UI sign-off. Dynamic services remain subject to the linked operator and local authority on the travel date.
