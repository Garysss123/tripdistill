export const switzerlandCh16IsoDate = '2026-10-12';
export const switzerlandCh16ReviewDate = '12 October 2026';

// CH16 closes the five remaining existing child-guide bodies. Keep these
// updates narrow: they do not change hub copy, route slugs, or image assets.
export const switzerlandCh16GuideRefresh = {
  'lugano-lakefront': {
    isoDate: switzerlandCh16IsoDate,
    reviewDate: switzerlandCh16ReviewDate,
    searchKeywords: ['Lugano station', 'Piazza Cioccaro', 'Via Nassa', 'Parco Ciani', 'Lugano lake promenade', 'TPL funicular'],
    summary: 'Plan Lugano as a station-to-lake descent: use the TPL funicular to Piazza Cioccaro, continue through the centre to the waterfront, and decide in advance whether the uphill return is by funicular or local bus.',
    access: 'Lugano’s central station sits above the historic centre. The TPL funicular links the FFS station with Piazza Cioccaro in the centre; from there, walk through the old-town lanes toward Piazza della Riforma and Via Nassa, then continue to the lakeside and Parco Ciani. Treat this as a downhill sequence with a transport choice at each end, not as a flat loop from the station. Check the live TPL timetable and any service notices before leaving the platform, especially if you need the funicular for the return. The city-side lakefront is walkable, but the return to the station climbs; allow time for that slope or use a verified bus connection.',
    tradeoff: 'The short plan concentrates on the central square, Via Nassa and the first lakefront stretch. The longer plan gives Parco Ciani and the gardens enough time, but it also adds a walk away from the main rail station and a more deliberate climb or transit ride back. Lake boats are a separate seasonal service with their own piers and timetable. Add a boat only when its departure, direction and return fit; proximity to the promenade does not make it a guaranteed continuation of the city walk.',
    fallback: 'In heavy rain or midday heat, shorten the exposed waterfront and keep the visit within the centre, using the funicular to control the steepest station approach. If the funicular is disrupted, check TPL’s current local routes from the station and choose a bus that reaches the centre before walking onward. When a lake boat is not operating or no longer fits the day, keep the itinerary on foot between the centre and Parco Ciani instead of improvising a pier-to-pier trip.',
    duration: 'Allow about three to four hours for the centre, lakeside and a relaxed park visit, plus rail-station connection time. A compact two-hour visit can cover the centre and one waterfront segment. Add boat time only after checking the seasonal navigation timetable; include the pier walk, boarding margin and a return connection in the same calculation.',
    combine: 'This route works well before an evening in Lugano or as the lower-effort choice on a day without a mountain excursion. Do not stack it with Monte Brè, San Salvatore or a long lake cruise by default: each adds a separate uphill approach, cable or boat timetable, and return decision. If you have only half a day, choose the city-and-lakefront walk or one mountain system.',
    verify: 'Check TPL’s funicular and line status, FFS connections, and any planned lift or street works on the day. If you want to add a boat, confirm that the chosen pier and sailing are operating on your date through Lake Lugano Navigation. Check weather and heat before committing to the exposed promenade, and keep the station climb or bus ride in your return plan.',
    choices: [
      ['Centre to lake · one-way descent', 'Take the TPL funicular down from the FFS station to Piazza Cioccaro. Walk the central lanes and squares, continue along Via Nassa toward the lake, and finish at Parco Ciani only if the remaining time and return plan allow it.'],
      ['Short centre loop · conserve time', 'Use the funicular for the station approach, visit Piazza della Riforma and Via Nassa, then return uphill on the checked funicular or a verified TPL bus. Leave the park and boat piers for another visit.'],
      ['Lakefront extension · optional sailing', 'Walk to the selected navigation pier and board only after checking its dated timetable, direction and return. If no sailing suits, keep the lakefront as a walk; do not make an unverified boat the connection back to the station.']
    ],
    stages: [
      ['Choose the station descent', 'At Lugano FFS, confirm that the city funicular is running and note its return pattern. It connects the station to Piazza Cioccaro; do not assume that every nearby bus stop is an equivalent station entrance.'],
      ['Walk the centre in a clear order', 'From Piazza Cioccaro, cross the old-town streets toward Piazza della Riforma and Via Nassa. Decide there whether to continue to the lake and Parco Ciani, so the park visit does not quietly push the station return into a rush.'],
      ['Set the lakefront turnaround', 'Use the promenade for a short waterside pause or continue to Parco Ciani for the gardens. Check any boat plan separately against the pier, sailing date and direction; waterfront access alone does not reserve a seat or guarantee service.'],
      ['Protect the uphill return', 'Before leaving the lakefront, choose between retracing the walk, boarding the working funicular at its city station or using a current TPL bus. Save a realistic FFS connection with margin for the climb, waiting and station access.']
    ],
    watch: [
      ['The station is above the centre', 'The easiest descent can become a tiring return climb. Decide on the uphill method before reaching the lake rather than relying on tired legs or a guessed bus.'],
      ['Boat service is seasonal', 'Lake navigation has a dated operating calendar. Verify the specific pier, route and last useful sailing; a lakefront walk remains the dependable land-based option.'],
      ['Service changes affect the order', 'TPL publishes route and disruption information. If the funicular is unavailable, recheck the current bus approach and allow extra time instead of following an old stop assumption.']
    ],
    faq: [
      ['What is the simplest way from Lugano station to the lake?', 'The TPL funicular connects the FFS station with Piazza Cioccaro. From the centre, continue on foot through the old town toward Via Nassa and the waterfront. Check current operating information and plan how you will climb back.'],
      ['Can I combine the centre walk with a lake boat?', 'Yes, if a sailing on your date fits the walk and return. Check the official navigation timetable for pier, direction and season, then leave time to reach the pier and board. Otherwise, treat the waterfront as a walking route.'],
      ['Is this route step-free?', 'Do not assume the full route is step-free: the station, funicular, historic lanes and waterfront have different surfaces and access conditions. Check the current operator accessibility information and choose a verified bus or lift option for the segments you need.']
    ],
    sources: [
      ['https://www.tplsa.ch/2/49/tpl-funicolare.html', 'TPL — Lugano station–city funicular'],
      ['https://www.tplsa.ch/8/0/newlinee-e-orari.html', 'TPL — current lines, timetables and service notices'],
      ['https://www.lakelugano.ch/en', 'Lake Lugano Navigation — seasonal routes and timetable'],
      ['https://www.sbb.ch/en', 'SBB — current rail connections to Lugano']
    ],
    fieldContext: {
      heading: 'A downhill city walk needs an uphill return plan.',
      cards: [
        { title: 'Station to Piazza Cioccaro', copy: 'TPL identifies the funicular as the link between Lugano FFS and the centre. Use it to begin the visit, then decide before the lakefront whether you will walk back up or return by a checked service.', sources: [0, 1] },
        { title: 'Centre to Parco Ciani', copy: 'The useful walking sequence runs from the central squares and Via Nassa toward the waterfront and park. The longer park extension is optional; turn around when the time budget no longer protects the station connection.', sources: [1] },
        { title: 'Lake boat as a separate choice', copy: 'Navigation services follow a seasonal calendar and named piers. Verify the sailing and return for the exact date before adding a boat; the promenade itself remains a flexible walking alternative.', sources: [2] }
      ]
    }
  },
  'san-salvatore-morcote': {
    isoDate: switzerlandCh16IsoDate,
    reviewDate: switzerlandCh16ReviewDate,
    searchKeywords: ['Monte San Salvatore', 'Paradiso funicular', 'Morcote', 'lake navigation', 'Lugano mountain and village'],
    summary: 'Choose between Monte San Salvatore’s timed summit funicular and Morcote’s lakeside village visit; combine them only when both dated services leave a comfortable return window.',
    access: 'Monte San Salvatore begins at Paradiso, a short walk from Paradiso rail station, and reaches the summit by its own funicular in about twelve minutes. Morcote is a separate lake-level destination reached by current TPL connections or a dated Lake Lugano Navigation sailing. These are two different access systems; there is no direct summit-to-village connection implied by this itinerary. Check the mountain railway calendar, the exact lake or bus timetable and your final return before leaving Lugano. The summit operator publishes specific mobility limits, so verify the cabin and summit access directly if wheelchair or stroller access matters.',
    tradeoff: 'The summit is the high-view choice and depends on visibility, the funicular’s operating calendar and its half-hour departure rhythm. Morcote is a slower village visit at lake level, with the arcades, lanes and waterfront as the point of the trip. Trying to fit both can work only when the selected transport services line up and the available daylight supports two purposeful visits. A mountain hike or a long lake cruise changes the day again; do not treat either as a small add-on.',
    fallback: 'If the summit is clouded, closed or outside its operating season, keep the day at lake level in Morcote or Lugano. If a boat is not running or the bus pattern does not fit, choose another verified lakeside stop rather than expecting an unscheduled connection. During the published 2026 maintenance closure, the mountain funicular is unavailable; the village plan remains independent of that lift, subject to its own transport timetable.',
    duration: 'Reserve roughly three to four hours for a summit visit from Lugano, including the Paradiso transfer, waiting between funicular departures and time above; the ride itself is about twelve minutes each way. Morcote also merits a half-day when you include the outbound and return journey. Combining both generally needs most of a day and a confirmed transport sequence, not just short map distances.',
    combine: 'For a calm day, choose one anchor: the summit in clear operating weather or Morcote at lake level. Combine the two only after matching FFS, the mountain railway and lake navigation or TPL on the exact date; save an alternative bus-based return. Keep Monte Brè and Monte Generoso for separate days so each mountain has a real weather and service window.',
    verify: 'Check the Monte San Salvatore exact-date opening calendar, service notices, fares and mobility information; in 2026 the operator lists service from 14 March through 8 November and a closure from 9 November 2026 through 12 March 2027 for restaurant renovation. Check FFS to Paradiso, then separately verify the current TPL or navigation route to Morcote and the return from the village. Forecast visibility before buying a summit trip.',
    choices: [
      ['Clear summit · Paradiso funicular', 'Travel to Paradiso and use the operator’s departure pattern for the ascent. Keep the summit visit within the next return departure and descend before continuing to another town.'],
      ['Morcote · lake-level village', 'Choose Morcote for the village lanes, arcades and waterfront. Use a verified bus or seasonal boat connection in both directions; allow time for waiting rather than treating the village as an urban stop.'],
      ['Both · only with matched services', 'Combine the summit and Morcote only when the mountain railway, lake or bus link and final FFS return fit on the same date with a spare connection. If the chain is tight, select the destination that matters most and keep the other for another day.']
    ],
    stages: [
      ['Check the summit gate first', 'Read the operator’s exact-date calendar and visibility forecast. The 2026 service window ends on 8 November before the listed maintenance closure; verify the following season’s calendar rather than extrapolating.'],
      ['Reach Paradiso deliberately', 'Use FFS to Paradiso and walk to the mountain railway station. Allow for the operator’s roughly thirty-minute departure rhythm and twelve-minute ride; the ride time is not the door-to-door excursion time.'],
      ['Set a distinct Morcote plan', 'If the village is your choice, check the current TPL route or the date-specific lake sailing from the relevant pier. If combining it after the summit, confirm the connecting service first and do not assume a direct descent to Morcote.'],
      ['Keep a return that survives a miss', 'Save the final bus, boat or rail service with enough margin for walking and waits. If one missed link would strand the plan, split the mountain and village into separate visits.']
    ],
    watch: [
      ['Operating dates are not year-round', 'The 2026 calendar includes an autumn closure and winter maintenance. Recheck dates and notices for the actual trip year.'],
      ['Summit visibility controls value', 'A running funicular does not guarantee a clear view. Check the forecast before committing, and use the lake-level village as a real alternative when cloud sits over the summit.'],
      ['Access limits are specific', 'The operator publishes cabin dimensions, weight limits and rules for strollers and bicycles. Verify them directly; do not infer access from the short ride or station proximity.']
    ],
    faq: [
      ['How long does Monte San Salvatore take from Lugano?', 'Allow around three to four hours for the excursion. The funicular ride is about twelve minutes, but you also need the FFS transfer to Paradiso, time between departures, summit time and a return connection.'],
      ['Can I go from the summit directly to Morcote?', 'Plan the summit and Morcote as separate transport legs. The summit railway starts at Paradiso; Morcote is at lake level and needs a verified bus or boat connection. Do not assume a direct summit trail or guaranteed through-service.'],
      ['Is the San Salvatore funicular operating in winter 2026?', 'The operator’s 2026 calendar lists service through 8 November, followed by closure from 9 November 2026 to 12 March 2027 for renovation work. Check the live calendar for later dates and any changes.']
    ],
    sources: [
      ['https://www.montesansalvatore.ch/en/timetable-and-fares/', 'Monte San Salvatore — 2026 timetable, fares and service closure'],
      ['https://www.montesansalvatore.ch/en/mount-san-salvatore/funicular/', 'Monte San Salvatore — Paradiso station and funicular access'],
      ['https://www.tplsa.ch/8/0/newlinee-e-orari.html', 'TPL — current regional routes and service notices'],
      ['https://www.lakelugano.ch/en', 'Lake Lugano Navigation — dated routes and seasonal timetable'],
      ['https://www.sbb.ch/en', 'SBB — current rail connections to Paradiso']
    ],
    fieldContext: {
      heading: 'Summit lift and lake village run on separate clocks.',
      cards: [
        { title: 'Paradiso to the summit', copy: 'The operator lists about twelve minutes for the funicular ride and departures at roughly half-hour intervals. Add the FFS approach, queue or wait and summit time to the excursion budget.', sources: [0, 1] },
        { title: 'Morcote at lake level', copy: 'Morcote is a village visit reached by its own bus or seasonal navigation connection. Check the dated return service before leaving Lugano; map distance does not establish a useful same-day link from the summit.', sources: [2, 3] },
        { title: 'The 2026 seasonal gate', copy: 'The published 2026 calendar runs from 14 March to 8 November, then lists maintenance closure through 12 March 2027. Check the current calendar for your year and use Morcote or Lugano if the lift is closed.', sources: [0] }
      ]
    }
  },
  'locarno-ascona': {
    isoDate: switzerlandCh16IsoDate,
    reviewDate: switzerlandCh16ReviewDate,
    searchKeywords: ['Locarno', 'Ascona', 'Locarno-Muralto station', 'FART bus', 'Lake Maggiore promenade'],
    summary: 'Treat Locarno and Ascona as two linked but distinct town visits: anchor at Locarno-Muralto station, then use a checked FART bus or seasonal lake sailing for Ascona.',
    access: 'Locarno is the rail anchor; Ascona is a separate lakeside town reached by local public transport or by lake navigation when a suitable sailing operates. Start from Locarno-Muralto, check the current FART route planner and stop list, and select the Ascona stop that actually serves your walk. FART’s line 314 serves Locarno–Ronco sopra Ascona, so do not assume it is the direct service for every Ascona waterfront address; use the operator’s current network map and journey planner for the exact connection. A boat can make a scenic link, but it follows a seasonal timetable and has named piers. Keep the rail station return separate from the town-to-town decision.',
    tradeoff: 'Locarno offers the rail-connected Piazza Grande, old-town lanes and lakefront. Ascona’s lakeside promenade and old core make a slower village-scale visit. A short day can give one town a proper walk and use the other as a meal or evening stop; a two-town day needs transport time both ways. Boat and bus are alternatives with different schedules, not interchangeable at every stop. Avoid planning the walk between the towns as if it were a compact continuous promenade.',
    fallback: 'If the boat is out of season, full or poorly timed, use the current FART connection and keep the walk within the chosen town. If bus service is disrupted, remain in Locarno or check a verified alternative before departing rather than assuming a lake boat is immediately available. In unsettled weather, shorten the exposed lakefront and keep the old-town portions as the core visit.',
    duration: 'Allow two to three hours for one town’s central walk, and most of a day for both towns with a meal and a confirmed transfer. Build the actual bus or boat wait into the schedule; the trip between them is part of the day, not a footnote. Add a longer Centovalli or Maggia excursion only on a different day.',
    combine: 'This is a useful low-elevation pairing for an evening after a single-town visit. If spending only a few hours in the region, choose Locarno for rail convenience or Ascona for its waterfront character and visit one well. Keep the Centovalli railway, Maggia and Verzasca as separate corridors so their regional timetables and return buffers do not compete.',
    verify: 'Check FART’s live route planner, current stop names and disruption notices from Locarno-Muralto for the Ascona address you intend to reach. If travelling by boat, check the date-specific Lake Maggiore sailing, pier and direction with the operator. Use FFS for your final rail departure from Locarno and leave margin to transfer back from Ascona.',
    choices: [
      ['Locarno focus · rail-linked town', 'Start at the station, walk to Piazza Grande and the old centre, then add the lakeside if time remains. This is the simpler choice when a fixed train departure controls the visit.'],
      ['Ascona focus · waterfront town', 'Use a current FART connection or a verified seasonal sailing, then explore the promenade and old core at a slower pace. Check the stop and return before leaving Locarno.'],
      ['Two towns · bus or boat connection', 'Visit one town first and transfer by the service that actually runs on your date. Choose the return before adding a meal or second waterfront walk; do not presume that line 314 serves every central Ascona stop.']
    ],
    stages: [
      ['Set the rail anchor', 'Check the FFS arrival and departure at Locarno-Muralto. Decide whether the day’s main visit is Locarno or Ascona before choosing how far to travel along the lake.'],
      ['Choose the correct Ascona link', 'Use FART’s live planner and route map for the exact destination stop. Line 314 is Locarno–Ronco sopra Ascona, so verify the required connection instead of using its number as a shortcut for all Ascona journeys.'],
      ['Give each town one clear walk', 'In Locarno, use Piazza Grande and the old centre as the core before the lakefront. In Ascona, focus on the promenade and lanes. If the day includes both, shorten each walk so the transfer remains comfortable.'],
      ['Return to the station with margin', 'Recheck the bus or sailing from Ascona and protect time for the Locarno-Muralto connection. Use a saved FFS departure that leaves room for a missed local connection, not the closest theoretical train.']
    ],
    watch: [
      ['Line numbers do not replace stop checks', 'FART line 314 serves Locarno–Ronco sopra Ascona. Confirm the exact current route and stop for central Ascona before setting out.'],
      ['Lake navigation is seasonal', 'Sailings depend on date, pier and direction. Check both the outbound and return trip; do not rely on a boat as an unscheduled backup.'],
      ['The two-town loop has transfer time', 'A visit to both towns needs a deliberate transfer and a return to Locarno’s rail station. Keep one town as the priority if service intervals make the day tight.']
    ],
    faq: [
      ['Can I see Locarno and Ascona in one day?', 'Yes, if you choose the transfer first and keep each town’s walk focused. Use a current FART connection or a dated lake sailing, then protect the return to Locarno-Muralto. A single-town visit is more relaxed.'],
      ['Does FART line 314 go to central Ascona?', 'The operator identifies line 314 as Locarno–Ronco sopra Ascona. Check FART’s current route planner and stop list for the central Ascona destination you need; do not infer it from the route name.'],
      ['Is the boat a dependable year-round connection?', 'No. Lake navigation publishes seasonal routes and dated timetables. Confirm the sailing and return for your travel date, and use a verified bus connection when no suitable boat is scheduled.']
    ],
    sources: [
      ['https://fartiamo.ch/en/line-314/', 'FART — line 314 and current service information'],
      ['https://fartiamo.ch/en/', 'FART — route planner, lines and service notices'],
      ['https://www.navigazionelaghi.it/en/', 'Navigazione Laghi — Lake Maggiore routes and current timetable'],
      ['https://www.sbb.ch/en', 'SBB — current rail connections to Locarno-Muralto'],
      ['https://www.ascona-locarno.com/en', 'Ascona-Locarno Tourism — town and regional visitor information']
    ],
    fieldContext: {
      heading: 'A rail town and a lake town need a verified link.',
      cards: [
        { title: 'Locarno-Muralto as the anchor', copy: 'Keep the FFS station as the start and finish of the day. Piazza Grande and the old centre form a useful walk before you decide whether another town fits.', sources: [3, 4] },
        { title: 'Ascona by the right stop', copy: 'FART publishes current route information, including line 314 from Locarno to Ronco sopra Ascona. Check the specific central Ascona connection and stop rather than assuming the line serves every waterfront address.', sources: [0, 1] },
        { title: 'Boat as an optional transfer', copy: 'Lake navigation can add a scenic town-to-town leg when the date and pier match. Confirm the return sailing; otherwise use a current bus journey and keep the boat for another visit.', sources: [2] }
      ]
    }
  },
  'rhine-falls': {
    isoDate: switzerlandCh16IsoDate,
    reviewDate: switzerlandCh16ReviewDate,
    searchKeywords: ['Rhine Falls', 'Neuhausen Rheinfall station', 'Schloss Laufen', 'north bank', 'south bank', 'Rhyfall Mändli boats'],
    summary: 'Choose a Rhine Falls bank before travelling: the north side gives free basin access and the Neuhausen Rheinfall station lift, while Schloss Laufen on the south side charges for its viewing platforms and has different access limits.',
    access: 'The north bank is reached by rail to Neuhausen Rheinfall, whose barrier-free station has a lift toward the basin. The official falls information lists free access to the north-bank grounds and basin area, while some paths or boat facilities have separate limitations. On the south bank, travel to Schloss Laufen am Rheinfall for the castle and paid viewing platforms; the castle-side lift operates during opening times, but this side does not provide access to the basin or pier. Decide which experience you want before choosing a station. The Rhine Falls themselves can be visited year-round, while paid attractions, lifts and boats have their own hours and seasons.',
    tradeoff: 'The north side is the practical choice for a close basin visit and the main boat landing, with no admission charge for the grounds. The south side frames the falls from Schloss Laufen and its platforms and adds the castle setting, but admission and opening hours apply. Crossing between the banks is a separate transit or boat decision; do not assume that a platform ticket or one-bank walk gives access to the other side. A boat trip is seasonal and uses a designated landing, so select it before building the day around the water.',
    fallback: 'If boats are not operating, keep the visit on land at the bank you selected. If the south-bank castle or lift is closed, use the north-bank basin route only if current transport and mobility access work for you. In poor weather or with limited time, choose one viewpoint and leave the cross-bank loop for another visit; the free north-bank approach makes a complete short outing without a boat.',
    duration: 'Allow two to three hours for one bank and its viewpoints, plus train and station access. Add time for a boat only when the dated sailing is confirmed. Visiting both banks generally needs half a day or more because you must account for the crossing, separate entry arrangements, walks and return connections.',
    combine: 'The north-bank visit pairs well with a short Schaffhausen city walk when the rail connections fit. Schloss Laufen and both banks can fill a half-day, especially with a boat. Combine with Stein am Rhein only after checking current regional rail timing and choosing what to omit; adding both historic towns to a detailed falls visit can make the day transfer-led.',
    verify: 'Check official Rhine Falls access and barrier-free notes for the chosen bank, including lifts and any temporary closure. Check Schloss Laufen platform hours and admission separately from general falls access. For boats, use Rhyfall Mändli’s exact-date season and departure information; for rail, verify Neuhausen Rheinfall or Schloss Laufen am Rheinfall in SBB. Recheck rain, river conditions and current warnings on the day.',
    choices: [
      ['North bank · basin and boat landing', 'Travel to Neuhausen Rheinfall, use the station lift toward the basin, and explore the north-bank viewpoints. Access to the grounds is free; pay separately only for a selected boat or facility.'],
      ['South bank · castle platforms', 'Choose Schloss Laufen for the castle and paid viewing platforms. Confirm opening hours, ticket conditions and lift operation; this side does not give access to the falls basin or boat pier.'],
      ['Both banks · planned crossing', 'Cross only after checking the actual route, service and time required. Use a boat when its season and landing fit, or verify public transport between the areas; keep a single-bank plan as the fallback.']
    ],
    stages: [
      ['Select the bank by the experience', 'Choose the north bank for free grounds and basin access, or the south bank for Schloss Laufen and its paid platforms. Check access needs before buying tickets or travelling.'],
      ['Use the matching arrival station', 'For the north side, verify rail to Neuhausen Rheinfall and the station’s lift toward the basin. For Schloss Laufen, verify the south-bank stop and the castle’s current opening information.'],
      ['Add a boat only on a dated sailing', 'Rhyfall Mändli boats are seasonal, with the short round trip listed daily from early April through the end of October. Confirm the exact year, departure and landing; do not treat the boat as an all-season cross-bank shuttle.'],
      ['Keep one bank as the return plan', 'Before crossing, check the separate route back to the station you need. If a connection, lift or boat is disrupted, stay on the accessible side that still offers a complete visit and protect the onward train.']
    ],
    watch: [
      ['Bank choice changes access', 'The south-bank castle route does not reach the basin or pier. North-bank free access does not include every paid activity. Match the bank to the experience and access need.'],
      ['Facilities have their own hours', 'The falls are accessible year-round, but castle platforms, lifts and boats follow specific operating calendars. Verify each component separately.'],
      ['Water and paths remain conditions-dependent', 'Rain, spray and wet paths affect footing and comfort. Follow current warnings, use suitable footwear and skip a viewpoint that does not fit your mobility or the day’s conditions.']
    ],
    faq: [
      ['Which side is best for a first visit?', 'Choose the north bank for free grounds, a close basin approach and the main boat landing. Choose the south bank for Schloss Laufen and its paid platforms. The two sides provide different visits.'],
      ['Can I visit Rhine Falls without paying?', 'The official access information lists the north-bank grounds and basin area as free. Boats, Schloss Laufen attractions and some facilities have separate charges or hours. Check current access details before travel.'],
      ['Can I take a Rhine Falls boat in winter?', 'The operator’s short-tour season runs from early April to the end of October, subject to the current calendar and conditions. Confirm the date-specific schedule; the land viewpoints remain the fallback.']
    ],
    sources: [
      ['https://rheinfall.ch/en/inform/opening-hours-prices/list', 'Rhine Falls — access, prices, banks and accessibility'],
      ['https://rhyfall-maendli.ch/en/boat-tours-experiences/short-tour/', 'Rhyfall Mändli — short boat tour and season'],
      ['https://www.schlosslaufen.ch/en/', 'Schloss Laufen — south-bank castle, platforms and access'],
      ['https://www.sbb.ch/en', 'SBB — current rail connections to both banks']
    ],
    fieldContext: {
      heading: 'North and south banks offer different visits.',
      cards: [
        { title: 'North · basin access', copy: 'The official access page describes the north-bank grounds and basin as free and notes a lift from Neuhausen Rheinfall station toward the basin. Check the exact barrier-free route and facility limits for your needs.', sources: [0] },
        { title: 'South · Schloss Laufen', copy: 'The castle-side visit uses paid platforms and a lift during opening hours. It does not reach the basin or boat pier, so choose this bank for the castle view rather than expecting the north-bank experience.', sources: [0, 2] },
        { title: 'Boats · seasonal activity', copy: 'Rhyfall Mändli lists its short tour in the operating season from spring through October. Check the exact date and landing before making a boat part of the crossing or return plan.', sources: [1] }
      ]
    }
  },
  'schaffhausen-old-town': {
    isoDate: switzerlandCh16IsoDate,
    reviewDate: switzerlandCh16ReviewDate,
    searchKeywords: ['Schaffhausen old town', 'Munot', 'Vordergasse', 'Schaffhausen station', 'Allerheiligen museum'],
    summary: 'Make Schaffhausen a deliberate town visit: walk from the station into the painted old centre, decide whether the uphill Munot ramparts suit the group, then save the Rhine Falls or Stein am Rhein for a separate transfer block.',
    access: 'Schaffhausen station is the natural start and return point. Walk into the historic centre through the pedestrian streets toward Vordergasse, the market area and the richly decorated house fronts; use the river and town lanes to orient before climbing to the Munot. The fortress stands above the centre, so its ramp and views add a real uphill segment rather than a level extension. Check current SBB connections before choosing an onward trip to Neuhausen Rheinfall or Stein am Rhein. If a museum visit is the rainy-day alternative, verify the Museum zu Allerheiligen opening hours and exhibition on the date; do not assume it will be open every day.',
    tradeoff: 'A compact town plan focuses on the old lanes, squares and façades and works when you want an easy rail-linked stop. Adding the Munot gives the visit a viewpoint and historical structure but requires a climb, time on the hill and a return down. Museum time creates an indoor cultural visit with a separate schedule. The Rhine Falls and Stein am Rhein are distinct destinations reached by regional transport; combining one can work, but trying to include both plus a detailed city walk makes the schedule dependent on several connections.',
    fallback: 'If the hill is unsuitable, keep the visit in the centre and follow the old-town lanes at a slower pace. If weather is poor, use a museum only after checking its current calendar; otherwise shorten the walk and travel onward on a verified train. If the Munot is affected by an event or temporary access change, the lower historic centre remains a complete visit.',
    duration: 'Allow three to four hours for the old centre and Munot, including the uphill walk and descent. A shorter two-hour stop can cover the centre without the ramparts. Add a museum or another destination only when its opening and regional connection leave enough time for a relaxed return.',
    combine: 'Choose either a Schaffhausen town visit plus one Rhine Falls bank, or the town alone with an indoor museum or meal. Stein am Rhein is better as its own short-town block or as a separate transfer after checking rail timing. Avoid trying to cover Munot, both Falls banks and Stein am Rhein in one day; each needs its own walking and connection margin.',
    verify: 'Check SBB for your station arrival and the onward or return train. Check Schaffhauserland or the official Munot information for event access and current visitor notices, and verify Museum zu Allerheiligen opening hours if you plan an indoor visit. Review weather and footing before climbing. For an added Rhine Falls visit, select one bank and confirm its access and station; for Stein am Rhein, verify the actual regional service.',
    choices: [
      ['Old town · lower walking day', 'From the station, make a focused loop through the pedestrian centre and Vordergasse, then finish near the river or return to the station. This is a complete visit when the hill or timing does not suit.'],
      ['Old town and Munot · add the climb', 'Walk the centre first, then climb the signed route to the Munot ramparts if access, weather and group energy fit. Save time for the descent and check event notices before going up.'],
      ['Town plus one nearby destination', 'Add either one Rhine Falls bank or a separately planned Stein am Rhein visit. Check the regional rail sequence before leaving the old town and reduce the city walk if the onward connection is tight.']
    ],
    stages: [
      ['Arrive and orient from the station', 'Use SBB to set a realistic arrival and return. Walk into the historic centre and begin with the market streets and decorated fronts rather than heading straight uphill without seeing the lower town.'],
      ['Trace the centre before the ramparts', 'Follow Vordergasse and the surrounding pedestrian lanes toward the river-side edge of the old town. Decide at the base of the Munot approach whether the uphill route fits the group and remaining time.'],
      ['Choose hill, museum or lower town', 'The Munot adds an exposed climb and viewpoint. Museum zu Allerheiligen is an indoor alternative only when its current hours and exhibition suit the date. The old centre alone remains a meaningful shorter plan.'],
      ['Return to the rail network deliberately', 'Walk down with time to reach the station. If adding the Rhine Falls or Stein am Rhein, follow the checked regional service and save the final train before the visit expands.']
    ],
    watch: [
      ['Munot means an uphill approach', 'The ramparts sit above the old centre. Weather, mobility and event access can change whether the climb is a good choice; the lower town still works on its own.'],
      ['Museum hours are date-specific', 'Confirm Museum zu Allerheiligen’s calendar and current exhibition before relying on it for a rainy day. A closed museum is not a guaranteed fallback.'],
      ['Nearby does not mean same block', 'Rhine Falls and Stein am Rhein are separate stops with their own rail and walking time. Select one extension and keep a useful return margin.']
    ],
    faq: [
      ['How long do I need for Schaffhausen old town?', 'Allow three to four hours for the centre and Munot, including the climb. A two-hour visit can focus on the lower old town and its decorated façades.'],
      ['Is Munot an easy walk from the station?', 'It is above the centre and requires an uphill approach. Walk through the old town first, then decide based on weather, footing and mobility. Check official notices for events or temporary access changes.'],
      ['Can I combine Schaffhausen, Rhine Falls and Stein am Rhein?', 'It can become a rushed transfer day. If adding an excursion, choose one: a selected Falls bank or Stein am Rhein. Check the regional timetable and reduce the old-town plan so the return remains comfortable.']
    ],
    sources: [
      ['https://en.schaffhauserland.ch/map/poi/munot-33334310-d1a3-4b30-bb1c-9eb9acbe3c1b.html', 'Schaffhauserland — Munot fortress and visitor context'],
      ['https://www.allerheiligen.ch/en/', 'Museum zu Allerheiligen — current visitor and exhibition information'],
      ['https://www.sbb.ch/en', 'SBB — current rail connections to Schaffhausen and nearby stops'],
      ['https://www.myswitzerland.com/en-us/experiences/munot-fortress/', 'Switzerland Tourism — Munot history and visit information']
    ],
    fieldContext: {
      heading: 'Walk the lower town before deciding on the hill.',
      cards: [
        { title: 'Vordergasse and the centre', copy: 'Begin with the pedestrian old-town streets and decorated façades. This is a satisfying short visit in its own right and makes the Munot climb an informed second decision.', sources: [0] },
        { title: 'Munot · uphill viewpoint', copy: 'The fortress rises above the old town. Check visitor notices and event access, then leave enough time for both the climb and walk back down to the station.', sources: [0, 3] },
        { title: 'Museum · indoor option', copy: 'Museum zu Allerheiligen can add an indoor cultural block, but hours and exhibitions vary. Check the museum’s current visitor information before using it as the weather plan.', sources: [1] }
      ]
    }
  }
};
