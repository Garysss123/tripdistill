# Saguenay Fjord & Tadoussac Canada hub refresh

Reviewed 12 October 2026 on `codex/sprint-ca-13-content-20261013`, based directly on `2af2a29577957d56fe530844039491ca0b3dac06` (`codex/sprint-ca-12-content-20261012`). The repository instructions, prior refresh notes and Canada route inventory were checked first. With 48 of Canada’s 73 existing routes already covered, this updates the next untouched hub group: the Saguenay Fjord & Tadoussac hub and its three existing child routes. It brings the working count to 52/73. No route was added or removed, and `/canada/` was not changed.

## Routes and English content delta

The `parse5` regression compares visible English `<main>` text with the exact base commit above. Its whitespace-delimited word differences measure copy volume, not editorial quality.

| Existing route | Added visible English main-body words |
|---|---:|
| [Saguenay Fjord & Tadoussac hub](/canada/saguenay-tadoussac/) | 851 |
| [Tadoussac & Marine Park](/canada/saguenay-tadoussac/tadoussac-marine/) | 739 |
| [Saguenay Fjord Hiking](/canada/saguenay-tadoussac/fjord-hiking/) | 773 |
| [Saguenay City & Fjord Valley](/canada/saguenay-tadoussac/saguenay-city-valley/) | 701 |
| **Total** | **3,064** |

The hub distinguishes Tadoussac, one selected fjord sector and the Saguenay city area as separate day and base choices. It gives a three-night plan, a fourth-night weather margin, lodging and transport decisions, and a local fallback. The Tadoussac guide starts with the actual dock, check-in, forecast and return, with a shore-based alternative. The hiking guide treats Baie-Éternité, Baie-Sainte-Marguerite and Tadoussac as separate access decisions, requires a named trail and turnaround, and keeps an indoor or lower-effort fallback. The city guide uses Chicoutimi or La Baie as a service base, with a cultural stop, short local walk and verified public riverfront access.

## Same-level Japan source comparison

For the README’s same-level check, `parse5` read the English source pages [Hokkaido](/japan/hokkaido/) and [Otaru & Shakotan](/japan/hokkaido/otaru-shakotan/), with no browser or local server. In the source `<main>`, Hokkaido has 1,625 words, 33 headings and five FAQ entries; the Saguenay hub has 1,660 words, 22 headings and four FAQ entries. Otaru & Shakotan has 1,132 words, 22 headings and four FAQ entries; Saguenay Fjord Hiking has 1,481 words, 17 headings and three FAQ entries. The comparison checked that the new routes state practical access, base choices, route sequence, return constraints and weather alternatives at comparable depth. Counts are not a quality score. Rendered browser and viewport acceptance remains unreviewed.

## Official operating snapshot

The following official sources were checked for the route-specific claims on 12 October 2026. These are date-bound observations; opening windows, services, weather and access can change.

- [Parks Canada — Saguenay–St. Lawrence Marine Park](https://parks.canada.ca/amnc-nmca/qc/saguenay) was checked for park context and visitor guidance.
- [Sépaq — Fjord-du-Saguenay](https://www.sepaq.com/pq/sag/index.dot?language_id=1) lists trails by sector and date. On 12 October 2026, the page listed the 3 km Halte du Béluga trail through that date and several short walks through 18 October. These are dated listings, not a promise of future-year openings.
- [Fisheries and Oceans Canada — marine mammal viewing](https://www.dfo-mpo.gc.ca/species-especes/mammals-mammiferes/watching-observation/index-eng.html) states minimum viewing distances of 400 m for endangered or threatened cetaceans, including beluga, in the Saguenay–St. Lawrence Marine Park, and 100 m for cetaceans in other Saguenay River areas. Follow current posted and operator guidance.
- [Société des traversiers du Québec — Tadoussac–Baie-Sainte-Catherine ferry](https://www.traversiers.com/en/our-ferries/tadoussac-baie-sainte-catherine-ferry/schedule) was checked for its route-specific schedule and notices. The guide only includes this crossing when an itinerary uses Highway 138 between Baie-Sainte-Catherine and Tadoussac; other approaches do not necessarily require it.
- [Société de transport du Saguenay](https://sts.saguenay.ca/) publishes urban transit routes and service information. The guide does not assume those routes reach remote park trailheads.
- [La Pulperie de Chicoutimi](https://www.pulperie.com/en/) was checked for museum context and visitor information. The guide directs readers to verify current exhibitions and hours.

Fares, future schedules, wildlife sightings, trail status, road access, museum hours and weather are not guaranteed. Each guide directs travelers to check current notices before booking or setting out.

## Existing photo pixels and source-page declarations

The three local WebP images were visually inspected separately from their exact Commons file pages. The inventory records the page’s creator/license declaration, not independent uploader authority or rights-chain clearance. The visible credits link the source and license and disclose resizing, display cropping, WebP conversion and ShareAlike terms.

| Local image | Pixel review | Commons page declaration |
|---|---|---|
| `canada-saguenay-tadoussac-tadoussac-marine.webp` — SHA-256 `df2fc159c549c046abcde532b138933777f5154971a6f79ff9c96d7d52c2c4b5` | Harbor and waterfront below a forested ridge across the water; no whale is visible. | [Tadoussac.jpg](https://commons.wikimedia.org/wiki/File:Tadoussac.jpg) — Bodoklecksel, CC BY-SA 3.0. |
| `canada-saguenay-tadoussac-fjord-hiking.webp` — SHA-256 `22076f7093ea1691dc4aeaf941f79e36a5c2f4c626f75a6d684135bfc76741fe` | Forested fjord ridges framed by pine branches; no hiker or prominent cliff face is visible. | [SaguenayFjord.JPG](https://commons.wikimedia.org/wiki/File:SaguenayFjord.JPG) — Ajor933, CC BY-SA 3.0. |
| `canada-saguenay-tadoussac-saguenay-city-valley.webp` — SHA-256 `f4467cddd859c2d4dee7b6256f5d334e3e1e175ef902a864cc0de778f6ac7987` | Chicoutimi waterfront lights reflected on the Saguenay River at night. | [2016-10 Saguenay river — Chicoutimi at night](https://commons.wikimedia.org/wiki/File:2016-10_Saguenay_river_-_Chicoutimi_at_night_01.jpg) — 0x010C, CC BY-SA 4.0. |

The image bytes are unchanged; only alt text was adjusted to match the observed pixels. The Commons page statements and local pixel matches do not independently establish a rights chain.

## Original five-language SVG

The [sector-choice schematic](/assets/images/tripdistill-canada-saguenay-sector-decisions.svg) is an original 1200 × 700 XML vector with actual shapes and text, not an embedded raster. It compares three access decisions and contains English, Traditional Chinese, Japanese, Korean and Thai legends and disclaimers. It is explicitly schematic, not to scale, and does not depict geography, roads, trails, a ferry route or travel times. The visible credit says “Project original; no separate reuse license declared” and links the Terms of Use; no public reuse license or commercial eligibility is asserted. SHA-1: `61d9e1132cd0956e3ec05aaaf873a487770bed50`.

## Translations and review provenance

Four reviewed locale batches each contain 118 CA13 page keys for the four routes. All four passed `i18n:batch` and sampled review; Traditional Chinese, Japanese, Korean and Thai samples reported no reused long translation for different source sentences. The full catalog audit checked 55,993 required strings per locale with zero missing or stale keys.

The active execution environment exposed GPT-6 but did not expose the Luna versus Luna Max sub-tier. Batch provenance records the current GPT-6 execution model and same-model self-review, with `independentSecondModel: false`; no independent-model, human or Luna Max review is claimed. To allow the required catalog merge, the documented stale-key pruner also removed 352 obsolete entries from existing reviewed bundles: 85 old Saguenay keys and three old Montréal keys per locale. Current source keys remain fully covered.

## Validation and limits

- `npm run audit` passed after build. The site audit checked 4,560 localized routes (912 in each edition), 955 search records per language and 4,560 unique localized page titles. The Canada audit retained all 73 English routes and 365 five-language route entries.
- `npm run build` passed with 5,476 files (4,577 HTML and 805 images) and verified all 4,560 sitemap routes.
- `test:canada-ca13-route-dates` passed for the four existing routes, all five editions, canonical/article dates, the exact sitemap URL set and 73 unchanged Canada search URLs. Only the four target routes’ summaries changed; only those four routes’ 20 localized `lastmod` entries changed. The country card was not edited.
- `test:canada-ca13-svg` passed XML, unique-ID, geometry bounds, genuine-vector and native Inkscape pixel-render checks. `audit:photo-license-inventory` passed with 803 image assets, 14 project-original artwork records and 503 photographic license claims still marked as not independently verified.
- The full audit also passed the Canada, prior CA09–CA12 compatibility, localized search, photo-license, image-provenance, country, Malaysia, China, France, UK, Switzerland and Italy regressions. `git diff --check` passed before this report was added; it is rerun in the final source diff pass.
- Official source checks were targeted to this group. No whole-site external source crawler, browser/headless/CDP review, local server, deployment or production action was used. The source-level Japan comparison and native SVG render are not browser/UI acceptance. Time-sensitive trip details and photo-rights chain remain outside what this review can guarantee.
