# Switzerland CH14 — country overview and three regional hubs

**Review date:** 12 October 2026
**Source branch:** `codex/sprint-ch-14-content-20261013`
**Exact base:** `fec6b5fa8001c933512d5aa58dc1b24d5b62bf06` on `codex/sprint-ch-13-content-20261012`
**Scope:** four existing paths: the country overview and the Lugano, Locarno/Ascona and Schaffhausen hubs.

## Scope and route depth

The four changed paths are [Switzerland](/switzerland/), [Lugano & Southern Ticino](/switzerland/lugano-southern-ticino/), [Locarno, Ascona & Ticino Valleys](/switzerland/locarno-ascona-valleys/) and [Schaffhausen & Rhine Falls](/switzerland/schaffhausen-rhine-falls/). Switzerland advances from 52 to 56 refreshed English paths out of its existing 65. The three hubs still link to their original children; all nine child-page files and every other Swiss English page remain byte-identical to the exact base. No URL, draft, or child route was added or enabled.

Visible English `<main>` text is 6,295 words across the four pages, 1,752 more than the exact base: 2,137 on the country overview (+274), 1,378 on Lugano (+498), 1,372 on Locarno (+513), and 1,408 on Schaffhausen (+467). Counts are a scope check, not an editorial score.

The source-content comparison used the same-level Japan pages [/japan/](/japan/) and [/japan/osaka/](/japan/osaka/). Japan's country page compares trip windows, realistic base sequences and hotel-change time; Osaka compares hotel districts and their trade-offs, then groups a three-day route by geography. CH14 applies those functions to a five-to-fourteen-night country choice and to three distinct rail-and-lake operating bases. This comparison was source-content only. No desktop/mobile browser render was made under the task's no-headless/no-CDP/no-local-server constraint.

The country page offers 5–7, 8–10 and 12–14-night route shapes, with Zurich, Lucerne, Bern, the Jungfrau area and a separate Ticino finish. The hubs compare base locations, realistic nights and one corridor per day, then give a four-stage arrival/visit/return sequence, shorter or longer stay alternatives and a place-specific weather or service fallback. Lugano distinguishes the city funicular, the separate Monte Brè and Monte San Salvatore access, SNL lake routes and the Monte Generoso railway from Capolago-Riva San Vitale. Locarno separates FART bus corridors from Centovalli rail and gives Verzasca, Maggia and the lake towns distinct day choices. Schaffhausen identifies the north-bank Neuhausen Rheinfall and south-bank Schloss Laufen am Rheinfall approaches before adding the old town or Stein am Rhein.

## Official information checked

Relevant operator and destination pages were checked on 12 October 2026. They support route orientation and source links; they do not promise a future departure, fare, ticket price or opening status.

- Country planning links to [Switzerland Tourism](https://www.myswitzerland.com/en/), [SBB](https://www.sbb.ch/en), [MeteoSwiss](https://www.meteoswiss.admin.ch/) and the [Swiss Federal Office for Customs and Border Security](https://www.bazg.admin.ch/en/travel-and-purchases-allowances-and-duty-free-limit).
- Lugano references [Lugano Region](https://www.luganoregion.com/en), its [lake-cruise guidance](https://www.luganoregion.com/en/things-to-do/sport-and-nature/lake/cruises), the [Monte Brè funicular operator](https://www.montebre.ch/en/), the [Monte Generoso Railway](https://www.montegeneroso.ch/en) and SBB.
- Locarno references the [Ascona-Locarno visitor portal](https://shop.ascona-locarno.com/en/), [FART line 620](https://fartiamo.ch/en/line-620/), the [Vigezzina-Centovalli Railway](https://www.vigezzinacentovalli.com/en/), [Valle Verzasca](https://www.verzasca.ch/en/) and SBB.
- Schaffhausen references [Schaffhauserland Tourism](https://en.schaffhauserland.ch/), [Rhine Falls visitor information](https://rheinfall.ch/en/), its [bank-specific arrival and station guidance](https://rheinfall.ch/en/inform/journey/list), SBB and the [Town of Stein am Rhein](https://www.steinamrhein.ch/).

Copy directs travelers to verify their actual date, operating season, selected bank or stop, return connection, weather and access. It does not state unknown fares or timetables as guarantees.

## Images and original schematic

The Lugano, Locarno/Ascona and Rhine Falls local WebP pixels were inspected separately from their Commons pages. The pixel subjects match the stated lakefront ferry, Lake Maggiore town-and-lake view, and waterfall/viewing-platform scenes. The exact [Lugano Commons page](https://commons.wikimedia.org/wiki/File:Lakefront_Lugano_2017-05-29_13.15.22.jpg) identifies Chris j wood and declares CC BY-SA 4.0; [Locarno's page](https://commons.wikimedia.org/wiki/File:Locarno,_Ascona_%26_Lago_Maggiore_von_Brione_sopra_M.jpg) describes the Brione sopra Minusio view, identifies Glenn Steiger and lists CC BY 3.0 among its licenses; [the Rhine Falls page](https://commons.wikimedia.org/wiki/File:Caught_in_turbulent_waters_at_the_Rhine_Falls,_Neuhausen_-_panoramio.jpg) identifies “More pics than views…”, records 4 July 2014 and declares CC BY 3.0. Visible page credits link to the source and selected license and disclose WebP conversion/cropping. These source-page declarations and pixel matches do not establish uploader authority or independently clear the rights chain.

The new [Switzerland route-choice SVG](/assets/images/switzerland-country-route-choice.svg) compares Zurich–Lucerne, Lugano–Locarno and Zurich–Schaffhausen route shapes. Each panel includes English, Traditional Chinese, Japanese, Korean and Thai route labels. Its labels explicitly say the connecting lines are conceptual, not geographic; the drawing is not to scale and presents no live service, exact journey time or fares. The SVG parses as XML and a regression checks the element set, viewBox geometry, bounds, all five language labels and its SHA-1 `09aa3fca3edbb8fe02732a6483da595081cc7b2d`. The manifest records TripDistill Editorial Team as creator, `Project original; no separate reuse license declared`, and the site Terms of Use; it makes no public-license or commercial-reuse claim. Image rights records are in [the generated photo inventory](photo-license-inventory.md).

## Localization, dates and scope checks

Traditional Chinese, Japanese, Korean and Thai batches each cover the same four routes, 126 new translation keys and reviewed source content. Their provenance says that the runtime did not expose a selectable GPT-6 Luna variant; the same model drafted and self-reviewed the translations, with no independent second-model review. Route-sized samples were checked for long copy, names, numbers, warnings and source-credit language. This is not Luna Max, independent or human review.

The four English pages and all five editions retain their 12 September 2026 publication date and show 12 October 2026 as the modification/review date. The country overview's sitemap date was already 12 October at the exact base; this batch updates the three hubs across five editions (15 `lastmod` values). Sitemap URLs remain 4,560 and the four existing search records are the only Swiss records changed. The CH14 regression checks all 65 English Swiss paths against the exact base outside these four routes, and checks every non-target localized Swiss page and search record against output reconstructed from the pre-CH14 reviewed translations.

The project i18n approval step also required pruning dead strings from older reviewed batches: 31 unused keys per locale were removed (124 total). The generated non-target localized Swiss pages and search records remain unchanged. No shared navigation, children, home/about page or draft was regenerated.

## Verification record

The dedicated CH14 regression passes: it checks route count and base comparison, body-word delta, five-language metadata and search, dates, unchanged sitemap URL set, non-target Swiss localized output, translation provenance, SVG XML and geometry, and the original-image manifest hash. The photo-inventory regression passes and separately checks the three source-page records, pixel-review status and original-SVG rights status. `npm run build` passed with 5,474 artifacts (4,577 HTML and 808 images) and verified all 4,560 sitemap routes. After the build, full `npm run audit` passed, including translation coverage (56,247 required strings in each of four localized editions, zero missing or stale), all country audits, CH10–CH14 Swiss regressions, image provenance, date/search checks and the site audit (4,560 localized pages, 955 search records per language and 4,560 unique localized titles). `git diff --check` is recorded after the final source review.

No whole-site external source crawler, browser/headless session, CDP, local server, production deployment or integration was used. This source branch does not claim rendered desktop/mobile acceptance, user editorial approval of every page, or AdSense eligibility.
