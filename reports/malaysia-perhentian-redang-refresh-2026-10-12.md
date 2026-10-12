# Perhentian & Redang hub and field-guide refresh — 12 October 2026

## Scope and history

This source-only refresh starts from integration source 88844ac65e457923d22876232be8a4c4c49948b7 on codex/integration-sprint-20261011. The Perhentian & Redang hub and its four children had not received a substantive update in the current round; Git history dates their previous cluster refresh to 30 August 2026. No route or URL was added.

The five updated English routes and visible main-text counts are:

| Route | Before | After | Change |
| --- | ---: | ---: | ---: |
| /malaysia/perhentian-redang/ | 1,461 | 1,975 | +514 |
| /malaysia/perhentian-redang/kuala-besut-transfer/ | 512 | 878 | +366 |
| /malaysia/perhentian-redang/perhentian-kecil/ | 517 | 868 | +351 |
| /malaysia/perhentian-redang/perhentian-besar/ | 500 | 791 | +291 |
| /malaysia/perhentian-redang/redang-merang-transfer/ | 493 | 859 | +366 |

Counts use the same parse5 extraction of the rendered English main element at the exact integration commit and working source. They describe source text, not viewport rendering or UI acceptance.

The separate MY06 Taman Negara source at 83031b46d5bc1781341ccc737f71951e8dac7f3f was not included, regenerated or amended; it remains awaiting integration. Penang, Cameron Highlands, Ipoh, Langkawi and Melaka bodies were not rewritten.

## Content changes

The hub distinguishes three, four and five island nights from mainland transfer nights, compares the island systems and named shore bases, and lays out a compact island itinerary with a movable weather day. It separates Perhentian’s Kuala Besut chain from Redang packages that use the resort-confirmed Merang or Shahbandar jetty. The seasonal guidance asks travelers to confirm the exact resort and boat calendar, meals, non-refundable terms and weather-cancellation process before payment; it does not promise a fixed opening month.

- The Kuala Besut chapter separates the KBR / KTMB Intercity / date-checked coach arrival, road vehicle, named jetty counter, marine-park fee procedure, booked boat, accommodation landing or tender, and return road leg. It adds mainland overnight guidance before important onward travel.
- Perhentian Kecil compares Long Beach and Coral Bay by room location, noise, food, landing and evening access. Its route uses one bay as a base, allows a cross-bay walk only on an open daylight path, and does not assume that a water taxi runs at night.
- Perhentian Besar compares the exact resort shore, including named areas such as Teluk Pauh and Teluk Dalam, against meal and boat dependence. It provides a shore-based sequence, rest/weather reserve, and active swimming and child-supervision guidance.
- Redang requires written confirmation of the resort jetty before booking the road transfer. It distinguishes Merang from Shahbandar, calls out separate TGG or Kuala Terengganu road legs, and does not treat a generic Redang ferry ticket as matching a resort package.

Named transport services and gateways are useful routing references, not promises of a connection. The pages do not publish current bus/rail/boat times or fares, a through-ticket, a fixed operator, a guaranteed marine crossing, or unverified resort opening dates. Readers are told to confirm terminal, operator, check-in, baggage, landing and return arrangements with the exact property and carrier.

## Official source checks and limits

The small, route-specific official source review was completed on 12 October 2026:

- The Department of Fisheries Malaysia [marine-park management page](https://www.dof.gov.my/en/services/marine-park-resource-management/marine-park-management/) identifies Perhentian and Redang among Terengganu marine-park archipelagos. Its [conservation-charge page](https://www.dof.gov.my/en/services/marine-park-resource-management/conservation-charge-fee-rates/) lists a fee schedule; because eligibility, rates and collection can change, this guide names no numeric charge and directs travelers to verify the current rules.
- KTMB’s [Intercity page](https://www.ktmb.com.my/intercity.html) and [train timetable page](https://www.ktmb.com.my/traintime.html) were checked for the East Coast service and current timetable source. The timetable page displayed its current October 2026 revisions; no departure time or train-to-boat connection is asserted in the guide.
- Malaysia Airports’ official [Sultan Ismail Petra Airport departures](https://www.malaysiaairports.com.my/index.php/sultan-ismail-petra-airport-kota-bharu/flight-information/departures) and [Sultan Mahmud Airport departures](https://www.malaysiaairports.com.my/index.php/sultan-mahmud-airport-kuala-terengganu/flight-information/departures) pages were checked as the correct airport information links. They do not establish a particular flight or road transfer.
- METMalaysia’s [marine forecast page](https://www.met.gov.my/en/forecast/marine/) is the official marine-weather reference. A forecast is not a boat operator’s go/no-go decision or a guarantee of safe water. Current sea-state values, a crossing, or a substitute service are not promised.

The Tourism Malaysia East Coast brochure link returned HTTP 403 during source review and was removed from the hub’s source list rather than used as evidence. No broad site crawler was run. The pages explicitly leave current boat operation, hotel seasons, prices, fees, cancellation terms and last-mile availability to the named operators.

## Image and attribution review

The three retained local images were viewed at pixel level at 1,440 × 960 and match their visible beach/island claims. Their original bytes and visible source/license credits remain unchanged; no SVG replacement was needed.

- assets/images/malaysia-perhentian.webp — Commons identifies Vyacheslav Argenberg and CC BY 4.0: [source page](https://commons.wikimedia.org/wiki/File:Perhentian_Kecil_Island,_Malaysia,_Beach.jpg). SHA-256: 9d2e1e4769065a4180cba213edbbbbd0a1c0db6e63f67572f21ade22a356acf5.
- assets/images/malaysia-perhentian-coral-bay.webp — Commons identifies DTravel AU and CC BY-SA 3.0: [source page](https://commons.wikimedia.org/wiki/File:Coral_Bay,_Perhentian_Kecil.JPG). SHA-256: 672395b6855f37d02329d90dda66c7398e9425c410dc25bb83da7af5daf99510.
- assets/images/malaysia-redang-beach.webp — Commons identifies Azreey and CC BY-SA 4.0: [source page](https://commons.wikimedia.org/wiki/File:Pulau_Redang_-_White_sandy_beach.jpg). SHA-256: 742bca8e068e1364dc5a94946499289a3aee0a1ce318244bbb3d626469f2ab5b.

This checks image pixels and the source pages’ displayed creator/license declarations; it is not independent uploader-authority, rights-chain or legal clearance.

## Language, search and dates

The hub and all four children carry the review date 12 October 2026 in English, Traditional Chinese, Japanese, Korean and Thai, including localized search titles/summaries, TravelGuide dateModified metadata and sitemap entries. Each locale page batch contains 163 strings (the current page keys plus the site’s Malaysia–Perhentian & Redang label) and records GPT-6 Luna as writer and same-model self-review with independentSecondModel false. The translations were produced and checked in this model; no external model, Luna Max, human reviewer or outside language-quality certification is claimed. A separate search delta was not needed because the current search strings are covered by the page batches.

For clean global approval, 140 source keys per locale were removed from older reviewed batches because those strings are no longer present in the current site source. This preserved the remaining active translations. Full i18n coverage then passed with 55,494 current strings per locale and no missing or stale keys.

A direct comparison with the exact integration sitemap found 25 lastmod changes: the five existing routes across five language editions. The sitemap still has 4,560 entries; there were zero URL additions or removals.

## Verification and limitations

- `npm run audit` passed: 55,494 current translations in each localized edition; 4,560 published routes (912 per language), 955 search records per language, and zero missing or stale translation keys. The full chain also passed the search guards, photo-license/provenance inventory, France/UK and Malaysia audits, China route-date/CN14B checks, Lake District/Somerset diagram checks, and the static-site audit.
- `npm run build` passed: 5,466 files (4,577 HTML and 800 images); all 4,560 sitemap routes were found in `dist`.
- `npm run test:malaysia-perhentian-redang-dates` passed for 50 page files (five routes × five locales in source and `dist`), 25 changed sitemap entries per sitemap, localized search title/summary records, TravelGuide date metadata and the three retained photo hashes.
- `git diff --check` passed.

The first full-audit attempt encountered an incomplete preexisting `dist` when the Peak District date regression looked for built output. Building the current source first and rerunning the full audit passed. The final artifact is the successful current-source build.

No browser, headless browser, CDP, local server, deployment, merge to main/integration, force push, or production action was performed. Responsive layout, keyboard behavior, measured viewport overflow and live operator arrangements remain unverified. The exact carrier, property calendar, fee amount and same-day operating decision must still be confirmed directly by travelers with the named providers.
