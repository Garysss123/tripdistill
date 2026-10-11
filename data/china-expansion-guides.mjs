import { guides as northPlainsGuides } from './china-north-plains-guides.mjs';
import { guides as eastLowerYangtzeGuides } from './china-east-lower-yangtze-guides.mjs';

// Retained in the image inventory for provenance only; this photo is not used on any live page.
export const retiredImageRecords = [
  {
    src: '/assets/images/china-destination-lhasa.webp',
    source: 'https://commons.wikimedia.org/wiki/File:Potala_Palace_HQ.jpg',
    commonsTitle: 'File:Potala Palace HQ.jpg',
    creator: 'Lhasa Government (source-page credit; independently unverified)',
    license: null,
    rightsStatus: 'Reuse permission unverified; a deletion nomination cites missing evidence for the stated license.',
    rightsStatusUrl: 'https://commons.wikimedia.org/wiki/File:Potala_Palace_HQ.jpg',
    commercialReuseEligibility: 'unknown',
    attributionTerms: 'No reuse permission is asserted; source-page creator attribution is retained as unverified provenance only.',
    assetType: 'photographic-raster',
    localSha1: '754b10b0d96795928b082be98de69f92c2b11b73',
    inventoryStatus: 'unused',
    retirementNote: 'Removed from all live display and credit references on 2026-10-11. Commons deletion nomination opened 2026-06-04 cites no evidence that the image was released under the given license. The file is retained locally for provenance; the page license label is not treated as permission.',
    editHistory: 'Legacy resized WebP retained locally for provenance only; no live use or reuse permission is asserted.'
  }
];

export const guides = [
  {
    slug: 'guangzhou',
    dateModified: '2026-10-10',
    name: 'Guangzhou',
    title: 'Guangzhou Travel Guide (2026): Pearl River, Food and Lingnan Routes',
    metaDescription: 'Plan Guangzhou through Pearl River geography, Lingnan architecture, museums, markets and Cantonese meals, with four coherent days and station-specific advice.',
    ogTitle: 'Guangzhou: Read the Pearl River Like a Banquet Table',
    themeColor: '#6f1d2c',
    visual: 'pearl-banquet',
    eyebrow: 'Guangdong / river port and food city',
    titleAccent: 'read the Pearl River like a banquet table',
    intro: 'Guangzhou rewards sequencing rather than landmark collecting. The old trading districts, Lingnan clan architecture, contemporary Zhujiang New Town and the riverfront belong to different urban stories. Base yourself near the first two days’ sights, work west-side heritage before shifting to the central and southern river axis, and use the museum or a meal as the indoor anchor when heat or rain makes long walks unpleasant. It suits visitors who enjoy food, museums and several distinct neighborhoods; it is a poor match for a one-day, walk-only landmark sprint.',
    nights: '3–4 nights',
    coreLogic: 'old west + river + new axis',
    watchFirst: 'station name and meal timing',
    motifs: ['Pearl River', 'Arcades', 'Craft', 'Dim sum'],
    orientationTitle: 'Set the table by riverbank and historical layer',
    orientationIntro: 'The useful planning unit is not “downtown Guangzhou.” It is a sequence of west-side heritage, central civic space, the southern river crossing and one deliberate food neighborhood. These eight chapters can be combined without spending the day reversing direction.',
    chapters: [
      { label: 'LINGNAN COURTYARD', title: 'Chen Clan Academy and Liwan craft', text: 'Begin with the Chen Clan Ancestral Hall for carved wood, stone, ceramic and plaster detail, then continue into Liwan only as far as one arcade street or traditional craft stop. Verify museum entry procedures and resist pairing it with the distant modern axis before lunch.' },
      { label: 'ARCADE WALK', title: 'Enning Road, Yongqing Fang and Xiguan', text: 'Use this western chapter to read qilou arcades, residential lanes and the pressure of adaptive reuse. Treat polished commercial courtyards and lived-in streets as different evidence, ask before photographing residents, and keep the walk short enough for an unhurried meal.' },
      { label: 'ISLAND ARCHIVE', title: 'Shamian and the treaty-port layer', text: 'Shamian is compact, shaded and visually distinct, but its architecture needs historical context rather than a photo-only lap. Pair the island with nearby waterfront movement or Liwan, not with a cross-city list of every colonial-era facade.' },
      { label: 'CITY ORIGIN', title: 'Yuexiu, the museum and older Guangzhou', text: 'Yuexiu Park and city museums can explain Guangzhou before the skyline. Check museum closure days and reservation rules, choose one collection with real attention, and use the park as connective ground instead of treating every monument as a compulsory stop.' },
      { label: 'CIVIC AXIS', title: 'Zhujiang New Town in section', text: 'Huacheng Square, the library, opera house, Guangdong Museum and Canton Tower form a designed axis across the river. Decide whether the chapter is about architecture, a museum collection or a night skyline; trying to do all three usually produces queues and little interpretation.' },
      { label: 'RIVER COURSE', title: 'One intentional Pearl River evening', text: 'Choose a bank walk, bridge view or verified cruise rather than assuming every illuminated river experience is equivalent. Check the exact pier, boarding window and return transport before sunset, especially when a ticket platform uses translated pier names inconsistently.' },
      { label: 'MARKET ETHICS', title: 'Food streets without spectacle', text: 'Markets and specialist streets are working places. Go to understand ingredients and trade, keep aisles clear, and ask before close photography. If wildlife, animal welfare or unclear sourcing makes a stall uncomfortable, leave it out rather than turning it into travel content.' },
      { label: 'MEAL RHYTHM', title: 'Let Cantonese dining control the clock', text: 'Dim sum, roast meats, soups and seafood reward different group sizes and meal periods. Build one reservation-worthy meal and one flexible neighborhood meal into each day, carry written dietary needs, and avoid crossing Guangzhou simply because a viral list ranked a single branch.' }
    ],
    decisions: [
      { label: 'ARRIVAL', title: 'Name Guangzhou South, East or Baiyun', text: 'Guangzhou South is a vast high-speed rail hub south of the historic core; Guangzhou East serves different corridors, while Baiyun Airport has its own long city transfer. Save the complete station name, metro interchange and final hotel exit before boarding.' },
      { label: 'BASE', title: 'Choose a base by the first two days', text: 'Stay in or near Liwan for Chen Clan Ancestral Hall, Xiguan and old-west food; choose Yuexiu or another central location if the plan divides between the old city and the river axis. Zhujiang New Town fits a modern-city focus. Compare the hotel’s actual door-to-door route to your arrival station and the first day’s venue before booking.' },
      { label: 'BORDER LOGIC', title: 'Hong Kong is a separate immigration movement', text: 'A Greater Bay Area map can hide a real border. Check documents, station, ticket, baggage and arrival procedures for every cross-boundary trip, and do not treat Hong Kong or Macau as frictionless Guangzhou metro extensions.' }
    ],
    itineraryKicker: 'FOUR COURSES / NO CROSS-CITY DASH',
    itineraryTitle: 'A Guangzhou sequence with room to taste',
    itineraryIntro: 'Keep the first three days on coherent sides of the city. Use the fourth for the modern river axis or a carefully researched outer excursion, not as a bin for missed landmarks.',
    itinerary: [
      { label: 'DAY 1 / WEST', title: 'Chen Clan, then one Liwan walk', text: 'Start at Chen Clan Ancestral Hall, then choose either one Xiguan or Enning Road street loop and lunch nearby. Add Shamian only if the group still has energy; this keeps the day on the old-west side instead of crossing town between stops.' },
      { label: 'DAY 2 / ORIGIN', title: 'Yuexiu and one deep museum', text: 'Use the morning for park and city context, then give one museum collection a full visit. Shift into Beijing Road or another central food area after the main cultural work is complete.' },
      { label: 'DAY 3 / RIVER', title: 'Choose one Zhujiang New Town focus', text: 'Make the Guangdong Museum your indoor anchor or spend daylight on the civic architecture, then choose one skyline viewpoint for evening. If booking a cruise, use the ticket’s named pier and return details; do not assume a riverfront pin is the departure point.' },
      { label: 'DAY 4 / EDIT', title: 'Food chapter or regional contrast', text: 'Repeat the neighborhood that deserved more attention, explore a specialist food district, or take one realistic regional excursion. Do not combine Foshan, Kaiping and multiple Guangzhou sights in a single improvised day.' }
    ],
    practicalTitle: 'Humidity, language and payment shape the route',
    practical: [
      { label: 'WEATHER', title: 'Swap the exposed walk for an indoor anchor', text: 'Heat and heavy rain can make long arcade walks and open plazas tiring. Move the museum or a nearby meal earlier, shorten the outdoor loop, and use current venue notices and weather alerts before setting out.' },
      { label: 'NAMES', title: 'Keep Chinese place names offline', text: 'English spellings vary across map and ticket interfaces. Save the Chinese hotel address, full railway station and destination name as text and screenshot; show the exact entrance rather than relying on a district name.' },
      { label: 'PAYMENT', title: 'Prepare a second way to pay', text: 'Set up a supported mobile or bank-card route before arrival and keep some RMB cash. Test a low-stakes purchase early, retain passport access for real-name bookings and never depend on a single phone with no offline address record.' }
    ],
    faqs: [
      { question: 'How many days does a first Guangzhou trip need?', answer: 'Three full days cover west-side heritage, one museum-led central day and the modern Pearl River axis. Four days allow a slower food chapter or one well-researched regional contrast without turning meals into transit breaks.' },
      { question: 'Which Guangzhou railway station should I book?', answer: 'Book by the exact train and final hotel transfer, not by the shortest English name. Guangzhou South, East and other stations serve different corridors and sit on different sides of a very large city.' },
      { question: 'Is Canton Tower essential?', answer: 'No. The tower can be useful as an observation or evening anchor, but the city also reads well from Huacheng Square, riverbanks and bridges. Check visibility, queue conditions and the value of the specific ticket before committing.' },
      { question: 'Can Guangzhou and Shenzhen be one day?', answer: 'Fast trains make the rail segment short, but urban transfers, station checks and a separate city logic consume time. If both matter, give Shenzhen its own day and avoid stacking a Hong Kong border crossing into the same schedule.' }
    ],
    sources: [
      { url: 'https://www.gz.gov.cn/guangzhouinternational/home/citynews/content/post_7813722.html', label: 'Guangzhou Municipal Government — visitor orientation and major city sights' },
      { url: 'https://www.gz.gov.cn/guangzhouinternational/government/honoursandawards/content/post_9721812.html', label: 'Guangzhou Municipal Government — Chen Clan Ancestral Hall and Lingnan craft context' },
      { url: 'https://www.gz.gov.cn/guangzhouinternational/the137thcantonfair/content/post_10206654.html', label: 'Guangzhou Municipal Government — Expat guide to local transport, cultural venues and visitor services' }
    ],
    image: { path: '/assets/images/china-destination-guangzhou.webp', alt: 'Canton Tower and the Guangzhou skyline across the Pearl River', caption: 'Pearl River / old port city, modern civic axis and distinct banks', source: 'https://commons.wikimedia.org/wiki/File:Pearl_River_Canton_Tower_(cropped).JPG', creditTitle: 'Pearl River and Canton Tower', creator: 'Gzdavidwong', license: 'CC BY-SA 3.0' },
    search: { type: 'River and food city', summary: 'Plan Guangzhou by neighborhood: start with west-side heritage, then shift to the central river axis; move exposed walks indoors in heat or heavy rain.', keywords: ['guangzhou', 'canton', 'pearl river', 'lingnan', 'dim sum', 'guangzhou itinerary'] }
  },
  {
    slug: 'guilin-yangshuo',
    dateModified: '2026-10-10',
    name: 'Guilin & Yangshuo',
    title: 'Guilin and Yangshuo Guide (2026): Li River and Karst Routes',
    metaDescription: 'Plan Guilin and Yangshuo through Li River transport, karst viewpoints, rural-road choices and weather, with separate bases and low-impact landscape days.',
    ogTitle: 'Guilin and Yangshuo: Read the Karst in Profile',
    themeColor: '#173f36',
    visual: 'karst-scroll',
    eyebrow: 'Guangxi / river karst and rural roads',
    titleAccent: 'read the karst in profile',
    intro: 'The famous Li River image is only one cross-section through a large karst landscape. Guilin works as an arrival and museum base; Yangshuo is the better base for rural mornings and the river landscape. If both city collections and countryside matter, split the stay once instead of commuting; the route suits weather-flexible landscape travelers and is less suited to a fixed, tightly timed viewpoint checklist.',
    nights: '3–5 nights',
    coreLogic: 'Guilin arrival + Yangshuo landscape',
    watchFirst: 'river status and visibility',
    motifs: ['Tower karst', 'River', 'Rural road', 'Weather'],
    orientationTitle: 'Build the trip as a vertical landscape scroll',
    orientationIntro: 'City context sits at the bottom, river passage through the center and exposed viewpoints at the top. These chapters keep transfer products, quiet rural movement and protected karst interpretation from becoming one generic “Li River day.”',
    chapters: [
      { label: 'CITY GATE', title: 'Guilin as an arrival and context base', text: 'Use Guilin for rail or air arrival, one museum or urban karst park and the exact onward connection. The city can fill a day, but travelers focused on rural landscapes should not repeatedly commute from Guilin merely to avoid changing hotels.' },
      { label: 'RIVER PASSAGE', title: 'Let the ticket define the river handoff', text: 'The Li River Scenic Area lists cruise, raft and ticket information separately. Choose one official product, then follow its confirmed departure pier, landing point and included transfers; keep luggage and onward Yangshuo lodging aligned with that endpoint. Check the scenic area’s current pier and operation notices before leaving.' },
      { label: 'YANGSHUO BASE', title: 'Town convenience versus countryside quiet', text: 'Central Yangshuo simplifies food and transport but carries nightlife and crowd pressure. A rural guesthouse offers space and views yet can require a driver for every meal or stormy return. Choose by evening independence, not by a wide-angle room photo.' },
      { label: 'YULONG RIVER', title: 'A smaller waterway with capacity limits', text: 'Walking, cycling and regulated raft products produce different experiences. Check current operating sections and safety restrictions, avoid entering farm plots for photographs and leave narrow paths clear for residents and local traffic.' },
      { label: 'RURAL LOOP', title: 'Cycle only the road you can return from', text: 'E-bikes and bicycles expand the countryside but introduce heat, traffic, battery and weather risk. Select a short loop with named bridges or villages, wear protection and turn back before a distant viewpoint becomes a night ride.' },
      { label: 'ELEVATION', title: 'One viewpoint, chosen by conditions', text: 'Xianggong Hill and other elevated positions involve road access, steps and highly variable visibility. Check current entry and dawn transport, choose one climb and do not pressure a driver or cross closed barriers for a cloud-free image.' },
      { label: 'GEOLOGY', title: 'Karst is more than a silhouette', text: 'The UNESCO serial property protects tower and cone formations shaped by water over long periods. Use a credible museum, geopark explanation or guide to understand drainage and landform, then keep caves and trails within managed access.' },
      { label: 'NIGHT EDIT', title: 'Separate performance from landscape', text: 'Large evening shows, lit streets and bars can be enjoyable, but they are different products from river ecology and village life. Choose deliberately, verify finish transport and preserve one quiet evening if the next morning depends on visibility.' }
    ],
    decisions: [
      { label: 'ARRIVAL', title: 'Guilin North, West and main station differ', text: 'Rail services use multiple stations on different sides of the city. Record the complete station and onward transfer; if continuing directly toward Yangshuo, compare the actual road or rail chain rather than choosing by the word “Yangshuo” alone.' },
      { label: 'BASE', title: 'Use Guilin for arrival, Yangshuo for rural starts', text: 'Stay in Guilin when rail arrival, city collections or an early onward transfer lead the plan; move to Yangshuo when you want rural mornings and time around the river. For a short visit, choose one base by the confirmed arrival and departure station rather than losing daylight to repeated hotel changes.' },
      { label: 'MODE', title: 'Boat, bike and driver solve different terrain', text: 'A river cruise is linear, a bicycle loop is self-paced and a driver reaches scattered viewpoints. Choose one dominant mode each day and keep a weather fallback rather than stacking all three into a logistics contest.' }
    ],
    itineraryKicker: 'FOUR PANELS / ONE LANDSCAPE',
    itineraryTitle: 'Move from city context into river depth',
    itineraryIntro: 'Do not schedule the most exposed viewpoint and the least flexible ticket on the same weather gamble. Keep one panel movable.',
    itinerary: [
      { label: 'DAY 1 / GUILIN', title: 'Arrival, collection and city karst', text: 'Settle near the useful station, choose one museum or managed urban formation and prepare the next day’s exact wharf or transfer without chasing every lake light display.' },
      { label: 'DAY 2 / RIVER', title: 'Book the river route as a one-way transfer', text: 'Select an official Li River ticket and use its named departure pier and landing as the day’s transport handoff. Arrange luggage and the onward trip to your Yangshuo base around the ticket’s endpoint; if service or visibility is unsuitable, keep a land transfer option.' },
      { label: 'DAY 3 / RURAL', title: 'Choose one managed river or road loop', text: 'Plan either a current, permitted Yulong River activity or a short countryside route, and decide the return point before setting out. If rain or low visibility makes the rural route unattractive, use a town-based indoor stop and save the loop for a clearer window.' },
      { label: 'DAY 4 / HEIGHT', title: 'Make elevation conditional on visibility', text: 'Use a viewpoint only when current access, weather and the return ride are confirmed. With low cloud or poor conditions, stay in the lowlands and choose a managed cave or geology interpretation instead of spending the day on a view that may not appear.' }
    ],
    practicalTitle: 'Water level and cloud are itinerary inputs',
    practical: [
      { label: 'RIVER', title: 'Operations change with water and weather', text: 'River sections, rafting and cruise arrangements can change for safety or seasonal conditions. Confirm the specific operator and route, and keep a land alternative that does not depend on a disputed refund at the pier.' },
      { label: 'ROADS', title: 'Rural lanes are shared infrastructure', text: 'Cyclists, scooters, farm vehicles and pedestrians use the same narrow network. Ride conservatively, do not block fields or bridges for photographs and avoid unfamiliar lanes after dark.' },
      { label: 'VISIBILITY', title: 'Mist can add mood but remove the view', text: 'Cloud does not make the landscape worthless, yet it can erase an expensive summit objective. Check live conditions, avoid fixed sunrise promises and move indoor context to the worst weather window.' }
    ],
    faqs: [
      { question: 'Should I stay in Guilin or Yangshuo?', answer: 'Guilin is stronger for arrival logistics and city institutions; Yangshuo is better for rural roads and early landscape time. A three- or four-night trip often benefits from splitting the bases once.' },
      { question: 'Is the Li River cruise the only way to see the karst?', answer: 'No. Boats provide a linear river perspective, while roads, bicycles, trails and managed viewpoints reveal different formations. Choose by weather, mobility and tolerance for fixed schedules.' },
      { question: 'Can I cycle independently around Yangshuo?', answer: 'Yes on an appropriate short route, but traffic, heat, storms, battery range and shared rural roads matter. Save the route offline, carry the hotel address and turn back before conditions deteriorate.' },
      { question: 'How many days are enough for Guilin and Yangshuo?', answer: 'Three full days cover arrival context, one river movement and one rural day. Four or five allow weather flexibility, a viewpoint and a less rushed transfer between bases.' }
    ],
    sources: [
      { url: 'https://whc.unesco.org/en/list/1248', label: 'UNESCO World Heritage Centre — South China Karst, including the Guilin component' },
      { url: 'https://www.guilin.gov.cn/', label: 'Guilin Municipal Government — official local notices and destination services' },
      { url: 'https://www.liriver.com.cn/', label: 'Li River Scenic Area Administration — current cruise, raft, pier and operation notices' },
      { url: 'https://www.liriver.com.cn/page/article/lyfw.pwxx', label: 'Li River Scenic Area Administration — ticket information' }
    ],
    image: { path: '/assets/images/china-destination-guilin.webp', alt: 'Li River winding through green karst peaks near Guilin and Yangshuo', caption: 'Guangxi / river passage, tower karst and weather-led rural movement', source: 'https://commons.wikimedia.org/wiki/File:1_li_jiang_guilin_yangshuo_2011.jpg', creditTitle: 'Li River karst near Guilin and Yangshuo', creator: 'chensiyuan', license: 'CC BY-SA 4.0' },
    search: { type: 'River karst guide', summary: 'Split Guilin arrival and museum time from Yangshuo rural mornings; choose a Li River trip by confirmed pier and endpoint, with lowland options for poor visibility.', keywords: ['guilin', 'yangshuo', 'li river', 'yulong river', 'guilin karst', 'yangshuo itinerary'] }
  },
  {
    slug: 'changsha',
    dateModified: '2026-10-11',
    name: 'Changsha',
    title: 'Changsha Travel Guide (2026): Museums, Yuelu and Night Food',
    metaDescription: 'Plan Changsha through Mawangdui collections, Yuelu Mountain, river islands and night food, with reservation-aware museums and a separate Zhangjiajie connection.',
    ogTitle: 'Changsha: Edit the City Like a Late-Night Paper',
    themeColor: '#671b24',
    visual: 'night-paper',
    eyebrow: 'Hunan / archaeology, river and night appetite',
    titleAccent: 'edit the city like a late-night paper',
    intro: 'Changsha is often flattened into spicy food and neon crowds, but its strongest route begins with serious archaeology, crosses the Xiang River and ends in living contemporary streets. Use museum reservations and Yuelu terrain as the day’s hard deadlines; let night food become the flexible edition rather than the only story.',
    nights: '2–4 nights (2 for the core, 3–4 for the river and slower west-bank time)',
    coreLogic: 'museum morning + river west',
    watchFirst: 'reservation and heat',
    motifs: ['Mawangdui', 'Xiang River', 'Yuelu', 'Night food'],
    orientationTitle: 'Lay out one issue for daylight and one for night',
    orientationIntro: 'The city’s cultural institutions, west-bank university landscape, river island and central food streets have distinct peak times. These eight sections keep historical depth, terrain and appetite in a readable order.',
    chapters: [
      { label: 'FRONT PAGE', title: 'Hunan Museum and Mawangdui depth', text: 'The Mawangdui Han tomb material deserves a substantial visit rather than a quick object hunt. Secure the current real-name reservation, check opening days and read the permanent exhibition sequence before adding another major museum.' },
      { label: 'WEST BANK', title: 'Yuelu Academy and university landscape', text: 'Treat academy, campus and mountain as related but separate layers. The Hunan government visitor guide lists Line 4 to Hunan University Station for the South Gate and Line 2 to Yingwanzhen Station for the East Gate; pick one gate-to-station pair and return by that same pair rather than assuming the entrances meet at the summit. Verify academy and campus access before setting out.' },
      { label: 'AUTUMN LEAF', title: 'Yuelu Mountain by effort, not icon', text: 'Aiwan Pavilion is one point in a larger slope and seasonal park. A full climb is a sustained uphill walk with steps; for limited mobility, use the lower university and academy approach only if access is open, and do not assume a vehicle or cableway will remove the climb. Choose the ascent and descent by weather and keep the riverside continuation optional.' },
      { label: 'RIVER INSERT', title: 'Orange Isle is longer than it looks', text: 'The island’s main paths and transport can consume more time than a map suggests. Select one direction or viewpoint, check heat and crowd controls and avoid pairing a full island traverse with a rushed museum slot.' },
      { label: 'STREET COLUMN', title: 'Taiping Street and older urban grain', text: 'Historic labels, reconstructed shopfronts and working side streets coexist. Move beyond the busiest snack line, read one documented building and do not treat every commercial facade as surviving evidence.' },
      { label: 'NIGHT EDITION', title: 'Wuyi Square without queue collecting', text: 'Central Changsha becomes intensely busy after dark. Choose two or three dishes, share portions, keep allergy text ready and move to parallel streets when one famous stall turns dinner into an hour-long line.' },
      { label: 'TASTE DESK', title: 'Hunan food needs range and pacing', text: 'Fermented, smoked, sour and chili flavors do different work. Ask about heat level without assuming “less spicy” removes all chili, balance heavy meals with simpler ones and treat food markets as working spaces rather than performance sets.' },
      { label: 'OUTWARD TRAIN', title: 'Zhangjiajie is a separate landscape cluster', text: 'Rail links make onward travel possible, but Wulingyuan gates, hotels and weather require their own plan. Finish Changsha first, then move with the exact Zhangjiajie station and park base recorded.' }
    ],
    decisions: [
      { label: 'ARRIVAL', title: 'South station and central station are not substitutes', text: 'Changsha South handles many high-speed services and is a separate urban transfer from Changsha Railway Station. Use the exact station printed on the 12306 ticket, then route to the hotel before choosing a museum slot; do not plan a tight South-station-to-museum connection on arrival day.' },
      { label: 'BASE', title: 'Central access or west-bank calm', text: 'For two nights, Wuyi Square or a nearby central Line 2/1 base makes museum transfers and late meals simpler. Choose a west-bank base only for three or four nights centered on Yuelu; crossing back for night food adds a separate river trip. Inspect the hotel’s real station entrance and luggage route, and read late-night noise reviews.' },
      { label: 'TICKET', title: 'Give the museum the hard time slot', text: 'Real-name museum capacity can be the day’s least flexible element. Build Yuelu, river and food around the confirmed entry rather than buying an onward ticket that forces a shallow visit.' }
    ],
    itineraryKicker: 'FOUR EDITIONS / ONE CITY',
    itineraryTitle: 'Publish the history before the nightlife',
    itineraryIntro: 'For two nights, do Days 1–2 and leave Orange Isle for another visit. Three nights add Day 3; use Day 4 only when the extra night is already booked. Start with the hardest reservation and keep Zhangjiajie outside this city sequence.',
    itinerary: [
      { label: 'DAY 1 / ARCHIVE', title: 'Hunan Museum with breathing room', text: 'Set the destination to 湖南博物院 (Hunan Museum), 50 Dongfeng Road, in the official ticket portal or a live local route planner; the official English page did not expose a verified metro station/exit in this review, so no line or walk time is guessed. Reserve the official entry first, save the museum entrance pin, and route back to the same transit stop after your visit. Give Mawangdui the full booked block, then eat near the hotel rather than crossing town.' },
      { label: 'DAY 2 / WEST', title: 'Choose one Yuelu gate and return', text: 'For the South Gate, use Line 4 to Hunan University Station; for the East Gate, use Line 2 to Yingwanzhen. Visit the academy and university landscape, then add a climb only if weather, mobility and the remaining daylight fit. Exit at your arrival gate and return to its matching station; rain or steep steps are a reason to stop at the lower campus layer.' },
      { label: 'DAY 3 / RIVER', title: 'Orange Isle as a timed out-and-back', text: 'Use the official Orange Isle/Orange Island station on Line 2 and choose a single stretch of the long island path before entering. Turn back to that station rather than assuming a vehicle or island exit will be operating; after rain, swap the exposed walk for Hunan Museum if you secured entry, or a central covered meal and street-history loop.' },
      { label: 'DAY 4 / REVISION', title: 'Keep a local day or make a separate rail move', text: 'Use this day for an unhurried central neighborhood, a second museum only after checking its official notice, or recovery before onward travel. For Zhangjiajie, book the actual train and Wulingyuan base separately; railway arrival is not park-gate arrival.' }
    ],
    practicalTitle: 'Crowds concentrate where maps look simplest',
    practical: [
      { label: 'RESERVE', title: 'Confirm Hunan Museum before building Day 1', text: 'The official booking portal is live, but current hours, reservation lead time and foreign-passport steps could not be confirmed from its rendered English information. Check the portal for your date, reserve with the same passport you will present and carry that original document. If confirmation is unavailable, make Day 1 a flexible central-city day instead of relying on a reseller.' },
      { label: 'WEATHER + ACCESS', title: 'Keep a covered plan and a short route', text: 'For heavy rain, move the Hunan Museum reservation to the wettest window and keep Taiping Street to a short covered section; skip Orange Isle and the Yuelu ascent on slick steps. Wheelchair and elevator availability for the mountain routes was not confirmed in the official English material reviewed, so travelers who need step-free access should verify directly and plan the lower campus/indoor day.' },
      { label: 'FOOD', title: 'One queue is enough', text: 'Viral stalls can cluster demand without representing the whole cuisine. Share small portions, verify hygiene and ingredients, and leave room for a quieter neighborhood restaurant where the meal can actually be discussed.' }
    ],
    faqs: [
      { question: 'How many days does Changsha need?', answer: 'Two full days cover Hunan Museum and a Yuelu-centered day. Three or four allow Orange Isle, older streets, food depth and an unhurried transition to the next city.' },
      { question: 'Do I need to reserve Hunan Museum?', answer: 'Treat the museum as a real-name, capacity-controlled visit and verify the current official procedure. Do not rely on old screenshots or a tour seller when the museum’s own channel is available.' },
      { question: 'Can Changsha and Zhangjiajie share one day?', answer: 'No useful version of both fits one day. Rail is only the connector; Wulingyuan access and Changsha’s major museum each need their own time and base.' },
      { question: 'Is Changsha only worthwhile for spicy food?', answer: 'No. Mawangdui archaeology, Yuelu Academy, university history and the Xiang River provide substantial cultural structure. Food works best as the night layer connecting those daytime chapters.' }
    ],
    sources: [
      { url: 'https://www.enghunan.gov.cn/hneng/Tourism/TourHunan/Changsha_55545/TouristAttractions/202606/t20260611_33999264.html', label: 'Hunan Provincial Government — Yuelu Mountain visitor information' },
      { url: 'https://www.hnmuseum.com/en', label: 'Hunan Museum — official exhibitions and visitor notices (English page was not reliably reachable in this review)' },
      { url: 'https://yuyues.hnmuseum.com/', label: 'Hunan Museum — official ticket reservation portal and address' }
    ],
    image: { path: '/assets/images/china-destination-changsha.webp', alt: 'Aiwan Pavilion among autumn foliage on Yuelu Mountain in Changsha', caption: 'Changsha / archaeology in daylight, Xiang River and night appetite', source: 'https://commons.wikimedia.org/wiki/File:爱晚亭（秋-侧面）.jpg', creditTitle: 'Aiwan Pavilion, Changsha', creator: 'Junchong', license: 'CC BY-SA 4.0' },
    search: { type: 'Museum and food city', summary: 'Plan Changsha in two to four nights: reserve Hunan Museum first, use the matching Line 4/South Gate or Line 2/East Gate route for Yuelu, and keep Orange Isle optional in heat or rain.', keywords: ['changsha', 'hunan museum', 'mawangdui', 'yuelu mountain', 'orange isle', 'changsha food'] }
  },
  {
    slug: 'wuhan',
    dateModified: '2026-10-11',
    name: 'Wuhan',
    title: 'Wuhan Travel Guide (2026): Three Towns, Yangtze and Museums',
    metaDescription: 'Plan Wuhan by Wuchang, Hankou and Hanyang, using Yangtze crossings, Hubei collections, lake scale and station-specific transport to keep each day on the right bank.',
    ogTitle: 'Wuhan: Plan the Three Towns as a Confluence',
    themeColor: '#164b68',
    visual: 'confluence-map',
    eyebrow: 'Hubei / three towns and two rivers',
    titleAccent: 'plan the three towns as a confluence',
    intro: 'Wuhan is easiest to understand as Wuchang, Hankou and Hanyang meeting across the Yangtze and Han rivers. A bridge that looks close may still impose a long approach, and East Lake creates another scale entirely. Choose the bank before the attraction, then use museums, river history and food to explain why the metropolis feels plural.',
    nights: '3–4 nights (3 for Wuchang + Hankou, 4 to slow down or add Hanyang)',
    coreLogic: 'one bank per half-day',
    watchFirst: 'crossing and station',
    motifs: ['Wuchang', 'Hankou', 'Hanyang', 'East Lake'],
    orientationTitle: 'Treat every crossing as a line in the itinerary',
    orientationIntro: 'The confluence is not background scenery; it determines travel time. These eight chapters distribute towers, concessions, museums, industry, lake paths and food across the correct banks.',
    chapters: [
      { label: 'WUCHANG HEIGHT', title: 'Yellow Crane Tower with river context', text: 'The current tower complex offers a high view and cultural interpretation rather than an untouched ancient structure. Wuhan public-safety visitor guidance identifies Line 5 at Huanghelou or Pengliuyang and the East Gate approach; check the site’s own current entry notice, then leave through the West Gate only if taking the walk toward the Yangtze bridge. Return via the named Line 5 station that fits your route.' },
      { label: 'COLLECTION BANK', title: 'Hubei Provincial Museum deserves depth', text: 'Bronzes, musical instruments and regional archaeology can absorb most of a day. The city’s published visitor guidance routes visitors by Line 8 to Shengbo Hubei Daily, then via Exit A and the pedestrian channel/walk to the museum’s South Gate; verify today’s station exits and museum reservation notice before travel. Return from that same named station rather than trying to cross the lake on foot.' },
      { label: 'EAST LAKE SCALE', title: 'Select one lake edge', text: 'East Lake is a system of long greenways, scenic areas and institutional campuses. Pick one entrance and mode, verify bicycle rules and weather, and do not use “East Lake” as if it described a single compact park.' },
      { label: 'HANKOU FACADES', title: 'Former concession streets in sequence', text: 'Historic bank buildings and inland streets carry commercial and colonial layers that need names and dates. Walk one measured route, use a documented interior or museum where possible and avoid turning architecture into a context-free European backdrop.' },
      { label: 'RIVER PORT', title: 'Jianghan and the working waterfront', text: 'The riverfront changes with flood-control space, evening crowds and cruise operations. Check pier and service information, give working areas room and keep the final metro or ferry connection visible before staying for lights.' },
      { label: 'HANYANG LINK', title: 'Bridge, industry and older city ground', text: 'Hanyang can connect bridge views, Qingchuan Pavilion and industrial history, but road and river infrastructure interrupt walking lines. Choose a short sequence and cross once rather than spending the day triangulating all three towns.' },
      { label: 'CAMPUS SPRING', title: 'Cherry blossom access is an event system', text: 'Seasonal flowering draws exceptional demand around university and lake landscapes. Respect institutional access, use official visitor rules and never build a spring trip around assumed campus entry or a precise bloom date.' },
      { label: 'BREAKFAST MAP', title: 'Hot dry noodles begin a broader food day', text: 'Reganmian is a useful morning anchor, not the entire cuisine. Eat near the day’s first bank, add soup or freshwater specialties with ingredient questions and avoid crossing town solely for a branch that differs little from a local option.' }
    ],
    decisions: [
      { label: 'ARRIVAL', title: 'Wuhan, Hankou and Wuchang stations are different', text: 'The three major rail names correspond to different urban positions and service patterns. Match the booked train to the first bank and hotel; a wrong assumption can add a river crossing before the trip has begun.' },
      { label: 'BASE', title: 'Choose the bank with two morning starts', text: 'For three nights, stay near a Wuchang Line 2/4 interchange if the museum and tower lead, or near Hankou/Jianghan Road if old streets and riverfront lead; the East Lake campus area is quieter but adds a daily return ride. A fourth night makes the opposite bank or Hanyang feasible without changing hotels. Choose for two early starts, not a map’s apparent center.' },
      { label: 'SEASON', title: 'Flood, heat and blossom change public space', text: 'River levels, summer heat, rain and spring events reshape paths and crowds. Use current official notices, avoid closed embankments and keep an indoor collection as the flexible anchor.' }
    ],
    itineraryKicker: 'THREE TOWNS / FOUR DAYS',
    itineraryTitle: 'Cross the river for a reason',
    itineraryIntro: 'Three nights can cover Days 1–3 at a brisk but workable pace. Add Day 4 only with another night; East Lake is a separate half-day and Hanyang needs its own crossing.',
    itinerary: [
      { label: 'DAY 1 / WUCHANG', title: 'Tower, West Gate and bridge edge', text: 'Enter Yellow Crane Tower from its current ticketed entrance using Line 5 to Huanghelou or Pengliuyang, as identified in Wuhan visitor guidance published in 2025; confirm the current station/exit and admission notice before leaving. If conditions and legs allow, leave by the West Gate for the documented bridge approach; otherwise return to the same Line 5 station. Keep the rest of the day on Wuchang’s side.' },
      { label: 'DAY 2 / COLLECTION', title: 'Hubei Museum, South Gate out and back', text: 'Reserve through the museum’s official channel first. Wuhan’s 2025 visitor guidance routes travelers on Line 8 to Shengbo Hubei Daily, then Exit A and the pedestrian channel to the South Gate; confirm the current station exit and museum notice. Let the collection take the main block. Add only one East Lake edge after checking its exact entrance, park access and daylight; in rain the museum is the full-day plan.' },
      { label: 'DAY 3 / HANKOU', title: 'One concession-street line to the river', text: 'Use a single Hankou district as the route anchor: walk one documented street sequence, then finish at Jianghan Road or the waterfront only if the live map shows a simple return to your hotel. Do not cross to Hanyang after dark to complete a checklist.' },
      { label: 'DAY 4 / HANYANG', title: 'Take one extra night for the third town', text: 'With a fourth night, cross once to Qingchuan Pavilion or another Hanyang stop you have confirmed open, then return to the same river crossing/metro corridor. If you have only three nights, use this as a weather or recovery buffer rather than moving hotels.' }
    ],
    practicalTitle: 'River scale defeats casual backtracking',
    practical: [
      { label: 'CROSSING', title: 'Bridge approaches consume time', text: 'A destination visible across the water may require a long metro or road chain. Use the exact destination entrance and the actual return station when routing. For Yellow Crane Tower, the West Gate-to-river walk is one-way toward the bridge; book the exit/metro return before entering rather than assuming you can rejoin the Line 5 stop from the waterfront.' },
      { label: 'LAKE', title: 'Name the East Lake entrance', text: 'Different scenic areas and greenway segments are not interchangeable. Save the Chinese entrance, return point and bicycle policy, and avoid beginning a long loop late in the day.' },
      { label: 'CLIMATE', title: 'Heat and rain favor early movement', text: 'Exposed embankments, large parks and tower steps can become punishing. Move outside chapters to morning or evening, preserve museum time for the worst weather and follow flood-related closures.' }
    ],
    faqs: [
      { question: 'Which Wuhan railway station is best?', answer: 'It depends on the train and first bank. Wuhan station often serves high-speed routes, Hankou favors the northwestern urban side and Wuchang serves other corridors. Compare the complete final transfer.' },
      { question: 'Can I see all of East Lake in one day?', answer: 'East Lake is too large for a meaningful all-in-one visit. Choose one scenic area or greenway section, one mode and a clear exit. Add a second segment only on a longer stay.' },
      { question: 'How many days does Wuhan need?', answer: 'Three days cover a Wuchang museum-and-landmark sequence, one East Lake chapter and Hankou. A fourth allows Hanyang or slower river history without repeated crossings.' },
      { question: 'Is Yellow Crane Tower ancient?', answer: 'The site and cultural tradition are historic, while the present tower is a modern reconstruction. Visit for interpretation and the relationship to the Yangtze, and describe the surviving evidence accurately.' }
    ],
    sources: [
      { url: 'https://english.wuhan.gov.cn/travel/tourist4attractions4an4incomplete4list/202110/t20211026_1819226.shtml', label: 'Wuhan Municipal Government — Yellow Crane Tower and city orientation' },
      { url: 'https://gaj.wuhan.gov.cn/jmzx/ttxw/202505/t20250530_2588560.html', label: 'Wuhan Public Security Bureau — 2025 visitor directions for Yellow Crane Tower and Hubei Provincial Museum' },
      { url: 'https://wlt.hubei.gov.cn/hbsbwg/', label: 'Hubei Provincial Museum — official visitor and exhibition information' }
    ],
    image: { path: '/assets/images/china-destination-wuhan.webp', alt: 'Pavilions and crane statues on the Yellow Crane Tower grounds above Wuhan', caption: 'Wuhan / three towns, two rivers and one bank at a time', source: 'https://commons.wikimedia.org/wiki/File:Yellow_Crane_Tower_61416-Wuhan_(49150676682).jpg', creditTitle: 'Yellow Crane Tower grounds, Wuhan', creator: 'xiquinhosilva', license: 'CC BY 2.0' },
    search: { type: 'River metropolis guide', summary: 'Use Line 5 for Yellow Crane Tower and Line 8 for Hubei Museum’s South Gate, then plan Wuhan by bank; keep East Lake to one entrance and one return point.', keywords: ['wuhan', 'yellow crane tower', 'east lake', 'hubei museum', 'hankou', 'wuchang'] }
  },
  {
    slug: 'chengdu',
    dateModified: '2026-10-11',
    name: 'Chengdu',
    title: 'Chengdu Travel Guide (2026): Pandas, Teahouses and Sichuan Routes',
    metaDescription: 'Plan Chengdu through real-name panda reservations, teahouse rhythm, Sichuan museums and deliberate excursions to Dujiangyan, with food and transit kept practical.',
    ogTitle: 'Chengdu: Keep the Teahouse Clock',
    themeColor: '#335b3b',
    visual: 'teahouse-ledger',
    eyebrow: 'Sichuan / teahouse basin and living heritage',
    titleAccent: 'keep the teahouse clock',
    intro: 'Chengdu works when the trip alternates between hard reservations and unstructured time. Panda visits, major museums and outer heritage require exact documents and departures; teahouses, parks and neighborhood meals reward staying put. Use the city as a Sichuan base without turning every mountain or archaeological site into a same-day add-on.',
    nights: '4–6 nights',
    coreLogic: 'early ticket + slow afternoon',
    watchFirst: 'panda slot and outer distance',
    motifs: ['Panda care', 'Tea', 'Basin', 'Irrigation'],
    orientationTitle: 'Balance the reservation ledger with empty hours',
    orientationIntro: 'Eight chapters divide animal welfare, collections, ritual streets, parks, food and outer engineering heritage. The rhythm is intentional: one fixed morning should not become three fixed afternoons.',
    chapters: [
      { label: 'RESERVATION', title: 'Panda Base as a managed wildlife visit', text: 'Use the official real-name channel, arrive for the booked period and follow current entrance instructions. Cooler early hours can support animal activity, but welfare and husbandry determine what is visible; never demand feeding, noise or a close encounter for a photograph.' },
      { label: 'COLLECTION', title: 'The Jinsha closure changes the archaeology day', text: 'Jinsha Site Museum’s current official notice says it is closed from 5 December 2025 through 30 April 2027. Do not route visitors there during this interval; recheck the official notice for any change after that date. Until it reopens, use Chengdu Museum at Tianfu Square for an indoor city-history day, or choose Sanxingdui only as a separate, reserved outer excursion.' },
      { label: 'SHRINE STREET', title: 'Wuhou and Jinli as separate layers', text: 'Wuhou Shrine offers historical and ritual context; adjacent Jinli is a commercial interpretation. Visit the institution first, then decide how much performance and food-stall atmosphere adds, rather than allowing the busiest lane to define the history.' },
      { label: 'TEA CLOCK', title: 'People’s Park without treating life as a show', text: 'A teahouse afternoon works best without a checklist. Order clearly, share tables respectfully, ask before photographing patrons and let park routines continue around you. Ear-cleaning or other services should be chosen by comfort and hygiene, not social pressure.' },
      { label: 'FOOD LEDGER', title: 'Heat, numbing spice and ingredient clarity', text: 'Hotpot, noodles and small dishes carry different chili and Sichuan pepper profiles. Write allergies and dietary limits in Chinese, ask about broths and oils, and plan lighter meals around a major hotpot rather than testing tolerance three times a day.' },
      { label: 'ALLEY EDIT', title: 'Wide and Narrow Alleys with a side exit', text: 'The restored lanes are useful for urban form and public atmosphere but highly commercial. Read one courtyard or exhibition, then continue into a quieter adjacent neighborhood instead of assuming souvenir frontage equals preserved daily life.' },
      { label: 'WATER ENGINE', title: 'Dujiangyan as living infrastructure', text: 'The irrigation system is not merely an ancient monument: it still organizes water across the Chengdu plain. Give the weir works a dedicated day, use UNESCO context and decide separately whether Mount Qingcheng fits mobility, weather and daylight.' },
      { label: 'REGIONAL EDIT', title: 'Choose one Sichuan excursion', text: 'Leshan, Mount Qingcheng, Dujiangyan, Sanxingdui and farther landscapes solve different interests and transport chains. Select one for a short stay, verify its reservation and station, and avoid selling a five-hour road as a convenient city detour.' }
    ],
    decisions: [
      { label: 'ARRIVAL', title: 'East, South, West and the airports differ', text: 'Chengdu East, South and West are separate rail terminals; Tianfu and Shuangliu airports also sit on different transfer chains. Use the station printed on the China Railway 12306 ticket, save its Chinese name, and compare the last train/airport transfer with your hotel before booking a late arrival.' },
      { label: 'BASE', title: 'Central access for four nights; split only on a longer stay', text: 'For four nights, use a central Line 1/2-accessible base near Tianfu Square or a major interchange: it keeps the Chengdu Museum and rail connections straightforward. Panda Base is a long northern excursion from any central hotel, so stay near the base only if you have a second early visit or a five-to-six-night trip. Check the actual door-to-platform walk, not a named lane’s map pin.' },
      { label: 'OUTER DAY', title: 'Reserve the anchor before the driver', text: 'For pandas, Sanxingdui or protected heritage, secure the official visit first. Then match train, shuttle or driver to the confirmed slot and keep the return generous enough for an unhurried meal.' }
    ],
    itineraryKicker: 'FOUR CUPS / FOUR PACES',
    itineraryTitle: 'Alternate fixed mornings and slow afternoons',
    itineraryIntro: 'Four nights work as three central days plus one regional day. Jinsha remains closed through 30 April 2027; use the Chengdu Museum on the west side of Tianfu Square for the indoor archaeology/history slot, and add a second regional day only with five or six nights.',
    itinerary: [
      { label: 'DAY 1 / CARE', title: 'Pick one Panda Base gate and its shuttle', text: 'Book the real-name entry on the official Panda Base site before travel. From Line 3 Panda Avenue Station, Exit A connects to shuttle 408 for the South Gate; alternatively Junqu General Hospital Station, Exit B connects to shuttle 409 for the West Gate. Choose one gate, save its Chinese name, and return by the matching shuttle and station. Do not assume the two entrances make a short walk between them.' },
      { label: 'DAY 2 / CITY COLLECTION', title: 'Chengdu Museum at Tianfu Square', text: 'Jinsha is closed through 30 April 2027. Use Chengdu Museum at the west side of Tianfu Square instead: its official visitor guide lists Tianfu Square on Metro Lines 1/2 and the West 1 North/South exits. Check the same guide for the current day’s hours and reservation button before setting off. In heavy rain, keep the museum as the full indoor day; in clearer weather, add only a nearby central street.' },
      { label: 'DAY 3 / HISTORY', title: 'Wuhou, then one lane and a planned return', text: 'Start at Wuhou Shrine, then decide on Jinli only after the shrine visit; the adjacent commercial lane is not a second museum. Use a named Metro Line 3/5 stop or a door-to-door car to return from the actual exit you use; late queues and crowds make an unplanned cross-town dinner a poor finish.' },
      { label: 'DAY 4 / WATER', title: 'Give Dujiangyan one complete day', text: 'Use 12306 to choose the actual Chengdu-area departure station and Dujiangyan-side arrival station for your date, then check the last return train before you buy; schedules and station names change, so none is quoted here. From arrival station, plan the local leg to the scenic entrance separately. Skip Qingcheng on this first outer day unless daylight, mobility and both return legs are confirmed.' }
    ],
    practicalTitle: 'Reservations and appetite need recovery time',
    practical: [
      { label: 'IDENTITY', title: 'Panda Base is a timed, real-name visit', text: 'The official Panda Base ticket page describes online real-name booking, the original identity document, an entry time period and a booking window that can change by date/season. Book only through its listed official channel, save the confirmation and exact gate offline, and ignore unofficial “fast entry” offers. Do not publish a fare or promise animal activity at a particular hour.' },
      { label: 'FOOD', title: 'Communicate limits before the pot arrives', text: 'Chili, Sichuan pepper, animal fats and shared broths can complicate dietary needs. Use written Chinese, ask before ordering and choose individual dishes when cross-contact is a serious concern.' },
      { label: 'RAIN + MOBILITY', title: 'Keep the city museum for a wet day', text: 'For rain, move Chengdu Museum to the wettest forecast window and keep People’s Park or the Panda Base for a clearer day; Panda Base is largely outdoors. The base’s two gates have different shuttle approaches, and accessible routes/vehicle operation need same-day confirmation. If steps or long outdoor distances are a limit, omit the Base rather than assume the shuttle removes the walking.' }
    ],
    faqs: [
      { question: 'Do I need to reserve the Chengdu Panda Base?', answer: 'Yes, treat it as an official real-name reservation with a specific entry period. Procedures can change, so use the base’s own visitor information and carry the original identity document.' },
      { question: 'How many days should I spend in Chengdu?', answer: 'Four full days cover pandas, archaeology, central history and one outer excursion. Five or six allow more teahouse time, food range and a second regional chapter without constant early departures.' },
      { question: 'Can I combine Dujiangyan and Mount Qingcheng?', answer: 'It is possible with an early start and suitable mobility, but each is substantial. Treat Dujiangyan as the anchor and add the mountain only after checking weather, transport and trail or cableway operations.' },
      { question: 'Is Chengdu food always extremely spicy?', answer: 'No, the cuisine is broad, but chili and Sichuan pepper are common and “not spicy” can be interpreted differently. Use written dietary requests and ask about broth, oil and cross-contact.' }
    ],
    sources: [
      { url: 'https://www.panda.org.cn/en/service/ticket/', label: 'Chengdu Research Base of Giant Panda Breeding — official tickets and visitor rules' },
      { url: 'https://www.panda.org.cn/en/service/transit/', label: 'Chengdu Research Base of Giant Panda Breeding — official transit and shuttle guidance' },
      { url: 'https://www.jinshasitemuseum.com/site-75', label: 'Jinsha Site Museum — official closure notice' },
      { url: 'https://www.cdmuseum.com/zhinan/', label: 'Chengdu Museum — official visitor guide, hours, location and booking' },
      { url: 'https://www.sxd.cn/Guide?type=3', label: 'Sanxingdui Museum — official visitor guide and access information' },
      { url: 'https://whc.unesco.org/en/list/1001/', label: 'UNESCO World Heritage Centre — Mount Qingcheng and the Dujiangyan Irrigation System' }
    ],
    image: { path: '/assets/images/china-destination-chengdu.webp', alt: 'Giant panda at the Chengdu Research Base of Giant Panda Breeding', caption: 'Chengdu / managed wildlife, teahouse time and one deliberate outer day', source: 'https://commons.wikimedia.org/wiki/File:Panda_in_Chengdu_Research_Base_of_Giant_Panda_Breeding_-_7708872342.jpg', creditTitle: 'Giant panda in Chengdu', creator: 'George Lu', license: 'CC BY 2.0' },
    search: { type: 'Food and heritage city', summary: 'Reserve the Panda Base by its chosen gate and shuttle; while Jinsha is closed through April 2027, use Chengdu Museum for a rain-proof city day and plan Dujiangyan as a separate rail-and-local-transfer excursion.', keywords: ['chengdu', 'panda base', 'chengdu museum', 'jinsha closed', 'dujiangyan', 'chengdu food', 'sichuan', 'chengdu itinerary'] }
  },
  {
    slug: 'shenzhen',
    dateModified: '2026-10-10',
    name: 'Shenzhen',
    title: 'Shenzhen Travel Guide (2026): Design, Urban Villages and Coast',
    metaDescription: 'Plan Shenzhen through Futian, contemporary design, urban villages, border logistics and the Dapeng coast, with metro-aware days and a clear Hong Kong crossing.',
    ogTitle: 'Shenzhen: Read a Fast City Through Its Edges',
    themeColor: '#102b46',
    visual: 'border-grid',
    eyebrow: 'Guangdong / design city and border system',
    titleAccent: 'read a fast city through its edges',
    intro: 'Shenzhen is not an unfinished version of Hong Kong and not only a technology skyline. It is a deliberately planned metropolis with design institutions, layered urban villages, mountain-to-sea edges and multiple border checkpoints. Build the trip around one urban question at a time, because a short rail distance can still hide a long station or immigration chain. It suits travelers interested in contemporary city-making and neighborhood contrasts; a short stay focused on one compact, walkable center should skip the far-eastern coast.',
    nights: '2–4 nights',
    coreLogic: 'metro spine + border edges',
    watchFirst: 'checkpoint and last return',
    motifs: ['Metro grid', 'Design', 'Village grain', 'Coast'],
    orientationTitle: 'Use the metro as a scanline, not a promise of closeness',
    orientationIntro: 'Futian, Luohu, Nanshan and Dapeng belong to different scales. These eight chapters separate civic design, lived neighborhoods, museums, parks, the eastern coast and cross-boundary movement so the city does not collapse into one skyline image.',
    chapters: [
      { label: 'CIVIC SECTION', title: 'Futian axis from library to skyline', text: 'Read Civic Center, the library and surrounding towers as a planned civic composition. Choose one cultural interior or viewpoint, then walk only the segment that shade and crossings support; the broad axis is larger on foot than it appears from the hill.' },
      { label: 'DESIGN FIELD', title: 'Nanshan museums and adaptive reuse', text: 'OCT-LOFT, Design Society programs and other Nanshan institutions change with exhibitions and closures. Check the current venue calendar, separate free public space from ticketed galleries, and avoid calling every converted factory block an equivalent design district.' },
      { label: 'VILLAGE GRAIN', title: 'Urban villages as lived neighborhoods', text: 'Nantou and other urban villages reveal older settlement lines, migration and intense redevelopment. Walk respectfully, keep residential thresholds clear, and distinguish curated heritage precincts from the housing and commerce that still support daily life.' },
      { label: 'BAY LAYER', title: 'Shenzhen Bay and mangrove distance', text: 'The bayfront is long, exposed and segmented by transport infrastructure. Pick one park entrance and one direction, check heat and tide conditions, and do not assume a waterfront path automatically connects to every museum or border checkpoint shown nearby.' },
      { label: 'MOUNTAIN WINDOW', title: 'Lianhuashan for city orientation', text: 'Use the park as an elevation check on Futian rather than a compulsory monument stop. Early or late light is kinder, but opening conditions, storms and heat still matter; keep the descent and next metro entrance clear before lingering.' },
      { label: 'LUOHU MEMORY', title: 'Old commercial Shenzhen and the rail edge', text: 'Luohu’s stations, markets and older commercial streets tell a different story from Futian. Treat counterfeit sales and aggressive solicitation cautiously, guard documents in crowds, and verify whether your next movement is metro, rail or an immigration checkpoint.' },
      { label: 'EASTERN COAST', title: 'Choose a Dapeng bus handoff before leaving', text: 'Dapeng is a separate road day beyond the central metro grid. Shenzhen’s January 2026 notice describes Xichong Station on Line 8 and feeder routes including E91 toward Dapeng Fortress and Jiaochangwei and E92 toward Nan’ao and Shuitou. Decide whether the day is for the fortress or coast, then recheck current route operation and the return connection before travel.' },
      { label: 'BORDER PROTOCOL', title: 'Match Hong Kong transport to the checkpoint', text: 'Futian, Luohu, Shenzhen Bay and other crossings are not interchangeable. Ticket, baggage, operating hours and onward Hong Kong transport differ, so write the full checkpoint name into every booking and never navigate from the word “border” alone.' }
    ],
    decisions: [
      { label: 'ARRIVAL', title: 'Futian and Shenzhen North solve different trips', text: 'Futian can be efficient for central business districts and some Hong Kong rail services; Shenzhen North handles many mainland high-speed routes. Match the train, hotel and border plan instead of chasing the station with the shortest transfer on a generic map.' },
      { label: 'BASE', title: 'Stay beside the first two metro movements', text: 'Futian suits civic and border logic, Nanshan suits design and bay chapters, while Luohu favors older commerce and one crossing. The coast requires its own road strategy and should not dictate a central hotel choice.' },
      { label: 'IDENTITY', title: 'Carry documents through the whole border day', text: 'Cross-boundary travel is an immigration event, not a metro transfer. Keep passport, visas or entry permissions, ticket details and hotel information accessible, and re-check both sides’ requirements close to travel.' }
    ],
    itineraryKicker: 'FOUR SCANS / FOUR URBAN SPEEDS',
    itineraryTitle: 'Move from civic plan to lived edge',
    itineraryIntro: 'Each day takes one slice through the city. Dapeng remains optional because it operates on road and weather time rather than central metro time.',
    itinerary: [
      { label: 'DAY 1 / FUTIAN', title: 'Civic center and hill overview', text: 'Start with one cultural institution around the civic axis, use Lianhuashan for orientation and finish with a measured skyline or food chapter instead of a mall crawl.' },
      { label: 'DAY 2 / NANSHAN', title: 'Design, older fabric and bay', text: 'Choose one design program, pair it with Nantou or another context-rich neighborhood, then walk a defined Shenzhen Bay segment only if weather and distance support it.' },
      { label: 'DAY 3 / LUOHU', title: 'Commercial memory and border systems', text: 'Read older Shenzhen through Luohu’s station edge and streets. If crossing to Hong Kong, make that the dominant logistics task rather than squeezing it after a full mainland day.' },
      { label: 'DAY 4 / DAPENG', title: 'E91 for the fortress side, E92 for Nan’ao', text: 'Use Xichong as the documented Line 8 transfer point and choose E91 for the Dapeng Fortress/Jiaochangwei side or E92 for Nan’ao and Shuitou, based on current service information. Keep the day to one coast purpose and confirm the return connection; if storms or heat make it a poor outdoor day, switch to a Nanshan indoor venue.' }
    ],
    practicalTitle: 'A digital city still needs offline precision',
    practical: [
      { label: 'MAPS', title: 'Save entrances, not just pins', text: 'Superblocks, elevated roads and station complexes can separate a map pin from the usable door. Screenshot the Chinese entrance name and walking approach, especially for museums, intercity rail and border facilities.' },
      { label: 'COAST', title: 'Weather can cancel the outer day', text: 'Typhoon alerts, heavy rain, heat and rough coastal conditions can undermine a Dapeng plan. Keep a Nanshan museum alternative and check official weather, transport and coastal notices before leaving; feeder routes and road conditions need a fresh check.' },
      { label: 'PHOTOGRAPHY', title: 'Respect security and residential boundaries', text: 'Do not photograph immigration, police, military or restricted infrastructure. In urban villages and working technology districts, ask before photographing people or interiors and move on when a space is clearly private.' }
    ],
    faqs: [
      { question: 'How many days should I spend in Shenzhen?', answer: 'Two days cover a civic and Nanshan introduction. Three or four allow Luohu, a cross-boundary movement or a dedicated Dapeng coast day without pretending the entire city sits on one metro stop.' },
      { question: 'Can I visit Shenzhen from Hong Kong without planning the border?', answer: 'No. The physical distance is short, but entry eligibility, checkpoint choice, transport, operating hours and onward route all matter. Verify the exact requirements for your passport and chosen crossing.' },
      { question: 'Is Dapeng a half-day trip?', answer: 'Usually not from central Shenzhen. The road journey, weekend congestion and spread between fortress and beaches make it a dedicated day for most visitors. Pick one coastal purpose and protect the return.' },
      { question: 'Where should a first-time visitor stay?', answer: 'Futian is the safest general base for central metro access; Nanshan is better when design and bay chapters dominate; Luohu can suit older-city and checkpoint priorities. Compare the exact station exit, not only the district.' }
    ],
    sources: [
      { url: 'https://wtl.sz.gov.cn/', label: 'Shenzhen Culture, Radio, Television, Tourism and Sports Bureau — official destination notices' },
      { url: 'https://www.sz.gov.cn/en/', label: 'Shenzhen Municipal Government — official city services and current notices' },
      { url: 'https://www.sz.gov.cn/en_szgov/news/notices/content/post_12589348.html', label: 'Shenzhen Municipal Government — 2026 Line 8 Xichong Station feeder-bus network' }
    ],
    image: { path: '/assets/images/china-destination-shenzhen.webp', alt: 'Shenzhen Civic Center and Futian skyline seen from a green hillside', caption: 'Futian / civic grid, metro spine and border-facing metropolis', source: 'https://commons.wikimedia.org/wiki/File:Shenzhen_Skyline_from_Futian_District2.jpg', creditTitle: 'Shenzhen skyline from Futian', creator: 'Huangdan2060', license: 'CC BY 3.0' },
    search: { type: 'Design and border city', summary: 'Base urban days around Futian and Nanshan; keep Dapeng as a separate road day, check current E91/E92 feeder service and protect the return buffer.', keywords: ['shenzhen', 'futian', 'nanshan', 'dapeng', 'shenzhen hong kong border', 'shenzhen itinerary'] }
  },
  {
    slug: 'xiamen-fujian-tulou',
    dateModified: '2026-10-10',
    name: 'Xiamen & Fujian Tulou',
    title: 'Xiamen and Fujian Tulou Guide (2026): Island Port and Earthen Villages',
    metaDescription: 'Plan Xiamen as a walkable port-city stay and Fujian Tulou as a separate rural heritage day, with ferry, rail, road and conservation decisions kept distinct.',
    ogTitle: 'Xiamen and Fujian Tulou: Port Veranda to Mountain Rings',
    themeColor: '#285a64',
    visual: 'tulou-rings',
    eyebrow: 'Fujian / island port and earthen settlements',
    titleAccent: 'move from port veranda to mountain rings',
    intro: 'Xiamen and the Fujian Tulou belong in one regional guide only if their scales remain separate. Xiamen is a coastal city of ferries, shaded streets and layered port history. The UNESCO-inscribed Fujian Tulou property spans clusters of earthen buildings across inland valleys. Keep a central Xiamen base for city and ferry days, then give one named tulou cluster its own inland day. This route suits visitors willing to plan a ferry and a rural transfer; it is not a quick island-and-many-tulou checklist.',
    nights: '3–5 nights',
    coreLogic: 'island base + one rural cluster',
    watchFirst: 'ferry identity and tulou road',
    motifs: ['Harbor', 'Veranda', 'Courtyard', 'Mountain road'],
    orientationTitle: 'Draw two circles that should not collapse into one',
    orientationIntro: 'The first circle is urban Xiamen: waterfront, old streets, institutions and ferry systems. The second is one inland tulou cluster reached by a long, verified road chain. These chapters protect both from a day that spends more time changing vehicles than reading place.',
    chapters: [
      { label: 'PORT VERANDA', title: 'Shapowei and the working harbor edge', text: 'Read fishing-port traces, university influence and creative reuse without assuming every painted facade is old. Walk one compact loop, keep working access clear and pair it with a nearby museum or waterfront rather than hopping repeatedly across the island.' },
      { label: 'OLD STREET', title: 'Zhongshan Road beyond the shopfront', text: 'Arcades, side lanes and religious buildings reveal a port-city fabric that the main commercial strip can obscure. Go in cooler hours, turn into one parallel street and distinguish restored spectacle from businesses still serving residents.' },
      { label: 'ISLAND SETTLEMENT', title: 'Let the ferry ticket set the island route', text: 'Kulangsu is reached by ferry, and Xiamen Ferry’s current ticket channel identifies the route and passenger terminal. Buy or verify the ticket before navigating to a pier, then follow its exact terminal, destination and return instructions; choose a small set of buildings and museums rather than queueing at every viewpoint.' },
      { label: 'COASTAL LINE', title: 'One beach or boardwalk segment', text: 'Xiamen’s coast is long and seasonally exposed. Select one reachable section, check heat, rain, wind and swimming conditions, and let the sea be a slower chapter instead of forcing it between ferry and railway deadlines.' },
      { label: 'COLLECTION', title: 'Overseas exchange needs a museum anchor', text: 'Fujian’s maritime and migration histories deserve more than decorative “international” labels. Choose an institutional collection or documented building, allow time for translation gaps and keep claims tied to the material actually on display.' },
      { label: 'EARTHEN RING', title: 'Choose one inscribed tulou cluster', text: 'UNESCO’s Fujian Tulou property contains multiple clusters and individual buildings across a broad inland area. Select Tianluokeng, Hongkeng, Chuxi or another researched component by road logic and conservation value rather than trying to collect circular forms.' },
      { label: 'LIVING COURTYARD', title: 'A heritage home is not an empty set', text: 'Follow posted visitor routes. Treat any room or courtyard marked private as off limits; ask before close portraits or interior photography, keep thresholds clear, and follow posted site interpretation. Do not request staged domestic scenes.' },
      { label: 'RURAL RETURN', title: 'Protect the road back to Xiamen', text: 'Driver, bus or rail-plus-road arrangements must name the exact cluster and pickup point. Mountain roads, meal stops and crowd controls can extend the day, so carry the destination in Chinese and avoid booking a tight evening train or flight.' }
    ],
    decisions: [
      { label: 'ARRIVAL', title: 'Separate Xiamen station from Xiamen North', text: 'The central and northern railway stations leave different final transfers. Xiamen Gaoqi Airport and ferry terminals add another naming layer; save the full Chinese name for the transport facility, not merely “Xiamen.”' },
      { label: 'BASE', title: 'Stay for city movement, not a tulou fantasy', text: 'A central island base helps old streets, waterfront and ferries. Tulou access is a separate operator or transport decision, and choosing an inconvenient Xiamen hotel rarely makes the inland road meaningfully shorter.' },
      { label: 'CLUSTER', title: 'Pick one inland cluster and name the pickup', text: 'UNESCO describes Fujian Tulou as a distributed property across southwestern Fujian. Choose one cluster, such as Tianluokeng or Hongkeng, and confirm the exact pickup and drop-off with the transport provider before booking; do not combine distant clusters into a rushed circuit.' }
    ],
    itineraryKicker: 'TWO CIRCLES / FOUR DAYS',
    itineraryTitle: 'Let the port and the mountains keep their scale',
    itineraryIntro: 'Use two Xiamen days to understand the city, one deliberate ferry day and one protected rural day. Move the tulou chapter when weather or road confidence is poor.',
    itinerary: [
      { label: 'DAY 1 / PORT', title: 'Old streets and Shapowei', text: 'Begin with an old-street loop, add one museum or religious building and end by the harbor edge. Keep the route compact enough to notice architecture rather than collecting snack queues.' },
      { label: 'DAY 2 / ISLAND', title: 'Kulangsu with a ticket-led ferry handoff', text: 'Check the Xiamen Ferry ticket for the actual departure terminal, destination pier and return instructions, then keep the island walk to a small building list. If rain or ferry disruption interrupts the plan, move the indoor Xiamen collection here and follow current operator notices.' },
      { label: 'DAY 3 / COAST', title: 'Institution and sea air', text: 'Choose one serious cultural collection, then a nearby coastal segment. Rain or heat can invert the order, and swimming should depend on posted local conditions rather than the look of the water.' },
      { label: 'DAY 4 / TULOU', title: 'One cluster, with a named road handoff', text: 'Confirm the exact tulou cluster, pickup point and return arrangement with the operator before leaving Xiamen. Give the inland heritage visit its own day; if heavy rain or poor road conditions are reported, replace it with a city museum and reschedule rather than improvising a multi-cluster trip.' }
    ],
    practicalTitle: 'Ferries and mountain roads punish vague bookings',
    practical: [
      { label: 'FERRY', title: 'Use the passenger terminal on your ticket', text: 'Xiamen Ferry’s own guide says terminal and route depend on the purchased ticket. Match the passenger name, departure pier, destination and return details to that ticket, and do not follow a generic map pin to whichever pier looks closest.' },
      { label: 'HERITAGE', title: 'Do not enter private rooms for a photograph', text: 'A ticket to a scenic area does not erase residential boundaries. Follow local signage, ask permission and keep voices and drones away from domestic and ritual spaces.' },
      { label: 'RAIN', title: 'Stone, tile and mountain roads become slower', text: 'Coastal rain and inland mountain weather affect different parts of the trip. Keep a city museum alternative, wear shoes suited to wet paving and let the tulou operator confirm road conditions before departure.' }
    ],
    faqs: [
      { question: 'Can I visit Fujian Tulou as a half-day trip from Xiamen?', answer: 'The inland road and dispersed clusters make a full day more realistic. A half-day product often means very little time inside the heritage landscape. Confirm the exact cluster and door-to-door schedule before booking.' },
      { question: 'Which Fujian Tulou cluster should I choose?', answer: 'Choose by road time, walking ability, conservation context and current access. Tianluokeng, Hongkeng, Chuxi and other components offer different settlement patterns; there is no need to collect several in one rushed day.' },
      { question: 'Do I need to reserve the Kulangsu ferry?', answer: 'Treat the ferry as a time-specific, identity-linked transport booking. Official arrangements can change, so verify the current passenger terminal, ticket channel and required document close to travel.' },
      { question: 'How many nights work for Xiamen and tulou?', answer: 'Three nights support two city days and one tulou day. Four or five nights give Kulangsu, museums, coast and the rural excursion enough space to respond to weather.' }
    ],
    sources: [
      { url: 'https://whc.unesco.org/en/list/1113/', label: 'UNESCO World Heritage Centre — Fujian Tulou and its distributed heritage property' },
      { url: 'https://whc.unesco.org/en/list/1541/', label: 'UNESCO World Heritage Centre — Kulangsu, a Historic International Settlement' },
      { url: 'https://m.xmferry.com/wx/hbjgd/index.htm', label: 'Xiamen Ferry — official travel guide and passenger terminal information' },
    ],
    image: { path: '/assets/images/china-destination-fujian-tulou.webp', alt: 'Round and square Fujian tulou clustered among terraced hills', caption: 'Fujian / walkable island port and dispersed inland heritage', source: 'https://commons.wikimedia.org/wiki/File:Three_round,_one_oval,_one_square_(16831811084).jpg', creditTitle: 'Fujian tulou cluster', creator: 'Scott Edmunds', license: 'CC BY 2.0' },
    search: { type: 'Port and rural heritage', summary: 'Pair central Xiamen and its ferry routes with one inland Tulou cluster; confirm passenger terminal, rural pickup and road return before booking connections.', keywords: ['xiamen', 'fujian tulou', 'kulangsu', 'gulangyu', 'tulou day trip', 'xiamen itinerary'] }
  },
  {
    slug: 'sanya-hainan',
    name: 'Sanya & Hainan',
    title: 'Sanya and Hainan Guide (2026): Beaches, Monsoon and Island Routes',
    metaDescription: 'Plan Sanya and Hainan by coast, monsoon, beach access and realistic island distance, with resort trade-offs, cultural context and weather-flexible days.',
    ogTitle: 'Sanya and Hainan: Let the Monsoon Set the Coast',
    themeColor: '#006c78',
    visual: 'monsoon-tide',
    eyebrow: 'Hainan / tropical coast and island weather',
    titleAccent: 'let the monsoon set the coast',
    intro: 'A Hainan trip begins with coast choice, not resort stars. Sanya’s bays differ in wave exposure, public access, nightlife and distance from transport, while the island beyond Sanya includes rainforest, towns and long road or rail movements. Build a weather-flexible coastal stay first, then add one inland or island contrast with clear environmental and cultural boundaries.',
    nights: '4–6 nights',
    coreLogic: 'one bay + one island contrast',
    watchFirst: 'storm warning and beach status',
    motifs: ['Tide', 'Monsoon', 'Public shore', 'Rainforest'],
    orientationTitle: 'Choose a bay by daily life, not by one perfect photograph',
    orientationIntro: 'Yalong, Haitang, Dadonghai and Sanya Bay each produce a different stay. These chapters separate swimming conditions, public shoreline, resort seclusion, city food, ecological excursions and island-wide movement so a storm does not erase the whole itinerary.',
    chapters: [
      { label: 'CITY SHORE', title: 'Sanya Bay for access and long sunsets', text: 'The broad city-facing coast offers transport and local dining convenience, but road noise, variable beach conditions and long distances along the same bay matter. Inspect the exact hotel section and use posted swimming guidance rather than assuming every sandy stretch is managed alike.' },
      { label: 'ACTIVE BAY', title: 'Dadonghai for compact beach life', text: 'Dadonghai can suit travelers who want restaurants and a more compact resort zone. Expect greater activity, verify the supervised swimming area and keep valuables controlled; a convenient public beach is not the same experience as an isolated resort cove.' },
      { label: 'RESORT CURVE', title: 'Yalong Bay and the price of seclusion', text: 'Yalong’s resort pattern can deliver a polished beach stay, but dining, public access and transfers vary by property. Compare the usable shoreline and actual room-to-water route rather than paying only for an address in the bay.' },
      { label: 'EASTERN SCALE', title: 'Haitang Bay is a district, not a doorstep', text: 'Large resorts, shopping and attractions sit across a wide coastal zone. Check whether the beach permits swimming under current conditions, price the trip into Sanya and avoid assuming a hotel shuttle solves every evening movement.' },
      { label: 'MARINE DAY', title: 'Choose operators by safety and ecology', text: 'Diving, snorkeling and boat products vary in supervision and environmental practice. Verify licensing, weather cancellation terms and group size, never touch coral or wildlife, and treat poor visibility as a reason to change the day rather than pressure the crew.' },
      { label: 'RAINFOREST', title: 'One inland ecology chapter', text: 'Hainan’s interior should not be reduced to a quick “minority village” show. Choose a protected landscape or credible interpretation, follow trail and weather restrictions, and approach Li and Miao culture through consent and institutions rather than staged portrait hunting.' },
      { label: 'ISLAND RAIL', title: 'Haikou and the east coast need real time', text: 'The ring railway shortens intercity movement, but station transfers and a different urban base remain. Haikou, Wanning or another coast is not a casual Sanya afternoon; add it only when the trip has enough nights for a second base.' },
      { label: 'STORM EDIT', title: 'Design a trip that can lose a beach day', text: 'Tropical systems, thunderstorms and rough sea conditions can cancel marine plans and close swimming areas. Keep one museum, spa, food or city route ready, and never enter water against lifeguard flags or official warnings.' }
    ],
    decisions: [
      { label: 'ARRIVAL', title: 'Airport and railway do not choose the bay for you', text: 'Sanya Phoenix Airport is closest to some western and city areas, while eastern resorts require longer transfers. Compare daytime and late-arrival transport, then verify the complete hotel name because resort brands repeat across Hainan.' },
      { label: 'BASE', title: 'Pick public convenience or resort enclosure', text: 'Sanya Bay and Dadonghai favor city access; Yalong and Haitang can favor resort-focused stays. A split stay adds packing and road time, so use it only when the second coast genuinely changes the trip.' },
      { label: 'SEASON', title: 'Weather is more than a sunny icon', text: 'Rainfall, humidity, heat, sea state and tropical cyclone risk vary. Read current warnings and beach notices, buy flexible marine products and keep flight or rail buffers during unstable weather.' }
    ],
    itineraryKicker: 'FOUR TIDES / ONE FLEX DAY',
    itineraryTitle: 'A coast plan that survives imperfect weather',
    itineraryIntro: 'Anchor two days around the chosen bay, then add one marine or inland chapter. Keep the fourth day movable so safety warnings do not become sunk-cost decisions.',
    itinerary: [
      { label: 'DAY 1 / SHORE', title: 'Learn the chosen bay', text: 'Walk the managed beach, locate lifeguard zones, shops and transport, and observe the tide and crowd rhythm before booking additional water activities.' },
      { label: 'DAY 2 / SEA', title: 'Marine day if conditions agree', text: 'Use a vetted operator and treat official warnings as final. If the sea is unsuitable, swap in the city, food or museum alternative without trying to recover the cost through risk.' },
      { label: 'DAY 3 / INTERIOR', title: 'Rainforest or cultural context', text: 'Choose one credible inland destination with clear access and interpretation. Carry rain protection, respect community boundaries and return before mountain weather complicates the road.' },
      { label: 'DAY 4 / FLEX', title: 'Second bay or recovery day', text: 'Use the weather window for a different public shore, a slow resort day or the activity displaced earlier. Do not bolt Haikou onto the schedule unless it is a planned second base.' }
    ],
    practicalTitle: 'Beach safety outranks the brochure',
    practical: [
      { label: 'SEA', title: 'Flags and closures are operating rules', text: 'A beach can look calm while currents or marine conditions remain unsafe. Swim only in designated zones, follow lifeguards and official closures, and do not use an empty shoreline as evidence that access is permitted.' },
      { label: 'SUN', title: 'Heat changes walking and boat comfort', text: 'Use shade, hydration and sun protection, especially around midday. Travelers with health conditions should plan conservative exposure and seek professional advice rather than relying on a generic tropical packing list.' },
      { label: 'HOLIDAYS', title: 'Demand can reshape price and movement', text: 'Major holidays can raise room prices, crowd beaches and tighten flights or rail. Confirm cancellation terms and transport before choosing a non-refundable resort whose location depends on one long taxi ride.' }
    ],
    faqs: [
      { question: 'Which Sanya bay is best for a first visit?', answer: 'There is no universal best. Sanya Bay favors access, Dadonghai compact activity, Yalong a resort beach pattern and Haitang large modern properties. Match the bay to meals, public movement and swimming expectations.' },
      { question: 'How many days should I stay in Sanya?', answer: 'Four full days provide two coast days, one inland or marine chapter and one weather-flexible day. Add nights before including Haikou or another distant Hainan base.' },
      { question: 'Can I swim at every Hainan beach?', answer: 'No. Managed zones, sea state, currents, seasonal restrictions and official closures differ. Follow current local signs and lifeguards even when a resort or social post implies the water is usable.' },
      { question: 'Should I split hotels between two bays?', answer: 'Only when the second bay changes the experience enough to justify packing and road time. For a short trip, one well-chosen base plus day visits is usually calmer and more resilient to weather.' }
    ],
    sources: [
      { url: 'https://en.hainan.gov.cn/englishsite/Cities/202506/13d65ed5bf554e8cb8454db0c93b458a.shtml?ddtab=true', label: 'Hainan Provincial Government — official Sanya city overview' },
      { url: 'https://www.cma.gov.cn/en/', label: 'China Meteorological Administration — official weather warnings and forecasts' }
    ],
    image: { path: '/assets/images/china-destination-sanya.webp', alt: 'Palm-framed beach and the South China Sea in Sanya', caption: 'Hainan / bay choice, public shore and weather-led island movement', source: 'https://commons.wikimedia.org/wiki/File:Beaches_in_Sanya,_Hainan,_China13.jpg', creditTitle: 'Sanya beach', creator: 'Huangdan2060', license: 'CC0 1.0' },
    search: { type: 'Tropical coast guide', summary: 'Choose a Sanya bay by access and sea conditions, then add one weather-flexible marine, rainforest or island chapter.', keywords: ['sanya', 'hainan', 'yalong bay', 'haitang bay', 'sanya beach', 'hainan itinerary'] }
  },
  {
    slug: 'chongqing',
    dateModified: '2026-10-11',
    name: 'Chongqing',
    title: 'Chongqing Travel Guide (2026): Vertical City, Rivers and Wulong',
    metaDescription: 'Plan Chongqing by elevation, river crossing and station exit, then choose one separate outer route to Dazu or Wulong with weather, rail and road time made explicit.',
    ogTitle: 'Chongqing: Read the Vertical City in Section',
    themeColor: '#30191f',
    visual: 'vertical-city',
    eyebrow: 'Chongqing / vertical metropolis and river confluence',
    titleAccent: 'read the vertical city in section',
    intro: 'In Chongqing, a point that appears next door can sit several levels, escalators or road loops away. The Jialing and Yangtze rivers, steep peninsula and elevated transit turn altitude into ordinary navigation. Read the city in section—upper street, lower bank, bridge and station exit—before chasing night views or distant karst.',
    nights: '3–5 nights (3 for the core, 4 for an outer day, 5 for a slower or overnight excursion)',
    coreLogic: 'elevation + one river crossing',
    watchFirst: 'exit number and last ascent',
    motifs: ['Upper street', 'Lower bank', 'Bridge', 'Night'],
    orientationTitle: 'Replace the flat map with an elevation stack',
    orientationIntro: 'The eight chapters move from Yuzhong’s ridge to lower riverbanks, across transit lines and finally out to protected heritage. Every descent creates a future ascent, so each route includes its return.',
    chapters: [
      { label: 'RIDGE LINE', title: 'Jiefangbei and the upper peninsula', text: 'Use Jiefangbei as an orientation point, not as the whole center. Walk one ridge-level street sequence, note which entrances descend toward the rivers and keep the hotel return on the same elevation whenever a late meal follows.' },
      { label: 'LOWER GLOW', title: 'Hongya Cave from outside first', text: 'The complex is most legible as a vertical circulation and riverfront phenomenon. iChongqing’s visitor guide maps two practical subway approaches: Line 2 to Linjiangmen, Exit A, then east along Linjiang Road; or Line 1/6 to Xiaoshizi, Exit 6, then north along Cangbai Road. Choose one for approach and return rather than trying to cross the whole complex; check the current map and crowd controls before leaving. Expect stairs and a steep riverside grade.' },
      { label: 'CABLE CROSSING', title: 'Yangtze River Cableway as transport theater', text: 'The cableway can have long queues and weather-related changes. Compare the wait with a metro or bridge crossing, verify the boarding side and treat the ride as optional rather than sacrificing a full afternoon to a few minutes in the air.' },
      { label: 'TRANSIT SECTION', title: 'Liziba and rail without blocking daily life', text: 'The train-through-building view is part of a functioning neighborhood and transit system. Use the designated viewing area, keep sidewalks and station movement clear and combine it with one nearby route rather than arriving solely for repeated video takes.' },
      { label: 'PORT MEMORY', title: 'Chaotianmen and the confluence', text: 'Construction, cruise terminals and public-space access can change around the river meeting. Verify the usable viewpoint and pier, keep the steep return in mind and avoid describing a shopping complex as if it were the historic port itself.' },
      { label: 'FOOD DESCENT', title: 'Hotpot with a safe trip uphill', text: 'Choose the restaurant by broth options, ingredient clarity and return transport, not by how many stairs appear in a viral approach video. Shared pots complicate allergies, and late queues can end after convenient transit has thinned.' },
      { label: 'STONE ARCHIVE', title: 'Dazu Rock Carvings as a dedicated heritage day', text: 'The carved sites lie outside central Chongqing and need exact transport and site selection. Use official heritage context, respect conservation barriers and avoid compressing Dazu into the same day as a Wulong or city-night plan.' },
      { label: 'KARST OUTER', title: 'Wulong is a separate terrain system', text: 'Wulong’s natural bridges, caves and resort areas sit far from the urban core. Confirm station, park shuttle, steps and weather; an overnight can be more honest than a city-to-park sprint with no buffer.' }
    ],
    decisions: [
      { label: 'ARRIVAL', title: 'Chongqing North, West and Shapingba differ', text: 'Major rail stations serve different corridors and city edges. Match the exact station to the hotel and first-day elevation, and preserve extra time for large internal walks and an unfamiliar exit.' },
      { label: 'BASE', title: 'Use Jiefangbei/Yuzhong for three nights; change only for a reason', text: 'For three nights, a ridge-level Jiefangbei/Yuzhong base gives the simplest start for the peninsula’s central sights; add a fourth for one outer excursion and a fifth if you want to overnight beyond the city. North-bank Jiangbei or west-side Shapingba can work for their own neighborhoods, but add river/metro crossings to each central day. Confirm the hotel door elevation, lift and luggage path before booking.' },
      { label: 'OUTER', title: 'Choose Dazu or Wulong, not both at speed', text: 'Dazu is a cultural heritage day; Wulong is a terrain and weather day. On a short stay, select the one that fits the trip’s argument and leave the other for a return.' }
    ],
    itineraryKicker: 'FOUR LEVELS / NO RANDOM DESCENTS',
    itineraryTitle: 'A route that always knows how it gets back up',
    itineraryIntro: 'Three nights cover the first three city days. Add Day 4 only after booking a fourth night; Wulong works better with a fifth or an overnight. Keep the central base and plan each descent with a same-route return.',
    itinerary: [
      { label: 'DAY 1 / RIDGE', title: 'Jiefangbei to Hongya Cave and the upper return', text: 'Start at the ridge and descend by one mapped route: Line 2 Linjiangmen Exit A, or Line 1/6 Xiaoshizi Exit 6, then follow the current pedestrian route to Hongya Cave. View the complex from outside before deciding to enter; return via the same station approach. If rain makes the riverside steps slick or crowds close a route, stay on the upper commercial streets.' },
      { label: 'DAY 2 / CROSSING', title: 'Liziba, then one connected west-side stop', text: 'Ride Line 2 to Liziba Station for the designated viewing area, then return to that station and continue to one nearby west-side neighborhood. Do not combine Liziba with a distant riverbank and a cableway ticket in one fixed-time chain; operating hours and weather rules for the cableway were not verifiable here.' },
      { label: 'DAY 3 / CITY', title: 'Three Gorges Museum as the rain plan', text: 'Use the official museum’s visitor guide for Chongqing China Three Gorges Museum, 236 Renmin Road, as the indoor anchor; verify current opening and reservation notices first. The page confirms the address but did not expose a reliable station/exit in this review, so route by the exact Chinese address in a current local planner and plan a return from that same named stop or vehicle pickup. Pair it with the nearby People’s Great Hall only if the grounds are open; avoid a steep old-street walk in heavy rain.' },
      { label: 'DAY 4 / OUTER', title: 'Choose one excursion and check the last leg', text: 'For Dazu or Wulong, name the exact site, rail terminal or driver pickup, local shuttle and return point before paying. Use 12306 for date-specific train options and the site’s current official visitor notice; a railway station is not the scenic-area entrance. If any leg or return is unconfirmed, use Day 4 for a central indoor/cultural route instead.' }
    ],
    practicalTitle: 'Elevation is the hidden fare',
    practical: [
      { label: 'EXITS + ACCESS', title: 'Record the street level, then the matching return', text: 'Hongya Cave’s two mapped approaches begin at Linjiangmen Exit A or Xiaoshizi Exit 6; save the exit and use the same approach for return. In Chongqing, a short map distance can still mean steep stairs, lift queues or a long road loop. Step-free lines/elevators for the full route were not confirmed in the source review; request current station accessibility details and a door-to-door alternative before choosing a route.' },
      { label: 'FOG', title: 'Visibility changes the night-view value', text: 'Mist and rain can erase skyline depth and make steps slick. Keep night viewpoints optional, protect a museum or food route and never cross barriers for a clearer angle.' },
      { label: 'OUTER PARKS', title: 'Rail arrival is not park arrival', text: 'Wulong and Dazu still require local transfers after intercity movement. Name the exact scenic component, shuttle and final departure before committing to a same-day return.' }
    ],
    faqs: [
      { question: 'How many days should I spend in Chongqing?', answer: 'Three full days cover the central vertical city, one river-and-transit route and slower cultural or food depth. Add a fourth or fifth for Dazu or Wulong without sacrificing the city.' },
      { question: 'Is Hongya Cave a traditional ancient complex?', answer: 'The site is a modern commercial complex drawing on stilt-house forms. It is useful for understanding contemporary night tourism and vertical circulation, but should not be presented as untouched ancient fabric.' },
      { question: 'Can I visit Wulong as a day trip?', answer: 'A day trip is possible with an early, precisely coordinated train or driver and a limited park plan. An overnight is more resilient when weather, shuttles or walking time are important.' },
      { question: 'Where should I stay for a first Chongqing visit?', answer: 'A metro-accessible ridge-level base in or near central Yuzhong is practical for iconic routes, provided the hotel entrance is not hidden down steep lanes. Check the actual door and elevator route.' }
    ],
    sources: [
      { url: 'https://english.cq.gov.cn/aboutchongqing/culture/NaturalHeritage/202606/t20260612_15751145.html', label: 'Chongqing Municipal Government — Wulong karst and official destination context' },
      { url: 'https://english.cq.gov.cn/aboutchongqing/travel/5ALevelTouristAttraction/202606/t20260611_15745500.html', label: 'Chongqing Municipal Government — Dazu Rock Carvings visitor context' },
      { url: 'https://www.ichongqing.info/attraction/hongyadong/', label: 'iChongqing / Western China International Communication Organization — Hongya Cave visitor access' },
      { url: 'https://www.3gmuseum.cn/web/column/col5009271.html', label: 'Chongqing China Three Gorges Museum — official visitor guide and notices (station access not exposed in English)' }
    ],
    image: { path: '/assets/images/china-destination-chongqing.webp', alt: 'Hongya Cave glowing at night above a busy Chongqing street', caption: 'Chongqing / upper streets, lower banks and elevation-aware night routes', source: 'https://commons.wikimedia.org/wiki/File:202308_Hongya_Cave_at_night_from_Qiansimen_Bridge.jpg', creditTitle: 'Hongya Cave at night, Chongqing', creator: 'Jonashtand', license: 'CC BY-SA 4.0' },
    search: { type: 'Vertical city guide', summary: 'Plan Chongqing in three to five nights from a ridge-level base; use Hongya Cave’s mapped Line 2 or Lines 1/6 approach, keep the museum for rain, and verify every outer-site return leg.', keywords: ['chongqing', 'hongya cave', 'liziba', 'three gorges museum', 'wulong', 'dazu rock carvings', 'chongqing itinerary'] }
  },
  {
    slug: 'kunming',
    dateModified: '2026-10-11',
    name: 'Kunming',
    title: 'Kunming Travel Guide (2026): Plateau City, Stone Forest and Yunnan Routes',
    metaDescription: 'Plan Kunming as a plateau arrival city with museums, Dianchi wetlands and Stone Forest geology, then use it as a deliberate transport hinge for wider Yunnan.',
    ogTitle: 'Kunming: Use the Plateau Calendar',
    themeColor: '#49613c',
    visual: 'plateau-calendar',
    eyebrow: 'Yunnan / plateau gateway and seasonal ecology',
    titleAccent: 'use the plateau calendar',
    intro: 'Kunming is more than a mild-weather transfer point. It is a highland city with Yunnan-wide collections, Dianchi wetland edges and access to the Stone Forest’s protected karst. Read season, elevation and migration before adding a long regional train; the “Spring City” label does not remove strong sun, rain or distance.',
    nights: '3–4 nights',
    coreLogic: 'city context + one outer geology day',
    watchFirst: 'elevation and station',
    motifs: ['Plateau light', 'Flowers', 'Dianchi', 'Karst'],
    orientationTitle: 'Put weather, ecology and regional context on one calendar',
    orientationIntro: 'The eight chapters move from city institutions to lake edge and outer limestone, then turn Kunming into a careful Yunnan interchange rather than a night between trains.',
    chapters: [
      { label: 'REGIONAL DESK', title: 'Yunnan Provincial Museum before the route', text: 'Use the collections to understand archaeology, trade and the province’s cultural diversity before visiting minority communities or heritage towns. Verify opening days and give translation gaps time rather than reducing the visit to photogenic objects.' },
      { label: 'OLD CITY TRACE', title: 'Market and lane without nostalgia shortcuts', text: 'Central streets mix surviving buildings, reconstruction and active commerce. Follow one documented route, observe religious and residential boundaries and avoid describing a polished lane as an unchanged old city.' },
      { label: 'GREEN LAKE', title: 'Cuihu as a civic weather station', text: 'Green Lake works as a morning park and seasonal observation point. Migratory birds, crowds and local activity change across the year; watch without feeding wildlife and ask before photographing people practicing or socializing.' },
      { label: 'DIANCHI EDGE', title: 'Choose one wetland or ridge perspective', text: 'Dianchi is too large for a casual loop. Pick a managed wetland, public lakeside section or West Hills view, confirm transport and protect habitat by staying on designated paths.' },
      { label: 'FLOWER CLOCK', title: 'Seasonal color without a greenhouse marathon', text: 'Markets and botanical collections can reveal Yunnan’s plant economy and biodiversity, but blooming schedules and event crowds vary. Choose one institution and keep plant purchases within customs and biosecurity rules for the onward journey.' },
      { label: 'KARST DAY', title: 'Stone Forest is a separate rail-and-road day', text: 'Shilin is not a short city add-on. Search the date-specific 12306 options to Shilin West, then confirm the last road leg to the current official park entrance and the return to the same station. The official pages available for this review did not verify a current shuttle headway or fare, so do not plan around an old timetable or a tight evening train.' },
      { label: 'PLATEAU BODY', title: 'Keep the first exposed day modest', text: 'Kunming sits at elevation, and the Stone Forest, lake edge and ridge involve different amounts of sun, walking and climb. Use general high-elevation travel guidance, pace the first outdoor day and keep a lower-effort city option; a Kunming stop is not a guarantee for a later ascent.' },
      { label: 'YUNNAN HINGE', title: 'Match the departure station to the next corridor', text: 'Dali, Lijiang, Xishuangbanna and eastern Yunnan branch in different directions. Search the actual destination and date on 12306, then arrange the hotel-to-station return for the station printed on that ticket. Kunming and Kunming South are distinct transfer points, not interchangeable labels.' }
    ],
    decisions: [
      { label: 'ARRIVAL', title: 'Read the station name on the ticket', text: 'Kunming Station and Kunming South are separate rail terminals on different sides of the city; Kunming Changshui Airport is a third arrival point. Use the exact printed station in your hotel and transfer plan. For a Shilin West train, confirm how you will reach the actual departure station before buying a same-day airport connection.' },
      { label: 'BASE', title: 'Sleep centrally for the city days', text: 'A Wuhua or Green Lake-side base makes the central park, food and lane day easier. Stay near Kunming South only when a confirmed early departure or arrival makes that trade-off useful. With three nights, keep one hotel; a second base spends time on luggage and cross-city transfers.' },
      { label: 'ALTITUDE', title: 'Treat elevation as general travel-safety context', text: 'Kunming is already at elevation, and routes farther west can climb higher. A stop here does not promise acclimatization or remove risk. Keep the first outdoor day unhurried and use the linked official health guidance for general information; personal medical questions belong with a qualified clinician.' }
    ],
    itineraryKicker: 'FOUR SEASONS / FOUR FUNCTIONS',
    itineraryTitle: 'Give the gateway a real city day',
    itineraryIntro: 'Allow four nights when arrival and departure each use a transfer day; that leaves three full days for the city, one Dianchi/West Hills route and Shilin. Add a fifth night for a separate weather or onward-transfer buffer. Keep these as distinct map blocks.',
    itinerary: [
      { label: 'DAY 1 / CENTRAL', title: 'Cuihu, one museum and a quiet first evening', text: 'Use Green Lake (Cuihu) and one central collection or documented lane as the city orientation. If you arrive at Kunming South or the airport, settle first; do not add a cross-city landmark list to the transfer day.' },
      { label: 'DAY 2 / DIANCHI', title: 'Choose one managed shore or West Hills approach', text: 'Pick one public lakeside or wetland route, or a single West Hills approach, after checking the current gate and road connection. Do not promise a full Dianchi circuit. Move the outdoor block to the clearer forecast day and keep the return to your base explicit.' },
      { label: 'DAY 3 / SHILIN', title: 'Book the outbound and return as one conditional chain', text: 'Check whether 12306 offers a suitable Kunming South–Shilin West train on your actual date; the station-to-park transfer is a separate leg. Confirm the park entrance, last-mile vehicle and return to Shilin West with the current official operator or terminal before departure. If no verified return fits, arrange a confirmed driver or add a local night rather than improvising after dark.' },
      { label: 'DAY 4 / BUFFER', title: 'Use a spare day or leave from the named terminal', text: 'Keep a fourth day for a museum, a weather swap or a calm transfer. Before leaving, match your airport or rail booking to the exact Kunming station on the ticket and arrange the hotel-to-terminal route; do not assume Kunming Station and Kunming South share one city-center approach.' }
    ],
    practicalTitle: 'Plateau sun and long transfers hide behind mild temperatures',
    practical: [
      { label: 'WEATHER', title: 'Check the destination forecast, not only downtown', text: 'Kunming city, the lakeshore, West Hills and Shilin can have different conditions. Check the China Meteorological Administration forecast and current park notices on the day. Swap an exposed walk for a museum or central route during poor visibility, heavy rain or unsafe trail conditions.' },
      { label: 'WETLAND', title: 'Wildlife is not a feeding attraction', text: 'Observe birds from designated areas, keep food and drones away and follow seasonal closures. A crowded migration period requires more distance, not a closer photograph.' },
      { label: 'RETURN', title: 'Name every rail terminal and park handoff', text: 'The Kunming-to-Shilin West rail leg does not itself reach the scenic entrance. Confirm the current last mile and return endpoint with the park or terminal; this guide does not assert a bus number, fare or last departure that could not be verified. Save the Chinese station and hotel address offline.' }
    ],
    faqs: [
      { question: 'Is Kunming worth staying in?', answer: 'Yes. Two or three city days add Yunnan context, Dianchi ecology and Stone Forest geology. Treating Kunming only as an airport can make the rest of the province feel like disconnected scenery.' },
      { question: 'How do I reach Stone Forest and return?', answer: 'Check whether 12306 offers a suitable Kunming South–Shilin West train on your date, then confirm the separate transfer from Shilin West to the official entrance and back. No current bus headway or fare is promised here; if the official return chain is unclear, use a confirmed driver or stay locally.' },
      { question: 'Does a Kunming stop remove high-elevation travel risk?', answer: 'No. This is general travel-safety information: a stop in Kunming is not a medical guarantee for a later, higher overnight. Keep the first outdoor day unhurried and use the linked official guidance; seek a qualified clinician for personal medical questions.' },
      { question: 'How many days should I allow in Kunming?', answer: 'Three full days cover city context, one lake or ridge chapter and Stone Forest. Add a fourth for a slower seasonal visit or a calm onward transfer.' }
    ],
    sources: [
      { url: 'https://lcj.yn.gov.cn/special/2025/0512/6616.html', label: 'Yunnan Forestry and Grassland Administration — Stone Forest World Heritage context' },
      { url: 'https://whc.unesco.org/en/list/1248', label: 'UNESCO World Heritage Centre — South China Karst, including Shilin' },
      { url: 'https://www.km.gov.cn/', label: 'Kunming Municipal Government — current city notices and visitor-service lookup' },
      { url: 'https://weather.cma.cn/', label: 'China Meteorological Administration — current local forecast lookup' }
    ],
    image: { path: '/assets/images/china-destination-kunming.webp', alt: 'Kunming city center and canal stretching toward mountain ridges', caption: 'Kunming / plateau light, provincial context and one outer geology day', source: 'https://commons.wikimedia.org/wiki/File:五华区与盘龙区天际线_-_航拍_-_2025-05-16_03.jpg', creditTitle: 'Kunming skyline', creator: '瑞丽江的河水', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    search: { type: 'Plateau gateway guide', summary: 'Allow four nights for three full Kunming days: central context, one Dianchi or West Hills route and a conditional Shilin day trip. Check the exact rail station, Shilin West last mile and confirmed return before booking.', keywords: ['kunming', 'stone forest', 'shilin west', 'dianchi', 'kunming south', 'kunming itinerary'] }
  },
  {
    slug: 'dali',
    dateModified: '2026-10-11',
    name: 'Dali',
    title: 'Dali Travel Guide (2026): Erhai, Cangshan and Bai Town Routes',
    metaDescription: 'Plan Dali by base and shoreline, separating old-town crowds, Erhai distance, Cangshan weather and Bai community visits into a low-impact multi-day route.',
    ogTitle: 'Dali: Hold the Cangshan–Erhai Horizon',
    themeColor: '#3d6672',
    visual: 'lake-horizon',
    eyebrow: 'Yunnan / mountain-lake horizon and Bai settlements',
    titleAccent: 'hold the Cangshan–Erhai horizon',
    intro: 'Dali is not a single old town surrounded by an easy lake loop. Cangshan rises sharply west of a long Erhai shoreline, while Dali Old Town, Xiaguan, Xizhou and Shuanglang create different bases and visitor pressures. Choose where to sleep, then explore one side of the horizon at a time with water protection and community boundaries visible.',
    nights: '4–6 nights',
    coreLogic: 'one base + one lake side per day',
    watchFirst: 'road distance and mountain weather',
    motifs: ['Cangshan', 'Erhai', 'Bai courtyards', 'Village pace'],
    orientationTitle: 'Keep mountain and lake as two parallel lines',
    orientationIntro: 'The eight chapters move between old-town fabric, village heritage, shore ecology and elevation. A ring-road graphic hides real distance, so every lake day chooses one side and one return.',
    chapters: [
      { label: 'OLD TOWN', title: 'Dali Old Town beyond the main gates', text: 'Early lanes and side courtyards reveal more than the busiest commercial spine. Distinguish reconstructed frontage from surviving fabric, respect residential thresholds and use one local museum or documented building to ground the walk.' },
      { label: 'CITY HINGE', title: 'Xiaguan is the transport city', text: 'Modern Dali’s stations, airport links and services sit around Xiaguan rather than inside the old town. Keep the two names separate in bookings and use Xiaguan for practical movement instead of dismissing it as an inconvenient transfer zone.' },
      { label: 'NORTHWEST', title: 'Xizhou and Bai architectural context', text: 'Xizhou can support a heritage and food day when approached through credible interpretation. Ask before entering courtyards, avoid reducing Bai culture to patterned walls or costume portraits and leave room for residents using the same streets.' },
      { label: 'EAST SHORE', title: 'Shuanglang without circling the lake', text: 'The east shore offers different mountain views and a highly developed visitor economy. Choose one village or shoreline sequence, verify road conditions and do not treat a transfer-heavy loop as proof that the entire lake was experienced.' },
      { label: 'WATER BUFFER', title: 'Erhai is an ecosystem before a backdrop', text: 'Stay on designated paths, respect protection zones and do not enter wetlands or farm plots for a reflection shot. Boat and cycling access changes; choose a regulated activity and carry waste back from quieter stretches.' },
      { label: 'MOUNTAIN LINE', title: 'Cangshan by managed elevation', text: 'Cableways and trails reach different elevations and can close for wind or weather. Select the route by mobility and conditions, carry layers and avoid combining the highest option with a tight rail departure.' },
      { label: 'THREE PAGODAS', title: 'Monument, temple and mountain axis', text: 'The Chongsheng Temple complex needs time for spatial sequence, not just the familiar pagoda view. Verify current entry, dress respectfully around active religious space and use the Cangshan backdrop as context rather than an excuse to leave the managed path.' },
      { label: 'VILLAGE CONSENT', title: 'Culture is not an open studio', text: 'Markets, craft workshops and homes involve people, livelihoods and selective access. Choose community-led interpretation where possible, ask before photography and avoid buying wildlife, antique or culturally sensitive material with unclear provenance.' }
    ],
    decisions: [
      { label: 'ARRIVAL', title: 'Arrive at Dali station in Xiaguan, then name the last mile', text: 'The rail terminal is in Xiaguan, south of Dali Old Town; it is not a walk-in old-town station. Compare the current station-to-hotel route, save the full Chinese accommodation address and confirm the exact old-town gate or pickup point. For departure, plan hotel → named terminal and verify that the train leaves from Dali rather than another city station.' },
      { label: 'BASE', title: 'Keep one base for four nights; split only to change the first morning', text: 'Dali Old Town is the practical first base for food and transport; Xizhou moves you north for village mornings, while Shuanglang is an east-shore stay with greater road dependence. Four nights work from one base; on five or more, change base only if it removes a real early transfer, and keep luggage days light.' },
      { label: 'LOOP', title: 'Do not promise the entire Erhai ring in one day', text: 'A full loop turns villages, wetlands and shore into drive-by scenery. Choose west or east, one cultural anchor and one waterside segment, then return without racing sunset traffic.' }
    ],
    itineraryKicker: 'FOUR HORIZONS / NO CHECKLIST LOOP',
    itineraryTitle: 'Alternate settlement, water and height',
    itineraryIntro: 'Begin with old-town context, give one side of Erhai a full day, move north for Bai heritage and keep Cangshan weather-flexible.',
    itinerary: [
      { label: 'DAY 1 / OLD TOWN', title: 'Old Town lanes and Three Pagodas, without a station-day sprint', text: 'After arrival and check-in, walk one compact old-town area. On a full day, add the Three Pagodas complex as a separate west-side visit; confirm the current entrance and road return before setting the order.' },
      { label: 'DAY 2 / NORTH SHORE', title: 'Xizhou and one western lakeshore segment', text: 'Use a northbound road transfer to Xizhou, allow time for local streets and food, then choose one open Erhai path on the west side. Return to the same base by a confirmed pickup or current public transport; do not assume a lake loop.' },
      { label: 'DAY 3 / EAST SHORE', title: 'Shuanglang as its own out-and-back day', text: 'Choose the east shore only if its road time suits the day. Confirm drop-off, waiting or return pickup before leaving, and visit one settlement and one permitted shoreline section rather than stacking several villages.' },
      { label: 'DAY 4 / CANGSHAN', title: 'Use the managed mountain route only in safe conditions', text: 'Check the current cableway or trail notice and weather before departing. Keep a lower-effort Xiaguan museum or old-town option for wind, rain or closure, then preserve a separate transfer buffer for the final rail or airport departure.' }
    ],
    practicalTitle: 'The lake road is not the lake experience',
    practical: [
      { label: 'ECOLOGY', title: 'Observe Erhai protection rules', text: 'Wetland, shoreline and water-quality measures can change access. Stay on open paths, use regulated boats or bicycles and never bypass barriers for a private-water photo.' },
      { label: 'ALTITUDE', title: 'Treat elevation as general safety context', text: 'Dali is elevated and Cangshan rises higher. Keep the first outdoor day unhurried, use general official high-elevation travel guidance and select a lower-effort alternative. This guide does not offer personal medical advice.' },
      { label: 'RETURN', title: 'Confirm the village-to-base chain both ways', text: 'A lake-side drop-off is not a return plan. Before setting out, confirm the named village, pickup point, return mode and latest feasible departure with the current transport operator or accommodation; this guide does not promise a bus frequency or last service.' }
    ],
    faqs: [
      { question: 'Should I stay in Dali Old Town or by Erhai?', answer: 'Old Town is easiest for first-time food and transport; Xizhou or the east shore can suit quieter, place-specific stays. Choose by the first two mornings, not by a lake-view label alone.' },
      { question: 'How should I plan a return from Xizhou or Shuanglang?', answer: 'Choose one shore per day and confirm a current return ride or pickup from the exact village before leaving. Public services, road access and operating hours can change, so do not rely on an old frequency or a same-day connection that you have not checked.' },
      { question: 'How many nights does Dali need?', answer: 'Four nights generally allow three full visitor days after arrival: Old Town, one west-shore/Xizhou day and one east-shore or Cangshan day. Add nights for a fourth full outing or weather flexibility.' },
      { question: 'Is Cangshan always open?', answer: 'No. Wind, rain, fire risk, maintenance and other conditions can affect cableways and trails. Use official notices and keep a lower-elevation alternative ready.' }
    ],
    sources: [
      { url: 'https://www.yn.gov.cn/ztgg/jdbytjwhjc/cyh/zczd/202205/t20220527_242589.html', label: 'Yunnan Provincial Government — Dali, Cangshan and Erhai tourism and conservation planning context' },
      { url: 'https://www.dali.gov.cn/', label: 'Dali Prefecture Government — official local notices and access information' },
      { url: 'https://weather.cma.cn/', label: 'China Meteorological Administration — current local forecast lookup' },
    ],
    image: { path: '/assets/images/china-destination-dali.webp', alt: 'Erhai Lake reflecting the snow-dusted Cangshan mountains near Dali', caption: 'Dali / mountain-lake horizon, separate shore days and living Bai settlements', source: 'https://commons.wikimedia.org/wiki/File:大理洱海及苍山_01.jpg', creditTitle: 'Erhai Lake and Cangshan, Dali', creator: 'Kcx36', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    search: { type: 'Lake and mountain guide', summary: 'Allow four nights for Dali Old Town plus three full days: Xizhou and west shore, an east-shore out-and-back, and weather-led Cangshan. Confirm each village return and the Xiaguan rail terminal.', keywords: ['dali', 'erhai lake', 'cangshan', 'xizhou', 'shuanglang', 'dali station'] }
  },
  {
    slug: 'lijiang-shangri-la',
    dateModified: '2026-10-11',
    name: 'Lijiang & Shangri-La',
    title: 'Lijiang and Shangri-La Guide (2026): Water Towns and Altitude Route',
    metaDescription: 'Plan Lijiang through its three UNESCO town components, then ascend toward Shangri-La gradually with rail, weather, cultural respect and altitude risk made explicit.',
    ogTitle: 'Lijiang and Shangri-La: Follow Water Before Altitude',
    themeColor: '#3f4052',
    visual: 'water-lanes',
    eyebrow: 'Yunnan / Naxi water towns and higher plateau',
    titleAccent: 'follow water before altitude',
    intro: 'Lijiang’s canals and uneven lanes form a real settlement system, not just an entertainment district. Northward, elevation rises toward Shangri-La and the journey changes from heritage-city walking to altitude and weather management. Spend enough time in Lijiang to distinguish Dayan, Shuhe and Baisha, then ascend only with a slower first day and current transport information.',
    nights: '5–7 nights',
    coreLogic: 'three town components + gradual ascent',
    watchFirst: 'sleeping elevation',
    motifs: ['Canal', 'Naxi context', 'Snow range', 'Altitude'],
    orientationTitle: 'Follow the water channels before climbing the map',
    orientationIntro: 'The UNESCO town has three components with different pressure and fabric. The higher route introduces weather, Tibetan cultural space and health limits, so these chapters separate urban heritage from plateau ambition.',
    chapters: [
      { label: 'DAYAN CHANNEL', title: 'Old Town as a water-supply system', text: 'Walk Dayan early enough to see lanes before peak commerce, trace water rather than only shop streets and use UNESCO context for the relationship between topography, canals and courtyards. Keep residential thresholds and fire-safety rules clear.' },
      { label: 'SHUHE EDGE', title: 'A smaller component with its own pressures', text: 'Shuhe is not simply “quieter Lijiang.” It has distinct historical fabric and tourism development. Choose a slow walking circuit, avoid horse or animal products with poor welfare and leave commercial lanes for one documented neighborhood edge.' },
      { label: 'BAISHA GROUND', title: 'Murals, village life and consent', text: 'Baisha’s heritage includes religious paintings and living Naxi community space. Verify opening, follow photography restrictions around murals, ask before portraits and do not interpret residents’ clothing or homes without credible local context.' },
      { label: 'BLACK DRAGON', title: 'Water source and mountain frame', text: 'Black Dragon Pool helps explain how water reaches the old town and frames Yulong Snow Mountain when visibility allows. Visit for hydrology and urban relationship; never promise the mountain view or treat cloud as a failed day.' },
      { label: 'MOUNTAIN LIMIT', title: 'Yulong Snow Mountain by altitude, not bravado', text: 'Cableway products reach different areas and can close for wind or capacity. Confirm the exact ticket, increase exertion cautiously and do not use bottled oxygen as permission to ignore significant symptoms or official restrictions.' },
      { label: 'GORGE DECISION', title: 'Tiger Leaping Gorge needs trail facts', text: 'Road access, trail condition, weather and overnight choices vary. Use current local and operator information, avoid cliff routes in unsafe conditions and keep a simple viewpoint day separate from a multi-day hike in all descriptions.' },
      { label: 'NORTHBOUND', title: 'Pair Lijiang and Shangri-La rail with separate road legs', text: 'Search the actual date and exact Lijiang–Shangri-La stations on 12306; Lijiang station is outside Dayan, and Shangri-La station still needs a road transfer to a named Dukezong-area hotel. Check the return service before choosing a short stay and do not plan a same-day arrival plus a remote excursion.' },
      { label: 'PLATEAU RESPECT', title: 'Religious and community spaces set the rules', text: 'Follow local photography and behavior guidance in monasteries and Tibetan neighborhoods, avoid intrusive portraiture and choose interpretation that recognizes living religious practice rather than presenting culture as scenery.' }
    ],
    decisions: [
      { label: 'ARRIVAL', title: 'Name both rail stations and the two hotel transfers', text: 'Lijiang station is outside the old lanes; Shangri-La station is also outside the old-town walking core. Check date-specific services and return on 12306, then confirm each station-to-hotel road leg, gate and luggage handoff. Save the Chinese hotel names offline.' },
      { label: 'BASE', title: 'Dayan, Shuhe and Baisha are not interchangeable', text: 'Dayan maximizes food and transport with the heaviest crowds; Shuhe offers a different developed settlement; Baisha is smaller and less convenient. Choose by the heritage component you want to inhabit respectfully.' },
      { label: 'ASCENT', title: 'Reserve two or three Shangri-La nights', text: 'A 5–7-night trip can use three Lijiang nights plus two or three in Shangri-La, with a gentle arrival afternoon and a return-transfer buffer. Do not compress the higher overnight into a day trip or promise that time in Lijiang removes altitude risk.' }
    ],
    itineraryKicker: 'WATER FIRST / ALTITUDE SECOND',
    itineraryTitle: 'A six-day route that climbs deliberately',
    itineraryIntro: 'Give Lijiang’s component towns three days, use one weather-dependent landscape day and reserve two days for a gentle Shangri-La introduction.',
    itinerary: [
      { label: 'DAY 1 / DAYAN', title: 'Water lanes and one institution', text: 'Trace the canal system in quieter hours, use a museum or documented building for Naxi context and stop before night commerce replaces observation.' },
      { label: 'DAY 2 / COMPONENTS', title: 'Shuhe and Baisha without a race', text: 'Choose both only with a simple road chain and generous walking time. Give murals, courtyards and living streets more attention than shopping stops.' },
      { label: 'DAY 3 / WEATHER', title: 'Mountain, gorge or lowland alternative', text: 'Use current visibility and access to choose Yulong, a safe gorge plan or Black Dragon Pool and town depth. Do not force elevation when conditions are poor.' },
      { label: 'DAYS 4–6 / ASCENT', title: 'Rail north, stay two or three nights, return with margin', text: 'Check the date-specific Lijiang–Shangri-La train on 12306, arrange both station-to-hotel road legs and confirm the return before choosing nights. Keep the arrival day gentle, use the next day for Dukezong and one nearby visit only if weather and conditions allow, then leave a buffer before the train. Add a third night instead of connecting from a remote stop.' }
    ],
    practicalTitle: 'Altitude and heritage both require restraint',
    practical: [
      { label: 'HEALTH', title: 'Use general high-elevation safety guidance', text: 'Sleeping elevation rises on this route. Keep the first day unhurried, know where local help is available and follow official travel-health guidance. This page is general information, not a personal medical plan; get qualified help for individual questions or serious symptoms.' },
      { label: 'STONE LANES', title: 'Old-town access is not luggage-friendly', text: 'Uneven paving, steps and vehicle restrictions complicate arrival. Confirm the closest usable gate, ask the accommodation about porter arrangements and keep valuables controlled in crowds.' },
      { label: 'PHOTOGRAPHY', title: 'Murals and worship may forbid cameras', text: 'Follow posted rules and staff instructions, ask before photographing people and never use flash, drones or hidden cameras where cultural or conservation restrictions apply.' }
    ],
    faqs: [
      { question: 'How many days do Lijiang and Shangri-La need?', answer: 'Five to seven nights allow three Lijiang-area days and a slower two- or three-night Shangri-La chapter. A shorter trip should choose one base instead of compressing altitude gain.' },
      { question: 'Are Dayan, Shuhe and Baisha all part of the UNESCO property?', answer: 'Yes. The Old Town of Lijiang World Heritage property includes Dayan, Shuhe and Baisha components, each with different form and visitor pressure.' },
      { question: 'How do I plan the rail return from Shangri-La?', answer: 'Check the exact date and station names on 12306, then allow separate road transfers between each station and your hotel. Confirm the return train before choosing the number of nights; a nearby outing should not end with a tight rail connection.' },
      { question: 'Can I do Tiger Leaping Gorge as a quick stop?', answer: 'A managed viewpoint and a substantial hiking route are different products. Verify road, trail, weather and mobility before describing or booking either one.' }
    ],
    sources: [
      { url: 'https://whc.unesco.org/en/list/811', label: 'UNESCO World Heritage Centre — Old Town of Lijiang' },
      { url: 'https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/high-altitude-travel-and-altitude-illness.html', label: 'US CDC Yellow Book — general high-altitude travel-safety information' },
      { url: 'https://weather.cma.cn/', label: 'China Meteorological Administration — current local forecast lookup' }
    ],
    image: { path: '/assets/images/china-destination-lijiang.webp', alt: 'Tiled roofs of Lijiang Old Town spreading beneath Yunnan mountains', caption: 'Northwest Yunnan / water-town heritage before a deliberate ascent', source: 'https://commons.wikimedia.org/wiki/File:1_lijiang_old_town_2012.jpg', creditTitle: 'Lijiang Old Town', creator: 'chensiyuan', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    search: { type: 'Heritage and altitude route', summary: 'Allow five to seven nights, counting two transfer days: spend three Lijiang-area nights on Dayan, Shuhe and Baisha, then two or three in Shangri-La. Check both exact rail stations and transfers; keep the high-town arrival gentle.', keywords: ['lijiang', 'shangri-la', 'dayan', 'shuhe', 'baisha', 'lijiang shangri-la train'] }
  },
  {
    slug: 'zhangjiajie',
    dateModified: '2026-10-11',
    name: 'Zhangjiajie',
    title: 'Zhangjiajie Travel Guide (2026): Wulingyuan Gates and Weather',
    metaDescription: 'Plan Zhangjiajie through Wulingyuan gate choice, park shuttles, cableways, fog and cliff exposure, with city, park and Tianmen routes kept operationally distinct.',
    ogTitle: 'Zhangjiajie: Use a Pillar-and-Gate Fieldbook',
    themeColor: '#263d32',
    visual: 'pillar-profile',
    eyebrow: 'Hunan / sandstone pillars and park systems',
    titleAccent: 'use a pillar-and-gate fieldbook',
    intro: '“Zhangjiajie” can mean the prefecture-level city, the urban gateway, Wulingyuan District, the national forest park or a broader scenic network. Those names are not interchangeable when buying tickets or choosing a hotel. Start with the correct gate and shuttle system, then let fog, stairs and cliff comfort determine how much terrain belongs in one day.',
    nights: '3–5 nights',
    coreLogic: 'one gate + one elevation system',
    watchFirst: 'park notice and visibility',
    motifs: ['Gate', 'Shuttle', 'Pillar', 'Fog'],
    orientationTitle: 'Map the park vertically before tracing it horizontally',
    orientationIntro: 'Valley walks, elevator or cableway access, upper plateaus and city-based Tianmen Mountain create separate operating systems. These chapters keep each gate, queue and descent attached to its actual day.',
    chapters: [
      { label: 'BASE GATE', title: 'Choose a hotel by its gate and your first two mornings', text: 'Wulingyuan town suits repeated park days; the urban core suits Zhangjiajie West station, the airport and Tianmen Mountain. The provincial tourism map names Wujiayu (East Gate), Forest Park (South Gate), Tianzi (North Gate), Zimugang and Yangjiajie as separate entries. Use those names to orient yourself, then follow the entrance and exit allowed by the current ticket and park notice.' },
      { label: 'LOW VALLEY', title: 'Golden Whip Stream as a ground profile', text: 'The valley route offers forest and pillar scale without beginning at a high cliff edge. Check current open sections and shuttle links, avoid feeding macaques and keep food secure; a quiet lower walk can be more rewarding than rushing to every upper platform.' },
      { label: 'ELEVATOR RISE', title: 'Bailong and Yuanjiajie queue logic', text: 'The elevator creates a rapid elevation change but can concentrate demand. Verify ticket relationship, choose ascent or descent strategically and keep an alternative route when wait time would consume the planned plateau walk.' },
      { label: 'UPPER RIDGE', title: 'Yuanjiajie beyond one named pillar', text: 'Viewpoints are connected by shuttles and crowded paths rather than one empty ridge. Use official maps, accept fog and focus on landform scale; fictional movie associations should not replace geological or conservation context.' },
      { label: 'TIANZI PROFILE', title: 'Cableway, shuttle and descent in one chain', text: 'Tianzi Mountain can connect high viewpoints with different descent options. Check the final shuttle and cableway operation, avoid committing to steep stairs late and keep the same gate return visible if luggage waits elsewhere.' },
      { label: 'QUIETER BRANCH', title: 'Yangjiajie only when access supports it', text: 'Trail openings, maintenance and steep sections can change. Use current park notices, select routes appropriate to mobility and weather and do not enter closed branches because older blogs call them crowd-free.' },
      { label: 'CITY CABLE', title: 'Tianmen Mountain is not inside Wulingyuan', text: 'The urban cableway and mountain road form their own ticketed day with glass walks, stairs and weather exposure. Confirm the route type and boarding point, and never combine it casually with a full national park itinerary.' },
      { label: 'CAVE OPTION', title: 'Yellow Dragon Cave as a weather alternative', text: 'A managed cave can offer geological contrast, but stairs, lighting and group flow matter. Verify current operation and use it as a deliberate chapter, not as a promise that every rainy day has a frictionless indoor replacement.' }
    ],
    decisions: [
      { label: 'ARRIVAL', title: 'Zhangjiajie West is a road transfer from Wulingyuan', text: 'Search the exact train date on 12306 and confirm the station is Zhangjiajie West. Wulingyuan town and Tianmen Mountain’s city boarding area are separate road destinations; check the current station-to-hotel connection and a late-arrival fallback before booking. Save the hotel’s Chinese name and exact gate.' },
      { label: 'BASE', title: 'Use three nights in Wulingyuan; add a city night for Tianmen', text: 'Three nights allow two park mornings from one Wulingyuan base. Four or five nights can add a separate Tianmen day and a city hotel night near the city boarding point or return station. Keep luggage transfer explicit; the ticketed park system does not return you to a city hotel.' },
      { label: 'HEIGHT', title: 'Choose the day by cliff comfort', text: 'Glass paths, exposed viewpoints, cableways and long stairs affect travelers differently. Build a lower-valley alternative and never pressure a companion into a height route because the ticket is prepaid.' }
    ],
    itineraryKicker: 'FOUR PROFILES / ONE GATE EACH',
    itineraryTitle: 'A park plan with a known ascent and descent',
    itineraryIntro: 'Use two Wulingyuan days, one flexible contrast and one separate Tianmen day. Fog is a condition to work with, not a cue to cross closed barriers.',
    itinerary: [
      { label: 'DAY 1 / SOUTH GATE', title: 'Golden Whip Creek from the Forest Park entrance', text: 'For the lower-valley profile, confirm that the current ticket permits entry at Forest Park (South Gate), then follow staff directions for the open creek section. Plan to leave by the same gate and confirm how you return to the Wulingyuan hotel before entering; do not assume a cross-park shuttle is still running at the end of your walk.' },
      { label: 'DAY 2 / EAST OR NORTH', title: 'One upper-plateau route and its ticketed exit', text: 'If the current ticket and park map allow it, use Wujiayu (East Gate) for an upper route such as Yuanjiajie, or Tianzi (North Gate) for a distinct mountain profile. Confirm the named entrance, included shuttle/elevator or cableway product, last permitted exit and road return before departure. These are separate options, not one guaranteed circuit.' },
      { label: 'DAY 3 / FLEX', title: 'Add a second branch only after checking today’s access', text: 'Use the park notice to choose an open Yangjiajie or Tianzi branch, repeat a lower route, or stay in town if visibility, rain or closures make exposed terrain a poor fit. Return through the gate printed or assigned for that day, with a confirmed ride back to the base.' },
      { label: 'DAY 4 / CITY', title: 'Give Tianmen its own city-based day and return', text: 'Travel back to the urban area and use the exact boarding location and route shown by the current Tianmen operator. Keep the return to the city hotel or Zhangjiajie West explicit. If the visit date, ticket or weather status is unclear, use a city museum or rest day instead of joining it to a full Wulingyuan circuit.' }
    ],
    practicalTitle: 'The gate printed on the ticket controls the day',
    practical: [
      { label: 'GATES', title: 'Recheck ticket access, exits and return vehicle', text: 'The 2022 Hunan provincial transport guide helps identify gate names, not today’s operating hours, ticket inclusions or exits. Check the current operator notice for your date and confirm the Wulingyuan or city return before entering. This guide does not assert current shuttle intervals, fares or reservation conditions.' },
      { label: 'WILDLIFE', title: 'Do not feed or confront macaques', text: 'Keep food and loose items secured, maintain distance and follow park guidance. A close photograph is not worth conditioning wildlife to approach people.' },
      { label: 'WEATHER', title: 'Swap high viewpoints for a lower plan', text: 'Check the China Meteorological Administration forecast and current park/Tianmen operator notices for the destination area, not just the city. Fog may hide long views; heavy rain, slick steps or a closure calls for a lower open walk, a confirmed indoor visit or a rest day.' }
    ],
    faqs: [
      { question: 'Is Zhangjiajie National Forest Park the same as Tianmen Mountain?', answer: 'No. The forest park is part of the Wulingyuan scenic system outside the urban core; Tianmen Mountain uses a separate city-based ticket and transport system.' },
      { question: 'Where should I stay for Wulingyuan?', answer: 'Wulingyuan town is practical for repeated park days. Stay in Zhangjiajie city when Tianmen Mountain, airport or rail timing dominates, or split bases on a longer visit.' },
      { question: 'Can I see Wulingyuan in one day?', answer: 'One day can cover one lower or upper circuit, but not the whole protected landscape. Two days allow one valley profile and one plateau route with weather flexibility.' },
      { question: 'What if the park is foggy?', answer: 'Fog can reveal nearby pillars while hiding long views. Use a lower forest route, cave or cultural alternative, and avoid chasing exposed viewpoints when visibility and surfaces are poor.' }
    ],
    sources: [
      { url: 'https://whc.unesco.org/en/list/640', label: 'UNESCO World Heritage Centre — Wulingyuan Scenic and Historic Interest Area' },
      { url: 'https://whhlyt.hunan.gov.cn/whhlyt/wldh2022jt/202208/t20220823_27716245.html', label: 'Hunan Provincial Department of Culture and Tourism — Wulingyuan gate names and transport orientation (26 August 2022; verify current entry)' },
      { url: 'https://www.hnzjj.com/', label: 'Zhangjiajie–Wulingyuan Official Tourism Website — current visitor-service lookup' },
      { url: 'https://weather.cma.cn/', label: 'China Meteorological Administration — current local forecast lookup' },
    ],
    image: { path: '/assets/images/china-destination-zhangjiajie.webp', alt: 'Forested sandstone pillars receding into mist in Zhangjiajie', caption: 'Wulingyuan / gates, elevation systems and weather-led sandstone routes', source: 'https://commons.wikimedia.org/wiki/File:1_tianzishan_wulingyuan_zhangjiajie_2012.jpg', creditTitle: 'Wulingyuan sandstone pillars, Zhangjiajie', creator: 'chensiyuan', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    search: { type: 'Mountain park planner', summary: 'Allow three nights near Wulingyuan for two park days, then add a city night for Tianmen. Match the current ticket to a named gate, verify the assigned exit and return ride, and use weather to swap exposed routes.', keywords: ['zhangjiajie', 'wulingyuan', 'wujiayu east gate', 'forest park south gate', 'tianmen mountain', 'zhangjiajie west station'] }
  },
  {
    slug: 'guiyang-guizhou',
    dateModified: '2026-10-11',
    name: 'Guiyang & Guizhou',
    title: 'Guiyang and Guizhou Guide (2026): Karst, Waterfalls and Village Routes',
    metaDescription: 'Use Guiyang as a transport base for Guizhou, choosing one karst, waterfall or community-led village corridor with realistic rail, road, rain and consent planning.',
    ogTitle: 'Guiyang and Guizhou: Build a Rain-and-Karst Cabinet',
    themeColor: '#244b46',
    visual: 'rain-cabinet',
    eyebrow: 'Guizhou / karst water and community routes',
    titleAccent: 'build a rain-and-karst cabinet',
    intro: 'Guizhou’s strongest destinations sit in different directions from Guiyang and cannot be gathered into one effortless circuit. Waterfalls, caves, cone karst and community-based cultural visits each depend on rain, road time and local access. Use the capital for transport and context, then open only one regional drawer at a time.',
    nights: '5–8 nights',
    coreLogic: 'Guiyang base + one corridor',
    watchFirst: 'rain and road distance',
    motifs: ['Rain', 'Karst', 'Waterfall', 'Consent'],
    orientationTitle: 'Choose one watershed before choosing attractions',
    orientationIntro: 'Libo, Huangguoshu, Zhijin and southeastern village routes are not adjacent. These chapters pair landscape processes with the practical transfer and cultural responsibilities that belong to them.',
    chapters: [
      { label: 'CAPITAL BASE', title: 'Guiyang for transport and provincial context', text: 'Use the city for rail or air arrival, one museum and food orientation. Stay near the station serving the chosen corridor rather than assuming every Guizhou excursion begins from the same platform.' },
      { label: 'WATERFALL FLOW', title: 'Huangguoshu needs an Anshun transfer plan', text: 'If your date-specific rail search lists Anshun West, treat that station and the Huangguoshu visitor entrance as separate legs. Confirm the official last-mile vehicle, park entry instructions and reverse connection from the current operator or terminal before leaving. No current coach schedule, fare or shuttle interval is asserted here; stay near the site if the return chain is uncertain.' },
      { label: 'LIBO KARST', title: 'Check the rail destination before arranging the Libo last mile', text: 'For Xiaoqikong, search 12306 for a date-specific Guiyang-to-Libo service; if the ticket lists Libo station, arrange the separate station-to-park-town/entrance leg and return. A 2018 official Guizhou travel guide records older Mawei-station and county-coach options, but that is historical orientation, not a current timetable. Verify today’s operator instructions before travel and plan at least one overnight near Libo.' },
      { label: 'CAVE RECORD', title: 'Zhijin Cave by geology and capacity', text: 'The large cave system can involve long walking, stairs, humidity and controlled group flow. Use UNESCO geopark interpretation, follow lighting and photography rules and keep the road transfer visible.' },
      { label: 'VILLAGE ROUTE', title: 'Community visits require consent and context', text: 'Miao, Dong, Bouyei and other communities are not interchangeable cultural displays. Choose locally grounded interpretation, ask before portraits or entering homes and avoid treating festivals, clothing or rituals as guaranteed performances.' },
      { label: 'RAIL CORRIDOR', title: 'Book the trunk and last mile as separate legs', text: 'For each corridor, copy the exact rail station and destination gate in Chinese. Check both outbound and return on 12306, then confirm the separate local vehicle and latest practical return with the current official scenic operator or terminal. If that chain cannot be confirmed, add a nearby overnight rather than rely on a same-day through connection.' },
      { label: 'FOOD TERRAIN', title: 'Sour, fermented and chili flavors by region', text: 'Guizhou cuisine changes across communities and cities. Ask about fish, fermentation, chili and shared broths, carry dietary requests in Chinese and avoid claiming one Guiyang snack represents the whole province.' },
      { label: 'RAIN EDIT', title: 'Wet weather changes more than photographs', text: 'Rain can enrich waterfalls while raising trail, road, cave and flood risk. Follow official closures, keep one museum or city day flexible and do not pressure a driver through unsafe mountain conditions.' }
    ],
    decisions: [
      { label: 'ARRIVAL', title: 'Use the departure station printed for your corridor', text: 'Guiyang North, Guiyang East and Guiyang station are distinct terminals. Search the exact date and destination on 12306 first, then choose a hotel and station transfer around the ticket actually available. Do not assume a same-morning cross-city transfer is trivial.' },
      { label: 'CORRIDOR', title: 'Choose one region for five nights; add a second only with seven or more', text: 'For a focused five-night trip, choose either the west (Anshun/Huangguoshu) or south (Libo/Xiaoqikong) corridor after a Guiyang arrival night. Seven or eight nights can combine them with a deliberate return through Guiyang and an overnight at each regional base; do not treat them as neighboring day trips.' },
      { label: 'GUIDE', title: 'Use local expertise without buying a staged village', text: 'Ask how access, consent, fees and photography are handled. Prefer transparent, community-connected interpretation and walk away from products promising private rituals or guaranteed costume portraits.' }
    ],
    itineraryKicker: 'FOUR DRAWERS / ONE REGIONAL CABINET',
    itineraryTitle: 'A Guizhou route that admits the road',
    itineraryIntro: 'Begin in Guiyang, choose one landscape corridor for two days and use the final day for context or transfer. A second corridor belongs to a longer stay.',
    itinerary: [
      { label: 'DAY 1 / GUIYANG', title: 'Museum, market and route check', text: 'Use a provincial collection and one food neighborhood, then verify the exact train, driver or park connection before leaving the capital.' },
      { label: 'DAYS 2–3 / WEST', title: 'Option A: rail to Anshun West only if the date’s service fits', text: 'Check Guiyang → Anshun West for your date; if available, confirm the current road transfer to the official Huangguoshu entrance and stay locally if the return-to-station timing is uncertain. Use one full park day, check entry and return transport before departure, then reverse the chain to Guiyang or your onward terminal.' },
      { label: 'DAYS 2–4 / SOUTH', title: 'Option B: if available, rail to Libo for Xiaoqikong', text: 'Check whether 12306 lists a suitable Guiyang North → Libo service on your date. If it does, arrange the separate Libo-station-to-park transfer and stay nearby at least one night; otherwise, check current official ground transport. A 2018 Guizhou government travel guide describes older Mawei-station and county-coach links, not a current schedule. Verify rain, park access and the full return chain.' },
      { label: 'DAYS 5–7 / COMBINE', title: 'Seven or more nights: add the other corridor with a reset', text: 'For a longer trip, return to Guiyang between west and south rather than assuming a direct transfer. Keep a city or museum weather buffer, confirm each station/hotel link and preserve a final night near the correct departure station. If heavy rain closes trails or roads, use the capital day and follow official warnings.' }
    ],
    practicalTitle: 'Consent and catchment conditions are route data',
    practical: [
      { label: 'WEATHER', title: 'Use destination forecasts and a rain-day swap', text: 'Check the China Meteorological Administration forecast for the county/park plus current scenic-area and transport notices, not just Guiyang. Move exposed waterfalls or karst trails to the safer clear window; use the city museum/food day during heavy rain or warnings, and do not travel through a closure.' },
      { label: 'LANGUAGE', title: 'Save the county and gate in Chinese', text: 'English names may collapse several villages or scenic sections. Carry the full Chinese destination, accommodation and pickup point offline and confirm them with the operator before departure.' },
      { label: 'PEOPLE', title: 'A ticket never buys a portrait', text: 'Ask before photographing people, domestic space, craft work or religious activity. Respect refusals, pay transparent workshop or guide fees and avoid distributing children’s images without informed permission.' }
    ],
    faqs: [
      { question: 'Which station and how many nights for Huangguoshu or Libo?', answer: 'For the west corridor, check Guiyang to Anshun West and the current transfer to Huangguoshu; for the south, check Guiyang North to Libo station and the onward park transfer. Plan at least one regional overnight and verify both return legs. Five nights suit one corridor; seven or more can fit both with a Guiyang reset.' },
      { question: 'How many days does Guizhou need?', answer: 'Five days support Guiyang plus one substantial regional corridor. Seven or eight allow a second direction with weather margin and without turning village visits into roadside stops.' },
      { question: 'Is Huangguoshu best after heavy rain?', answer: 'More water can increase visual drama but also trail, spray, flood and transport risk. Follow official access and safety information rather than seeking extreme conditions.' },
      { question: 'How should I visit minority villages respectfully?', answer: 'Choose community-connected interpretation, ask permission for people and homes, avoid staged stereotypes and understand that daily life and religious activity are not guaranteed performances.' }
    ],
    sources: [
      { url: 'https://whc.unesco.org/en/list/1248', label: 'UNESCO World Heritage Centre — South China Karst, including Libo' },
      { url: 'https://www.eguizhou.gov.cn/2018-12/04/c_368390.htm', label: 'Guizhou Provincial Government travel guide — Libo area and historical transport orientation (2018; not a current timetable)' },
      { url: 'https://www.guizhou.gov.cn/ztzl/hxxcwf/xqk/', label: 'Guizhou Provincial Government — Xiaoqikong visitor-service lookup (page unavailable during this review; confirm live details)' },
      { url: 'https://www.unesco.org/en/iggp/zhijindong-cave-unesco-global-geopark', label: 'UNESCO Global Geoparks — Zhijindong Cave' },
      { url: 'https://weather.cma.cn/', label: 'China Meteorological Administration — current local forecast lookup' },
    ],
    image: { path: '/assets/images/china-destination-guizhou.webp', alt: 'Huangguoshu Waterfall plunging through green forest in Guizhou', caption: 'Guizhou / watershed choices, karst movement and community consent', source: 'https://commons.wikimedia.org/wiki/File:黄果树瀑布_2026-07-31_01.jpg', creditTitle: 'Huangguoshu Waterfall, Guizhou', creator: 'Kcx36', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    search: { type: 'Karst and community route', summary: 'Plan five nights around one corridor: check date-specific rail to Anshun West for Huangguoshu or Libo station for Xiaoqikong, then verify each last-mile and return. Seven or more nights can fit both with regional overnights and a Guiyang reset.', keywords: ['guiyang', 'guizhou', 'huangguoshu', 'anshun west', 'libo station', 'xiaoqikong'] }
  },
  {
    slug: 'dunhuang-hexi-corridor',
    name: 'Dunhuang & Hexi Corridor',
    title: 'Dunhuang and Hexi Corridor Guide (2026): Mogao, Desert and Silk Road',
    metaDescription: 'Plan Dunhuang around Mogao Cave reservations, desert climate and conservation, then connect a realistic Hexi Corridor route by rail or air.',
    ogTitle: 'Dunhuang and Hexi Corridor: Open the Manuscript Carefully',
    themeColor: '#9b5b34',
    visual: 'manuscript-strip',
    eyebrow: 'Gansu / cave art, oasis and Silk Road distance',
    titleAccent: 'open the manuscript carefully',
    intro: 'Dunhuang sits at an oasis crossroads where cave art, manuscripts, desert and long-distance transport intersect. The Mogao Caves are a protected, capacity-managed heritage site rather than a flexible photo stop. Reserve that anchor first, then arrange dunes, museums and any broader Hexi Corridor movement around conservation rules and desert climate.',
    nights: '3–5 nights',
    coreLogic: 'Mogao slot + oasis day',
    watchFirst: 'reservation and desert heat',
    motifs: ['Cave register', 'Oasis', 'Dune', 'Corridor'],
    orientationTitle: 'Read the route as a manuscript with missing margins',
    orientationIntro: 'Cave access is curated, objects are dispersed across institutions and the corridor stretches far east. These chapters separate protected art, research context, desert activity and onward travel instead of calling all of it one Silk Road attraction.',
    chapters: [
      { label: 'CAVE REGISTER', title: 'Mogao starts with the official reservation', text: 'Book through the authorized channel, match identity details and follow the assigned visit process. The cave selection and access can vary for conservation; photography restrictions are part of protecting fragile murals, not an inconvenience to bypass.' },
      { label: 'INTERPRETATION', title: 'Use the digital and museum context', text: 'Introductory films, exhibitions and the Dunhuang Academy’s research help visitors understand imagery that cannot be viewed at leisure inside small caves. Give interpretation real time and never use unauthorized reproductions as proof of what a specific visit will include.' },
      { label: 'OASIS EDGE', title: 'Crescent Lake and Mingsha by heat', text: 'Dunes and oasis can be intensely exposed. Choose early or late hours, follow managed routes and protect the spring environment. Camel or recreation products should be evaluated for animal welfare, safety and actual value rather than treated as compulsory.' },
      { label: 'CITY ARCHIVE', title: 'Dunhuang Museum before souvenir mythology', text: 'A museum visit can connect local archaeology, Silk Road exchange and the Library Cave story. Check the current reservation and opening day, then use the night market for food and commerce without treating every themed object as historical evidence.' },
      { label: 'WESTERN GATE', title: 'Yumen and Yangguan are long road choices', text: 'The pass sites and desert landscape lie far from central Dunhuang and from each other. Choose one coherent route, verify the driver and site status and carry food, water and a return buffer appropriate to exposed roads.' },
      { label: 'YARDANG LIMIT', title: 'Geology at the edge of the day', text: 'Yardang landscapes can involve very long drives, strong wind and limited services. Use a reputable operator, follow protected-area access and do not pair the farthest route with a morning cave reservation or same-night train.' },
      { label: 'NIGHT SKY', title: 'Darkness requires an operator and layers', text: 'Desert stargazing depends on moon, cloud, dust, temperature and legal access. Verify the site and return transport, carry warm layers even after a hot day and avoid off-road driving through protected surfaces.' },
      { label: 'HEXI LINE', title: 'The corridor is a multi-city journey', text: 'Jiayuguan, Zhangye and other Hexi stops are separated by substantial rail distances. Add them as overnight chapters with their own heritage and landscape logic, not as a single Dunhuang driver excursion.' }
    ],
    decisions: [
      { label: 'RESERVE', title: 'Mogao before flights and hotels', text: 'The protected site can be the least flexible element. Check official availability and visitor rules first, then place air or rail arrival with a safe buffer rather than assuming a same-day cave slot will wait.' },
      { label: 'ARRIVAL', title: 'Airport and railway each need a city transfer', text: 'Confirm Dunhuang Airport, Dunhuang railway station or Liuyuan connections by exact service. A route advertised as “Dunhuang” can still leave a long road leg before the hotel.' },
      { label: 'CORRIDOR', title: 'Travel east in overnight chapters', text: 'If continuing through Jiayuguan or Zhangye, choose the sequence by confirmed trains and nights. Do not let a long corridor erase the depth of Mogao or the protected desert day.' }
    ],
    itineraryKicker: 'FOUR LEAVES / ONE PROTECTED ANCHOR',
    itineraryTitle: 'Place the caves before the desert margins',
    itineraryIntro: 'Keep one day anchored to Mogao, one to oasis and museum, one to a selected western road and one for rest or onward rail.',
    itinerary: [
      { label: 'DAY 1 / CONTEXT', title: 'Museum and oasis orientation', text: 'Settle in the city, visit the museum if timing permits and use a cooler Mingsha or Crescent Lake window without exhausting the body before Mogao.' },
      { label: 'DAY 2 / MOGAO', title: 'Protected cave visit', text: 'Follow the official reservation process, absorb the interpretation and keep the rest of the day light enough to reflect rather than chase distant desert stops.' },
      { label: 'DAY 3 / WEST', title: 'One pass or geological route', text: 'Choose Yangguan, Yumen or a farther landscape by genuine road time and conditions. Do not promise all western sites in a single comfortable day.' },
      { label: 'DAY 4 / CORRIDOR', title: 'Recovery or eastbound rail', text: 'Use a quiet city morning, weather fallback or move toward Jiayuguan and Zhangye as a new overnight sequence from the exact station.' }
    ],
    practicalTitle: 'Conservation capacity is not negotiable',
    practical: [
      { label: 'CAVES', title: 'No flash and no hidden photography', text: 'Follow every photography, group and touching restriction. Cave art is vulnerable to light, humidity and visitor pressure; a prohibited image is not worth damaging trust or heritage.' },
      { label: 'DESERT', title: 'Heat can turn a short walk into a risk', text: 'Use cooler hours, water, sun protection and conservative exertion. Follow official warnings and seek medical help for heat illness rather than continuing because a timed driver is waiting.' },
      { label: 'DISTANCE', title: 'Carry the return, not only the destination', text: 'Western sites have limited services and long roads. Confirm fuel, communication, driver hours and final drop-off, and never schedule an unbuffered train after the farthest route.' }
    ],
    faqs: [
      { question: 'Do I need to reserve the Mogao Caves?', answer: 'Yes. Treat Mogao as a capacity-managed, identity-linked heritage visit and use the official authorized process. Cave access and procedures can change for conservation.' },
      { question: 'Can I photograph inside the Mogao Caves?', answer: 'Follow the current site rules; photography is restricted in protected cave interiors. Do not use flash or hidden cameras, and rely on authorized exhibitions and publications for detailed imagery.' },
      { question: 'How many days does Dunhuang need?', answer: 'Three full days cover Mogao, city and oasis context plus one selected western route. Four or five add weather flexibility and a calmer transition into the Hexi Corridor.' },
      { question: 'Can I visit Jiayuguan and Zhangye from Dunhuang in one day?', answer: 'No meaningful version fits one day. They are separate corridor cities connected by long rail movements and deserve their own overnight planning.' }
    ],
    sources: [
      { url: 'https://whc.unesco.org/en/list/440/', label: 'UNESCO World Heritage Centre — Mogao Caves' },
      { url: 'https://www.dha.ac.cn/', label: 'Dunhuang Academy — official conservation, research and visitor information' }
    ],
    image: { path: '/assets/images/china-destination-dunhuang.webp', alt: 'Crescent Lake oasis enclosed by the Singing Sand Dunes near Dunhuang', caption: 'Dunhuang / protected cave art, oasis margins and corridor-scale travel', source: 'https://commons.wikimedia.org/wiki/File:Crescent_Lake_from_the_Singing_Sand_Dunes_(20230918101214).jpg', creditTitle: 'Crescent Lake, Dunhuang', creator: 'N509FZ', license: 'CC BY-SA 4.0' },
    search: { type: 'Silk Road heritage guide', summary: 'Reserve Mogao first, then fit Dunhuang’s oasis, museum and one desert road around conservation and climate limits.', keywords: ['dunhuang', 'mogao caves', 'crescent lake', 'mingsha dunes', 'hexi corridor', 'silk road'] }
  },
  {
    slug: 'xinjiang-corridor',
    name: 'Urumqi, Turpan & Kashgar',
    title: 'Xinjiang Travel Guide (2026): Urumqi, Turpan and Kashgar Corridor',
    metaDescription: 'Build a nine-night Urumqi–Turpan–Kashgar route around three named bases, a full transfer day, current nationality-specific access checks and a confirmed return.',
    ogTitle: 'Xinjiang: Choose One Corridor and Confirm Each Gate',
    themeColor: '#70472b',
    visual: 'corridor-atlas',
    eyebrow: 'Xinjiang / one corridor, three separate bases',
    titleAccent: 'choose one corridor, then confirm each gate',
    intro: 'Urumqi, Turpan and Kashgar sit across a continental region, not a casual city loop. A useful first visit gives each city its own base and treats the Turpan–Kashgar transfer as a full travel day. Official travel advice differs by nationality and can describe identity checks or short-notice restrictions; it does not establish a universal permit rule or guarantee access. Confirm every planned area against your exact travel document and current authority instructions. Do not bypass a restriction or ask anyone to misstate your destination.',
    nights: '8–12 nights; 9 is a workable three-base example',
    coreLogic: 'two eastern bases, then Kashgar',
    watchFirst: 'document category and each route gate',
    motifs: ['Urumqi base', 'Turpan base', 'Transfer day', 'Kashgar base'],
    orientationTitle: 'Choose the bases before adding side trips',
    orientationIntro: 'Keep Urumqi, Turpan and Kashgar as separate city chapters. A northern Xinjiang loop or Pamir road adds different ground transport, weather and access checks; it does not fit as a spare afternoon.',
    chapters: [
      { label: 'DOCUMENTS FIRST', title: 'Read the advice for your own travel documents', text: 'The UK FCDO gives British nationals a specific warning about checks in Xinjiang; Canadian and U.S. advisories give their citizens separate guidance. These notices are not one rule for every passport, Chinese identity document or residence status. Check your own government advice and ask the competent authority and operator to confirm your exact city and site list before payment.' },
      { label: 'URUMQI BASE', title: 'Start with two nights and one named arrival point', text: 'Use Urumqi for the first city block and regional context. Match the pickup to the airport or railway station shown on the actual ticket, and confirm the hotel’s exact address with the operator. Do not assume a station name, terminal or same-city transfer from a search result.' },
      { label: 'TURPAN BASE', title: 'Give the basin its own two-night stop', text: 'A central Turpan base makes a full site day possible without turning every ruin into a separate long transfer. Check the exact arrival station, onward vehicle, attraction access and hotel address together before buying. If transport or site entry cannot be confirmed, keep the day in town.' },
      { label: 'WEATHER WINDOW', title: 'Schedule Jiaohe, Gaochang and Karez by the live forecast', text: 'These exposed places sit outside a simple indoor city loop. In forecast heat, put outdoor walking early or late and keep the middle of the day flexible for a suitable indoor stop. Before fixing the order, check the China Meteorological Administration forecast and the sites’ current notices; no season guarantees that a road or attraction is open.' },
      { label: 'PROTECTED SITES', title: 'Treat Jiaohe and Gaochang as fragile archaeological ground', text: 'Use the designated visitor route and current site instructions; do not climb earthen walls or enter closed sections. The Silk Roads heritage listing helps distinguish Jiaohe and Gaochang as separate archaeological components rather than interchangeable photo stops.' },
      { label: 'TRANSFER DAY', title: 'Turpan to Kashgar is not a same-day sightseeing connection', text: 'Compare the exact travel date in China Railway 12306 and the relevant airline before fixing the hotel night. Rail and air have different stations, airport transfers, identity checks and disruption exposure. Keep the arrival evening unbooked, and do not attach a remote road excursion to an overnight arrival.' },
      { label: 'KASHGAR BASE', title: 'Keep four or five nights for the city and a return decision', text: 'Use Kashgar as a real base for its old city, markets and named institutions, with routes that respect residents and worshippers. Ask before portraits, follow posted photography rules and never photograph security facilities. Confirm whether the trip ends here or needs another long transfer to its departure city.' },
      { label: 'OPTIONAL FRONTIER', title: 'Pamir and northern routes need separate written checks', text: 'Tashkurgan, border areas, protected landscapes and northern Xinjiang branches are separate itineraries. Requirements can vary by exact route and traveler documents; verify permission, checkpoints, road status, weather, overnight stops and the return with the competent authority. If any part is restricted or unconfirmed, omit it—never route around a control.' }
    ],
    decisionsTitle: 'Set the document, base and return plan first',
    decisions: [
      { label: 'TRAVEL DOCUMENT', title: 'Confirm the route for your passport or identity category', text: 'Ask the relevant authority and named operator to confirm each city, protected site and border-area segment for the documents you will actually use. UK, Canadian and U.S. government advice is specific to those travelers; no source here establishes a blanket Xinjiang permit requirement for everyone.' },
      { label: 'BASES', title: 'Use 2 Urumqi + 2 Turpan + 5 Kashgar nights as a planning frame', text: 'This nine-night split is an editorial example, not an operator schedule. If you have fewer nights, remove a whole branch instead of compressing the transfer. Check hotel location against the station or terminal printed on the ticket.' },
      { label: 'RETURN', title: 'Book the exit before spending the last Kashgar day', text: 'Confirm whether the journey ends at Kashgar or needs a long return to Urumqi. If the departure flight is from another city, leave a separate travel day and overnight buffer where needed; do not rely on an unverified same-day rail-to-air connection.' }
    ],
    itineraryKicker: 'THREE OASES / ONE CONTINENTAL LINE',
    itineraryTitle: 'Ten days and nine nights across three named bases',
    itineraryIntro: 'Planning example only: two Urumqi nights, two Turpan nights and five Kashgar nights, with one full transfer day between Turpan and Kashgar. It assumes an exit from Kashgar only if a real ticket supports it; a return to Urumqi adds another travel day and night.',
    itinerary: [
      { label: 'DAYS 1–2 / URUMQI', title: 'Arrive, settle and choose one city chapter', text: 'Use the first night for the transfer from the exact arrival terminal or station and keep the next morning flexible. Pick one museum or city district only after its current access and booking instructions are confirmed.' },
      { label: 'DAYS 3–4 / TURPAN', title: 'Change base, then take one full basin day', text: 'Use a verified rail or road connection, settle in Turpan and group Jiaohe or Gaochang with one water-history stop. In hot forecast conditions, move exterior walking to cooler hours and keep a named indoor fallback.' },
      { label: 'DAY 5 / LONG TRANSFER', title: 'Travel to Kashgar with no timed evening plan', text: 'Buy the actual rail or air leg for the date and check the station or airport on the ticket. Carry required identification and confirmations; arrival delays should cost rest, not a non-refundable excursion.' },
      { label: 'DAYS 6–10 / KASHGAR & EXIT', title: 'Use the city base, then follow the confirmed departure chain', text: 'Keep four full Kashgar days for the old city, markets and institutions. Day 10 is a departure block only if the chosen ticket works; when the exit is Urumqi, add a separate return day and overnight rather than assuming a same-day connection.' }
    ],
    practicalTitle: 'Weather, booking checks and respectful access shape the day',
    practical: [
      { label: 'LIVE CONDITIONS', title: 'Check each city separately, not one regional forecast', text: 'Use the China Meteorological Administration forecast for Urumqi, Turpan and Kashgar close to travel, then check the relevant road and site notices. Heat, wind, rain or a short-notice closure can change an exposed day; keep a city-based alternative.' },
      { label: 'RESERVATIONS', title: 'Confirm ticket, identity and entry terms before each transfer', text: 'Use 12306 for the actual rail date and official site or operator notices for attraction entry. Do not rely on old booking windows, fares, headways or a package seller’s claim that a restricted segment will be available.' },
      { label: 'PEOPLE & SECURITY', title: 'Follow local instructions and keep photography consent-based', text: 'Carry the identification required for your trip, expect the checks described in your own government’s advice and leave security facilities, officials and restricted areas unphotographed. Ask before photographing people or worship; never use a driver or guide to evade a restriction.' }
    ],
    faqs: [
      { question: 'How many nights should I plan for Urumqi, Turpan and Kashgar?', answer: 'Eight to twelve nights is a planning range, not a schedule guarantee. The ten-day example uses nine nights: two in Urumqi, two in Turpan and five in Kashgar, with one full transfer day.' },
      { question: 'Does every foreign traveler need one Xinjiang-wide permit?', answer: 'We could not verify a single blanket rule that applies to every passport, visa, Chinese identity document or route. UK, Canadian and U.S. government advice applies to those travelers and warns about checks or restrictions. Confirm your own document category and exact route with the competent authority; do not assume unrestricted access.' },
      { question: 'Can I combine northern Xinjiang and Kashgar in one week?', answer: 'That would stack long transfers and leave little time at each base. Keep Urumqi–Turpan–Kashgar as one east–west route, or choose a northern landscape loop; add neither a Pamir nor a border-area extension until separately confirmed.' },
      { question: 'How should I handle heat, site entry and photography?', answer: 'Check the live city forecast and official site notices, move outdoor walking to cooler hours during heat and use a confirmed indoor fallback. Follow posted entry rules, ask before portraits and do not photograph security facilities or restricted areas.' }
    ],
    sources: [
      { url: 'https://whc.unesco.org/en/list/1414', label: 'UNESCO World Heritage Centre — Xinjiang Tianshan' },
      { url: 'https://wlt.xinjiang.gov.cn/', label: 'Xinjiang Department of Culture and Tourism — official regional notices' },
      { url: 'https://www.gov.uk/foreign-travel-advice/china/regional-risks', label: 'UK Foreign, Commonwealth and Development Office — regional advice for British travelers' },
      { url: 'https://travel.gc.ca/destinations/china', label: 'Government of Canada — current China travel advice for Canadian travelers' },
      { url: 'https://travel.state.gov/en/international-travel/travel-advisories/china.html', label: 'U.S. Department of State — current China travel advisory for U.S. travelers' },
      { url: 'https://weather.cma.cn/', label: 'China Meteorological Administration — current city forecasts' }
    ],
    image: { path: '/assets/images/china-destination-xinjiang.webp', src: '/assets/images/china-destination-xinjiang.webp', alt: 'Id Kah Mosque and its square in Kashgar, Xinjiang', caption: 'Kashgar / a living religious place within one carefully checked corridor', source: 'https://commons.wikimedia.org/wiki/File:Hëytgah_Mosque,_Kashi_(20230923100109).jpg', sourceTitle: 'File:Hëytgah Mosque, Kashi (20230923100109).jpg', creditTitle: 'Id Kah Mosque, Kashgar', creator: 'N509FZ', sourceDate: '2023-09-23', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', assetType: 'photographic-raster', localSha1: '178f849a979d7e2053877f189f2bae8cfa1b1495', editNote: 'Resized to 960 × 640 WebP, display-cropped; adaptation shared under CC BY-SA 4.0.' },
    dateModified: '2026-10-11',
    sourceNote: 'Travel advice, itinerary sources and the exact image file page were checked on 11 October 2026. The cited travel advisories apply to their named nationalities and documents; they do not establish a universal entry rule or guarantee route access. Recheck the authority, weather, site, transport and ticket notices for your own dates. The photograph was resized and converted to WebP; its responsive display crop may vary.',
    search: { type: 'Continental corridor guide', summary: 'Plan Urumqi, Turpan and Kashgar as separate bases, leave a full transfer day, verify document-specific access and reserve a workable departure chain.', keywords: ['xinjiang', 'urumqi', 'turpan', 'kashgar', 'identity checks', 'corridor itinerary'] }
  },
  {
    slug: 'lhasa-tibetan-plateau',
    name: 'Lhasa & Tibetan Plateau',
    title: 'Lhasa and Tibetan Plateau Guide (2026): Permits and Altitude',
    metaDescription: 'Plan one Lhasa base only after document-specific permission and approved arrangements are confirmed; leave higher plateau travel as a separate decision.',
    ogTitle: 'Lhasa: Confirm Access, Keep One Base, Reassess Before Going Higher',
    themeColor: '#7b3e2e',
    visual: 'altitude-stages',
    eyebrow: 'Tibet / document-specific access, one Lhasa base',
    titleAccent: 'confirm access before you shape the days',
    intro: 'For British travelers, the FCDO currently says a permit and organized tour are required for Tibet; Canada gives its citizens similar advice, and the U.S. State Department describes a special permit for U.S. tourist travel. Those government notices do not settle rules for every passport, Chinese identity document, visa or dual-national case. Confirm your exact document category and route with the competent authority and specialist operator before paying. Lhasa sits around 3,700 meters; this guide offers general travel-safety information, not personal medical advice.',
    nights: '4–7 nights in one Lhasa base',
    coreLogic: 'confirm access, settle, reassess',
    watchFirst: 'your document class and entry chain',
    motifs: ['Confirm access', 'Arrive gently', 'Lhasa base', 'Recheck beyond'],
    orientationTitle: 'Clear the access gate before choosing day trips',
    orientationIntro: 'Plan Lhasa as one base visit first. A higher plateau route is a separate approval, road, weather, overnight and health decision—not a spare afternoon.',
    chapters: [
      { label: 'DOCUMENTS FIRST', title: 'Check the rule for your actual passport and identity', text: 'The UK FCDO, Canadian government and U.S. State Department each publish advice for their own travelers about permission and organized arrangements for Tibet. Do not apply one nationality’s advice to every passport, Chinese identity document, visa or dual-national situation. Ask the relevant authority and specialist operator to confirm your exact Lhasa itinerary in writing; if access is unconfirmed, do not pay non-refundable travel.' },
      { label: 'ARRIVAL CHAIN', title: 'Match pickup and return to the ticketed gateway', text: 'Lhasa Gonggar Airport and Lhasa Railway Station are different arrival points. Confirm the exact terminal or station, the approved pickup and hotel address, and the return transfer before buying. Leave arrival day without a timed palace or long road excursion; the route and document checks are part of the trip.' },
      { label: 'ONE BASE', title: 'Keep the first four to seven nights in Lhasa', text: 'A single hotel in central Chengguan, near the Barkhor area if the operator confirms it is appropriate for your document and route, reduces luggage moves and pickup confusion. Confirm the actual hotel with the operator; do not assume every property can host every traveler category.' },
      { label: 'LIVING OLD CITY', title: 'Treat Barkhor and Jokhang as active religious space', text: 'Follow the site and guide instructions, keep worshippers’ paths clear and ask before taking photographs in monasteries or religious interiors. Choose a short, flexible visit and leave room to return to the hotel rather than turning the pilgrimage circuit into a timed photo loop.' },
      { label: 'POTALA ENTRY', title: 'Check the live official reservation rules after access is approved', text: 'Use the Potala Palace’s official portal to check the visitor rules, identity requirements and reservation availability in effect for your date. The portal could not be retrieved during this review, so this guide makes no claim about booking windows, same-day sales, ticket availability or entry. Once access is confirmed, coordinate any timed reservation with the operator.' },
      { label: 'SEPARATE DAYS', title: 'Do not stack the palace, gardens and monasteries', text: 'Potala Palace involves steps at high elevation. Keep Norbulingka, Sera or Drepung as separate optional blocks, subject to current opening, permission and guide instructions. If a visit closes or feels too demanding, return to the Lhasa base rather than adding another site to preserve a checklist.' },
      { label: 'WEATHER & NOTICES', title: 'Check the day’s forecast and each site notice', text: 'Cold, wind, low humidity and strong ultraviolet exposure can occur at high altitude. Check the China Meteorological Administration forecast and current site or operator notices close to travel; no month guarantees an open road or comfortable outdoor day. Keep an indoor or short city alternative.' },
      { label: 'BEYOND LHASA', title: 'Treat every higher corridor as a new approval and return plan', text: 'Namtso, Shigatse, Everest-area and other remote routes add distance, sleeping elevation, road exposure and possible extra permission. Ask for the exact authorized route, permitted overnight stops, current road/weather status and return chain. Canada’s current advice separately flags Gyirong County after the August 2026 mudslide; that country-specific warning is not a blanket description of the whole region.' }
    ],
    decisionsTitle: 'Confirm the permit, base and recovery plan before booking',
    decisions: [
      { label: 'DOCUMENTS', title: 'Hold payment until your exact access route is confirmed', text: 'Write down the passport or identity document, visa status, Lhasa dates, hotel and any onward corridor. Ask the competent authority and specialist operator which approvals apply and what happens if a permit or site access changes. Do not misstate a route or use an intermediary to evade a restriction.' },
      { label: 'BASE & TRANSFERS', title: 'Choose one approved Chengguan base and both transfers', text: 'Match the first pickup to Lhasa Gonggar Airport or Lhasa Railway Station as printed on the ticket. Confirm the return from the same named gateway or an approved onward route; add a spare night if a remote excursion precedes departure.' },
      { label: 'GENERAL HEALTH', title: 'Make the first days gentle and reassess before going higher', text: 'CDC guidance notes that Lhasa is high altitude and that travelers vary in their response. Keep early activity light, avoid planning a higher sleeping altitude as an automatic next step and seek qualified medical advice for individual risk. This page is general travel information, not medical clearance or treatment advice.' }
    ],
    itineraryKicker: 'ONE BASE / FOUR TO SEVEN NIGHTS',
    itineraryTitle: 'A flexible Lhasa week with the return left visible',
    itineraryIntro: 'This is a city-day grouping, not a safe acclimatization interval or medical clearance. Use four to seven nights in Lhasa; keep higher travel separate until access, weather, road, overnight and personal health questions are reassessed.',
    itinerary: [
      { label: 'DAY 1 / ARRIVE', title: 'Airport or station, approved pickup, one hotel', text: 'Use the exact Lhasa Gonggar Airport or Lhasa Railway Station on the ticket. Confirm the pre-arranged transfer and hotel before departure. Leave the day unbooked for a gentle arrival and operator contact.' },
      { label: 'DAYS 2–3 / OLD CITY', title: 'Short Barkhor and Jokhang blocks', text: 'Visit only on the approved route and follow current worship, entry and photography instructions. Keep each block flexible, leave pathways open and return to the same Lhasa base between outings.' },
      { label: 'DAY 4 / POTALA SLOT', title: 'Use the confirmed reservation, or keep a city day', text: 'If access and the official timed reservation are confirmed, visit the Potala at an unhurried pace. Do not add Norbulingka or a long road excursion to the same block; if the visit is unavailable, choose a suitable city alternative.' },
      { label: 'DAYS 5–7 / OPTIONAL DEPTH', title: 'Separate monastery, garden and higher-route decisions', text: 'Keep Norbulingka, Sera or Drepung as separate optional days with current site and guide checks. Use remaining nights for rest or a city-based alternative. Any Namtso, Shigatse or Everest-area route requires a new access, weather, road, overnight, health and return review.' }
    ],
    practicalTitle: 'Effort, weather and access notices control the next step',
    practical: [
      { label: 'GENERAL ALTITUDE SAFETY', title: 'Do not treat symptoms as a sightseeing hurdle', text: 'CDC travel guidance describes serious warning signs and the need to stop ascent and seek prompt professional help. If someone becomes seriously unwell, follow local emergency and qualified medical instructions; do not push onward to protect a ticket. This is general information, not individualized medical advice.' },
      { label: 'WEATHER & EFFORT', title: 'Use the current forecast for outdoor and road choices', text: 'Check the China Meteorological Administration forecast for Lhasa and any higher destination close to travel. Cold, wind, low humidity and high ultraviolet exposure can coincide. Keep layers and sun protection, and follow current site and operator closure notices.' },
      { label: 'BOOKINGS & RETURN', title: 'Leave a buffer after the final remote night', text: 'Coordinate the Potala reservation, approved guide route and exact return transfer. A road closure, delayed arrival or a changed permit should lead to a shorter Lhasa plan, not an improvised route around a restriction.' }
    ],
    faqs: [
      { question: 'Do the permit rules apply to every passport and identity document?', answer: 'No single nationality-specific advisory settles every case. The UK, Canadian and U.S. governments publish requirements for their own travelers; other passport, Chinese identity, visa and dual-national categories must check with their own government and competent Chinese authority. Confirm the exact itinerary before payment.' },
      { question: 'How many nights should I keep for Lhasa?', answer: 'Four to seven nights is an editorial planning range for one Lhasa base and separate city blocks. It is not a medical threshold or permission to ascend; individual responses and approved routes differ.' },
      { question: 'Does the train make the altitude safe?', answer: 'No. CDC guidance identifies Lhasa as a high-altitude destination; the arrival mode does not remove that exposure. Use general safety guidance and qualified personal medical advice where needed.' },
      { question: 'Can I extend to Namtso or the Everest area independently?', answer: 'Do not assume so. Confirm the exact route, document category, additional permissions, overnight stops, current road and weather status, and return with the competent authority and specialist operator. If any part is restricted or unconfirmed, stay with the approved Lhasa plan.' }
    ],
    sources: [
      { url: 'https://www.gov.uk/foreign-travel-advice/china/regional-risks', label: 'UK Foreign, Commonwealth and Development Office — Tibet and Xinjiang regional advice for British travelers' },
      { url: 'https://travel.gc.ca/destinations/china', label: 'Government of Canada — Tibet and Xinjiang travel advice for Canadian travelers' },
      { url: 'https://travel.state.gov/en/international-travel/travel-advisories/china.html', label: 'U.S. Department of State — current China travel advisory for U.S. travelers' },
      { url: 'https://www.potalapalace.cn/ticket.html', label: 'Potala Palace official website — current ticket reservation system' },
      { url: 'https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/high-altitude-travel-and-altitude-illness.html', label: 'US CDC Yellow Book — high-altitude travel and altitude illness' },
      { url: 'https://weather.cma.cn/', label: 'China Meteorological Administration — current city forecasts' },
      { url: 'https://whc.unesco.org/en/list/707/', label: 'UNESCO World Heritage Centre — Historic Ensemble of the Potala Palace, Lhasa' }
    ],
    sourcesHeading: 'Official sources and original image provenance',
    sourceNote: 'Travel-access advice and general high-altitude guidance were checked on 11 October 2026. Government advisories apply to their named nationals and documents; they do not resolve every traveler category. The official Potala booking portal could not be retrieved in this review, so no booking window, same-day policy, ticket availability or entry is asserted; check the live portal, forecast and operator notices before travel. The original TripDistill diagram is illustrative, not to scale, and is neither a geographic nor navigation map.',
    image: {
      path: '/assets/images/china-lhasa-preparation.svg',
      src: '/assets/images/china-lhasa-preparation.svg',
      alt: 'Original illustrative sequence from access confirmation to arrival, one Lhasa base and an optional higher route; not to scale and not a geographic or navigation map',
      caption: 'Lhasa planning sequence / permission → arrival → one base → reassess before any higher route',
      source: 'https://tripdistill.com/assets/images/china-lhasa-preparation.svg',
      creditTitle: 'Original Lhasa travel-preparation schematic',
      sourceTitle: 'Original Lhasa travel-preparation schematic',
      creator: 'TripDistill Editorial Team',
      license: null,
      rightsStatus: 'Project original; no separate reuse license declared',
      rightsStatusUrl: 'https://tripdistill.com/terms-of-use/',
      attributionTerms: 'No separate reuse license is declared; the credit identifies authorship and asset provenance only.',
      assetType: 'original-planning-diagram',
      localSha1: '002a4aa4986d6691937a65c3b681f328919b6140',
      editNote: 'Original TripDistill planning schematic. Illustrative, not to scale, and not a geographic or navigation map.',
      diagramStages: [
        { title: 'Confirm access', text: 'Match advice and approval to the travel documents and exact route.' },
        { title: 'Arrive and settle', text: 'Use the ticketed gateway and approved pickup; keep day one open.' },
        { title: 'Keep one Lhasa base', text: 'Group city visits around a confirmed hotel and flexible recovery time.' },
        { title: 'Reassess before going higher', text: 'Add no distant corridor until access, weather, road and health checks are complete.' }
      ]
    },
    dateModified: '2026-10-11',
    search: { type: 'Permit and altitude guide', summary: 'Confirm document-specific permission before booking; plan one Lhasa base, a gentle arrival and a separate access and return check for any higher corridor.', keywords: ['lhasa', 'tibet travel permit', 'potala palace reservation', 'high altitude', 'jokhang', 'tibetan plateau access'] }
  },
  ...northPlainsGuides,
  ...eastLowerYangtzeGuides
];
