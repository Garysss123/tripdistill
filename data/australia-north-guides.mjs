import { australiaGuide as g, defineAustraliaCluster as cluster } from './australia-guide-builder.mjs';

export const australiaNorthClusters = [
  cluster({
    slug: 'cairns-wet-tropics',
    name: 'Cairns & Wet Tropics',
    region: 'Queensland',
    band: 'tropics',
    family: 'reef-rainforest-transect',
    label: 'REEF GATEWAY / RAINFOREST / TROPICAL ROADS',
    tagline: 'Keep reef weather, rainforest access and tropical distance on separate forecasts.',
    hubIntro: 'Cairns is a practical gateway rather than the whole tropical experience. The city waterfront, Kuranda corridor, northern beaches, Port Douglas and Daintree rainforest each depend on different operators, roads, heat and storm conditions. Five chapters make reef departure, rail or cableway identity, crocodile-aware water boundaries and Wet Tropics protection visible before the day begins.',
    stay: 'Base in Cairns for vessel choice and urban transport, Port Douglas for northern reef and coast, or the Daintree only when road, food and power constraints are understood.',
    transfer: 'Flights and rail reach Cairns; regional coaches, rental cars and operators serve the coast and tablelands. The Daintree crossing and remote roads must be checked directly.',
    sources: [
      ['https://www.australia.com/en/places/cairns-and-surrounds/guide-to-cairns.html', 'Tourism Australia — Cairns'],
      ['https://tropicalnorthqueensland.org.au/', 'Tourism Tropical North Queensland — official visitor guide'],
      ['https://www.wettropics.gov.au/', 'Wet Tropics Management Authority'],
      ['https://parks.desi.qld.gov.au/parks/daintree', 'Queensland Parks — Daintree National Park'],
      ['https://www.gbrmpa.gov.au/visit', 'Great Barrier Reef Marine Park Authority — visiting the reef']
    ],
    guides: [
      g({
        slug: 'cairns-esplanade-reef-terminal', name: 'Cairns Esplanade & Reef Terminal', motif: 'city-to-vessel threshold', instrument: 'departure-board', imageQuery: 'Cairns Esplanade marina Queensland', imageAlt: 'Cairns waterfront and marina in tropical Queensland',
        summary: 'A gateway day connecting the lagoon, waterfront and reef terminal while operator check-in and tropical heat remain the real anchors.',
        orientation: 'use the Reef Fleet Terminal and Esplanade Lagoon as separate transport and recreation nodes.', access: 'Arrive in central Cairns on foot, bus or hotel transfer and locate the exact operator desk before departure morning.', sequence: 'Reconnoitre the terminal, use the managed lagoon or shaded waterfront, add one cultural stop and finish early before a vessel day.', boundary: 'The mudflat and estuary are wildlife habitat, not a swimming beach. Use the managed lagoon and follow crocodile warning signs.',
        stages: [['Find the operator desk', 'Confirm vessel name, berth, check-in and medical or equipment forms.'], ['Read the waterfront', 'Distinguish managed lagoon, promenade and tidal habitat.'], ['Use one cool interior', 'Add a gallery or visitor centre during peak heat.'], ['Prepare for departure', 'Sleep with transport, medication and weather questions resolved.']],
        risks: [['Heat and UV', 'Humidity and sun require water, shade and an early pace.'], ['Crocodile habitat', 'Never enter tidal creeks or mudflats and obey every warning.'], ['Wrong terminal', 'Operators and vessels can use different desks and timings.']],
        duration: 'Use half a day before or after a reef trip; one full city day is enough for the core.', combine: 'Pair with a booked reef day only through an overnight, not on the same arrival morning.', verify: 'Check operator desk, marine forecast, heat, lagoon hours, crocodile warnings and airport transfer.'
      }),
      g({
        slug: 'kuranda-rail-skyrail', name: 'Kuranda Rail & Rainforest Cableway', motif: 'two-mode rainforest crossing', instrument: 'two-way-ticket', imageQuery: 'Kuranda Scenic Railway Barron Gorge Queensland', imageAlt: 'Kuranda Scenic Railway passing through tropical rainforest',
        summary: 'A two-mode rainforest journey whose rail station, cableway terminal, coach transfer and weather cancellation are matched before purchase.',
        orientation: 'treat the scenic railway and cableway as directional components with different terminals, not interchangeable return rides.', access: 'Book the exact combination and confirm hotel transfer, Cairns or Freshwater rail boarding and Smithfield connections.', sequence: 'Use the time-sensitive mode first, keep Kuranda village contained, stop only at managed rainforest platforms and take the booked return.', boundary: 'The corridor crosses ancient rainforest and living Djabugay Country. Use recognised cultural interpretation and stay within managed access.',
        stages: [['Audit the ticket', 'Match date, direction, station, terminal and transfers.'], ['Ride the first mode', 'Arrive before check-in and follow operator safety instructions.'], ['Keep Kuranda focused', 'Choose one cultural, market or nature experience rather than chasing every attraction.'], ['Complete the second mode', 'Return through the confirmed terminal before coach or rail cutoff.']],
        risks: [['Terminal mismatch', 'Cairns, Freshwater and Smithfield are not one station.'], ['Weather disruption', 'Heavy rain, wind or maintenance can alter either mode.'], ['Tourist wildlife ethics', 'Use accredited experiences and avoid handling or staged contact that compromises animals.']],
        duration: 'Reserve a full day and leave the evening flexible.', combine: 'Do not add Port Douglas or a reef cruise; Cairns Esplanade is the sensible finish.', verify: 'Confirm ticket components, station, transfers, weather, operator alerts, accessibility and return time.'
      }),
      g({
        slug: 'northern-beaches-palm-cove', name: 'Northern Beaches & Palm Cove', motif: 'patrol-and-stinger coast', instrument: 'beach-safety-strip', imageQuery: 'Palm Cove beach Cairns Queensland', imageAlt: 'Palm-lined beach at Palm Cove north of Cairns',
        summary: 'A tropical beach day selected by patrol, marine stinger advice, crocodile warnings and bus or road return rather than postcard calm.',
        orientation: 'choose one northern beach and locate the patrolled or netted swimming area before entering the sand.', access: 'Use the current bus route, hotel transfer or legal parking and know the last service back to Cairns.', sequence: 'Read the beach signs, swim only where advised, use shade through midday and return before storms or darkness.', boundary: 'Never enter creeks, estuaries or unpatrolled water. Wildlife and stinger controls are not optional even when others ignore them.',
        stages: [['Choose the managed beach', 'Verify patrol, net or current local swimming advice.'], ['Read every warning', 'Check crocodile, stinger, surf and water-quality signs.'], ['Stay inside the safe window', 'Use sun protection and leave the water when patrol or weather changes.'], ['Take the known return', 'Reach the bus or vehicle before tropical darkness and storm.']],
        risks: [['Marine stingers', 'Seasonal advice and protective enclosures must be followed.'], ['Crocodiles', 'Keep away from creek mouths and obey all warnings.'], ['Tropical storms', 'Lightning and intense rain can arrive quickly.']],
        duration: 'Half a day is enough for one beach; use a full day only with a nearby meal and shade.', combine: 'Pair with Cairns or Port Douglas on the same road, not the Daintree.', verify: 'Check Beachsafe, local patrol, stinger and crocodile advice, bus service, storm and UV.'
      }),
      g({
        slug: 'port-douglas-mossman', name: 'Port Douglas & Mossman Gorge', motif: 'coast-to-gorge gateway', instrument: 'gateway-pair', imageQuery: 'Mossman Gorge Daintree rainforest Queensland', imageAlt: 'Rainforest and clear water at Mossman Gorge',
        summary: 'A northern base pairing a walkable coastal town with a managed rainforest gorge while shuttle, swimming advice and road time stay explicit.',
        orientation: 'use Port Douglas for services and Mossman Gorge Centre as the required rainforest gateway.', access: 'Drive or use a booked transfer north, then follow the current parking and shuttle system for the gorge.', sequence: 'Visit the gorge early through its managed entrance, return for a town or coast afternoon and avoid another long road leg.', boundary: 'Mossman Gorge is Kuku Yalanji Country. Use official interpretation, respect cultural guidance and never assume the river is safe to swim.',
        stages: [['Reach the centre', 'Confirm opening, shuttle, accessibility and cultural experiences.'], ['Read the gorge conditions', 'Follow warning signs for current, rain and track access.'], ['Walk one rainforest loop', 'Stay on the formed route and leave rocks and water undisturbed.'], ['Return to the coast base', 'Finish in Port Douglas without extending into the Daintree after dusk.']],
        risks: [['Fast water', 'Gorge current and submerged hazards can be fatal; obey no-swim advice.'], ['Shuttle timing', 'The managed transfer has operating windows and capacity.'], ['Road fatigue', 'The coastal road is winding and busy; avoid late extra distance.']],
        duration: 'Use a full day from Port Douglas or two nights for a relaxed base.', combine: 'Pair with Port Douglas town, not Cape Tribulation on the same day.', verify: 'Check Mossman Gorge Centre, shuttle, river warnings, road status, heat, rain and cultural-tour booking.'
      }),
      g({
        slug: 'daintree-cape-tribulation', name: 'Daintree & Cape Tribulation', motif: 'river-crossing rainforest road', instrument: 'crossing-gate', imageQuery: 'Daintree rainforest Cape Tribulation Queensland', imageAlt: 'Daintree rainforest meeting the coast near Cape Tribulation',
        summary: 'A remote rainforest-coast journey built around the Daintree River crossing, road condition, limited services and an overnight rather than a rushed return.',
        orientation: 'treat the ferry crossing, forest boardwalks, beach edges and accommodation as separate stages north of the river.', access: 'Check the river crossing, road works, vehicle suitability, fuel and accommodation before leaving Mossman.', sequence: 'Cross early, select two managed boardwalk or visitor stops, avoid unmarked water access and stay overnight or turn back well before dusk.', boundary: 'This is Eastern Kuku Yalanji Country and World Heritage rainforest. Follow cultural guidance, crocodile warnings, cassowary speed and biosecurity.',
        stages: [['Confirm the crossing', 'Check operating status, queues and payment before committing north.'], ['Choose managed rainforest access', 'Use signed boardwalks and recognised cultural experiences.'], ['Keep beaches observational', 'Stay away from creek mouths and unpatrolled water.'], ['Close before the road darkens', 'Reach accommodation or the ferry with daylight and fuel reserve.']],
        risks: [['Crocodile habitat', 'Do not swim in beaches, rivers or creeks unless current official advice explicitly permits it.'], ['Cassowaries and roads', 'Drive slowly and never feed or crowd wildlife.'], ['Flood and isolation', 'Heavy rain can affect roads, ferry and communications.']],
        duration: 'Stay at least one night north of the river; two gives a real weather buffer.', combine: 'Pair with Port Douglas before or after, not as a single Cairns day dash.', verify: 'Check ferry, road, flood and weather alerts, accommodation, fuel, crocodile and cassowary guidance.'
      })
    ]
  }),

  cluster({
    slug: 'whitsundays-great-barrier-reef',
    name: 'Whitsundays & Great Barrier Reef',
    region: 'Queensland',
    band: 'tropics',
    family: 'coral-forecast-chart',
    label: 'ISLANDS / VESSELS / REEF CONDITION',
    tagline: 'Name the vessel, reef zone and return before promising blue water.',
    hubIntro: 'The Great Barrier Reef is not one excursion. Airlie Beach, Whitehaven, resort islands, outer-reef platforms and the Townsville–Magnetic Island corridor use different ports, vessels, weather limits and marine-park practices. Five chapters make operator identity, swimming ability, coral conduct and cancellation terms part of the visible plan.',
    stay: 'Choose the mainland or island base that serves the booked vessel. A beautiful island address can make another reef departure impractical.',
    transfer: 'Flights, coaches and rail reach several gateways, but every boat uses a named marina or terminal. Confirm baggage, check-in, sea-state and return directly.',
    sources: [
      ['https://www.australia.com/en/places/whitsundays-and-surrounds/guide-to-the-whitsundays.html', 'Tourism Australia — Whitsundays'],
      ['https://www.tourismwhitsundays.com.au/', 'Tourism Whitsundays — official visitor guide'],
      ['https://www.gbrmpa.gov.au/visit', 'Great Barrier Reef Marine Park Authority — visitor guidance'],
      ['https://parks.desi.qld.gov.au/parks/whitsunday-islands', 'Queensland Parks — Whitsunday Islands'],
      ['https://parks.desi.qld.gov.au/parks/magnetic-island', 'Queensland Parks — Magnetic Island']
    ],
    guides: [
      g({
        slug: 'airlie-beach-shute-harbour', name: 'Airlie Beach & Shute Harbour', motif: 'mainland vessel board', instrument: 'marina-board', imageQuery: 'Airlie Beach Shute Harbour Whitsundays', imageAlt: 'Airlie Beach marina and Whitsunday coast',
        summary: 'A mainland gateway day that distinguishes Port of Airlie, Coral Sea Marina and Shute Harbour before any island booking.',
        orientation: 'map the exact marina, lagoon, bus stop and accommodation rather than treating Airlie as one dock.', access: 'Reach the correct terminal with baggage allowance and check-in time confirmed by the operator.', sequence: 'Reconnoitre the departure point, use the managed lagoon or town walk, prepare equipment and keep the evening quiet before the sea day.', boundary: 'The lagoon is managed swimming; surrounding tidal coast is not automatically safe. Respect marina security and working docks.',
        stages: [['Name the marina', 'Match the operator to the exact terminal and berth.'], ['Test the land transfer', 'Walk or ride the real route with baggage assumptions checked.'], ['Use the managed waterfront', 'Stay within signed recreation areas and shade.'], ['Prepare the vessel day', 'Resolve medication, equipment, weather and cancellation contacts.']],
        risks: [['Wrong departure point', 'Airlie has multiple marinas and Shute Harbour is separate.'], ['Heat and stingers', 'Follow lagoon and marine-stinger advice.'], ['Late arrival', 'Regional flights and coaches need a buffer before a boat booking.']],
        duration: 'One gateway night before and after a major vessel trip is prudent.', combine: 'Pair with the booked Whitsunday trip, not another distant reef gateway.', verify: 'Confirm marina, check-in, transfer, baggage, marine forecast, stinger advice and cancellation terms.'
      }),
      g({
        slug: 'whitehaven-hill-inlet', name: 'Whitehaven Beach & Hill Inlet', motif: 'tide-window landing', instrument: 'tide-window', imageQuery: 'Whitehaven Beach Hill Inlet Whitsundays', imageAlt: 'White silica sand and turquoise water at Whitehaven Beach',
        summary: 'A boat or aircraft excursion whose landing site, tide view, track access and beach conduct depend on the exact operator and conditions.',
        orientation: 'distinguish southern Whitehaven landings from Hill Inlet access at the northern end.', access: 'Book a licensed operator and confirm vessel, transfer craft, walking, meals and beach time.', sequence: 'Follow the operator landing, use only open tracks and platforms, swim under current advice and return on the named vessel.', boundary: 'Silica dunes and marine habitat are protected. Do not remove sand, leave tracks through vegetation or approach wildlife.',
        stages: [['Audit the itinerary', 'Confirm which end of Whitehaven and whether Hill Inlet is actually included.'], ['Land under instruction', 'Use the crew’s transfer and footwear guidance.'], ['Walk the formal viewpoint', 'Stay on boardwalks and respect capacity.'], ['Return to the same vessel', 'Track tender and boarding time rather than drifting along the beach.']],
        risks: [['Tender transfer', 'Wet landings and moving boats require mobility disclosure.'], ['Heat and exposure', 'Shade and water can be limited.'], ['Tide and weather', 'The visual pattern and landing can change with conditions.']],
        duration: 'Use a full-day trip or a carefully described half-day; do not assume both island ends fit.', combine: 'Pair only with the operator’s included route.', verify: 'Check operator licence, landing, tide, marine forecast, stinger advice, mobility and return time.'
      }),
      g({
        slug: 'hamilton-island', name: 'Hamilton Island', motif: 'resort-island transport loop', instrument: 'island-loop', imageQuery: 'Hamilton Island Whitsundays Queensland view', imageAlt: 'Hamilton Island and the Whitsunday waters',
        summary: 'A resort-island stay planned around airport or ferry arrival, accommodation transport, buggy rules and the difference between island and reef days.',
        orientation: 'use the airport, marina and accommodation zone as the island triangle.', access: 'Confirm flight or ferry terminal, baggage transfer, check-in and any buggy licence or booking.', sequence: 'Settle the island first, choose one beach or trail, reserve a separate weather day for reef or sailing and protect the outbound connection.', boundary: 'Resort access does not erase marine-park, wildlife, trail and road rules. Keep wallabies and birds unfed.',
        stages: [['Resolve arrival transfer', 'Match luggage and accommodation to the airport or marina.'], ['Learn the island transport', 'Use shuttle or buggy only within current licence and safety rules.'], ['Choose one island day', 'Keep beach, trail or pool as the primary objective.'], ['Protect the departure', 'Return vehicle and reach the terminal before cutoff.']],
        risks: [['Buggy incidents', 'Seatbelts, licences, road rules and alcohol limits apply.'], ['Weather cancellation', 'Island stay does not guarantee reef vessels or flights.'], ['Wildlife feeding', 'Do not feed birds or wallabies and secure food.']],
        duration: 'Three nights allow one island day and one condition-dependent excursion.', combine: 'Pair with one Whitsunday operator, not a mainland day-trip checklist.', verify: 'Check ferry or flight, baggage, accommodation transfer, buggy rules, marine forecast and cancellation.'
      }),
      g({
        slug: 'outer-reef-day', name: 'Outer Reef Day', motif: 'marine operator contract', instrument: 'reef-checklist', imageQuery: 'Great Barrier Reef coral Queensland underwater', imageAlt: 'Coral habitat in the Great Barrier Reef',
        summary: 'A reef excursion selected by vessel, site type, swimming ability, environmental practice and cancellation policy rather than lowest headline price.',
        orientation: 'compare pontoon, small-vessel snorkel and dive itineraries as different products.', access: 'Disclose medical and mobility needs, arrive at the named terminal and complete forms honestly.', sequence: 'Attend the safety briefing, enter only through managed points, keep coral untouched and return to the vessel well before final call.', boundary: 'Coral is living habitat. No standing, touching, collecting, feeding or wildlife pursuit is acceptable.',
        stages: [['Choose the right vessel', 'Match sea tolerance, group size and activity to the operator.'], ['Complete the briefing', 'Understand signals, buddy system, flotation and site limits.'], ['Enter with control', 'Use the designated platform or tender and maintain buoyancy.'], ['Count back aboard', 'Respond to crew checks and protect the return transfer.']],
        risks: [['Seasickness', 'Use medical advice and choose vessel conditions realistically.'], ['Swimming mismatch', 'Open water and current may exceed pool ability; use flotation or stay aboard.'], ['Coral damage', 'Poor buoyancy and standing cause harm; follow the code.']],
        duration: 'Reserve a full day plus a gateway night before any onward flight.', combine: 'Do not add another island landing unless the operator itinerary already includes it.', verify: 'Check operator accreditation, site, vessel, medical rules, forecast, cancellation, stingers and flight-after-dive guidance.'
      }),
      g({
        slug: 'townsville-magnetic-island', name: 'Townsville & Magnetic Island', motif: 'city-to-island ferry spine', instrument: 'ferry-spine', imageQuery: 'Magnetic Island Queensland coast Townsville', imageAlt: 'Rocky coast and blue water on Magnetic Island',
        summary: 'A separate central-reef gateway linking Townsville’s terminal to Magnetic Island buses, bays and national-park tracks.',
        orientation: 'use Nelly Bay terminal as the island hinge and select one bay or Forts-area route.', access: 'Confirm passenger or vehicle ferry, terminal, island bus and accommodation transfer.', sequence: 'Cross early, connect by bus, walk or swim only under current conditions and return before the final useful service.', boundary: 'Yunbenun/Magnetic Island is Wulgurukaba Country with koala habitat, forts heritage and fire-prone tracks. Keep wildlife distance and obey closures.',
        stages: [['Choose passenger or vehicle', 'Match the correct operator and terminal.'], ['Connect from Nelly Bay', 'Read the bus timetable before leaving the ferry.'], ['Use one island sector', 'Choose a bay or open track according to heat and fire.'], ['Return through the terminal', 'Protect the bus-to-ferry connection.']],
        risks: [['Heat and fire', 'Exposed tracks can close or become unsafe.'], ['Wildlife on roads', 'Drive slowly and never crowd koalas.'], ['Ferry connection', 'Island buses and ferries require an actual timetable match.']],
        duration: 'One full day is possible; two nights make the island useful.', combine: 'Keep it separate from Airlie Beach and Whitehaven due to distance.', verify: 'Check ferry, bus, park alerts, fire danger, patrols, stingers, heat and return.'
      })
    ]
  }),

  cluster({
    slug: 'darwin-top-end',
    name: 'Darwin & the Top End',
    region: 'Northern Territory',
    band: 'tropics',
    family: 'wet-dry-season-gate',
    label: 'WET–DRY CLOCK / FLOODPLAINS / CULTURAL COUNTRY',
    tagline: 'Let season, road and Traditional Owner guidance decide what opens.',
    hubIntro: 'Darwin and the Top End change profoundly between wet and dry seasons. The waterfront, city culture, Litchfield, Kakadu and Nitmiluk operate across crocodile habitat, floodplain roads, fire and long-distance driving. Five chapters make swimming boundaries, park passes, cultural access and seasonal closure visible before the itinerary leaves town.',
    stay: 'Use Darwin for arrival and city context, then stay near the park region being visited. Daily returns from the capital waste daylight and driver attention.',
    transfer: 'Flights reach Darwin; parks require a suitable vehicle or licensed operator. Road, fuel, pass, permit and seasonal-access checks belong before every remote leg.',
    sources: [
      ['https://www.australia.com/en/places/darwin-and-surrounds/guide-to-darwin.html', 'Tourism Australia — Darwin'],
      ['https://northernterritory.com/darwin-and-surrounds', 'Tourism NT — Darwin and surrounds'],
      ['https://nt.gov.au/parks/find-a-park/litchfield-national-park', 'Northern Territory Parks — Litchfield'],
      ['https://parksaustralia.gov.au/kakadu/', 'Parks Australia — Kakadu National Park'],
      ['https://nt.gov.au/parks/find-a-park/nitmiluk-national-park', 'Northern Territory Parks — Nitmiluk']
    ],
    guides: [
      g({
        slug: 'darwin-waterfront-city', name: 'Darwin Waterfront & City', motif: 'tropical arrival ledger', instrument: 'wet-dry-board', imageQuery: 'Darwin waterfront Northern Territory Australia', imageAlt: 'Darwin waterfront in the tropical Top End',
        summary: 'A city arrival chapter using managed waterfront swimming, museums and sunset space while crocodile and heat boundaries remain explicit.',
        orientation: 'use the waterfront, city centre and museum precinct as separate heat-managed nodes.', access: 'Arrive by airport transfer or bus and keep a reliable late ride option.', sequence: 'Use a cool cultural interior, swim only in managed facilities, take a sunset edge and finish before storm or nightlife dispersal.', boundary: 'Darwin Harbour and natural waterways are crocodile and marine-stinger habitat. Use only designated managed swimming areas.',
        stages: [['Set the tropical clock', 'Plan outdoor movement outside peak heat and storm risk.'], ['Choose one collection', 'Give the museum or heritage room enough attention.'], ['Use managed water', 'Enter only the lagoon or pool currently declared safe.'], ['Finish at a known pickup', 'Avoid unlit foreshore wandering.']],
        risks: [['Crocodiles and stingers', 'Never infer safe swimming from other people in natural water.'], ['Heat stress', 'Hydration, shade and rest are essential.'], ['Monsoon storm', 'Lightning and intense rain can disrupt paths quickly.']],
        duration: 'One to two days gives city context before a park journey.', combine: 'Pair with an overnight departure to one park, not a same-day remote return.', verify: 'Check managed swimming status, heat, storm, museum hours, bus or pickup and park preparation.'
      }),
      g({
        slug: 'litchfield-national-park', name: 'Litchfield National Park', motif: 'waterhole safety circuit', instrument: 'waterhole-gate', imageQuery: 'Litchfield National Park waterfall Northern Territory', imageAlt: 'Waterfall and plunge pool in Litchfield National Park',
        summary: 'A waterfall circuit that uses current open-and-safe notices, road condition and a single swimming decision instead of assuming every pool is available.',
        orientation: 'select one park sector and distinguish lookout, walk and officially open swimming site.', access: 'Drive a suitable vehicle or use a licensed operator, carrying fuel, water and offline information.', sequence: 'Read the park board, visit the most condition-sensitive site first, swim only where explicitly open and return before dusk.', boundary: 'Crocodile management, cultural closures and seasonal access determine use. Never cross a closed gate or water warning.',
        stages: [['Read the open list', 'Check the same-day park notice for roads, walks and swimming.'], ['Choose one falls system', 'Avoid spending the day in repeated car-park hops.'], ['Enter water only if open', 'Follow rangers and signs without exception.'], ['Leave before wildlife hour', 'Protect the road return and driver attention.']],
        risks: [['Crocodile closure', 'A previously safe pool can close; current signs are final.'], ['Wet-season roads', 'Flooding and unsealed access can change vehicle requirements.'], ['Heat and falls', 'Tracks and stone are hot and slippery.']],
        duration: 'Use a full day from Darwin or stay nearby for a calmer circuit.', combine: 'Do not combine with Kakadu or Nitmiluk.', verify: 'Check NT Parks openings, swimming status, roads, fire, storm, vehicle and sunset.'
      }),
      g({
        slug: 'kakadu-nourlangie-ubirr', name: 'Kakadu: Burrungkuy & Ubirr', motif: 'rock-country access day', instrument: 'cultural-access', imageQuery: 'Ubirr Kakadu National Park lookout Australia', imageAlt: 'Floodplain view from Ubirr in Kakadu National Park',
        summary: 'A northern Kakadu chapter centered on official cultural interpretation, rock-art access, floodplain views and seasonal road gates.',
        orientation: 'use Jabiru or a nearby park base and treat Burrungkuy and Ubirr as separate long road and attention blocks.', access: 'Obtain the current park pass, check access roads and use a ranger program or recognised guide when available.', sequence: 'Visit one art and cultural site slowly, use a formal lookout only in safe conditions and avoid racing to both at sunset.', boundary: 'Kakadu is Aboriginal land jointly managed with Traditional Owners. Rock art, sacred places and closure directions require absolute respect.',
        stages: [['Begin with park guidance', 'Check Bowali or official notices, pass and seasonal access.'], ['Read one cultural site', 'Follow marked routes and authoritative interpretation.'], ['Use the floodplain lookout', 'Stay on open paths and turn back for heat, storm or fire.'], ['Return to the park base', 'Avoid wildlife-heavy night driving.']],
        risks: [['Seasonal access', 'Flooding can close roads and shorten opening hours.'], ['Cultural harm', 'Never touch rock surfaces or enter closed areas.'], ['Heat and distance', 'Remote walks and roads require water and conservative timing.']],
        duration: 'Two or more nights in Kakadu are required; this chapter takes one full day.', combine: 'Pair with Yellow Water on another day, not Litchfield.', verify: 'Check Kakadu pass, cultural and road closures, ranger programs, fire, weather, water and fuel.'
      }),
      g({
        slug: 'kakadu-yellow-water', name: 'Kakadu: Yellow Water & South Alligator', motif: 'wetland vessel contract', instrument: 'floodplain-clock', imageQuery: 'Yellow Water Kakadu wetlands Northern Territory', imageAlt: 'Wetlands and wildlife at Yellow Water in Kakadu National Park',
        summary: 'A wetland day whose cruise, lodge base, road and crocodile boundary are matched to seasonal floodplain conditions.',
        orientation: 'use Cooinda as the operating base and keep wetland cruise and land walks under separate safety rules.', access: 'Book the exact cruise, confirm check-in and road access and stay nearby rather than relying on a Darwin return.', sequence: 'Use the condition-sensitive cruise first, rest through heat, add one open cultural or wetland walk and return before dark.', boundary: 'Wildlife viewing must not become pursuit. Stay inside vessels and formal paths and follow Traditional Owner and ranger guidance.',
        stages: [['Confirm the cruise', 'Match departure, check-in, accessibility and cancellation terms.'], ['Enter the wetland with crew', 'Remain within the vessel and follow wildlife instructions.'], ['Rest during peak heat', 'Do not fill the gap with an exposed remote walk.'], ['Use one open land stop', 'Choose a formal route and return to accommodation early.']],
        risks: [['Crocodiles', 'Never approach banks or enter floodplain water.'], ['Flood and road', 'Season changes can alter access and cruise routes.'], ['Wildlife disturbance', 'Keep noise, drones and proximity within rules.']],
        duration: 'Use one full day within a multi-night Kakadu stay.', combine: 'Pair with Burrungkuy or Ubirr on a separate day.', verify: 'Check cruise, road, Kakadu alerts, heat, storm, fire, accommodation and wildlife guidance.'
      }),
      g({
        slug: 'katherine-nitmiluk', name: 'Katherine & Nitmiluk', motif: 'gorge vessel and heat plan', instrument: 'gorge-section', imageQuery: 'Nitmiluk Katherine Gorge Northern Territory', imageAlt: 'Sandstone gorge and river in Nitmiluk National Park',
        summary: 'A gorge-country visit built around Jawoyn guidance, cruise or paddle identity, heat, water level and a Katherine base.',
        orientation: 'use Katherine for services and Nitmiluk visitor facilities as the gorge threshold.', access: 'Drive, take regional transport or use a tour, then check the exact cruise, walk or paddle departure.', sequence: 'Start with the booked water or guided activity, rest in heat, attempt one short open walk and stay locally.', boundary: 'Nitmiluk is Jawoyn Country. Follow cultural interpretation, water and crocodile controls, and do not enter closed gorges or art sites.',
        stages: [['Arrive at the visitor node', 'Confirm activity, check-in, water and track conditions.'], ['Take the booked gorge route', 'Follow operator and ranger instructions.'], ['Keep the heat gap empty', 'Rest rather than forcing an exposed midday walk.'], ['Return to Katherine or camp', 'Avoid a fatigued long drive.']],
        risks: [['Heat illness', 'Gorge walls and tracks become severe; carry water and shorten the day.'], ['Water and crocodile rules', 'Seasonal management determines paddling and swimming.'], ['Long road distance', 'Darwin is not a casual evening return.']],
        duration: 'Stay at least one night; two supports a cruise and a separate walk.', combine: 'Pair with a Top End road trip, not a Kakadu same-day excursion.', verify: 'Check Nitmiluk activity, road, water and crocodile advice, heat, fire, camping and fuel.'
      })
    ]
  }),

  cluster({
    slug: 'red-centre',
    name: 'Red Centre',
    region: 'Northern Territory',
    band: 'interior',
    family: 'desert-light-compass',
    label: 'DESERT DISTANCE / CULTURAL COUNTRY / HEAT',
    tagline: 'Give Uluṟu–Kata Tjuṯa, Watarrka, Tjoritja and Mparntwe separate bases; let Country, distance and heat set the order.',
    hubIntro: 'Use Yulara as the park base, Watarrka as a separate road-trip overnight and Mparntwe as the gateway to Tjoritja. These are not interchangeable day trips: Uluṟu and Kata Tjuṯa have long exposed walks and their own access conditions, while fuel, daylight and road closures govern every remote leg. Begin with Aṉangu or Arrernte visitor guidance, then build each day around the current park and road information.',
    stay: 'If both Uluṟu and Kata Tjuṯa are priorities, reserve at least two full days from Yulara and give each its own weather window. Keep the Kings Canyon Rim Walk beside a Watarrka overnight; use Mparntwe for town services and a separate Tjoritja day. Moving bases is part of the itinerary, not spare time.',
    transfer: 'Flights serve Alice Springs and Yulara, but air arrival does not shorten the long road legs between the park, Watarrka and Tjoritja. Confirm vehicle suitability, fuel, communications and road notices before each departure; plan daylight and recovery rather than a night return.',
    faq: [
      ['How many days should I give the Red Centre?', 'Use at least two full days from Yulara if you want both Uluṟu and Kata Tjuṯa. Add separate nights for Watarrka and Mparntwe when those chapters are in the route; do not turn the drive between them into an evening transfer.'],
      ['Can I drive from Uluṟu to Watarrka and return after one walk?', 'Keep those chapters on different days with an overnight near Watarrka. The long road leg plus an exposed canyon walk leaves too little daylight and recovery margin for a safe return.'],
      ['What should I recheck before leaving a base?', 'Check current park and cultural closures, heat or wind advice, road conditions, fuel, water, communications and the vehicle requirements for the actual route.']
    ],
    reviewDate: "4 October 2026",
    reviewIsoDate: "2026-10-04",
    stayTeaser: "Use Yulara for Uluṟu and Kata Tjuṯa, stay near Watarrka for Kings Canyon, and base in Mparntwe for Tjoritja.",
    transferTeaser: "Fly into Yulara or Alice Springs, then allow separate daylight road legs between the park regions.",
    sources: [
      ['https://www.australia.com/en/places/alice-springs-and-surrounds/guide-to-alice-springs.html', 'Tourism Australia — Alice Springs'],
      ['https://northernterritory.com/alice-springs-and-surrounds', 'Tourism NT — Alice Springs and surrounds'],
      ['https://nt.gov.au/parks/find-a-park/tjoritja-west-macdonnell-national-park', 'Northern Territory Parks — Tjoritja / West MacDonnell'],
      ['https://nt.gov.au/parks/find-a-park/watarrka-national-park', 'Northern Territory Parks — Watarrka'],
      ['https://parksaustralia.gov.au/uluru/', 'Parks Australia — Uluṟu–Kata Tjuṯa National Park']
    ],
    guides: [
      g({
        slug: 'mparntwe-alice-springs', name: 'Mparntwe / Alice Springs', motif: 'desert gateway and culture', instrument: 'gateway-compass', imageQuery: 'Alice Springs Mparntwe MacDonnell Ranges', imageAlt: 'Road and rocky landscape at Anzac Hill in Alice Springs',
        summary: 'A desert gateway chapter using cultural institutions, town services and a ridge or riverbed view to prepare for remote Country.',
        orientation: 'use central services, the Todd River corridor and one cultural institution as separate anchors.', access: 'Arrive by flight, rail or road and resolve vehicle, fuel, water and communications before leaving town.', sequence: 'Begin with recognised Arrernte cultural context, use one town landscape and finish with expedition supplies and road checks.', boundary: 'Mparntwe is Arrernte Country. Use preferred names and recognised cultural experiences; never enter or photograph restricted places.',
        stages: [['Settle the remote logistics', 'Confirm vehicle, fuel, water, accommodation and emergency contacts.'], ['Choose cultural context', 'Use an Aboriginal-owned or authoritative institution or tour.'], ['Read one town landscape', 'Walk only an open route suited to heat.'], ['Prepare the next road', 'Check conditions before departure, not at the highway edge.']],
        risks: [['Heat', 'Outdoor activity needs early timing and generous water.'], ['Remote-road assumptions', 'Fuel and communication gaps start outside town.'], ['Cultural disrespect', 'Do not publish sensitive sites or repeat unverified stories.']],
        duration: 'Allow two nights before a regional loop.', combine: 'Pair with Tjoritja as a separate day, not a hurried airport transfer.', verify: 'Check road, fuel, heat, fire, cultural operator, vehicle and communication.'
      }),
      g({
        slug: 'tjoritja-west-macdonnell', name: 'Tjoritja / West MacDonnell Ranges', motif: 'gorge-and-water desert road', instrument: 'range-mileage', imageQuery: 'West MacDonnell Ranges Tjoritja Ormiston Gorge', imageAlt: 'Rocky gorge in Tjoritja West MacDonnell National Park',
        summary: 'A westward gorge route that limits stops, identifies safe water advice and keeps fuel, heat and the Mparntwe return visible.',
        orientation: 'select two or three named gorges on one road line and reject the temptation to stop at every sign.', access: 'Drive a suitable vehicle or join a recognised tour with water, fuel and offline communication.', sequence: 'Use the longest walk at first light, visit a second accessible gorge, rest in heat and return before wildlife-heavy dusk.', boundary: 'Tjoritja is Arrernte Country. Sacred places, waterholes and cultural information require current park and Traditional Owner guidance.',
        stages: [['Choose the furthest point', 'Build the day backward from fuel, daylight and the return.'], ['Walk before heat', 'Use one graded route early.'], ['Treat waterholes cautiously', 'Enter only where officially permitted and follow hygiene and cultural rules.'], ['Drive back before dusk', 'Protect visibility and wildlife safety.']],
        risks: [['Heat and dehydration', 'Carry more water than a town walk and turn back early.'], ['Remote roads', 'Tyres, fuel and coverage require preparation.'], ['Waterhole danger', 'Cold, deep or culturally restricted water is not an automatic swim.']],
        duration: 'Use a full day from Mparntwe; stay west for longer walks.', combine: 'Keep Watarrka and Uluru for separate bases.', verify: 'Check NT Parks, road, fuel, temperature, fire, waterhole advice, cultural closure and sunset.'
      }),
      g({
        slug: 'watarrka-kings-canyon', name: 'Watarrka / Kings Canyon', motif: 'rim-walk heat gate', instrument: 'heat-gate', imageQuery: 'Kings Canyon Watarrka Northern Territory rim', imageAlt: 'Sandstone cliffs at Watarrka Kings Canyon',
        summary: 'A remote canyon visit where temperature-based trail closure, steep ascent and nearby accommodation determine whether the rim is attempted.',
        orientation: 'separate the Rim Walk from shorter creek routes and let official heat rules make the decision.', access: 'Stay near Watarrka or arrive with a realistic road plan, full fuel and water; do not drive from Uluru and back around one walk.', sequence: 'Start at first light if the rim is open, turn back at the initial climb when needed and reserve a shorter route as the complete alternative.', boundary: 'Watarrka is culturally significant Luritja and Arrernte Country. Stay on open paths and respect closed or sensitive areas.',
        stages: [['Read the heat gate', 'Check the current forecast and closure threshold.'], ['Choose rim or creek', 'Make the shorter route a valid plan, not a consolation.'], ['Carry the full walk supply', 'Use water, sun protection and footwear appropriate to exposed rock.'], ['Recover before driving', 'Rest, refuel and avoid a fatigued night road.']],
        risks: [['Extreme heat', 'The rim can close and heat illness can become life-threatening.'], ['Steep exposed terrain', 'The initial climb and cliff edges require fitness and conservative behavior.'], ['Long road return', 'Wildlife and fatigue make dusk driving hazardous.']],
        duration: 'Stay one or two nights near Watarrka.', combine: 'Use it as a road-trip leg between bases, never a casual Uluru add-on.', verify: 'Check park alerts, heat closure, road, fuel, accommodation, water and sunrise.'
      }),
      g({
        slug: 'uluru-cultural-landscape', name: 'Uluṟu Cultural Landscape', motif: 'surface, water and respect', orientationTitle: "Choose the right walk", routeTitle: "Plan a half-day", instrument: 'cultural-compass', imageQuery: 'Uluru sunset Northern Territory Australia', imageAlt: 'Uluṟu rising from the central Australian desert',
        summary: "Uluṟu is more than a red landmark: Aṉangu have cared for this living Country for generations, and the park is jointly managed with the Australian Government. Begin with the Cultural Centre, then read the exposed sandstone and water-shaped shade around Muṯitjulu Waterhole.",
        orientation: "Uluṟu and Kata Tjuṯa formed from ancient sediment fans that hardened into rock and later tilted as the land shifted. Uluṟu is mainly arkose sandstone; iron oxide gives its weathered surface the familiar red, while pale patches expose less-weathered rock. Geology is one layer of this place. Tjukurpa is Aṉangu law, knowledge and spiritual philosophy, and it guides the park's joint management. Start with the Tjukurpa Tunnel and multilingual displays at the Cultural Centre; let Aṉangu interpretation set the limits of what is shared.",
        interpretation: "The two short walks end in different landscapes. From the Mala carpark, the public route to Kaṉtju Gorge passes publicly described ancient campsites and a kitchen cave before reaching sheer gorge walls. Kuniya ends at Muṯitjulu Waterhole, one of the area's few permanent water sources, with river red gums, shade and tall grasses. These are visitor-route descriptions, not permission to enter caves or reproduce restricted Tjukurpa. Stay on the open track and use park signs as the authority at each site.",
        access: "Fly to Ayers Rock / Connellan Airport (AYQ) at Yulara, then prearrange a hire car, coach tour or the Uluṟu Hop On Hop Off bus for the park. There is no taxi or other public transport inside the park; the resort shuttle links accommodation with Yulara's town square only. From Alice Springs, Uluṟu is 465 km by road and Parks Australia estimates about 5.5 hours of direct driving before stops. Make that a travel day, not the approach to a long exposed walk.",
        sequence: "For a half-day from Yulara, use the cool morning for the designated Talinguṟu Nyakunytjaku sunrise view, walk Mala to Kaṉtju Gorge before late-morning heat, then spend time at the Cultural Centre and have lunch there. Check that the lookout and Mala track are open for your date, and check the centre's current hours before setting out. Leave the full 10.6 km base loop and Kata Tjuṯa for a separate day.",
        boundary: "Uluṟu and Kata Tjuṯa are living Aṉangu sacred landscapes. Do not climb, leave marked tracks, enter closed areas or photograph culturally sensitive rock features identified by park maps and signs. In marked sensitive areas, Aṉangu ask visitors not to photograph the rock; on the north-east face, they ask for wide, distant views and no detail of the top-left area. Ask before photographing people. Drones are prohibited. Anyone making or publicly displaying their own commercial park photography or video should check Parks Australia's media-permit rules first.",
        reviewDate: "4 October 2026",
        reviewIsoDate: "2026-10-04",
        decisions: [
          [
            "Kuniya | water and shade",
            "The return is 1 km, Grade 2 and 30–45 minutes. It reaches Muṯitjulu Waterhole, where permanent water supports a greener, shadier pocket of river red gums and tall grass. Keep this shorter walk for a limited morning or a day when the longer route is a poor fit."
          ],
          [
            "Mala | campsite and gorge",
            "The return from Mala carpark to Kaṉtju Gorge is 2 km, Grade 2 and about 90 minutes; water and toilets are available. It takes longer than Kuniya and adds publicly described campsites, a kitchen cave and the enclosed gorge."
          ],
          [
            "Base loop | full circuit",
            "The full loop is 10.6 km, Grade 3 and about 3.5 hours. Its sections alternate between greener pockets and exposed ground; start at Mala carpark while it is cool. Some tracks close in summer afternoons, and Parks Australia advises finishing before 11 am in hot weather."
          ]
        ],
        stages: [
          [
            "Settle the arrival",
            "Fly into AYQ at Yulara or make Alice Springs a separate road day. Reserve the park vehicle or tour in advance; the resort shuttle does not serve the park. Carry your park pass and check current alerts before leaving Yulara."
          ],
          [
            "Start at the sunrise area",
            "When the park access schedule permits, go to the designated Talinguṟu Nyakunytjaku viewing area at sunrise. Use the marked paths and follow the posted photography map; allow the quiet view to be the first stop rather than adding Kata Tjuṯa."
          ],
          [
            "Walk Mala before the heat",
            "From Mala carpark, follow the 2 km Grade 2 return path to Kaṉtju Gorge and back; allow about 90 minutes. Read the public signs from the track and check for closure notices. If Mala is closed, use Kuniya only when its route is open and the current heat advice allows it."
          ],
          [
            "Finish at the Cultural Centre",
            "Return for the Tjukurpa Tunnel, multilingual information displays, ranger desk and Aṉangu-owned galleries. Parks Australia recommends at least two hours; Ininti is the only park location selling food and drinks. Check current opening hours, then return to Yulara before adding another drive."
          ]
        ],
        risks: [
          [
            "Heat can close the walk",
            "Summer temperatures can exceed 40°C. Parks Australia recommends walking only in cooler periods, avoiding walks after 11 am in summer, carrying at least 1 litre of water per person per hour and obeying all closures. If the morning is already hot, replace the walk with the Cultural Centre and a designated viewing area."
          ],
          [
            "Transport is not interchangeable",
            "Ayers Rock Resort, the airport, the park entrance and the walking carparks are separate stops. There are no taxis or public transit inside the park; confirm the exact rental, tour or hop-on hop-off return before committing to a trail."
          ],
          [
            "Photography has cultural boundaries",
            "Use the current sensitive-site map and signs. Do not photograph restricted rock features, leave the path for a camera angle or photograph Aṉangu without permission; avoid detail on the north-east face as requested by Traditional Owners."
          ]
        ],
        duration: "Allow at least two hours for the Cultural Centre, as Parks Australia recommends, plus a 90-minute Mala walk, sunrise and the drives from Yulara: a full cool-morning half-day. Give Kata Tjuṯa a separate half or full day. Two full park days from Yulara leave room for the different landscapes and current access windows.",
        combine: "Use the half-day sequence of Talinguṟu Nyakunytjaku, Mala and the Cultural Centre for Uluṟu. Keep Kata Tjuṯa for its own morning or day; the 50 km road separation and exposed walks make it a poor add-on after Mala.",
        verify: "Before departure, check the park pass, park and road alerts, walk and photography maps, heat advice, sunrise-area access, bus or tour schedule, and the Cultural Centre's published hours. Recheck the conditions at the park information desk before starting a walk.",
        faq: [
          [
            "Why does this place matter beyond its geology?",
            "Aṉangu Traditional Owners received Uluṟu-Kata Tjuṯa National Park back in 1985, and jointly manage it with the Australian Government. Parks Australia describes Tjukurpa as traditional law, knowledge and spiritual philosophy guiding care of Country. Begin with the park's public Aṉangu interpretation and do not assume restricted stories are for visitors to repeat."
          ],
          [
            "Which Uluṟu walk fits a short visit?",
            "Kuniya is the shorter 1 km return (30–45 minutes, Grade 2) to the waterhole. Mala is 2 km return (about 90 minutes, Grade 2) to Kaṉtju Gorge. The complete base loop is 10.6 km (about 3.5 hours, Grade 3) and needs a cool morning. Use the current official walk page for changes or closures."
          ],
          [
            "What changes when it is hot?",
            "Do not move an exposed walk to midday. In summer, Parks Australia advises finishing walking before 11 am; carry at least a litre of water per person per hour and obey closure signs. Use the Cultural Centre and a designated viewing area if the walk window is closed."
          ],
          [
            "Where may I take photographs?",
            "Follow the park photography map and every sign. Some sensitive sites prohibit photographs of the rock; elsewhere visitors should stay on marked tracks. On the north-east face, Aṉangu request wide, distant pictures without detail at the top-left. Ask before photographing people, and do not fly a drone."
          ]
        ],
        sources: [
          [
            "https://uluru.gov.au/about/joint-management/",
            "Parks Australia – joint management"
          ],
          [
            "https://uluru.gov.au/discover/nature/geology/",
            "Parks Australia – geology of Uluṟu and Kata Tjuṯa"
          ],
          [
            "https://uluru.gov.au/things-do/cultural-centre/",
            "Parks Australia – Cultural Centre and visitor information"
          ],
          [
            "https://uluru.gov.au/things-do/itineraries/half-one-day-adventures/",
            "Parks Australia – half-day itineraries"
          ],
          [
            "https://uluru.gov.au/plan/getting-here/",
            "Parks Australia – getting to the park"
          ],
          [
            "https://uluru.gov.au/plan/getting-here/getting-around/",
            "Parks Australia – getting around"
          ],
          [
            "https://uluru.gov.au/things-do/activities/walks/uluru-walks/mala-walk/",
            "Parks Australia – Mala walk"
          ],
          [
            "https://uluru.gov.au/things-do/activities/walks/uluru-walks/kuniya-walk-mutitjulu-waterhole/",
            "Parks Australia – Kuniya walk and Muṯitjulu Waterhole"
          ],
          [
            "https://uluru.gov.au/things-do/activities/walks/uluru-walks/uluru-base-walk/",
            "Parks Australia – Uluṟu base walk"
          ],
          [
            "https://uluru.gov.au/things-do/activities/photography/",
            "Parks Australia – photography and cultural protocols"
          ],
          [
            "https://uluru.gov.au/plan/when-come/seasons/",
            "Parks Australia – Aṉangu seasons"
          ],
          [
            "https://uluru.gov.au/plan/plan-your-trip/staying-safe/",
            "Parks Australia – heat and walking safety"
          ],
          [
            "https://uluru.gov.au/plan/buy-your-pass/",
            "Parks Australia – park passes"
          ],
          [
            "https://uluru.gov.au/discover/culture/tjukurpa/",
            "Parks Australia – Tjukurpa"
          ]
        ],
      }),
      g({
        slug: 'kata-tjuta', name: 'Kata Tjuṯa', motif: 'valley-walk weather decision', instrument: 'valley-profile', imageQuery: 'Kata Tjuṯa domes Northern Territory', imageAlt: 'The domes of Kata Tjuṯa in Uluṟu Kata Tjuṯa National Park',
        summary: 'A separate Kata Tjuṯa chapter where wind, heat, cultural closure and route grade decide between valley walks and viewpoints.',
        orientation: 'treat Walpa Gorge, Valley of the Winds and viewing areas as different commitments.', access: 'Travel from Yulara or within the park with enough fuel, pass, water and daylight for the chosen route.', sequence: 'Check closures at the park source, attempt the most exposed walk early, use the shorter gorge or viewpoint when conditions narrow and return before heat.', boundary: 'Kata Tjuṯa is sacred Aṉangu Country. Stay on open paths, respect restricted knowledge and never leave the route for a better angle.',
        stages: [['Check the route gate', 'Wind, heat and cultural closure determine what is open.'], ['Choose one valley', 'Match grade and distance to the day.'], ['Walk without shortcuts', 'Remain on formed paths and carry water.'], ['Return before the heat wall', 'End the walk with transport and recovery time.']],
        risks: [['Heat closure', 'Long exposed walks may close early.'], ['Wind and uneven ground', 'Strong gusts and rock surfaces require stable footing.'], ['Cultural boundary', 'Closed paths and restricted stories must remain untouched.']],
        duration: 'Give Kata Tjuṯa a dedicated half or full day within a multi-night stay.', combine: 'Pair with Uluru on different days rather than two major walks together.', verify: 'Check Parks Australia alerts, temperature, wind, cultural closure, road, water and turnaround.'
      })
    ]
  })
];
