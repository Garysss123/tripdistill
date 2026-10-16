import { canadaGuide, defineCanadaCluster } from './canada-guide-builder.mjs';
import { pacificRimCluster } from './canada-pacific-rim-guide.mjs';

const g = (definition) => canadaGuide(definition);

export const canadaWestClusters = [
  defineCanadaCluster({
    slug: 'vancouver-north-shore', name: 'Vancouver & the North Shore', region: 'British Columbia', band: 'pacific', family: 'pacific-grid',
    label: 'Pacific inlet field guide · city, forest and alpine road', tagline: 'Choose one shoreline, one mountain edge and one road day at a time.',
    reviewDate: '7 October 2026', isoDate: '2026-10-07',
    hubIntro: 'This is three different trips sharing one hotel base: downtown Vancouver is a compact harbour-and-neighbourhood walk; the North Shore is a bus-and-trail day across Burrard Inlet; Whistler is a separate Highway 99 corridor. Keep those clocks apart and the skyline, industrial waterfront, rainforest and Coast Mountains each get real time.',
    stay: 'Four nights can support three full days if the Whistler leg is a direct coach day. Five or six nights add a weather buffer or an overnight in Whistler, which is the better fit if mountain lifts, skiing or longer trails matter.',
    transfer: 'Waterfront Station to Lonsdale Quay is a 12-minute SeaBus crossing on TransLink’s current schedule; it is the North Shore anchor, not the final trailhead. From there choose the bus, park or attraction transfer for the place you actually booked. Whistler needs its own coach reservation or car on Highway 99.',
    season: 'Expect rain as a year-round possibility. Summer brings long walking days but busier parks, ferries and village accommodation; autumn rain, winter darkness and mountain snow change trail surfaces and lift operations. As checked on 7 October 2026, Whistler Blackcomb’s high-alpine hiking trails were closed for the season and scheduled to reopen in summer 2027. The City of Vancouver also posts winter maintenance closures on part of the Stanley Park seawall; check both calendars before setting a route.',
    fallback: 'When cloud hides the summit, keep the waterfront or a forest-level walk as the main event. When rain or trail conditions make North Shore footing poor, shift to Granville Island’s market and arts spaces or a short downtown history walk; move Whistler instead of forcing Highway 99.',
    firstVisitPlan: {
      heading: 'Three days with three different clocks',
      intro: 'Use this as three full-day choices, not a single chain of transfers. The Whistler day is the one to move if a road or mountain closure would make the return uncertain.',
      days: [
        ['Harbour, park and market', 'Walk Canada Place and Coal Harbour, then choose a Stanley Park seawall section or the full 9 km loop (City estimate: 2–3 hours on foot). At Brockton Point, read the attributions beside the First Nations poles. Finish at Granville Island: its 1970s transformation from industrial land is still legible in the working-waterfront setting, Public Market, studios and Net Loft.'],
        ['Choose one North Shore landscape', 'Cross on the SeaBus and make one anchor choice: Grouse for an operated summit and views; Capilano for its 1889 bridge, treetop walk and Cliffwalk; or Lynn Canyon for a municipal forest park, 50 m bridge and Ecology Centre. The settings and access rules differ, so do not plan all three as quick photo stops.'],
        ['Whistler and the Sea-to-Sky road', 'Reserve a coach or drive the Highway 99 corridor. Tourism Whistler describes the Vancouver drive as about two hours before stops or traffic. Give the pedestrian village and one mountain activity the day; Squamish, Shannon Falls and Britannia Beach are separate stop choices, not automatic additions to a Whistler day trip. If alpine lifts are between seasons, the Whistler Museum is a village-based history option; Train Wreck is a separate 5 km, 1–3 hour trail near Cheakamus Crossing, not a walk from the village.']
      ]
    },
    faq: [
      ['Can Vancouver, the North Shore and Whistler fit into three days?', 'Yes, as three separate full days with an early Whistler departure, but keep the route flexible: the return drive is also about two hours in ordinary conditions and road delays are not included. A fourth day gives the North Shore or Whistler a better weather margin.'],
      ['Should I visit Capilano and Lynn Canyon on the same day?', 'Choose one as the main canyon experience. Capilano is a managed attraction with a ticketed bridge park and a downtown shuttle; Lynn Canyon is a municipal park with a different trail network and Ecology Centre. Add Lower Lonsdale after either one, then take the SeaBus back.'],
      ['Is Granville Island a historic district?', 'It is a mixed public and working waterfront, not a preserved old town. CMHC describes its 1970s change from industrial land into a public cultural destination; look at the Public Market, arts districts and active marine edges as different parts of that reuse.'],
      ['What can make the Stanley Park route shorter?', 'The City’s 9 km seawall loop takes about 2–3 hours to walk, and winter rock-slope maintenance temporarily closes the Prospect Point–Third Beach section. Pick a landmark-to-landmark section and check the City map and notices before setting a ferry or dinner time.']
    ],
    sources: [
      ['https://vancouver.ca/parks-recreation-culture/stanley-park.aspx', 'City of Vancouver · Stanley Park landmarks, map and access'],
      ['https://vancouver.ca/parks-recreation-culture/seawall.aspx', 'City of Vancouver · seawall distance, history and seasonal maintenance'],
      ['https://admin.granvilleisland.com/about-granville-island/mission-vision/', 'Granville Island / CMHC · public market and industrial-to-public-place history'],
      ['https://www.translink.ca/schedules-and-maps/seabus', 'TransLink · SeaBus crossing, schedule and service notices'],
      ['https://www.translink.ca/trip-planner', 'TransLink · current bus connections and trip planning'],
      ['https://lynncanyon.ca/', 'District of North Vancouver · Lynn Canyon Park, bridge and Ecology Centre'],
      ['https://www.capbridge.com/our-story/', 'Capilano Suspension Bridge Park · bridge history since 1889'],
      ['https://www.capilanobridge.com/getting-here.html', 'Capilano Suspension Bridge Park · shuttle, transit and arrival information'],
      ['https://www.grousemountain.com/current_conditions', 'Grouse Mountain · current weather, visibility and operating conditions'],
      ['https://www.whistler.com/getting-here/', 'Tourism Whistler · Vancouver transfer options and route estimate'],
      ['https://www.britanniaminemuseum.ca/', 'Britannia Mine Museum · underground tour, mill experience and Britannia Beach history'],
      ['https://bcparks.ca/shannon-falls-park/', 'BC Parks · Shannon Falls route, trail and winter safety'],
      ['https://www.seatoskygondola.com/', 'Sea to Sky Gondola · summit, trails and current operations'],
      ['https://www.whistler.com/arts/museum/', 'Tourism Whistler · Whistler Museum, town and ski history'],
      ['https://www.whistler.com/blog/post/whistler-train-wreck-hike/', 'Tourism Whistler · 1956 Train Wreck, trail access and distance'],
      ['https://www.whistler.com/hours-of-operation/', 'Tourism Whistler · seasonal Whistler Blackcomb lift and trail status'],
      ['https://www.whistler.com/activities/hiking/', 'Tourism Whistler · alpine and valley hiking, seasonal access'],
      ['https://www.drivebc.ca/', 'DriveBC · Highway 99 conditions, incidents and closures']
    ],
    guides: [
      g({
        slug: 'downtown-stanley-granville', name: 'Downtown, Stanley Park & Granville Island',
        cardLabel: 'Harbour + seawall + market', instrument: 'inlet walking grid', layout: 'city-grid',
        imageQuery: 'Vancouver Stanley Park seawall skyline', imageAlt: 'Vancouver skyline and Stanley Park waterfront',
        summary: 'Link Canada Place and Coal Harbour to one measured Stanley Park walk, then cross False Creek to a former industrial island that now combines its Public Market, artist studios and working waterfront.',
        planHeading: 'Make the park loop earn its place',
        routeHeading: 'Coal Harbour to Brockton Point, then choose your seawall length',
        fallbackHeading: 'Use the waterfront in shorter, more sheltered pieces',
        verifyHeading: 'Choose the park entrance and ferry pier before leaving',
        access: 'From downtown, walk the harbour edge into Stanley Park. The City measures the seawall around the park at 9 km and 2–3 hours on foot; Granville Island is across False Creek, reached by a TransLink bus, a small passenger ferry or a longer walk. Pick the ferry pier or bus stop from your hotel side before heading south.',
        tradeoff: 'This route joins the city’s harbour edge, a major urban rainforest and a repurposed industrial waterfront. The park’s loop is the long block; the market and Net Loft are a slower second neighborhood, not a quick transit interchange.',
        fallback: 'Rain or wind: make Brockton Point and one sheltered park interior the outdoor section, then spend the longer block in the Public Market or an open gallery. Do not book a fixed-time ferry as your only way back; check current ferry and bus service.',
        duration: 'Plan roughly 6–8 hours including meals and transfers. The City’s 9 km seawall loop is 2–3 hours on foot by itself; a shorter Coal Harbour–Brockton Point out-and-back leaves room for the market and a relaxed lunch.',
        combine: 'Keep the North Shore and Whistler for separate days. This day already has two distinct walking districts and a cross-creek transfer; add a museum only if it replaces part of the loop.',
        verify: 'Use the City park map and seawall notices for closures, especially winter rock-slope work between Prospect Point and Third Beach. Check the Public Market hours, TransLink connection and the selected False Creek ferry operator on your date.',
        stages: [
          ['Start at the water', 'Begin at Canada Place or the Olympic Cauldron in Coal Harbour. The convention-centre harbour edge gives you the cruise terminal, seaplanes and mountain horizon in one view; continue west toward the park rather than walking back through downtown.'],
          ['Choose Stanley Park depth', 'At Brockton Point, read the names and explanations beside the First Nations totem poles before following the seawall. Construction began in 1917 and the loop was completed in 1980; a plaque to master mason James Cunningham is above the path at Siwash Rock. The City’s loop is 9 km, so choose a partial section if the aquarium, beaches or a long meal are also on your list.'],
          ['Cross to a working waterfront', 'Choose a bus or passenger ferry across False Creek to Granville Island. The Public Market and Net Loft reward a slow indoor/outdoor browse; the island’s 1970s industrial-to-public transformation is also visible in its studios, cultural venues and active marine edge.'],
          ['Return from the correct pier', 'Check which ferry landing or bus stop is closest to your next neighborhood, then finish around Yaletown, Olympic Village or your hotel. The False Creek boats are separate operators from TransLink, so do not assume a transit timetable or fare covers them.']
        ],
        watch: [
          ['Winter seawall work', 'City maintenance can close the Prospect Point–Third Beach segment for about three weeks in winter. Follow the posted detour instead of assuming the waterfront remains a continuous loop.'],
          ['Two path lanes', 'The seawall separates people walking from wheeled traffic. Keep to the signed walking side and allow extra room on sunny weekends, which the City flags as busy periods.'],
          ['Trying to see the whole park', 'A full loop already uses 2–3 walking hours. Add only one major interior attraction before Granville Island, or shorten the park segment instead of rushing the market and last connection.']
        ],
        faq: [
          ['How long is the Stanley Park seawall walk?', 'The City lists the loop around the park as 9 km and estimates 2–3 hours on foot, before photo stops, beaches, food or an interior attraction. Its wider Seaside Greenway is 28 km, so check which route you are following.'],
          ['What is Granville Island beyond the Public Market?', 'The Public Market is one anchor within a mixed waterfront of studios, the Net Loft, cultural venues, eateries and marine uses. CMHC dates its change from industrial land to a public destination to the 1970s.'],
          ['Should I walk or cycle the seawall?', 'The City marks separate paths: the pedestrian lane is nearest the water and the inner lane is for cycling and inline skating. Pick one mode and keep to its signs, especially on busy sunny days.']
        ]
      }),
      g({
        slug: 'north-shore-grouse-capilano', name: 'North Shore: Grouse, Lynn & Capilano',
        cardLabel: 'SeaBus + one mountain choice', instrument: 'three-way terrain selector', layout: 'mountain-transect',
        imageQuery: 'Vancouver North Shore mountains Grouse Capilano', imageAlt: 'Forested North Shore mountains above Vancouver',
        summary: 'Use the 12-minute SeaBus crossing as an orientation, then choose Grouse’s operated summit, Capilano’s historic bridge park or Lynn Canyon’s municipal forest trails as the one main North Shore visit.',
        planHeading: 'Pick a landscape before you cross the inlet',
        routeHeading: 'Waterfront Station to one North Shore anchor and back',
        fallbackHeading: 'Trade elevation for a forest-level visit',
        verifyHeading: 'Confirm the trailhead, shuttle and last crossing',
        access: 'TransLink’s SeaBus links Waterfront Station and Lonsdale Quay in 12 minutes on its current schedule. From there, check the bus for your chosen trailhead. Capilano also runs a downtown shuttle; its return requires proof of park admission, so confirm pickup and return terms before relying on it.',
        tradeoff: 'Grouse is an operated summit with lift-dependent experiences; Capilano is a managed attraction built around its bridge, Treetops Adventure and Cliffwalk; Lynn Canyon is a District park with a 50 m bridge, trails and Ecology Centre. Similar map proximity hides different terrain and entry rules.',
        fallback: 'If clouds hide Grouse’s views, choose Lynn Canyon only when trail conditions are good; wet roots, snow and ice still matter under trees. If the ground is slippery or a bridge is not a comfortable fit, make Lower Lonsdale’s Shipyards and waterfront the main walk instead.',
        duration: 'Allow about 4–6 hours for one primary attraction or park plus the SeaBus and bus connections; add time for a long trail or the Capilano shuttle. These are planning estimates, not operator visit times.',
        combine: 'Pair one North Shore anchor with Lower Lonsdale, which sits beside Lonsdale Quay. Do not try to collect all three parks and summit attractions in one day; keep Stanley Park and Whistler on separate days.',
        verify: 'Check the SeaBus timetable and alerts, then the selected operator’s current access, seasonal lift schedule or park trail notices. Lynn Canyon’s site lists seasonal pay-parking hours; check current rules if driving.',
        stages: [
          ['Cross at Waterfront', 'Take the SeaBus to Lonsdale Quay. The crossing takes 12 minutes on TransLink’s posted schedule and makes the harbour itself part of the trip; check the live timetable before setting an evening return.'],
          ['Make one landscape choice', 'For an operated high viewpoint, check Grouse weather and lift status. For a managed attraction with suspension bridge, treetop walk and Cliffwalk, reserve time at Capilano and use its shuttle or mapped bus route. For a self-directed forest walk, take the bus toward Lynn Valley and choose a signed trail around the bridge and Ecology Centre.'],
          ['Reset in Lower Lonsdale', 'Return to the Shipyards or the quay for food and a flat waterfront walk. This is a distinct North Vancouver neighborhood from the uphill canyon parks, and an easier option if weather changes after your main visit.'],
          ['Keep the crossing explicit', 'Check the last useful SeaBus for your plan and whether your return requires a separate bus or park shuttle. TransLink’s service varies by day and time; do not use a generic every-15-minutes assumption for late evenings.']
        ],
        watch: [
          ['Grouse visibility or lift status', 'A summit ticket does not guarantee a view or an open lift. Check the current mountain report before travelling across the inlet.'],
          ['Lynn Canyon footing', 'The bridge and trails lead through steep-sided forest terrain. Rain, packed snow and ice can make stairs, roots and viewpoints more demanding than the city streets.'],
          ['Capilano shuttle terms', 'The park’s downtown shuttle leaves from Canada Place, and proof of admission is required for its return service. Confirm departure location, day-specific schedule and the shuttle’s terms.']
        ],
        faq: [
          ['Is Lynn Canyon the same attraction as Capilano?', 'No. Lynn Canyon is a District of North Vancouver park; its bridge opened in 1912, is 50 m above the canyon and connects to park trails and the Ecology Centre. Capilano is a separate managed attraction whose original hemp-rope and cedar-plank bridge dates to 1889.'],
          ['Does the SeaBus take me to Grouse Mountain?', 'No. It crosses from Waterfront Station to Lonsdale Quay in 12 minutes. You still need a bus or another verified transfer to the mountain; use TransLink’s current trip planner for the date and time.'],
          ['When is Lynn Canyon a poor choice?', 'Choose another day if the District posts a closure or if wet roots, snow or ice exceed your comfort on canyon trails and stairs. Check the park’s current notices and parking rules; a cloudier forecast alone matters less for a forest-level visit than it does for a summit.']
        ]
      }),
      g({
        slug: 'sea-to-sky-whistler', name: 'Sea-to-Sky & Whistler',
        cardLabel: 'Highway 99 + mountain base', instrument: 'corridor day planner', layout: 'roadbook',
        imageQuery: 'Whistler Sea to Sky British Columbia mountains',
        imageAlt: 'Misty granite slope, conifers and utility lines along the Sea-to-Sky drive',
        summary: 'The Sea-to-Sky is a corridor, not a short scenic detour: choose a coach or car, decide whether Squamish replaces part of the Whistler visit, and protect the return to Vancouver.',
        planHeading: 'Choose the road day before the mountain activity',
        routeHeading: 'Reserve the transfer, then protect your Whistler block',
        fallbackHeading: 'Let the road and mountain report decide the turnaround',
        verifyHeading: 'Check Highway 99 and the exact activity schedule',
        access: 'Tourism Whistler describes the Vancouver drive as about two hours in ordinary conditions. A scheduled coach avoids mountain driving but locks in pickup and return times; a car allows one planned Squamish stop but makes you responsible for Highway 99, parking and winter equipment rules.',
        tradeoff: 'The pedestrian village gives you a compact resort-town walk; mountain lifts, alpine trails and ski areas are separate products with their own seasonal schedules. A direct day trip is for one main Whistler experience, while an overnight gives the weather and activity schedule more room.',
        fallback: 'If DriveBC reports a closure or the mountain activity is not operating, do not turn the coach day into a rushed roadside checklist. Move the trip, or make Squamish the endpoint only if your transport can return from there.',
        duration: 'For a Vancouver day trip, reserve a full day: Tourism Whistler’s roughly two-hour drive estimate is one way and excludes traffic, stops and weather. An overnight is more realistic if skiing, a lift-accessed alpine walk or several activities are the point.',
        combine: 'Do not combine Whistler with Victoria, Tofino or a North Shore attraction in one day. If driving, pick either a focused Whistler visit or one Squamish-area stop such as Shannon Falls, the Sea to Sky Gondola or Britannia Mine Museum; check each site’s access and opening separately.',
        verify: 'Check DriveBC’s Highway 99 incidents and closures, coach pickup and return conditions, and Whistler Mountain’s exact lift or trail status. For winter driving, follow current provincial tire and chain requirements rather than relying on the summer route estimate.',
        stages: [
          ['Choose transport and turnaround', 'Book a direct coach or a car before selecting stops. Save the Vancouver departure point, Whistler drop-off, return departure and the road-condition source; the return is a separate leg, not an afterthought.'],
          ['Read the corridor', 'Highway 99 follows the Sea-to-Sky route through Howe Sound and Squamish. Shannon Falls is a short waterfall-viewing stop; the Sea to Sky Gondola adds an upland visit; Britannia Mine Museum interprets the mining community through an underground tour and mill experience. Any one of them changes the time available in Whistler, so select only what your vehicle or tour schedule supports.'],
          ['Keep Whistler to one base', 'Walk the pedestrian village and Olympic Plaza, then choose one activity with a confirmed seasonal opening: a mountain lift, an alpine trail, a lake walk or winter skiing. Between alpine seasons, the Whistler Museum at 4333 Main Street covers town and ski history, including an original gondola cabin. The Train Wreck Trail reaches boxcars from a 1956 derailment; it is about 5 km round trip and 1–3 hours, with a separate trailhead transfer near Cheakamus Crossing. Stay on the signed trail and out of the railway corridor.'],
          ['Return with margin', 'Be back at the coach pickup before its stated check-in time or leave a car buffer for traffic and changing road conditions. If the last return is fixed, skip an extra stop rather than spending that margin on a second photo pullout.']
        ],
        watch: [
          ['Highway 99 conditions', 'Crashes, construction, weather and seasonal tire requirements can change the road day. Check DriveBC close to departure and again before the northbound return.'],
          ['Activity season mismatch', 'Alpine lifts, hiking trails and winter ski operations do not share one calendar. Verify the exact product and final return time for the date you have booked.'],
          ['Too many stops', 'Vancouver–Squamish–Whistler–Vancouver already includes several hours on the road. A gondola, waterfall and mine museum each need a visit block; pick one corridor stop or keep the full day in Whistler.']
        ],
        faq: [
          ['How long does Vancouver to Whistler take?', 'Tourism Whistler describes the drive along the Sea-to-Sky Highway as about two hours. Treat that as an ordinary-condition estimate, not a guaranteed coach arrival or a round-trip total; traffic, weather and stops add time.'],
          ['Can I visit Whistler and Squamish in the same day?', 'You can drive past Squamish and make one short stop, but Shannon Falls, the Sea to Sky Gondola and Britannia Mine Museum are different visit blocks. The mine museum’s underground tour and mill experience interpret the Britannia Beach community; a direct coach day trip is better spent in Whistler.'],
          ['What if the mountain lift is closed?', 'The pedestrian village and Whistler Museum can still work for a village day. The Train Wreck Trail is a separate lower-elevation option near Cheakamus Crossing, but allow 1–3 hours for its 5 km round trip plus trailhead transport. Neither replaces a lift-accessed alpine outing; check live status before booking if that is the reason for going.']
        ]
      })
    ]
  }),
  defineCanadaCluster({
    slug: 'victoria-south-island', name: 'Victoria & South Vancouver Island', region: 'British Columbia', band: 'pacific', family: 'island-ledger',
    label: 'Victoria city walk · Butchart garden · west-coast day', tagline: 'Keep the city walk, garden visit and west-coast drive on separate days.',
    reviewDate: '8 October 2026', isoDate: '2026-10-08',
    hubIntro: 'Victoria’s walkable civic core, the Butchart Gardens in Brentwood Bay, and the Sooke–Juan de Fuca coast are separate outings. A mainland ferry lands at Swartz Bay, north of downtown; the west-coast road runs the other way. Choose a city day first, then add one branch at a time.',
    stay: 'Three nights gives you a harbour day and one outlying branch. Four nights makes room for both Butchart and a west-coast day without turning the ferry arrival or departure into sightseeing time.',
    transfer: 'For the Tsawwassen–Swartz Bay ferry, BC Transit routes 70/70X connect the terminal with downtown. Butchart is 22 km from downtown; its visitor page lists route 75 at about 50–60 minutes and warns that not every afternoon trip enters the garden. Sooke Potholes is about a 45-minute drive from Victoria; bus 61 leaves a several-kilometre walk from the park.',
    season: 'Garden displays and evening programs change through the year. Botanical Beach is a tide-timed visit: BC Parks says tide pools are best at 1.2 m or lower. Coastal storms can close Juan de Fuca trail sections, so check the park advisory and Port Renfrew tide table on the day you go.',
    fallback: 'Keep the harbour and museum day near your base for a wet or short-day forecast. On the coast, choose the short China Beach path or the Botanical Loop instead of committing to the 47 km wilderness trail; closures and tide windows can change the plan.',
    firstVisitPlan: {
      heading: 'A city day, then choose one island branch',
      intro: 'Use the three days as separate choices. The harbour is walkable; the garden and coast each need their own transport plan.',
      days: [
        ['Inner Harbour to Beacon Hill', 'Walk the civic harbour, Parliament precinct and James Bay to Beacon Hill Park. The Legislature sits on Lekwungen-speaking peoples’ traditional territories; if you want the free interior tour, the Assembly lists weekday hours and a security check, with weekend and holiday closures. Leave time for one museum rather than squeezing it into every stop.'],
        ['Butchart and the Saanich Peninsula', 'Take the current route 75 trip from downtown only after checking that its destination is the garden; the garden’s visitor page estimates 50–60 minutes and notes that not every afternoon trip enters. At the gardens, follow the former quarry into the Sunken Garden, then compare the Japanese, Italian and Rose gardens added as the site grew.'],
        ['Pick a west-coast objective', 'Sooke Potholes are inland river pools carved by glacial meltwater; China Beach is a 1 km forest walk to the shore; Botanical Beach near Port Renfrew is best at a low tide of 1.2 m or less. Pick one as the day’s anchor. A full Juan de Fuca Marine Trail hike is a separate, remote 47 km undertaking.']
      ]
    },
    faq: [
      ['How many nights should I plan in Victoria?', 'Three nights support the harbour and one branch day. Choose four nights if you want both Butchart and the Sooke–Juan de Fuca coast; protect ferry transfer time at either end.'],
      ['Can I reach the main sights without a car?', 'The Inner Harbour, James Bay and Beacon Hill fit a walking day. Butchart can be reached by route 75, but check the exact trip because some afternoon buses do not enter the garden. The CRD says route 61 to Sooke Potholes still leaves several kilometres on foot.'],
      ['Which coast stop suits a short visit?', 'China Beach has a 1 km forest path to the beach; the Botanical Loop connects Botanical Beach and Botany Bay, and the tide pools need a low tide of 1.2 m or less. The 47 km Juan de Fuca Marine Trail is a wilderness hike, not a quick extension.']
    ],
    sources: [
      ['https://www.leg.bc.ca/visit', 'Legislative Assembly of British Columbia · Parliament visitor information and territorial acknowledgement'],
      ['https://rbcm.ca/', 'Royal BC Museum · current hours, exhibitions and visitor planning'],
      ['https://butchartgardens.com/', 'The Butchart Gardens · 55-acre site, seasonal displays and current visitor hours'],
      ['https://butchartgardens.com/our-story/', 'The Butchart Gardens · former quarry and garden history'],
      ['https://butchartgardens.com/how-to-get-here/', 'The Butchart Gardens · route 75, travel time and seasonal access'],
      ['https://www.bctransit.com/victoria/schedules-and-maps/', 'BC Transit · Victoria route list and current schedules'],
      ['https://www.bcferries.com/routes-fares/schedules', 'BC Ferries · current sailing schedules and service notices'],
      ['https://www.crd.ca/parks-recreation/find-park-or-trail/lochside-regional-trail', 'Capital Regional District · Lochside rail-trail route and bus connections'],
      ['https://www.crd.ca/parks-recreation/find-park-or-trail/sooke-potholes-regional-park', 'Capital Regional District · Sooke Potholes geology, access and transit'],
      ['https://bcparks.ca/juan-de-fuca-park/', 'BC Parks · China Beach, Botanical Beach, Juan de Fuca trail and advisories'],
      ['https://www.tides.gc.ca/en/stations/8525', 'Fisheries and Oceans Canada · Port Renfrew tide table']
    ],
    guides: [
      g({
        slug: 'inner-harbour-james-bay', name: 'Inner Harbour, James Bay & Beacon Hill',
        instrument: 'Parliament, James Bay and Beacon Hill', layout: 'harbour-ledger',
        cardLabel: 'Harbour walk', displayInstrument: 'Parliament, James Bay and Beacon Hill',
        heroIntro: 'Start at Parliament and the Inner Harbour, then walk through James Bay to Beacon Hill and the Dallas Road shore. Keep the Royal BC Museum as one deliberate indoor stop.',
        orientationHeading: 'Plan around the museum and walking route', routeHeading: 'Walk from Parliament to Beacon Hill',
        fallbackHeading: 'Use the museum as your wet-weather stop', routeStageLabels: ['Arrive', 'Walk', 'Explore', 'Return'],
        imageQuery: 'Victoria British Columbia Inner Harbour Parliament', imageAlt: 'Victoria Inner Harbour, Parliament Buildings and boats at dusk',
        summary: 'Join the Inner Harbour promenade and Parliament precinct to James Bay and Beacon Hill Park on foot. The civic waterfront, residential streets and open parkland are distinct parts of the city; keep the museum as one deliberate indoor stop.',
        access: 'A downtown base makes this a walking day. The mainland BC Ferries route reaches Swartz Bay, not the Inner Harbour; routes 70/70X connect the terminal and downtown. Coho, Clipper and seaplane arrivals use different downtown terminals, so check your actual arrival point.',
        tradeoff: 'This walk connects Victoria’s working harbour and Legislature with James Bay, Beacon Hill and the Dallas Road shore. It stays in the city; Butchart and the wild coast require separate trips.',
        fallback: 'In steady rain, keep the Parliament visit and Royal BC Museum as the longer indoor blocks, then walk only the clearest stretch of Beacon Hill or the harbour. The museum recommends allowing 2–4 hours for its galleries and exhibitions; confirm current hours and exhibits.',
        decisionFallback: 'For a wet day, make Parliament or the museum your main stop; keep the park walk optional.',
        duration: 'Allow a full day for the Legislature, a relaxed James Bay–Beacon Hill walk, meals and one museum. The Assembly lists free guided and self-guided visits on weekdays, 8:30–4:30, with a 10–15 minute security buffer; it closes weekends and holidays. The museum recommends 2–4 hours.',
        combine: 'Start at Parliament and the Inner Harbour, continue through James Bay to Beacon Hill, then return along the waterfront. Add Chinatown and Fan Tan Alley at the beginning or end if you want another compact district; do not add Butchart to this walking day.',
        verify: 'Check the Legislature’s visitor notice and tour schedule, including holiday closures and security screening, then check Royal BC Museum hours and current exhibitions. BC Transit route 2 serves James Bay if you prefer to shorten the walk.',
        stages: [
          ['Parliament and the harbour', 'Begin at the Legislature grounds and the Inner Harbour. The Assembly is the province’s working legislature; its visitor information identifies the traditional territories of Lekwungen-speaking peoples, now known as the Songhees and Esquimalt Nations. Enter on a weekday if the interior tour matters.'],
          ['James Bay on foot', 'Walk south from the civic precinct through James Bay instead of doubling back through downtown. Fisherman’s Wharf and the residential streets give the walk a different scale from the hotel-and-terminal edge of the harbour.'],
          ['Beacon Hill and the Strait', 'Continue into Beacon Hill Park and toward the Dallas Road waterfront. Choose a park loop and the shoreline according to weather and energy; this is the open-space section, not a short cut-through on the way to another district.'],
          ['Return by the harbour', 'Walk back toward the Inner Harbour for dinner, or use route 2 from James Bay if you want to shorten the return. Put Chinatown and Fan Tan Alley on the harbour end of the day, not between every park stop.']
        ],
        watch: [
          ['Weekday-only building access', 'The Assembly lists public hours Monday to Friday and closes on weekends and holidays. Arrive early enough for screening and verify the current tour notice.'],
          ['Allow time for the museum', 'The Royal BC Museum recommends 2–4 hours for its galleries and exhibitions. Pick it as the indoor anchor instead of treating it as a quick pass-through.'],
          ['BC Ferries lands north of town', 'Swartz Bay is north of town. A downtown harbour arrival is a different terminal; check the operator and last-mile transfer before fixing a dinner or tour time.']
        ],
        faq: [
          ['What is the difference between the Inner Harbour and James Bay?', 'The Inner Harbour is Victoria’s civic and marine edge around the Legislature and visitor terminals. South of it, James Bay is a residential neighborhood that leads into Beacon Hill Park and the Dallas Road shoreline.'],
          ['Can I tour Parliament on a weekend?', 'The Assembly currently lists visitor hours Monday to Friday, 8:30–4:30, and says the buildings close on weekends and holidays. Check the current visitor notice before planning around an interior visit.'],
          ['How long should I allow for the Royal BC Museum?', 'The museum recommends 2–4 hours for the main galleries and exhibitions. Add that as the day’s principal indoor visit and check which exhibitions are open on your date.']
        ]
      }),
      g({
        slug: 'butchart-saanich', name: 'Butchart Gardens & Saanich Peninsula',
        instrument: 'Quarry history and garden rooms', layout: 'season-wheel',
        cardLabel: 'Garden day', displayInstrument: 'Sunken Garden, Japanese Garden, Italian Garden and Rose Garden',
        heroIntro: 'The Sunken Garden follows the shape of the former quarry; compare it with the later Japanese, Italian and Rose gardens without racing every path.',
        orientationHeading: 'Plan around opening hours and the return', routeHeading: 'From the old quarry through the garden rooms',
        fallbackHeading: 'Shorten the garden visit in heavy rain', routeStageLabels: ['Travel', 'Explore', 'Compare', 'Return'],
        imageQuery: 'Butchart Gardens Victoria British Columbia', imageAlt: 'Formal garden beds and mature trees at Butchart Gardens',
        summary: 'Follow the transformation of a limestone quarry into a 55-acre garden: the Sunken Garden occupies the former quarry, while the Japanese, Italian and Rose gardens show how the estate expanded. The gardens are in Brentwood Bay, outside Victoria.',
        access: 'The Butchart Gardens visitor page places the site 22 km from downtown. It lists downtown route 75 at about 50–60 minutes, but says not every afternoon trip enters the gardens. By car it estimates 35–45 minutes depending on traffic. Check the current trip, destination sign and return schedule before leaving.',
        tradeoff: 'Give the estate a day of its own. The Sunken Garden follows the old quarry, while the later rooms show how the gardens expanded; blooms, daylight, events and hours vary by date.',
        fallback: 'Light rain still leaves the garden paths and planting beds as the main event if you are comfortable outdoors. In heavy rain, use the posted calendar and map to make a shorter focused visit, or keep the day in Victoria rather than adding a second peninsula transfer.',
        decisionFallback: 'If heavy rain is forecast, shorten the garden visit or keep it as a separate optional day.',
        duration: 'Give the garden most of a day once the return journey, a meal and time across several garden rooms are included. The official visitor page estimates 50–60 minutes from downtown by route 75; use the operator’s current calendar for opening and evening hours.',
        combine: 'If you have a car and are already on the north side of the peninsula, add Sidney waterfront after the garden only when its daylight and return connection work. Do not combine this with Sooke or a same-day mainland ferry without a large schedule margin.',
        verify: 'Before choosing the departure, check Butchart’s current hours, event calendar and garden map, then run the exact BC Transit route 75 trip or confirm the driving and parking plan. The garden notes that some afternoon route 75 trips do not enter the grounds.',
        stages: [
          ['Travel north to Brentwood Bay', 'From downtown, check the route 75 trip’s destination before boarding: the garden lists a 50–60 minute ride and notes that not every afternoon trip enters. The 22 km site is a suburban excursion, not an Inner Harbour walk.'],
          ['Start in the Sunken Garden', 'The former cement quarry became Jennie Butchart’s first major garden project. From the overlooks and paths, notice how the planted walls and changing levels keep the industrial excavation visible beneath the display.'],
          ['Explore the later garden rooms', 'Use the map to compare the Japanese Garden by the water, the Italian Garden on the former tennis court, and the Rose Garden. They were added during the site’s expansion from 1906 to 1929; choose the rooms that interest you rather than racing every path.'],
          ['Check the return bus before adding Sidney', 'Leave time for the return route and check the last useful bus before adding Sidney. Seasonal evening lighting and events can extend a visit, but they depend on the date shown in the official calendar.']
        ],
        watch: [
          ['Route 75 destination', 'The garden’s visitor page says some afternoon commute trips do not enter the grounds. Check the trip details and destination sign, not just the route number.'],
          ['Season changes the garden', 'Bloom displays, evening lighting and holiday events follow different calendars. Use the current hours and events page rather than assuming a summer program.'],
          ['Keep Butchart and Sooke on separate days', 'Butchart is north of downtown; Sooke lies west. A garden visit plus a west-coast excursion turns two separate transfer days into one rushed loop.']
        ],
        faq: [
          ['What is unusual about the Sunken Garden?', 'It occupies the former limestone quarry used for the Butcharts’ cement works. Jennie Butchart began transforming the depleted quarry in 1912; the Japanese, Italian and Rose gardens followed as the estate expanded.'],
          ['Can I take public transit to Butchart Gardens?', 'Yes. The garden lists downtown route 75 at about 50–60 minutes, but warns that not every afternoon trip enters the grounds. Check the exact schedule and trip destination both ways.'],
          ['What should I pair with the gardens?', 'Keep the garden as the day’s anchor. Sidney can fit as one north-peninsula addition if your transport and daylight allow; Sooke and the Juan de Fuca coast are a separate westbound day.']
        ]
      }),
      g({
        slug: 'sooke-juan-de-fuca', name: 'Sooke & Juan de Fuca Coast',
        instrument: 'River, forest and tide options', layout: 'tide-clock',
        cardLabel: 'Coast day', displayInstrument: 'Sooke Potholes, China Beach and Botanical Beach',
        heroIntro: 'Choose one westbound destination: glacial river pools at Sooke, a forest path to China Beach, or tide pools at Botanical Beach near Port Renfrew.',
        orientationHeading: 'Plan around the road, tide and return', routeHeading: 'Pick one stop along the west coast',
        fallbackHeading: 'Choose an open trail if tides or closures change the plan', routeStageLabels: ['Choose', 'Walk', 'Check', 'Return'],
        mapTreatment: {
          heading: 'Three westbound choices',
          note: 'Schematic route choices, not to scale. Access differs by stop.',
          choices: [
            ['Inland from Sooke', 'Sooke Potholes', 'River pools carved by glacial meltwater; route 61 leaves a several-kilometre walk to the park.'],
            ['West on Highway 14', 'China Beach', 'A 1 km forest path leads to the shore and viewing deck.'],
            ['Farther west near Port Renfrew', 'Botanical Beach', 'Check for a tide at or below 1.2 m; consult the Port Renfrew tide table.']
          ]
        },
        summary: 'Choose one main stop along the slower westbound road: Sooke Potholes, China Beach, or Botanical Beach near Port Renfrew. Each has a different access and walking plan.',
        access: 'A car is the practical way to link the coast stops. The CRD estimates about 45 minutes by car from Victoria to Sooke Potholes; its route 61 option leaves you several kilometres to walk from Sooke River Road. China Beach is 35 km west of Sooke on Highway 14; Botanical Beach is farther west near Port Renfrew.',
        tradeoff: 'The west-coast trip trades museum time for river pools, forest and open shoreline. Choose one main stop because the road is slow and Botanical Beach depends on the tide.',
        fallback: 'If storm damage closes a trail or the Botanical tide window misses your visit, choose the CRD’s Sooke Potholes paths or China Beach’s short day-use trail if their current access is open. Do not substitute the full Juan de Fuca Marine Trail: BC Parks describes it as a remote 47 km wilderness route.',
        decisionFallback: 'If a closure or tide rules out your first choice, switch to an open short trail and check access again.',
        duration: 'Allow a full day for one coast objective from Victoria, including the drive and walk. For multiple west-coast stops or a longer trail section, sleep in Sooke or Port Renfrew; the 47 km Marine Trail is a multi-day undertaking with separate trailhead logistics.',
        combine: 'Pair the Potholes with another Sooke-area stop, or use China Beach as the day’s west-coast walk. Treat Botanical Beach as the Port Renfrew branch and schedule it around a tide of 1.2 m or lower. Butchart is on the opposite side of the city and belongs on another day.',
        verify: 'Check BC Parks advisories for storm-damaged sections and closures, then match Botanical Beach to the Fisheries and Oceans Port Renfrew tide table. Confirm Highway 14 access and the exact trailhead before departing Victoria.',
        stages: [
          ['Choose the coast branch', 'Sooke Potholes are inland, where glacial meltwater carved round pools in the Sooke River rock. China Beach is west of Sooke; Botanical Beach sits farther west near Port Renfrew. Pick one main destination before setting out.'],
          ['Use the right scale of walk', 'At China Beach, BC Parks describes a 1 km forest path to the shore and viewing deck. At Botanical Beach, the easy-to-moderate loop links Botanical Beach and Botany Bay. The Juan de Fuca Marine Trail is a remote 47 km hike, not a short spur.'],
          ['Time Botanical Beach to low tide', 'At 1.2 m or lower, the rock platforms and tide pools are easiest to see. Use the Port Renfrew tide table; stay on designated paths and do not touch, collect or disturb the marine life.'],
          ['Return by the same road', 'Give the return drive its own daylight and energy margin. If you want several west-coast beaches or a long Marine Trail section, move the base west for a night instead of adding the distance after a Victoria day.']
        ],
        watch: [
          ['A bus stop is not the park entrance', 'The CRD says route 61 reaches Sooke River Road, followed by a several-kilometre walk to Sooke Potholes. Plan a car, bike, or a specific local connection rather than assuming the bus drops you at the pools.'],
          ['Tides and trail closures', 'Botanical Beach needs a low tide for tide-pool viewing, and BC Parks posts storm-damage closures. Check both before committing to the farthest westbound branch.'],
          ['Treat the Marine Trail as a separate hike', 'The 47 km Juan de Fuca Marine Trail has four trailheads and can be impassable at high tide in places. A multi-day hike needs current advisories, tide planning and point-to-point transport.']
        ],
        faq: [
          ['Can I see the Juan de Fuca tide pools at any time?', 'No. BC Parks says Botanical Beach is best at a tide of 1.2 m or lower. Check the Port Renfrew tide table, and do not touch or remove tide-pool life.'],
          ['Is Sooke Potholes an easy bus trip from Victoria?', 'Not all the way to the park. The CRD lists route 61 to Sooke River Road, then a several-kilometre walk. A car or a planned bike/local connection makes the access more practical.'],
          ['Is the Juan de Fuca Marine Trail a day hike?', 'The full trail is 47 km and remote. BC Parks lists four trailheads, tide-affected sections and storm-damage advisories; plan it as a separate multi-day hike with point-to-point transport.']
        ]
      })
    ]
  }),
  pacificRimCluster,
  defineCanadaCluster({
    slug: 'banff-lake-louise', name: 'Banff & Lake Louise', region: 'Alberta Rockies', band: 'rockies', family: 'rockies-survey',
    label: 'Rocky Mountain core · transit, shuttles and trailheads', tagline: 'the parking lot is not the itinerary.',
    reviewDate: '12 October 2026', isoDate: '2026-10-12',
    hubIntro: 'Use Banff town as the walkable base, give Lake Louise and Moraine Lake their own reservation-led day, then choose Johnston Canyon or the Lake Minnewanka corridor as a separate outing. Named Roam routes, Parks Canada boarding rules and seasonal road notices determine whether those days work; keep one movable day for weather or a service change.',
    stay: 'Three nights leaves arrival plus about two usable days: one lake day and one nearby corridor, with little room to move either. Four nights gives three days and a weather or transport buffer; five is calmer if the lake reservation, a trail day and a slower town day all matter. Choose one base. Banff town makes evenings and Roam stops easiest; Canmore can cost less but adds a Route 3 transfer, while Lake Louise Village trades town choice for a closer lake start.',
    transfer: 'From Calgary, arrange a named airport or intercity coach, or rent a car for the drive to Banff; confirm the operator, terminal, luggage rules and return before booking lodging. In the Bow Valley, Roam Routes 1 (Sulphur Mountain), 2 (Tunnel Mountain) and 3 (Canmore–Banff) serve different corridors; 8X links Banff with Lake Louise. Parks Canada shuttles are separate products with their own season, reservation and boarding point. Do not infer a fare, departure or transfer from the route name.',
    season: 'Summer brings full lots and reservation pressure; reserve the exact Lake Louise/Moraine transport and lodging early, then keep the order flexible. As checked 12 October 2026, Parks Canada listed its Lake Louise and Moraine Lake seasonal shuttles through that date, Roam Route 6 summer service had ended on 4 October, and Route 9 Johnston Canyon service was due to suspend from 13 October during slope work. These dated notices are snapshots, not future schedules. Snow, ice, smoke, avalanche exposure and shorter daylight change trail choices in every shoulder season.',
    fallback: 'If a shuttle, trail or road is unavailable, keep the day inside Banff town: walk Banff Avenue and the Bow River path, use an open indoor stop, or choose a lower-elevation signed route only after checking its current status. If visibility is poor, do not spend a fixed lake reservation on a long exposed hike; swap the movable town day and recheck the reservation terms.',
    firstVisitPlan: {
      heading: 'Four nights, one base and one decision left open',
      intro: 'Arrive without a distant attraction on the first afternoon. Keep Banff town as the base, anchor one day to confirmed lake transport, and choose the second corridor from that week’s service and trail notices. The fourth night buys a movable day; it cannot guarantee a shuttle or clear weather.',
      days: [
        ['Arrival · Banff town', 'Check in near Banff Avenue or a named Roam stop. Walk Banff Avenue, cross the Bow River pedestrian bridge and follow the signed Bow Falls path; return to town for food and confirm the next day’s boarding point. Keep this as the weather-swap day.'],
        ['Lake day · Louise or Moraine', 'Use only a confirmed Parks Canada shuttle reservation or current Roam 8X trip. At Lake Louise, walk the lakeshore out and back; add a longer trail only if its current status, weather and return booking allow. Treat Moraine Lake as a separate booked leg, not an assumed private-car stop.'],
        ['Corridor day · Johnston or Minnewanka', 'Choose one branch after checking service: Roam 9 for Johnston Canyon when operating, or seasonal Route 6 for the Minnewanka corridor. Walk the signed Johnston Canyon trail to a sensible turnaround, or choose a lake-shore stop from the current Route 6 list. Do not plan both corridors around an unverified connection.']
      ]
    },
    searchKeywords: ['Lake Louise'],
    faq: [
      ['How many nights should I book in Banff?', 'Three nights supports two useful days if arrival and departure are light. Four nights leaves a movable day for weather or a changed service; five is more comfortable when you want a town day as well as a lake day and a second corridor.'],
      ['Where should I stay: Banff, Canmore or Lake Louise?', 'Banff town is the simplest single base for walking, food and Roam connections. Canmore may broaden lodging choice but requires a current Route 3 plan into Banff. Lake Louise Village is closer to the lake corridor but has a different, smaller service base. Compare the actual stop, parking terms and last return before choosing.'],
      ['Can I drive my own car to Moraine Lake?', 'Parks Canada says personal vehicles are not permitted on Moraine Lake Road year-round. Confirm the current Parks Canada shuttle, Roam Transit or another permitted option and its exact reservation and boarding rules.']
    ],
    sources: [
      ['https://parks.canada.ca/pn-np/ab/banff', 'Parks Canada — Banff National Park'],
      ['https://roamtransit.com/schedules-routes/', 'Roam Public Transit — current schedules and route list'],
      ['https://roamtransit.com/schedules-routes/lake-louise-banff-express-route-8x/', 'Roam Public Transit — Route 8X Banff–Lake Louise'],
      ['https://roamtransit.com/schedules-routes/johnston-canyon-regional-route-9/', 'Roam Public Transit — seasonal Route 9 Johnston Canyon notice'],
      ['https://roamtransit.com/schedules-routes/lake-minnewanka-route-6/', 'Roam Public Transit — seasonal Route 6 Lake Minnewanka notice'],
      ['https://parks.canada.ca/pn-np/ab/banff/visit/parkbus/louise', 'Parks Canada — Lake Louise and Moraine Lake shuttle access'],
      ['https://parks.canada.ca/pn-np/ab/banff/visit/parkbus/banff', 'Parks Canada — getting around Banff and current shuttle routes'],
      ['https://parks.canada.ca/pn-np/ab/banff/activ/randonnee-hiking/etat-sentiers-trail-conditions', 'Parks Canada — dated Banff trail conditions']
    ],
    guides: [
      g({ slug: 'banff-town-bow-valley', name: 'Banff Town & Bow Valley', instrument: 'valley base ledger', layout: 'arrival-board', imageQuery: 'Banff town Bow Valley Alberta mountains', imageAlt: 'Cascade Mountain and avalanche signage on the Banff approach', summary: 'Make Banff town the recovery base: walk Banff Avenue and the Bow River, learn the Roam stop you need, then use one nearby named path before committing to a higher or more remote day.', access: 'Choose lodging by its walk to Banff Avenue or a named Roam stop, and confirm parking and late arrival terms. Calgary transfers need a booked coach or car plan. Roam Routes 1 and 2 serve town-side attractions; Route 3 is the separate Canmore–Banff link, so a Canmore room is not a walkable Banff base.', tradeoff: 'Banff can cost more than Canmore, but the town base cuts repeated transfers and lets you return on foot after dinner. Canmore may suit a longer stay or lower room rate if Route 3 service, luggage and the final return fit your dates.', fallback: 'If cloud, smoke or a closure removes the high objective, keep the day on Banff Avenue, the Bow River pedestrian bridge and the signed Bow Falls path. Use an indoor stop only after checking its current opening; keep wildlife distance even in town.', duration: 'Allow an arrival half-day for the town orientation, then one unhurried town or Bow Valley day if you want a longer walk. Keep the first afternoon light after a Calgary-to-Banff transfer.', combine: 'Banff town works as one fixed base for the lake and nearby corridors. Jasper and the Icefields Parkway are a separate multi-day transfer, not an add-on after a local walk.', verify: 'Before leaving lodging, check Roam’s service calendar and last return, the official Bow Falls or Tunnel Mountain trail notice, weather and smoke, and the parking rule on your booking.', stages: [['Choose the right base', 'Walk Banff Avenue from your lodging to the Banff High School Transit Hub and identify the platform and route number shown for tomorrow.'], ['Cross the river', 'Use the Bow River pedestrian bridge, then follow signs toward Bow Falls; return on the same signed path instead of turning the town walk into an unplanned high-country hike.'], ['Add one local branch', 'Choose Cave and Basin or the Tunnel Mountain route only if the current trail and bus notice supports it. Roam Route 2 serves Tunnel Mountain; do not assume a frequent or late return.'], ['Reset for the park day', 'Refill food and water in town. Check the exact shuttle voucher or 8X journey, boarding location, weather and trail notice before setting an alarm.']], watch: [['The hotel stop is not the route stop', 'A Canmore address, Banff address and Calgary airport transfer use different boarding places. Save the operator, stop name and return plan in your booking notes.'], ['Wildlife in town', 'Elk use sidewalks and roads. Give wildlife the required distance, do not feed it, and never block traffic for a photograph.'], ['Elevation and fatigue', 'Plan a gentle first walk after arrival. A bus-and-walk day can still feel long in dry air, sun and altitude.']], faq: [
        ['Is Banff town walkable without a car?', 'The central town is walkable, and Roam has named routes for selected corridors. Farther trailheads are not all linked by one all-season bus, so check the exact route and operating day.'],
        ['Is Canmore an easy substitute for Banff?', 'It can be a useful lower-cost base, but it changes the daily plan. Check current Roam Route 3 service, its first and last trips, and the walk from your lodging to the stop before comparing room prices.'],
        ['What is a sensible first walk?', 'Use Banff Avenue, the Bow River pedestrian bridge and the signed Bow Falls path as a town-scale orientation. Check the trail notice before extending the walk toward a higher route.']
      ] }),
      g({ slug: 'lake-louise-moraine', name: 'Lake Louise & Moraine Lake', instrument: 'reservation docket', layout: 'reservation-docket', imageQuery: 'Lake Louise Moraine Lake Alberta Canada', imageAlt: 'Moraine Lake and the Ten Peaks in Banff National Park', summary: 'Choose transport before choosing a trail: private cars cannot use Moraine Lake Road, while Parks Canada shuttle reservations and Roam 8X have different boarding points, seasons and return conditions.', access: 'For a Banff base, compare the current Parks Canada Lake Louise/Moraine Lake shuttle with Roam route 8X from Banff. Confirm the exact product, date, pickup, return and transfer between lakes before paying. Personal vehicles are not permitted on Moraine Lake Road year-round; do not drive to its gate expecting a walk-in option.', tradeoff: 'One booked lake day can pair an easy lakeshore walk with a second destination, but every transfer consumes daylight and a return slot. One lake done well is better than missing a booked ride while trying to collect both.', fallback: 'Keep a Banff town day movable. If the shuttle season is over, weather is poor or your dates have no suitable booking, use a confirmed operating Roam trip only if it reaches the chosen stop; otherwise move the lake day out of the plan rather than inventing a car access route.', duration: 'Reserve a full day for two lakes because you must include check-in, the bus or shuttle legs, walking and the booked return. A single Lake Louise lakeshore visit may fit a shorter window only when the confirmed service and your onward connection allow it.', combine: 'Keep this separate from Johnston Canyon, Minnewanka and the Icefields Parkway. The fixed reservation makes a combined long drive fragile, and these corridors do not share one assumed return bus.', verify: 'Check the current Parks Canada shuttle calendar and booking rules, Roam 8X schedule and reservation guidance, exact boarding address, Moraine road restriction, trail and bear advisories, cancellation terms and weather.', stages: [['Book the exact product', 'Choose Parks Canada’s shuttle or Roam 8X for the actual date. Save the pickup, check-in instruction, return and transfer rules; a route name alone is not a reservation.'], ['Start with one priority', 'At Lake Louise, walk the lakeshore out and back from the lakeshore area. If Moraine Lake is your priority, follow the booked return plan and use the signed Rockpile viewpoint path only while open.'], ['Add only a supported second stop', 'Use Moraine Lake as a second leg only when the product or transfer explicitly serves it and the return has enough margin. Otherwise stay with one lake and its current signed walk.'], ['Return before the margin disappears', 'Leave time for the reserved boarding window, weather delays and the ride to Banff. Do not add a late hike that makes the booked departure uncertain.']], watch: [['Moraine access is controlled', 'Parks Canada says personal vehicles are prohibited on Moraine Lake Road year-round. Follow the live access page, not an old driving map.'], ['The seasonal window closes', 'On 12 October 2026 the Parks Canada page listed the 2026 seasonal lake shuttles through that date. This is a dated snapshot; check the current season and any other permitted service for your travel dates.'], ['High-elevation weather changes the walk', 'Cloud, cold, snow, ice, bear notices and closures can change which signed route is appropriate. Check the same-day trail conditions before leaving the transit stop.']], faq: [
        ['Can I drive my own car to Moraine Lake?', 'No. Parks Canada states that personal vehicles are not permitted on Moraine Lake Road year-round. Use a currently permitted shuttle, Roam service or another authorized option.'],
        ['Can I visit both lakes in one day?', 'Only if a currently operating shuttle or transfer explicitly connects your booked legs and return. Confirm that connection before planning the second lake; a photograph stop is not a transport plan.'],
        ['When do Parks Canada lake shuttles run?', 'The seasonal dates change. The page checked 12 October 2026 listed 2026 operations through that date. Treat that as a dated record and check the current season calendar before booking.']
      ] }),
      g({ slug: 'johnston-minnewanka', name: 'Johnston Canyon & Lake Minnewanka', instrument: 'two-corridor chooser', layout: 'route-split', mapTreatment: {
        src: '/assets/images/tripdistill-canada-banff-two-corridors.svg', alt: 'Original schematic showing Banff with separate Johnston Canyon and Lake Minnewanka corridors', creator: 'TripDistill', source: 'https://tripdistill.com/assets/images/tripdistill-canada-banff-two-corridors.svg', label: 'TripDistill original Banff two-corridor schematic', assetType: 'original-planning-diagram', rightsStatus: 'Project original; no separate reuse license declared', rightsStatusUrl: 'https://tripdistill.com/terms-of-use/', inventoryStatus: 'used', editNote: 'Original schematic, not to scale; created as a vector planning diagram.',
        heading: 'Two separate corridors from Banff', note: 'Schematic only · not to scale. Plan these as separate days unless the currently operating return connection is confirmed.', choices: [
          ['West · Roam 9', 'Johnston Canyon', 'Route 9 serves the canyon when it is operating. Follow the signed canyon trail to a sensible turnaround, then return by the confirmed bus or car plan.'],
          ['East · seasonal Route 6', 'Lake Minnewanka', 'Route 6 is seasonal and its stop list changes by service period. Choose one open lakeside stop from the current route page; do not assume the summer bus is running.'],
          ['Town · Banff base', 'Separate the day', 'Return to Banff between corridors. The diagram does not show road distance, walking time, a connecting bus or guaranteed service.']
        ]
      }, summary: 'Johnston Canyon and Lake Minnewanka sit on different corridors. Choose one per day from the dated Roam service notice, then follow a named trail or lakeside stop with a confirmed return.', access: 'Johnston Canyon is reached from Banff by Roam Route 9 when it operates; Lake Minnewanka uses the separate seasonal Route 6 corridor or a car. Check the route page, service date, trailhead closure and return before leaving Banff High School Transit Hub. Neither route is a year-round promise.', tradeoff: 'Johnston Canyon concentrates the day on a signed gorge trail with narrow, busy sections. Minnewanka offers a broad lakeside setting and several possible stops, but Route 6 is seasonal. Treat them as separate half-day choices; connecting both can cost more time than either walk.', fallback: 'If Route 9 is suspended or canyon access is closed, choose another currently open Banff town path; do not walk around work barriers. If Route 6 is out of season, use only a confirmed car or other permitted transport, or keep the day in town. A cruise is optional and must be independently confirmed.', duration: 'Allow most of a day for a single corridor after counting the ride, trailhead access, walking, breaks and return. Johnston Canyon can be a focused half-day only when the route is running and your chosen turnaround is clear. Minnewanka timing depends on which Route 6 stop or operator product is actually available.', combine: 'Do not promise Johnston and Minnewanka in one day: their bus corridors are separate and Route 6 is seasonal. Put this guide on a different day from a fixed Lake Louise shuttle reservation. Jasper is a separate long road transfer.', verify: 'Read the current Roam Route 9 or Route 6 service notice, Parks Canada trail and closure status, weather, daylight and wildlife notice. The 11 October 2026 Parks trail table showed Johnston Canyon as good but wet/muddy and a caution on Minnewanka Road; the 12 October Roam page said Route 9 would suspend from 13 October for slope work. Recheck rather than treating either snapshot as current.', stages: [['Choose one open corridor', 'From Banff, open the live Roam Route 9 and Route 6 pages. As checked 12 October 2026, Route 9 announced suspension from 13 October during slope remediation and Route 6 summer service had ended on 4 October. If neither fits your date, switch the day before boarding.'], ['Johnston branch', 'When open, use the named Johnston Canyon trail from its day-use area. Read the dated Parks Canada condition, follow the signed route and barrier instructions, and set a turnaround before starting; do not push beyond a closure or icy section.'], ['Minnewanka branch', 'When Route 6 operates, choose one listed stop—such as Lake Minnewanka or Cascade Ponds—from the current route page. Check any road work and trail warning, then keep a separate return plan; boat operation is another booking, not part of the bus promise.'], ['Return to the town base', 'Board only at the stop and time confirmed for your service day. Leave daylight and dinner margin in Banff, and record the next day’s route before ending the evening.']], watch: [['Route 9 closure snapshot', 'Roam’s 12 October 2026 page announced a suspension from 13 October to approximately 30 November for Parks Canada rock-slope work; it also described closure of the canyon day-use trailhead, parking and washrooms. Confirm the live reopening and access notice.'], ['Route 6 is seasonal', 'Roam’s 12 October 2026 page said its summer service had ended on 4 October and was scheduled to resume 19 May 2027. This dated page is not a guarantee; verify the current season and service.'], ['Wet, icy or wildlife-closed trail', 'Parks Canada’s 11 October 2026 trail snapshot marked Johnston wet/muddy and included a Minnewanka trail bear warning. Conditions and wildlife restrictions change quickly; follow the live status and do not bypass closures.']], faq: [
        ['Can I visit Johnston Canyon and Lake Minnewanka on the same bus?', 'They use different corridors. Roam Routes 9 and 6 are not one connecting route, and each has seasonal or work-related changes. Plan one corridor per day unless you have verified a specific operating connection and return.'],
        ['Is the Johnston Canyon trail open now?', 'It changes. The Parks Canada table checked 11 October 2026 showed good conditions with wet and muddy sections, while the Roam page checked 12 October announced Route 9 suspension from 13 October during slope work. Check both the current trail page and access notice before travel.'],
        ['Does Route 6 run year-round?', 'Roam’s page checked 12 October 2026 said its summer service had ended on 4 October and was scheduled to resume 19 May 2027. Recheck the operator’s current seasonal service; do not rely on that dated snapshot for another year.']
      ] })
    ]
  }),

  defineCanadaCluster({
    slug: 'jasper-icefields', name: 'Jasper & the Icefields Parkway', region: 'Alberta Rockies', band: 'rockies', family: 'glacier-transect',
    label: 'Northern Rockies · town recovery and long-road weather', tagline: 'the parkway is a day, not a transfer line.',
    reviewDate: '12 October 2026', isoDate: '2026-10-12',
    hubIntro: 'Plan Jasper as a base with distinct day corridors. Give the town a walkable arrival day, choose Maligne Valley or the southbound falls for a separate outing, and reserve a full daylight block for the Icefields Parkway. The 232 km highway between Jasper and Lake Louise is remote, has no reliable cell service and does not behave like a frequent-stop transfer road.',
    stay: 'Four nights in Jasper town is a useful first-visit minimum: arrival and town walk, one Maligne day, one falls or shorter parkway day, and one full parkway day or weather buffer. Five nights lets you separate the two southbound days. If driving through to Banff, consider a separate Lake Louise-area night so a late road delay does not force a rushed final leg.',
    transfer: 'Jasper town is compact on foot. Parks Canada’s seasonal 24-seat shuttle has linked Whistlers and Wapiti campgrounds with town, Pyramid Lake Lodge, Jasper Park Lodge and Lake Annette; routes and operating dates vary, and it is not transport to Maligne Lake or along the Icefields Parkway. Use the Municipality of Jasper’s current transit map and schedule for exact stops, times and payment. Maligne Road and Highway 93 south need a confirmed vehicle, tour or other named operator; do not infer a bus from a road distance.',
    season: 'As checked 12 October 2026, the Parks Canada status board listed Maligne Lake and Mary Schäffer day use open, Athabasca and Sunwapta Falls open, but Maligne Canyon closed; Cavell Road remained closed until further notice. The 2026 Maligne Lake Cruise season was scheduled through 11 October and the Columbia Icefield Adventure through 12 October, both weather dependent. These dated endpoints are not future guarantees. Services on the Parkway are sparse: seasonal facilities generally run early May to mid-October, with no winter fuel or food services on the route.',
    fallback: 'If Maligne Canyon, the Parkway, a commercial product or a high trail is closed or weather-compromised, stay near Jasper: walk the signed town grid and river edge, use currently open day-use areas, or shorten to a permitted waterfall path. Keep a warm, indoor interpretation stop as the weather buffer. Do not bypass a closure or drive after dark to recover a missed viewpoint.',
    firstVisitPlan: {
      heading: 'Four nights, one base, three separate road decisions',
      intro: 'Book a Jasper town bed first if walkable food and evening flexibility matter. Compare a central hotel or guesthouse with a campground: the campground needs a confirmed shuttle or vehicle plan, while a town stay does not solve the out-of-town roads.',
      days: [
        ['Arrival · Jasper town on foot', 'Check in, get groceries and fuel, then walk the signed town-centre blocks and a short river path. Ask the visitor centre about current closures before choosing tomorrow’s corridor.'],
        ['Maligne Valley · one objective', 'Choose Maligne Lake or another currently open Maligne stop, not a full lake-and-canyon checklist. Drive or book a named operator; the local campground shuttle does not reach the valley. Book a seasonal cruise only after confirming its dates, weather policy and your return transport.'],
        ['South · falls or Parkway segment', 'Use Athabasca Falls (30 km south of Jasper) and Sunwapta Falls (54 km) as a controlled out-and-back. Keep the spray-side paths short if slippery. Do not let this shorter choice expand toward the icefield without rechecking daylight and fuel.'],
        ['Parkway · through day or reserve day', 'For Jasper–Lake Louise, start with fuel, water, food, road and weather checks; select a few stops and protect an arrival before dark. If the highway is not suitable, use this as a second Jasper-area day. Add a Lake Louise overnight when the onward connection is fixed.']
      ]
    },
    sources: [
      ['https://parks.canada.ca/pn-np/ab/jasper', 'Parks Canada — Jasper National Park'],
      ['https://parks.canada.ca/pn-np/ab/jasper/visit', 'Parks Canada — Jasper visit planning'],
      ['https://parks.canada.ca/pn-np/ab/jasper/visit/transit', 'Parks Canada — Jasper seasonal campground shuttle'],
      ['https://parks.canada.ca/pn-np/ab/jasper/visit/ouvert-fermee-open-closed', 'Parks Canada — what is open and closed'],
      ['https://parks.canada.ca/pn-np/ab/jasper/visit/routes-roads', 'Parks Canada — Jasper road restrictions and seasonal closures'],
      ['https://parks.canada.ca/pn-np/ab/jasper/activ/itineraires-itineraries/promenadedesglaciers-icefieldsparkway', 'Parks Canada — travelling the Icefields Parkway'],
      ['https://parks.canada.ca/pn-np/ab/jasper/securite-safety/enviro', 'Parks Canada — Jasper weather, wildlife and safety'],
      ['https://www.banffjaspercollection.com/attractions/maligne-lake-cruise/', 'Maligne Lake Cruise — seasonal operator dates and booking terms'],
      ['https://www.banffjaspercollection.com/attractions/columbia-icefield-adventure/', 'Columbia Icefield Adventure — seasonal operator dates and booking terms'],
      ['https://www.jasper-alberta.ca/p/transit', 'Municipality of Jasper — transit information']
    ],
    guides: [
      g({ slug: 'jasper-town-maligne', name: 'Jasper Town & Maligne Valley', instrument: 'valley branch map', layout: 'lake-atlas', imageQuery: 'Jasper Maligne Lake Alberta Canada', imageAlt: 'Mountain lake in Jasper National Park', summary: 'Keep Jasper town as the service anchor, then give Maligne Canyon or Maligne Lake a dedicated branch with an explicit road and weather decision.', access: 'Jasper town is walkable; Maligne destinations are outside town and require an appropriate road, tour or seasonal transport plan.', tradeoff: 'Maligne Lake gives scale and optional boat products; Maligne Canyon gives a more compact walking objective. Trying to fully do both can create a long back-and-forth day.', fallback: 'Poor lake weather can move the day to town, valley viewpoints or a shorter canyon walk if conditions permit.', duration: 'One full day for the chosen Maligne branch plus Jasper town. Add a second day if both lake and canyon are priorities.', combine: 'Pair with the Icefields Parkway on a different day so neither becomes a photo-stop sprint.', verify: 'Check Jasper recovery/closure notices, Maligne Road conditions, trail advisories, wildlife rules and any seasonal operator status.', stages: [['Town check', 'Begin with current park information, fuel and food before committing to the Maligne road.'], ['Choose lake or canyon', 'Make one the primary destination according to weather and walking goals.'], ['Keep a turnaround', 'Leave enough time for wildlife delays and safe driving back to Jasper.'], ['Use town to reset', 'End with groceries, dinner and the next road decision rather than adding a distant sunset chase.']], watch: [['Post-fire recovery changes', 'Facilities, roads and trails can change during long recovery periods; current Parks Canada information overrides old itineraries.'], ['Wildlife on roads', 'Speed and stopping rules matter in a park where roadside wildlife is common.'], ['Cold water and weather', 'Mountain-lake conditions can change faster than town weather suggests.']] }),
      g({ slug: 'icefields-parkway', name: 'Icefields Parkway', instrument: 'distance and fuel ruler', layout: 'distance-ruler', imageQuery: 'Icefields Parkway Columbia Icefield Alberta', imageAlt: 'Icefields Parkway through the Canadian Rockies', summary: 'Drive the parkway as a landscape route with fuel, closures and a fixed endpoint; do not turn it into an endless chain of roadside stops.', access: 'Start from Jasper or Lake Louise with a full understanding of fuel and service locations. Winter tires or traction requirements and closures must be checked in season.', tradeoff: 'A one-way transfer day works when you accept fewer stops. A return day from Jasper or Banff must turn around much earlier than the map tempts you to.', fallback: 'If weather, wildfire, avalanche work or closures damage the plan, use a local Jasper or Banff day instead of trying to “make up” the highway after dark.', duration: 'Allow a full day for a meaningful section or the through drive with selected stops. The raw driving time is not the travel time.', combine: 'Use it to connect Jasper and Banff over a dedicated day. Do not attach Lake Louise, Maligne Lake and a long hike to the same schedule.', verify: 'Check Parks Canada and Alberta road conditions, fuel/service availability, winter equipment, trail closures and glacier-area operator terms if booking an activity.', stages: [['Fuel and conditions', 'Start with a full fuel plan, road status and the last reliable turnaround before leaving the main town.'], ['Select three stops', 'Choose only a few major viewpoints, waterfalls or short walks that fit the weather.'], ['Glacier-zone decision', 'Treat any commercial glacier or skywalk product as a separate timed booking, not a casual roadside add-on.'], ['Reach the endpoint in daylight', 'Protect the final arrival in Jasper, Lake Louise or your chosen lodging before fatigue and wildlife risk rise.']], watch: [['Sparse services', 'Food, fuel, toilets and cell coverage are not continuous.'], ['Winter closure logic', 'Snow, avalanche hazard and storms can close or slow the route; this is not a guaranteed all-season transfer.'], ['Stop creep', 'Every five-minute viewpoint becomes fifteen minutes once parking, walking and photos are included.']] }),
      g({ slug: 'athabasca-sunwapta', name: 'Athabasca & Sunwapta Falls', instrument: 'waterfall turnaround card', layout: 'park-gate', imageQuery: 'Athabasca Falls Jasper National Park', imageAlt: 'Athabasca Falls in Jasper National Park', summary: 'Use the two major waterfall areas as a controlled parkway day south of Jasper, with one longer walk or viewpoint branch rather than continuing indefinitely toward the icefield.', access: 'Both falls are road-accessed south of Jasper. Parking, winter access and trail conditions must be checked before treating them as simple roadside stops.', tradeoff: 'This route gives high-impact scenery with less distance than a full Icefields Parkway transfer, making it useful after a long arrival or before another mountain day.', fallback: 'If spray, ice or trail conditions make one site difficult, shorten the walking and use valley viewpoints closer to Jasper.', duration: 'A half to full day depending on stops and walking. Do not let the route silently become the entire parkway.', combine: 'It pairs well with Jasper town or a gentle evening. Save Lake Louise transfer for a separate day.', verify: 'Check road and trail status, winter access, Parks Canada safety notices and any wildfire-related changes.', stages: [['Leave Jasper southbound', 'Set the farthest turnaround before driving so additional viewpoints remain optional.'], ['Athabasca first', 'Use maintained paths and respect barriers around the powerful gorge.'], ['Sunwapta second', 'Continue only if road, parking and daylight remain comfortable.'], ['Turn back deliberately', 'Return to Jasper rather than chasing the next named place simply because it appears on the highway.']], watch: [['Barrier discipline', 'Waterfall barriers exist because the gorge is dangerous; never trade safety for an angle.'], ['Ice and spray', 'Cold-season surfaces can be slippery even when the highway is clear.'], ['One-way temptation', 'The parkway encourages “just one more stop”; a declared turnaround protects the evening.']] })
    ]
  }),

  defineCanadaCluster({
    slug: 'calgary-badlands', name: 'Calgary & Alberta Badlands', region: 'Southern Alberta', band: 'prairies', family: 'prairie-section',
    label: 'Prairie city, river paths and two fossil landscapes', tagline: 'Give the city, Drumheller and Dinosaur Park separate clocks.',
    reviewDate: '12 October 2026', isoDate: '2026-10-12',
    searchKeywords: ['Calgary', 'Drumheller', 'Royal Tyrrell Museum', 'Dinosaur Provincial Park', 'Alberta badlands', 'fossils'],
    hubIntro: 'Calgary is a rail-served prairie city; Drumheller and Dinosaur Provincial Park are two separate road corridors. The Royal Tyrrell Museum is an indoor anchor beside Drumheller, while Dinosaur Park is about a two-hour drive farther south. Build the transfer and overnight plan before choosing scenic stops.',
    stay: 'Three nights can cover Calgary and Drumheller only: two Calgary nights and one in Drumheller. To include Dinosaur Provincial Park, allow at least four nights—two in Calgary, one near Drumheller and one near Brooks or the park. Five nights, with a second Drumheller night, gives the museum, valley and field park room to breathe.',
    transfer: 'Use Calgary Transit for the city; its Route 500 Airport Express is a bus, renamed from Route 300 on 31 August 2026, and Calgary has no airport CTrain station. Beyond the city, book a named tour or confirm a dated coach and local connection. ValleyConnect is seasonal and was closed for 2026 in the 12 October check; it does not connect to Dinosaur Provincial Park. A car is the dependable option for combining the museum, dispersed valley stops and the southern park.',
    season: 'Badlands weather is exposed: summer heat, little shade, thunderstorms and sudden wind can shorten walks; autumn and winter bring shorter daylight, snow, ice and changing road conditions. As checked 12 October 2026, the Royal Tyrrell fall schedule was 10 a.m.–5 p.m. Tuesday–Sunday, with timed entry, last ticket time 3:30 p.m. and no entry after 4 p.m.; holiday Mondays may differ. Dinosaur Park had seasonal visitor-centre hours and its campground water was shut off for the season.',
    fallback: 'For rain, heat, smoke or lightning, make the Royal Tyrrell galleries the main Drumheller visit and skip exposed trails until conditions improve. In Calgary, keep the river walk short and choose a currently open indoor cultural stop. At Dinosaur Park, use only open visitor facilities and safe, designated routes; if storms, smoke or road warnings affect the field day, reschedule instead of treating a long return drive as a weather shelter.',
    firstVisitPlan: {
      heading: 'Four nights for the compact loop; five for a buffer',
      intro: 'This sequence assumes a vehicle for both badlands corridors. It separates the two-hour Drumheller–Dinosaur Park drive from the museum visit and protects an overnight near the southern park rather than returning north after a field day.',
      days: [
        ['Arrive · Calgary by transit', 'Stay near a CTrain station if you want a city day. From the airport, compare Route 500 Airport Express with taxi or rideshare for your exact hotel; the CTrain does not run to the terminal. Keep the first evening close to your base.'],
        ['Calgary core · walk and one anchor', 'Use CTrain for the longer downtown jump, then walk one Bow or Elbow River pathway section and choose one indoor cultural visit. Check event notices, path conditions and the current fare boundary; the 7 Avenue Free Fare Zone does not make every trip free.'],
        ['Calgary → Drumheller · museum and valley', 'Drive to Drumheller, reserve Royal Tyrrell timed entry and give the galleries about two hours before adding one nearby viewpoint or short signed walk. The museum is 6 km northwest of town. Stay locally instead of trying to return to Calgary after a full visit.'],
        ['Drumheller → Dinosaur Park · field day', 'Allow about two hours each way from Drumheller to Dinosaur Provincial Park, northeast of Brooks. Check the park alert, 511 Alberta, forecast, visitor-centre hours and any guided-tour booking before departure. Choose a public scenic loop or booked program, then overnight near Brooks or the park.'],
        ['Buffer or depart · use the right base', 'With a fifth night, keep a second Drumheller night for a slower valley day or weather move; otherwise depart south from the park area only after checking road conditions and fuel. Do not add Banff as a same-day detour.']
      ]
    },
    faq: [
      ['Can I see Drumheller and Dinosaur Provincial Park in one day?', 'They are separate areas, about two hours apart by road. A same-day drive between them can be done by car, but it leaves little room for the museum, field walks and weather delays. Use separate days and sleep near each corridor if both landscapes matter.'],
      ['Can I do this itinerary without renting a car?', 'Calgary itself works well by transit and on foot. Outside the city, confirm the exact coach, tour and onward connection for your dates before booking lodging. ValleyConnect was seasonal and closed for 2026 in the 12 October 2026 check; it is not a year-round link and does not reach Dinosaur Provincial Park.'],
      ['How far ahead should I book the Royal Tyrrell Museum?', 'The museum uses timed admission and recommends booking ahead, especially for popular dates. Check its live hours and entry rules: the fall schedule checked on 12 October 2026 listed the last ticket time at 3:30 p.m. and no entry after 4 p.m.'],
      ['Can I camp at Dinosaur Provincial Park in autumn?', 'Alberta Parks listed the campground as year-round, but services change by season. Its notice said water was shut off for the season on 5 October 2026. Confirm site availability, water, showers, dump station, fire rules and weather before relying on a campground stay.']
    ],
    sources: [
      ['https://www.calgarytransit.com/news/introducing-the-new-500-series-express-routes.html', 'Calgary Transit — Route 500 Airport Express name and service change'],
      ['https://www.calgarytransit.com/rider-information/lrt-and-bus-station-maps.html', 'Calgary Transit — CTrain and bus station maps'],
      ['https://www.calgarytransit.com/fare-evasion', 'Calgary Transit — 7 Avenue Free Fare Zone and fare rules'],
      ['https://www.tyrrellmuseum.com/visit/hours_admission', 'Royal Tyrrell Museum — hours, timed entry and admission'],
      ['https://www.tyrrellmuseum.com/visit/Plan_Your_Day', 'Royal Tyrrell Museum — planning a visit and gallery time'],
      ['https://www.tyrrellmuseum.com/visit/Directions_Parking', 'Royal Tyrrell Museum — location, parking and day-use setting'],
      ['https://traveldrumheller.com/valleyconnect/', 'Travel Drumheller — seasonal ValleyConnect route and operating dates'],
      ['https://www.albertaparks.ca/parks/south/dinosaur-pp/', 'Alberta Parks — Dinosaur Provincial Park alerts and conditions'],
      ['https://www.albertaparks.ca/parks/south/dinosaur-pp/information-facilities/park-contacts/dinosaur-visitor-centre/', 'Alberta Parks — Dinosaur visitor-centre seasonal hours'],
      ['https://www.albertaparks.ca/parks/south/dinosaur-pp/information-facilities/camping/dinosaur/', 'Alberta Parks — campground season and facilities'],
      ['https://www.albertaparks.ca/parks/south/dinosaur-pp/activities-events/dinosaur-tours-events/', 'Alberta Parks — guided tour booking and weather conditions'],
      ['https://www.albertaparks.ca/parks/south/dinosaur-pp/activities-events/', 'Alberta Parks — public routes, activities and fossil protection'],
      ['https://511.alberta.ca/', 'Alberta 511 — current road conditions and closures'],
      ['https://weather.gc.ca/', 'Environment and Climate Change Canada — local forecasts and warnings']
    ],
    guides: [
      g({
        slug: 'calgary-core', name: 'Calgary Core, Rivers & CTrain', instrument: 'urban transfer grid', layout: 'city-grid',
        imageQuery: 'Calgary skyline Bow River Alberta', imageAlt: 'Calgary skyline beside the Bow River',
        searchKeywords: ['Route 500', 'CTrain', 'Calgary Transit', 'Bow River', 'East Village'],
        summary: 'Use CTrain for the longer downtown move, then walk one Bow or Elbow River pathway and choose one cultural anchor. Route 500 is the airport bus; the CTrain does not serve the terminal.',
        access: 'Stay near a CTrain station for a transit-led visit. Calgary Transit renamed airport Route 300 as Route 500 Airport Express on 31 August 2026; it remains a bus. The downtown 7 Avenue Free Fare Zone covers only its signed stations, so check the current fare rules for the rest of your trip.',
        tradeoff: 'A city day adds prairie urban history, river geography and food before the badlands drive. It is worthwhile when Calgary is part of the trip; if you only need a sleep between flights and Banff, keep the day for the mountains instead.',
        fallback: 'For cold, smoke or a thunderstorm, shorten the river walk and move the long block indoors to a cultural venue that is open that day. In winter, check pathway ice and CTrain service alerts before choosing a far-side neighborhood.',
        duration: 'Allow one full day for a downtown walk, one river section, meals and one indoor anchor. Two nights give an arrival buffer and a usable city day; events can make lodging and transit busier.',
        combine: 'Use Calgary as the first or last base before a separate Drumheller road leg. Do not plan Drumheller as a CTrain day trip. If Banff is next, treat the highway transfer as its own decision and recheck the road.',
        verify: 'Check Calgary Transit’s trip planner, Route 500 schedule, CTrain station notices and fare boundary; also check City pathway advisories and opening hours for the cultural venue you select.',
        stages: [
          ['Choose the base', 'Pick lodging near the CTrain station that best fits your arrival and evening plans. From Calgary International Airport, compare the current Route 500 Airport Express bus with taxi or rideshare; no CTrain line reaches the terminal.'],
          ['Cross downtown deliberately', 'Use the CTrain for a longer north–south city move, then walk the central blocks and the East Village river edge. Confirm the live station and service notice before you set a timed museum entry or dinner.'],
          ['Follow one river', 'Choose a manageable Bow or Elbow pathway segment and pair it with one cultural stop. A loop that looks short on the map can grow with bridges, construction detours and event crowds; keep the river section flexible.'],
          ['Return on a known line', 'Finish near a station on the route serving your hotel. The 7 Avenue Free Fare Zone is limited to its signed downtown stations; validate the fare for trips beyond it and allow time for service changes.']
        ],
        watch: [
          ['Airport assumption', 'The airport connection is a bus route, not a rail station at the terminal. Recheck the Route 500 timetable and exact stop for your flight time.'],
          ['Fare boundary', 'The downtown free zone has defined limits. Check current Calgary Transit rules before assuming a transfer or a station outside that zone is free.'],
          ['Event and pathway conditions', 'Stampede, major events, smoke, hail and winter ice can change crowds or walking comfort. Use current city notices and let the indoor anchor replace, not crowd, an unsafe walk.']
        ]
      }),
      g({
        slug: 'drumheller-royal-tyrrell', name: 'Drumheller & Royal Tyrrell Museum', instrument: 'fossil field docket', layout: 'museum-zine',
        imageQuery: 'Drumheller Royal Tyrrell Museum dinosaur exhibit Alberta', imageAlt: 'Dinosaur displays inside the Royal Tyrrell Museum',
        searchKeywords: ['Royal Tyrrell Museum', 'timed entry', 'hoodoo', 'badlands', 'Drumheller'],
        summary: 'Make the Royal Tyrrell galleries the indoor anchor, then add one Drumheller valley stop. Timed museum entry, a vehicle or verified tour, and a local overnight turn the long Calgary drive into a workable day.',
        access: 'The museum sits 6 km northwest of Drumheller in Midland Provincial Park and is a day-use site with free parking. From Calgary, use a confirmed car or named tour; without a car, verify the coach terminal, operating date and the separate ride to the museum before booking.',
        tradeoff: 'The museum provides a substantial indoor visit; the valley adds exposed badlands scenery, hoodoos and local history. Trying to collect every viewpoint after the galleries turns the return to Calgary into a tiring night drive.',
        fallback: 'In heat, heavy rain, smoke or lightning, spend longer in the museum and skip exposed slopes. If the museum is closed or timed entry is unavailable, make a short, safe town visit or move the trip; a roadside viewpoint is not a substitute for the fossil galleries.',
        duration: 'Give the museum about two hours at minimum, plus entry time, meals and one outdoor stop. A full Calgary round trip is a long day; one Drumheller night lets you use cooler hours for the valley and avoids a rushed drive back.',
        combine: 'Pair this route with Calgary before or after. Dinosaur Provincial Park is about two hours farther south by road and should have a separate day and overnight near Brooks or the park.',
        verify: 'Prebook the Royal Tyrrell timed entry and check its exact seasonal hours, last ticket time and late-entry cutoff. Confirm the Calgary road, weather, local trail access and any coach or tour connection for your date.',
        stages: [
          ['Reserve the museum window', 'Choose a timed Royal Tyrrell entry before setting the drive. On the 12 October 2026 check, fall hours were Tuesday–Sunday 10 a.m.–5 p.m., last ticket time 3:30 p.m., with no entry after 4 p.m.; holiday Mondays can differ. Recheck the live calendar.'],
          ['Drive to Midland Provincial Park', 'The museum is 6 km northwest of Drumheller, with free parking and no overnight camping at the museum site. Allow about two hours for the galleries, then take a break before adding an outdoor walk.'],
          ['Read one piece of the valley', 'Choose one signed hoodoo walk, viewpoint or historic site that is open and comfortable in the forecast. Stay on designated access where required: soft slopes erode, and fossils and other natural material are protected.'],
          ['Sleep locally or return in daylight', 'A Drumheller night gives you a slower meal and a morning weather choice. If returning to Calgary, check road conditions and daylight before leaving; do not add the distant Dinosaur Provincial Park to this same day.']
        ],
        watch: [
          ['Timed-entry cutoff', 'A late arrival may not be admitted after the published cutoff. Leave Calgary with a road and parking margin, and check rebooking availability rather than assuming a ticket transfers.'],
          ['Heat on open slopes', 'Shade is scarce in exposed badlands. Carry water, protect against sun and shorten the walk during heat or high wind.'],
          ['Coach is not a local shuttle', 'A scheduled intercity coach does not automatically connect to the museum or valley stops. Confirm every leg and return before choosing a car-free itinerary.']
        ]
      }),
      g({
        slug: 'dinosaur-provincial-park', name: 'Dinosaur Provincial Park', instrument: 'geology access gate', layout: 'park-gate',
        imageQuery: 'Dinosaur Provincial Park Alberta badlands Red Deer River', imageAlt: 'Badlands in the Red Deer River valley at Dinosaur Provincial Park',
        searchKeywords: ['Brooks', 'guided fossil tours', 'campground', 'Scenic Loop Road', 'Red Deer River valley'],
        summary: 'Give this protected badlands landscape its own field day: it is about two hours from Drumheller and 48 km northeast of Brooks. Confirm road, tour, visitor-centre and seasonal campground details before leaving.',
        access: 'A vehicle or a named tour with confirmed return is the practical plan; do not assume regional transit reaches the park. Guided fossil experiences have separate reservations and weather rules. The campground is listed year-round, but services such as water change seasonally.',
        tradeoff: 'This is the field landscape and protected fossil context, not an extension of the Royal Tyrrell Museum visit. The southern location costs an overnight or a long return drive; sleeping near Brooks or the park makes an early tour and daylight return more realistic.',
        fallback: 'If heat, lightning, smoke, snow or a road warning makes field access unsafe, shorten to currently open visitor facilities and designated public routes only when conditions allow, or reschedule. Do not enter closed areas or use an unbooked backcountry route as a substitute.',
        duration: 'Reserve a full day in the area and at least one nearby night within a four-night regional loop. Guided programs set their own meeting time and may sell out; add a second night if you want a weather buffer or a less rushed drive from Drumheller.',
        combine: 'Combine with a southern Alberta road trip and an overnight near Brooks or the park. Drumheller is about two hours away, so visit it on a different day; do not attach Banff or a late Calgary return after the field program.',
        verify: 'Check Alberta Parks alerts, the public scenic loop and trail status, guided-tour booking, visitor-centre hours, campground services, Alberta 511 and the local forecast. The October 2026 centre schedule changed on 13 October; use the live page for future dates.',
        stages: [
          ['Book and check the southern leg', 'Before leaving Drumheller, confirm the park road, forecast, fuel, tour reservation and overnight address. The park is 48 km northeast of Brooks and about a two-hour drive from Drumheller; distances do not include stops or weather delays.'],
          ['Check the gate and visitor centre', 'On 12 October 2026, the visitor centre listed 9 a.m.–5 p.m. through that day; from 13 October to 20 December it listed weekday visits by appointment and weekend hours of 11 a.m.–4 p.m. Check the current notice before relying on interpretation or services.'],
          ['Choose one permitted field route', 'Use the public Scenic Loop Road, a signed public trail or a prebooked guided program. Guided tours can sell out and may be changed by weather. Fossils, plants, rocks and archaeological material are protected: leave finds in place and respect closed boundaries.'],
          ['Finish near the park', 'The campground was listed year-round, but Alberta Parks said water was shut off for the season on 5 October 2026; shower and dump-station service can also be limited. Confirm services before camping, or book near Brooks and leave the next road leg for daylight.']
        ],
        watch: [
          ['Exposed weather', 'The open badlands offer little shelter from lightning, heat, wind or sudden cold. Follow park warnings and stop field activity when conditions turn.'],
          ['Tour availability', 'A guided route is not a walk-up guarantee. Book through Alberta Parks and recheck meeting time, cancellation and weather terms before the drive.'],
          ['Seasonal services', 'Year-round campground status does not mean every service is operating. Verify water, washrooms, showers, dump station, visitor-centre access and road conditions for your exact night.']
        ]
      })
    ]
  })
];

const jasperIndex = canadaWestClusters.findIndex((cluster) => cluster.slug === 'jasper-icefields');
const jasperBase = canadaWestClusters[jasperIndex];
const jasperEditorial = [
  {
    summary: 'Walk Jasper’s central blocks and river edge as an arrival-scale loop, then give Maligne Valley a separate road day. Maligne Canyon and Maligne Lake are different choices; confirm the open status of each before setting out.',
    access: 'Jasper’s town centre is walkable. Maligne Lake is about 48 km from town by Maligne Road and needs a confirmed vehicle or named tour; Parks’ seasonal campground shuttle does not go there. Do not rely on an unverified local bus.',
    tradeoff: 'A town walk is flexible and low-commitment. Maligne Lake is a longer road day with optional seasonal boat tours; the canyon is a closer walking objective but its access can close independently. Choose by current access, weather and walking appetite.',
    fallback: 'If the lake road or weather is poor, keep the signed town walk, visitor centre and a currently open day-use path. If the canyon is closed, do not approach its barriers; choose an open river or valley path instead.',
    duration: 'Allow most of a day for Maligne Lake once the road, breaks, parking, walks and return are counted. A town loop can occupy two to three hours at an easy pace, then leave the afternoon open.',
    combine: 'Keep Maligne Valley separate from the Icefields Parkway. The through-valley driving and wildlife delays can use a full day even before a cruise; don’t stack the lake with the southbound falls.',
    verify: 'On 12 October 2026 Parks Canada listed Maligne Lake and Mary Schäffer day use open but Maligne Canyon closed. Recheck live closures, Maligne Road, weather, daylight and operator season. The 2026 cruise calendar ended 11 October; this is not a future guarantee.',
    stages: [
      ['Orient in town', 'Start at the Jasper Information Centre, check current notices and mark your lodging, food and fuel. Walk the central blocks toward the railway-station frontage, then follow a signed town path toward the Athabasca River and return before committing to a distant road.'],
      ['Choose one valley objective', 'For a Maligne Lake day, drive north on Maligne Road, allow a wildlife and parking margin, then use the Mary Schäffer shore area if open. The cruise is a separate seasonal timed product; confirm dates, check-in and independent road return before paying.'],
      ['Walk only the open path', 'Use signed public paths and current Parks status. Canyon bridges, stairs and gorge paths are not interchangeable with the lake shoreline; a closure at one site does not mean the other is accessible. Turn back at any barrier or icy section.'],
      ['Return to the base', 'Drive back to Jasper in daylight, stop only where legal and safe, and set the next morning’s fuel and weather decision. No-cell stretches mean downloaded directions and a person who knows your plan matter.']
    ],
    watch: [
      ['Recovery notices', 'The 12 October 2026 Parks snapshot listed Maligne Canyon closed while the lake area was open. Recovery work, fire impact and access can change independently by facility.'],
      ['Cruise season and booking', 'The operator listed 27 May–11 October 2026, weather dependent. That season is over on this report date. For a later trip, verify the next published calendar, ticket terms and your independent return transport; no fare or seat is promised here.'],
      ['Wildlife and no-cell road', 'Maligne Road passes through wildlife habitat with limited connectivity. Obey speed, stopping and closure notices, carry offline directions and leave extra daylight.']
    ],
    faq: [
      ['Can I reach Maligne Lake on the Jasper campground shuttle?', 'No route to Maligne Lake is listed on the Parks Canada campground shuttle page. That seasonal service has linked the two campgrounds with Jasper town, Pyramid Lake Lodge, Jasper Park Lodge and Lake Annette. Arrange a confirmed vehicle or named operator for the valley and check the Municipality transit page for its current local network.'],
      ['Can I visit Maligne Canyon and Maligne Lake in one day?', 'They are separate stops along the valley road, but the canyon was closed in the Parks Canada snapshot checked 12 October 2026. Even when both are open, decide whether the road, parking, walk and return fit daylight; don’t treat an operator cruise as your transport connection.'],
      ['Is a Maligne Lake cruise available in October?', 'The operator’s 2026 calendar listed the season through 11 October, weather dependent. Recheck a future season’s official calendar and your independent return transport before booking.']
    ]
  },
  {
    summary: 'Treat Highway 93 as a remote 232 km landscape road between Jasper and Lake Louise, not a quick transfer. Pick a fixed endpoint, a small number of stops, fuel and weather checks, and a daylight arrival before setting out.',
    access: 'The road links Jasper and Lake Louise; it has no continuous cell service and services are sparse. Parks Canada lists the Columbia Icefield Centre about 104 km south of Jasper and Saskatchewan River Crossing as the only Parkway fuel stop, operating in summer. There is no winter fuel or food service along the route.',
    tradeoff: 'A Jasper-to-Lake Louise through day works when you accept selected stops and a full road day. A return drive from Jasper should turn around near a planned point; the map distance omits parking, walks, weather and wildlife delays.',
    fallback: 'If Parks Canada, Alberta 511 or weather reports show a closure or unsafe conditions, stay in Jasper or use another open local day. Never attempt to recover missed stops after dark. In winter, do not assume the Parkway is a dependable through route.',
    duration: 'Reserve the whole day for a through drive with a few chosen stops, a timed glacier product or a longer walk. From Jasper, Athabasca Falls is 30 km south, Sunwapta Falls 54 km and the Icefield Centre 104 km; distances help set a turn-around, not predict arrival time.',
    combine: 'Use the Parkway as the transfer day between Jasper and Lake Louise or Banff, with lodging at the destination and a separate sightseeing buffer. Maligne Valley, Lake Louise shuttles and a long hike belong on other days.',
    verify: 'Check Parks Canada’s current road and closure pages, Alberta 511, fuel status, weather, daylight, winter equipment and exact operator terms. On 12 October 2026 the Icefield Centre information desk was listed closed and 2026 commercial product dates ended; access and availability change.',
    routeDiagram: { src: '/assets/images/tripdistill-canada-jasper-three-corridors.svg', alt: 'Not-to-scale diagram separating Jasper town, Maligne Valley and the southbound Icefields Parkway corridor', creator: 'TripDistill', source: 'https://tripdistill.com/assets/images/tripdistill-canada-jasper-three-corridors.svg', label: 'TripDistill original Jasper three-corridor planning diagram', assetType: 'original-planning-diagram', rightsStatus: 'Project original; no separate reuse license declared', rightsStatusUrl: 'https://tripdistill.com/terms-of-use/', inventoryStatus: 'used', editNote: 'Original vector planning diagram, not to scale, with a five-language legend.' },
    stages: [
      ['Jasper base · fuel and forecast', 'Begin in Jasper with fuel, drinking water, food and a live road check. Download directions before leaving cell service. Set Lake Louise or a nearer turnaround as the endpoint, and check whether lodging and any fixed booking fit a late arrival.'],
      ['Southbound · choose by distance', 'Athabasca Falls is 30 km from Jasper and has short paved paths, stairs and a bridge; spray can make them slippery. Sunwapta Falls is 54 km south, with short mostly paved paths and steeper sections. Stop only where parking and conditions permit.'],
      ['Icefield zone · optional booking', 'The Columbia Icefield Centre is 104 km from Jasper. Its information desk was listed closed in the 12 October 2026 status snapshot. Glacier and Skywalk products are independent timed visits; confirm the exact product, duration, ticket terms and return plan before building the day around it.'],
      ['Endpoint · preserve daylight', 'Before adding another overlook, compare remaining daylight, fatigue, road status and wildlife risk with the lodging check-in. If Lake Louise is the transfer destination, reach it; put extra sightseeing on a separate day.']
    ],
    watch: [
      ['Services and connectivity', 'Parks Canada describes the route as remote with limited services and no cell coverage. Saskatchewan River Crossing is the only fuel stop on the Parkway and is seasonal; fill up and carry food, water and offline directions before leaving Jasper.'],
      ['Season, snow and closures', 'Parks Canada describes winter conditions from early November to mid-June and seasonal maintenance. Its 2026 road notice says tentative dates can change without notice; check Alberta 511 and the live Parks restrictions before departure.'],
      ['Product dates are not a promise', 'The operator listed the Icefield Adventure and Skywalk 2026 season through 12 October, weather dependent. Ice Odyssey tours had ended earlier in September. No fare, departure, seat or future opening is guaranteed here.']
    ],
    faq: [
      ['How far is the Icefields Parkway?', 'Parks Canada describes a 232 km route between Jasper and Lake Louise. The distance is not a travel-time estimate: stops, wildlife, weather, road work, parking and walking change the day.'],
      ['Can I drive it in winter?', 'Road access and services change with weather and seasonal restrictions. Parks Canada lists no winter food or fuel along the Parkway and recommends checking its live road notices and Alberta 511. Do not assume an all-season through route.'],
      ['Can I add the glacier bus or Skywalk?', 'Only if the exact product is operating for your date and the booked duration fits the road and daylight plan. The operator’s 2026 calendar ended 12 October and weather could affect departures. Check current official terms; unknown fares and departures are not stated here.']
    ]
  },
  {
    summary: 'Make Athabasca and Sunwapta Falls a defined southbound day from Jasper: two named gorge walks with a clear return, not an unplanned attempt to reach the Columbia Icefield as well.',
    access: 'Both are reached from Highway 93 south of Jasper: Athabasca Falls is 30 km from town and Sunwapta Falls 54 km. Use a confirmed car or booked operator. Parks Canada’s campground shuttle is not a Parkway service; parking and road access depend on current notices.',
    tradeoff: 'The falls give a shorter southbound outing than a full Parkway transfer. Athabasca has paved paths, stairs and a bridge; Sunwapta has short mostly paved paths with steeper sections. Count the walk and safe return, not just roadside distance.',
    fallback: 'If spray, ice, trail work or weather makes a gorge path unsafe, use only a currently open level viewpoint or turn back. A Jasper town walk and visitor-centre stop make a coherent wet-weather day; do not add an unplanned drive toward the icefield.',
    duration: 'Plan a half to full day, depending on walking, stops and road conditions. Choose Athabasca as the single destination for a shorter outing; add Sunwapta only when current status, daylight and return fuel plan permit.',
    combine: 'Pair with a quiet Jasper evening or a town walk, not the Maligne Valley and a Lake Louise transfer. The Parkway beyond Sunwapta is a separate decision with its own fuel and daylight gate.',
    verify: 'The Parks Canada snapshot checked 12 October 2026 listed both falls open. Verify current road status, trail conditions, barriers, wildlife notices and weather. Wet spray, snow and freeze-thaw can make stairs, bridges and edges slippery.',
    stages: [
      ['Depart from Jasper', 'Check road and weather notices, fuel, water and daylight in town. Set Athabasca Falls as the minimum day and Sunwapta as an optional extension, not an assumed stop.'],
      ['Athabasca Falls · short gorge circuit', 'Follow signed visitor paths to marked viewpoints and the bridge only where open. Stay behind barriers: high water and the gorge edge are hazardous. Spray can make pavement slick even when the road is dry.'],
      ['Sunwapta Falls · decide at the junction', 'Continue 24 km south only if parking, weather, energy and daylight remain comfortable. Follow signed paths; the lower route is longer and not an automatic extension for every visitor.'],
      ['Turn back to Jasper', 'Return before fatigue and darkness rise. Don’t continue toward the Icefield Centre just because it is the next name on the map; check in with lodging and the next day’s forecast.']
    ],
    watch: [
      ['Waterfall edges', 'Powerful water, steep banks and barriers make off-path photos dangerous. Use signed viewpoints and obey temporary closure signs.'],
      ['Spray, ice and steps', 'Athabasca Falls includes stairs and a bridge; wet or frozen surfaces need cautious footing. Shorten the visit if conditions are slick.'],
      ['Road and service gap', 'Cell coverage and services are limited. Check road status before leaving Jasper, carry what you need and keep enough fuel to return.']
    ],
    faq: [
      ['How far are the falls from Jasper?', 'Parks Canada lists Athabasca Falls 30 km and Sunwapta Falls 54 km south of Jasper. These are road distances, not arrival guarantees; weather, wildlife, parking and walking add time.'],
      ['Are both waterfalls open?', 'The Parks Canada status page checked 12 October 2026 listed both open. That snapshot can change; check live closures and trail conditions before driving.'],
      ['Can I visit the falls and the Columbia Icefield the same day?', 'It may be possible on a through trip with a fixed endpoint, but that is a full Parkway day. On a Jasper return outing, use a deliberate turnaround and do not add the Icefield Centre, commercial tour or Lake Louise without checking distance, availability and daylight.']
    ]
  }
];
const jasperCluster = defineCanadaCluster({
  ...jasperBase,
  firstVisitPlan: {
    heading: 'Four nights, one base, three separate road decisions',
    intro: 'Book a Jasper town bed first if walkable food and evening flexibility matter. Compare a central hotel or guesthouse with a campground: the campground needs a confirmed shuttle or vehicle plan, while a town stay does not solve the out-of-town roads.',
    days: [
      ['Arrival · Jasper town on foot', 'Check in, get groceries and fuel, then walk the signed town-centre blocks and a short river path. Ask the visitor centre about current closures before choosing tomorrow’s corridor.'],
      ['Maligne Valley · one objective', 'Choose Maligne Lake or another currently open Maligne stop, not a full lake-and-canyon checklist. Drive or book a named operator; the local campground shuttle does not reach the valley. Book a seasonal cruise only after confirming dates, weather policy and return transport.'],
      ['South · falls or Parkway segment', 'Use Athabasca Falls (30 km south of Jasper) and Sunwapta Falls (54 km) as a controlled out-and-back. Keep spray-side paths short if slippery. Do not let the shorter choice expand toward the icefield without rechecking daylight and fuel.'],
      ['Parkway · through day or reserve day', 'For Jasper–Lake Louise, start with fuel, water, food, road and weather checks; select a few stops and protect an arrival before dark. If the highway is unsuitable, use this as a second Jasper-area day. Add a Lake Louise overnight when the onward connection is fixed.']
    ]
  },
  faq: [
    ['How many nights should I stay in Jasper?', 'Four nights give a first visit an arrival and town day, a Maligne day, a southbound falls day and a full Parkway day or weather buffer. Five nights separate the two longer road outings. A Lake Louise overnight can make sense when the Parkway is your onward transfer.'],
    ['Can I use local transit for the park?', 'The Parks Canada campground shuttle has served Jasper town, Whistlers and Wapiti campgrounds, Pyramid Lake Lodge, Jasper Park Lodge and Lake Annette on seasonal routes. It is not a Maligne Valley or Icefields Parkway service. Check the Municipality transit schedule for current local stops and times.'],
    ['What if the Parkway or a trail is closed?', 'Keep a Jasper town and valley day in reserve, check current open day-use areas and follow closure barriers. Do not drive after dark to make up a missed stop.']
  ],
  sources: [
    ['https://parks.canada.ca/pn-np/ab/jasper', 'Parks Canada — Jasper National Park and current visitor notices'],
    ['https://parks.canada.ca/pn-np/ab/jasper/visit', 'Parks Canada — Jasper visit planning'],
    ['https://parks.canada.ca/pn-np/ab/jasper/visit/transit', 'Parks Canada — Jasper seasonal campground shuttle'],
    ['https://parks.canada.ca/pn-np/ab/jasper/visit/ouvert-fermee-open-closed', 'Parks Canada — what is open and closed'],
    ['https://parks.canada.ca/pn-np/ab/jasper/visit/routes-roads', 'Parks Canada — Jasper road restrictions and seasonal closures'],
    ['https://parks.canada.ca/pn-np/ab/jasper/activ/itineraires-itineraries/promenadedesglaciers-icefieldsparkway', 'Parks Canada — travelling the Icefields Parkway'],
    ['https://parks.canada.ca/pn-np/ab/jasper/securite-safety/enviro', 'Parks Canada — Jasper weather, wildlife and safety'],
    ['https://www.jasper-alberta.ca/p/transit', 'Municipality of Jasper — transit information and current route map'],
    ['https://www.banffjaspercollection.com/attractions/maligne-lake-cruise/', 'Maligne Lake Cruise — seasonal operator dates and booking terms'],
    ['https://www.banffjaspercollection.com/attractions/columbia-icefield-adventure/', 'Columbia Icefield Adventure — seasonal operator dates and booking terms']
  ],
  guides: jasperBase.guides.map((guide, index) => ({ ...guide, ...jasperEditorial[index] }))
});
canadaWestClusters[jasperIndex] = jasperCluster;
