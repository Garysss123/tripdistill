const reviewDate = '12 October 2026';
const isoDate = '2026-10-12';

const official = {
  tourism: ['https://st.gallen-bodensee.ch/en/', 'St Gallen-Bodensee Tourism'],
  abbeyVisit: ['https://stiftsbezirk.ch/en/opening-hours', 'Abbey District — opening hours, tickets and access'],
  abbeyArrival: ['https://stiftsbezirk.ch/en/how-to-get-here', 'Abbey District — public transport and arrival'],
  appenzell: ['https://www.appenzell.ch/en/', 'Appenzellerland Tourism'],
  villageMap: ['https://www.appenzell.ch/en/appenzell/village-map.html', 'Appenzell — official village map'],
  museums: ['https://www.appenzell.ch/en/appenzell/museums.html', 'Appenzell — museum directory'],
  hike: ['https://www.appenzell.ch/en/alpstein/hiking/hiking-tour-suggestions.html?cHash=5e7c40dacf6e64b298ddd8c9a1a50488&tx_wstourismus_tourismus%5Baction%5D=show&tx_wstourismus_tourismus%5Bcontroller%5D=Tour&tx_wstourismus_tourismus%5Btour%5D=39', 'Appenzell — Wasserauen–Seealpsee route listing'],
  hikingSafety: ['https://www.appenzell.ch/en/alpstein/staying-safe-while-on-the-go.html', 'Appenzell — mountain-hiking preparation and safety'],
  cableway: ['https://www.ebenalp.ch/en/welcome', 'Wasserauen–Ebenalp Cableway — current service information'],
  sbb: ['https://www.sbb.ch/en', 'SBB — date-specific rail planning'],
  meteo: ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss — local forecast and warnings']
};

export const switzerlandCh12ClusterRefresh = {
  reviewDate,
  isoDate,
  tagline: 'Use the Abbey District for culture, Appenzell for a compact village day, and Wasserauen only when a separate mountain plan fits the weather and return.',
  hubIntro: 'St Gallen and Appenzell share a regional rail spine, but they solve different days: the Abbey District is an indoor-led city visit; Appenzell is a compact lived-in center; and Wasserauen is the gateway to a higher-exposure mountain choice. Decide which operating system fits the group, forecast and night base before counting stops.',
  stay: 'Two nights near St Gallen station make arrival simple and leave one full day for the Abbey District plus one Appenzell excursion. A third night earns its place as a moveable Alpstein weather slot. Sleeping in Appenzell shortens the village and Wasserauen start but gives up the larger rail hub; compare the actual hotel walk, luggage plan and first and last useful services for your dates.',
  transfer: 'The Abbey District’s official arrival page describes a 5–10-minute walk from St Gallen railway station or bus 11 to the Stiftsbezirk stop. For an eastbound day, plan St Gallen–Appenzell–Wasserauen in SBB, then confirm the exact Appenzeller Bahnen connections and return. A rail arrival does not guarantee a useful cableway departure or a safe mountain turnaround.',
  season: 'St Gallen’s Abbey District is the all-weather anchor; Appenzell village also works at low elevation, while Ebenalp and Seealpsee depend on cableway operation, the selected hiking route and a forecast for the mountain. As checked on 12 October 2026, the Ebenalp operator listed daily service through 1 November, 07:30–17:30, followed by a 2 November–24 December revision; the Abbey Library, Vaulted Cellar and Exhibition Space listed closure from 9–23 November. These are dated snapshots, not future guarantees: reopen each official page for the travel date.',
  fallback: 'If cloud, rain, wet rock or the cableway schedule removes the mountain plan, do not improvise a higher route. Use Appenzell’s village map for a central walk and a currently open museum, or return to St Gallen for the Abbey District if its visitor spaces are open. If its listed closure overlaps your stay, choose another confirmed indoor plan instead of treating the cathedral, library and exhibitions as interchangeable.',
  sources: [official.abbeyArrival, official.abbeyVisit, official.appenzell, official.cableway, official.sbb, official.meteo],
  faq: [
    ['Are two nights enough for St Gallen and Appenzell?', 'Two nights suit a culture-first St Gallen day and one compact Appenzell visit. Add a third when Ebenalp or the Seealpsee loop matters; it lets you move the mountain outing to a better forecast instead of squeezing it between rail arrivals.'],
    ['Should I sleep in St Gallen or Appenzell?', 'St Gallen is the stronger rail base for the Abbey District and onward travel. Appenzell trades network convenience for a quieter village evening and a shorter start toward Wasserauen. Compare your lodging’s actual station walk and the date-specific first and last train before booking.'],
    ['Can Ebenalp and Seealpsee be one lift-and-hike day?', 'Treat the cableway outing and the official Wasserauen–Seealpsee walking loop as separate route choices. Combine them only if the current map, trail conditions, lift status and return connections describe one safe, practical itinerary for your group; neither route is an automatic extension of the other.']
  ]
};

export const switzerlandCh12GuideRefresh = {
  'st-gallen-abbey': {
    reviewDate, isoDate,
    instrument: 'Abbey access ledger', layout: 'abbey-access-ledger',
    summary: 'Make the Abbey District the day’s anchor: choose the Abbey Library or a wider exhibition visit, then read the cathedral and old-town lanes as distinct stops before returning to rail.',
    access: 'Start at St Gallen railway station. The Abbey District’s visitor page says the walk takes 5–10 minutes; bus 11 toward Abacus-Platz also serves the Stiftsbezirk stop beside the library. Check SBB for the date-specific arrival and return, then choose the foot route or bus according to luggage, weather and mobility rather than assuming every hotel is beside the station.',
    tradeoff: 'An interior-first visit gives the Abbey Library’s historic room and manuscripts enough attention, but leaves less time for the wider exhibition spaces and old town. A combined visit covers more of the Abbey precinct while demanding a longer indoor block. The cathedral is a separate sacred space: follow service, photography and visitor rules posted by the precinct, and do not treat worship as another museum room.',
    fallback: 'Rain strengthens the case for the Abbey Library and exhibition spaces, but only when the current calendar confirms they are open. On a closure or crowded day, shorten the interior plan and use the cathedral precinct and old-town streets only where access permits; if all visitor interiors are unavailable, keep a modest city walk and save Appenzell for another day.',
    duration: 'Editorial allowance, not a measured visit: reserve a half day for one focused interior plus a short old-town loop; give a combined exhibition visit more of the day. The visitor page checked on 12 October 2026 lists the Abbey Library, Vaulted Cellar and Exhibition Space at 10:00–17:00 from October through June, with last exhibition admission 15 minutes before closing. Recheck the exact date and ticket scope before setting the rail return.',
    combine: 'Pair a morning Abbey visit with Appenzell only if the chosen exhibition block, meal and date-specific regional trains still leave a relaxed village stop. Keep the Ebenalp cableway and any mountain hike for another day; a late transfer from St Gallen turns both into rushed checklists.',
    verify: 'Use the Abbey District’s opening-and-ticket page for the visitor calendar and entry rules, its arrival page for the station walk and bus 11, and SBB for the exact rail return. The 12 October 2026 page snapshot lists all three visitor spaces closed 9–23 November 2026; that notice can change, so confirm it again before travel.',
    choices: [
      ['Manuscript-first visit', 'Give the Abbey Library the main block, check its entry and photography rules, then see the cathedral precinct and one short old-town street sequence. You trade breadth for time to look carefully.'],
      ['Wider Abbey precinct', 'Compare the current combined ticket’s named spaces and choose the library, Vaulted Cellar and Exhibition Space only if those are the interiors you want. Confirm the live visitor calendar; a ticket description is not an opening guarantee.'],
      ['Low-effort city reading', 'Use the official station walk or bus 11 to the Stiftsbezirk stop, choose one accessible open interior, and keep the rest to the nearby precinct. The official visitor page describes its exhibitions as wheelchair accessible; verify the route and any current assistance needs directly.']
    ],
    stages: [
      ['Arrive at St Gallen station', 'Check SBB for the date and use the official 5–10-minute walking approach or bus 11 to Stiftsbezirk; keep a return service in view.'],
      ['Choose one interior plan', 'Read the Abbey calendar and ticket scope before joining a queue: library-led, or a wider set of the named exhibition spaces.'],
      ['Read the precinct, then the town', 'Give the cathedral its own respectful visit and take a short old-town loop only after the indoor plan; do not fill time by repeating the same streets.'],
      ['Return on the saved connection', 'Leave time for the station approach, meal and any service change. Add Appenzell only when the actual remaining trains make it a second coherent stop.']
    ],
    watch: [
      ['Scheduled closure and last entry', 'The checked page lists a 9–23 November 2026 closure and last exhibition admission 15 minutes before closing; recheck the live calendar for your date.'],
      ['Sacred space is not a photo set', 'Cathedral and library rules differ from ordinary streets. Follow posted service, silence and photography instructions, and do not photograph manuscripts unless the venue permits it.'],
      ['Station approach with luggage', 'The Abbey is close to the station, but a short walk still matters with bags, hills or mobility needs. Use the named bus stop or verify accessible routing before setting out.']
    ],
    sources: [official.abbeyVisit, official.abbeyArrival, official.sbb, official.tourism],
    fieldContext: {
      heading: 'Separate the manuscript room, the sacred precinct and the town walk.',
      cards: [
        { title: 'Abbey Library and exhibitions', copy: 'Choose the library alone or the currently listed set of Abbey visitor spaces according to the collection you want. The hours, last-entry rule and closure calendar belong to the visit date, so check them before deciding how much fits.', sources: [0] },
        { title: 'Cathedral precinct', copy: 'The cathedral stands inside the Abbey District but follows religious-space etiquette, not a museum itinerary. Read current access and photography rules on site; keep the visit quiet when worship or local activity is underway.', sources: [0, 1] },
        { title: 'Station to Stiftsbezirk', copy: 'The official arrival page names the station walk and bus 11 to the Stiftsbezirk stop. Use that choice to manage luggage or energy, then save an SBB return that leaves room for the visitor spaces you actually selected.', sources: [1, 2] }
      ]
    },
    faq: [
      ['What does the wider Abbey ticket cover?', 'The visitor page checked on 12 October 2026 describes the “Entire Abbey” ticket as access to the Abbey Library, Vaulted Cellar and Exhibition Space. Ticket scope, price and opening can change; use the current venue page and choose only the spaces you intend to see.'],
      ['Can I fit the Abbey and Appenzell into one day?', 'It can work as a culture-led morning and a short village stop only when the Abbey’s current entry window and the actual SBB/Appenzeller Bahnen connections leave enough time. Skip Ebenalp that day; it is a different access and weather decision.'],
      ['What is the simplest rainy-day plan?', 'Check the Abbey calendar first, pick one or two open visitor spaces, and keep the station approach by foot or bus 11 according to conditions. If the precinct is closed, do not assume all its interiors remain open; switch to a confirmed city option or another day.']
    ]
  },
  'appenzell-village': {
    reviewDate, isoDate,
    instrument: 'Appenzell village route folio', layout: 'village-square-folio',
    imageAlt: 'Ornamental painted houses on Appenzell’s Landsgemeindeplatz, with a construction crane and cars visible in the foreground',
    summary: 'Read Appenzell on foot from its station to the ornamental houses of Landsgemeindeplatz, then choose a museum or one officially mapped public walk instead of stretching the village into a mountain day.',
    access: 'Route SBB from St Gallen or your overnight base to Appenzell, then use the tourism office’s village map to connect the station, Hauptgasse and Landsgemeindeplatz. The center is compact, but do not assume every painted doorway or farm lane is public. Decide before leaving town whether you want an indoor museum or a signed walk, and save the return train before rural connections thin.',
    tradeoff: 'The square’s painted houses and local institutions reward a slower visit, not a checklist of photo stops. A museum adds context and a weather-proof block but uses time that could go to a signed countryside route. Walking beyond the center changes the surface, gradient and return question; the village map and current local route listing should decide where a public path begins.',
    fallback: 'In rain, snow or a busy event period, keep to the center and choose a museum whose date-specific hours are confirmed. Skip an exposed or muddy field path rather than cutting across farmyards. If a museum is closed, use a short public street loop, lunch and the saved train instead of padding the visit with private lanes.',
    duration: 'Editorial allowance, not a measured visit: three to five hours can hold the central streets, one chosen museum or a short signed walk, and a meal. Add time only for a specific open institution or route; do not assume the village is a full-day attraction or that a rural connection runs when you need it.',
    combine: 'The clean pairing is a St Gallen Abbey visit on a separate day. A same-day pairing can work as a short St Gallen morning plus Appenzell center, but skip the countryside extension and check the actual afternoon and evening trains. Keep Wasserauen, the cableway and Seealpsee for a separate weather and walking decision.',
    verify: 'Use Appenzell’s official village map for the center, its museum directory for the institution and opening details, and its hiking suggestions for any trail beyond town. Check SBB for the date-specific regional return. The landscape around a picturesque house is not permission to enter a yard, cross a field or use an unsigned farm road.',
    choices: [
      ['Square and main street', 'Keep the visit low-effort: station, mapped village center, Landsgemeindeplatz and a meal. It suits a short day or uncertain weather, but gives up a longer countryside walk.'],
      ['One museum, not a museum crawl', 'Choose Museum Appenzell or another institution from the official directory by subject and opening date. This adds local context and shelter, while making a second museum or long walk less realistic.'],
      ['Village plus one signed path', 'Use the current tourism route listing to choose a public walk with a clear start, surface and turn-back point. Return through the village to the station; do not extend onto private farm roads just to make the day longer.']
    ],
    stages: [
      ['Arrive and check the return', 'Use the date-specific SBB plan to reach Appenzell and save the useful trip back before leaving the station area.'],
      ['Read the village map', 'Walk the public center toward Hauptgasse and Landsgemeindeplatz; treat occupied houses, doorways and yards as private life, not visitor exhibits.'],
      ['Choose indoor context or open path', 'Confirm one museum’s hours or one signed tourism route. Do not plan both as compulsory stops, and let rain or surface conditions remove the walk.'],
      ['Return through the center', 'Allow time for a meal and the walk back to Appenzell station; do not depend on an unverified rural feeder or the next train being convenient.']
    ],
    watch: [
      ['A decorated façade is still someone’s home', 'Stay in public streets and visitor spaces; do not enter courtyards, photograph residents at close range or block doorways.'],
      ['Museum calendars vary', 'Use the official directory to select a specific place, then confirm that location’s own date and last entry. The tourism-office hours are not museum hours.'],
      ['The walk changes the day shape', 'Choose a signed path only after checking route grade, surface and the train home. Wet grass, snow or short daylight is a reason to stay in town.']
    ],
    sources: [official.villageMap, official.museums, official.appenzell, official.hike, official.sbb],
    fieldContext: {
      heading: 'Use the village map to keep public streets, indoor context and rural walking distinct.',
      cards: [
        { title: 'Landsgemeindeplatz', copy: 'The tourism source identifies the square and its ornamental houses in the center of Appenzell. Read the buildings from public space and check event dates before visiting; this is a lived-in civic place, not an open house.', sources: [0, 2] },
        { title: 'Museum Appenzell', copy: 'Use the official museum directory to pick one indoor subject and follow its own hours and access notes. A confirmed museum makes rain useful; it does not imply that every other institution is open the same day.', sources: [1] },
        { title: 'Village-edge walk', copy: 'Tourism’s route suggestions let you choose a currently mapped walk instead of following an attractive lane by guesswork. Check the route surface and return first, and stay on signed public paths rather than crossing working land.', sources: [3, 4] }
      ]
    },
    faq: [
      ['How much of Appenzell belongs in one visit?', 'The center is compact. Plan a few hours for the square, one selected museum or a short signed walk, then use the actual opening calendar and return train to decide whether to stay longer. More walking is not automatically more local context.'],
      ['Can I walk from the village into the countryside?', 'Yes, when the current tourism route listing identifies a public signed path suitable for your group and conditions. Use its start and return rather than treating farm tracks or fields as public shortcuts.'],
      ['Which is better in rain: the village or Ebenalp?', 'Keep the lower village and a confirmed open museum. The mountain cableway and paths have separate weather and operating gates; do not choose them just because the rain is light in town.']
    ]
  },
  'ebenalp-seealpsee': {
    reviewDate, isoDate,
    instrument: 'Alpine access decision board', layout: 'alpine-access-board',
    summary: 'Choose one mountain system from Wasserauen: the Ebenalp cableway and an open signed upper route, the official Seealpsee walking loop, or a lower Appenzell/St Gallen day when weather or service removes both.',
    access: 'Plan the rail journey to Wasserauen in SBB and confirm the Appenzeller Bahnen connection and return before leaving the valley. From there, the cableway is one access chain; the official Seealpsee loop starts on foot at the station and returns by a route that includes a steep descent. Do not join the two because they appear beside each other on a tourist map.',
    tradeoff: 'The cableway makes the Ebenalp plateau reachable without climbing from the valley, but it does not make every upper path easy or open; the operator describes a separate walk to Wildkirchli caves. The published Seealpsee loop is a full walk with ascent, a lakeside section and a steep road descent. A lower village or Abbey day gives up altitude for more reliable shelter and a simpler return.',
    fallback: 'If the lift is under revision, the high forecast is poor, or a path is wet or closed, do not substitute another ridge. Use Appenzell’s center and one confirmed museum, or St Gallen’s Abbey District if its visitor spaces are open. If conditions worsen after departure, stay on the marked route, turn back while the return is clear, and use the saved train rather than an unfamiliar descent.',
    duration: 'The Appenzell route page checked on 12 October 2026 lists its Wasserauen–Seealpsee circuit as 7.34 km, 377 m ascent and descent, about 2 hours 30 minutes, SAC T2. Treat those as the published route record, not your measured time or a promise about current trail conditions; add rail, lake stops and a generous return margin. A cableway-and-viewpoint visit is a different half-day plan.',
    combine: 'Give the mountain route its own day. Do not append the St Gallen Abbey visit after the Seealpsee circuit or assume an Ebenalp ride can be joined to the lake loop without checking the actual signed connection, lift closing and train. Appenzell village works as a short evening only if the saved return supports it.',
    verify: 'Check SBB and Appenzeller Bahnen for the exact rail legs, the cableway operator for live operation and last ascent, Appenzell’s selected route page for distance/grade and trail updates, and MeteoSwiss for the upper mountain. As checked on 12 October 2026, the operator listed service through 1 November 07:30–17:30 and revision 2 November–24 December; recheck rather than carrying that snapshot into another date.',
    choices: [
      ['Ebenalp by cableway', 'Use Wasserauen–Ebenalp only when the operator confirms service. At the top, choose one currently open signed route; the operator describes a separate walk to Wildkirchli caves. A ride ticket is not a trail-closure or weather clearance.'],
      ['Seealpsee on foot', 'Follow the listed loop from Wasserauen via Hüttentobel, Klein- and Grosshütten, Seealpsee, Seealp and Chobel back to the station. The published circuit is 7.34 km with 377 m up and down, so choose it for a real walk rather than a viewpoint transfer.'],
      ['Stay below the mountain gate', 'Choose Appenzell village and a confirmed indoor visit, or St Gallen’s Abbey District if open. This gives up the high scenery but keeps weather, route exposure and the final connection from controlling the whole day.']
    ],
    stages: [
      ['Choose the route before boarding', 'Decide between the lift and its separate upper route, the named Seealpsee circuit on foot, or a valley day. Check the group’s ability and forecast first.'],
      ['Reach Wasserauen with a return saved', 'Plan St Gallen/Appenzell to Wasserauen in SBB, confirm the regional operator’s service and note the final useful return; do not infer departures from a generic map.'],
      ['Follow one current access chain', 'Check lift status and upper trail notices for Ebenalp, or use the official Seealpsee route from the station. Stay on signed public paths and respect the published route difficulty.'],
      ['Turn back before conditions force it', 'Recheck cloud, rain, surface, daylight and last lift/train. Shorten early or use the low-altitude alternative; do not descend an unfamiliar path to chase a connection.']
    ],
    watch: [
      ['A clear valley can hide mountain weather', 'Use MeteoSwiss for the relevant elevation and check conditions again before ascent; rain, thunder, hail or snow can change the route quickly.'],
      ['Lift and trail are separate systems', 'A cableway may operate while a chosen trail is unsuitable, and a closure may remove the descent. Check both operator status and current route information.'],
      ['Seealpsee descent and return', 'The listed circuit returns through Chobel and includes a steep road section. Do not replace it with a cliff-side shortcut or assume the uphill and downhill effort are equal.']
    ],
    sources: [official.cableway, official.hike, official.hikingSafety, official.sbb, official.meteo],
    fieldContext: {
      heading: 'Three colored access lines, three different effort and return contracts.',
      cards: [
        { title: 'Red — rail and cableway', copy: 'Use SBB and the regional railway to reach Wasserauen, then the cableway only when the operator lists service. Check the last ascent/descent and upper route separately; the station-to-viewpoint link does not define a hike.', sources: [0, 3] },
        { title: 'Gold — Seealpsee walking circuit', copy: 'The local tourism record begins at Wasserauen and names Hüttentobel, the huts, Seealpsee, Seealp and Chobel before returning to the station. On 12 October 2026 it listed 7.34 km, 377 m ascent/descent, about 2 h 30 and SAC T2; verify the record and trail for your own date.', sources: [1, 2] },
        { title: 'Teal — lower weather plan', copy: 'When visibility, surface or lift operation does not support a mountain day, use Appenzell’s mapped center or St Gallen’s visitor spaces if open. The lower alternative is a deliberate itinerary with its own hours and return, not an improvised summit substitution.', sources: [2, 3, 4] }
      ]
    },
    faq: [
      ['Is the Seealpsee walk easy?', 'The tourism page checked on 12 October 2026 lists its circuit as SAC T2, 7.34 km, 377 m ascent and descent, and about 2 hours 30. Those are the publisher’s route details, not a judgment for every walker; confirm trail conditions, footwear, weather and the steep return section.'],
      ['Can I ride up to Ebenalp and walk down to Seealpsee?', 'Do not assume that is one simple loop. It links a lift operating window to a separate signed mountain path and a descent with different effort and exposure. Use the current route map and operator notices to confirm a complete itinerary before you commit; otherwise choose one access chain.'],
      ['What if the cableway is in revision?', 'Keep the day below the mountain: choose Appenzell village and a museum whose date-specific access is confirmed, or St Gallen’s Abbey visitor spaces if open. The cableway page checked on 12 October 2026 listed a 2 November–24 December revision; verify the live notice for the travel year.']
    ]
  }
};
