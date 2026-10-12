# Prince Edward Island Canada hub and field-guide refresh

Reviewed 12 October 2026 on `codex/sprint-ca-15-content-20261013`, based directly on CA14 `cf9ae1b90a1e8e44ecd806b3b3aa5bd8735542f3`. CA14 counted 56 of Canada’s 73 existing routes; this pass selects the next four not yet refreshed: the [Prince Edward Island hub](/canada/prince-edward-island/), [Charlottetown](/canada/prince-edward-island/charlottetown/), [Cavendish & North Shore](/canada/prince-edward-island/cavendish-north-shore/) and [East & West Coastal Drives](/canada/prince-edward-island/coastal-drives/). It brings the count to 60/73. The route list contains no additions or removals.

## Selection evidence and body delta

The CA13 report records Saguenay & Tadoussac as 52/73; CA14 records Halifax & Nova Scotia as 56/73. The four PEI routes were absent from CA06–CA14 reports. The regression compares the PEI source block at the CA14 base with its original addition in `239ad32f`; both are byte-identical with SHA-256 `f9e7332842fa2d87da2ed2fcae672c6385b09515234b5bbf8e52b83d3db142a8`. It also confirms each route already existed at CA14 and that the Canada search and sitemap URL sets remain unchanged. No date-only edit is counted as a refreshed route.

`parse5` compared visible English `<main>` content with the exact CA14 base. Added word counts measure copy volume rather than editorial quality; final words and headings use the same source-file method as the Hokkaido/Otaru baseline. Headings include h1–h3.

| Existing route | Added main-body words | Final main-body words | Headings | FAQs |
|---|---:|---:|---:|---:|
| Prince Edward Island hub | +791 | 1,620 | 21 | 4 |
| Charlottetown | +787 | 1,488 | 22 | 4 |
| Cavendish & North Shore | +770 | 1,523 | 22 | 4 |
| East & West Coastal Drives | +821 | 1,556 | 22 | 4 |

The same-level source comparison uses [Hokkaido](/japan/hokkaido/) (1,625 `<main>` words, 33 headings, five FAQs) and [Otaru & Shakotan](/japan/hokkaido/otaru-shakotan/) (1,132 words, 22 headings, four FAQs). The PEI hub is close to the Hokkaido hub in body length; each local guide has the same heading count as Otaru and adds route-specific choices, access limits, sequence, return margins and seasonal fallbacks. Counts are a depth check, not a quality score. This was a source-file review, not a browser rendering or viewport review.

## Editorial decisions and official checks

The hub treats the island as separate planning corridors. Its stay choices distinguish Charlottetown, one north-shore park section, and an east or west coast day; it explains the bridge versus Wood Islands ferry, and warns that selected rural bus service does not promise last-mile access. The children turn distinct closure and distance constraints into route choices, a four-step sequence, failure points and practical FAQs.

- [Parks Canada — PEI National Park visitor planning](https://parks.canada.ca/pn-np/pe/pei-ipe/visit) identifies the three park regions—Cavendish–North Rustico, Brackley–Dalvay and Greenwich—as divided by bays and not directly connected by highways, and places the park about 24 km from Charlottetown. Its [hours page](https://parks.canada.ca/pn-np/pe/pei-ipe/visit/heures-hours) supports the mid-May to early-autumn facility window and limited shoulder-season services. The route notes the 2026 high-visitation and parking checks without promising a future opening or a particular space.
- [Transit PEI schedules](https://www.t3transit.ca/transit-pei-schedules) distinguish published rural service from an all-island sightseeing network. The copy requires checking the route, date, booking condition, stop and last-mile walk before relying on transit to reach a beach or lighthouse.
- [Parks Canada — Province House](https://parks.canada.ca/lhn-nhs/pe/provincehouse) currently lists a conservation closure. The Charlottetown route therefore treats it as an exterior civic stop and offers the [Confederation Centre visit page](https://confederationcentre.com/plan-your-visit/) or a scheduled [Beaconsfield guided tour](https://www.peimuseum.ca/visit/beaconsfield-historic-house) as separate indoor choices. It does not imply their hours or access terms are interchangeable.
- [Parks Canada — Cavendish–North Rustico](https://parks.canada.ca/pn-np/pe/pei-ipe/visit/cavendish-nr) and [Green Gables Heritage Place](https://parks.canada.ca/lhn-nhs/pe/greengables) have distinct parking, facilities, hours, fees and visitor notices. The guide keeps the north-shore park section and Green Gables as separate checks, and notes the dated 2026 high-visitation information.
- [Tourism PEI — Points East Coastal Drive](https://www.tourismpei.com/trip-ideas/coastal-drives/points-east-coastal-drive) describes a 475 km route; its [North Cape Coastal Drive](https://www.tourismpei.com/places-to-go/north-cape-coastal-drive) is a separate western region. The guide makes the choice one corridor per day, with an overnight when needed, instead of implying a quick loop.
- The [Confederation Bridge travel page](https://www.confederationbridge.com/travel/) and [Northumberland Ferries schedule](https://www.ferries.ca/ns-pei-ferry/schedule) are separate crossing checks. No unverified fare, transit headway, future opening, lighthouse access or fixed crossing time is stated.

The official pages were checked on 12 October 2026. Hours, road status, parking, transit, admissions, weather and operator schedules can change; the route links current checks and dates the snapshot.

## Five-language review

Each reviewed Traditional Chinese, Japanese, Korean and Thai source batch has 190 source-to-target entries for the four pages (760 locale entries total). Each batch validator reported 462 raw units, 297 unique source keys, 107 route keys already available in sibling batches and zero missing. All four files passed sampled review; no long translated target was reused for a different source sentence. Batch provenance states that the writer/model version was not independently verified in this runtime; review was in the same session, `independentSecondModel` is false, and neither Luna validation nor independent-model or human review is claimed.

The documented stale-key pruner removed 368 obsolete translation values to keep the merge exact: 89 superseded PEI values per locale (356 total), plus 12 older keys across Perth, Jasper and Saguenay (one each per locale). The current catalogs remain fully covered; the unrelated removals were stale source strings, not current page content.

## Images and diagrams

No new image or SVG was added. Existing route photos and alt text were retained. This source-only pass did not perform pixel acceptance of those images; the parent conversation owns that review.

## Validation and limits

- `npm run audit` passed, including all registered site, image provenance, Canada and historical route/date regressions. The site audit checked 4,560 published pages (912 per edition), 955 search records per language and 4,560 unique localized page titles. Each locale catalog had 56,188 required translations and zero missing or stale entries.
- `npm run build` passed: 5,477 files (4,577 HTML and 805 images), with all 4,560 sitemap routes present in `dist`. Source and build sitemaps contain the same 4,560 URLs and dates.
- `test:canada-ca15-route-dates` passed: four pre-existing paths, exactly 73 unchanged Canada search URLs, only four target search records updated, 20 target-route `lastmod` values updated across five editions, aligned canonical/Article metadata, and translated search summaries. It confirms visible body gains of +791, +787, +770 and +821 words.
- `git diff --check` passed. The new CA15 route/date regression is registered in `npm run audit`; CA09–CA14 regression guards were extended to allow the four later PEI changes while continuing to check their own route and date boundaries. The Canada audit’s route-date allowlist also includes these four pages.
- No browser, headless browser, CDP, local server or broad external crawler was used. The official checks were targeted to the pages linked above. No deployment or production action was performed.
