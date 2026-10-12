# Switzerland CH12 content refresh — 12 October 2026

## Scope and route choices

This source-only batch starts from exact base `6b34b02cf93b435575e745497564f4b88dac2afa` on `codex/sprint-ch-12-content-20261012`. It selects only the St Gallen & Appenzell hub and its three existing children, avoiding the already refreshed 44 of 65 routes and the other unactivated drafts. Switzerland now has substantive source content on 48 of 65 English paths. The country overview and all other Swiss English articles remain byte-identical to the base.

- `/switzerland/st-gallen-appenzell/`
- `/switzerland/st-gallen-appenzell/st-gallen-abbey/`
- `/switzerland/st-gallen-appenzell/appenzell-village/`
- `/switzerland/st-gallen-appenzell/ebenalp-seealpsee/`

The exact-base visible English `<main>` comparison is 935 → 1,556 words for the hub (+621), 855 → 1,466 for the Abbey guide (+611), 920 → 1,391 for Appenzell (+471), and 874 → 1,571 for Ebenalp/Seealpsee (+697), a 2,400-word increase. Current body counts are evidence of scope, not quality scores. The same-level source comparison used the Japan Osaka hub (about 1,475 rendered main-body words) and Namba guide (about 1,675); St Gallen’s hub now exceeds the hub reference. The three guides are somewhat shorter than Namba but provide route-specific decisions, ordered stages, local context, trade-offs, safety/weather gates, official sources and FAQs rather than generic filler. This was a text/source comparison only, not rendered UI acceptance.

The hub allocates two nights to the Abbey and village and a third night to a flexible mountain-weather day; it explains the St Gallen rail-hub versus Appenzell village-base trade-off. The Abbey guide distinguishes library-first, broader visitor-space and lower-effort plans, with the station’s 5–10-minute walk or bus 11 to Stiftsbezirk. The village guide follows public streets from the station to Landsgemeindeplatz and has the reader choose one date-confirmed museum or mapped public walk. The mountain guide keeps the Ebenalp lift and the Wasserauen–Seealpsee on-foot loop separate; its published loop record is 7.34 km, ±377 m, about 2h30 and SAC T2. It requires an exact-date rail return, a separate check of lift and trail status, and an early lower-elevation fallback.

## Official checks and limits

Official pages were checked on 12 October 2026. The cited schedules, route records and closures are date-stamped snapshots, not promises for future travel:

- [Abbey District opening hours, tickets and access](https://stiftsbezirk.ch/en/opening-hours) and [arrival by public transport](https://stiftsbezirk.ch/en/how-to-get-here): the checked page listed 10:00–17:00 October–June, 10:00–18:00 July–September, last exhibition admission 15 minutes before closing, and closure of the Library, Vaulted Cellar and Exhibition Space from 9–23 November 2026. The arrival page describes a 5–10-minute station walk or bus 11 to Stiftsbezirk.
- [Appenzell official village map](https://www.appenzell.ch/en/appenzell/village-map.html), [museum directory](https://www.appenzell.ch/en/appenzell/museums.html), [Wasserauen–Seealpsee route listing](https://www.appenzell.ch/en/alpstein/hiking/hiking-tour-suggestions.html?cHash=5e7c40dacf6e64b298ddd8c9a1a50488&tx_wstourismus_tourismus%5Baction%5D=show&tx_wstourismus_tourismus%5Bcontroller%5D=Tour&tx_wstourismus_tourismus%5Btour%5D=39), and [mountain-walking safety guidance](https://www.appenzell.ch/en/alpstein/staying-safe-while-on-the-go.html). The checked route record names Wasserauen, Hüttentobel, Klein-/Grosshütten, Seealpsee, Seealp and Chobel; it does not guarantee current trail condition, walking time or individual suitability.
- [Ebenalp cableway operator](https://www.ebenalp.ch/en/welcome): the checked notice listed daily service through 1 November 2026, 07:30–17:30, then a 2 November–24 December revision. Recheck the live operating notice and last useful ascent/descent.
- [SBB](https://www.sbb.ch/en) and [MeteoSwiss](https://www.meteoswiss.admin.ch/) are linked for date-specific rail connections, returns, mountain forecasts and warnings. No future fare, departure, opening, lift operation, ticket availability or reservation is guaranteed.

Weather alternatives are explicit: use a confirmed open Abbey interior, a central Appenzell walk and one confirmed museum, or another checked indoor plan. A clear valley is not treated as an alpine forecast. The mountain guidance says to choose one route system, check its own notices, and turn back before a deteriorating surface or closing connection forces a risky descent.

## Translation, dates and validation

Traditional Chinese, Japanese, Korean and Thai reviewed page batches each add 166 translations for the four routes. The English summaries are synchronized with Article metadata and existing search records; all search keys were already covered, so no empty search delta was added. The four routes receive exactly 20 `lastmod` changes across five language editions. The 4,560-URL sitemap inventory is unchanged. The locale catalogs each merge 56,104 required translations with zero missing or stale entries. The translation and self-review were performed within the same session/model workflow; the runtime did not expose a GPT-6 Luna variant, so this report claims neither Luna nor Luna Max and does not claim independent second-model or human review.

`npm run audit` passes, including the Swiss audit (16 hubs, 48 guides, 65 English / 325 five-language routes), cumulative Swiss cluster regressions, photo inventory, cross-country checks and full site audit. `npm run build` passes: 5,472 files, including 4,577 HTML and 806 image assets; all 4,560 sitemap routes are present in `dist`. The focused CH12 regression checks exact-base non-target page bytes, publication/review dates, English and localized search/article agreement, the exact sitemap date delta and URL inventory, protected Lucerne/Zermatt image hashes, retired photo bytes, SVG XML/geometry and all five color-to-route explanations. `git diff --check` also passes.

No whole-site external source crawler, local server, smoke test, browser/viewport review, headless/CDP check, integration, merge or deployment was performed. Official details can change after the stated check date.
