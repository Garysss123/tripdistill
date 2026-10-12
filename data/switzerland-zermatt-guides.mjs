import { defineSwitzerlandCluster, switzerlandGuide } from './switzerland-guide-builder.mjs';

const g = (definition) => switzerlandGuide(definition);

const zermattSources = [
  ['https://zermatt.swiss/en/plan-book/arrival/train-stations', 'Zermatt Tourism — train stations'],
  ['https://zermatt.swiss/en/p/matterhorn-terminal-taesch-01tVj000005DilCIAS', 'Zermatt Tourism — Matterhorn Terminal Täsch'],
  ['https://www.matterhorngotthardbahn.ch/en/products/zermatt-shuttle', 'Matterhorn Gotthard Bahn — Täsch shuttle'],
  ['https://www.sbb.ch/en', 'SBB — national rail planning'],
  ['https://www.gornergrat.ch/en/pages/timetable-gornergrat-bahn', 'Gornergrat Railway — timetable and service information'],
  ['https://www.matterhornparadise.ch/en/information/lifts-and-pistes', 'Zermatt Bergbahnen — lifts and pistes status'],
  ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss — mountain weather']
];

export const switzerlandZermattCluster = defineSwitzerlandCluster({
  slug: 'zermatt-matterhorn',
  name: 'Zermatt & the Matterhorn',
  region: 'Valais',
  band: 'alps',
  family: 'mountain-profile',
  reviewDate: '12 October 2026',
  isoDate: '2026-10-12',
  label: 'Car-free Alpine base · three separate mountain systems',
  tagline: 'Use Zermatt as a weather-flexible base: give Gornergrat, Sunnegga and Klein Matterhorn separate day decisions, then choose the one whose visibility and operating chain justify its time and cost.',
  hubIntro: 'Zermatt is compact on foot but its mountain days are not interchangeable. The Gornergrat Railway starts beside the main station, Sunnegga begins at an underground funicular, and Matterhorn Glacier Paradise uses a longer lift chain toward Klein Matterhorn. Build the stay around one major elevation system per day, keep a walkable village plan for cloud, and leave room to move the costly excursion when the forecast changes.',
  stay: 'Two nights suit a village visit plus one priority mountain branch, but leave little room to move it if cloud closes in. Three nights allow two mountain attempts with a lower village day between them; four nights make it realistic to consider all three systems without forcing two summit areas into one day. The station district is the easiest base for luggage and the Gornergrat platform. A hotel deeper in the village can make evenings quieter, but check its walking route, slope and luggage transfer before booking; confirm any hotel shuttle directly rather than assuming it is included.',
  transfer: 'From the Swiss mainline, use SBB to Visp and change to the Matterhorn Gotthard Bahn (MGB) for Visp–Zermatt. Drivers leave the car at the Matterhorn Terminal in Täsch and continue by the MGB Zermatt shuttle. In Zermatt, walk across the station forecourt to the Gornergrat Railway; use the signed underground entrance for the Sunnegga funicular; and check the lift-status map for the current Zermatt–Furi–Schwarzsee–Trockener Steg–Matterhorn Glacier Paradise chain. These are separate operators and departure points, so do not plan a cross-mountain transfer as if there were one shared platform or ticket.',
  season: 'The village remains useful in every season, while the Five Lakes Trail, individual lifts and high-altitude visitor areas have different operating windows. Zermatt Bergbahnen and Gornergrat publish date-specific service and maintenance information; snow, wind, visibility and trail condition can change which branch is sensible even when the village is clear. The operator currently lists June–September as the Five Lakes Trail season, but that is a planning cue, not confirmation that every lift or the route is open on a particular day.',
  fallback: 'When the upper mountain is hidden or a lift segment is unavailable, keep the day in the village: walk Bahnhofstrasse to the church square and church bridge, continue through the old village lanes, then use the Mountaineers’ Cemetery and Zermatlantis as an indoor option if current access suits. A lower walk or a slow meal can fill the gap; move the high excursion to a clearer day instead of buying elevation into cloud. If all mountain days look poor, use the extra night for a relaxed village visit rather than treating three closed or cloudy peaks as a checklist.',
  sources: zermattSources,
  faq: [
    ['How many nights make a useful Zermatt stay?', 'Two nights can fit a village visit and one priority mountain branch, three leave room to move a weather-sensitive day, and four make all three systems less rushed. Those are planning trade-offs, not a promise of clear weather or open lifts.'],
    ['Where should I stay for the easiest transfers?', 'Stay near Zermatt station when luggage handling and the Gornergrat start matter most. Choose a quieter village location only after checking the walk, slope and confirmed hotel luggage or shuttle arrangements.'],
    ['Should I book every mountain ticket in advance?', 'Check each operator’s current ticket conditions for your date, including whether a reservation, timed product or route-specific return is required. Do not assume one pass covers every segment or that bundled products remain available.']
  ],
  guides: [
    g({
      slug: 'village-gornergrat',
      name: 'Zermatt Village & Gornergrat',
      instrument: 'Matterhorn sightline profile',
      layout: 'sightline-profile',
      imageQuery: 'Gornergrat Matterhorn Zermatt Switzerland',
      imageAlt: 'Matterhorn above the rocky and grassy slope between Zermatt and Gornergrat',
      summary: 'Pair a walkable Zermatt orientation with the Gornergrat Railway when the upper Matterhorn is visible or forecast to clear. The line leaves from beside Zermatt station, so make the weather decision before buying the day’s main elevation rather than treating a village stroll and a summit railway as one fixed attraction list.',
      access: 'Arrive at Zermatt by MGB, then use the Gornergrat Railway station directly across the forecourt from the main station. Keep the walk through the village separate from the rail ticket: start on Bahnhofstrasse, loop through the church-square and old-village lanes, and return to the railway only when visibility justifies the climb. Check the live timetable and station notices for your travel date.',
      tradeoff: 'Gornergrat gives a broad high-level Matterhorn view with simple station-to-station access, but its rail ride and summit time can take most of a day. A low cloud deck can remove the main view while leaving the village pleasant. A village-first day preserves walking and museum time; it gives up the panorama but avoids spending the mountain budget before conditions improve.',
      fallback: 'If cloud covers the ridge, stay on foot: Bahnhofstrasse to Kirchplatz and the church bridge, continue into the old village timber-barn lanes, then finish at the Mountaineers’ Cemetery and Zermatlantis if the museum is open on your date. If the forecast improves later, choose a shorter rail visit and keep a clear return margin instead of attempting both a full village circuit and every stop on the mountain railway.',
      duration: 'Plan a half day for a purposeful village loop, or most of a day when Gornergrat is the anchor. Add a hike between rail stations only after checking that exact trail’s route, grade and current surface; allow time for pauses and the return train rather than using the operator timetable as a hiking duration.',
      combine: 'Pair Gornergrat with the village in the morning or evening, not with another major summit system. If you have only one clear window, compare the railway view with the longer lift chain to Klein Matterhorn before choosing; move the unused branch to another day or leave it out.',
      verify: 'Check the Gornergrat Railway timetable and service notices, SBB/MGB connections, MeteoSwiss mountain forecast and any chosen trail notice before departure. Confirm the actual final useful train down for your date, then decide where to turn around before starting a walk.',
      choices: [
        ['Village loop first', 'Walk Bahnhofstrasse, Kirchplatz and the old village before checking the upper view. Best when arrival day is short or the Matterhorn is still in cloud.'],
        ['Gornergrat on a clear window', 'Use the station across the forecourt, ride to the chosen viewpoint and return with margin. Keep this as the day’s one high-altitude system.'],
        ['Split village and rail', 'Do the village on a separate low-weather day and reserve the full day for the railway. This costs another base day but protects the panorama from a rushed connection.']
      ],
      stages: [
        ['Arrive and orient', 'From the MGB station, identify the Gornergrat entrance, hotel route and village walking loop. Store luggage before trying to fit any rail ride around check-in.'],
        ['Read the ridge before committing', 'Use the operator status and mountain forecast for Gornergrat itself. A clear village roofline is not proof that the upper panorama is clear.'],
        ['Walk the village on foot', 'Follow Bahnhofstrasse toward Kirchplatz and the church bridge, then branch into the old village lanes and timber barns. Return toward the station without doubling back along every side street.'],
        ['Ride only with a return plan', 'Board for Gornergrat when conditions support the view, keep the high stop simple, and check the return service before adding a signed trail segment. Descend early if cloud builds or anyone feels unwell.']
      ],
      watch: [
        ['Cloud inversion', 'The village and summit can have different visibility. Check a summit webcam or operator status before committing to a costly rail day.'],
        ['Trail and last train', 'Walking between railway stops adds real distance and exposure. Confirm the route status and final practical downhill service before leaving the station.'],
        ['Arrival-day luggage', 'The short map distance between station and hotel can still involve a slope or a slow baggage handoff. Settle luggage before assigning the afternoon to Gornergrat.']
      ],
      fieldContext: {
        heading: 'A village-first plan keeps the summit optional.',
        cards: [
          { title: 'Village walk', copy: 'Use the official village route as a compact sequence through Bahnhofstrasse, church-square viewpoints and the older lanes. The route remains useful when high lifts are clouded; check museum access separately.', sources: [0] },
          { title: 'Rail start', copy: 'The Gornergrat railway has its own timetable and service notices. Treat the station as a separate departure from MGB and check date-specific information before selecting a return.', sources: [1] },
          { title: 'Mainline connection', copy: 'SBB plans the network leg to Visp; MGB continues from Visp to Zermatt. Leave a transfer margin and keep the station-to-hotel luggage leg outside the sightseeing sequence.', sources: [2] }
        ]
      },
      sources: [
        ['https://zermatt.swiss/en/p/product-01tVj000005EwviIAC', 'Zermatt Tourism — village walk'],
        ['https://www.gornergrat.ch/en/pages/timetable-gornergrat-bahn', 'Gornergrat Railway — timetable'],
        ['https://www.sbb.ch/en', 'SBB — rail planner'],
        ['https://www.zermatlantis.ch/en/', 'Zermatlantis — Matterhorn Museum']
      ],
      imageTitle: 'Matterhorn above the slope between Zermatt and Gornergrat',
      faq: [
        ['Can I combine the village and Gornergrat in one day?', 'Yes, if the village loop stays compact and the railway is the day’s main mountain decision. Give the full old-village circuit another block when you also want museum time or a longer walk.'],
        ['Where does the Gornergrat train leave from?', 'Its station sits across the forecourt from Zermatt’s main railway station. Check current platform and service notices on the operator timetable before travel.'],
        ['What is the best cloudy-day alternative?', 'Walk the village center and old lanes, then check Zermatlantis access for your date. Keep the higher railway for a clearer window instead of assuming the village forecast applies at the summit.']
      ]
    }),
    g({
      slug: 'sunnegga-five-lakes',
      name: 'Sunnegga & Five Lakes',
      instrument: 'sun terrace route fan',
      layout: 'route-fan',
      imageQuery: 'Sunnegga Five Lakes Zermatt Matterhorn Switzerland',
      imageAlt: 'Matterhorn reflected in Stellisee beneath sunset clouds',
      summary: 'Choose between the Sunnegga viewpoint and the full Five Lakes walk only after checking the lift chain and trail condition. The official route descends from Blauherd past Stellisee, Grindjisee, Grünsee, Moosjisee and Leisee to Sunnegga, so the end point and return funicular belong in the plan before you start.',
      access: 'From Zermatt, use the underground Sunnegga funicular and the onward lift connection to Blauherd when operating. The Five Lakes Trail is a point-to-point mountain walk, not a loop that returns to its start: the operator lists Blauherd–Stellisee–Grindjisee–Grünsee–Moosjisee–Leisee–Sunnegga. Confirm the date-specific lift chain, trail notice and any route ticket terms before leaving the village.',
      tradeoff: 'Sunnegga is the lower-commitment choice for a viewpoint, Leisee visit or short walk. The complete trail is about 9.8 km and rated moderate by the operator, with an official walking estimate of 2 hours 30 minutes and 454 m of elevation change; that estimate does not include your photo stops, breaks or delays. The long route adds lake variety but uses more daylight and legs, and can be a poor fit when the trail is wet, snowy or exposed to heat.',
      fallback: 'If any trail section is closed, snow-covered or uncomfortable, do not improvise an unmarked shortcut between lakes. Keep the visit to Sunnegga’s accessible viewpoint or return by the lift route confirmed for that date. If the upper chain is not running, use the Zermatt village walk and move the lake day; the operator currently lists June–September for the Five Lakes season, but day-specific opening still needs checking.',
      duration: 'Allow a large half day for the full walk, including ascent to Blauherd, breaks and the Sunnegga descent. The operator’s route estimate is a reference rather than a personal pace guarantee. A viewpoint-only visit can fit a shorter block, while adding another summit system usually makes the day feel compressed.',
      combine: 'Pair the short Sunnegga visit with a relaxed village evening. Keep Gornergrat and Matterhorn Glacier Paradise for different days so the walk can end with the Sunnegga return rather than a race to another lift or train.',
      verify: 'Check the Five Lakes Trail page for route and seasonal notes, the Zermatt Bergbahnen lifts-and-pistes status for both the Blauherd approach and Sunnegga return, and MeteoSwiss for wind, heat, thunderstorms and visibility. Confirm ticket scope and the last return lift on the date you travel; no schedule or bundled ticket is assumed here.',
      choices: [
        ['Sunnegga viewpoint', 'Take the funicular for a high viewpoint and a short, self-selected walk. Choose this when time, mobility or trail conditions do not support the full traverse.'],
        ['One-lake out-and-back', 'Pick a single lake only after checking the exact lift access and return route. Turn around while there is still time for the planned descent.'],
        ['Blauherd to Sunnegga', 'Walk the full signed sequence through all five named lakes when the route is open, weather is suitable and your group is ready for a mountain trail.']
      ],
      stages: [
        ['Check both ends', 'Confirm that the lift to Blauherd and the return from Sunnegga fit your date. The walking route does not end where it begins.'],
        ['Ride Sunnegga to Blauherd', 'Use the published lift chain and check conditions again at the top. If cloud, wind or trail notices change the plan, stay at the viewpoint or descend.'],
        ['Follow the lake sequence', 'Walk Blauherd–Stellisee–Grindjisee–Grünsee–Moosjisee–Leisee–Sunnegga on the signed path. Carry water, sun protection and a layer; pause without blocking the path.'],
        ['Finish at Sunnegga', 'Take the return funicular only if operating. If you shorten the walk, use a signed return route and a confirmed lift rather than aiming for a different valley station by guesswork.']
      ],
      watch: [
        ['Season and snow', 'The operator lists June–September as the Five Lakes season. Snow, maintenance or trail conditions can still affect an individual date, so verify before setting out.'],
        ['One-way route confusion', 'The trail begins at Blauherd and ends at Sunnegga. Check the walk direction and lift/ticket legs, not just the phrase “Five Lakes”.'],
        ['Exposure and pace', 'The official duration excludes your breaks and personal pace. Turn around or shorten the day if heat, wet ground, fatigue or weather reduces your margin.']
      ],
      fieldContext: {
        heading: 'Plan the ascent and descent around the walk direction.',
        cards: [
          { title: 'Route and lake order', copy: 'Zermatt Bergbahnen describes the sequence from Blauherd through Stellisee, Grindjisee, Grünsee, Moosjisee and Leisee to Sunnegga. Use the live route notice as the final authority.', sources: [0] },
          { title: 'Sunnegga access', copy: 'Sunnegga is reached by funicular and the operator identifies Leisee and the Five Lakes Trail as separate activities. The lake walk starts higher at Blauherd, so check the connecting lift as well.', sources: [1] },
          { title: 'Lift status', copy: 'Check the operating chain and date-specific notices before choosing a start and finish. A route being described online does not confirm that the lifts or path will operate on your day.', sources: [2] }
        ]
      },
      sources: [
        ['https://www.matterhornparadise.ch/en/experience/hiking/5-lakes-walk', 'Zermatt Bergbahnen — Five Lakes Trail'],
        ['https://www.matterhornparadise.ch/en/experience/peaks/sunnegga', 'Zermatt Bergbahnen — Sunnegga'],
        ['https://www.matterhornparadise.ch/en/information/lifts-and-pistes', 'Zermatt Bergbahnen — live lift status'],
        ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss — weather']
      ],
      imageTitle: 'Matterhorn reflected in Stellisee at sunset',
      faq: [
        ['Is the Five Lakes Trail a loop?', 'No. The listed route runs from Blauherd via five named lakes to Sunnegga. Plan the lift to the start and the return from the finish separately.'],
        ['How long does the walk take?', 'The operator currently lists 9.8 km, moderate difficulty, 454 m of elevation change and a 2 hour 30 minute estimate. Treat that as its route estimate; breaks, pace, weather and trail condition change your actual time.'],
        ['When can I plan the trail?', 'The operator currently lists June–September as its best season. Check the route and lift notices for your exact date; that seasonal listing does not guarantee a specific opening.']
      ]
    }),
    g({
      slug: 'glacier-paradise',
      name: 'Matterhorn Glacier Paradise',
      instrument: 'altitude escalation board',
      layout: 'altitude-board',
      imageQuery: 'Matterhorn Glacier Paradise Klein Matterhorn Switzerland',
      imageAlt: 'Original schematic of the Zermatt village fallback and three mountain access chains; not a geographic map and not to scale',
      summary: 'Treat Matterhorn Glacier Paradise as a high-altitude outing with several lift dependencies, not simply the next Matterhorn viewpoint. Klein Matterhorn is at 3,883 metres; visibility, wind, the full operating chain and how your group responds to altitude should decide whether the summit belongs in the plan.',
      access: 'Start from Zermatt and follow the current lift-status map through Furi, Schwarzsee and Trockener Steg to Matterhorn Glacier Paradise. This is a chain of separate mountain segments, not a single valley gondola; check each leg, its transfer point and any maintenance notice before buying a ticket. The last lift down and the MGB connection back to your next base are separate parts of the return plan.',
      tradeoff: 'At 3,883 metres, the summit offers a viewing platform and indoor attractions including the Glacier Palace, but it is far higher and more exposed than the village. The experience uses a substantial part of a day and is vulnerable to cloud or wind affecting upper segments. Choose it for the high-alpine setting, not just to collect the highest viewpoint; keep the day light and avoid stacking another major ascent afterward.',
      fallback: 'If an upper lift is stopped, visibility is poor or anyone feels unwell, do not wait at altitude for conditions to improve. Descend on the open route and move the excursion to a better day. If the lift chain is not suitable, use Zermatt’s lower village walk, museum or a Sunnegga viewpoint only if its independent operator status is good; do not assume the indoor Glacier Palace is reachable when the upper lifts are affected.',
      duration: 'Reserve a broad half day or more for the complete lift chain, summit visit and return to Zermatt. Allow extra time for transfers, weather holds and the attractions you choose; do not place the excursion between tight mainline train connections or schedule another high mountain on the same day.',
      combine: 'Combine only with an easy village meal or a short walk after descending. Keep Gornergrat and the Five Lakes Trail for separate days so altitude, lift disruption and trail fatigue do not compete with one another.',
      verify: 'Before leaving the hotel, check every lift segment on the operator status page, its date-specific timetable and maintenance notices, plus the upper-mountain forecast. Read the operator’s current high-altitude and visitor-area guidance, confirm ticket validity and return legs, and follow staff instructions if conditions or health change.',
      choices: [
        ['Summit visit', 'Use the full lift chain when visibility and operating status support the 3,883-metre outing. Keep the summit block simple and leave a generous descent window.'],
        ['Stop lower on the chain', 'Use an intermediate station only when its own lift, access and activities are confirmed for the date. Do not buy the summit product by habit.'],
        ['Keep the day in the valley', 'Choose the village walk or a separately verified lower viewpoint when wind, cloud or altitude sensitivity makes the summit a poor fit.']
      ],
      stages: [
        ['Check the whole chain', 'Confirm Zermatt–Furi–Schwarzsee–Trockener Steg–Matterhorn Glacier Paradise as a connected sequence for your date. One open lower segment does not prove that the summit leg is running.'],
        ['Set the return before ascent', 'Check the upper and lower closing information, transfers and your onward MGB/SBB connection. Keep slack for queues or a service hold; do not depend on a last-minute connection.'],
        ['Keep the summit visit deliberate', 'Use the official viewing platform and visitor areas. Choose the Glacier Palace or other indoor visit only if current access is confirmed; stay within signed public areas.'],
        ['Descend when the plan changes', 'Wind, cloud, lift notices or feeling unwell are reasons to come down early. Follow staff directions and do not treat a high-altitude stop as a place to wait out symptoms.']
      ],
      watch: [
        ['Altitude response', 'The lift makes the elevation accessible, not physiologically trivial. Keep the ascent and activity conservative, and descend promptly if someone feels unwell.'],
        ['Partial lift closure', 'Conditions can differ between the valley and the upper station. Recheck the entire chain, not only the departure from Zermatt.'],
        ['Glacier-area boundaries', 'Use signed visitor spaces and current operator instructions. This guide does not describe an independent glacier crossing or off-route access.']
      ],
      fieldContext: {
        heading: 'Commit only when the altitude and lift chain agree.',
        cards: [
          { title: 'Summit and indoor visits', copy: 'The operator describes the 3,883-metre viewing platform and Glacier Palace. Confirm current access before treating either as a guaranteed fallback for poor weather.', sources: [0] },
          { title: 'Segment status', copy: 'Use the current lift-status page to check the operating chain and service notices for the day. Conditions at the village do not establish conditions at Klein Matterhorn.', sources: [1] },
          { title: 'Weather and return', copy: 'Read the high-mountain forecast before departure, then protect the descent and any MGB/SBB connection. Weather and lift operation can change after an early-morning check.', sources: [2] }
        ]
      },
      sources: [
        ['https://www.matterhornparadise.ch/en/experience/peaks/matterhorn-glacier-paradise', 'Zermatt Bergbahnen — Matterhorn Glacier Paradise'],
        ['https://www.matterhornparadise.ch/en/information/lifts-and-pistes', 'Zermatt Bergbahnen — lifts and pistes status'],
        ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss — mountain weather'],
        ['https://www.matterhorngotthardbahn.ch/en/products/zermatt-shuttle', 'Matterhorn Gotthard Bahn — Zermatt shuttle']
      ],
      faq: [
        ['How high is Matterhorn Glacier Paradise?', 'The operator lists Klein Matterhorn at 3,883 metres above sea level. The height is a real planning factor even though lifts provide access.'],
        ['Can I visit if the upper lift is closed?', 'Do not assume the summit or Glacier Palace remains accessible when a lift segment is unavailable. Check the full chain and use a lower, independently verified plan if it does not run.'],
        ['Should I combine this with another summit?', 'Usually keep Gornergrat and the Five Lakes Trail on separate days. A simple village meal after returning leaves room for the lift chain, weather changes and the altitude.']
      ]
    })
  ]
});
