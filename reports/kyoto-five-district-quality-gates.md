# Kyoto five-district quality gates

## Scope

This release covers the existing Kyoto hub, the Arashiyama, Fushimi and Gion route guides used by the QA set, and five detailed district guides. It keeps all current paths and language prefixes. It adds no country or route.

## Measured gates

| Area | Acceptance criterion | Evidence and status |
| --- | --- | --- |
| Editorial depth | Each of the five expanded English district sections has at least 180 prose words, at least three distinct local story cards, and source-backed place or history detail. | **Pass.** Paragraph text measures 185–196 words per section; each has 3–4 story cards. The route-specific subjects are the Higashiyama slope and craft streets, Nishiki and the Kyoto grid, Toji and the old southern threshold, northwest temple and garden contrasts, and the Lake Biwa Canal and Philosopher’s Path. |
| Factual grounding | Historical dates, place identities, route facts and operating claims link to relevant official or primary references; no unverified opening times or new route promises are introduced. | **Pass for the checked fact set.** Earlier place-history notes remain linked to Kyoto City’s guide and the relevant site authorities. The 6 October follow-up rechecked station access against Kyoto City’s official comfortable-access pages for Ginkakuji/Philosopher’s Path and Kinkakuji, Kiyomizudera’s own access map, and Fushimi Inari Taisha’s station guide; rain-day museum descriptions link to MoMAK’s collection and visitor pages, Kyoto City KYOCERA Museum of Art, and Kyoto Museum of Crafts and Design. Live operations remain subject to official calendars and route notices. |
| Image rights | Every image shown by a changed guide has an exact source-page link, creator, license/version link, edit disclosure and applicable same-version share-alike notice. | **Pass for the 10 images shown by these guides.** All 10 source pages are independently checked and the responsive guide checker matches displayed images to their source records. The active per-file inventory snapshot contains 779 complete attribution records: 82 source pages checked and 697 records counted by `licenseClaimsNotIndependentlyVerified` (metadata-or-credit-only rows). That 697 is an asset-record counter, not a global source-page backlog. A separate task-wide reconciliation covers 771 unique Commons URLs: 729 exact page URLs were reached and 42 remain inaccessible or identity-unresolved. Page reach alone does not establish rights clearance. |
| Translation | All four localized editions have zero missing and zero stale required strings; proper names, dates and license identifiers remain consistent. | **Pass.** The 6 October follow-up added 46 source keys per locale and removed 23 obsolete keys per locale from the older Kyoto batch. The final audit checked 51,853 strings per locale and 207,412 reviewed targets total, with zero missing or stale entries. |
| SEO and language routing | Every targeted route keeps its canonical path and has one title, one H1, correct `html lang`, and the six expected hreflang declarations. The full published sitemap remains valid. | **Pass.** The site audit found 4,560 localized routes (912 per locale), 955 search records per language, and 4,560 unique localized page titles. The Kyoto checker covers 45 route/language entries. |
| Responsive layout | At 320 px and 390 px, no horizontal overflow, clipped content or unreadable translated cards. The five story layouts collapse to one column at widths up to 620 px. | **Source-level pass; rendered verification pending.** The generated QA harness provides the two narrow viewports for all 45 route/language entries, and checks the scoped width and card rules. No local browser screenshot or rendered overflow measurement was run for these five new guides. |
| Accessibility | Semantic route checks pass; target WCAG 2.2 AA contrast (4.5:1 body text, 3:1 large text), visible keyboard focus, keyboard-operable navigation and zero serious/critical automated accessibility findings. | **Partial.** Static route audits confirm one H1, language metadata, canonical/hreflang, named jump navigation and keyboard focusability of the jump scroller. Contrast, keyboard interaction across shared controls and automated browser accessibility scans remain unmeasured. |
| Performance | Added district CSS stays below 6 KiB, the replaced lead image stays below 600 KiB, and the change adds no JavaScript or third-party runtime service. Target field metrics are LCP ≤2.5 s, INP ≤200 ms and CLS ≤0.1 at the 75th percentile. | **Asset budget pass; field metrics pending.** The new CSS is 5,707 bytes and the Ryoanji WebP is 551,320 bytes. No runtime JavaScript or external service was added. LCP, INP and CLS were not measured. |
| Functional behavior | All 45 route/language entries resolve with exact image credits; menus, search, language switching and FAQ controls operate by pointer and keyboard. | **Static route and credit checks pass.** The generated checker covers all 45 entries and exact image/source-credit pairing. Pointer and keyboard interaction flows were not browser-tested on the five new guides. |
| Desktop design | At 768 px and 1440 px, the five story layouts remain readable, balanced and free of clipping; each retains its own hierarchy and visual treatment. | **Layout rules are present; rendered review pending.** Five distinct story variants are defined. No local browser screenshot was captured at tablet or desktop widths. |

## Primary fact references

- [Kyoto City Official Travel Guide — Gion & Kiyomizu](https://kyoto.travel/en/areas/gion-kiyomizu/)
- [Toji Temple — About Toji](https://toji.or.jp/en/about/index.html)
- [Nijo Castle — Ninomaru-goten Palace and Garden](https://nijo-jocastle.city.kyoto.lg.jp/introduction/highlights/ninomaru/?lang=en)
- [Lake Biwa Canal — History](https://biwakososui.kyoto.travel/en/about/)

## Build evidence

- `npm run audit`: passed all country, editorial-structure, translation and site-wide route checks.
- `npm run build`: passed; generated 5,430 files, including 4,577 HTML files and 780 images; verified all 4,560 sitemap routes; 14,570 Cloudflare Pages file slots remained before the safety boundary.
- `git diff --check` and `node --check` for both Kyoto QA harness scripts: passed.

Rendered visual review, browser-based keyboard and interaction checks, and field performance metrics remain explicit release follow-ups; they are not represented here as completed tests.
