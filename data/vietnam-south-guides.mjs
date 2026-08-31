import { defineVietnamCluster, image } from './vietnam-guide-builder.mjs';

export const vietnamSouthClusters = [
  defineVietnamCluster({
    slug: 'mui-ne-binh-thuan',
    name: 'Mui Ne & Binh Thuan',
    region: 'Southern Vietnam',
    family: 'dune-wind',
    label: 'South-Central Coast',
    tagline: 'A coast measured in wind, sand, Cham memory and sea-state decisions.',
    hubIntro: 'Mui Ne and the wider Binh Thuan coast are not only a resort strip. Red and white dunes, working fishing villages, Cham towers, forested hills, a lighthouse coast and the remote island of Phu Quy each run on a different clock. Use this hub to choose the landscape that matches your weather window, mobility and appetite for exposure.',
    stay: 'Use Ham Tien or Mui Ne as the first mainland base, then add Phan Thiet, the Ta Cu coast or an island night only when the transfer earns the time.',
    transfer: 'Solve the mainland arrival through Phan Thiet and Muong Man first; keep a weather buffer for dune roads, boat landings and Phu Quy crossings.',
    sources: [
      ['https://www.vietnam.travel/places-to-go/southern-vietnam/binh-thuan', 'Vietnam Tourism — Binh Thuan'],
      ['https://www.vietnam.travel/things-to-do/mui-ne-land-sand-dunes-and-water-sports', 'Vietnam Tourism — Mui Ne: Sand Dunes and Water Sports'],
      ['https://hdnd.binhthuan.gov.vn/UpLoaded/files/nghiquyet/kh%C3%B3a%20XI/KH%2019%20%28cuoi%20nam%202023%29/NQ%2076_HDND-QH%20KDL%20quoc%20gia%20Mui%20Ne.signed.signed.pdf', 'Binh Thuan government — Mui Ne National Tourism Area plan'],
      ['https://phuquy.binhthuan.gov.vn/du-lich', 'Phu Quy Special Zone government — Tourism']
    ],
    guides: [
      {
        slug: 'mui-ne-red-sand-dunes',
        name: 'Mui Ne Red Sand Dunes at Golden Hour',
        motif: 'warm sand clock',
        instrument: 'zine',
        image: image({
          src: '/assets/images/vietnam-mui-ne-red-dunes.webp',
          alt: 'Wind-shaped red sand dunes outside Mui Ne',
          source: 'https://commons.wikimedia.org/wiki/File:RB_20231118_Mui_Ne_Vietnam_126.jpg',
          label: 'Mui Ne sand dunes',
          creator: 'Monster4711',
          license: 'CC BY-SA 3.0'
        }),
        summary: 'A practical sunrise and sunset chapter for reading Mui Ne’s red dunes without turning a fragile landscape into an off-road playground.',
        lead: 'The red dunes are the closest expression of Mui Ne’s wind-and-sand identity, but the useful visit is about timing, footing and restraint. Light changes quickly, loose sand is tiring, and vehicle tracks can erase the very contours visitors came to see.',
        orientation: 'Treat the dunes as a short exposed walk with a cool-hour start, a simple viewpoint and a defined way back. The best photograph is not a reason to cross a plant patch, a steep slip face or a marked vehicle lane.',
        arrival: 'Arrive with water, covered shoulders, secure footwear and a confirmed meeting point. If using a board, quad bike or 4x4, choose the designated operator area before entering the dunes.',
        sequence: 'Cool-hour arrival, low-impact contour reading, one activity choice and a shaded return make a reliable half-day chapter.',
        boundary: 'Do not combine the red dunes with every nearby stop by default; heat, wind and the ride back are part of the route rather than empty space.',
        stages: [
          ['Arrive', 'Reach the agreed entrance while the sand is still manageable, and put water, phone protection and footwear within easy reach.'],
          ['Read', 'Follow existing paths, notice how wind creates ridges and photograph from stable ground rather than climbing every crest.'],
          ['Choose', 'Commit to either a quiet walk or a properly managed sand activity; do not mix moving vehicles with an improvised photo line.'],
          ['Exit', 'Leave before fatigue turns a short descent into a heat problem, and keep the next coastal transfer separate.']
        ],
        risks: [
          ['Surface heat', 'Bare sand and reflected light can become punishing well before the landscape looks extreme.'],
          ['Vehicle conflict', 'ATVs and 4x4s need a clearly separated operating area; never stand in a launch or turning line.'],
          ['Dune erosion', 'Avoid plants, steep edges, litter and new tracks that damage the dune profile.']
        ],
        duration: 'Allow a focused half day, with the exact light window chosen around the current forecast rather than a fixed promise.',
        combine: 'Pair with a nearby fishing-village or Suoi Tien stop only if transport and heat margins remain comfortable.',
        verify: 'Check the current entrance, operator zone, weather, vehicle rules and any local conservation or parking notice.'
      },
      {
        slug: 'bau-trang-white-dunes',
        name: 'Bau Trang White Dunes & Lotus Lake',
        motif: 'lake-between-sand',
        instrument: 'axis',
        image: image({
          src: '/assets/images/vietnam-bau-trang.webp',
          alt: 'White dunes surrounding Bau Trang lake in Binh Thuan',
          source: 'https://commons.wikimedia.org/wiki/File:B%C3%A0u_Tr%E1%BA%AFng_(28917099606).jpg',
          label: 'Bau Trang',
          creator: 'Hưng Hồ Bá',
          license: 'CC BY 2.0'
        }),
        summary: 'Plan the longer coastal run to Bau Trang around the sharp meeting of white dunes, freshwater lakes and a road exposed to sun and wind.',
        lead: 'Bau Trang is a different proposition from Mui Ne’s red dunes: the water, lotus season and long approach give the landscape more depth, but also make a rushed transfer feel wasteful. The route deserves time to look across the lake as well as climb the sand.',
        orientation: 'Use the lake-and-dune divide as the chapter’s ruler. Decide whether the day is for a landscape walk, a quiet shoreline reading or a permitted sand activity before arriving.',
        arrival: 'Start with a reliable vehicle, offline directions and enough water for a remote-feeling stop. Confirm the currently recognized access point because roads, parking and visitor arrangements can change.',
        sequence: 'Mainland departure, lake orientation, dune contour and a weather-aware return form the route.',
        boundary: 'The lake edge, lotus beds and dune vegetation are not interchangeable photo surfaces; keep the landscape readable for the next visitor.',
        stages: [
          ['Approach', 'Leave a generous road buffer and treat the drive as part of the coastal landscape, not a transfer to compress.'],
          ['Orient', 'Read Bau Ong and Bau Ba from a stable lake-side position before choosing a short sand contour.'],
          ['Explore', 'Stay on established access lines, use only approved activity areas and give the water and lotus margin space.'],
          ['Return', 'Turn back with daylight and fuel margin; avoid letting a late photo stop create an unsafe coastal drive.']
        ],
        risks: [
          ['Remote exposure', 'Shade, water and quick roadside support are limited compared with the resort strip.'],
          ['Road condition', 'Sand, rain and construction can change the best approach without notice.'],
          ['Landscape damage', 'Vehicle tracks and trampling around the lake or lotus beds can permanently alter a sensitive edge.']
        ],
        duration: 'Reserve most of a day including the mainland drive, rather than treating Bau Trang as a quick detour.',
        combine: 'It can follow the red dunes only on a private vehicle day with a deliberate return buffer; otherwise keep it as the main landscape chapter.',
        verify: 'Confirm the current route, access point, activity permissions, lake conditions, weather and fuel plan.'
      },
      {
        slug: 'mui-ne-kiteboarding-coast',
        name: 'Mui Ne Kiteboarding Coast',
        motif: 'wind-window board',
        instrument: 'tide',
        image: image({
          src: '/assets/images/vietnam-mui-ne-kite.webp',
          alt: 'Kitesurfers flying colorful kites above Mui Ne beach',
          source: 'https://commons.wikimedia.org/wiki/File:Vietnam,_Mui_Ne,_Kites_on_the_beach.jpg',
          label: 'Kites on the beach at Mui Ne',
          creator: 'Vyacheslav Argenberg',
          license: 'CC BY 4.0'
        }),
        summary: 'A wind-and-water planning guide for choosing a safe lesson, understanding beach launch zones and leaving enough space for changing sea conditions.',
        lead: 'Mui Ne’s wind is a reason to visit, not a guarantee that every beach hour is suitable. Kiteboarding, windsurfing and ordinary swimming occupy different parts of the shore, and a good day begins with the school’s safety assessment rather than a rented board.',
        orientation: 'Read the beach as a working launch area. Watch the flags, instructors and shoreline before deciding whether to take a lesson, observe from land or choose a calmer activity.',
        arrival: 'Book with a school that explains equipment, rescue cover, launch space and beginner limits. Arrive ready for sun, wind-blown sand and a possible weather pause.',
        sequence: 'Shore briefing, land practice, water decision and a conservative exit create the chapter’s logic.',
        boundary: 'Do not treat a clear horizon as proof of safe water; wind direction, current, crowding and instructor judgment outrank a prewritten itinerary.',
        stages: [
          ['Brief', 'Learn the school’s signals, launch corridor, rescue plan and conditions that cancel a session.'],
          ['Prepare', 'Practice on land and check harness, helmet, board and kite before entering the shared water.'],
          ['Ride', 'Stay inside the instructor’s zone and ability envelope, leaving swimming and fishing areas clear.'],
          ['Recover', 'Secure equipment, rehydrate and reassess the sea before adding another water activity.']
        ],
        risks: [
          ['Launch traffic', 'Kites, lines, swimmers and beach users can conflict in a narrow corridor.'],
          ['Wind and current', 'A wind shift or rip current can turn a beginner session into a rescue problem.'],
          ['Sun exposure', 'Long lessons combine heat, reflected light and wind that hides dehydration.']
        ],
        duration: 'Use a half or full day depending on the school’s lesson plan, with no fixed promise that wind will cooperate.',
        combine: 'A land-based fishing-village or Cham heritage visit is easier to combine than another high-risk water session.',
        verify: 'Check the school’s credentials, current beach zoning, wind and sea forecast, rescue equipment and cancellation policy.'
      },
      {
        slug: 'phan-thiet-poshanu-heritage',
        name: 'Phan Thiet Fishing Coast & Po Sah Inu Heritage',
        motif: 'harbour-to-tower seam',
        instrument: 'docket',
        image: image({
          src: '/assets/images/vietnam-phan-thiet-heritage.webp',
          alt: 'Po Sah Inu Cham towers near Phan Thiet in Binh Thuan',
          source: 'https://commons.wikimedia.org/wiki/File:Th%C3%A1p_Po_Sah_Inu,_Phan_Thi%E1%BA%BFt,_B%C3%ACnh_Thu%E1%BA%ADn.JPG',
          label: 'Po Sah Inu Cham Towers',
          creator: 'Dongson*vmvn at Vietnamese Wikipedia',
          license: 'CC BY-SA 3.0'
        }),
        summary: 'Connect Phan Thiet’s working fishing coast with Po Sah Inu’s Cham architecture through a respectful heritage route with two distinct visitor contracts.',
        lead: 'The fishing village and the Cham towers should not be flattened into a generic sightseeing loop. One is a working coastal livelihood; the other is a sacred archaeological landscape whose meaning extends beyond its masonry.',
        orientation: 'Begin by deciding whether the morning belongs to harbor life or heritage interpretation. Keep the two settings separate enough that neither becomes background decoration for the other.',
        arrival: 'Use a named pier, market or tower entrance and confirm local access before setting out. Carry modest clothing for the towers and avoid entering working areas without invitation.',
        sequence: 'Harbor observation, transition through Phan Thiet, tower reading and a quiet meal complete the cultural chapter.',
        boundary: 'Do not photograph people, prayer or restricted structures as if they were staged exhibits; the route is strongest when visitors leave room for local life.',
        stages: [
          ['Harbor', 'Observe from public edges, buy only through clear transactions and keep loading paths open.'],
          ['Transition', 'Use the city transfer to reset the context instead of narrating the tower as an extension of the market.'],
          ['Heritage', 'Read Po Sah Inu through its Cham history, architecture and living religious meaning.'],
          ['Close', 'Choose a locally rooted meal or museum stop, then return before a late coastal transfer becomes rushed.']
        ],
        risks: [
          ['Working shoreline', 'Boats, crates and motorbikes move for livelihood rather than visitor convenience.'],
          ['Sacred threshold', 'Dress, photography and access rules can change around prayer or ceremonies.'],
          ['Heat gap', 'The exposed route between harbor and tower has little shade at the wrong hour.']
        ],
        duration: 'Allow a half to full day, with extra time if a local festival or heritage program is active.',
        combine: 'It pairs well with one dune chapter, but adding the remote Phu Quy transfer would dilute the cultural route.',
        verify: 'Check tower access, ceremony notices, harbor conditions, transport, weather and current heritage guidance.'
      },
      {
        slug: 'ta-cu-ke-ga-coast',
        name: 'Ta Cu Mountain & Ke Ga Coast',
        motif: 'forest-to-lighthouse rise',
        instrument: 'contour',
        image: image({
          src: '/assets/images/vietnam-ta-cu-ke-ga.webp',
          alt: 'Ke Ga Lighthouse rising from the coast near Phan Thiet',
          source: 'https://commons.wikimedia.org/wiki/File:H%E1%BA%A3i_%C4%91%C4%83ng_K%C3%AA_G%C3%A0.jpg',
          label: 'Ke Ga Lighthouse',
          creator: 'Bùi Thụy Đào Nguyên',
          license: 'CC BY-SA 4.0'
        }),
        summary: 'A mainland-to-coast chapter that separates Ta Cu’s forested religious ascent from the tide-dependent Kê Gà lighthouse landing.',
        lead: 'Ta Cu and Kê Gà share a southern Binh Thuan direction but not the same physical problem. One asks for walking or a managed mountain ascent; the other depends on rocky shore, boat access and sea state.',
        orientation: 'Choose the mountain or lighthouse as the day’s anchor, then make the second stop conditional. A clear-looking sea does not guarantee a safe landing on Hòn Bà.',
        arrival: 'Confirm the current Ta Cu entrance and cable-car or trail options, then ask the Kê Gà operator about tide, landing and lighthouse access before committing.',
        sequence: 'Forest elevation, a deliberate recovery, coastal approach and a tide-aware return keep the geography legible.',
        boundary: 'Never turn a closed trail, lighthouse or rocky landing into a challenge; a changed viewpoint is better than an avoidable rescue.',
        stages: [
          ['Climb', 'Use the official mountain access and match the route to fitness, heat and footwear.'],
          ['Reset', 'Recover in shade before driving toward the exposed Kê Gà coast.'],
          ['Land', 'Board only through a current authorized arrangement and follow the landing crew.'],
          ['Return', 'Leave the rocks and road with enough daylight, tide and sea margin for the mainland journey.']
        ],
        risks: [
          ['Steep footing', 'Forest steps, wet rock and heat can exceed the apparent distance.'],
          ['Tide and surf', 'Kê Gà access is a marine decision, not a guaranteed walk across the water.'],
          ['Closure drift', 'Cable cars, trails and lighthouse interiors may be unavailable during works or weather.']
        ],
        duration: 'Plan a full mainland day and keep an additional buffer if the lighthouse landing is important.',
        combine: 'A Phan Thiet heritage stop can replace the lighthouse when the sea is unsuitable; do not stack every coastal chapter.',
        verify: 'Check Ta Cu operations, trail status, Kê Gà landing rules, tide, sea forecast and return transport.'
      },
      {
        slug: 'phu-quy-island',
        name: 'Phu Quy Island: A Remote Island Rhythm',
        motif: 'island departure file',
        instrument: 'expedition',
        image: image({
          src: '/assets/images/vietnam-phu-quy.webp',
          alt: 'Coastal village and turquoise sea seen from the hills of Phu Quy Island',
          source: 'https://commons.wikimedia.org/wiki/File:Chualinhsonphuquy.jpg',
          label: 'Linh Son Pagoda on Phu Quy',
          creator: 'Thái Nhi',
          license: 'Public domain'
        }),
        summary: 'Treat Phu Quy as a remote island stay with its own sea crossing, local shrines, fishing life and limited-service buffer rather than a quick mainland excursion.',
        lead: 'Phu Quy rewards slow movement, but the island’s appeal is inseparable from the crossing that reaches it. Ferry availability, rough seas, harbor procedures and the return date all need to be solved before choosing viewpoints.',
        orientation: 'Plan around one island loop and a few respectful stops: coast, fishing community, shrine and a quiet landscape. Leave room for weather to rewrite the order.',
        arrival: 'Book through a current authorized operator, carry identification and protect against seasickness. Keep one uncommitted day in the wider itinerary in case the crossing moves.',
        sequence: 'Mainland port, sea crossing, island road loop, cultural pause and return buffer define the chapter.',
        boundary: 'The island is a working community and a strategic maritime place; do not trespass, photograph restricted facilities or treat residents as scenery.',
        stages: [
          ['Prepare', 'Confirm vessel, port, check-in, baggage rules and a backup plan before reaching Phan Thiet.'],
          ['Cross', 'Follow crew instructions, use the supplied safety equipment and keep belongings secured on the vessel.'],
          ['Settle', 'Explore by legal road access, visit shrines and fishing edges with consent, and buy from local businesses.'],
          ['Return', 'Protect the final mainland connection with a generous sea and road buffer.']
        ],
        risks: [
          ['Sea state', 'Wind and waves can delay or cancel a crossing with little value in arguing against the forecast.'],
          ['Limited support', 'Remote island services, fuel, medicine and accommodation capacity are narrower than on the mainland.'],
          ['Maritime privacy', 'Ports, vessels and security facilities may have photography or access restrictions.']
        ],
        duration: 'Give the island several nights when possible, plus an unused buffer before any flight or fixed mainland commitment.',
        combine: 'Combine with a mainland heritage or coast chapter only before departure or after return, never as a same-day ferry add-on.',
        verify: 'Check the operator’s current schedule, port instructions, weather, accommodation, local transport and island notices.'
      }
    ]
  }),

  defineVietnamCluster({
    slug: 'ho-chi-minh-city',
    name: 'Ho Chi Minh City',
    region: 'Southern Vietnam',
    family: 'scooter-grid',
    label: 'Urban South',
    tagline: 'A living grid of colonial memory, market streets, river edges and motorbike flow.',
    hubIntro: 'Ho Chi Minh City is easiest to understand as several overlapping movement systems: the compact District 1 core, Chợ Lớn’s wholesale and worship lanes, the new Thủ Thiêm–Thảo Điền riverfront, the distant Củ Chi tunnels, Cần Giờ’s mangrove reserve and the Saigon River itself. Choose a route by street density, history, water or ecology instead of trying to clear every landmark.',
    stay: 'District 1 works for the first walk; District 3, Bình Thạnh or Thảo Điền can reduce repeated crossings when the itinerary leans toward museums, riverfronts or the east bank.',
    transfer: 'Use walking only inside a deliberate pocket, then connect pockets by official transit or reputable ride-hailing; motorbike traffic, rain and construction make map distance deceptive.',
    sources: [
      ['https://vietnam.travel/places-to-go/southern-vietnam/ho-chi-minh-city', 'Vietnam Tourism — Ho Chi Minh City'],
      ['https://diadaocuchi.com.vn/', 'Cu Chi Historic Relics & Tunnel Complex'],
      ['https://www.unesco.org/en/mab/can-gio-mangrove', 'UNESCO — Can Gio Mangrove Biosphere Reserve']
    ],
    guides: [
      {
        slug: 'district-1-colonial-core',
        name: 'District 1 Colonial Core & Market Grid',
        motif: 'civic-to-market ruler',
        instrument: 'axis',
        image: image({
          src: '/assets/images/vietnam-hcmc-district-1.webp',
          alt: 'Ho Chi Minh City Hall in the District 1 civic core',
          source: 'https://commons.wikimedia.org/wiki/File:Ayuntamiento,_Ciudad_Ho_Chi_Minh,_Vietnam,_2013-08-14,_DD_08.JPG',
          label: 'City Hall, Ho Chi Minh City',
          creator: 'Diego Delso',
          license: 'CC BY-SA 3.0'
        }),
        summary: 'Build a readable first city walk from the civic core to the market grid, with heat, traffic and changing heritage access treated as part of the plan.',
        lead: 'District 1 rewards a narrow route more than an exhaustive landmark list. Nguyen Hue, Dong Khoi, the Central Post Office, the cathedral precinct, Independence Palace and Ben Thanh occupy a compact map but very different thresholds.',
        orientation: 'Choose one civic axis and one market finish. The day becomes more useful when a museum or interior is selected in advance rather than added after every facade.',
        arrival: 'Set a precise drop-off near a public landmark and carry water, a small bag and a plan for crossing wide roads safely.',
        sequence: 'Civic orientation, one interior, shaded pause, market edge and a transit-aware exit make the core coherent.',
        boundary: 'A busy street is not a pedestrian plaza; wait for a safe crossing gap and do not use worship spaces or residents’ corridors as shortcuts.',
        stages: [
          ['Start', 'Use the riverfront or a civic building to establish direction before entering the denser streets.'],
          ['Read', 'Give one museum, palace or architectural interior enough time to explain the city’s layered past.'],
          ['Taste', 'Finish the walking section at a market or small food stop without blocking vendors or turning transactions into a spectacle.'],
          ['Exit', 'Choose a known station or pickup point and allow for rain, traffic and the final road crossing.']
        ],
        risks: [
          ['Motorbike flow', 'Large intersections require patience and a predictable crossing rather than sudden movement.'],
          ['Heat and rain', 'The central grid has exposed stretches and quick downpours.'],
          ['Opening changes', 'Renovation, ceremony and security arrangements can change access to major landmarks.']
        ],
        duration: 'A focused half day works; a full day needs one meaningful interior and deliberate rest rather than more pins.',
        combine: 'Pair with a separate evening food route or river ride, not Cholon and Củ Chi on the same compressed block.',
        verify: 'Check current landmark opening, renovation status, rain forecast, pedestrian access and return transport.'
      },
      {
        slug: 'cho-lon-binh-tay',
        name: 'Cholon, Binh Tay Market & Temple Quarter',
        motif: 'working-lane notebook',
        instrument: 'zine',
        image: image({
          src: '/assets/images/vietnam-hcmc-cho-lon.webp',
          alt: 'Binh Tay Market in Ho Chi Minh City Cholon',
          source: 'https://commons.wikimedia.org/wiki/File:Binh_Tay_Market,_Ho_Chi_Minh_City_(51208103858).jpg',
          label: 'Binh Tay Market',
          creator: 'Alexander Synaptic',
          license: 'CC BY-SA 2.0'
        }),
        summary: 'Explore Cholon through wholesale commerce, Chinese-Vietnamese temples, assembly halls and food lanes without flattening a lived neighborhood into a photo backdrop.',
        lead: 'Cholon is a working cultural quarter. Binh Tay Market, Thien Hau Temple, Quan Am Pagoda, assembly halls and craft streets each carry their own community rhythm, and the strongest visit leaves room for worship and trade.',
        orientation: 'Use the market as a geographic anchor, then select one or two temples or halls. Narrow lanes are more rewarding when read slowly than when crossed as a checklist.',
        arrival: 'Travel by a reliable taxi or ride-hailing service to a named market entrance. Keep bags close and avoid arriving with a group so large that it blocks the lane.',
        sequence: 'Market edge, temple threshold, craft street, food pause and a planned return form the neighborhood loop.',
        boundary: 'Do not photograph altars, worshippers or vendors without consent. Respect shoes, hats, dress and incense rules at each religious site.',
        stages: [
          ['Market', 'Read the wholesale layout and let traders work; buy only where the transaction is clear.'],
          ['Threshold', 'Pause outside each temple or hall to identify the access rules before entering.'],
          ['Craft', 'Follow one material or food street and ask before photographing people at work.'],
          ['Return', 'Leave through a known main road before fatigue and traffic make the narrow lanes difficult.']
        ],
        risks: [
          ['Crowded lanes', 'Carts, scooters and deliveries have priority in working market streets.'],
          ['Incense and heat', 'Temple interiors can be smoky, hot and crowded during worship.'],
          ['Privacy', 'Residences, family businesses and religious practice are not automatically public content.']
        ],
        duration: 'Allow a half day; a longer visit should add a specific craft, food or religious-history question.',
        combine: 'It pairs with a District 5 food chapter, but not with a distant suburban attraction on the same morning.',
        verify: 'Check current market access, temple opening, festival congestion, dress expectations and safe pickup points.'
      },
      {
        slug: 'thu-thiem-thao-dien',
        name: 'Thu Thiem–Thao Dien Riverfront',
        motif: 'two-bank urban seam',
        instrument: 'ribbon',
        image: image({
          src: '/assets/images/vietnam-hcmc-thao-dien.webp',
          alt: 'Thao Dien Station on Ho Chi Minh City Metro Line 1',
          source: 'https://commons.wikimedia.org/wiki/File:Thao_Dien_Station_(MRT_1),_Qu%E1%BB%91c_H%C6%B0%C6%A1ng,_Th%E1%BA%A3o_%C4%90i%E1%BB%81n,_H%E1%BB%93_Ch%C3%AD_Minh_-_54690900645.jpg',
          label: 'Thao Dien Station',
          creator: 'ekkun',
          license: 'CC BY-SA 4.0'
        }),
        summary: 'Compare Thu Thiem’s developing riverfront with Thao Dien’s established neighborhood life through a two-bank route that respects construction and resident space.',
        lead: 'The east side of the Saigon River is a city in transition. New parks and skyline views sit beside active construction, while Thao Dien combines transport, apartments, small businesses and river-facing streets.',
        orientation: 'Choose a water, skyline or neighborhood question before leaving District 1. This route is about urban change, not collecting every new building.',
        arrival: 'Use a current metro, waterbus or road connection and check the exact exit. The final walk may cross unfinished sidewalks, bridges or construction diversions.',
        sequence: 'One bank, a safe crossing, one neighborhood pocket and a sunset-ready exit provide enough contrast.',
        boundary: 'Construction fences and residential courtyards are boundaries, not scenic shortcuts. Keep cameras away from private balconies and active work.',
        stages: [
          ['Choose', 'Confirm the day’s river crossing and one destination on each bank before setting out.'],
          ['Observe', 'Read the skyline, flood edge and public-space design from marked routes.'],
          ['Settle', 'Use one Thao Dien street or market pocket for food and neighborhood texture.'],
          ['Exit', 'Return through a known station, pier or pickup point before evening traffic peaks.']
        ],
        risks: [
          ['Construction drift', 'Sidewalks, station approaches and river parks can change faster than guide maps.'],
          ['Crossing dependency', 'A missed boat or crowded road connection can erase the return buffer.'],
          ['Resident privacy', 'Popular streets still contain homes, schools and ordinary work.']
        ],
        duration: 'Plan a half day to full day depending on whether the crossing is by road or water.',
        combine: 'Pair with the Saigon River Waterbus chapter only when the boat schedule is verified; keep District 1 heritage separate.',
        verify: 'Check current metro or waterbus operation, construction diversions, weather and the chosen riverfront opening.'
      },
      {
        slug: 'cu-chi-tunnels',
        name: 'Cu Chi Tunnels: Ben Duoc & Ben Dinh',
        motif: 'war-memory section',
        instrument: 'section',
        image: image({
          src: '/assets/images/vietnam-hcmc-cu-chi.webp',
          alt: 'Small camouflaged entrance to the Cu Chi tunnel system',
          source: 'https://commons.wikimedia.org/wiki/File:20190925_Cu_Chi_tunnel_entrance.jpg',
          label: 'Cu Chi tunnel entrance',
          creator: 'Balon Greyjoy',
          license: 'CC0'
        }),
        summary: 'Plan a historically sensitive visit to the two Cu Chi sites with realistic travel time, confined-space choices and respect for memorial ground.',
        lead: 'Ben Duoc and Ben Dinh are preserved historical sites, not interchangeable attractions. Their interpretation, distance from central Ho Chi Minh City and visitor programming should be checked before choosing one or both.',
        orientation: 'Read the official site’s history first, then decide whether your visit is primarily for underground engineering, memorial interpretation or both.',
        arrival: 'Use the current official bus, private-car or organized-tour guidance and confirm the exact site name. Traffic on the northwest approach can be unpredictable.',
        sequence: 'Travel buffer, guided interpretation, optional tunnel section and a quiet exit keep the chapter from becoming a rushed war-tour package.',
        boundary: 'Follow guides and barriers, skip any activity that feels unsafe or exploitative and do not turn weapons displays, memorials or wartime suffering into entertainment.',
        stages: [
          ['Approach', 'Leave the city with a generous road margin and carry water for the exposed grounds.'],
          ['Interpret', 'Listen to the official historical account and compare the site’s preserved spaces with the surrounding forest.'],
          ['Choose', 'Enter only tunnel sections that match your body, breathing and comfort; there is no virtue in forcing a crawl.'],
          ['Reflect', 'Leave through the official route and allow time to process the site before returning to city nightlife.']
        ],
        risks: [
          ['Confined space', 'Low ceilings, heat and darkness can trigger panic or breathing problems.'],
          ['Traffic', 'A late return from the outer district can take substantially longer than the outbound trip.'],
          ['Historical sensitivity', 'Commercialized attractions can obscure the human cost of the site.']
        ],
        duration: 'Reserve a full day including road transfer, even if the guided visit itself is shorter.',
        combine: 'It can pair with a nearby rural or river stop only with private transport; do not add District 1 and Cần Giờ by default.',
        verify: 'Check the official site, current fees and hours, the chosen Ben Dinh or Ben Duoc access, traffic and tunnel conditions.'
      },
      {
        slug: 'can-gio-mangroves',
        name: 'Can Gio Mangrove Biosphere Reserve',
        motif: 'city-to-estuary transect',
        instrument: 'transect',
        image: image({
          src: '/assets/images/vietnam-hcmc-can-gio.webp',
          alt: 'Mangrove roots and wetland forest in Can Gio',
          source: 'https://commons.wikimedia.org/wiki/File:Can_Gio_mangrove_forest.jpg',
          label: 'Can Gio mangrove forest',
          creator: 'Tho nau',
          license: 'CC BY-SA 3.0'
        }),
        summary: 'Use Can Gio to move from metropolitan edge to mangrove, wetland and coastal habitat through a low-impact nature day with tide and weather awareness.',
        lead: 'Can Gio is a UNESCO biosphere reserve south-east of the city, where mangrove, mudflat, seagrass and working communities meet. The point is not to chase a single animal but to understand the estuary that protects the city.',
        orientation: 'Choose an authorized forest, boardwalk or boat experience and learn which zone you are entering. Keep the journey slow enough to notice salinity, roots, birds and tidal change.',
        arrival: 'Leave central Ho Chi Minh City with a full road and ferry buffer. Confirm the current route to the selected reserve or Vam Sat facility before departure.',
        sequence: 'Mainland edge, mangrove interpretation, quiet wildlife observation and an early return make the day resilient.',
        boundary: 'Core and buffer habitats are not open playgrounds. Stay on marked routes, do not feed wildlife and take all waste back out.',
        stages: [
          ['Cross', 'Treat the road and any ferry as part of the coastal transition, with water and sun protection ready.'],
          ['Learn', 'Read the reserve’s zonation and let the guide explain how mangroves support fisheries and storm protection.'],
          ['Observe', 'Watch from the boat or boardwalk without calling animals closer or disturbing nests.'],
          ['Return', 'Leave before weather or late traffic turns the outer-district journey into a night transfer.']
        ],
        risks: [
          ['Tide and rain', 'Water level and thunderstorms can alter boat routes, boardwalks and visibility.'],
          ['Wildlife contact', 'Monkeys, crocodiles and birds should never be fed, teased or approached.'],
          ['Distance', 'Medical, fuel and transport support are thinner outside the urban core.']
        ],
        duration: 'Use a full day with a deliberate return buffer; the reserve is not a quick city-side park.',
        combine: 'Pair with a single coastal market or local meal only if the official transport sequence remains intact.',
        verify: 'Check UNESCO-area visitor rules, current reserve access, boat conditions, tide, rain and return transport.'
      },
      {
        slug: 'saigon-river-waterbus',
        name: 'Saigon River Waterbus & Thanh Da',
        motif: 'public-waterline chart',
        instrument: 'chart',
        image: image({
          src: '/assets/images/vietnam-hcmc-saigon-river.webp',
          alt: 'Fishermen working on the Saigon River beside Ho Chi Minh City',
          source: 'https://commons.wikimedia.org/wiki/File:Pescadores_en_el_r%C3%ADo_Saig%C3%B3n,_Ciudad_Ho_Chi_Minh,_Vietnam,_2013-08-14,_DD_03.JPG',
          label: 'Fishermen on the Saigon River',
          creator: 'Diego Delso',
          license: 'CC BY-SA 3.0'
        }),
        summary: 'Turn the Saigon River Waterbus into a practical city chapter: named piers, public transport, Thanh Da’s quieter edge and a weather-aware return.',
        lead: 'The river is infrastructure as much as scenery. A waterbus ride shows port edges, skyline shifts and residential banks while connecting public spaces that feel far apart on the road.',
        orientation: 'Start with the official pier map and choose one onward stop, such as Thanh Da or a northern terminal. A round trip is not automatically the best use of the day.',
        arrival: 'Use the official booking or station process and arrive with a ticket, light luggage and an alternative road plan in case weather changes service.',
        sequence: 'Bach Dang departure, river reading, one bank-side walk and a booked return create a clear waterline.',
        boundary: 'Remain seated or within marked areas, follow crew instructions and remember that the boat carries passengers rather than serving as a private photo platform.',
        stages: [
          ['Board', 'Confirm pier, direction, ticket and final return before entering the boat.'],
          ['Read', 'Use the crossing to compare port, skyline, flood edge and residential riverbank rather than photographing continuously.'],
          ['Walk', 'Explore one named stop with respect for residents, restaurants and working piers.'],
          ['Return', 'Reach the pier early and use the road fallback if the final boat is full or suspended.']
        ],
        risks: [
          ['Schedule drift', 'Waterbus times, capacity and service can change with weather or operations.'],
          ['River edge', 'Wake, slippery surfaces and vessel traffic make leaning over rails unsafe.'],
          ['Last connection', 'A missed return can create a long road transfer across a congested city.']
        ],
        duration: 'Allow half a day, expanding to a full day only when the chosen bank-side stop has its own purpose.',
        combine: 'It pairs with Thao Dien–Thu Thiem, but keep a separate ticket and weather buffer for both.',
        verify: 'Check the official waterbus route, pier, ticket availability, weather cancellation and last return before boarding.'
      }
    ]
  }),

  defineVietnamCluster({
    slug: 'mekong-delta',
    name: 'Mekong Delta',
    region: 'Southern Vietnam',
    family: 'delta-ledger',
    label: 'River and Garden South',
    tagline: 'A living ledger of markets, islands, farms, wetlands and river crossings.',
    hubIntro: 'The Mekong Delta is best planned as a chain of working water landscapes rather than one interchangeable boat tour. Cần Thơ’s dawn commerce, Bến Tre’s coconut islets, Mỹ Tho’s lower-river gateway, Châu Đốc’s border culture, Sa Đéc’s flower and literary memory, and Cà Mau’s freshwater-to-mangrove edge each justify a different stay and transfer.',
    stay: 'Use Cần Thơ for a first river base, then add Bến Tre, Châu Đốc, Sa Đéc or Cà Mau when the slower route and overnight stay are more valuable than a checklist day trip.',
    transfer: 'Combine long-distance bus or road legs with local ferries and licensed boats; water level, early departures and small bridges make the final kilometer as important as the highway.',
    sources: [
      ['https://vietnam.travel/things-to-do/4-memorable-days-mekong-delta', 'Vietnam Tourism — 4 Memorable Days in the Mekong Delta'],
      ['https://vietnam.travel/places-to-go/southern-vietnam/chau-doc', 'Vietnam Tourism — Chau Doc'],
      ['https://canthotourism.vn/en/chocairang', 'Can Tho Tourism — Cai Rang Floating Market'],
      ['https://dulich.dongthap.gov.vn/en/', 'Dong Thap Tourism — Sa Dec'],
      ['https://english.camau.gov.vn/destinations/u-minh-ha-national-park-287845', 'Ca Mau Government — U Minh Ha National Park']
    ],
    guides: [
      {
        slug: 'can-tho-cai-rang',
        name: 'Can Tho Dawn Market & River Islets',
        motif: 'working-water ledger',
        instrument: 'ledger',
        image: image({
          src: '/assets/images/vietnam-can-tho-cai-rang.webp',
          alt: 'Boats trading fruit at Cai Rang Floating Market in Can Tho',
          source: 'https://commons.wikimedia.org/wiki/File:Floating_market_Can_Tho.jpg',
          label: 'Floating market in Can Tho',
          creator: 'Andre Hospers',
          license: 'CC BY 4.0'
        }),
        summary: 'Plan Cần Thơ around the market’s working hours, a safe boat choice and one quieter islet or garden rather than a dawn photo sprint.',
        lead: 'Cái Răng is a living wholesale market whose boats, produce and breakfast traffic predate tourism. A thoughtful visit watches how commerce works, then moves toward the islets where canals, fruit gardens and family businesses continue the river story.',
        orientation: 'Treat the market as a working appointment, not a stage. Choose whether your second chapter is Con Son, a fruit garden, a noodle workshop or a riverside neighborhood.',
        arrival: 'Arrange a licensed boat or a clearly identified public landing, and carry dry protection for phones and documents. Early departure and low light make meeting points important.',
        sequence: 'Dawn water, market reading, islet mobility and a mainland reset define the route.',
        boundary: 'Do not board private trader boats, touch produce without asking or block a vessel’s working path for a photograph.',
        stages: [
          ['Launch', 'Confirm boat, pier, life jacket and return arrangement before the market is fully active.'],
          ['Observe', 'Read the hanging produce poles, boat roles and breakfast trade without interrupting sellers.'],
          ['Land', 'Cycle or walk one islet lane, choosing a family business or garden with transparent access.'],
          ['Reset', 'Return to town for shade, food and a slower interpretation of what the river morning showed.']
        ],
        risks: [
          ['Early fatigue', 'The useful market window begins before many city services are fully open.'],
          ['Boat movement', 'Wake, slippery decks and crowded landings require life jackets and steady footing.'],
          ['Commercial privacy', 'Trading families should not be treated as unpaid performers.']
        ],
        duration: 'Protect a full morning; add an afternoon only when the chosen islet or community activity is confirmed.',
        combine: 'It can anchor a two-day Cần Thơ stay and connect to a separate Binh Thuy or Con Son chapter.',
        verify: 'Check the current market landing, boat operator, water conditions, early transport, weather and islet access.'
      },
      {
        slug: 'ben-tre-coconut-islets',
        name: 'Ben Tre Coconut Islets & Canal Life',
        motif: 'coconut-and-canal field',
        instrument: 'field',
        image: image({
          src: '/assets/images/vietnam-ben-tre-river.webp',
          alt: 'The Ben Tre River viewed from Ben Tre Bridge',
          source: 'https://commons.wikimedia.org/wiki/File:Ben_Tre_River.jpg',
          label: 'Ben Tre River',
          creator: 'Magicknight94',
          license: 'CC BY-SA 4.0'
        }),
        summary: 'Use Bến Tre’s coconut groves, small ferries, cycling lanes and family workshops to plan a slower Delta stay with real local participation.',
        lead: 'Bến Tre is defined by water crossings and coconut economies. Its best route makes space for a shaded bicycle ride, a transparent craft visit and a family-run meal instead of promising a generic sampan loop.',
        orientation: 'Choose one island or canal system and understand how the ferry, bicycle and boat connect. The province’s richness is in the transitions between them.',
        arrival: 'From Ho Chi Minh City, plan a road journey with room for traffic. Confirm the homestay, ferry landing and workshop access before leaving the main road.',
        sequence: 'Road arrival, island crossing, coconut or brick craft, village lane and homestay meal create the chapter.',
        boundary: 'A farm or home is not an open museum. Ask before entering, photographing workers or handling tools and products.',
        stages: [
          ['Cross', 'Use the correct ferry or boat and keep bicycle, bags and passengers balanced.'],
          ['Cycle', 'Follow small lanes at local speed, yielding to residents, livestock and working vehicles.'],
          ['Learn', 'Choose one coconut, brick or food workshop that explains its process and pays its hosts fairly.'],
          ['Stay', 'Use a hosted meal or homestay as a conversation, not a staged cultural performance.']
        ],
        risks: [
          ['Small crossings', 'Ferries, bridges and narrow lanes have different capacity and weather limits.'],
          ['Heat and rain', 'Shade is valuable, but tropical showers can make unsealed lanes slippery.'],
          ['Extractive visits', 'Unpaid access, forced demonstrations and intrusive photos undermine the community route.']
        ],
        duration: 'Give Bến Tre at least an overnight when possible; a day trip should select one coherent island loop.',
        combine: 'It can connect onward to Tra Vinh or Cần Thơ, but not while also trying to cover Mỹ Tho in a single rushed day.',
        verify: 'Check current road, ferry and boat arrangements, hosted access, weather, bicycle condition and accommodation.'
      },
      {
        slug: 'my-tho-thoi-son-island',
        name: 'My Tho–Thoi Son Islets',
        motif: 'lower-river entry ribbon',
        instrument: 'ribbon',
        image: image({
          src: '/assets/images/vietnam-my-tho-thoi-son.webp',
          alt: 'Thoi Son Island in the Mekong Delta near My Tho',
          source: 'https://commons.wikimedia.org/wiki/File:Cu-lao-thoi-son.jpg',
          label: 'Thoi Son Island',
          creator: 'Trainghiemdi',
          license: 'CC BY-SA 4.0'
        }),
        summary: 'A lower-Mekong gateway route for Thới Sơn’s gardens, canals and craft culture, designed to remain distinct from Bến Tre’s longer coconut-islet stay.',
        lead: 'Mỹ Tho is often sold as a fast Delta introduction. The more useful version explains the pier-to-islet transition, chooses one garden or craft story and leaves enough time for the return rather than stacking packaged stops.',
        orientation: 'Use the river port as the entry point, then decide whether the day’s focus is orchard ecology, small-boat movement or local craft.',
        arrival: 'Confirm the departure pier, boat operator and group size. Road traffic from Ho Chi Minh City can shift the usable island window.',
        sequence: 'Mainland port, large-boat crossing, quiet sampan or garden segment and a deliberate mainland exit form the route.',
        boundary: 'Do not pressure performers, handle animals for photographs or enter garden and home spaces without invitation.',
        stages: [
          ['Port', 'Arrive with enough road margin to understand the boat assignment rather than boarding in a rush.'],
          ['Cross', 'Use the larger boat as orientation, keeping life jackets and belongings secure.'],
          ['Islet', 'Select one garden, workshop or canal section and let the host set the pace.'],
          ['Exit', 'Return before the group’s final transfer becomes a road gamble back to the city.']
        ],
        risks: [
          ['Package congestion', 'Multiple groups can converge on the same pier, workshop or canal.'],
          ['Water safety', 'Small sampans have low freeboard and require calm, attentive movement.'],
          ['Visitor fatigue', 'Too many staged stops leave no time to understand the landscape.']
        ],
        duration: 'Reserve a full day from Ho Chi Minh City, or stay near Mỹ Tho to make the river morning less hurried.',
        combine: 'It pairs with a separate My Tho food or waterfront walk; Bến Tre should be treated as a different overnight chapter.',
        verify: 'Check pier, operator, boat capacity, weather, road traffic and the exact inclusions of any packaged tour.'
      },
      {
        slug: 'chau-doc-sam-tra-su',
        name: 'Chau Doc Border River, Sam Mountain & Tra Su',
        motif: 'border-wetland atlas',
        instrument: 'atlas',
        image: image({
          src: '/assets/images/vietnam-chau-doc-floating-village.webp',
          alt: 'Floating village on the Hau River near Chau Doc',
          source: 'https://commons.wikimedia.org/wiki/File:Chau_Doc_Floating_Village.jpg',
          label: 'Chau Doc Floating Village',
          creator: 'Christophe95',
          license: 'CC BY-SA 4.0'
        }),
        summary: 'Connect Châu Đốc’s floating homes, Cham communities, Sam Mountain temples and Trà Sư wetland through a two-night-friendly borderland route.',
        lead: 'Châu Đốc gathers several cultures and habitats at the Delta’s edge. The floating village and Cham islets are living communities, Sam Mountain is active sacred ground, and Trà Sư is a managed wetland rather than a guaranteed bird show.',
        orientation: 'Choose a river-and-community reading or a mountain-and-wetland reading first. Crossing into Cambodia is a separate immigration plan, not an automatic add-on.',
        arrival: 'Use the official tourism guidance for the long road from Ho Chi Minh City or the transfer from Cần Thơ, and leave space for boat conditions.',
        sequence: 'Border river, cultural threshold, sacred mountain and wetland boat create a route with different conduct at every stop.',
        boundary: 'Ask before photographing Cham or Muslim residents, dress modestly at religious sites and never feed birds or disturb floating households.',
        stages: [
          ['River', 'Read floating homes and fish farming from the public boat route without entering private platforms.'],
          ['Culture', 'Visit Cham spaces only with consent and the appropriate local guide or host.'],
          ['Mountain', 'Treat Sam Mountain’s temples as places of worship, not merely viewpoints.'],
          ['Wetland', 'Use the authorized Trà Sư route and let seasonal water and birds set the pace.']
        ],
        risks: [
          ['Long transfer', 'The road from the main southern hubs is tiring and vulnerable to traffic delays.'],
          ['High water', 'Rain and flood-season levels change wetland access, boat routes and visibility.'],
          ['Religious privacy', 'Tourist photography can intrude on ceremonies and community life.']
        ],
        duration: 'Plan two nights for a humane version; a single day is only practical from a nearby base with one focus.',
        combine: 'It can lead toward a verified Cambodia crossing, but keep visa and border checks outside the sightseeing schedule.',
        verify: 'Check current road, boat and wetland access, temple rules, local cultural guidance, border status and forecast.'
      },
      {
        slug: 'sa-dec-flower-literary-quarter',
        name: 'Sa Dec Flower Village & Huynh Thuy Le House',
        motif: 'garden-and-memory spread',
        instrument: 'zine',
        image: image({
          src: '/assets/images/vietnam-sa-dec-river.webp',
          alt: 'Mekong River bank and riverside life in Sa Dec',
          source: 'https://commons.wikimedia.org/wiki/File:Les_rives_du_M%C3%A9kong_(Sa_Dec,_Vietnam)_(6662962845).jpg',
          label: 'Mekong banks at Sa Dec',
          creator: 'Jean-Pierre Dalbéra',
          license: 'CC BY 2.0'
        }),
        summary: 'Plan Sa Đéc through its century-old flower village, river town, market and Huỳnh Thủy Lê house with a seasonal horticulture lens.',
        lead: 'Sa Đéc is more than a literary reference. Its flower growers, riverbank trade, old homes and market form a living town whose rhythm changes around the Lunar New Year flower season.',
        orientation: 'Let the flower village and literary house answer different questions: one is a working horticultural landscape, the other a preserved domestic and architectural memory.',
        arrival: 'Use a road connection from Cần Thơ or Ho Chi Minh City and confirm each site’s current entrance and photography policy before setting out.',
        sequence: 'Garden lanes, market texture, river edge and heritage house make a compact but varied small-town route.',
        boundary: 'Do not pick flowers, enter growing beds or photograph residents at work without consent. Treat the heritage house as a protected interior.',
        stages: [
          ['Garden', 'Walk the village edges and learn how growers move plants, water and orders through narrow lanes.'],
          ['Market', 'Buy directly where practical and keep trade passages open.'],
          ['Memory', 'Read Huynh Thuy Le House through its architecture and documented history, not only its literary mythology.'],
          ['River', 'End beside the water with a quiet meal or walk rather than another crowded attraction.']
        ],
        risks: [
          ['Seasonal crowding', 'Flower demand around Tet changes road access, prices and accommodation pressure.'],
          ['Working gardens', 'Visitors can damage plants or interrupt orders by stepping beyond public lanes.'],
          ['Opening drift', 'Small museums and houses may close or change entry conditions.']
        ],
        duration: 'Use one full day or an overnight; the town’s value increases when the garden and heritage stops are not rushed.',
        combine: 'It can connect naturally to Cần Thơ or the upper Delta, but Sa Đéc deserves its own chapter rather than a lunch stop.',
        verify: 'Check the Dong Thap tourism portal, flower season, garden access, house opening, road conditions and current weather.'
      },
      {
        slug: 'ca-mau-u-minh-ha-cape',
        name: 'Ca Mau: U Minh Ha to Cape Ca Mau',
        motif: 'freshwater-to-mangrove file',
        instrument: 'expedition',
        image: image({
          src: '/assets/images/vietnam-ca-mau-cape.webp',
          alt: 'Sunset over mangrove forest and coast in Ca Mau',
          source: 'https://commons.wikimedia.org/wiki/File:Mui_Ca_Mau_005.JPG',
          label: 'Cape Ca Mau',
          creator: 'Ctvn wikiviet',
          license: 'Public domain'
        }),
        summary: 'A deliberate far-south expedition from U Minh Ha peat-swamp forest to the mangrove coast and Cape Ca Mau, with fire, water and transport buffers.',
        lead: 'Cà Mau makes the freshwater-to-saltwater transition visible. U Minh Hạ’s peat forest, community waterways and the Cape’s mangrove coast require different guides, road legs and conservation rules.',
        orientation: 'Treat the route as a two-day landscape argument, not a one-day trophy run to the southern marker. The park and the cape each deserve daylight and interpretation.',
        arrival: 'Travel by road or a currently operating flight connection to Cà Mau, then arrange official park access and the onward boat or road leg before departure.',
        sequence: 'City reset, peat forest, protected waterway, mangrove coast and a safe return make the expedition coherent.',
        boundary: 'Stay on marked routes, obey park fire rules and never collect peat, plants, shells or wildlife from the protected landscape.',
        stages: [
          ['Reach', 'Build an overnight base and confirm park, road and boat arrangements before entering remote areas.'],
          ['Forest', 'Follow the U Minh Hạ guide or designated route and read the peat ecosystem without disturbing it.'],
          ['Coast', 'Move toward Cape Ca Mau through authorized transport, keeping tide and weather margin.'],
          ['Return', 'Leave with fuel, water and daylight buffer; do not let the marker dictate an unsafe late transfer.']
        ],
        risks: [
          ['Remote services', 'Medical, fuel, cash and accommodation options thin out outside Cà Mau city.'],
          ['Fire and water', 'Peat forest fire risk, high heat, rain and boat conditions all affect access.'],
          ['Long-distance fatigue', 'The southern endpoint is far enough that rushed driving creates its own hazard.']
        ],
        duration: 'Reserve at least two days and one flexible buffer for the full U Minh Hạ-to-cape sequence.',
        combine: 'It can continue toward community wetland experiences only after the national-park and coastal legs are secured.',
        verify: 'Check the current Cà Mau government park notices, access permits, boat or road route, tide, fire risk and forecast.'
      }
    ]
  }),

  defineVietnamCluster({
    slug: 'phu-quoc-southern-islands',
    name: 'Phu Quoc & Southern Islands',
    region: 'Southern Vietnam',
    family: 'island-tide',
    label: 'Island South',
    tagline: 'A tide-led island atlas where reef, forest, fishing and protected shores set the pace.',
    hubIntro: 'Phu Quoc is not one beach. Dương Đông and Long Beach, the An Thới archipelago, Gành Dầu and Bãi Thơm, Phú Quốc National Park, Hàm Ninh and the separate Côn Đảo archipelago each demand different transport, weather and conservation choices. Use this hub to match a shore or island to the season and the kind of care it requires.',
    stay: 'Base in Dương Đông or the south only when that matches the day’s piers; choose the north or east side for forest and fishing chapters, and give Côn Đảo its own stay.',
    transfer: 'Use the island airport or verified mainland ferry connection for Phu Quoc, then treat every boat, reef outing and Côn Đảo crossing as a weather-dependent transfer.',
    sources: [
      ['https://www.vietnam.travel/places-to-go/southern-vietnam/phu-quoc', 'Vietnam Tourism — Phu Quoc'],
      ['https://vietnam.travel/things-to-do/phu-quoc-nature', 'Vietnam Tourism — Phu Quoc for Nature Lovers'],
      ['https://www.unesco.org/en/mab/kien-giang?hub=66369', 'UNESCO — Kien Giang Biosphere Reserve'],
      ['https://vqgpq.angiang.gov.vn/tong-quan-vuon-quoc-gia-phu-quoc', 'Phu Quoc National Park — Official overview'],
      ['https://www.condaopark.com.vn/en/', 'Con Dao National Park — Official visitor information']
    ],
    guides: [
      {
        slug: 'duong-dong-long-beach',
        name: 'Duong Dong & Long Beach Sunset Coast',
        motif: 'west-shore arrival ribbon',
        instrument: 'ribbon',
        image: image({
          src: '/assets/images/vietnam-phu-quoc-long-beach.webp',
          alt: 'Sunset over Long Beach on Phu Quoc Island',
          source: 'https://commons.wikimedia.org/wiki/File:Sunset_on_the_Long_Beach_in_Phu_Quoc_Island,_Vietnam,_5_March_2019.jpg',
          label: 'Sunset on Long Beach',
          creator: 'Alexey Komarov',
          license: 'CC BY-SA 4.0'
        }),
        summary: 'A practical west-coast arrival chapter linking Dương Đông, Long Beach, the harbor edge and sunset without assuming every resort frontage is public.',
        lead: 'The west coast is Phu Quoc’s easiest starting point, but it combines a working town, a long resort shoreline and heavy sunset demand. A good route distinguishes public access, hotel facilities, fishing activity and safe swimming.',
        orientation: 'Choose a town, food or sunset question first. The island’s western road can look close on a map while traffic, construction and beach access add time.',
        arrival: 'Use the airport or ferry transfer to a named town base, then confirm the public beach entry and return route before dusk.',
        sequence: 'Dương Đông market, harbor reading, one public shore and a low-pressure sunset finish make the arrival chapter useful.',
        boundary: 'Do not cross resort barriers, photograph working fishers without consent or swim outside a current designated safe area.',
        stages: [
          ['Settle', 'Use the town to exchange money, buy essentials and understand the day’s road or taxi options.'],
          ['Harbor', 'Read fishing boats and waterfront commerce from public edges without blocking loading work.'],
          ['Shore', 'Choose a legal beach access and check surf, flags and lifeguard coverage before entering the water.'],
          ['Sunset', 'Leave a clear road or walking plan for the return; sunset crowds can slow every pickup.']
        ],
        risks: [
          ['Access ambiguity', 'A beach beside a resort is not necessarily a public facility with open services.'],
          ['Sea conditions', 'Calm-looking water can still contain currents, rocks or boat traffic.'],
          ['Evening congestion', 'West-coast roads and popular viewing spots fill quickly at sunset.']
        ],
        duration: 'Use a half day or first evening; extend only when the town and beach each have a clear purpose.',
        combine: 'It pairs with a fish-sauce or market chapter, while An Thoi needs a separate full marine day.',
        verify: 'Check airport or ferry arrival, current beach access, swim flags, sunset weather, road traffic and return transport.'
      },
      {
        slug: 'an-thoi-marine-park',
        name: 'An Thoi Archipelago Marine Park',
        motif: 'reef-permit chart',
        instrument: 'chart',
        image: image({
          src: '/assets/images/vietnam-phu-quoc-an-thoi.webp',
          alt: 'An Thoi Archipelago islands south of Phu Quoc',
          source: 'https://commons.wikimedia.org/wiki/File:Qu%E1%BA%A7n_%C4%91%E1%BA%A3o_An_Th%E1%BB%9Bi_n%E1%BA%B1m_v%E1%BB%81_ph%C3%ADa_nam_%C4%91%E1%BA%A3o_Ph%C3%BA_Qu%E1%BB%91c_-_panoramio.jpg',
          label: 'An Thoi Archipelago',
          creator: 'Tuderna',
          license: 'CC BY 3.0'
        }),
        summary: 'Plan An Thoi as a marine-protection day with an authorized operator, reef-safe behavior and a realistic sea-state fallback.',
        lead: 'The islands south of Phu Quoc are beautiful because reef, seagrass and fishing systems remain connected. A snorkeling itinerary should therefore begin with park and operator conduct, not a promise of a particular coral patch or starfish beach.',
        orientation: 'Choose a small, conservation-minded program and understand which islands, reefs and landing beaches it actually visits. A cable car, speedboat and snorkeling tour solve different problems.',
        arrival: 'Reach the current An Thoi departure point with a confirmed operator, passenger list, life jacket and weather plan. Do not assume a mainland ticket guarantees a marine-park route.',
        sequence: 'Briefing, open-water transfer, one reef focus, low-impact landing and early return make the chapter manageable.',
        boundary: 'Never stand on coral, touch wildlife, collect shells or handle starfish for a photograph. Leave the reef exactly as you found it.',
        stages: [
          ['Brief', 'Confirm route, flotation, reef rules, weather cancellation and who is responsible for the boat.'],
          ['Cross', 'Stay seated, secure dry bags and follow crew direction through wake and open-water movement.'],
          ['Float', 'Use neutral buoyancy, keep fins clear of coral and observe without chasing marine life.'],
          ['Return', 'Rinse gear where allowed, remove all waste and keep a shore-side backup if the sea turns rough.']
        ],
        risks: [
          ['Sea state', 'Wind, rain and swell can cancel or shorten an island route.'],
          ['Reef injury', 'Standing on coral harms habitat and can injure visitors on sharp or unstable surfaces.'],
          ['Operator quality', 'A colorful package does not prove legal permits, adequate flotation or conservation practice.']
        ],
        duration: 'Reserve a full day with no tightly timed onward flight or ferry connection.',
        combine: 'A sunset town walk can follow only after a conservative return; do not stack another open-water excursion.',
        verify: 'Check current marine-park rules, operator credentials, route, weather, tide, equipment and passenger capacity.'
      },
      {
        slug: 'ganh-dau-bai-thom',
        name: 'Ganh Dau, Rach Vem & Bai Thom',
        motif: 'north-island edge',
        instrument: 'roadbook',
        image: image({
          src: '/assets/images/vietnam-phu-quoc-ganh-dau.webp',
          alt: 'Palm-lined beach and clear water on Phu Quoc Island',
          source: 'https://commons.wikimedia.org/wiki/File:Phu_quoc_plage.jpg',
          label: 'Phu Quoc beach',
          creator: 'ntt',
          license: 'CC BY-SA 3.0'
        }),
        summary: 'A north-island road chapter for quieter beaches, Rach Vem, Ganh Dau, Bai Thom and the border-facing geography of Phu Quoc.',
        lead: 'Northern Phu Quoc asks visitors to trade resort convenience for dirt roads, forest edges and smaller services. The quiet is not emptiness: fishing communities, temples, protected forest and border sensitivity all shape the route.',
        orientation: 'Pick one coast segment and one cultural or food stop. Trying to cover every northern road can leave no daylight for the return.',
        arrival: 'Use a roadworthy motorbike with a helmet or a trusted driver, download offline directions and confirm fuel and food options before leaving the main road.',
        sequence: 'Northbound road, village or temple, one shore, forest edge and a weather-aware return define the roadbook.',
        boundary: 'Keep cameras and drones away from military or border installations, and ask residents before photographing homes, boats or religious spaces.',
        stages: [
          ['Prepare', 'Check fuel, helmet, rain layer, offline map and a daytime return before heading north.'],
          ['Move', 'Ride slowly on unsealed or narrow roads and yield to residents, livestock and local traffic.'],
          ['Pause', 'Choose one public beach, temple or village business and keep the visit low-impact.'],
          ['Return', 'Leave the remote coast with light and fuel margin; do not let a quiet sunset create a dark-road ride.']
        ],
        risks: [
          ['Road surface', 'Potholes, sand, rain and construction can make a short map distance slow.'],
          ['Remote support', 'Fuel, medical care and reliable phone signal are less predictable in the north.'],
          ['Restricted views', 'Border and security areas can carry photography and access restrictions.']
        ],
        duration: 'Use a full day from Dương Đông, or stay north when the route is the main purpose.',
        combine: 'Pair with the National Park chapter only if the road and energy budget support it; keep An Thoi on a separate sea day.',
        verify: 'Check current road status, fuel, park boundaries, public beach access, security restrictions and forecast.'
      },
      {
        slug: 'national-park-suoi-tranh',
        name: 'Phu Quoc National Park & Suoi Tranh',
        motif: 'forest-water contour',
        instrument: 'contour',
        image: image({
          src: '/assets/images/vietnam-phu-quoc-suoi-tranh.webp',
          alt: 'Waterfall and stream at Suoi Tranh on Phu Quoc',
          source: 'https://commons.wikimedia.org/wiki/File:Su%E1%BB%91i_Tranh_Ph%C3%BA_Qu%E1%BB%91c_(37111056503).jpg',
          label: 'Suoi Tranh',
          creator: 'Sketyl none',
          license: 'CC BY 2.0'
        }),
        summary: 'Move inland from Phu Quoc’s beaches into protected forest, seasonal streams and Suoi Tranh with trail ability and rainfall as the route’s main variables.',
        lead: 'Phu Quoc’s forest is the island’s other identity. National Park trails, Mount Chua, streams and Suoi Tranh reward visitors who accept mud, insects and a quieter pace instead of treating the forest as a backdrop to a swim.',
        orientation: 'Choose a short waterfall walk or a more demanding park trail, and confirm whether the current entrance and guide arrangement supports that choice.',
        arrival: 'Travel in daylight with proper shoes, water, insect protection and a current park contact. Rain can alter stream depth and trail safety quickly.',
        sequence: 'Forest threshold, canopy reading, stream or waterfall, and a marked return create a resilient land route.',
        boundary: 'Stay on designated paths, do not collect plants or rocks and never swim where park staff have not confirmed conditions.',
        stages: [
          ['Enter', 'Check the park route, weather and footwear before leaving the road.'],
          ['Read', 'Notice evergreen forest, wetland and stream ecology rather than chasing a single viewpoint.'],
          ['Rest', 'Use only approved swimming or picnic areas and keep food away from wildlife.'],
          ['Return', 'Leave enough daylight for the road back and report any route closure rather than bypassing it.']
        ],
        risks: [
          ['Rain and mud', 'Tropical showers make rocks, roots and unsealed paths slippery.'],
          ['Seasonal water', 'A dry stream or swollen waterfall can both disappoint or endanger visitors.'],
          ['Wildlife distance', 'The park is habitat, not a petting or feeding area.']
        ],
        duration: 'Allow a half day for Suoi Tranh or a full day for a longer park route.',
        combine: 'It pairs with a north-island road chapter only when the chosen trail and return road remain realistic.',
        verify: 'Check the official park portal, trail and entrance status, guide needs, rainfall, stream safety and transport.'
      },
      {
        slug: 'ham-ninh-fishing-village',
        name: 'Ham Ninh Fishing Village & Island Pantry',
        motif: 'east-coast pantry',
        instrument: 'field',
        image: image({
          src: '/assets/images/vietnam-phu-quoc-ham-ninh.webp',
          alt: 'Long public pier extending from Ham Ninh into the coastal water of Phu Quoc',
          source: 'https://commons.wikimedia.org/wiki/File:C%E1%BA%A7u_t%E1%BA%A7u,H%C3%A0m_Ninh._Ph%C3%BA_Qu%E1%BB%91c,_Vi%E1%BB%87t_nam_-_panoramio.jpg',
          label: 'Ham Ninh pier',
          creator: 'trungydang',
          license: 'CC BY 3.0'
        }),
        summary: 'Read Ham Ninh through fishing, seafood, pepper and fish-sauce culture while keeping a clear distinction between a village and a staged seafood stop.',
        lead: 'Hàm Ninh is an eastern working coast where seafood supply, tides and tourism meet. Its value lies in observing the village’s relationship with the water and buying responsibly, not in handling live animals for a photograph.',
        orientation: 'Choose a public pier, market or locally run meal and allow the tide to shape the shoreline view. Confirm what is genuinely open before promising a floating restaurant.',
        arrival: 'Use a safe road connection from Dương Đông or the airport, then park or disembark where local signs permit. Carry cash and a plan for the return.',
        sequence: 'Village edge, fish landing, market or pantry ingredient and a calm east-coast finish define the field visit.',
        boundary: 'Ask before photographing fishers, boats and homes; do not enter working piers or touch marine animals without explicit permission.',
        stages: [
          ['Approach', 'Reach the village in daylight and read public access before walking toward the pier.'],
          ['Observe', 'Watch landing and preparation from a respectful distance, leaving work routes open.'],
          ['Taste', 'Choose a clearly priced, hygienic meal and learn the ingredient story without demanding a performance.'],
          ['Leave', 'Take waste with you and return before the coastal road becomes dark or rain-soaked.']
        ],
        risks: [
          ['Tide and pier', 'Water level, slippery planks and boat movement can change the safe edge.'],
          ['Food uncertainty', 'Live seafood, heat and unclear pricing require sensible selection and confirmation.'],
          ['Community privacy', 'A small fishing village cannot absorb unlimited intrusive photography.']
        ],
        duration: 'Allow a half day, or build it into an east-coast overnight rather than rushing back after dinner.',
        combine: 'It can complement the National Park chapter because both use the island’s east side, but keep the food and forest purposes distinct.',
        verify: 'Check public pier access, tide, weather, restaurant pricing, road conditions and the availability of local products.'
      },
      {
        slug: 'con-dao-national-park',
        name: 'Con Dao National Park & Turtle Islands',
        motif: 'protected-island dossier',
        instrument: 'expedition',
        image: image({
          src: '/assets/images/vietnam-con-dao-national-park.webp',
          alt: 'Beach and forested coast of Con Dao National Park',
          source: 'https://commons.wikimedia.org/wiki/File:C%C3%B4n_%C4%90%E1%BA%A3o_National_Park.jpg',
          label: 'Con Dao National Park',
          creator: 'Tycho',
          license: 'CC BY-SA 3.0'
        }),
        summary: 'Keep Côn Đảo as a separate protected-archipelago stay with forest, marine park, historical memory and tightly managed turtle experiences.',
        lead: 'Côn Đảo is not a day-trip extension of Phu Quoc. The archipelago combines a national park, marine habitat, difficult sea connections and a serious history of imprisonment and resistance.',
        orientation: 'Choose a park, heritage or turtle-conservation question first. Every boat trip and island landing should follow the park’s current registration and environmental rules.',
        arrival: 'Reach Côn Đảo by a currently operating flight or verified Vung Tau or Tran De ferry. Keep a spare day because sea conditions and capacity can change the connection.',
        sequence: 'Main island orientation, ranger-led nature, protected islet or heritage site and a quiet return form the expedition.',
        boundary: 'Turtle watching is registration-led: stay silent, never touch or shine lights at nesting animals, avoid single-use plastic and follow rangers even when a better photograph seems possible.',
        stages: [
          ['Arrive', 'Confirm airport or ferry connection, park entry and the exact island transfer before booking a nature activity.'],
          ['Learn', 'Use ranger interpretation to connect forest, reef, turtle nesting and local history.'],
          ['Observe', 'Follow the authorized group size, viewing position and no-touch rules on beaches and islets.'],
          ['Return', 'Bring all waste back, protect the next sea or flight buffer and leave the park quieter than you found it.']
        ],
        risks: [
          ['Ferry and swell', 'Open-water transfers can shift or cancel, especially when the forecast changes.'],
          ['Turtle disturbance', 'Noise, flash, touch and beach traffic can harm nesting and hatchling behavior.'],
          ['Historical weight', 'Memorials and prison sites require reflection rather than sensational photography.']
        ],
        duration: 'Reserve several nights plus a weather buffer; a same-day Phu Quoc connection is not a robust plan.',
        combine: 'It should be its own island chapter, with any Phu Quoc route completed before departure or after a full recovery day.',
        verify: 'Check Con Dao National Park registration, turtle rules, ferry or flight status, marine conditions, park access and heritage guidance.'
      }
    ]
  })
];
