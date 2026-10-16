# Pacific Rim & Tofino Canada refresh — 12 October 2026

## Scope and selection

Source branch: `codex/sprint-ca-06-content-20261012`
Exact base: `a014412eceb30efae51894be3b6167debaa96ca3` (`codex/integration-sprint-20261011`)
Scope: the four existing Pacific Rim & Tofino routes in English, Traditional Chinese, Japanese, Korean and Thai.

The README describes 73 English Canada routes: 18 regional hubs, 54 child guides and the country page. Reading the README, previous notes, and Git history showed that five clusters had already received hub-plus-three-child editorial work this cycle: Montreal, Quebec City/Charlevoix, Toronto, Vancouver/North Shore, and Victoria/South Island. Their relevant content commits are dated 7–8 October. That accounts for twenty routes; the other 53 had not received this cycle's deep rewrite. Pacific Rim & Tofino still had its initial 12 September content, so it was selected. No route was added or removed.

The existing pages are:

- `/canada/pacific-rim-tofino/`
- `/canada/pacific-rim-tofino/long-beach-rainforest/`
- `/canada/pacific-rim-tofino/ucluelet-wild-pacific/`
- `/canada/pacific-rim-tofino/tofino-marine-day/`

Rendered English `<main>` text, counted as whitespace-delimited tokens after removing markup, changed by:

| Existing route | Base | Updated | Net change |
|---|---:|---:|---:|
| Pacific Rim & Tofino hub | 865 | 1,460 | +595 |
| Long Beach & Rainforest Trails | 826 | 1,440 | +614 |
| Ucluelet & the Wild Pacific Coast | 820 | 1,311 | +491 |
| Tofino Marine Day | 822 | 1,297 | +475 |

This is a scope check, not by itself a quality verdict.

## Editorial changes

The hub compares three-, four- and five-night stays and makes a single Tofino or Ucluelet lodging base the default. It distinguishes the ferry crossing to Nanaimo, the Highway 4 drive from Port Alberni, and local access to dispersed trailheads. Drive-time figures are attributed to Parks Canada as estimates, with DriveBC and weather checks called out; the named Horseshoe Bay–Departure Bay route is not treated as a guaranteed sailing or fare.

The Long Beach guide pairs one shoreline visit with one named park walk. It describes Rainforest Trail A (1 km, moderate, many steps) and Shorepine Bog (800 m, no stairs, uneven boardwalk), legal parking, surf/tide and creek hazards, and the need to use the current closure table. The 12 October trail conditions are explicitly a dated snapshot, including Schooner Cove closed, Combers in caution, and active warnings; the guide does not imply those notices remain current.

The Ucluelet guide names the Wild Pacific Trail Lighthouse Loop from Amphitrite Point (2.6 km, about 30–45 minutes per the trail society), separates the main loop from tide-sensitive extensions, and protects daylight for the Highway 4 return. The marine guide asks readers to confirm the exact departure dock, vessel, date, clothing, accessibility limits, cancellation terms and return window directly with the operator. A license is not described as an endorsement; marine weather, sightings, landings, fares and departures are not guaranteed. Boat, long beach and cross-island transfer days are kept separate, with a movable day and a land-based fallback.

Official references checked on 12 October 2026:

- [Parks Canada — Pacific Rim National Park Reserve](https://parks.canada.ca/pn-np/bc/pacificrim), [visit planning and drive estimates](https://parks.canada.ca/pn-np/bc/pacificrim/visit), [hiking](https://parks.canada.ca/pn-np/bc/pacificrim/activ/randonnee-hiking), [trail conditions](https://parks.canada.ca/pn-np/bc/pacificrim/activ/randonnee-hiking/etat-sentiers-trail-conditions), and [licensed operators](https://parks.canada.ca/pn-np/bc/pacificrim/activ/exploitants-operators).
- [DriveBC](https://www.drivebc.ca/) and [Environment and Climate Change Canada weather](https://weather.gc.ca/) for changing road/weather conditions.
- [BC Ferries route map](https://www.bcferries.com/routes-fares/discover-route-map) for the Horseshoe Bay–Departure Bay connection.
- [Vancouver Island Connector / Tofino Bus](https://viconnector.com/): the operator page reported both services not operating when checked; do not rely on this volatile status without rechecking.
- [Wild Pacific Trail Society Lighthouse Loop](https://www.wildpacifictrail.com/lighthouse.html) and [map](https://www.wildpacifictrail.com/map.html).
- [District of Tofino](https://tofino.ca/) for local notices and services.

Exact timetable, future fare, reservation availability, current park status and operator service are intentionally left for date-specific verification.

## Image review

All three existing 1600×1066 image files were viewed at pixel level and compared with their exact Wikimedia Commons file pages. The bytes did not change. The Ucluelet image is a bald eagle among Sitka spruce, not rocky coastline; its alt text was corrected accordingly. Each source credit retains its own creator and exact license version:

| Route image | Source page / creator | Declared license | SHA-256 |
|---|---|---|---|
| Long Beach and Lone Rock | [Lone Rock at Long Beach, Tofino](https://commons.wikimedia.org/wiki/File:Lone_Rock_at_Long_Beach,_Tofino.jpg), Sarena D | CC BY-SA 4.0 | `0efdea1ad61438b32f7b7bae8110e3ad5cd4532be43a0e388618d761d536ceda` |
| Ucluelet eagle and spruce | [Picea sitchensis, Wild Pacific Trail, Ucluelet 2](https://commons.wikimedia.org/wiki/File:Picea_sitchensis_Wild_Pacific_Trail,_Ucluelet_2.jpg), Roland Tanglao | CC BY 2.0 | `10e281b5b26778fd9b6c9b14ecb535af95864e685ed0f5d998321914143639f4` |
| Clayoquot Sound islands | [Clayoquot Sound near Tofino](https://commons.wikimedia.org/wiki/File:Clayoquot_Sound_-_Near_Tofino_-_Vancouver_Island_BC_-_Canada_-_06.jpg), Adam Jones, Ph.D. | CC BY-SA 3.0 | `ac9f52d817edc4c5405a1c1f6ffdbb7e63a6b15e17e4e9734de65075afd838dd` |

The visible credits link to each source and license and disclose the resize/display crop/WebP conversion; the CC BY-SA photos also state that the adaptations are offered under the same applicable license. The license versions differ, but that alone does not establish a conflict between separately credited images. This review checks visible pixel fit and source-page declarations; it does not independently establish uploader authority, chain of title or legal clearance. No UI/viewport review was done. No photo was retired and no replacement SVG was needed.

## Locales, search and dates

The four existing pages, their search records and five language editions were synchronized. Each Traditional Chinese, Japanese, Korean and Thai page batch owns 118 newly translated strings and reuses 102 strings already present in reviewed source batches; separate search batches add 16 route-specific terms per language. GPT-6 Codex is recorded as writer and same-model reviewer, with `independentSecondModel: false`; no independent model or human translation review is claimed.

Stale pruning removed 364 obsolete strings total: 88 old Pacific Rim strings per locale (352), plus three obsolete Vancouver strings per locale (12). Active existing translations were retained. The four existing routes keep their URLs and receive the 12 October 2026 modification date in all five language editions. Exactly 20 sitemap `lastmod` rows changed—four URLs × five locales—with no sitemap URL additions or removals. Search remains 955 route records per language; Canada remains 73 English and 365 localized route editions.

## Verification

After the Thai hub meta description initially exceeded the site length guard, its translation was shortened and the full audit was rerun successfully.

- `npm run audit` passed. It includes translation batch/coverage checks, search and photo-license guards, image provenance, all-page localization, Canada structure and route-date checks, France/UK/Italy/Vietnam/Australia/USA/Switzerland checks, photo inventory, Malaysia Cameron/Langkawi/Melaka/fourth-child and schematic checks, China dates and CN14B, Lake District and Somerset original-diagram checks, and the site audit.
- Translation audit: 55,696 active strings per locale, zero missing and zero stale strings; 222,784 reviewed translation targets checked without problems.
- Site audit: 4,560 localized routes (912 per language), 955 search records per language and 4,560 unique localized titles.
- `npm run test:canada-pacific-rim-dates` passed for the four existing routes × five locales, checking Article dates, canonical URLs, sitemap dates and the 73 Canada search routes.
- `npm run build` passed: 5,466 files (4,577 HTML and 800 images, 319.6 MiB); the artifact verified all 4,560 sitemap routes and left 14,534 files of Cloudflare Pages headroom.
- `git diff --check` passed.

This is a source-branch result only. No browser/headless/CDP, server, deployment, integration/main/prod action, whole-site restricted source crawl, independent UI acceptance, human translation approval or photo rights-chain clearance is claimed.
