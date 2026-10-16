# United Kingdom country overview refresh — 12 October 2026

## Scope

Updated the existing `/united-kingdom/` country overview and its single search-index record from source commit `e7f8f23a11e800f85185dafab66b468808f91288` on branch `codex/sprint-uk-20-20261012`. No route was added and no English regional hub or child page was rewritten. The overview now helps readers choose a realistic number of nights and bases across England, Scotland, Wales and Northern Ireland; compare rail, coach, car and rural last-mile decisions; choose entry and exit airports; and hold weather, ferry and booking contingencies.

It includes 5–7, 8–10 and 14-night examples, including a clearly labeled city-focused four-nation route (London 4 / Cardiff 3 / Edinburgh 4 / Belfast 3) and guidance to add rural nights or remove a city base. Airport guidance distinguishes London's separate terminals and rail arrival points, describes open-jaw options without assuming suitable flights, and treats Northern Ireland as a separate air or sea leg. Seasonal notes pair exposed days with same-base alternatives. The overview does not guarantee a price, timetable, seat, connection or seasonal service.

## Copy count

The seven visible decision sections (hero, route rules, transport network, nights, seasons, airports and FAQ) contain 819 words at the source commit and 1,736 words after this refresh: **917 net additional visible words**. This section count includes headings, route examples and FAQ answers; it excludes the unchanged regional directory and the source/credit list. At paragraph level, 13 substantive `<p>` passages were rewritten: 771 words of new paragraph copy replaced 365 words, a net increase of 406 words.

## Official live references checked

Checked 12 October 2026: [National Rail Journey Planner](https://www.nationalrail.co.uk/journey-planner/), [National Rail airport connections](https://www.nationalrail.co.uk/airports/trains-to-british-airports/), [Transport for London airport connections](https://tfl.gov.uk/travel-information/visiting-london/getting-to-london/london-airports), [National Express](https://www.nationalexpress.com/en), [Translink Journey Planner](https://www.translink.co.uk/journeyplanner), [Stena Line Cairnryan–Belfast](https://www.stenaline.co.uk/routes/cairnryan-belfast), [CalMac timetables](https://www.calmac.co.uk/timetables/), and [Met Office warnings](https://www.metoffice.gov.uk/weather/warnings-and-advice/uk-warnings). The page points readers to date-specific operator planners and live warnings; it does not state unknown fares or services as guaranteed. A Transport for Wales journey-planner link was omitted because the official page could not be verified in the live check.

## Editions, dates and assets

Completed Traditional Chinese, Japanese, Korean and Thai translations and self-reviewed them in Luna (the same model used to draft them); no independent second-model or human review is claimed. The reviewed batches passed the repository validator, translation sampler and global i18n audit. The search summary and five added keywords were translated for the same four editions. Removed 132 obsolete source-key entries from legacy translation batches so active-key coverage has no stale keys; no active text was removed.

The country page's `datePublished` remains `2026-09-20`; `dateModified` and the `/united-kingdom/` sitemap `lastmod` are `2026-10-12` in English and all four localized editions. The date regression checks 405 language pages and verifies the country overview's five sitemap records. The visible note says country transport and seasonal guidance were rechecked on 12 October, while existing image credits and licenses remain associated with the 20 September photo review. No images, SVGs, credit records or rights metadata changed; no Commons source page was reopened.

## Verification

- `npm run audit` passed, including translation coverage and stale-key guards; search-index, photo-license and site-image-provenance guards; France date sync; UK structure, dates, search, SVG/photo provenance and regional date/search guards; Italy/Puglia; Malaysia dates/photo schematic; China dates and CN14B; Lake and Somerset diagrams; and the site-wide route/search audit.
- `npm run build` passed: 5,466 files (4,577 HTML), with 4,560 sitemap routes verified in `dist/`.
- The UK19 SVG/photo regression passed its structural, localization and provenance checks. **This does not establish pixel QA for the two UK19 SVGs**, which remains a separate parent-task review.
- No browser, headless browser, CDP, server or viewport screenshot was used. Visual layout QA is therefore not claimed.
