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
    tagline: 'Choose a city, fortress or cliff line before the coast starts consuming transfers.',
    hubIntro: 'Brighton, Canterbury, Dover and the Seven Sisters sit on different rail and bus corridors despite sharing the south-east coast. A useful day chooses one urban or landscape argument, names the station and final connection, and treats exposed chalk paths as weather decisions rather than scenic filler.',
    stay: 'Two to four nights supports Brighton plus one Kent or South Downs branch. Brighton is a strong evening base for Sussex; Canterbury is better for cathedral and east Kent. Using London as the base is possible, but repeated terminal crossings can erase the apparent time saved.',
    transfer: 'Southern and Southeastern trains use different London terminals and coast branches. Seven Sisters requires a named rail-and-bus or walking approach, while Dover Castle sits above the station. Engineering works and sea weather should be checked on the actual travel date.',
    season: 'Summer increases beach and road pressure, but chalk cliffs remain exposed to wind and heat. Winter can deliver clear urban days with early darkness; spring and autumn offer walking conditions only when rain, wind and path notices cooperate.',
    fallback: 'When cliff conditions fail, retain a complete Brighton, Canterbury or Dover interior-led day. Do not switch to another exposed headland merely because the train continues along the coast.',
    sources: [
      ['https://www.visitbrighton.com/', 'Visit Brighton — official destination guide'],
      ['https://www.visitkent.co.uk/', 'Visit Kent — official destination guide'],
      ['https://www.southeasternrailway.co.uk/', 'Southeastern — rail planning and service updates']
    ],
    guides: [
      g({
        slug: 'brighton-lanes-seafront',
        name: 'Brighton Lanes, Pavilion & Seafront',
        instrument: 'Seafront weather-and-crowd clock',
        layout: 'regency-to-pier-zigzag',
        imageQuery: 'Brighton Royal Pavilion England exterior',
        imageAlt: 'The Royal Pavilion in central Brighton',
        purpose: 'Choose the Royal Pavilion, independent lanes or the seafront as the day’s main layer and connect them downhill toward the sea without repeatedly climbing between station, shopping streets and pier.',
        summary: 'Descend from Brighton station through the North Laine or Pavilion precinct, complete one interior, then finish on a bounded seafront section with the uphill return already planned.',
        choices: [
          ['Royal Pavilion and museum', 'Use the Pavilion complex as the paid anchor, then add the historic Lanes and a short seafront. This gives the strongest architectural context.'],
          ['Independent streets and food', 'Prioritize North Laine, the Lanes and a market or gallery, keeping the Pavilion exterior. It is flexible but lighter on formal interpretation.'],
          ['Seafront and pier', 'Move quickly to the beach, pier and one western or eastern promenade branch. This suits clear weather but depends most on wind and crowd pressure.']
        ],
        access: 'Brighton station sits uphill from the Pavilion and sea. North Laine and the historic Lanes are different street areas. Choose one downhill line and identify the bus or walking route back; do not leave the climb until a tight train connection.',
        tradeoff: 'A deep Pavilion visit, both lane districts and a long walk to Hove or the marina exceed a relaxed day. Choosing the seafront sacrifices interior depth; choosing the Pavilion keeps the coast shorter but more coherent.',
        stages: [
          ['Descend from the station', 'Choose the North Laine or direct Pavilion line and save the return route. Avoid crossing the same shopping streets several times.'],
          ['Complete one city anchor', 'Visit the Royal Pavilion, Brighton Museum or a selected gallery before the seafront weather becomes the whole decision.'],
          ['Commit to one coast direction', 'At the pier, turn west toward the historic beachfront or east toward Madeira Drive and stop at a named point. Do not attempt both edges.'],
          ['Return uphill deliberately', 'Use a frequent bus or a gradual street line to the station, allowing beach crowds and traffic. Keep the final meal near the chosen return corridor.']
        ],
        fallback: 'In strong wind or heavy rain, keep the Pavilion, museum, covered lanes and a short sea view from the lower streets. If the Pavilion is unavailable, deepen the street-and-gallery route instead of boarding an unplanned coast bus.',
        watch: [
          ['The station is above the visitor core', 'The final uphill walk takes longer after a beach day. Choose a bus early when mobility or weather makes the climb unattractive.'],
          ['Beach conditions are not urban conditions', 'Wind and waves can make the promenade uncomfortable even when central streets are calm. Read the sea edge before committing west or east.'],
          ['North Laine and the Lanes are distinct', 'They have different street patterns and positions. Treating them as one stop creates avoidable backtracking.']
        ],
        duration: 'Allow five to seven hours for one interior, both central street areas and a bounded seafront. A coast-heavy day can use the full daylight window.',
        combine: 'Combine the Pavilion with the Lanes or the pier with one promenade direction. Keep Seven Sisters and Canterbury for separate days.',
        verify: 'Check Royal Pavilion entry, local events, seafront weather, Brighton bus status and Southern rail disruption before departure.',
        sources: [
          ['https://brightonmuseums.org.uk/royalpavilion/plan-your-visit/', 'Royal Pavilion — official visit planning'],
          ['https://www.buses.co.uk/', 'Brighton & Hove Buses — local service information']
        ]
      }),
      g({
        slug: 'canterbury-dover',
        name: 'Canterbury Cathedral & Dover Castle',
        instrument: 'Two-fortress admission docket',
        layout: 'pilgrim-to-channel-section',
        imageQuery: 'Canterbury Cathedral England precinct',
        imageAlt: 'Canterbury Cathedral rising above the historic city centre',
        purpose: 'Decide whether Canterbury Cathedral or Dover Castle deserves the full controlled interior, then use the rail corridor for one city-to-fortress connection rather than rushing two large heritage sites.',
        summary: 'Begin in Canterbury’s walkable core or at Dover’s hillside fortress, complete one deep visit, and add the second place only as a bounded exterior or shorter stop with its return protected.',
        choices: [
          ['Canterbury depth', 'Give the cathedral precinct, medieval streets and one museum or abbey edge the day. This is compact and least dependent on hills or coastal weather.'],
          ['Dover Castle depth', 'Use the castle grounds and wartime or medieval interpretation as the main event. This requires the climb or bus and leaves little Canterbury time.'],
          ['Rail-linked sampler', 'Visit one interior at moderate depth and the other place as an exterior town circuit. This gains contrast but sacrifices the complete story of both.']
        ],
        access: 'Canterbury West and East serve different sides of the core. Dover Priory is below the castle and not at its visitor entrance. Confirm the rail leg, the castle climb or local bus, and the final train before attempting both towns.',
        tradeoff: 'The cathedral and castle each justify several hours plus security or walking. Choosing both means giving up depth, meals and contingency; choosing one anchor creates a reliable day with a useful secondary town.',
        stages: [
          ['Enter the chosen anchor city', 'Use the station that best serves the first door, and record the onward or return train before joining the pedestrian core.'],
          ['Complete the controlled interior', 'Follow cathedral or castle admission and current closures. Keep enough time for the precinct or grounds rather than treating entry as one room.'],
          ['Take one rail transfer', 'Board the verified Southeastern service only when the second stop still has a meaningful window. Otherwise remain in the first city.'],
          ['Return from the correct level', 'In Dover, allow the descent to Priory; in Canterbury, exit toward the correct station. Do not rely on a tight connection after the castle hill.']
        ],
        fallback: 'If the second transfer or weather fails, deepen the first city: Canterbury offers walls and abbey remains; Dover offers town and seafront only when conditions suit. If the main interior closes, use the public historic route rather than chasing another county.',
        watch: [
          ['Cathedral access follows worship', 'Services and events can alter visitor areas. Read the official day notice and preserve respectful alternatives.'],
          ['Dover Castle is uphill', 'The station-to-gate connection is real time and effort. Include it before calculating the last admission or train.'],
          ['Two station names serve Canterbury', 'West and East are not interchangeable for every onward train. Choose the station from the actual route, not familiarity.']
        ],
        duration: 'Allow a full day for either anchor. Combining both requires eight to ten hours and a deliberately shorter visit at one site; an overnight makes the pairing far better.',
        combine: 'Combine Canterbury with its walls or St Augustine’s Abbey, or Dover Castle with a short town edge. Keep the White Cliffs as a separate weather-and-walking decision.',
        verify: 'Check cathedral worship and visitor access, Dover Castle ticket and closure notices, Southeastern engineering work and the hill connection before travel.',
        sources: [
          ['https://www.canterbury-cathedral.org/visit/', 'Canterbury Cathedral — official visitor information'],
          ['https://www.english-heritage.org.uk/visit/places/dover-castle/', 'English Heritage — Dover Castle visitor information']
        ]
      }),
      g({
        slug: 'seven-sisters-eastbourne',
        name: 'Seven Sisters & Eastbourne',
        instrument: 'Cliff-edge turn-back chart',
        layout: 'chalk-profile-route',
        imageQuery: 'Seven Sisters cliffs Sussex England coast',
        imageAlt: 'White chalk cliffs of the Seven Sisters on the Sussex coast',
        purpose: 'Choose a safe, bounded Seven Sisters viewpoint or walk with a named start and finish, using Eastbourne or Seaford as the transport anchor rather than advertising the whole cliff line as one casual stroll.',
        summary: 'Arrive at a rail-and-bus gateway, read wind and path conditions, complete one signed chalk-coast segment, and turn back or exit before daylight and the final connection become tight.',
        choices: [
          ['Country Park and valley', 'Use the visitor-centre or Cuckmere approach for river, valley and cliff views with a clear return. This is the most adaptable first visit.'],
          ['Eastbourne and Beachy Head edge', 'Begin or end in Eastbourne with one verified upland viewpoint. It adds town services but still requires exposure and a bus or climb.'],
          ['Long point-to-point walk', 'Attempt only with the official route, fitness, weather and daylight to match. This gives the complete profile but has the least tolerance for delays.']
        ],
        access: 'There is no Seven Sisters railway station. Seaford, Eastbourne and Brighton connect to different buses and trailheads. Save the exact stop, path and final service, and never navigate toward the cliff edge from an informal map pin.',
        tradeoff: 'A short valley-and-viewpoint visit sacrifices the long cliff sequence but protects safety and return. A point-to-point walk gains landscape depth at the cost of museums, town time and any weak-weather fallback.',
        stages: [
          ['Reach the named trailhead', 'Use the verified train and bus combination, confirming the side of the road and final return stop before leaving services.'],
          ['Read the weather gate', 'Assess wind, rain, visibility and official notices at low ground. Shorten immediately if the exposed line is unsuitable.'],
          ['Commit to one bounded segment', 'Follow signed paths well back from unstable edges, using a fixed viewpoint, river crossing or hill as the turnaround or exit.'],
          ['Exit before the last service', 'Return to the selected bus stop or Eastbourne station with daylight and one connection in reserve. Do not extend for a final photograph.']
        ],
        fallback: 'In poor cliff weather, use Eastbourne’s seafront, museum offer or a short sheltered Cuckmere valley section only when official access remains safe. If buses are disrupted, stay in the rail town rather than walking a road verge.',
        watch: [
          ['Cliff edges are unstable', 'Chalk can collapse without warning and fences may move. Stay on signed paths and well back from the edge and base of cliffs.'],
          ['Wind changes walking speed', 'An exposed headwind can double effort and remove the return margin. Use time, not distance, as the turn-back rule.'],
          ['Bus stops are not interchangeable', 'Coast services use specific roadside stops and seasonal patterns. Confirm the direction and last useful departure.']
        ],
        duration: 'Allow five to eight hours for transport and a bounded coast route. The full point-to-point line is a dedicated day, not an extension to Brighton.',
        combine: 'Combine a short Seven Sisters route with Eastbourne or Seaford. Keep Brighton, Canterbury and Dover for separate days.',
        verify: 'Check South Downs National Park safety advice, Seven Sisters access notices, coast weather, daylight and the exact train-and-bus return before departure.',
        sources: [
          ['https://www.southdowns.gov.uk/be-safe-and-plan-ahead-for-your-visit-to-seven-sisters/', 'South Downs National Park — official Seven Sisters safety guidance'],
          ['https://www.sevensisters.org.uk/', 'Seven Sisters Country Park — official visitor information']
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
    name: 'Liverpool, Manchester & Chester',
    nation: 'England',
    band: 'england-midlands-north',
    family: 'two-city-industrial-board',
    label: 'Two-city industrial board',
    tagline: 'Give each city one complete argument before the short train tempts a checklist.',
    hubIntro: 'Liverpool and Manchester are close by rail but their useful visitor geographies point in different directions: Mersey waterfront and mercantile streets versus canals, civic collections and industrial quarters. Chester adds a compact walled city on another line. Each deserves a separate day even when journey times look short.',
    stay: 'Three to five nights supports both cities and Chester without changing hotels. Liverpool works well for waterfront evenings; Manchester offers broader regional rail connections. Choose one base from the late return pattern and event calendar.',
    transfer: 'Liverpool Lime Street, Manchester Piccadilly, Victoria and Oxford Road serve different city edges. Merseyrail and Metrolink are separate local systems. Football, concerts and engineering work can alter capacity, so use station-specific plans rather than city names alone.',
    season: 'Rain favors the region’s strong museums, but waterfront wind and exposed stadium or canal routes need live judgment. Major matches, festivals and conferences can raise fares and crowd stations year-round.',
    fallback: 'Keep a complete collection-and-street day in either city. If the intercity rail corridor is disrupted, do not force the second city; deepen the base and move Chester to another date.',
    sources: [
      ['https://www.visitliverpool.com/', 'Visit Liverpool — official destination guide'],
      ['https://www.visitmanchester.com/', 'Visit Manchester — official destination guide'],
      ['https://tfgm.com/', 'Transport for Greater Manchester — network and service information']
    ],
    guides: [
      g({
        slug: 'liverpool-waterfront-cathedrals',
        name: 'Liverpool Waterfront & Cathedrals',
        instrument: 'Mersey-to-ridge city ruler',
        layout: 'dock-and-cathedral-axis',
        imageQuery: 'Liverpool waterfront Three Graces Mersey',
        imageAlt: 'Liverpool waterfront and the Three Graces beside the Mersey',
        purpose: 'Choose a waterfront collection or the cathedral ridge as the main block, then connect docks, commercial streets and one uphill line without assuming every Beatles, maritime and civic site belongs in one day.',
        summary: 'Walk from Lime Street toward the waterfront, use one museum cluster, then climb once toward the cathedrals or remain with the Mersey and finish near a direct station.',
        choices: [
          ['Waterfront museums', 'Prioritize the Museum of Liverpool, Maritime Museum or a selected dock collection. This gives the clearest port-city story and stays mostly level.'],
          ['Cathedral and civic ridge', 'Use the two cathedrals, Hope Street and civic collections as the main line. It adds elevation but creates a coherent architectural day.'],
          ['Music-city streets', 'Build around one booked music site or performance with Mathew Street and nearby districts. It suits fans but should not displace the port history by default.']
        ],
        access: 'Lime Street sits above and east of the waterfront. James Street and Moorfields may suit the return, while the cathedral ridge requires an uphill walk or bus. Choose the final station from the route rather than retracing to Lime Street automatically.',
        tradeoff: 'A full waterfront museum day, both cathedrals and several music attractions exceed a meaningful day. Choosing the Mersey sacrifices ridge depth; choosing Hope Street leaves some dock collections for another visit.',
        stages: [
          ['Leave Lime Street on one axis', 'Use St George’s Hall and the civic plateau or descend directly through the commercial core, recording the final Merseyrail or mainline option.'],
          ['Complete one waterfront story', 'Choose one or two adjacent collections and walk a bounded dock section. Do not treat every converted dock as a separate attraction.'],
          ['Commit to ridge or river', 'Climb toward Hope Street and the cathedrals, or continue along the Mersey and Pier Head. One direction preserves the city’s logic.'],
          ['Exit from the useful station', 'Finish at Lime Street, Central, Moorfields or James Street according to the branch. Leave event crowds a wider platform margin.']
        ],
        fallback: 'In strong wind, use the waterfront museums, St George’s Hall area and covered commercial streets. If a collection closes, retain the Pier Head, dock public realm and one cathedral rather than crossing the city for a replacement.',
        watch: [
          ['Waterfront museum status changes', 'Gallery moves, building works and temporary closures can affect the dock cluster. Check each institution, not only the destination listing.'],
          ['The cathedral line climbs', 'Hope Street sits above the waterfront. Use a bus or reverse the route when walking capacity is limited.'],
          ['Events load stations quickly', 'Football and arena crowds can change the easiest return. Allow extra time and know an alternative city station.']
        ],
        duration: 'Allow six to eight hours for waterfront plus one cathedral or music branch. A collection-led dock day can fill the full day on its own.',
        combine: 'Combine the waterfront with the commercial core or the cathedrals with Hope Street. Keep Manchester and Chester for separate days.',
        verify: 'Check National Museums Liverpool venue notices, cathedral access, Merseyrail and mainline service, wind and event schedules before departure.',
        sources: [
          ['https://www.liverpoolmuseums.org.uk/', 'National Museums Liverpool — official visitor information'],
          ['https://liverpoolcathedral.org.uk/plan-your-visit/', 'Liverpool Cathedral — official visit planning']
        ]
      }),
      g({
        slug: 'manchester-industrial-city',
        name: 'Manchester Industrial City & Collections',
        instrument: 'Canal-to-civic innovation grid',
        layout: 'warehouse-city-matrix',
        imageQuery: 'Manchester Castlefield canals industrial architecture',
        imageAlt: 'Canals and industrial architecture around Castlefield in Manchester',
        purpose: 'Choose industrial history, civic art or contemporary neighbourhoods as the main argument, then use tram and walking corridors without bouncing between Salford Quays, Castlefield and the Northern Quarter.',
        summary: 'Begin at the station serving the chosen district, use one major collection, connect a bounded canal or civic route, and finish on the same tram or rail side.',
        choices: [
          ['Industry and Castlefield', 'Use the Science and Industry Museum area, canals and warehouse streets. This provides the strongest origin story but depends on current gallery status.'],
          ['Civic collections', 'Anchor at Manchester Art Gallery, Central Library or the city centre and add a compact street circuit. It is resilient and walkable.'],
          ['Salford Quays or football', 'Use tram to one western destination with a booked venue. This reveals modern Manchester but becomes a separate half-day system.']
        ],
        access: 'Piccadilly, Victoria and Oxford Road are not interchangeable. Castlefield and the Quays use different tram stops, and event venues can have controlled entry. Select the arrival station and final tram before entering the city centre.',
        tradeoff: 'A deep city-centre collection day and Salford Quays or a stadium tour do not comfortably share one route. Choosing the outer branch sacrifices Northern Quarter and canal time; staying central gives up the large modern venue.',
        stages: [
          ['Enter from the matching station', 'Use Piccadilly for the eastern core, Victoria for the north or Oxford Road for the university corridor. Avoid an immediate cross-centre station transfer.'],
          ['Complete one collection', 'Give the selected museum, gallery or library a bounded block and read current gallery closures before relying on a signature exhibit.'],
          ['Follow one city fabric', 'Choose Castlefield canals, the civic centre or Northern Quarter streets. Use tram only when committing to the Quays or another outer venue.'],
          ['Exit on the same network', 'Finish near the preselected station or tram interchange. Major events can fill platforms, so preserve a later service option.']
        ],
        fallback: 'If a museum gallery is closed, use the city library, art gallery and public industrial streets. If tram disruption affects the Quays, keep the whole day central rather than replacing it with another distant venue.',
        watch: [
          ['Museum buildings can be partly open', 'Redevelopment may leave some galleries unavailable. Verify the specific exhibition or area, not only the front door.'],
          ['Tram branches share central stops', 'Confirm the destination display and platform; a familiar stop name does not guarantee the correct branch.'],
          ['Match days change movement', 'Football and arena events alter crowds and service demand. Do not schedule a tight rail connection after a tour or match.']
        ],
        duration: 'Allow six to eight hours for one collection and one central district, or a full day for a central prelude plus Salford Quays or football venue.',
        combine: 'Combine Castlefield with the civic centre or the Quays with one booked venue. Keep Liverpool and Chester for separate days.',
        verify: 'Check the selected museum or stadium, Metrolink status, rail station service and event calendar before setting the route.',
        sources: [
          ['https://www.scienceandindustrymuseum.org.uk/visit', 'Science and Industry Museum — official visitor information'],
          ['https://manchesterartgallery.org/visit/', 'Manchester Art Gallery — official visit planning']
        ]
      }),
      g({
        slug: 'chester-walls-roman-city',
        name: 'Chester Walls & Roman City',
        instrument: 'Wall-gate circuit register',
        layout: 'walled-city-loop',
        imageQuery: 'Chester city walls cathedral England',
        imageAlt: 'Historic buildings and city walls in Chester',
        purpose: 'Use Chester’s walls as the organising circuit, selecting one Roman, cathedral or Rows interior and planning where to leave or shorten the elevated loop.',
        summary: 'Walk from Chester station to a named wall gate, complete a weather-aware section or full circuit, descend once for the Rows and one interior, then return through the compact centre.',
        choices: [
          ['Full wall circuit', 'Use the elevated walls and gates as the main route, adding only one interior. This gives the clearest urban form but is exposed and step-dependent.'],
          ['Roman evidence', 'Prioritize the amphitheatre, museum or booked experience with shorter wall sections. It offers historical depth but less continuous city panorama.'],
          ['Cathedral and Rows', 'Keep the route around the cathedral, two-level shopping streets and central wall gates. It is compact and weather-resilient.']
        ],
        access: 'Chester station is north-east of the walled centre. Wall access points have stairs and different gradients; step-free street alternatives exist but are not identical to the elevated route. Identify the first gate and a mid-route exit before climbing.',
        tradeoff: 'The full wall circuit, deep Roman interpretation and relaxed Rows shopping do not fit equally. Choosing the walls sacrifices interior time; choosing museums turns the wall into selected viewpoints rather than a complete loop.',
        stages: [
          ['Approach one city gate', 'Walk from the station toward Eastgate or another named access, noting a street-level alternative and the final station route.'],
          ['Read the elevated circuit', 'Follow a clockwise or anticlockwise wall line with the racecourse, river and Roman edges in sequence. Do not repeatedly descend.'],
          ['Leave once for the chosen interior', 'Descend near the cathedral, Rows or Roman site and give it a defined block. Resume the wall only if time and weather remain good.'],
          ['Return through the compact centre', 'Finish along a direct street to the station, using Eastgate or Northgate as the orientation line. Avoid one last wall segment when surfaces are wet or daylight is fading.']
        ],
        fallback: 'In high wind, ice or heavy rain, use street-level gates, the cathedral, Rows and museum offer. If an interior closes, retain a shorter safe wall segment and the Roman exterior sites.',
        watch: [
          ['Walls include steps and exposed surfaces', 'Access varies by gate, and wet or icy sections can be unsuitable. Use the street alternative without treating it as failure.'],
          ['The racecourse changes some routes', 'Events can affect riverside movement and crowds. Check the local calendar before planning a quiet western loop.'],
          ['Roman sites are distributed', 'Amphitheatre, gardens and museum evidence are not one attraction. Select the pieces that fit the wall direction.']
        ],
        duration: 'Allow five to seven hours for the wall circuit, one interior and a meal. A central Rows and cathedral route can fit four hours.',
        combine: 'Combine the walls with the cathedral or Roman evidence. Keep Liverpool, Manchester and Chester Zoo for separate full days.',
        verify: 'Check wall access notices, cathedral and museum openings, rail service and any racecourse or city event before travel.',
        sources: [
          ['https://www.visitcheshire.com/chester/', 'Visit Cheshire — official Chester destination guide'],
          ['https://chestercathedral.com/visit', 'Chester Cathedral — official visitor information']
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
