import { defineVietnamCluster, image } from './vietnam-guide-builder.mjs';

export const vietnamNorthClusters = [
  {
    slug: 'hanoi',
    name: 'Hanoi',
    region: 'Northern Vietnam',
    family: 'urban-heritage',
    label: 'CAPITAL / LAKES / ARCHIVES',
    tagline: 'Read Hanoi through lakes, lanes, archives and civic memory.',
    hubIntro: 'Hanoi rewards a layered plan. The Old Quarter is a working urban fabric rather than a museum set, while lakes, colonial institutions, royal archaeology and river infrastructure each need a different pace. Use one central base, separate solemn sites from nightlife, and let these six chapters turn a crowded capital into a sequence that can actually be walked.',
    stay: 'Stay near a practical Hoan Kiem or Ba Dinh transport link, but choose a quiet side street with dependable late-night pickup. Confirm elevator access, luggage drop-off and the exact hotel pin before assuming a narrow historic lane is vehicle-friendly.',
    transfer: 'Noi Bai Airport is outside the central districts and traffic can make a short map distance unreliable. Save the Vietnamese address, book a reputable transfer or ride-hailing pickup, and leave a defensive buffer before trains, timed museum entries or evening performances.',
    sources: [
      ['https://vietnam.travel/places-to-go/northern-vietnam/ha-noi', 'Vietnam Tourism — Ha Noi'],
      ['https://www.vietnam.travel/things-to-do/explore-old-quarter-your-way', 'Vietnam Tourism — Explore the Old Quarter'],
      ['https://whc.unesco.org/en/list/1328/', 'UNESCO — Central Sector of the Imperial Citadel of Thang Long'],
      ['https://hanoi.gov.vn/di-tich-danh-thang', 'Hanoi People’s Committee — heritage and scenic sites'],
      ['https://sovhtt.hanoi.gov.vn/en/temple-literature-quoc-tu-giam-relic-deploys-electronic-ticket-system-digital-conversion-tourism-activities/', 'Hanoi Culture and Sport — Temple of Literature visitor information']
    ],
    guides: [
      {
        slug: 'hoan-kiem-old-quarter',
        name: 'Hoan Kiem Lake and the Old Quarter',
        motif: 'lane-to-lake orientation',
        instrument: 'axis',
        image: image({ src: '/assets/images/vietnam-hanoi-hoan-kiem.webp', alt: 'Hoan Kiem Lake at the heart of Hanoi', source: 'https://commons.wikimedia.org/wiki/File:Ho_Hoan_Kiem.jpg', label: 'Ho Hoan Kiem.jpg', creator: 'Trung geo', license: 'Public domain' }),
        summary: 'A first-day walking chapter linking Hoan Kiem Lake, the Old Quarter’s guild streets, street food and the practical rhythm of central Hanoi.',
        lead: 'Begin with the lake as a compass, then let the 36 guild streets become a lived neighborhood rather than a checklist. The best version leaves room for a quiet temple courtyard, a coffee pause and the small negotiations that make the center legible.',
        orientation: 'Use Hoan Kiem Lake to establish north, south and the pedestrian edge. Select two or three named lanes instead of trying to cover every street, and separate the crowded commercial core from the calmer lake loop.',
        arrival: 'Arrive at the edge of the district by ride-hailing drop-off or bus, then walk. Weekend pedestrian controls, road restrictions, construction and temporary events change, so confirm the current access pattern before choosing a vehicle pickup point.',
        sequence: 'Lake loop first, Old Quarter lanes second, one cultural stop third, and a food or café pause last. This order keeps orientation and observation ahead of shopping pressure.',
        boundary: 'Do not present the Old Quarter as a preserved theme park. It is a residential and commercial area where doorways, deliveries, worship and ordinary work have priority.',
        stages: [
          ['Find the lake edge', 'Use Hoan Kiem Lake to settle your bearings and notice how the open water, tree cover and civic paths contrast with the dense blocks immediately north.'],
          ['Choose a guild-street thread', 'Follow a short line through streets associated with metalwork, silk, paper or medicine, but read present-day commerce as well as historical names.'],
          ['Make one respectful pause', 'Visit a temple, communal house or small heritage interior only through its public entrance, keeping voice, clothing and camera use appropriate.'],
          ['Exit before fatigue wins', 'Leave through a known taxi or walking edge, carrying a saved address and a low-pressure meal plan rather than continuing into unsafe traffic after dark.']
        ],
        risks: [
          ['Traffic crossings', 'Scooters move continuously around narrow lanes. Cross steadily at visible points, keep children close and never step backward into the road while photographing.'],
          ['Crowd and theft', 'Dense market streets reward a closed bag and a phone kept away from the roadway. Avoid displaying cash during bargaining or blocking shop thresholds.'],
          ['Changing access', 'Pedestrian hours, temporary barriers and event closures are not permanent. Verify the day’s restrictions and meeting point before booking a car.']
        ],
        duration: 'Allow a relaxed half day; a full day is better when adding a museum or a longer food walk.',
        combine: 'Combine with the French Quarter for a city-center day, or with Ba Dinh only if the solemn sites receive their own unhurried window.',
        verify: 'Check pedestrian-zone notices, attraction entry rules, weather, the return pickup point and whether any planned street or temple is temporarily closed.'
      },
      {
        slug: 'ba-dinh-thang-long',
        name: 'Ba Dinh and Thang Long Imperial Citadel',
        motif: 'civic power and archaeological strata',
        instrument: 'section',
        image: image({ src: '/assets/images/vietnam-hanoi-ba-dinh.webp', alt: 'Ho Chi Minh Mausoleum and the Ba Dinh civic axis in Hanoi', source: 'https://commons.wikimedia.org/wiki/File:Ho_Chi_Minh_Mausoleum_in_Hanoi.jpg', label: 'Ho Chi Minh Mausoleum in Hanoi.jpg', creator: 'Christophe95', license: 'CC BY-SA 4.0' }),
        summary: 'A respectful history route across Ba Dinh’s civic landmarks and the UNESCO-listed Imperial Citadel of Thang Long.',
        lead: 'This is a route about public memory and long continuity, not a quick sequence of photo stops. Pair the open Ba Dinh axis with the citadel’s archaeological layers, and allow security, walking distances and the emotional tone of each place to shape the day.',
        orientation: 'Treat Ba Dinh Square, the mausoleum precinct and Thang Long as related but distinct places. The citadel’s 1,300-year political sequence is best understood through its gates, archaeological site and surviving monuments.',
        arrival: 'Use a vehicle drop-off at the currently permitted perimeter, then walk between controlled entrances. The mausoleum and citadel may use different opening calendars, queues and security rules.',
        sequence: 'Start with the site whose official access window is most constrained, continue through the citadel while attention is fresh, and finish in a shaded café or museum rather than adding another distant monument.',
        boundary: 'Ba Dinh is an active civic and memorial area: follow guards’ directions and posted photography limits. Within the citadel, keep to signed paths around the excavations and do not climb or touch monuments.',
        stages: [
          ['Read the civic axis', 'Observe the scale, ceremonial geometry and security presence around Ba Dinh without treating a working national site as a backdrop.'],
          ['Enter the citadel', 'Use the official gate and map to connect Doan Mon, the flag tower, Kinh Thien remains and the archaeological evidence at 18 Hoang Dieu.'],
          ['Slow down for memory', 'Keep the mausoleum and memorial spaces quiet, follow posted photography rules and leave room for visitors who are there for personal or national reasons.'],
          ['Close with context', 'Use an official exhibition, guide or reading stop to connect the archaeological and modern layers before returning to the hotel.']
        ],
        risks: [
          ['Security and closure', 'Ceremonies, official activity and maintenance can change access at short notice. Follow guards and use only current entrances.'],
          ['Heat and distance', 'Large open compounds expose visitors to sun and long walks. Carry water, plan shade and avoid promising a flat or fully accessible route.'],
          ['Conduct rules', 'Dress conservatively, keep voices low and never photograph a restricted area. Do not climb, touch relics or improvise a ceremony photo.']
        ],
        duration: 'Plan most of a day if combining the mausoleum precinct and the citadel with enough time for interpretation.',
        combine: 'Combine with Van Mieu for a history-heavy day only when the group can maintain a quiet pace; otherwise keep Ba Dinh as its own chapter.',
        verify: 'Confirm the mausoleum calendar, citadel ticket and entry rules, restricted photography notices, weather and the latest security perimeter.'
      },
      {
        slug: 'west-lake-truc-bach',
        name: 'West Lake and Truc Bach',
        motif: 'waterline and neighborhood pause',
        instrument: 'tide',
        reviewDate: '12 October 2026',
        isoDate: '2026-10-12',
        image: image({ src: '/assets/images/vietnam-hanoi-west-lake.webp', alt: 'West Lake in Hanoi under an open sky', source: 'https://commons.wikimedia.org/wiki/File:Hanoi%2C_Vietnam%2C_West_Lake.jpg', label: 'Hanoi, Vietnam, West Lake.jpg', creator: 'Vyacheslav Argenberg', license: 'CC BY 4.0' }),
        summary: 'Walk a short, daylight route from Tran Quoc Pagoda across the Thanh Nien hinge to Truc Bach and Ngu Xa, with a vehicle bridge for broken lakeside sidewalks.',
        lead: 'Treat West Lake and Trúc Bạch as two nearby waterside neighborhoods joined by Thanh Niên, not as one continuous promenade. A useful half-day starts at the public entrance to Trấn Quốc Pagoda, crosses only where the street layout allows a safe crossing, then takes a short public stretch on Trúc Bạch or Ngũ Xã for a meal. Save the exact drop-off and a second vehicle pickup before leaving the hotel; the return point matters more than tracing a full lakeside loop.',
        orientation: 'Thanh Niên separates Trúc Bạch from West Lake and carries fast traffic. Tran Quoc faces the larger lake; the Trúc Bạch and Ngũ Xã lanes are the neighborhood-scale finish. Map the entrance and a legal vehicle pickup as two different pins. A waterfront-looking map line may end at a wall, hotel or private edge rather than a public path.',
        arrival: 'Use a licensed taxi or a ride-hailing car to reach the pagoda’s currently permitted public entrance, then save the driver or a second pickup on a named, vehicle-accessible street near the meal stop. Confirm the destination pin with the driver before getting out. There is no reliable promise of a continuous pedestrian route between every lakeside segment, and a car may not be able to wait at the temple gate.',
        sequence: 'Go in daylight: check the pagoda’s current visitor notice, walk its public grounds if open, cross Thanh Niên only at a safe available crossing, and choose one short Trúc Bạch or Ngũ Xã street stretch for food. End at the agreed pickup. Leave the open water edge for settled, dry weather; storms, heat or poor evening lighting are reasons to shorten the walk, not to keep circling.',
        boundary: 'Keep lakeside leisure distinct from religious space. A scenic water view does not grant permission to enter a courtyard, photograph worship or lean over private property.',
        sources: [
          ['https://hanoi.gov.vn/di-tich-danh-thang', 'Hanoi People’s Committee — heritage sites and scenic places'],
          ['https://sovhtt.hanoi.gov.vn/en/developing-the-cultural-space-of-west-lake-for-residents-and-tourists/', 'Hanoi Department of Culture and Sports — West Lake cultural-space planning'],
          ['https://english.hanoi.gov.vn/department-commune-and-ward-news/hanoi-tourism-welcomes-2026-get-on-hanoi-program-launched-2655260203010101551.htm', 'Hanoi People’s Committee — 2026 Trúc Bạch itinerary announcement'],
          ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — current forecasts and warnings']
        ],
        routeDiagram: {
          kind: 'flow',
          title: 'A short water-to-neighborhood walk',
          intro: 'Use a car to bridge any unsafe or private gap; this is not a full West Lake circuit.',
          steps: [
            ['Start · daylight', 'Tran Quoc public entrance', 'Check today’s visitor access first; keep the pagoda visit quiet and follow posted rules.'],
            ['Cross · only when safe', 'Thanh Nien hinge', 'Use a safe available crossing. If the gap does not feel walkable, ride to the next segment.'],
            ['Pause · Truc Bach', 'Choose one public street', 'Walk a short Trúc Bạch or Ngũ Xã stretch and check meal hours before setting out.'],
            ['Exit · before dark', 'Meet the saved pickup', 'Use the named public street and avoid an improvised lakeside pickup after rain or at night.']
          ],
          fallbackTitle: 'When the edge is uncomfortable',
          fallback: 'Skip the exposed waterline in heat, heavy rain or poor light. Keep the pagoda only if it is open, then ride to a confirmed meal and pickup point.'
        },
        stages: [
          ['Fix the two vehicle points', 'Save the permitted Tran Quoc entrance and a separate pickup on a public street near Truc Bach or Ngu Xa. Check that each pin is reachable by car.'],
          ['Read the lake-side boundary', 'Walk from the public pagoda entrance only if current visitor access allows it. Keep voices low, follow clothing and camera rules, and do not enter a closed courtyard.'],
          ['Cross to the neighborhood', 'Use a safe available crossing on Thanh Nien; if traffic or sidewalk gaps make the connection uncertain, ask the driver to bridge it rather than crossing informally.'],
          ['Finish with a known return', 'Choose one short public street and a meal whose hours you checked. Leave before darkness or an incoming storm makes the exposed edge harder to navigate.']
        ],
        risks: [
          ['Crossing traffic', 'Thanh Nien and the adjoining junctions are active roads, not a plaza. Never follow a map line through moving traffic; ride between segments when a safe crossing is not clear.'],
          ['Closed or private edges', 'Shoreline paths and venue gates can change. Do not enter resort grounds, unstable banks or a pagoda area that is closed to visitors.'],
          ['Rain, heat and low light', 'The water edge has little shelter and wet paving can be slick. Move to an indoor meal or return by car when lightning, heavy rain or darkness arrives.']
        ],
        duration: 'Allow three to four hours for the pagoda, one short neighborhood walk and a meal, plus the two vehicle transfers. Add a separate half-day for the French Quarter rather than combining both into a long walk.',
        combine: 'For a longer day, pair this with the French Quarter as a second, vehicle-linked district. Do not promise a continuous walk around the lake or add the full Old Quarter circuit without another break.',
        verify: 'Check the pagoda’s current opening and visitor rules, the day’s forecast and event notices, a safe crossing, road access at both saved pins, and the meal venue’s hours.'
      },
      {
        slug: 'french-quarter-opera-house',
        name: 'French Quarter and Hanoi Opera House',
        motif: 'colonial facade to performance room',
        instrument: 'zine',
        image: image({ src: '/assets/images/vietnam-hanoi-french-quarter.webp', alt: 'Hanoi Opera House in the French Quarter', source: 'https://commons.wikimedia.org/wiki/File:Hanoi_-_Opera_House_02.jpg', label: 'Hanoi - Opera House 02.jpg', creator: 'P. Hughes', license: 'CC BY 4.0' }),
        summary: 'A compact architecture and performance chapter through the French Quarter, Opera House surroundings and nearby cultural institutions.',
        lead: 'The French Quarter works best when read as a civic network rather than a collection of yellow façades. Pair the Opera House with one museum or public building, then leave time to notice how embassies, hotels, shops and traffic occupy the same historic grid.',
        orientation: 'Anchor the route at the Opera House and walk a short loop through Trang Tien and adjacent streets. Select a named interior only after confirming its visitor policy or performance ticket.',
        arrival: 'Walk or use a drop-off at the perimeter because one-way streets and limited curb space make last-minute parking unreliable. Event traffic can change the most direct approach.',
        sequence: 'Read exterior architecture in daylight, enter one official cultural venue, and reserve a performance or evening meal only after confirming the route home.',
        boundary: 'Do not imply every colonial building is publicly visitable. Respect residences, embassies, hotels, guards and no-entry signs.',
        stages: [
          ['Map the civic grid', 'Start with the Opera House and identify streets, gardens and institutions that reveal the quarter’s administrative and cultural role.'],
          ['Choose one interior', 'Use a museum, exhibition or official performance venue to give the architecture an institutional context.'],
          ['Read the street edge', 'Notice shopfronts, shade, traffic and restored façades without trespassing into private buildings or turning workers into props.'],
          ['Plan the return', 'Confirm the event end, pickup side and weather before committing to a late performance or a long walk back.']
        ],
        risks: [
          ['Event variability', 'Performances, rehearsals, ticket systems and museum hours change. Use the venue’s current official notice rather than an old listing.'],
          ['Roadside exposure', 'Traffic and limited sidewalks make some crossings uncomfortable. Use visible crossings and avoid stopping in curb lanes for photographs.'],
          ['Access assumptions', 'Historic buildings may lack lifts or have controlled entrances. Check mobility details before promising a step-free cultural route.']
        ],
        duration: 'Allow a focused half day; reserve a full evening only when a confirmed performance adds genuine value.',
        combine: 'Combine with Hoan Kiem for a central architecture day, or with a museum in the Van Mieu circuit when the group wants more indoor context.',
        verify: 'Confirm current performance tickets, venue entry, dress rules, street closures, accessibility and a safe evening transfer.'
      },
      {
        slug: 'long-bien-red-river',
        name: 'Long Bien Bridge and the Red River Edge',
        motif: 'rail, market and river infrastructure',
        instrument: 'ledger',
        image: image({ src: '/assets/images/vietnam-hanoi-long-bien.webp', alt: 'Long Bien Bridge crossing the Red River in Hanoi', source: 'https://commons.wikimedia.org/wiki/File:Long_Bi%C3%AAn_Bridge%2C_Hanoi%2C_Vietnam_%2828240783342%29.jpg', label: 'Long Biên Bridge, Hanoi, Vietnam (28240783342).jpg', creator: 'cloud.shepherd', license: 'CC BY 2.0' }),
        summary: 'A morning-to-afternoon infrastructure route combining Long Bien Bridge, river views and market life with clear rail and river boundaries.',
        lead: 'Long Bien is most interesting when the bridge is treated as working infrastructure. The railway, scooters, pedestrians, agriculture and riverbank trade occupy different layers; the route should make those boundaries visible instead of encouraging risky imitation of a photograph.',
        orientation: 'Use the bridge as a north–south reference and choose either a bridge observation walk or a legal riverbank segment. The two experiences are related but not interchangeable.',
        arrival: 'Approach from a known bridge end by taxi or ride-hailing, then use only the pedestrian space. Riverbank paths may be muddy, informal or inaccessible after rain.',
        sequence: 'Observe the bridge from a safe edge, move to a permitted market or neighborhood viewpoint, and return before low light makes the riverbank and traffic harder to read.',
        boundary: 'Never turn the active railway into a walking attraction. The bridge’s historic value does not suspend present-day rail operations or worker safety.',
        stages: [
          ['Read the structure', 'Watch how rail, motorbike and pedestrian flows share the bridge without stepping into an active lane.'],
          ['Choose a legal viewpoint', 'Use a public edge or marked access point for photographs; do not climb beams, barriers or railway approaches.'],
          ['Enter market life lightly', 'Ask before photographing vendors, keep aisles clear and remember that early trade is work rather than staged entertainment.'],
          ['Return defensively', 'Leave the river edge before darkness or heavy rain and keep the saved bridge-end address for the pickup.']
        ],
        risks: [
          ['Active railway', 'Trains and motorcycles use the bridge. Stay off tracks and maintenance areas, and follow any official barrier or worker instruction.'],
          ['Riverbank footing', 'Unmarked paths become slippery or flooded after rain. Wear shoes with grip and skip a section when the surface is unstable.'],
          ['Market privacy', 'People may be working under time pressure. Ask before portraits, do not obstruct carts and avoid filming private transactions.']
        ],
        duration: 'Allow three to four hours in daylight; add a separate transfer buffer for any riverbank segment.',
        combine: 'Combine with the Old Quarter only as a two-part urban day with a real transfer break, not as one continuous walk.',
        verify: 'Check bridge safety notices, weather, market conditions, legal public access and the exact vehicle pickup side.'
      },
      {
        slug: 'van-mieu-museum-quarter',
        name: 'Van Mieu and the Museum Quarter',
        motif: 'scholarship, objects and quiet courtyards',
        instrument: 'docket',
        image: image({ src: '/assets/images/vietnam-hanoi-van-mieu.webp', alt: 'The main entrance of Hanoi Temple of Literature', source: 'https://commons.wikimedia.org/wiki/File:Hanoi_Temple_of_Literature.jpg', label: 'Hanoi Temple of Literature.jpg', creator: 'Chuoibk at English Wikipedia', license: 'CC BY-SA 3.0' }),
        summary: 'A cultural education route pairing Van Mieu–Quoc Tu Giam with one or two nearby museums and a deliberately quiet reading pace.',
        lead: 'The Temple of Literature is more than a photogenic gate. Its courtyards, stelae and educational history need room to be read, while nearby museums can supply material, military, artistic or ethnographic context. Choose one interpretive thread instead of collecting every institution.',
        orientation: 'Use the temple as the anchor and select a museum by subject, opening calendar and walking distance. Keep the route legible for visitors who need shade, seating or shorter indoor intervals.',
        arrival: 'Arrive at the official entrance with tickets or reservation details ready. The surrounding roads are busy and museum opening days differ, so do not assume a same-day bundle is always possible.',
        sequence: 'Visit the temple before the hottest part of the day, take a shaded break, then choose one museum and finish with a short neighborhood walk.',
        boundary: 'Treat the site as an active cultural and religious place. Do not touch stelae, climb structures, interrupt worship or stage portraits that disrespect the setting.',
        stages: [
          ['Enter through the record', 'Begin at the public gate and use the courtyards to understand the relationship between scholarship, ritual and architecture.'],
          ['Read the stelae carefully', 'Keep a respectful distance from the stone turtles and inscriptions, and use official interpretation rather than inventing a symbolic caption.'],
          ['Choose one museum lens', 'A focused museum visit gives the temple a wider cultural context without turning the day into a race through unrelated collections.'],
          ['Leave with quiet time', 'End in a shaded café or book street and keep the return route simple after a long indoor and outdoor day.']
        ],
        risks: [
          ['Heat and queues', 'Stone courtyards retain heat and entry lines can grow. Carry water, use shade and avoid promising a fast visit.'],
          ['Heritage contact', 'Do not lean on, touch or climb historic objects. Follow barriers and staff instructions even when a photograph looks better from inside the boundary.'],
          ['Calendar mismatch', 'Electronic ticketing and museum hours vary by institution. Confirm each venue separately instead of relying on a general district schedule.']
        ],
        duration: 'Allow three to five hours for Van Mieu plus one museum; a fuller museum circuit deserves a separate day.',
        combine: 'Combine with Ba Dinh for a historical axis, but keep the solemn civic sites and the scholarly courtyards distinct in the copy and pacing.',
        verify: 'Check Van Mieu entry policy, museum calendars, photography restrictions, shade and seating, and the current road route.'
      }
    ]
  },
  {
    slug: 'sapa-northwest-highlands',
    name: 'Sapa and the Northwest Highlands',
    region: 'Northwest Vietnam',
    family: 'highland-culture',
    label: 'TERRACES / CLOUDS / VILLAGES',
    tagline: 'Move between mountain weather, living terraces and highland markets.',
    hubIntro: 'Sapa is a mountain base, not a single viewpoint. The town, Fansipan, Muong Hoa villages, Cat Cat, the Ô Quy Hồ corridor and Bac Ha each demand a different balance of altitude, weather, community access and road time. Build around daylight and current conditions, then let the landscape and local hosts set the pace.',
    stay: 'Use central Sapa for transport convenience or a quieter valley base for village access, but verify the road, stairs, vehicle approach and late-night lighting. Homestays require more cultural consideration than a standard hotel booking.',
    transfer: 'Lao Cai rail or road arrivals still require a separate mountain transfer to Sapa. Fog, rain and traffic can stretch the final section; save the accommodation address in Vietnamese and avoid placing a timed mountain activity immediately after arrival.',
    sources: [
      ['https://www.vietnam.travel/places-to-go/northern-vietnam/sapa', 'Vietnam Tourism — Sapa'],
      ['https://sapa-tourism.com/muong-hoa-valley-and-sa-pa-terraced-rice-field-landscapes/', 'Sapa Tourism Office — Muong Hoa Valley and rice terraces'],
      ['https://hoanglienpark.com/', 'Hoang Lien National Park Tourism and Conservation Center'],
      ['https://sunworld.vn/en', 'Sun World Fansipan Legend — official visitor information'],
      ['https://csdl.vietnamtourism.gov.vn/dest/?item=64', 'Vietnam National Tourism Database — Hoang Lien National Park']
    ],
    guides: [
      {
        slug: 'town-ham-rong',
        name: 'Sapa Town and Ham Rong',
        motif: 'mountain town orientation',
        instrument: 'zine',
        image: image({ src: '/assets/images/vietnam-sapa-town.webp', alt: 'Stone church and town center of Sapa', source: 'https://commons.wikimedia.org/wiki/File:Sapa_Church.jpg', label: 'Sapa Church.jpg', creator: 'Christophe95', license: 'CC BY-SA 4.0' }),
        summary: 'A practical first chapter through Sapa town, the stone church, central lanes and Ham Rong’s elevated viewpoints.',
        lead: 'Sapa town is where most highland plans begin, but its steep streets and intense visitor pressure can hide the mountain geography. Use the center to understand weather, transport and supplies before choosing a hill or valley route.',
        orientation: 'Treat the church and central square as the town’s anchor, then choose Ham Rong only if stairs and weather suit the group. Keep market browsing and viewpoint climbing as separate blocks.',
        arrival: 'Arrive with luggage at a confirmed vehicle-accessible point; many central lanes and hotels require a final walk or stairs. Do not assume a coach can reach the hotel door.',
        sequence: 'Settle supplies first, walk the central landmarks, then climb Ham Rong in a clear weather window and return before fog or rain erases the descent.',
        boundary: 'Sapa’s tourist center is not a substitute for visiting surrounding communities. Avoid reducing ethnic identity to costumes or unsolicited portraits.',
        stages: [
          ['Settle the base', 'Confirm the hotel approach, weather layer, cash, water and next-day transport before climbing any hill.'],
          ['Read the town', 'Use the church, market edges and side streets to observe the transition between a mountain service town and a tourism economy.'],
          ['Choose the hill', 'Enter Ham Rong only through the current managed access and pace the stairs for the least mobile member of the group.'],
          ['Return before weather closes', 'Descend while surfaces remain visible, then move to a warm indoor stop rather than forcing a sunset view in cloud or rain.']
        ],
        risks: [
          ['Steep surfaces', 'Stone stairs and wet paving become slippery quickly. Wear shoes with grip and do not let a viewpoint photo dictate the route.'],
          ['Weather exposure', 'Temperature and visibility can change within minutes. Carry a waterproof layer even on a bright morning.'],
          ['Commercial pressure', 'Be clear and polite with vendors, agree prices before buying and never use children or residents as unasked-for subjects.']
        ],
        duration: 'Allow a half day for town orientation and Ham Rong; keep the full day open when weather is unsettled.',
        combine: 'Combine with an early Fansipan departure only when the town chapter is shortened; otherwise let it be the arrival or recovery day.',
        verify: 'Check current hill access, weather, stair conditions, hotel vehicle access and local market arrangements.'
      },
      {
        slug: 'fansipan-summit',
        name: 'Fansipan Summit',
        motif: 'altitude and engineered ascent',
        instrument: 'contour',
        image: image({ src: '/assets/images/vietnam-sapa-fansipan.webp', alt: 'Fansipan cable car above Sapa and the Hoang Lien mountains', source: 'https://commons.wikimedia.org/wiki/File:Fansipan_Cable_Car_and_Sa_Pa.jpg', label: 'Fansipan Cable Car and Sa Pa.jpg', creator: 'Christophe95', license: 'CC BY-SA 4.0', editNote: 'Resized, display-cropped and converted to WebP; no other material edits. The adapted image remains available under CC BY-SA 4.0.' }),
        summary: 'A planning guide for comparing the Fansipan cable car, funicular connections and permitted trekking while respecting altitude and mountain weather.',
        lead: 'Fansipan can be physically accessible through modern transport while remaining a serious high-altitude environment. The useful decision is not simply cable car versus trek; it is how much cold, wind, elevation gain and weather exposure the group can responsibly absorb.',
        orientation: 'Separate Sapa station logistics, the mountain transport sequence and the summit complex. A clear day at town level does not guarantee visibility or operating conditions at the top.',
        arrival: 'Use the official Sun World station and current ticket interface. Cable car, funicular and summit services can have different operating windows or closures.',
        sequence: 'Check the mountain forecast, start with the most time-sensitive transport leg, acclimatize at each elevation change and keep a warm, low-effort exit plan.',
        boundary: 'Do not call a cable-car visit a trek, and do not encourage visitors to leave marked paths or spiritual structures for a more dramatic photograph.',
        stages: [
          ['Read the conditions', 'Compare wind, cloud, temperature and visibility at elevation before committing to the summit.'],
          ['Solve the station chain', 'Confirm the Sapa station, transfer, ticket type and last return before entering the mountain system.'],
          ['Pace the summit', 'Move slowly, use layers and respect the spiritual complex, viewpoints and barriers as managed places.'],
          ['Protect the descent', 'Keep the final return earlier than the theoretical last service and switch to a town-based plan if weather deteriorates.']
        ],
        risks: [
          ['Altitude and cold', 'Headache, dizziness and rapid cooling can affect visitors even when the valley feels warm. Stop, warm up and descend when needed.'],
          ['Wind and lightning', 'Cable cars and summit paths may close during strong wind or storms. Never treat a ticket as a guarantee of operation.'],
          ['Route separation', 'Trekking and transport use different fitness, permit and guide assumptions. Confirm the exact product rather than blending them in copy.']
        ],
        duration: 'Allow most of a day for the summit transport chain; a genuine trek needs a separate, permit-aware itinerary.',
        combine: 'Combine with Sapa Town only as a light evening before or after the mountain; pair with Muong Hoa on a different day.',
        verify: 'Check official operating status, weather at altitude, ticket inclusions, last return service, clothing and trekking permissions.'
      },
      {
        slug: 'muong-hoa-lao-chai-ta-van',
        name: 'Muong Hoa, Lao Chai and Ta Van',
        motif: 'terrace contour and village threshold',
        instrument: 'transect',
        image: image({ src: '/assets/images/vietnam-sapa-muong-hoa.webp', alt: 'Terraced fields in Muong Hoa Valley near Lao Chai', source: 'https://commons.wikimedia.org/wiki/File:M%C6%B0%E1%BB%9Dng_Hoa_Valley_15.jpg', label: 'Mường Hoa Valley 15.jpg', creator: 'Christophe95', license: 'CC BY-SA 4.0', editNote: 'Resized, display-cropped and converted to WebP; no other material edits. The adapted image remains available under CC BY-SA 4.0.' }),
        summary: 'A terrace-and-village chapter for Muong Hoa, Lao Chai and Ta Van with realistic trail, homestay and community etiquette.',
        lead: 'Muong Hoa is a cultivated valley with working fields, streams, homes and tourism paths. The route becomes meaningful when visitors follow a small, well-understood line and pay attention to who owns and maintains each threshold.',
        orientation: 'Use the valley road as a spine and choose one walk between Lao Chai and Ta Van or another locally confirmed segment. The most photogenic trail is not always the safest or least disruptive.',
        arrival: 'Travel from Sapa by a local driver, guide or confirmed transfer; roads narrow as they descend. Allow time for the final walk and do not expect every homestay to be vehicle-side.',
        sequence: 'Begin with a village introduction, walk beside but not through crops, take a hosted meal or rest, and return before heavy rain makes the trail crossings unsafe.',
        boundary: 'Do not enter houses, fields, ceremonies or family spaces without invitation. A homestay is a relationship with a host, not permission to document everything.',
        stages: [
          ['Choose a living route', 'Ask a local host or guide which trail is open and appropriate for the season, then keep the group on the public path.'],
          ['Read the terraces', 'Observe water channels, retaining edges, crops and livestock as infrastructure that residents actively maintain.'],
          ['Cross the village threshold', 'Use invited homestay, craft or meal experiences and ask before photographing people, rooms, tools or religious objects.'],
          ['Leave no trace', 'Carry waste out, keep noise low and return before storms or darkness make the valley road and trail crossings risky.']
        ],
        risks: [
          ['Mud and stream crossings', 'Rain makes terrace edges and footpaths slick. Shoes with grip and a conservative turn-around point matter more than a perfect loop.'],
          ['Crop damage', 'Stepping into a rice terrace for a photograph damages food and livelihood. Stay on paths and use established viewpoints.'],
          ['Cultural consent', 'Ask before portraits and indoor photography; avoid treating traditional clothing, ritual or children as scenery.']
        ],
        duration: 'Allow a full day for a comfortable village walk and hosted meal; an overnight stay deserves its own slower rhythm.',
        combine: 'Combine with Cat Cat only if one is a short orientation stop; otherwise use separate days to prevent two staged attraction loops from becoming interchangeable.',
        verify: 'Confirm the open trail, weather, road transfer, host availability, footwear needs and any local access fee or visitor rule.'
      },
      {
        slug: 'cat-cat-village',
        name: 'Cat Cat Village and Waterfall',
        motif: 'managed culture and steep watercourse',
        instrument: 'fold',
        image: image({ src: '/assets/images/vietnam-sapa-cat-cat.webp', alt: 'Cat Cat waterfall near Sapa', source: 'https://commons.wikimedia.org/wiki/File:Catcatfalls7.jpg', label: 'Catcatfalls7.jpg', creator: 'startracker', license: 'CC BY-SA 2.0' }),
        summary: 'A managed attraction guide for Cat Cat’s Hmong cultural presentation, steep lanes, craft stops and waterfall circuit.',
        lead: 'Cat Cat is convenient for a first taste of a valley village but it is also a high-pressure visitor environment. Present it honestly: a managed route with cultural interpretation, shops and steep surfaces, not an untouched village frozen in time.',
        orientation: 'Plan the route as a one-way descent and ascent with rest points. Identify which performances, homes, workshops and viewpoints are official or publicly accessible before promising them.',
        arrival: 'Use a confirmed drop-off outside congested sections and carry only what is needed for the stairs. Vehicle access and ticket procedures can change with crowds or maintenance.',
        sequence: 'Enter early when possible, read the cultural displays before shopping, descend carefully to the waterfall and reserve energy for the uphill return.',
        boundary: 'Do not photograph residents or enter a house simply because the route passes beside it. Avoid describing commercial performances as an unfiltered portrait of every Hmong community.',
        stages: [
          ['Plan the stair loop', 'Check the group’s mobility and weather, then identify a realistic turn-around point before descending.'],
          ['Read the interpretation', 'Use official displays, craft demonstrations and architecture as context rather than collecting costume photographs.'],
          ['Reach the water safely', 'Keep to marked surfaces near the waterfall and refuse the temptation to cross wet rocks for a closer frame.'],
          ['Climb out with margin', 'Allow a slow return, water and rest; leave before rain turns the route into a narrow slippery channel.']
        ],
        risks: [
          ['Stairs and wet rock', 'The managed loop contains steep steps and slick surfaces. Wear secure footwear and skip unsafe viewpoints.'],
          ['Crowd compression', 'Narrow lanes and photo queues can trap slower visitors. Keep bags close and never stop at a landing or doorway.'],
          ['Cultural staging', 'Ask before photography and distinguish paid performances or retail demonstrations from private community life.']
        ],
        duration: 'Allow three to five hours including the descent, waterfall and uphill return; longer for mobility-limited groups.',
        combine: 'Combine with Sapa Town as a half-day contrast, not with Muong Hoa’s longer village trek unless the group has substantial time and energy.',
        verify: 'Check current ticket and route direction, performance or workshop availability, weather, footwear and transport pickup instructions.'
      },
      {
        slug: 'o-quy-ho-waterfalls',
        name: 'O Quy Ho, Silver Waterfall and Love Waterfall',
        motif: 'pass weather and waterfall descent',
        instrument: 'roadbook',
        reviewDate: '12 October 2026',
        isoDate: '2026-10-12',
        image: image({ src: '/assets/images/vietnam-sapa-o-quy-ho.webp', alt: 'O Quy Ho mountain pass in the Hoang Lien range', source: 'https://commons.wikimedia.org/wiki/File:O_Quy_Ho_pass.jpg', label: 'O Quy Ho pass.jpg', creator: 'Kiếm Anh', license: 'CC BY-SA 4.0', editNote: 'Resized, display-cropped and converted to WebP; no other material edits. The adapted image remains available under CC BY-SA 4.0.' }),
        summary: 'A daylight Sa Pa out-and-back on QL4D, with Silver Waterfall first, Love Waterfall only if its managed trail is open, and a safe O Quy Ho viewpoint as the turn point.',
        lead: 'Treat QL4D as the route and the waterfalls as conditional stops, not a promise that every gate is open. The Sa Pa Tourism Office places the Golden Stream–Love Waterfall access on QL4D toward Lai Châu; the official Lai Châu tourism portal describes O Quy Hồ as a long, curving pass that crosses provincial boundaries and can feel very different on either side. Set a daylight turn point before leaving Sa Pa, and do not ask a driver to stop on the carriageway for a view.',
        orientation: 'Silver Waterfall is the first managed stop on the outward road; Love Waterfall continues into a forest access area, and the pass viewpoint belongs later on QL4D. Their entrances, walking surfaces and current operating status are separate checks. Fog at the top does not prove the lower route is clear, and dry-looking pavement does not mean the waterfall steps are safe.',
        arrival: 'Arrange a licensed taxi or experienced local driver who will wait at each named entrance and confirm the return to Sa Pa before departure. There is no dependable point-to-point public service to every waterfall gate. Save the driver’s number, fuel plan and turnaround time; do not rely on finding a new ride at a remote trail exit.',
        sequence: 'Start after checking the National Center for Hydro-Meteorological Forecasting forecast and local road notices. Visit Silver Waterfall only through its currently managed entrance; continue to the Love Waterfall forest path only after the operator confirms it is open and recent rain has not made the steps or stream unsafe. Use a signed, vehicle-safe pass viewpoint as the final stop, then return to Sa Pa in daylight. Turn around sooner if cloud, rain or road work closes the margin.',
        boundary: 'Do not stand in traffic lanes, climb unmarked cliffs or enter closed spray zones. A viewpoint should remain a viewpoint, not a stunt location.',
        sources: [
          ['https://dulich.laichau.gov.vn/en/place/details/o-quy-ho-pass-1', 'Lai Chau Tourism Promotion Information Center — O Quy Ho Pass and QL4D'],
          ['https://sapa-tourism.com/golden-stream-and-love-waterfall-an-easy-trip-in-the-middle-of-the-forest/', 'Lao Cai Tourism Information and Promotion Center — Golden Stream and Love Waterfall access from QL4D (2021 description; recheck current operation)'],
          ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — current forecasts and warnings']
        ],
        routeDiagram: {
          kind: 'flow',
          title: 'Sa Pa out-and-back, with a weather turn point',
          intro: 'A driver waits at the gates; each waterfall is optional and the pass is never a roadside photo stop.',
          steps: [
            ['Before departure', 'Check QL4D + the forecast', 'Confirm road notices, visibility, rain, driver return and each site’s current opening.'],
            ['First stop', 'Silver Waterfall', 'Use its managed entrance only if open; keep the vehicle fully off the active road.'],
            ['Optional trail', 'Love Waterfall', 'Go only when the operator confirms access and recent rain has not made the forest path unsafe.'],
            ['Turn point', 'Safe pass viewpoint', 'Use a signed pull-off, then return to Sa Pa before fog or darkness reduces visibility.']
          ],
          fallbackTitle: 'If rain, fog or closure interrupts',
          fallback: 'Drop the Love Waterfall trail and pass viewpoint first. Return to Sa Pa; a shorter managed stop or a town-based day is a complete plan.'
        },
        stages: [
          ['Set the turn point in Sa Pa', 'Check the forecast, local road notice, driver plan, fuel and the current opening of both managed waterfall sites. Confirm that the vehicle waits at each exit.'],
          ['Take the nearer managed stop', 'Use Silver Waterfall’s public entrance only if the site is operating. Stay on its marked access and skip it if water, steps or road conditions are unsafe.'],
          ['Earn the forest trail', 'Continue to Love Waterfall only after a same-day opening check. Its official tourism description is from 2021, so use it for orientation, not current hours or trail status.'],
          ['Use the pass as the last decision', 'Stop only at a signed or managed pull-off chosen by the driver. Return to Sa Pa while there is daylight rather than crossing farther into Lai Châu on a tight schedule.']
        ],
        risks: [
          ['QL4D traffic', 'The pass is a long active road with tight curves and limited stopping space. Never stand in the lane or rely on an unmarked shoulder as a viewpoint.'],
          ['Wet trail and stream', 'Waterfall steps and rocks can become slippery or flash-flooded. Do not cross a barrier, enter a closed area or swim to rescue a schedule.'],
          ['Provincial weather split', 'The road crosses the Hoàng Liên range; conditions can differ across the pass. Recheck during the day and follow a closure or the driver’s safe turnaround call.']
        ],
        duration: 'Keep a full daylight block from Sa Pa. Actual time depends on waiting at the managed entrances, trail status, traffic and the return margin; no fixed waterfall opening or road time is promised.',
        combine: 'Do not combine this road with Fansipan, a long valley trek or a same-day onward train. Keep the pass and a high-altitude attraction in separate weather windows.',
        verify: 'Check the current QL4D notice and forecast, both waterfall operators’ openings, trail or water conditions, the driver’s legal and return arrangements, safe pull-offs, fuel and daylight.'
      },
      {
        slug: 'bac-ha-market-hoang-a-tuong',
        name: 'Bac Ha Market and Hoang A Tuong',
        motif: 'market day and highland exchange',
        instrument: 'ledger',
        image: image({ src: '/assets/images/vietnam-sapa-bac-ha.webp', alt: 'Vendors and shoppers at the colorful Bac Ha Sunday Market', source: 'https://commons.wikimedia.org/wiki/File:B%E1%BA%AFc_H%C3%A0_Sunday_market%2C_Vietnam_-_20131027-10.JPG', label: 'Bắc Hà Sunday market, Vietnam - 20131027-10.JPG', creator: "Truth'soutthere", license: 'CC BY-SA 3.0' }),
        summary: 'A long-transfer culture chapter for Bac Ha’s market, textiles, livestock trade and Hoang A Tuong heritage house.',
        lead: 'Bac Ha is valuable because it is an exchange place, not because every visitor can reproduce a colorful photograph. Plan around the market’s customary weekly rhythm, but verify holidays and local changes, then leave room for the people who come to trade and work.',
        orientation: 'Treat the market and Hoang A Tuong as separate anchors with a rural transfer between Sapa and Bac Ha. One long road day should not be disguised as a short add-on.',
        arrival: 'Use an early, confirmed vehicle or tour transfer from Sapa and allow for mountain-road delays. Market-day parking and pedestrian movement are more demanding than a normal town visit.',
        sequence: 'Arrive before the busiest period, observe food and livestock areas from a respectful edge, visit the heritage house and return with a firm daylight buffer.',
        boundary: 'Do not touch animals, invade a seller’s stall or treat minority clothing as a costume rack. Ask for portraits, pay fairly and never buy wildlife products.',
        stages: [
          ['Make the transfer real', 'Give the mountain road its full time and carry water, snacks and a saved return address before leaving Sapa.'],
          ['Read the market’s purpose', 'Observe food, textiles, tools and livestock as livelihoods; keep aisles clear and do not interrupt bargaining.'],
          ['Add one heritage layer', 'Use Hoang A Tuong to connect local history and architecture, without claiming the house represents every community in the region.'],
          ['Exit with daylight', 'Leave before weather and mountain traffic make the return brittle, especially when the market has been crowded.']
        ],
        risks: [
          ['Long road exposure', 'Mountain transfers can be slow and tiring. Do not schedule a critical train, flight or summit ticket immediately after the return.'],
          ['Market congestion', 'Carts, animals and shoppers share limited space. Stand to the side, keep valuables secured and follow local staff.'],
          ['Portrait and animal ethics', 'Ask before photographing people, especially children; do not handle livestock or purchase products made from protected wildlife.']
        ],
        duration: 'Use a full day from Sapa, or stay overnight in the Bac Ha area for a less compressed market visit.',
        combine: 'Combine with a broader Lao Cai or highland itinerary, not with Fansipan or a long Sapa trek on the same day.',
        verify: 'Confirm the market date, holiday changes, road conditions, Hoang A Tuong access, vehicle pickup and return daylight.'
      }
    ]
  },
  {
    slug: 'ha-giang',
    name: "Hà Giang Karst Plateau",
    region: 'Northeast Vietnam',
    family: 'karst-roadbook',
    label: "NORTHEAST LOOP / KARST / COMMUNITIES",
    tagline: "Read each pass as a place with its own road, history and pace.",
    hubIntro: "Slow the Hà Giang loop into a chain of distinct places: Quản Bạ’s valley gate, Yên Minh’s pine hills, Đồng Văn’s preserved market quarter, then the northern Lũng Cú spur and Mã Pí Lèng canyon road. They connect through active mountain roads, but their walking time, weather exposure and overnight services differ. Vietnam Tourism’s four-day route is a useful sample, not time for every side trip. Sleep in Hà Giang City before riding, then add daylight for Lũng Cú, any Nho Quế boat descent and the southbound Du Già leg. Change plans for current road, weather or access advice.",
    stay: "Sleep in Hà Giang City before the loop, then use Yên Minh or Đồng Văn for the northern legs and Mèo Vạc or Du Già as the road turns south. Đồng Văn is the most practical base for the old quarter, an early market visit and the Lũng Cú branch. Confirm meals, fuel, cash, accommodation parking and the next pickup in each town; services thin out between bases.",
    transfer: "Vietnam Tourism describes Hanoi–Hà Giang City as about 300 km and roughly six hours by bus; keep that transit separate from the first mountain-road day. Its four-day QL4C/QL34 route is a routing reference, not a current timetable or promise every stop is open. Public transport between viewpoints is limited. Choose a qualified driver or a rider with current legal permission, insurance and real mountain-road experience. Vietnam Tourism describes September–November as cooler, April–June as warm and July–August as monsoon season; UNESCO notes buckwheat flowers around October–November and peach or plum blossom around January–February. These are seasonal windows, not bloom or road guarantees. Reserve extra daylight for Lũng Cú, the Nho Quế descent and a Du Già return; do not price the trip from an undated fee estimate.",
    sources: [["https://www.vietnam.travel/places-to-go/northern-vietnam/ha-giang","Vietnam Tourism | Hà Giang: access, seasons and landmarks"],["https://www.vietnam.travel/things-to-do/ha-giang-loop-four-day-road-trip","Vietnam Tourism | Four-day Hà Giang road-trip example"],["https://www.unesco.org/en/iggp/dong-van-karst-plateau-unesco-global-geopark","UNESCO | Đồng Văn Karst Plateau Global Geopark"]],
      hubSources: [["https://www.vietnam.travel/places-to-go/northern-vietnam/ha-giang","Vietnam Tourism | Hà Giang: access, seasons and landmarks"],["https://www.vietnam.travel/things-to-do/ha-giang-loop-four-day-road-trip","Vietnam Tourism | Four-day Hà Giang road-trip example"],["https://www.unesco.org/en/iggp/dong-van-karst-plateau-unesco-global-geopark","UNESCO | Đồng Văn Karst Plateau Global Geopark"]],
      hubCss: "/css/vietnam-ha-giang.css?v=20261007-2",
      reviewDate: "7 October 2026",
      isoDate: "2026-10-07",
      routeModelHeading: "A road sequence with daylight at the center.",
      routeModelLead: "Vietnam Tourism’s four-day example starts in Hà Giang City, uses QL4C north and returns by QL34 via Bảo Lâm. Treat it as a road skeleton: the Hanoi transfer is separate, and a full Lũng Cú branch, Nho Quế boat descent or slower Du Già finish needs extra daylight. Confirm each road and access point locally.",
    guides: [
      {
        slug: 'quan-ba-heavens-gate',
        name: "Quản Bạ and Heaven’s Gate",
        motif: "valley gate",
        instrument: 'compass',
        image: {"src":"/assets/images/vietnam-ha-giang-quan-ba.webp","alt":"Karst valley and terraced fields near Quản Bạ, Hà Giang","source":"https://commons.wikimedia.org/wiki/File:Qu%E1%BA%A3n_B%E1%BA%A1%2C_Vietnam_-_2.jpg","label":"Quản Bạ, Vietnam - 2.jpg","creator":"Benjamin Smith","license":"CC BY-SA 4.0","editNote":"Resized, display-cropped and converted to WebP; adapted version remains available under CC BY-SA 4.0."},
        summary: "Use Heaven’s Gate for the first wide view of the Đồng Văn plateau, then pause in Tam Sơn before the QL4C climb to Yên Minh.",
        lead: "Quản Bạ is the loop’s threshold. From Heaven’s Gate, the road looks down into Tam Sơn and the limestone Twin Mountains, a compact valley set against much larger karst folds. The lookout explains the scale; Tam Sơn is where the day becomes practical, with a meal, fuel check and a decision about how far to drive before dark. Vietnam Tourism’s sample route places the pass on the first morning from Hà Giang City and continues to Yên Minh.",
        orientation: "Treat Heaven’s Gate as a roadside viewpoint and the Twin Mountains as a view over the town, not as a signed walking circuit. Clouds can erase the valley quickly. Tam Sơn is the useful pause for food and supplies before the quieter road toward Yên Minh.",
        arrival: "Start from Hà Giang City in the morning on the current QL4C alignment with a driver or properly qualified rider. If a Hanoi bus arrives that morning, rest in the city and begin the pass the next day; mountain curves and stops make bus-arrival estimates poor riding schedules.",
        sequence: "Check fuel and visibility before leaving town, stop only at a safe signed pull-off, then use Tam Sơn for lunch and a fresh road check. Continue to Yên Minh only if the group still has daylight and clear enough weather; skip an extra detour when the pass is wet or fogged in.",
        hideSequenceLead: true,
        boundary: "Do not park on the bend or cross traffic to frame the valley. A viewpoint pin does not grant access to farms, terraces or homes; stay on the public edge and follow any current barriers.",
        countryCss: "/css/vietnam-ha-giang.css?v=20261007-2",
        isoDate: "2026-10-07",
        sources: [["https://www.vietnam.travel/places-to-go/northern-vietnam/ha-giang","Vietnam Tourism | Hà Giang: access, seasons and landmarks"],["https://www.vietnam.travel/things-to-do/ha-giang-loop-four-day-road-trip","Vietnam Tourism | Four-day Hà Giang road-trip example"],["https://www.unesco.org/en/iggp/dong-van-karst-plateau-unesco-global-geopark","UNESCO | Đồng Văn Karst Plateau Global Geopark"]],
        reviewDate: "7 October 2026",
        stages: [["Leave Hà Giang City rested","Separate the Hanoi transfer from the ride. Check brakes, lights, rain layers, fuel and the actual QL4C condition before climbing."],["Read the valley from the lookout","Use the official Heaven’s Gate stop if open. Pick out Tam Sơn and the Twin Mountains, then move on before traffic builds around the shoulder."],["Pause in Tam Sơn","Eat, refill water and check fuel, cash and visibility. Ask locally about weather or road works farther north rather than trusting an old map pin."],["Finish at Yên Minh in daylight","Keep the first day to Quản Bạ and the next town. If fog, rain or fatigue is building, stop early instead of trying to add a famous detour."]],
        risks: [["Blind bends and pull-offs","The scenic road is active traffic. A wide-looking shoulder may still be a curve, driveway or drainage edge; stop only when the driver can fully clear the lane."],["Fog and monsoon rain","Low cloud removes the view and wet pavement lengthens stopping distance. Turn the lookout into a short pause or skip it when visibility closes."],["Farm and home privacy","Fields are working land. Do not walk into a terrace, move a crop barrier or photograph residents close-up without permission."]],
        duration: "Use a full daylight road segment from Hà Giang City and sleep in Yên Minh. Vietnam Tourism’s sample gives Heaven’s Gate a morning stop before Tam Sơn and the northbound climb; actual arrival depends on weather, traffic and safe pauses.",
        combine: "Yên Minh is the natural same-day overnight leg after the pass. Keep Lũng Cú and Mã Pí Lèng for later days; combining either with the city departure turns a first road day into a poor daylight gamble.",
        verify: "Check the day’s QL4C report, visibility, pass closures, safe viewpoint access, fuel in Tam Sơn and the confirmed Yên Minh arrival before setting out."
      },
      {
        slug: 'yen-minh-pine-forest',
        name: "Yên Minh and the Pine Forest Route",
        motif: "forest overnight",
        instrument: 'roadbook',
        image: {"src":"/assets/images/vietnam-ha-giang-yen-minh-pines-20261007.webp","alt":"Needle pine forest on the misty upland slopes of Yên Minh district","source":"https://commons.wikimedia.org/wiki/File:Needle_trees_in_the_Yen_Minh_district_1.jpg","label":"Needle trees in the Yen Minh district 1.jpg","creator":"Vuong Tri Binh","license":"CC BY-SA 4.0","editNote":"Resized, display-cropped and converted to WebP; adapted version remains available under CC BY-SA 4.0."},
        summary: "Use Yên Minh as the forested overnight between the first climb and Đồng Văn: refuel, rest and enter the next pass in daylight.",
        lead: "Yên Minh earns its place by breaking a long highland drive into a real overnight, not by promising a grand forest trail. The pine belt belongs to the upland road landscape; a misty roadside view does not identify a maintained hiking path or public picnic area. Arrive with enough time to settle into town, arrange the next fuel stop and prepare for the longer limestone road to Đồng Văn.",
        orientation: "Vietnam Tourism’s four-day example reaches Yên Minh on day one after Heaven’s Gate. The forest scenery sits along the approach, while food, lodging and vehicle checks happen in town. September–November is often cooler, but mist can still hide the pines and July–August monsoon rain can change the road; check local visibility before taking a rural branch.",
        arrival: "Continue north from Quản Bạ on QL4C, asking the driver about current works and weather. Confirm a room and vehicle parking before leaving Tam Sơn; do not assume a small roadside settlement will have fuel, cash or a pharmacy when you arrive.",
        sequence: "Reach town before dusk, refuel if available and ask the host what services are open. Use a public roadside pull-off for the pine view, then rest and check the next day’s visibility, clothing and route toward Đồng Văn.",
        hideSequenceLead: true,
        boundary: "Stay on the public road or an explicitly open path. Do not enter forest plots, cut trees, fly a drone over homes or leave food and litter where livestock and wildlife forage.",
        countryCss: "/css/vietnam-ha-giang.css?v=20261007-2",
        isoDate: "2026-10-07",
        sources: [["https://www.vietnam.travel/things-to-do/ha-giang-loop-four-day-road-trip","Vietnam Tourism | Four-day Hà Giang road-trip example"],["https://www.vietnam.travel/places-to-go/northern-vietnam/ha-giang","Vietnam Tourism | Hà Giang: access, seasons and landmarks"],["https://www.unesco.org/en/iggp/dong-van-karst-plateau-unesco-global-geopark","UNESCO | Đồng Văn Karst Plateau Global Geopark"]],
        reviewDate: "7 October 2026",
        stages: [["Arrive before the town closes down","Confirm lodging, meal options and parking while there is still light. Ask whether fuel and cash services are operating that day."],["Take the forest as a short reading stop","Use the publicly accessible road edge to notice the needle pines and changing elevation. The photograph is not evidence of a marked trail."],["Reset the vehicle and the group","Check brakes, lights, layers, water and the next day’s pickup. If rain or fog is forecast, ask the host or driver which road segment is safest."],["Sleep before the longer northbound leg","Keep the evening simple and depart after breakfast. Do not trade an overnight recovery point for a dark detour through rural lanes."]],
        risks: [["Thin services","Small-town fuel, pharmacy and cash availability can change. Carry a buffer from Hà Giang City and confirm an open option before relying on it."],["Fog on the forest road","Mist can shorten sight lines around bends. A quiet-looking road is still through-traffic; avoid walking or parking in the lane."],["Unmarked access","A pine slope is not necessarily a public recreation site. Ask before using a path and leave homes, forest plots and livestock undisturbed."]],
        duration: "Stay one night and allow only a short daylight forest pause. The useful visit is the recovery interval between Quản Bạ and Đồng Văn; any longer walk needs a named public access point and local confirmation.",
        combine: "Pair with Quản Bạ on arrival or Đồng Văn on the following day. Do not turn the overnight into a side trip toward Lũng Cú or the Nho Quế canyon.",
        verify: "Confirm the open road and weather, lodging and parking, meal options, fuel and cash availability, and whether a specific forest path is public before walking it."
      },
      {
        slug: 'dong-van-old-quarter',
        name: "Đồng Văn Old Quarter",
        motif: "living heritage quarter",
        instrument: 'zine',
        image: {"src":"/assets/images/vietnam-ha-giang-dong-van-market-20261007.webp","alt":"Historic covered market building in Đồng Văn Old Quarter","source":"https://commons.wikimedia.org/wiki/File:Covered_market_of_Dong_Van_in_2014.jpg","label":"Covered market of Dong Van in 2014.jpg","creator":"Vuong Tri Binh","license":"CC BY-SA 4.0","editNote":"Resized, display-cropped and converted to WebP; adapted version remains available under CC BY-SA 4.0."},
        summary: "Walk Đồng Văn’s preserved houses and covered market as a living neighborhood, with time for a quiet morning and the next road day.",
        lead: "UNESCO describes roughly forty preserved houses dating to around 1890, with market and residential space woven into one compact quarter. Read the place at street level: stone-and-timber facades, the covered market and the shifts between public lane and private threshold. The age of a building does not make its courtyard or interior a visitor attraction; use only spaces clearly open to the public.",
        orientation: "A short evening or early-morning walk works better than treating the old quarter as a vehicle stop. The market is a working place, not a scheduled show; ask your host which day and hours are current, then leave room for a meal and a slower look at the streets.",
        arrival: "Come from Yên Minh on QL4C and arrive with enough daylight to park outside the narrowest lanes. On the way, Sa Phin’s Vuong family palace is a separate historic visit; Vietnam Tourism dates the house to 1902, so check its current opening before adding it.",
        sequence: "Leave the vehicle at an agreed public spot, walk the old quarter on foot, view the covered market from its public edge and ask before photographing stallholders. Keep the next mountain-road start separate from a late market evening.",
        hideSequenceLead: true,
        boundary: "The quarter is both heritage and home. Never enter a courtyard, shop room or upstairs space without invitation; a doorway visible from the street is still private property.",
        countryCss: "/css/vietnam-ha-giang.css?v=20261007-2",
        isoDate: "2026-10-07",
        sources: [["https://www.unesco.org/en/iggp/dong-van-karst-plateau-unesco-global-geopark","UNESCO | Đồng Văn Karst Plateau Global Geopark"],["https://www.vietnam.travel/things-to-do/ha-giang-loop-four-day-road-trip","Vietnam Tourism | Four-day Hà Giang road-trip example"],["https://www.vietnam.travel/places-to-go/northern-vietnam/ha-giang","Vietnam Tourism | Hà Giang: access, seasons and landmarks"]],
        reviewDate: "7 October 2026",
        stages: [["Start with the public street pattern","Walk from the square through the lanes and notice how commerce and homes share the same small footprint. Avoid blocking scooters or deliveries."],["Read the covered market as working space","Look at the roof and market edge from an open public route. Market activity and hours vary, so ask locally rather than promising a particular trading day."],["Choose an open interior only","Visit a house or exhibit only when it is clearly signed or hosted. UNESCO’s count describes the quarter as a whole, not forty doors open to tourists."],["Keep a calm overnight base","Eat, rest and prepare for the next road leg. If Lũng Cú is planned, start early from the Đồng Văn base and keep the return in daylight."]],
        risks: [["Lane traffic","Scooters, pedestrians and deliveries share narrow streets. Stand clear at corners and never walk backward into moving traffic for a photograph."],["Private homes","A historic facade is not public access. Follow the host’s invitation and any posted entry boundary."],["Market crowds and portraits","Do not block sellers or photograph people at close range without asking. Secure bags and keep clear of livestock and carrying routes."]],
        duration: "Allow two or three unhurried hours for the lanes and market edge; stay overnight if you want the quieter early period or a separate northern branch. Market hours and interior access need local confirmation.",
        combine: "Sa Phin is a natural stop on the approach if the palace is open. Use Đồng Văn as the base for a separate Lũng Cú day or continue toward Mã Pí Lèng the next morning; do not stack both long branches.",
        verify: "Ask a current host about market timing and vehicle access; confirm any house or palace opening, parking, the next road forecast and whether the planned site charges an entry fee."
      },
      {
        slug: 'lung-cu-flag-tower',
        name: "Lũng Cú Flag Tower and Border Villages",
        motif: "border-area landmark",
        instrument: 'atlas',
        image: {"src":"/assets/images/vietnam-ha-giang-lung-cu-context-20261007.webp","alt":"Lũng Cú Flag Tower on a wooded karst hill above nearby homes","source":"https://commons.wikimedia.org/wiki/File:To%C3%A0n_c%E1%BA%A3nh.jpg","label":"Toàn cảnh.jpg","creator":"Khoitran1957","license":"CC BY-SA 4.0","editNote":"Resized, display-cropped and converted to WebP; adapted version remains available under CC BY-SA 4.0."},
        summary: "Plan Lũng Cú as a daylight branch from Đồng Văn: the flag tower, roughly 200 steps and border-area instructions need more than a photo stop.",
        lead: "Lũng Cú is a civic landmark in a sensitive border landscape, not a casual detour on the way to Mã Pí Lèng. Vietnam Tourism describes about 200 steps to the tower and recommends the cooler late afternoon; its route article calls the road branch roughly three hours. Treat both as planning clues, not a current schedule. Lô Lô Chải below the hill is a lived-in village, so visit only public, hosted spaces.",
        orientation: "The tower and flag sit above a steep green hill; the approach, climb and return road are part of the visit. The village is a separate human-scale stop below it. Decide whether the group has the time and weather for both before leaving Đồng Văn.",
        arrival: "Use a confirmed driver or tour from Đồng Văn, check the current road and site notices, and keep a daylight return. Carry identification if local instructions advise it. Do not assume border-area photography, drone use or side-road access is unrestricted.",
        sequence: "Check access and weather before the branch, climb at an easy pace, then visit Lô Lô Chải only through a public route or host. Return to Đồng Văn rather than pushing on to Mã Pí Lèng after the tower.",
        hideSequenceLead: true,
        boundary: "Obey signs and staff around border facilities, do not cross barriers or photograph restricted infrastructure, and keep the flag and civic grounds free from climbing, touching or staged props.",
        countryCss: "/css/vietnam-ha-giang.css?v=20261007-2",
        isoDate: "2026-10-07",
        sources: [["https://www.vietnam.travel/places-to-go/northern-vietnam/ha-giang","Vietnam Tourism | Hà Giang: access, seasons and landmarks"],["https://www.vietnam.travel/things-to-do/ha-giang-loop-four-day-road-trip","Vietnam Tourism | Four-day Hà Giang road-trip example"],["https://www.unesco.org/en/iggp/dong-van-karst-plateau-unesco-global-geopark","UNESCO | Đồng Văn Karst Plateau Global Geopark"]],
        reviewDate: "7 October 2026",
        stages: [["Decide from a Đồng Văn base","Confirm a driver, road status and a generous return window before setting out. A bus arrival day is not a sensible start for the branch."],["Check the site notices","Read current access, identification and photography directions at the entrance. Follow staff instructions even when an older travel guide says otherwise."],["Climb the official stair route","Allow for about 200 steps, sun, wind and uneven pacing. Take water and turn back if weather or health makes the descent unsafe."],["Visit the village by invitation","Use a public route or hosted stop in Lô Lô Chải, ask before portraits or home visits, then return to Đồng Văn in daylight."]],
        risks: [["Border-area restrictions","Access, photography and drone rules can change near sensitive sites. Follow local notices and guards; this guide does not establish a permit requirement."],["Stairs and exposure","The climb is short enough to underestimate but includes many steps and weather exposure. Pause, hydrate and avoid storms or a late start."],["Community privacy","Lô Lô Chải is a residential village, not a backdrop. Ask before portraits and enter a home only through a host invitation."]],
        duration: "Reserve at least a half-day from Đồng Văn, with a large daylight margin. Vietnam Tourism’s older route example gives about three hours for the road detour before the tower climb; recheck current conditions and add time for a hosted village visit.",
        combine: "Pair with Đồng Văn as a separate base day. Do not combine this branch with the Mã Pí Lèng–Mèo Vạc road and a river descent in one checklist day.",
        verify: "Check current tower opening, road work, weather, local identification and photography guidance, stair access, driver pickup and any posted entry charge. No current fee is quoted here."
      },
      {
        slug: 'ma-pi-leng-nho-que',
        name: "Mã Pí Lèng Pass and Nho Quế River",
        motif: "pass above the Nho Quế",
        instrument: 'contour',
        image: {"src":"/assets/images/vietnam-ha-giang-ma-pi-leng.webp","alt":"Mã Pí Lèng road crossing a dramatic limestone ridge above the Nho Quế valley","source":"https://commons.wikimedia.org/wiki/File:Le_col_de_Ma_Pi_Leng_%28Dong_Van-Meo_Vac%29.jpg","label":"Le col de Ma Pi Leng (Dong Van-Meo Vac).jpg","creator":"Jaybeelarsay","license":"CC BY-SA 3.0","editNote":"Resized, display-cropped and converted to WebP; adapted version remains available under CC BY-SA 3.0."},
        summary: "The Đồng Văn–Mèo Vạc road climbs above the Nho Quế; any canyon-side boat is a separate descent, operator and return transfer.",
        lead: "Mã Pí Lèng’s drama comes from the road itself: the short 24-kilometre link between Đồng Văn and Mèo Vạc can take most of a morning when drivers stop at safe views. UNESCO describes Tu San Canyon below at roughly 700–800 metres deep. The river looks close from the pass but reaching a boat point means a different road, operator and return plan; it is not a simple roadside walk.",
        orientation: "Separate three experiences on the map: the QL4C pass drive, a safe signed overlook and a managed Nho Quế river excursion. A clear view from above does not mean there is a legal or walkable descent at that spot.",
        arrival: "Travel the pass between Đồng Văn and Mèo Vạc with a driver who knows current stopping areas. Confirm any river transfer before turning off the main road; do not count on phone signal, parking, boat operation or a quick return.",
        sequence: "Check visibility and road notices, take only the stops the driver can make safely, then decide separately whether an operating river trip fits the remaining daylight. In July and August monsoon rain can close the view or make a descent unsafe; seasonal buckwheat or blossom color is no substitute for a road check. If rain, fog, rockfall or fatigue rises, skip the descent and continue to the confirmed overnight base.",
        hideSequenceLead: true,
        boundary: "Stay behind current barriers and well out of the traffic lane. Do not climb an unprotected edge, swim from an improvised landing or descend a slope that has no public route.",
        countryCss: "/css/vietnam-ha-giang.css?v=20261007-2",
        isoDate: "2026-10-07",
        sources: [["https://www.unesco.org/en/iggp/dong-van-karst-plateau-unesco-global-geopark","UNESCO | Đồng Văn Karst Plateau Global Geopark"],["https://www.vietnam.travel/things-to-do/ha-giang-loop-four-day-road-trip","Vietnam Tourism | Four-day Hà Giang road-trip example"],["https://www.vietnam.travel/places-to-go/northern-vietnam/ha-giang","Vietnam Tourism | Hà Giang: access, seasons and landmarks"]],
        reviewDate: "7 October 2026",
        stages: [["Check the pass before leaving","Ask about rain, visibility, closures and the driver’s planned safe stops. A road can be open while a viewpoint or descent is not suitable."],["Take the ridge at road speed","Let the driver choose pull-offs and stay behind barriers. The 24 km link may still occupy the morning once curves and safe pauses are included."],["Plan the river as a separate transfer","Confirm the named access point, boat operator, life jacket, water conditions, return pickup and current operating status before descending."],["Finish at the agreed base","Reach Mèo Vạc or the booked overnight with daylight. Do not continue into a remote southbound leg just to preserve a boat booking."]],
        risks: [["Traffic beside cliffs","The pass is an active road with limited stopping space and steep exposure. Never stand in the carriageway or lean over a barrier."],["Rain and rockfall","Monsoon rain, fog and loose rock can make the ridge or descent unsafe. Follow closures and local driver decisions."],["Water and return logistics","Boat access and river conditions vary. Use a current operator, wear the supplied life jacket and confirm the return before boarding."]],
        duration: "Allow a full daylight road segment even though the Đồng Văn–Mèo Vạc distance is short; Vietnam Tourism says viewpoint stops can fill most of the morning. Add at least a separate half-day for a river descent and boat transfer, subject to current operation.",
        combine: "Travel onward to Mèo Vạc or use Đồng Văn as the start base. Keep Lũng Cú on another day, and do not combine the pass with a long southbound Du Già return after dark.",
        verify: "Check the pass and viewpoint notices, rain and visibility, safe pull-offs, boat operator and life-jacket terms, the access and return transfer, and current fees before committing."
      },
      {
        slug: 'meo-vac-du-gia',
        name: 'Meo Vac to Du Gia Southbound Link',
        motif: 'market finish and village recovery',
        instrument: 'signal',
        reviewDate: '12 October 2026',
        isoDate: '2026-10-12',
        image: image({ src: '/assets/images/vietnam-ha-giang-du-gia.webp', alt: 'Mountain valley landscape around Du Gia in Ha Giang', source: 'https://commons.wikimedia.org/wiki/File:Du_Gi%C3%A0.jpg', label: 'Du Già.jpg', creator: 'NKSTTSSHNVN', license: 'CC BY-SA 4.0' }),
        summary: 'Make Meo Vac–Du Gia a two-day, one-night southbound link with a confirmed local driver, a daylight arrival and a Ba Tien waterfall visit only if the commune confirms safe public operation.',
        lead: 'The southbound road from Mèo Vạc to Du Già is a transfer day with a recovery night, not a short detour or a same-day loop back to Hà Giang City. Since 2025, the former Hà Giang and Tuyên Quang provinces have been combined as Tuyên Quang; “Hà Giang Loop” remains a useful tourism-region label, while bookings and current road checks should use the actual commune names. An official provincial tourism inspection reported in June 2026 that Thác Ba Tiên still needed safety, access and service conditions before public operation. That dated notice is a reason to confirm current status locally, not proof of today’s opening or closure.',
        orientation: 'Use Mèo Vạc in the morning for supplies and a market visit only if it is market day. Ask the accommodation or a licensed local operator which current road is suitable to Du Già, what sections have works or weather damage, and where the vehicle can stop legally. Sleep in Du Già; on the next day choose a hosted village walk or meal, and treat the waterfall as a separate, conditional activity.',
        arrival: 'Arrange a local driver or licensed operator familiar with the current mountain roads, and confirm the vehicle, driver contact, overnight address, fuel stop and arrival deadline before leaving. Carry cash, drinking water and any medication; phone signal and services thin between towns. Do not use a historic loop map as a live road notice, and do not ride after dark to make up a delay.',
        sequence: 'Day 1: check weather and local road advice in Mèo Vạc, depart early, take only driver-approved public pull-offs and reach Du Già with daylight for check-in. Day 2: walk only public village lanes with permission, then visit Thác Ba Tiên only if the commune or current operator confirms that public access, safety staff and the path are operating. Keep the next transfer separate; do not target Hanoi the same day.',
        boundary: 'Do not enter farms, homes or bathing areas without invitation. Waterfalls and homestays need the same respect as heritage sites.',
        sources: [
          ['https://baochinhphu.vn/nghi-quyet-cua-quoc-hoi-ve-sap-xep-don-vi-hanh-chinh-cap-tinh-102250612191145158.htm', 'Government of Vietnam — Resolution 202/2025/QH15, Hà Giang and Tuyên Quang merged as Tuyên Quang'],
          ['https://sovhttdl.tuyenquang.gov.vn/vi/tin-bai/tuyen-quang-tung-buoc-chuan-hoa-cong-tac-quan-ly-du-lich-trai-nghiem-co-yeu-to-mao-hiem?id=239119&type=NEWS', 'Tuyên Quang Department of Culture, Sports and Tourism — 25 June 2026 safety and operating review at Thác Ba Tiên'],
          ['https://dugia.tuyenquang.gov.vn/', 'Du Già Commune People’s Committee — current local announcements; confirm current access with the commune or operator'],
          ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — current forecasts and warnings']
        ],
        routeDiagram: {
          kind: 'flow',
          title: 'A two-day southbound handoff',
          intro: 'The overnight is part of the route. A waterfall is not assumed to be open or safe.',
          steps: [
            ['Day 1 · morning', 'Mèo Vạc supply + road check', 'Ask a local operator about current works, weather, the driver and the daylight arrival point.'],
            ['Day 1 · daylight', 'Southbound transfer', 'Use a confirmed driver and public pull-offs; skip unverified detours and reach Du Già before dark.'],
            ['Night 1', 'Du Già hosted stay', 'Confirm your room and meal directly, and ask the commune/operator about current village access.'],
            ['Day 2 · flexible', 'Village walk; waterfall conditional', 'Choose public lanes with permission. Add Thác Ba Tiên only after current public operation and safety are confirmed.']
          ],
          fallbackTitle: 'If the road or waterfall is uncertain',
          fallback: 'Stay an extra night in Mèo Vạc or Du Già, keep to a hosted village visit, and move the onward transfer to a separate daylight day.'
        },
        stages: [
          ['Confirm the handoff in Mèo Vạc', 'Check the current district/commune names on your booking, weather, road works, fuel, cash and the driver’s planned route. Treat the market as a stop only when its local calendar supports it.'],
          ['Take one daylight transfer', 'Leave early with a driver who knows the current road. Stop only at a safe public pull-off, and do not add a waterfall or village detour if the arrival margin is shrinking.'],
          ['Sleep before exploring Du Già', 'Check in at the confirmed homestay, ask permission for any village walk, and let the host confirm which public lanes and services are suitable that day.'],
          ['Make Ba Tiên a conditional branch', 'A June 2026 provincial review identified requirements still to resolve before public operation. Contact the commune or current operator for today’s opening, safe access and staffing; otherwise keep the village visit and overnight, and postpone the waterfall.']
        ],
        risks: [
          ['Road time is variable', 'This is a remote mountain transfer with limited services and patchy signal. No exact duration or distance is promised; a road being mapped does not establish today’s condition.'],
          ['Rain, works and landslides', 'Heavy rain can change valley access or make a waterfall unsafe. Follow current commune or driver advice, stay off the road after dark and accept an extra night as the fallback.'],
          ['Waterfall operation and village privacy', 'Do not swim, jump or use an informal path. Confirm supervised public access first; ask before entering a home, farm, bathing area or taking photographs.']
        ],
        duration: 'Plan two days and at least one overnight in Du Già. Add another night if road reports, weather or the operator’s daylight estimate leave a narrow margin.',
        combine: 'Link this after a separate Mã Pí Lèng/Mèo Vạc day, or before a separate Hà Giang City exit. Do not combine the transfer, waterfall, return drive and Hanoi bus on one day.',
        verify: 'Confirm the current province and commune names on the booking, the road and weather with a local operator, the driver/vehicle and safe pull-offs, the Du Già stay, and Thác Ba Tiên’s public opening and safety arrangements.'
      }
    ]
  },
  {
    slug: 'ha-long-cat-ba',
    name: 'Ha Long and Cat Ba',
    region: 'Northeast Vietnam',
    family: 'maritime-karst',
    label: 'BAYS / ISLANDS / TIDAL FOREST',
    tagline: 'Choose a water route, then let tide, weather and carrying capacity lead.',
    reviewDate: '12 October 2026',
    isoDate: '2026-10-12',
    hubIntro: 'Ha Long Bay, Bai Tu Long and Cat Ba are one World Heritage archipelago, but they use different gateways. Ha Long City day and overnight vessels list either Tuần Châu International Cruise Port or Hạ Long International Passenger Port; Bai Tu Long National Park itineraries begin at Ao Tiên Port in Vân Đồn; Cat Ba’s Lan Ha trips usually leave Bến Bèo, after the Đồng Bài–Cái Viềng crossing. Pick the coast and boarding pier first, then add one route per day. Wind, squalls, ferry suspensions and park closures can reorder the plan.',
    stay: 'For a Ha Long City cruise, stay near the named Tuần Châu or Hạ Long International Passenger port transfer. For a park-authorized Bai Tu Long trip, use Vân Đồn/Ao Tiên as the mainland gateway. For Lan Ha, sleep in Cat Ba Town and allow the mainland ferry or cable-car transfer a separate buffer. A destination label is not a boarding address.',
    transfer: 'Read the geography west to east, then south: Ha Long City ports → Vân Đồn’s Ao Tiên for Bai Tu Long → Đồng Bài ferry / Cái Viềng on Cat Ba → Cat Ba Town → Bến Bèo for Lan Ha. Keep land days between separate bays. Never book a fixed evening flight or train after a boat or island transfer; use official weather and operator notices to decide whether to defer.',
    planner: [
      ['West · Ha Long City', 'Core bay from the vessel’s named port', 'The management board lists boats at both Tuần Châu and Hạ Long International Passenger Port. Match vessel, pier, gate and route before choosing a hotel transfer.'],
      ['East · Vân Đồn', 'Bai Tu Long from Ao Tiên', 'The park’s published boat itineraries start at Ao Tiên. Choose a confirmed park route and return to the same mainland gateway; do not substitute a Ha Long City cruise pier.'],
      ['South · Cat Ba', 'Lan Ha by Bến Bèo; forest by road', 'Cross Đồng Bài–Cái Viềng, continue to Cat Ba Town, then use Bến Bèo for a booked bay route. Keep the north-island park and caves for a separate land day.']
    ],
    routeModelHeading: 'Choose one gateway, then move along the coast.',
    routeModelLead: 'This west-to-east-to-south order is geographic, not a same-day itinerary. Tuần Châu and Hạ Long ports serve Ha Long City routes; Ao Tiên is the Vân Đồn gateway for Bai Tu Long; Cái Viềng and Bến Bèo are different Cat Ba handoffs. Weather, official closure notices and the operator’s named return point outrank the map.',
    presentation: {
      conditionsKicker: 'Four separate handoffs',
      conditionsTitle: 'Match the pier to the bay.',
      conditionsLead: 'Each chapter begins at a different coast, landing or road. Check the named operator, official access notice and return margin before adding another stop.',
      faqKicker: 'Plan by gateway',
      faqTitle: 'Ha Long and Cat Ba route choices'
    },
    hubSources: [
      ['https://halongbay.com.vn/boats?type=2', 'Ha Long Bay Management Board — current daytime vessel list and named ports'],
      ['https://halongbay.com.vn/boats?type=1', 'Ha Long Bay Management Board — current overnight vessel list and named ports'],
      ['https://halongbay.com.vn/tours', 'Ha Long Bay Management Board — official bay routes and destinations'],
      ['https://vuonquocgiabaitulong.vn/vi', 'Bai Tu Long National Park — published visitor routes from Ao Tiên; site identifies itself as in trial'],
      ['https://haiphong.gov.vn/lich-tau-pha/dieu-chinh-lich-chay-pha-ben-dong-bai-cai-vieng-tu-ngay-1-9-2026-964317', 'Hai Phong People’s Committee — Đồng Bài–Cái Viềng timetable for 1 September–31 December 2026'],
      ['https://soxd.haiphong.gov.vn/tin-tuc/dung-hoat-dong-chay-pha-dong-bai-cai-vieng-va-pha-duong-ao-de-phong-chong-bao-so-4-thong-bao-so--952821', 'Hai Phong Department of Construction — storm-safety ferry suspension notice'],
      ['https://halongbay.com.vn/en/p/1013-canh-bao-som-dong-loc-tren-bien', 'Ha Long Bay Management Board — squall warning and live marine notice link'],
      ['https://whc.unesco.org/en/list/672/', 'UNESCO — Ha Long Bay–Cat Ba Archipelago']
    ],
    sources: [
      ['https://whc.unesco.org/en/list/672/', 'UNESCO — Ha Long Bay–Cat Ba Archipelago'],
      ['https://vietnam.travel/node/1368', 'Vietnam Tourism — Things to Do in Ha Long Bay'],
      ['https://vietnam.travel/places-to-go/northern-vietnam/ha-long', 'Vietnam Tourism — Ha Long'],
      ['https://catba.net.vn/?lang=en', 'Cat Ba National Park — official information'],
      ['https://sunworld.vn/en/cat-ba/transportation', 'Sun World Cat Ba — official cable-car and island information']
    ],
    guides: [
      {
        slug: 'core-cruise',
        name: 'Ha Long Bay Core Cruise',
        motif: 'boarding window and karst seascape',
        instrument: 'tide',
        reviewDate: '12 October 2026',
        isoDate: '2026-10-12',
        sources: [
          ['https://halongbay.com.vn/boats?type=2', 'Ha Long Bay Management Board — current daytime vessel listings and named ports; confirm the vessel’s assigned pier'],
          ['https://halongbay.com.vn/boats?type=1', 'Ha Long Bay Management Board — current overnight vessel listings and named ports; confirm the vessel’s assigned pier'],
          ['https://halongbay.com.vn/tours', 'Ha Long Bay Management Board — approved bay itineraries and route variants'],
          ['https://halongbay.com.vn/en/p/1013-canh-bao-som-dong-loc-tren-bien', 'Ha Long Bay Management Board — bay weather and early-squall warnings; check the live notice before departure']
        ],
        searchKeywords: ['tuan chau cruise port', 'ha long international passenger port', 'overnight cruise pier', 'day cruise pier', 'ha long cruise cancellation', 'halong bay route'],
        image: image({ src: '/assets/images/vietnam-ha-long-cruise.webp', alt: 'A cruise boat among the limestone islands of Ha Long Bay', source: 'https://commons.wikimedia.org/wiki/File:Ha_Long_bay.jpg', label: 'Ha Long bay.jpg', creator: 'Shyamal', license: 'CC BY-SA 4.0' }),
        summary: 'Choose a Ha Long day or overnight cruise only after matching the named vessel to its actual port, approved route, weather call and return transfer.',
        lead: 'The port is the first booking decision, not a detail to solve in the taxi. The official listings show vessels using both Tuần Châu International Cruise Port and Hạ Long International Passenger Port across daytime and overnight products. Cruise length alone does not identify the pier; the vessel and booking confirmation do.',
        orientation: 'Compare the actual boat, port, check-in window, route and disembarkation plan. A day cruise may leave from either listed port, and overnight boats may also use either, so map the exact pier before buying a hotel transfer.',
        arrival: 'Save the operator’s vessel name, booking reference, exact port and gate, check-in cutoff, luggage rule and shore contact. If the booking and transfer name different ports, stop and get written confirmation before leaving Hanoi.',
        sequence: 'Match the boat to the official route list, check the bay forecast and cancellation terms on departure day, then keep enough shore time for the actual arrival port and road transfer back.',
        boundary: 'The captain and bay authority decide whether the boat sails, changes route or cancels. Do not pressure crews to continue in unsafe weather or step ashore outside the approved itinerary.',
        routeDiagram: {
          kind: 'flow',
          title: 'Resolve the port before the landscape',
          intro: 'Day versus overnight is not a reliable pier shortcut. Lock each handoff to the named boat.',
          steps: [
            ['Booking', 'Record vessel + exact port', 'Confirm Tuần Châu or Hạ Long International Passenger Port from the operator’s current booking.'],
            ['Transfer', 'Match the vehicle drop-off', 'Send the same port name and gate to the hotel or driver; resolve any mismatch before departure.'],
            ['At sea', 'Follow the approved route', 'Check the live forecast and captain’s call; stops and activities can change with conditions.'],
            ['Return', 'Protect the shore connection', 'Use the confirmed disembarkation port and leave a road buffer; avoid a same-evening flight or fixed train.']
          ],
          fallbackTitle: 'If the sailing is cancelled',
          fallback: 'Keep a land-based Ha Long day or a rescheduled sailing as separate options. Do not assume another cruise leaves from the same port or honors the original booking.'
        },
        arrivalLabel: 'Pier contract',
        boundaryLabel: 'Authority call',
        stages: [
          ['Match boat and pier', 'Compare the operator’s current booking with the management board’s daytime or overnight list. If the booking does not name a port, ask before paying the transfer.'],
          ['Read what is included', 'Confirm cabin, tender, meal, cave stop and activity terms with this vessel; route names do not guarantee every stop.'],
          ['Check the marine call', 'Review the current bay notice and operator cancellation policy. Wear required safety equipment and accept route changes made for sea state.'],
          ['Land with margin', 'Plan from the vessel’s actual port, allow road time and keep an unbooked buffer after disembarkation instead of chaining a same-evening flight.']
        ],
        risks: [
          ['Port mismatch', 'Tuần Châu and Hạ Long International Passenger Port are separate road destinations. A transfer booked to the wrong one can mean a missed check-in.'],
          ['Weather or closure', 'Wind and squalls may change the itinerary or suspend sailing. Keep a shore day available and check the operator’s reschedule and refund terms.'],
          ['Tender and habitat', 'Wet transfers and managed landings need crew direction. Keep life-jacket rules, wildlife distance and no-litter boundaries intact.']
        ],
        duration: 'Reserve the full operating window stated for the specific sailing, plus road time at both ends. Overnight products need a separate check of check-in and next-day disembarkation.',
        combine: 'Use Ha Long city as a land-side buffer before or after the cruise. Treat Cat Ba as a separate base with its own ferry or road connection, not an automatic add-on.',
        verify: 'Check vessel identity, named port and gate, approved route, day-of weather notice, cancellation terms, safety equipment and final road transfer.'
      },
      {
        slug: 'bai-tu-long',
        name: 'Bai Tu Long Bay',
        motif: 'quieter archipelago and carrying capacity',
        instrument: 'compass',
        reviewDate: '12 October 2026',
        isoDate: '2026-10-12',
        sources: [
          ['https://vuonquocgiabaitulong.vn/vi', 'Bai Tu Long National Park — current published visitor routes and Ao Tiên departure; site says it is in trial'],
          ['https://vuonquocgiabaitulong.vn/vi/diem-den/3', 'Bai Tu Long National Park — route description and named island sequence'],
          ['https://halongbay.com.vn/en/p/1013-canh-bao-som-dong-loc-tren-bien', 'Ha Long Bay Management Board — bay squall notices and linked live warning service'],
          ['https://whc.unesco.org/en/list/672/', 'UNESCO — Ha Long Bay–Cat Ba Archipelago']
        ],
        searchKeywords: ['bai tu long bay route', 'ao tien port van don', 'bai tu long national park boat route', 'tra ngo lon cai lim mang ha', 'bai tu long weather cancellation'],
        image: image({ src: '/assets/images/vietnam-bai-tu-long.webp', alt: 'Satellite view of the islands and waters of Bai Tu Long Bay', source: 'https://commons.wikimedia.org/wiki/File:Bai_Tu_Long_Bay.jpeg', label: 'Bai Tu Long Bay.jpeg', creator: 'NASA Earth Observatory images by Joshua Stevens using USGS Landsat data', license: 'Public domain' }),
        summary: 'Plan Bai Tu Long as a Vân Đồn day or overnight route: the national park’s published itineraries depart Ao Tiên, then follow named island stops and return by the booked boat.',
        lead: 'Bai Tu Long is the eastward archipelago beyond Ha Long City, not a quiet extension of a Tuần Châu cruise. The national park’s published visitor routes start at Cảng Ao Tiên in Vân Đồn. One listed sequence goes from Ao Tiên to Vụng Trà Thần (Trà Ngọ Lớn), Cái Lim, the Máng Hà overnight anchorage and Cái Dé. The park site says it is in trial, so treat that as a route example, not a guaranteed departure or permit.',
        orientation: 'Map this as a mainland-to-outer-islands trip: Vân Đồn town / Ao Tiên first, then the exact park- and operator-approved water sequence, then the same confirmed return pier. Ao Tiên is a separate drive from Ha Long City’s cruise ports. Do not buy a Ha Long City transfer for a Vân Đồn departure.',
        arrival: 'Before payment, get the operator and park confirmation in writing: Ao Tiên gate and check-in time, route and landing permissions, vessel name, overnight anchorage if relevant, meal/water plan, return time and shore contact. The park’s own trial notice means its web route list does not prove that a trip is currently operating.',
        sequence: 'Travel to Ao Tiên in Vân Đồn; board only the confirmed route; follow its published island order; return to Ao Tiên. The cited example runs Trà Thần / Trà Ngọ Lớn → Cái Lim → Máng Hà anchorage → Cái Dé. Keep Ha Long City and Cat Ba on separate days rather than attempting a same-day cross-bay transfer.',
        boundary: 'Stay with the permitted route and captain’s call. Do not arrange an unlisted landing, enter aquaculture gear or treat a published park itinerary as permission to charter into a restricted zone.',
        routeDiagram: {
          kind: 'flow',
          title: 'Follow the Ao Tiên route contract',
          intro: 'A published park route is a planning reference. Confirm that the route, landing and return are operating for your date.',
          steps: [
            ['Mainland · Vân Đồn', 'Check in at Ao Tiên', 'Confirm the exact gate, vessel, time and return pier; this is not either Ha Long City cruise port.'],
            ['Outer bay · eastward', 'Use the named itinerary', 'One park-listed sequence names Trà Thần / Trà Ngọ Lớn, Cái Lim, Máng Hà anchorage and Cái Dé.'],
            ['On the islands', 'Land only where approved', 'Use the operator’s current permits and local instructions; the park website notes that it is in trial.'],
            ['Return · same gateway', 'Reach Ao Tiên with margin', 'Add a Vân Đồn overnight or spare day if the boat, weather or road return is not protected.']
          ],
          fallbackTitle: 'If the park route does not run',
          fallback: 'Stay ashore in Vân Đồn or move the boat day. Do not improvise a private landing or substitute a Ha Long City ticket without a new pier and itinerary confirmation.'
        },
        arrivalLabel: 'Ao Tiên contract',
        boundaryLabel: 'Permitted route',
        stages: [
          ['Reach Vân Đồn first', 'Plan the road to Cảng Ao Tiên and save its exact gate. Ask whether your booking includes any land transfer from Ha Long City or Hanoi; do not assume it does.'],
          ['Confirm the route in use', 'Compare your booking with the park’s published list, including the named sequence and return pier. Confirm operation directly because the site marks itself as in trial.'],
          ['Travel the approved island order', 'Carry water, sun and motion-sickness supplies. Follow crew directions at Trà Ngọ Lớn, Cái Lim, Máng Hà or Cái Dé and remain inside permitted landings.'],
          ['Return to Ao Tiên', 'Keep a Vân Đồn night or shore day in reserve. Do not tie an exposed-water return to a fixed evening train, flight or Cat Ba ferry.']
        ],
        risks: [
          ['Wrong gateway', 'Ao Tiên is in Vân Đồn, east of Ha Long City. A car sent to Tuần Châu or Hạ Long International Passenger Port will not reach the right check-in.'],
          ['Sea or route closure', 'Squalls, wind or management decisions may cancel or shorten the route. The captain and authorities decide; keep an uncommitted shore day and confirm refund or rebooking terms.'],
          ['Unverified park listing', 'The national park website states that it is in trial. Confirm current permits, access and island landing with park management and the licensed operator before traveling.']
        ],
        duration: 'Reserve the full booked operating window and road transfer to Ao Tiên. For an overnight route, keep the night aboard only if the named anchorage and next-day return are confirmed.',
        combine: 'Use one bay route per day. Compare Bai Tu Long with Ha Long core by landscape and access, but do not try to join Ao Tiên, a Ha Long City port and Cat Ba in one day.',
        verify: 'Confirm Ao Tiên gate, park/permit status, vessel and route order, approved landings, current marine notice, return port, emergency contact and cancellation terms.'
      },
      {
        slug: 'sung-sot-titov',
        name: 'Sung Sot Cave and Titov Island',
        motif: 'cave chamber and island climb',
        instrument: 'fold',
        reviewDate: '13 October 2026',
        isoDate: '2026-10-13',
        sources: [
          ['https://halongbay.com.vn/tours', 'Ha Long Bay Management Board — VHL2 published route inventory, checked 13 October 2026; not a live sailing or access confirmation'],
          ['https://halongbay.com.vn/en/p/1013-canh-bao-som-dong-loc-tren-bien', 'Ha Long Bay Management Board — early squall warning updated 11 July 2026; use current notices and the captain’s decision'],
          ['https://whc.unesco.org/en/list/672/', 'UNESCO World Heritage Centre — Ha Long Bay–Cat Ba Archipelago and visitor-management context']
        ],
        searchKeywords: ['sung sot cave titov island VHL2 route', 'ha long two night cruise base', 'tuan chau ha long named cruise port', 'titov stairs cave closure weather'],
        image: image({ src: '/assets/images/vietnam-sung-sot.webp', alt: 'A large chamber inside Sung Sot Cave in Ha Long Bay', source: 'https://commons.wikimedia.org/wiki/File:A_large_cave_inside_the_Sung_Sot_cave_is_brightly_flood_lit_%2831489274102%29.jpg', label: 'A large cave inside the Sung Sot cave is brightly flood lit (31489274102).jpg', creator: 'shankar s.', license: 'CC BY 2.0' }),
        arrivalLabel: 'Book one named bay route',
        boundaryLabel: 'Stay inside today’s order',
        summary: 'Use Ha Long City as the base for one confirmed cruise that lists both Sung Sot Cave and Titov Island; the management board’s VHL2 page is a route listing, not live access.',
        lead: 'Sung Sot and Titov are connected by a boat itinerary, not independent stops to reach from Ha Long City. The Management Board’s published VHL2 sequence lists Soi Sim, Ti Tốp, then Hang Sửng Sốt among other stops. That is a published route inventory only: it does not tell you whether your vessel sails it today, which pier it uses, whether both landings are open or how long each stop lasts. Match the booking to the named vessel and port before paying.',
        orientation: 'Choose two nights near the exact Ha Long City port named by your booking if you want one cruise day between arrival and departure. Three nights give a full shore day to move the cruise after a weather cancellation. The two stops suit visitors comfortable with a tender, uneven cave stairs and exposed uphill walking; choose a shorter confirmed itinerary if one of those efforts is unsuitable. Do not lodge in Cat Ba or Vân Đồn for a Ha Long City sailing without confirming the separate transfer.',
        arrival: 'First get the operator’s vessel name, actual boarding port, check-in cutoff, included route and return port in writing. Ha Long Bay has more than one passenger port; a city hotel address or “Ha Long cruise” label does not establish the pier. Go to that named port, board only the confirmed vessel, and use its tender and crew for the listed landings. Current port assignment, ticket, landing status and visiting duration remain unknown until the operator and management confirm them.',
        sequence: 'Keep arrival day ashore in Ha Long City. On the reserved cruise day, follow the operator’s approved order; if it confirms VHL2 for your departure, the board’s published list places Soi Sim Beach and Ti Tốp before Sửng Sốt Cave. Wear grippy shoes, take stairs only while footing and energy remain sound, then return to the same named boat and port. Do not try to stitch the cave and island together independently or assume a separate ferry/tender exists.',
        boundary: 'Do not touch cave surfaces, cross barriers, swim outside a currently designated and supervised zone or pressure the crew to land during unsafe conditions. The Board’s 11 July 2026 early-warning notice describes fast-developing squalls and a bay warning system; it is a hazard reference, not today’s forecast or permission to sail. If the route is cancelled or a landing closed, remain ashore or return by the confirmed plan, move the cruise to your buffer day, or omit it. No unverified substitute boat, cave or island is recommended.',
        stages: [
          ['Start from the booked port', 'Match vessel, pier, check-in and return port in writing. Keep arrival and departure days ashore; do not infer the pier from the city name.'],
          ['Follow the sailing order', 'The Board’s VHL2 listing names Soi Sim, Ti Tốp and Sửng Sốt in that sequence. Board only if the operator confirms both sites on your live sailing.'],
          ['Take the cave slowly', 'Use the permitted stair path and handrails, keep the group moving through narrow points, and turn back if fatigue, crowding or wet footing makes the descent unsafe.'],
          ['Return with the crew', 'Titov’s shore and viewpoint require a separate landing and uphill effort. If weather, closure or the operator removes it, do not seek a private transfer; use the shore buffer or skip the stop.']
        ],
        risks: [
          ['Route listing is not today’s ticket', 'The Management Board lists VHL2 and its stops, but the itinerary page does not confirm a vessel, pier, operating date, landing or admission. Obtain all five from the operator and authority.'],
          ['Stairs, crowds and sea state', 'The cave and island involve different physical efforts. Use the crew’s timing and route, and skip a climb or water entry when the surface, crowd, heat or sea is unsafe.'],
          ['Squall or closure', 'The 11 July 2026 Board notice explains a local warning system; conditions can change quickly. Follow current management and captain decisions, and preserve a full shore day if sailing is important.']
        ],
        duration: 'Reserve one full cruise day between two Ha Long City nights for arrival, the sailing and departure; this assumes the actual intercity transfer fits those days and is not a guaranteed timetable. Three nights allow one uncommitted shore day to move or miss a cancelled cruise. Keep the operator’s check-in and return window clear of a fixed onward train or flight.',
        combine: 'Do not add Cat Ba, Bai Tu Long or another Ha Long port on this same day. Compare the confirmed Ha Long route with those distinct gateways before choosing the base; changing bays means a separate transfer and often a different boarding port.',
        verify: 'Checked 13 October 2026: the Board’s published VHL2 listing includes Soi Sim, Ti Tốp and Sửng Sốt; its 11 July squall notice is not a live forecast. Confirm the named vessel, pier, sailing date, route order, cave and island access, time ashore, stair condition, swimming boundary, cancellation/refund terms and return port. If the authority or captain closes a stop, follow the closure and use the shore day or omit it.'
      },
      {
        slug: 'lan-ha-town',
        name: 'Cat Ba Town and Lan Ha Bay',
        motif: 'island base and sheltered water',
        instrument: 'ribbon',
        reviewDate: '12 October 2026',
        isoDate: '2026-10-12',
        sources: [
          ['https://haiphong.gov.vn/lich-tau-pha/dieu-chinh-lich-chay-pha-ben-dong-bai-cai-vieng-tu-ngay-1-9-2026-964317', 'Hai Phong People’s Committee — current Đồng Bài–Cái Viềng ferry timetable, 1 September–31 December 2026'],
          ['https://soxd.haiphong.gov.vn/tin-tuc/dung-hoat-dong-chay-pha-dong-bai-cai-vieng-va-pha-duong-ao-de-phong-chong-bao-so-4-thong-bao-so--952821', 'Hai Phong Department of Construction — weather-related ferry suspension notice'],
          ['https://sunworld.vn/en/cat-ba/transportation/how-to-get-from-hai-phong-to-cat-ba-quickly-and-conveniently-in-2026-29061', 'Sun World Cat Ba — Đồng Bài, Cái Viềng and cable-car transfer options'],
          ['https://sunworld.vn/en/cat-ba/transportation/how-to-get-from-cat-ba-to-lan-ha-bay-a-detailed-guide-29071', 'Sun World Cat Ba — Bến Bèo departure and Lan Ha boat options'],
          ['https://sunworld.vn/en/cat-ba/transportation', 'Sun World Cat Ba — current cable-car information'],
          ['https://halongbay.com.vn/en/p/1013-canh-bao-som-dong-loc-tren-bien', 'Ha Long Bay Management Board — squall and marine-condition notices']
        ],
        searchKeywords: ['cat ba ferry dong bai cai vieng timetable', 'cai vieng to cat ba town', 'cat hai phu long cable car', 'ben beo lan ha bay pier', 'lan ha bay boat weather cancellation'],
        image: image({ src: '/assets/images/vietnam-lan-ha.webp', alt: 'Limestone islands seen from a boat in Lan Ha Bay', source: 'https://commons.wikimedia.org/wiki/File:Lan_Ha_Bay_05.jpg', label: 'Lan Ha Bay 05.jpg', creator: 'Christophe95', license: 'CC BY-SA 4.0' }),
        summary: 'Route to Cat Ba Town through Đồng Bài–Cái Viềng, then use Bến Bèo for a separately booked Lan Ha boat. A 2026 ferry timetable and storm fallback make the handoffs explicit.',
        lead: 'Lan Ha is a boat day from Cat Ba Town, not the ferry crossing itself. From mainland Hai Phong, the car ferry runs Đồng Bài → Cái Viềng; then allow roughly 25 km by island road to town. A passenger alternative is the Cát Hải → Phù Long cable car, followed by about 17 km by road. In town, Bến Bèo is the usual Lan Ha departure pier, around 3 km / 10 minutes by road. Confirm the exact boat, pier and pickup before setting the day.',
        orientation: 'Keep the handoffs in order: mainland Hai Phong → Đồng Bài terminal → Cái Viềng terminal → Cat Ba Town → Bến Bèo → booked Lan Ha route → Bến Bèo → town. The cable car replaces the ferry crossing only for passengers and still needs a road transfer from Phù Long; verify its operating hours and luggage rules. Do not assume a town hotel pickup is included.',
        arrival: 'For 1 September–31 December 2026, the city’s posted Cái Viềng–Đồng Bài schedule opens at 05:00, runs through a 17:30 last departure arriving at 18:00, and has alternating service about every 30–40 minutes; the notice allows extension to 19:00 in some conditions. It is a dated timetable, not a guarantee: storms can suspend the crossing. Save both terminal names and the Lan Ha boat’s Bến Bèo check-in separately.',
        sequence: 'Prefer a transfer day, then a full sea day. On the first day, cross at Đồng Bài, land at Cái Viềng, travel to Cat Ba Town and confirm tomorrow’s Bến Bèo pickup. On the boat day, follow the operator’s route and return to Bến Bèo before the agreed time. No tight rail or flight connection should follow either crossing or boat.',
        boundary: 'A ferry timetable does not promise a Lan Ha sailing. Use the ferry operator for the crossing and a separately identified boat operator for Bến Bèo; the boat captain can shorten or cancel for wind, rain or unsafe water.',
        routeDiagram: {
          kind: 'flow',
          title: 'Two days, two different boats',
          intro: 'Protect the mainland crossing and the Lan Ha departure as separate handoffs.',
          steps: [
            ['Mainland · Hai Phong', 'Choose ferry or cable car', 'Car ferry: Đồng Bài → Cái Viềng. Passenger alternative: Cát Hải → Phù Long cable car, then road transfer.'],
            ['Island · transfer day', 'Cái Viềng to Cat Ba Town', 'Allow about 25 km by road after the ferry; save a town hotel pin and tomorrow’s Bến Bèo pickup.'],
            ['Sea day · Bến Bèo', 'Board the booked Lan Ha route', 'Bến Bèo is about 3 km / 10 minutes from town. Confirm route, check-in, PFD and return time with the operator.'],
            ['Exit · protect the return', 'Return to the same pier', 'Use a land day or extra night if ferry service or sea conditions are doubtful; do not chain a fixed departure.']
          ],
          fallbackTitle: 'If weather stops the crossing or boat',
          fallback: 'Wait for the official ferry restart or move the sea day. Once already on Cat Ba, choose a road-based park/cave visit only if the site and road are open and safe.'
        },
        arrivalLabel: 'Two transfer contracts',
        boundaryLabel: 'Separate operators',
        stages: [
          ['Book the mainland handoff', 'Decide whether vehicle and luggage require Đồng Bài–Cái Viềng ferry or whether the Cát Hải–Phù Long cable car works for your party. Check current hours, baggage and road connection.'],
          ['Reach town before the boat day', 'After Cái Viềng, allow the island-road transfer to Cat Ba Town. If using the cable car, arrange the separate Phù Long road leg. Keep one night between the long transfer and a timed Bến Bèo check-in.'],
          ['Depart from Bến Bèo', 'Save the pier pin and meet the named Lan Ha operator. Confirm the route, boat, life jackets, included kayaking/swimming stops and latest return before boarding.'],
          ['Return with a shore buffer', 'Come back to Bến Bèo, then use a separate road transfer. A ferry delay or squall can erase the last connection; preserve an extra island night or transfer day.']
        ],
        risks: [
          ['Dated ferry clock', 'The posted schedule covers 1 September–31 December 2026. Departures may extend or stop for weather and safety; recheck Hai Phong’s current notice before travel.'],
          ['Pier or road mismatch', 'Cái Viềng is not Cat Ba Town and Bến Bèo is not the ferry terminal. Confirm who supplies the 25 km island road leg and the separate town-to-pier transfer.'],
          ['Unsafe sea state', 'Wind, rain or rough water can alter route, kayaking and swimming. Follow the skipper, use a PFD and move the trip rather than bargaining for a departure.']
        ],
        duration: 'Allow at least two nights: one transfer/settling night and one full Lan Ha day. A weather buffer or late ferry makes a third night safer.',
        combine: 'Use another day for Cat Ba National Park or Viet Hai. Do not combine a full Lan Ha boat route with the mainland ferry or an inland forest trail.',
        verify: 'Recheck the current ferry timetable and weather notices, cable-car hours/luggage if used, Cái Viềng road transfer, Bến Bèo check-in, boat safety gear and exact return.'
      },
      {
        slug: 'national-park',
        name: 'Cat Ba National Park',
        motif: 'island forest and langur protection',
        instrument: 'transect',
        reviewDate: '12 October 2026',
        isoDate: '2026-10-12',
        sources: [
          ['https://catba.net.vn/?lang=en', 'Cat Ba National Park — official park information; check directly for current entry and trail status'],
          ['https://sunworld.vn/en/cat-ba/transportation/how-to-travel-between-tourist-attractions-in-cat-ba-29058', 'Sun World Cat Ba — current island road and attraction sequence context'],
          ['https://whc.unesco.org/en/list/672/', 'UNESCO — Ha Long Bay–Cat Ba Archipelago']
        ],
        searchKeywords: ['cat ba national park entrance from town', 'cat ba park trail weather closure', 'quan y cave trung trang cave route', 'cat ba forest park access', 'cat ba national park official visitor information'],
        image: image({ src: '/assets/images/vietnam-cat-ba-park.webp', alt: 'Forest landscape in Cat Ba National Park', source: 'https://commons.wikimedia.org/wiki/File:Cat_Ba_National_Park_267.JPG', label: 'Cat Ba National Park 267.JPG', creator: 'Schwede66', license: 'CC BY-SA 3.0' }),
        summary: 'Plan a road-based day from Cat Ba Town: choose one forest trail only after the park confirms current access; add Quan Y and Trung Trang caves only if open and daylight permits.',
        lead: 'The park is the island’s landward route, separate from the Bến Bèo boat day. From Cat Ba Town, travel north by island road to the current park entrance; arrange the outbound ride and a named return pickup before leaving. If the park and caves confirm access, keep the order northward: one marked forest trail first, then Quan Y Cave, then Trung Trang Cave. The cave stops sit along the island’s north-road corridor; this is an optional land loop, not a guaranteed park itinerary.',
        orientation: 'Build the day from Cat Ba Town outward rather than trying to walk the whole island. Select a single trail from the park’s current map; add Quan Y and Trung Trang only after checking that each is open and that your driver can wait or return. The park’s official page is the authority for entry and trail rules, but its live visitor details could not be confirmed in this review; do not infer hours, guide requirements or ticket terms from old listings.',
        arrival: 'Book a road transfer from town to the park’s current public entrance and agree the return time/pickup in advance; do not count on a spontaneous car from a forest road. Ask the park directly for today’s open trail, admission, guide requirement and weather closure. If including caves, confirm their separate opening and entry rules before the car leaves town.',
        sequence: 'Start early with one marked forest trail while conditions are cool. Return to the road and continue north to Quan Y Cave, then Trung Trang Cave, only if both are open and the driver/daylight buffer remains. Heavy rain, thunderstorms, slippery roots or a late start are reasons to shorten the forest walk or cancel it; never continue into an unmarked path to save a stop.',
        boundary: 'Stay on the current marked route and obey park staff. Do not call, follow, feed or flash wildlife; Cat Ba langurs are endangered. A drone requires permission. Leave caves and forest exactly as found.',
        routeDiagram: {
          kind: 'flow',
          title: 'A north-island road day from town',
          intro: 'This sequence depends on same-day park and cave access; confirm each stop before leaving Cat Ba Town.',
          steps: [
            ['Base · Cat Ba Town', 'Arrange both road legs', 'Save the current public park entrance and a confirmed return pickup; do not assume a late ridehail.'],
            ['First · forest', 'Walk one park-confirmed marked trail', 'Use the park’s current map and turnaround advice. Heat, rain, slippery roots or low light shorten the route.'],
            ['Then · north road', 'Quan Y Cave, if open', 'Treat this as a separate stop with its own access check, not an automatic part of the trail ticket.'],
            ['Last · north road', 'Trung Trang Cave, if open', 'Finish with the road-side cave only when access, daylight and the return car are still confirmed.']
          ],
          fallbackTitle: 'If rain or access closes the trail',
          fallback: 'Skip the forest hike. Use a cave or short road visit only if that site is separately open and the road is safe; otherwise return to town and reschedule.'
        },
        arrivalLabel: 'Road pickup contract',
        boundaryLabel: 'Wildlife and trail limit',
        stages: [
          ['Fix the road plan', 'Start in Cat Ba Town. Save the park’s current entrance, driver number, meeting point and return pickup; ask whether the vehicle waits or returns at a fixed time.'],
          ['Take one marked trail', 'Check the official map and current park instructions, then choose a length and stair profile that fits the group. Turn around if heat, wet roots or weather makes footing uncertain.'],
          ['Continue north only if open', 'Use the island-road corridor to Quan Y Cave and then Trung Trang Cave, checking each site separately. Skip either stop if its gate, road or daylight window is not confirmed.'],
          ['Return before conditions worsen', 'Carry water and rain protection, keep a time margin for the drive back and return to town before storms or low light. Do not depend on finding a new ride at a remote stop.']
        ],
        risks: [
          ['Rain and trail footing', 'Humidity, steep steps and wet roots make falls and heat illness more likely. In heavy rain, thunder or poor visibility, shorten or cancel the forest leg.'],
          ['Wildlife disturbance', 'Never feed, call, chase, flash or leave the trail to follow a langur. Keep voices low and report concerns to park staff.'],
          ['Unconfirmed admission or return', 'Trail access, ticket, guide and cave hours can change. The park’s live visitor details were not independently accessible during this review; confirm direct with management and the driver.']
        ],
        duration: 'Allow one full daylight block for a single trail plus up to two road-side caves if currently open. Reserve extra time for the island-road transfer and driver wait.',
        combine: 'Keep this separate from a full Lan Ha cruise. Pair with Viet Hai only if the park confirms a connected route and your group has enough daylight, fitness and return transport.',
        verify: 'Contact the park about entrance, trail map, admission/guide rules and weather closures; confirm Quan Y and Trung Trang opening, road pickup, rain forecast, shoes, water and turnaround time.'
      },
      {
        slug: 'viet-hai-cai-beo',
        name: 'Viet Hai and Cai Beo',
        motif: 'village road and marine livelihood',
        instrument: 'field',
        reviewDate: '13 October 2026',
        isoDate: '2026-10-13',
        sources: [
          ['https://haiphong.gov.vn/lich-tau-pha/dieu-chinh-lich-chay-pha-ben-dong-bai-cai-vieng-tu-ngay-1-9-2026-964317', 'Hai Phong People’s Committee — Đồng Bài–Cái Viềng schedule published 14 September 2026, stated for 1 September–31 December 2026'],
          ['https://soxd.haiphong.gov.vn/tin-tuc/dung-hoat-dong-chay-pha-dong-bai-cai-vieng-va-pha-duong-ao-de-phong-chong-bao-so-4-thong-bao-so--952821', 'Hai Phong Department of Construction — ferry suspension notice dated 21 August 2026 for Typhoon No. 4; an example of weather closure, not a current status'],
          ['https://catba.net.vn/?lang=en', 'Cat Ba National Park — official visitor information; checked 13 October 2026, page did not return readable current route details'],
          ['https://whc.unesco.org/en/list/672/', 'UNESCO World Heritage Centre — Ha Long Bay–Cat Ba Archipelago, management and local-community context']
        ],
        searchKeywords: ['dong bai cai vieng ferry schedule cat ba', 'cat ba town viet hai park access route', 'cai beo fishing village boat landing', 'cat ba ferry weather suspension 2026'],
        image: image({ src: '/assets/images/vietnam-viet-hai.webp', alt: 'Rice fields in Viet Hai on Cat Ba Island', source: 'https://commons.wikimedia.org/wiki/File:Vi%E1%BB%87t_H%E1%BA%A3i%2C_C%C3%A1t_B%C3%A0_Island%2C_Vietnam%2C_20240131_1211_4613.jpg', label: 'Việt Hải, Cát Bà Island, Vietnam, 20240131 1211 4613.jpg', creator: 'Jakub Hałun', license: 'CC BY 4.0' }),
        arrivalLabel: 'Cross first, then confirm the island leg',
        boundaryLabel: 'A working village and fishing water',
        summary: 'Use Cat Ba Town as the base, cross Đồng Bài–Cái Viềng by the dated official ferry schedule, and add Viet Hai or Cai Beo only after each distinct island route and return is confirmed.',
        lead: 'Viet Hai is a rural community route and Cai Beo is a working fishing-water setting; they are separate decisions, not one automatic village-and-boat circuit. Cat Ba National Park’s website returned no readable current visitor route during this review, and no official Cai Beo visitor landing was confirmed. Plan the mainland ferry handoff precisely, then ask park management and the named marine operator for the actual island access, endpoint, return time and community rules before adding either chapter.',
        orientation: 'Base in Cat Ba Town. Two nights fit the mainland crossing, one full day for a single route that has been confirmed, and the return crossing. Three nights provide a second separate land or marine day if both are confirmed. Four nights make room for both routes and a weather/ferry reserve. Do not assume Viet Hai and Cai Beo share a boat, pier, ticket, park entry or day schedule; they remain independent until an operator confirms a connected itinerary.',
        arrival: 'For the published schedule window 1 September–31 December 2026, Hai Phong’s 14 September notice says the Đồng Bài–Cái Viềng ferry terminals open at 05:00, scheduled service runs to 18:00, the general interval is about 30–40 minutes, and the final listed departure is 17:30 arriving at 18:00; extension to 19:00 may depend on conditions. These are dated details, not a guarantee outside that window or during disruption. Chain mainland Hai Phong → Đồng Bài terminal → ferry → Cái Viềng → pre-arranged island-road transfer → Cat Ba Town. Confirm vehicle space, queue, hotel pickup and reverse crossing; no late cable-car or other pier alternative is verified here.',
        sequence: 'Keep the first day for the mainland-to-town transfer and the last day for the reverse handoff. On a Viet Hai day, leave town only after park management names the current gate or landing, route, guide/vehicle or boat segments, cutoff and same-day return; those links could not be verified on 13 October. On a separate Cai Beo day, use a named operator that confirms boarding pier, authorized landing or viewing boundary, tide decision and return. Do not count on walking between the two chapters or connecting to the ferry on the same day.',
        boundary: 'Do not enter homes, fields, farms, boats, fish pens or private shoreline without invitation; ask before photographing residents and workers. The official Department of Construction stopped the Đồng Bài–Cái Viềng ferry from 07:00 on 22 August 2026 for Typhoon No. 4, showing why a timetable cannot be treated as a guarantee. If the ferry or either island route closes, wait on the safe side, extend the Cat Ba Town or mainland night and rebook only when the responsible authority confirms reopening. Do not improvise another pier, cable car, village road or private boat.',
        stages: [
          ['Reach Cat Ba Town', 'Cross Hai Phong → Đồng Bài → Cái Viềng, then take a pre-arranged island-road transfer. The published 2026 ferry timetable ends with a 17:30 departure arriving at 18:00; check the notice for your travel date.'],
          ['Confirm Viet Hai separately', 'Ask park management for the current gate/landing, route, guide, transport chain, cutoff and return. The park page supplied no readable current route details in this review.'],
          ['Confirm Cai Beo separately', 'Get the named operator, pier, lawful landing or viewing boundary, tide/weather call and return time. A fishing-area map pin alone is not permission to board or land.'],
          ['Protect the return crossing', 'Use a separate buffer before the ferry back. If the authority suspends service or the route closes, stay on the safe side and add a night; no substitute crossing is assumed.']
        ],
        risks: [
          ['Weather stops the ferry', 'The 21 August 2026 storm notice suspended service from 07:00 on 22 August; it is historical proof of interruption, not today’s status. Follow the live authority notice and do not assume extension or a second crossing.'],
          ['Unknown island access', 'Viet Hai park routes and Cai Beo visitor landing/boats were not confirmed. Get each exact route, operator and return in writing; if not, omit that day rather than attempting an alternate gate.'],
          ['Heat, tide and community limits', 'Carry water only for a route the responsible team has confirmed. Stay on public or hosted paths, leave work areas clear, and follow the host’s permission and photography boundary.']
        ],
        duration: 'Use two Cat Ba nights for the crossing plus one confirmed full route day; three nights can hold two separate confirmed route days; four add a full ferry/weather reserve. Those counts include arrival and return nights, not guaranteed ferry capacity. Keep the return to Đồng Bài–Cái Viềng on a separate day from a village or marine excursion.',
        combine: 'Do not combine Viet Hai and Cai Beo until park management and a named operator confirm a connected route, both permissions, transfer legs and daylight return. The available official Cat Ba National Park page did not expose current route details during the 13 October 2026 review; current Cai Beo passenger boarding/landing was also not verified. Cat Ba Town remains the practical base while those details are resolved.',
        verify: 'The official Hai Phong schedule dated 14 September 2026 applies 1 September–31 December 2026; it lists 05:00 opening, service through 18:00, a 17:30 last departure arriving at 18:00 and possible extension to 19:00 depending on conditions. Confirm the notice again close to travel, vehicle space and queue. Check current ferry suspension/weather notices, exact Cat Ba road transfer, park-authorized Viet Hai start/end, Cai Beo operator/pier/landing/tide, community permission and the return. If any link is unknown or closed, stop and add a night; no unverified alternate access is proposed.'
      }
    ]
  },
  {
    slug: 'ninh-binh',
    name: 'Ninh Binh',
    region: 'Northern Vietnam',
    family: 'river-heritage',
    label: 'RIVERS / KARST / ANCIENT CAPITAL',
    tagline: 'Let the river, rice season and heritage management set the itinerary.',
    hubIntro: 'Ninh Binh is a landscape region organized around waterways, limestone towers, rice fields and historical sites. Trang An, Tam Coc–Bich Dong, Hoa Lu, Hang Mua, Van Long and Cuc Phuong are close enough to tempt overplanning but distinct enough to deserve separate pages. Make boat capacity, stairs, seasonal scenery, conservation and rural transfers visible from the start.',
    stay: 'Base near Tam Coc for walkable food and boat access, or nearer Ninh Binh City for rail and road convenience. For Cuc Phuong or Van Long, verify the actual transfer and return time rather than assuming a central hotel is equally practical.',
    transfer: 'Hanoi rail and road arrivals reach different parts of the region. Save the pier, park or hotel address in Vietnamese, and leave margin for rural roads, boat queues and weather.',
    sources: [
      ['https://whc.unesco.org/en/list/1438/', 'UNESCO — Trang An Landscape Complex'],
      ['https://vietnam.travel/node/196', 'Vietnam Tourism — Ninh Binh'],
      ['https://vietnam.travel/things-to-do/guide-boat-tours-ninh-binh', 'Vietnam Tourism — Boat Tours in Ninh Binh'],
      ['https://sodulich.ninhbinh.gov.vn/en', 'Ninh Binh Department of Tourism'],
      ['https://vuonquocgiacucphuong.vn/en/', 'Cuc Phuong National Park — official information']
    ],
    guides: [
      {
        slug: 'trang-an-boat-complex',
        name: 'Trang An Boat Complex',
        motif: 'submerged karst and managed boat route',
        instrument: 'tide',
        image: image({ src: '/assets/images/vietnam-trang-an.webp', alt: 'Two-tier traditional pavilion standing in the water below forested limestone cliffs at Trang An', source: 'https://commons.wikimedia.org/wiki/File:Trang_An%2C_Ninh_Binh.jpg', label: 'Trang An, Ninh Binh.jpg', creator: 'GieohatchoHaiLy', license: 'CC0' }),
        summary: 'A UNESCO mixed-heritage boat chapter through submerged valleys, cave passages, temples and controlled visitor routes.',
        lead: 'Trang An is best understood from the water, where karst, caves, archaeology and sacred places align in a managed route. The page should explain route choice and visitor conduct rather than promise a single universal boat experience.',
        orientation: 'Use the official pier and current route map; different loops can vary in cave passages, temples and duration. The complex includes protected areas and working communities.',
        arrival: 'Reach the designated pier with current ticket information and a queue plan. Rural traffic and holiday demand can make a short distance take much longer.',
        sequence: 'Choose the route before boarding, stay seated through cave passages, follow the boatperson’s instructions and leave temples and landing areas clear.',
        boundary: 'Do not stand for photographs, touch cave walls, throw offerings into water or treat residents and boat workers as part of a staged show.',
        stages: [
          ['Select the route', 'Compare the current official loops by cave, temple, physical effort and queue rather than chasing every route in one day.'],
          ['Board carefully', 'Use the pier and boat instructions, keep weight balanced and protect phones and valuables before entering a cave.'],
          ['Read the waterway', 'Notice how forest, karst, submerged valleys and sacred sites form one managed cultural landscape.'],
          ['Leave no trace', 'Stay seated, carry waste back, respect landing rules and exit the pier with a safe rural transfer plan.']
        ],
        risks: [
          ['Boat stability', 'Standing, leaning or sudden movement can destabilize a small boat. Remain seated and keep children within reach.'],
          ['Cave footing', 'Landings and temple paths may be wet or uneven. Use handrails and do not rush ahead of the group.'],
          ['Capacity pressure', 'Queues and temporary closures change. Keep a flexible day and use official ticket channels.']
        ],
        duration: 'Allow a half day for one boat route; a full day works when adding a nearby heritage stop without another long transfer.',
        combine: 'Combine with Hoa Lu or Hang Mua, choosing one land chapter rather than stacking multiple boat loops.',
        verify: 'Check current route options, tickets, pier queues, water and weather, temple rules and rural transport.'
      },
      {
        slug: 'tam-coc-bich-dong',
        name: 'Tam Coc and Bich Dong',
        motif: 'rice-season river and cliff pagoda',
        instrument: 'ribbon',
        image: image({ src: '/assets/images/vietnam-tam-coc.webp', alt: 'Tam Coc river and limestone landscape in Ninh Binh', source: 'https://commons.wikimedia.org/wiki/File:Tam_C%E1%BB%91c.jpg', label: 'Tam Cốc.jpg', creator: 'Shansov.net', license: 'CC BY-SA 3.0' }),
        summary: 'A bicycle-and-boat chapter linking Tam Coc’s rice-field river route with the cliff-side Bich Dong Pagoda.',
        lead: 'Tam Coc is the region’s most legible rural base, but the view changes with water, crop and visitor season. Pair the boat route with a measured ride or transfer to Bich Dong, and avoid presenting harvest colors as a permanent guarantee.',
        orientation: 'Use Tam Coc pier and the surrounding roads as the base, then treat Bich Dong as a separate temple stop with its own stairs and conduct.',
        arrival: 'Reach the pier or hotel by bike, taxi or confirmed transfer. Road shoulders and cycling comfort vary, especially around peak arrival times.',
        sequence: 'Ride or walk before heat builds, take the current Tam Coc boat route, rest away from the pier and visit Bich Dong only with enough time for careful steps.',
        boundary: 'Do not walk into rice fields, block village lanes or photograph worshippers without consent. Temple access is not a shortcut to a better panorama.',
        stages: [
          ['Read the season', 'Check the current crop stage and weather so the itinerary describes what travelers may see rather than guaranteeing a color.'],
          ['Use the pier', 'Board through the official process, remain seated and let the boat route reveal the caves and limestone from water level.'],
          ['Move to Bich Dong', 'Use a safe bicycle or vehicle transfer, then approach the pagoda with appropriate clothing and a slower stair pace.'],
          ['Return through lanes', 'Choose one quiet village road, keep clear of farms and return before heat, rain or darkness reduces cycling safety.']
        ],
        risks: [
          ['Seasonal water and crop', 'River level, rain and rice growth alter the experience. Do not promise identical scenery or boat timing.'],
          ['Cycling traffic', 'Mixed traffic and narrow shoulders require a helmet, visible riding and a vehicle fallback.'],
          ['Religious conduct', 'Wear appropriate clothing, keep quiet and do not touch statues, offerings or cave-temple surfaces.']
        ],
        duration: 'Allow a full day for Tam Coc, Bich Dong and a relaxed rural transfer.',
        combine: 'Combine with Hang Mua only if the group can handle stairs and heat; keep Trang An as a separate boat experience.',
        verify: 'Check boat route and queue, crop season, weather, cycling safety, pagoda access and current road conditions.'
      },
      {
        slug: 'hoa-lu-ancient-capital',
        name: 'Hoa Lu Ancient Capital',
        motif: 'dynastic valley and temple axis',
        instrument: 'axis',
        image: image({ src: '/assets/images/vietnam-hoa-lu.webp', alt: 'Flag-lined path to the Temple of Emperor Le Dai Hanh at Hoa Lu', source: 'https://commons.wikimedia.org/wiki/File:Temple_of_Emperor_Le_Dai_Hanh%2C_Hoa_L%C6%B0%2C_Ninh_B%C3%ACnh%2C_Vietnam%2C_20240203_1525_5704.jpg', label: 'Temple of Emperor Le Dai Hanh, Hoa Lư, Ninh Bình, Vietnam, 20240203 1525 5704.jpg', creator: 'Jakub Hałun', license: 'CC BY 4.0' }),
        summary: 'A history-first chapter through the 10th- and 11th-century capital valley, temple compounds and surrounding limestone geography.',
        lead: 'Hoa Lu is where Ninh Binh’s rock landscape becomes political history. A useful page connects the temples and valley to the ancient capital while keeping modern reconstruction, ritual space and present-day access clearly distinguished.',
        orientation: 'Use the official temple area as the anchor, then read the enclosing mountains and rural roads as strategic geography. Do not treat every nearby religious complex as part of the ancient capital.',
        arrival: 'Reach the site by bicycle, taxi or tour transfer with the correct entrance saved. Events, restoration and traffic can alter the normal approach.',
        sequence: 'Visit the temple compounds early, pause for historical context, then choose one nearby landscape or village road rather than filling the afternoon with unrelated monuments.',
        boundary: 'Keep temple and ritual areas quiet, dress appropriately and do not climb, touch or stage disrespectful poses around relics.',
        stages: [
          ['Enter the valley', 'Use the mountains and narrow approaches to understand why this landscape could support a defensible capital.'],
          ['Read the temple axis', 'Observe the current compounds, inscriptions and rituals without claiming that every visible structure survives unchanged from the dynastic period.'],
          ['Add one context stop', 'Choose a museum, guide or nearby rural section that deepens the history rather than multiplying similar temple gates.'],
          ['Leave the sacred space', 'Return through a clear route, keeping food, cycling and photography outside the quietest ritual areas.']
        ],
        risks: [
          ['Heat and exposed courtyards', 'Start early, carry water and use shade rather than rushing through the temple complex.'],
          ['Historical confusion', 'Separate original evidence, reconstruction and local tradition in captions and avoid unsupported exact dates.'],
          ['Ritual disruption', 'Do not interrupt offerings, touch objects or use loud photography around worshippers.']
        ],
        duration: 'Allow three to five hours; a full day is comfortable when adding one carefully chosen rural or river chapter.',
        combine: 'Combine with Trang An as the land-history counterpart, or with Tam Coc when the group wants a lighter cycling finish.',
        verify: 'Check current entrance, event and restoration notices, weather, transport, dress guidance and photography rules.'
      },
      {
        slug: 'hang-mua-dragon-mountain',
        name: 'Hang Mua and Dragon Mountain',
        motif: 'stairs, ridge and river geometry',
        instrument: 'contour',
        image: image({ src: '/assets/images/vietnam-hang-mua.webp', alt: 'Hang Mua viewpoint and limestone ridge in Ninh Binh', source: 'https://commons.wikimedia.org/wiki/File:Hang_Mua_5.jpg', label: 'Hang Mua 5.jpg', creator: 'Shyamal', license: 'CC BY-SA 4.0' }),
        summary: 'A viewpoint and short-hike chapter for Hang Mua’s uneven stairs, dragon ridge and Tam Coc panorama.',
        lead: 'Hang Mua is a compact but physically demanding viewpoint. The page should make the stair count, heat, narrow ridge and cliff exposure clear so the view remains an option rather than a pressure test.',
        orientation: 'Treat the lower grounds, stair climb and ridge as three separate effort levels. The lower view can still be worthwhile when wind, health or mobility rules out the summit.',
        arrival: 'Reach the current entrance by bike, taxi or tour transfer and confirm parking. Morning and late-afternoon demand can create queues and crowded stair landings.',
        sequence: 'Climb in cooler light, pause at broad landings, avoid blocking the ridge, and descend before storms or heat make the stone unsafe.',
        boundary: 'Never cross railings, climb dragon sculptures or step onto unprotected limestone for a photograph. Do not promise a risk-free summit.',
        stages: [
          ['Choose the effort', 'Decide whether the group wants the lower garden, a partial climb or the summit before entering the stairs.'],
          ['Climb with rhythm', 'Use the handrail, leave space for descending visitors and stop before fatigue affects balance.'],
          ['Read the panorama', 'Identify Tam Coc’s river, rice fields and karst forms from the marked ridge rather than chasing a more extreme edge.'],
          ['Descend early', 'Stone remains hot and slippery after rain; begin the descent with weather and transport margin.']
        ],
        risks: [
          ['Uneven stairs', 'Hundreds of irregular steps can be strenuous. Wear secure shoes, hydrate and turn back without embarrassment.'],
          ['Ridge exposure', 'Crowds and narrow rock amplify fall risk. Stay behind barriers and keep phones away while moving.'],
          ['Heat and storms', 'The viewpoint has limited shade. Avoid the hottest period and leave immediately when thunder approaches.']
        ],
        duration: 'Allow two to four hours depending on the climb and crowd; reserve more time for recovery in the heat.',
        combine: 'Combine with Tam Coc when the group wants river and ridge contrast, but do not add it after a long boat-and-bike day without a mobility check.',
        verify: 'Check current entrance, crowd conditions, stairs, weather, footwear, water and a safe return transfer.'
      },
      {
        slug: 'van-long-wetland',
        name: 'Van Long Wetland Reserve',
        motif: 'quiet water and seasonal wildlife',
        instrument: 'field',
        image: image({ src: '/assets/images/vietnam-van-long.webp', alt: 'Wetland landscape of Van Long Nature Reserve', source: 'https://commons.wikimedia.org/wiki/File:Van_Long_Nature_Reserve.jpg', label: 'Van Long Nature Reserve.jpg', creator: 'Bram Coenen', license: 'CC BY-SA 4.0' }),
        summary: 'A low-noise wetland chapter for boat observation, limestone reflections, birds and protected primate habitat.',
        lead: 'Van Long offers a quieter counterpoint to the busiest Ninh Binh piers. Its value depends on silence, water level, season and the reserve’s wildlife boundaries, so the page should emphasize observation rather than guaranteed sightings.',
        orientation: 'Use the official reserve boat point and current route. Treat the wetland as habitat first, visitor experience second.',
        arrival: 'Travel by rural road and confirm the operating boat, ticket and return time. Services are limited compared with Tam Coc.',
        sequence: 'Arrive during a calm daylight window, keep the boat quiet, observe from the permitted route and leave before heat, rain or low visibility.',
        boundary: 'No flash, loud playback, feeding, collecting or pursuing animals. Do not ask boatpeople to leave the route for a closer wildlife photograph.',
        stages: [
          ['Check the wetland', 'Confirm water, weather, boat operation and any seasonal access notice before making the long rural transfer.'],
          ['Board quietly', 'Keep movement and conversation low so the reserve remains usable for wildlife and other visitors.'],
          ['Observe without chasing', 'Use binoculars or a long lens, accept an imperfect view and leave animals their escape distance.'],
          ['Return gently', 'Carry waste out, keep the pier clear and use the confirmed rural transfer rather than waiting after dark.']
        ],
        risks: [
          ['Water and weather', 'Heavy rain, water level and wind can alter boat operation. Do not force a wetland visit in unsafe conditions.'],
          ['Wildlife disturbance', 'Noise and flash can stress birds and primates. Follow the boatperson and reserve staff.'],
          ['Remote return', 'Limited taxis and lighting make a late exit brittle. Confirm the driver and pickup before boarding.']
        ],
        duration: 'Allow a half day including the rural transfer; a full day works when paired with one nearby low-intensity village stop.',
        combine: 'Combine with Cuc Phuong only as a multi-day nature itinerary, not as two distant same-day guarantees.',
        verify: 'Check current reserve hours, water and weather, boat route, wildlife rules, driver contact and return lighting.'
      },
      {
        slug: 'cuc-phuong-conservation',
        name: 'Cuc Phuong Forest and Conservation',
        motif: 'old forest and rescue work',
        instrument: 'transect',
        image: image({ src: '/assets/images/vietnam-cuc-phuong.webp', alt: 'Sunlight filtering through dense forest in Cuc Phuong National Park', source: 'https://commons.wikimedia.org/wiki/File:Forest_in_Cuc_Phuong_National_Park_%2815706323528%29.jpg', label: 'Forest in Cuc Phuong National Park (15706323528).jpg', creator: 'hds', license: 'CC BY 2.0' }),
        summary: 'A deep-nature chapter for Cuc Phuong’s forest trails, caves, conservation centers, Muong culture and responsible overnight planning.',
        lead: 'Cuc Phuong needs a full park mindset. Ancient forest, caves, rescue work and community culture are connected by long internal distances and changing visitor rules. The page should favor official conservation experiences over a rushed attraction list.',
        orientation: 'Choose one forest trail, one conservation center or cave focus and one practical base. The park spans a large protected landscape and is not a compact Ninh Binh day-stop.',
        arrival: 'Use the current official entrance, online ticket or visitor process and allow a substantial road transfer from the central Ninh Binh area. Internal transport rules are subject to change.',
        sequence: 'Start with the visitor or conservation information, trek a marked route with a guide when appropriate, and finish before darkness unless an official night program is confirmed.',
        boundary: 'Do not touch wildlife, feed animals, collect plants, enter closed caves or walk alone into protected forest. Rescue centers are not petting attractions.',
        stages: [
          ['Plan the park day', 'Check the official map, current traffic rules, trail closure notices and the group’s heat and fitness limits.'],
          ['Read conservation work', 'Use the visitor center or rescue program to understand why habitat, rescue and tourism boundaries exist.'],
          ['Enter the forest carefully', 'Stay on marked paths, use a guide for complex trails and keep voices low around wildlife and research areas.'],
          ['Exit with margin', 'Return before the road or forest darkens, carrying every wrapper and preserving the next day for recovery.']
        ],
        risks: [
          ['Heat, leeches and terrain', 'Tropical forest conditions require grip shoes, water, first aid and a realistic route length.'],
          ['Wildlife ethics', 'Never feed, touch or call animals. Follow rescue-center boundaries and do not use flash where prohibited.'],
          ['Rules in transition', 'Park traffic, ticketing, trails and tours can change after storms or management updates. Check the official site immediately before visiting.']
        ],
        duration: 'Reserve one full day at minimum; two days are preferable for forest, conservation and a non-rushed return.',
        combine: 'Combine with Van Long only in a multi-day nature plan, preserving a real overnight rather than promising a central-city loop.',
        verify: 'Check the latest park traffic rule, ticket channel, trail and cave closures, guide availability, weather and overnight transport.'
      }
    ]
  },
  {
    slug: 'phong-nha-ke-bang',
    name: 'Phong Nha–Ke Bang',
    region: 'North-Central Vietnam',
    family: 'cave-ecology',
    label: 'CAVES / RIVERS / FOREST',
    tagline: 'Start with an accessible river cave, then earn the expedition layers.',
    reviewDate: '13 October 2026',
    isoDate: '2026-10-13',
    routeModelHeading: 'Build the stay around two field days and one weather reserve.',
    routeModelLead: 'Two nights allow one confirmed cave day between road transfers. Three nights add a second field day or a recovery reserve. Four nights let you separate the village river cave, one independently confirmed forest or river program, and a full weather buffer. These are planning shapes, not promises that sites are open together.',
    hubIntro: 'Phong Nha–Ke Bang is a dispersed cave, river and forest landscape, so the first decision is where to sleep and how much slack to keep. With two nights, place one confirmed Son River–Phong Nha Cave day between transfers; with three, add one separate, confirmed Chay River–Dark Cave program or Nuoc Mooc forest day; with four, give yourself two distinct field days plus a full weather reserve. Base in Phong Nha village when your chosen day routes and confirmed pickup serve that village. Dong Hoi can suit a rail or airport arrival, but it adds a road transfer each way; no public connection, journey time or last departure is assumed here. Park opening, boat operations, water activities, tickets and closure notices must be checked directly. If a river or forest route is shut or conditions are unknown, do not swap to another same-catchment activity as if it were independent.',
    stay: 'Base in Phong Nha village for confirmed local day trips; use Dong Hoi for rail or airport nights and book each road transfer.',
    transfer: 'Connect Dong Hoi rail or airport to the chosen base by a confirmed road pickup; times and public services are unknown.',
    sources: [
      ['https://whc.unesco.org/en/list/951/', 'UNESCO — Phong Nha–Ke Bang and Hin Nam No National Parks'],
      ['https://www.phongnhakebang.vn/home', 'Phong Nha–Ke Bang National Park — official site'],
      ['https://phongnhatourism.com.vn/', 'Phong Nha–Ke Bang Tourism Center — official visitor routes'],
      ['https://phongnhakebang.vn/travel/phong-nha-ky-quan-de-nhat-dong1-en', 'National Park official Phong Nha Cave route page — page unavailable to this review on 13 October 2026; verify current details directly'],
      ['https://phongnhakebang.vn/travel/tuyen-du-lich-song-chay-hang-toi5-en', 'National Park official Chay River–Dark Cave route page — page unavailable to this review on 13 October 2026; verify current details directly'],
      ['https://phongnhakebang.vn/travel/diem-du-lich-sinh-thai-suoi-nuoc-mooc7-en', 'National Park official Nuoc Mooc route page — page unavailable to this review on 13 October 2026; verify current details directly'],
      ['https://www.nchmf.gov.vn/kttv/vi-VN/1/tin-canh-bao-lu-quet-sat-lo-dat-sut-lun-dat-do-mua-lu-hoac-dong-chay-tren-khu-vuc-cac-tinh-thanh-pho-quang-tri-hue-va-da-nang-post54593.html', 'National Centre for Hydro-Meteorological Forecasting — 13 October 2026 flash-flood and landslide bulletin for its named provinces; not a Phong Nha park status or site-specific forecast'],
      ['https://www.nchmf.gov.vn/kttv/', 'National Centre for Hydro-Meteorological Forecasting — check the current locality-specific bulletin before travel']
    ],
    guides: [
      {
        slug: 'son-river-phong-nha-cave',
        name: 'Son River and Phong Nha Cave',
        motif: 'river entrance and accessible cave',
        instrument: 'ribbon',
        image: image({ src: '/assets/images/vietnam-phong-nha-son-river.webp', alt: 'Son River and karst mountains at Phong Nha-Ke Bang', source: 'https://commons.wikimedia.org/wiki/File:Phongnhakebang1.jpg', label: 'Phongnhakebang1.jpg', creator: 'Genghiskhanviet', license: 'Public domain' }),
        reviewDate: '13 October 2026',
        isoDate: '2026-10-13',
        sources: [
          ['https://phongnhakebang.vn/travel/phong-nha-ky-quan-de-nhat-dong1-en', 'National Park official Phong Nha Cave route page — unavailable to this review on 13 October 2026; confirm boats, entrance, route and restrictions directly'],
          ['https://phongnhatourism.com.vn/', 'Phong Nha–Ke Bang Tourism Center — official route and visitor notices; recheck on travel day'],
          ['https://www.nchmf.gov.vn/kttv/', 'National Centre for Hydro-Meteorological Forecasting — current weather and hazard bulletins']
        ],
        searchKeywords: ['son river boat', 'phong nha cave boat status', 'dong hoi transfer', 'cave water level', 'cave closure'],
        summary: 'Plan the Son River boat and Phong Nha Cave as one confirmed chain: village pickup, official pier, managed boat, public cave route and return.',
        lead: 'The useful plan is a linked sequence, not an assumed timetable: stay near the confirmed Phong Nha pickup, reach the official pier, take only the boat route that park staff say is operating, visit the public cave area that is open, then return to the same agreed endpoint. The National Park route page could not be read during this 13 October 2026 review, so departure hours, fares, boat sharing, route distance, cave access and current river limits remain unknown. Confirm those details directly before paying or arranging onward transport.',
        orientation: 'Treat Phong Nha village, the official Son River pier, the boat and the cave entrance as a single out-and-back trip. Dong Hoi is a separate road transfer in each direction; a train or flight arrival does not prove a same-day boat connection. Keep Paradise and Tien Son, Chay River–Dark Cave and remote expeditions as separate operating decisions.',
        arrival: 'Arrange a named road pickup from your actual base to the official visitor point, and agree the return point and wait policy. The public transport, travel time, ticket channel, boat schedule and last return were not verifiable; do not leave a train, flight or hotel checkout buffer to guesswork.',
        sequence: 'Check the current National Park notice and weather; confirm the pier, ticket, boat departure and return endpoint; ride seated under crew directions; use only the route open that day; then return to the agreed village pickup. If water level, closure or the return is uncertain, cancel the river plan rather than improvising a different boat.',
        boundary: 'Stay seated while underway, follow crew and park directions, and keep to the signed public cave route. Do not touch formations, cross barriers, use prohibited flash or assume a closed route is accessible because an older page describes it.',
        stages: [
          ['Choose the base and pickup', 'Book one Phong Nha village base or a Dong Hoi road transfer, then confirm the pickup and return with the actual operator. No timetable or public connection is assumed.'],
          ['Confirm the managed boat', 'Ask the official visitor point whether the pier, boat route, water level, ticket and return service are operating today. If any answer is unknown, do not board.'],
          ['Follow the open cave route', 'Remain seated with the crew and use only the public cave section the park has opened; route length and current restrictions remain unverified here.'],
          ['Return to the agreed endpoint', 'Keep the second transfer and evening free of a tight connection. If the river route closes, return to base and defer rather than substituting another unverified water activity.']
        ],
        risks: [
          ['River and closure status', 'Boat operations, water level, official route and return schedule were not readable in the linked Park page on 13 October 2026. Verify the exact day with the Park; no fixed departure is known.'],
          ['Transfer chain', 'The Dong Hoi–Phong Nha road service, journey time and late return were not verified. Prearrange both legs and do not connect this route to an uncertain train or flight.'],
          ['Water and cave safety', 'Rain, river level, slippery landings and cave restrictions can change the safe route. If staff close or cannot confirm it, do not enter or replace it with another same-catchment activity.']
        ],
        duration: 'Reserve one unhurried field day plus the road transfer. No reliable visit duration, boat interval or last departure was confirmed, so do not schedule an onward train, flight or second attraction on the same day.',
        combine: 'Use a second day for a separate dry cave or forest plan only after its own opening, transfer and weather are confirmed. Do not combine a river cave with Dark Cave or Nuoc Mooc as a same-day closure workaround.',
        verify: 'Recheck the National Park route page and visitor point for today’s pier, boat, fare, ticket, open cave segment, water restriction, weather, cancellation and return pickup; these current details were unavailable to this review.'
      },
      {
        slug: 'paradise-tien-son-caves',
        name: 'Paradise and Tien Son Caves',
        motif: 'dry cave chambers and stair threshold',
        instrument: 'section',
        reviewDate: '12 October 2026',
        isoDate: '2026-10-12',
        sources: [
          ['https://phongnhakebang.vn/travel/dong-thien-duong13-en', 'Phong Nha–Ke Bang National Park — Paradise Cave route description: shaded approach, trek and public boardwalk'],
          ['https://phongnhakebang.vn/travel/dong-tien-son-chon-bong-lai-canh3-en', 'Phong Nha–Ke Bang National Park — Tien Son Cave steps and current public access limit; recheck before travel'],
          ['https://phongnhakebang.vn/travel/phong-nha-ky-quan-de-nhat-dong1-en', 'Phong Nha–Ke Bang National Park — Phong Nha Cave as a separate boat-route fallback']
        ],
        searchKeywords: ['paradise cave route', 'tien son cave stairs', 'phong nha cave access', 'phong nha park shuttle', 'cave walkway', 'cave closure'],
        image: image({ src: '/assets/images/vietnam-paradise-cave.webp', alt: 'Illuminated formations inside Paradise Cave at Phong Nha-Ke Bang', source: 'https://commons.wikimedia.org/wiki/File:Paradise_cave.JPG', label: 'Paradise cave.JPG', creator: 'Tycho', license: 'CC BY-SA 3.0' }),
        summary: 'Choose Paradise Cave for its long public boardwalk or Tien Son for a stair-heavy visit, then plan around the park’s current access limits and transfer rules.',
        lead: 'The useful comparison is physical and operational. The park describes Paradise as a shaded 1.6 km approach, a 500 m walk to the cave and about 1 km of public boardwalk. Tien Son involves roughly 600 stone steps; the park currently says public access reaches only the first 400 m because of a hazard. Recheck that limit before building a two-cave day.',
        orientation: 'Pick one primary cave by mobility and heat tolerance. Paradise is a longer walk with a broad boardwalk; Tien Son adds a substantial stair climb and currently limited interior access. They are distinct managed visits, not two entrances that can be assumed to share a shuttle or ticket.',
        arrival: 'Confirm the park’s current ticket combination, vehicle or shuttle between cave areas, opening status and any group restrictions. Carry water for the exposed approach and do not count on walking between separate access points.',
        sequence: 'Book the preferred cave first, use its actual access route, then stop for shade and a mobility check. Add the second only if its gate is open, transport is confirmed and everyone still has energy for the return.',
        boundary: 'Stay on public paths and boardwalks. Do not touch formations, step past barriers or treat Tien Son’s closed interior as an optional extension.',
        routeDiagram: {
          kind: 'compare',
          title: 'Choose by route effort and open distance',
          intro: 'The park’s published route details answer two different questions: walking distance at Paradise and stairs plus a current limit at Tien Son.',
          steps: [
            ['Paradise Cave', 'Long walk, boardwalk inside', 'Official page describes a 1.6 km shaded approach, a 500 m trek to the cave and a 1 km public boardwalk.'],
            ['Tien Son Cave', 'About 600 steps; access-limited', 'The official page currently says the public route opens only to 400 m because of a hazard. Recheck the notice.']
          ],
          fallbackTitle: 'If access or stamina changes',
          fallback: 'Visit the one cave whose full route is confirmed and comfortable. If Tien Son’s restriction or closure makes the plan unsuitable, use the park’s separate Phong Nha boat cave only after confirming its own boat and water conditions.'
        },
        arrivalLabel: 'Park entry plan',
        boundaryLabel: 'Open-route limit',
        stages: [
          ['Choose the effort', 'Match Paradise’s walk and boardwalk or Tien Son’s stair climb to the least mobile person in the group.'],
          ['Confirm each gate', 'Check live park notices, ticket rules and transfers separately; do not assume the second cave is open or included.'],
          ['Use the public route', 'Walk only the path currently permitted by the park. At Tien Son, turn at the stated 400 m limit unless management changes it.'],
          ['Leave a recovery margin', 'Cool down before the vehicle return and keep a second cave optional. Heat, stairs or a delayed shuttle are reasons to end after one.']
        ],
        risks: [
          ['Access limit', 'Tien Son’s public route is currently posted as limited to 400 m. That condition may change; the gate notice controls.'],
          ['Effort and heat', 'A long shaded walk and a staircase are different loads. Bring water, use handrails and choose the shorter suitable plan.'],
          ['Separate operations', 'Tickets, shuttle service and cave openings can differ. If one closes, do not improvise an unofficial path or assume another ticket covers it.']
        ],
        duration: 'Allow at least a half-day window for one cave, then extend only after checking current entry and transfer time; two caves need a full, unhurried day.',
        combine: 'Pair one dry cave with a relaxed village meal. Do not combine two cave climbs with a wet adventure program or a long same-day road transfer.',
        verify: 'Check the park notice for each cave, the 400 m Tien Son limit, stairs and route lengths, ticket or shuttle rules, rain and footwear.'
      },
      {
        slug: 'chay-river-dark-cave',
        name: 'Chay River and Dark Cave',
        motif: 'river adventure and wet cave',
        instrument: 'signal',
        image: image({ src: '/assets/images/vietnam-chay-dark-cave.webp', alt: 'River and limestone landscape in Phong Nha-Ke Bang', source: 'https://commons.wikimedia.org/wiki/File:Phongnhakebang6.jpg', label: 'Phongnhakebang6.jpg', creator: 'Genghiskhanviet', license: 'Public domain' }),
        reviewDate: '13 October 2026',
        isoDate: '2026-10-13',
        sources: [
          ['https://phongnhakebang.vn/travel/tuyen-du-lich-song-chay-hang-toi5-en', 'National Park official Chay River–Dark Cave route page — unavailable to this review on 13 October 2026; verify itinerary and operating limits directly'],
          ['https://phongnhatourism.com.vn/', 'Phong Nha–Ke Bang Tourism Center — official visitor routes; recheck weather, closure and pickup'],
          ['https://www.nchmf.gov.vn/kttv/', 'National Centre for Hydro-Meteorological Forecasting — current locality-specific warnings']
        ],
        searchKeywords: ['chay river closure', 'dark cave tour status', 'water activity rules', 'cave weather cancellation', 'dong hoi road transfer'],
        summary: 'Decide whether a managed Chay River–Dark Cave day is suitable only after confirming the current program, safety limits, weather and return transfer.',
        lead: 'Treat Chay River–Dark Cave as one supervised program whose components and operating limits must be confirmed, not a self-guided cave walk or a menu of guaranteed activities. The National Park’s route page could not be read on 13 October 2026, so the current itinerary, equipment, age or health restrictions, prices, hours, water limits and cancellation rules remain unknown. Ask the Park or named authorized provider exactly what is operating that day and what the briefing requires; a reservation alone does not override a closure.',
        orientation: 'First settle the road pickup from Phong Nha village or Dong Hoi; then confirm the official entrance, the current activity sequence and the same-day return. Do not assume zipline, kayak, swimming, mud, cave access or any shared ticket is included. Each is an unknown until the provider confirms it.',
        arrival: 'Prearrange a road pickup to the named official entrance and the return ride. Before payment, request the provider identity, current route, equipment supplied, participant limits, weather cancellation and refund terms in writing; none was verifiable from the unavailable Park page.',
        sequence: 'Check the current weather and Park closure notice; confirm the exact program and every participant’s eligibility; attend the full briefing; use only staff-fitted equipment; remain with the guide; then take the agreed road return. If the Park, provider or forecast makes the route unsafe, cancel and return to the base without transferring to another river or cave activity.',
        boundary: 'No independent swimming, diving, climbing, river crossing or equipment changes. Stay with the authorized guide and stop at any instruction. Do not enter water or cave sections when the operator has closed them, even if another component remains open.',
        stages: [
          ['Confirm the program first', 'Ask which named river and cave components operate today, the authorized provider, the participant rules, equipment, weather cutoff and cancellation terms. Those details remain unknown until confirmed.'],
          ['Arrive on a booked road transfer', 'Agree the official entrance, pickup time and return driver from your chosen base. No public service or journey time has been verified.'],
          ['Follow the live safety briefing', 'Have staff explain and fit the equipment for each activity that is actually open. Stay with the guide and do not participate if the restrictions or route are unclear.'],
          ['Return or defer as one unit', 'If weather, water level or a closure changes the program, follow staff and return to base. Do not replace it with an unverified Nuoc Mooc or Phong Nha boat trip.']
        ],
        risks: [
          ['Closure and water conditions', 'The official route page was unavailable on 13 October 2026. The current water level, flood threshold, activity sequence and closure status are unknown; a booking is not a go-ahead.'],
          ['Participant limits and gear', 'Age, health, size, swimming ability, equipment and provider rules were not confirmed. Ask the authorized operator directly; do not guess eligibility or substitute personal gear.'],
          ['Weather and return road', 'Rain may affect the river program and the road back. Use the current official warning, operator decision and confirmed return; if any is unclear, defer the whole outing.']
        ],
        duration: 'Keep the full day open for the road transfer, briefing, whichever activities are confirmed and the return. Current check-in, program duration and last return are unknown; avoid a same-day rail, flight or second adventure.',
        combine: 'Do not pair this water program with Nuoc Mooc or the Son River boat on the same day. If one closes, use a base-side meal or rest only after confirming it is open; choose another route on a later day after an independent status check.',
        verify: 'Confirm the Park’s live closure and water notice, provider authorization, exact itinerary, participant and equipment rules, weather cutoff, refund policy, entrance, road pickup and return. None of those current operational details was independently verified here.'
      },
      {
        slug: 'nuoc-mooc-forest-springs',
        name: 'Nuoc Mooc Forest Springs',
        motif: 'forest boardwalk and clear stream',
        instrument: 'field',
        image: image({ src: '/assets/images/vietnam-nuoc-mooc.webp', alt: 'Lush forest and limestone landscape in Phong Nha-Ke Bang', source: 'https://commons.wikimedia.org/wiki/File:Phongnhakebang11.jpg', label: 'Phongnhakebang11.jpg', creator: 'Genghiskhanviet', license: 'Public domain' }),
        reviewDate: '13 October 2026',
        isoDate: '2026-10-13',
        sources: [
          ['https://phongnhakebang.vn/travel/diem-du-lich-sinh-thai-suoi-nuoc-mooc7-en', 'National Park official Nuoc Mooc route page — unavailable to this review on 13 October 2026; verify access, facilities and permitted activity directly'],
          ['https://phongnhatourism.com.vn/', 'Phong Nha–Ke Bang Tourism Center — official visitor routes; recheck access and road pickup'],
          ['https://www.nchmf.gov.vn/kttv/', 'National Centre for Hydro-Meteorological Forecasting — current locality-specific warnings']
        ],
        searchKeywords: ['nuoc mooc opening status', 'nuoc mooc water rules', 'nuoc mooc road transfer', 'forest route closure', 'phong nha weather warning'],
        summary: 'Plan Nuoc Mooc as a separate road outing; verify the forest route, water access and facilities before leaving the village base.',
        lead: 'Nuoc Mooc is a protected forest and spring visit, but a place name or old photograph does not confirm that its gate, boardwalk, water area, picnic facilities or swimming rules are open today. The National Park route page could not be read during this 13 October 2026 review. Treat opening, access distance, ticket, parking, lockers, food rules, water quality and any permitted activity as unknown until the Park confirms them directly. Build the day around a quiet forest visit only if the current public route and a safe return road are confirmed.',
        orientation: 'Connect a confirmed Phong Nha village or Dong Hoi base to the official entrance by a booked road vehicle, then ask staff which public path is open. Do not assume boardwalk length, swimming access, picnic zones or shared tickets. The exact route and facilities were not independently verified.',
        arrival: 'Arrange the outward and return road pickup before leaving. Ask the Park about the current gate, road condition, entrance rules, open paths, water-area limits, facilities and weather cutoff; journey time, parking and lockers remain unknown here.',
        sequence: 'Check the current forecast and Park closure notice; confirm the open route and permitted activities at the official entrance; stay on signed visitor paths; enter water only if staff explicitly allow the named area and conditions; then return by the agreed road pickup. If rain, a warning, closure or an unanswered access question remains, defer the forest trip and do not substitute another same-catchment water attraction.',
        boundary: 'Stay on open public paths and use water only in an area that Park staff identify as permitted that day. Do not bathe with soap, litter, fish, collect plants, climb wet banks or cross a barrier to reach a spring.',
        stages: [
          ['Confirm that the gate is open', 'Ask the National Park whether the entrance, road, public path and any water area are open today. The linked route page was unavailable to this review on 13 October 2026.'],
          ['Book a round-trip road pickup', 'Name the entrance, pickup point, wait arrangement and return time with the driver; no public connection or journey time is verified.'],
          ['Use only the signed area', 'Follow staff and barriers. Swimming, picnic zones, lockers, food rules, water quality and access limits remain unknown until the Park confirms them.'],
          ['Defer when conditions change', 'Leave before the agreed return margin. If weather or a closure interrupts the route, return to base; do not improvise another river or forest site.']
        ],
        risks: [
          ['Water and flood status', 'The Park page did not load in this review, so no current stream depth, water-quality notice or swim limit is known. Do not infer safety from clear-looking water or a dated photo.'],
          ['Forest closure and road return', 'Trail opening, road condition, facilities and travel time are unverified. Ask the Park and driver before departure; defer if either cannot confirm a safe return.'],
          ['Protected-area rules', 'Boardwalk access, picnic capacity, food, lockers and designated activity zones remain unknown. Follow current signs and staff rather than an old map or itinerary.']
        ],
        duration: 'Keep a full daylight day free for the road transfer, current visitor route and return buffer. No posted duration, gate schedule or travel time was verifiable during this review.',
        combine: 'Prefer a separate day from Phong Nha Cave or Chay River–Dark Cave so a forest closure does not create pressure to rush between same-catchment sites. If the forest is shut, return to base or rest; do not treat the river as an automatic alternative.',
        verify: 'Ask the National Park about today’s gate, official route, road, water quality and permitted activities, facilities, tickets, weather closure and return pickup. These current facts remain unknown until confirmed directly.'
      },
      {
        slug: 'hang-en-expedition',
        name: 'Hang En Expedition',
        motif: 'jungle crossing and cave camp',
        instrument: 'expedition',
        image: image({ src: '/assets/images/vietnam-hang-en.webp', alt: 'Entrance to Hang En Cave in Phong Nha-Ke Bang National Park', source: 'https://commons.wikimedia.org/wiki/File:Hang_%C3%89n_Cave_-_201505_-_JB.jpg', label: 'Hang Én Cave - 201505 - JB.jpg', creator: 'Jérémie B.', license: 'CC BY-SA 4.0' }),
        summary: 'A controlled two-day cave expedition involving jungle trekking, stream crossings, Ban Doong context and overnight camping inside Hang En.',
        lead: 'Hang En is a guided expedition with real water crossings, steep terrain and conservation limits. The page should help readers decide whether they are ready and show why a trained team, safety briefing and seasonal operation are essential.',
        orientation: 'Treat the pre-trip briefing, road transfer, jungle approach, cave camp and return as one connected operation. There is no sensible self-guided version of this route.',
        arrival: 'Arrive in Phong Nha before the operator’s required briefing and pickup window. Equipment, releases and medical information are part of participation.',
        sequence: 'Attend the briefing, follow the guide through jungle and streams, keep camp clean, respect Ban Doong community boundaries and return only with the team.',
        boundary: 'No solo departure, cave alteration, litter, loud behavior or unauthorized photography of residents. The core zone is not a public shortcut.',
        stages: [
          ['Pass the briefing', 'Read the medical, fitness, equipment and weather rules before committing; a missed briefing can end participation.'],
          ['Cross the forest', 'Use the supplied gear, keep group spacing and let the safety team decide when water or terrain is no longer acceptable.'],
          ['Camp in the cave', 'Respect the designated campsite, swifts, formations and waste system; keep light and sound controlled.'],
          ['Return as one team', 'Do not race ahead or remain behind. The guide’s return decision is part of the safety system.']
        ],
        risks: [
          ['Water and mud', 'Streams and jungle trails become slippery or impassable in rain. Tours may change or stop according to weather.'],
          ['Remote medical access', 'The route is away from ordinary roads and hospitals. Declare health conditions and carry approved medication.'],
          ['Community and wildlife', 'Ban Doong and cave wildlife deserve distance and consent. Do not treat either as entertainment.']
        ],
        duration: 'Plan two days and one night with a pre-trip briefing and a full recovery period afterward.',
        combine: 'Combine with accessible Phong Nha only before or after the expedition, not on the same active day.',
        verify: 'Check the authorized operator, current season, briefing time, fitness and medical requirements, weather, equipment and cancellation terms.'
      },
      {
        slug: 'son-doong-expedition',
        name: 'Son Doong Expedition',
        motif: 'large-scale cave ecology and strict access',
        instrument: 'expedition',
        image: image({ src: '/assets/images/vietnam-son-doong.webp', alt: 'Large stalagmites inside Son Doong Cave in Vietnam', source: 'https://commons.wikimedia.org/wiki/File:Son_Doong_Cave_DB_%282%29-edited.jpg', label: 'Son Doong Cave DB (2)-edited.jpg', creator: 'Dave Bunnell, edited by Cart', license: 'CC BY-SA 4.0' }),
        summary: 'A high-level multi-day expedition guide for Son Doong’s core-zone trek, underground weather, camps and conservation controls.',
        lead: 'Son Doong is not simply a larger cave tour. It is a tightly controlled, physically demanding journey through forest and underground systems with limited communications, seasonal operation and strict ecological rules.',
        orientation: 'Explain the full chain: pre-trip screening, safety briefing, jungle approach, cave camps, weather decisions and return. The official operator is part of the access model, not an optional booking convenience.',
        arrival: 'Reach Dong Hoi or Phong Nha according to the operator’s required schedule, attend the mandatory briefing and bring only approved equipment.',
        sequence: 'Complete screening and briefing, trek under the safety team, follow all camp and cave protocols, and accept an early return if weather or health demands it.',
        boundary: 'No independent entry, unauthorized route, collecting, touching formations, drone, litter or photography that compromises people, wildlife or safety.',
        stages: [
          ['Qualify before arrival', 'Confirm health, fitness, equipment and the current operating season before purchasing non-refundable travel around the expedition.'],
          ['Enter the core zone', 'Stay with the guide and safety experts, carry only permitted gear and treat every river crossing or climb as consequential.'],
          ['Live with the cave', 'Respect underground weather, camps, formations and the conservation program; keep light, sound and waste controlled.'],
          ['Exit by the safe decision', 'The team may change the itinerary or end the journey. A safe return is the successful outcome, not a failure.']
        ],
        risks: [
          ['Seasonal flooding', 'The underground river and forest weather can close the route. Current operator and park decisions override old schedules.'],
          ['High physical demand', 'Repeated climbs, mud, water and remote terrain require genuine preparation. Do not market the route to an unready audience.'],
          ['Remote communication', 'Ordinary mobile service is limited. Follow the expedition communication plan and disclose medical needs in advance.']
        ],
        duration: 'Reserve the official multi-day expedition length plus a recovery and weather buffer; do not attach a fixed same-day connection.',
        combine: 'Combine with village, river or accessible caves only on a separate recovery day before or after the expedition.',
        verify: 'Check the authorized operator, current operating season, health and fitness screening, briefing, permits, weather, equipment and conservation rules.'
      }
    ]
  }
].map(defineVietnamCluster);

// Hanoi's first editorial release is intentionally scoped to its hub and five
// existing chapters. Keep these overlays beside the source records so the
// country generator can regenerate the reviewed pages without hand-edited HTML.
const hanoi = vietnamNorthClusters.find((cluster) => cluster.slug === 'hanoi');
Object.assign(hanoi, {
  reviewDate: '7 October 2026',
  isoDate: '2026-10-07',
  hubCss: '/css/vietnam-hanoi.css?v=20261007-1',
  routeModelHeading: 'Use these as branches, not six stops in one day.',
  routeModelLead: 'The cards are separate half-day or full-day plans. Group only the compact center; use a vehicle between the civic district, Van Mieu and the river edge.',
  hubIntro: 'Plan Hanoi as distinct rooms around Hoan Kiem: working trade lanes north of the lake, civic and royal history to the west, the colonial-era Opera House and museums to the southeast, and an active rail bridge at the Red River edge. These six chapters are choices, not a six-stop itinerary. Controlled entrances, museum calendars, traffic and rain can turn two nearby pins into a long day.',
  stay: 'Choose the Hoan Kiem edge or Old Quarter when a walkable first day matters; choose Trang Tien and the French Quarter for a calmer evening near the Opera House and museums. Ba Dinh makes sense when its civic sites are the focus. Send the hotel your exact pin and confirm late vehicle access, lift and luggage drop-off: narrow lanes, one-way streets and temporary pedestrian controls can change the approach.',
  transfer: 'Treat Noi Bai as a separate trip from the center. Save the hotel address in Vietnamese, use an agreed airport pickup or reputable ride-hail, and leave a buffer before the first activity. Walk the compact center; use a taxi or ride-hail between Ba Dinh, Van Mieu and the river edge instead of stitching them into one long walk. Recheck pedestrian controls and roadworks on the day.',
  hubSources: [
    ['https://www.vietnam.travel/things-to-do/explore-old-quarter-your-way', 'Vietnam Tourism — Explore the Old Quarter'],
    ['https://vietnam.travel/node/187', 'Vietnam Tourism — Ha Noi'],
    ['https://whc.unesco.org/en/list/1328/', 'UNESCO — Central Sector of the Imperial Citadel of Thang Long'],
    ['https://hoangthanhthanglong.vn/en/about-us/', 'Thang Long Heritage Conservation Center — visitor notices and hours'],
    ['https://bqllang.gov.vn/en/', 'Ho Chi Minh Mausoleum Management Board — current visitor notices'],
    ['https://baotanglichsu.vn/en/Articles/3196/opening-time', 'Vietnam National Museum of History — current visitor hours'],
    ['https://nhahatnhacvukichvietnam.com/en/', 'Vietnam National Opera and Ballet — current performance notices'],
    ['https://vietnam.vnanet.vn/english/printlr/long-bien-bridge-iconic-part-of-hanoi39s-history-321685.html', 'Vietnam News Agency — Long Bien Bridge history'],
    ['https://vanmieu.gov.vn/en/visitor-information', 'Temple of Literature — visitor map, entry and transport information'],
    ['https://vnfam.vn/en/visiting', 'Vietnam National Fine Arts Museum — visitor information'],
    ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — forecasts and warnings']
  ],
  planner: [
    ['CENTER WALK', 'Lake, then one lane pair', 'Start at Hoan Kiem, then choose one Old Quarter thread: Hang Bac for silver, Hang Gai for silk, Hang Ma for festival goods, or Lan Ong for traditional medicine. The names preserve old trades, not a promise that every shop still sells that craft. Add Ngoc Son only after checking its current entry rules.'],
    ['CIVIC HISTORY', 'Give Ba Dinh and Thang Long a long window', 'Ba Dinh Square is where the Declaration of Independence was read on 2 September 1945. Thang Long layers a 7th-century fortress site and an 11th-century citadel; its operator currently lists 08:00–17:00 daily (checked 7 October 2026). Check that notice and the mausoleum calendar separately before setting the day.'],
    ['COURTYARDS + MUSEUM', 'Choose one collection after Van Mieu', 'Read Van Mieu as five courtyards, from Khue Van Pavilion and Thien Quang Well to the academy precinct. Its operator currently lists 08:00–17:00 daily and an entrance at No. 58 Quoc Tu Giam (checked 7 October 2026). Pair it with one museum only; keep Long Bien for dry daylight and skip informal riverbank paths after rain.']
  ]
});

const hanoiGuideUpdates = {
  'hoan-kiem-old-quarter': {
    reviewDate: '7 October 2026', isoDate: '2026-10-07', countryCss: hanoi.hubCss,
    summary: "Follow Hoan Kiem Lake north into Hanoi's working Old Quarter, using the old craft-street names to choose a short route and a real stopping point.",
    lead: "Hoan Kiem gives you a simple compass: the lake and Ngoc Son Temple form the open southern edge; the tightly subdivided Old Quarter lies immediately north. The familiar '36 streets' story points to historic trade associations, not 36 preserved lanes. Vietnam Tourism still names Hang Bac (silver), Hang Gai (silk), Hang Ma (festival goods) and Lan Ong (medicinal herbs); read today's mixed shopfronts before expecting a specialist craft.",
    orientation: 'Use two layers, not a citywide loop: walk part of the lake, then choose one lane pair north of the water. Ngoc Son sits on the lake island; its bridge and temple are a separate entry stop, so check current opening and entry terms before adding it. Hang Bac and Hang Gai make a compact first look; Hang Ma is busier and Lan Ong is a farther east-side choice.',
    arrival: "Set a drop-off at a clear Hoan Kiem edge rather than a shop door in a narrow lane. Save the hotel's Vietnamese address. Weekend pedestrian periods and event days can push car pickup several blocks away; check current city notices and agree on a pickup pin beyond the restriction before walking in.",
    sequence: 'Allow about 3–4 hours: take the lake edge early, turn north to one pair of named lanes, pause at a public heritage or religious interior only if open, then return to the lake for a meal or coffee. Add the French Quarter only as a second half-day with a real break; Ba Dinh is not a walkable extension.',
    verify: 'Check the current Hoan Kiem pedestrian notice, Ngoc Son entry and photography rules, any temple opening, the forecast, and a pickup point outside temporary restrictions.',
    sources: [
      ['https://www.vietnam.travel/things-to-do/explore-old-quarter-your-way', 'Vietnam Tourism — Explore the Old Quarter'],
      ['https://vietnam.travel/node/187', 'Vietnam Tourism — Ha Noi'],
      ['https://hanoi.gov.vn/di-tich-danh-thang', 'Hanoi People’s Committee — heritage and scenic sites']
    ]
  },
  'ba-dinh-thang-long': {
    reviewDate: '7 October 2026', isoDate: '2026-10-07', countryCss: hanoi.hubCss,
    decisions: [
      ['Choose an entrance', 'Use the Hoang Dieu side for the Thang Long complex; confirm Ba Dinh memorial access separately.'],
      ['Half-day sequence', 'Start at Doan Mon South Gate and the Flag Tower, continue to the Kinh Thien foundation, then walk west to 18 Hoang Dieu.'],
      ['Memorial and excavation conduct', 'Follow posted photography and security rules at Ba Dinh; keep to signed paths and do not touch the archaeological remains.']
    ],
    presentation: {
      readingTitle: 'A 1945 civic square beside an older citadel',
      routeTitle: 'Doan Mon gate to the 18 Hoang Dieu excavation',
      checksLabel: 'Before your visit',
      checksTitle: 'Opening hours, entrances and conduct',
      checksLead: 'Check Thang Long’s 08:00–17:00 notice and visitor map; verify the mausoleum calendar separately because ceremonies can change access.',
      boundaryTitle: 'Keep memorial access and excavation rules distinct',
      faqLabel: 'Visitor questions',
      faqTitle: 'Ba Dinh Square and the Thang Long citadel'
    },
    summary: 'Separate Ba Dinh civic memory from the archaeological layers of Thang Long, then plan around controlled entrances and the citadel’s current visitor window.',
    lead: 'Ba Dinh Square is where the Declaration of Independence was read on 2 September 1945. Thang Long tells a much longer story: the 11th-century citadel was built on the remains of a Chinese fortress dating to the 7th century, and the 18 Hoang Dieu excavation exposes remains from later periods of the capital.',
    orientation: 'Visitors see standing monuments such as Doan Mon South Gate and the Flag Tower, the Kinh Thien Palace foundation, and excavated layers at 18 Hoang Dieu; each reveals a different part of the citadel. The operator lists 08:00–17:00 every day (checked 7 October 2026); the mausoleum keeps a separate calendar.',
    arrival: 'Thang Long’s two sections form an integrated heritage complex: the 18 Hoang Dieu Archaeological Site is about 100 metres west of the Kinh Thien Palace foundation. Follow the official visitor map; the operator lists parking at 19C Hoang Dieu. Ba Dinh memorial access is managed separately and can change around ceremonies or security, so save the address for each entrance you plan to use.',
    sequence: 'Allow a half-day for the citadel’s two sections. Start in the central precinct at Doan Mon South Gate and the Flag Tower, pause at the Kinh Thien Palace foundation, then follow the map west to the 18 Hoang Dieu excavation about 100 metres away. Open courtyards have little shade, so schedule water and a rest, especially in hot weather. If the mausoleum matters, check its access notice before fixing this block.',
    verify: 'Recheck Thang Long’s 08:00–17:00 notice and any gate closure, then check the mausoleum’s official calendar, entry requirements, photography rules, weather and mobility access.',
    sources: [
      ['https://whc.unesco.org/en/list/1328/', 'UNESCO — Thang Long history, archaeology and inscription'],
      ['https://hoangthanhthanglong.vn/en/about-us/', 'Thang Long Heritage Conservation Center — current visitor hours and contact'],
      ['https://bqllang.gov.vn/en/', 'Ho Chi Minh Mausoleum Management Board — official visitor notices'],
      ['https://en.nhandan.vn/megastory/special/2021/09/02/', 'Nhan Dan — Ba Dinh Square and the 1945 Declaration of Independence']
    ]
  },
  'french-quarter-opera-house': {
    reviewDate: '7 October 2026', isoDate: '2026-10-07', countryCss: hanoi.hubCss,
    summary: 'Read the French Quarter’s early-20th-century civic architecture from the Opera House, then choose a museum visit or a confirmed performance.',
    lead: 'This is a civic and cultural grid, not a second Old Quarter. The Opera House was built around the turn of the 20th century and refurbished in 1997; today it remains a working performance venue. Pair its exterior with the Vietnam National Museum of History on Trang Tien, but enter only on the museum’s published schedule or a confirmed ticket.',
    orientation: 'Anchor at the Opera House and Trang Tien, then decide whether your day is a museum afternoon or a ticketed evening. The National Museum of History currently lists morning hours 08:00–12:00, afternoon 13:30–17:00, and closure on the first Monday of each month (checked 6 October 2026). Its split day makes a casual “drop in whenever” plan unreliable.',
    arrival: 'Use the Opera House perimeter as a meeting point, not a promise that a vehicle can stop at its door. One-way streets, event traffic and limited curb space change the approach; save the venue address and ask the driver to confirm a safe legal drop-off before leaving the car.',
    sequence: 'Allow 3–4 hours for the exterior and one museum block: look at the Opera House in daylight, then use the museum’s 08:00–12:00 or 13:30–17:00 window. Treat a performance as a separate evening commitment and buy through the official venue notice before fixing dinner or the ride home.',
    verify: 'Check the History Museum’s dated opening calendar, Opera House performance and ticket notice, venue access, road restrictions, rain and the safe return pickup.',
    sources: [
      ['https://vietnam.travel/node/187', 'Vietnam Tourism — Ha Noi'],
      ['https://baotanglichsu.vn/en/Articles/3196/opening-time', 'Vietnam National Museum of History — visitor hours'],
      ['https://nhahatnhacvukichvietnam.com/en/', 'Vietnam National Opera and Ballet — official performance information']
    ]
  },
  'long-bien-red-river': {
    reviewDate: '7 October 2026', isoDate: '2026-10-07', countryCss: hanoi.hubCss,
    summary: 'Read Long Bien as a working railway bridge and Red River edge, with a daylight plan that does not depend on informal floodplain paths.',
    lead: 'Long Bien was built at the turn of the 20th century and remains part of Hanoi’s working transport landscape. The railway, motorbikes, pedestrians and riverbank activity occupy different spaces. The useful visit is to observe how those layers meet from a legal public edge, not to copy a photograph from a track or maintenance area.',
    orientation: 'Separate the bridge approach from a floodplain walk. Pick one verified public bridge-end viewpoint, then decide whether a riverbank path is actually open and dry. The historic bridge connects the center to the east bank, but its traffic and rail activity make it a poor place to improvise a crossing or stand for a long photo stop.',
    arrival: 'Save the exact bridge-end pin in Vietnamese and approach by taxi or ride-hail; confirm which side the driver can legally reach. Do not set a vague “Long Bien Bridge” pickup on the far bank. If you plan a riverbank segment, verify the public access point before setting off and arrange a new pickup rather than assuming the path loops back.',
    sequence: 'Plan 2–3 daylight hours: view the bridge from a legal approach, watch the separate movement lanes without entering them, then add a riverbank walk only if the access is public and the surface is dry. After rain or when water is high, skip the floodplain and return from the bridge end you know.',
    verify: 'Check current bridge access and rail notices, the exact public approach, weather and river conditions, any market access, and a pickup point on the same side you can reach.',
    sources: [
      ['https://vietnam.vnanet.vn/english/printlr/long-bien-bridge-iconic-part-of-hanoi39s-history-321685.html', 'Vietnam News Agency — Long Bien Bridge history and civic role'],
      ['https://hanoi.gov.vn/di-tich-danh-thang', 'Hanoi People’s Committee — heritage and scenic sites'],
      ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — weather and warnings']
    ]
  },
  'van-mieu-museum-quarter': {
    reviewDate: '7 October 2026', isoDate: '2026-10-07', countryCss: hanoi.hubCss,
    summary: 'Follow Van Mieu’s five courtyards from the 1070 temple to the Imperial Academy, then choose one nearby museum rather than a rushed museum crawl.',
    lead: 'Van Mieu was built in 1070 and the Imperial Academy opened here in 1076. Its sequence of five courtyards is the visit: Khue Van Pavilion, Thien Quang Well and the doctoral stele garden, the Confucian sanctuary, then the academy precinct. Students still come to pray before exams, so the site is both a historical record and a living place.',
    orientation: 'Use the official visitor map and follow the one-way sequence from the No. 58 Quoc Tu Giam entrance; current visitor information lists exits on Van Mieu Street and through Giam Garden. The operator currently lists 08:00–17:00 daily (checked 7 October 2026). Leave time to read the courtyards before deciding whether to add the Fine Arts Museum at No. 66 Nguyen Thai Hoc.',
    arrival: 'Aim for the signed entrance at 58 Quoc Tu Giam, not a pin on the opposite side of the block. The official visitor page currently lists bus 38 at the entrance and routes 02, 41, E08 and E09 opposite No. 40 Ton Duc Thang (checked 7 October 2026); verify routes before boarding. Exits can be on different streets, so save the next destination before entry.',
    sequence: 'Reserve about two hours for the five-courtyard circuit, then take shade and water before choosing one museum. The Fine Arts Museum at 66 Nguyen Thai Hoc is a distinct next stop, not an interior inside the temple; check its current hours and use a short taxi if heat or mobility makes the walk uncomfortable.',
    verify: 'Recheck the Temple’s current 08:00–17:00 hours, entry and exit map, bus routes, night-program notice, Fine Arts Museum hours, photography rules and weather.',
    sources: [
      ['https://vanmieu.gov.vn/en/visitor-information', 'Temple of Literature — courtyards, entrance, exits and public transport'],
      ['https://image.vietnam.travel/things-to-do/hanoi-six-heritage-sites', 'Vietnam Tourism — 1070 temple, 1076 academy and five-courtyard sequence'],
      ['https://vnfam.vn/en/visiting', 'Vietnam National Fine Arts Museum — current visitor information']
    ]
  }
};

for (const guide of hanoi.guides) {
  const update = hanoiGuideUpdates[guide.slug];
  if (update) {
    Object.assign(guide, update);
    guide.decisions = update.decisions || [
      ['Arrival contract', guide.arrival],
      ['Route logic', guide.sequence],
      ['Keep the boundary', guide.boundary]
    ];
    guide.route = guide.stages.map((stage, index) => [['Arrive', 'Read', 'Deepen', 'Exit'][index], stage[0], stage[1]]);
    guide.checks = guide.risks;
    guide.faq = [
      [`How much time should ${guide.name} receive?`, guide.duration],
      [`Can I combine ${guide.name} with another major chapter?`, guide.combine],
      ['What should I verify before leaving?', guide.verify]
    ];
  }
}

// The Sapa release covers the hub and five existing chapters. Bac Ha is kept
// explicit as a separate road day; O Quy Ho remains for a later review batch.
const sapa = vietnamNorthClusters.find((cluster) => cluster.slug === 'sapa-northwest-highlands');
Object.assign(sapa, {
  reviewDate: '7 October 2026',
  isoDate: '2026-10-07',
  hubCss: '/css/vietnam-sapa.css?v=20261007-2',
  label: 'TOWN / TERRACES / SUMMIT / MARKET',
  tagline: 'Read the highlands at town, valley and summit scale.',
  hubIntro: 'Sa Pa sits above the cultivated Muong Hoa valley, with the former hill-station center, Ham Rong’s stairway gardens, the Fansipan summit complex and the working villages below town all competing for the same daylight. Give each a separate half or full day: the town is a useful arrival base, Fansipan depends on visibility and service, and Lao Chai–Ta Van is a road-and-walking day. Cat Cat is a managed downhill circuit with an uphill return; O Quy Ho’s pass and waterfalls need a daylight road window. Bac Ha’s Sunday market and Hoang A Tuong Mansion belong to a separate road day. Vietnam Tourism describes April–May as clearer, June–August as hot, September–October as terrace season and November–March as chilly; field color and mountain views still vary with weather.',
  stay: 'Central Sa Pa is the simplest base for buses, taxis, meals and the church-market center, but its steep lanes can leave a final walk with luggage. Choose a Muong Hoa homestay when you want an overnight with a host in the farming valley; confirm the exact vehicle drop-off, stairs, meal time and departure plan. For a Sunday at Bac Ha market, sleeping in Bac Ha avoids making a long return drive part of the same day.',
  transfer: 'Vietnam Tourism lists five to six hours from Hanoi by direct bus or shuttle. The overnight train stops at Lao Cai; a separate van or car then climbs to Sa Pa. Rain, fog and traffic can extend the road legs, so keep arrival day light and leave a buffer before any fixed Fansipan ticket or onward connection.',
  routeModelHeading: 'Keep the summit weather-led and Bac Ha on its own day.',
  routeModelLead: 'Use the church-market center and Ham Rong for a compact town day. Give Fansipan a separate forecast check and enough time for the station, cable car and summit steps. In Muong Hoa, choose one host-confirmed walking section and agree on the finish pickup; Cat Cat is closer but its stone route descends before it climbs back out. Save O Quy Ho and the waterfall stops for daylight with a driver who knows the pass. Bac Ha’s Sunday market and the 1914–1921 Hoang A Tuong Mansion are a different district: make them a full day from Sa Pa or stay nearby.',
  presentation: {
    conditionsKicker: 'Sa Pa day-trip planning',
    conditionsTitle: 'Give the summit and long road days their own time.',
    conditionsLead: 'Fansipan visibility, O Quy Ho road weather and Bac Ha’s Sunday market each set a different clock; keep them separate from a town walk or valley trail.',
    faqKicker: 'Sa Pa visitor questions',
    checksActionText: 'Review the route checks',
    faqTitle: 'What to confirm before each outing'
  },
  hubSources: [
    ['https://www.vietnam.travel/places-to-go/northern-vietnam/sapa', 'Vietnam Tourism — Sa Pa, seasonal conditions and Hanoi connections'],
    ['https://sapa-tourism.com/top-10-attractions/', 'Lao Cai Tourist Information and Promotion Center — Ham Rong and Fansipan'],
    ['https://sunworld.vn/en/fansipan', 'Sun World Fansipan Legend — current mountain transport and operating notices'],
    ['https://sapa-tourism.com/most-beautiful-village-in-the-north-of-viet-nam/', 'Lao Cai Tourist Information and Promotion Center — Cat Cat route and village visitor experience'],
    ['https://sapa-tourism.com/exploring-sapa-by-car/', 'Lao Cai Tourist Information and Promotion Center — sample valley and waterfall day routes'],
    ['https://sapa-tourism.com/muong-hoa-valley-and-sa-pa-terraced-rice-field-landscapes/', 'Lao Cai Tourist Information and Promotion Center — Muong Hoa landscape'],
    ['https://vietnamtourism.gov.vn/post/33948', 'Vietnam National Authority of Tourism — Hoang A Tuong Mansion history'],
    ['https://csdl.vietnamtourism.gov.vn/dest/?item=64', 'Vietnam National Tourism Database — Hoang Lien landscape and Fansipan'],
    ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — official forecasts and warnings']
  ]
});

const sapaGuideUpdates = {
  'town-ham-rong': {
    reviewDate: '7 October 2026', isoDate: '2026-10-07', countryCss: sapa.hubCss,
    motif: 'church square and Ham Rong stairs', instrument: 'town walk',
    image: image({ src: '/assets/images/vietnam-sapa-town-panorama-20261007.webp', alt: 'Sa Pa rooftops on the steep valley slope beneath cloud-covered Hoang Lien mountains', source: 'https://commons.wikimedia.org/wiki/File:Vue_panoramique_sur_la_ville_de_Sapa,_Vietnam,_entour%C3%A9e_de_montagnes_majestueuses_et_de_rizi%C3%A8res_en_terrasse.jpg', label: 'Sa Pa valley-town panorama', creator: 'Asmara Rodrigue', license: 'CC BY 4.0', editNote: 'Resized to 1600 px wide and converted to WebP; no other material edits.' }),
    summary: 'Start at Sa Pa’s stone church and market-center lanes, then decide whether Ham Rong’s uphill garden path fits your time, legs and the weather above town.',
    lead: 'Sa Pa’s central square and stone church anchor a former French hill station that now works as the region’s transport and services town. Hotels, bus drop-offs and steep side streets crowd the center; Ham Rong begins behind it and turns a short map distance into a stair climb through managed gardens and lookout points. The town is a practical base, not a stand-in for the farming communities below.',
    orientation: 'Walk the church-square block first and note the steep streets back to your hotel, the market lanes and a taxi pickup point. Ham Rong is an uphill garden-and-viewpoint route, not a flat park loop. Clear skies at the square do not guarantee a view from the upper path, so choose the climb after checking cloud and rain.',
    arrival: 'Hanoi’s direct bus or shuttle takes about 5–6 hours in Vietnam Tourism’s guidance; the train goes to Lao Cai, then a separate road transfer climbs to Sa Pa. Ask the accommodation for a vehicle-accessible drop-off and the final walk with luggage. Keep the first afternoon local rather than connecting it to a timed mountain service.',
    sequence: 'Allow half a day. Walk the church and square, pick up water or supplies, then use the current Ham Rong entrance if the hill is open and the descent should remain clear. Expect stairs both ways; turn around if rain makes the stone steps slick or cloud removes the upper view.',
    boundary: 'The center is a commercial town with residents going about daily work. Do not treat traditional dress as a prop or photograph a vendor, child or passerby without consent; choose a paid craft or performance encounter only when it is clearly offered and terms are agreed.',
    stages: [
      ['Find the town anchors', 'Use the stone church and square to orient yourself, then note the hotel approach, market streets and a clear driver pickup point.'],
      ['Read the slope', 'Follow the streets behind the center toward Ham Rong’s managed entrance; judge the stair climb by the least mobile visitor, not the map distance.'],
      ['Choose the garden climb', 'Check current access and upper-hill visibility before entering. Pause at the gardens and signed viewpoints rather than rushing for a cloud-covered summit.'],
      ['Return in good light', 'Descend before wet steps or fog reduce visibility, then keep the evening close to the hotel rather than adding a distant transfer.']
    ],
    risks: [
      ['Stairs and slick stone', 'Ham Rong is an uphill stair route, and rain makes the return more demanding. Shoes with grip and a realistic turn-around point matter.'],
      ['Town-to-hill weather gap', 'A clear church square does not guarantee a clear upper viewpoint. Carry a warm layer and waterproof shell even for a short climb.'],
      ['Luggage and pickup access', 'Many central lanes are steep or narrow. Confirm the exact vehicle drop-off before arrival and do not assume a coach can reach a hotel entrance.']
    ],
    duration: 'Allow half a day for the church-square lanes and Ham Rong. If you have just arrived from Hanoi or Lao Cai, do the town walk first and leave the hill climb for a day when your legs and the forecast are better.',
    combine: 'The church-square walk can fit before dinner or alongside Ham Rong. Keep Fansipan and the Muong Hoa valley for separate days so a delayed transfer does not take away their daylight.',
    verify: 'Check Ham Rong’s current gate and route access, the hill forecast, stair conditions, hotel vehicle access, and market or event changes.'
  },
  'fansipan-summit': {
    reviewDate: '7 October 2026', isoDate: '2026-10-07', countryCss: sapa.hubCss,
    motif: '6-kilometre cable car and summit steps', instrument: 'summit plan',
    summary: 'Plan Vietnam’s 3,143-metre summit around the six-kilometre cable-car ride, the final steps above it and colder, less predictable mountain weather.',
    lead: 'Vietnam Tourism describes the Fansipan cable car as a six-kilometre ride taking about 15 minutes to reach 3,143 metres. The ride ends the long ascent, not the visit: the pagoda complex, exposed paths and final steps still require walking at altitude. On a clear day you can see the Hoang Lien range; in cloud, the upper site may offer little visibility even when Sa Pa is bright.',
    orientation: 'Treat this as three linked legs: road transfer to Sun World’s station, the cable car, then the upper paths and summit steps. Sun World posts operating notices, and services may pause or change with conditions. Check the mountain forecast and the posted final descent on the day; town weather is not a reliable summit forecast.',
    arrival: 'Pre-arrange a station drop-off and identify the return pickup. Use Sun World’s official ticket and notice channels for the current transport sequence; do not rely on an old screenshot, third-party time table or assumed final descent. A separate day avoids pressure from a Hanoi arrival or valley booking.',
    sequence: 'Choose the day after checking the summit forecast and Sun World notice. Leave a queue or service-pause buffer, carry a warm shell, then take the upper paths slowly. Begin the return well before the last posted descent; if wind, cloud or a service interruption changes the plan, stay in Sa Pa rather than forcing the summit.',
    boundary: 'Stay on the signed visitor path and outside barriers around the summit’s religious structures. The peak is a managed high-altitude site as well as a transport attraction; do not climb structures or obstruct worship for a photograph.',
    stages: [
      ['Read conditions at elevation', 'Check the operator notice and mountain forecast, not only the town window. Decide in advance what visibility or wind would make you postpone.'],
      ['Confirm the transport chain', 'Save the official station, ticket terms, any onward connection and the final return time before leaving Sa Pa.'],
      ['Pace the upper mountain', 'Expect colder air and stairs above the cable car. Take breaks, keep warm and stay within the marked summit complex.'],
      ['Keep a descent margin', 'Return before the last possible service and follow staff instructions if wind or visibility interrupts operation.']
    ],
    risks: [
      ['Cold and altitude', 'The 3,143-metre summit is colder than town. Headache, dizziness or unusual breathlessness are reasons to stop, warm up and descend.'],
      ['Wind and visibility', 'Cloud, lightning or strong wind can close mountain transport or erase the view. A paid ticket is not proof that the full route will operate.'],
      ['Timed connections', 'A delay above the valley can break a same-day train, bus or other ticket. Do not attach an essential onward connection to the last cable-car return.']
    ],
    duration: 'Keep most of a day for the station transfer, cable-car ride, pagoda complex, summit steps and a return buffer. The cable car is short; the transfer, queues and walking above the station make the outing longer.',
    combine: 'Add only a short meal or town walk after the summit. Keep Muong Hoa’s uneven valley paths and the Bac Ha road day on different dates.',
    verify: 'On 7 October 2026 Sun World listed 07:30–17:00 and noted schedules may change. Recheck live service notices, last descent, ticket inclusions, forecast, warm clothing and any trekking permission before departure.'
  },
  'muong-hoa-lao-chai-ta-van': {
    reviewDate: '7 October 2026', isoDate: '2026-10-07', countryCss: sapa.hubCss,
    motif: 'Lao Chai–Ta Van terraces and carved stones', instrument: 'valley walk',
    summary: 'Choose a named Lao Chai–Ta Van walk through a cultivated valley of rice terraces, irrigation channels, village lanes and carved stones.',
    lead: 'Muong Hoa lies southeast of Sa Pa, where the main valley road drops past Lao Chai and Ta Van. The terraces are working fields: April brings water and planting, June is typically green, and the second half of September into early October is usually harvest-gold. The tourism office also describes about 200 carved stones across several villages; their patterns are not fully interpreted, so treat them as heritage, not a puzzle to solve.',
    orientation: 'Use the valley road as a transfer spine and choose a named start and finish with a local host or guide. Terraces change from water-filled planting beds to green growth and harvest colors through the year; April–May and September–October are distinct windows in Vietnam Tourism’s Sapa guidance, not a promise that every field will match a photograph.',
    arrival: 'Muong Hoa is about 2 miles southeast of Sa Pa. Arrange a driver to the exact village or trailhead and confirm the end point before leaving town. The tourism office’s longer Lao Chai–Ta Van–Giang Ta Chai–Ban Ho example includes about three hours on foot, three hours driving and lunch; shorter outings exist, but do not book a tight connection after the walk.',
    sequence: 'Make a full day of one valley walk and a hosted meal or rest. Stay on established paths, let a host identify the carved stones without climbing or touching them, and return before heavy rain or darkness. In the wet months, shorten the walk if steps, terrace edges or stream crossings are muddy.',
    boundary: 'A homestay, field or doorway is private unless the host invites you in. Ask before photographing residents, rooms, ceremonies or tools; never step into a crop bed to frame the terraces.',
    stages: [
      ['Name the walk', 'Agree on the trailhead, finish, walking time and pickup with a local host or guide; published valley day routes mix road and foot segments.'],
      ['Read the farming system', 'From public paths, notice the terrace edges, irrigation channels and seasonal crops that residents maintain between visits.'],
      ['Visit by invitation', 'Use a hosted meal or homestay stop when offered; ask before entering a house or photographing people and the ancient carved stones.'],
      ['Return before conditions shift', 'Leave a rain and daylight margin for the valley road and crossings. Do not force a loop when the host recommends the shorter path.']
    ],
    risks: [
      ['Rain-softened paths', 'Terrace edges, stones and stream crossings become slippery. A locally confirmed route and an early turn-around are safer than a fixed loop target.'],
      ['Crop damage', 'Fields are working food plots. Stay on the footpath instead of entering a terrace for a closer view.'],
      ['Unclear road pickup', 'Some homestays and trail finishes are not vehicle-side. Confirm the exact finish pin and return contact before walking away from the road.']
    ],
    duration: 'Reserve a full day for the walk, host stop and vehicle legs. The tourism office’s longer village circuit allows about three hours walking, three driving and lunch; a shorter Lao Chai–Ta Van version is listed at about two hours on foot plus one hour driving. Confirm which route your guide is actually offering.',
    combine: 'Choose either this valley walk or the Cat Cat descent for the main walking block. Do not stack it with Fansipan transport or the Bac Ha market drive.',
    verify: 'Ask which paths and hosts are open, confirm trailhead and pickup, check rain and stream conditions, and agree on photo and homestay etiquette.'
  },
  'cat-cat-village': {
    reviewDate: '7 October 2026', isoDate: '2026-10-07', countryCss: sapa.hubCss,
    motif: '19th-century houses and waterfall steps', instrument: 'stair circuit',
    summary: 'Take the short road from Sa Pa to Cat Cat’s managed downhill visitor route, with 19th-century houses, craft stops, watermills and a waterfall below town.',
    lead: 'Cat Cat is close to Sa Pa but not a flat neighborhood stroll. The official tourism office places its entrance about 2 kilometres from town; visitors descend stone steps through a managed route with older houses, craft demonstrations, watermills, a waterfall and performance spaces. The present visit is a curated, commercial route through a place that also has residents.',
    orientation: 'Treat the gate-to-waterfall route as a one-way-feeling descent followed by a real uphill return, not as a brief photo stop. The office describes houses dating to the 19th century; today the managed route presents heritage spaces alongside shopfronts and designated performance areas. Follow the posted route rather than crossing into homes or the stream.',
    arrival: 'Reach the gate by a short vehicle ride or an uphill/downhill walk from central Sa Pa; confirm your driver’s return point before descending. The stone steps add effort and can be slippery, so avoid a late-day arrival that leaves the return climb in darkness.',
    sequence: 'Allow roughly half a day with time for the steps, a pause at the waterfall and an unhurried climb back. If an offered performance or craft demonstration interests you, check its current schedule at the entrance and treat it as a separate stop rather than assuming it is continuous.',
    boundary: 'Cat Cat’s managed route does not grant access to private houses or family life. Ask before taking portraits, keep to the marked path and do not step into watermill channels, gardens or fields for a better angle.',
    image: image({ src: '/assets/images/vietnam-sapa-cat-cat.webp', alt: 'Waterfall and stream at Cat Cat on the managed village visitor route', source: 'https://commons.wikimedia.org/wiki/File:Catcatfalls7.jpg', label: 'Catcatfalls7.jpg', creator: 'startracker', license: 'CC BY-SA 2.0', editNote: 'Resized, display-cropped and converted to WebP; no other material edits. The adapted image remains available under CC BY-SA 2.0.' }),
    stages: [
      ['Reach the official gate', 'Confirm the current entrance, ticket terms and vehicle return point before starting the downhill stair route.'],
      ['Follow the heritage path', 'Read the older house forms, craft displays and water-powered features as a managed visitor interpretation, not an untouched village walk.'],
      ['Pause at the lower stream', 'Visit the waterfall and watermills from signed public viewpoints. Stay out of channels and off wet barriers.'],
      ['Climb back in daylight', 'Allow time for the stone steps uphill and return to the agreed pickup before rain or evening darkness.']
    ],
    risks: [
      ['Long stair return', 'The route descends to the stream before climbing back toward the gate. Set a turn-around pace before the downhill feels easy.'],
      ['Wet steps and water', 'Rain makes the stone stairs and waterfall edges slick. Stay behind barriers and skip the lower viewpoint when the stream is high.'],
      ['Crowded landings', 'Narrow steps and doorways leave little room to pass. Pause at wider signed areas instead of stopping in a shop entrance or stair landing.']
    ],
    duration: 'Allow about half a day for the 2-kilometre approach from town, gate, stair route, waterfall stop and uphill return; travel time depends on whether you walk or hire a vehicle.',
    combine: 'This can fit beside a light town visit, but choose Cat Cat or a longer Muong Hoa walk as the day’s main descent rather than doing both in a rush.',
    verify: 'Check current gate hours and entry terms, performance availability, the public route, stair and waterfall conditions, and the return pickup.'
  },
  'o-quy-ho-waterfalls': {
    reviewDate: '31 August 2026', isoDate: '2026-08-31'
  },
  'bac-ha-market-hoang-a-tuong': {
    reviewDate: '7 October 2026', isoDate: '2026-10-07', countryCss: sapa.hubCss,
    motif: 'Sunday market and Hoang A Tuong Mansion', instrument: 'market day',
    image: image({ src: '/assets/images/vietnam-bac-ha-palace-20261007.webp', alt: 'Arched two-storey facade and courtyard of Hoang A Tuong Mansion in Bac Ha', source: 'https://commons.wikimedia.org/wiki/File:Bac_Ha_Dinh_vua_meo.jpg', label: 'Hoang A Tuong Mansion courtyard', creator: 'Velvet', license: 'CC BY-SA 4.0', editNote: 'Resized to 1600 px wide and converted to WebP; no other material edits. The adapted image remains available under CC BY-SA 4.0.' }),
    sources: [
      ['https://www.vietnam.travel/places-to-go/northern-vietnam/sapa', 'Vietnam Tourism — Bac Ha Sunday market and regional access'],
      ['https://vietnamtourism.gov.vn/post/33948', 'Vietnam National Authority of Tourism — Hoang A Tuong Mansion dates and former owner']
    ],
    summary: 'Give Bac Ha a separate Sunday road day: walk the working market first, then look for the arched courtyard of Hoang A Tuong Mansion if it is open.',
    lead: 'The Bac Ha Sunday market serves a rural trading day: food, cloth, tools and livestock move through working lanes before visitors arrive with cameras. Hoang A Tuong Mansion is a separate heritage stop, built from 1914 to 1921; the tourism authority identifies Hoang Yen Tchao as its former owner. If the compound is open, its arched facade, upper balustrades and enclosed courtyard make the contrast with the open-air market easy to read.',
    orientation: 'Start at the market edge and let sellers and shoppers pass before entering the food and textile lanes. Livestock areas are a workplace, not a viewing pen. After the market, go to the mansion only if its gate is open; the courtyard and layered arches reward a slower look, but do not assume every room is accessible.',
    arrival: 'Book a driver or an overnight base in Bac Ha before Sunday; this is a separate district from Sa Pa, not a quick valley detour. Ask where the market pickup will be after crowds build and preserve daylight for the return. Do not tie that return to a critical train or bus ticket.',
    sequence: 'Arrive early while the market is actively trading. Walk the outer lanes first, then follow public aisles through produce, textiles and tools; visit livestock sections only where people can pass safely. Add Hoang A Tuong after the market if the compound is open, and stay overnight if both visits would otherwise be rushed.',

    boundary: 'Ask before photographing sellers, children, shoppers or livestock. Keep out of stalls and animal handling areas unless invited, agree prices before buying and avoid wildlife products. Clothing is personal and commercial work is not a performance for visitors.',
    stages: [
      ['Make Bac Ha the destination', 'Confirm the Sunday date, driver, return or overnight plan and a saved pickup point before leaving Sa Pa.'],
      ['Observe trade from the edge', 'Give sellers room, keep aisles clear and read the food, textile, tool and livestock sections without interrupting transactions.'],
      ['Read the mansion separately', 'If its gate is open, notice the enclosed courtyard, arched bays and balcony railings; ask which interior rooms are included before entering.'],
      ['Return with daylight', 'Leave a road and weather buffer; stay overnight if the market, mansion and return would otherwise become a rushed sequence.']
    ],
    risks: [
      ['Long mountain transfer', 'Road time varies with weather, traffic and stops. Do not plan a same-day essential onward connection after the return to Sa Pa.'],
      ['Crowded working lanes', 'People, carts and animals share narrow passages. Stand aside for transactions and never block an animal handler or a doorway.'],
      ['Uncertain mansion access', 'The market is the fixed Sunday anchor; mansion hours and room access can change. Confirm the gate locally and do not let a closed visit force a rushed return drive.']
    ],
    duration: 'Reserve a full day from Sa Pa or sleep in Bac Ha for a slower visit. The weekly market, rural road and mansion access do not fit a brief Sapa-town add-on.',
    combine: 'Combine the market and mansion within Bac Ha if both are open; do not pair this road day with Fansipan, a full Muong Hoa trek or Cat Cat.',
    verify: 'Confirm the Sunday market and any holiday change, road and weather conditions, mansion opening and entry terms, vehicle pickup and daylight return.'
  }
};

const sapaDecisionLabels = {
  'town-ham-rong': ['Getting around town', 'When to climb', 'Respect the town'],
  'fansipan-summit': ['Station transfer', 'Summit sequence', 'Stay on the visitor route'],
  'muong-hoa-lao-chai-ta-van': ['Trail start and finish', 'Terrace season', 'Ask before entering'],
  'cat-cat-village': ['Gate and return', 'Waterfall route', 'Respect residents'],
  'bac-ha-market-hoang-a-tuong': ['Market morning', 'Road-day return', 'Ask before photographing']
};

const sapaPresentation = {
  'town-ham-rong': {
    readingTitle: 'The old hill station and the Ham Rong stairs',
    routeTitle: 'From the church square to the upper gardens',
    checksLabel: 'Before your visit',
    checksTitle: 'Weather, stairs and the downhill return',
    checksLead: 'Check Ham Rong’s current entrance and opening notice after you arrive; rain can make the stone stair descent slippery.',
    boundaryTitle: 'Give residents room in the town lanes',
    faqLabel: 'Visitor questions',
    faqTitle: 'Central streets, luggage and Ham Rong'
  },
  'fansipan-summit': {
    readingTitle: 'The cable car reaches the summit; altitude still matters',
    routeTitle: 'From the Sa Pa station to the summit steps',
    checksLabel: 'Before your visit',
    checksTitle: 'Visibility, wind and service status',
    checksLead: 'Confirm Sun World service, cloud visibility and wind before leaving town; a clear Sa Pa forecast does not guarantee a clear summit.',
    boundaryTitle: 'Follow marked paths at altitude',
    faqLabel: 'Visitor questions',
    faqTitle: 'Cable car, summit and trekking'
  },
  'muong-hoa-lao-chai-ta-van': {
    readingTitle: 'Working terraces and village paths',
    routeTitle: 'A host-confirmed valley walk',
    checksLabel: 'Before your visit',
    checksTitle: 'Season, footing and pickup',
    checksLead: 'Agree with a local host on the named path, finish pickup and current bridge conditions; field routes change with weather and cultivation.',
    boundaryTitle: 'Enter fields and homes only with permission',
    faqLabel: 'Visitor questions',
    faqTitle: 'Terrace season and valley routes'
  },
  'cat-cat-village': {
    readingTitle: 'A managed route through a living village',
    routeTitle: 'Gate, waterfall and uphill return',
    checksLabel: 'Before your visit',
    checksTitle: 'Steps, rain and the return',
    checksLead: 'Confirm today’s gate route and pickup before descending; rain makes Cat Cat’s stone steps slippery in both directions.',
    boundaryTitle: 'The visitor route passes through a working village',
    faqLabel: 'Visitor questions',
    faqTitle: 'Visitor route and village etiquette'
  },
  'bac-ha-market-hoang-a-tuong': {
    readingTitle: 'Market trade and a separate mansion visit',
    routeTitle: 'Sunday market, then Hoang A Tuong',
    checksLabel: 'Before your visit',
    checksTitle: 'Market day, opening and daylight return',
    checksLead: 'Verify the Sunday market is running, ask whether the mansion is open and leave daylight for the road back to Sa Pa.',
    boundaryTitle: 'Let sellers and handlers keep working',
    faqLabel: 'Visitor questions',
    faqTitle: 'Sunday market and mansion access'
  }
};

const sapaFaqs = {
  'town-ham-rong': [
    ['Is Ham Rong a sensible first-day outing?', 'Yes, if you have arrived early enough to settle in and the hill is open. Walk the church-square lanes first; save the stair climb for a day when rain and cloud leave a clear descent.'],
    ['Is central Sa Pa easy to cross with luggage?', 'Not always. The former hill station has steep streets, and some hotels sit above vehicle drop-off points. Ask the property for its exact car access and the final walk before your bus arrives.'],
    ['Will the town view continue from Ham Rong?', 'Not necessarily. Cloud can cover the upper gardens while the square below stays clear. Check the hill after reaching town and treat a panorama as weather-dependent.']
  ],
  'fansipan-summit': [
    ['How much of Fansipan is by cable car?', 'Vietnam Tourism describes a 6-kilometre ride of about 15 minutes to 3,143 metres. The pagoda complex and final summit steps are above the station, so allow time to walk slowly at altitude.'],
    ['What if Fansipan is clouded in?', 'Check Sun World’s operating notice and mountain forecast before leaving. If visibility, wind or service is poor, postpone; a clear Sa Pa town forecast does not guarantee a clear summit.'],
    ['Is the cable-car visit a trek?', 'No. The cable car is a transport option; a Fansipan trek is a separate route with different fitness, guide and permission requirements. Confirm the exact trek with an authorized local operator.']
  ],
  'muong-hoa-lao-chai-ta-van': [
    ['When do Muong Hoa terraces look green or gold?', 'The local tourism office describes water-filled planting fields from April, green terraces in June and golden rice in the second half of September to the first half of October. Weather and planting dates shift, so color is never guaranteed.'],
    ['How long is a Lao Chai–Ta Van walk?', 'It depends on the named route. The office’s wider Lao Chai–Ta Van–Giang Ta Chai–Ban Ho day lists about three hours walking, three hours driving and lunch; its shorter Lao Chai–Ta Van outing lists about two hours walking and one hour driving.'],
    ['Can I cross May Bridge by vehicle?', 'No. The tourism office describes May Bridge as a footbridge made from bamboo, wood and liana; motorbikes and taxis cannot cross it. Confirm the current path and bridge condition with your host.']
  ],
  'cat-cat-village': [
    ['What does the Cat Cat route include?', 'The tourism office places the entrance about 2 kilometres from central Sa Pa and describes a stone-step descent past 19th-century houses, craft stalls, watermills and a waterfall. Access to individual homes or performances is separate.'],
    ['How much walking is involved?', 'Plan roughly half a day for the approach, downhill steps, waterfall pause and uphill return. The route feels longer in rain or with a slower group; arrange pickup before you descend.'],
    ['Is Cat Cat a private village visit?', 'It is a managed visitor route through a place where people live. Follow posted public paths, ask before taking portraits and enter a home only by invitation.']
  ],
  'bac-ha-market-hoang-a-tuong': [
    ['Can Bac Ha market be a quick add-on from Sa Pa?', 'It is better treated as its own Sunday road day. Add the mansion only if it is open and leave a daylight return margin; stay overnight in Bac Ha if the drive would make both visits rushed.'],
    ['What is the history of Hoang A Tuong Mansion?', 'Vietnam’s tourism authority dates the mansion to 1914–1921 and names Hoang Yen Tchao as its former owner. The arched courtyard is a separate heritage visit from the market’s weekly trade.'],
    ['May I photograph market sellers or animals?', 'Ask people before photographing them, keep out of stalls and animal-handling areas, and leave room for buyers and sellers to work. A public market is still someone’s workplace.']
  ]
};

for (const guide of sapa.guides) {
  const update = sapaGuideUpdates[guide.slug];
  if (update && sapaDecisionLabels[guide.slug]) {
    Object.assign(guide, update);
    guide.decisions = [
      ...sapaDecisionLabels[guide.slug].map((label, index) => [label, [guide.arrival, guide.sequence, guide.boundary][index]])
    ];
    guide.presentation = sapaPresentation[guide.slug];
    guide.route = guide.stages.map((stage, index) => [['Arrive', 'Read', 'Deepen', 'Exit'][index], stage[0], stage[1]]);
    guide.checks = guide.risks;
    guide.hideSequenceLead = true;
    guide.hideBoundaryBlock = false;
    guide.checksIntro = '';
    guide.faq = sapaFaqs[guide.slug];
  }
}

const sapaImageLicenses = {
  'town-ham-rong': ['https://creativecommons.org/licenses/by/4.0/', 'Changes: image resized, display-cropped and converted to WebP; no other material edits.'],
  'fansipan-summit': ['https://creativecommons.org/licenses/by-sa/4.0/', 'Changes: image resized, display-cropped and converted to WebP. Share-alike: the adapted image is released under the same CC BY-SA 4.0 license.'],
  'muong-hoa-lao-chai-ta-van': ['https://creativecommons.org/licenses/by-sa/4.0/', 'Changes: image resized, display-cropped and converted to WebP. Share-alike: the adapted image is released under the same CC BY-SA 4.0 license.'],
  'cat-cat-village': ['https://creativecommons.org/licenses/by-sa/2.0/', 'Changes: image resized, display-cropped and converted to WebP. Share-alike: the adapted image is released under the same CC BY-SA 2.0 license.'],
  'o-quy-ho-waterfalls': ['https://creativecommons.org/licenses/by-sa/4.0/', 'Changes: image resized, display-cropped and converted to WebP. Share-alike: the adapted image is released under the same CC BY-SA 4.0 license.'],
  'bac-ha-market-hoang-a-tuong': ['https://creativecommons.org/licenses/by-sa/4.0/', 'Changes: image resized and converted to WebP; no other material edits. Share-alike: the adapted image is released under CC BY-SA 4.0.']
};
for (const guide of sapa.guides) {
  const [licenseUrl, editNote] = sapaImageLicenses[guide.slug];
  Object.assign(guide.image, { licenseUrl, useAltAsCreditTitle: true });
  if (editNote) guide.image.editNote = editNote;
}

const haGiang = vietnamNorthClusters.find((cluster) => cluster.slug === 'ha-giang');
haGiang.presentation = {
  conditionsKicker: 'Road-day decisions',
  conditionsTitle: 'Six legs with different road and daylight demands',
  conditionsLead: 'The northern spur, market streets, cliff road and river descent each need their own daylight and access decision.',
  checksActionText: 'Check conditions',
  faqKicker: 'Ha Giang planning questions',
  faqTitle: 'Base nights, branch days and road margins'
};

const haGiangPresentation = {
  'quan-ba-heavens-gate': {
    motif: '(valley overlook and first road day)',
    decisions: ['Start after the Hà Giang City transfer', 'Tam Sơn is the practical reset', 'Use only safe public pull-offs'],
    presentation: {
      readingTitle: 'Heaven’s Gate explains the valley before the climb',
      routeTitle: 'A daylight run from Hà Giang City to Yên Minh',
      checksLabel: 'On the first road day',
      checksTitle: 'Visibility, pull-offs and rider readiness',
      checksLead: 'Before leaving Hà Giang City, confirm the rider or driver, QL4C conditions, fuel and the day’s weather; reset at Tam Sơn before continuing.',
      boundaryTitle: 'Keep viewpoints off the live road',
      faqLabel: 'Quản Bạ visit questions',
      faqTitle: 'What fits between Hà Giang City and Yên Minh?'
    }
  },
  'yen-minh-pine-forest': {
    motif: '(overnight reset between long road legs)',
    decisions: ['Reserve a Yên Minh night', 'Use the pine view as a short stop', 'Confirm public access before walking'],
    presentation: {
      readingTitle: 'Treat Yên Minh as recovery, not a trailhead',
      routeTitle: 'From the pine pause to Đồng Văn',
      checksLabel: 'At the overnight base',
      checksTitle: 'Services, fog and forest access',
      checksLead: 'Town services are thin; confirm lodging, fuel, meals, cash and parking before leaving Tam Sơn. In fog or rain, use only a known public route.',
      boundaryTitle: 'Treat the pines as roadside scenery',
      faqLabel: 'Yên Minh overnight questions',
      faqTitle: 'How to use this stop between the longer drives'
    }
  },
  'dong-van-old-quarter': {
    motif: '(covered market and lived-in lanes)',
    decisions: ['Arrive before the lanes tighten', 'Walk the old quarter between road legs', 'Separate street access from house access'],
    presentation: {
      readingTitle: 'Street life and the covered market',
      routeTitle: 'Walk the quarter before the next road day',
      checksLabel: 'In the old quarter',
      checksTitle: 'Lane traffic, home thresholds and market work',
      checksLead: 'UNESCO’s house count describes a neighborhood, not visitor-open interiors. Stay on public lanes, avoid blocking deliveries and ask a current host about any hosted room.',
      boundaryTitle: 'A doorway is not an invitation',
      faqLabel: 'Đồng Văn visit questions',
      faqTitle: 'How much of the quarter is open to visitors?'
    }
  },
  'lung-cu-flag-tower': {
    motif: '(tower climb and border-area return)',
    decisions: ['Base the branch in Đồng Văn', 'Budget daylight for the tower return', 'Follow border-site instructions'],
    presentation: {
      readingTitle: 'A civic landmark in a border landscape',
      routeTitle: 'From Đồng Văn to Lũng Cú and back in daylight',
      checksLabel: 'Before taking the northern spur',
      checksTitle: 'Stairs, weather and site instructions',
      checksLead: 'Check the current road, tower access and local photography directions before leaving Đồng Văn; keep enough time for the stair climb and a safe return.',
      boundaryTitle: 'Obey the posted border-area limits',
      faqLabel: 'Lũng Cú visit questions',
      faqTitle: 'How to plan the tower and village branch'
    }
  },
  'ma-pi-leng-nho-que': {
    motif: '(ridge road and river descent)',
    decisions: ['Separate the ridge drive and boat trip', 'Choose the river only after a road check', 'Stay behind barriers and out of traffic'],
    presentation: {
      readingTitle: 'Pass, overlook and river are three separate visits',
      routeTitle: 'QL4C ridge first; river only if the return works',
      checksLabel: 'Before descending toward Nho Quế',
      checksTitle: 'Traffic, rain and a separate boat transfer',
      checksLead: 'Confirm safe stopping points, visibility and road status first. Treat a river descent as a second transfer with a named operator, water check and return pickup.',
      boundaryTitle: 'Do not turn the cliff edge into a viewpoint',
      faqLabel: 'Mã Pí Lèng and Nho Quế questions',
      faqTitle: 'When does a river trip fit the pass drive?'
    }
  }
};

for (const guide of haGiang.guides) {
  const update = haGiangPresentation[guide.slug];
  if (!update) continue;
  guide.motif = update.motif;
  guide.decisions = guide.decisions.map(([, copy], index) => [update.decisions[index], copy]);
  guide.presentation = update.presentation;
}

const meoVacCreditGuide = haGiang.guides.find((guide) => guide.slug === 'meo-vac-du-gia');
meoVacCreditGuide.kickerLabel = 'FRONTIER ROADS / KARST / VILLAGES';
meoVacCreditGuide.image.editNote = 'Resized, display-cropped and converted to WebP; adapted version remains available under CC BY-SA 4.0.';

// Keep Ninh Binh's route pages grounded in the actual landscape and heritage
// sequence. These are per-region data overrides; the shared renderer remains
// untouched.
const ninhBinh = vietnamNorthClusters.find((cluster) => cluster.slug === 'ninh-binh');
const ninhBinhLegacyLabel = ninhBinh.label;
const ninhBinhLegacySources = ninhBinh.sources;
ninhBinh.reviewDate = '7 October 2026';
ninhBinh.isoDate = '2026-10-07';
ninhBinh.hubCss = '/css/vietnam-ninh-binh.css?v=20261007-1';
ninhBinh.name = 'Ninh Binh';
ninhBinh.label = 'RIVER GORGES / TEMPLE VALLEY / KARST';
ninhBinh.tagline = 'Read the water routes and the old capital as separate chapters.';
ninhBinh.hubIntro = 'Ninh Binh is a limestone and river landscape with a long human history: UNESCO records cave evidence reaching back more than 30,000 years and the 10th-century capital of Hoa Lu. Today the visitor routes are distinct. Trang An uses its own managed boat pier; Tam Coc follows the Ngo Dong River from Van Lam; Hoa Lu is a temple valley, not an intact palace city. Build days around one boat circuit or one land-history visit, then leave daylight for the rural transfer back.';
ninhBinh.stay = 'Stay around Tam Coc when Van Lam pier, Bich Dong and village meals are the focus. Choose Ninh Binh City when rail or road arrival is the priority, but allow a separate vehicle transfer to the countryside. On arrival day, settle in and confirm tomorrow’s pier or temple pin instead of assuming the station and boat docks are walkably close.';
ninhBinh.transfer = 'From Hanoi, compare current train and road options against the actual hotel and first stop; schedules and traffic change. Save each destination in Vietnamese, arrange the last rural pickup before setting out, and keep a half-day boat route separate from a long arrival transfer.';
ninhBinh.presentation = {
  conditionsKicker: 'Choose by landscape, not by checklist',
  conditionsTitle: 'Three visits, three different paces',
  conditionsLead: 'A managed cave-and-temple boat route, a river-and-pagoda day, and the old capital valley each start in a different place. Pick one main chapter per half day and leave the cross-country transfer visible.',
  faqKicker: 'Ninh Binh planning questions',
  faqTitle: 'Which pier, base and day sequence fit?'
};
ninhBinh.routeModelHeading = 'Keep each pier and heritage stop in its own sequence';
ninhBinh.routeModelLead = 'This region is compact on a map but its boat routes do not share a dock. Use a single boat circuit as the day anchor, then add only a nearby land stop if the return transfer and daylight still work.';
ninhBinh.sources = [
  ['https://whc.unesco.org/en/list/1438/', 'UNESCO — Trang An Landscape Complex: natural and cultural heritage, archaeology and Hoa Lu'],
  ['https://vietnam.travel/node/196', 'Vietnam Tourism — Ninh Binh: arrival options and landscape context'],
  ['https://vietnam.travel/things-to-do/guide-boat-tours-ninh-binh', 'Vietnam Tourism — Ninh Binh boat routes and piers'],
  ['https://sodulich.ninhbinh.gov.vn/en/culture-heritage/hoa-lu-ancient-capital-380.html', 'Ninh Binh Department of Tourism — Hoa Lu Ancient Capital'],
  ['https://sodulich.ninhbinh.gov.vn/en/culture-heritage/nhat-tru-pagoda-384.html', 'Ninh Binh Department of Tourism — Nhat Tru Pagoda'],
  ['https://sodulich.ninhbinh.gov.vn/en/leisure-ecotourism/tam-coc-bich-dong-the-second-most-beautiful-cave-in-northern-vietnam-361.html', 'Ninh Binh Department of Tourism — Tam Coc and Bich Dong'],
  ['https://sodulich.ninhbinh.gov.vn/en/cuisines/burned-rice-ninh-binh-390.html', 'Ninh Binh Department of Tourism — burned rice and local food']
];

const ninhBinhUpdates = {
  'trang-an-boat-complex': {
    motif: 'A boat route through the karst-water maze',
    summary: 'Choose one official Trang An loop for its caves, temple landings and water-level view of the UNESCO landscape.',
    sources: [
      ['https://whc.unesco.org/en/list/1438/', 'UNESCO — Trang An Landscape Complex and archaeological landscape'],
      ['https://vietnam.travel/things-to-do/guide-boat-tours-ninh-binh', 'Vietnam Tourism — Ninh Binh boat routes and piers'],
      ['https://trangandanhthang.vn/khu-du-lich-trang-an/', 'Trang An Landscape Complex Management Board — Trang An visitor area']
    ],
    lead: 'Trang An is a mixed natural and cultural property, not just a scenic boat ride. Limestone towers rise above flooded valleys, while caves preserve archaeological evidence and the wider landscape includes villages and historic sites. Visitors see one managed route at a time: route length, cave passages and temple landings vary, so decide from the current pier map rather than expecting every feature on one trip.',
    orientation: 'The official Trang An pier is separate from Tam Coc’s Van Lam pier. Read the current route board at Trang An, choose a loop for the group’s walking tolerance and cave comfort, then treat the boat ride as the main half-day activity. UNESCO’s deep-time archaeology explains the landscape; it is not an underground museum tour.',
    arrival: 'Travel to the Trang An ticket and boat area as a dedicated rural transfer. Confirm the exact entrance and current route board before departure; do not navigate to Tam Coc by mistake. On busy dates or after rain, leave queue and weather margin, and agree on a pickup point before boarding.',
    sequence: 'Choose a current loop at the official pier, secure loose items before cave passages, follow the boatperson’s boarding and landing instructions, and keep a calm pace at temples. Return to the agreed pickup before adding another stop.',
    boundary: 'Stay seated while underway, keep hands and feet inside near low cave ceilings, carry rubbish back and leave temple landings clear. Do not touch cave surfaces or ask the rower to leave the managed route for a photograph.',
    decisions: [
      ['Start at the Trang An pier', 'Van Lam and Trang An are different boat operations; save the correct Vietnamese map pin and return pickup.'],
      ['Pick one loop before boarding', 'Compare the posted caves, landings and walking demands; half a day for a single circuit is a realistic anchor.'],
      ['Respect the water and temple stops', 'Stay seated, follow landing instructions, keep caves and ritual areas undisturbed, and carry waste out.']
    ],
    presentation: {
      readingTitle: 'The boat reveals a lived-in heritage landscape',
      routeTitle: 'From the route board to the last landing',
      checksLabel: 'Before the boat transfer',
      checksTitle: 'Loop, queue and cave conditions',
      checksLead: 'Use the official pier for the current loop and departure process. Rain, demand and temporary access changes can affect both queue and cave conditions; keep the next transfer flexible.',
      boundaryTitle: 'Leave the managed route undisturbed',
      faqLabel: 'Trang An visit questions',
      faqTitle: 'Which route and how much time?'
    },
    stages: [
      ['Choose the loop', 'Read the current pier map for cave passages, temple landings and route effort. Do not select only from a third-party itinerary.'],
      ['Board with care', 'Secure phones and bags, sit where directed and let the rower set pace through narrow cave sections.'],
      ['Read the landscape', 'From the water, notice how karst walls, flooded valleys, cave mouths and village land meet. The boat route is one view into a much larger protected area.'],
      ['Return before adding on', 'Meet the agreed pickup and check the remaining daylight before choosing a nearby land stop such as Hoa Lu.']
    ],
    risks: [
      ['Route differences', 'Loops vary in caves, temple stops and time. Confirm the current route at the official pier and do not promise features that may be on another loop.'],
      ['Low cave passages and wet landings', 'Remain seated where instructed and take temple steps slowly; bring a dry layer for rain and protect electronics before boarding.'],
      ['Queue and rural pickup', 'Holiday demand and rural road traffic can push the return later. Keep the pickup point clear and avoid a timed onward train immediately after the ride.']
    ],
    duration: 'Set aside a half day for one boat loop, including the transfer, queue and landings. A full day can fit one nearby history stop; it is usually too tight to add Tam Coc’s separate boat route as well.',
    combine: 'Pair with Hoa Lu only when the group has daylight and a confirmed transfer. Keep Tam Coc for another day because its boat route starts at a different pier and shows a different river landscape.',
    verify: 'Check the official route board, operating status, queue conditions, forecast, pier entrance, boat instructions and return pickup on the day.'
  },
  'hoa-lu-ancient-capital': {
    motif: 'The capital valley through its temple compounds',
    summary: 'Read the Dinh and early Le memorial temples against the limestone enclosure of the 968–1010 capital valley.',
    sources: [
      ['https://whc.unesco.org/en/list/1438/', 'UNESCO — Hoa Lu in the Trang An cultural landscape'],
      ['https://sodulich.ninhbinh.gov.vn/en/culture-heritage/hoa-lu-ancient-capital-380.html', 'Ninh Binh Department of Tourism — Hoa Lu Ancient Capital'],
      ['https://sodulich.ninhbinh.gov.vn/en/culture-heritage/nhat-tru-pagoda-384.html', 'Ninh Binh Department of Tourism — Nhat Tru Pagoda']
    ],
    lead: 'Hoa Lu was the capital of Dai Co Viet from 968 until Ly Thai To moved the court to Thang Long in 1010. The visitor sees temple compounds and a protected valley, not an intact 10th-century palace city. Distinguish the later memorial buildings and active worship from the political geography that made this narrow basin defensible.',
    orientation: 'Start at the Dinh Tien Hoang and Le Dai Hanh temple area, then use the mountains and narrow approaches to imagine a small capital enclosed by karst. Nhat Tru Pagoda lies about 300 metres north of the Le temple; its 10th-century stone sutra pillar is a separate stop, not part of a continuous palace ruin.',
    arrival: 'Reach the Hoa Lu monument area by confirmed car, taxi, cycle or tour transfer and save the entrance pin. The temples are outside the city center; do not plan a walk from Ninh Binh station. If adding Nhat Tru, check opening and access before routing there.',
    sequence: 'Visit the Dinh and Le temple compounds first, read the valley from the approaches, then add Nhat Tru Pagoda or one nearby landscape stop if opening and transfer time allow. Leave a quiet interval around worship rather than treating every courtyard as a photo set.',
    boundary: 'The memorial temples are religious places as well as heritage sites. Dress modestly, keep voices low, ask before photographing worshippers and do not touch inscriptions, offerings or the stone sutra pillar.',
    decisions: [
      ['Begin at the Dinh and Le temples', 'The two memorial compounds are the clearest on-site anchors for the 10th-century court history.'],
      ['Read the valley as the defense', 'The enclosing limestone and narrow approaches explain the setting better than an imagined complete palace plan.'],
      ['Keep memorial sites active and sacred', 'Wear respectful clothing, lower your voice and leave ritual objects and worshippers undisturbed.']
    ],
    presentation: {
      readingTitle: 'A capital remembered in a temple valley',
      routeTitle: 'From the Dinh and Le temples to one context stop',
      checksLabel: 'Before the heritage visit',
      checksTitle: 'Opening, worship and the side route',
      checksLead: 'Temple access, ceremonies and restoration may change the usable path. Confirm the correct entrance; verify Nhat Tru Pagoda separately if you intend to add its 10th-century stone pillar.',
      boundaryTitle: 'Treat the compounds as places of worship',
      faqLabel: 'Hoa Lu visit questions',
      faqTitle: 'What remains, and what can fit in a half day?'
    },
    stages: [
      ['Enter the valley', 'Notice the limestone walls and narrow approaches before focusing on the temple courtyards; geography is part of the capital’s story.'],
      ['Visit the Dinh temple', 'Use the memorial compound to introduce Dinh Bo Linh and the founding of Dai Co Viet, while distinguishing the current structures from the vanished court.'],
      ['Continue to the Le temple', 'Read the second memorial in the same valley, then add Nhat Tru Pagoda only if its separate access and opening fit the day.'],
      ['Leave time for the return', 'Use a confirmed rural pickup and keep another boat circuit for a different day rather than rushing between piers.']
    ],
    risks: [
      ['Memorial versus original fabric', 'The temples commemorate rulers but are not a preserved palace complex. Use the site interpretation and avoid calling every building 10th-century.'],
      ['Ceremony and restoration', 'Events, repairs or ritual use can redirect visitors. Follow posted routes and check current access before adding Nhat Tru.'],
      ['Heat and exposed stone', 'Courtyards have limited shade. Start earlier, bring water and avoid scheduling a long rural walk in the hottest part of the day.']
    ],
    duration: 'Allow three to five hours for the two temple compounds, interpretation and rural transfers. Add Nhat Tru Pagoda only after checking access; a relaxed full day leaves time to understand the valley without stacking another long boat route.',
    combine: 'Trang An is the closest thematic pairing: the boat shows the wider karst-water landscape and Hoa Lu gives it a political history. Keep the route order flexible and use a driver or transfer confirmed for both stops.',
    verify: 'Recheck temple and pagoda access, ceremony or restoration notices, transport pickup, weather, photography directions and current visitor conduct.'
  },
  'tam-coc-bich-dong': {
    motif: 'Ngo Dong River, three caves and a cliff pagoda',
    summary: 'Take the Van Lam boat route through the Ngo Dong River caves, then approach Bich Dong’s three pagoda levels as a separate visit.',
    sources: [
      ['https://sodulich.ninhbinh.gov.vn/en/leisure-ecotourism/tam-coc-bich-dong-the-second-most-beautiful-cave-in-northern-vietnam-361.html', 'Ninh Binh Department of Tourism — Tam Coc and Bich Dong'],
      ['https://trangandanhthang.vn/tam-coc-bich-dong/', 'Trang An Landscape Complex Management Board — Tam Coc and Bich Dong'],
      ['https://sodulich.ninhbinh.gov.vn/en/cuisines/burned-rice-ninh-binh-390.html', 'Ninh Binh Department of Tourism — burned rice and local food']
    ],
    lead: 'Tam Coc means “three caves”: the boat from Van Lam follows the Ngo Dong River through Hang Ca, Hang Hai and Hang Ba. The scenery changes with water level, weather and the rice crop, so no photograph can promise a particular field color. Bich Dong is a separate pagoda complex above the road: its lower, middle and upper levels climb into a limestone hillside, with the middle sanctuary partly set into the rock.',
    orientation: 'Van Lam pier is the Tam Coc boat starting point; it is not the Trang An pier. Reach Bich Dong separately by a safe cycle or vehicle transfer and expect steps. The name Bich Dong was given in 1774, while the complex combines later religious architecture and active worship rather than one untouched ancient structure.',
    arrival: 'Base in Tam Coc for local meals and easier access to Van Lam. Check the boat queue and route before setting out, then arrange a bicycle or vehicle to Bich Dong; do not assume the pagoda is an effortless walk from the pier. Use a helmet and a vehicle fallback if road shoulders, heat or rain make cycling uncomfortable.',
    sequence: 'Visit Bich Dong during cooler hours if the group wants the stair climb, then use Van Lam for the separate boat trip, or reverse the order according to queue and weather. Leave time for a meal in Tam Coc; cơm cháy (crispy rice) and local goat dishes are regional specialties, but menus and preparation vary.',
    boundary: 'Stay on public lanes and marked temple paths, never walk into rice plots, and ask before photographing residents. At Bich Dong, keep voices low and do not touch shrines or cave-temple surfaces.',
    decisions: [
      ['Use Van Lam for the Tam Coc boat', 'The Ngo Dong route and Trang An’s managed loops are separate experiences with different piers.'],
      ['Treat Bich Dong as a stair visit', 'Its three levels climb the hillside; set a turnaround point that fits mobility, heat and access on the day.'],
      ['Let the crop and river set expectations', 'Rice color, water and operating conditions change; keep farms private and do not plan around a guaranteed golden view.']
    ],
    presentation: {
      readingTitle: 'A river route below a three-level pagoda',
      routeTitle: 'Van Lam pier and Bich Dong are separate stops',
      checksLabel: 'Before the river and temple day',
      checksTitle: 'Water, weather, crop and stair access',
      checksLead: 'River conditions and rice growth change the view; rain affects both boat operation and steep temple steps. Check the current pier process and choose a safe cycle or vehicle transfer to Bich Dong.',
      boundaryTitle: 'Give farms and worshippers space',
      faqLabel: 'Tam Coc and Bich Dong questions',
      faqTitle: 'How do the boat caves and pagoda fit together?'
    },
    stages: [
      ['Check the river and crop', 'Ask the current host about water, boat queues and what the fields look like this week. Avoid promising a color or season from an old photo.'],
      ['Ride from Van Lam', 'Board at Tam Coc’s Van Lam pier for the Ngo Dong route and its three caves; follow the boat staff’s instructions and keep belongings secure.'],
      ['Climb Bich Dong slowly', 'Transfer separately to the pagoda and take the lower, middle and upper levels at a pace suited to stairs and heat. Turn back when footing or access calls for it.'],
      ['Return through Tam Coc', 'Choose a public rural lane, keep clear of farm work, then stop for a local meal before arranging the final pickup.']
    ],
    risks: [
      ['Changing river and fields', 'Water level, rain and crop stage change the scenery and boat operation. Check current local conditions instead of relying on a seasonal photo.'],
      ['Pagoda steps and cave surfaces', 'Stone steps can be uneven or slippery. Use appropriate footwear, keep a hand free and skip upper levels if footing is poor.'],
      ['Narrow rural roads', 'Bikes share space with local traffic and farm activity. Use a helmet, avoid riding after dark and switch to a vehicle in rain or heavy heat.']
    ],
    duration: 'Allow a full day for the boat, a separate transfer and the Bich Dong levels at a relaxed pace. A half day can cover one of the two; trying to add Trang An as well means a second pier and a second boat queue.',
    combine: 'Stay in the Tam Coc area for a local meal after the route. Cơm cháy and goat dishes are well-known Ninh Binh specialties; confirm what is actually available and how it is prepared rather than treating a fixed menu as guaranteed.',
    verify: 'Check Van Lam boat operation and queue, river and weather conditions, current rice stage, Bich Dong access and stairs, cycling comfort, and a return vehicle after dark.'
  },
  'hang-mua-dragon-mountain': {
    motif: 'Stone steps and a Tam Coc panorama',
    photoNote: false,
    sources: [
      ['https://sodulich.ninhbinh.gov.vn/en/leisure-ecotourism/discover-the-mua-cave-in-ninh-binh-358.html', 'Ninh Binh Department of Tourism — Mua Cave location, legend and summit stairs'],
      ['https://whc.unesco.org/en/list/1438/', 'UNESCO — Trang An Landscape Complex']
    ],
    lead: 'Mua Cave sits below Mua Mountain inside the Trang An landscape; the reason to climb is the open view over Tam Coc’s winding river, fields and limestone towers. The Ninh Binh tourism department’s 2017 account calls the cave “Dance Cave” and relates its name to a local story about music and dance for a Tran king near Hoa Lu. Treat that as a legend, not a verified court record. At the summit, the white Avalokitesvara statue faces the ancient-capital landscape; the climb itself is a steep stair outing, not an easy viewpoint stop.',
    orientation: 'The department places Mua Cave about 3.5 km from the Tam Coc landscape and reports 486 summit steps in its 2017 page. That figure is a dated reference, not a guarantee of the current stair count or access. The panorama is clearest as a geography lesson: Tam Coc lies below, with cultivated fields and karst around it. Choose the summit only if the group is comfortable with sustained steps and exposure.',
    decisions: [
      ['Choose a summit attempt deliberately', 'The panorama requires sustained stairs; the lower grounds remain a worthwhile option when heat, balance or mobility argues against the climb.'],
      ['Climb while conditions suit', 'Use a cool, clear window and preserve time for a controlled descent rather than timing the visit around sunset photographs.'],
      ['Keep the boundary', 'The nearby cliffs are not safe extensions of the viewpoint; stay within signed visitor areas and put the phone away while moving.']
    ],
    presentation: {
      readingTitle: 'The stairway makes the landscape legible',
      routeTitle: 'From the entrance steps to a safe return',
      checksLabel: 'Before the mountain climb',
      checksTitle: 'Heat, footing, crowding and the descent',
      checksLead: 'The tourism department reported 486 steps in 2017; check current access and route notices at the entrance. Rain, heat and people moving in both directions can make the same stairway feel much harder.',
      boundaryTitle: 'The ridge is not a photo platform',
      faqLabel: 'Hang Mua visit questions',
      faqTitle: 'How demanding is the climb, and what fits nearby?'
    },
    stages: [
      ['Read the climb first', 'At the entrance, check which summit paths are open, the weather and the return transfer. Choose the lower grounds, a partial climb or a summit attempt before setting off.'],
      ['Use the stair route', 'The tourism department’s 2017 page lists 486 steps to the summit. Take the number as a dated guide, use the handrail where provided and let descending visitors pass.'],
      ['Look back over Tam Coc', 'From the signed viewpoint, trace the river and fields below against the limestone ridges. The landscape is the subject; no edge beyond the marked area is worth a photograph.'],
      ['Descend with daylight left', 'Return before fatigue, rain or darkness affects balance. Only then decide whether a separate boat or meal in Tam Coc still fits.']
    ],
    risks: [
      ['Long exposed stair climb', 'The official tourism account reported 486 steps in 2017. The actual open route can change; do not attempt the summit if stairs, balance or recent exertion make it unsafe.'],
      ['Heat, rain and crowd flow', 'There is little shade on the climb. Wet stone and two-way foot traffic slow the descent; carry water and leave room at narrow landings.'],
      ['Unprotected viewpoints', 'The stone dragon and cliff edges are not platforms. Follow barriers and keep cameras secured when standing or walking.']
    ],
    duration: 'As an editorial estimate, set aside two to four hours for the entrance, summit attempt, breaks and safe descent. The department’s 486-step count dates to 2017; check the open route on arrival. Allow extra recovery time in hot weather or when the stairs are crowded.',
    combine: 'Hang Mua gives the above-river view; Tam Coc’s Van Lam boat gives the river-level passage through three caves. They are a useful pair on a full day if the climb is done in cooler hours and the group still has energy. Do not add the summit automatically after a long boat-and-bike itinerary.',
    verify: 'Check the current entrance and summit route, weather, stair condition, crowd restrictions, return vehicle and remaining daylight. Confirm any same-day Tam Coc boat plan separately at Van Lam.'
  },
  'van-long-wetland': {
    motif: 'A Ramsar wetland watched from a quiet sampan',
    photoNote: false,
    sources: [
      ['https://sodulich.ninhbinh.gov.vn/vi/tai-nguyen-du-lich-tu-nhien/khu-bao-ton-thien-nhien-dat-ngap-nuoc-van-long-18.html', 'Ninh Binh Department of Tourism — Van Long Wetland Nature Reserve, updated 14 August 2025'],
      ['https://sodulich.ninhbinh.gov.vn/en/news-events/van-long-an-attractive-painting-of-mountains-and-rivers-346.html', 'Ninh Binh Department of Tourism — boats, wildlife and visitor quiet'],
      ['https://iucngreenlist.org/sites/van-long-nature-reserve/', 'IUCN Green List — Van Long governance, Ramsar status and Delacour’s langur habitat']
    ],
    lead: 'Van Long is a protected freshwater wetland framed by limestone cliffs, not a second version of Trang An’s managed boat complex. Ninh Binh’s 2025 tourism page describes more than 3,000 hectares, 32 caves in the surrounding karst and habitat for the endemic Delacour’s langur; the IUCN Green List identifies the reserve as a Ramsar site. Take the sampan for water, reeds, birds and quiet. A langur may remain out of view, and the route must not be altered to force a sighting.',
    orientation: 'The reserve sits north of the Ninh Binh urban centre; the tourism department’s August 2025 page gives about 17 km. Confirm the current boat point, operator and return pickup for your accommodation rather than navigating to an arbitrary cave pin. The small wooden sampan is the visit; nearby caves and temples are separate stops whose access should be checked independently.',
    decisions: [
      ['Choose this for habitat, not a checklist', 'The main value is water, reed edges, limestone and bird habitat; a langur or bird sighting is never guaranteed.'],
      ['Confirm the reserve landing and ride home', 'This is a rural boat visit, so verify the actual launch point, boat operation and pickup before travelling from town.'],
      ['Keep the boundary', 'Keep conversation low, observe from the permitted sampan route and accept the distance wildlife chooses.']
    ],
    presentation: {
      readingTitle: 'The wetland is the main attraction',
      routeTitle: 'From the reserve landing and back',
      checksLabel: 'Before the rural boat transfer',
      checksTitle: 'Water, operator, access and wildlife distance',
      checksLead: 'Water and weather affect a small-boat visit, while operators and return transport are rural. Confirm both ends of the trip before leaving Ninh Binh and keep expectations for animal sightings modest.',
      boundaryTitle: 'Observe without pursuing',
      faqLabel: 'Van Long visit questions',
      faqTitle: 'What can a boat trip show, and how long to leave?'
    },
    stages: [
      ['Confirm the landing', 'Use the current reserve boat point and a named return pickup. Do not treat an old map pin for a cave or temple as the boat entrance.'],
      ['Check conditions before boarding', 'Ask whether water level, wind or rain has altered the permitted boat route, and confirm the operator’s expected return time.'],
      ['Look across the wetland', 'Watch the open water, reed edges and limestone cliffs. The Delacour’s langur is a reason the habitat matters, not a sighting the boat should promise.'],
      ['Return quietly', 'Leave the boat landing clear, carry waste out and reconnect with the confirmed vehicle before attempting another rural site.']
    ],
    risks: [
      ['Wildlife is not scheduled', 'Langurs and birds move with their own needs. The tourism department notes that sightings take patience; absence is not a reason to make noise or request a detour.'],
      ['Water and weather', 'Wind, rain and changing water can affect the sampan route. Follow the operator’s decision and do not board when staff advise against it.'],
      ['Remote landing and mobility', 'Boat service and road pickup are rural. Confirm the bank step, seating and return vehicle in advance, especially for anyone who cannot step down easily.']
    ],
    duration: 'Allow a half day as a planning estimate, including the rural transfer, boat and pickup buffer. The department’s boat guidance is older and current loop times vary; confirm the actual duration with the operator on the day.',
    combine: 'A nearby temple or cave may add a cultural layer, but only after checking its separate entrance and access. Keep Cuc Phuong as a different full-day forest visit; combining both reserves can turn observation into a long transfer day.',
    verify: 'Confirm the operating boat point, route, water and weather, boarding assistance, current conservation guidance, wildlife distance and rural return pickup.'
  },
  'cuc-phuong-conservation': {
    motif: 'Limestone forest, deep time and conservation work',
    photoNote: false,
    sources: [
      ['https://sodulich.ninhbinh.gov.vn/en/leisure-ecotourism/cuc-phuong-national-park-the-oldest-national-park-in-vietnam-359.html', 'Ninh Binh Department of Tourism — park history, limestone forest and prehistoric cave evidence'],
      ['https://vuonquocgiacucphuong.vn/en/news/v-v-ban-hanh-quy-d-nh-qu-n-ly-phuong-ti-n-giao-thong-di-chuy-n-vao-vung-loi-vu-n-qu-c-gia-cuc-phuong.html', 'Cuc Phuong National Park — core-zone vehicle rules effective 1 September 2026'],
      ['https://vuonquocgiacucphuong.vn/en/', 'Cuc Phuong National Park — official site and conservation updates']
    ],
    lead: 'Cuc Phuong became Vietnam’s first national park in 1962. Here, limestone forest, karst caves and Muong cultural history belong to the same landscape. The provincial tourism authority describes prehistoric human remains in the park’s caves, dating its own account to roughly 7,500 years ago; a cave visit is a separate heritage stop, not a shortcut through the forest. Plan around conservation institutions as well as trails, and do not treat rescue animals as guaranteed public viewing.',
    orientation: 'The forest interior is reached from the park gate along a core-zone road. Cuc Phuong National Park’s current rule, effective 1 September 2026, bars coaches with 29 or more seats from driving to Bong Center; those groups continue by park electric shuttle, walking or bicycle under park direction. Other combustion-engine vehicles entering the core are capped at 300 per day. Check the official notice before choosing a bus, private vehicle or date.',
    decisions: [
      ['Treat the vehicle rule as part of the route', 'Since 1 September 2026, large coaches stop before Bong Center; vehicle caps also apply. Confirm the connection plan before leaving your base.'],
      ['Choose one interior program', 'A forest walk, prehistoric cave context and conservation facility are distinct stops. Pick the one that is currently open and allow it time.'],
      ['Keep the boundary', 'Rescue and release work is conservation. Follow ranger access rules and do not expect wildlife to appear on a schedule.']
    ],
    presentation: {
      readingTitle: 'Prehistory and conservation sit inside a working forest',
      routeTitle: 'Gate, interpretation and one interior route',
      checksLabel: 'Before driving into the park',
      checksTitle: 'Vehicle cap, shuttle and open trails',
      checksLead: 'Park vehicle rules changed on 1 September 2026. Confirm the current core-zone route, coach transfer, daily vehicle limit and whether the specific trail or conservation program you want is open.',
      boundaryTitle: 'Follow the conservation site’s access rules',
      faqLabel: 'Cuc Phuong visit questions',
      faqTitle: 'How much time, and which stop should lead?'
    },
    stages: [
      ['Check the gate plan', 'Read the park’s current transport notice and confirm whether your vehicle can enter the core zone. Groups on larger coaches need the official onward connection.'],
      ['Choose a specific story', 'Use the park interpretation to distinguish the limestone forest, prehistoric cave record and current rescue work; do not assume every facility accepts walk-in visitors.'],
      ['Stay with one interior route', 'Set aside time for a single forest trail or cave visit, depending on current access, weather and group ability. Take a ranger’s instruction over a third-party route description.'],
      ['Return before control hours', 'Reach the gate and confirmed vehicle before dark. The park applies evening exit checks and overnight guest rules; do not improvise a night walk.']
    ],
    risks: [
      ['Vehicle rules and daily cap', 'The park’s notice effective 1 September 2026 excludes 29-plus-seat coaches from the gate-to-Bong route and caps other combustion vehicles at 300 per day. Recheck before travel.'],
      ['Trail and cave access change', 'Storms, maintenance and ranger decisions can close a route. Confirm the exact trail or cave on arrival; do not substitute an unofficial forest path.'],
      ['Heat, rain and distance', 'Forest shade does not remove the need for water, secure footwear or a return buffer. Wet roots and cave floors can make a short walk slower than expected.']
    ],
    duration: 'Reserve a full day for the rural transfer, gate procedure, one interior forest or cave route and an interpretation or conservation stop. A second day is more realistic if you want two distinct trails or an approved guided program.',
    combine: 'Keep Hang Mua for another day: its steep summit stairs are a poor add-on after the drive and park walk. Van Long is also a separate wetland visit with its own boat landing, so pair these only in a multi-day plan.',
    verify: 'Recheck the 2026 core-zone vehicle rule, daily cap, shuttle arrangements, trail and cave openings, conservation-centre access, weather and the time you must leave the forest.'
  }
};

for (const guide of ninhBinh.guides) {
  const update = ninhBinhUpdates[guide.slug];
  if (!update) continue;
  const { photoNote, ...guideUpdate } = update;
  Object.assign(guide, guideUpdate);
  guide.reviewDate = '7 October 2026';
  guide.isoDate = '2026-10-07';
  guide.countryCss = '/css/vietnam-ninh-binh.css?v=20261007-1';
  guide.route = guide.stages.map((stage, index) => [['Arrive', 'Read', 'Deepen', 'Exit'][index], stage[0], stage[1]]);
  guide.checks = guide.risks;
  guide.faq = [
    [`How much time should ${guide.name} receive?`, guide.duration],
    [`Can I combine ${guide.name} with another major chapter?`, guide.combine],
    ['What should I verify before leaving?', guide.verify]
  ];
  if (photoNote !== false) {
    guide.image.editNote = guide.image.license === 'CC BY-SA 3.0'
      ? 'Resized, display-cropped and converted to WebP; adapted version remains available under CC BY-SA 3.0.'
      : guide.image.license === 'CC BY-SA 4.0'
        ? 'Resized, display-cropped and converted to WebP; adapted version remains available under CC BY-SA 4.0.'
        : 'Resized, display-cropped and converted to WebP; no other material edits.';
  }
}

const ninhBinhLegacyMotifs = {
  'trang-an-boat-complex': 'submerged karst and managed boat route',
  'tam-coc-bich-dong': 'rice-season river and cliff pagoda',
  'hoa-lu-ancient-capital': 'dynastic valley and temple axis'
};
for (const guide of ninhBinh.guides) {
  if (ninhBinhUpdates[guide.slug]) continue;
  guide.kickerLabel = ninhBinhLegacyLabel;
  guide.sources ??= ninhBinhLegacySources;
  guide.relatedMotifOverrides = ninhBinhLegacyMotifs;
}

const tamCocGuide = ninhBinh.guides.find((guide) => guide.slug === 'tam-coc-bich-dong');
tamCocGuide.image.creator = 'Tycho (Shansov.net)';
tamCocGuide.image.licenseUrl = 'https://creativecommons.org/licenses/by-sa/3.0/';
