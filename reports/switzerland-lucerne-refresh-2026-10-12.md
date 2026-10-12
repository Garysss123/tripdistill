# Lucerne hub and field guides — 12 October 2026

## Scope and comparison

This source-only batch starts from `a014412eceb30efae51894be3b6167debaa96ca3` on `codex/integration-sprint-20261011` and is prepared on `codex/sprint-ch-02-20261012`. Switzerland's existing 65-route collection has 16 hubs and 48 focused guides. The base already contains the Zurich hub and its three children, updated on 8 October; this batch selects the previously untouched Lucerne hub and its complete three-guide cluster. It changes no URL and does not rewrite the country overview.

The four existing routes are the [Lucerne, Pilatus & Rigi hub](../switzerland/lucerne-lake-mountains/), [Lucerne Old Town & Lakefront](../switzerland/lucerne-lake-mountains/old-town-lakefront/), [Pilatus: Summit & Round-Trip Logic](../switzerland/lucerne-lake-mountains/pilatus-round-trip/) and [Rigi & Lake Lucerne Circuit](../switzerland/lucerne-lake-mountains/rigi-lake-circuit/). Against the exact base, rendered English `<main>` text adds 506, 473, 577 and 564 whitespace-delimited words respectively (2,120 total). Those counts describe the change; they are not an editorial pass by themselves.

The same-level reference was read directly from `japan/index.html`, `japan/osaka/index.html` and `japan/osaka/namba/index.html`. Their actual source content informed the Lucerne night/base trade-offs, named transfers, district-by-district walk, return logic and weather alternatives. This was a source-content comparison. No browser, screenshot or desktop/mobile rendering was used, so rendered UI acceptance remains unverified.

## What changed

- The hub distinguishes two nights for one intact city block plus one mountain day, three nights for a movable buffer, and four nights for both mountain systems. It compares the station/Bahnhofquai edge with the old-town evening base and explains the additional luggage handling of the latter.
- Transfer chains are named and kept separate: VBL bus 1 from Lucerne station stand A to Kriens, Zentrum Pilatus, then the signed five-minute walk; SBB S5 or a seasonal pier-2 boat to Alpnachstad; and, for Rigi, the Lucerne–Vitznau boat plus cogwheel railway versus SBB to Arth-Goldau plus the Arth-Rigi railway.
- The old-town guide sequences Bahnhofquai, Chapel Bridge, Kornmarkt/Weinmarkt, Hirschenplatz, Spreuerbrücke, the Musegg wall subject to current access, Jesuit Church and the lakefront. It includes shorter and wet-weather choices.
- The Pilatus and Rigi guides make the ascent/descent choice explicit, protect the final return, separate summit walking from the transport loop, and name lower-elevation alternatives when visibility, wind, maintenance or seasonal service makes the summit a poor choice.

## Official checks and limits

Official pages were checked on 12 October 2026. Pilatus' [arrival information](https://pilatus.ch/infos) lists bus 1 from Lucerne station stand A to Kriens, Zentrum Pilatus, followed by a five-minute walk; it lists S5 to Alpnachstad and a seasonal boat from pier 2. That page lists 17 minutes by S5, and a 50–90 minute boat trip operating May–October. Its [live notices](https://pilatus.ch/en/live/disturbances) recommended cogwheel seat reservations in good weather and listed the Kriens panorama gondolas/cable car as closed for maintenance 19 October–27 November 2026, with access during that notice period only by cogwheel from Alpnachstad. Those are dated operator snapshots, not guarantees for a future travel date.

Rigi's [arrival page](https://www.rigi.ch/en/inform/arrival) identifies several valley gateways, and its [timetable page](https://www.rigi.ch/en/inform/timetables) publishes separate, date-bounded schedules for Vitznau and Goldau. The page showed autumn/winter and later timetable periods when checked. The copy therefore directs readers to the exact-date live timetable instead of promising departures, fares, transfer durations or availability. The [SBB planner](https://www.sbb.ch/en), [Lake Lucerne Navigation](https://www.lakelucerne.ch/en/) and [MeteoSwiss](https://www.meteoswiss.admin.ch/) are linked for current rail, boat and mountain-weather checks; this review does not certify a future schedule or forecast.

## Image and rights record

The three local WebPs were viewed at pixel level at 1600 × 1066. The Chapel Bridge pixels match the [Commons source page](https://commons.wikimedia.org/wiki/File:Chapel_Bridge_GFgf814.jpg) and its Gillfoto / CC BY-SA 4.0 declaration. The Pilatus pixels match [the Commons source page](https://commons.wikimedia.org/wiki/File:Luzern_-_Mount_Pilatus_-_March_2019_(01).jpg) and its Liridon / CC BY-SA 4.0 declaration. These source-page and visible-pixel checks do not establish uploader authority, chain of title or independent legal clearance.

The former Rigi hero pixels show the Bürgenstock/Felsenweg viewpoint, contradicting the old Mount Rigi alt. Its WebP is retained unchanged (SHA-1 `f4d0669944063db98152960cb4a93581732ec470`) and removed from all live displays; its source-page CC BY-SA 4.0 statement remains explicitly unverified metadata in the retired record. An original route-choice SVG replaces it. The diagram is marked as conceptual and not to scale, and the legend is visible in all five editions wherever the diagram is displayed. Its SHA-1 is `8b45fae5724444f48aa928e3225dacc232efc382`; the manifest records TripDistill Editorial Team authorship, the exact source URL, and “no separate reuse license declared.” The inventory treats reuse eligibility as unknown rather than asserting a public license.

## Localization, search and validation

Each of the four routes is synchronized into English, Traditional Chinese, Japanese, Korean and Thai. The reviewed page batch in each non-English locale owns 100 new strings; 127 earlier route keys are reused, with zero missing after approval. GPT-6 Luna produced and self-reviewed the translations in one model workflow; no independent second model, human or external review is claimed. The old Lucerne batch's 80 obsolete keys per locale were removed only after the global stale-key scan identified them. The existing country-overview card and its earlier reviewed translation remain unchanged. Final stale-key scan: zero.

The four English search summaries changed, and all route-specific keywords were preserved. Localized summaries reuse the reviewed page translations; no separate search-only batch was needed. Article `dateModified` and visible review dates are 12 October 2026, while `datePublished` remains 12 September 2026. Exactly 20 sitemap `lastmod` entries changed (four routes × five editions); comparison with the exact base found all 4,560 URLs unchanged.

`npm run build` passed: 5,467 files, including 4,577 HTML pages and 801 images, with all 4,560 sitemap URLs verified. `npm run audit` passed, including i18n/search/photo guards; Switzerland, France/France dates, UK dates/search, Malaysia Cameron/Langkawi/Melaka/fourth-child, China route dates/CN14B, UK Lake and Somerset diagrams, the photo inventory and site audit. The added `npm run test:switzerland-lucerne-refresh` passed its five-locale source/dist, canonical/hreflang, structured-date, search-summary, SVG/retired-photo and exact-base sitemap checks. `git diff --check` passed.

No whole-site restricted source crawler, browser/headless/CDP, local server, deployment or production action was run. This is source-level editorial work with recorded operator snapshots, not UI acceptance, a live travel guarantee, independent image-rights clearance or deployment approval.
