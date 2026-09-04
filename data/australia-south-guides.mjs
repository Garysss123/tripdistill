import { australiaGuide as g, defineAustraliaCluster as cluster } from './australia-guide-builder.mjs';

export const australiaSouthClusters = [
  cluster({
    slug: 'melbourne-port-phillip',
    name: 'Melbourne & Port Phillip',
    region: 'Victoria',
    band: 'south',
    family: 'tram-laneway-grid',
    label: 'TRAMS / LANES / CULTURE / BAY',
    tagline: 'Build Melbourne by precinct and tram spine, not by famous doorway.',
    hubIntro: 'Melbourne works through a dense central tram grid, cultural institutions, neighborhood high streets and the much larger Port Phillip edge. The CBD, Southbank, inner north, St Kilda and Phillip Island require different tickets, walking rhythms and late returns. Five chapters protect museum attention, residential boundaries and the distance hidden behind a familiar city name.',
    stay: 'Choose a base on the tram or rail line serving the first precincts, and verify whether the address sits inside the central free-tram zone rather than assuming all city travel is free.',
    transfer: 'Metro trains, trams and buses cover the city; Phillip Island requires a much longer road or scheduled coach plan. Use Public Transport Victoria for current disruptions and replacement services.',
    sources: [
      ['https://www.australia.com/en/places/melbourne-and-surrounds/guide-to-melbourne.html', 'Tourism Australia — Melbourne'],
      ['https://www.visitvictoria.com/regions/melbourne', 'Visit Victoria — Melbourne'],
      ['https://www.ptv.vic.gov.au/', 'Public Transport Victoria — journey planning and disruptions'],
      ['https://www.parks.vic.gov.au/places-to-see/parks/port-phillip-heads-marine-national-park', 'Parks Victoria — Port Phillip Heads Marine National Park'],
      ['https://www.penguins.org.au/', 'Phillip Island Nature Parks — visitor and conservation information']
    ],
    guides: [
      g({
        slug: 'cbd-laneways-tram-grid', name: 'CBD Laneways & Tram Grid', motif: 'block-by-block city reading', instrument: 'tram-grid', imageQuery: 'Melbourne CBD laneway tram street', imageAlt: 'Melbourne central business district seen from above',
        summary: 'A central Melbourne walk that uses the numbered street grid and tram corridors to connect selected lanes without turning service alleys into a scavenger hunt.',
        orientation: 'choose one east–west and one north–south spine, then add only lanes that genuinely connect them.', access: 'Arrive by a named station exit and understand the current fare zone before boarding a tram.', sequence: 'Read the main grid first, enter two or three public lanes, pause in one booked or civic interior and finish near a useful station.', boundary: 'Laneways contain kitchens, deliveries, homes and workers. Keep loading access open and ask before photographing people or private interiors.',
        stages: [['Choose the station exit', 'Match the exit to the planned first block; large stations can release visitors on the wrong side of the grid.'], ['Follow the primary spine', 'Use a major street to settle bearings before entering smaller lanes.'], ['Read a few public lanes', 'Select lanes with clear public access and leave service doors and residents unobstructed.'], ['Close at rail or tram', 'Finish beside a direct service before weather or evening crowds change the walk.']],
        risks: [['Tram lanes', 'Look both ways and use marked stops; trams are quiet and share complex road space.'], ['Crowded lanes', 'Narrow routes can become unsafe during deliveries or events; bypass rather than force passage.'], ['Fare assumptions', 'The free-tram area has boundaries. Confirm the journey before boarding.']],
        duration: 'A full day supports one central grid, one interior and meals without lane fatigue.', combine: 'Pair with Federation Square or Southbank; keep St Kilda for another transit chapter.', verify: 'Check PTV disruptions, station exits, free-tram boundaries, venue bookings, weather and event closures.'
      }),
      g({
        slug: 'federation-square-southbank', name: 'Federation Square & Southbank', motif: 'culture across the river', instrument: 'gallery-fold', imageQuery: 'Federation Square Melbourne Yarra Southbank', imageAlt: 'Federation Square and the Yarra River in central Melbourne',
        summary: 'A cultural-institution day crossing the Yarra once, with exhibition attention and evening river access planned as separate blocks.',
        orientation: 'use Federation Square as the hinge between Flinders Street, ACMI, the river and the NGV side of Southbank.', access: 'Arrive through Flinders Street or an accessible tram stop and identify the legal river crossing serving the selected institution.', sequence: 'Book one major exhibition, cross the river in daylight, use one Southbank segment and leave via a known station or tram.', boundary: 'Museums, memorials, river operations and event plazas have separate photography, bag and access rules; public space is not unlimited event seating.',
        stages: [['Set the cultural anchor', 'Choose ACMI, NGV or another institution and protect enough time for its collection.'], ['Cross once with purpose', 'Use the bridge that serves the next venue rather than zigzagging across the river.'], ['Read the Southbank edge', 'Keep casino, dining, arts and river paths as different choices rather than one compulsory strip.'], ['Exit before event dispersal', 'Return to rail or tram while platforms and crossings remain manageable.']],
        risks: [['Timed exhibitions', 'Popular shows can sell out or use entry windows; book directly.'], ['River closure', 'Events and works can reroute promenades or bridges.'], ['Evening crowds', 'Major venues empty together; choose the departure node in advance.']],
        duration: 'Allow most of a day for one major collection and an unhurried river crossing.', combine: 'It integrates naturally with the CBD grid but should not be stacked with Phillip Island.', verify: 'Confirm exhibition tickets, opening hours, bridge or path closures, PTV status and late-night return.'
      }),
      g({
        slug: 'fitzroy-carlton-collingwood', name: 'Fitzroy, Carlton & Collingwood', motif: 'neighborhood print edition', instrument: 'street-zine', imageQuery: 'Fitzroy Melbourne street terrace Carlton', imageAlt: 'Terraces and neighborhood streets in inner northern Melbourne',
        summary: 'An inner-north neighborhood route connecting one museum or garden, one high street and a meal without treating residential lanes as public exhibitions.',
        orientation: 'choose Carlton or Fitzroy as the daytime anchor and Collingwood only when the final tram or train remains simple.', access: 'Use tram or rail rather than searching for parking across several dense neighborhoods.', sequence: 'Start with a cultural or garden interior, walk one commercial street, pause for food and end at a lit transport node.', boundary: 'Street art, migrant businesses and terrace neighborhoods are lived places. Seek consent and avoid geotagging private courtyards or disruptive murals.',
        stages: [['Select the first precinct', 'Commit to one museum, garden or market before adding the high street.'], ['Use a single street thread', 'Walk a coherent line instead of bouncing between social-media pins.'], ['Pause inside the neighborhood', 'Choose a locally appropriate meal or shop without blocking trade or residents.'], ['Leave on the transit edge', 'End at the tram or station identified at the start.']],
        risks: [['Residential intrusion', 'Do not enter lanes, yards or apartment entries for photographs.'], ['Night transport', 'Frequency and safety change late; retain a clear home route.'], ['Event saturation', 'Markets and festivals can transform streets; verify dates and closures.']],
        duration: 'A full afternoon and evening suits two connected neighborhoods.', combine: 'Pair with a morning CBD visit; do not add St Kilda across the city.', verify: 'Check market or museum hours, event permits, tram disruption, weather and the late service.'
      }),
      g({
        slug: 'st-kilda-foreshore', name: 'St Kilda & Foreshore', motif: 'tram-to-bay sunset', instrument: 'bay-clock', imageQuery: 'St Kilda pier Melbourne sunset', imageAlt: 'St Kilda Pier and Port Phillip Bay near Melbourne',
        summary: 'A bay-edge chapter for tram arrival, foreshore walking and sunset that keeps wildlife viewing, water safety and the evening tram visible.',
        orientation: 'use the tram terminus, pier and esplanade as separate anchors along the bay.', access: 'Take a current tram or bus route and save the exact stop for the return; event reroutes are common.', sequence: 'Arrive before the hottest hours, walk one foreshore section, observe wildlife only through managed guidance and leave after sunset with the crowd.', boundary: 'Penguins and other wildlife must not be lit, touched, crowded or photographed against rules. Respect marina operations and residential streets.',
        stages: [['Land at the tram stop', 'Identify the return platform and any event diversion before heading toward the water.'], ['Choose one foreshore line', 'Use the pier, beach or esplanade according to wind and open access.'], ['Observe without pressure', 'Follow posted wildlife and marina rules and keep a generous distance.'], ['Board the planned tram', 'Leave from the known stop before late demand or service gaps.']],
        risks: [['Wind and cold', 'Port Phillip weather can change quickly even after a warm city day.'], ['Water edge', 'Do not swim outside safe conditions or enter closed piers and breakwaters.'], ['Wildlife disturbance', 'Flash, light and crowding can harm animals and breach rules.']],
        duration: 'Allow half a day through sunset; a shorter visit works in poor weather.', combine: 'Pair with one south-side cultural stop, not the inner north.', verify: 'Check pier access, wildlife notices, bay weather, beach patrol, event closures and tram service.'
      }),
      g({
        slug: 'phillip-island', name: 'Phillip Island', motif: 'wildlife return timetable', instrument: 'wildlife-clock', imageQuery: 'Phillip Island coast Victoria Australia', imageAlt: 'Rugged coast on Phillip Island in Victoria',
        summary: 'A long regional day or overnight centered on booked wildlife viewing, coastal weather and a safe drive rather than a late dash from Melbourne.',
        orientation: 'treat the island as a regional destination with several managed reserves, not as a single penguin show.', access: 'Drive with a rested driver, use a scheduled tour or confirm limited coach options; prebook managed wildlife experiences directly.', sequence: 'Arrive early enough for one daylight landscape, use official visitor guidance and reserve the evening for the booked wildlife program and safe return.', boundary: 'Wildlife welfare controls the experience. No flash, touching, feeding or off-path approaches are acceptable.',
        stages: [['Secure the evening booking', 'Match date, entry, accessibility and arrival cutoff to the official operator.'], ['Choose one daylight coast', 'Use an open boardwalk or reserve suited to wind and time.'], ['Attend the managed viewing', 'Follow ranger instructions and keep devices and light within current rules.'], ['Protect the night drive', 'Stay overnight or preserve driver alertness and a conservative mainland return.']],
        risks: [['Wildlife on roads', 'Drive slowly at dawn, dusk and night and never stop unsafely for animals.'], ['Wind and exposure', 'Boardwalks can be cold and severe; carry layers and obey closures.'], ['Late fatigue', 'The return to Melbourne is long after an evening program. Plan accommodation or driver rotation.']],
        duration: 'One overnight is ideal; a day tour must remain focused and use a safe return.', combine: 'Do not combine with the Great Ocean Road. A short Mornington or bayside stop is the limit.', verify: 'Confirm booking, road conditions, wind, fire danger, wildlife rules, accessibility and night transport.'
      })
    ]
  }),

  cluster({
    slug: 'great-ocean-road-gariwerd',
    name: 'Great Ocean Road & Gariwerd',
    region: 'Victoria',
    band: 'south',
    family: 'cliff-kilometre-ribbon',
    label: 'CLIFF ROAD / RAINFOREST / VOLCANIC WEST',
    tagline: 'Count driving hours, not pins, and let coast or mountain own the day.',
    hubIntro: 'Victoria’s southwest is a chain of surf coast, winding cliff road, wet forest, limestone stacks and Gariwerd mountain Country. Map distance hides slow bends, wildlife, weather and limited daylight. Five chapters turn the famous road into staged bases and keep Gariwerd as its own cultural and ecological destination rather than an afterthought.',
    stay: 'Use Torquay, Lorne, Apollo Bay, Port Campbell or a Gariwerd gateway according to the day’s first landscape. One Melbourne hotel is not a practical base for the whole region.',
    transfer: 'Self-drive or an appropriate tour is the main contract. Driver fatigue, left-side road practice, fuel, closures and wildlife matter more than the number of stops.',
    sources: [
      ['https://www.australia.com/en/places/melbourne-and-surrounds/guide-to-the-great-ocean-road.html', 'Tourism Australia — Great Ocean Road'],
      ['https://www.visitvictoria.com/regions/great-ocean-road', 'Visit Victoria — Great Ocean Road'],
      ['https://www.parks.vic.gov.au/places-to-see/parks/port-campbell-national-park', 'Parks Victoria — Port Campbell National Park'],
      ['https://www.parks.vic.gov.au/places-to-see/parks/great-otway-national-park', 'Parks Victoria — Great Otway National Park'],
      ['https://www.parks.vic.gov.au/places-to-see/parks/grampians-national-park', 'Parks Victoria — Grampians (Gariwerd) National Park']
    ],
    guides: [
      g({
        slug: 'torquay-bells-beach', name: 'Torquay & Bells Beach', motif: 'surf-coast departure', instrument: 'roadbook', imageQuery: 'Bells Beach Torquay Victoria Australia', imageAlt: 'Cliffs and surf at Bells Beach near Torquay',
        summary: 'A Melbourne-to-coast departure chapter that distinguishes surf watching, safe swimming and the start of the winding road.',
        orientation: 'use Torquay as the service base and Bells Beach as a formal lookout rather than a general swimming stop.', access: 'Drive or use regional transport to Torquay, then confirm legal parking and event restrictions at the selected coast access.', sequence: 'Set supplies in town, use one formal cliff viewpoint, swim only at a patrolled beach and stop before fatigue reaches the scenic road.', boundary: 'Surf reserves, cliffs and competition spaces require distance; do not copy expert surfers or cross closed event zones.',
        stages: [['Prepare in Torquay', 'Fuel, water and weather checks belong before the coastal road.'], ['Use the formal lookout', 'Observe Bells Beach from signed platforms and paths.'], ['Choose a safe beach', 'Follow patrol flags and local advice rather than entering the famous break.'], ['Finish before the bends', 'Stay locally or continue only with daylight and a rested driver.']],
        risks: [['Cliff edges', 'Wind and unstable edges make barrier crossing unacceptable.'], ['Surf power', 'Bells is an expert break; use patrolled beaches for swimming.'], ['Event controls', 'Competitions can close parking and access roads.']],
        duration: 'Allow half a day from Melbourne or use Torquay as the first overnight.', combine: 'Pair with Lorne only when staying along the road, not on a rushed city return.', verify: 'Check surf, patrols, event closures, road conditions, fire danger and accommodation check-in.'
      }),
      g({
        slug: 'lorne-waterfalls', name: 'Lorne & Otway Waterfalls', motif: 'cliff-road to wet forest', instrument: 'waterfall-mileage', imageQuery: 'Lorne Erskine Falls Great Otway National Park', imageAlt: 'Forest waterfall near Lorne in Great Otway National Park',
        summary: 'A coast-and-forest day that makes the inland turn, waterfall stairs and narrow access road part of the schedule.',
        orientation: 'choose Lorne town plus one named waterfall or forest walk, not a string of unsigned detours.', access: 'Drive slowly on narrow roads, use designated parking and confirm whether the trailhead road suits the vehicle.', sequence: 'Read the coast early, turn inland for one open forest track, return to town before wildlife and low light complicate the road.', boundary: 'Waterfalls and wet forest are not swimming playgrounds. Stay on stairs and tracks, protect ferns and follow fire or storm closures.',
        stages: [['Set the inland turn', 'Choose the single waterfall before leaving the main road.'], ['Park within the bay', 'Do not block narrow forest access or emergency routes.'], ['Complete the signed walk', 'Use handrails and turn back if rain or treefall changes the track.'], ['Return before dusk', 'Reach Lorne while visibility remains good on wildlife-prone roads.']],
        risks: [['Wet stairs', 'Waterfall approaches remain slippery after rain.'], ['Treefall and storm', 'High wind can close forest roads and tracks.'], ['Driver distraction', 'Pull over only at legal bays; scenery is not permission to stop in traffic.']],
        duration: 'Use a full day from a Surf Coast base, or one focused stop when continuing west.', combine: 'Pair with Torquay or an Apollo Bay overnight, never every waterfall.', verify: 'Check Great Otway alerts, road status, wind, rainfall, fire danger, parking and sunset.'
      }),
      g({
        slug: 'apollo-bay-otways', name: 'Apollo Bay & the Otways', motif: 'forest-and-harbour base', instrument: 'canopy-section', imageQuery: 'Great Otway National Park rainforest Apollo Bay', imageAlt: 'Temperate rainforest in Great Otway National Park near Apollo Bay',
        summary: 'An overnight base linking harbour services to one temperate-rainforest circuit while protecting fuel, food and the next road stage.',
        orientation: 'use Apollo Bay for logistics and choose either a forest canopy route or a cape walk as the main landscape.', access: 'Arrive with fuel and daylight, verify forest road conditions and do not rely on late metropolitan services.', sequence: 'Settle supplies, walk one open forest track, return to town and review the next day’s coastal weather before departure.', boundary: 'Keep old-growth forest, wildlife and waterways free from off-track pressure, food and noise.',
        stages: [['Make the base functional', 'Resolve fuel, food, check-in and emergency contacts before another drive.'], ['Choose one forest layer', 'Select a short boardwalk or graded trail suited to rain and ability.'], ['Read the canopy quietly', 'Stay on formed paths and avoid playback, feeding or spotlight pressure.'], ['Reset for the west', 'Check Port Campbell road and weather notices before sleeping.']],
        risks: [['Limited services', 'Opening hours and fuel options can narrow outside peak periods.'], ['Forest road conditions', 'Rain, debris and wildlife demand conservative driving.'], ['Cold water and weather', 'The coast and forest can change quickly; carry layers and dry gear.']],
        duration: 'At least one overnight makes the forest and road sequence credible.', combine: 'Pair with Lorne before or Port Campbell after, not both as rushed stops.', verify: 'Check road and track closures, fuel, accommodation, wind, rain, fire danger and marine conditions.'
      }),
      g({
        slug: 'port-campbell-twelve-apostles', name: 'Port Campbell & Twelve Apostles', motif: 'limestone weather board', instrument: 'cliff-aperture', imageQuery: 'Twelve Apostles Port Campbell Victoria coast', imageAlt: 'Limestone stacks at the Twelve Apostles on the Great Ocean Road',
        summary: 'A limestone-coast chapter that spreads major lookouts across safe daylight and refuses to turn every cove into a swimming beach.',
        orientation: 'use Port Campbell as the base and select two or three formal viewpoints according to wind, swell and crowd direction.', access: 'Approach on the signed road, park only in designated areas and use the official under-road or boardwalk access where provided.', sequence: 'Visit the most exposed platform in suitable weather, pause away from tour peaks and leave enough time for a safe road return.', boundary: 'Cliffs erode and beaches can be wave traps. Barriers, closures and no-swim advice are final.',
        stages: [['Read the marine forecast', 'Compare swell, wind and rain with the cliff platforms before leaving town.'], ['Use the designated approach', 'Follow car parks, crossings and boardwalks rather than roadside shortcuts.'], ['Choose a second formation', 'Add only a nearby formal site that fits daylight and parking.'], ['Return to the base', 'Avoid driving long wildlife roads immediately after sunset.']],
        risks: [['Unstable cliffs', 'Stay behind barriers and away from cliff bases.'], ['Powerful waves', 'Many coves are unsafe for swimming and can be cut off.'], ['Crowd and coach flow', 'Use patience at narrow platforms and never stop on the road shoulder.']],
        duration: 'Use a full day from Apollo Bay or an overnight in the Port Campbell area.', combine: 'Pair with the Otways through an overnight progression; do not append Gariwerd.', verify: 'Check park alerts, swell, wind, cliff closures, roadworks, daylight and accommodation.'
      }),
      g({
        slug: 'gariwerd-grampians', name: 'Gariwerd / Grampians', motif: 'mountain Country register', instrument: 'range-register', imageQuery: 'Grampians Gariwerd National Park Victoria lookout', imageAlt: 'Mountain ranges and forest in Gariwerd Grampians National Park',
        summary: 'A mountain destination with its own cultural landscape, fire risk and graded walks, not a detour squeezed behind the Twelve Apostles.',
        orientation: 'base in Halls Gap or the gateway serving the selected open trail and recognise Gariwerd as Djab Wurrung and Jardwadjali Country.', access: 'Drive with fuel and wildlife awareness, checking Parks Victoria for road, track and cultural-site closures.', sequence: 'Begin with a visitor or cultural context, choose one ability-matched walk and return before heat, storm or dusk.', boundary: 'Rock art and cultural places require strict access, photography and behavior. Use only open routes and authoritative interpretation.',
        stages: [['Read current Country guidance', 'Check closures and cultural information before selecting a site.'], ['Choose one graded walk', 'Match distance, elevation and exposure to the weakest walker.'], ['Use formal lookouts', 'Stay behind barriers and avoid cliff shortcuts or drones where restricted.'], ['Descend before wildlife hour', 'Reach the base before dusk increases road and animal risk.']],
        risks: [['Fire danger', 'Extreme conditions can close the park and roads.'], ['Cliff and heat exposure', 'Carry water, layers and a conservative turnaround.'], ['Cultural-site protection', 'Closed or sensitive places are not alternate routes.']],
        duration: 'Two nights allow one cultural layer and one mountain day.', combine: 'Treat Gariwerd as a separate leg after the coast, not a same-day add-on.', verify: 'Check Parks Victoria alerts, fire danger, cultural closures, road status, weather and track grade.'
      })
    ]
  }),

  cluster({
    slug: 'adelaide-wine-island',
    name: 'Adelaide, Wine Country & Kangaroo Island',
    region: 'South Australia',
    band: 'south',
    family: 'parklands-ferry-ledger',
    label: 'PARKLANDS / PRODUCE / FERRY',
    tagline: 'Keep the compact city, tasting valleys and island crossing on different ledgers.',
    hubIntro: 'Adelaide’s parklands and cultural axis are compact, but the Hills, Barossa, Fleurieu and Kangaroo Island expand quickly into road, alcohol and ferry decisions. Five chapters separate walkable city culture from tasting transport and wildlife landscapes. A responsible plan never asks one driver to be navigator, taster and night-return solution.',
    stay: 'Central Adelaide suits city institutions; valley, peninsula and island nights protect rural daylight and remove repeated driving.',
    transfer: 'Adelaide Metro serves the city and selected suburbs. Wine regions and Kangaroo Island need a sober driver, booked tour, ferry and island transport matched to the exact itinerary.',
    sources: [
      ['https://www.australia.com/en/places/adelaide-and-surrounds/guide-to-adelaide.html', 'Tourism Australia — Adelaide'],
      ['https://southaustralia.com/', 'South Australian Tourism Commission — official visitor guide'],
      ['https://www.adelaidemetro.com.au/', 'Adelaide Metro — public transport'],
      ['https://www.parks.sa.gov.au/parks/flinders-chase-national-park', 'National Parks and Wildlife Service SA — Flinders Chase'],
      ['https://www.sealink.com.au/kangaroo-island/', 'SeaLink — official Kangaroo Island ferry information']
    ],
    guides: [
      g({
        slug: 'city-parklands-north-terrace', name: 'Adelaide Park Lands & North Terrace', motif: 'civic green belt', instrument: 'parklands-plan', imageQuery: 'Adelaide North Terrace parklands city', imageAlt: 'Adelaide skyline and Elder Park beside the River Torrens',
        summary: 'A compact city route using the parklands and North Terrace institutions as orientation rather than racing between every collection.',
        orientation: 'choose one North Terrace institution and one parklands edge as the day’s two anchors.', access: 'Arrive by tram, train or bus and note the last useful service before an evening event.', sequence: 'Begin with a collection, cross the civic axis slowly, use shade in the parklands and finish at the market or river only if transport remains direct.', boundary: 'Museums, memorials, university grounds and parklands have distinct cultural, event and photography rules.',
        stages: [['Choose the institution', 'Protect a real attention block for one museum, gallery or garden.'], ['Read the civic axis', 'Walk one coherent section of North Terrace rather than ticking facades.'], ['Use the green belt', 'Select a formal park path with shade and an exit.'], ['Finish near transit', 'End beside tram, rail or bus before event dispersal.']],
        risks: [['Heat exposure', 'Open civic spaces can be severe; use shade and water.'], ['Event closure', 'Festivals alter roads, lawns and transport.'], ['Collection fatigue', 'One meaningful institution is better than multiple rushed entries.']],
        duration: 'A full day supports one major collection, parklands and a meal.', combine: 'Pair with a central market visit; save the Hills and wine regions.', verify: 'Check venue hours, event closures, Adelaide Metro alerts, heat, accessibility and late transport.'
      }),
      g({
        slug: 'adelaide-hills-hahndorf', name: 'Adelaide Hills & Hahndorf', motif: 'ridge-town road day', instrument: 'ridge-clock', imageQuery: 'Adelaide Hills Hahndorf South Australia', imageAlt: 'Green hills and townscape in the Adelaide Hills',
        summary: 'A ridge-and-town day that balances scenic roads, living communities, weather and a sober return rather than chaining tasting rooms.',
        orientation: 'choose Hahndorf, Mount Lofty or another single Hills thread and keep the city return on the same side of the ridge.', access: 'Use a designated driver, public bus where practical or a booked tour; confirm closing times and pickup location.', sequence: 'Start with landscape or garden, eat in town, select one producer or cultural stop and descend before fog, wildlife or fatigue.', boundary: 'Hahndorf is a working town, not a preserved theme set. Respect residents, businesses and private farms.',
        stages: [['Choose the ridge objective', 'Make the lookout, garden or town the primary purpose.'], ['Confirm the road and driver', 'Resolve alcohol choices before the first stop.'], ['Read one town section', 'Walk public streets without entering private gardens or blocking trade.'], ['Descend in daylight', 'Return before visibility and wildlife pressure increase.']],
        risks: [['Alcohol and driving', 'Use a sober driver or tour and never improvise after tasting.'], ['Fog and wildlife', 'Ridge roads become difficult in poor visibility and at dusk.'], ['Bushfire weather', 'Extreme fire danger can close parks and alter routes.']],
        duration: 'Use a full day from Adelaide or stay one night in the Hills.', combine: 'Pair with one eastern city stop, not Barossa and Fleurieu together.', verify: 'Check road and fire alerts, producer booking, bus or tour, weather and daylight.'
      }),
      g({
        slug: 'barossa-valley', name: 'Barossa Valley', motif: 'tasting-with-driver contract', instrument: 'cellar-ledger', imageQuery: 'Barossa Valley vineyards South Australia', imageAlt: 'Vineyards across the Barossa Valley in South Australia',
        summary: 'A wine-region route designed around a sober driver, booked producers, food and landscape rather than maximum cellar-door count.',
        orientation: 'select one subregion and at most three confirmed stops with a real meal and travel gaps.', access: 'Book a tour, designated driver or accommodation transfer before making any tasting reservation.', sequence: 'Begin with landscape or history, use one substantial tasting, eat, reassess and end before rural roads darken.', boundary: 'Vineyards are farms and workplaces. Enter only public cellar doors, follow biosecurity and never photograph staff or production areas without permission.',
        stages: [['Set the transport first', 'No booking should precede the sober return contract.'], ['Choose a subregion', 'Keep stops geographically coherent instead of crossing the valley repeatedly.'], ['Eat and slow down', 'Food, water and time are part of responsible tasting.'], ['Close before dusk', 'Return to accommodation while roads and driver attention remain strong.']],
        risks: [['Drink driving', 'A designated driver must consume no alcohol; use a professional service when uncertain.'], ['Booking mismatch', 'Cellar doors change hours and may require reservations.'], ['Heat and fire', 'Extreme weather affects vineyards, roads and outdoor activity.']],
        duration: 'One full day with an overnight is the safest useful minimum.', combine: 'Do not combine with McLaren Vale. Pair with Adelaide before or after.', verify: 'Confirm every producer, driver, meal, road, fire danger, accommodation and cancellation rule.'
      }),
      g({
        slug: 'fleurieu-mclaren-vale', name: 'Fleurieu Peninsula & McLaren Vale', motif: 'vine-to-coast circuit', instrument: 'coast-cellar', imageQuery: 'McLaren Vale Fleurieu Peninsula vineyards coast', imageAlt: 'Vineyards and rolling country on the Fleurieu Peninsula',
        summary: 'A peninsula day choosing either coast-and-walk or wine-and-food as the primary clock, with a sober road plan connecting them.',
        orientation: 'use McLaren Vale as the inland hinge and select one coast sector rather than circling the entire peninsula.', access: 'Drive with a designated driver or book a regional tour; public transport is limited for a multi-stop circuit.', sequence: 'Take the outdoor section in suitable morning weather, eat, make one booked producer stop and return before coastal or rural roads darken.', boundary: 'Cliffs, farms, beaches and cellar doors have different access. Stay on public routes and respect private land.',
        stages: [['Choose coast or cellar priority', 'Let one purpose set the route and discard conflicting distance.'], ['Read the morning weather', 'Match wind, heat and surf to the outdoor stop.'], ['Keep tasting contained', 'Use one or two booked producers with food and a sober driver.'], ['Return on the direct road', 'Avoid an unnecessary scenic detour after fatigue.']],
        risks: [['Cliff and surf', 'Use formal lookouts and patrolled swimming where available.'], ['Alcohol and road', 'Resolve the driver before tasting.'], ['Long peninsula detour', 'A loop can become much longer than the map suggests.']],
        duration: 'Use a full day and consider one regional night for coast plus wine.', combine: 'Pair with Adelaide; keep Kangaroo Island on a separate ferry plan.', verify: 'Check producer booking, designated driver, coast weather, fire danger, roadworks and sunset.'
      }),
      g({
        slug: 'kangaroo-island', name: 'Kangaroo Island', motif: 'ferry-and-wildlife island plan', instrument: 'ferry-ledger', imageQuery: 'Kangaroo Island Remarkable Rocks South Australia', imageAlt: 'Granite formations and coast on Kangaroo Island',
        summary: 'A multi-night island plan that protects ferry check-in, long road distances, wildlife speed and park closures before scenic stops.',
        orientation: 'separate the eastern arrival, central services and western parks into realistic days.', access: 'Book the exact passenger or vehicle ferry, arrive before check-in and confirm island vehicle, fuel and accommodation.', sequence: 'Settle the arrival side, use one region per day, visit managed wildlife or parks through current rules and avoid a sunset cross-island dash.', boundary: 'Wildlife and recovering landscapes need distance. Never feed animals, stop dangerously or enter closed fire-affected and restoration areas.',
        stages: [['Lock the ferry contract', 'Match people, vehicle, terminal and check-in to the booking.'], ['Build regional days', 'Keep east, north, south and west distances visible.'], ['Use managed wildlife access', 'Follow rangers, speed limits and viewing rules.'], ['Return near the terminal', 'Sleep close enough to protect the outbound ferry and driver alertness.']],
        risks: [['Wildlife collision', 'Drive slowly, especially dawn and dusk, and avoid night travel.'], ['Ferry disruption', 'Wind and operational changes require flexible accommodation and onward bookings.'], ['Remote services', 'Fuel, food and mobile coverage are limited outside towns.']],
        duration: 'Three nights is a practical minimum; longer gives weather and wildlife margin.', combine: 'Do not make it a day trip beside Barossa or Fleurieu. Adelaide is the mainland buffer.', verify: 'Check ferry, park and road alerts, fire danger, fuel, wildlife guidance, accommodation and return check-in.'
      })
    ]
  }),

  cluster({
    slug: 'canberra-australian-alps',
    name: 'Canberra & Australian Alps',
    region: 'Australian Capital Territory & New South Wales',
    band: 'south',
    family: 'civic-axis-altitude',
    label: 'CIVIC AXIS / COLLECTIONS / ALPINE WEATHER',
    tagline: 'Give national institutions and high-country conditions separate attention budgets.',
    hubIntro: 'Canberra’s designed lake and parliamentary axis reward slow institutional visits, while Namadgi and the Snowy Mountains demand road, fire and alpine preparation. Five chapters separate civic memory, living Ngunnawal Country and high-country weather. A museum day should not be diluted by a late mountain dash, and an alpine route should never inherit city assumptions.',
    stay: 'Choose a city base near the institution cluster, or an alpine gateway such as Jindabyne for mountain days. The two are not interchangeable.',
    transfer: 'Canberra buses and light rail cover selected corridors; the Parliamentary Triangle still involves long walks. Namadgi and Kosciuszko require road access or a suitable operator.',
    sources: [
      ['https://www.australia.com/en/places/canberra-and-surrounds/guide-to-canberra.html', 'Tourism Australia — Canberra'],
      ['https://visitcanberra.com.au/', 'VisitCanberra — official destination guide'],
      ['https://www.transport.act.gov.au/', 'Transport Canberra — service information'],
      ['https://www.parks.act.gov.au/find-a-park/namadgi-national-park', 'ACT Parks — Namadgi National Park'],
      ['https://www.nationalparks.nsw.gov.au/visit-a-park/parks/kosciuszko-national-park', 'NSW National Parks — Kosciuszko National Park']
    ],
    guides: [
      g({
        slug: 'parliamentary-triangle', name: 'Parliamentary Triangle', motif: 'institutional ground plan', instrument: 'axis-plan', imageQuery: 'Parliament House Canberra Parliamentary Triangle', imageAlt: 'Australian Parliament House within Canberra Parliamentary Triangle',
        summary: 'A civic-axis day connecting Parliament House and one national institution with security, opening hours and long walking distances visible.',
        orientation: 'use the lake, old and new parliament buildings as the axis and select only one additional institution.', access: 'Arrive by bus, legal parking or drop-off at the exact public entrance and allow security time.', sequence: 'Visit the most constrained institution first, walk one axis segment, add one collection and finish before buildings and buses thin out.', boundary: 'National institutions are working, commemorative and civic spaces. Follow security, photography and respectful-conduct rules.',
        stages: [['Confirm the public entrance', 'Use the institution’s current visitor and security information.'], ['Read the designed axis', 'Walk one meaningful segment without treating roads and lawns as unrestricted shortcuts.'], ['Give one collection time', 'Select a museum or gallery and avoid checklist entry.'], ['Leave before closure', 'Return to the bus stop or vehicle while services and daylight remain.']],
        risks: [['Security delay', 'Screening and official activity can change access.'], ['Long exposed walks', 'The scale is larger than maps suggest; heat, cold and wind matter.'], ['Ceremonial conduct', 'Respect memorial events, protests and working government.']],
        duration: 'One full day suits Parliament plus one major collection.', combine: 'Pair with Lake Burley Griffin, not an alpine drive.', verify: 'Check sitting or event access, security, venue hours, buses, weather and accessibility.'
      }),
      g({
        slug: 'lake-burley-griffin-national-museum', name: 'Lake Burley Griffin & National Museum', motif: 'lake-loop collection day', instrument: 'lake-circuit', imageQuery: 'Lake Burley Griffin National Museum Canberra', imageAlt: 'Lake Burley Griffin and Canberra landmarks',
        summary: 'A western lake chapter balancing one museum visit with a short shoreline circuit rather than attempting the entire lake.',
        orientation: 'use Commonwealth Avenue and the museum peninsula to define a manageable western loop.', access: 'Arrive by bus, bike or legal parking and confirm bicycle hire and return terms before relying on a full circuit.', sequence: 'Visit the museum while attention is fresh, take one shoreline segment, pause in shade and exit from the same transport side.', boundary: 'The lake edge includes wildlife, memorials and event zones. Keep paths open and do not enter closed water or shore areas.',
        stages: [['Set the museum block', 'Check current exhibitions and accessibility.'], ['Choose a shoreline segment', 'Match distance to wind, heat and the return.'], ['Read the lake as infrastructure', 'Notice bridges, wetlands and civic views without forcing a full loop.'], ['Return to the same node', 'Avoid ending across the lake without a transport contract.']],
        risks: [['Wind and exposure', 'Cycling and walking can become difficult quickly.'], ['Event detours', 'Festivals and works reroute lake paths.'], ['Water safety', 'Use designated activities and obey water-quality or closure notices.']],
        duration: 'Allow most of a day for the museum and one lake segment.', combine: 'Pair with a short Parliamentary Triangle stop, not Namadgi.', verify: 'Check museum entry, path closures, bike availability, weather, water notices and buses.'
      }),
      g({
        slug: 'war-memorial-mount-ainslie', name: 'Australian War Memorial & Mount Ainslie', motif: 'memory and sightline', instrument: 'memory-sightline', imageQuery: 'Australian War Memorial Mount Ainslie Canberra view', imageAlt: 'Australian War Memorial aligned toward Parliament House in Canberra',
        summary: 'A solemn collection and landscape sightline treated with appropriate time, ceremony awareness and a safe Mount Ainslie route.',
        orientation: 'use the land axis from the Memorial toward Parliament while keeping the collection and mountain lookout as different experiences.', access: 'Book or confirm memorial entry and decide whether Mount Ainslie is reached by road or an open graded walk.', sequence: 'Give the memorial an uninterrupted visit, pause after the collection and approach the lookout only with sufficient weather and daylight.', boundary: 'Commemoration is not spectacle. Keep ceremony, personal grief, memorial names and restricted photography free from casual performance.',
        stages: [['Prepare for the collection', 'Confirm entry, galleries and any ceremony affecting access.'], ['Move through at a quiet pace', 'Leave space for visitors with personal connections.'], ['Choose road or walking ascent', 'Match the Mount Ainslie route to heat, fire and ability.'], ['Close at the sightline', 'Return before darkness or event traffic.']],
        risks: [['Emotional weight', 'Build a pause after the memorial rather than stacking entertainment immediately.'], ['Heat and fire', 'The mountain track can close or become unsafe.'], ['Ceremony access', 'Official events change entrances and photography.']],
        duration: 'Allow most of a day when combining the memorial with Mount Ainslie.', combine: 'Pair with the civic axis only if the group can maintain respectful attention.', verify: 'Check memorial bookings and ceremonies, track status, fire danger, weather, road and sunset.'
      }),
      g({
        slug: 'namadgi-national-park', name: 'Namadgi National Park', motif: 'bush-country threshold', instrument: 'bush-register', imageQuery: 'Namadgi National Park Australian Capital Territory mountains', imageAlt: 'Mountain and grassland landscape in Namadgi National Park',
        summary: 'A remote ACT park day built from Ngunnawal Country guidance, road and track status, fire danger and a conservative turnaround.',
        orientation: 'choose one visitor-area or track system and understand the distance from Canberra services.', access: 'Drive a suitable vehicle or use a qualified operator, carrying offline navigation and supplies.', sequence: 'Check current park information, use one open walk, keep cultural places protected and return before wildlife and low light.', boundary: 'Namadgi is Ngunnawal Country with cultural sites and recovering landscapes. Stay out of closed areas and use authoritative interpretation.',
        stages: [['Check the park gate', 'Read road, track, fire and cultural-site closures before departure.'], ['Select one route', 'Match grade, water and distance to the group.'], ['Walk with Country awareness', 'Stay on formed routes and leave artefacts and sensitive places untouched.'], ['Return before dusk', 'Preserve road visibility and emergency margin.']],
        risks: [['Fire and weather', 'Conditions can close the park rapidly.'], ['Limited communication', 'Mobile coverage and services are sparse.'], ['Cultural-site damage', 'Never enter closed rock-art or archaeological areas.']],
        duration: 'Use a full day for one route; remote or overnight walks need expedition preparation.', combine: 'Keep Namadgi separate from city museums and Kosciuszko.', verify: 'Check ACT Parks alerts, fire danger, road, track, weather, water and emergency communication.'
      }),
      g({
        slug: 'snowy-mountains-kosciuszko', name: 'Snowy Mountains & Kosciuszko', motif: 'alpine season gate', instrument: 'altitude-board', imageQuery: 'Kosciuszko National Park Snowy Mountains Australia', imageAlt: 'Alpine landscape in Kosciuszko National Park',
        summary: 'An alpine route that begins in a gateway such as Jindabyne and changes completely between snow season, summer walking and severe weather.',
        orientation: 'select the gateway, season and exact open lift, road or walking route before naming a summit objective.', access: 'Drive or use scheduled alpine transport with park entry, tyre, chain and seasonal rules understood.', sequence: 'Check alpine forecasts, use the most constrained transport first, walk only the open graded route and descend before weather or lift closure.', boundary: 'Alpine vegetation is fragile and high-country weather is serious. Stay on paths, follow resort and park rules and respect cultural significance.',
        stages: [['Declare the season', 'Snow, shoulder and summer conditions require different equipment and routes.'], ['Confirm the gateway', 'Match Jindabyne, Thredbo or Charlotte Pass to the exact objective.'], ['Use the open ascent', 'Check lift, road and track status before climbing.'], ['Descend with reserve', 'Turn around for wind, cloud, fatigue or transport cutoff.']],
        risks: [['Alpine weather', 'Cold, lightning, wind and whiteout can arrive quickly.'], ['Seasonal road rules', 'Chains, closures and park entry conditions can apply.'], ['Summit overconfidence', 'A famous highest point is still a remote alpine walk.']],
        duration: 'Stay at least two nights in the alpine gateway; longer in winter or uncertain weather.', combine: 'Do not pair with a Canberra museum day. Treat it as a separate regional leg.', verify: 'Check NSW National Parks, alpine forecast, road and chain rules, lift operations, track status, equipment and turnaround.'
      })
    ]
  })
];
