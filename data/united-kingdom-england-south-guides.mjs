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
    tagline: 'Separate walkable Oxford from every rural last mile beyond it.',
    hubIntro: 'Oxford is a rail-connected walking city, while Blenheim Palace and the Cotswold towns depend on buses, tours, bicycles or a car. A strong base plan distinguishes college opening windows from rural timetables and never treats “the Cotswolds” as one station or one attraction.',
    stay: 'Two nights supports a complete Oxford day plus one palace or rural excursion. Three nights allows a weather-safe museum alternative and a second landscape day without carrying luggage onto local buses.',
    transfer: 'Oxford railway station, Gloucester Green coach station and suburban park-and-ride stops solve different arrivals. For Blenheim or villages, verify the exact stop, Sunday pattern and return before boarding; a place name on a regional map is not a walkable connection.',
    season: 'College access changes with terms, ceremonies and private events. Rural buses thin on some days, winter light shortens village walks, and peak weekends increase road pressure around Woodstock and popular Cotswold towns.',
    fallback: 'When a college, palace interior or rural connection fails, keep a complete Oxford museum-and-river day. Do not improvise a taxi chain through multiple villages without a confirmed return.',
    sources: [
      ['https://www.experienceoxfordshire.org/', 'Experience Oxfordshire — official destination guide'],
      ['https://www.gwr.com/', 'Great Western Railway — train planning and service updates'],
      ['https://www.oxfordbus.co.uk/', 'Oxford Bus Company — local and regional bus information']
    ],
    guides: [
      g({
        slug: 'oxford-colleges-museums',
        name: 'Oxford Colleges, Libraries & Museums',
        instrument: 'College-opening matrix',
        layout: 'quadrangle-threshold-plan',
        imageQuery: 'Oxford Radcliffe Camera university street',
        imageAlt: 'Radcliffe Camera and historic university buildings in Oxford',
        purpose: 'Choose one college or library interior and build a coherent university-city walk around its actual public opening window, rather than arriving with a list of quadrangles that may be closed for academic use.',
        summary: 'Start from the railway station or Gloucester Green, confirm the booked or open college, connect Bodleian and Radcliffe Square, then finish with one museum or river edge.',
        choices: [
          ['College and library interiors', 'Prioritize one verified college plus the Bodleian visit product that matters. This gives the strongest institutional reading but makes the day least flexible.'],
          ['Free collections', 'Use the Ashmolean, Pitt Rivers or Museum of Natural History as the anchor, with university exteriors between them. It is resilient in poor weather but lighter on private quadrangles.'],
          ['City and river walk', 'Keep interiors minimal and connect Carfax, Radcliffe Square, Christ Church Meadow and the Thames or Cherwell edge. This suits uncertain openings but sacrifices collection depth.']
        ],
        access: 'Oxford station is west of the historic core; Gloucester Green is closer to the northern pedestrian approaches. Buses do not cross every central street. Walk in one direction and identify the college’s current visitor gate, because ceremonial and student entrances may differ.',
        tradeoff: 'Multiple colleges, a full Ashmolean visit and a river walk exceed a comfortable day. Choose one controlled interior and one secondary layer; the sacrifice is deliberate because opening windows and security cannot be compressed.',
        stages: [
          ['Enter through the working city', 'Walk from the station through Carfax or approach from Gloucester Green, noting the final return line. Do not begin with an unverified college queue.'],
          ['Meet the booked threshold', 'Use the official visitor gate and respect academic closures. Keep the Bodleian or college tour in its exact product and time slot.'],
          ['Connect the public squares', 'Move through Radcliffe Square, Broad Street and one neighboring lane without collecting every college frontage. Pause before choosing museum or meadow.'],
          ['Finish at collection or water', 'End at the Ashmolean for a bounded gallery set or at Christ Church Meadow and the river. Leave toward the station without retracing the full historic core.']
        ],
        fallback: 'If the chosen college closes, retain Radcliffe Square and Broad Street, then use the Ashmolean or university museums according to current admission. The city’s public realm remains coherent without forcing another private interior.',
        watch: [
          ['Academic use overrides tourism', 'Terms, ceremonies and examinations can change access. A college website is more reliable than a generic opening-hours list.'],
          ['Similar names hide different doors', 'Libraries, colleges and churches may share precincts but use separate visitor entrances. Read the booked product carefully.'],
          ['Punting is a separate weather decision', 'River hire adds time, conditions and a different starting point. Do not use it as an automatic final hour when wind, queues or daylight are poor.']
        ],
        duration: 'Allow six to eight hours with one controlled interior, one museum or meadow branch and breaks. A compact exterior university circuit can fit three hours.',
        combine: 'Combine with Jericho or Christ Church Meadow because both extend the walk without another rural transfer. Keep Blenheim and Cotswold villages for separate days.',
        verify: 'Check the exact college and Bodleian visitor notices, museum entry conditions, university event closures and rail service before setting the order.',
        sources: [
          ['https://www.ox.ac.uk/visitors/visiting-oxford', 'University of Oxford — official visitor information'],
          ['https://www.ashmolean.org/plan-your-visit', 'Ashmolean Museum — official visit planning']
        ]
      }),
      g({
        slug: 'blenheim-woodstock',
        name: 'Blenheim Palace & Woodstock',
        instrument: 'Palace-gate connection sheet',
        layout: 'estate-arrival-section',
        imageQuery: 'Blenheim Palace Oxfordshire landscape',
        imageAlt: 'Blenheim Palace and its landscaped grounds in Oxfordshire',
        purpose: 'Plan the bus, palace gate, ticketed interior and landscaped grounds as one estate day, while deciding whether Woodstock is a meal-and-return base or a meaningful town stop.',
        summary: 'Leave Oxford on a verified service, enter through the correct Blenheim gate, choose palace depth or landscape distance, and protect the return from Woodstock before evening frequency changes.',
        choices: [
          ['Palace interior and core grounds', 'Use the main visitor product and concentrate on state rooms, formal gardens and the nearby lake edge. This is the clearest first visit but not the longest landscape walk.'],
          ['Estate landscape day', 'Give the park, lake and longer paths priority, treating the palace interior as short or optional. It suits fair weather and stronger walkers.'],
          ['Woodstock and selective estate', 'Use Woodstock streets, church and a meal around a shorter palace or garden visit. This reduces estate depth but creates a less pressured day.']
        ],
        access: 'Blenheim is outside Oxford, and the useful bus stop and pedestrian gate must be confirmed with the current operator and palace advice. Do not navigate to the vehicle entrance by default. Record the final practical return from Woodstock before entering the estate.',
        tradeoff: 'A full state-room visit, formal gardens, distant park circuit and relaxed Woodstock meal do not fit equally. Choosing the interior sacrifices landscape distance; choosing the long park walk sacrifices indoor interpretation.',
        stages: [
          ['Commit to the outbound service', 'Board the verified Oxford–Woodstock service with the correct stop identified. Keep the palace booking late enough to absorb ordinary road delay.'],
          ['Enter the right gate', 'Follow current pedestrian directions and ticket conditions. Use the estate map to separate formal gardens from longer park routes before walking.'],
          ['Choose interior or distance', 'Complete the palace-and-garden core or the landscape loop, not both at maximum depth. Keep weather and closing gates visible.'],
          ['Return through Woodstock', 'Use the town for a planned meal or short street circuit, then reach the correct stop before the service gap. Do not assume a taxi will solve a missed final bus.']
        ],
        fallback: 'If the palace interior is unavailable, use Woodstock and the estate areas included in the current ticket only when access remains open. In severe weather, replace the excursion with Oxford museums rather than waiting at rural stops.',
        watch: [
          ['Ticket products change access', 'Palace, park, garden and event products may not cover identical areas. Read the current inclusion rather than relying on an older estate map.'],
          ['The grounds are real distance', 'The lake and wider park consume more time than the formal gardens. Pick a turning point before leaving the core.'],
          ['Evening frequency matters', 'Road traffic and thinner later buses can turn a relaxed meal into a missed return. Save the stop and timetable before arrival.']
        ],
        duration: 'Allow six to eight hours from Oxford for the estate, one chosen depth and Woodstock. A short interior-and-garden visit still requires at least half a day including buses.',
        combine: 'Combine with Woodstock only; Oxford’s colleges or museums work better on another day. Do not add a second Cotswold village without a private transport plan.',
        verify: 'Check Blenheim’s current ticket areas and event closures, the exact bus operator and stop, the return timetable and weather before leaving Oxford.',
        sources: [
          ['https://www.blenheimpalace.com/visitus/', 'Blenheim Palace — official visitor information'],
          ['https://www.oxfordbus.co.uk/', 'Oxford Bus Company — Woodstock service information']
        ]
      }),
      g({
        slug: 'cotswold-towns-without-car',
        name: 'Cotswold Towns Without a Car',
        instrument: 'Village-return dependency chart',
        layout: 'bus-window-gazetteer',
        imageQuery: 'Cotswolds village stone houses England',
        imageAlt: 'Honey-coloured stone houses in a Cotswold village',
        purpose: 'Choose one realistic public-transport corridor through the Cotswolds, identify the final return before departure and avoid presenting scattered villages as a walkable open-air attraction.',
        summary: 'Select a rail gateway and one or two connected towns, keep the route inside the published bus pattern, and treat footpaths or a tour as separate products rather than invisible links.',
        choices: [
          ['Moreton-in-Marsh corridor', 'Use the rail station as the firm gateway and connect only villages served by a verified bus or booked tour. This is the strongest car-free structure but not the broadest circuit.'],
          ['Bourton and Stow focus', 'Base the day on two popular towns with a known connection. It gives classic streets and services but can be crowded and timetable-dependent.'],
          ['Guided or private circuit', 'Use a licensed tour or car when several villages and rural stops matter. This buys geographic reach but gives up independent timing and increases cost.']
        ],
        access: 'There is no single Cotswolds station. Moreton-in-Marsh, Cheltenham, Oxford and other gateways serve different edges. Build the day from the actual rail arrival, bus route and final return, and distinguish a roadside stop from a town centre.',
        tradeoff: 'Public transport protects independence and cost but restricts the number and order of villages. A tour increases reach but reduces dwell-time control. The route refuses to promise multiple famous villages without naming the connection between them.',
        stages: [
          ['Arrive at one gateway', 'Use the rail or coach arrival that connects to the chosen bus corridor. Do not change gateways mid-day simply because two villages look close on a map.'],
          ['Read the first town fully', 'Walk a bounded town circuit, include a meal or interior and locate the onward stop before leaving the centre.'],
          ['Commit to one connection', 'Take the verified bus, booked tour or signed path to the second place. If it is late or full, activate the same-town fallback rather than improvising a third village.'],
          ['Protect the rail return', 'Reach the gateway with one service in reserve where possible. Keep taxi numbers as contingency, not as the primary unbooked plan.']
        ],
        fallback: 'If the connecting bus fails, stay in the gateway or first town and use its church, market streets, local walk and meal options. If weather affects paths, remove the rural walk before removing the protected return.',
        watch: [
          ['Sunday is a different network', 'Routes and frequencies can change sharply on Sundays and holidays. Check the exact travel date, not a weekday screenshot.'],
          ['Village names do not imply proximity', 'Narrow roads and sparse cross-links make map distance misleading. Never assume a short taxi wait or safe roadside walk.'],
          ['Footpaths need their own evidence', 'A public right of way can be muddy, unsigned at junctions or far from a bus stop. Carry a proper route and turn-back point.']
        ],
        duration: 'Allow a full day for one gateway and one or two connected towns. More than two independent stops usually requires a booked tour, car or an overnight stay.',
        combine: 'Combine villages that share the same published corridor. Keep Oxford, Blenheim or Bath as separate base days rather than using them as last-minute add-ons.',
        verify: 'Check the official destination transport advice, the named bus operator’s dated timetable, rail disruptions, daylight and any walking-route condition before departure.',
        sources: [
          ['https://www.cotswolds.com/plan-your-trip/getting-to-the-cotswolds/', 'Cotswolds tourism — official access guidance'],
          ['https://www.gwr.com/', 'Great Western Railway — rail planning and service updates']
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
    reviewDate: '11 October 2026',
    reviewDateISO: '2026-10-11',
    name: 'Bath, Bristol & Somerset',
    nation: 'England',
    band: 'england-south',
    family: 'avon-stone-and-harbour-book',
    label: 'Avon city-pair book',
    tagline: 'Give Bath and Bristol separate city arguments before adding rural Somerset.',
    hubIntro: 'Bath and Bristol are close by rail but reward different days: one concentrates Roman archaeology and Georgian streets, the other a working harbour, collections and steep neighbourhoods. Wells, Glastonbury and the Mendips introduce bus-dependent rural connections that should not be hidden inside a city itinerary.',
    stay: 'For three nights, choose one city base: Bath Spa/SouthGate suits a first Roman-and-Georgian day and onward GWR trains; Bathwick is quieter near the Holburne and Sydney Gardens but adds a river crossing or uphill walk to the centre. Bristol’s Temple Quay/Temple Meads edge makes rail arrivals and early departures easier; Old City/Harbourside shortens evening quay walks, while Clifton Village puts the bridge and Downs closer at the cost of a steep return to the stations. Split the stay only when the Somerset branch or separate city evenings justify moving bags.',
    transfer: 'GWR links Bristol Temple Meads and Bath Spa; check the dated journey and engineering notice, then walk into each city core from its station. First Bus route 8 serves the Temple Meads–city centre–Clifton Downs corridor; its notice places westbound Clifton journeys at T10 and inbound Clifton journeys at T1 through 31 December 2026, so reopen the live stop notice. First Bus 376 is the Bristol–Wells–Glastonbury spine; 174 connects Bath and Wells via Shepton Mallet. Rural bus stops and Sunday patterns differ, so save the outward and return journeys before choosing a second town.',
    season: 'Bath’s timed interiors and Bristol’s covered collections help in rain, but the Circus–Royal Crescent climb, harbour paths and exposed Glastonbury Tor are weather-sensitive. Summer weekends bring heavier city and rural demand; reserve a Roman Baths entry slot and check No.1 Royal Crescent if it is an anchor. Bath Abbey can change access for services or events. In winter, shorten the Tor or Mendip walk for daylight and keep Wells Cathedral or an open city museum as the complete alternative.',
    fallback: 'If the Wells/Glastonbury return no longer works, stay in the departure city: use M Shed and the harbour/Old City in Bristol, or Bath Abbey’s current visitor access, the Victoria Art Gallery and a lower-level river walk in Bath. Check the venue calendar first. Do not try to rescue the rural day with an unverified cave shuttle or an assumed taxi.',
    itineraryKicker: 'THREE DAYS, ONE RURAL BRANCH',
    itineraryTitle: 'Give each city its own walk; choose Wells or Glastonbury only after checking the dated bus return.',
    itineraryIntro: 'A route framework for three full days, not a promise about service frequency or entry availability. Keep the day sequence aligned with booked slots and the operator’s current timetable.',
    itinerary: [
      ['Bath lower city, then the Georgian rise', 'From Bath Spa, keep the booked Roman Baths visit, Bath Abbey precinct and Pulteney Bridge in the lower centre. Continue via Queen Square and the Circus to the Royal Crescent only if energy and weather permit; otherwise keep the river line and save the climb.'],
      ['Bristol harbour or Clifton ridge', 'Walk from Temple Meads toward M Shed and the Floating Harbour for one collection and a quay-side loop. If the bridge and Downs are the priority, use First Bus 8 from the currently signed city-centre stop toward Clifton; check the T10/T1 notice and return before setting out.'],
      ['One Somerset town, with a second only if the bus fits', 'From Bristol, check First Bus 376 for Wells and Glastonbury; from Bath, check route 174 for Wells. Anchor the day in Wells Cathedral and the close or Glastonbury Abbey and town/Tor. Add the second town only when dated onward and return legs leave a comfortable margin.']
    ],
    searchKeywords: ['Bath Spa', 'Bathwick', 'Temple Meads', 'Temple Quay', 'route 8', 'route 174', 'route 376', 'Wells', 'Glastonbury'],
    faq: [
      ['Should I stay in Bath or Bristol?', 'Use Bath for a compact Roman, abbey and Georgian walk; choose Bristol for a harbour, museum and evening-district day. Compare the hotel’s exact walk to Bath Spa or Temple Meads if the trip includes rail or a rural-bus start.'],
      ['Can I visit Wells and Glastonbury on one day?', 'Possibly on a date-specific First Bus 376 plan from Bristol, but the route does not guarantee useful town time or a protected return. Choose one town as the anchor and add the other only after checking both directions and site entry.'],
      ['What should I do if the Tor or a rural connection fails?', 'Keep the day in Bath or Bristol, or stay in the first Somerset town. Do not assume a cave shuttle, taxi or later bus is available without checking the operator and attraction directly.']
    ],
    sources: [
      ['https://www.visitbath.co.uk/travel-and-maps/travelling-to-and-around-bath', 'Visit Bath — getting around and station approaches'],
      ['https://www.visitbath.co.uk/where-to-stay', 'Visit Bath — official accommodation areas and listings'],
      ['https://www.visitwest.co.uk/', 'Visit West — official regional destination guide'],
      ['https://www.gwr.com/stations-and-destinations/popular-routes/bristol-to-bath', 'GWR — Bristol to Bath route information'],
      ['https://www.gwr.com/travel-information/train-times', 'GWR — live train planning and updates'],
      ['https://www.firstbus.co.uk/bristol-bath-and-west/plan-journey/timetables?service=376', 'First Bus — route 376 timetable and date selector'],
      ['https://www.firstbus.co.uk/bristol-bath-and-west/plan-journey/timetables?day=mf&service=174', 'First Bus — route 174 timetable and date selector'],
      ['https://www.firstbus.co.uk/bristol-bath-and-west/news-and-service-updates/updates/service-8-route-change-temple-meads-8th', 'First Bus — route 8 Temple Meads stop change (through 31 December 2026)'],
      ['https://www.romanbaths.co.uk/visit', 'Roman Baths — official visit planning'],
      ['https://no1royalcrescent.org.uk/visit/', 'No.1 Royal Crescent — visit and ticket guidance'],
      ['https://www.bristolmuseums.org.uk/m-shed/plan-your-visit/', 'M Shed — official planning and visit calendar'],
      ['https://www.wellscathedral.org.uk/visit/admission-and-opening-times', 'Wells Cathedral — current access and opening information'],
      ['https://www.glastonburyabbey.com/plan-your-visit.php', 'Glastonbury Abbey — current visit planning']
    ],
    guides: [
      g({
        slug: 'bath-roman-georgian-city',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        name: 'Bath: Roman & Georgian City',
        instrument: 'Thermal-city time ledger',
        layout: 'stone-terrace-sequence',
        imageQuery: 'Bath Royal Crescent England panorama',
        imageAlt: 'Georgian architecture at the Royal Crescent in Bath',
        purpose: 'Choose whether the Roman Baths, abbey or Georgian uphill circuit anchors the day, then connect the thermal centre to the crescents without treating every interior and viewpoint as mandatory.',
        summary: 'From Bath Spa, book one lower-city interior, link Abbey Green and Pulteney Bridge, then climb Queen Square–the Circus–Royal Crescent only if time and energy allow.',
        searchKeywords: ['Bath Spa', 'Roman Baths', 'Bath Abbey', 'Bathwick', 'Pulteney Bridge', 'Royal Crescent'],
        stay: 'Stay around Bath Spa/SouthGate for the simplest luggage and early-entry walk; it trades a quieter evening for station and lower-centre convenience. Bathwick, east of the river, suits the Holburne, Sydney Gardens and a calmer night but adds a bridge crossing. A Royal Crescent or Lansdown-side address brings the upper-city walk close while leaving a longer, sloping station approach; confirm the exact door, lift and bag route before booking.',
        showHubOperatingBoard: false,
        choices: [
          ['Roman Baths depth', 'Use the timed archaeological visit as the central event and keep the abbey and Georgian city mostly exterior. This offers the clearest ancient-water story.'],
          ['Abbey and compact centre', 'Prioritize the abbey, river and central streets with a shorter museum stop. It reduces queues and elevation but sacrifices the full Roman interpretation.'],
          ['Georgian city climb', 'Use the Circus, Royal Crescent and a selected museum as the main sequence. This reveals later urban planning but requires more uphill walking.']
        ],
        access: 'Bath Spa is the GWR gateway south of the centre. The Roman Baths and Abbey Green sit together in the lower city; Pulteney Bridge is east, while Queen Square, the Circus and Royal Crescent rise to the north-west. Set a timed interior first, then choose the east-bank loop or upper-city climb rather than crossing back and forth.',
        tradeoff: 'A deep Roman Baths visit, abbey tower product and full Georgian circuit create a rushed sequence. Choosing one major interior gives up another but allows the city’s layers and hills to make sense.',
        stages: [
          ['Arrive on the lower-city side', 'Use Bath Spa and walk into the centre; check the exact GWR service and station access on the travel date. Leave bags before the booked entry and keep the station return in mind.'],
          ['Book one central interior', 'Treat the Roman Baths’ allocated entry as the anchor, or choose Bath Abbey if its visitor access suits the day. Abbey worship and events can change access; do not plan both interiors as guaranteed.'],
          ['Read the east-bank or Georgian district', 'From Abbey Green, cross Pulteney Bridge for the river and Holburne-side walk, or go via Queen Square and the Circus to the Royal Crescent. The upper line gains elevation; choose one.'],
          ['Return on the line you chose', 'Come back toward Bath Spa by a parallel lower-city street, or shorten the upper walk when rain, steps or energy make the descent a poor finish. Confirm any bus alternative before relying on it.']
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
          ['https://www.bathabbey.org/visiting/', 'Bath Abbey — visitor access, worship and event information'],
          ['https://no1royalcrescent.org.uk/visit/', 'No.1 Royal Crescent — visit and ticket guidance'],
          ['https://www.visitbath.co.uk/travel-and-maps/travelling-to-and-around-bath', 'Visit Bath — station approach and getting around'],
          ['https://www.gwr.com/stations-and-destinations/popular-routes/bristol-to-bath', 'GWR — Bristol to Bath rail route']
        ]
      }),
      g({
        slug: 'bristol-harbourside-clifton',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        name: 'Bristol Harbourside & Clifton',
        instrument: 'Harbour-to-ridge gradient board',
        layout: 'floating-harbour-cross-section',
        imageQuery: 'Bristol harbour coloured houses England',
        imageAlt: 'Colourful terraced houses above Cumberland Road in Bristol',
        purpose: 'Choose the low harbour loop or the Clifton ridge before leaving Temple Meads; use First Bus 8 for the steep westbound link and check its temporary station stops before setting the return.',
        summary: 'Walk from Temple Meads toward M Shed and the Floating Harbour for one collection and quay loop, or use First Bus 8 to connect a harbour start with Clifton and the suspension bridge.',
        searchKeywords: ['Temple Meads', 'M Shed', 'Floating Harbour', 'First Bus 8', 'T10', 'T1', 'Clifton Suspension Bridge'],
        stay: 'Temple Quay/Temple Meads is practical for GWR arrivals and an early return, but puts an evening harbour walk farther away. Old City or Harbourside keeps M Shed, quays and food streets closer on foot. Clifton Village suits a bridge-and-Downs morning and quieter evening; the climb back to Temple Meads is substantial, so check the First Bus 8 stop and last useful return for the date.',
        showHubOperatingBoard: false,
        choices: [
          ['Harbour collections', 'Use M Shed, a historic ship or Arnolfini as the main interior and complete the Floating Harbour circuit. This is compact and weather-resilient.'],
          ['Clifton and suspension bridge', 'Give the village, gorge and bridge viewpoint priority, using the harbour as a shorter arrival line. This adds elevation and bus dependence.'],
          ['Street and food city', 'Connect Old City, St Nicholas Market and a shorter waterside section. It suits a flexible day but sacrifices the major bridge panorama.']
        ],
        access: 'Temple Meads is east of the Floating Harbour; M Shed is about a 20-minute walk from the station according to the museum. Clifton is uphill and west. First Bus 8 serves Temple Meads, the centre, Clifton Village and Clifton Downs. The current operator notice (8 September–31 December 2026) sends westbound Clifton journeys from Temple Gate stop T10 and inbound journeys to T1; verify the notice and live stop on your date.',
        tradeoff: 'A full ship visit, harbour circuit and relaxed Clifton bridge walk exceed a casual day. Choosing Clifton sacrifices some museum depth; choosing the harbour avoids the hill but gives up the gorge perspective.',
        stages: [
          ['Choose the westbound stop before walking', 'For a Clifton-first day, use First Bus 8 from the current Temple Gate stop T10 toward Clifton Downs; its dated notice lists T1 for the inbound Clifton direction. Recheck both stops and the day’s live service.'],
          ['Keep the harbour in one loop', 'From Temple Meads, walk to M Shed (the museum estimates about 20 minutes), then choose M Shed or one ship as the interior anchor and follow the Floating Harbour toward Wapping Wharf.'],
          ['Decide at the centre: water or ridge', 'Stay by the quays and Old City, or take route 8 west to Clifton Village and the bridge. The bridge is a pedestrian crossing; check visitor-facility and maintenance notices and choose the Bristol-side or Leigh Woods-side walk deliberately.'],
          ['Return on a checked corridor', 'From Clifton, use the currently signed route 8 stop for Temple Meads or finish near a verified city-centre rail connection. If the stop notice or service changes, keep the day to the harbour rather than improvising a hill descent.']
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
          ['https://www.bristolmuseums.org.uk/m-shed/plan-your-visit/', 'M Shed — visit calendar and access'],
          ['https://www.bristolmuseums.org.uk/m-shed/plan-your-visit/getting-here/', 'M Shed — official station and harbour approach'],
          ['https://www.firstbus.co.uk/bristol-bath-and-west/plan-journey/timetables?service=8', 'First Bus — route 8 timetable and route plan'],
          ['https://www.firstbus.co.uk/bristol-bath-and-west/news-and-service-updates/updates/service-8-route-change-temple-meads-8th', 'First Bus — route 8 stop notice through 31 December 2026'],
          ['https://cliftonbridge.org.uk/crossing-the-bridge/', 'Clifton Suspension Bridge — crossing and closure information'],
          ['https://www.gwr.com/travel-information/train-times', 'GWR — live train planning and updates']
        ]
      }),
      g({
        slug: 'wells-glastonbury-mendips',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        name: 'Wells, Glastonbury & the Mendip Edge',
        instrument: 'Somerset bus-and-weather docket',
        layout: 'cathedral-tor-decision-sheet',
        imageQuery: 'Wells Cathedral west front Somerset',
        imageAlt: 'Planning diagram comparing a Wells day, Glastonbury day and separately transferred Mendip visit; not to scale',
        purpose: 'Choose Wells or Glastonbury as the main town and add only the rural edge supported by the day’s bus, weather and daylight, instead of presenting cathedral, tor and caves as a single compact circuit.',
        summary: 'Use First Bus 174 from Bath toward Wells or 376 from Bristol toward Wells and Glastonbury; anchor the day in one town, and arrange a confirmed separate transfer for any Mendip cave.',
        searchKeywords: ['First Bus 174', 'First Bus 376', 'Wells Cathedral', 'Glastonbury Abbey', 'Glastonbury Tor', 'Cheddar Gorge', 'Wookey Hole'],
        stay: 'For a city-led trip, Bath Spa/SouthGate keeps route 174 toward Wells within reach; Bristol’s Temple Quay/Temple Meads edge is the clearer start for route 376 toward Wells and Glastonbury. A Wells-centre overnight puts the cathedral close on foot but still needs a bus for Glastonbury and has no mainline rail station. Glastonbury town suits an Abbey/Tor focus, while cave sites need a separately confirmed road transfer; do not book a remote bed on the assumption that a public bus reaches the attraction.',
        showHubOperatingBoard: false,
        choices: [
          ['Wells cathedral city', 'Prioritize the cathedral, close and Bishop’s Palace area. This creates the strongest compact heritage day and the simplest return.'],
          ['Glastonbury abbey and Tor', 'Use the abbey and town before a weather-dependent Tor climb. It offers landscape and legend but requires more walking and timing.'],
          ['Mendip or cave branch', 'Choose one booked cave or landscape site with a named bus, tour or car plan. This gains geology but sacrifices the two-town narrative.']
        ],
        access: 'Neither Wells nor Glastonbury has a mainline railway station. From Bristol, First Bus 376 serves the Wells–Glastonbury corridor; from Bath, route 174 reaches Wells via Shepton Mallet. Check the actual dated direction, stop and return, including Sunday/holiday variations. No public bus connection from these town routes to Cheddar Gorge or Wookey Hole was verified for this review; treat either cave as a separate car or confirmed-tour transfer.',
        tradeoff: 'Wells Cathedral, Glastonbury Abbey, the Tor and a cave cannot all receive useful time in one public-transport day. Choosing one town sacrifices the other’s depth but protects the return and a real meal.',
        stages: [
          ['Choose the route by the overnight base', 'From Bristol, check First Bus 376 for Wells or Glastonbury; from Bath, check route 174 to Wells. Save the correct departure stop and return before leaving the city; do not infer the pattern from a route map.'],
          ['Anchor one town first', 'In Wells, walk between the cathedral, close and market centre and confirm cathedral access. In Glastonbury, use the Abbey and town as the core before deciding whether the exposed Tor is suitable.'],
          ['Add only a proven second leg', 'A Wells–Glastonbury link may fit route 376 on some dates, but confirm the direction and gap. Cheddar Gorge and Wookey Hole need a verified car or tour transfer and their own ticket/arrival check; no public link is claimed here.'],
          ['Protect the return in daylight', 'Be at the correct bus stop with margin and a checked alternative journey. If the second connection or weather fails, remain in the first town instead of relying on a taxi or a final rural service you have not confirmed.']
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
          ['https://www.firstbus.co.uk/bristol-bath-and-west/plan-journey/timetables?day=fr&service=376', 'First Bus — route 376 date selector and current timetable'],
          ['https://www.firstbus.co.uk/bristol-bath-and-west/plan-journey/timetables?day=mf&service=174', 'First Bus — route 174 date selector and current timetable'],
          ['https://www.wellscathedral.org.uk/visit/admission-and-opening-times', 'Wells Cathedral — current access and opening information'],
          ['https://www.glastonburyabbey.com/plan-your-visit.php', 'Glastonbury Abbey — current visit planning'],
          ['https://www.cheddargorge.co.uk/visit', 'Cheddar Gorge — official visit, ticket and opening checks']
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
