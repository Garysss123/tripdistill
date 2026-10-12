# Geneva & Western Lake Geneva hub and field guides — 12 October 2026

## Scope and comparison

This source-only batch starts from the exact CH05 `Interlaken` commit `77141526a1fa8497c53f5ce96e9bc79812ebf7dc` on `codex/sprint-ch-06-content-20261012`. The existing [Geneva & Western Lake Geneva hub](../switzerland/geneva-lake/), [Old Town & Lakefront](../switzerland/geneva-lake/old-town-lakefront/), [International Quarter](../switzerland/geneva-lake/international-quarter/) and [Carouge & Arve](../switzerland/geneva-lake/carouge-arve/) are the only article routes refreshed. No route was added or removed. Lucerne, Jungfrau, Zermatt, Interlaken and their guides were not rewritten. The pending Rigi `20c0023e` and Zermatt `2566e889` image corrections were not merged or overwritten.

Against the exact base, the four English `<main>` bodies gain 733, 546, 569 and 607 whitespace-delimited words respectively (2,455 total). These counts describe the content delta and are not an editorial quality score. Existing summaries on the Switzerland overview were translated and refreshed so its Geneva card and image credit stay accurate; that overview is a dependent index page, not a fifth article rewrite.

## What changed

- The hub compares a two-night first visit with a three-night slower stay and distinguishes Cornavin, Rive/Eaux-Vives, the hilly Old Town and Carouge as lodging bases. It directs readers to confirm the lodging-specific Geneva Transport Card eligibility and duration.
- Transfers use named gateways and stops: airport rail to Genève-Cornavin; TPG tram 15 or bus 5 toward Nations; and tram 12 stops including Carouge-Rondeau, Carouge-Marché and Carouge-Armes. The pages separate those route relationships from date-specific departures, fares and travel times.
- Old Town and Lakefront itineraries connect the lake, Jardin Anglais, the Rhône crossings, the upper Old Town and St Pierre, with shorter or indoor alternatives. The International Quarter separates the UN visit and its security approach from the lake and central districts. Carouge follows its market streets and squares toward the Arve, with a shorter neighborhood loop when weather or opening hours change.
- Each page gives seasonal advice, calls out reservation or opening-hour checks, and includes an alternative for rain, closures, renovation, security restrictions or a full visitor calendar. Future timetables, prices, opening status, bookings and transport-card eligibility are not guaranteed.

## Official checks and limits

On 12 October 2026, the [Geneva Tourism site](https://www.geneve.com/en/), its [Geneva Transport Card guidance](https://www.geneve.com/en/plan-stay/getting-around/free-geneva-transport-card), [TPG lines](https://www.tpg.ch/en/lignes) and [network maps](https://www.tpg.ch/en/travel/plan-journey/maps), [SBB journey planner](https://www.sbb.ch/en), the [UN Geneva visitor page](https://www.ungeneva.org/en/visit) and [St Pierre Cathedral practical information](https://www.cathedrale-geneve.ch/en/practical-info/) were checked for the transport links, eligibility and visit-planning guidance. The UN visitor page described reservation-led tours, security requirements and renovation-related limits at the time checked; its booking calendar and entry instructions must be checked again for the visitor's date. The pages deliberately link to current operators and avoid fixed departure, price or access promises.

## Image and rights record

The former Old Town lead image was viewed at its local 1600 × 1066 pixel dimensions. It depicts the Jet d'Eau and open water, not the claimed Old Town/lakefront skyline, so the image was retired from active use while its bytes were preserved unchanged (SHA-1 `746024bc1f698e93e3ea867994c64bfca588529e`). The [Commons source page](https://commons.wikimedia.org/wiki/File:Geneva_-_Jet_d%27eau.jpg) declares CC BY-SA 3.0; that page declaration does not independently verify uploader authority or chain of title. The preserved record marks the image unused, retains the page's declared license as source metadata, and explicitly records that independent rights verification is absent.

The active hub and guide illustrations use the original [Geneva route-choice SVG](../assets/images/switzerland-geneva-lake-route-choices.svg), a conceptual, not-to-scale district diagram with a visible English, Traditional Chinese, Japanese, Korean and Thai legend. Its file was parsed as XML and checked for viewBox and basic shape/text geometry bounds; the parser rejects malformed XML such as an unescaped ampersand. The previous Geneva child photos were pixel-inspected against their source pages; their page-level license statements remain source declarations and are not independent rights clearance.

## Localization, search and dates

Each of the four pages is rendered in English, Traditional Chinese, Japanese, Korean and Thai. One reviewed batch per non-English locale contains 132 keys for the four articles, their existing Switzerland landing-card summaries and search-index data. Translations were written and self-reviewed in the same model workflow; no independent second-model or human review is claimed. Translation sample checks found no long translated target reused for a different source sentence. The existing landing-card summaries for Lucerne, Interlaken, Jungfrau and Zermatt were also translated because the Switzerland overview shows them; their article content was not changed.

The four English search summaries were synchronized and the existing overview search record updated. Visible review dates, article metadata and sitemap dates were synchronized for the four selected routes and the dependent Switzerland overview, across five language editions (25 existing URLs). All URLs remain unchanged. The documented stale-key pruner removed 464 obsolete reviewed translation keys from older Geneva and Swiss batches; those keys were absent from active source. Final i18n coverage reports 55,856 required strings per locale with zero missing or stale entries.

## Validation and remaining limits

- `npm run audit` passed: i18n coverage and search guards, photo and site-image provenance, localization, Vietnam/Australia/USA/Canada/Switzerland/France/UK/Italy audits, Switzerland Zermatt/Interlaken/Geneva regressions, France/UK dates and route/search checks, UK Lake and Somerset diagrams, Malaysia route/date/photo checks, China route dates and CN14B, photo inventory, and static site route/search/metadata checks.
- `npm run build` passed: 5,469 files (4,577 HTML, 803 images; 319.9 MiB) and all 4,560 sitemap routes verified. It generated 912 pages, three shared components and 955 search records for each translated edition.
- The Geneva regression passed for four routes × five locales, the linked Switzerland overview card, 20 primary-page canonical/hreflang/search/schema/sitemap checks, preserved retired-image bytes, and parsed SVG/XML geometry. Measured English main-text deltas are +733, +546, +569 and +607 words.
- `npm run audit:switzerland`, `npm run test:switzerland-zermatt-refresh`, `npm run test:switzerland-interlaken-refresh`, i18n batch/sample checks, and `git diff --check` passed. The Switzerland audit covered 16 hubs, 48 guides, 65 English/325 five-language routes and 48 credited images.

No browser, headless browser, CDP session or local server was used; there was no viewport/UI render. No whole-site source crawler, merge, integration/main update, deployment, production action, force push or security change was performed. Source-page licenses and visual matches do not establish independent rights clearance.
