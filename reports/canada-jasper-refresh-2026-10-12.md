# Jasper & Icefields Parkway hub and field-guide refresh

Reviewed 12 October 2026 on `codex/sprint-ca-08-content-20261012`, based directly on source commit `f837bd2ed6425f32a398071aeb04af03171adb65` (`CA07Banff`), with parent `068ed3eef9e2c7c41158a258de0b7db5f4c1ca23`. The working tree began at the requested base commit. Review of the README, project skills, reports and Git history found 28 already refreshed Canadian source pages (the earlier five clusters, Pacific Rim and Banff), leaving 45 existing routes. Jasper was the untouched four-page hub/children cluster selected for this pass. No route was added. The existing `/canada/` overview also changes because its Jasper card uses the revised hub copy and now has a current review date.

## Routes and English content delta

Rendered `<main>` counts use `parse5`, compare each English page at the exact base commit to the refreshed source, and count whitespace-delimited words. They indicate copy volume, not editorial quality.

| Existing route | Added rendered words |
|---|---:|
| [Jasper & the Icefields Parkway hub](/canada/jasper-icefields/) | 890 |
| [Jasper Town & Maligne Valley](/canada/jasper-icefields/jasper-town-maligne/) | 559 |
| [Icefields Parkway](/canada/jasper-icefields/icefields-parkway/) | 559 |
| [Athabasca & Sunwapta Falls](/canada/jasper-icefields/athabasca-sunwapta/) | 472 |
| **Total** | **2,480** |

The hub uses four nights in Jasper town as a practical first-visit plan: a walkable arrival day, one Maligne Valley day, one southbound falls day and one full daylight block for the Parkway or a weather buffer. A fifth Jasper night separates the longer road outings; an overnight near Lake Louise is an option when the Parkway is the onward trip to Banff. The page compares town lodging with campground logistics rather than implying that the campground shuttle solves every trip.

The guides name the local choices and return logic. Jasper town’s central blocks and river edge form the arrival walk. Maligne Lake and Maligne Canyon are different stops with independently changing access. Athabasca Falls is about 30 km south of Jasper and Sunwapta Falls about 54 km; they form a bounded out-and-back rather than an unplanned Icefield transfer. Highway 93 is described as a remote 232 km day between Jasper and Lake Louise: set a fixed endpoint, few stops, fuel, water, offline directions, weather checks and daylight arrival. No reliable cell service or frequent-stop transfer behavior is assumed.

Transportation is named by operating area. Parks Canada’s seasonal campground shuttle has linked Whistlers and Wapiti campgrounds with Jasper town, Pyramid Lake Lodge, Jasper Park Lodge and Lake Annette; routes and dates vary. It is not service to Maligne Lake or along the Icefields Parkway. The Municipality of Jasper’s current transit map/schedule is the source for local stop, time and payment detail. Maligne Road and the southbound Parkway require a confirmed vehicle, tour or other named service. The copy does not promise a fare, departure or connection that was not checked.

## Official-source snapshot

The operating notes are snapshots checked 12 October 2026, not guarantees for later travel dates. On that check, Parks Canada listed Maligne Lake and Mary Schäffer day use open, Athabasca and Sunwapta Falls open, Maligne Canyon closed, and Cavell Road closed until further notice. The 2026 Maligne Lake Cruise season was scheduled through 11 October and Columbia Icefield Adventure through 12 October, both weather dependent; the Ice Odyssey season had ended in September. Those products were not presented as available after their dated endpoints.

Parkway services are sparse. Parks Canada describes seasonal facilities generally running from early May to mid-October and no winter fuel or food service along the route. Saskatchewan River Crossing has seasonal fuel only. Road, weather, fire, wildlife, trail and daylight conditions can change; check the status board and Alberta 511 before departure, and do not route around a closure.

Primary references checked:

- [Parks Canada — Jasper National Park and current visitor notices](https://parks.canada.ca/pn-np/ab/jasper)
- [Parks Canada — Jasper visit planning](https://parks.canada.ca/pn-np/ab/jasper/visit)
- [Parks Canada — seasonal campground shuttle](https://parks.canada.ca/pn-np/ab/jasper/visit/transit)
- [Parks Canada — what is open and closed](https://parks.canada.ca/pn-np/ab/jasper/visit/ouvert-fermee-open-closed)
- [Parks Canada — Jasper road restrictions](https://parks.canada.ca/pn-np/ab/jasper/visit/routes-roads)
- [Parks Canada — travelling the Icefields Parkway](https://parks.canada.ca/pn-np/ab/jasper/activ/itineraires-itineraries/promenadedesglaciers-icefieldsparkway)
- [Parks Canada — Jasper weather, wildlife and safety](https://parks.canada.ca/pn-np/ab/jasper/securite-safety/enviro)
- [Municipality of Jasper — transit information](https://www.jasper-alberta.ca/p/transit)
- [Maligne Lake Cruise — seasonal dates and terms](https://www.banffjaspercollection.com/attractions/maligne-lake-cruise/)
- [Columbia Icefield Adventure — seasonal dates and terms](https://www.banffjaspercollection.com/attractions/columbia-icefield-adventure/)

## Translation, search and dates

Traditional Chinese, Japanese, Korean and Thai localized editions were regenerated from reviewed translation batches. The Jasper page batch contributes 129 new strings per locale and reuses earlier reviewed keys; the separate search batch translates 25 new search strings. The Canada index card/date batch covers five updated strings per locale. GPT-6 Codex wrote and reviewed these translations in the same model. There was no independent-model or human semantic review. Translation coverage audit reports 55,798 required strings per locale and zero missing or stale entries.

The existing Canada search index remains at 73 unique English routes. Only the four Jasper records change; each has a detailed route summary and seven keywords counting its title and parent. The index order and all other route records are preserved.

The four Jasper pages and `/canada/` overview carry `dateModified` 12 October 2026 in all five language editions. Their canonical URLs remain unchanged. Exactly 25 existing sitemap `lastmod` records changed (five routes × five editions); there are no added or removed sitemap URLs.

## Images and original SVG

The three active local WebPs were inspected at 1,600 × 1,066 pixels and compared with their exact Commons pages:

- Maligne Lake guide: [Canada Boat House am Maligne Lake](https://commons.wikimedia.org/wiki/File:Canada_Boat_House_am_Maligne_Lake,_Jasper_NP,_Alberta,_CA.jpg), by Christianabend. The local pixels show the boathouse and mountain backdrop. The Commons page records an original CC BY-SA 2.0 release and a later CC BY-SA 3.0 migration tag. Both version declarations are retained as variants and are not treated as a direct conflict; the visible credit uses CC BY-SA 3.0 and states same-version share-alike terms.
- Icefields Parkway guide: [Icefields Parkway (18)](https://commons.wikimedia.org/wiki/File:Icefields_Parkway_(18)_(9580641168).jpg), by Mike from Vancouver, Canada, CC BY-SA 2.0. The local pixels show a glacier and mountain valley consistent with the guide.
- Athabasca/Sunwapta guide: [Athabasca Falls](https://commons.wikimedia.org/wiki/File:Athabasca_Falls,_Jasper_National_Park_(7635012912).jpg), by InSapphoWeTrust, CC BY-SA 2.0. The local pixels show the falls and visitor paths.

The credits link source and license, disclose resizing/cropping/WebP conversion and include the same-version share-alike notice. Commons page declarations and a local pixel match do not establish uploader authority or an independent rights chain; no such clearance is claimed.

The Parkway page adds [the original three-corridor SVG](/workspace/tripdistill/assets/images/tripdistill-canada-jasper-three-corridors.svg), styled by [canada-jasper.css](/workspace/tripdistill/css/canada-jasper.css). It separates Jasper town, Maligne Valley and the southbound Parkway on a non-scale planning schematic; it does not imply a service, travel time or open road. Its visible legend includes English, Traditional Chinese, Japanese, Korean and Thai, with links to the self-hosted SVG and site Terms of Use. It is marked as a project original with no separate reuse license declared; commercial reuse eligibility remains unknown.

The old Johnston/Minnewanka WebP shows a forest stream rather than the described route. Its source file and listed metadata remain preserved and marked `unused`, with zero live page references; the build excludes it from `dist`. Its exact Commons page was not independently checked, so its source-page declaration remains unverified. The original Banff SVG stays in place and continues to serve its existing page.

## Validation record

- `npm run audit:i18n`: four catalogs × 55,798 strings; zero missing or stale keys.
- `npm run audit:canada`: 18 hubs, 54 guides, 73 English routes and 365 five-language routes.
- `npm run test:canada-ca08-route-dates`: Jasper’s four existing routes plus the updated Canada index across five locales; Article dates, canonical URLs, sitemap dates and all 73 Canada search routes passed.
- `npm run test:canada-ca08-svg-assets`: Python `xml.etree.ElementTree` parsed the SVG; text and shape geometry stayed within the `viewBox`; five-language legend, five localized source/Terms links and retained-but-unpublished Johnston file passed.
- `npm run audit:photo-license-inventory`: three Jasper photo source records and local pixel reviews passed; the Maligne version variants are recorded; the Johnston source remains unused; no metadata conflicts or open image-credit reviews were reported. The inventory counts 10 project-original rights records and 509 photographic license claims without an independent source-page check.
- `npm run audit`: passed, including the Canada, China CN14B, UK, France, Malaysia photo/schematic/date, Lake District and Somerset regressions; site audit checked 4,560 published routes, 955 search records per language and 4,560 unique localized titles.
- `npm run build`: passed with 5,469 files (4,577 HTML files and 801 images); all 4,560 sitemap URLs were verified in `dist`.
- `git diff --check`: passed. No integration, main or production branch was changed.

No browser, headless browser, CDP, local server, crawler, deployment, integration/main branch update or production action was used. Static tests do not establish browser/UI acceptance or rights-chain clearance.
