# Switzerland CH08: Montreux–Vevey / Riviera refresh

**Date:** 2026-10-12

**Branch:** `codex/sprint-ch-08-content-20261012`

**Base:** `063b1d71d0ead0908cc96b8fdc9e32242d07f01b` (CH07 Lausanne)

**Parent of base:** `d91e6e3cad2ba73a3b211d8c8fd0ba1e43dafe4e`

## Scope and route stability

Deep-edited the existing Montreux–Vevey cluster only. No URL was added or removed; the sitemap URL set remains unchanged. The four existing routes are:

- `/switzerland/montreux-riviera/`
- `/switzerland/montreux-riviera/montreux-chillon/`
- `/switzerland/montreux-riviera/rochers-de-naye/`
- `/switzerland/montreux-riviera/vevey-lakeside/`

The Switzerland landing card and the four routes now use the refreshed English summaries. The existing Lausanne landing excerpt and Lausanne search terms were restored to their base values. The Lausanne, Geneva, Interlaken, Zermatt, Lucerne, Jungfrau and earlier clusters were not deep-edited in this sprint; their regression checks remain in the full audit.

## Content added

The hub distinguishes a two-night Montreux base from a three-night slower Riviera stay, with Vevey as an alternative base for the west/east day split. It explains the trade between station access, lakefront location, evening rail connections and accommodation location.

The three focused guides add named, sequenced walks and transfers, including Lausanne–Vevey–Montreux on SBB; VMCV 201; S5 to Veytaux-Chillon followed by the signed six-minute walk; the optional 4 km / roughly 45-minute Montreux–Chillon shore walk; Vevey station, Grande Place, old town and Jardin Roussy; Chaplin’s World in Corsier-sur-Vevey; and the MOB/MVR rack railway toward Rochers-de-Naye. Rochers-de-Naye is identified at 2,042 m with the published 55-minute rail journey. Les Pléiades is described as a separate alternative, not a continuation of the same route.

Seasonal guidance preserves specific interruption and booking caveats. For the 2026 dated notice, Montreux–Rochers-de-Naye rail service is interrupted from 14 September through 17 October; the replacement bus serves Haut-de-Caux only, and onward connections are not guaranteed. The published 2027 interruption is 1 April through 21 May, also with the Haut-de-Caux limitation. Chillon’s published adult admission was CHF 15 for 2026 and CHF 18 for 2027, with CHF 7 for ages 6–15; this is a dated source snapshot, not a future-price guarantee. The guides direct readers to recheck dated train, bus, boat, museum, castle and weather information and do not promise fares or headways. Event dates are given with the same current-source caveat: Montreux Riviera Noël, 20 November–24 December 2026; Montreux Jazz Festival, 2–17 July 2027.

## Five-language work

Added reviewed Japanese, Korean, Thai and Traditional Chinese batches for the four existing pages and their updated shared card/search strings. One model prepared and self-reviewed these translations. Script checks found no missing or stale active keys; the translation merge reports 55,955 of 55,955 strings for each locale. That coverage check does not establish independent human linguistic review.

The new original profile diagram has localized legends and alt/caption metadata in all five editions. Existing route names such as Grande Place and Jardin Roussy remain proper names in the localized itineraries.

## Image and SVG review

Local pixel inspection found that the prior Rochers-de-Naye train image showed a branded train at Montreux station rather than the destination. That image record is retained as unused, its local bytes are preserved, its active license field is unset, and the source-declared license remains separate from any permission claim. The Chillon and Vevey photographs match their named subjects at pixel level; this inspection does not validate uploader identity or chain of title.

Added `assets/images/switzerland-montreux-riviera-rochers-de-naye-profile.svg` as an original, symbolic route-order/profile illustration, explicitly not to scale. SHA-1: `fe4cdecbaa79a7c4f5e38e70383ada305f7efa5b`. It declares TripDistill as creator, links to the project Terms page, and declares no separate reuse license. The regression parses it as XML, checks the primitive geometry/bounds and five-language label/legend data. No map-position or elevation-profile accuracy is implied.

The Rigi 20c and Zermatt 2566 graphics are protected by hash assertions and remain byte-identical to the base. The broader inventory regression now expects 12 project-original artwork records and 804 build images, with the documented rights-review photo excluded from the build.

## Official source checks

Narrow, official source checks were used for the dated operational and visitor details above:

- [MOB: Glion–Rochers-de-Naye interruption, September–October 2026](https://support.mob.ch/hc/en-ch/articles/30553443099805-Traffic-interruption-between-Glion-and-Rochers-de-Naye-September-October-2026?lang=en)
- [Montreux Riviera: Rochers-de-Naye](https://www.montreuxriviera.com/en/PA458/rochers-de-naye-in-summer)
- [Chillon Castle: visit information](https://www.chillon.ch/en/visit/)
- [Montreux Riviera: lakeside](https://www.montreuxriviera.com/en/P4876/montreux-lakeside)
- [Montreux Riviera: Vevey old town](https://www.montreuxriviera.com/en/P4874/old-city-of-vevey)
- [Montreux Riviera: Chaplin’s World](https://www.montreuxriviera.com/en/P7832/chaplins-world-by-grevin)
- [Montreux Riviera: Les Pléiades](https://www.montreuxriviera.com/en/PA430/les-pleiades-in-summer)
- [Montreux Riviera official calendar](https://www.montreuxriviera.com/en/)

These checks are narrow snapshots. Readers should check the operator or venue for their actual date; a named fare, journey time or event listing is not a guarantee of future service.

## Verification

- `npm run audit` — passed; includes i18n, image provenance, Swiss route refreshes, France/UK/Malaysia/China regressions, CN14B, UK Lake/Somerset diagrams, photo inventory, and site audit.
- `npm run build` — passed: 5,470 files (4,577 HTML, 804 images); 4,560 sitemap routes verified in `dist`.
- `npm run test:switzerland-montreux-refresh` — passed for four routes × five editions, canonical/hreflang/search/schema/date checks, unchanged sitemap URL set, preserved retired-photo bytes, parsed SVG/XML geometry, localized legend, and protected Rigi/Zermatt assets.
- `git diff --check` — passed on the final worktree before commit.

English article-body word-count deltas against the exact base commit:

| Existing route | Base words | Current words | Delta |
| --- | ---: | ---: | ---: |
| Montreux–Riviera hub | 960 | 2,022 | +1,062 |
| Montreux–Chillon | 1,018 | 1,438 | +420 |
| Rochers-de-Naye | 983 | 1,550 | +567 |
| Vevey lakeside | 958 | 1,461 | +503 |

All checks were source/build checks. No browser, headless UI, CDP or server review was performed. No independent image-rights-chain or uploader-authority clearance was performed. This report is not a deployment or integration approval.
