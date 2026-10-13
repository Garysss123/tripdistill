# Mekong Delta route content refresh — 13 October 2026

## Scope and body-history evidence

This source-only batch starts at `75c8caf79053a67cf645a53bed215a72eff07baf` on `codex/sprint-vn-after-hcmc-20261013`. It updates exactly four routes still uncovered in `vietnam-coverage-ledger-20261013.json`: the Mekong Delta hub, Cần Thơ/Cái Răng, Châu Đốc/Sam Mountain/Trà Sư, and Bến Tre’s coconut islets. The four HCMC pages and the earlier Saigon River Waterbus page were not selected.

The body fingerprint was the Parse5-visible `#main-content` text, excluding navigation, scripts/styles/SVG, ads, `.sources` and visible review-date phrases. For every selected path, the 75c8 base body hash equals the initial-atlas hash, so none had a substantive body change before this batch.

| Route | Words before | Words now | Added visible words |
| --- | ---: | ---: | ---: |
| `/vietnam/mekong-delta/` | 1,124 | 1,886 | 762 |
| `/vietnam/mekong-delta/can-tho-cai-rang/` | 563 | 1,020 | 457 |
| `/vietnam/mekong-delta/chau-doc-sam-tra-su/` | 568 | 1,120 | 552 |
| `/vietnam/mekong-delta/ben-tre-coconut-islets/` | 561 | 1,078 | 517 |

The exact initial, base and current SHA-256 body hashes are recorded route-by-route in the [Vietnam coverage ledger](vietnam-coverage-ledger-20261013.json). Coverage moves from 55/99 to 59/99 substantive routes; 40 remain.

## Decisions added

- **Hub:** choose one 2-night base in Cần Thơ or Bến Tre; use 3 nights for one Bến Tre night plus two Cần Thơ nights; use 5 nights to add two nights in Châu Đốc. Cà Mau remains a separate, longer corridor.
- **Cần Thơ:** arrive the previous day, confirm the exact quay, boat, pickup and return, and give the dawn market its own morning. A second local day is for one garden/islet, not a checklist. The official market page’s 05:00–08:00 busy-period note is a planning cue; its general opening-time field is ambiguous and neither field is presented as a live boat schedule.
- **Bến Tre:** keep a single island or canal loop; sleep near a host-confirmed pickup. One night protects the local morning; two nights add a slower cycle or weather margin. If the local landing, ferry, workshop or return is unconfirmed, switch to a mainland plan and keep the overnight. Mỹ Tho and Cần Thơ remain separate road legs.
- **Châu Đốc:** allow two nights from a nearby Delta base or three from Ho Chi Minh City / when splitting Sam Mountain and Trà Sư across days. Treat arrival as transit. Check same-day site and boat access; if rain, water level or closure stops the wetland visit, stay in town or add a night. A sightseeing boat is not assumed to be a Cambodia border service.

These route choices were compared at the source-content level with the same-hierarchy Japan examples in `japan/hokkaido/index.html` and `japan/hokkaido/otaru-shakotan/index.html`: base and night-count trade-offs, geographically grouped day plans, and explicit return, weather and closure decisions. This comparison does not constitute pixel or browser review.

## Official sources and limits

All readable pages below were checked on **13 October 2026** and used only for broad, explicitly dated orientation:

- [Vietnam Tourism: 4 Memorable Days in the Mekong Delta](https://vietnam.travel/things-to-do/4-memorable-days-mekong-delta) — route-level orientation for Ben Tre and the lower Delta, including an example ferry/island route; it is not a current ferry notice or timetable.
- [Can Tho Tourism: Cái Răng Floating Market](https://canthotourism.vn/en/chocairang) — gives a 05:00–08:00 busiest-period cue and a static approximate boat orientation from Ninh Kiều. Its general opening-time field is ambiguous; no current departure, fare or schedule is asserted.
- [Vietnam Tourism: Châu Đốc](https://vietnam.travel/places-to-go/mekong-delta/chau-doc) — broad road/river access orientation, an approximate road-time note, and a September–November seasonal attraction note. These do not establish a live timetable, border eligibility, traffic time or park opening.
- [National Center for Hydro-Meteorological Forecasting](https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html) — the dated official forecast/warning source to check again for the actual travel date; it is not used to claim route-specific weather conditions.

The official [Vietnam Tourism Ben Tre page](https://vietnam.travel/places-to-go/southern-vietnam/ben-tre) and [An Giang tourism site](https://dulich.angiang.gov.vn/en/) could not be read through the review tool. No workaround was attempted. Current local ferry frequency/fare, venue openings, visitor access and same-day operator status remain **unknown until confirmed directly**; the copy does not present them as facts.

## Translation and archive record

The four localized editions have actual reviewed translations for this batch in Traditional Chinese, Japanese, Korean and Thai. After accounting for three shared editorial notices already translated in the preceding HCMC batch, each locale batch contains 82 unique new source keys; the remaining 159 route keys are supplied by earlier reviewed batches. `npm run i18n:batch`, natural-context sampling and the repository i18n audit were run. Translation writing and self-review used the same model/session; the batch metadata explicitly records `independentSecondModel: false`. No independent second-model or human review is claimed.

Before pruning, the four superseded Mekong translation-batch snapshots were copied byte-for-byte to `data/i18n/archive/vietnam-mekong/2026-10-13/` and SHA-256 checked against its manifest. The four affected active batches each had 62 stale keys removed (248 total); no draft batches were included or edited.

## Verification and review boundary

Verification passed: `npm run audit` (including i18n, Vietnam audit, body-history regression, sitemap/date checks and all site regressions) and `npm run build`. The build produced 5,494 files (4,577 HTML and 821 images) and verified all 4,560 sitemap routes. This sprint regression confirms four unchanged English search records, 955 search records per locale, all five-edition canonical/hreflang/Article dates, exactly 20 updated localized sitemap dates, and an unchanged 4,560-URL set.

No SVG was added. No headless browser, CDP, local server, or HTTP site crawl was used. HTML/CSS visual acceptance remains pending. This branch is not merged to `main` and is not deployed.
