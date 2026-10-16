# Peak District & Derbyshire refresh — 12 October 2026

## Scope and selection

This source branch starts at `75cf57d5a2700a8b4b9e881e942a80a8c4f9c260` (`codex/integration-sprint-20261011`) and is named `codex/sprint-uk-15-20261012`. The selection review found Yorkshire already refreshed in `94d68fe4`; Peak District & Derbyshire was an existing UK hub and three-child cluster whose body had not been refreshed in the current cycle. No URL was added.

The four focused routes are:

- `/united-kingdom/peak-district-derbyshire/`
- `/united-kingdom/peak-district-derbyshire/bakewell-chatsworth/`
- `/united-kingdom/peak-district-derbyshire/hope-valley-edale/`
- `/united-kingdom/peak-district-derbyshire/dovedale-ashbourne/`

The United Kingdom country overview also receives the regenerated Peak District card excerpt and its localized card translation. A parse5 comparison of rendered `<main>` text against the exact base measured net increments of +854 words on the hub, +689 on Bakewell & Chatsworth, +652 on Hope Valley & Edale and +716 on Dovedale & Ashbourne: +2,911 total. The overview-card excerpt is a generated side effect, not a fifth guide route.

For structure, the editorial pass compared the actual `<main>` text in the existing [Hokkaido hub](/japan/hokkaido/) and [Asakusa & Ueno guide](/japan/tokyo/asakusa-ueno/). The comparison covered regional base choices, named rail/bus use and walk sequencing. No desktop/mobile or browser comparison was performed.

## Planning changes

The hub now treats the Peak District as three day systems: Hope Valley railheads and exposed ridges; the Sheffield–Chatsworth–Bakewell bus corridor; and the southern dales/Ashbourne access. Sheffield is the rail-first one-base option. Buxton shortens a southern-dales day but adds a separate connection to Edale; Bakewell has no station; village lodging reduces a morning approach but depends on thinner evening service. The copy counts full field days explicitly: three nights usually allows two; four nights allows three area days but no weather spare; five nights gives four full days and a buffer.

The child routes name Northern's all-stations Hope Valley service, TM Travel 218, Chatsworth's separately operated 170, 160 and 58 links, the National Trust's current Buxton–Ashbourne stop-day description, and advance-bookable Derbyshire Connect. Walks are bounded by a chosen railhead, stop or return point. The itinerary separates the ridge from estate and dale days, makes the stepping-stone crossing optional, and gives a lower valley, Ashbourne/Tissington Trail or town fallback. Seasonal guidance covers exposed wind/cloud, mud, short daylight, differing bus days, timed estate tickets and pre-booked community transport.

## First-party checks made for this batch

Pages below were opened on 12 October 2026. These checks confirm the cited page statements as displayed at that time; they do not certify future operation.

- [Chatsworth transport directions](https://www.chatsworth.org/visit-chatsworth/visitor-information/how-to-get-here/) lists TM Travel 218 from Sheffield via Bakewell and the 170/160/58 connections from Chesterfield, Matlock and Buxton, with different operating days. It also describes current seasonal open-top operation and advises checking live stops, dated schedules and event parking. The guide does not invent a future departure or fare.
- [Chatsworth ticket options](https://www.chatsworth.org/visit-chatsworth/book-tickets/ticket-options/) describes day-ticket and guided-tour seasons; ticket price and date availability are dynamic, so neither is stated as fixed.
- [Northern timetables](https://www.northernrailway.co.uk/travel/timetables), [East Midlands Railway's Hope Valley page](https://www.eastmidlandsrailway.co.uk/routes-destinations/community-rail-lines/hope-valley) and [National Rail journey planning](https://www.nationalrail.co.uk/journey-planner/) support the distinction between Northern's all-stations Hope Valley service and EMR express trains that skip the village stations. Exact trains, fares and engineering changes remain date-specific.
- [National Trust Ilam Park, Dovedale and the White Peak](https://www.nationaltrust.org.uk/visit/peak-district-derbyshire/ilam-park-dovedale-and-the-white-peak) currently describes Buxton-to-Ashbourne bus access, a Thorpe stop on Monday–Saturday and a different Ilam village stop on Sundays and bank holidays; its page gives no route number. It notes the Thorpe approach walk, uneven surfaces, steps/stiles and the optional stepping-stones path. The guide does not assert an unverified route distance or a one-way/return interpretation.
- [Ashbourne Community Transport](https://www.ashbournect.org.uk/derbyshire-connect) gives Derbyshire Connect booking notice and Saturday phone cut-off rules. A future date's slot/availability was not queried.
- [Travel Derbyshire](https://travelderbyshire.co.uk/journey/) is the current county journey-planner link used in place of the retired `derbysbus.info` host. [Peak District National Park visitor planning](https://www.peakdistrict.gov.uk/visiting/planning-your-visit) and the [Met Office Peak District mountain forecast](https://www.metoffice.gov.uk/weather/specialist-forecasts/mountain/peak-district) support live path/access and mountain-weather checks.

No exact future fare, bus departure, open date, timed-ticket availability, future community-bus seat, or live disruption state is represented as known. Travelers are directed to check the operator and official venue for their own date.

## Photo pixel and source-page review

Each retained local image was opened at original resolution and inspected directly. All three local files are 1600×1066 WebP. Exact Commons page declarations, source links, license links and crop/resize/WebP notes are in the UK guide data and rendered photo credits. The remote dimension below is the dimension shown by the Commons source page. Source-page declarations are not independent proof of uploader authority, chain of title, or an external legal clearance.

| Route/image | Visible pixels | Commons page declaration checked | Local SHA-256 |
| --- | --- | --- | --- |
| Bakewell & Chatsworth — `assets/images/united-kingdom-peak-district-derbyshire-bakewell-chatsworth.webp` | Chatsworth House across the lawn; 1600×1066 | [Chatsworth House — Geograph 2191619](https://commons.wikimedia.org/wiki/File:Chatsworth_House_-_geograph.org.uk_-_2191619.jpg): Trevor Rickard; photograph dated 22 Oct 2010; source 1024×768; CC BY-SA 2.0 | `2a3244056de970439536fdb2ec7dc900b55737f740a0b24f5e76ba4f8a928d5f` |
| Hope Valley & Edale — `assets/images/united-kingdom-peak-district-derbyshire-hope-valley-edale.webp` | Great Ridge path and moorland; 1600×1066 | [Mam Tor from the Ridge path](https://commons.wikimedia.org/wiki/File:Mam_Tor_from_the_Ridge_path_-_Flickr_-_Donnchadh_H.jpg): Donnchadh H; photograph dated 17 Apr 2025; source 5568×3712; CC BY 2.0 | `51ee576227008e088d4cc13482ad72cb6bf466fe16e477180aac6e16f714981b` |
| Dovedale & Ashbourne — `assets/images/united-kingdom-peak-district-derbyshire-dovedale-ashbourne.webp` | River Dove stepping stones and Thorpe Cloud; 1600×1066 | [Dovedale — River Dove — Thorpe Cloud — Stepping Stones](https://commons.wikimedia.org/wiki/File:Dovedale_-_River_Dove_-_Thorpe_Cloud_-_Stepping_Stones_(15041656340).jpg): Elliott Brown, Birmingham, UK; photograph dated 5 Sep 2014; source 3072×2304; CC BY-SA 2.0 | `849284a263f633b6d4468f15d51f2bd672f39111dcc949c2a02e37082562ec3c` |

The excluded Cotswolds image was not retried and is outside this batch.

## Language, search and dates

The four pages and generated country card are synchronized in English, Traditional Chinese, Japanese, Korean and Thai. GPT-6 Luna reviewed the actual locale page and search translations; this is in-model translation review, not an external human review. After integration, each locale Peak District page batch supplies 112 fresh keys and reuses two date/review strings already reviewed in the earlier Liverpool–Manchester batch; each search-index delta supplies four search keys. The final exact-file validators report zero missing route keys. Obsolete source strings were pruned from the older Peak District batch and superseded reviewed copies: 412 stale translated values total (103 per locale). Active translations were retained.

All four route pages have `Article.dateModified: 2026-10-12`, localized visible review dates, and localized sitemap `<lastmod>` values. This is 20 unique sitemap URLs (four routes × five editions); each URL appears once in `sitemap.xml` and once in `dist/sitemap.xml`. The two file copies are not counted as 40 distinct routes. The generated UK overview card also changes, so its sitemap date is 12 October 2026, after the already-dated Yorkshire and Glasgow card edits. The sitemap still has 912 distinct routes (4,560 language URLs).

## Verification

The complete local `npm run audit` passed: i18n catalogs contain 55,221 current strings per locale with zero missing or stale entries; the site audit covers all 4,560 published URLs (912 in each of five editions), 955 search records per language, and unique localized titles. UK structural audit passed for 20 hubs, 60 focused guides, 81 English routes and all 405 UK language routes. Search, photo-license and site-image-provenance guards passed. The combined regenerated photo inventory reports 522 used assets without an independent source-page check and 520 license claims not independently verified; it reports zero active missing attribution matches, zero source metadata conflicts and 24 unmatched assets that are unused. These are whole-inventory limits, separate from the three photo reviews above.

`npm run build` passed and emitted 5,464 files (4,577 HTML and 798 images; 318.7 MiB), verified all 4,560 sitemap URLs, and reported 14,536 files of headroom under the configured Pages file boundary.

The Peak District date regression passed for 40 source/dist page files across four routes and five locales; the 20 unique localized sitemap URLs appear exactly once in each of the source and dist sitemaps and carry `2026-10-12`. The requested additional regressions passed: China route-date metadata, France date sync, Cornwall dates, Oxford/Cotswolds dates, Bath/Bristol/Somerset dates, Cameron Highlands dates, Langkawi dates, China CN14B, Lake District original diagrams, Somerset original diagram, i18n/search guards, photo-license guard and site-image-provenance guard. The full audit also passed photo-inventory regression, Lake diagrams, UK audit and site audit.

No browser, headless renderer, CDP, local server, security scan, deployment or integration/main-branch write was used. Only this source branch is intended for push.
