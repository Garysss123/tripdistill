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
    reviewDateISO: '2026-10-10',
    reviewDate: '10 October 2026',
    hubIntro: 'Treat Edinburgh as two city days plus a separate East Lothian coast day: the Old Town is a ridge, the New Town sits on the opposite side of Waverley, and Dean Village drops into a river valley. The coast train is easy to reach but the harbour, boat window and return still make North Berwick a full-day choice.',
    stay: 'Aim for three full sightseeing days: one Old Town ridge, one New Town/Dean Village route, and one North Berwick coast day. A fourth day gives you room to move the coast outing when wind or the boat schedule looks poor. Waverley is the useful rail base for the east-coast branch; Haymarket suits western connections, while either area can require a steep final street depending on the hotel entrance.',
    transfer: 'Waverley lies in the valley between Old and New Town, so choose the station exit and street level before walking with luggage. The Scottish Seabird Centre describes North Berwick as about 35 minutes by train from Waverley, then a 15-minute downhill walk to the harbour-side centre and uphill on return; check the dated ScotRail journey and return before leaving.',
    season: 'Rain can turn the New Town into a gallery-and-street day; wind can make both high viewpoints and the East Lothian shore uncomfortable. Scottish Seabird Centre wildlife trips are seasonal (its current page lists late March to early October), so put North Berwick on a date with a confirmed sailing only if the boat is the reason for going. Festival periods also add crowd and ticket pressure around the ridge.',
    fallback: 'For a wet city day, keep one indoor gallery or the National Museum with the surrounding street grid and skip the Dean Village stair descent. If a North Berwick sailing is cancelled, the harbour, Scottish Seabird Centre Discovery Experience and town make a land-based visit; if sea wind makes the shore unpleasant too, take an earlier checked train back instead of chasing another exposed coast.',
    sources: [
      ['https://edinburgh.org/', 'Forever Edinburgh — official destination guide'],
      ['https://www.lothianbuses.com/', 'Lothian Buses — local routes and service updates'],
      ['https://www.scotrail.co.uk/plan-your-journey', 'ScotRail — date-specific rail planning'],
      ['https://www.seabird.org/plan-your-visit', 'Scottish Seabird Centre — visitor access and station walk'],
      ['https://www.seabird.org/boats', 'Scottish Seabird Centre — wildlife boat trips and season']
    ],
    guides: [
      g({
        slug: 'old-town-castle-royal-mile',
        name: 'Old Town, Castle & Royal Mile',
        instrument: 'Ridge-entry and descent clock',
        layout: 'castle-ridge-long-section',
        imageQuery: 'Edinburgh Castle Old Town skyline',
        imageAlt: 'Edinburgh Old Town roofscape seen from Castle Hill',
        reviewDateISO: '2026-10-10',
        reviewDate: '10 October 2026',
        purpose: 'Choose the Castle end, the Holyrood end or the public street spine, then follow one named Castlehill-to-Canongate sequence and exit without reclimbing.',
        summary: 'Choose the Castle end or Holyrood end, then follow Castlehill, Lawnmarket, the High Street and Canongate in one direction; book one interior and finish at a named lower-city or station exit.',
        choices: [
          ['Castle and upper ridge', 'Reserve the castle first: Historic Environment Scotland says tickets often sell out well ahead in summer. After one interior, descend through Castlehill and Lawnmarket to St Giles’ or end in the Grassmarket; save Canongate for another day.'],
          ['Public Royal Mile', 'Walk Castlehill → Lawnmarket → High Street and choose a small number of closes, St Giles’ or the National Museum. It preserves the route’s street and civic story without committing to a timed royal interior.'],
          ['Canongate and Holyrood', 'Start at the lower end for Canongate, Parliament and the Palace of Holyroodhouse, then climb only as far as the group’s energy allows. It trades castle depth for a lower-ridge focus.']
        ],
        access: 'The full ridge is not a level stroll. The Castle approach includes a 110 m uphill esplanade and its interior route rises over uneven cobbles; HES lists a 15-degree steepest internal section and a 70-step exit. A mobility vehicle to Crown Square can be arranged at the entrance on request, but the rest of the route still needs a personal access check. If stairs, cobbles or sustained slopes are a barrier, make the public lower-ridge section or a bus-linked visit the complete plan.',
        tradeoff: 'Castle, every close, a museum and Holyroodhouse exceed a useful single day. The Castle is the steep upper anchor; the Palace stands at the end of the Royal Mile and is a separate timed visit. Pick one interior and let the other end become street context.',
        stages: [
          ['Pick the direction before boarding', 'For Castle-first, reach the Castle esplanade and descend Castlehill → Lawnmarket → High Street → Canongate. For Palace-first, begin at Holyrood and climb only to the chosen turn-back point.'],
          ['Lock the one interior', 'Book the Castle or Palace for the actual date and read its access and closure notes. Castle tickets are often sold out in advance in summer; Palace opening and ceremonial use are separate checks.'],
          ['Choose stops along the spine', 'On High Street, choose St Giles’ or one museum, then add only a few closes. Avoid turning every stair lane into a return climb.'],
          ['Finish at a useful lower gateway', 'From a full descent, leave by Canongate/Holyrood; from a shorter walk, use Waverley or the nearest checked bus stop. Do not plan an evening climb back to the Castle.']
        ],
        fallback: 'If the Castle or Palace is unavailable, use St Giles’, the National Museum of Scotland and a shorter High Street–Canongate section. In heavy rain or strong wind, skip exposed Castle viewpoints and keep one indoor stop close to the chosen end of the ridge.',
        watch: [
          ['The Castle interior is a steep, cobbled route', 'HES describes uneven cobbles, steep sections and steps; use its access guide to decide whether the requested route fits the visitor, not only whether the entrance is open.'],
          ['Festival streets are slower', 'Crowds, barriers and performances can alter normal movement. Leave wider margins around timed entries.'],
          ['The two royal sites operate separately', 'A Castle ticket does not cover Holyroodhouse. Check each site’s ticket, opening and ceremonial-use notice independently.']
        ],
        duration: 'Allow six to eight hours for one royal interior and the Old Town ridge. The castle alone can use three to four hours during busy periods.',
        combine: 'Combine the castle with the upper Royal Mile or Holyrood with Canongate and Parliament. Keep New Town and East Lothian for separate days.',
        verify: 'Check the chosen site’s date-specific ticket and access guide, current Old Town street/event controls, bus connection and weather before departure.',
        sources: [
          ['https://www.edinburghcastle.scot/plan-your-visit', 'Historic Environment Scotland — Edinburgh Castle visit planning'],
          ['https://www.edinburghcastle.scot/plan-your-visit/access-guide/', 'Historic Environment Scotland — Edinburgh Castle access guide'],
          ['https://www.rct.uk/visit/palace-of-holyroodhouse', 'Royal Collection Trust — Palace of Holyroodhouse visitor information'],
          ['https://www.nms.ac.uk/national-museum-of-scotland/plan-your-visit', 'National Museums Scotland — National Museum of Scotland visit planning']
        ]
      }),
      g({
        slug: 'new-town-dean-village',
        name: 'New Town, Galleries & Dean Village',
        instrument: 'Terrace-to-water level chart',
        layout: 'georgian-grid-waterline',
        imageQuery: 'Edinburgh Dean Village Water of Leith',
        imageAlt: 'Dean Village beside the Water of Leith in Edinburgh',
        reviewDateISO: '2026-10-10',
        reviewDate: '10 October 2026',
        purpose: 'Choose a National Galleries building or the Georgian street grid, then decide whether the stair descent to Dean Village and the Water of Leith suits the group and weather.',
        summary: 'Link one New Town gallery or Georgian square to Dean Village by the signed Water of Leith path, then leave the valley at St Bernard’s Bridge for Stockbridge; skip the stair descent in wet or slippery weather.',
        choices: [
          ['National Galleries depth', 'Use one gallery building and the mound as the main visit. This gives collection depth and a short New Town circuit.'],
          ['Georgian city grid', 'Prioritize Charlotte Square, terraces and civic streets with selected interiors. It best explains the planned city but remains mostly urban.'],
          ['Dean Village and Water of Leith', 'Give the lower valley and Stockbridge the long block. It offers landscape contrast but requires steps, surfaces and an exit climb.']
        ],
        access: 'The recommended descent from the Modern galleries to the Water of Leith uses a long flight of steps; cross the footbridge and turn left toward Dean Village. The walkway is only partly wheelchair accessible. If stairs, wet steps or uneven riverside surfaces do not suit, stay at street level and use Lothian Buses 24 or 29 to Raeburn Place in Stockbridge instead.',
        tradeoff: 'One gallery plus the valley walk makes a focused day; adding both Modern galleries, the full Georgian grid and more river miles turns it into a long route. Dean Village is worth the lower-level detour only if the group can manage the stairs and return climb.',
        stages: [
          ['Choose the upper starting point', 'Use Modern One/Two for a gallery-led day, or Princes Street and Charlotte Square for the Georgian street plan. The gallery-to-river approach is a stair descent, so decide on it before setting out.'],
          ['Reach Dean Village deliberately', 'From the Modern galleries, follow the signed Water of Leith walkway down the long steps, cross the footbridge and turn left to Dean Village. Do not mistake the nearby-looking bridges for a level street exit.'],
          ['Walk the river toward Stockbridge', 'Continue beneath Dean Bridge and past St Bernard’s Well; take the St Bernard’s Bridge/Saunders Street climb out to Stockbridge. As a nearby scale reference, the Trust estimates Roseburn–Stockbridge at about 2 miles/45 minutes; pauses and the gallery visit add time.'],
          ['Use a street-level return', 'Finish in Stockbridge and check the bus from Raeburn Place, or walk back through the New Town grid. If the path is closed, slippery or dark, leave by a signed street exit rather than improvising another river crossing.']
        ],
        fallback: 'For rain or slippery steps, keep the gallery and New Town grid, then use bus 24 or 29 to Stockbridge instead of descending to Dean Village. The Trust says the full walkway is only partly wheelchair accessible; check its live closure notice before committing to the valley.',
        watch: [
          ['The direct gallery descent uses stairs', 'The official city itinerary names a long flight of steps between Modern and the river. This route is a poor fit for a step-free day.'],
          ['Gallery buildings are separate', 'National Galleries venues and exhibitions do not share one doorway or schedule. Confirm the exact building.'],
          ['The walkway is partly accessible and can close locally', 'Surface and access vary by segment. Read current notices, respect barriers and return to street level if the route changes.']
        ],
        duration: 'Allow five to seven hours for one gallery, the New Town and a bounded Water of Leith segment. A gallery-and-grid visit can fit four hours.',
        combine: 'Combine the New Town with Dean Village or Stockbridge. Keep the Old Town ridge and East Lothian for separate days.',
        verify: 'Check the exact National Galleries venue, Water of Leith closure map, steps/surface fit, Lothian bus and rain forecast before descending.',
        sources: [
          ['https://www.nationalgalleries.org/visit', 'National Galleries of Scotland — official visit information'],
          ['https://www.waterofleith.org.uk/walkway/', 'Water of Leith Conservation Trust — walkway mileage, access and closure notice'],
          ['https://edinburgh.org/things-to-do/itineraries/explore-edinburgh-on-a-budget-in-48-hours/', 'Forever Edinburgh — Modern galleries to Dean Village and Stockbridge walking sequence'],
          ['https://edinburgh.org/neighbourhoods/stockbridge/', 'Forever Edinburgh — Stockbridge access and local buses']
        ]
      }),
      g({
        slug: 'north-berwick-east-lothian',
        name: 'North Berwick & East Lothian',
        instrument: 'Coast-train-and-seabird board',
        layout: 'firth-coast-window',
        imageQuery: 'North Berwick harbour Bass Rock Scotland',
        imageAlt: 'Bass Rock viewed across the Firth of Forth from the North Berwick shore',
        reviewDateISO: '2026-10-10',
        reviewDate: '10 October 2026',
        purpose: 'Use the Waverley–North Berwick train for one coast day, then choose the Discovery Experience, a named Scottish Seabird Centre sailing or a short shore visit against sea conditions and the uphill return.',
        summary: 'Take the roughly 35-minute ScotRail journey from Waverley, walk downhill about 15 minutes from North Berwick station to the harbour, then choose the named Scottish Seabird Centre boat or a land-based visit before the uphill station return.',
        choices: [
          ['Discovery Experience and harbour', 'Choose the centre’s indoor exhibits, live island cameras and harbour if you want the Bass Rock story without a sea crossing. This is the resilient plan when boats are off-season or cancelled.'],
          ['Three Islands Seabird Seafari (RIB)', 'Book this named 1 hour 15 minute trip from North Berwick Harbour to circle the Lamb, Craigleith and Bass Rock. It is a fast, exposed RIB ride and does not mean a landing on Bass Rock.'],
          ['Seabird Catamaran Cruise', 'Choose the Centre’s separate 55-seat catamaran around Craigleith and Bass Rock if you want a larger vessel than the RIB. If the sea window fails, use the indoor centre and harbour instead of switching to another exposed shore.']
        ],
        access: 'The Scottish Seabird Centre lists the station-to-centre walk as about 15 minutes downhill and uphill on return. Its centre is wheelchair accessible, but it says boat trips are unsuitable for wheelchair users and people with limited mobility; its RIB is also unsuitable for people with back/neck problems or who are pregnant. Guidance differs by product: the overview and terms advise bringing waterproofs, while the individual Three Islands page says they are provided, so check the terms for your exact sailing. Confirm your ScotRail return before leaving Edinburgh.',
        tradeoff: 'The Waverley rail trip, harbour walk and boat already use most of a day; adding a long shore walk makes the return fragile. Choose the boat for an island-focused view, or choose the centre and town for a flexible day without the RIB’s physical demands or sea-cancellation risk.',
        stages: [
          ['Lock the train and harbour walk', 'Check the date-specific ScotRail journey from Waverley. The Centre describes the journey as about 35 minutes, then a 15-minute downhill walk from North Berwick station to its harbour-side building.'],
          ['Choose the exact boat product', 'The Three Islands Seabird Seafari leaves North Berwick Harbour by RIB and circles the Lamb, Craigleith and Bass Rock; the separately listed catamaran circles Craigleith and Bass Rock. Check sailing date, check-in, sea-state policy and whether the product lands before booking.'],
          ['Use the sea or land branch', 'If the booked boat runs, keep the shore walk short. If it is cancelled or conditions are poor, use the Discovery Experience, harbour and town; the Centre’s boat season is listed as late March to early October.'],
          ['Climb back to the station', 'Allow for the uphill walk and check the actual return train before setting off. Avoid depending on the final train if a delay would strand the day.']
        ],
        fallback: 'If the sailing is cancelled, the indoor Discovery Experience, its live island cameras, harbour and town remain a complete visit. If wind makes the shore unpleasant as well, skip the beach and take an earlier checked train to Edinburgh; do not substitute an unverified boat operator or another exposed coast.',
        watch: [
          ['Trips are seasonal and weather-dependent', 'The Centre lists wildlife trips from late March to early October, with individual products on narrower windows. Check its dated booking page and cancellation policy.'],
          ['Boat type changes who can join', 'The Centre says trips are unsuitable for wheelchair users or people with limited mobility; RIB rules also exclude some back/neck conditions and pregnancy. Read the exact operator terms before buying.'],
          ['The return walk is uphill', 'The station leg that is downhill toward the harbour is uphill at the end of the day. Keep time and energy for it as well as the train.']
        ],
        duration: 'Allow a full day from Edinburgh with a boat, or five to six hours for town and coast. A long walk needs the full daylight window.',
        combine: 'Combine the harbour with the Seabird Centre or one coast route. Keep Edinburgh’s Old Town and distant castles for separate days.',
        verify: 'Check ScotRail’s date-specific return, the Scottish Seabird Centre product and access terms, sailing status, marine forecast and the uphill station walk before departure.',
        sources: [
          ['https://www.seabird.org/plan-your-visit', 'Scottish Seabird Centre — official visitor information'],
          ['https://www.seabird.org/boats', 'Scottish Seabird Centre — named boat products, departure point and operating season'],
          ['https://www.seabird.org/accessibility', 'Scottish Seabird Centre — centre and boat-trip accessibility'],
          ['https://www.scotrail.co.uk/plan-your-journey', 'ScotRail — date-specific train planning']
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
    reviewDateISO: '2026-10-11',
    reviewDate: '11 October 2026',
    tagline: 'Give the centre and West End two city days; add the loch only with a sound return.',
    hubIntro: 'Glasgow works best as two different urban days: the central grid, Merchant City and a short Clyde reach, then the West End’s museum, park and university edges. Loch Lomond is a separate out-of-city branch, not another district on the Subway map. Start with a central rail base, match each day to its actual station or Subway exit, and add Balloch only when the date-specific return and any boat fit.',
    stay: 'Three nights at a central base near the station named on your rail ticket gives an arrival window and two full days: the central/Merchant City route, then the West End. Add a fourth night for one full Balloch day without dropping a city district; a fifth is a weather or energy reserve, not a reason to change hotels. A West End base suits a museum-led stay, but first compare its local connection with the exact Glasgow rail terminal you will use.',
    transfer: 'Glasgow Central and Glasgow Queen Street are separate termini with no same-platform interchange. Save the exact station on every ScotRail journey and do not read “Glasgow” as a single departure point. SPT Subway stations such as Buchanan Street, St Enoch, Kelvinhall, Hillhead and Kelvinbridge serve different edges; Subway, bus and rail tickets are separate products. For Balloch or a west-shore village, plan both outward and return legs by exact date before choosing a pier.',
    season: 'Rain can turn the central day into a complete gallery or library visit, but Kelvingrove Park, the Clyde path and the loch need a current wind and surface check. Daylight shortens the safe margin for any shore or hill walk. Football, concerts, university events and conferences can tighten rooms and transit, so check the actual calendar. For limited walking, choose one interior and one nearby district edge instead of joining all three systems on foot.',
    fallback: 'Keep the first two days in Glasgow. In heavy rain, replace the river section with GoMA or another confirmed Glasgow Life venue; for a slower day, choose one museum and return from the same Subway or rail edge. If Balloch rail, pier access or a sailing does not line up, use that day as a second city visit. Do not substitute Luss or a northern shore without a verified road connection and return.',
    sources: [
      ['https://peoplemakeglasgow.com/', 'People Make Glasgow — official destination guide'],
      ['https://www.spt.co.uk/travel-with-spt/subway/maps-stations/', 'SPT — Glasgow Subway maps and station locations'],
      ['https://www.spt.co.uk/travel-with-spt/accessibility-mobility/', 'SPT — Subway and bus station access guides'],
      ['https://www.scotrail.co.uk/plan-your-journey', 'ScotRail — date-specific journey, disruption and station planning'],
      ['https://www.glasgowlife.org.uk/museums', 'Glasgow Life Museums — visitor information and current venues'],
      ['https://www.lochlomond-trossachs.org/things-to-do/loch-cruises/', 'Loch Lomond & The Trossachs National Park — cruise departure points and season checks'],
      ['https://www.metoffice.gov.uk/', 'Met Office — official forecasts and weather warnings']
    ],
    itinerary: [
      ['Arrival · choose one rail base', 'Stay near Glasgow Central or Queen Street according to the station on your onward ticket. Use the arrival window for a short central orientation and leave luggage at the hotel; do not add the West End or loch to a transfer day.'],
      ['City day · grid, Merchant City and Clyde', 'Begin at the rail terminus you will use again. Link George Square and the central grid to one GoMA or Merchant City stop, then make a single short descent to the Broomielaw or Glasgow Bridge reach. Return to the same terminal; save the cathedral and Necropolis hill for another plan.'],
      ['City day · West End, one main anchor', 'Use the Subway station that serves the chosen door: Kelvinhall for Kelvingrove from the Dumbarton Road side, Kelvinbridge for the park approach, or Hillhead for the university and Byres Road. Give one museum the main block, then add either a park crossing or the neighbourhood, not both at full length.'],
      ['Optional full day · Balloch (add a night)', 'Check the dated ScotRail route to Balloch and its Glasgow return, then choose one exact pier or a land-only shore visit. Book a named Sweeney’s cruise only after the departure point and last useful train both work. Keep a fifth night as a weather reserve; Luss is a road-based alternative, not a rail continuation from Balloch.']
    ],
    faq: [
      ['How many nights are enough for Glasgow and Loch Lomond?', 'Three nights gives an arrival window and two full Glasgow days for the central grid/Clyde and the West End. Add a fourth night for one Balloch day; keep a fifth only if you want a weather reserve or a slower pace.'],
      ['Where should I stay for the train?', 'For a short visit, compare a central hotel near the Glasgow Central or Queen Street station printed on your onward ticket. A West End base works when museums and the university dominate, but it adds a local trip before intercity departures.'],
      ['Should I go to Loch Lomond if the return or boat is uncertain?', 'No. Keep the city day in Glasgow until the dated train return and any exact cruise pier and sailing are confirmed. Balloch is the simpler no-car gateway; Luss needs a separately checked road connection.']
    ],
    guides: [
      g({
        slug: 'central-merchant-city-clyde',
        name: 'Central Glasgow, Merchant City & the Clyde',
        instrument: 'Grid-to-river civic register',
        layout: 'merchant-grid-river-drop',
        imageQuery: 'Glasgow city centre Clyde architecture',
        imageAlt: 'Glasgow city architecture near the River Clyde',
        reviewDateISO: '2026-10-11',
        reviewDate: '11 October 2026',
        showHubOperatingBoard: false,
        purpose: 'Build one central day around the grid, Merchant City and a short Clyde reach, with the correct rail terminal or Subway station as both entry and return. Keep the uphill Cathedral and Necropolis branch separate.',
        summary: 'Enter from the Glasgow rail station printed on your ticket, connect George Square and one GoMA or Merchant City stop, descend once to the Broomielaw or Glasgow Bridge, then return through the same station edge.',
        choices: [
          ['Central grid and GoMA', 'Start near George Square, use GoMA as the indoor anchor, then cross Royal Exchange Square toward Merchant City. Glasgow Life lists free general entry; check its current event page for any ticketed exhibition.'],
          ['Merchant City and the cathedral side', 'Follow Trongate east only if Glasgow Cathedral and the Necropolis are the day’s purpose. The route climbs and uses more energy, so leave the Clyde reach for another day.'],
          ['Merchant City and the Clyde', 'Keep the route south toward St Enoch and one Broomielaw or Glasgow Bridge reach. This makes a shorter river day and leaves the cathedral hill out.']
        ],
        access: 'Glasgow Central and Queen Street are separate termini; use the exact one on your ScotRail journey and do not plan a same-platform transfer between them. GoMA is near George Square and within walking range of both rail stations; Buchanan Street is its nearest Subway stop. St Enoch serves the lower centre and Clyde side. Check the SPT station map and access guide before relying on a Subway exit, and plan the return to the original rail terminal.',
        tradeoff: 'The Cathedral and Necropolis route climbs northeast while the Clyde reach runs south and west. Choose one branch. A 4–6 hour editorial window can hold a central interior, Merchant City and a short river section; it does not include a full cathedral visit, Necropolis climb and West End transfer.',
        stages: [
          ['Start from the ticketed terminal', 'Use Glasgow Central or Queen Street as shown on your rail ticket. If you arrive with luggage, check into a central base before the walk instead of carrying bags between stations.'],
          ['Read the central grid once', 'From George Square, choose GoMA and its Royal Exchange Square address or continue through Merchant City. Confirm the exact Glasgow Life opening and exhibition status before making a gallery the day’s fixed anchor.'],
          ['Choose Clyde or the east hill', 'For the Clyde option, descend once to St Enoch and a bounded Broomielaw or Glasgow Bridge stretch. For the east option, replace the river with the Cathedral and Necropolis; do not try to join both branches.'],
          ['Return to the same rail edge', 'Finish at the Glasgow station on your onward ticket. Buchanan Street and St Enoch are distinct Subway stops; check the current SPT map and the final train before choosing the last leg.']
        ],
        fallback: 'For rain, make GoMA the central indoor anchor and shorten the Clyde reach; the Mitchell Library is a second indoor option only when its current visitor hours suit. If a rail or Subway disruption breaks the return, stay in the central grid and follow the live operator notice instead of adding another district.',
        watch: [
          ['A city name is not a rail terminal', 'Central and Queen Street are separate stations. Compare the station on your onward ticket with your hotel, arrival route and exact final walk.'],
          ['The east branch has a real climb', 'Merchant City toward the Cathedral and Necropolis gains height. If walking capacity is limited, keep to the grid and river edge or verify a current bus/taxi approach first.'],
          ['Interiors and exhibitions change', 'GoMA general entry is free, but particular exhibitions or events may have their own ticket. Use Glasgow Life’s current venue page rather than assuming an old opening or access note.']
        ],
        duration: 'Allow 4–6 hours as an editorial route window for one central interior, Merchant City and a short Clyde reach. Add the cathedral and Necropolis only by replacing the river section, not by extending the day on foot.',
        combine: 'Combine GoMA or one central interior with Merchant City and the lower Clyde. Keep the West End and Balloch for separate full days.',
        verify: 'Check the exact ScotRail terminal and return, the SPT station map and access guide, Glasgow Life venue or ticket status, and river conditions before departure.',
        faq: [
          ['Which Glasgow station should I use?', 'Use the one printed on your ScotRail journey: Glasgow Central and Queen Street are separate stations. Check the exact terminal for both arrival and onward departure instead of treating them as an interchangeable city-centre stop.'],
          ['Can I combine Merchant City, the Cathedral and the Clyde?', 'You can pair Merchant City with either the uphill Cathedral/Necropolis branch or a shorter Clyde reach. Both branches in one day create a long cross-city walk and leave little room for the return.'],
          ['What works in rain or with limited walking?', 'Choose one confirmed indoor venue such as GoMA, shorten the river walk, and return through the same station edge. Check the SPT access guide before relying on Subway stairs or a particular exit.']
        ],
        sources: [
          ['https://www.glasgowlife.org.uk/museums/venues/gallery-of-modern-art-goma', 'Glasgow Life — GoMA admission, current exhibitions and visitor information'],
          ['https://www.glasgowlife.org.uk/libraries/venues/the-mitchell-library', 'Glasgow Life — Mitchell Library visitor and access information'],
          ['https://www.historicenvironment.scot/visit/all/glasgow-cathedral/', 'Historic Environment Scotland — Glasgow Cathedral visitor information'],
          ['https://www.glasgownecropolis.org/', 'Friends of Glasgow Necropolis — current visitor and tour information'],
          ['https://www.spt.co.uk/travel-with-spt/subway/maps-stations/', 'SPT — Subway map and station locations'],
          ['https://www.spt.co.uk/travel-with-spt/accessibility-mobility/', 'SPT — Subway and bus station access guides'],
          ['https://www.scotrail.co.uk/plan-your-journey', 'ScotRail — date-specific rail route and disruption checks'],
          ['https://www.travelinescotland.com/', 'Traveline Scotland — local public-transport journey planning']
        ]
      }),
      g({
        slug: 'west-end-kelvingrove',
        name: 'West End, Kelvingrove & the University',
        instrument: 'Museum-park-campus field card',
        layout: 'sandstone-park-cabinet',
        imageQuery: 'Kelvingrove Art Gallery Glasgow exterior',
        imageAlt: 'Kelvingrove Art Gallery and Museum in Glasgow',
        reviewDateISO: '2026-10-11',
        reviewDate: '11 October 2026',
        showHubOperatingBoard: false,
        purpose: 'Choose one West End door and one main anchor—Kelvingrove, a named Hunterian venue or the gardens—then plan the park crossing and Subway return around your walking capacity.',
        summary: 'Use Kelvinhall for the Dumbarton Road approach to Kelvingrove, Kelvinbridge for the park approach, or Hillhead for the university and Byres Road. Visit one collection, add one outdoor segment only if conditions and energy allow, and return from a named station.',
        choices: [
          ['Kelvingrove as the indoor anchor', 'Use the museum’s galleries and café as the main block, then choose a short park or university exterior. General admission is free; the official page lists lifts to public areas and current restoration work, so check today’s venue notice.'],
          ['University and one Hunterian venue', 'Start at Hillhead for Byres Road and the university edge, then choose the Hunterian Museum or Art Gallery by exact building and current opening notice. They are separate venues, not one campus doorway.'],
          ['Park and neighbourhood', 'Choose Kelvingrove Park, Byres Road and the Botanic Gardens as the day’s main line, with one short indoor stop. This suits a clear, dry window; it leaves a deep museum visit for another day.']
        ],
        access: 'SPT lists Kelvinhall beside Kelvingrove Museum; ScotRail describes a different approach from Kelvinbridge through Kelvingrove Park, while Hillhead serves Byres Road and the University of Glasgow. These are not interchangeable exits. Kelvingrove’s public floors have lift access, but the station approach and park slopes remain separate mobility decisions; read the exact SPT station guide and venue access notes before choosing a route.',
        tradeoff: 'A full Kelvingrove visit already occupies a substantial indoor block. Adding both Hunterian buildings, a long park crossing and the Botanic Gardens turns the West End into repeated slopes and transfers. Choose one collection and one nearby outdoor line; leave the rest for another visit.',
        stages: [
          ['Choose the door before the Subway', 'For Kelvingrove, compare Kelvinhall with the Kelvinbridge park approach; for university, Hunterian and Byres Road, choose Hillhead. Check the SPT map and station access guide rather than assuming the shortest line is step-free.'],
          ['Give one collection a real block', 'Choose Kelvingrove, the Hunterian Museum or the Hunterian Art Gallery. Confirm that exact venue’s opening and any ticketed exhibition on its official page before leaving the city centre.'],
          ['Add one park or street segment', 'If weather and walking capacity are good, cross Kelvingrove Park once or continue along Byres Road toward the Botanic Gardens. In heavy rain, stay with the indoor anchor and skip the park crossing.'],
          ['Return from the planned edge', 'Finish at the station chosen for the route and check its current steps/escalators and service status. If the park slope or Subway access does not fit your needs, arrange a bus or taxi to the selected venue and return from the same door.']
        ],
        fallback: 'In heavy rain, keep the day inside Kelvingrove or one confirmed Hunterian venue and omit the park. If a venue closes, check another Glasgow Life museum before crossing town; when walking is limited, use one indoor destination with a prechecked station-access or door-to-door ride instead of stitching several sites together.',
        watch: [
          ['Three station names mean three approaches', 'Kelvinhall, Kelvinbridge and Hillhead serve different doors. Pick the museum or street first, then check the exact station access guide and return.'],
          ['The park is a sloped connection', 'Kelvingrove’s public galleries have lifts, but the walk from Subway and the park-to-university ground are separate. If that slope is not suitable, skip the crossing.'],
          ['Free entry is not an all-day guarantee', 'Check the exact gallery, temporary exhibition and current access notice. A second collection is optional; fatigue and closing time still apply.']
        ],
        duration: 'Allow 4–6 hours as an editorial estimate for one museum, a meal and one nearby park or street segment. A second full collection should replace, not extend, that plan.',
        combine: 'Pair one museum with either the university/Byres Road edge or a short garden visit. Keep central Glasgow and Loch Lomond on separate days.',
        verify: 'Check the exact venue’s current opening, exhibition or booking notice, Kelvingrove’s access and restoration update, SPT station access and live service status, and the park forecast.',
        faq: [
          ['Which Subway stop should I use for Kelvingrove?', 'Kelvinhall is listed near Kelvingrove Museum and suits the Dumbarton Road approach. Kelvinbridge gives the park approach described by ScotRail. Compare the station guide and your walking needs before selecting one.'],
          ['Can I cover Kelvingrove and the Hunterian in one day?', 'Choose one museum as the anchor. The Hunterian Museum and Art Gallery are separate venues with their own notices, and Kelvingrove’s large galleries can already fill a focused visit. Add the second collection only by dropping the park or gardens.'],
          ['Do I need to book?', 'Glasgow Life lists free general entry at Kelvingrove, but exhibitions or events can have their own ticket rules. The Hunterian also posts venue notices and events; use the official page for the exact building and date.']
        ],
        sources: [
          ['https://www.glasgowlife.org.uk/museums/venues/kelvingrove-art-gallery-and-museum', 'Glasgow Life — Kelvingrove visitor information'],
          ['https://www.gla.ac.uk/hunterian/visit/', 'The Hunterian — venue notices, events and access information'],
          ['https://www.scotrail.co.uk/kelvingrove-art-gallery', 'ScotRail — routes to Kelvingrove from Kelvinbridge or Kelvinhall'],
          ['https://www.glasgow.gov.uk/botanicgardens', 'Glasgow City Council — Botanic Gardens visitor information'],
          ['https://www.spt.co.uk/travel-with-spt/subway/maps-stations/', 'SPT — Subway stations and West End map'],
          ['https://www.spt.co.uk/travel-with-spt/accessibility-mobility/', 'SPT — station-specific access guides'],
          ['https://www.travelinescotland.com/', 'Traveline Scotland — bus and public-transport planning']
        ]
      }),
      g({
        slug: 'loch-lomond-clyde-branch',
        name: 'Loch Lomond from Glasgow',
        instrument: 'Rail-to-loch shore selector',
        layout: 'loch-gateway-switchboard',
        imageQuery: 'Loch Lomond Balloch Scotland view',
        imageAlt: 'Loch Lomond and surrounding hills in Scotland',
        reviewDateISO: '2026-10-11',
        reviewDate: '11 October 2026',
        showHubOperatingBoard: false,
        purpose: 'Decide whether Balloch’s rail-and-shore day or a road-based west-shore village actually fits your date; then match the exact pier, booking and Glasgow return before leaving the city.',
        summary: 'Plan Glasgow–Balloch and its return in ScotRail’s dated journey planner, then choose one land-only shore visit or one prebooked cruise. Luss and the northern piers need separate road access; a Balloch train does not reach them.',
        choices: [
          ['Balloch by rail, land only', 'Use the Balloch station and a short village or shore visit. This is the simplest independent, no-car option when no cruise fits the return.'],
          ['Balloch plus one Sweeney’s cruise', 'Choose either the River Leven departure across from Balloch Railway Station or the separate pontoon at Loch Lomond Shores. Book the exact product and pier with Sweeney’s; they are not one interchangeable boarding point.'],
          ['Luss or another west-shore pier', 'Treat Luss, Tarbet and northern villages as a road-based branch. Use a date-specific bus, booked tour or car only after the outward and return legs and exact boat pier are confirmed; this is not a continuation of the Balloch rail route.']
        ],
        access: 'The National Park Authority places one Balloch cruise departure on the River Leven just across from Balloch Railway Station and another at the Loch Lomond Shores pontoon. The operator’s page must match your chosen sailing and boarding point. Luss and Tarbet cruises leave other villages, so check a separate bus or tour and the final return. Vessel boarding, toilets, shore surfaces and the walk between station, pier and stop vary; if a specific mobility need is not answered in the operator’s access information, contact them before paying or choose a land-only Balloch visit.',
        tradeoff: 'Balloch keeps the rail connection simple but does not put you on a northern shore or every cruise. A booked boat adds a second schedule and a fixed pier; a Luss day adds road access and may need a tour or car. Choose one gateway and one water or land activity, not a cruise, village transfer and hill walk in one day.',
        stages: [
          ['Lock the Glasgow–Balloch return', 'Set the exact travel date in ScotRail’s journey planner, record both the outbound and return Glasgow station, and leave a missed-service margin. If the dated return does not work, keep this as a city day.'],
          ['Match the pier to the booking', 'Choose the River Leven departure across from Balloch Railway Station or the Lomond Shores pontoon, then use Sweeney’s own product page and ticket flow. Do not assume a cruise leaves from the train platform or the other pier.'],
          ['Keep one shore or water plan', 'Check the operator’s current sailing notice and local wind/visibility. For a land day, stay on the lower Balloch shore and turn back when the surface or weather is poor; do not improvise a high route.'],
          ['Return through the same gateway', 'Reach the pier or station early enough for the exact booked boat and train. For Luss or another west-shore start, verify the road connection and return before booking; do not rely on an unconfirmed late bus.']
        ],
        fallback: 'If wind, cloud or a seasonal timetable removes the cruise, keep a short Balloch village and lower-shore visit only if rail and ground access still work. If station access, the return or mobility needs cannot be verified, stay in Glasgow and use the West End museum day. Do not switch to Luss without a checked road plan.',
        watch: [
          ['A train serves Balloch, not every shore', 'The Park Authority lists Balloch, Luss, Tarbet and other departure villages separately. Choose the rail-connected shore unless a different road transfer is confirmed both ways.'],
          ['Two Balloch piers, separate bookings', 'The River Leven and Lomond Shores departures are different locations. Match the operator, boat product, boarding point and return train before buying.'],
          ['Boat access is vessel-specific', 'The sources do not establish wheelchair access for every sailing or pier. Ask the exact operator about boarding, toilets, shore surface and assistance; if unclear, choose the land-only route or Glasgow fallback.']
        ],
        duration: 'Reserve a full day from Glasgow for one gateway. This is an editorial allowance for the rail or road leg, the shore or exact sailing, and a protected return; no fixed timetable is promised here.',
        combine: 'Combine Balloch with either one Sweeney’s cruise or a lower-shore visit, not both plus a village transfer. Keep central Glasgow and the West End for separate days.',
        verify: 'Check the dated ScotRail or Traveline route and return, National Park visitor notices, the exact cruise operator and boarding pier, current weather, daylight and the vessel’s access information.',
        faq: [
          ['Can I take the Glasgow train straight to a Loch Lomond cruise?', 'The train reaches Balloch, not every pier. The Park Authority lists separate departures on the River Leven across from the railway station and at Loch Lomond Shores; book the exact Sweeney’s product and location.'],
          ['Is Luss an easy extension from Balloch?', 'No. Luss is a separate west-shore village with its own road access and cruise departure. Use a dated bus, booked tour or car only when its return and the exact pier are confirmed.'],
          ['What if weather or limited mobility makes the boat unsuitable?', 'Skip the sailing or high walk. Use a checked lower Balloch shore plan only if the ground route and return fit your needs; otherwise keep the day in Glasgow. Contact the exact operator before booking if vessel or pier access is unclear.']
        ],
        sources: [
          ['https://www.lochlomond-trossachs.org/things-to-do/loch-cruises/', 'Loch Lomond & The Trossachs National Park — departure villages, Balloch piers and seasonal guidance'],
          ['https://www.sweeneyscruiseco.com/cruises/', 'Sweeney’s Cruise Company — Balloch cruise products and official booking'],
          ['https://www.cruiselochlomond.co.uk/timetable', 'Cruise Loch Lomond — date-specific west-shore sailings and booking'],
          ['https://www.scotrail.co.uk/plan-your-journey', 'ScotRail — dated journey, station and return planning'],
          ['https://www.travelinescotland.com/', 'Traveline Scotland — date-specific bus journey planning'],
          ['https://www.metoffice.gov.uk/', 'Met Office — official forecasts and weather warnings']
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
