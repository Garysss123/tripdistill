# Kent, Sussex & the South Coast refresh — 12 October 2026

## Scope and source

This source-only refresh starts at integration commit `5da908ae9ed315c7fb3ba80110142c81a8ab65f3` on `codex/sprint-uk-16-20261012`. It updates the existing Kent, Sussex & the South Coast hub and its three child routes:

- `/united-kingdom/kent-sussex-south-coast/`
- `/united-kingdom/kent-sussex-south-coast/brighton-lanes-seafront/`
- `/united-kingdom/kent-sussex-south-coast/canterbury-dover/`
- `/united-kingdom/kent-sussex-south-coast/seven-sisters-eastbourne/`

The selection followed the README's remaining-region order after excluding the UK15 Peak District/Derbyshire change (`f09121c2…`) and the already-integrated UK14 Liverpool/Manchester set. Among the five untouched candidates, Kent/Sussex was next in the documented order. No route was added. The generated United Kingdom overview also receives the revised hub-card excerpt, and the four existing search records receive new summaries and terms.

For the same-level editorial reference, I read the source HTML for [`/japan/osaka/`](../japan/osaka/index.html) and [`/japan/osaka/namba/`](../japan/osaka/namba/index.html). Osaka groups half-days by geography and names the day’s station/transfer; Namba distinguishes four sub-districts and describes where its route begins, how long its market/lanes/canal stops take, and what to leave out. The Kent/Sussex hub and field files apply that geography-first and trade-off approach to their separate rail and bus corridors. This was a source-level comparison only; no browser or viewport review was performed.

## Editorial changes

Rendered English `<main>` text was compared with the source branch parent using whitespace-delimited word counts. The four selected pages gained 3,531 words in total: hub +1,105, Brighton +722, Canterbury/Dover +806, and Seven Sisters/Eastbourne +898. The generated `/united-kingdom/` overview card was also updated; its full-page main-text count is effectively unchanged (−2 words).

The hub now distinguishes two-, three- and four-night choices, when to move the base from Brighton to Canterbury, and when Dover merits a separate day. It separates Southern and Southeastern corridors, Canterbury East and West, Dover Priory and the castle hill, and the Exceat bus gateway from a nonexistent Seven Sisters rail station.

The Brighton guide follows a single downhill sequence from the station, distinguishes North Laine from The Lanes, gives dated Pavilion hours and last entry, bounds the seafront to one direction, and plans the uphill return. The Canterbury/Dover guide treats either the cathedral or castle as the full-day anchor, explains station choice, records date-checked opening/last-entry and closure details, and makes an overnight split the practical way to see both deeply. The Seven Sisters guide names Exceat, gives official walk estimates, and treats cliff distance, Cuckmere tide, bus direction and daylight as hard route gates. All three guides add local alternatives for poor weather or disrupted service.

## Official source checks

- [Royal Pavilion visit planning](https://brightonmuseums.org.uk/royalpavilion/plan-your-visit/) and [Brighton & Hove Buses service 12](https://www.buses.co.uk/services/BH/12): station/Pavilion and bus facts, current dated operating window, and seasonal hours. Hours and last entry are explicitly dated 12 October 2026.
- [Canterbury Cathedral visit planning](https://www.canterbury-cathedral.org/visit/plan-your-visit/), [getting there](https://www.canterbury-cathedral.org/visit/plan-your-visit/getting-here/), and [National Rail](https://www.nationalrail.co.uk/): station patterns, cathedral access, visitor hours and date-specific rail planning.
- [English Heritage Dover Castle](https://www.english-heritage.org.uk/visit/places/dover-castle/): dated opening and last-entry snapshot, timed admission guidance and individual closure/access notices.
- [Seven Sisters getting there](https://www.sevensisters.org.uk/plan-your-visit/getting-here/), [walking routes](https://www.sevensisters.org.uk/things-to-do/walking/), and [cliff safety](https://www.sevensisters.org.uk/plan-your-visit/cliff-safety/): Exceat access, official distance/time estimates, cliff setback and river-mouth safety.

The Seven Sisters park and bus-operator pages disagreed about route 12A in the checked snapshot. The copy records that discrepancy and sends travelers to the live operator planner rather than promising a specific 12A service. No fares, headways or future service guarantees were added. The route source crawler was not run because this task explicitly excludes a whole-site restricted crawl; the cited, route-relevant first-party pages were checked directly.

## Locales, search and dates

English plus Traditional Chinese, Japanese, Korean and Thai content was generated for the four routes. Reviewed batches are `zzzzs-uk-kent-sussex-pages-20261012.json` (84 new page strings per locale), `zzzzt-uk-kent-sussex-search-20261012.json` (27 search strings), and `zzzzv-uk-country-kent-card-20261012.json` (one overview-card excerpt), under each locale's reviewed-batch directory. The older Kent batch retained its still-current translations; 75 obsolete strings per locale were pruned. Current locale catalogs contain 55,244 active strings each, with no missing or stale entries.

The writer and reviewer are both recorded as GPT-6 Luna; review was a same-model self-review (`independentSecondModel: false`). No Luna Max, external model or human review is claimed. The hub and all three children carry the 12 October 2026 review date in visible copy and Article metadata. The same four existing paths receive that `lastmod` in all five sitemap editions. Existing URLs and all other route dates are preserved.

## Photos and limitations

All three existing local WebP frames were visually checked against their declared subjects and exact Wikimedia Commons file pages. The Royal Pavilion, Canterbury Cathedral, and Seven Sisters photographs match their visible subject. The source pages' named creators and CC BY-SA 3.0/4.0 terms agree with the image inventory and visible credits; image files and inventory records were left untouched. See the [targeted photo review](uk-kent-sussex-photo-review-2026-10-12.md). Source-page attribution was checked, but no independent rights-chain or legal clearance is claimed.

No browser-rendered desktop/mobile UI inspection, independent translation review or deployment is claimed. The task's separately protected Cotswolds image was not opened.

## Verification

`npm run audit` passed, including the i18n and locale-script guards, image/license guards, all 405 United Kingdom language routes, United Kingdom date coverage, the new Kent/Sussex source checks, China CN14B, Lake District SVG and site-wide audit. The site audit reports 4,560 localized routes, 955 search records per language and 4,560 unique localized titles. `npm run build` passed with 5,464 files (4,577 HTML, 798 images), verifies all 4,560 sitemap URLs, and leaves 14,536 files below the Pages safety boundary.

After build, Kent/Sussex date regression passed for 40 source/dist pages (four routes × five locales × two outputs), and its search regression passed for 40 records; each source and dist sitemap has the same 20 selected localized paths dated 12 October. The general UK date test passed across 405 pages. Cornwall, Oxford/Cotswolds, Bath/Somerset and Liverpool/Manchester date regressions passed; Liverpool/Manchester search passed. France date sync, China route dates and CN14B, Malaysia Cameron Highlands and Langkawi dates, Lake District and Somerset diagram regressions, and the photo-inventory regression passed. `git diff --check` is clean. A direct sitemap comparison to the source parent found exactly 20 `lastmod` changes (the four selected routes in five locales), with 4,560 URLs retained and none added or removed.

The first full-audit attempt caught the shared UK route-date gate still expecting only the previously integrated 12 October cohort. Its expected count was updated to include both existing cohorts, and the complete rerun passed. No whole-site restricted source crawl, browser/UI review, local server, deployment or external review was performed.
