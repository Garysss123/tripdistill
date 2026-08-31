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
        boundary: 'Do not merge wartime memory, revolutionary symbolism and imperial archaeology into one generic “old Hanoi” paragraph. Give each layer its own language and behavior.',
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
        image: image({ src: '/assets/images/vietnam-hanoi-west-lake.webp', alt: 'West Lake in Hanoi under an open sky', source: 'https://commons.wikimedia.org/wiki/File:Hanoi%2C_Vietnam%2C_West_Lake.jpg', label: 'Hanoi, Vietnam, West Lake.jpg', creator: 'Vyacheslav Argenberg', license: 'CC BY 4.0' }),
        summary: 'A slower lakeside chapter for West Lake, Truc Bach, pagodas, cafés and sunset without pretending the shoreline is one continuous promenade.',
        lead: 'West Lake changes Hanoi’s scale. Water, villas, temples and busy arterial roads alternate in a loose ring, so the useful plan chooses a few connected segments and lets the lake provide breathing room between them.',
        orientation: 'Use Thanh Nien as the visual hinge between West Lake and Truc Bach, then select a pagoda, a quiet shore section and one food or coffee stop. A map pin beside the lake does not guarantee a walkable waterfront entrance.',
        arrival: 'Reach the chosen segment by ride-hailing or taxi and save a second pickup point. Roads around the lakes are faster and wider than the historic core, while sidewalks can end abruptly.',
        sequence: 'Begin with daylight orientation, move through the pagoda or neighborhood stop, and reserve the exposed shoreline for a clear-weather sunset rather than a late-night walk.',
        boundary: 'Keep lakeside leisure distinct from religious space. A scenic water view does not grant permission to enter a courtyard, photograph worship or lean over private property.',
        stages: [
          ['Choose one shoreline', 'Pick a manageable segment with shade and a clear return rather than attempting the entire ring on foot.'],
          ['Cross the hinge carefully', 'Treat Thanh Nien and adjoining intersections as traffic infrastructure, not a casual pedestrian lane.'],
          ['Visit with restraint', 'Enter a pagoda or neighborhood landmark through the public route and follow local clothing, voice and camera expectations.'],
          ['Leave before darkness', 'Finish at a known restaurant or pickup point, especially when rain, poor lighting or heavy motorbike traffic reduces the edge’s comfort.']
        ],
        risks: [
          ['Broken pedestrian continuity', 'The lakeshore is a chain of segments rather than a guaranteed promenade. Check crossings and use a vehicle to bridge unsafe gaps.'],
          ['Water and darkness', 'Avoid unlit edges, unstable banks and improvised water access. Keep children away from the waterline after sunset.'],
          ['Weather shifts', 'Heat, thunderstorms and sudden rain can change an exposed lakeside plan quickly. Carry rain protection and a dry indoor alternative.']
        ],
        duration: 'Allow three to five hours for one focused lakeside segment; add time only when the return transfer is clear.',
        combine: 'Combine with the French Quarter for a contrast between water and colonial civic streets, not with a full Old Quarter walking marathon.',
        verify: 'Check rain and storm conditions, current venue hours, roadworks, the exact drop-off point and any temporary lakeside event controls.'
      },
      {
        slug: 'french-quarter-opera-house',
        name: 'French Quarter and Hanoi Opera House',
        motif: 'colonial facade to performance room',
        instrument: 'zine',
        image: image({ src: '/assets/images/vietnam-hanoi-french-quarter.webp', alt: 'Hanoi Opera House in the French Quarter', source: 'https://commons.wikimedia.org/wiki/File:Hanoi-opera_house.jpg', label: 'Hanoi-opera house.jpg', creator: 'Davit et Magalie', license: 'CC BY 2.0' }),
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
        image: image({ src: '/assets/images/vietnam-sapa-fansipan.webp', alt: 'Fansipan cable car above Sapa and the Hoang Lien mountains', source: 'https://commons.wikimedia.org/wiki/File:Fansipan_Cable_Car_and_Sa_Pa.jpg', label: 'Fansipan Cable Car and Sa Pa.jpg', creator: 'Christophe95', license: 'CC BY-SA 4.0' }),
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
        image: image({ src: '/assets/images/vietnam-sapa-muong-hoa.webp', alt: 'Terraced fields in Muong Hoa Valley near Lao Chai', source: 'https://commons.wikimedia.org/wiki/File:M%C6%B0%E1%BB%9Dng_Hoa_Valley_15.jpg', label: 'Mường Hoa Valley 15.jpg', creator: 'Christophe95', license: 'CC BY-SA 4.0' }),
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
        image: image({ src: '/assets/images/vietnam-sapa-o-quy-ho.webp', alt: 'O Quy Ho mountain pass in the Hoang Lien range', source: 'https://commons.wikimedia.org/wiki/File:O_Quy_Ho_pass.jpg', label: 'O Quy Ho pass.jpg', creator: 'Kiếm Anh', license: 'CC BY-SA 4.0' }),
        summary: 'A daylight road chapter linking O Quy Ho Pass with Silver Waterfall and Love Waterfall under mountain-road and weather constraints.',
        lead: 'The O Quy Ho corridor is a mountain journey before it is a collection of waterfalls. The road, fog, temperature and exposure are part of the experience, and a responsible plan gives the driver and weather more authority than the map pin.',
        orientation: 'Choose a pass viewpoint and one or two waterfall stops according to road conditions. The route crosses changing elevations and administrative boundaries, so do not promise identical weather at every stop.',
        arrival: 'Use a skilled local driver or a rider with mountain-road experience. Public transport is not a dependable point-to-point solution for every waterfall entrance.',
        sequence: 'Leave in daylight, take the pass while visibility is useful, visit the safest open waterfall route and turn back before fog, rain or low light raises the road risk.',
        boundary: 'Do not stand in traffic lanes, climb unmarked cliffs or enter closed spray zones. A viewpoint should remain a viewpoint, not a stunt location.',
        stages: [
          ['Check the mountain', 'Compare pass weather, rain, wind and road alerts with the group’s experience before setting off.'],
          ['Drive the exposed section', 'Use safe pull-offs only, keep the vehicle fully clear of the road and let the driver choose where stopping is appropriate.'],
          ['Choose the waterfall', 'Follow the current managed trail, pace wet steps and treat a closure as a valid endpoint rather than a challenge.'],
          ['Return before the margin', 'Begin the descent with daylight and fuel in reserve, especially when clouds are building over the pass.']
        ],
        risks: [
          ['Mountain traffic', 'Buses, trucks and motorcycles share narrow curves. Experienced driving and legal stopping points are essential.'],
          ['Falls and flash water', 'Waterfall rocks and channels become hazardous during rain. Do not cross barriers or stand below unstable slopes.'],
          ['Visibility loss', 'Fog can erase lane edges and viewpoints within minutes. Cancel or shorten the route when the driver or park staff advises it.']
        ],
        duration: 'Reserve a daylight half or full day depending on the chosen waterfall and road conditions.',
        combine: 'Combine with Fansipan only as separate weather windows; pairing both as a fixed same-day checklist creates a fragile plan.',
        verify: 'Check pass and waterfall closures, driver conditions, forecast, fuel, daylight, footwear and current entrance rules.'
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
    name: 'Ha Giang Karst Plateau',
    region: 'Northeast Vietnam',
    family: 'karst-roadbook',
    label: 'FRONTIER ROADS / KARST / VILLAGES',
    tagline: 'Take the loop slowly: every pass has a road, a community and a boundary.',
    hubIntro: 'Ha Giang is a road landscape organized around the Dong Van Karst Plateau UNESCO Global Geopark. Quan Ba, Yen Minh, Dong Van, Lung Cu, Ma Pi Leng, Meo Vac and Du Gia are not interchangeable viewpoints: they differ in road exposure, altitude, border sensitivity, market rhythm and community life. The safest editorial plan makes transport time visible and never rewards risky riding.',
    stay: 'Use Ha Giang City as a practical start, then choose overnight bases according to the actual road sequence. In smaller towns, verify fuel, cash, medical access, hot water and the ability to park or turn around before arrival.',
    transfer: 'The plateau is reached by long road transfer from Hanoi or another northern base. A local driver, legal tour or experienced rider is strongly preferable to an improvised solo loop; weather and landslides can change the route faster than a static map.',
    sources: [
      ['https://www.unesco.org/en/iggp/dong-van-karst-plateau-unesco-global-geopark', 'UNESCO — Dong Van Karst Plateau UNESCO Global Geopark'],
      ['https://www.vietnam.travel/places-to-go/northern-vietnam/ha-giang', 'Vietnam Tourism — Ha Giang'],
      ['https://www.vietnam.travel/things-to-do/ha-giang-loop-four-day-road-trip', 'Vietnam Tourism — Ha Giang Loop road trip'],
    ],
    guides: [
      {
        slug: 'quan-ba-heavens-gate',
        name: 'Quan Ba and Heaven’s Gate',
        motif: 'first pass into the geopark',
        instrument: 'compass',
        image: image({ src: '/assets/images/vietnam-ha-giang-quan-ba.webp', alt: 'Limestone valleys in Quan Ba District, Ha Giang', source: 'https://commons.wikimedia.org/wiki/File:Qu%E1%BA%A3n_B%E1%BA%A1%2C_Vietnam_-_2.jpg', label: 'Quản Bạ, Vietnam - 2.jpg', creator: 'Benjamin Smith', license: 'CC BY-SA 4.0' }),
        summary: 'The loop’s northern gateway, pairing Heaven’s Gate viewpoints, Quan Ba valleys and an honest introduction to karst-road travel.',
        lead: 'Quan Ba is where a northern road trip becomes a mountain route. The point is not to rush toward the famous pass names but to learn how elevation, blind curves, weather and village access change the traveler’s responsibilities.',
        orientation: 'Use Heaven’s Gate as the first landscape reading point, then connect one valley or community stop. Keep the road itself in the story, including fuel and daylight decisions.',
        arrival: 'Approach from Ha Giang City on the current permitted road with a skilled driver or legal tour. Pull-offs are limited and a scenic map pin may sit beside an active curve.',
        sequence: 'Leave with fuel and water, pause only at safe shoulders, read the valley from an official viewpoint and reach the overnight base before darkness.',
        boundary: 'Do not park on a blind bend or enter a farm to make a photograph. Scenic access is subordinate to residents, traffic and road safety.',
        stages: [
          ['Prepare the first climb', 'Check fuel, brakes, weather, helmets and the actual road plan before leaving Ha Giang City.'],
          ['Use Heaven’s Gate safely', 'Stop only where the driver can clear the carriageway, then read the karst valley without crossing barriers.'],
          ['Choose a community pause', 'Use an invited local stop or public market, asking before photographs and buying directly when possible.'],
          ['Finish before dark', 'Reach the base with daylight, food and cash in reserve; the plateau is not a place to discover a failed headlight.']
        ],
        risks: [
          ['Blind curves', 'Mountain traffic and sudden oncoming vehicles make roadside photography dangerous. Use legal pull-offs and keep moving when visibility is poor.'],
          ['Weather and rockfall', 'Fog, rain and loose rock can change a pass within minutes. Follow local closures and do not force the loop.'],
          ['Community thresholds', 'Ask permission before entering homes, farms or ceremonies, and do not turn residents into an unconsented backdrop.']
        ],
        duration: 'Allow one full road day from Ha Giang City, with extra margin for weather and stops.',
        combine: 'Combine naturally with Yen Minh as the next overnight leg; avoid adding Lung Cu or Ma Pi Leng to the same compressed day.',
        verify: 'Check the current road condition, weather, fuel points, driver or tour credentials, safe viewpoints and overnight confirmation.'
      },
      {
        slug: 'yen-minh-pine-forest',
        name: 'Yen Minh and the Pine Forest Route',
        motif: 'staging town and upland forest',
        instrument: 'roadbook',
        image: image({ src: '/assets/images/vietnam-ha-giang-yen-minh.webp', alt: 'Yen Minh town and surrounding mountains in Ha Giang', source: 'https://commons.wikimedia.org/wiki/File:Tt._Y%C3%AAn_Minh%2C_Y%C3%AAn_Minh%2C_H%C3%A0_Giang%2C_Vietnam_-_panoramio.jpg', label: 'Tt. Yên Minh, Yên Minh, Hà Giang, Vietnam - panoramio.jpg', creator: 'trungydang', license: 'CC BY 3.0' }),
        summary: 'A staging chapter for Yên Minh’s upland forest, road rhythm, supplies and overnight decisions between Quan Ba and Dong Van.',
        lead: 'Yen Minh is useful because it breaks the loop into a human day rather than a heroic distance claim. Use the pine-forest landscape and town services to teach preparation, not just to fill a card between more famous passes.',
        orientation: 'Treat Yên Minh as an overnight or supply base with a short forest or valley branch. The route should explain what is available and what is not before sending travelers deeper into the plateau.',
        arrival: 'Reach town in daylight on the current QL4C alignment, checking roadworks and fuel along the way. Rural detours may not have reliable signal or services.',
        sequence: 'Refuel and check the vehicle on arrival, take a short daylight landscape branch, then plan the next day to Dong Van without adding an unsafe night segment.',
        boundary: 'A pine forest or rural shoulder is not automatically public recreation land. Stay on established access and keep noise, litter and drones away from homes and livestock.',
        stages: [
          ['Make the town functional', 'Confirm lodging, food, cash, fuel and the next road section before heading to a viewpoint.'],
          ['Read the forest edge', 'Use a public road or marked access point to observe upland vegetation, fields and the settlement pattern.'],
          ['Prepare the next pass', 'Check brakes, lights, rain layers, water and the realistic daylight window to Dong Van.'],
          ['Keep the night simple', 'Eat, rest and protect the next day’s margin instead of chasing an unlit scenic detour.']
        ],
        risks: [
          ['Limited services', 'Fuel, cash, pharmacies and medical support are less predictable than in Hanoi or Sapa. Carry a buffer and do not run the tank low.'],
          ['Roadside stopping', 'A wide-looking shoulder may hide a curve, drainage or local access. Stop only where the driver confirms it is safe.'],
          ['Rural privacy', 'Do not fly drones, enter fields or photograph homes and residents without permission.']
        ],
        duration: 'Use one overnight and a short daylight branch; a longer forest walk needs local confirmation and additional time.',
        combine: 'Combine with Quan Ba on arrival or Dong Van on departure, preserving the town as a real recovery point.',
        verify: 'Check current roadworks, weather, fuel and cash availability, lodging access, daylight and the next day’s route margin.'
      },
      {
        slug: 'dong-van-old-quarter',
        name: 'Dong Van Old Quarter',
        motif: 'stone-town market memory',
        instrument: 'zine',
        image: image({ src: '/assets/images/vietnam-ha-giang-dong-van.webp', alt: 'Dong Van old town in the Dong Van Karst Plateau', source: 'https://commons.wikimedia.org/wiki/File:Dong_Van_old_town.jpg', label: 'Dong Van old town.jpg', creator: 'HuangWending18072009', license: 'CC0' }),
        summary: 'A compact heritage-town chapter for Dong Van’s preserved houses, market, stone streets and role as a plateau base.',
        lead: 'Dong Van Old Quarter is a place to pause between roads. Its preserved houses and market spaces are still part of a living town, so the useful guide explains how to walk, observe and stay without turning private life into a staged old-town scene.',
        orientation: 'Use the old quarter as a walkable evening or morning loop, then keep the larger geopark excursions separate. UNESCO describes a cluster of preserved houses dating from around 1890, but individual access is not guaranteed.',
        arrival: 'Park or get dropped at the current perimeter and walk the narrow streets. Market days and festivals can alter vehicle access and crowd density.',
        sequence: 'Arrive before the busiest period, read the square and façades, visit only public interiors, then leave time for a meal and a rested departure.',
        boundary: 'Do not enter courtyards, guest rooms or shops without invitation. The old quarter is both heritage and home.',
        stages: [
          ['Find the stone-town scale', 'Walk slowly from the market area into side lanes, noticing how architecture and commerce share a compact footprint.'],
          ['Choose one public interior', 'Use an officially open house, museum or cultural space for interpretation rather than peering into private rooms.'],
          ['Respect market work', 'Stand clear of deliveries and ask before photographing vendors, food preparation or residents.'],
          ['Protect the next road day', 'Finish early enough to rest, check the vehicle and leave Dong Van with daylight for the next pass.']
        ],
        risks: [
          ['Narrow traffic', 'Scooters, supplies and pedestrians use the same lanes. Do not stop at corners or walk backward into traffic.'],
          ['Private property', 'Historic appearance does not make a house public. Follow signs and invitations, not curiosity alone.'],
          ['Market crowding', 'Secure phones and bags, avoid blocking stalls and keep children away from livestock and moving carts.']
        ],
        duration: 'Allow a few hours, with an overnight base making the quiet morning or evening much more realistic.',
        combine: 'Combine with Lung Cu as a dedicated northern branch, or with the Mã Pí Lèng road on the following day.',
        verify: 'Check current old-quarter access, market or festival conditions, public interiors, lodging and next-day road weather.'
      },
      {
        slug: 'lung-cu-flag-tower',
        name: 'Lung Cu Flag Tower and Border Villages',
        motif: 'border landscape and civic symbol',
        instrument: 'atlas',
        image: image({ src: '/assets/images/vietnam-ha-giang-lung-cu.webp', alt: 'Lung Cu Flag Tower on Dragon Mountain', source: 'https://commons.wikimedia.org/wiki/File:C%E1%BB%99t_c%E1%BB%9D_L%C5%A9ng_C%C3%BA_-_H%C3%A0_Giang.JPG', label: 'Cột cờ Lũng Cú - Hà Giang.JPG', creator: 'Leminhel', license: 'Public domain' }),
        summary: 'A border-area day around Lung Cu Flag Tower, Thèn Pả, Lô Lô Chải and the highland villages beneath Dragon Mountain.',
        lead: 'Lung Cu carries symbolic weight as well as a wide landscape. A strong page makes the border setting, flag ritual, stairs, village privacy and security instructions visible instead of reducing the visit to a “northernmost selfie.”',
        orientation: 'Use the flag tower as the anchor and select one village or lake branch that is publicly accessible. Keep the border context explicit and avoid implying that every ridge or road is open for exploration.',
        arrival: 'Reach the area from Dong Van with a confirmed driver or tour and allow for the additional road distance. Current entry, vehicle and identification rules may differ by site or period.',
        sequence: 'Check the border-area notices, visit the tower respectfully, then walk or drive only to publicly accessible village spaces before returning in daylight.',
        boundary: 'Do not photograph sensitive facilities, cross signs, fly a drone or touch the flag. Community houses and fields remain private even when they are visually striking.',
        stages: [
          ['Confirm the border context', 'Carry identification as advised, read current signs and ask the driver or local authority where photography and movement are permitted.'],
          ['Climb with respect', 'Use the official route, take breaks on stairs and treat the flag and ceremony area as a civic symbol rather than a prop.'],
          ['Visit the village threshold', 'Choose a public path in Thèn Pả or Lô Lô Chải and ask before entering homes, courtyards or private fields.'],
          ['Return before the road darkens', 'Leave enough daylight for the Dong Van transfer and keep a weather fallback if the exposed ridge becomes unsafe.']
        ],
        risks: [
          ['Border sensitivity', 'Rules can change near sensitive facilities. Obey signs, guards and local instructions immediately.'],
          ['Stairs and exposure', 'The tower approach combines elevation, stairs, wind and sun. Carry water and avoid the climb during storms.'],
          ['Cultural privacy', 'Ask for portraits and home visits; do not treat Lo Lo or Hmong communities as a photo set.']
        ],
        duration: 'Reserve most of a day from Dong Van, including the return road and weather margin.',
        combine: 'Combine with Dong Van Old Quarter as a two-day base, not with Mã Pí Lèng and Meo Vac as a same-day checklist.',
        verify: 'Check current border-area access, identification advice, tower opening, road conditions, weather and photography restrictions.'
      },
      {
        slug: 'ma-pi-leng-nho-que',
        name: 'Ma Pi Leng Pass and Nho Que River',
        motif: 'exposed pass and deep canyon',
        instrument: 'contour',
        image: image({ src: '/assets/images/vietnam-ha-giang-ma-pi-leng.webp', alt: 'Ma Pi Leng Pass between Dong Van and Meo Vac', source: 'https://commons.wikimedia.org/wiki/File:Le_col_de_Ma_Pi_Leng_%28Dong_Van-Meo_Vac%29.jpg', label: 'Le col de Ma Pi Leng (Dong Van-Meo Vac).jpg', creator: 'Jaybeelarsay', license: 'CC BY-SA 3.0' }),
        summary: 'The signature pass-and-canyon chapter, connecting Ma Pi Leng viewpoints with a separately planned Nho Que River descent.',
        lead: 'Ma Pi Leng is spectacular precisely because the road is narrow, exposed and high above the Nho Que valley. The page should teach visitors to read the pass from safe pull-offs and to treat any river excursion as a separate managed transfer.',
        orientation: 'Separate the pass crest, marked viewpoints, Tu San Canyon perspective and Nho Que boat access. They may share a landscape but not a single easy parking or walking route.',
        arrival: 'Travel between Dong Van and Meo Vac with an experienced driver or legal tour. River access may require local transport and current water or weather approval.',
        sequence: 'Take the pass in clear daylight, stop only at safe viewpoints, check the river descent independently and return before fog, rain or fatigue affects the exposed road.',
        boundary: 'Never step into the traffic lane, cross a barrier or lean over an unprotected edge for a photograph. Do not swim or improvise a river landing.',
        stages: [
          ['Read the road first', 'Check wind, rain, visibility and the driver’s stopping plan before approaching the crest.'],
          ['Use the safe overlook', 'Stay behind current barriers, keep vehicles clear and let the canyon remain a landscape rather than a stunt platform.'],
          ['Decide on the river separately', 'Confirm the legal access point, boat operator, water conditions and return transfer before descending.'],
          ['Exit with daylight', 'Leave the canyon or river area with a generous road margin; do not continue the loop simply to preserve a planned photograph.']
        ],
        risks: [
          ['Cliff and traffic exposure', 'The pass carries active traffic beside steep drops. Experienced driving and legal viewpoints are non-negotiable.'],
          ['Rain and rockfall', 'Heavy weather can make both pass and river routes unsafe. Follow closures and turn back early.'],
          ['Water safety', 'Boat and shoreline conditions vary. Use a life jacket, follow the operator and never enter the river alone.']
        ],
        duration: 'Allow one daylight road segment; add a separate half day or more for an operating Nho Que boat transfer.',
        combine: 'Combine with Dong Van or Meo Vac as the road link, keeping the pass and river as distinct planning blocks.',
        verify: 'Check road and viewpoint closures, driver experience, weather, river operator status, life-jacket rules and daylight.'
      },
      {
        slug: 'meo-vac-du-gia',
        name: 'Meo Vac to Du Gia Southbound Link',
        motif: 'market finish and village recovery',
        instrument: 'signal',
        image: image({ src: '/assets/images/vietnam-ha-giang-du-gia.webp', alt: 'Mountain valley landscape around Du Gia in Ha Giang', source: 'https://commons.wikimedia.org/wiki/File:Du_Gi%C3%A0.jpg', label: 'Du Già.jpg', creator: 'NKSTTSSHNVN', license: 'CC BY-SA 4.0' }),
        summary: 'A deliberately multi-day southbound chapter joining Meo Vac’s highland market area with Du Gia’s valley, waterfalls and homestay rhythm.',
        lead: 'Meo Vac and Du Gia should not be sold as two nearby stops. They form a demanding southbound link whose value is the change from exposed karst road to a slower valley base, provided the page makes the distance, services and weather margin honest.',
        orientation: 'Use Meo Vac for market and plateau context, then treat Du Gia as a separate overnight recovery base. The exact road sequence should remain flexible when landslides or local closures intervene.',
        arrival: 'Leave Meo Vac with fuel, cash, water and a confirmed destination. Road conditions and signal coverage vary; a local driver or legal tour is preferable for the southbound section.',
        sequence: 'Observe Meo Vac in the morning, travel only in daylight, reach Du Gia with enough time for a quiet village or waterfall visit, and keep the next transfer defensive.',
        boundary: 'Do not enter farms, homes or bathing areas without invitation. Waterfalls and homestays need the same respect as heritage sites.',
        stages: [
          ['Close the plateau chapter', 'Use Meo Vac’s market or town as a supply and information point, not merely a fuel stop.'],
          ['Travel the southbound road', 'Keep the group together, follow the driver’s weather decisions and do not chase a detour after the daylight margin shrinks.'],
          ['Recover in Du Gia', 'Choose a public village path, hosted meal or approved waterfall access and let the valley’s slower rhythm replace the pass checklist.'],
          ['Prepare the exit', 'Confirm the next road, fuel, weather and onward transport before sleeping; do not assume a quick return to Hanoi or Sapa.']
        ],
        risks: [
          ['Long remote segment', 'Medical care, fuel and accommodation are limited between bases. Carry supplies and a clear emergency contact plan.'],
          ['Landslides and rain', 'Valley roads and waterfalls respond quickly to storms. Avoid night travel and follow local route changes.'],
          ['Homestay boundaries', 'Ask about rooms, meals, photography and bathing areas. Keep noise low and leave no waste in the valley.']
        ],
        duration: 'Plan at least two days and one overnight; never advertise Meo Vac and Du Gia as a guaranteed same-day loop.',
        combine: 'Combine with Ma Pi Leng as the northbound arrival or with a separate Ha Giang City exit day.',
        verify: 'Check the current administrative labels, road status, weather, fuel, accommodation, driver plan and onward transport.'
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
    hubIntro: 'Ha Long Bay and Cat Ba are one maritime karst landscape but not one interchangeable tour. Ha Long cruise routes, Bai Tu Long’s quieter islands, Sung Sot and Titov, Lan Ha Bay, Cat Ba National Park and Viet Hai each have different boarding points, boat rules, tides and conservation boundaries. Explain the management context and make every sea decision conditional on current official notices.',
    stay: 'Choose either a Ha Long port base or Cat Ba town according to the planned water route. Confirm the actual pier, transfer time, luggage policy and return option; “Ha Long” or “Cat Ba” on a booking does not identify the boarding point by itself.',
    transfer: 'Road, ferry, cable car and small-boat connections are subject to weather and operator changes. Build a land-based fallback and avoid scheduling a flight or long rail connection immediately after a sea excursion.',
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
        image: image({ src: '/assets/images/vietnam-ha-long-cruise.webp', alt: 'A cruise boat among the limestone islands of Ha Long Bay', source: 'https://commons.wikimedia.org/wiki/File:Ha_Long_bay.jpg', label: 'Ha Long bay.jpg', creator: 'Shyamal', license: 'CC BY-SA 4.0' }),
        summary: 'A decision guide for choosing a Ha Long day or overnight cruise while keeping the port, tender, weather and environmental rules visible.',
        lead: 'The classic cruise is a logistics product as much as a landscape experience. The useful page distinguishes port transfer, vessel, tender boat, cave landing and onboard activities so travelers know which parts can change with sea state.',
        orientation: 'Compare day and overnight patterns by boarding time, route density, cabin return and land-transfer burden rather than by a generic list of islands.',
        arrival: 'Use the operator’s confirmed port, check-in window and luggage instructions. Do not assume a Hanoi hotel transfer goes to the same pier as another cruise brand.',
        sequence: 'Confirm land transfer, board early, follow the crew’s safety briefing, choose one or two activities and keep the final disembarkation buffer intact.',
        boundary: 'Do not swim, kayak, feed wildlife or step ashore outside the managed route. The bay is a protected landscape and a working marine environment.',
        stages: [
          ['Solve the port', 'Save the pier name, check-in time, vehicle contact and weather fallback before leaving Hanoi or the hotel.'],
          ['Read the vessel', 'Understand cabin, tender, meal and activity inclusions instead of assuming every boat offers the same experience.'],
          ['Use the water responsibly', 'Wear required safety equipment, remain in designated areas and keep plastic, food and noise under control.'],
          ['Land with margin', 'Plan the return transfer defensively and avoid a same-evening connection that depends on a perfectly punctual disembarkation.']
        ],
        risks: [
          ['Sea-state changes', 'Wind, storms and management decisions can alter routes or cancel activities. A ticket is not a guarantee of every stop.'],
          ['Tender transfers', 'Small-boat transfers need stable footing and attention, especially for children and older travelers. Follow crew directions.'],
          ['Environmental harm', 'Do not litter, collect shells, touch formations or feed animals. Keep the protected seascape more intact than you found it.']
        ],
        duration: 'Use one full day for a day cruise or one night for a less compressed overnight experience.',
        combine: 'Combine with Ha Long city only as a land buffer before or after the boat; pair Cat Ba as a separate base when the itinerary needs more island time.',
        verify: 'Check current port, vessel, route, weather cancellation policy, safety equipment, meal needs and final transfer.'
      },
      {
        slug: 'bai-tu-long',
        name: 'Bai Tu Long Bay',
        motif: 'quieter archipelago and carrying capacity',
        instrument: 'compass',
        image: image({ src: '/assets/images/vietnam-bai-tu-long.webp', alt: 'Satellite view of the islands and waters of Bai Tu Long Bay', source: 'https://commons.wikimedia.org/wiki/File:Bai_Tu_Long_Bay.jpeg', label: 'Bai Tu Long Bay.jpeg', creator: 'NASA Earth Observatory images by Joshua Stevens using USGS Landsat data', license: 'Public domain' }),
        summary: 'A lower-density bay chapter for comparing Bai Tu Long routes, remote islands and community-scale marine travel with Ha Long’s core.',
        lead: 'Bai Tu Long can offer a quieter reading of the same drowned-karst system, but “quiet” is not a promise of unrestricted access. Routes, permits, vessels and community landings are controlled by current management and weather.',
        orientation: 'Use the bay as a route-selection problem: fewer departures, longer water exposure and more sensitive island environments. Choose a verified itinerary instead of improvising a private boat plan.',
        arrival: 'Confirm the operating port and transfer because Bai Tu Long departures may not use the same harbor as core Ha Long cruises. Leave extra time for weather or traffic.',
        sequence: 'Board with supplies and a clear return plan, follow the approved island and water sequence, and keep shore visits small, quiet and brief.',
        boundary: 'Do not collect shells or coral, enter private fishing areas or encourage operators to stop in unapproved coves for a photograph.',
        stages: [
          ['Compare the route', 'Ask what makes the itinerary different—shoreline, village, cave, conservation or simply fewer boats—and record the real boarding port.'],
          ['Board for distance', 'Carry water, sun and motion-sickness support because remote routes can spend longer away from land services.'],
          ['Keep island contact light', 'Stay on public paths, follow community instructions and do not disturb aquaculture, fishing gear or wildlife.'],
          ['Return defensively', 'Keep a shore-day fallback and do not connect the final boat to an inflexible evening departure.']
        ],
        risks: [
          ['Sparse services', 'Remote water routes have fewer medical, fuel and communication options. Choose a reputable operator and share the route with someone ashore.'],
          ['Weather exposure', 'Open water and small islands amplify wind and rain. Follow the captain’s route decision without negotiation.'],
          ['Community disruption', 'Fishing and aquaculture are livelihoods. Keep groups small, do not touch gear and ask before photographing workers.']
        ],
        duration: 'Reserve a full day or overnight depending on the confirmed route; allow more time than a core-bay comparison suggests.',
        combine: 'Combine with Ha Long core only when the two routes answer different landscape questions; otherwise choose one bay and experience it properly.',
        verify: 'Check current approved itinerary, departure port, permits, weather, operator credentials, emergency contact and marine rules.'
      },
      {
        slug: 'sung-sot-titov',
        name: 'Sung Sot Cave and Titov Island',
        motif: 'cave chamber and island climb',
        instrument: 'fold',
        image: image({ src: '/assets/images/vietnam-sung-sot.webp', alt: 'A large chamber inside Sung Sot Cave in Ha Long Bay', source: 'https://commons.wikimedia.org/wiki/File:A_large_cave_inside_the_Sung_Sot_cave_is_brightly_flood_lit_%2831489274102%29.jpg', label: 'A large cave inside the Sung Sot cave is brightly flood lit (31489274102).jpg', creator: 'shankar s.', license: 'CC BY 2.0' }),
        summary: 'A classic cave-and-viewpoint chapter combining Sung Sot’s stair approach with Titov Island’s managed shore and climb.',
        lead: 'This route concentrates the bay’s most recognizable transitions: tender boat, steep cave path, crowded chamber and a separate island viewpoint. Show the physical sequence clearly so visitors can choose it for the right reasons.',
        orientation: 'Treat Sung Sot and Titov as two exertion profiles. The cave requires stairs and crowd navigation; the island adds beach and uphill exposure that may not suit every traveler.',
        arrival: 'Reach both sites by the operating cruise or tender route. Landing order, time ashore and access may change with the vessel and current management.',
        sequence: 'Wear secure shoes, take the cave stairs slowly, follow the one-way flow and swim only in a currently designated area if the crew permits it.',
        boundary: 'Do not touch formations, climb beyond the trail or use the island as an unsupervised swimming launch.',
        stages: [
          ['Transfer to shore', 'Use the tender carefully, keep life-jacket instructions visible and be ready for wet or uneven landing surfaces.'],
          ['Climb the cave path', 'Pace the stairs, keep the group together and let other visitors pass without stopping at the narrowest points.'],
          ['Read the chamber', 'Observe scale, lighting and geology without touching rock or treating a managed cave as a private set.'],
          ['Choose the island effort', 'Continue to Titov’s beach or viewpoint only when time, heat, footwear and sea conditions support it.']
        ],
        risks: [
          ['Steep stairs', 'The cave entrance and island viewpoint use uneven climbs. Use handrails and turn back before fatigue compromises footing.'],
          ['Crowd bottlenecks', 'Do not stop at landings or cave mouths; keep cameras and bags close in the one-way flow.'],
          ['Water conditions', 'Swimming and tender operations depend on current management and sea state. Follow crew and lifeguard directions.']
        ],
        duration: 'Use the time allocated by the confirmed cruise; a comfortable visit needs more than a quick photo stop.',
        combine: 'Combine with a core cruise route only when those stops are genuinely included; do not promise Sung Sot and Titov independently without a boat plan.',
        verify: 'Check current cruise route, cave and island access, stairs, tide, swimming rules, footwear and weather.'
      },
      {
        slug: 'lan-ha-town',
        name: 'Cat Ba Town and Lan Ha Bay',
        motif: 'island base and sheltered water',
        instrument: 'ribbon',
        image: image({ src: '/assets/images/vietnam-lan-ha.webp', alt: 'Limestone islands seen from a boat in Lan Ha Bay', source: 'https://commons.wikimedia.org/wiki/File:Lan_Ha_Bay_05.jpg', label: 'Lan Ha Bay 05.jpg', creator: 'Christophe95', license: 'CC BY-SA 4.0' }),
        summary: 'An island-base chapter for Cat Ba town, Lan Ha Bay kayaking, beaches and the practical chain of ferry, cable-car and small-boat connections.',
        lead: 'Cat Ba town is the useful base for seeing Lan Ha slowly, but the water route still belongs to tide, wind and operator competence. Build the day around one protected bay experience rather than stacking every beach and cave on the island.',
        orientation: 'Use Cat Ba town for food, lodging and transport; use Lan Ha for a guided water route. The two should be written as base and excursion, not as one continuous shoreline.',
        arrival: 'Confirm whether the approach uses ferry, bridge, cable car or road transfer and where luggage is handed over. Schedules and routes can change seasonally.',
        sequence: 'Settle in, check the marine forecast, kayak or boat in a protected route, and keep swimming or beach time conditional on flags and tide.',
        boundary: 'Use a life jacket and authorized operator, avoid coral or marine-lake damage and never paddle alone beyond the group’s agreed water boundary.',
        stages: [
          ['Make the island transfer', 'Record the exact terminal, final vehicle and town lodging pin before crossing to Cat Ba.'],
          ['Choose sheltered water', 'Select a route matched to wind, tide, skill and equipment rather than chasing the most remote-looking cove.'],
          ['Land lightly', 'Keep beaches and floating communities clean, ask before photographing residents and do not climb private fish-farm structures.'],
          ['Return with tide margin', 'Leave enough time for the small boat, road or cable-car return and a dry change before dinner.']
        ],
        risks: [
          ['Tide and wind', 'Sheltered water can change quickly at an opening or channel. Follow the guide and abandon a route when conditions worsen.'],
          ['Transfer chain', 'Ferry, cable-car and boat connections may not align. Keep a land fallback and never assume the last departure.'],
          ['Water activity', 'PFDs, swimming boundaries and operator credentials matter more than a scenic photograph. Do not solo-kayak or dive from rocks.']
        ],
        duration: 'Allow at least two nights for Cat Ba town and one full Lan Ha water day.',
        combine: 'Combine with Cat Ba National Park or Viet Hai on separate days, not as a rushed add-on after an all-day kayak route.',
        verify: 'Check ferry or cable-car status, marine forecast, tide, operator equipment, swimming flags and the return connection.'
      },
      {
        slug: 'national-park',
        name: 'Cat Ba National Park',
        motif: 'island forest and langur protection',
        instrument: 'transect',
        image: image({ src: '/assets/images/vietnam-cat-ba-park.webp', alt: 'Forest landscape in Cat Ba National Park', source: 'https://commons.wikimedia.org/wiki/File:Cat_Ba_National_Park_267.JPG', label: 'Cat Ba National Park 267.JPG', creator: 'Schwede66', license: 'CC BY-SA 3.0' }),
        summary: 'A protected-forest chapter covering Cat Ba National Park trails, caves, viewpoints and the conservation responsibility around the island’s langur habitat.',
        lead: 'Cat Ba’s forest is the landward half of the same World Heritage landscape as the bay. The route should make heat, steps, guide requirements and wildlife ethics as prominent as the view.',
        orientation: 'Choose one marked trail or cave combination from the current park map. Do not imply that every interior path is open or appropriate without a guide.',
        arrival: 'Reach the current park entrance by island road and confirm ticket, guide and vehicle arrangements. Weather and maintenance can close individual trails.',
        sequence: 'Start early, follow the marked forest route, keep the group quiet near wildlife habitat and exit before heat, storms or low light.',
        boundary: 'No feeding, touching, collecting plants, leaving the path or flying a drone without permission. A rare langur sighting is never a license to pursue it.',
        stages: [
          ['Choose a legal trail', 'Use the park’s current information and select a route whose length and stairs suit the group.'],
          ['Read the forest', 'Notice limestone, canopy, caves and island ecology without stripping leaves, moving rocks or amplifying sound.'],
          ['Watch wildlife ethically', 'Keep distance, avoid calls or baiting and let animals disappear rather than following them off trail.'],
          ['Exit before exposure', 'Carry water, rain protection and a clear return time; forest heat and storms can make a late exit unsafe.']
        ],
        risks: [
          ['Heat and slippery trail', 'Tropical humidity, steps and wet roots increase fatigue and falls. Use proper shoes and a conservative turnaround.'],
          ['Wildlife disturbance', 'Do not feed, touch, chase or use flash near animals. Report unusual encounters to park staff.'],
          ['Access changes', 'Park zones, guides, tickets and trail closures can change after weather or conservation work. Check the official notice.']
        ],
        duration: 'Allow a half or full day depending on the current trail; do not combine several long forest routes by assumption.',
        combine: 'Combine with Viet Hai when a park trail explicitly connects them and the group has daylight; otherwise give each a separate day.',
        verify: 'Check park opening, current trail map, guide and ticket rules, weather, footwear, water and wildlife guidance.'
      },
      {
        slug: 'viet-hai-cai-beo',
        name: 'Viet Hai and Cai Beo',
        motif: 'village road and marine livelihood',
        instrument: 'field',
        image: image({ src: '/assets/images/vietnam-viet-hai.webp', alt: 'Rice fields in Viet Hai on Cat Ba Island', source: 'https://commons.wikimedia.org/wiki/File:Vi%E1%BB%87t_H%E1%BA%A3i%2C_C%C3%A1t_B%C3%A0_Island%2C_Vietnam%2C_20240131_1211_4613.jpg', label: 'Việt Hải, Cát Bà Island, Vietnam, 20240131 1211 4613.jpg', creator: 'Jakub Hałun', license: 'CC BY 4.0' }),
        summary: 'A village-and-water chapter for Viet Hai’s rural lanes, cycling approach and Cai Beo fishing heritage within the Cat Ba island system.',
        lead: 'Viet Hai gives Cat Ba a slower land rhythm, while Cai Beo points back to long-standing marine settlement. Keep both as living communities: the route is about access, agriculture and fishing culture, not a promise of untouched isolation.',
        orientation: 'Choose either a park-linked cycling or walking approach to Viet Hai or a current Cai Beo marine visit. Tide and boat availability make them separate planning questions.',
        arrival: 'Confirm whether the route begins by boat, park road, bicycle or guided walk. Carry water and expect limited services once away from Cat Ba town.',
        sequence: 'Reach the village in daylight, use a hosted meal or public road, keep farm and aquaculture boundaries clear and return before the final boat or road transfer.',
        boundary: 'Do not enter homes, rice plots, fish farms or boats without invitation. Ask before photographing residents and workers.',
        stages: [
          ['Choose the approach', 'Match boat, bicycle or foot access to tide, heat, fitness and the current park route.'],
          ['Read village work', 'Observe fields, lanes and homes from public space, keeping the group quiet and vehicles out of narrow passages.'],
          ['Connect to the water', 'Use an approved Cai Beo or Lan Ha interpretation route and let fishers decide where visitors may stand or photograph.'],
          ['Return before the cutoff', 'Confirm the last boat or vehicle, carry waste out and do not assume a late island transfer is available.']
        ],
        risks: [
          ['Tide and boat timing', 'A missed small boat can strand a group without a simple taxi alternative. Record the exact return time and operator contact.'],
          ['Heat and cycling', 'Island roads expose visitors to sun, hills and limited water. Use a conservative pace and helmet where cycling is permitted.'],
          ['Working community', 'Do not block farm lanes, touch gear or photograph private work without consent.']
        ],
        duration: 'Allow a full day for Viet Hai; add Cai Beo as a separate marine chapter when the boat route is confirmed.',
        combine: 'Combine with Cat Ba National Park only through a current connected route and sufficient daylight.',
        verify: 'Check tide, boat or park access, bicycle condition, village permissions, water supply and the final return transfer.'
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
    hubIntro: 'Phong Nha–Ke Bang is a cave and forest system rather than a single attraction. The Son River and Phong Nha Cave, Paradise and Tien Son, Chay River–Dark Cave, Nuoc Mooc, Hang En and Son Doong range from managed day visits to tightly controlled multi-day expeditions. The 2025 UNESCO transboundary extension makes conservation and carrying capacity central to every page.',
    stay: 'Use Phong Nha village for accessible caves and day programs, or arrange an official expedition base through the authorized operator. Dong Hoi is a transfer gateway, not a substitute for checking the early briefing or pickup location.',
    transfer: 'Rail, airport, bus and road transfers converge through Dong Hoi and Phong Nha with different timing. Adventure tours may require arrival the previous day and a mandatory safety briefing; never place a cave expedition directly after an uncertain arrival.',
    sources: [
      ['https://whc.unesco.org/en/list/951/', 'UNESCO — Phong Nha–Ke Bang and Hin Nam No National Parks'],
      ['https://www.phongnhakebang.vn/home', 'Phong Nha–Ke Bang National Park — official site'],
      ['https://phongnhatourism.com.vn/', 'Phong Nha–Ke Bang Tourism Center — official visitor routes'],
      ['https://oxalisadventure.com/safety/', 'Oxalis Adventure — official cave-tour safety information']
    ],
    guides: [
      {
        slug: 'son-river-phong-nha-cave',
        name: 'Son River and Phong Nha Cave',
        motif: 'river entrance and accessible cave',
        instrument: 'ribbon',
        image: image({ src: '/assets/images/vietnam-phong-nha-son-river.webp', alt: 'Son River and karst mountains at Phong Nha-Ke Bang', source: 'https://commons.wikimedia.org/wiki/File:Phongnhakebang1.jpg', label: 'Phongnhakebang1.jpg', creator: 'Genghiskhanviet', license: 'Public domain' }),
        summary: 'The accessible gateway chapter for a Son River boat approach to Phong Nha Cave and the surrounding village base.',
        lead: 'Phong Nha Cave is the right starting point for understanding the region’s water-and-karst system. The boat approach, cave lighting, river level and official visitor flow all matter more than an exaggerated claim about cave size.',
        orientation: 'Use Phong Nha village, the Son River pier and the cave entrance as one managed chain. Keep Tien Son and remote expeditions as separate decisions.',
        arrival: 'Reach the official tourism center or pier with current ticket and boat information. Water level and weather can affect departures.',
        sequence: 'Board safely, read the river approach, stay with the managed cave route and finish with a village or conservation context stop.',
        boundary: 'Do not stand in boats, touch formations or use flash where prohibited. The cave is a protected environment and the river is an active transport route.',
        stages: [
          ['Find the village base', 'Confirm the pier, ticket, boat capacity and return point before entering the river system.'],
          ['Read the Son River', 'Observe karst, settlement and the changing cave entrance while remaining seated and following crew directions.'],
          ['Enter the public cave', 'Use the lit route, protect formations and let the official interpretation carry the geology.'],
          ['Close with context', 'Choose a conservation, village or river-side stop and keep the rest of the day low-intensity.']
        ],
        risks: [
          ['Water level', 'Rain and river conditions can change boat operations. Check the current notice rather than assuming a fixed departure.'],
          ['Wet surfaces', 'Piers and cave floors can be slippery. Use secure footwear and handrails.'],
          ['Crowd flow', 'Do not stop at narrow passages or block boat landings; keep the group together.']
        ],
        duration: 'Allow a half day for the cave and river; a full day allows a slower village or conservation add-on.',
        combine: 'Combine with Paradise or Tien Son only when transport and opening windows are confirmed; keep adventure tours separate.',
        verify: 'Check official ticket and boat status, water and weather, cave route, photography rules and return transport.'
      },
      {
        slug: 'paradise-tien-son-caves',
        name: 'Paradise and Tien Son Caves',
        motif: 'dry cave chambers and stair threshold',
        instrument: 'section',
        image: image({ src: '/assets/images/vietnam-paradise-cave.webp', alt: 'Illuminated formations inside Paradise Cave at Phong Nha-Ke Bang', source: 'https://commons.wikimedia.org/wiki/File:Paradise_cave.JPG', label: 'Paradise cave.JPG', creator: 'Tycho', license: 'CC BY-SA 3.0' }),
        summary: 'A dry-cave comparison chapter for Paradise Cave and Tien Son, with separate entrances, stairs and managed visitor routes.',
        lead: 'These caves provide a gentler introduction to Phong Nha’s underground architecture, but they still require stairs, walking and respect for formations. Explain the difference between a long public boardwalk, a mountain approach and a boat cave.',
        orientation: 'Choose one primary cave and add the second only after checking transport, stairs and opening windows. Do not treat every cave entrance as walkable from the same parking area.',
        arrival: 'Use the official tourism center or park approach and confirm the current shuttle, stairs and ticket combination. Heat outside can make the climb more demanding than the cave suggests.',
        sequence: 'Visit the cave with the tighter access window first, take a shaded recovery break and add the second only if the group remains comfortable.',
        boundary: 'Stay on boardwalks, do not touch formations or carve surfaces, and follow lighting and photography rules.',
        stages: [
          ['Compare the effort', 'Read the current route length, stairs and transport before choosing one or both caves.'],
          ['Approach slowly', 'Use shade, water and handrails on the entrance climb, especially after a hot road transfer.'],
          ['Read the dry chamber', 'Observe scale, texture and lighting without reaching across barriers or using a tripod where it blocks flow.'],
          ['Exit with energy', 'Leave time for the descent, vehicle transfer and a meal; do not convert a comfortable cave day into a forced expedition.']
        ],
        risks: [
          ['Stairs and heat', 'The external climb can be strenuous in tropical heat. Schedule breaks and avoid promises of easy access.'],
          ['Formation damage', 'Even light touching leaves oils and physical damage. Keep hands and equipment behind barriers.'],
          ['Opening changes', 'Park maintenance and weather can alter cave access. Verify each cave independently.']
        ],
        duration: 'Allow a half day for one cave or a full day for both with transfer and recovery time.',
        combine: 'Combine with Son River and Phong Nha Cave as an accessible cave survey, not with Hang En or Son Doong on the same day.',
        verify: 'Check cave opening, ticket combination, shuttle, stairs, weather, footwear and photography rules.'
      },
      {
        slug: 'chay-river-dark-cave',
        name: 'Chay River and Dark Cave',
        motif: 'river adventure and wet cave',
        instrument: 'signal',
        image: image({ src: '/assets/images/vietnam-chay-dark-cave.webp', alt: 'River and limestone landscape in Phong Nha-Ke Bang', source: 'https://commons.wikimedia.org/wiki/File:Phongnhakebang6.jpg', label: 'Phongnhakebang6.jpg', creator: 'Genghiskhanviet', license: 'Public domain' }),
        summary: 'A supervised wet-adventure chapter combining Chay River, zipline, kayak or swim sections and Dark Cave equipment rules.',
        lead: 'Chay River–Dark Cave is a managed activity program, not a self-guided cave walk. The right guide explains equipment, water level, age or body-size limits and what happens when weather changes the program.',
        orientation: 'Separate the river approach, zipline or kayak section, mud or swim activity and cave interior. Not every component operates under every condition.',
        arrival: 'Use the official tourism center or authorized operator entrance with the required briefing and equipment. Leave valuables and non-waterproof electronics behind.',
        sequence: 'Complete the safety briefing, wear every required device, follow the guide through the water route and stop immediately when instructed.',
        boundary: 'No independent swimming, diving, rock climbing or gear changes. Keep the river and cave free from sunscreen waste, plastic and noise.',
        stages: [
          ['Attend the briefing', 'Understand the water route, equipment, age or fitness rules and the weather cancellation process before signing in.'],
          ['Use the gear', 'Check helmet, life jacket, harness and footwear with staff; do not loosen equipment for a photograph.'],
          ['Move through the wet cave', 'Stay behind the guide, keep hands and feet controlled and follow the group’s spacing in mud or water.'],
          ['Dry out responsibly', 'Rinse only where permitted, collect personal items and leave the activity area without carrying sediment or waste into the river.']
        ],
        risks: [
          ['Water level', 'Rain can raise a river or close a cave route rapidly. Operator and park decisions override a prebooked plan.'],
          ['Slippery activity', 'Mud, zipline landings and cave rock require full equipment and guide control. Do not improvise a shortcut.'],
          ['Fitness and health', 'Swimming, enclosed spaces and heat affect participants differently. Declare limitations and stop before exhaustion.']
        ],
        duration: 'Allow a half day for the managed program and recovery; do not schedule another physically demanding cave afterward.',
        combine: 'Combine with a gentle village or river meal, not with Hang En or Son Doong.',
        verify: 'Check authorized operator, age and fitness rules, weather, water level, equipment, cancellation terms and transport.'
      },
      {
        slug: 'nuoc-mooc-forest-springs',
        name: 'Nuoc Mooc Forest Springs',
        motif: 'forest boardwalk and clear stream',
        instrument: 'field',
        image: image({ src: '/assets/images/vietnam-nuoc-mooc.webp', alt: 'Lush forest and limestone landscape in Phong Nha-Ke Bang', source: 'https://commons.wikimedia.org/wiki/File:Phongnhakebang11.jpg', label: 'Phongnhakebang11.jpg', creator: 'Genghiskhanviet', license: 'Public domain' }),
        summary: 'A low-intensity forest and spring chapter for boardwalks, turquoise water, picnic planning and protected-park conduct.',
        lead: 'Nuoc Mooc is a good counterweight to cave adrenaline. Its value comes from water clarity, forest shade and a carefully managed visitor edge, so the page should describe where swimming or picnicking is allowed instead of implying open access everywhere.',
        orientation: 'Use the current tourism-center route and distinguish the boardwalk, stream, picnic area and designated water sections.',
        arrival: 'Travel by road from Phong Nha and confirm the current entrance, parking, lockers and water-area status. Rain can change the stream and close activities.',
        sequence: 'Walk the forest first, choose only a designated water activity, keep food and waste controlled and leave before storms or the final road becomes dark.',
        boundary: 'No soap, litter, fishing, plant collection or swimming outside designated areas. Keep voices low and do not climb wet banks.',
        stages: [
          ['Check the spring', 'Confirm water quality, current access, weather and designated activities before packing a swim or picnic plan.'],
          ['Read the boardwalk', 'Use the marked route to observe forest, karst and stream ecology without stepping into fragile banks.'],
          ['Enter water only where allowed', 'Use provided safety equipment and follow staff instructions about depth, current and group limits.'],
          ['Leave the forest clean', 'Pack waste out, dry equipment responsibly and return to Phong Nha with road and weather margin.']
        ],
        risks: [
          ['Current and water quality', 'Rain and upstream conditions alter clear water and swimming safety. Check the day’s notice.'],
          ['Wet boardwalk', 'Wood, roots and stream edges are slippery. Use grip shoes and do not climb over rails.'],
          ['Visitor pressure', 'Peak days can overwhelm quiet areas. Keep groups small and respect designated capacity.']
        ],
        duration: 'Allow a half day, or most of a day with a relaxed picnic and boardwalk rhythm.',
        combine: 'Combine with Paradise Cave for a balanced cave-and-forest day only when transport and heat allow; keep adventure routes separate.',
        verify: 'Check current opening, water-area rules, weather, road transfer, lockers, food policy and safety notices.'
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
