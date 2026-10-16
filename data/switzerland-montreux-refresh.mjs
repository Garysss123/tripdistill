import { defineSwitzerlandCluster, switzerlandGuide } from './switzerland-guide-builder.mjs';

const g = switzerlandGuide;

export const switzerlandMontreuxCluster = defineSwitzerlandCluster({
  slug: 'montreux-riviera', name: 'Montreux, Vevey & the Riviera', region: 'Lake Geneva east', band: 'lakes', family: 'riviera-score',
  label: 'Riviera · lake stair · mountain line',
  tagline: 'Plan the Riviera as three separate day-shapes: the castle shore, Vevey’s compact old town, and a mountain railway that only works when the line and summit weather agree.',
  hubIntro: 'Montreux and Vevey share one shore but do not make one continuous attraction. Chillon is a date-sensitive indoor visit east of town; Vevey is a quieter station-to-market-square-to-lake walk; Rochers-de-Naye is a separate, visibility-led ascent from Montreux. Two nights can cover one castle day and one Vevey day. A third night creates a real weather buffer for the mountain rather than forcing it between fixed connections. Choose one lakeside base, use the mainline train between towns, and do not walk the full shoreline simply because the map looks short.',
  stay: 'Book two nights for a focused first stay; use three when the mountain is a priority or your arrival is late. Montreux station is the practical base for the Rochers-de-Naye departure and Chillon side of the shore, but the station-to-lake streets are steep. Vevey station suits a quieter evening, the pedestrian old town and a relaxed lakeside route; it adds a mainline rail leg to the Montreux mountain railway. Compare the exact hotel-to-platform walk, luggage slopes and late return before choosing by town name. During the Montreux Riviera Noël (20 November–24 December 2026) and the listed Montreux Jazz Festival (2–17 July 2027), check event dates and cancellation terms before committing to a room. Those are the official calendar dates checked on 12 October 2026, not a promise of future event details.',
  transfer: 'Use SBB for the Lausanne–Vevey–Montreux mainline and save the exact station for each day. From Montreux, the MOB/MVR rack railway is the direct route to Rochers-de-Naye when it is operating. Chillon can be reached by VMCV bus 201 to the stop named Chillon or by the S5 regional train to Veytaux-Chillon; the castle page currently describes a six-minute station walk. Walking the lakeside from Montreux to Chillon is a published 4 km, about 45 minutes, so make it a one-way choice rather than a mandatory out-and-back. Verify the named stop, live timetable, works, ticket and final return on the operator pages; no future departure, fare or connection is guaranteed here.',
  season: 'The lake promenade works in short sections through much of the year; exposed wind, rain and winter daylight favor a compact route. Mountain access is a separate seasonal and works gate. At review on 12 October 2026, the operator notice said no train ran between Montreux and Rochers-de-Naye from 14 September to 17 October 2026; replacement buses only served as far as Haut-de-Caux, not the summit. Montreux Riviera also announced another closure from 1 April to 21 May 2027. Recheck both notices before planning any later trip. The current official event calendar also shows high-demand festival periods; reserve the base early if your dates overlap them.',
  fallback: 'If the summit is closed, clouded or windy, do not substitute a walk on an alpine trail without checking access and conditions. Keep the day low: visit Chillon by bus or S5, or take the SBB/MOB connection to Vevey for Grande Place, the old-town lanes and Jardin Roussy. Montreux Riviera currently points to Les Pléiades as a separate mountain alternative; verify its own route, service and visibility before switching. In rain, shorten the exposed quay and move a confirmed castle or museum visit forward. If a line, attraction or booking changes, return by the live mainline plan rather than assuming a boat or bus will connect.',
  reviewDate: '12 October 2026', isoDate: '2026-10-12',
  faq: [
    ['How many nights should I book around Montreux and Vevey?', 'Two nights work for one castle-focused day and one compact Vevey walk. Choose three if Rochers-de-Naye matters: the extra night lets you move the mountain day to a clearer operating window instead of sacrificing the castle or relying on a tight same-day connection.'],
    ['Should I stay in Montreux or Vevey?', 'Choose Montreux for the direct mountain-rail departure and easier access to Chillon; choose Vevey for its station-to-old-town scale and a quieter lakeside evening. Check the exact hotel approach and slope with luggage. A Vevey base still needs a SBB/MOB rail leg to Montreux for Rochers-de-Naye.'],
    ['What is the current Rochers-de-Naye alternative?', 'At review on 12 October 2026, the direct line was scheduled to remain closed through 17 October, with replacement buses only reaching Haut-de-Caux. The official tourism page names Les Pléiades as another mountain option, but its own train, weather and return must be checked for your date. Vevey or Chillon is the lower-risk fallback.']
  ],
  sources: [
    ['https://www.montreuxriviera.com/en/', 'Montreux Riviera official trip and event information'],
    ['https://www.montreuxriviera.com/en/PA458/rochers-de-naye-in-summer', 'Montreux Riviera: Rochers-de-Naye access, altitude and works notice'],
    ['https://support.mob.ch/hc/en-ch/articles/30553443099805-Traffic-interruption-between-Glion-and-Rochers-de-Naye-September-October-2026?lang=en', 'MOB: dated Glion–Rochers-de-Naye interruption and replacement buses'],
    ['https://www.chillon.ch/en/visit/', 'Chillon Castle official opening, admission and access information'],
    ['https://www.sbb.ch/en', 'SBB date-specific national and regional rail planning'],
    ['https://www.vmcv.ch/', 'VMCV local bus information'],
    ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss current weather and warnings']
  ],
  guides: [
    g({
      slug: 'montreux-chillon', name: 'Montreux Waterfront & Chillon Castle', instrument: 'shoreline castle score', layout: 'shoreline-score',
      imageQuery: 'Chillon Castle Lake Geneva Montreux Switzerland', imageAlt: 'Chillon Castle on Lake Geneva near Montreux',
      summary: 'Make Chillon the fixed anchor and the lakefront a one-way approach or release. Use VMCV 201 or S5 for the other leg; the full Montreux–Chillon shore is about 4 km, so an out-and-back is optional, not the default.',
      access: 'Start at Montreux Gare. Choose the direct VMCV 201 to the stop named Chillon, or the S5 regional train to Veytaux-Chillon followed by the castle’s published six-minute walk. If you want the lake path, begin on the Montreux quays and walk east for the official 4 km / about 45-minute approach; use a bus or train back. Check the exact-date service, direction, works and return on SBB/VMCV before leaving.',
      tradeoff: 'Chillon rewards a slow interior visit through its courtyards, rooms and defensive levels; the promenade adds landscape and the transition from resort town to castle. Choose one walking leg to protect the castle visit. The castle has stairs and narrow passages, so a lakeside-only day is a better choice when those features do not suit your party.',
      fallback: 'In rain or strong wind, ride to Chillon and keep the exposed quay to a short Montreux segment. If your preferred entry or guided option is unavailable, use the old town and lakeside as a complete half-day rather than assuming a later castle slot. If path works affect the shore, stay on the published bus/train plan and follow signed detours.',
      duration: 'Allow about four to five hours for the castle, a meal or pause, and one shore leg; the route figures are operator-published, while the total visit time is an editorial planning estimate. Add a separate block for Vevey only if the day has room after checking the return train.',
      combine: 'Pair Chillon with a short Montreux evening or one compact lakeshore section. To add Vevey, take the mainline train rather than walking both shores. Keep Rochers-de-Naye for a different day because its line and weather need their own decision window.',
      verify: 'Chillon’s page asks visitors to book online and lists seasonal opening and last-entry times. On 12 October 2026 it showed CHF 15 adult admission (listed to rise to CHF 18 in 2027) and CHF 7 for ages 6–15; treat this as a dated snapshot, check the official ticket page for your date and discounts, and do not infer a guaranteed slot. Confirm the N201 or S5 connection and any lakeside works before travel.',
      choices: [
        ['Castle first by transit', 'Montreux Gare → VMCV 201 / S5 → Chillon; best when the interior visit or weather matters most.'],
        ['Promenade one way', 'Montreux quays → Chillon on the published 4 km lake path → return by 201 or S5; best in dry, mild conditions.'],
        ['Low-effort shore', 'Use transit both ways, visit Chillon, then keep only a short central lakeside section; easiest to shorten.']
      ],
      stages: [
        ['Choose the approach at Montreux Gare', 'Check SBB/VMCV and decide between bus 201, S5 to Veytaux-Chillon, or the one-way shore walk. Save the return option before entering the castle.'],
        ['Reach the correct entrance', 'For rail, alight at Veytaux-Chillon and follow the signed walk; for the bus, use the stop named Chillon. Do not confuse either with Montreux station.'],
        ['Give the castle a real visit', 'Choose self-guided or an available official tour, then allow time for the courtyards, interior rooms and uneven stairs. Check the current last-entry time and ticket conditions first.'],
        ['Return by the route that still works', 'Walk the shore only if it remains enjoyable; otherwise use the next practical 201 or S5 connection and finish in Montreux.']
      ],
      watch: [
        ['Last entry is not closing time', 'Opening hours vary by season and the castle publishes a last-entry time. A late promenade start can leave too little time inside.'],
        ['Stairs and strollers', 'The heritage route has many stairs and narrow passages; the castle says pushchairs cannot be used on the visitor trail. Plan the lakeside alternative for reduced mobility or a stroller.'],
        ['One-way shore assumption', 'The 4 km walk is one direction. Confirm the return bus or S5 and any path notice before choosing it.']
      ],
      fieldContext: {
        heading: 'The arrival method sets the shape of the castle visit.',
        cards: [
          { title: 'Two transit gateways', copy: 'The castle page identifies VMCV 201 to the Chillon stop and S5 to Veytaux-Chillon, followed by a six-minute walk. Use the exact stop on your chosen leg and check the return before you enter.', sources: [1] },
          { title: 'A real shoreline walk', copy: 'The official visitor page lists about 4 km and 45 minutes from Montreux to Chillon. Treat that as a one-way planning figure; the return can be by transit, and current path works may change the approach.', sources: [1] },
          { title: 'A dated entry snapshot', copy: 'As checked 12 October 2026, individual adult entry was CHF 15, with CHF 18 shown from 2027; ages 6–15 were CHF 7. Seasonal hours and last entry also vary. Recheck the live ticket page before paying or setting the day around a tour.', sources: [1] }
        ]
      },
      sources: [
        ['https://www.montreuxriviera.com/en/P4876/montreux-lakeside', 'Montreux Riviera: lakeside route and event calendar'],
        ['https://www.chillon.ch/en/visit/', 'Chillon Castle: tickets, seasonal hours, access and accessibility'],
        ['https://www.sbb.ch/en', 'SBB: date-specific S5 and regional train planning'],
        ['https://www.vmcv.ch/', 'VMCV: date-specific bus 201 planning']
      ],
      faq: [
        ['Do I have to walk from Montreux to Chillon?', 'No. Use VMCV 201 to the Chillon stop or the S5 to Veytaux-Chillon and walk the signed final section. The 4 km lakeside path is a scenic one-way option, not a required approach.'],
        ['How long should I allow inside Chillon?', 'Use a flexible visit block rather than trying to match a train by guesswork. A few hours is a practical editorial estimate for self-guided rooms and courtyards; check current last entry and tour availability before choosing a departure.'],
        ['Can I visit with a stroller or limited mobility?', 'The castle describes stairs, narrow passages and visitor-trail limits on pushchairs. Check its current accessibility page before booking; if the interior is not suitable, choose a short lakeside walk and the accessible public-transport approach instead.']
      ]
    }),
    g({
      slug: 'rochers-de-naye', name: 'Rochers-de-Naye Mountain Railway', instrument: 'rail closure and return profile', layout: 'summit-profile',
      imageQuery: 'Rochers-de-Naye railway profile schematic', imageAlt: 'Original five-language schematic of the Montreux–Rochers-de-Naye railway, route order and closure fallback; conceptual and not to scale',
      summary: 'Treat the 2,042 m summit as a date- and visibility-gated excursion, not a guaranteed panorama. The official page publishes a 55-minute rack-train ride; the line also has announced maintenance closures, so the return and a lower-altitude day must be ready first.',
      access: 'The rack railway leaves Montreux station and climbs through Glion and Haut-de-Caux to Rochers-de-Naye. Montreux Riviera currently publishes about 55 minutes to the 2,042 m destination. At review on 12 October 2026, MOB said the line was closed from 14 September through 17 October; replacement buses served Haut-de-Caux only, and no train ran to the summit. This is a service notice, not a permanent route rule: check MOB and SBB for your exact date before buying or setting off.',
      tradeoff: 'The direct ascent makes a high viewpoint possible without a complicated valley transfer, but a clear Montreux waterfront does not prove the upper station is visible. This route earns its cost only when the line is operating, the summit forecast is useful and you have kept a descent margin. In cloud, the lake shore and Chillon remain better days than an expensive ride into fog.',
      fallback: 'For the 2026 closure window or a later suspension, do not ride the bus expecting it to reach Rochers-de-Naye: the current notice says it only replaces the line to Haut-de-Caux. Montreux Riviera names Les Pléiades as a separate mountain alternative; verify that route and its weather independently. For cloud or rain, switch to Chillon or Vevey’s Grande Place, pedestrian lanes and lakefront.',
      duration: 'Treat this as a half-day to full-day block. The official tourism page lists a 55-minute climb; the total estimate also needs the return, summit conditions, food and connection buffer. Longer hiking is a different outing: check trail status, footwear, weather and daylight rather than extending the station visit by assumption.',
      combine: 'Pair the ascent with a simple Montreux dinner, not a full Chillon visit or the Vevey route. With two nights, reserve one flexible day and accept that a closure may mean no summit. Three nights make it easier to move the ascent after seeing the actual mountain forecast and operator notice.',
      verify: 'Check MOB’s line notice and the SBB/MOB exact-date journey result, then check MeteoSwiss for Rochers-de-Naye rather than only Montreux. Save the last practical descent before boarding. The official 55-minute ride figure and current closure dates can change; no future departure, fare, connection or summit view is promised.',
      choices: [
        ['Operating line + useful visibility', 'Take the direct Montreux rack railway only after confirming the exact-date service and upper-mountain forecast; keep the descent time visible.'],
        ['Line works or interruption', 'Do not treat the replacement bus as a summit connection; use Les Pléiades only after checking its separate route, or choose the Riviera below.'],
        ['Cloud or wind at altitude', 'Skip the paid ascent and keep a low route at Chillon, Montreux or Vevey; the landscape still works without a summit claim.']
      ],
      stages: [
        ['Check the summit before leaving Montreux', 'Read the current MOB interruption notice and a summit-level forecast. The town’s lake view is not a substitute for upper-station visibility.'],
        ['Confirm the departure and return', 'Use the operator/SBB journey result for the travel date, and record the latest useful descent before going to the platform. Do not copy an old departure time.'],
        ['Ride only the confirmed route', 'When running, the rack line climbs via Glion and Haut-de-Caux to Rochers-de-Naye. Keep the trip station-to-station unless current trail advice supports a separate hike.'],
        ['Use the view window, then descend', 'Spend the clearest safe period outside, shorten the visit if wind or cloud closes in, and return on the confirmed line. If service is suspended, switch to the named lowland alternative instead.']
      ],
      watch: [
        ['Summit closure is not a summit shuttle', 'The September–October 2026 replacement buses only served Haut-de-Caux. Check each later work notice; never infer that a bus reaches the summit.'],
        ['Town weather can mislead', 'At 2,042 m, wind, cloud and temperature can differ from the lake. Use the mountain forecast and an official live status before committing.'],
        ['Descent and hiking are separate decisions', 'Save the return train first. A station platform is not a trailhead guarantee, and a longer walk needs its own conditions, daylight and equipment check.']
      ],
      fieldContext: {
        heading: 'Read the railway as an operating chain, not a promise of a view.',
        cards: [
          { title: 'Four named points on the climb', copy: 'The official works notice names Montreux, Glion, Haut-de-Caux and Rochers-de-Naye. The diagram shows their route order only; it does not plot geography, stations to scale or current train service.', sources: [0, 1] },
          { title: 'The current work limit', copy: 'MOB’s notice for 14 September–17 October 2026 says no train ran from Montreux to Rochers-de-Naye and replacement buses reached Haut-de-Caux only. The notice also says connections are not guaranteed and delays are expected.', sources: [1] },
          { title: 'A different mountain is a separate plan', copy: 'Montreux Riviera points to Les Pléiades as an alternative during the line closure. It uses a different route from Vevey via Blonay; check the current timetable, weather, access and return instead of transferring the Rochers schedule.', sources: [0, 2] }
        ]
      },
      sources: [
        ['https://www.montreuxriviera.com/en/PA458/rochers-de-naye-in-summer', 'Montreux Riviera: Rochers-de-Naye route, published ride time, altitude and closure fallback'],
        ['https://support.mob.ch/hc/en-ch/articles/30553443099805-Traffic-interruption-between-Glion-and-Rochers-de-Naye-September-October-2026?lang=en', 'MOB: exact 2026 interruption dates, bus-replacement limit and connection warning'],
        ['https://www.montreuxriviera.com/en/PA430/les-pleiades-in-summer', 'Montreux Riviera: separate Les Pléiades approach and seasonal activity information'],
        ['https://www.sbb.ch/en', 'SBB: exact-date rail connections'],
        ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss mountain forecast and warnings']
      ],
      faq: [
        ['Is Rochers-de-Naye operating on my date?', 'The answer depends on dated works, weather and the operator’s current service notice. The 2026 notice covered 14 September–17 October and sent replacement buses only to Haut-de-Caux. Check MOB and SBB again for your travel date.'],
        ['Can I use the replacement bus to reach the summit?', 'Not under the notice reviewed on 12 October 2026: it says buses replace trains only as far as Haut-de-Caux, with no train to Rochers-de-Naye during the closure. Recheck any later notice before making the same assumption.'],
        ['What should I do if the summit is clouded?', 'Keep the day low. Use Chillon, Montreux’s short lakeside route or Vevey’s old-town walk. Les Pléiades is a distinct alternative only when its own train, conditions and return fit.']
      ]
    }),
    g({
      slug: 'vevey-lakeside', name: 'Vevey, Lakeside & Riviera Towns', instrument: 'small-town lakeshore ledger', layout: 'riviera-ledger',
      imageQuery: 'Vevey Lake Geneva Switzerland waterfront', imageAlt: 'Vevey town and lakeside on Lake Geneva',
      summary: 'Use Vevey for a compact, low-elevation Riviera day: start from the station, walk the pedestrian old town from Grande Place toward Jardin Roussy, then finish at the lake rather than marching the whole shore.',
      access: 'Take SBB to Vevey station from Lausanne or Montreux and plan one walkable loop: station → Grande Place → the pedestrian old-town lanes → Jardin Roussy → lakeside. Montreux Riviera describes the old-town stretch from Grande Place toward Jardin Roussy; check local event barriers and choose the station return before extending the promenade. If Chaplin’s World is your main purpose, treat Corsier-sur-Vevey as a separate bus-and-ticket excursion and plan its date-specific journey in SBB rather than adding it mid-loop.',
      tradeoff: 'Vevey offers a market-square scale, cafés, pedestrian streets and a quieter water edge. It is a restorative town walk, not a substitute for Chillon’s interior history or a high-mountain view. Choose one cultural stop that matters to you; do not stack a museum, Chaplin’s World and the full lakeshore into the same short day.',
      fallback: 'In rain, shorten the lakefront and keep the old-town lanes, a confirmed indoor museum or a long café break as the main plan. If an event changes Grande Place access, follow signed pedestrian routes and use the lake as a short orientation rather than an objective. If a museum calendar or bus connection fails, the station-to-old-town walk still makes a useful half-day.',
      duration: 'Allow three to five hours for the station, Grande Place, old streets, Jardin Roussy and a relaxed break; this is an editorial estimate, not a measured visit. A museum or Chaplin’s World adds its own ticket, opening and transit block. Keep Montreux as a separate train stop unless the live timetable and your energy support a second short visit.',
      combine: 'Pair Vevey with Montreux by SBB when you want two compact town sections and have a flexible return. Use Vevey with Les Pléiades only after confirming the Blonay connection, mountain visibility and return. If Chillon is the day’s fixed booking, avoid adding a distant museum just because the stops share one rail line.',
      verify: 'Check SBB for Lausanne–Vevey–Montreux and any bus connection to a named museum. Montreux Riviera’s current pages describe the old city as pedestrian and the lakeside as an event area; access and public-space patterns can change during festivals. Verify the attraction calendar and exact return before setting a fixed ticket around this walk.',
      choices: [
        ['Old town + water', 'Vevey station → Grande Place → pedestrian lanes → Jardin Roussy → short lakeside finish; best for a relaxed first visit.'],
        ['Culture-led stop', 'Keep the same short town loop and add one confirmed Vevey museum; choose by current opening and subject, not by a checklist.'],
        ['Riviera two-town day', 'Use SBB between Vevey and Montreux and choose one short walk in each; best when you want contrast without a mountain excursion.']
      ],
      stages: [
        ['Arrive at Vevey station', 'Use SBB for the actual date and note the station return. Walk once toward the center rather than beginning with a long lakeside extension.'],
        ['Read the old town from Grande Place', 'Follow the pedestrian streets and notice the fountains, façades, shops and cafés. Let the square set the pace; do not race through it to catch a second attraction.'],
        ['Continue toward Jardin Roussy and the water', 'Use the official old-city corridor as the walk’s spine. Shorten it in wind or rain; check for event access before crossing public-space barriers.'],
        ['Choose one finish', 'Return to Vevey station, add one verified cultural stop, or take SBB to Montreux for a separate short quay section. Keep the rail return ahead of any optional extension.']
      ],
      watch: [
        ['Town and museum are different blocks', 'The central walk is compact; Chaplin’s World is in Corsier-sur-Vevey and needs its own journey, ticket and opening check.'],
        ['Event space can change', 'Grande Place and the lakefront host events. Check Montreux Riviera’s calendar and use signed routes if public access shifts.'],
        ['A short railway hop still needs a return', 'Vevey and Montreux look close on the shore, but the train is the useful connector. Check SBB before choosing to add a second town.']
      ],
      fieldContext: {
        heading: 'Let the station, market square and garden terrace carry the walk.',
        cards: [
          { title: 'The old-town line is specific', copy: 'Montreux Riviera describes the pedestrian old city from Grande Place to Jardin Roussy, with narrow lanes, cafés, shops, fountains and façades. Use those named points as the walk’s spine and finish at the lake.', sources: [0] },
          { title: 'Choose one cultural extension', copy: 'Chaplin’s World is in Corsier-sur-Vevey, outside the central walk. The tourism page gives a visit estimate of about 2 hours 30 minutes; check its official calendar and SBB route before treating it as an add-on.', sources: [1, 2] },
          { title: 'Use rail for the Riviera link', copy: 'SBB connects the town stops, while the Vevey lakeside and Montreux quays are separate walking sections. Choose one short route at each end rather than turning the whole shoreline into a compulsory walk.', sources: [3, 4] }
        ]
      },
      sources: [
        ['https://www.montreuxriviera.com/en/P4874/old-city-of-vevey', 'Montreux Riviera: Vevey old-town route and access'],
        ['https://www.montreuxriviera.com/en/P7832/chaplins-world-by-grevin', 'Montreux Riviera: Chaplin’s World location and visit planning'],
        ['https://www.chaplinsworld.com/', 'Chaplin’s World official visitor information'],
        ['https://www.montreuxriviera.com/en/P4876/montreux-lakeside', 'Montreux Riviera: Montreux shore and current event calendar'],
        ['https://www.sbb.ch/en', 'SBB: date-specific rail and bus planning']
      ],
      faq: [
        ['Is Vevey worth a separate day from Montreux?', 'A relaxed half-day is useful when you want Grande Place, the pedestrian lanes and a short lakefront walk. Combine it with Montreux only if you choose one short section in each town and the rail return fits.'],
        ['Can I fit Chaplin’s World into the old-town walk?', 'It is in Corsier-sur-Vevey, not on the station-to-Grande-Place-to-Jardin Roussy loop. Give it a separate transit and visit block, then check current opening and ticket information before adding it.'],
        ['What is the best rainy-day version?', 'Keep the station-to-old-town section short, choose one museum only after checking its calendar, and use a café break instead of the exposed waterfront. If no indoor attraction fits, the pedestrian center still supports a compact visit.']
      ]
    })
  ]
});
