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
