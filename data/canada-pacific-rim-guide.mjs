import { canadaGuide, defineCanadaCluster } from './canada-guide-builder.mjs';

const g = (definition) => canadaGuide(definition);

export const pacificRimCluster = defineCanadaCluster({
  slug: 'pacific-rim-tofino', name: 'Pacific Rim & Tofino', region: 'British Columbia', band: 'pacific', family: 'rainforest-tide',
  label: 'Outer island · rainforest, surf and tidal edge', tagline: 'the forecast chooses the order.',
  reviewDate: '12 October 2026', isoDate: '2026-10-12',
  hubIntro: 'Build Pacific Rim around one Tofino–Ucluelet lodging base, a named Long Beach trail, the Lighthouse Loop and an optional licensed boat day. The Island Highway 4 crossing and exposed Pacific conditions set the order; park, trail and operator status checked 12 October 2026 must be checked again for your dates.',
  stay: 'Three nights leave about two full days after arrival and departure, so choose the park day plus either Ucluelet or a boat outing. Four nights allow three focused days—Long Beach, Lighthouse Loop and one marine day—with room to move their order. Add a fifth night for a real transport or weather buffer; it does not guarantee a boat will run.',
  transfer: 'A car gives the most reliable access between Tofino, Ucluelet and dispersed park trailheads. Parks Canada estimates about 3.5 hours of driving from Nanaimo and 5 hours from Victoria; take Highway 4 west from Port Alberni and check DriveBC for work, incidents and weather. BC Ferries serves Horseshoe Bay–Departure Bay (Nanaimo); check the exact sailing and vehicle booking rules. As checked 12 October 2026, VI Connector and Tofino Bus report that they are not operating, so do not plan around a scheduled coach without reconfirming service and local connections.',
  season: 'Summer brings long daylight and high demand: secure a suitable Tofino or Ucluelet base and any chosen ferry or boat product early, then confirm its live terms. Fall and winter can bring heavy rain, surf and shorter daylight; keep exposed headlands and marine departures movable, and check road and trail notices on the day.',
  fallback: 'If the boat is cancelled, use the Long Beach Unit or the signed Lighthouse Loop only while their current notices and weather allow. If wind or rain makes exposed walking a poor choice, shorten the outside block and use an open local indoor stop; verify its hours instead of assuming year-round service.',
  sources: [
    ['https://parks.canada.ca/pn-np/bc/pacificrim', 'Parks Canada — Pacific Rim National Park Reserve'],
    ['https://parks.canada.ca/pn-np/bc/pacificrim/visit', 'Parks Canada — plan your visit and driving distances'],
    ['https://parks.canada.ca/pn-np/bc/pacificrim/activ/randonnee-hiking/etat-sentiers-trail-conditions', 'Parks Canada — dated trail conditions'],
    ['https://parks.canada.ca/pn-np/bc/pacificrim/activ/exploitants-operators', 'Parks Canada — licensed operators'],
    ['https://www.drivebc.ca/', 'DriveBC — Vancouver Island highway conditions'],
    ['https://weather.gc.ca/', 'Environment and Climate Change Canada — weather and alerts'],
    ['https://www.bcferries.com/routes-fares/discover-route-map', 'BC Ferries — routes, fares and sailing information'],
    ['https://viconnector.com/', 'Vancouver Island Connector / Tofino Bus — current operating notice'],
    ['https://www.wildpacifictrail.com/lighthouse.html', 'Wild Pacific Trail Society — Lighthouse Loop'],
    ['https://tofino.ca/', 'District of Tofino — local services and visitor notices']
  ],
  faq: [
    ['How many nights should I stay around Pacific Rim?', 'Three nights gives about two full days and calls for a choice between Ucluelet and a boat day. Four nights gives three focused days and lets you move the boat, Long Beach and Lighthouse Loop around the forecast. Add a fifth night if missing a road, ferry or marine connection would disrupt your onward trip.'],
    ['Can I reach Tofino by scheduled bus?', 'Not on the live notice we checked 12 October 2026: VI Connector and Tofino Bus both state that they are not operating and have no schedules available. Recheck before booking, and confirm both the island transfer and local access to park trailheads or a boat dock; do not assume a bus service has resumed.'],
    ['What should I book before choosing days?', 'Reserve lodging for your exact dates and check the BC Ferries sailing and vehicle rules if driving from the mainland. Book a marine trip only after confirming its live operator listing, departure dock, cancellation terms and return time. Park passes, trail access and conditions are separate checks.']
  ],
  searchKeywords: ['Tofino accommodation base', 'Nanaimo ferry', 'Highway 4 west coast Vancouver Island', 'VI Connector not operating'],
  guides: [
    g({
      slug: 'long-beach-rainforest', name: 'Long Beach & Rainforest Trails', instrument: 'shoreline weather strip', layout: 'tide-clock',
      searchKeywords: ['Long Beach tide and surf', 'Rainforest Trail A 1 km', 'Shorepine Bog no stairs', 'Schooner Cove closed'],
      imageQuery: 'Pacific Rim National Park Long Beach Tofino', imageAlt: 'Long Beach at low surf with Lone Rock, Pacific Rim National Park Reserve',
      summary: 'Pair a Long Beach shoreline window with one named walk in Pacific Rim National Park Reserve. Rainforest Trail A is a 1 km moderate loop with many steps; Shorepine Bog is an 800 m loop with no stairs but an uneven boardwalk. Trail status checked 12 October 2026 is only a snapshot.',
      access: 'The Long Beach Unit lies on Highway 4 between Tofino and Ucluelet. A car is the practical default because beach and trail lots are spread along the road; use only designated parking and check the current park pass and trailhead notices. Do not count a bus unless the operator confirms service and a connection to the chosen lot.',
      tradeoff: 'This is the best coast-plus-forest day when you want to control the order yourself. The open beach is exposed to surf and wind; Rainforest A or the shorter Shorepine Bog loop provides a different surface and shelter, not a promise of dry weather.',
      fallback: 'If wind or surf makes the shore uncomfortable, shorten the beach visit and choose an open rainforest loop. If a trail is closed, follow the dated Parks Canada table and use only another open signed route; a closure is not permission to walk around a barrier.',
      duration: 'Allow one full day, but choose one trail rather than collecting every stop. A practical sequence is pass and trail-status check, Rainforest Trail A or Shorepine Bog, one Long Beach access, then the return drive while rested. Rainforest A has many steps; Shorepine Bog has no stairs but its boardwalk can be uneven.',
      combine: 'Combine with the Ucluelet Lighthouse Loop during a four-night stay, but give it a separate day if you want a full beach walk. Do not append the long Highway 4 crossing back toward Nanaimo or Victoria after a long shoreline day.',
      verify: 'On the morning, check Parks Canada trail closures, warnings and parking notes, the marine forecast and tide/current guidance. As checked 12 October 2026, Rainforest A and B were open, Schooner Cove was closed until further notice, Combers Beach Trail was caution with boardwalk disrepair, and wolf warnings appeared in the Long Beach Unit. Recheck the live table; these conditions change.',
      stages: [
        ['Check pass, tide and trail notices', 'Before leaving Tofino or Ucluelet, open Parks Canada’s dated Long Beach Unit trail table, read the current surf and tide guidance, and choose an open legal trailhead. Keep Combers and Schooner Cove out of a default plan until their live notices permit them.'],
        ['Walk one forest loop', 'Use Rainforest Trail A for its 1 km loop if you are comfortable with many stairs and uneven boardwalk, or choose the 800 m Shorepine Bog loop for a no-stair option with uneven boardwalk. Stay on the signed path and do not assume an RV can use the small Rainforest Trail parking lots.'],
        ['Use one Long Beach access', 'Walk the beach at the pace and length conditions allow. Watch the water and incoming tide, stay away from logs and creek crossings when notices warn of hazards, and do not turn a scenic shoreline into a swim recommendation.'],
        ['Return along Highway 4', 'Choose the legal lot for your next stop, then leave enough daylight and driver attention for the return to your lodging. If a lot or trail is full or closed, move on rather than parking on the shoulder.']
      ],
      watch: [
        ['Water and tide', 'The Park warns that creeks can become impossible to cross at high tide or after heavy rain. Read current water-hazard guidance and turn back early; tide pools and surf do not justify crossing moving water.'],
        ['Dated closures', 'The 12 October 2026 trail table listed Schooner Cove closed, Combers in caution and wolf warnings. Recheck the live notice before each walk and obey temporary dog or access restrictions.'],
        ['Footing and parking', 'Rainforest A has many steps; Shorepine Bog has an uneven boardwalk; both require slower footing when wet. Use signed lots only and do not assume every trailhead accommodates an RV.']
      ],
      faq: [
        ['How long is the Rainforest Trail A loop?', 'Parks Canada lists Rainforest Trail A as a 1 km moderate loop with boardwalk and gravel, many steps and handrails. It is a short distance with stair effort; check current trail status before going.'],
        ['Is Long Beach safe for swimming or creek crossings?', 'Do not infer swimming safety from a calm-looking beach. Parks Canada warns about water hazards, changing tides, strong surf and creeks that may be impossible to cross at high tide or after heavy rain. Follow current notices and turn around early.'],
        ['Which trails are open right now?', 'The Parks Canada table checked 12 October 2026 listed Rainforest A and B as open, Schooner Cove as closed until further notice, Combers as caution with a damaged boardwalk, and several other trails with restrictions. That is a dated snapshot, not a future promise; recheck before leaving.']
      ]
    }),
    g({
      slug: 'ucluelet-wild-pacific', name: 'Ucluelet & the Wild Pacific Coast', instrument: 'headland weather notebook', layout: 'field-notebook',
      searchKeywords: ['Amphitrite Point Lighthouse', 'Wild Pacific Trail Lighthouse Loop', 'Lighthouse Loop 2.6 km', 'Ucluelet walk no stairs'],
      imageQuery: 'Ucluelet Wild Pacific Trail Vancouver Island', imageAlt: 'Bald eagle perched among Sitka spruce along the Wild Pacific Trail in Ucluelet',
      summary: 'Walk the official Wild Pacific Trail Lighthouse Loop from Amphitrite Point: 2.6 km, about 30–45 minutes, with an easy coastal grade and hills inland. The main route has no stairs; the Bog Loop, mudflats and small-beach extensions add choices rather than required distance.',
      access: 'Drive Highway 4 to Ucluelet and follow the Wild Pacific Trail Society map to the Lighthouse Loop start near Amphitrite Point Lighthouse. Confirm the current trail map and legal parking before setting out; do not treat the connecting trail segments as one short loop.',
      tradeoff: 'The Lighthouse Loop gives an easy-to-size coastal walk without a boat booking, while the headland remains exposed to Pacific wind and spray. Base in Ucluelet if this is the main objective; a Tofino stay means planning the cross-area drive and avoiding an exhausting Victoria return afterward.',
      fallback: 'If the headland is too windy or wet, shorten the main loop and skip the exposed extensions. Use a local indoor stop only after checking its current hours; do not promise an attraction is open year-round.',
      duration: 'Allow a half day for the 2.6 km Lighthouse Loop, including the drive, parking, stops and return to town. Add the Bog Interpretive Loop, Spring Cove mudflats or a small beach only if tide, footing and your comfort with stairs on any spur support it.',
      combine: 'Combine with the Long Beach Unit on another day of a four-night stay. Keep the marine excursion on a separate movable day, and do not attach the five-hour Nanaimo/Victoria road estimate to an ambitious walk without a recovery buffer.',
      verify: 'Use the Wild Pacific Trail Society map and Lighthouse Loop page for the current route; check Highway 4 on DriveBC, the weather, tide-sensitive extensions and any local trail notice. The 2.6 km and 30–45 minute guide figures describe the main loop, not parking or extensions.',
      stages: [
        ['Start by Amphitrite Point', 'Use the Wild Pacific Trail Society map to locate the signed Lighthouse Loop start near Amphitrite Point Lighthouse. Check the day’s wind and rain before leaving the parking area; the route faces the exposed coast.'],
        ['Follow the 2.6 km main loop', 'Walk the easy coastal grade at a measured pace. The Society describes hills inland and no stairs on the main route; keep to the maintained trail and use viewpoints without approaching unstable edges.'],
        ['Choose one optional extension', 'Only if conditions and energy allow, consider the Bog Interpretive Loop, Spring Cove mudflats or a small beach named by the trail Society. Check tide and footing first; do not assume these optional branches are stair-free or suitable in every weather.'],
        ['Return to Ucluelet', 'Close the loop and pause in town before driving onward. If Tofino is your base, keep enough daylight for Highway 4 and save the cross-island trip to Nanaimo or Victoria for another day.']
      ],
      watch: [
        ['Main route versus spurs', 'The published 2.6 km figure is for the Lighthouse Loop. Extra loops, beach paths and mudflats change distance and footing; use the official map instead of improvising a shortcut.'],
        ['Wind and slick surfaces', 'A short route can still feel demanding in wind, spray or wet roots. Turn around before exposure or footing becomes uncomfortable.'],
        ['Road-day fatigue', 'Do not stack a headland walk with the long drive across Vancouver Island. Check DriveBC and protect daylight for the road.']
      ],
      faq: [
        ['How long is the Wild Pacific Trail Lighthouse Loop?', 'The Wild Pacific Trail Society lists the Lighthouse Loop as 2.6 km and a 30–45 minute walk. The main route has an easy coastal grade, hills inland and no stairs; optional branches add time and different footing.'],
        ['Does the Lighthouse Loop require stairs?', 'The Society says there are no stairs on the main Lighthouse Loop. Optional beaches or extensions are separate choices; inspect the current map and access notes before adding them.'],
        ['Can I walk the Lighthouse Loop and drive back to Victoria the same day?', 'It is possible to drive between the west coast and Victoria, but that combines the walk with a long Highway 4 crossing. Parks Canada’s visit page estimates about five hours of driving from Victoria to Long Beach under its stated conditions; leave a separate road buffer and check DriveBC instead of treating that estimate as a timetable.']
      ]
    }),
    g({
      slug: 'tofino-marine-day', name: 'Tofino Marine Day: Wildlife, Islands & Water', instrument: 'operator manifest', layout: 'ferry-manifest',
      searchKeywords: ['Jamie’s Whaling Station', 'Tofino licensed boat operator', 'wildlife sighting not guaranteed', 'marine trip cancellation sea state'],
      imageQuery: 'Tofino Clayoquot Sound British Columbia boat', imageAlt: 'Forested islands and water in Clayoquot Sound near Tofino',
      summary: 'Make the boat trip one booked block with one purpose: marine wildlife viewing, a named island route or another operator-described product. Parks Canada currently lists Jamie’s Whaling Station for Long Beach Unit marine wildlife viewing; recheck the live license list and product details. No wildlife, landing, departure or return time is guaranteed.',
      access: 'Choose a departure specifically from Tofino or its stated launch point. Before paying, record the named dock, check-in time, vessel and clothing requirements, cancellation and refund rules, age or mobility limits, and the published return window. Do not assume a trip from another harbour serves Tofino.',
      tradeoff: 'A licensed marine operator can take you beyond the highway shoreline, but sea state can cancel or reroute a trip and wildlife remains unpredictable. Book for the trip itself, not a guaranteed species or hot-springs landing.',
      fallback: 'Keep this day movable inside the stay. If the operator cancels, use Long Beach or the Lighthouse Loop only after checking that day’s park or trail notices; do not squeeze a replacement into the ferry or Highway 4 departure day.',
      duration: 'Reserve most of the day around check-in, briefing, the operator’s current duration and return—not an old web estimate. Leave the evening open and protect at least one later day before a major road, ferry or flight connection.',
      combine: 'Keep the marine excursion separate from the Nanaimo/Victoria transfer and from a full Long Beach hiking day. Four nights gives three route days so this block can move if the operator advises against sailing.',
      verify: 'Check the current Parks Canada licensed-operator listing and the operator’s own dated product page. Confirm the actual dock, sailing date and return window, weather and cancellation terms, required clothing, accessibility limits, and whether the exact trip enters a separately managed protected area.',
      stages: [
        ['Choose wildlife or route purpose', 'For wildlife viewing, Parks Canada’s current Long Beach Unit list names Jamie’s Whaling Station as an operator. Open the live listing and the operator’s own product page; do not infer service, price or availability from a license entry.'],
        ['Book the actual departure', 'Confirm the exact Tofino-area dock, date, check-in time, vessel, trip length, cancellation terms, child or mobility restrictions and required layers directly with the operator. Do not assume the departure is from Ucluelet or that a returned search result is a live sailing.'],
        ['Use the operator’s safety call', 'Check marine conditions and follow crew instructions about route, wildlife distance and landing. A sunny forecast in town does not settle offshore sea state, and no animal sighting or island/hot-springs landing is promised.'],
        ['Keep the landing day local', 'On return, leave the evening unbooked. If conditions cancel the trip, move it only to another open day; otherwise choose a land route after checking the Park’s current trail table and keep the onward transfer protected.']
      ],
      watch: [
        ['License is not an endorsement', 'Parks Canada states that a license confirms minimum safety requirements, not guide quality or local knowledge. Compare the operator’s current terms and safety information yourself.'],
        ['Cancellation and return', 'Weather can change route or sailing status. Read cancellation/refund terms and leave a wide buffer before a ferry, flight or cross-island drive.'],
        ['No promised encounter', 'Wildlife distance and sightings are not a product guarantee. Choose a trip that remains worthwhile as a coastal outing even without a particular species.']
      ],
      faq: [
        ['Which Tofino wildlife operator is currently listed by Parks Canada?', 'The Long Beach Unit section of the Parks Canada list checked 12 October 2026 included Jamie’s Whaling Station for marine wildlife viewing. The list says licensing ensures minimum safety standards but does not evaluate guide quality or knowledge; confirm the current listing, actual product and availability directly.'],
        ['Will a boat tour see whales or reach hot springs?', 'Neither a wildlife sighting nor a particular island or hot-springs landing is guaranteed. Sea conditions, route, permits and operator decisions can change the product; book only against the current written terms.'],
        ['Should I schedule a ferry or long drive after the trip?', 'No fixed return time should be assumed. Confirm the operator’s current return window and leave a separate buffer before Highway 4, the Nanaimo ferry or an onward flight. A cancelled or delayed boat should not put that connection at risk.']
      ]
    })
  ]
});
