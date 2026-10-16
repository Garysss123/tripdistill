export const switzerlandCh15IsoDate = '2026-10-12';
export const switzerlandCh15ReviewDate = '12 October 2026';

export const switzerlandCh15GuideRefresh = {
  'mendrisiotto-generoso': {
    isoDate: switzerlandCh15IsoDate,
    reviewDate: switzerlandCh15ReviewDate,
    summary: 'From Lugano, choose either the Monte Generoso railway from Capolago or a lower-elevation Mendrisio culture day; each has a different timetable, weather and return decision.',
    access: 'The mountain option starts at Capolago-Riva San Vitale: SBB serves the station, and the Monte Generoso railway shares its station building. Its mountain ride takes about 30 minutes to the summit, but that does not include the SBB journey from Lugano, waits between departures or time at the top. Check the railway calendar for your date; bad weather can stop service. If access needs matter, read the operator’s current accessibility notes before booking because intermediate stops are not all guaranteed accessible.',
    tradeoff: 'Monte Generoso is the high-view day in this guide, while Mendrisio is the lower-town alternative. Going to the summit commits you to a separate mountain railway with its own operating calendar and return pattern. Do not treat it as a short detour after Lugano sightseeing, or assume that a clouded summit becomes worthwhile because the train is already booked.',
    fallback: 'If the summit is clouded, the railway is not running or the connection no longer leaves a comfortable return, keep the day in Mendrisio. Follow the official historic-centre audio tour; add Museo d’Arte Mendrisio only after checking its current exhibition and opening information. This is a real lower-elevation plan, not a promise that a museum will be open on every travel date.',
    duration: 'Allow most of a day from Lugano for Capolago, the mountain railway and summit time. A Mendrisio-only visit can be shorter; add the museum only if its current hours and exhibition fit. Keep SBB waits and the last comfortable return inside the time budget.',
    combine: 'Use Mendrisio as the fallback or as a separate short town visit. Avoid stacking the summit, a full museum visit and Lugano’s lakefront in one day: each extra segment makes the return depend on a different timetable or opening window.',
    verify: 'Before leaving, compare SBB connections to Capolago-Riva San Vitale with the Monte Generoso timetable for the exact date, and check the summit forecast and service notices. For the lower route, verify Museo d’Arte opening and exhibition details. Travelers who need step-free access should contact the railway in advance and check which intermediate stations and summit areas fit their needs.',
    choices: [
      ['Summit railway · clear and operating', 'Ride from Capolago when the mountain is visible and the operator confirms service. Keep the ascent, summit visit and descent inside the published train pattern.'],
      ['Mendrisio · culture at valley level', 'Use the historic-centre audio tour as the core walk. Add Museo d’Arte only after checking the current opening and exhibition; this is the better option when summit weather is poor.'],
      ['Short southern sampler', 'Choose either the old town or the Capolago rail approach. Do not add both simply because they are close on a map; make the return connection the deciding constraint.']
    ],
    stages: [
      ['Choose by the mountain gate', 'Read the exact-date Monte Generoso calendar and forecast first. If the railway is closed or visibility is poor, switch to the Mendrisio plan before setting out.'],
      ['Build the SBB connection around Capolago', 'Use Capolago-Riva San Vitale as the named interchange: the mountain railway station is in the SBB station building. Leave a margin rather than assuming a tight platform change.'],
      ['Spend the summit time deliberately', 'The operator lists about 30 minutes from Capolago to the summit. Choose the viewpoint and Fiore di pietra, or a suitable signed walk, then return on a train that still protects the valley connection.'],
      ['Keep one return chain', 'Save a comfortable SBB return to Lugano before committing to the ascent. If choosing Mendrisio instead, check the audio-tour route and any museum hours before walking away from the station.']
    ],
    watch: [
      ['Weather can stop the railway', 'A poor forecast is an operating decision, not just a view downgrade; confirm service before travelling to Capolago.'],
      ['Accessibility differs by stop', 'The operator says intermediate stations are not guaranteed fully accessible and asks for advance notice for special transport. Verify directly if relevant.'],
      ['Town attractions have their own hours', 'The audio tour and museum are separate choices. Check current access instead of assuming a rainy-day venue is open.']
    ],
    faq: [
      ['Can I fit Monte Generoso into a Lugano sightseeing day?', 'Treat it as the main excursion. The mountain railway takes about 30 minutes each way from Capolago, before the Lugano–Capolago train, departure gaps and summit time. A tight same-day mix with the lakefront or a museum makes the return fragile.'],
      ['What should replace the summit in poor weather?', 'Use Mendrisio’s official historic-centre audio tour and, if it is open and the exhibition suits you, Museo d’Arte Mendrisio. Check the museum’s current information first; the town walk remains the simpler fallback.'],
      ['Is the Monte Generoso route step-free?', 'Do not assume that every stop is accessible. The railway publishes specific wheelchair limits, advance-notice requirements and a warning that intermediate stations are not guaranteed accessible. Check its current accessibility page and contact the operator for your needs.']
    ],
    sources: [
      ['https://www.montegeneroso.ch/en/high-season-timetable', 'Monte Generoso Railway — timetable and service notices'],
      ['https://www.montegeneroso.ch/en/ferrovia/accessibility', 'Monte Generoso Railway — accessibility and advance assistance'],
      ['https://www.ticino.ch/en/commons/details/Audio-tour-of-Mendrisio/148338.html', 'Ticino Turismo — Mendrisio historic-centre audio tour'],
      ['https://www.mendrisiottoturismo.ch/en/commons/details/Museo-d-arte-Mendrisio/2759.html', 'Mendrisiotto Turismo — Museo d’Arte Mendrisio'],
      ['https://www.sbb.ch/en', 'SBB — current rail connections to Capolago and Mendrisio']
    ],
    fieldContext: {
      heading: 'Two southern-Ticino plans, with different gates.',
      cards: [
        { title: 'Capolago to the summit', copy: 'The rack railway begins inside Capolago-Riva San Vitale’s SBB station building; the operator lists about 30 minutes to the summit and warns that bad weather can stop service. Check its exact-date timetable before making this the day’s anchor.', sources: [0] },
        { title: 'Mendrisio at a lower level', copy: 'The official audio tour offers a self-guided way through the historic centre. Museo d’Arte Mendrisio is in a former monastery and has changing exhibitions, so check its current opening information before adding it.', sources: [2, 3] },
        { title: 'Access is stop-specific', copy: 'The operator provides advance assistance but does not guarantee full accessibility at San Nicolao and Bellavista. Confirm the railway, summit and any planned walk directly if mobility access is part of the decision.', sources: [1] }
      ]
    }
  },
  'maggia-centovalli': {
    isoDate: switzerlandCh15IsoDate,
    reviewDate: switzerlandCh15ReviewDate,
    summary: 'Choose one corridor from Locarno: FART bus 315 links Locarno, Cevio and Cavergno, while the separate Centovalli railway heads toward Intragna, Camedo and Italy.',
    access: 'Start from Locarno and decide bus or rail before leaving. FART line 315 is the bus corridor through Cevio toward Cavergno; the Vigezzina-Centovalli railway is a separate line from Locarno-Muralto toward Intragna and Camedo, with through services to Domodossola. These are not interchangeable branches or stops on one loop. Check the exact stop, current timetable and last useful return for the corridor you select.',
    tradeoff: 'Maggia is a bus-and-village day: choose a served stop, then make a short walk or local visit around it. Centovalli is a railway day: choose a station for a pause or stay aboard for a longer cross-border ride. The rail journey is more weather-resilient than a river-edge walk, but still has its own timetable and works. Combining both often reduces the day to transfers instead of giving either valley room.',
    fallback: 'If rain or river conditions make a Maggia walk unattractive, switch to the Centovalli train only if its current service and return suit the day. If the rail line is disrupted, stay around Locarno and Ascona rather than improvising a second valley by road. A scenic ride is not a substitute for checking the actual connection home.',
    duration: 'Give either corridor most of a day if you want a village stop, meal or walk. A short out-and-back works only when you choose one nearby stop and confirm both directions first. Through-running to Domodossola is a longer international rail outing; plan it as the day’s main journey.',
    combine: 'Pair either route with an easy Locarno evening. Do not combine a full Maggia bus day and Centovalli rail ride, or add Verzasca by default; each corridor needs its own return margin and the buses and railway use different operating patterns.',
    verify: 'For Maggia, check FART line 315’s current stop list, timetable, service notices and return from the village you choose. For Centovalli, check FART line 620 and the Vigezzina-Centovalli operator for station access, works and whether your train ends in Camedo or continues to Domodossola. Confirm ticket validity for the full journey if crossing into Italy.',
    choices: [
      ['Maggia · bus and one village', 'Use line 315 toward Cevio or Cavergno, choose a stop from the current route information and build one walk around it. This is the valley option when the weather and ground suit time outdoors.'],
      ['Centovalli · rail and selected stop', 'Take the separate railway toward Intragna or Camedo. Decide whether to step off or ride through to Domodossola before buying; the longer trip is a different day plan.'],
      ['Short sampler · one connection each way', 'Pick a single nearby stop in either corridor and return on the saved service. Do not split a short visit between bus and rail just to collect both modes.']
    ],
    stages: [
      ['Pick the corridor at breakfast', 'Choose Maggia bus or Centovalli rail according to weather, walking appetite and the place you want to reach. Keep the other for another day.'],
      ['Name the stop before boarding', 'For Maggia, select a served stop on FART 315 toward Cevio or Cavergno. For rail, select Intragna, Camedo or a through destination and check the train’s stopping pattern.'],
      ['Make the stop the activity', 'Give one village, walk or rail segment enough time. In Maggia, keep riverside plans conservative after rain; in Centovalli, check opening hours before building the day around a small-station visit.'],
      ['Save a return with margin', 'Check the timetable again before leaving the stop. For a journey beyond Camedo, confirm the ticket covers the Italian leg and keep the longer through ride inside your onward plans.']
    ],
    watch: [
      ['Different network, different stop', 'Line 315 is a bus; Centovalli is a separate railway. A stop name or return on one is not a connection on the other.'],
      ['Last return defines the walk', 'Do not let a meal or trail extension use the buffer needed to reach a less frequent valley departure. Recheck live notices on the day.'],
      ['Cross-border through service', 'Domodossola is in Italy. Check ticket coverage and the operator’s current through-service information if you ride past Camedo.']
    ],
    faq: [
      ['Which corridor is easier in uncertain weather?', 'Centovalli keeps the main experience on the railway. Maggia works better when you want a village or walk and conditions are suitable. Check both operators; a train is not immune to works or disruption.'],
      ['Can I ride Centovalli to Domodossola and return the same day?', 'It is a longer cross-border rail outing, so make it the main purpose of the day. Check the exact through train, ticket coverage and return before leaving Locarno; do not add a full Maggia or Verzasca visit.'],
      ['Can I do Maggia and Centovalli in one day?', 'Usually this turns the outing into connection sampling. Choose one route and a useful stop; keep the other for a second day so a walk, meal or delay does not consume the return margin.']
    ],
    sources: [
      ['https://fartiamo.ch/en/line-315/', 'FART — line 315 Locarno–Cevio–Cavergno and service notices'],
      ['https://fartiamo.ch/en/line-620/', 'FART — Vigezzina-Centovalli railway, stations and works'],
      ['https://www.vigezzinacentovalli.com/en/', 'Vigezzina-Centovalli Railway — operator and route planning'],
      ['https://www.postauto.ch/en/timetable', 'PostBus — current timetable and stop lookup'],
      ['https://www.ascona-locarno.com/en/explore/centovalli', 'Ascona-Locarno Tourism — Centovalli region']
    ],
    fieldContext: {
      heading: 'Two corridors leave Locarno in different ways.',
      cards: [
        { title: 'Bus 315 · Maggia', copy: 'FART lists line 315 as Locarno–Cevio–Cavergno. Choose a served stop from the current route and timetable, then plan the walk around that stop instead of treating the whole valley as one short excursion.', sources: [0] },
        { title: 'Rail 620 · Centovalli', copy: 'FART lists regional rail between Locarno and Camedo, with through trains to Domodossola. Check which service you board and whether you are making a short stop or a longer cross-border ride.', sources: [1, 2] },
        { title: 'Plan from the return', copy: 'Use the operator’s live timetable and service notices on the day. A village walk, station visit or meal needs to finish before the chosen bus or train, not merely before sunset.', sources: [0, 3] }
      ]
    }
  },
  'verzasca-valley': {
    isoDate: switzerlandCh15IsoDate,
    reviewDate: switzerlandCh15ReviewDate,
    summary: 'Use PostBus 321 from Locarno to choose one Verzasca stop, such as Lavertezzo or Sonogno; separate the famous bridge visit from longer valley walks and water decisions.',
    access: 'The regional tourism office identifies PostBus 321 from Locarno railway station to Sonogno. Treat the route as a valley spine, not city-frequency transit: pick the stop before boarding, check the exact-date timetable and save the return. Lavertezzo is the Ponte dei Salti stop for the short bridge-and-village visit; Sonogno is the far-end village with its own museum and walking options. Do not plan to walk between these places unless you have chosen and checked a specific signed route.',
    tradeoff: 'The famous Ponte dei Salti is a focused Lavertezzo visit; the whole valley is longer, with Sonogno and the Sentierone route as separate choices. The clear emerald water and smooth rocks are not a safety signal. Rain can raise water levels, and cold water, currents, slippery rock and sudden releases are hazards. Keep swimming out of the itinerary unless local signs, current conditions and your own ability all support it; when uncertain, stay on land.',
    fallback: 'If the weather is unsettled, water is high or local warnings are posted, keep the visit dry: use the village lanes and viewpoints, or return to Locarno and Ascona. If you planned the longer route, shorten it to a served stop rather than walking beyond the return bus. The regional tourism page links current safe-water guidance and the valley map.',
    duration: 'A direct Lavertezzo bridge visit can fit a half day if the bus times work. Sonogno, a museum visit or a trail segment makes this a full-day plan. The Sentierone between Sonogno and Locarno is a multi-stage route, not an add-on to a quick Ponte dei Salti stop.',
    combine: 'Pair the valley with an easy evening back in Locarno. Do not combine it with Maggia, Centovalli or a full lake-town day; the bus ride, stop choice, path time and return deserve their own block.',
    verify: 'Check PostBus 321’s current timetable from Locarno railway station and the return from your chosen stop. Read the regional Safe Waters guidance, weather forecast, local warning signs and any trail notices before approaching the river. Check museum hours if Sonogno’s Museo di Val Verzasca or Casa della lana is part of the plan.',
    choices: [
      ['Lavertezzo · bridge and village', 'Use the served stop for Ponte dei Salti, a short village loop and signed paths nearby. Keep the visit land-based unless local conditions and safety guidance make water entry appropriate.'],
      ['Sonogno · far-end village', 'Ride to Sonogno for the stone-built centre and, if open, the Museum of the Verzasca Valley or House of Wool. Check the return bus before adding the nearby waterfall walk.'],
      ['Sentierone · staged hike', 'Use the official route as a separate hiking plan. It runs from Sonogno toward Locarno in stages; match one chosen segment to your fitness, daylight and bus connections rather than attempting the entire valley casually.']
    ],
    stages: [
      ['Check water and weather first', 'Read the regional Safe Waters advice and current forecast. If rain, high flow or local warnings make river access uncertain, switch to a dry village visit or stay in Locarno.'],
      ['Choose one bus stop', 'Use the PostBus 321 stop that matches the plan: Lavertezzo for the bridge, Sonogno for the far-end village, or another stop only after checking the map and return.'],
      ['Keep the walk within the bus window', 'Follow signed paths and leave time to reach the stop without rushing over uneven ground. The Sentierone takes several stages; do not mistake it for a short walk between the photo locations.'],
      ['Treat the river as a separate decision', 'Clear water does not show current, depth, temperature or dam-release risk. Follow posted advice and local warnings; if anything is uncertain, stay out of the water and protect the return bus.']
    ],
    watch: [
      ['Natural pools are not controlled pools', 'The tourism office warns about sudden water rise, cold, slippery rocks, currents, whirlpools and waterfalls. Keep children close and obey local signs.'],
      ['A missed bus changes the day', 'Check the exact stop and last comfortable return before leaving the valley road. Do not rely on a spontaneous taxi or an unverified walking shortcut.'],
      ['Long route means stages', 'The Sentierone is described as a multi-stage route from Sonogno to Locarno. Choose one segment with a clear start, exit and transport plan.']
    ],
    faq: [
      ['Is the Ponte dei Salti pool safe for swimming?', 'The bridge’s popularity and clear water do not establish safe conditions. The regional Safe Waters guidance warns of rapid rises after rain, cold water, slippery rocks, strong currents and whirlpools. Read local warnings and stay out whenever conditions are uncertain.'],
      ['How do I reach Sonogno without a car?', 'Ascona-Locarno Tourism identifies PostBus 321 from Locarno railway station. Check the exact-date timetable, stop and return before you go; this is a valley route, not a service to assume runs like urban transit.'],
      ['Can I walk the whole valley from Sonogno to Locarno?', 'The regional tourism office describes the Sentierone as a route that can be completed in several stages. Choose a specific stage and verify route conditions, daylight and transport at both ends rather than treating it as a quick extension to Lavertezzo.']
    ],
    sources: [
      ['https://www.ascona-locarno.com/en/explore/valle-verzasca', 'Ascona-Locarno Tourism — valley villages, Sentierone and visitor map'],
      ['https://www.ascona-locarno.com/en/explore/valle-verzasca/sonogno', 'Ascona-Locarno Tourism — Sonogno and PostBus 321 from Locarno'],
      ['https://www.ascona-locarno.com/en/commons/details/Safe-waters/65691', 'Ascona-Locarno Tourism — Safe Waters guidance'],
      ['https://www.postauto.ch/en/timetable', 'PostBus — current timetable and stop lookup'],
      ['https://www.verzasca.ch/en/', 'Verzasca — official valley, village and trail information']
    ],
    fieldContext: {
      heading: 'The bridge is one stop; the valley is a longer route.',
      cards: [
        { title: 'Lavertezzo · Ponte dei Salti', copy: 'The regional guide identifies the double-arched bridge as the most photographed object in the valley. Make it a compact village visit and remember that the picture-perfect river is still a natural waterway with changing conditions.', sources: [0, 2] },
        { title: 'Sonogno · the far end', copy: 'PostBus 321 reaches Sonogno from Locarno railway station. The village has the Museum of the Verzasca Valley and Casa della lana; check current opening before using either as the reason for a long ride.', sources: [1] },
        { title: 'Sentierone · plan by stage', copy: 'The official regional page describes the trail from Sonogno to Locarno as a route for several stages. Choose a specific start and exit stop, then align walking time with daylight and the return bus.', sources: [0, 4] }
      ]
    }
  },
  'stein-am-rhein': {
    isoDate: switzerlandCh15IsoDate,
    reviewDate: switzerlandCh15ReviewDate,
    summary: 'Reach Stein am Rhein by regional rail and choose a compact painted-old-town loop, a separate uphill visit to Hohenklingen Castle, or a seasonal Rhine promenade and boat extension.',
    access: 'Regional rail brings you to Stein am Rhein; the old town is the main walkable block from the station. Start at the market square and read the painted timber-framed façades before adding anything uphill. Hohenklingen Castle is a distinct climb above town, so check the current access and opening information and judge the route against your mobility, weather and remaining daylight. The Rhine promenade is a separate, gentler extension; boat trips depend on season and direction.',
    tradeoff: 'Stein am Rhein is compact and visually rich, so the old town alone does not need a checklist or a full day. The castle adds an uphill effort and a view, while St George’s Abbey adds an indoor history option; neither should be assumed open without checking. A seasonal boat may connect the river towns, but rail is the dependable plan to verify for a specific date. Choose one extension rather than stacking castle, museum, boat and Rhine Falls into a rushed loop.',
    fallback: 'In rain or on a short visit, keep to the covered-feeling scale of the old-town lanes, market square and an indoor museum only if it is open. Skip the castle climb when footing, visibility or energy is poor. Use the promenade as a short river-edge finish and return by the rail connection you checked; do not count on a boat outside its published season.',
    duration: 'Allow roughly two to four hours for the painted centre, market square and a relaxed promenade or meal. Add the castle climb or St George’s Abbey as one more focused block, with time based on current access and your pace. A boat toward Schaffhausen or Lake Constance changes the day into a seasonal river itinerary.',
    combine: 'From Schaffhausen, give Stein am Rhein its own half-day or day block. Pairing it with the Rhine Falls is possible only when the actual rail connections, daylight and one selected Falls bank leave room; do not treat the waterfall, castle and boat as automatic extras.',
    verify: 'Check SBB for the exact regional connection from Schaffhausen and onward. Before climbing, check Hohenklingen Castle’s current access and opening details; verify St George’s Abbey opening if visiting inside. Confirm URh boat season, direction and departure only if the river trip is part of the plan.',
    choices: [
      ['Old town · compact and level-focused', 'Walk the market square, narrow lanes and painted timber-framed façades, then finish at the Rhine promenade. Best when time, weather or mobility favors the town rather than the hill.'],
      ['Castle · add the uphill effort', 'Visit Hohenklingen for the elevated view only if the route and current access suit your group. Treat the climb as the day’s main extension, not a few effortless steps from the market square.'],
      ['Abbey or boat · check the calendar', 'Choose St George’s Abbey for a history-focused indoor visit or a scheduled Rhine boat for river scenery. Both need a date-specific opening or sailing check; do not make them assumed fallbacks.']
    ],
    stages: [
      ['Arrive and orient at the old town', 'From the station, walk into the historic centre and begin at the market square. Use the painted façades and timber framing as the main visit rather than rushing from landmark to landmark.'],
      ['Choose one extension', 'Check energy, weather and access: climb to Hohenklingen, visit St George’s Abbey if open, or keep the day at the promenade. Do not commit to all three before checking the return.'],
      ['Use the Rhine as a finish', 'Walk the promenade for a quieter contrast to the square. If a boat is the actual objective, verify season, direction and departure first because river services are not a year-round rail substitute.'],
      ['Return by the saved connection', 'Check SBB for the train you intend to take back toward Schaffhausen or onward. If you want the Rhine Falls too, choose one bank and confirm door-to-door timing before adding it.']
    ],
    watch: [
      ['Castle means uphill', 'Hohenklingen is above the town. Check path access, footing and opening information; use the old town and riverfront if the climb is not a good fit.'],
      ['A small town can fill a half day', 'The centre is compact. Add a museum, castle or boat only when it is open and genuinely matches the visit, not to pad a short route.'],
      ['Boat schedules are seasonal', 'Confirm the sailing’s season, direction and departure before using it as transport. Keep the checked rail connection as the return plan.']
    ],
    faq: [
      ['How long should I spend in Stein am Rhein?', 'Two to four hours usually suits the old town, market square and river promenade. Add one deliberate block—castle, abbey or a seasonal boat—if its current access and your return connection support it.'],
      ['Can I combine Stein am Rhein with Rhine Falls?', 'Possibly, but treat them as separate blocks linked by a checked regional connection. Choose one Falls bank and verify the actual travel time, attraction access and last return; the castle or a boat may need to move to another visit.'],
      ['Is Hohenklingen Castle an easy add-on?', 'It sits above the town and adds an uphill walk. Check the current route and access information, weather and group mobility before deciding; the market square and promenade make a complete lower-effort visit.']
    ],
    sources: [
      ['https://www.myswitzerland.com/en/destinations/stein-am-rhein/', 'Switzerland Tourism — Stein am Rhein old town, castle, abbey and Rhine'],
      ['https://www.myswitzerland.com/en/experiences/hohenklingen-castle/', 'Switzerland Tourism — Hohenklingen Castle visit information'],
      ['https://www.myswitzerland.com/en/experiences/museum-kloster-sankt-georgen/', 'Switzerland Tourism — St George’s Abbey museum'],
      ['https://www.urh.ch/en/', 'URh — current Rhine boat routes and seasonal timetable'],
      ['https://www.sbb.ch/en', 'SBB — current regional rail connections']
    ],
    fieldContext: {
      heading: 'Three different ways to spend time above and beside the Rhine.',
      cards: [
        { title: 'Market square and painted façades', copy: 'The old town is known for timber-framed houses, some dating from the 15th or 16th century, and colourful frescoes around its winding lanes and market square. This is the complete compact visit, not a warm-up that requires a castle climb.', sources: [0] },
        { title: 'Hohenklingen · uphill extension', copy: 'Switzerland Tourism recommends the castle for its views, but reaching it means climbing above the centre. Check current route access and opening information before making it part of the day.', sources: [1] },
        { title: 'Abbey or river boat', copy: 'St George’s Abbey adds a museum and garden; URh boat routes add a seasonal connection along the Rhine. Verify museum access or the boat’s direction and sailing date before using either as the next leg.', sources: [2, 3] }
      ]
    }
  }
};
