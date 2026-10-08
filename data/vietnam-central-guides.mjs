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
  hubIntro: 'Nha Trang and Khanh Hoa combine a walkable beach city, Cham worship, island operators, a protected bay, airport-linked Cam Ranh and inland waterfalls. The useful route is a compass: city, culture, sea, transfer, land and conservation each need a different decision.',
  stay: 'Stay in central Nha Trang for transport, services and a walkable beach base; choose Cam Ranh–Bai Dai only when a quieter airport-side coast is the purpose rather than a substitute for city access.',
  transfer: 'Use flights, trains and road transfers to reach the coast, then name the exact pier, operator, return buffer and marine forecast for every island day. Do not schedule a boat directly before a flight.',
  sources: [
    ['https://vietnam.travel/node/220', 'Vietnam Tourism — Nha Trang city, beaches, islands and transport'],
    ['https://dulichso.khanhhoa.gov.vn/en/article/nha-trang-bay-13c', 'Khanh Hoa Digital Travel Platform — Nha Trang Bay'],
    ['https://dulichso.khanhhoa.gov.vn/en/article/po-nagar-cham-towers-a-millennium-old-heritage-7f7', 'Khanh Hoa Digital Travel Platform — Po Nagar Cham Towers'],
    ['https://nbca.gov.vn/khu-du-tru-thien-nhien-vinh-nha-trang-khanh-hoa/', 'National Biodiversity Conservation — Nha Trang Bay Nature Reserve'],
    ['https://ninhhoa.khanhhoa.gov.vn/vi/diem-den-du-lich-36/khu-du-lich-sinh-thai-ba-ho', 'Ninh Hoa Government — Ba Ho Ecotourism Area']
  ],
  guides: [
    {
      slug: 'nha-trang-city-beach',
      name: 'Nha Trang City & Tran Phu Beach',
      motif: 'The public shoreline',
      instrument: 'docket',
      image: image({
        src: '/assets/images/vietnam-nha-trang-beach.webp',
        alt: 'Nha Trang city beach on Vietnam’s south-central coast',
        source: 'https://commons.wikimedia.org/wiki/File:Beach_at_Nha_Trang,_Vietnam.jpg',
        label: 'Beach at Nha Trang, Vietnam',
        creator: 'Bruce Tuten',
        license: 'CC BY 2.0'
      }),
      summary: 'Use Nha Trang’s central beach, promenade, seafood and city services as a practical base chapter with real swimming and heat checks.',
      lead: 'Nha Trang’s coast is public everyday space, resort frontage, exercise ground and working shoreline at once. A useful city page shows where those uses meet and where a visitor should slow down.',
      orientation: 'Build the day around a short coastal walk, one swim decision and one inland recovery window instead of continuous sun exposure.',
      arrival: 'Flights, trains and buses reach the city, while taxis and local rides handle the short urban moves. Airport transfer time, traffic and beach crowding still need a margin.',
      sequence: 'Start with a morning shoreline read, check the current swimming conditions, move inland for food and shade, then return to the promenade only if weather and crowd levels remain comfortable.',
      boundary: 'Protect the public coast: swim only in permitted areas, obey lifeguards and flags, keep clear of fishing gear and leave no plastic or food waste on the beach.',
      stages: [
        ['Choose the base', 'Confirm hotel-to-beach access, arrival transfer and a shaded recovery option before turning the city into an all-day outdoor plan.'],
        ['Read the shore', 'Observe exercise, families, fishermen, vendors and public facilities without blocking paths or treating ordinary life as a staged scene.'],
        ['Make the water call', 'Check flags, lifeguards, tide, wind and marine forecast; a swim is optional and should never be forced by the itinerary.'],
        ['Close in the city', 'Use food, museum or café time to recover from sun, then keep any evening shoreline walk on well-lit public routes.']
      ],
      risks: [
        ['Swimming status', 'Lifeguard coverage, warning flags, currents and waves change; never rely on yesterday’s beach conditions.'],
        ['Sun and heat', 'South-central sun can exhaust visitors quickly; schedule shade, water and a shorter exposure window.'],
        ['Urban traffic', 'Coastal roads and scooters remain active beside the promenade; use marked crossings and keep belongings secure.']
      ],
      duration: 'A half day covers the beach and city base; a full day should deliberately include a shaded cultural or food interval.',
      combine: 'Combine with Po Nagar and Hon Chong for a north-city culture day, but keep island departures and Ba Ho as separate transfer contracts.',
      verify: 'Check local beach flags, lifeguard availability, marine forecast, traffic and current city access notices before swimming.'
    },
    {
      slug: 'po-nagar-hon-chong',
      name: 'Po Nagar Cham Towers & Hon Chong',
      motif: 'Mother of the land, stone of the bay',
      instrument: 'compass',
      image: image({
        src: '/assets/images/vietnam-po-nagar.webp',
        alt: 'Po Nagar Cham Towers in Nha Trang',
        source: 'https://commons.wikimedia.org/wiki/File:PonNagarChamTowers.jpg',
        label: 'Po Nagar Cham Towers',
        creator: 'wileypics',
        license: 'CC BY 2.0'
      }),
      summary: 'Pair Po Nagar’s living Cham and Mother Goddess traditions with Hon Chong’s layered coastal geology for a compact north-city chapter.',
      lead: 'This route connects two different kinds of memory: Po Nagar is a sacred, active religious complex, while Hon Chong is a geological and civic lookout over the bay. They should be linked by respect, not flattened into one photo stop.',
      orientation: 'Give the tower complex the quieter and more attentive visit, then let Hon Chong open the frame toward sea, island and city.',
      arrival: 'Both sites are reachable by local ride from central Nha Trang, but Po Nagar’s stairs and Hon Chong’s uneven rock require slower movement and weather awareness.',
      sequence: 'Visit Po Nagar before the day becomes crowded, move north or along the coast by safe road, then read Hon Chong from permitted ground without climbing unstable formations.',
      boundary: 'Protect worship, sculpture and rock: dress modestly, ask before photographing rituals, do not touch carvings and stay off fragile or wet boulders.',
      stages: [
        ['Set the meaning', 'Read the official Po Nagar context before entering, and explain to the group that the site remains a place of devotion.'],
        ['Cross the shrine', 'Move quietly through public areas, keep stairs clear and follow staff instructions around offerings, worship and photography.'],
        ['Open the compass', 'Transfer to Hon Chong with a safe stopping plan, then identify bay, island and mountain relationships from stable public viewpoints.'],
        ['Leave no trace', 'Keep the route compact, carry water and waste, and avoid adding an unplanned water activity after rain or high wind.']
      ],
      risks: [
        ['Steep access', 'Po Nagar includes steep stone steps and Hon Chong has uneven surfaces; verify mobility needs and footwear before the route.'],
        ['Sacred conduct', 'Po Nagar is an active spiritual space; clothing, voice, photography and movement must follow local guidance.'],
        ['Rock and weather', 'Rain, waves and unstable surfaces can make Hon Chong unsafe; do not climb beyond public paths or edge toward the sea.']
      ],
      duration: 'Allow a half day with time for both interpretation and a quiet pause; do not reduce Po Nagar to a drive-by viewpoint.',
      combine: 'Combine with the central beach or city food chapter, not with a rushed island departure or Ba Ho hike.',
      verify: 'Check Po Nagar visitor guidance, weather, Hon Chong access and local traffic before selecting the order.'
    },
    {
      slug: 'hon-mun-island-marine-route',
      name: 'Hon Mun Island Marine Route',
      motif: 'Reef before recreation',
      instrument: 'expedition',
      image: image({
        src: '/assets/images/vietnam-hon-mun.webp',
        alt: 'Hon Mun Island in Nha Trang Bay',
        source: 'https://commons.wikimedia.org/wiki/File:Hon_Mun_island_%28H%C3%B2n_Mun%29%2C_Cam_Ranh%2C_Nha_Trang%2C_Vi%E1%BB%87t_Nam_20140518_105634_%28taken_with_Samsung_Galaxy_Note_3%29.jpg',
        label: 'Hon Mun Island, Nha Trang Bay',
        creator: 'Nguyen Hung Vu',
        license: 'CC BY 2.0'
      }),
      summary: 'Plan Hon Mun and nearby island waters as a weather-led marine day with licensed operators, reef conduct and a protected return buffer.',
      lead: 'Nha Trang Bay’s attraction is inseparable from its ecological pressure. The route must put the reef, vessel, crew, swimmer and current marine notice ahead of the promise of a particular fish or color.',
      orientation: 'Choose one marine purpose—snorkeling, a quiet island landing or a short boat circuit—and leave capacity for cancellation or a land day.',
      arrival: 'Confirm the exact departure port, operator, vessel, life-jacket policy, sea-state cancellation terms and return time. Speedboats are not interchangeable with wooden boats.',
      sequence: 'Check the forecast at the pier, board according to crew instruction, enter water only where the operator and protection rules permit, then return with enough time for a missed connection.',
      boundary: 'Protect coral and passengers: wear a secured life jacket when instructed, remain seated underway, never stand on coral, touch wildlife, feed fish or remove shells.',
      stages: [
        ['Read the sea', 'Check official marine weather, wind, wave and operator notices before leaving the hotel or paying for a trip.'],
        ['Contract the boat', 'Confirm the vessel, crew, pier, passenger list, safety equipment, route and cancellation policy; keep the written or digital details available.'],
        ['Enter lightly', 'Follow the guide’s water boundary, maintain neutral buoyancy, keep fins away from coral and choose observation over contact.'],
        ['Return with slack', 'Leave the water before fatigue, return to the assigned seat and protect the land-side buffer for weather or harbor delays.']
      ],
      risks: [
        ['Marine forecast', 'Wind, waves, thunderstorms and visibility can cancel or transform a boat day; no island photo is worth ignoring the forecast.'],
        ['Operator safety', 'Use a verifiable operator, listen to the captain, wear the life jacket correctly and never climb the bow or gunwale for photos.'],
        ['Reef protection', 'Nha Trang Bay includes sensitive coral and seagrass; no touching, standing, anchoring in prohibited areas, collecting or feeding.']
      ],
      duration: 'Reserve a full flexible day including pier, boat and recovery time; a marine route should never be squeezed between fixed transport connections.',
      combine: 'Combine with a city evening only after a generous return margin; do not pair with Cam Ranh airport departure on the same tight clock.',
      verify: 'Check the National Center for Hydro-Meteorological Forecasting, Nha Trang Bay management notices and the exact licensed operator immediately before departure.'
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
  hubIntro: 'Da Lat is a gateway to a larger highland story: lakes and railway, coffee and farm work, Langbiang and K’Ho landscapes, Bidoup forest, Buon Ma Thuot waterfalls and Yok Don dry forest. Distances, elevation and seasonal rain should shape the order.',
  stay: 'Use Da Lat as the comfortable highland base for city, lake, railway, farm and nearby mountain days; move to Buon Ma Thuot or a park-side stay only when the longer ecology and transfer deserve it.',
  transfer: 'Protect altitude and road time. Da Lat airport, sleeper buses and regional roads serve different purposes, while Bidoup and Yok Don require confirmed guides, vehicles, permits and daylight.',
  sources: [
    ['https://www.vietnam.travel/places-to-go/central-vietnam/dalat', 'Vietnam Tourism — Da Lat city, railway, coffee, weather and transport'],
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
      image: image({
        src: '/assets/images/vietnam-da-lat-railway.webp',
        alt: 'Da Lat Railway Station in Vietnam’s Central Highlands',
        source: 'https://commons.wikimedia.org/wiki/File:Da_Lat_Railway_Station-1.JPG',
        label: 'Da Lat Railway Station',
        creator: 'Lars Curfs (Grashoofd)',
        license: 'CC BY-SA 3.0 nl'
      }),
      summary: 'Start Da Lat with a walkable lake, market, architecture and railway chapter that explains the city before the highland roads begin.',
      lead: 'Da Lat’s center is a useful hinge between colonial-era urban form, flower and produce commerce, lake life and the short railway experience toward Trai Mat. It rewards a slower city reading.',
      orientation: 'Keep the lake, market and station as three different readings of the same cool highland city. Do not let a train photo replace the wider urban context.',
      arrival: 'The airport lies outside town and buses arrive on their own schedules; once in the center, walking and taxis work well but steep streets and rain change the pace.',
      sequence: 'Begin at the lake and market, move through one architectural or railway layer, pause for a warm drink, then use the station excursion only after confirming current operation.',
      boundary: 'Protect working streets and heritage: do not enter railway service areas, block vendors, photograph private interiors or treat religious buildings as props.',
      stages: [
        ['Settle the altitude', 'Arrive with layers, rain protection and a gentle first walk; the cooler climate does not remove sun or slippery pavement.'],
        ['Read the lake', 'Follow the public edge, market and streets to see how residents use the center before adding a separate attraction.'],
        ['Check the rail', 'Confirm current train operation and ticket details, then stay within station and carriage rules while reading the route to Trai Mat.'],
        ['Return to town', 'Use the return window for food, rest and a weather check rather than forcing a distant waterfall or mountain road into the same day.']
      ],
      risks: [
        ['Rain and cool', 'Rain can arrive quickly and evenings are cool; carry a layer and avoid assuming the city is always dry or warm.'],
        ['Slope and traffic', 'Steep streets, scooters and uneven pavements require deliberate crossings and slower walking.'],
        ['Schedule drift', 'Railway operation and attraction access can change; do not book a fixed onward transfer immediately after the excursion.']
      ],
      duration: 'Use a half day for the lake and center, or a full flexible day when the railway and market both matter.',
      combine: 'Combine with a city café or pagoda, not with Bidoup or a long waterfall road that needs daylight and weather margin.',
      verify: 'Check current airport or bus arrival, railway operation, weather, station access and any local event or road restriction before setting the day.'
    },
    {
      slug: 'cau-dat-coffee-farms',
      name: 'Cau Dat Coffee & Farm Belt',
      motif: 'From red soil to cup',
      instrument: 'ledger',
      image: image({
        src: '/assets/images/vietnam-da-lat-coffee.webp',
        alt: 'Coffee plantation near Da Lat in Vietnam',
        source: 'https://commons.wikimedia.org/wiki/File:Vietnam_-_coffee_plantation.jpg',
        label: 'Coffee Plantation near Da Lat',
        creator: 'P. Hughes',
        license: 'CC BY 4.0'
      }),
      summary: 'Follow Da Lat’s farm belt through coffee, tea, flowers, processing and community livelihoods with a pre-booked, low-impact visit.',
      lead: 'The highland farm story is about labor, altitude, processing and land—not only a scenic café. A good route makes the production chain visible and leaves the farm working after the visitor departs.',
      orientation: 'Choose one farm or cooperative experience with clear permission and interpretation. More stops do not automatically make the agricultural story richer.',
      arrival: 'Cau Dat and surrounding farms sit outside the city core on winding roads; use a pre-arranged driver or verified tour and expect fog, rain and slower travel.',
      sequence: 'Confirm the host, walk only permitted paths, learn how coffee or tea is grown and processed, then return before visibility and road conditions deteriorate.',
      boundary: 'Protect crops and communities: ask before entering fields or photographing workers, do not pick plants, and do not use “sustainable” claims without the operator’s evidence.',
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
      duration: 'Use a half or full day for one substantive farm experience, including transport and a slow conversation with the host.',
      combine: 'Combine with Da Lat city only when the return road is comfortable; avoid adding Langbiang or a park trek to the same farm-heavy day.',
      verify: 'Confirm the current farm host, road weather, reservation, transport, visitor boundaries and any claimed certification before publishing or booking.'
    },
    {
      slug: 'langbiang-kho-highlands',
      name: 'Langbiang & K’Ho Highlands',
      motif: 'The mountain and its people',
      instrument: 'contour',
      image: image({
        src: '/assets/images/vietnam-langbiang.webp',
        alt: 'Large LANGBIANG sign on a grassy highland slope under blue sky',
        source: 'https://commons.wikimedia.org/wiki/File:Langbiang_Mountain.JPG',
        label: 'Langbiang Mountain',
        creator: 'Tilamdong',
        license: 'Public domain'
      }),
      summary: 'Plan Langbiang as a mountain, plateau and K’Ho cultural landscape with weather, ability and consent kept visible at every elevation.',
      lead: 'Langbiang is both a recognizable summit and part of a larger biosphere reserve landscape. The page should make elevation, forest, community and visitor behavior equally legible.',
      orientation: 'Choose a managed viewpoint, a permitted trail or a community-led cultural experience; do not promise a summit simply because the mountain appears close to Da Lat.',
      arrival: 'Use a verified vehicle to the current trailhead or visitor area. Cloud, rain, road condition and local access rules can change the sensible route.',
      sequence: 'Check the mountain and reserve notice, acclimatize to the climb, follow marked or guided routes, and return before cloud, rain or darkness removes the road margin.',
      boundary: 'Protect reserve and community boundaries: no plant collection, off-trail shortcuts, loud music, trespass or unconsented cultural photography.',
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
      duration: 'Use a half day for a managed nearby route or a full day for a more demanding hike with a guide and weather buffer.',
      combine: 'Combine with Da Lat city only after the mountain return; keep Bidoup as a separate protected-area commitment.',
      verify: 'Check UNESCO reserve context, local park or trail notices, current access, guide needs, weather and the group’s ability before climbing.'
    },
    {
      slug: 'bidoup-nui-ba-national-park',
      name: 'Bidoup–Nui Ba National Park',
      motif: 'A forest that needs a guide',
      instrument: 'transect',
      image: image({
        src: '/assets/images/vietnam-bidoup.webp',
        alt: 'Hon Giao landscape in Bidoup Nui Ba National Park',
        source: 'https://commons.wikimedia.org/wiki/File:Hon_Giao,_Bidoup_Nui_Ba_National_Park.jpg',
        label: 'Hon Giao, Bidoup Nui Ba National Park',
        creator: 'Dotrihieu',
        license: 'CC BY-SA 4.0'
      }),
      summary: 'Treat Bidoup–Nui Ba as a real protected-area expedition with guide, permit, route, accommodation and weather decisions—not a casual Da Lat detour.',
      lead: 'Bidoup–Nui Ba holds highland forests, rare species and K’Ho cultural landscapes that cannot be responsibly reduced to a viewpoint. The official route contract comes before the photo.',
      orientation: 'Select a park-approved ecology route by duration and ability, and understand that a two-day forest trip has different preparation from a city-side nature walk.',
      arrival: 'Arrange park contact, guide, permit, transport, food and lodging ahead of time. Roads, streams, signal and rescue response are limited compared with Da Lat.',
      sequence: 'Register, brief the group, enter with the guide, move by the approved transect, camp or stay only where authorized, then exit with a clear route and daylight margin.',
      boundary: 'Protect the national park: stay on permitted routes, do not collect orchids or other plants, feed animals, light unauthorized fires or leave plastic.',
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
      duration: 'Reserve one to two days for an official route, depending on the park’s current offerings and the group’s ability.',
      combine: 'Combine with Da Lat only as the base before and after the expedition; do not add a city sightseeing checklist between forest stages.',
      verify: 'Check the Bidoup–Nui Ba official site, current permit and guide requirements, weather, road, accommodation and emergency contact before departure.'
    },
    {
      slug: 'buon-ma-thuot-dray-nur',
      name: 'Buon Ma Thuot & Dray Nur',
      motif: 'Coffee city, basalt water',
      instrument: 'atlas',
      image: image({
        src: '/assets/images/vietnam-dray-nur.webp',
        alt: 'Dray Nur Waterfall near Buon Ma Thuot in Dak Lak',
        source: 'https://commons.wikimedia.org/wiki/File:Dray_Nur_Waterfall_(49483462012).jpg',
        label: 'Dray Nur Waterfall',
        creator: 'Sketyl none',
        license: 'CC BY 2.0'
      }),
      summary: 'Connect Buon Ma Thuot’s coffee and urban highland life with Dray Nur’s basalt river landscape as a separate inland day.',
      lead: 'Buon Ma Thuot is more than a coffee label, and Dray Nur is more than a waterfall. The route works when production, river geology, local communities and water safety stay in the same frame.',
      orientation: 'Use the city as the logistics base, then set one clear rural departure. Keep the waterfall visit practical and weather-led rather than promising guaranteed swimming.',
      arrival: 'Reach Buon Ma Thuot by regional transport, then use a confirmed car or local operator for the rural road. Wet-season conditions can lengthen the last segment.',
      sequence: 'Read the city and coffee context first, travel to the falls in daylight, stay within permitted viewpoints or water areas, then return before river conditions and visibility change.',
      boundary: 'Protect river and community space: do not enter closed water, climb barriers, disturb sacred areas, photograph residents without consent or leave food and plastic behind.',
      stages: [
        ['Set the city base', 'Confirm accommodation, transport, water and a driver before committing to a rural waterfall day.'],
        ['Read the coffee context', 'Use a credible local interpretation or market visit to understand the crop and region without reducing people to a commodity story.'],
        ['Approach the basalt', 'Follow marked paths and observe river, rock and spray from safe ground; enter water only where current staff permit it.'],
        ['Return before change', 'Leave enough time for the rural road, rain and a safe city return; do not add Yok Don after an already physical waterfall day.']
      ],
      risks: [
        ['River force', 'Water level, slippery basalt and hidden currents can change quickly; obey barriers and do not swim where staff do not permit it.'],
        ['Rural road', 'Rain, potholes and low visibility can make the return slower; use a reliable vehicle and avoid dark-road improvisation.'],
        ['Living culture', 'Coffee, village and religious spaces need context and consent; do not photograph workers, rituals or homes as anonymous scenery.']
      ],
      duration: 'Use a full day for city context plus Dray Nur, or separate the urban and waterfall readings when the group wants a slower route.',
      combine: 'Combine with a Buon Ma Thuot city stay; reserve Yok Don for another day with its own guide and dry-forest conditions.',
      verify: 'Check local attraction notices, rainfall and river conditions, safe water areas, vehicle status and the return route before leaving town.'
    },
    {
      slug: 'yok-don-buon-don',
      name: 'Yok Don & Buon Don',
      motif: 'Dry forest, river, living knowledge',
      instrument: 'roadbook',
      image: image({
        src: '/assets/images/vietnam-yok-don.webp',
        alt: 'Dry-season forest landscape in Yok Don National Park',
        source: 'https://commons.wikimedia.org/wiki/File:Yokdon8.JPG',
        label: 'Yok Don National Park in the dry season',
        creator: 'Đỗ Tuấn Hưng',
        license: 'CC BY-SA 3.0'
      }),
      summary: 'Plan Yok Don and Buon Don around dry dipterocarp forest, Srepok River, ethical elephant observation and community-led knowledge.',
      lead: 'Yok Don asks visitors to change their idea of a wildlife day. The value is in habitat, ranger practice, river, seasonal forest and an elephant-friendly model—not in forcing an animal encounter.',
      orientation: 'Use the official park program that matches the season and ability: walking, cycling, birding, river or forest interpretation. Let elephants remain free to choose distance.',
      arrival: 'The park is a substantial road transfer west of Buon Ma Thuot. Confirm the park center, guide, payment, food, signal and return vehicle before leaving the city.',
      sequence: 'Check rain and heat, meet the park team, enter the appropriate forest or river program, observe without pursuit, then return with a full daylight and road buffer.',
      boundary: 'Protect wildlife and communities: choose no-riding observation, never feed or approach elephants, stay with staff, respect Ede and M’Nông villages and leave no trace.',
      stages: [
        ['Read the season', 'Use the park’s current rain, dry-forest and program information to choose an activity that fits the day rather than a fixed animal promise.'],
        ['Meet the park', 'Confirm the official guide, route, payment, safety briefing and community protocol at the park center.'],
        ['Observe at distance', 'Walk, cycle or travel by river as instructed; keep elephants and other wildlife unbaited, unhandled and free to move away.'],
        ['Return the knowledge', 'Leave the forest clean, support legitimate local services and return before heat, darkness or rain makes the long road unsafe.']
      ],
      risks: [
        ['Seasonal road', 'Yok Don’s rain and dry seasons change tracks, river activity, heat and wildlife visibility; check current park conditions.'],
        ['Animal welfare', 'Do not ride, feed, touch, call or corner elephants; use observation and keeper-led forest practice instead.'],
        ['Community respect', 'Ede and M’Nông villages and gong traditions are living culture; use consent, fair payment and quiet participation.']
      ],
      duration: 'Reserve a full day for a focused park program, or an overnight only when official accommodation and transport are confirmed.',
      combine: 'Combine with Buon Ma Thuot before or after the park, not with Dray Nur on a tight single-day loop.',
      verify: 'Check the official Yok Don visitor page, current program and guide, rain and heat, road, payment method and return vehicle before departure.'
    }
  ]
});

export const vietnamCentralClusters = [hue, daNangHoiAn, nhaTrangKhanhHoa, daLatCentralHighlands];
