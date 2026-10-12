# Melbourne & Ocean gaps — source review record

Review date: 12 October 2026
Branch: `codex/sprint-au-melbourne-ocean-gaps-20261013`
Requested exact source tip: `19bd73df24866ac49389fdf4ccb572e91cc422f6`
Expected source tip parent: `159ed98ca85db173d9b6f3f5ab36d705a50d25a0`

## Scope and body deltas

This batch edits only the English bodies for the four existing routes below. It does not add a route, overwrite any other English HTML route, replace an image, or create an SVG.

| Route | Main-content words added from exact source tip | Distinct field decision |
| --- | ---: | --- |
| `/australia/melbourne-port-phillip/fitzroy-carlton-collingwood/` | 744 | Choose Carlton for museum/gardens or one Fitzroy/Collingwood street; verify CBD tram boundary, dated venue access and final service. |
| `/australia/melbourne-port-phillip/phillip-island/` | 858 | Book the viewing and its night return as separate commitments; stay overnight or skip the evening viewing if no confirmed ride remains. |
| `/australia/great-ocean-road-gariwerd/lorne-waterfalls/` | 776 | Choose one waterfall for the day; keep the distant inland pair on a separate day and match stairs/creek crossings to the group and conditions. |
| `/australia/great-ocean-road-gariwerd/gariwerd-grampians/` | 853 | Choose one park subregion and an open trailhead; Mackenzie Falls construction and dated helicopter restrictions can determine the route before the hike. |

The word count uses the rendered `main#main-content` text and excludes source lists, related-route cards and ads. These are four newly substantive route bodies, changing the requested Australia unique route tally from 60/97 to 64/97. Existing body copy elsewhere was not refreshed.

## Official operating evidence

All sources were checked for this review on 12 October 2026. Dates and work notices are snapshots, not guarantees for later visits.

### Fitzroy, Carlton and Collingwood

- [Transport Victoria maps](https://transport.vic.gov.au/plan-a-journey/network-maps/melbourne-public-transport-maps) and its [journey planner](https://transport.vic.gov.au/journey) support date-, origin- and destination-specific tram/public-transit decisions. The copy directs the reader to check actual stops, Free Tram Zone boundary, disruptions and final useful departure; it does not assume these northern districts are in the CBD free area.
- [Museums Victoria: Melbourne Museum visit information](https://museumsvictoria.com.au/melbournemuseum/plan-your-visit/) identifies the Carlton Gardens location, the usual 9am–5pm opening, Good Friday and Christmas closure, transport, ticketing and access details. Page advises reconfirming dated exhibitions and event changes.
- The route treats markets and events as date-specific and keeps residential lanes, apartment passages and private frontages out of the visitor itinerary.

### Phillip Island

- [Phillip Island Nature Parks: Penguin Parade](https://www.penguins.org.au/attractions/penguin-parade/) says booking is essential; its ticket/product instructions determine the arrival time. It describes the visitor centre opening at noon, different arrival guidance for general/Penguins Plus, Underground and guided tours, and indicative Melbourne-to-island road time. The route says to use the current ticket and operator page rather than a fixed sunset estimate.
- The same operator’s [getting there information](https://www.penguins.org.au/visit/getting-there/) identifies Cowes as the V/Line destination and says there is no Melbourne return bus after the Parade ends. The copy therefore requires an overnight, booked local transfer/tour, or a legal confirmed drive plan before buying the evening ticket.
- On the review-date snapshot, the operator’s [Nobbies reserve notice](https://www.penguins.org.au/attractions/reserves/the-nobbies/) showed the boardwalk and car park open while the Nobbies Centre/café/toilets were closed; Boulevard moving traffic was allowed but roadside parking was not. These independently changing notices are described separately, with food/facility and town-based alternatives.
- [V/Line timetables](https://www.vline.com.au/Timetables/Train-coach-timetables), [Transport Victoria trip planning](https://transport.vic.gov.au/journey) and [VicTraffic](https://traffic.vicroads.vic.gov.au/) are provided for dated service and road checks. No future fare, capacity or departure is promised.

### Lorne and the Otways

- [Parks Victoria: waterfalls along the Great Ocean Road](https://www.parks.vic.gov.au/places-to-see/parks/great-otway-national-park/best-waterfalls-along-the-great-ocean-road) places Sheoak Falls about nine minutes from Lorne, describes the short carpark approach as an alternative when creek stones are slippery, and describes Erskine’s first lookout and the lower platform’s 230 stairs. It places Hopetoun and Triplet Falls about 1.5 hours from Lorne; the route puts them on a separate day.
- [Parks Victoria: Great Otway National Park visitor information](https://www.parks.vic.gov.au/places-to-see/parks/great-otway-national-park) is the current park-condition source for access, track and closure updates. [GORCAPA’s land-management overview](https://www.greatoceanroadauthority.vic.gov.au/Land-We-Manage) explains that coastal and individual park parcels have distinct land managers; the guide directs travellers to check the exact place’s manager rather than assume a single authority.
- The fallback covers a slippery crossing, a short signed route, one upper lookout, town time, or an overnight. Coach arrival in Lorne is not represented as transport to a forest car park.

### Gariwerd / Grampians

- [Parks Victoria: Grampians (Gariwerd) National Park](https://www.parks.vic.gov.au/places-to-see/parks/grampians-national-park) was the live condition source. On 12 October 2026 it reported no vehicle/visitor access to the Mackenzie Falls precinct during construction beginning 9 February, with work anticipated through the end of 2026. It listed Reeds Lookout, the Balconies, Boroka Lookout and Silverband Falls as alternatives, each still requiring its own access check.
- The same notice described 13–14 October 2026 Grampians Peaks Trail helicopter activity: all-day closures at Redman Road trailhead and Piccaninny East car park, reservoir-road closures, temporary holds, and Victoria Valley Road access for Piccaninny summit. Weather backup dates are also in the live notice. The copy instructs a same-date recheck and cancellation if restrictions remove the safe margin.
- [Parks Victoria’s Mackenzie Falls revitalisation notice](https://www.parks.vic.gov.au/projects/southwest-victoria/mackenzie-falls-revitalisation), [CFA district fire danger and total fire ban notices](https://www.cfa.vic.gov.au/warnings-restrictions/total-fire-bans-and-ratings), [Bureau of Meteorology Victorian forecasts](https://www.bom.gov.au/vic/forecasts/) and [VicTraffic](https://traffic.vicroads.vic.gov.au/) support dated construction, fire, weather and road checks.
- Cultural access follows Parks Victoria and Traditional Owner guidance. Sensitive cultural sites are not exposed as substitute viewpoints or geotagged; the article calls for staying on permitted formed routes.

## Source and image comparisons

The raw source/markup comparison used `japan/hokkaido/index.html` and `japan/hokkaido/otaru-shakotan/index.html` as same-level references for explicit base choice, named station-to-place transfers, seasonal separation and an operational alternative. The comparison was source-only, not rendered-browser review.

The four existing hero files were inspected at pixel level and checked against their descriptions: Rosephil Terrace on Fitzroy Street; the Nobbies boardwalk and rocky coast; a forest waterfall near Lorne; and the Boroka Lookout panorama across Halls Gap. Three route-specific hero alt strings were sharpened to describe the visible subject. The regression confirms image paths and original bytes are identical to the exact source tip. The changes do not alter shared image records, credits or image licensing claims. No SVG was added, so there is no new SVG artifact or SVG geometry check in this batch.

## Language, search and route metadata

The four pages, their visible review date, Article `dateModified`, FAQ/schema content and English search records are checked across English, Traditional Chinese, Japanese, Korean and Thai. Each non-English page batch has 188 fresh translated strings and 123 already-reviewed strings reused by the localization pipeline. Each search batch is an additive delta with exactly 20 keys: four route summaries and 16 route-specific keywords. The unrelated Brisbane hub search summary was restored to the exact source-tip value and excluded from this sprint’s translation delta.

The sitemap still has 4,560 unique URLs. Exactly the four selected route URLs across five locales (20 rows) receive `lastmod` `2026-10-12`; no URL is added or removed. Obsolete copy was pruned only from reviewed translation batches after a dry run identified 113 stale source keys per locale (452 total). Draft files were not selected or changed.

Translation metadata records: “GPT-6 Luna requested; exact runtime identity unverified.” The reviewer is the same task assistant; this is same-model self-review and is not independent. No external human or independent-model review is claimed. Batch validators and locale/source/date gates check structure and literal integrity; they do not establish independent semantic quality.

## Verification and limits

Verification completed from the requested source tip:

- `npm run test:australia-melbourne-ocean-gaps` passed. It verifies the exact four English route bodies against the source tip, their 5-language date/canonical/FAQ/schema parity, 20 scoped search changes, unchanged photo bytes, and the unchanged 4,560-URL sitemap set. Reported main-content deltas: +744, +858, +776 and +853 words.
- `npm run audit` passed with exit code 0 after the build. This includes the global site audit (4,560 published routes, 912 per language, 955 search records per language), Australia and other country audits, i18n/search checks, photo inventory, route-date and diagram regressions, and the cumulative Australia regressions.
- `npm run build` passed and verified 4,560 sitemap routes; output was 5,471 files (4,577 HTML and 805 images). The generated `dist` output is local and is not part of this source change.
- `git diff --check` passed. The Melbourne/Ocean regression and cumulative branch regressions pass with the four new routes recognized as the later sprint's scope; the existing prior-route checks remain active.

The branch remains source-only. No main/integration branch, deployment or production UI was changed, and no site-wide external source crawler, headless/CDP session or local web server was used for acceptance. Desktop/mobile rendering and interactions remain unverified. Translation review is same-task-assistant self-review only; exact runtime identity and independent semantic review are unverified.
