import { australiaGuide as g, defineAustraliaCluster as cluster } from './australia-guide-builder.mjs';

export const australiaWestIslandClusters = [
  cluster({
    slug: 'perth-fremantle-rottnest',
    name: 'Perth, Fremantle & Rottnest',
    region: 'Western Australia',
    band: 'west',
    family: 'indian-ocean-sunset-grid',
    label: 'RIVER / PORT / INDIAN OCEAN',
    tagline: 'Use rail, river and ferry as three different west-coast spines.',
    hubIntro: 'Perth/Boorloo stretches between the Swan–Canning river system and the Indian Ocean, while Fremantle/Walyalup and Wadjemup/Rottnest add their own histories and transport rules. Five chapters separate city park, port, beach, island and valley movement so sunset does not conceal the long return.',
    stay: 'Central Perth suits rail and river days; Fremantle works for port and ferry departures. Confirm the exact Rottnest terminal before choosing the hotel.',
    transfer: 'Transperth links city, port and coast. Rottnest ferries depart from different terminals with different journey times, check-in and baggage rules.',
    sources: [
      ['https://www.australia.com/en/places/perth-and-surrounds/guide-to-perth.html', 'Tourism Australia — Perth'],
      ['https://www.westernaustralia.com/en/places-to-visit/perth-and-surrounds', 'Tourism Western Australia — Perth and surrounds'],
      ['https://www.transperth.wa.gov.au/', 'Transperth — service planning and alerts'],
      ['https://www.rottnestisland.com/', 'Rottnest Island Authority — Wadjemup visitor information'],
      ['https://www.dbca.wa.gov.au/management/swan-canning-riverpark', 'WA Department of Biodiversity, Conservation and Attractions — Swan Canning Riverpark']
    ],
    guides: [
      g({
        slug: 'boorloo-city-elizabeth-quay', name: 'Boorloo / Perth City & Elizabeth Quay', motif: 'river-city bearings', instrument: 'river-grid', imageQuery: 'Perth Elizabeth Quay skyline Swan River', imageAlt: 'Perth skyline and Elizabeth Quay beside the Swan River',
        summary: 'A central Boorloo chapter linking station, river edge and one cultural interior while Whadjuk Noongar context and afternoon heat remain visible.',
        orientation: 'use Perth station and Elizabeth Quay as north–south anchors rather than circling the entire riverfront.', access: 'Arrive by train or bus and identify the accessible station exit and final service.', sequence: 'Begin with recognised Whadjuk cultural context, walk one city-to-river line, use an indoor collection and finish near transport before sunset crowds.', boundary: 'Boorloo is Whadjuk Noongar Country. Use recognised language and experiences, respect ceremony and keep working river edges clear.',
        stages: [['Set the station axis', 'Choose the correct exit and river direction.'], ['Add cultural context', 'Use an Aboriginal-led or authoritative interpretation.'], ['Walk one river edge', 'Stay on public paths and avoid marina operations.'], ['Return through the grid', 'Finish at a rail or bus node.']],
        risks: [['Heat and UV', 'Open river surfaces reflect intense sun.'], ['Event closures', 'Quay and city events alter paths and services.'], ['River edge', 'Obey barriers and water-activity rules.']],
        duration: 'One full day is enough for the city core and one collection.', combine: 'Pair with Kings Park or a Swan River ferry, not a beach-and-island rush.', verify: 'Check Transperth, event zones, venue hours, heat, ferry and accessibility.'
      }),
      g({
        slug: 'kings-park', name: 'Kings Park & Botanic Garden', motif: 'city-bushland overlook', instrument: 'botanic-section', imageQuery: 'Kings Park Perth skyline Western Australia', imageAlt: 'Perth skyline seen from Kings Park and Botanic Garden',
        summary: 'A botanic and bushland chapter balancing formal garden, escarpment views and conservation tracks with heat and fire conditions.',
        orientation: 'choose the botanic garden loop or a bushland path as primary and keep the city return simple.', access: 'Use a current bus, legal parking or a planned uphill walk and confirm the final service.', sequence: 'Visit exposed viewpoints early, use interpreted plant collections, select one shaded trail and leave before heat or fire advice worsens.', boundary: 'The park is culturally significant Whadjuk Country and protected bushland. Keep plants, seeds and wildlife undisturbed.',
        stages: [['Choose the entry', 'Match bus stop or parking to the intended garden.'], ['Read the collection', 'Use signs and cultural interpretation rather than picking or leaving paths.'], ['Take one overlook', 'Stay behind barriers and manage heat.'], ['Return before sunset demand', 'Reach the bus or city path safely.']],
        risks: [['Heat and fire', 'Bushland paths can close during severe conditions.'], ['Steep access', 'Walking from the city involves grades and crossings.'], ['Plant protection', 'Do not collect material or enter restoration areas.']],
        duration: 'Allow half a day, longer for a guided cultural or botanic program.', combine: 'Pair with central Perth, not Fremantle or Rottnest.', verify: 'Check park alerts, fire danger, bus, event closures, temperature and accessibility.'
      }),
      g({
        slug: 'walyalup-fremantle', name: 'Walyalup / Fremantle', motif: 'port and memory ledger', instrument: 'port-ledger', imageQuery: 'Fremantle harbour Western Australia historic buildings', imageAlt: 'Historic Fremantle beside its working port',
        summary: 'A port-city day connecting rail arrival, maritime and convict history, markets and working-harbour boundaries.',
        orientation: 'use Fremantle station, the west end and fishing harbour as separate public zones.', access: 'Arrive by train and confirm whether any ferry leaves from Fremantle or another terminal.', sequence: 'Begin with a museum or heritage site, walk one west-end street, use the harbour edge and return before market or nightlife dispersal.', boundary: 'Walyalup is Whadjuk Noongar Country and the port remains operational. Respect memorial, prison, fishing and residential spaces.',
        stages: [['Land at the station', 'Set the final train and any ferry terminal.'], ['Choose one history interior', 'Give maritime or convict interpretation enough time.'], ['Read the working port', 'Stay within public edges and do not obstruct crews.'], ['Close near rail', 'End at the station rather than a remote beach.']],
        risks: [['Port operations', 'Restricted wharves and vehicle lanes are not viewpoints.'], ['Venue booking', 'Prison tours and exhibitions may require timed entry.'], ['Late services', 'Plan the final train before nightlife.']],
        duration: 'A full day supports one major interior and the port town.', combine: 'Pair with Rottnest only as a ferry gateway, not a complete same-day city.', verify: 'Check train, ferry terminal, venue booking, market calendar, weather and port closure.'
      }),
      g({
        slug: 'wadjemup-rottnest', name: 'Wadjemup / Rottnest Island', motif: 'ferry-bicycle island circuit', instrument: 'island-spoke', imageQuery: 'Rottnest Island Wadjemup beach quokka coast', imageAlt: 'Turquoise coast on Wadjemup Rottnest Island',
        summary: 'An island visit where ferry terminal, bicycle ability, bus circuit, quokka welfare and Wadjemup history come before beach count.',
        orientation: 'use the settlement as the hub and choose bicycle, bus or a short walking sector rather than mixing all modes.', access: 'Book the exact ferry terminal, check-in, baggage and island transport; sea conditions affect the crossing.', sequence: 'Begin with Wadjemup cultural and historical context, choose one island sector, use safe swimming advice and return before boarding cutoff.', boundary: 'Wadjemup is culturally significant Whadjuk Noongar Country. Never feed or touch quokkas, enter restricted heritage, or leave roads and tracks.',
        stages: [['Audit the ferry', 'Match Perth, Fremantle or Hillarys terminal to the ticket.'], ['Choose one island mode', 'Use bicycle only with confidence, helmet and weather capacity.'], ['Read Country and history', 'Give the museum or recognised interpretation real time.'], ['Return to the settlement', 'Arrive before ferry check-in with equipment returned.']],
        risks: [['Heat and cycling', 'Distance, wind and limited shade make the full loop demanding.'], ['Wildlife harm', 'Feeding, touching and crowding quokkas is unacceptable.'], ['Ferry weather', 'Sea state and cancellation can affect onward travel.']],
        duration: 'One full day is the minimum; two nights reveal the island beyond ferry peaks.', combine: 'Do not combine with a complete Fremantle day.', verify: 'Check ferry terminal, marine forecast, island bus or bike, cultural access, wildlife rules and return.'
      }),
      g({
        slug: 'cottesloe-scarborough', name: 'Cottesloe & Scarborough Coast', motif: 'Indian Ocean sunset line', instrument: 'sunset-line', imageQuery: 'Cottesloe Beach Perth sunset Western Australia', imageAlt: 'Cottesloe Beach on the Indian Ocean near Perth',
        summary: 'An urban coast chapter selected by rail or bus access, patrol, afternoon wind and a transport return after Indian Ocean sunset.',
        orientation: 'choose Cottesloe for rail-linked coast or Scarborough for a different bus and precinct system.', access: 'Use the current train-and-walk or bus route and identify the lit return stop.', sequence: 'Arrive outside peak heat, swim only between flags, use one foreshore walk and leave after a single sunset window.', boundary: 'Dunes, surf clubs and residential streets need protection. Stay on access paths and keep clear of lifesaving operations.',
        stages: [['Choose one beach system', 'Do not attempt both suburbs as a beach checklist.'], ['Read the flags and wind', 'Check patrol, swell and afternoon conditions.'], ['Use a formal dune crossing', 'Protect vegetation and private frontage.'], ['Board the planned return', 'Leave from the known station or stop.']],
        risks: [['Rip currents', 'Swim only between flags and follow lifesavers.'], ['Afternoon wind', 'Sea breeze can intensify conditions and chill.'], ['Sunset transport', 'Crowds and reduced frequency require a plan.']],
        duration: 'Half a day through sunset suits one coast district.', combine: 'Pair with Perth city, not Rottnest on the same day.', verify: 'Check Beachsafe, patrol, swell, wind, Transperth, event and sunset.'
      })
    ]
  }),

  cluster({
    slug: 'margaret-river-southwest',
    name: 'Margaret River & the Southwest',
    region: 'Western Australia',
    band: 'west',
    family: 'karri-coast-register',
    label: 'WINE / KARRI FOREST / TWO CAPES',
    tagline: 'Choose coast, forest or tasting as the day’s primary operating system.',
    hubIntro: 'Western Australia’s southwest combines long driving, powerful surf, working vineyards, caves and tall forest. Busselton, Margaret River, the capes, Boranup and Albany cannot be cleared from one base. Five chapters separate sober tasting, cave bookings, coastal wind, forest fire and the much longer southern road.',
    stay: 'Use Busselton or Dunsborough for the north, Margaret River for central services, Augusta for Cape Leeuwin and Albany for the far south.',
    transfer: 'Self-drive is common; tours solve selected wine and cave days. Fuel, wildlife, fire, road works and driver rotation define every long leg.',
    sources: [
      ['https://www.australia.com/en/places/perth-and-surrounds/guide-to-margaret-river.html', 'Tourism Australia — Margaret River'],
      ['https://www.westernaustralia.com/en/places-to-visit/australias-south-west', 'Tourism Western Australia — Australia’s South West'],
      ['https://www.margaretriver.com/', 'Margaret River Busselton Tourism Association'],
      ['https://exploreparks.dbca.wa.gov.au/', 'Explore Parks WA — park and visitor information'],
      ['https://www.mainroads.wa.gov.au/travel-information/', 'Main Roads Western Australia — travel information']
    ],
    guides: [
      g({
        slug: 'busselton-dunsborough', name: 'Busselton & Dunsborough', motif: 'bay gateway and jetty', instrument: 'bay-register', imageQuery: 'Busselton Jetty Western Australia Geographe Bay', imageAlt: 'Busselton Jetty extending into Geographe Bay',
        summary: 'A northern gateway chapter balancing the long jetty, sheltered bay and Dunsborough base without assuming coast access is uniform.',
        orientation: 'use Busselton foreshore and Dunsborough as different service nodes.', access: 'Arrive by road or regional coach and confirm jetty train, tour or walking access directly.', sequence: 'Use the booked jetty activity first, pause on the bay, move once to Dunsborough and prepare the cape road.', boundary: 'The jetty is working heritage over water; follow wind, train, fishing and access controls.',
        stages: [['Confirm the jetty product', 'Distinguish walking, train and underwater observatory booking.'], ['Read the bay conditions', 'Choose safe managed recreation.'], ['Shift to one second base', 'Avoid repeated town hopping.'], ['Prepare the cape', 'Fuel and check weather before the next road.']],
        risks: [['Wind over water', 'Jetty access can change in severe conditions.'], ['Long exposure', 'The walk has little shade.'], ['Booking cutoff', 'Tours and trains require timely check-in.']],
        duration: 'Use one full day or two nights as the regional arrival.', combine: 'Pair with Cape Naturaliste on another day.', verify: 'Check jetty operator, bay weather, fire, road, coach and accommodation.'
      }),
      g({
        slug: 'margaret-river-wine-food', name: 'Margaret River Wine & Food', motif: 'producer route with sober return', instrument: 'producer-ledger', imageQuery: 'Margaret River vineyards Western Australia', imageAlt: 'Vineyards in the Margaret River region',
        summary: 'A producer day built around a sober driver, geographic cluster, food and working-farm boundaries rather than cellar-door quantity.',
        orientation: 'select one north, central or south producer cluster and no more than three reservations.', access: 'Book a tour, designated driver or accommodation transfer before tasting.', sequence: 'Begin with landscape or production context, use one deep tasting, eat, reassess and finish before wildlife-heavy roads.', boundary: 'Vineyards and farms are workplaces. Follow bookings, biosecurity, private-property and photography rules.',
        stages: [['Set the driver contract', 'No alcohol for the designated driver.'], ['Choose one cluster', 'Reduce road time between producers.'], ['Eat and hydrate', 'Make the meal a structural stop.'], ['Close before dusk', 'Return with driver attention intact.']],
        risks: [['Drink driving', 'Use a professional service where any doubt exists.'], ['Booking and shipping', 'Hours, tasting terms and shipping rules change.'], ['Rural roads', 'Wildlife and fatigue rise at dusk.']],
        duration: 'One full day plus a local overnight.', combine: 'Do not mix with a cave or long coast hike.', verify: 'Confirm producer bookings, driver, food, road, fire, weather and accommodation.'
      }),
      g({
        slug: 'cape-naturaliste-coast', name: 'Cape Naturaliste & Leeuwin-Naturaliste Coast', motif: 'lighthouse and surf edge', instrument: 'cape-compass', imageQuery: 'Cape Naturaliste lighthouse coast Western Australia', imageAlt: 'Cape Naturaliste lighthouse and coastal landscape',
        summary: 'A headland day choosing lighthouse, short coast walk or whale-season viewpoint according to wind, fire and track condition.',
        orientation: 'use the lighthouse precinct as the compass and select one open section of the cape.', access: 'Drive to the official visitor area or use a booked tour; confirm any lighthouse entry.', sequence: 'Take the exposed viewpoint early, walk one graded section, observe wildlife without pursuit and return before wind or darkness.', boundary: 'Cliffs, dunes and whale habitat require formal tracks and distance. Do not enter closed beaches or fly drones against rules.',
        stages: [['Read the cape weather', 'Check wind, swell and fire.'], ['Confirm lighthouse access', 'Book or verify the official tour.'], ['Walk one coast section', 'Stay on formed paths.'], ['Return before exposure builds', 'Leave with daylight and road reserve.']],
        risks: [['Cliffs and swell', 'Stay behind barriers and off rock platforms.'], ['Wind', 'Strong gusts affect walking and tours.'], ['Wildlife disturbance', 'Keep legal distance and follow seasonal guidance.']],
        duration: 'A full day from Dunsborough or Margaret River.', combine: 'Pair with one bay stop, not Cape Leeuwin.', verify: 'Check lighthouse, park alerts, wind, swell, fire, track and whale-season rules.'
      }),
      g({
        slug: 'boranup-caves-augusta', name: 'Boranup Forest, Caves & Augusta', motif: 'karri-to-cave depth line', instrument: 'forest-cave-section', imageQuery: 'Boranup karri forest Margaret River Western Australia', imageAlt: 'Tall karri trees in Boranup Forest',
        summary: 'A south-region chapter connecting one booked show cave, karri forest and Augusta without stacking underground fatigue and a long drive.',
        orientation: 'choose the cave first, then one forest road or boardwalk and use Augusta as the service or overnight base.', access: 'Book the exact cave product and check stairs, self-guided requirements, road and fire status.', sequence: 'Enter the cave at the booked time, rest above ground, take a short forest route and reach Augusta before dusk.', boundary: 'Caves and karri forest are fragile. Touch only permitted surfaces, clean footwear and stay out of closed fire areas.',
        stages: [['Audit the cave booking', 'Match entry, mobility and equipment.'], ['Complete the underground visit', 'Follow guide and lighting rules.'], ['Reset above ground', 'Rest before driving or walking.'], ['Reach Augusta safely', 'Avoid a late wildlife road.']],
        risks: [['Cave mobility', 'Stairs, darkness and confined space require honest disclosure.'], ['Fire and treefall', 'Forest access can close.'], ['Driver fatigue', 'Underground visits and winding roads compound tiredness.']],
        duration: 'Use a full day and an Augusta or Margaret River overnight.', combine: 'Pair with Cape Leeuwin only if nearby and conditions permit.', verify: 'Check cave booking, accessibility, forest and road closure, fire, weather and accommodation.'
      }),
      g({
        slug: 'albany-torndirrup', name: 'Albany & Torndirrup', motif: 'southern ocean edge', instrument: 'ocean-aperture', imageQuery: 'Torndirrup National Park Albany Western Australia coast', imageAlt: 'Granite coast and Southern Ocean in Torndirrup National Park',
        summary: 'A far-south destination linking Albany history to Torndirrup’s exposed granite coast, not a detour from Margaret River.',
        orientation: 'base in Albany and choose one historical interior plus one formal Torndirrup viewpoint.', access: 'Allow the full regional drive or fly, then use a local vehicle or tour for the national park.', sequence: 'Start with cultural or historical context, use the coast only in safe wind and swell, and return before darkness.', boundary: 'Menang Noongar Country, memorial spaces and dangerous ocean cliffs require respectful interpretation and strict barriers.',
        stages: [['Make Albany the base', 'Do not hide the long southwest distance.'], ['Choose one history layer', 'Give the institution meaningful time.'], ['Use a formal coast platform', 'Stay behind barriers.'], ['Return before the weather closes', 'Keep the road short and clear.']],
        risks: [['Southern Ocean swell', 'Cliff and rock edges are extremely hazardous.'], ['Wind and cold', 'Exposure can become severe quickly.'], ['Long-distance fatigue', 'Margaret River and Perth are not casual returns.']],
        duration: 'Stay at least two nights in Albany.', combine: 'Treat it as the final separate southwest leg.', verify: 'Check park, wind, swell, road, fire, venue hours and accommodation.'
      })
    ]
  }),

  cluster({
    slug: 'broome-kimberley',
    name: 'Broome & the Kimberley',
    region: 'Western Australia',
    band: 'west',
    family: 'tidal-range-atlas',
    label: 'EXTREME TIDE / REMOTE ROAD / CULTURAL COUNTRY',
    tagline: 'Let tide, season, permit and distance close the map before the road opens.',
    hubIntro: 'Broome/Rubibi and the Kimberley operate at continental scale. Town beaches, Dampier Peninsula, the Gibb River Road, Kununurra and Purnululu each need separate seasons, vehicles, permits, cultural operators and emergency planning. Five chapters reject the idea that a red line on the map is a same-day route.',
    stay: 'Use Broome, a booked peninsula property, Kununurra and park camps as separate bases. Accommodation scarcity can determine the entire sequence.',
    transfer: 'Regional flights shorten distance; remote roads require suitable vehicles, fuel, tyres, communications and current access. Many routes close seasonally.',
    sources: [
      ['https://www.australia.com/en/places/broome-and-surrounds/guide-to-broome.html', 'Tourism Australia — Broome'],
      ['https://www.westernaustralia.com/en/places-to-visit/broome-and-the-dampier-peninsula', 'Tourism Western Australia — Broome and Dampier Peninsula'],
      ['https://www.westernaustralia.com/en/places-to-visit/australias-north-west/the-kimberley', 'Tourism Western Australia — Kimberley'],
      ['https://exploreparks.dbca.wa.gov.au/park/purnululu-national-park', 'Explore Parks WA — Purnululu National Park'],
      ['https://www.mainroads.wa.gov.au/travel-information/driving-in-wa/roadworks-closures/', 'Main Roads WA — road conditions and closures']
    ],
    guides: [
      g({
        slug: 'rubibi-broome-cable-beach', name: 'Rubibi / Broome & Cable Beach', motif: 'town tide and sunset', instrument: 'tide-scale', imageQuery: 'Cable Beach Broome Western Australia sunset', imageAlt: 'Cable Beach at sunset near Broome',
        summary: 'A Broome base chapter connecting cultural context, town history and Cable Beach through tide, heat and legal vehicle zones.',
        orientation: 'use town services and Cable Beach as separate nodes on Yawuru Country.', access: 'Arrive by flight or road and resolve local bus, taxi or legal parking before sunset.', sequence: 'Begin with recognised Yawuru context, use one town history stop, read tide and beach access and finish from a safe sunset area.', boundary: 'Rubibi is Yawuru Country. Respect cultural guidance, dinosaur-track protections, wildlife and beach-driving controls.',
        stages: [['Read the tide table', 'Know whether the planned shore feature is accessible and safe.'], ['Begin with Country', 'Use recognised Yawuru interpretation.'], ['Choose one beach sector', 'Stay clear of vehicle lanes and unstable edges.'], ['Leave before traffic surge', 'Return through a known road or bus.']],
        risks: [['Extreme tide', 'Water can rise rapidly and cut off rocks or beach access.'], ['Heat', 'Midday exposure is severe.'], ['Vehicle zones', 'Beach driving and pedestrian areas change; follow signs.']],
        duration: 'Two to three nights support town, coast and weather.', combine: 'Use Broome as a buffer before the peninsula or Kimberley, not a same-day add-on.', verify: 'Check Yawuru guidance, tide, weather, beach access, road, bus and accommodation.'
      }),
      g({
        slug: 'dampier-peninsula', name: 'Dampier Peninsula', motif: 'cultural operator road plan', instrument: 'permit-roadbook', imageQuery: 'Dampier Peninsula Western Australia coast', imageAlt: 'Remote red coast on the Dampier Peninsula',
        summary: 'A peninsula journey based on booked Aboriginal tourism, community access, fuel and road condition rather than an unplanned beach drive.',
        orientation: 'select one community or cultural operator and one overnight base before leaving Broome.', access: 'Confirm road condition, permits, opening and the exact business directly; do not assume communities are open to casual visitation.', sequence: 'Travel in daylight, attend the booked experience, use only permitted coast access and stay overnight or return conservatively.', boundary: 'The peninsula contains Aboriginal communities and Country. Permission, privacy and operator guidance are prerequisites, not optional etiquette.',
        stages: [['Book the cultural host', 'Use a recognised, currently operating business.'], ['Check community access', 'Confirm permits, roads and visitor conditions.'], ['Travel with supplies', 'Carry fuel, water and communication.'], ['Close through the host', 'Follow departure, camping and photography guidance.']],
        risks: [['Community closure', 'Health, cultural or seasonal reasons can restrict access.'], ['Remote road', 'Conditions and services change quickly.'], ['Tide and coast', 'Large tides and crocodile habitat affect shore use.']],
        duration: 'Stay at least one night; more for multiple booked experiences.', combine: 'Pair only with Broome buffers, not the Gibb River Road.', verify: 'Check operator, community permission, road, fuel, tide, crocodile, weather and accommodation.'
      }),
      g({
        slug: 'gibb-river-road', name: 'Gibb River Road', motif: 'remote expedition ledger', instrument: 'expedition-log', imageQuery: 'Gibb River Road Kimberley Western Australia', imageAlt: 'Remote road through the Kimberley on the Gibb River Road',
        summary: 'A multi-day remote expedition requiring season, vehicle, tyres, fuel, communications and accommodation commitments before the first kilometre.',
        orientation: 'divide the road into fuel and sleep legs rather than attractions.', access: 'Use a suitable high-clearance vehicle under rental conditions and confirm every road, station, park and campground.', sequence: 'Drive conservative daylight legs, check each next segment locally, keep spare days and turn back when water or mechanical risk rises.', boundary: 'Pastoral leases, Aboriginal lands and parks have distinct permissions. Never enter closed tracks, communities or private station roads.',
        stages: [['Build the fuel ledger', 'Record distance, opening and reserve for every leg.'], ['Confirm the vehicle contract', 'Tyres, recovery, river crossings and rental exclusions must be explicit.'], ['Check forward daily', 'Local conditions outrank old guidebooks.'], ['Keep a retreat option', 'Weather and breakdown must not trap the itinerary.']],
        risks: [['Road closure', 'Wet season and damage can close sections completely.'], ['Vehicle failure', 'Recovery is costly and delayed; preparation is essential.'], ['Communication gap', 'Carry appropriate satellite or emergency equipment.']],
        duration: 'Allow at least ten days plus contingency; this is not a day drive.', combine: 'Treat it as a standalone expedition between planned gateways.', verify: 'Check Main Roads, local authorities, parks, accommodation, fuel, vehicle, communications, weather and medical plan.'
      }),
      g({
        slug: 'kununurra-lake-argyle', name: 'Kununurra & Lake Argyle', motif: 'east Kimberley water base', instrument: 'reservoir-compass', imageQuery: 'Lake Argyle Kununurra Western Australia', imageAlt: 'Lake Argyle in the East Kimberley',
        summary: 'An East Kimberley base connecting town services, lake cruise or lookout and Ord landscapes under heat and water-safety controls.',
        orientation: 'use Kununurra for logistics and Lake Argyle as a separate road and operator chapter.', access: 'Arrive by flight or road, book the exact cruise or activity and carry water for the transfer.', sequence: 'Use the booked lake activity early, rest in heat, add one formal lookout or town context and stay locally.', boundary: 'Waterways may contain crocodiles and operational infrastructure. Enter water only under current local advice and respect Miriwoong Country.',
        stages: [['Set the East Kimberley base', 'Resolve fuel, lodging and onward roads.'], ['Confirm the lake operator', 'Match marina, check-in and activity.'], ['Read water restrictions', 'Do not infer swimming safety.'], ['Return before heat fatigue', 'Rest rather than extending another remote road.']],
        risks: [['Crocodiles and water', 'Follow current local swimming advice exactly.'], ['Heat', 'Exposure and dehydration escalate quickly.'], ['Long roads', 'Distances to other Kimberley sites require separate days.']],
        duration: 'Two to three nights support the town and lake.', combine: 'Pair with Purnululu only as a separate multi-day road leg.', verify: 'Check operator, water and crocodile advice, heat, road, fuel, flight and accommodation.'
      }),
      g({
        slug: 'purnululu-bungle-bungle', name: 'Purnululu / Bungle Bungle Range', motif: 'remote park flight-or-road gate', instrument: 'range-access-gate', imageQuery: 'Purnululu Bungle Bungle Range Western Australia', imageAlt: 'Striped sandstone domes in Purnululu National Park',
        summary: 'A World Heritage remote-park visit requiring a choice between scenic flight and difficult road access, with camp and heat limits made clear.',
        orientation: 'choose air access or a suitable 4WD park stay; neither is a casual Kununurra side trip.', access: 'Book an accredited flight or confirm the access road, vehicle, park opening, campsite and fuel.', sequence: 'Enter through the selected mode, use one north or south park sector, follow cultural and track guidance and retain weather contingency.', boundary: 'Purnululu is living Kija and Jaru Country. Stay on open tracks and never climb domes or enter closed cultural places.',
        stages: [['Choose air or road', 'Price and prepare the real access contract.'], ['Confirm park season', 'Opening and road condition can change.'], ['Use one park sector', 'Heat and distance make north and south separate.'], ['Leave with reserve', 'Protect fuel, flight or camp timing.']],
        risks: [['Rough access road', 'Only appropriate vehicles and drivers should attempt it.'], ['Extreme heat', 'Walk early and carry substantial water.'], ['Remote emergency', 'Communication and rescue are limited.']],
        duration: 'Use at least two nights by road or a dedicated flight day.', combine: 'Pair with Kununurra buffers, not the Gibb River Road schedule.', verify: 'Check park opening, road, flight, cultural closure, campsite, heat, fire, fuel and communication.'
      })
    ]
  }),

  cluster({
    slug: 'tasmania',
    name: 'Tasmania',
    region: 'Tasmania',
    band: 'islands',
    family: 'island-weather-cabinet',
    label: 'ISLAND WEATHER / CONVICT MEMORY / WILDERNESS',
    tagline: 'Give nipaluna, alpine parks and the east coast different weather drawers.',
    hubIntro: 'Tasmania is compact on a national map but slow on winding roads and mountain weather. nipaluna/Hobart, kunanyi, the Tasman Peninsula, Launceston, Cradle Mountain and the east coast cannot be compressed into a single loop speed. Five chapters keep city culture, convict history, wilderness access and driving fatigue distinct.',
    stay: 'Use Hobart, Launceston, a Cradle gateway and an east-coast base according to the next day’s first landscape. Daily cross-island returns waste the advantage of a small state.',
    transfer: 'Flights reach Hobart and Launceston; the Spirit of Tasmania reaches Devonport. Regional touring usually needs a vehicle, coach or operator and conservative road time.',
    sources: [
      ['https://www.australia.com/en/places/hobart-and-surrounds/guide-to-hobart.html', 'Tourism Australia — Hobart'],
      ['https://www.discovertasmania.com.au/', 'Tourism Tasmania — official visitor guide'],
      ['https://parks.tas.gov.au/', 'Tasmania Parks and Wildlife Service'],
      ['https://www.transport.tas.gov.au/public_transport', 'Transport Tasmania — public transport'],
      ['https://www.spiritoftasmania.com.au/', 'Spirit of Tasmania — official ferry information']
    ],
    guides: [
      g({
        slug: 'nipaluna-hobart-salamanca', name: 'nipaluna / Hobart & Salamanca', motif: 'harbour-market cultural day', instrument: 'harbour-cabinet', imageQuery: 'Hobart Salamanca waterfront Tasmania', imageAlt: 'Hobart waterfront and Salamanca buildings in Tasmania',
        summary: 'A harbour-city chapter connecting one cultural collection, Salamanca and the working waterfront without letting a market calendar define the whole visit.',
        orientation: 'use Constitution Dock and Salamanca as the lower-city line and choose one uphill or indoor extension.', access: 'Arrive by airport bus, local bus or walk and know the last service to the accommodation.', sequence: 'Begin with palawa cultural context, visit one institution, walk the public harbour edge and use the market only when it actually operates.', boundary: 'nipaluna is muwinina Country. Respect living Aboriginal culture, working docks, memorials and residential Battery Point.',
        stages: [['Set the harbour line', 'Choose the public waterfront and return node.'], ['Add cultural context', 'Use a recognised palawa or institutional source.'], ['Read Salamanca carefully', 'Market and non-market days are different experiences.'], ['Return before the hill or dark', 'Use a known bus or walking line.']],
        risks: [['Market crowd', 'Saturday conditions alter streets and transport.'], ['Cold and wind', 'Harbour weather changes quickly.'], ['Working docks', 'Stay clear of vessel and freight operations.']],
        duration: 'One to two days supports the city and a major institution.', combine: 'Pair with kunanyi only on a separate weather window.', verify: 'Check market date, museum hours, bus, harbour weather, event closure and accessibility.'
      }),
      g({
        slug: 'kunanyi-mount-wellington', name: 'kunanyi / Mount Wellington', motif: 'city-to-alpine weather gate', instrument: 'summit-weather', imageQuery: 'kunanyi Mount Wellington Hobart Tasmania view', imageAlt: 'kunanyi / Mount Wellington above Hobart and the River Derwent',
        summary: 'A mountain chapter where summit road, bus, snow, wind and palawa naming determine whether the high point or a lower trail is appropriate.',
        orientation: 'choose summit, Springs or a lower foothill route according to live conditions.', access: 'Use a booked bus, capable driver or open walking connection and check road status before leaving Hobart.', sequence: 'Take the highest safe objective early, use one lower track or visitor stop and descend before cloud or ice changes the road.', boundary: 'kunanyi is culturally significant palawa Country and alpine habitat. Use preferred naming, stay on tracks and respect closures.',
        stages: [['Read summit conditions', 'Compare city weather with mountain road and wind.'], ['Choose the altitude', 'Make a lower route a complete plan.'], ['Walk one open track', 'Carry layers and remain on formed paths.'], ['Descend before closure', 'Protect bus or road return.']],
        risks: [['Rapid alpine weather', 'Snow, ice, fog and wind can arrive in any season.'], ['Road closure', 'Gates can close with little notice.'], ['Exposure', 'The summit lacks shelter and requires warm layers.']],
        duration: 'Use half a day with a flexible weather slot.', combine: 'Pair with Hobart only when the mountain window is safe.', verify: 'Check City of Hobart road status, bus, wind, snow, track, fire and cultural guidance.'
      }),
      g({
        slug: 'port-arthur-tasman-peninsula', name: 'Port Arthur & Tasman Peninsula', motif: 'convict memory and cliff coast', instrument: 'memory-coast', imageQuery: 'Port Arthur historic site Tasmania coast', imageAlt: 'Port Arthur Historic Site on the Tasman Peninsula',
        summary: 'A peninsula day giving the Port Arthur collection enough solemn attention before one formal coastal viewpoint and a safe road return.',
        orientation: 'use the historic site as the primary chapter and select only one Tasman coast stop.', access: 'Book site entry or tour, drive or use a scheduled operator and account for winding roads.', sequence: 'Visit the historic site first, pause after difficult history, use one open national-park viewpoint and stay locally or return before dusk.', boundary: 'Convict sites, massacre history, memorials and dramatic cliffs are not entertainment props. Use careful language and formal access.',
        stages: [['Book the historic site', 'Confirm entry, tour and accessibility.'], ['Move through with attention', 'Leave room for difficult personal and colonial histories.'], ['Choose one coast platform', 'Use barriers and current park access.'], ['Protect the peninsula road', 'Avoid a fatigued night return.']],
        risks: [['Emotional weight', 'Build a quiet transition after the site.'], ['Cliff exposure', 'Strong wind and unstable edges demand barriers.'], ['Winding road', 'Wildlife and fatigue rise at dusk.']],
        duration: 'Use a full day and preferably one peninsula night.', combine: 'Pair with one formal Tasman coast stop, not Freycinet.', verify: 'Check historic-site booking, park alerts, wind, road, fire, weather and accommodation.'
      }),
      g({
        slug: 'launceston-tamar-valley', name: 'Launceston & Tamar Valley', motif: 'gorge-to-estuary route', instrument: 'estuary-ledger', imageQuery: 'Cataract Gorge Launceston Tasmania', imageAlt: 'Cataract Gorge near central Launceston',
        summary: 'A northern-city base joining Cataract Gorge, one urban collection and a short Tamar Valley line without turning producers into a driving marathon.',
        orientation: 'use central Launceston and Cataract Gorge as the city anchors and choose one side of the Tamar for the regional extension.', access: 'Arrive by flight, coach or road and use a sober driver or tour for tasting.', sequence: 'Walk the gorge in suitable weather, cool inside, take one valley thread and return before rural darkness.', boundary: 'Gorge water, reserves, farms and Aboriginal Country require formal access and responsible tasting.',
        stages: [['Check the gorge track', 'Match weather, flood and ability.'], ['Use one city interior', 'Give the collection real time.'], ['Choose one Tamar bank', 'Reduce crossings and producer count.'], ['Return before dusk', 'Protect driver attention.']],
        risks: [['Gorge water and cliffs', 'Stay on open tracks and obey flood closures.'], ['Alcohol and driving', 'Use a sober driver.'], ['Rural wildlife', 'Avoid late road travel.']],
        duration: 'Use two nights for city and valley.', combine: 'Pair with Cradle Mountain only as the next overnight leg.', verify: 'Check gorge, producer, driver, road, flood, fire, weather and accommodation.'
      }),
      g({
        slug: 'cradle-freycinet', name: 'Cradle Mountain & Freycinet', motif: 'two-park weather comparison', instrument: 'park-pair', imageQuery: 'Cradle Mountain Dove Lake Tasmania', imageAlt: 'Cradle Mountain reflected in Dove Lake in Tasmania',
        summary: 'A planning comparison between two distant national parks, each requiring its own gateway, shuttle or parking, weather and overnight.',
        orientation: 'choose Cradle Mountain or Freycinet as the immediate objective; they are not one combined day.', access: 'Book park pass and accommodation, then confirm Cradle shuttle or Freycinet parking and track controls.', sequence: 'Stay near the chosen park, start early, use one ability-matched walk and transfer to the other region only on a separate day.', boundary: 'Alpine and coastal habitats are fragile. Use boot-cleaning stations, formed tracks and wildlife distance.',
        stages: [['Choose one park first', 'Reject the same-day combination.'], ['Confirm the gateway', 'Match pass, shuttle, parking and lodging.'], ['Walk one graded route', 'Turn back for weather or fatigue.'], ['Transfer on a fresh day', 'Protect winding-road attention.']],
        risks: [['Rapid weather', 'Cold, wind and rain change track safety.'], ['Parking and shuttle', 'Access systems and capacity differ by park.'], ['Long transfer', 'The road between parks is substantial and wildlife-prone.']],
        duration: 'Use two nights at each park or at least four nights for both.', combine: 'Only combine as a multi-day Tasmania circuit.', verify: 'Check Parks Tasmania alerts, pass, shuttle or parking, track, weather, fire, biosecurity and lodging.'
      })
    ]
  })
];
