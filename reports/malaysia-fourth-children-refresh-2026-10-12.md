# Malaysia fourth-child completion review — 12 October 2026

## Scope and history

This is a source-only completion of the omitted fourth child in four Malaysia clusters. The base is `12b8f9df54c75185712a99d81a69744a66ad13ae` on `codex/integration-sprint-20261011`; the source delivery branch is `codex/sprint-my-05-20261012`. The earlier cluster commits were checked against each exact HTML path and Git history: Penang `16f5f151`, Cameron Highlands `61aaff4f`, Ipoh `b395dd89`, and Langkawi `74bb2901`. Each prior batch updated its hub plus three focused routes. The omitted fourth children were, respectively, Little India & the Esplanade, Ringlet & Bertam Valley, Batu Gajah & Kellie's Castle, and Dayang Bunting Island. The latest integration source had not completed those four bodies.

Only those four route bodies were rewritten in this batch. Against the integration source, the visible English `<main>` text changes as follows:

| Route | Words before | Words after | Change |
| --- | ---: | ---: | ---: |
| `/malaysia/george-town-penang/little-india-esplanade/` | 648 | 1,077 | +429 |
| `/malaysia/cameron-highlands/ringlet-bertam-valley/` | 533 | 1,045 | +512 |
| `/malaysia/ipoh-kinta-valley/batu-gajah-kellies-castle/` | 583 | 1,224 | +641 |
| `/malaysia/langkawi/dayang-bunting-island/` | 564 | 1,255 | +691 |

The four clusters now have body coverage for their hub and all four children in source. This describes the routes' source content; it is not a claim of rendered UI acceptance or deployment.

## Content review

- **Little India & the Esplanade** gives a compact Little India–Lebuh Light–Padang Kota Lama sequence, keeps worship and heritage interiors selective, times the exposed waterfront for cooler hours, and sets a return-bus/ride fallback. The page does not invent a Rapid Penang route number. The official Penang Global Tourism page describes Rapid Penang as the network, names KOMTAR and Penang Sentral as interchange hubs, identifies the free CAT service in the core and directs visitors to the operator for current service details: [Getting Around Penang](https://www.mypenang.gov.my/abt_png.php?id=WjRiaEVUSWxRdERPNzFRYnlxNEdBdz09).
- **Ringlet & Bertam Valley** treats Ringlet as a southern highlands road corridor, groups stops so the day does not become unsafe roadside sightseeing, and offers a Ringlet-town fallback if weather, traffic or a tea stop does not work. Cameron Bharat Plantations' [Cameron Valley Tea listing](https://bharattea.com.my/) shows Tea Houses 1–3, their Batu 34/34.5/50 locations and a Batu 34 plantation walk. That listing does not establish the exact day's access, transport availability or entry conditions, so the guide directs readers to confirm them before setting out.
- **Batu Gajah & Kellie's Castle** separates the long-distance rail leg, the local road transfer and the site visit. It asks travelers to compare exact-date KTMB service to Ipoh and Batu Gajah, reserve the correct station pickup and secure the return ride in advance; it does not treat either station as the castle gate or a walking route. KTMB's [ETS service page](https://www.ktmb.com.my/ets.html) and [timetable page](https://www.ktmb.com.my/traintime.html) were checked for the official service/timetable path. The Tourism Malaysia Kellie's Castle visitor page was inaccessible in this review, so current admission, hours, last entry and site access are explicitly left for direct confirmation.
- **Dayang Bunting Island** is planned as one operator-confirmed mainland pickup, named jetty, boat crossing, island landing and return chain. It makes the lake/forest walk conditional on the day's access and the group's mobility, treats water activities as operator- and condition-dependent, and offers a mainland/nearby-island alternative if the trip is cancelled. The [Langkawi UNESCO Global Geopark geoforest-park listing](https://www.langkawigeopark.com.my/our-geoforest-parks/) and [Langkawi Development Authority geopark information](https://www.lada.gov.my/en/langkawi-unesco-global-geopark/) support the island's geopark/lake context. They do not verify a specific boat operator, timetable, landing status or sea conditions; those remain same-day checks.

The source-level comparison read the exact existing Japan local-guide page `/japan/osaka/namba/` alongside all four complete target `<main>` bodies. That reference has a broader neighborhood walk and more cultural stops; these narrower field guides make the destination-specific transfer chain, visit sequence, risks and fallback explicit. The comparison was textual. No browser or viewport review was performed, and this review does not grant editorial acceptance.

## Images and rights record

Two new 960 × 640 viewBox original SVGs are used as non-geographic planning diagrams:

- [`tripdistill-dayang-bunting-chain.svg`](../assets/images/tripdistill-dayang-bunting-chain.svg) shows the boat/island sequence. Its dashed outbound arrow points toward the island, and its page-rendered legend labels the steps and operating conditions.
- [`tripdistill-kellies-castle-transfer.svg`](../assets/images/tripdistill-kellies-castle-transfer.svg) shows the base, exact-date rail/road leg, pre-arranged last-mile transfer and confirmed return.

I read both SVG sources and rendered each at 960 × 640 for pixel inspection. The displayed diagrams are identified as TripDistill project originals, not geographic maps and not to scale. The inventory records `license: null`, “Project original; no separate reuse license declared,” the Terms of Use link, creator and local SHA-1. This records provenance; separate reuse-license eligibility is unknown. No third-party photo was added, no original file was deleted, and no photo-license conflict was found in these four target routes.

The two existing photos still used on Penang and Cameron were also viewed at their local 1,440 × 960 pixels and compared with their exact Commons pages. The Penang WebP shows a covered five-foot walkway beneath George Town shophouses; Commons names LeonardKong and declares CC BY 2.0. The Cameron WebP shows the agricultural valley and road corridor near Bertam; Commons names Slleong and declares CC0 1.0. Both pages show matching visible credit/source links in the guide. The original bytes were not changed. These are Commons source-page declarations, not independent uploader-authority or legal clearance: [Penang source page](https://commons.wikimedia.org/wiki/File:Five_Foot_Way_in_George_Town_,_Penang.jpg), [Bertam source page](https://commons.wikimedia.org/wiki/File:Bertam_1.jpg).

Melaka was not edited in this task. Its independent photo-remediation work, page bodies, source image bytes and retired-image provenance remain intact; the retired rights-review photo remains in the repository and is excluded from the build.

## Language, search and dates

The four routes, changed English search records and reviewed Traditional Chinese, Japanese, Korean and Thai editions are synchronized. Each locale has a route-page batch and a separate search batch. The page-batch provenance records GPT-6 Luna as writer and GPT-6 Luna same-model self-review, with `independentSecondModel: false`; no Luna Max, human review or external approval is claimed. Global merge and translation audit each passed with 55,377 current strings per locale and no missing or stale strings.

All four route editions use 12 October 2026 in the localized page metadata and sitemap. Comparing the 4,560-entry sitemap map directly with the integration parent found exactly 20 `lastmod` changes: these four routes in five editions. There were no URL additions or removals. At completion of this source batch, Melaka sitemap dates were restored to their parent values and the then-current helper was not rerun because its rule did not carry Melaka's independent override. During the subsequent Côte d’Azur integration, the helper was updated to preserve the five existing Melaka date overrides; `npm run test:malaysia-melaka-route-dates` passes after regeneration.

## Verification

- `npm run audit` passed, including translation coverage, locale/search guards, photo-license inventory and provenance, all country audits, France dates, UK dates/search, Peak District dates, Puglia dates, Cameron/Langkawi/Melaka/fourth-child Malaysia checks, the Melaka image-remediation regression, China route dates/CN14B, Lake District/Somerset diagram regressions, NYC/U.S. structure checks and the full static-site audit.
- Full-site audit: 4,560 published routes (912 each in English, Traditional Chinese, Japanese, Korean and Thai), 955 search records per language, and 4,560 unique localized page titles.
- `npm run build` passed: 5,466 files (4,577 HTML, 800 images); all 4,560 sitemap routes were verified in `dist`.
- Malaysia fourth-child regression passed for four routes × five language editions, including date, search, route content and diagram/hash checks. Cameron and Langkawi each passed for their existing four-route clusters. Melaka passed five existing routes, 25 sitemap entries and the original diagram/retired photo regression.
- The photo inventory regression passed with two additional project-original records; the preserved Melaka rights-review asset remains excluded from the 800-image build. At completion of the Malaysia batch, the global inventory reported 524 used assets without an independent source-page check. After integration of the Côte d’Azur source-page reviews, the combined inventory reports 521 such assets and 248 source-page-checked records. This bounded review is not a site-wide rights audit.
- `git diff --check` passed. No whole-site restricted source crawler, browser, local server, headless runner, CDP session, deployment or external approval was used.

The repository does not contain `.agents/` or an `.agents/skills/` directory. The README's editorial release gate was used for the source-level comparison; its separate browser-rendered review requirement remains outstanding.
