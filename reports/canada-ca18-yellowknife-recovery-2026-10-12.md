# CA18 recovery: Canada overview and Yellowknife

- Date: 12 October 2026
- Branch: `codex/sprint-ca-18-recovery-20261013`
- Exact base and parent: `5f0713a66f150ca1d7b8d37db9f4439a2d69b530` (`codex/sprint-ca-17-content-20261013`)
- Scope: five existing English routes plus their four localized editions; no route creation or deletion.

## Route reconciliation and body changes

The route ledger below contains the 73 existing Canada URLs, with no duplicates. CA17 had materially refreshed 68; this recovery refreshes the exact five-route complement: `/canada/`, the Yellowknife & Great Slave Lake hub, Old Town & Great Slave Lake, Yellowknife Aurora Planning, and Ingraham Trail & NWT Parks. The country page's regional-card text is supplementary and is excluded from its article body count.

Visible `<main>` word counts against the exact parent:

| Route | Added visible words |
| --- | ---: |
| `/canada/` | 524 |
| `/canada/yellowknife-great-slave/` | 830 |
| `/canada/yellowknife-great-slave/old-town-great-slave/` | 843 |
| `/canada/yellowknife-great-slave/aurora-dark-sky/` | 708 |
| `/canada/yellowknife-great-slave/ingraham-trail/` | 913 |

The country overview now compares an eastern VIA Rail corridor, one-region road trip, and a northern gateway by trip length, connection, weather margin and fallback. Yellowknife distinguishes city transit from the Ingraham Trail highway, plans three-, four- and five-night stays around sleep and daylight, and gives each child route distinct choices and turnarounds. Old Town is described as a lived-in community with public-street and private-dock boundaries. Aurora remains a weather-dependent opportunity, not a guarantee. The Ingraham guide measures its route from Highway 4, sets near and far objectives, and names the return limit and no-facilities endpoint.

The source-level Japan comparison read [`japan/hokkaido/index.html`](../japan/hokkaido/index.html) and [`japan/hokkaido/otaru-shakotan/index.html`](../japan/hokkaido/otaru-shakotan/index.html). The Hokkaido hub compares gateways, nights and rail versus car; Otaru separates the straightforward city rail day from the weather- and last-return-dependent Shakotan branch. CA18 applies those route-choice, transfer and fallback checks to Yellowknife's city/road split. This was a source comparison only.

## Official checks

Official pages were checked on 12 October 2026. Their live schedules, weather, road status, advisories and hours must be checked again for a travel date.

- [City of Yellowknife bus routes and schedules](https://www.yellowknife.ca/transit/routes-and-schedules/) — use the date-specific urban schedule; the city network does not extend as a scheduled shuttle to the Ingraham Trail.
- [GNWT DriveNWT](https://drivenwt.ca/) — current highway and winter-road status for the exact segment.
- [NWT Parks Ingraham Trail](https://www.nwtparks.ca/plan-your-trip/road-trips/ingraham-trail) — Highway 4 route markers begin north of Yellowknife; the route is about 70 km to Tibbitt Lake, Cameron River Crossing is at km 54.5, and Tibbitt has no facilities.
- [NWT Parks operating dates](https://www.nwtparks.ca/visiting-parks/operating-dates) and [park advisories](https://www.nwtparks.ca/visiting-parks/advisories) — seasonal services vary; the 2026 North Slave list gives 15 May–15 September for Prelude Lake and Reid Lake campgrounds, and off-season day-use facilities may not be maintained.
- [Cameron River Crossing day-use area](https://www.nwtparks.ca/find-a-park/cameron-river-crossing-territorial-park-day-use-area) — current access and trail information.
- [Canadian Space Agency aurora viewing tips](https://www.asc-csa.gc.ca/eng/astronomy/northern-lights/aurora-viewing-tips.asp) and [ECCC weather](https://weather.gc.ca/) — darkness, cloud, precipitation, local weather and space-weather indicators; forecasts cannot promise visibility at a specific place or time.
- [Northwest Territories Tourism: Yellowknife](https://spectacularnwt.com/communities/north-slave/yellowknife/) and [Old Town](https://spectacularnwt.com/attractions/yellowknifes-old-town/) — community context.
- [Prince of Wales Northern Heritage Centre visitor information](https://www.pwnhc.ca/en/visit) — current hours and accessibility.
- [Yellowknives Dene First Nation](https://ykdene.com/) — community information; a map pin or drive-by is not permission for a cultural visit.
- Country-level references: [IRCC visitor entry](https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html), [Parks Canada reservations](https://parks.canada.ca/voyage-travel/reserve), [VIA Rail schedules](https://www.viarail.ca/en/plan/train-schedules), and [Parks Canada Wapusk access](https://parks.canada.ca/pn-np/mb/wapusk/visit). Churchill and Yellowknife remain separate northern gateways.

No fare, headway, future opening or aurora display was promised. No broad crawler was run.

## Images and review limits

No image or SVG was added. The existing boat/Old Town, aurora, and Ingraham lakeshore photographs were visually checked against their page subjects; displayed source, creator and license credits were left intact. No photo bytes or image-manifest entries changed. Since no new SVG was created, this pass had no new SVG XML, geometry or pixel validation. No browser, headless session, CDP or local server was used; rendered desktop/mobile acceptance remains outside this source pass.

## Five-language synchronization

Traditional Chinese, Japanese, Korean and Thai batches cover the same five routes, page copy, date labels, and search strings. After removing four card-summary keys that belonged to out-of-scope pages, each new batch owns 219 translated source keys; 282 current keys are supplied by existing sibling batches, with zero missing. The CA18 batch validators passed in all four locales. The global translation audit passed 56,522 active strings per locale with no stale entries.

The translation agents were dispatched with the GPT-6 Luna model setting. The runtime model identifier is not exposed, so the exact model cannot be independently verified. Each locale received same-model self-review only; this report does not claim Luna Max, independent second-model, or human review.

The strict global merge surfaced 432 inactive keys in old reviewed batches. Before pruning, exact pre-prune copies of the affected batches were saved under `data/i18n/superseded/` in their respective locale directories. The active reviewed batches were pruned only for keys no longer present in current source; no active translation was removed.

## Scope and validation

The source regression proves 73 unique Canada routes, 68 prior routes plus the five exact remaining routes. English search still has the same 73 unique URLs and only the five target records change. Each localized search index also retains 73 unique Canada URLs. All five pages carry canonical and hreflang metadata in five languages; the four Yellowknife pages carry `2026-10-12` Article dates. The country page already had that Article date. Exactly 20 existing sitemap entries changed: four Yellowknife routes × five editions. Niagara and Prince Edward Island page copy and dates, the photo manifest, and image bytes remain unchanged.

`npm run audit` passed end to end, including translation approval, Canada audit, CA09–CA18 route/date regressions, image provenance, and the full site audit. The translation catalogs each contain 56,522 current strings; the site audit verified 4,560 published routes and 955 search records per language. `npm run build` passed with 5,477 files (4,577 HTML, 805 images; 321.2 MiB) and verified all 4,560 sitemap routes. Build was local only. No deployment, main/integration update, or unrelated Niagara/PEI source change was made.

The route-list regression also emits the unique 73-path evidence set:

```text
/canada/
/canada/vancouver-north-shore/
/canada/vancouver-north-shore/downtown-stanley-granville/
/canada/vancouver-north-shore/north-shore-grouse-capilano/
/canada/vancouver-north-shore/sea-to-sky-whistler/
/canada/victoria-south-island/
/canada/victoria-south-island/inner-harbour-james-bay/
/canada/victoria-south-island/butchart-saanich/
/canada/victoria-south-island/sooke-juan-de-fuca/
/canada/pacific-rim-tofino/
/canada/pacific-rim-tofino/long-beach-rainforest/
/canada/pacific-rim-tofino/ucluelet-wild-pacific/
/canada/pacific-rim-tofino/tofino-marine-day/
/canada/banff-lake-louise/
/canada/banff-lake-louise/banff-town-bow-valley/
/canada/banff-lake-louise/lake-louise-moraine/
/canada/banff-lake-louise/johnston-minnewanka/
/canada/jasper-icefields/
/canada/jasper-icefields/jasper-town-maligne/
/canada/jasper-icefields/icefields-parkway/
/canada/jasper-icefields/athabasca-sunwapta/
/canada/calgary-badlands/
/canada/calgary-badlands/calgary-core/
/canada/calgary-badlands/drumheller-royal-tyrrell/
/canada/calgary-badlands/dinosaur-provincial-park/
/canada/toronto/
/canada/toronto/downtown-waterfront/
/canada/toronto/annex-kensington-museums/
/canada/toronto/toronto-islands/
/canada/niagara/
/canada/niagara/falls-parkway/
/canada/niagara/niagara-gorge/
/canada/niagara/niagara-on-the-lake/
/canada/ottawa-gatineau/
/canada/ottawa-gatineau/parliament-rideau/
/canada/ottawa-gatineau/national-museums/
/canada/ottawa-gatineau/gatineau-park/
/canada/montreal/
/canada/montreal/old-montreal-old-port/
/canada/montreal/plateau-mile-end/
/canada/montreal/mount-royal-museums/
/canada/quebec-city-charlevoix/
/canada/quebec-city-charlevoix/old-quebec/
/canada/quebec-city-charlevoix/montmorency-orleans/
/canada/quebec-city-charlevoix/charlevoix-baie-saint-paul/
/canada/saguenay-tadoussac/
/canada/saguenay-tadoussac/tadoussac-marine/
/canada/saguenay-tadoussac/fjord-hiking/
/canada/saguenay-tadoussac/saguenay-city-valley/
/canada/halifax-nova-scotia/
/canada/halifax-nova-scotia/halifax-waterfront-citadel/
/canada/halifax-nova-scotia/peggys-cove-lunenburg/
/canada/halifax-nova-scotia/cape-breton-cabot/
/canada/prince-edward-island/
/canada/prince-edward-island/charlottetown/
/canada/prince-edward-island/cavendish-north-shore/
/canada/prince-edward-island/coastal-drives/
/canada/newfoundland-labrador/
/canada/newfoundland-labrador/st-johns-signal-hill/
/canada/newfoundland-labrador/bonavista-trinity/
/canada/newfoundland-labrador/gros-morne/
/canada/winnipeg-churchill/
/canada/winnipeg-churchill/forks-exchange/
/canada/winnipeg-churchill/human-rights-assiniboine/
/canada/winnipeg-churchill/churchill-hudson-bay/
/canada/whitehorse-kluane/
/canada/whitehorse-kluane/whitehorse-river/
/canada/whitehorse-kluane/kluane-haines-junction/
/canada/whitehorse-kluane/miles-canyon-aurora/
/canada/yellowknife-great-slave/
/canada/yellowknife-great-slave/old-town-great-slave/
/canada/yellowknife-great-slave/aurora-dark-sky/
/canada/yellowknife-great-slave/ingraham-trail/
```
