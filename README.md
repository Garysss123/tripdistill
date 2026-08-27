# TripDistill

TripDistill is a static five-language travel guide site for `tripdistill.com`.

English uses the root route tree. Traditional Chinese, Japanese, Korean and Thai mirror it under `/zh/`, `/ja/`, `/ko/` and `/th/`. Every published guide must exist in all five editions, keep reciprocal `hreflang` metadata and remain usable without client-side translation.

## Cloudflare Pages deployment

The site remains pure static HTML, CSS and JavaScript. A clean `dist/` directory is generated so source scripts and project notes are never uploaded.

```powershell
npm run audit
npm run build
npm run pages:whoami
npm run pages:list
npm run deploy:trip
```

`deploy:trip` always targets the Cloudflare Pages project named `trip`. It does not target the separate `pcbuild` project. The build warns at 18,000 files, blocks at the 20,000-file safety boundary and rejects individual files over 25 MiB.

The site uses directory URLs such as `/japan/`, `/south-korea/seoul/` and `/thailand/bangkok/yaowarat-talat-noi/`, with matching localized routes such as `/zh/japan/`, `/ja/japan/`, `/ko/japan/` and `/th/japan/`. Shared navigation is loaded from each locale's own `/components/` fragments. All SEO body content remains in each page's HTML.

## Language editions

English source pages remain the editorial source of truth. Reviewed batch files under `data/i18n/reviewed/` are the versioned translation source. `npm run i18n:approve` validates and merges them into generated `data/i18n/zh-Hant.json`, `ja.json`, `ko.json` and `th.json` catalogs; `npm run localize` then generates the complete static locale trees, shared components and search indexes. The merged catalogs and generated `/zh/`, `/ja/`, `/ko/` and `/th/` trees stay out of Git, but `npm run build` recreates and includes the locale trees in `dist/` for Cloudflare Pages.

For every new page or material English edit, assign Luna Max translation agents to synchronize all four localized catalogs. Give each agent one locale at a time, require exact source-key parity, natural destination-specific terminology and explicit checks for names, numbers, restrictions, licensing language and untranslated long copy. Do not accept dictionary substitution, word-by-word assembly or an unchecked local-model draft as publishable copy. Review natural long-form samples before permitting a bulk pass. Only a catalog that has passed human-style sampling may be marked `"qualityStatus": "reviewed"`; localization refuses every draft or unreviewed catalog. A change is incomplete until all four catalogs pass `npm run audit:i18n`, every locale tree regenerates, and the normal functional and visual gates pass.

Luna is a build-time editorial collaborator only. No model, API key, translation runtime or background inference process ships to Cloudflare Pages or remains necessary after the iteration. Production serves ordinary static HTML, CSS, JavaScript and JSON. Stop any temporary local model after translation work; retaining downloaded model files on disk is optional and unrelated to the deployed site.

### Luna translation batch workflow

Treat synchronized translation as part of creating the page, not as a later cleanup task. For each new English cluster, assign one Luna Max agent to each target locale and give every agent exactly one reviewed batch file:

```text
data/i18n/reviewed/zh-Hant/NN-cluster-name.json
data/i18n/reviewed/ja/NN-cluster-name.json
data/i18n/reviewed/ko/NN-cluster-name.json
data/i18n/reviewed/th/NN-cluster-name.json
```

Each file uses this shape:

```json
{
  "locale": "zh-Hant",
  "qualityStatus": "draft",
  "routes": ["/country/city/"],
  "translations": {
    "Exact English source key": "Natural target-language copy"
  }
}
```

The exporter creates `draft`; `reviewed` is the final state after Luna finishes the locale and the editorial sampling gate passes.

Create the blank, source-key-complete batch with the exporter before assigning it to Luna. It refuses to overwrite an existing batch, refuses to run while an earlier-numbered batch is unreviewed and omits keys already owned by earlier-numbered reviewed batches:

```powershell
npm run i18n:export -- --locale=zh-Hant --file=17-new-city.json --routes=/country/city/,/country/city/area/
```

Repeat the export for `ja`, `ko` and `th`, then give each Luna Max agent only its locale-specific file. The agent fills every blank value with natural copy, changes `qualityStatus` from `draft` to `reviewed` only after its own checks, and runs the batch validator.

- Keep batches destination-sized, normally one city or 8–10 closely related pages. Use zero-padded filenames in dependency order (`01-…`, `02-…`). Deduplicate exact English source keys across the assigned routes and reuse a translation from an earlier reviewed batch instead of creating a conflicting duplicate; the batch validator deliberately uses only earlier-numbered siblings as prior coverage.
- Restrict each agent to its assigned locale batch file. Require it to parse the completed JSON, verify every target is non-empty, preserve URLs and factual numbers, and report the route count plus unique source-key count.
- Localize the explanatory prose in visible image credits, including resize, WebP conversion, display-crop, edit and watermark notes. Preserve creator names, source URLs, `CC0`, `CC BY`, `CC BY-SA`, `Public domain`, version numbers and other exact license markers; a credit is not permission to leave its whole sentence in English.
- Translate travel terms by context, not by their most common dictionary sense. In rail copy, for example, `operator`, `gate`, `exit` and `paid area` must use the target language's normal railway terms rather than generic company, door, exit or payment-area wording. Render editorial metaphors by their planning purpose too: phrases such as `attention budget`, `two clocks`, `field cabinet`, `working market` and `mainland buffer` must become natural destination copy, never literal combinations that a native editor would not write. Consult the locale glossary under `data/i18n/terms-*.json` when available and extend it when a new place name or stable specialist term is introduced.
- Inspect representative titles, long planning paragraphs, warnings, FAQs, image credits and proper nouns in natural context. The word `reviewed` records this editorial gate; it is not permission to label an unchecked generation as reviewed.
- Treat structural validation as necessary but not semantic proof. The validator can confirm that every source key has a non-empty target, but it cannot prove that a target answers the correct source sentence. Sample every route, including titles, FAQs and route boundaries, with source and target side by side. If one shifted or mismatched key/value pair is found, review the entire batch before continuing; never repair only the visible example and approve the rest by count.
- Use `npm run i18n:sample -- --file=data/i18n/reviewed/zh-Hant/NN-cluster-name.json` to print deterministic source/target samples from every declared route. It includes route edges and long copy, and warns when one long target is reused for different source sentences. Read the output; the command makes semantic review easier but does not replace it.
- Merge a locale in draft mode while work is still in progress, and approve it only after every current source key is covered:

```powershell
npm run i18n:batch -- --file=data/i18n/reviewed/zh-Hant/NN-cluster-name.json
npm run i18n:merge -- --locale=zh-Hant
npm run i18n:merge -- --locale=zh-Hant --approve
npm run i18n:status
npm run audit:i18n
```

Repeat the merge and approval for `ja`, `ko` and `th`. Then run `npm run localize`; never hand-edit generated `/zh/`, `/ja/`, `/ko/` or `/th/` pages. A new route may be deployed only after all five static editions have matching routes, search records, canonical links and reciprocal `hreflang` entries.

The first-visit language dialog is suggestive, never a forced redirect. It can offer the matching English, Traditional Chinese, Japanese, Korean or Thai route from the browser's preferred language. The dialog preserves the path, query and hash, records the explicit choice in local storage and does not change canonical URLs. Header and footer menus always provide manual control.

The shared sidebar uses progressive disclosure for a large guide library: `Asia` contains collapsible country groups, while city and regional chapter lists are separate collapsible sections. The current country and exact chapter always open automatically, keyboard behavior comes from native `details`/`summary`, and optional open-state preferences are remembered locally. Add new Asian countries inside the shared country grouping instead of returning to one long flat link list.

## Country visual systems

Every new country must introduce a visual system that feels specific to that destination. Define a country-level palette, type rhythm, geometry, image treatment and editorial motifs before expanding its cities. Recoloring or reordering the same generic page template is not enough.

The header, sidebar, footer, search, accessibility behavior and advertising shell remain shared. Country hubs, city hubs and area guides may share design tokens, but their content hierarchy and principal layouts should express different planning problems. Within one country, individual area pages must also vary their reading rhythm—for example a route diagram, field notebook, timetable, market ledger or neighborhood zine—rather than repeating identical card stacks.

Thailand establishes the first explicit country system: lacquer red and midnight ink for formal and night layers, temple gold for hierarchy, river jade for movement, warm paper surfaces for editorial sections, arched frames for sacred thresholds and diagram-led layouts for Bangkok transit. Its eight Bangkok areas deliberately use eight different structures: palace threshold, street zine, neon menu, interchange diagram, last-train corridor, day/night ledger, waterline notes and weekend market clock.

Northern Thailand extends that system without cloning Bangkok. The Chiang Mai cluster uses an indigo, teak, saffron, moss and rice-paper Lanna layer with woven borders and manuscript-like pacing. Its eight chapters are a square moat manuscript, contemporary west-side magazine, elevation ledger, market textile, river letter, botanical field cabinet, rain-and-capacity notes and summit weather instrument. Future Thai cities should inherit shared Thai identity while creating a place-specific subtheme and genuinely different planning structures.

Southern Thailand's Andaman cluster adds a chart-room system without cloning Bangkok or Chiang Mai: limestone ink, deep harbor blue, sea-glass turquoise, coral signal orange, monsoon slate and warm sand. Its hub is an archipelago plotting table, while the eight chapters use a Phuket port ledger, Phang Nga tide manifest, Krabi karst profile, Phi Phi landing clock, Ko Lanta island spine, Trang ferry constellation, Ko Lipe southern compass and Similan–Surin expedition board. Marine forecast, park access, named piers and land-side departure buffers are structural content, not disclaimers appended after the itinerary.

Central Thailand's Ayutthaya cluster uses a river-archaeology system rather than a generic heritage skin: kiln brick red, aged gold leaf, river teal, archive paper and charcoal ground. Its hub is a three-river confluence atlas. The eight chapters become an arrival signal board, excavated strata, royal ground plan, shade clock, sunset aperture, etiquette threshold, cargo manifest and palace garden cabinet. River bank, surviving evidence, living worship, conservation and the return journey are part of the page structure rather than footnotes beneath a list of ruins.

China introduces a lacquer-and-ink editorial system rather than borrowing the Thai or Korean shells: imperial lacquer red, aged gold, jade, ink blue-black and warm xuan-paper surfaces, with measured rules, seal-like labels and deliberate negative space. The country hub is a regional route scroll that asks travelers to choose a geographic argument before counting cities. Beijing turns the Central Axis into its city ruler, then gives its eight chapters genuinely different structures: a Palace Museum reservation docket, Jingshan elevation ledger, Temple of Heaven circle-and-square diagram, Shichahai civic clock, Yonghe threshold notebook, 798 exhibition poster, Summer Palace garden scroll and Mutianyu ridge action board. Future Chinese cities should inherit the palette and editorial discipline while defining a city-specific spatial system of their own.

Shanghai extends the China system through a Huangpu fold rather than another imperial-axis layout. Port navy, river teal, signal coral, brass and misted paper divide Puxi and Pudong while keeping the lacquer-and-ink editorial discipline. The city hub behaves like an asymmetric river spread. Its eight chapters are a Bund facade catalogue, Lujiazui visibility meter, Yuyuan nested-gate diagram, Wukang Road walk score, two-campus museum curator board, Hongkou civic timeline, West Bund reuse strip and Zhujiajiao water-town clock. Future China clusters must find an equally place-specific spatial argument instead of recoloring either Beijing or Shanghai.

Hangzhou extends the China system through a West Lake compass and celadon field guide. Lake jade, lotus red, tea green, warm rice paper and soft gold express water, cultivation and Southern Song memory without abandoning China's ink discipline. The hub orients visitors by shore and landscape layer. Its eight chapters use a north-shore causeway sequence, south-shore sunset aperture, Lingyin threshold progression, Longjing tea contours, Grand Canal cargo manifest, Hefang shopfront street, Xixi wetland channels and Liangzhu archaeological strata. Future pages in the cluster should preserve this water-and-contour logic while giving each planning problem its own principal instrument.

China's southern and coastal expansion is a set of complete, multi-chapter destination guides rather than a recolored city template. Guangzhou uses a Pearl River banquet table; Shenzhen a border-and-design grid; Xiamen and the Fujian Tulou concentric settlement rings; Sanya and Hainan a monsoon tide sheet; Guilin and Yangshuo a vertical karst scroll; Changsha an evening newspaper; and Wuhan a three-town confluence map. Each system changes hierarchy, geometry, card rhythm and image treatment while keeping the shared accessibility and advertising shell.

The southwest, Silk Road and plateau expansion continues that rule. Chengdu is a teahouse ledger, Chongqing a stacked vertical-city section, Kunming a botanical plateau calendar, Dali a lake-horizon register, Lijiang and Shangri-La connected water lanes, Zhangjiajie a sandstone-pillar profile, Guiyang and Guizhou a rain field cabinet, Dunhuang a manuscript strip, Xinjiang a continental corridor atlas, and Lhasa a staged altitude ascent. These 17 routes are substantive single-page planning guides with eight internal chapters, not thin area-page placeholders. Future expansion may promote a chapter into its own URL only when it can support an independently useful decision guide and a distinct visual instrument.

The north and central plains expansion adds six more independent instruments. Datong is a cut-stone cave register; Pingyao a merchant ledger enclosed by a continuous wall; Luoyang a layered dynastic palimpsest; Xi'an an archaeology accession grid; Harbin a winter lightbox whose permanent city story remains useful outside festival dates; and Hohhot with Inner Mongolia a panoramic steppe horizon that makes regional distance, ecology and consent visible. The shared generator supplies structural quality controls, but `china-north-plains.css` deliberately changes hero composition, chapter rhythm, typography, image treatment and route geometry on every one of the six pages.

## Published guide clusters

- Country hubs: `/china/`, `/japan/`, `/south-korea/` and `/thailand/`
- China city clusters: `/china/beijing/`, `/china/shanghai/` and `/china/hangzhou/`
- Complete China destination guides: `/china/datong/`, `/china/pingyao/`, `/china/luoyang/`, `/china/xian/`, `/china/harbin/`, `/china/hohhot-inner-mongolia/`, `/china/guangzhou/`, `/china/shenzhen/`, `/china/xiamen-fujian-tulou/`, `/china/sanya-hainan/`, `/china/guilin-yangshuo/`, `/china/changsha/`, `/china/wuhan/`, `/china/chengdu/`, `/china/chongqing/`, `/china/kunming/`, `/china/dali/`, `/china/lijiang-shangri-la/`, `/china/zhangjiajie/`, `/china/guiyang-guizhou/`, `/china/dunhuang-hexi-corridor/`, `/china/xinjiang-corridor/` and `/china/lhasa-tibetan-plateau/`
- Beijing chapters: Central Axis & Forbidden City; Jingshan & Beihai; Temple of Heaven & Qianmen; Shichahai & Drum Tower; Yonghe & Guozijian; 798 & Chaoyang; Summer Palace; and Mutianyu Great Wall
- Shanghai chapters: The Bund & Huangpu; Lujiazui & Pudong; Yuyuan & Old City; Wukang Road & Xuhui; People's Square & Museums; Hongkou & Suzhou Creek; West Bund & Longhua; and Zhujiajiao Water Town
- Hangzhou chapters: North West Lake & Broken Bridge; South West Lake & Leifeng; Lingyin & Feilai Peak; Longjing & Nine Creeks; Grand Canal & Gongchen Bridge; Hefang & Southern Song; Xixi Wetland; and Liangzhu Archaeological City
- City and regional hubs: `/japan/tokyo/`, `/japan/kyoto/`, `/japan/osaka/` and `/japan/hokkaido/`
- Hokkaido regional guides: Sapporo; Otaru & Shakotan; Hakodate & Onuma; Furano & Biei; Asahikawa & Daisetsuzan; Niseko & Yoichi; Noboribetsu & Lake Toya; Kushiro & Lake Akan; and Abashiri & Shiretoko
- Tokyo area guides: Shinjuku; Shibuya & Harajuku; Asakusa & Ueno; Tokyo Station & Ginza; Akihabara & Kanda; Roppongi & Azabu; Odaiba & Toyosu; and Ikebukuro
- Kyoto area guides: Gion & Pontocho; Kiyomizudera & Southern Higashiyama; Arashiyama & Sagano; Fushimi Inari & Sake District; Central Kyoto & Nishiki; Kyoto Station & South; Kinkakuji & Northwest; and Philosopher's Path & Okazaki
- Osaka area guides: Namba, Umeda, Tennoji & Shinsekai, Osaka Castle Area, and Osaka Bay & USJ
- South Korea city and island hubs: `/south-korea/seoul/`, `/south-korea/busan/` and `/south-korea/jeju/`
- Seoul area guides: Jongno & Gwanghwamun; Bukchon & Seochon; Myeongdong & Namsan; Hongdae & Yeonnam; Gangnam & Jamsil; Itaewon & Hannam; Seongsu & Seoul Forest; and Yeouido & Hangang
- Busan area guides: Nampo & Jagalchi; Gamcheon & Songdo; Haeundae & Dongbaek; Gwangalli & Millak; Seomyeon & Jeonpo; Yeongdo & Taejongdae; Haedong Yonggungsa & Gijang; and Dadaepo & Amisan
- Jeju area guides: Jeju City & Yongduam; Aewol & Hyeopjae; Hallasan; Seogwipo & Jeongbang; Jungmun & Andeok; Moseulpo & Gapado; Seongsan & Udo; and Woljeongri & Gimnyeong
- Thailand city and regional hubs: `/thailand/bangkok/`, `/thailand/chiang-mai/`, `/thailand/andaman/` and `/thailand/ayutthaya/`
- Bangkok area guides: Rattanakosin & Grand Palace; Banglamphu & Phra Athit; Yaowarat & Talat Noi; Siam & Ratchaprasong; Sukhumvit & Thong Lo; Silom & Sathorn; Thonburi & Khlong Bang Luang; and Chatuchak & Ari
- Chiang Mai chapters: Old City & Moat; Nimman & University; Doi Suthep & Wat Pha Lat; Chang Moi & Warorot; Wat Ket & Ping River; Mae Rim & Mae Sa; Mae Kampong; and Doi Inthanon
- Andaman chapters: Phuket Old Town & South; Phang Nga & Ko Yao; Krabi & Railay; Phi Phi Islands; Ko Lanta; Trang Islands; Ko Lipe & Tarutao; and Similan & Surin
- Ayutthaya chapters: Railway Station & Chao Phrom; Wat Mahathat & Wat Ratchaburana; Palace Quarter & Wat Phra Si Sanphet; West Island & Wat Lokayasutharam; Wat Chaiwatthanaram & West Bank; Wat Yai Chai Mongkhon & Wat Phanan Choeng; Foreign Settlements & South River; and Bang Pa-In Palace

Area pages are full decision guides rather than thin location summaries. Each page covers orientation, transport, practical trade-offs, a route, FAQs, official references and image attribution. Busan uses a market ledger, elevation transect, coastal clock, event-status poster, city zine, field guide, sunrise notes and estuary notebook. Jeju adds an airport board, stop-token coast, summit gate, water newspaper, geology report, ferry manifest, two-clock control room and material library so the clusters do not become interchangeable templates.

## Expanding the site

1. Create a country page at `/country/index.html`.
2. Create city pages at `/country/city/index.html`.
3. Add published pages to `data/search-index.json`, `sitemap.xml` and the shared navigation where appropriate. Give every new route an ISO `YYYY-MM-DD` sitemap `<lastmod>`, and update `<lastmod>` for every materially changed route during each iteration; never bump unchanged routes merely to make the sitemap look fresh.
4. Include a review date, official information sources and photo attribution on every destination page.
5. Use Luna Max to translate every new source key into `zh-Hant`, `ja`, `ko` and `th`, review the catalogs, then run `npm run localize` so route, search and navigation parity stay exact across all five editions.
6. Do not publish empty city placeholders; only link pages with substantive content.

## Advertising

`js/adsense.js` loads publisher `ca-pub-1732059148394592` once per document. Empty `data-ad-slot` containers remain visual placeholders. Add a numeric AdSense unit ID to a container only after that unit is created in AdSense.
