# Scottish Highlands & Pembrokeshire UK route refresh — 12 October 2026

## Scope and body changes

Started from `88844ac65e457923d22876232be8a4c4c49948b7` and the existing `codex/integration-sprint-20261011`, on `codex/sprint-uk-19-20261012`. Belfast source `a4f0f697` was integrated at `c978c1bc`; Birmingham was already integrated. A body-level audit of all 20 existing UK hubs and 60 children found exactly two groups without the requested current operational treatment: Scottish Highlands and Pembrokeshire/West Wales, each with its existing hub and all three children. The other 18 checked groups are London; Oxford/Cotswolds; Cambridge/East Anglia; Bath/Bristol/Somerset; Cornwall/Devon; Kent/Sussex; Birmingham/West Midlands; Peak District; Liverpool/Manchester/Chester; Yorkshire; Lake District/Cumbria; North East/Northumberland; Edinburgh/Lothians; Glasgow/Clyde; Scottish Islands; Cardiff/South Wales; North Wales/Eryri; and Belfast/Northern Ireland. Their completed bodies and integrations were left intact. No route was added.

The English pages now make lodging duration and base choice explicit, name station-to-street walks and rail/coach corridors, distinguish city walking zones from remote coast or mountain transfers, and give a seasonal booking check plus a complete low-risk fallback. The country page’s existing UK overview excerpt also changes to reflect the reviewed Pembrokeshire base trade-off; this is not a new route.

The table compares visible text inside each rendered English `#main-content` at the base with the current source HTML. It counts Unicode word-like text tokens, including headings, route cards, sources and captions. This records the scale of the body revision; token count was not used as an editorial completion test.

| Existing route | Base tokens | Current tokens | Change |
|---|---:|---:|---:|
| [`/united-kingdom/scottish-highlands/`](../united-kingdom/scottish-highlands/) | 1,073 | 1,561 | +488 |
| [`/united-kingdom/scottish-highlands/inverness-loch-ness/`](../united-kingdom/scottish-highlands/inverness-loch-ness/) | 1,209 | 1,635 | +426 |
| [`/united-kingdom/scottish-highlands/glencoe-fort-william/`](../united-kingdom/scottish-highlands/glencoe-fort-william/) | 1,222 | 1,589 | +367 |
| [`/united-kingdom/scottish-highlands/aviemore-cairngorms/`](../united-kingdom/scottish-highlands/aviemore-cairngorms/) | 1,171 | 1,561 | +390 |
| [`/united-kingdom/pembrokeshire-west-wales/`](../united-kingdom/pembrokeshire-west-wales/) | 1,071 | 1,750 | +679 |
| [`/united-kingdom/pembrokeshire-west-wales/st-davids-coast/`](../united-kingdom/pembrokeshire-west-wales/st-davids-coast/) | 1,182 | 1,743 | +561 |
| [`/united-kingdom/pembrokeshire-west-wales/tenby-caldey-coast/`](../united-kingdom/pembrokeshire-west-wales/tenby-caldey-coast/) | 1,191 | 1,722 | +531 |
| [`/united-kingdom/pembrokeshire-west-wales/aberystwyth-ceredigion/`](../united-kingdom/pembrokeshire-west-wales/aberystwyth-ceredigion/) | 1,221 | 1,732 | +511 |

## Dated operating facts checked

- The [Scottish Citylink 919 timetable](https://www.citylink.co.uk/media/1xop3hz4/fort-william-inverness-web.pdf) links the Inverness and Fort William corridor and identifies an Urquhart Castle stop on listed departures. The guide requires checking that day’s stop and return; it claims no fixed headway or future departure.
- [Historic Environment Scotland’s Urquhart Castle page](https://www.historicenvironment.scot/visit/all/urquhart-castle/plan-your-visit/) showed the 12 October 2026 October window as 09:30–17:00, last entry one hour before close, and advance online parking reservation. This is dated information, not a future promise. The page describes the A82/Drumnadrochit approach and steep access route.
- The [National Trust for Scotland Glencoe page](https://www.nts.org.uk/visit/places/glencoe) showed visitor-centre facilities at 09:30–17:00 on the checked date. The guide preserves a Fort William street/museum day if weather, transport or the centre does not suit; it does not treat an A82 stop as a trailhead.
- [Cairngorm Mountain’s travel page](https://www.cairngormmountain.co.uk/getting-here/) lists Stagecoach Aviemore Adventurer service 30 between Aviemore and the mountain area. The diagram separates this from Rothiemurchus, whose last mile is not assumed to be the same bus. Check the dated timetable, operating status, path conditions and final return. No fare or headway is asserted.
- [Pembrokeshire County Council’s coastal bus list](https://www.pembrokeshire.gov.uk/bus-routes-and-timetables/bus-routes-list-coastal-buses), checked on 12 October 2026, lists summer routes 400/403/404 through 27 September. The reduced winter 387/388 service runs from 1 October 2026 to 28 May 2027 on Thursdays and Saturdays between Pembroke, Angle, Bosherston, Stackpole and Freshwater East. It does not reach St Davids or Tenby. The St Davids guide does not invent a replacement coast bus or advise walking the A487 verge; use only a confirmed local transfer and return.
- [Caldey Island’s visitor page](https://caldeyislandwales.com/visiting-caldey) said the island was closed for the 2026 season and would reopen at Easter 2027. The 2026 season ended on 30 September; 2027 sailing dates and operating hours are not yet established here. Sailings remain weather dependent.
- [Aberystwyth Cliff Railway’s timetable](https://aberystwythcliffrailway.co.uk/timetable-and-prices) listed 10:00–17:00 daily from April through October, with reduced November–mid-March hours. The [Vale of Rheidol Railway](https://vor.wales/) listed daily service through 1 November 2026, a 24-mile round trip to Devil’s Bridge taking 2h45, and date-specific booking. Recheck the exact operating date and return before travel.

These pages were checked individually. The automated whole-site UK source crawler was not run. Future timetables, local coast feeder services, fares, exact headways, weather and future attraction calendars remain for live verification where the text says so.

## Images and diagrams

All six existing WebPs in the two targeted groups were viewed at their local 1600 × 1066 pixels and matched their visible subject. The retained provenance and SHA-256 values are:

| Route subject | Local asset | SHA-256 | Source review |
|---|---|---|---|
| Inverness Castle / River Ness | `united-kingdom-scottish-highlands-inverness-loch-ness.webp` | `435069bab24d6343bea3e78031b28dfdf1eac63c01cfe53fae2e2acd3aa7c3cb` | Exact [Commons file page](https://commons.wikimedia.org/wiki/File:Inverness_Castle_and_River_Ness_Inverness_Scotland_-_conner395.jpg) was accessible; its dave conner / CC BY 2.0 declaration matches the existing credit. |
| Glencoe mountain and cottage | `united-kingdom-scottish-highlands-glencoe-fort-william.webp` | `2d001ec5e043529a43cb818b13ceff81271f7686ea9a63767158934d9fc21455` | Pixel subject matches; the declared [Commons source page](https://commons.wikimedia.org/wiki/File:The_Foot_of_Glencoe_(16237514495).jpg) could not be retrieved in this environment, so its existing creator/license credit is not newly source-page verified. |
| Aviemore / Cairngorms | `united-kingdom-scottish-highlands-aviemore-cairngorms.webp` | `4b6c75530bbd18100d6929d22a5ba4b1f91e714e69ac6620561e3b2fcec6c38e` | Retained unused. Commons declares CC0 1.0, but embedded EXIF says duplication requires written permission. Replaced on the live route with the project-original diagram pending resolution. |
| St Davids Cathedral | `united-kingdom-pembrokeshire-west-wales-st-davids-coast.webp` | `bea76637a913ffa9ae5c4267e3177ea76cf1852acc4593de4a4ec0d8b58a7093` | Retained unused. The [Commons file page](https://commons.wikimedia.org/wiki/File:St_Davids_Cathedral_Wales_Pembrokeshire.jpg) declares Aqwis / CC BY-SA 3.0, while embedded EXIF user comments name “(c) Trygve B. Wiig.” Replaced on the live route with the project-original diagram pending resolution. |
| Tenby harbour | `united-kingdom-pembrokeshire-west-wales-tenby-caldey-coast.webp` | `92f7d5053f320d0b63472838936df7cb651fe396e4df080ef2fd1c6eb084f134` | Pixel subject matches; the declared [Commons source page](https://commons.wikimedia.org/wiki/File:Tenby,_Pembrokeshire,_Wales_(3493504312).jpg) could not be retrieved in this environment, so the existing creator/license credit is not newly source-page verified. |
| Aberystwyth seafront | `united-kingdom-pembrokeshire-west-wales-aberystwyth-ceredigion.webp` | `e738884e7bf4b56ee5937027bd0ac1505f4e615f0a50ea361bc4875e6027d5d0` | Pixel subject matches; the declared [Commons source page](https://commons.wikimedia.org/wiki/File:Promenade,_Aberystwyth_-_geograph.org.uk_-_2568817.jpg) could not be retrieved in this environment, so the existing creator/license credit is not newly source-page verified. |

The unused Cairngorms and St Davids source files remain in place, unmodified, and are excluded from `dist`; their manifest entries retain the original paths, source declarations, conflict descriptions and SHA-1 hashes. Two original five-language SVG planning diagrams replace them live, with localized English, Traditional Chinese, Japanese, Korean and Thai legends. Inkscape rendered each at 1600 × 1066 for pixel inspection; both show their route choices, seasonal/return gates and “not to scale” treatment within the canvas. They are project originals with no separate reuse license declared; the visible Terms link identifies provenance, not a public reuse grant.

No claim of uploader authority, chain-of-title or independent legal clearance is made. The separately protected pending Cotswolds image was not accessed.

## Languages, search and route dates

The eight existing routes and the existing `/united-kingdom/` overview excerpt are synchronized across English, Traditional Chinese, Japanese, Korean and Thai. Each localized edition has 61 newly owned page strings, one country-card excerpt string and 51 search strings; locale page batches also cover the diagram alt text, captions, attribution and edit notes. Writer and reviewer provenance records GPT-6 Luna with same-model self-review. There was no independent second-model or external human translation review.

All 40 localized route pages for the eight routes carry `2026-10-12` as visible and structured modification dates; their 40 sitemap entries carry the same `lastmod`. The 8 English search summaries and their route-specific terms appear once in each locale’s search index. UK route date regression now counts the earlier completed 9+3, 12+4 and 18+6 review groups plus this integrated 21+7 group; the full UK total remains 20 hubs, 60 children and 81 English routes.

To restore zero-stale global i18n coverage after replacing route copy, the exact-reference stale-key pruner removed 25 old Scottish Highlands, 28 old Pembrokeshire/West Wales and 3 old London strings per locale (224 values across four locales). It first confirmed those source keys are absent from every current English route. No current translation source key was removed.

## Verification and limitations

Final verification passed:

- `npm run audit`: all four translation catalogs have 55,581 current strings with zero missing/stale values; the static audit checks 4,560 published pages and 955 search records per language. Photo inventory confirms zero active source/credit gaps and three retained local-only rights-review photos.
- `npm run build`: 5,466 files (4,577 HTML, 800 images); all 4,560 sitemap routes verified, with 14,534 files of configured headroom remaining.
- UK19 date check: 80 source/build page editions over eight routes and 40 localized sitemap entries dated 12 October 2026. UK19 search check: 80 source/build route records plus the country overview card excerpt across five locales. UK19 SVG/photo check: both diagrams, image alt/caption/rights/edit notes in all locales, unmodified originals preserved in the workspace and absent from `dist`.
- The full audit includes UK structure/date and Belfast, Birmingham, Kent/Sussex, Peak District regressions; France date sync; Malaysia Cameron, Langkawi, Melaka, photo schematic and fourth-child regressions; China route dates and CN14B; and UK Lake District/Somerset diagrams. Separate source/build UK date/search checks also passed for Cornwall, Oxford/Cotswolds, Bath/Somerset and Liverpool/Manchester/Chester.
- Compared with base `c978c1bc`, source sitemap size remains 4,560; there are zero added/deleted URLs and exactly 40 `lastmod` changes for the eight routes in five locales. `git diff --check` is clean.

Writer and reviewer remain GPT-6 Luna with same-model self-review; no independent second-model or external language review is claimed. Browser UI inspection, keyboard/interaction review, a local website server, whole-site UK source crawling and deployment were not part of this source-only task.
