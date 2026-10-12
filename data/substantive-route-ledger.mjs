// Auditable route-level coverage ledger. Route existence and card excerpts do
// not count as substantive completion.
export const reportedSubstantiveBaseline = 458;
export const correctedSubstantiveBaseline = 457;

export const vietnamCompletedRoutes = Object.freeze([
  '/vietnam/hanoi/',
  '/vietnam/hanoi/ba-dinh-thang-long/',
  '/vietnam/hanoi/french-quarter-opera-house/',
  '/vietnam/hanoi/hoan-kiem-old-quarter/',
  '/vietnam/hanoi/long-bien-red-river/',
  '/vietnam/hanoi/van-mieu-museum-quarter/',
  '/vietnam/sapa-northwest-highlands/',
  '/vietnam/sapa-northwest-highlands/bac-ha-market-hoang-a-tuong/',
  '/vietnam/sapa-northwest-highlands/cat-cat-village/',
  '/vietnam/sapa-northwest-highlands/fansipan-summit/',
  '/vietnam/sapa-northwest-highlands/muong-hoa-lao-chai-ta-van/',
  '/vietnam/sapa-northwest-highlands/town-ham-rong/',
  '/vietnam/ha-giang/',
  '/vietnam/ha-giang/dong-van-old-quarter/',
  '/vietnam/ha-giang/lung-cu-flag-tower/',
  '/vietnam/ha-giang/ma-pi-leng-nho-que/',
  '/vietnam/ha-giang/quan-ba-heavens-gate/',
  '/vietnam/ha-giang/yen-minh-pine-forest/',
  '/vietnam/ninh-binh/',
  '/vietnam/ninh-binh/cuc-phuong-conservation/',
  '/vietnam/ninh-binh/hang-mua-dragon-mountain/',
  '/vietnam/ninh-binh/hoa-lu-ancient-capital/',
  '/vietnam/ninh-binh/tam-coc-bich-dong/',
  '/vietnam/ninh-binh/trang-an-boat-complex/',
  '/vietnam/ninh-binh/van-long-wetland/',
  '/vietnam/hue/',
  '/vietnam/hue/bach-ma-national-park/',
  '/vietnam/hue/imperial-city-citadel/',
  '/vietnam/hue/lang-co-lap-an-lagoon/',
  '/vietnam/hue/royal-tombs/',
  '/vietnam/hue/thanh-toan-rural-loop/',
  '/vietnam/hue/thien-mu-perfume-river/',
  '/vietnam/da-nang-hoi-an/',
  '/vietnam/da-nang-hoi-an/han-river-city-core/',
  '/vietnam/da-nang-hoi-an/hoi-an-ancient-town/',
  '/vietnam/da-nang-hoi-an/marble-mountains-non-nuoc/',
  '/vietnam/da-nang-hoi-an/my-khe-an-thuong/',
  '/vietnam/da-nang-hoi-an/my-son-sanctuary/',
  '/vietnam/da-nang-hoi-an/son-tra-peninsula/'
]);

export const vietnamExcludedRoutes = Object.freeze([
  '/vietnam/',
  '/vietnam/hanoi/west-lake-truc-bach/',
  '/vietnam/sapa-northwest-highlands/o-quy-ho-waterfalls/',
  '/vietnam/ha-giang/meo-vac-du-gia/'
]);

export const correctedCoverageCheckpoints = Object.freeze([
  Object.freeze({ label: 'CA13 + Gold Coast + CH14', count: 697 }),
  Object.freeze({ label: 'CA14', count: 701 }),
  Object.freeze({ label: 'Cairns', count: 703 }),
  Object.freeze({ label: 'CH15', count: 707 }),
  Object.freeze({ label: 'CA15', count: 711 }),
  Object.freeze({ label: 'AU Sydney/NSW + Brisbane/Gold Coast', count: 719 })
]);
