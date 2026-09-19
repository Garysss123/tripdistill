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
        choices: [
          ['Gordes and Sénanque', 'Use the hill village and abbey only with current road, parking and visitor access. Lavender is seasonal agriculture, not guaranteed scenery.'],
          ['Roussillon and ochre landscape', 'Choose village streets and one official ochre route when heat, fire and trail notices permit.'],
          ['Southern village pair', 'Use Lourmarin and one nearby village or market on a coherent road line, prioritizing living town rhythm over famous-photo mileage.']
        ],
        access: 'Regional buses serve some villages on limited schedules, but a tour, bicycle or car is often required. Choose the cluster from the live timetable, road and parking rules; never assume taxis can bridge missed rural buses.',
        tradeoff: 'The route gives up “all the Luberon.” Two villages or one village plus the abbey already consume a full day after parking, heat and meals are counted.',
        stages: [
          ['Enter through one gateway', 'Start from Avignon, Cavaillon, Apt or Aix according to the chosen cluster, carrying the full return and fuel plan.'],
          ['Read the first village beyond the viewpoint', 'Walk public lanes, market and interpretation without entering resident courtyards or blocking roads for photographs.'],
          ['Commit to abbey, ochre or second village', 'Follow current ticket, worship, trail and fire rules. Treat bloom and landscape conditions as variable.'],
          ['Return before roads and buses narrow', 'Leave with a daylight and congestion buffer, skipping a third village rather than missing the final connection.']
        ],
        fallback: 'If fire risk, heat or road controls remove the landscape route, stay in the gateway town or use one accessible village and indoor museum. If Sénanque is closed to visitors, respect the monastic closure and do not seek unauthorized viewpoints.',
        watch: [
          ['Lavender is not a fixed calendar prop', 'Bloom, harvest and field access vary; never enter crops or fly drones without permission.'],
          ['Fire controls can close trails and roads', 'Check official daily access in hot, dry periods and obey barriers.'],
          ['Village parking protects residents', 'Use designated lots and walk; narrow streets are not drop-off lanes.']
        ],
        duration: 'Allow a full day for one two-stop cluster. One village alone merits three to five hours with a market or meal; adding a third usually creates road tourism.',
        combine: 'Combine Gordes with Sénanque, Roussillon with one nearby village, or a southern pair. Keep Marseille and the Camargue separate.',
        verify: 'Check ZOU! service or tour, abbey access and worship, fire restrictions, market day, road closures and weather immediately before departure.',
        sources: [
          ['https://uk.destinationluberon.com/', 'Destination Luberon — official village and landscape planning'],
          ['https://www.senanque.fr/en/', 'Sénanque Abbey — official visitor and worship information']
        ]
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
    tagline: 'Treat the city, national park and Cassis as separate access systems.',
    hubIntro: 'Marseille’s port city, the Calanques National Park and Cassis–La Ciotat coast meet geographically but operate differently. Urban transit, summer reservations, fire closures, boat conditions and trail difficulty must be checked before choosing the route. Decide between city, land and sea before breakfast; switching access modes late can strand the return at the wrong port or trailhead.',
    stay: 'Three nights support one city day, one park or boat day and one flexible coast day. Base near a useful Metro or tram line; a Vieux-Port view is less valuable if every departure needs a steep or indirect transfer.',
    transfer: 'RTM serves the city and some park gateways; trains and buses reach Cassis or La Ciotat but stations may sit far from ports and trailheads. Boat excursions depart from named quays and are weather-dependent.',
    season: 'Summer heat and wildfire rules can restrict massif access, sometimes daily. Mistral and sea state affect boats year-round; shoulder seasons improve walking temperatures but not necessarily transport frequency.',
    fallback: 'Use Mucem, Fort Saint-Jean, Le Panier, Palais Longchamp or another city route when the park closes. A cancelled hike should not become an unauthorized cove entry; a cancelled boat should become land-side Marseille or Cassis.',
    sources: [
      ['https://www.marseille-tourisme.com/en/', 'Marseille Tourism — official city guide'],
      ['https://www.calanques-parcnational.fr/en', 'Calanques National Park — official access and protection notices'],
      ['https://www.rtm.fr/en', 'RTM — official Marseille transport information']
    ],
    guides: [
      g({
        slug: 'old-port-panier-mucem',
        name: 'Old Port, Le Panier & Mucem',
        instrument: 'Harbor-to-hill civic section',
        layout: 'port-city-section',
        imageQuery: 'Marseille Old Port Fort Saint Jean Mucem France',
        imageAlt: 'Marseille Old Port with Fort Saint-Jean and waterfront',
        purpose: 'Connect Marseille’s working Old Port to Le Panier and Mucem through one uphill-and-waterfront loop, keeping markets, museums and ferry operations in their real spaces.',
        summary: 'Start at the Vieux-Port, climb once through Le Panier, cross Fort Saint-Jean into Mucem, then return along the water without repeating the same lanes.',
        choices: [
          ['Port and Panier streets', 'Use the fish-market context, Hôtel de Ville side and public lanes of Le Panier. This favors urban history over a long museum visit.'],
          ['Mucem and Fort Saint-Jean', 'Give the museum and fort the main block, then use the Old Port as arrival and evening frame.'],
          ['Harbor crossing and viewpoints', 'Use the Ferry Boat or a verified short harbor connection plus Pharo or Saint-Victor, keeping the north-bank museum route compact.']
        ],
        access: 'Vieux-Port Metro is the central anchor. Marseille Saint-Charles sits uphill and requires Metro, bus or a purposeful stair approach; Mucem entrances and Fort Saint-Jean links may change with events.',
        tradeoff: 'Notre-Dame de la Garde, a full Mucem visit and deep Panier walk do not fit easily together. The route gives up the distant hill or uses it as a separate half-day.',
        stages: [
          ['Orient at the Old Port', 'Begin under the Ombrière or a named quay, identify working-market space and the evening Metro entrance before walking north.'],
          ['Climb through public Panier lanes', 'Use Vieille Charité or selected streets as the anchor, keeping resident doorways and service traffic clear.'],
          ['Cross into Fort Saint-Jean and Mucem', 'Follow the open public links and museum ticket, choosing exhibitions rather than attempting every gallery.'],
          ['Return along the harbor edge', 'Finish by Cathédrale de la Major or the quays, then use Metro or a verified ferry connection instead of climbing back through Le Panier.']
        ],
        fallback: 'If museum or fort links close, use Vieille Charité, port streets and a south-bank Saint-Victor or Pharo route. In wind, avoid exposed footbridges when staff restrict access.',
        watch: [
          ['The port remains operational', 'Keep clear of fish sales, vessel boarding and service zones; use designated crossings.'],
          ['Le Panier is residential', 'Public art does not make every stair or courtyard a visitor space. Keep noise and groups controlled.'],
          ['Fort links can close in wind or events', 'Follow staff and current signage rather than relying on a saved museum shortcut.']
        ],
        duration: 'Allow five to seven hours with Mucem and a meal; a port-and-Panier walk needs three to four hours.',
        combine: 'Combine Old Port, Panier and Mucem. Keep Notre-Dame de la Garde, Calanques and Cassis for separate routes.',
        verify: 'Check Mucem opening and bridge access, RTM service, port events and wind before setting the one-way loop.',
        sources: [
          ['https://www.mucem.org/en', 'Mucem — official museum and Fort Saint-Jean information'],
          ['https://www.marseille-tourisme.com/en/discover-marseille/traditions/ferry-boat/', 'Marseille Tourism — official Old Port Ferry Boat guide']
        ]
      }),
      g({
        slug: 'calanques-access-choice',
        name: 'Calanques Access: Hike, Boat or Shore',
        instrument: 'Fire-wind-reservation gate',
        layout: 'national-park-gate',
        imageQuery: 'Calanques National Park Marseille France cliffs sea',
        imageAlt: 'White limestone cliffs and blue water in Calanques National Park',
        purpose: 'Choose one legal Calanques access mode only after fire closure, reservation, trail difficulty, sea state and return transport agree.',
        summary: 'A Sugiton reservation, a signed Marseille-side trail, a Cassis approach and a licensed boat are different products; the safest useful day commits to one.',
        choices: [
          ['Signed land route', 'Choose a trail from an official gateway matched to ability, heat and daylight. Carry water because services inside the massif are limited.'],
          ['Licensed boat view', 'Use a named operator, route and quay when sea state permits. Boat viewing does not grant landing or swimming rights everywhere.'],
          ['Accessible shore alternative', 'Use a Marseille beach, Côte Bleue or urban nature route when park access is closed. This is preferable to forcing a restricted gate.']
        ],
        access: 'Check the national park’s daily access decision, any reservation requirement and the RTM route to the exact gateway. Parking restrictions are strict; a map pin at a cove is not a legal vehicle approach.',
        tradeoff: 'A strenuous hike and long boat excursion should not share one day. The route gives up collecting multiple calanques so water, heat and return margins remain safe.',
        stages: [
          ['Pass the official access gate', 'On the day, verify massif opening, reservation, weather and transport. If any required condition fails, activate the lower-risk alternative.'],
          ['Reach one named trailhead or quay', 'Follow the official transit stop and signs, carrying sufficient water and sun protection or arriving early for the boat briefing.'],
          ['Complete one route within limits', 'Stay on marked trails, obey swimming and landing rules, and turn back at the preset time rather than extending to another cove.'],
          ['Exit before heat, wind or service worsens', 'Reach the bus, port or urban shore with an earlier backup and report any hazard through official channels.']
        ],
        fallback: 'When the massif closes, use Mucem, Frioul only if boats operate, a supervised urban beach or another official city nature route. Never bypass barriers or enter by an informal road.',
        watch: [
          ['Fire closure is absolute', 'Daily summer decisions can prohibit access. Fines and rescue risk are secondary to the life-safety reason.'],
          ['Water and shade are limited', 'Carry enough water for the full route; there may be no refill or commercial service.'],
          ['Phone coverage does not replace preparation', 'Download official maps, tell someone the route and wear appropriate footwear.']
        ],
        duration: 'Give a hike or boat route most of a day, including transit and briefing. A short shore alternative can use three to five hours.',
        combine: 'Combine one park access mode with a simple Marseille meal or nearby shore. Keep Cassis town and the full city museum route separate.',
        verify: 'Check the park’s same-day access bulletin, reservation, Météo-France fire and wind, RTM gateway service and licensed boat status immediately before departure.',
        sources: [
          ['https://www.calanques-parcnational.fr/en', 'Calanques National Park — official daily access and conduct'],
          ['https://www.rtm.fr/en', 'RTM — official transport to Marseille trail gateways']
        ]
      }),
      g({
        slug: 'cassis-la-ciotat',
        name: 'Cassis, Cap Canaille & La Ciotat',
        instrument: 'Station-port-cliff transfer chart',
        layout: 'two-port-cliff-chart',
        imageQuery: 'Cassis port Cap Canaille France Mediterranean',
        imageAlt: 'Cassis harbor below the cliffs of Cap Canaille',
        purpose: 'Choose Cassis or La Ciotat as the port base and solve the station-to-waterfront link, then add one cliff, boat or cinema-history layer rather than racing between both towns.',
        summary: 'Cassis offers a compact port and Calanques gateway; La Ciotat offers a larger working waterfront and cinema history. Their stations sit away from the postcard centers.',
        choices: [
          ['Cassis port day', 'Use the port, old streets and one official boat or short shore route. Station bus or taxi and summer crowding determine the day.'],
          ['Cap Canaille viewpoint', 'Travel the Route des Crêtes only when road, wind and fire status permit. This is a car or tour layer, not a casual port walk.'],
          ['La Ciotat waterfront', 'Use the old port, Eden Théâtre context and one nearby calanque or coastal walk through current local access.']
        ],
        access: 'Cassis and La Ciotat rail stations are inland from their ports. Confirm the local bus, taxi or walk and final return; do not assume a coastal train drops visitors at the harbor.',
        tradeoff: 'Both ports, a long boat trip and Route des Crêtes exceed one day. The route chooses one town and one coastal contract; adding both ports turns local transfers into the main experience.',
        stages: [
          ['Complete the station-to-port link', 'At the station, locate the verified bus or taxi and note the evening return before entering the town center.'],
          ['Read one working waterfront', 'Walk the harbor and old streets without blocking boats or markets, then confirm boat or road conditions.'],
          ['Commit to sea, cliff or culture', 'Board the named boat, use an open road viewpoint or visit La Ciotat’s cinema and port layer. One choice owns the afternoon.'],
          ['Return before traffic compresses the train', 'Leave the port with ample bus or taxi margin; summer road queues can erase a tight connection.']
        ],
        fallback: 'If boats or cliff roads close, stay in the selected port town with museum, market and sheltered waterfront. If local transport fails before departure, remain in Marseille or use a rail-accessible city route.',
        watch: [
          ['Rail stations are not waterfront stops', 'The last mile can be crowded or infrequent; save the actual stop and timetable.'],
          ['Cliff roads close in wind or fire risk', 'Do not bypass barriers or walk on a closed road for the view.'],
          ['Boat products differ', 'Route length, landing, swimming and departure port vary. Read the official operator terms.']
        ],
        duration: 'Allow a full day for one port plus one boat or cliff layer. A simple town visit needs four to six hours including station transfers.',
        combine: 'Combine Cassis with one boat or approved viewpoint, or La Ciotat with cinema and shore. Keep the two ports and Marseille museums separate.',
        verify: 'Check local bus, train, licensed boat, Route des Crêtes and national-park access, wind, fire risk and the final station transfer.',
        sources: [
          ['https://www.ot-cassis.com/en/', 'Cassis Tourist Office — official port and access planning'],
          ['https://en.destinationlaciotat.com/', 'La Ciotat Tourist Office — official city and coast guide']
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
    hubIntro: 'Nice is a complete city base; the eastern coast toward Èze, Monaco and Menton and the western coast toward Antibes and Cannes form two separate rail and bus directions. Cliff villages require an additional vertical transfer beyond the coastal station.',
    stay: 'Four nights support Nice plus one eastern and one western excursion. Staying near Nice-Ville or a tram line simplifies both coast directions and airport access; an old-town room may add stairs and night noise.',
    transfer: 'TER trains are the coastal spine, with Lignes d’Azur buses and local networks for hills and town centers. Èze Village is above Èze-sur-Mer; Monaco stations and elevators require internal orientation.',
    season: 'Summer crowds, heat and beach conditions intensify pressure; winter can be mild but gardens and services vary. Major events in Monaco, Cannes or Nice can alter rail, road and security access.',
    fallback: 'Use Nice museums, markets and tram corridors when coast trains or cliff weather fail. In an excursion town, deepen the walkable center rather than adding another resort because the first transfer was delayed.',
    sources: [
      ['https://cotedazurfrance.com/', 'Côte d’Azur France — official regional tourism guide'],
      ['https://www.ter.sncf.com/sud-provence-alpes-cote-d-azur', 'TER ZOU! — official coastal rail information'],
      ['https://www.lignesdazur.com/en', 'Lignes d’Azur — official Nice metropolitan transport']
    ],
    guides: [
      g({
        slug: 'nice-old-town-hills',
        name: 'Nice Old Town, Promenade & Hills',
        instrument: 'Market-to-belvedere city ribbon',
        layout: 'seafront-city-ribbon',
        imageQuery: 'Nice Promenade des Anglais old town France panorama',
        imageAlt: 'Nice waterfront and old town along the Mediterranean',
        purpose: 'Connect Vieux Nice, the seafront and one hill or museum corridor without walking the Promenade twice or treating every viewpoint as adjacent.',
        summary: 'Begin at the market and old town, use Castle Hill or Cimiez as the elevation choice, then return by tram or a different shore line.',
        choices: [
          ['Old town and Castle Hill', 'Use Cours Saleya, public lanes, Castle Hill access and the eastern port edge. This is the classic compact route with real elevation.'],
          ['Promenade and museums', 'Keep the seafront bounded and use Matisse, Chagall or another selected museum reached by bus or tram.'],
          ['Port and contemporary Nice', 'Move from Place Garibaldi through the port and eastern neighborhoods, using the old town as a shorter food and architecture layer.']
        ],
        access: 'Nice-Ville station is inland; tram lines connect the center, old town edge, port and airport corridor. Choose the first stop from the route rather than defaulting to a long walk with luggage.',
        tradeoff: 'Castle Hill, Cimiez museums, a long beach block and the entire Promenade do not fit comfortably together. The route keeps one elevation and one cultural layer.',
        stages: [
          ['Enter through tram or market edge', 'Reach Jean Médecin, Old Town or the port according to the chosen direction, noting the final tram and station route.'],
          ['Read Vieux Nice once', 'Move through Cours Saleya and selected church or civic streets, keeping market and resident access clear.'],
          ['Commit to one elevation', 'Climb or use current access to Castle Hill, or take transit to Cimiez and one museum. Avoid adding both in afternoon heat.'],
          ['Return by seafront or tram', 'Use a bounded Promenade segment or tram to close the loop, following beach flags and event barriers.']
        ],
        fallback: 'In heat, rain or hill closure, use one museum, old-town interiors and tram-linked neighborhoods. If the beach is unsafe, stay on the promenade and obey flags and lifeguards.',
        watch: [
          ['Pebble beaches change footing', 'Use suitable footwear and supervised areas; shore break can be strong even on clear days.'],
          ['Castle Hill access can change', 'Lift, stairs and park hours vary; check before relying on an accessible ascent.'],
          ['Markets are working spaces', 'Respect vendor access and current trading days; avoid blocking Cours Saleya for photographs.']
        ],
        duration: 'Allow six to eight hours for old town, one elevation and a museum or seafront block. A compact old-town and hill route needs four hours.',
        combine: 'Combine Vieux Nice with Castle Hill, or the Promenade with one museum. Keep Monaco, Menton and Cannes for separate rail days.',
        verify: 'Check Lignes d’Azur service, market and museum opening, Castle Hill access, beach flags and local event closures.',
        sources: [
          ['https://www.explorenicecotedazur.com/en/', 'Explore Nice Côte d’Azur — official city planning'],
          ['https://www.lignesdazur.com/en', 'Lignes d’Azur — official tram and bus information']
        ]
      }),
      g({
        slug: 'eze-monaco-menton',
        name: 'Èze, Monaco & Menton',
        instrument: 'Vertical-coast transfer ladder',
        layout: 'cliff-coast-ladder',
        imageQuery: 'Eze village French Riviera Mediterranean France',
        imageAlt: 'Èze village perched above the Mediterranean on the French Riviera',
        purpose: 'Choose either the vertical Èze connection or a Monaco–Menton rail pair, rather than assuming all three famous stops lie on one flat coastal walk.',
        summary: 'Èze Village sits high above Èze-sur-Mer; Monaco is a vertical city inside a small territory; Menton is a separate garden-and-old-town stop. One transfer problem should lead the day.',
        choices: [
          ['Èze Village', 'Use the correct bus or a demanding signed climb, then give the hill village and garden time. The coastal station alone does not solve the ascent.'],
          ['Monaco in depth', 'Choose the Rock and old town, museums or Monte-Carlo district, using elevators and buses to manage elevation.'],
          ['Monaco plus Menton', 'Use TER for a bounded pair: one Monaco district and Menton old town or garden. This omits Èze.']
        ],
        access: 'TER serves Èze-sur-Mer, Monaco–Monte-Carlo and Menton. Èze Village requires an uphill bus, car or strenuous trail; Monaco’s station has several exits at different levels. Save the exact exit and onward stop.',
        tradeoff: 'The route gives up collecting Èze, Monaco and Menton together. Two coastal towns or one vertical village is the credible limit once hills, admissions and return trains are counted.',
        stages: [
          ['Choose coast or hill before boarding', 'Use TER for Monaco or Menton, or the correct bus strategy for Èze Village. Do not arrive at Èze-sur-Mer expecting a cable car.'],
          ['Orient to the vertical city', 'At Èze, follow village access; in Monaco, use signed elevators and the correct station exit; in Menton, connect station and old town.'],
          ['Commit to one paid or garden anchor', 'Use the Exotic Garden where open, Oceanographic Museum, palace-area visit or a Menton garden according to the chosen stop.'],
          ['Return along one rail direction', 'Finish in Menton or Monaco near the station, or descend from Èze with a confirmed bus. Keep one coastal train in reserve.']
        ],
        fallback: 'If the Èze bus or trail is unavailable, remain on the rail coast in Monaco or Menton. If a major event restricts Monaco, use Menton or Nice rather than trying to bypass barriers.',
        watch: [
          ['Èze has two very different places', 'Èze-sur-Mer and Èze Village are separated vertically; check the connection.'],
          ['Monaco exits can disorient', 'Station tunnels, elevators and steep streets lead to different districts. Follow the named exit.'],
          ['Events alter transport', 'Grand Prix and other events can close roads, stations or districts. Check exact dates before booking.']
        ],
        duration: 'Allow five to seven hours for Èze or Monaco alone, and seven to nine for a selective Monaco–Menton pair. Three stops need another day.',
        combine: 'Combine Monaco and Menton by TER, or Èze Village with a simple Nice return. Keep Antibes and Cannes on the western line.',
        verify: 'Check TER, Èze bus, trail condition, Monaco event access, museum or garden opening and the final coast return.',
        sources: [
          ['https://www.visitmonaco.com/en', 'Visit Monaco — official principality planning'],
          ['https://www.menton-riviera-merveilles.co.uk/', 'Menton Riviera & Merveilles — official destination guide']
        ]
      }),
      g({
        slug: 'antibes-cannes-west-coast',
        name: 'Antibes & Cannes West Coast',
        instrument: 'Two-port rail promenade',
        layout: 'west-riviera-diptych',
        imageQuery: 'Antibes old town port French Riviera France',
        imageAlt: 'Antibes old town and port on the French Riviera',
        purpose: 'Compare Antibes’s old town and port with Cannes’s festival and bay city through one rail line, choosing one museum or island rather than stacking both resort identities.',
        summary: 'Use TER to link the towns, give Antibes walls and one collection or Cannes old quarter and film-city context the longer block, then return without a beach-and-island overload.',
        choices: [
          ['Antibes in depth', 'Use old walls, market, port and Picasso Museum where open. This is the stronger historic and art route.'],
          ['Cannes city and bay', 'Connect Le Suquet, old port, Palais des Festivals exterior and Croisette selectively, recognizing event barriers.'],
          ['Two-town rail day', 'Give each a compact route and one meal, omitting island boats and long museum visits.']
        ],
        access: 'Both main stations are near their centers, making TER the clean spine. Island boats, Cap d’Antibes buses and beach areas add separate departure points and should not be assumed part of a two-town day.',
        tradeoff: 'A Lérins Islands trip, Cap d’Antibes walk, Picasso Museum and Cannes circuit exceed one day. The route keeps one cultural anchor and one second town.',
        stages: [
          ['Begin in the priority town', 'Arrive early in Antibes for market and walls or Cannes for Suquet and event-aware streets, noting the return platform.'],
          ['Complete one cultural anchor', 'Use the Picasso Museum, a Cannes exhibition or a bounded port-and-old-town route before boarding the train.'],
          ['Transfer once by TER', 'Move to the second town and follow a shorter contrasting loop rather than repeating beach, market and port categories.'],
          ['Finish beside the rail spine', 'End near Cannes or Antibes station with one train in reserve, avoiding a late peninsula or island departure.']
        ],
        fallback: 'If a museum closes or event blocks Cannes, deepen Antibes or use another confirmed city collection. If sea state cancels boats, keep the land-side town and do not replace it with an unplanned coastal hike.',
        watch: [
          ['Festival calendars rewrite Cannes', 'Security and private events may restrict the Palais, port and Croisette. Check current access.'],
          ['Museum capacity can be limited', 'Reserve or arrive early for the Picasso Museum and follow bag rules.'],
          ['Island boats create a full branch', 'Confirm return sailings and treat Lérins as the main excursion, not an add-on after two towns.']
        ],
        duration: 'Allow seven to nine hours for a selective two-town day and five to seven for either town in depth. An island trip should replace the second town.',
        combine: 'Combine Antibes and Cannes by TER. Keep Nice, Monaco and Èze on separate eastbound days.',
        verify: 'Check TER, market and museum hours, Cannes event access, boat status if used and the final coastal train.',
        sources: [
          ['https://www.antibesjuanlespins.com/en/', 'Antibes Juan-les-Pins Tourism — official visitor guide'],
          ['https://www.cannes-france.com/', 'Cannes Tourism — official city and event planning']
        ]
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
        choices: [
          ['Bastia city', 'Use Terra Vecchia, old port, market and citadel or museum as a full walk. This is the no-car route.'],
          ['Eastern Cap Corse', 'Choose Erbalunga, Macinaggio or another defined east-coast segment through current bus, road or boat access.'],
          ['Peninsula road day', 'Drive or tour one planned circuit with conservative stops, fuel and daylight. A full loop can be tiring and should not precede a ferry departure.']
        ],
        access: 'Bastia ferry port, rail station and old port are distinct but close urban nodes. Cap Corse services are limited and roads narrow; confirm rental terms, bus return and parking before leaving the city.',
        tradeoff: 'A deep Bastia visit and complete Cap Corse loop exceed one day. The route keeps the city plus one northern segment or gives the peninsula its own day.',
        stages: [
          ['Orient among port and station', 'Confirm ferry check-in, rail or bus departure before walking into Terra Vecchia, especially with luggage.'],
          ['Read Bastia vertically', 'Connect old port, market and citadel through one climb, using the museum or churches selectively.'],
          ['Commit to one Cap Corse line', 'Take the verified bus, boat or road route along one coast, stopping only where legal parking and public access exist.'],
          ['Return without a ferry gamble', 'Reach Bastia or lodging well before check-in or darkness; do not schedule the peninsula loop on the same margin as an outbound sailing.']
        ],
        fallback: 'If peninsula weather or roads fail, stay in Bastia for museum, market and city viewpoints. If a ferry is delayed, keep bags and transport flexible rather than beginning a distant road excursion.',
        watch: [
          ['Ferry time includes check-in', 'Published departure is not the arrival deadline. Follow the operator’s vehicle and foot-passenger rules.'],
          ['Peninsula roads demand concentration', 'Narrow curves and limited shoulders make rushed sightseeing unsafe.'],
          ['Coastal paths may have seasonal controls', 'Check fire, erosion and private-land boundaries before walking beyond a village.']
        ],
        duration: 'Allow five to seven hours for Bastia and a full day for one Cap Corse sector. A complete peninsula loop may be better with an overnight.',
        combine: 'Combine Bastia with Erbalunga or another near east-coast stop. Keep Saint-Florent, Calvi and the west side for separate plans.',
        verify: 'Check ferry or rail, Cap Corse bus or road, museum and market hours, fire and wind notices and the final return.',
        sources: [
          ['https://www.bastia-tourisme.com/en/', 'Bastia Tourist Office — official city planning'],
          ['https://www.capcorse-tourisme.corsica/en/', 'Cap Corse Tourism — official peninsula guide']
        ]
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
        choices: [
          ['Bonifacio city and cliffs', 'Use the marina, upper town, official stair or viewpoint access and current monument routes. This is a complete day.'],
          ['Bonifacio boat', 'Choose a licensed circuit with clear sea-state, route and return terms. A boat view replaces a long cliff walk.'],
          ['Porto-Vecchio and one beach', 'Use the old town and one named, legally accessed beach with parking or shuttle confirmed. Beach-hopping multiplies congestion.']
        ],
        access: 'Figari airport, Porto-Vecchio and Bonifacio require bus, transfer or car planning. Parking sits outside sensitive centers and beaches; summer shuttles and road queues can determine the practical route.',
        tradeoff: 'Bonifacio, a long boat circuit and several beaches exceed one day. The route keeps one town and one sea or beach contract.',
        stages: [
          ['Reach the selected southern base', 'Complete airport, bus or parking transfer and record the final return before climbing or boarding.'],
          ['Read harbor and upper town or citadel', 'In Bonifacio, move from marina to upper town once; in Porto-Vecchio, use the old center before driving to the coast.'],
          ['Commit to boat, cliff or beach', 'Follow licensed operator, official stair and trail, or one named beach’s access rules. Respect heat, sea flags and protected dunes.'],
          ['Exit before road pressure peaks', 'Return to the base, fuel and pack before an airport or ferry transfer; do not add another beach on the route out.']
        ],
        fallback: 'If sea or fire conditions close the chosen activity, use the town, museum, harbor and shaded streets. If road congestion blocks a beach, remain in the base rather than parking illegally in vegetation.',
        watch: [
          ['Cliff stairs and heat are demanding', 'Carry water, use footwear and consult accessibility; do not attempt closed stairs.'],
          ['Beach access protects fire and habitat', 'Use designated parking or shuttles and keep vehicles off roadside vegetation.'],
          ['Boats depend on sea state', 'Operator cancellation is a safety decision; do not seek an unofficial substitute.']
        ],
        duration: 'Allow five to seven hours for Bonifacio alone and a full day for Porto-Vecchio plus one beach. A boat adds several hours and should replace another major layer.',
        combine: 'Combine Bonifacio with one boat or Porto-Vecchio with one beach. Keep both towns as separate days when using public transport.',
        verify: 'Check Figari transfer, parking or shuttle, licensed boat, fire and sea conditions, monument or stair access and the final airport or ferry connection.',
        sources: [
          ['https://www.bonifacio.fr/en/', 'Bonifacio Tourist Office — official city and boat planning'],
          ['https://www.portovecchio-tourisme.corsica/en/', 'Porto-Vecchio Tourism — official south-coast planning']
        ]
      })
    ]
  })
];
