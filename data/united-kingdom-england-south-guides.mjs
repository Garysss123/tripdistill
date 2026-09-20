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
    stay: 'Two nights in Cambridge supports the university city and Ely; three or four nights permits Norwich or a selected coast branch without turning every day into a London commute. Norwich can also function as a separate base for northern Norfolk.',
    transfer: 'Cambridge station is south-east of the colleges, Cambridge North serves a different edge and Ely station sits below the cathedral core. Greater Anglia routes are useful but do not remove the final walk or rural bus; check engineering works, especially at weekends.',
    season: 'College access follows academic use, while fen paths, river activities and coast services respond to weather and daylight. Summer brings punting and visitor pressure; winter gives clear urban days but shorter rural returns.',
    fallback: 'When college access or an outdoor branch fails, Cambridge and Norwich both have complete museum-led alternatives. Keep the fallback in the same rail city rather than chasing a distant village.',
    sources: [
      ['https://www.visitcambridge.org/', 'Visit Cambridge — official destination guide'],
      ['https://www.greateranglia.co.uk/', 'Greater Anglia — rail planning and service updates'],
      ['https://www.traveline.info/', 'Traveline — public transport journey planning']
    ],
    guides: [
      g({
        slug: 'cambridge-colleges-backs',
        name: 'Cambridge Colleges & the Backs',
        instrument: 'College-gate and river clock',
        layout: 'backs-and-courts-fold',
        imageQuery: 'Cambridge Kings College Backs river Cam',
        imageAlt: 'King’s College and the River Cam in Cambridge',
        purpose: 'Choose one publicly accessible college and one river-side line, then connect them without assuming every court, chapel and stretch of the Backs is open to visitors.',
        summary: 'Walk from station to the historic core, meet one verified college gate, continue along public streets and the Backs, and decide separately whether punting or a museum deserves the final block.',
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
          ['https://www.cam.ac.uk/about-the-university/visiting-the-university', 'University of Cambridge — official visitor information'],
          ['https://www.fitzmuseum.cam.ac.uk/visit-us', 'Fitzwilliam Museum — official visit planning']
        ]
      }),
      g({
        slug: 'ely-cathedral-fens',
        name: 'Ely Cathedral & the Fen Edge',
        instrument: 'Cathedral-to-fen elevation strip',
        layout: 'island-in-fens-section',
        imageQuery: 'Ely Cathedral fen landscape England',
        imageAlt: 'Ely Cathedral rising above the low Fenland landscape',
        purpose: 'Use Ely as a complete cathedral-and-fen day, connecting the station, riverside and elevated historic core without mistaking the wider Fens for an unplanned walk from town.',
        summary: 'Climb from Ely station and riverside to the cathedral precinct, give the interior a defined block, then choose Oliver Cromwell context or a signed lowland walk before returning downhill.',
        choices: [
          ['Cathedral depth', 'Prioritize the cathedral floor, towers or museum product currently available. This gives architectural depth but leaves less time for the fen landscape.'],
          ['City and riverside', 'Use the cathedral exterior, market area, Cromwell context and Great Ouse edge. It is flexible and lower-cost but sacrifices the full interior.'],
          ['Signed fen extension', 'Add only a verified local walking or cycling line beyond the river. This reveals the lowland setting but depends most on weather and surface conditions.']
        ],
        access: 'Ely station sits below the historic core and near the river. The cathedral approach climbs through the town, while wider fen paths extend beyond ordinary visitor streets. Keep the rail return and daylight limit separate from any countryside extension.',
        tradeoff: 'A tower or long cathedral visit competes directly with a fen walk. Choosing the landscape gives up some interior interpretation; choosing the cathedral keeps the day compact and weather-resilient.',
        stages: [
          ['Orient at river level', 'Leave the station toward the Great Ouse, locate the return path and read how the cathedral rises above the low ground before climbing.'],
          ['Climb into the city', 'Use the signed streets to the market and cathedral precinct. Avoid adding distant residential loops before the booked interior.'],
          ['Commit to interior or fen', 'Complete the cathedral product or descend for the chosen signed route. Do not begin an open-ended countryside walk late in the day.'],
          ['Return downhill with margin', 'Finish at the riverside or station with one train in reserve where possible. Wet surfaces and level crossings can slow the final leg.']
        ],
        fallback: 'In poor weather, keep the cathedral, local museum and compact market-town circuit. If cathedral access changes, use the exterior precinct and riverside rather than extending onto exposed fen paths.',
        watch: [
          ['Tower products have conditions', 'Access, steps and schedules differ from general cathedral entry. Confirm the exact experience and mobility requirements.'],
          ['Flat does not mean sheltered', 'Fen wind, rain and saturated ground can make a simple route demanding. Carry a signed plan and turn-back point.'],
          ['Station and cathedral are different levels', 'The final descent takes time and can be slippery. Do not leave it to the train’s departure minute.']
        ],
        duration: 'Allow five to seven hours for the cathedral, town and a bounded river or fen edge. A cathedral-only stop can fit three hours between trains.',
        combine: 'Combine with Cambridge only as a short second stop when the cathedral is the sole purpose. A full Ely day should not also include Norwich or the Norfolk coast.',
        verify: 'Check Ely Cathedral opening and tower products, Greater Anglia service, local path conditions and daylight before choosing the fen extension.',
        sources: [
          ['https://www.elycathedral.org/visit', 'Ely Cathedral — official visitor information'],
          ['https://www.greateranglia.co.uk/', 'Greater Anglia — rail planning and service updates']
        ]
      }),
      g({
        slug: 'norwich-north-norfolk',
        name: 'Norwich & a North Norfolk Branch',
        instrument: 'City-to-coast branch board',
        layout: 'lanes-and-rail-branch',
        imageQuery: 'Norwich Cathedral river Wensum England',
        imageAlt: 'Norwich Cathedral above the River Wensum in Norfolk',
        purpose: 'Decide whether Norwich is the full historic-city destination or the rail base for one north Norfolk branch, and name the onward connection instead of advertising city, Broads and coast as one effortless day.',
        summary: 'Walk Norwich’s castle-to-cathedral spine first, then either keep the complete city day or use one verified rail or bus branch with its final return protected.',
        choices: [
          ['Norwich city depth', 'Give the cathedral close, castle area, market and lanes the full day. This provides the strongest city narrative and the most reliable poor-weather plan.'],
          ['Broads gateway', 'Use a rail-served gateway such as Wroxham for a verified boat or waterside plan. This adds water landscape but gives up much of central Norwich.'],
          ['North coast branch', 'Choose one rail or bus-linked coast town and accept the longer connection. It offers sea landscape but is the least compatible with a full city visit.']
        ],
        access: 'Norwich station is east of the central lanes across the Wensum. Coast and Broads branches depart by specific rail or bus corridors, not from every city stop. Check the exact interchange and final return before beginning the Norwich walk.',
        tradeoff: 'A complete Norwich city day and a meaningful coast excursion are separate products. The branch gains landscape but sacrifices the cathedral, castle and market depth; staying in Norwich gives up the coast but avoids timetable pressure.',
        stages: [
          ['Cross from the station', 'Follow the river or Prince of Wales Road toward the cathedral quarter, recording the station return. Do not detour into the centre before confirming the branch decision.'],
          ['Read the historic spine', 'Connect the cathedral close, Elm Hill and market or castle area in one direction. Keep one interior as the anchor.'],
          ['Commit to city or branch', 'Stay for collections and lanes or return to the correct station or bus point for the verified outward service. Never improvise both Broads and coast.'],
          ['Protect the final connection', 'End near Norwich station or the selected branch’s return stop with a service in reserve. Rural evening alternatives can be limited.']
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
          ['https://www.greateranglia.co.uk/', 'Greater Anglia — rail planning and service updates']
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
    name: 'Cornwall & Devon',
    nation: 'England',
    band: 'england-south',
    family: 'peninsula-weather-log',
    label: 'Peninsula weather log',
    tagline: 'Treat railheads, coastal buses and moor roads as separate layers.',
    hubIntro: 'Cornwall and Devon contain rail-linked cities and harbour towns, but the peninsula’s headlands, villages and moors depend on slower branches, buses, boats or roads. A useful trip chooses a compact base and one weather-facing landscape each day rather than measuring success by the number of coastal names reached.',
    stay: 'Four to six nights allows one west Cornwall base plus a Devon or central Cornwall base. A two-night visit should stay on one branch line or harbour system; moving luggage across the peninsula can consume the usable day.',
    transfer: 'Mainline trains reach Exeter, Plymouth, Truro and Penzance, with branches to St Ives and Falmouth. Coastal buses, ferries and moor services are separate networks with seasonal patterns. Protect the connection back to the railhead before walking beyond town.',
    season: 'Atlantic wind and rain affect cliffs, boats and exposed paths in every season. Summer improves frequency but increases road and parking pressure; winter and shoulder months reward towns and museums but demand earlier turn-backs.',
    fallback: 'Keep a complete harbour, gallery or cathedral day near each base. If wind cancels a boat or makes a headland unsafe, do not substitute another exposed coast simply because it is nearby.',
    sources: [
      ['https://www.visitcornwall.com/', 'Visit Cornwall — official destination guide'],
      ['https://www.visitdevon.co.uk/', 'Visit Devon — official destination guide'],
      ['https://www.gwr.com/', 'Great Western Railway — rail planning and service updates']
    ],
    guides: [
      g({
        slug: 'st-ives-penwith',
        name: 'St Ives & the Penwith Coast',
        instrument: 'Branch-line and headland clock',
        layout: 'gallery-coast-tide-strip',
        imageQuery: 'St Ives Cornwall harbour beach',
        imageAlt: 'St Ives harbour and waterfront in Cornwall',
        purpose: 'Choose a gallery-and-harbour day or one exposed Penwith extension, matching the St Ives branch train, local bus and coastal conditions instead of stacking Land’s End, beaches and art into one loop.',
        summary: 'Arrive by the branch line, give St Ives harbour and one collection a coherent block, then use a verified bus or bounded coastal walk only when the return and weather remain secure.',
        choices: [
          ['St Ives art and harbour', 'Use Tate St Ives, Barbara Hepworth or one collection plus the harbour and beaches. This is the strongest poor-weather and car-free day.'],
          ['Short coast walk', 'Take one signed section from St Ives with a clear turn-back or bus return. It adds landscape but sacrifices museum depth.'],
          ['Penwith bus circuit', 'Use a verified bus to one further town or headland, not every famous stop. This gains reach but depends most on seasonal frequency.']
        ],
        access: 'The St Ives branch from St Erth is distinct from the main line. The station is above the town, while galleries, harbour and bus stops sit at different levels. For Penwith, confirm the exact route and final service before leaving the compact centre.',
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
          ['https://www.transportforcornwall.co.uk/', 'Transport for Cornwall — official bus information']
        ]
      }),
      g({
        slug: 'falmouth-roseland',
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
        access: 'Falmouth Town, Falmouth Docks and Penmere stations serve different parts of the town. Ferries use named quays and seasonal schedules. Match the rail stop to the first anchor and confirm whether the return landing connects to the station route.',
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
          ['https://www.falriver.co.uk/', 'Fal River — official ferry and river information']
        ]
      }),
      g({
        slug: 'exeter-dartmoor-edge',
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
        access: 'Exeter St David’s and Exeter Central serve different levels of the city. Dartmoor gateways require the correct rail or bus corridor and may still sit outside open moor routes. Match the station to the plan and keep the final connection visible.',
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
          ['https://www.dartmoor.gov.uk/enjoy-dartmoor', 'Dartmoor National Park — official visitor and safety guidance']
        ]
      })
    ]
  })
];
