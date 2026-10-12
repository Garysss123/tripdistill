import { defineSwitzerlandCluster, switzerlandGuide } from './switzerland-guide-builder.mjs';

const g = switzerlandGuide;

export const switzerlandJungfrauCluster = defineSwitzerlandCluster({
  slug: 'jungfrau-region', name: 'Jungfrau Region', region: 'Bernese Oberland high valleys', band: 'alps', family: 'valley-fork',
  label: 'High valleys · mountain rail',
  tagline: 'Choose a valley branch before buying elevation: Lauterbrunnen and Mürren, Wengen and Kleine Scheidegg, or Grindelwald and First each need their own day plan.',
  hubIntro: 'Interlaken Ost is the rail fork; Lauterbrunnen and Grindelwald are separate starting valleys, not adjacent stops on one sightseeing walk. From Lauterbrunnen, Wengernalpbahn climbs to Wengen and Kleine Scheidegg, while a cable-car/train chain or the Stechelberg bus-and-cableway route reaches Mürren. Grindelwald has its own Firstbahn valley station; Grindelwald Terminal serves a different Eiger Express connection. Choose one branch at a time and protect the return.',
  stay: 'Two nights suit one focused mountain branch with one full day; there is little weather margin. Three nights let you move one exposed outing to a clearer day. Four nights can cover the Lauterbrunnen/Mürren, Wengen/Kleine Scheidegg and Grindelwald/First branches without changing hotels every night. Stay near Interlaken Ost for the widest rail choice; choose Lauterbrunnen for the valley and Mürren approaches, Grindelwald for First, or Wengen for a car-free village evening. Keep one base for at least two nights when possible; Wengen and Mürren add a rail or cableway leg when handling luggage.',
  transfer: 'Use SBB to plan the mainline trip to Interlaken Ost, then the Berner Oberland-Bahn (BOB) to the named valley station: Lauterbrunnen or Grindelwald. From Lauterbrunnen, Wengernalpbahn (WAB) continues to Wengen and Kleine Scheidegg. For Mürren, compare the Lauterbrunnen–Grütschalp cable car plus BLM train with the valley bus to Stechelberg plus Schilthornbahn cable cars. For First, reach the Grindelwald village Firstbahn station; do not confuse it with Grindelwald Terminal and the Eiger Express. Check each dated operator timetable and the final return before leaving the base.',
  season: 'Mountain rail, cableways, footpaths and individual adventure activities publish different operating windows. A lift marked open does not establish that a high trail, lake walk, cliff walk or activity is open or safe. The 2026 First listings separate transport and activity calendars; recheck the exact item for your date. If adding Jungfraujoch, check its ticket and seat-reservation rules separately—those do not automatically apply to every valley train. Book only the specific capacity-controlled product the operator requires, and keep another day available for weather or maintenance.',
  fallback: 'When cloud covers a pass or a connection is under maintenance, keep the plan in the same accessible zone: Lauterbrunnen village and its valley floor, Wengen village, or Grindelwald below First. Use a verified bus or rail alternative only after checking the exact station and return; do not invent a walking link between closed lift stations. If the whole high-valley forecast is poor, use an indoor block in Interlaken or move the mountain day rather than paying for a hidden panorama.',
  reviewDate: '12 October 2026', isoDate: '2026-10-12',
  sources: [
    ['https://jungfrauregion.swiss/en/destination/arrival.html', 'Jungfrau Region: arrival by train and car'],
    ['https://www.jungfrau.ch/en-gb/prices-and-tickets/', 'Jungfrau Railways: prices, tickets and seat reservations'],
    ['https://www.jungfrau.ch/en-gb/grindelwaldfirst/', 'Jungfrau Railways: Grindelwald-First seasonal overview'],
    ['https://www.jungfrau.ch/en-gb/wengen/', 'Jungfrau Railways: Wengen access'],
    ['https://www.jungfrau.ch/en-gb/kleine-scheidegg/', 'Jungfrau Railways: Kleine Scheidegg access'],
    ['https://www.jungfrau.ch/en-gb/arrival-at-station-car-parks/grindelwald-terminal-railway-station/', 'Jungfrau Railways: Grindelwald Terminal'],
    ['https://www.sbb.ch/en', 'SBB rail planner'],
    ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss mountain weather']
  ],
  faq: [
    ['How many nights should I plan in the Jungfrau Region?', 'Two nights support one selected valley branch and one full outing, but leave little room to move it for cloud. Three nights allow one weather swap; four nights can cover the Lauterbrunnen/Mürren, Wengen/Kleine Scheidegg and Grindelwald/First branches from a stable base. These are planning choices, not minimum stays.'],
    ['Which base makes the transfers easiest?', 'Interlaken Ost keeps the broadest rail choices. Lauterbrunnen, Grindelwald and car-free Wengen shorten different morning approaches but serve different branches; compare the hotel’s actual station path and luggage transfer before choosing by scenery alone.'],
    ['Do I need to reserve every mountain train?', 'No blanket reservation rule is assumed here. Check the operator’s exact product and date. Jungfraujoch seat reservations are a separate summit-trip question; do not treat them as a requirement for every BOB, WAB or valley connection.']
  ],
  guides: [
    g({
      slug: 'lauterbrunnen-valley', name: 'Lauterbrunnen Valley & Mürren', instrument: 'waterfall-valley ladder', layout: 'valley-ladder',
      imageQuery: 'Lauterbrunnen valley Staubbach Switzerland', imageAlt: 'Historic Photochrom view of Lauterbrunnen village, Staubbach Falls and the valley cliffs',
      summary: 'Choose a valley-floor walk or a Mürren balcony outing; trying to combine every waterfall stop with both mountain ascent routes turns two distinct days into a transfer checklist.',
      access: 'Take the BOB from Interlaken Ost to Lauterbrunnen. Walk from the station through the village toward the Staubbach Falls area; Trümmelbachfälle and Stechelberg lie farther along the valley and need their own bus or walking plan. For Mürren, compare the cable car to Grütschalp plus the BLM train with the valley bus to Stechelberg plus Schilthornbahn. These are alternative ascent chains, not a promised open loop.',
      tradeoff: 'Sleeping one or two nights in Lauterbrunnen makes an early valley start simple; Interlaken is easier if you want to switch branches day by day. The valley-floor walk keeps the day less dependent on lift tickets. Mürren adds a car-free high-village viewpoint but also transfers and a more weather-sensitive return.',
      fallback: 'If the Grütschalp cableway/BLM chain is interrupted, check whether the Stechelberg route is running before committing to Mürren; do not assume the two sides are interchangeable. If both are unavailable or the cliffs are in cloud, keep the village and a short valley section. In rain, shorten the waterfall walk and use only confirmed bus/rail links rather than wet road shoulders.',
      duration: 'As an itinerary allowance, reserve a half day for Lauterbrunnen village and one valley section; adding Trümmelbachfälle or Mürren can fill the day. A longer walk toward Stechelberg is a separate choice, not a small detour.',
      combine: 'A short Wengen stop can fit only if the valley stays compact and the WAB return works for your date. Keep Grindelwald/First for another day because it starts on a separate BOB branch.',
      verify: 'Before leaving, check the BOB and valley bus in SBB, the current Grütschalp–Mürren and Stechelberg–Mürren operator status, Trümmelbachfälle opening information, trail notices and MeteoSwiss. Save the exact return route and station; no frequency or final departure is guaranteed here.',
      choices: [
        ['Village and Staubbach', 'Walk the village and falls viewpoint from Lauterbrunnen station; this is the lower-transfer option when cloud closes the high terrace.'],
        ['South-valley section', 'Use the bus or a signed walk toward Trümmelbachfälle and Stechelberg only after checking the attraction and return service for your date.'],
        ['Mürren balcony', 'Choose one verified ascent chain—via Grütschalp/BLM or Stechelberg/Schilthornbahn—and leave time to descend on that same operating side.']
      ],
      stages: [
        ['Arrive at Lauterbrunnen', 'From Interlaken Ost take BOB to Lauterbrunnen. Locate the valley-bus stops and both mountain-route departure points before choosing the day.'],
        ['Walk the village edge', 'Use the station-to-village/Staubbach section to read the valley scale; decide whether the south-valley stop adds enough to justify another leg.'],
        ['Commit to one elevation chain', 'If the upper village is clear and the operator confirms service, take either Grütschalp then BLM to Mürren, or the bus to Stechelberg then Schilthornbahn. Do not plan a cross-valley loop from a map alone.'],
        ['Return on the checked side', 'Start down with margin for the connecting BLM or cableway, then BOB from Lauterbrunnen. If status changes, stay in the valley rather than improvising a high trail.']
      ],
      watch: [
        ['Two ways to Mürren', 'The Grütschalp–BLM and Stechelberg–Schilthornbahn chains have different stations and operators. Verify both ends before buying or walking.'],
        ['Waterfall access is seasonal', 'Trümmelbachfälle has its own opening calendar; a clear valley forecast does not confirm the attraction is open. Check the official notice and surface conditions.'],
        ['Valley road is working access', 'Buses share the valley corridor. Use signed footpaths and stops, and do not treat the roadside as a continuous promenade.']
      ],
      faq: [
        ['Can I ride up to Mürren one way and descend the other way?', 'Only if both complete chains and their connecting services operate on your date. Compare Lauterbrunnen–Grütschalp–BLM with the bus to Stechelberg–Schilthornbahn, then confirm the last useful connection on both sides before treating it as a loop.'],
        ['Is Trümmelbachfälle a walk from the village?', 'It is farther down the valley than the Staubbach village viewpoint. Plan the signed walk or valley bus as a separate leg, and check the attraction’s seasonal opening and entry information before making it the day’s anchor.'],
        ['Where should I sleep for this route?', 'One or two Lauterbrunnen nights favor the valley and an early mountain connection. Interlaken works better when you want to change branches across several days; compare the exact hotel-to-station path and luggage burden.']
      ],
      sources: [
        ['https://jungfrauregion.swiss/en/destination/arrival.html', 'Jungfrau Region: arrival routes to Mürren'],
        ['https://www.jungfrau.ch/en-gb/arrival-at-station-car-parks/lauterbrunnen-railway-station/', 'Jungfrau Railways: Lauterbrunnen station'],
        ['https://lauterbrunnen.swiss/en/', 'Lauterbrunnen Tourism'],
        ['https://www.sbb.ch/en', 'SBB rail planner'],
        ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss mountain weather']
      ],
      fieldContext: {
        heading: 'Keep the valley floor, waterfall stops and high terrace as separate zones.',
        cards: [
          { title: 'Staubbach is the village-side starting point', copy: 'Begin with the station, the village lanes and the signed Staubbach viewpoint. That gives a compact visit without pretending the waterfall and the entire valley floor are one short walk.', sources: [1, 2] },
          { title: 'Trümmelbachfälle needs its own access check', copy: 'The falls are beyond the village core. Check the attraction’s seasonal notice first, then decide between the valley bus and a longer signed walk; keep Stechelberg only if the return leg still fits.', sources: [0, 2] },
          { title: 'Mürren is an elevation choice', copy: 'The Grütschalp route combines a cable car and mountain train; the Stechelberg route uses bus and cableway links. Pick by current status and the return you can actually make, not by drawing a loop across the valley.', sources: [0] }
        ]
      }
    }),
    g({
      slug: 'wengen-kleine-scheidegg', name: 'Wengen & Kleine Scheidegg', instrument: 'cogwheel elevation ledger', layout: 'elevation-ledger',
      imageQuery: 'Wengen Kleine Scheidegg Jungfrau Switzerland', imageAlt: 'Snowbound Kleine Scheidegg buildings below the Jungfrau massif',
      summary: 'Use Wengen as a car-free village stay, then decide whether the Wengernalpbahn ride to Kleine Scheidegg earns a full mountain day; the pass is an optional extension, not a compulsory summit.',
      access: 'From Interlaken Ost take BOB to Lauterbrunnen, then transfer to Wengernalpbahn (WAB) for Wengen. The same mountain railway continues uphill to Kleine Scheidegg; travelers starting from Grindelwald use the other WAB approach. Check the date-specific timetable and exact station before boarding.',
      tradeoff: 'One or two Wengen nights replace a day-trip transfer with a quiet car-free village evening, but luggage still follows the railway and the base is less flexible for other branches. Wengen village is a lower-commitment half-day; Kleine Scheidegg adds altitude, fare and weather dependence. Stop at the village when the pass is hidden.',
      fallback: 'If the pass is clouded, keep the village lanes, church area and signed lower viewpoints in Wengen, then descend to Lauterbrunnen for a valley-floor alternative. Do not start an unverified downhill trail as a substitute for a closed train. The Männlichen cableway is a separate seasonal option and should be used only after checking its own service and trail status.',
      duration: 'A half day is a planning allowance for Wengen village; add most of a day for Kleine Scheidegg and a deliberate walk. Treat a hike from the pass as a separate route with its own season, condition and return check.',
      combine: 'Pair with a short Lauterbrunnen block on the same BOB/WAB branch. Keep Mürren and Grindelwald/First for separate days; combining both valleys leaves little time outside the vehicles.',
      verify: 'Check BOB and WAB departures in SBB/Jungfrau Railways, the Kleine Scheidegg live operating notice, mountain weather and the exact trail’s seasonal status. If you add Männlichen, verify its separate calendar. Seat reservations for a Jungfraujoch extension are a different product; no train, trail or view is promised by this guide.',
      choices: [
        ['Wengen village', 'Stay near the station, walk the compact village lanes and use a lower viewpoint; best when clouds sit on the pass or your day is short.'],
        ['Kleine Scheidegg rail day', 'Ride WAB from Wengen toward the pass, pause only where the live timetable and visibility support the visit, then return by the checked rail branch.'],
        ['Open-trail extension', 'Choose a signed walk only after the operator and trail authority show it open and suitable; do not substitute a map line for a seasonal status check.']
      ],
      stages: [
        ['Reach Wengen by rail', 'Take BOB from Interlaken Ost to Lauterbrunnen and transfer to WAB. Wengen is car-free; settle luggage before setting off on foot.'],
        ['Walk the village zone', 'Use the station, Dorfstrasse and village-center lanes as one compact loop. Check the higher ridge view before paying for another elevation segment.'],
        ['Choose the pass or stop', 'Continue by WAB to Kleine Scheidegg only when cloud, weather, budget and the return timetable agree. Keep any trail plan separate from the train ride.'],
        ['Return before the day narrows', 'Descend to Wengen and Lauterbrunnen with a margin for the onward BOB. If rail or trail status changes, make the village the finish rather than forcing a link.']
      ],
      watch: [
        ['Car-free luggage leg', 'Wengen is reached by Wengernalpbahn. Check your lodging’s walk from the station and luggage arrangements before choosing this as a one-night stop.'],
        ['Village weather is not pass weather', 'Wengen can be clear while Kleine Scheidegg is hidden. Check the higher webcam/forecast and postpone the expensive extension if the view is absent.'],
        ['Seasonal trail substitution', 'A closed mountain train does not make a downhill path an equivalent fallback. Check official trail notices, snow and daylight, or remain in the village/valley.']
      ],
      faq: [
        ['Is Wengen reached by road?', 'Wengen is a car-free village reached by the Wengernalp Railway. Plan the final hotel leg from Wengen station and do not assume a car can deliver luggage to the door.'],
        ['Do I have to continue from Wengen to Kleine Scheidegg?', 'No. Wengen is a worthwhile village stop by itself. Treat Kleine Scheidegg as a separate high pass extension and decide after checking visibility, the WAB timetable and walking conditions.'],
        ['Can I use Männlichen as a same-day alternative?', 'Possibly, but its cableway and trails have their own operating calendars and access points. Check the current operator status before combining it with the WAB route; this guide does not assume a through connection.']
      ],
      sources: [
        ['https://www.jungfrau.ch/en-gb/wengen/', 'Jungfrau Railways: Wengen'],
        ['https://www.jungfrau.ch/en-gb/kleine-scheidegg/', 'Jungfrau Railways: Kleine Scheidegg'],
        ['https://jungfrauregion.swiss/en/destination/arrival.html', 'Jungfrau Region: rail access'],
        ['https://www.sbb.ch/en', 'SBB rail planner'],
        ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss mountain weather']
      ],
      fieldContext: {
        heading: 'Read the village rail stop and the high pass as different commitments.',
        cards: [
          { title: 'Wengen works without a summit ticket', copy: 'The car-free village has its own lanes and viewpoints. A short visit or overnight is a complete choice when weather or mobility makes the higher pass less useful.', sources: [0] },
          { title: 'Kleine Scheidegg is a pass and rail junction', copy: 'The Wengernalpbahn links the Lauterbrunnen and Grindelwald sides through the pass. Choose your approach and return before setting out; do not assume every train pattern or seasonal path is running.', sources: [1, 2] },
          { title: 'Männlichen is a separate seasonal branch', copy: 'The cableway and its walks add a distinct ridge option, not a guaranteed continuation from every WAB trip. Use it only after checking its own calendar and the weather above the village.', sources: [0] }
        ]
      }
    }),
    g({
      slug: 'grindelwald-first', name: 'Grindelwald & First', instrument: 'gondola-weather gate', layout: 'weather-gate',
      imageQuery: 'Grindelwald First Bachalpsee Switzerland', imageAlt: 'Bachalpsee and the mountain panorama on the Grindelwald-First route',
      summary: 'Give Grindelwald at least two nights if First is a priority: use one village/valley block and reserve another day for the gondola, then add Bachalpsee only when its trail is officially open and the return fits.',
      access: 'Take the BOB from Interlaken Ost to Grindelwald station. The Firstbahn valley station is in the village; Grindelwald Terminal is a separate stop for the Eiger Express route toward Eigergletscher. Follow the named Firstbahn signs or current local bus information rather than assuming the terminal is the same place. From First, use the operator’s status for the Cliff Walk, adventure activities and trail before choosing a route.',
      tradeoff: 'First combines a gondola, a viewpoint area and optional walking, but those components do not share one opening guarantee. A two-night Grindelwald base gives you a chance to shift the upper outing; a day trip from Interlaken is more flexible across valleys but adds a mainline transfer before the lift. Lower village walks remain useful when the expensive upper view is clouded.',
      fallback: 'If First is closed or hidden, keep the day in Grindelwald village and its lower valley rather than riding to a clouded station. If the gondola operates but the Bachalpsee route is wet, snowbound or closed, use only the open upper-station area and return; do not substitute a longer hike from memory. A local indoor stop is a better fallback than adding another lift blindly.',
      duration: 'As an itinerary estimate, a First ride plus the nearby Cliff Walk is a half-day shape; adding the Bachalpsee out-and-back makes it a longer mountain day and needs a separate trail check. A village-only visit can be shorter. These are planning allowances, not measured operator times.',
      combine: 'Use Grindelwald village as the start and finish around First. Keep Lauterbrunnen/Mürren and Wengen on separate days; First starts from another station and valley, so combining them reduces the weather buffer and adds transfers.',
      verify: 'Check the Firstbahn seasonal timetable, same-day weather/webcam, and separate notices for the Cliff Walk, Bachalpsee trail and each adventure activity. Compare the BOB return from Grindelwald station with the Firstbahn descent; Grindelwald Terminal/Eiger Express is not the Firstbahn. Any reservation applies only where the operator says it does.',
      choices: [
        ['Village and lower valley', 'Keep Grindelwald’s village streets and a signed lower walk as the low-cost plan when First is in cloud or its operating notice is uncertain.'],
        ['First and Cliff Walk', 'Ride Firstbahn from its village station and use the nearby viewpoint structure only when the operator reports it open and conditions suit you.'],
        ['Bachalpsee hike', 'Make the lake walk the main outing, not an add-on. Confirm the trail is open, allow a return margin and skip it if snow, wet ground or cloud changes the route.']
      ],
      stages: [
        ['Arrive at Grindelwald', 'Take BOB from Interlaken Ost to Grindelwald station. Keep Grindelwald Terminal in mind as a different stop for the Eiger Express, not the Firstbahn.'],
        ['Reach the Firstbahn valley station', 'Use the current village signs/local bus details to connect from the rail stop. Confirm you are at the Firstbahn before buying an upper-mountain product.'],
        ['Choose the upper zone', 'At First, decide between the nearby Cliff Walk, an officially open Bachalpsee route, or no hike. Let current trail status set the walking plan.'],
        ['Descend to the same valley', 'Return by Firstbahn to the village and check the BOB connection from Grindelwald station. Do not assume the Eiger Express or Terminal is a shortcut back from First.']
      ],
      watch: [
        ['Terminal-name confusion', 'Grindelwald station, Grindelwald Terminal and the Firstbahn valley station serve different routes. Match the destination name in the live planner before walking or boarding.'],
        ['Activity and lift calendars differ', 'A gondola timetable does not confirm the Cliff Walk, Bachalpsee path, zip line or carts. Check each item separately and do not treat an activity ticket as a general opening notice.'],
        ['A sunny valley can hide First', 'Check the upper mountain forecast and webcam, then protect the descent margin. If the lake trail is closed or snowy, stay near the open station area rather than improvising.']
      ],
      faq: [
        ['Is Grindelwald Terminal where the First gondola starts?', 'No. The Terminal is the Eiger Express station; Firstbahn departs from its village valley station. Check the exact stop name and local connection in the current planner before setting out.'],
        ['Does an open First gondola mean Bachalpsee is open?', 'No. Transport, the Cliff Walk, adventure activities and hiking routes can have separate seasonal notices and conditions. Confirm the exact trail for your date before committing to the walk.'],
        ['How many nights should I stay in Grindelwald?', 'Two nights give you one village/arrival block and one weather-sensitive First day without moving hotels. A day trip from Interlaken can work when you want a multi-valley base, but it adds transfers before and after the mountain outing.']
      ],
      sources: [
        ['https://www.jungfrau.ch/en-gb/grindelwaldfirst/', 'Jungfrau Railways: Grindelwald-First seasonal overview'],
        ['https://www.jungfrau.ch/en-gb/grindelwald/', 'Jungfrau Railways: Grindelwald'],
        ['https://www.jungfrau.ch/en-gb/arrival-at-station-car-parks/grindelwald-terminal-railway-station/', 'Jungfrau Railways: Grindelwald Terminal'],
        ['https://grindelwald.swiss/en/', 'Grindelwald Tourism'],
        ['https://www.sbb.ch/en', 'SBB rail planner'],
        ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss mountain weather']
      ],
      fieldContext: {
        heading: 'Do not let a clear village label decide a First mountain day.',
        cards: [
          { title: 'First is a village gondola branch', copy: 'The Firstbahn begins in Grindelwald village. Grindelwald Terminal is the Eiger Express hub; keep the station names distinct when matching your SBB itinerary to the mountain product.', sources: [0, 2] },
          { title: 'Separate the three upper choices', copy: 'The Cliff Walk is near the First station, Bachalpsee is a longer walk, and adventure activities have their own availability. Pick one useful plan after checking each current notice.', sources: [0] },
          { title: 'Use two nights to move the weather day', copy: 'A Grindelwald base reduces the extra cross-valley start and lets you place the First outing on a better forecast day. Keep the lower village route ready if the upper station remains hidden.', sources: [1, 3, 5] }
        ]
      }
    })
  ]
});
