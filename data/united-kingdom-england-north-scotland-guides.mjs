import { defineUnitedKingdomCluster, unitedKingdomGuide } from './united-kingdom-guide-builder.mjs';

const g = unitedKingdomGuide;
const c = defineUnitedKingdomCluster;

export const unitedKingdomEnglandNorthScotlandClusters = [
  c({
    slug: 'lake-district-cumbria',
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
        name: 'Windermere, Bowness & Ambleside',
        instrument: 'Lake-bus-boat interchange card',
        layout: 'shoreline-transfer-ribbon',
        imageQuery: 'Lake Windermere Ambleside boats mountains',
        imageAlt: 'Boats on Windermere with the Lake District fells beyond',
        purpose: 'Choose whether the Windermere basin day runs by bus, boat or lakeshore walking, and distinguish the rail town, Bowness pier and Ambleside before their shared name hides three separate stops.',
        summary: 'Arrive at Windermere station, descend to Bowness or connect to Ambleside, use one verified boat or shore line, and protect the final bus or branch train.',
        choices: [
          ['Boat-and-town circuit', 'Use one scheduled lake cruise with Bowness or Ambleside as the land anchor. This gives water perspective but depends on marine operation and pier choice.'],
          ['Low-level shore and town', 'Keep the day on buses, public shores and compact walks. It is the most weather-resilient choice and avoids a vessel cutoff.'],
          ['Fell-edge viewpoint', 'Add one signed lower fell or viewpoint from a named start. It gains elevation but should replace, not supplement, the long boat circuit.']
        ],
        access: 'Windermere station is in Windermere town, not beside the lake; Bowness and Ambleside require bus, walk or boat connections. Piers have specific names and stopping patterns. Save the final bus to the station before boarding a vessel or climbing.',
        tradeoff: 'A multi-stop cruise, Ambleside town and a substantial fell walk do not fit one reliable day. Choosing the boat sacrifices trail time; choosing elevation gives up the long lake circuit and its flexible stops.',
        stages: [
          ['Leave the railhead deliberately', 'At Windermere station, choose the Bowness or Ambleside connection and note the final branch train. Do not walk downhill without a return plan.'],
          ['Read one lakeside town', 'Use Bowness pier and town or Ambleside’s waterfront and centre as the first complete block. Locate the onward bus or pier before lunch.'],
          ['Commit to boat or height', 'Board the verified sailing or begin the signed lower route only when weather and return times remain sound. Avoid stacking both at maximum length.'],
          ['Close the interchange', 'Reach the bus stop or station with one connection in reserve. Road traffic and full buses can consume a tight rail transfer.']
        ],
        fallback: 'If boats stop, retain Bowness, Ambleside, buses and a sheltered low-level lakeshore route. If cloud removes the viewpoint, use the town and water edge rather than transferring to another valley.',
        watch: [
          ['Windermere is three practical places', 'Station, Bowness and Ambleside are not one walkable stop. Name the transfer before setting the itinerary.'],
          ['Boat and bus tickets are separate', 'A cruise product does not automatically solve the road return. Confirm operator, pier and final sailing.'],
          ['Valley traffic delays buses', 'Peak traffic and weather can affect connections. Keep margin before the last branch train.']
        ],
        duration: 'Allow a full day for two lakeside towns and one boat or low fell branch. A Bowness-only visit can fit four to five hours from the railhead.',
        combine: 'Combine Bowness with one lake cruise or Ambleside with a lower walk. Keep Keswick and Carlisle for separate days.',
        verify: 'Check Windermere Lake Cruises, Stagecoach service, branch trains, detailed weather and any path notice before departure.',
        sources: [
          ['https://www.windermere-lakecruises.co.uk/', 'Windermere Lake Cruises — official visit planning'],
          ['https://lakedistrict.gov.uk/explore/plan-your-visit/getting-to-and-around/', 'Lake District National Park — official transport guidance']
        ]
      }),
      g({
        slug: 'keswick-derwentwater',
        name: 'Keswick & Derwentwater',
        instrument: 'Launch-and-fell weather dial',
        layout: 'market-lake-spoke-map',
        imageQuery: 'Derwentwater Keswick Lake District view',
        imageAlt: 'Derwentwater and the fells near Keswick in the Lake District',
        purpose: 'Choose a Derwentwater launch, low-level shore route or one fell approach from Keswick, and make the bus arrival and last return part of the plan because the town has no railway station.',
        summary: 'Arrive by the confirmed bus, use Keswick as the service base, complete one water or fell branch, and return to the town before the onward bus window narrows.',
        choices: [
          ['Launch-and-shore circuit', 'Use the scheduled launch and one landing for a bounded lakeside walk. This offers flexible scenery but depends on vessel operation.'],
          ['Keswick and lower lake', 'Keep the market town, museum and accessible shore as the full day. It is the safest poor-weather and short-day option.'],
          ['Named fell route', 'Choose one signed hill route with a firm turn-back. It gives height but eliminates the assumption of a long boat-and-town day.']
        ],
        access: 'Keswick is reached by bus from Penrith, Windermere or other corridors. The bus station, launch landings and trailheads are separate. Confirm the final onward bus and whether the launch is operating before leaving the town.',
        tradeoff: 'A full launch circuit, long shore walk and fell ascent cannot all absorb weather or delay. Choosing height sacrifices boat flexibility; choosing the launch gives up the summit but creates clearer exits.',
        stages: [
          ['Arrive through the bus gate', 'Save the return stop and timetable at Keswick before walking to the lake. Use the town for supplies and a live weather decision.'],
          ['Read the basin from low ground', 'Use the waterfront and launch point to assess wind, cloud and water. Select the landing or fell only after conditions are visible.'],
          ['Commit to one spoke', 'Take the verified launch and shore segment or follow the named route with a time-based turn-back. Do not switch spokes mid-day.'],
          ['Return to Keswick services', 'Regain the town with enough time for food and the onward bus. A missed rural connection can threaten a mainline train at Penrith.']
        ],
        fallback: 'If launches stop or fells disappear into cloud, keep Keswick, the museum offer, Hope Park and a short lower-shore route. If buses are disrupted before departure, choose a rail-served Cumbria day.',
        watch: [
          ['Keswick has no railway station', 'Every train journey contains a bus connection. Protect both ends and avoid the final bus when possible.'],
          ['Launch landings are not equal exits', 'Some stops have limited services or longer walks. Choose the landing from the return plan, not the photograph.'],
          ['Fell weather develops quickly', 'Low cloud and wind can turn an easy-looking ridge into a navigation problem. Use a proper route and early fallback.']
        ],
        duration: 'Allow a full day from Penrith or a Lake District base. A lower Keswick and shore circuit needs five to six hours including bus margin.',
        combine: 'Combine Keswick with Derwentwater or one lower fell. Keep Windermere, Carlisle and distant valleys for separate days.',
        verify: 'Check Keswick Launch operation, the dated bus timetable, Lake District alerts, mountain weather and daylight before setting out.',
        sources: [
          ['https://keswick-launch.co.uk/', 'Keswick Launch — official service information'],
          ['https://www.lakedistrict.gov.uk/visiting/things-to-do/walking', 'Lake District National Park — official walking guidance']
        ]
      }),
      g({
        slug: 'carlisle-hadrians-wall-west',
        name: 'Carlisle & Hadrian’s Wall West',
        instrument: 'Fort-and-frontier rail strip',
        layout: 'roman-frontier-section',
        imageQuery: 'Hadrians Wall Cumbria landscape',
        imageAlt: 'Hadrian’s Wall crossing the Cumbrian landscape',
        purpose: 'Use Carlisle as the rail and museum base for one western Hadrian’s Wall site, naming the onward train, bus or walk and avoiding an open-ended attempt to cover the entire frontier.',
        summary: 'Begin with Carlisle Castle or city context, take one verified corridor to a western fort or wall section, and return before rural frequency and daylight narrow.',
        choices: [
          ['Carlisle city and castle', 'Keep the day around castle, cathedral and museum evidence. This is rail-simple and resilient in poor weather.'],
          ['Birdoswald and wall landscape', 'Use the named bus or road plan to the fort and one signed wall section. It gives frontier context but depends on rural access.'],
          ['Solway and western terminus', 'Follow the western frontier toward Bowness-on-Solway or another specific point. It offers landscape and ending context but requires the strongest transport plan.']
        ],
        access: 'Carlisle is a mainline station, but western Wall sites are dispersed and may need seasonal buses, local rail, taxi or car. Identify the exact fort, stop and final return; “Hadrian’s Wall” is not a single station or continuous day trip.',
        tradeoff: 'A complete Carlisle heritage day and a meaningful frontier walk are separate plans. Choosing the rural fort sacrifices city depth; staying in Carlisle gives up the open landscape but avoids a fragile last mile.',
        stages: [
          ['Establish the frontier base', 'Use Carlisle station, castle or museum to orient the Roman and border layers, and confirm the onward service before leaving city coverage.'],
          ['Reach one named site', 'Take the verified bus, rail or road connection to the selected fort or wall segment. Do not navigate toward a generic wall pin.'],
          ['Read a bounded frontier line', 'Visit the fort and one signed section with a fixed turnaround. Keep farmland access and weather restrictions visible.'],
          ['Return before the rural cutoff', 'Reach the stop or pickup early, then allow the Carlisle interchange before the mainline train.']
        ],
        fallback: 'If rural transport or weather fails, keep Carlisle Castle, cathedral and Tullie collections as a complete frontier-city day. If a fort closes, use only public rights of way with official guidance rather than entering private land.',
        watch: [
          ['The Wall is a corridor, not an attraction gate', 'Sites, museums and paths have separate ownership and access. Name the exact destination and permitted route.'],
          ['Seasonal transport can disappear', 'A summer bus shown in an old plan may not run on the travel date. Verify the dated timetable and a return alternative.'],
          ['Farmland and weather shape the path', 'Livestock, mud and exposed ground require signed access and suitable footwear. Do not use field shortcuts.']
        ],
        duration: 'Allow a full day for one western Wall site from Carlisle. A castle-and-city day needs five to seven hours; combining both requires a carefully timed shorter visit.',
        combine: 'Combine Carlisle with one western fort or the castle with city museums. Keep central Hadrian’s Wall and Northumberland coast for other days.',
        verify: 'Check English Heritage site access, Hadrian’s Wall transport, path guidance, weather and the final Carlisle connection before travel.',
        sources: [
          ['https://www.english-heritage.org.uk/visit/places/carlisle-castle/', 'English Heritage — Carlisle Castle visitor information'],
          ['https://hadrianswallcountry.co.uk/plan-your-trip/', 'Hadrian’s Wall Country — official trip planning']
        ]
      })
    ]
  }),
  c({
    slug: 'northeast-northumberland',
    name: 'Newcastle, Durham & Northumberland',
    nation: 'England',
    band: 'england-midlands-north',
    family: 'tyne-wear-border-book',
    label: 'Tyne–Wear border book',
    tagline: 'Keep the twin river cities rail-simple; give the tidal coast its own clock.',
    hubIntro: 'Newcastle–Gateshead and Durham are compact rail cities with strong river and collection routes, while Bamburgh and Holy Island introduce long road links and a tidal causeway. The region works when city days remain complete and the coast is planned as a separate weather-and-tide operation.',
    stay: 'Three to five nights in Newcastle supports the Tyne, Durham and one Northumberland branch. Durham also works as a quiet base but offers fewer coast connections. A Holy Island day should never be tied to a hotel-change deadline.',
    transfer: 'Newcastle Central, Gateshead Metro stops and Durham station sit at different elevations. Northumberland coast buses and roads cover long distances; Holy Island access is governed by published safe crossing times rather than ordinary opening hours.',
    season: 'City routes remain useful year-round. Coast wind, sea state, causeway windows and winter daylight shape Northumberland; summer increases castle and island pressure. Football and arena events can crowd Tyne transport.',
    fallback: 'If tide, wind or coast transport fails, use Newcastle or Durham as a complete city day. Do not substitute another remote beach or castle without rechecking the return.',
    sources: [
      ['https://newcastlegateshead.com/', 'NewcastleGateshead — official destination guide'],
      ['https://www.thisisdurham.com/', 'Visit County Durham — official destination guide'],
      ['https://www.visitnorthumberland.com/', 'Visit Northumberland — official destination guide']
    ],
    guides: [
      g({
        slug: 'newcastle-gateshead-quays',
        name: 'Newcastle & Gateshead Quays',
        instrument: 'Bridge-and-bank culture ledger',
        layout: 'tyne-bridge-fold',
        imageQuery: 'Newcastle Gateshead Quays Millennium Bridge Tyne',
        imageAlt: 'Bridges and cultural buildings along the Tyne at Newcastle and Gateshead',
        purpose: 'Choose one bank and cultural anchor, then cross the Tyne deliberately so station elevation, bridges and Quayside venues form a route rather than repeated climbs.',
        summary: 'Descend from Newcastle Central through the historic core, use one Quayside collection, cross once to Gateshead, and return by Metro or a different bridge.',
        choices: [
          ['Newcastle historic core', 'Prioritize the castle, cathedral and Grainger Town before a short Quayside finish. This gives the clearest city-origin story.'],
          ['Two-bank culture route', 'Use Baltic or another Quays venue with the Millennium Bridge and river public realm. It suits contemporary culture but requires elevation planning.'],
          ['Ouseburn extension', 'Continue east to the Ouseburn for smaller venues and food. It creates a deeper neighbourhood day but sacrifices Gateshead or castle time.']
        ],
        access: 'Newcastle Central is above the Quayside. Gateshead venues may be closer to Gateshead Metro than to a return climb across the river. Choose the first downhill street, one bridge crossing and the final station before adding Ouseburn.',
        tradeoff: 'The historic core, Gateshead culture and Ouseburn point in three directions. Choosing one secondary district sacrifices another but avoids repeated steep climbs and bridge crossings.',
        stages: [
          ['Leave Central on the chosen contour', 'Use Castle Keep and the historic streets or descend directly to the Quayside, recording the final Metro or rail return.'],
          ['Read one river bank', 'Follow a bounded Quayside section and complete the selected collection or civic site. Avoid crossing for each photograph.'],
          ['Cross once with purpose', 'Use the Millennium, Swing or High Level Bridge according to the next venue and elevation. Continue to Gateshead or Ouseburn, not both.'],
          ['Return above the river', 'Take Metro or a planned uphill street to Central. Event crowds and bridge lifts can add time, so keep margin.']
        ],
        fallback: 'If wind or a venue closure affects the Quays, use the castle, cathedral, Laing Art Gallery or Grainger Market and a short river view. If the Millennium Bridge is unavailable, use the signed adjacent crossing.',
        watch: [
          ['The Quayside sits below the stations', 'A flat riverside map hides the final climb. Use Metro or choose a gradual return when mobility is limited.'],
          ['Bridges serve different street levels', 'The same crossing can deliver you above or below the next venue. Read the exit, not only the landmark.'],
          ['Event nights change the return', 'Arena, football and concert crowds load Metro and rail. Preserve a later train and alternative crossing.']
        ],
        duration: 'Allow six to eight hours for one cultural anchor and two-bank route. A historic core plus short Quayside circuit can fit four to five hours.',
        combine: 'Combine the historic core with Quayside or Gateshead with Ouseburn only when the route stays east. Keep Durham and the coast for separate days.',
        verify: 'Check Baltic or the selected venue, Nexus Metro, bridge notices, river weather and the city event calendar before travel.',
        sources: [
          ['https://baltic.art/visit', 'Baltic Centre for Contemporary Art — official visitor information'],
          ['https://www.nexus.org.uk/metro', 'Nexus — official Tyne and Wear Metro information']
        ]
      }),
      g({
        slug: 'durham-cathedral-city',
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
        access: 'Durham station sits high west of the centre, while the cathedral peninsula rises again above the Wear. Buses and taxis can reduce the first climb. Castle access is often by specific tour, and riverside paths may include stairs or mud.',
        tradeoff: 'A full cathedral visit, castle tour and complete river loop compete for the same half-day. Choosing the river sacrifices interior depth; choosing both controlled buildings makes the landscape a short viewpoint only.',
        stages: [
          ['Descend from the rail ridge', 'Use the direct street, bus or taxi toward the market and locate the final station climb before entering the peninsula.'],
          ['Meet Palace Green', 'Complete the cathedral or booked castle product with its worship, tour and security conditions. Do not assume both can be improvised.'],
          ['Choose one river side', 'Descend toward the Wear and follow a bounded bank or bridge sequence. Use the opposite side only when the exit supports the return.'],
          ['Regain the station with margin', 'Climb through the market or use a bus, allowing for gradients and wet surfaces. Keep the final meal below the rail cutoff.']
        ],
        fallback: 'If castle or cathedral access is restricted, use Palace Green, the Oriental Museum or city collections and a shorter river viewpoint. If river paths are poor, stay on the upper streets and bridges.',
        watch: [
          ['Worship and university use control access', 'Cathedral and castle are working institutions. Check the exact visitor and tour notice for the day.'],
          ['The city is steep', 'Station, river and Palace Green occupy different levels. Build the final climb into the schedule.'],
          ['Low paths respond to water and rain', 'Riverbank mud or closures can break a loop. Use bridges and upper streets rather than forcing a blocked section.']
        ],
        duration: 'Allow five to seven hours for one major interior and a river route. A cathedral-and-city stop can fit three to four hours between trains.',
        combine: 'Combine the cathedral with one river loop or a castle tour with the market. Keep Newcastle and Northumberland coast for separate days.',
        verify: 'Check cathedral services, castle tour availability, river path notices and the rail service before departure.',
        sources: [
          ['https://www.durhamcathedral.co.uk/visit-us', 'Durham Cathedral — official visitor information'],
          ['https://www.thisisdurham.com/explore-durham/durham-city', 'Visit County Durham — official Durham City guide']
        ]
      }),
      g({
        slug: 'bamburgh-holy-island',
        name: 'Bamburgh Castle & Holy Island',
        instrument: 'Causeway tide-and-road board',
        layout: 'tidal-border-chart',
        imageQuery: 'Bamburgh Castle Northumberland coast',
        imageAlt: 'Bamburgh Castle above the Northumberland coast',
        purpose: 'Choose Bamburgh or Holy Island as the main coast destination and make the published causeway window, road distance and final bus or pickup the governing facts.',
        summary: 'Leave the rail corridor with a named bus, tour or car plan, complete one castle or island visit, and cross the Holy Island causeway only within the official safe window.',
        choices: [
          ['Bamburgh castle and village', 'Use the castle, beach viewpoint and village as a complete day. It is not tide-gated and offers the simplest coast structure.'],
          ['Holy Island depth', 'Plan the entire day around the safe causeway crossing, island sites and departure deadline. This gives the strongest tidal-place story.'],
          ['Booked coast circuit', 'Use a guided tour or car to connect selected coast sites. It gains reach but still cannot override tide or attraction access.']
        ],
        access: 'Neither Bamburgh nor Holy Island has a railway station. Buses, tours and road transfers begin from named towns or stations, and services can be sparse. Holy Island’s causeway becomes unsafe outside published crossing periods; ordinary map travel times are irrelevant then.',
        tradeoff: 'Bamburgh Castle and a meaningful Holy Island visit do not always fit the same tide window. Choosing the island sacrifices a relaxed castle day; choosing Bamburgh gives up the tidal crossing but protects flexibility.',
        stages: [
          ['Leave the rail corridor', 'Use the confirmed bus, tour pickup or car route and save the final return. Do not board without the exact stop and coast destination.'],
          ['Complete the first coast anchor', 'Visit Bamburgh or, after a safe crossing, begin Holy Island with the departure deadline visible from the start.'],
          ['Respect the tide gate', 'On Holy Island, turn toward the causeway well before the published safe period ends. Never wait for visible water as the signal.'],
          ['Recover the inland connection', 'Reach the rail or bus gateway with margin for coast traffic. Treat any second castle or beach as optional only after the return is secure.']
        ],
        fallback: 'If the tide window, wind or transport makes Holy Island unsuitable, use Bamburgh or Alnwick as the complete day. If the castle closes, retain the village and public coast only where conditions are safe.',
        watch: [
          ['The causeway can kill', 'Use only the official safe crossing times and allow a generous margin. Do not copy another vehicle or rely on a general tide app.'],
          ['Coast buses are limited', 'A missed departure can leave no practical same-day rescue. Know the final two options and the pickup location.'],
          ['Beach and castle weather differ', 'Wind, surf and blowing sand may make the shore unsuitable while the village remains usable. Keep the lower-risk branch.']
        ],
        duration: 'Allow a full day for either Bamburgh or Holy Island from Newcastle. Combining them is appropriate only when a booked route and safe tide window leave real dwell time.',
        combine: 'Combine Bamburgh with its village and beach viewpoint, or Holy Island with its island sites. Keep Durham and Newcastle for separate days.',
        verify: 'Check official Holy Island crossing times, castle admission, coast buses or tour pickup, weather and the final rail connection before departure.',
        sources: [
          ['https://www.visitnorthumberland.com/travel-tips/while-youre-here/holy-island-crossing-times', 'Visit Northumberland — current Holy Island safe crossing times'],
          ['https://www.bamburghcastle.com/visit-us/', 'Bamburgh Castle — official visitor information']
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
