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
    reviewedOn: { label: '12 October 2026', iso: '2026-10-12' },
    reviewDate: '12 October 2026',
    reviewDateISO: '2026-10-12',
    publishedDateISO: '2026-09-19',
    countryCardIntro: 'Annecy, Chamonix and Grenoble expose three different Alpine systems: a lake city with busy shores, a high-mountain valley whose lifts are weather-dependent, and an urban basin opening into Chartreuse and Vercors. A clear valley forecast does not guarantee a useful summit day.',
    hubIntro: 'Annecy, Chamonix and Grenoble are separate Alpine systems, not three stops on one convenient day-trip loop. Annecy pairs a compact canal centre with a long lake shore; Chamonix is a valley of independent railways and weather-sensitive lifts; Grenoble is an urban basin with the Bastille above the Isère and the Chartreuse gateway beyond it. Choose a corridor first, then let the dated forecast, operating board and safe return set the elevation. This guide gives the lake and high-valley route a five-night sample and keeps Grenoble as its own city-and-park choice.',
    stay: 'Count full days as well as nights. Three nights suit one gateway: sleep by Annecy Gare/old town for a lake-city stay, in central Chamonix near its station and valley buses for lift flexibility, or near Grenoble Gare/Europole for tram and rail access. Five nights can split into two nights in Annecy and three in Chamonix, with a separate transfer morning and two mountain-weather days; this skips Grenoble. Seven nights can add two Grenoble nights, but hotel changes and cross-valley rail connections consume time. Choose Chamonix Centre for the central lift and rail terminals, Les Praz only if its local train/bus connection fits your plans, and a lakeshore lodging outside Annecy centre only after checking the SIBRA return. Sleeping in a remote hamlet saves no time if the last bus fails.',
    transfer: 'Use TER Auvergne-Rhône-Alpes for the regional rail legs. From Annecy toward Chamonix, check the dated TER journey to Saint-Gervais–Le Fayet and the onward Mont-Blanc Express connection to Chamonix-Mont-Blanc; they are separate legs, not one guaranteed through service. Chamonix’s local bus and Mont-Blanc Express stops serve different valley sites. In Annecy, walk from Annecy Gare to the Thiou/old-town core, then use SIBRA for a named shore stop; the lake boats are a separate operator and timetable. In Grenoble, use M Réso’s live planner and tram map between Gare, the centre and the Isère-side Bastille terminal. None of these networks guarantees the last lift, boat or bus will connect to your intercity train: save both directions and the final return before leaving lodging.',
    season: 'Treat the season as an operating calendar, not a weather label. Wind, cloud, snow, storms, trail maintenance, lake traffic and shoulder-season closures can split a clear town day from a closed summit day. Check Météo-France’s mountain forecast and each operator’s live board before committing to Aiguille du Midi, Montenvers, a boat crossing or a steep trail. On 12 October 2026, Montenvers’ official 2026 page listed the summer train season through 1 November, while its cable car was shown closed 28 September–16 October and the ice cave closed through 1 November; these are dated 2026 notices, not a promise for later seasons. Confirm the actual product, date-specific ticket conditions, any departure reservation and current price with its operator; no fixed fare or timetable is promised here.',
    fallback: 'Give every gateway a complete low-risk day: Annecy’s Thiou lanes, château museum if open, Jardins de l’Europe and one sheltered shore; Chamonix’s valley centre, Alpine Museum and a verified lower-valley walk; or Grenoble’s Musée de Grenoble, old centre and Isère banks. If the Grenoble cable car is closed, stay with the flat city sequence rather than assuming the climb is safe. A closed lift is not permission to use an exposed or unassessed path, and a cancelled boat is not a reason to cross the lake by an unconfirmed bus.',
    reviewDisclaimer: 'The operator controls date-specific lift, rail, boat and ticket conditions. Check exact opening, weather, reservation rules, prices and the last return for the travel date; this guide does not promise a fare, departure time or future operating calendar.',
    itineraryLabel: 'Five nights · Annecy to Chamonix',
    itineraryHeading: 'One lake day, one transfer, then a flexible mountain window.',
    itineraryIntro: 'Use Annecy Gare/old town for two nights and central Chamonix for three. The sample gives four usable days around partial arrival and departure days; it deliberately leaves Grenoble and a second high system out.',
    itinerary: [
      ['Arrival · Annecy base', 'Sleep near Annecy Gare or the old-town edge. Walk the Thiou only if the arrival leaves time; check SIBRA, the lake-boat operator and the next day’s weather before choosing a shore.'],
      ['Full day · Annecy', 'Walk the Thiou canals and Palais de l’Île area, then choose one: Jardins de l’Europe/Le Pâquier and a booked lake boat, or a SIBRA ride to one named shore. Do not add a full lake circuit.'],
      ['Transfer · Annecy to Chamonix', 'Check TER to Saint-Gervais–Le Fayet and the onward Mont-Blanc Express to Chamonix-Mont-Blanc. Treat this as a transfer day; confirm the connection and final lodging stop before booking.'],
      ['Full day · first mountain system', 'Choose Aiguille du Midi or Montenvers–Mer de Glace only after its separate operating board, ticket product, visibility, last descent and current access agree. Keep the other system for another date.'],
      ['Weather buffer · valley finish', 'Use the second Chamonix day for a weather-shifted single system or the Alpine Museum, centre and verified lower-valley route. Depart only after the rail/bus return is rechecked.'],
      ['Departure · Chamonix base', 'For a rail departure, sleep near Chamonix-Mont-Blanc station the night before. Check the dated connection through Saint-Gervais–Le Fayet, leave a transfer margin and do not schedule a lift or boat before departure.']
    ],
    faq: [
      ['How many nights do the three gateways need?', 'Three nights works best for one base and its local system. Five nights can split Annecy and Chamonix as shown, with one transfer morning and two Chamonix weather days. Give Grenoble at least two more nights; seven nights is a workable three-gateway sample, not a guarantee that every mountain attraction will operate.'],
      ['Where should I stay if I want to avoid a car?', 'In Annecy, choose the Gare/old-town edge for rail and walking, or a named north-shore stop only after confirming SIBRA service back. In Chamonix, central lodging near Chamonix-Mont-Blanc station and the bus network handles the most systems; Les Praz is a separate choice with a local connection to verify. In Grenoble, Gare/Europole or the tram-served centre makes the city route simpler than sleeping up-valley.'],
      ['Can I buy one ticket for the whole Alpine route?', 'No single ticket is assumed here. TER, the Mont-Blanc Express, SIBRA, Grenoble M Réso, boats and each mountain lift or railway have separate operators, dates and conditions. Confirm every leg and the last return before buying a timed excursion.']
    ],
    sources: [
      ['https://www.ter.sncf.com/auvergne-rhone-alpes', 'TER Auvergne-Rhône-Alpes — official regional transport'],
      ['https://www.mont-blanc-express.ch/en/experiences-lm', 'Mont-Blanc Express — official route, timetable and live traffic information'],
      ['https://www.bateaux-annecy.com/', 'Compagnie des Bateaux du Lac d’Annecy — official cruise routes and bookings'],
      ['https://meteofrance.com/meteo-montagne', 'Météo-France — official mountain forecasts'],
      ['https://www.sibra.fr/', 'SIBRA — official Annecy transit planner'],
      ['https://www.reso-m.fr/', 'M réso — official Grenoble network, route planner and traffic information'],
      ['https://www.grenoble-tourisme.com/en/', 'Grenoble Alpes Tourisme — official city and Chartreuse gateway planning']
    ],
    guides: [
      g({
        slug: 'annecy-lake-old-town',
        reviewedOn: { label: '12 October 2026', iso: '2026-10-12' },
        name: 'Annecy Old Town & Lake',
        instrument: 'Canal-to-lake crowd clock',
        layout: 'lake-city-ribbon',
        imageQuery: 'Annecy old town canal lake France Alps',
        imageAlt: 'Annecy’s old town canals with Alpine buildings and water',
        purpose: 'Connect Annecy’s compact old town to one lake-shore segment, boat or bicycle plan without assuming the full lake circuit belongs to a city stroll.',
        summary: 'Use the Thiou canals and old streets early, then choose a western-shore walk, a booked boat or a bounded bicycle section whose return works in heat and traffic.',
        choices: [
          ['Old town and museum', 'Prioritize the canals, Palais de l’Île area, château museum where open and market streets. This is the weather-flexible city route.'],
          ['Lakeshore and boat', 'Use Jardin de l’Europe and Le Pâquier, then board one verified Compagnie des Bateaux du Lac d’Annecy cruise. The exact quay, dated sailing and return become the main clock.'],
          ['Bicycle segment', 'Ride a defined section of the lake route with rental hours, skill, heat and turnaround fixed. A complete circuit is a separate athletic day.']
        ],
        access: 'Arrive at Annecy Gare, walk by Rue de la Gare toward the Thiou canals and Palais de l’Île, then continue to Jardin de l’Europe and Le Pâquier. For a longer shore, choose one SIBRA stop such as Albigny in the live planner; lake boats depart from their own quay and do not share the bus timetable. Save the exact SIBRA stop and return before leaving the centre.',
        tradeoff: 'A full lake circuit, museum visit, market lunch and boat do not fit as a relaxed city day. The route keeps the old town plus one water contract and gives up the rest; a night on the shore trades quieter lodging for a longer return to the station and restaurants.',
        siteContext: {
          label: 'Sleep and walk by shore segment',
          heading: 'Make the lake a choice of districts, not one loop.',
          intro: 'The station, old-town lanes and northern shore have different end-of-day connections. Choose the district that matches the last activity and the return you have actually checked.',
          details: [
            ['Annecy Gare / old-town edge', 'Best for a short stay without a car: reach the Thiou, Palais de l’Île and food streets on foot, then walk back to the regional train. The market lanes are cramped with bags, so drop luggage first.'],
            ['Jardin de l’Europe → Le Pâquier', 'A broad, legible first shore section after the old town. Walk the public lakeside path, then turn back or board one confirmed cruise from its named quay; this is not the beginning of a full circuit.'],
            ['Albigny / north shore', 'Choose this only for a shore-focused night or a confirmed SIBRA connection. The bus stop, boat landing and lodging door are separate points; check the last return and do not assume a lake cruise lands here.'],
            ['Route shape', 'Gare → Rue de la Gare → Thiou → Palais de l’Île/Pont Perrière → Jardin de l’Europe → Le Pâquier → return by the open shore edge. Add one museum or one water mode, then stop.']
          ]
        },
        stages: [
          ['Gare to the Thiou', 'Walk from Annecy Gare via Rue de la Gare to the Thiou. Cross the old-town bridges without blocking the market lanes; leave bags at the lodging before continuing.'],
          ['Canal and old-town block', 'Follow the canal streets toward Palais de l’Île and Pont Perrière, then choose one indoor visit or market block. Use the named entry and opening notice for the museum; do not stack two timed interiors.'],
          ['One shore contract', 'Continue to Jardin de l’Europe and Le Pâquier. Either walk that same public edge back, board one booked Compagnie des Bateaux du Lac d’Annecy departure, or use SIBRA to Albigny after checking the return.'],
          ['Return by the open edge', 'Use the broad park-side shore to return toward Gare/old town. Check the SIBRA or boat return before committing to a distant shore; a full lake circuit is a separate day.']
        ],
        fallback: 'If boats stop or storms threaten, keep the old town, château museum and short sheltered lake edge. If the center is overwhelmed, use a quieter park and museum rather than extending onto an exposed shore.',
        watch: [
          ['Cycle traffic is mixed', 'Busy shared paths and road sections require control, helmets where appropriate and a realistic turnaround.'],
          ['Boat timetables are seasonal', 'A cruise advertisement does not guarantee the same route or return on the chosen date.'],
          ['Narrow lanes bottleneck', 'Markets and photo points are circulation space for residents. Step aside before reading maps or arranging groups.']
        ],
        duration: 'Allow five to seven hours for old town plus one lake mode. A full bicycle circuit or distant shore excursion should be a separate full day.',
        combine: 'Combine the center with one western or northern lake segment. Keep Chamonix, Geneva and remote mountain viewpoints for separate days.',
        verify: 'Check Compagnie des Bateaux du Lac d’Annecy for the exact quay and return, SIBRA for the chosen shore stop, the Château d’Annecy visitor page, market calendar, weather and any lakeside event closure.',
        operations: {
          entryReturn: 'From Annecy Gare, walk via Rue de la Gare to the Thiou and Palais de l’Île; continue along Jardin de l’Europe to Le Pâquier. For Albigny, use SIBRA’s live planner to select the current stop and direction. The Compagnie des Bateaux du Lac d’Annecy uses a separate quay and dated sailing plan; do not treat it as a through bus.',
          booking: 'Check the Château d’Annecy’s dated access and the boat operator’s route, ticket and return for the chosen date. Reserve only the specific departure or timed entry the official operator requires; this guide quotes no fare or sailing time.',
          weather: 'Heat, thunderstorms and event crowding make the shore the adjustable section. Keep the old-town/castle block and one sheltered café or museum, shorten the open-water walk, and do not hire a bicycle unless its rental hours, route condition and turnaround all fit.'
        },
        sources: [
          ['https://en.lac-annecy.com/', 'Lake Annecy Tourist Office — official destination planning'],
          ['https://www.sibra.fr/en/', 'SIBRA — official Annecy bus network information'],
          ['https://www.bateaux-annecy.com/', 'Compagnie des Bateaux du Lac d’Annecy — official cruise routes and bookings']
        ]
      }),
      g({
        slug: 'chamonix-mountain-systems',
        reviewedOn: { label: '12 October 2026', iso: '2026-10-12' },
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
        access: 'Arrive at Chamonix-Mont-Blanc on the TER Mont-Blanc Express, then use the valley bus or walk to the exact terminal. Aiguille du Midi begins in central Chamonix; the Montenvers rack railway has its own station, ticket and site access; Tramway du Mont-Blanc starts at Le Fayet and is a separate excursion. One open valley does not mean all systems operate.',
        tradeoff: 'Two major mountain systems in one day multiply cost and weather risk while shortening both. The route chooses one elevation contract and uses the valley for the remaining time. Sleep in Chamonix Centre for station and bus access; a Les Praz or Argentière night suits a specific valley segment only if its last Mont-Blanc Express/bus return is confirmed.',
        siteContext: {
          label: 'Valley base and summit day',
          heading: 'Sleep by the return corridor you will use.',
          intro: 'Chamonix’s rail line, buses and lift terminals are spaced along the valley. The station name on an attraction page may not be the same station that brings you home.',
          details: [
            ['Chamonix Centre', 'Best first base for a short stay: walk to the Chamonix-Mont-Blanc SNCF station, the Aiguille du Midi terminal and the central bus corridor. The central hotel is more useful than a cheaper room with an unverified late transfer.'],
            ['Les Praz', 'Use for a lower valley or Flégère-area plan only after checking the local Mont-Blanc Express stop, bus and trail status. It is not the Aiguille du Midi terminal and does not remove the need to return through the centre.'],
            ['Argentière / Vallorcine', 'These are distinct northern valley bases served along the Mont-Blanc Express corridor. Choose them for a planned northern day, not as a last-minute substitute when the central lifts close.'],
            ['One-day sequence', 'Chamonix station/centre → one lift or Montenvers station → the signed visitor area → earlier descent → centre. Do not add Le Fayet’s Tramway du Mont-Blanc or a second summit system to this chain.']
          ]
        },
        stages: [
          ['Check the live operating board', 'Before buying or leaving lodging, read lift, railway, road and weather status for the exact system. Confirm the ticket window and last descent.'],
          ['Start from the right terminal', 'Walk from Chamonix-Mont-Blanc station to the central Aiguille du Midi terminal, or to the separate Gare du Montenvers for the rack railway. These are not one ticket or boarding point.'],
          ['Use one signed mountain system', 'Follow the selected operator’s visitor sequence and live glacier-access instructions. The 2026 Montenvers notice listed a summer train period to 1 November but separate cable-car and ice-cave closures; check the component you intend to use.'],
          ['Descend before the last slot', 'Plan the return while still at the valley terminal, with queue and weather margin; then walk the central streets or visit a verified museum. If a same-day return is uncertain, do not start the excursion.']
        ],
        fallback: 'If wind, cloud, maintenance or health removes elevation, use the Alpine Museum or current Mont Blanc interpretation, Chamonix streets, Les Praz or another verified low valley route. Do not substitute an unsupervised high trail.',
        watch: [
          ['Altitude affects healthy visitors', 'Read medical cautions, ascend gradually where possible and leave immediately if symptoms develop.'],
          ['Operations can stop quickly', 'Wind and technical decisions may suspend service after ascent. Follow staff instructions and keep warm layers.'],
          ['Trail status is not lift status', 'An operating lift does not certify every path beyond it. Check the specific signed route and season.']
        ],
        duration: 'Give one mountain system four to six hours plus valley margin; make the whole day available for Aiguille du Midi or Montenvers. Two systems need another day.',
        combine: 'Combine one high system with Chamonix valley only. Keep Annecy, Courmayeur and long hikes for separate weather windows.',
        verify: 'Check the Compagnie du Mont-Blanc live board, Montenvers date-specific opening and ticket page, Mont-Blanc Express traffic information, Météo-France mountain forecast and the exact last descent.',
        operations: {
          entryReturn: 'Use TER to Chamonix-Mont-Blanc on the Mont-Blanc Express corridor. Walk to the central Aiguille du Midi terminal or the distinct Gare du Montenvers for the rack railway; use the valley bus for a different lift stop only after checking its current direction and return. Leave the Tramway du Mont-Blanc at Le Fayet as another day.',
          booking: 'Choose one named product and read its date-specific ticket rules, departure reservation, included components and refund terms before paying. Montenvers currently publishes separate train, cable-car, ice-cave and glacier-site status; a train ticket does not prove every component is open. Prices and departure times remain with the operator.',
          weather: 'If cloud, wind, maintenance or altitude health removes the summit, stay below: use the Alpine Museum and centre, or a lower route explicitly shown open by the destination and trail authority. Do not replace a cancelled lift with an unassessed high path.'
        },
        sources: [
          ['https://www.chamonix.com/', 'Chamonix-Mont-Blanc Tourist Office — official live valley planning'],
          ['https://www.montblancnaturalresort.com/en', 'Compagnie du Mont-Blanc — official lift and railway operations'],
          ['https://www.montenverstrain.com/en/opening-hours-and-prices/', 'Montenvers — dated train, cable-car, glacier-site and ticket information'],
          ['https://www.mont-blanc-express.ch/en/experiences-lm', 'Mont-Blanc Express — official timetable and live traffic information'],
          ['https://meteofrance.com/meteo-montagne', 'Météo-France — official mountain forecast']
        ]
      }),
      g({
        slug: 'grenoble-bastille-chartreuse',
        reviewedOn: { label: '12 October 2026', iso: '2026-10-12' },
        name: 'Grenoble, Bastille & Chartreuse Edge',
        instrument: 'Basin-to-mountain gateway section',
        layout: 'urban-alpine-section',
        imageQuery: 'Grenoble Bastille cable car Alps France city panorama',
        imageAlt: 'Grenoble and its Alpine basin seen from the Bastille',
        imageOverride: {
          src: '/assets/images/france-grenoble-bastille-route-sequence.svg',
          alt: 'Original five-language schematic from Grenoble Gare through the city centre to the Bastille cable-car lower station and fort; not a map to scale',
          label: 'Grenoble Bastille route sequence — original schematic',
          creditTitle: 'Grenoble Bastille route sequence — original schematic',
          caption: 'Original TripDistill route sequence · schematic, not to scale · see the five-language key in the graphic',
          source: 'https://tripdistill.com/assets/images/france-grenoble-bastille-route-sequence.svg',
          sourceTitle: 'Grenoble Bastille route sequence — original schematic',
          commonsTitle: null,
          creator: 'TripDistill Editorial Team',
          license: null,
          rightsStatus: 'Project original; no separate reuse license declared',
          rightsStatusUrl: 'https://tripdistill.com/terms-of-use/',
          commercialReuseEligibility: 'unknown',
          attributionTerms: 'No reuse license is declared; a source and creator credit does not grant reuse permission.',
          assetType: 'original-planning-diagram',
          localSha1: '748a1932d5aa7b3ee2291aa637790a3bfcbeff6f',
          editNote: 'Original editorial sequence diagram. It is schematic, not geographically scaled; no separate reuse license is declared.'
        },
        purpose: 'Use Grenoble’s museums and Bastille as one urban-Alpine section, adding Chartreuse only through a named, reachable gateway rather than an improvised mountain drive.',
        summary: 'Cross the historic center and Isère, ascend once to the Bastille by cable car or foot, and decide whether the city or a separate lower-mountain excursion carries the afternoon.',
        choices: [
          ['Grenoble art and city', 'Use the Musée de Grenoble, old center and Isère edge as the main day. This is the strongest heat, rain or limited-mobility choice.'],
          ['Bastille ascent', 'Ride the cable car or choose a signed climb, then use the fort and panorama as the city’s geographic explanation.'],
          ['Chartreuse gateway', 'Travel to one reachable park town, museum or signed trail through current regional transport or a car. This replaces most of the city museum time.']
        ],
        access: 'Arrive at Grenoble Gare and use the M Réso live route planner or tram map for the city centre. For the Bastille, the lower cable-car station is beside the Isère near Jardin de Ville; the urban route connects the Musée de Grenoble/Place de Lavalette, Place Saint-André and Quai Stéphane Jay. Chartreuse is a separate excursion: enter Le Sappey-en-Chartreuse as the destination in the current regional planner and confirm the outward and evening return before leaving Grenoble.',
        tradeoff: 'A deep Musée de Grenoble visit, the Bastille and a Chartreuse park excursion exceed one day. Keep the city-and-Bastille pair, or give Le Sappey-en-Chartreuse a separate day that replaces the museum and much of the centre. Sleep near Gare/Europole for TER and tram connections or in the tram-served hyper-centre; do not book an up-valley night without a confirmed last service.',
        siteContext: {
          label: 'Choose a basin-side walking zone',
          heading: 'Read the city before climbing above it.',
          intro: 'The Bastille is attached to Grenoble’s centre, while Chartreuse is a separate transport decision. A useful day follows the river and civic core in one direction before ascending once.',
          details: [
            ['Gare / Europole', 'Best for a TER arrival or departure and M Réso tram access. Drop luggage, then use the current tram map or walk into the centre; do not assume the Bastille cable-car lower station is at the rail forecourt.'],
            ['Place de Lavalette → Place Saint-André', 'Use the Musée de Grenoble as the indoor anchor, then walk the old-centre streets toward Place Saint-André and the Isère. Choose either the museum interior or an extended centre visit if time is short.'],
            ['Jardin de Ville → Quai Stéphane Jay', 'The cable-car lower station sits by the river. Approach from Jardin de Ville, check the Bastille operator’s opening calendar and final ascent, then use the fort/panorama before returning by the same verified system.'],
            ['Le Sappey-en-Chartreuse', 'This is a named gateway, not a walk from the Bastille. Plan it as a second day using the current M Réso/Cars Région itinerary and a return that leaves enough margin for the last Grenoble tram or train.']
          ]
        },
        stages: [
          ['Gare to the centre', 'Use M Réso from Grenoble Gare to the central tram corridor, or walk to the selected museum entrance. Check the current stop and service notice rather than assuming a station-to-cable-car transfer.'],
          ['Museum and civic block', 'Choose Musée de Grenoble/Place de Lavalette, then walk the old centre toward Place Saint-André and the Isère. If the museum visit runs long, leave the riverside ascent for another date.'],
          ['Jardin de Ville to Bastille', 'Reach the lower station beside the Isère from Jardin de Ville. Ride the Grenoble-Bastille Cable Car when open, or omit the climb; the graphic shows order only and is not a navigational map.'],
          ['Return through the same gateway', 'Descend by the operating cable car and return toward the tram corridor or Gare. For a Chartreuse day, use the confirmed Le Sappey-en-Chartreuse bus return instead of combining it with a late ascent.']
        ],
        fallback: 'If the cable car is closed or heat makes the climb unsuitable, stay in the lower city: Musée de Grenoble if open, Place Saint-André, the Isère banks and tram-served centre. If a Chartreuse bus is cancelled, do not improvise a trail or taxi-free return; keep a Grenoble museum and city walk instead.',
        watch: [
          ['The basin can trap heat', 'Summer afternoons may make steep paths unpleasant; move the ascent earlier and carry water.'],
          ['Cable-car and path conditions differ', 'A technical closure does not automatically make the footpath safe or appropriate.'],
          ['Park buses may be commuter-shaped', 'Confirm the evening return, not just the outbound service, before entering Chartreuse.']
        ],
        duration: 'Allow five to seven hours for Grenoble and the Bastille. A Chartreuse excursion needs a full separate day or replaces the museum block.',
        combine: 'Combine the city with Bastille, or use Grenoble as the departure point for one Chartreuse gateway. Keep Annecy and Chamonix separate.',
        verify: 'Check the Grenoble-Bastille Cable Car’s dated operating calendar and last ascent, Musée de Grenoble visitor notice, M Réso live planner, Le Sappey-en-Chartreuse bus return, park access and Météo-France mountain forecast.',
        operations: {
          entryReturn: 'From Grenoble Gare, use M Réso’s current tram planner/map for the city-centre stop, then walk Place de Lavalette → Place Saint-André → Jardin de Ville → Quai Stéphane Jay and the Bastille lower station. For Le Sappey-en-Chartreuse, plan the destination separately in the regional network and save both the outbound and evening return.',
          booking: 'The Grenoble-Bastille operator publishes a date-specific hours calendar and states that the last ascent is before closing; check the actual day and current fare directly. Check Musée de Grenoble access separately. No combined city/cable-car ticket, fare or bus frequency is assumed.',
          weather: 'In basin heat, heavy rain or a cable-car closure, keep the flat Musée de Grenoble/old-centre/Isère sequence and use M Réso between districts. A closed lift does not make the uphill footpath a safe substitute; only use a route explicitly open and suitable for your group.'
        },
        sources: [
          ['https://www.grenoble-tourisme.com/en/', 'Grenoble Alpes Tourist Office — official destination planning'],
          ['https://bastille-grenoble.fr/en/', 'Grenoble-Bastille Cable Car — official hours, fares and visitor access'],
          ['https://www.reso-m.fr/', 'M réso — official transit planner, network map and service notices'],
          ['https://www.parc-chartreuse.net/', 'Chartreuse Regional Nature Park — official access and conduct'],
          ['https://meteofrance.com/meteo-montagne', 'Météo-France — official mountain forecast']
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
    stay: 'For three nights, sleep in Sarlat and choose only two full days: Sarlat plus either the Vézère or the castle valley. Four nights suit one base—Sarlat for the market and southern castles, Les Eyzies for early cave entry—and allow three complete touring days between separate arrival and departure days. Use one of those three days as a weather or transport buffer only if you are willing to drop an anchor. Five nights can split two nights in Sarlat and three in Les Eyzies only when timed visits and the luggage transfer justify moving; otherwise keep one room and book the last mile.',
    transfer: 'TER line D33/L33 links Bordeaux, Bergerac and Sarlat; TER line L34 connects Périgueux, Les Eyzies and Sarlat on its route. Seasonal regional coaches list line 337 Sarlat–Les Eyzies, 338 Dordogne Valley and 339 Vézère Valley; their operating dates and onward links change, and some coaches require advance reservation. No train or coach stop is a promise of a cave shuttle. Check the Nouvelle-Aquitaine timetable search, exact stop, reservation rule and return; prebook a driver or tour where the final leg is absent.',
    season: 'Sarlat’s food market is Wednesday and Saturday morning; the Saturday market is larger, while Thursday’s organic market and winter truffle schedule are seasonal. Regional coach 338 to Castelnaud is shown as a summer service, and the other valley coaches have date-bound calendars. Cave slots, château openings, canoe launches, river levels, heat and harvest traffic also move with season. Check the dated operator calendar, attraction ticket and river notice together before buying a non-refundable room.',
    fallback: 'If a cave slot, seasonal coach, driver or river operator drops out, keep the day in the base town: Sarlat’s market-and-heritage loop or Les Eyzies’ National Museum of Prehistory is a real alternative. Replace a missed river activity with one open château reached by confirmed transport; do not patch rural gaps with an assumed taxi or an unverified bus connection.',
    reviewDisclaimer: 'Recheck date-specific TER and coach itineraries, reservations, market and monument calendars, river notices and weather before travel; no fare, headway or journey-time promise is made here.',
    itineraryLabel: 'Four-night Périgord plan',
    itineraryHeading: 'Keep one base, then give each valley its own day.',
    itineraryIntro: 'This five-day calendar fits four nights when Day 1 and Day 5 are partial travel days, leaving Days 2–4 for three complete touring days. If arrival or departure removes another day, add a night or drop a valley. Book the cave slot and last-mile transfer before fixing the room; a three-night trip should drop one valley rather than rush through all three.',
    itinerary: [
      ['Day 1 · Arrival and Sarlat orientation', 'Check into a walkable Sarlat base and keep the arrival evening light. If you reach town early, use Place du Peyrou, Saint-Sacerdos Cathedral, the Lantern of the Dead and the former Sainte-Marie church market hall as a short orientation loop; confirm your return to the lodging before a long dinner.'],
      ['Day 2 · Give Sarlat a full day', 'If it is Wednesday or Saturday, start with the food market; otherwise follow Place du Peyrou, Saint-Sacerdos Cathedral, the Lantern of the Dead and the former Sainte-Marie church market hall. Check the station or driver return before a long dinner.'],
      ['Day 3 · Choose the Vézère anchor', 'Use TER L34 to Les Eyzies when its date-specific service fits, then visit the National Museum of Prehistory and one pre-booked original site with a confirmed local transfer. Or use Sarlat as the base for a separately booked Montignac/Lascaux IV day. Do not combine both branches without checking their connection.'],
      ['Day 4 · Dordogne river and one château', 'Choose Beynac or Castelnaud, not both by default. Use the summer line 338 only if it runs on the exact date and has a workable return; otherwise arrange a car, driver or tour. Pair the hill visit with La Roque-Gageac at river level only when your transfer or named boat departure is confirmed.'],
      ['Day 5 · Departure and return buffer', 'Keep your final morning for luggage collection and the station transfer, with a margin. Do not make a rural attraction your last stop before a fixed train unless the full return transfer is booked. If the weather or a missed connection removes a day, drop one planned valley or add a night; do not count the departure day as a full sightseeing day.']
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
    tagline: 'Base in Toulouse, then choose how many separate rail days the trip can hold.',
    hubIntro: 'This is three different scales of visit, not one Toulouse day trip: the Capitole–Garonne walking core, Albi’s cathedral-and-collection district, and Carcassonne’s Bastide-to-Cité climb. liO trains connect Toulouse-Matabiau with Albi-Ville and Carcassonne, but the station-to-sight leg, museum or castle booking, and return all shape a usable day.',
    countryCardIntro: 'Toulouse’s Garonne and aerospace layers, Albi’s episcopal brick city and Carcassonne’s fortified cité are distinct destinations on separate rail corridors. Both excursions are possible from Toulouse, but neither should be reduced to a two-hour photo stop.',
    stay: 'Three Toulouse nights give a first visit one full historic-core day and one excursion day; choose Albi or Carcassonne, because arrival and departure are not spare sightseeing days. Four nights can add the second excursion only if the live train and venue calendars align. Five nights make both rail days and two Toulouse days more humane. Capitole/Carmes keeps dinner and the core walk close; Matabiau/Marengo favors early rail starts and luggage handling. An Albi or Carcassonne overnight buys a slower evening or morning but adds a hotel move, so use it only when the dated return makes the single-base plan too tight.',
    transfer: 'For the regional legs, search liO Train / TER from Toulouse-Matabiau to Albi-Ville or Carcassonne for the exact date and compare the return before choosing the town. In Toulouse, Marengo-SNCF and the central Métro are separate from each aerospace site: the city lists Linéo 12 to Cité de l’espace, while Halle de La Machine lists Montaudran Gare, Linéo 8/Gonin and bus 23/Piste des Géants among its approaches. These are named lookup points, not a promise of a timed connection; current departures, fares, disruptions and stop changes are not reproduced here.',
    season: 'Summer heat makes exposed brick squares, Albi’s river edge and Carcassonne’s uphill approach harder at midday; put outdoor walking early or late and reserve the interior you most want first. Toulouse’s Cité de l’espace calendar can vary by school holiday, while the Toulouse-Lautrec Museum has seasonal hours and a weekly closure pattern. Carcassonne’s Château Comtal reports limited places and recommends booking. Festival traffic, storms and shorter winter light can change the order; check each official calendar and the forecast for your actual dates.',
    fallback: 'If a regional train or return does not fit, keep Toulouse as a complete base day: use the Capitole–Saint-Sernin–Jacobins–Garonne walk, a currently open museum, or the Canal du Midi. In Albi, keep the cathedral exterior, Berbie gardens and a short heritage loop if an interior closes. In Carcassonne, the Medieval City is a lived district even when a paid castle slot is unavailable; switch to its public lanes and the Bastide rather than adding a distant Cathar site.',
    searchSummary: 'Use Toulouse for the Capitole–Garonne core, then add Albi or Carcassonne as separate liO rail days. Compare 3, 4 and 5 nights, station last miles, venue bookings and the return before splitting bases.',
    reviewDate: '11 October 2026',
    reviewDateISO: '2026-09-19',
    reviewedOn: { label: '11 October 2026', iso: '2026-10-11' },
    reviewDisclaimer: 'No travel-date fare, train departure, attraction inventory or current opening state is frozen in this guide; confirm each linked operator and venue page before booking.',
    sources: [
      ['https://www.visit-occitanie.com/en/', 'Occitanie tourism — official regional guide'],
      ['https://www.ter.sncf.com/occitanie/trajet-toulouse-albi-ville', 'liO Train — Toulouse-Matabiau to Albi-Ville live planner'],
      ['https://www.ter.sncf.com/occitanie/trajet-toulouse-carcassonne', 'liO Train — Toulouse-Matabiau to Carcassonne live planner'],
      ['https://www.tisseo.fr/en/calculateur', 'Tisséo — date-specific Toulouse route planner'],
      ['https://meteofrance.com/', 'Météo-France — official forecast and warnings']
    ],
    guides: [
      g({
        slug: 'toulouse-garonne-aerospace',
        name: 'Toulouse Garonne & Aerospace Choices',
        instrument: 'River-to-aerospace split board',
        layout: 'brick-city-split',
        imageQuery: 'Toulouse Capitole Garonne France sunset',
        imageAlt: 'The illuminated Place du Capitole façade and arcades in Toulouse at night',
        purpose: 'Decide whether this is a walk-first central Toulouse day or a full aerospace-campus day. The city, Cité de l’espace and Montaudran’s Halle de La Machine occupy different route plans; the choice prevents a long transfer from being hidden inside a landmark list.',
        summary: 'Give the Capitole–Saint-Sernin–Jacobins–Garonne corridor one full walking day. On another day, choose Cité de l’espace or the Montaudran pair of Halle de La Machine and L’Envol des Pionniers; do not treat them as neighboring stops.',
        searchSummary: 'Walk Capitole, Saint-Sernin, Jacobins, Daurade and Pont Neuf as one Toulouse day. Give Cité de l’espace or Montaudran its own day and check Tisséo/TER stops, dated admissions and return.',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-09-19',
        hubAccess: 'Toulouse-Matabiau is the rail gateway; central hotel blocks around Capitole/Carmes suit the historic walk, while Matabiau/Marengo favors early trains. Cité de l’espace is reached separately: Toulouse Métropole lists Linéo 12 at Cité de l’espace and Linéo 1 at Collège Vernant. Halle de La Machine lists Montaudran Gare, Linéo 8/Gonin and bus 23/Piste des Géants. Check Tisséo’s live date-specific route and final return; line presence alone does not confirm a useful connection.',
        hubTradeoff: 'A central walk and a full campus visit each deserve their own day. A Montaudran outing can combine Halle de La Machine with L’Envol des Pionniers at the same Piste des Géants area; Cité de l’espace and Aeroscopia are separate site decisions. Adding one campus means giving up a second museum or a second campus, not compressing all of them around lunch.',
        hubDuration: 'Plan one full day for the central route. Reserve a second day for one campus; the seasonal calendar, timed activities and transit return decide whether any short evening stop fits.',
        choices: [
          ['Capitole to the Garonne', 'Choose this when architecture, church interiors and the riverfront matter more than a campus ticket. Keep the day on foot between the Capitole, Saint-Sernin, Jacobins, Daurade and Pont Neuf.'],
          ['Cité de l’espace', 'Choose the eastern science park for exhibits, gardens and scheduled planetarium or IMAX sessions. Toulouse Métropole lists Linéo 12 to the Cité de l’espace; verify the actual visit date, timed sessions, current admission and bus return.'],
          ['Montaudran: two connected stories', 'Halle de La Machine and L’Envol des Pionniers share the Piste des Géants area, so they can form one focused day if both calendars fit. This is distinct from Cité de l’espace and Aeroscopia; check each venue’s own ticket and current transit.']
        ],
        access: 'Arriving by rail means Toulouse-Matabiau; Marengo-SNCF and the central Métro are the named interchange area, but use the live Tisséo planner for the current station entrance and walk. For Cité de l’espace, the city lists Linéo 12/Cité de l’espace and Linéo 1/Collège Vernant. For Halle de La Machine, its venue lists TER Gare de Montaudran, Linéo 8/Gonin, bus 23/Piste des Géants, and other stops. The exact date’s departures, connections and fare are not archived here.',
        tradeoff: 'The central walk is already a substantial day. A timed campus visit can consume the same attention and transfer budget; pick one central interior or one aerospace destination, then keep the other site for a later day instead of promising a three-campus sweep.',
        stages: [
          ['Start at Place du Capitole', 'Use the square and the Capitole façade to orient the day. If your hotel is by Matabiau, resolve the station-to-core walk or current Métro connection before leaving luggage behind.'],
          ['Walk north to Saint-Sernin', 'Follow Rue du Taur to the basilica, then choose whether its interior or the nearby Musée Saint-Raymond is the one substantial stop. Keep the route on this side of the center.'],
          ['Turn through Jacobins to the river', 'Walk back via the Couvent des Jacobins, then continue to Place Saint-Pierre and the Daurade quay. Cross Pont Neuf only if you want the opposite-bank view; avoid doubling back across both banks.'],
          ['Finish at Pont Neuf and Carmes', 'Use the Garonne view and Hôtel d’Assézat/Place de la Trinité as the southern finish. Return to the hotel or Matabiau before adding dinner; do not attach a campus transfer to this core loop.']
        ],
        fallback: 'For rain, a heat alert or a missed campus slot, stay in the center: choose one currently open interior such as the Couvent des Jacobins, Musée Saint-Raymond or Musée des Augustins, then shorten the exposed river section. If a museum is closed, keep the Place du Capitole–Rue du Taur–Saint-Sernin route and finish under the covered market arcade only after confirming its day-of operation.',
        watch: [
          ['The campus name is not the stop', 'Cité de l’espace, Aeroscopia and Halle de La Machine have different addresses and transit. Match the exact venue name and stop in Tisséo before buying an onward ticket.'],
          ['Timed programming is the hinge', 'A planetarium, IMAX session or Minotaur ride can set the entry order. Current session inventory and opening status were not captured; confirm them before selecting the rail or bus leg.'],
          ['The core is exposed at both ends', 'Capitole and the river quays have little shade. Shift the square and Pont Neuf outdoors to cooler hours; use a currently open interior as the midday anchor.']
        ],
        duration: 'Treat the Capitole–Saint-Sernin–Jacobins–Garonne walk as one full day with a meal and one interior. Give a campus its own day; the venue’s current program and admission decide whether a compact central evening remains realistic.',
        combine: 'The Montaudran pairing of Halle de La Machine and L’Envol des Pionniers is the most coherent two-venue day. Keep Cité de l’espace, Aeroscopia, Albi and Carcassonne on separate route days unless a date-specific plan proves otherwise.',
        verify: 'Before choosing a hotel or timed session, check the exact Cité/Halle/Aeroscopia page, Tisséo’s live route and disruption notices, any TER Montaudran train, current admission and the final return. Current fares, departure times, session inventory and opening status are unknown here.',
        sources: [
          ['https://www.toulouse-tourisme.com/en/', 'Toulouse Tourism — official city planning'],
          ['https://metropole.toulouse.fr/annuaire/cite-de-lespace', 'Toulouse Métropole — Cité de l’espace access and calendar'],
          ['https://www.halledelamachine.fr/en/comment-venir/', 'Halle de La Machine — official transit access']
        ]
      }),
      g({
        slug: 'albi-episcopal-city',
        name: 'Albi Episcopal City & Toulouse-Lautrec',
        instrument: 'Brick-cathedral collection route',
        layout: 'episcopal-brick-route',
        imageQuery: 'Albi cathedral Sainte Cecile Tarn France river',
        imageAlt: 'Sainte-Cécile Cathedral and the brick episcopal city of Albi',
        purpose: 'Decide whether the Toulouse-Lautrec collection is the day’s main interior or whether you want a shorter cathedral, old-street and Tarn loop. Albi-Ville leads into one compact episcopal district; Cordes-sur-Ciel is a separate rural connection, not a free add-on.',
        summary: 'From Albi-Ville, walk into the Sainte-Cécile–Berbie district, give the Toulouse-Lautrec Museum a deliberate two-hour block, then use the palace garden and Tarn edge before returning by the old center. The exact Toulouse train back sets the finish.',
        searchSummary: 'Use liO to Albi-Ville, then walk the cathedral, Berbie/Toulouse-Lautrec Museum and Tarn loop. Reserve the collection block, check its seasonal closure, and do not add Cordes without a verified return.',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-09-19',
        hubAccess: 'The official museum visitor page describes Albi-Ville as about a 15-minute walk from the Toulouse-Lautrec Museum. Search the liO route specifically to Albi-Ville; a different Albi stop changes the first and last walk. Use the city’s Purple Circuit only after the museum and return train are fixed.',
        hubTradeoff: 'Choose one long museum visit and the episcopal district, or shorten the interior for a longer Tarn/Pont-Vieux circuit. Adding Cordes-sur-Ciel is a separate bus, car or booked-tour decision and takes time away from Albi itself.',
        hubDuration: 'Keep a full day for Albi from Toulouse because the return train is part of the route. An Albi overnight suits a slower museum-and-river pace, but is a hotel move rather than an extra attraction.',
        choices: [
          ['Cathedral first', 'Use the Sainte-Cécile exterior and interior, then the Berbie courtyard and garden. This suits a short day, a service-sensitive date or visitors more interested in the city’s episcopal architecture than a long gallery visit.'],
          ['Collection-led day', 'Make the Toulouse-Lautrec Museum the anchor. Its official visitor page recommends allowing at least two hours to see the collection and Berbie Palace setting; add the cathedral and garden around that block, not another town.'],
          ['Tarn and Pont-Vieux loop', 'Shorten the museum visit, pass through Place de la Trébaille and Place Savène, then use the Tarn viewpoint and Pont-Vieux. This trades gallery time for the river and the lower-city perspective.']
        ],
        access: 'From Toulouse, search liO Train / TER for Toulouse-Matabiau to Albi-Ville on the exact date, and select the matching return before leaving. The Toulouse-Lautrec Museum says Albi-Ville is about a 15-minute walk away. Follow its practical-information page for a step-free museum visit; the approach and current local bus alternatives still need a date-specific check.',
        tradeoff: 'A two-hour museum block, Sainte-Cécile, gardens and river walk already fill a generous day. Cordes-sur-Ciel requires its own confirmed regional bus or a prearranged driver/tour and may make the museum, or even a reliable return, the thing you sacrifice.',
        stages: [
          ['Arrive at Albi-Ville', 'Check the live liO return before boarding from Toulouse-Matabiau. Walk toward Place Sainte-Cécile; the museum estimates about 15 minutes from this station, so leave luggage at the hotel rather than carrying it through the center.'],
          ['Read the cathedral district', 'Visit Sainte-Cécile when current worship and visitor access permit, then move through the square to the Berbie courtyard. Use the cathedral interior as an alternative anchor if the museum’s date is closed.'],
          ['Give Berbie its own block', 'Enter the Toulouse-Lautrec Museum if open and allow its recommended two hours. Take a seated pause in the palace garden and use the view toward the Tarn instead of adding another booked site.'],
          ['Close the loop through the old center', 'Follow the Purple Circuit toward Place de la Trébaille, Place Savène and Saint-Salvi, then choose the Pont-Vieux/Tarn return or a shorter direct line to Albi-Ville. Leave a margin for the exact train you selected.']
        ],
        fallback: 'For rain or a cathedral service, prioritize the currently open Toulouse-Lautrec Museum and the covered old-center streets; shorten the river edge. If the museum is closed, keep Sainte-Cécile’s exterior, the Berbie garden and a compact Purple Circuit. If your preferred return does not fit, stay overnight in Albi rather than adding Cordes on an improvised bus.',
        watch: [
          ['Buy the right Albi stop', 'The museum identifies Albi-Ville as the nearest train station. Check the actual stop in both directions; do not assume every liO result or replacement coach uses it.'],
          ['The museum week changes by season', 'The official page publishes split winter hours and summer hours, with a weekly closure in the colder season. Its current page also offers online and on-site tickets; the exact date’s opening and remaining inventory are not checked here.'],
          ['The river is the exposed extension', 'The cathedral and Berbie district are the day’s core. Keep the Tarn and Pont-Vieux loop short in high heat or rain, and turn back toward Albi-Ville before the final connection becomes tight.']
        ],
        duration: 'Set aside roughly five to seven hours on the ground as an editorial planning estimate, including lunch and the station walk. The museum itself recommends at least two hours for its collection and palace setting; the dated rail return determines whether the river loop fits.',
        combine: 'Keep Albi as one day from Toulouse. Add Cordes-sur-Ciel only if liO’s dated coach planner or a confirmed tour gives you usable stops in both directions; otherwise choose an Albi overnight and keep the day local.',
        verify: 'Confirm the liO train to Albi-Ville and the return, Toulouse-Lautrec Museum’s date-specific hours/ticket inventory, Sainte-Cécile visitor or worship access, and weather before leaving. Current rail fares, departure times, ticket availability and cathedral opening are unknown here.',
        sources: [
          ['https://www.albi-tourisme.fr/en/itineraries/purple-circuit-heritage-route/', 'Albi Tourism — Purple Circuit heritage route'],
          ['https://www.albi-tourisme.fr/en/decouvrir-albi/patrimoine-unesco/le-palais-de-la-berbie/', 'Albi Tourism — Berbie Palace and museum visit context'],
          ['https://www.musee-toulouse-lautrec.com/en/preparer-sa-visite/informations-pratiques/', 'Musée Toulouse-Lautrec — hours, station walk and accessibility'],
          ['https://www.musee-toulouse-lautrec.com/en/billetterie/', 'Musée Toulouse-Lautrec — online and on-site ticket information']
        ]
      }),
      g({
        slug: 'carcassonne-cite-bastide',
        name: 'Carcassonne Cité & Bastide',
        instrument: 'Two-city fortification plan',
        layout: 'citadel-bastide-plan',
        imageQuery: 'Carcassonne medieval city walls France panorama',
        imageAlt: 'Fortified walls and towers of the medieval Cité de Carcassonne',
        purpose: 'Choose between a booked Château Comtal/rampart visit and a free public walk through the Medieval City, then connect it to the Bastide Saint-Louis by the Pont Vieux route. The station, Canal du Midi and Narbonnaise Gate are not the same arrival point.',
        summary: 'Begin in the Bastide by Carcassonne station, use Place Carnot and the Canal du Midi to read the lower city, then cross Pont Vieux to the Medieval City and its Narbonnaise Gate. Set the Château Comtal slot before the uphill walk; return to the Bastide rather than adding a distant drive.',
        searchSummary: 'From Carcassonne station, choose the 30-minute walk or date-checked RTCA line 3 from Canal du Midi to Narbonnaise Gate. Separate the free Medieval City from the limited-slot Château Comtal, then return via Pont Vieux to the Bastide.',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-09-19',
        hubAccess: 'liO reaches Carcassonne station beside the lower-city/Canal du Midi side, not the Narbonnaise Gate. The tourist office estimates about 30 minutes on foot to the Medieval City; its current getting-around page lists RTCA line 3 between the Canal du Midi and Narbonnaise Gate. Verify the dated stop, route and return before choosing an arrival base.',
        hubTradeoff: 'A booked Château Comtal and ramparts visit makes this a Cité-led day; a free street-and-wall exterior loop leaves more time for Place Carnot, the Bastide and canal. The Cité and Bastide together already fill a day—keep nearby vineyards and Cathar-country castles separate.',
        hubDuration: 'Give both the Cité and Bastide a full day with the station approach included. A Cité-only visit is shorter, but still needs the climb, gate choice and a return route; an overnight by Place Carnot suits an evening/early walk without a same-day Toulouse train.',
        choices: [
          ['Booked castle and ramparts', 'Choose this for the interior history and wall walk. The monument currently reports limited places and recommends booking; check the live slot, entry rules and price before fixing the train.'],
          ['Public Cité, no castle slot', 'The tourist office describes the Medieval City as an open district; the Château Comtal and adjoining ramparts are separately ticketed. Walk the gates, lanes and public viewpoints, then spend the saved time in the lower town.'],
          ['Bastide and Cité in one day', 'For a first visit, start with Place Carnot/Canal du Midi, cross Pont Vieux and enter through the chosen gate, then descend to the Bastide. This compares the lived grid with the fortified hill without adding a third destination.']
        ],
        access: 'The liO rail arrival is Carcassonne station in the lower city, not the medieval entrance. The tourist office estimates about a 30-minute station-to-Cité walk; its current RTCA guidance names line 3 from the Canal du Midi to the Narbonnaise Gate. If you stay uphill, settle luggage first. A same-day return depends on the live train and bus dates, not the route label.',
        tradeoff: 'The interior castle/rampart loop, full medieval lanes, and Bastide all compete for the same daylight. Choose the booked monument as the anchor or use the Cité’s public streets and spend longer below; the route gives up vineyards and distant Cathar sites either way.',
        stages: [
          ['Arrive at Carcassonne station', 'Choose a Bastide hotel near the station/Place Carnot if rail simplicity and dinner matter; choose a Cité stay only after confirming the luggage transfer and uphill access. Put bags away before the walk.'],
          ['Read the Bastide first', 'Use the Canal du Midi edge and Place Carnot to orient the lower grid, then walk toward Pont Vieux. The tourist office estimates about 25 minutes from the canal to the Cité by this viewpoint route; treat that as a planning estimate, not a timed guarantee.'],
          ['Cross to the Narbonnaise Gate', 'Follow Pont Vieux and the uphill approach, then choose the Château Comtal slot or a public-lanes loop. If booked, follow the monument’s current security and circulation instructions; no ticket availability is assumed.'],
          ['Descend and finish below', 'Return by the Bastide route or check RTCA line 3 from the Canal du Midi to Narbonnaise Gate in the live planner. Close at Place Carnot or the station side with a rail margin; do not append a winery that requires another unverified transfer.']
        ],
        fallback: 'If the Château Comtal has no suitable slot, the public Medieval City, gate approaches and Bastide still make a complete day. In rain or heat, shorten the outer wall walk, use the lower city for a longer meal/interior break, and retain the train back. If your mobility needs do not suit the climb, ask the tourist office about the current accessible pathway before committing; the guide does not claim every rampart section is step-free.',
        watch: [
          ['The station is not the gate', 'The tourist office estimates about 30 minutes on foot from the station. RTCA line 3 is listed from the canal to Narbonnaise Gate, but the exact day’s stop, service and return remain to be checked.'],
          ['A castle ticket is separate from street access', 'The Medieval City is a public district; the Château Comtal and adjoining ramparts have their own limited capacity. The current page recommends advance booking, but the date’s price and slot inventory are unknown here.'],
          ['Event and weather days change the route', 'Reopen the city event calendar and monument notices before travel. Heat increases the uphill cost; rain or a closure can make the Bastide-first route and a shorter public Cité visit the better plan.']
        ],
        duration: 'Allow about five to seven hours on the ground for both districts plus a booked castle visit; this is an editorial day shape, not a measured tour time. A public-streets-only Cité visit can be shorter, but the station approach, river crossing and return still count.',
        combine: 'Pair the Cité only with the Bastide and Canal du Midi edge. Keep Albi, Toulouse and distant Cathar castles on other days; an overnight in Carcassonne is the clean way to protect an evening inside the walls.',
        verify: 'Check liO to/from Carcassonne, RTCA line 3’s date-specific stop and service, Château Comtal ticket inventory/price and event notice, current basilica access, and Météo-France before leaving. Current departures, fares, monument availability and the actual opening status are unknown here.',
        sources: [
          ['https://www.tourisme-carcassonne.fr/en/', 'Carcassonne Tourist Office — official city planning'],
          ['https://www.tourisme-carcassonne.fr/en/useful/getting-around/', 'Carcassonne Tourist Office — walk and RTCA route options'],
          ['https://www.tourisme-carcassonne.fr/en/useful/faq/', 'Carcassonne Tourist Office — city and castle access distinction'],
          ['https://www.remparts-carcassonne.fr/en/visit/practical-information', 'Château and ramparts — booking, capacity and visitor rules']
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
