# U.S. historical coverage correction — 13 October 2026

This report corrects the substantive-route ledger for 32 existing U.S. routes whose substantive body work was already present in source history but omitted from the previous count. It records historical work; these paths do not establish U.S.-wide content quality or rendered UI acceptance.

## New York sample: 4 routes

The source terminal is `6b173d71878f1d4d553fdedd6753e3f74d3aaf21` (parent `e1c4908e99c2cf36e263d00ff67bafe517d77906`, tree `c64684d83d6cc6c4904506a966b5fc2c5f2d3483`). All four current English bodies match that source terminal. The four reviewed locale batches `32-nyc-editorial.json` each contain 241 keys for the same four routes; `34-nyc-japan-baseline.json` each contains 14 keys for the New York hub and Midtown. The 21-key `31a` shell batch is not used as body-translation evidence.

- `/usa/new-york/`
- `/usa/new-york/lower-manhattan/`
- `/usa/new-york/midtown-central-park/`
- `/usa/new-york/brooklyn-waterfront/`

## Additional historical U.S. routes: 26

Each listed source terminal has an exact direct-parent and tree check in `scripts/test-substantive-route-ledger.mjs`. Current English `<main>` text matches the historical source terminal for every path; each route has a source-parent body delta greater than 500 whitespace-separated words. The four localized editions retain substantive native-script main content. Reviewed batches are cross-locale route-scope checked and each batch translation is checked against the corresponding global locale catalog.

### Philadelphia & Washington, DC — 8 routes

Source `4daf76a4b37ddeaaf6ded8c67032d94afc0adf56`; parent `6b173d71878f1d4d553fdedd6753e3f74d3aaf21`; tree `45f42e7d8a4e9d17e65575c403a1c9317496a341`.

Reviewed batches per locale: `35b-philadelphia-editorial.json` (205 keys) and `35c-dc-editorial.json` (197 keys).

- `/usa/philadelphia/`
- `/usa/philadelphia/old-city/`
- `/usa/philadelphia/parkway-museums/`
- `/usa/philadelphia/reading-terminal/`
- `/usa/washington-dc/`
- `/usa/washington-dc/georgetown/`
- `/usa/washington-dc/national-mall/`
- `/usa/washington-dc/smithsonian/`

### Seattle & Portland — 8 routes

Source `6b62cc9c5f6202e489626781836191b787e89a21`; parent `174c93dd1b4e2f13ee655f8a4e356b26270fc583`; tree `37d052c321bea96dbf3a56cbe01d3c8c67782926`.

Reviewed batches per locale: `37a-seattle-editorial.json` (177 keys) and `37b-portland-oregon-editorial.json` (189 keys).

- `/usa/seattle/`
- `/usa/seattle/bainbridge/`
- `/usa/seattle/mount-rainier/`
- `/usa/seattle/pike-place-waterfront/`
- `/usa/portland-oregon/`
- `/usa/portland-oregon/columbia-gorge/`
- `/usa/portland-oregon/oregon-coast/`
- `/usa/portland-oregon/washington-park/`

### San Francisco & Yosemite Valley — 5 routes

Source `ccbd6e9eba654a450e62be24d7b3acbbf9871c6f`; parent `6b62cc9c5f6202e489626781836191b787e89a21`; tree `a7af225669a35c3f69021cf99161d93dd8c3990e`.

Reviewed batches per locale: `38a-san-francisco-editorial.json` (182 keys) and `38d-sierra-parks-editorial.json` (186 keys; includes Yosemite).

- `/usa/san-francisco/`
- `/usa/san-francisco/golden-gate-presidio/`
- `/usa/san-francisco/mission-neighborhoods/`
- `/usa/san-francisco/waterfront-alcatraz/`
- `/usa/sierra-parks/yosemite-valley/`

### Las Vegas & Zion — 5 routes

Source `5ef5073b3beb5e06ffcc8cba58359dd09ee70b4b`; parent `ccbd6e9eba654a450e62be24d7b3acbbf9871c6f`; tree `06a0ffe6ccbbd51b92b95dce47e1a04de6d8926d`.

Reviewed batches per locale: `39a-las-vegas-editorial.json` (186 keys) and `39b-utah-parks-editorial.json` (187 keys; includes Zion).

- `/usa/las-vegas/`
- `/usa/las-vegas/downtown/`
- `/usa/las-vegas/red-rock/`
- `/usa/las-vegas/strip/`
- `/usa/utah-parks/zion/`

### USA overview & Juneau — 2 historical routes

At source base `b4045e0b7265cc6c3ceb8f16acb3e591d4b87eda`, both normalized English `<main>` bodies matched historical commit `71def01cd4d489552b9f5d67ca1a202becaa0435e` and differed from its parent `5ef5073b3beb5e06ffcc8cba58359dd09ee70b4b`. The 13 October source follow-up `73bcb05ae123fe3e4b70f057fa4dc7fc88979693` adds dated operating detail to these existing pages; it is not their first substantive rewrite. The exact two-page regression checks the historical comparison and the distinct current follow-up. Four-language historical translations were present in reviewed batches before the current source follow-up; the new follow-up is documented separately in the [USA overview and Juneau source report](reports/usa-overview-juneau-source-follow-up-2026-10-13.md).

- `/usa/`
- `/usa/alaska/juneau-southeast/`

## Ledger arithmetic

The integration ledger was 829/907 after Boston & Cambridge. The four New York historical paths corrected that count to 833/907; 26 other historical routes brought it to 859/907. The three-country content batch contributes 12 newly integrated existing-body routes (San Diego, Phong Nha, Broome/Tasmania), bringing the ledger to 871/907. The two-route USA overview/Juneau follow-up verifies historical work that predates it and brings the corrected total to 873/907. These 32 historical routes (4 New York, 26 other paths, 2 overview/Juneau) are listed separately from the 12 current body refreshes. They do not increase the disclosed 65/97 U.S. source-work subtotal. No route is added or removed.
