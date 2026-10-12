import { australiaGuide as g, defineAustraliaCluster as cluster } from './australia-guide-builder.mjs';

export const australiaSouthClusters = [
  cluster({
    slug: 'melbourne-port-phillip',
    name: 'Melbourne & Port Phillip',
    region: 'Victoria',
    band: 'south',
    family: 'tram-laneway-grid',
    label: 'TRAMS / LANES / CULTURE / BAY',
    tagline: 'Choose a base first; let the tram grid connect the days.',
    hubIntro: 'Melbourne is easiest to plan as a compact CBD core, one deliberate Yarra crossing and a separate bay-side outing. Flinders Street and Southern Cross are useful but different arrival anchors; Southbank trades a quieter river edge for an extra crossing, while St Kilda adds a real cross-city trip. This four-stop plan keeps the free-tram boundary, museum opening checks and an exposed foreshore visible before you book.',
    stay: 'For a short first visit, sleep near Flinders Street or Melbourne Central for walkable CBD blocks and rail connections. Choose Southern Cross when a confirmed coach or regional-rail service uses that station as your practical arrival door. Southbank suits an arts-led stay but needs a river crossing for the CBD; St Kilda is a slower, bay-side base with a tram journey back to central sights. Compare the actual hotel address, step-free route, late arrival and cancellation terms before paying.',
    transfer: 'Use Flinders Street Station for the CBD and Federation Square; use Transport Victoria’s live planner and maps to check tram routes, disruptions and the exact Free Tram Zone boundary. A trip that leaves that zone, including the ride to St Kilda, needs the current ticketing rules. Check airport-transfer options against your flight and accommodation instead of assuming a city tram covers the airport leg.',
    tripShapes: [
      { title: '2 nights · Keep the core compact', copy: 'Base near Flinders Street or Melbourne Central. Use the arrival window for one short laneway loop; give one full day to the CBD and Federation Square. On departure day, add Southbank only if luggage storage and the onward connection leave a real margin. Skip St Kilda on this short version.' },
      { title: '3 nights · Add one clear contrast', copy: 'Keep the CBD as your base. Spend one day on the lane-and-arcade sequence, one on either Fed Square and the NGV river crossing or St Kilda, then use the third day for the other choice only if weather and venue hours suit. Book an indoor anchor before arranging the outdoor leg.' },
      { title: '4 nights · Give the bay its own day', copy: 'Stay central for three nights of city access, then choose whether the final night is still central or in St Kilda for an early foreshore start. Keep one full block each for the CBD, the cultural precinct and St Kilda; do not compress the pier, galleries and laneways into one day. Recheck the last tram before choosing a bayside evening.' }
    ],
    reviewDate: '12 October 2026',
    reviewIsoDate: '2026-10-12',
    sources: [
      ['https://www.australia.com/en/places/melbourne-and-surrounds/guide-to-melbourne.html', 'Tourism Australia — Melbourne'],
      ['https://www.visitvictoria.com/regions/melbourne', 'Visit Victoria — Melbourne'],
      ['https://transport.vic.gov.au/plan-a-journey/network-maps/melbourne-public-transport-maps', 'Transport Victoria — Melbourne public transport and Free Tram Zone maps'],
      ['https://www.melbourne.vic.gov.au/public-transport', 'City of Melbourne — public transport and free tram zone'],
      ['https://www.ngv.vic.gov.au/plan-your-visit/', 'NGV — visit information for NGV International and the Ian Potter Centre'],
      ['https://www.acmi.net.au/plan-your-visit/', 'ACMI — visit, access and transport information'],
      ['https://www.penguins.org.au/attractions/st-kilda/', 'Phillip Island Nature Parks — managed St Kilda penguin viewing'],
      ['https://www.portphillip.vic.gov.au/council-services/health-and-safety/public-health/beach-report', 'City of Port Phillip — current beach report'],
      ['https://www.bom.gov.au/vic/forecasts/melbourne.shtml', 'Bureau of Meteorology — Melbourne forecast']
    ],
    guides: [
      g({
        slug: 'cbd-laneways-tram-grid', name: 'CBD Laneways & Tram Grid', motif: 'block-by-block city reading', instrument: 'tram-grid', imageQuery: 'Melbourne CBD laneway tram street', imageAlt: 'Melbourne central business district viewed from above',
        summary: 'A walkable CBD sequence from Flinders Street Station through Degraves Street, Centre Place and the historic arcades to Bourke Street Mall, with a mapped tram fallback when rain, crowds or tired feet shorten the day.',
        orientationTitle: 'Read the grid before adding lanes.',
        orientation: 'Start at Flinders Street Station and use the main streets as your compass: Degraves Street and Centre Place are short public passages, while Block Arcade and Royal Arcade give the route an indoor option before Bourke Street Mall. Continue north only if the group still has time for State Library Victoria or Melbourne Central. The hero photograph is a broad aerial of the CBD, not a close view of a lane or tram; treat it as city context, not proof of a particular stop.',
        access: 'Arrive at Flinders Street Station for the south end or Melbourne Central for a north-end start. Before boarding, open Transport Victoria’s current tram and Free Tram Zone maps: the free area has a defined boundary and does not cover every Melbourne trip. Check step-free station exits and live disruptions if stairs, luggage or mobility needs affect the choice.',
        sequence: 'Walk south to north: Flinders Street Station → Degraves Street → Centre Place → Collins Street arcades (Block Arcade and Royal Arcade) → Bourke Street Mall. Finish at Melbourne Central or return along the Swanston Street tram spine. Choose one indoor stop, not every shop or lane.',
        boundary: 'A public laneway is still a workplace and often borders homes. Leave restaurant deliveries, service doors and footpath queues clear; do not enter private courtyards or photograph staff and residents without consent. Cross tram tracks at marked crossings and board only at a signed stop.',
        decisions: [
          ['Choose your end', 'Start at Flinders Street for a south-to-north walk; start at Melbourne Central when weather or a north-side booking makes a short southbound loop more useful.'],
          ['Pay for the real journey', 'Use the official Free Tram Zone map before riding. If any part of the trip falls outside the zone, follow the current ticket and validation instructions.'],
          ['Keep one indoor anchor', 'Arcades and one selected museum or library make a wet-day plan; a clear lane or event closure is a reason to use the street grid, not squeeze through.' ]
        ],
        interpretation: 'The small lanes connect the large street grid; they are not a separate attraction circuit. Choose two or three that lie on your route, then use a broad street or tram corridor to reset direction.',
        interpretationTitle: 'Use lanes as connectors, not a checklist.',
        stages: [['Orient at Flinders Street', 'Choose the station exit that faces the first block and check the return station before leaving. If arriving with bags, use the hotel’s confirmed luggage-storage policy rather than carrying them through busy lanes.'], ['Walk Degraves and Centre Place', 'Follow the public footpath, pause only where you do not block a queue, and skip a lane if deliveries or a temporary closure take its width.'], ['Take the arcade option', 'Continue through Block Arcade and Royal Arcade toward Bourke Street Mall. If it is wet, slow down and keep an outdoor lane visit short; do not assume every shop or venue is open.'], ['Close at a useful stop', 'Use Melbourne Central for the north end or a signed Swanston Street stop for a tram back. Check the live route and zone before boarding.']],
        risks: [['Narrow shared space', 'Deliveries, café queues and events can make a lane unpleasant or impassable. Use the next parallel street rather than wait in a service route.'], ['Tram crossings', 'Tracks, traffic and boarding islands need attention; use signalized crossings and marked stops.'], ['Rain, heat and fatigue', 'Shorten to the arcades plus one indoor anchor. In hot or severe weather, follow the Bureau forecast and local warnings rather than trying to finish the full loop.']],
        duration: 'Allow a half day for the station-to-Bourke Street walk, a meal and one indoor stop. A slower visit with the State Library or an exhibition needs most of a day; avoid stacking it with St Kilda.', combine: 'Combine with Federation Square only when the chosen museum or river walk has its own protected time. Keep St Kilda for a separate tram outing.', verify: 'On the day, check Transport Victoria’s tram map, the Free Tram Zone boundary, station accessibility and disruptions; confirm any chosen venue hours, lane closures, weather and return route.',
        faq: [
          ['Is the CBD tram always free?', 'No. The Free Tram Zone has a mapped boundary. Check Transport Victoria’s current map and ticket instructions before boarding; travel outside the boundary follows the current fare rules.'],
          ['What is a useful rainy-day version?', 'Walk the public arcades between Collins Street and Bourke Street, then choose one open indoor venue. Skip exposed lanes when rain, heat, a closure or a delivery makes them uncomfortable.'],
          ['Can I do this with luggage?', 'It is easier after hotel check-in or confirmed bag storage. Busy footpaths and narrow lanes leave little space for suitcases or long stops.']
        ],
        sources: [
          ['https://transport.vic.gov.au/plan-a-journey/network-maps/melbourne-public-transport-maps', 'Transport Victoria — tram network and Free Tram Zone maps'],
          ['https://www.melbourne.vic.gov.au/public-transport', 'City of Melbourne — free tram zone and city public transport'],
          ['https://www.bom.gov.au/vic/forecasts/melbourne.shtml', 'Bureau of Meteorology — Melbourne forecast']
        ],
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12'
      }),
      g({
        slug: 'federation-square-southbank', name: 'Federation Square & Southbank', motif: 'culture across the river', instrument: 'gallery-fold', imageQuery: 'Federation Square Melbourne Yarra Southbank', imageAlt: 'Yarra River and Princes Bridge beneath Melbourne’s night skyline',
        summary: 'A museum-led day that distinguishes ACMI and NGV Australia at Federation Square from NGV International across the Yarra, then follows one purposeful river crossing to a known tram or station.',
        orientationTitle: 'Choose which side deserves your time.',
        orientation: 'Flinders Street Station opens onto Federation Square. ACMI and the Ian Potter Centre: NGV Australia are here; NGV International is across Princes Bridge at 180 St Kilda Road. The existing photograph shows the Yarra, Princes Bridge and the night skyline rather than a clear close-up of Federation Square, so use it as a river-crossing cue. Pick one museum anchor first and cross the river only if the second bank is part of your plan.',
        access: 'Arrive at Flinders Street Station or check the accessible tram stop and current disruptions on Transport Victoria’s map. ACMI lists its Fed Square location opposite the station; NGV’s two venues have separate entrances. Check access information, exhibition entry windows and bag rules on each venue’s own visit page before choosing a sequence.',
        sequence: 'Begin at Flinders Street Station and choose ACMI or the Ian Potter Centre at Fed Square. If you also want NGV International, cross Princes Bridge in daylight, visit the 180 St Kilda Road entrance, then continue along the Southbank arts and river edge and leave from the nearest suitable tram stop. This one-way south-side finish avoids crossing back just to collect a second photograph.',
        boundary: 'A free general-entry listing does not promise access to a ticketed exhibition, cinema session or special event. Follow each venue’s current bag, photography and step-free access guidance. River paths and plaza routes can close for construction or events; obey signs and use the station-side crossing if a bridge approach is blocked.',
        decisions: [
          ['One bank or two?', 'For ACMI or NGV Australia alone, stay at Fed Square. Add the south bank only when NGV International or the river walk is your chosen second anchor.'],
          ['Free entry is not every ticket', 'NGV general entry is listed as free; special exhibitions may charge. ACMI lists free museum entry with some ticketed events. Check the exact event before setting the day.'],
          ['Finish south or return north?', 'After Princes Bridge and NGV International, leave via a suitable St Kilda Road tram stop. If you must return to Flinders Street, cross back once and allow time for event crowds.']
        ],
        interpretation: 'The art venues sit on both banks, but the outing works best as one selected collection and one crossing. A river walk is an optional connective segment, not a substitute for checking the destination’s ticket and access page.',
        interpretationTitle: 'Let the collection set the crossing.',
        stages: [['Start beside the station', 'Use Flinders Street Station as the meeting point, then select ACMI or the Ian Potter Centre: NGV Australia. ACMI lists daily museum hours and free general entry, but cinema sessions and some events need their own check.'], ['Protect gallery time', 'Review the current NGV or ACMI exhibitions, entry conditions and access details. NGV lists both venues separately and notes that special exhibitions may charge; plan one main collection rather than racing between both banks.'], ['Cross Princes Bridge once', 'If NGV International is the second anchor, take the signed pedestrian crossing in daylight and confirm any works or event diversions. The gallery is at 180 St Kilda Road, not inside Federation Square.'], ['Finish on the south bank', 'Choose one arts-precinct or river segment and leave from a suitable tram stop. Check the live return before the final event dispersal; shorten the walk when the path is crowded or exposed.']],
        risks: [['Changing venue program', 'Opening times, exhibition tickets and cinema sessions vary. Use the official venue page for the visit date and do not plan around an unconfirmed show.'], ['Bridge and plaza closures', 'Works and events can redirect paths. Follow the signed crossing and drop the second-bank plan if the legal route is closed.'], ['Weather or fatigue', 'In wind, rain or heat, keep one bank and spend longer indoors. If a venue is closed or sold out, use the other bank’s confirmed open institution rather than adding a hurried detour.']],
        duration: 'Reserve most of a day for one major collection, a meal and the crossing. Two institutions can fill the day; keep the river walk short and finish at a planned transit stop.', combine: 'Pair with the CBD laneway walk only as separate half-days or a short arrival loop. Save St Kilda for another day, especially if the evening program is ticketed.', verify: 'Check the NGV and ACMI visit pages, exact exhibition or cinema tickets, accessibility and bag rules; check Transport Victoria for the approach, bridge or path works, weather and the return trip.',
        faq: [
          ['Which NGV is at Federation Square?', 'The Ian Potter Centre: NGV Australia is at Fed Square. NGV International is across Princes Bridge at 180 St Kilda Road; treat them as separate venues and check each one’s current program.'],
          ['Are ACMI and NGV free?', 'Their official pages list free general entry, while some ACMI events and NGV special exhibitions are ticketed. Confirm the event and entry conditions for your date.'],
          ['What if the river walk is unpleasant?', 'Stay on the station side and spend the time in one confirmed open venue. If a bridge or plaza closes, follow the signed accessible diversion rather than forcing the crossing.']
        ],
        sources: [
          ['https://www.ngv.vic.gov.au/plan-your-visit/', 'NGV — venues, opening information, tickets and access'],
          ['https://www.acmi.net.au/plan-your-visit/', 'ACMI — hours, location, transport and visitor access'],
          ['https://transport.vic.gov.au/plan-a-journey/network-maps/melbourne-public-transport-maps', 'Transport Victoria — city tram maps and disruptions'],
          ['https://www.bom.gov.au/vic/forecasts/melbourne.shtml', 'Bureau of Meteorology — Melbourne forecast']
        ],
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12'
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
        slug: 'st-kilda-foreshore', name: 'St Kilda & Foreshore', motif: 'tram-to-bay day', instrument: 'bay-clock', imageQuery: 'St Kilda pier Melbourne sunset', imageAlt: 'St Kilda Beach, pier and Port Phillip Bay before midday',
        summary: 'A tram-to-foreshore outing with a daylight beach walk, an optional booked penguin viewing and a return journey checked before the evening gets late.',
        orientationTitle: 'Treat the pier as a separate evening booking.',
        orientation: 'The beach and pier photograph shows a quiet daytime bay scene; it contains no penguins and does not promise a sunset or calm sea. Plan the public foreshore as the main outing. St Kilda’s little-penguin viewing is a separate managed experience on the pier: Phillip Island Nature Parks says advance booking is essential, its limited tickets are free, and the session time on the ticket controls arrival. Do not make it the default ending unless a ticket and return plan are confirmed.',
        access: 'Transport Victoria’s Route 96 runs between East Brunswick and St Kilda Beach; the penguin operator also lists trams 12, 16 and 96 as stopping near the pier. Check the live trip planner, stop and return service on your date. The official viewing platform is at the pier end; review its access details and allow for the exposed walk instead of assuming the tram reaches the platform.',
        sequence: 'Start from the confirmed tram stop, use Acland Street or the foreshore for food and orientation, then walk the open beach edge toward St Kilda Pier. Return to the foreshore before dusk unless you have the official penguin booking; if booked, follow the ticket session and enter only through the dedicated viewing platform. Plan the last tram or a verified alternative before dinner.',
        boundary: 'The penguin colony lives on the breakwater. View it only through the official managed platform with a valid session ticket; tickets can sell out and extreme weather may cancel a session. Follow staff instructions, switch camera flash off, do not use a torch, and never climb around a closed section to find wildlife. Swimming, pier access and beach water quality are separate checks.',
        decisions: [
          ['Beach day or penguin session?', 'A foreshore walk needs no wildlife booking. A penguin session is a separate evening visit with limited free tickets; confirm the current ticket and time before building dinner or transport around it.'],
          ['Which tram home?', 'Route 96, 12 and 16 are listed by the viewing operator as stopping near the pier, but the live route, stop and evening service can change. Save the exact return in the official planner before leaving central Melbourne.'],
          ['Stay by the bay or central?', 'A St Kilda night suits an early foreshore start or booked evening session. A CBD hotel makes the rest of this city itinerary simpler; compare the late journey and accommodation cancellation rules before moving bases.']
        ],
        interpretation: 'Wind and open exposure matter more here than the city’s temperature. Carry a warm layer even after a bright afternoon, and set the day’s turning point at the beach or pier entrance, not at the end of an uncertain night service.',
        interpretationTitle: 'Let wind and the return set the finish.',
        stages: [['Check the bay and service', 'Read the Bureau forecast, council beach report and current tram route. Save a return stop and the service you intend to use before walking away from the central network.'], ['Walk one foreshore segment', 'Choose beach, Acland Street or the pier according to wind, heat, public access and swim advice. If there has been recent rain or the council report advises against swimming, keep the visit land-based.'], ['Choose the wildlife option', 'If you hold the official Phillip Island Nature Parks session ticket, arrive at the ticket time and follow the staffed platform rules. Otherwise enjoy the pier and bay without searching the rocks or promising a penguin sighting.'], ['Return before the margin disappears', 'Check live departures again before sunset or before the booked session ends. The pier is exposed and the last stretch is on foot; use the verified tram or another confirmed door-to-door option.']],
        risks: [['Wind, sun and rain', 'The bay can feel colder than the CBD. Bring a layer, water and sun protection; shorten the pier walk during strong wind, rain or heat.'], ['Swimming and water quality', 'Use current patrol advice and the City of Port Phillip beach report. Do not swim when conditions, water quality or signs say not to; a clear-looking bay is not a safety check.'], ['Wildlife and late transport', 'Bookings are limited; sessions may be cancelled in extreme weather. No flash or torches, no barrier climbing and no unbooked breakwater viewing. Recheck the return before entering the platform.']],
        duration: 'Give the daytime foreshore a half day. A booked penguin session makes it an afternoon-to-evening outing with warm clothing and a confirmed late return; avoid adding another distant precinct.', combine: 'Keep the CBD lanes or NGV on a different block. You can visit the city and St Kilda on the same trip, but protect the cross-town transfer rather than making the pier a rushed final stop.', verify: 'Check Route 96 and alternate tram routes with Transport Victoria, the Melbourne forecast, the council beach report and patrol advice; if viewing penguins, confirm the official ticket, session, pier access and late return.',
        faq: [
          ['Can I see the St Kilda penguins without booking?', 'The managed viewing operator says bookings are essential and tickets are limited and free. Without a confirmed session, stay on public foreshore routes and do not enter or approach the habitat.'],
          ['Is St Kilda a swimming stop after rain?', 'Check the City of Port Phillip’s current beach report and patrol advice first. Heavy or recent rain can affect water quality; choose a land-based walk whenever the current notice or conditions advise against swimming.'],
          ['What if wind or rain ruins the pier walk?', 'Shorten the exposed pier section and use Acland Street or another confirmed indoor stop. A managed penguin session can be cancelled in extreme weather, so keep a land-based alternative and do not assume the tram plan is unchanged.']
        ],
        sources: [
          ['https://transport.vic.gov.au/route/1041/96-east-brunswick-st-kilda-beach', 'Transport Victoria — Route 96, East Brunswick to St Kilda Beach'],
          ['https://www.penguins.org.au/attractions/st-kilda/', 'Phillip Island Nature Parks — St Kilda viewing tickets, access and wildlife rules'],
          ['https://www.portphillip.vic.gov.au/council-services/health-and-safety/public-health/beach-report', 'City of Port Phillip — current beach report'],
          ['https://beachsafe.org.au/beach/vic/port-phillip/st-kilda/st-kilda', 'Beachsafe — St Kilda beach and patrol information'],
          ['https://www.bom.gov.au/vic/forecasts/melbourne.shtml', 'Bureau of Meteorology — Melbourne forecast']
        ],
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12'
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
    tagline: 'Give the coast a westbound sequence and Gariwerd its own trip.',
    hubIntro: 'Victoria’s southwest changes character in stages: Torquay’s surf coast, the bends and forest turns around Lorne, Apollo Bay’s harbour-and-Otways base, then Port Campbell’s limestone coast. Treat those as a progression of separate days rather than a checklist for a Melbourne round trip. The inland Gariwerd / Grampians chapter has a different base, cultural landscape, weather and road decision; the dashed branch in the schematic means plan it separately, not that a direct transfer or service exists.',
    stay: 'Choose the bed that shortens the next day’s first leg. Torquay works for the coast start and local supplies; Lorne makes a short mid-coast stay but leaves forest and road choices to confirm; Apollo Bay is a practical overnight between the eastern coast and Otways; Port Campbell puts the western lookouts closer to an early or late visit. A Melbourne hotel is not a useful base for every stop. Keep Gariwerd in its own Halls Gap or other suitable gateway stay, and add nights for the chosen walks and conditions rather than treating it as an evening detour.',
    transfer: 'A self-drive or a licensed, itinerary-matched tour gives the most control over coastal lookouts and forest trailheads. For every drive, budget daylight, fuel, winding-road concentration, wildlife and an overnight before fatigue sets in. Regional public transport exists to some towns, but a town connection does not establish a last-mile trip to a beach, park entrance or trail. Transport Victoria lists the Colac–Marengo route via Apollo Bay; confirm the actual date, stops, operating direction, connections and return in its journey planner before planning around it. Do not infer a tour pickup, park shuttle or direct coast-to-Gariwerd service from the diagram.',
    tripShapes: [
      { title: '2 nights · Keep the east coast local', copy: 'Use Torquay or Lorne as the base and give one full day to the Surf Coast and a single westbound section. On arrival, settle supplies and choose a signed viewpoint; on the full day, select either a beach-and-town plan or a coast-and-forest stop that still leaves a rested return. This is a taste of the road, not a Twelve Apostles round trip. Leave Port Campbell and Gariwerd for another stay instead of driving back late after a long scenic day.' },
      { title: '4 nights · Progress to the western coast', copy: 'Move in one direction: spend the first night around Torquay or Lorne, use two nights in Apollo Bay for one forest day and a weather adjustment, then finish with a Port Campbell night if the road and check-in fit daylight. Keep each day to a small number of formal stops and reserve the arrival/departure edges for the real transfer. If a closure, wind warning or tired driver makes the sequence poor, stay put and shorten the route. This coast plan does not include Gariwerd.' },
      { title: '6 nights · Coast plus a separate mountain leg', copy: 'Give the coast four nights across two or three bases, then reserve two or more nights for a separate Gariwerd stay only if the transfer day, park access and chosen walk all fit. Treat the move inland as its own road day with no summit or long cliff walk attached. A calmer alternative is to spend all six nights on the coast with a spare weather day and more time in Apollo Bay or Port Campbell. Decide which landscape matters most before booking non-refundable one-night stops.' }
    ],
    reviewDate: '12 October 2026',
    reviewIsoDate: '2026-10-12',
    sources: [
      ['https://www.australia.com/en/places/melbourne-and-surrounds/guide-to-the-great-ocean-road.html', 'Tourism Australia — Great Ocean Road'],
      ['https://www.visitvictoria.com/regions/great-ocean-road', 'Visit Victoria — Great Ocean Road'],
      ['https://transport.vic.gov.au/plan-a-journey/network-maps/regional-victorian-public-transport-maps', 'Transport Victoria — regional train, coach and bus maps'],
      ['https://transport.vic.gov.au/journey', 'Transport Victoria — date-specific journey planner'],
      ['https://transport.vic.gov.au/route/8373/colac-marengo-via-apollo-bay', 'Transport Victoria — Colac–Marengo via Apollo Bay route listing'],
      ['https://traffic.vicroads.vic.gov.au/', 'VicTraffic — current Victorian road conditions'],
      ['https://greatoceanroadparks.com.au/destinations', 'Great Ocean Road Coast and Parks Authority — Great Ocean Road visitor destinations'],
      ['https://sitecore-prd.parks.vic.gov.au/news/2026/06/11/00/43/changes-to-park-management-along-the-great-ocean-road', 'Parks Victoria — 2026 Great Ocean Road park-management transition'],
      ['https://sitecore-prd.parks.vic.gov.au/places-to-see/parks/great-otway-national-park', 'Parks Victoria — Great Otway National Park and current conditions'],
      ['https://www.parks.vic.gov.au/places-to-see/parks/grampians-national-park', 'Parks Victoria — Grampians (Gariwerd) National Park']
    ],
    faq: [
      ['How many nights should I give the Great Ocean Road?', 'Four nights can support a paced coast progression with a few overnight bases, but each day still needs a short stop list and daylight margin. Two nights suit one eastern section. Add a separate stay for Gariwerd rather than compressing the mountains into the coast transfer.'],
      ['Can I visit the Twelve Apostles and return to Melbourne in one day?', 'A day trip can be sold by operators, but it turns into a long driving or touring day with several hours of road exposure and brief stops. If driving yourself, an overnight near Apollo Bay or Port Campbell makes the return safer and gives weather more room. Check the exact tour itinerary before booking.'],
      ['Can I use public transport without a car?', 'Some regional coach routes serve towns, including the listed Colac–Marengo route via Apollo Bay. That does not promise a connection to each beach, lookout or trail. Search every leg and return for the travel date; if a last-mile leg is missing, use a confirmed tour or choose a town-based day.'],
      ['Where does Gariwerd fit?', 'Give Gariwerd a separate base and transfer day. The dashed line is an itinerary cue only; it does not show geography, a road, a direct coach or a guaranteed transfer. Follow current Traditional Owner guidance and park conditions for the selected route.']
    ],
    guides: [
      g({
        slug: 'torquay-bells-beach', name: 'Torquay & Bells Beach', motif: 'surf-coast departure', instrument: 'roadbook', imageQuery: 'Bells Beach Torquay Victoria Australia', imageAlt: 'Cliffs and surf at Bells Beach near Torquay',
        summary: 'Start the coast with Torquay’s practical town services, a formal Bells Beach viewpoint and a deliberate choice about whether the day ends locally or continues west.',
        orientationTitle: 'Read the surf coast as two different places.',
        orientation: 'Torquay is the practical first base for supplies, a meal and a driver reset. Bells Beach is a cliff-top surf reserve known for powerful surf and events; the lookout is a viewing stop, not a recommendation to swim or enter the break. The retained photo shows the exposed coast and surf in strong low-angle sun, so use the signed path and weather as your guide rather than judging safe conditions from the image. Choose one formal viewpoint and keep the day’s road plan honest.',
        access: 'Driving or a tour with a confirmed Torquay and Bells Beach stop gives the most flexibility. A public-transport trip to the town does not establish the last mile to the beach, and the available route, event access and return can vary by day. Check Transport Victoria from your actual origin to the chosen stop, then confirm legal parking and access with the local authority. If the search cannot produce a workable return or the planned access is closed, keep the visit in Torquay and leave Bells for another day.',
        sequence: 'Begin in Torquay with fuel, water, food and an honest fatigue check. Continue to the signed Bells Beach viewing area only if the path, parking and event conditions allow. Read surf and patrol advice before selecting a separate swimming beach; do not treat the famous break as the swimming default. Finish with a Torquay overnight or continue to Lorne only while the driver is rested and daylight remains for the winding road.',
        boundary: 'Remain on signed paths behind barriers and respect event controls, lifeguard flags, surf warnings and beach closures. A beach that looks calm from a high lookout may have dangerous water conditions. Do not cross dunes or reserve boundaries, enter a competition zone, stop on the road shoulder or copy the choices of expert surfers.',
        decisions: [
          ['View or swim?', 'Bells is a viewing stop for most visitors. For swimming, choose a currently patrolled beach, follow its flags and local advice, and skip the water when patrols or conditions are unsuitable.'],
          ['Town trip or coastal last mile?', 'Confirm the actual transport to Bells and the return before leaving the city. A town station or bus stop is not the beach access leg; use a confirmed tour or skip the beach if that link is unresolved.'],
          ['Continue west or sleep?', 'After the viewpoint, stop driving when attention or daylight is low. A Torquay night protects the next morning; the Lorne move is optional and should not be added to a tiring Melbourne departure day.']
        ],
        interpretation: 'The coast is not a single safe-use zone. Bells Beach’s viewing platforms, surf break, swimming beaches and event spaces each have different access and risk. Use the official path for the view, then make a separate water decision from current local guidance.',
        routeTitle: 'A short coastal chapter with a clear stop point.',
        stages: [['Set the departure conditions', 'Before leaving the urban area, settle fuel, water, food and accommodation. Check the forecast, fire notices, road status and the exact return route; if the road or driver is not ready, make Torquay the day’s endpoint.'], ['Use Torquay for the reset', 'Take a meal or supply stop in town and allow time for a break. Confirm the beach access point and event restrictions before driving on; do not invent a convenient car park or assume a temporary event leaves the normal route open.'], ['Read Bells from the signed path', 'Park only in the designated area, follow the signed approach and remain behind barriers. Wind, rain, crowding or a closure is a reason to shorten the stop, not to look for an informal path down the cliff.'], ['Choose a safe finish', 'For swimming, use a patrolled beach and follow flags and current advice. Otherwise head to a confirmed bed in Torquay or continue west only with a rested driver and adequate daylight. Recheck the return before dinner.']],
        risks: [['Exposed cliff and wind', 'Strong gusts, slippery ground or a closed platform can make the viewpoint unsuitable. Stay behind barriers and use the signed town alternative.'], ['Surf and swimming', 'Bells Beach is a powerful surf setting, not a general swimming recommendation. Swim only where and when patrol guidance supports it; if uncertain, stay out.'], ['Events and road fatigue', 'Major surf events can change access and crowds. Do not add an evening coastal drive after a tiring departure; use a local bed or end the excursion.']],
        duration: 'Allow a half-day for a Torquay reset and one formal beach viewpoint when starting nearby. From Melbourne, the road leg and a proper break take a meaningful part of the day; do not pack the whole westbound route into the same return window.',
        combine: 'Pair with Lorne on a progressive overnight trip, not a hurried city loop. Keep Apollo Bay and Port Campbell for later days so each exposed section has its own weather and daylight decision.',
        verify: 'On the visit date, check Transport Victoria for every public-transport leg and return; VicTraffic for road conditions; Surf Life Saving Beachsafe and local patrol advice for water; event and reserve access; fire/weather warnings; and the accommodation check-in.',
        faq: [
          ['Is Bells Beach suitable for swimming?', 'Do not infer that from the lookout or the name. Treat Bells as a surf-viewing stop; for swimming, choose a currently patrolled beach and obey its flags and advice. Stay out if conditions or patrol status are unclear.'],
          ['Can I get from Torquay town to Bells Beach by public transport?', 'Do not assume a daily shuttle or a walkable last mile. Search the actual date and return in Transport Victoria’s planner and confirm the beach access. A confirmed tour or a town-based day is the fallback.'],
          ['Should I drive on to Lorne after Bells?', 'Only if the driver is rested, road conditions are suitable, daylight remains and the Lorne bed is confirmed. Otherwise stay in Torquay and move west the next day.']
        ],
        sources: [
          ['https://transport.vic.gov.au/plan-a-journey/network-maps/regional-victorian-public-transport-maps', 'Transport Victoria — regional public transport maps'],
          ['https://transport.vic.gov.au/journey', 'Transport Victoria — live journey planner'],
          ['https://traffic.vicroads.vic.gov.au/', 'VicTraffic — current road conditions'],
          ['https://beachsafe.org.au/', 'Surf Life Saving Australia — Beachsafe patrol and beach information'],
          ['https://greatoceanroadparks.com.au/destinations', 'Great Ocean Road Coast and Parks Authority — coast destinations and access']
        ],
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12'
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
        summary: 'Use Apollo Bay as a real overnight reset between the open coast and Great Otway forest, with one confirmed walk and a road-safe plan for the next stage.',
        orientationTitle: 'Make the harbour town the pause between habitats.',
        orientation: 'Apollo Bay gives the coast progression a town-sized reset: complete meals, fuel, check-in and the next-day decision here rather than assuming every forest stop has supplies. Choose one Great Otway walk or visitor site, such as a current signed rainforest boardwalk, then return to town before adding another trailhead. The retained photograph shows a person beside a large hollow rainforest tree, not a map of a full trail; keep visitors on formed paths and use the manager’s current visitor guide to match the walk to ability and conditions.',
        access: 'The most flexible approach is a car or an itinerary-specific tour, because a town arrival and a park trailhead are separate legs. Transport Victoria lists a Colac–Marengo coach route via Apollo Bay, but this is not evidence of a frequent service, a stop at every walk, a same-day connection or a usable return. Search the date, direction, stops and all onward/return legs. If the trailhead cannot be reached and left safely, make Apollo Bay the town day or choose a confirmed operator; do not walk along an unsuitable road shoulder.',
        sequence: 'Arrive with daylight and enough fuel for the planned local road. Check in, gather food and review park alerts before selecting one open forest walk that suits the group’s mobility, rain tolerance and remaining daylight. Follow the signed track, turn around if a closure or storm changes it, and return to town before fatigue accumulates. At dinner, choose the next day’s coastal or inland route from current road and weather information.',
        boundary: 'Keep to official tracks and boardwalks. Do not enter closed forest, climb into tree hollows, feed or spotlight wildlife, leave food or approach animals for a photograph. Rain can make roots and boardwalks slippery, while storm damage can close a road even when a nearby town remains open. Follow Traditional Owner and managing-authority guidance at all cultural sites.',
        decisions: [
          ['One forest route or a second coast stop?', 'Give the forest walk its own daylight block. Add another coast stop only if the track is short, open, the driver is rested and the next accommodation is confirmed.'],
          ['Public route or private last mile?', 'Treat the listed coach corridor to Apollo Bay as a town connection to verify, not a park shuttle. Confirm trailhead access and a return before buying or relying on a transit plan.'],
          ['Walk or town recovery?', 'Use the visitor guide to select a formed track suited to current ground and the least mobile person. If rain, closure, limited daylight or fatigue removes that margin, stay in town and move the walk to another day.']
        ],
        interpretation: 'The rainforest experience is about a slow, quiet walk on the formed path. A famous tree or waterfall does not authorize climbing, off-track shortcuts or crowding around wildlife. Follow the current guide for the relevant park manager and keep an accessible return in view.',
        routeTitle: 'Keep forest access and the next coast leg separate.',
        stages: [['Arrive and settle', 'Confirm the booking, fuel, food and next day’s departure before driving inland. Use VicTraffic and park notices to see whether the chosen approach is open; a short map distance can still involve a narrow, slow road.'], ['Select one signed walk', 'Use Parks Victoria’s Great Otway visitor guides and the current access notice to choose a formed walk that fits mobility, weather and the remaining daylight. Confirm trailhead parking and any separate operator or visitor requirements.'], ['Walk within the conditions', 'Keep to the boardwalk or marked track and use handrails where present. Carry a warm layer and water; turn back if wind, rain, slippery roots, fallen trees or a closure makes the return uncertain.'], ['Reset before the next drive', 'Return to Apollo Bay, rest and check Port Campbell-bound road conditions and the next night’s check-in. If the next leg cannot be made safely, extend the base or change the following day rather than rushing after dusk.']],
        risks: [['Services and opening windows', 'Town services and accommodation availability change by day and season. Settle essentials before the forest leg and confirm the next check-in directly.'], ['Forest access and storm damage', 'Park boundaries and management can differ within the Great Otway area, and storm repairs can change access. Follow the live notice for the exact trailhead; do not assume a nearby route is open.'], ['Wet track and driver fatigue', 'Roots and boards become slippery, while narrow roads need concentration. Shorten the walk or spend another night if the group or driver has lost a safe margin.']],
        duration: 'Plan at least one overnight in Apollo Bay to separate arrival, a forest walk and the following coast drive. Add another night if the walk is a priority, conditions need flexibility or the public-transport connection does not leave a safe return window.',
        combine: 'Move progressively from Lorne through Apollo Bay toward Port Campbell. Do not stack several waterfall and forest trailheads with the same-day arrival and long westbound drive.',
        verify: 'Check Transport Victoria for the actual Colac–Marengo service and last-mile legs; Parks Victoria and GORCAPA for which authority manages the selected site and its alerts; VicTraffic, BOM forecast, fuel, accommodation, and the daylight return.',
        faq: [
          ['Can the regional coach take me to a rainforest walk?', 'The current route listing names Colac, Apollo Bay and Marengo, but it does not establish a stop at a particular trailhead or a convenient return. Check the day’s stops and connections in the official planner. If no safe last mile exists, choose a town visit or confirmed tour.'],
          ['How many nights should I stay in Apollo Bay?', 'One overnight creates a sensible pause for one forest walk and the westbound drive. Add a second night for weather flexibility, a slower walk or a connection that would otherwise force a late arrival.'],
          ['What is the wet-weather alternative?', 'Use a short open town walk, a confirmed indoor venue or a rest block, and move the forest outing to a suitable window. Do not enter a closed track because the coast is still accessible.']
        ],
        sources: [
          ['https://transport.vic.gov.au/route/8373/colac-marengo-via-apollo-bay', 'Transport Victoria — Colac–Marengo via Apollo Bay route listing'],
          ['https://transport.vic.gov.au/journey', 'Transport Victoria — date-specific journey planner'],
          ['https://sitecore-prd.parks.vic.gov.au/places-to-see/parks/great-otway-national-park', 'Parks Victoria — Great Otway visitor guides and current conditions'],
          ['https://sitecore-prd.parks.vic.gov.au/news/2026/06/11/00/43/changes-to-park-management-along-the-great-ocean-road', 'Parks Victoria — park management is shared with GORCAPA'],
          ['https://traffic.vicroads.vic.gov.au/', 'VicTraffic — current road conditions'],
          ['https://www.bom.gov.au/vic/forecasts/', 'Bureau of Meteorology — Victorian forecasts and warnings']
        ],
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12'
      }),
      g({
        slug: 'port-campbell-twelve-apostles', name: 'Port Campbell & Twelve Apostles', motif: 'limestone weather board', instrument: 'cliff-aperture', imageQuery: 'Twelve Apostles Port Campbell Victoria coast', imageAlt: 'Limestone stacks at the Twelve Apostles on the Great Ocean Road',
        summary: 'Base near Port Campbell to visit the limestone coast in daylight, choose formal viewpoints around wind and access, and leave time for the return road.',
        orientationTitle: 'Choose the coast from the forecast, not the photo.',
        orientation: 'The Twelve Apostles and nearby limestone headlands are exposed viewpoints above a changing Southern Ocean. Use Port Campbell as the reset point and select only the sites whose current access, weather and parking fit the day. The retained photo shows stacks, cliffs and active surf; it does not show safe water for swimming or a promise that every lookout is open. Do not treat every cove as a beach stop. The coast is best read from signed platforms, with a warm layer and an early decision to shorten.',
        access: 'A car or pre-booked tour is the flexible way to connect the town and separated lookouts. Regional coach access and the last mile must be checked as separate legs; do not assume a coach stops at the visitor car park or runs after an evening view. Follow the current signed road entry and designated parking at each site. Since GORCAPA took on primary management of Port Campbell National Park on 1 July 2026, check its current park and visitor information for coastal sites; parts of Great Otway remain managed by Parks Victoria, so do not use one agency page as an all-coast access guarantee.',
        sequence: 'Start from a confirmed bed in Port Campbell or a nearby base and read local forecast, wind and coastal warnings before setting out. Drive to one formal viewpoint, park only in the marked area, use the signed access and allow the group time at the platform. Add a second nearby stop only if its current closure notice, parking and daylight still fit. Return to the base before darkness makes the wildlife-prone road harder; leave any long inland transfer for another day.',
        boundary: 'Stay behind barriers and on formed paths; limestone edges can erode and cliff bases are not a safe shortcut. Waves can surge unexpectedly and isolate low shoreline areas. Do not enter restricted beaches, cross fences, climb stacks or treat a calm photograph as a surf report. Follow cultural interpretation, closure signs and the relevant park authority’s instructions.',
        decisions: [
          ['Which authority has the latest notice?', 'GORCAPA is the primary manager for Port Campbell National Park; Great Otway has split management, with some areas still under Parks Victoria. Identify the exact site and follow the responsible authority’s current notice.'],
          ['Two lookouts or a safer one?', 'Choose the most suitable formal platform first. Add another only when it is open, the driver can park legally, weather remains acceptable and the daylight return is protected. A closed or exposed site is a reason to stop, not seek an informal descent.'],
          ['Lookout or water?', 'Treat this as a cliff-viewing itinerary. Swim only at a location where current local advice and patrol arrangements permit it; if the beach, tide, swell or patrol status is unclear, stay on the signed upper path.']
        ],
        interpretation: 'The limestone formations are a coastal landscape, not a sequence of accessible beach entries. Wind, surf and cliff change shape the visit. Read the site from its official viewing areas and let the conditions decide how long to stay.',
        routeTitle: 'Use one formal platform at a time.',
        stages: [['Check conditions from town', 'Review GORCAPA alerts for Port Campbell National Park, VicTraffic, BOM wind and the relevant coastal or surf advice. Pack layers, water and a daylight buffer; if warnings or closure notices govern the area, change the day before driving.'], ['Reach the signed car park', 'Use the current official road approach and designated parking. Do not stop on the Great Ocean Road shoulder or follow an unmarked track to save a few minutes. Confirm any access change or visitor information on the authority’s site before departure.'], ['Read the platform, then decide', 'Stay on the official boardwalk and behind barriers. Pause at one major viewpoint; consider another only when it is open, the group remains comfortable and the return time still works. Keep away from cliff bases and wave-exposed shoreline.'], ['Return before the road loses margin', 'Drive back to Port Campbell or the confirmed overnight while daylight and attention remain. Do not append an inland Gariwerd transfer or a long wildlife road after sunset; give the next region a separate travel day.']],
        risks: [['Eroding cliff edges', 'Barriers and closures reflect unstable ground. Do not climb around a fence or approach the edge for a photograph; return to the signed platform.'], ['Swell and sudden water', 'The Southern Ocean can produce powerful waves and cut-off areas. This is not a default swimming itinerary; follow site and patrol advice and remain above the waterline.'], ['Crowds and road fatigue', 'Coach arrivals can make narrow platforms busy, and nearby roads still need driver attention. Wait safely or skip the stop; never pull onto the shoulder or continue when tired.']],
        duration: 'Allow a full daylight block from Apollo Bay or stay in Port Campbell for a more flexible start. The overnight is useful when you want several viewpoints or a forecast window; it is not a reason to add every nearby cove.',
        combine: 'Progress from the Otways with an overnight transition. Keep Gariwerd and its mountain walks separate from this cliff day; add the inland transfer only after the coast visit and only with a rested driver.',
        verify: 'Check the exact GORCAPA Port Campbell notices and access, Parks Victoria notices for any remaining PV-managed area, VicTraffic, BOM local forecast/warnings, coastal and surf advice, legal parking, daylight and the confirmed return.',
        faq: [
          ['Are the Twelve Apostles viewpoints always open?', 'No access status should be assumed from a guide or photo. Check the current notice for the specific site and obey barriers, road signs and temporary closures on the day.'],
          ['Can I swim at the Apostles or nearby coves?', 'This guide treats the formations as cliff viewpoints. Many exposed coastal areas are hazardous; enter water only where current local advice and patrol arrangements support it, and stay out whenever conditions are uncertain.'],
          ['Why check both GORCAPA and Parks Victoria?', 'From 1 July 2026, GORCAPA became the primary manager for Port Campbell National Park and parts of Great Otway, while Parks Victoria retains other areas. Check the authority responsible for the exact park or access point.']
        ],
        sources: [
          ['https://greatoceanroadparks.com.au/destinations', 'Great Ocean Road Coast and Parks Authority — visitor destinations'],
          ['https://sitecore-prd.parks.vic.gov.au/news/2026/06/11/00/43/changes-to-park-management-along-the-great-ocean-road', 'Parks Victoria — park-management transition effective 1 July 2026'],
          ['https://sitecore-prd.parks.vic.gov.au/places-to-see/parks/great-otway-national-park', 'Parks Victoria — Great Otway management and current notices'],
          ['https://traffic.vicroads.vic.gov.au/', 'VicTraffic — current road conditions'],
          ['https://www.bom.gov.au/vic/forecasts/', 'Bureau of Meteorology — Victorian weather warnings'],
          ['https://beachsafe.org.au/', 'Surf Life Saving Australia — beach and patrol information']
        ],
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12'
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
    tagline: 'Give the civic grid, valley roads and peninsula connections their own time.',
    hubIntro: 'South Australia’s capital works as a compact city base, but the wine regions are separate rural corridors. Start with North Terrace and the parklands on foot or by city transit; choose either the northbound Barossa or southbound McLaren Vale/Willunga leg for a rural stay. Public buses reach some towns, but they do not connect every cellar door or coast stop. Fix the last ride and a sober return before booking tastings.',
    stay: 'For a short visit, stay in central Adelaide near the station/North Terrace so the civic day is walkable and onward regional connections are simple to check. With five nights, keep two or three city nights and move to one rural base: Tanunda for a Barossa town stay, or McLaren Vale for its own town-and-wine day. Choose a coast-side bed only when the next day’s transport is solved. A seven-night plan can add a second wine region, but give each at least two nights; Kangaroo Island is a separate ferry itinerary rather than a spare evening.',
    transfer: 'Use Adelaide Metro’s current trip planner for the city and south corridor. Route 751 is listed between Aldinga Shopping Centre and Noarlunga Hospital via Willunga, McLaren Vale and Seaford; check its exact variant, stop, date and return before relying on it. LinkSA lists Barossa routes 1110/1111 between Angaston and Gawler; the service is not a winery shuttle, and any rail-to-bus connection must work in both directions on your travel date. For either region, compare a prebooked tour, a fully sober driver or a verified town-only transit day before choosing cellar doors.',
    tripShapes: [
      { title: '3 nights · City first', copy: 'Sleep all three nights in central Adelaide. Use one full day for North Terrace and the Botanic Garden, one day for either a booked Barossa tour or a Route 751 town-focused trip to McLaren Vale/Willunga, and keep arrival/departure windows light. Do not schedule both wine regions as same-day excursions.' },
      { title: '5 nights · One rural base', copy: 'Spend three nights in Adelaide, then two in either Tanunda or McLaren Vale. Use the city days for institutions and the parklands; move to the rural base before the main regional day so a booked tasting does not end in a long night drive. Select one compact producer area and reserve transfers as well as tastings.' },
      { title: '7 nights · Two distinct regions', copy: 'Keep two nights in Adelaide, then allow at least two nights in Tanunda and two in McLaren Vale, with one remaining night as a city or transfer buffer. This is a driver/tour plan, not a bus timetable promise: check every leg and cancellation term. If Kangaroo Island is the priority, replace one wine-region stay with a separately booked multi-night ferry-and-island plan.' }
    ],
    faq: [
      ['How many nights should I plan for Adelaide and the wine regions?', 'Three nights suit a city stay plus one selected regional day. Five nights allow the city and one rural base. Seven nights can support two separate rural bases if each receives at least two nights and transfers are arranged.'],
      ['Can I visit both wine regions without a car?', 'There are public services to some towns, including Route 751 to McLaren Vale/Willunga and LinkSA routes in the Barossa. They do not guarantee winery access or a useful tasting-day return. Check the exact timetable, variant, stop and last-mile transfer, or book an operator that confirms the full route.'],
      ['Where should I stay?', 'Use central Adelaide for the city chapter. In the Barossa, Tanunda is a practical town base for food and visitor information; in McLaren Vale, stay in or near town only if your onward and evening rides work. Do not treat the island ferry, Barossa and Fleurieu as interchangeable day trips.']
    ],
    reviewDate: '12 October 2026',
    reviewIsoDate: '2026-10-12',
    sources: [
      ['https://www.australia.com/en/places/adelaide-and-surrounds/guide-to-adelaide.html', 'Tourism Australia — Adelaide and Kaurna cultural context'],
      ['https://www.botanicgardens.sa.gov.au/visit/adelaide-botanic-garden/plan-your-visit', 'Adelaide Botanic Garden — plan your visit'],
      ['https://www.samuseum.sa.gov.au/visit/plan-your-visit/opening-times-location', 'South Australian Museum — opening times and location'],
      ['https://www.adelaidemetro.com.au/routes-and-schedules/timetables', 'Adelaide Metro — timetables and service updates'],
      ['https://www.adelaidemetro.com.au/routes/751', 'Adelaide Metro — Route 751 and route variants'],
      ['https://www.linksa.com.au/bus-routes/', 'LinkSA — regional routes and service information'],
      ['https://www.sa.keoride.com.au/', 'Keoride — Barossa service-area information; check eligibility and booking terms'],
      ['https://www.barossa.com/visit/barossa-visitor-centre/', 'Barossa — visitor centre, Tanunda'],
      ['https://southaustralia.com/destinations/fleurieu-peninsula/places/mclaren-vale', 'South Australian Tourism Commission — McLaren Vale'],
      ['https://www.parks.sa.gov.au/parks/flinders-chase-national-park', 'National Parks and Wildlife Service SA — Flinders Chase'],
      ['https://www.sealink.com.au/kangaroo-island/', 'SeaLink — official Kangaroo Island ferry information']
    ],
    guides: [
      g({
        slug: 'city-parklands-north-terrace', name: 'Adelaide Park Lands & North Terrace', motif: 'civic green belt', instrument: 'parklands-plan', imageQuery: 'Adelaide North Terrace parklands city', imageAlt: 'Adelaide skyline and Elder Park beside the River Torrens',
        summary: 'A North Terrace and Botanic Garden day with one collection, one shaded garden section and a tram or bus return that you can check before leaving.',
        orientationTitle: 'Choose one institution before crossing the civic axis.',
        orientation: 'Use Adelaide Railway Station or a central-CBD stop as the start. North Terrace places the South Australian Museum and Art Gallery in the same cultural strip; select one as the main indoor block, then continue east toward the Botanic Garden only while the weather and energy allow. A city day can stay on foot and tram, but the parklands are broad: choose an entrance and one garden area rather than aiming to walk the whole green belt.',
        access: 'Check Adelaide Metro’s live planner and alerts for the specific stop, direction and event day. The Botanic Gardens list a North Terrace tram stop and several entrances; confirm the current gate, opening hours and accessible route before setting the walk. The SA Museum publishes its location, opening times and access information separately. Do not assume every garden path is step-free or that a late event leaves the same return service.',
        sequence: 'Start at Adelaide Railway Station or the nearest central stop → walk east along North Terrace → give the SA Museum or Art Gallery one protected visit (not both by default) → continue toward the Botanic Garden’s North Terrace side → choose one garden loop and rest → return by the current tram/bus or walk back through the civic edge. If the group is tired, finish after the indoor visit and take transit to a central meal.',
        boundary: 'The Kaurna people are the Traditional Custodians of Adelaide. Treat the civic institutions, memorials and parklands as living public and cultural places: follow event and photography signs, keep paths clear, and use marked entrances rather than crossing lawns or garden beds.',
        decisions: [
          ['Choose the indoor anchor', 'The SA Museum and Art Gallery share the North Terrace cultural strip. Pick one collection or exhibition and check its current hours; keep the other for another day.'],
          ['Pick the garden exit', 'Use the entrance and path shown on the Botanic Gardens’ current visitor plan. If heat, rain or mobility makes the longer walk uncomfortable, use transit for the garden leg or stop after the museum.'],
          ['Keep the night central', 'A CBD base near North Terrace or the rail station keeps the return simple. Check the final useful service before a festival, performance or late dinner.']
        ],
        interpretation: 'North Terrace is the connecting spine; the meaningful choice is how much time to give one collection and one garden setting. The River Torrens/Elder Park view is a separate westward option, not a reason to walk across the city after an already full museum-and-garden day.',
        stages: [['Arrive at the civic spine', 'Use Adelaide Railway Station or a planned central stop. Check the return service first, especially if a performance or event may affect road access.'], ['Give one collection a real block', 'Choose the SA Museum or Art Gallery from its current program. The Museum’s official plan lists it on North Terrace; use its live opening and access page before setting the day.'], ['Walk or ride east', 'Follow North Terrace toward the Botanic Garden and enter through a currently open public gate. Select one garden section and a rest point; use the garden plan to choose a shorter return when heat or mobility calls for it.'], ['Return on the same civic axis', 'Take the confirmed tram/bus or retrace the central section. Add Elder Park only if it is a separate, comfortable westward finish with enough daylight and a direct return.']],
        risks: [['Heat on open paths', 'The broad civic spaces have limited shade between anchors. Carry water, use the garden’s shaded areas and shorten the route in hot weather.'], ['Hours and event changes', 'Museum hours, garden access and city events can alter the plan. Recheck the venue and Adelaide Metro on the visit date.'], ['Walking distance and access', 'Do not treat North Terrace and the full parklands as one short block. Choose an entrance, step-free route and early turnaround that fit the least mobile traveler.']],
        duration: 'Give this route one full day from a central base, or split it into two half-days if the collection is a priority. One central night before and after regional travel avoids rushing the civic day between transfers.', combine: 'Pair with the Central Market only when the hours and return fit; it is a separate south-of-the-city leg. Keep the Hills, Barossa and McLaren Vale for dedicated regional days.', verify: 'On the date, check Adelaide Metro trip planning and alerts, one chosen institution’s hours and access, the Botanic Gardens’ open entrances and visitor plan, heat and city event closures.',
        faq: [
          ['Is North Terrace and the Botanic Garden a one-day walk?', 'Yes, if you choose one indoor institution and one garden section. The garden and parklands are larger than a quick add-on; use the current map and shorten the route in heat or for mobility needs.'],
          ['Where is the practical city base?', 'A central Adelaide hotel near North Terrace or the railway station makes this route and regional transfers easier to plan. Check the exact address against your station, step-free route and late-night return.'],
          ['What is the wet- or hot-weather alternative?', 'Keep the indoor museum or gallery as the anchor, use a current tram/bus link if the garden walk is uncomfortable, or end after the collection. Do not force an exposed parklands loop to preserve the itinerary.']
        ],
        sources: [
          ['https://www.australia.com/en/places/adelaide-and-surrounds/guide-to-adelaide.html', 'Tourism Australia — Adelaide and Kaurna cultural context'],
          ['https://www.adelaidemetro.com.au/routes-and-schedules/timetables', 'Adelaide Metro — timetables and service updates'],
          ['https://www.botanicgardens.sa.gov.au/visit/adelaide-botanic-garden/plan-your-visit', 'Adelaide Botanic Garden — entrances, transport and visitor planning'],
          ['https://www.samuseum.sa.gov.au/visit/plan-your-visit/opening-times-location', 'South Australian Museum — opening times and location']
        ],
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12'
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
        summary: 'A Tanunda-based Barossa plan that uses the Gawler–Angaston bus corridor only after timetable checks and treats every cellar-door transfer as a separate booking.',
        orientationTitle: 'Set the return ride, then choose one valley corridor.',
        orientation: 'Tanunda is a useful town base: the Barossa Visitor Centre is on Murray Street and can help orient a day, while nearby Nuriootpa and Angaston serve different parts of the valley. Build one geographic line rather than crossing between them for a list of tastings. LinkSA lists regional routes 1110 and 1111 between Angaston and Gawler, but these are bus routes, not winery shuttles; a train-to-bus chain must fit your date and a safe return.',
        access: 'If using public transport, compare the current Gawler train with LinkSA’s 1110/1111 timetable in both directions before booking. LinkSA lists a Barossa Keoride service area, while Keoride describes the Barossa service as for residents; confirm visitor eligibility, operating hours, booking and pickup points directly rather than treating it as a tourist transfer. Otherwise reserve a tour or sober driver with the exact Tanunda/producer pickup and return. Cellar doors are dispersed, so do not walk between them on the assumption that a nearby road has a footpath.',
        sequence: 'Arrive in Tanunda and check in before the tasting day → use the visitor centre at 66–68 Murray Street or a town meal to orient → choose one corridor, such as Tanunda/Bethany or Nuriootpa/Angaston → reserve one or two public cellar-door visits with a meal and confirmed rides → return to Tanunda before dark. Keep arrival day to town and landscape; do not put a tasting between an uncertain regional bus connection and a long city drive.',
        boundary: 'The Barossa is a working food and wine region on Ngadjuri, Peramangk and Kaurna Country. Vineyards are private farms outside designated visitor areas. Follow each producer’s booking, photography and biosecurity rules, and leave a sober driver fully out of the tasting.',
        decisions: [
          ['Base in a town', 'Tanunda puts food, visitor information and accommodation in a town setting; Nuriootpa or Angaston may suit a different booked route. Rural lodging needs an explicit pickup and evening return.'],
          ['Transit is not winery access', 'The Gawler–Angaston LinkSA corridor can help with regional travel, but confirm the train/bus connection and both return legs. It does not provide a guaranteed door-to-door winery circuit.'],
          ['Cap the tasting day', 'Book one compact producer area, a substantial meal and a sober ride. Leave other cellar doors for a later visit rather than adding cross-valley mileage.']
        ],
        interpretation: 'This is a town-and-valley itinerary, not a winery map. Use Tanunda as the orientation point; select one branch of the valley and return to the same overnight base instead of chasing scattered cellar doors.',
        stages: [['Reach and sleep in Tanunda', 'Choose a confirmed Adelaide-to-Barossa transfer. If using train plus LinkSA, verify the exact Gawler connection, service day, stop and return; leave tasting for after check-in.'], ['Orient on Murray Street', 'Use the Barossa Visitor Centre, a meal or a short town walk to set the next day. Its current visitor page lists its Tanunda location and trip-planning help; check the live opening time.'], ['Choose one booked corridor', 'Select Tanunda/Bethany or a Nuriootpa/Angaston direction based on confirmed appointments and transport. Arrange the producer-to-producer legs yourself or through the tour; do not assume Keoride accepts visitor trips or winery drop-offs.'], ['Return before the road darkens', 'Come back to the same town base with the sober driver or operator. If a public bus is your return, set a hard turnaround from its verified timetable and skip the final tasting if the connection margin is thin.']],
        risks: [['No last-mile ride', 'Regional buses connect towns, not every cellar door. If the producer cannot confirm a safe transfer, select a town-only day or book a tour.'], ['Thin or mismatched timetable', 'A Gawler train and LinkSA bus may not form a useful same-day loop. Check the latest operator timetables and service alerts before buying or reserving anything.'], ['Alcohol, heat and fire', 'A designated driver must remain sober. Check fire and weather alerts, carry water and keep a meal and return plan ahead of any tasting.']],
        duration: 'Use at least two nights in Tanunda for one full valley day without a same-day return drive to Adelaide. One night can work only with an arrival and departure plan that leaves a full, confirmed regional day.', combine: 'Pair with Adelaide on the mainland. Do not combine Barossa and McLaren Vale as a one-day loop; the two regions need separate transport and tasting plans.', verify: 'Confirm LinkSA or tour service dates, Gawler connection, Keoride visitor eligibility if relevant, every producer reservation, designated driver, meal, fire/weather alerts and accommodation pickup.',
        faq: [
          ['Can I tour the Barossa by bus?', 'LinkSA lists routes 1110/1111 on the Gawler–Angaston corridor, and a Keoride service area is listed for Barossa towns. Neither source guarantees cellar-door access. Verify the current schedule and visitor eligibility, then book last-mile transfers or make this a town-only visit.'],
          ['Where should I stay for a first Barossa visit?', 'Tanunda is a useful first base for a town evening and visitor-centre orientation. Nuriootpa or Angaston can fit a different route; choose the bed by your confirmed producer and transfer plan, not by a map pin alone.'],
          ['How many tastings fit?', 'Plan one compact corridor, usually one or two confirmed public visits with a meal and real travel gaps. A third stop is only sensible if the operator, booking times and sober return all confirm it.']
        ],
        sources: [
          ['https://www.linksa.com.au/bus-routes/', 'LinkSA — Barossa route 1110/1111 and Keoride listings'],
          ['https://www.sa.keoride.com.au/', 'Keoride — Barossa service area and resident service description'],
          ['https://www.barossa.com/visit/barossa-visitor-centre/', 'Barossa — visitor centre in Tanunda'],
          ['https://www.barossa.com/', 'Barossa — destination and Country acknowledgement'],
          ['https://www.adelaidemetro.com.au/routes-and-schedules/timetables', 'Adelaide Metro — current rail and bus timetable planning']
        ],
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12'
      }),
      g({
        slug: 'fleurieu-mclaren-vale', name: 'Fleurieu Peninsula & McLaren Vale', motif: 'vine-to-coast circuit', instrument: 'coast-cellar', imageQuery: 'McLaren Vale Fleurieu Peninsula vineyards coast', imageAlt: 'Vineyards and rolling country on the Fleurieu Peninsula',
        summary: 'A McLaren Vale and Willunga route that distinguishes the useful Route 751 town corridor from the separate rides needed for cellar doors and coastal stops.',
        orientationTitle: 'Use the bus corridor for towns, then solve the last mile.',
        orientation: 'The south approach is more connected than an all-peninsula circuit: Adelaide Metro lists Route 751 from Aldinga through Willunga, McLaren Vale and Seaford to Noarlunga. A practical no-car day can center on McLaren Vale town or Willunga, but a bus stop does not mean a vineyard, beach or restaurant transfer is covered. Decide whether the day is town-and-food, a booked wine tour, or a coast outing with a separate ride.',
        access: 'Adelaide Metro publishes Route 751 and variants 751A/B/C; the route page currently lists stops on Main Road in McLaren Vale and connections at Seaford and Noarlunga Centre. Check the correct variant, direction, dated timetable, stop and final return in the official planner. Do not infer that a regional cellar door or coast road is walkable from a stop. For a tasting day, book an operator or sober driver to the actual venue; for an independent bus day, stay in the served towns and keep tastings only where a return ride is confirmed.',
        sequence: 'Before leaving Adelaide, confirm the 751 variant and a return service → ride via Seaford/Noarlunga toward McLaren Vale → use the Main Road town stop as the walking-and-meal anchor → add Willunga only if the day’s timetable permits a second town → return on the same checked corridor. A driver/tour alternative can reverse the order: take one coastal stop in the cooler morning, continue inland for a reserved McLaren Vale meal and one tasting, then return with the same sober operator.',
        boundary: 'McLaren Vale and Willunga are working towns within the Fleurieu region, not a continuous pedestrian wine trail. Stay on public footpaths and signed visitor access; beaches, cliffs, farms and cellar doors have distinct conditions. Follow local signs and do not enter a property from a roadside gate.',
        decisions: [
          ['No car: stay on the bus corridor', 'Use Route 751 for a town-focused McLaren Vale/Willunga day after checking both directions. Treat every producer, coast and evening transfer as a separate booking.'],
          ['With a driver: pick one coast stop', 'A booked driver or regional tour can connect a morning coast visit with one winery cluster. Confirm the exact pickup, waiting time and sober return before tasting.'],
          ['Sleep where the evening ends', 'A McLaren Vale town bed can remove a late Adelaide return, but confirm local food and transport for your chosen date. A beach-side stay is a different base and needs its own ride plan.']
        ],
        interpretation: 'Route 751 makes the corridor legible from city rail/bus connections toward Seaford, McLaren Vale and Willunga. It does not turn the separated vineyards and coast into one transit-served loop; decide the final-mile ride before choosing a venue.',
        stages: [['Check the corridor both ways', 'Use Adelaide Metro to compare the 751 variants, route direction, stop and return for your exact date. Keep a screenshot or written backup of the planned service and leave margin for a missed connection.'], ['Choose a town anchor', 'For a no-car version, use a listed Main Road stop in McLaren Vale, eat and explore the public town center. Add Willunga only if its own bus leg and return still fit; do not add a coast stop by assumption.'], ['Book the rural branch', 'For cellar doors or the coast, reserve a tour or sober driver with named pickups and drop-offs. Keep the tasting area compact and agree on wait time, accessibility needs and the final return before departure.'], ['Finish in a served place', 'Return to the confirmed Seaford/Noarlunga connection or the booked accommodation. If the last useful bus is at risk, drop the optional second town rather than relying on an unverified ride.']],
        risks: [['Route variation', 'The 751 family has variants and day-specific schedules. Check the correct direction and both ends; do not plan from the route number alone.'], ['Unserved last mile', 'Cellar doors, beaches and coast roads may sit beyond a practical stop or safe walking route. Book the ride before leaving town.'], ['Surf, heat and alcohol', 'Check local conditions before a coast walk. Keep a sober driver outside tasting and shorten exposed outdoor time in heat, wind or poor surf conditions.']],
        duration: 'Use one full day for a town-focused bus itinerary. Two nights in McLaren Vale can add a separately arranged coast or producer day without forcing a late drive; one night is useful only if the arrival and evening ride are confirmed.', combine: 'Pair with Adelaide as a separate day and keep Barossa on its own northbound leg. Kangaroo Island requires its own ferry and island transport plan.', verify: 'Check the current Route 751 variant and return, any Adelaide rail/bus interchange, stop location, every producer or coast transfer, accommodation check-in, weather and local access notices.',
        faq: [
          ['Does Route 751 take visitors to wineries?', 'It serves towns including McLaren Vale and Willunga, but the route is not a winery shuttle. Check the current stop and walking access for any venue, or arrange a tour/driver to the specific cellar door.'],
          ['Can I do McLaren Vale without renting a car?', 'Yes, for a town-focused day if the current Route 751 timetable gives you a useful outbound and return. Build the meal and walk around the served town; add a producer or coast only after booking the last-mile ride.'],
          ['Should I combine the coast and wine in one day?', 'Only with a prebooked sober driver or tour that confirms both stops and the return. By public bus, choose a town corridor or one independently served purpose rather than improvising a coast-to-cellar transfer.']
        ],
        sources: [
          ['https://www.adelaidemetro.com.au/routes/751', 'Adelaide Metro — Route 751, variants and stop list'],
          ['https://www.adelaidemetro.com.au/routes-and-schedules/timetables', 'Adelaide Metro — date-specific timetables and service updates'],
          ['https://southaustralia.com/destinations/fleurieu-peninsula/places/mclaren-vale', 'South Australian Tourism Commission — McLaren Vale']
        ],
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12'
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
