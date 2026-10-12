# Kota Kinabalu and Tunku Abdul Rahman Park refresh — 12 October 2026

## Scope and routes

Refreshed the existing hub and its four existing children; no URL was added.

- `/malaysia/kota-kinabalu-tunku-abdul-rahman/`
- `/malaysia/kota-kinabalu-tunku-abdul-rahman/gaya-street-waterfront/`
- `/malaysia/kota-kinabalu-tunku-abdul-rahman/tanjung-aru-museum/`
- `/malaysia/kota-kinabalu-tunku-abdul-rahman/manukan-mamutik/`
- `/malaysia/kota-kinabalu-tunku-abdul-rahman/sapi-gaya-islands/`

These are the Kota Kinabalu routes that had not been refreshed in this sprint. The completed Perhentian/Redang source, Taman Negara, Penang, Cameron Highlands, Ipoh, Langkawi and Melaka work was left out.

## Planning changes

The hub now recommends four nights for a city-and-island visit, with a fifth night as optional weather and recovery margin. It compares a walkable Gaya Street/waterfront base with Tanjung Aru and an island stay: each trades access to food and city services against beach time, transfers, and dependence on boat service. Island accommodation is treated as a separate booking that needs direct confirmation.

Transport advice names the actual endpoints. Sabah Tourism Board distinguishes Jesselton Point South Jetty near Jesselton Quay, DBKK Jetty behind Suria Sabah, and hotel or resort marinas such as Sutera Harbour. The guide tells visitors to match the booked ticket to the operator, pier, island landing and return point rather than treating the terminals as interchangeable. It does not publish an unverified fare or boat timetable.

The child routes now give distinct, usable days:

- **Gaya Street and waterfront:** walk the Gaya Street heritage area, continue uphill toward Atkinson Clock Tower only if the heat and grade suit the group, then return through the waterfront. The Sunday market is identified as Sunday-only; a short ride is the heat or rain fallback.
- **Tanjung Aru and Sabah Museum:** separate the museum visit from the road transfer to Tanjung Aru Beach and Perdana Park; verify museum hours and beach conditions, and leave a flight buffer.
- **Manukan and Mamutik:** compare the developed park base at Manukan with compact Mamutik; confirm the exact boat, current facilities, return pickup and operator sea-state decision. A city museum or waterfront day remains the land fallback.
- **Sapi and Gaya:** name the landing and route being booked, distinguish public streets, protected forest, resort and village boundaries, and do not assume a day ticket includes resort access or an onward transfer.

The seasonal note is explicitly a broad Sabah travel cue. For sea trips it points to METMalaysia’s Western Sabah and Labuan marine forecast and the booked operator’s current decision. It does not imply that a generally drier month guarantees a safe departure.

## Sources checked

The pages were checked on 12 October 2026. Official sources used in the revised routes include:

- [Sabah Parks: Tunku Abdul Rahman Park](https://www.sabahparks.org.my/tunku-abdul-rahman-park), [activities and facilities](https://sabahparks.org.my/tunku-abdul-rahman-park/activities-facilities), and [marine life](https://www.sabahparks.org.my/tunku-abdul-rahman-park/marine-life).
- [Sabah Tourism Board: Tunku Abdul Rahman Park](https://sabahtourism.com/destination/tunku-abdul-rahman-park/) and [getting around Sabah](https://sabahtourism.com/essential/getting-around/), for island context and distinct KK boat terminals.
- [METMalaysia: Western Sabah and Labuan marine forecast](https://www.met.gov.my/en/forecast/marine/waters/Co503/).
- [Sabah Tourism Board: Sabah travel checklist](https://sabahtourism.com/article/checklist-prior-to-travel-to-sabah-especially-during-the-post-pandemic/), used only for the broad seasonal cue.
- [Sabah Museum visitor information](https://museum.sabah.gov.my/content/guest-info), [KK Heritage Walk](https://sabahtourism.com/destination/kk-heritage-walk/), [Gaya Street Sunday Market](https://sabahtourism.com/destination/gaya-street-sunday-market/), [Jesselton Point Waterfront](https://sabahtourism.com/destination/jesselton-point-waterfront/) and [Tanjung Aru Beach](https://sabahtourism.com/destination/tanjung-aru-beach/).

Current fares, boat schedules, terminal assignments by operator, admission changes, sea cancellations and availability were not asserted as fixed facts. Travelers are directed to the dated official or operator source before booking.

## Five-language, search and date coverage

English and Traditional Chinese, Japanese, Korean and Thai versions were updated for all five routes. Search records were refreshed in all five languages. Every published locale catalog has 55,696 current strings and zero missing entries; each locale has 955 search records. The five English routes and their 20 localized equivalents carry the 12 October 2026 editorial date in structured page metadata and the sitemap.

The four non-English versions were directly translated and self-reviewed by the same available model. This was not an independent second-model review, human review, or external approval. The corresponding reviewed translation batches and the new search batch are recorded in `data/i18n/reviewed/`; each locale has 238 new page translations and 21 new search translations. To pass the global catalog approval, 652 obsolete translation entries whose source keys no longer exist were pruned from older batches; that cleanup did not add or remove any page route.

The sitemap still contains 4,560 URLs. Comparison with the branch base found no added or removed URLs and exactly 25 modified `lastmod` values: the five refreshed routes in five editions.

## Images

The three existing 1440 × 960 WebP images were inspected at pixel level and compared with their exact Commons descriptions, creators and listed license versions. The sunset shows the Kota Kinabalu waterfront, sea and islands; the jetty image shows passenger boats; the aerial shows the Sabah coast and islands. Their current descriptions and credits match the pixels and source-page declarations. Each page discloses resizing, center-cropping and WebP conversion. No mismatch required a diagram replacement, so no SVG was added and the original asset bytes were retained.

See [the photo review](malaysia-kota-kinabalu-photo-review-2026-10-12.md) for exact source pages, resolutions, SHA-256 hashes and license notes. The review records source-page declarations; it is not independent rights or chain-of-title clearance.

## Content deltas

Visible `<main>` word counts were measured at source level against the branch base:

| Existing page | Before | After | Added words |
|---|---:|---:|---:|
| Hub | 1,451 | 2,297 | 846 |
| Gaya Street & Waterfront | 594 | 1,098 | 504 |
| Tanjung Aru & Sabah Museum | 555 | 1,103 | 548 |
| Manukan & Mamutik | 566 | 1,108 | 542 |
| Sapi & Gaya Islands | 558 | 1,086 | 528 |

The route structure and planning depth were compared at source level with the existing Osaka Namba guide at `/japan/osaka/namba/`. This work did not use a rendered browser review.

## Verification

- `npm run build` passed. It emitted 5,466 files, including 4,577 HTML pages and 800 images, and checked all 4,560 sitemap URLs.
- The complete `npm run audit` passed, including i18n and search guards, site image provenance and photo inventory, all country audits, France/UK/Italy route-date regressions, Malaysia Cameron/Langkawi/Melaka/fourth-child/Kota Kinabalu regressions, China CN14B and route dates, UK Lake District and Somerset diagrams, and the site audit.
- Separate France Provence search, Malaysia Taman Negara refresh, and UK Cornwall, Oxford, Bath, Liverpool/Manchester and Birmingham date/search checks passed.
- `git diff --check` passed. Three local WebP files remained byte-for-byte unchanged.

This is a source and local-build review. No browser/headless/CDP review, deployment, or production claim was made.
