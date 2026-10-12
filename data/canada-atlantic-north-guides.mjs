import { canadaGuide, defineCanadaCluster } from './canada-guide-builder.mjs';

const g = (definition) => canadaGuide(definition);

export const canadaAtlanticNorthClusters = [
  defineCanadaCluster({
    slug: 'halifax-nova-scotia', name: 'Halifax & Nova Scotia', region: 'Nova Scotia', band: 'atlantic', family: 'atlantic-chart',
    reviewDate: '12 October 2026', isoDate: '2026-10-12',
    label: 'Atlantic gateway · harbour, coves and highland road', tagline: 'the coast is several trips, not one loop.',
    hubIntro: 'Halifax is a walkable harbour city; Peggy’s Cove/Lunenburg and Cape Breton are separate road systems. Keep the city, South Shore and Cabot Trail as distinct days so ocean weather and driving time stay visible.',
    stay: 'Three nights in Halifax gives the city two unhurried days plus one flexible choice nearby. Add at least one South Shore night if Lunenburg is a main stop. Give Cape Breton two or more nights and make the Halifax-to-park drive its own transfer day; Parks Canada currently estimates about five hours from Halifax to the Highlands park.',
    transfer: 'Halifax is the urban, largely walkable base; confirm the current airport-to-city connection before booking lodging. Halifax Transit buses and the Halifax–Dartmouth ferry serve the city, but neither is a substitute for a confirmed car, tour or regional transfer on the South Shore and Cape Breton legs. Use Nova Scotia 511 for current road events and closures.',
    season: 'Coastal visibility and footing can change with wind, fog and surf in any month. Checked 12 October 2026: Skyline Trail parking reservations are required through 25 October; trail closures, staffed services and daylight change by season. Recheck the exact Parks Canada and road notices rather than following a fixed provincial loop.',
    fallback: 'If the coast is rough, keep a Halifax day in Halifax, move Peggy’s Cove viewing to the designated deck and spend the longer block in Lunenburg, or choose a sheltered Cape Breton community stop instead of exposed trail or lookout time. Do not turn a missed viewpoint into a late, rushed return drive.',
    sources: [
      ['https://www.halifax.ca/transportation/halifax-transit', 'Halifax Transit — bus and harbour ferry information'],
      ['https://parks.canada.ca/lhn-nhs/ns/halifax/visit', 'Parks Canada — Halifax Citadel visit and access'],
      ['https://511.novascotia.ca/', 'Nova Scotia 511 — current road and traffic notices'],
      ['https://parks.canada.ca/pn-np/ns/cbreton/visit', 'Parks Canada — Cape Breton Highlands access and visitor information']
    ],
    firstVisitPlan: {
      heading: 'Choose the trip shape by its longest drive',
      intro: 'The options below are alternatives for different trip lengths, not three days to stack onto a single Halifax base. Keep the South Shore and Cape Breton as separate overnight branches.',
      days: [
        ['Two or three nights · Halifax base', 'Keep the city day for the waterfront, one maritime institution and Citadel Hill. Use the remaining full day for either an urban Dartmouth ferry loop or one nearby coast excursion; leave Lunenburg and Cape Breton for a longer trip.'],
        ['Four or five nights · city plus South Shore', 'Start with two or three Halifax nights, then move to Lunenburg for the South Shore. Choose whether Peggy’s Cove is a first stop or its own shorter excursion; protect daylight for the return and check parking before setting out.'],
        ['Six nights or more · add Cape Breton', 'Treat the drive to Cape Breton Highlands as a separate day, sleep on the island, then choose one park side at a time. Parks Canada places Chéticamp at the west entrance and Ingonish at the east; do not plan both as a rushed Halifax day trip.']
      ]
    },
    faq: [
      ['Can I explore Nova Scotia without a car?', 'Halifax’s centre and public ferry can support a city-focused stay. The selected South Shore and Cape Breton stops are dispersed; book a specific tour or regional connection with pickup, return and cancellation terms before relying on public transport.'],
      ['Can I fit Peggy’s Cove, Lunenburg and Cape Breton into one day?', 'They do not belong to one sightseeing day. Peggy’s Cove and Lunenburg already make a substantial South Shore road day; Cape Breton Highlands is a separate island transfer, with Parks Canada estimating about five hours from Halifax to the park.'],
      ['How should I use a short Halifax stay?', 'Choose one urban day and one coast or Dartmouth day. The harbour museums and Citadel have different stories, while a ferry crossing is its own small trip; avoid leaving Halifax for a long road leg on a day with a flight or rail departure.'],
      ['What should I check on the day?', 'Review Halifax Transit for the exact bus or ferry service, Tourism Nova Scotia’s Peggy’s Cove parking and safety advice, Nova Scotia 511 for road notices, and Parks Canada for current Citadel, trail, reservation and facility status.']
    ],
    guides: [
      g({
        slug: 'halifax-waterfront-citadel', name: 'Halifax Waterfront & Citadel', instrument: 'harbour-to-hill section', layout: 'harbour-ledger',
        imageQuery: 'Halifax waterfront Citadel Nova Scotia Canada', imageAlt: 'Halifax skyline from Alderney Landing across the harbour, with Citadel Hill just right of the towers',
        summary: 'Walk from Halifax’s working harbourfront up to Citadel Hill, but choose one major indoor history stop on the way. The ferry to Alderney Landing is a separate Dartmouth loop; its live timetable should decide whether it fits.',
        access: 'Downtown is walkable but the Citadel climb is uphill. Start around Lower Water Street, then use the signed city streets to reach the Parks Canada entrance at 5425 Sackville Street. Halifax Transit’s ferry links the city with Alderney Landing in Dartmouth, but check that departure and return service before treating it as part of the day.',
        tradeoff: 'The harbour boardwalk, Maritime Museum of the Atlantic and Canadian Museum of Immigration at Pier 21 tell distinct maritime and migration stories; the Citadel adds the hilltop fort and military interpretation. Choose one museum plus the Citadel instead of trying to enter every institution.',
        fallback: 'In rain or strong wind, spend the indoor block at one museum, take only a short waterfront segment and decide separately whether the Citadel grounds and interior program suit the conditions. Parks Canada keeps the site open year-round, but programs and services change by season.',
        duration: 'Allow a full city day. Parks Canada asks first-time Citadel visitors to reserve at least two hours there; give the museum you choose its own block and include a slower downhill return.',
        combine: 'Dartmouth works as the optional ferry loop after the Halifax route, especially if Alderney Landing is the actual destination. Do not attach Peggy’s Cove, Lunenburg or Cape Breton to this walking day.',
        verify: 'Checked 12 October 2026: Parks Canada lists the Citadel as central, accessible on foot or by car, open year-round with seasonal programs, and recommends at least two hours for a first visit. Verify its access, easier-access guidance and Halifax Transit’s exact ferry timetable for your date.',
        routeChoices: {
          heading: 'Choose one history anchor before the hill',
          intro: 'The waterfront institutions are not interchangeable stops. Pick the story that matters most, then protect enough energy for the uphill Citadel visit.',
          options: [
            ['Harbour', 'Maritime Museum of the Atlantic', 'Choose this for ships, the port and Nova Scotia’s seafaring history. It sits on the waterfront route; check the museum calendar before making it the day’s indoor anchor.'],
            ['Migration', 'Canadian Museum of Immigration at Pier 21', 'Choose this for arrival, migration and family-history interpretation. It is farther along the south waterfront, so use it instead of doubling back between several museums.'],
            ['Hilltop', 'Halifax Citadel National Historic Site', 'Make this the main visit when you want the fort and harbour outlook. The walk climbs from the waterfront; check seasonal programs and easier-access information before setting a pace.']
          ]
        },
        routeEyebrow: 'Harbour-to-hill sequence', routeHeading: 'One waterfront museum, then Citadel Hill', routeStageLabels: ['Orient', 'Choose', 'Climb', 'Return'],
        routeSourcesHeading: 'Live checks for this walking day',
        routeSourcesNote: 'Parks Canada gives the Citadel location, first-visit time allowance, seasonal program limits and accessibility planning. Halifax Transit publishes bus and ferry service separately; the two schedules must match your chosen return.',
        sources: [
          ['https://parks.canada.ca/lhn-nhs/ns/halifax/visit', 'Parks Canada — Halifax Citadel visit, hours and access'],
          ['https://parks.canada.ca/lhn-nhs/ns/halifax/visit/accessibilite-accessibility', 'Parks Canada — Citadel accessibility and easier-access visits'],
          ['https://maritimemuseum.novascotia.ca/', 'Maritime Museum of the Atlantic — collections and current events'],
          ['https://pier21.ca/visit/plan-your-visit', 'Canadian Museum of Immigration at Pier 21 — visit information']
        ],
        faq: [
          ['How long should I spend at the Citadel?', 'Parks Canada recommends a minimum of two hours for a first visit. Allow more if you want the full interpretation; then add the steep walking time between the waterfront and hilltop.'],
          ['Can I visit the Maritime Museum, Pier 21 and the Citadel in one day?', 'They can be combined only as a long day, and entering all three leaves little space for the waterfront itself. Choose either the Maritime Museum or Pier 21, then keep the Citadel as the main second stop.'],
          ['Is the walk to Citadel Hill accessible?', 'The route rises from the harbour, so grade, weather and mobility needs matter. Parks Canada publishes easier-access and facility guidance for the site; read it before choosing the approach, and do not assume the same route suits every visitor.'],
          ['Should I take the ferry to Dartmouth?', 'Use it as an optional loop to Alderney Landing when the live sailing schedule and your remaining daylight fit. It is a separate crossing with its own terminals, fare and return timing, not a shortcut to the Citadel.']
        ],
        stages: [
          ['Begin on Lower Water Street', 'Use the Halifax Waterfront Boardwalk to orient yourself to the harbour and ferry terminal. Decide which museum you are entering before walking south; a waterfront stroll is the connecting path, not a substitute for the site you came to see.'],
          ['Choose one indoor story', 'At the Maritime Museum of the Atlantic, focus on ship and port history; at Pier 21, follow the migration and arrival story. Check the chosen museum’s hours and last admission before leaving the hotel, since their calendars do not determine each other.'],
          ['Climb to 5425 Sackville Street', 'Continue inland to the Citadel entrance and keep the hill as the day’s second anchor. Parks Canada recommends at least two hours for a first visit. Grounds remain open year-round, while programs and visitor services shift with the season.'],
          ['Return by a route you can finish', 'Walk back down to the central grid for dinner, or cross to Alderney Landing only if the ferry’s remaining departures make a round trip practical. If wind, grade or time has reduced your margin, finish in Halifax and save Dartmouth for another visit.']
        ],
        watch: [
          ['The hill changes the day', 'The Citadel sits above the waterfront. A short map distance still includes a climb, exposure to wind and a downhill return; pace the museum choice around that effort.'],
          ['Programs have separate seasons', 'Parks Canada lists the site as year-round but notes that programs and services vary. Confirm what will actually be operating instead of assuming reenactments or all buildings are available.'],
          ['Ferry is a timed branch', 'The Halifax–Dartmouth ferry is useful only when its terminal, current sailing and return align with the walking route. Recheck service notices before you cross.']
        ]
      }),
      g({
        slug: 'peggys-cove-lunenburg', name: 'Peggy’s Cove & Lunenburg', instrument: 'coastal road margin sheet', layout: 'roadbook',
        imageQuery: 'Peggy Cove Lunenburg Nova Scotia coast', imageAlt: 'Peggy’s Point Lighthouse above granite and the designated coastal viewing path at Peggy’s Cove',
        summary: 'Make Peggy’s Cove the weather- and parking-sensitive stop, then give Old Town Lunenburg time for its harbour and surviving 1753 street grid. This is a substantial South Shore road day from Halifax; an overnight in Lunenburg is the calmer choice.',
        access: 'A car or a booked tour is the practical link for these dispersed stops. Tourism Nova Scotia directs Halifax drivers to Highway 333 from Highway 103; the same visitor page currently flags 11 a.m.–3 p.m. as a peak parking window. Confirm the route, tour pickup, parking rules and return before leaving.',
        tradeoff: 'Peggy’s Cove is an active fishing village and exposed Atlantic landscape; the designated viewing deck gives a safer way to see the lighthouse than exploring wet rocks. Lunenburg is a different visit: UNESCO describes a planned 1753 town whose rectangular layout and wooden architecture remain visible in its lived streets.',
        fallback: 'If surf, fog or strong wind makes the rocks a poor choice, skip exposed granite and use Peggy’s Cove’s designated viewing deck or leave the stop out. Keep the longer block for Lunenburg’s street grid and an open indoor institution; never divert onto private property or blocked road shoulders.',
        duration: 'From Halifax, set aside a full day for Peggy’s Cove and Lunenburg with no Cape Breton add-on. One night in Lunenburg lets you walk the town before or after the busiest road period and protects a separate weather window.',
        combine: 'Pair with a Halifax night before or after, or continue as a dedicated South Shore stay. Do not add Cape Breton or a fixed airport departure to the same sightseeing day.',
        verify: 'Checked 12 October 2026: Tourism Nova Scotia lists Highway 333 access, limited peak-period parking guidance, an accessible viewing deck and ocean-safety warnings; UNESCO records Lunenburg’s 1753 planned grid. Recheck road and weather notices, parking, public-area access and the specific museum’s seasonal hours.',
        routeChoices: {
          heading: 'Decide how much coast belongs in the day',
          intro: 'These choices trade a lighthouse stop against time in the historic town. There is no need to collect every South Shore pin on one Halifax round trip.',
          options: [
            ['Shorter', 'Peggy’s Cove and return', 'Choose this when the lighthouse and coast are the priority or when you have only half a day. Leave the second half in Halifax instead of starting another long drive late.'],
            ['Full road day', 'Peggy’s Cove then Lunenburg', 'Start early, use Highway 333 to the cove and keep the town visit as the longer block. Check current roads and event traffic before assuming the map’s shortest line is fastest.'],
            ['Slower', 'Sleep in Lunenburg', 'Choose this when the preserved town and harbour matter more than a quick photograph. Arrive with daylight, then give the street grid or an open museum its own unhurried visit.']
          ]
        },
        routeEyebrow: 'South Shore road sequence', routeHeading: 'Peggy’s Cove to Lunenburg, with an honest return', routeStageLabels: ['Road', 'View', 'Walk', 'Return'],
        routeSourcesHeading: 'Safety, road and heritage checks',
        routeSourcesNote: 'Tourism Nova Scotia’s current visitor page carries the route, parking, accessibility and shoreline advice for Peggy’s Cove. UNESCO explains what is distinctive about Lunenburg’s planned town layout; use the linked town and museum notices for any interior visit.',
        sources: [
          ['https://novascotia.com/listing/peggys-cove-lighthouse-and-village/', 'Tourism Nova Scotia — Peggy’s Cove roads, parking, access and safety'],
          ['https://visitpeggyscove.ca/visitor-information/', 'Peggy’s Cove — local visitor information and Mi’kma’ki acknowledgment'],
          ['https://novascotia.ca/SAFEONSHORE/', 'Government of Nova Scotia — Safe on Shore'],
          ['https://whc.unesco.org/en/list/741/', 'UNESCO World Heritage Centre — Old Town Lunenburg'],
          ['https://511.novascotia.ca/', 'Nova Scotia 511 — current South Shore road notices']
        ],
        faq: [
          ['Can I do Peggy’s Cove and Lunenburg in one day?', 'Yes as a dedicated South Shore road day with an early start and no Cape Breton detour. Keep Peggy’s Cove to a purposeful visit, then give Lunenburg the longer walking block; leave an overnight if you want time for interiors or weather flexibility.'],
          ['Can I visit without renting a car?', 'A booked tour can connect the stops if its pickup, dwell time and return fit your plan. Do not infer that a bus reaches the lighthouse or returns from Lunenburg; verify the exact operator and service for your date.'],
          ['Where can I safely view Peggy’s Cove Lighthouse?', 'Tourism Nova Scotia describes an accessible viewing deck with ramps, landings and handrails. Stay on designated paths and dry marked viewing areas; the same guidance warns that rogue waves can cross apparently calm, sunny rocks.'],
          ['What should I look for in Lunenburg?', 'Start at the harbour, then walk the planned street grid rather than using the town as a fast meal stop. UNESCO identifies its 1753 founding, rectangular layout and retained wooden architecture; choose one museum or working-waterfront stop only after checking its current opening.']
        ],
        stages: [
          ['Leave Halifax by the route you chose', 'For the Peggy’s Cove approach, Tourism Nova Scotia points drivers from Highway 103 onto Highway 333. Confirm construction, weather and parking before departure; if using a tour, confirm whether it continues to Lunenburg or returns directly to Halifax.'],
          ['Use the village paths and viewing deck', 'Peggy’s Cove is a lived fishing community, not a theme park. Follow posted visitor routes, respect homes and working areas, and stay away from wet, dark rock where waves can arrive without warning. The lighthouse can be viewed from the designated deck.'],
          ['Continue to Old Town Lunenburg', 'Walk from the harbour into the rectangular street grid and notice how the town plan organizes its slopes and wooden buildings. Give this living community more time than a single photo stop; choose an open museum or cultural visit rather than adding another distant lighthouse.'],
          ['Return in daylight or stay overnight', 'Check Nova Scotia 511 and current road visibility before beginning the drive back. If you arrive late, reduce the number of stops rather than trying to make up time on unfamiliar coastal roads; a Lunenburg night removes that deadline.']
        ],
        watch: [
          ['Rogue waves reach dry-looking days', 'The provincial visitor guidance warns that large waves can arrive on calm, sunny days. Do not walk out onto wet or dark granite for photographs or swim from the rocks.'],
          ['Parking and narrow village roads', 'Tourism Nova Scotia flags 11 a.m.–3 p.m. as a current peak period and asks visitors not to park on private property or block roads. Arrive outside that window when possible, and obey signs even when the lot is full.'],
          ['A heritage town is still home', 'Lunenburg’s historic grid contains private houses and active businesses. Stay on public streets, check interiors separately and keep the visit grounded in the town’s harbor and built fabric rather than treating homes as exhibits.']
        ]
      }),
      g({
        slug: 'cape-breton-cabot', name: 'Cape Breton & Cabot Trail', instrument: 'highland circuit clock', layout: 'distance-ruler',
        imageQuery: 'Cape Breton Cabot Trail Nova Scotia coast', imageAlt: 'Cabot Trail winding through forested Cape Breton Highlands above the Atlantic coast',
        summary: 'Give Cape Breton its own overnight base, then choose one side of the Cabot Trail for each clear-weather day. The nearly 300-kilometre loop and Halifax transfer are the trip’s structure, not empty time between viewpoints.',
        access: 'Parks Canada locates the Highlands park between the Chéticamp entrance on the west and Ingonish entrance on the east, and estimates a five-hour drive from Halifax. A car or confirmed tour is needed for the dispersed park stops; a regional flight still needs a booked local vehicle and lodging plan.',
        tradeoff: 'A full Cabot Trail circuit connects distinct coastal and highland scenery but puts long driving between walks. Choose a west-side base for a Chéticamp/Skyline day or an east-side base around Ingonish; cross to the other side only when a second night and the live trail/road conditions support it.',
        fallback: 'Low cloud, heavy rain or wind can make an exposed summit trail or viewpoint a poor trade. Keep the day on the same side: choose an open community, a shorter signed path or a visitor-centre stop, and do not force the full loop to salvage one closed trail.',
        duration: 'Two Cape Breton nights can support a transfer plus one focused park day; three or four give two different sectors and a movable weather day. Add a transfer night when the drive begins in Halifax or continues to another region.',
        combine: 'Use Cape Breton as its own road-trip chapter. After reaching the island, sleep before the first full Cabot Trail day; after the park, keep enough daylight for the next base instead of stacking the five-hour Halifax approach with sightseeing.',
        verify: 'Checked 12 October 2026: Parks Canada identifies the two park entrances, estimates about five hours from Halifax, describes the Cabot Trail as nearly 300 km and notes 106 km within park boundaries. Check the exact trail and parking reservation notice, Nova Scotia 511, fuel/service availability, weather and daylight for your route date.',
        routeChoices: {
          heading: 'Choose an entrance before choosing a trail',
          intro: 'The west and east sides are separate access plans. A loop can work as a multi-day road trip, but a single base day should have one side and a named turnaround.',
          options: [
            ['West entrance', 'Chéticamp and Skyline sector', 'Choose this for the western park approach and the Skyline Trail when it is open and its current parking rules fit. Confirm trail status, reservation requirements, daylight and the walk back to the car.'],
            ['East entrance', 'Ingonish and the eastern highlands', 'Choose this when your base is near Ingonish and select one currently open coastal or highland trail. Keep the east-side return rather than crossing the plateau to catch another trailhead late.'],
            ['Full circuit', 'A two-day Cabot Trail loop', 'Only choose the loop with a Cape Breton overnight, daylight margin and a current road check. Parks Canada describes the scenic route as nearly 300 km; stops and trail time make a one-day drive a different, compressed trip.']
          ]
        },
        routeEyebrow: 'Cape Breton multi-day sequence', routeHeading: 'Transfer, choose one side, then turn back', routeStageLabels: ['Transfer', 'Choose', 'Walk', 'Return'],
        routeSourcesHeading: 'Park, trail and road checks',
        routeSourcesNote: 'Parks Canada describes the two entrances, trail conditions, services and any date-bound parking rule. Nova Scotia 511 carries current road events; neither source can guarantee weather, wildlife sightings, open fuel or food stops.',
        sources: [
          ['https://parks.canada.ca/pn-np/ns/cbreton/visit', 'Parks Canada — Cape Breton Highlands access and route geography'],
          ['https://parks.canada.ca/pn-np/ns/cbreton/activ/randonnee-hiking', 'Parks Canada — Cape Breton Highlands hiking and current trail notices'],
          ['https://parks.canada.ca/pn-np/ns/cbreton/activ/randonnee-hiking/skyline', 'Parks Canada — Skyline Trail route and 2026 parking reservations'],
          ['https://parks.canada.ca/pn-np/ns/cbreton/securite-safety', 'Parks Canada — Cape Breton Highlands visitor safety'],
          ['https://511.novascotia.ca/', 'Nova Scotia 511 — current road, closure and visibility notices']
        ],
        faq: [
          ['How many nights should I spend on Cape Breton?', 'Two nights allows a transfer and one full park day. Three or four nights is more useful when you want both sides of the park, a trail and a weather alternative; choose the number around your drive and lodging locations.'],
          ['Can I drive the Cabot Trail from Halifax in a day?', 'Parks Canada estimates about five hours from Halifax to Cape Breton Highlands, before stops or a trail. Treat the island as a separate overnight chapter; do not add a full loop to the Halifax approach.'],
          ['Should I drive clockwise or counterclockwise?', 'Choose direction around your overnight base, preferred entrance and weather, then follow current road notices. The day plan here does not assume a universally better direction or a fixed amount of road time.'],
          ['Do I need a reservation for Skyline Trail parking?', 'Parks Canada says a confirmed parking reservation is required for everyone from 26 June through 25 October 2026, except the enhanced Sunset Hike. The notice asks visitors to arrive from 10 minutes before to one hour after their booked time; roadside parking and drop-offs are not allowed. I checked this on 12 October 2026, so recheck the official notice for dates outside that window or a later season. Save the confirmation offline because cell service is unreliable.']
        ],
        stages: [
          ['Make the Halifax transfer its own day', 'Parks Canada estimates about five hours from Halifax to the Highlands park, before stops. Choose whether to sleep near Chéticamp or Ingonish, confirm the lodging arrival time and do not place a major hike after the transfer.'],
          ['Select one entrance and sector', 'Use Chéticamp for the western approach or Ingonish for the eastern approach. Pick a trail on that side after reading the exact park conditions; the other entrance is a separate driving decision, not a quick hop. On the hiking page checked 12 October 2026, Parks Canada listed MacIntosh Brook, Lone Shieling and nearby pull-offs as temporarily closed for wildlife; do not detour into a closed area.'],
          ['Match a walk to current access', 'For Skyline, the 2026 notice lists a 6.5 km out-and-back at about two hours or an 8.2 km loop at 2.5–3 hours; from 26 June through 25 October the confirmed parking reservation and arrival window are part of the route. On the east side, Parks Canada lists Middle Head as 5.3 km and about 1.5 hours. Check current opening, trail condition, time and daylight before choosing either walk.'],
          ['Return to the same base', 'Finish on the side where you began, check fuel and road notices before departure, and leave an honest margin for wildlife and slower scenic driving. Cross to the other side or continue off-island on a separate day.']
        ],
        watch: [
          ['Skyline has date-specific rules', 'The notice checked 12 October 2026 requires a confirmed reservation from 26 June through 25 October, with an arrival window. Save the confirmation and map offline: cell coverage is unreliable. Recheck the official page for your visit date.'],
          ['Trail notices can close nearby stops', 'Parks Canada’s hiking list checked 12 October 2026 showed temporary wildlife closures at MacIntosh Brook, Lone Shieling and surrounding pull-offs. Respect closure signs and recheck before driving; a notice can change after this page’s review.'],
          ['Weather and services vary by sector', 'Cape Breton weather can change quickly across the plateau and coast. Do not assume late fuel, food or staffed facilities at every scenic stop; check current service hours, road notices, daylight and trail status before leaving either gateway community.']
        ]
      })
    ]
  }),

  defineCanadaCluster({
    slug: 'prince-edward-island', name: 'Prince Edward Island', region: 'Prince Edward Island', band: 'atlantic', family: 'red-cliff-island',
    reviewDate: '12 October 2026', isoDate: '2026-10-12',
    label: 'Small island · red cliffs, farms and literary coast', tagline: 'short distances still deserve separate days.',
    hubIntro: 'Plan Prince Edward Island by corridors rather than map size: Charlottetown and its walkable civic core, one north-shore National Park section, and a separate east or west coast day. The park’s Cavendish–North Rustico, Brackley–Dalvay and Greenwich sections are divided by bays and are not joined by direct highways. Choose one coast per day and place the overnight where the next morning begins.',
    stay: 'Two or three nights can support Charlottetown and one nearby branch. Four nights lets you add either the Cavendish–North Rustico park section or one coastal drive without a daily island crossing. Five or six nights gives the north shore and one outer-coast base separate weather windows; add more only if you want both the east and west ends.',
    transfer: 'The city centre is the easiest no-car stay. T3 Transit has an urban network and a separate rural service on selected routes; check the exact timetable, booking requirement, stop and last-mile walk before treating it as access to a beach, park entrance or lighthouse. A car is the flexible choice for dispersed coast stops. The Confederation Bridge reaches the island from New Brunswick; the Northumberland ferry links Wood Islands with Caribou, Nova Scotia, so arrival terminals and schedules differ.',
    season: 'Checked 12 October 2026: Parks Canada says most park facilities run from mid-May to early autumn, with fuller service in July and August and limited services in shoulder months. Green Gables Heritage Place publishes site hours separately; its 2026 page lists regular fees from 8 September and expects high visitation. Beaches, weather, daylight and private food stops change at different rates, so confirm each place rather than assuming one island-wide season.',
    fallback: 'For wind, fog or cold water, shorten the exposed shore time and choose a Charlottetown interior only after confirming that day’s opening. At the park, switch to another open section only if the extra drive fits daylight; the three sections are not linked by a park road. In shoulder season, keep one town or indoor visit in reserve and never make a tight ferry or bridge departure depend on an unverified stop.',
    sources: [
      ['https://www.t3transit.ca/', 'T3 Transit — city and rural public transit information'],
      ['https://www.t3transit.ca/transit-pei-schedules', 'Transit PEI — rural routes, schedules and booking checks'],
      ['https://parks.canada.ca/pn-np/pe/pei-ipe/visit', 'Parks Canada — PEI National Park regions, access and visitor planning'],
      ['https://parks.canada.ca/pn-np/pe/pei-ipe/visit/heures-hours', 'Parks Canada — PEI National Park operating hours'],
      ['https://parks.canada.ca/lhn-nhs/pe/greengables', 'Parks Canada — Green Gables Heritage Place and 2026 visitor notice'],
      ['https://www.confederationbridge.com/travel/', 'Confederation Bridge — crossing information and current advisories'],
      ['https://www.ferries.ca/ns-pei-ferry/schedule', 'Northumberland Ferries — current Wood Islands–Caribou schedule']
    ],
    firstVisitPlan: {
      heading: 'Choose a corridor before choosing a beach',
      intro: 'These trip lengths are alternatives, not a list of stops to squeeze into one base. The park’s three regions are geographically separate, and the outer coast roads reward a full day with an early return margin.',
      days: [
        ['Two or three nights · Charlottetown base', 'Walk the civic core on one day and select one nearby branch on another. Keep a departure or arrival day light; the city bus and ferry gateways do not solve every rural last mile.'],
        ['Four nights · add one north-shore sector', 'Use a separate day for Cavendish–North Rustico or Brackley–Dalvay, then return to the same base. Do not count Greenwich as the next beach on the same park road: bays separate the sections.'],
        ['Five or six nights · move once to a coast base', 'After the city, choose either the Points East corridor or North Cape for an overnight and a full coastal day. Add the other end only if you can spare another night and have checked seasonal openings and the return connection.']
      ]
    },
    faq: [
      ['Can I explore PEI without renting a car?', 'Charlottetown is the clearest car-free base. Transit PEI also publishes rural routes, but service is route- and date-specific and does not automatically reach every park beach or coastal stop. Confirm the departure, return, booking rule and final walk before building a day around a bus.'],
      ['How many nights do I need for a first trip?', 'Two or three nights suits Charlottetown and one nearby branch. Four nights permits a separate north-shore park day. Five or more nights makes room for one outer-coast drive and its seasonal operating checks; both east and west deserve separate days.'],
      ['Can I visit all three PEI National Park sections in one day?', 'It is a poor default. Parks Canada identifies Cavendish–North Rustico, Brackley–Dalvay and Greenwich as separate regions divided by bays and not directly connected by highways. Choose one section, check current parking and facilities, and give another section its own day.'],
      ['Should I arrive by bridge or ferry?', 'Use the bridge when your mainland approach is New Brunswick; the Northumberland ferry runs between Wood Islands and Caribou, Nova Scotia. They are different crossings with different terminals and current conditions. Check the operator’s live schedule and advisories before setting a timed arrival.']
    ],
    guides: [
      g({
        slug: 'charlottetown', name: 'Charlottetown', instrument: 'harbour-and-civic notebook', layout: 'field-notebook', imageQuery: 'Charlottetown Prince Edward Island harbour Canada', imageAlt: 'Charlottetown waterfront in Prince Edward Island',
        summary: 'Use the compact centre for a civic walk, one chosen indoor history or arts visit, and the harbour. Province House is closed for conservation work, so plan its Confederation story from the exterior and use an open venue for the interior visit.',
        access: 'The central route is walkable, but a complete day still includes several blocks on foot. T3 Transit serves Charlottetown and nearby urban communities; rural beaches need a separate route and confirmed last mile. Keep the city day car-free if your lodging is central.',
        tradeoff: 'Charlottetown works as a real base when you give its streets, harbour and one venue time. It is not a substitute for the north shore or an outer-coast drive, and Province House’s conservation closure changes the indoor choice.',
        fallback: 'In rain, shorten the harbour loop and choose Confederation Centre of the Arts, its gallery or a guided Beaconsfield tour only after checking that day’s hours and admission. If none is operating, use the civic streets and waterfront without treating a closed historic interior as an open attraction.',
        duration: 'Allow one full day for the central walk and one indoor anchor. Two nights make Charlottetown a useful arrival base; add another full day for a rural excursion rather than squeezing it into the city route.',
        combine: 'Pair the central walk with dinner in town. Do not append Cavendish or Greenwich after the afternoon visit: the north-shore park sections are separate drives. The ferry to Wood Islands is a transport leg, not a downtown harbour excursion.',
        verify: 'Checked 12 October 2026: Parks Canada lists Province House as closed for conservation work. Confederation Centre and Beaconsfield publish their own hours, tour rules and calendars; check the exact visit date. The 2026 Beaconsfield interior is guided-tour only, while its grounds are open to roam.',
        routeChoices: {
          heading: 'Choose the indoor anchor around Province House’s closure',
          intro: 'The civic route still makes sense from the street, but the best interior depends on the live schedule and whether you want arts, architecture or a guided house visit.',
          options: [
            ['Arts and civic story', 'Confederation Centre of the Arts', 'Use the centre near the historic core for an art-gallery or performance option. Check the current exhibition, ticket and opening schedule; the centre is an active venue, not a guaranteed all-day museum.'],
            ['Historic house', 'Beaconsfield Historic House', 'Choose a guided interior tour when the published calendar fits. In 2026 the house states that interiors are viewed only on a guided tour; its exterior grounds can be visited separately.'],
            ['Street-level history', 'Province House exterior and Old Town walk', 'Keep Province House in the civic sequence for its Confederation context, but do not expect to enter while the conservation closure remains. Add the harbour and a currently open venue instead.']
          ]
        },
        routeEyebrow: 'A walk with a live indoor choice', routeHeading: 'Civic core, one open interior, harbour return', routeStageLabels: ['Orient', 'Choose', 'Interpret', 'Return'],
        routeSourcesHeading: 'Hours and access to confirm',
        routeSourcesNote: 'Parks Canada confirms Province House is closed for conservation. The Confederation Centre calendar and Beaconsfield guided-tour hours are separate; check the exact date before walking over or buying admission.',
        sources: [
          ['https://parks.canada.ca/lhn-nhs/pe/provincehouse', 'Parks Canada — Province House conservation closure and history'],
          ['https://confederationcentre.com/plan-your-visit/', 'Confederation Centre — current visit, gallery and performance information'],
          ['https://confederationcentre.com/art-gallery/', 'Confederation Centre Art Gallery — exhibitions and current hours'],
          ['https://www.peimuseum.ca/visit/beaconsfield-historic-house', 'PEI Museum and Heritage Foundation — Beaconsfield guided tours and hours'],
          ['https://www.t3transit.ca/t3-transit-schedules', 'T3 Transit — Charlottetown city routes and schedules']
        ],
        faq: [
          ['Can I go inside Province House?', 'Parks Canada currently lists the building as closed for conservation work. Treat it as an exterior civic stop and verify the official notice again before travel; do not build the day around interior admission.'],
          ['Is Beaconsfield a drop-in museum?', 'The foundation says the 2026 house interior can only be seen on a guided tour. Check the date-specific tour hours and availability before walking there; the grounds are a separate free outdoor option.'],
          ['What is the best rainy-day option?', 'Check Confederation Centre’s current gallery and performance schedule first, then Beaconsfield’s guided-tour calendar. Choose one confirmed interior and keep the harbour walk short; hours change by venue and season.'],
          ['Can I use Charlottetown as a base without a car?', 'The city centre is the strongest car-free base and T3 Transit publishes urban schedules. Verify your lodging-to-stop route. Rural services do not establish direct access to every beach, park entrance or lighthouse.']
        ],
        stages: [
          ['Start in the civic core', 'Walk the central streets toward Province House and read the surrounding Confederation-era setting from the public street. Parks Canada currently lists the building as closed for conservation, so do not expect an interior tour.'],
          ['Choose one verified interior', 'Continue to Confederation Centre for the gallery or a scheduled event, or book a Beaconsfield guided tour when its calendar fits. Check hours, entry terms and last admission before leaving the hotel.'],
          ['Give the history its own block', 'Use the selected venue for the longer indoor visit rather than stacking multiple short entries. If the calendar does not fit, stay with the civic streets, public grounds and interpretive context.'],
          ['Return through the harbour', 'Walk back toward the waterfront and leave time for a meal in town. Keep the car parked; the route is complete without a late drive to a second coast.']
        ],
        watch: [
          ['Province House remains closed', 'Its heritage importance does not mean the building is open. Recheck Parks Canada, keep the stop exterior-only unless status changes, and select another indoor anchor.'],
          ['Guided house entry has a schedule', 'Beaconsfield is not a self-guided interior stop in its 2026 visitor information. A tour may be full or outside its hours; confirm before relying on it.'],
          ['One city day has limited capacity', 'A gallery, house tour and harbour walk each need time. Select one interior; keep the rest for a second day rather than racing the city before a coast drive.']
        ]
      }),
      g({
        slug: 'cavendish-north-shore', name: 'Cavendish & North Shore National Park', instrument: 'dune-and-literature strip', layout: 'shoreline-strip', imageQuery: 'Prince Edward Island National Park Cavendish red cliffs', imageAlt: 'Red cliffs and coast in Prince Edward Island National Park',
        summary: 'Pair one Cavendish–North Rustico park sector with Green Gables Heritage Place or a second short coastal walk. The park’s other regions are separated by bays, so do not plan a quick same-road hop to Greenwich or Brackley–Dalvay.',
        access: 'Parks Canada identifies the site as 24 km from Charlottetown, but a car is the flexible choice for beach entrances and heritage stops. Transit PEI’s rural timetable is date-specific; verify route, booking and the walk from the stop before relying on it.',
        tradeoff: 'This is the north-shore day for red cliffs, dunes and the Anne of Green Gables landscape. The constraint is that park sections and attractions have distinct access and seasonal operations; a short map distance does not mean one continuous beach road.',
        fallback: 'When surf, wind or cold water discourages a long beach stay, use a short designated coastal walk and spend the longer block at Green Gables only if it is open. Do not cross to another National Park section as an improvised fallback without checking distance, parking and daylight.',
        duration: 'Reserve one full day for one park section plus one heritage visit. Add a second north-shore day if swimming, cycling or multiple walks are the main purpose; keep the arrival and departure day light.',
        combine: 'Pair the Cavendish–North Rustico area with Green Gables or a nearby community stop. Save Brackley–Dalvay and Greenwich for separate days because bays interrupt direct road connection; keep Charlottetown as the evening base only if the return fits daylight.',
        verify: 'Checked 12 October 2026: Parks Canada expects high visitation in 2026, publishes parking availability through PEI NOW, and lists most park facilities from mid-May to early autumn with limited shoulder-season service. Green Gables has its own fees, hours and high-visitation notice. Recheck both pages on the day.',
        routeChoices: {
          heading: 'Select one shore day, not three park regions',
          intro: 'Use the Cavendish–North Rustico area as a focused section. Decide whether the priority is a beach, a literary heritage visit or more than one night beside the coast.',
          options: [
            ['Beach first', 'Cavendish–North Rustico park section', 'Pick one open beach or trail after reviewing Parks Canada parking and access notices. Keep time for the walk from the lot and stay on designated paths near dunes and cliffs.'],
            ['Literary history', 'Green Gables Heritage Place', 'Choose the house and woodland trails when current hours and admission fit. The site is separate from park beach operations, even though both belong to the north-shore visit.'],
            ['Slow coast', 'Stay near the north shore overnight', 'Choose this when you want two different weather windows, a longer walk or a slower beach day. It removes the evening drive to Charlottetown; confirm lodging and services beyond summer.']
          ]
        },
        routeEyebrow: 'One national-park section at a time', routeHeading: 'Choose the beach, then the heritage stop', routeStageLabels: ['Check', 'Walk', 'Interpret', 'Return'],
        routeSourcesHeading: 'Park, parking and heritage checks',
        routeSourcesNote: 'Parks Canada separates its three park regions and posts current parking and operating information. Green Gables is a distinct historic site with separate fees and seasonal hours.',
        sources: [
          ['https://parks.canada.ca/pn-np/pe/pei-ipe/visit', 'Parks Canada — three regions, access and 2026 visitor planning'],
          ['https://parks.canada.ca/pn-np/pe/pei-ipe/visit/heures-hours', 'Parks Canada — current park operating hours'],
          ['https://parks.canada.ca/pn-np/pe/pei-ipe/visit/cavendish-nr', 'Parks Canada — Cavendish–North Rustico beaches and facilities'],
          ['https://parks.canada.ca/lhn-nhs/pe/greengables', 'Parks Canada — Green Gables hours, fees and visitor notice'],
          ['https://www.t3transit.ca/transit-pei-schedules', 'Transit PEI — rural schedules and booking information']
        ],
        faq: [
          ['Can I drive from Cavendish to Greenwich inside the park?', 'Parks Canada describes three park regions separated by bays and not directly connected by highways. Treat them as separate drives; check a road map, parking and enough daylight before changing sections.'],
          ['How should I choose a beach?', 'Pick one open access point in the Cavendish–North Rustico area based on the current park map, parking status and the walk that suits your group. Stay on boardwalks and marked trails near dunes and cliffs; conditions can close or redirect a route.'],
          ['Is Green Gables open all year?', 'Parks Canada publishes separate operating hours and fees. Its page checked 12 October 2026 carried a high-visitation notice and stated regular fees applied from 8 September. Check the live date-specific notice rather than assuming the house, programs or trails are always staffed.'],
          ['Can I do Cavendish as a half-day from Charlottetown?', 'It is possible to choose one short stop, but a park walk plus Green Gables needs its own time block and current access checks. Do not add another distant park region or outer-coast drive to the same half-day.']
        ],
        stages: [
          ['Check the correct park region', 'Open the Cavendish–North Rustico map and PEI NOW parking notice before leaving. Brackley–Dalvay and Greenwich are distinct regions separated by bays, not adjacent access lots on one continuous park road.'],
          ['Walk one designated beach or trail', 'Use the posted entrance and path for your selected shore. Respect dune barriers, cliff edges and any current closures; choose a shorter route if wind, surf, footing or mobility makes the exposed section unsuitable.'],
          ['Add one heritage stop', 'Green Gables Heritage Place offers the house and two woodland trails, but its 2026 hours and fees are separate from the park. Check admission, current access and high-visitation advice before driving over.'],
          ['Return with daylight margin', 'Finish with the north-shore community stop or return to the chosen base. Do not turn a full day into a late transfer to Greenwich, the east end or a ferry terminal.']
        ],
        watch: [
          ['The park is not one continuous strip', 'Bays separate the three official regions and there is no direct highway connection between them. A section change can use up the margin you intended for the beach.'],
          ['Dunes and cliffs are active coast', 'Wind, erosion and surf can change safe access. Follow barriers and posted trails; never walk onto closed dunes or wave-washed cliff edges for a photo.'],
          ['Shoulder-season service is limited', 'Parks Canada says most facilities operate from mid-May to early autumn, with fuller service in July and August. Confirm toilets, parking, programs, food and opening hours for the exact date.']
        ]
      }),
      g({
        slug: 'coastal-drives', name: 'PEI East & West Coastal Drives', instrument: 'lighthouse route selector', layout: 'roadbook', imageQuery: 'Prince Edward Island lighthouse coast Canada', imageAlt: 'Lighthouse and coast on Prince Edward Island',
        summary: 'Choose Points East or North Cape for a full day, then anchor it with one community and one coastal stop. Tourism PEI describes Points East as a 475 km drive, so selecting a segment and an overnight is more useful than attempting an island loop.',
        access: 'A car is the flexible choice for the outer coasts; Transit PEI rural routes are selected, scheduled and sometimes booking-dependent, not a general island sightseeing pass. Name the return time and check fuel, food and seasonal attractions before leaving Charlottetown.',
        tradeoff: 'Points East follows eastern harbours and beaches; North Cape is the Acadian and oyster-coast region at the island’s west end. Choosing one side gives time for a local visit and reduces pressure to complete an island circuit before dark.',
        fallback: 'In fog or heavy rain, choose a town or confirmed indoor stop rather than an exposed point. If the intended lighthouse interior, museum or food stop is closed, keep the coast drive to public roads and verified viewpoints; do not assume a scenic label means public access.',
        duration: 'Give either outer-coast choice a full day from Charlottetown, and consider one overnight near that corridor if you want an unhurried evening or an early start. Seeing both east and west is a two-day plan at minimum, not an add-on to the bridge or ferry day.',
        combine: 'Make the drive the day’s main event. Points East can use a selected section around St. Peter’s Bay, Souris or East Point; North Cape can use a west-coast community and one north-end stop. Confirm exact attractions and return transport before picking a route.',
        verify: 'Checked 12 October 2026: Tourism PEI describes Points East as 475 km and lists the North Cape region as a separate coastal drive. Many lighthouses, museums, eateries and visitor centres have distinct seasonal calendars. Check each destination’s current page, road/weather notices and bridge or ferry status before setting a departure deadline.',
        routeChoices: {
          heading: 'Choose the coast by the stop you most want',
          intro: 'The route names describe broad regions, not a promise to visit every attraction. Decide whether east-coast beaches and harbours or western Acadian and oyster-coast communities fit the day.',
          options: [
            ['East', 'Points East Coastal Drive', 'Select a manageable section such as St. Peter’s Bay–Greenwich or continue toward Souris and East Point only if the extra road time and opening hours fit. Tourism PEI describes the full drive as 475 km.'],
            ['West', 'North Cape Coastal Drive', 'Choose a community on the western route and one north-end viewpoint or heritage stop. Check season-specific openings; the regional visitor centre and attractions do not share one calendar.'],
            ['Two-coast stay', 'Split east and west across two days', 'Move the base or add a night before exploring the other end. This protects daylight, weather flexibility and an honest return; do not pair two long coast drives with a timed mainland crossing.']
          ]
        },
        routeEyebrow: 'One long coast road at a time', routeHeading: 'Pick a side, anchor the day, protect the return', routeStageLabels: ['Choose', 'Confirm', 'Explore', 'Return'],
        routeSourcesHeading: 'Regional roads and seasonal openings',
        routeSourcesNote: 'Tourism PEI maps the broad drive regions; individual attractions set their own operating dates. The bridge and Wood Islands ferry publish separate current travel information.',
        sources: [
          ['https://www.tourismpei.com/trip-ideas/coastal-drives/points-east-coastal-drive', 'Tourism PEI — Points East route scale and regional stops'],
          ['https://www.tourismpei.com/places-to-go/north-cape-coastal-drive', 'Tourism PEI — North Cape Coastal Drive communities and attractions'],
          ['https://www.tourismpei.com/places-to-go/points-east-coastal-drive', 'Tourism PEI — Points East region and current listings'],
          ['https://www.confederationbridge.com/', 'Confederation Bridge — current advisories and crossing information'],
          ['https://www.ferries.ca/ns-pei-ferry/schedule', 'Northumberland Ferries — current Wood Islands–Caribou schedule'],
          ['https://www.t3transit.ca/transit-pei-schedules', 'Transit PEI — selected rural routes and current schedules']
        ],
        faq: [
          ['Can I drive all of Points East in one day?', 'Tourism PEI describes the Points East Coastal Drive as 475 km. From Charlottetown, choose a segment and a few stops; a full regional itinerary is not a quick lighthouse loop. Stay overnight if you want to explore the full corridor.'],
          ['Which coast should I choose?', 'Choose Points East for eastern beaches, harbours and communities such as St. Peter’s Bay or Souris; choose North Cape for western communities and the island’s northwest coast. Let a specific open stop and your base determine the choice.'],
          ['Are lighthouse sites open every day?', 'No single schedule covers the island’s lighthouses. Some offer seasonal interiors or museums; access to an exterior viewpoint is also site-specific. Check the exact operator or Tourism PEI listing and weather before driving to a named site.'],
          ['Can I combine a coast day with the ferry or bridge?', 'Avoid making a full scenic day depend on a fixed departure. The Wood Islands–Caribou ferry has its own seasonal schedule, while the Confederation Bridge has separate advisories. Check the live operator notices and leave a generous transfer margin.']
        ],
        stages: [
          ['Choose east or west the night before', 'Use one corridor, not an island circuit. Points East spans 475 km according to Tourism PEI; North Cape is the distinct western coastal region. Pick the nearest base and your single priority stop.'],
          ['Confirm the stop is operating', 'Check the exact lighthouse, museum, food business or visitor centre for its own hours and access. Seasonal listings do not share a common opening date; save a town or public-road alternative if the interior is closed.'],
          ['Explore one community and one shore', 'Allow time to walk the chosen harbour or public viewpoint instead of collecting distant pins. Slow road speeds, weather and unscheduled stops expand the day beyond the drive-time estimate.'],
          ['Return without a crossing deadline', 'Check the road and visibility again before heading back. If your itinerary also includes the Wood Islands ferry or a bridge departure, shorten the coast plan and protect a transfer buffer.']
        ],
        watch: [
          ['The map hides stop time', 'A regional drive includes small roads, viewpoint walks, meals and seasonal hours. Choose one coast and cap the stop list before leaving.'],
          ['Coastal weather can erase visibility', 'Fog and wind can make an exposed lookout or lighthouse approach unrewarding. Switch to a verified town stop or return safely; do not walk near an unseen cliff edge.'],
          ['Attractions close on different dates', 'Tourism PEI lists each operator separately. Reconfirm current hours, last admission, parking and public access rather than assuming the whole regional route is open.']
        ]
      })
    ]
  }),

  defineCanadaCluster({
    slug: 'newfoundland-labrador', name: 'Newfoundland & Labrador', region: 'Newfoundland and Labrador', band: 'atlantic', family: 'north-atlantic-road',
    reviewDate: '12 October 2026', isoDate: '2026-10-12',
    label: 'North Atlantic · three Newfoundland bases and a separate Labrador plan', tagline: 'choose the coast before counting stops.',
    hubIntro: 'Treat Newfoundland as three different stays: St. John’s for the Avalon, Bonavista Peninsula for Trinity and Bonavista, and Gros Morne on the west coast. The road links are the trip, so do not turn these into day trips from one base. Labrador is on the mainland and needs its own confirmed road, ferry or flight connection.',
    stay: 'For all three Newfoundland areas, plan about 10–12 nights: 3 in St. John’s, 2 on the Bonavista Peninsula, 4 near Gros Morne and 1–3 nights for long transfers or weather slack. With only a week, choose the east (St. John’s plus Bonavista) or west (Gros Morne) instead of trying to cross the island.',
    transfer: 'A rental car gives the most control for the dispersed coastal and park stops; confirm pickup, insurance and seasonal road suitability before booking. St. John’s has an urban bus operator, but do not assume it reaches headlands or replaces a regional transfer. Flights and Marine Atlantic ferries reach Newfoundland; Labrador is a separate mainland itinerary with different road and ferry legs. Check official live status rather than relying on a remembered timetable.',
    season: 'Checked 12 October 2026: Parks Canada listed Signal Hill and Ryan Premises visitor seasons as June 1–October 9, while Signal Hill grounds and Gros Morne National Park are open year-round. Gros Morne is in its low season from October to May; services, tours, daylight and trail conditions change. Fog, wind and rain can affect exposed coast at any time, and wildlife sightings are never guaranteed.',
    fallback: 'When fog or wind removes a headland or boat outing, keep the day in its current base: use St. John’s museums and steep-street neighborhoods, Trinity or Bonavista heritage interiors when open, or a lower-elevation Gros Morne trail and community stop. Move the exposed activity to the clearest available day; do not make up lost stops after dark.',
    sources: [
      ['https://www.metrobus.com/', 'Metrobus — St. John’s public transit'],
      ['https://parks.canada.ca/lhn-nhs/nl/signalhill', 'Parks Canada — Signal Hill National Historic Site'],
      ['https://parks.canada.ca/lhn-nhs/nl/spear', 'Parks Canada — Cape Spear Lighthouse National Historic Site'],
      ['https://parks.canada.ca/lhn-nhs/nl/ryan', 'Parks Canada — Ryan Premises National Historic Site'],
      ['https://parks.canada.ca/pn-np/nl/grosmorne', 'Parks Canada — Gros Morne National Park'],
      ['https://www.gov.nl.ca/ti/roads/home/', 'Government of Newfoundland and Labrador — road and driving conditions and 511'],
      ['https://www.gov.nl.ca/ti/ferryservices/', 'Government of Newfoundland and Labrador — marine services and live ferry status'],
      ['https://therooms.ca/', 'The Rooms — visitor information and current hours']
    ],
    guides: [
      g({
        slug: 'st-johns-signal-hill', name: 'St. John’s & Signal Hill', instrument: 'harbour-bowl section', layout: 'harbour-ledger', imageQuery: 'St Johns Newfoundland Signal Hill harbour colourful houses', imageAlt: 'Rocky Signal Hill headland above the Atlantic at St. John’s',
        summary: 'Start with downtown’s steep harbour streets and one cultural anchor, then use the clearest part of the stay for Signal Hill. Cape Spear is a separate headland excursion with its own transport and seasonal-site check.',
        access: 'Central St. John’s is walkable but hilly. Metrobus serves the city; verify a current route and stop for the exact day before using it for Signal Hill or Cape Spear. Parks Canada says Signal Hill is reached by car or on foot; the Cape Spear last mile also needs a confirmed ride, tour or suitable walk.',
        tradeoff: 'The harbour, The Rooms and Signal Hill fit a city stay; Cape Spear lies outside that walking sequence. Choose one headland on a short stay, or give each its own weather window.',
        fallback: 'In low cloud or strong wind, keep the day downtown: choose The Rooms if it is open, then a short harbor-side or historic-street walk. Signal Hill grounds are listed open year-round, but do not expect its visitor-centre or tower program outside the published season.',
        duration: 'Allow two full days and at least three nights for the city plus one headland. A single day is a downtown-and-one-headland choice; seeing both headlands comfortably takes another day and a separate transport plan.',
        combine: 'Use St. John’s as an Avalon base. Bonavista needs a peninsula overnight, and Gros Morne belongs to a west-coast transfer; neither is a sensible day return from this hotel.',
        verify: 'Checked 12 October 2026: Parks Canada listed Signal Hill and Cape Spear visitor seasons through 9 October, with Signal Hill grounds open year-round. Recheck live site hours, Metrobus route/stop access, The Rooms hours, road notices and wind before setting out.',
        faq: [
          ['Can I reach Signal Hill by bus?', 'Metrobus is the city operator, but this guide does not promise a route, stop or seasonal headland connection. Check the live operator map for your date and plan a car, taxi or tour if the last mile does not fit. Parks Canada lists access by car or on foot.'],
          ['Can I see Cape Spear and Signal Hill in one day?', 'It is possible with a confirmed vehicle or tour and suitable visibility, but the two headlands are separate outings. On a short stay, choose the clearer site and give downtown its own unhurried block.'],
          ['What is open after 9 October 2026?', 'The checked Parks Canada pages list the Signal Hill and Cape Spear grounds as year-round, while their 2026 visitor seasons ended 9 October. Building, tours and programs have their own hours; check the current notice before travel.']
        ],
        stages: [
          ['Base in the harbour core', 'Stay downtown or near the central grid for at least three nights if walking is a priority. The hills are real effort; choose lodging for the return walk as well as arrival.'],
          ['Downtown and one cultural anchor', 'Walk the harbour-facing streets and choose The Rooms for its provincial art, history and archives in one building. Check its own calendar and hours; it closes on some weekdays.'],
          ['Signal Hill in the clearest window', 'Parks Canada allows 1–3 hours for the site and says it is reached by car or on foot. Check current trail and visitor-centre status before choosing the climb; keep the downhill return in the plan.'],
          ['Cape Spear as a separate branch', 'If visibility and transport support it, make Cape Spear its own out-and-back headland visit. Its 2026 visitor season ended 9 October; the grounds are listed year-round, while lighthouse entry and programs follow separate hours.']
        ],
        watch: [
          ['Hill grade and footing', 'Downtown blocks are short but steep; wet pavement, ice, mobility limits and the uphill return can change what fits.'],
          ['Fog removes the view', 'Move Signal Hill or Cape Spear to the clearest forecast window and do not replace a cancelled view with a cliff-edge approach.'],
          ['Last-mile service', 'A city bus network does not establish a headland timetable. Confirm the exact day’s stop, walking distance and return option before leaving.']
        ]
      }),
      g({
        slug: 'bonavista-trinity', name: 'Bonavista & Trinity', instrument: 'outport daybook', layout: 'field-notebook', imageQuery: 'Bonavista Trinity Newfoundland coast Canada', imageAlt: 'St. Paul’s Anglican Church and graveyard in Trinity, Newfoundland',
        summary: 'Make the Bonavista Peninsula a two-night branch from St. John’s. Give Trinity’s heritage streets and Bonavista’s fishing-harbour story separate blocks, with one exposed coast walk chosen only after checking weather and access.',
        access: 'A confirmed rental car or booked regional tour is the practical way to connect Trinity, Bonavista and dispersed headlands. Choose lodging in either town and compare its first stop with the road plan; no current regional bus route or fare is assumed here.',
        tradeoff: 'Trinity is the slower historic-street and harbor-walk focus; Bonavista adds the fishing-harbour setting and Ryan Premises. Both fit a relaxed peninsula stay, but trying to add every lighthouse and trail turns the visit into repeated driving.',
        fallback: 'If fog, rain or wind makes the exposed shoreline unsafe, stay with a short town walk, an open heritage interior and a café. The Ryan Premises 2026 visitor season ended 9 October, so outside that window use only sites whose current opening is confirmed.',
        duration: 'Book at least two nights on the peninsula: arrival and Trinity, then Bonavista and one coast branch. Add a third night if you want a weather day, a longer walk or an unhurried move from St. John’s.',
        combine: 'The east-coast sequence works as St. John’s → Bonavista Peninsula → St. John’s or onward west with a protected transfer night. Do not schedule Gros Morne as a same-day continuation after peninsula sightseeing.',
        verify: 'Checked 12 October 2026: Ryan Premises listed its 2026 visitor season through 9 October. Before travel recheck its hours, other site openings, NL 511 road advisories, weather, trail notices and any tour operator’s exact pickup/return terms.',
        faq: [
          ['Where should I sleep?', 'Choose Trinity for evenings around its historic core or Bonavista for the harbor and Ryan Premises area. Either town can work for two nights; select based on the next morning’s route and currently open lodging.'],
          ['Is Bonavista a day trip from St. John’s?', 'It is a long regional road branch. Two nights on the peninsula turn the arrival and return into manageable trip legs and leave daylight for towns and coast; do not rely on a map estimate without checking the current route.'],
          ['Can I visit Ryan Premises outside summer?', 'The Parks Canada page checked on 12 October 2026 listed June 1–October 9 as its 2026 operating season. Check the current year’s page before planning indoor interpretation; a harbor walk does not guarantee site buildings are open.']
        ],
        stages: [
          ['Move from St. John’s and settle', 'Travel to the Bonavista Peninsula in daylight and check in before adding a coastal stop. Reserve two nights so a weather shift does not erase the only full day.'],
          ['Give Trinity a walking block', 'Start with Trinity’s harbor and heritage streets, including St. Paul’s Anglican Church from outside where access is public. Confirm which interiors and paths are open before treating them as visits.'],
          ['Use Bonavista for fisheries and coast', 'On a separate day, visit the harbor and Ryan Premises if its current operating season is open. Add one signed coastal path or headland only if wind, visibility, footing and parking are suitable.'],
          ['Return or continue with a transfer night', 'Check road status and daylight before leaving the peninsula. If continuing toward Gros Morne, sleep en route rather than stacking the island crossing after a full sightseeing day.']
        ],
        watch: [
          ['Seasonal interiors', 'Parks Canada listed Ryan Premises through 9 October for 2026; check each heritage operator’s own hours and do not assume one site’s season applies to another.'],
          ['Wind and cliff edges', 'Headlands are exposed. Stay on public paths, respect barriers and move the coast walk when fog or gusts reduce safe footing.'],
          ['Wildlife and darkness', 'Plan rural road returns in daylight when possible. NL 511 provides current road notices; watch for moose and avoid recovering missed stops after dark.']
        ]
      }),
      g({
        slug: 'gros-morne', name: 'Gros Morne National Park', instrument: 'geology-and-fjord field map', layout: 'park-gate', imageQuery: 'Gros Morne National Park Newfoundland fjord Canada', imageAlt: 'Rocky shore and mountains at Western Brook Pond in Gros Morne National Park',
        summary: 'Give Gros Morne its own west-coast stay: put Tablelands and the Trout River side in one block, and Rocky Harbour, Western Brook Pond or a north-side trail in another. A conceptual region diagram shows why these stops need a separate base and transfer.',
        access: 'The park is open year-round, but its trailheads and communities are spread out. A car gives the most control; if flying to Deer Lake or booking a transfer, confirm the local pickup, lodging and return vehicle before buying the long-distance ticket.',
        tradeoff: 'Three nights can support one Tablelands day and one north-side day from a carefully chosen base. Four or five nights allow a second base or weather margin; commuting across the park for every activity wastes daylight.',
        fallback: 'If cloud or rain closes the mountain objective, use the Tablelands Trail (Parks Canada currently lists it as an easy 4 km return), a lower community viewpoint or an open interpretive stop. Western Brook Pond boat trips are separate operator products and can be unavailable; the park should still be worthwhile without sailing.',
        duration: 'Use at least three nights; four is a stronger minimum when you want both park sides plus a movable weather day. Gros Morne Mountain is a challenging 17 km one-day loop, closed to hikers May 1 through June 27, and reopens June 28 for wildlife protection.',
        combine: 'Approach from the Deer Lake area or use a longer westbound road itinerary with an overnight transfer. Do not bolt the park onto the end of a sightseeing day from St. John’s or the Bonavista Peninsula.',
        verify: 'Checked 12 October 2026: Parks Canada lists the park open year-round, October–May as low season, and Gros Morne Mountain’s 17 km loop as closed May 1–June 27. Check bulletins, trail conditions, current ferry/road notices, the Western Brook Pond operator calendar and actual lodging/transfer links.',
        routeDiagram: { src: '/assets/images/tripdistill-canada-newfoundland-regions.svg', alt: 'Conceptual, not-to-scale regional diagram: Gros Morne on Newfoundland’s west coast, Bonavista and Trinity to the east, St. John’s on Avalon, and Labrador as a separate mainland plan', creator: 'TripDistill', source: 'https://tripdistill.com/assets/images/tripdistill-canada-newfoundland-regions.svg', label: 'TripDistill original Newfoundland regional planning schematic with five-language legend', assetType: 'original-planning-diagram', rightsStatus: 'Project original; no separate reuse license declared', rightsStatusUrl: 'https://tripdistill.com/terms-of-use/', inventoryStatus: 'used', editNote: 'Original XML vector schematic, not to scale, with visible route-region labels in English, Traditional Chinese, Japanese, Korean and Thai.' },
        faq: [
          ['Where should I base?', 'For the Western Brook Pond access and the north-side coast, look around Rocky Harbour or Norris Point. For the Tablelands, Trout River and Woody Point, a south-side base reduces repeat driving. Choose one side first; a split stay needs a lodging move.'],
          ['Is Gros Morne Mountain a normal day hike?', 'Parks Canada describes a challenging one-day 17 km loop and publishes a May 1–June 27 seasonal closure, reopening June 28. Check current bulletins and your own weather, fitness and daylight margin before committing.'],
          ['What if the Western Brook Pond cruise does not run?', 'Treat the boat as one optional operator-run activity, confirm its date and terms directly, and keep another park day ready. Do not assume a scheduled departure, fare or weather clearance; the Tablelands and lower-elevation walks are separate alternatives.']
        ],
        stages: [
          ['Arrive and choose a side', 'Use a first afternoon for check-in and the nearest short walk. Sleep near Rocky Harbour/Norris Point for the north side, or near Woody Point for the Tablelands and Trout River side; avoid repeated cross-park commutes.'],
          ['Tablelands and Route 431 side', 'From a south-side base, choose the 4 km return Tablelands Trail, the guided walk if its current calendar fits, or a lookout/community stop. Route 431 toward Trout River is a separate scenic road branch, not an automatic loop to add late.'],
          ['North side and fjord access', 'Keep Western Brook Pond access, its walk-in route and the independent boat operator’s schedule on the same day only after confirming current conditions. If the boat does not sail, use a different open trail or town stop instead of waiting at the car park.'],
          ['Hold one movable day', 'Use a fourth night when possible to move the mountain or boat day around weather. Before departure, check daylight, road status, trail closures and the next lodging check-in; a long transfer should not follow a full hike.']
        ],
        watch: [
          ['Mountain route gate', 'The summit loop is demanding and seasonally closed May 1–27 June for wildlife protection. Wind, cloud, wet rock and the return descent can make a different trail the better choice.'],
          ['Low-season services', 'Parks Canada classifies October–May as low season. Confirm food, fuel, lodging, visitor services and boat operation for the exact date instead of inferring them from the park’s year-round status.'],
          ['Operator and road changes', 'The park’s status does not guarantee a boat seat or open approach road. Use the live operator calendar and NL 511, and keep a park alternative that does not depend on the cruise.']
        ]
      })
    ]
  }),

  defineCanadaCluster({
    slug: 'winnipeg-churchill', name: 'Winnipeg & Churchill', region: 'Manitoba', band: 'prairies', family: 'prairie-to-tundra',
    reviewDate: '12 October 2026', isoDate: '2026-10-12',
    label: 'Prairie capital to Hudson Bay · rail, flight and wildlife seasons', tagline: 'Churchill is an expedition branch, not a day trip.',
    hubIntro: 'Winnipeg is a walkable prairie-city chapter; Churchill is a separate subarctic expedition. Parks Canada says there is no road access to Churchill or road entry into Wapusk National Park. Choose a date-specific flight or VIA Rail itinerary, then arrange local transport and any park outing with a licensed operator. Do not plan Churchill as a Winnipeg day trip or assume that wildlife will appear on demand.',
    stay: 'Give Winnipeg two or three nights for the river meeting place, Exchange District and one substantial museum. If Churchill is the purpose, budget at least four nights there, plus the rail or flight travel days and a Winnipeg return buffer; three nights is fragile when weather or transport shifts.',
    transfer: 'Calm Air publishes date-specific scheduled flights from Winnipeg and VIA Rail publishes date-specific train service to Churchill; compare the current journey days, fares, baggage rules and return before choosing. There is no road to Churchill. Wapusk has no roads either, and Parks Canada directs visitors to licensed commercial operators for park access.',
    season: 'Checked 12 October 2026: Parks Canada says Western Hudson Bay belugas arrive from mid-June to early July and begin migrating north again in mid-September. Polar bears can be encountered at any time, with elevated risk in autumn. These are ecological windows, not wildlife guarantees; transport, local services, weather and daylight change by date.',
    fallback: 'In Winnipeg, move a weather day to the Canadian Museum for Human Rights or another confirmed indoor stop. In Churchill, keep a town and interpretation day that does not depend on a wildlife sighting; if a licensed excursion is cancelled, follow local safety advice instead of trying to reach the coast independently.',
    sources: [
      ['https://info.winnipegtransit.com/en/schedules-maps-tools/transittools/', 'Winnipeg Transit — TransitTools real-time trip planning'],
      ['https://humanrights.ca/visit/plan-your-visit', 'Canadian Museum for Human Rights — visit planning and access'],
      ['https://www.assiniboinepark.ca/park/visit/hours', 'Assiniboine Park — current hours and seasonal notices'],
      ['https://parks.canada.ca/pn-np/mb/wapusk/visit', 'Parks Canada — Wapusk access, transport and licensed operators'],
      ['https://parks.canada.ca/pn-np/mb/wapusk/nature/faune-animals/marine', 'Parks Canada — Hudson Bay beluga seasonal migration'],
      ['https://parks.canada.ca/pn-np/mb/wapusk/securite-safety/ours-bear', 'Parks Canada — northern Manitoba polar-bear safety'],
      ['https://www.viarail.ca/en/plan/train-schedules/winnipeg-the-pas-churchill', 'VIA Rail — date-specific Winnipeg–Churchill schedules'],
      ['https://www.calmair.com/fly-calm-air/schedule-updates', 'Calm Air — current schedule updates']
    ],
    firstVisitPlan: {
      heading: 'Choose a city visit or an expedition branch',
      intro: 'These are different trip shapes. Confirm the exact transport dates before booking non-refundable city stays or an onward international flight; a map cannot compress Churchill into a day trip.',
      days: [
        ['Two or three nights · Winnipeg only', 'Stay in the city, use one full day for The Forks and the Exchange District, and reserve another block for the Human Rights Museum or Assiniboine Park. Check Winnipeg Transit and each institution’s current hours; no Churchill transfer is implied.'],
        ['Seven or more nights · flight-led Churchill', 'Use Winnipeg as the arrival buffer, fly only on the currently published date-specific schedule, then spend at least four nights in Churchill. Book local transport and any wildlife or park day with a licensed operator; protect a spare day and a non-tight Winnipeg return.'],
        ['Eight or more nights · rail-led Churchill', 'Treat the VIA journey days as part of the itinerary, compare the current timetable and departure dates, then plan the Churchill stay around the train’s actual arrival and return. Add a Winnipeg night after the southbound leg before an important flight; do not assume a same-day connection.']
      ]
    },
    faq: [
      ['Can I drive from Winnipeg to Churchill?', 'No. Parks Canada says there is no road access to Churchill. Choose current scheduled air service or VIA Rail, then plan local transport in Churchill separately.'],
      ['Can Churchill be a day trip from Winnipeg?', 'No. The journey itself is a scheduled flight or rail trip, and Wapusk access needs licensed operators. Give the northbound and return legs their real calendar days and keep a delay margin.'],
      ['How many Churchill nights should I book?', 'Four or more nights is a stronger first plan when a wildlife or tundra excursion matters. Three nights leaves little room for a cancelled outing or transport delay; add the rail/flight travel days outside that count.'],
      ['Are belugas or polar bears guaranteed?', 'No. Parks Canada publishes seasonal ecology and safety guidance, not a sighting guarantee. Choose the trip for its place, community and interpretation as well as wildlife, and follow local operator decisions.']
    ],
    guides: [
      g({
        slug: 'forks-exchange', name: 'The Forks & Exchange District', instrument: 'river-meeting city ledger', layout: 'city-grid', imageQuery: 'Winnipeg The Forks Exchange District Manitoba',
        imageAlt: 'Riverfront at The Forks in Winnipeg, with the riverside promenade and sculpture at dusk',
        summary: 'Follow one coherent central Winnipeg day: read the Red and Assiniboine river meeting place at The Forks, choose either the nearby Peace Meeting site or a museum stop, then continue to the Exchange District’s historic streets. The Forks describes the confluence as a gathering place for more than 6,000 years; approach Indigenous histories as living stories, not a quick attraction label.',
        access: 'Start and finish in central Winnipeg. The Forks and Exchange District are distinct walk/ride segments, so check Winnipeg Transit’s live trip planner and weather before choosing the link; no walking distance or river-path condition is assumed here.',
        tradeoff: 'Choose a river-and-architecture day when you want a strong first reading of the city. Give up the deep Human Rights Museum galleries or the farther west Assiniboine Park; each deserves a separate block.',
        fallback: 'In extreme cold, smoke, heavy rain or a river-path closure, shorten the outdoor segment and choose one confirmed indoor stop near The Forks or the Exchange. Replace a disrupted path with current bus service rather than crossing unsafe ice or extending the walk.',
        duration: 'Plan one full day, with open time for the Peace Meeting site, a meal and either one Exchange District walking tour or a single museum. The historic district’s 20-block scale makes selecting a smaller area more useful than trying to cover every building.',
        combine: 'The Canadian Museum for Human Rights is nearby at The Forks and can be the single indoor anchor. Assiniboine Park is farther west and is a separate transfer; keep it for another day.',
        verify: 'Checked 12 October 2026: The Forks describes this confluence as a gathering place for over 6,000 years, and the Exchange District BIZ offers historic walking tours through its 1880–1920 architecture. Check current tour dates, TransitTools, weather/path notices and event closures.',
        routeChoices: {
          heading: 'Choose the city story that anchors the walk',
          intro: 'All three choices begin in the river district. Pick one longer stop so that the Exchange streets and the return remain comfortable.',
          options: [
            ['River meeting place', 'Peace Meeting site and Oodena', 'Stay at The Forks to understand the river confluence and Indigenous gathering histories. Use the site’s own interpretation and allow the story more than a photo stop.'],
            ['Historic architecture', 'Exchange District BIZ walking tour', 'Choose a published guided tour or a self-directed street walk through the district’s 1880–1920 building collection. Confirm the BIZ calendar if you want a guide.'],
            ['Indoor interpretation', 'Canadian Museum for Human Rights', 'Use this as the deep indoor visit near The Forks, then keep the Exchange District shorter. Check the museum’s current tickets, hours and access details first.']
          ]
        },
        routeEyebrow: 'River-to-warehouse district day', routeHeading: 'The Forks first, one Exchange District anchor', routeStageLabels: ['Orient', 'Choose', 'Continue', 'Return'],
        routeSourcesHeading: 'Local history, tours and live movement',
        routeSourcesNote: 'The Forks explains the river confluence and its long Indigenous gathering history. The Exchange District BIZ publishes its historic-tour offer; Winnipeg TransitTools is the date-specific source for the ride between areas.',
        sources: [
          ['https://www.theforks.com/attractions/peace-meeting-site', 'The Forks — Peace Meeting site and river confluence'],
          ['https://www.theforks.com/attractions/oodena-celebration-circle', 'The Forks — Oodena Celebration Circle'],
          ['https://exchangedistrict.org/historic-walking-tours-2/', 'Exchange District BIZ — historic walking tours'],
          ['https://info.winnipegtransit.com/en/schedules-maps-tools/transittools/', 'Winnipeg Transit — real-time trip planning'],
          ['https://humanrights.ca/visit/plan-your-visit', 'Canadian Museum for Human Rights — visit planning']
        ],
        faq: [
          ['Is The Forks only a market stop?', 'No. The Forks places the site at the Red and Assiniboine confluence and describes a long history of Indigenous gathering. Use the Peace Meeting site or Oodena interpretation as context, and treat Indigenous presence as living rather than only historic.'],
          ['Should I take a guided Exchange District walk?', 'Choose the BIZ tour when its current calendar fits and you want a curated architectural route. Otherwise, keep to a self-directed public-street visit and verify which businesses or interiors are actually open.'],
          ['Can I walk between The Forks and the Exchange District?', 'The areas are both central, but weather, mobility, path conditions and your chosen route matter. Check TransitTools for a current bus alternative; this guide does not assume a specific crossing, distance or walking time.'],
          ['What is the best bad-weather fallback?', 'Keep one indoor anchor at or near The Forks, such as the Human Rights Museum if its hours and tickets suit. Shorten the Exchange walk and check transit rather than using river ice or an exposed path as a shortcut.']
        ],
        stages: [
          ['Begin where the rivers meet', 'At The Forks, use the Peace Meeting site or Oodena to orient to the Red–Assiniboine confluence and its Indigenous gathering history. Follow current posted site information and allow time for interpretation.'],
          ['Choose one long stop', 'Stay with the river district and add one indoor museum visit, or keep the day outdoors and proceed toward the Exchange. The Forks and the Exchange are not a single attraction, so choose the depth that fits daylight and energy.'],
          ['Continue to the Exchange', 'Check the BIZ tour calendar for a guided route through the historic district, or explore its public streets on your own. Its 1880–1920 building collection is spread across a 20-block area; choose a focused section rather than counting façades.'],
          ['Return on a live route', 'Use TransitTools to check the current bus option or choose a suitable walk back. Finish near your lodging; leave Assiniboine Park and Churchill transport for another day.']
        ],
        watch: [
          ['River and path conditions', 'Waterfront access and weather change. Never infer safe ice from appearance; follow official barriers and use a transit fallback when footing or exposure is poor.'],
          ['Tours and interiors are date-specific', 'The BIZ tour calendar and individual businesses have their own schedules. Verify before making a guided walk or open door the core of the day.'],
          ['Indigenous context deserves time', 'Do not reduce The Forks to a photo point or imply that one installation represents every Indigenous community. Read the site interpretation and keep the framing specific to the source.']
        ]
      }),
      g({
        slug: 'human-rights-assiniboine', name: 'Human Rights Museum & Assiniboine', instrument: 'museum-and-park selector', layout: 'museum-selector', imageQuery: 'Canadian Museum for Human Rights Winnipeg',
        imageAlt: 'An illuminated interior ramp inside the Canadian Museum for Human Rights in Winnipeg',
        summary: 'Give the Canadian Museum for Human Rights a real visit block: its visitor plan describes ten core galleries across seven floors. Afterward choose either a short Forks-area finish or a separate westbound transfer to Assiniboine Park; the park is not an adjacent museum garden, and The Leaf has its own current hours and admission.',
        access: 'The museum is at The Forks; Assiniboine Park is farther west. Check TransitTools, museum access guidance and park maps for the exact route, step-free needs and current return service instead of assuming the sites connect on foot.',
        tradeoff: 'Choose this day for considered museum interpretation followed by a lower-intensity outdoor or garden option. It trades a quick multi-museum checklist for time to pause, read and make one realistic cross-city move.',
        fallback: 'If energy, weather or transit does not support the westbound transfer, stay near The Forks for a shorter riverside finish or confirmed indoor stop. Do not force the park into a museum departure day or promise entry without checking tickets and hours.',
        duration: 'Reserve several hours for the museum and treat the rest as one optional second chapter. A full day works better than fitting the galleries between transport deadlines.',
        combine: 'Pair the museum with one of three alternatives: remain in the Forks district, visit Assiniboine Park grounds, or choose The Leaf when its hours and ticket fit. Keep Churchill travel days light.',
        verify: 'Checked 12 October 2026: the museum lists ten core galleries across seven floors and publishes current tickets, hours and accessibility details. Assiniboine publishes park and Leaf hours separately; confirm both along with TransitTools before setting the second half of the day.',
        routeChoices: {
          heading: 'Decide after the museum, not before it',
          intro: 'The museum itself can fill a substantial block. Select only one second chapter after checking current hours, weather and transfer needs.',
          options: [
            ['Stay central', 'The Forks and riverfront', 'Choose this when the museum visit runs long or you want a shorter, simpler finish near the museum. Check current site conditions and keep the return local.'],
            ['Outdoor reset', 'Assiniboine Park grounds', 'Choose the park for green space and a slower outdoor visit. It is farther west, so check the transit route, weather, maps and seasonal facility access first.'],
            ['Garden under glass', 'The Leaf at Assiniboine Park', 'Choose The Leaf only if its current hours, admission and accessibility fit your remaining time. The Leaf has a separate calendar from the park grounds.']
          ]
        },
        routeEyebrow: 'A deep museum visit with one optional second stop', routeHeading: 'Ten galleries, a pause, then one chosen reset', routeStageLabels: ['Arrive', 'Interpret', 'Choose', 'Return'],
        routeSourcesHeading: 'Museum access, park hours and transfer checks',
        routeSourcesNote: 'The museum publishes gallery, ticket and accessibility information. Assiniboine Park lists park grounds and The Leaf hours separately; use Winnipeg TransitTools to test the actual cross-city transfer and return for your date.',
        sources: [
          ['https://humanrights.ca/visit/plan-your-visit', 'Canadian Museum for Human Rights — visitor planning and gallery information'],
          ['https://humanrights.ca/visit/hours-admission-fees', 'Canadian Museum for Human Rights — current hours and admission'],
          ['https://humanrights.ca/visit/accessibility', 'Canadian Museum for Human Rights — accessibility information'],
          ['https://www.assiniboinepark.ca/park/visit/hours', 'Assiniboine Park — park and Leaf hours'],
          ['https://www.assiniboinepark.ca/park/visit/maps-and-parking', 'Assiniboine Park — maps and parking'],
          ['https://info.winnipegtransit.com/en/schedules-maps-tools/transittools/', 'Winnipeg Transit — real-time trip planning']
        ],
        faq: [
          ['How long should I allow for the museum?', 'Its visitor plan lists ten core galleries across seven floors. Give the museum several hours and take a pause; the number of galleries is not a required checklist or a promise of a fixed visit length.'],
          ['Is Assiniboine Park beside the museum?', 'No. The museum is at The Forks and Assiniboine Park is farther west. Use TransitTools and the park map to plan the actual transfer and return, including any mobility or weather needs.'],
          ['Can I visit The Leaf on the same day?', 'Possibly, if the museum visit, current Leaf hours, ticket availability and transit return all fit. The Leaf has separate hours from the park grounds; verify its calendar before committing.'],
          ['What if I need step-free access or a quieter plan?', 'The museum publishes accessibility information, including visitor planning details. Review it for your needs before the date, and choose a local Forks finish if an additional cross-city trip would make the day too demanding.']
        ],
        stages: [
          ['Arrive with time to enter', 'Check the museum’s current admission, hours and accessibility details before travelling to The Forks. Keep timed transport or another booking out of the museum block.'],
          ['Give the galleries a real visit', 'The museum describes ten core galleries across seven floors. Move at a pace that leaves room to pause; do not treat every gallery as a race to complete.'],
          ['Choose one second chapter', 'After the museum, stay near The Forks, transfer west to Assiniboine Park, or enter The Leaf only if its separate schedule and admission fit. Check the route and remaining daylight before leaving.'],
          ['Return without a tight connection', 'Confirm the current transit service or other transport back, then finish near your lodging. Do not place a Churchill train or flight connection immediately after a full museum day.']
        ],
        watch: [
          ['Museum visit can expand', 'Ten galleries across seven floors are substantial. If you read deeply or need breaks, skip the second site rather than rushing the museum.'],
          ['Separate park and Leaf hours', 'Assiniboine grounds and The Leaf publish different schedules and closures. Check the destination you actually plan to enter, not just the general park page.'],
          ['Cross-city return', 'The park is west of The Forks. Weather, service frequency, accessibility needs and the final return must all work before adding it to the day.']
        ]
      }),
      g({
        slug: 'churchill-hudson-bay', name: 'Churchill & Hudson Bay', instrument: 'season-and-operator expedition board', layout: 'expedition-board', imageQuery: 'Churchill Manitoba Hudson Bay sea ice Canada',
        imageAlt: 'Sea ice along Hudson Bay near Cape Churchill, Manitoba',
        summary: 'Choose Churchill for a defined seasonal purpose and build around its scheduled air or rail access. Parks Canada confirms there is no road to Churchill, Wapusk has no roads, and park visits require a licensed operator. Beluga migration dates and polar-bear safety guidance help choose a season but never guarantee a sighting.',
        access: 'Calm Air publishes date-specific scheduled flights from Winnipeg and VIA Rail publishes its own date-specific service. Churchill has no road access; use local transport for town activities and a licensed operator for Wapusk or remote wildlife trips.',
        tradeoff: 'Churchill offers Arctic-subarctic coast, community history and wildlife possibilities at the cost of long, inflexible transfers and weather exposure. Book the place and its interpretation, not a guaranteed animal encounter or aurora.',
        fallback: 'Keep a Churchill town day and the Parks Canada Visitor Centre at the historic railway station as possible alternatives, but check its seasonal or by-request hours for your exact date. If a remote trip is cancelled, stay within local guidance; never substitute an independent tundra drive.',
        duration: 'Four or more Churchill nights plus travel days is the safer first plan. Three nights is a bare minimum and leaves little room for a cancellation, transport delay or weather move.',
        combine: 'Use Winnipeg as a true gateway buffer before and after Churchill. Allow a spare day on the return side before an important onward flight, especially when the northbound trip uses VIA Rail.',
        verify: 'Checked 12 October 2026: Parks Canada lists belugas arriving mid-June to early July and migrating north in mid-September; it says the park has no roads and names licensed operators for access. Check the live VIA/Calm Air schedules, visitor-centre hours, operator terms and safety notices again for the exact travel date.',
        routeChoices: {
          heading: 'Choose the seasonal reason before booking transport',
          intro: 'The dates below describe ecological context, not an excursion calendar or a sighting promise. Operators, weather and actual transport availability control the final plan.',
          options: [
            ['Summer marine life', 'Beluga season', 'Parks Canada says belugas arrive from mid-June to early July and begin migrating north in mid-September. Ask a licensed local operator what trips run on your dates and follow marine-wildlife viewing guidance.'],
            ['Autumn bear country', 'Polar-bear safety and viewing', 'Parks Canada says polar bears may be encountered at any time and autumn risk is elevated. Arrange licensed transport, follow operator distance rules and do not walk outside town into bear country independently.'],
            ['Community and northern landscape', 'Churchill town, history and interpretation', 'Choose this when transport or wildlife outings are uncertain. Confirm the Visitor Centre’s date-specific hours and current town services; keep the trip worthwhile without depending on an animal sighting.']
          ]
        },
        routeEyebrow: 'Build the trip around one purpose and a return margin', routeHeading: 'Arrive, choose a licensed day, preserve the return', routeStageLabels: ['Arrive', 'Confirm', 'Explore', 'Return'],
        routeSourcesHeading: 'No-road access, operators and seasonal safety',
        routeSourcesNote: 'Parks Canada provides Wapusk access, wildlife season and polar-bear safety information. VIA Rail and Calm Air publish date-specific schedules; the Churchill Visitor Centre’s operating hours can vary, so check the exact date.',
        sources: [
          ['https://parks.canada.ca/pn-np/mb/wapusk/visit', 'Parks Canada — Wapusk access and licensed operators'],
          ['https://parks.canada.ca/pn-np/mb/wapusk/visit/services', 'Parks Canada — Churchill services and local operators'],
          ['https://parks.canada.ca/pn-np/mb/wapusk/activ/centre', 'Parks Canada — Churchill Visitor Centre and seasonal hours'],
          ['https://parks.canada.ca/pn-np/mb/wapusk/nature/faune-animals/marine', 'Parks Canada — beluga and marine-wildlife seasons'],
          ['https://parks.canada.ca/pn-np/mb/wapusk/securite-safety/ours-bear', 'Parks Canada — polar-bear safety'],
          ['https://www.viarail.ca/en/plan/train-schedules/winnipeg-the-pas-churchill', 'VIA Rail — date-specific Winnipeg–Churchill schedule'],
          ['https://www.calmair.com/fly-calm-air/schedule-updates', 'Calm Air — current flight schedule updates'],
          ['https://www.churchill.ca/p/services', 'Town of Churchill — current local services']
        ],
        faq: [
          ['Can I drive to Churchill or Wapusk?', 'No. Parks Canada states there is no road access to Churchill and no road into Wapusk National Park. Use scheduled air or rail for Churchill and arrange park access with a licensed operator.'],
          ['Which season is best for belugas?', 'Parks Canada says the Western Hudson Bay belugas arrive from mid-June to early July and begin moving north again in mid-September. This is a migration window, not a guarantee of seeing whales or of a particular operator trip running.'],
          ['Can I walk around Churchill to look for polar bears?', 'Do not do that. Parks Canada warns that northern sites pose high polar-bear encounter risk and should not be visited without a licensed guide or Parks Canada staff, except the Visitor Centre. Follow current local safety directions.'],
          ['Is the Visitor Centre always open?', 'No fixed opening should be assumed. Parks Canada publishes seasonal or by-request hours; check the page for the exact day and keep a town-based alternative if it is closed.'],
          ['How much return margin should I leave?', 'Keep at least one flexible Winnipeg day between the Churchill return and an important onward flight when your schedule allows. The exact buffer depends on your date-specific rail or air timetable and the consequence of a missed connection.']
        ],
        stages: [
          ['Travel to Churchill on a confirmed date', 'Choose the current VIA Rail or Calm Air schedule after comparing its actual travel days and return options. There is no road route; do not book a same-day onward connection that has no delay margin.'],
          ['Confirm local services and safety', 'Check the Parks Canada Visitor Centre’s hours for your date and contact a licensed operator about trip days, weather cancellation, equipment and pickup. No park or tundra access is assumed without that arrangement.'],
          ['Use one purpose-built excursion', 'Choose the beluga, bear, bird, landscape or community focus that is actually available. Follow operator distance and safety rules; if conditions change, keep the town and interpretation plan rather than pursuing wildlife independently.'],
          ['Protect the southbound return', 'Recheck the actual train or flight status and return to Winnipeg with time in hand. Keep a flexible night or day before a major connection; do not let a no-sighting day tempt a late unsafe detour.']
        ],
        watch: [
          ['Wildlife is uncertain', 'Beluga dates and bear season are ecological context, not guarantees. Keep the destination meaningful through community history and landscape as well as sightings.'],
          ['Bear-country access is controlled', 'Parks Canada warns of high encounter risk at remote sites. Use a licensed guide or Parks Canada staff and follow current local directions; do not leave town independently to find wildlife.'],
          ['Timetable and visitor hours change', 'VIA Rail, Calm Air, local operators and the Visitor Centre use date-specific schedules. Confirm each one directly before fixing lodging, tour days or an onward flight.']
        ]
      })
    ]
  }),

  defineCanadaCluster({
    slug: 'whitehorse-kluane', name: 'Whitehorse & Kluane', region: 'Yukon', band: 'north', family: 'yukon-roadbook',
    label: 'Yukon gateway · river city and immense mountain park', tagline: 'road readiness comes before remoteness.',
    hubIntro: 'Whitehorse is the service base; Kluane is a vast park region reached by road with weather, fuel and limited-service planning. Aurora is an optional sky condition, not a guaranteed nightly attraction.',
    stay: 'Two Whitehorse nights plus two or three Kluane/Haines Junction nights creates a useful first trip. Add more for serious hiking or a longer highway journey.',
    transfer: 'A car is highly useful outside Whitehorse. Highway conditions, fuel, wildlife and limited cell service matter; flights or tours do not replace every park-road decision.',
    season: 'Summer offers very long daylight; winter brings cold, short days and aurora opportunities. Shoulder seasons can combine snow, ice and reduced services.',
    fallback: 'Whitehorse museums, cultural centres and short river walks are the weather fallback; in Kluane, shorten the trail or use lower viewpoints rather than forcing alpine objectives.',
    sources: [
      ['https://www.whitehorse.ca/living-in-whitehorse/transit/', 'City of Whitehorse — transit information'],
      ['https://parks.canada.ca/pn-np/yt/kluane', 'Parks Canada — Kluane National Park and Reserve'],
      ['https://511yukon.ca/', 'Yukon 511 — highway conditions and incidents']
    ],
    guides: [
      g({ slug: 'whitehorse-river', name: 'Whitehorse & Yukon River', instrument: 'river-service base map', layout: 'field-notebook', imageQuery: 'Whitehorse Yukon River Canada', imageAlt: 'Yukon River landscape at Whitehorse', summary: 'Use Whitehorse to understand the Yukon River and prepare the road trip: one cultural institution, one river/canyon walk and the practical fuel/food stop before Kluane.', access: 'Central Whitehorse has transit and walkable areas, but most regional branches need a car, tour or explicit shuttle.', tradeoff: 'A city day gives Indigenous, river and Gold Rush-era context plus logistics; it sacrifices distance but improves every later road day.', fallback: 'Cold, smoke or rain can move more time into museums and cultural centres while the river walk shortens.', duration: 'One full day plus an arrival/departure half-day works for a first visit.', combine: 'Pair with Miles Canyon or another close branch, not a full Kluane excursion on the same day.', verify: 'Check Whitehorse Transit, selected cultural-site hours, Yukon 511 and wildfire/smoke or severe-weather notices.', stages: [['Cultural context first', 'Choose one museum or cultural centre that explains the river, Indigenous history and northern settlement.'], ['Walk the river', 'Use a maintained waterfront or nearby route rather than improvising remote access.'], ['Prepare the highway', 'Fuel, food and download maps before leaving for Kluane.'], ['Protect the night plan', 'If aurora is possible, keep the evening flexible rather than exhausting the day first.']], watch: [['Smoke', 'Wildfire smoke can remove views and make outdoor exertion unhealthy.'], ['Long daylight', 'Summer light can disguise fatigue; a bright evening is still the end of a long day.'], ['Aurora expectations', 'Cloud and solar activity are uncertain; do not sacrifice every daytime plan for a guaranteed sighting that does not exist.']] }),
      g({ slug: 'kluane-haines-junction', name: 'Kluane & Haines Junction', instrument: 'mountain weather gate', layout: 'park-gate', imageQuery: 'Kluane National Park Yukon mountains Canada', imageAlt: 'Mountain landscape in Kluane National Park Yukon', summary: 'Base in Haines Junction or nearby, then choose one Kluane trail/visitor sector by weather and ability; the park’s scale makes “seeing Kluane” a meaningless one-stop goal.', access: 'Drive from Whitehorse on the Alaska Highway/Haines Road corridor with fuel and road conditions checked. Trailheads and viewpoints are dispersed.', tradeoff: 'The park offers huge mountain and glacier landscapes but many deep interiors are not road-accessible; a scenic flight is a separate weather-dependent product.', fallback: 'Cloud or wind can cancel flightseeing and reduce alpine value; use visitor interpretation, lower trails and lake/road viewpoints.', duration: 'Two or three nights gives one major trail day plus weather margin; serious backcountry trips need much more planning.', combine: 'Connect from Whitehorse and sleep locally. Do not drive out, hike long and return to Whitehorse late the same day.', verify: 'Check Parks Canada trail/bear advisories, Yukon 511, weather, fuel and any flightseeing operator cancellation terms.', stages: [['Stop at the visitor centre', 'Confirm current trail, wildlife and weather conditions before committing to the day.'], ['Choose one trail level', 'Match elevation and distance to real ability and the forecast.'], ['Keep flightseeing optional', 'Book only with a clear cancellation/weather policy and do not treat it as guaranteed access.'], ['Return to Haines Junction', 'End close to lodging so the next road day begins rested.']], watch: [['Bear country', 'Food storage, group behavior and current bear advisories are core planning.'], ['Rapid weather change', 'Mountain conditions can diverge sharply from Whitehorse forecasts.'], ['Remote trailheads', 'Limited cell service and long emergency response times raise the cost of overreaching.']] }),
      g({ slug: 'miles-canyon-aurora', name: 'Miles Canyon & Aurora Planning', instrument: 'daylight-darkness clock', layout: 'two-clock-board', imageQuery: 'Miles Canyon Whitehorse Yukon Canada', imageAlt: 'Yukon River canyon landscape near Whitehorse', summary: 'Keep Miles Canyon as the daylight activity and treat aurora viewing as a separate late-night probability window so one uncertain sky event does not erase the entire day.', access: 'Miles Canyon is close to Whitehorse but needs a car/taxi/tour or appropriate seasonal access plan. Aurora sites require safe night transport and warm shelter strategy.', tradeoff: 'A short canyon day preserves energy for a late night; a full hiking day plus midnight aurora tour can create unsafe fatigue.', fallback: 'Cloudy aurora nights should end early without regret; the daytime canyon and cultural plan still make the day complete.', duration: 'Half a day for Miles Canyon plus an optional evening/night block; schedule a slower following morning.', combine: 'Use it as a Whitehorse buffer day before/after Kluane, not the night before a long early highway drive.', verify: 'Check trail access, Yukon 511 if driving, weather/cloud cover, aurora forecast as probability only and the chosen tour’s pickup/cold policy.', stages: [['Daylight canyon', 'Walk one maintained canyon/river section while footing and visibility are good.'], ['Rest before dark', 'Eat and sleep or relax instead of filling the gap with another long excursion.'], ['Make a go/no-go sky decision', 'Use cloud, temperature and operator advice; aurora forecasts are not guarantees.'], ['Return warm and rested', 'End the night with safe transport and protect the following morning from fatigue.']], watch: [['Night driving', 'Dark rural roads, wildlife and ice require a sober transport plan.'], ['Cold exposure', 'Standing still for sky viewing feels far colder than daytime walking.'], ['Forecast overconfidence', 'High activity can be hidden by cloud; clear sky can still produce weak displays.']] })
    ]
  }),

  defineCanadaCluster({
    slug: 'yellowknife-great-slave', name: 'Yellowknife & Great Slave Lake', region: 'Northwest Territories', band: 'north', family: 'aurora-lake-grid',
    label: 'Subarctic lake capital · old town, winter road and dark sky', tagline: 'the sky is one layer of the trip, not the whole promise.',
    hubIntro: 'Yellowknife combines a small lake-side capital, seasonal Great Slave Lake access and famous aurora potential. Build a daylight city/lake plan first, then add dark-sky time without promising a display.',
    stay: 'Three nights gives a basic weather sample; four or five nights improves flexibility for aurora, winter activities and a road branch.',
    transfer: 'City buses/taxis cover the urban core. Ingraham Trail and winter lake/ice-road experiences need road-condition knowledge, a vehicle/tour and seasonal legality.',
    season: 'Deep winter brings extreme cold and ice-road possibilities; shoulder aurora seasons can be milder; summer has very long daylight and different lake access.',
    fallback: 'Museums, Old Town and community-scale food/culture make the trip useful when cloud hides the sky or roads close.',
    sources: [
      ['https://www.yellowknife.ca/en/living-here/transit.aspx', 'City of Yellowknife — transit information'],
      ['https://www.nwtparks.ca/', 'Northwest Territories Parks — territorial parks and visitor information'],
      ['https://www.dot.gov.nt.ca/Highways', 'Government of Northwest Territories — highways and road conditions']
    ],
    guides: [
      g({ slug: 'old-town-great-slave', name: 'Old Town & Great Slave Lake', instrument: 'lake-edge settlement map', layout: 'lake-atlas', imageQuery: 'Yellowknife Old Town Great Slave Lake Canada', imageAlt: 'Yellowknife and Great Slave Lake in the Northwest Territories', summary: 'Walk Old Town and the lake edge as a daylight introduction, then use one museum or viewpoint to understand why the city sits where it does.', access: 'Yellowknife is compact enough for taxi/bus/walking in the core, but winter cold radically changes comfortable walking distance.', tradeoff: 'The city day provides history and lake context; it intentionally does not depend on aurora or a remote winter-road excursion.', fallback: 'Extreme cold or wind shortens outdoor blocks and expands museum, café and indoor interpretation time.', duration: 'One full day is enough for a first city/lake introduction; spread it across two shorter days in severe cold.', combine: 'Pair with an evening aurora attempt only after a warm rest period.', verify: 'Check city transit, NWT weather warnings, museum hours, lake/ice access legality and local safety notices.', stages: [['Old Town orientation', 'Start in the historic lake-edge district and identify the safe public routes before approaching ice or shore.'], ['One viewpoint', 'Use a maintained hill/lookout for the settlement and lake scale.'], ['Warm cultural stop', 'Choose a museum or local institution to add northern and Indigenous context.'], ['Rest before darkness', 'Return to lodging before any separate late-night sky plan.']], watch: [['Extreme cold', 'Walking time must be set by temperature/wind chill, not normal city distance.'], ['Ice assumptions', 'Never step onto lake ice because locals or vehicles appear present elsewhere; use current official/local guidance.'], ['Private/residential space', 'Old Town is lived-in; photograph respectfully from public areas.']] }),
      g({ slug: 'aurora-dark-sky', name: 'Yellowknife Aurora Planning', instrument: 'probability-and-cold board', layout: 'two-clock-board', imageQuery: 'Yellowknife aurora borealis Northwest Territories Canada', imageAlt: 'Aurora above the subarctic landscape near Yellowknife', summary: 'Plan multiple optional night windows with warm transport and shelter, treating cloud and solar activity as probabilities rather than a guaranteed performance.', access: 'Choose a reputable tour, lodge product or safe self-drive site with explicit winter-road, communication and warm-shelter planning.', tradeoff: 'Staying several nights improves opportunity but consumes sleep and budget; a strong itinerary keeps daylight activities modest after late nights.', fallback: 'Cloud means sleep, not failure. Use daytime lake, museum and road activities so the trip retains value without a display.', duration: 'Three or more nights is more resilient than a one-night gamble; each viewing night needs recovery time.', combine: 'Pair with light daytime blocks. Do not schedule a long remote drive early after a 2 a.m. return.', verify: 'Check weather/cloud, road conditions, operator pickup/cancellation rules and aurora forecasts as non-guaranteed indicators.', stages: [['Protect several windows', 'Do not concentrate all expectation on the first clear-looking forecast.'], ['Dress for standing still', 'Use operator/local cold guidance and warmer layers than a daytime walk requires.'], ['Wait safely', 'Use a warm shelter/vehicle and legal stopping area while conditions develop.'], ['End before fatigue becomes unsafe', 'Return with enough sleep margin for the next day’s road or flight.']], watch: [['No guarantee', 'Forecasts cannot guarantee visible aurora at a specific time or intensity.'], ['Cold injury', 'Photography encourages long periods without movement; protect hands, feet and batteries.'], ['Unsafe roadside stopping', 'Dark-sky value does not justify stopping on an unapproved shoulder or ice surface.']] }),
      g({ slug: 'ingraham-trail', name: 'Ingraham Trail & NWT Parks', instrument: 'subarctic road checkpoint', layout: 'roadbook', imageQuery: 'Ingraham Trail Northwest Territories lakes Canada', imageAlt: 'Subarctic lake and boreal landscape along the Ingraham Trail', summary: 'Use one Ingraham Trail park or lake objective with a declared turnaround, checking highway and winter-road status before leaving Yellowknife.', access: 'A suitable vehicle, tour or local transport plan is needed beyond the city. Road and winter-road conditions can change quickly.', tradeoff: 'The corridor gives boreal lakes and quieter landscape, but services are limited and winter decisions carry real risk.', fallback: 'Road closure, storm or extreme cold should keep the day in Yellowknife rather than forcing a remote objective.', duration: 'A half to full day for one park/lake sector; longer winter-road travel is a separate expedition product.', combine: 'Pair with Yellowknife nights, not a tight flight departure or exhausted post-aurora morning.', verify: 'Check NWT highway/winter-road status, park opening, weather, fuel, communications and current local travel advice.', stages: [['Road-status check', 'Confirm the exact highway/winter-road segment before leaving cell-rich urban areas.'], ['One park objective', 'Choose one territorial park, lake or trail based on season and legal access.'], ['Turn at the declared point', 'Do not extend the road because conditions look easy at the first stop.'], ['Return before dark/cold compounds risk', 'Reach Yellowknife with fuel, daylight and driver attention in reserve.']], watch: [['Winter-road legality', 'Ice roads open and close officially; appearance is not permission.'], ['Limited services', 'Fuel, toilets and mobile coverage are not continuous.'], ['Wildlife and cold', 'A breakdown has higher consequences in subarctic temperatures.']] })
    ]
  })
];
