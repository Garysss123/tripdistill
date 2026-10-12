import { australiaGuide as g, defineAustraliaCluster as cluster } from './australia-guide-builder.mjs';

export const australiaEastClusters = [
  cluster({
    slug: 'sydney-harbour-coast',
    name: 'Sydney, Harbour & Coast',
    region: 'New South Wales',
    band: 'east',
    family: 'harbour-soundings',
    label: 'HARBOUR / FERRIES / OCEAN WALKS',
    tagline: 'Let ferries, headlands and weather divide the Harbour City.',
    reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12',
    hubIntro: 'Sydney works best as several linked transport-and-weather days, not one central checklist. The CBD and Circular Quay are the hinge; The Rocks and the Opera House sit on foot-linked harbour edges, while Bondi and Coogee need a separate coast day and Manly begins with a harbour crossing. Use this hub to choose a base, protect the return, and leave room for the living Country, civic uses and changing conditions that a map cannot schedule.',
    diagramAlt: 'Not-to-scale route schematic linking Sydney rail, walking, ferry and bus legs between the city, harbour and coast.',
    diagramCaption: 'Planning schematic only, not a geographic map. Lines show broad mode choices rather than distance, direction, a particular timetable or service promise; verify the actual route and access before departure.',
    stay: 'For a three-night first visit, stay near a rail interchange that also gives a practical start toward Circular Quay; compare CBD/Wynyard/Town Hall with Central by the actual first-day route, station exit, luggage access and late arrival. Central can simplify a rail-led arrival but adds a cross-city leg to some harbour starts. A beach base makes sense only when the coast is the main purpose; price the city return each day before booking. Check step-free paths with the station and accommodation rather than inferring them from a map.',
    transfer: 'Rail, light rail, buses, ferries and walking connect the chapters, but they are different service plans. Check each leg in Transport for NSW on the travel date, including wharf or stop changes, interchange walking, accessible boarding and disruption notices. Keep a route-independent buffer before a booked performance, airport departure or last planned return; no sample itinerary here guarantees a particular fare, headway or operating time.',
    tripShapes: [
      { title: '3 nights · harbour first', copy: 'Keep the arrival day close to the base. Give one full day to Circular Quay, The Rocks and the Opera House exterior or a confirmed visit, then reserve the third day for either a harbour crossing or one coast section. This is a choice, not a checklist: omit the distant chapter that would consume its own transfer day.' },
      { title: '5 nights · city plus one coast', copy: 'Use two separate harbour/civic days, one Bondi–Coogee coast day, and one Manly/North Head day only if ferry and track conditions suit. Leave a flexible half-day for weather, a performance or a slower museum visit; do not make a timed ticket depend on a beach bus return.' },
      { title: '7 nights · weather margin', copy: 'Add a genuine spare day and choose between a second eastern-beach section, a western foreshore chapter or a longer cultural visit. Keep harbour, ocean and venue days modular so a heat warning, rough surf, event closure or service change can move one chapter without unraveling every booking.' }
    ],
    faq: [
      ['How many nights make Sydney useful?', 'Three nights support a focused harbour visit and one additional chapter. Five nights make room for both a coast day and a separate north-harbour day. Seven nights are useful when you want a weather reserve or deeper cultural visits; extra days are not a reason to combine incompatible transport legs.'],
      ['Which area is the best base?', 'There is no universal winner. Compare a CBD/Wynyard/Town Hall base for central harbour access, Central for rail arrival and intercity connections, and an eastern-beach stay only when beach time outweighs repeated city transfers. Check the exact hotel entrance, station exits, late-night return and accessibility needs.'],
      ['Can Bondi and Manly fit on one day?', 'They are separate ocean and harbour systems. Doing both turns the day into transfers and leaves little time to walk either place well. Choose the one that matches the day’s weather, interests and return plan.'],
      ['What must be checked on the day?', 'Transport for NSW service and access notices, venue or garden status, Bureau of Meteorology warnings, Beachsafe patrol and hazard information, and any park or path closure. Check the authority that governs the next leg, not just a general city forecast.']
    ],
    sources: [
      ['https://www.australia.com/en/places/sydney-and-surrounds/guide-to-sydney.html', 'Tourism Australia — Sydney'],
      ['https://www.sydney.com/', 'Destination NSW — Sydney'],
      ['https://transportnsw.info/trip', 'Transport for NSW — trip planner'],
      ['https://www.bom.gov.au/nsw/forecasts/sydney.shtml', 'Australian Bureau of Meteorology — Sydney forecast'],
      ['https://www.nationalparks.nsw.gov.au/visit-a-park/parks/sydney-harbour-national-park', 'NSW National Parks — Sydney Harbour National Park']
    ],
    guides: [
      g({
        slug: 'circular-quay-rocks', name: 'Circular Quay & The Rocks', motif: 'harbour arrival clock', instrument: 'soundings', imageQuery: 'Circular Quay The Rocks Sydney harbour', imageAlt: 'Circular Quay and The Rocks beside Sydney Harbour',
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12',
        summary: 'A walkable Circular Quay–The Rocks circuit that turns ferry wharves, the harbour ridge and public foreshore into one legible half-day, with a named rail or wharf return and room for a museum only when its entry is confirmed.',
        orientationTitle: 'Read the interchange before the postcard.', routeTitle: 'Quay edge, one ridge, one return.',
        orientation: 'Start at Circular Quay Station or the ferry wharves and first identify the route home. A compact circuit can run from the quay along the public edge to the Museum of Contemporary Art, then west into The Rocks and uphill toward Observatory Hill before returning by a checked route. The order matters: the harbour edge is busy and level, while the historic lanes rise quickly. If stairs or steep grades are a barrier, keep the visit on the lower foreshore and choose an accessible cultural interior after checking its entry and facilities.',
        interpretationTitle: 'A working harbour, not a viewing deck.',
        interpretation: 'Circular Quay is a passenger interchange and The Rocks is a lived-in precinct. Read signs and public interpretation, leave wharf boarding lanes and shop thresholds clear, and use only streets, parks and venues open to visitors. The view is not permission to enter a residence, service yard, fenced archaeological area or active worksite. If a cruise or event crowd changes the public route, shorten the loop instead of pushing through a closure.',
        access: 'Use the Transport for NSW planner to choose between Circular Quay rail, light rail and a specific ferry wharf on the day. Check station lift status, platform changes, wharf notices and the final connection; the nearest pin does not confirm a step-free path. The ridge streets include slopes and stairs, so agree on a lower-level turnaround before the group splits.',
        sequence: 'Give this route a half-day without a timed interior, or most of a day if you add one museum or booked experience. Save the Opera House interior and Botanic Garden for their own route. Note two return choices before walking west, and stop at Observatory Hill or another signed public viewpoint only if the access path remains open.',
        boundary: 'The Rocks sits within Gadigal Country and includes homes, workplaces and heritage fabric. Use the public streets and viewpoints as intended, follow current cultural interpretation, and do not stage residents or workers as scenery. Respect barriers, quiet spaces and any gathering or ceremony that changes access.',
        decisions: [
          ['Pick the route length', 'Lower quay and museum edge for a level shorter visit; add the ridge only if slopes and stairs suit the group.'],
          ['Choose one interior', 'Use the MCA or another confirmed venue as a deliberate reading stop, not an extra queue added after the walk.'],
          ['Name two exits', 'Write down one rail/light-rail option and one wharf or alternate station before leaving the interchange.']
        ],
        stages: [['Set the return bearings', 'At the station or wharf, locate the actual entrance, boarding area, lift information and an alternate exit. Check alerts before committing to a direction.'], ['Follow the public quay', 'Walk the open foreshore toward the museum edge, keeping clear of boarding queues and restaurant access. If the edge is constrained, turn at the nearest public cross-street.'], ['Climb one Rocks lane', 'Choose a signed public street toward the ridge and read on-site heritage interpretation. Observatory Hill is an optional endpoint, not a reason to continue onto a closed or private path.'], ['Close at the chosen node', 'Return via a currently open street to the planned station or wharf. Recheck the service before joining a long queue and use the second exit if crowding or access changes.']],
        risks: [['Cruise, market or event surge', 'Passenger and event peaks can change the usable footpath and interchange. Check the day’s notices; skip the ridge if the quay is already congested.'], ['Steep heritage streets', 'The short map distance hides gradients and stairs. Confirm the exact step-free route with the venue or station; if uncertain, keep to the lower foreshore and make that the complete visit.'], ['Working water edge', 'Wharves, wet stone and unprotected harbour edges are not play or photo platforms. Stay behind barriers, keep children close and never cross a boarding lane against signs.']],
        duration: 'Allow three to four hours for the lower quay and one ridge, plus time for a single confirmed museum visit. A slower mobility-adapted foreshore version can be a complete outing.', combine: 'The Opera House and garden route is the nearest thematic neighbor, but treat it as another half-day with its own gate and booking checks. Keep Bondi or Manly on a different day.', verify: 'Check Transport for NSW trip planning and service alerts, wharf and lift notices, current museum access, public-space closures, weather and a return route that suits the least mobile traveler.',
        faq: [
          ['Is The Rocks a flat walk from Circular Quay?', 'No. The waterfront is comparatively level, but the lanes rising through The Rocks include slopes and stairs. A foreshore-only visit is a valid shorter option; verify step-free access for any museum, station or venue you add.'],
          ['How long should I spend here?', 'Plan three to four hours for the quay, one ridge and pauses. Add a museum only after confirming its hours, admission and access directly; an event or crowd may make a shorter loop the better day.'],
          ['Can I add the Opera House and gardens?', 'They are nearby but form a distinct visit with separate venue and garden thresholds. Pair them only when the route, any timed entry and the remaining daylight work; do not add a beach trip as well.'],
          ['What is the simplest fallback?', 'Stay on the lower public foreshore, choose one confirmed indoor stop, then return to the same checked transport node. This avoids the steepest lanes and keeps the day legible when weather or access changes.']
        ],
        sources: [
          ['https://transportnsw.info/trip', 'Transport for NSW — trip planner and current service information'],
          ['https://www.nationalparks.nsw.gov.au/visit-a-park/parks/sydney-harbour-national-park', 'NSW National Parks — Sydney Harbour National Park visitor information'],
          ['https://www.mca.com.au/visit/', 'Museum of Contemporary Art Australia — visit information']
        ]
      }),
      g({
        slug: 'opera-house-botanic-garden', name: 'Opera House & Royal Botanic Garden', motif: 'performance-to-garden threshold', instrument: 'aperture', imageQuery: 'Sydney Opera House Royal Botanic Garden harbour', imageAlt: 'Sydney Opera House and Harbour Bridge across Sydney Harbour',
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12',
        summary: 'A half-day pairing of the Sydney Opera House precinct with one Royal Botanic Garden section, organized around the actual venue booking, garden gate, shade and return connection rather than an assumed all-access loop.',
        orientationTitle: 'Choose which threshold you are visiting.', routeTitle: 'Booking first, garden section second.',
        orientation: 'The forecourt, a guided Opera House visit, a performance venue and the Royal Botanic Garden are different visits with different access rules. Decide which one anchors the day before leaving Circular Quay. With a timed tour or performance, follow the venue’s own arrival, bag and accessibility instructions first; without a ticket, keep the plan to public exterior spaces and verify what is open. The garden is large enough that one named path and exit make a better half-day than trying to trace its whole perimeter.',
        interpretation: 'The Opera House is on Tubowgule, within Gadigal Country, and the Garden is a collection and public landscape with its own cultural interpretation. Allow those places to shape the pace: read the venue and garden’s current interpretation, stay on open paths, and do not treat lawns, ceremonial areas or planted beds as shortcuts or props.',
        access: 'Start from Circular Quay only after checking the Opera House visitor information for the exact entrance, security and accessibility arrangements tied to the booking. Then select one garden gate and a path whose grade, surface, shade and exit fit the group. The Botanic Gardens site publishes visit and accessibility guidance; check live notices for weather, maintenance and event closures before setting the route.',
        sequence: 'For an unbooked visit, use the public precinct, one garden section and a confirmed exit as a flexible half-day. For a tour or performance, anchor the schedule to that ticket and do not add a distant beach or a second timed venue. Keep water, shaded pauses and an indoor return option in the plan during hot or wet conditions.',
        boundary: 'Respect the venue’s photography and security instructions, cultural interpretation, garden collection rules, closed lawns and event boundaries. A publicly visible entrance does not imply admission to a performance space or a garden path that is temporarily closed.',
        decisions: [
          ['Book or stay outside', 'Choose one: guided visit, performance, or public exterior and garden. Each creates a different time and entry contract.'],
          ['Choose one garden edge', 'Select a named path and gate after checking surface, slope, shade and current closures.'],
          ['Keep a weather branch', 'In heat, shorten the exposed forecourt and garden; in rain or storms, use a confirmed indoor visit or reschedule.']
        ],
        stages: [['Lock the venue details', 'Confirm the correct building and entry time, arrival buffer, bag/security rules, accessibility request and cancellation or late-arrival terms from the official visit page.'], ['Read the public precinct', 'Use the open forecourt and harbour edge to understand the setting. Keep event queues and working access clear; skip photography where the venue asks visitors not to take it.'], ['Choose one garden section', 'Check the Garden’s current path and gate information. Pick one shaded route or cultural interpretation stop that fits the group rather than improvising a full perimeter.'], ['Exit by the verified gate', 'Recheck closures and the trip planner, then leave through the named gate while there is daylight and a practical connection. If the gate closes early, take the marked public route back rather than trying a service entrance.']],
        risks: [['Different entry contracts', 'Exterior access, tours and performances do not share a ticket or check-in rule. Follow the exact booking and current venue notices; never assume the day-of entry option.'], ['Heat, rain and exposure', 'The forecourt and several garden paths are open to sun and weather. Carry water, use shade and shorten the route when official warnings or the group’s condition call for it.'], ['Gate or path change', 'Maintenance, storms, events or garden operations can alter an intended route. Confirm open paths and the return gate on the day, and do not cross a planted or closed area to save time.']],
        duration: 'Set aside half a day for the public precinct and one garden section. A performance or guided visit adds its actual duration and arrival margin; protect those first and do not build a second timed stop around an assumed finish.', combine: 'Circular Quay and The Rocks fit as a separate nearby half-day if energy and venue timing allow. Keep Bondi or Manly for another day so a booking does not depend on an uncertain cross-city connection.', verify: 'Check the Opera House official visit page for booking, entry, security and access; check Botanic Gardens visit/accessibility notices for paths, gates and weather closure; then confirm the public transport return.',
        faq: [
          ['Do I need a ticket to see the Opera House?', 'The public precinct and a booked guided visit or performance are different experiences. Check the official visit page for what is open and what requires a current booking; this guide does not promise day-of admission.'],
          ['Can I walk through the entire Botanic Garden?', 'Choose a section rather than assuming every gate and path is open. Use the Garden’s current map and access information to match a route to mobility, weather and the planned exit.'],
          ['How much time should I allow?', 'A flexible exterior-and-garden visit needs about half a day. Add only the duration and arrival buffer shown for a confirmed tour or performance, and avoid scheduling a distant coast transfer after it.'],
          ['What should change in hot weather?', 'Reduce the exposed forecourt time, choose a shaded and shorter garden path, carry water and heed official warnings. If heat or storms make the route uncomfortable or unsafe, move the visit to another day.']
        ],
        sources: [
          ['https://www.sydneyoperahouse.com/visit', 'Sydney Opera House — plan a visit, tours, getting here and accessibility'],
          ['https://www.botanicgardens.org.au/royal-botanic-garden-sydney/plan-your-visit', 'Botanic Gardens of Sydney — Royal Botanic Garden visit information'],
          ['https://www.botanicgardens.org.au/royal-botanic-garden-sydney/plan-your-visit/accessibility', 'Botanic Gardens of Sydney — accessibility information'],
          ['https://transportnsw.info/trip', 'Transport for NSW — trip planner and service information']
        ]
      }),
      g({
        slug: 'barangaroo-darling-harbour', name: 'Barangaroo & Darling Harbour', motif: 'western foreshore ledger', instrument: 'ledger', imageQuery: 'Barangaroo Sydney Darling Harbour waterfront', imageAlt: 'Barangaroo waterfront on the western side of central Sydney',
        summary: 'A west-side foreshore walk through headland park, commercial waterfront and Darling Harbour without assuming every edge forms one continuous promenade.',
        orientation: 'choose either the high headland line or the lower wharf line and note where construction or private frontage interrupts it.', access: 'Arrive through Wynyard, Barangaroo metro or a named ferry stop and save an inland station exit for the return.', sequence: 'Begin in the cooler headland landscape, move through the working waterfront and finish at one defined Darling Harbour venue or transport stop.', boundary: 'Recognise Barangaroo as living Country and a contemporary commercial precinct; follow cultural interpretation and keep private events, offices and construction outside the route.',
        stages: [['Start above the water', 'Use the headland paths to understand the reshaped shoreline and identify the next public descent.'], ['Follow a signed seam', 'Stay on the designated waterfront connection and respond to temporary diversions rather than forcing a closed edge.'], ['Choose one interior', 'Add a museum, aquarium or cultural venue only when its ticket and queue fit the remaining day.'], ['Exit inland', 'Use a confirmed light-rail, metro or train station instead of extending the foreshore until fatigue.']],
        risks: [['Construction change', 'Major waterfront works can move paths and crossings. Read on-site signs and current precinct notices.'], ['Exposed surfaces', 'Sun, wind and reflected heat build quickly along the western edge; carry water and use shaded pauses.'], ['Night dispersal', 'Event finishes create concentrated demand. Decide the inland station and meeting point before the crowd forms.']],
        duration: 'Allow half a day for the full foreshore argument, or two hours for one focused section.', combine: 'It pairs well with The Rocks via Barangaroo Reserve; do not automatically append the eastern beaches.', verify: 'Check path diversions, venue entry, event schedules, ferry or metro status and weather warnings.'
      }),
      g({
        slug: 'bondi-coogee-coastal-walk', name: 'Bondi to Coogee Coastal Walk', motif: 'surf and headland exposure', instrument: 'beach-section', imageQuery: 'Bondi Beach Sydney coastline', imageAlt: 'Bondi Beach and its ocean coastline in Sydney',
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12',
        summary: 'The signed Bondi–Tamarama–Bronte–Clovelly–Coogee coastal walk is about 6 km; plan roughly three to five hours with stops, an early turnaround option and a checked bus return rather than treating the exposed headlands as a flat city stroll.',
        orientationTitle: 'Choose your finish before the first headland.', routeTitle: 'Beach check, staged bays, verified exit.',
        orientation: 'The NSW Government describes the Bondi to Coogee route as 6 km and about two hours at a brisk walking pace. That is a route reference, not a promise for a visitor day: stairs, pauses, heat, crowds and the return can extend it. The natural sequence passes Tamarama, Bronte and Clovelly before Coogee. Decide in advance whether you mean to finish the full line or stop at a bay, then check the bus stop and service from that exact endpoint.',
        interpretation: 'This is an exposed shared public path beside beaches, headlands, homes and memorial places. Follow signs and closures, leave rock platforms and cliff edges alone, and use beach facilities without blocking lifesaving crews. Swimming is a separate decision from walking: consult Beachsafe and obey local patrol advice and flags; never infer safe water from clear skies or other swimmers.',
        access: 'Plan the outward trip to Bondi and the return from Coogee—or a declared intermediate bay—in the Transport for NSW planner for the actual date. Check the exact stop, any walking connection, accessible vehicle or path details, service alerts and a backup. The path includes stairs and uneven or sloping sections; do not describe the full route as step-free. If that is unsuitable, choose one beach precinct with a confirmed accessible arrival and departure instead.',
        sequence: 'Start early enough to keep daylight and heat margin, but follow the day’s forecast and surf advice rather than a fixed clock. At each beach compare the next exposed section with water, energy and transport. End at Coogee only if the group still has safe capacity; otherwise take the planned earlier exit. A shorter out-and-back to one bay is a complete alternative.',
        boundary: 'Stay on the formed coastal path, behind cliff barriers and away from wet rock shelves. Respect memorial spaces and private residential edges, leave surf lifesaving operations unobstructed, and enter the water only at an appropriate patrolled beach when local advice permits.',
        decisions: [
          ['Choose the endpoint', 'Full Coogee finish or one named bay turnaround; note the return stop before setting off.'],
          ['Read surf and heat', 'Use Beachsafe, the local patrol, UV and weather warnings to decide whether to walk, swim, shorten or reschedule.'],
          ['Match the path to the group', 'Stairs, gradients and exposed sections make this unsuitable as a universal step-free route. Pick one beach precinct if needed.']
        ],
        stages: [['Check conditions at Bondi', 'Read the current Beachsafe information, local flags and signs; check UV, wind, heat and path notices. Decide whether the day supports a full walk or only the first bay.'], ['Walk to Tamarama and Bronte', 'Use the signed coastal path and stairs. Pause at public facilities, stay back from the cliff edge and reassess water and energy before continuing.'], ['Make the Clovelly decision', 'Treat each bay as a real exit. Compare the remaining daylight and group capacity with the last exposed section to Coogee; shorten the route if conditions are deteriorating.'], ['Finish and return from the endpoint', 'At Coogee or the chosen earlier bay, use the exact bus stop and service checked for that day. Keep an alternate connection and do not depend on finding a ride immediately.']],
        risks: [['Heat and UV exposure', 'Shade can be intermittent and ocean glare adds exposure. Carry water and sun protection, and set a conservative stop rule before fatigue affects footing. Follow official heat warnings.'], ['Surf, cliffs and rock platforms', 'The walk does not make swimming safe. Stay on open paths, obey barriers and patrol instructions, and never use unpatrolled water or rock shelves as a shortcut or photo platform.'], ['Return-service uncertainty', 'Beach demand, traffic and service changes can stretch the city return. Check alerts, choose a specific endpoint and preserve a second transport option instead of scheduling a timed event afterward.']],
        duration: 'The NSW Government lists 6 km and about two hours at a brisk pace. For a visitor plan, reserve roughly three to five hours with stops and transit margin; use a shorter bay-to-bay outing in heat, poor surf, limited mobility or low daylight.', combine: 'Keep the coastal walk separate from a full Circular Quay/Manly day. A meal or brief beach stay at the chosen endpoint is a more honest pairing than another cross-city attraction.', verify: 'Check the NSW route advisory, Transport for NSW from the chosen start and exact finish, Bureau of Meteorology warnings, Beachsafe patrol/hazard information, daylight and any path closure.',
        faq: [
          ['How long is the walk?', 'The NSW Government lists the route at about 6 km and roughly two hours briskly. For a visitor day with photos, pauses, stairs and transport, allow three to five hours and be ready to shorten it.'],
          ['Can I stop before Coogee?', 'Yes. Decide on a named bay or turnaround before leaving and check how you will return from that exact place. Do not continue because the map looks short if the group, weather or daylight says stop.'],
          ['Is the route accessible for a wheelchair?', 'Do not assume the full coastal path is step-free: it includes stairs, slopes and uneven sections. Check current local access information, and select a specific beach precinct with confirmed access if the complete route does not fit.'],
          ['Is it safe to swim along the way?', 'Swimming is a separate, condition-dependent choice. Check Beachsafe and local signage, swim only where and when patrol advice permits, obey flags, and do not enter rock platforms or unpatrolled water.']
        ],
        sources: [
          ['https://www.nsw.gov.au/visiting-and-exploring-nsw/locations-and-attractions/bondi-to-coogee-coastal-walk', 'NSW Government — Bondi to Coogee Coastal Walk route information'],
          ['https://beachsafe.org.au/', 'Surf Life Saving Australia — Beachsafe patrol and hazard information'],
          ['https://www.bom.gov.au/nsw/forecasts/sydney.shtml', 'Australian Bureau of Meteorology — Sydney forecast'],
          ['https://transportnsw.info/trip', 'Transport for NSW — trip planner and service alerts']
        ]
      }),
      g({
        slug: 'manly-north-head', name: 'Manly & North Head', motif: 'ferry-to-headland circuit', instrument: 'tide-clock', imageQuery: 'Manly North Head Sydney harbour view', imageAlt: 'Manly and North Head above Sydney Harbour',
        summary: 'A ferry-led day linking Manly’s ocean and harbour sides to North Head, with cliff exposure and the last useful return kept visible.',
        orientation: 'use the ferry wharf as the hinge between sheltered harbour, the Corso, ocean beach and elevated North Head tracks.', access: 'Check the exact ferry service and wharf before departure; bus connections may be needed for North Head depending on ability and track choice.', sequence: 'Cross by ferry, read both water edges, choose one headland circuit and return to the wharf before evening demand or weather changes.', boundary: 'North Head includes protected habitat, memorial and defence heritage. Stay on open tracks, clean footwear when requested and respect closed cultural areas.',
        stages: [['Cross with a return in hand', 'Record the ferry service, fallback route and weather before the harbour crossing.'], ['Compare two shores', 'Use the Corso to understand the short distance between harbour and ocean conditions without assuming they are equally safe.'], ['Enter the headland carefully', 'Choose an open, ability-matched track and observe biosecurity, cliff and cycling controls.'], ['Descend for the ferry', 'Leave enough daylight and bus margin to reach the wharf without rushing steep or exposed sections.']],
        risks: [['Ferry disruption', 'Wind, maintenance and events can change service. Keep the bus-and-train alternative understood.'], ['Cliff exposure', 'Lookouts and tracks can be windy, hot and uneven. Obey barriers and closures.'], ['Ocean conditions', 'Manly surf changes rapidly; swim only in patrolled areas and follow lifesavers.']],
        duration: 'Use a full day for North Head and both Manly shores; a harbour-and-beach visit alone fits half a day.', combine: 'The ferry naturally frames a harbour day; do not add Bondi unless the trip is only a transport comparison.', verify: 'Confirm ferry and bus status, track closures, fire danger, surf, wind, UV and the last comfortable return.'
      })
    ]
  }),

  cluster({
    slug: 'blue-mountains-nsw-coast',
    name: 'Blue Mountains & NSW Coast',
    region: 'New South Wales',
    band: 'east',
    family: 'escarpment-contours',
    label: 'ESCARPMENT / FOREST / COASTAL EXCURSIONS',
    tagline: 'Use the escarpment rail line as a gateway, then choose one checked park leg.',
    reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12',
    hubIntro: 'Blue Mountains & NSW Coast is a family of distinct trips, not a single day-trip circuit. The westbound rail corridor reaches station towns; it does not deliver you to every escarpment track, and a coast or bay transfer is a separate regional plan. Choose one gateway, count the return as part of the route, and check the live park alert before choosing a descent. On 12 October 2026, NPWS alerts included closures around Wentworth Falls, Katoomba and Blackheath; the short safe plan is a currently open formal lookout or town visit, not an assumed canyon loop.',
    diagramAlt: 'Not-to-scale planning schematic of the Western rail corridor through Wentworth Falls, Katoomba and Blackheath, with separate last-mile plans to formal visitor gateways; no service or timetable is implied.',
    diagramCaption: 'TripDistill planning schematic, not a map or timetable. The dashed links do not identify a bus or promise access; confirm current transport, park alerts, path status and return on the day.',
    stay: 'For a two- or three-night mountain stay, sleep in Katoomba if the Three Sisters precinct anchors the plan, in Wentworth Falls village if you want an early local start, or in Blackheath for Govetts Leap and upper Grose viewpoints. Compare accommodation with the actual station-to-park last mile, luggage storage, meal access and the last practical return; a station address alone does not solve trail access. The coast chapters need their own base near the selected park or bay and should not be day-tripped from a mountain bed.',
    transfer: 'Transport for NSW rail connects the mountain station towns, but local buses, taxis, walking distances and park trailheads are separate links whose operation varies by date. Check the trip planner and live alerts both ways before booking; allow slack for a missed local connection and never make a remote track depend on an unverified ride. For Royal National Park or Jervis Bay, start a new road or operator plan and verify its own parking, return and weather constraints.',
    tripShapes: [
      { title: '2 nights · one mountain gateway', copy: 'Arrive with daylight, stay in one station town, and use the first full day for one formal lookout plus an open short walk only if the alert permits it. Keep the second day as the chosen mountain chapter or a weather reserve; leave the other gateway for another trip. On the 12 October 2026 alert snapshot, make a lookout-and-town day the default and switch to a descent only after the exact route is confirmed open.' },
      { title: '4 nights · three station towns, selectively', copy: 'Choose one base rather than moving bags nightly. One day each can serve Katoomba, Wentworth Falls and Blackheath only if the live local transfers work; otherwise choose two and use the spare as a closure/weather buffer. Start with the trip that has the narrowest access window, and keep each day’s return in the same town. Avoid connecting an open lookout to a closed descent just because they share a map label.' },
      { title: '6 nights · mountains plus a separate coast base', copy: 'Give the mountains at least three nights, then transfer to one coast gateway for the remaining nights; price and verify that inter-regional move before booking. Choose either Royal National Park coast or Jervis Bay/Booderee rather than trying both as day trips. Keep one flexible day for park alerts, rain, fire or a missed connection. The mountain and coast chapters are separate itineraries, not an efficient single loop.' }
    ],
    faq: [
      ['How many nights do the Blue Mountains need?', 'One night can support a narrow station-town and formal-lookout visit with an early start, but two or three nights make room for a route-specific track choice, return margin and a closure fallback. A descent is not required for a complete visit.'],
      ['Should I stay in Katoomba, Wentworth Falls or Blackheath?', 'Match the bed to the first confirmed gateway: Katoomba for Echo Point, Wentworth Falls for the upper falls precinct, Blackheath for Govetts Leap. Check the last-mile connection and evening food before choosing. A train station is not the trailhead.'],
      ['Can I combine the Blue Mountains and the NSW coast?', 'Yes as a multi-night transfer, not as a quick add-on to one mountain day. Move to a coast-side base and verify the new road/operator and park plan. Keep at least one reserve day if the trip depends on tracks or weather.'],
      ['What was closed at the latest review?', 'On 12 October 2026, NSW National Parks listed several closures, including parts of National Pass, Wentworth Pass/Slack Stairs, Valley of Waters below Sylvia Falls, a Prince Henry Cliff Walk section, and parts of Govetts Leap descent/Rodriguez Pass. These are dated observations, not a promise about later dates. Open the live alert and follow signs before every outing.']
    ],
    sources: [
      ['https://www.nationalparks.nsw.gov.au/visit-a-park/parks/blue-mountains-national-park/visitor-info', 'NSW National Parks — Blue Mountains visitor information'],
      ['https://www.nationalparks.nsw.gov.au/visit-a-park/parks/blue-mountains-national-park/local-alerts', 'NSW National Parks — live Blue Mountains alerts'],
      ['https://transportnsw.info/trip', 'Transport for NSW — trip planner'],
      ['https://www.visitnsw.com/destinations/blue-mountains', 'Destination NSW — Blue Mountains'],
      ['https://www.nationalparks.nsw.gov.au/visit-a-park/parks/royal-national-park', 'NSW National Parks — Royal National Park'],
      ['https://parksaustralia.gov.au/booderee/', 'Parks Australia — Booderee National Park'],
      ['https://transportnsw.info/', 'Transport for NSW — regional service planning']
    ],
    guides: [
      g({
        slug: 'katoomba-echo-point', name: 'Katoomba & Echo Point', motif: 'rail-to-escarpment arrival', instrument: 'contour', imageQuery: 'Katoomba Echo Point Three Sisters Blue Mountains', imageAlt: 'Three Sisters and Jamison Valley from Echo Point in the Blue Mountains',
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12',
        summary: 'A station-to-escarpment Katoomba plan with the Three Sisters formal lookout as a complete short outing, plus an optional, alert-dependent path rather than an assumed descent.',
        orientationTitle: 'Treat town, lookout and track as three separate legs.',
        orientation: 'Katoomba station is the regional arrival point; Echo Point is a separate town-to-park transfer; a walk beyond the formal lookout is a third decision. Make a full day of the town, visitor information and Echo Point if transport is uncertain. NPWS describes the Three Sisters Walk as 0.8 km return and 25–45 minutes, with an accessible-with-assistance segment from Echo Point to Oreades Lookout; stairs continue toward Honeymoon Bridge and should only be considered if the route is open and suits the group. A formal viewpoint can be the whole itinerary.',
        interpretation: 'The Three Sisters Aboriginal Place is of special cultural significance. Read the current NPWS and on-site cultural interpretation, stay on public formed paths and follow any requests from Traditional Owners or park staff. Do not climb the formations, step over barriers, invent stories about Country or treat a culturally important place as a photo prop.',
        access: 'Before leaving Sydney, check the Transport for NSW trip planner and live rail notices for the exact travel date, then confirm how you will cover the Katoomba station-to-Echo Point leg in both directions. Do not assume that a bus will be running, that a walking shortcut is suitable, or that the last train gives a comfortable margin. Check NPWS alerts for Echo Point, the Three Sisters Walk and adjacent tracks; identify a town-only fallback if the local transfer or stairs do not work for your party.',
        sequence: 'Use the first hour to settle bags, water and the return plan in town. Travel to the signed Echo Point precinct and read the valley from its formal viewing area. Only after checking route status, surface, stairs, visibility and the least mobile person’s capacity should you extend to an open path. Return to Katoomba before the planned service becomes the last option; if fog, rain, crowds or closures shrink the day, stay above the escarpment and spend time in town.',
        boundary: 'The Three Sisters and surrounding Country hold deep cultural significance. Use recognised interpretation and the public route; do not climb barriers, repeat unverified stories, fly a drone where prohibited, or enter a closed work area.',
        decisions: [
          ['Choose the night count', 'From Sydney, book two nights in Katoomba for a relaxed full day and a closure buffer. A one-night stop works only when arrival and departure services leave daylight for the lookout.'],
          ['Name the base', 'Stay near Katoomba station for the regional return, but verify the separate Echo Point transfer and evening food before booking.'],
          ['Keep two route lengths', 'Primary: town plus formal Echo Point viewpoints. Optional: one currently open, graded path. If the path is closed, wet, fogbound or too stair-heavy, the lookout plan is complete.']
        ],
        stages: [['Lock arrival and return', 'Save the Transport for NSW rail plan and an alternate return, confirm the accommodation’s bag policy, and check the Katoomba-to-Echo Point leg. If the final connection is uncertain, use a town-only arrival day.'], ['Read Echo Point first', 'Use the formal viewing area to understand the escarpment and visibility. The NPWS Three Sisters Walk information gives a short lookout option; check live alerts for the precise path and any stairs before stepping beyond it.'], ['Choose one open extension', 'Compare the posted grade and stairs with the party’s ability. Treat Honeymoon Bridge or any descent as conditional on current access; never substitute an adjacent closed track because it looks open from above.'], ['Return above the cliff', 'Turn back with daylight, water and enough slack for the local connection and regional train. If access changes, take the signed public route to town or use the preselected short fallback.']],
        risks: [['Fast mountain weather', 'Fog, wind, cold, heat and rain can replace each other quickly and erase the view or make steps slick. Check the local forecast, carry layers and let visibility or footing trigger an early return.'], ['Closures near the lookout', 'On 12 October 2026, NPWS alerts included Katoomba-area path closures, including Honeymoon Bridge, and warned that other sections can close at short notice. This is a dated snapshot; reopen the live alert for your visit and obey signs.'], ['Access and cultural boundaries', 'Some sections involve steep stairs and the place has cultural significance. Stay with the least mobile person’s route, use official interpretation and never climb, cross barriers or enter a closed area.']],
        duration: 'Plan two nights in Katoomba for one full day and a weather/closure reserve. A single night can work when the rail arrival and departure leave a complete daylight window; a Sydney same-day trip is possible only after checking both rail and the last-mile transfer, and the lookout alone is the realistic target.',
        combine: 'Wentworth Falls is a separate station-area plan, not a guaranteed add-on to Echo Point. With three or four nights in one mountain base, use different days and confirm that the inter-town rail and each park transfer operate; leave Blackheath for another day. Do not combine two descents or coast-region stops into a single Katoomba day.',
        verify: 'Check Transport for NSW rail notices and trip planning; the NPWS Blue Mountains visitor page and current local alerts; the Three Sisters Walk status, access description, local weather, visibility, fire restrictions and the return connection. Review the signs again at the park entrance.',
        faq: [
          ['How many nights should I stay?', 'Two Katoomba nights allow one full lookout day and one useful buffer. One night is a narrow option if your train times leave daylight at both ends. A longer walk should not be squeezed into a same-day rail return.'],
          ['Is the Three Sisters walk suitable for everyone?', 'NPWS describes the 0.8 km return section to Oreades Lookout as accessible with assistance; stairs continue beyond it. Confirm current accessibility and closures, and use the formal viewpoint as the complete plan if stairs are unsuitable.'],
          ['Can I add Wentworth Falls or Blackheath?', 'Only by assigning a separate day and verifying the station-town transfer, park access and return. Do not treat the region’s rail line as a direct connection to every lookout or trailhead.'],
          ['What is the closure fallback?', 'Stay in Katoomba, use only the currently open formal viewing area or town facilities, and move the track to another day. If the public lookout itself is restricted, do not route around a barrier; switch to a different open public place confirmed by NPWS.']
        ],
        sources: [
          ['https://transportnsw.info/trip', 'Transport for NSW — trip planner'],
          ['https://www.nationalparks.nsw.gov.au/visit-a-park/parks/blue-mountains-national-park/visitor-info', 'NSW National Parks — Blue Mountains visitor and transport information'],
          ['https://www.nationalparks.nsw.gov.au/visit-a-park/parks/blue-mountains-national-park/local-alerts', 'NSW National Parks — current park alerts'],
          ['https://www.nationalparks.nsw.gov.au/things-to-do/walking-tracks/three-sisters-walk', 'NSW National Parks — Three Sisters Walk and cultural significance']
        ]
      }),
      g({
        slug: 'wentworth-falls-tableland', name: 'Wentworth Falls & Tableland', motif: 'waterfall descent budget', instrument: 'elevation', imageQuery: 'Wentworth Falls Blue Mountains waterfall lookout', imageAlt: 'Wentworth Falls descending through the Blue Mountains escarpment',
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12',
        summary: 'A Wentworth Falls station-area plan that separates the upper lookout from steep waterfall tracks and makes the climb back, active closures and a no-descent alternative explicit.',
        orientationTitle: 'The descent is optional; the climb back is not.',
        orientation: 'Treat the Wentworth Falls village, the top-of-falls lookouts and each lower walking track as different route choices. A short upper-precinct outing can be worthwhile without descending. The NPWS Wentworth Falls to Leura route is a much longer 11 km one-way, grade 3 walk with an indicated 5–7 hours; it is not a substitute for the upper lookout and must not be planned as an open through-route while linked closures remain. On the 12 October 2026 alert snapshot, NPWS listed closures affecting parts of National Pass, Wentworth Pass/Slack Stairs and the Valley of Waters below Sylvia Falls.',
        interpretation: 'The waterfall catchment is steep, erosion-prone and sensitive to weather. Read the park signs and stay on the specific open route. Do not enter the watercourse, follow unofficial cliff edges or assume a closed section can be bypassed through another track.',
        access: 'Use Transport for NSW to check rail service to Wentworth Falls station and plan the station-to-village/park leg separately; verify the return as carefully as the arrival. If driving, confirm legal parking at the intended signed gateway rather than using an informal roadside pull-off. Before leaving accommodation, open the NPWS local alerts and the named walk page: current closure notices take precedence over older maps, downloaded routes and attractive waterfall conditions.',
        sequence: 'Choose the upper-lookout option as the baseline and set a named turnaround before considering any descent. At the signed start, check the route status again, footing, rain, wind, daylight and the least fit walker’s energy. Descend only if the exact intended track is open and the group is equipped for the return stairs. When a connecting section is closed, do not improvise a loop or cross a closure to reach a viewpoint; use an open upper area, return to the village or change the day.',
        boundary: 'Waterfall volume does not make a closed track safe. Protect vegetation, stay behind barriers, keep out of pools and cliff drainage lines, and never use a closed track as a shortcut between open sections.',
        decisions: [
          ['Allow the nights', 'Use two nights near Wentworth Falls or Katoomba for one upper-lookout day and a separate, conditional track day. A Sydney day trip should target the upper precinct only.'],
          ['Set the turnaround', 'Write down the open track endpoint and a time to turn back before descending; the return climb and transport margin count toward the route.'],
          ['Choose a fallback', 'If rain, recent runoff, stairs, closure or service timing breaks the descent plan, stay at an open upper viewpoint or make it a village day.']
        ],
        stages: [['Select an open route', 'Read the live local alert and the exact NPWS walking-track page. Name the open start and turnaround; if the intended link crosses a closure, remove that loop rather than searching for a bypass.'], ['Assess from above', 'Use a signed upper lookout to read visibility, wind and recent water conditions. Check whether paths are wet and whether the group can safely manage stairs in both directions.'], ['Spend the descent budget', 'Proceed only on an open route matching the group’s grade and time. Carry water, count the uphill return and stop before fatigue affects balance. The upper precinct remains a valid endpoint.'], ['Close with daylight', 'Reverse the known route early enough for the village, park exit and planned station or parking return. If a service changes, use the named alternate transfer or stay overnight; do not rush a steep climb to catch the last connection.']],
        risks: [['Closed or linked sections', 'As checked on 12 October 2026, several popular waterfall tracks and connections had active closures, including Wentworth Pass/Slack Stairs and parts of National Pass and Valley of Waters. Conditions can change; read the live alert and all trailhead signs.'], ['Wet steps and runoff', 'Mist, rain and runoff can make stairs slippery and watercourses hazardous. Postpone a descent after heavy rain or when footing, visibility or official warnings are poor; never enter a channel.'], ['Downhill energy illusion', 'A descent spends the climb-back budget before the group feels tired. Keep the least fit walker’s pace, water and daylight margin in charge, and turn back before balance declines.']],
        duration: 'Two nights near Wentworth Falls or Katoomba support one full upper-lookout day and a second day that can be used only if the chosen track is open. Three to six hours is a planning range for some shorter walking options, not a promise for closed or linked routes; the 11 km Wentworth Falls to Leura route is a separate 5–7 hour one-way grade 3 commitment before transfer time.',
        combine: 'Katoomba’s formal lookout can be a second day on a two- or three-night mountain stay, but do not combine two steep descents. The longer Wentworth Falls to Leura walk needs its own one-way transport and closure review. Avoid a multi-station same-day circuit from Sydney when the last-mile service or a safe return is uncertain.',
        verify: 'Check Transport for NSW for the exact train and local transfer; NPWS local alerts and the named track page; rain, warnings, sunset, legal parking and trailhead signs. Recheck just before departure because a closure can change during a stay.',
        faq: [
          ['How many nights do I need?', 'Two nights near the selected gateway give one full day and a buffer. A same-day Sydney visit is a narrow upper-lookout plan after you verify both transfers; it is not a sensible default for a descent.'],
          ['Is Wentworth Falls to Leura an easy extension?', 'No. NPWS lists it as 11 km one way, grade 3, and about 5–7 hours before transfers. It needs a separate open-route check, a one-way exit plan and enough daylight. Current linked closures may make it unavailable.'],
          ['What if my planned waterfall track is closed?', 'Do not use a different trail to get around the closure or infer that a connection is open. Stay with a signed, currently open upper viewpoint, visit the village, or move the walk to another day.'],
          ['Do recent rains make the falls safer to visit?', 'They may increase flow while also increasing runoff, slippery surfaces and closure risk. Follow current NPWS warnings and use a formal lookout rather than entering water or a closed descent.']
        ],
        sources: [
          ['https://transportnsw.info/trip', 'Transport for NSW — trip planner'],
          ['https://www.nationalparks.nsw.gov.au/visit-a-park/parks/blue-mountains-national-park/visitor-info', 'NSW National Parks — Blue Mountains visitor information'],
          ['https://www.nationalparks.nsw.gov.au/visit-a-park/parks/blue-mountains-national-park/local-alerts', 'NSW National Parks — current park alerts'],
          ['https://www.nationalparks.nsw.gov.au/things-to-do/walking-tracks/wentworth-falls-to-leura-walk', 'NSW National Parks — Wentworth Falls to Leura walk details']
        ]
      }),
      g({
        slug: 'blackheath-grose-valley', name: 'Blackheath & Grose Valley', motif: 'lookout-to-bushwalk threshold', instrument: 'ridge-register', imageQuery: 'Govetts Leap Blackheath Grose Valley Blue Mountains', imageAlt: 'Grose Valley seen from a lookout near Blackheath',
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12',
        summary: 'A Blackheath-based Grose Valley plan that treats Govetts Leap as a complete formal lookout visit and any descent as a separate remote, closure-dependent undertaking.',
        orientationTitle: 'Separate the lookout from the valley expedition.',
        orientation: 'Blackheath is a useful overnight base for the upper escarpment, not a guarantee that a remote trail is open or easy to reach. Govetts Leap Lookout is the short, formal viewpoint; a path descending into the Grose Valley adds steep grade, distance, water and a much harder exit. On 12 October 2026, NPWS alerts listed closure on the Govetts Leap descent and portions of Rodriguez Pass, with access advice referencing Horse Track from Blackheath. Do not use that dated note as route permission: check the live alerts and the exact track before setting out.',
        interpretation: 'This is a rugged, protected landscape with difficult rescue and limited reliable mobile reception. Stay on signed public tracks, carry out all waste, protect water sources and follow Aboriginal cultural interpretation. Do not leave a track to reach a better photograph, enter a closed section or assume that proximity to a road means a quick exit.',
        access: 'Plan the regional rail leg to Blackheath, then separately verify transport from station to the specific lookout or trailhead and back; taxis and local services are not a guaranteed on-demand shuttle. NPWS describes Govetts Leap as an accessible easy lookout, but the descent tracks are a different grade and may be closed. For any longer walk, follow the current park instructions on registration/trip intention and emergency communication; if the route-specific equipment, daylight or transport is missing, choose the lookout-only plan.',
        sequence: 'Start in Blackheath with the alert page and local forecast open. Visit the formal Govetts Leap platform while visibility is good and use it as the day’s endpoint unless the exact longer route has been checked open. For a track, name its start, turnaround, exit and trip-intention contact, then carry navigation, water and suitable emergency communication; do not improvise a route on a phone signal assumption. Return to town and close the trip plan at the agreed time.',
        boundary: 'Remote Country, water scarcity and rescue complexity require conservative choices. Stay within the signed public access, follow current Traditional Owner and park guidance, and never enter a closure or leave a formed track for a viewpoint.',
        decisions: [
          ['Book two nights in Blackheath', 'A night before and after the chosen day avoids tying a lookout or track to a same-day Sydney train. One night is suitable only for the formal lookout and a verified service window.'],
          ['Make the lookout the default', 'Govetts Leap is a formal endpoint. A descent is optional and proceeds only if its exact track is open, the party has equipment and daylight, and the return is solved.'],
          ['Write the emergency plan', 'For any remote walk, follow current NPWS trip-intention guidance, carry navigation/water/communication, set a turnaround and confirm a local transfer. If one element fails, remain at the signed lookout.']
        ],
        stages: [['Check before leaving town', 'Read live NPWS alerts, fire and weather warnings, the specific track description and Transport for NSW return. Tell an accommodation contact your plan if advised; do not set off on a route named only in an old itinerary.'], ['Use Govetts Leap as a full visit', 'The formal lookout is an appropriate endpoint and the easiest way to read valley scale and cloud. Check on-site access and any short-notice works; do not pass a barrier to turn the viewpoint into a walk.'], ['Proceed only with a complete route contract', 'Verify the start, open status, grade, turnaround, exit, water plan, navigation, emergency communication, daylight and trip-intention requirements. The Govetts Leap descent and Rodriguez Pass closures noted on 12 October 2026 mean a live recheck is essential.'], ['Close with a named return', 'Reverse the planned route before the turnaround and notify the trip-intention contact when safely back. If conditions deteriorate, use the declared retreat path; never substitute an unverified valley exit.']],
        risks: [['Remote rescue and weak signal', 'NPWS warns that mobile reception is unreliable in parts of the park and recommends preparation for remote trips. Carry route-appropriate navigation and emergency communication, and give a responsible contact a clear return time.'], ['Current track closure', 'The 12 October 2026 snapshot listed Govetts Leap descent and some Rodriguez Pass closure sections. Closures can move or change; obey the live alert, any registration directions and trailhead barriers.'], ['Fire, water and exposure', 'Hot, dry or windy conditions can make a remote walk unsafe, and dependable water may not be available along the route. Check warnings, carry sufficient water and turn back while there is still daylight and capacity.']],
        duration: 'Use two nights in Blackheath for an unhurried lookout day and a separate weather window. The formal lookout can fit half a day. Any remote valley walk deserves a full day plus route-specific preparation and should never be scheduled around a tight same-day Sydney return.',
        combine: 'Pair Govetts Leap with Katoomba only as two separate days on a three- or four-night stay, after checking each last-mile transfer. Keep a remote descent independent of another park and all timed transport; if it is closed, substitute the lookout rather than another unverified track.',
        verify: 'Check Transport for NSW, the live Blue Mountains alerts, Govetts Leap Lookout and track pages, fire/weather warnings, water availability, track-intention directions, navigation/communication and sunset. Repeat the check at Blackheath and at the trailhead.',
        faq: [
          ['Can I reach the Grose Valley from Govetts Leap?', 'Some tracks descend from the upper escarpment, but they are not the lookout path and may be closed. Check the exact track, grade, route status and exit before deciding; the formal lookout alone is a complete visit.'],
          ['How many nights are sensible?', 'Two nights in Blackheath give one open day and avoid a rushed same-day regional return. A longer walk needs a full day and a route-specific plan; add nights if conditions or transport narrow the window.'],
          ['Does Govetts Leap have mobile coverage?', 'Do not depend on it. NSW National Parks warns that reception is unreliable in parts of the park. Use appropriate offline navigation and emergency communication, follow current trip-intention advice, and leave your plan with a responsible contact.'],
          ['What should I do if the descent is closed?', 'Stay at the signed lookout or choose another open public area confirmed by NPWS. Do not follow a posted route through a closure, try an informal bypass or assume a nearby track is an equivalent exit.']
        ],
        sources: [
          ['https://transportnsw.info/trip', 'Transport for NSW — trip planner'],
          ['https://www.nationalparks.nsw.gov.au/visit-a-park/parks/blue-mountains-national-park/visitor-info', 'NSW National Parks — remote trip and visitor advice'],
          ['https://www.nationalparks.nsw.gov.au/visit-a-park/parks/blue-mountains-national-park/local-alerts', 'NSW National Parks — current park alerts'],
          ['https://www.nationalparks.nsw.gov.au/things-to-do/lookouts/govetts-leap-lookout', 'NSW National Parks — Govetts Leap Lookout'],
          ['https://www.nationalparks.nsw.gov.au/things-to-do/walking-tracks/govetts-leap-descent', 'NSW National Parks — Govetts Leap descent track and safety information']
        ]
      }),
      g({
        slug: 'royal-national-park-coast', name: 'Royal National Park Coast', motif: 'track-and-tide day', instrument: 'coastline', imageQuery: 'Royal National Park Coast Track New South Wales', imageAlt: 'Cliffs and ocean along the Royal National Park coast',
        summary: 'A coastal national-park day built around the chosen trailhead, legal parking or train access, tide, heat and a credible exit.',
        orientation: 'select one coastal section rather than advertising the full Coast Track as a casual Sydney walk.', access: 'Match the trailhead to train, ferry, booked shuttle or legal parking and confirm that the return service actually operates that day.', sequence: 'Begin early, keep swimming separate from walking, reassess at every exit and finish before heat or darkness narrows choices.', boundary: 'Rock shelves, cliffs and ocean pools can be lethal in swell. Stay out of closed areas and respect park and cultural-site instructions.',
        stages: [['Name both trailheads', 'Write down the start, finish and transport contract before entering the park.'], ['Check sea and fire', 'Compare swell, tide, heat and fire danger with the exposed route.'], ['Walk the chosen section', 'Stay on the formed track and use only open beaches or facilities as rest points.'], ['Take the protected exit', 'Leave through the planned trailhead while the return service and daylight remain reliable.']],
        risks: [['Swell on rock shelves', 'Never approach cliff bases or rock platforms during hazardous surf, regardless of other visitors.'], ['Heat and water', 'Long sections lack reliable water and shade. Carry enough and shorten the route early.'], ['Transport gaps', 'Sparse services can strand a one-way walker. Confirm every connection and fallback.']],
        duration: 'Allow a full day for one meaningful coastal section; overnight planning is required for the full Coast Track.', combine: 'Do not combine with a Blue Mountains hike. A short southern Sydney stop is the only sensible addition.', verify: 'Check park closure, fire danger, tide, swell, temperature, water, trailhead access and return transport.'
      }),
      g({
        slug: 'jervis-bay-booderee', name: 'Jervis Bay & Booderee', motif: 'bay and Country permit', instrument: 'bay-chart', imageQuery: 'Booderee National Park Jervis Bay beach', imageAlt: 'White sand and clear water in Booderee National Park at Jervis Bay',
        summary: 'A bay-and-park visit that separates town beaches from Booderee National Park, with entry, camping, wildlife and Traditional Owner guidance made explicit.',
        orientation: 'choose a Jervis Bay base and one Booderee landscape instead of chasing every white-sand beach.', access: 'Reach the region by a realistic road plan or limited public-transport combination, then use the official park entry and booking system.', sequence: 'Visit the Booderee visitor information point or current online guidance, select one beach or botanic route and leave wildlife undisturbed.', boundary: 'Booderee is jointly managed with the Wreck Bay Aboriginal Community. Follow closures, cultural guidance, camping rules and no-take or marine protections.',
        stages: [['Separate bay from park', 'Identify which authority manages the chosen beach, road, campsite and marine activity.'], ['Confirm entry and booking', 'Resolve park pass, camping or tour requirements before the final drive.'], ['Use one protected landscape', 'Choose an open beach, garden or trail suited to wind, swell and mobility.'], ['Leave no wildlife pressure', 'Pack out waste, keep distance from animals and depart before the road or campsite deadline.']],
        risks: [['Long road return', 'Fatigue after beach time makes the drive dangerous. Stay overnight or share driving.'], ['Marine conditions', 'Clear water can still carry current, swell and cold; use patrolled areas where available.'], ['Wildlife and camping', 'Food storage, fire and campsite rules protect both visitors and animals; verify current restrictions.']],
        duration: 'Two nights make the bay and Booderee useful; a single day from Sydney is mostly transport.', combine: 'Pair with the South Coast as a regional trip, not with a Blue Mountains day.', verify: 'Check Booderee entry and camping, road conditions, fire rules, beach safety, weather and wildlife notices.'
      })
    ]
  }),

  cluster({
    slug: 'brisbane-moreton-bay',
    name: 'Brisbane & Moreton Bay',
    region: 'Queensland',
    band: 'east',
    family: 'river-loop',
    label: 'RIVER / CULTURE / BAY CROSSINGS',
    tagline: 'Use the river as the city line and the ferry as a separate contract.',
    reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12',
    hubIntro: 'Brisbane turns around the bends of the river, while the bay begins a different travel system of ferries, sand tracks and island weather. The city centre, South Bank, inner neighborhoods, Minjerribah and Mulgumpin should not be compressed into one “Brisbane day.” Five chapters separate walkable river loops from island transport and Country-specific guidance.',
    stay: 'Choose a base close to the river crossing or rail line used most often. A central address on the wrong bend can create repeated transfers.',
    transfer: 'Translink joins rail, bus and ferry services, but bay islands add specific terminals, vehicle rules and weather. Confirm the exact operator and landing point.',
    sources: [
      ['https://www.australia.com/en/places/brisbane-and-surrounds/guide-to-brisbane.html', 'Tourism Australia — Brisbane'],
      ['https://visit.brisbane.qld.au/', 'Brisbane Economic Development Agency — visitor guide'],
      ['https://translink.com.au/', 'Translink Queensland — service planning and alerts'],
      ['https://parks.desi.qld.gov.au/parks/minjerribah', 'Queensland Parks — Minjerribah protected areas'],
      ['https://parks.desi.qld.gov.au/parks/gheebulum-kunungai-moreton-island', 'Queensland Parks — Gheebulum Kunungai (Moreton Island)']
    ],
    guides: [
      g({
        slug: 'city-river-south-bank', name: 'City River & South Bank', motif: 'bridge-and-ferry loop', instrument: 'river-loop', imageQuery: 'Brisbane river South Bank skyline', imageAlt: 'Brisbane River and South Bank city skyline',
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12',
        summary: 'A central Brisbane loop that alternates shaded cultural interiors, river crossings and ferry segments instead of tracing every bend on foot.',
        orientation: 'treat each bridge and ferry stop as a choice between river banks, not an obligation to complete a giant circuit.', access: 'Arrive by train, bus or ferry at a station with a confirmed lift and note which bank holds the final transport home.', sequence: 'Cross once for orientation, use one cultural or garden interior, take a short ferry segment and close the loop before afternoon heat.', boundary: 'The river is working transport and flood country. Respect closed boardwalks, cultural interpretation and active commuter space.',
        stages: [['Choose the first bank', 'Set the morning around either the CBD or South Bank and identify the single crossing that adds meaning.'], ['Cool inside', 'Use a gallery, museum or library as a deliberate heat and storm pause.'], ['Ride one river segment', 'Check the ferry route and terminal rather than boarding simply because a vessel arrives.'], ['Exit near rail', 'Finish at the station or busway that avoids another unnecessary river crossing.']],
        risks: [['Heat and storms', 'Shade and indoor fallback are essential in humid or storm-prone weather.'], ['Flood closure', 'Boardwalks and ferry terminals may close after high water; obey barriers.'], ['Event crowds', 'South Bank events change transport demand and pedestrian flows.']],
        duration: 'A full but unhurried day suits one loop and one major cultural interior.', combine: 'Pair with West End or New Farm only if the river transfer remains direct.', verify: 'Check Translink alerts, ferry terminals, riverwalk closures, storm warnings, venue hours and accessibility.'
      }),
      g({
        slug: 'new-farm-fortitude-valley', name: 'New Farm & Fortitude Valley', motif: 'day-to-night neighborhood switch', instrument: 'day-night', imageQuery: 'Brisbane New Farm Park river', imageAlt: 'New Farm Park beside the Brisbane River',
        summary: 'A neighborhood chapter moving from river park and arts space into the Valley’s evening economy with a deliberate late return.',
        orientation: 'use New Farm Park or the Powerhouse as the daylight anchor and Fortitude Valley station as the night transport anchor.', access: 'Reach the river end by ferry or bus, then move inland only along well-used streets and a known service.', sequence: 'Start with park or performance context, eat before nightlife peaks and end at the station or booked pickup rather than wandering between venues.', boundary: 'These are residential and working entertainment districts. Keep noise, photography and alcohol behavior within the norms of each street.',
        stages: [['Land by daylight', 'Use the river stop or bus arrival to establish the park edge and return options.'], ['Choose one cultural room', 'Confirm exhibition or performance access rather than assuming the whole precinct is open.'], ['Move inland before late night', 'Take a clear bus or walking line to the Valley while streets and services are busy.'], ['Leave from a lit node', 'Use the station or a named pickup zone and keep the group together.']],
        risks: [['Late-night safety', 'Plan the final block and transport before drinking or venue dispersal.'], ['River service changes', 'Ferries can be altered by weather or events; retain a bus alternative.'], ['Noise and residents', 'Avoid treating residential lanes as nightlife extensions or photo sets.']],
        duration: 'Use a long afternoon and evening rather than stretching the route across an entire day.', combine: 'It follows a central river day naturally; do not add an island transfer.', verify: 'Confirm ferry or bus status, venue ticketing, event closures, weather and the late journey home.'
      }),
      g({
        slug: 'west-end-cultural-precinct', name: 'West End & Cultural Precinct', motif: 'gallery-to-market weave', instrument: 'weave', imageQuery: 'Brisbane cultural precinct South Bank Queensland Art Gallery', imageAlt: 'Brisbane cultural precinct beside the river',
        summary: 'A culture-and-food route joining major institutions with West End while keeping exhibition time, market calendars and residential streets distinct.',
        orientation: 'anchor the day in one major institution and use Boundary Street as a separate neighborhood chapter.', access: 'Arrive at South Brisbane station or the busway and verify the step-free entrance serving the chosen venue.', sequence: 'Give the museum or gallery a real attention block, pause by the river, then move to one West End food or market line.', boundary: 'Do not turn cultural collections, migrant businesses or street life into generic “colour.” Follow museum, market and photography rules.',
        stages: [['Book the attention block', 'Select one institution and exhibition rather than rushing every building.'], ['Pause at the river seam', 'Use the public edge to reset before moving into the neighborhood.'], ['Read one commercial street', 'Choose a short food or shop sequence without blocking businesses or photographing people without consent.'], ['Return through South Brisbane', 'Use the known rail or bus node before the evening crowd changes.']],
        risks: [['Exhibition closure', 'Temporary galleries and timed programs change; check the institution directly.'], ['Market calendar', 'A market mentioned in an old guide may not operate that day or location.'], ['Heat between districts', 'The walk is exposed in parts; use buses or shorten it when necessary.']],
        duration: 'Allow a full day for one substantial cultural visit and an unhurried neighborhood meal.', combine: 'It pairs with the city river loop but deserves its own museum time.', verify: 'Check exhibition access, market date, public transport, weather, accessibility and photography policy.'
      }),
      g({
        slug: 'minjerribah-north-stradbroke', name: 'Minjerribah / North Stradbroke Island', motif: 'island ferry and headland day', instrument: 'island-ticket', imageQuery: 'North Stradbroke Island Minjerribah Point Lookout', imageAlt: 'Coastal headland on Minjerribah North Stradbroke Island',
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12',
        summary: 'An island route that names mainland terminal, passenger or vehicle ferry, island bus and Quandamooka Country responsibilities before the beach.',
        orientation: 'separate Dunwich arrival, Point Lookout headland and beach choices instead of presenting the island as one stop.', access: 'Book or confirm the correct ferry from the correct Cleveland terminal and know whether the fare includes a vehicle, passenger or connecting bus.', sequence: 'Land at Dunwich, follow a realistic bus or road circuit, use one formal headland walk and return with a protected ferry margin.', boundary: 'Minjerribah is Quandamooka Country. Follow cultural guidance, dune and wildlife protections, and local restrictions on driving and camping.',
        stages: [['Name the terminal', 'Distinguish passenger and vehicle facilities and arrive before the operator’s check-in cutoff.'], ['Connect from Dunwich', 'Confirm the island bus or legal vehicle route before leaving the landing.'], ['Use one headland and beach', 'Choose patrolled swimming or a formal walk according to swell, wind and ability.'], ['Rejoin the booked ferry', 'Leave enough bus and traffic margin for the specific return sailing.']],
        risks: [['Missed ferry', 'Island buses and ferries do not wait for an optimistic itinerary; protect the return.'], ['Surf and cliffs', 'Use patrolled beaches and formal headland paths, obeying closures.'], ['Wildlife pressure', 'Keep distance from whales, dolphins, turtles and kangaroos and never feed animals.']],
        duration: 'One full day is the minimum; two nights allow weather and island pacing to work.', combine: 'Keep it separate from Mulgumpin and from a full Brisbane city day.', verify: 'Check ferry terminal, booking, island bus, Quandamooka guidance, beach patrol, fire and weather.'
      }),
      g({
        slug: 'mulgumpin-moreton-island', name: 'Mulgumpin / Moreton Island', motif: 'sand-island expedition', instrument: 'sand-manifest', imageQuery: 'Moreton Island Mulgumpin Queensland beach', imageAlt: 'Sand coast and clear water on Mulgumpin Moreton Island',
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12',
        summary: 'A sand-island expedition requiring a named ferry or licensed tour, capable vehicle planning, camping controls and honest weather limits.',
        orientation: 'treat the crossing, sand roads, campsite or resort base and marine activities as four separate contracts.', access: 'Use a booked ferry or reputable operator and confirm passenger, vehicle, equipment and check-in rules before reaching the mainland terminal.', sequence: 'Land, establish the base, attempt only activities supported by conditions and equipment, and return before tide or vehicle pressure compounds.', boundary: 'Mulgumpin is Quandamooka Country and protected habitat. Use designated roads and camps, observe permits and keep dunes and wildlife intact.',
        stages: [['Complete the manifest', 'Match passengers, vehicle, recovery gear, camping and activity bookings to the exact operator.'], ['Read the landing', 'Confirm tide, beach access and the legal route from the barge or resort jetty.'], ['Choose one island objective', 'Make snorkeling, lighthouse, dune or camping the main chapter rather than stacking incompatible distances.'], ['Return with reserve', 'Keep fuel, tide, weather and check-in margin for the crossing back.']],
        risks: [['Sand driving', 'Only suitable vehicles and experienced drivers should use open designated sand routes; recovery is not guaranteed.'], ['Remote conditions', 'Water, fuel, communications and medical support are limited. Carry the required supplies.'], ['Marine and fire rules', 'Weather, fire bans and protected-zone rules can cancel the planned activity.']],
        duration: 'An overnight is strongly preferable; a day trip should use one operator and one objective.', combine: 'Do not combine with Minjerribah. Pair only with a Brisbane buffer night before or after.', verify: 'Check ferry, vehicle and camping permits, tide, beach access, fire ban, marine forecast and emergency equipment.'
      })
    ]
  }),

  cluster({
    slug: 'gold-coast-scenic-rim',
    name: 'Gold Coast & Scenic Rim',
    region: 'Queensland',
    band: 'east',
    family: 'surf-to-range',
    reviewDate: '12 October 2026',
    reviewIsoDate: '2026-10-12',
    label: 'SURF / LIGHT RAIL / HINTERLAND',
    tagline: 'Choose a beach station, a southern bus leg, or a separate mountain base.',
    hubIntro: 'The Gold Coast is not one beach with five nearby add-ons. Its north and central waterfront follows Translink’s L1 corridor; the southern border coast needs a separate bus or road plan, while Springbrook and Lamington require their own hinterland access and weather window. Start with the first useful overnight and the exact station or park entrance, then choose one coastal chapter per day. The schematic separates those planning systems without drawing a map or promising a connection.',
    stay: 'For a rail-led coast stay, compare Surfers Paradise around Cavill Avenue with Broadbeach around its own L1 stops; choose by the first beach access, venue and late return rather than a suburb label. Burleigh now has an L1 terminus, but a mountain trailhead remains a separate road or operator leg. Use a Coolangatta night when the southern coast or airport timing is the actual purpose. Move to a hinterland base only when an early park start justifies the second check-in.',
    transfer: 'Translink currently lists L1 between Helensvale and Burleigh Heads, including Surfers Paradise and Broadbeach stations. Continue south of Burleigh only through a date-specific bus or road plan; do not infer a tram to Coolangatta or a last-mile park connection. Enter the exact beach access, stop or park gateway in the journey planner. On 12 October 2026, Translink also listed selected evening replacement buses on the northern L1 section; check live updates again before travel.',
    diagramAlt: 'Not-to-scale Gold Coast trip-planning schematic separating the Helensvale–Burleigh Heads L1 station spine, a separately planned southern-coast leg to Coolangatta, and independent road or operator access to Springbrook and Lamington; no distances, bearings, transfer or service promise is shown.',
    diagramCaption: 'TripDistill original planning schematic, not a map or timetable. The solid L1 spine reflects the corridor listed by Translink at the 12 October 2026 review; the dashed southern and hinterland branches are planning choices, not routes or guaranteed services. Verify the exact stop, park gateway, alerts and return on the travel date.',
    tripShapes: [
      { title: '3 nights · urban coast', copy: 'Choose one rail-linked base in Surfers Paradise or Broadbeach. Give one day to the chosen beach centre and a confirmed indoor break; use a second day for Burleigh only after checking the exact L1 stop, park entrance and current track status. Keep the third day flexible for weather, a slower beach visit or the return. Do not add Coolangatta and a mountain park as casual day trips from the same base.' },
      { title: '5 nights · coast in two sections', copy: 'Use a central rail-linked base for Surfers Paradise, Broadbeach and Burleigh, then move south only if Coolangatta is a priority and a current bus or road connection fits. A one-night southern move can protect a very early airport departure, but check luggage, check-in and return logistics before booking two stays. Keep beach swimming conditional on patrol and surf advice.' },
      { title: '7 nights · one hinterland window', copy: 'Keep the urban coast in one base, select either Springbrook or Lamington for a separate park block, and reserve a buffer night near the coast before departure if the park road or weather could change the return. The seven nights are an editorial planning shape, not a guarantee that every route is open or that both parks fit. Add the second park only by extending the stay and changing base deliberately.' }
    ],
    sources: [
      ['https://www.australia.com/en/places/gold-coast-and-surrounds/guide-to-the-gold-coast.html', 'Tourism Australia — Gold Coast'],
      ['https://www.destinationgoldcoast.com/', 'Destination Gold Coast — official visitor guide'],
      ['https://translink.com.au/', 'Translink Queensland — Gold Coast services'],
      ['https://jp.translink.com.au/plan-your-journey/timetables/tram/t/l1', 'Translink — L1 Helensvale / Burleigh Heads tram timetable'],
      ['https://translink.com.au/updates/1171096', 'Translink — October 2026 evening L1 replacement-bus notice'],
      ['https://parks.qld.gov.au/parks/burleigh-head', 'Queensland Parks — Burleigh Head National Park visitor information and park alerts'],
      ['https://beachsafe.org.au/', 'Surf Life Saving Australia — Beachsafe patrol and hazard information'],
      ['https://www.bom.gov.au/qld/forecasts/gold-coast.shtml', 'Bureau of Meteorology — Gold Coast forecast'],
      ['https://parks.desi.qld.gov.au/parks/springbrook', 'Queensland Parks — Springbrook National Park'],
      ['https://parks.desi.qld.gov.au/parks/lamington', 'Queensland Parks — Lamington National Park']
    ],
    guides: [
      g({
        slug: 'surfers-paradise-broadbeach', name: 'Surfers Paradise & Broadbeach', motif: 'light-rail beach corridor', instrument: 'tramline', imageQuery: 'Surfers Paradise Broadbeach Gold Coast skyline beach', imageAlt: 'Gold Coast skyline and beach near Surfers Paradise',
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12',
        summary: 'A rail-led urban coast day that chooses the L1 station for the actual beach, venue and return; bathing, heat relief and evening plans stay separate decisions.',
        decisions: [
          ['Base', 'Surfers Paradise centers on Cavill Avenue; Broadbeach is a second L1 center. Compare the exact hotel entrance and the stop that serves your first day.'],
          ['Water', 'Treat a beach walk and a swim as separate choices. Use the live patrol and hazard advice for the exact beach before entering the water.'],
          ['Evening', 'Pick one close-by meal or venue after the beach. A timed event is a poor fit after an uncertain transfer or a late service change.']
        ],
        orientationTitle: 'Choose the stop before the sand.',
        orientation: 'Surfers Paradise and Broadbeach are two centers on one useful light-rail spine, but their station exits, beach approaches and evening destinations are not interchangeable. Choose one as the day’s anchor. The first decision is not “which beach is best”; it is which public access, patrol point and return stop suit the group on this date.',
        access: 'Translink currently lists L1 from Helensvale to Burleigh Heads, with Surfers Paradise, Cavill Avenue, Broadbeach North and Broadbeach South among its stations. Use the current planner for the exact station-to-beach walk and any transfer from the airport or accommodation. A station name does not prove that the path is step-free, shaded or the closest entrance to your chosen venue.',
        sequence: 'Use one morning shoreline, pause indoors through the hottest or wettest part of the day, and move once to the other center only if the service and energy budget still work. Decide whether dinner is in Surfers Paradise or Broadbeach before leaving the beach; keep the return on the same verified transit spine rather than adding a distant reservation.',
        boundary: 'The sand, surf lifesaving zone, foreshore path and private tower entries are different spaces. Follow local signs, keep clear of patrol operations, respect residents and use only a beach area that current lifeguard advice supports for swimming. If patrol flags are absent, warnings are active or conditions change, make the water activity a no-swim plan rather than treating a crowd or calm surface as permission.',
        fieldLens: {
          label: 'A day in two centers',
          title: 'Do not turn a tram stop into a beach guarantee.',
          copy: 'The L1 makes a two-center day possible, but it cannot decide the beach access, surf condition, venue opening or last return for you. Keep each decision attached to its own current authority.',
          notes: [
            ['Station to entrance', 'Enter the hotel, beach access or venue as the destination in Translink’s planner; do not plan from a suburb label or assume every crossing is accessible.'],
            ['Beach to water', 'Check Beachsafe, the local flags and the lifesaver before swimming. If the advice or patrol status changes, use the indoor choice and keep the shoreline as a land visit.']
          ]
        },
        stages: [
          ['Set the anchor', 'Choose Surfers Paradise or Broadbeach by the actual L1 stop, hotel entrance and public beach access. At Cavill Avenue, Broadbeach North or Broadbeach South, confirm the walking leg instead of assuming that the station name is the beach gate.'],
          ['Make the water decision', 'Read the live Beachsafe information, local flags, wind, swell and UV for the named beach. Swim only where lifesavers direct; otherwise keep the visit to a signed public foreshore and do not follow others into unpatrolled water.'],
          ['Protect the middle of the day', 'Use a confirmed indoor meal or venue around the chosen center when heat, rain or fatigue makes an exposed walk a poor trade. Move to the second center only if the current L1 service, walking distance and remaining daylight still support it.'],
          ['Close near a known stop', 'Choose the evening endpoint before leaving the beach and check the live timetable and service notices. If the desired service is changed or the group is tired, stay near the current center and drop the distant event rather than racing across town.']
        ],
        risks: [
          ['Water looks calmer than it is', 'A calm patch, clear day or nearby swimmer does not identify a safe swimming area. Use the exact beach’s current patrol and hazard advice; when the guidance is unclear, keep the visit on land.'],
          ['The station is not the access path', 'A station may still leave a walk, crossing, stairs or exposure that does not suit the group. Check the exact route and access details before choosing the base or promising a step-free beach day.'],
          ['An evening plan depends on a service', 'Track works, event crowds and late dispersal can change the return. Keep the dinner or performance flexible, and verify both directions instead of relying on a daytime trip result.']
        ],
        duration: 'Treat this as one full coast day, not a stopwatch itinerary. A three-night urban stay can make room for an arrival day, one beach-center day and a separate weather or Burleigh choice; adding Coolangatta or a park requires more travel margin and a changed plan.',
        combine: 'Pair Surfers Paradise and Broadbeach only when the first beach, midday break and return remain on the L1 spine. Add a short Burleigh visit on a separate day with its own park and beach checks. Do not append Springbrook, Lamington or Coolangatta as though they were nearby stops.',
        verify: 'Before departure, check Translink’s L1 timetable, trip planner and service updates; the 12 October 2026 review found selected October evening replacement buses north of the beach corridor. Recheck the current notice, Beachsafe patrol and hazards, Bureau of Meteorology warnings and any venue or event conditions.',
        faq: [
          ['Which base fits a first urban coast stay?', 'Choose Surfers Paradise when Cavill Avenue, its central beachfront or nearby evening plan is the first priority; choose Broadbeach when its L1 stops and your selected southern venue are the better match. Compare exact entrances, luggage access and late returns rather than treating the neighborhoods as one hotel zone.'],
          ['Can I swim whenever I visit the beach?', 'No. A beach day can still be a no-swim visit. Use Beachsafe and the local flags or lifesaver advice for the named beach, then change to a land-only plan if patrol or conditions do not support entering the water.'],
          ['Is the L1 a direct airport or Coolangatta connection?', 'Do not infer either connection from the L1 line. It currently lists Helensvale to Burleigh Heads; use Translink’s trip planner with your actual airport, accommodation or southern-coast endpoint for the travel date.'],
          ['What is a useful rain or heat alternative?', 'Keep the same base and replace the exposed beach block with a confirmed indoor meal or venue. Avoid building a timed event around a cross-town transfer until both the service and walking connection are checked.']
        ]
      }),
      g({
        slug: 'burleigh-heads-tallebudgera', name: 'Burleigh Heads & Tallebudgera', motif: 'headland and creek edge', instrument: 'headland', imageQuery: 'Burleigh Head National Park Tallebudgera Creek', imageAlt: 'Burleigh Head and the coast beside Tallebudgera Creek',
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12',
        summary: 'A Burleigh Head track-and-water decision: use the current L1 terminus, choose an open formed track, then decide separately whether ocean or creek conditions support water time.',
        decisions: [
          ['Gateway', 'The L1 now lists Burleigh Heads. Choose the park’s northern or southern entrance in the planner; a station destination is not the same as the exact trailhead.'],
          ['Track', 'Queensland Parks lists wheelchair-assisted access on Oceanview and no wheelchair access on the other park tracks. Check the current map, closure signs and the group’s needs.'],
          ['Water', 'Burleigh’s surf beach and Tallebudgera Creek have different exposures. Treat each as a separate, current Beachsafe and local-signage decision.']
        ],
        orientationTitle: 'A headland is a gate, not a shortcut.',
        orientation: 'Burleigh Head divides an urban beach, a protected rocky headland and the Tallebudgera Creek edge. Those spaces need different access and water checks. The park is an excursion in its own right; a creek stop is an optional second chapter only if the transport, ability and live conditions still fit.',
        access: 'Translink lists the L1 terminus at Burleigh Heads, but use the exact Queensland Parks entrance or trailhead as the journey destination and confirm the last walking leg. The park’s northern access is via Goodwin Terrace and its southern access is near Tallebudgera Creek. Queensland Parks says Echo Beach access is by designated stairs; Oceanview offers wheelchair-assisted access, while the other tracks are not wheelchair-accessible. Check park alerts and the current map before setting out.',
        sequence: 'Arrive with water, sun cover and a return plan. Read the park alerts and trail map before choosing a north-to-south or short out-and-back section. Walk only formed open paths in daylight, then finish at the planned entrance or station. Add the creek or a patrolled beach only after the walk, access route and separate water conditions have all been resolved.',
        boundary: 'Burleigh Head National Park has cultural significance to Traditional Owners and protects rainforest, foreshore and wildlife. Follow the park’s cultural interpretation and signs without treating unmarked places as visitor access. Keep to formed trails: the cliff-line boulder fields, including Cannon Rock, and steep slopes below Oceanview are restricted. Do not scramble over rocks, enter an unpatrolled water area or let a scenic photograph outrank a closure sign.',
        fieldLens: {
          label: 'The track is the itinerary hinge',
          title: 'A closed section is not a beach shortcut.',
          copy: 'Queensland Parks warns that a high-risk portion of Oceanview can close during conditions such as high wind, heavy rain, low temperature or fire. Check the live alert and signs; if a loop no longer works, end the park walk rather than inventing a route around the headland.',
          notes: [
            ['Ability and surface', 'Use the official map and access page to match track grade, stairs and assistance to the person walking. Do not describe a track as step-free when the authority does not.'],
            ['Water is a separate choice', 'A sheltered-looking creek edge is not a safety guarantee. Check the exact beach or water advice and follow patrol instructions before entering.']
          ]
        },
        stages: [
          ['Choose the entrance', 'Set either the Goodwin Terrace northern access or the southern entrance near Tallebudgera Creek as the exact destination. If arriving on L1, check the remaining walk and return stop before leaving the station; if driving, verify the route and legal parking rather than improvising roadside access.'],
          ['Read the park before walking', 'Open Queensland Parks’ Burleigh Head alerts, map and current safety guidance. Select an open formed track that fits the group, daylight and ability. If a boulder-fall warning or closure affects the desired section, remove that leg from the plan.'],
          ['Keep the headland on the track', 'Walk the chosen Oceanview or rainforest section without entering the restricted boulder fields, scrambling below the track or using Echo Beach stairs unless they are the planned access. Stop at the declared turning point and keep enough energy for the same entrance or an already checked exit.'],
          ['Decide on water after the walk', 'Compare the ocean beach and Tallebudgera Creek as separate destinations. Use Beachsafe and local signs or patrol advice for the exact area; if the condition, access, current or boat movement is unsuitable, finish with a land-side meal and the planned transit return.']
        ],
        risks: [
          ['Weather closes the route', 'Queensland Parks identifies a high-risk Oceanview section that can close for conditions including high wind, heavy rain, low temperature or fire. Confirm the live notice and obey signs; do not continue through restricted ground to preserve a loop.'],
          ['A creek is not a sheltered promise', 'Creek, ocean surf and headland rocks present different hazards. Check current local guidance for the selected water entry and do not substitute a scenic view for a patrol or safe access point.'],
          ['The last mile is easy to misread', 'An L1 station, park entrance and beach are separate nodes. Enter the exact entrance in the trip planner and preserve daylight and return margin; a named suburb does not confirm parking, accessible paths or service frequency.']
        ],
        duration: 'For an editorial day plan, allow a substantial half-day for one park section, pauses and the return, then add a separate water or meal block only if conditions permit. One nearby night helps an early start; use a central rail base if this is one day among several coast chapters.',
        combine: 'Pair the headland with one Burleigh town or creek choice, not Springbrook or Lamington. The mountain parks need a separate road or operator plan and a different weather decision. If the track closes, a short public foreshore visit is a complete substitute; the closed trail is not an invitation to cross the headland rocks.',
        verify: 'Check Queensland Parks’ Burleigh Head alerts, the map and access guidance; Translink’s current L1 plan and service notices; Beachsafe for the selected beach; and BOM warnings. The park source showed no alert on the 12 October 2026 review, but that snapshot is not a future opening guarantee.',
        faq: [
          ['Does the L1 reach Burleigh Heads?', 'Translink’s current L1 timetable lists Burleigh Heads station as its southern endpoint. Use the date-specific planner from that stop to the park entrance you intend to use; the station and trailhead are not interchangeable.'],
          ['Is the headland track wheelchair-accessible?', 'Queensland Parks describes wheelchair-assisted access on Oceanview and says its other park tracks are not wheelchair-accessible. Check the current track map and support requirements with the park authority before planning around a particular section.'],
          ['Can I always complete an Oceanview circuit?', 'No. The authority warns that a higher-risk part can close in certain weather and fire conditions and may have live closures. Follow the alert and signs; shorten the visit or stay outside the closed area instead of seeking a rock or shoreline bypass.'],
          ['Should I swim at the creek after the walk?', 'Only if the exact access point and current local advice support it. Creek and surf risks differ; consult Beachsafe and signs or lifesavers, and make a land-only visit when conditions or access are unclear.']
        ]
      }),
      g({
        slug: 'coolangatta-snapper-rocks', name: 'Coolangatta & Snapper Rocks', motif: 'border coast and surf watch', instrument: 'surf-log', imageQuery: 'Snapper Rocks Coolangatta Queensland surf coast', imageAlt: 'Snapper Rocks and the Coolangatta coastline',
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12',
        summary: 'A southern coast day that separates Point Danger’s land views, Snapper Rocks’ surf and a patrolled beach, with a dedicated bus or road return beyond the L1 terminus.',
        decisions: [
          ['Base', 'Stay north for a rail-led Surfers/Broadbeach trip; choose Coolangatta for the border coast or airport timing, after checking the exact terminal-to-hotel leg.'],
          ['Surf or swim', 'Watch Snapper Rocks from a formal public viewpoint. Choose any swim only from a beach with current patrol advice and flags.'],
          ['Return', 'Plan a date-specific bus or road leg: Translink lists Burleigh Heads, not Coolangatta, as the L1 endpoint.']
        ],
        orientationTitle: 'Watch the break; choose the water elsewhere.',
        orientation: 'At the southern end, Point Danger is the land reference, Snapper Rocks is a surf setting and a patrolled beach is a separate swimming decision. Treating those as one attraction invites an unsafe shortcut. This guide builds a land-first sequence and lets the visitor choose whether current conditions support any water time.',
        access: 'The current Translink L1 list ends at Burleigh Heads, so Coolangatta needs a separate date-specific bus, road or airport-to-hotel plan. Enter Point Danger, Snapper Rocks, the chosen beach and the actual Gold Coast Airport terminal separately in the planner; a suburb name is not a confirmed stop or a through service. Check the Queensland–New South Wales time difference when an itinerary crosses into Tweed Heads during New South Wales daylight saving.',
        sequence: 'Use Point Danger to orient on land, then choose either a signed open coastal path segment or one named beach area. Watch the surf from a formal viewpoint and do not scramble across rock shelves. If the beach patrol and conditions permit, add a swim at a designated patrolled area; otherwise keep the whole visit land-based and finish near the bus or road return you checked.',
        boundary: 'Snapper Rocks is a surf break, not a visitor swimming instruction. Give surfers, lifesavers and any event operation room; obey barriers, coastal signs and local cultural interpretation. A dry rock platform can still be reached by swell. Stay on formed paths and do not enter the water because another person appears confident.',
        fieldLens: {
          label: 'A border coast has two clocks',
          title: 'Make the transport day part of the route.',
          copy: 'The southern coast can feel close on a map while its bus or road leg changes the shape of a city day. Add the airport, hotel and any cross-border destination as actual planner endpoints before fixing a meal or departure.',
          notes: [
            ['L1 limit', 'Translink’s current line listing runs Helensvale to Burleigh Heads. Plan the leg beyond Burleigh separately and verify the return in the same search.'],
            ['State time', 'Queensland and New South Wales do not always share the same clock. If crossing into Tweed Heads during NSW daylight saving, check local times for every connection and booking.']
          ]
        },
        stages: [
          ['Name the southern endpoint', 'Start with your real base, the Gold Coast Airport terminal or the actual northern transfer, then enter Point Danger and the chosen return stop in Translink’s planner. The L1 line ends at Burleigh Heads in the current listing; do not leave the southern leg as “nearby.”'],
          ['Orient at Point Danger', 'Use the public headland outlook as a land-based read of the coastline. Check weather and any local signs before taking a signed path, and leave time to return by the same verified access if wind, rain or visibility changes.'],
          ['Choose one coast section', 'Watch Snapper Rocks from a formal public viewing point, then decide whether a marked path to Rainbow Bay or Greenmount fits the group. Do not step onto boulder shelves or enter the surf break; select a patrolled swimming beach only if the current flags and lifesaver advice support it.'],
          ['Close before the transfer', 'Finish near the stop or parking location already chosen and recheck service updates. If the group swims, attends a competition or crosses into Tweed Heads, protect the return and account for local time before booking a second activity.']
        ],
        risks: [
          ['Surf mistaken for a swimming beach', 'A famous break and experienced surfers are not evidence that the water is safe for visitors. Use Beachsafe and local patrol instructions for the exact beach; make the visit land-only whenever guidance is absent or unsuitable.'],
          ['Swell reaches the rocks', 'Rock shelves and cliff edges can be exposed to sudden wash even when they look dry. Remain behind barriers on formed paths and do not use a wave-washed platform as a viewpoint.'],
          ['The return crosses a state line or service gap', 'The L1 endpoint is north of Coolangatta, and NSW may observe daylight saving while Queensland does not. Verify each bus, drive, airport leg and clock for the date; leave margin instead of assuming a seamless connection.']
        ],
        duration: 'Use a half day for Point Danger and one selected coast section only when both the outward and return legs fit. A full day is more realistic for a beach stop, meal or airport-area stay. An overnight near Coolangatta is useful when the southern coast is the main purpose; otherwise avoid a hurried border excursion between rail-led city days.',
        combine: 'Pair Coolangatta with Burleigh only as a dedicated southern-coast day after checking the L1-to-bus or road handoff. Do not add Springbrook or Lamington; their mountain access and weather checks require a separate base and daylight plan.',
        verify: 'Check Translink’s planner and service updates for the Burleigh-to-Coolangatta leg, Beachsafe patrol and hazards, the Bureau of Meteorology’s local forecast, any event or competition notices, parking restrictions and local time if crossing into New South Wales.',
        faq: [
          ['Does the tram reach Snapper Rocks?', 'Translink currently lists L1 from Helensvale to Burleigh Heads. It does not show a through tram to Coolangatta, so plan and confirm the southern bus, road or airport connection separately.'],
          ['Can I swim at Snapper Rocks?', 'This guide treats Snapper as a surf-viewing location, not a swimming recommendation. Check the chosen beach on Beachsafe and follow the local flags and lifesaver advice; if conditions do not support swimming, remain on land.'],
          ['How long should I stay?', 'A half day can suit a headland view and one coast section if the return service fits. Use a full day or a nearby overnight when adding an airport transfer, meal or multiple beach areas; keep the trip shape conditional on current transport and weather.'],
          ['Do I need to change my watch near Tweed Heads?', 'When New South Wales observes daylight saving, it may be one hour ahead of Queensland. If crossing the border, check the local time shown for every bus, booking or flight rather than relying on a single zone.']
        ]
      }),
      g({
        slug: 'springbrook-national-park', name: 'Springbrook National Park', motif: 'plateau waterfall circuit', instrument: 'rain-gauge', imageQuery: 'Springbrook National Park waterfall Queensland', imageAlt: 'Rainforest waterfall in Springbrook National Park',
        summary: 'A plateau rainforest day whose winding road, waterfall tracks, leeches, storm risk and Natural Bridge access are planned before departure.',
        orientation: 'choose one Springbrook plateau sector and one track rather than linking every lookout by optimistic driving.', access: 'Use a capable driver, legal parking or an operator familiar with mountain roads; public transport does not solve the park circuit.', sequence: 'Drive in daylight, walk the most weather-sensitive track first, use formal lookouts and descend before fog or storm reduces road visibility.', boundary: 'Stay on tracks, avoid entering waterways or glow-worm habitat, and follow World Heritage and cultural-site controls.',
        stages: [['Check the plateau weather', 'Compare coast and mountain forecasts, road alerts and fire danger before climbing.'], ['Park at the named trailhead', 'Do not improvise roadside access on narrow bends.'], ['Walk one complete circuit', 'Carry water and rain protection and turn around at the declared time.'], ['Descend with visibility', 'Leave before darkness, heavy rain or fog makes the winding return harder.']],
        risks: [['Mountain road', 'Narrow wet roads and wildlife demand slow daylight driving.'], ['Storm and waterfall edges', 'Flash water, slippery rock and treefall can close tracks quickly.'], ['Leeches and biosecurity', 'Wear suitable clothing, clean footwear and stay out of fragile off-track areas.']],
        duration: 'Use a full day from the coast and select one plateau cluster.', combine: 'Do not combine with Lamington; a short coast meal is the only reasonable addition.', verify: 'Check Queensland Parks alerts, road closure, storm, fire danger, track grade, sunset and fuel.'
      }),
      g({
        slug: 'lamington-national-park', name: 'Lamington National Park', motif: 'rainforest trail register', instrument: 'canopy-register', imageQuery: 'Lamington National Park rainforest Queensland', imageAlt: 'Dense subtropical rainforest in Lamington National Park',
        summary: 'A high-country rainforest visit separating Binna Burra and Green Mountains gateways, trail grades and remote-walk obligations.',
        orientation: 'select one gateway before leaving the coast because the two major sections are not a quick internal transfer.', access: 'Drive or use an appropriate operator to the chosen gateway, confirming road access, parking and accommodation status.', sequence: 'Begin at the visitor or trailhead information point, take one ability-matched circuit and finish before mountain weather or road fatigue builds.', boundary: 'World Heritage rainforest is vulnerable to disease, erosion and wildlife pressure. Clean footwear, stay on track and never feed animals.',
        stages: [['Choose one gateway', 'Commit to Binna Burra or Green Mountains and discard the other from the same-day plan.'], ['Register the circuit', 'Read grade, distance, water and closure information at the trailhead.'], ['Walk below the canopy', 'Keep pace conservative and use signed junctions rather than off-track shortcuts.'], ['Close before the descent', 'Return to the vehicle with daylight and driver attention in reserve.']],
        risks: [['Gateway confusion', 'The park name does not mean entrances connect easily; route to the exact trailhead.'], ['Treefall and storm', 'Wind and saturated ground can close tracks without much warning.'], ['Remote trail', 'Long circuits need navigation, water and emergency planning beyond a casual rainforest stroll.']],
        duration: 'A full day suits one short-to-medium circuit; stay overnight for longer walks.', combine: 'Keep Lamington independent of Springbrook and the urban beach corridor.', verify: 'Check gateway road, park alerts, track grade, fire or storm warnings, water and daylight.'
      })
    ]
  })
];
