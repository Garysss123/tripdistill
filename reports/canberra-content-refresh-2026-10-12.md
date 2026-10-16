# Canberra and Australian Alps content refresh — 12 October 2026

## Scope and same-level reference

This source-only batch is on `codex/sprint-au-canberra-content-20261013`, created directly from exact base `448f6cd5a03aff0ddbfea1a21226cc9f2be545b9` (parent `90de552c65cf971a33dd4a1ef1976e0037392335`). It expands only four existing routes:

| Existing route | English rendered `<main>` before | After | Increase |
| --- | ---: | ---: | ---: |
| [Canberra & Australian Alps](/australia/canberra-australian-alps/) | 514 | 1,711 | +1,197 |
| [Parliamentary Triangle](/australia/canberra-australian-alps/parliamentary-triangle/) | 355 | 1,248 | +893 |
| [Lake Burley Griffin & National Museum](/australia/canberra-australian-alps/lake-burley-griffin-national-museum/) | 375 | 1,296 | +921 |
| [Australian War Memorial & Mount Ainslie](/australia/canberra-australian-alps/war-memorial-mount-ainslie/) | 384 | 1,409 | +1,025 |
| **Total** | **1,628** | **5,664** | **+4,036** |

Counts use rendered English `#main-content` text and exclude related cards, source lists and advertisements. The four routes are substantive additions for the requested deduplicated Australia tally, moving it from 72/97 to 76/97. The Australia inventory remains 97 English routes, 485 five-language routes and 97 search records. No route or URL was added or removed.

The same-level raw-source reference was `/japan/hokkaido/` for the regional hub and `/japan/hokkaido/otaru-shakotan/` for local guide depth. Under the same `<main>` exclusion rules, the Hokkaido hub has 1,397 words and Otaru has 1,030. The Canberra hub has 1,711; its three local guides have 1,248, 1,296 and 1,409. The comparison covers base choice, named geographic sequence, access/return logic, operating constraints and a practical fallback. It was a source/markup comparison, not a desktop/mobile browser render.

## Decisions added

- The hub separates Canberra’s Parkes, Acton Peninsula and inner-north museum days from Namadgi and the New South Wales alpine gateways. It distinguishes two-, three-, four-, five- and eight-night shapes, accounts for arrival/departure windows, and does not treat a Canberra hotel as an alpine-road base.
- The Parliamentary Triangle guide starts from Parliament House and one selected Parkes institution. It makes the second museum optional, treats tours/security and return departure as fixed constraints, and names the open-lawn exposure and bridge detour. It retains the official visitor-page link for sitting-day hours and conditions; the final direct fetch of that page was blocked by site robots/403 in this environment, so those live details remain a recheck item.
- The National Museum guide uses the Lawson Crescent entrance and Acton Peninsula for one western-shore day, then a short signed out-and-back. It distinguishes that walk from the NCA’s 5km Bridge-to-Bridge route and 16km cycling loop. The 9 October Yarralumla Beach water notice is described as site-specific rather than lake-wide.
- The War Memorial guide fixes the 4:30pm Last Post Ceremony as an endpoint, explains the R54 visitor-route label separately from the regular timetable, and compares the 4.5km/250m Kokoda Track return with the road approach to the Mount Ainslie lookout. A summit walk is omitted when ceremony timing, fire, heat, track status, daylight or mobility makes it unsuitable.

## Official sources and dated conditions

Primary-source links embedded in the pages include [Transport Canberra visitor routes](https://www.transport.act.gov.au/getting-around/visit-canberra), its [regular route timetables](https://www.transport.act.gov.au/getting-around/timetables2/regular-bus-routes), the [Parliament visitor page](https://www.aph.gov.au/visit_parliament/planning_a_visit), [National Museum visit information](https://www.nma.gov.au/visit), [Australian War Memorial visit information](https://www.awm.gov.au/visit), [NCA bridge closure](https://www.nca.gov.au/parking/closure/commonwealth-avenue-bridge-partial-bridge-closure), [NCA lake water-quality notices](https://www.nca.gov.au/environment/lake-burley-griffin/water-quality), [NCA walking routes](https://www.nca.gov.au/attractions/take-tour/lake-burley-griffin-self-guided-walking-tour), the [Parks ACT Mount Ainslie walk/reserve page](https://www.parks.act.gov.au/find-a-nature-park/canberra-nature-park/mount-ainslie-nature-reserve), [NSW TrainLink’s Southern Region timetable](https://transportnsw.info/regional-southern-line), the [Snowy Mountains coach guide](https://transportnsw.info/regional-travel/popular-destinations/visit-snowy-mountains-by-coach), [NSW Kosciuszko access](https://www.nationalparks.nsw.gov.au/visit-a-park/parks/kosciuszko-national-park/visitor-info) and the [Bureau of Meteorology Canberra forecast](https://www.bom.gov.au/act/forecasts/canberra.shtml).

At review, the Transport Canberra timetable effective 12 October 2026 listed Route 53 for the National Museum corridor and Routes 57/58 for Parliament House; the agency’s visitor-route guide listed R54 for the Australian War Memorial. The copy tells visitors to check direction, stop, weekend service and the return on their actual date. NSW TrainLink’s Southern Region timetable was valid from 26 July 2026 and listed the advance-booked Route 775 coach from Canberra Civic to Jindabyne; onward travel to a park/resort was explicitly left as a separate check. The published Snowy Mountains Bus Service season ended 4 October 2026. The NCA notice described the northbound Commonwealth Avenue Bridge road/shared-path closure from 8 January 2026 and anticipated reopening at the end of January 2027, weather permitting. The NCA water page’s 9 October update reported Yarralumla Beach closed for primary-contact recreation after elevated bacteria in its 6 October sample. The AWM page lists free entry, daily gallery hours (except Christmas Day), progressive closing from 4pm and the 4:30pm ceremony; Parks ACT describes the Mount Ainslie Summit Walk as 4.5km return with about 250m ascent, steep sections, steps and uneven ground. All operational notices remain subject to live rechecking.

## Images, translations and metadata

Existing hero imagery was retained. No image or SVG asset was changed or added; the Canberra regression checks both tracked and untracked image paths. This batch adds no new diagram. Browser-rendered image/layout checks were not performed, so there is no UI pass claim.

Each non-English page batch covers 213 current source keys across the four routes, with 212 fresh entries; the shared “Choose the day’s anchor” translation remains owned by the earlier CA14 batch. The separate search-index delta contains 21 fresh keys per language. The page/search batches passed sample review and batch validation in Traditional Chinese, Japanese, Korean and Thai. A dry run found 352 obsolete entries in 12 older reviewed-batch files; they were removed while current batches remained intact. The final prune dry run found zero stale reviewed keys. Translation provenance says the selected runtime’s exact model ID is unverified, no Luna runtime was exposed, and review was by the same task/model family, hence non-independent. No human or independent-model review is claimed.

The four English routes, four updated English search records, translated pages/search summaries, visible review dates and Article `dateModified` values use 12 October 2026. Exactly 20 sitemap `<lastmod>` values (four routes × five locales) change to `2026-10-12`; the 4,560-URL sitemap set is unchanged. The site-wide English search index contains 955 records, including 97 Australian records.

## Verification and limits

The Canberra regression compares the exact base, route bodies, expected word deltas, Japan-source floor, FAQ/schema parity, five-language dates/canonicals, search records and unchanged route/image inventories. The Adelaide/Perth regression also confirms that this branch is based on exact `448f6cd5` and leaves parallel arrow correction `31fc43817cd436e2f868058f4393ed59a800aec8` untouched. Seven cumulative Australia regressions now include these four exact routes in their change allowlists; their URL, content, search and sitemap checks remain strict.

`npm run audit` passed, including translation coverage (56,879 strings in each locale), Australia’s 97-route audit, the Canberra and cumulative route regressions, photo-license/provenance checks, and the final site audit of 4,560 published routes (912 per language), 955 search records per language and 4,560 unique localized titles. `npm run build` passed with 5,475 files (4,577 HTML and 809 image files) and verified all 4,560 sitemap routes. The build also reported 14,525 files of remaining Cloudflare Pages headroom; no deployment was attempted.

No site-wide external source crawler, browser/headless/CDP session, local server, security-setting change, main/integration action or deployment was performed. Desktop/mobile layout, overflow, visual hierarchy and interactions remain unverified by browser review. This review record is not user editorial acceptance or an AdSense-eligibility claim.
