import { defineUnitedKingdomCluster, unitedKingdomGuide } from './united-kingdom-guide-builder.mjs';

const g = unitedKingdomGuide;
const c = defineUnitedKingdomCluster;

export const unitedKingdomIslandsWalesNiClusters = [
  c({
    slug: 'scottish-islands',
    name: 'Skye, Orkney & the Outer Hebrides',
    nation: 'Scotland',
    band: 'scotland',
    family: 'ferry-weather-manifest',
    label: 'Island ferry manifest',
    tagline: 'Choose one island system and make the mainland buffer part of the trip.',
    hubIntro: 'Skye, Orkney and Lewis with Harris are not one archipelago circuit. They use different ferries, flights, road distances and weather patterns. A credible island plan chooses one system, preserves a mainland or gateway buffer and never treats a booked room as evidence that the crossing or onward bus will operate.',
    stay: 'Give Skye at least three nights and Orkney or Lewis–Harris four when arriving by ferry; add mainland buffer nights around separate tickets. Combining island groups is a multi-transfer itinerary, not a casual extension from Edinburgh or Glasgow.',
    transfer: 'Skye has a bridge plus ferries; Orkney uses NorthLink, Pentland services or flights; the Outer Hebrides use CalMac and flights. Island buses are sparse and car hire capacity limited. Match port, vehicle rules, check-in and final road leg before booking accommodation.',
    season: 'Wind and sea state can disrupt crossings year-round. Summer improves services but raises vehicle and lodging pressure; winter reduces daylight and openings. Shoulder seasons require current timetables rather than assumptions from peak schedules.',
    fallback: 'Keep a complete gateway-town or same-island low-risk day. When a ferry cancels, do not buy an unprotected chain to another port unless the operator confirms the replacement and accommodation remains viable.',
    sources: [
      ['https://www.visitscotland.com/places-to-go/islands', 'VisitScotland — official islands destination guide'],
      ['https://www.calmac.co.uk/', 'Caledonian MacBrayne — official ferry information'],
      ['https://www.northlinkferries.co.uk/', 'NorthLink Ferries — official Orkney ferry information']
    ],
    guides: [
      g({
        slug: 'isle-of-skye',
        name: 'Isle of Skye Road & Weather Plan',
        instrument: 'Peninsula road-and-light compass',
        layout: 'island-road-spokes',
        imageQuery: 'Isle of Skye Quiraing Scotland landscape',
        imageAlt: 'The Quiraing landscape on the Isle of Skye',
        purpose: 'Choose one Skye peninsula from the actual base, accounting for single-track roads, parking, buses, wind and daylight instead of promoting a full-island highlight loop.',
        summary: 'Start from Portree or another named base, read live road and weather conditions, complete one peninsula or lower-risk island route, and return before darkness or a ferry deadline.',
        choices: [
          ['Trotternish day', 'Use Portree as the base for one northern road-and-walk sequence with firm parking and turnaround points. This gives the iconic geology but attracts the highest pressure.'],
          ['Dunvegan and west', 'Focus on castle, coast and one western landscape. It offers history and sea views but is a separate road system from Trotternish.'],
          ['South Skye and Sleat', 'Use Armadale, Broadford or a southern base for gentler coast and ferry context. It is more compatible with arrival or departure days.']
        ],
        access: 'Skye is reached by bridge, Mallaig–Armadale ferry or longer road corridors. Portree is not central to every peninsula in travel time. Public buses exist but do not create a hop-on circuit; car and tour plans must include single-track etiquette and parking capacity.',
        tradeoff: 'A full-island loop sacrifices time at every stop and magnifies road delay. Choosing one peninsula gives up a famous sight elsewhere but creates a safer, deeper day with a credible return.',
        stages: [
          ['Leave the correct island base', 'Check road incidents, wind, rain and the final light, then start toward one peninsula with fuel and return time known.'],
          ['Read the first landscape gate', 'At the initial stop, assess parking and path conditions. Skip rather than road-park dangerously when capacity is full.'],
          ['Commit to one peninsula', 'Complete the selected road, castle or signed route with a time-based turnaround. Do not cross Skye for a second headline viewpoint.'],
          ['Return before dark or sailing', 'Reach the base, bridge or ferry port with margin for single-track delays and check-in. Treat meals and sunset as optional after the transport edge.']
        ],
        fallback: 'If high wind or road pressure makes exposed routes unsuitable, use Portree, Broadford, local museums or a short sheltered coast route. If a ferry cancels, remain near the booked side rather than racing to a distant port.',
        watch: [
          ['Single-track roads need passing-place discipline', 'Do not park in passing places or follow an unrealistic app estimate. Let faster traffic pass and protect the return.'],
          ['Parking capacity is a hard limit', 'Popular trailheads can fill. Use official alternatives or leave; roadside improvisation damages safety and land access.'],
          ['Ferry check-in precedes departure', 'Vehicle and foot-passenger deadlines differ. Build the road day around check-in, not the published sailing minute.']
        ],
        duration: 'Allow a full day for one Skye peninsula and at least three nights for a useful island stay. Arrival or departure days should remain on the relevant shore.',
        combine: 'Combine one peninsula with its nearby town or castle. Keep another Skye coast, the mainland Highlands and other island groups for separate days.',
        verify: 'Check CalMac or bridge route, Highland road notices, detailed weather, attraction access, bus or tour confirmation and daylight before departure.',
        sources: [
          ['https://www.isleofskye.com/', 'Isle of Skye — official local destination guide'],
          ['https://www.calmac.co.uk/route-information/mallaig-armadale/', 'CalMac — Mallaig to Armadale ferry information']
        ]
      }),
      g({
        slug: 'orkney-mainland',
        name: 'Orkney Mainland & Neolithic Sites',
        instrument: 'Ferry-to-monument reservation wheel',
        layout: 'stone-circle-island-grid',
        imageQuery: 'Ring of Brodgar Orkney Scotland landscape',
        imageAlt: 'The Ring of Brodgar in the Orkney landscape',
        purpose: 'Choose Kirkwall, the west Mainland Neolithic sites or a wartime-and-coast route, and match ferry arrival, timed admission and island transport rather than treating Orkney as a cruise-stop checklist.',
        summary: 'Establish the Kirkwall or Stromness gateway, complete one monument cluster with current booking and access, and keep the return crossing or island bus outside the final minute.',
        choices: [
          ['West Mainland archaeology', 'Use Skara Brae, Ring of Brodgar and nearby sites as one cluster, with current reservations and road transport. This gives the strongest deep-time narrative.'],
          ['Kirkwall civic day', 'Prioritize St Magnus Cathedral, museums and harbour streets. It is the best weather fallback and works without a west-island circuit.'],
          ['Churchill Barriers and wartime coast', 'Use a booked tour or car for southern Mainland and linked islands. It adds modern history but is separate from the Neolithic cluster.']
        ],
        access: 'NorthLink ferries reach Stromness or Kirkwall-area terminals on different routes; flights reach Kirkwall Airport. Major archaeological sites are not all served by frequent buses. Confirm port, vehicle collection, tour pickup and any timed site entry before crossing.',
        tradeoff: 'West Mainland archaeology, Kirkwall depth and the southern barriers are three distinct days. Choosing one sacrifices another but protects interpretation and the ferry connection.',
        stages: [
          ['Recover from the crossing', 'Identify the exact port or airport, onward bus or car and accommodation before adding a monument. Keep late arrivals close to the gateway.'],
          ['Reach one evidence cluster', 'Travel to west Mainland, Kirkwall or southern Mainland with the selected booking and return route.'],
          ['Complete the island argument', 'Visit the related sites in a coherent order, respecting monument conservation and temporary access changes.'],
          ['Return with weather margin', 'Regain the town or ferry terminal before check-in and allow for wind or road delay. Do not treat the last monument as more important than the sailing.']
        ],
        fallback: 'If west-island roads or sites close, use Kirkwall’s cathedral and museums. If a ferry is delayed, keep the arrival day near Stromness or Kirkwall rather than chasing a booked circuit.',
        watch: [
          ['Ports are route-specific', 'Stromness, Hatston and other terminals are not interchangeable. Match accommodation and vehicle collection to the actual sailing.'],
          ['Monument access can be controlled', 'Conservation, weather and capacity may alter interiors or parking. Read Historic Environment Scotland notices.'],
          ['Wind affects more than ferries', 'Exposed sites and road travel can become unsuitable even when the crossing operates. Preserve the civic fallback.']
        ],
        duration: 'Allow at least three full days on Orkney Mainland plus arrival and departure margins. One archaeology cluster needs a complete day.',
        combine: 'Combine Skara Brae with nearby west Mainland monuments, or Kirkwall with its museums. Keep the southern barriers and outer islands for separate days.',
        verify: 'Check NorthLink sailing and check-in, the exact monument access and reservations, island buses or tour, weather and daylight before travel.',
        sources: [
          ['https://www.historicenvironment.scot/visit-a-place/places/skara-brae/', 'Historic Environment Scotland — Skara Brae visitor information'],
          ['https://www.northlinkferries.co.uk/destinations/we-sail-to/orkney/', 'NorthLink Ferries — official Orkney planning information']
        ]
      }),
      g({
        slug: 'lewis-harris',
        name: 'Lewis & Harris',
        instrument: 'Ferry-port and island-road atlas',
        layout: 'machair-mountain-spread',
        imageQuery: 'Callanish Stones Lewis Scotland sunset',
        imageAlt: 'Standing stones at Calanais on the Isle of Lewis',
        purpose: 'Choose a Lewis archaeology and culture day or a Harris coast day from the actual island base, respecting the long north–south road, ferry ports and limited buses.',
        summary: 'Enter through Stornoway or Tarbert, use one island half as the day’s operating field, complete a named site cluster, and return before sparse transport or ferry check-in controls the evening.',
        choices: [
          ['West Lewis heritage', 'Use Calanais, a blackhouse site and one coast stop as a booked tour or car circuit. This gives the strongest cultural landscape narrative.'],
          ['Stornoway and north Lewis', 'Keep the day around town, museum, castle grounds and one northern extension. It is the most resilient public-transport plan.'],
          ['Harris coast and mountains', 'Use Tarbert or a southern base for one coast road and village cluster. It offers dramatic contrast but is a long transfer from Stornoway.']
        ],
        access: 'Stornoway and Tarbert are different ferry gateways, and Lewis with Harris is one landmass with long road times. Buses do not support an unlimited stop-by-stop loop. Book car, tour or accommodation from the exact port and check Sunday and seasonal patterns.',
        tradeoff: 'West Lewis monuments and Harris beaches do not form one relaxed day. Choosing one island half sacrifices the other’s headline sites but avoids hours of road and a fragile ferry return.',
        stages: [
          ['Leave the correct port base', 'Confirm the day’s road or bus corridor, fuel, final return and ferry check-in before leaving Stornoway or Tarbert.'],
          ['Read one cultural landscape', 'Use Calanais and related west Lewis sites, Stornoway institutions or one Harris community-and-coast line.'],
          ['Commit to a bounded island half', 'Continue only within the selected corridor, respecting local communities, weather and parking. Do not cross the island for a sunset after the turnaround.'],
          ['Return before the port edge', 'Regain accommodation or terminal with margin for single-track roads and wind. Keep the final meal on the same side.']
        ],
        fallback: 'If coast weather or road conditions fail, use Stornoway Museum nan Eilean, castle grounds and town, or Tarbert’s local services. If a ferry cancels, work with the operator before moving between ports.',
        watch: [
          ['Lewis and Harris are long north to south', 'Shared island status does not make the coasts adjacent. Plan from the overnight base, not a highlights map.'],
          ['Community life sets the rhythm', 'Sunday opening and local services may differ. Verify respectfully and avoid treating homes or working land as attractions.'],
          ['Ferry vehicle space is finite', 'A passenger booking and vehicle space are different. Confirm check-in, port and any standby condition.']
        ],
        duration: 'Allow four to six nights to understand Lewis and Harris without daily road marathons. Each island half deserves a full day.',
        combine: 'Combine Calanais with one west Lewis site cluster or Harris beaches with Tarbert and one community stop. Keep Orkney and Skye for separate itineraries.',
        verify: 'Check CalMac sailing and vehicle booking, Visit Outer Hebrides service information, site access, weather, Sunday patterns and road conditions before departure.',
        sources: [
          ['https://www.visitouterhebrides.co.uk/', 'Visit Outer Hebrides — official destination guide'],
          ['https://www.calmac.co.uk/destinations/harris', 'CalMac — Lewis and Harris ferry information']
        ]
      })
    ]
  }),
  c({
    slug: 'cardiff-south-wales',
    name: 'Cardiff, Bannau Brycheiniog & Gower',
    nation: 'Wales',
    band: 'wales',
    family: 'capital-to-upland-gate',
    label: 'Capital-to-upland gate',
    tagline: 'Keep Cardiff complete, then give mountain or peninsula a separate transport contract.',
    hubIntro: 'Cardiff’s civic centre, castle and bay form a rail-and-bus city system. Bannau Brycheiniog and the Gower Peninsula require different gateways, road or bus connections and weather decisions. A strong South Wales stay uses the capital as a base but does not imply the national park or coast begins at Cardiff Central.',
    stay: 'Three to five nights supports Cardiff plus one mountain and one coast branch with a weather fallback. Swansea can be a better base for Gower, while Abergavenny, Brecon or Merthyr Tydfil suit different Bannau approaches.',
    transfer: 'Cardiff Central and Queen Street serve different city edges. Transport for Wales reaches regional gateways, but national-park and Gower sites need named buses, tours, bicycles or cars. Check the final rural return and Sunday pattern.',
    season: 'Rain and wind matter on ridges and beaches year-round. Summer raises Gower road pressure; winter shortens Bannau routes. Rugby and stadium events can transform Cardiff streets and rail capacity.',
    fallback: 'Use Cardiff’s castle, national museum, arcades and bay as the complete poor-weather day. If mountain or coast access fails, do not replace it with another remote outdoor branch.',
    sources: [
      ['https://www.visitcardiff.com/', 'Visit Cardiff — official destination guide'],
      ['https://tfw.wales/', 'Transport for Wales — rail and bus planning'],
      ['https://bannau.wales/', 'Bannau Brycheiniog National Park — official visitor information']
    ],
    guides: [
      g({
        slug: 'cardiff-castle-bay',
        name: 'Cardiff Castle, Civic Centre & Bay',
        instrument: 'Capital-to-bay line card',
        layout: 'castle-arcade-waterfront-fold',
        imageQuery: 'Cardiff Castle city Wales keep',
        imageAlt: 'Cardiff Castle and its Norman keep in the Welsh capital',
        purpose: 'Choose Cardiff Castle, the national museum or the bay as the main anchor and use one intentional rail, bus or walking move between centre and waterfront.',
        summary: 'Start at Cardiff Central or Queen Street, complete the castle and civic core or museum, then move once to Cardiff Bay and return by a direct line.',
        choices: [
          ['Castle and civic centre', 'Use the castle, arcades and civic buildings as the main day. This gives the clearest city history and stays compact.'],
          ['National collections', 'Prioritize National Museum Cardiff and the civic centre, with the castle exterior. It is resilient in rain and collection-led.'],
          ['Cardiff Bay', 'Use the Senedd, waterfront and one bay institution as the long block. This reveals modern Cardiff but needs a separate connection.']
        ],
        access: 'Cardiff Central serves the southern centre and rail onward journeys; Queen Street is closer to the civic side and local lines. Cardiff Bay lies beyond the centre and can be reached by bus, local rail or a substantial walk. Choose the return before moving south.',
        tradeoff: 'A deep castle visit, national museum and full bay circuit exceed one relaxed day. Choosing the bay sacrifices one city-centre interior; staying central leaves the waterfront as a short extension.',
        stages: [
          ['Enter from the useful station', 'Use Central for castle and arcades or Queen Street for the civic centre, noting the final bay or rail connection.'],
          ['Complete one capital anchor', 'Visit the castle or national museum with its current ticket and gallery conditions, then use the arcades or civic streets as context.'],
          ['Move once to the bay', 'Take the verified bus or local train, or walk a named route. Do not return to the centre for an additional museum.'],
          ['Exit from the correct network', 'Finish at Cardiff Bay or Central according to the onward journey, allowing stadium and event crowds to alter service.']
        ],
        fallback: 'If bay weather is poor, use the castle, national museum and covered arcades. If the castle closes, retain the civic centre and one bay institution rather than buying an unrelated attraction chain.',
        watch: [
          ['Stadium events change the centre', 'Roads, stations and queues can shift sharply. Check the event calendar and leave wider rail margins.'],
          ['The bay is not beside Cardiff Central', 'It needs a real transit or walking block. Treat it as a second district, not the next street.'],
          ['Museum and castle products differ', 'Free museum entry and castle tickets have separate security and availability. Confirm the exact anchor.']
        ],
        duration: 'Allow six to eight hours for one centre anchor and the bay. A castle-and-civic route can fit four to five hours.',
        combine: 'Combine the castle with arcades or the museum with the bay. Keep Bannau Brycheiniog and Gower for separate full days.',
        verify: 'Check Cardiff Castle and National Museum access, Cardiff Bay transport, stadium events and Transport for Wales status before departure.',
        sources: [
          ['https://www.cardiffcastle.com/visit/', 'Cardiff Castle — official visitor information'],
          ['https://museum.wales/cardiff/visit/', 'Amgueddfa Cymru — National Museum Cardiff visitor information']
        ]
      }),
      g({
        slug: 'bannau-brycheiniog',
        name: 'Bannau Brycheiniog Gateways',
        instrument: 'Gateway-and-ridge weather board',
        layout: 'upland-gateway-transect',
        imageQuery: 'Bannau Brycheiniog Brecon Beacons mountains Wales',
        imageAlt: 'Green ridges in Bannau Brycheiniog National Park in Wales',
        purpose: 'Choose one Bannau Brycheiniog gateway and route level, naming the bus, car park or rail-to-bus connection and keeping a lower valley alternative for cloud, wind or saturated ground.',
        summary: 'Travel to Brecon, Abergavenny, Merthyr Tydfil or another named gateway, assess mountain conditions there, complete one signed route and recover the final transport before dark.',
        choices: [
          ['Brecon and lower landscape', 'Use the town, canal or a lower signed route. This provides national-park context with the largest transport and weather margin.'],
          ['Pen y Fan approach', 'Use one official trailhead and route matched to conditions. It gives the highest-profile ridge but attracts crowd and parking pressure.'],
          ['Eastern Black Mountains', 'Base from Abergavenny or another named gateway for one mapped route. It offers a distinct landscape but is not interchangeable with central Bannau.']
        ],
        access: 'The national park has no single station. Cardiff and other rail cities connect to Merthyr Tydfil, Abergavenny or bus corridors, while trailheads may remain far away. Confirm the exact gateway, stop and final return before leaving the city.',
        tradeoff: 'A ridge day sacrifices town, canal and museum time but gains elevation. A lower route gives up the summit while protecting safety, public transport and a useful poor-weather day.',
        stages: [
          ['Reach one named gateway', 'Use the verified train, bus, tour or car route and save the final return. Do not navigate to a generic park centre after arrival.'],
          ['Read the mountain weather', 'Assess wind, cloud, rain, temperature and path conditions at low ground. Activate the lower route before climbing.'],
          ['Commit to one mapped line', 'Follow the official or properly mapped route with a time-based turnaround. Stay off eroded shortcuts and private land.'],
          ['Return before daylight and service edge', 'Regain the gateway with margin for wet surfaces and rural delays, then protect the rail connection to Cardiff or the base.']
        ],
        fallback: 'If ridges are unsuitable, use Brecon, the Monmouthshire and Brecon Canal or a lower woodland and reservoir route approved for current conditions. Do not drive to another exposed summit.',
        watch: [
          ['Pen y Fan is not the whole park', 'Different gateways and landscapes require different transport. Choose the route from the base and conditions.'],
          ['Parking pressure can close the plan', 'Do not road-park or block access when official capacity is full. Use public transport or the lower fallback.'],
          ['Navigation remains necessary', 'Popular paths can disappear in cloud or snow. Carry the correct map and equipment for the chosen level.']
        ],
        duration: 'Allow a full day for any mountain gateway from Cardiff. A lower Brecon-and-canal plan can fit five to seven hours including transport.',
        combine: 'Combine Brecon with one lower route or a ridge with its single gateway. Keep Cardiff Bay and Gower for separate days.',
        verify: 'Check national-park alerts, Met Office mountain weather, the exact train and bus, parking or tour status, daylight and route conditions before departure.',
        sources: [
          ['https://beacons-npa.gov.uk/learning/learning-centres/national-park-visitor-centre/', 'Bannau Brycheiniog National Park — official visitor centre information'],
          ['https://tfw.wales/ways-to-travel/bus', 'Transport for Wales — official bus information']
        ]
      }),
      g({
        slug: 'swansea-gower',
        name: 'Swansea & the Gower Peninsula',
        instrument: 'Peninsula bus-and-tide selector',
        layout: 'bay-to-headland-chart',
        imageQuery: 'Rhossili Bay Gower Wales cliffs',
        imageAlt: 'Rhossili Bay and headlands on the Gower Peninsula in Wales',
        purpose: 'Choose Swansea Bay or one Gower coast branch and match it to the exact bus, tide and cliff conditions rather than presenting the entire peninsula as one easy Cardiff day trip.',
        summary: 'Use Swansea as the rail-and-bus base, travel to one named Gower village or bay, complete a bounded coast route, and return before sparse evening service.',
        choices: [
          ['Swansea city and bay', 'Keep the day around the market, museum, marina and bay. This is the strongest poor-weather and rail-simple option.'],
          ['Rhossili and west Gower', 'Use the long bus or road branch for the bay and one headland route. It offers the iconic landscape but owns the whole day.'],
          ['Mumbles and east Gower', 'Use frequent local connections for promenade, castle context and a shorter coast line. It is easier to combine with Swansea.']
        ],
        access: 'Swansea railway station is inland from the marina and serves as the bus gateway. Rhossili, Mumbles and other Gower points use different routes and frequencies. Beaches, causeways and headlands may be tide or weather dependent.',
        tradeoff: 'West Gower sacrifices Swansea city and any second coast. Mumbles gives up the dramatic western bay but protects frequency and a flexible return. The route chooses one shore system deliberately.',
        stages: [
          ['Set the Swansea gateway', 'Locate the correct bus stop, final return and city fallback before leaving the station or centre.'],
          ['Travel to one peninsula branch', 'Use the named service to Rhossili, Mumbles or another selected place. Do not hop between routes without a confirmed connection.'],
          ['Complete a bounded coast line', 'Follow the signed bay, promenade or headland route with a tide and time turnaround. Stay back from cliffs and surf.'],
          ['Return before frequency thins', 'Reach the bus stop early and allow traffic before the final rail. Keep Swansea’s marina or market as optional only after return.']
        ],
        fallback: 'If west Gower buses or weather fail, use Swansea museum and bay or Mumbles on the more frequent corridor. If tide removes a route, stay on signed upper paths and never cross exposed sand or causeway.',
        watch: [
          ['Gower is a peninsula, not one beach stop', 'Routes diverge and cross-links are limited. Select the branch before boarding.'],
          ['Tide alters access', 'Worm’s Head and beach sections require official tide and safety guidance. Do not estimate from visible water.'],
          ['Evening buses are sparse', 'A missed west-Gower service can threaten the rail return. Know the final two departures.']
        ],
        duration: 'Allow a full day for Rhossili or another west-Gower branch. Swansea and Mumbles can share a six-to-eight-hour day.',
        combine: 'Combine Swansea with Mumbles or Rhossili with one headland route. Keep Cardiff and Bannau Brycheiniog for separate days.',
        verify: 'Check the exact bus timetable, Gower National Landscape advice, tide, coast weather, daylight and Transport for Wales service before departure.',
        sources: [
          ['https://www.visitswanseabay.com/', 'Visit Swansea Bay — official destination guide'],
          ['https://www.gower-nl.org.uk/', 'Gower National Landscape — official visitor information']
        ]
      })
    ]
  }),
  c({
    slug: 'pembrokeshire-west-wales',
    name: 'Pembrokeshire & West Wales',
    nation: 'Wales',
    band: 'wales',
    family: 'coast-path-and-branch-log',
    label: 'Coast path and branch log',
    tagline: 'Use one harbour, saint’s city or rail coast at a time; the path does not shorten the roads.',
    hubIntro: 'St Davids, Tenby and the Ceredigion coast sit on separate West Wales corridors. Rail reaches Tenby and Aberystwyth, while St Davids needs a bus or road connection. Coast-path sections, boats and island visits add weather, tide and final-service decisions that should be explicit.',
    stay: 'Four to six nights across one or two bases supports a south Pembrokeshire town, St Davids and a Ceredigion branch. Tenby is useful for the south coast; St Davids for the national-park edge; Aberystwyth for rail and northern Ceredigion.',
    transfer: 'West Wales rail branches are slow and vulnerable to missed connections. Coastal buses can be seasonal. Boats use named harbours and sea-state policies. Protect the final land connection before joining the coast path or island queue.',
    season: 'Atlantic wind and rain affect boats, cliffs and exposed beaches in every season. Summer improves services but raises road and accommodation pressure; winter demands shorter routes and urban fallbacks.',
    fallback: 'Use Tenby, St Davids or Aberystwyth as a complete town day. If a boat or coast segment fails, do not replace it with another distant exposed headland.',
    sources: [
      ['https://www.visitpembrokeshire.com/', 'Visit Pembrokeshire — official destination guide'],
      ['https://www.pembrokeshirecoast.wales/', 'Pembrokeshire Coast National Park — official visitor information'],
      ['https://tfw.wales/', 'Transport for Wales — rail and bus planning']
    ],
    guides: [
      g({
        slug: 'st-davids-coast',
        name: 'St Davids & the Pembrokeshire Coast',
        instrument: 'Cathedral-to-cliff weather card',
        layout: 'saints-city-coast-fold',
        imageQuery: 'St Davids Cathedral Pembrokeshire Wales',
        imageAlt: 'St Davids Cathedral set in its valley in Pembrokeshire',
        purpose: 'Choose St Davids cathedral city or one nearby coast segment as the main day, naming the rural bus, parking or boat connection before the national-park edge becomes an open-ended loop.',
        summary: 'Arrive in St Davids, descend to the cathedral precinct, then commit to one signed coast, harbour or boat branch only when weather and return transport remain secure.',
        choices: [
          ['Cathedral and city depth', 'Use the cathedral, Bishop’s Palace and compact city as the complete day. It is the strongest poor-weather and public-transport choice.'],
          ['St Davids Head coast route', 'Use one signed section from a named trailhead with a turn-back. It adds geology and sea views but requires the full weather window.'],
          ['Boat or Ramsey Sound', 'Book one exact operator and sailing from the named harbour. It offers marine perspective but can cancel and adds a last-mile transfer.']
        ],
        access: 'St Davids has no railway station. Buses and roads arrive in the city, while coast trailheads and boat harbours sit beyond it. Confirm the rural return and operator pickup; do not assume the cathedral and coast start share one stop.',
        tradeoff: 'A deep cathedral visit, substantial coast walk and boat trip do not fit one resilient day. Choosing the coast sacrifices palace and city depth; choosing the city gives up marine reach but protects the return.',
        stages: [
          ['Arrive in Britain’s small city', 'Locate the final bus or car pickup before descending to the cathedral valley. Keep the city fallback visible.'],
          ['Complete the sacred precinct', 'Visit the cathedral or Bishop’s Palace with current worship and admission conditions, then reassess weather.'],
          ['Commit to one coast branch', 'Take the confirmed shuttle, road or signed path to the selected headland or harbour. Use a time-based turnaround.'],
          ['Return before the rural cutoff', 'Regain St Davids or the pickup point with margin for wind, path surface and boat delay.']
        ],
        fallback: 'If boats or cliffs are unsuitable, keep the cathedral, palace, city galleries and a short lower coast viewpoint only when safe. If rural buses fail, stay near the base rather than walking road verges.',
        watch: [
          ['St Davids is not rail-served', 'Every rail itinerary contains a bus or road leg. Protect the final service and station connection.'],
          ['Cliff paths are exposed', 'Wind, rain and erosion can change a short route. Follow national-park advice and stay back from edges.'],
          ['Boat departure points differ', 'Operators may use distinct harbours and check-in places. Confirm the exact product and pickup.']
        ],
        duration: 'Allow a full day from a Pembrokeshire base. The cathedral and city need four to six hours; a coast or boat branch owns the remaining daylight.',
        combine: 'Combine the cathedral with the palace or one nearby coast segment. Keep Tenby and Ceredigion for separate days.',
        verify: 'Check cathedral worship access, Cadw palace information, coast-path alerts, the exact bus or boat, sea weather and final return before departure.',
        sources: [
          ['https://stdavidscathedral.org.uk/visit-us', 'St Davids Cathedral — official visitor information'],
          ['https://www.pembrokeshirecoast.wales/coast-path/', 'Pembrokeshire Coast National Park — official walking guidance']
        ]
      }),
      g({
        slug: 'tenby-caldey-coast',
        name: 'Tenby, Caldey & the South Coast',
        instrument: 'Harbour-tide-island manifest',
        layout: 'walled-harbour-tide-sheet',
        imageQuery: 'Tenby harbour Wales colourful houses',
        imageAlt: 'Tenby harbour and colourful waterfront houses in Pembrokeshire',
        purpose: 'Choose Tenby’s walled harbour town, a Caldey Island sailing or one coast-path section, matching tides, boat operation and the branch train instead of stacking all three.',
        summary: 'Walk from Tenby station into the walled town, read the harbour’s live boat status, complete one island or coast line, and regain the station before the branch service narrows.',
        choices: [
          ['Tenby town and beaches', 'Use the walls, harbour, museum and one safe beach edge as the complete day. This is the most flexible and rail-simple choice.'],
          ['Caldey Island sailing', 'Make the exact boat and island visit the central event. It gives a distinct monastic island day but depends on sea and seasonal operation.'],
          ['Coast-path section', 'Take a signed route toward Saundersfoot or another named endpoint with a transport return. It adds landscape but removes the island from the day.']
        ],
        access: 'Tenby station is inland from the harbour. Boat departure location can change with tide and operator, while coast-path exits require named bus or rail returns. Save the final train and confirm the harbour check-in before exploring the town.',
        tradeoff: 'Caldey, a long coast walk and relaxed Tenby are separate priorities. Choosing the island sacrifices path distance; choosing the coast gives up the sailing but creates a land-based return.',
        stages: [
          ['Walk station to walled town', 'Use the direct route and locate the final train before descending to the harbour. Keep luggage outside the boat plan.'],
          ['Read harbour and tide', 'Confirm whether and where the selected boat departs, or assess the coast route from the public shore.'],
          ['Commit to island or path', 'Board the exact sailing or follow one signed section with an exit and time-based turnaround. Do not switch after the main departure window.'],
          ['Return through Tenby', 'Regain the harbour town and station with margin for tide, queues and uphill streets.']
        ],
        fallback: 'If Caldey sailings cancel, use Tenby’s museum, walls, harbour and a safe short coast or beach route. If coast paths are poor, stay within the compact town rather than transferring to another headland.',
        watch: [
          ['Boat operation follows sea and tide', 'Published seasonal service can still change. Check the operator at the harbour and keep the town day complete.'],
          ['Beaches change at high water', 'Do not use sand as a guaranteed route between town areas. Streets and signed paths remain the dependable connection.'],
          ['The branch line has gaps', 'A late boat can threaten the train. Leave one practical rail option in reserve.']
        ],
        duration: 'Allow a full day for Caldey or a substantial coast section. Tenby town and beaches need five to six hours from a nearby base.',
        combine: 'Combine Tenby with Caldey or one signed coast segment, not both at full length. Keep St Davids and Aberystwyth for separate days.',
        verify: 'Check the exact Caldey boat operator and departure, tide and sea weather, coast-path notices and Transport for Wales branch service before departure.',
        sources: [
          ['https://caldeyislandwales.com/', 'Caldey Island — official visitor and boat information'],
          ['https://www.visitpembrokeshire.com/explore-pembrokeshire/towns-and-villages/tenby-and-penally', 'Visit Pembrokeshire — official Tenby guide']
        ]
      }),
      g({
        slug: 'aberystwyth-ceredigion',
        name: 'Aberystwyth & the Ceredigion Coast',
        instrument: 'Rail-end coast-and-hill board',
        layout: 'promenade-railway-horizon',
        imageQuery: 'Aberystwyth promenade Wales coast',
        imageAlt: 'Aberystwyth promenade and seafront on the Ceredigion coast',
        purpose: 'Use Aberystwyth as the rail-end city and choose the National Library, cliff railway or one Ceredigion coast branch, respecting the long rail journey and sparse onward services.',
        summary: 'Arrive at Aberystwyth station, complete the town and promenade spine, then add one hill, collection or booked heritage-rail branch with the final train protected.',
        choices: [
          ['Town, castle and promenade', 'Keep the day around the seafront, university town and museum or library. This is the strongest flexible rail day.'],
          ['Cliff and viewpoint', 'Use Constitution Hill and the cliff railway when operating, with a bounded promenade route. It adds height but depends on wind and service.'],
          ['Vale of Rheidol branch', 'Make the heritage railway the booked event and treat Aberystwyth as the arrival and evening frame. It gives valley depth but owns most of the day.']
        ],
        access: 'Aberystwyth is the end of a long Transport for Wales line. The National Library is uphill, the cliff railway lies north along the promenade and the Vale of Rheidol has its own station and timetable. Do not schedule a tight mainline connection after a heritage service.',
        tradeoff: 'A complete heritage-rail journey, library visit and long seafront day do not fit comfortably. Choosing the valley sacrifices town depth; staying in Aberystwyth gives up the inland branch but protects flexibility.',
        stages: [
          ['Arrive at the rail end', 'Leave the station toward the town or heritage platform, saving the final mainline train and allowing for the long onward journey.'],
          ['Read town and sea', 'Use the castle, promenade and one collection or café as the first complete block, observing wind and wave conditions.'],
          ['Commit to hill or valley', 'Take the operating cliff railway, climb by the verified route or board the booked Vale of Rheidol service. Do not attempt both major branches.'],
          ['Return before the long rail leg', 'Regain the station with margin for heritage delay, weather and platform changes. Avoid the final useful connection when possible.']
        ],
        fallback: 'If wind or heritage operation fails, use the National Library, Ceredigion Museum and promenade sections that remain safe. If the mainline is disrupted before departure, stay at the current base rather than beginning an uncertain cross-Wales chain.',
        watch: [
          ['The rail journey is part of the day', 'Cross-Wales travel can be long and connections matter. Do not count only the final branch segment.'],
          ['Cliff railway operation is conditional', 'Wind, maintenance and season affect service. The town route should remain complete without it.'],
          ['Promenade waves can overtop', 'Storm conditions make the sea edge unsafe. Follow local closures and use inland streets.']
        ],
        duration: 'Allow a full day from a closer West Wales base, or stay overnight after a long rail journey. The Vale of Rheidol is a dedicated half- to full-day event.',
        combine: 'Combine Aberystwyth with one hill or collection, or make the heritage railway the sole branch. Keep Pembrokeshire and North Wales for separate bases.',
        verify: 'Check Transport for Wales, Vale of Rheidol or cliff railway operation, National Library access, coast weather and the final train before departure.',
        sources: [
          ['https://www.library.wales/visit', 'National Library of Wales — official visitor information'],
          ['https://www.rheidolrailway.co.uk/plan-your-visit/', 'Vale of Rheidol Railway — official visit planning']
        ]
      })
    ]
  }),
  c({
    slug: 'north-wales-eryri',
    name: 'North Wales & Eryri',
    nation: 'Wales',
    band: 'wales',
    family: 'castle-mountain-coast-board',
    label: 'Castle, mountain and coast board',
    tagline: 'Choose a castle coast or mountain gateway; the same train does not finish both days.',
    hubIntro: 'Conwy and Llandudno, Eryri’s mountain gateways, and Caernarfon with Anglesey form three distinct North Wales systems. Rail follows the coast, while mountain routes and castles add buses, seasonal railways, parking and weather. One named gateway per day is the practical standard.',
    stay: 'Four to six nights supports a coast town, one Eryri day and a western castle or island branch. Llandudno Junction is useful for rail; Betws-y-Coed, Llanberis and Caernarfon open different mountain approaches and are not interchangeable bases.',
    transfer: 'Transport for Wales serves the north coast and Conwy Valley; buses and heritage railways continue to mountain gateways. Yr Wyddfa routes start from different points. Anglesey road and rail access does not automatically reach every coast site.',
    season: 'Mountain wind, cloud, snow and rain matter year-round. Summer creates parking and summit-rail demand; winter requires lower routes and short daylight. Coast and castle days remain useful fallbacks.',
    fallback: 'Use Conwy, Llandudno, Caernarfon or a rail-valley town when mountain access fails. Do not replace a closed Yr Wyddfa route with another high summit without a new forecast and transport plan.',
    sources: [
      ['https://www.visitwales.com/destinations/north-wales', 'Visit Wales — official North Wales guide'],
      ['https://snowdonia.gov.wales/visit/', 'Eryri National Park — official visitor information'],
      ['https://tfw.wales/', 'Transport for Wales — rail and bus planning']
    ],
    guides: [
      g({
        slug: 'conwy-llandudno',
        name: 'Conwy Castle & Llandudno',
        instrument: 'Wall-to-headland coast clock',
        layout: 'castle-bay-headland-fold',
        imageQuery: 'Conwy Castle Wales river estuary',
        imageAlt: 'Conwy Castle beside the estuary in North Wales',
        purpose: 'Choose Conwy’s compact medieval core or Llandudno’s open bay and headland as the main day. The towns sit on the same coast corridor, but their stations and the Great Orme approaches are not interchangeable.',
        summary: 'Use Conwy station for the castle and town; use Llandudno station for the seafront. If changing towns, make one TfW rail leg the hinge and decide before leaving which Great Orme mode—tram, bus, cable car or a walked route—fits the weather and your mobility.',
        choices: [
          ['Conwy, for history without a second transfer', 'Walk from Conwy station into the walled town; choose the castle interior and harbour streets, then check Cadw’s live town-wall notice. On 9 October 2026 Cadw lists a short section between Watch Tower and Wing Gate as closed during safety work, with reopening planned for Easter 2027. Good for a short daylight window or wet weather, but the castle has steep, uneven historic circulation.'],
          ['Llandudno, for a full coast-and-height day', 'Start at Llandudno station, not Llandudno Junction. Take the promenade and pier, then pick one Great Orme ascent: the tramway, seasonal cable car, bus or a signed walk. Wind, visibility, steep paths and each operator’s live status decide the choice.'],
          ['A two-town sampler, only with a protected train', 'Do a focused Conwy castle/town visit, take one TfW train to Llandudno station, and finish on the level seafront. This is a contrast day, not a full wall walk plus Great Orme summit circuit.']
        ],
        access: 'Conwy station is beside the town approach. TfW serves both Conwy and Llandudno; Llandudno Junction is the coast-line interchange about two miles from Llandudno’s seafront, while Llandudno station is the resort terminus. Great Orme transport starts in town and has different endpoints, seasons and access conditions. Save the precise station name and last return before setting out.',
        tradeoff: 'The high-value decision is historic interior versus exposed headland time. Conwy suits visitors who want a compact heritage core and an easier rail arrival; Llandudno suits people who want a seafront day and can choose an ascent mode. A rainy or windy forecast makes the sampler or a Conwy-only day more robust; it does not make the Great Orme routes equivalent.',
        stages: [
          ['Arrive at the right station', 'For Conwy, use Conwy station; for the resort, continue to Llandudno station. Llandudno Junction is a separate interchange, not the promenade stop.'],
          ['Spend the main block in one place', 'In Conwy, choose the castle and harbour streets, then confirm wall access. In Llandudno, walk the seafront before committing to one Great Orme ascent mode.'],
          ['Cross the coast corridor once', 'Use the TfW Conwy–Llandudno branch only if the second town adds enough value. Check the live timetable and disruptions; do not base the return on a remembered frequency.'],
          ['End on a low-risk return', 'Finish at Conwy’s town centre or Llandudno’s seafront near the station you saved. If headland visibility or wind worsens, return by the same confirmed mode rather than switching to an unplanned descent.']
        ],
        fallback: 'In rain or poor visibility, make Conwy’s town streets and any confirmed open interior the main visit, or keep Llandudno to the promenade and town. Do not substitute a steep exposed Great Orme walk for a cancelled lift or tram. Check Cadw’s live notice before travelling because historic sites can close at short notice in extreme weather.',
        watch: [
          ['Llandudno Junction is not the resort station', 'TfW identifies the Junction as about two miles from town. If your booking says Junction, plan the onward leg; if it says Llandudno, you arrive at the seafront town.'],
          ['A castle visit is not a step-free wall circuit', 'Cadw’s Conwy Castle information describes historic access. Check the current access guide and distinguish interior circulation from the separate town walls before choosing it for a mobility-limited visitor.'],
          ['Great Orme ascent modes have separate operating gates', 'The tramway, cable car, bus and footpaths do not share one timetable or endpoint. Check operator notices, wind and visibility on the day; use the promenade as the all-weather lower plan.']
        ],
        duration: 'Give one town the main block: Conwy’s castle and streets or Llandudno’s seafront plus one Great Orme ascent. Add the second town only as a short stop with a checked rail return; trying to do a full castle, complete wall circuit and headland circuit turns this into a rushed transfer day.',
        combine: 'The practical pairing is Conwy plus Llandudno by one TfW rail leg, with Llandudno promenade as the shorter second stop. Leave Yr Wyddfa, Caernarfon and Anglesey for separate days because their bus, mountain or island connections need their own return margin.',
        verify: 'Check TfW’s named station and live return, Cadw’s Conwy Castle admission/access and notice, the Great Orme operator’s exact service and endpoint, and a coastal forecast before departure. Sources checked 9 October 2026; recheck time-sensitive details.',
        sources: [
          ['https://cadw.gov.wales/visit/places-to-visit/conwy-castle', 'Cadw — Conwy Castle visitor information'],
          ['https://cadw.gov.wales/conwy-castle-access-information', 'Cadw — Conwy Castle access guide'],
          ['https://cadw.gov.wales/visit/places-to-visit/conwy-town-walls', 'Cadw — Conwy Town Walls current access notice'],
          ['https://tfw.wales/places/stations/llandudno-junction', 'Transport for Wales — Llandudno Junction station and connections'],
          ['https://tfw.wales/places/destinations/llandudno', 'Transport for Wales — Llandudno arrival by train'],
          ['https://www.greatormetramway.co.uk/plan-your-visit/', 'Great Orme Tramway — official visit planning']
        ]
      }),
      g({
        slug: 'yr-wyddfa-gateways',
        name: 'Yr Wyddfa Gateway Choice',
        instrument: 'Summit-route and rail gate',
        layout: 'mountain-route-selector',
        imageQuery: 'Yr Wyddfa Snowdon Wales mountain view',
        imageAlt: 'Yr Wyddfa rising above the Eryri landscape in North Wales',
        purpose: 'Decide whether this is a summit-walking day, a booked railway ride or a lower Llanberis day. Each starts differently, carries a different skill and weather threshold, and has its own return plan.',
        summary: 'For a walk, select one named trailhead and be equipped to navigate and turn back; for the railway, book the exact Llanberis return product and confirm whether it reaches Clogwyn or the summit; for poor conditions, keep the day below the mountain.',
        choices: [
          ['Llanberis and lower mountain: visitors who want a flexible day', 'The village, Padarn shore and lower-level options preserve a meaningful outing without a summit claim. Llanberis also has the railway departure point and Sherpa S1/S2 connections, but the train and bus do not guarantee hill weather.'],
          ['Snowdon Mountain Railway: visitors who want a booked ascent', 'Buy a specific return from Llanberis and read the destination on that date. The operator lists a roughly 2.5-hour summit return or a roughly 2-hour Clogwyn return, each with a same-train return rule; destination and weather operation are not interchangeable with a summit walk.'],
          ['A named summit path: experienced walkers with mountain kit', 'Choose a single route and trailhead before travel—Llanberis, Pen-y-Pass, Rhyd Ddu or another mapped start. Pyg/Miners’ Paths from Pen-y-Pass are not an automatic loop; navigation, steep rocky ground, cloud and return transport all matter.']
        ],
        access: 'Llanberis is the railway gateway and has Sherpa S1/S2 links. Pen-y-Pass is a separate road-side trailhead served by the seasonal/dated Sherpa network; parking availability is not a walk-up guarantee. The park’s route app/maps identify other trailheads such as Rhyd Ddu. Do not book an arrival at Llanberis and assume it reaches Pen-y-Pass: check the current Sherpa times in both directions and the final onward connection.',
        tradeoff: 'A railway ticket buys a constrained return itinerary, not a safe substitute for walking skill or a promise of summit conditions. A summit walk needs full-day daylight, navigation and appropriate clothing/equipment; people without those should choose a lower route or the train only if its precise destination and weather operation suit them. In cloud, strong wind or heavy rain, a valley/lake day is the better plan, not a different high path chosen on impulse.',
        stages: [
          ['Name the trailhead or booked station', 'Save the exact arrival point and a return journey. If travelling without a car, confirm the Sherpa route serves both ends on your date before choosing a linear walk.'],
          ['Read the mountain forecast, not only the village forecast', 'Use the Met Office Eryri mountain forecast for wind, visibility, precipitation and freezing level. Poor visibility, gale force wind or persistent rain are route-finding, balance and cold hazards; switch to the lower plan before departure.'],
          ['Keep one route or one railway product', 'Walkers stay on the chosen mapped path with navigation and a turnaround time. Railway passengers verify the date’s destination and the operator’s same-train return rule; do not plan to walk down unless independently equipped and trained.'],
          ['Protect the way back', 'Count descent time, fatigue, daylight and the final Sherpa/train connection. If the return buffer disappears, turn around while the route remains straightforward.']
        ],
        fallback: 'For heavy rain, low cloud, strong summit wind, snow/ice or a cancelled railway, keep the visit at Llanberis and Lake Padarn or choose a suitable low-level Eryri option reached by the same confirmed transport. Do not transfer to Pen-y-Pass or another summit because the first plan failed; that creates a new weather, trailhead and return decision.',
        watch: [
          ['The bus network is a route, not a rescue shuttle', 'Sherpa S1 connects Caernarfon–Llanberis–Betws-y-Coed and S2 connects Bangor–Llanberis–Pen-y-Pass, but dates and journey times matter. Match the finish and last bus to the walk.'],
          ['Railway destination depends on the selected service/date', 'The operator distinguishes summit and Clogwyn returns and requires return on the same train. Read the destination on your booked ticket and live operating notice; do not infer a guaranteed summit visit.'],
          ['Summit paths require independent mountain competence', 'The Met Office identifies gale-force wind, poor visibility and heavy persistent rain as hazards; cloud can remove visual route references. If your group lacks navigation, equipment or confidence for those conditions, choose the low-level day before setting out.']
        ],
        duration: 'Reserve the daylight day for a summit walk and build the route timing around your own pace, not an attraction stop. The railway operator quotes about 2.5 hours for its summit return and about 2 hours for a Clogwyn return, including the stop; add Llanberis arrival, weather checks and onward transport. A lower village/lake day can be shortened without risking a remote trailhead return.',
        combine: 'Pair Llanberis with the booked railway or one low-level lakeside route. Do not combine a summit walk with Conwy, Caernarfon or Anglesey; keep those on separate days so the mountain descent does not compete with a transfer.',
        verify: 'Check the Eryri Yr Wyddfa guidance/map, Met Office mountain forecast, current Sherpa S1/S2 timetable in both directions, parking restrictions if driving, and Snowdon Mountain Railway’s date-specific destination and notice. Sources checked 9 October 2026; recheck before travel.',
        sources: [
          ['https://snowdonia.gov.wales/visit/yr-wyddfa-snowdon/', 'Eryri National Park — official Yr Wyddfa guidance'],
          ['https://www.metoffice.gov.uk/weather/specialist-forecasts/mountain/snowdonia', 'Met Office — Eryri mountain forecast and hazards'],
          ['https://www.sherparwyddfa.wales/times.shtml', 'Sherpa’r Wyddfa — current bus times and route corridors'],
          ['https://www.sherparwyddfa.wales/', 'Sherpa’r Wyddfa — network, park-and-ride and bus planning'],
          ['https://snowdonrailway.co.uk/plan-your-visit/', 'Snowdon Mountain Railway — return products and operating conditions']
        ]
      }),
      g({
        slug: 'caernarfon-anglesey',
        name: 'Caernarfon & Anglesey',
        instrument: 'Castle-to-island crossing sheet',
        layout: 'menai-strait-bridge-plan',
        imageQuery: 'Caernarfon Castle Wales waterfront',
        imageAlt: 'Caernarfon Castle beside the Menai Strait in North Wales',
        purpose: 'Choose either Caernarfon’s castle town or one named Anglesey coast stop. Bangor is the rail-transfer hinge, the Menai bridges are not a destination, and the island’s last mile determines whether a car-free day is realistic.',
        summary: 'For a castle day, take the T2 bus from Bangor and stay in Caernarfon. For Anglesey, select a place served by rail or by a named bus-and-walk connection—such as Rhosneigr or Holyhead Mountain—before crossing, then save the return leg.',
        choices: [
          ['Caernarfon Castle: visitors focused on Welsh royal and military history', 'From Bangor station, use the T2 bus corridor to Caernarfon and spend the day inside the town. Cadw’s main castle entrance is the King’s Gate; its access guide notes a lift to the gate top, but emergency evacuation and uneven historic spaces need individual planning.'],
          ['Rhosneigr: car-free beach/coast walk with a simpler rail anchor', 'Use Rhosneigr station as the rail anchor and check Visit Anglesey’s mapped circular walk. The local guide also lists buses 25 and 45 on Mondays to Saturdays; check current dates/times and tide/weather before treating it as a beach day. This is a separate island day, not a quick add-on to Caernarfon.'],
          ['Holyhead Mountain: west-coast walking with a rail arrival', 'Arrive at Holyhead by rail, then plan the walk’s out-of-town start. Visit Anglesey identifies a local bus stop near the country park and a remaining walk to the trail; this suits walkers who can navigate and adds a real last-mile leg. Do not pair it with the full castle visit.']
        ],
        access: 'Caernarfon has no mainline station: TfW’s T2 bus links it with Bangor, where bus stops are outside/near the rail station. The North Wales coast rail line crosses to Anglesey and serves Holyhead and Rhosneigr, but neither station sits at every coastal walk start. Visit Anglesey’s local pages give the last-mile details. If combining, choose Bangor only as a transfer point and calculate the outward/return bus or train before leaving the castle.',
        tradeoff: 'Caernarfon is the stronger choice for a contained heritage visit with an identified Bangor bus link; Anglesey is better when the island coast itself is the purpose and you can give it a full day. Rhosneigr’s rail-plus-walk pattern and Holyhead Mountain’s rail-plus-bus/foot approach are distinct choices. A same-day castle-and-island sampler spends much of the margin crossing and makes a missed bus or delayed train expensive.',
        stages: [
          ['Choose Bangor transfer or island rail', 'For Caernarfon, change at Bangor to T2 and confirm the same-day bus back. For Anglesey, use the coast-line train to the actual station near your selected walk.'],
          ['Complete one anchor, not two', 'Castle visitors use Caernarfon’s King’s Gate entrance and keep time for the town. Island visitors follow the mapped Rhosneigr circuit or the Holyhead Mountain approach; check route condition and local access.'],
          ['Budget the final mile explicitly', 'Rhosneigr has a station near the north end of the lake and mapped public footpaths; Holyhead Mountain requires a separate approach from the town/station, with a local bus stop still some distance from the country park.'],
          ['Protect the return connection', 'Check TfW for the train and T2 for the bus direction/date; do not treat a ferry departure or bridge crossing as proof that local transport is frequent. Leave a weather/road buffer before the final mainland rail link.']
        ],
        fallback: 'For wind, rain or a missed Anglesey connection, shorten to the nearest confirmed rail town rather than crossing to a different remote beach. Caernarfon’s castle town is a better mainland fallback if T2 is running; verify Cadw notices and the rail/bus before committing. If a visitor needs step-free access, check Cadw’s detailed access guide and contact the castle about evacuation support before buying into the day plan.',
        watch: [
          ['Caernarfon is a bus continuation from Bangor', 'The rail station is not the castle gateway. TfW places the bus stops by Bangor station and identifies T2 as the Caernarfon corridor; confirm both directions and live service before entering the castle.'],
          ['A station is not the beach/path start', 'Rhosneigr’s official guide links station, mapped footpaths and a local circular walk. Holyhead Mountain starts outside town; check the operator’s stop and the remaining walk rather than assuming a bus drops at the trail.'],
          ['The walk needs a coastal condition check', 'Anglesey route pages provide mapped walks, but wind, rain, tide and daylight can change exposure or the return. Choose the lower town/coast option when the exposed path is not suitable.']
        ],
        duration: 'A Caernarfon castle-and-town visit is a substantial half/full day once the Bangor T2 connection is included. Rhosneigr or Holyhead Mountain each deserves its own island day from the rail station, with time for the approach and return. Combining one of them with the full castle visit leaves little tolerance for a late bus or weather delay.',
        combine: 'Choose Caernarfon plus the immediate Menai area only when the exact bus/road connection gives a reliable return. Choose one Anglesey walk for the day and keep Yr Wyddfa and Llandudno separate; they use different gateways and add another return clock.',
        verify: 'Check TfW’s Bangor station bus-stop note and T2 corridor, current T2/rail timetables, Cadw’s Caernarfon Castle hours/access notice, and the exact Visit Anglesey walk map, transport and local conditions. Sources checked 9 October 2026; recheck live details.',
        sources: [
          ['https://cadw.gov.wales/visit/places-to-visit/caernarfon-castle', 'Cadw — Caernarfon Castle visitor information'],
          ['https://cadw.gov.wales/castell-caernarfon-access-guide', 'Cadw — Caernarfon Castle access guide'],
          ['https://tfw.wales/places/stations/bangor-gwynedd', 'Transport for Wales — Bangor station and bus interchange'],
          ['https://tfw.wales/news/5-bus-routes-in-north-wales-which-you-need-to-explore-catch-the-bus-month', 'Transport for Wales — T2 bus link from Bangor to Caernarfon'],
          ['https://www.visitanglesey.co.uk/en-gb/explore/circular-walks/rhosneigr-circular-walk', 'Visit Anglesey — Rhosneigr circular walk and public transport'],
          ['https://www.visitanglesey.co.uk/en-gb/explore/circular-walks/holyhead-mountain-circular-walk', 'Visit Anglesey — Holyhead Mountain walk and approach']
        ]
      })
    ]
  }),
  c({
    slug: 'belfast-northern-ireland',
    name: 'Belfast, Causeway Coast & Derry',
    nation: 'Northern Ireland',
    band: 'northern-ireland',
    family: 'lough-coast-history-ledger',
    label: 'Lough, coast and history ledger',
    tagline: 'Give Belfast, the Causeway Coast and Derry separate days with their own evidence and return.',
    hubIntro: 'Belfast’s civic quarters and Maritime Mile are urban transit days; the Causeway Coast is a rail-and-bus or road corridor; Derry is a separate walled city whose recent history requires careful, site-led interpretation. Combining them works across several nights, not as a single highlights loop.',
    stay: 'Four to six nights supports two Belfast districts, a coast day and Derry. Belfast is the best transport base for the east and coast; an overnight in Derry protects the western city from a rushed same-day return.',
    transfer: 'Translink integrates many trains and buses, but Belfast stations and bus centres serve different corridors. Causeway sites require a named stop and final connection. Cross-border or ferry arrivals have separate terminals and should not be tied to a tight onward ticket.',
    season: 'Rain and wind can reshape the coast year-round. Summer improves daylight and visitor services but raises Giant’s Causeway pressure. Belfast and Derry have strong indoor alternatives; public events and parades can change streets and transport.',
    fallback: 'Use a complete Belfast or Derry museum-and-street day when coast weather or transport fails. Do not move to another exposed cliff site merely because the bus continues.',
    sources: [
      ['https://discovernorthernireland.com/', 'Discover Northern Ireland — official destination guide'],
      ['https://www.translink.co.uk/', 'Translink — official rail and bus information'],
      ['https://www.metoffice.gov.uk/weather/forecast/gcey94cuf', 'Met Office — Belfast and Northern Ireland forecasts']
    ],
    guides: [
      g({
        slug: 'belfast-civic-maritime',
        name: 'Belfast Civic Quarter & Maritime Mile',
        instrument: 'City-hall-to-shipyard route book',
        layout: 'linen-grid-maritime-axis',
        imageQuery: 'Belfast City Hall Northern Ireland exterior',
        imageAlt: 'Belfast City Hall in the city centre',
        purpose: 'Choose Belfast’s civic centre, recent-history institutions or Maritime Mile as the main layer and use one deliberate river crossing or transit move instead of treating every quarter as adjacent.',
        summary: 'Begin at City Hall and the central grid, complete one history or civic anchor, then move once to the Titanic Quarter or remain with the city-centre evidence.',
        choices: [
          ['Civic centre and collections', 'Use City Hall, Linen Hall Library or Ulster Museum context with the central streets. This provides the most flexible first-city reading.'],
          ['Maritime Mile and Titanic Belfast', 'Make the booked Titanic Quarter visit the main event and use the shipyard public realm. It gives industrial depth but is a separate district.'],
          ['Conflict-history interpretation', 'Use a reputable museum or guided route with explicit context and respect for residential areas. This requires care and should not be a spectacle checklist.']
        ],
        access: 'Belfast Grand Central, Lanyon Place and local Glider or bus stops serve different districts. Titanic Quarter lies across the Lagan from the civic core. Choose the first institution and final station before adding murals or neighbourhood routes.',
        tradeoff: 'Titanic Belfast, a deep civic museum day and a responsible recent-history tour are separate priorities. Choosing one sacrifices another but avoids superficial treatment and constant cross-city movement.',
        stages: [
          ['Enter through the civic grid', 'Use the station or bus arrival to reach City Hall and establish the city’s quarters, preserving the final return route.'],
          ['Complete one evidence anchor', 'Visit City Hall, a museum, library or booked tour with enough time for interpretation. Avoid collecting residential murals without context.'],
          ['Cross once to maritime Belfast', 'Use Glider, train, bus or a planned walk to the Titanic Quarter only when that is the chosen second layer.'],
          ['Return on the matching corridor', 'Finish near Grand Central, Lanyon Place or the selected city stop, allowing event or parade-related diversions.']
        ],
        fallback: 'If a maritime booking closes, use City Hall, Ulster Museum or central institutions and a public river route. If streets are affected by events, follow Translink and local authority diversions rather than forcing a neighbourhood path.',
        watch: [
          ['Recent history requires context', 'Use established institutions or responsible guides and respect residents. Do not reduce living communities to photo stops.'],
          ['Titanic Quarter is a separate district', 'Include the bridge or transit movement and check-in time. It is not the next block from City Hall.'],
          ['Stations and bus centres have changed', 'Use current Translink names and platforms, not an older map or hotel handout.']
        ],
        duration: 'Allow six to eight hours for one major institution and a second district. Titanic Belfast and the Maritime Mile can fill most of a day.',
        combine: 'Combine the civic centre with one responsible history institution or the Maritime Mile with Titanic Quarter. Keep the Causeway Coast and Derry for separate days.',
        verify: 'Check Titanic Belfast or the selected institution, City Hall access, Translink status, public events and any street restriction before departure.',
        sources: [
          ['https://www.titanicbelfast.com/visitor-information/', 'Titanic Belfast — official visitor information'],
          ['https://www.belfastcity.gov.uk/cityhall', 'Belfast City Council — City Hall visitor information']
        ]
      }),
      g({
        slug: 'giants-causeway-coast',
        name: 'Giant’s Causeway & the Causeway Coast',
        instrument: 'Coast-stop weather-and-return chart',
        layout: 'basalt-coast-rail-strip',
        imageQuery: 'Giants Causeway Northern Ireland basalt coast',
        imageAlt: 'Basalt columns at the Giant’s Causeway on the Northern Ireland coast',
        purpose: 'Choose the Giant’s Causeway as the anchor and add at most one coast stop supported by the actual rail-and-bus or road corridor, with wind, cliff safety and final return treated as hard limits.',
        summary: 'Travel from Belfast or a coast base to the visitor route, complete the causeway with official access guidance, then add one named town or viewpoint only when the return remains secure.',
        choices: [
          ['Causeway depth', 'Use the visitor centre, lower coast and one official trail as the complete day. This gives geological context and the simplest return.'],
          ['Causeway plus Bushmills', 'Connect one inland village or distillery booking through a verified bus or tour. It adds cultural context but creates a timed second anchor.'],
          ['Rail coast sampler', 'Use Portrush or Coleraine and one additional coast stop with a named connection. It gains variety but sacrifices trail depth.']
        ],
        access: 'The Giant’s Causeway is not at a mainline station. Rail typically connects through Coleraine or Portrush-area services, followed by bus, tour or road. Cliff and lower-coast routes have different gradients and conditions. Save the final return before descending.',
        tradeoff: 'A full causeway trail, distillery visit and several castles or beaches do not fit a public-transport day. Choosing one secondary stop sacrifices the rest but preserves geological depth and a safe return.',
        stages: [
          ['Reach the named coast gateway', 'Use the confirmed train, bus, tour or car park and record the final departure before entering the visitor route.'],
          ['Read the weather and access gate', 'Check wind, rain, path notices and shuttle or walking options. Select the route appropriate to current conditions.'],
          ['Complete one basalt line', 'Follow the official lower or cliff trail and add only one booked or connected secondary stop. Stay behind barriers and away from surf.'],
          ['Return through Coleraine or the base', 'Reach the bus or rail interchange with margin for coast traffic and full services. Do not wait for the final connection.']
        ],
        fallback: 'If cliff or lower-coast conditions are poor, use the visitor centre, a shorter official route and Portrush or Coleraine. If coast transport fails before departure, keep the day in Belfast or Derry.',
        watch: [
          ['Basalt can be wet and slippery', 'Sea spray, algae and rain affect footing. Use official routes and footwear and do not climb closed formations.'],
          ['Cliff paths are exposed', 'Wind and erosion can close sections. Respect diversions and use the lower-risk path.'],
          ['Coast attractions are spread out', 'Carrick-a-Rede, castles, beaches and distilleries have separate bookings and transport. One day cannot absorb them all.']
        ],
        duration: 'Allow a full day from Belfast for the Causeway and one modest coast stop. From a north-coast base, the site still deserves four to six hours.',
        combine: 'Combine the Causeway with Bushmills or one coast town only when the dated connection works. Keep Derry and Belfast for separate days.',
        verify: 'Check National Trust access and trail notices, Translink service, coast weather, any secondary booking and the final return before travel.',
        sources: [
          ['https://www.nationaltrust.org.uk/visit/northern-ireland/giants-causeway', 'National Trust — Giant’s Causeway visitor information'],
          ['https://www.translink.co.uk/', 'Translink — official Causeway Coast transport information']
        ]
      }),
      g({
        slug: 'derry-walls-bogside',
        name: 'Derry Walls, Bogside & River Foyle',
        instrument: 'Walls-and-memory context ledger',
        layout: 'walled-city-memory-section',
        imageQuery: 'Derry city walls Guildhall Northern Ireland',
        imageAlt: 'Historic city walls and central Derry beside the River Foyle',
        purpose: 'Use Derry’s walls as the spatial frame and choose a responsible museum or guided interpretation for the Bogside, connecting civic, plantation and recent history without reducing the city to murals.',
        summary: 'Arrive at the bus or rail gateway, complete a one-direction wall circuit, descend for one context-rich institution, and finish at Guildhall or the Peace Bridge.',
        choices: [
          ['Walls and plantation city', 'Use the complete walls, gates and central institutions as the main argument. This gives the clearest urban form and broad historical frame.'],
          ['Bogside and civil-rights history', 'Use the Museum of Free Derry or a reputable guided route with time for context and reflection. This is essential history, not a photo checklist.'],
          ['River Foyle and civic city', 'Connect Guildhall, Peace Bridge and riverside institutions with a shorter wall section. It offers a contemporary city view and easier gradients.']
        ],
        access: 'Derry rail station lies across the Foyle from the walled city and connects by local transport or the Peace Bridge route; bus arrivals may be closer to the centre. Wall access includes stairs. Identify the first gate and final river or station connection before climbing.',
        tradeoff: 'A complete wall circuit, deep recent-history museum and long river route exceed a short visit. Choosing interpretation sacrifices some wall distance; choosing the whole walls keeps the Bogside visit focused and respectful.',
        stages: [
          ['Enter at a named gate', 'Approach from the bus centre or across the Foyle and choose the wall direction, noting step-free streets and the final station route.'],
          ['Read the complete urban frame', 'Follow one wall arc or circuit, using gates and viewpoints to understand the city’s layers before descending.'],
          ['Commit to one context institution', 'Visit the Museum of Free Derry, Guildhall or another established institution. Give testimony and interpretation enough time.'],
          ['Finish at the river or civic centre', 'Use Guildhall Square and the Peace Bridge or a direct bus route, ending near the planned return without recircling the walls.']
        ],
        fallback: 'If walls are slippery or closed, use street-level gates, Guildhall, the museum and Peace Bridge. If a guided route is unavailable, use the established institution rather than wandering residential streets for images.',
        watch: [
          ['Living history deserves care', 'Follow museum and community guidance, avoid intrusive photography and do not treat residential murals as entertainment.'],
          ['The rail station is across the river', 'Include the bridge or local transfer in both directions. Do not use the departure time as the moment to leave the walls.'],
          ['Walls include stairs and exposure', 'Wet stone, wind and access closures can make a full circuit unsuitable. Use the civic street alternative.']
        ],
        duration: 'Allow six to eight hours for walls, one major interpretation site and the river. A focused walls-and-Guildhall stop can fit four hours.',
        combine: 'Combine the walls with one recent-history institution or the civic centre with the Peace Bridge. Keep Belfast and the Causeway Coast for separate days.',
        verify: 'Check Museum of Free Derry and Guildhall access, wall notices, Translink rail or bus service, public events and weather before departure.',
        sources: [
          ['https://www.visitderry.com/', 'Visit Derry — official destination guide'],
          ['https://museumoffreederry.org/visit/', 'Museum of Free Derry — official visitor information']
        ]
      })
    ]
  })
];
