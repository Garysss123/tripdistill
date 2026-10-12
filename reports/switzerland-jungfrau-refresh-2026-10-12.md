# Jungfrau Region hub and field guides — 12 October 2026

## Scope and comparison

This source-only batch starts from exact commit `83ba1e43c6fe872ae74747c21d1f6a2829253293` (`codex/sprint-ch-02-20261012`) on `codex/sprint-ch-03-20261012`. Git history shows the Zurich cluster was refreshed earlier and Lucerne was the immediately preceding four-route Switzerland refresh. This batch therefore selects the untouched Jungfrau Region hub and its complete three-guide cluster. It adds no URLs and does not rewrite the country overview, Zurich, Lucerne or the Rigi guide.

The four existing routes are the [Jungfrau Region hub](../switzerland/jungfrau-region/), [Lauterbrunnen Valley & Mürren](../switzerland/jungfrau-region/lauterbrunnen-valley/), [Wengen & Kleine Scheidegg](../switzerland/jungfrau-region/wengen-kleine-scheidegg/) and [Grindelwald & First](../switzerland/jungfrau-region/grindelwald-first/). Compared with the exact source commit, their rendered English `<main>` text gains 588, 245, 220 and 351 whitespace-delimited words (1,404 total). This measures the changed source content; it is not a standalone quality score.

The same-level editorial comparison used the existing Japan country, city and local guide pages from the repository source. The new pages add lodging and night trade-offs, named transfers, walk zones, route-specific choices, seasonal checks and fallbacks at hub and child levels. This was a source-content comparison. The user prohibited browser/headless/CDP use and local servers, so no browser rendering or viewport UI acceptance is claimed.

## What changed

- The hub compares two nights for one focused branch, three nights for a weather move and four nights to cover all three branch families from a steadier base. It weighs Interlaken Ost against Lauterbrunnen, Grindelwald and car-free Wengen, including the extra luggage leg to high villages.
- Transfers are named and kept distinct: SBB to Interlaken Ost, then Berner Oberland-Bahn (BOB) to Lauterbrunnen or Grindelwald; Wengernalpbahn (WAB) from Lauterbrunnen to Wengen and Kleine Scheidegg; Mürren by either Grütschalp cable car plus BLM train or the Stechelberg bus and Schilthornbahn; and Firstbahn from its Grindelwald village station, separate from Grindelwald Terminal/Eiger Express.
- The Lauterbrunnen guide separates the village/Staubbach area, south-valley Trümmelbachfälle and Stechelberg, and the two distinct Mürren ascent chains. It includes one- or two-night base choices and a compact valley-floor fallback.
- The Wengen guide treats station, Dorfstrasse and village lanes as a lower-commitment walking zone, while Kleine Scheidegg and Männlichen are separate weather- and season-dependent branches. It explains Wengen's car-free luggage leg.
- The Grindelwald guide distinguishes the village Firstbahn station from Grindelwald Terminal. It separates the Cliff Walk, Bachalpsee trail and adventure activities because their operating windows and conditions can differ.
- All four routes add route-specific choices, transfer-aware sequence, area-level walks, return margins, weather/maintenance fallbacks and operator checks. No unverified departure, fare, opening, trail condition or booking inventory is promised.

## Official checks and limits

On 12 October 2026, Jungfrau Railways' [Mürren arrival page](https://www.jungfrau.ch/en-gb/muerren/) was opened and confirms the BOB to Lauterbrunnen, cable car to Grütschalp and BLM train chain. Its [Wengen access page](https://www.jungfrau.ch/en-gb/wengen/) names the BOB/WAB sequence and says Wengen is car-free. The [Grindelwald-First page](https://www.jungfrau.ch/en-gb/grindelwaldfirst/) distinguishes the First cableway and its village station from Grindelwald Terminal, and the [Terminal page](https://www.jungfrau.ch/en-gb/arrival-at-station-car-parks/grindelwald-terminal-railway-station/) describes the Eiger Express connection. [Prices and tickets](https://www.jungfrau.ch/en-gb/prices-and-tickets/) shows that the Jungfraujoch seat-reservation product and requirements are a separate ticket question, not a blanket rule for all valley trains. The linked [Jungfrau Region arrival guide](https://jungfrauregion.swiss/en/destination/arrival.html) lists Mürren access alternatives in its official search result, but returned HTTP 403 in this review environment, so its current live details could not be opened independently. The copy does not guarantee that either chain operates on a future date. Date-specific services, trails, weather and booking requirements should be checked with operators; the [SBB planner](https://www.sbb.ch/en) and [MeteoSwiss](https://www.meteoswiss.admin.ch/) are linked for the dated checks. No fare or timetable was represented as fixed.

## Image and rights record

The three local WebPs were viewed at pixel level at 1600 × 1066. The Lauterbrunnen valley image matches its visible Staubbach/cliff subject and the [Photochrom Print Collection Commons record](https://commons.wikimedia.org/wiki/File:Lauterbrunnen_Valley_with_Staubbach,_Bernese_Oberland,_Switzerland-LCCN2001701212.jpg), which declares Public Domain Mark 1.0. The Kleine Scheidegg pixels show snowbound buildings below the Jungfrau massif and match the [Albinfo Commons record](https://commons.wikimedia.org/wiki/File:Kleine_Scheidegg_und_Jungfrau.jpg), declared CC BY-SA 3.0; its previous alt incorrectly described Wengen. The Grindelwald-First pixels show Bachalpsee and the surrounding mountain panorama and match the [Barbara Steinemann Commons record](https://commons.wikimedia.org/wiki/File:Bachalpsee_in_Grindelwald.jpg), declared CC BY-SA 4.0; its previous alt was generic. The latter two alt labels now describe the shown subjects. Image bytes and visible credits/license links are unchanged. These pixel and source-page checks do not independently establish uploader authority, chain of title or legal clearance.

## Localization, search and dates

Each of the four routes is rendered in English, Traditional Chinese, Japanese, Korean and Thai. In each non-English locale, the reviewed route-content batch owns 159 strings and the photo-caption batch adds six localized title/caption strings; 93 unique strings are reused from earlier reviewed batches. The English and localized search summaries are synchronized to the refreshed descriptions. No unrelated search terms or route records were added. To keep translation approval clean, obsolete source strings were pruned from earlier Jungfrau and Canada batches, and duplicate generic strings were left with one owner across the four locale batch sets; no other route body was changed.

The reviewed locale batches record GPT-6 Luna as both writer and same-model self-reviewer, with `independentSecondModel: false`. No independent second-model, human or external review is claimed. Visible review dates and Article `dateModified` values are 12 October 2026; `datePublished` remains 12 September 2026. Exactly 20 sitemap `lastmod` entries change (four routes × five editions), with all 4,560 existing URLs preserved.

## Validation and remaining limits

Validation completed on the source branch:

- `npm run build` passed: 5,467 files (4,577 HTML and 801 images; 319.6 MiB); the deployment artifact verifies all 4,560 sitemap routes. No local server or browser was used.
- `npm run audit` passed. This included translation/script/coverage checks (55,729 strings per non-English edition, zero missing or stale), search-index guards, photo-license and site-image provenance guards, Vietnam/Australia/USA/Canada/Switzerland/France/UK/Italy audits, France/UK date tests, Malaysia route/photo tests, China and CN14B regressions, UK Lake/Somerset diagram regressions, NYC/U.S. editorial structure checks, and the final site audit (4,560 unique pages and 955 search records per language).
- `npm run test:switzerland-jungfrau-refresh` passed: four existing routes in five editions, 20 route-date changes, all four canonical/hreflang and search summaries, 1,404 added English main-text words, protected Lucerne source pages, visible Rigi SVG legends in all five editions, and the original Rigi SVG SHA-1 `8b45fae5724444f48aa928e3225dacc232efc382`.
- `npm run test:switzerland-lucerne-refresh` passed: its four existing routes, five editions, 20 expected Lucerne sitemap dates, 2,120 added English main-text words against its recorded baseline, Rigi SVG/legend, and retired-photo provenance.
- `git diff --check` passed.

The route inventory remains at 4,560 URLs: exactly 20 `lastmod` values changed (four routes × five editions), with publication dates unchanged. The new Jungfrau regression uses the exact source commit for the English page-byte comparison; generated localized pages are checked for visible Rigi diagrams and legends. Luna wrote and self-reviewed the locale batches; this is not an independent-model or human review.

No whole-site external source crawler, browser/headless/CDP, local server, force push, security change, merge to integration/main, deployment or production action is part of this work. Source-level checks do not provide live travel guarantees, UI acceptance or independent image-rights clearance.
