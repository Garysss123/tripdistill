const date = '12 October 2026';
const isoDate = '2026-10-12';

const official = {
  sbb: ['https://www.sbb.ch/en', 'SBB — date-specific rail connections'],
  meteo: ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss — forecast and warnings'],
  basel: ['https://www.basel.com/en', 'Basel Tourism'],
  bvb: ['https://www.bvb.ch/en/', 'Basler Verkehrs-Betriebe — BVB'],
  beyeler: ['https://www.fondationbeyeler.ch/en', 'Fondation Beyeler'],
  kunst: ['https://kunstmuseumbasel.ch/en', 'Kunstmuseum Basel'],
  engadin: ['https://www.engadin.ch/en/', 'Engadin Tourism'],
  rhb: ['https://www.rhb.ch/en', 'Rhaetian Railway — RhB'],
  mountains: ['https://www.corvatsch-diavolezza.ch/en/', 'Corvatsch Diavolezza Lagalb'],
  graubunden: ['https://www.graubuenden.ch/en', 'Graubünden Tourism'],
  davos: ['https://www.davos.ch/en', 'Davos Klosters Tourism'],
  arosa: ['https://arosalenzerheide.swiss/en', 'Arosa Lenzerheide'],
  lugano: ['https://www.luganoregion.com/en', 'Lugano Region'],
  ticino: ['https://www.ticino.ch/en/', 'Ticino Tourism'],
  generoso: ['https://montegeneroso.ch/en', 'Monte Generoso Railway'],
  nav: ['https://www.lakelugano.ch/en/', 'Lake Lugano Navigation Company'],
  locarno: ['https://www.ascona-locarno.com/en', 'Ascona-Locarno Tourism'],
  centovalli: ['https://www.centovalli.ch/en/', 'Centovalli Railway'],
  verzasca: ['https://www.verzasca.com/en/', 'Verzasca Valley Tourism'],
  schaff: ['https://en.schaffhauserland.ch/', 'Schaffhauserland Tourism'],
  falls: ['https://rheinfall.ch/en/', 'Rhine Falls — official visitor information'],
  stgallen: ['https://www.st.gallen-bodensee.ch/en/', 'St Gallen-Bodensee Tourism'],
  abbey: ['https://www.stiftsbezirk.ch/en/', 'Abbey District of St Gallen'],
  appenzell: ['https://www.appenzell.ch/en/', 'Appenzell Tourism'],
  ebenalp: ['https://www.ebenalp.ch/en/', 'Ebenalp cable car and area information']
};

const faq = (place, nights, base, route, fallback) => [
  [`How many nights should I plan for ${place}?`, `${nights} ${base}`],
  [`How should I travel around ${place}?`, route],
  ['What should I do if the weather or service changes?', fallback]
];

export const switzerlandCh10ClusterRefresh = {
  'basel-rhine': {
    reviewDate: date, isoDate,
    tagline: 'Use Basel SBB, the Rhine crossings and the tram grid to separate the old town, museums and Kleinbasel into walkable half-days.',
    hubIntro: 'Basel works as a compact rail-city base when each day follows one Rhine bank or one museum corridor. The old town and cathedral rise above the river; Kleinbasel gives the opposite-bank view, while the art museums and Fondation Beyeler are distinct visits with different transit approaches. Build the day around Basel SBB or a named tram stop, and avoid crossing back and forth just to tick off districts.',
    stay: 'Two nights gives one old-town and Rhine day plus a focused museum visit; three nights allows Fondation Beyeler or a slower Kleinbasel day. Basel SBB is easiest for onward rail, while a hotel near the center shortens evening walks. Check the exact hotel stop before choosing a base.',
    transfer: 'Use SBB for arrival and onward rail, and BVB tram routes for the city. Tram 2 links Basel SBB with Badischer Bahnhof; tram 6 serves the Fondation Beyeler approach. Walk the river crossings as part of the route, then use the named stop rather than assuming a museum or neighborhood is beside the main station.',
    season: 'The riverfront and old town work year-round, but exposed promenades are less comfortable in heat, wind or rain. Museum opening days and special exhibitions vary; outdoor swimming, seasonal river facilities and event access are date-specific.',
    fallback: 'In poor weather, keep one riverbank loop and move the museum decision forward. Choose Kunstmuseum Basel or another checked indoor collection; use BVB for the transfer and keep the Rhine crossing optional. Recheck live service and each venue calendar for the actual date.',
    sources: [official.basel, official.bvb, official.kunst, official.beyeler, official.sbb],
    faq: faq('Basel', 'Two nights cover the old town and one focused collection; three nights give room for Fondation Beyeler and a slower opposite-bank day.', 'Basel SBB favors rail departures; the central tram network favors city visits. Match the hotel to a named BVB stop.', 'Use BVB trams for the city and walk one Rhine crossing. Tram 2 connects Basel SBB and Badischer Bahnhof; tram 6 is useful for Fondation Beyeler. Verify the current stop, route and venue hours.', 'Retain the old-town lanes or a checked museum, then return by tram. River activities and museum hours are date-specific; do not assume a service interval or opening.')
  },
  'st-moritz-engadin': {
    reviewDate: date, isoDate,
    tagline: 'Choose one Upper Engadin system each day: lakes and villages, the Bernina rail corridor, or a single elevation gain.',
    hubIntro: 'St Moritz is the hotel and network anchor, not the whole Upper Engadin. RhB trains and regional buses connect the lake valley, Pontresina and the Bernina line, while each mountain railway has its own operating season and exposure. Keep the day on one corridor and decide the return to the overnight base before leaving the valley floor.',
    stay: 'Three nights supports a town-and-lake day and one distinct excursion; four nights adds weather flexibility or a separate Bernina journey. Staying near St Moritz station helps rail transfers, while Pontresina favors the Bernina corridor and a quieter village base. Compare hotel elevation and luggage access.',
    transfer: 'Use RhB and regional buses between valley villages. The Bernina route is a corridor, and a branded panoramic train is a separate reservation choice from ordinary regional trains. Check the exact train, any reservation requirement, mountain railway status and final return connection for your date.',
    season: 'Winter and summer change the access contract: frozen lakes, snow routes, hiking paths and lifts are not interchangeable. Shoulder seasons may have maintenance closures and reduced opening patterns. Check the operator and local trail status before committing to elevation.',
    fallback: 'When cloud, wind or closure removes a summit, stay on the valley floor: use an open village, short lakeside walk, museum or an ordinary RhB segment. Never infer that frozen water is safe; follow local notices and keep a rail return.',
    sources: [official.engadin, official.rhb, official.mountains, official.sbb, official.meteo],
    faq: faq('St Moritz and the Upper Engadin', 'Three nights cover the lake valley and one excursion; four nights create room to move a high-mountain day around the forecast.', 'St Moritz is the broad hotel and rail base; Pontresina shortens access to the Bernina corridor. RhB and regional buses serve different valley segments.', 'Check the exact RhB service and reservation conditions, and verify each lift or trail separately. Panoramic services and regional trains are not the same product.', 'Use a lower valley walk, village visit or rail segment. Conditions at lake level do not prove safety on frozen lakes or at a high station.')
  },
  'graubunden-corridors': {
    reviewDate: date, isoDate,
    tagline: 'Treat Chur as the rail hinge, then give Arosa, Davos or the Rhine Gorge its own corridor day.',
    hubIntro: 'Graubünden is a network of separate valleys, not a cluster of neighboring sights. Chur is a useful city and rail base; Arosa, Davos and the Rhine Gorge each need their own transport decision, weather check and return margin. Choose one branch per day and use Chur’s old town as the resilient plan when high terrain or trails do not fit.',
    stay: 'Two nights in Chur supports an old-town day and one RhB excursion; three nights adds flexibility for weather or a second corridor. Stay in Davos or Arosa when hiking or resort time is the purpose, since commuting from Chur can consume the useful daylight.',
    transfer: 'RhB is the organizing rail system, with separate branches toward Arosa, Davos and the Rhine Gorge. Confirm the exact station pair and current timetable before hiking; a gorge path may have limited exits. Do not stack different branches into one day because they share a canton.',
    season: 'Lift operations, trails and winter routes change by elevation and season. Shoulder periods can include maintenance breaks; rain and rockfall can affect gorge paths. Chur remains the lower-risk urban option, but verify museum and rail status.',
    fallback: 'If an excursion does not operate or visibility closes the view, keep Chur’s historic center and choose a short RhB ride only if the current service supports a useful return. For gorge walking, use only an official open path with a known exit station.',
    sources: [official.graubunden, official.rhb, official.davos, official.arosa, official.meteo],
    faq: faq('Chur and Graubünden', 'Two nights in Chur allow a city day and one corridor excursion; stay longer in Davos or Arosa if the outdoor activity is the main purpose.', 'Use Chur as the rail hinge, then select one RhB branch: Arosa, Davos or a chosen Rhine Gorge segment.', 'Build around one branch and check RhB, lift status and the selected trail authority on the actual date. A map connection does not guarantee a practical walking exit.', 'Stay in Chur for the old town and museums. Do not improvise a gorge detour around a closure or force an exposed high route.')
  },
  'lugano-southern-ticino': {
    reviewDate: date, isoDate,
    tagline: 'Keep Lugano as the rail-and-lake base; give a summit, a lakeside village and Mendrisiotto their own transfer plans.',
    hubIntro: 'Lugano’s compact lakefront sits below steep viewpoints, while Morcote and Mendrisiotto add separate boat, bus and rail choices. A mountain railway does not remove the climb or exposure after arrival. Use Lugano station or a named lake landing as the day’s hinge, and protect time for the return rather than attempting every viewpoint.',
    stay: 'Three nights gives one city-and-lakefront day, one summit or Morcote outing, and a weather-flexible block. Lugano station is practical for rail; a lakefront base shortens the evening but may require an uphill transfer with luggage. Stay nearer Mendrisio only when FoxTown or Monte Generoso is the main purpose.',
    transfer: 'Use SBB and TILO rail for the regional spine, local buses and the Lake Lugano navigation timetable for the final leg. Monte Brè, San Salvatore and Monte Generoso use separate access systems. Check the precise departure point, seasonal operation and return connection.',
    season: 'Lakefront visits are flexible, but summit railways and boats have their own operating calendars. Summer heat and storms favor earlier exposed walks; shoulder-season maintenance can remove a lift. Confirm trail, boat and mountain railway conditions independently.',
    fallback: 'If a summit closes or cloud hides the view, keep Lugano’s old town, lakeside and a checked museum; use rail or bus for a lower village. Do not substitute a different summit without checking its access, opening and weather.',
    sources: [official.lugano, official.ticino, official.nav, official.generoso, official.sbb, official.meteo],
    faq: faq('Lugano and southern Ticino', 'Three nights allows a city day, one lake or summit excursion, and one flexible day for Mendrisiotto or weather.', 'Use Lugano as the overnight hub. SBB/TILO, local buses, lake boats and each summit railway are distinct legs with separate schedules.', 'Check the correct station, landing or lift operator for your selected route; verify the day’s return before leaving the city.', 'Stay on the lakefront or visit a lower village, then choose an open indoor stop. A clear forecast in town does not establish summit conditions.')
  },
  'locarno-ascona-valleys': {
    reviewDate: date, isoDate,
    tagline: 'Start from Locarno’s rail and lake edge, then commit to either the Centovalli line, a valley walk or Ascona.',
    hubIntro: 'Locarno and Ascona share a lakeside setting but not every transfer. The Centovalli railway and Maggia or Verzasca valleys each require a route choice, time budget and return check. Keep the lakefront as the flexible base and avoid treating a valley bus, rail line and boat as one guaranteed through-service.',
    stay: 'Three nights supports Locarno and Ascona plus one valley or rail excursion; four nights leaves a weather buffer for a longer walk. Locarno near the station is practical for Centovalli and onward rail, while Ascona favors the lakeside evening. Compare the hotel’s bus stop and luggage approach.',
    transfer: 'Use FART/Centovalli Railway for the international rail corridor, local buses for valley access, and the lake boat only when its date-specific sailing fits. Decide the turnaround and return connection before beginning a remote walk; check whether the selected trail remains open.',
    season: 'Summer adds longer daylight but also heat, storms and swimming crowds; water levels and trail conditions can change. Mountain paths may be wet or closed after rain. Boat and rail patterns vary by date and season, so confirm both directions.',
    fallback: 'On a hot, wet or disrupted day, choose Locarno or Ascona’s lower lakefront, a short verified rail segment or an open museum. Do not enter a gorge or river for a swim based on appearance; respect posted water and trail notices.',
    sources: [official.locarno, official.centovalli, official.verzasca, official.ticino, official.sbb, official.meteo],
    faq: faq('Locarno, Ascona and the valleys', 'Three nights covers the shared lake area plus one excursion; four nights is more comfortable when a full valley walk is central.', 'Locarno favors the station and Centovalli line; Ascona favors the waterfront. Buses, boats and railways are separate links.', 'Choose one valley or the Centovalli rail journey and verify both the outward and return service for the date.', 'Use the lower lakefront or a checked indoor stop. Post-rain river conditions can be hazardous even when the shore looks calm.')
  },
  'schaffhausen-rhine-falls': {
    reviewDate: date, isoDate,
    tagline: 'Use Schaffhausen for the old-town base, then route the Rhine Falls and Stein am Rhein as separate rail-and-river days.',
    hubIntro: 'Schaffhausen is more than a waterfall stop: the old town and Munot form a compact urban loop, while Rhine Falls and Stein am Rhein sit on different stretches of the rail-and-river corridor. Plan one anchor at a time, name the station or landing, and keep the city visit as a weather-ready alternative.',
    stay: 'Two nights allows Schaffhausen’s old town plus either the Rhine Falls or Stein am Rhein; three nights permits both without compressing the river stops. Stay near Schaffhausen station for regional rail, or in the old town for evening access. Check the exact hotel walk with luggage.',
    transfer: 'Use SBB and regional rail for Schaffhausen, Neuhausen/Rheinfall and Stein am Rhein; local buses and boats are date-specific connections. The falls have several viewing approaches, so choose the visitor side and confirm current access, boat operation and return before setting out.',
    season: 'The falls operate as a year-round landscape, but boat access and visitor services vary seasonally. River conditions, high water, maintenance and weather can affect viewpoints or crossings. Munot and museum access also needs a current check.',
    fallback: 'If boats pause or rain makes the falls uncomfortable, use Schaffhausen’s old town and a checked museum, then take a rail return. Keep Stein am Rhein as a separate short town visit instead of forcing a river connection.',
    sources: [official.schaff, official.falls, official.sbb, official.meteo],
    faq: faq('Schaffhausen', 'Two nights fits the old town and one river excursion; three nights allows the falls and Stein am Rhein as separate visits.', 'Stay near Schaffhausen station for rail access. Use regional rail for the falls and Stein am Rhein; boats depend on the date and water conditions.', 'Check the chosen falls viewpoint, current boat/access status and the exact train home. Do not assume a landing is operating because the river is visible.', 'Keep Schaffhausen’s old town, Munot exterior and an open museum as the lower-risk block; verify access before climbing.')
  },
  'st-gallen-appenzell': {
    reviewDate: date, isoDate,
    tagline: 'Base in St Gallen for the Abbey District and rail; spend a separate day in Appenzell or the Alpstein only when conditions support it.',
    hubIntro: 'St Gallen’s Abbey District is a compact cultural center, while Appenzell village and the Alpstein are separate regional trips with different exposure. Use the city as the rail-connected base, choose one mountain access chain and check the descent before starting. Do not make Seealpsee or Ebenalp an automatic extension of the abbey visit.',
    stay: 'Two nights covers St Gallen and one Appenzell excursion; three nights leaves a safer weather buffer for Ebenalp or Seealpsee. Stay near St Gallen station for rail and the Abbey District, or in Appenzell when the early mountain start outweighs onward rail convenience.',
    transfer: 'Use SBB and Appenzeller Bahnen for St Gallen–Appenzell connections, then local bus or the Ebenalp cable car for selected mountain access. Timetables, lift operation and trail status are separate checks; plan the descent and return to the overnight base.',
    season: 'The Abbey District is the all-weather anchor. Alpstein trails, cable cars and exposed paths vary with snow, maintenance, rain and visibility. Winter walking and shoulder-season routes need current local advice; summer storms can arrive before the valley forecast suggests.',
    fallback: 'If the cable car or trail is unsuitable, keep the Abbey Library or old town after checking access, and use Appenzell village or a lower signed walk. Never treat a lift arrival as proof that a mountain trail is appropriate.',
    sources: [official.stgallen, official.abbey, official.appenzell, official.ebenalp, official.sbb, official.meteo],
    faq: faq('St Gallen and Appenzell', 'Two nights supports the Abbey District and one village visit; three nights is better when a mountain day depends on visibility.', 'St Gallen is the rail and cultural base; Appenzell is closer to the village and Alpstein departure points. Use Appenzeller Bahnen and verify the final bus or cable car.', 'Check the Abbey District’s current visitor information separately from the Ebenalp lift and chosen hiking route.', 'Use the old town, Abbey District or Appenzell village. Skip exposed routes when the forecast, trail notice or lift status is uncertain.')
  }
};

const stage = (a, b, c, d) => [[a[0], a[1]], [b[0], b[1]], [c[0], c[1]], [d[0], d[1]]];
const guide = (summary, access, tradeoff, fallback, duration, combine, verify, stages, sources) => ({
  summary, access, tradeoff, fallback, duration, combine, verify, stages, sources,
  reviewDate: date, isoDate
});

export const switzerlandCh10GuideRefresh = {
  '/basel-rhine/old-town-rhine': guide(
    'Walk Basel’s cathedral hill, Münsterplatz and one Rhine crossing as a single old-town loop, then finish on the Kleinbasel bank rather than retracing every lane.',
    'Start at Basel SBB and take BVB tram 8 or 11 toward the central old town; confirm the current stop for Marktplatz. Walk Marktplatz to the Rathaus, Münsterplatz and the Pfalz terrace, descend to the river, cross Mittlere Brücke once, and use a BVB stop in Kleinbasel for the return.',
    'This gives the city’s clearest river-and-history sequence with one deliberate crossing. It leaves the major museums and the outer Rhine promenade for another block; the cobbled slopes and cathedral approach are not a step-free promise.',
    'In rain, shorten the river edge and choose one open indoor collection in the old town. If the bridge or riverside is uncomfortable, stay on the central bank and return by tram after checking the live BVB route.',
    'Allow four to five hours including a meal, the Münster terrace and one crossing. Add a museum only by dropping the extended river walk.',
    'Pair with an evening meal in Kleinbasel. Keep Kunstmuseum Basel and Fondation Beyeler for separate visits.',
    'Check BVB service notices, Basel Münster visitor access and MeteoSwiss. Confirm venue hours for your date; this guide makes no fare or service-interval promise.',
    stage(['Basel SBB to Marktplatz','Use a current BVB connection into the center and begin at the Rathaus; confirm the stop before boarding.'],['Rathaus to Münsterplatz','Walk through the old lanes to the cathedral square, then use the Pfalz only if surfaces and weather suit.'],['Descend and cross once','Follow signed public streets to Mittlere Brücke, cross to Kleinbasel and take a short river-view pause.'],['Return from Kleinbasel','Choose a BVB stop near the final lane and return to the hotel or Basel SBB; check the live service first.']), [official.basel, official.bvb, official.sbb, official.meteo]
  ),
  '/basel-rhine/art-museums': guide(
    'Build a Basel art day around one named collection, using trams between Basel SBB, Kunstmuseum Basel and the Fondation Beyeler instead of trying to absorb both at speed.',
    'From Basel SBB use the current BVB route to Kunstmuseum Basel and reserve a meaningful visit block. Fondation Beyeler is farther out: BVB tram 6 serves the Riehen museum approach. Check each venue’s address, timed entry and opening calendar before choosing the order.',
    'Two institutions create a strong art-focused day but reduce time for the river and old town. Fondation Beyeler’s location makes the two-museum combination a transit day rather than a continuous museum quarter.',
    'If one venue is closed or the day runs short, keep the open collection and add a central old-town walk. Avoid a last-minute cross-city dash based on an assumed tram interval.',
    'Give each selected museum at least a substantial visit block and include transit and meal time; a single museum plus old town is more comfortable than two rushed interiors.',
    'Pair one museum with the old town or riverfront. Reserve a second museum for a separate day when art is the trip’s main theme.',
    'Check the official museum calendar, ticket rules and BVB service notices for the exact day. Special exhibitions, closures and entry conditions can change.',
    stage(['Choose the collection','Compare current exhibitions and opening days before leaving the hotel; start with the venue that has a fixed entry time.'],['Basel SBB to Kunstmuseum','Take the current BVB connection to the central museum area and follow the signed entrance.'],['Decide on Riehen','Only continue to Fondation Beyeler if its calendar and remaining daylight leave a real visit block; tram 6 is the named city link.'],['Return by the right network','Check the current tram back to Basel SBB or your hotel rather than assuming the same route works after evening changes.']), [official.kunst, official.beyeler, official.bvb, official.sbb]
  ),
  '/basel-rhine/kleinbasel-border-rhine': guide(
    'Use Mittlere Brücke and the Kleinbasel riverbank to read Basel from the opposite shore, then connect the walk to Badischer Bahnhof only if the onward train makes that useful.',
    'Begin at Marktplatz or Basel SBB, walk to Mittlere Brücke and cross north into Kleinbasel. Follow the signed river promenade toward Wettsteinbrücke; finish at a BVB stop or continue to Badischer Bahnhof for the Rhine-side rail connection. Check the chosen endpoint before starting.',
    'The route gives a slower neighborhood and river view but less monument density than Grossbasel. The international border geography is context, not a reason to cross an unplanned boundary or assume ticket validity.',
    'For rain or high water, shorten the exposed bank and use BVB between the bridge area and Badischer Bahnhof. Keep the return inside Basel unless cross-border rail is intentionally part of the booked plan.',
    'Allow three to four hours for one bank, a bridge crossing and a café stop. Add a museum only if the river walk is shortened.',
    'Pair with Basel’s old town on the same day, but keep the full museum circuit separate.',
    'Check current BVB notices, SBB connections and river access information. Verify any cross-border ticket separately; no fare entitlement is implied.',
    stage(['Start in Grossbasel','Reach Marktplatz from Basel SBB by current BVB service and orient to the river.'],['Cross Mittlere Brücke','Walk north across the bridge and pause on the Kleinbasel bank for the skyline view.'],['Follow the public river edge','Continue toward Wettsteinbrücke or the chosen Badischer Bahnhof approach; stay on signed public paths.'],['Choose a clean return','Use BVB from the nearest appropriate stop or SBB from Badischer Bahnhof after checking the exact train.']), [official.basel, official.bvb, official.sbb]
  ),
  '/st-moritz-engadin/st-moritz-lakes': guide(
    'Link one or two Upper Engadin lakes with a named RhB or bus transfer, keeping the shoreline walk short enough to protect the return to St Moritz.',
    'Start near St Moritz station and identify whether the day follows the lake toward Celerina, Samedan or Pontresina. Use the current Engadin bus or RhB service for the longer gap, then walk one verified shoreline section; do not assume every lake edge is a continuous public path.',
    'This lower-valley plan is more flexible than a summit day, but open shore and high-valley wind still affect comfort. Several short transit hops can consume the time better spent on one village and one lake.',
    'In wind, rain or winter path closure, shorten the shore and use an open village, café or ordinary RhB segment. Frozen-lake access must follow current local guidance; never infer ice safety from appearance.',
    'Allow half a day for one lake and village, or most of a day for two linked stops with meals and transfers.',
    'Pair with St Moritz town in the evening. Keep the Bernina journey and a high viewpoint for separate days.',
    'Check Engadin bus/RhB service, winter path notices and MeteoSwiss at valley elevation. Recheck any frozen surface restriction locally.',
    stage(['Select a lake corridor','Choose a single direction from St Moritz and identify the rail or bus stop at each end.'],['Ride to the chosen start','Check the date-specific RhB or regional bus connection before leaving the hotel.'],['Walk one shoreline segment','Stay on signed open paths and turn around at the preselected stop or village.'],['Return to St Moritz','Use the saved connection and shorten the walk if wind or daylight erodes the margin.']), [official.engadin, official.rhb, official.sbb, official.meteo]
  ),
  '/st-moritz-engadin/bernina-pontresina': guide(
    'Ride one purposeful section of the Bernina line from Pontresina, selecting the turnaround before boarding and treating any panoramic reservation as a separate choice.',
    'Reach Pontresina by RhB or regional bus, then choose a rail segment toward Bernina Pass or Poschiavo that fits the day. Ordinary regional trains and named panoramic services have different booking conditions; confirm your exact train and return before departure.',
    'The railway is the main experience and uses much of the day. Leaving the train at multiple stops needs enough time for the next usable service; the route does not guarantee a particular view or connection.',
    'With poor visibility, choose a shorter valley segment or keep Pontresina as the day. For disruption, follow RhB notices and return by the confirmed service rather than improvising a long walk beside the tracks.',
    'Allow half a day for a short out-and-back and most of a day for a longer southbound segment. Include waiting and transfer time.',
    'Pair with a Pontresina village walk. Keep Diavolezza or Muottas Muragl for a separate weather window.',
    'Check RhB’s exact-date timetable, engineering notices and reservation rules for the chosen service; verify cross-border requirements if continuing to Italy.',
    stage(['Set the turnaround','Choose the farthest station you can visit while retaining a confirmed return to Pontresina or St Moritz.'],['Board the selected RhB service','Verify whether the train is an ordinary regional service or a panoramic product with reservation conditions.'],['Make one stop count','Leave the train only when the next departure leaves enough time for a real visit and a safe return.'],['Close the loop by rail','Use the saved connection and keep a shorter return option in mind if weather or operations change.']), [official.rhb, official.engadin, official.sbb, official.meteo]
  ),
  '/st-moritz-engadin/muottas-diavolezza': guide(
    'Choose Muottas Muragl for the lake-valley form or Diavolezza for higher glacier terrain; visit one system only and make Pontresina the lower fallback.',
    'Muottas Muragl starts at Punt Muragl near the valley rail corridor; Diavolezza is accessed from the Bernina line. Check the selected railway or cable car, upper-station weather and open trails before buying or boarding.',
    'The two viewpoints have different elevation, exposure and transport chains. Combining them risks turning a landscape day into two rushed lift visits; Diavolezza needs a more conservative weather and altitude decision.',
    'If cloud, wind or maintenance removes the high route, use Pontresina village or a lower signed walk. Do not assume the other lift is open or a safe substitute.',
    'Allow half a day for one lift and viewpoint, with extra time only for a currently open trail and a conservative descent margin.',
    'Pair one viewpoint with a Pontresina or St Moritz evening. Keep a long Bernina rail segment separate.',
    'Check the individual lift operator, MeteoSwiss at summit elevation and the current trail report on the day. Lift access does not certify hiking conditions.',
    stage(['Choose the landscape','Pick broad lake-valley geometry at Muottas Muragl or higher terrain at Diavolezza.'],['Check the correct access chain','Confirm the Punt Muragl approach or Bernina-line stop and the lift status for the date.'],['Stay within the open area','Use only routes currently open and suited to weather, equipment and experience.'],['Return before conditions shift','Keep a valley connection and enough time for the descent; switch to Pontresina if the window closes.']), [official.mountains, official.rhb, official.engadin, official.meteo]
  ),
  '/graubunden-corridors/chur-rhine-gorge': guide(
    'Join Chur’s old town to one verified Rhine Gorge rail or walking section, choosing the exit station before entering any path.',
    'Walk from Chur station through the old town, then use RhB to the exact gorge access station selected from the current official trail information. Versam-Safien is one rail gateway, but the route and exit depend on the walk; do not start from a map line alone.',
    'The city-and-gorge contrast is rewarding but gorge terrain has limited exits, steep sides and changing river conditions. A train ride through the gorge is a valid focused alternative to hiking.',
    'If a path is closed, wet or hard to verify, stay in Chur or ride a short RhB segment without leaving the train. Never improvise a river descent or shortcut around a closure.',
    'Allow two to three hours for Chur’s old town and most of a day for a chosen gorge segment with rail transfers and a return buffer.',
    'Keep Arosa and Davos for separate corridor days. Pair only a short Chur loop with a rail segment.',
    'Check RhB’s date-specific timetable and official Graubünden trail/access notices for both trailheads and exits; use MeteoSwiss and local warnings before walking.',
    stage(['Walk Chur first','Use the station-side old town for one compact loop and decide whether a gorge extension still fits daylight.'],['Choose the gorge entry and exit','Select a specific official trail section and identify both rail stations before departing.'],['Ride or walk one segment','If the trail status is uncertain, remain on the train; if walking, follow only signed open paths.'],['Return to the rail network','Use the confirmed exit station and saved RhB connection, with Chur as the fallback base.']), [official.rhb, official.graubunden, official.sbb, official.meteo]
  ),
  '/graubunden-corridors/davos-parsenn': guide(
    'Use Davos Platz or Davos Dorf as the correct base, then commit to Parsenn only when its lift, weather and route conditions fit the day.',
    'Reach Davos by RhB via Landquart and note which station matches your hotel and Parsenn access. Check the current lift entrance, operating status and the exact trail or ski area; use local buses only after confirming the stop and current service.',
    'Parsenn is an elevation day, not an automatic extension of Chur. The resort has multiple stations and mountain systems; wrong-base assumptions cost time, and a lift ticket does not establish route safety.',
    'When lifts close or cloud and wind make the mountain a poor choice, keep Davos town, the lake, a checked museum or a lower valley walk. Move to Chur only if the rail return is practical.',
    'Allow a full day for Parsenn including access and descent margin; reserve a half-day for a deliberate valley-only alternative.',
    'Pair with one Davos evening. Do not add Arosa or the Rhine Gorge to the same day.',
    'Check Davos Klosters lift status, RhB timetable, current trail or snow report and MeteoSwiss at the intended elevation.',
    stage(['Identify Davos Dorf or Platz','Match the hotel, train stop and selected lift approach before leaving.'],['Confirm Parsenn operation','Check the exact lift and open sector, then compare the upper forecast with your experience and equipment.'],['Commit to one mountain area','Use a currently open route and keep the last descent in view; shorten the plan when conditions deteriorate.'],['Return to the matching station','Leave enough time for the lift and local connection back to the hotel or onward RhB train.']), [official.davos, official.rhb, official.graubunden, official.meteo]
  ),
  '/graubunden-corridors/arosa-line': guide(
    'Make the Chur–Arosa RhB ride the backbone of the day, then choose one village, lake or currently operating mountain area in Arosa.',
    'Board the RhB Chur–Arosa line from Chur station after checking the exact-date timetable. The train reaches Arosa; local buses or lifts are separate legs. Decide the Arosa return train before starting a longer walk or lift visit.',
    'The scenic railway takes meaningful time in both directions. Arosa is a self-contained excursion, so adding Davos or the Rhine Gorge turns the day into transfers rather than a useful visit.',
    'If a lift or trail is closed, use the village and lake only where current path conditions permit, then return on the confirmed train. If rail service is disrupted, follow RhB instructions and stay in Chur.',
    'Give the excursion most of a day including both rail legs; the village-only visit still needs return margin.',
    'Pair with a Chur evening or a separate night in Arosa. Keep other Graubünden corridors separate.',
    'Check RhB service notices, Arosa Lenzerheide lift status, local trail reports and MeteoSwiss before leaving Chur.',
    stage(['Set the return train','Select the outbound and planned return RhB services before choosing activities in Arosa.'],['Ride Chur to Arosa','Use the current timetable and follow station signs to the village or local connection.'],['Choose one Arosa block','Walk the lake or use one lift only if it is open and the route fits current conditions.'],['Return through Chur','Reach the station with margin and use the confirmed train; do not rely on a last-minute connection.']), [official.rhb, official.arosa, official.graubunden, official.meteo]
  ),
  '/lugano-southern-ticino/lugano-lakefront': guide(
    'Read Lugano from the station slope to the lakefront and Parco Ciani, using the funicular or bus for the major vertical change.',
    'From Lugano station, use the current funicular or local bus toward the center, then walk Piazza della Riforma to the lakeside and Parco Ciani. Continue only to the landing that matches a verified boat sailing; return uphill by the chosen transit link.',
    'This is a flexible city route with lake views, but the station-to-water elevation is real and boat departures are not a guaranteed city shuttle. It leaves Monte Brè and San Salvatore for clear-weather days.',
    'In heat or rain, shorten the exposed promenade, keep the old center and use local transit for the climb. If boat timing does not fit, stay on shore and return by bus or funicular.',
    'Allow three to four hours for the center and park; add a longer lakeside walk only after checking heat, weather and the return connection.',
    'Pair with a meal in central Lugano. Keep one summit or Morcote for another day.',
    'Check Lugano Region transport information, the date-specific lake timetable and MeteoSwiss. Verify the funicular or bus route for the station approach.',
    stage(['Station to upper center','Use the current Lugano funicular or local bus from the railway station; confirm operating status and stop.'],['Walk to Piazza della Riforma','Follow the central lanes toward the main square and choose one short historic detour.'],['Continue to Parco Ciani','Walk the lake edge north through the park, respecting posted access and any event closures.'],['Return by a named connection','Check boat departures before boarding one; otherwise return to the center and station by local transit.']), [official.lugano, official.nav, official.ticino, official.sbb]
  ),
  '/lugano-southern-ticino/san-salvatore-morcote': guide(
    'Choose either Monte San Salvatore and Morcote as a long linked outing only after verifying the boat or bus transfer, otherwise keep them on separate days.',
    'For San Salvatore, use the Lugano-Paradiso station and the mountain funicular; for Morcote, check SBB/TILO or local bus and the Lake Lugano boat timetable. A boat connection is date-specific. Verify the return from Morcote before committing to the summit and village combination.',
    'The summit and lakeside village make a strong contrast but use different access chains and can consume a full day. The exposed summit walk and lakeside transfer should not be compressed to meet an assumed sailing.',
    'If cloud or wind closes the funicular, visit Morcote or stay in Lugano. If the boat does not fit, use the current bus/rail option only after confirming the actual stop and return.',
    'Allow most of a day for the linked version; use a half-day for San Salvatore alone or a separate slower Morcote visit.',
    'Pair the summit with a Lugano evening. Keep Monte Generoso for a different day and operator.',
    'Check the San Salvatore funicular operating calendar, Lake Lugano navigation timetable, local bus/rail connections and summit forecast.',
    stage(['Check both ends','Verify the summit railway and the return from Morcote; omit the link if the timetable leaves no comfortable margin.'],['Reach Paradiso','Use SBB/TILO or local transit to Lugano-Paradiso and follow signs to the funicular.'],['Visit the summit conservatively','Check visibility and wind before walking beyond the station area; use only open marked routes.'],['Transfer to Morcote or return','Use a verified boat or bus/rail journey and preserve time for the final connection to Lugano.']), [official.ticino, official.nav, official.sbb, official.meteo]
  ),
  '/lugano-southern-ticino/mendrisiotto-generoso': guide(
    'Treat Monte Generoso as a dated rack-railway excursion from Capolago and keep Mendrisio or a lower Ticino town as the weather fallback.',
    'Take SBB/TILO to Capolago-Riva San Vitale and use the Monte Generoso rack railway only on an operating date. The summit is exposed; confirm the railway calendar, visibility and return train before leaving Lugano.',
    'This is farther from Lugano than its map distance suggests and relies on a seasonal mountain railway. A clear lakefront forecast does not guarantee a summit view or operation.',
    'If the rack railway is not running or cloud erases the summit, remain around Mendrisio or Capolago, visit an open lower town or return to Lugano. Do not substitute a different lift without a fresh check.',
    'Reserve most of a day for rail transfers and the mountain railway; a short lower-town visit is a separate half-day plan.',
    'Pair with Mendrisio only when its opening calendar fits. Keep Lugano lakefront and other summits separate.',
    'Check Monte Generoso’s seasonal operating calendar, SBB/TILO connections and MeteoSwiss at summit elevation before purchase and departure.',
    stage(['Confirm the operating date','Check the railway calendar and weather first; postpone if the summit has no useful visibility window.'],['Travel to Capolago-Riva San Vitale','Use the verified SBB/TILO connection from Lugano and follow the signed rack-railway station approach.'],['Ride and use the open summit area','Stay within current visitor and trail notices; account for the railway’s return pattern.'],['Return to Capolago and Lugano','Use the saved rack-railway and rail connections; keep a lower-town alternative if weather changes.']), [official.generoso, official.sbb, official.ticino, official.meteo]
  ),
  '/locarno-ascona-valleys/locarno-ascona': guide(
    'Connect Locarno’s station-side old town to Ascona’s lakefront by one verified bus or boat transfer, then walk the village waterfront rather than looping the whole lake.',
    'Start at Locarno station and descend through Piazza Grande to the lake landing or the named local bus stop. Check the date-specific boat or bus to Ascona and the return; walk the Borgo and promenade as a compact second half.',
    'The paired towns share the lake but are separate transfer points. A boat is a scenic link only when its sailing and return fit; a cross-lake route can be slower or unavailable outside the main season.',
    'If the boat does not operate or rain arrives, use the confirmed bus connection and shorten the promenade. Keep the old town and a covered museum or café as the lower-weather plan.',
    'Allow half a day for both towns with a direct transfer; give each a separate block if using the lake slowly or visiting a museum.',
    'Pair with a Locarno evening. Keep Maggia, Centovalli and Verzasca for separate day plans.',
    'Check FART/local bus and Lake Maggiore navigation schedules, current landing access and venue openings for the date.',
    stage(['Orient at Locarno station','Walk toward Piazza Grande and identify the correct lake landing or bus stop.'],['Choose bus or boat','Compare the live sailing and bus options with the return plan before selecting a transfer.'],['Walk Ascona’s Borgo','Follow public lanes to the waterfront and choose one lakeside section; avoid adding a remote valley.'],['Return to Locarno','Use the verified service and leave enough time for the station or hotel connection.']), [official.locarno, official.centovalli, official.sbb]
  ),
  '/locarno-ascona-valleys/maggia-centovalli': guide(
    'Choose the Centovalli railway for a rail-led landscape day or a signed lower Maggia walk, rather than treating both valleys as quick Locarno add-ons.',
    'For Centovalli, use FART from Locarno toward a chosen village and set a return station before leaving the train. For Maggia, check the local bus to the exact trail start and current path status. These are distinct days unless the rail segment is very short.',
    'The train provides a lower-effort valley overview; a walk gives closer river and village context but needs a known exit and more weather margin. Neither implies a guaranteed boat or through-connection.',
    'After rain or a trail closure, skip the river path and use Locarno or an ordinary rail segment. Do not enter gorges or water for swimming without checking posted warnings and current conditions.',
    'Allow most of a day for a chosen Centovalli return journey or a specific Maggia walk including both bus legs.',
    'Pair one valley with a Locarno meal. Keep Ascona as a short separate block rather than adding another remote transfer.',
    'Check FART and local bus timetables, official trail notices, water warnings and MeteoSwiss for the chosen valley.',
    stage(['Name the valley and endpoint','Choose either a Centovalli stop or Maggia trailhead and verify the onward and return service.'],['Reach the start by FART or bus','Confirm the correct platform/stop and current service before boarding.'],['Follow one open route','Stay on signed public paths; turn back when rain, water level or a closure changes the plan.'],['Return by the saved connection','Use the preselected station or bus stop and keep a Locarno fallback if service is disrupted.']), [official.centovalli, official.locarno, official.ticino, official.meteo]
  ),
  '/locarno-ascona-valleys/verzasca-valley': guide(
    'Use a named local bus to reach one Verzasca village or signed walking section, and make the bus return—not a remote trail crossing—the fixed point of the day.',
    'Start from Locarno and check the current PostBus or local route to the exact Verzasca stop. Choose a short official path around a village such as Lavertezzo only after confirming access and return service; distances between valley points can be deceptive.',
    'The valley’s clear water and stone bridges can invite unsafe shortcuts. River level, cold water, slippery rock and sudden releases matter; the guide is a transit and walking plan, not a swimming safety assessment.',
    'If rain, high water or bus disruption affects the visit, remain in Locarno or choose a lower town walk. Do not enter the river or cross barriers; follow local warnings and use the confirmed return bus.',
    'Allow most of a day including both bus legs, a meal and a conservative single village walk.',
    'Do not combine with Centovalli on the same day. Pair with a Locarno evening only.',
    'Check the date-specific bus timetable, Verzasca visitor notices, MeteoSwiss and all river safety warnings immediately before travel.',
    stage(['Choose one valley stop','Select a village and walking endpoint that fit the actual bus service in both directions.'],['Ride from Locarno','Confirm the route number, stop and return time on the operator’s current timetable.'],['Walk above the river','Use signed public paths and observe barriers; do not treat a photograph spot as safe water access.'],['Return before the last useful bus','Reach the named stop with margin and switch to a Locarno city plan if conditions deteriorate.']), [official.verzasca, official.locarno, official.ticino, official.meteo]
  ),
  '/schaffhausen-rhine-falls/schaffhausen-old-town': guide(
    'Walk Schaffhausen’s painted old town and Munot as one compact climb from the station, then leave the waterfall for a separate half-day.',
    'From Schaffhausen station enter the old town on foot toward Fronwagplatz and the Munot. Follow the marked public approach for the fortress and return by a different central lane; check any access notice before climbing the steps.',
    'This route gives architecture and a broad river-city view but includes a steep Munot approach. It is a focused city visit, not a substitute for the Rhine Falls or Stein am Rhein.',
    'In heat or rain, shorten the climb and use a checked museum or café in the center. If Munot access is limited, keep the old-town facades and return to the station by the level route.',
    'Allow three to four hours with a meal; add a museum only if the old-town loop is shortened.',
    'Pair with the Rhine Falls only as a separate second block when transport and daylight fit; otherwise keep it for another day.',
    'Check Schaffhauserland for current Munot or museum access and SBB for the exact onward train.',
    stage(['Station to Fronwagplatz','Walk into the old town and use the square to orient among the painted guild houses.'],['Choose one lane sequence','Follow public streets toward the Munot; avoid trying to cover every side lane before the climb.'],['Climb to the Munot','Use the signed stair approach only when weather and mobility suit; check current access.'],['Return to the station','Descend by a sensible central route and verify the exact train or bus before leaving.']), [official.schaff, official.sbb, official.meteo]
  ),
  '/schaffhausen-rhine-falls/rhine-falls': guide(
    'Choose one Rhine Falls viewing side and use the correct rail station or boat landing; leave enough margin for the return to Schaffhausen.',
    'Use SBB to Neuhausen Rheinfall or Schloss Laufen am Rheinfall according to the chosen viewpoint; the stations serve different banks and visitor approaches. Check the official falls access and boat operation before choosing a crossing or landing.',
    'The falls are powerful but access is not a single viewpoint. Boat trips, platforms and castle-side approaches can have different seasonal availability, admission and weather exposure.',
    'If boats pause or platforms close, use the open public viewing approach and return by rail. In poor weather, shorten the exposed visit and keep Schaffhausen’s old town as the alternative.',
    'Allow three to four hours for one bank, a viewpoint and transit; add time for current visitor access or a boat only when confirmed.',
    'Pair with a meal in Schaffhausen, but keep Stein am Rhein for a separate rail or boat plan.',
    'Check rheinfall.ch for current visitor access, boat and platform status, and SBB for the correct station and return connection.',
    stage(['Select the viewing bank','Use official visitor information to choose Neuhausen or Schloss Laufen access before buying or boarding.'],['Travel to the matching station','Confirm the SBB stop and walking approach for that side of the falls.'],['Visit open viewpoints','Check platform and boat status on arrival and follow barriers; keep water spray and slippery surfaces in mind.'],['Return by the planned side','Use the saved rail connection from the same bank unless a verified crossing is operating.']), [official.falls, official.schaff, official.sbb, official.meteo]
  ),
  '/schaffhausen-rhine-falls/stein-am-rhein': guide(
    'Use rail to reach Stein am Rhein’s station and walk the painted center, river edge and abbey area as one slow town visit.',
    'Take the verified regional train from Schaffhausen to Stein am Rhein, then walk from the station to Rathausplatz and the river. Check whether the day’s onward plan uses rail or an operating boat; do not assume both modes connect conveniently.',
    'The town is a compact cultural stop rather than a waterfall extension. Museums and boat services vary by season, while cobbled lanes and river edges require care in wet weather.',
    'If rain or a boat cancellation interrupts the plan, stay in the central lanes and return by the confirmed train. Skip any river-edge section that is slippery or closed.',
    'Allow two to four hours for the center, one interior if open and a relaxed meal.',
    'Pair with a Schaffhausen evening. Combine with Rhine Falls only when the date-specific rail plan leaves ample time.',
    'Check SBB connections, Stein am Rhein visitor information and the operator’s current boat timetable if using the river.',
    stage(['Reach Stein am Rhein','Use the verified regional rail service and walk from the station toward the historic center.'],['Read Rathausplatz','Take time with the painted facades and arcades; check current access before entering interiors.'],['Walk one river section','Stay on public paths and turn back where surfaces, water or signs advise.'],['Return by rail or verified boat','Choose the mode only after checking its actual date and landing; keep the train as the clear fallback.']), [official.schaff, official.sbb, official.meteo]
  ),
  '/st-gallen-appenzell/st-gallen-abbey': guide(
    'Connect St Gallen station, the Abbey District and the old town on foot, reserving the Abbey Library only after confirming visitor access and hours.',
    'Walk from St Gallen station to the Abbey District via the old-town lanes. The Abbey Library and cathedral are distinct interiors with their own access rules; check the official visitor information and any photography or bag conditions before entry.',
    'This is the most weather-resilient local route, but the library is not an unrestricted public room and may have ticket, schedule or event limits. It leaves Appenzell and the Alpstein for other days.',
    'If the library is closed or fully booked, keep the cathedral exterior and old town, then use a currently open museum. Do not assume access to protected interiors based on the district’s UNESCO status.',
    'Allow three to five hours for the Abbey District, one interior visit if available and a meal.',
    'Pair with a St Gallen evening. Keep Appenzell village and Ebenalp for a separate day.',
    'Check the Abbey District’s current visitor calendar and SBB for the onward connection. Follow photography, bag and entry rules on site.',
    stage(['Station to Abbey District','Walk into the center and follow signs to the cathedral square.'],['Confirm interior access','Check the Abbey Library’s current opening, entry and visitor rules before joining a queue.'],['Choose one cultural block','Visit the confirmed interior, then use the old-town lanes rather than rushing toward a mountain transfer.'],['Return through the center','Finish at the station or a named local stop after checking the onward departure.']), [official.abbey, official.stgallen, official.sbb]
  ),
  '/st-gallen-appenzell/appenzell-village': guide(
    'Use Appenzeller Bahnen to reach Appenzell, walk the village center and choose one signed countryside loop that fits the actual return train.',
    'Travel from St Gallen on the current Appenzeller Bahnen connection and orient at Appenzell station. Walk the central lanes, then use official local trail information to choose a short village-edge route; confirm the surface, elevation and return before leaving the center.',
    'The village and countryside offer a gentler alternative to the Alpstein, but even lower walks can be muddy or exposed. A regional train connection does not mean the village is a quick add-on to an abbey visit.',
    'In rain or poor visibility, keep the village, museum or dairy visit only after checking opening hours. Skip the path if conditions are wet or the route is unclear and return by train.',
    'Allow three to five hours for the village, one meal and a short signed walk; use most of a day for a longer route.',
    'Pair with St Gallen only when the rail plan leaves enough time. Keep Ebenalp and Seealpsee separate.',
    'Check Appenzeller Bahnen, Appenzell tourism trail notices and MeteoSwiss; confirm current opening times for any interior visit.',
    stage(['Set the train return','Choose the outbound and return Appenzeller Bahnen services before adding a walk.'],['Walk the village center','Use the station-side lanes and central square for orientation and any checked indoor visit.'],['Choose one signed path','Follow current local trail information and turn back if mud, weather or time changes the plan.'],['Return from the station','Allow time to walk back and use the saved train rather than assuming the next departure.']), [official.appenzell, official.stgallen, official.sbb, official.meteo]
  ),
  '/st-gallen-appenzell/ebenalp-seealpsee': guide(
    'Treat Ebenalp and Seealpsee as a mountain outing with a defined descent, checking the cable car, trail status and weather before leaving Appenzell.',
    'Use Appenzeller Bahnen to Wasserauen, then the Ebenalp cable car only if operating. The route to Seealpsee and onward mountain paths have steep, exposed sections; choose a specific loop from current local trail information and know whether the descent returns to Wasserauen.',
    'The lake is not a flat add-on beneath a lift: walking time, elevation, surfaces and weather all matter. Combining Ebenalp, Seealpsee and a long ridge route can exceed a casual day visitor’s ability or daylight.',
    'If the cable car is closed or the route is wet, stay in Appenzell village or use a lower signed walk. Turn back when visibility or trail notices change; do not descend an unfamiliar path to meet a train.',
    'Reserve most of a day including both rail legs, lift access, walking and a conservative return margin. A lower valley walk is a separate shorter plan.',
    'Keep St Gallen’s Abbey District for another day; do not add it after a full mountain outing.',
    'Check Ebenalp cable-car status, Appenzeller Bahnen, official trail conditions and MeteoSwiss at elevation on the same day.',
    stage(['Check the full descent','Choose an open route with a known finish and enough time for the last rail connection.'],['Reach Wasserauen','Use Appenzeller Bahnen from Appenzell and confirm the cable-car station and current operation.'],['Commit only to open terrain','Use current signed trails and appropriate equipment; shorten the route if cloud, rain or fatigue appears.'],['Return to Wasserauen','Allow margin for the descent and lift queue, then use the saved train back to Appenzell or St Gallen.']), [official.ebenalp, official.appenzell, official.sbb, official.meteo]
  )
};
