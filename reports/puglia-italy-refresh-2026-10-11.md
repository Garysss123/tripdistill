# Puglia regional hub and field-guide refresh — 11 October 2026

## Scope and route choice

This bounded refresh covers the existing Puglia hub and its three children:

- /italy/puglia/
- /italy/puglia/bari-trani-castel-del-monte/
- /italy/puglia/alberobello-itria-valley/
- /italy/puglia/lecce-otranto-gallipoli/

The sprint branch started at d753950d55d055c100cededbfcba39e2afb54a49 (codex/integration-sprint-20261011) and uses codex/sprint-it-01-20261012. Florence/Pisa/Lucca was not selected because the hub and routes had already received substantive copy and route work in the recent Florence batches 79/80. Rome was excluded as already complete. Puglia remained a clear four-page gap: the old hub and guides repeated a broad corridor description and generic base notes, with little distinction between Bari's street grid, remote Castel del Monte access, inhabited Itria districts, or Lecce's walkable core versus the two separate Salento coasts. Selection was based on source-body comparison, not date or card excerpts.

## Editorial changes

The hub now distinguishes Bari and the Adriatic railway, the separate FS Sud Est branch system, the inland Itria Valley, and the coastal last mile. Its stay guidance compares a two-base four-to-six-night visit with north-only or south-only three-night choices, distinguishes rail-oriented Bari Centrale/Murat from Bari Vecchia and waterfront, and explains when a rural masseria or valley overnight needs confirmed luggage and evening transport. Seasonal copy gives heat, beach demand, weekday/Sunday/holiday differences and service notices as planning constraints; the fallback is a complete walk in the current base.

Each child now has three mutually exclusive route choices, explicit access and trade-offs, a four-stage itinerary, a same-base fallback, a realistic duration/combine note, date-specific booking checks, and its own stay/walk/booking/season plan:

- Bari/Trani/Castel del Monte separates Bari's old-town-to-waterfront walk, Trani's station-to-harbour route, and the remote fortress's independent return transfer.
- Alberobello/Itria distinguishes the visitor-facing Rione Monti from inhabited Aia Piccola, uses Santa Lucia as an orientation point, and only adds a second valley town after checking both timetable edges.
- Lecce/Otranto/Gallipoli maps Piazza Sant'Oronzo and the Roman core, Via Umberto I and Santa Croce, then Piazza Duomo; it treats Otranto and Gallipoli as opposite-coast branches and keeps the city and one selected coast as separate day shapes.

The source retains official destination and operator links. It does not invent fares, headways, fixed journey durations, beach operations or admission guarantees. The reader is directed to the dated journey planner and the current venue/transfer notices for the selected travel date.

The editorial floor was compared with the existing Japan pages: /japan/osaka/ for a hub's real overnight-area and route-day choices, and /japan/osaka/namba/ for station-aware walking zones and short/fallback options. These are source-content comparisons only.

## Official-source and image review

Place descriptions and current decision points were checked against:

- [Italia.it — Puglia](https://www.italia.it/en/puglia), [Bari](https://www.italia.it/en/puglia/bari), [Trani](https://www.italia.it/en/puglia/trani), and [Lecce](https://www.italia.it/en/puglia/lecce) for destination context, the Monti/Aia Piccola distinction, Lecce's central landmarks and the two coastal settings.
- [UNESCO — Trulli of Alberobello](https://whc.unesco.org/en/list/787/) for the protected-site context.
- [FS Sud Est](https://www.fssudest.it/) and [Trenitalia](https://www.trenitalia.com/en.html) as the official date-specific rail/bus planning sources. The content sends readers back to the operators for actual departures, replacement service, stop and return; it promises no specific schedule.
- [Italy's Ministry of Culture — Castel del Monte](https://cultura.gov.it/luogo/castel-del-monte) for the fortress visit context.

The three existing Commons assets were inspected at pixel level and their exact source pages checked; all remain because both image and licence match their intended subject:

| Route | Exact source and creator | Declared licence |
| --- | --- | --- |
| Bari / hub | [Puglia bari old-town.jpg](https://commons.wikimedia.org/wiki/File:Puglia_bari_old-town.jpg) — Francesco Di Stefano 08 | CC BY-SA 4.0 |
| Alberobello | [Alberobello, trulli (13).jpg](https://commons.wikimedia.org/wiki/File:Alberobello,_trulli_(13).jpg) — Palickap | CC BY-SA 4.0 |
| Lecce | [Lecce from the air.jpg](https://commons.wikimedia.org/wiki/File:Lecce_from_the_air.jpg) — Joolz | CC BY-SA 2.5 |

The manifest's source URL, creator, licence and file identity were checked against those pages. No image was substituted and no licence exception or validation guard was changed. This is a three-image, four-route review, not a clearance of the remaining Italy/site image inventory.

## Files and verification

The four English pages are regenerated from the Puglia source data; the Italy card excerpt, search records, visible/structured review dates and all five sitemap route editions are synchronized. Four new reviewed page batches provide 160 strings each in Traditional Chinese, Japanese, Korean and Thai. The four revised search titles and summaries (eight strings per locale) are already covered by reviewed page keys, so no separate search-only batch was needed; an empty delta was rejected by the existing validator and was not retained. The old Puglia source batch's retired strings were pruned: 97 stale keys per locale (388 total).

The final checks passed:

- Four locale page batches passed exact-key validation and sample review: 160 new strings per locale, 282 unique source keys across four routes, 122 keys reused from earlier batches and zero missing. Search-title/summary translations resolve through the reviewed page batches; no separate search delta exists.
- npm run i18n:prune-stale found zero stale keys after removing the retired strings from the original Puglia batches.
- npm run audit:italy passed for 20 hubs, 60 guides, 81 English/405 localized routes and the 60 licensed Italy images.
- npm run test:italy-puglia-date-sync passed for the four routes across five locales. It also confirms Rome remains 2026-10-04 and all other unchanged Italy routes remain 2026-09-26.
- npm run test:i18n-search-guards, npm run test:photo-license-guard and npm run test:site-image-provenance passed. The photo inventory regression passed; it records 539 used site assets without an independent source-page check, none of the three Puglia assets reviewed here.
- Full npm run audit passed. Its translation audit checked 218,964 reviewed targets; all four catalogues have 54,741 current strings and zero stale entries. The site audit verified 4,560 localized routes and 955 search records per language.
- npm run build passed: 5,463 files, including 4,577 HTML and 797 images, with all 4,560 sitemap routes verified.
- git diff --check passed.

The Italy source crawler could not complete an automated response check: Node fetches repeatedly returned transient fetch failed results and hung on official endpoints. Those results do not establish dead links. The specific Puglia facts and source/license claims above were checked against the named official pages individually, but the crawler's link-response result remains unverified in this environment. The Italy HTTP smoke check was skipped because it requires a running server and this task prohibits server use.

No local server, browser/headless/CDP session, Cloudflare action or deployment was used. Desktop/mobile rendering, overflow and interaction review remains for the parent workspace's formal cloud-browser review. This is not editorial acceptance or deployment approval.

Desktop/mobile render, overflow and interaction review remains for the parent workspace's formal cloud-browser review. This record is not editorial acceptance or deployment approval.
