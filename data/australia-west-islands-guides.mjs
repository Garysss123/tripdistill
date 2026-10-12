import { australiaGuide as g, defineAustraliaCluster as cluster } from './australia-guide-builder.mjs';

export const australiaWestIslandClusters = [
  cluster({
    slug: 'perth-fremantle-rottnest',
    name: 'Perth, Fremantle & Rottnest',
    region: 'Western Australia',
    band: 'west',
    family: 'indian-ocean-sunset-grid',
    reviewDate: '10 October 2026',
    reviewIsoDate: '2026-10-10',
    label: 'RIVER / PORT / INDIAN OCEAN',
    tagline: 'Build separate days around the river city, port rail line and island ferry.',
    hubIntro: 'Perth / Boorloo, Fremantle / Walyalup and Wadjemup / Rottnest sit on one metropolitan map but make different days. The city centre links Perth Station, the Cultural Centre and Elizabeth Quay; the Fremantle Line reaches a port town whose prison, shipwreck museum and working harbour each deserve a choice; the island starts at a specific ferry terminal and ends at its boarding gate. Choose one system at a time, then give Kings Park or the Cottesloe / Scarborough coast its own day.',
    stay: 'Choose central Perth for Perth Station, the Cultural Centre and Elizabeth Quay; choose Fremantle for the port town and a Victoria Quay departure. An island night removes the same-day ferry squeeze but adds a lodging booking and baggage plan. Check which mainland terminal your ferry ticket names before selecting a hotel.',
    transfer: 'Use Transperth trains and buses for the Perth–Fremantle corridor, but check current service alerts and the last useful return. The Rottnest Island Authority says few cars are permitted; visitors generally get around on foot, by bicycle or island bus, with private transfer services also available. First reach the ticketed mainland terminal. Ferry travel times, check-in, baggage conditions and cancellations depend on terminal, operator, date and weather.',
    tripShapes: [
      { title: 'Two days · city plus port', copy: 'Sleep in central Perth. Give one day to Perth Station → WA Museum Boola Bardip / Perth Cultural Centre → Elizabeth Quay and the Swan River foreshore. Give a second day to the Fremantle Line, then choose Fremantle Prison or the WA Shipwrecks Museum before walking the West End and fishing-harbour public edge. This suits rail-first visitors and keeps two distinct indoor anchors from competing for one afternoon.' },
      { title: 'Three days · add the island', copy: 'Keep the city and Fremantle days separate, then make Rottnest a full ferry day. Select the mainland terminal before buying accommodation or arranging the rail/bus leg; compare the operator’s departure times, check-in and baggage terms. The island day suits confident cyclists who can manage exposure and wind, or visitors willing to use the bus and stay near the settlement. If the ferry is weather-affected, use a refundable mainland day instead of assuming an onward connection.' },
      { title: 'Four days · heat, mobility or slow pace', copy: 'Split the city core and museum, add Kings Park or a coast district as a separate half/full day, keep Fremantle unhurried, and reserve Rottnest for a forecast and ferry check. This suits families, mobility-sensitive plans and travellers who want an indoor alternative during heat or rain. A missed ferry day can become a Fremantle museum/heritage day; do not try to recover the island by compressing it into the port visit.' }
    ],
    faq: [
      ['How many days should I plan for Perth, Fremantle and Rottnest?', 'Three days is a workable minimum if city, Fremantle and Rottnest each receive a separate day. Four days gives room for a weather buffer, Kings Park or a slower museum visit; one-day visitors should choose either the city core or Fremantle rather than treating the island as a quick add-on.'],
      ['Should I stay in Perth or Fremantle?', 'Choose central Perth for the city rail grid, Cultural Centre and Elizabeth Quay. Choose Fremantle for its port streets and a Victoria Quay ferry departure. For another Rottnest terminal, compare the full door-to-terminal journey and check-in against the hotel before booking.'],
      ['Can I combine Fremantle and Rottnest in one day?', 'Only as a narrow ferry-led plan, not as a complete Fremantle visit. The crossing, terminal check-in, island return cutoff and the port town’s separate heritage interiors consume the day. If the prison or museum matters, give Fremantle its own day.'],
      ['What changes the plan most quickly?', 'Ferry timetables and cancellations, Transperth disruptions, event closures, museum bookings, heat, wind and surf. Recheck the named operator and venue on the day; choose a mainland museum or short city route when exposure or marine conditions make the island plan unsuitable.']
    ],
    sources: [
      ['https://www.australia.com/en/places/perth-and-surrounds/guide-to-perth.html', 'Tourism Australia — Perth'],
      ['https://www.westernaustralia.com/en/places-to-visit/perth-and-surrounds', 'Tourism Western Australia — Perth and surrounds'],
      ['https://www.transperth.wa.gov.au/', 'Transperth — service planning and alerts'],
      ['https://www.rottnestisland.com/', 'Rottnest Island Authority — Wadjemup visitor information'],
      ['https://www.dbca.wa.gov.au/management/swan-canning-riverpark', 'WA Department of Biodiversity, Conservation and Attractions — Swan Canning Riverpark'],
      ['https://www.rottnestisland.com/visit/getting-here/by-ferry', 'Rottnest Island Authority — ferry terminals and journey planning']
    ],
    guides: [
      g({
        slug: 'boorloo-city-elizabeth-quay', name: 'Boorloo / Perth City & Elizabeth Quay', motif: 'river-city bearings', instrument: 'river-grid', imageQuery: 'Perth Elizabeth Quay skyline Swan River', imageAlt: 'Perth skyline and Elizabeth Quay beside the Swan River',
        reviewDate: '10 October 2026', reviewIsoDate: '2026-10-10',
        summary: 'A self-guided central Boorloo day links Perth Station, the Perth Cultural Centre, St Georges Terrace and Elizabeth Quay while keeping Whadjuk Noongar Country and the Swan River in view.',
        orientationTitle: 'Use the rail station as the hinge, not the whole itinerary.',
        orientation: 'Perth Station and Elizabeth Quay Station are different stops on the central rail network. For a collection-led route, use Perth Station to reach WA Museum Boola Bardip in the Cultural Centre, then walk south through the CBD toward the river. For a shorter river day, use Elizabeth Quay Station as the start/end anchor and leave the museum for rain or heat. Do not walk both banks as if the river edge were one compact block.',
        access: 'Plan the active Transperth route to the exact destination: Perth Station serves the Cultural Centre approach; Elizabeth Quay has its own station and bus terminal beside the inlet. Check lifts, station exits, service alerts and any event closures before departure. The museum publishes access information; confirm the current route and facilities if step-free travel matters.',
        sequence: 'Start at Perth Station and the Perth Cultural Centre. Choose the WA Museum Boola Bardip for Western Australian people, place and natural-history collections, or skip the museum and take the shorter CBD-to-Elizabeth Quay line. Continue via St Georges Terrace / Barrack Street to the public quay and one Swan River outlook; finish at Elizabeth Quay Station or a planned ferry only after checking that service. In heat, rain or event crowding, keep the museum as the anchor and shorten the exposed foreshore segment.',
        interpretation: 'Boorloo is a Whadjuk Noongar place name used for Perth. Treat the river and city as living Country, follow the words and interpretation of Whadjuk-led sources, and avoid presenting a generic plaque or a scenic walk as cultural authority.',
        boundary: 'Perth / Boorloo is Whadjuk Noongar Country. Use Whadjuk-led sources for cultural context, follow any site-specific directions, and do not enter event infrastructure, marina work areas or restricted river edges.',
        decisions: [['Museum first', 'Best for rain, heat relief, families and visitors who want Western Australian collections; budget a substantial indoor block and check the current exhibition calendar.'], ['River first', 'Best for a short central walk and skyline orientation; less suitable in strong sun, rain or major quay events, so use the station-to-station version.'], ['Choose the base', 'Central Perth serves rail, museum and river days; Fremantle adds another train leg and is more useful when port heritage or a Rottnest terminal there is the priority.']],
        routeTitle: 'Perth Station → Boola Bardip → Elizabeth Quay',
        stages: [['Arrive at Perth Station', 'Check the live network, exits and lift status. Use the Cultural Centre approach for the museum; the station name alone does not identify the quay.'], ['Choose the indoor anchor', 'At Boola Bardip, check the official exhibitions and admission terms. If the program or opening day does not fit, make this a CBD and river walk rather than forcing a closed venue into the day.'], ['Walk south to the inlet', 'Use public CBD streets toward Barrack Street and Elizabeth Quay. Stay on signed pedestrian paths around ferry berths and event setup; shorten the walk if the weather turns.'], ['Return from the right node', 'Use Elizabeth Quay Station / Busport for the central return, or board a Swan River service only if the operator, destination and return timing are confirmed.']],
        risks: [['Heat and UV', 'The river edge is exposed. Shift the museum earlier, carry water and use the short station-to-station route when heat makes an open-ended foreshore walk a poor choice.'], ['Event and access changes', 'Quay events, construction and station works can alter paths or exits. Check City of Perth notices and Transperth before relying on a familiar crossing.'], ['Wrong rail anchor', 'Perth Station and Elizabeth Quay are not interchangeable. Pin the museum, ferry berth or final station entrance, especially when using mobility aids.']],
        duration: 'Give the CBD and one museum or a shorter river-only line a full day, with a substantial block reserved for the museum. Add Kings Park or a ferry on a separate day unless the first route is deliberately short.', combine: 'Pair a short city-centre route with Kings Park only if the park access and weather suit the group. Keep Fremantle and Rottnest separate: each introduces a different rail/ferry leg and its own return deadline.', verify: 'Check Transperth service alerts, City of Perth road/event notices, Boola Bardip exhibitions/access, UV and heat forecast, river-ferry operator and the exact return station.',
        faq: [
          ['Is Perth Station the same as Elizabeth Quay Station?', 'No. Use Perth Station for the Cultural Centre and the north CBD approach; use Elizabeth Quay Station or Busport for the inlet and southern CBD. Check the exact station and exit on the current Transperth map before choosing a walking route.'],
          ['What is the best rainy-day alternative?', 'Make WA Museum Boola Bardip the main visit and use its live exhibition and access pages to choose a collection. Keep the Elizabeth Quay walk optional; do not replace a cancelled outdoor segment with a second venue unless its hours and booking fit.'],
          ['Can I add Fremantle to this route?', 'You can travel there by the Fremantle Line, but the extra rail leg makes this a city-plus-port day. If a museum visit is the purpose, finish the city route and give Fremantle a separate day; if the city visit is only the short river line, check the live connection and last return first.'],
          ['How much walking is involved?', 'The station-to-museum-to-quay route is a city walk with several blocks and open river exposure, not a single platform transfer. Use the museum’s access page and Transperth’s current journey planner to tailor a step-free route or shorten the outing.']
        ],
        sources: [
          ['https://visit.museum.wa.gov.au/boolabardip', 'Western Australian Museum — Boola Bardip visit, exhibitions and access'],
          ['https://www.transperth.wa.gov.au/', 'Transperth — journey planner, maps and disruptions'],
          ['https://www.australia.com/en/places/perth-and-surrounds/guide-to-perth.html', 'Tourism Australia — Perth / Boorloo'],
          ['https://perth.wa.gov.au/', 'City of Perth — events, notices and city services'],
          ['https://www.dbca.wa.gov.au/management/swan-canning-riverpark', 'DBCA — Swan Canning Riverpark']
        ]
      }),
      g({
        slug: 'kings-park', name: 'Kings Park & Botanic Garden', motif: 'city-bushland overlook', instrument: 'botanic-section', imageQuery: 'Kings Park Perth skyline Western Australia', imageAlt: 'Perth skyline seen from Kings Park and Botanic Garden',
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12',
        summary: 'Kings Park is a large landscape, not a single lookout. Choose Fraser Avenue and one garden or bushland section, then match the return to route 935, the Blue CAT or the exact parking zone and its current notices.',
        searchSummary: 'Plan one Kings Park precinct from a named entry: Fraser Avenue on route 935, a Blue CAT stop or signed visitor parking. Check the 935D destination, path alerts, heat, park notices and current return service.',
        searchKeywords: ['Kings Park Perth bus', 'route 935 Fraser Avenue', '935D Malcolm Street', 'Blue CAT Kings Park', 'Federation Walkway access', 'Kings Park path closures'],
        orientationTitle: 'Choose a named precinct before you enter the park.',
        orientation: 'Kings Park and Botanic Garden covers a broad escarpment above Boorloo / Perth. The meaningful plan is not “walk around the park”: pick a starting precinct, one interpretation goal and the way back. Route 935 from St Georges Terrace travels into the Fraser Avenue Precinct; check the operator’s current stop and direction before boarding. The 935D service is a different variant and terminates on Malcolm Street by Parliament House, so a bus with “935” on the screen may still leave you outside the park. The Blue CAT serves Kings Park from Perth Busport via Perth Station and Elizabeth Quay. Once inside, most park movement is on foot along shared paths. The Lotterywest Federation Walkway is a bounded option: the manager describes a 620 m route and 40-minute return, open daily 9 am–5 pm. The walkway is wheelchair accessible, though assistance may be needed on the raised arch. This makes a useful visit for visitors who want a defined garden walk rather than an all-day bushland circuit.',
        access: 'From central Perth, compare route 935 with the Blue CAT in Transperth’s live planner and note the exact stop for the chosen precinct. A 935D bus does not enter the park at Fraser Avenue; it ends on Malcolm Street, so verify the suffix and stop. If driving, pick a visitor car park that serves your first stop, read the posted time limit and stay within the park boundary; the authority currently lists four-hour weekday limits in some car parks and signed areas, with enforcement from 7 am to 4 pm Monday to Friday except public holidays. Do not leave a car in the park and travel elsewhere. Walking uphill from the CBD adds grades and crossings, so use the mapped public path and keep a return option for heat or fatigue. Check the notices page on the day: restoration, events or safety work can close a path or alter access. Keep the route step-free where needed; the Federation Walkway’s elevated arch may require assistance even though its path is wheelchair accessible.',
        sequence: 'For a half-day, start at the named Fraser Avenue or Botanic Garden entrance, read the current park map, then choose either the formal garden and Federation Walkway or one bushland path and a single lookout. Do not try to cover both the entire botanical collection and the park’s bushland network in one stroll. If you choose the walkway, reserve its posted opening window and 40-minute return as the core; add one nearby rest point, not another cross-park loop. Follow signs and local cultural interpretation; stay on shared paths and leave plants, seeds and wildlife undisturbed. Before the walk, pin the bus stop or legal car park you will use to leave. If the wind, heat, fire rating or a closure makes the exposed section uncomfortable, turn back while the return is still easy. A museum in the city is the indoor fallback; it is a different visit and should be chosen before an afternoon service is missed.',
        boundary: 'Kings Park sits on Whadjuk Noongar Country and includes protected bushland, living cultural heritage and public memorial places. Use the authority’s interpretation and cultural guidance, give visitors and ceremony space, and do not remove plants, seeds or natural material. Follow restoration barriers and park staff instructions. A lookout or a line on a map does not imply access to the escarpment or a closed path.',
        decisions: [
          ['Fraser Avenue by bus', 'Choose this for the War Memorial, central views or nearby garden paths. Route 935 serves the precinct from St Georges Terrace; confirm the correct service variant and return stop.'],
          ['Blue CAT and one garden walk', 'Choose this if a bus from Perth Busport, Perth Station or Elizabeth Quay best fits your base. Use the live map and select one stop and one walk, such as the Federation Walkway, before adding more distance.'],
          ['Drive only for the park visit', 'Choose a signed visitor car park near the intended precinct and obey the displayed limit. Some current weekday zones allow four hours; the free park visitor parking is not a park-and-ride facility.']
        ],
        routeTitle: 'Perth → named park entry → one garden or bushland loop → same return node',
        stages: [
          ['Select the arrival stop', 'Use route 935 to Fraser Avenue, the Blue CAT to a Kings Park stop, or a visitor car park. Check the exact 935 variant: 935D terminates on Malcolm Street and is not the Fraser Avenue service.'],
          ['Choose one landscape', 'Use the park map to select the Botanic Garden, Federation Walkway or one bushland trail. If you need a defined accessible walk, the Federation Walkway’s official page lists its length, 40-minute return, daily 9 am–5 pm hours and assistance caveat at the arch.'],
          ['Check conditions and notices', 'Review park alerts, path and event notices, current fire advice and the forecast before crossing the open escarpment. If a notice closes the route or heat makes it unsafe, turn back or switch to an indoor Perth visit.'],
          ['Return from the correct side', 'Go to the stop or car park you selected and verify the live service. Keep enough time to walk back; the park’s size and uphill city connections make a distant exit a poor last-minute choice.']
        ],
        risks: [
          ['Similar bus numbers, different endpoints', 'The route 935D variant ends on Malcolm Street by Parliament House. Verify the service label and stop instead of assuming every 935 reaches Fraser Avenue.'],
          ['Heat, fire and changing access', 'Exposed views, bushland and park paths are affected by weather, fire advice, restoration work and events. Check the authority’s live notices and fire sources; obey barriers and keep water and shade breaks in the plan.'],
          ['Parking limits and a long walk back', 'Four-hour weekday restrictions apply in some signed areas; leaving the park while the car remains there is not allowed. Walk-in access from the CBD includes grades. Use a mapped route and a return node that fits the least mobile visitor.']
        ],
        duration: 'Allow half a day for one garden or bushland thread; a guided walk or more than one precinct needs additional time. The Federation Walkway is a 40-minute return walk, but transit, rest, the park map and an optional lookout are separate blocks. Add a city museum on another half-day only if the actual bus return and opening hours make the combination comfortable.',
        combine: 'Pair Kings Park with central Perth, where an indoor museum can replace an outdoor path during heat or rain. Keep Fremantle and Rottnest separate because each uses a different rail, ferry or return-time contract. Do not walk down to the CBD from an unverified trail exit or leave a parked car inside the park while visiting elsewhere.',
        verify: 'Check Kings Park transport variants and stops, Transperth service updates, park map and notices, car-park signs, the chosen attraction’s opening and accessibility, local forecast, UV and current fire warnings. On weekdays, check whether the exact car park has a four-hour limit.',
        faq: [
          ['Does route 935 always stop inside Kings Park?', 'Route 935 serves the Fraser Avenue Precinct, but the 935D variant terminates on Malcolm Street near Parliament House. Check the displayed service suffix and the live stop list for your date before boarding.'],
          ['How much can I fit in a half day?', 'Choose one precinct and a single loop. The Federation Walkway is a 40-minute return option open daily 9 am–5 pm; use its official accessibility notes and add only one nearby lookout or garden section. The broader park has many paths beyond this compact visit.'],
          ['Can I leave my car in the park and ride elsewhere?', 'No. The park authority says visitor parking is for people visiting the park and cannot be used as park-and-ride parking. Some signed car parks also have four-hour weekday limits, so read the sign at the exact bay.'],
          ['What is the easy weather backup?', 'Shorten or skip the exposed walk and visit an indoor Perth attraction such as WA Museum Boola Bardip. Check the park notices and museum opening details separately; a path closure should not become a rushed attempt to cross another precinct.']
        ],
        sources: [
          ['https://www.bgpa.wa.gov.au/transport', 'Botanic Gardens and Parks Authority — route 935, 935D and Blue CAT access'],
          ['https://www.bgpa.wa.gov.au/notices', 'Botanic Gardens and Parks Authority — park access, path and parking notices'],
          ['https://www.bgpa.wa.gov.au/kings-park/attraction/lotterywest-federation-walkway', 'Kings Park — Federation Walkway length, hours and accessibility'],
          ['https://www.bgpa.wa.gov.au/kings-park-and-bold-park-maps', 'Botanic Gardens and Parks Authority — Kings Park map'],
          ['https://www.transperth.wa.gov.au/', 'Transperth — trip planner, timetables and service updates'],
          ['https://visit.museum.wa.gov.au/boolabardip', 'Western Australian Museum — Boola Bardip visit and exhibitions'],
          ['https://www.bom.gov.au/wa/forecasts/perth.shtml', 'Bureau of Meteorology — Perth forecast']
        ]
      }),
      g({
        slug: 'walyalup-fremantle', name: 'Walyalup / Fremantle', motif: 'port and memory ledger', instrument: 'port-ledger', imageQuery: 'Fremantle harbour Western Australia historic buildings', imageAlt: 'Historic Fremantle beside its working port',
        reviewDate: '10 October 2026', reviewIsoDate: '2026-10-10',
        summary: 'A Walyalup / Fremantle walking day follows the Fremantle Line from Perth, then chooses one major heritage interior before the West End and public harbour edge.',
        orientationTitle: 'Separate the prison hill, West End and Victoria Quay.',
        orientation: 'Fremantle Station is the rail arrival; Fremantle Prison sits inland/uphill, the West End and WA Shipwrecks Museum occupy the port-side heritage district, and Victoria Quay is a separate ferry-side edge. Choose one history interior first: prison tours explain convict and later prison history; the Shipwrecks Museum concentrates on maritime archaeology and the Dutch wrecks. A full museum plus a prison tour can crowd out the town walk, so decide which interpretation matters more.',
        access: 'Use the current Fremantle Line timetable and walk from Fremantle Station to the chosen site. For a Rottnest departure, confirm the ticket says B Shed / Victoria Quay, Northport / Rous Head, or another named terminal; “Fremantle ferry” is not sufficient routing information. Prison tours have their own booking and mobility details; check directly before fixing the day.',
        sequence: 'From Fremantle Station, either go first to a booked prison tour or walk west through the heritage streets to the WA Shipwrecks Museum. Follow one of those interiors with the West End and the public edge of Fishing Boat Harbour or Victoria Quay, then return to the station. Markets suit a weekend market-focused visit when the current calendar confirms opening; for weekday or poor-weather plans, substitute the museum or a reserved heritage visit rather than assuming market stalls are operating.',
        interpretation: 'Walyalup is Whadjuk Noongar Country. Fremantle’s port and prison history includes living community, work and contested colonial history; use local Whadjuk interpretation and site-led accounts, and give memorial spaces and residents room.',
        boundary: 'Walyalup is Whadjuk Noongar Country. The port remains a working place: use public foreshore only, obey signs and barriers, keep clear of fishing crews and port operations, and follow the prison’s visitor rules.',
        decisions: [['Prison tour', 'Best for visitors interested in convict and institutional history; book a specific tour and check its access requirements. The uphill walk and timed entry make this a half-day anchor.'], ['Shipwrecks Museum', 'Best for maritime archaeology, port and Dutch wreck history; a strong indoor alternative in rain or heat. Confirm current exhibitions and hours before setting the route.'], ['Market / harbour', 'Best when the market is actually open or seafood/working-port life is the priority. Markets are calendar-dependent; harbour promenades remain public only where signs allow.']],
        routeTitle: 'Fremantle Station → one history interior → West End → station',
        stages: [['Arrive on the Fremantle Line', 'Check service changes, the return train and station works. Decide now whether the walk goes inland/uphill to the prison or west to the port-side museum.'], ['Spend the main block', 'Use the prison only with a booked tour that fits your interests and mobility; otherwise choose the WA Shipwrecks Museum and its current maritime collection. Do not try to squeeze both into a short visit.'], ['Walk the heritage port', 'Continue through public West End streets toward Victoria Quay or Fishing Boat Harbour. The port is operational: stay within public paths and follow barriers rather than approaching a restricted wharf for a view.'], ['Close at Fremantle Station', 'Leave time to walk back and verify the live train. If a Rottnest ferry is next, go to the terminal printed on that separate ticket and obey the operator’s check-in instruction.']],
        risks: [['Booking and mobility', 'Prison tours have defined routes and access conditions; a missed or unsuitable tour changes the day. Check official details before committing.'], ['Market calendar', 'Fremantle Markets are not an every-day assumption. Confirm the current opening calendar; use the Shipwrecks Museum, a local heritage walk or cafés as a weekday/rain fallback.'], ['Port and return', 'Restricted working areas are not public promenades. The station and ferry terminal are separate endpoints, and the train/ferry return can be missed if the walk is left until boarding time.']],
        duration: 'Allow one full day for the town plus one major heritage interior. A prison tour takes a substantial timed block; use the Shipwrecks Museum instead when weather, access or interests favour an indoor port-history visit.', combine: 'Pair with Rottnest only when Fremantle is a deliberately brief terminal transfer. For a complete port day, keep the island separate; a ferry crossing and check-in consume the time needed for a prison or museum visit.', verify: 'Check Transperth disruptions and return service, prison tour availability/access, WA Museum exhibitions, the Fremantle Markets calendar, port/foreshore closures, and the exact ferry terminal and check-in rule.',
        faq: [
          ['Should I choose Fremantle Prison or the Shipwrecks Museum?', 'Choose the Prison for a booked, guided look at the convict and later institutional site; choose the Shipwrecks Museum for maritime archaeology and port history. Both are meaningful indoor anchors, so choose one if you also want the West End walk. Verify each venue’s current visitor information.'],
          ['Can I visit Fremantle Markets on a weekday?', 'Do not assume so. Check the Markets’ current calendar before routing there; if they are closed, use the port-side museum, a heritage walk or a meal stop instead.'],
          ['Is the Rottnest ferry terminal at Fremantle Station?', 'No. The rail station and ferry terminals are distinct places. Match the ticket to its named pier and allow the current terminal approach and operator check-in time.'],
          ['What is a good wet-weather route?', 'Choose the WA Shipwrecks Museum as the main block, then take a shorter public-street walk if conditions allow. A prison visit remains possible only if the booked tour, access needs and weather fit; do not rely on an unbooked indoor slot.']
        ],
        sources: [
          ['https://fremantleprison.com.au/', 'Fremantle Prison — official visitor and tour information'],
          ['https://visit.museum.wa.gov.au/shipwrecks', 'Western Australian Museum — WA Shipwrecks Museum'],
          ['https://www.transperth.wa.gov.au/', 'Transperth — Fremantle Line and service alerts'],
          ['https://fremantlemarkets.com.au/', 'Fremantle Markets — current calendar and visit information'],
          ['https://www.fremantle.wa.gov.au/', 'City of Fremantle — events, heritage and visitor notices'],
          ['https://www.rottnestisland.com/visit/getting-here/by-ferry', 'Rottnest Island Authority — ferry terminals and check-in']
        ]
      }),
      g({
        slug: 'wadjemup-rottnest', name: 'Wadjemup / Rottnest Island', motif: 'ferry-bicycle island circuit', instrument: 'island-spoke', imageQuery: 'Original Wadjemup ferry-day planning diagram', imageAlt: 'Planning sequence, not to scale: named mainland ferry terminal → Thomson Bay arrival → one chosen island sector → return ferry',
        reviewDate: '10 October 2026', reviewIsoDate: '2026-10-10',
        summary: 'Plan Wadjemup / Rottnest around the booked crossing, a realistic island sector where few cars are permitted, and time for its Whadjuk history—not a checklist of beaches or quokka photographs.',
        orientationTitle: 'The terminal, not the map pin, sets the day.',
        orientation: 'Choose a ferry by departure point and actual ticket first: Perth City, Fremantle / Victoria Quay, North Fremantle / Rous Head and Hillarys are different mainland journeys, and published crossing times vary by terminal and conditions. The island arrival is at Thomson Bay. From there choose a settlement walk, the island bus, or cycling only if the group has the skill and weather capacity for exposed roads. A day visit should focus on one sector; accommodation allows a slower second sector but needs advance booking and a baggage plan.',
        access: 'The Rottnest Island Authority says few cars are permitted; visitors generally get around on foot, by bicycle or island bus, with private transfer services also available. Check your operator’s terminal, current timetable, check-in, baggage and cancellation terms; the Authority notes schedules vary with season and weather. Wheelchair access and equipment differ by operator and island service, so contact the ferry and island provider directly before booking if access is essential.',
        sequence: 'Book a crossing that leaves enough usable island time and identify the mainland terminal on the ticket. At Thomson Bay, start with Wadjemup’s Aboriginal history and current visitor interpretation, then choose one manageable route: a short settlement / museum walk for history and lower exertion, the island bus for several stops without cycling, or a bicycle day for riders comfortable with exposed roads, hills and wind. On hot, windy or wet days, shorten to the settlement or bus-served stops; keep the return boarding and bike return buffer protected.',
        interpretation: 'Wadjemup is a place of deep cultural significance to Whadjuk Noongar people and also a site of colonial imprisonment. The Rottnest Island Authority’s history material describes this history; read it before choosing cultural access and follow current community and site guidance rather than treating the island as an empty recreation circuit.',
        boundary: 'Wadjemup / Rottnest is Whadjuk Noongar Country and a conservation island where few cars are permitted. Follow current cultural and heritage guidance, use formed roads and trails, never feed or touch quokkas, keep a respectful distance, and leave beach and reserve closures in force.',
        decisions: [['Walking sector', 'Best for history-focused or lower-exertion visitors staying near Thomson Bay; it gives a small geographic footprint and less transport setup, but does not reach distant bays.'], ['Island bus', 'Best for visitors who want several stops without cycling or who need to reduce heat and exertion. Check the current route, operating day and connection back to the settlement; do not use the island-wide map as a promise of service.'], ['Bicycle', 'Best for confident riders who want flexible stops and can handle sun, wind, hills and road sharing. It adds hire/return logistics and effort; choose the settlement or bus instead if anyone is unsure or conditions deteriorate.']],
        routeTitle: 'Named ferry terminal → Thomson Bay → one island sector → booked return',
        stages: [['Match ticket and terminal', 'The island ferry guide lists multiple mainland departure points and seasonal/weather-variable timetables. Plan the rail or bus to the named pier, operator check-in, luggage and boarding gate from its current instructions.'], ['Arrive at Thomson Bay', 'Use the settlement as the decision point. Review visitor information and Wadjemup history, collect any pre-booked bike, and reassess heat, wind and rain before choosing how far to go.'], ['Choose a single mode', 'Walk locally for the museum and settlement, take the island bus for selected stops, or cycle only a route the group can ride safely. Do not improvise a full island loop on a hot or windy day.'], ['Return with margin', 'Return the hire equipment and reach the correct ferry gate by the operator’s check-in time. If a crossing is cancelled, follow the operator/accommodation process; do not assume a same-day alternative boat or mainland connection.']],
        risks: [['Exposed effort', 'Sun, wind, hills, limited shade and road conditions increase cycling effort. Switch to a short settlement visit or bus plan and preserve water/rest time; current heat advice overrides the sightseeing list.'], ['Wildlife and Country', 'A close selfie is not worth feeding, touching or surrounding a quokka. Observe from a respectful distance and follow all signs, cultural guidance and habitat protections.'], ['Ferry disruption', 'The Authority states timetables vary by season and weather, and overnight cancellation arrangements depend on booking terms. Keep a mainland buffer when onward travel matters and read the operator’s cancellation policy before purchase.']],
        duration: 'Make this a full day from the mainland, allowing for the actual crossing, check-in and one island sector. Two or more nights suit visitors who want cycling, walking and history without a ferry-day rush, but accommodation and all-weather plans need booking.', combine: 'Do not add a complete Fremantle day. A terminal-side coffee or short walk is only sensible when ferry times leave a real buffer and the exact terminal is nearby; otherwise keep port heritage for another day.', verify: 'Check Rottnest Island Authority alerts, exact ferry terminal/operator/timetable, check-in and baggage, cancellation and accommodation terms, island bus or bike availability, forecast/UV, beach safety, cultural advice and the day’s return boarding gate.',
        faq: [
          ['Which ferry terminal should I choose?', 'Choose by the complete mainland journey, not just crossing duration. Fremantle, North Fremantle, Perth City and Hillarys have different rail/bus approaches. Read the named terminal on the operator ticket, allow its check-in rule and compare the return to your hotel or next connection.'],
          ['Do I need to cycle around the island?', 'No. The island authority lists walking, bicycles and buses; the settlement and nearby experiences can make a shorter visit worthwhile. Choose the bus or local walk when heat, wind, hills, mobility or riding confidence make a long cycle a poor fit.'],
          ['What if wind or rain makes cycling unpleasant?', 'Switch to a settlement-centered visit or a current bus service, and use indoor interpretation where open. Check service operation and ferry status directly; if conditions affect the crossing, follow the operator’s cancellation and rebooking terms.'],
          ['How should I meet quokkas?', 'Observe from a respectful distance and never feed, touch or crowd them. Keep the encounter brief and let the animal move freely; wildlife welfare and habitat matter more than a close photograph.'],
          ['Can I day-trip the island and fully visit Fremantle too?', 'That is not a reliable full itinerary. The ferry consumes a large part of the day, and the port town has separate museums, tours and return travel. Give each destination its own day unless you deliberately plan a terminal-only stop.']
        ],
        sources: [
          ['https://www.rottnestisland.com/visit/getting-here/by-ferry', 'Rottnest Island Authority — ferry terminals, check-in, timetables and cancellations'],
          ['https://www.rottnestisland.com/visit/getting-around', 'Rottnest Island Authority — cycling, walking, bus and accessibility'],
          ['https://www.rottnestisland.com/learn/history/aboriginal-history', 'Rottnest Island Authority — Aboriginal history of Wadjemup'],
          ['https://www.rottnestisland.com/learn/history/aboriginal-culture', 'Rottnest Island Authority — Aboriginal culture'],
          ['https://www.rottnestisland.com/learn/nature-wildlife', 'Rottnest Island Authority — island nature and wildlife'],
          ['https://www.rottnestisland.com/visit/guides-tips/practical-tips', 'Rottnest Island Authority — practical visitor and safety advice']
        ]
      }),
      g({
        slug: 'cottesloe-scarborough', name: 'Cottesloe & Scarborough Coast', motif: 'Indian Ocean sunset line', instrument: 'sunset-line', imageQuery: 'Cottesloe Beach Perth sunset Western Australia', imageAlt: 'Cottesloe Beach on the Indian Ocean near Perth',
        reviewDate: '12 October 2026', reviewIsoDate: '2026-10-12',
        summary: 'Choose one Perth coast by its last mile: Cottesloe via the Fremantle Line and a walk or route 102, or Scarborough via Stirling Station and Surf CAT. Confirm patrol flags, swell, wind and the actual return before staying for sunset.',
        searchSummary: 'Compare Cottesloe’s Fremantle Line and route 102 connection with Scarborough’s Stirling Station Surf CAT. Choose one beach, check lifesaving flags and ocean conditions, then verify the return service after sunset.',
        searchKeywords: ['Cottesloe Beach train', 'Cottesloe route 102', 'Scarborough Surf CAT', 'Perth beach bus', 'Perth beach safety flags', 'Cottesloe Scarborough sunset transport'],
        orientationTitle: 'Pick the shoreline after you solve its last mile.',
        orientation: 'Cottesloe and Scarborough are two beach precincts, not adjacent stops in a neat evening loop. Cottesloe has a Fremantle Line station, but the station and bathing beach are separate points. Depending on heat, mobility and the day’s timetable, use a public walk or connect through the current route 102 service to Marine Parade / Grant Street; the timetable also names Cottesloe Station. Scarborough works through a different chain: train to Stirling Station, then the Surf CAT bus to Scarborough Beach. The Public Transport Authority describes the Surf CAT as a daily service running direct from Stirling Station, free and up to every ten minutes during peak periods. Schedules still change. Transperth listed October bus changes effective 11 October 2026, so a February PDF or saved screenshot is only a reference, not the trip plan. Choose the beach that fits your actual arrival, access needs and return departure. Then check the beach and surf conditions. A glowing sunset is not a patrol schedule, and an urban beach is not a promise of calm water.',
        access: 'For Cottesloe, check the Fremantle Line train in both directions and decide whether the station-to-beach walk suits the group. Route 102 links Claremont Station, Marine Parade / Grant Street and Cottesloe Station in the published network; use Transperth’s date-specific planner to see which stop best serves your beach entry and whether a current bus change affects the connection. For Scarborough, plan the Yanchep Line to Stirling Station and the Surf CAT to the beach precinct, then save the same path in reverse. The Surf CAT is currently described by the Public Transport Authority as free and daily, with up-to-every-10-minute peak frequency; confirm live operations and the last departure rather than relying on that frequency at every hour. Check step-free access and the distance from stop to sand before travelling, especially with a mobility aid or small children. Do not assume the bus remains frequent after a major event or late sunset. Keep enough battery or a written note to identify your return stop.',
        sequence: 'Make the visit a one-beach afternoon or half-day. Arrive before the hottest part of the day when practical, locate the lifesaving patrol and red-yellow flags, then decide whether to swim, sit above the waterline or walk the promenade. Enter the water only within the patrolled area while it is actually being supervised, and follow local lifesaver instructions; never use a sunset photo as evidence that the patrol is still operating. If conditions are rough, windy or the flags are absent, keep the visit land-based. Give the sand, dune vegetation and nearby residents room; use marked access and bins. Before sunset, stop for food or a sheltered promenade rest near the chosen stop and recheck the return service. Leave before the final connection becomes tight. If the swell, wind or transport change makes the selected coast unsuitable, substitute a city museum or another indoor Perth plan rather than attempting to race from Cottesloe to Scarborough.',
        boundary: 'These are working public coastlines on Whadjuk Noongar Country. Follow lifeguards, flags, signs and any beach closure; do not cross dune restoration barriers or enter the water from an unpatrolled stretch because it looks quieter. Keep dogs, boards and beach equipment under the local rules, and give residents, surf users and other visitors space. Use Country-led interpretation where offered; the ocean is a lived place as well as a view.',
        decisions: [
          ['Cottesloe: rail and final approach', 'Choose it when the Fremantle Line and either the walk or route 102 fit your group. It works as a stand-alone beach visit; do not assume the station is on the sand or that every bus serves both the station and the promenade.'],
          ['Scarborough: Stirling plus Surf CAT', 'Choose it when the Yanchep Line and a direct Surf CAT transfer fit the day. Confirm the current stop, return frequency and any service changes before leaving Stirling Station.'],
          ['Water or shore only', 'Choose swimming only when the patrol is active and the flags are set, then follow the lifeguards. Wind, swell, heat or a closure can make a promenade visit or an indoor city alternative the better plan.']
        ],
        routeTitle: 'Perth → Cottesloe OR Scarborough → check flags and swell → named return stop',
        stages: [
          ['Choose the beach by connection', 'Cottesloe uses the Fremantle Line with a separate beach approach or route 102. Scarborough uses Stirling Station and the Surf CAT. Select one destination from the exact date-specific journey planner.'],
          ['Pin the water and return nodes', 'Locate the patrolled access, flags, nearest stop and reverse service before taking the train. Check step-free access, beach notices, weather and the last useful connection.'],
          ['Reassess before entering', 'Look for active red-yellow flags and follow the lifeguards. If flags are absent, surf is unsuitable or wind makes the shore uncomfortable, keep to the public promenade and do not enter the water.'],
          ['Leave on the booked path', 'Recheck live train and bus changes before sunset. Board from the named stop while the return is comfortable; do not add a second beach or depend on a late, unverified connection.']
        ],
        risks: [
          ['Flags, patrol and surf do not follow the sunset', 'Patrol hours and conditions vary by beach and day. Swim only between flags while lifesavers are supervising, follow their directions and treat no flags as a land-only visit. Check the beach safety page and current surf forecast.'],
          ['Last-mile and service changes', 'The Cottesloe rail station is not the bathing beach; route 102 and walking are separate options. Scarborough uses Stirling Station and Surf CAT. October 2026 bus changes are already in effect, so refresh both outbound and return directions in Transperth.'],
          ['Heat, wind and exposed sand', 'The coast can be bright and windy with little shade. Bring drinking water, sun protection and a sheltered break; shorten the walk or leave when weather, fatigue or a beach closure changes the risk.']
        ],
        duration: 'Allow a half day for one beach, including both last-mile legs and time to check conditions on arrival. A long lunch or sunset can make the transit return the controlling time. Use a full day only if you choose one beach as the main activity and reserve a neighbourhood visit nearby; do not cross between both beaches just to watch the light change.',
        combine: 'Pair one coast with a Perth city museum or meal only if there is time to return, change transport and check the actual final service. Cottesloe and Scarborough should be separate beach visits, as should Rottnest and Fremantle: each uses a distinct transit route and weather decision. For a rough-surf day, choose an indoor city anchor before departing the hotel.',
        verify: 'Check Transperth’s live journey planner, planned and current service updates, the exact Fremantle or Yanchep Line trip, route 102 or Surf CAT stop, last return, Beachsafe patrol information, beach closures, Bureau of Meteorology wind and marine forecast, UV and sunset time.',
        faq: [
          ['Which beach is easier without a car?', 'It depends on your starting point and the current service. Cottesloe combines the Fremantle Line with a separate walk or route 102 connection; Scarborough combines the Yanchep Line with the Surf CAT from Stirling. Compare the full return from your accommodation, including the stop-to-sand approach.'],
          ['Can I swim after sunset?', 'Do not use sunset as a safety cue. Swim only between red and yellow flags while lifesavers are on patrol and follow their instructions. When flags are not present, make the visit land-based and check current beach advice.'],
          ['Can I see both beaches in one afternoon?', 'That usually adds a cross-city transfer without improving the beach visit. Choose one coast, reserve time for the actual last mile and return, and give the other beach a separate day.'],
          ['What should I do if the water is rough?', 'Stay out of the water and use a public promenade or a sheltered city alternative. Recheck the local beach notice and marine forecast; conditions can change after you have arrived.'],
          ['Why not follow a saved timetable PDF?', 'Transperth’s published bus timetables have effective dates and the network lists planned service changes. A route may be familiar while the stop or departure changes. Refresh the journey planner for your exact day and check it again before leaving the beach.']
        ],
        sources: [
          ['https://www.transperth.wa.gov.au/', 'Transperth — journey planner, current service updates and timetables'],
          ['https://www.transperth.wa.gov.au/Timetables/Details?Bus=Route+102', 'Transperth — Route 102 timetable and Cottesloe stops'],
          ['https://www.pta.wa.gov.au/projects/completed-projects/surf-cat-bus-service', 'Public Transport Authority WA — Surf CAT route and operating information'],
          ['https://beachsafe.org.au/beach/wa/cottesloe/cottesloe/cottesloe-beach', 'Beachsafe — Cottesloe Beach hazards and patrol information'],
          ['https://beachsafe.org.au/beach/wa/stirling/scarborough/scarborough-2', 'Beachsafe — Scarborough Beach hazards and patrol information'],
          ['https://www.bom.gov.au/wa/forecasts/perth.shtml', 'Bureau of Meteorology — Perth forecast and coastal conditions'],
          ['https://visit.museum.wa.gov.au/boolabardip', 'Western Australian Museum — Boola Bardip indoor visit']
        ]
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
