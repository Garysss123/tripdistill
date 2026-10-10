import { defineUnitedKingdomCluster, unitedKingdomGuide } from './united-kingdom-guide-builder.mjs';

const g = unitedKingdomGuide;
const c = defineUnitedKingdomCluster;

export const unitedKingdomEnglandNorthScotlandClusters = [
  c({
    slug: 'lake-district-cumbria',
    reviewDateISO: '2026-10-10',
    reviewDate: '10 October 2026',
    name: 'Lake District & Cumbria',
    nation: 'England',
    band: 'england-midlands-north',
    family: 'lake-weather-and-bus-log',
    label: 'Lake weather and bus log',
    tagline: 'Choose one lake basin or rail corridor before the fells redraw the day.',
    hubIntro: 'Windermere and Ambleside, Keswick and Derwentwater, and Carlisle with the western Wall use different railheads and buses. The Lake District rewards one basin at a time: weather, boat operation, valley traffic and the last bus matter more than the short distances shown on a map.',
    stay: 'Four to six nights supports two lake basins and one Cumbria history day with a weather fallback. Windermere is the easiest rail arrival, Keswick opens the north, and Carlisle suits the western Wall; moving between them is a regional transfer, not a quick hotel change.',
    transfer: 'Windermere has a branch-line station; Ambleside and Keswick do not. Buses connect valleys but frequencies and journey times vary. Carlisle is a mainline hub for the western county. Always match the day to one railhead and final bus rather than crossing the park late.',
    season: 'Rain, wind, low cloud, snow and saturated paths can change any fell plan. Summer adds buses and boats but crowding and road pressure; winter requires low-level routes and early returns. Lake conditions can suspend vessels independently of buses.',
    fallback: 'Every base needs a complete low-level alternative: town, museum, boat only when running, lakeshore or rail-served historic site. Do not replace one clouded fell with another high route across the park.',
    sources: [
      ['https://www.lakedistrict.gov.uk/visiting', 'Lake District National Park — official visitor information'],
      ['https://www.visitlakedistrict.com/', 'Visit Lake District — official destination guide'],
      ['https://www.stagecoachbus.com/plan-a-journey', 'Stagecoach — Cumbria bus journey planning']
    ],
    guides: [
      g({
        slug: 'windermere-ambleside',
        reviewDateISO: '2026-10-10',
        reviewDate: '10 October 2026',
        name: 'Windermere, Bowness & Ambleside',
        instrument: 'Lake-bus-boat interchange card',
        layout: 'shoreline-transfer-ribbon',
        imageQuery: 'Lake Windermere Ambleside boats mountains',
        imageAlt: 'Boats on Windermere with the Lake District fells beyond',
        purpose: 'Choose a practical Windermere-basin route from the rail station: use the 555 for Ambleside, plan a separate road transfer to Bowness for the Red Cruise, or stay on a low-level town-and-shore day. The station, Bowness pier and Waterhead are distinct places.',
        summary: 'Start at Windermere railway station and pick one connection: Stagecoach 555 toward Ambleside, a checked bus to Bowness for the seasonal Red Cruise, or a town-and-shore fallback. Save the return to the branch line before leaving the railhead.',
        choices: [
          ['555 to Ambleside, then Waterhead', 'Stagecoach 555 links Windermere station with Ambleside. From Ambleside village centre, Waterhead pier is about a half-mile walk on the flat path; check the local bus if that distance does not suit.'],
          ['Bowness and the Red Cruise', 'The published 2026 Red Cruise runs Bowness–Waterhead; selected sailings also call at Jetty Museum or Brockhole. It gives a clear lake crossing, but the road transfer to Bowness and the return sailing need separate checks.'],
          ['Town and near shore', 'Keep the day around Windermere town, Bowness or Ambleside and a short low-level lakeside walk. This suits unsettled weather or anyone who does not want to depend on a boat-to-bus connection.']
        ],
        access: 'Windermere railway station is in the town, about 1.5 miles uphill from Bowness. From Ambleside village centre, the operator describes Waterhead pier as about a half-mile walk on a flat path. The 555 is a useful station–Ambleside link, but it does not make all three places one walkable interchange. Confirm the exact stop and final service before boarding a boat.',
        tradeoff: 'Bowness, Ambleside and a long cruise already use several separate transfers. Add a fell walk only by dropping a town or boat leg; a missed sailing can leave a separate bus journey back to the station.',
        stages: [
          ['Choose the rail-side branch', 'At Windermere station, use the dated 555 timetable for Ambleside, or check the local bus to Bowness. Record the last connection back to the station before setting off.'],
          ['Anchor at one pier or town', 'For the Red Cruise, start at Bowness pier and confirm whether the chosen sailing calls at Waterhead, Brockhole or Jetty Museum. For Ambleside, allow for the inland walk or local connection from Waterhead.'],
          ['Keep one main activity', 'The 2026 Red Cruise is published for 28 March–1 November, with a 35-minute Bowness–Waterhead crossing; its timetable can change. Choose the boat or a lower walk, rather than trying to fit both with a fell visit.'],
          ['Return by the route you checked', 'Use the confirmed bus or sailing back toward Windermere station and keep a margin before the branch train. Do not assume a cruise ticket covers the bus.']
        ],
        fallback: 'If wind or seasonal operations stop the boats, keep one town and a short low-level shore walk, then return by bus. On a wet day, choose a sheltered town visit rather than adding another valley or relying on a pier connection.',
        watch: [
          ['Bowness is not the rail station', 'The station-to-lake descent is about 1.5 miles to Bowness. A map pin without a named bus or walk can make a short visit run late.'],
          ['Red Cruise calls vary', 'The 2026 route links Bowness and Waterhead, while Brockhole and Jetty Museum are served only on some sailings. Check the date-specific timetable and last return.'],
          ['Boat and bus are separate legs', 'A cruise does not arrange the road transfer back to Windermere station. Leave margin for valley traffic and the final branch train.']
        ],
        duration: 'Allow a full day for a station transfer, one lakeside town and either a cruise or a walk. A Bowness-focused visit still needs a round trip from the rail station and time for the chosen sailing.',
        combine: 'Pair Bowness with the Red Cruise or Ambleside with a lower walk. Keep Keswick and Carlisle for separate days; the three rail and bus corridors do not form a quick loop.',
        verify: 'Check the dated Stagecoach 555 and local bus timetables, Windermere Lake Cruises sailing and pier stops, branch trains, weather and any path notice before departure.',
        sources: [
          ['https://www.stagecoachbus.com/promos-and-offers/cumbria-and-north-lancashire/keswick-to-lancaster', 'Stagecoach — 555 Keswick–Lancaster route and Windermere connections'],
          ['https://www.windermere-lakecruises.co.uk/cruises-fares/red-cruise', 'Windermere Lake Cruises — 2026 Red Cruise route, stops and timetable'],
          ['https://lakedistrict.gov.uk/explore/places-to-go/explore-windermere-and-ambleside/', 'Lake District National Park — Windermere, Bowness and Ambleside locations']
        ]
      }),
      g({
        slug: 'keswick-derwentwater',
        reviewDateISO: '2026-10-10',
        reviewDate: '10 October 2026',
        name: 'Keswick & Derwentwater',
        instrument: 'Launch-and-fell weather dial',
        layout: 'market-lake-spoke-map',
        imageQuery: 'Derwentwater Keswick Lake District view',
        imageAlt: 'Derwentwater and the fells near Keswick in the Lake District',
        purpose: 'Choose between the Keswick Launch, a bounded lakeshore walk, or a lower town day, then protect the bus connection because Keswick has no railway station. In autumn 2026, the Greta bridge closure also changes how to plan the former railway path.',
        summary: 'Use the bus station as the day’s gate, then take one Derwentwater launch-and-walk leg or stay in Keswick. The Keswick Railway Path is not a dependable full through-route during the published Greta bridge works; check current notices and return buses.',
        choices: [
          ['Keswick Launch and one shore leg', 'Take a confirmed sailing from Keswick to a named jetty such as Hawes End or Lodore, then walk back only as far as conditions and the return bus allow. The operator runs clockwise and anti-clockwise routes; a landing is not automatically a bus stop.'],
          ['Town and short low route', 'Keep Keswick’s Pencil Museum, Theatre by the Lake and a short shore visit as the day. It works better in rain, low cloud or on a short daylight window than a full basin circuit.'],
          ['Railway-path history, with a closure check', 'The former Keswick–Penrith railway route is a 5 km path each way, but the Greta bridge at its western end is closed from 22 September 2026 for works expected to take up to eight weeks. Do not plan a through walk until the live notice confirms reopening.']
        ],
        access: 'Keswick has no railway station: arrive by a dated bus, often via Penrith, then walk separately to the lake landings. Derwentwater’s 10-mile/18 km circuit is a substantial walk; a launch can shorten it only when the chosen jetty and sailing line up. The railway path’s western Greta bridge closure is active in the 22 September 2026 notice.',
        tradeoff: 'A lake circuit, town visit and fell route do not fit comfortably in one bus-based day. A launch gives a shorter water crossing but locks you to its service; the former railway path offers a flatter historic route when open, while the current bridge works remove the simple through option.',
        stages: [
          ['Protect the bus return', 'At Keswick bus station, confirm the day’s onward service and save its final departure before walking to the town centre or lake. A missed bus can also cost a Penrith train connection.'],
          ['Check launch and path status', 'At the waterfront, confirm the operator’s current sailing and the jetty where you plan to leave. Check the National Park closure notice before choosing the railway path.'],
          ['Choose one bounded leg', 'Use a launch landing for one shore walk, or make the town and museum the main visit. Treat a full 10-mile lake circuit as its own walk, not an add-on to a boat and town day.'],
          ['Return to the same transport gate', 'Get back to Keswick with time for the bus station. Do not assume a lake jetty or the closed end of the railway path will provide a bus shortcut.']
        ],
        fallback: 'If wind suspends the launch or cloud covers the fells, stay in Keswick: use the Pencil Museum or Theatre by the Lake if open, then keep any shore walk short. The National Park rates Friar’s Crag “for some”: the rough path has steps up to 70 mm, and the viewpoint section is currently unsafe for people using wheels. Do not treat it as a step-free alternative; recheck the live notice.',
        watch: [
          ['The Greta bridge is closed in autumn 2026', 'The National Park notice dated 22 September says work is expected to last up to eight weeks. Recheck before relying on a western railway-path connection or describing the path as open end to end.'],
          ['A lake jetty is not a road interchange', 'Launch landings have different walking links and some sailings are seasonal or weather-limited. Verify both the sailing and the return to Keswick.'],
          ['Keswick adds a bus leg to every train', 'Penrith connections depend on the dated bus timetable. Avoid planning the day around the final service if a train connection matters.']
        ],
        duration: 'Allow a full day from Penrith or a Lake District base, including the bus in both directions. A town-and-short-shore visit can fill several hours; the 10-mile Derwentwater walk needs a separate, weather-aware day.',
        combine: 'Combine Keswick with one launch landing or one lower walk. Keep Windermere, Carlisle and the full Derwentwater circuit for separate days.',
        verify: 'Check the dated Penrith–Keswick bus, Keswick Launch times and jetty pattern, Lake District path alerts, the Greta bridge notice, mountain weather and daylight before departure.',
        sources: [
          ['https://lakedistrict.gov.uk/explore/places-to-go/explore-derwentwater-and-keswick/', 'Lake District National Park — Keswick and Derwentwater routes'],
          ['https://lakedistrict.gov.uk/route/keswick-railway-path-route/', 'Lake District National Park — railway path route and Greta bridge notice'],
          ['https://lakedistrict.gov.uk/route/friars-crag/', 'Lake District National Park — Friar’s Crag distance and access status'],
          ['https://keswick-launch.co.uk/cruises/times/', 'Keswick Launch — dated sailings and operating notices']
        ]
      }),
      g({
        slug: 'carlisle-hadrians-wall-west',
        reviewDateISO: '2026-10-10',
        reviewDate: '10 October 2026',
        name: 'Carlisle & Hadrian’s Wall West',
        instrument: 'Fort-and-frontier rail strip',
        layout: 'roman-frontier-section',
        imageQuery: 'Hadrians Wall Cumbria landscape',
        imageAlt: 'Hadrian’s Wall crossing the Cumbrian landscape',
        purpose: 'Decide whether to keep a Carlisle city-and-museum day or use the dated HW1 bus from Carlisle for one western fort or wall section. Rural stops are spaced along a frontier corridor, so choose the return before leaving the city.',
        summary: 'From Carlisle, use HW1’s Stand K departure and select one named stop such as Birdoswald or Walltown. The published 2026 timetable runs through 3 January 2027; check the actual date, return service and any Walltown connection before setting out.',
        choices: [
          ['Carlisle city and collections', 'Stay near the station for Carlisle Castle, the cathedral and Tullie’s collections. This is the stronger wet-weather plan and avoids a rural return bus.'],
          ['HW1 to Birdoswald', 'Board the published Carlisle–Walltown HW1 service at Stand K, West Tower Street, and use the Birdoswald stop for the fort and a bounded wall visit. It is the clearest single-site frontier day, but depends on the dated rural timetable.'],
          ['HW1 to Walltown, then check AD122', 'Walltown Country Park and the Roman Army Museum sit on the same corridor; a 2026 connection with AD122 is described there, but use it only when the two date-specific timetables actually connect. This adds reach and another failure point.']
        ],
        access: 'The 2026 HW1 timetable starts at Stand K on West Tower Street in Carlisle and lists Brampton, Lanercost, Birdoswald, Gilsland, Greenhead and Walltown Country Park/Roman Army Museum. Carlisle station is a separate walk and interchange; confirm the stop, return and any onward AD122 link for your travel date.',
        tradeoff: 'A fort visit and a full Carlisle city itinerary compete for the same daylight and rural bus window. Birdoswald gives the longest surviving continuous stretch of wall but costs time in the countryside; a city-only day trades the open frontier for indoor collections and a simpler rail return.',
        stages: [
          ['Find the right Carlisle departure', 'From Carlisle station, walk to Stand K on West Tower Street and check the HW1 date-specific timetable. Choose Birdoswald or Walltown before boarding.'],
          ['Use one named frontier stop', 'At Birdoswald, focus on the fort and a signed wall section. At Walltown, keep the country park or Roman Army Museum as the anchor; only add AD122 if the posted 2026 connection works both ways.'],
          ['Read the Wall as a historic system', 'At Birdoswald, the surviving stretch connects the fort to a wider line of milecastles and turrets. Follow permitted paths and turn back on time rather than treating the frontier as one open attraction.'],
          ['Return to Carlisle with a buffer', 'Reach the same bus stop before the last suitable HW1 journey. Keep time for the city-side interchange before any mainline train; a missed rural service cannot be repaired by walking to a distant fort.']
        ],
        fallback: 'If rain, rural service changes or a missed connection make the Wall impractical, stay in Carlisle for the castle, cathedral and Tullie collections. Do not swap to a different remote fort without checking its route and return from the beginning.',
        watch: [
          ['HW1 is date-bound', 'The council timetable is published for 5 January 2026–3 January 2027. Check the exact day’s stops and last return instead of carrying an old summer plan into another season.'],
          ['Walltown–AD122 is a connection to verify', 'The 2026 west-route information identifies Walltown as a change point, not a guaranteed timed interchange. Compare both operators’ same-day schedules before choosing it.'],
          ['The frontier is rural ground', 'Wind, rain, mud and farm access can slow the walk between remains. Stay on signed public routes and leave enough time to reach the bus stop.']
        ],
        duration: 'Allow a full day for one HW1 stop from Carlisle, including the bus in both directions. Keep a separate five-to-seven-hour block for the city; do not count on fitting both at full length.',
        combine: 'Combine one HW1 stop with a short Carlisle orientation only when the dated bus times leave a real return margin. Keep central Hadrian’s Wall and the Solway coast for separate days.',
        verify: 'Check Cumberland Council’s dated HW1 timetable, the stop-specific return, English Heritage access, Hadrian’s Wall path guidance, and any same-day AD122 connection before travel.',
        sources: [
          ['https://www.cumberland.gov.uk/buses/service/HW1', 'Cumberland Council — HW1 route and 2026 timetable'],
          ['https://hadrianswallcountry.co.uk/explore/explore-hadrians-wall-by-bus/', 'Hadrian’s Wall Country — HW1 and AD122 bus connections'],
          ['https://www.english-heritage.org.uk/visit/places/birdoswald-roman-fort-hadrians-wall/', 'English Heritage — Birdoswald Roman Fort and surviving wall'],
          ['https://www.tullie.org.uk/', 'Tullie — Carlisle collections and indoor alternative']
        ]
      })
    ]
  }),
  c({
    slug: 'northeast-northumberland',
    reviewDateISO: '2026-10-10',
    reviewDate: '10 October 2026',
    name: 'Newcastle, Durham & Northumberland',
    nation: 'England',
    band: 'england-midlands-north',
    family: 'tyne-wear-border-book',
    label: 'Tyne–Wear border book',
    tagline: 'Keep the twin river cities rail-simple; give the tidal coast its own clock.',
    hubIntro: 'Newcastle–Gateshead and Durham are compact rail cities with strong river and collection routes, while Bamburgh and Holy Island introduce long road links and a tidal causeway. The region works when city days remain complete and the coast is planned as a separate weather-and-tide operation.',
    stay: 'Three to five nights in Newcastle supports the Tyne, Durham and one Northumberland branch. Durham also works as a quiet base but offers fewer coast connections. A Holy Island day should never be tied to a hotel-change deadline.',
    transfer: 'Newcastle Central, Gateshead and Durham sit at different levels, while the coast needs a separate bus plan: Go North East 54 connects Central Station, Gateshead Interchange, Baltic Square and the Quayside; Arriva X18 links Newcastle Haymarket with Bamburgh via Morpeth, Alnwick and Seahouses. From Berwick, Borders 0918/0418 serves Bamburgh and Church Street. Holy Island adds two independent checks: a date-specific 477 bus and the same-day road crossing window.',
    season: 'City routes remain useful year-round. Coast wind, sea state, causeway windows and winter daylight shape Northumberland; summer increases castle and island pressure. Football and arena events can crowd Tyne transport.',
    fallback: 'If tide, wind or coast transport fails, use Newcastle or Durham as a complete city day. Do not substitute another remote beach or castle without rechecking the return.',
    sources: [
      ['https://newcastlegateshead.com/', 'NewcastleGateshead — official destination guide'],
      ['https://www.thisisdurham.com/', 'Visit County Durham — official destination guide'],
      ['https://www.visitnorthumberland.com/', 'Visit Northumberland — official destination guide'],
      ['https://www.gonortheast.co.uk/services/GNE/54', 'Go North East — VOLTRA 54 route and stops'],
      ['https://arrivabus.co.uk/services/NMS_AN_X18', 'Arriva — X18 Newcastle–Northumberland coast route'],
      ['https://www.bordersbuses.co.uk/services/PERY/0918', 'Borders Buses — Berwick–Chathill route via Bamburgh'],
      ['https://glenvalley.co.uk/timetables/', 'Glen Valley — 477 Berwick–Beal–Holy Island timetable'],
      ['https://www.visitnorthumberland.com/travel-tips/while-youre-here/holy-island-crossing-times', 'Visit Northumberland — Holy Island safe road crossing times']
    ],
    guides: [
      g({
        slug: 'newcastle-gateshead-quays',
        reviewDateISO: '2026-10-10',
        reviewDate: '10 October 2026',
        name: 'Newcastle & Gateshead Quays',
        instrument: 'Bridge-and-bank culture ledger',
        layout: 'tyne-bridge-fold',
        imageQuery: 'Newcastle Gateshead Quays Millennium Bridge Tyne',
        imageAlt: 'Bridges and cultural buildings along the Tyne at Newcastle and Gateshead',
        purpose: 'Choose one bank and cultural anchor, then cross the Tyne deliberately so station elevation, bridges and Quayside venues form a route rather than repeated climbs.',
        summary: 'Choose the 15–20 minute walk from the city centre or rail station over the pedestrian Millennium Bridge, or use Go North East 54 between Central Station and Baltic Square. Check the return leg before crossing.',
        choices: [
          ['Newcastle historic core', 'Prioritize the castle, cathedral and Grainger Town before a short Quayside finish. This gives the clearest city-origin story.'],
          ['Two-bank culture route', 'Use Baltic and the Millennium Bridge. Baltic is free and open Wednesday–Sunday, 10:00–18:00; the 54 also links Central Station, Gateshead Interchange, Baltic Square and the Quayside.'],
          ['Ouseburn extension', 'Continue east to the Ouseburn for smaller venues and food. It creates a deeper neighbourhood day but sacrifices Gateshead or castle time.']
        ],
        access: 'Baltic says the walk from Newcastle city centre or rail station takes 15–20 minutes over the pedestrian Millennium Bridge. In rain or when avoiding the descent and climb, Go North East 54 connects Central Station, Gateshead Interchange, Baltic Square and the Quayside; check the date-specific service and stop for the return. The walk and bus are alternatives, not an assumed timed interchange.',
        tradeoff: 'The historic core, Gateshead culture and Ouseburn point in three directions. Choosing one secondary district sacrifices another but avoids repeated steep climbs and bridge crossings.',
        stages: [
          ['Choose the Baltic approach', 'Walk 15–20 minutes from the city centre or station over the Millennium Bridge, or check the 54 from Central Station to Baltic Square. Save the same-day return plan.'],
          ['Use Baltic within its opening window', 'Baltic is free and open Wednesday–Sunday, 10:00–18:00; it is closed Monday and Tuesday. In wet weather, make it the indoor anchor only on an open day.'],
          ['Cross once with purpose', 'Use the Millennium, Swing or High Level Bridge according to the next venue and elevation. Continue to Gateshead or Ouseburn, not both.'],
          ['Return above the river', 'Take Metro or a planned uphill street to Central. Event crowds and bridge lifts can add time, so keep margin.']
        ],
        fallback: 'For rain, use Baltic during its Wednesday–Sunday 10:00–18:00 opening window. On Monday or Tuesday, when it is closed, keep the day to the Newcastle historic core or another already-checked indoor venue rather than making the Quays the anchor. If the bus or walk does not suit, change the route before leaving Central.',
        watch: [
          ['The Quayside sits below the stations', 'A flat riverside map hides the final climb. Use Metro or choose a gradual return when mobility is limited.'],
          ['Bridges serve different street levels', 'The same crossing can deliver you above or below the next venue. Read the exit, not only the landmark.'],
          ['Event nights change the return', 'Arena, football and concert crowds load Metro and rail. Preserve a later train and alternative crossing.']
        ],
        duration: 'Allow six to eight hours for one cultural anchor and two-bank route. A historic core plus short Quayside circuit can fit four to five hours.',
        combine: 'Combine the historic core with Quayside or Gateshead with Ouseburn only when the route stays east. Keep Durham and the coast for separate days.',
        verify: 'Check Baltic opening information and the same-day Go North East 54 timetable before choosing the walk or bus; allow for the return leg and check any venue or event notices.',
        sources: [
          ['https://baltic.art/plan-your-visit/getting-to-baltic/', 'BALTIC — getting to the gallery, walking time, opening days and free entry'],
          ['https://www.gonortheast.co.uk/services/GNE/54', 'Go North East — VOLTRA 54 route and stops'],
          ['https://www.nexus.org.uk/metro', 'Nexus — official Tyne and Wear Metro information']
        ]
      }),
      g({
        slug: 'durham-cathedral-city',
        reviewDateISO: '2026-10-10',
        reviewDate: '10 October 2026',
        name: 'Durham Cathedral & River Peninsula',
        instrument: 'Peninsula climb-and-loop card',
        layout: 'cathedral-river-meander',
        imageQuery: 'Durham Cathedral River Wear panorama',
        imageAlt: 'Durham Cathedral above the wooded River Wear peninsula',
        purpose: 'Use Durham’s peninsula as one vertical route, choosing cathedral, castle or river loop depth and allowing for the steep station-to-core connection.',
        summary: 'Descend from Durham station, climb to Palace Green for one controlled interior, follow one side of the River Wear, and return without repeating the peninsula slopes.',
        choices: [
          ['Cathedral depth', 'Give the cathedral, collections and precinct the main block. This provides the strongest sacred and architectural reading.'],
          ['Castle and university context', 'Use an available castle tour or university collection with Palace Green. This depends more on timed access.'],
          ['River and city landscape', 'Keep interiors shorter and complete a signed riverbank or garden route. It offers the best peninsula perspective but includes steps and gradients.']
        ],
        access: 'The Cathedral Bus connects the Cathedral and Castle with the rail station and coach drop-off. Durham Cathedral says it runs through the day Monday–Saturday and on Sundays until 1 November 2026, is suitable for wheelchair users and pushchairs, and has no evening service. Plan the return around that limit; for a later finish, arrange a taxi or allow for the uphill station walk. Riverside paths can still include steps or mud.',
        tradeoff: 'A full cathedral visit, castle tour and complete river loop compete for the same half-day. Choosing the river sacrifices interior depth; choosing both controlled buildings makes the landscape a short viewpoint only.',
        stages: [
          ['Choose the station connection', 'Use the Cathedral Bus between the rail station and Cathedral/Castle when it operates; it also serves the coach drop-off. Its stated Sunday service runs only until 1 November 2026. Otherwise plan the walk or a taxi and keep the return in view.'],
          ['Meet Palace Green', 'Complete the cathedral or booked castle product with its worship, tour and security conditions. Do not assume both can be improvised.'],
          ['Choose one river side', 'Descend toward the Wear and follow a bounded bank or bridge sequence. Use the opposite side only when the exit supports the return.'],
          ['Regain the station with margin', 'The Cathedral Bus has no evening service. If staying late, arrange a taxi or allow for the uphill walk to the rail station; check the train as well as the bus before committing to an evening plan.']
        ],
        fallback: 'If rain or river paths make the loop unattractive, keep to the Cathedral, Castle and upper-city route and use the Cathedral Bus where it operates. If an evening return is needed, do not rely on that bus: arrange a taxi or allow for the climb back to the station.',
        watch: [
          ['Worship and university use control access', 'Cathedral and castle are working institutions. Check the exact visitor and tour notice for the day.'],
          ['The city is steep', 'Station, river and Palace Green occupy different levels. Build the final climb into the schedule.'],
          ['Low paths respond to water and rain', 'Riverbank mud or closures can break a loop. Use bridges and upper streets rather than forcing a blocked section.']
        ],
        duration: 'Allow five to seven hours for one major interior and a river route. A cathedral-and-city stop can fit three to four hours between trains.',
        combine: 'Combine the cathedral with one river loop or a castle tour with the market. Keep Newcastle and Northumberland coast for separate days.',
        verify: 'Check the Cathedral Bus operating day and return, noting that the published Sunday extension ends 1 November 2026 and there is no evening service; also check cathedral access, castle tours, river paths and trains.',
        sources: [
          ['https://www.durhamcathedral.co.uk/visit-us/plan-your-visit/parking-getting-to-durham-cathedral', 'Durham Cathedral — Cathedral Bus, access and getting to the Cathedral'],
          ['https://www.thisisdurham.com/explore-durham/durham-city', 'Visit County Durham — official Durham City guide']
        ]
      }),
      g({
        slug: 'bamburgh-holy-island',
        reviewDateISO: '2026-10-10',
        reviewDate: '10 October 2026',
        name: 'Bamburgh Castle & Holy Island',
        instrument: 'Causeway tide-and-road board',
        layout: 'tidal-border-chart',
        imageQuery: 'Bamburgh Castle Northumberland coast',
        imageAlt: 'Bamburgh Castle above the Northumberland coast',
        purpose: 'Choose Bamburgh or Holy Island as the main coast destination, then confirm the coast bus and, for the island, both the date-specific 477 service and same-day road crossing window.',
        summary: 'Arrive at Bamburgh by the Newcastle–coast X18 or from Berwick on Borders 0918/0418; plan Holy Island separately around the 477 date and the road crossing window.',
        choices: [
          ['Bamburgh castle and village', 'Use the castle, beach and village as a complete day. Arriva X18 runs from Newcastle Haymarket via Morpeth, Alnwick and Seahouses; Borders 0918/0418 links Berwick with Bamburgh and Church Street. Check the exact date and return.'],
          ['Holy Island depth', 'Plan the entire day around the safe causeway crossing, island sites and departure deadline. This gives the strongest tidal-place story.'],
          ['Booked coast circuit', 'Use a guided tour or car to connect selected coast sites. It gains reach but still cannot override tide or attraction access.']
        ],
        access: 'Neither destination has a railway station. Arriva X18 links Newcastle Haymarket to Bamburgh via Morpeth, Alnwick and Seahouses; Borders 0918/0418 connects Berwick to Chathill via Seahouses and Bamburgh, serving Church Street. Check the date-specific timetable and return. Holy Island also requires two independent gates: Glen Valley 477 from Berwick Railway Station via Beal, and the same-day safe road crossing window. On operating days, the 477 provides two journeys in each direction, selected around the tide; some dates have no service. Its dated timetable lists no service on 10 October 2026, so never assume the bus runs on a suitable tide date. Official safe crossing times apply to the road and adjacent causeway path only, not a walk across sands or mud; allow an extra 30 minutes for local conditions or high wind, and check the changing daily window.',
        tradeoff: 'Bamburgh Castle and a meaningful Holy Island visit do not always fit the same tide window. Choosing the island sacrifices a relaxed castle day; choosing Bamburgh gives up the tidal crossing but protects flexibility.',
        stages: [
          ['Choose a coast corridor', 'For Bamburgh, check the X18 from Newcastle Haymarket or Borders 0918/0418 from Berwick, including the stop and return. For Holy Island, separately check whether Glen Valley 477 operates from Berwick Railway Station via Beal on your date.'],
          ['Complete the first coast anchor', 'Visit Bamburgh or, after a safe crossing, begin Holy Island with the departure deadline visible from the start.'],
          ['Pass both Holy Island gates', 'Check the same-day road crossing window independently of the 477 timetable. The safe times cover the road and adjacent causeway path, not walking across sands or mud; allow the recommended extra 30 minutes for local conditions or high wind.'],
          ['Recover the inland connection', 'Reach the rail or bus gateway with margin for coast traffic. Treat any second castle or beach as optional only after the return is secure.']
        ],
        fallback: 'If either Holy Island gate fails—the 477 does not run on the date, or the same-day road crossing window does not fit—choose Bamburgh as a separate day and verify its bus return. At Bamburgh Castle, a free shuttle buggy runs from the uphill car park. The State Room tour lets visitors reach the first five rooms, including King’s Hall; beyond King’s Hall, steps and narrow passages mean wheelchairs, walking aids and crutches cannot continue. The public beach and village are separate, lower-impact options if the castle interior does not suit.',
        watch: [
          ['Bus service and road crossing are separate gates', 'On operating days, the 477 provides two journeys in each direction, selected around the tide; some dates have no service. Independently confirm the safe same-day road crossing; neither check substitutes for the other.'],
          ['The crossing window is for the causeway', 'Official safe times cover the road and adjacent path only, not a walk over sands or mud. Add 30 minutes for local conditions or high wind.'],
          ['Beach and castle weather differ', 'Wind, surf and blowing sand may make the shore unsuitable while the village remains usable. Keep the lower-risk branch.']
        ],
        duration: 'Allow a full day for either Bamburgh or Holy Island from Newcastle. Combining them is appropriate only when a booked route and safe tide window leave real dwell time.',
        combine: 'Combine Bamburgh with its village and beach viewpoint, or Holy Island with its island sites. Keep Durham and Newcastle for separate days.',
        verify: 'Check the exact X18 or Borders 0918/0418 date-specific timetable and return for Bamburgh; for Holy Island, check the Glen Valley 477 service date and the official same-day road crossing times as independent requirements. Also check castle access, weather and the final rail connection.',
        sources: [
          ['https://www.visitnorthumberland.com/travel-tips/while-youre-here/holy-island-crossing-times', 'Visit Northumberland — current Holy Island safe crossing times'],
          ['https://arrivabus.co.uk/services/NMS_AN_X18', 'Arriva — X18 Newcastle Haymarket–Bamburgh route via the coast'],
          ['https://www.bordersbuses.co.uk/services/PERY/0918', 'Borders Buses — 0918/0418 Berwick–Chathill route via Bamburgh and Seahouses'],
          ['https://glenvalley.co.uk/timetables/', 'Glen Valley — 477 Berwick Railway Station–Beal–Holy Island timetable'],
          ['https://www.bamburghcastle.com/visit-us/', 'Bamburgh Castle — visitor access and shuttle buggy information']
        ]
      })
    ]
  }),
  c({
    slug: 'edinburgh-lothians',
    name: 'Edinburgh & the Lothians',
    nation: 'Scotland',
    band: 'scotland',
    family: 'volcanic-ridge-close-book',
    label: 'Ridge-and-close route book',
    tagline: 'Use one ridge, one booked interior and one level change at a time.',
    hubIntro: 'Edinburgh’s Old Town ridge, New Town terraces and lower valleys create a vertical city where short map distances conceal stairs and steep streets. East Lothian adds a separate coast railway. A strong plan fixes one controlled interior and uses the city’s level changes as the route rather than an inconvenience.',
    stay: 'Three to five nights supports Old Town, New Town and an East Lothian branch with weather flexibility. Staying near Waverley is central but can involve steep exits; Haymarket suits western connections and some airport journeys.',
    transfer: 'Waverley station sits in the valley between Old and New Towns, with exits at different levels. Trams, buses and rail serve distinct corridors. Festival periods, rugby and major events can alter central access and accommodation pressure.',
    season: 'Wind and rain affect exposed viewpoints year-round. Festival season increases crowds and ticket pressure; winter shortens Arthur’s Seat and coast plans but gives strong museum and street-light alternatives.',
    fallback: 'Keep a complete National Museum, gallery or lower-city route for poor weather. If a castle or palace booking fails, remain on the same ridge instead of crossing the city for another timed monument.',
    sources: [
      ['https://edinburgh.org/', 'Forever Edinburgh — official destination guide'],
      ['https://www.lothianbuses.com/', 'Lothian Buses — official local transport information'],
      ['https://www.scotrail.co.uk/', 'ScotRail — rail planning and service updates']
    ],
    guides: [
      g({
        slug: 'old-town-castle-royal-mile',
        name: 'Old Town, Castle & Royal Mile',
        instrument: 'Ridge-entry and descent clock',
        layout: 'castle-ridge-long-section',
        imageQuery: 'Edinburgh Castle Old Town skyline',
        imageAlt: 'Edinburgh Castle above the Old Town skyline',
        purpose: 'Choose Edinburgh Castle, the Palace of Holyroodhouse or the public Royal Mile as the main layer, then travel one direction along the ridge instead of climbing it twice.',
        summary: 'Enter the Old Town at the correct level, complete one controlled interior, descend the Royal Mile through selected closes, and finish at Holyrood or Waverley without retracing.',
        choices: [
          ['Castle depth', 'Use the timed castle entry and collections as the main event, then descend only as far as energy and time allow. This is the strongest fortress story.'],
          ['Royal Mile civic route', 'Keep castle and palace mostly exterior, using closes, St Giles’ and public museums. It is flexible and preserves street context.'],
          ['Holyrood and lower ridge', 'Begin or finish around the palace and Parliament, with a shorter upper Old Town. This gives modern and royal contrast but sacrifices castle depth.']
        ],
        access: 'Waverley exits reach different street levels; the castle esplanade is uphill and controlled. Buses can place visitors near the upper or lower ridge. Plan the direction first and do not assume a palace ticket includes a route through adjacent royal grounds.',
        tradeoff: 'A deep castle visit, every close, a museum and Holyrood Palace exceed one useful day. Choosing the castle sacrifices lower-ridge depth; choosing Holyrood means the upper fortress becomes exterior context.',
        stages: [
          ['Reach the chosen ridge level', 'Use Waverley’s correct exit or a bus to the upper or lower Old Town, preserving the return route before joining crowds.'],
          ['Complete one royal anchor', 'Enter the castle or palace with the exact ticket and security instructions. Keep weather and event closures inside the plan.'],
          ['Move one way through closes', 'Follow the Royal Mile in one direction, selecting a few closes, St Giles’ or one free museum. Do not descend and reclimb every side street.'],
          ['Exit at valley or Holyrood', 'Finish at Waverley, Canongate or Holyrood with a direct bus, tram or walk. Avoid a late forced climb back to the castle end.']
        ],
        fallback: 'If the castle or palace closes, use the National Museum of Scotland, St Giles’, public closes and a shorter ridge route. In severe wind, omit exposed viewpoints and use the lower streets.',
        watch: [
          ['The Royal Mile is a slope', 'The full ridge includes substantial ascent or descent. Choose the direction from walking capacity and final transport.'],
          ['Festival streets are slower', 'Crowds, barriers and performances can alter normal movement. Leave wider margins around timed entries.'],
          ['Royal sites have separate operations', 'Castle and palace tickets, closures and ceremonial use differ. Verify each institution on the day.']
        ],
        duration: 'Allow six to eight hours for one royal interior and the Old Town ridge. The castle alone can use three to four hours during busy periods.',
        combine: 'Combine the castle with the upper Royal Mile or Holyrood with Canongate and Parliament. Keep New Town and East Lothian for separate days.',
        verify: 'Check Edinburgh Castle or Holyroodhouse access, Old Town event controls, Lothian transport and weather before departure.',
        sources: [
          ['https://www.edinburghcastle.scot/plan-your-visit', 'Historic Environment Scotland — Edinburgh Castle visit planning'],
          ['https://www.rct.uk/visit/palace-of-holyroodhouse', 'Royal Collection Trust — Palace of Holyroodhouse visitor information']
        ]
      }),
      g({
        slug: 'new-town-dean-village',
        name: 'New Town, Galleries & Dean Village',
        instrument: 'Terrace-to-water level chart',
        layout: 'georgian-grid-waterline',
        imageQuery: 'Edinburgh Dean Village Water of Leith',
        imageAlt: 'Dean Village beside the Water of Leith in Edinburgh',
        purpose: 'Choose a National Galleries collection or the Georgian street plan as the main argument, then descend to Dean Village and the Water of Leith only with a clear exit from the valley.',
        summary: 'Start near Princes Street or the gallery complex, walk one New Town terrace line, descend once to Dean Village, and leave through Stockbridge or a planned climb.',
        choices: [
          ['National Galleries depth', 'Use one gallery building and the mound as the main visit. This gives collection depth and a short New Town circuit.'],
          ['Georgian city grid', 'Prioritize Charlotte Square, terraces and civic streets with selected interiors. It best explains the planned city but remains mostly urban.'],
          ['Dean Village and Water of Leith', 'Give the lower valley and Stockbridge the long block. It offers landscape contrast but requires steps, surfaces and an exit climb.']
        ],
        access: 'Princes Street and Waverley sit near the New Town edge, while Dean Village is below street level. Water of Leith paths have specific access points. Select the descent and exit before entering the valley; do not rely on the nearest-looking bridge.',
        tradeoff: 'A deep gallery visit, complete New Town architecture circuit and long Water of Leith walk exceed a relaxed day. Choosing the valley sacrifices a second collection; choosing galleries keeps Dean Village brief.',
        stages: [
          ['Begin on the planned grid', 'Use Princes Street, the Mound or Charlotte Square according to the first gallery or terrace line, and note the final bus or tram.'],
          ['Complete one collection or square set', 'Give the selected gallery or Georgian streets a coherent block before descending. Avoid alternating between Old and New Town.'],
          ['Drop to the water once', 'Use the named Dean Village access and follow a bounded Water of Leith segment toward Stockbridge or the chosen exit.'],
          ['Exit before the valley traps the return', 'Climb at the planned point and finish near a bus or tram. Wet steps and darkness can make an improvised exit unpleasant.']
        ],
        fallback: 'If paths are closed or slippery, stay with the National Galleries, Georgian streets and Stockbridge surface route. If a gallery closes, use the city grid and one safely accessible valley viewpoint.',
        watch: [
          ['Dean Village is below the street grid', 'Photogenic proximity hides steps and gradients. Choose the exit as carefully as the descent.'],
          ['Gallery buildings are separate', 'National Galleries venues and exhibitions do not share one doorway or schedule. Confirm the exact building.'],
          ['Water paths can close locally', 'Flood, maintenance and ice can interrupt the route. Respect barriers and return to street level.']
        ],
        duration: 'Allow five to seven hours for one gallery, the New Town and a bounded Water of Leith segment. A gallery-and-grid visit can fit four hours.',
        combine: 'Combine the New Town with Dean Village or Stockbridge. Keep the Old Town ridge and East Lothian for separate days.',
        verify: 'Check the selected National Galleries venue, Water of Leith path notices, local transport and weather before setting the descent.',
        sources: [
          ['https://www.nationalgalleries.org/visit', 'National Galleries of Scotland — official visit information'],
          ['https://www.waterofleith.org.uk/walkway/', 'Water of Leith Conservation Trust — walkway information']
        ]
      }),
      g({
        slug: 'north-berwick-east-lothian',
        name: 'North Berwick & East Lothian',
        instrument: 'Coast-train-and-seabird board',
        layout: 'firth-coast-window',
        imageQuery: 'North Berwick harbour Bass Rock Scotland',
        imageAlt: 'North Berwick harbour with Bass Rock in the Firth of Forth',
        purpose: 'Use the Edinburgh–North Berwick rail line for one coast town and decide separately whether a seabird boat, beach walk or nearby historic site fits the marine conditions and return.',
        summary: 'Walk from North Berwick station to town and harbour, assess wind and sea state, complete one coast activity, and return before the branch service or daylight narrows.',
        choices: [
          ['Harbour and seabird centre', 'Keep the day around town, harbour and the Scottish Seabird Centre. It offers marine context without requiring a sailing.'],
          ['Booked wildlife boat', 'Use one operator and exact sailing as the anchor. It gives the strongest island perspective but can cancel for sea conditions.'],
          ['Coast walk and town', 'Follow a bounded signed beach or clifftop section with a turn-back. It is flexible but exposed and tide-aware.']
        ],
        access: 'North Berwick station is inland from the harbour. Boats use specific departure points and weather policies; coast paths and beaches have different surfaces and tide exposure. Save the final ScotRail service before leaving town.',
        tradeoff: 'A substantial boat trip, long coast walk and relaxed town visit do not fit one weather-resilient day. Choosing the boat sacrifices walking distance; choosing land gives up the island approach but protects flexibility.',
        stages: [
          ['Walk station to shore', 'Follow the direct town route, locating the final return and any boat check-in before browsing side streets.'],
          ['Read the marine window', 'Use the harbour and Seabird Centre information to assess wind, visibility and wildlife trip status.'],
          ['Commit to boat or coast', 'Board the booked sailing or follow one signed land route with a time-based turnaround. Do not add both at maximum length.'],
          ['Return on the branch line', 'Regain the station with margin for a meal and changing weather. Keep one train in reserve during events or summer peaks.']
        ],
        fallback: 'If boats cancel, use the Seabird Centre, harbour, town and a sheltered coast section. If wind makes the shore unpleasant, return early to Edinburgh for galleries rather than transferring to another exposed beach.',
        watch: [
          ['Marine cancellation is normal risk', 'A booking does not guarantee sailing. Keep the land day complete and understand the operator’s current policy.'],
          ['Bass Rock is not a casual landing', 'Trips differ in route, landing and accessibility. Read the exact product rather than assuming every boat reaches the same place.'],
          ['Branch trains can be busy', 'Festival and summer demand may crowd services. Avoid the final comfortable return where possible.']
        ],
        duration: 'Allow a full day from Edinburgh with a boat, or five to six hours for town and coast. A long walk needs the full daylight window.',
        combine: 'Combine the harbour with the Seabird Centre or one coast route. Keep Edinburgh’s Old Town and distant castles for separate days.',
        verify: 'Check ScotRail service, the exact boat operator, Scottish Seabird Centre information, marine weather and tide before departure.',
        sources: [
          ['https://www.seabird.org/plan-your-visit', 'Scottish Seabird Centre — official visitor information'],
          ['https://www.visiteastlothian.org/', 'Visit East Lothian — official destination guide']
        ]
      })
    ]
  }),
  c({
    slug: 'glasgow-clyde',
    name: 'Glasgow & the Clyde',
    nation: 'Scotland',
    band: 'scotland',
    family: 'clyde-grid-and-park-book',
    label: 'Clyde grid and park book',
    tagline: 'Keep the centre, West End and loch branch as three distinct city systems.',
    hubIntro: 'Glasgow’s centre, Merchant City and Clyde waterfront form one urban field; the West End has its own museum-and-park rhythm; Loch Lomond adds a rail-to-water branch beyond the city. A useful stay chooses one district per half-day and does not let Subway convenience erase walking and collection scale.',
    stay: 'Three to five nights supports two Glasgow city days and one Clyde or Loch Lomond branch. Central station suits southern and western rail, Queen Street serves Edinburgh and northern routes, and the Subway helps within the city but does not replace every final walk.',
    transfer: 'Glasgow Central and Queen Street are separate stations. Subway, buses and ScotRail use different fares and corridors. Loch Lomond stations serve distinct shores and boat points; choose the destination before boarding a generic northbound train.',
    season: 'Rain is common and can be absorbed by Glasgow’s collections. Park, river and loch plans need wind and daylight judgment. Football, concerts and conferences can load transit and accommodation at any time.',
    fallback: 'Use a complete museum and civic route in Glasgow when loch weather or rail fails. If one large museum is closed, keep the same district through galleries, parks and streets.',
    sources: [
      ['https://peoplemakeglasgow.com/', 'People Make Glasgow — official destination guide'],
      ['https://www.spt.co.uk/', 'Strathclyde Partnership for Transport — official network information'],
      ['https://www.scotrail.co.uk/', 'ScotRail — rail planning and service updates']
    ],
    guides: [
      g({
        slug: 'central-merchant-city-clyde',
        name: 'Central Glasgow, Merchant City & the Clyde',
        instrument: 'Grid-to-river civic register',
        layout: 'merchant-grid-river-drop',
        imageQuery: 'Glasgow city centre Clyde architecture',
        imageAlt: 'Glasgow city architecture near the River Clyde',
        purpose: 'Choose civic architecture, Merchant City or the Clyde as the main line and use one downhill movement to the river, avoiding repeated crossings between Central and Queen Street.',
        summary: 'Start at the station serving the first district, complete one civic or collection anchor, descend through Merchant City or the grid, and finish along a bounded Clyde section.',
        choices: [
          ['Civic centre and Mackintosh', 'Use the central grid, library or selected architecture interior as the main story. It is compact but depends on current building access.'],
          ['Merchant City and cathedral edge', 'Move east through Merchant City toward the cathedral and Necropolis. This adds history and elevation while leaving the Clyde shorter.'],
          ['Clyde and contemporary city', 'Prioritize the river, bridges and one waterfront venue. It reveals regeneration but can require longer walking or transit.']
        ],
        access: 'Central and Queen Street sit on different sides of the core; the Clyde is downhill. Choose the arrival station and final bridge or venue before walking. Some celebrated architecture remains under restoration or controlled access, so verify the exact interior.',
        tradeoff: 'The cathedral edge and western Clyde venues point in opposite directions. Choosing one sacrifices the other but creates a readable city day instead of a transit zig-zag.',
        stages: [
          ['Enter the correct grid', 'Leave Central or Queen Street toward the selected civic anchor, noting the final station rather than defaulting to the arrival point.'],
          ['Complete one city argument', 'Use Merchant City, a museum or architecture stop as a bounded block. Confirm current building access before relying on an interior.'],
          ['Descend once to river or east', 'Move toward the Clyde or cathedral precinct, not both. Use one bridge or hill sequence with a named endpoint.'],
          ['Exit on rail or Subway', 'Finish near the matching station, Subway or bus. Event crowds can lengthen the apparent short city connection.']
        ],
        fallback: 'If a building is closed, use the Gallery of Modern Art, Mitchell Library or public architecture and continue the same grid. In poor river weather, keep the lower city section short and move to an indoor collection.',
        watch: [
          ['Famous architecture may not be open', 'Restoration, fire recovery and event use affect access. Confirm the specific building rather than planning from an old guide.'],
          ['The cathedral side climbs', 'Merchant City to cathedral and Necropolis adds elevation. Preserve energy or use a bus.'],
          ['Central and Queen Street require a street transfer', 'There is no same-platform interchange. Include the walk and station entrances in onward plans.']
        ],
        duration: 'Allow six to eight hours for one civic anchor and one east or river branch. A central grid route can fit four to five hours.',
        combine: 'Combine Merchant City with cathedral edge or the central grid with the Clyde. Keep the West End and Loch Lomond for separate days.',
        verify: 'Check Glasgow Life venue access, ScotRail and Subway status, river weather and the event calendar before departure.',
        sources: [
          ['https://www.glasgowlife.org.uk/museums', 'Glasgow Life Museums — official visitor information'],
          ['https://www.spt.co.uk/travel-with-spt/subway/', 'SPT — Glasgow Subway information']
        ]
      }),
      g({
        slug: 'west-end-kelvingrove',
        name: 'West End, Kelvingrove & the University',
        instrument: 'Museum-park-campus field card',
        layout: 'sandstone-park-cabinet',
        imageQuery: 'Kelvingrove Art Gallery Glasgow exterior',
        imageAlt: 'Kelvingrove Art Gallery and Museum in Glasgow',
        purpose: 'Choose Kelvingrove, the Hunterian or the Botanic Gardens as the main anchor and connect park, university and neighbourhood without treating every free collection as a compulsory stop.',
        summary: 'Arrive by Subway or bus, complete one museum, cross Kelvingrove Park or the university once, and finish around Byres Road or the Botanic Gardens.',
        choices: [
          ['Kelvingrove depth', 'Give the large civic collection the central block and use the park and university as exterior context. This is the strongest all-weather choice.'],
          ['University and Hunterian', 'Prioritize campus architecture and one Hunterian venue. It offers focused academic collections but requires checking which building is open.'],
          ['Park, lanes and gardens', 'Use Kelvingrove Park, the West End streets and Botanic Gardens with short interiors. It suits fair weather and repeat visitors.']
        ],
        access: 'Kelvinhall, Hillhead and Kelvinbridge Subway stations serve different edges. Kelvingrove Museum is not directly beside a Subway exit, and Hunterian collections occupy separate university buildings. Choose the first door and final station before crossing the park.',
        tradeoff: 'Kelvingrove, multiple Hunterian venues and the Botanic Gardens exceed a useful day at depth. Choosing one collection sacrifices another but leaves room to understand the West End streets and park.',
        stages: [
          ['Arrive at the useful Subway edge', 'Use Kelvinhall for Kelvingrove or Hillhead for university and Byres Road, recording the final station before entering the park.'],
          ['Complete one collection', 'Give Kelvingrove or a named Hunterian building a bounded visit. Check gallery and building status rather than following a general campus pin.'],
          ['Cross park or campus once', 'Move through Kelvingrove Park and university or along Byres Road toward the gardens. Avoid repeating the same slope.'],
          ['Finish near a direct station', 'End at Hillhead, Kelvinbridge or Kelvinhall according to the branch, allowing for event crowds and park closing conditions.']
        ],
        fallback: 'In heavy rain, use Kelvingrove and a single Hunterian venue with Subway between districts. If one museum closes, retain the university architecture and another verified collection in the same West End.',
        watch: [
          ['Hunterian is not one doorway', 'Museum, art gallery and collections occupy different locations and opening patterns. Confirm the exact venue.'],
          ['Park slopes connect different levels', 'The museum, university and river are not flat neighbors. Use the Subway strategically when walking capacity is limited.'],
          ['Free museums still require time', 'Large collections create fatigue even without ticket queues. Preselect themes and stop before the second museum becomes filler.']
        ],
        duration: 'Allow six to eight hours for one museum, park and university or gardens. Kelvingrove alone plus a meal can fill four hours.',
        combine: 'Combine Kelvingrove with the university or Botanic Gardens, not both at full depth. Keep central Glasgow and Loch Lomond for other days.',
        verify: 'Check Kelvingrove and the exact Hunterian venue, Subway status, park conditions and any university event before travel.',
        sources: [
          ['https://www.glasgowlife.org.uk/museums/venues/kelvingrove-art-gallery-and-museum', 'Glasgow Life — Kelvingrove visitor information'],
          ['https://www.gla.ac.uk/hunterian/visit/', 'The Hunterian — official visit information']
        ]
      }),
      g({
        slug: 'loch-lomond-clyde-branch',
        name: 'Loch Lomond from Glasgow',
        instrument: 'Rail-to-loch shore selector',
        layout: 'loch-gateway-switchboard',
        imageQuery: 'Loch Lomond Balloch Scotland view',
        imageAlt: 'Loch Lomond and surrounding hills in Scotland',
        purpose: 'Choose Balloch, Luss or another named Loch Lomond gateway and match its rail, bus or boat connection, rather than treating the whole loch as one easy excursion from Glasgow.',
        summary: 'Leave Glasgow for one gateway, assess water and hill weather, complete one shore, boat or lower-walk plan, and return before branch frequency narrows.',
        choices: [
          ['Balloch rail gateway', 'Use the direct rail line, shore, park and local visitor facilities. It is the simplest car-free choice and strongest poor-weather fallback.'],
          ['Luss village and west shore', 'Use a verified bus or tour for a smaller village-and-shore day. It offers classic views but adds road dependence.'],
          ['Boat or lower hill route', 'Book one exact sailing or follow one signed low route from a named gateway. This adds perspective but is most weather-sensitive.']
        ],
        access: 'Balloch has a rail station; other loch communities use buses, boats, tours or cars. A train to the loch does not put every cruise or trail at the platform. Confirm the pier, stop and final return before leaving Glasgow.',
        tradeoff: 'A loch cruise, village visit and significant hill walk do not fit one resilient day. Choosing the boat sacrifices walking flexibility; choosing Luss gives up the rail simplicity of Balloch.',
        stages: [
          ['Commit to one gateway', 'Board the Balloch train or verified bus or tour and save the final return. Do not change shores mid-day without a booked connection.'],
          ['Read the loch conditions', 'At the shore, assess wind, visibility and service status before buying or starting the second transport product.'],
          ['Complete one water or land line', 'Take the exact sailing, village circuit or signed lower walk with a firm turnaround. Avoid an unplanned high route.'],
          ['Return to Glasgow with margin', 'Reach the station or stop early enough for a missed service, then allow the city interchange between Queen Street and the final accommodation.']
        ],
        fallback: 'If boats or hill weather fail, use Balloch Castle Country Park, village services and lower shore. If branch rail is disrupted before departure, keep the day in Glasgow’s West End.',
        watch: [
          ['Loch Lomond has many gateways', 'Balloch, Luss and eastern or northern shores are not interchangeable. Choose from transport, not only scenery.'],
          ['Cruise timetables are separate', 'Sailings and land transport may not connect automatically. Confirm pier and final boat before boarding the train.'],
          ['Mountain weather can hide the view', 'Low cloud and wind affect hill routes and boats. A lower shore day is a complete alternative.']
        ],
        duration: 'Allow a full day from Glasgow for one loch gateway. Balloch can fit five to six hours; a boat or Luss branch needs the wider window.',
        combine: 'Combine Balloch with one cruise or country-park route. Keep central and West End Glasgow for separate days.',
        verify: 'Check ScotRail or bus service, national park notices, the exact boat operator, detailed weather and daylight before departure.',
        sources: [
          ['https://www.lochlomond-trossachs.org/things-to-do/', 'Loch Lomond & The Trossachs National Park — official visitor information'],
          ['https://www.scotrail.co.uk/', 'ScotRail — Balloch line service information']
        ]
      })
    ]
  }),
  c({
    slug: 'scottish-highlands',
    name: 'Inverness & the Scottish Highlands',
    nation: 'Scotland',
    band: 'scotland',
    family: 'highland-weather-roadbook',
    label: 'Highland weather roadbook',
    tagline: 'Choose one glen or plateau per day and keep the return stronger than the view.',
    hubIntro: 'Inverness and Loch Ness, Glencoe and Fort William, and Aviemore with the Cairngorms use long, weather-sensitive rail and road corridors. Distances, daylight and sparse alternatives make one named landscape per day the useful maximum. A hotel booking does not make a mountain road, path or cruise operational.',
    stay: 'Five to seven nights across one or two bases supports the three systems without daily long transfers. Inverness suits the north and Loch Ness, Fort William the western glens, and Aviemore the Cairngorms. Count base changes as travel days.',
    transfer: 'Highland rail and coach services can be infrequent and road delays substantial. Some trailheads and loch sites remain beyond stations. Save the last two returns, exact pickup side and a low-risk base alternative before leaving town.',
    season: 'Mountain weather changes rapidly in every season. Winter adds snow, ice and short light; spring can retain high snow; summer brings midges and road pressure; autumn storms can affect rail, ferries and paths.',
    fallback: 'Use Inverness, Fort William or Aviemore as complete low-level days through museums, canals, forests or short signed routes. Never replace one closed or clouded mountain with another remote summit attempt.',
    sources: [
      ['https://www.visitscotland.com/places-to-go/highlands', 'VisitScotland — official Highlands destination guide'],
      ['https://www.scotrail.co.uk/', 'ScotRail — Highland rail planning and service updates'],
      ['https://www.metoffice.gov.uk/weather/specialist-forecasts/mountain', 'Met Office — official mountain weather forecasts']
    ],
    guides: [
      g({
        slug: 'inverness-loch-ness',
        name: 'Inverness & Loch Ness',
        instrument: 'Loch-road-and-cruise docket',
        layout: 'river-to-loch-spine',
        imageQuery: 'Inverness River Ness castle Scotland',
        imageAlt: 'The River Ness and cityscape of Inverness',
        purpose: 'Choose Inverness city, a specific Loch Ness shore site or one cruise product, naming the road or pier connection rather than treating the loch as directly beside the rail station.',
        summary: 'Begin on the River Ness, use one verified bus, tour or boat to the selected loch site, and return to Inverness before rural frequency or cruise operation becomes the edge.',
        choices: [
          ['Inverness city and river', 'Keep the day around the river, museum, castle viewpoint and canal edge. This is the most resilient option and needs no long road branch.'],
          ['Urquhart Castle shore', 'Use a named bus, tour or cruise connection to the castle and loch. It gives the strongest historic-loch combination but controls the return.'],
          ['Dedicated loch cruise', 'Choose the exact departure pier and route, accepting weather and product constraints. This gains water perspective but may not include the castle interior.']
        ],
        access: 'Inverness station and bus station are central; Loch Ness sites extend far south-west on different shores. Cruises may depart from the Caledonian Canal or loch-side piers. Confirm pickup, landing and return rather than following a generic Loch Ness ticket.',
        tradeoff: 'A full Inverness day, Urquhart Castle and a long cruise cannot all receive useful time. Choosing the loch sacrifices city depth; choosing the city gives up the iconic shore but protects flexibility.',
        stages: [
          ['Orient on the River Ness', 'Use the city river and station area to confirm the exact bus, tour pickup or cruise pier before leaving services.'],
          ['Reach one loch anchor', 'Travel to Urquhart Castle or the selected pier with the final return visible. Do not add the opposite shore without an explicit connection.'],
          ['Complete castle or cruise', 'Follow the booked product and weather conditions, keeping road or boat delays inside the plan.'],
          ['Return to Inverness early', 'Regain the city with time for a river or museum finish and one onward service in reserve.']
        ],
        fallback: 'If cruise or road conditions fail, use Inverness Museum, River Ness, Ness Islands and a canal-side route. If the castle closes, retain only the shore trip when transport still creates a worthwhile window.',
        watch: [
          ['Loch Ness is long', 'A place name does not describe the shore or pier. Identify the exact destination and travel time.'],
          ['Cruises use different departure points', 'City, canal and loch piers are not interchangeable. Check-in and transport must match the product.'],
          ['Road delay affects the final train', 'Single-carriage roads and peak traffic can widen journey times. Keep the city return generous.']
        ],
        duration: 'Allow a full day for Inverness plus one loch anchor. The city alone needs four to six hours; a long cruise or castle combination can consume the whole day.',
        combine: 'Combine Urquhart Castle with its booked cruise or Inverness with the river and canal. Keep Glencoe and the Cairngorms for separate days.',
        verify: 'Check Urquhart Castle access, the exact cruise or bus operator, road and rail status, weather and final return before departure.',
        sources: [
          ['https://www.historicenvironment.scot/visit-a-place/places/urquhart-castle/', 'Historic Environment Scotland — Urquhart Castle information'],
          ['https://www.visitinvernesslochness.com/', 'Visit Inverness Loch Ness — official destination guide']
        ]
      }),
      g({
        slug: 'glencoe-fort-william',
        name: 'Glencoe & Fort William',
        instrument: 'Glen-road mountain gate',
        layout: 'mountain-corridor-transect',
        imageQuery: 'Glencoe Scotland valley mountains road',
        imageAlt: 'Mountain slopes enclosing Glencoe in the Scottish Highlands',
        purpose: 'Choose Fort William as a low-level base or one named Glencoe route, accounting for the A82 corridor, mountain weather and sparse trailhead transport before committing to elevation.',
        summary: 'Leave the rail or coach town for one verified glen stop, assess conditions at low level, complete a bounded route or visitor-centre day, and recover the return before road delay compounds.',
        choices: [
          ['Glencoe visitor landscape', 'Use the visitor centre, lower glen and one signed short route. It offers context with the largest weather margin.'],
          ['Fort William and canal', 'Keep the day around town, Old Fort, museum and Neptune’s Staircase or lower Glen Nevis. This is the strongest fallback.'],
          ['Mountain route', 'Attempt one route matched to skill, conditions and official advice. It gives elevation but removes the assumption of multiple valley stops.']
        ],
        access: 'Fort William has rail and coach service; Glencoe village and trailheads use buses, tours or cars along the A82. Stops can be roadside and far from route starts. Ben Nevis and other mountain objectives require separate detailed planning beyond a sightseeing itinerary.',
        tradeoff: 'A deep Glencoe route, Fort William town and a mountain ascent are separate days. Choosing elevation sacrifices museum and canal time; choosing the lower glen gives up a summit but preserves safety and return.',
        stages: [
          ['Leave the base on one corridor', 'Use the confirmed bus, tour or road route to the visitor centre, village or trailhead, saving the final return and pickup side.'],
          ['Read the mountain gate', 'Assess visibility, wind, rain, river level and official advice at low ground. Switch to the lower plan before gaining height.'],
          ['Commit to one bounded route', 'Follow the signed valley or correctly mapped mountain objective with turnaround times. Do not add a second glen because the road continues.'],
          ['Recover Fort William or village', 'Reach shelter and transport with margin for A82 delay. Keep the final train or coach independent of an optimistic walk finish.']
        ],
        fallback: 'If mountains are unsuitable, use the Glencoe visitor centre and lower routes or Fort William museum, canal and town. If buses are disrupted before departure, remain in the base rather than hitching an informal trailhead connection.',
        watch: [
          ['A82 stops are not trailheads', 'Roadside arrival may leave unsafe or lengthy walking. Confirm the exact access route and crossing.'],
          ['Ben Nevis is not a sightseeing add-on', 'The mountain requires fitness, navigation, equipment and appropriate conditions. Do not infer safety from clear weather in town.'],
          ['Weather can isolate the return', 'Wind, snow, rain and road incidents affect both walking and buses. Protect the last two practical connections.']
        ],
        duration: 'Allow a full day for one glen or Fort William system. A mountain day uses the complete weather window and should not share a long-distance transfer.',
        combine: 'Combine the Glencoe visitor centre with one lower route, or Fort William with the canal. Keep Inverness and Cairngorms for separate bases.',
        verify: 'Check National Trust for Scotland Glencoe notices, Met Office mountain forecast, bus or road status, route guidance and final return before departure.',
        sources: [
          ['https://www.nts.org.uk/visit/places/glencoe', 'National Trust for Scotland — Glencoe visitor information'],
          ['https://www.outdoorhighlands.co.uk/fort-william/', 'Visit Fort William — official local destination information']
        ]
      }),
      g({
        slug: 'aviemore-cairngorms',
        name: 'Aviemore & the Cairngorms',
        instrument: 'Plateau-weather activity selector',
        layout: 'forest-to-plateau-layers',
        imageQuery: 'Cairngorms Aviemore Scotland mountains',
        imageAlt: 'The Cairngorm Mountains near Aviemore in Scotland',
        purpose: 'Choose forest, loch or mountain access from Aviemore and make the bus, funicular or trail status a live gate rather than assuming the plateau is automatically available.',
        summary: 'Arrive by rail, use Aviemore as the service point, move to one named Cairngorms gateway, and complete a route that can be shortened before the final return.',
        choices: [
          ['Rothiemurchus forest and lochs', 'Use signed lower forest and water routes near Aviemore. This is the strongest variable-weather plan and easiest to shorten.'],
          ['Cairngorm Mountain visitor access', 'Use current mountain transport and official access conditions as the anchor. It gives height but may be restricted by wind or maintenance.'],
          ['Wildlife or guided activity', 'Book one operator-led wildlife, paddling or winter activity. This adds expertise but fixes time, equipment and cancellation terms.']
        ],
        access: 'Aviemore station is the rail base; forest, loch and mountain gateways require buses, bicycles, taxis, tours or cars. Cairngorm Mountain transport and car-park access can change. Confirm the exact gateway and final connection before leaving town.',
        tradeoff: 'Forest, mountain and wildlife activities are distinct days at depth. Choosing the plateau sacrifices lowland flexibility; choosing Rothiemurchus gives up height but preserves routes when wind closes the mountain.',
        stages: [
          ['Set the Aviemore base', 'Use station, bus and equipment services to confirm the chosen gateway, final return and weather before departure.'],
          ['Reach one landscape layer', 'Travel to Rothiemurchus, a loch or Cairngorm Mountain with the correct stop and access. Do not change gateways after delays.'],
          ['Complete a bounded activity', 'Follow signed lower routes, the official mountain product or booked guide. Use a time and weather turnaround.'],
          ['Return before the corridor closes', 'Regain Aviemore with margin for bus gaps and the onward rail. Keep the evening in town rather than adding another loch.']
        ],
        fallback: 'If mountain access closes, use Rothiemurchus forest, lower lochs or Aviemore facilities according to current path conditions. If outdoor weather is severe, shorten the day rather than driving to another exposed plateau.',
        watch: [
          ['Mountain transport is conditional', 'Wind, maintenance and operating policy can close or restrict access. Check live status and do not plan beyond permitted areas.'],
          ['Lower routes still need conditions', 'Snow, ice, flooding and forestry work affect forest paths. Use current signs and a mapped route.'],
          ['Rural buses have gaps', 'A missed return from a mountain car park or loch can threaten the mainline train. Save alternatives before departure.']
        ],
        duration: 'Allow a full day for one Cairngorms layer. Forest-and-loch routes can use five to seven hours; mountain or guided activities own the complete day.',
        combine: 'Combine Rothiemurchus with one loch or Aviemore with one booked activity. Keep Inverness and Glencoe for separate days and bases.',
        verify: 'Check Cairngorms National Park guidance, mountain operation, local bus or tour, path conditions, detailed weather and daylight before departure.',
        sources: [
          ['https://www.cairngorms.co.uk/discover-explore/', 'Cairngorms National Park — official visitor information'],
          ['https://www.cairngormmountain.co.uk/plan-your-visit/', 'Cairngorm Mountain — official operation and visit information']
        ]
      })
    ]
  })
];
