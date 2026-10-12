# Switzerland CH11 content refresh — 12 October 2026

## Scope and source branch

This source-only batch starts at verified CH10 `a0da2c3b2d27276bc83993b19ae96521798c032b` on `codex/sprint-ch-11-content-20261012`. It activates the next unfinished four-route cluster—St Moritz & Upper Engadin—and leaves the other unactivated English drafts and the Switzerland country-page draft intact. The source still accounts for 40/65 previously refreshed English paths; this batch brings the active reviewed set to 44/65. No sitemap URL was added or removed.

- `/switzerland/st-moritz-engadin/`
- `/switzerland/st-moritz-engadin/st-moritz-lakes/`
- `/switzerland/st-moritz-engadin/bernina-pontresina/`
- `/switzerland/st-moritz-engadin/muottas-diavolezza/`

The hub now gives a two-, three- and four-night base decision and separates the St Moritz valley, Pontresina/Bernina corridor and one high-mountain system. The lake guide selects one signed route toward Lake St Moritz, Lej da Staz or Celerina and explicitly rules out assumed shoreline continuity or ice safety. The rail guide distinguishes the named Bernina Express from a separately planned regional RhB ride and requires a verified turnaround and return. The mountain guide contrasts Muottas Muragl at Punt Muragl with the separate, higher Diavolezza access chain and makes Pontresina/St Moritz the lower fallback.

Rendered English `<main>` copy measured against CH10 grows by **450 words** on the hub, **249** on St Moritz & Engadin Lakes, **289** on Pontresina & Bernina Railway, and **262** on Muottas Muragl/Pontresina/Diavolezza (**1,250 words total**). This counts visible main-area text; it is not an editorial-quality score.

## Official sources and volatile details

Current route facts were checked against the official [RhB Bernina Express page](https://www.rhb.ch/en/panoramic-journeys/bernina-express/), the linked [RhB Bernina Line reservation information](https://www.rhb.ch/en/tickets/bernina-line-reservations/), [SBB](https://www.sbb.ch/en), [Engadin Tourism](https://www.engadin.ch/en/), the [Muottas Muragl operator’s access and hours page](https://www.muottasmuragl.ch/en/directions-and-hours-of-operation), the [Diavolezza operator](https://www.corvatsch-diavolezza.ch/en/mountains/diavolezza), the [Corvatsch–Diavolezza operating page](https://www.corvatsch-diavolezza.ch/en/mountains), [MeteoSwiss](https://www.meteoswiss.admin.ch/) and St Moritz’s [local ice-skating information](https://www.stmoritz.com/en/directory/sports/ice-skating).

The Bernina page, checked 12 October 2026, listed trains 951 and 952 diverted via Vereina from 29 October to 13 November 2026; the Bernina guide labels this as a dated notice and tells readers to recheck the exact train. The Muottas Muragl operator listed a weather-dependent autumn special for 26 October–1 November and a winter hotel season beginning 19 December; the guide distinguishes that seasonal notice from the live funicular status. No fare, headway, ticket entitlement or future service guarantee is asserted.

The direct `audit:switzerland-sources` network check completed with 84 unique official references, all reported as restricted/slow by this shell’s `fetch` (`fetch failed`); it found zero confirmed broken responses and exited successfully. Relevant St Moritz/RhB/Muottas/Diavolezza source pages were separately opened and checked through the browser search workflow. Automated source reachability for those links remains unverified in this execution environment.

## Images, scope protection and validation

All three existing images were inspected at local pixel level. The third is the Muottas Muragl funicular station and track, not a broad panorama; its alt text and visible caption were corrected. The first depicts Lake St Moritz and the town; the second depicts a Bernina train crossing the upper Berninabach bridge. The exact Commons source pages, creators and selected CC BY-SA versions are separately recorded in [the photo review](switzerland-ch11-photo-review-2026-10-12.md). The Commons declarations were checked; independent rights clearance is not claimed. Image bytes are unchanged; no SVG was created.

The English source audit and CH11 regression pass: four unique routes, 20 changed localized sitemap dates (four routes × five editions), 4,560 unchanged sitemap URLs, unchanged publication dates, current Article review dates, matching search summaries, preserved CH10 drafts, no fifth country-page edit, and all non-target Swiss English routes byte-identical to CH10. The five-language regression checks localized summaries, search records, dates, photo-credit prose, inactive drafts and byte-identical non-target Swiss page generation. The full Switzerland audit validates 16 hubs, 48 guides, 65 English routes, 48 credited images and 48 planning instruments.

The four locale batches each contain 153 fresh reviewed translations (244 unique route keys; 91 were already covered by earlier reviewed batches). All 19 title/summary/type/keyword strings affecting these four search records were covered by the page batches or earlier reviewed keys; no empty search delta was created. The locale provenance records GPT-6 Luna as writer and `GPT-6 Luna; same-model self-review`; this is neither independent second-model nor human review. Four older reviewed St Moritz batches each had 108 obsolete keys and 33 current translations; only the obsolete keys were removed, preserving the still-current translations. All four locale catalogs now contain 56,052 required strings with zero missing or stale keys.

`npm run audit` passes, including the Switzerland audit, all CH11 route/date/non-target regressions and the full 4,560-route site audit with 955 search records per language. `npm run build` passes and emits 5,471 files (4,577 HTML and 805 images); all 4,560 sitemap routes are present in `dist`. The separate historical Jungfrau date regression also passes with 185 five-language reviewed-cluster dates through CH11. No SVG was created. The earlier shell source reachability run saw all 84 unique official references fail with restricted/slow `fetch`; it confirmed zero broken responses but does not establish reachability. The relevant official St Moritz/RhB/Muottas/Diavolezza pages were separately checked in the browser search workflow.

No local preview or smoke route test was run for this batch, as requested; an earlier attempt without a local preview was inconclusive and is not route-level evidence. Browser pixel acceptance remains with the mainline workspace. No headless browser, CDP or deployment was used. The verified source branch and remote verification SHAs are recorded after push below.
