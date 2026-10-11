# Dordogne & Périgord locale review — 11 October 2026

## Scope

The five-language refresh covers the Dordogne hub and its three existing field guides:

- `/france/dordogne-perigord/`
- `/france/dordogne-perigord/sarlat-market-old-town/`
- `/france/dordogne-perigord/vezere-prehistory/`
- `/france/dordogne-perigord/dordogne-castles-villages/`

Bordeaux's four pages were left untouched. The four FR06 page/search batches each contain 114 nonblank source keys across the five declared routes. France shell batches replace one retired Dordogne country-card source key with the current clipped summary. The obsolete Dordogne `44m` translation batch had 81 stale keys per locale; the exact 324 stale entries were pruned.

## Translation and review

Traditional Chinese, Japanese, Korean and Thai were translated and reviewed in-model with GPT-6 Luna xhigh. Independent reviewer passes checked destination names, source fidelity, trip duration and day sequencing, transport caveats, reservations, search excerpts and localized phrasing. The Japanese hub meta description initially exceeded the 180-character site limit because the page uses a clipped source key distinct from the full body key. The actual clipped meta key is now translated to a natural 60-character Japanese excerpt; the complete hub body retains its own translation. No Luna Max configuration or external human review is claimed.

The approved catalogs each contain 54,774 current strings with zero missing and zero stale entries. The literal, locale-script and translation-coverage guards passed; all four page/search batches passed declared-route coverage with zero missing keys. Search output remains at 955 records per language.

## Verification

- `npm run audit:i18n` — passed all four locales, 54,774 strings each.
- `npm run audit` — passed the full site audit across 4,560 published pages, 955 search records per language, the France audit, photo guards, China CN14B and Lake District diagram regression.
- `npm run build` — passed: 5,463 files (4,577 HTML, 797 images), all 4,560 sitemap routes verified.
- `npm run test:france-date-sync` — passed: 81 English routes and 405 sitemap URLs synchronized; all 16 Lyon/Rhône, Alsace, Burgundy and Dordogne pages use `2026-10-11` in all five Article editions and sitemap entries.
- `npm run test:china-cn14b` — passed with checks against the built artifact.
- `npm run test:united-kingdom-lake-diagrams` — passed for two SVGs, two archived photos, four routes and five languages.
- `npm run audit:photo-license-inventory` — passed. Its inventory records 537 used assets without an independent source-page check across the wider site; it does not assert global rights clearance.
- `git diff --check` — passed.

The current Dordogne photo review is recorded in [france-dordogne-photo-review-2026-10-11.md](france-dordogne-photo-review-2026-10-11.md). Three retained WebPs were inspected at pixel level. Exact Commons pages were checked for the Sarlat and Beynac images. The Les Eyzies image's exact Commons page was unavailable; its existing asset and credit remain marked unverified. The automated France source crawl returned restricted-fetch warnings, so this record does not claim every official endpoint was crawler-verified.

No browser, local server, desktop/mobile visual review or deployment was used. UI acceptance remains for the parent workspace.
