import { defineVietnamCluster, image } from './vietnam-guide-builder.mjs';

const hue = defineVietnamCluster({
  slug: 'hue',
  name: 'Hue',
  region: 'North Central Coast',
  family: 'violet-rain-archive',
  label: 'Imperial river city · Central Vietnam',
  tagline: 'Read the old capital by water, wall and weather.',
  hubIntro: 'Hue works best as a sequence of related landscapes rather than a checklist of monuments. Use the Citadel as a walkable anchor, then give the river, royal tombs, village lanes, mountain forest and lagoon coast their own time and weather margin.',
  stay: 'Base on the south bank for walkable access to the Citadel, riverfront and central food streets; move closer to the west or south only when a tombs, village or Bach Ma day justifies the transfer.',
  transfer: 'Keep the central city on foot or by short local ride, then use a confirmed taxi, private car or licensed boat for dispersed monuments and nature days. Do not treat every riverbank stop as one same-day loop.',
  sources: [
    ['https://whc.unesco.org/en/list/678', 'UNESCO — Complex of Hué Monuments'],
    ['https://eticket.hueworldheritage.org.vn/', 'Hue Monuments Conservation Centre — official e-ticket portal'],
    ['https://www.vietnam.travel/places-to-go/central-vietnam/hue', 'Vietnam Tourism — Hue transport, weather and official destination overview'],
    ['https://hue.gov.vn/en-us/Home/Tourism/Details/tb/Thanh-Toan-tile-roofed-bridge-the-national-art-and-architecture-relic-598030', 'Hue City Portal — Thanh Toan tile-roofed bridge'],
    ['https://nbca.gov.vn/vuon-quoc-gia-bach-ma/', 'National Biodiversity Conservation — Bach Ma National Park']
  ],
  guides: [
    {
      slug: 'imperial-city-citadel',
      name: 'Imperial City & Citadel',
      motif: 'The court axis',
      instrument: 'axis',
      image: image({
        src: '/assets/images/vietnam-hue-meridian-gate.webp',
        alt: 'Meridian Gate at Hue Imperial City',
        source: 'https://commons.wikimedia.org/wiki/File:Vietnam,_Hue,_Imperial_City_of_Hue,_Meridian_Gate.jpg',
        label: 'Meridian Gate, Hue Imperial City',
        creator: 'Vyacheslav Argenberg',
        license: 'CC BY 4.0'
      }),
      summary: 'Walk the Meridian Gate, imperial courtyards and surviving palace layers with a realistic reading order for Hue’s defended royal city.',
      lead: 'The Citadel is not a single photogenic building. It is a planned relationship between walls, water, ceremonial thresholds and repaired or missing structures. Read the geometry first, then let the details explain what survives.',
      orientation: 'Start with a map and a shaded pause point. The most useful visit links the outer Citadel, Imperial City and remaining Forbidden Purple City traces without pretending every restored surface has the same historical status.',
      arrival: 'Use the central city as the arrival contract: walk, cycle or take a short local ride to the chosen gate, then keep the rest of the visit inside one coherent heritage zone.',
      sequence: 'Enter through the principal ceremonial threshold, move through court-facing spaces, compare restored and ruinous edges, then finish with a quiet exterior view of the moat and city wall.',
      boundary: 'Protect the heritage boundary: never climb, touch, lean on, or cross barriers around walls, timber, stone fragments and active restoration work.',
      stages: [
        ['Choose the gate', 'Check the current official ticket and access notice, select a permitted entrance and arrive with water, sun protection and enough time for a slow first circuit.'],
        ['Read the axis', 'Follow the major ceremonial alignment before chasing individual halls; note how courtyards, gates, walls and water organize movement and rank.'],
        ['Compare evidence', 'Separate original fabric, reconstruction, ruin and interpretation signage. Pause where the site asks for observation rather than another photograph.'],
        ['Leave by the moat', 'Exit through the permitted route, review the river and defensive landscape from public paths, and avoid compressing another distant monument into the same heat window.']
      ],
      risks: [
        ['Entry status', 'Confirm current opening zones, ticket terms and restoration closures through the official Hue heritage portal before setting the day.'],
        ['Heat and rain', 'Hue rain, flooding and humid heat can change comfort and access quickly; carry water and keep a weather fallback for indoor interpretation.'],
        ['Surface safety', 'Uneven paving, steps and wet stone require slower movement, especially after rain and for anyone using wheels or limited mobility.']
      ],
      duration: 'Give the Citadel at least a generous half day; add a second session when the group wants both architectural detail and unhurried riverbank context.',
      combine: 'Combine with the central riverfront or Dong Ba food area, not with all three royal tombs and a mountain excursion on the same day.',
      verify: 'Recheck the Hue e-ticket portal, official conservation notices, weather and any temporary access restrictions immediately before visiting.'
    },
    {
      slug: 'royal-tombs',
      name: 'Royal Tombs of Minh Mang, Tu Duc & Khai Dinh',
      motif: 'Three landscapes of remembrance',
      instrument: 'ledger',
      image: image({
        src: '/assets/images/vietnam-hue-minh-mang-tomb.webp',
        alt: 'Stone animals and garden landscape at Minh Mang Tomb in Hue',
        source: 'https://commons.wikimedia.org/wiki/File:Minh-Mang-Royal-Tomb.jpg',
        label: 'Minh Mang Royal Tomb',
        creator: 'Pham Van Hoa',
        license: 'CC BY-SA 4.0'
      }),
      summary: 'Compare three Nguyen royal tomb landscapes by axis, garden, hill and material rather than rushing through a generic monument loop.',
      lead: 'The tombs are dispersed memorial landscapes, not interchangeable palace rooms. A useful day compares how each ruler shaped water, terrain, garden, ceremony and the visitor’s approach.',
      orientation: 'Treat the three sites as separate entries in a visual ledger. Mark the one that needs the most steps and the one that deserves the longest quiet pause before choosing the order.',
      arrival: 'Leave the central city with a confirmed car, taxi or carefully planned bicycle route; boat combinations can be atmospheric but depend on current river operations and weather.',
      sequence: 'Begin with the most accessible landscape, use the second site to compare garden and water logic, then reserve the final stop for the steepest or most detailed architecture while light remains usable.',
      boundary: 'Protect funerary dignity and historic fabric: do not climb roofs, sit on monuments, touch inscriptions or turn prayer and memorial spaces into staged props.',
      stages: [
        ['Set the comparison', 'Choose three criteria—approach, water and material—and record them before leaving the first tomb so the visits remain analytical rather than repetitive.'],
        ['Read the garden', 'Follow the designed relationship between gates, courtyards, lakes, pavilions and hills; let the setting explain the tomb instead of isolating the central structure.'],
        ['Slow the detail', 'Reserve time for ceramic, stone, brick and inscription work, especially where restoration and weathering make the historical record uneven.'],
        ['Return with margin', 'Finish at a point with reliable road access, keep a meal and weather buffer, and do not attach a late cross-city transfer to a dispersed heritage day.']
      ],
      risks: [
        ['Dispersed transfers', 'The tombs lie in different directions along and beyond the Perfume River; confirm the vehicle, waiting arrangement and return plan rather than relying on one informal ride.'],
        ['Steps and exposure', 'Uneven paths, steep stairs, sun and wet surfaces can make the final site slower than expected; plan rests and suitable footwear.'],
        ['Flood and closure', 'Rain, river conditions, restoration and temporary heritage restrictions can alter the best order; check the official ticket and local notices.']
      ],
      duration: 'Use a full day for three tombs with real pauses; two tombs can form a more comfortable half-day when heat or mobility is a concern.',
      combine: 'Pair with a central-city evening or Thien Mu on a separate river day; avoid adding Bach Ma or Lang Co to this already dispersed route.',
      verify: 'Confirm the current multi-site ticket options, road and weather conditions, boat availability if relevant, and each site’s open areas before departure.'
    },
    {
      slug: 'thien-mu-perfume-river',
      name: 'Thien Mu & Perfume River',
      motif: 'A river of prayer',
      instrument: 'ribbon',
      image: image({
        src: '/assets/images/vietnam-hue-thien-mu.webp',
        alt: 'Thien Mu Temple and Pagoda beside the Perfume River in Hue',
        source: 'https://commons.wikimedia.org/wiki/File:Hue_Vietnam_Thien-Mu-Temple-and-Pagoda-01.jpg',
        label: 'Thien Mu Temple and Pagoda',
        creator: 'CEphoto, Uwe Aranas',
        license: 'CC BY-SA 3.0'
      }),
      summary: 'Follow the Perfume River to Thien Mu Pagoda and the west-bank religious landscape with a route paced for worship, shade and water.',
      lead: 'Thien Mu is both a recognizable landmark and a living religious complex. The river approach matters because Hue’s spiritual geography is carried by water, hills, gardens and the pace between them.',
      orientation: 'Read the pagoda as a working place of devotion before reading it as a viewpoint. Keep the river, tower, courtyards and surrounding shade in one quiet sequence.',
      arrival: 'Reach the west bank by road or a currently operating river service. Confirm the boarding point and return arrangement because water levels, weather and boat operations change.',
      sequence: 'Approach along the river, pause outside the main worship flow, visit only public areas, then continue through the nearby landscape rather than treating the pagoda as a quick photo stop.',
      boundary: 'Protect the religious boundary: dress modestly, lower voices, ask before photographing people or ceremonies, and never enter a marked monastic or ritual area.',
      stages: [
        ['Choose the waterline', 'Decide whether the day begins on foot, by road or by an authorized boat, then confirm the return path before entering the pagoda grounds.'],
        ['Pause at the threshold', 'Observe the tower, gate and river relationship from public space; let worshippers move first and avoid blocking stairs or offerings.'],
        ['Read the living complex', 'Notice courtyards, gardens, incense and ordinary religious activity without turning private devotion into a performance for visitors.'],
        ['Release the river', 'Continue to a quiet public riverbank, hydrate and return before changing light or weather turns the boat or road connection into a rushed exit.']
      ],
      risks: [
        ['Boat variability', 'River departures, boarding points and return times are not guaranteed by an itinerary; confirm the operator and keep a land-side fallback.'],
        ['Ritual sensitivity', 'Active worship can make areas temporarily unavailable; follow staff instructions and do not photograph restricted rituals.'],
        ['Wet access', 'Steps, river edges and stone surfaces become slippery after rain; keep children away from unguarded water and move slowly.']
      ],
      duration: 'Allow a calm half day, with extra time if the group wants a river approach and a respectful visit rather than a single viewpoint.',
      combine: 'Combine with a west-bank garden or monastery only when the group can keep the day quiet; pair the royal tombs on another route.',
      verify: 'Check current river service, weather, religious-event notices and any visitor restrictions before choosing a boat or fixed return time.'
    },
    {
      slug: 'thanh-toan-rural-loop',
      name: 'Thanh Toan Rural & Canal Loop',
      motif: 'The working village edge',
      instrument: 'field',
      image: image({
        src: '/assets/images/vietnam-hue-thanh-toan.webp',
        alt: 'Thanh Toan tiled bridge near the rural waterways of Hue',
        source: 'https://commons.wikimedia.org/wiki/File:Thanh_Toan_Br%C3%BCcke_IMG_0285.jpg',
        label: 'Thanh Toan Tiled Bridge',
        creator: 'Exvil-lachwien',
        license: 'CC BY-SA 4.0'
      }),
      summary: 'Cycle or ride through rice fields, irrigation lanes and Thanh Toan’s tiled bridge to meet the agricultural rhythm just beyond Hue.',
      lead: 'Thanh Toan is valuable because the bridge sits inside a working community rather than a sealed museum. The route should leave room for farmers, market sellers, worshippers and ordinary traffic.',
      orientation: 'Use the bridge, canal and agricultural displays as anchors, then let the lanes between them remain unscripted. This is a village edge, not a staged rural theme park.',
      arrival: 'A bicycle, local driver or careful motorbike route works better than a large vehicle on narrow lanes. Confirm the return route and road surface after rain.',
      sequence: 'Leave the city on the quietest safe road, cross the village landscape, pause at the bridge and agricultural interpretation, then return by a different public lane only if conditions allow.',
      boundary: 'Protect the community boundary: ask before photographing residents, homes, shrines or private fields, and never block the bridge or market circulation.',
      stages: [
        ['Check the wheels', 'Choose a safe bicycle or driver, carry water and a rain layer, and confirm a route that stays on public roads rather than farm tracks.'],
        ['Read the canal', 'Watch how paths, irrigation, gardens and village traffic fit together; slow down at blind corners and give local vehicles priority.'],
        ['Meet the bridge', 'Visit the tiled bridge and nearby displays as heritage and community places, leaving room for worship and daily movement.'],
        ['Return lightly', 'Buy locally where appropriate, take all waste back with you and use the safest available road rather than forcing a scenic shortcut.']
      ],
      risks: [
        ['Narrow-road traffic', 'Lanes can carry motorcycles, farm vehicles and pedestrians without shoulders; use a helmet and avoid riding beyond your confidence.'],
        ['Rain and mud', 'Heavy rain can make canalside edges and bridge approaches slippery or flooded; keep a turn-back point visible.'],
        ['Community privacy', 'A working village is not an open studio; seek consent and do not enter yards, fields, houses or shrines without permission.']
      ],
      duration: 'Plan a half day at an unhurried pace; longer loops should be built around daylight and road confidence, not a fixed mileage target.',
      combine: 'Pair with a relaxed central-city food stop or riverfront evening; do not bolt it onto three tombs simply because both routes leave Hue.',
      verify: 'Check local tourism notices, bridge or market access, rain conditions and the selected bicycle or driver arrangement on the day.'
    },
    {
      slug: 'bach-ma-national-park',
      name: 'Bach Ma National Park',
      motif: 'Rainforest above the coast',
      instrument: 'contour',
      image: image({
        src: '/assets/images/vietnam-hue-bach-ma.webp',
        alt: 'Bach Ma mountain range beneath late-afternoon light on the central coast',
        source: 'https://commons.wikimedia.org/wiki/File:D%C3%A3y_B%E1%BA%A1ch_M%C3%A3.jpg',
        label: 'Bach Ma mountain range',
        creator: 'Lê Đăng Khôi',
        license: 'CC0'
      }),
      summary: 'Plan Bach Ma as a managed mountain-forest day or overnight, choosing one official trail family instead of overloading a wet highland route.',
      lead: 'Bach Ma changes the Hue story from dynastic geometry to biodiversity, elevation and rain. Its trails, waterfalls and viewpoints deserve the same respect as a heritage site, with more attention to weather and rescue distance.',
      orientation: 'Choose between a short interpretation walk, a waterfall route and a summit or viewpoint day. The park entrance is not the end of the transfer; the mountain road and trail conditions are part of the plan.',
      arrival: 'Use a confirmed vehicle and, when required, park registration, guide or approved transfer. Expect the final approach to be slower than the city-to-gate map suggests.',
      sequence: 'Register and check the day’s permitted zones, move from the lower forest into the chosen trail, stop before fatigue or weather becomes a hazard, and return with daylight margin.',
      boundary: 'Protect the park boundary: stay on marked trails, do not feed wildlife, collect plants, enter closed forest or light fires outside designated areas.',
      stages: [
        ['Read the forecast', 'Check rain, cloud, road and park notices before leaving Hue; select a route whose return can remain safe if visibility deteriorates.'],
        ['Register the route', 'Confirm entry, guide, shuttle and trail requirements with the park, then share the intended route and return time with the driver or travel companion.'],
        ['Move by contour', 'Take measured breaks on the ascent, keep to the trail and observe forest, stream and elevation changes without approaching wildlife.'],
        ['Exit before dark', 'Turn around with weather and daylight margin, leave no trace, and keep the road journey back separate from an ambitious late-night connection.']
      ],
      risks: [
        ['Rain and landslide', 'Bach Ma receives heavy rain and mountain weather can shift quickly; trails, streams and roads may close or become unsafe.'],
        ['Remote response', 'Signal, transport and emergency response are limited compared with Hue; carry essentials and do not split from the group.'],
        ['Protected habitat', 'Rare species and recovering forest require distance, silence and no collection, feeding, baiting or off-trail shortcuts.']
      ],
      duration: 'Use a full day for a focused route and an overnight only with confirmed park accommodation, guide and weather margin.',
      combine: 'Combine with Lang Co only as a separate transfer day when the park and road conditions are stable; do not add the Citadel or tombs after a long trek.',
      verify: 'Recheck the official park or national conservation notice, trail status, guide or permit requirement, road weather and the return vehicle before setting out.'
    },
    {
      slug: 'lang-co-lap-an-lagoon',
      name: 'Lang Co & Lap An Lagoon',
      motif: 'Where the road meets the lagoon',
      instrument: 'tide',
      image: image({
        src: '/assets/images/vietnam-hue-lap-an.webp',
        alt: 'Lap An Lagoon and the Bach Ma mountain range near Lang Co',
        source: 'https://commons.wikimedia.org/wiki/File:Lang_Co_lagoon,_Lap_An_lagoon,_Vietnam.jpg',
        label: 'Lang Co and Lap An Lagoon',
        creator: 'Vyacheslav Argenberg',
        license: 'CC BY 4.0'
      }),
      summary: 'Use Lang Co and Lap An Lagoon as a mountain-and-sea transfer chapter linking Hue, the Hai Van coast, working waters and the Bach Ma foothills.',
      lead: 'The lagoon is not simply a scenic pause between cities. It is a working waterscape shaped by tide, mountain weather, road safety and local livelihoods, so the route needs a clear departure and return contract.',
      orientation: 'Read the landscape in layers: road, lagoon, fishing activity, mountain and sea. Leave room for a short stop rather than promising a complete coastal tour in one rigid schedule.',
      arrival: 'Use a private car, licensed transfer or a carefully planned road itinerary; the best stop depends on traffic, safe pull-outs, weather and current access to the lagoon edge.',
      sequence: 'Travel from the Hue side with a daylight margin, stop only at safe public viewpoints or businesses, observe the lagoon without entering working areas, then continue or return before mountain weather worsens.',
      boundary: 'Protect the working lagoon: do not walk through aquaculture plots, collect shellfish, enter private jetties or treat fishing families as scenery without consent.',
      stages: [
        ['Contract the road', 'Confirm vehicle, driver, route and weather before leaving; identify a safe public stop and a backup rather than stopping on a high-speed shoulder.'],
        ['Read the water', 'Observe the lagoon, boats, shore vegetation and mountain backdrop from a permitted edge, keeping clear of work zones and tidal mud.'],
        ['Choose the coast', 'Decide whether the day continues toward the Hai Van corridor or returns to Hue; do not let a scenic pause erase the transfer buffer.'],
        ['Close the loop', 'Leave the shoreline clean, keep food and water plans realistic, and finish the road segment in daylight whenever possible.']
      ],
      risks: [
        ['Road exposure', 'Highway traffic, narrow coastal shoulders and poor visibility make informal photo stops dangerous; use marked parking or an operator’s safe stop.'],
        ['Tide and weather', 'Tide, wind, rain and mountain visibility alter the shoreline experience and may close roads or boat-related activities.'],
        ['Working waters', 'Aquaculture, fishing gear and private access are not visitor infrastructure; keep distance and ask before photographing people or boats.']
      ],
      duration: 'Allow a half day for a focused lagoon and coast chapter, or make it a deliberate transfer day between Hue and the central coast.',
      combine: 'Combine with Bach Ma only when the park exit and coastal road are both confirmed; otherwise keep the lagoon as the main destination.',
      verify: 'Check the current Hue tourism notice, coastal weather, tide, road condition, public access and the driver’s safe stopping plan before departure.'
    }
  ]
});

const daNangHoiAn = defineVietnamCluster({
  slug: 'da-nang-hoi-an',
  name: 'Da Nang & Hoi An',
  region: 'Central Coast',
  family: 'coast-lantern',
  label: 'Sea, river and Cham heritage · Central Vietnam',
  tagline: 'Split the coast by tide, temple and town.',
  hubIntro: 'Da Nang and Hoi An share an airport corridor but not one travel rhythm. Keep the city beach, Son Tra forest, limestone shrines, living old town and inland Cham sanctuary as separate chapters with their own access, conduct and weather decisions.',
  stay: 'Use Da Nang for beach, city and Son Tra access; use Hoi An when the old town, countryside or evening heritage rhythm is the main reason for staying. The two bases are connected, but not interchangeable.',
  transfer: 'Build from the Da Nang airport and city road network, then protect the longer Hoi An and My Son legs with daylight and weather margin. A short map distance does not remove beach traffic, flood or site-entry constraints.',
  sources: [
    ['https://www.vietnam.travel/places-to-go/central-vietnam/da-nang', 'Vietnam Tourism — Da Nang transport, beach, Son Tra and Marble Mountains'],
    ['https://whc.unesco.org/en/list/948', 'UNESCO — Hoi An Ancient Town'],
    ['https://whc.unesco.org/en/list/949', 'UNESCO — My Son Sanctuary'],
    ['https://hoianheritage.danang.gov.vn/en/news/news-events/announcement-of-the-visiting-in-hoi-an-ancient-town-125.html', 'Hoi An World Cultural Heritage Conservation Center — visitor announcement'],
    ['https://visitdanang.travel/en/son-tra-peninsula-a-captivating-coastal-and-island-destination-in-da-nang-9028', 'Da Nang Tourism — Son Tra Peninsula']
  ],
  guides: [
    {
      slug: 'han-river-city-core',
      name: 'Han River & Da Nang City Core',
      motif: 'The working waterfront',
      instrument: 'zine',
      image: image({
        src: '/assets/images/vietnam-da-nang-han-river.webp',
        alt: 'Han River and the Da Nang city waterfront',
        source: 'https://commons.wikimedia.org/wiki/File:Han_River,_Da_Nang,_Vietnam_-_20230819.jpg',
        label: 'Han River, Da Nang',
        creator: 'Somerset999',
        license: 'CC BY-SA 4.0'
      }),
      summary: 'Build a walkable Da Nang day around the Han River, bridges, Cham sculpture and everyday waterfront life instead of a list of photo stops.',
      lead: 'Da Nang’s identity is not only a beach resort skyline. The Han River connects civic spaces, bridges, food streets, fishing memory and Cham collections, giving a city chapter a useful human scale.',
      orientation: 'Choose a riverbank and a cultural interior before adding dinner or nightlife. Bridges are orientation devices, not reasons to cross the whole city at every hour.',
      arrival: 'Use the airport, central hotels and ride-hailing network as practical anchors. Crossing roads, bridge traffic and event controls can matter more than the nominal distance between points.',
      sequence: 'Start with daylight on one riverbank, move through one museum or civic layer, pause for food, then return to the water after dark only where pedestrian access is clear.',
      boundary: 'Protect the river and collections: stay behind barriers, follow museum photography rules, keep clear of traffic and do not treat local people as background props.',
      stages: [
        ['Pick one bank', 'Choose a safe starting point and a return side before the walk; check heat, traffic and any bridge or event controls.'],
        ['Read the city', 'Connect river edge, bridge structure, public space and food market to understand how Da Nang lives with its water.'],
        ['Enter the archive', 'Use a museum or interpretation space to place Cham and modern city history in context rather than flattening them into decoration.'],
        ['Close at the water', 'Return through a lit pedestrian route, keep valuables secure and leave enough time for traffic or a weather change before the next transfer.']
      ],
      risks: [
        ['Traffic crossings', 'Wide roads, scooters and bridge approaches require deliberate crossings; do not let a scenic viewpoint pull the group into a live lane.'],
        ['Heat and storms', 'Central-coast heat, rain and event crowding can change a walking circuit; keep an indoor or shaded alternative.'],
        ['Collection etiquette', 'Museum objects and sacred imagery have their own photography and conduct rules; follow staff rather than assuming every gallery is camera-ready.']
      ],
      duration: 'Use a half day for a compact river and culture walk, or a full day when the group wants separate daylight and evening readings.',
      combine: 'Combine with My Khe only if the beach is treated as a separate coast window; save Son Tra and Marble Mountains for their own access conditions.',
      verify: 'Check current museum hours, bridge or event restrictions, weather and the safest pedestrian route before leaving the hotel.'
    },
    {
      slug: 'son-tra-peninsula',
      name: 'Son Tra Peninsula Wildlife & Linh Ung',
      motif: 'Forest above the bay',
      instrument: 'signal',
      image: image({
        src: '/assets/images/vietnam-da-nang-son-tra.webp',
        alt: 'Ornate entrance gate to Linh Ung Pagoda on Son Tra Peninsula',
        source: 'https://commons.wikimedia.org/wiki/File:Son-Tra-Peninsula_Da-Nang_Vietnam_Linh-Ung-Pagoda-01.jpg',
        label: 'Gate to Linh Ung Pagoda, Son Tra Peninsula',
        creator: 'CEphoto, Uwe Aranas',
        license: 'CC BY-SA 3.0'
      }),
      summary: 'Plan Son Tra as a forest and wildlife route with Linh Ung, viewpoints and red-shanked douc langur ethics at its center.',
      lead: 'Son Tra is a protected coastal forest beside a fast-growing city. The best visit makes the habitat visible, keeps the road safe and treats the pagoda as a sacred place rather than a backdrop.',
      orientation: 'Choose a small number of viewpoints and allow the forest itself to do the work. Wildlife sightings are never guaranteed and should never be manufactured.',
      arrival: 'Use a roadworthy vehicle, helmet and a driver comfortable with winding mountain roads. Some roads, viewpoints and access arrangements can be restricted by weather or local management.',
      sequence: 'Climb with a weather check, visit the pagoda respectfully, scan the forest from legal viewpoints, then descend before rain, darkness or fatigue changes the road risk.',
      boundary: 'Protect the douc langur habitat: no feeding, chasing, calling, touching, flash photography, drones or off-road approach; carry all waste back down.',
      stages: [
        ['Check the road', 'Confirm weather, road restrictions, vehicle condition and fuel before committing to the peninsula’s winding ascent.'],
        ['Cross the threshold', 'Visit Linh Ung in modest clothing and with quiet attention, leaving prayer spaces and resident worshippers undisturbed.'],
        ['Watch without pursuit', 'Use binoculars and patience from legal viewpoints; a missed animal is a successful ethical visit, not a reason to move closer.'],
        ['Descend early', 'Keep a daylight and rain buffer for the descent, then return to the city without adding another mountain road to the same evening.']
      ],
      risks: [
        ['Wildlife disturbance', 'Red-shanked douc langurs are endangered; feeding, baiting, crowding or loud behavior can harm the animals and the forest.'],
        ['Winding road', 'Wet pavement, blind bends, loose gravel and traffic make speed and roadside stops dangerous; use marked pull-outs only.'],
        ['Sacred conduct', 'Linh Ung and other religious spaces require modest dress, quiet movement and compliance with photography restrictions.']
      ],
      duration: 'Allow most of a day for a careful peninsula circuit; a short city stop is not enough to justify a rushed summit drive.',
      combine: 'Combine with the city core only before or after the forest window; keep Marble Mountains and My Khe separate so road and beach conditions remain visible.',
      verify: 'Check local Son Tra access notices, weather, road status, wildlife guidance and the vehicle or driver plan before departure.'
    },
    {
      slug: 'marble-mountains-non-nuoc',
      name: 'Marble Mountains & Non Nuoc',
      motif: 'Caves, shrines and stone',
      instrument: 'section',
      image: image({
        src: '/assets/images/vietnam-da-nang-marble-mountains.webp',
        alt: 'Cave shrine, stone statues and visitors inside the Marble Mountains',
        source: 'https://commons.wikimedia.org/wiki/File:Marble_Mountains_-_Ngu_Hanh_Son_District_-_South_of_Da_Nang_City_-_Vietnam_(1).jpg',
        label: 'Marble Mountains, Ngu Hanh Son',
        creator: 'Muralikrishna m',
        license: 'CC BY-SA 4.0'
      }),
      summary: 'Read the Marble Mountains through limestone, cave light, active worship and Non Nuoc craft rather than treating the site as a quick staircase.',
      lead: 'Ngu Hanh Son compresses geology, Buddhist and folk practice, cave acoustics, city growth and stone craft into a small but physically demanding landscape.',
      orientation: 'Choose the mountain, cave and temple layers that match the group’s mobility. The route is vertical and surfaces can be wet, dark and crowded.',
      arrival: 'A short taxi or ride from Da Nang is practical, but the final visit is on foot with stairs and uneven rock. Check current entrances, elevator availability and permitted areas.',
      sequence: 'Arrive before the hottest crowd period, climb slowly, move through caves and shrines with quiet attention, then descend to the craft and neighborhood layer without blocking workshops.',
      boundary: 'Protect cave, temple and craft boundaries: no touching carvings, climbing shrine structures, collecting stone or entering workshops and homes without invitation.',
      stages: [
        ['Choose the climb', 'Check the group’s ability, shoes, water and the current visitor route before selecting a mountain or cave sequence.'],
        ['Read the rock', 'Notice light, ventilation, erosion and the way temples occupy the limestone rather than rushing from one named chamber to the next.'],
        ['Respect worship', 'Lower voices, dress appropriately and keep clear of incense, altars and active religious movement inside the caves.'],
        ['Meet the craft edge', 'Visit public workshops or displays by consent, then leave with no unverified stone extraction or wildlife souvenir.']
      ],
      risks: [
        ['Stairs and wet rock', 'Steep steps, low ceilings, darkness and slick surfaces can cause falls; use handrails and turn back when footing deteriorates.'],
        ['Crowding', 'Narrow caves and stairways amplify congestion; avoid stopping at thresholds and follow staff flow instructions.'],
        ['Religious sensitivity', 'Shrines remain active places of worship; photography, clothing and behavior must follow local signs and temple guidance.']
      ],
      duration: 'Use a focused half day with time for recovery; visitors with limited mobility should verify accessible sections before arrival.',
      combine: 'Pair with My Khe or Hoi An only when the cave visit ends with a clear road buffer; do not combine it with a full Son Tra circuit by default.',
      verify: 'Check official or local site notices, access and elevator status, weather, footwear needs and any conservation closures before visiting.'
    },
    {
      slug: 'my-khe-an-thuong',
      name: 'My Khe Beach & An Thuong',
      motif: 'The city’s open edge',
      instrument: 'chart',
      image: image({
        src: '/assets/images/vietnam-da-nang-my-khe.webp',
        alt: 'My Khe Beach on the Da Nang coast',
        source: 'https://commons.wikimedia.org/wiki/File:My_Khe_Beach_18.jpg',
        label: 'My Khe Beach, Da Nang',
        creator: 'Christophe95',
        license: 'CC BY-SA 4.0'
      }),
      summary: 'Use My Khe and An Thuong for a practical beach-and-city chapter focused on sunrise, swimming conditions, food and local public space.',
      lead: 'My Khe is part of Da Nang’s daily life as much as its visitor economy. A good guide distinguishes public beach use, hotel frontage, fishing activity, nightlife and the changing sea rather than promising one permanent resort mood.',
      orientation: 'Plan around light, tide and the group’s preferred energy: dawn movement, a shaded midday pause and an evening food route are different experiences.',
      arrival: 'The coast is easy to reach from central Da Nang, but road crossings, parking, heat and peak beach density can make the last few blocks slower than expected.',
      sequence: 'Check the beach flags, walk the public edge, choose a supervised swim zone if conditions allow, then move inland to An Thuong for food without carrying wet beach behavior into local businesses.',
      boundary: 'Protect swimmers, fishermen and the public shore: obey flags and lifeguards, avoid restricted water, keep noise reasonable and leave sand, drains and streets clean.',
      stages: [
        ['Read the flags', 'Check the current beach warning signs, lifeguard presence, tide and weather before anyone enters the water.'],
        ['Take the public edge', 'Walk from a safe access point, observe local morning routines and keep clear of equipment, boats and working shoreline areas.'],
        ['Choose the swim', 'Swim only where current guidance permits, stay with the group and stop immediately if waves, currents or visibility change.'],
        ['Shift to the street', 'Rinse, dry and move inland for food and rest, respecting restaurant rules and keeping sand out of shared interiors.']
      ],
      risks: [
        ['Sea conditions', 'Wind, tide, rip currents, storms and warning flags can change within a day; a beautiful surface is not proof of safe swimming.'],
        ['Sun and heat', 'Use shade, water and a shorter exposure window; children and older travelers may need a slower beach schedule.'],
        ['Traffic and belongings', 'Busy coastal roads and crowded public areas require deliberate crossings and ordinary precautions for phones, bags and rental equipment.']
      ],
      duration: 'A half day works for beach and food; a full day should include a real midday recovery rather than continuous sun exposure.',
      combine: 'Combine with Han River for an urban day, or Hoi An for a separate evening; avoid putting a beach swim immediately before a long road transfer.',
      verify: 'Check the beach warning flags, lifeguard coverage, tide, marine forecast and local access notices before swimming.'
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
        license: 'CC BY-SA 4.0'
      }),
      summary: 'Plan Hoi An as a living World Heritage town of houses, river trade, worship and residents, with entry rules and flood weather built into the walk.',
      lead: 'Hoi An’s value is the relationship between architecture, commerce, river, memory and present-day residents. The old town should be read slowly enough that living use remains visible.',
      orientation: 'Choose a compact route by street, river edge or selected ticketed buildings. The town is more rewarding when the group does not try to enter every monument.',
      arrival: 'Reach Hoi An by road from Da Nang or another regional base, then walk or cycle inside the appropriate pedestrian zone. Entry points, ticket validity and vehicle restrictions can change.',
      sequence: 'Begin in daylight with a heritage building sequence, pause away from the busiest lanes, then return for the lantern atmosphere only after checking rain, water level and crowd movement.',
      boundary: 'Protect the living heritage boundary: follow ticket and building rules, do not touch timber or altars, ask residents before photographing and keep doorways clear.',
      stages: [
        ['Choose the town scale', 'Check the current visitor announcement, ticket arrangement and walking restrictions, then select a few buildings that tell a coherent story.'],
        ['Read the port', 'Follow street, house, assembly hall and river relationships to understand why Hoi An is more than a lantern photograph.'],
        ['Leave living room', 'Step aside for residents, deliveries and worshippers; use public rest areas rather than occupying private thresholds.'],
        ['Return by weather', 'Decide whether an evening walk is sensible after checking rain, flood conditions and crowd density, then leave the old town clean and quiet.']
      ],
      risks: [
        ['Flood and storms', 'Hoi An’s annual flood and storm pattern can change streets, access and building operations; keep a dry-day alternative.'],
        ['Heritage wear', 'Crowding, touching, flash and large equipment can damage old interiors; follow the conservation center’s rules.'],
        ['Shared streets', 'Pedestrian, bicycle, delivery and boat movement overlap; keep children close and avoid stopping in narrow doorways or bridges.']
      ],
      duration: 'Give the old town one full daylight-to-evening arc, or split it into two shorter visits when heat, mobility or rain is a concern.',
      combine: 'Combine with Cam Kim or Tra Que only as a separate countryside chapter; My Son deserves a different departure and return buffer.',
      verify: 'Recheck the Hoi An heritage center’s current ticket, hours, pedestrian rules, weather and flood notices before the walk.'
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
        license: 'CC BY 4.0'
      }),
      summary: 'Make My Son an early, respectful inland heritage journey through Cham architecture, valley ecology, conservation and marked visitor routes.',
      lead: 'My Son is a sacred architectural landscape shaped by a millennium of Cham history, conflict, conservation and weather. Its valley setting and surviving brick technology matter as much as the individual tower group.',
      orientation: 'Arrive with enough energy for heat and walking, and use official interpretation to distinguish standing monuments, damaged areas and ongoing research.',
      arrival: 'Travel by confirmed car or regulated excursion from Hoi An or Da Nang. The inland approach, heat and return distance make a late departure a poor default.',
      sequence: 'Reach the visitor entrance early, follow the permitted shuttle or path, read the main groups in sequence, then return by the marked route without entering forest or unpresented archaeology.',
      boundary: 'Protect the sanctuary and buffer: never climb or touch towers, leave marked paths, do not disturb soil or artifacts, and treat unexploded-ordnance warnings as absolute.',
      stages: [
        ['Protect the departure', 'Confirm road, weather, entry and return vehicle before leaving the coast; carry water, sun protection and shoes for uneven ground.'],
        ['Read the valley', 'Notice the ring of hills, stream and forest context before approaching individual tower groups.'],
        ['Compare the brick', 'Use official interpretation to understand Cham engineering, iconography, damage and conservation without crossing barriers.'],
        ['Return on the mark', 'Stay on the visitor route, leave no trace and keep the return to Hoi An or Da Nang separate from a tight flight or train connection.']
      ],
      risks: [
        ['Heat and rain', 'Open valley paths, high humidity, flooding and storms can affect comfort and presentation; carry a weather fallback.'],
        ['Unexploded ordnance', 'UNESCO identifies unresolved UXO risk in parts of the buffer; never leave marked visitor routes or enter closed vegetation.'],
        ['Fragile heritage', 'Brick, sandstone and archaeological ground are vulnerable to touch, climbing and unauthorized access; follow staff and barriers.']
      ],
      duration: 'Use most of a half day plus road margin; a full day is reasonable when paired with a carefully chosen Cham museum or local food stop.',
      combine: 'Combine with Hoi An only when the return road and evening plan remain flexible; do not attach Son Tra, Marble Mountains and My Son to one rushed circuit.',
      verify: 'Check UNESCO or site management notices, current entrance and shuttle arrangements, weather, road conditions and any closed groups before departure.'
    }
  ]
});

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
