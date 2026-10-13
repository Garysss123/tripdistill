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
    hubIntro: 'Western Australia’s southwest is a sequence of bases linked by long road legs, not one compact loop. Start with a north-coast night in Busselton or Dunsborough, move south to Margaret River for the producer cluster, then decide whether Cape Naturaliste, Boranup and Augusta earn separate days. Albany is a farther southern journey with its own overnight requirement. The five chapters separate a sober tasting day, booked caves, exposed coast, fire-sensitive forest and the much longer drive; they are choices to build into a trip, not a checklist to clear from one bed. Give each day one operating idea: bay and jetty, tasting with a confirmed ride, one exposed coast section, or a booked cave plus a short forest stop. Check the driver, road, venue and park before locking that sequence. If a front, fire warning or closure removes the main activity, swap in a confirmed town-based meal or indoor visit and keep the same overnight base; do not spend the buffer trying to reach the next cape.',
    searchSummary: 'Build a southwest Western Australia route with separate Busselton/Dunsborough, Margaret River, Augusta and Albany bases. Compare three-, five- and longer-night plans, then check the date-specific Transwa coach, sober wine transport, park and fire closures, coastal weather and road conditions.',
    searchKeywords: ['southwest western australia itinerary nights', 'Perth to Margaret River Transwa SW1 coach', 'Busselton Dunsborough Margaret River bases', 'Margaret River to Augusta and Albany road trip', 'Leeuwin-Naturaliste park access and closures', 'Margaret River wine tour sober driver'],
    stay: 'For three nights, choose either Busselton/Dunsborough or Margaret River as the base rather than commuting between all towns. With five nights, split two in the north and three around Margaret River: the first pair supports the bay and Cape Naturaliste; the central block gives a full day to tasting and another to a separately booked coast, cave or forest visit. Add Augusta only for a dedicated south-cape day and sleep there if the return would otherwise be rushed. Treat Albany as another leg with at least two nights there, not a same-day extension. Fewer hotel moves suit a short trip; a longer itinerary can trade one packing day for less backtracking.',
    transfer: 'A car is the flexible option for beaches, caves and separate cellar doors, but it also puts the driver on a long regional road after each visit. Transwa’s SW1 coach links East Perth with Busselton, Dunsborough, Yallingup, Margaret River and Augusta on date-specific services; its route is useful for town-to-town travel but it is not a turn-up local shuttle between tasting rooms, beaches and trailheads. A booked wine tour or pre-arranged sober driver solves the cellar-door day. If using a coach, verify the exact travel date, boarding stop, luggage conditions and a confirmed last-mile ride before booking accommodation. Build fuel, roadworks, wildlife, fire, parking and daylight into each move.',
    tripShapes: [
      { title: '3 nights · one base, one priority', copy: 'Choose a north-coast base for Busselton Jetty and Cape Naturaliste, or Margaret River for the town and one producer day. On arrival, shop and settle before driving to a second town; use the next day for the booked priority and keep the last day flexible for a short coast or food plan. If arriving by SW1, check which dated service and stop actually fit; a coach arrival is not a hire-car reservation or a local connection to a cellar door. This protects against a late coach, rain or wind without changing hotels. Do not promise yourself both caves and a distant cape walk on the transfer day.' },
      { title: '5 nights · north and central', copy: 'Use two nights around Busselton or Dunsborough and three around Margaret River. Give the north one bay/jetty block and one Cape Naturaliste choice, then relocate in daylight and keep the central base for tasting and another separate outing. Take the SW1 coach only if its actual travel date, stop and onward ride fit; otherwise hire a car. Remember that the listed SW1 services vary by day and direction, so do not plan a spontaneous coach back after dinner. Separate tasting from the exposed coast, and reserve one block for an official park walk or a booked cave.' },
      { title: '7 nights · add the south coast slowly', copy: 'Keep the north/central split, then use one or two nights around Augusta for a Cape Leeuwin and Boranup day if the current access and fire notices allow. The southbound relocation is its own block: confirm fuel, road condition, accommodation check-in and any cave booking before leaving Margaret River. Preserve a spare half-day for wind or closures instead of stacking the lighthouse, forest, cave and long return. If the primary site closes, stay out and use that buffer for food in town or a confirmed indoor booking. This still does not make Albany a side trip.' },
      { title: 'Albany extension · plan as another region', copy: 'Albany and Torndirrup are a distinct far-south base. Put the road or flight leg and at least two Albany nights on the calendar first, then allow a dedicated day for the historic town and one formal coast viewpoint. If arriving by road, schedule the transfer in daylight and do not add a cellar-door appointment on the same leg. A long return drive should never compete with a coastal walk, a cave booking or sunset.' }
    ],
    faq: [
      ['How many nights do I need for Margaret River and the Southwest?', 'Three nights allow one base and two focused days; five nights make a north/central split more comfortable. Add a night for a south-cape move and another if weather flexibility matters to a long walk or booked activity. Albany needs its own two-night minimum and should be added only after checking the actual road or flight connection. A longer itinerary creates choice; it does not make every town a day trip.'],
      ['Where should I stay: Busselton, Dunsborough or Margaret River?', 'Busselton and Dunsborough work for the northern bay and Cape Naturaliste; Margaret River is better for the central producer/town cluster and southward road. Choose by the first two days, not by a map midpoint. A north base helps if you want the jetty and bay; a central base helps if you want a sober producer tour and a town evening. Changing bases can save backtracking but costs a packing and transfer block.'],
      ['Can I reach cellar doors by public transport?', 'Do not assume so. Transwa SW1 serves the regional corridor on specific dated services, but the stop and departure may not line up with a vineyard booking or return. Use a booked tour, sober driver or confirmed local transfer before tasting; never use the coach timetable as a cellar-door shuttle.'],
      ['How should I order the route from Perth?', 'Choose the northern stop and first hotel before choosing a scenic detour. SW1 lists Busselton, Dunsborough, Yallingup, Margaret River and Augusta, but services vary by travel day and the regional coach is not a local loop. By car, keep the move south in daylight and transfer bags only once; set a separate return or onward plan before committing to Augusta or Albany.'],
      ['Can I stay in one place for the whole week?', 'Yes if the itinerary remains local to the selected base: choose the north for the bay and Cape Naturaliste, or Margaret River for central tastings and southbound access. One base reduces packing and helps absorb weather changes, but creates longer daily drives if you try to reach both capes. A split stay trades one relocation for less backtracking; do it in daylight and avoid changing hotels between fixed appointments.'],
      ['Should I include Albany in a Margaret River weekend?', 'Not as a casual extension. Albany and Torndirrup form a separate far-south chapter. Allow at least two nights there and plan the connecting road or flight as a separate move, rather than driving down and back around a park or food booking.'],
      ['What is the best backup for wind, rain or a closure?', 'Read the local forecast and DBCA/Main Roads notices for the exact chapter. If wind or swell makes an exposed coast section unsuitable, use a confirmed town meal or booked indoor producer visit; a cave is a different booking, not an automatic walk-in replacement. If a forest road is closed for fire, do not enter from another gate. Swap the order of days or stay put; keep the same base until access is clear.'],
      ['Does this route need a car?', 'A car gives the easiest access to multiple dispersed places. The SW1 can connect some towns, but you still need a verified last-mile ride and matching timetable. If you do not drive, group each day around a booked operator and its confirmed pickup points, then keep the itinerary inside that service area.']
    ],
    reviewDate: '13 October 2026', reviewIsoDate: '2026-10-13',
    sources: [
      ['https://www.australia.com/en/places/perth-and-surrounds/guide-to-margaret-river.html', 'Tourism Australia — Margaret River'],
      ['https://www.westernaustralia.com/en/places-to-visit/australias-south-west', 'Tourism Western Australia — Australia’s South West'],
      ['https://www.margaretriver.com/', 'Margaret River Busselton Tourism Association'],
      ['https://transwa.wa.gov.au/plan-your-journey/coach-lines/sw1', 'Transwa — SW1 stops, date-specific service pattern and timetable'],
      ['https://exploreparks.dbca.wa.gov.au/experiences', 'Explore Parks WA — official park experiences, trails, caves, forests and coast'],
      ['https://www.bom.gov.au/wa/forecasts/', 'Bureau of Meteorology — Western Australia town, wind and fire-weather forecasts'],
      ['https://www.mainroads.wa.gov.au/travel-information/', 'Main Roads Western Australia — travel information and road conditions']
    ],
    guides: [
      g({
        slug: 'busselton-dunsborough', name: 'Busselton & Dunsborough', motif: 'bay gateway and jetty', instrument: 'bay-register', imageQuery: 'Busselton Jetty Western Australia Geographe Bay', imageAlt: 'Busselton Jetty extending into Geographe Bay',
        summary: 'A northern gateway chapter balancing the long jetty, sheltered bay and Dunsborough base without assuming coast access is uniform.',
        orientationTitle: 'Choose the bay base before you book the jetty.',
        orientation: 'Treat Busselton and Dunsborough as two separate arrival nodes, not interchangeable labels for one walkable resort. Busselton suits a stay built around the foreshore and a timed Busselton Jetty activity; Dunsborough is the more useful launch for Cape Naturaliste and its coastal approaches. A two-night stay at one address gives you an arrival block plus one full day without packing between every stop. With only one night, choose the town that matches your first fixed booking and leave the other node for a later trip. The SW1 coach has named stops in both towns, but the stop is not a local shuttle to a hotel, beach, trailhead or jetty check-in.',
        access: 'A car makes the separate foreshore, Dunsborough and cape road legs flexible. If using Transwa SW1, match the exact service day, stop and arrival time to your accommodation before paying; then book a named pickup or local transfer for any activity beyond the town stop. The coach corridor connects towns, not every bay or trail. Busselton Jetty’s operator separates jetty access, the train and the Underwater Observatory, each with its own admission and operating conditions. Read its date-specific visitor and accessibility notes before choosing a ticket. The operator warns that train and observatory visitors cannot take luggage beyond its stated size, and there is no luggage storage at the foreshore; arrive after checking in or arranging storage elsewhere.',
        sequence: 'Use the arrival day to reach the named stop, collect keys and confirm the next day’s operator check-in rather than stacking the jetty onto a late coach arrival. On the full day, start with the preselected jetty option: a walk on the structure, the train, or the Observatory are different experiences, not an automatic bundle. Allow the early arrival the operator requests, keep the ticket and luggage rules in view, then take a meal or rest break on the foreshore. Move once to Dunsborough only if the remaining daylight and a confirmed return make sense; otherwise stay local and use the second day for the cape. On departure morning, check the booked coach or road leg first and avoid adding an unreserved coastal detour.',
        boundary: 'Busselton Jetty is a working structure over open water, not a protected indoor attraction. Wind, swell, maintenance and operator direction can change access. Stay inside marked public areas, follow fishing and train separation rules, and do not step onto wet rocks or closed shore sections for a photograph. The foreshore and jetty are on Wadandi Country; read local interpretation with care and do not treat a visitor route as permission to enter private or culturally restricted places.',
        decisions: [
          ['Busselton base · jetty first', 'Choose Busselton if the Jetty, foreshore and nearby services are the main reason for the stop. It reduces the morning transfer to a timed ticket, but leaves the Cape Naturaliste drive for another day.'],
          ['Dunsborough base · cape first', 'Choose Dunsborough when the headland and coastal walks lead the plan. It avoids starting the cape day in Busselton, but the Jetty becomes a separate town-to-town leg; confirm the ride back before booking a nonrefundable activity.'],
          ['Coach corridor · last mile required', 'SW1 lists Busselton, Dunsborough, Yallingup and Margaret River stops on its timetable, with services varying by date. It is useful between towns, not a hop-on sightseeing service. If the lodge or coast needs another ride, book it before the coach ticket.']
        ],
        fieldLens: {
          label: 'The ticket is a route choice',
          title: 'Separate the foreshore from the jetty product.',
          copy: 'Plan the fixed admission around the operator’s current terms. The shoreline promenade can remain the low-commitment part of the day; a train or underwater visit adds a timed check-in, ticket and weather dependency.',
          notes: [
            ['Walking', 'Choose a jetty walk if the group wants the structure and can handle its exposed, uneven walking surface. Use the operator’s current access and wind notice; do not infer that every visitor product remains available.'],
            ['Train', 'Choose the train to reduce the long walk, especially when the observatory is the destination. Confirm the date, boarding point, accessibility request and current carriage rules directly.'],
            ['Observatory', 'Choose the underwater visit for a booked marine-viewing experience. Allow the posted check-in margin and follow the no-luggage/no-pram rules that apply to the train and observatory.']
          ]
        },
        stages: [
          ['Fix the base and last mile', 'Pick Busselton for the foreshore or Dunsborough for the cape. If travelling by SW1, confirm the exact town stop and a separate ride to the accommodation.'],
          ['Reserve one jetty experience', 'Choose walking, train or observatory access from the operator’s date-specific menu. Check the weather note, required arrival margin, baggage and mobility conditions before buying.'],
          ['Build a quiet shore break', 'Keep the foreshore meal or rest near the Jetty precinct. Add Dunsborough only if its transfer is real and the group has daylight left; do not improvise a long roadside walk.'],
          ['Return to the named stop', 'Check the coach or car plan before leaving the foreshore. The return town and the next day’s Cape Naturaliste departure must match your base, not a map midpoint.']
        ],
        risks: [
          ['Wind or marine conditions', 'The operator states that opening hours are approximate and depend on weather, wind and ocean conditions. Recheck the exact activity on the day; if it is suspended, use the foreshore and a confirmed town meal rather than waiting at the pier.'],
          ['Coach stop mistaken for a shuttle', 'SW1 serves named regional stops on selected services. It does not solve the final ride to a hotel, beach or headland, and a missed onward connection can consume the daylight plan.'],
          ['Luggage at the check-in', 'The Jetty operator says large bags and prams are not permitted on the train or in the observatory and that there is no luggage storage there. Check in or arrange storage before the timed ticket.']
        ],
        duration: 'Use two nights for a measured gateway stop: arrive and settle, devote one day to the Jetty/foreshore, then continue to the next base in daylight. A one-night stop works only when the coach or car arrival leaves a real activity window; choose either the Jetty or the cape, not both. A third night is useful if you want a separate Dunsborough coastal day or weather reserve.',
        combine: 'Keep the Jetty visit separate from Cape Naturaliste if it has a timed observatory or train booking. The two attractions sit in different town nodes and each has its own parking, check-in and weather decision. A short foreshore meal can fit around the Jetty; a cellar-door route belongs on another day with a confirmed sober ride.',
        verify: 'Check the Transwa SW1 service for your travel date and direction; the correct town stop, accommodation transfer and luggage plan; Busselton Jetty admission, accessibility, check-in and marine-weather notice; local foreshore signs; and Main Roads conditions before the next drive. The timetable and operator products are changeable; the source list was checked 13 October 2026.',
        searchSummary: 'Choose Busselton for the foreshore and a timed Jetty visit or Dunsborough for the Cape Naturaliste start. Match Transwa SW1 stops to a booked last-mile ride, and check Jetty ticket, luggage, accessibility and marine-weather rules before fixing the day.',
        searchKeywords: ['Busselton Jetty train underwater observatory booking', 'Busselton Dunsborough base choice nights', 'Transwa SW1 Busselton Dunsborough stop', 'Busselton foreshore luggage storage Jetty', 'Dunsborough Cape Naturaliste transfer', 'Busselton Jetty weather wind access'],
        faq: [
          ['Should I sleep in Busselton or Dunsborough?', 'Stay in Busselton when the Jetty and foreshore are the first priority; stay in Dunsborough when the cape is the first priority. A two-night single base avoids moving bags for one regional activity. Choose by the first fixed booking and the next morning’s route, not by the midpoint on a map.'],
          ['Can I ride the SW1 coach straight to the Jetty or a trailhead?', 'The official timetable lists town stops, including Busselton and Dunsborough, but it does not operate as a local attraction shuttle. Check the service day, exact stop and onward pickup separately before assuming you can reach the Jetty, accommodation or coastal trail on foot.'],
          ['Do I need to book the Jetty train or Observatory?', 'Check the Jetty operator’s live admission menu for your date. The train and Observatory are separate visitor products with current check-in, ticket and access conditions; do not rely on a generic opening time or assume a walk ticket includes both.'],
          ['Can I bring a suitcase to the Jetty train?', 'The operator’s visitor information says large luggage is not allowed on the train or in the Observatory and that there is no luggage storage at the foreshore. Arrange accommodation storage before the booked visit, and recheck the live baggage limits.'],
          ['Can the Jetty and Cape Naturaliste fit into one day?', 'Only if you have a car or named transfers, a short Jetty visit with a confirmed ticket and enough daylight for the headland. The safer plan gives the Jetty day and the cape day separate blocks; drop the cape first if a ticket is fixed.'],
          ['What replaces the Jetty if wind closes an activity?', 'Use the foreshore only where the operator and local signs allow, then choose a confirmed town-based meal or indoor visit. Do not wait on the pier for conditions to improve or treat the beach as automatically safe for swimming.']
        ],
        nearbySources: [
          ['https://busseltonjetty.com.au/visitor-information/', 'Busselton Jetty — visitor, baggage and weather notes'],
          ['https://transwa.wa.gov.au/plan-your-journey/coach-lines/sw1', 'Transwa — SW1 named stops and date-specific services'],
          ['https://www.bom.gov.au/wa/forecasts/', 'Bureau of Meteorology — Western Australia forecasts']
        ],
        sources: [
          ['https://busseltonjetty.com.au/visitor-information/', 'Busselton Jetty — visitor information, check-in and foreshore access'],
          ['https://busseltonjetty.com.au/admission/', 'Busselton Jetty — admission, tickets and accessibility conditions'],
          ['https://transwa.wa.gov.au/plan-your-journey/coach-lines/sw1', 'Transwa — SW1 route, named stops and current timetable'],
          ['https://www.bom.gov.au/wa/forecasts/', 'Bureau of Meteorology — town, wind and coastal forecasts'],
          ['https://www.mainroads.wa.gov.au/travel-information/', 'Main Roads Western Australia — road conditions and closures']
        ],
        reviewDate: '13 October 2026', reviewIsoDate: '2026-10-13'
      }),
      g({
        slug: 'margaret-river-wine-food', name: 'Margaret River Wine & Food', motif: 'producer route with sober return', instrument: 'producer-ledger', imageQuery: 'Margaret River vineyards Western Australia', imageAlt: 'Vineyards in the Margaret River region',
        summary: 'Make Margaret River a planned producer-and-meal day, not a race between cellar doors. Pick one compact north, central or south cluster, set the zero-alcohol driver and return before tasting, then book no more than three purposeful visits with a meal in the middle.',
        orientationTitle: 'Decide who drives before choosing the wineries.',
        orientation: 'Cellar doors and food stops are dispersed across rural roads. A town address does not guarantee a walkable tasting route, late taxi, rideshare or coach at the end of the day. Choose a booked tour, sober driver, or pre-arranged accommodation transfer first; only then select nearby producers and confirm each appointment. Keep the day inside a single geographic cluster so a late tasting does not turn into a long dusk drive.',
        access: 'If arriving by Transwa SW1, match the exact weekday/service, stop and luggage plan to your accommodation; do not expect the regional coach to connect individual cellar doors. Book a local tour with named pickup/drop-off or arrange a designated driver before the first tasting. Keep the driver at zero alcohol for the whole day and place food, water and the return transfer on the same written plan.',
        sequence: 'Start with a short landscape or production-context stop, then make one booked tasting the anchor. Keep the next visit close, allow time for food and water, and cap the day at two or three appointments. Leave time to check in, collect bottles or confirm shipping. Return while it is still light; the coast, caves and Albany leg belong on separate days.',
        boundary: 'Cellar doors are working businesses and vineyards are private agricultural property. Follow booking conditions, group-size limits, photography requests, tasting fees and shipping/collection rules. Respect Wadandi Country and follow the guidance of Traditional Owners and local park managers. Do not enter a vineyard row, forest track or coastal reserve because it appears open from the road.',
        decisions: [
          ['Driver · book first', 'Select a wine-tour pickup, sober designated driver or pre-arranged local transfer before deciding which cellar doors to visit. A tasting booking does not secure the ride home.'],
          ['Cluster · one district', 'Choose a north, central or south group based on the exact addresses. Two well-spaced appointments and a meal often make a better day than three distant bookings.'],
          ['Night · sleep locally', 'Stay in Margaret River for central access, or in the town that matches your booked pickup. An overnight removes the late return to Perth; it does not make the driver or last-mile plan optional.']
        ],
        fieldLens: {
          label: 'A tasting day is a transport plan',
          title: 'The route has a first pour, a fixed meal and a sober return.',
          copy: 'Use the schedule below as a shape, not an advertised opening calendar. Confirm every producer’s actual booking window, tasting terms and pickup with the operator for your date. Keep enough slack that one late appointment does not erase lunch or turn the road home into a night drive.',
          notes: [
            ['Before booking', 'Choose a base and count the real transfer legs. Verify that the tour or driver serves each address and will collect at the final stop; confirm the price, inclusions and cancellation terms directly.'],
            ['At the cellar door', 'Ask about tasting duration, fee, booking size, food options, water, bottle collection and shipping. A walk-in policy or menu can change; do not build a timed lunch around an assumption.'],
            ['After lunch', 'Check in with the driver, drink water, and shorten the afternoon if anyone is tired or unwell. Do not add a fourth stop because it is “on the way”; use the daylight margin to return safely.']
          ]
        },
        stages: [
          ['Contract the sober return', 'Book the tour or driver and verify pickup, all stops, return time and who pays for waiting. If you cannot confirm the trip home, choose a town restaurant day instead of tasting. The nominated driver has no alcohol.'],
          ['Map one producer cluster', 'Choose addresses that share one short road corridor. Check each cellar door’s date-specific opening, appointment and tasting terms directly; aim for two visits plus an optional third only if lunch and return stay intact.'],
          ['Hold the meal in the middle', 'Reserve lunch after the first tasting, allow a real meal break and keep water available. Use the meal as the point to cancel the next stop if timing, heat, fatigue or the group’s pace has drifted.'],
          ['Return before the road gets harder', 'Finish the last booking with enough margin for pickup and daylight. Collect or ship purchases as arranged, then return to the named base. Do not combine this with a long cape walk, show cave, Augusta transfer or drive to Perth.']
        ],
        risks: [
          ['No confirmed driver', 'Dispersed venues make self-guided tasting unsafe without a sober driver. A coach or accommodation transfer may not serve the exact winery or hour. If the pre-booked service falls through, cancel tastings and choose a town-based meal.'],
          ['Appointments, food and bottle handling', 'Opening hours, tasting formats, availability, fees, meal service and shipping conditions change. Confirm each point directly; do not promise a walk-in table, cellar-door opening or same-day delivery.'],
          ['Rural road and fatigue', 'The day includes attention-demanding tasting, rural driving and possibly dark wildlife roads. Use the driver’s stated return time, shorten the itinerary when tired, and never extend the day for a sunset or another producer.']
        ],
        duration: 'Reserve one full day and one or two local nights. Two nights permit arrival, a tasting day and a rested departure; a third night allows a separate coast or cave day without turning the wine itinerary into a rushed multi-stop loop.',
        combine: 'Do not combine this wine route with a long Cape-to-Cape walk, a show cave, the Augusta drive or a same-day return to Perth. Pair it with a town meal on arrival, and keep the driver and tasting bookings inside the chosen cluster.',
        verify: 'Confirm the producer’s date-specific appointment, fees and food; the tour or sober driver’s pickup, included stops and return; the SW1 coach if using it for regional travel; accommodation; fire and road notices; and the weather. Reconfirm the ride before the first pour.',
        searchSummary: 'Plan Margaret River wine and food around a pre-booked zero-alcohol driver, two or three nearby cellar-door appointments, a fixed meal and a daylight return. Transwa SW1 connects regional towns on selected dates but is not a winery shuttle.',
        searchKeywords: ['Margaret River cellar door sober driver', 'Margaret River wine tours pickup', 'Busselton Dunsborough Margaret River SW1 coach', 'Margaret River wineries lunch bookings', 'Margaret River tasting appointments and fees', 'Margaret River rural road daylight return'],
        faq: [
          ['How many cellar doors should I book?', 'Start with two and add a third only if the addresses are close, the provider confirms the timing and the meal and return remain protected. Appointment length and tasting terms vary by producer; do not use a list of venues as a target count.'],
          ['Can I drive after a tasting?', 'Set a sober designated driver before booking and keep that driver at zero alcohol. If nobody can do that, book a professional tour with a confirmed pickup and return. Do not plan to “wait it out” or rely on an unverified rideshare in a rural area.'],
          ['Can I use the Transwa SW1 between wineries?', 'No. SW1 is a regional coach corridor with specific travel-day services and named town stops. Check its live dated timetable for Perth/Busselton/Dunsborough/Margaret River/Augusta connections, then separately book the last mile to every producer.'],
          ['Where should I sleep for a tasting day?', 'Stay near the booked driver pickup or your town-based plan. Margaret River town suits a central producer cluster; Busselton or Dunsborough works only if the tour confirms those pickups and the return. An overnight avoids a long late drive, not the need for sober transport.'],
          ['What if a winery is closed or the tour is cancelled?', 'Do not substitute another venue without checking its opening, booking and ride. Cancel or shorten the route, keep the meal in town, and use the recovered time for a confirmed local food or indoor visit. If the driver cancels, cancel tastings and arrange safe transport before drinking any alcohol.'],
          ['Should I add Cape Naturaliste or a cave on the same day?', 'Keep them separate. A cape hike and show-cave visit each need their own access, weather and timing check. The wine day already has fixed appointment and driver constraints; use another night instead of compressing all three.']
        ],
        nearbySources: [
          ['https://transwa.wa.gov.au/plan-your-journey/coach-lines/sw1', 'Transwa — SW1 regional coach and date-specific times'],
          ['https://www.margaretriver.com/', 'Margaret River Busselton Tourism Association — plan local wine and food visits'],
          ['https://www.bom.gov.au/wa/forecasts/', 'Bureau of Meteorology — WA town forecasts and warnings'],
          ['https://www.mainroads.wa.gov.au/travel-information/', 'Main Roads WA — road conditions and closures']
        ],
        sources: [
          ['https://transwa.wa.gov.au/plan-your-journey/coach-lines/sw1', 'Transwa — SW1 route, authorised town stops and travel-date timetable'],
          ['https://www.margaretriver.com/', 'Margaret River Busselton Tourism Association — regional food, wine and tour planning'],
          ['https://exploreparks.dbca.wa.gov.au/experiences', 'Explore Parks WA — official park, cave, forest, coast and walk information'],
          ['https://www.bom.gov.au/wa/forecasts/', 'Bureau of Meteorology — Western Australia town, wind, fire and coastal forecasts'],
          ['https://www.mainroads.wa.gov.au/travel-information/', 'Main Roads Western Australia — travel conditions, roadworks and closures'],
          ['https://www.australia.com/en/places/perth-and-surrounds/guide-to-margaret-river.html', 'Tourism Australia — Margaret River regional overview']
        ],
        reviewDate: '13 October 2026', reviewIsoDate: '2026-10-13'
      }),
      g({
        slug: 'cape-naturaliste-coast', name: 'Cape Naturaliste & Leeuwin-Naturaliste Coast', motif: 'lighthouse and surf edge', instrument: 'cape-compass', imageQuery: 'Cape Naturaliste lighthouse coast Western Australia', imageAlt: 'Cape Naturaliste lighthouse and coastal landscape',
        summary: 'A headland day choosing lighthouse, short coast walk or whale-season viewpoint according to wind, fire and track condition.',
        orientationTitle: 'Choose a walk length, not a cape-to-cape fantasy.',
        orientation: 'Cape Naturaliste is a headland outing, while the full Cape to Cape Track is a 130 km Class 4 journey between the two lighthouses. Do not use the long-distance track marker as proof that a one-day loop, shuttle or water refill exists. Start at the Cape Naturaliste visitor precinct and decide between the lighthouse/Lightkeepers’ Museum, a short headland trail, or a longer out-and-back toward Sugarloaf Rock. The DBCA page describes the first 3.4 km to Sugarloaf as one-way, Class 2, with boardwalk sections and a separate drop-off point; returning to the same car makes that roughly 6.8 km before any side paths. Set the turnaround and transport before walking.',
        access: 'The lighthouse precinct is reached by road from Dunsborough; Margaret River is a longer southern base. Transwa SW1 lists a Dunsborough town stop, not an assured Cape Naturaliste trail transfer. If travelling without a car, book a tour that names both the trailhead and the return pickup; never depend on an unscheduled lift or road-shoulder walk. DBCA says the lighthouse grounds have a boardwalk around the base, while tower access is guided and the Capes Foundation lists 59 steps. The coast paths are free to access, but tower entry has separate terms. Ask the operator about mobility, weather and current tour availability before building the day around it.',
        sequence: 'Leave the accommodation with water, sun protection and a confirmed way back to the same town. At the visitor area, use the boardwalk or museum first if the group needs a lower-exertion start, then choose one marked path by its live condition and the day’s wind. For a Sugarloaf out-and-back, set a turn time before setting off; do not add a second distant beach because the far-end car park is visible on the map. If you have booked the lighthouse climb, keep its check-in distinct from the walk start and allow the return drive before dusk. Finish at the same base with a planned meal, not a late transfer to Margaret River or Cape Leeuwin.',
        boundary: 'The headland combines sheer limestone edges, exposed boardwalk, beaches and wildlife habitat. Walk only open marked tracks, stay behind barriers and do not descend to rock platforms or enter closed beach access. Whale-season viewing is an opportunity, not a guaranteed sighting; keep the distance required by wildlife guidance and do not use drones where prohibited. Cape Naturaliste is on Wadandi Noongar Country. Read the local interpretation, avoid collecting natural or cultural material and treat a public trail as a route with limits rather than permission to roam.',
        decisions: [
          ['Lighthouse · history and a guided climb', 'Choose the tower and Lightkeepers’ Museum if maritime history is the goal. The climb has 59 steps and a separate check-in; it is not an all-access substitute for the surrounding boardwalk.'],
          ['Headland · short marked walk', 'Choose a short Cape Naturaliste loop or lookout when you want the coast without committing to a long traverse. Keep the route inside the open precinct and turn back if wind or track conditions worsen.'],
          ['Sugarloaf · 3.4 km one way', 'Choose the Class 2 first section of the Cape to Cape Track for a longer coast walk. It is 3.4 km from the lighthouse to Sugarloaf Rock; plan about 6.8 km if walking back to the same car, or arrange an actual return transfer first.']
        ],
        fieldLens: {
          label: 'The route is measured from the return',
          title: 'A one-way coast segment needs a second vehicle plan.',
          copy: 'The trail begins at a lighthouse car park and reaches a different access point at Sugarloaf Rock. That map connection does not create a shuttle. Decide which end you will finish at before you count the walk as an easy family outing.',
          notes: [
            ['Same-car walk', 'Use the lighthouse-to-Sugarloaf segment as an out-and-back. The official 3.4 km one-way distance makes the return about 6.8 km, before any lighthouse tour or extra lookout.'],
            ['Two-end walk', 'Use a one-way version only when a named driver or booked operator will meet you at the other trail access. Agree the pickup time and where the car will be; do not assume a bus or taxi will arrive.'],
            ['Mobility choice', 'DBCA calls the first section Class 2 and says it is suitable for assisted wheelchairs and prams, with boardwalk and benches. Check the current surface and the visitor’s own support needs before treating that description as a guarantee.']
          ]
        },
        stages: [
          ['Read wind, fire and track status', 'Check BOM, DBCA alerts and road notices for the exact headland. Cancel the exposed section if officials close it or the conditions exceed your group’s comfort.'],
          ['Set the route and return', 'Choose tower, short trail or the 3.4 km one-way Sugarloaf segment. For the long option, decide whether you will return on foot or use a named pickup at the other end.'],
          ['Use one coastal section', 'Stay on the marked track, carry water and turn around at the time you set. Whale viewing and calm sea are not promised; do not add an unplanned beach descent.'],
          ['Return to the base in daylight', 'Allow the complete drive or confirmed transfer back to Dunsborough or Margaret River. If the path or lighthouse closes, shift to a confirmed town meal or indoor booking; do not drive on to Cape Leeuwin to rescue the day.']
        ],
        risks: [
          ['One-way distance mistaken for a loop', 'Sugarloaf Rock is a separate access point from the lighthouse. Without a pre-arranged return driver, the 3.4 km segment becomes an out-and-back, not a point-to-point stroll.'],
          ['Wind, swell or fire closure', 'The exposed coast is not a good backup when conditions worsen. Use only an official open access route; if the park or road closes, remain outside and switch to a booked indoor activity or town plan.'],
          ['Wildlife and edge behavior', 'A lookout is not permission to approach a whale, cross a barrier or walk on a wave-washed platform. Keep to the trail and follow posted wildlife and drone restrictions.']
        ],
        duration: 'Allow one full daylight day from Dunsborough; choose three nights in the north if you want a separate Jetty day, cape day and weather reserve without packing daily. A Margaret River base can work for this single outing, but it adds road time at both ends. The walk estimate here is a planning allowance, not a measured visitor duration or a track-service promise.',
        combine: 'Pair a short foreshore stop only when it sits on the same confirmed return route. Do not combine the Cape Naturaliste section with Cape Leeuwin, a tasting circuit or the full Cape to Cape Track; each needs a different transport, time and weather plan. The regional walk is a separate day from the Margaret River Wine & Food guide.',
        verify: 'Check the DBCA Cape Naturaliste visitor page and live alerts, the Capes Foundation tower booking and access guide, the selected trail condition, BOM wind and coastal forecast, fire notices, the Main Roads map and your exact return pickup. Source information was reviewed 13 October 2026; track and operator status must be checked again on the trip date.',
        searchSummary: 'Plan Cape Naturaliste by choosing the lighthouse, a short marked walk or the 3.4 km one-way Sugarloaf section. The return is about 6.8 km on foot without a confirmed pickup; check current track, fire, wind, lighthouse and road access.',
        searchKeywords: ['Cape Naturaliste Sugarloaf Rock walk 3.4 km one way', 'Cape Naturaliste lighthouse 59 steps visitor access', 'Cape Naturaliste trail return shuttle Dunsborough', 'Leeuwin-Naturaliste coast wind fire trail status', 'Cape to Cape Track day section return plan', 'Cape Naturaliste Whale Lookout Walk Trail'],
        faq: [
          ['Is Cape Naturaliste a short part of the Cape to Cape Track?', 'The 130 km Class 4 Cape to Cape Track starts at the Cape Naturaliste car park. The first 3.4 km to Sugarloaf Rock is a Class 2 one-way section. If your car stays at the lighthouse, plan roughly 6.8 km for the out-and-back; the track does not supply your return ride.'],
          ['Can I take a wheelchair or pram on the coast path?', 'DBCA describes the first section to Sugarloaf as suitable for assisted wheelchairs and prams and notes boardwalk and benches. Conditions, surfaces and individual mobility needs still matter. Check the current access note and choose the lighthouse-base boardwalk if the longer path does not fit.'],
          ['Does the lighthouse visit include the tower?', 'Capes Foundation lists guided tower tours, a 59-step climb and a Lightkeepers’ Museum. Confirm current tour times, access needs and entry terms before departure; the surrounding walk trails are a separate activity.'],
          ['Can I walk from Dunsborough after arriving by coach?', 'The SW1 stop is in Dunsborough town and does not guarantee a transfer to the lighthouse or a coastal trailhead. Arrange a car, named tour or return pickup before booking the walk. Do not walk along a rural road shoulder to bridge the gap.'],
          ['What is the weather fallback?', 'If wind, fire or a closure removes the exposed coast section, do not descend to an unprotected beach. Use the lighthouse only if it remains open and the visit suits the conditions, or move to a confirmed town meal or indoor booking. Recheck the official access notice before driving.'],
          ['Can I count on seeing whales?', 'No. Seasonal whale viewing varies by date, sea conditions and animal movement. Choose the lookout for the coastline and use binoculars from the marked path; never approach, pursue or fly a drone toward wildlife.']
        ],
        nearbySources: [
          ['https://exploreparks.dbca.wa.gov.au/site/cape-naturaliste-lighthouse', 'Explore Parks WA — headland tracks and visitor access'],
          ['https://www.capesfoundation.org.au/visit-experiences/cape-naturaliste-lighthouse/', 'Capes Foundation — tower tour, museum and access'],
          ['https://www.bom.gov.au/wa/forecasts/', 'Bureau of Meteorology — wind and coastal forecasts']
        ],
        sources: [
          ['https://exploreparks.dbca.wa.gov.au/site/cape-naturaliste-lighthouse', 'Explore Parks WA — Cape Naturaliste trails, access and safety'],
          ['https://www.capesfoundation.org.au/visit-experiences/cape-naturaliste-lighthouse/', 'Capes Foundation — lighthouse tours, museum and access guide'],
          ['https://transwa.wa.gov.au/plan-your-journey/coach-lines/sw1', 'Transwa — SW1 Dunsborough stop and date-specific timetable'],
          ['https://www.bom.gov.au/wa/forecasts/', 'Bureau of Meteorology — wind, town and coastal forecasts'],
          ['https://www.mainroads.wa.gov.au/travel-information/roadworks-closures/', 'Main Roads Western Australia — roadworks, fire and road closures'],
          ['https://exploreparks.dbca.wa.gov.au/plan-your-activity', 'Explore Parks WA — current track, fire and park-alert checks']
        ],
        reviewDate: '13 October 2026', reviewIsoDate: '2026-10-13'
      }),
      g({
        slug: 'boranup-caves-augusta', name: 'Boranup Forest, Caves & Augusta', motif: 'karri-to-cave depth line', instrument: 'forest-cave-section', imageQuery: 'Boranup karri forest Margaret River Western Australia', imageAlt: 'Tall karri trees in Boranup Forest',
        summary: 'A south-region chapter connecting one booked show cave, karri forest and Augusta without stacking underground fatigue and a long drive.',
        orientationTitle: 'Let the cave booking set the southern road.',
        orientation: 'This is the south-of-Margaret-River day, not a list of every cave in the region. Jewel Cave is about 45 km south of Margaret River by Bussell Highway and Caves Road; DBCA describes a one-hour guided visit through three chambers, plus a separate 30-minute self-guided walk beneath karri trees. That gives the day a fixed underground anchor and a modest forest add-on, not room for a second cave, a long hike and a late town transfer. Ngilgi Cave is a different northern choice: its self-guided route includes 350 steps, so it belongs on a Yallingup/Cape Naturaliste day rather than being tacked onto Augusta.',
        access: 'A car is the straightforward way to join Jewel Cave, a forest access point and Augusta because each lies on a different leg. Transwa SW1 lists an Augusta town stop on selected services, but does not take visitors to the cave or provide a last-mile park shuttle. If not driving, book an operator that names the cave, forest stop and return pickup before purchasing admission. Jewel Cave bookings are made through Capes Foundation; its current listing describes a fully guided one-hour tour with bookings essential. Ask about steps, darkness, standing time and mobility directly rather than inferring access from a general park listing. Keep the road leg in daylight and make the cave reservation cancellable or movable if your arrival is delayed.',
        sequence: 'On the prior evening, confirm the cave time, road status, fuel, accommodation check-in and the forest option that remains open. Leave from Margaret River with enough slack to reach Jewel Cave without turning the scenic drive into a race. Complete the booked cave visit, then pause above ground; the DBCA listing identifies a separate short karri walk and café at the cave site, so use that rather than adding a distant forest detour by default. Continue to Augusta only if the check-in and remaining daylight still work. If overnighting in Augusta, leave Cape Leeuwin for its own access and weather check; otherwise return north before the drive becomes an evening wildlife risk.',
        boundary: 'Karri forest, cave formations and visitor infrastructure are fragile. Stay on marked routes, do not touch cave surfaces, leave no food or waste, and follow any footwear-cleaning or biosecurity instructions. Boranup forest access may be restricted by fire or maintenance; never enter a closed road through another gate. These sites are on Wardandi Country. Use the park’s own cultural interpretation, keep noise low and do not remove plants, rocks or cultural material.',
        decisions: [
          ['Jewel Cave · booked guided visit', 'Choose Jewel when you want a defined underground experience near Augusta. The official listing gives a one-hour, fully guided tour and says bookings are essential; its three chambers create a fixed appointment that should anchor the day.'],
          ['Forest first · no cave booking', 'Choose the karri landscape and a short open park walk if the cave is sold out, does not suit the group or has an access mismatch. A forest road stop is still subject to fire, maintenance and road notices.'],
          ['Ngilgi · a separate northern day', 'Ngilgi Cave is self-guided and includes 350 steps; the above-ground Ancient Lands Experience is a different, wheelchair-accessible option. It is a northern Yallingup choice, not a sensible add-on to an Augusta cave reservation.']
        ],
        fieldLens: {
          label: 'One cave, one forest stop',
          title: 'Underground time is only half of the movement.',
          copy: 'A cave appointment fixes the route and creates a fatigue break before driving. Add only the nearby forest walk that is open and fits the group; the second cave belongs to a different day and a different geographic cluster.',
          notes: [
            ['Jewel Cave', 'DBCA places its entry about 45 km south of Margaret River via Bussell Highway and Caves Road. Capes Foundation describes a fully guided one-hour tour with bookings essential. Check the exact time and access guide directly.'],
            ['Boranup', 'Use one signed forest stop after the cave, not a full forest circuit. Look for the official park notice at the destination and follow the road surface and fire signs; do not assume a map line means the track is open.'],
            ['Augusta', 'Keep Augusta as the overnight or service point after the cave, not another attraction race. If the check-in, road or weather no longer fits, return to the confirmed base and move the lighthouse to another day.']
          ]
        },
        stages: [
          ['Book the actual cave', 'Choose Jewel for the Augusta corridor and confirm the guided slot, mobility conditions, fees and cancellation terms. Do not plan around an unconfirmed walk-in opening.'],
          ['Check the southern roads', 'Review Main Roads, BOM, park alerts and fire information for the exact route. Set fuel, accommodation and last-light limits before leaving Margaret River.'],
          ['Rest above ground', 'After the cave, take the listed karri walk or café break if open. Add one signed forest stop only when its access and fire status are clear.'],
          ['Reach Augusta or return in daylight', 'Use Augusta as a separate overnight if the day’s cave and road legs leave a narrow margin. If a closure or delay removes the plan, cancel the detour and use a confirmed town meal or indoor booking.']
        ],
        risks: [
          ['Booking and mobility mismatch', 'A guided cave tour is a timed product; stairs, darkness, standing and group pace may not suit everyone. Confirm directly with Capes Foundation and do not substitute the accessible above-ground Ancient Lands experience for cave access.'],
          ['Fire or road closure', 'A forest road or park can close at short notice. Obey the official closure and signs; do not search for an alternate informal entry. Replace the day with a confirmed town plan, not another remote drive.'],
          ['Cave plus road fatigue', 'The guided visit, post-cave adjustment and winding southern roads use attention. Keep the forest stop short, protect a meal and check-in buffer, and do not extend the route for sunset or another cave.']
        ],
        duration: 'Reserve a full daylight day and preferably an Augusta or Margaret River overnight. An Augusta night suits a confirmed Jewel booking and a separate Cape Leeuwin visit; staying in Margaret River is simpler for one base but means a longer return road. The overnight recommendation is an editorial planning allowance, not a measured drive-time guarantee.',
        combine: 'Pair Jewel Cave with only the short cave-site karri walk or one nearby signed forest stop. Do not combine it with Ngilgi, Cape Naturaliste, a cellar-door tasting circuit or the full Cape Leeuwin visit on the same schedule. Move the base in daylight and avoid checking in between fixed appointments.',
        verify: 'Confirm Jewel Cave’s exact date, tour and mobility information with Capes Foundation; check Explore Parks WA alerts and the listed cave/forest access; read BOM forecasts, Emergency WA fire warnings and Main Roads road closures; then confirm fuel, lodging and check-in. Ngilgi’s stair count and above-ground access are a separate source check. The official source list was checked 13 October 2026.',
        searchSummary: 'Anchor the Augusta day on one booked Jewel Cave tour, then add only the cave-site karri walk or one open Boranup forest stop. Ngilgi is a separate northern route with 350 steps; verify cave access, fire notices, road and daylight before leaving.',
        searchKeywords: ['Jewel Cave Augusta one-hour guided tour booking', 'Boranup Forest park road fire access', 'Margaret River to Augusta Jewel Cave transport', 'Ngilgi Cave 350 steps accessibility Ancient Lands', 'Augusta Cape Leeuwin overnight base', 'Southwest WA cave booking and road closures'],
        faq: [
          ['Which cave fits an Augusta day?', 'Jewel Cave is the south-region choice described by DBCA as a one-hour guided visit through three chambers; Capes Foundation says bookings are essential. Ngilgi is a self-guided northern cave with 350 steps. Choose one geographic cluster and confirm its date-specific access.'],
          ['Can I visit Jewel Cave without a car?', 'The Transwa SW1 timetable lists an Augusta town stop, but not a cave shuttle. Book a tour or transfer that confirms the cave pickup and return, or arrange a vehicle; do not assume a coach stop is the last mile.'],
          ['Can I add Boranup Forest after the cave?', 'Yes as a short, separately verified stop. DBCA lists a 30-minute self-guided walk beneath karri at Jewel Cave, which is the lowest-transfer add-on. Any other forest road or path must be open and safe for the fire and weather conditions.'],
          ['Is the Ngilgi Cave path accessible?', 'Capes Foundation describes the underground self-guided route as 350 steps. The above-ground Ancient Lands Experience is a distinct wheelchair-accessible option, not a guarantee that the cave itself is accessible. Contact the operator about the actual visitor’s needs.'],
          ['What if the cave or forest closes?', 'Do not enter through another gate or replace a closure with an unverified road. Move the appointment only after checking the operator, use a confirmed town meal or indoor visit, and preserve the same base until the official notice changes.'],
          ['Should I sleep in Augusta or Margaret River?', 'Choose Augusta when a confirmed southern cave or lighthouse day and check-in work better from there. Choose Margaret River for one central base and accept the longer daylight return. If either choice forces driving after dark, add a night or remove a stop.']
        ],
        nearbySources: [
          ['https://exploreparks.dbca.wa.gov.au/site/jewel-cave', 'Explore Parks WA — Jewel Cave tour and access'],
          ['https://www.capesfoundation.org.au/visit-experiences/jewel-cave/', 'Capes Foundation — Jewel Cave bookings and visitor access'],
          ['https://www.mainroads.wa.gov.au/travel-information/roadworks-closures/', 'Main Roads Western Australia — road and fire closures']
        ],
        sources: [
          ['https://exploreparks.dbca.wa.gov.au/site/jewel-cave', 'Explore Parks WA — Jewel Cave tour, karri walk and road access'],
          ['https://www.capesfoundation.org.au/visit-experiences/jewel-cave/', 'Capes Foundation — Jewel Cave bookings and current visitor conditions'],
          ['https://exploreparks.dbca.wa.gov.au/site/ngilgi-cave', 'Explore Parks WA — Ngilgi Cave and Wardanup Trail information'],
          ['https://www.capesfoundation.org.au/visit-experiences/ngilgi-cave/', 'Capes Foundation — Ngilgi Cave steps and Ancient Lands access'],
          ['https://exploreparks.dbca.wa.gov.au/plan-your-activity', 'Explore Parks WA — park alerts, track and fire planning'],
          ['https://transwa.wa.gov.au/plan-your-journey/coach-lines/sw1', 'Transwa — SW1 regional stops and date-specific timetable'],
          ['https://www.bom.gov.au/wa/forecasts/', 'Bureau of Meteorology — Western Australia forecasts'],
          ['https://www.mainroads.wa.gov.au/travel-information/roadworks-closures/', 'Main Roads Western Australia — roadworks and closures'],
          ['https://www.emergency.wa.gov.au/', 'Emergency WA — current bushfire warnings and incidents']
        ],
        reviewDate: '13 October 2026', reviewIsoDate: '2026-10-13'
      }),
      g({
        slug: 'albany-torndirrup', name: 'Albany & Torndirrup', motif: 'southern ocean edge', instrument: 'ocean-aperture', imageQuery: 'Torndirrup National Park Albany Western Australia coast', imageAlt: 'Granite coast and Southern Ocean in Torndirrup National Park',
        summary: 'A far-south destination linking Albany history to Torndirrup’s exposed granite coast, not a detour from Margaret River.',
        orientationTitle: 'Put Albany on the calendar as its own region.',
        orientation: 'Albany is the far-south leg, not the last stop on a Margaret River day. The traveler’s first decision is how to cross the region: drive from the southwest with a daylight transfer plan, or use a date-specific Transwa GS coach from Perth and separately solve the local leg. The GS services have different routes and timetables; a coach ticket to Albany does not deliver you to Torndirrup or the heritage park. Sleep in Albany town for services and a clear morning departure. Two nights are a minimum for one arrival, one full city/park day and a departure; three nights make it possible to separate history, coast and weather without turning the Gap into a drive-by.',
        access: 'With a car, keep the Margaret River-to-Albany transfer in a dedicated daylight block and do not put a cave booking, tasting or headland walk on that same move. Check fuel, roadworks, weather and lodging check-in before leaving. Without a car, compare the Transwa GS1/GS2/GS3 date-specific routes, then arrange a named Albany transfer or guided coastal tour in advance; local TransAlbany routes are not proof of service to each Torndirrup viewpoint. The National Anzac Centre is inside Princess Royal Fortress on Mount Clarence and offers its own visitor and access information. Reserve that visit separately from the park road rather than relying on a last-minute ride.',
        sequence: 'Arrive in Albany and settle before choosing a remote coast departure. Use one block for the National Anzac Centre and the Princess Royal Fortress grounds if that history is a priority; its official access page describes step-free interior access, while some heritage buildings and the steep Convoy Walk require a different mobility decision. On a separate daylight block, drive or take your confirmed tour to Torndirrup. Choose the Gap/Natural Bridge platforms for a concentrated coast visit, Stony Hill for the short loop and all-access walkway, or Bald Head only as the day’s strenuous hike. Return to town before darkness and keep an indoor or town-based reserve if wind, swell, fire or an alert removes the coast.',
        boundary: 'Albany and Torndirrup are on Menang Noongar Country. Treat the National Anzac Centre as a specific memorial and historical institution, not a complete account of local history. Read DBCA interpretation about Menang Country, follow closures and barriers, and do not collect objects or enter a closed headland. Southern Ocean viewpoints are exposed places; a platform over the sea does not make the water or rock shelf safe. Stay on the formed paths even when conditions look calm.',
        decisions: [
          ['Two nights · minimum transfer plan', 'Use two nights only if arrival leaves one complete daylight block for the selected city or coast plan. If arriving late by road or coach, do not count that evening as a visit day; add a night or remove the distant park.'],
          ['Three nights · separate the layers', 'Use three nights for a transfer day, a deliberate Albany/heritage block and a separate Torndirrup weather window. This is the better choice if you want both National Anzac Centre and a coastal walk without rushing.'],
          ['Town, coach or tour', 'The Albany town base keeps food, lodging and the regional coach stop in one service area. A car adds freedom at Torndirrup; a booked local tour can replace driving if it confirms both pickup and return. Neither a coach ticket nor a town bus automatically reaches every park viewpoint.']
        ],
        fieldLens: {
          label: 'Select the coast effort before the road',
          title: 'Torndirrup has a lookout, a short loop and a full hike.',
          copy: 'The park is not one uniform walking day. Choose the route whose physical demand and exposure match the forecast, then leave room to retreat to Albany without adding another headland.',
          notes: [
            ['The Gap and Natural Bridge', 'Use the formal viewing platforms for a short, concentrated look at the Southern Ocean. DBCA notes the sea and wind change the experience; closures and barriers still control access.'],
            ['Stony Hill', 'DBCA describes a 500-metre loop and a separate 72-metre all-access walkway. This is the short-view choice, subject to the current road, weather and park notice.'],
            ['Bald Head', 'Treat the challenging peninsula trail as a dedicated hike with its own fitness, weather and return check. Do not add it after a museum visit or assume the park’s short viewpoints are its turnaround point.']
          ]
        },
        stages: [
          ['Choose the regional transfer', 'Book the daylight road leg or check the exact Transwa GS service. Confirm the Albany arrival, luggage, overnight address and the next day’s local ride before leaving Margaret River or Perth.'],
          ['Use Albany as a real base', 'Check in and keep the first evening in town. Choose the National Anzac Centre only if its history and visit format fit; read the access guide and reserve a substantial museum block rather than tagging it onto sunset.'],
          ['Select one Torndirrup route', 'Check the park notice, forecast and entry conditions, then choose The Gap/Natural Bridge, Stony Hill or a full Bald Head hike. Do not combine a strenuous trail with the museum and multiple coast stops.'],
          ['Keep the coast day reversible', 'Return to Albany with daylight and a meal plan. If wind, swell, fire or closure removes the park, use the museum if still open or a confirmed town visit; never look for an unofficial cliff or beach entrance.']
        ],
        risks: [
          ['Coach arrival without a park transfer', 'Transwa GS coaches serve Albany from Perth by several route patterns, but a regional arrival does not supply a ride to Torndirrup. Confirm local pickup, accessible transport and the return before choosing the no-car itinerary.'],
          ['Southern Ocean exposure', 'Swell and wind can make cliffs, rock shelves and beaches unsafe even when the town looks calm. Stay behind barriers, obey the park notice and shorten the visit at the first sign that conditions have changed.'],
          ['Too much on a transfer day', 'The long drive, museum, coast and sunset do not belong in one sequence. A late arrival or road delay consumes the coast window; keep the base and move the outing to the next day instead of driving in the dark.']
        ],
        duration: 'Allow at least two Albany nights, with three recommended when you want both the heritage centre and a distinct Torndirrup day. Add another night if the coast is the trip’s main purpose or the transfer schedule leaves little daylight. These are editorial planning estimates; no drive time, coach departure or museum duration is guaranteed here.',
        combine: 'Keep Albany separate from Margaret River and Augusta in the route plan. The transfer is its own stage; National Anzac Centre and Torndirrup also deserve separate blocks. If weather compresses the trip, keep the Albany base and choose the indoor history or the officially open coast option rather than attempting both on a departure day.',
        verify: 'Check Transwa GS1/GS2/GS3 for the exact coach day and route, or Main Roads before a long drive; arrange the Albany lodging and local ride to Torndirrup; confirm National Anzac Centre access; read DBCA Torndirrup alerts, park fees and trail conditions; and check BOM coastal forecasts, Emergency WA warnings and fire restrictions. DBCA lists The Gap/Natural Bridge as reopened in its current park information, but recheck the live notice before travel. Sources were reviewed 13 October 2026.',
        searchSummary: 'Treat Albany as a separate far-south region: use two nights minimum or three to separate the transfer, National Anzac Centre and Torndirrup. Choose the Gap platforms, Stony Hill short loop or Bald Head hike by effort and conditions; arrange a local park ride if arriving by coach.',
        searchKeywords: ['Albany Torndirrup two or three nights base', 'Transwa GS1 GS2 GS3 Albany coach route', 'Albany National Anzac Centre access visit', 'Torndirrup The Gap Natural Bridge Stony Hill Bald Head', 'Albany coach transfer to Torndirrup park', 'Albany coast wind swell fire park alerts'],
        faq: [
          ['Can I visit Albany from Margaret River in a day?', 'Do not plan it as a same-day extension. The transfer needs its own daylight block; the regional base then needs a separate visit window for Albany or Torndirrup. Stay at least two nights and add a third if you want both history and coast.'],
          ['What is the no-car route to Torndirrup?', 'Use a Transwa GS coach only for the date-specific Perth-to-Albany route, then arrange a named local tour or transfer to the park and a confirmed return. Do not assume a coach or TransAlbany town service runs to the Gap, Stony Hill or Bald Head.'],
          ['Which Torndirrup walk fits a short visit?', 'The Gap and Natural Bridge have formal viewing platforms. DBCA describes Stony Hill as a 500-metre loop with a separate 72-metre all-access walkway. Bald Head is the strenuous full hike and should be the day’s main activity, not an add-on after the museum.'],
          ['Is the National Anzac Centre an indoor weather backup?', 'It is a distinct museum visit at Princess Royal Fortress, and the official access page describes step-free entrance and interior access. Check its current opening and ticket information; heritage buildings and the steep Convoy Walk have different access conditions.'],
          ['What if The Gap or the coastal track is closed?', 'Respect the closure and do not use another cliff or beach entry. If the National Anzac Centre is open and fits the group, use its indoor history visit; otherwise stay in Albany town and move the coast to a verified open window.'],
          ['Can I choose Bald Head and The Gap on the same day?', 'Only if the exact trail, fitness, daylight and transfer support that plan; for most trips, choose one. DBCA describes Bald Head as a challenging long walk. Pair it with neither the museum block nor a chain of separate viewpoints.']
        ],
        nearbySources: [
          ['https://exploreparks.dbca.wa.gov.au/park/torndirrup-national-park', 'Explore Parks WA — Torndirrup trails, park fees and alerts'],
          ['https://www.nationalanzaccentre.com.au/visit', 'National Anzac Centre — visit and access information'],
          ['https://www.transwa.wa.gov.au/plan-your-journey/coach-lines/gs1', 'Transwa — Perth–Albany GS coach routes']
        ],
        sources: [
          ['https://exploreparks.dbca.wa.gov.au/park/torndirrup-national-park', 'Explore Parks WA — Torndirrup access, trails, fees and current park information'],
          ['https://www.nationalanzaccentre.com.au/visit', 'National Anzac Centre — visitor, heritage and access information'],
          ['https://www.transwa.wa.gov.au/plan-your-journey/coach-lines/gs1', 'Transwa — GS1/GS2/GS3 Perth–Albany coach routes and date-specific timetable'],
          ['https://www.transregional.wa.gov.au/Timetables/TransAlbany', 'Transregional — TransAlbany local routes and timetables'],
          ['https://www.bom.gov.au/wa/forecasts/', 'Bureau of Meteorology — Albany, wind and coastal forecasts'],
          ['https://www.mainroads.wa.gov.au/travel-information/roadworks-closures/', 'Main Roads Western Australia — roadworks and closures'],
          ['https://www.emergency.wa.gov.au/', 'Emergency WA — current bushfire warnings and incidents']
        ],
        reviewDate: '13 October 2026', reviewIsoDate: '2026-10-13'
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
