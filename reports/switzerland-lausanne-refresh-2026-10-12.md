# Lausanne & Lavaux hub and field guides — 12 October 2026

## Scope and source comparison

This source-only batch starts at exact CH06 commit `d91e6e3cad2ba73a3b211d8c8fd0ba1e43dafe4e` on `codex/sprint-ch-07-content-20261012` (parent `77141526a1fa8497c53f5ce96e9bc79812ebf7dc`). After reading the README, recent Switzerland reports and Git history, Lausanne & Lavaux was the next untouched hub after Geneva. It refreshes only the existing [hub](../switzerland/lausanne-lavaux/), [Old City & Ouchy](../switzerland/lausanne-lavaux/old-city-ouchy/), [Lavaux Vineyard Terraces](../switzerland/lausanne-lavaux/lavaux-terraces/) and [Olympic Museum & Lake Geneva Day](../switzerland/lausanne-lavaux/olympic-lake-cruise/) routes. The Switzerland landing page receives one dependent card summary and photo-alt correction. No URL was added; the article count remains 16 hubs and 48 guides. The earlier Lucerne, Jungfrau, Zermatt, Interlaken and Geneva articles were not rewritten.

For the README's same-level Japan reference, I read the existing Japan overview, Osaka hub and Namba local guide. Counted as letter/number tokens, their rendered `<main>` bodies contain 1,901, 1,470 and 1,674 words. The four Lausanne pages contain 1,551, 1,564, 1,635 and 1,655 words after refresh, with lodging/transfer decisions, route stages, trade-offs, fallbacks and FAQs. Against the exact CH06 base, the four English `<main>` bodies add 588, 610, 620 and 683 words (2,501 total). Word counts measure the source diff, not editorial quality.

## What changed

- The hub makes two nights a workable first stay and three nights a slower visit. It compares Lausanne-Gare/Flon, Ouchy and Cully as distinct bases, then names Métro M2 and its stations for the city's elevation changes.
- Lavaux is planned around an SBB regional train to Cully and the signed Cully–Epesses–Rivaz walk, with Rivaz as the published finish and the return station checked before departure. The published route listing says 5.6 km, about 1 hour 30 minutes and 120 m ascent; those are route-publisher figures, not a personal pace or current-condition guarantee.
- The Ouchy day names the Olympic Museum at Quai d’Ouchy 1 and separates a museum/quay visit from a cross-lake boat trip. CGN N1 Lausanne–Évian and N2 Lausanne–Thonon are optional only after checking the dated outbound/return, ticket rules and travel documents.
- Each guide has a walkable sequence, duration, combine/separate advice, named transit, seasonal and weather checks, reservation guidance where relevant, and a lower-risk fallback. Tastings must be confirmed directly with producers. No fare, headway, departure, future museum hours, tasting availability or boat return is promised.

## Official checks and limits

The [Lausanne Tourisme transport page](https://www.lausanne-tourisme.ch/en/public-transportation/) was checked for M2 and the hotel-guest Transport Card guidance; its [Ouchy page](https://www.lausanne-tourisme.ch/en/explore/ouchy/) supports the public lakeshore context. [Montreux Riviera's Lavaux walks](https://www.montreuxriviera.com/en/G515/hikes-and-walks-at-lavaux) lists Cully–Epesses–Rivaz and the planning figures above. The [UNESCO Lavaux record](https://whc.unesco.org/en/list/1243/) describes the working terraced cultural landscape. The [Olympic Museum visitor page](https://www.lausanne-tourisme.ch/en/explore/the-olympic-museum/) and [CGN timetable](https://www.cgn.ch/en/horaires-billets) were checked for the current listing and route names. At review time, Lausanne Tourisme showed the museum as Tuesday–Sunday 09:00–18:00, with Monday closures and exceptions; this is a dated listing, and the museum calendar must be rechecked for a travel date. [SBB](https://www.sbb.ch/en), [TL](https://www.t-l.ch/en/) and [MeteoSwiss](https://www.meteoswiss.admin.ch/) are linked for exact-date transport and weather checks.

## Image and rights record

The three displayed local WebPs were inspected at 1600 × 1066 pixels and compared with their exact Commons source pages. The Ouchy waterfront image matches its subject; its previous hillside alt text was replaced with a description of Lake Geneva, the shore and a small boat. The Lavaux image shows the terraces and lake. The Olympic Museum guide's image shows the Ouchy lakefront. Image bytes and source hashes were left unchanged, and no replacement SVG was needed because none of these photos was miscategorized.

The source pages name OlhaSolodenko / CC BY-SA 4.0 for [Lake Geneva in Lausanne](https://commons.wikimedia.org/wiki/File:Lake_Geneva_in_Lausanne.jpg), Severin.stalder / CC BY-SA 3.0 for [Lake Geneva with Vineyards in Lavaux](https://commons.wikimedia.org/wiki/File:Lake_Geneva_with_Vineyards_in_Lavaux.jpg), and jynus for [Lausanne – Lake Geneva](https://commons.wikimedia.org/wiki/File:Lausanne_-_Lake_Geneva.jpg). The third Commons page lists GFDL 1.2-or-later, CC BY-SA 3.0 and CC BY 2.5 as alternatives; the manifest retains CC BY 2.5. These multiple source declarations were not treated as an automatic conflict. A source-page statement and a pixel match do not independently verify uploader authority or chain of title, so no separate rights clearance is claimed.

## Localization, search and dates

Traditional Chinese, Japanese, Korean and Thai have one reviewed batch each for the four article routes, the dependent Switzerland overview and the English search-index source. Each batch adds 149 keys; all four pass batch validation and sampled long-copy review with no duplicated long target. Codex GPT-6 translated and same-model self-reviewed; no independent second-model or human review is claimed. Obsolete Lausanne-only keys were removed from the four older route batches and four Switzerland-shell batches: 416 keys total, each absent from the active source set. All four catalogs approve 55,901/55,901 required strings with zero missing or stale entries.

The four article pages now have matching English search summaries, translated summaries and route terms, five-language canonical/hreflang/article metadata, and `2026-10-12` modification dates. Exactly 20 existing sitemap entries changed (four routes × five languages); the URL set remains 4,560 URLs. The linked Switzerland overview was already dated 12 October from the preceding Geneva edit, so its dependent card changed without another sitemap date change.

## Validation and remaining limits

- `npm run audit` passed: i18n coverage, search, photo provenance, Switzerland, France, UK, Malaysia and China/CN14B checks; Lake District and Somerset SVG regressions; and the full 4,560-route / 955-search-record-per-language site audit.
- `npm run build` passed: 5,469 files (4,577 HTML and 803 images; 320.0 MiB), verifying all 4,560 sitemap URLs and generating 912 pages and 955 search records in each translated edition.
- The Lausanne regression passed for four routes × five editions, the linked overview card, 20 primary date/search/canonical/hreflang checks, unchanged sitemap URLs and unchanged photo bytes. English `<main>` deltas are +588, +610, +620 and +683 words.
- The Switzerland audit and Lucerne, Jungfrau, Zermatt, Interlaken, Geneva and Lausanne regressions passed. The Lucerne regression confirms the existing Rigi page and SVG bytes are unchanged; the Zermatt regression confirms its protected photo bytes and localized diagram remain intact.
- Four locale batch validators and sample checks passed; `git diff --check` passed.

No browser, headless browser, CDP session or local server was used; no viewport/UI review was performed. No merge, integration/main update, deployment, production action, force push or security change was performed. This source review is not a visual UI acceptance or independent image-rights determination.
