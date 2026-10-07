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
        image: image({ src: '/assets/images/vietnam-sapa-o-quy-ho.webp', alt: 'O Quy Ho mountain pass in the Hoang Lien range', source: 'https://commons.wikimedia.org/wiki/File:O_Quy_Ho_pass.jpg', label: 'O Quy Ho pass.jpg', creator: 'Kiếm Anh', license: 'CC BY-SA 4.0', editNote: 'Resized, display-cropped and converted to WebP; no other material edits. The adapted image remains available under CC BY-SA 4.0.' }),
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
  }
};

for (const guide of ninhBinh.guides) {
  const update = ninhBinhUpdates[guide.slug];
  if (!update) continue;
  Object.assign(guide, update);
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
  guide.image.editNote = guide.image.license === 'CC BY-SA 3.0'
    ? 'Resized, display-cropped and converted to WebP; adapted version remains available under CC BY-SA 3.0.'
    : guide.image.license === 'CC BY-SA 4.0'
      ? 'Resized, display-cropped and converted to WebP; adapted version remains available under CC BY-SA 4.0.'
      : 'Resized, display-cropped and converted to WebP; no other material edits.';
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
