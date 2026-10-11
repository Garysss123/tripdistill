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
    reviewDate: '11 October 2026',
    reviewedOn: { iso: '2026-10-11', label: '11 October 2026' },
    name: 'Dordogne & Périgord Noir',
    region: 'Dordogne, Nouvelle-Aquitaine',
    band: 'atlantic-southwest',
    family: 'limestone-river-fieldbook',
    label: 'Limestone and river fieldbook',
    tagline: 'Choose a base and valley before choosing the headline sights.',
    hubIntro: 'Sarlat, the Vézère prehistoric sites and the Dordogne’s cliff villages belong to one broad Périgord trip, but not to one compact day. Rail gets you to Sarlat or Les Eyzies; it does not put you at Lascaux, Font-de-Gaume or a hilltop château. Pick a base around the first two nights, book any timed cave before lodging, then give each valley a full day with its return already solved.',
    searchSummary: 'Plan four nights from one Sarlat or Les Eyzies base for a market-town day, one Vézère day and one Dordogne castles day. TER line D33/L33 serves Sarlat, L34 serves Les Eyzies; summer coaches 337, 338 and 339 are date-dependent, so verify the final leg before booking caves or hotels.',
    stay: 'For three nights, sleep in Sarlat and choose only two full days: Sarlat plus either the Vézère or the castle valley. Four nights suit one base—Sarlat for the market and southern castles, Les Eyzies for early cave entry—plus three full days and a weather or transport buffer. Five nights can split two nights in Sarlat and three in Les Eyzies only when timed visits and the luggage transfer justify moving; otherwise keep one room and book the last mile.',
    transfer: 'TER line D33/L33 links Bordeaux, Bergerac and Sarlat; TER line L34 connects Périgueux, Les Eyzies and Sarlat on its route. Seasonal regional coaches list line 337 Sarlat–Les Eyzies, 338 Dordogne Valley and 339 Vézère Valley; their operating dates and onward links change, and some coaches require advance reservation. No train or coach stop is a promise of a cave shuttle. Check the Nouvelle-Aquitaine timetable search, exact stop, reservation rule and return; prebook a driver or tour where the final leg is absent.',
    season: 'Sarlat’s food market is Wednesday and Saturday morning; the Saturday market is larger, while Thursday’s organic market and winter truffle schedule are seasonal. Regional coach 338 to Castelnaud is shown as a summer service, and the other valley coaches have date-bound calendars. Cave slots, château openings, canoe launches, river levels, heat and harvest traffic also move with season. Check the dated operator calendar, attraction ticket and river notice together before buying a non-refundable room.',
    fallback: 'If a cave slot, seasonal coach, driver or river operator drops out, keep the day in the base town: Sarlat’s market-and-heritage loop or Les Eyzies’ National Museum of Prehistory is a real alternative. Replace a missed river activity with one open château reached by confirmed transport; do not patch rural gaps with an assumed taxi or an unverified bus connection.',
    reviewDisclaimer: 'Recheck date-specific TER and coach itineraries, reservations, market and monument calendars, river notices and weather before travel; no fare, headway or journey-time promise is made here.',
    itineraryLabel: 'Four-night Périgord plan',
    itineraryHeading: 'Keep one base, then give each valley its own day.',
    itineraryIntro: 'The four nights below mean three complete touring days; add another night if arrival or departure removes a day. Book the cave slot and last-mile transfer before fixing the room. A three-night trip should drop one valley rather than rush through all three.',
    itinerary: [
      ['Day 1 · Sarlat and arrival', 'Stay within Sarlat’s walkable center. If it is Wednesday or Saturday, start with the food market; otherwise follow Place du Peyrou, Saint-Sacerdos Cathedral, the Lantern of the Dead and the former Sainte-Marie church market hall. Check the station or driver return before a long dinner.'],
      ['Day 2 · Choose the Vézère anchor', 'Use TER L34 to Les Eyzies when its date-specific service fits, then visit the National Museum of Prehistory and one pre-booked original site with a confirmed local transfer. Or use Sarlat as the base for a separately booked Montignac/Lascaux IV day. Do not combine both branches without checking their connection.'],
      ['Day 3 · Dordogne river and one château', 'Choose Beynac or Castelnaud, not both by default. Use the summer line 338 only if it runs on the exact date and has a workable return; otherwise arrange a car, driver or tour. Pair the hill visit with La Roque-Gageac at river level only when your transfer or named boat departure is confirmed.'],
      ['Day 4 · Buffer and onward journey', 'Keep this for the valley you could not fit, a weather recovery or a slower Sarlat morning. Collect luggage and return to the rail station with a margin; a rural attraction is not a safe final stop before a fixed train unless the transfer is booked.']
    ],
    faq: [
      ['How many nights make the Dordogne workable?', 'Four nights allow one Sarlat or Les Eyzies base and three complete days: the town, one Vézère day and one Dordogne château day. With three nights, choose only two full-day themes; five nights allow a split base if the timed cave and luggage transfer support it.'],
      ['Can I tour the valleys without a car?', 'Some rail and seasonal coach links serve Sarlat and Les Eyzies, including routes 337, 338 and 339 on date-dependent calendars. They do not guarantee a link to every cave, château or return. Confirm exact stops and both directions, reserve on-demand coaches where required, or book a driver/tour.'],
      ['When should I visit Sarlat’s market?', 'The city lists food markets on Wednesday and Saturday mornings, with Saturday also hosting the wider market. Thursday organic and winter truffle markets follow separate seasonal calendars; confirm the current hours and location before building the day.']
    ],
    sources: [
      ['https://www.dordogne-perigord-tourisme.fr/cote-pratique/comment-se-deplacer-en-dordogne-sans-voiture/', 'Dordogne Périgord Tourism — named TER and seasonal regional coach routes'],
      ['https://transports.nouvelle-aquitaine.fr/cars-regionaux/dordogne', 'Nouvelle-Aquitaine regional coaches — live Dordogne schedules and reservation notes'],
      ['https://www.ter.sncf.com/nouvelle-aquitaine/trajet-bordeaux-sarlat', 'TER Nouvelle-Aquitaine — Bordeaux–Bergerac–Sarlat rail route'],
      ['https://en.sarlat-tourisme.com/discover-sarlat-and-the-perigord/a-gourmet-escapade-through-the-sarlat-market/', 'Sarlat Tourism — market days and seasonal food markets'],
      ['https://sarlat.fr/mon-quotidien/commerces-et-marches/les-marches/', 'City of Sarlat — current market calendar']
    ],
    guides: [
      g({
        slug: 'sarlat-market-old-town',
        name: 'Sarlat Market & Old Town',
        reviewDate: '11 October 2026',
        reviewedOn: { iso: '2026-10-11', label: '11 October 2026' },
        instrument: 'Market-day limestone clock',
        layout: 'market-street-clock',
        imageQuery: 'Sarlat la Caneda old town market Dordogne France',
        imageAlt: 'Market stalls beneath timber shelters on Sarlat’s Place de la Liberté',
        purpose: 'Plan around Sarlat’s separate Wednesday and Saturday markets, then connect its named medieval landmarks on foot and protect the station or parking return.',
        summary: 'Use Wednesday or Saturday morning for the food market, then walk Place du Peyrou, Saint-Sacerdos Cathedral, the Lantern of the Dead and Sainte-Marie’s covered market hall. Keep rural caves and castles for a separately routed day.',
        searchSummary: 'Sarlat’s food market is Wednesday and Saturday morning; trace Place du Peyrou, Saint-Sacerdos Cathedral, the Lantern of the Dead and the Sainte-Marie covered market hall on foot. Check the station return before adding any rural stop.',
        choices: [
          ['Wednesday or Saturday market', 'The city lists food stalls from 08:00 to 13:00; Saturday also has a broader market. Arrive early, keep an open walking lane and choose one heritage stop after the busiest period.'],
          ['Non-market heritage loop', 'Walk from Place du Peyrou and La Boétie’s house to Saint-Sacerdos Cathedral, the Lantern of the Dead and Sainte-Marie’s covered market hall. Its panoramic lift has its own seasonal hours and ticket; check before relying on it.'],
          ['Sarlat as rural base', 'Keep the town for early or evening hours and reserve the main day for one valley circuit with transport already arranged.']
        ],
        access: 'Sarlat station is south of the historic core. Check TER D33/L33 or the SNCF itinerary for your date, then walk into town with luggage kept out of the market lanes; drivers should use signed public parking outside restricted streets. Do not rely on a taxi appearing for the return.',
        tradeoff: 'The food market is a morning commitment, while the old-town walk and lift need their own time. Adding Lascaux or a castle creates a second transport contract and usually turns the day into a rushed transfer rather than a Sarlat visit.',
        stages: [
          ['Start at Place du Peyrou', 'On Wednesday or Saturday, reach the market early and keep Place de la Liberté clear for vendors. On another day, begin at Place du Peyrou and La Boétie’s house.'],
          ['Walk the medieval center', 'Continue to Saint-Sacerdos Cathedral and the Lantern of the Dead, then turn toward the former Sainte-Marie church, now the covered market hall.'],
          ['Choose market or viewpoint time', 'Eat and shop before 13:00 on a food-market day, or check the former church’s panoramic lift hours and tickets for a compact view.'],
          ['Return through the south edge', 'Walk back toward the station or your designated parking. Use TER D33/L33 only after checking the day’s final useful departure; skip a distant add-on if it makes the return fragile.']
        ],
        fallback: 'If it is not a market day, follow the Place du Peyrou–cathedral–Lantern–Sainte-Marie walk and confirm the lift or a guided visit. If rain closes the viewpoint or rail is disrupted, keep the day within the old town and lodging base instead of adding a one-way rural taxi.',
        watch: [
          ['Market hours are not interchangeable', 'The Wednesday and Saturday food markets run in the morning; the wider Saturday market and seasonal Thursday/truffle markets follow separate calendars. Check the City of Sarlat listing for the date.'],
          ['The lift is a seasonal attraction', 'The Sainte-Marie panoramic lift operates on its own calendar and may not be open when the covered hall is. Confirm its ticket and hours before planning around the viewpoint.'],
          ['Food names need informed buying', 'Ask about origin and season rather than assuming every stall product is local or currently harvested.']
        ],
        duration: 'Allow five to seven hours for the market, old-town walk and meal; reserve a separate day for caves or castles. A non-market landmark loop needs about three to four hours, plus the station transfer.',
        combine: 'Pair the morning market with the named old-town loop only. Save Montignac/Lascaux, Les Eyzies and the Dordogne castles for full days with a confirmed return.',
        verify: 'Check the City of Sarlat market calendar, lift tickets and seasonal hours, TER D33/L33 for the exact date, the station walk and designated parking before departure.',
        sources: [
          ['https://en.sarlat-tourisme.com/discover-sarlat-and-the-perigord/a-gourmet-escapade-through-the-sarlat-market/', 'Sarlat Tourism — official food and market days'],
          ['https://sarlat.fr/mon-quotidien/commerces-et-marches/les-marches/', 'City of Sarlat — current market calendar'],
          ['https://en.sarlat-tourisme.com/choose-your-activities/discovery-tours-of-sarlat/a-birds-eye-view-of-sarlat/', 'Sarlat Tourism — Sainte-Marie panoramic lift'],
          ['https://www.ter.sncf.com/nouvelle-aquitaine/trajet-bordeaux-sarlat', 'TER Nouvelle-Aquitaine — Sarlat rail connection']
        ]
      }),
      g({
        slug: 'vezere-prehistory',
        name: 'Vézère Valley Prehistory',
        reviewDate: '11 October 2026',
        reviewedOn: { iso: '2026-10-11', label: '11 October 2026' },
        instrument: 'Timed-cave evidence ledger',
        layout: 'prehistoric-valley-ledger',
        imageQuery: 'Vezere Valley Les Eyzies Dordogne France cliffs',
        imageAlt: 'Limestone overhang rising above buildings in Les Eyzies-de-Tayac',
        purpose: 'Choose Montignac’s Lascaux IV replica or a booked original cave near Les Eyzies, then add one museum stop without inventing a rural bus connection.',
        summary: 'Use TER L34 to Les Eyzies for the National Museum of Prehistory and a separately booked cave transfer, or route a full day from Sarlat to Montignac for Lascaux IV. Lascaux IV is a complete replica; the original cave remains closed to visitors.',
        searchSummary: 'Compare the L34 rail stop at Les Eyzies and its National Museum of Prehistory with a separate Sarlat–Montignac/Lascaux IV day. Reserve timed cave entry first, then confirm the last mile and return; Lascaux IV is a replica, not the closed original.',
        choices: [
          ['Lascaux interpretation', 'Use Lascaux IV and Montignac as a complete interpretive visit. It is a facsimile center, which should be stated clearly rather than presented as the original cave.'],
          ['Les Eyzies museum base', 'Build around the National Museum of Prehistory and a nearby official shelter or site. This gives artifacts and landscape a strong connection.'],
          ['Limited-access original cave', 'Pursue Font-de-Gaume or another original site only through its current official reservation rules. Scarcity is not a reason to use unofficial sellers.']
        ],
        access: 'TER line L34 serves Les Eyzies on its Périgueux–Sarlat route; regional coach 337 is listed seasonally between Sarlat and Les Eyzies, while 339 serves the Vézère Valley. Neither is a guaranteed cave shuttle. Lascaux IV is in Montignac, reached by a separate road transfer; reserve a driver, operator or car and confirm both directions before buying a timed ticket.',
        tradeoff: 'Les Eyzies and Montignac are separate day plans: choose the National Museum of Prehistory plus one officially booked original site around Les Eyzies, or Lascaux IV and its interpretation in Montignac. The official Lascaux visit averages 1–1.5 hours, with 2–3 hours recommended for the whole center; leave other timed visits for another day.',
        stages: [
          ['Choose one rail or road anchor', 'For Les Eyzies, check TER L34 to Les Eyzies station and walk/transfer to the town; for Lascaux, start from Montignac with the final road leg arranged.'],
          ['Complete the timed booking', 'For Lascaux IV, select the date and time on the official ticket office; for Font-de-Gaume, use the Centre des monuments nationaux ticket channel and follow its arrival instructions.'],
          ['Add one nearby context stop', 'At Les Eyzies, give the National Museum of Prehistory a substantial block. In Montignac, use Lascaux IV’s interpretation rather than adding an unverified second cave transfer.'],
          ['Protect the station or driver return', 'Check the last useful L34 train or the booked pickup before entering a site. Do not rely on a taxi appearing at a cave car park.']
        ],
        fallback: 'If Font-de-Gaume has no official timed ticket, use the National Museum of Prehistory and a confirmed Les Eyzies site; if Lascaux IV is sold out, keep the day in the museum or town rather than buying from an unofficial reseller. Rain or closure favors one indoor museum, not a chain of substitute caves.',
        watch: [
          ['Original and replica are different claims', 'Label the experience accurately and use official interpretation to understand why originals need protection.'],
          ['Tickets may be personal and scarce', 'Use Lascaux’s official date/time ticket office or the national-monument booking route for Font-de-Gaume. Recheck identification, check-in and cancellation rules for your ticket.'],
          ['The valley buses are seasonal', 'Coach 337/339 calendars and the TER L34 return can leave large gaps. Check current operator schedules; reserve on-demand service in advance where required.']
        ],
        duration: 'Allow a full day for one major cave experience and one contextual site. Two towns or several timed caves need another day.',
        combine: 'Combine Lascaux with Montignac, or an original cave with Les Eyzies museum. Keep Dordogne castles and Sarlat market separate.',
        verify: 'Check Lascaux or CMN ticket status, the National Museum of Prehistory calendar, TER L34 or coach 337/339 dates, cave check-in rules and the arranged last mile for the same date.',
        sources: [
          ['https://lascaux.fr/en/lascaux-ticket-office/', 'Lascaux IV — official date-and-time ticket office'],
          ['https://lascaux.fr/en/questions/', 'Lascaux — official visit duration and original-cave closure FAQ'],
          ['https://musee-prehistoire-eyzies.fr/en/opening-hours', 'National Museum of Prehistory — current seasonal opening calendar'],
          ['https://tickets.monuments-nationaux.fr/fr-FR/familles?site=2117969240920404140', 'Centre des monuments nationaux — Font-de-Gaume official ticket office'],
          ['https://www.dordogne-perigord-tourisme.fr/cote-pratique/comment-se-deplacer-en-dordogne-sans-voiture/', 'Dordogne Périgord Tourism — TER and seasonal coach line list']
        ]
      }),
      g({
        slug: 'dordogne-castles-villages',
        name: 'Dordogne Valley Castles & Cliff Villages',
        reviewDate: '11 October 2026',
        reviewedOn: { iso: '2026-10-11', label: '11 October 2026' },
        instrument: 'River-bank castle selector',
        layout: 'castle-river-selector',
        imageQuery: 'Beynac Dordogne river castle France panorama',
        imageAlt: 'Beynac castle and village above the Dordogne River',
        purpose: 'Compare the steep Beynac ascent, Castelnaud’s seasonal Sarlat coach and La Roque-Gageac’s named boat departure before choosing one hill-and-river day.',
        summary: 'Use summer regional coach 338 only when its dated Sarlat–Castelnaud service and return fit; otherwise book a driver or car. Beynac’s designated lower parking adds a steep 15-minute climb, while Gabares Norbert departs and returns to Port de la Malartrie at La Roque-Gageac.',
        searchSummary: 'For one Dordogne day, compare Castelnaud’s summer regional coach 338 from Sarlat with its dated timetable, or book transport to Beynac’s designated parking and allow the uphill walk. Gabares Norbert boats return to Port de la Malartrie; verify departure date and river conditions.',
        choices: [
          ['Beynac and French-bank history', 'Climb the village and visit the château where open, then use river viewpoints. Steep access makes this a substantial half-day.'],
          ['Castelnaud and conflict interpretation', 'Use the château museum and opposing-bank geography to understand the valley. Pair with one nearby village, not another distant castle.'],
          ['River-level route', 'Use a licensed canoe or boat product with named start, finish and shuttle, or stay in La Roque-Gageac for a lower-impact village day.']
        ],
        access: 'Regional coach 338 is shown by Castelnaud as a summer Sarlat–Castelnaud-la-Chapelle link; verify the date, stop and return in the Nouvelle-Aquitaine schedule search before using it. At Beynac, use the designated village parking: the lower parking-to-château walk takes about 15 minutes uphill. Gabares Norbert sails from and returns to Port de la Malartrie in La Roque-Gageac; check its current departures and river notices.',
        tradeoff: 'Beynac and Castelnaud both involve steep historic access; combining both plus a village and boat usually turns a scenic day into a transfer race. Pick one château, then either the La Roque-Gageac boat or a lower riverside walk. A canoe route has separate launch, endpoint and shuttle logistics.',
        stages: [
          ['Select the transport branch', 'For Castelnaud, test seasonal line 338 against your date-specific Sarlat departure and return. For Beynac or Domme, arrange the vehicle/driver and legal parking before leaving Sarlat.'],
          ['Visit one château', 'At Beynac, allow the designated lower parking’s roughly 15-minute uphill walk and use the marked village approach. At Castelnaud, check the museum calendar and parking entrance before climbing.'],
          ['Add a named river option', 'From La Roque-Gageac, book Gabares Norbert at Port de la Malartrie for its listed round trip, or use a licensed canoe operator only after confirming the endpoint and shuttle.'],
          ['Close at the same agreed return', 'Reach the bus stop or driver pickup before the final planned departure; check the river operator’s last return and current water restrictions before adding a paddle.']
        ],
        fallback: 'If coach 338 does not run or the return is weak, keep Sarlat or book a driver rather than attempting an improvised taxi chain. If river levels cancel the boat or canoe, retain one open château and village walk; for steep climbs, choose a lower riverside stop and confirm its accessible path.',
        watch: [
          ['Cliff villages are steep', 'Cobbles, heat and stairs require footwear, water and a conservative route.'],
          ['Coach 338 is seasonal', 'The castle’s own access page describes a summer link. Do not treat it as year-round; check the operator’s date-specific timetable and any reservation requirement.'],
          ['Parking pressure affects residents', 'Use designated areas and never enter narrow village lanes to save a climb.']
        ],
        duration: 'Allow a full day for one castle, one village and a river activity. A castle-and-village route without paddling needs five to seven hours.',
        combine: 'Combine Beynac with a nearby river stop or Castelnaud with one neighboring village. Keep the Vézère caves and Sarlat market separate.',
        verify: 'Check line 338 dates and return, Beynac parking/approach, the château calendar, Gabares Norbert or canoe booking, river-level notice and driver pickup for the exact travel date.',
        sources: [
          ['https://castelnaud.com/access-services/?lang=en', 'Château de Castelnaud — summer line 338, station and parking access'],
          ['https://transports.nouvelle-aquitaine.fr/cars-regionaux/dordogne', 'Nouvelle-Aquitaine regional coaches — dated line 338 timetable'],
          ['https://chateau-beynac.com/infos-pratiques/?lang=en', 'Château de Beynac — designated parking and uphill village approach'],
          ['https://gabarres.com/', 'Gabares Norbert — La Roque-Gageac departure and return port'],
          ['https://www.sites-les-eyzies.fr/en/visit/practical-information', 'Les Eyzies tourism — site and valley access information']
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
        hubAccess: 'Saint-Jean-de-Luz–Ciboure station is close to the center. Inland villages use regional buses or roads with limited frequency; record the stop name and return before leaving the coast.',
        hubTradeoff: 'The town, a long coastal hike and several inland villages do not fit one day. The route keeps one coast narrative and one optional inland contract.',
        hubDuration: 'Allow five to seven hours for Saint-Jean-de-Luz, or a full day when adding one inland village. A long coastal path needs its own day.',
        searchSummary: 'Walk the Saint-Jean-de-Luz harbor and bay, then add either Sare by a date-checked TXIK TXAK itinerary or one bounded coastal path section; return to the rail station with a service buffer.',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        choices: [
          ['Rail-based Luz and Ciboure', 'Start at Saint-Jean-de-Luz–Ciboure station; join the harbor, Saint-Jean-Baptiste church, old streets and bay as one walk, then cross to Ciboure only if you still have time for the return train.'],
          ['Sare as the inland day', 'Use TXIK TXAK’s live planner for the exact date from the Luz station area to a serving stop in Sare. Confirm a usable outbound and return before buying or boarding; the old route listing is not a current timetable. The cave-side village and Grottes de Sare need their own timed-entry check.'],
          ['Bounded coastal path', 'Choose one signed section from the town, check local path and tide notices, and set a turnaround point before leaving. This is a walking day, not an add-on to Sare.']
        ],
        access: 'Saint-Jean-de-Luz–Ciboure is on the coastal TER corridor between Bayonne and Hendaye, and its station is within walking distance of the town center. For Sare, plan the date in TXIK TXAK’s live itinerary and traffic tools, then save the exact stop and last return; do not assume Espelette is a same-day onward connection. A car or prebooked driver makes the inland pair more flexible, but parking and the village approach still need planning.',
        tradeoff: 'Stay in Luz for the simple rail day and add Ciboure on foot. Choose only one inland village for the transit version; Sare’s cave visit and Espelette’s market/pepper story are different outings and the official market is Wednesday. A longer coastal walk replaces the bus excursion.',
        stages: [
          ['Arrive with the return saved', 'From the TER station, walk toward the port and identify the church/market side and your chosen train. If Sare is the plan, resolve the TXIK TXAK journey and its return before leaving the platform area.'],
          ['Read the working harbor and bay', 'Link the port, Saint-Jean-Baptiste church and compact old town, then use the sheltered bay for a shorter beach pause. Keep clear of active quay work and follow current swimming supervision.'],
          ['Make one coast-to-inland choice', 'For Sare, walk from the verified bus stop to the booked cave or village route; for the coast, stay on the open signed path and turn at your preset landmark. Do not combine two villages by wishful transfers.'],
          ['Return to Luz before the last connection', 'Backtrack to the same confirmed bus stop or finish in the town center well before the train. If the return itinerary is thin, skip the extra Ciboure loop and keep a taxi/driver number only as a prearranged fallback.']
        ],
        fallback: 'If the Sare service is absent on your date, the return is too tight, or the coast path is closed by erosion or weather, make Saint-Jean-de-Luz and Ciboure the full day: harbor, church, public lanes and sheltered bay. Replace the walk with a currently open town museum or booked food visit; never improvise a roadside transfer.',
        watch: [
          ['The displayed return is the deciding test', 'TXIK TXAK publishes live itineraries and traffic notices. Check both directions for your date and do not treat an archived line page as proof of today’s operation.'],
          ['The coast path is exposed', 'Rain, swell, erosion or maintenance can close a section; check local notices and stop at the first closure or unsafe edge.'],
          ['Village opening days change the story', 'Espelette’s official market is Wednesday; the pepper harvest/drying display is seasonal. Confirm caves, workshops and meal service before committing to a village visit.']
        ],
        duration: 'Allow five to six hours for Luz and Ciboure at an easy pace. Make Sare a separate full day once bus waits, village walking and a reserved cave visit are counted. A long coastal-path section also deserves its own day.',
        combine: 'Combine Luz with Ciboure on foot, or choose one inland village with a date-checked outbound and return. Keep Espelette, Sare caves, a long coastal hike and Bayonne–Biarritz as separate day contracts.',
        verify: 'Check the TER Nouvelle-Aquitaine planner, TXIK TXAK itinerary plus traffic notice for both directions, cave/workshop hours, Wednesday market if choosing Espelette, beach supervision and any coastal-path closure.',
        sources: [
          ['https://www.ter.sncf.com/nouvelle-aquitaine', 'SNCF TER Nouvelle-Aquitaine — official regional rail planner'],
          ['https://www.txiktxak.fr/', 'TXIK TXAK — live journey planner, timetables and traffic notices'],
          ['https://www.saint-jean-de-luz.com/en/', 'Saint-Jean-de-Luz Tourist Office — official town planning'],
          ['https://www.en-pays-basque.fr/en/territory-and-destination/nivelle-valley/espelette/', 'Destination Pays Basque — official Espelette village, market and pepper information']
        ],
        siteContext: {
          label: 'COAST AND INLAND CHOICES',
          heading: 'Give the harbor, path and inland village different days',
          intro: 'Saint-Jean-de-Luz is a rail-easy coastal town; Sare and Espelette sit inland and require a separately verified return. Pick one geography before you leave the station.',
          details: [
            ['Harbor and church', 'Use the port and Saint-Jean-Baptiste church as the walk’s anchors, then cross toward the bay. Stay in public streets around the active fishing quay.'],
            ['Sare by bus', 'Run the live TXIK TXAK planner for your actual date, save both legs and the stop, then check Grottes de Sare timed entry. Do not infer today’s timetable from a past route page.'],
            ['Espelette’s market', 'The official Destination Pays Basque guide identifies the village market on Wednesday. Pepper displays follow the crop season; choose another village feature outside it.'],
            ['Coastal-path segment', 'Walk one signed section only after current local access and weather are clear; the path is a separate itinerary from the inland bus.']
          ]
        }
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
        hubAccess: 'Rail commonly reaches Lourdes, then regional buses or roads continue into separate valleys. Frequencies are seasonal, mountain roads can close, and Gavarnie and Cauterets cannot be combined by a quick cross-valley transfer.',
        hubTradeoff: 'The route gives up seeing both major valleys in one day. One gateway and one signed mountain objective preserve weather judgment, walking time and the last descent or bus.',
        hubDuration: 'Give either Gavarnie or Cauterets a full day from a nearby valley base. From Lourdes, expect a long transport day; from the coast, add an overnight.',
        searchSummary: 'From Lourdes rail station, select the 965 liO branch for Cauterets or Luz/Gavarnie; Gavarnie is seasonal. Stay in the chosen valley, check mountain conditions, and verify the exact return before hiking.',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        choices: [
          ['Gavarnie by the seasonal Lourdes branch', 'The official 965 service page describes a seasonal Gavarnie stop. Use the published season only as a planning clue; confirm this year’s timetable, return bus and village trail status before choosing the cirque approach.'],
          ['Cauterets and Pont d’Espagne', 'Take the Cauterets branch from Lourdes and sleep in Cauterets if visiting the town, waterfalls or Pont d’Espagne. Check the current road/parking or shuttle arrangement separately; the bus to town does not promise a through transfer to every trailhead.'],
          ['Lower-valley or Lourdes day', 'When mountain weather or seasonal access fails, keep the plan to Lourdes or one lower valley town such as Argelès-Gazost. This avoids using a high trail as a weather gamble.']
        ],
        access: 'The 965 liO service starts at Lourdes SNCF and branches toward Cauterets, Luz-Saint-Sauveur and Barèges; the official Occitanie tourism page says Gavarnie is an additional seasonal stop, with separate summer and winter windows. These are distinct valley destinations, not a guaranteed through loop. Choose the branch from the current liO date-specific planner, verify both return legs before booking lodging, and take rail to Lourdes rather than attempting a day trip from the Basque coast.',
        tradeoff: 'A Cauterets base suits the Cauterets/Pont d’Espagne side; a Gavarnie, Gèdre or Luz base suits the cirque side. Lourdes is the rail fallback with more lodging and indoor options but makes either mountain day long. Give one valley at least one overnight instead of changing valley by bus after a hike.',
        stages: [
          ['Choose the 965 branch at Lourdes', 'Arrive at Lourdes SNCF with a date-specific route saved. Check whether the service reaches your selected town that day and identify the exact final return before leaving the station.'],
          ['Sleep near the objective', 'Use Cauterets for its own valley and town; use Gavarnie/Gèdre/Luz for the cirque corridor. Lourdes is the fallback base when trains or indoor visits matter more than an early trail start.'],
          ['Select one trail after the forecast', 'Check Météo-France mountain conditions, National Park notices and any local road/shuttle rule. Walk the signed village approach or one verified Cauterets/Pont d’Espagne path within daylight and ability.'],
          ['Return to the same transport spine', 'Be at the chosen stop before the booked or listed departure and keep a lower-town plan if weather shortens the walk. Do not schedule a Cauterets-to-Gavarnie cross-valley bus connection unless the operator confirms it for that date.']
        ],
        fallback: 'If storms, cloud, snow, a closed road or unavailable seasonal bus remove the high objective, stay in Lourdes or the valley town you have already reached. Use a currently open local museum, spa, town walk or lower signed path; do not backfill the day with an unofficial trail or a guessed cross-valley connection.',
        watch: [
          ['965 has branches and one seasonal extension', 'Cauterets, Luz and Barèges are separate destinations; Gavarnie is listed as seasonal. Match the current timetable to the actual date and do not read the route overview as a guaranteed departure.'],
          ['Mountain weather differs from Lourdes', 'Use the Météo-France mountain forecast and turn back for thunder, rapid cloud, wind, cold or poor visibility; carry warm/wet layers even on a warm valley morning.'],
          ['Access above town can be separate', 'A bus to Cauterets or Gavarnie does not settle access to Pont d’Espagne, a trailhead or parking. Check the local operator/municipality and obey closures, park rules and trail signs.']
        ],
        duration: 'Reserve a full day plus an overnight for either Gavarnie or Cauterets. A Lourdes out-and-back uses much of the day in transport; from the Basque coast, plan a separate transfer day and at least one night in the mountains.',
        combine: 'Pair Cauterets with one Pont d’Espagne objective, or Gavarnie with its village/cirque approach. Combine neither mountain destination with the Basque coast in a day; treat switching valley bases as a separate transfer.',
        verify: 'Check the current liO 965 planner and return for your date, the seasonal Gavarnie service window, access between town and trailhead, Météo-France mountain forecast, National Park notices, road closures and trail status.',
        sources: [
          ['https://www.visit-occitanie.com/en/rail-tour/car/965-lio-bus-service/', 'Visit Occitanie — 965 branches, Lourdes origin and seasonal Gavarnie service'],
          ['https://www.lio-occitanie.fr/', 'liO Occitanie — official trip planner, timetables and traffic'],
          ['https://meteofrance.com/meteo-montagne', 'Météo-France — official mountain forecasts'],
          ['https://www.pyrenees-parcnational.fr/en', 'Pyrenees National Park — official conditions and protected-area conduct'],
          ['https://www.gavarnie.com/en/', 'Gavarnie-Gèdre tourism — official village and valley access'],
          ['https://www.cauterets.com/en/', 'Cauterets Tourism — official local access and visitor information']
        ],
        siteContext: {
          label: 'THREE VALLEY GATES',
          heading: 'Lourdes is the rail gateway; the valleys remain separate',
          intro: 'The 965 liO overview names different Lourdes branches and a seasonal extension to Gavarnie. Pick one destination and secure that return before choosing a trail.',
          details: [
            ['Cauterets', 'Choose this branch for the spa town and its own Pont d’Espagne access system. Confirm the onward road, parking or seasonal shuttle for your selected trailhead.'],
            ['Gavarnie and Gèdre', 'The official regional guide describes an added seasonal Lourdes–Gavarnie stop. Check this year’s summer or winter timetable and the village-to-cirque route status; the hike length and surface depend on conditions.'],
            ['Luz-Saint-Sauveur and Barèges', 'These are separate line 965 branches, useful as lower-valley bases. They do not form an assumed same-day through itinerary with Cauterets.'],
            ['Lourdes', 'Sleep here when rail reliability, indoor options or a non-mountain day is the priority. The trade-off is more time on the mountain bus on the selected day.']
          ]
        }
      })
    ]
  })
];
