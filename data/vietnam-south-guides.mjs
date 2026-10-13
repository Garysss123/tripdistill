import { defineVietnamCluster, image } from './vietnam-guide-builder.mjs';

const muiNeSources = [
  ['https://www.vietnam.travel/things-to-do/mui-ne-land-sand-dunes-and-water-sports', 'Viet Nam National Authority of Tourism — Mui Ne dunes and water sports (checked 13 October 2026)'],
  ['https://www.nchmf.gov.vn/kttv/', 'National Centre for Hydro-Meteorological Forecasting — inland, marine and hazard bulletins (checked 13 October 2026)']
];

const phuQuocSources = [
  ['https://vietnam.travel/places-to-go/mekong-delta/phu-quoc', 'Vietnam Tourism — Phu Quoc season and arrival overview (checked 13 October 2026)'],
  ['https://vietnam.travel/things-to-do/phu-quoc-nature', 'Vietnam Tourism — Phu Quoc nature, Ham Ninh and An Thoi context (checked 13 October 2026)'],
  ['https://phuquocexpress.com/en/calendar', 'Phu Quoc Express — dated ferry calendar and operating notices (checked 13 October 2026)'],
  ['https://phuquocexpress.com/en/ha-tien-phu-quoc-train-schedule-2024', 'Phu Quoc Express — Ha Tien–Phu Quoc October 2026 schedule details (checked 13 October 2026)'],
  ['https://www.nchmf.gov.vn/kttv/vi-VN/1/thoi-tiet-bien-24h-s12h3-15.html', 'National Centre for Hydro-Meteorological Forecasting — Gulf of Thailand marine bulletin, 13 October 2026 (dated regional snapshot)'],
  ['https://vqgpq.angiang.gov.vn/tong-quan-vuon-quoc-gia-phu-quoc', 'Phu Quoc National Park — official overview; current visitor access not stated (checked 13 October 2026)'],
  ['https://www.unesco.org/en/mab/kien-giang?hub=66369', 'UNESCO — Kien Giang Biosphere Reserve context (checked 13 October 2026)']
];

export const vietnamSouthClusters = [
  defineVietnamCluster({
    slug: 'mui-ne-binh-thuan',
    name: 'Mui Ne & Binh Thuan',
    region: 'Southern Vietnam',
    family: 'dune-wind',
    label: 'South-Central Coast',
    tagline: 'A coast measured in wind, sand, Cham memory and sea-state decisions.',
    isoDate: '2026-10-13',
    reviewDate: '13 October 2026',
    hubCss: '/css/vietnam-mui-ne.css?v=20261013-1',
    hubIntro: 'Plan the Binh Thuan coast from one base: red dunes fit a cool-hour outing, kiteboarding depends on a same-day school decision, and Bau Trang needs its own long-drive day. Choose two, three or four nights by how much weather slack your transfers can absorb.',
    stay: 'Keep Ham Tien or Mui Ne as the beach base for the red dunes and a possible lesson. Choose Phan Thiet town only when a confirmed arrival or town visit earns it; a split stay adds another road transfer. Two nights allow one full outing, three allow two, and four can protect a spare day.',
    transfer: 'A current exact-date train or coach connection was not confirmed. Book only to the terminal printed on your valid ticket, then confirm a separate road pickup to your chosen bed. No fare, timetable, drive duration, dune entrance or visitor closure was verified on 13 October 2026.',
    hubSources: muiNeSources,
    nightPlan: {
      kicker: 'Nights, base and slack',
      title: 'Let the transfer set the coast stay',
      intro: 'Count full usable days after arrival and before departure, then choose the route. This plan makes no assumption about train, coach or excursion timetables.',
      options: [
        ['2 nights', 'Choose one main outing', 'Use the arrival day to reach one confirmed base and arrange the return pickup. Spend the one full day on the red dunes, a supervised kite lesson, or Bau Trang as the main landscape; do not stack all three.'],
        ['3 nights', 'Add a contrasting day', 'Keep Ham Tien or Mui Ne for both nights in between. Pair a cool-hour red-dune visit with either the school-led water session or the longer Bau Trang drive, then leave the other chapter for a future trip.'],
        ['4 nights', 'Protect one weather reserve', 'Three usable days can hold two different outings plus one unbooked day. Move the lesson or remote drive into that reserve only after the official forecast and local access check support it; an extra night does not guarantee an opening.']
      ],
      footerTitle: 'Choose one bed before the last mile',
      footer: 'Ham Tien or Mui Ne favors coast days; Phan Thiet town may suit a confirmed arrival or a town-focused stay. Keep one base for a short visit. Split only when a dated connection or a clear town plan pays for the extra road transfer.'
    },
    routeModelHeading: 'Route from the near coast to one chosen day out.',
    routeModelLead: 'Use the red dunes for a confirmed cool-hour window. Give either kiteboarding or Bau Trang a separate full day, then keep a spare day unbooked if weather matters. When a closure or access point is unknown, do not test an unmarked road; return to the base or reschedule.',
    presentation: {
      conditionsTitle: 'Choose the access contract before the landscape.',
      conditionsLead: 'The town-side coast, a school launch and a remote dune road do not share one pickup, forecast or fallback.'
    },
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
        isoDate: '2026-10-13',
        reviewDate: '13 October 2026',
        sources: muiNeSources,
        image: image({
          src: '/assets/images/vietnam-mui-ne-red-dunes.webp',
          alt: 'Wind-shaped red sand dunes outside Mui Ne',
          source: 'https://commons.wikimedia.org/wiki/File:RB_20231118_Mui_Ne_Vietnam_126.jpg',
          label: 'Mui Ne sand dunes',
          creator: 'Monster4711',
          license: 'CC BY-SA 3.0'
        }),
        summary: 'Plan Mui Ne’s red dunes as a cool-hour half-day from one coastal base, with a permitted access point, activity boundary and return pickup confirmed before travel.',
        lead: 'These dunes can fit between two nights on the coast, but the visible pin is not proof that an entrance or vehicle lane is public today. Before leaving Ham Tien or Mui Ne, get one current pickup point, a permitted visitor boundary and the same-day return arrangement from the responsible local contact. If none can be confirmed, skip the dune face rather than following an unofficial track.',
        orientation: 'Read this as one short exposed walk, not a scenic road loop. Pick a turnaround point before climbing, carry water and footwear suited to loose sand, and agree where the driver will meet you again. The Vietnam Tourism page describes the dunes, but it does not publish a current visitor gate, vehicle boundary or closure notice.',
        arrival: 'A two- or three-night Ham Tien/Mui Ne base keeps this chapter close to the coast; a Phan Thiet town stay adds a separate road leg. No official entrance map or visitor-zone notice was readable on 13 October 2026, so this guide deliberately does not name a guessed gate. Confirm the location, pickup and return with your accommodation or the site authority before setting out.',
        sequence: 'Coast base → confirmed pickup → permitted entrance → short cool-hour walk or booked activity → return with the same arranged transport; keep Bau Trang for another day.',
        boundary: 'If the official forecast raises a heavy-rain or strong-wind alert, or local staff closes the entrance, do not reroute onto an unmarked track. Return to base, use the spare day if you have one, or choose a confirmed indoor town visit instead.',
        stages: [
          ['Confirm', 'Ask for the public entrance, the agreed drop-off and the matching return pickup. If access or a return ride cannot be identified, do not leave the coast base.'],
          ['Check', 'Read the National Centre forecast and hazard notices on the day, then ask whether the local entrance is open. A forecast does not certify dune access.'],
          ['Walk', 'Stay inside the marked visitor area and choose either a quiet walk or an operator-managed activity. Never join a vehicle lane for a photograph.'],
          ['Return', 'Turn back while the route is comfortable, meet the same arranged driver and leave the rest of the day unscheduled.']
        ],
        risks: [
          ['Unclear entrance', 'The current official public entrance and vehicle boundary could not be verified; a map pin or driver suggestion is not authorization.'],
          ['Heat and loose footing', 'The exposed walk can tire visitors before the sand looks extreme; shorten it, carry water and leave before discomfort builds.'],
          ['Wind or closure', 'A weather alert or local closure cancels the dune plan. Do not replace it with an improvised route across private or marked vehicle areas.']
        ],
        duration: 'Reserve half a day for the outing and recovery, but treat that as a planning allowance, not a measured visit or opening guarantee. Choose the light window only after a permitted entrance and return are confirmed.',
        combine: 'Do not combine this with the remote white dunes or a kite lesson. Add one nearby stop only when the same transport provider confirms both access points and a workable return; otherwise keep the afternoon for rest at the coast base.',
        verify: 'On 13 October 2026 no current official entrance map, vehicle-zone rule or local closure notice could be retrieved. Check the national forecast, then confirm access and the return pickup locally; if either remains unknown, skip the route.',
        routeDiagram: {
          kind: 'flow',
          title: 'A dune visit begins with the access answer',
          intro: 'Choose the short walk only when the actual entrance, visitor boundary and return ride are all clear.',
          steps: [
            ['Before leaving', 'Name the entrance', 'Ask the accommodation or responsible site contact for a public access point and a return pickup.'],
            ['Same day', 'Read the forecast', 'Check rain, wind and hazard notices; then confirm locally that the visitor area is open.'],
            ['On the sand', 'Keep one boundary', 'Stay in the permitted walking or booked activity area. Leave vehicle lanes and planted edges alone.'],
            ['If unclear', 'Return to base', 'Do not try another track. Reschedule within a spare day or keep the afternoon local.']
          ],
          fallbackTitle: 'No verified entrance means no dune entry',
          fallback: 'A government forecast does not establish land access. Skip the route if the entrance, closure status or return pickup cannot be confirmed.'
        }
      },
      {
        slug: 'bau-trang-white-dunes',
        name: 'Bau Trang White Dunes & Lotus Lake',
        motif: 'lake-between-sand',
        instrument: 'axis',
        isoDate: '2026-10-13',
        reviewDate: '13 October 2026',
        sources: muiNeSources,
        image: image({
          src: '/assets/images/vietnam-bau-trang.webp',
          alt: 'White dunes surrounding Bau Trang lake in Binh Thuan',
          source: 'https://commons.wikimedia.org/wiki/File:B%C3%A0u_Tr%E1%BA%AFng_(28917099606).jpg',
          label: 'Bau Trang',
          creator: 'Hưng Hồ Bá',
          license: 'CC BY 2.0'
        }),
        summary: 'Give Bau Trang its own full day from Mui Ne: confirm the route, visitor entrance, driver and daylight return first, then keep the lake and dune visit short and low-impact.',
        lead: 'Bau Trang is the long road day in this coast cluster. Vietnam Tourism confirms the white dunes sit beside lakes, but the official pages available in this review did not establish a current visitor gate, public walking line, road condition or vehicle permission. Do not treat a map pin or an old tour description as proof that an access road is open. If the route and return driver cannot be confirmed for your date, keep the day at the coast.',
        orientation: 'Choose one permitted lakeside viewpoint and one short dune contour only after the current site contact confirms both. The name “Lotus Lake” is not a promise of a bloom: plan around the lake-and-sand landscape, not a seasonal flower display. Keep away from planted or soft shoreline edges unless the site explicitly marks them for visitors.',
        arrival: 'Use the same Ham Tien or Mui Ne base rather than moving hotels for this outing. Reserve a dedicated return vehicle with a named pickup point, offline directions and an agreed daylight turnaround; no public departure, travel time or fare was independently confirmed on 13 October 2026. Carry water and sun cover, and do not assume quick roadside support.',
        sequence: 'Coastal base → confirmed driver and entrance → lake-side orientation → short permitted dune walk → daylight return; leave both the red dunes and kite session for another day.',
        boundary: 'If the national forecast shows heavy rain, thunderstorms or a strong-wind alert, if the road status is unclear, or if local access is closed, do not start the remote drive. Keep the day near the base or use a separately confirmed local alternative; never search for an unofficial track around a closure.',
        stages: [
          ['Book the leg', 'Confirm the actual route, named pickup, return vehicle and permitted entrance for the date. If any part is unclear, keep the remote day out of the plan.'],
          ['Check the window', 'Read the national inland forecast and warnings before leaving, then confirm road and visitor access locally; neither source guarantees a dune opening.'],
          ['Use one viewpoint', 'Start at the approved lakeside position, read the landscape and take only a short marked sand contour. Do not plan on lotus bloom or off-road access.'],
          ['Return early', 'Agree a daylight turnaround with the driver and keep fuel, water and phone power for the full return rather than adding a last-minute stop.']
        ],
        risks: [
          ['Access not verified', 'The current government site plan timed out, and no official visitor map or closure notice was readable; the entrance and vehicle permissions remain unknown.'],
          ['Long return leg', 'Rain, road works, fuel or a late departure can turn the remote outing into a pressured drive; keep the return vehicle and daylight margin protected.'],
          ['Soft lake edge', 'Waterline, vegetation and sand are not open-use surfaces by default. Stay on the current visitor line and do not drive onto the dunes.']
        ],
        duration: 'Hold a full day for the road leg, a short visit and a conservative return. That is a planning shape, not a measured drive time; no dated timetable or route duration was verified.',
        combine: 'Do not stack Bau Trang with a kite lesson or the red dunes. On a two-night stay, choose Bau Trang only if this landscape is the trip’s priority and both transfers are confirmed; on three nights, place it on its own day and use a different day for a nearby coast activity.',
        verify: 'As of 13 October 2026, the Binh Thuan government site plan was not readable in this review and no official public entrance or current road closure page was confirmed. Check the NCHMF forecast, then ask the responsible local site contact about route, access, vehicle rules and return.',
        routeDiagram: {
          kind: 'flow',
          title: 'The white-dune day has one decision gate',
          intro: 'The drive is worth keeping only when both the access and the return leg are confirmed.',
          steps: [
            ['Before booking', 'Confirm the base', 'Stay in Ham Tien or Mui Ne and reserve one named vehicle for the out-and-back day.'],
            ['Before departure', 'Verify access', 'Ask the responsible local contact for the current entrance, road condition and visitor boundary.'],
            ['At Bau Trang', 'Keep the visit bounded', 'Use one approved lakeside view and a short permitted dune section; avoid vehicle access on sand.'],
            ['If blocked', 'Do not reroute', 'Return to the coast base or move the outing into a spare day after a new access check.']
          ],
          fallbackTitle: 'An unreadable local source leaves access unknown',
          fallback: 'If a site contact cannot verify the road or entrance, cancel the remote outing. A national forecast is not a road-opening notice.'
        }
      },
      {
        slug: 'mui-ne-kiteboarding-coast',
        name: 'Mui Ne Kiteboarding Coast',
        motif: 'wind-window board',
        instrument: 'tide',
        isoDate: '2026-10-13',
        reviewDate: '13 October 2026',
        sources: muiNeSources,
        image: image({
          src: '/assets/images/vietnam-mui-ne-kite.webp',
          alt: 'Kitesurfers flying colorful kites above Mui Ne beach',
          source: 'https://commons.wikimedia.org/wiki/File:Vietnam,_Mui_Ne,_Kites_on_the_beach.jpg',
          label: 'Kites on the beach at Mui Ne',
          creator: 'Vyacheslav Argenberg',
          license: 'CC BY 4.0'
        }),
        summary: 'Plan a Mui Ne kiteboarding day around a confirmed school and its same-day go/no-go decision; keep the water session separate from the remote dune drive.',
        lead: 'Mui Ne’s reputation for wind is not a forecast for your lesson date. Vietnam Tourism describes kite and windsurfing along the beach, but does not publish a live beach-zone map, school roster or cancellation status. Choose a school that explains its current meeting point, beginner limits, launch space and rescue plan. If it will not give those details, observe only from a public place where access is permitted or choose another day.',
        orientation: 'A kite lesson is an operator-led water activity, not a self-guided beach rental. Wind, current, crowding and storm warnings can change the decision after arrival. Keep the return plan open and do not use a clear horizon as evidence that the launch corridor is suitable.',
        arrival: 'Base in Ham Tien or Mui Ne for a two- to four-night coast stay, but verify that your chosen school can collect you or name the exact beach meeting point. Ask how a cancelled session is rescheduled and whether the fee is refundable; no current school authorization list or beach zoning notice could be confirmed here.',
        sequence: 'Coast base → school briefing → same-day weather and launch decision → supervised lesson or no-go → safe return; do not schedule Bau Trang as the backup on the same day.',
        boundary: 'If the National Centre issues a relevant storm, heavy-rain or strong-wind warning, or the school calls the session off, do not launch and do not rent equipment for an independent attempt. Reschedule within a spare day or keep the day on land.',
        stages: [
          ['Confirm', 'Book only after the school names its meeting point, lesson format, cancellation rule and how it handles a beginner return.'],
          ['Decide', 'Check the National Centre’s marine and hazard bulletins, then follow the instructor’s same-day assessment. A public forecast does not approve a launch.'],
          ['Take the lesson', 'Use the school’s briefing, equipment and supervised zone; do not cross into a swimming or working shoreline area.'],
          ['Use the fallback', 'On a no-go day, do not self-launch. Move the lesson to an open reserve slot or choose a land-based rest day near the same coast base.']
        ],
        risks: [
          ['Unverified beach zones', 'The current public launch boundary and school operating permissions were not confirmed by an official local source. Use only a school that can explain its current zone.'],
          ['Weather reversal', 'Wind, sea and storm conditions may change between booking and launch. Keep the session movable and accept the operator’s no-go decision.'],
          ['Overloaded day', 'A lesson uses time for briefing, practice and recovery. Do not add a remote drive or another water activity against a fixed return.']
        ],
        duration: 'Leave a half or full day according to the school’s lesson plan, including briefing and recovery. No wind window or lesson availability is guaranteed by this guide.',
        combine: 'Use a different day for Bau Trang. If the lesson is cancelled, keep the land alternative close to the base; attempt the red dunes only after a separate access and forecast check, not as an automatic switch.',
        verify: 'Check the national marine forecast and hazard bulletin on the day, then ask the school about its current launch area, instructor plan, rescue cover and cancellation terms. No official local beach-zone map was confirmed on 13 October 2026.',
        routeDiagram: {
          kind: 'flow',
          title: 'Keep the lesson behind two go/no-go checks',
          intro: 'A booked slot is not a promise that wind or sea conditions will support a launch.',
          steps: [
            ['Before paying', 'Confirm the school', 'Get the meeting point, lesson terms, beginner plan and cancellation or rescheduling rule.'],
            ['On the day', 'Check marine warnings', 'Read the National Centre bulletin and ask the instructor to reassess local conditions.'],
            ['If approved', 'Stay supervised', 'Use the school’s equipment and launch zone; stop if its instructor changes the plan.'],
            ['If cancelled', 'Stay on land', 'Rebook within the reserve day or rest near the coast base; do not self-launch or drive to Bau Trang.']
          ],
          fallbackTitle: 'No-go means no water session',
          fallback: 'Use the spare day for a confirmed lesson window. If the weather stays unsettled, retain a land-based coast day and leave the water for another trip.'
        }
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
    isoDate: '2026-10-13',
    reviewDate: '13 October 2026',
    planner: [
      ['2 nights · one full day', 'Keep the first stay in District 1', 'Use arrival and departure as partial days; reserve the one full day for the Palace-to-Dong Khoi civic walk and one chosen interior. Skip Chợ Lớn and Củ Chi rather than squeezing either into the airport handoff. District 1 is the easiest base for this compact first visit.'],
      ['3 nights · two full days', 'Keep one central base for District 1 and Chợ Lớn', 'Give the civic core one day and Chợ Lớn a separate half or full day. District 1 keeps the first route walkable; District 3 suits a museum-led stay but adds a ride to Chợ Lớn. A District 5 base shortens the market-side start only if most of the trip is west-side; it adds cross-city trips to the central landmarks.'],
      ['5 nights · three chapters plus a buffer', 'Stay put; use a separate road day for Củ Chi', 'Plan one day each for District 1, Chợ Lớn and one chosen Củ Chi site, plus a fourth flexible day for rain, a closure or a slower city chapter. Do not move hotels just for the Củ Chi day. If you only have four nights, remove the buffer and accept that one disruption means dropping a chapter.']
    ],
    routeModelHeading: 'Three chapters, one base, and a deliberate outer day.',
    routeModelLead: 'With two nights, choose the central core. Three nights allow a separate Chợ Lớn day. Four nights can fit one Củ Chi road day only if you accept no spare full day; five nights leave a weather and closure buffer. These counts assume arrival and departure are partial days.',
    hubSources: [
      ['https://vietnam.travel/places-to-go/southeastern-vietnam/ho-chi-minh-city', 'Vietnam Tourism — Ho Chi Minh City profile (checked 13 October 2026)'],
      ['https://vietnam.travel/things-to-do/7-must-see-attractions-hcmc', 'Vietnam Tourism — HCMC landmark and Củ Chi overview (checked 13 October 2026)'],
      ['https://dinhdoclap.gov.vn/en/', 'Independence Palace — visitor information (checked 13 October 2026; follow special notices)'],
      ['https://diadaocuchi.com.vn/', 'Củ Chi Historic Relics & Tunnel Complex — official visitor information (page timed out in this check; verify directly)']
    ],
    sources: [
      ['https://vietnam.travel/places-to-go/southeastern-vietnam/ho-chi-minh-city', 'Vietnam Tourism — Ho Chi Minh City'],
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
        reviewDate: '13 October 2026',
        isoDate: '2026-10-13',
        lead: 'Treat the civic core as one daylight route, not a string of guaranteed admissions: start at Independence Palace, continue north through the cathedral precinct and Central Post Office, follow Đồng Khởi toward the Opera House and Nguyễn Huệ, then finish at Bến Thành only if its current visitor access suits the day. City Hall is an exterior landmark, not a public interior. The official tourism board groups these central sights together, while the Palace site publishes its own hours and special-closure notices.',
        orientation: 'District 1 is the best single base for this route because the central sequence can be walked in short connected sections. Choose the Palace as the anchor if its official page shows normal access; use the cathedral and Post Office as exterior or short stops, not as assumed indoor visits. Add only one museum or market stop. A half-day works for the axis; a full day can hold a longer interior and a proper rest.',
        arrival: 'Stay in District 1 for a one- or two-day central visit, or District 3 when museums and a quieter base matter more than walking straight from the hotel. Begin at the 135 Nam Kỳ Khởi Nghĩa Palace entrance only after checking the official visitor page and its special announcements. For the next leg, walk the civic corridor and use a named road-side pickup at the market end; do not depend on a live metro exit or unverified bus timing.',
        sequence: 'Palace-first access check → cathedral precinct and Post Office exterior → Đồng Khởi / Opera House → Nguyễn Huệ → Bến Thành edge or a preselected indoor stop. This is a northbound walking sequence with one decision point, not a promise that every facade admits visitors.',
        boundary: 'A busy street is not a pedestrian plaza; wait for a safe crossing gap and do not use worship spaces or residents’ corridors as shortcuts.',
        stages: [
          ['Check · Palace', 'On the day before, confirm the Palace’s current hours, admission and special notices on its official site. If it is closed, keep it as an exterior start and move the interior slot to a museum whose own official page confirms access.'],
          ['Walk · civic line', 'Continue to the cathedral precinct and Central Post Office, then follow Đồng Khởi toward the Opera House. Treat worship and government buildings as exterior visits unless posted visitor access says otherwise.'],
          ['Choose · one interior', 'Commit to one verified interior rather than queueing for several. In heat or a short shower, pause in that confirmed indoor visit; do not assume an arcade or landmark is open to visitors.'],
          ['Finish · market edge', 'Walk Nguyễn Huệ toward Bến Thành, then use a known main-road pickup. If rain becomes persistent, stop the outdoor axis and return from the nearest public street instead of forcing a market visit.']
        ],
        risks: [
          ['Road crossings', 'The route crosses fast, dense traffic. Use signalized crossings where available, move predictably and do not follow a crowd into moving lanes.'],
          ['Wet-season timing', 'Vietnam Tourism describes May–November as a period with short afternoon showers. This is a broad climate cue, not a forecast; move outdoor walking earlier and keep a checked indoor option.'],
          ['Access is conditional', 'The Palace page lists 07:00–18:00 daily but also allows special-case announcements. The tourism board’s older hours and admission figures may differ; follow the venue’s current notice and ticket page.']
        ],
        duration: 'Allow about 4–6 hours for the walk, one selected interior, food and rest; treat that as a planning estimate, not a venue timetable. Use one full day if adding a second checked museum.',
        combine: 'Keep this as the first full day. Make Chợ Lớn a separate day and Củ Chi a separate road day; a 3-night stay can cover the two city chapters, while 4–5 nights are more realistic if the outer site matters.',
        verify: 'Recheck the Independence Palace official page and ticket link, any cathedral or museum visitor notice, rain forecast, road crossings and the return pickup. The War Remnants Museum page did not expose readable details in this check, so its hours are not asserted here.',
        routeDiagram: {
          kind: 'flow',
          title: 'One civic line with a single admission decision.',
          intro: 'Keep the day on foot inside District 1; choose the interior only after checking its current visitor notice.',
          steps: [
            ['Before leaving', 'Check the Palace notice', 'Use the Palace’s own visitor page for hours, ticket and special closure information; its listed schedule is not a guarantee against a day-specific notice.'],
            ['Morning', 'Palace to cathedral precinct', 'Start at the Palace, then walk north. Keep the cathedral precinct and Post Office as exterior or short visits unless their own current rules allow entry.'],
            ['Midday', 'Pick one indoor stop', 'Select one verified museum or Palace visit, then pause for food and water. This is the route’s heat and rain hinge.'],
            ['Afternoon', 'Walk out via Đồng Khởi', 'Continue toward the Opera House, Nguyễn Huệ and the Bến Thành edge; use a main-road pickup if traffic or weather rises.']
          ],
          fallbackTitle: 'If a site closes or rain persists',
          fallback: 'Do not substitute an unverified landmark. Make the closed site an exterior stop, use only an indoor venue with a confirmed official notice, or shorten the walk and return to the District 1 base.'
        },
        sources: [
          ['https://vietnam.travel/things-to-do/7-must-see-attractions-hcmc', 'Vietnam Tourism — HCMC landmarks (checked 13 October 2026; listed prices/hours may lag)'],
          ['https://dinhdoclap.gov.vn/en/', 'Independence Palace — official hours, tickets and special notices (checked 13 October 2026)'],
          ['https://baotangchungtichchientranh.vn/en/visit', 'War Remnants Museum — official visit page (details not extractable in this check; verify directly)']
        ]
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
        reviewDate: '13 October 2026',
        isoDate: '2026-10-13',
        lead: 'Make this a west-city half or full day from one base: ride directly to Bình Tây Market, read the wholesale edge without blocking loading, continue to Thiên Hậu Pagoda and one nearby hall or craft lane, then leave from a named main-road pickup. Vietnam Tourism identifies Bình Tây and Thiên Hậu as the Chợ Lớn anchors; its weekend itinerary places Thiên Hậu in District 5. The walk is deliberately short enough to preserve time for worship and work rhythms.',
        orientation: 'If you have only two HCMC nights, choose either this chapter or the District 1 civic walk. Three nights allow both as separate days. Keep District 1 as the base for a first visit; choose a District 5/Chợ Lớn base only when the market quarter is the main focus, since central landmarks then need a separate ride. District 3 is a compromise for a museum-led stay, not a walkable bridge between both routes.',
        arrival: 'From District 1 or District 3, arrange a direct taxi or reputable ride-hail to the Bình Tây Market entrance you have confirmed with your driver. No current public-transport route or travel time is asserted here. Agree on a return pickup on a larger road before entering narrow lanes; do not assume a car can reach a temple gate or wait beside market loading.',
        sequence: 'Named market entrance → wholesale perimeter → one agreed market section → Thiên Hậu threshold → one nearby hall or craft lane → food pause → main-road pickup. Keep the loop compact and return to the same HCMC base rather than moving hotels mid-visit.',
        boundary: 'Do not photograph altars, worshippers or vendors without consent. Respect shoes, hats, dress and incense rules at each religious site.',
        stages: [
          ['Arrive · Bình Tây', 'Use the entrance agreed with the driver, orient at the market edge, and avoid delivery lanes. Check current market access before fixing an early start; the official tourism page is an overview, not a live market notice.'],
          ['Read · wholesale edge', 'Walk one clearly public section and let porters, carts and vendors keep their line. If it is crowded, stay on the perimeter rather than cutting through working rows.'],
          ['Visit · one temple', 'Continue to Thiên Hậu Pagoda and pause outside to read local entry rules. Add one hall or craft street only if the site is open and the lane remains passable.'],
          ['Exit · main road', 'Eat or rest without blocking business, then return to the pre-agreed larger-road pickup. Leave extra time for the cross-city road ride; do not add a same-morning Củ Chi transfer.']
        ],
        risks: [
          ['Working traffic', 'Market lanes carry deliveries, carts and scooters. Step aside for work and keep the route on the public edge when crowded.'],
          ['Rain and incense', 'Vietnam Tourism describes short afternoon showers in May–November, but check a local forecast. In rain, shorten the exposed lane walk; enter a temple only if it is open and welcoming visitors.'],
          ['Unconfirmed access', 'This check did not verify current Bình Tây Market hours or temple visitor rules. A closed site is a reason to return or use the next confirmed stop, not to enter another religious compound uninvited.']
        ],
        duration: 'Allow 4–5 hours including the road transfer, a slow market edge, one temple and a rest; this is a buffer estimate, not a local opening schedule. Add a second half day only for a researched craft or food focus.',
        combine: 'Pair with a District 5 food stop only when it is nearby and independently checked. Do not combine this with District 1’s full civic route or Củ Chi on one compressed day. With three HCMC nights, keep the city core and Chợ Lớn on separate days.',
        verify: 'Confirm Bình Tây access, Thiên Hậu visitor rules, festival or worship congestion, rain, a safe main-road pickup and return transfer. Vietnam Tourism’s HCMC profile and weekend itinerary were checked 13 October 2026; they describe the places but do not confirm live opening.',
        routeDiagram: {
          kind: 'flow',
          title: 'A market-to-temple loop with a protected exit.',
          intro: 'Make one direct ride outward and one deliberate pickup on the return; keep the walking section local and respectful.',
          steps: [
            ['Base', 'Choose where to sleep first', 'District 1 keeps the central landmark day easy; District 5 helps only when Chợ Lớn is the main focus. Keep one hotel for this route.'],
            ['Ride', 'Drop at a confirmed market entrance', 'Agree on the exact Bình Tây entrance and return pickup with the driver. No public route number or travel-time claim is verified here.'],
            ['Walk', 'Market edge to Thiên Hậu', 'Read the wholesale edge, then continue to Thiên Hậu and one optional nearby lane. Stop at the public threshold if entry is restricted or worship is underway.'],
            ['Return', 'Use the main-road pickup', 'End before fatigue, confirm the ride back to the same base, and do not attach a second distant district.']
          ],
          fallbackTitle: 'If rain or a closure breaks the loop',
          fallback: 'Use the next confirmed public indoor stop only if it welcomes visitors. Otherwise shorten to the market edge, skip the closed temple, and return to the base; keep the District 1 indoor chapter for a separate day.'
        },
        sources: [
          ['https://vietnam.travel/places-to-go/southeastern-vietnam/ho-chi-minh-city', 'Vietnam Tourism — Chợ Lớn, Bình Tây and Thiên Hậu overview (checked 13 October 2026)'],
          ['https://vietnam.travel/things-to-do/ho-chi-minh-city-itinerary', 'Vietnam Tourism — weekend itinerary, including Thiên Hậu (checked 13 October 2026)']
        ]
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
        reviewDate: '13 October 2026',
        isoDate: '2026-10-13',
        lead: 'Treat Củ Chi as one full road day from the same HCMC hotel, choosing either Bến Đình or Bến Dược before departure. Vietnam Tourism currently describes the two entrances as roughly 35 km and 70 km from the city respectively; that distance difference is a route-planning signal, not a drive-time promise. The site operator page timed out in this check, so current programs, entrance access, tickets and opening are explicitly unverified until confirmed directly.',
        orientation: 'Choose Bến Đình when limiting the listed road distance is the priority; choose Bến Dược only after checking its current visitor program and accepting the longer listed approach. Do not plan both entrances as one ticket or assume the official tourism directory’s old admission and hours remain current. The practical choice is a single named destination with a confirmed operator, outbound pickup, return agreement and a no-tunnel option.',
        arrival: 'Keep the entire day based in District 1 or District 3 and use a pre-confirmed operator or driver who names the selected entrance on the booking. The current transit mode, road duration and site hours were not verifiable because the operator page timed out. Do not improvise with an unconfirmed public bus connection or book a late return against an onward flight.',
        sequence: 'Confirm one entrance and the return contract → leave with a generous road buffer → take the site’s current guided interpretation → choose freely whether to enter a tunnel section → return to the same HCMC base. The 35 km / 70 km figures are the official tourism board’s listed distances checked today, not live driving times.',
        boundary: 'Follow guides and barriers, skip any activity that feels unsafe or exploitative and do not turn weapons displays, memorials or wartime suffering into entertainment.',
        stages: [
          ['Book · one entrance', 'Ask the operator to name Bến Đình or Bến Dược, the exact meeting point, current entry terms and a return time. Do not infer the site’s program from a directory listing.'],
          ['Travel · road buffer', 'Use a confirmed vehicle or tour and keep the evening free. Bến Dược is listed farther from central HCMC than Bến Đình, but traffic and weather can reverse any simple time estimate.'],
          ['Visit · choose your limit', 'Follow the guide and posted barriers. Ask before photography, take the interpretation at ground level if desired, and skip tunnels if confinement, heat or breathing makes them uncomfortable.'],
          ['Return · no onward ticket', 'Return to the same hotel and leave the night open. Do not schedule an airport, intercity bus or second attraction after the road day.']
        ],
        risks: [
          ['Confined space', 'Low ceilings, heat and darkness can trigger panic or breathing problems. Tunnel entry is optional; turning back is a complete visit.'],
          ['Operator and weather status', 'This check could not retrieve the official site operator page. Confirm that the selected entrance and road transfer are operating; if the site or road plan is cancelled, do not switch to an unverified entrance.'],
          ['Stale directory details', 'Vietnam Tourism lists hours and a price on its overview, but those figures are not adopted as current because they may lag the operator. Verify current fees, hours, access and cancellation terms directly.']
        ],
        duration: 'Reserve one full daylight day plus the evening recovery window. Do not count this as a half-day excursion: exact drive time and current on-site program were not verifiable in this source check.',
        combine: 'Keep it separate from District 1, Chợ Lớn and Cần Giờ. Two nights in HCMC give one full day, three nights give two, and four nights can fit these three chapters only if you accept no full-day buffer; five nights leave room for a weather or closure fallback.',
        verify: 'Before paying, check the official site operator page for the named entrance, current program, opening, fee, safety rules and cancellation; confirm driver pickup and return in writing. The operator page timed out on 13 October 2026 and was not bypassed.',
        routeDiagram: {
          kind: 'compare',
          title: 'Choose one entrance by the road day you can afford.',
          intro: 'The tourism board’s current listing distinguishes the two approach distances; confirm the actual visit with the site operator before booking.',
          steps: [
            ['Shorter listed approach', 'Bến Đình · about 35 km', 'Vietnam Tourism currently lists this closer entrance. It can reduce the planned road distance, but not guarantee a shorter drive or a particular visitor program.'],
            ['Longer listed approach', 'Bến Dược · about 70 km', 'Choose it only if the current official site information fits your purpose and you can keep the longer road buffer. Do not add Bến Đình by default.'],
            ['Either route', 'One named operator, one return', 'Confirm exact meeting point, access, hours, tickets and cancellation directly with the operator. This check could not read the operator website.'],
            ['Return plan', 'Back to the same hotel', 'Keep the evening empty. If weather or a closure cancels the visit, use an HCMC indoor plan whose current official access is confirmed.']
          ],
          fallbackTitle: 'If the official site or road trip is cancelled',
          fallback: 'Do not try the other entrance without confirmation. Return to the HCMC base and choose a museum only after checking its official visitor notice; otherwise keep the day local and unbooked.'
        },
        sources: [
          ['https://vietnam.travel/things-to-do/7-must-see-attractions-hcmc', 'Vietnam Tourism — two Củ Chi entrance distances (checked 13 October 2026; directory prices/hours not reused)'],
          ['https://diadaocuchi.com.vn/', 'Củ Chi Historic Relics & Tunnel Complex — official operator (timed out on 13 October 2026; reconfirm directly)']
        ]
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
        reviewDate: '12 October 2026',
        isoDate: '2026-10-12',
        sources: [
          ['https://saigonwaterbus.com/water-bus', 'Saigon Waterbus — official route map, stops and service information'],
          ['https://saigonwaterbus.com/dat-ve-truc-tuyen', 'Saigon Waterbus — official online booking: one-way tickets and current leg information; book the return separately'],
          ['https://saigonwaterbus.com/dieu-khoan-su-dung-dat-ve-va-thanh-toan-truc-tuyen', 'Saigon Waterbus — current online ticket terms, including missed-ticket and refund rules'],
          ['https://saigonwaterbus.com/lich-khoi-hanh', 'Saigon Waterbus — departure board; confirm the live service before traveling to a pier']
        ],
        searchKeywords: ['saigon waterbus timetable', 'bach dang pier', 'thanh da pier', 'linh dong terminal', 'one way waterbus ticket', 'saigon river boat return'],
        image: image({
          src: '/assets/images/vietnam-hcmc-saigon-river.webp',
          alt: 'Fishermen working on the Saigon River beside Ho Chi Minh City',
          source: 'https://commons.wikimedia.org/wiki/File:Pescadores_en_el_r%C3%ADo_Saig%C3%B3n,_Ciudad_Ho_Chi_Minh,_Vietnam,_2013-08-14,_DD_03.JPG',
          label: 'Fishermen on the Saigon River',
          creator: 'Diego Delso',
          license: 'CC BY-SA 3.0'
        }),
        summary: 'Plan the Saigon Waterbus as two separately booked one-way legs: choose a named stop such as Thanh Đa, then secure the return or a road fallback before boarding.',
        lead: 'Route #1 links Bạch Đằng with Linh Đông and calls at eight named stops, including Thanh Đa. The booking site sells one-way legs and says to book the return separately; it displays journey-specific times that can change. Online ticket terms say paid tickets cannot be refunded or exchanged, so check the live departure and return before paying.',
        orientation: 'Decide whether the river ride is the destination or a one-way connector. For a short outing, Bạch Đằng–Thanh Đa offers a defined crossing and a quieter bank-side walk; onward stops add more road and service uncertainty. A return seat is a separate decision, not an implied round trip.',
        arrival: 'Use the official route map and departure board, choose each direction separately and read the ticket terms before payment. Arrive at the named pier with time to complete its check-in process; keep a road option for the far bank.',
        sequence: 'Book the outbound and return as separate legs, ride to Thanh Đa, take one purposeful walk, then return only on a confirmed sailing. If the return is unavailable or suspended, leave by road rather than waiting on an assumed next boat.',
        boundary: 'Follow crew instructions, keep clear of working piers and stay inside marked passenger areas. The river is an active transport corridor, not a private photo platform.',
        routeDiagram: {
          kind: 'flow',
          title: 'A one-way ticket needs a return decision',
          intro: 'Use the official route and live departure board. The displayed leg duration is an estimate for that service, not a promise for another sailing.',
          steps: [
            ['Bạch Đằng', 'Choose the outbound leg', 'Confirm route #1, direction, pier and live departure; check online ticket terms before paying.'],
            ['Thanh Đa', 'Exit for one bank walk', 'Choose a short local purpose and keep the pier and next booked departure visible.'],
            ['Return booking', 'Buy the reverse leg separately', 'The official booking site sells one-way tickets; do not assume a round-trip ticket or spare seat.'],
            ['Road fallback', 'Leave if service changes', 'If the return is unavailable or suspended, use a road transfer and allow for city traffic.']
          ],
          fallbackTitle: 'Before paying online',
          fallback: 'The current online terms say paid tickets are not refundable or exchangeable. Confirm the departure, return and service status first; if the timing is uncertain, verify at the official counter before choosing a ticket.'
        },
        arrivalLabel: 'Two-leg ticket plan',
        boundaryLabel: 'Passenger corridor',
        stages: [
          ['Confirm both legs', 'Check the official map, live departures and one-way ticket terms. Reserve the return before treating Thanh Đa as a round trip.'],
          ['Board at Bạch Đằng', 'Match the ticket to the named pier and direction; use the crew’s boarding instructions and keep the river edge clear.'],
          ['Walk one bank', 'Use Thanh Đa for one short local visit rather than adding stops that make the booked return fragile.'],
          ['Return or switch', 'Arrive early for the confirmed sailing. If it is suspended or no return ticket is available, leave by road and allow traffic time.']
        ],
        risks: [
          ['No automatic return', 'The booking site sells one-way tickets. Without a separately booked leg, there may be no seat when you want to come back.'],
          ['Ticket terms', 'Current online terms state paid tickets are not refundable or exchangeable; a missed boat may leave both cost and transfer unresolved.'],
          ['Service interruption', 'Weather, capacity or operating decisions can disrupt departures. Keep enough time and money for a road exit from the far bank.']
        ],
        duration: 'Allow a half day for one confirmed out-and-back plan, including pier arrival, a bank-side walk and traffic fallback time.',
        combine: 'Pair with another district only when both waterbus legs are secured and the second destination has a distinct purpose.',
        verify: 'Check route #1, stop and direction, live departures, two separate ticket legs, online ticket terms, service notices and the road exit.'
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
    hubIntro: 'Plan the Mekong Delta as separate river corridors, with three decisions made before booking: where to sleep, which road leg to commit to, and which water activity can safely run. Cần Thơ is the practical first base for Cái Răng at dawn and a second local day; Bến Tre is for a slower island and coconut-craft overnight; Châu Đốc is an upper-delta and wetland stay, not a casual day trip. Sa Đéc and Cà Mau extend the map in different directions, so each needs its own transfer and time.',
    stay: 'Two nights: choose either Cần Thơ for Cái Răng plus one local day, or Bến Tre for one island/canal loop. Three nights: one in Bến Tre and two in Cần Thơ. Five nights: add two in Châu Đốc. Arrival and departure are travel days; do not split a two-night stay across several bases.',
    transfer: 'Use a scheduled coach or prebooked road car from Ho Chi Minh City; the national tourism authority describes buses linking Delta towns with Mien Tay Coach Station, but its route guide is not a live timetable. Confirm terminals, luggage and onward car or boat separately. A river departure from Cambodia is not a guaranteed border crossing: verify current carrier and entry requirements first.',
    isoDate: '2026-10-13',
    reviewDate: '13 October 2026',
    routeModelHeading: 'Choose one river base; let the upper Delta earn two nights.',
    routeModelLead: 'Two nights means one base; three can join Bến Tre and Cần Thơ; five adds Châu Đốc. These are planning shapes, not carrier guarantees. For heavy rain, a river warning or an operator suspension, drop the water leg and stay at the same base. Do not add a night road transfer after dark to rescue a missed connection.',
    hubSources: [
      ['https://vietnam.travel/things-to-do/4-memorable-days-mekong-delta', 'Vietnam Tourism — 4 Memorable Days in the Mekong Delta'],
      ['https://canthotourism.vn/en/chocairang', 'Can Tho Tourism — Cai Rang Floating Market'],
      ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — official forecasts and warnings; checked 13 October 2026']
    ],
    planner: [
      ['2 nights · one base', 'Choose Cần Thơ or Bến Tre', 'For a dawn market and city meals, use two nights in Cần Thơ, arrive the day before the boat and keep a second daylight block for one islet or garden. If coconut lanes and a hosted meal matter more, choose Bến Tre for both nights instead. Arrival and departure consume time; do not try to sleep in both towns.'],
      ['3 nights · two bases', 'Connect Bến Tre to Cần Thơ', 'Stay one night in Bến Tre for one locally confirmed ferry or island loop, then two nights in Cần Thơ. The second base puts the Cái Răng boat on a separate morning from the road transfer and leaves another daylight block for Cồn Sơn or a garden. Confirm each road and boat leg separately.'],
      ['5 nights · upper Delta', 'Add Châu Đốc, not a same-day detour', 'After Bến Tre and Cần Thơ, stay two nights in Châu Đốc. Use the arrival afternoon locally and reserve the next day for Sam Mountain or Trà Sư after checking access. This makes the upper Delta a destination instead of a rushed transfer. Keep Cà Mau for a longer trip on its own corridor.']
    ],
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
        summary: 'A two-night Cần Thơ base fits one Cái Răng dawn boat and a slower city or islet day; a one-night stop should stay market-focused and use a confirmed pickup.',
        lead: 'Cái Răng is a wholesale market, not a scheduled performance. Decide whether you want only a short pass through the river trade or the longer market-plus-islet morning; the second choice needs a named landing, an agreed return and one community visit with clear access. The market’s produce boats and breakfast sellers work for local buyers first, so watch the trading pattern without turning boats or families into a photo set.',
        orientation: 'Use two nights when you want both the market and an unhurried local day. A base near Ninh Kiều can make evening food and the riverfront easier; choose a Cái Răng stay only when your operator confirms the exact pre-dawn pickup. The Can Tho tourism page recommends 05:00–08:00 as the busiest market window, but its general time field is not a boat timetable. Treat that window as a planning cue and reconfirm activity the day before.',
        arrival: 'Reach Cần Thơ the previous afternoon and pin the departure pier, boat name and return with the operator before paying. The official city listing describes Ninh Kiều quay as about 30 minutes from the market by boat, checked 13 October 2026; that static orientation is not a guaranteed travel time. If the seller cannot identify the landing, life jackets and return plan, stay ashore rather than improvising at dawn.',
        sequence: 'Arrive by road and settle first; take one confirmed dawn boat to Cái Răng; observe the wholesale trade from a safe public boat; add only one garden, Cồn Sơn or canal stop with permission; return to town for food and rest. Keep the next road transfer on a separate daylight block.',
        boundary: 'Keep clear of working hulls and loading paths. Ask before photographing sellers, never board a trader’s boat or handle produce, and treat a garden, workshop or home as private until its host confirms a visitor route.',
        reviewDate: '13 October 2026',
        isoDate: '2026-10-13',
        sources: [
          ['https://canthotourism.vn/en/chocairang', 'Can Tho Tourism — Cai Rang Floating Market'],
          ['https://vietnam.travel/things-to-do/4-memorable-days-mekong-delta', 'Vietnam Tourism — 4 Memorable Days in the Mekong Delta'],
          ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — official forecasts and warnings; checked 13 October 2026']
        ],
        stages: [
          ['Settle', 'On the afternoon before, confirm which quay, pickup time, operator and return are included; save a Vietnamese address and a road pickup point.'],
          ['Launch', 'The city tourism page describes 05:00–08:00 as the busy window. Go only when the named operator confirms the departure and safe river conditions; do not chase an earlier boat from an unmarked landing.'],
          ['Observe', 'From the public boat, notice produce poles, wholesale loading and breakfast sellers. Keep distance from working boats, do not block their paths, and ask before taking close portraits.'],
          ['Choose one landing', 'Add one host-approved garden, Cồn Sơn visit or canal segment, then return to Cần Thơ for lunch and rest. Do not add a second island to the same short morning.']
        ],
        risks: [
          ['Window confusion', 'The official page’s busiest period is a guide, while its general opening field is ambiguous. Ask the boat operator about the actual departure and return instead of treating either as a live schedule.'],
          ['Water or weather change', 'Rain, lightning, rough water or a cancellation can make an early launch unsafe. Do not bargain for an unofficial substitute; switch to a town-side breakfast and a later Cần Thơ walk, then move the boat to another day only if the operator confirms.'],
          ['Too little recovery', 'A late road arrival followed by a pre-dawn boat makes a one-night stop fragile. If traffic erases the rest window, skip the boat or the islet add-on rather than rushing onto the river.']
        ],
        duration: 'Two nights are the more dependable first visit: arrive by road, take the market boat the next morning, and keep another daylight block for one islet or garden before leaving. One night works only as a market-focused stop when your road arrival leaves a real rest window and the next transfer can move if service changes.',
        combine: 'Use the second Cần Thơ block for either Cồn Sơn or one Binh Thuy heritage stop, not both by default. Bến Tre and Châu Đốc are separate road chapters; do not turn the market morning into a same-day multi-town checklist.',
        verify: 'Reconfirm the operator, exact landing, boat and life jackets, return time, cancellation notice, weather and any host permission. The official city page was checked 13 October 2026; it does not establish a live boat schedule or current fare.'
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
        summary: 'Give Bến Tre one night for a single confirmed island or canal loop; a day trip should choose one local pocket and keep the return to Ho Chi Minh City flexible.',
        lead: 'Bến Tre is a water-crossing and coconut-growing landscape, not one standard sampan circuit. Choose a single island or canal area, then pair it with one host-led workshop or a shaded bicycle loop. The national tourism authority’s four-day Delta guide describes a ferry to Cù Lao Long and cycling there, but it does not provide a current local ferry timetable. Treat the named island as route orientation, not a promised service.',
        orientation: 'Use Bến Tre town when you want a straightforward road arrival, meals and an onward coach; choose a homestay closer to a planned island only after the host confirms the pier, crossing and pickup. One overnight protects the local morning and avoids treating a long road transfer as sightseeing. Two nights suit travelers who want a slow cycle or a rain buffer; a same-day add-on to Mỹ Tho and Cần Thơ dilutes both places.',
        arrival: 'Travel from Ho Chi Minh City by a scheduled coach or a prebooked road car, verifying the actual drop-off and the onward ride before departure. The national tourism guide checked 13 October 2026 describes a local ferry to Cù Lao Long but not its current frequency, fare or operating status. Ask your host for the exact landing and return; if the crossing or workshop is not confirmed, plan a mainland visit and keep the overnight.',
        sequence: 'Reach Bến Tre by road before the local visit; sleep near a confirmed pickup; cross once to the chosen island or canal; cycle only the host-approved public lanes; visit one transparent coconut or brick workshop; return to town or the homestay before the next intercity transfer. Keep Mỹ Tho and Cần Thơ as separate legs.',
        boundary: 'A farm, workshop, home and ferry deck are working places, not open exhibits. Ask before entering or photographing, follow the host’s safety rules, do not handle tools or products without permission, and pay an agreed visitor fee rather than pressuring residents for unpaid access.',
        reviewDate: '13 October 2026',
        isoDate: '2026-10-13',
        sources: [
          ['https://vietnam.travel/things-to-do/4-memorable-days-mekong-delta', 'Vietnam Tourism — 4 Memorable Days in the Mekong Delta'],
          ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — official forecasts and warnings; checked 13 October 2026']
        ],
        stages: [
          ['Choose', 'Before leaving the main road, ask the host which named island or canal route is actually available and how the return works; reserve one loop, not several speculative stops.'],
          ['Cross', 'Use the landing and ferry the local operator confirms for your date. Keep bags and bicycle secure, follow the crew’s loading instruction, and do not board if weather or capacity makes the crossing unsafe.'],
          ['Explore', 'Ride or walk one public lane at a local pace, yield to residents and work traffic, then visit one workshop only with the host’s consent and a clear explanation of the fee.'],
          ['Return', 'Come back to the agreed mainland pickup with daylight and road margin. Keep the meal or homestay as a hosted exchange, then take the onward coach on a separate confirmed leg.']
        ],
        risks: [
          ['Unverified crossing', 'The public tourism article is route orientation, not a current ferry notice. If the local landing, operator or return is unconfirmed, do not build the itinerary around a crossing; use a mainland town route instead.'],
          ['Rain or heat', 'Check the national forecast before cycling. Lightning, heavy rain, flooding or slick unsealed lanes end the ride; shorten to a safe town-side meal or a covered host visit only if that host confirms access.'],
          ['Road-day squeeze', 'A late arrival from Ho Chi Minh City can erase the useful island window. Keep one overnight and drop the workshop if delayed; never add Mỹ Tho and Cần Thơ to the same day just to recover a missed stop.']
        ],
        duration: 'One night is the useful minimum if the island or canal experience matters: arrive by road, sleep near a host-confirmed pickup, and use the next daylight block for one crossing and one activity. Two nights are better when cycling slowly or keeping a weather margin. A day visit from Ho Chi Minh City should choose only one pocket and leave its return flexible.',
        combine: 'Connect Bến Tre to Cần Thơ only as a separate road leg; the three-night shape is one Bến Tre night plus two Cần Thơ nights. Mỹ Tho–Thới Sơn is a different lower-river route. Choose one instead of crossing between both areas while trying to preserve a same-day coach.',
        verify: 'Ask the host for the exact landing, current ferry or boat operator, return, bicycle route, workshop fee and permission. Check the National Center forecast and road departure terminal on 13 October 2026 source review; no current local ferry schedule or venue opening was confirmed here.'
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
        summary: 'Keep Châu Đốc for at least two nights; use three if you want separate time for the river communities, Sam Mountain and a weather-dependent Trà Sư visit.',
        lead: 'Châu Đốc is an upper-delta base where river commerce, Cham communities, Sam Mountain worship and Trà Sư wetland need different routes and conduct. Decide whether the second full day belongs to the wetland boat or to the mountain-and-town sequence; do not promise both on an arrival day. Vietnam Tourism lists the flooded forest as a seasonal attraction, but seasonal water does not confirm the park, trail or boat is operating on your date.',
        orientation: 'A town base gives access to meals and a confirmed road pickup; add a separate vehicle day for Trà Sư only after the operator and site confirm entry. Give two nights when arriving from a nearby Delta base and choosing one main outing. Allow three from Ho Chi Minh City or when you want both Sam Mountain and Trà Sư on different days. Any Cambodia crossing is a separate transport and immigration plan, not an assumed sightseeing boat.',
        arrival: 'Vietnam Tourism’s Châu Đốc page, checked 13 October 2026, describes the town as reachable by road or Mekong boat from Cambodia and gives about five hours by road from Ho Chi Minh City. That is broad orientation, not a current bus timetable, border permission or traffic estimate. Book the actual road leg, arrival terminal and local pickup separately; treat arrival day as transit and do not stack Sam Mountain or Trà Sư before settling in.',
        sequence: 'Arrive by a confirmed road leg; use the first afternoon for town orientation; on a separate daylight outing choose the Sam Mountain temples and nearby river communities; reserve another day for Trà Sư only if the site and boat route confirm access. Keep the return to town on the same agreed transport and leave border travel outside the sightseeing day.',
        boundary: 'Ask before photographing residents or entering a home, floating platform or Cham community space. Dress respectfully at active places of worship, follow local hosts, and do not feed birds or treat a religious visit as a viewpoint stop.',
        reviewDate: '13 October 2026',
        isoDate: '2026-10-13',
        sources: [
          ['https://vietnam.travel/places-to-go/mekong-delta/chau-doc', 'Vietnam Tourism — Chau Doc (checked 13 October 2026)'],
          ['https://vietnam.travel/things-to-do/4-memorable-days-mekong-delta', 'Vietnam Tourism — 4 Memorable Days in the Mekong Delta'],
          ['https://www.nchmf.gov.vn/KttvsiteE/en-US/2/index.html', 'National Center for Hydro-Meteorological Forecasting — official forecasts and warnings; checked 13 October 2026']
        ],
        stages: [
          ['Settle', 'Confirm the road drop-off and a local driver before departure; use the first afternoon for food, the riverfront and a weather check rather than a timed park booking.'],
          ['Choose the town day', 'Visit Sam Mountain’s active temples with modest clothing and the current local access instructions. Add a river or Cham-community visit only with an identified host and agreed public route.'],
          ['Check the wetland', 'Before setting out for Trà Sư, ask the site or licensed operator whether the boat and marked visitor route are open. The official tourism page lists September–November as a seasonal window, not a guarantee of water, birds or entry.'],
          ['Return or extend', 'If the wetland is operating, follow its authorized route and return to the same base before dark. If it is closed or conditions are poor, remain in town; do not search for an informal boat. Add another night if a safe reschedule matters.']
        ],
        risks: [
          ['Arrival fatigue', 'The national tourism site gives about five road hours from Ho Chi Minh City, but this is not a live service promise. If the actual transfer arrives late, drop the first outing and move it to a fresh daylight block.'],
          ['Flood or closure', 'The official seasonal window does not certify Trà Sư access. Check the forecast and same-day site/operator notice; if rain, lightning, water level or closure cancels the boat, switch to a town-side meal and public river walk only where currently open.'],
          ['Border assumptions', 'A river route from Cambodia appears in national tourism orientation, but service and immigration rules were not confirmed. Do not book a sightseeing boat as a border crossing; verify carrier, checkpoint and entry requirements with the authorities.']
        ],
        duration: 'Two nights are a practical minimum from a nearby Delta base if you choose one full outing after arrival. Use three nights from Ho Chi Minh City or when you want a separate Sam Mountain day, a separate Trà Sư day and a weather margin. One night is a transfer stop, not time to cover the river, mountain and wetland.',
        combine: 'Pair the town and Sam Mountain with one cultural or river visit. Add Trà Sư on another daylight day; do not compress it into the road arrival or into a proposed Cambodia transfer. If the park closes, retain the night and move the wetland day rather than replacing it with an unverified boat.',
        verify: 'Confirm the intercity operator, terminal, local driver, current temple access, community-host permission, Trà Sư visitor route and same-day boat status. Check the official forecast on the travel date. The official source pages were read on 13 October 2026; no live park opening, bus timetable or border service is asserted.'
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
    isoDate: '2026-10-13',
    reviewDate: '13 October 2026',
    hubCss: '/css/vietnam-phu-quoc.css?v=20261013-1',
    hubIntro: 'Phu Quoc is a connected island with separate west-town, south-boat and east-village days. First choose two, three or four nights and the actual arrival: Phu Quoc International Airport, or a dated mainland ferry to Bai Vong from Ha Tien or Rach Gia. Vietnam Tourism describes November–April as drier and May–October as the wetter, rougher-sea season; that broad pattern is context, not a forecast for your date. Dương Đông and Long Beach, An Thới, Hàm Ninh, the forest and the separate Côn Đảo archipelago each demand a different last mile and access check.',
    stay: 'Use Dương Đông as one base when the west coast, food and a flexible island pickup are your priorities. Choose a southern bed only after your exact boat operator confirms its departure point and return transfer. An east or north base fits that side’s purpose only when lodging, road pickup, food and return are verified; it can add a long cross-island leg. Two nights give one usable day, three nights allow two separate outings, and four nights protect a weather reserve. Splitting beds trades location for extra checkout and road transfers.',
    transfer: 'For an arrival by air, confirm the road pickup from Phu Quoc International Airport to the named accommodation. For a mainland ferry, use the exact-date Phu Quoc Express calendar, match the issued ticket to Ha Tien or Rach Gia and Bai Vong, arrive at the port 45 minutes early as the operator directs, then pre-arrange a separate road pickup from Bai Vong. The operator warns schedules can change with weather and operations. No island bus, taxi fare, drive time, An Thoi pier, tour pickup, public beach gate or same-day flight connection is promised here; confirm each leg with the responsible provider before paying.',
    nightPlan: {
      kicker: 'Nights, bases and weather slack',
      title: 'Count full days after the ferry or flight',
      intro: 'An arrival and departure day are transfer days. Choose one base first, then assign one purpose to each full day. Keep boat plans conditional on the forecast and operator decision.',
      options: [
        ['2 nights', 'One base, one outing', 'Stay in Dương Đông if its actual road pickup and your west-coast plan fit. Use the one full day for a verified public west-shore visit, or replace it with a confirmed mainland arrival-and-rest plan. Do not squeeze An Thoi or Ham Ninh between the arrival and departure legs.'],
        ['3 nights', 'Separate west and south days', 'Keep the same bed for both full days. Use one for a daytime Dương Đông/Long Beach plan with access confirmed; use the other for an An Thoi boat only if the operator, named departure point, route, return and travel-date sea decision are all clear. A cancelled or unclear boat becomes a town day or a reschedule, not a search for an unverified replacement.'],
        ['4 nights', 'Add an unbooked weather day', 'Three full days can hold two separate outings plus one reserve. A third outing to Ham Ninh or forest should be chosen only after its current public access and road return are confirmed. Move the boat into the reserve only after the operator re-confirms it; never route around a closure or unanswered access question.']
      ],
      footerTitle: 'Split the stay only to solve a verified transfer',
      footer: 'A south-side room is useful only when the real boat departure and ride back are confirmed. An east-side overnight is useful only when the village visit has a clear public welcome and a safe road return. Otherwise keep one Dương Đông base and accept the extra drive only after a driver confirms it both ways. Côn Đảo is a separate island trip with its own transport and nights, not a Phu Quoc day trip.'
    },
    routeModelHeading: 'Keep the island branches on different days.',
    routeModelLead: 'Arrival → confirmed base → one verified local shore or town day. An Thoi needs its own full sea day and a named operator pickup; Ham Ninh needs a separately confirmed road and public approach. Add a reserve between the boat plan and any fixed departure. When access or a closure is unknown, do not test another gate, pier, island or operator; return to the confirmed base or reschedule.',
    sources: [
      ...phuQuocSources,
      ['https://www.condaopark.com.vn/en/', 'Con Dao National Park — separate archipelago visitor information']
    ],
    sources: [
      ...phuQuocSources,
      ['https://www.condaopark.com.vn/en/', 'Con Dao National Park — separate archipelago visitor information']
    ],
    guides: [
      {
        slug: 'duong-dong-long-beach',
        name: 'Duong Dong & Long Beach Sunset Coast',
        motif: 'west-shore arrival ribbon',
        instrument: 'ribbon',
        isoDate: '2026-10-13',
        reviewDate: '13 October 2026',
        sources: [phuQuocSources[0], phuQuocSources[2], phuQuocSources[3], phuQuocSources[4]],
        image: image({
          src: '/assets/images/vietnam-phu-quoc-long-beach.webp',
          alt: 'Sunset over Long Beach on Phu Quoc Island',
          source: 'https://commons.wikimedia.org/wiki/File:Sunset_on_the_Long_Beach_in_Phu_Quoc_Island,_Vietnam,_5_March_2019.jpg',
          label: 'Sunset on Long Beach',
          creator: 'Alexey Komarov',
          license: 'CC BY-SA 4.0'
        }),
        summary: 'Build a first west-coast day around the confirmed airport or Bai Vong arrival, a named Dương Đông base and a verified public shore entry; resort frontage does not establish public access.',
        lead: 'Dương Đông is a practical first base, not proof that the whole western strand is open to walk-in visitors. Treat the town, harbor and resort-backed beach as different places with different access rules. Use the arrival day to settle into a named bed, learn the road pickup plan and find an explicitly public, currently open entry before planning a beach walk. Vietnam Tourism gives seasonal context, but neither a broad tourism page nor a hotel view establishes today’s gate, public path, swimming supervision or sunset return.',
        orientation: 'Choose one low-pressure question—town food, a public waterfront or a verified beach visit—and keep the rest optional. The airport and Bai Vong ferry port are separate arrival points, and each needs a confirmed road transfer to your lodging. A western map pin does not prove a continuous public path or a safe walk between properties. Leave daylight and pickup margin for traffic, rain and the return from the shore.',
        arrival: 'Before departure, write down your flight terminal or ferry port, lodging address, pickup contact and agreed arrival handoff. Phu Quoc Express lists Bai Vong for its mainland ferries and directs passengers to arrive 45 minutes before the scheduled sailing; its calendar is dated and can change with weather and operations. From Bai Vong, arrange a separate road ride to Dương Đông. Confirm Long Beach’s exact public entry and exit with a current responsible local source; if the answer is unclear, keep the outing in town and do not enter a resort or closed access lane.',
        sequence: 'Airport or Bai Vong → pre-arranged road pickup → Dương Đông base → market or harbor only from public edges → one locally confirmed public shore entrance → return by the pickup agreed before dusk. If any access point is not confirmed, shorten the day to town rather than trying a neighboring resort gate.',
        boundary: 'A beach visible from a resort is not proof of public access. Do not pass a gate, barrier or “private” sign; do not treat a hotel service or beach chair as available to non-guests. Do not photograph working fishers without consent, or enter water unless local authorities or a lifeguard identify the place as currently safe for swimming.',
        stages: [
          ['Arrive and anchor', 'Confirm the actual airport or Bai Vong pickup, lodging address, payment arrangement and return contact before leaving the terminal. Do not assume a ferry port taxi queue or a hotel transfer will be available without an agreement.'],
          ['Read the town', 'Use Dương Đông market or the harbor only from public visitor edges. Ask before photographing fishers, leave loading lanes clear and use the stop to settle food, water and the next day’s verified road option.'],
          ['Choose one shore', 'Ask a current local authority or host to identify the public Long Beach entrance, exit and any closed stretch. If they cannot name it, skip the beach frontage. A resort hotel’s access, facilities and lifeguard service do not transfer to public visitors.'],
          ['Return before dark', 'Agree your pickup point before walking, check rain and sea conditions locally and leave time for sunset traffic. If the route back or safe swimming status is unresolved, return to town on the confirmed ride and finish there.']
        ],
        risks: [
          ['Public entry', 'No specific Long Beach public gate, continuous public path, opening time or lifeguard service was verified on 13 October 2026. Confirm it on the visit date; never cross a resort barrier to find the shore.'],
          ['Water and weather', 'No site-level swim flag, current or surf report was verified. A calm view is not a safety signal; use the local authority or lifeguard decision and stay out when it is absent or unclear.'],
          ['Arrival and evening return', 'The airport and Bai Vong port are separate road arrivals, and sunset traffic can affect pickup. Save the exact contact, pickup point and return before you leave the town base.']
        ],
        duration: 'Treat arrival day as a transfer day. With two nights, use one full day for either the town/market or a beach only after its public entrance and return are confirmed; with three or four nights, keep the sunset coast as a separate short outing instead of joining it to a late ferry arrival.',
        combine: 'The market and public harbor edge can fit around the same west-coast base if both remain open and public. An Thoi is a separate full boat day, and Ham Ninh is a separate east-road outing. Do not place either between a ferry arrival and a fixed departure.',
        verify: 'Check the issued arrival ticket and exact port, the separate road pickup, the public Long Beach entrance and exit, signs or closure notices, water safety/lifeguard status, same-day rain and sea conditions, sunset traffic, and a confirmed return contact. If an access or safety answer is missing, stay in town.'
      },
      {
        slug: 'an-thoi-marine-park',
        name: 'An Thoi Archipelago Marine Park',
        motif: 'reef-permit chart',
        instrument: 'chart',
        isoDate: '2026-10-13',
        reviewDate: '13 October 2026',
        sources: [phuQuocSources[1], phuQuocSources[2], phuQuocSources[4], phuQuocSources[6]],
        image: image({
          src: '/assets/images/vietnam-phu-quoc-an-thoi.webp',
          alt: 'An Thoi Archipelago islands south of Phu Quoc',
          source: 'https://commons.wikimedia.org/wiki/File:Qu%E1%BA%A7n_%C4%91%E1%BA%A3o_An_Th%E1%BB%9Bi_n%E1%BA%B1m_v%E1%BB%81_ph%C3%ADa_nam_%C4%91%E1%BA%A3o_Ph%C3%BA_Qu%E1%BB%91c_-_panoramio.jpg',
          label: 'An Thoi Archipelago',
          creator: 'Tuderna',
          license: 'CC BY 3.0'
        }),
        summary: 'Keep An Thoi as a conditional full sea day: verify the named pier, boat operator, exact reef and landing, access authority, flotation, cancellation terms and return; the “Marine Park” page title does not confirm a legal boundary or permit.',
        lead: 'The An Thoi islands sit within a wider Kien Giang biosphere and marine-conservation story, but broad reserve information does not tell a visitor which reef, beach or islet is legally designated, open to landing or covered by a particular tour permit. Treat “marine park” in a package name as marketing until the responsible authority confirms the actual place and operator authorization. An island day begins with the specific departure point and return, then the sea decision; a cable-car ticket, a speedboat and a snorkeling tour are separate products, not interchangeable transfer legs.',
        orientation: 'Ask the named operator to identify every intended reef and landing in writing, who is legally responsible for the boat, what permits or site rules apply, and what happens if weather cancels the trip. Check whether the departure is actually in An Thoi and where the road pickup meets you; do not assume a resort pickup, cable-car terminal or a ticket seller is the boat pier. If the route, authority or cancellation answer is vague, choose a land day. No specific site boundary or access authorization was verifiable on 13 October 2026.',
        arrival: 'Start from your confirmed base and book a separate dated road ride to the operator’s named meeting point. Match the passenger list, ticket, boat name/contact and return arrangements before leaving. At the briefing, confirm suitable flotation, crew instructions, the exact reef/landing route, no-touch rules and the operator’s same-day go/no-go; the boat captain and relevant authority control operating decisions. A mainland ferry ticket, cable-car booking or a seller’s “park” label does not establish boat access, reef permits or a safe sea crossing.',
        sequence: 'Dương Đông or confirmed south-side bed → dated road pickup → named operator meeting point → briefing and sea decision → only the verified reef or landing → same operator back to the agreed pickup. Keep the whole day open and leave a separate buffer before a flight or mainland ferry. If the operator cancels, return to the confirmed base or reschedule; do not hunt for another pier, boat or island with unverified access.',
        boundary: 'Never stand on coral, touch or chase wildlife, collect shells or handle starfish for a photograph. Do not enter an island, reef or landing without the responsible authority’s permission. A UNESCO biosphere reference describes a large regional designation; it does not prove that a tour’s individual stop is open, licensed or outside a stricter protected zone.',
        stages: [
          ['Confirm the contract', 'Read the named operator, boat and actual meet point, route, landing, flotation, passenger limit, permits/authority contact, cancellation/refund terms and a working shore contact. If these cannot be answered, do not board.'],
          ['Take the sea decision', 'Use the operator’s and captain’s current go/no-go after the dated marine forecast is checked. The 13 October 2026 Gulf of Thailand bulletin is a historical regional snapshot only; its showers, storms and wave notes are not a forecast for your later visit or for one reef.'],
          ['Observe without contact', 'Stay with the crew, use suitable flotation and neutral buoyancy, keep fins off coral and leave wildlife alone. Do not step onto a reef or beach unless the responsible authority and operator confirm that landing is permitted.'],
          ['Return with margin', 'Take all waste back, confirm the boat reaches the same named meeting point and keep a road pickup to your base. Do not connect this weather-sensitive outing to a same-day ferry or flight. A cancelled trip stays cancelled unless the responsible operator confirms a lawful, safe alternative.']
        ],
        risks: [
          ['Sea state and dated forecast', 'The National Centre’s 13 October 2026 Gulf bulletin was regional and date-limited; it mentioned showers or thunderstorms and higher waves during storms. It cannot decide another day’s or one reef’s safety. Recheck the travel-date bulletin and accept the captain/operator cancellation.'],
          ['Boundary and landing', 'UNESCO identifies Kien Giang as a biosphere reserve but does not establish each An Thoi excursion’s boundary, public landing or permit. No exact route authorization was confirmed here; do not treat a tour label as proof.'],
          ['Operator and fallback', 'A package photo does not prove an accountable boat, working flotation, capacity, insurance, site permissions, weather cancellation or a return pickup. If any remain unanswered, keep the day on land rather than trying an unverified substitute.']
        ],
        duration: 'Reserve a full day plus a separate travel buffer. Do not put a flight, mainland ferry, airport transfer or second boat trip on the same day. Four nights make it possible to leave a genuinely unbooked reserve; they do not guarantee that a cancelled boat can move to a new slot.',
        combine: 'Only a light meal near the confirmed base can follow an early, completed return. Keep Ham Ninh, forest walks and all other boat routes on separate days. If the trip is cancelled or returns late, take the agreed road back and let the remaining plan move or end.',
        verify: 'Check the actual trip-date NCHMF marine bulletin, same-day operator/captain go-no-go, route and each reef/landing, permit or responsible authority, named departure and return point, passenger list/capacity, flotation and safety briefing, cancellation/refund terms, road pickup both ways, and a buffer before any fixed ticket. If the legal access or safe return is unknown, do not board or route around the restriction.'
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
        isoDate: '2026-10-13',
        reviewDate: '13 October 2026',
        sources: [phuQuocSources[1], phuQuocSources[2], phuQuocSources[4]],
        image: image({
          src: '/assets/images/vietnam-phu-quoc-ham-ninh.webp',
          alt: 'Long public pier extending from Ham Ninh into the coastal water of Phu Quoc',
          source: 'https://commons.wikimedia.org/wiki/File:C%E1%BA%A7u_t%E1%BA%A7u,H%C3%A0m_Ninh._Ph%C3%BA_Qu%E1%BB%91c,_Vi%E1%BB%87t_nam_-_panoramio.jpg',
          label: 'Ham Ninh pier',
          creator: 'trungydang',
          license: 'CC BY 3.0'
        }),
        summary: 'Treat Ham Ninh as a short, daylight working-village visit only after a current road pickup and public approach are confirmed; a pictured pier is not proof that visitors may enter it.',
        lead: 'Hàm Ninh is an east-coast fishing village where shoreline work, seafood and tourism meet. Vietnam Tourism includes it in Phu Quoc’s nature context, but the available official page does not confirm a visitor pier, public path, opening hours, tide table or particular seafood business. Build the visit around what residents actually welcome: a marked public edge, a meal with a clear price or a conversation with a consenting host. Do not turn a working landing into a viewing platform or assume that a long pier in a photograph is an open attraction.',
        orientation: 'Before leaving your base, ask a named host or local authority to confirm the exact public approach, current opening/access and a road pickup both ways. The island’s east road, a village parking place and a pier are separate legs; no public bus, taxi price or reliable travel time was verified. A tide can change the shore view and footing, but this review did not confirm a current local tide table or identify a safe pier surface. If access is not explicitly clear, choose a town meal or return to the base rather than entering a work area.',
        arrival: 'From Dương Đông, the airport or Bai Vong, pre-arrange a road ride to a named, publicly welcomed village entrance and agree the exact return point and time before setting out. Do not use a guessed map pin, unlabeled pier or private driveway as an entrance. Carry only what you need, keep cash as a convenience rather than an assumed requirement, and arrive in daylight. Ask permission before photos; follow signs and resident direction if work, weather or a closure changes the approach.',
        sequence: 'Confirmed road pickup → named public village edge → observe the shoreline only where residents allow → choose a clearly priced and hygienic meal if a business is open → check the agreed return while there is daylight. Skip the pier and seafood stop if no public invitation or safe access is confirmed; do not walk around a barrier to make the itinerary work.',
        boundary: 'Hàm Ninh is a living work and home area. Do not enter a working pier, landing site, home, boat or restaurant prep space without explicit permission; do not photograph people or handle live animals without consent. A Vietnam Tourism mention is destination context, not a current operating permit or public-access notice.',
        stages: [
          ['Confirm the approach', 'Have the host or local contact name a public entrance and pickup point before the road ride. The National Park overview is not a village visitor timetable, and the tourism article does not publish a public pier map or hours.'],
          ['Read the working shore', 'Stay on the signed, permitted edge and leave boat loading, nets, residents and road space clear. Ask before making a photograph and accept “no” without following someone into the work area.'],
          ['Choose a meal, not a performance', 'If a restaurant is open, check the displayed price and safe food handling, then eat as an ordinary guest. Do not request live-animal posing or assume a particular market, menu or product is available that day.'],
          ['Return in daylight', 'Check rain, road condition and the pickup time with your driver before you leave the village. There is no verified local tide or pier-safety bulletin here. If the route, weather, access or return is unclear, leave by the agreed road rather than seeking a second pier.']
        ],
        risks: [
          ['Unknown public access', 'No current official source verified a public Ham Ninh pier, opening time, visitor route, local tide table or a right to enter a working landing. Ask for the permitted route; a closure or unanswered question is a reason to stop.'],
          ['Road, weather and food', 'A road pickup, return and same-day weather plan need direct confirmation. Restaurant opening, menu, hygiene, price and local product availability are not established by a tourism mention.'],
          ['Privacy and work', 'Homes, boats and unloading are not scenery. Obtain consent before photographing, keep working passages clear and leave when residents indicate the area is closed or busy.']
        ],
        duration: 'Allow a daylight half day only after the road ride, public entrance and return are agreed. Do not plan an evening meal at a remote village as a transport assumption. An overnight on the east side makes sense only when lodging, food and a return ride are individually confirmed.',
        combine: 'A forest or stream visit may also use the island interior or east side, but its park entrance and guide conditions are separate; do not assume the same driver, road or gate serves both. Keep this village visit and a remote trail as different day plans unless the local providers confirm the transfers and hours.',
        verify: 'Check the exact public entrance and whether the village welcomes visitors that day, any signs/closure, daylight road ride and pickup both directions, current rain and local road advice, whether the selected meal is open with a clear price, photo consent, and a safe return. No pier hours or current tide information is verified here. If access is unknown or denied, do not enter or try another pier.'
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
