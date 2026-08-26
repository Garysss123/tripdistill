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

## Published guide clusters

- Country hubs: `/japan/`, `/south-korea/` and `/thailand/`
- City and regional hubs: `/japan/tokyo/`, `/japan/kyoto/`, `/japan/osaka/` and `/japan/hokkaido/`
- Hokkaido regional guides: Sapporo; Otaru & Shakotan; Hakodate & Onuma; Furano & Biei; Asahikawa & Daisetsuzan; Niseko & Yoichi; Noboribetsu & Lake Toya; Kushiro & Lake Akan; and Abashiri & Shiretoko
- Tokyo area guides: Shinjuku; Shibuya & Harajuku; Asakusa & Ueno; Tokyo Station & Ginza; Akihabara & Kanda; Roppongi & Azabu; Odaiba & Toyosu; and Ikebukuro
- Kyoto area guides: Gion & Pontocho; Kiyomizudera & Southern Higashiyama; Arashiyama & Sagano; Fushimi Inari & Sake District; Central Kyoto & Nishiki; Kyoto Station & South; Kinkakuji & Northwest; and Philosopher's Path & Okazaki
- Osaka area guides: Namba, Umeda, Tennoji & Shinsekai, Osaka Castle Area, and Osaka Bay & USJ
- South Korea city and island hubs: `/south-korea/seoul/`, `/south-korea/busan/` and `/south-korea/jeju/`
- Seoul area guides: Jongno & Gwanghwamun; Bukchon & Seochon; Myeongdong & Namsan; Hongdae & Yeonnam; Gangnam & Jamsil; Itaewon & Hannam; Seongsu & Seoul Forest; and Yeouido & Hangang
- Busan area guides: Nampo & Jagalchi; Gamcheon & Songdo; Haeundae & Dongbaek; Gwangalli & Millak; Seomyeon & Jeonpo; Yeongdo & Taejongdae; Haedong Yonggungsa & Gijang; and Dadaepo & Amisan
- Jeju area guides: Jeju City & Yongduam; Aewol & Hyeopjae; Hallasan; Seogwipo & Jeongbang; Jungmun & Andeok; Moseulpo & Gapado; Seongsan & Udo; and Woljeongri & Gimnyeong
- Thailand city hubs: `/thailand/bangkok/` and `/thailand/chiang-mai/`
- Bangkok area guides: Rattanakosin & Grand Palace; Banglamphu & Phra Athit; Yaowarat & Talat Noi; Siam & Ratchaprasong; Sukhumvit & Thong Lo; Silom & Sathorn; Thonburi & Khlong Bang Luang; and Chatuchak & Ari
- Chiang Mai chapters: Old City & Moat; Nimman & University; Doi Suthep & Wat Pha Lat; Chang Moi & Warorot; Wat Ket & Ping River; Mae Rim & Mae Sa; Mae Kampong; and Doi Inthanon

Area pages are full decision guides rather than thin location summaries. Each page covers orientation, transport, practical trade-offs, a route, FAQs, official references and image attribution. Busan uses a market ledger, elevation transect, coastal clock, event-status poster, city zine, field guide, sunrise notes and estuary notebook. Jeju adds an airport board, stop-token coast, summit gate, water newspaper, geology report, ferry manifest, two-clock control room and material library so the clusters do not become interchangeable templates.

## Expanding the site

1. Create a country page at `/country/index.html`.
2. Create city pages at `/country/city/index.html`.
3. Add published pages to `data/search-index.json`, `sitemap.xml` and the shared navigation where appropriate. Give every new route an ISO `YYYY-MM-DD` sitemap `<lastmod>`, and update `<lastmod>` for every materially changed route during each iteration; never bump unchanged routes merely to make the sitemap look fresh.
4. Include a review date, official information sources and photo attribution on every destination page.
5. Do not publish empty city placeholders; only link pages with substantive content.

## Advertising

`js/adsense.js` loads publisher `ca-pub-1732059148394592` once per document. Empty `data-ad-slot` containers remain visual placeholders. Add a numeric AdSense unit ID to a container only after that unit is created in AdSense.
