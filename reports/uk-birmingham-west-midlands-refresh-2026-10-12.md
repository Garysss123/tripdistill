# Birmingham & the West Midlands four-route review — 12 October 2026

## Scope and route selection

This source-only review starts from integration base `3769d734027712baf9a6c31880dfaba11e149cd3` on `codex/integration-sprint-20261011`, on the isolated branch `codex/sprint-uk-17-20261012`. It updates four existing URLs only:

| Route | Rendered `<main>` words before → after | Net change |
| --- | ---: | ---: |
| `/united-kingdom/birmingham-west-midlands/` | 1,099 → 1,960 | +861 |
| `/united-kingdom/birmingham-west-midlands/birmingham-canals-jewellery-quarter/` | 1,223 → 1,323 | +100 |
| `/united-kingdom/birmingham-west-midlands/stratford-shakespeare/` | 1,226 → 1,338 | +112 |
| `/united-kingdom/birmingham-west-midlands/ironbridge-shrewsbury/` | 1,218 → 1,401 | +183 |

Counts use whitespace-delimited text nodes under the English `<main>` in generated HTML, against the same route files at the exact base above. Net addition: **1,256 rendered words** across the four bodies. The country overview keeps its existing route and displays the revised Birmingham card excerpt; no URL was added.

The route/data history was checked before selection. Birmingham's hub and three children still carried the initial collection copy. The other untouched families visible in the existing UK map were Scottish Highlands, Pembrokeshire & West Wales, and Belfast & Northern Ireland. Kent & Sussex was excluded because its separate source update is already complete on the pending `8a2dd9035b818ec86a44d2e840b2aee3a3630450` branch; Peak District was excluded because its refresh is already in this integration base. Neither group was repeated here.

## What changed

The hub gives a practical one-base decision: two nights for one full Birmingham day; three for the city plus either Stratford or Ironbridge; four for the city and both separate excursions but no weather spare; five for a buffer or second city day. It differentiates New Street/Grand Central for mainline arrival and the civic core, Moor Street for the Stratford rail branch and Bullring side, and Snow Hill/Jewellery Quarter for the west-side tram and workshop district. It names the complete Stratford and Ironbridge connections and warns that Telford Central and Telford bus station are separate stops.

The Birmingham child creates a bounded New Street–Victoria Square–Chamberlain Square–Library/Centenary Square–Brindleyplace–Gas Street Basin walk, with a short towpath section and a street-level return. The Jewellery Quarter is a separate Metro branch only when its timed museum tour fits; Digbeth is left for another day. The Stratford child builds around one booked Trust house or an RSC performance, then Henley Street, Waterside and the Avon. It distinguishes the station's roughly ten-minute walk from the separate 30–35-minute walk to Anne Hathaway's Cottage and protects the show-night return. The Ironbridge child requires a Telford Central–Telford bus station–Arriva 8/8A transfer, one named Gorge site cluster and a saved return; Shrewsbury remains the rail-simple fallback.

The same-level content comparison used the rendered source HTML of [`/japan/osaka/`](/japan/osaka/) as a regional hub reference and [`/japan/osaka/namba/`](/japan/osaka/namba/) as a local guide reference. Osaka's hub compares four lodging areas and groups routes geographically; Namba names its distinct stations, Exit 10, market arcade, alleys and canal sequence. Birmingham now gives its own station, district, walking sequence and last-mile decisions rather than reusing the same generic operating paragraph on every child. This was a source/HTML text and structure comparison only; no browser or visual acceptance is claimed.

## Current official checks

Official operator and venue pages were checked individually on 12 October 2026. Their dated status is a snapshot and must be reopened for the travel date. No fare, headway, future service, ticket inventory or opening guarantee is asserted.

- [TfWM Birmingham local-area maps](https://www.tfwm.org.uk/plan-your-journey/discover-the-west-midlands/local-area-maps/) and its [journey planner](https://www.tfwm.org.uk/plan-your-journey/) show the separate rail, bus and Metro networks and current map layer.
- [National Rail journey planning](https://www.nationalrail.co.uk/journey-planner/) and [West Midlands Railway timetables](https://www.westmidlandsrailway.co.uk/travel-information/timetables) are linked for the exact Stratford, Telford and Shrewsbury date/return. The Shakespeare Birthplace Trust's [getting-here page](https://www.shakespeare.org.uk/visit/plan-your-visit/getting-here/) describes Stratford station as about a ten-minute walk from town and Anne Hathaway's Cottage as a separate 30–35-minute walk. The Trust's [visit planner](https://www.shakespeare.org.uk/visit/plan-your-visit/) showed Hall's Croft and Mary Arden's Farm closed on the checked date. The RSC's [theatre guide](https://www.rsc.org.uk/your-visit/our-theatres/) and [arrival guide](https://www.rsc.org.uk/your-visit/getting-here/) support the Waterside theatre choice.
- The [Birmingham Museum & Art Gallery visit page](https://www.birminghammuseums.org.uk/birmingham-museum-and-art-gallery/visit) listed selected galleries open while the level-two Art Galleries and level-three Ancient History Galleries were closed; general admission was listed as free without booking, with some paid events. The [Museum of the Jewellery Quarter](https://www.birminghammuseums.org.uk/museum-of-the-jewellery-quarter/visit) listed Thursday–Sunday timed guided tours and advised advance booking. Both conditions can change.
- The [National Trust Ironbridge Gorge page](https://www.nationaltrust.org.uk/visit/shropshire-staffordshire/ironbridge-gorge) places Telford Central 4.5 miles from the Gorge and listed the Museum of the Gorge and Darby Houses as closed on the checked date. [Arriva's 8/8A service page](https://www.arrivabus.co.uk/services/AMN_TD_8) and [Ironbridge bus overview](https://www.arrivabus.co.uk/midlands/bus-travel-in-ironbridge) show the Telford–Ironbridge–Broseley corridor. The guide leaves exact stop, service time and return as date-specific checks. [English Heritage's Iron Bridge directions](https://www.english-heritage.org.uk/visit/places/iron-bridge/directions/) is linked for bridge access. The [Canal & River Trust Birmingham Canal Main Line page](https://canalrivertrust.org.uk/canals-and-rivers/birmingham-canal-main-line) is linked for towpath status.

The source-status caveats above are intentionally attached to the claims; they are not promises that every venue or connection will be available on a future date. The sitewide UK source crawler was not run.

## Images

All three retained 1600×1066 WebP files were inspected at pixel level. The local subjects match their manifest descriptions and the exact Commons pages below; declared creators and license versions match those page records.

| Route image | Visible subject and page declaration | Local SHA-256 |
| --- | --- | --- |
| `united-kingdom-birmingham-west-midlands-birmingham-canals-jewellery-quarter.webp` | Gas Street Basin; David Hallam-Jones; [CC BY-SA 2.0](https://commons.wikimedia.org/wiki/File:Gas_Street_Canal_Basin,_Birmingham_-_geograph.org.uk_-_3627856.jpg) | `85f8b534f30baca4a1531193f75a1f490ce90ffc37a7d89221a934362f444ea0` |
| `united-kingdom-birmingham-west-midlands-stratford-shakespeare.webp` | Royal Shakespeare Theatre by the Avon; Rept0n1x; [CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:Royal_Shakespeare_Theatre,_Stratford-upon-Avon_from_across_the_river_-_DSC08980.JPG) | `d799a13148cfeb216ff6f35ac6d128ec674cd2019c491d905e10270c1c071c38` |
| `united-kingdom-birmingham-west-midlands-ironbridge-shrewsbury.webp` | Iron Bridge over the Severn; Colin; [CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Ironbridge_2014.jpg) | `13137798d1047c878f5989d399fc9cf633869bcb1b8332dbe7965a0abb868281` |

No image conflict was found, so no replacement or manifest edit was needed. Source-page declarations and pixel matching do not establish uploader authority, chain of title or legal rights clearance. Existing UK SVGs were unchanged.

## Localization, dates and verification

Each of the four routes and the overview card/search entry is present in English, Traditional Chinese, Japanese, Korean and Thai. The new reviewed page batch supplies 101 previously uncovered page strings per locale; the additive search batch supplies four updated Birmingham summaries per locale. Translation and editorial self-review were performed in-model with GPT-6 Luna; no independent second-model or human translation review is claimed. Stale cleanup removed 85 obsolete Birmingham strings and one obsolete shared Birmingham-card string from each locale's older batches (344 stale values total); global translation audit reports zero missing or stale catalog entries.

The four route article schemas and localized visible review notes use `dateModified` 2026-10-12 while `datePublished` stays at the established 2026-09-20 baseline. Exactly the 20 localized sitemap entries for these four routes use `lastmod` 2026-10-12. Other UK route article dates were unchanged. No existing UK SVG was changed.

Passed checks:

- `npm run audit` — full static audits and 4,560-page / 955-record-per-language site checks passed.
- `npm run build` — generated 5,464 files (4,577 HTML and 798 images); all 4,560 sitemap routes verified.
- `npm run test:uk-birmingham-dates` — 40 source/dist page editions plus 20 unique localized sitemap entries.
- `npm run test:uk-birmingham-search` — 40 source/dist records across five editions.
- `npm run test:united-kingdom-route-dates`, `test:uk-cornwall-dates`, `test:uk-oxford-dates`, `test:uk-bath-dates`, `test:uk-liverpool-manchester-dates`, `test:uk-liverpool-manchester-search` and `test:uk-peak-district-dates`.
- `npm run test:china-cn14b`, `test:united-kingdom-lake-diagrams`, `test:united-kingdom-somerset-diagram`, `test:france-date-sync`, `test:malaysia-cameron-route-dates`, `test:malaysia-langkawi-route-dates`, `test:i18n-search-guards`, `test:photo-license-guard`, `test:site-image-provenance` and `audit:photo-license-inventory`.
- `git diff --check`.

No restricted sitewide source crawl, browser/UI render, local server, deployment or production acceptance was run. The repository's visual release gate remains for the parent workspace. This record is source-level evidence, not editorial acceptance of the rendered UI, legal photo-rights clearance or an AdSense verdict.
