# Margaret River & Southwest remaining-guide refresh — 13 October 2026

## Scope and exact base

This source-only batch is on `codex/sprint-au-margaret-remaining-20261013`, created directly from exact base `a99fbe9fe996ccedbac42b1b9386447a11403854`. It revises exactly these four existing child routes:

- `/australia/margaret-river-southwest/busselton-dunsborough/`
- `/australia/margaret-river-southwest/cape-naturaliste-coast/`
- `/australia/margaret-river-southwest/boranup-caves-augusta/`
- `/australia/margaret-river-southwest/albany-torndirrup/`

The Margaret River & Southwest hub and Margaret River Wine & Food guide are unchanged. Against the exact base, the English rendered `<main>` text grows by +1,117, +1,118, +1,075 and +1,144 whitespace-delimited words respectively (+4,454 total), excluding related cards, source lists and advertising. The matched local-guide reference, `/japan/hokkaido/otaru-shakotan/`, has 1,030 words under the same extractor; the revised guides contain 1,437, 1,456, 1,421 and 1,472 words. This is a source/markup comparison, not a rendered-browser review. The substantive Australia-route ledger moves from 80/97 to 84/97. No URL was added or removed.

## Route choices added

**Busselton & Dunsborough** now selects Busselton for a Jetty/foreshore-first stay and Dunsborough for the Cape Naturaliste start, with a two-night single-base default and a practical one-night restriction. It distinguishes a walk on the Jetty, its train and the Underwater Observatory as separate products; adds their check-in, ticket, luggage and access decisions; and treats Transwa SW1 as a dated regional town coach whose last mile still needs a booked ride. It does not combine the timed Jetty activity and headland into an assumed same-day circuit.

**Cape Naturaliste** distinguishes the 130 km Class 4 Cape to Cape Track from a day walk. It compares the lighthouse and museum, a short marked headland section, and the 3.4 km one-way Class 2 track to Sugarloaf Rock (about 6.8 km on foot as an out-and-back). The tower's 59 steps, route surface, return pickup, open-track check, wind and fire decisions are explicit. The fallback is a permitted lighthouse/visitor-centre visit or a confirmed town meal, subject to current access, not an unprotected beach or road-shoulder walk.

**Boranup Caves & Augusta** anchors the southern day on one booked Jewel Cave tour, rather than combining every cave and coast stop. It sets the approximately 45 km drive from Margaret River and separates the cave's stairs, tour time and mobility needs from the karri walk and Augusta leg. Ngilgi is described as a separate northern choice with its own 350-step/Ancient Lands access considerations. If cave or forest access closes or the road/weather removes the outdoor plan, the alternative is to use the existing base or a confirmed indoor/town activity; a late cross-region drive is not the fallback.

**Albany & Torndirrup** is explicitly a separate far-south leg rather than a Margaret River day trip. It compares two nights (transfer, then one chosen activity day) with three nights (separating the National Anzac Centre and coast), and treats Transwa GS1/GS2/GS3 as coach corridors that do not solve the Torndirrup last mile. The park choice is among the Gap/Natural Bridge platforms, Stony Hill's shorter walk and the much longer Bald Head hike, with effort and exposure made distinct. The guide requires daylight, named local transport, park/track, swell/wind, fire and road checks, and gives a shorter town or indoor option if exposure or a closure removes the coast.

## Official references and limits

The guide citations link official operators, land managers and government information reviewed on 13 October 2026. Conditions such as openings, tours, coach schedules, trail status, fire, road closures, wind and swell are explicitly date-dependent and are not represented as currently verified for a future trip.

- Busselton Jetty's [visitor information](https://busseltonjetty.com.au/visitor-information/) and [admission/access information](https://busseltonjetty.com.au/admission/), [Transwa SW1](https://transwa.wa.gov.au/plan-your-journey/coach-lines/sw1), [Bureau of Meteorology WA forecasts](https://www.bom.gov.au/wa/forecasts/) and [Main Roads WA travel information](https://www.mainroads.wa.gov.au/travel-information/).
- DBCA/Explore Parks WA's [Cape Naturaliste page](https://exploreparks.dbca.wa.gov.au/site/cape-naturaliste-lighthouse) and [park planning/alerts](https://exploreparks.dbca.wa.gov.au/plan-your-activity), the [Capes Foundation lighthouse access page](https://www.capesfoundation.org.au/visit-experiences/cape-naturaliste-lighthouse/), SW1, BOM and Main Roads.
- Explore Parks WA's [Jewel Cave](https://exploreparks.dbca.wa.gov.au/site/jewel-cave) and [Ngilgi Cave](https://exploreparks.dbca.wa.gov.au/site/ngilgi-cave) pages, the Capes Foundation's [Jewel Cave](https://www.capesfoundation.org.au/visit-experiences/jewel-cave/) and [Ngilgi Cave](https://www.capesfoundation.org.au/visit-experiences/ngilgi-cave/) visitor pages, park alerts, SW1, BOM, Main Roads and [Emergency WA](https://www.emergency.wa.gov.au/).
- Explore Parks WA's [Torndirrup National Park](https://exploreparks.dbca.wa.gov.au/park/torndirrup-national-park), the [National Anzac Centre visit page](https://www.nationalanzaccentre.com.au/visit), [Transwa GS1](https://www.transwa.wa.gov.au/plan-your-journey/coach-lines/gs1), [TransAlbany timetables](https://www.transregional.wa.gov.au/Timetables/TransAlbany), BOM, Main Roads and Emergency WA.

The Leeuwin–Naturaliste-specific official page returned HTTP 406 to the review tool; that response was not bypassed. General official park planning pages are cited for date-of-travel checks, not as a substitute claim about a live Leeuwin–Naturaliste status. The restricted Australia-wide HTTP source crawler was not run.

## Translation, search and dates

Each of the four English route pages has direct Traditional Chinese, Japanese, Korean and Thai translations. Each locale's reviewed page batch contains 226 strings and its reviewed search batch contains 28 strings. Batch validation checked locale, exact route scope, nonblank strings and route-summary mapping; sitewide locale script, translation coverage and i18n audits were also run. The old reviewed batches were pruned of 384 now-obsolete strings (95 Margaret keys and one Melbourne key per locale); draft batches were left untouched. These are same-assistant/model-family self-reviews, not independent review. The requested GPT-6 Luna runtime was not verifiable in the selected environment; provenance records the exact runtime ID as unverified.

Four English search summaries and their route keywords were revised. Visible review dates, Article `dateModified` values, localized search summaries and all 20 route/language sitemap `lastmod` values are synchronized to 13 October 2026. The search record count remains 955 and the sitemap remains exactly 4,560 URLs.

## Verification and limits

- `npm run audit` passed end to end, including all translation coverage, Australia route checks and cumulative route-history regressions. The Australia structural audit reports 16 hubs, 80 field-guide routes, 97 English routes, 485 five-language routes and 97 search records. The separate substantive editorial ledger is 84/97 after this batch.
- `npm run build` passed and verified all 4,560 sitemap routes. Build output: 5,475 files, including 4,577 HTML pages and 809 images.
- `npm run test:australia-margaret-remaining` passed exact route scope, protected hub/wine page, Japan/Otaru content floor, five-language copy/search/date parity, unchanged sitemap URL set, and byte-preserved prior arrow SVGs.
- Existing cumulative Australia checks pass with their expected-route ledger extended for the new batch; `git diff --check` passes.
- The two arrow corrections are retained byte-for-byte from parallel correction commit `768151d3f42378358c122a1cde55100fcec9eafa`: `assets/images/australia-kangaroo-island-regional-days.svg` and `assets/images/australia-kings-park-entry-choice.svg`. This batch added no SVG or other image.

No headless browser, CDP session, local server, HTTP site crawler or security-setting change was used. Desktop/mobile rendering, interaction behavior, visual layout and pixel appearance remain unverified. No integration/main merge or deployment is part of this batch.

## Integration checkpoint

The source terminal is `5578d6da740ca9d7ec07fca6c7eed65cc67868e8` on `codex/sprint-au-margaret-remaining-20261013`, with parent `a99fbe9fe996ccedbac42b1b9386447a11403854` and tree `c46575bcc9e3e10db68863a79919f8878c29d04f`. The integration branch was fetched before continuing; its verified tip was `f2a2aa1d9aaab0151a6bd75dfc31c907c63afb28`, the direct parent of the local New England checkpoint. The four Margaret routes add to the cumulative baseline-relative scope of 346 changed English bodies, 1,725 sitemap dates across 345 routes × five editions, and 307 English search records. The exact 4,560-URL set is unchanged. Full `npm run audit` passed with 60,423 required strings in each translated catalog and zero missing or stale entries; every edition has 912 pages and 955 search records. `npm run build` passed, producing 5,498 files (4,577 HTML, 825 images; 327.1 MiB) and verifying all 4,560 sitemap routes. The final integration commit and remote readback are recorded in the task handoff.

The static checks do not claim browser/rendered UI acceptance, `main` update or deployment.
