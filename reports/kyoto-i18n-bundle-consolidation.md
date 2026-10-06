# Kyoto reviewed-bundle coverage repair

Date: 2026-10-06
Branch at validation: `kyoto-qa`
Starting source / preview commit: `a3e95819501c0a53964bec6b801e110718807af2`

## Scope

Reconciled the reviewed translation bundles for the nine existing Kyoto routes and one existing Malaysia credit key across `zh-Hant`, `ja`, `ko`, and `th`. No English copy, route paths, images, layout, CSS, or rendered content was changed. The original Kyoto bundles are retained byte-for-byte in `data/i18n/archive/kyoto/2026-10-06/` with SHA-256 hashes and per-batch metadata in `manifest.json`.

## Standalone batch validation

Before consolidation, all 32 original files (eight bundles in each of four locales) were checked. Twenty-eight failed route-coverage validation: the `05` batch reported 27 issues per locale; `87` reported 21; `88` 16; `89` 4; `90` 4; `91` 26 (including the validator's additional-issues summary); and `92` 11. The `93` batch passed in all four locales. The largest route-coverage gaps were in the older `05` and `91` snapshots.

After consolidation, the active `05-kyoto.json` bundles validate all nine Kyoto routes in all four locales: 1,216 keys are owned by each bundle and 46 route keys are already present in earlier sibling bundles, for zero missing keys across 1,262 unique source keys. Each new `29-malaysia-credit-rehome.json` validates both existing Malaysia routes: the one moved creator-credit key plus 424 keys already covered by sibling bundles, for zero missing keys across 425 unique source keys. All eight active locale/bundle combinations passed the standalone validator.

The archived originals contain 1,217 unique reviewed source/target pairs per locale (4,868 across four locales). All 32 archived file hashes match the manifest, and all 4,868 archived targets are still present unchanged in the active approved locale catalogs. The single non-Kyoto pair is retained under the Malaysia route bundle.

## Aggregate validation

- Before: the aggregate i18n audit passed at 51,853 required strings per locale, with zero missing or stale catalog entries. That audit did not detect the route-scoped standalone coverage problems above.
- After: `npm run audit:i18n` passes its literal checks, locale-script checks, the new missing/stale regression test, approval merge, and translation audit. It checks 207,412 reviewed targets and reports 51,853 required strings per locale with zero missing or stale entries.
- `npm run audit` passes all editorial/structural audits and the site audit: 4,560 published routes, 912 per locale; 955 search records per language; 4,560 unique localized page titles.
- `npm run build` succeeds: 5,430 files, 4,577 HTML files, 780 images; all 4,560 sitemap routes are present. Pages file headroom is 14,570 files.
- `git diff --check` passes.

## Deployed-output comparison

The prior preview baseline (source commit `a3e95819501c0a53964bec6b801e110718807af2`; preview alias `https://kyoto-qa.trip-68e.pages.dev`) had 5,430 public files totaling 323,970,289 bytes. The rebuilt `dist`, excluding the local `/qa/kyoto-responsive/` harness, has the same file count and byte total, and the same deterministic tree SHA-256:

`7b22bdcd0ca2b0296726c5e7093e22199352dc7d37e03df900ccada6a9c36e6c`

Because the generated public output is byte-identical, this bookkeeping-only change was not redeployed. The preview remains on source commit `a3e95819501c0a53964bec6b801e110718807af2`; the source branch contains the validation repair, archive, and route-bundle consolidation.

The merged catalog JSON files are generated artifacts: each approval run writes a new `generatedAt` and current `batchFiles` list. Their raw file hashes therefore differ from an earlier approval run even though the rendered public tree is byte-identical; the generated metadata is not part of `dist`.
