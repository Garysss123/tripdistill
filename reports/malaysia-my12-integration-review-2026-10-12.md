# MY12 Malaysia integration review — 12 October 2026

## Branch and merge scope

- Topic branch: `codex/sprint-my-12-20261012`.
- Base: MY11 `8791456c3da0e64f7cbe493c5f443b6b54512aeb`.
- Imported source refreshes: Perhentian & Redang `d8efdbad795bf97db4cd53152fa29a4485d025e4`; Kota Kinabalu & Tunku Abdul Rahman Park `332e21c9cb06abfabd8781700de9d509ddd486b0`.
- Scope: the two existing hubs and their four children each, their existing search records, sitemap dates, bounded generation and tests. Sandakan, Semporna and Kuching article bodies were not regenerated. Taman Negara, Melaka, Penang, Cameron Highlands, Ipoh and Langkawi article bodies were not changed.

The content preserves base-night choices and separates island nights from mainland transfer nights; names the airport/rail/coach, road, jetty, boat and accommodation handoffs; gives shore-specific walking/visit routes and seasonal booking/weather fallbacks; and leaves live availability, fares, departure times, permits and weather decisions to official services and the booked operator. See the [Perhentian & Redang refresh report](malaysia-perhentian-redang-refresh-2026-10-12.md) and [Kota Kinabalu refresh report](malaysia-kota-kinabalu-refresh-2026-10-12.md).

## Routes, search and dates

Compared with the MY11 base, the sitemap remains exactly 4,560 URLs: zero added, zero removed and 50 existing `lastmod` changes (25 target routes × five editions per cohort). The English search index remains 955 records, with ten existing target records changed. Each localized search index also remains at 955 records. No new route was introduced.

Four Perhentian/Redang page batches and four search-delta batches, plus four Kota Kinabalu page batches and four search-delta batches, validate for Traditional Chinese, Japanese, Korean and Thai. Page-batch keys are 162 per Perhentian locale and 237 per Kota Kinabalu locale; the search batches contain one Perhentian parent label and 21 Kota Kinabalu search keys per locale. `i18n:sample` passed for all eight page batches. Global approval and translation audit passed with 55,905 active strings per locale and zero missing or stale entries. Duplicate labels were resolved by making Kota Kinabalu's field label specific to Kota Kinabalu; the existing Sandakan wording was not changed. Twenty-eight stale translation keys were pruned from older reviewed Malaysia batches; no active page text was removed.

The current execution runtime identified itself as GPT-6 and exposed no Luna variant or model-selection control. It therefore cannot substantiate that this integration pass ran with `gpt-6-luna`. Existing source-batch review provenance remains in the upstream refresh records; no second-model or independent human review is claimed here. This runtime only normalized short Kota Kinabalu labels and separated an existing Perhentian search label from its page batch; it did not rewrite the long-form travel copy.

## Images and rights-record limits

All six retained 1,440 × 960 WebPs were inspected locally and match their visible subjects. Their source-page creator/license declarations and local SHA-1 values are recorded in the inventory regression; Perhentian/Redang SHA-256 values are in the source review. No image was mismatched, so no new SVG was needed. The Kota Kinabalu Jesselton Point file offers more than one license version; the existing selected CC BY-SA 3.0 declaration is preserved, and multiple versions are not automatically treated as a conflict.

Current Commons API fetches were blocked by the environment proxy (HTTP 403); the pixel inspection was local and the source-page declarations rely on the reviewed upstream source reports. Inventory coverage is not a legal chain-of-title audit: it records 263 source-page checks overall, 508 used assets without an independent source-page check, zero active missing English credit matches, zero open credit reviews and zero source-metadata conflicts. Original planning SVGs have no separately declared reuse license; that statement does not determine TripDistill's ownership or site-use rights. No independent rights-chain clearance is claimed.

## Verification

- `npm run audit` passed, including translation/search, image provenance, Malaysia cohorts, China route dates and CN14B, UK Lake District and Somerset SVGs, UK/France regressions and the full site audit.
- `npm run build` passed: 5,468 files (4,577 HTML, 802 images), with all 4,560 sitemap URLs verified in `dist`.
- The target Perhentian/Redang and Kota Kinabalu date/search/photo regressions passed for all five editions. The existing Sandakan, Semporna and Kuching source-history regressions passed after their expected integration date/search sets were expanded to include the two imported cohorts; no corresponding article bodies were rewritten.
- `git diff --check` passed.

No browser/UI review, headless browser, CDP, local server, whole-site source crawl, force push, integration/main/production push or deployment was run. Automated structural checks do not substitute for the repository's human editorial release gate. The source reports also record the limits on current transport/park information and photo rights verification.
