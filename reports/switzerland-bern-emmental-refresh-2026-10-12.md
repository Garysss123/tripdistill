# Switzerland CH09: Bern & Emmental refresh

**Date:** 2026-10-12
**Branch:** `codex/sprint-ch-09-content-20261012`
**Base:** `1d6da4bf2fff506f290b2132b093f124d4252289` (CH08 Montreux)
**Parent of base:** `063b1d71d0ead0908cc96b8fdc9e32242d07f01b`

## Scope and route stability

This batch deep-edits the Bern & Emmental hub and its three existing children:

- [`/switzerland/bern-emmental/`](../switzerland/bern-emmental/)
- [`/switzerland/bern-emmental/old-city-aare/`](../switzerland/bern-emmental/old-city-aare/)
- [`/switzerland/bern-emmental/museums-rose-garden/`](../switzerland/bern-emmental/museums-rose-garden/)
- [`/switzerland/bern-emmental/emmental-day-trip/`](../switzerland/bern-emmental/emmental-day-trip/)

The Swiss inventory remains 16 hubs, 48 children and 65 English routes. No route was added or removed. The four routes and their translated editions retain their URLs; exactly their 20 existing sitemap entries receive the 12 October date. The dependent Switzerland card and existing Bern sidebar label were synchronized. Other Swiss article bodies were not rewritten.

For the same-level source comparison, I read the existing [Hokkaido hub](../japan/hokkaido/) and [Asakusa & Ueno guide](../japan/tokyo/asakusa-ueno/). Their rendered `<main>` bodies contain 1,625 and 1,487 words. Bern's current hub and children contain 1,910, 1,369, 1,351 and 1,579 words. Against the exact CH08 base, they add 906, 313, 368 and 551 words (2,138 total). Counts are a content-diff measure; useful route choices, named transfers, readable sequences and fallbacks were compared in the source. No browser render or viewport comparison was run under the task's no-browser/no-server constraint, so this is not the README's visual release acceptance.

## What changed

The hub compares two nights for Bern, three for a separate Emmental day and four for a slower museum-and-country stay. It compares Bahnhofplatz and the western old city with the eastern old-city/Aare side, and explains when a rural overnight only helps. Named connection choices include Bern Hauptbahnhof, BERNMOBIL streetcar 9 and S1/S31 to Gurtenbahn, and the Emmentaler Show Dairy's Huttwil or Hasle-Rüegsau rail gateways followed by a BLS bus or booked mybuxi transfer.

The Old City & Aare guide sequences Bern station, Bundesplatz, Marktgasse/Kramgasse, Zytglogge, Münsterplatz and Nydeggbrücke; the lower riverside leg is optional. It separates the covered ridge route from steeper, cobbled river descents and gives rain and shorter-walking choices. The museum guide makes Bern History Museum and Zentrum Paul Klee competing collection anchors, then separates the nearby Rosengarten view from the larger Gurten outing. It describes the spring cherry blossom, summer rose and autumn-colour windows without promising a bloom date.

The Emmental guide presents three distinct day shapes: Burgdorf town and castle, Affoltern im Emmental's show dairy, or one currently mapped countryside walk from a rail gateway. It plans from the return connection, asks travelers to verify any BLS/mybuxi feeder and dairy reservation for their date, and treats farm roads and fields as working/private land unless a route is signed for visitors. In poor weather, short daylight or a missed rural connection, the fallback is rail-accessible Burgdorf or Bern. The text makes no unverified fare, headway, future departure, opening or reservation guarantee.

## Official source checks and limits

Narrow checks used Bern Welcome for [local transit and the Bern-Ticket](https://bern.com/en/inform/on-the-move-in-bern/), [arrival and rail connections](https://bern.com/en/inform/arrival/travelling-to-bern), [Gurten access](https://bern.com/en/explore/activities-and-excursions/gurten), [Rosengarten seasons](https://bern.com/en/news/stories-and-recommendations/rose-garden), the [Bern History Museum](https://bern.com/en/explore/tourist-attractions/art-culture/bern-history-museum), [Zentrum Paul Klee](https://bern.com/en/explore/tourist-attractions/art-culture/zentrum-paul-klee) and the [Emmental region](https://bern.com/en/explore/destination-bern/emmental-valley/). UNESCO's [Old City of Berne record](https://whc.unesco.org/en/list/267/) supports the historic urban-plan context.

Transport and visit details link to [BERNMOBIL](https://www.bernmobil.ch/en), [SBB](https://www.sbb.ch/en), [BLS timetable](https://www.bls.ch/en/fahren/fahrplan), [mybuxi](https://www.mybuxi.ch/en), the [Emmentaler Show Dairy arrival page](https://www.emmentaler-schaukaeserei.ch/en/emmentaler-swiss-diary/contact-and-arrival.php), its [King's Way visitor page](https://www.emmentaler-schaukaeserei.ch/en/discover/Kings-Way-Tour.php) and [reservation information](https://www.emmentaler-schaukaeserei.ch/en/emmentaler-swiss-diary/reservation.php), and [Burgdorf Castle](https://schloss-burgdorf.ch/en/). The published gateway descriptions do not ensure an exact-date service or a future booking slot; readers are directed to the operator for live conditions.

## Images and SVG record

Pixel review found that the Old City/Aare and Rosengarten photographs match their named subjects. Their Commons records identify Sergey Ashmarin / CC BY-SA 3.0 and Daniel Kraft / CC BY-SA 3.0. Human-readable display captions replaced raw Commons filenames; the old filename translations were removed as stale and the new captions were translated. Source declarations and pixel fit do not independently verify uploader authority or rights chain.

The former Emmental photograph showed a sunset silhouette of two visitors beneath a bare tree, not a recognizable farmhouse or Emmental scene. It remains byte-identical in the repository with `inventoryStatus: unused`, no active image reference, and its source-declared CC BY-SA 4.0 retained as historical metadata. This does not independently establish the pictured location or rights.

Added [`switzerland-bern-emmental-gateway-choices.svg`](../assets/images/switzerland-bern-emmental-gateway-choices.svg), SHA-1 `e0111ab8ddc5345216d6cc4cec956dde4a0c6a6a`. It is an original planning schematic with localized legends in all five editions. The figure is conceptual, not geographic or to scale, and it provides no live timetable or fare data. The SVG declares no separate reuse license. Its regression parses the XML and checks the 1600 × 1066 viewBox, element allowlist, bounded geometry and localized text placement. The existing Rigi 20c and Zermatt 2566 assets remain unchanged under byte-for-byte regression checks.

## Five-language, search and date work

Reviewed batches in Traditional Chinese, Japanese, Korean and Thai each cover 171 active strings for the four pages and dependent Switzerland card, including the newly human-readable photo captions and the original diagram legend. The batch provenance records Codex (GPT-6) as writer and same-model self-reviewer; there is no independent second-model or human review claim. All four locale catalogs pass with 56,002 required strings and zero missing or stale entries.

The four English and translated route summaries and search terms match their Article descriptions; each language has one route record for each page. The sitemap keeps the same 4,560 URLs and changes exactly 20 `lastmod` values (four existing routes × five editions) to `2026-10-12`. The route regression also checks canonical/hreflang links and Article dates. The site continues to have 955 search records per language.

## Verification and remaining limits

- `npm run audit` passed, including i18n, search, photo guards and inventory, Switzerland and cross-country audits, CN14B, France/UK/Malaysia regressions, Lake District and Somerset diagrams, and the full 4,560-route site audit.
- `npm run build` passed: 5,471 files (4,577 HTML and 805 images; 320.3 MiB), with all 4,560 sitemap routes verified in `dist`.
- Bern/Emmental's four-route × five-edition regression passed: 20 dates, unchanged sitemap URL set, localized search/metadata, retired-photo byte preservation, protected Rigi/Zermatt files and parsed SVG/XML geometry.
- Lucerne, Jungfrau, Zermatt, Interlaken, Geneva, Lausanne and Montreux regressions passed. Their exact-base date assertions include the Bern/Emmental dates where applicable.
- The photo inventory regression passed with 13 project-original artwork records and 805 expected build images. It does not provide independent rights clearance.
- `git diff --check` passed.

No browser, headless UI, CDP session or local server was used. No whole-site source crawler, integration/main update, deployment, production check, force push or security change was performed. The user-facing visual review, independent image-rights-chain clearance and any later integration approval remain separate.
