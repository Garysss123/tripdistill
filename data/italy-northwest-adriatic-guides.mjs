import { defineItalyCluster, italyGuide } from './italy-guide-builder.mjs';

const c = defineItalyCluster;
const g = italyGuide;

export const italyNorthwestAdriaticClusters = [
  c({
    slug: 'milan',
    name: 'Milan',
    region: 'Lombardy',
    band: 'northwest-adriatic',
    family: 'metropolitan-threshold-section',
    label: 'Booked-door city section',
    tagline: 'Fix one controlled interior, then keep the rest of Milan on one legible street and transit line.',
    hubIntro: 'Milan rewards deliberate transitions rather than landmark accumulation. The cathedral complex, Brera, Santa Maria delle Grazie, the Castello, Porta Nuova and the Navigli sit in different operating zones, and the scarce reservation or exact museum entrance should determine the direction of the day rather than become one more pin in a cross-city loop.',
    stay: 'Three nights supports one historic-centre and collection day, one fixed-reservation or castle day and one modern-city to canal sequence. A fourth night makes room for a fair, major exhibition or a lower-pressure evening without forcing an airport move and a timed admission onto the same clock.',
    transfer: 'Milano Centrale, Porta Garibaldi and Cadorna are separate rail gateways, while the city airports use different rail, coach and terminal arrangements. Match the arrival product to the hotel and first booked door, then save the ATM line and station exit that serve the actual entrance rather than navigating only to a district name.',
    season: 'Summer heat makes exposed piazzas and rooftop visits more demanding, while rain shifts value toward collections and covered passages. Trade fairs, fashion and design events can tighten rooms and alter public-space access; they should be checked as dated operating conditions, not assumed attractions.',
    fallback: 'Keep a same-zone alternative for every controlled interior. Cathedral exteriors, the Galleria, Brera streets, Castello courtyards, Porta Nuova public space and a bounded canal walk can preserve a coherent day when a roof, gallery or reserved visit changes, without sending the traveler across Milan to chase a replacement headline.',
    sources: [
      ['https://www.duomomilano.it/en/', 'Duomo di Milano — official cathedral-complex visits'],
      ['https://www.yesmilano.it/en/must-see-attractions', 'YesMilano — official city attractions and planning context'],
      ['https://www.atm.it/en/Pages/default.aspx', 'ATM Milano — official urban transport information']
    ],
    guides: [
      g({
        slug: 'duomo-brera',
        name: 'Duomo, Brera & the Historic Centre',
        instrument: 'Cathedral-to-canvas threshold',
        layout: 'sacred-collection-threshold',
        structure: 'living-sacred-threshold',
        imageQuery: 'Milan Duomo cathedral facade piazza wide',
        imageAlt: 'The facade of Milan Cathedral facing Piazza del Duomo',
        purpose: 'Choose whether the cathedral complex or the Pinacoteca di Brera receives the day’s main attention, then cross the historic centre once without treating terraces, church, galleries, shopping arcade and every Brera interior as equal commitments.',
        summary: 'Meet the exact Duomo or Brera entrance, read the cathedral square and Galleria as a civic threshold, then move north through one deliberate street line and finish near the station that serves the chosen collection.',
        choices: [
          ['Cathedral complex depth', 'Use the current Duomo product for the church, archaeological area or terraces that matter most. This gives the strongest building-led day but leaves Brera as streets, a meal or a short exterior finish.'],
          ['Brera collection depth', 'Reserve the Pinacoteca as the fixed interior and keep the Duomo mostly to its piazza or a bounded visit. This protects attention for the collection but gives up a complete cathedral-and-roof sequence.'],
          ['Historic-centre public realm', 'Keep both controlled interiors light or exterior and connect Piazza del Duomo, the Galleria, La Scala’s square and Brera lanes. This is the most flexible branch, but it sacrifices deep access to either institution.']
        ],
        access: 'Duomo station serves the square on two Metro lines, but its exits emerge around a large pedestrian and traffic field. Brera is approached more usefully from the north side of the centre or from Lanza, depending on the final door. Follow the entrance printed on the cathedral or gallery booking; a façade, terrace lift and museum entrance are not interchangeable.',
        tradeoff: 'A complete cathedral complex and a serious Brera collection visit both require security, standing and focused indoor time. Selecting one as the anchor gives up depth in the other, but preserves a meal, a coherent northbound walk and enough attention to understand the chosen interior.',
        stages: [
          ['Meet the controlled threshold', 'Arrive at the booked Duomo or Brera door with the correct product, bag rules and arrival margin. Do not begin in a queue simply because it is visible from the piazza.'],
          ['Read the civic room', 'Use Piazza del Duomo and the Galleria as one orientation field, distinguishing worship access, rooftop access and public passage before adding another interior.'],
          ['Move north once', 'Continue by La Scala’s square and a single Brera approach rather than doubling back through the Galleria. Pause for food before entering the collection if Brera is the anchor.'],
          ['Finish beside the useful line', 'End in Brera or the cathedral district according to the selected interior, then leave from the saved Metro or tram stop instead of retracing every street to the first square.']
        ],
        fallback: 'If terraces close or the selected gallery cannot admit visitors, retain the cathedral square, Galleria, La Scala exterior and Brera street sequence. Enter another institution only when its current official admission works; the fallback is a complete civic walk, not an improvised queue chain.',
        watch: [
          ['One ticket does not mean every threshold', 'Cathedral, terraces, archaeological areas and related spaces can use different products, entrances and access conditions. Read the current inclusion before choosing the route.'],
          ['A living church is not a museum corridor', 'Worship, dress, security and visitor circulation can change what is available. Keep devotional space and tourist access distinct in both timing and behavior.'],
          ['Collection fatigue arrives before distance', 'The walk to Brera is short compared with sustained gallery attention. Preselect the collection themes that matter rather than trying to compensate for a late entry by rushing rooms.']
        ],
        duration: 'Allow six to eight hours for one substantial controlled interior, the historic-centre walk and a real break. A public-realm circuit without a major interior can fit three to four hours.',
        combine: 'Combine the Duomo with Brera only when one is clearly the anchor and the other is a lighter layer. Keep Santa Maria delle Grazie, the Navigli and Porta Nuova for separate route days.',
        verify: 'Check the exact Duomo ticket and entrance, terrace and weather notices, Pinacoteca di Brera admission and closure information, and ATM service to the chosen start and finish before departure.',
        sources: [
          ['https://www.duomomilano.it/en/', 'Duomo di Milano — official visits and ticket information'],
          ['https://pinacotecabrera.org/en/', 'Pinacoteca di Brera — official gallery information']
        ]
      }),
      g({
        slug: 'last-supper-castello',
        name: 'The Last Supper, Santa Maria delle Grazie & the Castello',
        instrument: 'Fixed-slot-to-castle score',
        layout: 'fixed-slot-castle-braid',
        structure: 'booked-door-score',
        imageQuery: 'Santa Maria delle Grazie Milan exterior church',
        imageAlt: 'Santa Maria delle Grazie church and its brick dome in Milan',
        purpose: 'Build the day around the exact Last Supper admission slot, then decide whether Santa Maria delle Grazie, the Castello museums or the park receives the remaining attention instead of assuming one famous image unlocks the whole western centre.',
        summary: 'Arrive early at the Cenacolo entrance, keep the church and museum as separate thresholds, then follow one eastward line to the Castello and finish in its courtyards, museums or Parco Sempione.',
        choices: [
          ['Cenacolo as the fixed anchor', 'Protect the named ticket and its arrival instructions, then give the church precinct and a selective Castello visit the rest of the day. This is reservation-led and least tolerant of delay.'],
          ['Castello museum depth', 'Use a current Castello museum or exhibition as the main interior and treat Santa Maria delle Grazie as an exterior or church visit when access permits. This gains collection depth but gives up the Last Supper without a ticket.'],
          ['Architecture and park line', 'Keep controlled interiors minimal, connect the Grazie precinct to Corso Magenta, the fortress courtyards and Parco Sempione. This is resilient but does not substitute for viewing the mural.']
        ],
        access: 'The Cenacolo Vinciano has its own controlled visit instructions beside Santa Maria delle Grazie; entering the church is a separate act. Conciliazione and Cadorna serve different approaches, while Cairoli is useful near the Castello. Save the booked entrance and arrival requirement rather than navigating only to the church name.',
        tradeoff: 'The Last Supper’s fixed slot cannot absorb a late airport or rail arrival, and the Castello is a multi-museum complex rather than one quick room. Giving one institution depth sacrifices breadth in the other but prevents the entire day from becoming a sequence of security lines.',
        stages: [
          ['Protect the named admission', 'Reach the official meeting point with the ticket holder details and required margin already resolved. Keep luggage and an arriving train outside this narrow reservation window.'],
          ['Separate mural from church', 'After the controlled visit, read Santa Maria delle Grazie according to current church access and worship conditions. Do not assume either door includes the other.'],
          ['Follow the western city line', 'Move east through one Corso Magenta approach toward the Castello, taking a proper break before choosing a museum. Avoid diverting to the Duomo simply because it is one Metro ride away.'],
          ['Choose fortress or park', 'Use one current Castello collection, its courtyards or Parco Sempione as the final layer, then leave from Cairoli or Cadorna according to the return already saved.']
        ],
        fallback: 'If no Cenacolo ticket is available or the visit is cancelled, do not buy an unofficial substitute. Keep Santa Maria delle Grazie subject to church access, the Corso Magenta civic route, Castello courtyards and one officially open museum or the park.',
        watch: [
          ['The reservation belongs to a person and time', 'Ticket identity, collection and arrival rules can be strict. A screenshot from a reseller or an old time window is not a usable admission plan.'],
          ['Church access follows a different clock', 'Services and religious use can close or redirect visitor circulation even when the museum visit operates. Treat the two institutions separately.'],
          ['The Castello plural matters', 'Its museums and exhibitions can have separate hours and closures. Choose one collection before crossing the courtyards rather than assuming the entire complex is one stop.']
        ],
        duration: 'Allow five to seven hours for the fixed Cenacolo visit, the church precinct, a meal and one bounded Castello or park layer. The Last Supper itself should never be scheduled as a connection-day afterthought.',
        combine: 'Combine with the Castello and Parco Sempione because they preserve one west-to-east line. Keep the Duomo, Brera and the Navigli for other days.',
        verify: 'Reopen the Cenacolo ticket and identity instructions, Santa Maria delle Grazie visitor conditions, the selected Castello museum notice and ATM service before leaving.',
        sources: [
          ['https://cenacolovinciano.org/en/info/', 'Museo del Cenacolo Vinciano — official visit information'],
          ['https://www.milanocastello.it/en', 'Castello Sforzesco — official museum and visit information']
        ]
      }),
      g({
        slug: 'navigli-porta-nuova-design',
        name: 'Navigli, Porta Nuova & Milan Design',
        instrument: 'North-to-canal daypart braid',
        layout: 'north-south-design-dayparts',
        structure: 'rail-to-street-braid',
        imageQuery: 'Naviglio Grande Milan canal evening',
        imageAlt: 'Evening light along Naviglio Grande in Milan',
        purpose: 'Decide whether contemporary Porta Nuova, a current design attraction or the Navigli evening is the main layer, then make only one north-to-south transit move so fashionable districts do not become a day of disconnected photo stops.',
        summary: 'Begin around Porta Garibaldi and Porta Nuova, use one verified design or public-space focus, pause before crossing the city, and reserve the canal district for the time of day it actually serves.',
        choices: [
          ['Porta Nuova and Isola', 'Give the contemporary skyline, public spaces and adjacent neighborhood a long daytime block. This produces the clearest modern-city reading but makes the Navigli a short evening finish.'],
          ['ADI Design Museum focus', 'Use the ADI Design Museum as the named public interior, checking current exhibitions and admission before travel. This gains curatorial depth but requires giving up broad shopping and architecture coverage.'],
          ['Navigli and Darsena evening', 'Start later and protect the canal walk, meal and direct return. This best fits atmosphere and dining but sacrifices a full northern district circuit.']
        ],
        access: 'Porta Garibaldi rail and Metro services the northern start, while Porta Genova is the practical Metro gateway for Naviglio Grande and the Darsena side. These are not adjacent districts. Use one confirmed ATM transfer and save the late return from the canal-side stop before settling into dinner.',
        tradeoff: 'Porta Nuova, a meaningful design interior and an unhurried Navigli evening each require a different attention window. A split day works only by choosing one daytime anchor; adding every design quarter and canal branch turns the useful transfer into repeated cross-city travel.',
        stages: [
          ['Start at the northern gateway', 'Leave Porta Garibaldi on the side that serves the selected Porta Nuova or Isola line. Read the skyline and public realm before entering an optional design venue.'],
          ['Commit to one design layer', 'Use a current official attraction, exhibition or bounded neighborhood walk. Check the door and event date rather than following a generic design label across several districts.'],
          ['Make one city crossing', 'Pause for food, then take the saved ATM connection toward Porta Genova. Do not insert the Duomo or Castello between north and south merely because the network allows it.'],
          ['Finish beside one canal', 'Use the Darsena and one bank of Naviglio Grande or the chosen canal branch, then return from the station or tram stop already identified before the evening becomes a transport guess.']
        ],
        fallback: 'In sustained rain or when another design event changes, use the officially open ADI Design Museum or a separately verified city collection, then move to a bounded meal near a direct return line. The fallback need not force an exposed canal walk.',
        watch: [
          ['“Design district” is not an admission ticket', 'Showrooms, exhibitions and events change by date and may be trade-only or closed. Confirm one public destination instead of relying on a neighborhood label.'],
          ['The two districts need a real transfer', 'Walking the full north-to-south distance after a museum day consumes the evening. Use the transit contract chosen at the start.'],
          ['Canal atmosphere can hide the return', 'Crowds, dining waits and late service patterns affect the final leg. Save the station, line and hotel-side interchange before ordering.']
        ],
        duration: 'Allow a full afternoon and evening for one northern or design anchor plus the Navigli. A single district can fill three to four hours; all-day coverage of both should include a real rest and one transit crossing.',
        combine: 'Combine Porta Nuova with Isola, or the Navigli with the Darsena. Treat the Duomo, Brera and the fixed Last Supper visit as separate route anchors.',
        verify: 'Check ADI Design Museum admission and current exhibitions, any selected YesMilano event on the actual date, ATM service between the two gateways and the practical late return from Porta Genova.',
        sources: [
          ['https://www.yesmilano.it/en/must-see-attractions', 'YesMilano — official city attractions and current visitor context'],
          ['https://www.atm.it/en/Pages/default.aspx', 'ATM Milano — official Metro, tram and service information'],
          ['https://www.adidesignmuseum.org/en/', 'ADI Design Museum — official visitor information']
        ]
      })
    ]
  }),
  c({
    slug: 'italian-lakes',
    name: 'Italian Lakes',
    region: 'Lombardy, Piedmont & Veneto',
    band: 'northwest-adriatic',
    family: 'waterline-and-gateway-section',
    label: 'Two-shore landing clock',
    tagline: 'Choose one rail gateway, one water crossing and a return that still works after the postcard.',
    hubIntro: 'Como, Maggiore and Garda are separate transport systems rather than interchangeable blue scenery. Rail reaches particular shore towns, boats operate named routes and seasons, and buses or roads complete other edges. A useful lake plan begins with the mainland gateway and final return before selecting villas, islands or a second shore.',
    stay: 'Two nights on one lake creates a full water day without tying it to a Milan arrival. Three nights allows a poor-weather mainland day and a second shore. Switching accommodation between lakes usually spends more time on rail gateways and luggage than on the water.',
    transfer: 'Como, Varenna, Stresa, Desenzano and Peschiera solve different arrivals; some celebrated lake towns have no rail station. Match the train to a named pier or bus connection, distinguish similarly named stations and docks, and record the final practical boat and onward rail before leaving the gateway.',
    season: 'Boat routes, frequencies, villa access and daylight vary by season, while storms, wind and high visitor pressure can remove a planned crossing. Summer heat makes exposed docks and steep lanes harder; shoulder seasons need a complete mainland plan when reduced services break a multi-stop circuit.',
    fallback: 'Build every lake day around a rail-connected or road-connected gateway with enough streets, waterfront and indoor options to remain worthwhile. When boats are suspended or full, stay on that shore and protect the train or bus return instead of assembling taxis around the water.',
    sources: [
      ['https://www.navigazionelaghi.it/en/', 'Navigazione Laghi — official services for Lakes Maggiore, Garda and Como'],
      ['https://www.in-lombardia.it/en', 'in-Lombardia — official regional destination information'],
      ['https://www.visitgarda.com/en/', 'Visit Garda — official lake destination information']
    ],
    guides: [
      g({
        slug: 'lake-como-central-lake',
        name: 'Lake Como Central Lake',
        instrument: 'Central-lake crossing clock',
        layout: 'central-lake-two-shore-clock',
        structure: 'two-shore-clock',
        imageQuery: 'Lake Como Varenna Bellagio ferry panorama',
        imageAlt: 'Varenna and the central waters of Lake Como with mountains beyond',
        purpose: 'Choose Varenna, Bellagio or the western shore as the day’s anchor, then make one purposeful central-lake crossing while retaining a direct route back to the rail or accommodation gateway.',
        summary: 'Arrive at the named station or pier, read the current central-lake board before committing, give one town real time and cross only when the return still leaves a service in reserve.',
        choices: [
          ['Varenna rail gateway', 'Use Varenna-Esino as the firm arrival and give Varenna’s lanes and waterfront the deepest block. This protects the rail return but limits western-shore depth.'],
          ['Bellagio as the pivot', 'Travel by boat to a central peninsula base and keep the day focused around Bellagio and one crossing. This buys the strongest water orientation but makes the whole day boat-dependent.'],
          ['Menaggio or western shore', 'Use a verified boat or bus connection to work one western-shore town. This changes the landscape and pace but adds the most fragile last mile to the rail journey.']
        ],
        access: 'Varenna-Esino station and the Varenna ferry landings are connected by a real downhill and uphill walk; Bellagio has no rail station, and Menaggio requires a water or road connection. Como’s stations and piers serve a different southern gateway. Save the exact landing and service type rather than treating “Lake Como” as one terminal.',
        tradeoff: 'Three towns can appear close across the water while their boarding queues, sailing pattern and hill streets consume the day. Giving one town depth and one crossing priority sacrifices a postcard checklist but keeps the return resilient.',
        stages: [
          ['Establish the mainland gateway', 'Arrive at the chosen rail or accommodation base, locate the correct pier and compare today’s outbound and return services before leaving the shore.'],
          ['Read one town on foot', 'Use Varenna, Bellagio or Menaggio as a complete street-and-waterfront chapter. Include the climb and a meal rather than reducing the town to the dock.'],
          ['Cross once with a reserve', 'Take the named central-lake service only when the return remains protected. If queues consume the margin, deepen the first shore instead of boarding speculatively.'],
          ['Recover the rail or hotel line', 'Reach the final pier early enough to make the station climb, bus or hotel walk without sprinting. Keep one later rail option where the timetable allows.']
        ],
        fallback: 'If wind, suspension or capacity removes the crossing, keep a complete Varenna or Como-shore day with the waterfront, historic streets and an officially open attraction. Do not substitute an unbooked private boat merely to preserve the number of towns.',
        watch: [
          ['Landing names and service patterns matter', 'Fast and regular services may call at different piers or towns. Read the current operator table for the exact date and direction.'],
          ['The station-to-pier link is vertical', 'Luggage, heat, wet paving and queues make Varenna’s connection slower than the map suggests. Include the climb in the return clock.'],
          ['A villa is another controlled interior', 'Gardens, villas and their admission can use separate hours and queues. Add one only by reducing town or crossing time.']
        ],
        duration: 'Allow seven to nine hours from the rail gateway for one central-lake crossing and two bounded shores. A one-town lake day can fit four to five hours and is the safer reduced-service plan.',
        combine: 'Combine Varenna with one Bellagio or Menaggio branch. Do not add Lake Maggiore, Lake Garda or a second Milan museum to the same day.',
        verify: 'Check Navigazione Laghi’s dated Lake Como timetable and service notices, the exact rail station and pier, the selected attraction’s admission and the final train or bus connection before departure.',
        sources: [
          ['https://www.navigazionelaghi.it/en/', 'Navigazione Laghi — official Lake Como timetables and notices'],
          ['https://www.in-lombardia.it/en', 'in-Lombardia — official Lake Como destination context']
        ]
      }),
      g({
        slug: 'lake-maggiore-islands',
        name: 'Lake Maggiore & the Borromean Islands',
        instrument: 'Borromean landing-and-return billet',
        layout: 'borromean-island-return-billet',
        structure: 'island-return-billet',
        imageQuery: 'Isola Bella Lake Maggiore Borromean Islands',
        imageAlt: 'Isola Bella rising from Lake Maggiore against an Alpine backdrop',
        purpose: 'Choose whether one Borromean island, a two-island sequence or the mainland shore is the main visit, and treat boat transport and each admission as separate commitments rather than a single “islands” ticket.',
        summary: 'Begin at a named mainland pier, protect the return sailing and rail connection, land on one island with enough time to read it, and add a second only after current service and admissions still agree.',
        choices: [
          ['One island in depth', 'Choose the palace-and-garden or village experience that matters and allow its full admission and walking time. This sacrifices island count but creates the least rushed day.'],
          ['Two-island sequence', 'Use a verified service pattern to connect two landings, preselecting what each island contributes. This gains contrast but leaves little tolerance for queues or a late first visit.'],
          ['Stresa waterfront or Villa Taranto', 'Stay on the mainland for Stresa’s waterfront or the verified Villa Taranto garden in Verbania. This is most resilient in uncertain weather but gives up the island landing and still requires matching the chosen town to its transport.']
        ],
        access: 'Stresa railway station is uphill from its waterfront, and the area has multiple landing points and boat products. Other mainland towns create different island approaches. Match the operator, pier, island stop and final shore to the rail return; a generic “boat to Isola Bella” instruction is incomplete.',
        tradeoff: 'Island palaces and gardens require admission and sustained time after the boat lands. Adding a second island buys variety but sacrifices a relaxed interior, meal and reserve sailing. The route chooses either depth or movement explicitly.',
        stages: [
          ['Build the mainland buffer', 'Reach the named gateway with time to walk from the station, identify the correct pier and confirm both the outward and return service before buying or boarding.'],
          ['Land with one purpose', 'Use the first island for the selected palace, garden or village layer. Read the current admission separately from the boat ticket and set a departure cutoff on arrival.'],
          ['Add contrast only when real', 'Take a second verified sailing only when the remaining island and return windows still work. Otherwise stay for a meal or return to the mainland early.'],
          ['Recover the uphill connection', 'Land at the planned mainland pier and leave enough time for the station walk, luggage or bus. Do not make the last boat and last useful train one continuous gamble.']
        ],
        fallback: 'If island boats are suspended or the selected admission closes, keep the mainland waterfront and town as the complete day, using a current local attraction only when its official hours work. Protect the rail return rather than switching among private-boat offers at the pier.',
        watch: [
          ['Boat fare and island entry are separate', 'Transport does not automatically include palaces, gardens or every landing. Verify both products and their final admission times.'],
          ['Several piers can share a town name', 'The rail walk and return depend on the exact landing. Save the operator’s pier rather than following the nearest boat sign.'],
          ['Garden scale changes the second island', 'A long interior-and-garden visit can consume the intended transfer window. Remove the second landing before cutting the protected mainland return.']
        ],
        duration: 'Allow a full seven-to-nine-hour day from the rail gateway for two carefully timed islands; one island and the mainland can fit five to seven hours with a better reserve.',
        combine: 'Combine one or two Borromean Islands with their actual mainland gateway. Keep Lake Como, Lake Garda and Turin for separate days.',
        verify: 'Check the dated Navigazione Laghi schedule and notices, the exact mainland pier, each island attraction’s current admission and the final rail connection before travel.',
        sources: [
          ['https://www.distrettolaghi.it/en', 'Distretto Turistico dei Laghi — official Lake Maggiore destination information'],
          ['https://www.navigazionelaghi.it/en/', 'Navigazione Laghi — official Lake Maggiore services'],
          ['https://www.villataranto.it/en/', 'Villa Taranto Botanical Gardens — official visitor information']
        ]
      }),
      g({
        slug: 'lake-garda-shores',
        name: 'Lake Garda Shores',
        instrument: 'Three-gateway shore roadbook',
        layout: 'garda-three-gateway-roadbook',
        structure: 'road-stage-folio',
        imageQuery: 'Lake Garda Malcesine castle waterfront mountains',
        imageAlt: 'Malcesine waterfront, castle and mountains on Lake Garda',
        purpose: 'Choose a southern rail gateway, an eastern-shore corridor or a northern mountain-edge day before travel, because Lake Garda’s length and changing road, bus and boat links make a spontaneous full circuit unrealistic.',
        summary: 'Enter through one gateway, follow one shore with a defined turning point, use a boat only when it simplifies rather than expands the route, and return along the protected rail or bus corridor.',
        choices: [
          ['Southern rail shore', 'Base the day around Desenzano or Peschiera and a bounded lakeside extension. This offers the strongest rail recovery but less of the dramatic northern setting.'],
          ['Eastern-shore progression', 'Use a verified bus or boat line toward Garda or Malcesine, stopping deeply in one town. This reaches steeper scenery but becomes dependent on road and seasonal service.'],
          ['One cross-lake contrast', 'Select a named boat connection between two compatible shores and return by a planned mode. This provides water perspective but gives up a long same-shore circuit.']
        ],
        access: 'There is no single Lake Garda station. Desenzano del Garda-Sirmione and Peschiera del Garda serve the south, while eastern, western and northern towns require onward buses, boats or road travel. Sirmione’s station name does not place the train in the historic peninsula; the last mile must be planned.',
        tradeoff: 'A full-lake circuit turns scenery into hours of transfers and road delay. Choosing one gateway and one direction sacrifices geographic coverage, but creates time for a town, meal, swim or attraction and leaves a credible return.',
        stages: [
          ['Claim one gateway', 'Arrive at the named rail, bus or accommodation base and locate the onward stop or pier before entering the waterfront. Keep the final return visible.'],
          ['Work one shore segment', 'Give the gateway town or first shore settlement a complete circuit, including its elevation and pedestrian limits, rather than collecting multiple brief landings.'],
          ['Use water as a connector', 'Board a named service only when it reduces backtracking and the destination has a protected onward or return option. Otherwise continue on the chosen shore.'],
          ['Turn back before the road tightens', 'Leave the farthest town with enough margin for seasonal traffic, bus capacity and the station transfer. A sunset view is not worth losing the rail gateway.']
        ],
        fallback: 'When boats, mountain-edge buses or roads become unreliable, remain around the southern rail gateway or accommodation town for a complete waterfront and historic-centre day. Remove the far shore, not the return.',
        watch: [
          ['A station name can hide the last mile', 'The rail stop may be several transport steps from the promoted historic centre. Identify the bus, walk and return stop in advance.'],
          ['Lake roads compress capacity', 'Peak traffic and full buses can erase a close connection. Keep one service in reserve and avoid chaining opposite shores.'],
          ['Cable cars and ferries are separate clocks', 'A mountain lift or boat adds its own weather, queue and final departure. Use only one additional operating system in the day.']
        ],
        duration: 'Allow a full day for one Garda gateway and one shore extension. A two-night stay is better for a northern town or cross-lake plan; a complete circuit is not a responsible day-trip promise.',
        combine: 'Combine towns that share one shore corridor or one direct boat crossing. Keep Verona, the Dolomites and the other Italian lakes as separate route days.',
        verify: 'Check Navigazione Laghi’s dated Garda service, Visit Garda’s current local access information, the exact bus or rail gateway, road notices and the last practical return.',
        sources: [
          ['https://www.navigazionelaghi.it/en/', 'Navigazione Laghi — official Lake Garda services'],
          ['https://www.visitgarda.com/en/', 'Visit Garda — official shore and access information']
        ]
      })
    ]
  }),
  c({
    slug: 'turin-piedmont',
    name: 'Turin & Piedmont',
    region: 'Piedmont',
    band: 'northwest-adriatic',
    family: 'arcade-collection-territory-section',
    label: 'Arcade and foothill thresholds',
    tagline: 'Separate Turin’s walkable collections from every palace, abbey and vineyard last mile beyond them.',
    hubIntro: 'Central Turin is a measured city of arcades, royal spaces and large collections, but Piedmont beyond it quickly becomes a branch-transport problem. The Egyptian Museum and Royal Museums need attention choices; Venaria and the Sacra di San Michele need separate gateways; the Langhe, Alba and Asti require a sober agreement between rail, road and appointments.',
    stay: 'Three nights gives Turin two independent city days and one selected regional branch. Four or five nights supports both a royal or abbey excursion and a Langhe town day without treating an arriving train, a tasting appointment and a museum ticket as one continuous itinerary.',
    transfer: 'Porta Nuova and Porta Susa serve different sides of central Turin and onward networks. Urban trams and buses complete city access, while Venaria, the Sacra and vineyard country each use a different regional connection. Confirm the precise station, stop or booked driver rather than assuming “near Turin” means a short urban transfer.',
    season: 'Arcades provide useful rain and summer protection, but museum demand and special exhibitions still change entry pressure. Fog, winter conditions, harvest events, heat and weekend road traffic affect Piedmont excursions; rural opening and transport patterns must be checked for the actual day.',
    fallback: 'When a regional branch or reservation fails, retain a complete Turin day built from one major collection, royal public spaces and an arcade walk. Do not replace a cancelled palace, mountain abbey or vineyard transfer with an unverified taxi chain.',
    sources: [
      ['https://turismotorino.org/en/visit/plan-your-trip', 'Turismo Torino — official city and region trip planning'],
      ['https://www.gtt.to.it/cms/en/', 'GTT Torino — official urban transport information'],
      ['https://www.visitlmr.it/en', 'Visit Langhe Monferrato Roero — official regional destination information'],
      ['https://www.trenitalia.com/en.html', 'Trenitalia — official rail planning and service information'],
      ['https://www.museoegizio.it/en/', 'Museo Egizio — official museum information']
    ],
    guides: [
      g({
        slug: 'royal-turin-egyptian-museum',
        name: 'Royal Turin & the Egyptian Museum',
        instrument: 'Two-collection attention spread',
        layout: 'royal-collection-attention-spread',
        structure: 'collection-attention-spread',
        imageQuery: 'Turin Piazza Castello Royal Palace panorama',
        imageAlt: 'Piazza Castello and the Royal Palace complex in Turin',
        purpose: 'Choose the Egyptian Museum or Royal Museums as the day’s main collection, then connect Turin’s civic rooms under the arcades without pretending two large institutions and every royal interior fit at equal depth.',
        summary: 'Enter one collection with a bounded plan, reset in Piazza Castello or Piazza Carignano, and let the arcaded street sequence carry the day to one smaller royal or civic layer.',
        choices: [
          ['Egyptian Museum depth', 'Give the Museo Egizio the central block and preselect the historical questions or galleries that matter. This protects collection attention but makes the Royal Museums a lighter exterior or selective visit.'],
          ['Royal Museums depth', 'Use the current royal-palace, armoury, gallery or archaeological offer as the main complex. This creates a dynastic city reading but sacrifices a complete Egyptian Museum visit.'],
          ['Arcades and civic rooms', 'Keep both institutions short or exterior and connect Piazza Castello, Piazza Carignano and the Po-facing city. This is flexible and weather-aware but loses collection depth.']
        ],
        access: 'Porta Nuova and Porta Susa are both useful but lead into different ends of the centre. The Egyptian Museum and Royal Museums have separate controlled entrances around different civic spaces. Choose the arrival by the first door, and do not assume an arcade-facing façade is the visitor entrance.',
        tradeoff: 'Both collections can occupy most of a day once security, orientation and fatigue are counted. Selecting one as the main argument gives up famous rooms elsewhere, but allows the squares, lunch and urban sequence to remain more than corridors between queues.',
        stages: [
          ['Enter from the useful station side', 'Walk or take urban transport from Porta Nuova or Porta Susa according to the first museum. Save the final station-side route before entering the collection.'],
          ['Work one collection deliberately', 'Follow the museum’s current entry and room status, keeping related galleries together. Stop when attention fades rather than crossing the entire institution for isolated highlights.'],
          ['Reset in a civic room', 'Use Piazza Carignano or Piazza Castello for a real break and exterior reading. Decide here whether the second layer will be royal, archaeological or purely urban.'],
          ['Finish beneath the arcades', 'Follow one sheltered street line toward the chosen square, river edge or station. Avoid doubling back through both museum precincts at closing time.']
        ],
        fallback: 'If the selected museum is unavailable, use Turin’s linked piazzas, arcades and royal exteriors, adding the other institution only when current official admission remains practical. A complete public-realm circuit is preferable to buying several small replacements.',
        watch: [
          ['Museum scale is the main distance', 'Internal standing and reading time outweigh the short street gap. Choose themes before entry and include a seated break.'],
          ['The Royal Museums are a complex', 'Palace, gallery, armoury and archaeology can have different access or closures. Read the current visit rather than assuming every component is open.'],
          ['Arcades do not remove every crossing', 'Large piazzas, tram lines and event barriers still shape movement. Use signed routes and the station approach saved for the return.']
        ],
        duration: 'Allow six to eight hours for one major museum, the civic-square sequence and one lighter second layer. Two full collections should be separate days.',
        combine: 'Combine either museum with Piazza Castello, Piazza Carignano and one arcade line. Keep Venaria, the Sacra and the Langhe as dedicated excursions.',
        verify: 'Check Museo Egizio admission and visitor instructions, the Royal Museums’ current open sections, urban transport notices and any event changes around the central piazzas.',
        sources: [
          ['https://www.museoegizio.it/en/', 'Museo Egizio — official admission and visit information'],
          ['https://museireali.beniculturali.it/en/', 'Musei Reali Torino — official royal-complex information']
        ]
      }),
      g({
        slug: 'venaria-sacra-san-michele',
        name: 'Venaria Reale or Sacra di San Michele',
        instrument: 'Palace-or-abbey branch section',
        layout: 'palace-abbey-hill-section',
        structure: 'hill-town-section',
        imageQuery: 'Sacra di San Michele Piedmont mountain abbey',
        imageAlt: 'Sacra di San Michele rising above the Susa Valley in Piedmont',
        purpose: 'Choose either Venaria’s palace-and-garden threshold or the Sacra di San Michele’s mountain approach as a complete excursion, because the two branches use different transport, terrain and weather contracts and do not form one efficient day.',
        summary: 'Leave Turin through the selected regional gateway, solve the final stop or ascent before admission, give the palace estate or abbey landscape its own day, and return on the same protected branch.',
        choices: [
          ['Venaria palace and gardens', 'Use the official palace product and regional connection for a controlled interior-and-estate day. This is the more structured branch but gives up the mountain setting.'],
          ['Sacra mountain threshold', 'Use Avigliana as the rail gateway, then complete the currently confirmed bus, shuttle, road or walking last mile to the abbey. This gains landscape and pilgrimage context but is more weather- and ability-dependent.'],
          ['Turin royal fallback', 'Stay in Turin for the Royal Museums, arcades and a complete city route when the outer branch is unreliable. This sacrifices the excursion but avoids manufacturing rural access.']
        ],
        access: 'Venaria and the Sacra are not stops on one suburban loop. Venaria uses its current Turin-area public transport or road approach; for the Sacra, Avigliana is the rail gateway and the abbey still requires a separately verified bus, shuttle, road or walking ascent. Record the exact stop, admission door and return before leaving Turin, especially on reduced-service days.',
        tradeoff: 'Venaria rewards palace and garden depth, while the Sacra rewards a slower vertical approach and landscape reading. Combining them would exchange both experiences for transfers. The route sacrifices one headline so the selected threshold remains complete and the return credible.',
        stages: [
          ['Commit to one branch', 'Check the selected site’s opening, ticket or visitor notice and pair it with the actual dated outbound and return transport. Do not depart on a generic regional direction.'],
          ['Solve the final threshold', 'At Venaria, identify the visitor entrance and included estate areas; at Avigliana, confirm the current road, bus, shuttle or walking approach to the Sacra before ascending.'],
          ['Use the place at its real scale', 'Give the palace and gardens or the abbey and ridge enough uninterrupted time. Include security, steps, exposure and a meal rather than adding a second remote attraction.'],
          ['Descend to the same network', 'Leave before the final comfortable connection, return to Avigliana or the verified Venaria stop and keep the Turin arrival separate from any evening reservation.']
        ],
        fallback: 'If the selected branch closes, weather deteriorates or the final transport is uncertain, remain in Turin for a complete royal and arcade day. If already at a gateway, use only the lower town services that are genuinely open and connected to the return.',
        watch: [
          ['“Near Turin” hides two different systems', 'Suburban palace access and a mountain abbey approach cannot share the same timing assumptions. Verify each branch independently.'],
          ['Estate and abbey access can change', 'Events, worship, maintenance, weather and seasonal conditions may alter interiors, gardens or the ascent. Reopen the official site on the travel day.'],
          ['The return begins before closing time', 'Walking down, finding the stop and reaching the valley or urban network all take time. Set a turn-back point before entering the final section.']
        ],
        duration: 'Allow a full six-to-nine-hour excursion from Turin for either Venaria or the Sacra, including the last mile and return. They should not be paired as half-day stops.',
        combine: 'Combine Venaria with its gardens and town edge, or the Sacra with its verified valley gateway. Keep central Turin and the Langhe for other days.',
        verify: 'Check La Venaria Reale or Sacra di San Michele’s current visitor notice, the dated Turin–Avigliana train, exact onward operator and stop, walking or shuttle conditions, weather and the final practical return.',
        sources: [
          ['https://lavenaria.it/en', 'La Venaria Reale — official palace and estate information'],
          ['https://sacradisanmichele.com/en', 'Sacra di San Michele — official visitor information'],
          ['https://www.trenitalia.com/en.html', 'Trenitalia — official Turin–Avigliana rail planning']
        ]
      }),
      g({
        slug: 'langhe-alba-asti',
        name: 'Langhe, Alba & Asti',
        instrument: 'Vine-town sober road folio',
        layout: 'vine-town-road-stage-folio',
        structure: 'road-stage-folio',
        imageQuery: 'Langhe Piedmont vineyard hills Alba landscape',
        imageAlt: 'Vineyard hills and villages in the Langhe area of Piedmont',
        purpose: 'Choose a rail-connected town day or a booked rural circuit, assign all driving before any tasting, and resist presenting Alba, Asti and scattered vineyard villages as a walkable tasting district.',
        summary: 'Reach Alba or Asti as the firm gateway, read one town and meal fully, add rural vineyards only through a reserved transport and appointment plan, and return without making alcohol part of the driving decision.',
        choices: [
          ['Alba rail-and-town day', 'Use Alba as the complete market-town and food base, adding only a walkable or prearranged visit. This is the strongest car-free branch but limits hill-village reach.'],
          ['Asti rail-and-heritage day', 'Build the day around Asti’s station, historic streets and a planned producer or food stop. This keeps the return simple but does not deliver a broad Langhe circuit.'],
          ['Booked vineyard road circuit', 'Use a designated driver, licensed tour or sober private vehicle plan with confirmed appointments. This reaches rural estates but gives up spontaneous tasting and independent timing.']
        ],
        access: 'Alba and Asti have different rail approaches and are not interchangeable labels for the Langhe. Rural estates and hill villages often require road transport beyond the station. Confirm the exact address, appointment, driver and return; never treat a vineyard name as a public-transport stop.',
        tradeoff: 'Rail protects a sober, independent return but restricts the rural radius. A booked road circuit increases landscape and producer access but fixes the schedule and cost. The route gives up either village count or spontaneity so safety and appointments remain real.',
        stages: [
          ['Choose the sober gateway', 'Book the train to Alba or Asti, or name the designated driver and vehicle plan before departure. Keep tasting decisions subordinate to the return contract.'],
          ['Read one town first', 'Walk the selected historic centre, use its market or food context when current, and take a full meal before any rural branch. Locate the station or pickup point again.'],
          ['Enter the hills by appointment', 'Travel to one or two confirmed producers or villages only through the booked road plan. Respect agricultural work, private land and the visit time.'],
          ['Return without improvisation', 'End tastings before the driver or rail cutoff, recover the gateway and keep a service in reserve. Do not add an unbooked cellar on the way back.']
        ],
        fallback: 'If a producer cancels, weather or transport disrupts the rural circuit, retain a complete Alba or Asti town day with current museums, streets, food shops and a sober meal. Do not replace the appointment with roadside tasting stops.',
        watch: [
          ['A tasting is a controlled visit', 'Appointments, language, group size and purchase expectations vary. Confirm directly and arrive at the named estate entrance.'],
          ['Wine and driving require a fixed boundary', 'The driver must be decided before tasting begins. A rental car expands geography but does not create a safe tasting exception.'],
          ['Seasonal events change the town clock', 'Harvest and food events can fill rooms, trains and streets. Check the actual date instead of promising a market or festival year-round.']
        ],
        duration: 'Allow a full day for Alba or Asti and one planned rural layer. A multi-village wine circuit is better with an overnight base and a dedicated driver than as a rushed Turin day trip.',
        combine: 'Combine one gateway town with nearby appointments on the same transport contract. Keep Turin’s museums, Venaria and the Sacra for separate days.',
        verify: 'Check Visit Langhe Monferrato Roero’s current destination guidance, Trenitalia service, every producer appointment, the designated-driver arrangement and any dated event pressure.',
        sources: [
          ['https://www.visitlmr.it/en', 'Visit Langhe Monferrato Roero — official destination information'],
          ['https://www.trenitalia.com/en.html', 'Trenitalia — official rail schedules and service notices']
        ]
      })
    ]
  }),
  c({
    slug: 'genoa-liguria',
    name: 'Genoa & Liguria',
    region: 'Liguria',
    band: 'northwest-adriatic',
    family: 'port-to-cliff-capacity-braid',
    label: 'Port, rail and path braid',
    tagline: 'Choose one coastline operating system before steep lanes, boats and village platforms compete for the same return.',
    hubIntro: 'Genoa’s port, palace streets and vertical neighborhoods form an urban section, while Liguria beyond it narrows into rail platforms, coastal paths and weather-dependent landings. A workable stay separates the city’s elevation from Cinque Terre capacity and the Portofino promontory’s boat-or-trail decision.',
    stay: 'Three nights gives Genoa a full city day and one coast branch with a weather reserve. Four nights supports both Cinque Terre and the Camogli–Portofino side without turning Genoa into a luggage transfer between village platforms.',
    transfer: 'Genova Piazza Principe and Brignole serve different ends of the city, with AMT Metro, buses, lifts and funiculars completing the vertical network. Coastal trains stop at named villages, while Portofino and San Fruttuoso require road, boat or trail connections beyond the nearest rail station.',
    season: 'Summer heat, crowds and limited village space increase platform and path pressure. Rain, wind, sea state, landslide risk and trail work can close the exact link a coast day depends on; the protected railway or mainland-town fallback belongs in the route from the start.',
    fallback: 'Keep Genoa or a rail-connected mainland town as the complete low-risk day. When a boat, trail or village transfer fails, use the same port, palace or seaside corridor and return by the confirmed rail line instead of adding an unverified road detour.',
    sources: [
      ['https://www.visitgenoa.it/en', 'Visit Genoa — official city destination information'],
      ['https://www.amt.genova.it/amt/', 'AMT Genova — official urban transport information'],
      ['https://www.parconazionale5terre.it/', 'Cinque Terre National Park — official park and trail information']
    ],
    guides: [
      g({
        slug: 'genoa-old-port-rolli',
        name: 'Genoa Old Port, Caruggi & Rolli Palaces',
        instrument: 'Port-to-palace elevation circuit',
        layout: 'port-palace-piazza-circuit',
        structure: 'piazza-circuit',
        imageQuery: 'Genoa old port palaces city panorama',
        imageAlt: 'Genoa rising behind the Old Port with historic buildings on the slopes',
        purpose: 'Choose the Old Port, the Rolli palace system or Genoa’s street-and-elevation story as the main layer, then climb through the caruggi once instead of repeatedly crossing between waterfront and upper city.',
        summary: 'Enter from the useful rail or Metro side, read the port at ground level, move through one signed historic-centre line to Via Garibaldi, and finish near a lift, Metro stop or station that avoids an unnecessary descent and reclimb.',
        choices: [
          ['Old Port and one attraction', 'Give the waterfront and one currently open museum or maritime attraction the central block. This suits families and poor weather but leaves the palace interiors lighter.'],
          ['Rolli palace depth', 'Use Via Garibaldi and one or more officially open palace collections as the anchor. This offers the clearest civic-art reading but reduces aquarium or port time.'],
          ['Caruggi and vertical city', 'Keep interiors selective and connect the port, cathedral area, historic lanes and one upper viewpoint or neighborhood transport. This gains urban context but requires more steps and navigation.']
        ],
        access: 'Piazza Principe is practical for the western port side, while Brignole serves the eastern centre; Darsena and San Giorgio Metro stops approach different waterfront sections. Genoa’s lifts and funiculars are transport, not decorative shortcuts. Choose the first door and final elevation before leaving the station.',
        tradeoff: 'A major port attraction, palace collections and a full vertical-city walk cannot all receive depth in one day. Selecting one anchor sacrifices another interior but lets the narrow streets, elevation change and return line form a coherent Genoa rather than a sequence of entrances.',
        stages: [
          ['Meet the port at the right level', 'Arrive from the station or Metro stop that serves the selected waterfront anchor. Identify the uphill exit and final return before entering an attraction.'],
          ['Enter one historic lane line', 'Move from the port through one signed caruggi sequence toward the cathedral or civic squares. Avoid weaving down to the water after every lane.'],
          ['Commit to palace or upper city', 'Use an officially open Rolli collection around Via Garibaldi or take the chosen lift, funicular or walk to an upper layer. Do not attempt both at maximum depth.'],
          ['Leave with gravity on your side', 'Finish near the Metro, a saved descent or the station-facing side of the centre. Keep late hill transport and steep paving out of the final exhausted hour.']
        ],
        fallback: 'If a palace or port attraction closes, retain the Old Port, signed historic streets, Via Garibaldi exteriors and one operating public lift or viewpoint route. In heavy rain, shorten the caruggi section and stay close to Metro-linked interiors.',
        watch: [
          ['Vertical distance is not map distance', 'Closely spaced streets can sit on different levels with stairs, ramps or lifts between them. Save the accessible transport option before climbing.'],
          ['Rolli does not mean every palace is open', 'The system includes buildings with different uses and visitor arrangements. Confirm the exact public collection or event rather than entering a name from a list.'],
          ['Port attractions have independent clocks', 'Aquarium, museums, boats and public waterfront do not share one ticket or closing time. Choose one paid anchor before arrival.']
        ],
        duration: 'Allow six to eight hours for one substantial interior, the port-to-palace circuit and an elevation-aware finish. A public-realm route without a major museum can fit four hours.',
        combine: 'Combine the Old Port with one caruggi-to-Rolli line. Keep Boccadasse, Cinque Terre and the Portofino promontory for separate routes.',
        verify: 'Check Visit Genoa’s current palace and attraction information, the selected entrance, AMT Metro/lift/funicular status and any port event or street-access change.',
        sources: [
          ['https://www.visitgenoa.it/en', 'Visit Genoa — official Old Port and Rolli planning information'],
          ['https://www.amt.genova.it/amt/', 'AMT Genova — official Metro, bus, lift and funicular information']
        ]
      }),
      g({
        slug: 'cinque-terre-rail-trails',
        name: 'Cinque Terre Rail & Trails',
        instrument: 'Rail-path village capacity braid',
        layout: 'rail-path-coast-capacity-braid',
        structure: 'coast-capacity-braid',
        imageQuery: 'Cinque Terre railway village Liguria coast',
        imageAlt: 'A Cinque Terre village compressed between the Ligurian coast and steep hills',
        purpose: 'Choose a one- or two-village rail day or one verified trail segment, and treat platforms, path status, ability and the final train as capacity gates rather than assuming all five villages form one continuous walk.',
        summary: 'Enter through one rail gateway, spend real time in the first village, add one train transfer or open trail only after checking current conditions, and turn back while the protected return still has margin.',
        choices: [
          ['One village in depth', 'Select the village whose harbor, streets or elevation best matches the group and remain long enough for a meal and quieter lanes. This sacrifices count but is most resilient.'],
          ['Two-village rail day', 'Use the current rail service for one deliberate contrast, allowing platform and crowd time. This gains variety but leaves no room for a long trail.'],
          ['One official open trail', 'Choose a park-listed route that matches ability, weather and equipment, using rail for the other leg. This gains landscape continuity but sacrifices village and museum depth.']
        ],
        access: 'La Spezia and Levanto are common rail gateways, but every village has its own small station and circulation limits. Trail entrances do not automatically begin at the platform, and a ticket product does not prove a path is open. Build the day from the named train and park status for the actual date.',
        tradeoff: 'Five village names fit on a rail diagram more easily than five useful visits fit in a day. Choosing one trail or two villages gives up checklist coverage but preserves food, stairs, platform queues and an early response to disruption.',
        stages: [
          ['Enter through one rail gateway', 'Start from La Spezia, Levanto or the selected base with the current train pattern and final return saved. Avoid luggage on village platforms.'],
          ['Give the first village depth', 'Leave the station, orient to the harbor or upper streets and take a real break. Locate the return platform before committing to a trail or second train.'],
          ['Use one coast connector', 'Take one rail hop or one officially open trail that matches the plan. If conditions or crowding weaken it, deepen the first village instead.'],
          ['Exit before capacity tightens', 'Return to the gateway with a later train in reserve where possible. Do not wait for the final useful service after a strenuous climb or crowded sunset.']
        ],
        fallback: 'If trails close or village trains become severely disrupted, stay in La Spezia, Levanto or the accessible first village for a complete waterfront and town day. A boat is an alternative only when its named operator, sea state and return are independently verified.',
        watch: [
          ['Trail status overrides reputation', 'Famous path names can be closed, restricted or unsuitable after rain. Use the park’s current status and equipment guidance on the day.'],
          ['Small platforms amplify crowds', 'Boarding pressure and service changes can consume a tight connection. Keep village count low and do not stand beyond marked safe areas.'],
          ['A coast boat is not a rescue train', 'Sea services use separate piers, weather limits and stopping patterns. Never assume one will recover a missed rail return.']
        ],
        duration: 'Allow a full day for two villages by rail or one village plus one verified trail. Attempting all five is inventory, not an executable first visit.',
        combine: 'Combine adjacent villages only through the current rail or an open official path. Keep Genoa and the Portofino promontory as separate route days.',
        verify: 'Check Cinque Terre National Park trail status and access products, Trenitalia service notices, the exact first and final trains, weather and any village-specific circulation rule.',
        sources: [
          ['https://www.parconazionale5terre.it/', 'Cinque Terre National Park — official trail and visitor information'],
          ['https://www.trenitalia.com/en.html', 'Trenitalia — official coastal rail schedules and notices']
        ]
      }),
      g({
        slug: 'camogli-portofino-san-fruttuoso',
        name: 'Camogli, Portofino & San Fruttuoso',
        instrument: 'Gulf-landing return docket',
        layout: 'gulf-boat-return-billet',
        structure: 'island-return-billet',
        imageQuery: 'San Fruttuoso abbey bay Liguria',
        imageAlt: 'The abbey and small bay of San Fruttuoso on the Portofino promontory',
        purpose: 'Choose a rail-town day, a Portofino road-and-waterfront visit or a San Fruttuoso boat or trail landing, then protect the mainland return before weather and promontory geography remove the connection.',
        summary: 'Use Camogli or another named rail gateway, confirm the boat, bus or trail branch before leaving it, make one promontory commitment and return to the same rail corridor with daylight and a service in reserve.',
        choices: [
          ['Camogli rail-and-town day', 'Use the station, seafront, old streets and a bounded coastal walk as a complete visit. This is the most resilient branch but gives up Portofino and San Fruttuoso.'],
          ['Portofino via a verified gateway', 'Reach Portofino through the current bus, road or boat connection from its practical mainland side. This provides harbor and promontory context but adds capacity and return pressure.'],
          ['San Fruttuoso landing or hike', 'Use an operating boat or a park-approved trail plan with the required ability and daylight. This gains the remote bay but is the least flexible option.']
        ],
        access: 'Camogli has a rail station above its waterfront; Portofino has no rail station and needs an onward connection; San Fruttuoso is reached through water or trail access rather than an ordinary road arrival. Confirm the exact pier, bus stop or park route and the final mainland connection before departure.',
        tradeoff: 'The three names describe different access contracts, not a simple coastal chain. Choosing San Fruttuoso sacrifices spontaneity, while choosing Camogli sacrifices the remote landing. One complete branch is safer and more meaningful than a rushed boat-bus-trail triangle.',
        stages: [
          ['Claim the mainland gateway', 'Arrive by rail, descend to the correct town or pier and confirm the current branch plus return before walking away from the station.'],
          ['Read the first coast room', 'Give Camogli or the selected mainland harbor time for streets, food and orientation. Do not board simply because a boat is loading.'],
          ['Commit to one promontory threshold', 'Take the named ferry, bus or verified trail to Portofino or San Fruttuoso. Match the route to sea state, ability and the group’s return margin.'],
          ['Recover the rail corridor', 'Leave the remote stop before the final practical connection, regain Camogli, Santa Margherita or the chosen gateway and keep the last station climb inside the clock.']
        ],
        fallback: 'If boats are suspended or the park route is unsuitable, retain Camogli or the selected mainland town as the full day. Use a lower coastal path only when the park lists it open; do not improvise a cliff route or depend on an unbooked water taxi.',
        watch: [
          ['The boat timetable is also a weather report', 'Published service can still change with sea state. Recheck at the operator and identify the land fallback before boarding.'],
          ['Promontory trails are not waterfront strolls', 'Elevation, surfaces, heat and exposed sections require the correct route, footwear and turn-back decision.'],
          ['Harbor names hide different return networks', 'A picturesque landing may not connect directly to the rail station. Save every final bus, boat and uphill walk as separate legs.']
        ],
        duration: 'Allow a full day for one Portofino-promontory branch from the rail corridor. Camogli alone can fill four to six hours; San Fruttuoso should never be a late unverified add-on.',
        combine: 'Combine Camogli with one operating Portofino or San Fruttuoso branch. Keep Cinque Terre and central Genoa for separate days.',
        verify: 'Check Portofino Park’s current trail notices, the ferry operator’s exact dated departures and piers, sea and weather conditions, onward bus or rail service and the final daylight margin.',
        sources: [
          ['https://www.parcoportofino.it/', 'Portofino Regional Park — official trail and access information'],
          ['https://traghettiportofino.it/en/', 'Servizio Marittimo del Tigullio — official boat routes and timetables']
        ]
      })
    ]
  }),
  c({
    slug: 'marche-abruzzo',
    name: 'Marche & Abruzzo',
    region: 'Marche & Abruzzo',
    band: 'central',
    family: 'ridge-to-adriatic-thresholds',
    label: 'Coast-to-ridge gateway file',
    tagline: 'Name the bus, headland or park gateway before crossing from the Adriatic railway into the hills.',
    hubIntro: 'The Adriatic rail spine makes Pesaro and Ancona look simple, but Urbino, Monte Conero and Abruzzo’s mountain parks begin only after distinct bus, road, trail and weather thresholds. A useful regional plan separates the coast-to-hill transfer from the destination day and never treats two large national parks as adjacent attractions.',
    stay: 'Two nights supports Pesaro with one Urbino day or Ancona with one Conero branch. Abruzzo’s parks deserve their own inland base and weather reserve; four or more nights are more realistic when combining a Marche coast stay with one mountain gateway.',
    transfer: 'Pesaro and Ancona sit on the Adriatic railway, while Urbino requires a bus connection and Conero trail or beach access depends on the selected town and seasonal road or transit pattern. Gran Sasso and Majella have multiple gateways; choose the exact valley, visitor centre, road or lift before booking accommodation.',
    season: 'Beach access, headland buses and road pressure change sharply in summer, while rain, heat and fire conditions affect Conero paths. Snow, wind, storms, road closures and lift operations control the mountain parks. A city or lower-valley fallback is part of the itinerary, not an afterthought.',
    fallback: 'Use Pesaro, Ancona or the chosen Abruzzo gateway town as a complete lower-risk day when an inland bus, trail, beach descent, road or mountain system fails. Do not cross to another park or coast simply because the original headline is unavailable.',
    sources: [
      ['https://www.adriabus.eu/', 'Adriabus — official Pesaro and Urbino area bus information'],
      ['https://www.parcodelconero.org/', 'Parco del Conero — official headland and trail information'],
      ['https://www.gransassolagapark.it/', 'Gran Sasso and Monti della Laga National Park — official park information']
    ],
    guides: [
      g({
        slug: 'urbino-pesaro',
        name: 'Urbino & Pesaro',
        instrument: 'Coast-to-hill bus ledger',
        layout: 'coast-to-hill-bus-section',
        structure: 'hill-town-section',
        imageQuery: 'Urbino Ducal Palace Marche panorama',
        imageAlt: 'The Ducal Palace and hill town of Urbino in the Marche',
        purpose: 'Choose Pesaro as a rail-connected city, Urbino as a hill-town and collection day, or a carefully timed split, and make the Adriabus connection plus the steep final streets visible before leaving the coast.',
        summary: 'Arrive at Pesaro station, decide whether the coast or Urbino owns the day, board the verified hill bus when selected, and protect the same corridor back rather than treating Urbino as a walkable rail stop.',
        choices: [
          ['Urbino and the national gallery', 'Use the Pesaro–Urbino bus as the fixed transfer and give the Ducal Palace collection plus hill streets the main block. This gains Renaissance depth but leaves Pesaro as a gateway only.'],
          ['Pesaro city and coast', 'Keep the day rail-connected around Pesaro’s centre, cultural sites and seafront according to current access. This is the most resilient branch but gives up Urbino.'],
          ['A bounded split day', 'Use an early verified bus for one focused Urbino interior, then return for a short Pesaro evening. This provides contrast but sacrifices depth and is least tolerant of a missed bus.']
        ],
        access: 'Urbino has no mainline railway station; the practical public-transport chain begins at Pesaro railway station and continues on a dated Adriabus service to a named Urbino stop. The Ducal Palace and historic centre sit in a steep pedestrian environment, so the bus arrival, museum entrance and return stop must be saved separately.',
        tradeoff: 'A serious National Gallery of the Marche visit and a complete Pesaro cultural-and-coast day both deserve time. The split branch buys two settings but gives up a relaxed collection, meal and service reserve. The route makes that sacrifice explicit before boarding.',
        stages: [
          ['Claim the coastal gateway', 'Arrive at Pesaro station, locate the correct Adriabus stop and confirm the day’s return services. Leave luggage at the accommodation or verified facility rather than carrying it into Urbino.'],
          ['Climb by the published connection', 'Board the named bus and note the Urbino arrival and departure stop. If the service is missed or full, activate the Pesaro branch instead of improvising a road transfer.'],
          ['Use one hill-town anchor', 'Enter the Galleria Nazionale delle Marche through its current visitor route, then follow one bounded Urbino street circuit with a proper break and realistic gradients.'],
          ['Descend before the service gap', 'Reach the saved stop with margin, return to Pesaro and end near the station or seafront only if the remaining daylight and energy support it.']
        ],
        fallback: 'If the Urbino bus or gallery visit fails, retain Pesaro as the complete day with its walkable centre, current cultural attractions and seafront. If already in Urbino during a museum closure, keep the public hill-town circuit and take the protected bus back.',
        watch: [
          ['Bus patterns vary by day type', 'School, Sunday and holiday service can differ. Check the actual date and both directions rather than saving one outbound result.'],
          ['Urbino’s gradient is part of the visit', 'Steep lanes, paving and museum standing affect the group. Use the bus stop and accessible visitor information that match real mobility needs.'],
          ['The palace collection needs attention', 'A late arrival turns a major national gallery into a rushed room count. Cut the Pesaro add-on before compressing the museum.']
        ],
        duration: 'Allow a full day from Pesaro for Urbino and the National Gallery. Pesaro itself can fill a separate four-to-six-hour city day; a split needs an early bus and strict cutoff.',
        combine: 'Combine Urbino with its Ducal Palace and one hill-town circuit, or keep Pesaro as a complete coast city. Do not add Ancona, Conero or an Abruzzo park to this day.',
        verify: 'Check the Galleria Nazionale delle Marche’s current admission, Adriabus’s dated Pesaro–Urbino service and stops, rail disruption, mobility conditions and the final practical return.',
        sources: [
          ['https://www.gndm.it/visita/', 'Galleria Nazionale delle Marche — official visit information'],
          ['https://www.adriabus.eu/', 'Adriabus — official Pesaro–Urbino bus information']
        ]
      }),
      g({
        slug: 'ancona-conero',
        name: 'Ancona & Monte Conero',
        instrument: 'Headland-and-beach access weave',
        layout: 'headland-beach-capacity-braid',
        structure: 'coast-capacity-braid',
        imageQuery: 'Monte Conero Adriatic coast Marche cliffs',
        imageAlt: 'The forested Monte Conero headland above the Adriatic Sea',
        purpose: 'Choose Ancona’s port-and-hill city, a Sirolo or Numana coast base, or one verified Conero trail and beach approach, because viewpoints, steep descents and seasonal transport cannot be combined by coastline proximity alone.',
        summary: 'Begin at Ancona station or a named Conero gateway, make one climb or coastal transfer, commit to one headland or beach layer and return before road, trail and evening-service pressure converge.',
        choices: [
          ['Ancona port and hill city', 'Use the rail-connected city, harbor viewpoints and one cultural layer as the complete day. This protects transport but gives up a deep Conero beach or trail.'],
          ['Sirolo or Numana coast day', 'Travel to one verified town gateway and use its streets, viewpoint and accessible shore connection. This gains coast time but depends on the current bus or road return.'],
          ['One Conero trail', 'Choose a park-listed path that matches weather, fire status, ability and the intended exit. This gains landscape depth but sacrifices a broad beach-and-city circuit.']
        ],
        access: 'Ancona railway station is not the same as the hilltop cathedral or every port entrance. The Conero headland is reached through named towns, stops, roads and trailheads; individual beaches may involve steep paths, shuttles or seasonal restrictions. Choose the exact gateway before leaving the railway.',
        tradeoff: 'Ancona’s urban climb, a Conero trail and a beach descent each use the group’s elevation budget. Selecting one major vertical move gives up another, but protects the return and prevents an attractive coastal map from hiding difficult access.',
        stages: [
          ['Set the Adriatic gateway', 'At Ancona or the selected coast base, save the return platform, bus stop or parking exit and check the park’s current status before committing uphill.'],
          ['Choose city hill or headland', 'Follow one signed Ancona route toward its civic and port viewpoints, or travel directly to Sirolo, Numana or the named trailhead. Do not cross between branches mid-day.'],
          ['Use one vertical layer', 'Complete the chosen town circuit, beach approach or official trail with a turn-back time, water and footwear appropriate to the surface.'],
          ['Recover the coast network', 'Climb back from the shore or leave the headland before the service and road peak, then regain Ancona station or the accommodation base with a connection in reserve.']
        ],
        fallback: 'If the park closes trails, fire or weather conditions deteriorate, or beach access is unsuitable, keep a complete Ancona city-and-port day. If already at Sirolo or Numana, remain in the town and viewpoints without forcing a steep shore descent.',
        watch: [
          ['A visible beach may not be an easy beach', 'Cliffs, steps, path conditions and seasonal access separate the viewpoint from the water. Use official access guidance for the exact beach.'],
          ['Fire and heat can close the landscape', 'Do not treat a generic forecast as park permission. Check official notices and remove the trail before leaving the gateway.'],
          ['Ancona has multiple vertical routes', 'Port, station, centre and cathedral occupy different levels. Save the bus, lift or walking line that serves the final return.']
        ],
        duration: 'Allow a full day for Ancona plus one bounded hill line, or for one Conero town and trail or beach branch. A city-headland-beach sweep is not a useful first-day promise.',
        combine: 'Combine Ancona with its port and one upper-city line, or one Conero gateway with one trail or beach. Keep Urbino and the Abruzzo parks for other days.',
        verify: 'Check Parco del Conero’s trail, fire and access notices, Ancona’s current visitor information, the exact regional bus or road gateway, beach access and the final return.',
        sources: [
          ['https://www.parcodelconero.org/', 'Parco del Conero — official trails and access notices'],
          ['https://anconatourism.it/', 'Ancona Tourism — official city visitor information']
        ]
      }),
      g({
        slug: 'abruzzo-national-parks',
        name: 'Abruzzo National Parks',
        instrument: 'Three-park gateway status stack',
        layout: 'park-gateway-summit-stack',
        structure: 'summit-operating-stack',
        imageQuery: 'Gran Sasso Abruzzo mountain landscape Italy',
        imageAlt: 'High mountain landscape in Gran Sasso and Monti della Laga National Park',
        purpose: 'Choose Gran Sasso, Majella or Abruzzo–Lazio–Molise National Park, name one valley or mountain gateway and a route that matches current conditions, and keep a complete lower-level day instead of treating Abruzzo’s protected areas as one drive-through park.',
        summary: 'Base near the selected park, check its authority and gateway before departure, ascend only through the verified road, lift or trail system, and descend while weather, daylight and the final transport remain strong.',
        choices: [
          ['Gran Sasso gateway', 'Use a named approach such as the current Fonte Cerreto–Campo Imperatore system or another park-approved valley route. This gains high plateau scale but is sensitive to wind, snow, road and lift status.'],
          ['Majella gateway', 'Base around a verified town such as Caramanico Terme and select one park-listed valley, hermitage or mountain route. This offers a different limestone landscape but cannot be added to Gran Sasso in the same day.'],
          ['Abruzzo–Lazio–Molise gateway', 'Choose one official park gateway such as Pescasseroli or another authority-listed town and one habitat or valley route. This gains wildlife and forest context but cannot be appended to Gran Sasso or Majella.']
        ],
        access: 'None of the three national parks has one entrance or one universal station. Gran Sasso access changes by the chosen L’Aquila, Teramo or plateau side; Majella uses separate towns and valleys such as Caramanico Terme; Abruzzo–Lazio–Molise has its own gateway towns and roads. Name the base, transport leg, trailhead and descent before departure.',
        tradeoff: 'Driving between distant gateways or changing parks after a closure consumes the safety margin needed for the mountain itself. One park and one operating layer sacrifices regional coverage but preserves interpretation, daylight and an honest fallback.',
        stages: [
          ['Confirm one park authority', 'Open the chosen park’s current notices, weather and access information, then match them to one named gateway and route. Do not depart with only a regional map pin.'],
          ['Enter through the lower threshold', 'Reach the visitor centre, town, Fonte Cerreto system or selected trailhead and reassess wind, road, lift and group ability before ascending.'],
          ['Use one altitude layer', 'Complete the approved low, middle or high route without stacking a second valley. Carry the required water, clothing and navigation, and observe protected-area rules.'],
          ['Descend before the margin disappears', 'Turn back at the planned time, recover the road, lift or transport gateway and reach the base before darkness or a final operating cutoff.']
        ],
        fallback: 'If high roads, lifts or trails close, remain at the selected gateway for the visitor centre, town heritage and a low-level park-approved walk. Do not transfer to the other national park on the assumption that conditions will be better there.',
        watch: [
          ['Park scale defeats vague access', 'A park name can span many valleys and hours of road travel. The exact gateway and route must appear in the day plan and accommodation choice.'],
          ['Altitude changes faster than the city forecast', 'Wind, snow, heat and storms can alter roads, lifts and trails independently. Use the park authority and local conditions at the threshold.'],
          ['Remote returns need redundancy', 'Mobile coverage, roadside services and public transport can be limited. Carry offline details, leave the route with a responsible contact and turn back before the final option.']
        ],
        duration: 'Give any one of the three parks a full day from a nearby inland base, plus a weather reserve when a high route matters. None is a credible casual add-on from Rome or the Adriatic coast without a precise transport contract.',
        combine: 'Combine one park gateway with one altitude or habitat layer and its lower town. Keep the other parks, Conero and Urbino for separate days and bases.',
        verify: 'Check the selected park authority and exact gateway for road, lift, trail, fire, snow, wildlife and weather status; confirm accommodation-side transport, daylight and the final descent before leaving.',
        sources: [
          ['https://www.gransassolagapark.it/', 'Gran Sasso and Monti della Laga National Park — official access and conditions'],
          ['https://www.parcomajella.it/', 'Majella National Park — official routes and visitor information'],
          ['https://www.parcoabruzzo.it/', 'Abruzzo, Lazio and Molise National Park — official visitor information']
        ]
      })
    ]
  })
];
