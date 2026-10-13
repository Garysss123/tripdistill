# Atlanta four-route U.S. editorial refresh — 12 October 2026

## Scope and exact-base check

This source-only change is on `codex/sprint-us-next-regions-20261013`, created from exact base `dffbdfaacd0f8b583b35cbb4985ae007d3daf1a7` on `codex/sprint-us-after-hawaii-20261013` (base parent `c7df46be0dc3f40649ff44d672861e971d0c082b`). It substantively refreshes these four existing English routes:

- [`/usa/atlanta/`](../usa/atlanta/index.html)
- [`/usa/atlanta/king-historic-district/`](../usa/atlanta/king-historic-district/index.html)
- [`/usa/atlanta/midtown-museums/`](../usa/atlanta/midtown-museums/index.html)
- [`/usa/atlanta/beltline/`](../usa/atlanta/beltline/index.html)

The four normalized `<main>` bodies at the exact base match their 11 September source bodies at `71def01cd4d489552b9f5d67ca1a202becaa0435e`; the intermediate change was not a substantive route-body refresh. They are disjoint from the 33 completed route paths itemized for Alaska, Sierra Parks, Yellowstone–Tetons, Utah Parks, Miami/Orlando, Texas, Colorado, Hawaii and New Orleans. Their addition makes 37 paths in the disclosed source-work set, not 37 accepted routes and not a reconstruction of every U.S. edit. The 97-route U.S. collection remains pending its editorial release gate. New York's acceptance sample and the `/usa/` overview are unchanged. No URL was added or removed.

## What changed in the route copy

- **Atlanta hub:** gives two-, three- and four-night trip shapes while keeping one hotel base. It weighs Downtown, Midtown and Old Fourth Ward/Inman Park by the actual planned days and last-mile links. It maps the airport's Domestic Terminal rail station to the hotel's actual station, calls out the international-terminal connection and the post-8:30 p.m. northbound transfer arrangement, and reserves time for luggage and the final walk. A weather-affected outdoor day moves only when a suitable museum is open and its ticket fits.
- **King historic district:** starts at the current temporary visitor center in Historic Fire Station No. 6, then distinguishes the historic church and NPS interpretation from the separate King Center and the closed-for-renovation Birth Home. It describes a flexible half-day sequence, current programs and return leg. It distinguishes bus routes 3/99 from rail (NPS says there is no direct MARTA train), and separates the official free parking entrance and its final walk from the bus approach. A missed or changed program leads to more available indoor interpretation or a shorter visit, never an alternate entry around the closure.
- **Midtown museums:** uses the checked weekday schedules to decide whether a High Museum visit, MODA transfer or one principal collection fits. It treats the Botanical Garden as a separate outdoor admission, names its date-specific works and ticket terms, and gives a verified-open indoor alternative when rain, storms or temporary works make the garden a poor fit.
- **Beltline:** plans a bounded Eastside Trail out-and-back from a currently mapped public access near Ponce City Market, with Historic Fourth Ward Park as an optional turning point. The longer version adds Krog only after confirming the public exit and return. It explicitly says the shared trail is not rail transit, separates individual market hours from trail access, and names a museum day or a shorter outing as a weather/closure alternative.

This is a source-content comparison with the existing Japan hub-and-route depth floor, including Osaka/Namba planning structure. It is not browser or viewport acceptance.

## Official-source checks

Operating details and links were checked on 12 October 2026. The official pages were accessible during this check; no access-denied response required an alternate route.

- [NPS basic information](https://www.nps.gov/malu/planyourvisit/basicinfo.htm), [hours and programs](https://www.nps.gov/malu/planyourvisit/hours.htm), [directions](https://www.nps.gov/malu/planyourvisit/directions.htm) and [fees](https://www.nps.gov/malu/planyourvisit/fees.htm): temporary visitor center at 39 Boulevard NE, Birth Home renovation restriction, next-door presentations and Church Talks, bus/parking approach, and no park entrance fee.
- [MARTA airport connection](https://itsmarta.com/getting-to-airport.aspx) and [current trains/stations](https://itsmarta.com/train-stations-and-schedules.aspx): Airport Station at the Domestic Terminal, Red/Gold service, terminal connection and current northbound evening transfer guidance.
- [High Museum visitor information](https://high.org/visit/) and [MODA](https://www.museumofdesign.org/): checked opening days/hours and separate visits.
- [Atlanta Botanical Garden](https://atlantabg.org/plan-your-visit/): checked hours; Skyline Lawn closure through 25 October; Conservatory disruption notice for 12–17 October; general-admission weather refund terms and transferable FLEX ticket terms.
- [Eastside Trail](https://beltline.org/parks-trails/eastside-trail/), [current Beltline map](https://beltline.org/map/) and [visitor information](https://beltline.org/visitor-information/): trail endpoints, nearby anchors, current access and shared-use guidance.
- [National Weather Service Atlanta forecast and alerts](https://www.weather.gov/ffc/): date-specific weather check source.

Hours, notices, tickets and transit schedules can change; page copy labels its check date and asks travelers to verify the official calendar/service information again for their travel date. The route sequence and base comparisons are editorial judgments, not operator itineraries.

## Five-language copy, dates and search

The four reviewed Traditional Chinese, Japanese, Korean and Thai page batches each cover all four routes, with 55 new keys, 228 reused route keys and zero missing keys (362 raw units; 283 unique source keys). Translation strings were completed and self-reviewed in the current runtime. Although GPT-6 Luna was requested, the available runtime did not expose a selectable or verifiable Luna model; the batch records this uncertainty. Same-runtime self-review is not an independent second-model or human review.

The four route descriptions in the English search index were updated in place and reuse the new page translations. There is no search-keyword batch because no new keywords were added; all editions retain 955 records. The four route `dateModified` values and all 20 corresponding sitemap entries (four routes × five editions) are 12 October 2026. Sitemap inventory remains 4,560 URLs. Each locale's existing `40c-atlanta-editorial.json` file was preserved; after a dry run, its five inactive summary source keys were pruned (20 keys total), while every active key remained. The approved catalog has 58,460 strings per locale with zero missing or stale keys.

## Verification and limits

- Each new locale page batch passed `validate-i18n-batch.mjs`; full i18n merge, translation coverage/audit and four-language localization passed.
- Full `npm run audit` passed after `npm run build` created the static artifact. It includes the U.S. 97-route audit, U.S. editorial structure and date checks, the exact New York non-change assertion, the route/date/search integration regression and the repository's other static content, source, translation and asset checks.
- `npm run build` produced 5,493 files (4,577 HTML and 821 images; 324.1 MiB), verified all 4,560 sitemap routes and reported 14,507 Cloudflare Pages file headroom.
- The source branch adds exactly four Atlanta English article bodies. `git diff --check` passed. No photo or SVG was created or changed.

No local site server, headless browser, CDP or HTTP crawler was run. Visual pixels, mobile layout, interaction and image acceptance remain unverified. This is not a U.S. collection-wide editorial acceptance or deployment.
