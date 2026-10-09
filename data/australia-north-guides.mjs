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
        slug: 'cairns-esplanade-reef-terminal', name: 'Cairns Esplanade & Reef Terminal', reviewDate: '9 October 2026', reviewIsoDate: '2026-10-09', motif: 'city-to-vessel threshold', instrument: 'departure-board', imageQuery: 'Cairns Esplanade marina Queensland', imageAlt: 'Cairns waterfront and marina in tropical Queensland',
        summary: 'A Cairns waterfront plan that separates a managed city swim from a reef departure whose check-in location and time depend on the booked operator.',
        orientation: 'Treat the Esplanade Lagoon, central waterfront and Reef Fleet Terminal as separate stops. Sunlover lists Reef Fleet Terminal at 1 Spence Street as its check-in point; other reef operators may use different desks, vessels or departure arrangements.',
        access: 'Walk or take a local transfer between central Cairns accommodation and the waterfront, then confirm the terminal and berth on your own ticket. For a reef trip, follow the operator’s stated check-in time and location rather than assuming every boat leaves from Reef Fleet Terminal.',
        sequence: 'On a city day, use the signed Esplanade promenade and managed Lagoon, then choose one indoor cultural stop for the hotter part of the day. Before a reef trip, locate the correct operator desk the day before if convenient, sleep in Cairns and keep the departure morning for check-in rather than adding an airport arrival or distant excursion.',
        boundary: 'The Lagoon is a managed swimming facility; the tidal foreshore and estuary are not substitute swimming areas. Follow crocodile signs and current local advice. The Lagoon’s operating schedule and closures can change, so verify before building the day around a swim.',
        decisions: [['Best for', 'A first or last Cairns day with a waterfront walk, managed swimming option and time to confirm a reef operator’s departure details.'], ['Choose the Lagoon', 'Use it for a city swim only when the facility is open; it is not a beach or a guarantee of ocean swimming conditions.'], ['Protect a reef departure', 'Stay in Cairns the night before and use the exact check-in details on the booked trip. If weather cancels the boat, use the Esplanade, a gallery or another open indoor city visit instead of substituting an unbooked vessel.']],
        sources: [
          ['https://www.cairns.qld.gov.au/experience-cairns/Cairns-Esplanade', 'Cairns Regional Council — Cairns Esplanade'],
          ['https://www.cairns.qld.gov.au/experience-cairns/Cairns-Esplanade/esplanade-sport-and-fitness-facilities', 'Cairns Regional Council — Esplanade sport and fitness facilities'],
          ['https://sunlover.com.au/getting-here/', 'Sunlover — getting to the Reef Fleet Terminal'],
          ['https://www.bom.gov.au/qld/cairns/climate.shtml', 'Bureau of Meteorology — Cairns climate']
        ],
        stages: [['Resolve the vessel', 'Record the operator, check-in location, time, berth and any forms from the booking.'], ['Walk the Esplanade', 'Keep the promenade, managed Lagoon and tidal foreshore distinct; obey signs at the water.'], ['Plan for heat or rain', 'Use shade and water, and keep an indoor cultural stop available during heat or a storm.'], ['Keep the departure simple', 'Stay overnight in Cairns before an early boat and check the marine forecast and operator notice.']],
        risks: [['Operator mismatch', 'Reef trips do not all use the same check-in point or schedule.'], ['Heat and seasonal rain', 'Cairns is hot and humid in summer, with most rain generally falling January to March; daily storms and warnings vary.'], ['Facility change', 'Lagoon hours and closures are managed and can change; check the council notice on the day.']],
        duration: 'Allow half a day for the waterfront or one full city day with an indoor stop. Keep a separate overnight before a reef departure.',
        combine: 'A Cairns city visit fits before or after a reef trip. Do not rely on a same-morning flight arrival to make a boat check-in.',
        verify: 'Check the booked operator’s exact terminal and check-in, marine forecast and cancellation notice, Lagoon status, heat or storm warnings and transfer to the airport.',
        faq: [
          ['Do all reef boats check in at Reef Fleet Terminal?', 'No. Sunlover lists Reef Fleet Terminal, 1 Spence Street, for its trips, but other operators can use different arrangements. Follow the check-in location and time on your own booking.'],
          ['Can I swim at the Esplanade?', 'The Esplanade Lagoon is a managed swimming facility when open. Check the council’s current hours and closure notices; do not use tidal water or mudflats as an alternative.'],
          ['What if rain changes the reef day?', 'Check the operator’s cancellation or change notice and current marine conditions. If the trip does not run, keep the day in Cairns for the Lagoon only if open, the promenade in suitable weather, or an indoor cultural visit.']
        ]
      }),
      g({
        slug: 'kuranda-rail-skyrail', name: 'Kuranda Rail & Rainforest Cableway', reviewDate: '9 October 2026', reviewIsoDate: '2026-10-09', motif: 'two-mode rainforest crossing', instrument: 'two-way-ticket', imageQuery: 'Kuranda Scenic Railway Barron Gorge Queensland', imageAlt: 'Kuranda Scenic Railway passing through tropical rainforest',
        summary: 'A full-day one-way rail and cableway crossing between Cairns and Kuranda, with station transfers and weather notices checked against the exact ticket.',
        orientation: 'The common Classic Experience pairs one Kuranda Scenic Railway direction with Skyrail in the other direction; it is not a return ride on both. The rail has Cairns and Freshwater boarding options, while Skyrail’s Smithfield terminal is north of Cairns, so the included coach transfer and direction determine the day’s route.',
        access: 'Choose the direction and boarding station shown in the package, then verify how the included coach transfer connects the rail station and Skyrail terminal. Departures and available combinations can change; use the official timetable and booking confirmation for the travel date.',
        sequence: 'Take the scheduled mode from Cairns or Freshwater, spend a contained visit in Kuranda village, then return by the other mode and its listed transfer. Keep the evening clear: the village visit, station connections and two scenic journeys make this a full day.',
        boundary: 'Stay on the railway and cableway’s managed access, follow staff instructions and use the visitor interpretation to understand Djabugay Country. Rainforest weather is part of the setting, but it does not mean a service is operating; the current operator status controls.',
        decisions: [['Choose the combination', 'The Classic Experience is useful when you want one rail journey and one cableway journey with the coach transfer included; check the booked direction and station.'], ['Allow for slower transfers', 'A Cairns rail departure, Freshwater boarding and Smithfield cableway connection are different locations. Use the package itinerary rather than estimating a walk between them.'], ['Keep a rain fallback', 'If either operator suspends service for weather or maintenance, follow its rebooking or refund direction. Use Kuranda or a Cairns indoor stop only if transport still runs; do not assume rain alone means either ride is cancelled.']],
        sources: [
          ['https://ksr.com.au/planning-and-pricing/departure-times', 'Kuranda Scenic Railway — departure times'],
          ['https://ksr.com.au/Tourpackages/Pages/KSRClassic.aspx', 'Kuranda Scenic Railway — Classic Experience'],
          ['https://skyrail.com.au/visitor-information/faqs/', 'Skyrail — visitor FAQs'],
          ['https://skyrail.com.au/visitor-information/notices/', 'Skyrail — service notices']
        ],
        stages: [['Match both tickets', 'Confirm the date, direction, rail station, Skyrail terminal, coach transfer and meeting instructions.'], ['Check the live status', 'Review rail departures, Skyrail notices and booking messages for weather or maintenance changes.'], ['Use the village window', 'Pick one or two Kuranda stops and return to the booked connection with time to spare.'], ['Complete the crossing', 'Follow the assigned transfer and return mode; keep the evening flexible in case of delay.']],
        risks: [['Station and terminal confusion', 'Cairns, Freshwater and Smithfield are separate nodes; a package may include a coach transfer.'], ['Weather or maintenance', 'Heavy rain can be part of a Skyrail visit, while actual operating status and timetable changes come from the operator.'], ['Peak-day crowding', 'School holiday and busy-day availability may constrain preferred departures; book the exact combination and check confirmation.']],
        duration: 'Reserve a full day and avoid a tight evening flight or another distant excursion.',
        combine: 'Finish in Cairns or stay near your accommodation. Do not add Port Douglas, a reef cruise or a same-day airport connection.',
        verify: 'Check the KSR timetable, Skyrail notices, package direction and transfers, booking confirmation, accessibility requirements and weather on the travel date.',
        faq: [
          ['Does the Classic Experience include both rides?', 'It combines a one-way Kuranda Scenic Railway journey and a one-way Skyrail journey, with a coach transfer to the boarding station included. Check your confirmation for direction and meeting details.'],
          ['Which station do I use?', 'The railway lists Cairns and Freshwater departure options; Skyrail operates from Smithfield. Your package direction determines the station and transfer, so follow the confirmed itinerary.'],
          ['Does rain automatically cancel Skyrail?', 'No. Rain can be a normal rainforest experience, but service status can change for weather or maintenance. Check Skyrail notices and the booking message for your date.']
        ]
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
        slug: 'port-douglas-mossman', name: 'Port Douglas & Mossman Gorge', reviewDate: '9 October 2026', reviewIsoDate: '2026-10-09', motif: 'coast-to-gorge gateway', instrument: 'gateway-pair', imageQuery: 'Mossman Gorge Daintree rainforest Queensland', imageAlt: 'Rainforest and clear water at Mossman Gorge',
        summary: 'A practical Port Douglas base for a separate Mossman Gorge visit, using the Centre shuttle and choosing a walk that fits current track, river and mobility conditions.',
        orientation: 'From Port Douglas, travel north on the coastal road to Mossman Gorge Cultural Centre, then use its shuttle to reach the gorge. There is no footpath between the Centre and gorge, so do not walk the highway. A Gorge visit and Port Douglas town time fit one day; Cape Tribulation is a separate road journey.',
        access: 'Drive or book a transfer to the Cultural Centre and check its current shuttle timetable, fares, last return bus and any cultural experience before setting out. The shuttle is the access link; schedules and terms can change.',
        sequence: 'Reach the Centre early enough to use the shuttle and complete one suitable walk, then return to Port Douglas for a low-key town or coast afternoon. Baral Marrjanga is the shortest, easier option; choose the longer rainforest circuit only if footing, heat and available time suit. Do not enter the river based on appearance or a previous visit.',
        boundary: 'Mossman Gorge is Kuku Yalanji Country. Follow the Cultural Centre’s guidance, track signs and river warnings. Rain can make paths slippery and the river can rise or change quickly; swimming is not a default activity.',
        decisions: [['Choose an accessible short walk', 'Baral Marrjanga is 270 m and usually takes 5–10 minutes; the Centre describes it as easy and suitable for wheelchairs and strollers. Confirm current access before travelling.'], ['Choose more walking', 'The Rainforest Circuit is 2.4 km return, around 45 minutes. The 300 m Lower River Track has slippery steps, so skip it when footing or mobility makes that a poor fit.'], ['If the shuttle or tracks change', 'Follow the Centre’s current last-bus and access information. If gorge access is unavailable, stay around Port Douglas or choose a currently open, managed local visit rather than walking the highway or improvising a river entry.']],
        sources: [
          ['https://www.mossmangorge.com.au/plan-your-visit/getting-here-and-around', 'Mossman Gorge — getting here and around'],
          ['https://www.mossmangorge.com.au/things-to-do/self-guided-walks', 'Mossman Gorge — self-guided walks']
        ],
        stages: [['Reach the Cultural Centre', 'Use the current road and parking information and check shuttle operation and last return.'], ['Select a walk', 'Match Baral Marrjanga, Lower River Track or Rainforest Circuit to mobility, footing, rain and daylight.'], ['Read the river and track notices', 'Stay on open formed paths and obey closures; do not treat clear water as a safety signal.'], ['Return to Port Douglas', 'Use the shuttle and keep the afternoon to town or coast rather than adding the Daintree crossing.']],
        risks: [['Shuttle dependency', 'There is no footpath between the Centre and gorge; missing the last shuttle is not a reason to walk the highway.'], ['Rain and slippery footing', 'The Lower River Track has slippery steps and river conditions can change rapidly after rain.'], ['Road and day scope', 'Mossman Gorge and Cape Tribulation require different road plans; do not stack them into a rushed day.']],
        duration: 'Allow a half day for the Gorge from Port Douglas, with extra margin for transfer and a slower walk. Two Port Douglas nights make the coast and gorge easier to separate.',
        combine: 'Pair Mossman Gorge with Port Douglas town or coast. Visit Cape Tribulation on another day or with an overnight north of the Daintree River.',
        verify: 'Check Centre and shuttle operating information, last bus, selected walk status, rain, river warnings, road conditions and cultural guidance.',
        faq: [
          ['Can I walk from the Centre to the gorge?', 'No. The operator says there is no footpath between the Cultural Centre and the gorge; use the shuttle and check its current last return.'],
          ['Which walk is suitable for a short, step-free visit?', 'Baral Marrjanga is 270 m, around 5–10 minutes, and is described as easy and wheelchair- and stroller-appropriate. Confirm current access with the Centre.'],
          ['Is it safe to swim after rain?', 'Do not infer safety from water clarity or a previous visit. River conditions can change quickly after rain; follow current signs and local advice and skip the water when uncertain.']
        ]
      }),
      g({
        slug: 'daintree-cape-tribulation', name: 'Daintree & Cape Tribulation', reviewDate: '9 October 2026', reviewIsoDate: '2026-10-09', motif: 'river-crossing rainforest road', instrument: 'crossing-gate', imageQuery: 'Daintree rainforest Cape Tribulation Queensland', imageAlt: 'Daintree rainforest meeting the coast near Cape Tribulation',
        summary: 'A remote rainforest and coast drive north of the Daintree River, planned around the ferry, current road access, limited services and an overnight buffer.',
        orientation: 'The route runs from Mossman north to the Daintree River ferry, then along the narrow, winding road to Cape Tribulation. Ferry status, the road north and each boardwalk or beach access are separate checks. Standard 2WD access is possible on the main route when open, but road notices and vehicle conditions govern the day.',
        access: 'Before leaving Mossman, check the ferry operator’s current service status, operating window and queue updates; then confirm Queensland Parks alerts for the road and the specific walks. Allow for school holiday queues, carry fuel and supplies appropriate to the remote route, and confirm accommodation before crossing.',
        sequence: 'Cross in daylight, select a small number of open managed stops such as Dubuji Boardwalk, and reach confirmed accommodation north of the river before dusk. If ferry service is suspended, do not set out to cross; if a road or track closes after you are north, follow the live authority instructions and use confirmed local accommodation rather than improvising a route.',
        boundary: 'This is Eastern Kuku Yalanji Country and World Heritage rainforest. Follow Traditional Owner and park guidance, remain on open tracks, drive cautiously for cassowaries and keep clear of beaches, rivers and creeks where crocodiles may be present. Flooding can isolate the route and disrupt ferry service.',
        decisions: [['Best for', 'A self-drive or booked tour with a full daylight window, flexible plans and at least one night north of the river. Two nights give more room for rain or access changes.'], ['Skip the day dash', 'A Cairns return to Cape Tribulation in one day leaves little margin for ferry queues, stops or delays. Base in Port Douglas or stay north of the river.'], ['Rain or ferry fallback', 'During the wetter months, especially January to March around Cairns, check live warnings rather than relying on seasonal averages. If ferry, road or track access is affected, stay south of the river or at confirmed accommodation; use Mossman Gorge only if it is open and reachable.']],
        sources: [
          ['https://daintreeferry.com.au/', 'Daintree Ferry — service information'],
          ['https://daintreeferry.com.au/status-updates/', 'Daintree Ferry — status updates'],
          ['https://parks.desi.qld.gov.au/parks/daintree', 'Queensland Parks — Daintree National Park'],
          ['https://parks.desi.qld.gov.au/parks/daintree/visiting-safely', 'Queensland Parks — visiting Daintree safely'],
          ['https://parks.desi.qld.gov.au/parks/daintree/journeys/dubuji-boardwalk', 'Queensland Parks — Dubuji Boardwalk'],
          ['https://www.bom.gov.au/qld/cairns/climate.shtml', 'Bureau of Meteorology — Cairns climate']
        ],
        stages: [['Check before the ferry', 'Review service and queue updates, operating window, weather and park alerts before committing north.'], ['Cross and drive carefully', 'Use the ferry, obey road signs and allow for a narrow, winding road and wildlife.'], ['Choose open rainforest access', 'Use signed boardwalks such as Dubuji only when the current park notice confirms access.'], ['Finish at a confirmed base', 'Reach accommodation before dark, or turn back south while the ferry and road remain available.']],
        risks: [['Ferry queue or service change', 'Operating window, river conditions and status updates can change; school holiday queues add uncertainty.'], ['Flooding and isolation', 'Heavy rain can close roads and tracks or interrupt the crossing. Follow official alerts and do not cross barriers.'], ['Wildlife and water', 'Slow for cassowaries and never enter beaches, creeks or rivers based on appearance or past conditions.']],
        duration: 'Plan at least one night north of the river and two when a weather buffer matters. Treat the crossing and road as a full route with stops, not a short extension from Cairns.',
        combine: 'Combine with Port Douglas or Mossman on a separate day. Avoid a same-day Cairns arrival or departure and do not rely on reaching the ferry near its closing window.',
        verify: 'Check Daintree Ferry operating status and queues, Queensland Parks alerts and each planned track, current weather and flood warnings, vehicle and fuel needs, accommodation, crocodile advice and daylight.',
        faq: [
          ['Can a regular 2WD reach Cape Tribulation?', 'Queensland Parks describes standard 2WD access on the main route when conditions allow, but the road is narrow and winding. Check current park and road notices for your date and vehicle.'],
          ['What should I do if the ferry is delayed or closed?', 'Use the ferry status and road alerts before setting out. If service is suspended, do not cross; if a road closes after you are north, follow current authority instructions and use confirmed local accommodation. Do not plan around an assumed crossing time.'],
          ['Should I swim at Cape Tribulation?', 'Treat beaches, rivers and creeks as wildlife habitat and follow current crocodile warnings. Do not swim unless official local advice specifically identifies a safe, open place.']
        ]
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
    hubIntro: 'Choose one Top End operating region around your nights, not a pin for every day. Litchfield is about 120 km southwest of Darwin; Kakadu is about a three-hour drive via the Stuart and Arnhem highways. Kakadu’s wet season can flood roads and close sites, while dry-season demand makes park bases and exact departures worth arranging ahead. This guide maps a Darwin city day, one Litchfield day, two distinct Kakadu days and a separate Nitmiluk journey.',
    stay: 'Three nights: Darwin plus one park; five: Kakadu with three nights for separate art and cruise days; seven can add Litchfield with a Darwin buffer. Treat these as planning shapes, not minimum stays; add nights if flights leave no full park day. Base in Kakadu instead of commuting daily from Darwin, and keep Nitmiluk as a separate southern leg.',
    transfer: 'Fly to Darwin; reach Litchfield via Batchelor or Cox Peninsula, and Kakadu via Stuart then Arnhem Highway. Kakadu is about three hours east, with fuel at Jabiru and Cooinda. Use a suitable vehicle or licensed operator; Kakadu and NT Parks use separate passes, and each road, site and swim needs a fresh status check.',
    reviewDate: '9 October 2026',
    reviewIsoDate: '2026-10-09',
    faq: [
      ['I have only three nights. Should I include both Kakadu and Litchfield?', 'No. Keep Darwin as the base and choose one park day, or devote the short trip to Kakadu if its art sites and wetland cruise are the priority. Kakadu is about a three-hour drive from Darwin each way, so a same-day return leaves little time at the park.'],
      ['What can five nights support?', 'A realistic option is Darwin for arrival and a city day, then three Kakadu nights for one art-site day and a separate Yellow Water day, followed by a Darwin buffer before departure. Confirm your flights leave two usable park days; if not, stay in Darwin and choose Litchfield instead.'],
      ['How can I include both park regions?', 'Use about seven nights as a planning allowance: Darwin, a multi-night Kakadu stay, then a separate Litchfield day with a Darwin night before departure. This is a route shape, not a minimum; do not combine the long Kakadu drive, a full park day and an onward flight.'],
      ['Are one park pass and one road check enough?', 'No. Kakadu requires its own park pass; NT Parks has a separate visitor-pass system that includes Litchfield. Check each authority’s same-day road, site, swimming and cultural-access notices before leaving your base.']
    ],
    sources: [
      ['https://www.australia.com/en/places/darwin-and-surrounds/guide-to-darwin.html', 'Tourism Australia — Darwin'],
      ['https://northernterritory.com/darwin-and-surrounds', 'Tourism NT — Darwin and surrounds'],
      ['https://nt.gov.au/parks/find-a-park/litchfield-national-park', 'Northern Territory Parks — Litchfield access and sites'],
      ['https://nt.gov.au/parks/regions/darwin/check-park-open-darwin/litchfield-national-park', 'Northern Territory Parks — Litchfield current status'],
      ['https://nt.gov.au/parks/visitor-pass', 'Northern Territory Parks — visitor pass'],
      ['https://kakadu.gov.au/plan/getting-here/', 'Parks Australia — getting to Kakadu'],
      ['https://kakadu.gov.au/plan/when-come/seasons/', 'Parks Australia — Kakadu seasons'],
      ['https://kakadu.gov.au/plan/passes/', 'Parks Australia — Kakadu park pass'],
      ['https://kakadu.gov.au/news/access-and-alerts/', 'Parks Australia — Kakadu access report'],
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
        slug: 'litchfield-national-park', name: 'Litchfield National Park', reviewDate: '9 October 2026', reviewIsoDate: '2026-10-09', motif: 'falls, access and swim choice', instrument: 'waterhole-gate', imageQuery: 'Litchfield National Park waterfall Northern Territory', imageAlt: 'Waterfall and plunge pool in Litchfield National Park',
        summary: 'A Darwin-side park day organized around the Batchelor or Cox Peninsula approach, the Florence–Buley walk, step-free viewpoint choices and a swim that only happens when the current park notice allows it.',
        orientation: 'Start from Darwin with one day for Litchfield, about 120 km southwest, and choose the Batchelor or Cox Peninsula road approach from your first open site and current road notice. Florence Falls and Buley Rockhole share a corridor; Wangi is a separate western stop, not a guaranteed swim.',
        access: 'A suitable vehicle or licensed tour is needed to connect the park sites. The Florence Creek walk between Florence Falls and Buley Rockhole is 3.2 km return, about 1.5 hours at Grade 2; NT Parks advises parking at Florence because Buley parking is limited. The falls descent at Florence uses 160 steps or a 1 km uneven path with steps; Tolmer has accessible viewing decks and no swimming.',
        sequence: 'Check NT Parks and road status before leaving Darwin. If Florence and Buley are open, park at Florence and take the 3.2 km return Florence Creek walk rather than moving between both car parks. Add Tolmer’s viewing decks only if daylight and the current notice allow; treat every swimming area as closed unless it is explicitly open that day.',
        boundary: 'Litchfield is a living landscape with cultural places and crocodile-managed waters. Follow Traditional Owner and ranger guidance, keep to open paths, and never treat a pool photograph or a past visit as current permission to swim.',
        decisions: [['Best for', 'A self-drive or guided day with a full daylight window and flexibility to walk, view and skip swimming.'], ['Choose instead', 'Visitors needing one dependable step-free nature stop should confirm site access with NT Parks first; this circuit includes stairs and uneven path options.'], ['Current check', 'NT Parks listed Wangi Falls swimming as closed under crocodile management on 9 October 2026. This is a dated status snapshot, not a permanent closure; check the live notice before departure.']],
        sources: [
          ['https://nt.gov.au/parks/find-a-park/litchfield-national-park', 'Northern Territory Parks — Litchfield National Park'],
          ['https://nt.gov.au/parks/regions/darwin/check-park-open-darwin/litchfield-national-park', 'Northern Territory Parks — Litchfield current status'],
          ['https://nt.gov.au/parks/find-a-park/litchfield-national-park/short-walks', 'Northern Territory Parks — Litchfield short walks'],
          ['https://nt.gov.au/parks/find-a-park/litchfield-national-park/florence-falls', 'Northern Territory Parks — Florence Falls access'],
          ['https://nt.gov.au/parks/find-a-park/litchfield-national-park/tolmer-falls', 'Northern Territory Parks — Tolmer Falls'],
          ['https://nt.gov.au/parks/visitor-pass', 'Northern Territory Parks — visitor pass']
        ],
        stages: [['Set the road approach', 'Use Batchelor or Cox Peninsula only after checking the route and the first site you plan to reach.'], ['Walk the Florence–Buley corridor', 'If open, park at Florence; the Florence Creek walk is 3.2 km return, Grade 2 and about 1.5 hours.'], ['Choose a falls view', 'At Florence, account for 160 steps or the longer uneven path. Tolmer offers accessible viewing decks but no swimming.'], ['Make one swim decision', 'Enter only a site the live NT Parks notice declares open; otherwise keep the day to walks and viewpoints and return in daylight.']],
        risks: [['A closed swimming area', 'A park or crocodile-management closure overrides every guidebook and old photo; do not drive around looking for an unofficial entry.'], ['Mobility and footing', 'Florence has steps or an uneven path; the Florence–Buley route and Wangi loop are not interchangeable with the accessible Tolmer viewing decks.'], ['Wet-season road and storm', 'Rain can change roads, paths and swimming status. If the official notice or storm makes the route unsafe, keep the Darwin day flexible rather than adding Kakadu.']],
        duration: 'Allow a full daylight day from Darwin, plus a Darwin night before an early flight. The named falls are separate stops, not a quick loop; shorten the route if roads or weather delay departure.',
        combine: 'Pair with a Darwin city day, not Kakadu or Nitmiluk on the same day. If your trip has too little daylight for a park return, remain in Darwin and use a verified city or museum option.',
        verify: 'Check NT Parks’ Litchfield status and visitor-pass rules, the chosen approach road, each walk and swimming notice, weather and sunset. The live closure notice takes priority over this guide’s dated 9 October 2026 Wangi snapshot.',
        faq: [
          ['Can I swim at Wangi Falls?', 'Only if the current NT Parks notice and on-site signs say the swimming area is open. On 9 October 2026 the live status page listed Wangi swimming closed under crocodile management; that dated notice can change.'],
          ['Is Florence Falls accessible without stairs?', 'The falls access has a 160-step route or a longer uneven path. NT Parks lists separate viewpoint access at Tolmer; confirm the exact path and current opening with the park if you need step-free access.'],
          ['What is a useful one-day route?', 'From Darwin, choose one road approach, take the 3.2 km return Florence Creek walk between Florence and Buley if open, and add one viewpoint only if the return remains in daylight. A swim is optional and never assumed.']
        ]
      }),
      g({
        slug: 'kakadu-nourlangie-ubirr', name: 'Kakadu: Burrungkuy & Ubirr', reviewDate: '9 October 2026', reviewIsoDate: '2026-10-09', motif: 'two separate art-country walks', instrument: 'cultural-access', imageQuery: 'Ubirr Kakadu National Park lookout Australia', imageAlt: 'Floodplain view from Ubirr in Kakadu National Park',
        summary: 'Choose one of Kakadu’s two distinct cultural landscapes for a full day: Burrungkuy (Nourlangie) near the central park corridor, or Ubirr by the East Alligator floodplain. Base, access and the steep Ubirr lookout climb decide which fits.',
        orientation: 'Start from a Kakadu base, not Darwin: Parks Australia describes the drive from Darwin as about three hours via the Stuart and Arnhem highways. Jabiru suits Ubirr and the East Alligator side; Cooinda is closer to Burrungkuy and the southern wetland corridor. They are separate day choices, not adjacent stops.',
        access: 'Burrungkuy’s return walk is 1.5 km, Grade 3; allow about two hours for the gallery and Kunwarddewardde lookout. Ubirr is a 1 km circuit with about an hour allowed; the lookout route includes a steep 250 m climb. The main art areas have accessible sections, but the Ubirr lookout climb is not step-free.',
        sequence: 'Choose the site that matches your base and mobility: spend the day at Burrungkuy from Cooinda or the central corridor, or take the East Alligator road to Ubirr from Jabiru. Read the marked art shelters and visitor interpretation, include the lookout only if the path and conditions suit, then return before dusk. Do not try to connect both with a Darwin return.',
        boundary: 'Kakadu is Aboriginal land, jointly managed by Bininj/Mungguy Traditional Owners and Parks Australia. Treat rock art as cultural knowledge, not a photo prop: remain on marked routes, do not touch rock surfaces, and follow signs about photography, ceremony and closures.',
        decisions: [['Choose Burrungkuy', 'A 1.5 km return walk with two hours allowed; the main gallery and Kunwarddewardde lookout sit in the central-south park corridor.'], ['Choose Ubirr', 'A 1 km circuit with about an hour allowed; its floodplain view includes a steep 250 m lookout climb.'], ['Skip the second site', 'The drives are separate park legs. Give each its own day, base and current access check.']],
        sources: [
          ['https://kakadu.gov.au/plan/getting-here/', 'Parks Australia — getting to Kakadu'],
          ['https://kakadu.gov.au/things-do/activities/walks/burrungkuy-nourlangie-walk/', 'Parks Australia — Burrungkuy walk'],
          ['https://kakadu.gov.au/things-do/activities/walks/ubirr-walk/', 'Parks Australia — Ubirr walk'],
          ['https://kakadu.gov.au/plan/passes/', 'Parks Australia — Kakadu park pass'],
          ['https://kakadu.gov.au/news/access-and-alerts/', 'Parks Australia — Kakadu access report'],
          ['https://kakadu.gov.au/about/about-us/', 'Parks Australia — Kakadu joint management'],
          ['https://kakadu.gov.au/discover/culture/', 'Parks Australia — Bininj/Mungguy culture']
        ],
        stages: [['Choose the base-side', 'Sleep near Jabiru for Ubirr or near Cooinda for Burrungkuy; allow the drive from Darwin before planning a full park day.'], ['Take the Ubirr option', 'If chosen and open, follow the 1 km circuit; decide in advance whether the steep 250 m climb to the lookout suits you.'], ['Take the Burrungkuy option', 'If chosen and open, allow about two hours for the 1.5 km return walk, art shelters and Kunwarddewardde lookout.'], ['Close the loop at one site', 'Use only marked, open paths and return to your base in daylight; save the other art site for another day.']],
        risks: [['The wrong base or day scope', 'Kakadu is about three hours from Darwin. Jabiru and Cooinda serve different sides; do not append the second site to a long transfer day.'], ['A climb that does not fit', 'Ubirr’s lookout involves a steep 250 m ascent. Its main art area can be a better choice for visitors who skip the lookout; recheck the current route status.'], ['Flood and cultural closure', 'The wet season can close roads and sites. A park pass does not override daily notices or Traditional Owner access directions.']],
        duration: 'Give one full day to either site. Two Kakadu nights make one art-site day possible after arrival; use three or more if adding Yellow Water as a separate day.',
        combine: 'Pair with Yellow Water on a different day. Do not combine Ubirr, Burrungkuy and the roughly three-hour Darwin drive into one day.',
        verify: 'Check the Kakadu pass, daily access report, chosen sector roads, walk and lookout openings, weather, fire, fuel and Bininj/Mungguy visitor guidance before leaving your base.',
        faq: [
          ['Can I see Burrungkuy and Ubirr in one day?', 'Plan one site for the day. They sit on different park corridors, and Kakadu is about three hours from Darwin; adding both to a long transfer leaves too little time to walk and read the sites carefully.'],
          ['Which route includes the steep climb?', 'Ubirr’s floodplain lookout route includes a steep 250 m ascent. Its main art area has an accessible section; Burrungkuy is a separate Grade 3, 1.5 km return walk for which Parks Australia recommends allowing about two hours.'],
          ['What changes in the wet season?', 'Flooding may close roads or sites. Check Kakadu’s current access report and choose only an open sector; if your route is closed, stay at your base or use a verified open alternative rather than crossing a barrier.']
        ]
      }),
      g({
        slug: 'kakadu-yellow-water', name: 'Kakadu: Yellow Water & South Alligator', reviewDate: '9 October 2026', reviewIsoDate: '2026-10-09', motif: 'Cooinda cruise-day plan', instrument: 'floodplain-clock', imageQuery: 'Yellow Water Kakadu wetlands Northern Territory', imageAlt: 'Wetlands and wildlife at Yellow Water in Kakadu National Park',
        summary: 'Build a Kakadu wetland day around a booked Yellow Water departure from Cooinda: choose the actual 90- or 120-minute cruise, reach its named check-in 20 minutes early and leave time for heat, road and access changes.',
        orientation: 'Use Cooinda as the base for Yellow Water rather than commuting from Darwin. The cruise departs at Cooinda Lodge Bus Stop; the tour is Indigenous-owned and runs year-round, but departure times and the land access around it vary. Book a specific sailing, not a presumed sunrise slot.',
        access: 'Parks Australia lists cruises of 90 or 120 minutes, up to six daily; the timetable changes, sunrise and sunset sailings are popular, and check-in is 20 minutes before departure at Cooinda Lodge Bus Stop. Confirm the exact meeting point, mobility details and cancellation terms with the operator.',
        sequence: 'Stay at Cooinda or another confirmed Kakadu base with a road plan. Book the exact cruise, meet 20 minutes early, follow the crew’s wildlife instructions, then leave a rest window before any second stop. Add Warradjan Cultural Centre or a boardwalk only after checking its current opening and access; return to your base before dusk.',
        boundary: 'Yellow Water is living Bininj/Mungguy Country and crocodile habitat. View wildlife from the managed vessel or an open boardwalk; never approach the bank, enter floodplain water, feed animals, fly a drone where prohibited or pursue a sighting.',
        decisions: [['Choose a departure', 'The official cruise listing offers 90- and 120-minute sailings; confirm the exact schedule and check-in with the operator.'], ['Sleep near Cooinda', 'The Cooinda base protects the early or late boat slot and removes the long Darwin return from the cruise day.'], ['Keep a ground fallback', 'A land stop is optional and status-dependent; rest or stay at base if rain, heat or road notices change the day.']],
        sources: [
          ['https://kakadu.gov.au/things-do/tours/boat-cruises/yellow-water-cruises/', 'Parks Australia — Yellow Water cruises'],
          ['https://kakadu.gov.au/stay/hotels-cabins/cooinda-lodge/', 'Parks Australia — Cooinda Lodge'],
          ['https://kakadu.gov.au/news/access-and-alerts/', 'Parks Australia — Kakadu access report'],
          ['https://kakadu.gov.au/plan/when-come/seasons/', 'Parks Australia — Kakadu seasons'],
          ['https://kakadu.gov.au/plan/passes/', 'Parks Australia — Kakadu park pass'],
          ['https://kakadu.gov.au/things-do/activities/walks/burrungkuy-nourlangie-walk/', 'Parks Australia — nearby Burrungkuy walk']
        ],
        stages: [['Secure the Cooinda base', 'Check road access and stay near the departure before choosing an early or late cruise.'], ['Book the actual sailing', 'Select a listed 90- or 120-minute trip and confirm its check-in point, time, mobility and cancellation terms.'], ['Arrive at the named stop', 'Be at Cooinda Lodge Bus Stop 20 minutes before departure; follow the crew’s wildlife and vessel guidance.'], ['Protect the ground gap', 'Rest after the boat; add only a currently open, confirmed land stop, then return to base before dusk.']],
        risks: [['Assuming a sunrise time', 'Schedules vary and popular sailings can book out. Use the operator’s exact departure rather than a generic clock time.'], ['Flooded road or closed boardwalk', 'The cruise and land access are different checks. On 8 October 2026 the access report listed the Yellow Water boardwalk open only to the pontoon; check the live report before adding the extension.'], ['Crocodile and wildlife boundary', 'Stay aboard or on an open managed path. No bank approach, swimming, feeding or pursuit is part of the viewing plan.']],
        duration: 'Give Yellow Water one full day inside a multi-night Kakadu stay. Two nights can fit one cruise day if arrival and departure leave a full window; three nights allow a separate cultural-site day without stacking drives.',
        combine: 'Pair with Burrungkuy or Ubirr on another day. Do not add the Darwin road transfer or both art sites to the cruise day.',
        verify: 'Confirm cruise date, departure, check-in, duration, accessibility and cancellation with the operator; recheck Kakadu roads, pass, boardwalk, weather and accommodation on the official access report.',
        faq: [
          ['How early should I arrive for Yellow Water?', 'Parks Australia asks cruise guests to meet at Cooinda Lodge Bus Stop 20 minutes before the booked departure. Verify the meeting point and time on your own ticket and operator notice.'],
          ['Can I walk beyond the Yellow Water pontoon?', 'Only if the current boardwalk notice allows it. The access report checked on 8 October 2026 listed the boardwalk open only to the pontoon; that dated status can change.'],
          ['Is Yellow Water a sunrise-only cruise?', 'No. The official listing describes 90- and 120-minute cruises, up to six per day, with schedules that vary. Select and confirm the actual departure; do not plan around an assumed sunrise time.']
        ]
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
        slug: 'mparntwe-alice-springs', routeTitle: "Plan an Alice Springs town day",
        name: 'Mparntwe / Alice Springs',
        motif: 'town, interpretation and preparation',
        instrument: 'gateway-compass',
        imageQuery: 'Alice Springs Mparntwe MacDonnell Ranges',
        imageAlt: 'Road and rocky landscape at Anzac Hill in Alice Springs',
        summary: "Make Alice Springs (Mparntwe) more than a fuel stop: pair the 1872 Telegraph Station precinct with the Desert Park's three habitats, then prepare for a separate day in Tjoritja.",
        orientationTitle: 'Read the town in two different ways',
        orientation: 'Mparntwe is the Arrernte name for Alice Springs. The Telegraph Station preserves a dated Overland Telegraph chapter and begins Larapinta Section 1; 7 km west, the Desert Park moves through sand country, desert river and woodland. These are two distinct introductions to the region, not interchangeable photo stops.',
        interpretation: 'The Telegraph Station records the history of the 1872 line and one early European settlement site. Arrernte presence does not begin with that station. The Desert Park pairs public cultural presentations with displays about regional landscapes and wildlife; use the material offered there rather than repeating restricted stories.',
        access: 'The Telegraph Station is 4 km north of town: its reserve is open 8 am–9 pm and its historic precinct 8 am–4 pm. The Desert Park is 7 km west along Larapinta Drive, open 7:30 am–6 pm with last entry at 4:30 pm. Check current hours, closures and road notices before setting a timed visit.',
        sequence: 'Give the Telegraph precinct and Desert Park separate blocks, allowing for their different locations and the Desert Park entry cutoff. Section 1 of the Larapinta Trail starts at the Telegraph Station but runs 24.7 km to Simpsons Gap, takes about 9 hours and is Grade 4; treat it as a full hiking day, not an extra town walk. Finish with fuel, water, accommodation and road checks for the next leg.',
        boundary: 'Mparntwe is Arrernte Country. Use public interpretation and names preferred by Traditional Owners; remain on marked tracks, and do not publish restricted places or stories.',
        reviewDate: '4 October 2026',
        reviewIsoDate: '2026-10-04',
        stages: [
          ['Set a town day', 'Leave a recovery and resupply block after arrival; keep the remote drive out of the same day as a long walk.'],
          ['Visit the Telegraph precinct', 'Four kilometres north, the station interprets the 1872 Overland Telegraph. Check the historic precinct hours; Larapinta Section 1 begins here.'],
          ['Choose the Desert Park lens', 'Seven kilometres west, walk through sand country, desert river and woodland. Check the Nature Theatre and cultural presentation schedule, or reserve the one-hour foothills tour.'],
          ['Prepare the next leg', 'Confirm vehicle, fuel, water, park pass, communications and live road conditions before leaving town.']
        ],
        risks: [
          ['Heat and timing', 'Avoid strenuous outdoor activity in the heat of the day; both sites publish current hours and access notices.'],
          ['Trail status', 'Flood damage can affect paths at the Telegraph Reserve. Check the live status instead of assuming every short route is open.'],
          ['Remote-road gap', 'Town services do not continue along every outback road. Leave with the required fuel, water, vehicle plan and offline directions.']
        ],
        decisions: [
          ['Telegraph Station | town history', 'Four kilometres north of town, this is the best-preserved station on the Overland Telegraph Line. The short precinct visit is distinct from Larapinta Section 1: the walk to Simpsons Gap is 24.7 km, Grade 4 and about nine hours.'],
          ['Desert Park | three habitats', 'At 7 km west on Larapinta Drive, the park links sand country, desert river and woodland with public interpretation, a birds-of-prey Nature Theatre and a Nocturnal House. Last entry is 4:30 pm; verify the current presentation timetable.'],
          ['Town stay | reset and provision', 'Allow two nights before a regional loop when arrival, interpretation and vehicle preparation all matter. A town night gives you a separate daylight window for Tjoritja instead of turning the first park visit into an airport transfer.']
        ],
        duration: 'Allow two nights before a regional loop if you want a town day and a separate departure window.',
        combine: 'Use the town as the base for Tjoritja, but give the park drive and any long Larapinta section their own daylight.',
        verify: 'Check Telegraph precinct and Desert Park hours, park and trail status, heat advice, fuel, water, visitor pass and road conditions.',
        faq: [
          ['Is Larapinta Section 1 a short walk from the Telegraph Station?', 'No. It runs 24.7 km to Simpsons Gap, is Grade 4 and takes about nine hours. Use one of the reserve short walks unless you have planned the full section as a hike.'],
          ['Can I fit the Desert Park into a late afternoon?', 'Plan around last entry at 4:30 pm. The park is 7 km west of town and includes three habitat areas, scheduled presentations and a one-hour foothills tour; check the live timetable before choosing a short visit.'],
          ['How long should I stay in Alice Springs before driving west?', 'Two nights leave room to recover, visit one or both interpretive sites and set up the next day with fuel, water, road information and a realistic departure time.']
        ],
        sources: [
          ['https://www.education.gov.au/indigenous-education/resources/alice-springs-mparntwe-education-declaration', 'Australian Government Department of Education — Alice Springs (Mparntwe) Education Declaration'],
          ['https://nt.gov.au/parks/find-a-park/alice-springs-telegraph-station-historical-reserve', 'Northern Territory Parks — Alice Springs Telegraph Station'],
          ['https://nt.gov.au/parks/find-a-park/alice-springs-desert-park', 'Northern Territory Parks — Alice Springs Desert Park'],
          ['https://nt.gov.au/parks/find-a-park/tjoritja-west-macdonnell-national-park/larapinta-trail/sections-of-the-larapinta-trail', 'Northern Territory Parks — Larapinta Trail sections']
        ]
      }),
      g({
        slug: 'tjoritja-west-macdonnell', routeTitle: "Choose an Ormiston or Simpsons Gap day",
        name: 'Tjoritja / West MacDonnell Ranges',
        motif: 'gorge road and water decisions',
        instrument: 'range-mileage',
        imageQuery: 'West MacDonnell Ranges Tjoritja Ormiston Gorge',
        imageAlt: 'Rocky gorge in Tjoritja West MacDonnell National Park',
        summary: 'Choose a near-town gorge or a full westward drive: Simpsons Gap is 20 minutes from Alice Springs, while Ormiston Gorge is 135 km away.',
        orientationTitle: 'Choose by distance, then by water',
        orientation: 'Tjoritja / West MacDonnell National Park stretches 161 km west of Alice Springs, with sites reached along Larapinta Drive and Namatjira Drive. Simpsons Gap offers short walks near town; Ormiston is a full-distance outing with a permanent waterhole, campground and longer trail options. A map pin is not a measure of the return drive.',
        interpretation: 'At Simpsons Gap, the permanent waterhole, ghost gums and range-facing short walks sit close to town; black-footed rock-wallabies may appear around dawn or dusk, and swimming is not permitted. Farther west, Ormiston Gorge holds a permanent waterhole about 500 m from its visitor centre, but the water is extremely cold and can be deep. Read the signed route and current water conditions before deciding to enter.',
        access: 'An NT Parks Visitor Pass is required. Reach visitor areas from Alice Springs along Larapinta Drive and Namatjira Drive; check closures and road conditions first. The Red Centre Way / Mereenie Loop toward Watarrka is unsealed and requires a permit; the NT recommends a 4WD for that route.',
        sequence: 'For a short outing, choose Simpsons Gap and one of its named walks. For Ormiston, leave early, make the 135 km westward leg the day’s anchor and add at most one stop on the return. As of 4 October 2026, NT Parks warns that Ormiston Pound Walk requires a short swim through deep, cold water; verify the live status and do not start unless prepared for that crossing.',
        boundary: 'Tjoritja is Arrernte Country. Follow public park interpretation, stay on formed tracks, do not swim at Simpsons Gap and respect any cultural or waterhole closure. Boil water where park signs require it.',
        reviewDate: '4 October 2026',
        reviewIsoDate: '2026-10-04',
        stages: [
          ['Set the distance limit', 'Choose Simpsons Gap for a short town-side outing or Ormiston Gorge for a full westward day; do not plan every gorge as one loop.'],
          ['Choose one walk', 'Match the named route, grade, heat and daylight to the site. Treat Larapinta sections as multi-hour or overnight hikes, not roadside add-ons.'],
          ['Read the water notice', 'Check swimming rules, water temperature, depth and any crossing requirement at the exact site before entering or starting a loop.'],
          ['Return in daylight', 'Carry water and offline directions, refuel in town and leave a margin for a long drive and wildlife on the road.']
        ],
        risks: [
          ['Distance mistaken for a day trip', 'Ormiston is 135 km west of Alice Springs; build the return and one main walk into the plan before adding another stop.'],
          ['Cold or restricted water', 'Ormiston’s waterhole is very cold and can reach 14 m deep. Do not jump or dive; Simpsons Gap is closed to swimming.'],
          ['Changing park status', 'Fire, flood, maintenance and road conditions can close sites. The Ormiston Pound crossing requirement is a live condition, so recheck on the day.']
        ],
        decisions: [
          ['Simpsons Gap | short walks or cycle', 'Twenty minutes from Alice Springs, Simpsons Gap has Ghost Gum Walk, Cassia Hill and Woodland Trail; swimming is prohibited. The sealed bicycle path runs 17 km one way from a start 7 km out of town, so treat it as its own ride with water and a return plan.'],
          ['Ormiston Gorge | full-day base', 'At 135 km west, Ormiston has short accessible routes, half-day circuits and overnight walks. Its permanent waterhole is 500 m from the visitor centre and may be up to 14 m deep. NT Parks currently warns that Ormiston Pound Walk requires a short swim through deep cold water.'],
          ['Larapinta | commit to sections', 'This 12-section trail is a separate hiking plan: Simpsons Gap lies on Sections 1 and 2, while Ormiston Gorge is on Sections 9 and 10. Check section maps, water and closure notices before choosing an overnight itinerary.']
        ],
        duration: 'Give Ormiston a full day from Alice Springs; add nights for long walks or Larapinta sections. Simpsons Gap can fit a shorter town-side outing.',
        combine: 'Keep Watarrka and Uluṟu on separate road-trip days. A Simpsons Gap visit is the practical nearby pairing; do not treat Ormiston as a quick stop on the way west.',
        verify: 'Check the NT Parks Visitor Pass, site openings, heat and fire notices, road conditions, water and swim advice, fuel and sunset.',
        faq: [
          ['Can I visit Simpsons Gap and Ormiston Gorge in one day?', 'Ormiston lies 135 km west of Alice Springs and needs a full-day plan. Simpsons Gap is only 20 minutes from town; combine it with one other stop only when current daylight and road conditions leave a safe return.'],
          ['Is the water safe for a swim?', 'Swimming is prohibited at Simpsons Gap. Ormiston has a permanent swimming waterhole, but the water is extremely cold, may be 14 m deep and contains submerged logs and rocks. Never jump or dive, and check current crossing notices.'],
          ['Does the Red Centre Way need a special vehicle or permit?', 'NT Parks says the Mereenie Loop between the West Macs and Watarrka is unsealed, requires a permit and is recommended for 4WD. Check the road report and permit terms before selecting it.']
        ],
        sources: [
          ['https://nt.gov.au/parks/find-a-park/tjoritja-west-macdonnell-national-park', 'Northern Territory Parks — Tjoritja / West MacDonnell National Park'],
          ['https://nt.gov.au/parks/find-a-park/tjoritja-west-macdonnell-national-park/simpsons-gap', 'Northern Territory Parks — Simpsons Gap'],
          ['https://nt.gov.au/parks/find-a-park/tjoritja-west-macdonnell-national-park/ormiston-gorge', 'Northern Territory Parks — Ormiston Gorge'],
          ['https://nt.gov.au/parks/find-a-park/tjoritja-west-macdonnell-national-park/larapinta-trail/sections-of-the-larapinta-trail', 'Northern Territory Parks — Larapinta Trail sections']
        ]
      }),
      g({
        slug: 'watarrka-kings-canyon', routeTitle: "Choose a Watarrka walk by its heat cutoff",
        name: 'Watarrka / Kings Canyon',
        motif: 'canyon rim and heat gate',
        instrument: 'heat-gate',
        imageQuery: 'Kings Canyon Watarrka Northern Territory rim',
        imageAlt: 'Sandstone cliffs at Watarrka Kings Canyon',
        summary: 'Stay near Watarrka and let the 36°C start limits choose between the six-kilometre Rim Walk and three shorter routes.',
        orientationTitle: 'A rim walk is one of four different walks',
        orientation: 'Kings Canyon’s red walls rise about 100 m above Kings Creek to a plateau of rocky domes. The Rim Walk reaches that exposed rim after a difficult climb; the South Wall stops before the Garden of Eden, Kings Creek stays below the rim, and Kathleen Springs follows a paved, accessible path to a significant waterhole.',
        interpretation: 'The canyon is not a single summit viewpoint. From the rim, the plateau and domes open above the sheltered creek, where the NT notes relict plants including the MacDonnell Ranges cycad. The four public routes have separate markers, grades and heat cutoffs; taking a shorter one does not connect it to the Rim Walk.',
        access: 'Watarrka lies about 450 km southwest of Alice Springs. The sealed Stuart and Lasseter highways and Luritja Road suit 2WD vehicles; the Red Centre Way / Mereenie Loop is unsealed, needs a permit and is recommended for 4WD. Camping is not allowed inside the park: stay at Kings Canyon Resort or Kings Creek Station and check road conditions before departure.',
        sequence: 'Sleep near the park, check the Watarrka forecast and walk status at first light, then choose one route. At a forecast of 36°C or higher, start the Rim Walk before 9 am or South Wall Return before 11 am. The Rim Walk is clockwise; if its climb or cutoff does not fit, Kings Creek or Kathleen Springs is a complete alternative.',
        boundary: 'Watarrka is culturally significant Luritja and Arrernte Country. Keep to marked paths and boardwalks, stay back from cliff edges, do not swim at Kathleen Springs and respect closures and public cultural guidance.',
        reviewDate: '4 October 2026',
        reviewIsoDate: '2026-10-04',
        stages: [
          ['Base beside the park', 'Book the nearby resort or station: overnight camping is not permitted inside Watarrka National Park.'],
          ['Apply the heat gate', 'Check the Watarrka forecast before sunrise. At 36°C or above, Rim Walk entry ends at 9 am and South Wall entry at 11 am.'],
          ['Choose one track', 'Use the clockwise rim for the full canyon, South Wall for its separate return, Kings Creek for a shorter walk or Kathleen Springs for paved accessible access.'],
          ['Recover before the drive', 'Carry water, rest after the walk and set the next road leg in daylight. If using Mereenie, confirm 4WD suitability and the current permit.']
        ],
        risks: [
          ['Heat cutoff', 'At 36°C or above, the Rim and South Wall start deadlines are mandatory. A later start means choosing another walk.'],
          ['Exposed rim and steep ascent', 'The Rim Walk begins with a difficult climb and follows cliff edges. Follow the clockwise arrows, stairs and boardwalks; do not approach edges.'],
          ['Route mistaken for access', 'A 2WD can use the sealed highway route. The Mereenie route is unsealed, needs a permit and is recommended for 4WD; check road status before committing.']
        ],
        decisions: [
          ['Kings Canyon Rim | 6 km loop', 'Grade 4, 3–4 hours, clockwise, with a difficult initial climb. The halfway Garden of Eden is a rockhole among rare plants and swimming is not allowed. At a forecast of 36°C or above, start before 9 am.'],
          ['South Wall | 4.8 km return', 'Grade 3, about two hours, with a steep climb to the south wall. At 36°C or above, start before 11 am. This route ends at a one-way gate and does not reach the Garden of Eden or the rest of the rim.'],
          ['Kings Creek or Kathleen Springs | shorter options', 'Kings Creek is 2.6 km return, about one hour, Grade 2. Kathleen Springs is 2.4 km return, about 1.5 hours, Grade 1, sealed and wheelchair accessible; it lies 21 km by road from the canyon. Do not swim at its culturally significant waterhole.']
        ],
        duration: 'Stay one or two nights near Watarrka so the approach, walk and onward drive do not compete for the same daylight.',
        combine: 'Use Watarrka as a separate road-trip overnight between bases, not as a same-day return from Uluṟu.',
        verify: 'Check the NT Parks Visitor Pass, live walk opening, Watarrka temperature, route and road conditions, accommodation, fuel and Mereenie permit if relevant.',
        faq: [
          ['Can South Wall Return be joined to the Rim Walk?', 'No. South Wall Return uses its own out-and-back path to a one-way gate; it does not access the Garden of Eden or the rest of the rim.'],
          ['Can I reach Watarrka in a 2WD?', 'The sealed Stuart and Lasseter highways and Luritja Road are suitable for 2WD. The Red Centre Way / Mereenie Loop is unsealed, requires a permit and is recommended for 4WD; check current road advice.'],
          ['Is Kathleen Springs a swimming stop?', 'No. The 2.4 km paved Grade 1 return path reaches a waterhole significant to local Aboriginal people and important to wildlife; swimming is prohibited.']
        ],
        sources: [
          ['https://nt.gov.au/parks/find-a-park/watarrka-national-park', 'Northern Territory Parks — Watarrka National Park'],
          ['https://nt.gov.au/parks/find-a-park/watarrka-national-park/short-walks', 'Northern Territory Parks — Watarrka short walks'],
          ['https://roadreport.nt.gov.au/home', 'Northern Territory Road Report']
        ]
      }),
      g({
        slug: 'uluru-cultural-landscape', name: 'Uluṟu Cultural Landscape', motif: 'surface, water and respect', orientationTitle: "Choose the right walk", routeTitle: "Plan Uluṟu’s half-day for cool hours", instrument: 'cultural-compass', imageQuery: 'Uluru sunset Northern Territory Australia', imageAlt: 'Uluṟu rising from the central Australian desert',
        summary: "Uluṟu is more than a red landmark: Aṉangu have cared for this living Country for generations, and the park is jointly managed with the Australian Government. Begin with the Cultural Centre, then read the exposed sandstone and water-shaped shade around Muṯitjulu Waterhole.",
        orientation: "Uluṟu and Kata Tjuṯa formed from ancient sediment fans that hardened into rock and later tilted as the land shifted. Uluṟu is mainly arkose sandstone; iron oxide gives its weathered surface the familiar red, while pale patches expose less-weathered rock. Geology is one layer of this place. Tjukurpa is Aṉangu law, knowledge and spiritual philosophy, and it guides the park's joint management. Start with the Tjukurpa Tunnel and multilingual displays at the Cultural Centre; let Aṉangu interpretation set the limits of what is shared.",
        interpretation: "The two short walks end in different landscapes. From the Mala carpark, the public route to Kaṉtju Gorge passes publicly described ancient campsites and a kitchen cave before reaching sheer gorge walls. Kuniya ends at Muṯitjulu Waterhole, one of the area's few permanent water sources, with river red gums, shade and tall grasses. These are visitor-route descriptions, not permission to enter caves or reproduce restricted Tjukurpa. Stay on the open track and use park signs as the authority at each site.",
        access: "Fly to Ayers Rock / Connellan Airport (AYQ) at Yulara, then prearrange a hire car, coach tour or the Uluṟu Hop On Hop Off bus for the park. There is no taxi or other public transport inside the park; the resort shuttle links accommodation with Yulara's town square only. From Alice Springs, Uluṟu is 465 km by road and Parks Australia estimates about 5.5 hours of direct driving before stops. Make that a travel day, not the approach to a long exposed walk.",
        sequence: "For a half-day from Yulara, use the cool morning for the designated Talinguṟu Nyakunytjaku sunrise view, walk Mala to Kaṉtju Gorge before late-morning heat, then spend time at the Cultural Centre and have lunch there. Check that the lookout and Mala track are open for your date, and check the centre's current hours before setting out. Leave the full 10.6 km Uluṟu Base Walk and Kata Tjuṯa for a separate day.",
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
            "Uluṟu Base Walk | full circuit",
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
            "Kuniya is the shorter 1 km return (30–45 minutes, Grade 2) to the waterhole. Mala is 2 km return (about 90 minutes, Grade 2) to Kaṉtju Gorge. The complete Uluṟu Base Walk is 10.6 km (about 3.5 hours, Grade 3) and needs a cool morning. Use the current official walk page for changes or closures."
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
            "Parks Australia – Uluṟu Base Walk"
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
        slug: 'kata-tjuta', routeTitle: "Choose Waḻpa Gorge or the Valley circuit",
        name: 'Kata Tjuṯa',
        motif: 'gorge walk and valley loop',
        instrument: 'valley-profile',
        imageQuery: 'Kata Tjuṯa domes Northern Territory',
        imageAlt: 'The domes of Kata Tjuṯa in Uluṟu Kata Tjuṯa National Park',
        summary: 'Waḻpa Gorge is a one-hour return walk; the Valley of the Winds is a steep, 7.4 km loop with a heat cutoff and its own Aṉangu photography rules.',
        orientationTitle: 'Choose a gorge or a full valley circuit',
        orientation: 'Waḻpa Gorge’s rocky track rises gently toward a seasonal stream and a grove of spearwood. The Valley of the Winds runs among the domes, with two lookouts and a more demanding grade. Its full loop can be easier than returning from the second lookout by the same route, so compare the whole circuit before choosing an out-and-back.',
        interpretation: 'These are different ways to read Kata Tjuṯa: Waḻpa follows a narrow gorge through a desert refuge for plants and animals; Valley of the Winds crosses the open valley between domes. Parks Australia reports pink daisies near Waḻpa’s entrance in late winter and water halfway around the Valley circuit. Take only the details the public track offers; Aṉangu set firm limits on recording the rock formations.',
        access: 'Travel from Yulara with park entry, water and return transport settled before departure. Both official walk pages list no toilets. The Valley of the Winds is Grade 4, steep and rocky; Waḻpa Gorge is Grade 3 and has no wheelchair access. Recheck park alerts and each walk page for same-day closures.',
        sequence: 'Decide between Waḻpa and the Valley before leaving Yulara, then check the forecast and access status. When the temperature is forecast or observed at 36°C or higher, the Valley closes at Karu Lookout from 11 am; start early enough for the chosen full route, or use a permitted shorter walk or designated viewing area. Keep the other major Uluṟu walk on a separate day.',
        boundary: 'Kata Tjuṯa is sacred Aṉangu Country. On the Valley of the Winds, do not photograph or film the rock formations anywhere on the walk. At Waḻpa Gorge, frame both sides of the gorge when recording it. Remain on marked paths and do not enter waterholes.',
        reviewDate: '4 October 2026',
        reviewIsoDate: '2026-10-04',
        stages: [
          ['Check the walk status', 'Read Parks Australia alerts, the temperature forecast and the photography guidance before setting off.'],
          ['Choose the commitment', 'Select Waḻpa for a 2.6 km, one-hour return, or the 7.4 km Valley circuit for a three-to-four-hour Grade 4 walk.'],
          ['Start with the cutoff in mind', 'At 36°C or above, the Valley closes at Karu from 11 am. Carry water; there are no toilets on either walk.'],
          ['Return without rushing', 'Stay on formed tracks, leave time for the drive back to Yulara and keep Uluṟu for a separate day.']
        ],
        risks: [
          ['Heat closure', 'The Valley of the Winds closes at its first lookout from 11 am when the forecast or actual temperature reaches 36°C.'],
          ['Loose rock and grade', 'The Valley is steep and rocky; Waḻpa’s route still requires care on its uneven surface. Wear sturdy footwear and turn back if footing or heat is wrong.'],
          ['Recording sensitive formations', 'The Valley’s no-photo/no-video guidance applies throughout the walk. Waḻpa requires both sides of the gorge to remain in frame.']
        ],
        decisions: [
          ['Waḻpa Gorge | 2.6 km return', 'Grade 3, about one hour. The rocky track gently rises to a seasonal stream and spearwood grove; pink daisies may appear at the entrance in late winter. There is water but no toilet, and photography must keep both sides of the gorge in frame.'],
          ['Valley of the Winds | 7.4 km loop', 'Grade 4, roughly 3–4 hours, with two lookouts and water halfway. Karu is 2.2 km return / about one hour; Karingana is 5.4 km return / about 2.5 hours. The full circuit can be easier than going out to Karingana and returning. At 36°C or above, Karu access closes from 11 am.'],
          ['Viewpoint | when the route is closed', 'If heat, wind, fitness or a cultural closure rules out a walk, use a designated viewing area and keep time for the return to Yulara. Do not turn a closure into permission to leave the marked track or photograph a restricted face.']
        ],
        duration: 'Give Kata Tjuṯa a dedicated half or full day. Plan a second day for Uluṟu instead of combining two exposed walks.',
        combine: 'Pair with the designated viewing area only if transport and daylight allow; reserve Uluṟu’s longer walk for another day.',
        verify: 'Check park opening, temperature, Valley cutoff, wind, cultural closures, entry pass, water, transport and the current photography map.',
        faq: [
          ['Is the first Valley of the Winds lookout a short option?', 'Karu Lookout is 2.2 km return and about one hour. The route is still rocky; from 11 am it closes when the forecast or actual temperature is 36°C or higher.'],
          ['Can I photograph Kata Tjuṯa on the Valley walk?', 'No. Aṉangu ask visitors not to photograph or film the rock formations anywhere along the Valley of the Winds. At Waḻpa Gorge, keep both sides of the gorge in frame when recording it.'],
          ['Can I visit Kata Tjuṯa after a long Uluṟu walk?', 'Give the walks separate days. The Valley loop takes three to four hours before the drive and recovery time; heat or a closure may also narrow the walking window.']
        ],
        sources: [
          ['https://uluru.gov.au/things-do/activities/walks/kata-tjuta-walks/', 'Parks Australia — Kata Tjuṯa walks'],
          ['https://uluru.gov.au/things-do/activities/walks/kata-tjuta-walks/walpa-gorge-walk/', 'Parks Australia — Waḻpa Gorge walk'],
          ['https://uluru.gov.au/things-do/activities/walks/kata-tjuta-walks/valley-winds-walks/', 'Parks Australia — Valley of the Winds walks'],
          ['https://uluru.gov.au/plan/buy-your-pass/', 'Parks Australia — park entry']
        ]
      })
    ]
  })
];
