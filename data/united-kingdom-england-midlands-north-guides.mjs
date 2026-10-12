import { defineUnitedKingdomCluster, unitedKingdomGuide } from './united-kingdom-guide-builder.mjs';

const g = unitedKingdomGuide;
const c = defineUnitedKingdomCluster;

export const unitedKingdomEnglandMidlandsNorthClusters = [
  c({
    slug: 'kent-sussex-south-coast',
    name: 'Kent, Sussex & the South Coast',
    nation: 'England',
    band: 'england-south',
    family: 'chalk-cliff-rail-chart',
    label: 'Chalk-coast rail chart',
    reviewDateISO: '2026-10-12',
    reviewDate: '12 October 2026',
    tagline: 'Choose the city, castle or cliff section first; their gateways do not share one coast corridor.',
    hubIntro: 'Brighton, Canterbury, Dover and the Seven Sisters are four different days connected by different rail and bus legs. Brighton is a downhill city-and-seafront plan from its station; Canterbury has two stations on distinct corridors; Dover Priory sits below its hilltop castle; and the Seven Sisters has no railway station. Build the visit around one anchor, name the final bus or return station, and leave chalk paths conditional on wind, tide, daylight and official access notices.',
    searchSummary: 'Plan Brighton, Canterbury, Dover and Seven Sisters as separate rail and bus days. Compare a Brighton base with an east Kent overnight, then check hill, cliff, tide and return connections.',
    searchKeywords: ['Brighton', 'Canterbury', 'Dover Castle', 'Seven Sisters', 'Eastbourne', 'Seaford', 'Southeastern', 'South Downs'],
    metaDescription: 'Plan Brighton, Canterbury, Dover and Seven Sisters as separate days. Choose a base, station and bus connection, then check castle admission, tides, cliff weather and daylight.',
    stay: 'Two nights: base in Brighton and give it one full city day; use the other for either a short Eastbourne or Seaford coast visit only if the bus and daylight work. Three nights: keep Brighton for two nights and move to Canterbury for one night if the cathedral and east Kent are priorities, or stay put and make one dedicated Seven Sisters day. Four nights: two Brighton nights plus two Canterbury nights can support one city day, one coast day and one cathedral day without repeating a long east-west transfer; Dover then deserves its own day only if the castle is the main event. A single Brighton base works for a day trip, but do not assume the fast London–Canterbury corridor and the south-coast bus route meet conveniently. Choose lodging near the station for early rail starts or near the old centre for evenings; Brighton station is above the Pavilion and seafront, so test the uphill return against luggage and mobility.',
    transfer: 'Use National Rail for the exact date, station and return: Southern serves Brighton and the Eastbourne/Seaford approaches, while Southeastern links Canterbury and Dover through different London and Kent corridors. Canterbury West is the high-speed London St Pancras station; Canterbury East serves another service pattern, so choose the station printed for the actual train. Dover Priory is not at Dover Castle: budget the climb or verify the local bus before calculating admission. For Seven Sisters, the Exceat visitor centre on the A259 is the named bus-and-walk gateway between Brighton, Seaford and Eastbourne; confirm the operating route, stop direction and final return, not just a map pin. Never build the coast day around an unverified last bus or an assumed through-ticket.',
    season: 'On 12 October 2026, the Royal Pavilion published seasonal hours: October–March 10:00–17:15 with last entry 16:30; April–September 09:30–17:45 with last entry 17:00. Check the live venue page because hours and special events can change. Summer brings busier beaches, road approaches and cliff paths; book any timed heritage admission before locking an east Kent day, and still check for event or worship changes. Spring and autumn can suit walking, but wind, rain, visibility and Cuckmere tide determine whether a cliff segment is sensible. Winter makes Brighton, Canterbury and the castle’s interiors better anchors; shorter daylight means replace a long cliff traverse with a signed viewpoint and an earlier train. The operator and park pages differed on whether service 12A was operating in this dated snapshot, so use the live bus planner for the day rather than relying on an old route number.',
    fallback: 'If exposed paths are unsuitable, do not swap in another headland. Keep Brighton in the Pavilion, museum, covered streets and a short sea view; keep Canterbury in the cathedral precinct and historic lanes; or make Dover Castle the day’s single booked interior if access and the hill connection fit. If an east Kent train or Seven Sisters bus is disrupted, stay in the city where you woke or use the confirmed return toward it. At Cuckmere, follow the signed coastal path around the river: do not try to cross the mouth, and do not descend to the cliff base for a viewpoint.',
    sources: [
      ['https://www.visitbrighton.com/', 'Visit Brighton — official destination guide'],
      ['https://www.visitkent.co.uk/', 'Visit Kent — official destination guide'],
      ['https://www.nationalrail.co.uk/', 'National Rail — date-specific route and service planning'],
      ['https://www.southeasternrailway.co.uk/', 'Southeastern — rail planning and service updates'],
      ['https://www.sevensisters.org.uk/plan-your-visit/getting-here/', 'Seven Sisters Country Park — official bus and access information']
    ],
    guides: [
      g({
        slug: 'brighton-lanes-seafront',
        name: 'Brighton Lanes, Pavilion & Seafront',
        instrument: 'Seafront weather-and-crowd clock',
        layout: 'regency-to-pier-zigzag',
        imageQuery: 'Brighton Royal Pavilion England exterior',
        imageAlt: 'The Royal Pavilion in central Brighton',
        reviewDateISO: '2026-10-12',
        reviewDate: '12 October 2026',
        purpose: 'Choose the Royal Pavilion, independent lanes or the seafront as the day’s main layer and connect them downhill toward the sea without repeatedly climbing between station, shopping streets and pier.',
        summary: 'Plan one Brighton day from the station downhill through North Laine or the Pavilion, reserve time for one interior, then choose one bounded stretch of seafront and decide how to get uphill again.',
        searchSummary: 'Plan Brighton from station to North Laine, Royal Pavilion and one seafront direction. Check seasonal Pavilion hours, then choose a bus or uphill walk back.',
        searchKeywords: ['North Laine', 'The Lanes', 'Royal Pavilion', 'Brighton station', 'Old Steine', 'seafront'],
        choices: [
          ['Royal Pavilion and museum', 'Use the Pavilion complex as the paid anchor, then add the historic Lanes and a short seafront. This gives the strongest architectural context.'],
          ['Independent streets and food', 'Prioritize North Laine, the Lanes and a market or gallery, keeping the Pavilion exterior. It is flexible but lighter on formal interpretation.'],
          ['Seafront and pier', 'Move quickly to the beach, pier and one western or eastern promenade branch. This suits clear weather but depends most on wind and crowd pressure.']
        ],
        access: 'Brighton station is about a 15-minute walk uphill from the Royal Pavilion; the Pavilion is around five minutes from the sea. Local buses stop on Old Steine and North Street, while the station, North Laine, the historic Lanes and waterfront are separate points. Pick the route down before arrival and budget for the return climb; after a long beach walk, use a suitable bus rather than assuming the uphill leg is trivial. If step-free access matters, confirm the chosen station exit, bus and venue route directly with their operators.',
        tradeoff: 'The Pavilion, Brighton Museum, two distinct street districts and a long promenade do not fit as full visits in one relaxed day. A Pavilion-led plan gives architecture and a shorter coast; a lanes-and-food plan keeps the interior shallow; a coast-heavy plan trades covered time for weather exposure. Pick west toward the historic beachfront or east toward Madeira Drive, not both, and set a turnaround point before leaving the pier.',
        stages: [
          ['Choose the downhill corridor', 'From the station, go through North Laine for independent streets and food, or take the direct line toward the Pavilion precinct. Keep the station exit and likely return bus in your notes.'],
          ['Use the Pavilion as a timed anchor', 'As checked 12 October 2026, October–March hours were 10:00–17:15, last entry 16:30; April–September was 09:30–17:45, last entry 17:00. Verify current hours, ticket and any event closure before travel. If you choose a museum instead, check its own calendar.'],
          ['Walk one street sequence to the sea', 'Continue through the historic Lanes toward the seafront without doubling back to North Laine. At the pier, choose west or east and stop at the agreed landmark; wind, waves and crowds can make the exposed promenade slower than the map suggests.'],
          ['Close the uphill return', 'Use Old Steine or North Street bus information if the climb is unsuitable, or allow a gradual walk back to the station. Leave margin for traffic and station navigation before a reserved train.']
        ],
        fallback: 'In strong wind or heavy rain, keep the Pavilion or another confirmed interior, then use the covered central streets and a brief sea view from the lower seafront. If the Pavilion is closed or its final entry has passed, deepen the North Laine and historic street route; do not board an unplanned coast bus to rescue the day.',
        watch: [
          ['Station and Pavilion are at different levels', 'The station is uphill and about a 15-minute walk from the Pavilion. Decide on the return before the seafront; use a bus from the central stops if the final climb does not suit.'],
          ['Venue hours change by season', 'The dated Pavilion snapshot changes its opening and last-entry times between April–September and October–March. Check the official day page and ticket availability before choosing the interior as the anchor.'],
          ['Street districts and sea edge need separate choices', 'North Laine and the historic Lanes are distinct; see them once in sequence. Wind, waves and beach crowding can make the promenade uncomfortable when central streets feel calm, so keep the coast leg optional and protect the train margin.']
        ],
        duration: 'Allow five to seven hours for one interior, both central street districts and a short seafront leg, plus your arrival and return. A longer west or east promenade should be the day’s main walk and use the available daylight.',
        combine: 'Combine the Pavilion with the Lanes or the pier with one promenade direction. Keep Seven Sisters and Canterbury for separate days.',
        verify: 'Check Pavilion hours and admission, Brighton Museum calendar if selected, city events, seafront conditions, Brighton & Hove Buses for the uphill return and Southern/National Rail disruption before departure.',
        sources: [
          ['https://brightonmuseums.org.uk/royalpavilion/plan-your-visit/', 'Brighton & Hove Museums — Royal Pavilion hours, access and tickets'],
          ['https://www.buses.co.uk/services/BH/12', 'Brighton & Hove Buses — current Coastliner 12 service information'],
          ['https://www.nationalrail.co.uk/', 'National Rail — date-specific Brighton rail planning']
        ]
      }),
      g({
        slug: 'canterbury-dover',
        name: 'Canterbury Cathedral & Dover Castle',
        instrument: 'Two-fortress admission docket',
        layout: 'pilgrim-to-channel-section',
        imageQuery: 'Canterbury Cathedral England precinct',
        imageAlt: 'Canterbury Cathedral rising above the historic city centre',
        reviewDateISO: '2026-10-12',
        reviewDate: '12 October 2026',
        purpose: 'Decide whether Canterbury Cathedral or Dover Castle deserves the full controlled interior, then use the rail corridor for one city-to-fortress connection rather than rushing two large heritage sites.',
        summary: 'Treat Canterbury Cathedral and Dover Castle as competing full-day anchors. Match Canterbury East or West to the actual train, and reserve time to climb from Dover Priory to the castle and descend again.',
        searchSummary: 'Choose Canterbury Cathedral or Dover Castle as the main visit. Match Canterbury East/West to the train; allow for Dover Castle’s hill, timed admission and last entry.',
        searchKeywords: ['Canterbury West', 'Canterbury East', 'Canterbury Cathedral', 'Dover Priory', 'Dover Castle', 'Southeastern'],
        choices: [
          ['Canterbury depth', 'Give the cathedral precinct, medieval streets and one museum or abbey edge the day. This is compact and least dependent on hills or coastal weather.'],
          ['Dover Castle depth', 'Use the castle grounds and wartime or medieval interpretation as the main event. This requires the climb or bus and leaves little Canterbury time.'],
          ['Rail-linked sampler', 'Visit one interior at moderate depth and the other place as an exterior town circuit. This gains contrast but sacrifices the complete story of both.']
        ],
        access: 'Canterbury West is the high-speed London St Pancras station and Canterbury East serves a different Southeastern corridor, including services associated with Victoria and Charing Cross; check the actual origin, station and return in National Rail. The bus station is about a five-minute walk from the cathedral precinct. Dover Priory is below the hilltop castle, not at its gate: allow for the uphill approach or confirm a local bus and its return before booking. Dover Castle’s official dated page listed 10:00–17:00 opening and 16:00 last entry on 12 October 2026; timed slots and advance booking rules can change, so check the current page before setting a train.',
        tradeoff: 'A cathedral precinct visit and Dover Castle each deserve several hours, and both add a separate rail leg. The fast Canterbury West train does not make a same-day castle transfer automatic: two interior admissions compress meals, the cathedral precinct, castle grounds and disruption margin. Choose one deep anchor. If you want both, stay overnight in Canterbury or Dover and use the second day, or keep the second place to a brief exterior stop only when its correct station and return are verified.',
        stages: [
          ['Match the station to the itinerary', 'For Canterbury, use the exact West or East station printed in the live plan; both are within walking reach of the historic core but are not interchangeable train stops. For Dover, begin at Priory and preserve time for the castle hill.'],
          ['Check the cathedral day', 'The dated Cathedral page showed Monday–Saturday visiting 10:00–17:00, last admission 16:00; Sunday visitor entry began at 11:30, with worship affecting access. Check services, events, conservation notices and current ticket arrangements. Allow one to three hours inside, then add the precinct walk.'],
          ['Choose one second layer or a transfer', 'In Canterbury, use the medieval lanes, walls or another confirmed site after the cathedral. In Dover, use the grounds and one available interpretation area after allowing for the climb; on 12 October 2026 the Operation Dynamo tunnels were closed and the Underground Hospital had mobility-access limits. If adding the other town, verify its train and remaining admission window first; a delay should cancel the second interior, not your return.'],
          ['Return from the named station', 'From the castle, budget the descent to Dover Priory or the verified bus stop. From Canterbury, walk to the actual West or East station shown for your departure; do not leave this until the last admission window.']
        ],
        fallback: 'If the onward train, admission or weather fails, deepen the first anchor instead of forcing both towns. Canterbury can become a precinct, medieval streets and a checked wall or abbey visit. In Dover, shorten the outdoor hill or town walk and retain the confirmed castle area; if the castle closes, choose a town and seafront section only when conditions suit. Do not count closed tunnels or access-limited spaces as a substitute.',
        watch: [
          ['Cathedral access follows worship and events', 'Hours and areas can change around services, special events and conservation work. Check the day notice and keep the precinct walk available as a respectful alternative.'],
          ['Use Canterbury’s named station', 'West and East sit on different service patterns. Use the station named by the ticket or live planner for arrival and return.'],
          ['Castle hill and interiors affect the window', 'Dover Priory is below the castle; the climb or bus takes time, and last entry precedes closing. The dated notice also listed Operation Dynamo tunnels closed and the Underground Hospital inaccessible for wheelchair or mobility-scooter users; recheck current access.']
        ],
        duration: 'Allow a full day for either cathedral or castle, including the station approach and meal. A Canterbury–Dover same-day sampler can consume eight to ten hours but still means a short visit at one anchor; an overnight split gives each a usable opening window.',
        combine: 'Combine Canterbury with its walls or St Augustine’s Abbey, or Dover Castle with a short town edge. Keep the White Cliffs as a separate weather-and-walking decision.',
        verify: 'Check Canterbury Cathedral’s date-specific worship and visitor hours, Southeastern/National Rail station pair and engineering notices, Dover Castle ticket slot/last admission/individual closures, and the Priory-to-castle hill or bus before travel.',
        sources: [
          ['https://www.canterbury-cathedral.org/visit/plan-your-visit/', 'Canterbury Cathedral — current visitor hours and admission'],
          ['https://www.canterbury-cathedral.org/visit/plan-your-visit/getting-here/', 'Canterbury Cathedral — rail and bus access'],
          ['https://www.english-heritage.org.uk/visit/places/dover-castle/', 'English Heritage — Dover Castle hours, timed admission and access status'],
          ['https://www.nationalrail.co.uk/', 'National Rail — date-specific Kent rail planning']
        ]
      }),
      g({
        slug: 'seven-sisters-eastbourne',
        name: 'Seven Sisters & Eastbourne',
        instrument: 'Cliff-edge turn-back chart',
        layout: 'chalk-profile-route',
        imageQuery: 'Seven Sisters cliffs Sussex England coast',
        imageAlt: 'White chalk cliffs of the Seven Sisters on the Sussex coast',
        reviewDateISO: '2026-10-12',
        reviewDate: '12 October 2026',
        purpose: 'Choose a safe, bounded Seven Sisters viewpoint or walk with a named start and finish, using Eastbourne or Seaford as the transport anchor rather than advertising the whole cliff line as one casual stroll.',
        summary: 'Use Exceat Visitor Centre as the named A259 gateway, connect by the bus route confirmed for your date, then choose a signed valley or cliff section with a timed turnaround and a safe return.',
        searchSummary: 'Plan Seven Sisters from Brighton, Seaford or Eastbourne via the date-checked Exceat bus. Pick a measured walk, check tide and cliff notices, and save daylight for the return.',
        searchKeywords: ['Exceat', 'Cuckmere Haven', 'Eastbourne', 'Seaford', 'Coaster 12', 'chalk cliffs', 'South Downs Way'],
        choices: [
          ['Country Park and valley', 'Use the visitor-centre or Cuckmere approach for river, valley and cliff views with a clear return. This is the most adaptable first visit.'],
          ['Eastbourne and Beachy Head edge', 'Begin or end in Eastbourne with one verified upland viewpoint. It adds town services but still requires exposure and a bus or climb.'],
          ['Long point-to-point walk', 'Attempt only with the official route, fitness, weather and daylight to match. This gives the complete profile but has the least tolerance for delays.']
        ],
        access: 'There is no Seven Sisters railway station. The Exceat Visitor Centre is on the A259 between Seaford and Eastbourne; the park says Brighton, Seaford and Eastbourne buses connect there with mainline stations. On the checked operator page, services 12 and 12X were listed; the park page also named 12A, so resolve that discrepancy in the live planner and follow the direction-specific stop and final bus. Official park walking estimates include Exceat to West Dean at about 0.8 km/15 minutes, to the beach about 1.6 km/30 minutes, and to Birling Gap about 5.6 km/2–3 hours; these are route estimates, not a promise of a return service. Do not mistake Exceat for a rail station or the river mouth for a safe crossing.',
        tradeoff: 'A short Exceat–valley–viewpoint out-and-back gives a useful landscape visit and preserves a bus margin; it does not traverse the Seven Sisters ridge. The longer Birling Gap or Beachy Head sections are dedicated exposed walks: the official estimates put Exceat–Birling Gap at 2–3 hours and Beachy Head at 3–4 hours, with your transport legs and rest stops added. A point-to-point route offers more cliff profiles but requires a verified exit at the far end, enough daylight and no expectation of rescuing the plan with a late bus.',
        stages: [
          ['Reach Exceat or your confirmed town start', 'Check the train and bus on the same date-specific planner. Record the correct side of the A259, destination display, return stop and last practical departure before leaving the staffed transport corridor.'],
          ['Set the safety and tide gate', 'At low ground, check official access, wind, visibility, rain and tide. Seven Sisters guidance says chalk falls are unpredictable: remain on signed paths, at least five metres from cliff edges and bases, and away from the river mouth at high tide. The coastal path goes around Cuckmere; do not ford or cross the mouth.'],
          ['Choose and time one route section', 'For a shorter outing, use the official Exceat–West Dean or beach distance and set your return time before setting out. Only commit to Birling Gap or Beachy Head when fitness, route, conditions and onward bus all fit; wind, climbs, mud and stops can slow the return.'],
          ['Reach the named stop in daylight', 'Use the exact bus stop and direction you checked. Preserve time for the A259 crossing and service delay; if the bus plan fails, remain at a safe town or visitor-centre location and use the confirmed rail alternative, never a road verge.']
        ],
        fallback: 'If wind, tide, visibility or path notices make the cliffs unsuitable, shorten to the signed lower valley route only if the park confirms access and you can avoid the river mouth safely. Otherwise keep an Eastbourne or Seaford town-and-seafront day with a confirmed interior, or return to Brighton. If buses are disrupted, do not try to walk between towns on the A259 verge or descend the cliff; use the date-verified rail option.',
        watch: [
          ['Cliffs and river mouth have hard boundaries', 'Guidance says remain on signed routes at least five metres from cliff edges and bases. The park warns of strong current at high tide and directs walkers around Cuckmere; do not descend to the base, ford or shortcut.'],
          ['Wind and mud change the clock', 'An exposed headwind, wet chalk or a steep climb can turn a short map distance into a slow return. Use the planned time gate and daylight, not a summit goal.'],
          ['Bus numbers need a live check', 'The park and operator did not match on service 12A in the checked snapshot. Confirm 12/12X or any replacement route, direction and last service in the operator planner for your date.']
        ],
        duration: 'Allow five to eight hours including the rail-and-bus approach for a measured Exceat outing. Exceat–Birling Gap or Beachy Head estimates alone are 2–4 hours depending on endpoint; add the onward return, rests and conditions. A full point-to-point coast walk is a dedicated daylight day, not an add-on after Brighton.',
        combine: 'Combine a short Seven Sisters route with Eastbourne or Seaford. Keep Brighton, Canterbury and Dover for separate days.',
        verify: 'Check Seven Sisters Country Park walking and cliff-safety pages, the official tide information for the Cuckmere mouth, wind/visibility/path notices, sunset, and the live National Rail plus operator bus planner including the final service. Recheck the 12A discrepancy on the travel date.',
        sources: [
          ['https://www.sevensisters.org.uk/plan-your-visit/getting-here/', 'Seven Sisters Country Park — Exceat gateway and bus access'],
          ['https://www.sevensisters.org.uk/things-to-do/walking/', 'Seven Sisters Country Park — official walk distances and estimates'],
          ['https://www.sevensisters.org.uk/plan-your-visit/cliff-safety/', 'Seven Sisters Country Park — cliff, tide and river-mouth safety'],
          ['https://www.buses.co.uk/services/BH/12', 'Brighton & Hove Buses — current Coastliner 12 and 12X information'],
          ['https://www.nationalrail.co.uk/', 'National Rail — date-specific coast rail planning']
        ]
      })
    ]
  }),
  c({
    slug: 'birmingham-west-midlands',
    name: 'Birmingham & the West Midlands',
    nation: 'England',
    band: 'england-midlands-north',
    family: 'canal-and-workshop-grid',
    label: 'Canal-and-workshop grid',
    tagline: 'Use Birmingham as a civic base, then give Shakespeare or industrial valleys their own line.',
    hubIntro: 'Birmingham’s canals, civic centre and Jewellery Quarter form a connected urban day, while Stratford-upon-Avon and Ironbridge require different rail or bus corridors and separate heritage bookings. The region works best from one base with one clearly chosen outward branch per day.',
    stay: 'Three nights supports Birmingham plus Stratford or Ironbridge; four nights allows both branches without daily luggage. Birmingham New Street is convenient but complex, so lodging near a usable pedestrian exit or tram line matters more than being inside the station complex.',
    transfer: 'New Street, Moor Street and Snow Hill serve different rail corridors. Stratford and Shrewsbury or Telford connections are not one interchangeable network, and Ironbridge adds a bus or car leg. Check the final urban return as well as the regional train.',
    season: 'The city remains resilient year-round, while canal walks, open-air Shakespeare spaces and the Ironbridge valley depend more on rain and daylight. Christmas markets and major events can alter central streets and capacity.',
    fallback: 'If a regional line fails, retain a complete Birmingham collection-and-canal day. If outdoor conditions deteriorate in Stratford or Ironbridge, shorten to one major interior and return early.',
    sources: [
      ['https://visitbirmingham.com/', 'Visit Birmingham — official destination guide'],
      ['https://www.tfwm.org.uk/', 'Transport for West Midlands — official network information'],
      ['https://www.nationalrail.co.uk/', 'National Rail — rail planning and disruption information']
    ],
    guides: [
      g({
        slug: 'birmingham-canals-jewellery-quarter',
        name: 'Birmingham Canals & Jewellery Quarter',
        instrument: 'Workshop-to-water city section',
        layout: 'industrial-city-cutaway',
        imageQuery: 'Birmingham canals Gas Street Basin city',
        imageAlt: 'Canals and historic buildings at Gas Street Basin in Birmingham',
        purpose: 'Connect Birmingham’s civic centre, canal basin and Jewellery Quarter as one industrial-city argument, deciding where a museum or workshop interior belongs instead of wandering between disconnected regeneration districts.',
        summary: 'Exit the correct central station, read the civic core, follow one canal line to Gas Street and Brindleyplace, then use tram or a deliberate walk to the Jewellery Quarter.',
        choices: [
          ['Civic collections and canals', 'Use Birmingham Museum or the Library area with a bounded canal circuit. This gives the strongest central-city overview.'],
          ['Jewellery Quarter depth', 'Prioritize a workshop museum, cemetery or maker district, using the centre as a short prelude. It reveals production history but adds a separate transit leg.'],
          ['Contemporary food and water', 'Focus on Digbeth or canal-side public space and markets. This is flexible but lighter on formal industrial interpretation.']
        ],
        access: 'New Street’s exits lead to different street levels; Moor Street is better for some eastern arrivals and Snow Hill for the Jewellery Quarter corridor. Choose the first station exit and final tram or rail stop before entering the shopping core.',
        tradeoff: 'The Jewellery Quarter, Digbeth and a full central canal loop point in different directions. Choosing one secondary district sacrifices another but prevents the day from becoming repeated station crossings.',
        stages: [
          ['Exit to the civic level', 'Use the station exit nearest Victoria Square or the Bullring according to the first anchor. Avoid navigating through the station twice.'],
          ['Read the canal interface', 'Move through the Library and Centenary Square to Gas Street Basin or Brindleyplace, following one towpath line with public exits.'],
          ['Commit to one production district', 'Take tram, rail or a named street route to the Jewellery Quarter, or choose Digbeth instead. Do not attempt both outer districts.'],
          ['Return on the matching network', 'Finish at Jewellery Quarter, Snow Hill, Moor Street or New Street according to the branch. Keep the final walk above ground when towpaths feel isolated.']
        ],
        fallback: 'If a workshop museum closes, use the Quarter’s streets, cemetery or library and return to central collections. If canal paths flood or feel unsuitable, stay on parallel signed streets.',
        watch: [
          ['Station exits change the city map', 'New Street is a multi-level barrier as well as a station. Follow named exits and do not assume every platform leads to the same square.'],
          ['Towpaths are not always the best night route', 'Lighting, closures and quiet stretches vary. Use surface streets after dark or when signed diversions appear.'],
          ['Museums can have limited opening patterns', 'Workshop sites may not open daily. Confirm the exact date before building the district around one interior.']
        ],
        duration: 'Allow six to eight hours for the civic core, canal and one secondary district. A central canal-and-library route can fit four hours.',
        combine: 'Combine canals with the Jewellery Quarter or Digbeth, not both. Keep Stratford and Ironbridge as separate full-day branches.',
        verify: 'Check the chosen museum, tram and rail status, canal notices and central event closures before leaving the station.',
        sources: [
          ['https://www.birminghammuseums.org.uk/', 'Birmingham Museums — official visitor information'],
          ['https://canalrivertrust.org.uk/canals-and-rivers/birmingham-canal-main-line', 'Canal & River Trust — Birmingham canal information']
        ]
      }),
      g({
        slug: 'stratford-shakespeare',
        name: 'Stratford-upon-Avon & Shakespeare',
        instrument: 'Performance-day scene sheet',
        layout: 'stage-and-river-sequence',
        imageQuery: 'Stratford upon Avon Shakespeare theatre river',
        imageAlt: 'The Royal Shakespeare Theatre beside the River Avon',
        purpose: 'Choose a Shakespeare Birthplace Trust house, theatre performance or river-town circuit as the main event, and work backward from opening and curtain times rather than collecting every associated house.',
        summary: 'Walk from the station into the birthplace and market-town core, continue to the river and theatre, then protect the train return or performance exit before adding another historic property.',
        choices: [
          ['Birthplace and town evidence', 'Use one or two Trust properties with the streets and church. This gives biographical context but requires current property openings.'],
          ['Royal Shakespeare Company day', 'Build the route around a performance, tour or theatre visit. This creates the clearest time structure and changes meal and return choices.'],
          ['River and market town', 'Keep interiors selective and read the Avon, church and town fabric. It is flexible and lower-pressure but lighter on formal interpretation.']
        ],
        access: 'Stratford-upon-Avon station is west of the historic and theatre core. Some associated houses lie outside the centre and need a bus, bicycle or car. A late performance may finish after the easiest rail return, so resolve the evening journey before booking.',
        tradeoff: 'Every Shakespeare property, a theatre tour and a performance cannot fit usefully. Choosing the show sacrifices house count; choosing properties may sacrifice an evening train or relaxed river route.',
        stages: [
          ['Walk into the market town', 'Follow the station route to the birthplace quarter, saving the return line and any evening station entrance.'],
          ['Complete one evidence set', 'Visit the selected property or use the town’s public Shakespeare trail. Do not buy or queue for every house by default.'],
          ['Move to river and theatre', 'Continue toward Holy Trinity Church and the Avon, then reach the theatre with time for ticket collection and a meal.'],
          ['Exit to the planned return', 'After the river or performance, follow the preselected station, bus or overnight plan. Do not discover the last train at curtain call.']
        ],
        fallback: 'If a property closes, retain the birthplace exterior, church, river and theatre public areas when open. If a performance cancels, use the longer town-and-river route rather than adding a distant Warwickshire house.',
        watch: [
          ['Properties have separate openings', 'Trust sites can follow different days and seasons. Confirm the exact house rather than a general Shakespeare ticket description.'],
          ['Curtain time controls dinner and return', 'A matinee and evening performance create different transport contracts. Plan backward from the final station or accommodation.'],
          ['Outlying houses are real transfers', 'Anne Hathaway’s Cottage and other sites are not all central. Include the mode and return, or leave them out.']
        ],
        duration: 'Allow five to seven hours for the town and selected properties, or a full day with a performance. An evening show is best with an overnight or a verified late return.',
        combine: 'Combine the birthplace quarter with river and theatre. Keep Warwick Castle, the Cotswolds and Birmingham city for different days.',
        verify: 'Check the exact Shakespeare property, RSC performance or tour, train times and late-evening return before fixing the sequence.',
        sources: [
          ['https://www.shakespeare.org.uk/visit/', 'Shakespeare Birthplace Trust — official visitor information'],
          ['https://www.rsc.org.uk/your-visit', 'Royal Shakespeare Company — official visit planning']
        ]
      }),
      g({
        slug: 'ironbridge-shrewsbury',
        name: 'Ironbridge Gorge & Shrewsbury',
        instrument: 'Industrial-valley connection map',
        layout: 'gorge-museum-spine',
        imageQuery: 'Iron Bridge Shropshire gorge England',
        imageAlt: 'The Iron Bridge spanning the River Severn in Shropshire',
        purpose: 'Decide whether Ironbridge’s dispersed industrial museums or Shrewsbury’s compact river town is the main destination, naming the last-mile bus or car plan through the gorge.',
        summary: 'Use Shrewsbury or Telford as the rail gateway, complete one museum cluster or town circuit, and avoid assuming the gorge’s sites form a short walk from a single station.',
        choices: [
          ['Ironbridge museum cluster', 'Choose one or two related gorge museums and the Iron Bridge itself. This gives industrial depth but requires a defined last-mile route.'],
          ['Shrewsbury river town', 'Keep the day around the castle, abbey, market streets and Severn loop. It is rail-simple and resilient in poor weather.'],
          ['Two-place sampler', 'Use a short Shrewsbury circuit plus one Ironbridge site with a booked transfer. It gains contrast but sacrifices museum and town depth.']
        ],
        access: 'Ironbridge has no central mainline station; Telford and Shrewsbury are different gateways, followed by bus, taxi or car. Gorge museums are distributed along the valley. Save the exact site, stop and final return before leaving the rail station.',
        tradeoff: 'A full museum passport-style day and a complete Shrewsbury circuit do not fit comfortably. Choosing the gorge sacrifices town time; choosing Shrewsbury gives up the industrial landscape but protects a simple rail return.',
        stages: [
          ['Arrive at the useful gateway', 'Use Telford or Shrewsbury according to the confirmed last mile, not merely the fastest headline train.'],
          ['Complete one coherent cluster', 'In Ironbridge, group the bridge with nearby museums; in Shrewsbury, follow one river-and-centre loop. Avoid crossing between scattered sites without transport.'],
          ['Add one secondary layer', 'Use a second related museum or a bounded town stop only when the return remains secure. Keep meal time in the same valley or centre.'],
          ['Return before rural frequency thins', 'Reach the bus stop or rail station with margin. A taxi is contingency, not an unconfirmed final service.']
        ],
        fallback: 'If the gorge connection fails, stay in Shrewsbury for the castle, museum, market and river. If a museum closes, use the bridge and one open related site rather than chasing a distant valley branch.',
        watch: [
          ['The gorge is a distributed museum landscape', 'Ticket products and sites are not one building. Confirm which locations are open and how they connect.'],
          ['Valley roads affect buses', 'Traffic and diversions can disturb a seemingly short last mile. Protect the final rail connection.'],
          ['River conditions alter paths', 'High water can affect low paths around the Severn. Use signed streets and current notices instead of forcing a riverside loop.']
        ],
        duration: 'Allow a full day for an Ironbridge cluster or five to seven hours for Shrewsbury. Combining them needs an early start and a preplanned transfer.',
        combine: 'Combine two adjacent Ironbridge museums or Shrewsbury’s centre with one river loop. Keep Stratford and Birmingham city for separate days.',
        verify: 'Check Ironbridge museum openings and ticket coverage, the exact bus or road access, Shrewsbury rail service and river notices before travel.',
        sources: [
          ['https://www.ironbridge.org.uk/plan-your-visit/', 'Ironbridge Valley of Invention — official visit planning'],
          ['https://originalshrewsbury.co.uk/', 'Original Shrewsbury — official town visitor guide']
        ]
      })
    ]
  }),
  c({
    slug: 'peak-district-derbyshire',
    name: 'Peak District & Derbyshire',
    nation: 'England',
    band: 'england-midlands-north',
    family: 'limestone-weather-gate',
    label: 'Limestone weather gate',
    tagline: 'Name the rail valley, estate gate or dale before calling it a Peak District day.',
    reviewDateISO: '2026-10-12',
    reviewDate: '12 October 2026',
    hubIntro: 'Treat the Peak District as three separate day systems: the Hope Valley rail stations and exposed ridges; the Sheffield–Chatsworth–Bakewell bus corridor; and the southern dales reached from Ashbourne, Buxton or a pre-booked community bus. They do not share one convenient gateway. Choose the bed and the return connection before choosing the view.',
    searchSummary: 'Choose Sheffield for Northern’s Hope Valley trains and TM Travel 218; Buxton shortens the southern-dale approach, while Bakewell has no rail station. Three nights gives about two full days; four gives three days for the three areas but no weather spare; five gives four full days with a weather buffer.',
    stay: 'For a rail-first trip, use Sheffield station or the Interchange as a one-base gateway: Northern’s Hope Valley stopping service reaches Edale, Hope, Bamford and Hathersage, and TM Travel’s 218 runs from Sheffield to Bakewell via Chatsworth. Count full field days, not just nights: three nights usually gives two full days, so choose two guide areas and let the forecast decide which day moves; four nights gives three full days, one for each area but no spare weather day; five nights gives four full days, enough for all three areas plus a weather buffer. Keep arrival and departure days in Sheffield rather than assuming a rural bus excursion will fit. Buxton shortens the southern-dales day but adds a separate journey to Edale. Bakewell has no railway station and works only when the bus timetable fits the whole stay. A village inn can shorten the morning approach but leaves you dependent on a thinner evening service.',
    transfer: 'On the Hope Valley line, use the Northern all-stations train between Manchester Piccadilly and Sheffield for Edale, Hope, Bamford or Hathersage; East Midlands Railway’s express trains do not stop at those small stations. From Sheffield, TM Travel 218 links Sheffield Interchange, Chatsworth House and Bakewell. Chatsworth also lists separate 170, 160 and 58 bus links from Chesterfield, Matlock and Buxton, with different operating days. For Dovedale, the National Trust currently describes buses from Buxton station toward Ashbourne, with a walk from Thorpe on Monday–Saturday and a different Ilam village stop on Sundays and bank holidays; Derbyshire Connect is a separate, advance-bookable service. Route numbers, fares, exact departures and seats for a future date are not confirmed here. Check National Rail, the operator and Travel Derbyshire for the actual travel day.',
    season: 'Long daylight helps with a high route, but the Met Office mountain forecast for the Peak District is more useful than a valley town forecast for Mam Tor or the Great Ridge. In autumn and winter, mud, wind, low cloud and an early sunset can remove the exposed section; carry a shorter lower-valley plan. Spring and summer bring longer walking windows but crowded trailheads and seasonal bus timetables. Chatsworth’s day-ticket calendar, house and garden access, event entry and car-park arrangements change by date; check the exact product and reserve in advance when an event or Christmas visit is the reason for going. Seasonal bus tours are not a year-round connection.',
    fallback: 'If wind, cloud, heavy rain or path conditions rule out the ridge, keep the day in Edale’s lower valley or move to a serviced town such as Sheffield or Buxton. If a rural bus or train is disrupted, do not improvise a cross-valley taxi or assume another valley is reachable: use the booked estate layer only if its opening and return still work, otherwise take a town day and protect the next departure.',
    sources: [
      ['https://www.peakdistrict.gov.uk/visiting/planning-your-visit', 'Peak District National Park — planning, access and public-transport information'],
      ['https://www.eastmidlandsrailway.co.uk/routes-destinations/community-rail-lines/hope-valley', 'East Midlands Railway — Hope Valley line and stopping-service guide'],
      ['https://www.northernrailway.co.uk/travel/timetables', 'Northern — current train timetables and service changes'],
      ['https://travelderbyshire.co.uk/journey/', 'Travel Derbyshire — county bus journey planner'],
      ['https://www.chatsworth.org/visit-chatsworth/visitor-information/how-to-get-here/', 'Chatsworth — current bus and rail access'],
      ['https://www.metoffice.gov.uk/weather/specialist-forecasts/mountain/peak-district', 'Met Office — Peak District mountain forecast']
    ],
    guides: [
      g({
        slug: 'bakewell-chatsworth',
        name: 'Bakewell & Chatsworth',
        instrument: 'Market-to-estate bus ledger',
        layout: 'estate-valley-docket',
        imageQuery: 'Chatsworth House Derbyshire landscape',
        imageAlt: 'Chatsworth House in the Derbyshire landscape',
        reviewDateISO: '2026-10-12',
        reviewDate: '12 October 2026',
        purpose: 'Choose a full Chatsworth day or a Bakewell town day, then use the Sheffield–Chatsworth–Bakewell 218 corridor only if its return times fit. The estate gate and market town are separate stops, not a short stroll between them.',
        summary: 'Use the 218 corridor from Sheffield, select one Chatsworth ticketed layer or a Bakewell town walk, and return from the stop you actually planned. No fare, departure time or ticket availability is promised.',
        searchSummary: 'Take TM Travel 218 from Sheffield to Chatsworth or Bakewell; choose one stop as the day’s anchor, verify the dated return, and check the estate ticket before travel.',
        choices: [
          ['Chatsworth house and garden', 'Book the date-specific day ticket if the house, garden, farmyard or playground is the main reason for travelling. Pick one main zone first; the site is large enough that adding Bakewell can crowd the return.'],
          ['Chatsworth parkland', 'Choose the estate’s current free-access parkland and woodland options when you want landscape time without a house visit. Confirm the open route and any event restrictions; free access does not mean every garden or interior is included.'],
          ['Bakewell town and river', 'Make Bakewell the anchor: walk the centre and a short signed riverside section, then return by a confirmed bus. Add Chatsworth only if a later 218 journey and its gate hours genuinely fit.']
        ],
        access: 'Bakewell has no railway station. Chatsworth identifies TM Travel 218 between Sheffield and Bakewell with a daily stop at Chatsworth House; board at Sheffield Interchange, across the road from Sheffield station. The operator and local authority publish date-specific timetables, and the estate warns that services change. Check the exact outbound and return stops, current fare and last suitable bus before buying admission. No live seat or ticket availability was checked for a future date.',
        tradeoff: 'A full house-and-garden visit, farmyard, long estate walk and relaxed Bakewell circuit do not fit comfortably into one transfer day. Give the estate its own full day if its interior is the priority; choose Bakewell on a separate day when market-town time matters more than a booked estate visit.',
        stages: [
          ['Start at Sheffield Interchange', 'Check that the chosen TM Travel 218 departure serves Chatsworth House on your date. Keep the Bakewell and Chatsworth stops distinct in your saved itinerary.'],
          ['Enter through the booked gate', 'Use the visitor entrance named on the current ticket. Decide whether the house, garden or family facilities are the day’s anchor, and allow for the walk between estate areas.'],
          ['Walk one estate section', 'Use the current Chatsworth map for the house-to-garden or parkland section you selected. Add a second zone only when the remaining opening window and return bus permit it.'],
          ['Leave from the planned stop', 'Return to the house stop or continue to Bakewell only if the actual timetable supports it. Leave a margin before the last service; do not rely on an unbooked rural taxi.']
        ],
        fallback: 'If the chosen Chatsworth ticket or interior is unavailable, make Bakewell the full day and use a confirmed 218 return. If the 218 is disrupted before departure, stay in Sheffield or choose a rail-served town day; do not travel out and hope for a replacement bus.',
        watch: [
          ['Admission scope changes by date', 'The official ticket page lists day tickets and guided tours, but current prices, openings and availability depend on the selected date. This guide does not quote a price or promise a slot.'],
          ['The bus is the return plan', 'Bakewell has no train station. Check TM Travel 218 in both directions, including the exact Chatsworth stop, before choosing to combine town and estate.'],
          ['Christmas parking is pre-booked', 'Chatsworth says its car park over the Christmas period requires a pre-booked Christmas event, dining or market parking ticket. Do not treat this as ordinary walk-in parking.']
        ],
        duration: 'Reserve a full day for either Chatsworth from Sheffield or a separate Bakewell outing. This is a planning allowance, not a measured visit time or an operator guarantee.',
        combine: 'Use Chatsworth and Bakewell on the same day only when the date-specific 218 timetable leaves enough time at the booked estate and a safe return. Keep Hope Valley and Dovedale on separate days.',
        verify: 'Check the date-specific Chatsworth ticket scope, opening and event notices; TM Travel 218 stops and times; local bus disruption; and the Peak District forecast. Current admission price, future availability and the actual bus fare are not recorded here.',
        sources: [
          ['https://www.chatsworth.org/visit-chatsworth/book-tickets/ticket-options/', 'Chatsworth — current day-ticket and guided-tour options'],
          ['https://www.chatsworth.org/visit-chatsworth/visitor-information/how-to-get-here/', 'Chatsworth — 218 bus, stop and seasonal access information'],
          ['https://www.travelsouthyorkshire.com/en-gb/timetabledetails/e541185b-84d3-4b2a-b4cc-0cb4441641e6', 'Travel South Yorkshire — TM Travel 218 timetable'],
          ['https://travelderbyshire.co.uk/journey/', 'Travel Derbyshire — county bus journey planner']
        ]
      }),
      g({
        slug: 'hope-valley-edale',
        name: 'Hope Valley & Edale',
        instrument: 'Railhead-to-ridge turn-back ruler',
        layout: 'moorline-profile',
        imageQuery: 'Edale Hope Valley Peak District hills',
        imageAlt: 'Green hills above Edale in the Peak District',
        reviewDateISO: '2026-10-12',
        reviewDate: '12 October 2026',
        purpose: 'Use the correct Hope Valley stopping train, choose an Edale low-valley or Great Ridge day, and make the summit decision from the mountain forecast rather than the station weather.',
        summary: 'Take Northern’s Manchester–Sheffield stopping train to Edale, Hope, Bamford or Hathersage. Walk a mapped valley or ridge section with a firm turn-back and return to the same railhead before the service gap.',
        searchSummary: 'Use Northern’s all-stations Hope Valley train for Edale, Hope, Bamford or Hathersage; choose the lower valley or a mapped Great Ridge walk, then return from the same railhead.',
        choices: [
          ['Edale village and lower valley', 'Stay on a lower signed path from Edale station toward the village and return the same way. It keeps a shorter option available when cloud or wind worsens.'],
          ['Great Ridge via Mam Tor', 'Use a mapped approach from Edale, then walk only the bounded ridge section that the visibility, wind and daylight support. The exposed skyline is the attraction and the reason to turn back early.'],
          ['A second railhead', 'Build a station-to-station walk only when you have a named legal path, both train legs and a backup return. Two station names on a map do not guarantee a continuous easy footpath.']
        ],
        access: 'East Midlands Railway’s Hope Valley page distinguishes its express trains from the all-stations Manchester Piccadilly–New Mills–Sheffield service run by Northern; use the Northern stopping service for Edale, Hope, Bamford or Hathersage. Check the exact station, engineering notices and return train on the travel date. Edale station is not the Mam Tor trailhead: the walking approach and ascent are part of the day, not a quick station-side viewpoint.',
        tradeoff: 'A low-valley walk gives up the skyline but keeps more weather and rail margin. The Great Ridge adds exposed ground, ascent and slower terrain; it should replace the lower route, not be stacked on top of Chatsworth or a fixed evening connection.',
        stages: [
          ['Board the stopping train', 'Use Northern’s timetable for the exact date and get off at the station that matches your pre-saved route. Do not board an express that skips the village stations.'],
          ['Walk into Edale first', 'From Edale station, use the signed approach toward the village and assess wind, cloud, rain and footing before taking on ascent. Keep the return station and next train visible in the plan.'],
          ['Choose the ridge or turn low', 'If the Met Office mountain forecast and conditions on the ground support it, follow a mapped, signed approach to the Great Ridge and select a turnaround point before the skyline. If not, remain in the valley; do not substitute another exposed edge.'],
          ['Return to the same railhead', 'Retrace the planned descent to Edale and reach the platform with margin. Small-station shelter and service gaps make a missed train a real itinerary change, not a minor delay.']
        ],
        fallback: 'When the ridge forecast is poor, make Edale village and a lower valley out-and-back the complete walk, then return from Edale. If the rail service is disrupted, use the operator’s live update to decide whether to remain at your base; no rural replacement bus is assumed.',
        watch: [
          ['Express and stopping trains differ', 'The East Midlands Railway express does not stop at the Hope Valley villages; use Northern’s all-stations service and check the return before setting off.'],
          ['Summit weather is not village weather', 'Use the Met Office Peak District mountain forecast for cloud, wind and daylight as well as a local observation. A clear view from Edale does not guarantee a clear ridge.'],
          ['The route is a walk, not a summit transfer', 'Mam Tor is not at Edale station. Carry the mapped path and a turn-back rule; do not shortcut steep slopes or follow a phone bearing across private or eroded ground.']
        ],
        duration: 'Set aside a full daylight block for the Great Ridge from Edale; choose a shorter village-and-valley return when that block or the forecast is not available. These are editorial pacing choices, not measured walking times.',
        combine: 'Keep one railhead and one mapped walk as the day’s main plan. A meal in the same village is a sensible extension; Chatsworth, Bakewell and Dovedale are separate day systems.',
        verify: 'Check Northern’s date-specific timetable and planned works, the Met Office Peak District mountain forecast, Peak District access notices, daylight and a current mapped route. No fare, departure time or future service availability is promised.',
        sources: [
          ['https://www.eastmidlandsrailway.co.uk/routes-destinations/community-rail-lines/hope-valley', 'East Midlands Railway — Hope Valley line and village stopping trains'],
          ['https://www.northernrailway.co.uk/travel/timetables', 'Northern — all-stations timetable and service changes'],
          ['https://www.nationalrail.co.uk/journey-planner/', 'National Rail — date-specific train planning and ticket search'],
          ['https://www.metoffice.gov.uk/weather/specialist-forecasts/mountain/peak-district', 'Met Office — Peak District mountain forecast'],
          ['https://www.peakdistrict.gov.uk/visiting/planning-your-visit', 'Peak District National Park — paths, access and visitor planning']
        ]
      }),
      g({
        slug: 'dovedale-ashbourne',
        name: 'Dovedale & Ashbourne',
        instrument: 'Dale-water and bus gauge',
        layout: 'stepping-stone-valley-plan',
        imageQuery: 'Dovedale stepping stones Derbyshire',
        imageAlt: 'Stepping stones crossing the River Dove in Dovedale',
        reviewDateISO: '2026-10-12',
        reviewDate: '12 October 2026',
        purpose: 'Decide whether Dovedale is viable from a fixed bus or a pre-booked Derbyshire Connect slot, and make the stepping-stone crossing optional rather than the condition for a successful walk.',
        summary: 'Use the National Trust’s current Thorpe or Ilam access instructions, reserve Derbyshire Connect if needed, and walk one lower dale out-and-back only while paths and river conditions allow.',
        searchSummary: 'Compare the bus from Buxton station with book-ahead Derbyshire Connect; the Thorpe and Ilam stops differ by operating day, and the stepping stones remain optional.',
        choices: [
          ['Thorpe to the lower dale', 'Use this only if the current Buxton–Ashbourne bus and the walk from Thorpe fit both directions. The National Trust currently describes Thorpe as two miles from the Dovedale access.'],
          ['Ilam Park and the stepping-stones path', 'Start from Ilam when the day-specific bus stop and a mapped return work. The National Trust lists an Ilam Park–Dovedale Stepping Stones walk; the stones themselves are optional and depend on conditions.'],
          ['Ashbourne and the Tissington Trail', 'Keep the day at the serviced town and use a suitable surfaced trail segment only if the exact access and return are confirmed. This is a better plan when Dovedale transport, river conditions or footing do not work.']
        ],
        access: 'Dovedale has no railway station. The National Trust currently describes buses from Buxton station toward Ashbourne: alight at Thorpe with a further walk on Monday–Saturday, or use Ilam village on Sundays and bank holidays; its page does not state a route number. Derbyshire Connect is a different book-ahead service that covers Ilam and Thorpe, subject to the date and available slots. The National Trust describes uneven surfaces, steps and stiles; read its access statement before treating any dale walk as suitable for limited mobility.',
        tradeoff: 'A short lower-valley out-and-back gives up a long circuit but protects the bus and daylight margin. The full Thorpe–Dovedale approach adds a walk before the dale itself; a longer route adds terrain and exposure without a quick rail or bus rescue.',
        stages: [
          ['Confirm the actual gateway', 'Read the National Trust bus note for the travel day, then check the operator timetable. For Derbyshire Connect, reserve a specific slot before travelling; the service is not a walk-up fixed-route bus.'],
          ['Reach Ilam or Thorpe', 'Use the stop that operates on your date and save the return in both directions. From Thorpe, account for the additional walk before reaching the Dovedale path.'],
          ['Walk the lower dale and decide at the stones', 'Follow the current National Trust map along the valley. Cross only if the stones are open and the water, surface and group are safe; otherwise turn back on the same bank and still count the outing as complete.'],
          ['Return before the rural connection', 'Retrace the planned route to Ilam or Thorpe with time for the final walk and any booked pickup. If the return is not secure, shorten the dale before entering it.']
        ],
        fallback: 'If the bus stop, Derbyshire Connect slot, crossing or path does not work, stay in Ashbourne and choose a confirmed Tissington Trail segment or a town day. Do not enter the river, cross a closure or walk narrow rural roads to save the itinerary.',
        watch: [
          ['Derbyshire Connect needs a booking', 'Its current booking instructions allow advance requests and require notice before travel; a Saturday journey has an earlier phone deadline. Confirm the live rules and available slot before making Dovedale the day’s anchor.'],
          ['The stones are not a required crossing', 'Water, crowding, closures or footing can make a crossing unsuitable. The mapped approach can still be an out-and-back on the near bank.'],
          ['The published path is uneven', 'The National Trust lists steps, stiles and uneven surfaces at Ilam and Dovedale. Choose Ilam’s access information or another lower-risk outing rather than assuming the dale is level.']
        ],
        duration: 'Allow a full day for the bus or booked community-transport journey, approach walk and Dovedale out-and-back. Treat a longer White Peak route as a separate day, not a stretch goal after the same transfer.',
        combine: 'Combine Dovedale with Ashbourne only when the confirmed return leaves daylight for both. Keep Chatsworth and Hope Valley on separate days.',
        verify: 'Check the National Trust opening, access statement and route map; the Buxton–Ashbourne service and stop for the actual weekday; Derbyshire Connect booking rules and slot availability; and the Met Office forecast. No bus number, fare, future seat or parking availability is promised.',
        sources: [
          ['https://www.nationaltrust.org.uk/visit/peak-district-derbyshire/ilam-park-dovedale-and-the-white-peak', 'National Trust — Dovedale visitor information'],
          ['https://www.ashbournect.org.uk/derbyshire-connect', 'Ashbourne Community Transport — Derbyshire Connect booking information'],
          ['https://travelderbyshire.co.uk/journey/', 'Travel Derbyshire — current county bus journey planner'],
          ['https://www.metoffice.gov.uk/weather/specialist-forecasts/mountain/peak-district', 'Met Office — Peak District weather forecast']
        ]
      })
    ]
  }),
  c({
    slug: 'liverpool-manchester',
    reviewDateISO: '2026-10-12',
    reviewDate: '12 October 2026',
    name: 'Liverpool, Manchester & Chester',
    nation: 'England',
    band: 'england-midlands-north',
    family: 'two-city-industrial-board',
    label: 'Two-city industrial board',
    tagline: 'Read the station board first; let the Mersey, canal basin or Roman wall set each separate day.',
    hubIntro: 'This is a three-city rail plan, not a line of interchangeable stops. Liverpool’s Pier Head, docks and cathedral ridge sit west and south of Lime Street; Manchester spreads from Piccadilly, Oxford Road, Victoria and Deansgate into distinct tram and museum districts; Chester is a compact walled centre reached on its own rail leg. Keep each city in its own day zone. A short intercity journey does not make a waterfront museum, a campus gallery and Chester’s walls one executable itinerary.',
    searchSummary: 'Plan Liverpool, Manchester and Chester as separate days: stations serve different waterfront, museum and walled-city districts. Choose a base and check the return.',
    metaDescription: 'Plan Liverpool, Manchester and Chester as separate days: stations serve different waterfront, museum and walled-city districts. Choose a base and check the return.',
    stay: 'Three nights: choose Liverpool or Manchester as the single base, give each city one full day and leave Chester for another trip. Four nights: one base can support a Liverpool day, a Manchester day and a separate Chester excursion if the live train plan fits. With five nights, consider a two-city split only when an evening event or an early rail start makes the hotel move worthwhile. In Liverpool, compare Lime Street for mainline arrivals with Central or James Street for the southern centre and waterfront. In Manchester, choose Piccadilly, Oxford Road, Victoria or Deansgate by the trains and district you will actually use; check match, concert and conference dates before fixing a hotel.',
    transfer: 'Plan each intercity leg by its full station name in National Rail: Liverpool Lime Street and Manchester Piccadilly, Oxford Road, Victoria and Deansgate are different endpoints, not synonyms for their cities. In Liverpool, Lime Street is the mainline station; James Street, Moorfields and Liverpool Central belong to the separate Merseyrail network. James Street is the useful rail name for Pier Head; Central is the key city-centre interchange and the Merseyrail map shows Chester on its network. Manchester Metrolink is another system: the Science and Industry Museum lists Deansgate as its nearest railway station and Deansgate–Castlefield as its nearest tram stop. Check date-specific engineering and the actual final return before choosing between cities.',
    season: 'Rain can make the indoor collections valuable, but do not treat a museum district as a guaranteed all-open fallback. On 12 October 2026, National Museums Liverpool’s official pages listed the Maritime Museum and International Slavery Museum as closed for essential works; the Museum of Liverpool had its own dated visiting schedule. The Science and Industry Museum was open while its restoration project kept some buildings closed. Recheck the exact venue and exhibition shortly before travel. Football, arena events, conferences and festivals can change hotel demand and station crowding in any season; waterfront wind and winter daylight shorten the comfortable outdoor plan.',
    fallback: 'If the Liverpool–Manchester rail leg is disrupted, keep the day in the city where you wake: use the Museum of Liverpool only if its own calendar fits, or choose a current Manchester collection and a compact central walk. Do not substitute the currently closed maritime museums or a museum building under restoration without checking what is actually accessible. In Chester, replace a weather-exposed wall section with the Cathedral, The Rows and street-level Roman sites only after checking their own access.',
    sources: [
      ['https://www.nationalrail.co.uk/', 'National Rail — live station-specific rail planning'],
      ['https://www.merseyrail.org/journey-planning/plan-your-journey/network-map/', 'Merseyrail — network map, stations and service status'],
      ['https://tfgm.com/plan-a-journey', 'Transport for Greater Manchester — current tram and bus journey planning'],
      ['https://www.liverpoolmuseums.org.uk/museum-of-liverpool', 'National Museums Liverpool — Museum of Liverpool visit information'],
      ['https://www.liverpoolmuseums.org.uk/international-slavery-museum', 'National Museums Liverpool — current International Slavery Museum status'],
      ['https://www.scienceandindustrymuseum.org.uk/visit', 'Science and Industry Museum — current openings, restoration and admission'],
      ['https://visitcheshire.com/directory/chester-city-walls', 'Visit Cheshire — Chester City Walls access and repair notice']
    ],
    faq: [
      ['Can Liverpool, Manchester and Chester fit into three nights?', 'Give Liverpool and Manchester one full day each from a single base and save Chester for another trip. Adding all three turns the trip into station transfers rather than three useful visits.'],
      ['Which Liverpool station should I use for the waterfront?', 'Liverpool Lime Street is the mainline arrival point. James Street is on Merseyrail near Pier Head; Central and Moorfields serve other parts of the centre. Check the exact service and return station before you start walking.'],
      ['Are all the Liverpool waterfront museums open?', 'No. On 12 October 2026 National Museums Liverpool listed the Maritime Museum and International Slavery Museum as closed for essential works. The Museum of Liverpool has a separate calendar; recheck every venue before making it the day’s anchor.']
    ],
    guides: [
      g({
        slug: 'liverpool-waterfront-cathedrals',
        reviewDateISO: '2026-10-12',
        reviewDate: '12 October 2026',
        name: 'Liverpool Waterfront & Cathedrals',
        instrument: 'Mersey-to-ridge city ruler',
        layout: 'dock-and-cathedral-axis',
        imageQuery: 'Liverpool waterfront Three Graces Mersey',
        imageAlt: 'Domed white-stone Port of Liverpool Building at the Pier Head',
        purpose: 'Choose the flat Pier Head and one currently open museum, or commit to the longer climb from the Mersey to Hope Street. The route keeps the working port’s buildings, Liverpool’s commercial history and cathedral access distinct.',
        summary: 'From Liverpool Lime Street, descend through the civic centre to Pier Head, choose the Museum of Liverpool only after checking its date-specific status, then either stay along the docks or climb once to the cathedral ridge and finish from the station that matches your return.',
        choices: [
          ['Pier Head and the Museum of Liverpool', 'Keep the day mostly level: Lime Street, St George’s Hall and William Brown Street, then the commercial streets down to Pier Head and the Museum of Liverpool. Its official page had a Tuesday–Sunday schedule with Monday exceptions on 12 October 2026; verify your date. The Maritime Museum and International Slavery Museum were listed as closed for essential work, so do not count them as open galleries.'],
          ['The dock-to-cathedral climb', 'Walk the public waterfront south from Pier Head to Albert Dock, then leave the flat edge through the central streets and climb via Bold Street and Hope Street. Pick one cathedral interior; pass the other only if energy and its visitor calendar allow. This gives an architectural line at the cost of a longer uphill day.'],
          ['One booked music stop', 'Anchor the day on one timed Beatles or music venue, such as a booked Albert Dock visit or a scheduled performance, then add the adjacent waterfront or city-centre streets. It suits a music-led trip but cannot also absorb every closed maritime gallery and both cathedrals.']
        ],
        access: 'Liverpool Lime Street is the mainline station above and east of the waterfront, not the closest rail stop for Pier Head. Merseyrail’s James Street is the useful name for the waterfront; Liverpool Central suits the central streets and southern ridge better, while Moorfields serves the northern commercial core. The city rises toward Hope Street: use the street route only if its slope fits your group, and check current cathedral access separately. These stations are not interchangeable for a tight onward train.',
        tradeoff: 'A substantial Museum of Liverpool visit, the full dock edge and both cathedral interiors compete for the same day. The maritime and slavery museums are presently closed for essential works, so the open waterfront is a public-space visit rather than the old all-museum cluster. Choose either the level riverfront or the uphill cathedral sequence; a music booking replaces, rather than simply adds to, one of them.',
        stages: [
          ['Start at Lime Street and descend', 'Walk through St George’s Hall and the William Brown Street civic quarter, then continue down through the commercial centre to Pier Head. This is a one-way descent toward the Mersey; do not plan to climb back to the station between stops.'],
          ['Check and choose the waterfront interior', 'Before leaving the station, confirm the Museum of Liverpool’s own date and admission guidance. On 12 October 2026 the nearby Maritime Museum and International Slavery Museum were listed as closed for essential works; use their status pages rather than assuming the whole Albert Dock cluster is open.'],
          ['Choose level docks or the ridge', 'For the river option, follow the waterfront public realm to Albert Dock and turn back before the route becomes a second long walk. For the ridge option, leave the docks through the central streets, climb via Bold Street to Hope Street, and select one cathedral visit.'],
          ['Finish at the right rail system', 'Use James Street for a Pier Head return, Central for the central/southern city, or Lime Street for a mainline departure only when the walk and live service plan justify it. Check Merseyrail and National Rail separately and leave event-day platform margin.']
        ],
        fallback: 'For rain or strong river wind, shorten the exposed dock section and protect one interior whose official date page confirms access. St George’s Hall and the civic streets sit closer to Lime Street; the Museum of Liverpool is the waterfront’s separate current check. If the museum calendar does not fit, keep the Pier Head and public waterfront brief rather than treating the closed Maritime Museum or International Slavery Museum as a substitute.',
        watch: [
          ['Three waterfront institutions have separate status', 'As checked on 12 October 2026, the Museum of Liverpool published its own visiting calendar while the Maritime Museum and International Slavery Museum were listed as closed for essential works. Check each named venue again; a shared dock address does not mean shared access.'],
          ['The river-to-Hope-Street route climbs', 'Bold Street and the cathedral ridge add an uphill section. Keep the level Pier Head–Albert Dock line as the complete lower-walking alternative instead of promising an equivalent short cut.'],
          ['A match or concert changes the station choice', 'Check the fixture or venue date before committing to James Street, Central or Lime Street as the final leg. Leave extra time for the route back and never build a tight mainline connection after a timed visit.']
        ],
        duration: 'Treat six to eight hours as a planning allowance for Lime Street, one waterfront interior and either the dock walk or one cathedral branch. The flat Pier Head and civic-centre route can be shortened; a timed music visit should replace a major stop rather than compress the return.',
        combine: 'Pair St George’s Hall and the commercial streets with the waterfront, or give Hope Street its own uphill block. Keep Manchester and Chester on separate days.',
        verify: 'Recheck the Museum of Liverpool, Maritime Museum and International Slavery Museum status pages separately; confirm cathedral visitor access, National Rail, Merseyrail engineering, event dates and the weather-facing waterfront before setting the return.',
        sources: [
          ['https://www.liverpoolmuseums.org.uk/museum-of-liverpool', 'National Museums Liverpool — Museum of Liverpool calendar and visitor information'],
          ['https://www.liverpoolmuseums.org.uk/maritime-museum', 'National Museums Liverpool — Maritime Museum status'],
          ['https://www.liverpoolmuseums.org.uk/international-slavery-museum', 'National Museums Liverpool — International Slavery Museum status'],
          ['https://liverpoolcathedral.org.uk/plan-your-visit/', 'Liverpool Cathedral — visitor and service access'],
          ['https://www.merseyrail.org/journey-planning/plan-your-journey/network-map/', 'Merseyrail — station map and live service status'],
          ['https://www.nationalrail.co.uk/', 'National Rail — dated Lime Street journey planning']
        ],
        faq: [
          ['Can I visit the Maritime Museum and International Slavery Museum?', 'Their National Museums Liverpool pages listed them as closed for essential works on 12 October 2026. Check the individual status pages before travel; the Museum of Liverpool has its own schedule and is not the same venue.'],
          ['Should I walk from the waterfront to both cathedrals?', 'Only if the longer uphill route suits your day. Walk via the central streets and Hope Street, choose one interior, and treat the second cathedral as an optional exterior or separate visit.'],
          ['Which station is closest to Pier Head?', 'James Street is the Merseyrail station to use for Pier Head; Lime Street is Liverpool’s mainline station, while Central is useful for the central and southern city. Confirm the station shown on your actual return ticket.']
        ]
      }),
      g({
        slug: 'manchester-industrial-city',
        reviewDateISO: '2026-10-12',
        reviewDate: '12 October 2026',
        name: 'Manchester Industrial City & Collections',
        instrument: 'Canal-to-civic innovation grid',
        layout: 'warehouse-city-matrix',
        imageQuery: 'Manchester Castlefield canals industrial architecture',
        imageAlt: 'Canals and industrial architecture around Castlefield in Manchester',
        purpose: 'Match the city’s railway station to one industrial, campus or quayside district. Treat the Science and Industry Museum as an active but changing site, then keep the return on the same side of the centre.',
        summary: 'Choose Castlefield from Deansgate or Deansgate–Castlefield, the university collections from Oxford Road, or a booked Salford Quays visit from its tram branch; do not zigzag between all three.',
        choices: [
          ['Castlefield and the Science and Industry Museum', 'Start at Liverpool Road for the museum and follow the public streets around Castlefield Basin and the warehouse edge. Its official page listed the museum as open on 12 October 2026, but the 1830 Station and Warehouse were among buildings closed for restoration. Book the free admission if required and choose from the galleries then shown, not an assumed historic-building interior.'],
          ['Oxford Road campus collections', 'Use Oxford Road railway station for Manchester Museum and the university quarter. The museum’s current page lists its galleries, hours and any exhibition booking separately; it is an indoor collection day with a different station approach from Castlefield. Continue on Oxford Road only as far as your chosen gallery and food break justify.'],
          ['Salford Quays and one timed venue', 'Take Metrolink to MediaCityUK or the stop for your booked venue, then keep the day around one quayside visit. A stadium tour, match and several waterfront sites are not one interchangeable ticket; confirm the operator, access and event entry before leaving the centre.']
        ],
        access: 'Manchester Piccadilly, Oxford Road, Victoria and Deansgate are separate railway stations around the centre. The Science and Industry Museum’s current travel page names Deansgate as the nearest rail station and Deansgate–Castlefield as the nearest Metrolink stop; its published walking estimates place Piccadilly farther away. Manchester Museum instead gives Oxford Road station as its closest rail approach. Read the destination on your ticket before you set a walking line, then use TfGM’s live planner for Metrolink and bus connections to the Quays.',
        tradeoff: 'Castlefield’s warehouse-and-canal fabric is a compact industrial day but not an all-open museum complex during restoration. Oxford Road offers a deep museum visit but exchanges the canal landscape for campus streets. Salford Quays requires a separate tram leg; choosing it removes time for the central civic streets and a same-day Liverpool train connection.',
        stages: [
          ['Choose the arrival station first', 'If your intercity ticket reaches Deansgate, begin on Liverpool Road; if it reaches Oxford Road, walk toward Manchester Museum; if it reaches Piccadilly or Victoria, plan the local connection rather than crossing the centre on foot by default.'],
          ['Give the named museum a protected block', 'For Castlefield, check the Science and Industry Museum’s current gallery and restoration notices and reserve the free entry if its page requests it. For the Oxford Road route, check Manchester Museum’s gallery and exhibition page.'],
          ['Walk one connected district', 'From the Science Museum, use Liverpool Road and the nearby Castlefield Basin warehouse streets; from Manchester Museum, stay with the campus and Oxford Road quarter. Travel to MediaCityUK only when you have chosen a specific Quays venue and a tram return.'],
          ['Return from the same side', 'Use Deansgate or Deansgate–Castlefield for a Castlefield day, Oxford Road for the campus route, or the confirmed rail/tram stop for Salford Quays. Check the actual Liverpool train departure station and preserve a later service option around events.']
        ],
        fallback: 'If restoration removes the Science and Industry Museum building you expected, keep the visit to the galleries currently listed and the outdoor warehouse streets, or switch the complete day to Manchester Museum after checking its own calendar. If Metrolink service to MediaCityUK changes, stay central; do not replace the Quays with a second far-side venue.',
        watch: [
          ['The Science Museum is changing', 'On 12 October 2026 its official visit page said the site was open while some buildings were closed for restoration, including the 1830 Station and Warehouse. Recheck the map and current closures; the photograph of Castlefield does not promise interior access.'],
          ['Oxford Road is not Piccadilly', 'Manchester Museum’s official approach is from Oxford Road station and the university campus. A Piccadilly arrival requires another leg or a longer walk; choose before the museum block, not at the end of it.'],
          ['The Quays are an outer branch', 'Metrolink service, stadium entry and event crowds can change the return. Check the current TfGM display and the venue’s timed admission, then leave margin before any Liverpool or airport train.']
        ],
        duration: 'Allow five to seven hours for one museum block and its adjacent district. Add Salford Quays only as the main branch of the day; a second city, stadium tour or late train is a separate plan.',
        combine: 'Combine the Science and Industry Museum with Castlefield Basin, or Manchester Museum with the Oxford Road quarter. Keep Liverpool and Chester for separate days.',
        verify: 'Check the Science and Industry Museum’s restoration/map notices or Manchester Museum’s live visitor calendar, then National Rail, TfGM Metrolink and the selected event venue before setting the return.',
        sources: [
          ['https://www.scienceandindustrymuseum.org.uk/visit', 'Science and Industry Museum — current galleries and restoration status'],
          ['https://www.scienceandindustrymuseum.org.uk/visit/travel', 'Science and Industry Museum — rail, tram and bus access'],
          ['https://www.museum.manchester.ac.uk/plan-your-visit', 'Manchester Museum — Oxford Road access, gallery and exhibition information'],
          ['https://tfgm.com/plan-a-journey', 'Transport for Greater Manchester — live tram and bus journey planning'],
          ['https://www.nationalrail.co.uk/', 'National Rail — date-specific Manchester station planning']
        ],
        faq: [
          ['Which station should I use for the Science and Industry Museum?', 'The museum’s travel page names Deansgate as its nearest railway station and Deansgate–Castlefield as its nearest tram stop. Piccadilly and Victoria are different approaches; check the current TfGM connection if your train arrives there.'],
          ['Is the Science and Industry Museum fully open?', 'On 12 October 2026 its official page said the museum was open while some buildings were closed for restoration, including the 1830 Station and Warehouse. Check the live map and admission page for the galleries available on your date.'],
          ['Can I add Salford Quays after Castlefield?', 'Only if the Quays venue is the day’s second main block and the tram return fits. For a full museum visit, keep the walk around Castlefield or Oxford Road and save the Quays for another day.']
        ]
      }),
      g({
        slug: 'chester-walls-roman-city',
        reviewDateISO: '2026-10-12',
        reviewDate: '12 October 2026',
        name: 'Chester Walls & Roman City',
        instrument: 'Wall-gate circuit register',
        layout: 'walled-city-loop',
        imageQuery: 'Chester city walls cathedral England',
        imageAlt: 'Historic buildings and city walls in Chester',
        purpose: 'Start at Chester station and decide whether today’s route is a permitted wall segment, Roman evidence at street level or the Cathedral and Rows. The current Northgate repair makes an assumed uninterrupted circuit a poor plan.',
        summary: 'Walk from Chester station to Eastgate, use the current wall-access notice to choose an open section, then descend once to the Roman Amphitheatre, Roman Gardens or The Rows and return through the centre.',
        choices: [
          ['One permitted wall arc', 'Use Eastgate to reach an open section, but check the Visit Cheshire repair notice before committing. On 12 October 2026 it described work near Northgate: the steps to the right remained an access point toward King Charles Tower, while the opposite approach diverted to Morgan’s Mount. Follow the live direction and add a street-level link; do not plan around a guaranteed closed loop.'],
          ['Roman street-level sequence', 'From the Eastgate and Rows core, descend toward the Roman Amphitheatre and Roman Gardens, then return to the centre by city streets. This trades the elevated panorama for named archaeological places and avoids depending on a long wall segment.'],
          ['Cathedral and The Rows', 'Keep to the central streets between Chester Cathedral, the two-level Rows and Eastgate Clock. It is the shorter option when wall steps, wind or wet stone do not suit the group; check the Cathedral’s visitor calendar because worship and events can affect access.']
        ],
        access: 'Chester station sits north-east of the walled centre. Walk along City Road toward Eastgate Clock, then choose the wall gate only after reading the current notice and access map. The four main gateways—Northgate, Eastgate, Watergate and Bridgegate—have different steps and gradients; Visit Cheshire notes that some entrances include accessible ramps. The street route is a useful alternative but does not reproduce the elevated wall view.',
        tradeoff: 'A wall section, a substantial Cathedral visit, the Roman Amphitheatre and relaxed browsing on The Rows each take a different block. The current Northgate repair interrupts the simple loop idea; choosing street-level Roman evidence or the Cathedral leaves more time for a complete centre visit and a less weather-exposed return.',
        stages: [
          ['Leave the station for Eastgate', 'Follow City Road into the walled centre and orient at Eastgate Clock. Read the current wall map here; do not begin with a promise to walk the entire perimeter.'],
          ['Choose the live wall direction', 'If you want the elevated view, use the gateway and direction currently allowed by the Northgate notice. On 12 October 2026 the notice described access toward King Charles Tower from the right-hand Northgate steps and a diversion toward Morgan’s Mount in the reverse direction. If that arrangement has changed, follow the new signs and descend when directed.'],
          ['Descend once to one main subject', 'Use city streets to reach the Roman Amphitheatre and Roman Gardens, or stay in the core for Chester Cathedral and The Rows. Pick one substantial interior or archaeological stop and check its own date-specific access.'],
          ['Return at street level', 'Walk back through the compact centre toward Eastgate and Chester station. Keep wet steps, fading daylight and the live rail departure ahead of any final wall segment.']
        ],
        fallback: 'In high wind, heavy rain or when the wall diversion does not fit, stay at street level: Eastgate Street, The Rows and the Cathedral precinct make a coherent shorter visit. Add the Roman Amphitheatre only if its outdoor route and return remain comfortable. Do not bypass a barrier to preserve a circuit.',
        watch: [
          ['Northgate repair changes the circuit', 'The Visit Cheshire page described an active repair and a one-way wall diversion at review on 12 October 2026. Check it again on the day; the route here has a street-level escape rather than relying on a continuous loop.'],
          ['Gates are not step-free equivalents', 'Wall access varies by gate, and the elevated surface can be exposed or slippery. Use an identified street-level path or a listed ramp where appropriate, and confirm the chosen entrance before leaving the station.'],
          ['The Roman places are separate stops', 'The Amphitheatre, Roman Gardens, Cathedral and Rows are different places, not one ticket or one interior. Choose the order that fits the current wall diversion and each venue’s published hours.']
        ],
        duration: 'Allow four to six hours as an editorial planning estimate for Eastgate, one wall segment or Roman street route, one major interior and a meal. A short Cathedral-and-Rows visit can be shorter; the current repair detour can add street walking.',
        combine: 'Pair one wall arc with either the Roman Amphitheatre or the Cathedral and Rows. Keep Liverpool, Manchester and Chester Zoo for separate days.',
        verify: 'Check Visit Cheshire’s current Northgate repair and access map, Chester Cathedral’s visitor/service calendar, the selected Roman site and the date-specific National Rail or Merseyrail return.',
        sources: [
          ['https://visitcheshire.com/directory/chester-city-walls', 'Visit Cheshire — city-wall access, Northgate repair and diversion'],
          ['https://chestercathedral.com/visit', 'Chester Cathedral — visitor, worship and event access'],
          ['https://www.merseyrail.org/journey-planning/plan-your-journey/network-map/', 'Merseyrail — Chester line map and service status'],
          ['https://www.nationalrail.co.uk/', 'National Rail — date-specific Chester station planning'],
          ['https://www.english-heritage.org.uk/visit/places/chester-roman-amphitheatre/', 'English Heritage — Chester Roman Amphitheatre daylight access and accessibility']
        ],
        faq: [
          ['Can I walk the full Chester Walls circuit right now?', 'Do not assume so. On 12 October 2026 Visit Cheshire described repair work near Northgate and a directional diversion between the steps and Morgan’s Mount. Recheck the live notice and follow the signs; use the street route if the detour does not suit.'],
          ['How do I reach Chester from Liverpool?', 'The current Merseyrail network map shows Chester on its Wirral line; Liverpool Central is the relevant city-centre rail station, not a synonym for Lime Street. Check the date-specific map and engineering notice before setting your return.'],
          ['What is the shorter low-walking route?', 'Stay at street level between Eastgate Street, The Rows and Chester Cathedral. The wall route includes steps and exposed surfaces, and its current Northgate repair may add a detour.']
        ]
      })
    ]
  }),
  c({
    slug: 'yorkshire',
    reviewDateISO: '2026-10-10',
    reviewDate: '10 October 2026',
    name: 'York, Leeds & Yorkshire',
    nation: 'England',
    band: 'england-midlands-north',
    family: 'wall-mill-and-moor-book',
    label: 'Wall, mill and moor book',
    tagline: 'Use York and Leeds as rail cities; make moor and coast a separate operating layer.',
    hubIntro: 'York’s elevated city-wall circuit and working Minster, Leeds’s civic collections and Saltaire’s planned industrial village, and Whitby with the North York Moors Railway are separate day systems. York and Leeds anchor the rail plan; Saltaire has its own station beside Salts Mill, while Whitby’s regional rail, bus and heritage-rail options each need their own date-specific return check.',
    stay: 'Three nights gives two full days: pair York with either Leeds/Saltaire or a coast/NYMR day. York fits the Minster-and-walls pairing; Leeds makes Saltaire a local-rail branch. For York, Leeds/Saltaire and a separate coast or moor day, plan four or more nights. Give Whitby or an NYMR trip a full separate day rather than squeezing it between city transfers.',
    transfer: 'York and Leeds are the main city rail gates. Saltaire station is across the road from Salts Mill; the mill’s galleries, shops and dining spaces do not share one opening schedule. Coastliner 840 serves Whitby via Malton; Coastliner 843 serves Scarborough. Check the chosen route, date-specific timetable and return before committing. Treat NYMR as a separate heritage service with its own seasonal calendar and color-coded timetable.',
    season: 'York wall access changes with high wind, conservation work, ice and the dusk gate-locking sequence. Salts Mill’s usual Wednesday–Sunday pattern has exceptions and each space sets its own hours. NYMR’s current autumn 2026 season runs Saturday–Wednesday from 12 September to 1 November; moor walks and the exposed Whitby headland still need weather and daylight checks.',
    fallback: 'When walls, moor weather or heritage trains remove the outdoor plan, keep a city-based day around a Minster visit if sightseeing access permits, or choose one indoor Leeds or Salts Mill space after checking that space’s hours. Do not replace a cancelled moor day with an unverified chain of rural buses.',
    sources: [
      ['https://visityork.org/', 'Visit York — official destination guide'],
      ['https://www.visitleeds.co.uk/', 'Visit Leeds — official destination guide'],
      ['https://www.york.gov.uk/york-city-centre/city-walls/3', 'City of York Council — City Walls access, gate times and weather closures'],
      ['https://www.york.gov.uk/york-city-centre/city-walls/2', 'City of York Council — City Walls map and accessibility'],
      ['https://www.yorkminster.org/visit/', 'York Minster — visitor access, worship and visit planning'],
      ['https://www.saltsmill.org.uk/', 'Salts Mill — current opening times by space'],
      ['https://www.nationalrail.co.uk/', 'National Rail — dated route and return planning'],
      ['https://www.coastliner.co.uk/', 'Coastliner — route 840 to Whitby, route 843 to Scarborough and current service updates'],
      ['https://www.nymr.co.uk/plan-your-visit/timetable/', 'North Yorkshire Moors Railway — date/color-specific timetable'],
      ['https://www.northyorkmoors.org.uk/visiting', 'North York Moors National Park — official visitor information']
    ],
    guides: [
      g({
        slug: 'york-walls-minster',
        reviewDateISO: '2026-10-10',
        reviewDate: '10 October 2026',
        name: 'York Walls, Minster & Medieval Core',
        instrument: 'Gate-to-gate wall clock',
        layout: 'minster-wall-ring',
        imageQuery: 'York Minster city walls England',
        imageAlt: 'York Minster viewed from the city wall walkway',
        purpose: 'Choose a wall section or Minster visit for the protected block, then check wall status and gate locking before choosing a route through York’s compact medieval core.',
        summary: 'From York station, enter at a named wall gate only after checking the same-day status and dusk lock sequence; pair one wall arc with a Minster visit only when its worship and sightseeing schedule leaves a real window.',
        choices: [
          ['Minster and its chosen product', 'Protect time for the cathedral, then choose one current visitor product such as the Undercroft Museum or Central Tower if its date-specific calendar fits. The wall becomes a short view or street-level link.'],
          ['Walls as the main route', 'The Council map shows an elevated walkway with named gates. Choose an open section and exit before the dusk gate-locking sequence reaches it; a substantial wall walk leaves less time for a deep Minster visit.'],
          ['Rain or wall-closure city day', 'Choose a Minster visit if sightseeing access is open, or one indoor museum after checking its current hours. Keep the medieval streets and lower riverside as short links; this gives up the uninterrupted wall circuit.']
        ],
        access: 'York station sits outside the western wall approach. The elevated wall walkway is reached by steps and has no disabled access; the Council points to the pavement route and close views at Multangular Tower as accessible alternatives. Gates usually open at 8:00, but high winds, conservation work and icy or slippery conditions can prevent opening. Gates close at dusk in an anti-clockwise sequence from Fishergate Postern Tower; the gate-locking process takes about an hour, so plan an exit before it reaches your section. York Minster’s sightseeing schedule differs from its services, and its date calendar controls visitor products and access.',
        tradeoff: 'The elevated walls require steps and are unsuitable for visitors who need disabled access; the pavement route and Multangular Tower offer lower-barrier ways to see the city walls. A wall section, a Minster interior/tower product and a substantial museum compete for the same block. Choosing the walls leaves less time indoors, while choosing the Minster means accepting a shorter wall section or street-level route.',
        stages: [
          ['Check the day before leaving the station', 'Read the Council’s same-day wall status and map, plus the Minster’s visitor/service calendar. If the walls are closed or the dusk sequence is too close, use the lower-city route now.'],
          ['Set a gate-to-gate section', 'Use Micklegate Bar as your start and planned exit: enter only if the Council map shows the walkway open, follow a chosen section, then return to that gate before its dusk locking window. This avoids depending on a full circuit or a timed connection between gates.'],
          ['Spend the indoor block once', 'Choose general Minster sightseeing or one current tower/Undercroft product; worship and visitor access are separate uses, and products have their own hours. Do not add a second major interior by default.'],
          ['Leave on streets, not a closing gate', 'Return to Micklegate Bar and exit well before its locking window, then take the street-level route toward York station. If you choose a different section, use the Council map to confirm its start and exit gates first.']
        ],
        fallback: 'High wind, conservation work or ice can close the wall walkway, and the same-day status can change the route. Switch to the Minster only when the sightseeing calendar permits; otherwise take a lower-city street route and a checked indoor museum. Never assume an open gate guarantees a complete circuit later in the day.',
        watch: [
          ['The gate-locking sequence is the real deadline', 'Gates close at dusk in order, and the locking process takes about an hour. Start the circuit early enough to reach an exit before that sequence reaches your section.'],
          ['Weather can erase the wall plan', 'High wind, conservation work and ice/slippery conditions can keep the walkway closed. Check its same-day status and have a lower-city route ready.'],
          ['The Minster is a working church', 'Sightseeing, services, tower and undercroft use have separate hours or conditions. Check the date calendar and choose one product before setting the wall circuit.']
        ],
        duration: 'Give the walls and one substantial Minster visit separate protected blocks; add a museum only by replacing one of those choices. For a shorter stop, choose either the Minster or one wall section and retain time for the station return.',
        combine: 'Pair the Minster with one selected wall section only if the visitor calendar and dusk gate sequence allow. Keep Leeds/Saltaire and Whitby/moors for other days.',
        verify: 'Check the City of York Council’s live wall status and seasonal gate-locking sequence, then York Minster sightseeing, service and product calendar; check National Rail for the dated station return.',
        sources: [
          ['https://yorkminster.org/visit/', 'York Minster — official visitor information'],
          ['https://www.york.gov.uk/york-city-centre/city-walls/3', 'City of York Council — City Walls opening, closing and same-day status'],
          ['https://www.york.gov.uk/york-city-centre/city-walls/2', 'City of York Council — City Walls map and accessibility'],
          ['https://www.nationalrail.co.uk/', 'National Rail — dated York station planning']
        ]
      }),
      g({
        slug: 'leeds-saltaire',
        reviewDateISO: '2026-10-10',
        reviewDate: '10 October 2026',
        name: 'Leeds Collections & Saltaire',
        instrument: 'Civic-to-mill rail ledger',
        layout: 'arcade-and-mill-grid',
        imageQuery: 'Saltaire Salts Mill Yorkshire canal',
        imageAlt: 'Canal towpath beneath a bridge beside a Saltaire boat-trip sign',
        purpose: 'Choose a Leeds civic collection or Saltaire’s model industrial village as the main story; use the local train as the deliberate transfer and check which Salts Mill space is open before leaving Leeds.',
        summary: 'Start at Leeds station with one city anchor, then use National Rail to check a dated return to Saltaire station, directly across the road from Salts Mill. The mill’s galleries, shops and dining rooms keep different schedules.',
        choices: [
          ['Leeds civic city', 'Use the art gallery, library, market or Royal Armouries as the anchor. This provides the most flexible city day and strong rain cover.'],
          ['Saltaire and the mill', 'Walk the UNESCO-listed village plan around Salts Mill, workers’ housing and civic buildings, then choose one gallery or exhibition. This puts the industrial community in context, but individual mill spaces may be closed or follow shorter hours.'],
          ['Two-place rail day', 'Use a bounded Leeds morning and a selected Saltaire space later only when the dated train return and that space’s hours leave enough time. This adds contrast but trades away depth in both places.']
        ],
        access: 'Saltaire station is across the road from Salts Mill; the mill also reports level access to all public areas and lift access. That does not mean every space is open at the same time: the official schedule separates the 1853 Gallery, Gallery 2, People & Process, shops, diner and café. Leeds remains a separate city stop, and the exact local train and return should be checked for the chosen date.',
        tradeoff: 'Saltaire is more than a mill interior: UNESCO describes an intact planned industrial village with worker housing, civic buildings and park. A deeper reading takes time outside Salts Mill, while the mill’s separate opening periods make an unplanned Leeds-plus-Saltaire hop less reliable. Choosing one base preserves time for either civic collections or the village streets.',
        stages: [
          ['Choose the city or village first', 'From Leeds station, choose one civic anchor or check the National Rail date planner for a Saltaire-focused visit; decide the return before starting the local leg.'],
          ['Keep Leeds to one collection', 'If combining, use one gallery, library or museum block and leave the second institution for another day. This protects the local train and Salts Mill window.'],
          ['Walk Saltaire as a planned place', 'From Saltaire station, cross to the intended mill space and check its own opening time. Then read the village plan through worker housing, civic buildings and canal/park edges rather than treating the mill as the whole destination.'],
          ['Return from the same rail gate', 'The station is across the road from the mill. Recheck the actual train and leave margin for the short station transfer; if the selected space is closed, keep the village walk only if the weather and return still work.']
        ],
        fallback: 'For rain, Salts Mill can provide the indoor anchor on an open day, but check the exact gallery or dining space rather than assuming the whole building shares one timetable. If the train or chosen space fails, stay in Leeds for one checked civic collection; a village-only walk is the fair-weather fallback.',
        watch: [
          ['The mill has no single universal opening time', 'Salts Mill lists different hours for its galleries, shops, People & Process, diner and café. Check the chosen space and school-holiday exceptions.'],
          ['The village is the heritage site too', 'UNESCO’s significance is the planned industrial town and its intact layout, not only the mill; leave time for the worker housing, civic buildings and park.'],
          ['A short local rail leg still has a final train', 'Saltaire station is beside the mill, but do not let a visit run to the last connection. Use National Rail for the date-specific route and return.']
        ],
        duration: 'Allow a full day for the two-place rail plan, with one Leeds collection and one chosen Salts Mill space; give Saltaire a separate half or full day if you want both the industrial-village walk and more than one interior.',
        combine: 'Combine central Leeds with one civic collection, or Saltaire with one mill space and a short village/canal route. Do not schedule York, Saltaire and Whitby as one day chain.',
        verify: 'Check the selected Leeds venue, Salts Mill’s opening time for the intended space, any school-holiday exception, and National Rail’s date-specific Saltaire return.',
        sources: [
          ['https://royalarmouries.org/leeds', 'Royal Armouries — official Leeds museum information'],
          ['https://www.saltsmill.org.uk/', 'Salts Mill — opening times by public space and station directions'],
          ['https://whc.unesco.org/en/list/1028/', 'UNESCO World Heritage Centre — Saltaire industrial town and planned layout'],
          ['https://www.nationalrail.co.uk/', 'National Rail — dated Leeds–Saltaire journey and return']
        ]
      }),
      g({
        slug: 'whitby-north-york-moors',
        reviewDateISO: '2026-10-10',
        reviewDate: '10 October 2026',
        name: 'Whitby & the North York Moors',
        instrument: 'Moor-to-coast service board',
        layout: 'steam-line-coast-profile',
        imageQuery: 'Whitby Abbey harbour Yorkshire coast',
        imageAlt: 'A boat approaches Whitby between the harbour entrance piers',
        purpose: 'Choose Whitby harbour and its clifftop abbey, one date-specific NYMR journey, or a North York Moors walk; do not combine the three service patterns without matching their own operating calendars and final returns.',
        summary: 'Plan one coast or moor anchor: compare Coastliner 840 for Whitby or 843 for Scarborough with National Rail, check English Heritage’s abbey access and last entry, or use the NYMR date/color calendar for a separate heritage-rail day.',
        choices: [
          ['Whitby harbour and abbey', 'Use the harbour, town and English Heritage abbey as one coast day. The abbey crowns the clifftop; check its live opening/last-entry notice and access information before choosing the climb. English Heritage currently lists a 20% walk-up discount when you arrive by public transport and show your ticket, subject to its terms.'],
          ['NYMR as the booked day', 'Choose one date on the railway’s color-coded calendar and plan around that timetable. In the 2026 autumn season it operates Saturday–Wednesday from 12 September to 1 November; it is a separate heritage service, not an assumed connection to a National Rail ticket.'],
          ['North York Moors walk', 'Pick one signed route and check current park visitor and weather information. A landscape day excludes a full abbey visit and a long heritage railway journey unless the dated transport links genuinely fit.']
        ],
        access: 'Coastliner 840 serves Whitby via Malton; Coastliner 843 serves Scarborough. Check the operator’s route and date-specific timetable, then compare actual arrival and last return with National Rail rather than assuming a direct or protected connection. Whitby Abbey sits on the clifftop above the fishing port. English Heritage’s current listing gives opening and last-entry information, detailed access guidance for mobility/older visitors and a public-transport walk-up discount; check the chosen date and access needs before travelling. NYMR has its own date/color-specific timetable: its 2026 autumn operation is Saturday–Wednesday, 12 September–1 November, while its summer period was daily. Check each journey’s dates and times separately from National Rail and the bus return.',
        tradeoff: 'Whitby’s harbour and abbey give one town-and-cliff route; NYMR gives a full transport-led day; a moor walk needs independent weather and footpath planning. Choosing the heritage train means less time in Whitby, and choosing the abbey does not make the surrounding moor a short add-on.',
        stages: [
          ['Choose one timetable family', 'For Whitby, check Coastliner 840 via Malton or National Rail’s dated planner; Coastliner 843 serves Scarborough. For NYMR, select the exact date and matching timetable color. Save the final return before leaving your base.'],
          ['Fix the coast or moor gateway', 'For the abbey, confirm its last entry, access and any public-transport discount terms, then route from the harbour to the clifftop. For a moor walk, use one named village/trailhead and identify the return stop first.'],
          ['Give the anchor its own block', 'Complete the harbour/abbey route, the chosen heritage train journey, or the single moor walk. Do not add a second timetable system because a map makes it look close.'],
          ['Return on the service you checked', 'Leave the abbey headland or moor route with margin for the return transport. NYMR and National Rail have different calendars and tickets; confirm a real connection before relying on either for the other.']
        ],
        fallback: 'If moor weather spoils a walk or NYMR has no service on your date, keep a lower Whitby harbour/town visit or move to a city day with a verified rail return. The abbey remains a clifftop visit: check English Heritage’s current access guidance and opening notice before treating it as the indoor substitute.',
        watch: [
          ['NYMR is seasonal and date-coded', 'Its 2026 autumn service runs Saturday–Wednesday from 12 September through 1 November; choose the date on the timetable calendar and match its color before buying or planning a stop.'],
          ['The abbey is a clifftop site', 'Opening, last entry and access conditions govern whether the headland fits your day. English Heritage also lists a car-free admission offer with terms; confirm it for your date.'],
          ['The walk does not end at the viewpoint', 'Check the dated National Rail/bus return and North York Moors weather/access advice before leaving the harbour or village. Do not use a heritage timetable as a backup for an ordinary rail connection.']
        ],
        duration: 'Give Whitby harbour and abbey a full day from a regional base; the clifftop visit and town approach use the daylight window. NYMR is itself a day anchor. Allow a separate day for any moor walk and its dated bus or rail transfer.',
        combine: 'Combine the Whitby harbour with the abbey if opening and access allow, or ride one selected NYMR route. Keep a moor walk and the other Yorkshire cities for separate days.',
        verify: 'Check English Heritage opening, last entry, access and car-free offer; the 840 Whitby or 843 Scarborough Coastliner route and dated timetable, plus National Rail journeys/returns; NYMR’s date and timetable color; and North York Moors weather and walk information.',
        sources: [
          ['https://www.english-heritage.org.uk/visit/places/whitby-abbey/', 'English Heritage — Whitby Abbey visitor information'],
          ['https://www.nymr.co.uk/plan-your-visit/timetable/', 'North Yorkshire Moors Railway — 2026 date/color-specific timetable'],
          ['https://www.nymr.co.uk/plan-your-visit/opening-times', 'North Yorkshire Moors Railway — seasonal operating dates'],
          ['https://www.nationalrail.co.uk/', 'National Rail — dated Whitby journey and return planning'],
          ['https://www.coastliner.co.uk/', 'Coastliner — 840/843 route, current timetable and service updates'],
          ['https://www.northyorkmoors.org.uk/visiting', 'North York Moors National Park — official visitor, weather and walking information']
        ]
      })
    ]
  })
];
