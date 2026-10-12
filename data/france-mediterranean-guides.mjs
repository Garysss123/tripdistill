import { defineFranceCluster, franceGuide } from './france-guide-builder.mjs';

const g = franceGuide;
const c = defineFranceCluster;

export const franceMediterraneanClusters = [
  c({
    slug: 'languedoc-camargue',
    name: 'Montpellier, Nîmes & the Camargue',
    region: 'Occitanie and western Provence',
    band: 'mediterranean-island',
    family: 'stone-lagoon-tram-sheet',
    label: 'Stone and lagoon sheet',
    tagline: 'Separate the tram city, Roman corridor and wetland road system.',
    hubIntro: 'Montpellier, Nîmes and Arles sit on a strong rail corridor, but the Pont du Gard, Camargue wetlands and coast require distinct buses, bicycles, tours or cars. Roman monuments, living cities and protected lagoons should not be collapsed into one hot-weather checklist.',
    stay: 'Three or four nights support two city days and one landscape excursion. Montpellier offers urban transit and coast links; Nîmes centers the Roman corridor; Arles shortens access to the Camargue and Alpilles.',
    transfer: 'TER trains join the main cities, while the Pont du Gard and wetland sites use seasonal buses, road approaches or tours. Know the exact station—Montpellier Saint-Roch versus Sud de France also matters for timed connections.',
    season: 'Summer heat, mistral, mosquitoes, fire controls and festival calendars shape the region. Wetland water levels and bird presence vary naturally; advertised wildlife is never guaranteed.',
    fallback: 'Use city museums, markets and shaded historic routes when heat or wind undermines open landscapes. If a wetland road or trail closes, remain in Arles or use an official visitor center rather than entering a restricted track.',
    sources: [
      ['https://www.visit-occitanie.com/en/', 'Occitanie Tourism — official regional guide'],
      ['https://www.ter.sncf.com/occitanie', 'liO Train / TER Occitanie — official rail information'],
      ['https://meteofrance.com/', 'Météo-France — official weather and fire-risk context']
    ],
    guides: [
      g({
        slug: 'montpellier-sete',
        name: 'Montpellier & Sète',
        instrument: 'Tram-to-lagoon urban line',
        layout: 'tram-lagoon-diptych',
        imageQuery: 'Montpellier Place de la Comedie France city',
        imageAlt: 'Place de la Comédie and central Montpellier architecture',
        purpose: 'Decide whether Montpellier’s pedestrian center and contemporary districts or Sète’s canals and port carry the day, then use the rail corridor without adding a fragile beach transfer.',
        summary: 'Walk Montpellier from Écusson to one tram-served modern district, or take a direct train to Sète for canals, market and Mont Saint-Clair; a two-city day must stay selective.',
        choices: [
          ['Montpellier old and new', 'Connect Écusson, Peyrou and one contemporary district by tram. This shows the city’s layers without a coastal transfer.'],
          ['Sète canal and port city', 'Use the station-to-canals route, market and one museum or Mont Saint-Clair connection. Fishing-port work remains distinct from visitor space.'],
          ['Two-city rail day', 'Keep Montpellier to a compact center and Sète to a canal loop, using frequent rail only when the exact schedule leaves a backup.']
        ],
        access: 'Montpellier Saint-Roch is central; Montpellier Sud de France is outside the historic core and requires a connector. Sète station is north of the canal center. Read the ticket before assuming either arrival is walkable.',
        tradeoff: 'Adding a beach, long museum and both cities turns the day into transfers. The route keeps one urban argument in depth or two bounded city loops.',
        stages: [
          ['Enter through the correct station', 'At Montpellier, distinguish Saint-Roch from Sud de France; at Sète, identify the canal route and final station return.'],
          ['Read the first city’s structure', 'Use Écusson and Peyrou or Sète’s canal and market spine, placing exposed climbs outside the hottest hours.'],
          ['Commit to one second layer', 'Take tram to a modern Montpellier district, climb or bus toward Mont Saint-Clair, or board the regional train for the other city.'],
          ['Finish near rail or tram', 'End with a meal close to a direct return line, not at a distant beach whose bus service has thinned.']
        ],
        fallback: 'In heat, storms or strong wind, use Montpellier museums and tram-linked interiors or Sète’s museum and canal center. If the rail corridor is disrupted, stay in the city already reached.',
        watch: [
          ['Two Montpellier stations are not equivalent', 'A TGV arrival at Sud de France needs transfer time and may affect the last train.'],
          ['Mont Saint-Clair adds a real climb', 'Use the current bus or limit the route when heat and mobility make the ascent unsuitable.'],
          ['Ports are workplaces', 'Stay clear of loading, auction and boat operations; use designated visitor paths.']
        ],
        duration: 'Allow five to seven hours for either city and eight to ten for a selective two-city day. A beach block should replace the second city.',
        combine: 'Combine Montpellier and Sète only along the rail line. Keep Nîmes, Pont du Gard and the Camargue for separate days.',
        verify: 'Check exact station, TaM tram or Sète bus, market and museum hours, heat or wind and the final regional train.',
        sources: [
          ['https://www.montpellier-france.com/', 'Montpellier Tourism — official city planning'],
          ['https://en.tourisme-sete.com/', 'Sète Tourist Office — official port and city guide']
        ]
      }),
      g({
        slug: 'nimes-pont-du-gard',
        name: 'Nîmes & Pont du Gard',
        instrument: 'Roman-waterworks transit ruler',
        layout: 'roman-aqueduct-ruler',
        imageQuery: 'Pont du Gard Roman aqueduct France landscape',
        imageAlt: 'The Roman Pont du Gard aqueduct crossing the Gardon valley',
        purpose: 'Read Nîmes’s Roman monuments as an urban circuit, then reach the Pont du Gard through a verified bus or road connection with time for the museum and landscape.',
        summary: 'Use the Arena, Maison Carrée and Jardins de la Fontaine as one city line; the aqueduct is a separate rural site whose last bus and heat exposure determine the pairing.',
        choices: [
          ['Roman Nîmes', 'Keep the Arena, Maison Carrée, Musée de la Romanité and fountain gardens together. This is a full city day.'],
          ['Pont du Gard in depth', 'Give the aqueduct, museum, trails and river context most of the day. Access and return are the main contract.'],
          ['City plus aqueduct', 'Use one or two Nîmes monuments early and a confirmed afternoon bus or car to the Pont du Gard. This sacrifices museum depth.']
        ],
        access: 'Nîmes Centre is walkable to the Roman core; Nîmes Pont du Gard TGV station is not the monument. Reach the actual Pont du Gard site by the current regional bus, tour, bicycle or car and confirm the return stop.',
        tradeoff: 'A complete museum visit, all Nîmes monuments and the aqueduct do not fit comfortably into one day. The route chooses one deep layer and one abbreviated layer.',
        stages: [
          ['Start on the Nîmes civic axis', 'Walk from Nîmes Centre toward the Arena and Maison Carrée, identifying the bus departure or vehicle route for later.'],
          ['Complete one Roman city anchor', 'Use the Arena or Musée de la Romanité as the main interior, then connect the fountain gardens only if time and heat allow.'],
          ['Travel to the actual aqueduct site', 'Board the named regional service or drive to the official visitor area, not the similarly named TGV station.'],
          ['Read structure and landscape, then return', 'Use the museum and signed viewpoints, respecting river and trail restrictions, and leave before the last bus or closing traffic peak.']
        ],
        fallback: 'If the Pont du Gard bus or site access fails, remain in Nîmes for the Roman museum and gardens. If heat makes the exposed aqueduct route unsuitable, use the museum and nearest shaded viewpoints only.',
        watch: [
          ['The TGV name causes a major error', 'Nîmes Pont du Gard station is not walking access to the monument. Use the official site directions.'],
          ['Stone and river heat build quickly', 'Carry water, use shade and follow fire or bathing restrictions.'],
          ['Monument tickets are separate products', 'Check which Nîmes sites a pass covers and whether timed entry applies.']
        ],
        duration: 'Allow five to seven hours for Nîmes alone and a full day for the Pont du Gard plus a short city block. The aqueduct site deserves at least three to four hours.',
        combine: 'Combine one Nîmes anchor with the Pont du Gard only on a verified connection. Keep Arles and the Camargue separate.',
        verify: 'Check monument openings, actual Pont du Gard access, liO bus, heat or fire notices and the final return before leaving Nîmes.',
        sources: [
          ['https://www.nimes-tourisme.com/en/', 'Nîmes Tourism — official city planning'],
          ['https://pontdugard.fr/en', 'Pont du Gard — official access and visitor information']
        ]
      }),
      g({
        slug: 'arles-camargue',
        name: 'Arles & the Camargue',
        instrument: 'Monument-to-wetland field log',
        layout: 'roman-wetland-fieldlog',
        imageQuery: 'Arles Roman arena Camargue France',
        imageAlt: 'Roman arena and historic stone buildings in Arles',
        purpose: 'Use Arles as a complete Roman and artistic city, adding one Camargue visitor route only through an official road, bicycle, bus or guided plan that respects protected wetlands.',
        summary: 'Arles’s monuments and Rhône streets deserve their own circuit; the Camargue is a living wetland and agricultural region, not a guaranteed flamingo-and-horse drive-by.',
        choices: [
          ['Roman Arles', 'Use the arena, theater, Alyscamps or archaeological museum selectively through a current pass or tickets. This is a full city day.'],
          ['Art and Rhône city', 'Trace Van Gogh context carefully without presenting modern streets as preserved canvases, then use museums and river edges.'],
          ['Camargue field day', 'Choose one official visitor center, signed wetland route or guided excursion with transport, weather and closing time confirmed.']
        ],
        access: 'Arles station is north of the center and walkable to the Roman core. Camargue sites spread south across roads and lagoons; a car, bicycle, seasonal bus or tour must be matched to one named destination.',
        tradeoff: 'A deep Arles monument day and substantial Camargue excursion cannot share equal time. The route gives up one so protected landscapes are not reduced to a rushed roadside loop.',
        stages: [
          ['Enter Arles from the station', 'Walk toward the arena or Rhône, noting the return and heat. Buy only the monument product that matches the chosen sites.'],
          ['Read one city narrative', 'Follow Roman structures or art-and-river context, limiting interiors so lunch and any wetland departure remain realistic.'],
          ['Commit to city depth or one wetland site', 'Continue to a museum, or meet the arranged Camargue transport and follow official roads and trails.'],
          ['Return before dusk changes the road contract', 'Leave the wetland with daylight and fuel margin, or finish the city loop close to the station.']
        ],
        fallback: 'If wind, heat, fire risk or access removes the Camargue, stay in Arles for museums and monuments. If city sites close for events, use the Rhône and current museum alternatives rather than entering restricted wetland tracks.',
        watch: [
          ['Wildlife is not guaranteed', 'Observe from designated areas, keep distance and never bait or pursue birds, horses or cattle for photographs.'],
          ['Wetland roads and trails can close', 'Flood, fire, breeding seasons and management work override saved routes.'],
          ['Festival access reshapes Arles', 'Major events change monument hours, streets and accommodation; check the exact date.']
        ],
        duration: 'Allow six to eight hours for Arles and a separate full day for the Camargue from a suitable base. A short visitor-center excursion can pair only with a limited city morning.',
        combine: 'Combine Arles with one nearby official wetland site when transport is firm. Keep Saintes-Maries, Aigues-Mortes and multiple reserves for separate routes.',
        verify: 'Check Arles monument and event calendar, Camargue park notices, chosen visitor center, road or bus access, wind, heat and fire restrictions.',
        sources: [
          ['https://www.arlestourisme.com/en/', 'Arles Camargue Tourism — official city and region planning'],
          ['https://www.parc-camargue.fr/', 'Camargue Regional Nature Park — official protected-area information']
        ]
      })
    ]
  }),
  c({
    slug: 'provence-inland',
    name: 'Avignon, Aix & the Luberon',
    region: 'Provence',
    band: 'mediterranean-island',
    family: 'papal-market-village-folio',
    label: 'Papal city and village folio',
    tagline: 'Choose one city base and one inland landscape instead of chasing every market.',
    hubIntro: 'Avignon and Aix-en-Provence are independent city bases with different station and street logic. The Luberon’s villages, abbeys and seasonal landscapes require a bus, bicycle, tour or car; market calendars and summer roads shape what is possible.',
    stay: 'Three nights support both cities or one city plus a Luberon day. Avignon is stronger for rail and western Provence; Aix suits eastern Provence and Marseille links. A village overnight can reduce driving but adds a luggage and bus problem.',
    transfer: 'Avignon Centre and Avignon TGV are separate stations; Aix Centre and Aix-en-Provence TGV are also separate. Luberon villages rarely form an easy linear public-transport loop, so pick one cluster.',
    season: 'Summer brings heat, festivals, lavender expectations and road pressure; bloom timing is agricultural and variable, not guaranteed. Mistral, fire restrictions and winter closures change outdoor routes.',
    fallback: 'Use city museums, markets and shaded architecture when rural heat, wind or fire controls intervene. A cancelled village bus should become a deeper city day, not a taxi chain across Provence.',
    sources: [
      ['https://provence-alpes-cotedazur.com/en/', 'Provence-Alpes-Côte d’Azur tourism — official regional guide'],
      ['https://www.ter.sncf.com/sud-provence-alpes-cote-d-azur', 'TER ZOU! — official regional rail information'],
      ['https://zou.maregionsud.fr/en/', 'ZOU! — official regional bus and train planning']
    ],
    guides: [
      g({
        slug: 'avignon-papal-city',
        name: 'Avignon Papal City & Rhône Edge',
        instrument: 'Wall-gate papal itinerary',
        layout: 'walled-city-itinerary',
        imageQuery: 'Avignon Palais des Papes Pont France panorama',
        imageAlt: 'Palace of the Popes and historic Avignon skyline',
        purpose: 'Connect the Palais des Papes, Pont d’Avignon and walled streets in one route while distinguishing the central and TGV stations and accounting for festival access.',
        summary: 'Enter through the walls from Avignon Centre, anchor the day on the papal palace or museums, then finish at the Rhône without looping back through every commercial lane.',
        choices: [
          ['Palais des Papes', 'Reserve the palace and give its rooms, interpretation and scale the main block. The bridge becomes a shorter second visit.'],
          ['Walls, museums and Rhône', 'Use the palace exterior, Petit Palais or another collection, Rocher des Doms and river edge. This is more flexible than a timed palace route.'],
          ['Festival city', 'Attend a specific programmed event and build sightseeing around its venue and security. Festival tickets replace, not supplement, a full monument day.']
        ],
        access: 'Avignon Centre is just outside the walls; Avignon TGV requires a regional connector. Read the ticket carefully and allow festival or security diversions before a timed palace entry.',
        tradeoff: 'The palace, bridge, several museums and a Luberon excursion do not fit one day. The route keeps Avignon inside its walls and river edge, giving up the rural add-on.',
        stages: [
          ['Enter through the correct station and gate', 'From Avignon Centre, walk through the walls; from TGV, complete the connector first. Note the evening gate and station route.'],
          ['Anchor at the papal quarter', 'Use the palace reservation or exterior and nearby museum, following current one-way circulation and event closures.'],
          ['Climb once to river context', 'Move through Rocher des Doms toward the bridge and Rhône, avoiding repeated uphill returns to the palace square.'],
          ['Exit along a direct street line', 'Finish near a gate serving Avignon Centre or the connector, with meal time outside the most crowded square.']
        ],
        fallback: 'If palace access changes, use the Petit Palais, city museums, walls and Rhône route where open. During extreme heat, move the bridge and gardens early or late and prioritize shaded interiors.',
        watch: [
          ['Two stations alter every connection', 'Avignon TGV is not a walk into the walls. Confirm the shuttle or regional train.'],
          ['Festival streets are operational spaces', 'Venues, queues and temporary closures can block the shortest route. Follow current city guidance.'],
          ['The palace is physically demanding', 'Large stone rooms, stairs and limited seating may affect mobility; read official accessibility information.']
        ],
        duration: 'Allow five to seven hours for the walled city and palace, or a full day during a programmed festival visit. The bridge and palace each need separate admission time.',
        combine: 'Combine the papal quarter with the Rhône edge. Keep Nîmes, Arles and Luberon villages for separate days.',
        verify: 'Check palace and bridge tickets, festival calendar, station connector, heat or mistral and any security closure before departure.',
        sources: [
          ['https://avignon-tourisme.com/en/', 'Avignon Tourism — official city planning'],
          ['https://palais-des-papes.com/en/', 'Palais des Papes and Pont d’Avignon — official visits']
        ]
      }),
      g({
        slug: 'aix-markets-cezanne',
        name: 'Aix Markets & Cézanne Ground',
        instrument: 'Fountain-market studio walk',
        layout: 'market-studio-walk',
        imageQuery: 'Aix en Provence Cours Mirabeau fountain France',
        imageAlt: 'Fountain and plane-tree avenue in central Aix-en-Provence',
        purpose: 'Use Aix’s market streets and Cézanne sites through current reservations, while distinguishing the central bus-and-rail city from the distant TGV station.',
        summary: 'Walk Cours Mirabeau, the old city and one market or museum, then add Atelier de Cézanne or another verified site without assuming every studio and quarry is open.',
        choices: [
          ['Market and old city', 'Build around the correct market day, Cours Mirabeau, civic squares and cathedral area. This is the flexible street-led route.'],
          ['Cézanne focus', 'Reserve the atelier or another official site and connect it to city collections. Restoration and timed-access notices matter.'],
          ['Museum and contemporary layer', 'Use Musée Granet, Hôtel de Caumont or a current exhibition as the main interior, keeping markets secondary.']
        ],
        access: 'Aix Centre station and bus station serve the city; Aix-en-Provence TGV lies outside it and requires a shuttle or bus. The Cézanne studio is uphill from the core, so place it before heat or fatigue grows.',
        tradeoff: 'A full market, major exhibition and rural Sainte-Victoire route exceed one day. The plan gives up the mountain excursion so Aix’s art and urban rhythm retain depth.',
        stages: [
          ['Enter from the real city gateway', 'Complete the TGV shuttle if needed, then orient around Cours Mirabeau and record the final bus or rail departure.'],
          ['Use the market or museum anchor', 'Follow the market calendar or enter the selected collection, avoiding a shopping loop that repeats the same squares.'],
          ['Climb to one Cézanne site', 'Walk or bus to the reserved atelier or another official site, respecting timed access and residential streets.'],
          ['Return through the shaded center', 'Finish along a different old-city line with a meal near the bus station or central rail route.']
        ],
        fallback: 'If a Cézanne site is closed, use Musée Granet and the official city trail without representing private or altered sites as preserved studios. In heat, omit the uphill walk and keep shaded interiors.',
        watch: [
          ['The TGV station is remote', 'Build shuttle time into both arrival and departure; do not schedule a timed museum immediately after the train.'],
          ['Markets rotate by day and square', 'Check which market is operating rather than expecting every stall on every morning.'],
          ['Artist sites may be under restoration', 'Use current official access and avoid relying on older guidebook descriptions.']
        ],
        duration: 'Allow five to seven hours for Aix center and one art site. A Sainte-Victoire excursion or multiple museums needs another day.',
        combine: 'Combine the old city with one Cézanne site or museum. Keep Avignon, Marseille and the Luberon separate.',
        verify: 'Check exact station connector, market schedule, atelier or museum reservation, heat and urban bus before setting the climb.',
        sources: [
          ['https://www.aixenprovencetourism.com/en/', 'Aix-en-Provence Tourism — official city planning'],
          ['https://travel.aixenprovencetourism.com/en/fiche/lauves-studio-5538099/', 'Aix-en-Provence Tourism — official Cézanne studio access and notices']
        ]
      }),
      g({
        slug: 'luberon-villages-abbey',
        name: 'Luberon Villages & Sénanque',
        instrument: 'Village-cluster heat map',
        layout: 'hill-village-cluster',
        imageQuery: 'Gordes Luberon Provence France village landscape',
        imageAlt: 'Gordes and the Luberon’s stone hill landscape in Provence',
        purpose: 'Choose one Luberon village cluster and, if appropriate, Sénanque Abbey through current access and worship rules, replacing the impossible goal of collecting every hill town and lavender field.',
        summary: 'Gordes, Roussillon, Lourmarin and the abbey lie on different road branches. A useful day selects two compatible stops, one meal and a sober, heat-aware return.',
        hubAccess: 'Regional buses serve some villages on limited schedules, but a tour, bicycle or car is often required. Choose the cluster from the live timetable, road and parking rules; never assume taxis can bridge missed rural buses.',
        hubTradeoff: 'The route gives up “all the Luberon.” Two villages or one village plus the abbey already consume a full day after parking, heat and meals are counted.',
        hubDuration: 'Allow a full day for one two-stop cluster. One village alone merits three to five hours with a market or meal; adding a third usually creates road tourism.',
        searchSummary: 'Choose one Luberon branch: Gordes with a prebooked Sénanque visit, Roussillon with its open ochre trail, or a southern Lourmarin pair. Use Apt/Avignon buses only for listed stops and prearrange the rural last mile.',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        choices: [
          ['Gordes and Sénanque Abbey', 'Book a current abbey visit before anchoring the day, then pair it with Gordes. The abbey is a living monastery: visitor hours can pause for prayer and Sunday morning access is not listed. Lavender is seasonal agriculture, not a guaranteed bloom or public field.'],
          ['Roussillon and the ochre trail', 'Make the village and official Sentier des Ocres one northern cluster. Check the trail opening, heat and fire notices that day; if it closes, keep to public village lanes and a museum only if open.'],
          ['Lourmarin and one southern village', 'Use Lourmarin with one nearby stop on the same road branch, choosing a village market, château or meal that is actually open. Do not combine this southern route with Gordes and the abbey by map distance alone.']
        ],
        access: 'The regional ZOU! page labels line 915 Apt–Avignon–Forcalquier–La Brillanne and notes a new timetable from 1 September 2026; this is a gateway between larger towns, not a promise of last-mile service to Sénanque or every hill village. From Avignon, Apt or Cavaillon, use only the live stop list and date-specific return, then prebook a driver/tour or rent a car for the village/abbey segment. Do not rely on an unbooked rural taxi or bicycle transfer in summer heat.',
        tradeoff: 'The northern branch (Gordes/Sénanque/Roussillon) and southern branch (Lourmarin and nearby villages) work better as separate days or bases. Gordes is best placed for an early abbey visit, Apt for central services and the regional bus gateway, and Lourmarin for the southern pair; Avignon gives rail access but requires onward ground transport. Choose a two- or three-night base rather than moving hotels each day.',
        stages: [
          ['Select one branch and base', 'From Avignon/Cavaillon/Apt, save the actual ZOU! or rail-to-bus legs only if the listed stops fit your date. Reserve the village last mile and return, or use a car; leave a heat and road buffer.'],
          ['Walk one village on its own terms', 'In Gordes, use public streets and a designated car park; in Roussillon, make the official ochre trail the main walk; in Lourmarin, take the market or château only after checking its day and entry.'],
          ['Use the abbey only with a booked time', 'For Sénanque, check the live visit page and book a specific time. Follow prayer and silence rules, keep to visitor paths and do not enter lavender fields. If the time is unavailable, keep the day in Gordes rather than treating the gate as a viewpoint.'],
          ['Return by the route you booked', 'Reach the driver/parking point and leave well before evening. If heat, a fire notice or the bus margin tightens, drop the second village rather than risk an unplanned rural connection.']
        ],
        fallback: 'If heat or fire restrictions close the ochre trail or a road, stay in one open village and use a currently open indoor site, or return to Apt/Avignon. If Sénanque has no suitable visit slot or closes for worship, keep to Gordes public lanes and do not seek an unofficial abbey viewpoint or enter farm fields.',
        watch: [
          ['The line 915 is not village transport', 'Its official page shows the regional Apt–Avignon–Forcalquier–La Brillanne route and a new timetable notice effective 1 September 2026. Confirm your exact stop and last return; it does not solve the abbey or village last mile.'],
          ['Abbey hours follow a living monastery', 'Use the current booking page for the selected date, expect visitor access to pause around worship, and respect silence, stairs and the no-entry lavender-field rule.'],
          ['Fire, heat and crops change the plan', 'Check the official local fire-access notice and trail status; bloom and harvest vary by year. Carry water and keep to designated parking, paths and public viewpoints.']
        ],
        duration: 'Allow six to eight hours for Gordes plus a booked Sénanque visit once rural transfers and a meal are counted. Roussillon village and its ochre walk need a separate half-to-full day; a Lourmarin pair is a full day when markets or an interior visit are added.',
        combine: 'Pair Gordes with Sénanque, Roussillon with one northern neighbor, or Lourmarin with one southern village. Keep the north and south branches on separate days and do not add an airport/rail departure day to a countryside loop.',
        verify: 'Check the current ZOU! line 915 stop list and return, booked rural last mile, Sénanque booking/worship rules, Roussillon trail and fire notice, the chosen market/interior opening, heat forecast and designated parking.',
        sources: [
          ['https://uk.destinationluberon.com/', 'Destination Luberon — official village and landscape planning'],
          ['https://www.luberon-apt.fr/ligne-15-apt-avignon', 'ZOU! / Luberon Apt — official line 915 route and 2026 timetable notice'],
          ['https://www.senanque.fr/en/visits-of-the-abbey-2/', 'Notre-Dame de Sénanque — current visit schedule, booking and visitor rules'],
          ['https://www.senanque.fr/en/map-access/', 'Notre-Dame de Sénanque — official road approach and access map']
        ],
        siteContext: {
          label: 'THREE LUBERON CLUSTERS',
          heading: 'Pick the village branch before choosing a base',
          intro: 'Apt–Avignon regional transport is a gateway, while the abbey and hill towns need their own last-mile plan. The shortest map route is not always a workable day.',
          details: [
            ['Gordes and Sénanque', 'Use Gordes as the north-side base, book an abbey slot first, and plan parking or a driver on the Gordes-to-abbey road. Visitors must respect prayer, stairs and marked access; lavender fields are not visitor paths.'],
            ['Roussillon and ochre', 'Treat the village and official Sentier des Ocres as one walk. Check opening, heat and fire controls before arrival; a closed trail means village lanes, not an improvised path into the ochre hillside.'],
            ['Lourmarin south', 'Stay in or near Lourmarin for a southern pair. Choose one adjacent village by actual market/interior opening and road line rather than crossing back north to Sénanque.'],
            ['Apt, Avignon and the bus', 'The line 915 page lists the Apt–Avignon–Forcalquier–La Brillanne corridor and a timetable update effective 1 September 2026. Check the stop and return for the day, then prebook the rural leg; do not read the city-to-city bus as abbey access.']
          ]
        }
      })
    ]
  }),
  c({
    slug: 'marseille-calanques',
    name: 'Marseille, Calanques & Cassis',
    region: 'Bouches-du-Rhône, Provence',
    band: 'mediterranean-island',
    family: 'port-limestone-access-chart',
    label: 'Port and limestone access chart',
    tagline: 'Choose the city, trail or boat first; each has a different return journey.',
    countryCardIntro: 'Marseille’s port city, the Calanques National Park and Cassis–La Ciotat coast meet geographically but operate differently. Urban transit, summer reservations, fire closures, boat conditions and trail difficulty must be checked before choosing the route. Decide between city, land and sea before breakfast; switching access modes late can strand the return at the wrong port or trailhead.',
    countryCardImageAlt: 'Marseille Old Port with Fort Saint-Jean and waterfront',
    hubIntro: 'Marseille, the Calanques and the ports of Cassis and La Ciotat share a coastline, not one transport system. Start with the day’s gate: an Old Port museum loop, a signed park trail, a licensed boat or one smaller port town. Then check the return from that same gate. Fire decisions, Sugiton reservations, steep trail exits, station-to-port transfers and sea cancellations can each change the usable day.',
    stay: 'Allow three nights in Marseille for one full city day, one full park-or-boat day and a flexible coast day. Add a fourth night if you want both a land hike and a separate sea excursion without stacking them. Stay around Vieux-Port/Canebière for the M1, museums and evening walk; Castellane/Prado suits an early B1 departure to Luminy. Saint-Charles is practical for rail arrivals, but budget the uphill or Metro/bus link to the waterfront. Book a separate Cassis night only when the port is the point of the trip and the onward station or bus link is confirmed.',
    transfer: 'Use RTM M1 to Vieux-Port; Marseille Tourism lists bus 49 between the Old Port and Saint-Charles, bus 60 between the Old Port and Mucem (also serving Notre-Dame de la Garde), and buses 55/49 for Le Panier. B1 runs from Avenue du Prado near Place Castellane toward Luminy–PN des Calanques. Bus 78 serves Cassis; TER also links Marseille with Cassis and La Ciotat, but each station is a separate last-mile decision from its port. Check exact stops, service and return times for the date; these lines are not interchangeable.',
    season: 'The park can close trail access day by day for fire risk, and the Route des Crêtes may close with it. The 2026 Sugiton reservation window covered 20–21 June, daily 27 June–30 August, and 5–6 and 12–13 September; those dates have passed. As of 12 October 2026, the 2027 dates and booking rules are not established here. Reopen the park notice for the next season rather than carrying the 2026 calendar forward. Wind and sea state can cancel boats in any month; shoulder-season trail comfort does not guarantee daily bus or boat frequency.',
    fallback: 'If the massif closes, make the day a connected city walk: Vieux-Port → Le Panier/Vieille Charité → La Major → Fort Saint-Jean/Mucem, using bus 60 or M2/Joliette to shorten the return if needed. If a Marseille cruise is cancelled, use that same museum loop; if a Cassis boat is cancelled, stay around Quai Saint-Pierre and the town rather than improvising a cliff trail. A red fire-risk closure rules out land access even when a boat can sail.',
    reviewedOn: { iso: '2026-10-12', label: '12 October 2026' },
    reviewDateISO: '2026-09-19',
    reviewDisclaimer: 'Sugiton dates quoted here are the 2026 rules, now past; this page does not claim 2027 dates or rules. Recheck fire, trail, transit, road, port and sea conditions for the travel date.',
    sources: [
      ['https://www.marseille-tourisme.com/en/organize-your-stay/practical-information/bus-marseille/', 'Marseille Tourism — city and Cassis bus lines'],
      ['https://www.rtm.fr/en', 'RTM — official Marseille transit maps and day-of service'],
      ['https://www.calanques-parcnational.fr/en', 'Calanques National Park — daily access and protection notices'],
      ['https://www.calanques-parcnational.fr/en/news/sugiton-reservations', 'Calanques National Park — Sugiton reservation notice (2026 dates)'],
      ['https://www.marseille-tourisme.com/en/discover-marseille/nature/the-calanques-of-marseille/how-to-access-the-calanques/the-calanques-of-marseille-by-boat/', 'Marseille Tourism — regulated boat departures and no-landing rule'],
      ['https://www.ter.sncf.com/sud-provence-alpes-cote-d-azur/trajet-marseille-cassis', 'SNCF TER — live Marseille–Cassis planner'],
      ['https://www.ter.sncf.com/sud-provence-alpes-cote-d-azur/trajet-marseille-la-ciotat', 'SNCF TER — live Marseille–La Ciotat planner']
    ],
    faq: [
      ['How many nights should I plan for Marseille and the Calanques?', 'Three nights allow one city day, one park-or-boat day and one flexible coast day. Choose four if you want both a demanding land route and a separate sea trip; do not treat those as one outing.'],
      ['Where should I stay for these routes?', 'Vieux-Port/Canebière keeps the M1, Old Port and central walk close. Castellane/Prado is a more direct base for the B1 toward Luminy. Saint-Charles helps rail arrivals but is uphill from the waterfront; compare the exact hotel-to-stop route before booking.'],
      ['Can I visit Sugiton next summer without a reservation?', 'The 2026 rules required free advance booking on listed dates. Those dates are past, and this guide does not claim the 2027 calendar or rules. Check the National Park notice before buying non-refundable transport or accommodation around a specific day.'],
      ['Will a Calanques boat take me ashore?', 'Marseille Tourism says regular excursions do not drop passengers in the coves. Weather can postpone or cancel departures; read the operator’s current route and landing terms before booking.']
    ],
    guides: [
      g({
        slug: 'old-port-panier-mucem',
        name: 'Old Port, Le Panier & Mucem',
        instrument: 'Harbor-to-hill civic section',
        layout: 'port-city-section',
        imageQuery: 'Marseille Old Port Fort Saint Jean Mucem France',
        imageAlt: '2011 Marseille harbor view of a stone waterfront building under restoration scaffolding',
        purpose: 'Connect Marseille’s working Old Port to Le Panier and Mucem through one uphill-and-waterfront loop, keeping markets, museums and ferry operations in their real spaces.',
        summary: 'Start at M1 Vieux-Port, walk Le Panier and La Major once, cross to Fort Saint-Jean and Mucem, then use bus 60 or the Metro for the return.',
        choices: [
          ['Vieux-Port and Le Panier', 'Keep the walk north of the Old Port: fish market and Hôtel de Ville side, selected public Panier lanes, then Vieille Charité or La Major. Choose this shorter street-and-history version when museum interiors are not the priority.'],
          ['Fort Saint-Jean and Mucem', 'Cross from the Panier side to the fort and Mucem, then give the exhibitions one substantial block. The outdoor fort and harbor views can be a shorter visit; check which spaces and bridges are open.'],
          ['South-bank finish', 'After the north-bank loop, take bus 60 to Notre-Dame de la Garde or stay on the south quays around Saint-Victor. The hill basilica adds its own exposed climb/transfer and should replace, not be squeezed into, a full museum visit.']
        ],
        access: 'Start at M1 Vieux-Port. Marseille Tourism lists bus 49 between the Old Port and Saint-Charles, 55/49 for Le Panier, and 60 between the Old Port and Mucem as well as Notre-Dame de la Garde. Use the bus when saving the uphill leg matters; check the live RTM stop and return. M2 Joliette is an alternative for the north side, not a substitute for checking the Mucem entrance.',
        tradeoff: 'A full Mucem block, an unhurried Panier walk and Notre-Dame de la Garde do not form a compact single loop. Choose two: museum/fort plus Panier, or a shorter north-bank walk plus bus 60 to the hill.',
        stages: [
          ['Orient at M1 Vieux-Port', 'Choose the north-bank side of the harbor and note the M1 entrance and bus 60 stop before setting off. Keep clear of the fish market and vessel boarding quays.'],
          ['Walk the civic edge into Le Panier', 'Pass Hôtel de Ville, climb only the public lanes you intend to use, then make Vieille Charité or Place des Moulins the turn point. Do not add both a deep lane maze and a timed museum entry.'],
          ['Continue by La Major to the fort and Mucem', 'Use the cathedral-side waterfront to reach Fort Saint-Jean, then the signed footbridge to Mucem J4 if open. Pick one exhibition block; the ticket and current access notice decide the interior sequence.'],
          ['Close by the water, not by retracing the hill', 'Return along the J4/harbor edge and use bus 60, M2 Joliette or the M1 after checking the actual stop and service. If you chose Notre-Dame de la Garde, ride there as the final block and protect the bus 60 return.']
        ],
        fallback: 'If Fort Saint-Jean or the footbridge closes, keep the north side to Vieille Charité, La Major and the waterfront; take bus 60 to Notre-Dame de la Garde only if service and hill access remain open. In wind, follow staff limits on exposed links.',
        watch: [
          ['The port remains operational', 'Keep clear of fish sales, vessel boarding and service zones; use designated crossings.'],
          ['Le Panier is residential', 'Public art does not make every stair or courtyard a visitor space. Keep noise and groups controlled.'],
          ['Fort links can close in wind or events', 'Follow staff and current signage rather than relying on a saved museum shortcut.']
        ],
        duration: 'Allow five to seven hours for the Old Port–Panier–Fort–Mucem loop with an exhibition visit and meal; a street-focused north-bank walk can use three to four hours. These are planning allowances, not museum timings.',
        combine: 'Combine Vieux-Port, selected Panier lanes, La Major and Mucem. Add Notre-Dame de la Garde only by shortening the museum block; keep the Calanques and Cassis for separate days.',
        verify: 'Check Mucem’s live opening and footbridge status, RTM lines 49/55/60, temporary port or event restrictions, and the route back to the hotel.',
        siteContext: {
          label: 'THREE WALKING ZONES',
          heading: 'Cross the harbor once, then choose a finish.',
          intro: 'The Old Port is the hinge between a compact north-bank history walk and a separate south-bank hill. Use the quay and transit line as the boundary; the steep lanes are not a flat waterfront stroll.',
          details: [
            ['South quay · M1 Vieux-Port', 'Start at the Ombrière or the market-side quay. Bus 49 links this area with Saint-Charles; the Metro is the predictable city return, subject to live RTM service.'],
            ['North bank · Hôtel de Ville to Le Panier', 'Walk the public waterfront past Hôtel de Ville, then choose Vieille Charité or selected lanes toward Place des Moulins. Bus 55/49 can shorten the approach; check the precise stop rather than treating the district as level.'],
            ['La Major · Fort Saint-Jean · J4', 'Continue by the cathedral waterfront to Fort Saint-Jean and Mucem J4. The footbridge links the sites when open. Bus 60 connects the Old Port with Mucem and Notre-Dame de la Garde, allowing a shorter return or a different final stop.']
          ]
        },
        sources: [
          ['https://www.mucem.org/en', 'Mucem — official museum and Fort Saint-Jean information'],
          ['https://www.marseille-tourisme.com/en/organize-your-stay/practical-information/bus-marseille/', 'Marseille Tourism — bus lines 49, 55 and 60'],
          ['https://www.rtm.fr/en', 'RTM — live urban transit maps and service']
        ]
      }),
      g({
        slug: 'calanques-access-choice',
        name: 'Calanques Access: Hike, Boat or Shore',
        instrument: 'Fire-wind-reservation gate',
        layout: 'national-park-gate',
        imageQuery: 'Calanques National Park Marseille France cliffs sea',
        imageAlt: 'Aerial view of Port-Miou, Port-Pin and En-Vau along the Calanques limestone coast',
        purpose: 'Choose one legal Calanques access mode only after fire closure, reservation, trail difficulty, sea state and return transport agree.',
        summary: 'Reach Luminy by RTM B1, check the fire-access gate and Sugiton reservation, then choose the lookout, steep cove descent or a licensed boat.',
        choices: [
          ['Luminy to the Sugiton lookout or cove', 'Take B1 toward Luminy–PN des Calanques. The lookout is about 25–30 minutes each way from the trail start; the cove adds a steep descent and a harder climb back. A lookout-only day is a real alternative, not a failed hike.'],
          ['One licensed boat departure', 'Choose a current operator from the Old Port, Cassis or La Ciotat and read the named circuit. Marseille Tourism says regular cruises do not drop passengers ashore in the coves; sea conditions can cancel the trip.'],
          ['Park-free city or shore day', 'When a fire notice closes the massif, stay on an authorized urban route: the Mucem/Fort/Panier loop or a supervised city beach with current access. Do not drive or walk to a barrier and improvise.']
        ],
        access: 'For the Marseille-side Sugiton gate, B1 boards on Avenue du Prado just beyond Place Castellane toward Luminy; leave at Luminy–PN des Calanques and follow the marked route. The National Park lists about 30 minutes to the belvedere and 45 minutes to the cove, with at least an hour for the steep return climb from the cove. These are walking segments, not a total-day estimate. Check same-day fire access and any reservation before taking the bus.',
        tradeoff: 'Sugiton’s lookout is a shorter out-and-back; reaching the cove adds loose, steep terrain and a prolonged return climb. A boat shows the coast from the water but is not a trail transfer or beach landing. A red fire closure removes the land option entirely.',
        stages: [
          ['Check the gate before committing', 'Open the National Park’s same-day fire notice and, for Sugiton, the current booking rule. A 2026 notice required free advance reservations on its dated summer/weekend windows; by this review those dates have elapsed and 2027 dates are not published here.'],
          ['Take B1 to Luminy–PN des Calanques', 'Board on Avenue du Prado by Place Castellane, then follow park signs. Carry water, food, walking shoes, a map and sun protection; there is no dependable trail-side refill.'],
          ['Choose the lookout or the cove at the pass', 'The official park estimate is around 30 minutes to the belvedere and 45 to the cove; the steep return from the cove takes at least an hour. Turn back at the viewpoint if heat, footing or time no longer supports the descent.'],
          ['Return by the same gate and earlier bus', 'Protect a margin for the climb, pauses and RTM service. A boat is a separate booked trip: check sea status, and do not plan to disembark in a cove unless the operator and park explicitly authorize that specific activity.']
        ],
        fallback: 'If land access closes, use the Old Port–Le Panier–Fort Saint-Jean/Mucem city loop. A boat may still operate only if the operator and sea conditions allow, but a sea trip is not a land-access workaround and regular excursions do not drop passengers into coves. Never bypass a barrier.',
        watch: [
          ['Fire closure is absolute', 'Daily summer decisions can prohibit access. Fines and rescue risk are secondary to the life-safety reason.'],
          ['Water and shade are limited', 'Carry enough water for the full route; there may be no refill or commercial service.'],
          ['Phone coverage does not replace preparation', 'Download official maps, tell someone the route and wear appropriate footwear.']
        ],
        duration: 'Reserve most of a day for B1, trail, breaks and return; the lookout alone is a shorter walk but still needs the bus and current access check. Boat durations depend on the selected circuit. Do not combine a full hike and a long cruise.',
        combine: 'Pair one access mode with a simple meal back in Marseille. Keep Cassis town, a second trail and the full Mucem visit for other days.',
        verify: 'Check the National Park’s live fire closure and reservation notice, RTM B1 stop/service, heat and wind forecast, and the named licensed boat operator on the morning of travel. The 2027 reservation calendar is not stated as of 12 October 2026.',
        siteContext: {
          label: 'THREE ACCESS GATES',
          heading: 'A map of the massif is not a single entrance.',
          intro: 'Decide whether you want the Luminy lookout, a difficult cove descent, or a sea view from a vessel. Each starts at a different legal gate and has its own return.',
          details: [
            ['Luminy · Sugiton lookout', 'B1 from Avenue du Prado near Place Castellane reaches Luminy–PN des Calanques. The park estimates about 30 minutes on foot to the belvedere; this is the shorter signed out-and-back, still subject to daily closures.'],
            ['Luminy · Sugiton cove', 'The National Park estimates around 45 minutes to reach the cove and warns the steep climb back takes at least an hour. Slippery rocks, heat and crowding can make the descent unsuitable; reaching the lookout is a valid turn-around.'],
            ['Old Port · licensed boat', 'Marseille excursions depart from named Old Port quays; Cassis and La Ciotat have separate port operators. A cruise is a water-view product, not a drop-off at Port-Pin or En-Vau. Sea conditions and operator terms control departure.']
          ]
        },
        faq: [
          ['How long is the Sugiton walk?', 'The National Park lists about 30 minutes from Luminy to the belvedere and around 45 minutes to the cove. From the cove, it says to allow at least an hour for the steep return climb. Add your bus, breaks and day conditions; these segments are not a guaranteed round-trip time.'],
          ['Does Sugiton need a reservation in 2027?', 'The 2026 notice listed free advance reservations for specific summer and weekend dates. Those dates are past; the 2027 period and rule are not claimed here. Recheck the National Park’s live Sugiton notice before fixing a date.'],
          ['Can a cruise replace a closed trail?', 'It can be a separate sea excursion only if the operator is sailing. Marseille Tourism says regular cruises do not drop passengers in the coves, and a boat departure does not reopen closed land trails.']
        ],
        sources: [
          ['https://www.calanques-parcnational.fr/en/belvedere-et-calanque-de-sugiton', 'Calanques National Park — Sugiton walk and Luminy access'],
          ['https://www.calanques-parcnational.fr/en/news/sugiton-reservations', 'Calanques National Park — reservation rules and 2026 dates'],
          ['https://www.calanques-parcnational.fr/en', 'Calanques National Park — daily fire access notices'],
          ['https://www.marseille-tourisme.com/en/discover-marseille/nature/the-calanques-of-marseille/how-to-access-the-calanques/the-calanques-of-marseille-by-boat/', 'Marseille Tourism — boat access, weather and landing limits'],
          ['https://www.rtm.fr/plan/ligne-B1?nt=RTM', 'RTM — B1 line map to Luminy']
        ]
      }),
      g({
        slug: 'cassis-la-ciotat',
        name: 'Cassis, Cap Canaille & La Ciotat',
        instrument: 'Station-port-cliff transfer chart',
        layout: 'two-port-cliff-chart',
        imageQuery: 'Cassis port Cap Canaille France Mediterranean',
        imageAlt: 'Cassis harbor seen from the waterfront, with boats and Cap Canaille beyond',
        purpose: 'Choose Cassis or La Ciotat as the port base and solve the station-to-waterfront link, then add one cliff, boat or cinema-history layer rather than racing between both towns.',
        summary: 'Choose Cassis or La Ciotat, confirm the inland station-to-port link, then add one boat, cliff-road viewpoint or town-history block.',
        choices: [
          ['Cassis port and one boat circuit', 'Use Quai Saint-Pierre, the old harbor edge and one operator’s current calanque circuit. The train station is inland; solve the local transfer in both directions before choosing the departure.'],
          ['Cap Canaille and Route des Crêtes', 'Treat the cliff road as a separate viewpoint outing from Cassis, using a confirmed vehicle or tour. Wind, fire rules and road barriers can close it; do not substitute an improvised walk along the carriageway.'],
          ['La Ciotat old port and town', 'Build a walk around Port Vieux and the town’s cinema history, then add one currently open shore path only if local access and the station transfer fit. A train to La Ciotat is not a train to the quays.']
        ],
        access: 'Marseille Tourism lists bus 78 for Cassis; check its actual start, stop, timetable and return for your date. SNCF TER offers live Marseille–Cassis and Marseille–La Ciotat planners, but those stations are inland from their ports. Confirm the local bus or taxi from the station to Quai Saint-Pierre or Port Vieux before booking a boat. Do not use a map’s straight-line walk as the last-mile plan.',
        tradeoff: 'Choose Cassis or La Ciotat for the core of the day, then add one boat, cliff or town-history layer. Both ports plus a long boat trip and Route des Crêtes turn the day into transfers and leave little margin for a missed service.',
        stages: [
          ['Choose the port before the ticket', 'Compare Cassis port with La Ciotat Port Vieux, then use the live TER planner or bus 78 page for the actual terminal and return. Leave room for the inland station-to-port transfer.'],
          ['Walk one waterfront zone', 'In Cassis, keep the port and old streets together around Quai Saint-Pierre. In La Ciotat, use Port Vieux and the town center as the walkable core; do not count the rail station as waterfront access.'],
          ['Add one coast layer', 'Board a confirmed boat from that same port, choose a currently open Cap Canaille viewpoint by vehicle/tour, or stay with La Ciotat’s cinema-and-port history. Do not combine all three.'],
          ['Return through the same last mile', 'Use the prechecked bus/taxi to the actual station and protect a margin for queues or service change. If the link is disrupted, stay in town and rebook rather than gamble on a final train.']
        ],
        fallback: 'If the sea cancels a boat, stay in Cassis around Quai Saint-Pierre or use La Ciotat’s Port Vieux and town-history walk. If fire, wind or a road barrier closes Route des Crêtes, do not set off on foot along it. If station-to-port transport fails before departure, keep the Marseille museum day instead of chasing the connection.',
        watch: [
          ['Rail stations are not waterfront stops', 'The last mile can be crowded or infrequent; save the actual stop and timetable.'],
          ['Cliff roads close in wind or fire risk', 'Do not bypass barriers or walk on a closed road for the view.'],
          ['Boat products differ', 'Route length, landing, swimming and departure port vary. Read the official operator terms.']
        ],
        duration: 'Allow a full day for one port, its station transfer and either one boat circuit or one confirmed viewpoint. A town-only visit still needs four to six hours including both transport legs; check real services before treating that as a day-trip fit.',
        combine: 'Pair Cassis with one boat circuit or a confirmed Cap Canaille viewpoint. Pair La Ciotat with Port Vieux and cinema history. Keep the second town and Marseille museums for another day.',
        verify: 'Check bus 78 or the exact TER planner, the station-to-port local link, boat departure and cancellation terms, Route des Crêtes daily fire/wind closure and the return service.',
        siteContext: {
          label: 'THREE PORT-AND-CLIFF ZONES',
          heading: 'Station, quay and viewpoint are different pins.',
          intro: 'Choose one port and solve the connection twice. Cassis has the boat quay and the Cap Canaille road; La Ciotat has Port Vieux and its own station transfer.',
          details: [
            ['Cassis station to Quai Saint-Pierre', 'Use a date-specific TER search or Marseille Tourism’s line 78 information, then verify which stop reaches the port and when it runs back. The railway station is inland; confirm a local bus or taxi rather than assuming you have arrived at the harbor.'],
            ['Cassis port to Cap Canaille', 'Keep the port walk and boat departure around Quai Saint-Pierre. The Route des Crêtes is a separate exposed road toward La Ciotat, subject to fire and wind closures; travel it only with an open-road plan.'],
            ['La Ciotat station to Port Vieux', 'Use the exact SNCF TER station listing, then precheck the local bus/taxi to the old port. Make Port Vieux and the town’s cinema-history sites the core walk; add a coastal path only after checking local access.']
          ]
        },
        faq: [
          ['Is Cassis station in the port?', 'No: plan the station-to-port leg separately. Marseille Tourism lists bus 78 to Cassis, and the TER page provides a date-specific train planner; confirm the actual bus stop or taxi and the return before selecting a boat.'],
          ['Can I combine Cassis and La Ciotat in one day?', 'It is possible only if the live bus/train transfers and one chosen activity line up, but it leaves little margin. This guide recommends one port plus one boat, viewpoint or town-history layer.'],
          ['Can I walk the Route des Crêtes if it is closed to cars?', 'Do not treat a vehicle closure as walking permission. Fire or wind restrictions can close the road and adjacent area; obey the current prefecture/commune notice and barrier.'],
        ],
        sources: [
          ['https://www.ot-cassis.com/en/', 'Cassis Tourist Office — official port and access planning'],
          ['https://en.destinationlaciotat.com/', 'La Ciotat Tourist Office — official city and coast guide'],
          ['https://www.marseille-tourisme.com/en/organize-your-stay/practical-information/bus-marseille/', 'Marseille Tourism — bus 78 and intercity links'],
          ['https://www.ter.sncf.com/sud-provence-alpes-cote-d-azur/trajet-marseille-cassis', 'SNCF TER — live Marseille–Cassis planner'],
          ['https://www.ter.sncf.com/sud-provence-alpes-cote-d-azur/trajet-marseille-la-ciotat', 'SNCF TER — live Marseille–La Ciotat planner'],
          ['https://www.ot-cassis.com/en/explore/the-calanques/the-calanques-by-boat/', 'Cassis Tourisme — official boat conditions and daily planning']
        ]
      })
    ]
  }),
  c({
    slug: 'cote-dazur',
    name: 'Nice & the Côte d’Azur',
    region: 'Alpes-Maritimes',
    band: 'mediterranean-island',
    family: 'riviera-rail-coastline',
    label: 'Riviera rail coastline',
    tagline: 'Use the coast train for one direction at a time.',
    countryCardIntro: 'Nice is a complete city base; the eastern coast toward Èze, Monaco and Menton and the western coast toward Antibes and Cannes form two separate rail and bus directions. Cliff villages require an additional vertical transfer beyond the coastal station.',
    hubIntro: 'Treat Nice as its own walkable city day, then choose one eastern or western coast contract at a time. TER reaches the principal towns, but Èze Village sits above Èze-sur-Mer and Monaco’s districts sit on different levels; station arrival is only the first leg.',
    stay: 'Two nights fit Nice and one focused excursion. Four nights give Nice a full day, one eastbound day and one westbound day, with the arrival and departure edges protected. Five or six nights make a slower two-base stay possible: Nice for the eastern rail corridor and Antibes for the western towns. Stay near Nice-Ville/Jean Médecin for transfers, in Vieux Nice for early market access with more stairs and noise, or in Antibes near its station for a west-coast morning. Changing hotels only pays when it removes a real return journey.',
    transfer: 'Use TER from Nice-Ville for Antibes, Cannes, Èze-sur-Mer, Monaco–Monte-Carlo and Menton; check the dated SNCF timetable, planned works and last return together. Lignes d’Azur tram line 2 links the airport, Jean Médecin and Port Lympia; line 1 crosses the central city. Èze Village needs a separately checked Lignes d’Azur or ZOU! bus from the correct stop, or a demanding climb from Èze-sur-Mer. No current fare, headway or future departure is assumed.',
    season: 'Summer brings heat, full trains, beach crowding and event barriers; plan the exposed seafront or hill early, carry water and keep an indoor option. Spring and autumn suit longer walks but garden calendars, sea conditions and daylight still vary. Monaco race week and major Nice or Cannes events can change access and prices; check event dates before booking lodging or a timed visit.',
    fallback: 'If a coast train, bus, boat or hill route changes, keep the day in the town already reached: Nice has tram-linked museums and shaded central streets; Antibes has the walled old town and museums; Cannes has Le Suquet and the market quarter; Menton has its compact old town. Do not add a second coast direction to recover a missed connection.',
    searchSummary: 'Plan a four-night Nice base: one Nice city day, one eastbound TER day and one westbound day, leaving arrival and departure margins. TER connects the coast; check the dated return, while Èze Village needs an extra bus or hill climb beyond Èze-sur-Mer.',
    reviewDate: '12 October 2026',
    reviewDateISO: '2026-10-12',
    publishedDateISO: '2026-09-19',
    itineraryLabel: 'Four-night Nice base · sample sequence',
    itineraryHeading: 'Use the coast as two separate rail directions.',
    itineraryIntro: 'Keep this order flexible around arrival, weather, reservations and the operator’s dated timetable. Treat each numbered day as a full-day choice, not a timed connection promise.',
    itinerary: [
      ['Day 1 · Nice', 'Settle near Nice-Ville/Jean Médecin or a tram stop. Walk Place Masséna, Cours Saleya and Vieux Nice, then choose either Castle Hill or one museum; do not force both after an arrival.'],
      ['Day 2 · East by TER', 'Choose Èze Village with a confirmed uphill bus and return, or Monaco with one district and one booked interior. Add Menton only to a bounded Monaco–Menton rail day, leaving Èze for another trip.'],
      ['Day 3 · West by TER', 'Choose Antibes in depth, Cannes in depth, or a compact Antibes–Cannes pair. Keep Lérins Islands or Cap d’Antibes as a separate branch that replaces the second town.'],
      ['Day 4 · Buffer or second base', 'Use the day for a weather-shifted coast route, a slower Nice district, or a hotel move to Antibes only if it helps the next departure. Keep the final night close to the station or airport route you will actually use.']
    ],
    faq: [
      ['How many nights should I book in Nice?', 'Two nights can support a city day and one coast day. Four nights allow a Nice day plus one eastern and one western excursion without turning the travel edges into sightseeing. Add a night for a second town base or an island/peninsula day.'],
      ['Should I stay in Nice or Antibes?', 'Use Nice for the eastern corridor, airport tram and multiple city days. Consider Antibes for a west-coast stay focused on the old town, Cannes or the Lérins boats; compare the full hotel change and station walk before splitting.'],
      ['Can I reach Èze Village by train?', 'TER reaches Èze-sur-Mer, not the hilltop village. Check the current Lignes d’Azur or ZOU! bus to Èze Village, or plan the steep signed path only if its condition and your mobility make it suitable.'],
      ['Can I see Nice, Èze, Monaco, Menton, Antibes and Cannes in four days?', 'Not with useful time in each. Use Nice plus one eastbound and one westbound day; combine Monaco with Menton or Antibes with Cannes only when you accept a shorter visit in both.']
    ],
    sources: [
      ['https://cotedazurfrance.com/', 'Côte d’Azur France — official regional tourism guide'],
      ['https://www.ter.sncf.com/sud-provence-alpes-cote-d-azur/se-deplacer/fiches-horaires', 'TER ZOU! — official dated timetables, works and modified service'],
      ['https://www.lignesdazur.com/en', 'Lignes d’Azur — official Nice metropolitan transport'],
      ['https://www.nice.aeroport.fr/en/directions/public-transport', 'Nice Côte d’Azur Airport — official tram and airport transfer information']
    ],
    guides: [
      g({
        slug: 'nice-old-town-hills',
        name: 'Nice Old Town, Promenade & Hills',
        instrument: 'Market-to-belvedere city ribbon',
        layout: 'seafront-city-ribbon',
        imageQuery: 'Nice Promenade des Anglais old town France panorama',
        imageAlt: 'Nice waterfront and old town along the Mediterranean',
        purpose: 'Link Nice-Ville or a tram stop with Vieux Nice, the seafront and one deliberate hill or museum choice; give each district a connected walk and leave room for the return.',
        summary: 'Walk Place Masséna, Cours Saleya and Vieux Nice once, then choose Castle Hill or Cimiez. Tram line 2 joins the airport, Jean Médecin and Port Lympia; the coastal walk is not a flat substitute for every uphill leg.',
        searchSummary: 'Walk Nice from Place Masséna through Cours Saleya and Vieux Nice, then choose Castle Hill or Cimiez. Use tram lines 1/2 for cross-city links; check current hill access, beach flags and museum hours.',
        choices: [
          ['Vieux Nice and Castle Hill', 'Start at Place Masséna, cross Cours Saleya and the cathedral quarter, then climb to Castle Hill if current access and energy suit. Finish toward the Port Lympia edge rather than retracing the same lanes.'],
          ['Promenade and one museum', 'Use a bounded seafront segment from Quai des États-Unis toward the airport side, then take tram line 2 or a checked city bus to one museum. A full Promenade walk and a museum circuit compete for daylight.'],
          ['Port and Cimiez', 'Begin around Place Garibaldi and Port Lympia, then use the current tram/bus connection to Cimiez for one museum or garden. This is a transit-linked day, not a continuation of the Castle Hill climb.']
        ],
        access: 'From Nice-Ville, follow Avenue Jean-Médecin to the center or take tram line 1 toward Place Masséna, Garibaldi and the port. Tram line 2 runs from the airport through Jean Médecin to Port Lympia. Start the walk after dropping luggage; check current stop works and the airport operator’s dated service notice.',
        tradeoff: 'Choose one elevation: Castle Hill above the old town or a tram/bus trip to Cimiez. A major museum, full beach block and both hills make a second day more useful than a faster checklist.',
        stages: [
          ['From station to the central squares', 'Walk or take tram line 1 from Nice-Ville toward Jean Médecin and Place Masséna. If arriving at the airport, use line 2 to Jean Médecin or Port Lympia, then start without luggage.'],
          ['Cross the old-town quarter once', 'Continue Place Masséna → Cours Saleya → the cathedral lanes → Quai des États-Unis. Check the market’s operating day and keep doorways clear during setup and trade.'],
          ['Choose the hill or the museum branch', 'For Castle Hill, use the signed stairs or current lift/park access and finish toward the port. For Cimiez, use the current transit connection and visit one selected museum; do not combine both branches in the heat.'],
          ['Close the loop near a useful stop', 'Return along a bounded Promenade segment or board line 1/2 from a suitable stop. Check beach flags, event barriers and the final station/airport leg before committing to a sunset walk.']
        ],
        fallback: 'In heat or rain, shorten the exposed seafront and choose one open museum, the covered old-town lanes and a tram-linked district. If a hill lift, stair route or beach access is closed, keep to the public waterfront and use tram line 1/2 for the return.',
        watch: [
          ['Beach access is not a swimming guarantee', 'Nice’s shore is pebbled and surf or flags can change the safe choice. Check the day’s official beach notices and use lifeguarded areas.'],
          ['The hill is an access decision', 'Castle Hill’s lift, stairs and park access may change. Check current opening and accessibility before relying on the ascent; choose the flat port route if uncertain.'],
          ['Markets and events reshape the center', 'Cours Saleya operates on a changing market calendar; Nice events can add barriers. Check the local calendar and leave a tram or station margin.']
        ],
        duration: 'Allow five to seven hours for Vieux Nice, one hill and a meal. A bounded old-town/seafront loop takes about half a day; add Cimiez or a substantial museum as a separate transit block.',
        combine: 'Combine Place Masséna, Cours Saleya and Castle Hill in one district loop, or pair the Port with one Cimiez museum by transit. Keep the eastern and western rail excursions for other days.',
        verify: 'Check line 1/2 service and airport notices, Nice’s market calendar, selected museum access, Castle Hill lift/park status, sea flags and event barriers.',
        faq: [
          ['Which tram reaches the old town?', 'Line 1 crosses the center near Place Masséna and Garibaldi; line 2 links the airport, Jean Médecin and Port Lympia. Check the live stop map for the exact walk to your hotel or visit.'],
          ['Is Castle Hill suitable for everyone?', 'It includes elevation and stair routes. Check current lift and park access before planning an accessible visit; the flat port and seafront route is the lower-effort alternative.'],
          ['Is the Promenade safe for swimming?', 'The promenade is a public waterfront, not a swimming clearance. Follow the day’s beach flags and lifeguards and avoid entering the water when local notices advise against it.']
        ],
        sources: [
          ['https://www.explorenicecotedazur.com/en/', 'Explore Nice Côte d’Azur — official city planning'],
          ['https://www.explorenicecotedazur.com/en/practical-information/getting-around/bus-and-tram/', 'Explore Nice Côte d’Azur — current bus/tram network overview'],
          ['https://www.lignesdazur.com/en', 'Lignes d’Azur — official tram and bus information'],
          ['https://www.nice.aeroport.fr/en/directions/public-transport', 'Nice Côte d’Azur Airport — tram route and transfer information']
        ],
        siteContext: {
          label: 'FOUR NICE DISTRICT LINKS',
          heading: 'Choose one side of the city after the central walk',
          intro: 'Nice-Ville is inland, Vieux Nice sits at the center and the airport-to-port tram is a separate west–east line. Use one continuous district sequence before crossing the city.',
          details: [
            ['Station to old town', 'Avenue Jean-Médecin links Nice-Ville with Place Masséna. Tram line 1 is the luggage-saving alternative before beginning the walk.'],
            ['Market to waterfront', 'Cours Saleya, cathedral lanes, Quai des États-Unis and the Port Lympia edge form a compact eastbound sequence; Castle Hill adds a real climb.'],
            ['West and museum branch', 'Use the current tram/bus planner to reach one selected museum or the airport-side seafront. Do not assume a museum entrance sits on the Promenade.'],
            ['Cimiez choice', 'Treat Cimiez as a separate uphill transit branch from the old town. Select one museum or garden and verify its dated opening before paying or crossing town.']
          ]
        }
      }),
      g({
        slug: 'eze-monaco-menton',
        name: 'Èze, Monaco & Menton',
        instrument: 'Vertical-coast transfer ladder',
        layout: 'cliff-coast-ladder',
        imageQuery: 'Eze village French Riviera Mediterranean France',
        imageAlt: 'Èze village perched above the Mediterranean on the French Riviera',
        purpose: 'Choose the hilltop village, one Monaco district or a Monaco–Menton rail pair. The three stops are connected by different vertical and rail decisions, not one continuous flat promenade.',
        summary: 'TER connects Èze-sur-Mer, Monaco–Monte-Carlo and Menton, but Èze Village requires a separate uphill bus or steep path. Build the day around one vertical transfer and a confirmed coastal return.',
        searchSummary: 'Choose Èze Village by confirmed bus, Monaco by one district, or a selective Monaco–Menton TER pair. Èze-sur-Mer is the coastal station, not the hilltop village; verify the exact bus and rail return.',
        choices: [
          ['Èze Village as the main stop', 'Use a Lignes d’Azur or ZOU! bus that is listed to Èze Village for your date, or reach Èze-sur-Mer by TER and take the signed Nietzsche Path only if fit and conditions allow. Reserve the garden only after checking its official calendar.'],
          ['Monaco, one level at a time', 'Choose the Rock and old town, the Oceanographic Museum, or Monte-Carlo—not all three. Use signed public lifts and buses to bridge levels, and save the station exit for the return.'],
          ['Monaco and Menton by rail', 'Use TER for a bounded two-town day: one Monaco district, then Menton’s old town or one garden. This plan deliberately omits Èze and its extra climb.']
        ],
        access: 'TER serves Nice-Ville, Èze-sur-Mer, Monaco–Monte-Carlo and Menton; check the official SNCF timetable and planned works for the exact date. Èze Village is uphill from Èze-sur-Mer, so confirm a bus to the village itself or assess the steep signed path before boarding. In Monaco, exits connect different levels and districts; note the exit and lift/bus link for your chosen destination.',
        tradeoff: 'Èze Village plus Monaco and Menton is a rushed three-stop list. Give Èze its own half-to-full day, or pair one Monaco district with Menton by rail; adding a second Monaco interior or garden means dropping the other town.',
        stages: [
          ['Choose the vertical transfer first', 'For Èze, check a date-matched bus to the hilltop or take TER to Èze-sur-Mer only with a viable uphill and return plan. For the rail towns, select Nice-Ville → Monaco–Monte-Carlo or Menton before leaving.'],
          ['Walk one district, not the whole map', 'In Èze, follow public village lanes and signed visitor paths. In Monaco, choose the Rock, port/Oceanographic area or Monte-Carlo using the named station exit and public lifts; in Menton, connect the station to the old town.'],
          ['Put the reservation at the center', 'Book or verify one garden, museum or palace-area visit for the exact date. Keep a second paid interior optional until the return trains and event notice are clear.'],
          ['Protect the return leg', 'Finish beside Monaco–Monte-Carlo or Menton station, or reach the confirmed Èze bus stop early. Recheck SNCF works, the live transit departure and event barriers before starting the last downhill segment.']
        ],
        fallback: 'If the Èze bus is unsuitable or the trail is wet, remain on the rail coast in Monaco or Menton; do not improvise a road shoulder walk. If Monaco has event restrictions, choose a compact Menton or Nice route instead of bypassing barriers.',
        watch: [
          ['Èze requires an uphill contract', 'Èze-sur-Mer and Èze Village are different stops. Confirm a village-bound bus or judge the steep Nietzsche Path honestly; do not rely on a taxi being available at the station.'],
          ['Monaco is a vertical station', 'The station exits and public lifts lead toward different districts. Use the current station map and allow time for stairs, escalators or an event detour.'],
          ['Gardens, events and rail works move', 'Check the official garden/museum calendar, Monaco event access and TER notice for the chosen date. No current opening, ticket inventory or future train time is guaranteed here.']
        ],
        duration: 'Allow five to seven hours for Èze Village or one Monaco district once transfers, stairs and a meal are counted. A selective Monaco–Menton pair needs most of a day; adding Èze makes three stops and should be another date.',
        combine: 'Combine Monaco and Menton by TER with one chosen district in each, or give Èze Village its own day from Nice. Keep Antibes/Cannes on a separate westbound trip.',
        verify: 'Check dated TER service/works, bus destination and last return, Nietzsche Path condition, garden or museum booking, Monaco events and weather before leaving Nice.',
        faq: [
          ['Does Èze-sur-Mer station serve Èze Village?', 'No. Èze-sur-Mer is on the coast; the hilltop village needs a separately checked bus, car transfer or strenuous signed climb. Verify the destination shown in the live planner.'],
          ['Can I combine Èze and Monaco in one day?', 'It is possible only as a deliberately short day with a confirmed bus and one Monaco district. For a first visit, give Èze or Monaco the main block and keep Menton for a separate rail day.'],
          ['Should I book the Exotic Garden?', 'Check its official date-specific opening and ticket instructions before building the route around it. If unavailable, the public village lanes remain a shorter visit, but do not assume the garden is open.'],
        ],
        sources: [
          ['https://www.visitmonaco.com/en', 'Visit Monaco — official principality planning and event information'],
          ['https://www.menton-riviera-merveilles.co.uk/', 'Menton Riviera & Merveilles — official destination guide'],
          ['https://www.ter.sncf.com/sud-provence-alpes-cote-d-azur/se-deplacer/fiches-horaires', 'TER ZOU! — official dated timetables and works'],
          ['https://www.lignesdazur.com/en', 'Lignes d’Azur — official Nice-region urban bus and tram planning'],
          ['https://zou.maregionsud.fr/', 'ZOU! — official regional bus and rail planning']
        ],
        siteContext: {
          label: 'THREE EAST COAST CONTRACTS',
          heading: 'Plan vertically before choosing the train',
          intro: 'The railway follows the sea; the village, principality districts and gardens sit beyond the station platform. Use the transfer that matches the place you actually booked.',
          details: [
            ['Èze Village', 'Use a bus that the live Lignes d’Azur/ZOU! planner shows to Èze Village, or TER to Èze-sur-Mer only with a suitable uphill plan. The village lanes and garden involve slopes and steps.'],
            ['Monaco–Monte-Carlo', 'Choose the Rock/old town, port-side museum or Monte-Carlo. Match the station exit, public lift or bus to that district and check event controls.'],
            ['Menton', 'Walk from Menton station toward the old town and seafront; add one garden only after confirming its current date-specific hours and entry.'],
            ['Rail return', 'Keep the last useful TER return visible before the visit begins. A disruption or event may make a planned cross-border direction slower than the map suggests.']
          ]
        }
      }),
      g({
        slug: 'antibes-cannes-west-coast',
        name: 'Antibes & Cannes West Coast',
        instrument: 'Two-port rail promenade',
        layout: 'west-riviera-diptych',
        imageQuery: 'Antibes old town port French Riviera France',
        imageAlt: 'Antibes old town and port on the French Riviera',
        imageEditNote: 'Resized, display-cropped and converted to WebP; the adaptation is shared under CC BY-SA 4.0.',
        purpose: 'Choose Antibes in depth, Cannes in depth, or one compact TER pair. Follow each town’s own station-to-center walk and let an island, peninsula or event replace—not extend—the two-town day.',
        summary: 'TER links Antibes and Cannes, whose stations sit near their centers. Start with Antibes’s market, old walls and one museum or Cannes’s Forville–Suquet–Palais axis; Lérins boats and Cap d’Antibes need their own day.',
        searchSummary: 'Use TER for Antibes or Cannes from Nice. Walk Antibes station→Marché Provençal→Picasso Museum/ramparts/Port Vauban, or Cannes station→Forville→Le Suquet→Palais des Festivals/Croisette; islands or Cap d’Antibes replace the town pair.',
        choices: [
          ['Antibes old town and Picasso', 'From Antibes station, walk to the old town, Marché Provençal and ramparts, then reserve the Picasso Museum if it fits. Finish around Port Vauban; the Cap d’Antibes coastal walk is a separate branch.'],
          ['Cannes market, Suquet and bay', 'Walk from Cannes station through Rue Félix-Faure/Forville to Le Suquet, then the old port and Palais des Festivals exterior. Continue along only one Croisette segment; event security can change the open route.'],
          ['A selective Antibes–Cannes pair', 'Use TER once in each direction, keeping one short old-town loop and meal in each. Skip the Picasso interior, island boats and Cap d’Antibes to leave a reliable station margin.']
        ],
        access: 'TER from Nice-Ville reaches Antibes and Cannes; use the dated SNCF timetable for both directions and check works before buying an island boat or museum slot. Antibes station is west of the old town; Cannes station opens toward Rue Félix-Faure and the center. Port Vauban, Cap d’Antibes trailheads and Cannes island quays are separate access points.',
        tradeoff: 'A Lérins boat, Cap d’Antibes walk, Picasso Museum and full Cannes circuit exceed a day. Choose one town in depth, or pair compact street loops and give up the island/peninsula and long interior visit.',
        stages: [
          ['Antibes: station to old town', 'From Antibes station, follow the center approach toward Place Général-de-Gaulle and Marché Provençal; continue through the old lanes to the Picasso Museum/ramparts and Port Vauban. Check the museum’s own entrance and hours.'],
          ['Choose one finish in Antibes or board TER', 'For a one-town day, finish the ramparts and harbor loop near the station. For the pair, use TER to Cannes only after checking the departure board and arrival platform.'],
          ['Cannes: market to Suquet and port', 'From Cannes station, walk Rue Félix-Faure toward Marché Forville, climb into Le Suquet, then descend to the old port and Palais des Festivals. Follow event barriers and use public streets.'],
          ['Close on the Croisette or return rail', 'Walk one bounded Croisette section, then return to Cannes station with time in reserve. If visiting only Antibes, replace this branch with a reserved Cap d’Antibes/boat plan and a confirmed return.']
        ],
        fallback: 'If Cannes has event barriers or a museum visit changes, stay on public streets in the old town and market district or use Antibes as the full day. If sea state cancels the Lérins boat, keep the land-side Cannes or Antibes route; do not substitute an unplanned coastal hike.',
        watch: [
          ['Festival and congress setup change Cannes', 'Security, build-out and private events may close the Palais, port edges or Croisette sections. Check the official event/access notice on the exact date.'],
          ['Museum doors have their own calendar', 'Check the Picasso Museum or selected exhibition page for dated hours, ticket conditions and closures before arranging the TER. No current opening or ticket inventory is assumed.'],
          ['The island is a separate day', 'Confirm the operator’s sailing, sea condition and last return before going to the quay. A boat replaces Cannes or Antibes sightseeing; do not append it after both towns.']
        ],
        duration: 'Allow five to seven hours for Antibes or Cannes in depth. A compact two-town pair needs most of a day including two station walks and a meal; an island or Cap d’Antibes excursion replaces the second town.',
        combine: 'Combine Antibes and Cannes by TER only as short district loops. For more time, stay overnight in Antibes and use it as a west-coast base; keep Nice, Monaco and Èze on separate dates.',
        verify: 'Check the dated TER timetable/works, market calendar, Picasso or exhibition entry, Cannes event restrictions, island operator and sea state, Cap d’Antibes path status and the final train.',
        faq: [
          ['Can I do Antibes and Cannes in one day?', 'Yes as a compact rail pair: choose one short district loop and a meal in each. Skip the Lérins Islands, Cap d’Antibes hike and long museum visits, and leave time for the actual TER return.'],
          ['Can I add the Lérins Islands after Cannes?', 'Treat the boat as the main outing, not a late add-on after Cannes. Check the operator’s date-specific departure and return, sea state and quay access.'],
          ['What changes during Cannes events?', 'Festival and congress setup can change security perimeters and access around the Palais, port and Croisette. Check Cannes’s official event notice and follow barriers on the day.']
        ],
        sources: [
          ['https://www.antibesjuanlespins.com/en/', 'Antibes Juan-les-Pins Tourism — official visitor guide'],
          ['https://www.cannes-france.com/', 'Cannes Tourism — official city and event planning'],
          ['https://www.ter.sncf.com/sud-provence-alpes-cote-d-azur/se-deplacer/fiches-horaires', 'TER ZOU! — official dated timetables and works']
        ],
        siteContext: {
          label: 'WEST COAST WALKING ZONES',
          heading: 'Keep each town beside its own station spine',
          intro: 'The TER journey is the link between the towns; within each town, use one station-to-center walk and one planned finish instead of crossing back for every landmark.',
          details: [
            ['Antibes old town', 'From the station, head toward Place Général-de-Gaulle and Marché Provençal, then follow the walled lanes to the Picasso Museum, ramparts and Port Vauban.'],
            ['Cap d’Antibes', 'Treat the cape path and beaches as a separate walking day with a named bus/starting point, water, weather check and return. It is not an extension of the old-town loop.'],
            ['Cannes center', 'Walk Rue Félix-Faure to Forville, Le Suquet and the old port, then use a bounded Croisette stretch. Check event security before approaching the Palais.'],
            ['Lérins Islands', 'Choose one island excursion from the current boat operator and protect its return; do not combine both towns and the islands in one day.']
          ]
        }
      })
    ]
  }),
  c({
    slug: 'corsica',
    name: 'Corsica: Ajaccio, Cap Corse & the South',
    region: 'Corsica',
    band: 'mediterranean-island',
    family: 'island-road-ferry-atlas',
    label: 'Island road and ferry atlas',
    tagline: 'Choose one coast; mountain roads make the island larger than its outline.',
    hubIntro: 'Corsica’s airports, ferry ports, rail lines and mountain roads create several separate island systems. Ajaccio and the west coast, Bastia and Cap Corse, and Bonifacio–Porto-Vecchio in the south each deserve a base. Driving time, parking and weather outweigh straight-line distance.',
    stay: 'Use at least five to seven nights for two island regions and more for a wider circuit. One base cannot serve every coast efficiently; change lodging only when the new base removes a repeated mountain-road transfer.',
    transfer: 'Flights and ferries arrive at different cities; the island railway covers selected corridors, not the entire coast. Rural buses can be limited, and rental-car pickup, fuel and parking need to be confirmed before arrival.',
    season: 'Summer adds heat, fire risk, congestion and full boats; shoulder seasons reduce services and some businesses. Mountain weather can differ sharply from the coast, and sea state affects ferries and boat excursions.',
    fallback: 'Keep a city, museum, market or short signed coastal route for days when boats, roads or fire controls disrupt the plan. Do not reroute onto unfamiliar mountain roads simply because one coast is closed.',
    sources: [
      ['https://www.visit-corsica.com/en', 'Visit Corsica — official island tourism guide'],
      ['https://www.train-corse.com/', 'Chemins de fer de la Corse — official island rail information'],
      ['https://meteofrance.com/', 'Météo-France — official island and marine weather']
    ],
    guides: [
      g({
        slug: 'ajaccio-west-coast',
        name: 'Ajaccio & the West Coast',
        instrument: 'Gulf-to-red-cliff route sheet',
        layout: 'west-coast-route-sheet',
        imageQuery: 'Ajaccio gulf Corsica France coast city',
        imageAlt: 'Ajaccio and its Mediterranean gulf on Corsica’s west coast',
        purpose: 'Use Ajaccio as a walkable port-and-museum base, adding the Sanguinaires or a Piana–Porto excursion only through a defined boat or road contract.',
        summary: 'Ajaccio’s center, market and Napoleonic context form one city route; the red-cliff west coast is a separate long road or sea day with limited shortcuts.',
        choices: [
          ['Ajaccio city and gulf', 'Keep market, old streets, Fesch Museum or another collection and a gulf-side bus or walk together. This is the car-free option.'],
          ['Sanguinaires sunset route', 'Use the current city bus, road or licensed boat to a defined endpoint, preserving the after-dark return.'],
          ['Piana and Porto', 'Commit a full day or overnight to the western road or boat route. Narrow roads and stops make it unsuitable as a casual half-day.']
        ],
        access: 'Ajaccio airport, ferry port and rail station sit in different parts of the urban area. Confirm the first transfer and any rental-car pickup; west-coast roads require conservative travel time and fuel.',
        tradeoff: 'The city, Sanguinaires and Piana cannot all be meaningful in one day. The route keeps Ajaccio plus one near-gulf layer, or gives the entire day to the west coast.',
        stages: [
          ['Establish the Ajaccio gateway', 'Complete airport or ferry transfer, store luggage and identify the city bus or road direction before entering the center.'],
          ['Read city and port', 'Connect market, civic streets and one museum, respecting ferry operations and avoiding a generic Napoleon checklist.'],
          ['Commit to near gulf or west road', 'Use the named bus, boat or full-day driver route; check sea state, fire and road notices before leaving urban services.'],
          ['Return before coastal options narrow', 'Reach Ajaccio or lodging with daylight and a backup, especially after sunset or a boat delay.']
        ],
        fallback: 'If boats or west roads are affected, use Ajaccio museums, market and a shorter city beach or gulf route under current safety conditions. Do not replace a closed cliff road with an unverified mountain detour.',
        watch: [
          ['West-coast roads are slow', 'Narrow curves, viewpoints and traffic make map estimates optimistic. Limit stops and avoid night driving when unfamiliar.'],
          ['Sunset needs a return contract', 'Check the last city bus, boat landing and lighting before staying at the Sanguinaires.'],
          ['Fire controls can close natural areas', 'Follow prefecture and local notices; parking near a closed trail is not permission to enter.']
        ],
        duration: 'Allow five to seven hours for Ajaccio and Sanguinaires, and a full long day or overnight for Piana–Porto.',
        combine: 'Combine Ajaccio with the near gulf. Keep Piana, Calvi and southern Corsica for separate bases or travel days.',
        verify: 'Check airport or ferry arrival, Muvistrada transit, museum opening, boat or west-road conditions, fire risk and the return before departure.',
        sources: [
          ['https://www.ajaccio-tourisme.com/en/', 'Ajaccio Tourism — official city and west-coast planning'],
          ['https://www.visit-corsica.com/en/Explore-Corsica/A-land-waiting-to-be-discovered/9-destinations-to-explore/Western-Corsica-Spelunca-Liamone', 'Visit Corsica — official western Corsica guide']
        ]
      }),
      g({
        slug: 'bastia-cap-corse',
        name: 'Bastia & Cap Corse',
        instrument: 'Port-to-peninsula roadbook',
        layout: 'peninsula-roadbook',
        imageQuery: 'Bastia old port Cap Corse France Corsica',
        imageAlt: 'Bastia’s old port and hillside city in northern Corsica',
        purpose: 'Use Bastia’s old port and citadel as a complete city, adding one side of Cap Corse only through a bounded road, bus, bicycle or tour route.',
        summary: 'Bastia provides ferry, rail and urban context; Cap Corse is a narrow, slow peninsula whose villages and headlands cannot be collected in a quick loop.',
        hubAccess: 'Bastia ferry port, rail station and old port are distinct but close urban nodes. Cap Corse services are limited and roads narrow; confirm rental terms, bus return and parking before leaving the city.',
        hubTradeoff: 'A deep Bastia visit and complete Cap Corse loop exceed one day. The route keeps the city plus one northern segment or gives the peninsula its own day.',
        hubDuration: 'Allow five to seven hours for Bastia and a full day for one Cap Corse sector. A complete peninsula loop may be better with an overnight.',
        searchSummary: 'Use Bastia for an easy harbor/citadel walk. For Cap Corse, select the east D80 coast through Erbalunga toward Macinaggio or a separate west-coast drive; bus service to Macinaggio is limited, so verify date and return or book a car/tour.',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        choices: [
          ['Bastia without a car', 'From the ferry or rail node, walk Terra Vecchia and the old port, then climb once to Terra Nova/citadel and the museum only if open. Bastia Airport lists a city shuttle to the station; verify the current stop and transfer before a flight.'],
          ['East-coast Cap Corse', 'Take the D80 north from Bastia toward Erbalunga, Sisco and Macinaggio, then stop at villages you have chosen. The listed Macinaggio–Bastia bus is described as school-term weekday service, not an all-day visitor shuttle; use a car or prebooked tour unless the current date-specific outbound and return both work.'],
          ['A full peninsula circuit', 'Drive or book a guided day that deliberately covers both D80 coasts, with Nonza/Centuri or other stops selected in advance. Curves, village parking and slower photo stops make the loop a full day; stay north overnight if the return to Bastia or ferry margin would otherwise be tight.']
        ],
        access: 'Bastia has separate airport, ferry, rail-station and old-port nodes; the airport authority lists a city shuttle to Bastia station. The Cap Corse D80 loop is a slow coastal road rather than a hop-on circuit. The official Visit Corsica listing describes the Macinaggio–Bastia bus as Monday–Friday during school term, so it cannot be assumed for weekends, holidays or convenient village hops. Check the current operator timetable for both legs, or choose a rental car/prebooked tour; do not depend on a taxi appearing in a small village.',
        tradeoff: 'Base in Bastia for ferry/rail and an easy city evening; sleep in Macinaggio when the north Cape or coastal path is the point; use a rental car for a full west-and-east D80 loop. Bastia plus one east-coast village can fit a long day, but a full peninsula loop needs its own day and preferably an overnight. Spend the last night in Bastia before a ferry or flight rather than combining the loop with departure.',
        stages: [
          ['Choose the travel node', 'On arrival, confirm whether you are at the airport, ferry port or Bastia station and the onward transfer. Store luggage before walking; the old port is the city center, not the airport.'],
          ['Walk Bastia from Terra Vecchia uphill', 'Follow the old port and market edge through public lanes, then climb to the citadel/Terra Nova and choose one open museum or church. Return by a different public street rather than carrying bags up the stairs.'],
          ['Commit to an east or west Cape road', 'For a short north excursion, select the D80 east coast to Erbalunga and a further stop only if the return is certain. For a full loop, arrange the vehicle/tour, fuel, parking stops and daylight before leaving Bastia.'],
          ['Sleep near the next transport', 'Return to Bastia with ample ferry check-in or airport time. If the trip continues north, an overnight around Macinaggio avoids forcing the loop back after dark; verify the next day’s return separately.']
        ],
        fallback: 'If wind, rain, road work, fire restrictions or the limited bus service defeats the Cape plan, keep a Bastia day: old port, Terra Nova and a currently open museum/church. If the ferry is delayed, stay near the port/station and keep luggage and check-in arrangements flexible instead of starting a distant road trip.',
        watch: [
          ['The bus listing is not an all-day Cape service', 'The official Macinaggio–Bastia description is school-term weekdays. Verify service on your date and both legs; it is not a dependable weekend peninsula loop.'],
          ['D80 driving is slow and exposed', 'Narrow curves, limited shoulders, wind and village traffic reward few planned stops. Do not count every headland as a quick pull-off.'],
          ['Ferry and coast access have separate rules', 'Follow ferry check-in/vehicle instructions, and check local fire/erosion closures before the customs tower, coastal path or any exposed route.']
        ],
        duration: 'Allow four to six hours for Bastia’s port-to-citadel walk and a meal. Give one D80 coast a full day; a full Cape loop is a long day from Bastia or an easier two-day plan with a Macinaggio overnight.',
        combine: 'Combine Bastia with Erbalunga for a bounded east-coast day only when road/bus return is solved. Keep the west coast and a full Cap Corse loop separate from ferry departure day and from Calvi/Saint-Florent transfers.',
        verify: 'Check airport shuttle, ferry check-in, current Macinaggio–Bastia bus operating days and exact return, D80 road notices, selected village parking, Cap Corse coastal-path/fire access and museum opening.',
        sources: [
          ['https://www.bastia-tourisme.com/en/', 'Bastia Tourist Office — official city planning'],
          ['https://bastia-aeroport.cci.corsica/en/shuttles/', 'Bastia Airport — official city shuttle and seasonal intercity coach information'],
          ['https://www.visit-corsica.com/en/Mon-sejour/Transporteurs/Tous-les-transporteurs/LIGNE-DE-BUS-MACINAGGIO-BASTIA-LIGNE-DE-TRANSPORT-SCOLAIRE', 'Visit Corsica — official Macinaggio–Bastia bus operating-day notice'],
          ['https://www.capcorse-tourisme.corsica/en/', 'Cap Corse Tourism — official peninsula, villages and walking information']
        ],
        siteContext: {
          label: 'BASTIA TO CAP CORSE',
          heading: 'A city walk, an east-coast outing and the peninsula loop are three different plans',
          intro: 'The D80 skirts steep coast and villages with slow turns. Pick an end point and return contract before leaving Bastia; the local bus listing has limited school-term service.',
          details: [
            ['Bastia, no car', 'Airport shuttle terminates at the station; the ferry and old port are separate arrival points. Store bags first, walk Terra Vecchia/old port and climb to Terra Nova, then return to your actual rail or sailing node.'],
            ['East D80: Erbalunga to Macinaggio', 'Use a car or tour for a flexible day. The official Macinaggio–Bastia listing says Monday–Friday during school term; verify its current exact route and return before considering it for a visit.'],
            ['West Cape and full circuit', 'Plan a separate D80 day for the west-coast villages and headlands. Leave time for narrow-road speeds, legal parking, wind and daylight; do not use the loop as a pre-ferry transfer.'],
            ['Where to sleep', 'Choose Bastia for ferry/rail, Macinaggio for a Cape-focused overnight and early walk, or a mid-route lodging only if a car is already arranged. Move back to Bastia the night before a fixed departure.']
          ]
        }
      }),
      g({
        slug: 'bonifacio-porto-vecchio',
        name: 'Bonifacio & Porto-Vecchio South',
        instrument: 'Cliff-harbor-beach triangle',
        layout: 'southern-coast-triangle',
        imageQuery: 'Bonifacio cliffs Corsica France harbor panorama',
        imageAlt: 'Bonifacio’s limestone cliffs and harbor in southern Corsica',
        purpose: 'Choose Bonifacio’s cliff city, a licensed sea view or a Porto-Vecchio beach corridor, then solve parking, buses and heat instead of trying to cover the entire south coast.',
        summary: 'Bonifacio’s upper town and marina form one vertical visit; Porto-Vecchio and its beaches require a separate road or bus system. One should be the base, the other an excursion.',
        hubAccess: 'Figari airport, Porto-Vecchio and Bonifacio require bus, transfer or car planning. Parking sits outside sensitive centers and beaches; summer shuttles and road queues can determine the practical route.',
        hubTradeoff: 'Bonifacio, a long boat circuit and several beaches exceed one day. The route keeps one town and one sea or beach contract.',
        hubDuration: 'Allow five to seven hours for Bonifacio alone and a full day for Porto-Vecchio plus one beach. A boat adds several hours and should replace another major layer.',
        searchSummary: 'For public transport, use Figari’s all-year airport link to Porto-Vecchio as the known anchor, then check the current A Berlina link/return to Bonifacio. No direct Bonifacio airport shuttle is listed; prebook a transfer if timing or lodging there.',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        choices: [
          ['Bonifacio upper town and cliffs', 'Base in Bonifacio or arrive early from Porto-Vecchio. Walk from the marina up to the old town and choose the open, signed stair/cliff route; combine it with the citadel lanes, not a distant beach drive.'],
          ['Boat from Bonifacio', 'Reserve a licensed harbor departure if the sea forecast and operator confirm it. Treat the boat as a substitute for the longer cliff walk; keep time to return to the same marina and reach your booked base.'],
          ['Porto-Vecchio old town and one beach', 'Use the upper town/port in the cooler hours, then choose one named beach only after checking local shuttle or parking/road access. Do not plan multiple beaches without a car and an explicit return arrangement.']
        ],
        access: 'The Figari airport’s official page lists a daily, year-round A Berlina link to Porto-Vecchio (about 30 minutes) and links to the current timetable; it does not list an airport shuttle directly to Bonifacio. From Porto-Vecchio, check the current local A Berlina journey to Bonifacio and the return for your date, or prebook a driver/car. Bastia Airport lists a separate seasonal Bastia–Porto-Vecchio option from 1 June to 31 October; verify actual dates and times and do not infer a direct Bastia-to-Bonifacio service.',
        tradeoff: 'Porto-Vecchio is the practical southern base for shops and the Figari airport bus; Bonifacio is the cliff-town base for an early marina/upper-town start and boat access. Figari works for a rural stay with a car but is remote without one. Choose a round trip through Figari for the simplest public-transport plan; a Bastia arrival means a long, separately verified seasonal transfer south and a different return. For three or four nights, use one south base rather than moving between both towns daily.',
        stages: [
          ['Lock the airport-to-base leg', 'For a Figari arrival, open the current A Berlina timetable for Porto-Vecchio and save the return from town to airport. If staying in Bonifacio or arriving after the listed service, prebook the road transfer; no direct shuttle is shown on the airport page.'],
          ['Keep each town walk compact', 'In Bonifacio, start at the marina and climb once to the upper town, with one signed cliff stair/path if open. In Porto-Vecchio, walk the old town and harbor before making a separate beach transfer.'],
          ['Choose sea or sand, not both by default', 'Use a confirmed boat departure from Bonifacio or one selected Porto-Vecchio beach with its own shuttle/parking plan. Check sea state, heat, fire access and the way back to your base.'],
          ['Return to the airport/ferry buffer', 'For Figari, return through Porto-Vecchio on a service that matches the actual flight time, or use a prebooked transfer with margin. If leaving from Bastia, reach the north the day before a fixed ferry/flight; do not count on a same-day connection across the island.']
        ],
        fallback: 'If a boat is cancelled by sea state, stay in Bonifacio for the upper town, marina and a currently open museum or choose a signed land route if safe. If heat, fire or traffic removes the beach option, remain in Porto-Vecchio’s town/port and shaded streets. If the last bus does not line up with an airport or town transfer, use a prebooked road alternative rather than gambling on a connection.',
        watch: [
          ['Airport access favors Porto-Vecchio', 'Figari lists an all-year link to Porto-Vecchio, not a direct Bonifacio shuttle. A flight arrival is workable only when its date-specific bus or prebooked transfer matches the lodging.'],
          ['Bastia’s southbound coach is seasonal', 'The airport authority lists a Bastia–Porto-Vecchio service via Bastia-Poretta from 1 June through 31 October. Recheck operator dates/times and seats; Bonifacio needs another confirmed leg.'],
          ['Heat, fire and sea can cancel the day', 'Cliff stairs are steep, beach roads congest, and boats depend on sea state. Check current local restrictions, carry water, and do not treat cancellation as permission to use an unsigned coast path.']
        ],
        duration: 'Allow five to seven hours for Bonifacio’s harbor, upper town and one cliff route; a boat is a separate half-day layer. Give Porto-Vecchio old town and one beach a full day, and count each transfer as its own block when using buses.',
        combine: 'Combine Bonifacio with one booked boat or cliff walk, and Porto-Vecchio with one beach. With buses, plan the two towns as separate days; keep Figari/Bastia airport transfer days free of extra beach stops.',
        verify: 'Check Figari–Porto-Vecchio A Berlina departures and return, onward Porto-Vecchio–Bonifacio service or a booked transfer, Bastia seasonal coach date if relevant, beach parking/shuttle, fire notices, cliff/stair access, boat sea state and flight/ferry check-in.',
        sources: [
          ['https://www.bonifacio.fr/en/', 'Bonifacio Tourist Office — official city and boat planning'],
          ['https://figari-aeroport.cci.corsica/en/shuttles/', 'Figari Airport — official year-round link and current timetable for Porto-Vecchio'],
          ['https://bastia-aeroport.cci.corsica/en/shuttles/', 'Bastia Airport — official seasonal Bastia–Porto-Vecchio coach dates'],
          ['https://www.portovecchio-tourisme.corsica/en/', 'Porto-Vecchio Tourism — official town, beach and local-transport planning']
        ],
        siteContext: {
          label: 'SOUTH CORSICA BASES',
          heading: 'Figari, Porto-Vecchio and Bonifacio solve different legs',
          intro: 'The airports and towns do not share one continuous transit system. Confirm each leg and its return before booking a room outside the town you can reach.',
          details: [
            ['Figari airport to Porto-Vecchio', 'The airport authority lists a daily, year-round A Berlina service of about 30 minutes and links the current timetable. Use Porto-Vecchio as the public-transport base and check the final airport-bound bus against your flight.'],
            ['Bonifacio from Figari', 'The Figari shuttle page names Porto-Vecchio, not Bonifacio. Stay there only with a booked car/driver or a verified onward public service; otherwise the airport-to-lodging transfer is unresolved.'],
            ['Porto-Vecchio to Bonifacio', 'Check current A Berlina service in both directions for the specific day. A same-day town visit is not an all-day flexible connection; one night in Bonifacio helps with early boats and the cliff town.'],
            ['Bastia to the south', 'Bastia Airport lists the seasonal Bastia–Porto-Vecchio coach via Poretta from 1 June through 31 October. Confirm actual operation and timing; continue to Bonifacio only by a separately verified onward leg. For a fixed Bastia departure, return north the previous evening.']
          ]
        }
      })
    ]
  })
];
