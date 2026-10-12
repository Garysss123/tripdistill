# Banff & Lake Louise hub and field-guide refresh

Reviewed 12 October 2026 on branch `codex/sprint-ca-07-content-20261012`, based directly on source commit `068ed3eef9e2c7c41158a258de0b7db5f4c1ca23` (`CA06PacificRim`). This updates one untouched existing Canada hub and its three existing children. It adds no route and does not redo the first five clusters or Pacific Rim.

## Routes and English content delta

Rendered `<main>` text counts use `parse5`, compare each exact base-commit HTML file with the refreshed source, and count whitespace-delimited words. They show the size of the new copy, not an editorial quality score.

| Existing route | Added rendered words |
|---|---:|
| [Banff & Lake Louise hub](/canada/banff-lake-louise/) | 828 |
| [Banff Town & Bow Valley](/canada/banff-lake-louise/banff-town-bow-valley/) | 314 |
| [Lake Louise & Moraine Lake](/canada/banff-lake-louise/lake-louise-moraine/) | 385 |
| [Johnston Canyon & Lake Minnewanka](/canada/banff-lake-louise/johnston-minnewanka/) | 716 |
| **Total** | **2,243** |

The hub compares three, four and five nights, then weighs Banff town, Canmore and Lake Louise Village as different bases. A three-day plan starts with Banff Avenue, the Bow River pedestrian bridge and signed Bow Falls path; reserves a separate lake day around confirmed shuttle/Route 8X access; and chooses either Johnston Canyon or the Lake Minnewanka corridor for the final day. The children now give named boarding/return decisions, a walk sequence, realistic duration choices, season-specific booking checks and an alternate plan if a service or trail is unavailable.

The date-stamped operating snapshot distinguishes Parks Canada shuttle access from Roam service. Parks Canada lists the 2026 Lake Louise and Moraine Lake shuttle seasons through 12 October and says Moraine Lake Road is closed to personal vehicles year-round. Roam Route 8X is year-round; Route 6 summer service ended 4 October and is scheduled to resume 19 May 2027; Route 9 is suspended 13 October to approximately 30 November for slope work that closes the Johnston Canyon day-use area and trail section. These are 12 October 2026 source snapshots, not future timetable promises. The guides do not state an unverified fare or departure time. Sources checked: [Parks Canada lake access](https://parks.canada.ca/pn-np/ab/banff/visit/parkbus/louise), [Parks Canada trail conditions](https://parks.canada.ca/pn-np/ab/banff/activ/randonnee-hiking/etat-sentiers-trail-conditions), [Roam Route 8X](https://roamtransit.com/schedules-routes/lake-louise-banff-express-route-8x/), [Roam Route 6](https://roamtransit.com/schedules-routes/lake-minnewanka-route-6/) and [Roam Route 9](https://roamtransit.com/schedules-routes/johnston-canyon-regional-route-9/).

## Translation, search and dates

Four locale batches add the route copy and search terms in Traditional Chinese, Japanese, Korean and Thai. GPT-6 Codex produced and reviewed each translation in the same model; this is not independent-model or human review. Each locale has 137 new page strings and five search strings in the Banff page/search batches; earlier reviewed strings are reused. One stale 96-key Banff batch per locale was pruned, for 384 obsolete entries total. Current catalogs merge 55,742/55,742 required strings per locale with zero missing or stale keys.

The four English pages, 20 localized editions, canonical/article metadata and sitemap `lastmod` records now carry 12 October 2026. Exactly 20 sitemap dates changed (four routes × five editions); route URLs and the 73 Canada search routes remain unchanged. The hub gains the `Lake Louise` search keyword, translated in all four locales.

## Image and SVG record

The active Banff town/base photo was visually checked at 1,600 × 1,066 pixels and matches Cascade Mountain with avalanche signage on the Banff approach, not a town scene; its alt text now describes the actual pixels. Its Commons page identifies Ron Cogswell and CC BY 2.0. The active Moraine Lake photo was pixel-checked at the same local dimensions against its Commons page (Bede735, CC BY-SA 3.0); the credit links that exact version and states the same-version share-alike term. Distinct declared license versions are recorded per asset and do not, by themselves, indicate a conflict.

The old Johnston/Minnewanka WebP shows a forest stream rather than the represented corridor. The file and its listed attribution metadata remain preserved but are marked unused and no current page references it. A follow-up CA07 source patch excludes that exact file from `dist`; a regression checks the original file hash, all five source and built route editions, the replacement SVG and the file's absence from the built asset tree. Its exact Commons page could not be fetched, so that source/license claim remains unverified. CUA pixel feedback also found that the corridor cards covered both endpoint markers and arrowheads. The marker/arrow geometry now sits in the gaps outside those cards and draws above them; the legend text is unchanged, while its lines move up 12 px to increase bottom padding. The five-language two-corridor schematic is at [tripdistill-canada-banff-two-corridors.svg](/workspace/tripdistill/assets/images/tripdistill-canada-banff-two-corridors.svg), with companion styling at [canada-banff.css](/workspace/tripdistill/css/canada-banff.css). It is not to scale and promises no connection time or service. Its project source and Terms link are visible on the guide. The original diagram declares no separate reuse license; commercial reuse eligibility remains unknown. No uploader-authority or independent rights-chain clearance is claimed for the source-page declarations.

## Validation record

- `npm run localize`: all four editions generated 912 pages and 955 search records each; zero missing translations.
- `npm run audit:canada`: 18 hubs, 54 guides, 73 English / 365 five-language routes, 52 credited photos and two map treatments.
- `npm run test:canada-banff-route-dates`: four existing routes × five locales, metadata, sitemap dates and all 73 Canada search routes.
- `npm run test:canada-banff-svg`: Python `xml.etree.ElementTree` parses the SVG; path/shape/text geometry, five-language legend, visible source and Terms links pass.
- `npm run test:canada-banff-retired-image`: preserved source bytes and retirement note pass; all five source and built route editions omit the retired image and retain the SVG; the exact image file is absent from `dist`.
- `npm run audit:photo-license-inventory`: active photo source/pixel records retained; two Banff photos checked against their exact Commons pages; no source metadata conflicts; the retired photo remains inactive; image count and project-original diagram counts reconcile.
- `npm run build`: passed with 4,577 HTML files and 800 images (5,467 files total); all 4,560 sitemap URLs verified in `dist/`, and the retired Johnston image is absent.
- Full `npm run audit`: passed after the CA07 follow-up. It includes Canada/Pacific Rim, China route-date/CN14B, Lake District and Somerset SVG, UK, France and Malaysia date/search/photo regressions; site audit found 4,560 routes, 955 search records per language and 4,560 unique localized titles.
- `git diff --check`: passed with no whitespace errors. Route bodies, review dates, search index and sitemap are unchanged in this follow-up.

No browser, headless browser, CDP, local server, site crawler, deployment, integration merge or production action was used. This source and static-build review does not establish browser/UI acceptance or photo-rights clearance.
