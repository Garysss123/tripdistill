# TripDistill

TripDistill is a static, English-first travel guide site for `tripdistill.com`.

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

The site uses directory URLs such as `/japan/`, `/south-korea/seoul/` and `/thailand/bangkok/yaowarat-talat-noi/`. Shared navigation is loaded from `/components/` with browser-side JavaScript. All SEO body content remains in each page's HTML.

## Country visual systems

Every new country must introduce a visual system that feels specific to that destination. Define a country-level palette, type rhythm, geometry, image treatment and editorial motifs before expanding its cities. Recoloring or reordering the same generic page template is not enough.

The header, sidebar, footer, search, accessibility behavior and advertising shell remain shared. Country hubs, city hubs and area guides may share design tokens, but their content hierarchy and principal layouts should express different planning problems. Within one country, individual area pages must also vary their reading rhythm—for example a route diagram, field notebook, timetable, market ledger or neighborhood zine—rather than repeating identical card stacks.

Thailand establishes the first explicit country system: lacquer red and midnight ink for formal and night layers, temple gold for hierarchy, river jade for movement, warm paper surfaces for editorial sections, arched frames for sacred thresholds and diagram-led layouts for Bangkok transit. Its eight Bangkok areas deliberately use eight different structures: palace threshold, street zine, neon menu, interchange diagram, last-train corridor, day/night ledger, waterline notes and weekend market clock.

Northern Thailand extends that system without cloning Bangkok. The Chiang Mai cluster uses an indigo, teak, saffron, moss and rice-paper Lanna layer with woven borders and manuscript-like pacing. Its eight chapters are a square moat manuscript, contemporary west-side magazine, elevation ledger, market textile, river letter, botanical field cabinet, rain-and-capacity notes and summit weather instrument. Future Thai cities should inherit shared Thai identity while creating a place-specific subtheme and genuinely different planning structures.

Southern Thailand's Andaman cluster adds a chart-room system without cloning Bangkok or Chiang Mai: limestone ink, deep harbor blue, sea-glass turquoise, coral signal orange, monsoon slate and warm sand. Its hub is an archipelago plotting table, while the eight chapters use a Phuket port ledger, Phang Nga tide manifest, Krabi karst profile, Phi Phi landing clock, Ko Lanta island spine, Trang ferry constellation, Ko Lipe southern compass and Similan–Surin expedition board. Marine forecast, park access, named piers and land-side departure buffers are structural content, not disclaimers appended after the itinerary.

Central Thailand's Ayutthaya cluster uses a river-archaeology system rather than a generic heritage skin: kiln brick red, aged gold leaf, river teal, archive paper and charcoal ground. Its hub is a three-river confluence atlas. The eight chapters become an arrival signal board, excavated strata, royal ground plan, shade clock, sunset aperture, etiquette threshold, cargo manifest and palace garden cabinet. River bank, surviving evidence, living worship, conservation and the return journey are part of the page structure rather than footnotes beneath a list of ruins.

China introduces a lacquer-and-ink editorial system rather than borrowing the Thai or Korean shells: imperial lacquer red, aged gold, jade, ink blue-black and warm xuan-paper surfaces, with measured rules, seal-like labels and deliberate negative space. The country hub is a regional route scroll that asks travelers to choose a geographic argument before counting cities. Beijing turns the Central Axis into its city ruler, then gives its eight chapters genuinely different structures: a Palace Museum reservation docket, Jingshan elevation ledger, Temple of Heaven circle-and-square diagram, Shichahai civic clock, Yonghe threshold notebook, 798 exhibition poster, Summer Palace garden scroll and Mutianyu ridge action board. Future Chinese cities should inherit the palette and editorial discipline while defining a city-specific spatial system of their own.

## Published guide clusters

- Country hubs: `/china/`, `/japan/`, `/south-korea/` and `/thailand/`
- China city hubs: `/china/beijing/`
- Beijing chapters: Central Axis & Forbidden City; Jingshan & Beihai; Temple of Heaven & Qianmen; Shichahai & Drum Tower; Yonghe & Guozijian; 798 & Chaoyang; Summer Palace; and Mutianyu Great Wall
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
5. Do not publish empty city placeholders; only link pages with substantive content.

## Advertising

`js/adsense.js` loads publisher `ca-pub-1732059148394592` once per document. Empty `data-ad-slot` containers remain visual placeholders. Add a numeric AdSense unit ID to a container only after that unit is created in AdSense.
