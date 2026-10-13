# Broome & Kimberley content refresh — 13 October 2026

## Scope and route decisions

This source-only branch, `codex/sprint-au-broome-content-20261013`, starts directly from requested checkpoint `5578d6da740ca9d7ec07fca6c7eed65cc67868e8`. It revises four existing routes:

- `/australia/broome-kimberley/` — separate Broome, peninsula and East Kimberley/Gibb bases, night counts, transfer limits and route shapes.
- `/australia/broome-kimberley/rubibi-broome-cable-beach/` — choose one coast by tide, wind, daylight, access and a verified return ride; keep town and beach transfers distinct.
- `/australia/broome-kimberley/dampier-peninsula/` — plan around a confirmed community or property permission, booked overnight and the actual road last mile; return to the Broome plan if access is not confirmed.
- `/australia/broome-kimberley/gibb-river-road/` — use a multi-day Derby–Kununurra itinerary with booked station/camp nights, a suitable and explicitly permitted vehicle or guided tour, fuel, communications and independent segment checks.

Across the four English `<main>` bodies, the exact whitespace-delimited text deltas from the source commit are +1,077, +1,163, +1,178 and +1,179 words (+4,597 total). The resulting bodies contain 1,576, 1,514, 1,506 and 1,524 words. The source-comparison floors are 1,397 for the Japan Hokkaido hub and 1,030 for the Otaru local guide. The Australia substantive-route ledger advances from 84/97 to 88/97; nine remain (two Broome routes, six Tasmania routes and one country route). Kununurra / Lake Argyle and Purnululu HTML remain unchanged; no URLs were added or removed.

The text distinguishes a three-night Broome stay from one or two reserved Dampier Peninsula nights and a fourteen-day-or-longer Gibb expedition. It does not imply that a map route or open main road grants access to a private station, community or culturally restricted place. Unknown road, tide, crossing depth, park, fire, weather or permission status means omit or postpone that segment; do not try an unverified side road or alternate entrance. Coastal walking and dinosaur-track access are tied to tide and footing checks, with a town-based or confirmed operator alternative.

## Official-source basis

Sources were checked on 13 October 2026 for the planning claims below. Those checks are a dated reference point, not a forecast or a future access guarantee.

- Main Roads WA, [Gibb River Road](https://www.mainroads.wa.gov.au/travel-information/driving-in-wa/gibb-river-road/) and its [live Travel Map](https://travelmap.mainroads.wa.gov.au/Home/Map): changing segment conditions, seasonal closures/opening, vehicle preparation and water-crossing caution.
- Shire of Derby / West Kimberley [road report](https://www.sdwk.wa.gov.au/roadreport/), Shire of Wyndham / East Kimberley [road report](https://www.swek.wa.gov.au/roadreport/), DBCA [park alerts](https://exploreparks.dbca.wa.gov.au/plan-your-visit/park-alerts), [Bureau of Meteorology WA forecasts](https://www.bom.gov.au/wa/forecasts/) and [Emergency WA](https://www.emergency.wa.gov.au/): separate live checks for local roads, park access, weather, fire, flood, cyclone and evacuation conditions.
- Australia’s North West, [Gibb River Road guide](https://www.australiasnorthwest.com/explore/kimberley/gibb-river-road/): fourteen-day-or-longer full-route planning guidance; treated as a planning estimate rather than a guaranteed itinerary.
- Bureau of Meteorology [Western Australia tide tables](https://www.bom.gov.au/oceanography/projects/ntc/wa_tide_tables.shtml), Visit Broome [tides](https://www.visitbroome.com.au/info/tides) and [Gantheaume Point dinosaur footprints](https://www.visitbroome.com.au/see-and-do/dinosaurfootprints): local tide-window, slippery-rock and access context.
- Tourism Australia, [Broome guide](https://www.australia.com/en/places/broome-and-surrounds/guide-to-broome.html): airport transfers and local transport are options to confirm with the current operator and accommodation.
- Visit Broome, [Dampier Peninsula](https://www.visitbroome.com.au/see-and-do/dampier-peninsula), Australia’s North West, [Dampier Peninsula](https://www.australiasnorthwest.com/explore/broome/dampier-peninsula/), and [Cygnet Bay Pearl Farm](https://www.cygnetbaypearlfarm.com.au/): route distance, road surface, booking and operator context. The published access information is treated as changeable; private and community access is not inferred from road presence.
- [Nyamba Buru Yawuru](https://www.yawuru.org.au/) and DBCA’s [Yawuru Nagulagun / Roebuck Bay plan](https://www.dbca.wa.gov.au/management/plans/yawuru-nagulagun-roebuck-bay): Yawuru cultural and conservation context.

## Translation and dates

New reviewed page batches contain 217 translation keys per locale and search batches contain 21 per locale in `zh-Hant`, `ja`, `ko` and `th`. They are actual target-language text and were checked with the repository i18n batch validators, merged-catalog audits, locale-script checks, search checks and rendered-static-document checks. Provenance explicitly records the exact runtime model ID as unverified and the reviewer as the same task assistant/model family; self-review is non-independent. No human or independent-model review is claimed.

After the stale-key dry run, 352 obsolete translations in prior reviewed batches were pruned (88 per locale: 85 old Broome keys and three Perth keys). New current batches were retained; drafts were not rewritten. English and localized pages/search data carry the changed route content and review date. Article metadata and sitemap `lastmod` were updated for those four routes in all five language editions; sitemap URL count remains 4,560.

## Verification and limits

The dedicated regression checks exact source parent and four-route HTML/search scope, untouched sibling pages, exact English word deltas and Japan reference floors, visible and structured review dates, FAQ/schema parity, 217/21 per-locale batch sizes, translated pages and search summaries, unchanged 4,560 sitemap URLs, and preservation of the earlier parallel arrow SVG fixes. It also checks that no image/SVG file was added.

`npm run build` passed: 5,475 files (4,577 HTML, 809 images; 322.2 MiB), all 4,560 sitemap routes verified, with 14,525 files of Cloudflare Pages headroom. Full `npm run audit` passed after the build: four locale catalogs each have 57,345/57,345 current strings and zero stale keys; Australia has 97 English routes, 485 five-language routes and 97 search records; the site audit verifies all 4,560 published routes, 955 search records per language and 4,560 unique localized titles. The new Broome regression and cumulative Australia checks passed. The audit's broad photo inventory also reports its existing site-wide source-page and license-verification limits; this refresh added no image and makes no additional image-rights claim.

No headless browser, CDP, local server, HTTP crawl, security-setting modification, main/integration change or deployment was performed. Source and static-markup checks do not verify rendered layout, interaction or pixel appearance; those remain unverified. Final commit, parent, tree and remote branch readback are included in the handoff.

## Integration coverage supplement — 13 October 2026

The integration i18n gate found one required shared English key, `Crossing`, used on the Gibb River Road route but absent from the original Broome page batches. Added its contextual label translation to each of the four existing locale batches (zh-Hant `渡河`, ja `渡河`, ko `도하`, th `จุดข้ามแม่น้ำ`), bringing each page batch to 218 keys. The full merged catalogs then approved with 60,689/60,689 current strings and zero missing or stale keys per locale. This supplements the source checkpoint’s 217-key report and does not represent an independent or human language review.
