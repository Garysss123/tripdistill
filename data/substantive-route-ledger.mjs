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

export const usaFloridaNewSubstantiveRoutes = Object.freeze([
  '/usa/miami/south-beach/',
  '/usa/miami/little-havana-wynwood/',
  '/usa/orlando/theme-parks/',
  '/usa/orlando/winter-park/'
]);

export const usaNewEnglandNewSubstantiveRoutes = Object.freeze([
  '/usa/new-england/',
  '/usa/new-england/portland-maine/',
  '/usa/new-england/acadia/',
  '/usa/new-england/white-mountains-vermont/'
]);

export const usaChicagoNewSubstantiveRoutes = Object.freeze([
  '/usa/chicago/',
  '/usa/chicago/loop-riverwalk/',
  '/usa/chicago/museum-lakefront/',
  '/usa/chicago/neighborhoods/'
]);

export const usaArizonaNewSubstantiveRoutes = Object.freeze([
  '/usa/arizona/',
  '/usa/arizona/phoenix-scottsdale/',
  '/usa/arizona/grand-canyon/',
  '/usa/arizona/sedona/'
]);

export const usaLosAngelesNewSubstantiveRoutes = Object.freeze([
  '/usa/los-angeles/',
  '/usa/los-angeles/downtown-arts/',
  '/usa/los-angeles/hollywood-griffith/',
  '/usa/los-angeles/santa-monica-venice/'
]);

export const usaBostonNewSubstantiveRoutes = Object.freeze([
  '/usa/boston/',
  '/usa/boston/freedom-trail/',
  '/usa/boston/cambridge-harvard/',
  '/usa/boston/harbor-islands/'
]);

// Historical route-body changes from the first New York sample were not
// recorded in the explicit path ledger. This corrects coverage accounting;
// it is not a new source-work batch or an approval of U.S. collection quality.
export const usaNewYorkHistoricalCoverageCorrectionRoutes = Object.freeze([
  '/usa/new-york/',
  '/usa/new-york/lower-manhattan/',
  '/usa/new-york/midtown-central-park/',
  '/usa/new-york/brooklyn-waterfront/'
]);

// These 26 existing routes had direct substantive body-rewrite evidence in
// historical source commits but were omitted from the original U.S. coverage
// arithmetic. They are an accounting correction, not work from this batch.
export const usaOtherHistoricalCoverageCorrectionRoutes = Object.freeze([
  '/usa/philadelphia/',
  '/usa/philadelphia/old-city/',
  '/usa/philadelphia/parkway-museums/',
  '/usa/philadelphia/reading-terminal/',
  '/usa/washington-dc/',
  '/usa/washington-dc/georgetown/',
  '/usa/washington-dc/national-mall/',
  '/usa/washington-dc/smithsonian/',
  '/usa/seattle/',
  '/usa/seattle/bainbridge/',
  '/usa/seattle/mount-rainier/',
  '/usa/seattle/pike-place-waterfront/',
  '/usa/portland-oregon/',
  '/usa/portland-oregon/columbia-gorge/',
  '/usa/portland-oregon/oregon-coast/',
  '/usa/portland-oregon/washington-park/',
  '/usa/san-francisco/',
  '/usa/san-francisco/golden-gate-presidio/',
  '/usa/san-francisco/mission-neighborhoods/',
  '/usa/san-francisco/waterfront-alcatraz/',
  '/usa/sierra-parks/yosemite-valley/',
  '/usa/las-vegas/',
  '/usa/las-vegas/downtown/',
  '/usa/las-vegas/red-rock/',
  '/usa/las-vegas/strip/',
  '/usa/utah-parks/zion/'
]);

// The overview and Juneau already had substantive source bodies before this
// dated follow-up. Keep these historical omissions separate from current work.
export const usaOverviewJuneauHistoricalCoverageCorrectionRoutes = Object.freeze([
  '/usa/',
  '/usa/alaska/juneau-southeast/'
]);

export const usaSanDiegoNewSubstantiveRoutes = Object.freeze([
  '/usa/san-diego/',
  '/usa/san-diego/balboa-park/',
  '/usa/san-diego/harbor-coronado/',
  '/usa/san-diego/la-jolla/'
]);

export const vietnamPhongNhaNewSubstantiveRoutes = Object.freeze([
  '/vietnam/phong-nha-ke-bang/',
  '/vietnam/phong-nha-ke-bang/chay-river-dark-cave/',
  '/vietnam/phong-nha-ke-bang/nuoc-mooc-forest-springs/',
  '/vietnam/phong-nha-ke-bang/son-river-phong-nha-cave/'
]);

export const australiaBroomeTasmaniaNewSubstantiveRoutes = Object.freeze([
  '/australia/broome-kimberley/kununurra-lake-argyle/',
  '/australia/broome-kimberley/purnululu-bungle-bungle/',
  '/australia/tasmania/',
  '/australia/tasmania/nipaluna-hobart-salamanca/'
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

export const vietnamHcmcNewSubstantiveRoutes = Object.freeze([
  '/vietnam/ho-chi-minh-city/',
  '/vietnam/ho-chi-minh-city/district-1-colonial-core/',
  '/vietnam/ho-chi-minh-city/cho-lon-binh-tay/',
  '/vietnam/ho-chi-minh-city/cu-chi-tunnels/'
]);

export const vietnamMekongNewSubstantiveRoutes = Object.freeze([
  '/vietnam/mekong-delta/',
  '/vietnam/mekong-delta/can-tho-cai-rang/',
  '/vietnam/mekong-delta/chau-doc-sam-tra-su/',
  '/vietnam/mekong-delta/ben-tre-coconut-islets/'
]);

export const vietnamDaLatNewSubstantiveRoutes = Object.freeze([
  '/vietnam/da-lat-central-highlands/',
  '/vietnam/da-lat-central-highlands/bidoup-nui-ba-national-park/',
  '/vietnam/da-lat-central-highlands/cau-dat-coffee-farms/',
  '/vietnam/da-lat-central-highlands/langbiang-kho-highlands/'
]);

export const vietnamMuiNeNewSubstantiveRoutes = Object.freeze([
  '/vietnam/mui-ne-binh-thuan/',
  '/vietnam/mui-ne-binh-thuan/bau-trang-white-dunes/',
  '/vietnam/mui-ne-binh-thuan/mui-ne-red-sand-dunes/',
  '/vietnam/mui-ne-binh-thuan/mui-ne-kiteboarding-coast/'
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

export const australiaMargaretRemainingNewSubstantiveRoutes = Object.freeze([
  '/australia/margaret-river-southwest/busselton-dunsborough/',
  '/australia/margaret-river-southwest/cape-naturaliste-coast/',
  '/australia/margaret-river-southwest/boranup-caves-augusta/',
  '/australia/margaret-river-southwest/albany-torndirrup/'
]);

export const australiaBroomeNewSubstantiveRoutes = Object.freeze([
  '/australia/broome-kimberley/',
  '/australia/broome-kimberley/rubibi-broome-cable-beach/',
  '/australia/broome-kimberley/dampier-peninsula/',
  '/australia/broome-kimberley/gibb-river-road/'
]);

export const australiaFinalContentNewSubstantiveRoutes = Object.freeze([
  '/australia/',
  '/australia/tasmania/cradle-freycinet/',
  '/australia/tasmania/kunanyi-mount-wellington/',
  '/australia/tasmania/launceston-tamar-valley/',
  '/australia/tasmania/port-arthur-tasman-peninsula/'
]);

export const vietnamPhuQuocNewSubstantiveRoutes = Object.freeze([
  '/vietnam/phu-quoc-southern-islands/',
  '/vietnam/phu-quoc-southern-islands/duong-dong-long-beach/',
  '/vietnam/phu-quoc-southern-islands/an-thoi-marine-park/',
  '/vietnam/phu-quoc-southern-islands/ham-ninh-fishing-village/'
]);

export const vietnamNhaTrangNewSubstantiveRoutes = Object.freeze([
  '/vietnam/nha-trang-khanh-hoa/',
  '/vietnam/nha-trang-khanh-hoa/nha-trang-city-beach/',
  '/vietnam/nha-trang-khanh-hoa/po-nagar-hon-chong/',
  '/vietnam/nha-trang-khanh-hoa/hon-mun-island-marine-route/'
]);

export const vietnamAfterNhaTrangNewSubstantiveRoutes = Object.freeze([
  '/vietnam/da-lat-central-highlands/buon-ma-thuot-dray-nur/',
  '/vietnam/da-lat-central-highlands/yok-don-buon-don/',
  '/vietnam/ha-long-cat-ba/sung-sot-titov/',
  '/vietnam/ha-long-cat-ba/viet-hai-cai-beo/'
]);

export const vietnamSouthernGapsNewSubstantiveRoutes = Object.freeze([
  '/vietnam/ho-chi-minh-city/can-gio-mangroves/',
  '/vietnam/ho-chi-minh-city/thu-thiem-thao-dien/',
  '/vietnam/mekong-delta/my-tho-thoi-son-island/',
  '/vietnam/mekong-delta/sa-dec-flower-literary-quarter/'
]);

export const vietnamBayGapsNewSubstantiveRoutes = Object.freeze([
  '/vietnam/nha-trang-khanh-hoa/ba-ho-waterfalls/',
  '/vietnam/nha-trang-khanh-hoa/cam-ranh-bai-dai/',
  '/vietnam/nha-trang-khanh-hoa/nha-trang-bay-conservation-transfer/',
  '/vietnam/phu-quoc-southern-islands/con-dao-national-park/'
]);

export const vietnamCavesIslandsGapsNewSubstantiveRoutes = Object.freeze([
  '/vietnam/phong-nha-ke-bang/hang-en-expedition/',
  '/vietnam/phong-nha-ke-bang/son-doong-expedition/',
  '/vietnam/phu-quoc-southern-islands/ganh-dau-bai-thom/',
  '/vietnam/phu-quoc-southern-islands/national-park-suoi-tranh/'
]);

export const vietnamCoastalGapsNewSubstantiveRoutes = Object.freeze([
  '/vietnam/mekong-delta/ca-mau-u-minh-ha-cape/',
  '/vietnam/mui-ne-binh-thuan/phan-thiet-poshanu-heritage/',
  '/vietnam/mui-ne-binh-thuan/phu-quy-island/',
  '/vietnam/mui-ne-binh-thuan/ta-cu-ke-ga-coast/'
]);

export const thailandCountryOverviewNewSubstantiveRoutes = Object.freeze([
  '/thailand/'
]);

export const spainNewSubstantiveRoutes = Object.freeze([
  '/spain/',
  '/spain/madrid/',
  '/spain/catalonia-barcelona/',
  '/spain/andalusia/',
  '/spain/basque-country/',
  '/spain/valencia/',
  '/spain/balearic-islands/',
  '/spain/canary-islands/',
  '/spain/galicia-asturias/',
  '/spain/madrid/royal-core-sol-to-palace/',
  '/spain/madrid/prado-retiro-art-to-park/',
  '/spain/madrid/toledo-rail-station-to-old-town/',
  '/spain/catalonia-barcelona/barcelona-ciutat-vella-waterfront/',
  '/spain/catalonia-barcelona/eixample-modernisme-sagrada-familia/',
  '/spain/catalonia-barcelona/girona-costa-brava-two-gateways/',
  '/spain/andalusia/seville-royal-core-santa-cruz/',
  '/spain/andalusia/cordoba-mosque-river-loop/',
  '/spain/andalusia/granada-alhambra-albaicin-approach/',
  '/spain/basque-country/bilbao-ria-guggenheim/',
  '/spain/basque-country/donostia-bay-old-town/',
  '/spain/basque-country/urdaibai-bermeo-rail-coast/',
  '/spain/valencia/valencia-old-town-central-market/',
  '/spain/valencia/turia-city-arts-coast/',
  '/spain/valencia/albufera-lagoon-el-palmar/',
  '/spain/balearic-islands/mallorca-palma-soller-tramuntana/',
  '/spain/balearic-islands/menorca-mao-ciutadella-coves/',
  '/spain/balearic-islands/ibiza-formentera-port-to-beach/',
  '/spain/canary-islands/tenerife-la-laguna-teide/',
  '/spain/canary-islands/gran-canaria-las-palmas-south/',
  '/spain/canary-islands/lanzarote-fuerteventura-island-choice/',
  '/spain/galicia-asturias/santiago-old-town-station-arrival/',
  '/spain/galicia-asturias/rias-baixas-pontevedra-vigo-coast/',
  '/spain/galicia-asturias/oviedo-picos-covadonga/'
]);

export const greeceNewSubstantiveRoutes = Object.freeze([
  '/greece/',
  '/greece/athens-attica/',
  '/greece/peloponnese/',
  '/greece/central-mainland/',
  '/greece/thessaloniki-north/',
  '/greece/crete/',
  '/greece/cyclades/',
  '/greece/ionian-islands/',
  '/greece/dodecanese/',
  '/greece/athens-attica/acropolis-plaka-anafiotika/',
  '/greece/athens-attica/national-archaeological-museum-exarchia/',
  '/greece/athens-attica/piraeus-port-attica-coast/',
  '/greece/peloponnese/nafplio-palamedes-argolid/',
  '/greece/peloponnese/ancient-olympia-archaeology/',
  '/greece/peloponnese/mani-areopoli-diros/',
  '/greece/central-mainland/delphi-sanctuary-arachova/',
  '/greece/central-mainland/meteora-kalambaka-monasteries/',
  '/greece/central-mainland/olympus-litochoro-prionia/',
  '/greece/thessaloniki-north/thessaloniki-waterfront-upper-town/',
  '/greece/thessaloniki-north/aigai-vergina-museum/',
  '/greece/thessaloniki-north/halkidiki-kassandra-sithonia/',
  '/greece/crete/chania-old-harbour-akrotiri/',
  '/greece/crete/heraklion-knossos-museum/',
  '/greece/crete/lasithi-agios-nikolaos-spinalonga/',
  '/greece/cyclades/santorini-fira-oia-port/',
  '/greece/cyclades/naxos-paros-port-town-pair/',
  '/greece/cyclades/milos-sifnos-west-cyclades/',
  '/greece/ionian-islands/corfu-town-paxos-harbour/',
  '/greece/ionian-islands/lefkada-town-west-coast/',
  '/greece/ionian-islands/kefalonia-ithaca-zakynthos-gateways/',
  '/greece/dodecanese/rhodes-old-town-lindos/',
  '/greece/dodecanese/kos-town-asklepion-nisyros/',
  '/greece/dodecanese/kalymnos-leros-patmos-chain/'
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
  Object.freeze({ label: 'Australian Alps & Margaret River', count: 781 }),
  Object.freeze({ label: 'Florida', count: 785 }),
  Object.freeze({ label: 'Ho Chi Minh City', count: 789 }),
  Object.freeze({ label: 'Mekong Delta', count: 793 }),
  Object.freeze({ label: 'New England', count: 797 }),
  Object.freeze({ label: 'Margaret River remaining guides', count: 801 }),
  Object.freeze({ label: 'Chicago', count: 805 }),
  Object.freeze({ label: 'Da Lat & Central Highlands', count: 809 }),
  Object.freeze({ label: 'Arizona', count: 813 }),
  Object.freeze({ label: 'Los Angeles', count: 817 }),
  Object.freeze({ label: 'Broome & Kimberley', count: 821 }),
  Object.freeze({ label: 'Mui Ne & Binh Thuan', count: 825 }),
  Object.freeze({ label: 'Boston & Cambridge', count: 829 }),
  Object.freeze({ label: 'New York historical coverage correction', count: 833 }),
  Object.freeze({ label: 'San Diego', count: 837 }),
  Object.freeze({ label: 'Phong Nha & Ke Bang', count: 841 }),
  Object.freeze({ label: 'Broome & Tasmania', count: 845 }),
  Object.freeze({ label: '26-route historical coverage correction', count: 871 }),
  Object.freeze({ label: 'USA overview and Juneau historical correction', count: 873 }),
  Object.freeze({ label: 'Australia final-content batch', count: 878 }),
  Object.freeze({ label: 'Phu Quoc', count: 882 }),
  Object.freeze({ label: 'Nha Trang', count: 886 }),
  Object.freeze({ label: 'Da Lat / Ha Long follow-on', count: 890 }),
  Object.freeze({ label: 'Southern Vietnam follow-on', count: 894 }),
  Object.freeze({ label: 'Vietnam bay and Con Dao follow-on', count: 898 }),
  Object.freeze({ label: 'Vietnam caves and island gaps follow-on', count: 902 }),
  Object.freeze({ label: 'Vietnam coastal gaps follow-on', count: 906 }),
  Object.freeze({ label: 'Thailand country overview', count: 907 }),
  Object.freeze({ label: 'Greece country, regions and local routes', count: 940 })
]);
