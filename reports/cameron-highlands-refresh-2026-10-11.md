# Cameron Highlands four-page refresh — 11 October 2026

## Scope and route choice

This bounded source batch starts from `d1302f2f94a5f437ab0d31ffe5f2d22d73d0e8bc` on `codex/integration-sprint-20261011` and is isolated on `codex/sprint-my-01-20261012`. The four existing English routes are:

- `/malaysia/cameron-highlands/`
- `/malaysia/cameron-highlands/tanah-rata-trails/`
- `/malaysia/cameron-highlands/brinchang-kea-farm/`
- `/malaysia/cameron-highlands/mossy-forest-gunung-brinchang/`

George Town and its focus routes were considered first. The hub, Armenian Street, Weld Quay and Penang Hill bodies had substantive route revisions in commit `16f5f151f86c6524dca835522cb641329ee3ef82` on 8 October; selecting that set would repeat a just-completed pass. Cameron Highlands and its three selected guides last received substantive cluster content in the 30 August Malaysia batch. The existing Ringlet & Bertam Valley child was left unchanged.

The source-level hierarchy comparison uses [/japan/hokkaido/](/japan/hokkaido/) for a regional hub's base, arrival, season and day-shape decisions, and [/japan/tokyo/asakusa-ueno/](/japan/tokyo/asakusa-ueno/) for a local guide's named route, station/last-mile distinction, walk scope and fallback. No rendered comparison is claimed because the delegated task prohibits browser, headless, CDP and server use.

The repository has no `.agents/skills/` directory or project-local `SKILL.md`; the repository instructions in `AGENTS.md` and `README.md` were followed.

## Editorial changes

The Cameron hub now distinguishes the bus-friendly Tanah Rata service core from Brinchang's shorter northern-farm transfer, with concrete lodging checks for exact map pin, slope, lighting, parking, road noise and evening walking. It connects coach arrival at Tanah Rata with the separate KTM ETS plus onward road leg from Ipoh or Tapah Road; it tells travelers to verify the current operator, terminal and transfer rather than treat old journey estimates as schedules. The three-day structure groups one northern outing and preserves a return buffer.

Compared with the exact base commit, the four English `main#main-content` bodies add a net 1,767 rendered-text words: the hub +810, Tanah Rata +304, Brinchang/Kea Farm +329 and Mossy Forest/Gunung Brinchang +324. This tokenizer count includes existing headings, cards, labels and source-credit text; it is a scoped delta, not an editorial quality measure.

The hub states Tourism Pahang's March–September / October–February pattern only as statewide context, not as a Cameron weather guarantee, and directs readers to select Cameron Highlands in METMalaysia's district forecast. Each child applies that forecast check to its own rain, fog, wet footing, road and holiday constraints rather than promising a dry season or a clear trail.

Tanah Rata now directs visitors to verify the exact Parit Falls Eco-Forest Park gate, current status and return transport. It does not turn old trail numbers or an assumed town connection into an open walking route. Brinchang & Kea Farm names BOH Sungei Palas as a specific visitor stop and gives its published hours with a precise reservation caveat. Mossy Forest & Gunung Brinchang says directly that a current permit, online booking channel, vehicle restriction and boardwalk status were not established in the available official material; travelers are told to ask Pahang Forestry before paying and to skip the excursion if access and return cannot be confirmed.

## Official source checks and open questions

- [BOH Sungei Palas Tea Garden](https://bohtea.com/visit-our-tea-gardens/sungei-palas-tea-garden/) was checked on 11 October 2026. BOH lists Tuesday–Sunday 08:30–16:30, closure on Monday except school/public holidays, and factory tours as open. It asks visitors to email for tea-tasting information. The page does not publish an entry price, timed tasting slot or general online booking channel; none is promised in the copy.
- [BOH's Cameron Highlands transport overview](https://bohtea.com/published-articles/getting-to-and-around-cameron-highlands/) identifies bus connections from Kuala Lumpur TBS and Ipoh, the absence of a direct train to Cameron Highlands, ETS-to-road transfer options, Tanah Rata as the main bus terminal, limited e-hailing, and the route-character distinction between Tapah Route 59 and Simpang Pulai Route 185. Its estimated journey durations are not presented as current timetables; the copy sends readers to the current operator and advises separate transfer planning.
- [Tourism Pahang's weather page](https://www.pahangtourism.org.my/travel-info/travellers-essentials/weather), last dated 10 October 2024, gives a broad state pattern of March–September generally drier and October–February rainier, and highland temperatures of 15–25°C. The copy explicitly limits these as statewide context. [METMalaysia district forecasts](https://www.met.gov.my/en/forecast/weather/district/) provide the date-specific check.
- Pahang Forestry's official pages list Mossy Forest and Parit Falls as Cameron Highlands Eco-Forest Parks. Direct access to the detail pages returned HTTP 403 in the web review, so current entry, permits, booking, vehicle limits and boardwalk status remain unknown. The page links [the department's official Eco-Forest Parks listing](https://forestry.pahang.gov.my/index.php/en/pengusaha-taman-eko-rimba) and [contact form](https://forestry.pahang.gov.my/index.php/en/hubungi-kami/borang-aduan) and does not infer terms from old operator pages.
- No bus timetable, fare, BOH admission price, Mossy Forest permit status or fixed journey time is included as an assured current fact.

## Photo review

The two existing local WebP assets were opened at full resolution and visually checked against their exact Commons file pages. They remain in place; no image file was downloaded, replaced or modified. Commons author/license declarations were checked on 11 October 2026 and the exact linked license/version is included in the visible credits. This records source-page declarations, not independent rights-chain clearance.

| Local asset | Exact Commons source, creator and date | Declared license | Observed pixels |
| --- | --- | --- | --- |
| `/assets/images/malaysia-cameron-highlands.webp` | [Cameron Bharat tea landscape](https://commons.wikimedia.org/wiki/File:Cameron_Bharat_Tea_Plantation,_Cameron_Highlands,_Malaysia,_20250829_1535_4120.jpg) — Jakub Hałun, 29 August 2025; source 5,439 × 3,631 | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | Tea rows cross planted slopes; a pale service road occupies the foreground and cloud hangs over a forest ridge. |
| `/assets/images/malaysia-cameron-mossy-forest.webp` | [Big Mossy Tree at Mossy Forest](https://commons.wikimedia.org/wiki/File:Big_Mossy_Tree_at_Mossy_Forest,_Cameron_Highlands.jpg) — Pro QueeNia, 15 October 2019; source 2,448 × 3,264 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | Large moss-covered trunk and dense epiphytes rise above the visible boardwalk rail; the visible credit keeps the exact same-version share-alike term. |

## Files and verification

English copy is edited in `data/malaysia-depth-guides.mjs` and the existing hub source; the bounded generator mode writes only these three child routes, the Cameron hub cards and the related English search records. The source records this four-route delta and the visually inspected image evidence. The five-language route/date regression is `scripts/test-malaysia-cameron-route-dates.mjs`.

Desktop/mobile, keyboard, measured overflow and interaction review remain for the parent workspace's formal cloud-browser review. No browser, server, deployment, integration branch or production page was touched. This record is not user editorial acceptance or deployment approval.
