# New York historical substantive coverage correction — 13 October 2026

## Finding

The route-level substantive ledger had no New York entry among its explicit U.S. source-work groups. Read-only history review confirms that the existing New York sample received four substantial body rewrites in source commit `6b173d71878f1d4d553fdedd6753e3f74d3aaf21` (parent `e1c4908e99c2cf36e263d00ff67bafe517d77906`, tree `c64684d83d6cc6c4904506a966b5fc2c5f2d3483`). That commit is an ancestor of the current integration branch. The current English bodies match its normalized `<main>` text exactly.

| Route | Parent → source terminal visible `<main>` words | Delta |
| --- | ---: | ---: |
| `/usa/new-york/` | 569 → 1,993 | +1,424 |
| `/usa/new-york/lower-manhattan/` | 514 → 1,469 | +955 |
| `/usa/new-york/midtown-central-park/` | 498 → 1,335 | +837 |
| `/usa/new-york/brooklyn-waterfront/` | 490 → 1,448 | +958 |
| **Total** |  | **+4,174** |

Counts use `parse5` to extract `<main>` text, omit script/style/SVG text, normalize whitespace, then count whitespace-separated words. Counts are a history comparison, not a quality score.

## Five-language and scope checks

The four English pages and all 16 localized pages contain the exact revision marker `nyc-20260911`. The repository's source-terminal README records that the user accepted the New York sample on 11 September 2026. This report treats that as a repository record; it does not claim independent access to the original user message, a rendered UI check, blanket U.S. approval or AdSense readiness.

The four routes are disjoint from the explicit 25-route historical U.S. source ledger and from the later 40-route U.S. source-work set, which together form the currently disclosed 65/97 source-work subtotal. No New York HTML, search record or sitemap date changed in this correction. The correction is separately recorded in `data/substantive-route-ledger.mjs`, raising coverage from 829 to 833/907 without changing the current source-work subtotal.

Checks performed:

- `npm run audit:nyc` — passed the four English structural regressions and verified all 16 localized pages retain the New York revision marker.
- `npm run test:substantive-route-ledger` — passed the source parent check, substantive body-delta threshold, current-body equality to the historical source terminal, five-language presence, disjointness and 833 checkpoint sequence.

This is a historical coverage correction only. New York page content remains unchanged; the correction does not signal collection-wide quality acceptance.
