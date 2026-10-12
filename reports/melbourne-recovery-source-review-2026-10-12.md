# Melbourne four-page source review — 12 October 2026

## Recovery and scope

The remote branch `codex/sprint-au-next-content-20261012` had no published reference when checked. This checkout was created from the verified `a014412eceb30efae51894be3b6167debaa96ca3` commit on the unique source branch `codex/sprint-au-melbourne-recovery-20261012`. The earlier disconnected draft was not opened or recovered; no claim is made that its work was migrated.

The work updates only the existing Melbourne–Port Phillip hub and its CBD laneways, Federation Square–Southbank, and St Kilda foreshore guides. It adds no URL and makes no national expansion. Search summaries and review dates follow those four pages. The parent hub still lists the existing five Melbourne chapters; the Fitzroy and Phillip Island guide bodies were not refreshed.

## Official information checked

- [Transport Victoria — Metropolitan Melbourne public transport maps](https://transport.vic.gov.au/plan-a-journey/network-maps/melbourne-public-transport-maps): train, tram and bus maps, including the Free Tram Zone map. The copy directs readers to check the live boundary and service changes and gives no unverified fare or headway.
- [Transport Victoria — Route 96](https://transport.vic.gov.au/route/1041/96-east-brunswick-st-kilda-beach): listed as East Brunswick–St Kilda Beach. The page fetch returned only its site shell in the research browser, so route directions are kept general and current service is linked for rechecking.
- [NGV — Plan Your Visit](https://www.ngv.vic.gov.au/plan-your-visit/): distinguishes NGV International at 180 St Kilda Road from the Ian Potter Centre: NGV Australia at Fed Square; the current page lists free general entry and notes that special exhibitions may charge. Hours and event details are linked for date-specific checks.
- [ACMI — Plan Your Visit](https://www.acmi.net.au/plan-your-visit/): Fed Square location opposite Flinders Street Station, current general-entry and event information, access, transport, and current construction/diversion advice. Its page was marked last modified 16 September 2026.
- [Phillip Island Nature Parks — St Kilda penguin viewing](https://www.penguins.org.au/attractions/st-kilda/): limited free tickets, advance booking, arrival by the time on the ticket, a managed platform, and no flash or torches. The guide does not promise wildlife sightings or unbooked access.
- [City of Melbourne — Public transport](https://www.melbourne.vic.gov.au/public-transport): linked for the central free-tram boundary and city transport context.
- [City of Port Phillip — Beach report](https://www.portphillip.vic.gov.au/council-services/health-and-safety/public-health/beach-report): linked as the current local water-quality check. The site returned HTTP 403 to the research browser, so no live beach rating was reproduced.
- [Beachsafe — St Kilda](https://beachsafe.org.au/beach/vic/port-phillip/st-kilda/st-kilda): linked for current beach and patrol advice; the research browser could not fetch the page.
- [Bureau of Meteorology — Melbourne forecast](https://www.bom.gov.au/vic/forecasts/melbourne.shtml): linked for the current city forecast. No forecast snapshot is stated in the guide.

No prices, transit intervals, current event availability, or beach rating are asserted. The guide asks visitors to check the live official pages before departure.

## Existing image subject and credit checks

The three existing WebPs were visually inspected; their bytes were not replaced.

| Page | Visible subject | Alt text used | Source-page declaration |
|---|---|---|---|
| CBD Laneways & Tram Grid | Broad aerial of the CBD, not a close-up of laneways or a tram | “Melbourne central business district viewed from above” | [Bidgee, Commons](https://commons.wikimedia.org/wiki/File:Melbourne_CBD_2008.jpg), CC BY 3.0 |
| Federation Square & Southbank | Night view with Yarra River and Princes Bridge; not a clear close-up of Federation Square | “Yarra River and Princes Bridge beneath Melbourne’s night skyline” | [Peter Neaum, Commons](https://commons.wikimedia.org/wiki/File:Night_view_of_the_Melbourne_CBD,_over_the_Yarra_River,_showing_Princes_Bridge,_St_Kilda_Road,_St_Paul%27s_Cathedral,_and_Federation_Square._Peter_Neaum._-_panoramio.jpg), CC BY 3.0 |
| St Kilda & Foreshore | Daytime beach, pier, and bay; no penguins depicted | “St Kilda Beach, pier and Port Phillip Bay before midday” | [Alpha from Melbourne, Commons](https://commons.wikimedia.org/wiki/File:Quiet_before_midday_-_St_Kilda_Beach_and_Pier_(3166045772).jpg), CC BY-SA 2.0 |

The Commons pages display those creator/license declarations. This review did not establish an independent chain of title or legal rights clearance; attribution is not presented as such.

## Translation and review provenance

English copy was translated and self-reviewed in Traditional Chinese, Japanese, Korean, and Thai, with 153 newly owned source keys per locale. Obsolete keys from the replaced Melbourne copy (83 body/summary keys and 3 old image captions per locale) were pruned after the stale-key dry run identified them; the new locale batches own the replacement strings. The same available GPT-6 Luna model wrote and reviewed each locale batch. Each batch records `writer: GPT-6 Luna`, `reviewer: GPT-6 Luna; same-model self-review`, and `independentSecondModel: false`. No Luna Max, independent model, human, or external editorial review is claimed.

## Build and regression evidence

- `npm run audit` passed, including translation coverage and site audit: 4,560 published routes (912 per language edition), 955 search records per language, and unique localized page titles.
- `npm run build` passed: 5,466 files in `dist`, including 4,577 HTML files, 800 images, and all 4,560 sitemap routes.
- `npm run test:australia-melbourne-refresh` passed for the four existing routes across five language editions, exactly 20 intended sitemap date updates, unchanged URL set, search parity, image subject text, and unchanged photo source/license declarations.
- `git diff --check` passed. No new route, image, SVG, deployment or integration-branch write was made.

No new SVG was created. No headless browser, CDP session, local server, deployment, or integration-branch write was used. A browser/viewport visual review remains outside this check.
