import { defineItalyCluster, italyGuide } from './italy-guide-builder.mjs';

const g = italyGuide;
const c = defineItalyCluster;

export const italySouthIslandsClusters = [
  c({
    slug: 'puglia',
    name: 'Puglia',
    region: 'Southern Italy',
    band: 'south-adriatic',
    family: 'limestone-two-coast-logbook',
    label: 'Adriatic-to-Ionian route book',
    tagline: 'Choose one rail spine or one coast before the heel widens around you.',
    reviewDate: '11 October 2026',
    reviewIsoDate: '2026-10-11',
    hubIntro: 'Plan Puglia as two rail-and-street systems with a deliberate handover: Bari and the Adriatic main line in the north, then Lecce and one chosen Salento coast in the south. Alberobello and the Itria Valley sit on a different branch network; Castel del Monte and many beaches add a last mile that a map pin cannot solve. Choose the base first, then verify the exact operator, station and return for each day.',
    stay: 'For four to six nights, use two bases rather than moving every night: stay around Bari Centrale or the Murat grid for rail arrivals and the Bari Vecchia walk, then move to Lecce’s historic centre for its evening streets and one coast day. With three nights, choose the north (Bari, Trani and one Itria day) or the south (Lecce and one coast). An Alberobello or Locorotondo overnight earns its luggage move only when an early or late town visit matters; a countryside masseria needs a confirmed car or transfer plan.',
    transfer: 'Trenitalia is the first check for the Adriatic corridor and Trani; FS Sud Est serves branch routes toward Alberobello and the Salento, including Otranto and Gallipoli. Treat operator, station, replacement bus and ticket as separate checks. Castel del Monte is an inland last-mile commitment, while coastal beaches may sit beyond the rail stop: confirm the onward link and return before reserving a timed visit or leaving the base.',
    season: 'In July and August, put the exposed stone-town walk in the cooler part of the day, keep an indoor or shaded pause for midday and expect the coast to attract heavier visitor demand. Outside the main beach season, do not assume a bus, beach facility or attraction keeps its summer pattern. Weekday, Sunday, holiday and works notices can change the useful branch connection in any month; build the day from the dated operator journey planner.',
    fallback: 'Keep a complete walkable day in the current base. From Bari, use the old town, castle area and waterfront; from Lecce, link the central squares and Baroque streets. If a rural bus or branch return does not work, drop the excursion instead of inventing a taxi connection or crossing to the other coast.',
    sources: [
      ['https://www.italia.it/en/puglia', 'Italia.it — official Puglia destination overview'],
      ['https://www.italia.it/en/puglia/bari', 'Italia.it — official Bari, Trani and Alberobello destination information'],
      ['https://www.fssudest.it/', 'FS Sud Est — official rail and bus service information'],
      ['https://www.trenitalia.com/en.html', 'Trenitalia — official national and regional rail planning']
    ],
    guides: [
      g({
        slug: 'bari-trani-castel-del-monte',
        name: 'Bari, Trani & Castel del Monte',
        instrument: 'Port-to-fortress hinge',
        layout: 'port-fortress-hinge',
        structure: 'rail-to-street-braid',
        imageQuery: 'Bari old town waterfront Basilica San Nicola Puglia',
        imageAlt: 'A view over historic buildings in Bari',
        purpose: 'Decide whether the day belongs to Bari, rail-linked Trani or the inland fortress, then expose the transfer that makes the chosen branch possible instead of advertising all three as an effortless circuit.',
        summary: 'Choose a Bari street day, a Trani rail-and-harbour walk or a separate Castel del Monte commitment; one return spine cannot make all three a relaxed circuit.',
        localPlan: {
          title: 'Sleep beside the walk or beside the railway',
          intro: 'Bari is the flexible base; Trani is a complete rail day, while the fortress needs a separate last-mile contract.',
          stayTitle: 'Choose a Bari arrival zone',
          stay: 'The Murat grid around Bari Centrale suits luggage, rail changes and a quick start; it trades the intimate old-town evening for broader streets. A Bari Vecchia or waterfront stay puts the Basilica of San Nicola, Cathedral and seafront closer on foot, but check the actual door-to-car access and route with bags before booking. Choose Trani overnight only if you want a slower harbour evening; it does not remove the separate journey to Castel del Monte.',
          walkTitle: 'Keep the city walks on their own axes',
          walk: 'In Bari, make one old-town loop through the Basilica of San Nicola, Bari Cathedral and the Swabian Castle, then finish along the waterfront or return through the Murat grid. In Trani, connect the station arrival to the cathedral by the harbour and return to that same station. The fortress is not a third leg of this walk: its remote approach needs a verified onward service or arranged transfer.',
          bookingTitle: 'Verify each entrance separately',
          booking: 'The Swabian Castle, religious interiors and Castel del Monte have separate visitor rules. Reopen the official venue notices for the intended date and check whether a timed admission or reservation is actually offered before fixing transport around it. Confirm any coach or local transfer to the fortress in both directions; a train to a nearby town is not a completed visit.',
          seasonTitle: 'Protect the exposed hours and the return',
          season: 'Bari Vecchia and Trani’s harbour streets are most comfortable outside the hottest part of a summer day; keep a shaded meal or indoor visit between walks. Sunday and holiday rail patterns can differ from a weekday search. Choose the outbound and return in Trenitalia’s date-specific planner, then verify any separate local connection through its own operator.'
        },
        choices: [
          ['Bari: harbour and old-town circuit', 'Start from a Bari base and connect the Basilica of San Nicola, Cathedral, Swabian Castle and waterfront on foot. Choose this for the least transfer risk; leave Trani and the inland fortress for other days.'],
          ['Trani: cathedral and working harbour', 'Take the date-confirmed Adriatic service, read the cathedral’s seafront setting, then follow the harbour and historic streets before returning to the same station. This gives a coherent day without the fortress transfer.'],
          ['Castel del Monte: one inland anchor', 'Make the UNESCO-listed fortress the day’s fixed visit. Confirm the usable gateway, admission conditions and both last-mile directions first; leave Bari and Trani for a separate rail-and-walk day.']
        ],
        access: 'Use Bari Centrale for the city or the exact Trenitalia calling point for Trani; save the return before starting the walk. Castel del Monte is inland and not beside a rail platform. Identify the date-valid rail or bus gateway, who operates the onward leg, where it leaves you and how it returns before treating the monument as reachable.',
        tradeoff: 'Bari and Trani reward a walk joined by their own station and street grids. Castel del Monte changes the day into a timed rural transfer and a site visit. Adding it to both cities would trade the cathedral, harbour and meal for connection risk, so select one operating system.',
        stages: [
          ['Choose the day before leaving Bari', 'Set the destination first: the Bari Vecchia loop needs no intercity leg; Trani begins with a confirmed Trenitalia service; Castel del Monte needs an onward connection that you have checked separately.'],
          ['Walk one city sequence', 'For Bari, join Basilica di San Nicola, the Cathedral and Castello Svevo before the waterfront. For Trani, keep the cathedral and harbour together. For the fortress, follow the official approach and do not add a coastal city.'],
          ['Cross only the gate you planned', 'Check each church, museum or fortress entrance on its own official page. Keep lunch and a rest within the chosen town so an opening notice or slow visit does not force a missed rural connection.'],
          ['Return through the verified gateway', 'Reach the named station or local stop with reserve time. Recheck the return and any replacement service; make dinner or a second town optional until the base is secure.']
        ],
        fallback: 'If the fortress transfer or admission does not work, stay in Bari for the old-town and waterfront circuit. If the Trani rail day becomes unreliable, give Bari’s cathedral, Basilica and castle area their own full walk instead of substituting an unplanned car hire.',
        watch: [
          ['A nearby station is not the fortress entrance', 'A rail search to a town in the area does not identify the onward operator, drop-off or return. Confirm all three for the exact date before making the fortress the anchor.'],
          ['The city has several independent doors', 'A basilica, cathedral, municipal museum and state site can each have their own access and worship notices. Check the actual intended interior rather than assuming one city-wide opening pattern.'],
          ['Old-town car access needs its own plan', 'Bari and Trani streets are not a simple hotel drop-off grid. Ask the accommodation about the permitted approach and luggage handoff; do not drive into a restricted area because a map route appears shorter.']
        ],
        duration: 'Guide estimates: keep a full day for Bari, Trani or Castel del Monte. Bari and Trani can fill one long day only if the date-specific trains leave time for the cathedral and harbour walk; do not add the fortress to that pair. Treat these as planning estimates, not measured visits.',
        combine: 'Pair Basilica di San Nicola, Bari Cathedral and the nearby castle area on the Bari walk. In Trani, keep the cathedral, harbour and historic streets together. Give Castel del Monte its own day unless a verified private transfer is the point of the itinerary.',
        verify: 'Before setting out, check the selected train’s exact stop and return, each venue’s current admission and closure notice, and both directions of any separate transfer to Castel del Monte. Do not assume an advertised bus connection operates on your weekday or season.',
        whatToSee: [
          ['BARI VECCHIA · LIVING CENTRE', 'Read three civic thresholds', 'Follow the Basilica of San Nicola, Bari Cathedral and Castello Svevo as separate places within the old street fabric. Treat worship as active use: if a church is closed to visitors during a service, continue through the lanes and return only if the notice permits.'],
          ['MURAT & WATERFRONT · BASE GRID', 'Use the city plan as a second walk', 'The Murat grid around the station and the older lanes serve different needs. Link the waterfront and a chosen civic or cultural stop rather than doubling back through the same crowded old-town streets. This is the practical return route for a rail-based stay.'],
          ['TRANI · CATHEDRAL TO HARBOUR', 'Let the seafront set the route', 'Trani Cathedral stands beside the harbour, so the station-to-cathedral-to-quays walk reads as one compact city day. Return to Trani station along the known street line; do not treat this as a launch point for the inland fortress.']
        ],
        sources: [
          ['https://www.italia.it/en/puglia/bari', 'Italia.it — official Bari, Swabian Castle and Trani destination information'],
          ['https://www.italia.it/en/puglia/trani', 'Italia.it — official Trani cathedral and destination information'],
          ['https://cultura.gov.it/luogo/castel-del-monte', 'Italian Ministry of Culture — Castel del Monte official visitor record'],
          ['https://www.trenitalia.com/en.html', 'Trenitalia — date-specific official rail planning']
        ]
      }),
      g({
        slug: 'alberobello-itria-valley',
        name: 'Alberobello & the Itria Valley',
        instrument: 'Trulli bus-radius grid',
        layout: 'trulli-bus-radius-grid',
        structure: 'ztl-threshold-ring',
        imageQuery: 'Alberobello Aia Piccola trulli Puglia panorama',
        imageAlt: 'Stone trulli dwellings and conical roofs in Alberobello',
        purpose: 'Choose one realistic public-transport radius around Alberobello, Locorotondo, Martina Franca or Ostuni and prevent the Itria Valley from becoming a string of white towns with invisible transfers.',
        summary: 'Choose a home base and one station-to-street sequence: read Alberobello’s trulli districts first, then add one other valley town only when the dated return works.',
        localPlan: {
          title: 'Choose one trulli base and one outward radius',
          intro: 'Alberobello rewards a slower visit across its two historic districts; the next town is a separate transport decision.',
          stayTitle: 'Sleep in town or commit to a rural stay',
          stay: 'Stay near Alberobello’s centre when the priority is walking Rione Monti and Aia Piccola without a final transfer. Locorotondo or Martina Franca works better as an overnight base only when its own train or bus connection fits the rest of the trip. A countryside masseria offers quiet and open space but needs a car or a host-confirmed transfer; do not assume a train station is nearby.',
          walkTitle: 'Separate the commercial and residential districts',
          walk: 'Start at the Santa Lucia belvedere, read the Rione Monti slopes around Largo Martellotta, then cross to Aia Piccola and the Territorial Museum if it is open. The two areas tell different stories: one is visitor-facing, the other includes inhabited trulli. Keep photographs and pauses on public routes and do not enter private doorways or yards.',
          bookingTitle: 'Book the actual interior, not the roofline',
          booking: 'The UNESCO value is the settlement and dry-stone building system, not a promise that each trullo is a public museum. Check the Territorial Museum and any house-museum or guided visit separately for current opening and admission terms. Confirm the chosen branch or bus journey for both directions before reserving a second-town visit.',
          seasonTitle: 'Plan shade, opening days and the branch return',
          season: 'The stone lanes and viewpoints offer little dependable midday shade in summer; make the longer open-air walk early or later and keep water and a rest stop in the plan. Weekends and local events can change the feel of the main streets, while rail and bus patterns vary by date. Do not add a second hill town until the onward and return connections are both published for your day.'
        },
        choices: [
          ['Alberobello in depth', 'Walk the belvedere, Rione Monti and Aia Piccola, then visit one interpretation space if its current opening works. This gives the settlement real context but leaves another town for a separate day.'],
          ['Locorotondo or Martina Franca', 'Choose one as a second town only after matching the FS Sud Est service and the return. Locorotondo adds a compact circular centre; Martina Franca changes the scale toward a baroque civic core. The connection decides whether the comparison is worthwhile.'],
          ['Ostuni as a main-line arrival plus last mile', 'Ostuni’s railway arrival is outside its hill town. Select this for a separate white-town day only when the local link in both directions is confirmed; do not append it automatically to Alberobello.']
        ],
        access: 'Alberobello, Locorotondo and Martina Franca use the FS Sud Est network; Ostuni’s Trenitalia station is outside its hilltop centre. Match the operator, exact station, bus stop or replacement service, and final return for the date. In Alberobello, the viewpoint, two trulli districts and museum are a town walk rather than three independent transfers.',
        tradeoff: 'A rail-and-bus day keeps the driver out of the picture but limits how many towns fit and in what order. A car can connect the rural stops only if the driver also plans parking, any ZTL approach and the old-town walk; neither choice turns the whole valley into one effortless loop.',
        stages: [
          ['Choose the first gateway', 'For Alberobello, save the actual FS Sud Est or bus departure point and return before leaving Bari or the coast. If you are sleeping locally, use the first walk for orientation rather than stacking towns.'],
          ['Read Alberobello by district', 'From the Santa Lucia overlook, descend toward Rione Monti and its public-facing streets. Cross to Aia Piccola for a quieter residential context and use the Territorial Museum only after checking its visitor notice.'],
          ['Add one valley town only if the clock works', 'Before lunch, check the onward stop and the connection back to your base. If there is no useful service window, stay in Alberobello for a slower meal, museum or street loop instead of improvising a taxi.'],
          ['Leave on the route you checked', 'Return to the exact station or bus stop with time to spare. Confirm whether the service is a regular train, bus or replacement coach and do not transfer to a second operator on an assumed through-ticket.']
        ],
        fallback: 'If the second-town service fails, stay in Alberobello for both trulli districts, the museum if open and a proper meal. If the branch itself is disrupted, use the complete walk in Bari or Lecce rather than trying to rescue the day with several unbooked rural transfers.',
        watch: [
          ['The town districts are not open-air sets', 'Aia Piccola is inhabited. Photograph from public lanes, keep voices low and never enter a trullo or courtyard unless it is explicitly open to visitors.'],
          ['A two-town plan has two timetable edges', 'The outbound service alone is not enough. Verify the onward leg and the last practical return for the same day, including Sunday, holiday or replacement-bus notices.'],
          ['An attractive countryside stay can be isolated', 'A masseria or trullo accommodation may sit away from a town station. Confirm its exact arrival, luggage and evening transport with the host before booking a car-free stay.']
        ],
        duration: 'Guide estimate: allow most of a day for Alberobello’s two districts, interpretation space and meal. A second town can turn it into a long day once the actual train or bus gaps are counted; do not plan a fixed number of hours from a generic route search.',
        combine: 'Pair Rione Monti and Aia Piccola on foot. Add Locorotondo or Martina Franca only when both branches and the return leave you time in the town, not just time between platforms. Keep Ostuni, Bari and Castel del Monte on distinct days.',
        verify: 'Check FS Sud Est’s date-specific journey and disruption notices, the exact stop and return, the museum’s current visitor terms, and any transfer from a rural lodging. No branch timetable or attraction hours are guaranteed by this editorial plan.',
        whatToSee: [
          ['SANTA LUCIA · OVERLOOK', 'Orient before descending', 'Use the belvedere to read the settlement as a whole: the conical roofs are part of a working town rather than isolated monuments. Choose the descent that keeps you on public streets and avoids repeating the same steep lane.'],
          ['RIONE MONTI · VISITOR DISTRICT', 'Notice the roof and street together', 'Italia.it identifies this slope as the district most dedicated to tourism. Look beyond the shopfronts at how the dry-stone trulli form a dense street fabric, then leave space for a separate meal or interpretation stop rather than shopping every lane.'],
          ['AIA PICCOLA · INHABITED QUARTER', 'Read a quieter residential landscape', 'The official destination account describes about 400 inhabited trulli here and the Territorial Museum among the district’s buildings. Keep to public lanes, avoid doorways and use the museum only under its current opening rules.']
        ],
        sources: [
          ['https://www.italia.it/en/puglia/bari', 'Italia.it — official Alberobello districts and visitor context'],
          ['https://whc.unesco.org/en/list/787/', 'UNESCO World Heritage Centre — Trulli of Alberobello'],
          ['https://www.fssudest.it/', 'FS Sud Est — official Puglia rail and bus journey planning']
        ]
      }),
      g({
        slug: 'lecce-otranto-gallipoli',
        name: 'Lecce, Otranto & Gallipoli',
        instrument: 'Salento dual-coast clock',
        layout: 'dual-coast-clock',
        structure: 'two-shore-clock',
        imageQuery: 'Lecce Basilica Santa Croce baroque facade Puglia',
        imageAlt: 'Aerial view over Lecce’s rooftops and streets',
        purpose: 'Use Lecce as a deliberate base, then choose either the Adriatic Otranto branch or the Ionian Gallipoli branch rather than crossing the Salento peninsula twice for a checklist.',
        summary: 'Base in Lecce for a walk through Roman and Baroque landmarks, then choose Otranto or Gallipoli as one coast day with a separately verified return.',
        localPlan: {
          title: 'Choose a walkable Lecce base and one coast',
          intro: 'Lecce is the inland base; beaches and the two coastal towns need their own transfer and return decision.',
          stayTitle: 'Pick the side of the station that fits the trip',
          stay: 'A room in the historic centre around Piazza Sant’Oronzo or Piazza Duomo makes the Roman and Baroque walk and evening streets easy on foot. A stay nearer Lecce station suits luggage and early rail departures but adds a walk into the centre. Lecce is not a beach resort: choose Otranto or Gallipoli for an overnight coast stay only when you want the slower shoreline evening and have checked the onward arrival with bags.',
          walkTitle: 'Use three connected historic-centre zones',
          walk: 'Build the city day from Piazza Sant’Oronzo and the Roman amphitheatre, continue to Via Umberto I for Santa Croce and the former Celestini complex, then finish at the enclosed setting of Piazza Duomo. Keep this core on foot; a coast day is a separate outward-and-back leg rather than a detour in the same loop.',
          bookingTitle: 'Check worship, interiors and the coastal operator',
          booking: 'Basilica, cathedral, castle and Roman-site access are separate decisions. Reopen each official notice for admission, worship closures and any timed entry. For Otranto or Gallipoli, confirm which operator serves the chosen branch, whether a transfer or replacement coach is involved, the old-town walk from the arrival stop and the return to Lecce before booking an interior.',
          seasonTitle: 'Let heat and the coast’s service calendar shape the day',
          season: 'In summer, walk the stone centre in cooler hours and use an indoor visit or long meal through midday; beaches need their own access and facilities check. Outside peak season, coastal buses and visitor services may have a different pattern. Otranto and Gallipoli face opposite sides of the peninsula, so pick one and check its sea and weather conditions rather than trying to cross between them.'
        },
        choices: [
          ['Lecce centre on foot', 'Join Piazza Sant’Oronzo and the Roman amphitheatre to Santa Croce and Piazza Duomo. This is the complete low-transfer day and leaves the beach to another trip.'],
          ['Otranto: Adriatic harbour and cathedral', 'Choose the eastern coast branch for one harbour town and its cathedral precinct. It adds a sea-facing historic centre but uses the day and return window that Gallipoli would take.'],
          ['Gallipoli: island old town and Ionian edge', 'Choose the western branch for the old town across its bridge and the harbour-facing streets. A later coastal finish is possible only when the dated return is confirmed; do not infer a summer service from a map.']
        ],
        access: 'Lecce rail and bus departures serve different operators and are not one interchangeable stop. Otranto and Gallipoli sit on separate FS Sud Est branches; check the exact departure point, any transfer or replacement coach, the walk from the destination stop into the old town and the final return to Lecce.',
        tradeoff: 'Lecce itself gives a dense walk between Roman, Baroque and civic landmarks. Otranto and Gallipoli each add a coastal old town, but on opposite sides of the peninsula. Visiting both turns the day into a connection test; choose one coast or overnight there.',
        stages: [
          ['Walk Lecce as a city, not a beach gateway', 'Start with Piazza Sant’Oronzo and the amphitheatre; continue to Santa Croce on Via Umberto I and the Piazza Duomo enclosure. If a church or civic interior is closed, keep to the street route and return only if its current notice allows.'],
          ['Select Otranto or Gallipoli before departure', 'Use the correct Lecce operator and departure point for the coast you chose. Check the dated service both ways and note any transfer or substitute bus before leaving the centre.'],
          ['Read the port from its actual arrival stop', 'In Otranto, keep the harbour, cathedral and castle area on one town walk. In Gallipoli, cross to the old-town island and link the bridge, castle edge and harbour. Add bathing only when access, sea state and facilities work for the date.'],
          ['Return before planning the evening', 'Walk back to the stop or station you saved and protect the ride to Lecce. Do not depend on a late dinner or on switching to the other coast unless a later connection is actually published.']
        ],
        fallback: 'If the coastal train or bus is disrupted, stay in Lecce and complete the Roman-and-Baroque centre walk. If sea conditions make bathing unsuitable, keep the selected port’s streets and historic setting; do not cross the peninsula to chase a different forecast.',
        watch: [
          ['The beach is not next to Lecce', 'The city’s historic centre is inland. A coast visit needs an outward and return service plus the last walk from its stop; do not book a beach day on the assumption that “Salento” is one local zone.'],
          ['Otranto and Gallipoli do not share one branch', 'They serve different coasts and use different return journeys. Read the operator and exact travel date twice before you commit to either town.'],
          ['A church timetable is not a city timetable', 'Santa Croce, Lecce Cathedral and Otranto Cathedral are active religious sites with their own visitor notices. Keep the exterior sequence usable if worship limits access.']
        ],
        duration: 'Guide estimates: reserve five to seven hours for Lecce’s core on foot with an indoor visit and meal. Give a coast its own day; combining it with a full city itinerary depends on the published service and can leave little time beyond the old-town walk.',
        combine: 'Within Lecce, connect Piazza Sant’Oronzo, Santa Croce and Piazza Duomo on foot. Pair the city with Otranto or Gallipoli only when the rail/bus timing still allows a complete port walk and return; do not combine both coasts.',
        verify: 'Check the current visitor notice for each church or monument, the date-specific FS Sud Est service to the selected coast, any replacement bus, sea and weather conditions, and the return to Lecce before planning dinner.',
        whatToSee: [
          ['PIAZZA SANT’ORONZO · ROMAN CORE', 'Begin with the city’s public square', 'Use the square and Roman amphitheatre as the orientation point for the central walk. Read the surviving Roman fabric alongside the civic street grid, then choose whether a ticketed interior belongs in this day.'],
          ['VIA UMBERTO I · SANTA CROCE', 'Look at the façade as a crafted surface', 'Italia.it locates the Basilica of Santa Croce on Via Umberto I beside the former Celestini convent complex. Give the carved façade its own pause; inside access follows the basilica’s current worship and visitor notice.'],
          ['PIAZZA DUOMO · ENCLOSED PRECINCT', 'End the centre walk in a quieter square', 'The cathedral square is a distinct spatial room from the open commercial centre. Use it as the walk’s finish or a shade break, then return through the route you chose rather than treating the coast as the next block.']
        ],
        sources: [
          ['https://www.italia.it/en/puglia/lecce', 'Italia.it — official Lecce visitor information and landmark context'],
          ['https://www.fssudest.it/', 'FS Sud Est — official Salento rail and bus journey planning'],
          ['https://www.trenitalia.com/en.html', 'Trenitalia — official national and regional rail planning']
        ]
      })
    ]
  }),
  c({
    slug: 'basilicata-calabria',
    name: 'Basilicata & Calabria',
    region: 'Southern Italy',
    band: 'southern-apennines',
    family: 'ravine-strait-cross-section',
    label: 'Ravine-to-strait section',
    tagline: 'Choose the cave city, the mountain gate or the rail coast; distance decides first.',
    hubIntro: 'Basilicata and Calabria join dramatic stone, high national parks and long coastlines, but they do not form one effortless road trip. Matera looks toward Bari by regional railway, Pollino gateways depend on roads and local services, and the Tyrrhenian rail line connects only part of Calabria. The useful question is which access contract deserves a base.',
    stay: 'Give Matera at least two nights if the Murgia plateau matters, Pollino or Maratea their own two- or three-night base, and the Tropea–Reggio corridor two or more nights. Combining both regions works as a slow southbound trip, not as a sequence of day excursions from Naples.',
    transfer: 'Ferrovie Appulo Lucane links Bari and Matera through its own network; it is not a Trenitalia arrival. Maratea has a main-line station, while Pollino trailheads need a named road gateway, guide or transfer. Calabria’s Tyrrhenian railway helps between coastal towns, but beaches and cliff centres still add steep walks or local transport.',
    season: 'Exposed Sassi paths and Calabrian cliffs become punishing in summer heat. Mountain snow, fire restrictions, storms and short winter light change Pollino access; coastal businesses and boats are highly seasonal even where the railway continues to run.',
    fallback: 'Every landscape day needs a complete town fallback: Matera’s museums and upper city, Maratea or Rotonda around Pollino, and Reggio Calabria’s museum and waterfront on the strait. Do not replace a closed mountain or sea gate with an unverified long-distance taxi.',
    sources: [
      ['https://www.basilicataturistica.it/', 'Basilicata Turistica — official regional destination portal'],
      ['https://calabriastraordinaria.it/en/', 'Calabria Straordinaria — official regional tourism portal'],
      ['https://ferrovieappulolucane.it/', 'Ferrovie Appulo Lucane — official Matera regional transport information']
    ],
    guides: [
      g({
        slug: 'matera-sassi-murgia',
        name: 'Matera, the Sassi & the Murgia',
        instrument: 'Sassi stair-and-gate section',
        layout: 'sassi-stair-section',
        structure: 'hill-town-section',
        imageQuery: 'Matera Sassi ravine Murgia panorama morning',
        imageAlt: 'The stone houses and churches of the Sassi overlooking the Matera ravine',
        purpose: 'Choose between a Sassi street reading, controlled rock-church interiors and a Murgia plateau excursion while accounting for stairs, heat and the separate journey from Bari.',
        summary: 'Arrive through the correct Matera transport network, descend one Sasso with a turning point, use one interpretive interior, and cross the ravine only when the park access and return are confirmed.',
        choices: [
          ['Sassi civic route', 'Link the upper city, Sasso Barisano or Caveoso and a selected cave-house interpretation. This gives a coherent urban history but does not include a full plateau walk.'],
          ['Rock-church depth', 'Reserve attention for one or two rupestrian interiors and their conservation context. The route gains evidence and shade but sacrifices panoramic mileage.'],
          ['Murgia plateau', 'Use an official park gateway, guide or verified transfer to read Matera from across the ravine. It offers landscape scale but adds exposure, trail conditions and a separate return.']
        ],
        access: 'Bari–Matera journeys normally use Ferrovie Appulo Lucane, whose Bari platforms and ticketing differ from Trenitalia. Matera Centrale sits in the upper city; the Sassi descend by stepped lanes. Murgia trailheads and Belvedere access must be matched to an official road, bus, tour or walking route rather than guessed across the ravine.',
        tradeoff: 'The Sassi contain enough vertical distance and interpretation for a full day. Crossing to the plateau gains the defining landscape view but gives up some interiors and requires stronger heat, footwear and return planning.',
        stages: [
          ['Orient in the upper city', 'Arrive at Matera Centrale or the confirmed coach stop, place luggage outside the route and use Piazza Vittorio Veneto or another known overlook to understand the two Sassi before descending.'],
          ['Descend one inhabited layer', 'Follow a bounded lane sequence through one Sasso, distinguishing active homes, worship spaces and visitor interiors. Avoid repeated ravine-to-ridge climbs for photographs.'],
          ['Use one evidence door', 'Enter the selected cave dwelling, museum or rupestrian church according to its current ticket and conservation rules. Plateau visitors leave only through the preselected official gateway.'],
          ['Climb or return deliberately', 'Finish by the planned upper-city ascent or the confirmed Murgia transfer. Reach the station or accommodation without relying on a last-minute vehicle in the ravine.']
        ],
        fallback: 'If Murgia access, heat or trail conditions are unsuitable, keep the complete Sassi route and add an upper-city museum or Casa Noha-style interpretation. If a rock church closes, use an official alternative already on the same slope rather than crossing the city.',
        watch: [
          ['Bari has two rail systems', 'A national-rail itinerary to Bari does not automatically include the separate FAL departure. Confirm the station area, ticket and final Matera service.'],
          ['Stone multiplies heat and steps', 'Shade is uneven and polished lanes can be slippery. Place water and a real seated break before the return climb.'],
          ['The plateau is a protected landscape', 'Rupestrian churches, grazing land and trails have access and conduct rules. Use official park information and never describe an informal ravine crossing as a shortcut.']
        ],
        duration: 'Allow six to eight hours for one Sassi route and selected interiors. Add the Murgia plateau only with a full day and confirmed access; two nights make the weather and light decision far safer.',
        combine: 'Combine the Sassi with one upper-city museum or a planned Murgia visit. Keep Alberobello, Pollino and the Calabrian coast for separate travel days.',
        verify: 'Check FAL notices, the exact Sassi interiors and ticket rules, Murgia park access or guide arrangements, heat or storm conditions and the route back to the upper city.',
        sources: [
          ['https://www.basilicataturistica.it/', 'Basilicata Turistica — official Matera and regional planning information'],
          ['https://www.parcomurgia.it/', 'Murgia Materana Park — official protected-area information']
        ]
      }),
      g({
        slug: 'maratea-pollino',
        name: 'Maratea & Pollino',
        instrument: 'Mountain-sea base selector',
        layout: 'mountain-sea-selector',
        structure: 'road-stage-folio',
        imageQuery: 'Maratea Basilicata coast mountains Tyrrhenian Sea',
        imageAlt: 'The mountainous Basilicata coast and blue Tyrrhenian Sea near Maratea',
        purpose: 'Choose a rail-served Tyrrhenian coast base or a Pollino mountain gateway before planning activities, because the two landscapes use different transport, weather and safety systems.',
        summary: 'Commit to Maratea’s town-and-coast ladder or one named Pollino gateway, complete the selected landscape at its proper pace, and keep a town-based retreat for weather or access failure.',
        choices: [
          ['Maratea town and coast', 'Use the rail-served town as a base for its historic centre, harbour or one confirmed beach connection. It preserves independence but does not solve an inland park day.'],
          ['Pollino lower landscape', 'Choose Rotonda, Viggianello or another official gateway for a visitor centre and lower trail. This offers park context with less exposure but requires road or local-transfer planning.'],
          ['Guided high-country day', 'Book a qualified outing for a more demanding ridge, forest or loricate-pine objective. It gains mountain depth while surrendering schedule flexibility to weather and guide decisions.']
        ],
        access: 'Maratea station lies on the Tyrrhenian rail line, but the upper historic centre, harbour and scattered beaches require distinct onward plans. Pollino spans Basilicata and Calabria with multiple distant gateways; select one municipality, trailhead and return instead of navigating to the park name.',
        tradeoff: 'The coast rewards rail access and flexible town time, while Pollino rewards an overnight gateway and a narrow weather window. Trying to use Maratea as an automatic trailhead spends the day on roads and weakens both experiences.',
        stages: [
          ['Choose sea or mountain', 'Check the coastal rail or confirmed park transfer before breakfast and cancel the other branch. Save the staffed station, visitor centre or meeting point that will also close the route.'],
          ['Enter through the real gateway', 'In Maratea, climb or transfer from the station to the chosen town or coast level. In Pollino, meet the guide or visitor-centre route at the named municipality rather than at a generic map pin.'],
          ['Use one landscape fully', 'Walk the bounded town-and-coast line or complete the selected signed trail with its turnaround. Do not add a second beach, peak or province after the safety margin is consumed.'],
          ['Return to a resilient base', 'Finish at Maratea station or the park gateway before light, weather or local service deteriorates. Keep dinner and onward rail after the protected return.']
        ],
        fallback: 'If sea conditions or coastal access fail, use Maratea’s historic centre and land viewpoints. If Pollino weather, fire rules or trail status close the objective, stay with the official visitor centre and gateway town rather than substituting an unsigned route.',
        watch: [
          ['The park has many entrances', 'A search result for Pollino does not identify a usable trailhead. Match the activity to one municipality, road and official route.'],
          ['Rail does not remove the coastal climb', 'Maratea’s station, upper town, harbour and beaches occupy different levels. Confirm the local link instead of promising a flat walk.'],
          ['Mountain conditions outrank the itinerary', 'Snow, heat, fire restrictions, wind and thunderstorms can close or change routes. A guide or park notice may shorten the day without making the visit a failure.']
        ],
        duration: 'Allow a full day for either Maratea or one Pollino outing, with at least two nights in the selected base. Moving between the coast and a mountain gateway belongs to a transfer day, not the centre of a hike.',
        combine: 'Combine Maratea with one coast level, or Pollino with one gateway town. Do not combine either with Matera or Tropea on the same sightseeing day.',
        verify: 'Check regional rail status, the precise local coast connection, Pollino park and municipal notices, guide or transfer confirmation, fire and weather conditions and the return before dark.',
        sources: [
          ['https://www.basilicataturistica.it/', 'Basilicata Turistica — official Maratea and regional destination information'],
          ['https://parcopollino.gov.it/', 'Pollino National Park — official park information']
        ]
      }),
      g({
        slug: 'tropea-scilla-reggio',
        name: 'Tropea, Scilla & Reggio Calabria',
        instrument: 'Strait rail-coast fold',
        layout: 'strait-rail-coast-fold',
        structure: 'coast-capacity-braid',
        imageQuery: 'Tropea cliff Santa Maria dell Isola Calabria sea',
        imageAlt: 'Tropea’s cliff-top old town and Santa Maria dell’Isola above the sea',
        purpose: 'Choose one Tyrrhenian coast town or Reggio Calabria’s strait-and-museum day, then use the railway as a spine without pretending every beach and cliff centre begins at the platform.',
        summary: 'Arrive at the station that belongs to the chosen town, account for its climb or waterfront approach, give one coast or collection the long block, and keep the final southbound or northbound train visible.',
        choices: [
          ['Tropea and the Costa degli Dei', 'Prioritize the cliff town, one beach access and a viewpoint. It gives the classic coast day but sacrifices Scilla and the Reggio museum.'],
          ['Scilla and Chianalea', 'Use the compact strait town for castle, fishing quarter and shoreline. It offers a coherent rail day but leaves less museum or broad beach time.'],
          ['Reggio and the Riace Bronzes', 'Make MArRC and the Falcomatà waterfront the anchor. This is the strongest poor-weather choice and the clearest cultural finish, at the cost of a resort beach day.']
        ],
        access: 'Tropea, Scilla and Reggio Calabria sit on the Tyrrhenian railway but not at identical service levels. Tropea station is above or inland from parts of the coast, Scilla includes steep connections between upper town and Chianalea, and Reggio has more than one urban station. Match the train to the final walking line.',
        tradeoff: 'Each stop can consume a full day once cliffs, bathing, meals and museum controls are counted. Using rail to sample all three replaces lived time with platforms; one base and one secondary stop is the practical maximum.',
        stages: [
          ['Board for the chosen level', 'Select the train whose station fits Tropea, Scilla or the Reggio museum, and save the final usable return. Do not board merely because the destination name appears on a coastal map.'],
          ['Resolve the vertical connection', 'Locate the safe stairs, road, bus or level waterfront route before committing to a beach. In Reggio, approach MArRC through the station that keeps the museum slot comfortable.'],
          ['Use coast or collection', 'Give the beach and historic centre, Chianalea and castle, or the museum and waterfront a complete central block. Keep changing, security and filtered museum entry inside the timing.'],
          ['Fold back to the railway', 'Climb from the coast or leave the museum in time for the protected train. Treat a sunset as optional unless a later service and station approach are already known.']
        ],
        fallback: 'If wind or sea conditions remove the beach, keep Tropea’s upper town or Scilla’s castle-and-quarter circuit. If coastal rail is disrupted, Reggio’s MArRC and waterfront form the safest complete base-city alternative.',
        watch: [
          ['A station can still be uphill', 'Rail access does not mean level access to sand or harbour. Account for stairs, heat and the climb back with wet gear.'],
          ['Museum entry has conservation controls', 'Access to the Riace Bronzes may be managed in groups or filter spaces. Follow the museum’s current instructions and do not promise instant entry.'],
          ['Sea and rail failures compound', 'Rough water can close beach activity while disruption narrows the return. Preserve one earlier train rather than assuming the timetable will recover.']
        ],
        duration: 'Allow six to eight hours for one coast town or Reggio. A Tropea–Scilla pair requires an early rail plan and sacrifices beach depth; all three belong across several nights.',
        combine: 'Combine one coast town with a modest same-line stop only when both train directions remain robust. Keep Pollino, Matera and Sicily for separate days.',
        verify: 'Check the exact regional train and urban station, beach or castle access, sea and heat conditions, MArRC entry notices and the last practical return to the chosen base.',
        sources: [
          ['https://calabriastraordinaria.it/en/travel-tips/calabria-on-the-road', 'Calabria Straordinaria — official regional coast and road context'],
          ['https://museoarcheologicoreggiocalabria.cultura.gov.it/en/', 'National Archaeological Museum of Reggio Calabria — official visitor information']
        ]
      })
    ]
  }),
  c({
    slug: 'western-sicily',
    name: 'Western Sicily',
    region: 'Sicily',
    band: 'sicily-west',
    family: 'norman-salt-temple-atlas',
    label: 'Norman-and-salt route atlas',
    tagline: 'Let one sacred door, temple ridge or island boat set the western clock.',
    hubIntro: 'Western Sicily combines Palermo’s dense living capital, large archaeological landscapes and a wind-exposed ferry coast. The rail and bus network reaches useful gateways, but Monreale, Selinunte, Erice and the Egadi Islands each add a different final connection. A good plan fixes one cultural or maritime contract before counting towns.',
    stay: 'Four nights in Palermo supports the capital plus Monreale or Cefalù. Agrigento and Trapani work better as separate two-night bases when the Valley of the Temples, Selinunte, Erice, salt pans or an Egadi landing matter. Seven to ten nights gives western Sicily a coherent shape without daily luggage moves.',
    transfer: 'Palermo–Cefalù and Palermo–Agrigento use rail corridors, Monreale uses an urban or regional road connection, and Selinunte requires a Castelvetrano-area last mile. Trapani’s cableway, buses and island hydrofoils respond differently to wind. Always identify the terminal, operator and return, not only the place name.',
    season: 'Summer heat makes temple ridges and stone cities slow, while island capacity and beach demand rise. Wind can halt hydrofoils or the Erice cableway. Shoulder seasons reduce heat but thin some maritime and tourism services; winter rain changes unpaved archaeological and reserve routes.',
    fallback: 'Base every excursion on a complete mainland city day: Palermo for Monreale or Cefalù, Agrigento town and museum for the temple landscape, and Trapani for Erice or the Egadi Islands. A cancelled boat or cableway should shorten the geography, not trigger a race to another province.',
    sources: [
      ['https://www.visitsicily.info/en/', 'Visit Sicily — official regional tourism portal'],
      ['https://turismo.comune.palermo.it/', 'Palermo Welcome — official municipal tourism portal'],
      ['https://www.trenitalia.com/en.html', 'Trenitalia — official rail planning for Sicily']
    ],
    guides: [
      g({
        slug: 'palermo-monreale-cefalu',
        name: 'Palermo, Monreale & Cefalù',
        instrument: 'Norman-city sacred-hours ledger',
        layout: 'norman-sacred-hours-ledger',
        structure: 'living-sacred-threshold',
        imageQuery: 'Palermo Cathedral Sicily Norman architecture city',
        imageAlt: 'Palermo Cathedral rising above the historic city streets',
        purpose: 'Decide whether to read Palermo in depth, climb to Monreale or take the coastal railway to Cefalù, while treating worship hours and the return connection as structural parts of the day.',
        summary: 'Begin on Palermo’s walkable Norman and market axis or leave on one verified excursion, use a single sacred or civic interior as the anchor, and return before the branch loses resilience.',
        choices: [
          ['Palermo depth', 'Connect the Palazzo dei Normanni area, cathedral, one market and a selected civic or sacred interior. This gives the richest urban context but gives up a hill or coastal excursion.'],
          ['Monreale sacred-art day', 'Use the confirmed road connection for cathedral mosaics, cloister and hill-town context. It gains a concentrated Norman argument but depends on worship access and a bus return.'],
          ['Cefalù rail day', 'Take the coastal train for the cathedral, old town and a bounded shore line. It offers an independent seaside city but should not be presented as an add-on after Monreale.']
        ],
        access: 'Palermo Centrale, Palazzo Reale–Orleans and urban bus stops solve different parts of the capital. Monreale has no railway and requires a named bus stop or transfer; Cefalù has a rail station followed by a town walk. Confirm church access separately from transport.',
        tradeoff: 'Palermo’s markets, palaces and sacred interiors already fill a day. Monreale or Cefalù adds a complete second argument and removes urban depth; attempting both excursions converts the day into terminal changes and worship-hour risk.',
        stages: [
          ['Choose city, hill or coast', 'Start in central Palermo for the urban route, at the exact Monreale stop, or on the confirmed Cefalù train. Save the return before entering the first controlled interior.'],
          ['Meet the sacred threshold', 'Use the cathedral, Palatine or cloister access in its current worship and ticket window. Keep respectful dress and security time inside the route rather than as a final warning.'],
          ['Read the surrounding settlement', 'In Palermo, connect one market and civic street; in Monreale, use the town and viewpoint; in Cefalù, walk cathedral-to-water without turning the beach into an assumed extra.'],
          ['Return through the known gateway', 'Reach the same bus stop or rail station with reserve time. Palermo dining begins only after the excursion has safely closed.']
        ],
        fallback: 'If Monreale transport or worship access fails, retain Palermo’s Norman and Arab-Norman evidence. If the Cefalù line is disrupted, use Palermo’s waterfront, markets and one museum; do not replace it with an unverified intercity bus.',
        watch: [
          ['Sacred spaces keep sacred clocks', 'Masses, ceremonies and dress rules can interrupt tourist access even when a generic listing says open. Check each official institution close to the visit.'],
          ['Monreale is a road branch', 'A Palermo transit pass or map does not prove the hill connection. Identify operator, boarding point and return for the exact day.'],
          ['Cefalù adds beach friction', 'Changing, sand, heat and the walk back to the station consume real time. Choose cathedral-and-town depth or a longer beach block rather than assuming both at maximum length.']
        ],
        duration: 'Allow six to eight hours for Palermo depth or either excursion. Palermo plus Monreale can fill a long day with an early start; Cefalù is strongest as its own day.',
        combine: 'Combine Monreale with a bounded Palermo evening or Cefalù with its own shore. Keep Agrigento, Trapani and the Egadi Islands for separate bases or days.',
        verify: 'Check Palermo transit and event notices, the Monreale connection, Trenitalia service to Cefalù, cathedral and palace access, weather and the final return.',
        sources: [
          ['https://turismo.comune.palermo.it/', 'Palermo Welcome — official municipal visitor information'],
          ['https://www.visitsicily.info/en/', 'Visit Sicily — official regional information for Palermo, Monreale and Cefalù']
        ]
      }),
      g({
        slug: 'agrigento-selinunte',
        name: 'Agrigento & Selinunte',
        instrument: 'Temple-ridge transit sequence',
        layout: 'temple-ridge-transit-sequence',
        structure: 'excavation-traverse',
        imageQuery: 'Temple of Concordia Valley of the Temples Agrigento sunset',
        imageAlt: 'The Temple of Concordia on the archaeological ridge at Agrigento',
        purpose: 'Choose one of western Sicily’s two large archaeological landscapes, understand its entrance geometry and heat exposure, and reject the tempting but impractical same-day double-site claim.',
        summary: 'Enter Agrigento’s long temple ridge from a chosen gate or reach Selinunte through its actual town gateway, keep the visit selective, and protect the bus or rail return before the exposed final sector.',
        choices: [
          ['Valley of the Temples ridge', 'Walk a planned east-to-west or west-to-east sequence through Akragas. It offers the clearest monumental line but demands heat, distance and exit planning.'],
          ['Agrigento museum and city', 'Pair a bounded park section with the archaeological museum or upper town. This reduces ridge mileage and improves interpretation at the cost of seeing fewer temples.'],
          ['Selinunte landscape', 'Base near Castelvetrano or Marinella di Selinunte and give the vast coastal park its own day. It gains scale and sea context but has the weaker public-transport last mile.']
        ],
        access: 'Agrigento Centrale and the intercity bus station sit above the archaeological zone; city buses reach different park gates. Selinunte lies beyond Castelvetrano and requires a dated local bus, transfer or car. The sites are far apart and should never share one ordinary sightseeing day.',
        tradeoff: 'The Valley’s linear ridge and Selinunte’s dispersed plateau both reward slow spatial reading. Choosing one loses a second famous site but preserves shade stops, museum context and a reliable return.',
        stages: [
          ['Choose the archaeological city', 'Commit to Agrigento or Selinunte before departure and save its actual entrance, exit and return stop. Carry water and sun protection appropriate to an exposed site.'],
          ['Enter from the useful gate', 'At Agrigento, choose the gate that supports a one-direction ridge; at Selinunte, arrive through the official visitor entrance rather than an unsurveyed road edge.'],
          ['Work a selective sequence', 'Prioritize a coherent set of sanctuaries, urban evidence or museum rooms. Use the official map and current closures instead of chasing every named ruin.'],
          ['Exit toward transport', 'Stop before the final reserve is consumed and use the planned exit. Reach the city bus, local transfer or rail connection without crossing the whole site again.']
        ],
        fallback: 'In extreme heat or partial closure, shorten Agrigento to the museum plus a bounded temple sector, or Selinunte to the accessible acropolis zone. If the Selinunte last mile fails, stay in Castelvetrano or move the park to another day rather than improvising roadside travel.',
        watch: [
          ['Valley is a ridge, not a compact plaza', 'Entrances and exits matter. A return to the wrong gate can add a long exposed walk after the useful visit is over.'],
          ['Selinunte’s scale hides transport risk', 'The park is large and its public gateway is not the Castelvetrano rail platform. Verify both local directions before boarding the regional train.'],
          ['Heat changes the safe route', 'Stone, limited shade and seasonal fire or weather notices may remove a planned sector. Carry a shorter official sequence and obey closures.']
        ],
        duration: 'Allow six to eight hours for either park including its local transfer. Agrigento benefits from two nights; Selinunte is strongest from a western base rather than a rushed Palermo return.',
        combine: 'Combine the Valley with the archaeological museum or Selinunte with Marinella, not with the other major park. Palermo and Trapani remain separate travel days.',
        verify: 'Check official park notices and open sectors, entrance and exit information, city or local bus times, rail status, heat and weather warnings, and the final return.',
        sources: [
          ['https://cultura.gov.it/luogo/parco-archeologico-e-paesaggistico-della-valle-dei-templi', 'Italian Ministry of Culture — Valley of the Temples official record'],
          ['https://parchiarcheologici.regione.sicilia.it/', 'Regione Siciliana — official archaeological parks portal']
        ]
      }),
      g({
        slug: 'trapani-erice-egadi',
        name: 'Trapani, Erice & the Egadi Islands',
        instrument: 'Salt-pan ferry manifest',
        layout: 'salt-island-ferry-manifest',
        structure: 'island-return-billet',
        imageQuery: 'Trapani salt pans windmills Sicily sunset',
        imageAlt: 'Salt pans and windmills glowing at sunset near Trapani',
        purpose: 'Choose between a hill town, salt-lagoon landscape and a genuine island landing, then let wind and the last return govern the itinerary before scenery does.',
        summary: 'Use Trapani as the mainland control point, commit to Erice, the salt pans or one Egadi island, and return through the exact cableway, bus or ferry terminal named at the start.',
        choices: [
          ['Trapani and Erice', 'Pair Trapani’s historic peninsula with the hill town by cableway or bus. It gives vertical contrast but remains vulnerable to wind and operator changes.'],
          ['Salt pans and Marsala edge', 'Follow a confirmed reserve, museum or guided salt-pan visit on land. It avoids an island crossing but still requires a real local connection and protection from heat.'],
          ['One Egadi island', 'Choose Favignana, Levanzo or Marettimo according to ferry pattern and desired walking. An island landing gains maritime depth but surrenders Erice and mainland flexibility.']
        ],
        access: 'Trapani’s rail/bus area, cableway station and ferry port are separate. The Erice cableway may stop in wind, while replacement buses use their own stops. Egadi hydrofoils and ferries differ in journey, vehicle rules and sea tolerance; match the ticket to the chosen island and terminal.',
        tradeoff: 'Erice, the salt pans and an island each deserve the day’s weather window. Combining two exposes the route to missed terminals and leaves no recovery when wind changes; one commitment creates a complete western-Sicily day.',
        stages: [
          ['Read the wind at Trapani', 'Confirm cableway, bus or ferry status before leaving the mainland centre and locate the exact departure point. Save a land fallback while staff and information are available.'],
          ['Board one system', 'Use the Erice connection, the verified salt-pan service or the named island vessel. Keep identity, baggage, bicycle and boarding conditions with the correct operator.'],
          ['Complete the chosen landscape', 'Walk a bounded hill-town, reserve or island route with a deliberate meal and turnaround. Do not add a distant beach or village after the return margin begins.'],
          ['Return before the exposure grows', 'Reach the cableway, stop or port early enough to absorb ordinary queues and weather changes. Finish in Trapani only after the mainland return is complete.']
        ],
        fallback: 'If ferries stop, stay in Trapani and use the salt-pan or city route only when its transport works. If the cableway closes, take the confirmed bus or remain in Trapani; do not hire an unverified boat or assume a late replacement.',
        watch: [
          ['Wind can close more than boats', 'The Erice cableway and marine services have different thresholds but may both be affected. Check each operator, not a generic weather icon.'],
          ['Island names conceal different commitments', 'Favignana, Levanzo and Marettimo have different sailing patterns, walking needs and services. One ticket does not make them interchangeable.'],
          ['Salt pans are working and protected', 'Use designated access, tours and reserve rules. Do not walk onto levees or production areas for sunset photographs.']
        ],
        duration: 'Allow a full day for Erice, the salt landscape or one island. An overnight on an Egadi island changes the ferry decision and should be treated as a separate itinerary.',
        combine: 'Combine Trapani with one branch only. Keep Palermo, Agrigento and Selinunte for separate days or bases.',
        verify: 'Check Trapani departure points, cableway and replacement-bus status, Liberty Lines notices, sea and wind forecasts, reserve access, island conduct rules and the final mainland return.',
        sources: [
          ['https://trapaniwelcome.it/en/', 'Trapani Welcome — official provincial destination portal'],
          ['https://www.libertylines.it/', 'Liberty Lines — official Egadi hydrofoil and ferry information']
        ]
      })
    ]
  }),
  c({
    slug: 'eastern-sicily',
    name: 'Eastern Sicily',
    region: 'Sicily',
    band: 'sicily-east',
    family: 'volcano-baroque-ferry-atlas',
    label: 'Volcano-and-baroque control atlas',
    tagline: 'Separate the volcano gate, theatre coast and baroque rail triangle.',
    hubIntro: 'Eastern Sicily is shaped by Etna, the Ionian coast and the rebuilt baroque southeast, but each has a different operating system. Catania can support a city or volcano day, Taormina sits above its railway station, Milazzo controls most Aeolian departures, and Syracuse is a better southeast base than a daily Palermo commute. Choose the gateway before promising yourself the view.',
    stay: 'Three nights in Catania allows a city day and one weather-dependent Etna attempt. Add two nights around Taormina or Milazzo when the Ionian coast or Aeolian Islands matter, and two to four nights in Syracuse or the southeast for Noto, Modica and Ragusa without serial late returns.',
    transfer: 'Catania’s city network, Etna excursions and Circumetnea are not a single summit service. Taormina–Giardini station lies below the hill town; Milazzo station still needs a port transfer. Syracuse, Noto, Modica and Ragusa use rail and regional buses with date-sensitive gaps and works.',
    season: 'Etna access changes with volcanic activity, snow, wind, heat and operator decisions. Summer raises city and theatre pressure and makes exposed archaeological sites demanding. Aeolian sailings depend on sea state, while winter and shoulder seasons reduce maritime frequency.',
    fallback: 'Keep Catania as the volcano fallback, Taormina or Naxos as the island-transfer fallback, and Syracuse as the southeast fallback. When an authority or operator closes a gate, preserve the base-city story instead of substituting an unofficial climb, boat or remote town.',
    sources: [
      ['https://www.visitsicily.info/en/', 'Visit Sicily — official regional tourism portal'],
      ['https://www.trenitalia.com/en.html', 'Trenitalia — official eastern Sicily rail planning'],
      ['https://www.aziendasicilianatrasporti.it/', 'AST — official Sicilian regional bus information']
    ],
    guides: [
      g({
        slug: 'catania-etna',
        name: 'Catania & Mount Etna',
        instrument: 'Volcano authority gate',
        layout: 'volcano-authority-gate',
        structure: 'volcano-status-board',
        imageQuery: 'Mount Etna above Catania Sicily city panorama',
        imageAlt: 'Mount Etna rising behind the city and rooftops of Catania',
        purpose: 'Choose a Catania city day, a lower official park route or a qualified higher-elevation product and make volcanic authority, weather and the exact flank more important than a summit promise.',
        summary: 'Use Catania as the control room, confirm the active access level before departure, enter Etna through one named flank or keep the city, and return before weather or transport removes the safe margin.',
        choices: [
          ['Catania lava-and-baroque city', 'Connect the historic centre, market, one archaeological layer and a museum. It is the resilient choice and preserves context, but gives up a mountain panorama day.'],
          ['Official lower park route', 'Choose a signed lower trail or visitor-area route appropriate to current conditions. This gains volcanic landscape with less exposure but does not imply a summit or crater-edge visit.'],
          ['Qualified high-elevation experience', 'Use the currently authorised lift, vehicle and guide product for the permitted upper zone. It gains altitude while surrendering schedule certainty to safety decisions.']
        ],
        access: 'Etna has multiple flanks and gateway towns; a Catania departure labelled “Etna” does not establish the route, altitude or return. Identify the operator, Rifugio Sapienza or other exact gateway, included transport, authorised access level and emergency cancellation terms before leaving the city.',
        tradeoff: 'A serious city route and a serious volcano route each fill a day. Higher altitude offers scale but creates the most fragile schedule; a lower park route sacrifices elevation for more control and a safer return.',
        stages: [
          ['Read the authority layer', 'Check Etna Park, civil-protection or operator notices and the mountain forecast before choosing city, lower park or high elevation. Cancel any route outside the currently authorised zone.'],
          ['Meet the named gateway', 'Join the exact bus, vehicle, guide or visitor-area entrance listed in the confirmed product. Carry the clothing and footwear required for altitude rather than Catania’s street temperature.'],
          ['Use only the open zone', 'Follow the signed trail or accredited guide and accept a lower turnaround when conditions change. City visitors keep one archaeological and one baroque line instead of chasing every monument.'],
          ['Close back in Catania', 'Return on the booked transport with reserve time and treat evening plans as optional. Record delays or route changes before adding a city dinner reservation.']
        ],
        fallback: 'If Etna access closes, complete Catania’s market, Roman theatre, civic museum and lava-built street route. If only the upper zone closes, use an officially open lower route; never recommend walking around a barrier or buying an unverified roadside substitute.',
        watch: [
          ['Volcanic access is authoritative', 'A clear sky does not override closures, gas, eruption or rescue restrictions. Link claims to the park and current operator, not social-media conditions.'],
          ['Etna has more than one flank', 'Transport to one visitor area cannot be repurposed for another trail. Name the side, gateway and planned return in every route.'],
          ['City and mountain climates diverge', 'Heat in Catania can coexist with cold, wind or snow at altitude. Clothing, water and turnaround decisions must follow the mountain forecast.']
        ],
        duration: 'Allow a full day for any Etna outing and five to seven hours for Catania. Keep a second Catania night so a weather cancellation does not force an unsafe same-day substitute.',
        combine: 'Combine Etna only with a modest Catania evening after the return. Keep Taormina, Syracuse and an Aeolian transfer for separate days.',
        verify: 'Check Etna Park, INGV Osservatorio Etneo and civil-protection notices, the exact operator and flank, guide and lift status, mountain weather, equipment conditions, cancellation policy and confirmed return to Catania.',
        sources: [
          ['https://parcoetna.it/', 'Etna Park — official protected-area information'],
          ['https://unescoparcoetna.it/en/', 'Etna Park UNESCO portal — official access and landscape information'],
          ['https://www.ct.ingv.it/', 'INGV Osservatorio Etneo — official volcanic monitoring information']
        ]
      }),
      g({
        slug: 'taormina-naxos-aeolian-gateway',
        name: 'Taormina, Naxos & the Aeolian Gateway',
        instrument: 'Theatre-island weather matrix',
        layout: 'theatre-island-weather-matrix',
        structure: 'island-return-billet',
        imageQuery: 'Taormina ancient theatre Etna Ionian Sea Sicily',
        imageAlt: 'Taormina’s ancient theatre overlooking the Ionian Sea and Mount Etna',
        purpose: 'Decide whether to stay on the Taormina–Naxos coast or reposition through Milazzo for the Aeolian Islands, making the hill transfer and island sailing separate decisions rather than one long day trip.',
        summary: 'Use Taormina–Giardini station or a confirmed bus for the Ionian branch, or make a deliberate luggage transfer to Milazzo, then protect the theatre slot or island sailing before adding scenery.',
        choices: [
          ['Taormina theatre and hill town', 'Give the ancient theatre, Corso Umberto and one upper viewpoint a bounded day. It offers the strongest cultural reading but includes steep access and heavy visitor pressure.'],
          ['Giardini Naxos and Ionian coast', 'Keep the route lower for the archaeological park, waterfront and beach. It reduces climbing and creates a flexible fallback, at the cost of Taormina’s hilltop interiors.'],
          ['Aeolian transfer', 'Move to Milazzo, confirm the correct port and sail to one chosen island or overnight base. This opens an archipelago but gives up the idea of a same-day Taormina add-on.']
        ],
        access: 'Taormina–Giardini railway station is near the coast below Taormina; buses, taxis or a steep approach reach the hill centre. Giardini Naxos uses separate stops. Aeolian travel normally moves through Milazzo station and then the ferry port, with operator check-in and sea-state exposure.',
        tradeoff: 'Taormina and Naxos can share one carefully bounded day, while an Aeolian landing needs its own sailing clock and preferably an overnight. Repositioning to Milazzo sacrifices another Ionian attraction but protects the island journey.',
        stages: [
          ['Choose hill, shore or island', 'Confirm the theatre and hill transfer, the Naxos entrance, or the complete train-to-port-to-island chain. Store luggage before entering any visitor route.'],
          ['Cross the actual threshold', 'Climb from the station to Taormina, enter the Naxos park from its official gate, or check in at the named Milazzo terminal with the correct operator.'],
          ['Use one horizon', 'Complete the theatre-and-town circuit, the lower archaeological coast, or one island’s bounded arrival route. Do not stack another cliff town or island after the return buffer begins.'],
          ['Protect the next base', 'Descend to the rail line or board the confirmed vessel back or onward. An island traveler treats accommodation check-in, not a late Taormina dinner, as the end of the route.']
        ],
        fallback: 'If the theatre or hill access is disrupted, use Giardini Naxos and the lower coast. If Aeolian sailings are cancelled, remain in Milazzo or on the Taormina–Naxos corridor; do not substitute an unlicensed boat or attempt a different island without lodging.',
        watch: [
          ['The rail station is not the hill town', 'Allow for the vertical connection in both directions. A short rail journey can still produce a missed theatre slot or return.'],
          ['Milazzo has a real port transfer', 'Arrival at Milazzo station does not complete ferry check-in. Confirm the current local link and terminal before choosing a train.'],
          ['Islands are not interchangeable', 'Lipari, Vulcano, Salina and the other islands have different sailing patterns, ports and terrain. Select one before buying the mainland journey.']
        ],
        duration: 'Allow six to eight hours for Taormina–Naxos. Treat an Aeolian island as a separate full day from Milazzo or, preferably, an overnight segment with weather margin.',
        combine: 'Combine Taormina with Naxos only when the hill transfer and return remain comfortable. Combine Milazzo with one island, not with the Taormina theatre.',
        verify: 'Check the archaeological park and theatre notices, Taormina hill transfer, rail status, Milazzo port connection, Liberty Lines sailing and baggage rules, sea forecast and island accommodation.',
        sources: [
          ['https://parconaxostaormina.com/', 'Naxos–Taormina Archaeological Park — official visitor information'],
          ['https://www.libertylines.it/', 'Liberty Lines — official Aeolian sailing information']
        ]
      }),
      g({
        slug: 'syracuse-noto-ragusa',
        name: 'Syracuse, Noto & Ragusa',
        instrument: 'Baroque rail triangle',
        layout: 'baroque-rail-triangle',
        structure: 'rail-to-street-braid',
        imageQuery: 'Ortigia Syracuse cathedral square Sicily baroque',
        imageAlt: 'The pale stone cathedral square on Ortigia in Syracuse',
        purpose: 'Choose Syracuse depth, a Noto day or the Ragusa–Modica branch and expose the rail and bus gaps between baroque cities instead of presenting the southeast as one walkable cluster.',
        summary: 'Base in Syracuse or another chosen southeast city, complete one archaeological or baroque axis, make at most one proven intercity move, and return before the branch service thins.',
        choices: [
          ['Syracuse and Ortigia depth', 'Pair Neapolis with a selective Ortigia route and a proper break. It offers the richest archaeology-to-living-city argument but leaves no room for another baroque town.'],
          ['Noto day', 'Use the confirmed rail or bus for a focused reconstruction-and-streets route. It gives a compact baroque reading but depends on dated transport back to the base.'],
          ['Ragusa or Modica branch', 'Choose one stepped hill city or a deliberate two-town overnight. The branch adds dramatic urban topography but should not be sold as a casual Syracuse extension.']
        ],
        access: 'Syracuse station lies on the mainland outside Ortigia and also away from parts of Neapolis. Noto, Modica and Ragusa have rail or bus links with different frequencies, works and station-to-centre climbs. Verify the exact service and old-town approach in both directions.',
        tradeoff: 'Neapolis plus Ortigia already makes a substantial Syracuse day. Choosing Noto, Ragusa or Modica trades that depth for a separate rebuilding and landscape story; trying to collect all three compresses meals, interiors and return safety.',
        stages: [
          ['Set the triangle corner', 'Begin in Syracuse for a city day or board the confirmed service to Noto, Modica or Ragusa. Save the return and station climb before leaving the platform.'],
          ['Meet one historical layer', 'Use Neapolis, an Ortigia sacred-civic line, Noto’s central axis or the selected hill city as the fixed interpretive block. Observe current site and worship access.'],
          ['Follow the city’s terrain', 'Cross Ortigia once, walk Noto’s planned street sequence or respect Ragusa and Modica’s stairs and bus links. Stop adding churches when the return climb begins.'],
          ['Close at station or base', 'Reach the correct rail or bus stop with reserve time. A Syracuse evening remains optional after arrival, not the justification for a tight branch return.']
        ],
        fallback: 'If branch transport fails, complete Syracuse with Neapolis, the archaeological museum or a shorter Ortigia circuit. If an archaeological sector closes, keep the city and museum evidence rather than switching towns mid-day.',
        watch: [
          ['Syracuse has separated visitor zones', 'Neapolis, the museum, station and Ortigia are not one doorway. Choose their order and avoid repeated mainland-island backtracking.'],
          ['Hill-city stations can be misleading', 'A station bearing the city name may sit below or outside the historic core. Include the climb, bus or taxi plan before confirming the route.'],
          ['Performance seasons alter Neapolis', 'The Greek theatre and surrounding access can change during productions and conservation work. Check the official archaeological park rather than assuming full monument access.']
        ],
        duration: 'Allow a full day for Syracuse or any separate southeast town. Noto can be a bounded day trip; Ragusa and Modica are stronger with an overnight or a carefully confirmed two-day branch.',
        combine: 'Combine Neapolis with Ortigia, or one baroque city with its own evening. Keep Etna, Taormina and the Aeolian Islands on separate days.',
        verify: 'Check archaeological park openings, current performance restrictions, Trenitalia and regional bus notices, station-to-centre access, sacred-site hours, heat and the final return.',
        sources: [
          ['https://www.visitsicily.info/en/attrazione/parco-archeologico-della-neapolis/', 'Visit Sicily — official Neapolis Archaeological Park information'],
          ['https://parchiarcheologici.regione.sicilia.it/', 'Regione Siciliana — official archaeological parks portal']
        ]
      })
    ]
  }),
  c({
    slug: 'sardinia',
    name: 'Sardinia',
    region: 'Sardinia',
    band: 'sardinia',
    family: 'granite-nuraghe-sea-permit-chart',
    label: 'Granite-and-nuraghe field chart',
    tagline: 'Choose one island quadrant, then make every ferry, road and protected shore explicit.',
    hubIntro: 'Sardinia is an island large enough to require regional bases, not a beach added to an Italian city trip. Cagliari and the south, La Maddalena and Gallura, and the Gulf of Orosei with the central mountains use different airports, ports, roads and permits. Choose one island quadrant before building a coastline checklist.',
    stay: 'Three nights supports Cagliari plus Barumini; three or four nights supports Gallura and La Maddalena; four or more nights gives the Orosei coast and one inland mountain decision enough weather margin. A complete north-to-south trip generally needs ten days or more and deliberate transfer days.',
    transfer: 'ARST buses and regional trains serve useful towns but not every beach or trailhead. Palau controls the scheduled La Maddalena ferry, while Cala Gonone, Orosei, Baunei and inland mountain towns are separate gateways. Rental cars add reach but do not remove protected-area permits, parking controls or rough-road limits.',
    season: 'Mistral and local winds can change ferries, small-boat outings and beach comfort. Summer heat, fire risk, parking controls and visitor caps constrain the coasts; mountain weather and short winter light affect Gennargentu. Some island and beach services are strongly seasonal.',
    fallback: 'Keep a land-based fallback in the same quadrant: Cagliari museums for Barumini, Palau or Caprera for an archipelago sailing, and Orosei, Cala Gonone or an inland visitor town for a coast or mountain closure. Do not cross the island to rescue a single cancelled day.',
    sources: [
      ['https://www.sardegnaturismo.it/en', 'SardegnaTurismo — official Regione Sardegna destination portal'],
      ['https://www.arst.sardegna.it/', 'ARST — official Sardinian regional transport information'],
      ['https://www.sardegnacultura.it/', 'Sardegna Cultura — official regional heritage portal']
    ],
    guides: [
      g({
        slug: 'cagliari-su-nuraxi',
        name: 'Cagliari & Su Nuraxi',
        instrument: 'Hill-to-nuraghe section',
        layout: 'hill-nuraghe-section',
        structure: 'hill-town-section',
        imageQuery: 'Cagliari Castello district Sardinia panorama sea',
        imageAlt: 'Cagliari’s Castello district rising above the city and the Gulf of Angels',
        purpose: 'Decide between Cagliari’s layered city, its lagoon-and-beach edge and a guided Su Nuraxi excursion, then make the Barumini connection and mandatory site visit explicit.',
        summary: 'Use Cagliari as the southern control point, work one hill-to-water city line or board the confirmed Barumini link, and close the day before regional transport loses frequency.',
        choices: [
          ['Castello and archaeology', 'Climb through Castello, use the Cittadella dei Musei and descend through one historic quarter. It gives the strongest island-history introduction but no nuraghe landscape.'],
          ['Lagoon and Poetto edge', 'Connect the city to Molentargius or Poetto using current urban transport and weather. It offers an ecological and coastal layer but sacrifices museum depth.'],
          ['Su Nuraxi at Barumini', 'Use the dated Barumini connection or a confirmed vehicle and join the required guided visit. It gains direct Nuragic evidence but consumes most of the day outside Cagliari.']
        ],
        access: 'Cagliari station and lower Marina district sit beneath Castello, reached by uphill streets, buses or lifts. Poetto and lagoon stops use the urban network. Barumini is inland: verify ARST or the current Barumini Link, its exact Cagliari departure and the return; Su Nuraxi admission includes a required guided visit.',
        tradeoff: 'Cagliari’s museum, upper town and coast can fill two days. Choosing Barumini gives irreplaceable archaeological context but removes a long city or beach block; it should not be presented as a quick detour.',
        stages: [
          ['Choose hill, lagoon or inland', 'Start at the lower city transport hub and confirm the Castello route, Poetto service or complete Barumini connection. Store luggage before climbing or boarding.'],
          ['Meet the interpretation point', 'Use the National Archaeological Museum or another selected civic site before the streets, or arrive at Fondazione Barumini in time for the assigned guided departure.'],
          ['Read the surrounding landscape', 'Descend Castello toward Marina, connect the lagoon to the shore, or add Casa Zapata only within the current combined visit. Keep residential and archaeological boundaries visible.'],
          ['Return to Cagliari deliberately', 'Reach the urban stop or Barumini departure point with reserve time. Protect the regional return before adding a meal or evening waterfront walk.']
        ],
        fallback: 'If Barumini transport or outdoor access fails, use Cagliari’s archaeological museum, Castello and Sant’Eulalia layers. If wind or heat weakens Poetto, retain the museum-and-historic-quarter route rather than forcing the exposed shore.',
        watch: [
          ['Su Nuraxi is a guided site', 'The archaeological area is not an unrestricted walk-in ruin. Follow the foundation’s current guided entry, footwear and weather instructions.'],
          ['The city changes level repeatedly', 'Castello, Marina, the station and coast are not flat neighbors. Include lifts, climbs and the return descent in accessibility advice.'],
          ['Regional links are date-specific', 'A promotional Barumini Link or bus may be seasonal or revised. Verify the exact service day instead of reproducing an old brochure time.']
        ],
        duration: 'Allow six to eight hours for Cagliari depth or the Barumini excursion. A city-plus-coast day is possible with a selective museum visit; Barumini should remain the day’s main commitment.',
        combine: 'Combine Castello with Marina or Poetto, or Barumini with only a relaxed Cagliari evening. Keep La Maddalena and the Gulf of Orosei for separate regional bases.',
        verify: 'Check Cagliari urban status, ARST or Barumini Link in both directions, the foundation’s guided-visit and weather rules, museum closures, heat and the final return.',
        sources: [
          ['https://cagliariturismo.comune.cagliari.it/en', 'Cagliari Turismo — official municipal visitor information'],
          ['https://www.fondazionebarumini.it/en/tickets-and-opening-hours/', 'Fondazione Barumini — official Su Nuraxi tickets and guided-access rules']
        ]
      }),
      g({
        slug: 'la-maddalena-gallura',
        name: 'La Maddalena & Gallura',
        instrument: 'Archipelago permit-and-ferry chart',
        layout: 'archipelago-permit-chart',
        structure: 'island-return-billet',
        imageQuery: 'La Maddalena archipelago Sardinia granite turquoise sea',
        imageAlt: 'Granite islands and clear water in the La Maddalena archipelago',
        purpose: 'Choose a scheduled island landing, a Caprera land day or an authorised archipelago boat itinerary while separating public ferry transport from protected-area excursions.',
        summary: 'Reach Palau with the mainland return understood, cross on the scheduled La Maddalena ferry or join a verified operator, use one island system fully, and respond to wind before the last crossing becomes fragile.',
        choices: [
          ['La Maddalena town and island road', 'Use the scheduled ferry, town and a bounded main-island coast circuit. It gives the most independent day but does not include remote-island landings.'],
          ['Caprera land day', 'Cross from La Maddalena to Caprera for Garibaldi history, signed roads and selected coves or trails. It gains depth but requires local vehicle, bus, bicycle or realistic walking choices.'],
          ['Authorised archipelago boat', 'Book a compliant excursion whose route and landings follow current park rules. It gains wider seascape but hands timing and destinations to weather, permits and the operator.']
        ],
        access: 'Scheduled vehicle and passenger ferries leave Palau for La Maddalena; they are not the same product as sightseeing boats. Palau itself requires a confirmed Gallura road or bus approach. Caprera is linked by bridge from La Maddalena, while other islands need authorised marine access and current park rules.',
        tradeoff: 'A scheduled landing offers town context and control; a boat excursion offers breadth but less certainty and no promise of every beach. Caprera rewards a full land day. Combining all three produces rushed boardings and weak protected-area practice.',
        stages: [
          ['Establish the Palau return', 'Confirm mainland arrival, parking or bus, scheduled ferry status and the final connection beyond Palau. Boat-excursion guests verify the exact pier and operator separately.'],
          ['Cross on the correct product', 'Board the public ferry for La Maddalena and Caprera, or check in with the authorised excursion. Keep vehicle, bicycle, baggage and identification conditions with the matching ticket.'],
          ['Use one island system', 'Walk the town-and-coast line, follow a bounded Caprera route or accept the operator’s permitted island sequence. Respect closures, nesting areas and no-landing zones.'],
          ['Recover the mainland margin', 'Return to La Maddalena port or the excursion pier before wind and queues threaten the connection. Reach Palau before committing to an onward Gallura journey.']
        ],
        fallback: 'If excursion boats cancel but scheduled ferries operate, use La Maddalena town or Caprera under current land conditions. If all crossings stop, stay in Palau and use a mainland Gallura route rather than seeking an informal boat.',
        watch: [
          ['Public ferry is not a park tour', 'A Palau–La Maddalena ticket provides transport to the inhabited island, not access or landing rights throughout the archipelago.'],
          ['Wind rewrites the route', 'Mistral and sea state can alter vessels, landings and comfort. Accept the operator or authority decision and keep a mainland alternative.'],
          ['Protected beaches have real limits', 'Budelli and other sensitive places can have landing, swimming, anchoring or access restrictions. Describe only currently authorised behavior.']
        ],
        duration: 'Allow a full day from Palau for La Maddalena, Caprera or an archipelago excursion. An overnight on La Maddalena creates a much safer buffer for wind and island depth.',
        combine: 'Combine La Maddalena town with a bounded main-island or Caprera route. Keep Costa Smeralda road touring, Cagliari and Orosei for separate days or bases.',
        verify: 'Check Palau access, scheduled ferry notices, national-park rules, authorised operator and pier, wind and sea forecast, landing restrictions and the final mainland connection.',
        sources: [
          ['https://www.sardegnaturismo.it/en/explore/la-maddalena?language=en-gb', 'SardegnaTurismo — official La Maddalena destination information'],
          ['https://www.lamaddalenapark.it/', 'La Maddalena Archipelago National Park — official rules and notices']
        ]
      }),
      g({
        slug: 'gulf-orosei-gennargentu',
        name: 'Gulf of Orosei & Gennargentu',
        instrument: 'Coast-mountain expedition gate',
        layout: 'coast-mountain-expedition-gate',
        structure: 'summit-operating-stack',
        imageQuery: 'Cala Goloritze Gulf of Orosei Sardinia limestone coast',
        imageAlt: 'White limestone cliffs and turquoise water at Cala Goloritzé',
        purpose: 'Choose a Gulf boat day, the regulated Cala Goloritzé hike or a Gennargentu mountain route and make the correct gateway, permit, water and turnaround non-negotiable.',
        summary: 'Base at Orosei, Cala Gonone, Baunei or an inland mountain town according to the chosen objective, confirm authority and weather, complete one coast or mountain line, and return before sea or road conditions deteriorate.',
        choices: [
          ['Gulf boat day', 'Leave from the named Orosei or Cala Gonone port with a licensed operator and accept the day’s permitted stops. It gains coastal scale but depends on sea state and landing rules.'],
          ['Cala Goloritzé regulated hike', 'Start from the official Baunei-side trailhead with any current reservation, environmental fee and visitor limit satisfied. It gains a true land approach but requires a strenuous climb back.'],
          ['Gennargentu mountain day', 'Choose one signed route from a suitable inland gateway such as Fonni or another confirmed municipality. It offers upland ecology but is not an extension of a beach day.']
        ],
        access: 'Orosei, Cala Gonone, Baunei plateau trailheads and Gennargentu gateways are separated by mountain roads. A boat ticket does not grant a beach landing where marine rules prohibit it, and a Cala Goloritzé booking does not provide transport to the trailhead. Mobile coverage and public transport can be limited.',
        tradeoff: 'The sea route shows more coastline, the hike gives one cove an earned land sequence, and Gennargentu replaces water with mountain depth. Each uses the full safety and attention budget; combining them on one day is not credible.',
        stages: [
          ['Select the exact gateway', 'Confirm the port, Baunei trailhead or mountain municipality before leaving accommodation. Download maps and permits while connectivity is reliable.'],
          ['Pass the authority gate', 'Check in with the licensed boat operator, show the required hike reservation or follow the official mountain access. Carry the stated water, footwear and sun or weather protection.'],
          ['Use one turnaround', 'Follow permitted coves, descend only the reserved trail, or complete the signed upland route. Turn back at the planned time even when the destination appears close.'],
          ['Close before exposure rises', 'Return to port, trailhead or gateway with daylight and weather margin. Report any changed landing, trail or road condition before planning the next day.']
        ],
        fallback: 'If boats cancel, use an accessible mainland beach or Orosei/Cala Gonone town without attempting a private sea crossing. If Cala Goloritzé is full or closed, choose an officially open lower route. If mountain weather fails, remain with the gateway town and cultural sites.',
        watch: [
          ['Boat approach is not landing permission', 'Marine protection rules can require vessels to keep distance or prohibit landing at sensitive coves. The operator and authority define the lawful stop.'],
          ['The hike ends with the climb', 'Reaching Cala Goloritzé is only half the route. Water, heat and ascent time must be reserved before descending.'],
          ['One map label spans many roads', 'Gulf of Orosei and Gennargentu do not share a single visitor gate. Name the municipality, road and trailhead, and avoid unsurfaced shortcuts not endorsed by the authority.']
        ],
        duration: 'Allow a full day for a boat, regulated cove hike or mountain route, plus at least two nights in the appropriate gateway. A weather reserve day materially improves an Orosei or Gennargentu stay.',
        combine: 'Combine the chosen route with its gateway town only. Keep La Maddalena, Barumini and Cagliari for separate regional bases.',
        verify: 'Check Comune di Baunei and regional protected-area notices, current reservation or permit rules, licensed boat status, marine and mountain weather, road and trail conditions, required water and final daylight.',
        sources: [
          ['https://sardegnaturismo.it/en/explore/park-gulf-orosei-and-gennargentu', 'SardegnaTurismo — official Gulf of Orosei and Gennargentu information'],
          ['https://www.comunedibaunei.it/', 'Comune di Baunei — official local access and regulation notices']
        ]
      })
    ]
  })
];
