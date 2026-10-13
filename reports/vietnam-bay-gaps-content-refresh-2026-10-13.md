# Vietnam bay and island gaps — 13 October 2026

## Branch and scope

This source-only branch, `codex/sprint-vn-bay-gaps-20261013`, starts at exact base `d779848fbc247042561cfaa34773257122aa38d0`. It changes four existing child guides only:

- [Ba Ho Waterfalls](/vietnam/nha-trang-khanh-hoa/ba-ho-waterfalls/)
- [Cam Ranh and Bai Dai](/vietnam/nha-trang-khanh-hoa/cam-ranh-bai-dai/)
- [Nha Trang Bay conservation transfer](/vietnam/nha-trang-khanh-hoa/nha-trang-bay-conservation-transfer/)
- [Côn Đảo National Park](/vietnam/phu-quoc-southern-islands/con-dao-national-park/)

Parse5-visible `#main-content` grew by 3,036 words against that exact base: Ba Ho +792, Cam Ranh/Bai Dai +802, Nha Trang Bay +447 and Côn Đảo +995. The new regression checks only these four route bodies, search records and their five-edition date metadata. It also checks canonical and hreflang paths, translation/search agreement, archive hashes, and the unchanged 4,560-URL sitemap set.

## Practical route decisions added

- **Ba Ho:** compares two, three and four nights on one central Nha Trang base. The plan separates the northbound road day from island boating, names the round-trip driver handoff, describes the stream-pool order and gives a lower-pool/city-day fallback. Thunder, rising or cloudy water, wet footing and fading daylight are turn-back conditions.
- **Cam Ranh/Bai Dai:** helps choose a one-, two- or three-night base in central Nha Trang or at a named, confirmed Bai Dai accommodation. It separates airport and rail pickups, checks late arrival, meals and the return ride, and sends travelers back to a central base when beach access or onward transport is uncertain.
- **Nha Trang Bay:** keeps the hotel in central Nha Trang and treats a boat day as a separate weather-dependent outing. Before paying, the guide asks travelers to verify the exact operator, permission, pier, zone, boat, cancellation terms and forecast. If access is unresolved, it keeps the day on a non-swimming waterfront or a confirmed city visit.
- **Côn Đảo:** treats the archipelago as a separate three-, four- or five-plus-night trip, with a main-island base and arrival/recovery buffer. Park activity and island landings require current registration and permission; no private landing is suggested as a substitute. A delayed crossing moves the nature outing, not the flight/ferry buffer.

## Sources and limits

Official references linked from the guides:

- [Ninh Hòa government: Ba Ho Ecotourism Area](https://ninhhoa.khanhhoa.gov.vn/vi/diem-den-du-lich-36/khu-du-lich-sinh-thai-ba-ho) supports the location and stream/trail description. It does not establish current hours, fees, trail opening, transport or swimming status.
- [Khanh Hòa Digital Travel Platform: Nha Trang Bay](https://dulichso.khanhhoa.gov.vn/en/article/nha-trang-bay-13c) and the [National Biodiversity Conservation Agency: Nha Trang Bay Nature Reserve](https://nbca.gov.vn/khu-du-tru-thien-nhien-vinh-nha-trang-khanh-hoa/) provide context, not visitor permission, current operators or boat times.
- [Vietnam Tourism: Nha Trang](https://vietnam.travel/node/220) gives general city and airport context; it does not prove a Bai Dai shuttle or current beach access.
- [National Center for Hydro-Meteorological Forecasting](https://www.nchmf.gov.vn/kttv/) is the forecast handoff. It does not replace same-day local water, flag, park or operator instructions.
- [Côn Đảo National Park](https://www.condaopark.com.vn/en/) lists a Bay Canh night turtle program with a stated one-day/one-night duration. That listing does not confirm date availability, price or an individual booking.
- [Côn Đảo National Park protection regulations](https://www.condaopark.com.vn/en/protection-regilations.html) state that consent is required for activity in forest and sea areas.

The park’s specific [Bay Canh turtle-tour detail page](https://www.condaopark.com.vn/en/tour/detail/tour-to-see-turtles-laying-eggs-at-night-at-bay-canh-island-29.html) failed to load during review. It was not retried or bypassed. Current operator, availability, fees, permissions, transport timetables, beach access and weather-dependent conditions remain explicitly for travelers to confirm with the responsible authority or accommodation.

## Translation and stale-key trace

Traditional Chinese, Japanese, Korean and Thai page/search batches contain manually written target-language copy. The available execution runtime did not provide the repository’s requested selectable Luna Max translation model, so the same GPT-6 Codex session drafted and self-reviewed these translations. No independent second-model or human review is claimed; the provenance is stored in each batch.

Removed obsolete localization owners only after comparing keys with active source work. The archive at `data/i18n/archive/vietnam-bay-gaps/2026-10-13/` preserves 16 exact-base batch snapshots with SHA-256 records: 60 unique obsolete source keys and 240 owner entries, including the 12-entry follow-up cleanup after the Ba Ho wording became “Three stream pools inland.” The preceding 87/99 coverage ledger remains unchanged; this branch’s own ledger is [`vietnam-bay-gaps-coverage-ledger-2026-10-13.json`](vietnam-bay-gaps-coverage-ledger-2026-10-13.json).

## Verification

`npm run audit` passed, including the full site audit: 4,560 published routes (912 per edition), 955 search records per language and 4,560 unique localized titles. `npm run build` passed with 5,497 output files and verified all 4,560 sitemap routes. The bay-gaps scope regression reports 91/99 substantive Vietnam routes (87 at this branch’s base plus these four), leaving the eight routes in the coverage ledger; this count excludes unrelated parallel work. No main integration, deployment, browser/headless/CDP check, local server or visual UI acceptance was performed.
