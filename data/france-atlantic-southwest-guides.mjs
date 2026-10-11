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
    tagline: 'Set one Bordeaux base, then give the vineyard hill and bay their own days.',
    reviewedOn: { label: '11 October 2026', iso: '2026-10-11' },
    countryCardIntro: 'Bordeaux’s tram city, Saint-Émilion’s vineyard hill and Arcachon Bay’s dune-and-tide landscape are three complete systems. Regional trains make each…',
    hubIntro: 'Gironde looks compact on a map but runs on three different systems: Bordeaux’s TBM tram network, TER rail to Saint-Émilion and Arcachon, then a separate last mile to a booked cellar or the shifting Dune du Pilat. Use Bordeaux Saint-Jean as the hinge, confirm both legs of every excursion, and choose either the dune or a bay crossing on the coastal day.',
    stay: 'Three nights in central Bordeaux near a tram stop suit one full city day and one major excursion; choose Saint-Émilion or Arcachon, not both at a relaxed pace. Four nights keep one Bordeaux day plus separate full days for each. Five nights add a second city or weather buffer day. Stay near Saint-Émilion for vineyard evenings and an early appointment, or in Arcachon for dawn shore walks and boat departures; either local night reduces the return commute but adds a hotel move.',
    transfer: 'Use TBM tram B between central Bordeaux and the La Cité du Vin stop, and TER Nouvelle-Aquitaine from Bordeaux Saint-Jean toward Saint-Émilion or Arcachon. Saint-Émilion station is below the village; an estate may need a prearranged pickup. For the dune, start at Baïa’s official Dune du Pilat stop page, which links the Gare d’Arcachon–Dune du Pilat service and currently identifies on-demand transport; check whether the date requires a reservation. For Cap Ferret, use the UBA crossing from Arcachon Thiers to Bélisaire and confirm the return sailing. Verify live service notices; this guide does not promise a frequency or fare.',
    season: 'Summer heat makes the exposed Garonne quays, uphill Saint-Émilion approach and loose dune sand harder; start early, carry water and shorten the outdoor route. Harvest work can limit cellar appointments, so book one producer directly and follow its access instructions. Dune stairs are seasonal and may be removed while the sand moves; official access, fire and restoration notices override the plan. Check Baïa and UBA service for the exact date; the UBA operator notes low-tide access difficulty for wheelchair users at its piers.',
    fallback: 'Keep a Bordeaux city day ready when TER, a cellar appointment or coastal access fails: use one confirmed museum, covered market or tram-linked neighborhood. If the dune is closed or unsafe, stay in Arcachon town and use the Ville d’Hiver or waterfront; take a boat only after the operator confirms the intended crossing and return.',
    reviewDisclaimer: 'Service, opening, fire, sand-stair, boat and ticket conditions change. The linked authorities set the current rules; no fixed fares or departure times are promised here.',
    itineraryLabel: 'Four nights · Bordeaux base plan',
    itineraryHeading: 'Arrival buffer, city day, vineyard day, bay day.',
    itineraryIntro: 'Sleep near a central TBM stop for all four nights. Keep arrival and departure partial; the three middle days each have one operating system and one return contract.',
    itinerary: [
      ['Arrival · settle in', 'Reach central Bordeaux from Saint-Jean by TBM tram or a direct walk; check the next morning’s TER and buy water and snacks before the early start.'],
      ['Full day · Bordeaux', 'Walk Place de la Bourse and the quays, choose one central civic or museum block, then use tram B to La Cité du Vin only if its timed visit is confirmed.'],
      ['Full day · Saint-Émilion', 'Take TER to Saint-Émilion, climb to the village, and choose an official monument tour or one winery appointment with transport explicitly arranged. Return to the station with a buffer.'],
      ['Full day · Arcachon Bay', 'Take TER to Arcachon and choose the dune by date-checked Baïa service or the UBA boat crossing to Cap Ferret. Do not chain both; protect the confirmed route back.'],
      ['Departure · margin', 'Use a spare morning for the city or recover a weather-displaced coastal day only if the train, access and lodging plan still fit.']
    ],
    faq: [
      ['How many nights suit all three places?', 'Four nights allow a full Bordeaux day and separate Saint-Émilion and Arcachon days from one central base, with arrival and departure treated as partial. Three nights means choosing one excursion; five adds a useful weather or second city day.'],
      ['Can I walk from Saint-Émilion station to a winery?', 'The station is below the village and many estates are farther across working vineyard roads. Walk to the village only if the route and your mobility suit it; arrange the estate transfer and return before booking.'],
      ['Can I combine the dune and Cap Ferret?', 'Plan one as the main coastal commitment. The Dune du Pilat and UBA crossing have different last-mile and return systems, and weather, tide or seasonal operation can erase the connection.'],
      ['When do I need to reserve?', 'Book the specific Saint-Émilion monument tour or estate appointment and any dated Cité du Vin visit once the travel day is set. Recheck TER, Baïa and UBA for the exact date before departure.']
    ],
    sources: [
      ['https://www.bordeaux-tourism.co.uk/', 'Bordeaux Tourism — official city and regional guide'],
      ['https://www.gironde-tourisme.com/', 'Gironde Tourism — official regional planning'],
      ['https://www.infotbm.com/en/network-maps.html', 'TBM — official network maps and route planning'],
      ['https://www.ter.sncf.com/nouvelle-aquitaine', 'TER Nouvelle-Aquitaine — official regional rail information'],
      ['https://www.bus-baia.fr/arret-dune-du-pilat-a10.html', 'Baïa — official Dune du Pilat stop and date-specific service links'],
      ['https://bateliers-arcachon.com/navettes/arcachon-cap-ferret-2/', 'Union des Bateliers Arcachonnais — official Arcachon–Cap Ferret shuttle'],
      ['https://meteofrance.com/', 'Météo-France — official forecasts and warnings']
    ],
    guides: [
      g({
        slug: 'bordeaux-river-wine-city',
        name: 'Bordeaux Riverfront & Wine City',
        instrument: 'Tram-and-quay urban decanter',
        layout: 'river-city-decanter',
        imageQuery: 'Bordeaux Place de la Bourse Garonne France',
        imageAlt: 'Place de la Bourse and its facade lights reflected in the Garonne at night',
        imageCreditTitle: 'Place de la Bourse at night, Bordeaux',
        imageCaption: 'Place de la Bourse and its night reflection on the Garonne · Nataloche · CC BY-SA 4.0',
        imageEditNote: 'Resized, cropped for display and converted to WebP; changes disclosed. Shared under the same CC BY-SA 4.0 license.',
        purpose: 'Build a northbound day from Bordeaux Saint-Jean through the historic center to one tram-served river or wine stop, with a timed visit and a direct return line.',
        summary: 'Follow Place de la Bourse and the Garonne quays once, then choose either a central heritage visit or tram B to La Cité du Vin. The night photograph shows the illuminated facade and river reflection, not daytime conditions.',
        choices: [
          ['Historic center and civic core', 'Begin at Place de la Bourse, follow the Garonne quays, then walk inland to Cathédrale Saint-André and Hôtel de Ville or Musée d’Aquitaine. Choose one interior.'],
          ['Cité du Vin by tram B', 'Board tram B for the La Cité du Vin stop, a short walk from the entrance. Reserve a date-specific visit if needed; tasting is optional and does not replace lunch.'],
          ['Chartrons and Bassins à Flot', 'Follow the northbound tram and river corridor to one confirmed exhibition or the former docks. This sacrifices the full southern historic loop.']
        ],
        access: 'From Bordeaux Saint-Jean, use a TBM tram toward the center or walk north if you have time and light luggage. Tram B serves the named La Cité du Vin stop; the museum is about a two-minute walk from it. Check the live TBM map and service notices before placing a timed visit after arrival.',
        tradeoff: 'Place de la Bourse, the cathedral area and one major interior make a full day. A market, long lunch, Cité du Vin and Bassins des Lumières do not fit as equal-length visits; choose the northern branch or keep the day central.',
        hubDuration: 'One full day: six to eight hours for the center, quays and one reserved interior; shorten to a central walk if arriving by train that morning.',
        hubAccess: 'Bordeaux Saint-Jean → central TBM stop → Place de la Bourse → Saint-André/Hôtel de Ville → tram B La Cité du Vin, if selected. Start from the museum only when a timed ticket makes the reverse line useful.',
        hubTradeoff: 'The city route trades a second museum and a vineyard excursion for a coherent river-to-tram day.',
        stages: [
          ['Start at Place de la Bourse', 'From a central tram stop, walk the square, pass the Miroir d’eau and orient along the Garonne. The image is a night view; take this walk in daylight for the route.'],
          ['Turn inland once', 'Continue to Cathédrale Saint-André and Hôtel de Ville, or choose Musée d’Aquitaine. Check current hours and any ticket before committing to the interior.'],
          ['Choose the northern branch', 'If booked, use tram B to La Cité du Vin and follow the visitor entrance signs. Otherwise spend the saved transfer time in Chartrons or return along the quay.'],
          ['Close on a tram line', 'Use TBM route planning to return to Saint-Jean or lodging. Leave time for the dated ticket, meal and a direct connection; do not build the train connection around an unverified last tram.']
        ],
        fallback: 'If the Cité du Vin or another timed exhibition is unavailable, keep the Place de la Bourse–Saint-André line and choose one currently open central collection. In heat or rain, shorten the exposed quay section and use the tram for the northbound leg.',
        watch: [
          ['A timed museum follows the train, not the reverse', 'Leave a generous Saint-Jean-to-door margin and check TBM service alerts before departure.'],
          ['The quays are exposed', 'Use shade and water in warm weather; switch to a tram segment rather than extending the walk into midday heat.'],
          ['A tasting is a separate choice', 'Check the museum’s current booking and visitor conditions. Keep the visit complete without alcohol and arrange a safe onward trip.']
        ],
        duration: 'Allow six to eight hours for the historic center, quays and one major interior. A compact center loop can fit four hours.',
        combine: 'Combine the center with one northern institution. Keep Saint-Émilion, Arcachon and Médoc for separate days.',
        verify: 'Reopen TBM route maps and service notices, the Cité du Vin dated visit page, the selected museum’s current hours and any event access notice before setting the sequence.',
        siteContext: {
          label: 'The river-city line',
          heading: 'Walk south to north once, then let tram B do the long leg.',
          intro: 'Place de la Bourse gives the route a clear river start; the northern museum district is a separate tram decision, not an extension of every central square.',
          details: [
            ['Place de la Bourse', 'Use the square and Miroir d’eau as orientation points on the Garonne. The credited photograph is a night reflection, so it does not represent daytime light or opening conditions.'],
            ['Saint-André and Hôtel de Ville', 'Turn inland to the cathedral and civic core, or substitute Musée d’Aquitaine. Check current access for the chosen interior.'],
            ['La Cité du Vin', 'TBM names the Tram B stop La Cité du Vin; the official visitor page places the stop about two minutes on foot from the entrance. Reserve the exact visit date where required.']
          ]
        },
        operations: {
          entryReturn: 'At Bordeaux Saint-Jean, use the official TBM planner for a central stop. Place de la Bourse to Saint-André is a walk; for the northbound finish, follow Tram B to La Cité du Vin and plan the return to Saint-Jean or lodging from the live network map.',
          booking: 'Check dated Cité du Vin admission and the selected museum’s current hours before fixing lunch or a train. This guide does not assume walk-up availability or a fare.',
          weather: 'In heat or heavy rain, reduce time on the open quays. Keep the central civic loop and move between neighborhoods by tram; use a confirmed indoor museum as the main block.'
        },
        sources: [
          ['https://www.laciteduvin.com/en/info', 'Cité du Vin — official access, visitor and ticket information'],
          ['https://www.infotbm.com/en/network-maps.html', 'TBM — official network maps'],
          ['https://www.infotbm.com/en/use-all-our-maps/route-maps.html', 'TBM — official route maps and live planning']
        ]
      }),
      g({
        slug: 'saint-emilion-vineyards',
        name: 'Saint-Émilion Village & Vineyards',
        instrument: 'Hill-cellar appointment map',
        layout: 'vineyard-hill-map',
        imageQuery: 'Saint Emilion village vineyards France panorama',
        imageAlt: 'Saint-Émilion’s main square and village seen from the monolithic church',
        imageCreditTitle: 'Saint-Émilion main square from the monolithic church',
        imageCaption: 'Village and main square seen from the monolithic church · JLPC · CC BY-SA 3.0',
        imageEditNote: 'Resized, cropped for display and converted to WebP; changes disclosed. Shared under the same CC BY-SA 3.0 license.',
        purpose: 'Turn the TER arrival into one realistic hill itinerary: reach the village from its lower station, book one restricted heritage visit or one named estate, and protect the return descent.',
        summary: 'The station sits below the medieval village and most vineyards are not walk-up cellar doors. Start at the tourist office, book one official monument tour or one estate appointment, and arrange any rural transfer before travel.',
        choices: [
          ['Village and monolithic church', 'Book the official guided access for the monolithic church or another restricted monument, then connect the upper lanes, Place des Créneaux and one viewpoint.'],
          ['One named estate', 'Choose a producer that confirms the appointment address, language, duration and visitor route. Prearrange pickup from the village or station if the estate is outside walking distance.'],
          ['Public vineyard-edge walk', 'Keep to an official public circuit and return via the village. This is an outdoor day, not permission to enter private rows or replace an appointment with unannounced tasting.']
        ],
        access: 'TER serves Saint-Émilion from Bordeaux Saint-Jean; the station is below and outside the center, and the walk climbs to the village. Start at the Saint-Émilion Tourist Office on Place des Créneaux. Estates are spread across the appellation: confirm an exact meeting point and both directions of any taxi, shuttle or driver before booking.',
        tradeoff: 'The village, a guided underground visit and one estate already make a full day. Choose the official heritage route for the rail-based version; add a winery only when its confirmed transfer still leaves a safe return buffer.',
        hubDuration: 'Full excursion day: seven to nine hours including rail, station hill, meal and one booked visit. Village only still needs several hours plus both station walks.',
        hubAccess: 'TER Bordeaux Saint-Jean → Saint-Émilion station → uphill village route → Place des Créneaux Tourist Office. A winery outside town requires its own prebooked transfer.',
        hubTradeoff: 'The village and one booked visit replace multiple cellar stops and a long rural loop.',
        stages: [
          ['Leave the station for the hill', 'Follow the signed uphill pedestrian route toward the village. Check TER for the travel date and decide in advance whether the climb and descent suit your mobility.'],
          ['Start at Place des Créneaux', 'Use the official tourist office as the village orientation point. Walk the upper lanes, then choose a dated guided tour for the monolithic church, Tour du Roy or another restricted site.'],
          ['Keep one rural commitment', 'For an estate visit, meet at the confirmed address and use the transport arranged in both directions. If staying in town, choose the public vineyard-edge route and remain outside private property.'],
          ['Descend with margin', 'Leave the village early enough for the station hill and a missed-connection buffer. Check the live TER return before lunch; do not assume a late train or unscheduled village shuttle.']
        ],
        fallback: 'If an estate cancels, use the official village tour, public lanes and vineyard-edge walking circuit. If heat, rain or mobility makes the station hill unsuitable, arrange accessible transport in advance or make Bordeaux the base day instead of improvising a roadside pickup.',
        watch: [
          ['The station is below the village', 'The signed climb and return descent take effort and may be hot or wet. Check the route before choosing shoes, luggage and appointment time.'],
          ['Underground access is controlled', 'The official tourism office lists guided visits and appointment booking. Confirm the exact monument, language and meeting point for the date.'],
          ['A cellar is not a public transit stop', 'Harvest and producer work affect access. Keep the written appointment and arranged ride; do not enter vineyard rows or estate yards uninvited.']
        ],
        duration: 'Allow a full seven-to-nine-hour day from Bordeaux for village, meal and one appointment. Village heritage alone needs four to five hours including station walks.',
        combine: 'Combine Saint-Émilion village with one nearby estate. Keep Bordeaux museums, Médoc and Arcachon for separate days.',
        verify: 'Check the live TER planner, the official Saint-Émilion ticket calendar and exact tour meeting point, estate confirmation, transfer both ways, weather and the return train.',
        siteContext: {
          label: 'Station-to-village climb',
          heading: 'Reach the square before deciding whether the vineyard continues.',
          intro: 'The railway station is outside the hilltop core. The walk, heritage entrance and private estate meeting point are distinct locations; verify each one before the day.',
          details: [
            ['Saint-Émilion station', 'TER arrives below town. Use the official signed approach and retain time for the return climb down; do not treat the station as the village stop.'],
            ['Place des Créneaux', 'The official tourist office is a practical rendezvous and source for guided tickets. Confirm date, language and the entrance shown on the ticket.'],
            ['Monolithic church and estate doors', 'Restricted underground heritage needs the official visit arrangement. A vineyard appointment has its own address and access contract; reserve a transfer where it is not walkable.']
          ]
        },
        operations: {
          entryReturn: 'Use TER to Saint-Émilion, walk uphill to the village, and make Place des Créneaux your first checkpoint. Confirm the downhill station approach and current TER return before you leave the square.',
          booking: 'The official tourism office offers dated guided visits and appointment booking for the monolithic church. Book the exact visit and, for an estate, get written confirmation of its entrance and transport plan.',
          weather: 'Heat and rain affect the exposed station hill and cobbles. If the climb is unsuitable, arrange a confirmed ride in advance; keep the village monuments or a shorter town visit as the alternative.'
        },
        sources: [
          ['https://www.saint-emilion-tourisme.com/en/', 'Saint-Émilion Tourism — official ticket, guided visit and appointment links'],
          ['https://www.saint-emilion-tourisme.com/en/', 'Saint-Émilion Tourism — official village and vineyard planning'],
          ['https://www.ter.sncf.com/nouvelle-aquitaine', 'TER Nouvelle-Aquitaine — live regional rail planning'],
          ['https://www.gironde-tourisme.com/en/itineraires/boucle-pedestre-aux-portes-de-saint-emilion/', 'Gironde Tourism — official public walking circuit']
        ]
      }),
      g({
        slug: 'arcachon-dune-pilat',
        name: 'Arcachon Bay & Dune du Pilat',
        instrument: 'Sand-wind-shuttle compass',
        layout: 'dune-bay-compass',
        imageQuery: 'Dune du Pilat Arcachon France ocean forest',
        imageAlt: 'Low sun above open water in Arcachon Bay',
        imageCreditTitle: 'Low sun over Arcachon Bay water',
        imageCaption: 'Low sun above Arcachon Bay water · Grand Parc · CC BY 2.0',
        purpose: 'Choose a single coastal commitment from Arcachon station: the dune by the date-checked Baïa connection, or the UBA boat to Cap Ferret with its confirmed return.',
        summary: 'The photograph shows low sun over bay water, not the dune. From Arcachon station, choose one separate route to Dune du Pilat or Cap Ferret; bus, staircase, boat, tide and weather conditions need date-specific checks.',
        choices: [
          ['Arcachon town and Ville d’Hiver', 'Use the station and Thiers pier as anchors, walk one town or waterfront loop, and take a boat only if the operator confirms the chosen departure and return.'],
          ['Dune du Pilat', 'Check Baïa’s current Gare d’Arcachon–Dune du Pilat service, including on-demand reservation requirements, then read the Grand Site access, stair and fire notices before climbing.'],
          ['Cap Ferret by UBA', 'Use the named Arcachon Thiers–Cap Ferret Bélisaire shuttle. Book the intended sailing and return port; this is a boat day and replaces the dune.']
        ],
        access: 'TER reaches Gare d’Arcachon. For the dune, start with Baïa’s official Dune du Pilat stop page: it lists a Gare d’Arcachon–Dune du Pilat service as on-demand and links current timetable or reservation information. The Grand Site page also has transport guidance; when details differ, use the operator’s current service page for the exact date. For Cap Ferret, walk to Arcachon Thiers pier and use the UBA Arcachon–Bélisaire route. Confirm both directions and return mode before departure.',
        tradeoff: 'The dune climb and Cap Ferret crossing are separate exposed commitments. Choose one, then use Arcachon town for the meal and rail return; a boat delay or fire notice can make a second distant stop fail.',
        hubDuration: 'One full day from Bordeaux: choose either the dune with its verified bus/road transfer or the UBA Cap Ferret crossing, then return through Arcachon town.',
        hubAccess: 'TER to Gare d’Arcachon → Baïa’s date-specific Dune du Pilat stop OR Arcachon Thiers pier → UBA to Bélisaire. Verify the return before choosing.',
        hubTradeoff: 'One coastal system per day: dune or crossing, with Arcachon town as the transfer anchor.',
        stages: [
          ['Arrive at Gare d’Arcachon', 'Choose before leaving the station: open Baïa’s date-specific Dune du Pilat stop and timetable, or walk to Thiers pier for UBA. Check the TER return and current coastal notices.'],
          ['Keep the town leg bounded', 'For the dune plan, use the station-to-bus connection. For the boat plan, walk via the waterfront to Thiers pier. The Ville d’Hiver is a separate town walk; add it only if the transfer margin allows.'],
          ['Commit to one landscape', 'At the dune, follow Grand Site access signs and current stair/fire notices. On the UBA shuttle, verify that the ticket covers your intended date, direction and return port; its operator warns that low tide can make wheelchair boarding at the piers difficult.'],
          ['Return through Arcachon', 'Allow for the dune approach, road traffic or boat delay. Reach the station with the actual TER departure in mind, and do not rely on an unconfirmed connection from the peninsula.']
        ],
        fallback: 'If dune access closes for fire, restoration or weather, use Arcachon’s town and waterfront. If the boat cancels, stay on the Arcachon side; choose another peninsula route only after verifying an operating land connection and its return.',
        watch: [
          ['The dune changes shape', 'The staircase is seasonal and can be removed as the sand moves. Check the Grand Site’s current access notice; plan for soft sand and a strenuous climb.'],
          ['Fire and restoration rules close paths', 'Use official Grand Site alerts and local instructions. Stay out of closed forest and do not stop on restricted approach roads.'],
          ['A boat ticket needs a return plan', 'The UBA route ends at Bélisaire on Cap Ferret, away from Gare d’Arcachon. Confirm the return sailing and allow for tide, weather or delay before leaving.']
        ],
        duration: 'Allow a full day from Bordeaux for Arcachon plus the dune or one bay route. Either exposed excursion needs four to six hours including local transfers.',
        combine: 'Combine Arcachon with the dune or one boat route, not both major branches. Keep Saint-Émilion and central Bordeaux separate.',
        verify: 'Reopen Grand Site Dune access and staircase notices, Baïa’s exact-date route and stop information, UBA route and return booking if selected, local weather and the TER return.',
        siteContext: {
          label: 'Bay-side route contract',
          heading: 'A station, a dune stop and a boat pier are separate places.',
          intro: 'Arcachon is the rail and meal anchor. The dune’s bus stop and the UBA departure at Thiers pier each require their own dated return check.',
          details: [
            ['Gare d’Arcachon', 'TER arrives at the town station. Open Baïa’s official Dune du Pilat stop page and its linked date-specific schedule before committing to the dune route.'],
            ['Grand Site Dune du Pilat', 'The sand and access staircase change. The Grand Site posts current access and closure notices; the seasonal stair may be removed, so expect a sand climb.'],
            ['Arcachon Thiers to Bélisaire', 'UBA names the Arcachon Thiers–Cap Ferret Bélisaire shuttle. Pick the intended direction and return date on the operator’s booking page; the operator warns that low tide can make wheelchair access at the piers difficult.']
          ]
        },
        operations: {
          entryReturn: 'From Gare d’Arcachon, use the Baïa Dune du Pilat stop page and follow its current line and stop instructions, or walk to Thiers pier for the UBA service to Bélisaire. Both routes return to Arcachon by a different connection; confirm it before leaving.',
          booking: 'UBA’s official route page lets you select a date and asks for the sailing direction; book the intended return as well. Do not assume a fixed bus, stair or boat schedule from this guide.',
          weather: 'Check the forecast before choosing an exposed dune or boat day, and follow official fire and access closures. Low tide can make wheelchair access to the UBA piers difficult. If exposed access is unsuitable, stay in Arcachon town and use a currently open indoor or sheltered option.'
        },
        sources: [
          ['https://ladunedupilat.com/en/preparation/how-to-come/', 'Grand Site Dune du Pilat — official access guidance; reconfirm bus operation with Baïa'],
          ['https://ladunedupilat.com/en/inaccessible-staircase-2/', 'Grand Site Dune du Pilat — official seasonal staircase notice'],
          ['https://www.bus-baia.fr/arret-dune-du-pilat-a10.html', 'Baïa — official stop and timetable links for Dune du Pilat'],
          ['https://bateliers-arcachon.com/navettes/arcachon-cap-ferret-2/', 'UBA — official Arcachon Thiers–Cap Ferret Bélisaire route'],
          ['https://www.arcachon.com/en/', 'Arcachon Tourist Office — official town and bay planning'],
          ['https://meteofrance.com/', 'Météo-France — official forecasts and warnings']
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
