import {
  switzerlandCh10ClusterRefresh,
  switzerlandCh10GuideRefresh
} from './switzerland-ch10-refresh.mjs';

const reviewDate = '12 October 2026';
const isoDate = '2026-10-12';

const official = {
  engadin: ['https://www.engadin.ch/en/', 'Engadin Tourism — maps, trails and local conditions'],
  sbb: ['https://www.sbb.ch/en', 'SBB — date-specific connections'],
  rhb: ['https://www.rhb.ch/en/panoramic-journeys/bernina-express/', 'Rhaetian Railway — Bernina Express and current service information'],
  reservations: ['https://www.rhb.ch/en/tickets/bernina-line-reservations/', 'Rhaetian Railway — Bernina Line seat reservations'],
  ice: ['https://www.stmoritz.com/en/directory/sports/ice-skating', 'St Moritz — local ice-skating information'],
  muottas: ['https://www.muottasmuragl.ch/en/directions-and-hours-of-operation', 'Muottas Muragl — access and operating hours'],
  diavolezza: ['https://www.corvatsch-diavolezza.ch/en/mountains/diavolezza', 'Diavolezza — mountain information and current access'],
  mountains: ['https://www.corvatsch-diavolezza.ch/en/mountains', 'Corvatsch Diavolezza Lagalb — operating status'],
  meteo: ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss — forecasts and warnings']
};

export const switzerlandCh11ClusterRefresh = {
  ...switzerlandCh10ClusterRefresh['st-moritz-engadin'],
  reviewDate,
  isoDate,
  tagline: 'Choose one Upper Engadin system at a time: the lake valley, the Bernina railway, or one high mountain access chain.',
  hubIntro: 'St Moritz is the valley’s best-known base, but the useful planning question is which Upper Engadin system belongs in each day. Keep Lake St Moritz and nearby villages as a lower-valley block; use Pontresina to orient a Bernina rail day; choose only one mountain railway when visibility and operations support it. The base town and the excursion are separate decisions, and each return should be checked before leaving the valley floor.',
  stay: 'Two nights can cover St Moritz town and one focused excursion. Three nights make room for a distinct lake or village day plus the Bernina corridor; four nights give a weather buffer for a high-mountain visit. A hotel near St Moritz station favors broad valley connections, while Pontresina puts the Bernina corridor first. Check the exact hotel-to-platform walk and luggage transfer before booking.',
  transfer: 'Use SBB for the complete date-specific journey and RhB for the Upper Engadin rail corridor. The Bernina Express is a named panoramic service with its own booking and seat-reservation information; regional RhB trains are a separate way to plan a shorter corridor ride. Punt Muragl and Diavolezza use different mountain access systems, so confirm the right valley stop, operator status and return for the selected day.',
  season: 'The same map behaves differently across seasons. Shore paths can be exposed to wind or snow; lake ice is never a visual safety test; high stations have colder, windier conditions than the valley. Lift and funicular seasons, trail openings and maintenance windows differ by operator. Check the exact route and elevation on the day, and treat a clear St Moritz forecast as no guarantee for Diavolezza.',
  fallback: 'When visibility, wind or an operating notice removes the high route, keep the day in St Moritz or Pontresina: choose an open village visit, a short verified lakeside section, or a rail segment with a confirmed return. Do not substitute a second lift automatically, step onto frozen water, or turn a closed trail into an improvised shortcut.',
    sources: [official.engadin, official.rhb, official.reservations, official.sbb, official.mountains, official.ice, official.meteo],
  faq: [
    ['How many nights should I plan for St Moritz and the Upper Engadin?', 'Two nights allow St Moritz and one excursion; three nights separate the lake valley from a Bernina journey; four leave a useful weather window for one high-mountain system.'],
    ['Should I stay in St Moritz or Pontresina?', 'St Moritz is a broad valley base with town and lake access. Pontresina is a better fit when the Bernina corridor is the priority. Compare the exact hotel walk, rail or bus connection, and luggage approach.'],
    ['What should I check before a mountain or rail day?', 'Use SBB and RhB for the exact service and return, the selected lift operator for operating status, MeteoSwiss for the relevant elevation, and local route information for trail access. Do not infer lake-ice or trail safety from appearance.']
  ]
};

export const switzerlandCh11GuideRefresh = {
  'st-moritz-lakes': {
    ...switzerlandCh10GuideRefresh['/st-moritz-engadin/st-moritz-lakes'],
    reviewDate, isoDate,
    summary: 'Build a lower-valley day around Lake St Moritz and one mapped walk toward Lej da Staz or a neighboring village, then use a confirmed rail or bus return instead of trying to trace every shore.',
    access: 'Start at St Moritz station and orient to the town-side edge of Lake St Moritz. Before walking, choose one signed segment from the current Engadin route map: a short lake loop, a route toward Lej da Staz, or a village connection toward Celerina. Mark a real turn-back point and the nearest usable return stop; do not assume a continuous public path around every lake.',
    tradeoff: 'This route keeps the day near the valley floor and leaves a high summit decision for another forecast window. The trade is less altitude and fewer panoramic viewpoints in exchange for a more flexible walk, village stop and rail fallback. Wind, snow cover and path closures still matter at lake level.',
    fallback: 'If the open shore is uncomfortable or a path is closed, shorten the walk to the signed section that is confirmed open, then return through St Moritz or a checked village stop. In winter, keep entirely off lake ice unless an official local notice explicitly identifies an open area; never judge ice strength by color, footprints or other visitors.',
    duration: 'Allow half a day for St Moritz town plus one signed lakeside section. A second village or lake only belongs in the plan if the dated bus or RhB connection and return still leave time for the walk and a meal.',
    combine: 'Pair with St Moritz town in the evening. Keep the Bernina rail journey and either high mountain system on separate days so a walk can shrink without breaking the return plan.',
    verify: 'Use the Engadin route map for the chosen path and its current closure status; use SBB or local transport information for the exact return; check MeteoSwiss for valley wind and precipitation. Lake-edge access is not permission to walk on ice.',
    stages: [
      ['Set the valley boundary', 'Start from St Moritz station and choose the short town-and-lake block before adding a village.'],
      ['Select one mapped segment', 'Check the official route map, then choose the lake loop, Lej da Staz direction or Celerina connection that is open for the day.'],
      ['Set the walk’s end before leaving', 'Name the signed turn-back point and nearby stop; trim the route if the surface, wind or daylight changes.'],
      ['Return on a checked connection', 'Use the saved bus or RhB option and finish in St Moritz without relying on an assumed shore path.']
    ],
    choices: [
      ['St Moritz shore', 'Keep the walk close to town and the station when time or weather is uncertain.'],
      ['Lej da Staz direction', 'Use the official route map to choose a currently open forest-and-lake segment, with a named turn-back point.'],
      ['Village connection', 'Walk one signed section toward Celerina, then use the verified return rather than adding another lake by guesswork.']
    ],
    watch: [
      ['A map line is not a current opening notice', 'Confirm the selected path is open and signed for the date before committing beyond an easy return.'],
      ['Frozen lake appearance', 'Snow, tracks and other people do not establish ice safety; follow official local restrictions.'],
      ['Valley wind and daylight', 'Open shore can become uncomfortable before a summit forecast changes; shorten the loop while a return remains easy.']
    ],
    sources: [official.engadin, official.sbb, official.ice, official.meteo],
    fieldContext: {
      heading: 'Choose the shore by access, not by lake count.',
      cards: [
        { title: 'Lake St Moritz', copy: 'Use the station and town edge as the simple start. Decide in advance whether the goal is the shore itself or a longer signed path.', sources: [0, 1] },
        { title: 'Lej da Staz or Celerina', copy: 'Treat each as a route option with its own path and return check. The official map and day-specific transit determine which one is practical.', sources: [0, 1] },
        { title: 'Winter boundary', copy: 'St Moritz describes lake skating after sustained frost without snowfall; check current local access guidance and never treat appearance as proof that an area is open or safe.', sources: [2, 0] }
      ]
    },
    faq: [
      ['Can I walk around every Upper Engadin lake?', 'Do not assume a continuous public shoreline. Choose a signed route from the current Engadin map, identify its turn-back point, and verify each access and return connection.'],
      ['Is a frozen lake safe to cross in winter?', 'Not from appearance alone. Follow current local notices and stay off ice unless an official authority explicitly opens a defined area.'],
      ['What is the useful bad-weather alternative?', 'Keep a short open town-side section, a village visit or a checked rail segment. Save the mountain systems for a separate forecast window.']
    ]
  },
  'bernina-pontresina': {
    ...switzerlandCh10GuideRefresh['/st-moritz-engadin/bernina-pontresina'],
    reviewDate, isoDate,
    summary: 'Make Pontresina the rail gateway, choose one outward-and-return Bernina segment before boarding, and decide deliberately between the named panoramic product and an ordinary regional journey.',
    access: 'Use SBB or RhB to reach Pontresina station, then check the exact service heading toward Bernina Pass before choosing a turnaround such as Ospizio Bernina. A Bernina Express booking and seat-reservation decision is different from planning a regional RhB ride. If the onward journey crosses into Italy, check border and return details separately; this guide keeps the core day within the Swiss corridor.',
    tradeoff: 'The railway is the day’s main activity, so every stop competes with time on the line and the return connection. A panoramic service provides a different booked experience; a regional journey supports a separately planned shorter segment. Neither guarantees clear views, an unplanned stop or a convenient later train.',
    fallback: 'If visibility removes the high-alpine view, make a shorter Pontresina-centered rail outing or keep the village as the day. If operations change, follow RhB notices and use a service confirmed for the new plan; do not replace a disrupted train with a walk beside the railway.',
    duration: 'Reserve at least half a day for a focused out-and-back from Pontresina. A longer Bernina corridor ride can occupy most of a day once the selected service, any stopover, booking steps and return margin are included.',
    combine: 'Pair with a deliberate Pontresina village block before or after the train. Keep Diavolezza, Muottas Muragl and a cross-border Tirano plan out of the same day unless the current timetable makes the intended return explicit.',
    verify: 'Check the exact RhB train and operating notices, then read the Bernina Express booking and seat-reservation terms if selecting that branded service. As checked on 12 October 2026, RhB lists trains 951 and 952 on a temporary diversion via Vereina from 29 October to 13 November; recheck that notice and the exact train’s stops. Confirm a return from the chosen turnaround in SBB or RhB and review the high-route forecast before leaving.',
    stages: [
      ['Start at Pontresina station', 'Confirm the platform and date-specific departure in SBB or RhB; do not plan from a generic line map.'],
      ['Choose the train product', 'Decide whether the day is a Bernina Express booking or a regional RhB journey and check the matching reservation terms.'],
      ['Set the turnaround first', 'Choose a station such as Ospizio Bernina only when the outward service, time ashore and return are all verified.'],
      ['Close the loop with margin', 'Save the service back to Pontresina or St Moritz and shorten the outing if weather or operations shift.']
    ],
    choices: [
      ['Bernina Express', 'Choose the branded panoramic journey only after checking its current ticket, booking and seat-reservation conditions.'],
      ['Regional RhB segment', 'Plan a shorter rail outing as its own itinerary, checking the selected stations and return rather than assuming it copies the panoramic service.'],
      ['Pontresina as the destination', 'Keep the village and a short confirmed rail ride when visibility, time or service disruptions weaken the pass crossing.']
    ],
    watch: [
      ['Product and reservation mismatch', 'Check the exact service before booking; the route name does not tell you which ticket or seat reservation you need.'],
      ['Return station selected too late', 'A scenic stop only works when the next usable departure leaves time for the visit and the ride back.'],
      ['Cross-border scope creep', 'Tirano changes the trip’s border and return plan; do not treat it as an automatic extension of a Pontresina out-and-back.']
    ],
    sources: [official.rhb, official.reservations, official.sbb, official.meteo],
    fieldContext: {
      heading: 'The train, reservation and stop are three separate choices.',
      cards: [
        { title: 'Named panoramic service', copy: 'Read RhB’s Bernina Express page and its linked reservation terms for the actual travel date before choosing a departure.', sources: [0, 1] },
        { title: 'Regional journey', copy: 'Build a separate station-to-station plan in SBB or RhB, with a verified return from the chosen turnaround.', sources: [2, 0] },
        { title: 'Dated service alert', copy: 'As checked on 12 October 2026, RhB lists trains 951 and 952 on a temporary diversion via Vereina from 29 October to 13 November. Recheck the live notice and the stops for your exact train.', sources: [0, 2] }
      ]
    },
    faq: [
      ['Is the Bernina Express the only way to travel the Bernina line?', 'No. RhB lists the named Bernina Express separately from ordinary regional planning. Check the specific train, ticket and reservation terms for your chosen trip.'],
      ['Should I get off at Ospizio Bernina?', 'Only if the date-specific outward and return services leave enough time for the stop and local conditions suit the visit. Confirm both directions before leaving Pontresina.'],
      ['Can I continue to Tirano and return the same day?', 'That is a longer cross-border itinerary. Check the train product, passport requirements, actual timetable and return from Italy independently; it is not assumed in this Swiss corridor guide.']
    ]
  },
  'muottas-diavolezza': {
    ...switzerlandCh10GuideRefresh['/st-moritz-engadin/muottas-diavolezza'],
    reviewDate, isoDate,
    summary: 'Choose Muottas Muragl’s valley overlook or Diavolezza’s higher Bernina landscape, then follow that one access chain and keep Pontresina as the lower fallback.',
    access: 'Muottas Muragl begins at the Punt Muragl funicular station; confirm the approach and operating hours with its operator. Diavolezza begins from the Bernina corridor and uses a separate cable car; check the mountain operator’s current status, upper-station weather and access details. Neither lift makes the upper terrain a casual continuation of the valley walk.',
    tradeoff: 'Muottas Muragl sits above the lake valley and is the more focused choice for reading the Engadin’s shape. Diavolezza reaches a substantially higher glacial setting near 3,000 metres, with greater cold, wind and altitude exposure. The two are different excursions, not interchangeable viewpoints or a sensible same-day checklist.',
    fallback: 'If the selected lift is closed or the upper forecast is poor, stay in Pontresina or St Moritz and choose a lower signed walk or village visit. Do not switch automatically to the other mountain: it has a different access point, operating decision and exposure. A lift ticket does not certify any trail as open or suitable.',
    duration: 'Allow half a day for one lift and the upper station. Add walking time only after checking the exact route opening, weather, equipment and descent margin; a summit visit should not be squeezed between a long Bernina train ride and dinner.',
    combine: 'Pair one mountain with a relaxed Pontresina or St Moritz evening. Keep the second mountain system and the Bernina line journey for separate days so a closure can produce a useful valley day.',
    verify: 'For Muottas Muragl, check the Punt Muragl access and live operating hours. For Diavolezza, use its operator for lift status and mountain information. As checked on 12 October 2026, Muottas Muragl lists an autumn special from 26 October to 1 November, weather permitting; its winter hotel season begins 19 December. Confirm the funicular separately before travel. Check MeteoSwiss at the relevant elevation and local route notices before walking beyond the station area.',
    stages: [
      ['Choose the landscape question', 'Pick a lake-valley overview at Muottas Muragl or the higher Bernina glacial setting at Diavolezza.'],
      ['Check the matching valley access', 'Confirm Punt Muragl for the funicular or the Bernina-corridor approach for Diavolezza; do not mix the two chains.'],
      ['Recheck the upper station', 'Read the selected operator’s status, the elevation-specific forecast and the exact open-area notices before boarding.'],
      ['Keep a valley return ready', 'Return by the verified connection and use Pontresina or St Moritz if the upper window closes.']
    ],
    choices: [
      ['Muottas Muragl', 'Choose the funicular from Punt Muragl for the broad Upper Engadin valley view, subject to current operation and weather.'],
      ['Diavolezza', 'Choose the separate Bernina-line cable-car access for higher glacial terrain only when conditions, opening and altitude suit the group.'],
      ['Pontresina valley day', 'Keep the village and lower routes when cloud, wind, maintenance or fatigue makes a summit a poor trade.']
    ],
    watch: [
      ['Two different access chains', 'Punt Muragl and the Diavolezza valley station are not a single linked lift route; verify the transfer for whichever one you choose.'],
      ['High-altitude conditions', 'A valley forecast cannot establish the wind, visibility or temperature at the upper station.'],
      ['Lift versus trail status', 'An operating cable car does not mean a hiking route is open, appropriate or safe for your equipment.']
    ],
    sources: [official.muottas, official.diavolezza, official.mountains, official.meteo, official.sbb],
    fieldContext: {
      heading: 'Two mountains, two operators and two different exposure levels.',
      cards: [
        { title: 'Muottas Muragl via Punt Muragl', copy: 'Check the funicular’s own access and hours. Select it for the valley overview, then verify any onward walk independently.', sources: [0, 3] },
        { title: 'Diavolezza on the Bernina corridor', copy: 'Use the separate Diavolezza operator for lift and mountain information; the upper glacial setting needs its own weather and route check.', sources: [1, 2, 3] },
        { title: 'Dated seasonal notice', copy: 'As checked on 12 October 2026, Muottas Muragl lists an autumn special for 26 October–1 November, weather permitting, and a winter hotel opening from 19 December. Confirm the funicular’s live status separately.', sources: [0, 3] }
      ]
    },
    faq: [
      ['Which viewpoint is the better fit?', 'Choose Muottas Muragl for the valley form and Diavolezza for higher glacial terrain. Weather, operating status, exposure and the group’s altitude tolerance decide the day.'],
      ['Can I visit both lifts in one day?', 'The access chains are separate and the upper stations demand time. Plan one system so the visit has a real weather and return margin.'],
      ['Does an operating lift mean the hiking route is open?', 'No. Check the operator’s lift status and the local trail notices separately, and confirm that route difficulty and conditions suit your group.']
    ]
  }
};
