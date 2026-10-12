# Melaka cluster refresh — 12 October 2026

## Scope and route inventory

Started from the latest fetched `codex/integration-sprint-20261011` at `75cf57d5a2700a8b4b9e881e942a80a8c4f9c260` on `codex/sprint-my-04-20261012-melaka`. The existing cluster is exactly one hub plus four direct children; all five paths already existed. No route was added.

- `/malaysia/melaka/`
- `/malaysia/melaka/dutch-square-st-pauls/`
- `/malaysia/melaka/jonker-harmony-street/`
- `/malaysia/melaka/melaka-river-kampung-morten/`
- `/malaysia/melaka/bandar-hilir-portuguese-settlement/`

The change dates the five paths in each of the five language editions (25 sitemap records) to `2026-10-12`, and retains one search entry per route and locale. No content, search record or sitemap date for Penang, Cameron Highlands, Ipoh or Langkawi was changed. Langkawi's page-file diff is empty; its sitemap blocks and five search records are identical to the integration base.

## Editorial changes

The hub compares one, two and three nights; explains the walkable heritage-core, Bandar Hilir/Melaka Raya and Melaka Sentral lodging trade-offs; and groups walking routes by civic hill, Jonker/Harmony lanes, the two riverbanks and the Bandar Hilir/Ujong Pasir branch. Day plans separate walkable loops from road transfers and add early-start, rain, heat and low-mobility fallbacks.

Each direct child now names its streets, landmarks and walking sequence; separates continuous public walks from transfers; suggests what to combine or drop by stay length; and gives date-specific checks for transport, weather, events, venue access and accommodation. The hub and children include season and advance-booking cautions without promising a dry season, recurring market or event, admission, cruise operation or venue opening.

Official reference checks on 12 October 2026:

- [MBMB transportation](https://www.mbmb.gov.my/en/tourism/transportation) identified Melaka Sentral as the intercity coach terminal; the page showed an 8 October update.
- [BAS.MY Melaka](https://bas.my/basmymelaka.php) lists the M100 and M101 feeder-loop identities with a route map and schedule lookup. No current date-specific headway, stop, fare or last departure was confirmed, so the pages require a live check.
- [Tourism Melaka's accommodation directory](https://www.visitmelaka.com.my/index.php/mice-accomodation/hotel-listing) is labeled 2025; current prices and availability were not confirmed.
- [Tourism Melaka's event calendar](https://www.visitmelaka.com.my/index.php/download/calendar-of-events) had no dated 2026 event listing visible on the check date. The pages direct readers to verify the travel date with the organizer instead of assuming a weekly Jonker event.
- [METMalaysia district forecast](https://www.met.gov.my/en/forecast/weather/district/) is linked for trip-date decisions; no seasonal weather guarantee is stated.
- [UNESCO's Melaka and George Town listing](https://whc.unesco.org/en/list/1223/) supports the port-city and living multicultural heritage context.

The Traditional Chinese, Japanese, Korean and Thai route and search copy was translated and reviewed in the available gpt6luna workflow. The active environment offered no Max route. No separate reviewer or extra translation-QA pass is claimed. Two identical shared date/caution source strings reuse their existing reviewed translations from the integrated Langkawi batch; they were not retranslated here. Old reviewed batches had duplicate, superseded Melaka source keys removed; four otherwise-unused catalog labels also had to be removed to satisfy the repository's stale-key audit. The 55,208-string catalogs remain complete in each locale.

## Images

All four existing 1440 × 960 WebPs were visually checked against the credited Commons pages; no image bytes changed. Pixel notes, original dimensions, attribution terms and local SHA-256 hashes are in [the photo review](melaka-photo-review-2026-10-12.md). The Kampung Morten Commons page declares CC BY-SA 4.0 while its source EXIF says “Copyright 2019. All rights reserved.” The conflict is disclosed beside the hub credit in all five locales and remains pending; this review is not rights clearance.

## Verification

- `npm run audit` — passed. Final site audit: 4,560 localized published routes (912 per language), 955 search records per language and 4,560 unique localized titles.
- `npm run build` — passed. Built `dist` with 5,464 files, including 4,577 HTML files and 798 images; verified all 4,560 sitemap routes.
- `npm run audit:i18n` — passed: 55,154 required translations in each of `zh-Hant`, `ja`, `ko` and `th`, with zero missing or stale entries.
- `npm run test:malaysia-melaka-route-dates` — passed: five existing routes, 25 localized sitemap date records and five search records.
- `npm run test:malaysia-langkawi-route-dates` — passed: four routes and 20 language editions.
- `npm run test:malaysia-cameron-route-dates` — passed: four routes and 20 language editions.
- `npm run test:united-kingdom-somerset-diagram` — passed.
- `npm run test:china-cn14b` — passed.
- `npm run test:united-kingdom-lake-diagrams` — passed.
- `npm run test:photo-license-guard` — passed.
- `git diff --check` — passed.
- Langkawi isolation — passed: no changed page files; its 25 sitemap records and five search records match the base.

The stylesheet cache-key guard was updated only for the Melaka hub to match its new stylesheet version; existing guards for other pages remain intact. No browser/UI render inspection or deployment was done. This report records the local source, audit and build gates only.
