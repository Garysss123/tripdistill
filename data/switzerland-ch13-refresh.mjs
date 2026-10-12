import { switzerlandImageManifest } from './switzerland-image-manifest.mjs';

const date = '12 October 2026';
const isoDate = '2026-10-12';

const official = {
  rhb: ['https://www.rhb.ch/en', 'Rhaetian Railway — RhB network and service information'],
  sbb: ['https://www.sbb.ch/en', 'SBB — date-specific rail connections'],
  meteo: ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss — forecasts and warnings'],
  gorgeArrival: ['https://www.rheinschlucht.ch/en/plan/arrival/', 'Rhine Gorge Association — rail and bus arrival'],
  gorgeTicket: ['https://www.rhb.ch/en/regional-passes/rhine-gorge-ticket/', 'RhB — Rhine Gorge ticket and transport area'],
  gorgeFlims: ['https://www.flimslaax.com/en/outdoor-activities/natural-phenomena/rhine-gorge', 'Flims Laax — Rhine Gorge access, paths and viewpoints'],
  davosMountains: ['https://www.davosklostersmountains.ch/en/mountains', 'Davos Klosters Mountains — live lift and mountain information'],
  davosParsenn: ['https://www.davosklostersmountains.ch/de/mountains/berge/parsenn', 'Davos Klosters Mountains — Parsenn access and activities (German)'],
  davosTown: ['https://www.davos.ch/en', 'Davos Klosters Tourism — town and visitor information'],
  arosa: ['https://arosalenzerheide.swiss/en', 'Arosa Lenzerheide — current mountain and resort information'],
  arosaPlanner: ['https://maps.arosalenzerheide.swiss/en/tourplanner/', 'Arosa Lenzerheide — route planner and trail information']
};

export const switzerlandCh13ClusterRefresh = {
  reviewDate: date,
  isoDate,
  tagline: 'Chur is the rail hinge; Rhine Gorge, Davos and Arosa are separate corridor days with different weather and return decisions.',
  hubIntro: 'Graubünden is a canton of branching valleys, not a compact sightseeing circuit. Chur is the practical rail and overnight hinge; the Rhine Gorge, Davos and Arosa each leave that hinge by a different route and need their own day. Choose one branch, identify its return station or descent before departure, and use Chur’s old-town streets when mountain visibility, trail status or seasonal operations remove the reason to travel higher.',
  stay: 'Two nights in Chur can hold arrival, a focused old-town loop and one full excursion day; three nights make room for two branches with one flexible day between them. Sleep in Davos for two or three nights when Parsenn or another Davos mountain system is the main purpose, and in Arosa when you want more than a village-and-lake stop. A Chur hotel near the station favors rail departures; an old-town stay favors evenings but adds a luggage walk. In Davos, match the hotel to Dorf or Platz and the intended lift; in Arosa, check the hotel’s station approach before booking.',
  transfer: 'Use RhB as the regional spine and SBB to compare the exact date and return. Chur–Arosa is its own branch; Davos is reached through the Landquart corridor; the Rhine Gorge rail line runs between Reichenau-Tamins and Ilanz, with PostBus and local buses serving other access points. The Rhine Gorge Association describes RhB service through the gorge as hourly, but use the current date-specific planner rather than treating that general pattern as a departure promise. A trailhead, exit station, lift and onward bus are separate legs: save each one before leaving Chur.',
  season: 'Valley streets remain the robust layer, while high lifts, snow routes, summer trails and gorge paths follow different operating calendars. Shoulder seasons can leave a scenic rail corridor open while a lift or marked path is closed. Rain can make gorge paths slippery; wind, cloud and snow can change the safe choice on Parsenn or above Arosa. Check the chosen operator, local trail notice and MeteoSwiss forecast for the actual elevation on the morning of the trip.',
  fallback: 'Keep Chur’s station-side old town as the dependable plan: shorten the outdoor loop, choose an indoor stop only after confirming its current opening, and return by a checked local train. If the rail line is operating but the gorge trail is not, ride through the gorge without leaving the train. In Davos or Arosa, switch to a confirmed open valley or village activity; do not replace one closed lift with another unverified mountain system.',
  sources: [official.rhb, official.sbb, official.meteo, official.gorgeArrival, official.davosMountains, official.arosa],
  faq: [
    ['How many nights fit Chur and the mountain branches?', 'Two Chur nights suit the old town plus one full corridor day. Three let you keep two different branches and move one around the forecast. Choose a Davos or Arosa overnight when the mountain area itself, rather than a single day trip, is the priority.'],
    ['Can I visit the Rhine Gorge, Davos and Arosa in one day?', 'No useful plan treats them as one loop. Pick one branch from Chur, save the return connection and leave the other two for separate days; the canton’s short map distances hide different rail corridors and last-mile access.'],
    ['What is the safest weather alternative?', 'Keep the Chur old town and a checked rail ride as the low-elevation plan. For any gorge walk or mountain lift, verify the specific path or lift status separately; a train journey or valley forecast does not establish trail safety above it.']
  ]
};

export const switzerlandCh13GuideRefresh = {
  'chur-rhine-gorge': {
    diagram: switzerlandImageManifest['graubunden-corridors/corridor-choice-diagram'],
    reviewDate: date, isoDate,
    summary: 'Join Chur’s station-side old town to one Rhine Gorge segment: ride the RhB through the gorge, walk the published Valendas–Versam section, or use a named viewpoint approach, but never improvise the exit.',
    access: 'Start at Chur station. The RhB runs through the gorge between Reichenau-Tamins and Ilanz; Valendas-Sagogn and Versam-Safien are useful rail gateways for a selected walk. The Flims Laax visitor page describes the Valendas–Versam hike as about 1.5 hours, an operator-published estimate rather than a guaranteed pace. Confirm the exact station pair, trail status and both rail legs in SBB before leaving Chur.',
    tradeoff: 'The gorge is a landscape to enter by a deliberate rail or signed trail plan, not a single roadside viewpoint. A train-only out-and-back preserves the scenery with less walking; the Valendas–Versam walk adds river-level texture but commits daylight and a fixed exit. A Flims Waldhaus–Il Spir approach reaches a high viewpoint on a separate path and is not a substitute for walking along the river.',
    fallback: 'If rain, a closure, wet rock or a warning makes the chosen path unsuitable, keep the Chur old-town loop and take the RhB through the gorge only if the date-specific service fits a clean out-and-back. Do not use the riverbank or a map line to invent an alternate exit. In warm months, stay on marked paths and respect the posted 1 April–15 July gravel-bank wildlife restriction.',
    duration: 'Allow two to three hours for Chur’s compact old town. Adding the published Valendas–Versam walk, rail transfers, a meal and the return makes a full day; treat the operator’s roughly 1.5-hour walk figure as a planning reference, not a personal-time or trail-condition promise.',
    combine: 'Pair the gorge with Chur before or after only when the saved return leaves daylight for both. Keep Arosa and Davos on separate days; they are different rail branches, not nearby stops to stack onto the gorge.',
    verify: 'Use the Rhine Gorge Association’s arrival page to understand the rail and bus gateways, the Flims Laax page for the selected path and platform, RhB for the transport area, SBB for date-specific trains, and MeteoSwiss for rain and warnings. Verify both ends before starting.',
    choices: [
      ['Chur + rail-only gorge', 'Walk the old town, then ride the RhB through the gorge and return by a checked train. Choose this when weather or mobility makes a trail commitment unattractive.'],
      ['Valendas–Versam walk', 'Use the two named rail gateways around the published river-side section. It adds the most direct walking connection, but only when the path and both train legs are confirmed open and practical.'],
      ['Flims Waldhaus + Il Spir', 'Approach the viewpoint from Flims Waldhaus on its named hiking path, with the lake and Conn as optional context. This is a different access chain from the station-to-station gorge walk; check the trail and return bus.']
    ],
    stages: [
      ['Read Chur before leaving', 'From Chur station, make one old-town loop through the historic center; decide whether the remaining daylight still supports a gorge extension.'],
      ['Choose one entry and one exit', 'Select either the rail-only ride, Valendas-Sagogn to Versam-Safien walk, or the Flims Waldhaus viewpoint approach. Save the exact station or bus stop at both ends.'],
      ['Commit only to the checked route', 'Follow current signs and closures. If the path is wet, closed or difficult to verify, remain on the train or stop the walk; do not descend to the river as a shortcut.'],
      ['Return through the named gateway', 'Reach the chosen station or bus stop with margin and take the saved service back toward Chur. Keep Arosa and Davos for another day.']
    ],
    watch: [
      ['A missing exit', 'The gorge’s steep sides limit casual crossings. Name the finishing station before entering the trail.'],
      ['Rain and exposed viewpoints', 'Wet paths, wind and cloud change the risk. Islabord and Spitg have seasonal access notes; Spitg’s approach is partly exposed. Recheck the operator page.'],
      ['Wildlife and public paths', 'Use marked trails only, do not bike on the riverside hiking path, and stay off signed nesting-bird gravel banks during the posted restriction period.']
    ],
    sources: [official.gorgeArrival, official.gorgeFlims, official.gorgeTicket, official.rhb, official.sbb, official.meteo],
    fieldContext: {
      heading: 'Three access systems share a name but do not share an exit.',
      cards: [
        { title: 'Rail through the gorge', copy: 'The Rhine Gorge Association identifies Reichenau-Tamins and Ilanz as the line’s rail endpoints and describes service as hourly. Treat that as general orientation; the current SBB/RhB result decides whether your particular out-and-back works.', sources: [0, 3, 4] },
        { title: 'Valendas–Versam on foot', copy: 'Flims Laax publishes an approximately 1.5-hour walk between Valendas and Versam. Put both rail gateways into the date-specific planner and add time for the walk, stops and return; the published estimate does not guarantee surface condition or personal pace.', sources: [1, 2, 4] },
        { title: 'Il Spir from Flims Waldhaus', copy: 'The visitor page describes an approximately 45-minute, pram-friendly hiking approach from Flims Waldhaus to Il Spir and says the platform is open year-round. The walking route, nearby facilities and bus return still need a current check.', sources: [1] }
      ]
    },
    faq: [
      ['Is Valendas–Versam a guaranteed 90-minute hike?', 'No. Flims Laax publishes an approximate 1.5-hour route estimate. Weather, surface, pauses and personal pace vary; check the current trail notice and allow time to reach the correct stations and return.'],
      ['Can I see the Rhine Gorge without hiking?', 'Yes. A date-checked RhB ride through the gorge is a valid low-walking plan. Choose the endpoints and return first, and stay on the train if a trail or exit is not confirmed.'],
      ['What should replace the gorge walk in rain?', 'Use Chur’s old town and, if the railway is operating and the exact-date return works, a train ride through the gorge. Skip wet or closed paths rather than improvising a shorter river exit.']
    ]
  },
  'davos-parsenn': {
    reviewDate: date, isoDate,
    summary: 'Make Davos a deliberate overnight or full-day destination, match your hotel to Davos Dorf or Platz, and use Parsenn only when the exact lift, terrain and upper-mountain forecast fit your activity.',
    access: 'RhB reaches Davos through Landquart. Davos Dorf and Davos Platz are separate station anchors; the Parsennbahn starts from the Dorf side, while a Platz hotel needs its own local connection. Check the current Davos Klosters lift and area status before choosing ski terrain, a summer path or a viewpoint, then save the descent and rail return.',
    tradeoff: 'Sleeping in Davos removes a long same-day rail approach and gives a more forgiving start for mountain plans, but adds a hotel change if Chur is the main base. Staying in Chur works for one carefully chosen excursion day; it is a poor reason to cram Parsenn together with Arosa or the Rhine Gorge.',
    fallback: 'If Parsenn is closed, clouded in or unsuitable for your experience, keep the day in the valley: choose an open town or lakeside block, or a specific museum only after checking its current calendar. A different Davos lift is a new access and weather decision, not an automatic replacement. If you came from Chur, return only on the rail plan you have checked.',
    duration: 'Reserve most of a day for Parsenn from Chur, including both rail legs, the approach from the correct Davos station, time at elevation and a conservative descent. From an overnight base, use the saved last descent to set the day’s turnaround. A valley-only Davos visit is a separate, shorter plan.',
    combine: 'Pair Parsenn with a Davos evening or a second night in the resort. Do not add the Rhine Gorge or Arosa the same day; the elevation block and return to the correct station already define the itinerary.',
    verify: 'Check Davos Klosters Mountains for the exact lift and live area status, RhB/SBB for the rail and return, MeteoSwiss for the mountain forecast and the local operator’s trail or snow information for your activity. A lift being open does not mean a trail or off-piste route is suitable.',
    choices: [
      ['Parsenn mountain day', 'Choose one current ski, walking or viewpoint plan that fits the operating season, equipment and forecast. Begin at the correct lift approach and keep the last descent in view.'],
      ['Davos valley day', 'Keep the town and a verified lower-elevation walk or open lake-side block. It gives up the high panorama but works when upper lifts or trails do not.'],
      ['Davos overnight', 'Stay near the station and local approach that match your primary activity. This costs another hotel night but avoids turning the mountain window into a long commute from Chur.']
    ],
    stages: [
      ['Choose Dorf or Platz as your anchor', 'Match the hotel, RhB station and intended Parsenn approach before packing. Do not plan from the word “Davos” alone.'],
      ['Check the mountain you will actually use', 'Open the live operator status and the correct season’s trail or snow information, then compare the upper forecast with your ability and equipment.'],
      ['Commit to one elevation block', 'Use the open route you selected, shorten it when cloud or conditions deteriorate, and keep the last usable descent visible.'],
      ['Return by the matching connection', 'Reach the lift with margin, then use the saved local transfer to Davos Dorf/Platz or the checked onward RhB train.']
    ],
    watch: [
      ['Two station names', 'Davos Dorf and Platz do not describe one platform. Confirm the hotel’s station and transfer before carrying luggage across the resort.'],
      ['Season gap', 'Lift and hospitality calendars can have shoulder-season pauses. Do not infer operation from a resort’s general opening page.'],
      ['Lift versus route status', 'A running lift is not a trail-safety report. Check weather, route surface, snow notices and your own equipment separately.']
    ],
    sources: [official.davosMountains, official.davosParsenn, official.davosTown, official.rhb, official.sbb, official.meteo],
    fieldContext: {
      heading: 'Davos has a transport base, a lift gate and a terrain choice.',
      cards: [
        { title: 'Dorf or Platz', copy: 'Use the hotel and exact train stop that match your day. The operator page distinguishes the Davos and Klosters Parsenn/Gotschna approaches; local rail and bus connections still need a date-specific check.', sources: [1, 2, 3] },
        { title: 'Parsenn by season', copy: 'The operator presents Parsenn as both a winter sports area and a summer mountain destination. Those activities have different routes and equipment; select one from the live status rather than transferring a winter description to a summer hike.', sources: [0, 1] },
        { title: 'Town-level recovery plan', copy: 'Keep a valley option for cloud, wind or maintenance. Davos Tourism is the lookup point for current town services; confirm any museum or venue opening directly before building it into a rainy-day plan.', sources: [2, 5] }
      ]
    },
    faq: [
      ['Should I sleep in Chur or Davos?', 'Use Chur for one rail excursion and an old-town base. Sleep in Davos for two or more outdoor days or when the forecast may shift your mountain window; match the hotel to Dorf or Platz and your intended lift.'],
      ['Can I hike Parsenn whenever the lift runs?', 'No. Lift status, trail status, weather, snow and equipment are separate checks. Use the operator’s live information and the specific route notice before committing to an exposed path.'],
      ['What is the low-weather alternative?', 'Stay in Davos’s lower valley, choose only a confirmed open indoor venue or take a checked train back toward Chur. Do not switch to another mountain without checking its own operation and forecast.']
    ]
  },
  'arosa-line': {
    reviewDate: date, isoDate,
    summary: 'Let the RhB Chur–Arosa line shape a full day: choose a village-and-lake visit or one currently operating mountain area, then return on the train you saved before exploring.',
    access: 'Board at Chur station for the RhB branch to Arosa. The railway journey is part of the day, not a quick local hop; once in Arosa, the station-to-village walk, local bus, lift and trail are separate legs. Check the exact train pair first, then use Arosa Lenzerheide’s live mountain information and route planner for the activity you intend to do.',
    tradeoff: 'Arosa is a self-contained resort basin with a scenic rail arrival. A village-and-lake visit avoids a lift commitment but still needs weather-appropriate paths; adding a mountain lift increases exposure and makes the return margin more important. The rail ride consumes meaningful time in both directions, so the Rhine Gorge or Davos does not belong on the same day.',
    fallback: 'If cloud, rain or a seasonal pause removes the mountain activity, keep a short village visit only if the station approach and local paths are suitable, then return on the saved RhB train. If even that is unappealing, use Chur’s old town instead of traveling up just to wait indoors. Check local service notices before changing the route.',
    duration: 'Give the trip most of a day from Chur: count both rail legs, the station-to-village connection, a meal and a return buffer. A single village-and-lake block is the shorter version; hiking or a lift needs a larger weather and daylight margin.',
    combine: 'Pair with Chur in the evening only if the return leaves time to eat and settle. Keep Davos and the Rhine Gorge for different days; changing valleys adds transfers without improving the Arosa visit.',
    verify: 'Check RhB/SBB for exact-date trains and the planned return. Check Arosa Lenzerheide’s live lift status and route planner for the chosen mountain or path, then compare the Arosa forecast with MeteoSwiss. Do not infer a trail, lift or local bus is operating from the railway being open.',
    choices: [
      ['Rail + village + lake', 'Use the train as the main scenic element, then take a compact village and lakeside block on a path confirmed open for the day. This is the lower-commitment Arosa plan.'],
      ['One mountain system', 'Add one operating lift and a route suited to the forecast, equipment and daylight. Skip the village loop if it would squeeze the descent.'],
      ['Stay in Arosa', 'Choose a two-night or longer Arosa base when a mountain activity is the main trip purpose and you want to move it around the weather. Check the hotel’s walk or bus approach with luggage.']
    ],
    stages: [
      ['Save the return before boarding', 'Use the date-specific RhB/SBB planner to choose the outward and return services from Chur; do not rely on an assumed last train.'],
      ['Ride to Arosa as the first activity', 'Keep the railway journey inside the day’s time budget, then orient from Arosa station before choosing a bus, lift or walk.'],
      ['Choose one Arosa block', 'Select the lake-and-village plan or one currently operating mountain area. Check route status and weather at the intended elevation.'],
      ['Reach the station with margin', 'Return by the saved connection. If the mountain plan is shortened, use the extra time for a calm village stop rather than adding a second valley.']
    ],
    watch: [
      ['Rail time is real time', 'Arosa’s map distance from Chur can look deceptively small. Count the full railway journey in both directions.'],
      ['Separate operating systems', 'Train, local bus, lift and trail notices are not interchangeable. Check the exact leg you plan to use.'],
      ['Wet, snowy or dark paths', 'The village and lake are not an all-weather promise. Follow current path notices and return before daylight or surface conditions erode the margin.']
    ],
    sources: [official.rhb, official.sbb, official.arosa, official.arosaPlanner, official.meteo],
    fieldContext: {
      heading: 'The railway gets you to Arosa; the day still needs a local choice.',
      cards: [
        { title: 'Chur–Arosa by RhB', copy: 'Plan the branch as an out-and-back rail day from Chur. The live planner determines the exact service, connections and return; the railway route itself is not a promise about what is open at the resort.', sources: [0, 1] },
        { title: 'Lake and village layer', copy: 'Arosa’s resort pages and route planner help distinguish local paths from lift-served mountain routes. Check the surface and any closure before treating the lake edge as a walkable loop.', sources: [2, 3] },
        { title: 'Lift and trail gate', copy: 'Choose one mountain area only after checking its current lift status, route, forecast and daylight. If any part fails, retain the rail journey and return rather than improvising a longer descent.', sources: [2, 3, 4] }
      ]
    },
    faq: [
      ['Is Arosa an easy add-on from Chur?', 'It is a distinct corridor day. Count the full Chur–Arosa rail journey in both directions and choose one local activity; do not treat Arosa as a quick stop between other branches.'],
      ['Can I visit the lake if the lifts are closed?', 'Possibly, if the path is currently open and suitable for weather, snow and daylight. Check the route planner and local notices; closed lifts do not prove the village path is safe or clear.'],
      ['When should I sleep in Arosa?', 'Stay at least two nights when hiking, skiing or using a mountain area is the main purpose and you want to shift that activity around the forecast. For one village-and-lake day, Chur remains a practical rail base if the return works.']
    ]
  }
};
