// Auditable route-level coverage ledger. Route existence and card excerpts do
// not count as substantive completion.
export const reportedSubstantiveBaseline = 458;
export const correctedSubstantiveBaseline = 457;

// The historical U.S. ledger contains these 25 paths. Hawaii and New Orleans
// are disjoint four-route follow-ons; none implies collection-wide approval.
export const usaPreviouslyCountedRoutes = Object.freeze([
  '/usa/alaska/',
  '/usa/alaska/anchorage-kenai/',
  '/usa/alaska/denali/',
  '/usa/sierra-parks/',
  '/usa/sierra-parks/sequoia-giant-forest/',
  '/usa/sierra-parks/kings-canyon/',
  '/usa/yellowstone-tetons/',
  '/usa/yellowstone-tetons/geyser-basins/',
  '/usa/yellowstone-tetons/canyon-lamar/',
  '/usa/yellowstone-tetons/grand-teton/',
  '/usa/utah-parks/',
  '/usa/utah-parks/bryce/',
  '/usa/utah-parks/moab-arches-canyonlands/',
  '/usa/miami/',
  '/usa/miami/everglades/',
  '/usa/orlando/',
  '/usa/orlando/kennedy-space-center/',
  '/usa/texas/',
  '/usa/texas/austin/',
  '/usa/texas/san-antonio/',
  '/usa/texas/houston/',
  '/usa/colorado/',
  '/usa/colorado/denver/',
  '/usa/colorado/rocky-mountain/',
  '/usa/colorado/mountain-towns/'
]);

export const usaHawaiiNewSubstantiveRoutes = Object.freeze([
  '/usa/hawaii/',
  '/usa/hawaii/oahu/',
  '/usa/hawaii/maui/',
  '/usa/hawaii/hawaii-island/'
]);

export const usaNewOrleansNewSubstantiveRoutes = Object.freeze([
  '/usa/new-orleans/',
  '/usa/new-orleans/french-quarter/',
  '/usa/new-orleans/garden-district/',
  '/usa/new-orleans/river-wetlands/'
]);

export const usaAtlantaNewSubstantiveRoutes = Object.freeze([
  '/usa/atlanta/',
  '/usa/atlanta/king-historic-district/',
  '/usa/atlanta/midtown-museums/',
  '/usa/atlanta/beltline/'
]);

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

// These four paths were excluded from the original 39-route history because
// their earlier edits were cards, credits or CTAs. The later Vietnam batches
// now provide separately evidenced substantive body improvements.
export const vietnamHistoricalExclusions = Object.freeze([
  '/vietnam/',
  '/vietnam/hanoi/west-lake-truc-bach/',
  '/vietnam/sapa-northwest-highlands/o-quy-ho-waterfalls/',
  '/vietnam/ha-giang/meo-vac-du-gia/'
]);

export const vietnamNewSubstantiveRoutes = Object.freeze([
  '/vietnam/ha-long-cat-ba/core-cruise/',
  '/vietnam/phong-nha-ke-bang/paradise-tien-son-caves/',
  '/vietnam/ho-chi-minh-city/saigon-river-waterbus/',
  '/vietnam/da-lat-central-highlands/da-lat-lake-railway-core/',
  '/vietnam/',
  '/vietnam/hanoi/west-lake-truc-bach/',
  '/vietnam/sapa-northwest-highlands/o-quy-ho-waterfalls/',
  '/vietnam/ha-giang/meo-vac-du-gia/'
]);

// The later Ha Long refresh updates four different existing bodies. The core
// cruise is already included above and must not be counted a second time.
export const vietnamHaLongNewSubstantiveRoutes = Object.freeze([
  '/vietnam/ha-long-cat-ba/',
  '/vietnam/ha-long-cat-ba/bai-tu-long/',
  '/vietnam/ha-long-cat-ba/lan-ha-town/',
  '/vietnam/ha-long-cat-ba/national-park/'
]);

// Canada reached its exact 73-path completion set in three late batches:
// Winnipeg, Whitehorse and Yellowknife. The Canada overview counts only after
// its non-card editorial text was materially refreshed in CA18.
export const canadaNewSubstantiveRoutes = Object.freeze([
  '/canada/winnipeg-churchill/',
  '/canada/winnipeg-churchill/forks-exchange/',
  '/canada/winnipeg-churchill/human-rights-assiniboine/',
  '/canada/winnipeg-churchill/churchill-hudson-bay/',
  '/canada/whitehorse-kluane/',
  '/canada/whitehorse-kluane/whitehorse-river/',
  '/canada/whitehorse-kluane/kluane-haines-junction/',
  '/canada/whitehorse-kluane/miles-canyon-aurora/',
  '/canada/',
  '/canada/yellowknife-great-slave/',
  '/canada/yellowknife-great-slave/old-town-great-slave/',
  '/canada/yellowknife-great-slave/aurora-dark-sky/',
  '/canada/yellowknife-great-slave/ingraham-trail/'
]);

export const completedCanadaRouteCount = 73;

// Eight existing Australian pages enter the substantive completion ledger in
// the Melbourne/Ocean and Adelaide/Perth refreshes; the four Top End/
// Whitsundays pages add a second follow-on set. None adds URLs.
export const australiaNewSubstantiveRoutes = Object.freeze([
  '/australia/melbourne-port-phillip/fitzroy-carlton-collingwood/',
  '/australia/melbourne-port-phillip/phillip-island/',
  '/australia/great-ocean-road-gariwerd/lorne-waterfalls/',
  '/australia/great-ocean-road-gariwerd/gariwerd-grampians/',
  '/australia/adelaide-wine-island/adelaide-hills-hahndorf/',
  '/australia/adelaide-wine-island/kangaroo-island/',
  '/australia/perth-fremantle-rottnest/kings-park/',
  '/australia/perth-fremantle-rottnest/cottesloe-scarborough/',
  '/australia/darwin-top-end/darwin-waterfront-city/',
  '/australia/darwin-top-end/katherine-nitmiluk/',
  '/australia/whitsundays-great-barrier-reef/',
  '/australia/whitsundays-great-barrier-reef/townsville-magnetic-island/'
]);

export const australiaCanberraNewSubstantiveRoutes = Object.freeze([
  '/australia/canberra-australian-alps/',
  '/australia/canberra-australian-alps/parliamentary-triangle/',
  '/australia/canberra-australian-alps/lake-burley-griffin-national-museum/',
  '/australia/canberra-australian-alps/war-memorial-mount-ainslie/'
]);

export const australiaAlpsMargaretNewSubstantiveRoutes = Object.freeze([
  '/australia/canberra-australian-alps/namadgi-national-park/',
  '/australia/canberra-australian-alps/snowy-mountains-kosciuszko/',
  '/australia/margaret-river-southwest/',
  '/australia/margaret-river-southwest/margaret-river-wine-food/'
]);

export const correctedCoverageCheckpoints = Object.freeze([
  Object.freeze({ label: 'CA13 + Gold Coast + CH14', count: 697 }),
  Object.freeze({ label: 'CA14', count: 701 }),
  Object.freeze({ label: 'Cairns', count: 703 }),
  Object.freeze({ label: 'CH15', count: 707 }),
  Object.freeze({ label: 'CA15', count: 711 }),
  Object.freeze({ label: 'AU Sydney/NSW + Brisbane/Gold Coast', count: 719 }),
  Object.freeze({ label: 'CA16 Winnipeg & Churchill', count: 723 }),
  Object.freeze({ label: 'CA17 Whitehorse & Kluane', count: 727 }),
  Object.freeze({ label: 'CA18 Yellowknife & Canada overview', count: 732 }),
  Object.freeze({ label: 'Melbourne & Great Ocean gap refresh', count: 736 }),
  Object.freeze({ label: 'Adelaide & Perth gap refresh', count: 740 }),
  Object.freeze({ label: 'Hawaii refresh', count: 744 }),
  Object.freeze({ label: 'Top End & Whitsundays gap refresh', count: 748 }),
  Object.freeze({ label: 'New Orleans refresh', count: 752 }),
  Object.freeze({ label: 'Switzerland CH16', count: 757 }),
  Object.freeze({ label: 'Vietnam content and north gaps', count: 765 }),
  Object.freeze({ label: 'Canberra & Australian Alps', count: 769 }),
  Object.freeze({ label: 'Atlanta', count: 773 }),
  Object.freeze({ label: 'Ha Long & Cat Ba', count: 777 }),
  Object.freeze({ label: 'Australian Alps & Margaret River', count: 781 })
]);
