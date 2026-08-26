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

The site uses directory URLs such as `/japan/`, `/south-korea/seoul/` and `/south-korea/seoul/bukchon-seochon/`. Shared navigation is loaded from `/components/` with browser-side JavaScript. All SEO body content remains in each page's HTML.

## Published guide clusters

- Country hubs: `/japan/` and `/south-korea/`
- City and regional hubs: `/japan/tokyo/`, `/japan/kyoto/`, `/japan/osaka/` and `/japan/hokkaido/`
- Hokkaido regional guides: Sapporo; Otaru & Shakotan; Hakodate & Onuma; Furano & Biei; Asahikawa & Daisetsuzan; Niseko & Yoichi; Noboribetsu & Lake Toya; Kushiro & Lake Akan; and Abashiri & Shiretoko
- Tokyo area guides: Shinjuku; Shibuya & Harajuku; Asakusa & Ueno; Tokyo Station & Ginza; Akihabara & Kanda; Roppongi & Azabu; Odaiba & Toyosu; and Ikebukuro
- Kyoto area guides: Gion & Pontocho; Kiyomizudera & Southern Higashiyama; Arashiyama & Sagano; Fushimi Inari & Sake District; Central Kyoto & Nishiki; Kyoto Station & South; Kinkakuji & Northwest; and Philosopher's Path & Okazaki
- Osaka area guides: Namba, Umeda, Tennoji & Shinsekai, Osaka Castle Area, and Osaka Bay & USJ
- South Korea city and island hubs: `/south-korea/seoul/`, `/south-korea/busan/` and `/south-korea/jeju/`
- Seoul area guides: Jongno & Gwanghwamun; Bukchon & Seochon; Myeongdong & Namsan; Hongdae & Yeonnam; Gangnam & Jamsil; Itaewon & Hannam; Seongsu & Seoul Forest; and Yeouido & Hangang
- Busan area guides: Nampo & Jagalchi; Gamcheon & Songdo; Haeundae & Dongbaek; Gwangalli & Millak; Seomyeon & Jeonpo; Yeongdo & Taejongdae; Haedong Yonggungsa & Gijang; and Dadaepo & Amisan
- Jeju area guides: Jeju City & Yongduam; Aewol & Hyeopjae; Hallasan; Seogwipo & Jeongbang; Jungmun & Andeok; Moseulpo & Gapado; Seongsan & Udo; and Woljeongri & Gimnyeong

Area pages are full decision guides rather than thin location summaries. Each page covers orientation, transport, practical trade-offs, a route, FAQs, official references and image attribution. Busan uses a market ledger, elevation transect, coastal clock, event-status poster, city zine, field guide, sunrise notes and estuary notebook. Jeju adds an airport board, stop-token coast, summit gate, water newspaper, geology report, ferry manifest, two-clock control room and material library so the clusters do not become interchangeable templates.

## Expanding the site

1. Create a country page at `/country/index.html`.
2. Create city pages at `/country/city/index.html`.
3. Add published pages to `data/search-index.json`, `sitemap.xml` and the shared navigation where appropriate.
4. Include a review date, official information sources and photo attribution on every destination page.
5. Do not publish empty city placeholders; only link pages with substantive content.

## Advertising

`js/adsense.js` loads publisher `ca-pub-1732059148394592` once per document. Empty `data-ad-slot` containers remain visual placeholders. Add a numeric AdSense unit ID to a container only after that unit is created in AdSense.
