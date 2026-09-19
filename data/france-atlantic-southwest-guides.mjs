import { defineFranceCluster, franceGuide } from './france-guide-builder.mjs';

const g = franceGuide;
const c = defineFranceCluster;

export const franceAtlanticSouthwestClusters = [
  c({
    slug: 'french-alps',
    name: 'Annecy, Chamonix & the French Alps',
    region: 'Auvergne-Rhône-Alpes',
    band: 'valleys-east',
    family: 'lake-glacier-altitude-board',
    label: 'Lake and altitude board',
    tagline: 'Buy elevation only after weather, operating status and descent agree.',
    hubIntro: 'Annecy, Chamonix and Grenoble expose three different Alpine systems: a lake city with busy shores, a high-mountain valley whose lifts are weather-dependent, and an urban basin opening into Chartreuse and Vercors. A clear valley forecast does not guarantee a useful summit day.',
    stay: 'Use at least three nights for two Alpine systems. Annecy suits lake and old-town days; Chamonix rewards a valley base with a flexible weather window; Grenoble works for museums, Bastille and lower mountain gateways.',
    transfer: 'Regional trains and buses connect the gateways, but mountain lift, lake boat and trail access operate on their own clocks. Build the final descent and valley return before buying a high-altitude product.',
    season: 'Snow, maintenance, wind, thunderstorms and trail condition matter more than a simple summer/winter label. Shoulder seasons can close lifts while towns remain fully usable; heat can also intensify lake crowding and afternoon storms.',
    fallback: 'Keep a complete valley or city day ready: Annecy old town and lakeshore, Chamonix museums and lower walks, or Grenoble collections and Bastille. Never replace a closed lift with an unassessed mountain trail.',
    sources: [
      ['https://www.france-montagnes.com/', 'France Montagnes — official French mountain destination guide'],
      ['https://www.ter.sncf.com/auvergne-rhone-alpes', 'TER Auvergne-Rhône-Alpes — official regional transport'],
      ['https://meteofrance.com/', 'Météo-France — official mountain forecasts and warnings']
    ],
    guides: [
      g({
        slug: 'annecy-lake-old-town',
        name: 'Annecy Old Town & Lake',
        instrument: 'Canal-to-lake crowd clock',
        layout: 'lake-city-ribbon',
        imageQuery: 'Annecy old town canal lake France Alps',
        imageAlt: 'Annecy’s old town canals with Alpine buildings and water',
        purpose: 'Connect Annecy’s compact old town to one lake-shore segment, boat or bicycle plan without assuming the full lake circuit belongs to a city stroll.',
        summary: 'Use the Thiou canals and old streets early, then choose a western-shore walk, a booked boat or a bounded bicycle section whose return works in heat and traffic.',
        choices: [
          ['Old town and museum', 'Prioritize the canals, Palais de l’Île area, château museum where open and market streets. This is the weather-flexible city route.'],
          ['Lakeshore and boat', 'Use Jardins de l’Europe and the shore, then board one verified cruise or crossing. The quay and seasonal timetable become the main clock.'],
          ['Bicycle segment', 'Ride a defined section of the lake route with rental hours, skill, heat and turnaround fixed. A complete circuit is a separate athletic day.']
        ],
        access: 'Annecy station is walkable to the old town. Boat quays, bicycle rental points and bus stops serve different shore sections; identify the exact departure and return before leaving the center.',
        tradeoff: 'A full lake circuit, museum visit, market lunch and boat do not fit as a relaxed city day. The route keeps the old town plus one water contract and gives up the rest.',
        stages: [
          ['Enter along the Thiou', 'Walk from the station toward the river, orient to the old-town bridges and avoid stopping in the narrowest market lanes with luggage.'],
          ['Read the compact historic core', 'Use the canal streets, church exteriors and one museum or market block, then leave before the same bridges become repeated photo stops.'],
          ['Commit to one lake mode', 'Walk one shore, board the named boat or begin a bounded bicycle segment. Check wind, heat and the operator’s actual return.'],
          ['Return through the open park edge', 'Finish via Jardins de l’Europe or another broad shore route, reaching the station or lodging without re-entering the densest lanes.']
        ],
        fallback: 'If boats stop or storms threaten, keep the old town, château museum and short sheltered lake edge. If the center is overwhelmed, use a quieter park and museum rather than extending onto an exposed shore.',
        watch: [
          ['Cycle traffic is mixed', 'Busy shared paths and road sections require control, helmets where appropriate and a realistic turnaround.'],
          ['Boat timetables are seasonal', 'A cruise advertisement does not guarantee the same route or return on the chosen date.'],
          ['Narrow lanes bottleneck', 'Markets and photo points are circulation space for residents. Step aside before reading maps or arranging groups.']
        ],
        duration: 'Allow five to seven hours for old town plus one lake mode. A full bicycle circuit or distant shore excursion should be a separate full day.',
        combine: 'Combine the center with one western or northern lake segment. Keep Chamonix, Geneva and remote mountain viewpoints for separate days.',
        verify: 'Check Annecy boat or bicycle operator, museum and market calendar, local transport, weather and any lakeshore event closures before departure.',
        sources: [
          ['https://en.lac-annecy.com/', 'Lake Annecy Tourist Office — official destination planning'],
          ['https://www.sibra.fr/en/', 'SIBRA — official Annecy bus network information']
        ]
      }),
      g({
        slug: 'chamonix-mountain-systems',
        name: 'Chamonix Mountain Systems',
        instrument: 'Lift-visibility-descent control panel',
        layout: 'altitude-control-panel',
        imageQuery: 'Chamonix Mont Blanc Aiguille du Midi France valley',
        imageAlt: 'Chamonix valley beneath the Mont Blanc massif',
        purpose: 'Choose one Chamonix mountain system—Aiguille du Midi, Montenvers–Mer de Glace or a lower panorama—only after lift status, visibility, altitude and final descent work together.',
        summary: 'Chamonix is a valley of separate transport products, not one summit ticket. Pay for the system that matches conditions and keep a complete lower-valley day ready.',
        choices: [
          ['Aiguille du Midi', 'Use the high cable-car system only with suitable health, wind and visibility. It is a high-altitude visit, not a casual viewpoint.'],
          ['Montenvers–Mer de Glace', 'Choose the rack railway and current glacier-site access for landscape and climate interpretation. Construction and stair or gondola arrangements can change.'],
          ['Lower panorama or valley day', 'Use Brévent, Flégère or a lower signed route only when its specific lift and trail status are confirmed; otherwise keep museums, villages and valley transport.']
        ],
        access: 'Arrive through Chamonix station or the valley bus and Mont-Blanc Express network, then walk to the exact lift or railway terminal. Products, departure points and maintenance calendars differ; one open valley does not mean all systems operate.',
        tradeoff: 'Two major mountain systems in one day multiply cost and weather risk while shortening both. The route chooses one elevation contract and uses the valley for the remaining time.',
        stages: [
          ['Check the live operating board', 'Before buying or leaving lodging, read lift, railway, road and weather status for the exact system. Confirm the ticket window and last descent.'],
          ['Acclimatize through the valley terminal', 'Arrive early, eat and hydrate. At high altitude, follow operator health guidance and turn back if symptoms appear.'],
          ['Use one mountain system fully', 'Follow signed visitor areas, current glacier access or maintained trails. Do not leave controlled areas to chase an image or shortcut.'],
          ['Descend with an earlier backup', 'Return before the final advertised descent, allowing wind or queue delays, then finish with a valley museum or river walk.']
        ],
        fallback: 'If wind, cloud, maintenance or health removes elevation, use the Alpine Museum or current Mont Blanc interpretation, Chamonix streets, Les Praz or another verified low valley route. Do not substitute an unsupervised high trail.',
        watch: [
          ['Altitude affects healthy visitors', 'Read medical cautions, ascend gradually where possible and leave immediately if symptoms develop.'],
          ['Operations can stop quickly', 'Wind and technical decisions may suspend service after ascent. Follow staff instructions and keep warm layers.'],
          ['Trail status is not lift status', 'An operating lift does not certify every path beyond it. Check the specific signed route and season.']
        ],
        duration: 'Give one mountain system four to six hours plus valley margin; make the whole day available for Aiguille du Midi or Montenvers. Two systems need another day.',
        combine: 'Combine one high system with Chamonix valley only. Keep Annecy, Courmayeur and long hikes for separate weather windows.',
        verify: 'Check Chamonix official live lift, Montenvers and trail status, Météo-France mountain forecast, health guidance and the last descent immediately before travel.',
        sources: [
          ['https://www.chamonix.com/', 'Chamonix-Mont-Blanc Tourist Office — official live valley planning'],
          ['https://www.montblancnaturalresort.com/en/', 'Compagnie du Mont-Blanc — official lift and railway operations']
        ]
      }),
      g({
        slug: 'grenoble-bastille-chartreuse',
        name: 'Grenoble, Bastille & Chartreuse Edge',
        instrument: 'Basin-to-mountain gateway section',
        layout: 'urban-alpine-section',
        imageQuery: 'Grenoble Bastille cable car Alps France city panorama',
        imageAlt: 'Grenoble and its Alpine basin seen from the Bastille',
        purpose: 'Use Grenoble’s museums and Bastille as one urban-Alpine section, adding Chartreuse only through a named, reachable gateway rather than an improvised mountain drive.',
        summary: 'Cross the historic center and Isère, ascend once to the Bastille by cable car or foot, and decide whether the city or a separate lower-mountain excursion carries the afternoon.',
        choices: [
          ['Grenoble art and city', 'Use the Musée de Grenoble, old center and Isère edge as the main day. This is the strongest heat, rain or limited-mobility choice.'],
          ['Bastille ascent', 'Ride the cable car or choose a signed climb, then use the fort and panorama as the city’s geographic explanation.'],
          ['Chartreuse gateway', 'Travel to one reachable park town, museum or signed trail through current regional transport or a car. This replaces most of the city museum time.']
        ],
        access: 'Grenoble station connects to tram lines and a walkable center. The Bastille cable-car lower station is by the Isère; Chartreuse destinations require a specific bus, car or tour and may not support late returns.',
        tradeoff: 'A deep museum visit, Bastille hike and mountain-park excursion exceed one day. The route keeps two layers at most and gives up the distant ridge chase.',
        stages: [
          ['Enter through tram or center', 'From the station, use tram or a direct walk to the selected museum or river edge, recording the final station connection.'],
          ['Read the basin at street level', 'Connect the old center, museum and Isère before ascending, so the mountain panorama has urban context.'],
          ['Ascend once or leave for Chartreuse', 'Use the operating cable car or signed path, or board the verified regional connection. Do not combine a late ascent with a remote trail.'],
          ['Return before valley weather shifts', 'Descend or leave the park with a backup service, finishing near a tram line rather than across the city from the train.']
        ],
        fallback: 'If the cable car or mountain bus stops, use Grenoble museums, the Isère banks and the flatter center. If heat makes the climb unsuitable, ride only when operating or omit elevation without replacing it with an exposed trail.',
        watch: [
          ['The basin can trap heat', 'Summer afternoons may make steep paths unpleasant; move the ascent earlier and carry water.'],
          ['Cable-car and path conditions differ', 'A technical closure does not automatically make the footpath safe or appropriate.'],
          ['Park buses may be commuter-shaped', 'Confirm the evening return, not just the outbound service, before entering Chartreuse.']
        ],
        duration: 'Allow five to seven hours for Grenoble and the Bastille. A Chartreuse excursion needs a full separate day or replaces the museum block.',
        combine: 'Combine the city with Bastille, or use Grenoble as the departure point for one Chartreuse gateway. Keep Annecy and Chamonix separate.',
        verify: 'Check cable-car operation, museum hours, park access, regional bus return and mountain weather before choosing the upper layer.',
        sources: [
          ['https://www.grenoble-tourisme.com/en/', 'Grenoble Alpes Tourist Office — official destination planning'],
          ['https://www.parc-chartreuse.net/', 'Chartreuse Regional Nature Park — official access and conduct']
        ]
      })
    ]
  }),
  c({
    slug: 'bordeaux-gironde',
    name: 'Bordeaux, Saint-Émilion & Arcachon',
    region: 'Gironde, Nouvelle-Aquitaine',
    band: 'atlantic-southwest',
    family: 'estuary-vine-dune-chart',
    label: 'Estuary, vine and dune chart',
    tagline: 'Choose city, vineyard or ocean; each runs on a different clock.',
    hubIntro: 'Bordeaux’s tram city, Saint-Émilion’s vineyard hill and Arcachon Bay’s dune-and-tide landscape are three complete systems. Regional trains make each reachable, but cellar appointments, dune access and bay boats still require separate decisions.',
    stay: 'Three or four nights in Bordeaux support the city and two excursions without changing hotels. Stay in Saint-Émilion for vineyard evenings or Arcachon for bay rhythm only when those places—not the Bordeaux commute—are the main trip.',
    transfer: 'TBM handles the metropolitan core; TER trains reach Saint-Émilion and Arcachon, but the vineyard and Dune du Pilat last miles need current buses, bicycles, tours or cars. Save evening returns.',
    season: 'Heat and shade matter in Bordeaux and vineyards; Atlantic wind, fire controls and sand exposure shape the dune. Harvest affects appointments, while bay boats and buses vary by season and tide.',
    fallback: 'Use Bordeaux museums, markets and riverfront when rural appointments or coastal conditions fail. In Arcachon, keep the town and sheltered bay rather than forcing the dune in heat or wind.',
    sources: [
      ['https://www.bordeaux-tourism.co.uk/', 'Bordeaux Tourism — official city and regional guide'],
      ['https://www.gironde-tourisme.com/', 'Gironde Tourism — official regional planning'],
      ['https://www.ter.sncf.com/nouvelle-aquitaine', 'TER Nouvelle-Aquitaine — official regional rail information']
    ],
    guides: [
      g({
        slug: 'bordeaux-river-wine-city',
        name: 'Bordeaux Riverfront & Wine City',
        instrument: 'Tram-and-quay urban decanter',
        layout: 'river-city-decanter',
        imageQuery: 'Bordeaux Place de la Bourse Garonne France',
        imageAlt: 'Place de la Bourse reflected beside the Garonne in Bordeaux',
        purpose: 'Connect Bordeaux’s historic center and Garonne quays to one wine or art institution, using the tram rather than walking the river twice.',
        summary: 'Start in the stone center, cross the market and quays once, then choose the Cité du Vin, Bassins des Lumières or a central collection as the day’s main interior.',
        choices: [
          ['Historic center and river', 'Keep the cathedral, civic squares, old gates and Garonne together. This is a complete architecture day without a wine attraction.'],
          ['Cité du Vin', 'Use the tram to the museum and give its global wine interpretation a substantial block. Tasting is optional and not a substitute for lunch.'],
          ['Northern docks and art', 'Prioritize Chartrons, Bassins à flot or a current exhibition, using tram and river edges to explain the port’s change.']
        ],
        access: 'Bordeaux Saint-Jean station is south of the center; use the tram or a purposeful riverside approach. The Cité du Vin and Bassins area lie north, so plan a one-way city line instead of returning to every square.',
        tradeoff: 'A major museum, market, long lunch and full historic loop already fill the day. The route gives up a vineyard excursion so Bordeaux is more than the station between wine towns.',
        stages: [
          ['Enter from Saint-Jean or a central stop', 'Use the tram to the chosen southern or central starting point, confirming late service and any ticket validation requirement.'],
          ['Read the stone city', 'Connect cathedral, Hôtel de Ville area, key squares and one gate without detouring to both banks.'],
          ['Follow the Garonne north', 'Use the quays and Chartrons direction, then enter the selected museum or wine institution at its reserved time.'],
          ['Return by tram, not repetition', 'Finish near a direct tram line to Saint-Jean or lodging. Eat and rehydrate before any tasting.']
        ],
        fallback: 'If the Cité du Vin or exhibition is unavailable, keep the historic center and use the Musée d’Aquitaine, CAPC or another confirmed collection. In heat, replace long quay exposure with tram segments.',
        watch: [
          ['Tram disruptions change the long axis', 'Check TBM notices before placing a timed northern admission after a train arrival.'],
          ['Riverfront heat and wind are exposed', 'Carry water and use shade; the broad quays can feel longer than the map suggests.'],
          ['Wine interpretation is not a drinking quota', 'Tastings may have age and service rules; non-alcoholic participation remains a complete visit.']
        ],
        duration: 'Allow six to eight hours for the historic center, quays and one major interior. A compact center loop can fit four hours.',
        combine: 'Combine the center with one northern institution. Keep Saint-Émilion, Arcachon and Médoc for separate days.',
        verify: 'Check TBM service, museum reservation, market or exhibition hours and any riverfront event closure before fixing the direction.',
        sources: [
          ['https://www.laciteduvin.com/en', 'Cité du Vin — official visitor information'],
          ['https://www.infotbm.com/en', 'TBM Bordeaux — official tram, bus and river service']
        ]
      }),
      g({
        slug: 'saint-emilion-vineyards',
        name: 'Saint-Émilion Village & Vineyards',
        instrument: 'Hill-cellar appointment map',
        layout: 'vineyard-hill-map',
        imageQuery: 'Saint Emilion village vineyards France panorama',
        imageAlt: 'Saint-Émilion’s stone village surrounded by vineyards',
        purpose: 'Reach Saint-Émilion from the correct station, manage the hill and reserve one chateau or underground visit instead of wandering among unavailable cellar doors.',
        summary: 'The village, monolithic-church context and vineyards form one steep landscape; a booked producer or official tour gives it structure and determines the last mile.',
        choices: [
          ['Village and underground heritage', 'Use an official tour for restricted monuments, then walk the upper and lower town. This is the clearest rail-based visit.'],
          ['One estate appointment', 'Arrange a winery whose access, language and transport are explicit. Many estates are not walkable from the station or village.'],
          ['Vineyard walk or bicycle', 'Use a signed route with weather, traffic and sober riding limits. This replaces a second tasting and requires a return buffer.']
        ],
        access: 'Saint-Émilion station is below and outside the village; the uphill walk and some road sections need time. Wineries spread across the appellation, so book transport or choose one genuinely reachable estate before arrival.',
        tradeoff: 'A village tour, multiple estates and a long vineyard loop do not fit one rail day. The route keeps the heritage center plus one rural contract.',
        stages: [
          ['Climb from station with the return in mind', 'Follow the safe signed route to the village, noting the downhill time and train frequency before entering the lanes.'],
          ['Read the village vertically', 'Use the tourism office or official guided access for restricted monuments, then connect upper viewpoints and lower streets without repeated climbs.'],
          ['Attend one appointment', 'Meet at the exact estate or central pickup. Respect working areas, drink water and keep the driver or cyclist sober.'],
          ['Descend before the train margin disappears', 'Return to the station early, accounting for cobbles, purchases and heat; keep one later service as backup.']
        ],
        fallback: 'If the estate cancels, use the official village tour and public vineyard-edge paths. If heat or mobility makes the station walk unsuitable, arrange a taxi in advance or stay in Bordeaux rather than improvising roadside transport.',
        watch: [
          ['The station is not the village square', 'The uphill approach is meaningful and may lack shade. Carry water and time the descent.'],
          ['Monuments may require a guided ticket', 'Restricted underground and church areas cannot be assumed open for self-guided entry.'],
          ['Private vineyards are workplaces', 'Stay on public routes and do not enter rows or yards without an appointment.']
        ],
        duration: 'Allow a full seven-to-nine-hour day from Bordeaux for village, meal and one appointment. Village heritage alone needs four to five hours including station walks.',
        combine: 'Combine Saint-Émilion village with one nearby estate. Keep Bordeaux museums, Médoc and Arcachon for separate days.',
        verify: 'Check TER trains, village guided-tour availability, estate appointment, taxi or walking access, weather and the final return.',
        sources: [
          ['https://www.saint-emilion-tourisme.com/en/', 'Saint-Émilion Tourism — official village and vineyard planning'],
          ['https://www.ter.sncf.com/nouvelle-aquitaine', 'TER Nouvelle-Aquitaine — official rail service']
        ]
      }),
      g({
        slug: 'arcachon-dune-pilat',
        name: 'Arcachon Bay & Dune du Pilat',
        instrument: 'Sand-wind-shuttle compass',
        layout: 'dune-bay-compass',
        imageQuery: 'Dune du Pilat Arcachon France ocean forest',
        imageAlt: 'Dune du Pilat between Atlantic water and pine forest',
        purpose: 'Choose whether Arcachon town, a bay boat or the Dune du Pilat carries the day, then match the bus and weather without overloading the exposed sand route.',
        summary: 'Use the train to Arcachon, read wind and access status, and choose one bay contract plus one town layer; the dune is a moving natural site, not a fixed staircase attraction.',
        choices: [
          ['Arcachon town and bay', 'Walk the Ville d’Hiver or waterfront and use one current boat service. This is the more sheltered and tide-aware plan.'],
          ['Dune du Pilat', 'Take the verified bus or road route, allow for sand climbing and keep forest-fire or heat controls central.'],
          ['Cap Ferret crossing', 'Use a named seasonal boat and a bounded peninsula route. This replaces the dune and depends on tide, weather and return sailings.']
        ],
        access: 'TER trains reach Arcachon; the dune requires a current bus, bicycle or car, and Cap Ferret uses boat or a long road approach. Check the exact stop, seasonal service and final connection before leaving the station.',
        tradeoff: 'The dune, a long bay cruise and Cap Ferret cannot all be meaningful in one day. The route chooses one exposed landscape and uses Arcachon as the transport and meal anchor.',
        stages: [
          ['Arrive and read conditions', 'At Arcachon, check wind, heat, fire restrictions and boat or bus status before committing to the shore or dune.'],
          ['Use the town as an anchor', 'Walk a selected waterfront or Ville d’Hiver segment, buy water and identify the return platform or quay.'],
          ['Commit to dune or bay', 'At the dune, follow official access and stay clear of protected forest; on a boat, board the named route and understand the return port.'],
          ['Return before coastal options thin', 'Reach Arcachon with a train backup, allowing sand, road traffic or boat delay. Finish near the station rather than adding a distant beach.']
        ],
        fallback: 'If the dune closes for fire risk or wind, remain in Arcachon for the town, sheltered shore and a confirmed boat only if operating. If boats cancel, use the land-side route and do not substitute an unfamiliar beach crossing.',
        watch: [
          ['Sand climbing is strenuous', 'The seasonal staircase may not be present; descend and climb conservatively, especially in heat.'],
          ['Forest-fire controls can close access', 'Official restrictions override the itinerary. Never enter closed forest or park illegally on approach roads.'],
          ['Boat return ports matter', 'A crossing may land far from the rail line. Confirm whether it is a round trip and where the last sailing ends.']
        ],
        duration: 'Allow a full day from Bordeaux for Arcachon plus the dune or one bay route. Either exposed excursion needs four to six hours including local transfers.',
        combine: 'Combine Arcachon with the dune or one boat route, not both major branches. Keep Saint-Émilion and central Bordeaux separate.',
        verify: 'Check Dune du Pilat official access and fire notices, local bus, bay operator, tide and wind, plus the final TER train.',
        sources: [
          ['https://ladunedupilat.com/en/', 'Grand Site de la Dune du Pilat — official access and conditions'],
          ['https://www.arcachon.com/en/', 'Arcachon Tourist Office — official town and bay planning']
        ]
      })
    ]
  }),
  c({
    slug: 'dordogne-perigord',
    name: 'Dordogne & Périgord Noir',
    region: 'Dordogne, Nouvelle-Aquitaine',
    band: 'atlantic-southwest',
    family: 'limestone-river-fieldbook',
    label: 'Limestone and river fieldbook',
    tagline: 'Choose one valley system; sparse transport makes distance the first decision.',
    hubIntro: 'Sarlat’s market city, the Vézère’s prehistoric sites and the Dordogne’s cliff villages and castles are close on a map but dispersed across rural roads. A car, driver, bicycle or arranged tour often determines what is responsible and possible. Build each day inside one valley so a missed cave slot, river shuttle or castle closing does not trigger a long corrective drive.',
    stay: 'Three or four nights around Sarlat, Les Eyzies or a valley base support two complete route days. Moving lodging can cost more time than it saves unless the trip continues beyond Périgord.',
    transfer: 'Rail reaches Sarlat and other gateways on limited schedules; major caves, castles and villages need a planned last mile. Taxis and app cars are not dependable spontaneous returns.',
    season: 'Cave and monument reservations, river conditions, market days, summer heat and road pressure all matter. Winter and shoulder seasons are quieter but reduce openings and local services.',
    fallback: 'Keep Sarlat or another town day ready when a cave ticket, canoe route or rural driver fails. Replace river activity with one accessible château or museum, not with a chain of unverified roads.',
    sources: [
      ['https://en.sarlat-tourisme.com/', 'Sarlat Périgord Noir tourism — official destination guide'],
      ['https://www.dordogne-perigord-tourisme.fr/', 'Dordogne Périgord Tourism — official regional planning'],
      ['https://www.ter.sncf.com/nouvelle-aquitaine', 'TER Nouvelle-Aquitaine — official regional rail information']
    ],
    guides: [
      g({
        slug: 'sarlat-market-old-town',
        name: 'Sarlat Market & Old Town',
        instrument: 'Market-day limestone clock',
        layout: 'market-street-clock',
        imageQuery: 'Sarlat la Caneda old town market Dordogne France',
        imageAlt: 'Golden limestone buildings in Sarlat’s historic center',
        purpose: 'Use Sarlat’s market calendar and compact lanes to build a complete town day, choosing one food or heritage experience rather than treating the center as a parking stop for valley drives.',
        summary: 'Enter before the densest market period, trace civic lanes and one viewpoint or museum, then use Sarlat as the meal and transport anchor for the region.',
        choices: [
          ['Market morning', 'Build around the official market day, buy selectively and keep pedestrian space clear. The market replaces a long museum block.'],
          ['Architecture and heritage', 'Use the cathedral area, former church spaces, lanes and a guided or interpreted route. This works on non-market days.'],
          ['Sarlat as rural base', 'Keep the town for early or evening hours and reserve the main day for one valley circuit with transport already arranged.']
        ],
        access: 'Sarlat station lies south of the center and rail service can be limited. Walk, use local transport or a taxi with the return in mind; drivers should use designated parking rather than entering restricted medieval streets.',
        tradeoff: 'A full market, long lunch and distant cave or castle visit exceed a relaxed day. The route either treats Sarlat as the destination or as a base, not both at maximum depth.',
        stages: [
          ['Enter before or after peak pressure', 'Approach from the station or designated parking, identify the return line and avoid carrying luggage into the busiest market lanes.'],
          ['Read the civic core', 'Connect cathedral square, former Sainte-Marie church area and a few named lanes, using a guide or official circuit when available.'],
          ['Choose food or heritage depth', 'Eat and browse the market with purpose, or use a museum, panoramic lift or guided visit where operating.'],
          ['Close near the transport edge', 'Finish south or west of the core, collect purchases and reach the station or lodging without searching for a late rural taxi.']
        ],
        fallback: 'If the market is absent or weather turns, use the heritage circuit, church spaces and a confirmed museum or guided visit. If rail is disrupted, remain in the base rather than attempting a distant one-way taxi.',
        watch: [
          ['Market days reshape the streets', 'Crowds and delivery vehicles change circulation. Keep bags controlled and do not block vendor access.'],
          ['Regional rail can be sparse', 'Know the final train and any replacement bus before settling into dinner.'],
          ['Food names need informed buying', 'Ask about origin and season rather than assuming every stall product is local or currently harvested.']
        ],
        duration: 'Allow five to seven hours for Sarlat with market and meal. A compact evening or non-market loop needs three to four hours.',
        combine: 'Combine Sarlat with a very near village only when transport is solved. Keep the Vézère and Dordogne valley circuits for full days.',
        verify: 'Check official market day, attraction opening, rail schedule, parking or shuttle rules and any guided visit before setting the morning.',
        sources: [
          ['https://en.sarlat-tourisme.com/discover-sarlat-and-the-perigord/what-is-there-to-do-in-sarlat-capital-of-the-perigord/history-of-the-town/sarlat-from-the-origins-to-the-14th-century/', 'Sarlat Tourism — official town history and planning'],
          ['https://www.sncf-connect.com/en-en/', 'SNCF Connect — current Sarlat rail service']
        ]
      }),
      g({
        slug: 'vezere-prehistory',
        name: 'Vézère Valley Prehistory',
        instrument: 'Timed-cave evidence ledger',
        layout: 'prehistoric-valley-ledger',
        imageQuery: 'Vezere Valley Les Eyzies Dordogne France cliffs',
        imageAlt: 'Limestone cliffs and river landscape in the Vézère Valley',
        purpose: 'Choose one original or reconstructed cave experience and one museum or shelter, keeping reservations, conservation rules and rural transport honest.',
        summary: 'Use Les Eyzies or Montignac as the valley anchor, distinguish original art from facsimile interpretation, and avoid claiming that several timed caves can be improvised in one day.',
        choices: [
          ['Lascaux interpretation', 'Use Lascaux IV and Montignac as a complete interpretive visit. It is a facsimile center, which should be stated clearly rather than presented as the original cave.'],
          ['Les Eyzies museum base', 'Build around the National Museum of Prehistory and a nearby official shelter or site. This gives artifacts and landscape a strong connection.'],
          ['Limited-access original cave', 'Pursue Font-de-Gaume or another original site only through its current official reservation rules. Scarcity is not a reason to use unofficial sellers.']
        ],
        access: 'The valley’s sites are distributed between Montignac, Les Eyzies and smaller roads. Arrange a car, driver, bicycle plan or official tour and place timed entries far enough apart for parking, check-in and traffic.',
        tradeoff: 'The route gives up collecting every cave name. One major interpretive center plus one museum or landscape site lets visitors understand evidence, conservation and chronology.',
        stages: [
          ['Arrive at the chosen valley anchor', 'Begin in Montignac or Les Eyzies, confirm the ticket location and collect current site information before driving onward.'],
          ['Complete one timed cave contract', 'Arrive before check-in, follow photography and bag rules, and distinguish original, replica and museum evidence in your notes.'],
          ['Add one contextual collection', 'Use the prehistory museum, a signed shelter or a short landscape trail to place the art and occupation in the valley.'],
          ['Return before rural roads darken', 'Leave enough daylight and fuel margin, especially outside summer. Do not depend on a last-minute taxi from a cave car park.']
        ],
        fallback: 'If a limited cave ticket is unavailable, Lascaux IV or the National Museum of Prehistory offers substantial interpretation. If weather closes an outdoor shelter, keep one indoor center rather than driving among closed sites.',
        watch: [
          ['Original and replica are different claims', 'Label the experience accurately and use official interpretation to understand why originals need protection.'],
          ['Tickets may be personal and scarce', 'Follow the official booking channel and identification requirements; avoid resale promises.'],
          ['Rural transfer time is real', 'Narrow roads and parking make back-to-back admissions fragile even when map distances look short.']
        ],
        duration: 'Allow a full day for one major cave experience and one contextual site. Two towns or several timed caves need another day.',
        combine: 'Combine Lascaux with Montignac, or an original cave with Les Eyzies museum. Keep Dordogne castles and Sarlat market separate.',
        verify: 'Check official cave ticket rules, museum opening, photography and bag restrictions, road access, weather and the arranged return before travel.',
        sources: [
          ['https://www.lascaux.fr/en', 'Lascaux — official visitor and interpretation information'],
          ['https://musee-prehistoire-eyzies.fr/en', 'National Museum of Prehistory, Les Eyzies — official visits']
        ]
      }),
      g({
        slug: 'dordogne-castles-villages',
        name: 'Dordogne Valley Castles & Cliff Villages',
        instrument: 'River-bank castle selector',
        layout: 'castle-river-selector',
        imageQuery: 'Beynac Dordogne river castle France panorama',
        imageAlt: 'Beynac castle and village above the Dordogne River',
        purpose: 'Choose one castle pairing and one river village based on bank, access and transport, rather than trying to photograph every cliff settlement in a single drive.',
        summary: 'Use Beynac, Castelnaud, La Roque-Gageac or Domme as a coherent bank-and-height route, then add canoeing only when water, operator and return conditions are suitable.',
        choices: [
          ['Beynac and French-bank history', 'Climb the village and visit the château where open, then use river viewpoints. Steep access makes this a substantial half-day.'],
          ['Castelnaud and conflict interpretation', 'Use the château museum and opposing-bank geography to understand the valley. Pair with one nearby village, not another distant castle.'],
          ['River-level route', 'Use a licensed canoe or boat product with named start, finish and shuttle, or stay in La Roque-Gageac for a lower-impact village day.']
        ],
        access: 'Public transport is limited. Use a car, driver, bicycle or booked excursion, and identify legal parking before each cliff village. Canoe trips require the operator’s exact base, shuttle and river conditions.',
        tradeoff: 'Climbing two villages, touring two castles and paddling is too much for most days. The route chooses one elevation story and one river-level experience.',
        stages: [
          ['Choose the bank and parking', 'Approach the selected village through official parking or pickup, keeping narrow resident roads clear and noting the return path.'],
          ['Climb one historical layer', 'Visit Beynac or Castelnaud with enough time for steep streets, museum interpretation and viewpoints.'],
          ['Return to river level', 'Eat in one village, take a booked boat or canoe, or walk a signed river segment. Confirm where the activity actually ends.'],
          ['Leave before road and river margins close', 'Use the shuttle or vehicle with daylight and traffic buffer, avoiding an unscheduled second hill town.']
        ],
        fallback: 'If the river is unsuitable, keep the castle and village route. If heat or mobility blocks the hill, use a lower village, garden or boat only when current access and return are confirmed.',
        watch: [
          ['Cliff villages are steep', 'Cobbles, heat and stairs require footwear, water and a conservative route.'],
          ['Canoe endpoints are not the start', 'Understand the shuttle and pickup before launching; carry required safety equipment.'],
          ['Parking pressure affects residents', 'Use designated areas and never enter narrow village lanes to save a climb.']
        ],
        duration: 'Allow a full day for one castle, one village and a river activity. A castle-and-village route without paddling needs five to seven hours.',
        combine: 'Combine Beynac with a nearby river stop or Castelnaud with one neighboring village. Keep the Vézère caves and Sarlat market separate.',
        verify: 'Check château opening, parking, river level, canoe operator and shuttle, heat or storm forecast and the road return before departure.',
        sources: [
          ['https://en.sarlat-tourisme.com/discover-sarlat-and-the-perigord/the-dordogne-valley/', 'Sarlat Tourism — official Dordogne Valley planning'],
          ['https://castelnaud.com/en/', 'Château de Castelnaud — official visitor information']
        ]
      })
    ]
  }),
  c({
    slug: 'toulouse-albi-carcassonne',
    name: 'Toulouse, Albi & Carcassonne',
    region: 'Occitanie',
    band: 'atlantic-southwest',
    family: 'brick-canal-citadel-spread',
    label: 'Brick, canal and citadel spread',
    tagline: 'Use Toulouse as the base; give each brick city its own rail day.',
    hubIntro: 'Toulouse’s Garonne and aerospace layers, Albi’s episcopal brick city and Carcassonne’s fortified cité are distinct destinations on separate rail corridors. Both excursions are possible from Toulouse, but neither should be reduced to a two-hour photo stop.',
    stay: 'Three nights in Toulouse support the city plus one excursion; four or five nights allow both Albi and Carcassonne without sacrificing Toulouse’s museums or evening river life.',
    transfer: 'Tisséo serves Toulouse; TER trains reach Albi and Carcassonne. Stations are not at every major sight, and aerospace attractions use separate suburban transit. Protect the return rather than using the last possible train.',
    season: 'Summer heat makes brick squares and citadel walls demanding at midday; storms affect river and canal plans. Festivals can change access and accommodation, while winter shortens outdoor light but suits museums.',
    fallback: 'Use Toulouse museums, markets or canal walks when an excursion rail line fails. In Albi or Carcassonne, keep one indoor anchor and a shorter center loop rather than searching for a second distant town.',
    sources: [
      ['https://www.visit-occitanie.com/en/', 'Occitanie tourism — official regional guide'],
      ['https://www.ter.sncf.com/occitanie', 'liO Train / TER Occitanie — official rail information'],
      ['https://www.tisseo.fr/', 'Tisséo — official Toulouse public transport']
    ],
    guides: [
      g({
        slug: 'toulouse-garonne-aerospace',
        name: 'Toulouse Garonne & Aerospace Choices',
        instrument: 'River-to-aerospace split board',
        layout: 'brick-city-split',
        imageQuery: 'Toulouse Capitole Garonne France sunset',
        imageAlt: 'Toulouse’s brick city center and Garonne riverfront',
        purpose: 'Choose whether Toulouse’s historic center or one aerospace campus carries the day, then connect them by the correct transit rather than treating Cité de l’espace and Aeroscopia as adjacent.',
        summary: 'Walk the Capitole–Saint-Sernin–Garonne core as one route, then select Cité de l’espace, Aeroscopia or Halle de La Machine only when its distinct location and admission fit.',
        choices: [
          ['Historic Toulouse', 'Keep Capitole, Saint-Sernin, Jacobins, market and Garonne together. This is a complete first day with no suburban transfer.'],
          ['Cité de l’espace', 'Use the eastern campus as the main long-form science visit. It needs its own transit, admission and several hours.'],
          ['Aeroscopia or Halle de La Machine', 'Choose one northern or southern industrial-culture site. They are not interchangeable and do not share a single attraction stop.']
        ],
        access: 'Toulouse Matabiau station, central Métro and suburban tram or bus routes serve different layers. Check the exact aerospace site, stop and final service; a search for “air museum Toulouse” can lead to the wrong side of the city.',
        tradeoff: 'A full aerospace campus plus the entire historic core exceeds one day. The route either gives the center depth or keeps it as an evening bookend around one selected campus.',
        stages: [
          ['Orient from Matabiau or Capitole', 'Use Métro or the canal approach to the center, noting the evening return and the transit needed for any campus.'],
          ['Read the brick core', 'Connect Capitole, Saint-Sernin or Jacobins and the Garonne without zig-zagging across both banks. Choose one religious interior or museum.'],
          ['Commit to one aerospace site', 'Travel to the exact campus and give its exhibitions or programmed experience enough time. Respect timed demonstrations and outdoor heat.'],
          ['Return to river or station', 'Use Tisséo to finish at the Garonne or Matabiau side, leaving a meal buffer rather than another distant attraction.']
        ],
        fallback: 'If suburban transit or a campus booking fails, deepen the city with the Musée des Augustins when open, canal, market and river route. If heat is severe, prioritize interiors and evening Garonne light.',
        watch: [
          ['Aerospace sites are geographically separate', 'Cité de l’espace, Aeroscopia and Halle de La Machine need different routes and admissions.'],
          ['Brick streets retain heat', 'Move long open-square and river sections to morning or evening and carry water.'],
          ['Religious sites pause for worship', 'Keep exterior and museum alternatives when Saint-Sernin or Jacobins access changes.']
        ],
        duration: 'Allow six to eight hours for the historic core, or a full day for one aerospace campus plus a compact city block. Do not schedule two campuses together casually.',
        combine: 'Combine central Toulouse with one selected aerospace site. Keep Albi and Carcassonne as separate rail days.',
        verify: 'Check the exact attraction’s admission, Tisséo route, museum openings, weather and Matabiau service before setting the split.',
        sources: [
          ['https://www.toulouse-tourisme.com/en/', 'Toulouse Tourism — official city planning'],
          ['https://www.cite-espace.com/en/', 'Cité de l’espace — official visitor information']
        ]
      }),
      g({
        slug: 'albi-episcopal-city',
        name: 'Albi Episcopal City & Toulouse-Lautrec',
        instrument: 'Brick-cathedral collection route',
        layout: 'episcopal-brick-route',
        imageQuery: 'Albi cathedral Sainte Cecile Tarn France river',
        imageAlt: 'Sainte-Cécile Cathedral and the brick episcopal city of Albi',
        purpose: 'Connect Albi’s fortress-like cathedral, episcopal palace museum and Tarn viewpoints in one rail-based loop without rushing onward to Cordes-sur-Ciel on an unsolved bus.',
        summary: 'Walk from the station into the brick core, give Sainte-Cécile and the Toulouse-Lautrec Museum separate attention, then finish along the Tarn and return through a different street line.',
        choices: [
          ['Cathedral and episcopal city', 'Prioritize Sainte-Cécile, surrounding streets and the Berbie Palace exterior. This emphasizes religious and urban power.'],
          ['Toulouse-Lautrec collection', 'Give the museum the long block and use cathedral and gardens as context. Gallery time replaces an extra excursion.'],
          ['Tarn and city viewpoints', 'Add the riverbanks or a marked heritage circuit for landscape and bridges, keeping interiors selective.']
        ],
        access: 'Albi has more than one rail stop; confirm the ticketed station and route to the episcopal center. Albi-Ville is a practical approach for many services, but current schedules determine the best return.',
        tradeoff: 'Adding Cordes-sur-Ciel usually requires a bus, car or tour and removes museum depth. The route gives it up unless the rural connection is the explicit purpose of the day.',
        stages: [
          ['Walk into the brick center', 'From the station, use the signed route toward Sainte-Cécile, noting the return and any heat or gradient on the approach.'],
          ['Read the cathedral', 'Observe the fortress exterior and current interior access, respecting services and photography rules.'],
          ['Enter the Berbie Palace collection', 'Give the Toulouse-Lautrec Museum enough time for both art and building; use the gardens and river outlook as a reset.'],
          ['Return via Tarn or civic streets', 'Choose the river viewpoint or official heritage circuit, ending on a direct station line with a train backup.']
        ],
        fallback: 'If cathedral access pauses, use the museum, exterior and official city circuits. If the museum closes, keep the cathedral, market and Tarn route rather than improvising a rural transfer.',
        watch: [
          ['Station identity matters', 'Check Albi-Ville versus other stops before the return; not every service uses the same pattern.'],
          ['Cathedral and museum hours differ', 'Build the day around the more restrictive opening and worship schedule.'],
          ['Brick and river paths can be hot', 'Use shade and move exposed viewpoints outside the strongest afternoon heat.']
        ],
        duration: 'Allow five to seven hours for cathedral, museum, meal and river view. A compact half-day sacrifices either the collection or the longer city circuit.',
        combine: 'Combine Albi with Cordes-sur-Ciel only through a verified bus or tour and by shortening Albi intentionally. Keep Carcassonne separate.',
        verify: 'Check exact rail station, cathedral services, museum opening, local event access and the final Toulouse train.',
        sources: [
          ['https://www.albi-tourisme.fr/en/', 'Albi Tourism — official city guide'],
          ['https://musee-toulouse-lautrec.com/en/', 'Musée Toulouse-Lautrec — official visitor information']
        ]
      }),
      g({
        slug: 'carcassonne-cite-bastide',
        name: 'Carcassonne Cité & Bastide',
        instrument: 'Two-city fortification plan',
        layout: 'citadel-bastide-plan',
        imageQuery: 'Carcassonne medieval city walls France panorama',
        imageAlt: 'Fortified walls and towers of the medieval Cité de Carcassonne',
        purpose: 'Distinguish the fortified Cité from the lower Bastide Saint-Louis, reserve the castle-and-ramparts if wanted, and account for the climb from the rail station.',
        summary: 'Start in the lower town or at the station, cross the Aude and enter the Cité once, then leave enough attention for the lived Bastide rather than spending the whole day inside souvenir lanes.',
        choices: [
          ['Castle and ramparts', 'Reserve the Château Comtal and rampart circuit as the main paid visit. Security and one-way circulation determine the sequence.'],
          ['Cité exterior and basilica', 'Use gates, walls, lanes and current basilica access without the castle ticket. This leaves time for the lower town.'],
          ['Two-city comparison', 'Give the Bastide market streets, Canal du Midi edge or museum a real block before or after the Cité.']
        ],
        access: 'Carcassonne station is in the Bastide near the canal, not at the medieval gate. Walk or use the current local bus across the Aude and uphill; plan the return descent and avoid carrying luggage into the Cité.',
        tradeoff: 'A deep castle visit and long Bastide day leave little room for nearby vineyards or Cathar-country drives. The route keeps Carcassonne as a two-part city rather than a fortress photo stop.',
        stages: [
          ['Begin in the lower city', 'From the station, identify the Bastide grid and Pont Vieux direction, storing luggage before the climb.'],
          ['Cross the Aude for the reveal', 'Use the bridge and approach to understand the defensive position, then enter through the chosen gate.'],
          ['Commit to castle or exterior circuit', 'Follow the reserved monument route or a bounded public wall-and-basilica loop, avoiding repeated laps through commercial lanes.'],
          ['Return to the Bastide', 'Descend with time for a square, market or canal edge, ending close to the station rather than adding a remote winery.']
        ],
        fallback: 'If castle tickets are unavailable, the exterior walls, basilica, bridges and Bastide still form a complete route. In extreme heat, move the climb early and use lower-town interiors at midday.',
        watch: [
          ['The station-to-gate distance is real', 'Allow the river crossing and climb, especially with children, luggage or heat.'],
          ['Event days alter fortress access', 'Concerts and festivals may close ramparts or redirect gates. Check the official calendar.'],
          ['The Cité remains more than shops', 'Use official interpretation and the lower city to avoid reducing the place to commercial medieval imagery.']
        ],
        duration: 'Allow five to seven hours for both city layers with the castle. A Cité-only exterior visit needs three to four hours including the station approach.',
        combine: 'Combine the Cité and Bastide. Keep Toulouse, Albi and distant Cathar castles for separate days.',
        verify: 'Check Château Comtal ticket and events, local bus, heat or storm forecast, basilica access and the final rail service.',
        sources: [
          ['https://www.tourisme-carcassonne.fr/en/', 'Carcassonne Tourist Office — official city planning'],
          ['https://www.remparts-carcassonne.fr/en/', 'Château and ramparts of Carcassonne — official monument visits']
        ]
      })
    ]
  }),
  c({
    slug: 'basque-coast-pyrenees',
    name: 'French Basque Coast & the Pyrenees',
    region: 'Pyrénées-Atlantiques and Hautes-Pyrénées',
    band: 'atlantic-southwest',
    family: 'surf-pass-mountain-gate',
    label: 'Coast and mountain gate',
    tagline: 'Do not merge Atlantic swell and high-mountain access into one weather forecast.',
    hubIntro: 'Bayonne and Biarritz share an urban coastal network, Saint-Jean-de-Luz opens a different harbor and inland Basque corridor, and Gavarnie or Cauterets require a separate Pyrenean base. Ocean conditions and mountain conditions must be checked independently.',
    stay: 'Three nights on the coast support Bayonne, Biarritz and Saint-Jean-de-Luz; add separate mountain nights around Lourdes, Cauterets or Luz-Saint-Sauveur for Pyrenean routes. A coast hotel is not a practical high-mountain base.',
    transfer: 'Regional rail links coastal towns, with local buses for beaches and inland villages. Pyrenean valleys depend on seasonal buses, cars and weather-sensitive roads; the final trail or lift has its own status.',
    season: 'Surf, swimming, red-flag closures and storms shape the Atlantic. Snow, road status, waterfalls, heat and thunderstorms shape the mountains. Shoulder-season services thin in both systems.',
    fallback: 'Use Bayonne museums, Biarritz aquarium or Saint-Jean-de-Luz town when the ocean is unsafe; use Lourdes, Cauterets village or a lower interpreted site when mountain roads or trails close.',
    sources: [
      ['https://www.tourisme64.com/en/', 'Pyrénées-Atlantiques tourism — official regional guide'],
      ['https://www.ter.sncf.com/nouvelle-aquitaine', 'TER Nouvelle-Aquitaine — official coastal rail'],
      ['https://www.pyrenees-parcnational.fr/en', 'Pyrenees National Park — official access and conduct']
    ],
    guides: [
      g({
        slug: 'bayonne-biarritz',
        name: 'Bayonne & Biarritz',
        instrument: 'River-to-surf urban tide card',
        layout: 'estuary-coast-diptych',
        imageQuery: 'Biarritz coast Grande Plage France Basque',
        imageAlt: 'Atlantic waterfront and buildings in Biarritz on the French Basque coast',
        purpose: 'Choose whether Bayonne’s river-and-culture city or Biarritz’s exposed ocean front leads the day, then connect them by the current urban network.',
        summary: 'Walk one complete center first, use bus or rail for the second, and treat ocean safety as a live condition rather than a postcard assumption.',
        choices: [
          ['Bayonne history and culture', 'Use the cathedral quarter, Nive and Adour edges, market and Basque Museum where open. This is the more sheltered route.'],
          ['Biarritz ocean city', 'Connect Grande Plage, Rocher de la Vierge and one aquarium or museum block, following current surf and access warnings.'],
          ['Two-city comparison', 'Give each town a bounded half-day using transit, omitting long beach time and multiple museums.']
        ],
        access: 'Bayonne station is close to the center; Biarritz rail station is inland and requires a bus to the ocean core. The local network links the towns, but traffic and summer crowding demand a return buffer.',
        tradeoff: 'A beach day, two museums and both historic centers exceed one day. The route chooses two urban narratives or one town in depth, not every coast icon.',
        stages: [
          ['Begin at the easier station-city link', 'Use Bayonne station for a river approach or Biarritz bus for the coast, confirming the cross-city connection before exploring.'],
          ['Read the first town fully', 'In Bayonne, connect rivers, cathedral and museum; in Biarritz, read the ocean frontage and resort history with current sea conditions.'],
          ['Transfer once', 'Use the official bus or rail connection, then choose a compact second-town route rather than repeating food, market and museum categories.'],
          ['Finish near the correct return', 'End by Bayonne station or a direct Biarritz bus line, leaving beaches well before the last comfortable connection.']
        ],
        fallback: 'When surf, wind or rain closes exposed edges, use Bayonne’s museum and covered market or Biarritz’s aquarium and city collections. Never enter water outside supervised conditions to preserve the plan.',
        watch: [
          ['Biarritz station is not by the beach', 'Count the bus and traffic, especially before a train.'],
          ['Flags and lifeguards govern swimming', 'Follow current beach zones and never infer safety from other swimmers.'],
          ['Festival periods transform both cities', 'Fêtes and major events change transit, access and crowd behavior. Check dates before arrival.']
        ],
        duration: 'Allow six to eight hours for both cities and five to seven for either one in depth. A real beach block should turn this into a single-city day.',
        combine: 'Combine Bayonne and Biarritz through the urban network. Keep Saint-Jean-de-Luz and mountain valleys separate.',
        verify: 'Check local transit, beach flags and weather, museum openings, event access and the exact Biarritz station connection.',
        sources: [
          ['https://www.visitbayonne.com/en/', 'Bayonne Tourist Office — official city planning'],
          ['https://www.destination-biarritz.fr/en/', 'Biarritz Tourism — official visitor and beach information']
        ]
      }),
      g({
        slug: 'saint-jean-de-luz-basque-inland',
        name: 'Saint-Jean-de-Luz & Basque Inland Villages',
        instrument: 'Harbor-to-hill village route',
        layout: 'harbor-inland-fold',
        imageQuery: 'Saint Jean de Luz harbor Basque France',
        imageAlt: 'Harbor and waterfront houses in Saint-Jean-de-Luz',
        purpose: 'Use Saint-Jean-de-Luz’s harbor, church and bay as a complete coastal route, adding one inland village only through a verified bus, tour or car connection.',
        summary: 'The protected bay and fishing-port history differ from Biarritz’s surf coast; Sare, Espelette or another inland stop should be chosen for a specific cultural or landscape reason.',
        choices: [
          ['Harbor and old town', 'Keep the port, Maison Louis XIV context, church, market and bay together. This is the clear rail-based day.'],
          ['Coastal path segment', 'Use one signed section with tide, heat and return transport confirmed. Do not assume the entire path is a town promenade.'],
          ['One inland village', 'Choose Sare, Espelette or another reachable place based on the live bus or arranged route, and learn its actual craft, food or landscape context.']
        ],
        access: 'Saint-Jean-de-Luz–Ciboure station is close to the center. Inland villages use regional buses or roads with limited frequency; record the stop name and return before leaving the coast.',
        tradeoff: 'The town, a long coastal hike and several inland villages do not fit one day. The route keeps one coast narrative and one optional inland contract.',
        stages: [
          ['Enter through the harbor side', 'Walk from the station toward the port, noting the return and market schedule before crossing into beach lanes.'],
          ['Read town and bay', 'Connect port, church, civic houses and the sheltered bay, following beach supervision and harbor working boundaries.'],
          ['Commit to path or village', 'Take a bounded signed coastal route or board the verified inland bus. Choose one village and avoid an unplanned road loop.'],
          ['Return to the rail center', 'Come back with one service in reserve, finishing at the market or port rather than a distant beach.']
        ],
        fallback: 'If the coast path is unsafe or inland service fails, keep Saint-Jean-de-Luz and Ciboure with church, market and sheltered bay. Use a museum or food workshop only when current access is confirmed.',
        watch: [
          ['Harbor space is working space', 'Stay clear of loading, boats and fishermen; use signed visitor areas.'],
          ['Coastal paths can close', 'Erosion, weather and maintenance may interrupt a segment. Check official notices and turn back early.'],
          ['Village buses are sparse', 'A reachable outbound village may lack an evening return. Save a backup or use a tour.']
        ],
        duration: 'Allow five to seven hours for Saint-Jean-de-Luz, or a full day when adding one inland village. A long coastal path needs its own day.',
        combine: 'Combine the town with Ciboure or one inland village. Keep Bayonne–Biarritz and the high Pyrenees separate.',
        verify: 'Check market and church access, regional bus, path closures, beach conditions and the final coastal train before leaving.',
        sources: [
          ['https://www.saint-jean-de-luz.com/en/', 'Saint-Jean-de-Luz Tourist Office — official local planning'],
          ['https://www.en-pays-basque.fr/en/', 'Pays Basque tourism — official inland and coastal guide']
        ]
      }),
      g({
        slug: 'gavarnie-cauterets-pyrenees',
        name: 'Gavarnie, Cauterets & Pyrenean Gateways',
        instrument: 'Valley-road trail gate',
        layout: 'mountain-valley-gate',
        imageQuery: 'Cirque de Gavarnie French Pyrenees France',
        imageAlt: 'The great rock walls and waterfalls of the Cirque de Gavarnie',
        purpose: 'Choose one Pyrenean valley base and one signed route whose road, shuttle, weather and ability requirements are current, rather than day-tripping casually from the Atlantic coast.',
        summary: 'Gavarnie and Cauterets open different valleys; Lourdes can be the rail gateway, but the mountain day begins only after the last bus or road connection is solved.',
        choices: [
          ['Gavarnie village and cirque approach', 'Use the official village route toward the cirque within current trail and weather conditions. Longer paths require mountain preparation.'],
          ['Cauterets and Pont d’Espagne', 'Treat village, shuttle or road access and the selected waterfall or lake route as one system. Seasonal controls matter.'],
          ['Lower gateway day', 'Use Lourdes, a spa town or an interpreted lower-valley route when high access is poor. This is a complete fallback, not a consolation loop.']
        ],
        access: 'Rail commonly reaches Lourdes, then regional buses or roads continue into separate valleys. Frequencies are seasonal, mountain roads can close, and Gavarnie and Cauterets cannot be combined by a quick cross-valley transfer.',
        tradeoff: 'The route gives up seeing both major valleys in one day. One gateway and one signed mountain objective preserve weather judgment, walking time and the last descent or bus.',
        stages: [
          ['Reach the correct valley base', 'Confirm the Lourdes connection, valley bus or road status and the final return before leaving the rail corridor.'],
          ['Read the official conditions', 'Use park, commune and weather notices to select the route. Carry layers, water and footwear appropriate to the actual elevation.'],
          ['Commit to one signed objective', 'Walk only the selected village, waterfall, lake or cirque approach, turning back when weather, time or ability reaches the preset limit.'],
          ['Return before mountain options close', 'Reach the village and bus or car with daylight and a backup, then continue to the lodging or rail gateway.']
        ],
        fallback: 'If high roads, lifts or trails close, remain in the valley town, Lourdes or another lower interpreted site. Never replace a closed official route with a social-media shortcut.',
        watch: [
          ['Weather changes above the forecast town', 'Use mountain forecasts and observe cloud, lightning and temperature on the route.'],
          ['Seasonal buses can be one-trip traps', 'Confirm the final return and whether reservations apply before walking away from the stop.'],
          ['Protected-area conduct is structural', 'Stay on signed paths, manage waste, keep distance from wildlife and follow dog or drone restrictions.']
        ],
        duration: 'Give either Gavarnie or Cauterets a full day from a nearby valley base. From Lourdes, expect a long transport day; from the coast, add an overnight.',
        combine: 'Combine one valley with its own town and lower route. Keep the Basque coast and the other Pyrenean valley for separate days.',
        verify: 'Check Pyrenees National Park notices, mountain weather, valley bus or road, parking or shuttle, trail status and the last return immediately before departure.',
        sources: [
          ['https://www.pyrenees-parcnational.fr/en', 'Pyrenees National Park — official conditions and conduct'],
          ['https://www.gavarnie.com/en/', 'Gavarnie-Gèdre tourism — official valley access']
        ]
      })
    ]
  })
];
