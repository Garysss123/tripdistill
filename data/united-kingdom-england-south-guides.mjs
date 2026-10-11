import { defineUnitedKingdomCluster, unitedKingdomGuide } from './united-kingdom-guide-builder.mjs';

const g = unitedKingdomGuide;
const c = defineUnitedKingdomCluster;

export const unitedKingdomEnglandSouthClusters = [
  c({
    slug: 'london',
    name: 'London',
    nation: 'England',
    band: 'england-south',
    family: 'thames-signal-book',
    label: 'Capital line book',
    tagline: 'Build each day around one booked door and one side of the Thames.',
    hubIntro: 'London is not one compact centre but a chain of walkable districts joined by rail, Underground, bus and river services. A useful plan fixes one timed interior, reads the correct station exit and keeps the rest of the day on a coherent street or river line instead of repeatedly crossing the city.',
    stay: 'Four to six nights gives a first visit enough room for Westminster, one collection-led day and the eastern City or Greenwich without turning every meal into a transfer. Choose accommodation by the late-evening line you will actually use, not by the nearest famous landmark.',
    transfer: 'Heathrow, Gatwick, Stansted, Luton and London City use different rail products and terminals. Within London, large stations such as Bank–Monument, King’s Cross St Pancras and Waterloo are multi-entrance systems; the wrong exit can add a substantial street detour.',
    season: 'Rain and wind can arrive in any month. Summer brings long light but heavier attraction pressure, while winter shortens outdoor sequences and rewards museum-led days. Ceremonies, demonstrations, engineering works and security zones can alter central streets at short notice.',
    fallback: 'Keep a same-district alternative for every booked interior: a free collection, covered market, church, riverside or smaller museum. Replacing a closure locally protects the route; crossing London to chase another headline sight usually destroys it.',
    sources: [
      ['https://www.visitlondon.com/', 'Visit London — official city visitor guide'],
      ['https://tfl.gov.uk/', 'Transport for London — fares, routes and service status'],
      ['https://www.nationalrail.co.uk/', 'National Rail — rail planning and disruption information']
    ],
    guides: [
      g({
        slug: 'westminster-south-bank',
        name: 'Westminster & the South Bank',
        instrument: 'Ceremony-and-crossing clock',
        layout: 'parliament-river-fold',
        imageQuery: 'Westminster Parliament Thames London panorama',
        imageAlt: 'The Palace of Westminster beside the River Thames in London',
        purpose: 'Choose whether Parliament, Westminster Abbey or the public river landscape is the day’s main commitment, then cross the Thames only once so security queues and bridge backtracking do not consume the historic core.',
        summary: 'Start at the booked Westminster door, read Parliament Square and the abbey precinct, then use one bridge to finish along the South Bank with a direct return from Waterloo or Blackfriars.',
        choices: [
          ['Parliament visit', 'Use the exact visitor entrance and session or tour instructions as the fixed event. This gives the strongest civic reading but leaves little tolerance for a second controlled interior.'],
          ['Abbey and royal precinct', 'Make Westminster Abbey the timed anchor, then connect St James’s Park and Whitehall before crossing the river. It suits architectural history but sacrifices a full parliamentary interior.'],
          ['River and public realm', 'Keep the controlled buildings mostly exterior and give the South Bank, bridges and river views the long block. This is the most flexible choice for families or uncertain bookings.']
        ],
        access: 'Westminster station serves Parliament Square but its exits emerge on different sides of busy roads. St James’s Park suits an abbey-first approach, while Waterloo is the cleanest South Bank finish. Identify the controlled entrance on the official booking, not on a generic map pin.',
        tradeoff: 'Parliament, Westminster Abbey and a major South Bank attraction do not form a comfortable three-interior day. Choosing one booked door gives up another interior but preserves time to understand Whitehall, the bridges and the river as connected civic space.',
        stages: [
          ['Meet the controlled door', 'Arrive from the station exit nearest the booked entrance, clear security and keep the ticketed time separate from any ceremony or public-session expectation.'],
          ['Read Parliament Square', 'Use the square, abbey precinct and Whitehall edge as one civic field. Do not detour to Buckingham Palace unless the route was designed to leave from St James’s Park.'],
          ['Cross once', 'Choose Westminster Bridge for the classic river turn or the Golden Jubilee bridges after Whitehall. Stay on the selected bank rather than alternating for photographs.'],
          ['Finish along the South Bank', 'Walk only as far as the chosen final station or venue, ending at Waterloo, Southwark or Blackfriars. Protect the return before adding a late river attraction.']
        ],
        fallback: 'If the booked interior closes or a security perimeter expands, keep the civic route outdoors, add St Margaret’s Church or the Supreme Court when open, then cross to the South Bank. The day still explains the institutions and river without a cross-city rescue.',
        watch: [
          ['Security changes the clock', 'Bag rules, controlled entrances and parliamentary business can alter admission. Treat the official arrival instruction as part of the visit rather than an optional buffer.'],
          ['Ceremony is not guaranteed', 'Changing the Guard and state events vary and can close streets. Do not make an unconfirmed ceremony the connection between two timed tickets.'],
          ['The river walk is longer than it looks', 'Crowds, crossings and steps slow the South Bank. Choose an end station in advance instead of assuming Tower Bridge is an easy extension.']
        ],
        duration: 'Allow six to eight hours with one controlled interior and a South Bank finish. An exterior Westminster circuit can fit three to four hours, but combining two major booked buildings normally uses most of the day.',
        combine: 'Combine with St James’s Park or a bounded South Bank venue because both preserve the same geography. Keep the Tower, British Museum and Greenwich for separate route days.',
        verify: 'Check the Parliament or abbey ticket instructions, current security restrictions, Transport for London status and any event-related road or pedestrian closure before departure.',
        sources: [
          ['https://www.parliament.uk/visiting/', 'UK Parliament — official visitor information'],
          ['https://www.westminster-abbey.org/visit-us', 'Westminster Abbey — official visitor information']
        ]
      }),
      g({
        slug: 'bloomsbury-covent-garden',
        name: 'Bloomsbury, the British Museum & Covent Garden',
        instrument: 'Collection-attention register',
        layout: 'museum-quarter-ledger',
        imageQuery: 'British Museum Great Court London interior',
        imageAlt: 'The Great Court inside the British Museum in London',
        purpose: 'Decide how much attention to give the British Museum, then connect Bloomsbury squares to Covent Garden without pretending a vast collection, two shopping districts and the West End all fit at equal depth.',
        summary: 'Enter the museum with a bounded collection plan, reset in Bloomsbury, and move south through a single street sequence toward Seven Dials and Covent Garden.',
        choices: [
          ['British Museum depth', 'Choose two neighboring collection areas and let the museum occupy the central block. Covent Garden becomes a meal and evening finish rather than another full attraction.'],
          ['Two smaller collections', 'Use the National Gallery, Courtauld or another verified venue instead of the British Museum. This reduces scale but may add a separate timed-entry and walking decision.'],
          ['Streets and performance district', 'Keep museums short or exterior, then prioritize Bloomsbury squares, Seven Dials and a booked performance. It offers better pacing but less collection context.']
        ],
        access: 'Tottenham Court Road, Holborn and Russell Square approach different sides of Bloomsbury. Use the museum’s current entrance guidance and do not assume the nearest named station creates the best exit toward Covent Garden. Leicester Square or Covent Garden can serve the final leg.',
        tradeoff: 'A serious British Museum visit uses the same attention needed for the National Gallery or a matinee. This route deliberately chooses one collection argument, giving up a second major museum so food, streets and an evening booking remain usable.',
        stages: [
          ['Enter from the useful square', 'Approach from Russell Square or Tottenham Court Road according to the first gallery and current entrance. Note the return station before phones and bags enter security.'],
          ['Work a bounded collection', 'Follow current room status and keep adjacent departments together. Stop when attention drops instead of crossing the entire building for one object.'],
          ['Reset in Bloomsbury', 'Use Bedford Square, Russell Square or a planned café as a real break. This separates collection time from the busier theatre and market district.'],
          ['Descend to Covent Garden', 'Move through Seven Dials or Drury Lane once, ending near the booked restaurant, performance or station. Do not loop back north after the evening crowd builds.']
        ],
        fallback: 'If museum entry or a gallery closure breaks the plan, retain the district with the Foundling Museum, Sir John Soane’s Museum when its admission works, Bloomsbury squares and a longer Covent Garden street route. Do not replace it with a distant headline museum.',
        watch: [
          ['Free does not mean frictionless', 'Capacity controls, security and temporary gallery closures still matter. Read current entry advice even when no admission charge applies.'],
          ['Collection scale disguises distance', 'Internal walking and standing accumulate quickly. Preselect rooms and a meeting point instead of relying on a single famous-object list.'],
          ['Evening tickets set the exit', 'A theatre start time changes meal and museum cutoffs. Work backward from the performance door, not from an optimistic gallery finish.']
        ],
        duration: 'Allow five to seven hours for a bounded museum visit, a proper break and Covent Garden. Add an evening performance only with a firm museum stop time; two major collections should be separate days.',
        combine: 'Combine with Seven Dials, Soho’s eastern edge or a West End performance. Do not add Westminster or the Tower merely because both appear close on the Tube map.',
        verify: 'Check the selected museum’s entry and gallery notices, any performance ticket conditions, step-free station information and current central-line or Piccadilly-line service changes.',
        sources: [
          ['https://www.britishmuseum.org/visit', 'British Museum — official visitor information'],
          ['https://www.nationalgallery.org.uk/visiting', 'National Gallery — official visitor information']
        ]
      }),
      g({
        slug: 'tower-city-greenwich',
        name: 'Tower of London, the City & Greenwich',
        instrument: 'Fortress-to-meridian tide board',
        layout: 'east-thames-section',
        imageQuery: 'Tower of London Thames city skyline wide',
        imageAlt: 'The Tower of London beside the Thames and the City skyline',
        purpose: 'Choose whether the Tower of London or Greenwich is the paid anchor, then use the eastern Thames as a one-direction transfer rather than forcing the fortress, City lanes and every Greenwich museum into one compressed checklist.',
        summary: 'Start with the controlled fortress or a City walk, move east by rail or river only after the anchor, and finish around Greenwich’s compact maritime sites with the return already selected.',
        choices: [
          ['Tower depth', 'Reserve the fortress early and give its grounds, collections and queues the main block. Greenwich becomes an exterior river-and-park finish or moves to another day.'],
          ['City evidence and river transfer', 'Keep the Tower exterior, trace Roman and financial-city layers, then use a boat or rail connection east. This favors urban history over the Crown Jewels.'],
          ['Greenwich maritime day', 'Go directly to Greenwich for the museums, observatory or park, using the Tower only as a river landmark. This gives the clearest meridian and naval story.']
        ],
        access: 'Tower Hill, Fenchurch Street and London Bridge serve different approaches to the Tower and City. Greenwich, Cutty Sark and Maze Hill are separate stations, while river boats use named piers and schedules. Match the arrival to the first door and the return to the final hill or museum.',
        tradeoff: 'A full Tower visit and the Royal Observatory’s hilltop interior are both substantial. Choosing both sacrifices the City walk and much of Greenwich; choosing one anchor makes the river transfer and return leg intelligible.',
        stages: [
          ['Start at the fixed gate', 'Meet the Tower ticket time or begin at a named City station. Keep fortress security and queue time inside the plan before considering the river connection.'],
          ['Read one eastern-city line', 'Use the Roman wall, St Dunstan-in-the-East, Monument or Borough Market as one bounded branch. Do not zig-zag between both banks.'],
          ['Transfer east with intent', 'Choose DLR, rail or a verified river departure according to weather, cost and arrival point. A sightseeing boat is not interchangeable with the fastest connection.'],
          ['Finish around Greenwich', 'Select the maritime museum and Cutty Sark low ground or the observatory hill. End at the station or pier that avoids climbing back across the park with tired legs.']
        ],
        fallback: 'If the Tower or river service is disrupted, use the City’s exterior remains, London Mithraeum when available and DLR to Greenwich; if Greenwich interiors close, retain the market, naval college grounds and park. Keep the same eastward geography.',
        watch: [
          ['Pier names and boat products differ', 'Commuter and sightseeing services have different tickets and stopping patterns. Confirm the operator, pier and final departure rather than following a generic boat symbol.'],
          ['Greenwich includes a real hill', 'The observatory approach is steep. Keep museum-and-river low ground as the accessible branch when walking or weather is limiting.'],
          ['Fortress queues move inside the walls', 'Admission does not remove internal waits. Prioritize the specific Tower experiences that matter instead of treating every exhibit as compulsory.']
        ],
        duration: 'Allow a full seven-to-nine-hour day for one major interior plus the eastward transfer. The Tower alone can use four hours; Greenwich alone merits at least half a day.',
        combine: 'Combine the Tower with one City line or Greenwich with a river arrival. Do not add Westminster, Bloomsbury or a West End performance to the same day.',
        verify: 'Check Tower admission and security, Royal Museums Greenwich hours and ticket products, the chosen river or DLR service, and the last practical return from the final Greenwich stop.',
        sources: [
          ['https://www.hrp.org.uk/tower-of-london/visit/', 'Historic Royal Palaces — Tower of London visits'],
          ['https://www.rmg.co.uk/plan-your-visit', 'Royal Museums Greenwich — official visit planning']
        ]
      })
    ]
  }),
  c({
    slug: 'oxford-cotswolds',
    name: 'Oxford, Blenheim & the Cotswolds',
    nation: 'England',
    band: 'england-south',
    family: 'college-and-coach-docket',
    label: 'College-and-coach docket',
    tagline: 'Keep Oxford on foot; give Blenheim and each Cotswold corridor its own outward day.',
    hubIntro: 'Oxford is a rail-connected walking city, while Blenheim Palace and the Cotswold towns depend on buses, tours, bicycles or a car. A strong base plan distinguishes college opening windows from rural timetables and never treats “the Cotswolds” as one station or one attraction.',
    searchSummary: 'Oxford is a walkable base; choose Blenheim by Stagecoach S3 or S7, or plan one dated Pulhams 801 corridor from Moreton-in-Marsh. Give each rural area its own day.',
    stay: 'Two nights in Oxford is a short base: protect one full city day and choose either Blenheim or one rural corridor, not both. Three nights keeps the same room for Oxford plus a single outward day and a weather reserve. With four or five nights, consider keeping Oxford nights together and adding two nights near Moreton-in-Marsh only if the Pulhams 801 route fits the dated plan; a one-night hotel split can cost the time it was meant to save. Keep arrival and departure days separate from these full-day allowances.',
    transfer: 'Oxford Railway Station and Gloucester Green coach station serve different arrivals. Walk the Oxford centre from one base; take Stagecoach S3 from Oxford Railway Station/Magdalen Street or S7 via Oxford Parkway for Blenheim, then follow the Palace pedestrian approach. For a Cotswold day, plan the rail leg to Moreton-in-Marsh and use Pulhams 801 only for its named corridor through Stow-on-the-Wold and Bourton-on-the-Water. Check the exact date, direction, stop and return before committing; no bus frequency or same-day rail connection is assumed here.',
    season: 'College doors, Bodleian tours and museum access follow their own calendars and can change for academic use, ceremonies or events; check the place you actually intend to enter. Rural bus timetables are date-specific, while short winter daylight and wet paths argue for fewer stops. Summer weekends and Palace events can add visitor and road pressure around Woodstock. Recheck the operator and venue on the travel date.',
    fallback: 'If a college or library interior is closed, keep the Oxford walk through Carfax, Broad Street and Radcliffe Square, then choose one open museum such as the Ashmolean. If the 801 connection does not leave a sound return, stay in Moreton-in-Marsh or make the Cotswolds a separate booked tour; do not link villages with an assumed roadside walk or an unbooked taxi chain.',
    reviewDate: '11 October 2026',
    reviewDateISO: '2026-10-11',
    sources: [
      ['https://www.ox.ac.uk/visitors/visiting-oxford', 'University of Oxford — visitor guidance'],
      ['https://www.blenheimpalace.com/visitus/getting-here/', 'Blenheim Palace — public-transport and pedestrian access'],
      ['https://www.stagecoachbus.com/routes/oxfordshire/s3/oxford-chipping-norton/xoas003.o', 'Stagecoach — S3 route and date-specific timetable'],
      ['https://www.pulhams.co.uk/busservices/timetables/service801/', 'Pulhams — 801 route and timetable'],
      ['https://www.nationalrail.co.uk/stations/moreton-in-marsh/', 'National Rail — Moreton-in-Marsh station']
    ],
    faq: [
      ['How many nights should I book for Oxford, Blenheim and the Cotswolds?', 'Two nights leaves room for Oxford and one outward choice if your arrival and departure allow it. Three nights supports Oxford plus a separate rural day. Four or five nights can justify a rural base near Moreton-in-Marsh, but only when the dated rail and 801 return suit the stay.'],
      ['Can I visit Blenheim without a car?', 'Yes. Blenheim lists Stagecoach S3 from Oxford Railway Station/Magdalen Street and S7 via Oxford Parkway. Use its current directions from the bus stop to the pedestrian entrance and check the exact date and return before buying a timed ticket.'],
      ['Can I cover several Cotswold villages by bus?', 'Build around one corridor, not a map-wide village list. Pulhams 801 serves Bourton-on-the-Water, Stow-on-the-Wold and Moreton-in-Marsh; select one or two stops only after checking the travel-date timetable in both directions.'],
      ['Should I change hotels between Oxford and the Cotswolds?', 'Stay in Oxford if the rural visit is one day. A Moreton-in-Marsh base is more useful when you have enough nights to use its railway station and the 801 corridor without moving luggage for a single outing.']
    ],
    guides: [
      g({
        slug: 'oxford-colleges-museums',
        name: 'Oxford Colleges, Libraries & Museums',
        instrument: 'College-opening matrix',
        layout: 'quadrangle-threshold-plan',
        imageQuery: 'Oxford Radcliffe Camera university street',
        imageAlt: 'Radcliffe Camera and historic university buildings in Oxford',
        purpose: 'Choose one genuinely visitable college or Bodleian experience, then connect Oxford’s academic quarter to one collection or river edge. The plan distinguishes public streets and exteriors from doors that require their own visitor window or booking.',
        summary: 'Walk from Oxford Railway Station through Carfax to Broad Street and Radcliffe Square; use one checked college or Bodleian entry, then finish at the Ashmolean or one university museum.',
        searchSummary: 'Plan Oxford on foot from Carfax to Broad Street and Radcliffe Square, then choose one date-checked college or Bodleian visit and one museum collection.',
        choices: [
          ['One college interior', 'Pick a named college only after its own visitor page confirms the gate and date; Christ Church is a separate ticketed visit. This gives a close view of college life but makes the day depend on one opening window.'],
          ['Bodleian plus Radcliffe Square', 'Reserve a public Bodleian tour or choose its currently listed visitor experience, then read the Old Schools and Radcliffe Camera from Catte Street. This gives library context without treating a working reading room as a walk-in museum.'],
          ['Museum-first Oxford', 'Choose the Ashmolean on Beaumont Street or the Oxford University Museum of Natural History/Pitt Rivers on Parks Road, then keep the college precinct to its public streets. This is the rain-resilient option but offers less access to private quads.']
        ],
        access: 'Oxford Railway Station lies west of the centre; Gloucester Green is a separate coach arrival. Walk east via Park End Street and George Street to Carfax, continue through Cornmarket to Broad Street, then use Catte Street for Radcliffe Square and the Bodleian visitor entrance. College gates are not interchangeable: follow the named visitor door on that college’s current page.',
        tradeoff: 'A full museum visit, a Bodleian tour and several college interiors compete for the same hours. Choose one booked or controlled interior and one secondary layer; Radcliffe Camera is a reading library, not an unreserved public interior.',
        stages: [
          ['Arrive at Carfax', 'From Oxford Railway Station use Park End Street and George Street; from Gloucester Green enter from the north. Set a return station and keep luggage out of the narrow centre streets.'],
          ['Use one confirmed door', 'Follow the current visitor entrance and time for the college or Bodleian product you selected. If no suitable slot or public opening is listed, keep the visit exterior.'],
          ['Read the academic quarter', 'Walk Broad Street, Catte Street and Radcliffe Square; use the University Church viewpoint only if it is open. Keep the route on public streets instead of trying several college porter’s lodges.'],
          ['Choose one indoor finish', 'Turn west to the Ashmolean or north to the Natural History Museum/Pitt Rivers pair, following their current visit notices. Leave time for the station walk; the meadow is a separate outdoor extension, not an automatic add-on.']
        ],
        fallback: 'If a college or Bodleian slot is unavailable, keep the same walk through Broad Street and Radcliffe Square, then move to the Ashmolean or the Natural History Museum/Pitt Rivers if its current visitor notice fits. The day still has a complete Oxford story without a second private gate.',
        watch: [
          ['College pages control the door', 'Opening windows and visitor products are set by each college; ceremonies, teaching and private events can change access. Check the exact date before shaping the route around an interior.'],
          ['A library tour is a timed product', 'Bodleian public tours and library access are separate from the street-side Radcliffe Camera view. Read the current ticket and arrival instructions; do not arrive at a reading-room entrance expecting general admission.'],
          ['Rain changes the finish', 'Christ Church Meadow and the river edge are exposed and can be muddy. Trade that outdoor leg for one museum rather than crossing town to rescue every planned stop.']
        ],
        duration: 'Allow five to seven hours for the Carfax–Broad Street–Radcliffe Square walk, one booked or open interior, one museum choice and a break. A shorter exterior-only circuit can be planned separately; these are editorial allowances, not venue visit times.',
        combine: 'Keep the sequence within the centre: pair the academic quarter with one museum or, on a dry day, a short Christ Church Meadow walk. Blenheim and the Cotswold towns need their own outward day.',
        verify: 'Check the chosen college’s own visitor page, Bodleian tour availability, the Ashmolean or university museum notices, and the Oxford station return before fixing the order.',
        faq: [
          ['Can visitors walk into any Oxford college?', 'No. Public access and entry times vary by college and date. Choose one college whose own visitor page lists the exact door and conditions; keep other colleges as exteriors.'],
          ['Can I go inside the Radcliffe Camera?', 'Treat it as an exterior landmark unless the Bodleian’s current visitor information explicitly includes an interior experience. Public tours and working library access have their own terms and availability.'],
          ['Which museum fits this walk?', 'The Ashmolean sits west of the academic quarter; the Natural History Museum and Pitt Rivers are the north-side option. Choose one based on its current opening notice and collection interest instead of trying to do both in a short city day.']
        ],
        sources: [
          ['https://www.ox.ac.uk/visitors/visiting-oxford', 'University of Oxford — official visitor information'],
          ['https://www.experienceoxfordshire.org/things-to-do/top-10-oxford-university-colleges-to-visit/', 'Experience Oxfordshire — college visitor guide'],
          ['https://visit.bodleian.ox.ac.uk/plan-your-visit', 'Bodleian Libraries — tours and visit planning'],
          ['https://www.ashmolean.org/plan-your-visit', 'Ashmolean Museum — official visit planning']
        ],
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11'
      }),
      g({
        slug: 'blenheim-woodstock',
        name: 'Blenheim Palace & Woodstock',
        instrument: 'Palace-gate connection sheet',
        layout: 'estate-arrival-section',
        imageQuery: 'Blenheim Palace Oxfordshire landscape',
        imageAlt: 'Blenheim Palace and its landscaped grounds in Oxfordshire',
        purpose: 'Make the bus approach, Palace pedestrian entrance, ticketed rooms and long parkland compete honestly for one day; use Woodstock as a real town stop only when the dated return still works.',
        summary: 'From Oxford Railway Station use Stagecoach S3, or check S7 via Oxford Parkway; follow Blenheim’s current pedestrian directions, choose Palace-and-garden depth or a longer park walk, then protect the return.',
        searchSummary: 'Reach Blenheim from Oxford on Stagecoach S3 or S7 via Oxford Parkway, follow the Palace pedestrian approach, and choose State Rooms, gardens or parkland before planning the Woodstock return.',
        choices: [
          ['State Rooms and formal gardens', 'Give the Palace interior and Water Terraces the protected block, then use the nearby garden paths. This is the clearest first visit, but leaves the wider park and a long Woodstock stop for another day.'],
          ['Parkland and Great Lake', 'Choose the outdoor landscape and set a turning point before leaving the garden core. It suits a dry, longer day but gives up detailed State Room time and depends more on path and daylight conditions.'],
          ['Woodstock with a shorter Palace visit', 'Walk Woodstock’s centre and use the Marlborough Arms stop only after matching the outbound and return direction in the current timetable. This adds town context but reduces time for both the house and estate.']
        ],
        access: 'Blenheim’s current getting-here page lists Stagecoach S3 from Oxford Railway Station/Magdalen Street and S7 via Oxford Parkway. It describes the bus arrival by the main entrance and a further walk through the park to the Palace; follow that pedestrian route, not the vehicle gate. Confirm the stop and direction on the exact departure you will use.',
        tradeoff: 'The State Rooms, formal gardens, Great Lake circuit and Woodstock streets are separate time blocks. Choose one main estate depth plus a short town stop; the park walk is not a compressed indoor tour, and the Palace interior is not a substitute for the wider landscape.',
        stages: [
          ['Choose the right bus leg', 'From Oxford Railway Station or Magdalen Street compare the date-specific S3; S7 is the Oxford Parkway approach. Save the return stop and departure before leaving the city.'],
          ['Walk to the visitor threshold', 'At the bus arrival follow Blenheim’s current signed pedestrian approach through the park. Check that your ticket covers the Palace, gardens or event you intend to enter.'],
          ['Set one estate turning point', 'Visit the State Rooms and Water Terraces, or give the Great Lake/parkland the longer block. Shorten the outdoor branch first in rain, heat or limited-walking conditions.'],
          ['Add Woodstock only if it fits', 'Use the town streets for a planned break, then board at the confirmed Woodstock stop for Oxford. Do not infer a later return from the morning pattern or rely on an unbooked taxi.']
        ],
        fallback: 'If an interior or event area is closed, use only the gardens or parkland included in the day’s ticket and still open. If rain or a bus disruption breaks the outdoor plan, return to Oxford for the Ashmolean or another currently open museum instead of waiting at a rural stop.',
        watch: [
          ['Entry products and events differ', 'The Palace, gardens, park and special events do not always share the same access conditions. Confirm what your selected date and ticket include before leaving Oxford.'],
          ['The pedestrian leg is part of the day', 'The Palace site describes a walk through the park from the bus arrival. Count it both ways and choose a shorter route if the estate distance, terrain or weather is limiting.'],
          ['A Woodstock stop changes the return', 'The S3 and S7 are separate route choices and stop patterns can vary by date. Match the town stop and direction to the live operator timetable; do not use an old frequency estimate.']
        ],
        duration: 'Allow most of a day from Oxford for the bus legs, pedestrian approach, one estate focus and a short Woodstock stop. This is a planning allowance; use the Palace map and your own walking needs to set the turning point.',
        combine: 'Combine with Woodstock only when its stop and return fit the dated plan. Oxford colleges, museums and Cotswold villages deserve separate days.',
        verify: 'Check Blenheim’s dated ticket inclusions and event notices, the Stagecoach S3/S7 direction and stop, the return service, and the day’s weather before leaving Oxford.',
        faq: [
          ['Which bus should I take from Oxford?', 'Blenheim lists Stagecoach S3 from Oxford Railway Station/Magdalen Street and S7 via Oxford Parkway. Compare the exact travel date and direction on the operator page; the two routes do not share every stop.'],
          ['How far is the Palace from the bus?', 'Blenheim’s getting-here page describes a walk through the park from the bus arrival to the Palace. Follow its current pedestrian directions and allow for the return leg; do not navigate to the vehicle entrance.'],
          ['Can I add Woodstock after the Palace?', 'Yes if the estate visit and the date-specific bus return leave enough time. Use the current timetable for the Woodstock stop and return direction; otherwise keep Woodstock for another visit and return directly from the estate.']
        ],
        sources: [
          ['https://www.blenheimpalace.com/visitus/', 'Blenheim Palace — official visitor information'],
          ['https://www.blenheimpalace.com/visitus/getting-here/', 'Blenheim Palace — directions and public transport'],
          ['https://www.stagecoachbus.com/routes/oxfordshire/s3/oxford-chipping-norton/xoas003.o', 'Stagecoach — S3 route and timetable'],
          ['https://www.nationalrail.co.uk/stations/oxford/', 'National Rail — Oxford station']
        ],
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11'
      }),
      g({
        slug: 'cotswold-towns-without-car',
        name: 'Cotswold Towns Without a Car',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        instrument: 'Village-return dependency chart',
        layout: 'bus-window-gazetteer',
        imageQuery: 'Cotswolds village stone houses England',
        imageAlt: 'Honey-coloured stone houses in a Cotswold village',
        purpose: 'Plan a single no-car day by joining a real rail gateway to one named bus corridor, then cap the village count at the return the dated timetable supports. The map is not a substitute for the final rural connection.',
        summary: 'Use Moreton-in-Marsh station and the Pulhams 801 as a planning spine; choose Bourton-on-the-Water, Stow-on-the-Wold or both only after checking the exact-date journey and return.',
        searchSummary: 'No-car Cotswolds day: plan Moreton-in-Marsh rail and Pulhams 801 to a named Bourton or Stow stop; add a second town only if dated return services fit.',
        choices: [
          ['Moreton-in-Marsh plus one town', 'Arrive at Moreton-in-Marsh Railway Station, confirm the Pulhams 801 stop and direction, then choose either Stow-on-the-Wold Library or Bourton-on-the-Water Edinburgh Wool Shop. One town leaves the clearest margin for the station return.'],
          ['Bourton and Stow on the 801', 'The published 801 corridor includes Moreton-in-Marsh, Bourton-on-the-Water and Stow-on-the-Wold. Treat the two-town day as conditional: verify that the service dates, stop order and both onward and return legs line up before booking rail.'],
          ['A wider village circuit', 'If several smaller villages or a specific walking route matter, book a tour with confirmed pickup/drop-off or arrange a car. This extends geographic reach but is a separate product with its own booking, pickup and cancellation terms.']
        ],
        access: 'There is no single Cotswolds station. Moreton-in-Marsh Railway Station is a rail gateway for the 801 corridor; the bus lists Moreton-in-Marsh Railway Station, Stow-on-the-Wold Library and Bourton-on-the-Water Edinburgh Wool Shop as stops. Match the stop name to the destination centre and leave walking time at each end. If travelling from Oxford, plan the dated rail journey separately; this guide does not assume a direct train or a guaranteed same-day connection.',
        tradeoff: 'The 801 offers a named corridor, not an all-villages shuttle. A one-town visit gives more time for streets, an interior and a meal; adding a second town makes the day depend on the published timetable and leaves less slack. A footpath is an independent walking choice, not an automatic link between bus stops.',
        stages: [
          ['Build outward from the station', 'Check National Rail for the date-specific journey to Moreton-in-Marsh and Pulhams for the 801 service in your direction. Save the exact stop names and return plan before buying a train ticket.'],
          ['Choose one first town', 'At Moreton, board only after checking the 801 departure and destination display. In Bourton or Stow, walk the centre from the named stop and locate that same stop for the onward leg.'],
          ['Add a second town only on paper first', 'Check both 801 legs and leave time for a missed connection or a shorter visit. If the timetable leaves no workable return, keep the second town for another day instead of improvising a roadside walk.'],
          ['Protect the gateway return', 'Return to Moreton with daylight and rail disruption information in view. Keep the operator’s service updates and a pre-decided same-town fallback; an unbooked rural taxi is not the base plan.']
        ],
        fallback: 'If the connecting bus is cancelled, disrupted or unsuitable for your date, stay in Moreton-in-Marsh or spend the day in the first town you can reach. Choose a local museum, church, high street or meal, and drop the second village before sacrificing the return journey.',
        watch: [
          ['The dated timetable decides the village count', 'Pulhams publishes the 801 timetable separately from the route description. Check the service date, direction, stop and any holiday variation; this guide makes no frequency or last-bus promise.'],
          ['Stops can sit outside the place you pictured', 'Confirm the named stop and walking route to the town centre. Narrow roads and fields are not safe default shortcuts between villages.'],
          ['Walking routes need a separate plan', 'Check path condition, distance, daylight, access and a turn-back point. Remove a rural walk in wet or short-day conditions before compressing the transit return.']
        ],
        duration: 'Reserve a full day for the gateway and one town. A second town is a timetable-dependent addition, not a standard promise. If you want multiple rural stops on separate days, consider a booked base near the corridor; avoid changing hotels for one marginal bus connection.',
        combine: 'Pair Moreton-in-Marsh with one 801 stop, or link Bourton and Stow only if the dated service allows both directions. Keep Oxford and Blenheim as separate days; they are not Cotswold bus stops.',
        verify: 'Check Pulhams 801 timetable and service updates, the Moreton-in-Marsh rail journey and disruption notice, stop names in both directions, holiday service changes, daylight, weather and any planned footpath before departure.',
        faq: [
          ['Which Cotswold towns does the 801 serve?', 'Pulhams lists Moreton-in-Marsh Railway Station, Stow-on-the-Wold Library and Bourton-on-the-Water Edinburgh Wool Shop among the 801 stops. Check the current route and dated timetable for the direction and service you need.'],
          ['Can I see Bourton and Stow in one day without a car?', 'The 801 route links both towns, but a visit is practical only if the exact-date timetable supports your rail arrival, both town stops and the return to Moreton. If it does not, choose one town or book a tour with confirmed pickup.'],
          ['Can I walk between villages when the bus does not fit?', 'Only with a separately checked walking route, daylight, weather and safe access. A short map distance beside a rural road is not an assumed footpath or a safe connection.']
        ],
        sources: [
          ['https://www.pulhams.co.uk/busservices/timetables/service801/', 'Pulhams — 801 route and timetable'],
          ['https://www.oxfordbus.co.uk/services/PULH/801', 'Oxford Bus Company — Pulhams 801 route and stops'],
          ['https://www.nationalrail.co.uk/stations/moreton-in-marsh/', 'National Rail — Moreton-in-Marsh station']
        ]
      })
    ]
  }),
  c({
    slug: 'cambridge-east-anglia',
    name: 'Cambridge & East Anglia',
    nation: 'England',
    band: 'england-south',
    family: 'fen-waterline-register',
    label: 'Fen waterline register',
    tagline: 'Use rail for the cathedral and city spine; make coast and fen edges separate decisions.',
    hubIntro: 'Cambridge, Ely and Norwich sit on useful rail lines, but their stations, historic cores and surrounding fen or coast landscapes operate at different scales. A good plan distinguishes a walkable academic city from a cathedral stop and a wider East Anglian excursion with its own onward connection.',
    stay: 'Use Cambridge for two nights and an Ely day; add a third or fourth night before choosing Norwich or a north-coast branch. The Norwich–Sheringham rail line and onward coast bus are separate connections, so protect a return and choose one branch per day rather than stacking several Norfolk villages into a short stay. Norwich can also function as a separate base for northern Norfolk.',
    transfer: 'Cambridge station is south-east of the colleges, Cambridge North serves a different edge and Ely station sits below the cathedral core. Greater Anglia routes are useful but do not remove the final walk or rural bus; check engineering works, especially at weekends.',
    season: 'College access follows academic use, while fen paths, river activities and coast services respond to weather and daylight. Summer brings punting and visitor pressure; winter gives clear urban days but shorter rural returns.',
    fallback: 'When college access or an outdoor branch fails, Cambridge and Norwich both have complete museum-led alternatives. Keep the fallback in the same rail city rather than chasing a distant village.',
    reviewDate: '10 October 2026',
    reviewDateISO: '2026-10-10',
    sources: [
      ['https://www.visitcambridge.org/', 'Visit Cambridge — official destination guide'],
      ['https://www.greateranglia.co.uk/', 'Greater Anglia — rail planning and service updates'],
      ['https://www.traveline.info/', 'Traveline — public transport journey planning']
    ],
    guides: [
      g({
        slug: 'cambridge-colleges-backs',
        name: 'Cambridge Colleges & the Backs',
        reviewDate: '10 October 2026',
        reviewDateISO: '2026-10-10',
        instrument: 'College-gate and river clock',
        layout: 'backs-and-courts-fold',
        imageQuery: 'Cambridge Kings College Backs river Cam',
        imageAlt: 'King’s College and the River Cam in Cambridge',
        purpose: 'Choose one publicly accessible college and one river-side line, then connect them without assuming every court, chapel and stretch of the Backs is open to visitors.',
        summary: 'Walk 1.5 miles from the station to King’s College and the public Backs. In rain, use the Fitzwilliam’s U bus option; protect the return train.',
        choices: [
          ['College and chapel', 'Anchor the day at one college or chapel with current public access. This gives depth but makes the schedule dependent on academic and worship use.'],
          ['Museums and public streets', 'Use the Fitzwilliam and university museums with market streets between them. It is the most weather-resistant option but sees fewer private courts.'],
          ['River and Backs', 'Prioritize public river paths, bridges and a verified punt product. This suits clear weather but should not be described as access to every college landscape.']
        ],
        access: 'Cambridge station is roughly a city walk from the central colleges; buses and taxis use different drop points. Confirm the college’s visitor gate and the punt departure operator. The Backs include public views and private land, so follow signed routes rather than map shortcuts.',
        tradeoff: 'Several college interiors, the Fitzwilliam and a long punting session do not fit comfortably. Choosing a controlled college visit sacrifices museum depth; choosing collections gives up some famous court access.',
        stages: [
          ['Cross the station gap', 'Use Station Road and a planned city line or a verified bus, keeping the final train time visible. Do not treat the station as part of the old centre.'],
          ['Meet one college gate', 'Follow current opening and ticket instructions. If access is suspended, use the exterior sequence without waiting indefinitely.'],
          ['Read streets and Backs', 'Move through Market Square, Senate House passage and one river-side line. Respect private boundaries and avoid repeated bridge crossings.'],
          ['Finish at museum or river', 'Choose the Fitzwilliam or a verified punt and end near a direct station route. Keep the final activity bounded by the return train.']
        ],
        fallback: 'If colleges close, use the Fitzwilliam, Museum of Archaeology and Anthropology or Museum of Zoology according to current hours, plus public streets and river views. The city remains a complete trip without buying an improvised tour.',
        watch: [
          ['Colleges are working institutions', 'Opening can change for study, worship and events. Check the individual college rather than a city-wide summary.'],
          ['The Backs are not wholly public', 'Some lawns, bridges and paths are controlled. Stay on signed public routes and do not follow crowds through an unmarked gate.'],
          ['Punt products differ', 'Self-hire, shared tours and private tours use different landings and conditions. Confirm operator, weather policy and finish point.']
        ],
        duration: 'Allow six to eight hours for one college, the public core and either a museum or river activity. A compact streets-and-Backs circuit can fit four hours.',
        combine: 'Combine with the Fitzwilliam or a single punt because both remain inside Cambridge. Keep Ely, Norwich and London for separate days.',
        verify: 'Check the selected college, chapel and museum notices, punt conditions, Greater Anglia service and the last comfortable train before leaving.',
        sources: [
          ['https://www.kings.cam.ac.uk/getting-kings', 'King’s College — official station, bus and parking directions'],
          ['https://www.kings.cam.ac.uk/opening-times-and-tickets', 'King’s College — date-specific visitor times and tickets'],
          ['https://www.kings.cam.ac.uk/accessibility-guide', 'King’s College — visitor accessibility guide'],
          ['https://www.fitzmuseum.cam.ac.uk/plan-your-visit', 'Fitzwilliam Museum — transport, entry and accessibility']
        ]
      }),
      g({
        slug: 'ely-cathedral-fens',
        name: 'Ely Cathedral & the Fen Edge',
        reviewDate: '10 October 2026',
        reviewDateISO: '2026-10-10',
        instrument: 'Cathedral-to-town elevation strip',
        layout: 'island-in-fens-section',
        imageQuery: 'Ely Cathedral fen landscape England',
        imageAlt: 'Ely Cathedral rising above the low Fenland landscape',
        purpose: 'Use Ely as a cathedral-and-town day, connecting the station, riverside and elevated historic core. Treat a wider fen excursion as optional only after an official current source confirms a named route, surface, distance and return.',
        summary: 'Walk under 10 minutes via Cherry Hill Park; choose the cathedral, town and riverside by default. Add a fen walk only after checking a named official route, surface, distance and return; towers involve 165/288 stairs.',
        choices: [
          ['Cathedral depth', 'Prioritize the cathedral floor, towers or museum product currently available. This gives architectural depth but leaves less time for the fen landscape.'],
          ['City and riverside', 'Use the cathedral exterior, market area, Cromwell context and Great Ouse edge. It is flexible and lower-cost but sacrifices the full interior.'],
          ['Fen route only after verification', 'Default to the cathedral, town and riverside. Add a fen route only after verifying a named current route, surface, distance and return on an official source. East Cambridgeshire Council’s current trail page could not be verified for this review, so no specific fen route is claimed.']
        ],
        access: 'Ely station sits below the historic core and near the river; the cathedral approach climbs through town. The council’s detailed trail page could not be verified for this review, so this guide defaults to the town and riverside rather than implying a specific fen route. Keep the rail return and daylight limit in view.',
        tradeoff: 'A tower or extended cathedral visit uses time available for the town and riverside. Prioritize the cathedral for its interior interpretation, or keep to the compact town-and-river circuit; add a fen excursion only after verifying its route and return from a current official source.',
        stages: [
          ['Orient at river level', 'Leave the station toward the Great Ouse, locate the return path and read how the cathedral rises above the low ground before climbing.'],
          ['Climb into the city', 'Use the signed streets to the market and cathedral precinct. Avoid adding distant residential loops before the booked interior.'],
          ['Commit to cathedral or town', 'Complete the cathedral visit or keep to the town and riverside. Add a fen route only after checking an official source for its current name, surface, distance and return; the East Cambridgeshire Council trail page could not be verified for this review.'],
          ['Return downhill with margin', 'Finish at the riverside or station with one train in reserve where possible. Wet surfaces and level crossings can slow the final leg.']
        ],
        fallback: 'In poor weather, use the cathedral, local museum, market and riverside. The East Cambridgeshire Council trail page could not be verified for this review; skip the fen extension unless a named current route, surface, distance and return are confirmed from an official source.',
        watch: [
          ['Tower products have conditions', 'Access, steps and schedules differ from general cathedral entry. Confirm the exact experience and mobility requirements.'],
          ['Verify before a fen excursion', 'The current East Cambridgeshire Council trail page could not be verified for this review. If adding a fen route, confirm its current name, surface, distance and return from an official source; wind, rain and saturated ground can change the effort.'],
          ['Station and cathedral are different levels', 'The final descent takes time and can be slippery. Do not leave it to the train’s departure minute.']
        ],
        duration: 'Allow five to seven hours for the cathedral, town and riverside; a cathedral-only stop can fit three hours between trains. Add a fen route only after an official current source confirms its name, surface, distance and return.',
        combine: 'Combine with Cambridge only as a short second stop when the cathedral is the sole purpose. A full Ely day should not also include Norwich or the Norfolk coast.',
        verify: 'Check Ely Cathedral opening and tower products and Greater Anglia service. Add a fen route only when a current official source confirms its name, surface, distance and return; East Cambridgeshire Council’s trail page could not be verified for this review.',
        sources: [
          ['https://www.elycathedral.org/plan-your-visit/information-for-visitors/getting-here', 'Ely Cathedral — station walk and arrival options'],
          ['https://www.elycathedral.org/plan-your-visit/information-for-visitors/accessibility', 'Ely Cathedral — ramps, ground-floor and tower access'],
          ['https://www.elycathedral.org/plan-your-visit/visitor-tickets-and-tours', 'Ely Cathedral — visitor entry and tours'],
          ['https://www.greateranglia.co.uk/', 'Greater Anglia — rail planning and service updates']
        ]
      }),
      g({
        slug: 'norwich-north-norfolk',
        name: 'Norwich & a North Norfolk Branch',
        reviewDate: '10 October 2026',
        reviewDateISO: '2026-10-10',
        instrument: 'City-to-coast branch board',
        layout: 'lanes-and-rail-branch',
        imageQuery: 'Norwich Cathedral river Wensum England',
        imageAlt: 'Norwich Cathedral above the River Wensum in Norfolk',
        purpose: 'Decide whether Norwich is the full historic-city destination or the rail base for one north Norfolk branch, and name the onward connection instead of advertising city, Broads and coast as one effortless day.',
        summary: 'Choose Norwich or one coast branch. Cromer/Sheringham are by rail; Blakeney, Cley and Wells need a Sheringham change to CH1; check a return.',
        choices: [
          ['Norwich city depth', 'Give the cathedral close, castle area, market and lanes the full day. This provides the strongest city narrative and the most reliable poor-weather plan.'],
          ['Broads gateway', 'Use a rail-served gateway such as Wroxham for a verified boat or waterside plan. This adds water landscape but gives up much of central Norwich.'],
          ['North coast branch', 'Take the Bittern Line from Norwich to Sheringham, then transfer at Sheringham Railway Approach to Sanders Coasthopper CH1 for one of Blakeney, Cley or Wells-next-the-Sea. Check the date-specific outward and return connections before leaving; this is a poor fit with a full Norwich city day.']
        ],
        access: 'Norwich station is east of the central lanes across the Wensum. Coast and Broads branches depart by specific rail or bus corridors, not from every city stop. Check the exact interchange and final return before beginning the Norwich walk.',
        tradeoff: 'A complete Norwich city day and a meaningful coast excursion are separate products. The branch gains landscape but sacrifices the cathedral, castle and market depth; staying in Norwich gives up the coast but avoids timetable pressure.',
        stages: [
          ['Cross from the station', 'Follow the river or Prince of Wales Road toward the cathedral quarter, recording the station return. Do not detour into the centre before confirming the branch decision.'],
          ['Read the historic spine', 'Connect the cathedral close, Elm Hill and market or castle area in one direction. Keep one interior as the anchor.'],
          ['Commit to city or branch', 'For the coast, take the Bittern Line from Norwich to Sheringham and change at Sheringham Railway Approach to Sanders Coasthopper CH1 for one selected village. Confirm the live outward rail-and-bus leg for the travel date before starting; never improvise both Broads and coast.'],
          ['Protect the final connection', 'Check the paired CH1 and rail return for the actual travel date before departure. End near the correct return stop with a service in reserve; rural evening alternatives can be limited.']
        ],
        fallback: 'If the branch is disrupted, Norwich remains complete through the cathedral, museum, market and covered or compact lanes. If a city interior closes, use the river and cathedral-close public realm rather than boarding an unresearched bus.',
        watch: [
          ['Norfolk branches diverge', 'Broads, Cromer, Sheringham and other coast points use different services. A single “Norfolk” timetable does not cover the whole plan.'],
          ['Boat times create a second booking', 'A train arrival does not guarantee a useful cruise connection. Confirm operator, landing and return independently.'],
          ['City hills are easy to overlook', 'The station, cathedral and market sit on different levels. Preserve energy for the climb back or choose a bus intentionally.']
        ],
        duration: 'Allow a full day for Norwich or for one branch with a short city prelude. Two nights are better if both city depth and the coast matter.',
        combine: 'Combine Norwich with one rail branch only when its times work cleanly. Keep Cambridge and Ely for different days or a multi-night East Anglia base.',
        verify: 'Check cathedral and museum access, Greater Anglia or bus service, any boat booking and the final return from the chosen branch on the actual travel date.',
        sources: [
          ['https://www.visitnorwich.co.uk/', 'Visit Norwich — official destination guide'],
          ['https://www.greateranglia.co.uk/media/15508/download?inline=', 'Greater Anglia — Norwich to Cromer and Sheringham timetable (published 14 December 2025; verify current journey)'],
          ['https://www.greateranglia.co.uk/', 'Greater Anglia — live rail planning and service updates'],
          ['https://www.sanderscoaches.com/services/SNDR/CH1', 'Sanders Coaches — Coasthopper CH1 live date selector and route map'],
          ['https://www.sanderscoaches.com/services/SNDR/44', 'Sanders Coaches — routes 44/44A/X40/X41 and date-specific variants']
        ]
      })
    ]
  }),
  c({
    slug: 'bath-bristol-somerset',
    name: 'Bath, Bristol & Somerset',
    nation: 'England',
    band: 'england-south',
    family: 'avon-stone-and-harbour-book',
    label: 'Avon city-pair book',
    tagline: 'Give Bath and Bristol separate city arguments before adding rural Somerset.',
    hubIntro: 'Bath and Bristol are close by rail but reward different days: one concentrates Roman archaeology and Georgian streets, the other a working harbour, collections and steep neighbourhoods. Wells, Glastonbury and the Mendips introduce bus-dependent rural connections that should not be hidden inside a city itinerary.',
    stay: 'Three nights allows one full day in each city and a selected Somerset branch. Bath is convenient for early heritage visits; Bristol offers broader evening districts and transport. Changing hotels between them rarely saves enough time to justify the move.',
    transfer: 'Bath Spa and Bristol Temple Meads both sit outside parts of their visitor cores. Regional trains are frequent but engineering works matter; rural Somerset requires named bus routes and a protected return, especially on Sundays.',
    season: 'Rain can change harbour and hill walks in any season. Summer increases Bath entry pressure and rural road traffic; winter shortens Mendip and Glastonbury extensions but leaves both cities with strong indoor alternatives.',
    fallback: 'Use a complete museum-led Bath or Bristol day when rural buses, weather or attraction access fail. Do not force Wells and Glastonbury together after a missed connection.',
    sources: [
      ['https://www.visitwest.co.uk/', 'Visit West — official regional destination guide'],
      ['https://www.gwr.com/', 'Great Western Railway — rail planning and service updates'],
      ['https://www.firstbus.co.uk/bristol-bath-and-west', 'First Bus — Bristol, Bath and West services']
    ],
    guides: [
      g({
        slug: 'bath-roman-georgian-city',
        name: 'Bath: Roman & Georgian City',
        instrument: 'Thermal-city time ledger',
        layout: 'stone-terrace-sequence',
        imageQuery: 'Bath Royal Crescent England panorama',
        imageAlt: 'Georgian architecture at the Royal Crescent in Bath',
        purpose: 'Choose whether the Roman Baths, abbey or Georgian uphill circuit anchors the day, then connect the thermal centre to the crescents without treating every interior and viewpoint as mandatory.',
        summary: 'Begin at Bath Spa, complete one booked central interior, climb through Queen Square and the Circus only if energy allows, and return by a different street line.',
        choices: [
          ['Roman Baths depth', 'Use the timed archaeological visit as the central event and keep the abbey and Georgian city mostly exterior. This offers the clearest ancient-water story.'],
          ['Abbey and compact centre', 'Prioritize the abbey, river and central streets with a shorter museum stop. It reduces queues and elevation but sacrifices the full Roman interpretation.'],
          ['Georgian city climb', 'Use the Circus, Royal Crescent and a selected museum as the main sequence. This reveals later urban planning but requires more uphill walking.']
        ],
        access: 'Bath Spa station is south of the historic core. The Roman Baths and abbey share a busy central precinct, while the Circus and Royal Crescent climb north-west. Book the central interior first and decide the uphill branch before leaving the lower city.',
        tradeoff: 'A deep Roman Baths visit, abbey tower product and full Georgian circuit create a rushed sequence. Choosing one major interior gives up another but allows the city’s layers and hills to make sense.',
        stages: [
          ['Enter from Bath Spa', 'Cross the river or follow the direct central streets, noting the station return. Avoid climbing to the crescents before the timed lower-city booking.'],
          ['Complete the thermal anchor', 'Use the Roman Baths or abbey product with its current entry and security. Keep the Pump Room and square as context rather than automatic extra tickets.'],
          ['Climb one Georgian line', 'Move through Queen Square and the Circus to the Royal Crescent, or stay lower along Pulteney Bridge and the river when hills or rain are limiting.'],
          ['Descend without retracing', 'Return through a parallel street or the park edge, ending near Bath Spa with time for a meal rather than a final sprint downhill.']
        ],
        fallback: 'If the Roman Baths booking fails, use the abbey, Victoria Art Gallery or No. 1 Royal Crescent only when current access works, plus the exterior thermal and Georgian sequence. In heavy rain, shorten the upper-city loop.',
        watch: [
          ['Timed entry sets the whole city line', 'The lower historic core crowds around common arrival windows. Build the climb after the ticket rather than hoping to return through queues.'],
          ['The Georgian circuit gains height', 'Royal Crescent is not a flat extension from the baths. Use buses or the river-side branch when walking capacity is limited.'],
          ['Spa bathing is a different product', 'Modern thermal bathing, Roman archaeology and Pump Room dining have separate bookings and age or timing conditions. Do not conflate them.']
        ],
        duration: 'Allow six to eight hours for one major interior and either the Georgian climb or river branch. A compact Roman Baths and abbey visit can fit four hours.',
        combine: 'Combine Bath with its river and Georgian streets. Keep Bristol, Wells and Stonehenge for separate days rather than compressing them into the same rail stop.',
        verify: 'Check Roman Baths and abbey admission products, any event closures, Bath Spa rail service and mobility information before setting the route.',
        sources: [
          ['https://www.romanbaths.co.uk/visit', 'Roman Baths — official visit planning'],
          ['https://www.bathabbey.org/visiting/', 'Bath Abbey — official visitor information']
        ]
      }),
      g({
        slug: 'bristol-harbourside-clifton',
        name: 'Bristol Harbourside & Clifton',
        instrument: 'Harbour-to-ridge gradient board',
        layout: 'floating-harbour-cross-section',
        imageQuery: 'Bristol harbour coloured houses England',
        imageAlt: 'Boats and waterside buildings around Bristol Floating Harbour',
        purpose: 'Choose a harbour-led city day or a Clifton ridge day and connect them with one intentional bus or uphill walk, rather than letting the steep gap turn museums, bridge and waterfront into disconnected stops.',
        summary: 'Start at Temple Meads or the centre, read the working harbour through one museum or ship, then either finish around Clifton or stay with the water and city centre.',
        choices: [
          ['Harbour collections', 'Use M Shed, a historic ship or Arnolfini as the main interior and complete the Floating Harbour circuit. This is compact and weather-resilient.'],
          ['Clifton and suspension bridge', 'Give the village, gorge and bridge viewpoint priority, using the harbour as a shorter arrival line. This adds elevation and bus dependence.'],
          ['Street and food city', 'Connect Old City, St Nicholas Market and a shorter waterside section. It suits a flexible day but sacrifices the major bridge panorama.']
        ],
        access: 'Temple Meads is east of the Floating Harbour; Clifton is uphill and west. Choose a bus or one sustained climb rather than alternating. Harbour ferries, city buses and rail tickets are separate products, and the suspension bridge visitor facilities sit on a specific side.',
        tradeoff: 'A full ship visit, harbour circuit and relaxed Clifton bridge walk exceed a casual day. Choosing Clifton sacrifices some museum depth; choosing the harbour avoids the hill but gives up the gorge perspective.',
        stages: [
          ['Cross from the station', 'Walk or take a verified bus from Temple Meads to the harbour edge, recording the return stop before entering the waterfront maze.'],
          ['Read one harbour story', 'Choose M Shed, a ship or a compact public-realm circuit. Follow the quays in one direction instead of crossing every footbridge.'],
          ['Commit to water or ridge', 'Stay with Wapping Wharf and the centre or take the planned climb or bus to Clifton. Do not add the ridge late without checking the return.'],
          ['Finish at a direct return line', 'End near a bus to Temple Meads or descend through a named route. Avoid relying on an unknown downhill shortcut after dark or rain.']
        ],
        fallback: 'If wind or rain makes Clifton unpleasant, keep M Shed, Arnolfini and the Old City with short covered links. If a harbour interior closes, use the public quays and one verified city museum.',
        watch: [
          ['Bristol is hillier than the map suggests', 'The harbour, centre and Clifton sit at different levels. Preserve energy or use a bus intentionally.'],
          ['Bridge access has two sides', 'Viewpoints, visitor facilities and road crossings are not identical. Confirm the intended side before climbing.'],
          ['Harbour vessels have separate tickets', 'Museum entry, ship visits and ferry transport do not share one admission. Treat each as an explicit choice.']
        ],
        duration: 'Allow six to eight hours for the harbour plus Clifton, or five hours for a collection-led harbour day. Add a historic ship only when it is the main paid anchor.',
        combine: 'Combine the harbour with Old City or Clifton with the Downs. Keep Bath and rural Somerset as separate excursions.',
        verify: 'Check M Shed or the selected vessel, suspension bridge visitor information, bus status and any harbour event closure before departure.',
        sources: [
          ['https://www.bristolmuseums.org.uk/m-shed/', 'M Shed — official museum information'],
          ['https://cliftonbridge.org.uk/visit/', 'Clifton Suspension Bridge — official visitor information']
        ]
      }),
      g({
        slug: 'wells-glastonbury-mendips',
        name: 'Wells, Glastonbury & the Mendip Edge',
        instrument: 'Somerset bus-and-weather docket',
        layout: 'cathedral-tor-decision-sheet',
        imageQuery: 'Wells Cathedral west front Somerset',
        imageAlt: 'The west front of Wells Cathedral in Somerset',
        purpose: 'Choose Wells or Glastonbury as the main town and add only the rural edge supported by the day’s bus, weather and daylight, instead of presenting cathedral, tor and caves as a single compact circuit.',
        summary: 'Leave Bath or Bristol on a verified route, give one town and its major site enough time, then use the second place or Mendip landscape only when the onward and return connections are secure.',
        choices: [
          ['Wells cathedral city', 'Prioritize the cathedral, close and Bishop’s Palace area. This creates the strongest compact heritage day and the simplest return.'],
          ['Glastonbury abbey and Tor', 'Use the abbey and town before a weather-dependent Tor climb. It offers landscape and legend but requires more walking and timing.'],
          ['Mendip or cave branch', 'Choose one booked cave or landscape site with a named bus, tour or car plan. This gains geology but sacrifices the two-town narrative.']
        ],
        access: 'Wells and Glastonbury have no mainline railway station. Bus origins, stopping patterns and Sunday frequencies differ from Bath and Bristol. Mendip cave sites add another rural connection; confirm the final return before committing to an uphill or underground visit.',
        tradeoff: 'Wells Cathedral, Glastonbury Abbey, the Tor and a cave cannot all receive useful time in one public-transport day. Choosing one town sacrifices the other’s depth but protects the return and a real meal.',
        stages: [
          ['Board the correct rural service', 'Confirm the destination display, stop and final return before leaving the city base. Keep any booked cave or abbey time clear of a tight arrival.'],
          ['Read one town completely', 'Use the cathedral close or abbey-and-town spine as the first full block. Locate the onward stop before adding lunch or a climb.'],
          ['Commit to the secondary layer', 'Add Glastonbury Tor, the second town or one Mendip site only if weather and transport still match the plan. Otherwise deepen the first town.'],
          ['Return with one service in reserve', 'Reach the correct roadside or town-centre stop early. Rural diversions and traffic can make the last useful connection unforgiving.']
        ],
        fallback: 'If the onward bus or weather fails, remain in Wells or Glastonbury for the complete town circuit, museum or interior. If rural service is already unstable at the base, replace the day with Bath or Bristol rather than relying on taxis.',
        watch: [
          ['No rail station means no automatic rescue', 'A missed bus can create a long wait or expensive taxi. Save the final two return options before departure.'],
          ['The Tor is exposed', 'Wind, rain and muddy slopes change the climb. The abbey and town remain a valid complete plan when the hill is unsuitable.'],
          ['Caves are booked destinations', 'Underground attractions have separate arrival, mobility and ticket conditions. Do not add one as a casual roadside stop.']
        ],
        duration: 'Allow a full day from Bath or Bristol for one main town and one modest extension. Wells or Glastonbury alone needs four to six hours including bus margin.',
        combine: 'Combine Wells with its close and palace edge, or Glastonbury with the Tor. Pairing both towns is reasonable only when the dated bus pattern leaves a protected return.',
        verify: 'Check Wells Cathedral or Glastonbury Abbey access, the exact bus timetable, Tor weather and any cave booking or road disruption on the actual day.',
        sources: [
          ['https://www.wellscathedral.org.uk/visit', 'Wells Cathedral — official visitor information'],
          ['https://www.glastonburyabbey.com/plan-your-visit.php', 'Glastonbury Abbey — official visitor information']
        ]
      })
    ]
  }),
  c({
    slug: 'cornwall-devon',
    reviewDate: '11 October 2026',
    reviewDateISO: '2026-10-11',
    name: 'Cornwall & Devon',
    nation: 'England',
    band: 'england-south',
    family: 'peninsula-weather-log',
    label: 'Peninsula weather log',
    tagline: 'Choose a rail spine, then add only the coast or moor return you can protect.',
    hubIntro: 'This is a long peninsula, not one compact day-trip region. The dependable rail spine reaches Exeter St David’s, Plymouth, Truro and Penzance; the St Ives and Maritime branches serve separate west and south-coast bases. St Erth is the transfer for the St Ives branch; Truro is the Maritime Line gateway to Perranwell, Penryn, Penmere, Falmouth Town and Falmouth Docks. Dartmoor is a different Exeter-based day: the Dartmoor Line reaches Okehampton, but the station, town interchange and open-moor trailheads are not interchangeable. Choose one corridor per day and preserve its final return.',
    stay: 'For four to six nights, use two bases only if the trip genuinely crosses the peninsula: St Ives or Penzance for west Cornwall, Falmouth or Truro for the Fal, and Exeter for the city and Dartmoor Line. St Ives keeps the harbour and Tate close but does not make Land’s End a casual extension; Penzance is the stronger western rail-and-bus interchange. Falmouth suits the Maritime Line and harbour; Truro is the better central rail junction. Exeter is the resilient Devon base; Okehampton is useful for a deliberately moor-focused overnight. A two-night trip should stay on one line rather than spend a daylight block changing hotels.',
    transfer: 'Use named rail corridors: the St Erth–Lelant–Carbis Bay–St Ives branch; Truro’s Maritime Line through Perranwell, Penryn and Penmere to Falmouth Town and Falmouth Docks; and the Exeter St David’s–Crediton–Okehampton Dartmoor Line. They solve different days, not one coast circuit. Transport for Cornwall’s route 16/16A timetable has inland trips via Gulval and Nancledra and selected 16A journeys via Gurnards Head Hotel and Zennor Turn; the variants make a date- and direction-specific check essential. A ferry from Falmouth is a separate water crossing, not a rail replacement, and rural Dartmoor buses vary by day and season.',
    season: 'Atlantic wind, rain, surf and tide affect cliff paths and ferry operation throughout the year. Fal River lists the St Mawes passenger ferry as year-round but says sailings remain subject to weather and tide; its Enterprise Boats Falmouth–Trelissick–Malpas product is seasonal, with the 2026 window shown by the operator. Do not carry that 2026 season into a later year. Short winter daylight also makes an exposed Penwith or moor walk a poor late start. Before leaving the base, compare the dated operator timetable, live disruption, tide, forecast and sunset; if the last useful connection cannot be protected, choose the town day.',
    fallback: 'Keep one complete indoor-and-town alternative beside each base: Tate and the harbour at St Ives; the National Maritime Museum Cornwall and Falmouth town; or Exeter Cathedral, RAMM and the quays. If a boat is cancelled, remain on its departure shore. If a rural bus return is uncertain, shorten to a signed walk from the rail station or make the city the whole day. Never treat a taxi as the planned rescue for a remote coastal or moor route.',
    sources: [
      ['https://www.visitcornwall.com/', 'Visit Cornwall — official destination guide'],
      ['https://www.visitdevon.co.uk/', 'Visit Devon — official destination guide'],
      ['https://www.gwr.com/', 'Great Western Railway — rail planning and service updates']
    ],
    guides: [
      g({
        slug: 'st-ives-penwith',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        name: 'St Ives & the Penwith Coast',
        instrument: 'Branch-line and headland clock',
        layout: 'gallery-coast-tide-strip',
        imageQuery: 'St Ives Cornwall harbour beach',
        imageAlt: 'St Ives harbour and waterfront in Cornwall',
        purpose: 'Choose a station-to-gallery town day or one separately verified Penwith bus or coast section, matching the St Erth branch connection to the last practical return.',
        summary: 'From St Erth, use the branch through Lelant and Carbis Bay to St Ives; stay in town for Tate or the Hepworth, or commit to one dated bus corridor with its return saved before leaving the harbour.',
        choices: [
          ['St Ives art and harbour', 'Use Tate St Ives, Barbara Hepworth or one collection plus the harbour and beaches. This is the strongest poor-weather and car-free day.'],
          ['Short coast walk', 'Take one signed section from St Ives with a clear turn-back or bus return. It adds landscape but sacrifices museum depth.'],
          ['Penwith bus circuit', 'Use a verified bus to one further town or headland, not every famous stop. This gains reach but depends most on seasonal frequency.']
        ],
        access: 'Change at St Erth for the St Ives branch; its named stops are Lelant, Carbis Bay and St Ives, whose station stands above town. Transport for Cornwall route 16/16A connects Penzance and St Ives: the operator timetable shows inland journeys via Gulval and Nancledra plus selected 16A journeys at Gurnards Head Hotel and Zennor Turn. Do not assume every 16A run serves the coastal stops; choose a journey for the exact date and direction and confirm the return before leaving St Ives. The separate 14/18 corridor links St Ives/Penzance with Truro via Hayle, Camborne and Redruth. None of these claims a Land’s End connection; verify a separate current route and stop if adding that area.',
        tradeoff: 'Tate St Ives, the Hepworth garden and a substantial coast extension compete for the same daylight. Choosing art gives up the distant headland; choosing Penwith gives up collection depth and a relaxed harbour meal.',
        stages: [
          ['Ride the branch deliberately', 'Make the St Erth connection with enough margin and note the final branch train. Descend toward the first booked gallery or harbour line.'],
          ['Read harbour and collection', 'Use one museum, the working harbour and a bounded town circuit. Avoid walking past the bus stop needed for the afternoon branch.'],
          ['Commit to town or coast', 'Stay for the second collection and beaches or board the verified bus or signed path. Turn back early when wind, rain or delay increases.'],
          ['Climb to the return', 'Allow time to regain the station or reach the correct bus interchange. Do not leave the uphill station approach to the final minutes.']
        ],
        fallback: 'If coast conditions or buses fail, keep Tate St Ives, the Hepworth garden when open, harbour lanes and a sheltered beach edge. If galleries close, use the town and a short lower-risk coastal segment rather than a distant taxi plan.',
        watch: [
          ['The branch connection is a hard edge', 'A late bus into St Ives can miss the useful train at St Erth. Protect the interchange rather than assuming the main line will wait.'],
          ['Coast paths are weather-facing', 'Cliffs, wet rock and wind make mileage a poor planning measure. Carry a turn-back point and avoid unsurveyed shortcuts.'],
          ['Tides alter beach links', 'A beach that appears to connect two areas may narrow or disappear. Use streets and signed paths as the dependable route.']
        ],
        duration: 'Allow a full day from a nearby base for St Ives plus one chosen extension. The harbour and one gallery need at least four to five hours without Penwith.',
        combine: 'Combine St Ives with one gallery pair or one coast branch. Keep Land’s End, Penzance and St Michael’s Mount as separate weather-and-transport days.',
        verify: 'Check Tate and Hepworth admission, the St Erth branch service, Transport for Cornwall buses, tide and coast-path weather before departure.',
        sources: [
          ['https://www.tate.org.uk/visit/tate-st-ives', 'Tate St Ives — official visitor information'],
          ['https://www.tate.org.uk/visit/tate-st-ives/barbara-hepworth-museum-and-sculpture-garden', 'Barbara Hepworth Museum and Sculpture Garden — official visitor information'],
          ['https://www.transportforcornwall.co.uk/services/TFCN/16', 'Transport for Cornwall route 16/16A — Penzance and St Ives corridor'],
          ['https://www.transportforcornwall.co.uk/services/TFCN/14', 'Transport for Cornwall route 14/18 — St Ives, Penzance and Truro corridor'],
          ['https://www.gwr.com/plan-journey/train-times', 'Great Western Railway — dated rail journey planning']
        ],
        faq: [
          ['Where do I change for St Ives?', 'Change from the main line at St Erth for the branch via Lelant and Carbis Bay to St Ives. Allow time for the uphill station-to-town walk on return and check the day’s GWR timetable.'],
          ['Can I reach Zennor on the St Ives bus?', 'Some selected route 16A journeys call at Gurnards Head Hotel and Zennor Turn, while other 16/16A journeys use the inland corridor via Gulval and Nancledra. Read the operator timetable for your chosen date and direction, then save the return before starting a one-way coastal walk.'],
          ['What is the low-weather plan?', 'Stay near the harbour and choose Tate St Ives or the Barbara Hepworth Museum and Sculpture Garden, subject to each venue’s opening and admission information. Keep the other visit or an exposed coast walk for another day.']
        ]
      }),
      g({
        slug: 'falmouth-roseland',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        name: 'Falmouth Harbour & the Roseland',
        instrument: 'Estuary vessel decision card',
        layout: 'harbour-ferry-compass',
        imageQuery: 'Falmouth Cornwall harbour Pendennis',
        imageAlt: 'Falmouth harbour and the Carrick Roads estuary in Cornwall',
        purpose: 'Choose a museum-and-harbour Falmouth day or one estuary crossing, distinguishing passenger ferries, seasonal boats and coast paths before the Roseland becomes an unplanned final-mile problem.',
        summary: 'Arrive on the correct Falmouth branch station, use the maritime museum or Pendennis as the fixed anchor, then cross the estuary only with a verified outward and return sailing.',
        choices: [
          ['Maritime museum and town', 'Keep the day around the National Maritime Museum, harbour streets and a short waterfront line. It is the most resilient choice in variable weather.'],
          ['Pendennis headland', 'Give the castle and headland views the main block. This adds walking and exposure but remains on the Falmouth side.'],
          ['Roseland crossing', 'Use one confirmed passenger ferry to St Mawes or another named landing. It creates a two-shore day but makes the final sailing non-negotiable.']
        ],
        access: 'From Truro the Maritime Line calls at Perranwell, Penryn, Penmere, Falmouth Town and Falmouth Docks; select the stop for the first anchor rather than assuming all are interchangeable. Fal River’s St Mawes Ferry runs between Prince of Wales Pier, Falmouth and The Quay, St Mawes; the operator describes it as year-round, with a reduced winter pattern, but all sailings are subject to tide and weather. Enterprise Boats is a separate seasonal Falmouth–Trelissick–Malpas route; the operator also lists special high-tide cruises to Truro for 2026. Bus 496 from Malpas is a separately charged onward connection. King Harry Ferry is a vehicle crossing between Feock and Philleigh, not the Falmouth passenger ferry. Confirm a named outward and return product, its landing and live sailing status before making a two-shore day.',
        tradeoff: 'A full museum, Pendennis and a relaxed Roseland crossing do not share one comfortable day. Crossing the estuary sacrifices collection or castle depth; staying in Falmouth gives up the village but removes the marine cutoff.',
        stages: [
          ['Use the correct branch stop', 'Leave the train at the station nearest the first anchor and note the final service. Do not descend to the wrong quay for a similarly named boat.'],
          ['Complete the harbour anchor', 'Visit the maritime museum or Pendennis and read the working harbour from one shore before buying another transport product.'],
          ['Commit to one water move', 'Board only the verified ferry with a return sailing and weather policy. If it is cancelled, deepen Falmouth instead of improvising around the estuary by road.'],
          ['Return before the marine edge', 'Come back with a sailing in reserve and allow the uphill station approach. Keep a town-side meal as the final flexible element.']
        ],
        fallback: 'If ferries stop, use the museum, harbour, art gallery and Pendennis approach according to weather. If the headland is exposed, retain the lower waterfront and indoor collection without attempting another coast.',
        watch: [
          ['Quays are product-specific', 'Sightseeing, passenger and event boats may leave from different landings. Confirm the operator and boat name, not only “Falmouth harbour.”'],
          ['Wind can break the two-shore plan', 'A fine rail journey does not guarantee an estuary sailing. Keep the complete Falmouth alternative ready.'],
          ['The town rises from the water', 'Walking between harbour, Pendennis and stations adds gradients. Choose the final station before the day becomes tired.']
        ],
        duration: 'Allow six to eight hours for Falmouth and one ferry branch, or five hours for the museum-and-harbour route. Roseland depth is better with an overnight or separate day.',
        combine: 'Combine the museum with the harbour or Pendennis, or Falmouth with one St Mawes crossing. Keep St Ives and the Lizard for different days.',
        verify: 'Check museum or castle access, the exact Fal River sailing, branch-line service, wind and the final return before committing to the second shore.',
        sources: [
          ['https://nmmc.co.uk/visit/', 'National Maritime Museum Cornwall — official visit planning'],
          ['https://www.falriver.co.uk/ferries/st-mawes-ferry', 'Fal River — St Mawes Ferry route and operating information'],
          ['https://www.falriver.co.uk/ferries/enterprise-boats', 'Fal River — Enterprise Boats seasonal route and tide information'],
          ['https://www.kingharryscornwall.co.uk/getting-about/ferries/king-harry-ferry/', 'King Harry Ferry — Feock–Philleigh crossing and current service information'],
          ['https://www.falriver.co.uk/ferries', 'Fal River — ferry status and product directory'],
          ['https://www.falriver.co.uk/trains/great-western-railway', 'Fal River — Maritime Line stations and rail planning'],
          ['https://www.english-heritage.org.uk/visit/places/pendennis-castle/', 'English Heritage — Pendennis Castle visitor information']
        ],
        faq: [
          ['Which Falmouth stop is closest to the harbour?', 'Falmouth Town is the central-town stop; Falmouth Docks is nearer the docks and Pendennis approach, while Penmere sits uphill from the centre. Check the walk to your first anchor and return to the same or another planned stop.'],
          ['Is the St Mawes boat the same as Enterprise Boats?', 'No. The St Mawes passenger ferry links Prince of Wales Pier with The Quay at St Mawes. Enterprise Boats is a seasonal Falmouth–Trelissick–Malpas route; its operator also lists special high-tide cruises to Truro for 2026. Bus 496 from Malpas is a separately charged onward connection. Check current status and the return sailing for either product.'],
          ['What should I do if wind cancels the crossing?', 'Stay on the Falmouth shore and use the museum, town or Pendennis according to conditions. Do not attempt to recreate the crossing by an unplanned road transfer; King Harry is a separate vehicle ferry route.']
        ]
      }),
      g({
        slug: 'exeter-dartmoor-edge',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        name: 'Exeter & the Dartmoor Edge',
        instrument: 'Cathedral-to-moor weather gate',
        layout: 'red-stone-moor-transect',
        imageQuery: 'Exeter Cathedral Devon green',
        imageAlt: 'Exeter Cathedral and Cathedral Green in Devon',
        purpose: 'Use Exeter as a complete historic city or as the rail gateway to one Dartmoor edge, naming the branch station, onward bus or walking route instead of treating the national park as directly outside the cathedral.',
        summary: 'Read Exeter’s cathedral and quays first, then remain in the city or commit to one verified moor gateway with weather, daylight and the final rail return already checked.',
        choices: [
          ['Exeter city depth', 'Prioritize the cathedral, Roman and medieval streets, museum and quays. This is the strongest all-weather choice and needs no rural connection.'],
          ['Rail-to-moor gateway', 'Use a current Dartmoor Line or other rail gateway and a bounded local walk. It adds landscape while preserving a train-based return.'],
          ['Bus or guided moor day', 'Reach a deeper moor village or trail by verified bus, tour or car. This gives broader scenery but depends most on weather and sparse frequency.']
        ],
        access: 'For a car-free northern edge, board the Dartmoor Line from Exeter St David’s via Crediton. The line serves both Okehampton Station and the newer Okehampton Interchange: the station is the named start for the Yes Tor and High Willhays walk, while the interchange is on the town’s eastern side and is not the trailhead. The walk is a serious open-moor route, not a station stroll: carry a map, set a daylight turn-back, check weather and heed military red flags. Haytor Visitor Centre is a different eastern gateway at Haytor Vale, with the lower car park and walks to Haytor Rocks and the old Granite Tramway; use it by car or only with a dated bus/tour plan verified for that day. Do not infer a direct Exeter-to-Haytor bus from the rail map.',
        tradeoff: 'A full Exeter heritage day and a meaningful moor walk are separate days. Choosing the moor sacrifices cathedral and museum depth; staying in the city gives up open landscape but avoids an exposed, timetable-bound return.',
        stages: [
          ['Choose city station or gateway', 'Leave Exeter Central for the compact city or use St David’s and the correct branch for the rural plan. Do not cross the city with luggage between them without time.'],
          ['Complete the urban anchor', 'Use the cathedral and green or the museum and quays as one city line. For a moor day, keep this step short and reach the branch train on time.'],
          ['Pass the weather gate', 'Continue only on the verified rail, bus or signed walk when visibility, surface and daylight remain suitable. Use a firm turn-back point.'],
          ['Return through Exeter', 'Reach the gateway before the final comfortable service and allow any change at St David’s. Use Exeter as the fallback evening, not another rural detour.']
        ],
        fallback: 'If Dartmoor weather or transport fails, use Exeter Cathedral, the Royal Albert Memorial Museum and the quays as a complete city day. If a city interior closes, retain the walls, green and river route.',
        watch: [
          ['Dartmoor is not one stop', 'Rail and bus gateways serve different edges and trails. Name the exact start instead of navigating to “Dartmoor.”'],
          ['Open moor conditions change quickly', 'Mist, wind, rain and saturated ground can erase easy-looking routes. Carry a proper route and turn back early.'],
          ['Exeter stations are not interchangeable', 'Central is higher and closer to the core; St David’s is lower and serves mainline connections. Preserve the transfer time.']
        ],
        duration: 'Allow a full day for Exeter or one Dartmoor gateway. A city-plus-short-rural combination works only when the branch schedule creates a clear five-to-seven-hour window.',
        combine: 'Combine Exeter’s cathedral with the quays, or a rail gateway with one signed local walk. Keep the deeper moor, Plymouth and Cornwall for separate days.',
        verify: 'Check cathedral access, Dartmoor National Park alerts, GWR or local bus service, Met Office conditions and daylight before leaving the city.',
        sources: [
          ['https://www.exeter-cathedral.org.uk/plan-your-visit/', 'Exeter Cathedral — official visitor information'],
          ['https://dartmoorline.com/', 'Dartmoor Line — official railway route and service planning'],
          ['https://greatscenicrailways.co.uk/lines/dartmoor-line/', 'Great Scenic Railways — Okehampton station and named walk access'],
          ['https://www.dartmoor.gov.uk/enjoy-dartmoor/planning-your-visit/travel-information', 'Dartmoor National Park — seasonal public transport guidance'],
          ['https://www.dartmoor.gov.uk/enjoy-dartmoor/planning-your-visit/our-visitor-centres/haytor-visitor-centre', 'Dartmoor National Park — Haytor Visitor Centre and access'],
          ['https://rammuseum.org.uk/visit/', 'Royal Albert Memorial Museum — official visitor information']
        ],
        faq: [
          ['Which station starts the Okehampton moor walk?', 'Okehampton Station is the walk gateway identified for Yes Tor and High Willhays. Okehampton Interchange is a separate station on the town’s eastern side; do not confuse it with the trail start. Check the Dartmoor Line timetable and your return before setting out.'],
          ['Can I take the train to Haytor?', 'No rail station serves Haytor Visitor Centre. It is at Haytor Vale, about three miles west of Bovey Tracey. Plan a car journey or verify a dated seasonal bus or tour; if that connection is not confirmed, choose the Okehampton rail gateway or remain in Exeter.'],
          ['What is the safer bad-weather alternative?', 'Make Exeter the full day: Cathedral Green and Exeter Cathedral, the Royal Albert Memorial Museum when open, and the quays. Open-moor visibility, wind, wet ground, military red flags and short daylight can make the walk unsuitable even while the train is running.']
        ]
      })
    ]
  })
];
