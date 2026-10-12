# Gold Coast & Scenic Rim refresh

**Review date:** 12 October 2026

**Source branch:** `codex/sprint-au-after-great-ocean-road-20261013`

**Base:** `ec5e2f319333e946e5792b99777e5ce99a97e2b6`

## Scope and body changes

Updated four existing routes and added no route:

- `/australia/gold-coast-scenic-rim/`
- `/australia/gold-coast-scenic-rim/surfers-paradise-broadbeach/`
- `/australia/gold-coast-scenic-rim/burleigh-heads-tallebudgera/`
- `/australia/gold-coast-scenic-rim/coolangatta-snapper-rocks/`

The substantive body text grew by 488, 664, 711 and 654 words, respectively, after excluding navigation cards, source lists and advertisements. Australia moves from 46 to 50 substantive route bodies out of 97; 47 remain. The hub gives an overnight and transport framework, then separates the urban light-rail corridor, Burleigh's park-and-water decisions, the southern border coast and the hinterland. Each route includes a transport/base choice, realistic duration, staged itinerary, alternatives, failure points, FAQs and direct checks. Springbrook and Lamington route bodies were not edited.

The sitemap URL set is unchanged. Only the four selected routes' `lastmod` values changed in each of the five editions (20 entries). Only the four selected English search records changed relative to the base.

## Current source checks

Transport, access, weather and park details were checked on 12 October 2026. They are time-sensitive; the pages ask travellers to recheck on their travel date and make no service, safe-swimming or entry guarantee.

- [Translink L1 timetable](https://jp.translink.com.au/plan-your-journey/timetables/tram/t/l1): checked the current Helensvale–Burleigh Heads corridor and named stations. The page does not imply a service beyond the published terminus or a guaranteed date-specific timetable.
- [Translink service notice](https://translink.com.au/updates/1171096): the October evening replacement-bus notice was treated only as a dated snapshot, not a standing service rule.
- [Queensland Parks — Burleigh Head](https://parks.qld.gov.au/parks/burleigh-head) and [visiting safely](https://parks.qld.gov.au/parks/burleigh-head/visiting-safely): checked track/access language and closure/weather cautions. Track access can change, and the page does not claim all paths are wheelchair accessible.
- [Bureau of Meteorology — Gold Coast forecast](https://www.bom.gov.au/qld/forecasts/gold-coast.shtml) and [Beachsafe](https://beachsafe.org.au/): linked as date-specific weather, surf and patrol checks, not as a promise of current conditions.
- Queensland Parks references for [Springbrook](https://parks.qld.gov.au/parks/springbrook) and [Lamington](https://parks.qld.gov.au/parks/lamington) keep the two hinterland gateways as separate trips.

## Images and original schematic

The three existing WebP photo files were byte-compared with the base and are unchanged. I inspected their local pixels separately from the Commons source pages. The depicted subjects are Surfers Paradise beach/surf/skyline, Tallebudgera Creek's shoreline and nearby beach, and surf breaking across Snapper Rocks' rocky coast.

The source pages declare CC0 1.0 for the Surfers Paradise image, public domain for the Burleigh/Tallebudgera image, and CC BY-SA 4.0 for the Snapper Rocks image. Those are recorded source-page declarations, not independent rights clearance or a chain-of-title opinion. Credits remain visible on the pages.

Added [`australia-gold-coast-coast-to-range-planning.svg`](../assets/images/australia-gold-coast-coast-to-range-planning.svg), an original schematic with English, Traditional Chinese, Japanese, Korean and Thai legend labels. It is a not-to-scale planning aid: lines do not assert map geometry, distance, bearing, route shape, connection, timetable or service. The SVG is well-formed and its geometry/text bounds are regression-checked; it was rendered locally with Inkscape for visual inspection. Its SHA-1 is `bc5fb711d29578a4a76b63498c9799f00c9c02bb`. It is not a photo and has no separate reuse license declared; commercial reuse eligibility remains unknown.

The parallel Blue Mountains artwork and source data from `8ca64553fadfaf69baab2790c41f543a649c8043` remain byte-identical. Its regression test was extended only to recognize later Great Ocean Road and Gold Coast search/sitemap changes.

## Translation record

Each locale received one page batch with 154 fresh strings for the four selected routes (616 new locale strings total). Batch validation and sampling passed. Provenance records `GPT-6 Luna` as writer and same-model self-reviewer, with `independentSecondModel: false`; this is not an independent Luna Max or human review. Japanese sampling flagged two reused translations for sentence fragments clipped with ellipses; the same-model reviewer checked the surrounding claims and retained them as contextually aligned. The other locales' samples had no unresolved warnings.

Older inactive batches contained 336 stale keys (324 in legacy Gold Coast batches and 12 in older Vietnam, Blue Mountains and caption batches). The stale-key workflow pruned only keys no longer in active translation work; no active key was removed. The temporary Brisbane search summary generated during the first broad source pass was reverted to the base values because it was outside this four-route scope; its temporary one-key locale batches were removed. Final i18n status is 56,175/56,175 keys per locale, with zero missing or stale keys.

## Verification

- `npm run audit:i18n` passed: 224,700 reviewed translation targets checked; four editions complete with zero stale entries.
- `npm run audit` passed across the site, including Australia (16 hubs, 80 field guides, 97 English routes and 485 five-language routes), all AU route regressions, the photo-license inventory and source/site audits.
- `npm run build` passed: 5,471 files, 4,577 HTML files and 805 images; the build verified 4,560 sitemap routes. This was a local build only; no deployment or live-site check was run.
- Gold Coast regression body deltas: +488 / +664 / +711 / +654 words. It also checks five-language dates, canonical URLs, FAQ/schema parity, unchanged URL and photo sets, search scope, 20 sitemap dates, SVG XML/legend/geometry and preservation of the parallel Blue Mountains artwork.
- Photo inventory regression passed with zero active source-credit gaps, zero source conflicts, zero module errors and 805 expected build images. The source-page declarations and pixel observations remain separate evidence fields.

No full-site crawler or browser automation was used. The report does not claim human translation review, independent second-model review, independent photo-rights clearance or rendered-site browser QA.
