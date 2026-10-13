# Vietnam caves and islands gaps — content review, 13 October 2026

## Scope and historical check

This source refresh starts at `d779848fbc247042561cfaa34773257122aa38d0`, parent of `codex/sprint-vn-caves-islands-gaps-20261013`. It covers only these four existing paths:

- `/vietnam/phong-nha-ke-bang/hang-en-expedition/`
- `/vietnam/phong-nha-ke-bang/son-doong-expedition/`
- `/vietnam/phu-quoc-southern-islands/ganh-dau-bai-thom/`
- `/vietnam/phu-quoc-southern-islands/national-park-suoi-tranh/`

The visible `#main-content` fingerprints at the initial atlas commit `8a1ada3b4021d077fd468c9c318d91823177c0cb` match the exact base for all four pages. The current bodies add 2,481 visible English words in total (+651, +612, +614 and +609 respectively). Per-page counts and SHA-256 fingerprints are recorded in `vietnam-caves-islands-gaps-coverage-2026-10-13.json`.

## What changed

**Hang En** now has a practical three-night Phong Nha plan around the listed two-day/one-night expedition: briefing night, operator trip and a post-return night, with a fourth night for a separate public cave visit or a tight onward transfer. The page makes the operator’s fitness and medical screen, date/authorization confirmation, pickup, guide-led stream and cave stages, and no-self-entry boundary explicit. If the expedition is unavailable or unsuitable, it directs readers to a separate, currently managed daytime visitor route or a town day.

**Son Doong** separates a public cave day from the remote multi-day expedition. It gives Dong Hoi-to-Phong Nha transfer and briefing handoffs, a written-confirmation checklist, fitness/medical screening, guided-only entry and an itinerary that leaves recovery and return time. Oxalis’s current page has a material duration conflict: its product block/FAQ say 6 days/5 nights while the URL says 4D3N. The article reports that conflict and says to obtain the exact departure, operator authorization, included nights and return plan in writing before buying connecting transport. The seven-night planning margin is conditional on confirmation of the 6D5N product; it is not represented as a guaranteed schedule.

**Gành Dầu–Rạch Vẹm–Bãi Thơm** now splits the north-island day into a western Gành Dầu/Rạch Vẹm branch or a north-eastern Bãi Thơm branch. It recommends keeping a 3–4-night central-west stay as the base, considering a northern overnight only for a five-night-plus stay after confirming services, and agreeing both road legs before departure. It treats current road time, public buses, trail/beach access and local services as unverified; barriers and private access are not route alternatives.

**Suối Tranh** now makes the half-day visit conditional on confirmation of the actual public gate, marked path and round-trip pickup. It keeps the same central-west base and leaves the afternoon flexible. Official pages reviewed do not establish current hours, fees, trail length, guide requirements, swimming safety or cave access. The fallback is to return to base or use a confirmed town activity; no cave or unmarked forest route is suggested.

The editorial comparison is source-content-only against Japan’s same-tier local guides: [`Fushimi Inari & Sake District`](/japan/kyoto/fushimi-inari-sake-district/) for separate route versions, transport handoffs and a lower-demand option; [`Namba`](/japan/osaka/namba/) for base choice, route order, geographic branches and the trip home. Namba’s actual guide separates four zones, compares staying near different stations, orders a full-day and short-visit route, and plans the last leg home. This batch applies that planning depth to distinct rural access constraints. No browser viewport or rendered visual comparison was performed.

## Official checks and operating limits

All checks below were made on 13 October 2026. An official general destination page is not treated as a current access authorization.

- [Oxalis Hang En product](https://oxalisadventure.com/tour/hang-en-adventure-cave-camp/) lists a guided 2D1N trip, ages 16–70, a moderate rating, a December-to-mid-September season, trekking experience, a fitness benchmark and medical review. These are the operator’s published terms, not a universal park rule. Exact dates, available places, current authorization, pickup and return remain to be confirmed with the operator.
- [Oxalis Son Doong product](https://oxalisadventure.com/tour/son-doong-cave-expedition-4d3n/) currently states that Oxalis is the licensed expedition operator and lists a 6D5N product, ages 18–70, January–August dates and demanding screening; the same URL says 4D3N. The article attributes the licensing statement to Oxalis and does not generalize it into an independently verified legal ruling. Exact permit basis, schedule, space, included nights and return must be confirmed directly in writing.
- [Phong Nha–Ke Bang Tourism Center](https://phongnhatourism.com.vn/) publishes separate managed visitor routes. These do not grant access to Hang En or Son Doong and are presented only as lower-demand alternatives with their own current access rules.
- [Vietnam Tourism’s Phu Quoc nature guide](https://vietnam.travel/things-to-do/phu-quoc-nature) supplies general northern-forest, road and stream context. It does not verify a live road, trail, beach entrance, opening, fee or water-safety condition.
- [Phu Quoc National Park’s overview](https://vqgpq.angiang.gov.vn/tong-quan-vuon-quoc-gia-phu-quoc) provides the official conservation context but does not publish the Suoi Tranh gate, route, fee, guide or same-day closure status. These remain unknown in this review.
- [Vietnam’s National Centre for Hydro-Meteorological Forecasting](https://www.nchmf.gov.vn/) is linked for date-specific rain and storm checks; a forecast is not a route-opening notice.

No instruction describes bypassing a barrier, using an unmarked approach, entering a restricted cave independently, or treating a public trail as cave authorization.

## Translation and traceability

Traditional Chinese, Japanese, Korean and Thai have separate reviewed `caves-islands-gaps` page and search batches. Each locale has 203 fresh page keys and 25 fresh search keys; existing shared keys are reused. Translation provenance states that the same available model workflow performed the translation and self-review; there was no independent second-model or human review. Generated localized pages/search indexes are build outputs under ignored locale directories; the reviewed batches and merged catalogs are the tracked source for them.

The global translation audit had 340 stale keys in 16 older reviewed batches. Before removing those obsolete source keys, exact base-blob copies, byte counts and hashes were archived in `data/i18n/archive/vietnam-caves-islands-gaps/2026-10-13/`. Only keys absent from all current active sources were pruned; the regression confirms all current translations in those files are byte-for-byte unchanged. The earlier per-locale page batch was also archived when renamed to a uniquely sorted `caves-islands-gaps` name, preserving its still-active keys. Draft batches were not cleared.

## Technical scope and limitations

The tracked English search index changes exactly four records. All five editions retain 955 search records and 4,560 sitemap URLs; exactly the 20 selected route/edition `lastmod` dates are set to 13 October 2026. Translation coverage moves from the preceding **87/99** substantive English routes to **91/99**, leaving eight. Separate coastline and bay batches are not included in this count.

The exact-scope regression is `npm run test:vietnam-caves-islands-gaps-refresh` and is included in the full `npm run audit` chain. Full audit/build results and commit evidence are recorded in the final task response and the linked coverage JSON. No `main` update or deployment was performed. UI acceptance remains unverified: no headless browser, CDP, local server or external HTTP crawler was used, as directed.
