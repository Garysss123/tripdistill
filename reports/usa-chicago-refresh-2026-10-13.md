# USA Chicago source refresh · 13 October 2026

## Scope and source accounting

This refresh is based directly on `654f0475dcbaa22f88f88a20169e1f18a04b14ab`, the requested `codex/sprint-us-after-atlanta-20261013` tip. The task branch is `codex/sprint-us-after-florida-20261013`. The exact source commit contains 97 existing U.S. routes.

The four selected Chicago `<main>` bodies matched their 11 September 2026 bodies at `71def01cd4d489552b9f5d67ca1a202becaa0435e`, after normalizing HTML text whitespace. None is in the previously disclosed 41/97 U.S. refresh cohort: 25 routes in the historical source ledger, then Hawaii 4, New Orleans 4, Atlanta 4, and Florida neighborhood pages 4. This report brings that disclosed source-refresh set to 45/97. That is a source-work count, not global editorial acceptance. The New York acceptance sample remains byte-for-byte equal to the task base.

## Exact page changes

Word and character counts below are normalized text from each page's `<main>`, before and after this refresh. Each source body changes substantively; route slugs and the original publication date stay in place.

| Route | Before → after | Body changes |
| --- | ---: | --- |
| [`/usa/chicago/`](../usa/chicago/index.html) | 1,283 → 1,435 words; 7,767 → 8,700 characters | Added a two-, three-, and four-night decision based on usable days; when to keep one hotel or choose a neighborhood base; ORD vs. MDW overnight rail and terminal connections; the current State/Lake closure/elevator check; and an indoor weather fallback. |
| [`/usa/chicago/loop-riverwalk/`](../usa/chicago/loop-riverwalk/index.html) | 1,291 → 1,387 words; 8,149 → 8,821 characters | Compared the 90-minute First Lady cruise to a shorter self-paced route; named the meeting point, 30-minute arrival buffer, March–November listing, and total time block; added upper/lower access checks, closure-safe turnbacks, current CTA station alternatives, and indoor weather/cancellation choices. |
| [`/usa/chicago/museum-lakefront/`](../usa/chicago/museum-lakefront/index.html) | 1,205 → 1,384 words; 7,613 → 8,625 characters | Made Field, Shedd, and Adler distinct by ticket/time rules; added the Roosevelt/146 route chain and CTA 130 seasonal service dates; reserved one institution as the day's anchor and dropped the exposed shore during hazardous weather, with date-checked alternatives. |
| [`/usa/chicago/neighborhoods/`](../usa/chicago/neighborhoods/index.html) | 1,275 → 1,471 words; 7,799 → 8,954 characters | Compared a central base with staying near Wicker Park/Logan Square for multiple evenings; identified Damen and Logan Square as separate Blue Line stations; bounded each neighborhood outing and added a same-day indoor/rain alternative with a current-hours check. |

The normalized body hashes and route/date/search assertions are emitted by `scripts/test-usa-chicago-refresh.mjs`.

## Official sources checked on 13 October 2026

- [CTA airport connections](https://www.transitchicago.com/airports/default.aspx): O’Hare Blue Line 24-hour service; Midway Orange Line overnight limitation and the N62 Archer alternative; Terminal 5's free airport-train transfer.
- [CTA alerts](https://www.transitchicago.com/alerts/) and [Blue Line information](https://www.transitchicago.com/blueline/): State/Lake reconstruction closure, nearby station alternatives, elevator/service status, and route checks.
- [CTA 130](https://www.transitchicago.com/bus/130/) and [CTA 146](https://www.transitchicago.com/bus/146/): 130 seasonal service and the current Museum Campus/Adler route context for 146.
- [Chicago Architecture Center First Lady cruise](https://cruise.architecture.org/city-tours/first-lady): cruise duration, named meeting area/address, pre-departure arrival request, and season listed on the current product page.
- [Field Museum visitor information](https://www.fieldmuseum.org/landing/visit), [Shedd visit planning](https://www.sheddaquarium.org/plan-a-visit), and [Adler visit planning](https://www.adlerplanetarium.org/plan-your-visit/): distinct hours, timed-ticket/re-entry conditions, and route directions.
- [National Weather Service Chicago](https://www.weather.gov/lot/): forecast and alerts for date-specific outdoor decisions.
- [Choose Chicago neighborhood information](https://www.choosechicago.com/neighborhoods/), [Wicker Park/Bucktown](https://www.choosechicago.com/neighborhoods/wicker-park-bucktown/), and [Logan Square](https://www.choosechicago.com/neighborhoods/logan-square/): neighborhood orientation.
- [City of Chicago Riverwalk information](https://www.chicago.gov/city/en/depts/dca/supp_info/chicago_riverwalk.html) and [Chicago Cultural Center visitor information](https://www.chicago.gov/city/en/depts/dca/supp_info/chicago_cultural_center.html) remain conditional traveler checks in the copy. The page reader returned HTTP 403 for these City pages, so this refresh does not claim a current entrance, closure, program, or opening status from them; it tells readers to confirm current access before going.

For same-level editorial comparison, I read the existing [Osaka city guide](../japan/osaka/index.html) and [Namba neighborhood guide](../japan/osaka/namba/index.html). The Chicago city guide now makes the hotel-base and full-day trade-offs explicit; the neighborhood page separates transit stops and last-mile plans. This was a content comparison only, not a visual acceptance review.

## Translation and localization provenance

The English copy and the four non-English translations were authored and reviewed in this task. The current source work has 34 fresh page-only strings and four separate translated Chicago search summaries per locale; repeated keys reuse the previously reviewed catalog. All four locale batch validators and samples passed. `audit:i18n` passed for 58,517 required strings in each of Traditional Chinese, Japanese, Korean, and Thai; stale reviewed Chicago translation keys from the superseded source copy were pruned (28 per locale), without changing draft files. The 4,560-URL sitemap and 955-record search indexes remain the same size.

The translation review was a same-model self-review in this task. The runtime/model identifier is not exposed for independent verification, and this is not independent linguistic QA.

## Verification and limits

- `npm run generate:usa`, `npm run sync:sitemap`, `npm run i18n:batch` on the two Chicago batches in all four locales, `npm run i18n:sample`, `npm run audit:i18n`, and `npm run localize`.
- `scripts/test-usa-chicago-refresh.mjs`: exact source/September body comparison, only four U.S. bodies and four English search records changed, dates across 20 route editions, 97 U.S. routes, and the unchanged 4,560 sitemap URLs. It checks all five page editions and 955 search records in each localized edition.
- Florida/Chicago cumulative regression: four Florida plus four Chicago bodies, eight English search records, 40 route-edition dates, and the unchanged 4,560 URLs.
- Integration-scope regression: 262 historical English bodies, 20 later U.S. refresh routes, 1,380 dated URLs, 245 changed English search records, and the unchanged 4,560-URL set.
- `npm run audit:i18n` passed: 58,517 required strings in each of four localized editions, with no stale keys. `npm run localize` generated 912 pages and 955 search records per edition.
- `npm run build` passed: 5,493 files in `dist`, including all 4,560 sitemap URLs.
- `npm run audit` passed through its final site audit: 4,560 published routes (912 per language) and 955 search records per language. USA structural audit, USA editorial structure regression, and the Chicago-specific regression passed again after the final audit run.
- `git diff --check` passed with no whitespace errors.

No image or SVG was added or edited, and no UI was rendered or inspected. No headless browser, CDP, local server, or site crawl was used. The repo's U.S. editorial audit explicitly says its structural checks do not constitute editorial acceptance or an AdSense verdict. Visual review and independent translation review remain outstanding; no deployment or main-branch integration is part of this task.
