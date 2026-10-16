# Blue Mountains refresh — 12 October 2026

This source-only batch starts at `d38eb8b13e90eaa121d4696a7d7a34b84e481b98` on `codex/sprint-au-after-brisbane-20261013`. It expands exactly four existing routes:

| Route | English body increase over base |
| --- | ---: |
| `/australia/blue-mountains-nsw-coast/` | +626 words |
| `/australia/blue-mountains-nsw-coast/katoomba-echo-point/` | +615 words |
| `/australia/blue-mountains-nsw-coast/wentworth-falls-tableland/` | +592 words |
| `/australia/blue-mountains-nsw-coast/blackheath-grose-valley/` | +649 words |

Counts are whitespace-delimited words in rendered `<main>` text; related cards, teasers, sources and ads are excluded. The four routes add 2,482 words total. No URL, route, page image or existing Brisbane page changed. Across the Australia set, this moves the substantive-body tally from 38 to 42 of 97 routes.

The hub now compares two-, four- and six-night plans and makes Katoomba, Wentworth Falls and Blackheath distinct station-town bases. It separates train access from the last mile to trailheads, suggests checking the return leg before descending, and gives a coast add-on its own base and time budget rather than presenting it as a nearby mountain stop. The child routes provide ordered walking and lookout choices, realistic time and access trade-offs, return plans, short and wet-weather alternatives, and clear boundaries around closures and cultural places. Search summaries were updated in place; the URL set is unchanged.

## Official information checked

Selected official pages were checked on 12 October 2026. Conditions and services can change; the pages direct readers to recheck park alerts, access, hours and transport for their travel date.

- [Blue Mountains National Park visitor information](https://www.nationalparks.nsw.gov.au/visit-a-park/parks/blue-mountains-national-park/visitor-info) provides the official park access and safety reference.
- [Blue Mountains National Park live alerts](https://www.nationalparks.nsw.gov.au/visit-a-park/parks/blue-mountains-national-park/local-alerts) showed active walking-track and works closures at review time, including sections affecting National Pass, Wentworth Pass/Slack Stairs, the Valley of Waters below Sylvia Falls, Prince Henry Cliff Walk, Govetts Leap descent and Rodriguez Pass. The pages carry the 12 October snapshot date and tell readers to check again; the text does not recommend a closed descent or imply every link is open.
- The [Three Sisters Walk](https://www.nationalparks.nsw.gov.au/things-to-do/walking-tracks/three-sisters-walk) is listed at 0.8 km return and 25–45 minutes. The route text distinguishes the accessible-with-assistance section to Oreades from the stairs toward Honeymoon Bridge and notes the place's cultural significance.
- [Wentworth Falls to Leura Walk](https://www.nationalparks.nsw.gov.au/things-to-do/walking-tracks/wentworth-falls-to-leura-walk) is listed at 11 km one way, Grade 3 and 5–7 hours. It is presented as a demanding, conditional through-walk, not a guaranteed open route or a return loop.
- [Govetts Leap Lookout](https://www.nationalparks.nsw.gov.au/things-to-do/lookouts/govetts-leap-lookout) is the Blackheath lookout reference. The separately listed [Govetts Leap descent](https://www.nationalparks.nsw.gov.au/things-to-do/walking-tracks/govetts-leap-descent) is treated as a high-commitment track subject to current closure status.
- [Transport for NSW Trip Planner](https://transportnsw.info/trip) is the trip-day source for current services and return connections. The guides make no fixed timetable or last-mile service promise.

The repository-wide Australia source crawler was not run. Directly checked pages do not establish future service frequency, fares, path conditions or access on a reader's travel date.

## Japan comparison

For the regional hub, I compared its route selection and depth in source/markup with the Hokkaido hub (`/japan/hokkaido/`). For local guides, I compared the route sequencing, access detail, base choices and alternatives with `/japan/hokkaido/otaru-shakotan/` and `/japan/tokyo/asakusa-ueno/`. This was a source/markup comparison; browser-rendered desktop/mobile layout and interactions remain unverified under the task's no-browser and no-local-server constraints.

## Diagram and photos

The new `assets/images/australia-blue-mountains-western-line-planning.svg` is an original 1,600 × 1,140 px, not-to-scale planning schematic. Its legend is present in English, Traditional Chinese, Japanese, Korean and Thai. Solid and dashed lines are explained as planning relationships, not a timetable, geographic map, measured distance, operating service or promise of last-mile access. XML structure, bounds, language labels and absence of scripts/external references are covered by the regression check. It was rendered with Inkscape and visually inspected as pixels. Its SHA-1 is recorded in `data/australia-blue-mountains-diagram.mjs`. It is a project original with no separate reuse license declared; commercial reuse eligibility is unknown.

The three existing page photos were not replaced or edited. Local WebP pixel review and Commons source-page declarations were recorded as separate evidence:

| Page subject / asset | Commons page declaration checked on 12 October 2026 | Pixel subject review |
| --- | --- | --- |
| Three Sisters and Jamison Valley; `australia-blue-mountains-nsw-coast-katoomba-echo-point.webp` | [Alicia Brogan / Ali b, CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:Three_Sisters,_Blue_Mountains_(1).jpg) | Three Sisters above Jamison Valley from the Echo Point area |
| Wentworth Falls escarpment; `australia-blue-mountains-nsw-coast-wentworth-falls-tableland.webp` | [Lschoen, CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Wentworth_Falls_from_Princes_Rock.jpg) | Waterfall and escarpment from Princes Rock |
| Govetts Leap and Grose Valley; `australia-blue-mountains-nsw-coast-blackheath-grose-valley.webp` | [Pavel Špindler, CC BY 3.0](https://commons.wikimedia.org/wiki/File:Govetts_Leap_-_Blue_Mountains_-_panoramio.jpg) | Lookout marker and Grose Valley near Blackheath |

Source-page author and license statements are recorded for attribution provenance; neither the page declaration nor a pixel match is independent rights, uploader-authority or chain-of-title clearance. Existing local photo bytes remained unchanged.

## Translations

Traditional Chinese, Japanese, Korean and Thai reviewed batches cover the four routes; each `zzzzzd` batch adds 152 currently active keys, including the hub's review date. The shared “How many nights do I need?” key remains owned by the earlier MY14 batch instead of being duplicated. Obsolete translations for superseded Blue Mountains copy and the prior Sydney date were pruned from legacy batches; 328 stale source keys across the four locales were removed, while active translations were retained. The metadata records GPT-6 Luna as the writer and “GPT-6 Luna; same-model self-review” as reviewer, with `independentSecondModel: false`; no independent second-model or human review is claimed.

## Verification and remaining limits

`npm run audit:i18n`, all four new locale batch checks, the four locale sample checks, `npm run audit`, `npm run build`, `npm run audit:australia`, `npm run test:australia-blue-mountains-refresh`, the photo inventory regression and `git diff --check` passed. The build verified all 4,560 localized sitemap routes. Compared with the exact task base, exactly 20 `lastmod` values changed (four routes × five editions); all 4,560 URLs are unchanged. The custom regression checks route allowlist, English body deltas, translated dates and headings, page/FAQ metadata, search-summary parity, sitemap scope, SVG structure, diagram rights data, unchanged photo bytes and unchanged Brisbane pages.

This is a technical and source review, not user acceptance or a deployment sign-off. No browser/headless/CDP, local server, external whole-site crawler, integration branch or deployment was used. Desktop/mobile render, interaction behavior, independent translation review, future closures/service conditions, and separate reuse rights for the original diagram remain unverified or unknown as described above.
