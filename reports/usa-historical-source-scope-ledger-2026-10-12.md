# U.S. historical source-scope ledger — 12 October 2026

This records the 25 existing U.S. route paths disclosed for the preceding source-work ledger, with the repository commits whose changed-path lists cover each group. It is a path-level history record, not an exhaustive reconstruction of every historical U.S. edit, and not editorial acceptance. The old U.S. batch remains subject to the repository’s editorial release gate; New York was an acceptance sample, not approval of the U.S. collection.

The current Hawaii refresh adds four existing routes. The documented ledger plus this refresh therefore accounts for 29 of the 97 existing English U.S. routes in this particular source-work ledger. That arithmetic does not claim that these are the only U.S. routes ever touched, or that all 29 have passed editorial review.

## Disclosed 25-route set

| Cluster | Existing route paths | Source history evidence |
| --- | --- | --- |
| Alaska (3) | `/usa/alaska/`; `/usa/alaska/anchorage-kenai/`; `/usa/alaska/denali/` | `ad1a0bd9d2ad85ea7953223e5c5d7f47965dec29` touches all three paths. |
| Sierra parks (3) | `/usa/sierra-parks/`; `/usa/sierra-parks/sequoia-giant-forest/`; `/usa/sierra-parks/kings-canyon/` | `497fccb33ce340711c590108eb16bfef68c71fe7` touches all three paths; `077d68be6ab94de70d6335c1950b2b609b63afce` subsequently aligns reviewed-route sitemap dates. |
| Yellowstone–Tetons (4) | `/usa/yellowstone-tetons/`; `/usa/yellowstone-tetons/geyser-basins/`; `/usa/yellowstone-tetons/canyon-lamar/`; `/usa/yellowstone-tetons/grand-teton/` | `c09c7633e4471b1bf0135bf6743b985661f66ef6` touches all four paths. |
| Utah parks (3) | `/usa/utah-parks/`; `/usa/utah-parks/bryce/`; `/usa/utah-parks/moab-arches-canyonlands/` | `310ff30298f8380f346583b09acb87b0c022feec` touches all three paths. |
| Miami & Orlando (4) | `/usa/miami/`; `/usa/miami/everglades/`; `/usa/orlando/`; `/usa/orlando/kennedy-space-center/` | `b12c7f001e4d1aed4b25860bd581baf057119e49` touches all four paths. |
| Texas (4) | `/usa/texas/`; `/usa/texas/austin/`; `/usa/texas/san-antonio/`; `/usa/texas/houston/` | `3be5093dce06d32cb268452692286f7215004cd0` touches all four paths. |
| Colorado (4) | `/usa/colorado/`; `/usa/colorado/denver/`; `/usa/colorado/rocky-mountain/`; `/usa/colorado/mountain-towns/` | `fbeee5005b9afac2617d8ce4d9c7ea55be5ebe66` touches all four paths. |

The seven groups contain 25 distinct route paths. Commit path overlap, a date correction, successful automated checks, localized-page counts, or the presence of a refreshed source file do not establish useful editorial substance or collection-wide approval.

## Four Hawaii routes selected after deduplication

The refresh is disjoint from the 25 paths above and does not change the New York sample or `/usa/` country overview:

- `/usa/hawaii/`
- `/usa/hawaii/oahu/`
- `/usa/hawaii/maui/`
- `/usa/hawaii/hawaii-island/`

At exact base `5a3f8c2cb6b9de348471a1b56605f9334ef8f2b7`, the rendered `<main>` text for each route is byte-for-byte identical after HTML parsing and whitespace normalization to its 11 September source revision from `71def01cd4d489552b9f5d67ca1a202becaa0435e` (7,607; 9,088; 8,452; and 8,570 normalized characters, respectively). The intervening base history changes each page’s review date, but not its `<main>` body. This establishes that these four routes had not received a later body rewrite by this base; it is not a score of the old content.

## Verification method

The commit IDs above were checked with `git show --format='%H %P %s' --name-only`; the listed paths were confirmed in their changed-path output. Route selection was checked against the provided 25-path list, then independently compared against Hawaii’s exact-base source bodies. Do not infer a total historical U.S. rewrite count from this ledger.
