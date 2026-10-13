# Vietnam coastal gaps content refresh — 13 October 2026

## Scope and body evidence

This source-only batch updates four routes on `codex/sprint-vn-coastal-gaps-20261013`, based on `d779848fbc247042561cfaa34773257122aa38d0`. Before counting them, the Parse5-visible `#main-content` body at that base was compared with the initial atlas `8a1ada3b4021d077fd468c9c318d91823177c0cb`. Each body hash matched its atlas hash, so all four were substantively untouched at the requested base.

The same visible-body measurement excludes navigation, scripts, styles, SVG, ad slots, the `.sources` section and visible review-date text. It records these changes:

| Route | Base words | Current words | Added words | Body change |
| --- | ---: | ---: | ---: | --- |
| `/vietnam/mekong-delta/ca-mau-u-minh-ha-cape/` | 571 | 1,362 | +791 | Separates U Minh Hạ peat forest and Đất Mũi mangrove coast into daylight visits. Uses Cà Mau City as the initial base and makes a remote Đất Mũi night conditional on a confirmed bed, access and return. If any are unknown, visit one landscape only. |
| `/vietnam/mui-ne-binh-thuan/phan-thiet-poshanu-heritage/` | 590 | 1,242 | +652 | Separates working fishing-port boundaries from a verified public waterfront and keeps Pô Sah Inư on its own heritage stop. Explains the Phan Thiết city base versus a Mũi Né extension and leaves any second coast day conditional on confirmed public access. |
| `/vietnam/mui-ne-binh-thuan/phu-quy-island/` | 579 | 1,323 | +744 | Sets out a conservative five-night mainland-to-mainland plan (one night before, three on-island, one after), one island base, and a six-night weather-slack option. Requires date-specific ferry confirmation and a protected mainland return buffer; if the vessel is cancelled, stay or extend lodging rather than improvising a crossing. |
| `/vietnam/mui-ne-binh-thuan/ta-cu-ke-ga-coast/` | 561 | 1,227 | +666 | Separates the Tà Cú mountain day from a conditional Kê Gà landing, compares Phan Thiết and Mũi Né bases, and sets three nights for two full outings. If boat, tide, access or return is unconfirmed, skip the landing and use only a mainland stop with independently verified access. |

The route order and transfer handoffs are explicit in each guide. Timetables, fares, current opening hours, operator availability, island transport, swimming conditions and access permissions are identified as unverified where the sources did not establish them. The body hashes and counts are recorded in `vietnam-coverage-ledger-20261013.json` and checked by `scripts/test-vietnam-coastal-gaps-refresh.mjs`.

## Source checks and limits

- Vietnam Tourism’s [Phú Quý overview](https://vietnam.travel/things-to-do/phu-quy-vietnam-island-destination) supports Phan Thiết as the mainland departure, no island airport, a general 2.5–3.5 hour vessel range, and named locations. It does not provide a date-specific timetable, safe-return assurance or current island transport.
- The [Superdong ticket portal](https://online.superdong.com.vn/) was reachable, but no Phú Quý departure for a selected travel date was verified in this review. It is linked as the operator’s portal, not as proof of availability.
- Vietnam Tourism’s [Bình Thuận page](https://vietnam.travel/places-to-go/south-central-coast-central-highlands/binh-thuan) now describes the former coastal province as part of Lâm Đồng. It provides regional context, not current Tà Cú or Kê Gà operating status.
- The [National Center for Hydro-Meteorological Forecasting](https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html) published a dated regional marine bulletin for 13 October 2026. It is not a route-specific launch decision or landing permission.
- The Cà Mau government’s [U Minh Hạ page](https://english.camau.gov.vn/destinations/u-minh-ha-national-park-287845) timed out; the VNAT Cà Mau article at `https://vietnamtourism.gov.vn/en/post/20634` had no readable article. The Phú Quý local tourism portal at `https://phuquy.binhthuan.gov.vn/du-lich` timed out. VNAT pages for [Tà Cú](https://vietnamtourism.gov.vn/en/post/4617) and [Kê Gà](https://vietnamtourism.gov.vn/en/post/1308) were not readable. These pages were not bypassed; the guides mark current access and operations unverified.
- The UNESCO result returned 404 and the Ramsar result returned 502. Neither was used to assert a current status.

## Translation and indexing

All four guides received new Traditional Chinese, Japanese, Korean and Thai text, including accommodation plans, sequence, fallback choices, source notes and review dates. Each locale has 156 fresh page keys and 22 fresh search-keyword translations; the shared “Choose one landscape” source key keeps its earlier reviewed owner rather than gaining a duplicate owner. English search data changed only on the four target records. Sitemap `lastmod` changed only on those four routes across English, zh-Hant, ja, ko and th editions (20 paths); the 4,560-URL set remains unchanged.

Translation provenance records same-session GPT-6 Codex translation and same-model self-review, with `independentSecondModel: false`; it does not claim independent or human review. Twenty-four reviewed translation batch files containing inactive keys were copied byte-for-byte from the exact base into `data/i18n/archive/vietnam-coastal-gaps/2026-10-13/`, hashed in its manifest, and only keys absent from active translation work were pruned. Earlier batch history and the previous coverage checkpoint remain preserved.

## Coverage and verification

The prior checkpoint was 87/99. This batch adds four verified substantive routes, yielding 91/99 and leaving exactly eight routes in the ledger. The previous full southern-gaps ledger is preserved as `previousCheckpoint`.

Verification passed: `npm run audit` (including the Vietnamese audit, all Vietnam sprint regressions, translation audit, cross-region regressions and final 4,560-route site audit), `npm run build` (5,496 files; 4,560 sitemap routes verified in `dist`), `npm run test:vietnam-coastal-gaps-refresh`, `npm run test:integration-sprint-scope` and `git diff --check`. The branch remains source-only; no main integration or deployment was performed. No browser rendering, headless browser, CDP session or local server was used, so visual and device-level UI acceptance is unverified.


## Integration checkpoint

The approved GitHub ref `codex/integration-sprint-20261011` was fetched at `efdfa902ed6c7241750379a860cad97ef3a9962a`, following cumulative audit baseline `a014412eceb30efae51894be3b6167debaa96ca3`. Source terminal `5e945277ca36e11a26ce8744ca9c6abb9970139d` (parent `d779848fbc247042561cfaa34773257122aa38d0`, tree `e7c08a81d0ee8829656d1862a54ad783230239f5`) is integrated by commit `68707bc780b58a141746b749551f42093a9e4ef4` (parent `efdfa902ed6c7241750379a860cad97ef3a9962a`, tree `751b800428fe2e236eefe229a45cca119dc03ba5`). The integration retains the exact four source route bodies and adds 2,853 visible English main-body words. The source-only coastal ledger remains 91/99 for its own branch checkpoint. On the cumulative integration branch, Vietnam was 95/99 before this batch and is 99/99 after it; the corrected site ledger moves from 902/907 to 906/907. The separate Phong Nha group is included in that cumulative count, not attributed to this four-route batch.

The combined integration scope is 421 changed English bodies, 2,100 sitemap dates across 420 routes × five editions, and 377 changed English search records. All five editions retain the exact 4,560-URL inventory, 912 pages and 955 search records per locale; each translated catalog has 61,718 required strings with zero missing or stale entries. Full `npm run audit` passed. `npm run build` produced 5,501 files (4,577 HTML, 825 images; 329.5 MiB), verified the sitemap and left 14,499 files of Cloudflare Pages headroom. These checks do not establish rendered desktop/mobile or reading-order acceptance. No `main` update or deployment was performed.
