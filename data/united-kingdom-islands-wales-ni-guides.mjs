import { defineUnitedKingdomCluster, unitedKingdomGuide } from './united-kingdom-guide-builder.mjs';

const g = unitedKingdomGuide;
const c = defineUnitedKingdomCluster;

export const unitedKingdomIslandsWalesNiClusters = [
  c({
    slug: 'scottish-islands',
    name: 'Skye, Orkney & the Outer Hebrides',
    reviewDate: '9 October 2026',
    reviewDateISO: '2026-10-09',
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
        reviewDate: '9 October 2026',
        reviewDateISO: '2026-10-09',
        name: 'Isle of Skye Road & Weather Plan',
        instrument: 'Peninsula road-and-light compass',
        layout: 'island-road-spokes',
        imageQuery: 'Isle of Skye Quiraing Scotland landscape',
        imageAlt: 'The Quiraing landscape on the Isle of Skye',
        purpose: 'Choose one Skye peninsula from the actual base, accounting for single-track roads, parking, buses, wind and daylight instead of promoting a full-island highlight loop.',
        summary: 'Start from Portree or another named base, read live road and weather conditions, complete one peninsula or lower-risk island route, and return before darkness or a ferry deadline.',
        choices: [
          ['No car: Portree and the 57A north', 'Use Portree as the base if the priority is Trotternish. Stagecoach 57A follows the Portree–Uig–Flodigarry corridor; choose a stop the date-specific timetable actually serves and build the day around that bus, not an imagined island-wide hop-on loop. This is for a bounded north-island day, not a flexible Quiraing-to-coast circuit.'],
          ['Car: bridge entry and one peninsula', 'Drive via Kyle of Lochalsh and the Skye Bridge for the most flexible mainland approach, then base in Portree for Trotternish or Broadford for south Skye. The bridge removes the ferry reservation step, not single-track delays or trailhead parking limits. Keep each day to one road spoke.'],
          ['Rail + ferry: Mallaig to Armadale', 'Take the rail line to Mallaig, cross on the CalMac ferry to Armadale and use the Stagecoach 52 corridor toward Broadford. This is a useful south-Skye arrival for a foot passenger, but it does not put you in Portree or at a northern trailhead; confirm the onward bus or prebooked transfer before choosing the base.']
        ],
        access: 'The car-free gateways are distinct: rail to Mallaig, CalMac Mallaig–Armadale, then Stagecoach 52 toward Broadford; or reach Portree from the mainland by a booked coach and use the date-specific 57A Portree–Uig–Flodigarry corridor for Trotternish. A car can instead enter over the Skye Bridge at Kyle of Lochalsh or use the vehicle ferry, but vehicle space must be reserved on the sailing. Pick accommodation at the end of the transport corridor you will use; Portree is not the Armadale ferry terminal, and neither bus route is a whole-island circuit.',
        tradeoff: 'Without a car, a Portree base and one 57A northbound day or a Broadford/Sleat day are realistic; changing base or reaching distant trailheads can consume a day in transfers. With a car, one peninsula per day gives more choice but still requires parking, fuel and safe passing places. A full-island loop loses time to road distance and delay. Arrival via Mallaig is best treated as a south-Skye transfer day, not as the start of a northern highlights loop.',
        stages: [
          ['Choose the base before booking the bed', 'For no-car Trotternish, use Portree and the 57A corridor; for the Mallaig ferry, use Broadford/Sleat only after confirming the 52 bus or transfer; for a car, choose Portree (north) or Broadford (south).'],
          ['Match the peninsula to today’s transport', 'No-car visitors use only stops linked by the published bus and leave room for its return. Drivers check road notices, fuel and parking at the first stop; never use a passing place as overflow parking.'],
          ['Stay inside one road spoke', 'Complete one Trotternish, west, or Sleat plan with a time-based turnaround. The car can reach more places, but the bus visitor should not try to join disconnected corridors in one day.'],
          ['Finish at the same transport edge', 'Return to Portree, Broadford or the booked ferry terminal with a weather and traffic buffer. If the sailing is the next leg, verify check-in and service status; do not place a remote sunset stop between the base and port.']
        ],
        fallback: 'In high wind, rain or poor visibility, replace an exposed walk with Portree or Broadford town time, a verified indoor stop, or a short lower-level route near the chosen base. If Mallaig–Armadale is disrupted, ask CalMac about that booking and stay near the booked shore until the replacement is clear; do not assume the bridge is reachable by the same bus or that a substitute sailing has vehicle space. In winter, check the reduced ferry pattern and daylight before making the crossing the same-day hinge.',
        watch: [
          ['Single-track roads need passing-place discipline', 'Do not park in passing places or follow an unrealistic app estimate. Let faster traffic pass and protect the return.'],
          ['Parking capacity is a hard limit', 'Popular trailheads can fill. Use official alternatives or leave; roadside improvisation damages safety and land access.'],
          ['Ferry check-in precedes departure', 'Vehicle and foot-passenger check-ins differ. Build the road day around the specific Mallaig–Armadale booking, not the advertised sailing minute.'],
        ],
        duration: 'Allow a full day per peninsula and at least three nights on Skye. A no-car visitor should keep the arrival day near Armadale/Broadford or Portree, depending on the chosen corridor; a car visitor can reach more of the island but should still leave ferry arrival and departure days light.',
        combine: 'Combine one peninsula with its nearby town or castle. Keep another Skye coast, the mainland Highlands and other island groups for separate days.',
        verify: 'Check CalMac’s Mallaig–Armadale sailing and vehicle reservation or the Kyle of Lochalsh bridge approach; if travelling without a car, check Stagecoach 52 Armadale–Broadford or 57A Portree–Uig–Flodigarry in both directions for the exact date. Recheck road notices, mountain/coastal weather, attraction access and daylight. Route information checked 9 October 2026; timetables change seasonally.',
        sources: [
          ['https://www.visitscotland.com/places-to-go/islands/skye', 'VisitScotland — Isle of Skye destination guide'],
          ['https://www.calmac.co.uk/en-gb/destinations/skye', 'CalMac — Skye ferry and arrival options'],
          ['https://www.citylink.co.uk/our-routes-and-timetables/inverness-skye/', 'Citylink — Inverness, Kyle of Lochalsh and Portree coach corridor'],
          ['https://www.stagecoachbus.com/routes/north-scotland/52/armadale-broadford/xico052.i', 'Stagecoach — Armadale to Broadford bus corridor'],
          ['https://www.stagecoachbus.com/routes/north-scotland/57a/portree-square-flodigarry/xado057a.o', 'Stagecoach — Portree, Uig and Flodigarry bus corridor'],
          ['https://www.calmac.co.uk/route-information/mallaig-armadale/', 'CalMac — Mallaig to Armadale ferry timetable and check-in']
        ]
      }),
      g({
        slug: 'orkney-mainland',
        reviewDate: '9 October 2026',
        reviewDateISO: '2026-10-09',
        name: 'Orkney Mainland & Neolithic Sites',
        instrument: 'Ferry-to-monument reservation wheel',
        layout: 'stone-circle-island-grid',
        imageQuery: 'Ring of Brodgar Orkney Scotland landscape',
        imageAlt: 'The Ring of Brodgar in the Orkney landscape',
        purpose: 'Choose Kirkwall, the west Mainland Neolithic sites or a wartime-and-coast route, and match ferry arrival, timed admission and island transport rather than treating Orkney as a cruise-stop checklist.',
        summary: 'Establish the Kirkwall or Stromness gateway, complete one monument cluster with current booking and access, and keep the return crossing or island bus outside the final minute.',
        choices: [
          ['No car: Stromness/Kirkwall bus spine', 'Use X1 between Stromness, Kirkwall and St Margaret’s Hope as the transport backbone. The Council’s 2026 April–October summer timetable lists an hourly X1 historic-sites service from Stromness to Skara Brae via Brodgar Road, returning to Stromness, but gives no branch-specific exact end date; check the route-specific dated X1 timetable. Buses do not drop off at the Brodgar Road end, so plan for the final walk and check capacity and return. Service 8S also links Skara Brae with Quoyloo; the notice dates that service Monday–Saturday from 6 April through 30 October 2026. A booked tour or taxi remains an alternative if public-bus timing does not fit.'],
          ['Car: Scrabster–Stromness for the west', 'Bring a reserved vehicle on NorthLink’s Scrabster–Stromness ferry, then base in Stromness or Kirkwall for one island circuit at a time. This makes the west Mainland sites easier to sequence, but the vessel still has weather exposure and road time; do not assume a vehicle-space walk-up.'],
          ['No-car arrival from Aberdeen: Hatston and Kirkwall', 'NorthLink’s Aberdeen–Kirkwall calls use Hatston, outside Kirkwall. Choose a Kirkwall base and check the X10 Hatston link and X1 island spine against the actual sailing. This is a town-first arrival, not immediate access to Skara Brae or the southern barriers.']
        ],
        access: 'Mainland connections set the first day: NorthLink Scrabster–Stromness is paired with the Far North rail line to Thurso or the X99 Inverness coach, but Thurso station is a separate onward transfer and not every sailing meets public transport. NorthLink’s Aberdeen–Kirkwall calls use Hatston; check X10 to town. On Orkney, X1 is the Stromness–Kirkwall–St Margaret’s Hope spine. The Council’s 2026 April–October summer timetable lists an hourly X1 historic-sites service from Stromness to Skara Brae via Brodgar Road and back, but gives no branch-specific exact end date; check the route-specific dated X1 timetable, outward and return times, and capacity. Buses do not drop off at the Brodgar Road end for safety reasons. The same notice dates the 8S Skara Brae service Monday–Saturday from 6 April through 30 October 2026. A booked tour is another option. With a car, reserve vehicle space on the ferry and use Stromness for west Mainland or Kirkwall for a broader road base. Flights arrive at Kirkwall Airport and need their own onward transfer.',
        tradeoff: 'Without a car, Kirkwall or Stromness plus the X1 corridor is the dependable shape. The hourly X1 historic-sites service is listed in the Council’s 2026 April–October summer timetable, but the notice gives no branch-specific exact end date; check the route-specific dated X1 timetable. Buses do not drop at the Brodgar Road end, so allow for the final walk and verify capacity and return. The 8S is another Skara Brae option and is explicitly dated Monday–Saturday, 6 April–30 October 2026; a booked tour can simplify a tight connection. With a car, the monuments and Churchill Barriers can be grouped more flexibly, but they remain separate area-days. Scrabster is the direct Stromness gateway; Hatston is the Aberdeen route’s Kirkwall-area terminal. Do not book a lodging or tour assuming those ports are interchangeable.',
        stages: [
          ['Match the mainland port to the plan', 'For Scrabster–Stromness, check the train/coach transfer to Scrabster and X1 from Stromness; for Aberdeen–Hatston, check X10 to Kirkwall. Confirm that the sailing and onward bus actually connect before paying for the next leg.'],
          ['Choose the car or bus version of one district', 'No-car visitors use Kirkwall/Stromness and X1; in the 2026 summer timetable, check the hourly historic-sites X1 via Brodgar Road and its return, allowing for the walk because buses do not drop at the road end. The 8S or a booked tour can also work if the exact date’s times fit. Drivers select the west Mainland or southern barriers and confirm parking/access.'],
          ['Keep one island area as the day’s field', 'Visit the chosen Neolithic cluster, Kirkwall civic core or southern wartime route without trying to cross back and forth between them. Check monument access and any timed entry before leaving town.'],
          ['Return to the port town before the transport edge', 'Allow for the actual X1/X10 return, vehicle check-in and road/weather disruption. NorthLink warns that not every Stromness sailing connects with onward public transport; preserve an overnight buffer when the itinerary is tight.']
        ],
        fallback: 'If wind, rain, a road closure or seasonal bus pattern defeats the west-site plan, stay with Kirkwall’s cathedral/museums or Stromness town and harbour. The Council lists the hourly X1 historic-sites service in its 2026 April–October summer timetable, but gives no branch-specific exact end date; check the route-specific dated X1 timetable, including outward/return times and capacity. Buses do not drop off at the Brodgar Road end. The same notice explicitly dates 8S Monday–Saturday from 6 April through 30 October 2026; do not carry those 8S dates into other services. If a sailing is disrupted, keep the booked port as the recovery point and contact NorthLink before changing the crossing.',
        watch: [
          ['The bus network changes by season', 'Orkney Islands Council lists the hourly X1 historic-sites service in its 2026 April–October summer timetable, but gives no branch-specific exact end date. It runs from Stromness to Skara Brae via Brodgar Road and back; buses do not drop off at the Brodgar Road end. The notice explicitly dates 8S Monday–Saturday from 6 April through 30 October 2026. Check the exact date’s route-specific X1 or 8S timetable, capacity and return before relying on a no-car archaeology day.'],
          ['Monument access can be controlled', 'Conservation, weather and capacity may alter interiors or parking. Read Historic Environment Scotland notices.'],
          ['Wind affects more than ferries', 'Exposed sites and road travel can become unsuitable even when the crossing operates. Preserve the civic fallback.']
        ],
        duration: 'Allow at least three full Mainland days plus arrival/departure margins. A no-car visitor can consider a separate west-site day using the 2026 summer X1 historic-sites service, the published 8S or a booked tour, but should confirm exact-date outward and return times, X1 capacity and the final walk from Brodgar Road; keep Kirkwall/Stromness as a realistic shorter-day fallback. A driver can cover one west or south cluster per day.',
        combine: 'Combine Skara Brae with nearby west Mainland monuments, or Kirkwall with its museums. Keep the southern barriers and outer islands for separate days.',
        verify: 'Check NorthLink’s route-specific port, sailing and vehicle check-in; exact-date X1/X10 and 8S times, X1 historic-sites capacity, and the Skara Brae return; Scrabster rail/coach connection if using Stromness; Historic Environment Scotland access and reservations; and weather/road status. The 2026 summer X1 via Brodgar Road does not drop off at the road end. Source information checked 9 October 2026; do not infer a bus connection from a ferry time.',
        sources: [
          ['https://www.historicenvironment.scot/visit-a-place/places/skara-brae/', 'Historic Environment Scotland — Skara Brae visitor information'],
          ['https://www.northlinkferries.co.uk/book/routes-times-and-prices/timetables/', 'NorthLink Ferries — 2026 route timetables'],
          ['https://www.northlinkferries.co.uk/port/scrabster/', 'NorthLink Ferries — Scrabster bus and rail connections'],
          ['https://www.northlinkferries.co.uk/route/ferry-from-aberdeen-to-kirkwall/', 'NorthLink Ferries — Aberdeen to Hatston/Kirkwall calls'],
          ['https://www.northlinkferries.co.uk/additional-information/', 'NorthLink Ferries — onward transport connection warning'],
          ['https://www.orkney.gov.uk/travel-roads-and-parking/travelling-in-orkney/bus-services', 'Orkney Islands Council — Mainland bus routes and live timetables'],
          ['https://www.orkney.gov.uk/latest-news/orkney-s-public-buses-summer-timetables-changes-from-monday-6-april', 'Orkney Islands Council — dated 2026 summer timetable changes'],
          ['https://www.orkney.gov.uk/travel-roads-and-parking/travelling-in-orkney/bus-services/service-x1--westbound', 'Orkney Islands Council — Service X1 westbound timetable'],
          ['https://www.orkney.gov.uk/travel-roads-and-parking/travelling-in-orkney/bus-services/service-8s', 'Orkney Islands Council — Service 8S to Skara Brae']
        ]
      }),
      g({
        slug: 'lewis-harris',
        reviewDate: '9 October 2026',
        reviewDateISO: '2026-10-09',
        name: 'Lewis & Harris',
        instrument: 'Ferry-port and island-road atlas',
        layout: 'machair-mountain-spread',
        imageQuery: 'Callanish Stones Lewis Scotland sunset',
        imageAlt: 'Standing stones at Calanais on the Isle of Lewis',
        purpose: 'Choose a Lewis archaeology and culture day or a Harris coast day from the actual island base, respecting the long north–south road, ferry ports and limited buses.',
        summary: 'Enter through Stornoway or Tarbert, use one island half as the day’s operating field, complete a named site cluster, and return before sparse transport or ferry check-in controls the evening.',
        choices: [
          ['No car via Ullapool: Stornoway base', 'CalMac connects Ullapool with Stornoway. Stay in Stornoway for the town, museum/castle grounds and the local bus network; W10 is the spine to Tarbert via Balallan. West Lewis stone and blackhouse sites need a date-specific bus, taxi or booked tour—do not assume the ferry creates a same-day island circuit.'],
          ['Car via Ullapool: Lewis north/west day', 'Reserve vehicle space on Ullapool–Stornoway, base in Stornoway or a west-side lodging and keep one Lewis corridor for the day. A car makes Calanais and other dispersed sites easier to link, but ferry arrival and departure still need light plans and a mainland buffer.'],
          ['Harris via Skye: Tarbert base', 'Take the CalMac Uig–Tarbert ferry from Skye and use Tarbert as the gateway for a south-Harris coast day. Without a car, use the current W10/Tarbert and Harris local bus timetables or prebook a tour/taxi; the ferry terminal is not the beach trailhead. Drivers can reach more coast, but should still choose either a north or south Harris circuit.']
        ],
        access: 'There are two useful ferry approaches: CalMac Ullapool–Stornoway reaches Lewis from the mainland; CalMac Uig–Tarbert reaches Harris from Skye. No-car travellers should choose Stornoway for the urban base and W10 spine to Tarbert, or Tarbert for a Harris-first stay and a checked local bus/tour; most buses run Monday–Saturday and routes do not serve every beach/site. Drivers should book vehicle space on their exact sailing and choose a north/central Lewis or Harris road base to avoid repeated long cross-island transfers. Rail reaches neither port directly; plan the mainland road/coach leg to Ullapool or the coach connection to Uig separately.',
        tradeoff: 'No-car travel works best as a Stornoway town-and-spine itinerary or a Tarbert-based Harris trip with local services checked. A driver can combine dispersed Lewis heritage sites or a Harris coast circuit, but west Lewis and remote Harris are still separate full days. The Skye–Tarbert ferry is the direct Harris gateway; Ullapool–Stornoway is the direct mainland–Lewis gateway. Choosing one protects the day from cross-island mileage and missed sailing risk.',
        stages: [
          ['Select the ferry port and base together', 'For Ullapool–Stornoway, arrange onward transport and stay in Stornoway if using W10/local buses; for Uig–Tarbert, choose a Tarbert/Harris base and confirm the local route to the planned coast.'],
          ['Choose the car-free or car day', 'No-car: use Stornoway town or a published bus corridor plus a booked local tour. Car: reserve vehicle space and select one Lewis or Harris road district.'],
          ['Keep the stops inside that corridor', 'Connect Calanais and west Lewis, or Tarbert with one Harris coast/community area; do not add a far-north Lewis stop to a Harris beach day. Check weather and access before leaving the base.'],
          ['Return to the same port or overnight base', 'Check the exact CalMac check-in and live sailing status. A Uig–Tarbert cancellation does not make Ullapool reachable without a long mainland transfer; ask the operator before changing ports.']
        ],
        fallback: 'In wind or rain, switch a remote coast day to Stornoway’s town and indoor cultural options, or Tarbert/local services if already on Harris; choose a shorter sheltered route only if the bus/road return remains usable. Winter and Sunday service patterns can be thinner, so do not assume a missed bus can be replaced that day. If a ferry is cancelled, stay near the booked port and use CalMac’s rebooking/status advice before considering another port.',
        watch: [
          ['Lewis and Harris are long north to south', 'Shared island status does not make the coasts adjacent. Plan from the overnight base, not a highlights map.'],
          ['The bus spine is date-sensitive', 'W10 links Stornoway and Tarbert via Balallan, but local Harris roads, beaches and the west Lewis sites need their own timetable or tour. Council notes most island bus services run Monday to Saturday; check Sunday and seasonal exceptions.'],
          ['Ferry vehicle space is finite', 'A passenger booking and vehicle space are different. Confirm check-in, port and any standby condition.']
        ],
        duration: 'Allow four to six nights to understand Lewis and Harris without daily road marathons. Each island half deserves a full day.',
        combine: 'Combine Calanais with one west Lewis site cluster or Harris beaches with Tarbert and one community stop. Keep Orkney and Skye for separate itineraries.',
        verify: 'Check the exact CalMac route—Ullapool–Stornoway or Uig–Tarbert—vehicle space, check-in and service status; check Comhairle nan Eilean Siar W10 and relevant Lewis/Harris local bus timetables; then verify site access, weather and Sunday/seasonal service. Sources checked 9 October 2026; exact date schedules govern.',
        sources: [
          ['https://www.calmac.co.uk/en-gb/destinations/lewis/', 'CalMac — Ullapool–Stornoway Lewis gateway'],
          ['https://www.calmac.co.uk/en-gb/destinations/harris/', 'CalMac — Uig–Tarbert Harris gateway and coach approach'],
          ['https://www.calmac.co.uk/en-gb/route-information/uig-tarbert-harris/', 'CalMac — Uig–Tarbert ferry timetable and status'],
          ['https://www.calmac.co.uk/en-gb/route-information/stornoway-ullapool/', 'CalMac — Stornoway–Ullapool ferry timetable and status'],
          ['https://www.cne-siar.gov.uk/roads-and-travel/bus-services/lewis-bus-timetables', 'Comhairle nan Eilean Siar — Lewis routes including W10 Stornoway–Tarbert'],
          ['https://www.cne-siar.gov.uk/roads-and-travel/bus-services/bus-services-overview', 'Comhairle nan Eilean Siar — Lewis and Harris bus service days and connections'],
          ['https://www.visitouterhebrides.co.uk/planning-your-trip/getting-about/buses', 'Visit Outer Hebrides — public transport planning']
        ]
      })
    ]
  }),
  c({
    slug: 'cardiff-south-wales',
    reviewDate: '9 October 2026',
    reviewDateISO: '2026-10-09',
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
        reviewDate: '9 October 2026',
        reviewDateISO: '2026-10-09',
        name: 'Cardiff Castle, Civic Centre & Bay',
        instrument: 'Capital-to-bay line card',
        layout: 'castle-arcade-waterfront-fold',
        imageQuery: 'Cardiff Castle city Wales keep',
        imageAlt: 'Cardiff Castle and its Norman keep in the Welsh capital',
        purpose: 'Choose one city-centre anchor and decide whether Cardiff Bay merits the separate bus leg; use route 6 between Cardiff Bus Interchange and the Millennium Centre rather than treating the waterfront as next door to Cardiff Central.',
        summary: 'Pair the castle or National Museum with the civic centre, then take Cardiff Bus 6 from the Interchange via Lloyd George Avenue to the Millennium Centre only if the Bay fits the day.',
        choices: [
          ['Castle and civic centre', 'Choose the castle, arcades and nearby civic streets when architecture and city history matter most. Keep this walkable centre day; adding the full Bay circuit makes the visit rushed.'],
          ['Museum first, Bay optional', 'Give National Museum Cardiff the protected block in wet weather or when collections are the priority. Add the Bay only if time and current museum access allow; the castle can be an exterior stop.'],
          ['Bay by Cardiff Bus 6', 'From Cardiff Bus Interchange, take route 6 via Lloyd George Avenue to Wales Millennium Centre. Choose this for the Senedd and waterfront; it is a distinct district and costs a centre-to-Bay connection in each direction.']
        ],
        access: 'Cardiff Central is the main rail gateway for the castle and southern centre; Queen Street is closer to the civic side. For the Bay, reach Cardiff Bus Interchange and use Cardiff Bus 6 to the Wales Millennium Centre via Lloyd George Avenue. Confirm the current route and return before leaving the centre; do not assume the Bay bus boards at Cardiff Central rail platforms.',
        tradeoff: 'A full castle visit, National Museum galleries and the Bay each compete for a substantial block. A centre-led day trades the waterfront for a deeper indoor visit; a Bay-led day gives up a city-centre interior. The bus connection makes Bay practical, but does not make all three districts one compact walk.',
        stages: [
          ['Choose a centre anchor', 'From Cardiff Central, walk to the castle and arcades; use Queen Street for the civic side. Check the castle or museum’s own current access before committing.'],
          ['Decide whether to add the Bay', 'If the Senedd and waterfront are the priority, reach Cardiff Bus Interchange and take route 6 via Lloyd George Avenue to the Millennium Centre. This named bus leg is the centre-to-Bay hinge.'],
          ['Keep the Bay as one block', 'Stay around the Millennium Centre, Senedd and waterfront, then use route 6 back toward the city. Do not plan a return to the centre for a second major interior.'],
          ['Protect the onward trip', 'Check the actual bus and rail journey and allow extra margin on stadium or event days; finish at the station or Bay stop that matches the confirmed connection.']
        ],
        fallback: 'In rain or strong waterfront wind, stay with the castle, National Museum Cardiff and arcades as a centre-based day. If an event disrupts the Bay bus or station approaches, drop the Bay rather than building a tight chain of distant attractions.',
        watch: [
          ['Stadium events change the centre', 'Roads, stations and queues can shift sharply. Check the event calendar and leave wider rail margins.'],
          ['The Bay needs a named connection', 'Cardiff Bus 6 runs from the Interchange to the Millennium Centre via Lloyd George Avenue. Check the date-specific service and return; it is not a Cardiff Central platform transfer.'],
          ['Museum and castle products differ', 'Free museum entry and castle tickets have separate security and availability. Confirm the exact anchor.']
        ],
        duration: 'Set aside a full day if combining one city-centre anchor with Cardiff Bay and its route 6 return. A castle-and-civic or museum-centred day can stay in the central walking area; use current opening and entry information to set the block.',
        combine: 'Combine the castle with arcades or the museum with the bay. Keep Bannau Brycheiniog and Gower for separate full days.',
        verify: 'Check Cardiff Castle and National Museum access, Cardiff Bus 6 between Cardiff Bus Interchange and the Millennium Centre via Lloyd George Avenue, event impacts and the onward rail connection. Source information checked 9 October 2026; recheck the date-specific bus service.',
        sources: [
          ['https://www.cardiffbus.com/services/CB/6', 'Cardiff Bus — Service 6 Baycar, Interchange and Millennium Centre via Lloyd George Avenue'],
          ['https://tfw.wales/plan-a-journey', 'Transport for Wales — current rail journey planner'],
          ['https://www.cardiffcastle.com/visit/', 'Cardiff Castle — official visitor information'],
          ['https://museum.wales/cardiff/visit/', 'Amgueddfa Cymru — National Museum Cardiff visitor information']
        ]
      }),
      g({
        slug: 'bannau-brycheiniog',
        reviewDate: '9 October 2026',
        reviewDateISO: '2026-10-09',
        name: 'Bannau Brycheiniog Gateways',
        instrument: 'Gateway-and-ridge weather board',
        layout: 'upland-gateway-transect',
        imageQuery: 'Bannau Brycheiniog Brecon Beacons mountains Wales',
        imageAlt: 'Green ridges in Bannau Brycheiniog National Park in Wales',
        purpose: 'Choose a bus approach to Storey Arms or a car approach to Pont ar Daf, then match the Pen y Fan route to the group and forecast; the bus stop and National Trust car-park trailhead are different start plans.',
        summary: 'For the no-car route, take TfW from Cardiff Central to Merthyr Tydfil, transfer separately from the rail station to Merthyr Bus Station, then take T4 to Storey Arms; by car, use the Pont ar Daf trailhead.',
        choices: [
          ['No car: Merthyr or Brecon to Storey Arms', 'TfW trains from Cardiff Central reach Merthyr Tydfil in about an hour; the National Trust notes Merthyr station is 12 miles from its property. From Merthyr rail station, make a separate transfer to Merthyr Bus Station, then take T4 to Storey Arms. From Brecon, check the T4/T14 options. As checked 9 October 2026, the live T4 page says it cannot serve Free Street in Brecon until further notice and tells passengers to use Brecon Bus Interchange; recheck whether this diversion is still active. Verify the date-specific transfer, bus, walking route and return; this is a mountain-transit day, not a rail-only day.'],
          ['Car: Pont ar Daf and the official circular', 'The National Trust lists its 4 mi (6.4 km), 3 hr 30 min Pen y Fan and Corn Du circular as moderate, but describes the overall outing as a strenuous mountain walk. It starts at Pont ar Daf, about 8 mi south of Brecon, and has steep summit steps and narrow, uneven paths. Choose it only if that effort and terrain suit the group. If the car park is full, return later; do not park on the roadside.'],
          ['Brecon and lower ground', 'Choose Brecon town, the canal or a currently suitable lower route if the ridge forecast, group ability or transport return does not support a summit attempt. You give up the summit view for a more forgiving weather and timing plan.']
        ],
        access: 'There is no park station at the ridge. TfW says Cardiff Central–Merthyr Tydfil takes about an hour; from Merthyr rail station, transfer separately to Merthyr Bus Station and board T4 to Storey Arms. Merthyr station is 12 miles from the National Trust property, so do not assume the train and bus share a platform. T4/T14 also connect Merthyr or Brecon with Storey Arms. The National Trust’s Pen y Fan circular starts separately at Pont ar Daf, about 8 miles south of Brecon; do not plan that car-park loop as if the Storey Arms stop were the same start. Check the date-specific station transfer, bus, walk and return before leaving Cardiff.',
        tradeoff: 'The T4/T14 and rail option works for people prepared to plan a bus-linked mountain day and follow the route from Storey Arms. The Pont ar Daf circular gives drivers the published 4 mi / 3 hr 30 min Pen y Fan–Corn Du line; the National Trust rates it moderate but describes the outing as strenuous. Parking capacity and exposed summit conditions control the day. Anyone who needs an even, low-effort surface should choose the lower Brecon plan instead of this route with steep steps and uneven, narrow paths.',
        stages: [
          ['Choose the trailhead by transport', 'Without a car from Cardiff, take TfW to Merthyr Tydfil, transfer from the rail station to Merthyr Bus Station, then board T4 to Storey Arms; check date-specific connection and last return. From Brecon, check T4/T14. By car, navigate to Pont ar Daf for the National Trust circular; it is not the bus stop plan.'],
          ['Read conditions before choosing the summit', 'Check the Met Office mountain forecast and National Trust guidance before departure and again at the start. Cloud, wind, rain or a group not suited to rough steps is a reason to switch to lower ground.'],
          ['Use the route’s real effort', 'At Pont ar Daf, the National Trust lists the 4 mi / 6.4 km, 3 hr 30 min Pen y Fan–Corn Du walk as moderate, while its description calls the outing strenuous. Expect steep summit steps and uneven, narrow paths. Keep a turnaround and do not shortcut eroded ground.'],
          ['Leave recovery margin', 'Allow for the walk back to the chosen stop or car park and check the exact return service. If Pont ar Daf is full, return later rather than stopping on the roadside.']
        ],
        fallback: 'If cloud, wind, rain or saturated ground makes the ridge a poor choice, use Brecon town and a lower canal-side plan or another route confirmed suitable for current conditions. For the car approach, a full Pont ar Daf car park means return later, not roadside parking. Do not salvage a missed summit by racing to another exposed trailhead.',
        watch: [
          ['Merthyr is a rail gateway, not the trailhead', 'TfW’s Cardiff Central train is about an hour, but Merthyr station is 12 miles from the National Trust property. Transfer separately to Merthyr Bus Station for T4 to Storey Arms, and confirm the exact return.'],
          ['Storey Arms and Pont ar Daf are different starts', 'Use the named bus stop for a bus-led route; the NT Pen y Fan–Corn Du circular starts at Pont ar Daf. Do not assume the two plans share the same trailhead.'],
          ['Parking and path conditions are hard limits', 'If Pont ar Daf is full, return later and never roadside-park. The NT calls the outing strenuous; steep summit steps and uneven, narrow paths may not suit every walker. Use the low-level alternative when conditions or ability say so.']
        ],
        duration: 'Keep a full day for the Cardiff–Merthyr–T4/T14 mountain connection or the car-based Pont ar Daf walk; the National Trust estimates 3 hr 30 min for the 4 mi summit circular before travel and return buffers. A lower Brecon plan is a separate, shorter option whose timing depends on the chosen route and current bus.',
        combine: 'Combine Brecon with one lower route or a ridge with its single gateway. Keep Cardiff Bay and Gower for separate days.',
        verify: 'Check the Cardiff Central–Merthyr rail journey, separate transfer to Merthyr Bus Station, date-specific T4/T14 connections to Storey Arms and return, Met Office mountain weather, National Trust path/parking notices and daylight. As checked 9 October 2026, the T4 live page says it cannot serve Free Street in Brecon until further notice and directs passengers to Brecon Bus Interchange; recheck whether this remains active. The NT lists the Pont ar Daf circular as 4 mi / 6.4 km, 3 hr 30 min and moderate, but its description calls the overall outing strenuous; steep steps and uneven/narrow paths are part of the route. Source information checked 9 October 2026.',
        sources: [
          ['https://tfw.wales/trains-cardiff-central-to-merthyr-tydfil', 'Transport for Wales — Cardiff Central–Merthyr Tydfil rail journey'],
          ['https://traws.cymru/en/services/CELT/T4', 'TrawsCymru — T4 bus route to Storey Arms'],
          ['https://www.nationaltrust.org.uk/visit/wales/bannau-brycheiniog-brecon-beacons', 'National Trust — T4/T14 access from Merthyr or Brecon to Storey Arms; station and property gateways'],
          ['https://www.nationaltrust.org.uk/visit/wales/bannau-brycheiniog-brecon-beacons/pen-y-fan-and-corn-du-circular-walk', 'National Trust — Pen y Fan and Corn Du circular from Pont ar Daf, route effort and terrain'],
          ['https://www.nationaltrust.org.uk/visit/wales/bannau-brycheiniog-brecon-beacons/climbing-pen-y-fan-and-walking-in-the-brecon-beacons', 'National Trust — mountain weather, preparation and full-car-park advice'],
          ['https://www.nationaltrust.org.uk/visit/wales/sustainable-travel-in-wales', 'National Trust — T4 bus access to Storey Arms'],
          ['https://weather.metoffice.gov.uk/specialist-forecasts/mountain/brecon-beacons', 'Met Office — Brecon Beacons mountain forecast'],
          ['https://www.traveline.cymru/', 'Traveline Cymru — exact-date bus journey and timetable planner']
        ]
      }),
      g({
        slug: 'swansea-gower',
        reviewDate: '9 October 2026',
        reviewDateISO: '2026-10-09',
        name: 'Swansea & the Gower Peninsula',
        instrument: 'Peninsula bus-and-tide selector',
        layout: 'bay-to-headland-chart',
        imageQuery: 'Rhossili Bay Gower Wales cliffs',
        imageAlt: 'Rhossili Bay and headlands on the Gower Peninsula in Wales',
        purpose: 'Choose route 2 to Oystermouth/Mumbles for the nearer coast or route 118 from Swansea Bus Station Stand T to Rhossili for the long west-Gower day; protect the exact return and the Worm’s Head tide window.',
        summary: 'Use the bus station as the transfer point: route 2 leaves Bay W toward Oystermouth/Mumbles, while 118 leaves Stand T via Sketty Cross, Killay and Parkmill to Rhossili. Choose one branch and verify its date-specific return.',
        choices: [
          ['No car: Rhossili on route 118', 'Board at Swansea Bus Station Stand T; the 118 runs via Sketty Cross, Killay and Parkmill to Rhossili. The current PDF has separate weekday schoolday/school-holiday and Saturday tables. Make this the day’s main branch and confirm the return before walking; do not plan a second Gower area around it.'],
          ['No car: Mumbles on route 2', 'Route 2 leaves Swansea Bus Station Bay W toward Oystermouth and Mumbles, a closer coast option for a shorter outing. Its Traveline PDF is marked effective 5 January 2025 until further notice; check that the date-specific timetable remains valid and plan the return from the correct stop.'],
          ['Swansea fallback or car-based west Gower', 'Use Swansea’s museum and waterfront if weather or bus timing weakens the coast plan. A car can make multiple west-Gower stops more feasible, but still choose one coast walk and check parking, tide and cliff conditions rather than combining every beach.']
        ],
        access: 'From Swansea rail station, continue to Swansea Bus Station before boarding. Route 118 to Rhossili boards at Stand T and runs through Sketty Cross, Killay and Parkmill; its 2 January 2026 PDF is valid until further notice and separates weekday schooldays from school holidays plus Saturday. Route 2 toward Mumbles/Oystermouth boards at Bay W; its published PDF says effective 5 January 2025 until further notice. Check the exact date, correct stand/bay, outward and return; timetables can change. Rhossili adds a tide decision if considering Worm’s Head.',
        tradeoff: 'Rhossili is a committed west-Gower day because route 118 is a date-patterned branch with limited chances to recover a missed return; choose the 1 mi (1.6 km) level-and-even lookout path if you want the Worm’s Head view without crossing the causeway. Mumbles/Oystermouth via route 2 is a nearer coast visit that can leave time for Swansea, but not for the west-Gower circuit. Choose by branch and return, not by trying to link both coasts.',
        stages: [
          ['Find the correct departure', 'From Swansea Bus Station, use Stand T for 118 to Rhossili or Bay W for route 2 to Oystermouth/Mumbles. Match the departure to the weekday schoolday, school-holiday or Saturday table where applicable.'],
          ['Choose the coast effort', 'At Rhossili, the National Trust lookout walk is 1 mi / 1.6 km on a level, even access track; it includes gentle gradients. Worm’s Head is a separate tidal crossing, not required for the view.'],
          ['Use the official tide window', 'Only consider the Worm’s Head causeway when the National Trust tide guidance and NCI lookout advice support it: access is possible for about 2½ hours either side of low tide. If timing or conditions do not fit, stay on the lookout path.'],
          ['Return to Swansea with margin', 'Check the same route’s exact-date return before setting out and get back to the stop early. Keep a missed or changed service from becoming a threatened rail connection.']
        ],
        fallback: 'If west-Gower weather or the 118 return does not support Rhossili, keep the day in Swansea or switch to Mumbles only if route 2’s own date-specific outward and return fit. If the Worm’s Head tide window is unsuitable, use the National Trust’s level, even 1 mi lookout path and do not cross the causeway.',
        watch: [
          ['118 and route 2 leave from different stands', 'Rhossili 118 is Stand T; Oystermouth/Mumbles route 2 is Bay W. Verify the stop and current date-specific timetable before travel.'],
          ['118 has separate day patterns', 'The 2 January 2026 PDF gives weekday schoolday/school-holiday and Saturday tables, not Sunday. The National Trust lists NAT routes 118/119 for Monday–Saturday and says Sunday service is summer-only, naming First Cymru 114 for Sundays. Adventure Travel’s separate 118 Sunday/Bank Holiday notice ran only through 31 August 2026; that date has passed as of this 9 October 2026 check. Confirm whether 114 currently operates and the exact return before committing.'],
          ['Worm’s Head is tide-gated', 'The National Trust gives an approximate window of 2½ hours either side of low tide and says the NCI lookout offers tide-table advice. Prefer the lookout path if the crossing window is not right.']
        ],
        duration: 'Treat Swansea–Rhossili as a full day built around one 118 outward/return pair; use the 1 mi lookout walk if a summit-free coastal option is the priority. Route 2 to Oystermouth/Mumbles is the closer branch and can share a day with Swansea only when the date-specific service and return allow it.',
        combine: 'Combine Swansea with Mumbles or Rhossili with one headland route. Keep Cardiff and Bannau Brycheiniog for separate days.',
        verify: 'Check Traveline’s date-specific route 118 timetable (valid from 2 January 2026 until further notice, with schoolday/holiday and Saturday tables), route 2 to Oystermouth/Mumbles (published as effective 5 January 2025 until further notice), any Sunday route 114 service and its return, National Trust Worm’s Head tide guidance/NCI lookout advice and coast weather. The separate Adventure Travel 118 Sunday/Bank Holiday notice ended 31 August 2026. Source information checked 9 October 2026.',
        sources: [
          ['https://www.traveline.cymru/uploads/OmniPDF/OWPDF__Adventure_Travel-118_-_Swansea_-_Rhossili-9/118NAA9.pdf', 'Traveline Cymru / Adventure Travel — Service 118 Swansea Stand T–Rhossili timetable, effective 2 January 2026 until further notice'],
          ['https://www.adventuretravel.cymru/bus-services/swansea/118-sundays-bank-holiday', 'Adventure Travel — Service 118 Sunday and Bank Holiday notice for summer 2026'],
          ['https://www.adventuretravel.cymru/bus-services', 'Adventure Travel — service index listing 118 Sundays and Bank Holidays through 31 August 2026'],
          ['https://www.traveline.cymru/uploads/OmniPDF/OWPDF__First_Cymru-2_-_Swansea_-_Newton-3/002FCA3.pdf', 'Traveline Cymru / First Cymru — Service 2 Swansea Bay W–Newton via Mumbles, effective 5 January 2025 until further notice'],
          ['https://www.nationaltrust.org.uk/visit/wales/rhosili-and-south-gower-coast/rhosili-serpents-seascapes-and-shipwrecks-walk', 'National Trust — Rhossili lookout path, Worm’s Head tide window and NCI advice'],
          ['https://museum.wales/swansea/visit/', 'Amgueddfa Cymru — National Waterfront Museum visitor information'],
          ['https://www.visitswanseabay.com/', 'Visit Swansea Bay — official destination guide'],
          ['https://www.gower-nl.org.uk/', 'Gower National Landscape — official visitor information']
        ]
      })
    ]
  }),
  c({
    slug: 'pembrokeshire-west-wales',
    name: 'Pembrokeshire & West Wales',
    reviewDate: '12 October 2026',
    reviewDateISO: '2026-10-12',
    nation: 'Wales',
    band: 'wales',
    family: 'coast-path-and-branch-log',
    label: 'Coast path and branch log',
    tagline: 'Use one harbour, saint’s city or rail coast at a time; the path does not shorten the roads.',
    searchSummary: 'Compare a four-night Tenby base, a six-night Tenby plus St Davids split, or about eight nights adding Aberystwyth. Tenby and Aberystwyth have rail; St Davids needs a road connection. Check winter coastal-bus days and Caldey season before booking.',
    searchKeywords: ['Tenby base nights', 'St Davids no railway', 'Aberystwyth rail base', '387 388 winter Coastal Cruiser', '400 403 404 summer buses', 'Caldey Island season'],
    hubIntro: 'Tenby, St Davids and Aberystwyth are three different bases linked by long road or rail legs, not one compact coastal loop. Tenby and Aberystwyth have rail stations; St Davids does not. On 12 October 2026, the county listed the summer 400, 403 and 404 coastal buses as ended for the season; only the reduced 387/388 winter Coastal Cruiser was listed, Thursdays and Saturdays between Pembroke, Angle, Bosherston, Stackpole and Freshwater East. That winter service does not reach St Davids or Tenby. Match every coast walk to its actual return.',
    stay: 'Four nights in Tenby keeps the south-coast trip on one walkable base but leaves St Davids and Ceredigion for another visit. Six nights split between Tenby and St Davids (for example, three each) gives the west coast its own overnight and avoids a long same-day return; verify the bus or road transfer before booking St Davids. About eight nights can add Aberystwyth as a third base, but treat the northbound move as a transfer day and check the Transport for Wales route rather than trying to combine it with a coastal walk. Book summer rooms and any timed heritage, boat or rail tickets before fixing the route.',
    transfer: 'Tenby and Aberystwyth sit on different TfW rail branches; St Davids requires a bus or road connection. The coastal bus calendar matters: as checked 12 October 2026, 400 Puffin Shuttle, 403 Celtic Coaster and 404 Strumble Shuttle had passed their 27 September summer end; winter 387/388 runs only Thursday and Saturday on the Pembroke–Angle–Bosherston–Stackpole–Freshwater East corridor. Check the current timetable and exact stop pair for each walking stage. Do not use a coast-path segment to bridge a missing bus or assume a boat lands where it departs.',
    season: 'Pembrokeshire County Council’s dated 12 October 2026 notice said winter Coastal Cruiser 387/388 service ran from 1 October 2026 to 28 May 2027 on Thursdays and Saturdays; 400/403/404 summer routes ended 27 September. The current Caldey visitor page says the island is closed for the season and reopens Easter 2027. Cliff and heritage-rail operation is separate: check the operator for the visit date. In winter, short light, exposed path conditions and reduced buses make a town day the sensible fallback; in summer, reserve lodging and timed activities early and still confirm tides and sea state.',
    fallback: 'Use Tenby, St Davids or Aberystwyth as a complete town day. If a boat or coast segment fails, do not replace it with another distant exposed headland.',
    sources: [
      ['https://www.visitpembrokeshire.com/', 'Visit Pembrokeshire — official destination guide'],
      ['https://www.pembrokeshirecoast.wales/', 'Pembrokeshire Coast National Park — official visitor information'],
      ['https://www.pembrokeshire.gov.uk/bus-routes-and-timetables/bus-routes-list-coastal-buses', 'Pembrokeshire County Council — dated summer and winter coastal bus service list'],
      ['https://caldeyislandwales.com/visiting-caldey', 'Caldey Island — current season status, tickets and sea-dependent sailings'],
      ['https://tfw.wales/', 'Transport for Wales — rail and bus planning']
    ],
    guides: [
      g({
        slug: 'st-davids-coast',
        reviewDate: '12 October 2026',
        reviewDateISO: '2026-10-12',
        name: 'St Davids & the Pembrokeshire Coast',
        instrument: 'Cathedral-to-cliff weather card',
        layout: 'saints-city-coast-fold',
        imageQuery: 'St Davids Cathedral Pembrokeshire Wales',
        imageAlt: 'St Davids Cathedral set in its valley in Pembrokeshire',
        purpose: 'Choose St Davids cathedral city or one nearby coast segment as the main day, naming the rural bus, parking or boat connection before the national-park edge becomes an open-ended loop.',
        summary: 'Use St Davids city centre, Oriel y Parc and the Cathedral Close as one walking zone; choose St Non’s/Caerfai or a harbour only after confirming the separate road or bus leg and return. The summer coastal shuttles are out of season in this 12 October snapshot.',
        searchSummary: 'Walk St Davids High Street, Oriel y Parc and the Cathedral Close as one city zone; choose St Non’s/Caerfai only with a separately confirmed road/bus return. Summer 400/403/404 shuttles are out of season in this 12 October snapshot.',
        searchKeywords: ['St Davids Cathedral Close walk', 'Oriel y Parc', 'St Davids no railway', 'St Non’s bus transfer', '400 Puffin Shuttle season', 'Pembrokeshire winter bus'],
        choices: [
          ['Cathedral and city depth', 'Use the cathedral, Bishop’s Palace and compact city as the complete day. It is the strongest poor-weather and public-transport choice.'],
          ['St Davids Head coast route', 'Use one signed section from a named trailhead with a turn-back. It adds geology and sea views but requires the full weather window.'],
          ['Boat or Ramsey Sound', 'Book one exact operator and sailing from the named harbour. It offers marine perspective but can cancel and adds a last-mile transfer.']
        ],
        access: 'St Davids has no railway station. The Cathedral Close, Bishop’s Palace approach, High Street and Oriel y Parc visitor centre make a compact city zone; St Non’s Chapel/Caerfai and boat harbours are separate outward legs, not extensions of that stroll. County information checked 12 October 2026 listed the 400 St Davids–Marloes route only as a summer service ending 27 September, and the winter 387/388 runs on the far-south Pembroke–Angle–Stackpole corridor. Confirm a current local bus, booked transfer or car for the exact coast start and return; do not walk the A487 verge to fill a gap.',
        tradeoff: 'A deep cathedral visit, substantial coast walk and boat trip do not fit one resilient day. Choosing the coast sacrifices palace and city depth; choosing the city gives up marine reach but protects the return.',
        stages: [
          ['Arrive in Britain’s small city', 'Locate the final bus or car pickup before descending to the cathedral valley. Keep the city fallback visible.'],
          ['Complete the sacred precinct', 'Visit the cathedral or Bishop’s Palace with current worship and admission conditions, then reassess weather.'],
          ['Commit to one coast branch', 'Take the confirmed shuttle, road or signed path to the selected headland or harbour. Use a time-based turnaround.'],
          ['Return before the rural cutoff', 'Regain St Davids or the pickup point with margin for wind, path surface and boat delay.']
        ],
        fallback: 'If the sea or cliffs are unsafe, keep to the Cathedral Close, Bishop’s Palace exterior or any currently open indoor stop in the city. If the date-specific bus cannot reach the trailhead and return, make St Davids itself the whole day; the winter 387/388 does not serve this coast. Do not turn an access gap into a long roadside walk.',
        watch: [
          ['St Davids is not rail-served', 'Every rail itinerary contains a bus or road leg. Protect the final service and station connection.'],
          ['Cliff paths are exposed', 'Wind, rain and erosion can change a short route. Follow national-park advice and stay back from edges.'],
          ['Boat departure points differ', 'Operators may use distinct harbours and check-in places. Confirm the exact product and pickup.']
        ],
        duration: 'Allow a full day from a Pembrokeshire base. The city and Cathedral Close can occupy four to six hours; a coast or boat branch needs its own transport buffer and most remaining daylight. From Tenby or Haverfordwest, avoid planning a long coast walk on the same day as the inbound transfer.',
        combine: 'Combine the cathedral with the palace or one nearby coast segment. Keep Tenby and Ceredigion for separate days.',
        verify: 'Check Cathedral service and visitor access, Cadw Bishop’s Palace opening, National Park path notices, the exact local bus/transfer and return, harbour check-in and sea state. Re-read county seasonal-route dates; the 2026 400/403/404 summer timetable has ended.',
        sources: [
          ['https://stdavidscathedral.org.uk/visit-us', 'St Davids Cathedral — official visitor information'],
          ['https://www.pembrokeshirecoast.wales/coast-path/', 'Pembrokeshire Coast National Park — official walking guidance']
        ]
      }),
      g({
        slug: 'tenby-caldey-coast',
        reviewDate: '12 October 2026',
        reviewDateISO: '2026-10-12',
        name: 'Tenby, Caldey & the South Coast',
        instrument: 'Harbour-tide-island manifest',
        layout: 'walled-harbour-tide-sheet',
        imageQuery: 'Tenby harbour Wales colourful houses',
        imageAlt: 'Tenby harbour and colourful waterfront houses in Pembrokeshire',
        purpose: 'Choose Tenby’s walled harbour town, a Caldey Island sailing or one coast-path section, matching tides, boat operation and the branch train instead of stacking all three.',
        summary: 'Walk from Tenby station through the walled town to Castle Hill and the harbour, then choose a safe town/beach loop. Caldey is closed for the 2026 season and reopens Easter 2027; future opening dates remain unconfirmed.',
        searchSummary: 'Walk Tenby station through High Street and Castle Hill to the harbour, then choose a safe town/beach loop. Caldey is closed for the 2026 season and reopens Easter 2027; future sailing dates remain unconfirmed.',
        searchKeywords: ['Tenby station to harbour walk', 'Castle Hill Tenby', 'Caldey Island closed 2026', 'Caldey Easter 2027', 'Tenby tide-safe walk'],
        choices: [
          ['Tenby town and beaches', 'Use the walls, harbour, museum and one safe beach edge as the complete day. This is the most flexible and rail-simple choice.'],
          ['Caldey Island sailing', 'Make the exact boat and island visit the central event. It gives a distinct monastic island day but depends on sea and seasonal operation.'],
          ['Coast-path section', 'Take a signed route toward Saundersfoot or another named endpoint with a transport return. It adds landscape but removes the island from the day.']
        ],
        access: 'From Tenby station, follow the signed streets into the walled centre, then descend through Castle Hill to the harbour; return uphill through the town rather than depending on the beach at every tide. The Caldey ticket office is in Castle Square and the licensed boats depart Tenby Harbour, but the operator says sailings depend on sea conditions. Its live page checked 12 October 2026 says the island is closed for the season and reopens Easter 2027; the 2026 window ended 30 September. That is not a confirmed 2027 timetable. Saundersfoot or other coast-path endpoints need their own dated bus/rail return.',
        tradeoff: 'Caldey, a long coast walk and relaxed Tenby are separate priorities. Choosing the island sacrifices path distance; choosing the coast gives up the sailing but creates a land-based return.',
        stages: [
          ['Walk station to walled town', 'Use the direct route and locate the final train before descending to the harbour. Keep luggage outside the boat plan.'],
          ['Read harbour and tide', 'Confirm whether and where the selected boat departs, or assess the coast route from the public shore.'],
          ['Commit to island or path', 'Board the exact sailing or follow one signed section with an exit and time-based turnaround. Do not switch after the main departure window.'],
          ['Return through Tenby', 'Regain the harbour town and station with margin for tide, queues and uphill streets.']
        ],
        fallback: 'For an autumn/winter visit, plan Tenby as the attraction rather than waiting for a Caldey sailing: use the station–High Street–Castle Hill–harbour sequence, the town museum if open, and a tide-safe viewpoint. The island is currently closed until Easter 2027; check for the new season’s dates and the day-of sailing notice before making it the main event. On rough sea or a beach closure, stay on streets and marked upper paths.',
        watch: [
          ['Boat operation follows sea and tide', 'Published seasonal service can still change. Check the operator at the harbour and keep the town day complete.'],
          ['Beaches change at high water', 'Do not use sand as a guaranteed route between town areas. Streets and signed paths remain the dependable connection.'],
          ['The branch line has gaps', 'A late boat can threaten the train. Leave one practical rail option in reserve.']
        ],
        duration: 'Allow five to six hours for Tenby’s walled core, harbour and one tide-safe shore section from a nearby base. A Caldey sailing, when the operator publishes a season, uses a separate substantial block plus check-in and sea-delay margin; do not combine it with a long walk to Saundersfoot.',
        combine: 'Combine Tenby with Caldey or one signed coast segment, not both at full length. Keep St Davids and Aberystwyth for separate days.',
        verify: 'Check whether Caldey is open for the specific year, the official day-of sailing notice, harbour check-in, tide and sea weather, Tenby beach notices, path alerts and the final TfW train. The published 2026 dates have ended; 2027 sailings are not established by this review.',
        sources: [
          ['https://caldeyislandwales.com/', 'Caldey Island — official visitor and boat information'],
          ['https://www.visitpembrokeshire.com/explore-pembrokeshire/towns-and-villages/tenby-and-penally', 'Visit Pembrokeshire — official Tenby guide']
        ]
      }),
      g({
        slug: 'aberystwyth-ceredigion',
        reviewDate: '12 October 2026',
        reviewDateISO: '2026-10-12',
        name: 'Aberystwyth & the Ceredigion Coast',
        instrument: 'Rail-end coast-and-hill board',
        layout: 'promenade-railway-horizon',
        imageQuery: 'Aberystwyth promenade Wales coast',
        imageAlt: 'Aberystwyth promenade and seafront on the Ceredigion coast',
        purpose: 'Use Aberystwyth as the rail-end city and choose the National Library, cliff railway or one Ceredigion coast branch, respecting the long rail journey and sparse onward services.',
        summary: 'Use Aberystwyth station–town centre–castle seafront as a compact walk, then choose Constitution Hill’s cliff railway or the separately booked Vale of Rheidol train. The operator listed its daily service only through 1 November 2026.',
        searchSummary: 'Walk from Aberystwyth station through the town to the castle seafront; choose Constitution Hill’s cliff railway or the separately booked Vale of Rheidol steam train. Daily Vale services were listed only through 1 November 2026.',
        searchKeywords: ['Aberystwyth station promenade walk', 'Constitution Hill cliff railway', 'Vale of Rheidol 2026 season', 'Devil’s Bridge steam train', 'Aberystwyth return train'],
        choices: [
          ['Town, castle and promenade', 'Keep the day around the seafront, university town and museum or library. This is the strongest flexible rail day.'],
          ['Cliff and viewpoint', 'Use Constitution Hill and the cliff railway when operating, with a bounded promenade route. It adds height but depends on wind and service.'],
          ['Vale of Rheidol branch', 'Make the heritage railway the booked event and treat Aberystwyth as the arrival and evening frame. It gives valley depth but owns most of the day.']
        ],
        access: 'Aberystwyth station opens onto the town-centre streets; head west toward the castle remains and promenade, or walk north along the seafront to Constitution Hill and the cliff-railway base. The National Library is uphill from town and is a distinct return climb. The Vale of Rheidol platform is beside the standard-gauge station area but uses its own booking and timetable. Pick the hill or the valley before setting out; the long Cambrian mainline return is not a safe tight connection after a heritage service.',
        tradeoff: 'A complete heritage-rail journey, library visit and long seafront day do not fit comfortably. Choosing the valley sacrifices town depth; staying in Aberystwyth gives up the inland branch but protects flexibility.',
        stages: [
          ['Arrive at the rail end', 'Leave the station toward the town or heritage platform, saving the final mainline train and allowing for the long onward journey.'],
          ['Read town and sea', 'Use the castle, promenade and one collection or café as the first complete block, observing wind and wave conditions.'],
          ['Commit to hill or valley', 'Take the operating cliff railway, climb by the verified route or board the booked Vale of Rheidol service. Do not attempt both major branches.'],
          ['Return before the long rail leg', 'Regain the station with margin for heritage delay, weather and platform changes. Avoid the final useful connection when possible.']
        ],
        fallback: 'If wind closes the cliff railway, stay on the lower promenade or use Ceredigion Museum and the National Library if each is open; avoid the exposed sea wall during overtopping conditions. If the heritage train does not run, the town-and-seafront circuit remains complete. The cliff-railway operator listed April–October daily service 10:00–17:00 in its current schedule and a limited November–mid-March timetable; call or check its noticeboard before an out-of-season visit.',
        watch: [
          ['The rail journey is part of the day', 'Cross-Wales travel can be long and connections matter. Do not count only the final branch segment.'],
          ['Cliff railway operation is conditional', 'Wind, maintenance and season affect service. The town route should remain complete without it.'],
          ['Promenade waves can overtop', 'Storm conditions make the sea edge unsafe. Follow local closures and use inland streets.']
        ],
        duration: 'Allow a full town day from a closer base, or stay overnight after a long cross-Wales rail arrival. At the 12 October 2026 check, the Vale of Rheidol homepage advertised daily steam trains only until 1 November; its 24-mile Devil’s Bridge round trip takes 2 hours 45 minutes, so treat it as the day’s main branch and book the exact date in advance.',
        combine: 'Combine Aberystwyth with one hill or collection, or make the heritage railway the sole branch. Keep Pembrokeshire and North Wales for separate bases.',
        verify: 'Check TfW disruptions and the final train, the Vale of Rheidol date-specific inventory, the Cliff Railway live notice and out-of-season timetable, National Library and museum calendars, sea conditions and daylight before departure.',
        sources: [
          ['https://www.library.wales/visit', 'National Library of Wales — official visitor information'],
          ['https://vor.wales/', 'Vale of Rheidol Railway — date-specific season, booking and 24-mile journey'],
          ['https://aberystwythcliffrailway.co.uk/timetable-and-prices', 'Aberystwyth Cliff Railway — seasonal hours and live noticeboard']
        ]
      })
    ]
  }),
  c({
    slug: 'north-wales-eryri',
    name: 'North Wales & Eryri',
    reviewDate: '9 October 2026',
    reviewDateISO: '2026-10-09',
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
        reviewDate: '9 October 2026',
        reviewDateISO: '2026-10-09',
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
        reviewDate: '9 October 2026',
        reviewDateISO: '2026-10-09',
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
        reviewDate: '9 October 2026',
        reviewDateISO: '2026-10-09',
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
    searchKeywords: ['Belfast–Coleraine rail itinerary', 'Causeway Coast bus connection', 'Derry overnight base'],
    name: 'Belfast, Causeway Coast & Derry',
    nation: 'Northern Ireland',
    band: 'northern-ireland',
    family: 'lough-coast-history-ledger',
    label: 'Lough, coast and history ledger',
    tagline: 'Give Belfast, the Causeway Coast and Derry separate days with their own evidence and return.',
    reviewDate: '12 October 2026',
    reviewDateISO: '2026-10-12',
    hubIntro: 'Belfast’s civic quarters and Maritime Mile are urban transit days; the Causeway Coast is a rail-and-bus or road corridor; Derry is a separate walled city whose recent history requires careful, site-led interpretation. Belfast, the coast and Derry need separate base, access and return decisions rather than one highlights loop.',
    stay: 'Four nights is a two-anchor trip: use two nights in Belfast plus two in either Portrush/Bushmills or Derry, and leave the other region for next time. Five nights can support three Belfast nights and two in Derry, with a Causeway day trip only if the dated train-and-bus return works. Give all three areas a real day with seven nights: three in Belfast, two on the north coast and two in Derry. A north-coast night saves backtracking but does not create a frequent evening bus.',
    transfer: 'NI Railways reaches Coleraine from Belfast; the Giant’s Causeway connection is a separate Ulsterbus 172 leg, not a station walk. Belfast-to-Derry also has Translink rail and coach choices, but Grand Central, Lanyon Place and Europa Buscentre are different departure points. Recheck the exact service, seasonal bus, final stop and return before fixing a timed visit.',
    season: 'Coast access is a daylight-and-weather decision, not a summer-only guarantee. On 12 October 2026, the National Trust calendar showed the Giant’s Causeway Visitor Centre open 09:00–17:00 and the coastline dawn to dusk; its Causeway Rambler and other buses have their own seasonal dates. The Museum of Free Derry lists shorter weekday hours from 1 November 2026 and last entry one hour before closing. Recheck both calendars, wind and Translink notices for the actual date; book Titanic Belfast or a coast-base room once the route is stable.',
    fallback: 'If wind, wet basalt or a service change removes the coast, keep the day in Belfast: use the city-centre walk, a confirmed City Hall visit or a prebooked Titanic Belfast slot. If Derry’s wall top is slippery or the museum hours do not fit, use the street-level river and civic route. Do not replace a closed cliff section with another exposed edge.',
    itineraryKicker: 'FOUR ROUTE BLOCKS · CHOOSE TWO, THREE OR ALL FOUR',
    itineraryTitle: 'Keep the city, coast and western-city days in their own corridors.',
    itineraryIntro: 'This is a planning sequence, not a timetable. Four nights means choosing two anchors; a seven-night version can give Belfast, the north coast and Derry separate bases without compressing the last connection.',
    itinerary: [
      ['Belfast civic core', 'Start at City Hall, read the Donegall Square and Linen Quarter grid, then continue on foot to the Cathedral Quarter and St Anne’s Cathedral. Keep this central route together; choose one museum or guided-history stop rather than adding residential mural streets without context.'],
      ['Choose the second Belfast district', 'Use a separate day for the Queen’s Quarter, Botanic Gardens and Ulster Museum, or cross the Lagan to Titanic Belfast, the Slipways and SS Nomadic. Titanic Belfast is a timed anchor with its own visitor map; do not treat it as the next block from City Hall.'],
      ['Make the Causeway a complete coast day', 'For the rail-first route, take NI Railways from Belfast to Coleraine and confirm Ulsterbus 172 to the Visitor Centre. Choose the official access route, then add at most one connected coast stop. An overnight in Portrush or Bushmills suits an early start; a Belfast day return is only for a timetable that leaves a secure margin.'],
      ['Give Derry its own arrival and return', 'Take a current Translink rail or coach service from Belfast, then build one walk from the walled centre through a chosen wall section to the Bogside or across the Peace Bridge. Stay one or two nights if the Museum of Free Derry is a priority; do not make its last entry depend on a same-day cross-region transfer.']
    ],
    faq: [
      ['How many nights do I need for Belfast, the Causeway Coast and Derry?', 'Four nights is better spent on two anchors than three rushed day trips. Five nights can fit Belfast and Derry with a Causeway excursion if the dated return is practical. Seven nights—three Belfast, two north coast and two Derry—gives each system a dedicated day and protects the transfers.'],
      ['Can I use Belfast as the only base?', 'Yes for a city-led trip and a single Causeway day, if the NI Railways-to-Coleraine and Ulsterbus 172 connection fits both ways. Derry is a separate full-day rail or coach corridor; an overnight is the better choice when its walls and museum are central to the trip.'],
      ['What should I book before I travel?', 'Choose the route and base first, then check Titanic Belfast’s timed visitor information, National Trust access and any north-coast lodging. Recheck seasonal bus service, Derry museum hours, weather and event notices before departure.']
    ],
    sources: [
      ['https://discovernorthernireland.com/', 'Discover Northern Ireland — official destination guide'],
      ['https://www.translink.co.uk/', 'Translink — official rail and bus journey planning'],
      ['https://www.translink.co.uk/service-incidents', 'Translink — current service incidents'],
      ['https://www.nationaltrust.org.uk/visit/northern-ireland/giants-causeway', 'National Trust — Giant’s Causeway access, visitor experience and transport'],
      ['https://www.visitderry.com/visitor-information/transport-and-travel/getting-to-derry', 'Visit Derry — rail and bus connections'],
      ['https://www.metoffice.gov.uk/weather/forecast/gcey94cuf', 'Met Office — Belfast and Northern Ireland forecasts']
    ],
    guides: [
      g({
        slug: 'belfast-civic-maritime',
        searchKeywords: ['Belfast civic walking route', 'Titanic Quarter timed visit', 'Belfast station choices'],
        name: 'Belfast Civic Quarter & Maritime Mile',
        instrument: 'Civic-grid-to-shipyard route book',
        layout: 'linen-grid-maritime-axis',
        imageQuery: 'Belfast City Hall Northern Ireland exterior',
        imageAlt: 'Belfast City Hall in the city centre',
        reviewDate: '12 October 2026',
        reviewDateISO: '2026-10-12',
        purpose: 'Choose one walkable civic or museum district, then decide whether a separate Titanic Quarter visit merits the Lagan crossing and timed entry. Belfast’s map is compact only when the river and station approaches stay in the plan.',
        summary: 'Start at City Hall, follow the central grid into the Cathedral Quarter, and reserve a different block for the Queen’s Quarter or Titanic Quarter.',
        choices: [
          ['City Hall and the central grid', 'Begin at Donegall Square, check whether the City Hall exhibition or a guided visit is available, then walk the Linen Quarter and Cathedral Quarter. This suits a first half-day without a cross-city transfer.'],
          ['Queen’s Quarter and collections', 'Give Botanic Gardens and the Ulster Museum a southern-city block. It is a different direction from the Maritime Mile, so keep it as the second day or replace the shipyard visit.'],
          ['Titanic Quarter by appointment', 'Book Titanic Belfast’s visitor experience first, then use its map to add the Slipways or SS Nomadic if open. This buys shipbuilding context but needs a separate river crossing and a return plan.']
        ],
        access: 'Your ticket may name Belfast Grand Central or Lanyon Place; choose the first walking leg and lodging from the actual station printed on it. Walk from City Hall through Donegall Place toward St Anne’s, and treat the route east over Queen’s Bridge to Titanic Quarter as a distinct leg. Check Translink Metro or Glider options against the exact entrance rather than an old station pin.',
        tradeoff: 'City Hall and the central quarters reward a slow walking half-day; the Queen’s Quarter and Titanic Quarter each pull the route in a different direction. A one-day visit should choose one cross-town branch, not collect all three districts.',
        stay: 'For two nights, choose the City Centre around Donegall Square or the Cathedral Quarter for the core walk and Grand Central approach. Queen’s Quarter puts Botanic Gardens and the Ulster Museum nearer but adds a city-centre leg. A Titanic Quarter room is useful for an early booked visit or arena event, less so for a first evening among the central streets.',
        stages: [
          ['Set the station and first door', 'Read the ticket for Belfast Grand Central or Lanyon Place, then approach City Hall from Donegall Square. Do not assume the two rail stations are interchangeable.'],
          ['Walk the civic line', 'Continue from City Hall through the Linen Quarter toward Donegall Place and St Anne’s Cathedral. Use the City Hall visitor page to choose a tour or exhibition slot before fixing lunch.'],
          ['Commit to one district branch', 'Stay west and north for the Cathedral Quarter, south for Botanic Gardens and Ulster Museum, or cross Queen’s Bridge for Titanic Belfast and the Slipways. The latter needs a timed visit and its own map.'],
          ['Close at the right return', 'Finish near the station or Translink stop actually serving the next leg. Recheck road restrictions and city-event notices before walking back across the centre.']
        ],
        fallback: 'If Titanic Belfast is sold out or its visitor slot does not fit, keep the day central with City Hall, the Cathedral Quarter and one confirmed collection. If rain makes the river walk unpleasant, use a current Translink route and finish at the station matched to the ticket.',
        watch: [
          ['City Hall access is a dated choice', 'The council lists opening hours, tours, exhibition and accessibility separately. Check the exact visitor option instead of assuming the building is open as a museum.'],
          ['The river changes the day shape', 'Titanic Belfast is at Queen’s Road in Titanic Quarter. Count the Lagan crossing, visitor check-in and return; a map pin does not make it the next central block.'],
          ['Event nights alter the grid', 'A parade, concert or public event can change the convenient street and station approach. Follow the current Translink and city notice.']
        ],
        duration: 'Use one full day for a central walk plus one district branch. Titanic Belfast is a timed anchor that can occupy most of its own day; do not stack it with a distant museum visit.',
        combine: 'Pair City Hall with the Linen and Cathedral Quarters, or Titanic Belfast with the nearby shipyard public realm. Keep the Queen’s Quarter as a separate southern walk.',
        verify: 'Check Titanic Belfast’s visitor map and timed availability, Belfast City Hall tours or exhibition hours, current Translink access and any event or street notice.',
        faq: [
          ['Where should I stay for a first two-night Belfast visit?', 'Use the City Centre around Donegall Square or the Cathedral Quarter for the central walking sequence and Grand Central arrival. Choose Queen’s Quarter when the museum and gardens are the priority; choose Titanic Quarter only when its early start or an event outweighs the extra move to central streets.'],
          ['Is Titanic Quarter simply beside City Hall?', 'No. Titanic Belfast is on Queen’s Road beyond the River Lagan. Plan Queen’s Bridge or a current Translink connection as a separate leg, and use Titanic Belfast’s visitor map for the on-site sequence.'],
          ['Should I reserve City Hall and Titanic Belfast?', 'Check the council’s current tour and exhibition information and Titanic Belfast’s timed visitor details before setting the day. A confirmed ticket should determine which neighborhood branch comes first.']
        ],
        sources: [
          ['https://www.titanicbelfast.com/visitor-information/', 'Titanic Belfast — visitor information, map and booking'],
          ['https://www.titanicbelfast.com/visitor-information/location/', 'Titanic Belfast — location and public transport access'],
          ['https://www.belfastcity.gov.uk/things-to-do/city-hall', 'Belfast City Council — City Hall visitor planning'],
          ['https://www.translink.co.uk/', 'Translink — current city and rail journey planning']
        ]
      }),
      g({
        slug: 'giants-causeway-coast',
        searchKeywords: ['Coleraine to Giant’s Causeway', 'Causeway Coast seasonal bus', 'Causeway visitor-centre access'],
        name: 'Giant’s Causeway & the Causeway Coast',
        instrument: 'Coast-stop weather-and-return chart',
        layout: 'basalt-coast-rail-strip',
        imageQuery: 'Giants Causeway Northern Ireland basalt coast',
        imageAlt: 'Basalt columns at the Giant’s Causeway on the Northern Ireland coast',
        reviewDate: '12 October 2026',
        reviewDateISO: '2026-10-12',
        purpose: 'Choose the basalt site as the day’s anchor, then decide between the visitor experience, the accessible route and a coast walk. The Coleraine-to-site bus and the wind-exposed trail—not the photo list—set the day limit.',
        summary: 'Take NI Railways to Coleraine, use the verified Ulsterbus 172 connection, then follow one official Giant’s Causeway route before deciding whether a second coast stop fits.',
        choices: [
          ['Visitor experience and one trail', 'Prebook the National Trust Visitor Experience for its exhibition, interpretation and guided options, then pick one official trail. The coast can be reached on foot without that ticket; the visitor car park has separate restrictions.'],
          ['Green Trail and lower-risk access', 'The National Trust identifies the Visitor Centre and Green Trail as fully accessible. Check current route notices and conditions; accessibility is a route choice, not a promise that every cliff path is suitable.'],
          ['Add one coast town', 'Choose Bushmills, Portrush or another stop only after verifying its separate bus, road or booking leg. A distillery, rope bridge, castle and causeway do not fit a single transit day.']
        ],
        access: 'The National Trust’s current access guidance names regular trains from Belfast or Derry to Coleraine, then Ulsterbus 172 to the Causeway. Other buses, including the Causeway Rambler, have separate and seasonal patterns. This is a rail-plus-bus route, not a station-to-stones walk; confirm both legs and the final return on Translink for your date.',
        tradeoff: 'The free coastal walk and the booked Visitor Experience are different choices: the ticket adds the exhibition, guided interpretation and visitor facilities, while the main on-site car park is reserved for ticket holders and members. A full trail day plus a distillery or second landmark trades away return margin.',
        stay: 'A Belfast base avoids moving bags and suits one full Causeway day if the Ulsterbus 172 connection and last return align. One or two nights in Portrush or Bushmills suit a slower coast plan or an early start, but do not assume evening buses or that every attraction is walkable from the bed.',
        stages: [
          ['Start at the rail interchange', 'Take NI Railways to Coleraine and check the Ulsterbus 172 stop and return before leaving the station. If a bus or trail is seasonal, use the dated operator listing rather than a remembered summer route.'],
          ['Choose ticket and access mode', 'The National Trust calendar checked on 12 October 2026 listed the Visitor Centre 09:00–17:00 and coastline dawn to dusk. Recheck the date selector, decide whether the Visitor Experience adds value, and confirm parking rules before setting off.'],
          ['Follow one official basalt route', 'Choose the visitor approach, Green Trail or another currently open National Trust route for the weather and walking ability. Keep to marked paths, stay behind barriers and do not descend toward rough water.'],
          ['Return before adding a second stop', 'Use the saved Coleraine connection and allow a margin for the coast leg. Add Bushmills only when its own booking and the return are both confirmed; otherwise finish the Causeway route and go back.']
        ],
        fallback: 'If wind or wet basalt makes the exposed trail a poor choice, use the Visitor Centre and an officially open lower-risk route; the Green Trail is listed as fully accessible. If the bus connection or site access fails, stay in Belfast or Derry rather than substituting another exposed cliff.',
        watch: [
          ['The return is a second booking decision', 'A Belfast-to-Coleraine train does not complete the last mile. Save the Ulsterbus 172 departure in both directions and drop the optional stop if the connection narrows.'],
          ['The season changes the bus network', 'The National Trust lists several coast services and labels some seasonal. Do not plan around the Causeway Rambler outside its current published window.'],
          ['Basalt and cliff paths change with weather', 'Rain, spray, wind and closures alter footing and exposure. Use only open National Trust routes; the Visitor Centre/Green Trail fallback is different from a cliff circuit.']
        ],
        duration: 'Treat the Causeway as a full day from Belfast because the rail, bus and walking legs are separate. From a north-coast base, use the saved hours for one route and interpretation rather than assuming several landmarks fit.',
        combine: 'Pair the site with Bushmills only when a current bus, tour or road plan and the distillery’s own reservation both work. Keep Derry and central Belfast for other days.',
        verify: 'Check the National Trust date-specific opening, ticket and trail notices; Translink’s Belfast–Coleraine rail and Ulsterbus 172 plan; weather warnings; and the return before booking a second stop.',
        faq: [
          ['Do I need a ticket to walk to the stones?', 'The National Trust says the stones can be reached on foot without a Visitor Experience ticket. That ticket includes the Visitor Centre exhibition, interpretation and guided options; on-site parking is reserved for eligible ticket holders and members, so read the current access terms before choosing.'],
          ['Can I use the Causeway Rambler all year?', 'No. The National Trust lists it among the available buses and marks the service as seasonal on its route pages. For a rail-first visit, verify the current NI Railways-to-Coleraine and Ulsterbus 172 connection instead of relying on a summer timetable.'],
          ['What is the lower-risk route in poor weather?', 'The National Trust describes the Visitor Centre and Green Trail as fully accessible. Check their live notices on the day; if wind, closures or transport make even that route unsuitable, replace the coast with a Belfast or Derry indoor day.']
        ],
        sources: [
          ['https://www.nationaltrust.org.uk/visit/northern-ireland/giants-causeway', 'National Trust — Giant’s Causeway visitor information'],
          ['https://www.nationaltrust.org.uk/visit/northern-ireland/giants-causeway/giants-causeway-green-trail', 'National Trust — Green Trail and accessibility'],
          ['https://www.nationaltrust.org.uk/visit/northern-ireland/giants-causeway/giants-causeway-yellow-trail', 'National Trust — coast access and seasonal buses'],
          ['https://www.translink.co.uk/timetables', 'Translink — dated rail and bus timetables'],
          ['https://www.translink.co.uk/service-incidents', 'Translink — current travel updates']
        ]
      }),
      g({
        slug: 'derry-walls-bogside',
        searchKeywords: ['Derry wall walking route', 'Cityside and Waterside stay', 'Museum of Free Derry opening hours'],
        name: 'Derry Walls, Bogside & River Foyle',
        instrument: 'Walls-and-memory context ledger',
        layout: 'walled-city-memory-section',
        imageQuery: 'Derry city walls Guildhall Northern Ireland',
        imageAlt: 'Historic city walls and central Derry beside the River Foyle',
        reviewDate: '12 October 2026',
        reviewDateISO: '2026-10-12',
        purpose: 'Read the walled centre, Bogside and Waterside as connected but distinct parts of a living city. Choose one wall section and one source of historical interpretation, then use the Peace Bridge or a current bus for the return.',
        summary: 'Enter from the Waterside rail approach or coach centre, cross to the walled city, then connect one wall walk to the Museum of Free Derry or the Peace Bridge.',
        choices: [
          ['Wall and gate sequence', 'Start at Shipquay Gate, follow one direction along the ramparts, and descend at a chosen gate. It gives the clearest city form, but steps and exposed stone can make a full circuit unsuitable.'],
          ['Walls and Bogside interpretation', 'Use the wall route to orient yourself, then enter the Museum of Free Derry or take a responsible guided walk. Set aside time for the institution; do not turn residential murals into a photo checklist.'],
          ['Guildhall and the river crossing', 'Keep the walk closer to street level: Guildhall Square, the Peace Bridge and the Waterside edge form a shorter civic route. It trades rampart coverage for an easier return and a contemporary river view.']
        ],
        access: 'Visit Derry lists Translink train services from Belfast and bus services from Belfast and Dublin. Use the actual rail or coach stop shown by Translink as your arrival pin; the Foyle separates the Waterside from the walled centre, and the Peace Bridge is one named pedestrian crossing. Check the current map and access before choosing that route. The wall walk includes uneven surfaces and stairs.',
        tradeoff: 'A full wall circuit, the Museum of Free Derry and the Peace Bridge are separate pieces of a meaningful day. Choose one wall arc plus one interpretation site, or trade the ramparts for the street-level river route; do not rush testimony and community history to complete a loop.',
        stay: 'Two nights in Derry~Londonderry allow one arrival evening and one full walls-and-museum day; Cityside suits the historic core and evening walk, while Waterside puts the rail approach nearer but requires crossing the river. A single night works for a focused city visit, not a combined Causeway day and museum circuit.',
        stages: [
          ['Arrive at the right side of the Foyle', 'For NI Railways, begin in Waterside and use the Peace Bridge toward the centre; a Translink coach reaches a different stop. Save the actual departure point before choosing a hotel or first gate.'],
          ['Enter the ramparts once', 'Use Shipquay Gate for the central approach, then follow one wall arc toward a chosen descent. Read the gates and bastions as the route; avoid repeating the same slope to collect every viewpoint.'],
          ['Descend to one history anchor', 'From the wall edge, continue toward the Bogside and the Museum of Free Derry, or keep to the Guildhall and river story. The museum is at 55 Glenfada Park; check the current last-entry time and allow room for its self-guided interpretation.'],
          ['Return through the river or city centre', 'Finish by the Peace Bridge and Guildhall Square or use a verified local bus. In rain or when the ramparts are closed, keep the same sequence at street level and leave the wall loop for another visit.']
        ],
        fallback: 'If rain, wind or access notices make the wall top unsafe, skip the ramparts and use Guildhall Square, the Museum of Free Derry if open, and the Peace Bridge. If the museum is closed or its last entry has passed, choose another confirmed institution or a guided route rather than wandering residential streets for images.',
        watch: [
          ['Use context before close-up photography', 'The Bogside is a lived residential area. Follow museum and community guidance, respect people’s privacy, and do not frame homes as an attraction.'],
          ['The museum calendar changes by season', 'On 12 October 2026 its published schedule showed weekday hours through 31 October ending at 18:00, then 17:00 from 1 November to 21 December; last entry is one hour before closing. Recheck the live calendar.'],
          ['Ramparts are not a step-free promise', 'The wall route has stairs, uneven stone and exposure. Check access notices and use the Guildhall–Peace Bridge street route if a full circuit does not fit your mobility or weather window.']
        ],
        duration: 'Protect a full day for a wall section, one major interpretation site and the river. A focused Guildhall-and-Peace-Bridge walk is the shorter alternative; arrival from Belfast is a separate corridor, not part of the walking estimate.',
        combine: 'Pair the walls with the Museum of Free Derry, or keep the civic centre and Peace Bridge at street level. Do not combine this day with the Causeway Coast or a same-day Belfast hotel change.',
        verify: 'Check the Museum of Free Derry’s current opening and last entry, wall access notices, Visit Derry transport guidance, Translink service and weather before fixing the route.',
        faq: [
          ['Is Derry a day trip from Belfast?', 'Translink lists both train and bus services between Belfast and Derry, but the transfer is a separate part of the day. For the walls, Museum of Free Derry and river route, an overnight protects the visit and avoids tying a history stop to the last return.'],
          ['How should I plan the Bogside?', 'Use the Museum of Free Derry or a responsible guided interpretation to understand the sites, and follow local guidance. The Bogside is a living neighborhood, not a mural checklist; be considerate with photography and residents.'],
          ['What if the museum is closed when I arrive?', 'The museum lists seasonal opening hours and last entry one hour before closing. Recheck its own calendar; if the window is gone, use a confirmed Guildhall or street-level river route and save the museum for another day.']
        ],
        sources: [
          ['https://www.visitderry.com/visitor-information/transport-and-travel/getting-to-derry', 'Visit Derry — train and coach connections'],
          ['https://www.visitderry.com/', 'Visit Derry — official destination and walled-city guide'],
          ['https://museumoffreederry.org/visit/', 'Museum of Free Derry — seasonal hours, last entry and booking'],
          ['https://www.translink.co.uk/service-incidents', 'Translink — current rail and bus travel updates']
        ]
      })
    ]
  })
];
