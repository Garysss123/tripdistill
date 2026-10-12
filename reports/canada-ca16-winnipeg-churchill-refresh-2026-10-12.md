# CA16 Canada source sprint: Winnipeg & Churchill

Date: 12 October 2026

Branch: `codex/sprint-ca-16-content-20261013`

Parent: `5e65f15ccb9f877e280e6aa1de80cead92eff838` (`codex/sprint-ca-15-content-20261013`)

## URL reconciliation and selection

Canada has 73 unique English routes: `/canada/` plus 18 clusters with one hub and three guides each. Before CA16, 15 clusters (60 URLs) had received material refreshes in the CA sprint sequence. The exact completed set was:

### Vancouver & North Shore

- `/canada/vancouver-north-shore/`
- `/canada/vancouver-north-shore/downtown-stanley-granville/`
- `/canada/vancouver-north-shore/north-shore-grouse-capilano/`
- `/canada/vancouver-north-shore/sea-to-sky-whistler/`

### Victoria & South Island

- `/canada/victoria-south-island/`
- `/canada/victoria-south-island/inner-harbour-james-bay/`
- `/canada/victoria-south-island/butchart-saanich/`
- `/canada/victoria-south-island/sooke-juan-de-fuca/`

### Pacific Rim & Tofino

- `/canada/pacific-rim-tofino/`
- `/canada/pacific-rim-tofino/long-beach-rainforest/`
- `/canada/pacific-rim-tofino/ucluelet-wild-pacific/`
- `/canada/pacific-rim-tofino/tofino-marine-day/`

### Banff & Lake Louise

- `/canada/banff-lake-louise/`
- `/canada/banff-lake-louise/banff-town-bow-valley/`
- `/canada/banff-lake-louise/lake-louise-moraine/`
- `/canada/banff-lake-louise/johnston-minnewanka/`

### Jasper & Icefields

- `/canada/jasper-icefields/`
- `/canada/jasper-icefields/jasper-town-maligne/`
- `/canada/jasper-icefields/icefields-parkway/`
- `/canada/jasper-icefields/athabasca-sunwapta/`

### Calgary & Badlands

- `/canada/calgary-badlands/`
- `/canada/calgary-badlands/calgary-core/`
- `/canada/calgary-badlands/drumheller-royal-tyrrell/`
- `/canada/calgary-badlands/dinosaur-provincial-park/`

### Toronto

- `/canada/toronto/`
- `/canada/toronto/downtown-waterfront/`
- `/canada/toronto/annex-kensington-museums/`
- `/canada/toronto/toronto-islands/`

### Montreal

- `/canada/montreal/`
- `/canada/montreal/old-montreal-old-port/`
- `/canada/montreal/plateau-mile-end/`
- `/canada/montreal/mount-royal-museums/`

### Quebec City & Charlevoix

- `/canada/quebec-city-charlevoix/`
- `/canada/quebec-city-charlevoix/old-quebec/`
- `/canada/quebec-city-charlevoix/montmorency-orleans/`
- `/canada/quebec-city-charlevoix/charlevoix-baie-saint-paul/`

### Newfoundland & Labrador

- `/canada/newfoundland-labrador/`
- `/canada/newfoundland-labrador/st-johns-signal-hill/`
- `/canada/newfoundland-labrador/bonavista-trinity/`
- `/canada/newfoundland-labrador/gros-morne/`

### Ottawa & Gatineau

- `/canada/ottawa-gatineau/`
- `/canada/ottawa-gatineau/parliament-rideau/`
- `/canada/ottawa-gatineau/national-museums/`
- `/canada/ottawa-gatineau/gatineau-park/`

### Niagara

- `/canada/niagara/`
- `/canada/niagara/falls-parkway/`
- `/canada/niagara/niagara-gorge/`
- `/canada/niagara/niagara-on-the-lake/`

### Saguenay & Tadoussac

- `/canada/saguenay-tadoussac/`
- `/canada/saguenay-tadoussac/tadoussac-marine/`
- `/canada/saguenay-tadoussac/fjord-hiking/`
- `/canada/saguenay-tadoussac/saguenay-city-valley/`

### Halifax & Nova Scotia

- `/canada/halifax-nova-scotia/`
- `/canada/halifax-nova-scotia/halifax-waterfront-citadel/`
- `/canada/halifax-nova-scotia/peggys-cove-lunenburg/`
- `/canada/halifax-nova-scotia/cape-breton-cabot/`

### Prince Edward Island (CA15)

- `/canada/prince-edward-island/`
- `/canada/prince-edward-island/charlottetown/`
- `/canada/prince-edward-island/cavendish-north-shore/`
- `/canada/prince-edward-island/coastal-drives/`

Before CA16, the exact remaining 13 were `/canada/` plus these three clusters:

- `/canada/winnipeg-churchill/`
- `/canada/winnipeg-churchill/forks-exchange/`
- `/canada/winnipeg-churchill/human-rights-assiniboine/`
- `/canada/winnipeg-churchill/churchill-hudson-bay/`
- `/canada/whitehorse-kluane/`
- `/canada/whitehorse-kluane/whitehorse-river/`
- `/canada/whitehorse-kluane/kluane-haines-junction/`
- `/canada/whitehorse-kluane/miles-canyon-aurora/`
- `/canada/yellowknife-great-slave/`
- `/canada/yellowknife-great-slave/old-town-great-slave/`
- `/canada/yellowknife-great-slave/aurora-dark-sky/`
- `/canada/yellowknife-great-slave/ingraham-trail/`

CA16 selected the four Winnipeg & Churchill URLs above because the source segment and all four page bodies were still the original Canada collection copy. The regression compares the Winnipeg model block in CA15 with the original Canada addition at `239ad32f`; it is identical. It also compares visible `<main>` word counts for all four original pages between that addition and CA15; each count is identical. The only intervening page-file diff over those four paths was a shared stylesheet cache-key change. This independently avoids counting CA15’s PEI hub and three guides again.

After CA16, 64 of 73 URLs are complete. The exact final nine are:

- `/canada/`
- `/canada/whitehorse-kluane/`
- `/canada/whitehorse-kluane/whitehorse-river/`
- `/canada/whitehorse-kluane/kluane-haines-junction/`
- `/canada/whitehorse-kluane/miles-canyon-aurora/`
- `/canada/yellowknife-great-slave/`
- `/canada/yellowknife-great-slave/old-town-great-slave/`
- `/canada/yellowknife-great-slave/aurora-dark-sky/`
- `/canada/yellowknife-great-slave/ingraham-trail/`

## CA16 page increments

| Route | Visible `<main>` words added | Editorial change |
|---|---:|---|
| `/canada/winnipeg-churchill/` | 662 | Separates a 2–3-night Winnipeg city visit from flight- and rail-led Churchill itineraries; states there is no road access; calls for licensed local operators, travel-day accounting, a four-night Churchill stay and a Winnipeg return buffer. |
| `/canada/winnipeg-churchill/forks-exchange/` | 738 | Provides river-history, architecture-tour and indoor-interpretation choices; gives a focused day rather than a checklist; notes the historic district’s 20-block scale and 1880–1920 buildings; adds live transit, weather/path, event-closure and indoor fallbacks. |
| `/canada/winnipeg-churchill/human-rights-assiniboine/` | 698 | Gives the museum a substantial block (ten core galleries across seven floors), compares a nearby Forks finish with the westbound Assiniboine transfer, distinguishes park grounds from The Leaf hours, and adds accessibility, fatigue and return-planning checks. |
| `/canada/winnipeg-churchill/churchill-hudson-bay/` | 804 | Compares date-specific air and rail access, states Churchill and Wapusk have no road access, requires licensed operators for remote outings, distinguishes seasonal ecology from sighting guarantees, and preserves a town-based fallback and return buffer. |

The hub and three guides now use route choices, four-stage sequences, three failure points, FAQs and date-specific official-source links. All dates shown are 12 October 2026.

## Official checks and media

Targeted source checks are recorded in the page data and visible source panels:

- [Parks Canada: Wapusk access and visitor planning](https://parks.canada.ca/pn-np/mb/wapusk/visit), [marine wildlife](https://parks.canada.ca/pn-np/mb/wapusk/nature/faune-animals/marine), and [polar-bear safety](https://parks.canada.ca/pn-np/mb/wapusk/securite-safety/ours-bear).
- [VIA Rail: date-specific Winnipeg–Churchill schedules](https://www.viarail.ca/en/plan/train-schedules/winnipeg-the-pas-churchill) and [Calm Air schedule updates](https://www.calmair.com/fly-calm-air/schedule-updates).
- [The Forks: Peace Meeting site](https://www.theforks.com/attractions/peace-meeting-site) and [Oodena](https://www.theforks.com/attractions/oodena-celebration-circle); [Exchange District BIZ walking tours](https://exchangedistrict.org/historic-walking-tours-2/).
- [Canadian Museum for Human Rights: visitor planning](https://humanrights.ca/visit/plan-your-visit), [hours and admission](https://humanrights.ca/visit/hours-admission-fees), and [accessibility](https://humanrights.ca/visit/accessibility); [Assiniboine Park hours](https://www.assiniboinepark.ca/park/visit/hours); [Winnipeg TransitTools](https://info.winnipegtransit.com/en/schedules-maps-tools/transittools/).

I inspected the three local images: the Forks riverfront and sculpture at dusk, the illuminated museum ramp, and Hudson Bay sea ice near Cape Churchill. Their revised alt text describes visible content; photo source, creator and license records remain in place. No SVG was added.

## Same-level source comparison

I compared the original English source HTML for [`japan/hokkaido/index.html`](../japan/hokkaido/index.html) and [`japan/hokkaido/otaru-shakotan/index.html`](../japan/hokkaido/otaru-shakotan/index.html). The Hokkaido hub uses gateway and rail-versus-car choices, regional nights, season and buffer decisions; the Otaru guide makes the Sapporo rail day trip versus Otaru overnight choice explicit and gates the Shakotan branch on the last return and conditions. CA16 applies that route-decision framing to Winnipeg-only versus air/rail Churchill trips and the museum/park/Leaf or city/coast alternatives. This was source review only, not a UI or browser acceptance claim.

## Localization, dates and search

The refreshed pages, article metadata and search records were generated for English, Traditional Chinese, Japanese, Korean and Thai. The CA16 batch covers four routes in each locale (477 raw units, 305 unique route keys); 232 translations are owned in the new batch per locale and 73 route keys are supplied by other sibling batches. All four localized batch samplers reported no reused long target sentence. Localized headings and key route facts were sampled, including the no-road access rule, four-night buffer, 6,000-year gathering context, 20-block scale and museum gallery/floor count.

During merge, each locale’s legacy Winnipeg batch contained 94 stale source keys. I preserved its 29 still-current Winnipeg translations in the new CA16 batch, moved the stale batch intact to `data/i18n/superseded/<locale>/`, and retained three still-current shared strings in their original Canada overview, France and Yellowknife route batches. No unrelated English page copy changed. All four locales now merge with zero missing or stale keys (56,297 each).

Translation provenance records same-model self-review and explicitly marks it as not independent. The runtime model identifier was unavailable, so this report does not name a model version or claim independent second-model review.

The sitemap has exactly 20 changed lastmod entries: the four selected routes across five language editions, all `2026-10-12`. I also corrected `scripts/sync-sitemap.mjs` to retain CA15’s already-published PEI date while adding Winnipeg’s date rule; rerunning it no longer regresses PEI to the Canada default date. Canada URL set remains 73, and only the four selected English search records changed.

## Validation and limits

- `npm run audit` passed, including i18n coverage, Canada and CA09–CA16 route/date/search regressions, prior Niagara and PEI guards, image provenance and full-site audit.
- `npm run build` passed: 4,560 sitemap URLs verified across five editions; 5,477 files built.
- `npm run test:canada-ca16-route-dates` passed: exact URL reconciliation, dedupe proof, page deltas, five-edition canonical/hreflang/Article dates and search records.
- `git diff --check` passed. Niagara page/model/search content remains untouched by this sprint.
- No headless browser, CDP, local preview server or UI acceptance was used. The review does not claim a full-page rendered UI check. No SVG was created, so no SVG-specific QA applied.

The source branch remains a draft. No main/integration branch write or deployment was performed.
