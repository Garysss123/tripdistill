import { defineVietnamCluster, image } from './vietnam-guide-builder.mjs';

const hue = defineVietnamCluster({
  slug: 'hue',
  name: 'Hue',
  region: 'North Central Coast',
  family: 'violet-rain-archive',
  label: 'Citadel, court gardens & river · Central Vietnam',
  tagline: 'Choose between palace walls, tomb gardens and a living pagoda.',
  hubIntro: 'Hue was Vietnam’s capital under the Nguyen dynasty from 1802 to 1945. Its monuments make more sense as a river-shaped city than a monument checklist: the walled Citadel faces the south-bank civic streets, while Thien Mu and the royal tombs sit farther along the Perfume River. Give the capital, the tomb landscapes and active religious places their own pace; repairs, wartime losses and seasonal flooding are part of what visitors see.',
  stay: 'The south bank is a practical base for hotels, evening food and the Le Loi riverside; cross to the north-bank Citadel early, when the long courtyards are easier to walk before midday heat.',
  transfer: 'Walk or take a short local ride around the central riverfront. Thien Mu lies upstream northwest of the Citadel; the tombs are farther out and dispersed. Use a driver or taxi with a clear return plan, or book a river trip only after confirming the operator and boarding point.',
  hubCss: '/css/vietnam-hue.css?v=20261008-3',
  reviewDate: '8 October 2026',
  isoDate: '2026-10-08',
  presentation: {
    conditionsKicker: 'A river city, several clocks',
    conditionsTitle: 'Keep the court, tombs and worship on separate terms.',
    conditionsLead: 'The central Citadel is a long walking visit. Tombs require road time outside town. Thien Mu is still a place of worship, and any boat approach depends on current service and river conditions.',
    faqKicker: 'Hue, planned by place',
    faqTitle: 'Plan by landscape, not by monument count.',
  },
  routeModelHeading: 'Walk the capital, then follow the river outward.',
  routeModelLead: 'Start inside the walled city. Give the upstream pagoda and outlying tombs separate half-day or full-day windows, with a return plan that still works if rain slows the roads or boats.',
  sources: [
    ['https://whc.unesco.org/en/list/678', 'UNESCO — Complex of Hué Monuments'],
    ['https://eticket.hueworldheritage.org.vn/', 'Hue Monuments Conservation Centre — official e-ticket portal'],
    ['https://www.vietnam.travel/places-to-go/central-vietnam/hue', 'Vietnam Tourism — Hue transport, weather and official destination overview'],
    ['https://hue.gov.vn/en-us/Home/Tourism/Details/tb/Thanh-Toan-tile-roofed-bridge-the-national-art-and-architecture-relic-598030', 'Hue City Portal — Thanh Toan tile-roofed bridge'],
    ['https://nbca.gov.vn/vuon-quoc-gia-bach-ma/', 'National Biodiversity Conservation — Bach Ma National Park']
  ],
  hubSources: [
    ['https://whc.unesco.org/en/list/678', 'UNESCO — Complex of Hué Monuments and its river-shaped capital plan'],
    ['https://eticket.hueworldheritage.org.vn/', 'Hue Monuments Conservation Centre — official e-ticket portal'],
    ['https://www.vietnam.travel/places-to-go/central-vietnam/hue', 'Vietnam Tourism — Hue food, seasons and transport'],
    ['https://www.vietnam.travel/things-to-do/an-inside-guide-hue-tombs', 'Vietnam Tourism — distinct landscapes and history of the royal tombs'],
    ['https://www.vietnam.travel/things-to-do/how-eat-local-hue', 'Vietnam Tourism — Hue dishes and food traditions']
  ],
  guides: [
    {
      slug: 'imperial-city-citadel',
      name: 'Imperial City & Citadel',
      motif: 'A capital within walls',
      instrument: 'axis',
      countryCss: '/css/vietnam-hue.css?v=20261008-3',
      reviewDate: '8 October 2026',
      isoDate: '2026-10-08',
      sources: [
        ['https://whc.unesco.org/en/list/678', 'UNESCO — Complex of Hué Monuments and the Citadel precincts'],
        ['https://eticket.hueworldheritage.org.vn/', 'Hue Monuments Conservation Centre — current tickets and access'],
        ['https://www.vietnam.travel/places-to-go/central-vietnam/hue', 'Vietnam Tourism — Hue seasons and transport'],
        ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — official warnings']
      ],
      presentation: {
        readingTitle: 'A defended capital, not a single palace.',
        routeTitle: 'Read the city from gate to inner court.',
        checksLabel: 'Before you enter',
        checksTitle: 'Check the gate, heat and open areas.',
        checksLead: 'Use the Hue Monuments Conservation Centre’s current ticket and access information. Restoration and weather can change which buildings are open.',
        boundaryTitle: 'Give old and repaired fabric room',
        faqLabel: 'Citadel visit notes',
        faqTitle: 'Timing, entrance and walking route'
      },
      image: image({
        src: '/assets/images/vietnam-hue-meridian-gate.webp',
        alt: 'Meridian Gate at Hue Imperial City',
        source: 'https://commons.wikimedia.org/wiki/File:Vietnam,_Hue,_Imperial_City_of_Hue,_Meridian_Gate.jpg',
        label: 'Meridian Gate, Hue Imperial City',
        creator: 'Vyacheslav Argenberg',
        license: 'CC BY 4.0'
      }),
      summary: 'Trace Hue’s walled royal capital from the moat and Meridian Gate through court halls to the surviving foundations and repaired palace precincts.',
      lead: 'The Nguyen capital established in 1802 was planned around the Perfume River, with defensive walls enclosing administrative, military and royal quarters. Inside the larger Citadel, the Imperial City and the Forbidden Purple City formed nested precincts. Visitors now move between restored halls, open foundations and war-damaged traces; those differences are part of the record, not a reason to rush past them.',
      orientation: 'The Citadel is the broad walled city; the Imperial City is the royal enclosure within it, and the Forbidden Purple City lay deeper inside. Choose the ticketed heritage precinct shown on the current official map, then use the Meridian Gate and the court axis to understand how the spaces narrow toward the ruler’s quarters.',
      arrival: 'From the south-bank hotel and food streets, cross the river by bridge and use the entrance named on the current Hue heritage ticket. Do not assume a gate, side entrance or combination ticket remains valid from an older itinerary.',
      sequence: 'Begin outside the moat to see the scale of the wall, then enter at Meridian Gate. Move through the courtyards toward Thai Hoa Palace, continue to the surviving and reconstructed inner-palace traces, and compare repaired timber and tile with open foundations before leaving by a permitted public path.',
      boundary: 'Stay on public paths and outside restoration barriers. Do not touch carved wood, fragments or inscriptions; avoid blocking the gate and court axis for photographs, and yield to staff and other visitors.',
      stages: [
        ['Enter the walled city', 'Cross from the south bank, check the day’s official gate and ticket conditions, then approach from the moat so the outer defensive scale is visible.'],
        ['Follow court order', 'Use Meridian Gate, the courtyards and Thai Hoa Palace to read the ceremonial sequence; the axis explains why one hall is not the whole visit.'],
        ['Notice what survives', 'Compare repaired halls, bare foundations and gaps in the inner precinct. UNESCO records war damage and ongoing restoration, so do not read every finished surface as untouched original fabric.'],
        ['Return across the river', 'Allow a shaded rest before crossing back. Dong Ba Market is east of the Citadel for a separate food stop; choose it only if the market is still operating and you have time to browse without rushing.']
      ],
      risks: [
        ['Ticket and gate', 'The e-ticket portal lists current site access and combination tickets; check your selected entry before crossing rather than assuming every gate accepts every ticket.'],
        ['Heat and flood season', 'The national tourism guide describes February–April as the drier spring window, hotter June–July, and rain from August into January, with flooding often later in the year. Check local forecasts and access notices close to travel.'],
        ['Long exposed walk', 'Courtyards, steps and uneven paving add up. Carry water and sun protection, and ask the site about step-free routes if mobility is limited.']
      ],
      duration: 'Plan 3–4 hours inside the heritage precinct, plus the river crossing and a cooling break. A longer visit works if you read the outer Citadel as well as the inner courts.',
      combine: 'A short south-bank riverside walk can follow. Dong Ba Market sits by the northeast edge of the Citadel; keep it as a food-market stop, not another full attraction. Save the outlying tombs for a different day.',
      verify: 'Check the Hue e-ticket portal for the current entrance, ticket terms and closures; check the National Center for Hydro-Meteorological Forecasting and local notices for rain or flood disruption before setting a walking route.'
    },
    {
      slug: 'royal-tombs',
      name: 'Royal Tombs of Minh Mang, Tu Duc & Khai Dinh',
      motif: 'Three rulers, three landscapes',
      instrument: 'pair',
      countryCss: '/css/vietnam-hue.css?v=20261008-3',
      reviewDate: '8 October 2026',
      isoDate: '2026-10-08',
      sources: [
        ['https://www.vietnam.travel/things-to-do/an-inside-guide-hue-tombs', 'Vietnam Tourism — tomb histories and differences'],
        ['https://eticket.hueworldheritage.org.vn/', 'Hue Monuments Conservation Centre — official tickets and open sites'],
        ['https://www.vietnam.travel/places-to-go/central-vietnam/hue', 'Vietnam Tourism — local transport and seasonal conditions']
      ],
      presentation: {
        readingTitle: 'Three very different grounds; choose a pair.',
        routeTitle: 'Build the day around two sites, not all three.',
        checksLabel: 'Before leaving the city',
        checksTitle: 'Confirm both gates and the return.',
        checksLead: 'The tombs sit beyond Hue’s central walking area. Check each site’s current access, then agree the pickup order and return with your driver.',
        boundaryTitle: 'Walk these grounds as memorials',
        faqLabel: 'Choose your pair',
        faqTitle: 'Which two fit this visit?'
      },
      image: image({
        src: '/assets/images/vietnam-hue-minh-mang-20261008.webp',
        alt: 'Đại Hồng Môn, the main gate at Minh Mang Royal Tomb in Hue',
        source: 'https://commons.wikimedia.org/wiki/File:Royal_Tomb_of_Minh_Mang_(14720605126).jpg',
        commonsTitle: 'Royal Tomb of Minh Mang (14720605126).jpg',
        label: 'Royal Tomb of Minh Mang',
        creator: 'Erwin Verbruggen',
        license: 'CC BY-SA 2.0',
        licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
        editNote: 'Cropped/resized and converted to WebP; this image adaptation is shared under the same license version.'
      }),
      summary: 'Compare Minh Mang’s axial gardens, Tu Duc’s lake-and-pavilion retreat and Khai Dinh’s steep mosaic interior; pick a pair that suits your walking pace.',
      lead: 'These are funerary landscapes shaped by three rulers, not three versions of one palace. At Minh Mang, a formal axis crosses gates and bridges through water gardens toward pine-covered hills. Tu Duc’s compound spreads around lakes and pavilions from the emperor’s lifetime retreat. Khai Dinh compresses its visit into a climb across terraces and a richly tiled interior. Choosing a pair lets you read those differences without turning the day into a race.',
      orientation: 'Minh Mang and Tu Duc both ask for time outdoors, but their grounds feel different: one is ordered along a long central approach; the other bends around water and shaded pavilions. Khai Dinh is the steepest, most compact contrast, with a stair ascent and a mosaic-lined interior. The official tourism guide treats them as distinct choices and cautions against trying to see every tomb quickly.',
      arrival: 'Arrange a car or taxi with a written pickup point, waiting arrangement and return fare before leaving the city. A bicycle is possible only for riders comfortable with Hue’s roads, distance and heat; do not count on finding a replacement ride at a tomb gate.',
      sequence: 'For a two-site day, choose one broad garden landscape (Minh Mang or Tu Duc) and one contrasting site (often Khai Dinh). Visit the open-air gardens while energy is high, save the more compact tiled interior for the second stop, then return directly to town. The route order depends on road conditions and current opening information.',
      boundary: 'These are memorial places with active visitors and historic fabric. Keep voices low, do not climb tomb structures, touch inscriptions or sit on monuments, and follow barriers even when a viewpoint looks close.',
      stages: [
        ['Choose two before departure', 'For two open-air garden visits, pair Minh Mang with Tu Duc. For a stronger architectural contrast, pair either garden with Khai Dinh. Tu Duc plus Khai Dinh trades a second broad garden walk for the steepest climb. Keep the third tomb optional; add it only if you have a full-day window and the confirmed transfer and return still fit.'],
        ['Start with one garden', 'At Minh Mang, follow the central approach across bridges between ponds and planted slopes. At Tu Duc, read the lake edge, pavilions and courtyards as a retreat the emperor used during his lifetime. Pick one of these as the first stop, not both by default.'],
        ['Add one contrasting site', 'If Khai Dinh is your second stop, take the terraces slowly and look from the exterior into the mosaic-rich interior; the uphill sequence is the day’s main stair effort. If you chose Minh Mang and Tu Duc, keep the garden pair to a half-day plan; add Khai Dinh only if you have a full-day window and the confirmed return still fits.'],
        ['Return directly to Hue', 'Set the final pickup before entering the second site and keep a meal and road buffer. Add an evening river cruise or airport transfer only when the actual finish time, transfer and current weather leave a confirmed buffer; otherwise keep the evening or connection separate. Treat Bach Ma as a different outing.']
      ],
      risks: [
        ['A two-site day can stretch', 'Minh Mang and Tu Duc have long outdoor approaches; Khai Dinh is shorter in footprint but its terraces add steep steps. Heat, rain or limited mobility can make even two visits too much—drop the second site rather than rush.'],
        ['Driver wait and gate order', 'These are separate destinations outside the central walking zone. Agree which two gates are included, where the driver waits and the exact final pickup before leaving Hue; do not assume a ride will be waiting at each entrance.'],
        ['Rain, stairs and closures', 'Wet stone makes Khai Dinh’s steps and garden paths slippery, while late-year flooding can disrupt roads. If heavy rain or site notices affect either stop, shorten to one accessible visit or reschedule the pair.']
      ],
      duration: 'Use a half day as a planning estimate for two tombs with a prearranged car and concise pauses; add a third only if you can leave a full-day window for road time, lunch and longer walking breaks, and the confirmed return still fits. The official tourism guide says even two or three can take half a day depending on size and location, so keep the return flexible.',
      combine: 'For a garden-focused pair, choose Minh Mang plus Tu Duc. For garden-to-mosaic contrast, choose one of those with Khai Dinh. Return to Hue afterward; Thien Mu is a separate upstream visit, while Bach Ma and Lang Co belong to different road days.',
      verify: 'Check the Hue Monuments Conservation Centre’s current ticket and site-access information for both chosen tombs. Confirm pickup order, driver waiting time, road conditions and a return that leaves daylight before departing.'
    },
    {
      slug: 'thien-mu-perfume-river',
      name: 'Thien Mu & Perfume River',
      motif: 'A pagoda above the river',
      instrument: 'ribbon',
      countryCss: '/css/vietnam-hue.css?v=20261008-3',
      reviewDate: '8 October 2026',
      isoDate: '2026-10-08',
      sources: [
        ['https://whc.unesco.org/en/list/678', 'UNESCO — Thien Mu as an associated monument of the Hue capital'],
        ['https://www.vietnam.travel/places-to-go/central-vietnam/hue', 'Vietnam Tourism — Thien Mu tower and transport'],
        ['https://eticket.hueworldheritage.org.vn/', 'Hue Monuments Conservation Centre — current access and river tours']
      ],
      presentation: {
        readingTitle: 'A working pagoda in the river landscape.',
        routeTitle: 'Approach quietly, then leave room to linger.',
        checksLabel: 'Before going upstream',
        checksTitle: 'Check worship, boat and weather.',
        checksLead: 'The pagoda remains a religious complex. Boat schedules and boarding points are operator-specific; keep a road return available.',
        boundaryTitle: 'Let worship set the pace',
        faqLabel: 'Pagoda and river notes',
        faqTitle: 'Getting there with time to spare'
      },
      image: image({
        src: '/assets/images/vietnam-hue-thien-mu.webp',
        alt: 'Thien Mu Temple and Pagoda beside the Perfume River in Hue',
        source: 'https://commons.wikimedia.org/wiki/File:Hue_Vietnam_Thien-Mu-Temple-and-Pagoda-01.jpg',
        label: 'Thien Mu Temple and Pagoda',
        creator: 'CEphoto, Uwe Aranas',
        license: 'CC BY-SA 3.0'
      }),
      summary: 'Visit the seven-tier tower and active Buddhist grounds above the Perfume River; make the river approach an optional, confirmed part of the plan.',
      lead: 'Thien Mu Pagoda is both a familiar river landmark and an active religious complex associated with Hue’s former capital. Its best-known seven-tier tower is only one part of what visitors see: gates, courtyards, devotional spaces and tree shade sit together above the water. UNESCO also lists the pagoda among the capital’s associated monuments, so the upstream location is part of the historic geography.',
      orientation: 'Vietnam’s tourism authority identifies the seven-tier tower as Hue’s iconic pagoda landmark. Visit the public compound as a working Buddhist place, not a staged viewpoint; worship, ceremonies or staff direction may temporarily change which spaces are appropriate to enter.',
      arrival: 'Thien Mu stands upstream northwest of the central Citadel. A taxi or prearranged car gives the clearest return plan. A river approach is atmospheric only when a licensed service confirms its departure pier, operating time and return; do not buy a one-way ride without a land fallback.',
      sequence: 'Arrive during daylight, pause outside the gate before joining visitor movement, and view the tower from the public courtyard. Continue only through open areas, then take time at a public river edge if conditions allow. Keep the return transfer separate from any tomb circuit.',
      boundary: 'Dress modestly, lower voices, and give worshippers right of way. Ask before photographing people; never enter a marked monastic, residential or ritual area, and follow staff directions if a ceremony is underway.',
      stages: [
        ['Confirm the approach', 'Set a road pickup or verify a licensed river departure and return before leaving town. The pagoda is upstream, so an unconfirmed boat can strand the second half of the plan.'],
        ['Meet the tower', 'From the public grounds, notice how the seven-tier tower rises above the river and the gate frames the compound. Keep clear of stairs and offerings.'],
        ['Read the working pagoda', 'Move slowly through public courtyards and open devotional spaces. The point is to see an active religious place in its river setting, not to photograph every worshipper.'],
        ['Return in daylight', 'Leave room for a quiet riverside pause, then use the confirmed road or boat return before weather, light or operator hours narrow the options.']
      ],
      risks: [
        ['Boat uncertainty', 'There is no dependable public timetable implied by the river setting. Confirm a licensed operator, pier, price and return time directly before choosing a boat.'],
        ['Worship and closures', 'Ceremonies and monastic activity may make parts of the grounds private. Follow signs and staff, and skip a room or courtyard if worship is in progress.'],
        ['River weather', 'Rain can make stone steps and river edges slippery; during Hue’s rainy and flood-prone months, check local warnings and use the road route if water service is suspended.']
      ],
      duration: 'Plan 2–3 hours at the pagoda and river edge, plus the round trip from the central city. Add more time only after the boat schedule or driver wait has been confirmed.',
      combine: 'Pair with a calm central riverfront visit, or choose a separate west-bank garden if it is open and the transfer is clear. Keep the tombs for another route.',
      verify: 'Check current visitor guidance through the Hue heritage centre, ask staff about access at the gate, and confirm the boat or vehicle return and local rain or flood warning before leaving town.'
    },
    {
      slug: 'thanh-toan-rural-loop',
      name: 'Thanh Toan Rural & Canal Loop',
      motif: 'The working village edge',
      instrument: 'field',
      countryCss: '/css/vietnam-hue.css?v=20261008-3',
      reviewDate: '8 October 2026',
      isoDate: '2026-10-08',
      sources: [
        ['https://sdl.hue.gov.vn/diem-du-lich-nong-thon/diem-du-lich-cau-ngoi-thanh-toan.html', 'Hue Department of Tourism — bridge structure, Tran Thi Dao, and the agricultural-tool display'],
        ['https://www.vietnam.travel/places-to-go/central-vietnam/hue', 'Vietnam Tourism — the village ride, seasonal weather, and Hue transport'],
        ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — official weather warnings']
      ],
      presentation: {
        readingTitle: 'A covered bridge still built for village life.',
        routeTitle: 'Make the bridge and tool display the two anchors.',
        checksLabel: 'Before riding out',
        checksTitle: 'Check lanes, rain and return.',
        checksLead: 'Choose a bicycle only if you are comfortable sharing narrow local roads. Otherwise agree a car drop-off and pickup around the village market.',
        boundaryTitle: 'Let the village keep its daily rhythm',
        faqLabel: 'Village visit planning',
        faqTitle: 'What fits a half day?'
      },
      image: image({
        src: '/assets/images/vietnam-hue-thanh-toan.webp',
        alt: 'Thanh Toan tiled bridge near the rural waterways of Hue',
        source: 'https://commons.wikimedia.org/wiki/File:Thanh_Toan_Br%C3%BCcke_IMG_0285.jpg',
        label: 'Thanh Toan Tiled Bridge',
        creator: 'Exvil-lachwien',
        license: 'CC BY-SA 4.0'
      }),
      summary: 'Cycle or ride through rice fields, irrigation lanes and Thanh Toan’s tiled bridge to meet the agricultural rhythm just beyond Hue.',
      lead: 'The seven-bay wooden bridge was built in 1776 through the support of Tran Thi Dao, who wanted villagers and travelers to cross the canal and rest under its roof. A small altar to her occupies the central bay. The structure’s “house above, bridge below” form still reads clearly when you walk through it; it is also an active village crossing, not a museum set.',
      orientation: 'Start with the roofed bridge and its canal, then visit the nearby agricultural-tool display to understand the working landscape around it. The village market sits beside the bridge; the fields and homes beyond are private or working ground, not an open walking attraction. Check whether the display and any demonstrations are operating before building them into the visit.',
      arrival: 'A bicycle, local driver or careful motorbike route works better than a large vehicle on narrow lanes. Confirm the return route and road surface after rain.',
      sequence: 'Leave the city on the quietest safe road, cross the village landscape, pause at the bridge and agricultural interpretation, then return by a different public lane only if conditions allow.',
      boundary: 'Protect the community boundary: ask before photographing residents, homes, shrines or private fields, and never block the bridge or market circulation.',
      stages: [
        ['Choose the return first', 'From central Hue, a prearranged car or taxi is the lower-effort choice; ask for a fixed drop-off and pickup by the market. A bicycle makes the rural approach part of the visit but only suits riders confident in mixed traffic. No dependable public bus timetable is listed in the official visitor sources.'],
        ['Walk the covered crossing', 'Notice the tiled roof, timber structure, canal below and central altar to Tran Thi Dao. Give people crossing, resting or worshipping room; the bridge is the destination and a community route at once.'],
        ['Read the agricultural display', 'If the nearby tool house is open, compare the ploughs, sickles, rice-processing tools and wooden water-lifting wheel with the canal and fields outside. Treat demonstrations and market food as optional local activity, not guaranteed scheduled attractions.'],
        ['Leave by a public lane', 'Return on the agreed road before dusk or heavy rain. Do not turn a half-day village visit into a long unsurveyed farm-track loop; save time for a city meal after you are back in Hue.']
      ],
      risks: [
        ['Cycling confidence', 'The rural approach uses shared local roads rather than a protected cycleway. If you are not comfortable with motorcycles, farm vehicles and narrow crossings, use a driver and walk only around the bridge area.'],
        ['Canal edge and floodwater', 'Rain can leave the canal path slick or put low approaches under water. Skip the loop if water is rising, and follow local closure guidance rather than trying another lane.'],
        ['A living memorial', 'The bridge altar and nearby homes are active community spaces. Ask before photographing people, never block the crossing or market, and do not enter yards, fields or shrines.']
      ],
      duration: 'Plan about half a day for the road out, bridge, agricultural-tool display and return, with time to stop without interrupting the market. Cycling can lengthen the visit; do not plan an additional out-of-town Hue site on the same tight window.',
      combine: 'Pair with a relaxed central-city food stop or riverfront evening; do not bolt it onto three tombs simply because both routes leave Hue.',
      verify: 'Check the Hue Department of Tourism’s current bridge and tool-display information, then confirm local access, rain conditions and the selected bicycle or driver return on the day.'
    },
    {
      slug: 'bach-ma-national-park',
      name: 'Bach Ma National Park',
      motif: 'Rainforest above the coast',
      instrument: 'contour',
      countryCss: '/css/vietnam-hue.css?v=20261008-3',
      reviewDate: '8 October 2026',
      isoDate: '2026-10-08',
      sources: [
        ['https://nbca.gov.vn/vuon-quoc-gia-bach-ma/', 'National Biodiversity Conservation — park landscape, rainfall, and named nature trails'],
        ['https://www.vietnam.travel/places-to-go/central-vietnam/hue', 'Vietnam Tourism — Hue seasonal rain and regional transport'],
        ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — official rain and storm warnings']
      ],
      presentation: {
        readingTitle: 'Choose a trail by its destination and effort.',
        routeTitle: 'One trail family is a day; four is a checklist.',
        checksLabel: 'Before the mountain road',
        checksTitle: 'Confirm entry, trail and return vehicle.',
        checksLead: 'The official trail names lead to different endpoints. Check which are open and how visitors reach the upper trailheads before leaving Hue.',
        boundaryTitle: 'Stay on the park’s permitted routes',
        faqLabel: 'Trail and weather choices',
        faqTitle: 'Which route fits this day?'
      },
      image: image({
        src: '/assets/images/vietnam-hue-bach-ma.webp',
        alt: 'Bach Ma mountain range beneath late-afternoon light on the central coast',
        source: 'https://commons.wikimedia.org/wiki/File:D%C3%A3y_B%E1%BA%A1ch_M%C3%A3.jpg',
        label: 'Bach Ma mountain range',
        creator: 'Lê Đăng Khôi',
        license: 'CC0'
      }),
      summary: 'Plan Bach Ma as a managed mountain-forest day or overnight, choosing one official trail family instead of overloading a wet highland route.',
      lead: 'Bạch Mã rises from lowland evergreen forest to a high ridge; the official conservation portal describes a protected area of more than 37,000 hectares and very heavy annual rain. Its named trails point to different experiences: Ngũ Hồ links five pools, Đỗ Quyên ends at a major waterfall, Vọng Hải Đài is a summit viewpoint, and Trĩ Sao leads to its own waterfall. The trailhead and mountain road matter as much as the map pin.',
      orientation: 'Choose one endpoint before setting out: Vọng Hải Đài for the high view, Ngũ Hồ for a stream-and-pool route, or a named waterfall trail for the descent. These are not interchangeable short walks, and visibility, stream levels and access can change after rain. Ask the park which route and internal transfer are operating; an entrance ticket alone does not confirm the upper trail is reachable.',
      arrival: 'Use a confirmed vehicle and, when required, park registration, guide or approved transfer. Expect the final approach to be slower than the city-to-gate map suggests.',
      sequence: 'Register and check the day’s permitted zones, move from the lower forest into the chosen trail, stop before fatigue or weather becomes a hazard, and return with daylight margin.',
      boundary: 'Protect the park boundary: stay on marked trails, do not feed wildlife, collect plants, enter closed forest or light fires outside designated areas.',
      stages: [
        ['Pick one trail endpoint', 'Choose Vọng Hải Đài for the ridge view, Ngũ Hồ for its linked pools, Đỗ Quyên for the waterfall, or Trĩ Sao for its waterfall trail. Compare the park’s current access and effort notes; do not treat all four as stops on one hike.'],
        ['Set the park transfer', 'Confirm entry, any guide or registration requirement, and how the park is moving visitors between the gate and your chosen trailhead. Share the trail and expected return with your driver; do not assume a city taxi will wait inside the park.'],
        ['Keep the route inside its margin', 'Carry water, a rain layer, shoes with grip and an offline route note. Follow the marked trail, turn back if cloud or stream levels worsen, and never take a shortcut through closed forest.'],
        ['Return to Hue in daylight', 'Leave time for the internal road down and the drive back to the city. If heavy rain, a park closure or a severe weather warning is active, postpone the forest route rather than swapping to another trail.']
      ],
      risks: [
        ['Very high rainfall', 'The national conservation portal reports typical annual rainfall of about 3,400–4,000 mm, with higher years possible. A forecast that looks manageable in central Hue can still mean slippery mountain steps, swollen streams or a closed upper road.'],
        ['A long exit after the walk', 'Each trailhead adds park-road time before the drive to Hue. Keep the group together, carry essentials and leave a daylight margin; do not rely on phone signal or quick outside assistance.'],
        ['Forest and waterfall edges', 'Stay on signed routes and behind barriers. Do not collect plants, feed or approach wildlife, enter closed forest, or step onto wet rocks for a better waterfall view.']
      ],
      duration: 'Reserve a full day for one trail family: Hue-to-park road time, the internal approach, a measured walk and the return all compete for daylight. An overnight is a separate plan that depends on confirmed park accommodation and current visitor rules.',
      combine: 'Combine with Lang Co only as a separate transfer day when the park and road conditions are stable; do not add the Citadel or tombs after a long trek.',
      verify: 'Recheck the National Biodiversity Conservation portal and the park directly for the chosen trail’s status, entry or guide requirements, internal transport and overnight rules. Check the national forecast and agree the return vehicle before leaving Hue.'
    },
    {
      slug: 'lang-co-lap-an-lagoon',
      name: 'Lang Co & Lap An Lagoon',
      motif: 'Where the road meets the lagoon',
      instrument: 'tide',
      countryCss: '/css/vietnam-hue.css?v=20261008-3',
      reviewDate: '8 October 2026',
      isoDate: '2026-10-08',
      sources: [
        ['https://hue.gov.vn/Cong-dan/Giai-trinh-y-kien-cu-tri/action/chitiet/tid/e1577ab0-d248-40f2-9235-b242009286c3', 'Hue City Portal — the lagoon’s local An Cư place-name history'],
        ['https://www.vietnam.travel/places-to-go/central-vietnam/hue', 'Vietnam Tourism — seasonal rain, flood risk, and Hue-to-coast transport context'],
        ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — official coastal weather warnings']
      ],
      presentation: {
        readingTitle: 'The lagoon stop and the beach stop are different.',
        routeTitle: 'Choose a safe stop before committing to the coast road.',
        checksLabel: 'Before the coastal transfer',
        checksTitle: 'Agree the road, stop and onward leg.',
        checksLead: 'A through bus or train is a transfer, not a lagoon visit. If stopping, book a driver who can use a safe public pull-in and keep the onward schedule realistic.',
        boundaryTitle: 'Keep out of the lagoon work areas',
        faqLabel: 'Coast and transfer choices',
        faqTitle: 'Is this a stop or a half-day?'
      },
      image: image({
        src: '/assets/images/vietnam-hue-lap-an.webp',
        alt: 'Lap An Lagoon and the Bach Ma mountain range near Lang Co',
        source: 'https://commons.wikimedia.org/wiki/File:Lang_Co_lagoon,_Lap_An_lagoon,_Vietnam.jpg',
        label: 'Lang Co and Lap An Lagoon',
        creator: 'Vyacheslav Argenberg',
        license: 'CC BY 4.0'
      }),
      summary: 'Use Lang Co and Lap An Lagoon as a mountain-and-sea transfer chapter linking Hue, the Hai Van coast, working waters and the Bach Ma foothills.',
      lead: 'Lăng Cô and Lập An sit where the coast road meets the lagoon and the foothills of Bạch Mã. The lagoon’s boats and aquaculture belong to a working water landscape; the open beach is a different stop, and a safe roadside view is different again. Hue’s official records also preserve An Cư as an older local name for this lagoon area, so older maps or documents may use more than one name.',
      orientation: 'If you are moving between Hue and Đà Nẵng by road, decide whether you want a brief public-edge look at the lagoon or a separate beach-and-coast visit; they need different time and access. If you are on a fixed bus or train schedule, keep it as a transfer and plan a dedicated visit another day. The lagoon edge is not a public promenade through fishing or aquaculture plots.',
      arrival: 'Use a private car, licensed transfer or a carefully planned road itinerary; the best stop depends on traffic, safe pull-outs, weather and current access to the lagoon edge.',
      sequence: 'Travel from the Hue side with a daylight margin, stop only at safe public viewpoints or businesses, observe the lagoon without entering working areas, then continue or return before mountain weather worsens.',
      boundary: 'Protect the working lagoon: do not walk through aquaculture plots, collect shellfish, enter private jetties or treat fishing families as scenery without consent.',
      stages: [
        ['Choose transfer or outing', 'For a Hue–Đà Nẵng road transfer, tell the driver before departure that you want one lagoon stop and agree a safe parking place and onward time. Without a flexible vehicle, skip the roadside detour and keep the booked connection.'],
        ['Read the lagoon from public ground', 'Look for the contrast between mountain backdrop, enclosed water and working boats. Stay on an access road, public edge or business that welcomes visitors; do not cross tidal mud or walk through fishing gear or jetties.'],
        ['Decide whether to add the shore', 'A beach visit is a separate choice from a lagoon viewpoint. Add it only if your driver, road route and daylight allow time to park and return safely; otherwise continue toward your booked destination.'],
        ['Keep the onward leg intact', 'The official Hue portal records the older An Cư name, but current maps may label the lagoon differently. Save the exact pickup pin, check rain and road warnings, and finish the coast road before darkness or deteriorating visibility.']
      ],
      risks: [
        ['No improvised shoulder stops', 'Highway traffic and narrow shoulders leave little room to step out safely. Use a public parking area or a driver-approved business stop; if no safe pull-in is available, keep moving.'],
        ['Coastal weather can cancel the view', 'Rain, wind and low cloud can obscure the Bạch Mã backdrop or affect the coast road. During Hue’s late-year rain and flood season, check warnings and be willing to skip the stop rather than wait beside the highway.'],
        ['Working lagoon access', 'Fishing gear and jetties mark work areas or private access. Observe from an open public edge, keep clear of boats and ask before photographing people.']
      ],
      duration: 'Treat a single safe lagoon stop as a short transfer pause, not a whole coast tour. Allow a half day as an editorial estimate if the lagoon and beach are the main outing; a Hue–Đà Nẵng road-transfer day needs a separately agreed stop and onward buffer.',
      combine: 'Combine with Bach Ma only when the park exit and coastal road are both confirmed; otherwise keep the lagoon as the main destination.',
      verify: 'Check the National Center for Hydro-Meteorological Forecasting for coastal rain and storm warnings, confirm current road access, and agree the public stop and onward time with your driver. Do not assume an open shoreline is safe to approach at every tide.'
    }
  ]
});

const hueDecisionCopy = {
  'royal-tombs': [
    ['Choose two sites', 'Minh Mang + Tu Duc keeps the day among open-air gardens; pair either one with Khai Dinh for a stair-and-mosaic contrast. Leave the third tomb for another day.'],
    ['Arrange one return ride', 'Agree the two gates, waiting time, visit order and final pickup in Hue before leaving the city. The tomb grounds are dispersed beyond the central walking area.'],
    ['Match effort to the pair', 'Khai Dinh adds a steep terrace climb; Minh Mang and Tu Duc involve longer garden paths. Take breaks, and treat each complex as a memorial rather than a shortcut between photo stops.']
  ],
  'thanh-toan-rural-loop': [
    ['Choose a bicycle or car', 'A bicycle makes the rural approach part of the visit but shares narrow village roads. A driver drop-off and agreed pickup keep the half-day plan lower effort.'],
    ['Visit two village anchors', 'Walk the covered bridge and, if open, the nearby agricultural-tool display. The market and canal are working places, not scheduled performances.'],
    ['Leave lanes open', 'The bridge, altar and market serve residents. Keep the crossing clear and ask before photographing people or stepping beyond public lanes.']
  ],
  'bach-ma-national-park': [
    ['Choose one trail endpoint', 'Ngũ Hồ links five pools; Đỗ Quyên and Trĩ Sao lead to different waterfalls; Vọng Hải Đài is the ridge viewpoint. Trail status and access vary.'],
    ['Plan the park road too', 'Confirm entry, any guide or registration rule, internal transfer to the trailhead and your return driver before leaving Hue.'],
    ['Give rain the deciding vote', 'Heavy rainfall can make streams, stairs and the mountain road unsafe. Stay on permitted trails and postpone the hike when warnings or closures apply.']
  ],
  'lang-co-lap-an-lagoon': [
    ['Choose a stop you can reach safely', 'A scheduled coach or train is point-to-point; arrange a flexible road transfer if you want to stop at the lagoon or beach.'],
    ['Separate lagoon from beach', 'The working lagoon edge and open coast are different places. Plan one safe public-edge stop, then continue to the booked destination.'],
    ['Keep the water at work', 'Fishing gear, aquaculture plots and jetties are not visitor paths. Use public access and do not step across tidal mud or gear.']
  ]
};

for (const guide of hue.guides) {
  const decisionCopy = hueDecisionCopy[guide.slug];
  if (!decisionCopy) continue;
  guide.decisions = decisionCopy;
  guide.hideSequenceLead = true;
}

const daNangHoiAn = defineVietnamCluster({
  slug: 'da-nang-hoi-an',
  name: 'Da Nang & Hoi An',
  region: 'Central Coast',
  family: 'coast-lantern',
  label: "Limestone, lantern streets & Cham towers — Central Vietnam",
  tagline: "Follow one coast from cave shrines to a trading port and Cham sanctuary.",
  hubIntro: "Da Nang’s southern edge, Hoi An’s Thu Bon riverfront and My Son’s upland valley are often sold as one loop, yet they tell different histories. At Ngu Hanh Son, limestone caves hold active shrines; Hoi An’s narrow shop rows preserve the plan of a 15th–19th-century port; My Son’s brick towers mark a religious and political center of Champa from the 4th to 13th centuries. Keep road legs distinct so time inside each place is not swallowed by transit.",
  stay: "Da Nang is the practical base for Ngu Hanh Son and the Cham Museum of Sculpture. Hoi An suits an early or evening old-town visit and shortens the My Son road day. Move bases only if your nights and plans shift south; changing hotels for a single stop can cost more time than it saves.",
  transfer: "From Da Nang, a taxi or ride-hail works for the city and Marble Mountains. Treat My Son as a separate inland return drive from Da Nang or Hoi An; confirm pickup and return before leaving. In heavy rain, Da Nang’s Cham Museum and Hoi An’s ticketed heritage interiors offer indoor context when valley or street access is poor.",
  sources: [
    [
      "https://vietnam.travel/places-to-go/central-vietnam/da-nang",
      "Vietnam Tourism — Marble Mountains, Cham Museum, transport and seasonal weather"
    ],
    [
      "https://whc.unesco.org/en/list/948",
      "UNESCO — Hoi An Ancient Town: trading-port plan and living timber town"
    ],
    [
      "https://hoianheritage.danang.gov.vn/en/news/news-events/announcement-of-the-visiting-in-hoi-an-ancient-town-125.html",
      "Hoi An World Cultural Heritage Conservation Center — visitor and ticket notice; checked 8 October 2026"
    ],
    [
      "https://whc.unesco.org/en/list/949",
      "UNESCO — My Son Sanctuary: Cham history, architecture and conservation conditions"
    ],
    [
      "https://mysonsanctuary.com.vn/tin-tuc/thong-tin-du-khach",
      "My Son Sanctuary Management Board — visitor notices; verify current entry arrangements"
    ],
    [
      "https://mysonsanctuary.com.vn/dich-vu.html",
      "My Son Sanctuary Management Board — listed services; confirm availability before travel"
    ]
  ],
  hubCss: '/css/vietnam-da-nang-hoi-an.css?v=20261008-1',
  reviewDate: '8 October 2026',
  isoDate: '2026-10-08',
  routeModelHeading: 'Three histories, with road time between them.',
  routeModelLead: 'Read the limestone shrine landscape first, follow the old port on foot, then give My Son its own inland departure. A morning start protects the cave climb and valley walk from heat; rain changes footing and may change access.',
  presentation: {
    conditionsKicker: 'Three landscapes, three ways to visit',
    conditionsTitle: 'Match the route to the place.',
    conditionsLead: 'Ngu Hanh Son is a steep, active shrine landscape; Hoi An is a working town of ticketed interiors and shared lanes; My Son is an exposed archaeological valley reached by road.',
    faqKicker: 'Choosing a central-coast day',
    faqTitle: 'Where should the extra hour go?'
  },
  guides: [
    {
      slug: 'han-river-city-core',
      name: 'Han River & Da Nang City Core',
      motif: 'The working waterfront',
      instrument: 'zine',
      instrumentLabel: 'riverfront',
      routeLead: "Bach Dang and the Cham Museum make a compact west-bank pairing; Tran Hung Dao is a separate east-bank choice, not the far end of one continuous promenade. A second shore adds a bridge approach and a different pickup plan.",
      boundaryLabel: "River and museum etiquette",
      arrivalLabel: "Getting to the riverfront",
      image: image({
        src: '/assets/images/vietnam-da-nang-han-river.webp',
        alt: 'Han River and the Da Nang city waterfront',
        source: 'https://commons.wikimedia.org/wiki/File:Han_River,_Da_Nang,_Vietnam_-_20230819.jpg',
        label: 'Han River, Da Nang',
        creator: 'Somerset999',
        license: 'CC BY-SA 4.0',
        sourceDate: '2023-08-19'
      }),
      summary: 'Plan a Han River half-day around the Cham Museum and one chosen riverbank, then decide whether a cross-river walk adds enough to justify its traffic and bridge constraints.',
      lead: 'The Han River divides Da Nang’s civic center from the eastern shore. Bach Dang Street follows the western side through Hai Chau; Tran Hung Dao faces it from Son Tra. A useful city walk reads those two edges, then uses the Cham Museum for the region’s older history instead of treating bridges as a checklist.',
      orientation: 'Choose a west-bank walk if you want to pair Bach Dang with the Cham Museum at 2 Thang 9 Street. Choose the east bank when your hotel or evening plan is already near Tran Hung Dao. Cross once, by a currently open bridge, only when the opposite shore is part of the day.',
      arrival: 'From the airport or a central hotel, take a taxi or ride-hail to the riverfront or the museum rather than assuming the walk from your lodging is comfortable in heat. Pin a named drop-off and pickup; if they are on opposite banks, decide in advance how you will return.',
      sequence: 'Begin on Bach Dang in daylight and look across toward Tran Hung Dao to orient yourself. Give the Museum of Cham Sculpture at 2 Thang 9 Street a real indoor block, then choose a meal and either finish on the west bank or add one optional crossing.',
      boundary: 'The river edges are working city streets, not a continuous promenade. Use signed crossings and open walkways, keep out of traffic and follow the museum’s photography and conduct rules. Let the Cham collection explain its own cultural context rather than using sacred objects as props.',
      stages: [
        ['Choose the bank', 'Start at a confirmed public access point on Bach Dang or Tran Hung Dao. The west side is the simpler pairing for the Cham Museum; the east side suits a route already based in Son Tra.'],
        ['Give the museum a real block', 'At 2 Thang 9 Street, select a few galleries from the collection of more than 400 Cham sculptures and artifacts, spanning the 5th to 15th centuries.'],
        ['Make one crossing optional', 'If the opposite bank adds a specific stop, cross once and plan the return; otherwise, finish on the bank where you began.'],
        ['Finish where the ride can reach you', 'Eat on the chosen side or request a pickup at a named street entrance. Keep the museum-and-bank walk as the compact version; add an east-bank circuit only if heat, traffic and the group’s energy still allow it.']
      ],
      risks: [
        ['Bridge access changes', 'The Han River Swing Bridge may be closed to traffic and pedestrians during rotation or other controls. Check the official notice on the day and use another open route or end on one bank.'],
        ['Road crossings and heat', 'Bridge approaches and wide streets are not a safe place to improvise a crossing. Use signed crossings, shorten the walk in heat and move the museum block earlier if storms are forecast.'],
        ['Museum timing', 'The collection deserves more than a rushed photo stop, but current hours and gallery access can change. Verify the museum notice and choose a smaller gallery plan if time is limited.']
      ],
      duration: 'Treat the riverbank and Cham Museum as a half-day plan, with road transfers at either end. A longer outing is a choice to add a second bank, not an assumption that the bridges and waterfront form one uninterrupted walking loop.',
      combine: 'Pair the west bank with the Cham Museum for a compact urban day. Add My Khe only as a separate coast window; keep Son Tra and Marble Mountains for days when their road, footing and weather decisions can be made on their own.',
      faqLastQuestion: 'Do I need to cross both sides of the Han River?',
      verify: 'No. The west bank and Cham Museum make a complete half-day; cross only if a specific east-bank stop matters to your plan.',
      reviewDate: '8 October 2026',
      isoDate: '2026-10-08',
      countryCss: '/css/vietnam-da-nang-hoi-an.css?v=20261008-1',
      sources: [
        [
          'https://visitdanang.travel/en/everything-you-might-not-know-about-da-nangs-han-river-swing-bridge-6917',
          'Visit Da Nang — Han River Swing Bridge setting, connecting banks and variable rotation controls; checked 8 October 2026'
        ],
        [
          'https://visitdanang.travel/en/da-nang-museum-of-cham-sculpture-2036',
          'Visit Da Nang — Museum of Cham Sculpture location and collection context; confirm current hours before visiting; checked 8 October 2026'
        ],
        [
          'https://vietnam.travel/places-to-go/central-vietnam/da-nang',
          'Vietnam National Authority of Tourism — Da Nang orientation and local transport context; checked 8 October 2026'
        ],
        [
          'https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html',
          'National Center for Hydro-Meteorological Forecasting — current weather and marine forecast; check for the visit date'
        ]
      ],
      presentation: {
        readingTitle: 'Read the two river edges before crossing.',
        routeTitle: 'Start on one bank; make the crossing a choice.',
        checksLabel: 'Before the walk',
        checksTitle: 'Museum hours and bridge access can change the route.',
        checksLead: 'The west-bank museum pairing is compact; an east-bank circuit needs an open crossing and a return plan.',
        checksActionText: 'Check the day’s access',
        faqLabel: 'Han River in practice',
        faqTitle: 'Banks, bridges and a museum block',
        boundaryTitle: 'Use the riverfront as a city, not a set.'
      }
    },
    {
      slug: 'son-tra-peninsula',
      name: 'Son Tra Peninsula Wildlife & Linh Ung',
      motif: 'Forest above the bay',
      instrument: 'signal',
      instrumentLabel: 'pagoda',
      routeLead: "Follow the pagoda from its entrance to the main hall and statue; the sea-facing balcony completes the visit, while the forest road is a separate optional extension.",
      boundaryLabel: "Pagoda etiquette",
      arrivalLabel: "Getting to Linh Ung",
      kickerLabel: "Son Tra forest & Linh Ung Pagoda",
      image: image({
        src: '/assets/images/vietnam-da-nang-son-tra.webp',
        alt: 'Ornate entrance gate to Linh Ung Pagoda on Son Tra Peninsula',
        source: 'https://commons.wikimedia.org/wiki/File:Son-Tra-Peninsula_Da-Nang_Vietnam_Linh-Ung-Pagoda-01.jpg',
        label: 'Gate to Linh Ung Pagoda, Son Tra Peninsula',
        creator: 'CEphoto, Uwe Aranas',
        license: 'CC BY-SA 3.0',
        sourceDate: '2011-05-14'
      }),
      summary: "Visit Linh Ung as a hillside pagoda above Da Nang Bay: pass through its three-door gate and courtyard to the main hall, Lady Buddha and the sea-facing balcony.",
      lead: "Set above Da Nang Bay, Linh Ung is a Buddhist complex with a sequence of spaces, not simply its prominent Lady Buddha statue. Da Nang’s tourism portal describes its design as bringing modern and traditional Vietnamese pagoda architecture together in the three-door gate, main hall and ancestral house. Visitors pass the gate into a courtyard of bonsai and arhat figures, then see Buddhist images and sculptural reliefs of Shakyamuni’s life inside the hall. The principal statue is locally called Lady Buddha; the city portal identifies it as a Lady Bodhisattva and notes the ocean and coastal views along the approach. Local accounts connect the statue with protection for fishermen facing storms and strong waves, giving the sea-facing visit meaning beyond its panorama. Son Tra’s coastal forest is also habitat for the endangered red-shanked douc langur, so a sighting is a chance encounter rather than a promised part of a temple visit.",
      orientation: 'Enter through the gate to the courtyard, continue through the main hall and ancestral house, then finish near Lady Buddha and the bay-facing balcony.',
      arrival: 'Arrange a roadworthy driver and a confirmed pickup or waiting return before leaving the city. Upper viewpoints may not have a car available, so agree on the exact route and meeting point with your driver before departure.',
      sequence: 'Linh Ung is a complete pagoda visit on its own; any forest-road viewpoint is a separate, access-dependent add-on.',
      boundary: 'Respect this active place of worship: follow posted photography guidance, keep voices low and give worshippers space. Do not enter closed buildings or interrupt ceremonies.',
      stages: [
        ['Enter through the three-door gate', 'Pause in the courtyard among bonsai and arhat figures, then continue into the precinct toward the main hall and ancestral house.'],
        ['Read the main hall', 'The Buddhist images and reliefs depict Shakyamuni’s life, placing the architecture within the site’s active religious use.'],
        ['Finish at Lady Buddha', 'Continue to the sea-facing statue and balcony for views over Da Nang Bay and the coast; the balcony is a natural end to the pagoda visit.'],
        ['Return to the city', 'Walk back through the pagoda precinct to your agreed pickup; keep a city meal or beach stop as a separate choice.']
      ],
      risks: [
        ['Check current road permission', 'Son Tra routes can close or be restricted. Before adding an upper road, check the city’s current visitor notice, stay on authorized roads and obey barriers.'],
        ['Allow for weather and descent', 'Review the official forecast and agree on a return time with your driver. Rain and low visibility make the winding descent harder; skip a forest extension if conditions worsen.'],
        ['Keep wildlife wild', 'Red-shanked doucs may be absent or difficult to see. Stay at permitted public viewpoints; never feed, bait, call, chase or approach them.']
      ],
      duration: 'Reserve a half day for the pagoda precinct and return ride. Treat a forest viewpoint as a separate optional extension rather than part of the core visit.',
      combine: 'A short city meal can follow a timely return. Keep Marble Mountains and My Khe on separate route plans so steep-road access and beach conditions are not squeezed into the same day.',
      faqLastQuestion: 'Can I visit Linh Ung without adding a forest viewpoint?',
      verify: 'Yes. The gate, courtyard, main hall, ancestral house, Lady Buddha and sea-facing balcony form a complete pagoda visit; the forest road is optional.',
      reviewDate: '8 October 2026',
      isoDate: '2026-10-08',
      countryCss: '/css/vietnam-da-nang-hoi-an.css?v=20261008-1',
      sources: [
        ["https://danangfantasticity.com/en/linh-ung-pagoda","Da Nang City Tourism Information Portal — Linh Ung’s gate, courtyard, pagoda buildings, Lady Buddha and bay setting; checked 8 October 2026"],
        [
          'https://vietnam.travel/places-to-go/central-vietnam/da-nang',
          'Vietnam National Authority of Tourism — Son Tra forest and endangered red-shanked douc langur context; checked 8 October 2026'
        ],
        [
          'https://cttdt.danangportal.gov.vn/en/web/dng/-/kham-pha-son-tra-trai-nghiem-can-di-cung-trach-nhiem',
          'Da Nang City Portal — responsible access and visitor conduct on Son Tra; checked 8 October 2026'
        ],
        [
          'https://cttdt.danangportal.gov.vn/vi/web/dng/w/thong-tin-bao-chi-sang-10-8-2026',
          'Da Nang City Portal — visitor-access notice for natural areas; checked 8 October 2026'
        ],
        [
          'https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html',
          'National Center for Hydro-Meteorological Forecasting — current regional weather; check for the visit date'
        ]
      ],
      presentation: {
        readingTitle: 'Read the pagoda before the bay.',
        routeTitle: 'From the three-door gate to the bay.',
        checksLabel: 'Before the forest extension',
        checksTitle: 'Check access, weather and return transport.',
        checksLead: 'The pagoda is a complete visit; any forest road depends on same-day permission and conditions.',
        checksActionText: 'Check current access',
        faqLabel: 'Son Tra in practice',
        faqTitle: 'A pagoda visit with an optional forest road',
        boundaryTitle: 'Respect this active place of worship.'
      }
    },
    {
      slug: 'marble-mountains-non-nuoc',
      name: 'Marble Mountains & Non Nuoc',
      motif: 'Caves, shrines and stone',
      instrument: 'section',
      image: image({
        src: '/assets/images/vietnam-da-nang-marble-mountains.webp',
        alt: 'Tam Thai Pagoda courtyard and ornate roof on Thuy Son in the Marble Mountains',
        source: 'https://commons.wikimedia.org/wiki/File:Ch%C3%B9a_Tam_Thai,_Th%E1%BB%A7y_S%C6%A1n,_%C4%90%C3%A0_N%E1%BA%B5ng_(Tam_Thai_Pagoda,_Thuy_Son_Marble_Mountain)_-_img_01.jpg',
        label: 'Tam Thai Pagoda, Thuy Son',
        creator: 'Chainwit.',
        license: 'CC BY 4.0',
        sourceDate: '2024-08-01'
      }),
      summary: "Trace Ngu Hanh Son from limestone outcrops into Huyen Khong Cave and Tam Thai Pagoda, then meet Non Nuoc craft on its own terms.",
      lead: "The Marble Mountains are five limestone outcrops south of Da Nang; Thuy Son is the visitor landscape where geology meets active Buddhist and folk worship. Huyen Khong Cave’s high opening changes the light around its shrine, while Tam Thai Pagoda shows how sacred buildings occupy the slope. Below, Non Nuoc’s stone-working history belongs to a living neighborhood.",
      orientation: "This is a stair-and-cave visit, not a flat viewpoint stop. Start early while the climb is cooler; move slowly through Huyen Khong Cave and the pagoda precinct. Leave time for public craft displays at the base, and enter a workshop only when invited.",
      arrival: "A taxi or ride-hail from Da Nang is practical; agree a return pickup at the Ngu Hanh Son entrance. Vietnam Tourism describes the five outcrops, pagodas, caves and stone steps and recommends an early visit. Check current entrances, elevator service and permitted cave sections before setting a mobility plan.",
      sequence: "Follow the signed Thuy Son route to Huyen Khong Cave and Tam Thai Pagoda, then descend before adding a separate Non Nuoc craft stop. Wet stone makes the descent the limiting factor; after rain, shorten the loop instead of trying every chamber.",
      boundary: "Huyen Khong and Tam Thai remain places of worship. Keep voices low, follow photography signs, leave offerings and carvings untouched, and ask before photographing people or entering a workshop.",
      stages: [
        [
          "Choose the right route",
          "Check rain, stair access and mobility. Take a taxi or ride-hail, set a return pickup, carry water and keep hands free for the rails."
        ],
        [
          "Read rock and shrine together",
          "Follow signed paths to Huyen Khong Cave and Tam Thai Pagoda. Pause where cave light falls across the shrine, then make room for worshippers."
        ],
        [
          "Leave room for the descent",
          "Use handrails and skip slick or crowded branches. Do not climb onto altars, walls or closed rock formations for a view."
        ],
        [
          "Meet the craft neighborhood",
          "Use a public display or a workshop that welcomes visitors. Ask before photographing artisans; do not assume every stone object comes from local quarrying."
        ]
      ],
      risks: [
        [
          "Rain and footing",
          "Rain can make polished steps slick and cave passages harder to navigate. If footing is poor, shorten the signed loop or choose Da Nang’s indoor Cham Museum."
        ],
        [
          "Access and mobility",
          "The route has stairs, uneven rock and low ceilings. Ask which sections and elevator service are open before promising a summit or cave visit."
        ],
        [
          "A living shrine",
          "Follow temple signs on dress, photography and offerings. Keep entrances clear and give worshippers priority around altars."
        ]
      ],
      duration: "Allow about 2–3 hours for a focused Thuy Son cave-and-pagoda visit, plus road time and recovery. Add more time only if a public Non Nuoc display or workshop has confirmed visitor access; limited mobility may call for a lower-level visit.",
      combine: "A late-morning descent can lead to lunch toward Hoi An, but count that as a separate road leg. In heavy rain or intense heat, replace the exposed climb with Da Nang’s indoor Cham Museum of Sculpture.",
      verify: "Confirm which cave and stair routes are open, whether the elevator is operating, and the weather on the limestone steps. Vietnam Tourism describes an early start but does not publish a live access notice.",
      reviewDate: '8 October 2026',
      isoDate: '2026-10-08',
      countryCss: '/css/vietnam-da-nang-hoi-an.css?v=20261008-1',
      sources: [
        [
          "https://vietnam.travel/places-to-go/central-vietnam/da-nang",
          "Vietnam Tourism — Marble Mountains, early visit, taxis, Cham Museum and seasonal weather"
        ],
        [
          "https://danangfantasticity.com/en/non-nuoc-stone-village",
          "Da Nang Tourism — Non Nuoc stone village background; confirm workshop access locally"
        ]
      ],
      presentation: {
        "readingTitle": "Read the shrine and the stone together.",
        "routeTitle": "Climb slowly; descend before adding the village.",
        "checksLabel": "Before the climb",
        "checksTitle": "Steps, rain and worship shape the visit.",
        "checksLead": "The hills are close to Da Nang; the cave-and-stair sequence needs a measured pace.",
        "checksActionText": "Check access and footing",
        "faqLabel": "Ngu Hanh Son in practice",
        "faqTitle": "Caves, pagodas and the craft village",
        "boundaryTitle": "Let worship and workshop access lead."
      }
    },
    {
      slug: 'my-khe-an-thuong',
      name: 'My Khe Beach & An Thuong',
      motif: 'The city’s open edge',
      instrument: 'chart',
      instrumentLabel: 'shore',
      routeLead: "My Khe and An Thuong are two connected but distinct parts of Da Nang: take the shoreline in the morning, pause inland for shade, then finish among the neighborhood’s cafés and food streets.",
      boundaryLabel: "Beach and neighborhood care",
      arrivalLabel: "Getting to the public beach",
      image: image({
        src: '/assets/images/vietnam-da-nang-my-khe.webp',
        alt: 'My Khe Beach on the Da Nang coast',
        source: 'https://commons.wikimedia.org/wiki/File:My_Khe_Beach_18.jpg',
        label: 'My Khe Beach, Da Nang',
        creator: 'Christophe95',
        license: 'CC BY-SA 4.0',
        sourceDate: '2018-07-30'
      }),
      summary: 'Make My Khe a conditions-led beach morning and An Thuong a separate food-and-rest finish, with a real midday shade break if you stay out all day.',
      lead: 'My Khe is both a visitor shoreline and part of Da Nang’s ordinary morning life. Vietnam’s tourism authority describes residents exercising and working here as well as travelers using the coast. Plan around the sea conditions and public beach access, then move inland to An Thuong only after rinsing and drying off.',
      orientation: 'My Khe is a public, lived-in shoreline, while An Thuong is an inland food-and-café neighborhood. Plan one beach window and one neighborhood finish, with time to reset between them.',
      arrival: 'Take a taxi or ride-hail from central Da Nang to a public beach entrance and confirm the exact drop-off before getting out. My Khe and An Thuong are two separate legs divided by the coastal road, so choose your beach entrance and pickup before settling into the day.',
      sequence: 'My Khe stands on its own as a public shore visit; An Thuong is a separate neighborhood stop after the midday break.',
      boundary: 'Keep clear of fishing activity and equipment, leave the shore clean, and arrive dry at neighborhood businesses with sand kept outside.',
      stages: [
        ['Choose a swim or shore walk', 'Use the beach conditions guidance below to decide whether the morning is for swimming or walking.'],
        ['Walk the working shoreline', 'Use a public entrance and observe the morning exercise and fishing activity without blocking gear or taking close photos of people. Keep a dry change and drinking water ready before the sun rises higher.'],
        ['Break before the heat', 'Leave the sand for shade or an indoor pause through the middle of the day.'],
        ['Finish inland in An Thuong', 'Dry off and cross at a controlled point before choosing a café or meal. If the group is tired or the road is crowded, take a ride-hail rather than extending the walk in the heat.']
      ],
      risks: [
        ['Surf and current', 'Wind, tide, rip currents, storms and flags can change quickly. Lifeguard presence and local instructions outrank a calm-looking surface or a recommendation from an old travel post.'],
        ['Heat exposure', 'A full day needs a real indoor or shaded recovery block, water and sun protection. Shorten the beach visit when children, older travelers or heat-sensitive visitors are uncomfortable.'],
        ['Road and public access', 'The coastal road is busy and beach density changes by time of day. Cross at marked controls, use public entrances, and keep valuables secure while changing or resting.']
      ],
      duration: 'Use a half day for the morning shore and an An Thuong meal. Stay longer only with a shaded or indoor midday recovery; a full day is not continuous beach time.',
      combine: 'The riverfront is a separate urban half-day, while Son Tra and Hoi An each deserve their own outing. Do not pack the beach, peninsula roads and a long transfer into one day.',
      faqLastQuestion: 'What if swimming is not suitable?',
      verify: 'The route still works as a morning walk along My Khe, a shaded pause, and a dry move inland to An Thuong for food or coffee.',
      reviewDate: '8 October 2026',
      isoDate: '2026-10-08',
      countryCss: '/css/vietnam-da-nang-hoi-an.css?v=20261008-1',
      sources: [
        [
          'https://vietnam.travel/places-to-go/central-vietnam/da-nang',
          'Vietnam National Authority of Tourism — My Khe beach use and Da Nang local context; checked 8 October 2026'
        ],
        [
          'https://diadiem.danang.gov.vn/63-387-3363/Tourist-Sites/My-Khe-Beach.aspx',
          'Da Nang City Portal - My Khe lifeguard patrols and safe-swimming flags; checked 8 October 2026'
        ],
        [
          'https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html',
          'National Center for Hydro-Meteorological Forecasting — current weather and marine forecast; check for the visit date'
        ]
      ],
      presentation: {
        readingTitle: 'Let the sea set the morning.',
        routeTitle: 'Beach early; rest before An Thuong.',
        checksLabel: 'Before entering the water',
        checksTitle: 'Flags, lifeguards and the forecast lead.',
        checksLead: 'A beach walk still works when swimming conditions do not.',
        checksActionText: 'Check beach conditions',
        faqLabel: 'My Khe in practice',
        faqTitle: 'Swimming, heat and the An Thuong finish',
        boundaryTitle: 'Share the shore and the neighborhood.'
      }
    },
    {
      slug: 'hoi-an-ancient-town',
      name: 'Hoi An Ancient Town',
      motif: 'A living trading port',
      instrument: 'atlas',
      image: image({
        src: '/assets/images/vietnam-hoi-an-ancient-town.webp',
        alt: 'Historic shophouses in Hoi An Ancient Town',
        source: 'https://commons.wikimedia.org/wiki/File:H%E1%BB%99i_An,_Ancient_Town,_2020-01_CN-05.jpg',
        label: 'Hoi An Ancient Town',
        creator: 'Steffen Schmitz',
        license: 'CC BY-SA 4.0',
        sourceDate: '2020-01-22'
      }),
      summary: "Follow Hoi An’s river-facing shop rows through selected houses, an assembly hall and a bridge, with ticket and flood context in view.",
      lead: "Hoi An was an active Southeast Asian port from the 15th through 19th centuries. UNESCO records 1,107 timber-frame buildings in a street grid shaped by trade: shops face narrow lanes, while house backs open toward the Thu Bon for loading. Chinese, Japanese and later European influences remain legible in its houses and religious buildings; today it is still a lived-in commercial center.",
      orientation: "Read one cross-section, not a monument checklist: choose a preserved house and an assembly hall or temple, then the Japanese Covered Bridge or Quan Cong Temple according to current ticket choices. Notice how narrow lanes lead toward the river edge where port goods once moved through house backs.",
      arrival: "Travel from Da Nang by car, taxi or ride-hail, then walk inside the current walking-and-cycling zone. The conservation center notice posted 28 January 2026 and checked 8 October 2026 lists 80,000 VND and 120,000 VND ticket options with different monument and museum selections. Verify the live notice before paying.",
      sequence: "Use daylight for one or two ticketed interiors, compare timber structure and community use, then follow a lane toward the river quay. Return after dark only if the group wants the separate evening atmosphere and current walking hours allow it. The notice says one ticket can remain valid up to three days, so the visit need not be compressed.",
      boundary: "The heritage buildings are homes, worship spaces and working businesses. Follow ticket and photography rules, step aside for residents and deliveries, and ask before photographing anyone or looking through a private doorway.",
      stages: [
        [
          "Pick a short monument set",
          "Read current ticket choices. Select a preserved house, an assembly hall or temple, and the bridge or Quan Cong Temple if it fits your interests."
        ],
        [
          "Look at the house plan",
          "Compare shopfronts, timber frames, tiled roofs and family worship spaces. The narrow lanes show how the buildings relate better than isolated stops."
        ],
        [
          "Find the port working edge",
          "Walk toward the quay and look back at the grid: UNESCO describes house backs opening to the river for loading. Stay in public areas and keep the quay clear."
        ],
        [
          "Choose the evening separately",
          "Rest outside the busiest lane, then return for lantern-lit streets if the pedestrian window and weather suit the group. A second visit is easier than crowding every interior into one circuit."
        ]
      ],
      risks: [
        [
          "Ticket choices and price",
          "The center’s 28 January 2026 notice lists 80,000 VND and 120,000 VND options with selected monument and museum entries, not unrestricted entry to every building. Recheck current prices before purchase."
        ],
        [
          "River and rain",
          "UNESCO identifies annual flooding as a management concern. After heavy rain, check town notices and water conditions before using low river lanes; prioritize accessible interiors if streets remain open."
        ],
        [
          "Town hours",
          "Pedestrian and cycling periods vary by season in the visitor notice. Check the current window before arranging a car drop-off or evening return; do not assume a vehicle can reach old-town lanes."
        ]
      ],
      duration: "A selected monument walk takes about 3–4 hours at an unhurried pace. Split it across cooler windows if you want interiors and evening lanes; the center’s notice says a ticket can be used during a stay of up to three days, subject to its terms.",
      combine: "Keep My Son as a separate inland drive. Add a countryside stop only when the town still has a full daylight block. In persistent rain, prioritize open ticketed interiors and check water or access notices before walking low riverfront lanes.",
      verify: "Check the heritage center notice for ticket price, monument choices, validity, performance times and walking-and-cycling windows. The price snapshot is from its 28 January 2026 notice, checked 8 October 2026; floods and access can change sooner.",
      reviewDate: '8 October 2026',
      isoDate: '2026-10-08',
      countryCss: '/css/vietnam-da-nang-hoi-an.css?v=20261008-1',
      sources: [
        [
          "https://whc.unesco.org/en/list/948",
          "UNESCO — Hoi An port history, timber-frame town and river-facing street plan"
        ],
        [
          "https://hoianheritage.danang.gov.vn/en/news/news-events/announcement-of-the-visiting-in-hoi-an-ancient-town-125.html",
          "Hoi An World Cultural Heritage Conservation Center — ticket choices and pedestrian windows; posted 28 January 2026, checked 8 October 2026"
        ]
      ],
      presentation: {
        "readingTitle": "Read a port in the shape of its houses.",
        "routeTitle": "Choose a few interiors, then find the quay.",
        "checksLabel": "Before you enter",
        "checksTitle": "Tickets, water level and town hours.",
        "checksLead": "Ticket choices are selective; river access and pedestrian windows can change with weather and season.",
        "checksActionText": "Check the visitor notice",
        "faqLabel": "Reading the old town",
        "faqTitle": "A working port, visited at walking pace",
        "boundaryTitle": "Treat each doorway as somebody’s space."
      }
    },
    {
      slug: 'my-son-sanctuary',
      name: 'My Son Sanctuary & Cham Heritage',
      motif: 'Brick towers in a valley',
      instrument: 'roadbook',
      image: image({
        src: '/assets/images/vietnam-my-son-sanctuary.webp',
        alt: 'Temple E7 at My Son Sanctuary in Vietnam',
        source: 'https://commons.wikimedia.org/wiki/File:2024_-_M%E1%BB%B9_S%C6%A1n_Sanctuary_Temple_E7_-_img_01.jpg',
        label: 'My Son Sanctuary Temple E7',
        creator: 'Chainwit.',
        license: 'CC BY 4.0',
        sourceDate: '2024-08-02'
      }),
      summary: "Follow My Son’s Cham tower groups through a forested valley, with brick craft, sacred history and marked visitor routes in focus.",
      lead: "From the 4th to 13th centuries, My Son served as a religious and political center of Champa. Its tower-temples use fired brick, stone pillars and sandstone reliefs; their forms record Cham religious and political life, including a strong Hindu tradition. Conflict damaged many structures, and conservation continues in a humid valley ringed by hills at the source of the Thu Bon River.",
      orientation: "This is an archaeological landscape, not a single temple. Use current visitor transport if operating, then follow the marked route between standing groups and interpreted ruins. Compare brick joints and sandstone reliefs; damaged areas and barriers are part of its history and conservation.",
      arrival: "Arrange a confirmed return car or regulated excursion from Hoi An or Da Nang. Hoi An makes the shorter road day; from Da Nang, allow most of a day for the return and valley walk. Management lists electric-car and audio-guide services; confirm what is running on your date.",
      sequence: "Leave early enough to reach the exposed valley before peak heat. Read the entrance interpretation, use any operating visitor shuttle, then walk the official sequence steadily. Do not cross barriers or leave signed paths: UNESCO notes unresolved UXO risk in parts of the buffer, as well as humidity and flood exposure.",
      boundary: "Stay on marked visitor paths and obey barriers, including where the forest edge looks open. Do not touch or climb towers, remove soil or artifacts, or enter closed areas; buffer-zone UXO risk is not visible on the ground.",
      stages: [
        [
          "Confirm the return",
          "Arrange a car or regulated excursion with clear pickup and return. Check the management notice, weather and current visitor transport before departure."
        ],
        [
          "Place the valley in context",
          "Read official interpretation before entering the tower groups. The hills and Thu Bon headwaters explain why this was a sacred and strategic landscape."
        ],
        [
          "Compare brick and relief",
          "Follow the marked circuit and look at fired-brick construction, stone supports and sandstone figures. Damaged towers and conservation boundaries show what survives after conflict and restoration."
        ],
        [
          "Keep the road leg open",
          "Use the confirmed pickup and allow time for heat, rain or a slower walk. If the site closes or severe weather arrives, shift to indoor Cham collections in Da Nang or heritage interiors in Hoi An."
        ]
      ],
      risks: [
        [
          "Weather in the valley",
          "My Son is humid and exposed; UNESCO notes flooding and climatic stress. Start in the morning. For heavy rain or unsafe paths, use a museum or old-town interior instead."
        ],
        [
          "Visitor transport",
          "The management site lists electric-car and audio-guide services, but a listing does not confirm same-day operation. Ask directly and plan to walk if transport is unavailable."
        ],
        [
          "No path shortcuts",
          "UXO risk remains unresolved in parts of the buffer. Stay on designated routes, respect barriers and never enter forest or closed archaeological ground."
        ]
      ],
      duration: "From Hoi An, plan a morning half-day with several hours among the monument groups and a return buffer. From Da Nang, reserve most of the day for road time and the exposed walk. Mobility, heat, rain or a slower interpretation visit can extend the schedule.",
      combine: "Do not attach another long drive to the return. If heavy rain or heat makes the valley a poor fit, visit Da Nang’s Cham Museum of Sculpture or return to Hoi An for ticketed timber houses and assembly halls; each gives related history in a different setting.",
      verify: "Check My Son’s visitor-notice page for entry, road and transport arrangements; ask whether listed electric cars or audio guides are operating. Review weather and closure notices, and keep the visit on designated paths.",
      reviewDate: '8 October 2026',
      isoDate: '2026-10-08',
      countryCss: '/css/vietnam-da-nang-hoi-an.css?v=20261008-1',
      sources: [
        ['https://whc.unesco.org/en/list/949', 'UNESCO — My Son Cham history, fired-brick temples, conservation, flooding and UXO context'],
        ['https://mysonsanctuary.com.vn/tin-tuc/thong-tin-du-khach', 'My Son Sanctuary Management Board — current visitor notices; recheck road and entry arrangements'],
        ['https://mysonsanctuary.com.vn/dich-vu.html', 'My Son Sanctuary Management Board — listed electric-car and audio-guide services; confirm current operation'],
        ['https://vietnam.travel/places-to-go/central-vietnam/da-nang', 'Vietnam Tourism — Da Nang Cham Museum of Sculpture as an indoor alternative']
      ],
      presentation: {
        readingTitle: 'See the tower groups as one sacred valley.',
        routeTitle: 'Arrive early; walk the signed sequence.',
        checksLabel: 'Before the inland drive',
        checksTitle: 'Heat, transport and marked ground.',
        checksLead: 'The coast-to-valley road and open-air circuit need a return buffer, especially in wet weather.',
        checksActionText: 'Check the site notice',
        faqLabel: 'Visiting the sanctuary',
        faqTitle: 'Cham history in an upland setting',
        boundaryTitle: 'Keep every step on marked ground.'
      }
    }
  ]
});

const daNangDecisionOverrides = {
  "marble-mountains-non-nuoc": [
    [
      "Read the site",
      "Five limestone hills frame shrines. On Thuy Son, Huyen Khong Cave and Tam Thai Pagoda reveal the religious landscape better than a quick summit photograph."
    ],
    [
      "Time and effort",
      "Budget 2–3 hours for the signed circuit, plus stairs, queues and rest. A lower-level visit is a good alternative when steep or wet steps are a poor fit."
    ],
    [
      "Worship and craft",
      "Keep the cave quiet and offerings undisturbed. Non Nuoc is a working craft neighborhood; enter a workshop only by invitation."
    ]
  ],
  "hoi-an-ancient-town": [
    [
      "Port history",
      "The 15th–19th-century port survives in timber house rows: street-facing shops and river-facing backs made a working commercial plan, not a decorative set."
    ],
    [
      "Choose interiors",
      "The center’s 28 January 2026 notice lists 80,000 VND and 120,000 VND options with different monument and museum choices. Check the live notice and select a small set."
    ],
    [
      "Shared town",
      "Residents, worshippers, shopkeepers and deliveries still use these lanes. Give doorways space, follow each house’s rules and ask before taking portraits."
    ]
  ],
  "my-son-sanctuary": [
    [
      "Cham sanctuary",
      "My Son’s towers formed a religious and political center of Champa from the 4th to 13th centuries. Fired brick, stone pillars and sandstone reliefs reveal engineering and worship."
    ],
    [
      "Road and time",
      "From Hoi An, make this a morning half-day with a return driver. From Da Nang, allow most of a day; confirm pickup and whether visitor transport is operating."
    ],
    [
      "Marked ground",
      "UNESCO records unresolved UXO risk in parts of the buffer. Stay on signed paths even when an unmarked area looks accessible."
    ]
  ]
};
for (const guide of daNangHoiAn.guides) {
  const decisions = daNangDecisionOverrides[guide.slug];
  if (decisions) guide.decisions = decisions;
}

const nhaTrangKhanhHoa = defineVietnamCluster({
  slug: 'nha-trang-khanh-hoa',
  name: 'Nha Trang & Khanh Hoa Coast',
  region: 'South-Central Coast',
  family: 'reef-compass',
  label: 'Bay, reef and long-coast transfers · South-Central Vietnam',
  tagline: 'Plan the sea only after the forecast agrees.',
  reviewDate: '13 October 2026',
  isoDate: '2026-10-13',
  hubIntro: 'Nha Trang is a useful sea-and-city base only when the trip separates the public-facing central shoreline, the active Po Nagar shrine, the northern Hon Chong lookout and a conditional Hon Mun boat day. Count full days after arrival, choose one bed before adding a distant coast, and treat protected-water access as a permission to verify rather than a tour promise.',
  stay: 'Keep one central Nha Trang base for beach, food, Po Nagar and city transport. Two nights allow one full city day; three can add a separate culture or sea day; four leave one movable weather day. Choose Cam Ranh–Bai Dai only for a confirmed airport-side resort stay with its own road pickup, not as a walkable substitute for Nha Trang.',
  transfer: 'Vietnam Tourism lists Cam Ranh International Airport about 30 km south and the train station in the city centre. Confirm your actual airport or rail pickup with the lodging provider. Name the boat operator, departure pier, allowed route and return before choosing Hon Mun; never put a boat directly before a flight or train.',
  nightPlan: {
    kicker: 'Nights, bases and sea-weather slack',
    title: 'Count full days after the road transfer',
    intro: 'Arrival and departure days are connection days, not sightseeing days. Central Nha Trang keeps the short city and culture routes together; a Bai Dai bed trades that access for a quieter, airport-side coast.',
    options: [
      ['2 nights', 'One base, one complete city day', 'Sleep in central Nha Trang and use the full day for the public-facing Tran Phu shore, a shaded meal and one city choice. Keep Po Nagar or Hon Chong as a short, separately confirmed addition; do not make a boat or inland waterfall essential to this stay.'],
      ['3 nights', 'Separate the city and culture days', 'Keep the same central bed. Give one day to the beach-city loop and another to Po Nagar plus Hon Chong, with road transfers between distinct areas. A Hon Mun day can replace one of those choices only after the bay authority, named operator, departure pier, route, weather decision and return are all confirmed.'],
      ['4 nights', 'Hold one day open for weather', 'Use two full days for the city and north-coast culture, one conditional marine day, and one unbooked reserve. Move the boat only when the responsible operator reconfirms; if access or weather remains unresolved, keep the spare day on land or reschedule.']
    ],
    footerTitle: 'Change bases only to solve a confirmed last mile',
    footer: 'A Cam Ranh–Bai Dai stay is for travelers prioritizing that coast and a hotel-confirmed airport transfer; it adds a road leg to central Nha Trang. Central Nha Trang is the simpler base for the station, city beach and Po Nagar. A second hotel adds check-out and transfer friction, so consider a split only with four or more nights and a booked onward vehicle. Do not use an unconfirmed island boat to connect to a fixed departure.'
  },
  routeModelHeading: 'Put the city first and the bay on its own day.',
  routeModelLead: 'Arrival → one central base → Tran Phu city route → Po Nagar and Hon Chong by a separate road hop → Hon Mun only as a confirmed full-day boat → departure with a land-side buffer. Two nights mean one full day; three nights allow a second purpose; four nights make a weather reserve possible. If the bay authority, operator, pier, access or forecast does not support the outing, keep the day in town or reschedule; do not shop for another unverified boat.',
  sources: [
    ['https://vietnam.travel/node/220', 'Vietnam Tourism — Nha Trang, Cam Ranh airport, central train station and broad seasonal context (checked 13 October 2026; not a live transfer or sea forecast)'],
    ['https://dulichso.khanhhoa.gov.vn/en/article/nha-trang-bay-13c', 'Khanh Hoa Department of Culture, Sports and Tourism — Nha Trang Bay and its coastal arcs (checked 13 October 2026; not an access permit or boat schedule)'],
    ['https://nbca.gov.vn/khu-du-tru-thien-nhien-vinh-nha-trang-khanh-hoa/', 'National Biodiversity Conservation — Nha Trang Bay Nature Reserve (page updated 16 June 2026; reserve status does not establish visitor access)'],
    ['https://www.nchmf.gov.vn/kttv/vi-VN/1/thoi-tiet-bien-24h-s12h3-15.html', 'National Centre for Hydro-Meteorological Forecasting — 24-hour marine bulletin for 13 October 2026 (dated regional snapshot, not a future forecast or Hon Mun go/no-go)']
  ],
  guides: [
    {
      slug: 'nha-trang-city-beach',
      name: 'Nha Trang City & Tran Phu Beach',
      motif: 'The public shoreline',
      instrument: 'docket',
      reviewDate: '13 October 2026',
      isoDate: '2026-10-13',
      sources: [
        ['https://vietnam.travel/node/220', 'Vietnam Tourism — Cam Ranh airport, city train station, Nha Trang Beach and broad wet-season context (checked 13 October 2026; no live pickup or lifeguard status)'],
        ['https://dulichso.khanhhoa.gov.vn/en/article/nha-trang-bay-13c', 'Khanh Hoa Department of Culture, Sports and Tourism — Tran Phu coastal arc and public shoreline context (checked 13 October 2026)'],
        ['https://www.nchmf.gov.vn/kttv/vi-VN/1/thoi-tiet-bien-24h-s12h3-15.html', 'National Centre for Hydro-Meteorological Forecasting — dated 13 October 2026 marine bulletin; check the forecast issued for your own visit date']
      ],
      image: image({
        src: '/assets/images/vietnam-nha-trang-beach.webp',
        alt: 'Nha Trang city beach on Vietnam’s south-central coast',
        source: 'https://commons.wikimedia.org/wiki/File:Beach_at_Nha_Trang,_Vietnam.jpg',
        label: 'Beach at Nha Trang, Vietnam',
        creator: 'Bruce Tuten',
        license: 'CC BY 2.0'
      }),
      searchKeywords: ['tran phu beach public access', 'nha trang beach swimming flags', 'cam ranh airport transfer', 'nha trang train station'],
      summary: 'Make a central Nha Trang day from the Tran Phu shoreline, a current swim decision and a shaded city break; do not assume a resort frontage is a public entry.',
      lead: 'The city beach is not a single guaranteed swim zone. Tran Phu faces Nha Trang Bay, but the route still depends on which shore sections are publicly approachable, whether staff or flags identify a safe swim area, and how much sun the group can handle. Keep the walk useful even when the water is not.',
      orientation: 'Stay centrally when the goal is a beach-and-city day: the official Vietnam Tourism profile places the rail station in the centre and Cam Ranh Airport about 30 km south, while listing airport shuttles, taxis and ride-hailing as options. That profile gives general orientation, not your hotel’s pickup, a current fare or a live beach-safety notice. Confirm the airport road leg with your lodging before booking a first or last night.',
      arrival: 'Start from a named central hotel and use its confirmed road or station pickup. At the shore, remain on public promenade or clearly signed public access; a hotel pool or resort frontage is a separate facility and does not establish a public path through it. No current lifeguard roster, flag status or swim boundary was verified for this review.',
      sequence: 'Use the cooler part of the day for a Tran Phu promenade walk, then choose one clearly public shore section to assess. Check the day’s local warning flag, lifeguard presence, wave and rain conditions before anyone enters. Leave the shoreline for a meal and shade, then return only if the public path remains open and the group still wants another short look.',
      boundary: 'Separate public promenade, public beach, paid resort facilities and working shore uses. Follow flags, lifeguards and posted access signs; keep clear of fishing gear and service vehicles, and do not cross a hotel boundary because the sand appears continuous.',
      routeDiagram: {
        kind: 'flow',
        title: 'Keep the city route complete if swimming is off.',
        intro: 'The official city profile supports a central rail anchor and airport-side road transfer, but it does not publish live swim flags, public gates or lifeguard coverage. Start with access that you can confirm on the day.',
        steps: [
          ['Base', 'Confirm one central bed', 'Ask the accommodation to name its airport or station pickup and the nearest public-facing shore access; do not plan around a private resort entrance.'],
          ['Shore', 'Walk the open Tran Phu edge', 'Stay on signed public paths and note where promenades, facilities and working activity meet before selecting a beach section.'],
          ['Water call', 'Use today’s local signal', 'Enter only if the current flag, lifeguard or responsible staff and sea conditions support it. If no clear signal is present, treat the swim as cancelled.'],
          ['Reset', 'Return inland for shade', 'Use a meal, café or cultural stop whose current access you confirm; keep the beach walk as a valid half-day even without a swim.']
        ],
        fallbackTitle: 'If access or swim status is unclear',
        fallback: 'Do not search along resort fences or enter from an unmarked lane. Stay on the confirmed public promenade, take the planned shade break and keep a separate city visit for another date.'
      },
      stages: [
        ['Fix the base leg', 'Keep central Nha Trang as the walkable city base, but confirm the airport or rail pickup with the lodging; Cam Ranh Airport is a separate road transfer.'],
        ['Walk before choosing', 'Follow the public Tran Phu edge and read the shore signs, facilities and working activity instead of assuming every stretch works as one beach entrance.'],
        ['Decide whether to swim', 'Check the live flag, lifeguard or staff instruction, wave and rain. An unclear boundary means no swim, even if the water looks calm.'],
        ['Finish in shade', 'Take a confirmed meal or indoor rest, then return to the promenade only if access, light and weather still suit the group.']
      ],
      risks: [
        ['No live swim signal', 'No date-specific lifeguard roster or flag status was verified in the official material checked 13 October 2026. Use the responsible local signal on the day; if absent, do not swim.'],
        ['Heat and rain', 'Nha Trang Tourism’s broad profile describes a wet season from September to December, but this is not a visit-day forecast. Carry water, build in shade and check the current warning before setting out.'],
        ['Crossing the coast road', 'Scooters and coastal traffic can separate the promenade from the sand. Use marked crossings and do not treat a map pin on the opposite side as a safe entry.']
      ],
      duration: 'Treat the shore walk and a shaded meal as a half-day plan; add time only for a confirmed cultural stop or a swim that is safe on the day. These are planning allowances, not measured visit times.',
      combine: 'Po Nagar and Hon Chong make a separate north-city route with road transfers. Keep Hon Mun, Ba Ho and the airport-side coast off this short city loop.',
      verify: 'Check today’s public access signs, swim flags or lifeguard instruction, weather and the hotel’s arrival/departure transfer. The 13 October 2026 NCHMF bulletin is a dated example only, not a forecast for later travel.'
    },
    {
      slug: 'po-nagar-hon-chong',
      name: 'Po Nagar Cham Towers & Hon Chong',
      motif: 'Mother of the land, stone of the bay',
      instrument: 'compass',
      reviewDate: '13 October 2026',
      isoDate: '2026-10-13',
      sources: [
        ['https://dulichso.khanhhoa.gov.vn/en/article/po-nagar-cham-towers-a-millennium-old-heritage-7f7', 'Khanh Hoa Department of Culture, Sports and Tourism — Po Nagar Cham Towers, cultural meaning, access and posted hours (checked 13 October 2026; reconfirm current entry at the site)'],
        ['https://dulichso.khanhhoa.gov.vn/en/article/nha-trang-bay-13c', 'Khanh Hoa Department of Culture, Sports and Tourism — Hon Chong and the northern Nha Trang Bay arc (checked 13 October 2026; no separate viewpoint opening notice)'],
        ['https://www.nchmf.gov.vn/kttv/vi-VN/1/thoi-tiet-bien-24h-s12h3-15.html', 'National Centre for Hydro-Meteorological Forecasting — 13 October 2026 coastal bulletin; use the latest issue for the visit date']
      ],
      image: image({
        src: '/assets/images/vietnam-po-nagar.webp',
        alt: 'Po Nagar Cham Towers in Nha Trang',
        source: 'https://commons.wikimedia.org/wiki/File:PonNagarChamTowers.jpg',
        label: 'Po Nagar Cham Towers',
        creator: 'wileypics',
        license: 'CC BY 2.0'
      }),
      searchKeywords: ['po nagar opening hours', 'po nagar cham shrine', 'cu lao hill cai river', 'hon chong viewpoint public access'],
      summary: 'Read Po Nagar as a living Cham and Mother Goddess shrine, then take a separate road hop to the public-facing Hon Chong bay view if access and rock conditions allow.',
      lead: 'Po Nagar is not a backdrop to the beach: the Khánh Hòa tourism platform describes a sacred shared space shaped by Cham worship of Po Nagar and local Kinh Mother Goddess practice. Hon Chong then changes the scale from tower and river mouth to the bay’s northern coast. The route connects them by interpretation and a confirmed transfer, not by assuming one continuous walk.',
      orientation: 'The provincial platform places Po Nagar on Cù Lao Hill beside the Cái River and dates its towers from the mid-8th to the 13th century. It lists 06:00–17:30 as the site’s posted hours when checked on 13 October 2026; treat that as a dated lookup, reconfirm before travelling, and expect ritual activity or staff direction to shape what is open. Its description notes a steep stair to the upper precinct and a southern visitor stair; ask which path is currently available and whether it suits your group.',
      arrival: 'From a confirmed central Nha Trang base, arrange a road ride to the listed Tháp Bà Ponagar address on 2 Tháng 4 Street in Vĩnh Phước. Do not infer a walkable, step-free link from the map. After the shrine, set a second road pickup for Hon Chong; the exact roadside stop and currently open public viewpoint were not verified in this review.',
      sequence: 'Visit Po Nagar first while the posted hours leave time for an unhurried shrine visit. Read the public interpretation, follow staff directions on which visitor stair is open, and stay clear of any closed approach; then ride to Hon Chong only if its public viewpoint is open and the rocks are dry enough for safe footing. Look from stable public ground toward the bay, Cái River mouth and city; do not climb boulders or descend toward waves.',
      boundary: 'At Po Nagar, dress and behave respectfully, keep worship routes clear, ask before photographing people and do not touch offerings, sculptures or restricted rooms. At Hon Chong, keep to permitted public paths, leave fragile rock in place and do not make a sea-edge climb part of the itinerary.',
      routeDiagram: {
        kind: 'flow',
        title: 'Shrine first, then a confirmed north-coast transfer.',
        intro: 'The official platform gives Po Nagar’s cultural context and a dated posted-hours snapshot. It does not establish a guaranteed transfer, live ceremony schedule or Hon Chong access status.',
        steps: [
          ['Base', 'Set the road pickup', 'Confirm the Po Nagar drop-off and a separate return/pickup after the shrine; keep enough time to reach the second stop without rushing worship.'],
          ['Shrine', 'Read the public precinct', 'Use only the approach the site staff currently permit. The upper approach has steep steps; choose the southern visitor stair only if it is open and workable for your group.'],
          ['Transfer', 'Ride to Hon Chong', 'Confirm the public entry and stopping point before leaving the shrine; do not assume the headland is a continuous public footpath.'],
          ['View', 'Stay on stable ground', 'Read the northern bay arc from an open public viewpoint, then return by the agreed road pickup before rain, rough rock or fading light.']
        ],
        fallbackTitle: 'If the shrine or viewpoint is closed',
        fallback: 'Respect the closure and keep the rest of the day in a confirmed central-city area. Do not substitute a restricted worship space, climb around a gate or treat a closed rock edge as a viewpoint.'
      },
      stages: [
        ['Confirm the two stops', 'Check Po Nagar’s currently posted access and arrange the separate road transfer to an open Hon Chong viewpoint before setting the order.'],
        ['Visit the living shrine', 'Read the official Cham and Mother Goddess context, follow the designated stair and staff directions, and give worshippers room.'],
        ['Cross north by road', 'Use a confirmed driver or ride between the river-mouth shrine and Hon Chong; no fixed walk, fare or journey time is claimed.'],
        ['Read the bay safely', 'Use a public stable viewpoint only. If rain, waves, a closure or uneven rock makes the edge unsafe, turn back and finish in town.']
      ],
      risks: [
        ['Stairs and mobility', 'The official Po Nagar description records a steep stair to the upper precinct and a southern visitor stair. Confirm which is open and whether either works for your group; no step-free route was verified.'],
        ['Ritual access', 'Po Nagar remains an active shared spiritual place. The dated hours do not guarantee every room or stair is open during worship or maintenance.'],
        ['Rock and sea', 'Wet stone, waves and sudden rain make Hon Chong’s edge a poor place to improvise. Stay on the signed public viewpoint and leave if footing or access is unclear.']
      ],
      duration: 'Use a half day as an editorial allowance for two separate stops and road transfers; neither the time nor a live site schedule is an operator guarantee.',
      combine: 'A central beach-city meal can complete the day if its public access is confirmed. Keep the Hon Mun boat and Ba Ho inland route on different full days.',
      verify: 'Recheck the official Po Nagar visitor page and hours, ask staff about the usable stair and shrine boundaries, confirm Hon Chong’s public entry, and check rain, sea-edge conditions and both road pickups.'
    },
    {
      slug: 'hon-mun-island-marine-route',
      name: 'Hon Mun Island Marine Route',
      motif: 'Reef before recreation',
      instrument: 'expedition',
      reviewDate: '13 October 2026',
      isoDate: '2026-10-13',
      sources: [
        ['https://nbca.gov.vn/khu-du-tru-thien-nhien-vinh-nha-trang-khanh-hoa/', 'National Biodiversity Conservation — Nha Trang Bay reserve and Hon Mun reef context (updated 16 June 2026; not a visitor permit or current open-zone notice)'],
        ['https://dulichso.khanhhoa.gov.vn/en/article/nha-trang-bay-13c', 'Khanh Hoa Department of Culture, Sports and Tourism — bay and island geography (checked 13 October 2026; not a tour timetable)'],
        ['https://dulichso.khanhhoa.gov.vn/en/article/things-to-know-when-traveling-by-boat-or-ferry-to-islands-1f7', 'Khanh Hoa Department of Culture, Sports and Tourism — boat safety, life-jacket use and crew authority (checked 13 October 2026)'],
        ['https://www.nchmf.gov.vn/kttv/vi-VN/1/thoi-tiet-bien-24h-s12h3-15.html', 'National Centre for Hydro-Meteorological Forecasting — marine bulletin for Gia Lai–Khánh Hòa dated 13 October 2026; recheck the issue for your own travel date']
      ],
      image: image({
        src: '/assets/images/vietnam-hon-mun.webp',
        alt: 'Hon Mun Island in Nha Trang Bay',
        source: 'https://commons.wikimedia.org/wiki/File:Hon_Mun_island_%28H%C3%B2n_Mun%29%2C_Cam_Ranh%2C_Nha_Trang%2C_Vi%E1%BB%87t_Nam_20140518_105634_%28taken_with_Samsung_Galaxy_Note_3%29.jpg',
        label: 'Hon Mun Island, Nha Trang Bay',
        creator: 'Nguyen Hung Vu',
        license: 'CC BY 2.0'
      }),
      searchKeywords: ['hon mun reserve access', 'nha trang bay coral permit', 'hon mun boat pier', 'nha trang marine forecast'],
      summary: 'Treat Hon Mun as a conditional marine outing: verify the current protected-zone rules, named operator, actual pier, allowed activity, weather cancellation and return before paying.',
      lead: 'Hon Mun’s reef is part of a nature-reserve system, not a promise that every tour may land, snorkel or enter every zone. The national biodiversity authority’s page describes protected waters and ecological pressure; it does not authorize a specific traveler, boat or reef site. Choose the marine day only after the bay authority and the responsible operator confirm what is lawful and operating on your date.',
      orientation: 'Decide first whether the group wants a boat view or an in-water activity; those are different safety and access choices. The official NCHMF bulletin checked for 13 October 2026 described showers and thunderstorms in the Gia Lai–Khánh Hòa marine area, with possible strong gusts and 1–2 m waves, higher during storms. That is a dated regional snapshot, not a forecast for another day, a specific reef or a go/no-go rule. Recheck the latest bulletin and follow the responsible marine authority and captain.',
      arrival: 'No current Hon Mun visitor zone, public landing, tour permit, licensed-operator roster, departure pier, ticket condition or cancellation policy was verified for this review. Before paying, obtain the operator’s legal identity and exact pier, named route and activity areas, vessel and crew information, life-jacket policy, return time and refund/reschedule terms. Ask the Nha Trang Bay Management Board which zones are currently open; a nature-reserve page or old tour listing is not clearance.',
      sequence: 'Check the bay-management notice and forecast before the day; then reconfirm the same route, pier, vessel and return with the operator. At the pier, follow crew instructions and remain seated underway. Enter water only inside a specifically approved activity zone and only if the operator permits the conditions. If weather, access or safety changes, end the boat plan and return to the confirmed base rather than trying a different island or pier.',
      boundary: 'Keep the reef and passenger boundary intact: follow the current protected-area rules, use a correctly fastened life jacket when instructed, stay seated while the vessel moves, and never stand on, touch, feed, collect from or anchor on reef habitat. Do not enter a closed zone even if another boat is visible there.',
      routeDiagram: {
        kind: 'flow',
        title: 'Permission, weather and the return must all agree.',
        intro: 'The reserve reference establishes conservation context but not visitor access. Treat each trip as conditional until the bay authority and the actual operator name the same lawful route.',
        steps: [
          ['Before booking', 'Ask the bay authority', 'Verify whether Hon Mun and the proposed reef or landing zone are currently open to that activity; if the answer is absent, do not infer permission.'],
          ['Name the service', 'Record the actual pier and boat', 'Confirm operator identity, vessel, crew, safety equipment, exact route, passenger terms, return and weather cancellation in writing.'],
          ['Day of departure', 'Use current marine information', 'Check the latest NCHMF issue and follow the captain or authority. A dated forecast or a calm view from the hotel is not clearance.'],
          ['Return', 'Keep the land connection loose', 'Return to the named pier and leave a substantial buffer before onward rail or air travel; if the responsible party cancels, stay ashore.']
        ],
        fallbackTitle: 'If any access or safety answer is missing',
        fallback: 'Cancel or postpone the outing. Use the already confirmed city beach walk without swimming, or the Po Nagar–Hon Chong route only if those land sites are independently open; do not search for another boat, reef or operator.'
      },
      stages: [
        ['Check protection first', 'Ask the Nha Trang Bay Management Board whether the named Hon Mun zone and activity are open today; the reserve description itself does not grant entry.'],
        ['Confirm the vessel', 'Get the exact pier, operator, boat, crew, route, safety equipment, return point and written cancellation conditions before payment.'],
        ['Use today’s decision', 'Recheck the current marine bulletin and obey the captain or authority. If the outing is cancelled, remain ashore rather than bargain for an unverified replacement.'],
        ['Protect the return', 'Use only the approved water area, keep life-jacket and reef rules, then return to the same confirmed pier with no tight flight or train connection.']
      ],
      risks: [
        ['Current zone unknown', 'The National Biodiversity Conservation page updated 16 June 2026 describes the reserve and Hon Mun habitat, but not current tourist permission, zone boundaries, fees or landings. Ask the bay authority.'],
        ['Marine weather changes', 'The 13 October 2026 Gia Lai–Khánh Hòa bulletin was a one-day snapshot with possible storms and higher waves during storms. It cannot be reused as a later travel forecast.'],
        ['Vessel and crew', 'The provincial boat-safety guide says to follow crew instructions, stay seated underway and wear the life jacket properly. If the actual operator or equipment is unclear, do not board.']
      ],
      duration: 'Reserve the whole daylight day plus road-to-pier and return slack. This is a planning shape, not a promise that a tour operates for that length or that Hon Mun access is granted.',
      combine: 'A central-city meal is optional only after the boat returns on time. Do not pair with a flight, train, Ba Ho drive or another paid tour on the same tight schedule.',
      verify: 'Check the current Nha Trang Bay Management Board notice, the latest NCHMF marine issue and the named operator’s permit, route, actual pier, safety terms and cancellation decision immediately before departure.'
    },
    {
      slug: 'cam-ranh-bai-dai',
      name: 'Cam Ranh & Bai Dai Coast',
      motif: 'The airport-side coast',
      instrument: 'ledger',
      image: image({
        src: '/assets/images/vietnam-cam-ranh.webp',
        alt: 'Cam Ranh coast in Khanh Hoa',
        source: 'https://commons.wikimedia.org/wiki/File:Bi%E1%BB%83n_Cam_Ranh.jpg',
        label: 'Cam Ranh Sea',
        creator: 'GDAE',
        license: 'CC BY-SA 4.0'
      }),
      summary: 'Use Cam Ranh and Bai Dai as an airport-linked coast chapter for quiet beach stays, arrival logistics and a different pace from central Nha Trang.',
      lead: 'Cam Ranh is useful when the trip needs a calm airport-side base or a deliberate resort coast, not when a traveler wants to walk to Nha Trang’s city heritage every morning.',
      orientation: 'Make the lodging decision first: central Nha Trang prioritizes access and services, while Bai Dai prioritizes a quieter, more self-contained shore.',
      arrival: 'Confirm the hotel’s airport transfer, public-road access, meals, freshwater and onward transport. Resort areas can be visually close but practically far apart.',
      sequence: 'Arrive with daylight if possible, settle the transfer and swimming plan, use the beach only within current safety guidance, then protect the next airport, rail or city connection.',
      boundary: 'Respect public shore, resort rules and restricted facilities; do not enter military, port or construction areas, and do not describe a private beach as universally accessible.',
      stages: [
        ['Choose the launchpad', 'Compare airport distance, hotel transfer, city access and services before booking the coast as a base.'],
        ['Check the beach', 'Read flags, lifeguard coverage, tide and current before swimming; a quiet shoreline may have fewer safety services.'],
        ['Keep the coast quiet', 'Use public access and resort facilities as permitted, avoid restricted areas and keep noise and litter away from the shore.'],
        ['Protect the departure', 'Confirm the next transfer with a generous margin; never place a long boat or uncertain road segment immediately before a flight.']
      ],
      risks: [
        ['Transfer distance', 'Cam Ranh, Bai Dai and central Nha Trang are different bases; hotel shuttles and taxis may not operate like city transit.'],
        ['Swimming conditions', 'Currents, waves, tides and lifeguard coverage vary by beach and day; follow current flags and local staff.'],
        ['Restricted access', 'Military, port, construction and private-resort boundaries can be unclear from a map; follow signs and do not improvise a shortcut.']
      ],
      duration: 'Use at least one unhurried coast day or an intentional arrival/departure night; it is not an efficient add-on to every Nha Trang itinerary.',
      combine: 'Combine with a southern coastal transfer only when the road and airport buffer are protected; keep Hon Mun on a separate sea-weather day.',
      verify: 'Confirm the accommodation transfer, current beach access, marine forecast, swimming status and airport or station connection before booking.'
    },
    {
      slug: 'ba-ho-waterfalls',
      name: 'Ba Ho Waterfalls & Ninh Hoa',
      motif: 'Three pools inland',
      instrument: 'transect',
      image: image({
        src: '/assets/images/vietnam-ba-ho.webp',
        alt: 'Ba Ho stream and rocky pools in Khanh Hoa Province',
        source: 'https://commons.wikimedia.org/wiki/File:Su%E1%BB%91i_Ba_H%E1%BB%93_25.jpg',
        label: 'Ba Ho Stream, Khanh Hoa',
        creator: '[Tycho]',
        license: 'CC BY-SA 3.0'
      }),
      summary: 'Follow Ba Ho’s stream, forest and three-pool landscape as an inland contrast to Nha Trang’s beach, with rock, water and turn-back decisions visible.',
      lead: 'Ba Ho is attractive because the route becomes progressively more physical as it follows the stream. The first pool is not a guarantee that the upper sections are safe or open.',
      orientation: 'Set a group turn-back point before entering the rocks. A waterfall day is successful when everyone returns with energy, not when every pool is reached.',
      arrival: 'The site lies north of Nha Trang near the national road, but the final approach and stream walk are not a city stroll. Use a confirmed driver, sturdy shoes and a weather check.',
      sequence: 'Start at the access point, move along the stream only while footing and water level remain safe, swim only in an explicitly permitted area, and return before rain or darkness.',
      boundary: 'Protect the stream and visitors: do not litter, carve rock, disturb vegetation or attempt cliff jumps unless the current operator explicitly permits a supervised activity.',
      stages: [
        ['Check the water', 'Review rainfall, upstream weather, site notices and the group’s swimming ability before leaving the coast.'],
        ['Start the transect', 'Walk from the access point with shoes that grip wet rock, keeping the first safe rest and turn-back point visible.'],
        ['Choose the pool', 'Enter water only where current signs and staff allow; skip any pool when flow, depth or footing is uncertain.'],
        ['Return early', 'Leave before a storm or sunset, carry out waste and keep a reliable vehicle and dry change available at the trailhead.']
      ],
      risks: [
        ['Flash water', 'Rain upstream can raise stream levels quickly even when the trailhead looks dry; turn back at thunder, rising water or murky flow.'],
        ['Slippery rock', 'Uneven boulders and wet crossings cause falls; avoid alcohol, carry little and do not rush for photographs.'],
        ['Remote support', 'The route has less immediate help than the city; keep the group together and do not assume phone signal or a quick rescue.']
      ],
      duration: 'Allow a half or full day depending on how far the group safely walks; do not set a fixed pool-count as the success metric.',
      combine: 'Combine with Ninh Hoa food or a quiet return to Nha Trang, not with an island boat or airport transfer on the same tight schedule.',
      verify: 'Check Ninh Hoa or site management notices, rainfall and upstream weather, current swimming rules, trail condition and the return driver before going.'
    },
    {
      slug: 'nha-trang-bay-conservation-transfer',
      name: 'Nha Trang Bay Conservation & Island Transfer',
      motif: 'The reef-side contract',
      instrument: 'docket',
      image: image({
        src: '/assets/images/vietnam-hon-do.webp',
        alt: 'Hon Do Island and its pagoda viewed from Nha Trang mainland',
        source: 'https://commons.wikimedia.org/wiki/File:Nha_Trang_-_view_of_H%C3%B2n_%C4%90%E1%BB%8F_island_from_the_mainland_Mar_2024.jpg',
        label: 'Hon Do Island from Nha Trang mainland',
        creator: 'Dominic Nelson',
        license: 'CC BY-SA 4.0'
      }),
      summary: 'A practical conservation chapter for choosing a bay route, checking protected zones, selecting an operator and protecting the return transfer.',
      lead: 'The bay is not just a menu of islands. Coral, seagrass, mangrove, working ports, vessel safety, weather and community livelihoods all determine whether a marine itinerary is responsible and realistic.',
      orientation: 'Use this page before booking an island trip. It separates the destination decision from the operator decision and treats a safe return as part of the activity.',
      arrival: 'Start with the exact pier and current bay notice, then compare operator vessel, life jackets, route, cancellation terms, passenger load and return time before paying.',
      sequence: 'Check the marine forecast, confirm the protection zone and operator, board safely, follow no-touch reef practice, and return with enough slack for a delayed or canceled boat.',
      boundary: 'Protect the bay boundary: no coral contact, anchoring in prohibited habitat, marine-life feeding, plastic discharge, shell collection or entry into closed zones.',
      stages: [
        ['Read the reserve', 'Use official bay and biodiversity information to understand why coral, seagrass, mangrove and island water are managed differently.'],
        ['Audit the operator', 'Confirm license or official booking channel, vessel identity, crew, life jackets, route, weather cancellation and return contract.'],
        ['Travel as a guest', 'Remain seated underway, follow the captain, keep noise low and enter water only in the designated activity area.'],
        ['Protect the next leg', 'Leave a large return buffer before flights, trains or another paid activity; a canceled boat should trigger a safe plan B.']
      ],
      risks: [
        ['Forecast mismatch', 'Sea conditions can change after a booking is made; check waves, wind, thunderstorms and visibility close to departure.'],
        ['Protected habitat', 'Nha Trang Bay’s reefs and seagrass are under restoration and management; no touching, standing, collecting or unapproved anchoring.'],
        ['Operator gap', 'A cheap or vague boat offer may not provide the same safety, insurance or cancellation terms; keep exact operator details and crew instructions.']
      ],
      duration: 'Use this as a planning session before a marine day, then reserve the whole day for the actual transfer and weather margin.',
      combine: 'Combine with city planning or a flexible recovery day; never stack this decision chapter onto a fixed flight connection without slack.',
      verify: 'Check NCHMF sea weather, the current Nha Trang Bay management notice, protected-area rules, operator details and the next transport connection.'
    }
  ]
});

const daLatCentralHighlands = defineVietnamCluster({
  slug: 'da-lat-central-highlands',
  name: 'Da Lat & Central Highlands',
  region: 'Central Highlands',
  family: 'pine-greenhouse',
  label: 'Pine, coffee and highland forest · Central Vietnam',
  tagline: 'Climb from cool city to living forest.',
  reviewDate: '13 October 2026',
  isoDate: '2026-10-13',
  hubIntro: 'Da Lat is a gateway to a larger highland story: lakes and railway, coffee and farm work, Langbiang and K’Ho landscapes, Bidoup forest, Buon Ma Thuot waterfalls and Yok Don dry forest. Distances, elevation and seasonal rain should shape the order.',
  stay: 'Keep one central Da Lat base for the city and nearby day routes; add a park-side night only after the park confirms the exact lodging and return plan.',
  transfer: 'Use a confirmed arrival and local vehicle, then protect daylight on the rural roads. The official tourism profile checked 13 October 2026 gives broad orientation, not a live timetable.',
  hubSources: [
    ['https://vietnam.travel/places-to-go/south-central-coast-central-highlands/dalat', 'Vietnam Tourism — Da Lat climate, Lien Khuong access and city activities (checked 13 October 2026; not a live timetable or forecast)'],
    ['https://bidoupnuiba.gov.vn/', 'Bidoup–Nui Ba National Park — official route and visitor-service listings (checked 13 October 2026; listings do not confirm a date-specific booking)'],
    ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — check the actual travel-date forecast and warnings (checked 13 October 2026)']
  ],
  planner: [
    ['2 nights · one Da Lat base', 'Choose the city or one excursion', 'Arrival and departure are partial days, leaving one full day. Stay near the central lake and market if the railway-and-city walk is the priority; choose either a confirmed farm visit or a park route instead if that is the main reason for coming. Do not stack both on the same day.'],
    ['3–4 nights · keep separate route days', 'Let weather set the order', 'Use Da Lat as the base for the walkable core and one named day route. Add a second full day only when the host or park confirms access, pickup, return and route length. Keep a spare day or a flexible final night so rain or a closure can move the outdoor plan without breaking an onward ticket.'],
    ['5+ nights · move the base once', 'Treat distant highlands as another stay', 'If the trip continues to Buon Ma Thuot or another remote chapter, plan a separate daylight transfer and local overnight rather than an out-and-back from Da Lat. Confirm the actual road or scheduled transport before booking; current journey times and services are unknown in this review.']
  ],
  routeModelHeading: 'Count daylight days before adding another ridge.',
  routeModelLead: 'This is a base-and-weather sequence, not a claim that every farm, trail or train is operating today. Keep the city route complete on its own and move remote chapters only after the exact host or park confirms access.',
  sources: [
    ['https://www.vietnam.travel/places-to-go/south-central-coast-central-highlands/dalat', 'Vietnam Tourism — Da Lat city, railway, coffee, weather and transport'],
    ['https://bidoupnuiba.gov.vn/', 'Bidoup–Nui Ba National Park — official ecological routes and visitor information'],
    ['https://www.unesco.org/en/mab/langbiang', 'UNESCO Man and the Biosphere — Langbiang Biosphere Reserve'],
    ['https://tour.yokdonnationalpark.vn/EN/yokdon-national-park.html', 'Yok Don National Park — official English visitor and ecology information'],
    ['https://en.nbca.gov.vn/vuon-quoc-gia-yok-don/', 'National Biodiversity Conservation — Yok Don National Park']
  ],
  guides: [
    {
      slug: 'da-lat-lake-railway-core',
      name: 'Da Lat Lake & Railway Core',
      motif: 'The cool-city hinge',
      instrument: 'section',
      reviewDate: '12 October 2026',
      isoDate: '2026-10-12',
      sources: [
        ['https://vietnamtourism.gov.vn/en/post/20204', 'Vietnam National Authority of Tourism — Da Lat Railway Station as a visitor site; no live train timetable is provided'],
        ['https://lamdong.gov.vn/sites/en/dalatcity/SitePages/service.aspx', 'Lâm Đồng Government — Da Lat city services and the Da Lat–Trai Mat tourist rail route; page does not confirm a live departure']
      ],
      searchKeywords: ['da lat railway station', 'da lat train schedule', 'traimat railway', 'tra i mat train', 'da lat city walk', 'rail service status'],
      image: image({
        src: '/assets/images/vietnam-da-lat-railway.webp',
        alt: 'Da Lat Railway Station in Vietnam’s Central Highlands',
        source: 'https://commons.wikimedia.org/wiki/File:Da_Lat_Railway_Station-1.JPG',
        label: 'Da Lat Railway Station',
        creator: 'Lars Curfs (Grashoofd)',
        license: 'CC BY-SA 3.0 nl'
      }),
      summary: 'Read Da Lat’s lake, market and station on foot; add the Trai Mat tourist rail only after confirming a current departure and a workable return.',
      lead: 'The station is part of Da Lat’s heritage and the city’s historic tourist route toward Trai Mat, but the official pages available for this review do not verify a live timetable. Treat the rail excursion as conditional: an old departure time is not a connection plan. Keep the city walk complete on its own.',
      orientation: 'Separate the walkable center from the railway decision. The official tourism and provincial pages establish the station and Da Lat–Trai Mat route as visitor context, but they do not confirm that a train is operating on your date or when it returns. Confirm directly with current station information before reshaping the day.',
      arrival: 'Walk the central lake, market and station area at a gentle pace; rain and steep pavements slow the loop. Before traveling to Trai Mat by rail, verify that a service is operating, the departure and return tickets are available, and the return leaves time to reach your hotel or onward transfer.',
      sequence: 'Complete the lake-and-market walk first. If current station information confirms a train and both directions, take the excursion with a return buffer; if not, keep the station as a heritage stop and use a road transfer only if Trai Mat still fits the day.',
      boundary: 'Protect working streets and heritage: do not enter railway service areas, block vendors, photograph private interiors or treat religious buildings as props.',
      routeDiagram: {
        kind: 'flow',
        title: 'The rail leg is conditional; the city walk is not',
        intro: 'The available official pages identify a tourist route but do not provide a live departure board for your date.',
        steps: [
          ['City core', 'Walk lake + market', 'Use the public center as a complete first route, with a rain and slope allowance.'],
          ['Station check', 'Confirm service today', 'Ask the station or consult its current official notice; do not reuse an old published timetable.'],
          ['Trai Mat', 'Go only with both legs set', 'Confirm departure, return, ticket availability and any station access conditions before leaving the center.'],
          ['Back in Da Lat', 'Protect the return window', 'Keep onward transfers loose. If live rail details remain unclear, stay in the city or use a road plan.']
        ],
        fallbackTitle: 'If no live rail service is confirmed',
        fallback: 'Keep the lake, market and station as the day’s completed city route. Add Trai Mat by road only if the place and return timing still suit the group; do not present a historic train schedule as current.'
      },
      arrivalLabel: 'City-first arrival',
      boundaryLabel: 'Current service only',
      stages: [
        ['Start in the center', 'Allow for rain, slopes and traffic as you connect the public lake edge, market streets and station precinct.'],
        ['Read the station', 'Use the public heritage areas; keep clear of tracks, staff-only rooms and active railway equipment.'],
        ['Check both train legs', 'Confirm an operating service, outbound and return tickets, and same-day access directly from current station information.'],
        ['Choose the fallback', 'If no current departure is confirmed, retain the city walk. Do not chain a fixed flight or bus to an unverified train return.']
      ],
      risks: [
        ['Unverified operation', 'The official material reviewed confirms a tourist-route history, not a live departure for your travel date.'],
        ['Wet streets', 'Rain, slopes and scooters slow the city loop; use visible crossings and keep a layer for cooler evenings.'],
        ['Return mismatch', 'A train visit without a confirmed return can break hotel, bus or airport plans. Keep that leg optional until both tickets are clear.']
      ],
      duration: 'Use a half day for the center. Reserve a full flexible day only if current station information confirms a train and a return that fit the date.',
      combine: 'Combine the city walk with a café or one central heritage stop. Keep Bidoup and long waterfall roads for another day with daylight and weather margin.',
      verify: 'Confirm train operation for the exact date, both ticket legs, station access, rain, road conditions and the return to your next connection.'
    },
    {
      slug: 'cau-dat-coffee-farms',
      name: 'Cau Dat Coffee & Farm Belt',
      motif: 'From red soil to cup',
      instrument: 'ledger',
      reviewDate: '13 October 2026',
      isoDate: '2026-10-13',
      sources: [
        ['https://vietnam.travel/places-to-go/south-central-coast-central-highlands/dalat', 'Vietnam Tourism — Da Lat coffee and farm-tour context (checked 13 October 2026; it does not verify a Cau Dat property, opening or booking)'],
        ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — check the road-area forecast and warnings for the actual date (checked 13 October 2026)']
      ],
      image: image({
        src: '/assets/images/vietnam-da-lat-coffee.webp',
        alt: 'Coffee plantation near Da Lat in Vietnam',
        source: 'https://commons.wikimedia.org/wiki/File:Vietnam_-_coffee_plantation.jpg',
        label: 'Coffee Plantation near Da Lat',
        creator: 'P. Hughes',
        license: 'CC BY 4.0'
      }),
      summary: 'Follow Da Lat’s farm belt through coffee, tea, flowers, processing and community livelihoods with a pre-booked, low-impact visit.',
      lead: 'Treat Cầu Đất as a working farm landscape, not a guaranteed attraction with a single public gate. The official Vietnam Tourism profile checked 13 October 2026 describes coffee on Da Lat’s surrounding slopes and names a K’Ho Coffee farm tour, but it does not establish that any Cầu Đất property is open, accepts walk-ins or shares that tour’s access. Select one host who confirms a visit in writing, then build the road day around that exact meeting point and return. If nobody confirms, stay in Da Lat rather than arriving at a private farm unannounced.',
      orientation: 'The useful choice is not “how many farms fit?” but “which one confirmed host can explain cultivation, processing and local work without interrupting it?” Keep central Da Lat as the hotel base for two or three nights. With only two nights, this farm day competes with the central walk; with three, keep them on separate days. A fourth night gives room to move the road trip when fog or rain reduces visibility. Do not change hotels for a visit whose current access has not been confirmed.',
      arrival: 'No current public bus, visitor entrance, route time or Cau Dat farm schedule was verified in the official material available for this review. Ask the host to name the gate or pickup point, expected visit length, road approach, return vehicle and weather cancellation rule. Use a named driver or a confirmed tour from Da Lat; do not assume a café, plantation sign or map pin grants access to a working property.',
      sequence: 'Confirm one host and the exact arrival point the day before; leave Da Lat with a daylight return agreed; follow only the host-approved path through the farm or processing area; ask before photography or handling crops; then return to the same base without adding a second rural stop.',
      boundary: 'Farm rows, drying beds and machinery are workspaces. Ask before entering or photographing, keep off planted ground, do not touch tools or pick produce, and treat any sustainability or origin claim as the host’s explanation rather than an independently audited certification.',
      routeDiagram: {
        kind: 'flow',
        title: 'One confirmed host makes the farm day real.',
        intro: 'The official tourism profile gives general Da Lat coffee context, not a current Cầu Đất access notice. Do not leave town until the host and return are specific.',
        steps: [
          ['Base', 'Sleep in central Da Lat', 'Keep the same hotel for the market, lake and farm day; a second base adds friction without proving access.'],
          ['Confirm', 'Name the host and gate', 'Ask about visitor permission, interpretation, pickup, timing and the exact route through working areas.'],
          ['Visit', 'Follow one farm story', 'Stay on permitted paths and let the host set boundaries around crops, processing and photographs.'],
          ['Return', 'Protect daylight', 'Use the agreed vehicle back to Da Lat; if fog or heavy rain changes the plan, cancel the farm visit rather than improvise at another property.']
        ],
        fallbackTitle: 'If the host or road is not confirmed',
        fallback: 'Keep the day in central Da Lat for the lake, market and a café whose current access you verify. The farm visit can move to a later date; no unverified property is presented as an open substitute.'
      },
      stages: [
        ['Book one host', 'Ask who will receive you, where the vehicle should stop, which parts of the farm are visitor-accessible, whether interpretation is available and how rain affects the visit. Save the answer and a return contact.'],
        ['Read the production', 'Let the host explain the crops and processing sequence on permitted ground. Harvest, drying, roasting and sales may occur at different places or seasons; do not promise that each will be visible on one visit.'],
        ['Leave the work intact', 'Keep groups small around active work, avoid blocking deliveries, ask before portraits and buy directly only if the host offers it. Do not turn an ordinary farm into a staged demonstration.'],
        ['Return before weather', 'Check the forecast again before departure and keep the driver for the return. If cloud, rain or poor road visibility develops, end early and return to Da Lat rather than pushing toward another rural stop.']
      ],
      risks: [
        ['Access is unknown', 'The official tourism profile checked 13 October 2026 describes Da Lat coffee tours but does not confirm any named Cầu Đất farm’s current opening, booking or walk-in policy. Contact the actual host directly.'],
        ['Road and visibility', 'The same official profile describes a cool highland climate and rain from May through October; this is broad seasonal context, not today’s weather. Check the national forecast and cancel a foggy or unsafe road day.'],
        ['Workplace boundaries', 'A public-looking entrance does not authorize field access. Stay with the host, protect crops and equipment, and do not photograph workers or residents without consent.']
      ],
      stages: [
        ['Book the host', 'Confirm the farm’s current opening, permission, language, transport and weather policy instead of arriving unannounced at a working property.'],
        ['Read the crop', 'Observe shade, soil, slope, harvest and processing from permitted areas; let the host define what can be touched or tasted.'],
        ['Follow the cup', 'Connect farm work to drying, roasting and local consumption without reducing the community to a photo backdrop.'],
        ['Return the road', 'Leave the property as found, buy directly where appropriate and descend with a fog, rain and daylight buffer.']
      ],
      risks: [
        ['Road and fog', 'Winding highland roads, rain and low visibility can make a farm transfer longer and less safe than a map suggests.'],
        ['Unannounced access', 'Farms are workplaces and private land; a missing reservation can create safety, privacy and community problems.'],
        ['Crop damage', 'Do not enter rows, pick cherries, handle equipment or move drying materials without explicit permission.']
      ],
      duration: 'Reserve one full daylight block for a single host, including the unverified round-trip road time and a slower visit. This is a planning buffer, not a published farm schedule. Two Da Lat nights leave only one full day, so choose the city or farm; three nights make separate days possible.',
      combine: 'Pair this with a light Da Lat evening only if the driver returns comfortably. Keep Langbiang, Bidoup and the central walk on different days; they are not add-on stops after a farm day. A fourth Da Lat night is more useful as weather slack than as a second unconfirmed farm.',
      verify: 'Confirm the host’s legal visitor access, exact gate, reservation, language, allowed path, transport, return, rain cancellation and any certification evidence directly. The accessible official source does not establish current Cầu Đất openings; that status remains unknown until the host confirms.'
    },
    {
      slug: 'langbiang-kho-highlands',
      name: 'Langbiang & K’Ho Highlands',
      motif: 'The mountain and its people',
      instrument: 'contour',
      reviewDate: '13 October 2026',
      isoDate: '2026-10-13',
      sources: [
        ['https://bidoupnuiba.gov.vn/dich-vu/tour-tuyen-du-lich-sinh-thai/tuyen-langbiang-1-ngay/', 'Bidoup–Nui Ba National Park — Langbiang one-day route listing (checked 13 October 2026; confirm current departures because the page repeats unrelated route text)'],
        ['https://vietnam.travel/places-to-go/south-central-coast-central-highlands/dalat', 'Vietnam Tourism — Da Lat highland climate and guided mountain context (checked 13 October 2026; seasonal overview, not a day forecast)'],
        ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — current-date forecast and warnings (checked 13 October 2026)']
      ],
      image: image({
        src: '/assets/images/vietnam-langbiang.webp',
        alt: 'Large LANGBIANG sign on a grassy highland slope under blue sky',
        source: 'https://commons.wikimedia.org/wiki/File:Langbiang_Mountain.JPG',
        label: 'Langbiang Mountain',
        creator: 'Tilamdong',
        license: 'Public domain'
      }),
      summary: 'Plan Langbiang as a mountain, plateau and K’Ho cultural landscape with weather, ability and consent kept visible at every elevation.',
      lead: 'Use the park’s named Langbiang route as a booking question, not a summit guarantee. Its official page lists a one-day route and gives an orientation point about 36 km from Da Lat, but the page’s detail repeats text for a different Thiên Thai route and the related-tour panel shows inconsistent duration. I do not treat those fields as a live timetable or verified route grade. Ask the park which route, entry point, transport and return are actually operating on your date; then decide whether the group wants a guided forest day or a shorter confirmed viewpoint.',
      orientation: 'Stay in Da Lat for at least three nights if this is one of two planned full days: arrival and departure are partial, and the mountain day should not be squeezed between them. Keep the city core as the rain plan and make Langbiang the movable day. A fourth night buys a rescheduling margin; it does not make an unconfirmed trail safer. K’Ho communities are living neighbors, not an attraction, so choose only an experience the community or park explicitly welcomes.',
      arrival: 'The park page checked 13 October 2026 names a Langbiang one-day route, lists a location about 36 km from Da Lat and says transport should be registered with its Ecotourism and Environmental Education Center. Because the same page contains mismatched route copy, confirm the exact trailhead, road pickup, departure, finish, guide and current access directly with the park. No road travel time or walk-in permission is verified here.',
      sequence: 'Keep one Da Lat hotel base → contact the park and select a confirmed route → agree on meeting point, driver and return before setting out → follow the guide’s weather and turn-back decision → return to town before darkness. Do not add a second mountain, farm or distant transfer to this day.',
      boundary: 'Stay on the route the park authorizes, do not collect plants or take shortcuts, and do not enter village, sacred or private spaces without invitation. Ask before photographing people, homes, ceremonies or craft work; stop when the community or guide sets a boundary.',
      routeDiagram: {
        kind: 'compare',
        title: 'Choose the park route only after the park confirms it.',
        intro: 'The official listing is useful for contacting the park, but its duplicated description and conflicting duration are not a current itinerary.',
        steps: [
          ['Sleep', 'Keep Da Lat as the base', 'Plan three nights for a city day plus one mountain day; use a fourth night if the route needs a weather move.'],
          ['Ask', 'Confirm route and transport', 'Request the exact trailhead, guide, start and finish, vehicle, access conditions and same-day return.'],
          ['Decide', 'Use ability and forecast', 'Take only a route whose length and difficulty the park confirms for the group; let the guide cancel or shorten it.'],
          ['Return', 'Leave the evening open', 'Come back to the same base with daylight. Do not connect this hike to a flight, bus or second rural visit.']
        ],
        fallbackTitle: 'If the trail closes or weather turns',
        fallback: 'Do not substitute an unverified summit road or local path. Move the hike to a clear day; use the Da Lat lake, market and station walk as the complete bad-weather alternative.'
      },
      stages: [
        ['Call before booking', 'The park’s official page provides a route and booking link, but its visible descriptions conflict. Ask for the current route name, difficulty, guide, registration, exact visitor center and whether the day’s transport is included.'],
        ['Set one trail day', 'Choose a route the group can finish with margin. Confirm footwear, food, water, rain layer, meeting point and return vehicle; do not use the approximate map distance as a travel-time promise.'],
        ['Follow the guide', 'Stay together, use marked or guided ground, protect plants and streams, and accept a turn-back call if cloud, rain, footing or fatigue changes. A viewpoint is optional; a safe descent is not.'],
        ['Return to Da Lat', 'Keep the same hotel and an uncommitted evening. If the park cancels or the weather closes the route, shift to the central lake, market and station chapter or rest—do not chase another trail.']
      ],
      risks: [
        ['Conflicting route page', 'The official Langbiang page lists a one-day route but also repeats unrelated Thiên Thai narrative and inconsistent duration elsewhere. Verify the current program with the park rather than repeating the page as a live schedule.'],
        ['Mountain weather', 'Vietnam Tourism’s 13 October 2026 profile describes rain from May to October and cool highland nights; it is not a local forecast for your date. Check NCHMF close to departure and move or cancel for poor visibility, heavy rain or unsafe footing.'],
        ['Return after a closure', 'A blocked trail can also delay the vehicle plan. Agree on a safe pickup and fallback with the park; never improvise a downhill shortcut, unregistered ride or after-dark road return.']
      ],
      stages: [
        ['Choose the elevation', 'Match route length and altitude to the group, then check the current trailhead, transport and weather before leaving Da Lat.'],
        ['Climb by contour', 'Move slowly through pine and open highland terrain, watching cloud, footing and the return time rather than chasing a summit label.'],
        ['Meet with consent', 'Use community-led interpretation where available and ask before photographing people, homes, ceremonies or craft work.'],
        ['Descend with margin', 'Leave the high point before weather closes in, keep the route intact and return to Da Lat without another late mountain transfer.']
      ],
      risks: [
        ['Visibility change', 'Cloud, rain and wind can erase views and make trails or roads hazardous; a viewpoint is optional, a safe return is not.'],
        ['Altitude and footing', 'Even modest highland climbs can expose fatigue, cold, wet rock and uneven ground; carry layers and water.'],
        ['Cultural consent', 'K’Ho communities are not scenery; use permission-based, community-led experiences and avoid sacred or private areas.']
      ],
      duration: 'Reserve one full daylight day plus a Da Lat night before and after if the route starts early or returns late. The park page’s one-day label is not a departure guarantee. With three nights, keep one full city day and one confirmed route day; four nights provide a weather reschedule.',
      combine: 'Use the same Da Lat base for the city core and one Langbiang day. Keep Bidoup and Cầu Đất on separate days, and do not chain a trail to the airport or an intercity bus. If the park cannot confirm access, the central city walk remains a complete alternative.',
      verify: 'Confirm the route, trailhead, current access, guide, transport, start/finish, return pickup, cancellation policy and group ability directly with Bidoup–Nui Ba. Check the NCHMF forecast for the date; present opening and weather conditions remain unknown until checked.'
    },
    {
      slug: 'bidoup-nui-ba-national-park',
      name: 'Bidoup–Nui Ba National Park',
      motif: 'A forest that needs a guide',
      instrument: 'transect',
      reviewDate: '13 October 2026',
      isoDate: '2026-10-13',
      sources: [
        ['https://bidoupnuiba.gov.vn/', 'Bidoup–Nui Ba National Park — official route, transport, lodging and visitor-service menu (checked 13 October 2026; menu does not prove live availability)'],
        ['https://bidoupnuiba.gov.vn/dich-vu/tour-tuyen-du-lich-sinh-thai/tuyen-sinh-thai-bidoup-17-km/', 'Bidoup–Nui Ba National Park — “BIDOUP 17 Km” route page (checked 13 October 2026; duplicated route text means length and timing need direct confirmation)'],
        ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — check forecast and warnings for the actual route date (checked 13 October 2026)']
      ],
      image: image({
        src: '/assets/images/vietnam-bidoup.webp',
        alt: 'Hon Giao landscape in Bidoup Nui Ba National Park',
        source: 'https://commons.wikimedia.org/wiki/File:Hon_Giao,_Bidoup_Nui_Ba_National_Park.jpg',
        label: 'Hon Giao, Bidoup Nui Ba National Park',
        creator: 'Dotrihieu',
        license: 'CC BY-SA 4.0'
      }),
      summary: 'Treat Bidoup–Nui Ba as a real protected-area expedition with guide, permit, route, accommodation and weather decisions—not a casual Da Lat detour.',
      lead: 'Bidoup–Nui Ba is a reservation-led forest visit, not a casual extension of Da Lat sightseeing. The park’s official site checked 13 October 2026 lists guided ecological routes, visitor interpretation, transport, lodging and camping services, and names a “BIDOUP 17 Km” route. The route page repeats unrelated Thiên Thai text and its visible duration fields are inconsistent, so its title is not enough to plan a day or overnight. Contact the park for the route that is actually available, the total walking distance, guide, vehicle, meals, permitted stay and emergency plan before reserving a base.',
      orientation: 'For a first visit, keep Da Lat as the hotel base before and after a confirmed day route. Two nights in Da Lat allow one full park day only if the arrival and next departure leave daylight on both sides; three nights create a recovery or weather move. An overnight in the park can reduce road pressure only when the park confirms lodging, meal and exit arrangements in writing. Do not use a general “two days, one night” card as evidence that your selected route is currently operating.',
      arrival: 'The park site lists its headquarters in Lạc Dương and a Da Lat representative office, plus transport and accommodation service categories; it does not establish a public bus departure or same-day seat for your date. Ask the Ecotourism and Environmental Education Center to name the meeting point, transfer provider, road plan, registration requirements and return vehicle. The exact access point, travel time, permits and current route status remain unknown until the park replies.',
      sequence: 'Da Lat arrival night → park-confirmed meeting and transfer → guide briefing and approved forest route → authorized meal or overnight only if explicitly booked → signed return or exit point → Da Lat recovery night. If the park offers only a day route, return to the same base; never invent a campsite or leave the guide’s route.',
      boundary: 'The forest is protected habitat and K’Ho cultural landscape. Stay on the approved route, leave orchids and wildlife untouched, keep noise low, carry out all waste, and join cultural interpretation only when it is offered with local consent.',
      routeDiagram: {
        kind: 'flow',
        title: 'Park approval comes before the road and the night.',
        intro: 'The public site lists routes and visitor services, but current availability and route details need direct confirmation.',
        steps: [
          ['Base', 'Reserve Da Lat nights', 'Keep a Da Lat arrival and recovery night; add a park night only after lodging and meals are explicitly confirmed.'],
          ['Register', 'Choose the actual route', 'Ask the park for total distance, difficulty, guide, access, required permit and date-specific availability.'],
          ['Transfer', 'Set the exact handoff', 'Confirm pickup, park entrance, return vehicle, food, signal limits and emergency protocol before leaving town.'],
          ['Exit', 'Follow the guide’s call', 'Finish at the authorized endpoint and return before darkness or worsening weather; do not add a second attraction.']
        ],
        fallbackTitle: 'If a route is closed or not confirmed',
        fallback: 'Do not use the route title as permission to enter. Keep the day in Da Lat, or reschedule the park visit after the center confirms another official option.'
      },
      stages: [
        ['Get a written plan', 'Ask the park to confirm the named route, walking distance, duration, difficulty, guide, registration or permit, exact meeting point, vehicle, meal and overnight arrangements. The current web listing alone does not settle these details.'],
        ['Match the base', 'Use central Da Lat before and after a day route. If the official itinerary requires an overnight inside or near the park, confirm the actual room, food and morning exit before paying; do not assume a remote lodge can be booked on arrival.'],
        ['Enter with the guide', 'Follow the registered transect and briefing. Let the guide set pace, water crossings and turn-back time; no rare plant, bird or viewpoint is worth stepping off route or extending after weather worsens.'],
        ['Account for the return', 'Check the entire group and return to the agreed vehicle or authorized accommodation. Leave the evening and next morning flexible; keep onward tickets away from an uncertain park exit.']
      ],
      risks: [
        ['Route details conflict', 'The official “BIDOUP 17 Km” page displays duplicated Thiên Thai narrative and generic duration details. Do not infer the current route length, schedule or overnight offering from that page title; ask the park directly.'],
        ['Rain and streams', 'The national forecasting center publishes current forecasts and warnings, but conditions at a specific trail crossing can change. Check the actual date and let the park guide cancel or turn back; no current weather is asserted here.'],
        ['Remote return', 'The park’s site lists transport and lodging services but no public timetable for this plan. Confirm the driver, radio or contact procedure, food, emergency response and return point before entering.']
      ],
      stages: [
        ['Secure the permit', 'Use the park’s current visitor contact to confirm guide, route, permit, accommodation, food and emergency procedure.'],
        ['Enter the forest', 'Brief the group on pace, water, weather and conduct, then keep the guide’s route and the forest’s quiet intact.'],
        ['Read the layers', 'Observe canopy, understory, streams, elevation and community context without handling specimens or leaving the path.'],
        ['Exit accounted', 'Check the whole group, pack out every item and return to the agreed vehicle or lodging before weather or darkness raises risk.']
      ],
      risks: [
        ['Remote access', 'Roads, signal and rescue time are limited; never enter without a current park arrangement, guide and emergency plan.'],
        ['Rain and stream', 'Highland rain can turn trails and crossings dangerous; the guide’s turn-back call overrides the planned itinerary.'],
        ['Biodiversity pressure', 'Rare plants and wildlife are easily damaged by collecting, noise, baiting or off-trail movement; observe without taking.']
      ],
      duration: 'Block one full day only after the park confirms a day route. For an approved overnight, reserve two route days and the exact authorized lodging; that is a different plan, not an assumption based on the menu. Keep at least two Da Lat nights around the visit unless the park confirms a safer transfer and stay arrangement.',
      combine: 'Use Da Lat as the recovery base and keep the park as its own chapter. Do not add Langbiang, Cầu Đất, a waterfall road or an onward flight on the same day. A three-night Da Lat stay permits one park day plus a city day; extra nights are weather and transfer slack, not filler.',
      verify: 'Contact Bidoup–Nui Ba directly for current route, guide, permit, transport, meal, lodging, payment, cancellation, signal and emergency arrangements. Check NCHMF close to departure and ask who makes the closure decision. Current access, availability and local conditions are unknown until confirmed.'
    },
    {
      slug: 'buon-ma-thuot-dray-nur',
      name: 'Buon Ma Thuot & Dray Nur',
      motif: 'Coffee city, basalt water',
      instrument: 'atlas',
      reviewDate: '13 October 2026',
      isoDate: '2026-10-13',
      sources: [
        ['https://daklak.gov.vn/', 'Dak Lak provincial portal — checked 13 October 2026; it did not load, so no current Dray Nur access claim is based on it'],
        ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — check the current regional forecast and warnings before departure']
      ],
      searchKeywords: ['buon ma thuot to dray nur waterfall route', 'buon ma thuot nights base', 'dray nur river safety access', 'dak lak rainy season day trip'],
      image: image({
        src: '/assets/images/vietnam-dray-nur.webp',
        alt: 'Dray Nur Waterfall near Buon Ma Thuot in Dak Lak',
        source: 'https://commons.wikimedia.org/wiki/File:Dray_Nur_Waterfall_(49483462012).jpg',
        label: 'Dray Nur Waterfall',
        creator: 'Sketyl none',
        license: 'CC BY 2.0'
      }),
      arrivalLabel: 'Choose the base first',
      boundaryLabel: 'Water and access limit',
      summary: 'Use Buon Ma Thuot as the overnight base for its coffee-city day and a separate, confirmed Dray Nur river day; do not plan the falls as a Da Lat day trip.',
      lead: 'This is a two-part inland itinerary with a transfer between regions, not a string of nearby stops. Give Buon Ma Thuot the nights: read its coffee and civic life on foot or with a local host, then reserve a separate daylight block for Dray Nur only after a named driver, access point and return are confirmed. The waterfall’s current gates, fees, permitted areas and water status were not verifiable in this review.',
      orientation: 'Choose two nights if the trip is limited to one full day at Dray Nur and your arrival transfer reaches Buon Ma Thuot early enough to settle. Three nights allow a slower city day plus the waterfall day; four nights make room for both this route and Yok Don on separate days, with one uncommitted weather or road day. These are planning shapes, not required minimums. Da Lat is a separate highland base: do not use it for a same-day waterfall run or assume the intercity road schedule.',
      arrival: 'Travel to Buon Ma Thuot first and sleep in the city for the full route. If coming from Da Lat, treat the intercity leg as its own transfer and verify the actual service and arrival time before booking the first rural day; current schedules and travel times were not confirmed here. For Dray Nur, arrange a named vehicle and exact pickup/return point with a local operator. The current site entrance, road condition, parking, admission and public transport connection remain unknown; do not set off based on a map pin alone.',
      sequence: 'For a two-night stay: arrive in Buon Ma Thuot, then use the next full day for Dray Nur only after the driver has confirmed the road, site gate, permitted public area, weather call and return pickup; return to town in daylight. Add a third night for a separate coffee or market day at an unhurried pace. A fourth night can separate Yok Don and Dray Nur with weather slack before the onward transfer. Do not combine both rural routes into one rushed loop.',
      boundary: 'River safety outranks a booked photo stop. Do not swim, wade, climb wet basalt or pass a barrier unless the responsible site staff expressly confirm that exact area is open and safe that day. If the gate, water boundary, road or return driver cannot be verified, stop at the city base and move or omit the outing; this review found no verified alternate waterfall entrance or substitute operator. Ask before photographing residents, homes, work or sacred places.',
      stages: [
        ['Sleep in Buon Ma Thuot', 'Two nights support one full rural day; three slow the city visit; four can separate Dray Nur and Yok Don with a weather reserve. Do not base this day in Da Lat.'],
        ['Keep the city day whole', 'Use a local coffee, market or civic visit as a low-transfer day. Confirm the specific host or venue before treating it as a scheduled stop.'],
        ['Make Dray Nur conditional', 'Before leaving, get the named gate, road, permitted viewing area, weather decision and return pickup from the responsible site contact and driver. Those current details are unknown here.'],
        ['Return in daylight', 'Take the same arranged vehicle back to the city. If rain, road access, river limits or the return contract is unclear, cancel and retain the city day; no alternate entrance is verified.']
      ],
      risks: [
        ['Unverified waterfall access', 'The provincial portal did not load on 13 October 2026. Current gate, admission, facilities and allowed viewpoints are not established; do not infer that the site is open from this guide.'],
        ['River and road conditions', 'Rain, fast water, slick rock and poor visibility can change the safe return. Check the official forecast and follow the site authority’s closure call; if either is unclear, stay in Buon Ma Thuot.'],
        ['Transfer and consent', 'An intercity arrival and the rural driver are separate legs. Confirm the actual pickup and return in advance, and ask before photographing workers, homes or religious practice.']
      ],
      duration: 'Budget one full daylight block for the confirmed Dray Nur road return; do not attach a fixed evening flight, train or another rural site. Two nights fit one full outing after a settled arrival. Three nights give the city and river days separate space. Use four nights only if you also want a separately confirmed Yok Don day or need a weather/transfer reserve.',
      combine: 'Combine only with Buon Ma Thuot city time. Yok Don is another roughly 38 km west of the city according to its official visitor page, so it is a separate full-day route with its own confirmed park program and car. Do not add it after Dray Nur or treat Da Lat as a closer base; the intercity connection is not documented here.',
      verify: 'On 13 October 2026 the Dak Lak provincial portal could not be read, so current Dray Nur gate, hours, fees, permitted river area, road state and facilities remain unknown. Before departure, confirm each with the responsible site authority and the named driver, check the National Forecasting Center for current rain warnings, and secure the daylight return. If access or river limits are not confirmed, do not go through an alternate entrance.'
    },
    {
      slug: 'yok-don-buon-don',
      name: 'Yok Don & Buon Don',
      motif: 'Dry forest, river, living knowledge',
      instrument: 'roadbook',
      reviewDate: '13 October 2026',
      isoDate: '2026-10-13',
      sources: [
        ['https://tour.yokdonnationalpark.vn/EN/yokdon-national-park.html', 'Yok Don National Park visitor information — checked 13 October 2026; lists a 38 km distance and general activity menu, not live availability'],
        ['https://tour.yokdonnationalpark.vn/EN/how-to-get-there.html', 'Yok Don National Park — official access information; confirm the actual vehicle and return directly'],
        ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — current weather and warnings']
      ],
      searchKeywords: ['yok don from buon ma thuot 38 km', 'yok don national park current visitor program', 'buon don park day transfer', 'yok don rainy dry season'],
      image: image({
        src: '/assets/images/vietnam-yok-don.webp',
        alt: 'Dry-season forest landscape in Yok Don National Park',
        source: 'https://commons.wikimedia.org/wiki/File:Yokdon8.JPG',
        label: 'Yok Don National Park in the dry season',
        creator: 'Đỗ Tuấn Hưng',
        license: 'CC BY-SA 3.0'
      }),
      arrivalLabel: 'Use the park as the day’s anchor',
      boundaryLabel: 'Wildlife and access boundary',
      summary: 'Base in Buon Ma Thuot for Yok Don’s dry-forest landscape; the park lists itself 38 km from town, but confirm the specific visitor program and return before travel.',
      lead: 'Yok Don’s official visitor page describes a dry dipterocarp forest, the Srepok River and elephant-friendly conservation, with a general menu that includes walking, cycling, bird and animal watching, river trips and interpretation. That menu does not confirm a trip is running on your date. Plan around a named park contact and guide, not an animal sighting; the forest and community visit still matter when wildlife stays out of view.',
      orientation: 'Two nights in Buon Ma Thuot can hold arrival, one park day and a next-day departure if the intercity arrival is settled before the visit. Three nights leave a separate city and coffee day. Four nights can include Dray Nur as another rural day and one uncommitted weather or road day. The park page gives 38 km from Buon Ma Thuot, but no reliable current travel time, departure schedule or exact program was confirmed; Da Lat is not a sensible same-day base for this west-of-town route.',
      arrival: 'Travel to Buon Ma Thuot and sleep there. On the park day, use the official park visitor center as the confirmed meeting point only after the park gives you its current address/meeting instructions, guide, program, payment method, expected finish and return vehicle. The park’s access page lists general transport modes but does not establish a date-specific service; arrange the outbound and return legs directly. A map distance of 38 km is not a travel-time estimate.',
      sequence: 'Choose one program with the park: walking or cycling on a named route, bird/forest interpretation, or a river activity only if the park confirms it is operating and safe. Check the National Forecasting Center near departure, then ask the park which seasonal track and turnaround rule apply. Meet staff, follow their route, keep distance from elephants and wildlife, and return to the same agreed pickup before dark. May–November is the park’s stated rainy season and December–April its dry season; those are climate context, not a daily access forecast.',
      boundary: 'The current official activity list is not a reservation or an animal guarantee. Never ride, feed, touch, call, bait or pursue an elephant; remain with the park team, keep to the route and follow village hosts’ limits. If the park cannot confirm a current program, weather decision, vehicle and safe return, do not travel to the gate hoping to negotiate a replacement. Use a settled Buon Ma Thuot day instead; no unverified animal attraction is suggested as a substitute.',
      stages: [
        ['Sleep in Buon Ma Thuot', 'Use two nights for one confirmed park day; three add city time; four can hold both Yok Don and Dray Nur on separate days plus a weather reserve.'],
        ['Book a named program', 'Ask the visitor center for today’s route, meeting point, guide, payment, finish estimate, safety cutoff and pickup plan. The website menu is not live availability.'],
        ['Follow the forest season', 'The park lists May–November as rainy and December–April as dry. Choose only the activity staff confirm for the forecast; no sighting is promised.'],
        ['Return with the same driver', 'Confirm the outbound and return car before leaving town. Cancel if the guide, program, weather decision or daylight return remains unresolved.']
      ],
      risks: [
        ['General menu versus live trip', 'The visitor page lists possible activities but does not show what is open or bookable on a particular date. Confirm the actual route and operator with the park.'],
        ['Heat, rain and return road', 'The park’s seasonal dates do not replace a trip-day forecast. Check warnings and accept the guide’s turn-back decision; do not continue if the arranged vehicle cannot return in daylight.'],
        ['Elephant welfare and consent', 'No riding, feeding, touch, calling or pursuit. Village life and gong traditions are not performances on demand; use an invited host and follow their photography and payment terms.']
      ],
      duration: 'Set aside one full day for the confirmed visitor program and both road legs. Two nights in the city are the compact shape; three allow one separate Buon Ma Thuot day, while four are appropriate only if adding a second rural day or weather/road slack. An overnight in the park is a separate plan and requires direct confirmation of room, meals, route and transport.',
      combine: 'Pair Yok Don with city time before or after, not with Dray Nur on the same day. The official park page gives a 38 km road distance from Buon Ma Thuot and says rainy season is May–November, dry season December–April; it does not publish a live itinerary or guarantee access. Keep Da Lat as another region, reached only after confirming a separate intercity transfer.',
      verify: 'Checked 13 October 2026: the official park visitor page lists general services and 38 km from Buon Ma Thuot, while the access page is not a date-specific timetable. Confirm the named program, route, park meeting point, guide, payment, weather cutoff and return vehicle with the park; check NCHMF before leaving. If these cannot be confirmed, stay in town rather than trying a different gate or an unverified operator.'
    }
  ]
});

export const vietnamCentralClusters = [hue, daNangHoiAn, nhaTrangKhanhHoa, daLatCentralHighlands];
