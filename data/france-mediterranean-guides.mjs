import { defineFranceCluster, franceGuide } from './france-guide-builder.mjs';

const g = franceGuide;
const c = defineFranceCluster;

export const franceMediterraneanClusters = [
  c({
    slug: 'languedoc-camargue',
    name: 'Montpellier, Nîmes & the Camargue',
    region: 'Occitanie and western Provence',
    countryCardIntro: 'Montpellier, Nîmes and Arles sit on a strong rail corridor, but the Pont du Gard, Camargue wetlands and coast require distinct buses, bicycles, tours or cars. Roman monuments, living cities and protected lagoons should not be collapsed into one hot-weather checklist.',
    band: 'mediterranean-island',
    family: 'stone-lagoon-tram-sheet',
    label: 'Stone and lagoon sheet',
    tagline: 'Choose a rail base first; treat the aqueduct and wetlands as separate last-mile days.',
    hubIntro: 'Montpellier, Nîmes and Arles sit on the regional rail spine, but Sète, the Pont du Gard and Camargue visitor sites each add a different walk, local network or rural connection. Decide which city earns the overnight before adding a coast or wetland day; a station name alone does not solve the last mile.',
    stay: 'Four nights work best as two bases, not four one-night stops: spend two nights around Montpellier Saint-Roch/Comédie for the Écusson and one Sète rail day, then choose two nights in Nîmes Centre for the Roman core plus a Pont du Gard day, or in Arles for a city day plus one Camargue departure. Five nights can give Montpellier and either Nîmes or Arles more breathing room; six nights supports two nights in each of the three rail cities and at least one full day per base, with the actual number of excursions limited by arrival, departure and hotel moves. Add a seventh night if you want a separate full city day and rural excursion in all three bases. Stay near the station you will actually use: Montpellier Saint-Roch is central, Sud de France is outside the old center, and Nîmes Pont du Gard is a TGV station, not the Roman site. Arles is a walkable base for its center and the listed Camargue bus corridor. Count a hotel move as a partial day, and skip one city rather than adding a rushed check-out.',
    transfer: 'Use TER Occitanie for the Montpellier–Sète–Nîmes–Arles rail corridor, checking the exact station and dated return in the official planner. Montpellier Saint-Roch serves the center; Sud de France needs its own connector. For the aqueduct, Pont du Gard names liO Car line 121 from Nîmes and the destination “Vers – Rond Point Pont du Gard”; Nîmes Centre is the rail gateway, not Nîmes Pont du Gard TGV station. For the wetland, ENViA’s A50 timetable lists Arles Gare SNCF, Pont de Gau and Saintes-Maries-de-la-Mer (La Brise); its summer and October–March schedules differ. Confirm the current departure, service day and return before booking either excursion.',
    season: 'Plan exposed stone, lagoon and river walks for cooler hours in summer; heat, mistral, mosquitoes, fire controls, event dates and shorter winter daylight can change the usable route. The Camargue’s water, trail access and wildlife vary naturally, so flamingos or horses are not a guaranteed sighting. Markets, museums, beach access and rural buses follow their own calendars: confirm each for the date instead of relying on a remembered weekday or seasonal pattern.',
    fallback: 'When heat, wind, fire restrictions, a missed rural bus or a closed track removes an open-air plan, stay in the city already reached: use a currently open museum, a bounded historic-center walk or a market if it is operating. Do not substitute a chain of unplanned taxis or enter a restricted wetland road. Keep a confirmed rail or bus return, water and daylight margin before leaving a base.',
    reviewDisclaimer: 'The official TER Occitanie, TaM, liO, Pont du Gard and ENViA pages were checked on 12 October 2026. Exact train/bus departures, service days, fares, admission, market and museum hours, and access can change; this guide quotes no live fare or guaranteed frequency. Reopen the operator and site pages for the exact date, including the return leg.',
    hubContent: {
      reviewedOn: { label: '12 October 2026', iso: '2026-10-12' },
      itineraryLabel: 'A four-to-six-night base choice',
      itineraryHeading: 'Add nights to a rail base before adding another check-in.',
      itineraryIntro: 'Use this as a sequence of base decisions, not a promise of daily departures. Check TER and the rural operator for the exact date before committing to the next hotel.',
      itinerary: [
        ['4 nights · two bases', 'Spend two nights near Montpellier Saint-Roch/Comédie, using one full day for Montpellier or Sète. Spend the other two near Nîmes Centre for the Roman center and, only with a confirmed liO 121 return, Pont du Gard; choose Arles instead when a Camargue day matters more. Do not try to add both rural branches.'],
        ['5 nights · a slower second base', 'Keep the two-night Montpellier start and give Nîmes or Arles three nights. The extra night lets a city day and its rural excursion stay separate, or absorbs a weather fallback. Use a single rail transfer between bases rather than a same-day coast–aqueduct–wetland circuit.'],
        ['6 nights · all three city bases', 'Two nights each in Montpellier, Nîmes and Arles gives each base a full day, but arrival, departure and two hotel moves limit how many rural excursions fit. Add a seventh night if you want a separate full city day and rural branch in all three. Keep luggage out of excursion days and leave a rail margin before a flight or long-distance train.'],
        ['Arrival and departure margin', 'Treat the first and last days as station-to-hotel days until a live itinerary proves otherwise. If a departure is early or a rural line has only a limited dated service, drop the farthest excursion rather than depend on a last connection.']
      ],
      faq: [
        ['How many nights should I book?', 'Four nights are a useful minimum for two bases and one regional excursion. Five nights give one base a slower day; six nights can cover Montpellier, Nîmes and Arles with two nights each. The six-night version involves two check-outs, so skip a city if moving luggage would cost the day.'],
        ['Should I sleep in Nîmes or Arles?', 'Choose Nîmes Centre for its walkable Roman core and the official liO 121 access chain toward Vers–Rond Point Pont du Gard. Choose Arles for its own center and the ENViA A50 corridor toward Pont de Gau or Saintes-Maries-de-la-Mer. They solve different day trips.'],
        ['Can I use the TGV stations for the monuments?', 'No station name replaces the last mile. Nîmes Centre is the city gateway to the bus plan; Nîmes Pont du Gard is a TGV station, not the aqueduct entrance. Montpellier Sud de France is also separate from the central Saint-Roch station. Read the complete ticket and connection.'],
        ['Can I cover the coast, aqueduct and Camargue in one day?', 'Not as a dependable public-transport plan. Give each branch a separate day and base, verify both directions, and let weather or the dated operator timetable decide whether the rural outing runs.']
      ],
      sources: [
        ['https://www.ter.sncf.com/occitanie', 'TER Occitanie — official regional rail planner'],
        ['https://www.tam-voyages.com/fr/cartographie/transport', 'TaM — Montpellier tram/bus map and service information'],
        ['https://www.montpellier-france.com/', 'Montpellier Tourism — official city visitor guide'],
        ['https://en.tourisme-sete.com/', 'Sète Tourist Office — official city and coast guide'],
        ['https://www.lio-occitanie.fr/horaires-et-plans/', 'liO Occitanie — dated regional bus timetables and plans'],
        ['https://pontdugard.fr/en/getting-here', 'Pont du Gard — official access, liO line 121 and named destination'],
        ['https://www.nimes-tourisme.com/en/', 'Nîmes Tourism — official city visitor guide'],
        ['https://www.tout-envia.com/du-nouveau-sur-mon-reseau/', 'ENViA — current Arles/Saintes-Maries bus network and A50 timetable'],
        ['https://www.arlestourisme.com/en/', 'Arles Camargue Tourism — official city and regional guide'],
        ['https://www.parc-camargue.fr/', 'Camargue Regional Nature Park — protected-area notices'],
        ['https://meteofrance.com/', 'Météo-France — official weather information']
      ]
    },
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
        summary: 'Walk Montpellier from Comédie through the Écusson to Peyrou, or use a dated TER trip to Sète for its canal center; a two-city day must stay selective.',
        searchSummary: 'Walk Montpellier from Comédie through the Écusson to Peyrou, or use a dated TER trip to Sète for its canal center; a two-city day must stay selective.',
        reviewedOn: { label: '12 October 2026', iso: '2026-10-12' },
        choices: [
          ['Montpellier old and new', 'Connect Écusson, Peyrou and one contemporary district by tram. This shows the city’s layers without a coastal transfer.'],
          ['Sète canal and port city', 'Use the station-to-canals route, market and one museum or Mont Saint-Clair connection. Fishing-port work remains distinct from visitor space.'],
          ['Two-city rail day', 'Keep Montpellier to a compact center and Sète to a canal loop. Use TER Occitanie’s dated planner and leave a return option; no fixed headway is assumed here.']
        ],
        access: 'Use TER Occitanie for the Montpellier–Sète rail leg and check which station appears on the ticket: Montpellier Saint-Roch sits by the center, while Sud de France is outside the historic core and needs its own TaM connector; Sète station is north of the canal center. Do not assume that the regional train, city tram and Sète local bus share one ticket or one timetable.',
        tradeoff: 'For two or three nights, sleep near Saint-Roch/Comédie if Montpellier is the anchor; stay near Sète’s station-to-canal side only when the port city deserves an early start or evening. A hotel change buys coast time but consumes a check-in block. On a day trip, choose either the Montpellier center or Sète as the substantial walk; a beach, full museum and both cities do not fit reliably.',
        stages: [
          ['Enter through the correct station', 'From Saint-Roch, walk toward Place de la Comédie. From Sud de France, first use the live TaM network map to solve the connector. In Sète, leave the station north of the canals and keep the rail return visible.'],
          ['Walk one Montpellier line', 'Use Comédie → Écusson lanes → Promenade du Peyrou and its esplanade; add Antigone or another modern district only as a named TaM tram branch. This is a neighborhood sequence, not a measured distance.'],
          ['Or take one Sète line', 'From Sète station walk toward Quai de la Résistance and the central canals, then choose the covered market/port area or a museum. Mont Saint-Clair is a separate exposed climb or current local-bus connection, not an automatic continuation.'],
          ['Close beside the booked return', 'Use TER Occitanie for the intercity leg and reopen the dated timetable before leaving the center. If the return window is narrow, end by the station and omit the beach, hill or second city.']
        ],
        fallback: 'In heat, a tram disruption or strong wind, keep the Montpellier route to shaded Écusson streets, a currently open interior and one short transit ride. In Sète, use the canal center and an open museum rather than the hill or exposed waterfront. If TER service changes, remain in the city already reached and check the operator notice before attempting a road transfer.',
        watch: [
          ['Two Montpellier stations are not equivalent', 'A TGV arrival at Sud de France needs transfer time and may affect the last train.'],
          ['Mont Saint-Clair adds a real climb', 'Use the current bus or limit the route when heat and mobility make the ascent unsuitable.'],
          ['Ports are workplaces', 'Stay clear of loading, auction and boat operations; use designated visitor paths.']
        ],
        duration: 'Allow a half to full day for one city and keep a two-city day to a short Montpellier center plus one Sète canal loop. Add time for the actual TER departure and station access; the guide does not promise a departure interval.',
        combine: 'Combine Montpellier and Sète only along the rail line. Keep Nîmes, Pont du Gard and the Camargue for separate days.',
        verify: 'Check the exact TER stations and return, TaM tram/bus map, Sète Agglopôle local transport, current market and museum hours, any event street changes, weather and the last suitable train. No fare or fixed frequency is quoted.',
        sources: [
          ['https://www.montpellier-france.com/', 'Montpellier Tourism — official city planning'],
          ['https://www.tam-voyages.com/fr/cartographie/transport', 'TaM — Montpellier tram/bus map and service information'],
          ['https://www.ter.sncf.com/occitanie', 'TER Occitanie — official dated rail planner'],
          ['https://en.tourisme-sete.com/', 'Sète Tourist Office — official port and city guide']
        ],
        operations: {
          entryReturn: 'For Montpellier, begin at Saint-Roch/Comédie and walk the Écusson–Peyrou axis; use the TaM map only when choosing a tram-served district. For Sète, start at Gare de Sète, walk toward the central canals and finish back toward the station. If the ticket says Sud de France, plan its connector before setting a museum or train time.',
          booking: 'Book accommodation around Saint-Roch/Comédie for a short Montpellier stay; choose Sète only when its canal/port day merits moving bags. Check TER tickets and any timed museum entry for the exact date. Market opening, event diversions and local bus links are not assumed to follow the same calendar year-round.',
          weather: 'Move Peyrou, the waterfront and Mont Saint-Clair to cooler hours in heat or strong wind. On a stormy or very hot day, replace the hill/beach branch with a currently open museum and compact tram-free walk; if the return train changes, stay local rather than crossing to the other city.'
        },
        siteContext: {
          label: 'MONTPELLIER–SÈTE WALKING PLAN',
          heading: 'Keep the rail day inside two walkable city fields',
          intro: 'Both centers reward walking, but neither station places every waterfront, hill and museum at the same door. Choose one coherent neighborhood line and protect the rail return.',
          details: [
            ['2–3 nights · Montpellier base', 'Stay around Saint-Roch, Comédie or the Écusson edge for a walk-home evening. The Sud de France TGV station is a different arrival; check its TaM connector before choosing a hotel or timed visit.'],
            ['City walk · Écusson to Peyrou', 'Start at Place de la Comédie, pass through the old-center lanes toward Place Royale du Peyrou, then decide whether energy allows a tram ride to Antigone or another modern quarter. Do not turn this into a cross-city backtrack.'],
            ['Sète day · station to canals', 'Use TER to Gare de Sète, then walk into the canal/port center and choose the market or a museum. Mont Saint-Clair adds a separate hill or current local bus leg; verify it and the return before setting out.'],
            ['Season and bookings', 'Summer heat, beach crowding and event dates make early starts useful. Recheck the rail planner, TaM map, Sète local network, museum/market hours and weather; no departure interval or opening time is fixed in this guide.']
          ]
        },
        faq: [
          ['Where should I stay for Montpellier and Sète?', 'Use two or three nights around Montpellier Saint-Roch/Comédie when the Écusson is the anchor; Sète station/canal-side lodging suits a slower port visit. A day trip avoids moving bags, while an overnight in Sète is worthwhile only if you want an early or evening waterfront walk.'],
          ['Is Montpellier Sud de France the central station?', 'No. Saint-Roch serves the historic center; Sud de France is outside it and requires a separate connector. Read the exact destination on the ticket and check the TaM map before booking around a timed entry.'],
          ['Can I add Mont Saint-Clair after the Sète canal walk?', 'Only if the climb or date-specific local bus, weather, opening and TER return fit. Treat it as the day’s hill branch, not a guaranteed short walk from the canal center.']
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
        searchSummary: 'Use the Arena, Maison Carrée and Jardins de la Fontaine as one city line; the aqueduct is a separate rural site whose last bus and heat exposure determine the pairing.',
        reviewedOn: { label: '12 October 2026', iso: '2026-10-12' },
        choices: [
          ['Roman Nîmes', 'Keep the Arena, Maison Carrée, Musée de la Romanité and fountain gardens together. This is a full city day.'],
          ['Pont du Gard in depth', 'Give the aqueduct, museum, trails and river context most of the day. Access and return are the main contract.'],
          ['City plus aqueduct', 'Use one or two Nîmes monuments early and a confirmed afternoon bus or car to the Pont du Gard. This sacrifices museum depth.']
        ],
        access: 'Use Nîmes Centre for the walkable Roman center. The Pont du Gard’s official directions name liO Car line 121 from Nîmes and the destination “Vers – Rond Point Pont du Gard”; liO Train to Nîmes Centre plus that bus is a separate last-mile chain. Nîmes Pont du Gard TGV station is not at the monument. Check the exact service day, boarding point, destination and return in the dated liO planner before choosing rail or a tour.',
        tradeoff: 'A complete Nîmes museum/monument day and the aqueduct landscape cannot both be deep visits on one day. Two nights near Nîmes Centre allow one city walk and one rural day without moving hotels; a one-night stop is better for the Roman core alone. Choose either one major Nîmes interior plus a short aqueduct block or give the aqueduct its own day.',
        stages: [
          ['Walk the compact city spine', 'From Nîmes Centre head to the Arena and Esplanade Charles-de-Gaulle, continue toward Maison Carrée and the Écusson lanes, then use Jardins de la Fontaine as the uphill garden branch. This is a city circuit, not a measured route.'],
          ['Choose one ticketed interior', 'Make the Arena or Musée de la Romanité the anchor, then keep Maison Carrée/gardens as the exterior layer that current access and energy allow. Check each site’s own entry terms.'],
          ['Use the named rural connection', 'For the aqueduct day, follow Pont du Gard’s official directions: liO Car 121 from Nîmes to “Vers – Rond Point Pont du Gard,” or a separately confirmed tour/road plan. The Nîmes Pont du Gard TGV station is not the site entrance.'],
          ['Protect the bus and station return', 'Reopen the valid-for-date liO timetable before entering the river valley. Use signed paths and current site/river notices; if the return service does not fit, stay in Nîmes or book a different plan before departure.']
        ],
        fallback: 'If liO 121 does not match the travel date, the site entrance is restricted or heat makes the exposed valley unsuitable, stay in Nîmes for the Roman museum, Écusson and gardens. Do not use the TGV station name as a substitute for the monument or improvise a final taxi after the bus has gone.',
        watch: [
          ['Station and destination are different', 'Use Nîmes Centre for the Roman city and the official “Vers – Rond Point Pont du Gard” bus destination for the aqueduct. The TGV station is not the visitor entrance.'],
          ['The rural timetable is date-specific', 'The official bus planner lists validity periods; confirm the service day and return before buying the rail leg or leaving town. Frequency and fares are not asserted here.'],
          ['Stone and river exposure change the visit', 'Use water and shade, follow current river/fire restrictions and select a signed viewpoint. If the access or weather notice changes, use Nîmes as the fallback.']
        ],
        duration: 'Allow five to seven hours for Nîmes alone and a full day for the Pont du Gard plus a short city block. The aqueduct site deserves at least three to four hours.',
        combine: 'Combine one Nîmes anchor with the Pont du Gard only on a verified connection. Keep Arles and the Camargue separate.',
        verify: 'Check the Arena, Maison Carrée and museum’s individual entry calendars; Pont du Gard’s dated line 121 directions and “Vers – Rond Point Pont du Gard” stop; the liO service day and return; plus heat, river and fire notices. No departure time or fare is promised.',
        sources: [
          ['https://www.nimes-tourisme.com/en/', 'Nîmes Tourism — official city planning'],
          ['https://www.ter.sncf.com/occitanie', 'TER Occitanie — official rail planner to Nîmes Centre'],
          ['https://www.lio-occitanie.fr/horaires-et-plans/', 'liO — current dated regional bus timetables'],
          ['https://pontdugard.fr/en/getting-here', 'Pont du Gard — official line 121, stop and site access']
        ],
        operations: {
          entryReturn: 'For the city, start at Nîmes Centre and keep the Arena/Esplanade → Maison Carrée/Écusson → Jardins de la Fontaine sequence to one side of the center. For the aqueduct, plan the complete TER-to-Nîmes Centre plus liO Car 121 chain to “Vers – Rond Point Pont du Gard”; confirm the actual boarding stop and reverse journey in the official date-valid timetable.',
          booking: 'Two nights around Nîmes Centre suit the Roman walk and the separate aqueduct day. Reserve a timed monument only after its official calendar confirms the date; the rural bus is its own dated service and the site admission is a separate decision. Do not select Nîmes Pont du Gard TGV as an aqueduct hotel or bus endpoint.',
          weather: 'In summer heat, put the city walk or exposed valley segment early and shorten the viewpoint loop. On mistral, storm, fire restriction or a bus/calendar mismatch, stay in the shaded city core and use an open museum; do not force a same-day taxi replacement.'
        },
        siteContext: {
          label: 'NÎMES–PONT DU GARD ACCESS PLAN',
          heading: 'Keep the Roman city and aqueduct on separate clocks',
          intro: 'Nîmes is a walkable city sequence. The aqueduct is a separate rural destination with a named bus stop and a return timetable that controls the day.',
          details: [
            ['2 nights · Nîmes Centre', 'Stay by Nîmes Centre/Écusson for the old town on foot and an early departure toward the bus. A single night can cover the center, but leaves little margin for a date-limited rural connection.'],
            ['City walk · Arena to gardens', 'Connect the Arena and Esplanade, Maison Carrée and the old center, then decide whether to climb to Jardins de la Fontaine. Pick one interior and leave the other monuments as exterior/context stops.'],
            ['Pont du Gard · line 121', 'The official site identifies liO Car 121 from Nîmes and “Vers – Rond Point Pont du Gard.” Route 121’s valid dates and departures can change; verify the complete outbound and return journey, not only a search result for Nîmes.'],
            ['Season and fallback', 'Summer river heat and seasonal/date-valid transport can shorten the visit. If the bus or valley access is unsuitable, use a second Nîmes city day; no fare, opening hour or guaranteed bus frequency is printed here.']
          ]
        },
        faq: [
          ['Which station serves the Pont du Gard?', 'Nîmes Centre is the rail gateway for the city and the official bus directions. Pont du Gard’s access page names liO Car 121 and the stop “Vers – Rond Point Pont du Gard.” Nîmes Pont du Gard TGV is not the aqueduct entrance.'],
          ['How many nights do I need in Nîmes?', 'Two nights make room for a full city walk and a separate aqueduct day from one hotel. With one night, choose either the city interior route or the rural excursion rather than expecting both to fit around arrival and departure.'],
          ['Can I visit the Arena, Maison Carrée, museum, gardens and aqueduct together?', 'The sites can be selected across more than one day. For one day, choose one principal indoor monument and a bounded garden or old-town walk; the aqueduct needs its own confirmed transport and return window.']
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
        searchSummary: 'Arles’s monuments and Rhône streets deserve their own circuit; the Camargue is a living wetland and agricultural region, not a guaranteed flamingo-and-horse drive-by.',
        reviewedOn: { label: '12 October 2026', iso: '2026-10-12' },
        choices: [
          ['Roman Arles', 'Use the arena, theater, Alyscamps or archaeological museum selectively through a current pass or tickets. This is a full city day.'],
          ['Art and Rhône city', 'Trace Van Gogh context carefully without presenting modern streets as preserved canvases, then use museums and river edges.'],
          ['Camargue field day', 'Choose one official visitor center, signed wetland route or guided excursion with transport, weather and closing time confirmed.']
        ],
        access: 'Arles Gare SNCF is north of the historic core and walkable to its center. For a no-car wetland day, ENViA route A50 lists Gare SNCF Arles, Pont de Gau and Saintes-Maries-de-la-Mer (La Brise); choose one named stop, then confirm that the dated run serves it in both directions. The operator separates summer and October–March tables. A car, bicycle or guided trip is a different plan with its own access and return.',
        tradeoff: 'Two nights near Arles center/Gare SNCF let you give one full day to the Roman city and another to either Pont de Gau or Saintes-Maries-de-la-Mer. A single night usually means choosing the city or wetlands, while a third can absorb a weather fallback or second nature stop. Do not plan both A50 destinations plus all Arles interiors in the same day.',
        stages: [
          ['Walk Arles in one historic-center loop', 'From Gare SNCF enter via Place de la République; connect Place du Forum, the Roman Theatre and Arena, then return by the Rhône edge or station-side streets. Treat Alyscamps as a separate branch rather than a spontaneous extension.'],
          ['Choose a city anchor', 'Give the Arena/theater or one currently open museum the main interior block; let the other monuments, Place de la République and Rhône remain a compact exterior walk. Check event-day street and entry changes.'],
          ['Choose one Camargue destination', 'From Arles Gare SNCF use ENViA A50 only after checking whether the dated trip serves Pont de Gau or La Brise in Saintes-Maries-de-la-Mer. Pick one site, its current opening/access rules and the return service.'],
          ['Keep the wetland visit inside the return window', 'Follow signed visitor paths and any park/road restrictions. Wildlife is not scheduled; if service, wind, fire or access changes, return to Arles and use the city fallback rather than entering a closed track.']
        ],
        fallback: 'If the A50 service does not match the date, a destination is closed, or wind, heat and fire notices constrain the wetlands, stay in Arles for an open museum, the old-center loop and Rhône edge. If a festival changes monument access, reopen the Arles visitor notice; do not substitute a wetland track that the park or road authority has restricted.',
        watch: [
          ['A50 has different seasonal tables', 'The ENViA operator separates summer and October–March service. Confirm service day, stop, current timetable and the return for your date; this guide gives no departure time or frequency.'],
          ['Wetland access and wildlife vary', 'Flood, fire, wind, breeding seasons and management work can close a route. Stay on signed paths and observe wildlife from designated areas without approaching or baiting it.'],
          ['Events and heat reshape the city day', 'Arles festivals can change access, lodging demand and street routing. Book only after confirming the date-specific event and monument notices; shift exposed walks to a cooler time.']
        ],
        duration: 'Allow six to eight hours for Arles and a separate full day for the Camargue from a suitable base. A short visitor-center excursion can pair only with a limited city morning.',
        combine: 'Combine Arles with one nearby official wetland site when transport is firm. Keep Saintes-Maries, Aigues-Mortes and multiple reserves for separate routes.',
        verify: 'Check Arles monument/event dates, ENViA A50’s applicable summer or October–March timetable and the exact Gare SNCF/Pont de Gau/La Brise stop pair, the chosen site’s own access and opening notice, the park/road/fire map and weather. The schedules, fares and openings can change.',
        sources: [
          ['https://www.arlestourisme.com/en/', 'Arles Camargue Tourism — official city and region planning'],
          ['https://www.tout-envia.com/du-nouveau-sur-mon-reseau/', 'ENViA — current A50 route and date-valid timetable'],
          ['https://www.parc-camargue.fr/', 'Camargue Regional Nature Park — official protected-area information'],
          ['https://www.parcornithologique.com/en/practical-information/open-hours.html', 'Parc ornithologique de Pont de Gau — official visitor access and seasonal hours'],
          ['https://meteofrance.com/', 'Météo-France — official weather information']
        ],
        operations: {
          entryReturn: 'For the city, walk from Gare SNCF through Place de la République and Place du Forum to the Roman Theatre/Arena, then return by the Rhône edge or station-side streets. For Camargue, board ENViA A50 at Gare SNCF only after its date-valid timetable confirms the chosen Pont de Gau or La Brise trip and return. The bus stop is the start of a named visit, not permission to roam off signed paths.',
          booking: 'Two nights near the center or station support one Arles day plus one wetland day without packing between them; three nights provide a weather buffer or a second separate destination. Check festival lodging demand, current monument entry, the A50 season table and the chosen site’s own hours before paying for a nonrefundable rural stay or tour.',
          weather: 'In heat, move the stone-center walk early and shorten the open wetland block. Strong wind, fire risk, flooding or a park closure can remove the rural day; keep the Arles museum/old-town route as the backup and follow current closures rather than a saved map.'
        },
        siteContext: {
          label: 'ARLES–CAMARGUE BASE AND ROUTE',
          heading: 'Use Arles as the walkable base, then name one wetland stop',
          intro: 'Arles has a compact historic center; the Camargue spreads across a working landscape. The bus reaches selected points, not a complete loop of every reserve and village.',
          details: [
            ['2 nights · Arles center', 'Stay between Gare SNCF and the historic core for the station, monuments and evening walk. Two nights make room for a full city day and a separate A50 excursion; add a third for a weather or second-stop buffer.'],
            ['City walk · Republic to Arena', 'Walk Place de la République → Place du Forum → Roman Theatre → Arena, then use a Rhône-side return. Place the Alyscamps branch on another block so the center loop remains bounded.'],
            ['A50 · Pont de Gau or La Brise', 'The official ENViA timetable lists Arles Gare SNCF, Pont de Gau and Saintes-Maries-de-la-Mer/La Brise. Choose one destination, check that the date-valid run calls there, and plan the return before setting out.'],
            ['Season and booking', 'The operator publishes different summer and October–March tables. Heat, mistral, fire/flood closures, event traffic and variable wildlife also change the day. Confirm the chosen park/site opening, path access and event calendar; no live departure or fare is claimed.']
          ]
        },
        faq: [
          ['How many nights should I stay in Arles?', 'Two nights are useful for a full historic-center day and a separate Camargue visit. A third night protects a weather fallback or lets you choose another destination; one night usually requires choosing either the city or wetlands.'],
          ['Which Camargue stop can I reach by bus from Arles?', 'ENViA route A50’s current timetable lists Gare SNCF Arles, Pont de Gau and Saintes-Maries-de-la-Mer (La Brise). Confirm that the dated run serves the stop and has a suitable return; its summer and October–March schedules differ.'],
          ['Can I count on flamingos or a complete wetland loop?', 'No. Wildlife varies by season and conditions, and the bus only serves listed stops. Use signed access, obey park/road closures and choose one visitor site instead of assuming a through-route across the wetlands.']
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
    reviewDisclaimer: 'Current entry, TER/Orizo/A2 service, market schedules, studio reservations, fire closures and event access can change; confirm the official details and your return plan for the travel date.',
    sources: [
      ['https://provence-alpes-cotedazur.com/en/', 'Provence-Alpes-Côte d’Azur tourism — official regional guide'],
      ['https://www.ter.sncf.com/sud-provence-alpes-cote-d-azur', 'TER ZOU! — official regional rail information'],
      ['https://zou.maregionsud.fr/en/', 'ZOU! — official regional bus and train planning']
    ],
    hubContent: {
      label: 'Wall, market and village folio',
      tagline: 'Give Avignon and Aix their own city days; add the Luberon only after solving its last mile.',
      hubIntro: 'Avignon is a walled papal city and rail base; Aix is a separate fountain-and-market city with its own distant TGV transfer. Choose which urban core deserves your full day before adding a Luberon village branch that the regional bus network does not turn into a simple loop.',
      stay: 'Two nights buy one full day after arrival and departure: choose Avignon for the papal quarter and the western rail corridor, or Aix for its market streets, museums and Cézanne sites. Three nights let one city breathe for two full days. Four nights can split two and two, but the station and hotel move is a transfer day. With five nights, add a Luberon excursion only if a named operator, driver or car is already arranged; six nights allow a slower rural base, but only when the luggage and return plan work. In Avignon, sleep inside or just outside the walls near Avignon Centre if you want to walk home; in Aix, the Rotonde/Cours Mirabeau or bus-station edge gives a more useful city-to-transit balance. Rural lodging trades rail convenience for a last-mile contract.',
      transfer: 'Avignon Centre is beside the historic core; Avignon TGV is 6 km away. Avignon Tourisme lists TER or Orizo buses 10 and 20 between the TGV station and centre. Aix Centre and Aix-en-Provence TGV are also separate: the TGV station is about 15 km from the city, and La Métropole Mobilité calls the connecting Aix Centre–TGV–airport shuttle A2 (renumbered from line 40 in 2025). Use the actual station names in TER/SNCF and A2 searches. The updated Luberon guide explains why the ZOU! Apt–Avignon corridor is a gateway, not village or abbey access.',
      season: 'Markets are a morning plan, not an all-day guarantee: Avignon Tourisme lists Les Halles Tuesday–Sunday; Aix’s tourist office lists Place Richelme produce stalls daily 08:00–13:00 except 1 January, and Place Comtales on Tuesday, Thursday and Saturday. Check the exact calendar before lodging near a market square. Avignon Festival dates bring early hotel demand and venue/security routing. The Palace’s 2026–27 visitor-route transition and the Lauves studio’s 2026 seasonal opening are dated examples, not future-year promises. Put exposed walks early in hot or mistral weather, check the live fire-access map for a rural trail, and treat lavender timing as variable agriculture.',
      fallback: 'If heat, wind, fire controls or a missed rural connection removes the countryside day, stay in one city: use a currently open museum, a covered market or a shorter wall-and-square walk. If a ticketed room, studio or festival venue is unavailable, do not replace it with a cross-region taxi chain; select a nearby city alternative and protect the booked return.',
      searchSummary: 'Choose one city base first: Avignon Centre and the papal quarter, or Aix old town and its market/studio route. Their TGV stations need separate named links; Luberon villages require a prearranged rural last mile.',
      reviewedOn: { label: '12 October 2026', iso: '2026-10-12' },
      reviewDisclaimer: 'Operating references and the dated 2026 visitor calendars were checked on 12 October 2026. Recheck live train, bus, market, booking, festival, weather and fire-access notices for your date.',
      sources: [
        ['https://avignon-tourisme.com/en/faqs/', 'Avignon Tourisme — stations, city walks, markets and regional connections'],
        ['https://palais-des-papes.com/', 'Palais des Papes — current visitor route, tickets and seasonal hours'],
        ['https://festival-avignon.com/en', 'Festival d’Avignon — official performance calendar'],
        ['https://www.orizo.fr/', 'Orizo — Avignon local bus route and service planner'],
        ['https://www.ter.sncf.com/sud-provence-alpes-cote-d-azur', 'TER ZOU! — Avignon/Aix station and regional train planner'],
        ['https://www.aixenprovencetourism.com/en/access-transport/', 'Aix-en-Provence Tourist Office — arrival and station connections'],
        ['https://www.lametropolemobilite.fr/en/airport-train-station-shuttles/', 'La Métropole Mobilité — current A2 link for Aix Centre, Aix TGV and the airport'],
        ['https://www.aixenprovencetourism.com/en/fiche/le-marche-aux-fruits-et-legumes-d-aix-en-provence-5466992/', 'Aix-en-Provence Tourist Office — produce-market locations and current schedule'],
        ['https://www.cezanne-en-provence.com/L-Atelier-des-Lauves?lang=en', 'Atelier des Lauves — official booking, access and seasonal opening notice'],
        ['https://www.risque-prevention-incendie.fr/vaucluse/', 'Vaucluse — daily forest-massif fire-access map'],
        ['https://meteofrance.com/', 'Météo-France — current forecast and warnings']
      ],
      faq: [
        ['How many nights should I book in inland Provence?', 'Two or three nights work best in one city. Four nights can support two nights in Avignon and two in Aix, with the move counted as travel time; this is two city visits, not a Luberon circuit. Add a countryside day only when its named transport and return are already arranged.'],
        ['Which city is the better base?', 'Choose Avignon for the walled papal core and its central rail position; choose Aix for the old-city market, museum and Cézanne focus. In each city, stay near the centre and the actual city station or bus station. Do not book an Avignon TGV or Aix TGV hotel as if it were inside either historic core.'],
        ['Can I reach the Luberon without a car?', 'Some ZOU! services reach larger gateway towns, but the scheduled corridor is not a village-to-abbey loop. Use the Luberon guide to match its current stop list to a date and prearrange a tour, driver or other last mile before committing.'],
        ['What should I reserve first?', 'Reserve the Palace or the Atelier des Lauves if either is the reason for the day, then fit markets and secondary museums around its confirmed entry. For a festival performance or rural vehicle, confirm the exact date, venue/pickup and return before choosing the hotel.'],
        ['What changes in summer?', 'Festival streets and hotel demand, heat, mistral and the daily Vaucluse fire-access level can change a route. Move walking to a cooler block, use a city interior as the backup, and do not treat lavender bloom as a date guarantee.']
      ],
      itineraryLabel: 'Four nights for two city cores; keep the fifth flexible',
      itineraryHeading: 'One station move separates the walled city from the market city.',
      itineraryIntro: 'This selective outline uses two nights in Avignon and two in Aix. Arrival and departure are partial days; the city-to-city transfer is not another sightseeing day. On a shorter stay, pick one base. Use the fifth day only for a reserved excursion or an extra day in the city you prefer.',
      itinerary: [
        ['Day 1 · Avignon arrival', 'Sleep inside or just outside the walls near Avignon Centre. If your train reaches Avignon TGV, use the checked TER connection or Orizo 10/20 before planning a walk; the station is 6 km from the centre. Keep the first loop to the gate, Les Halles or Place de l’Horloge.'],
        ['Day 2 · Papal quarter and Rhône', 'Book the Palace first. Its 2026 visitor pages describe a route transition and changing rooms; reserve time for the current circuit, then add the gardens, Petit Palais, Rocher des Doms or Pont Saint-Bénézet as energy and separate access allow.'],
        ['Day 3 · Transfer to Aix', 'Use the live TER itinerary between Avignon Centre and Aix-en-Provence, and leave time to check out and move luggage. If a high-speed ticket ends at Aix-en-Provence TGV, the A2 shuttle reaches the Aix bus station; do not confuse the TGV stop with the city station.'],
        ['Day 4 · Aix old town', 'Put the official market that matches your date first, then walk one line between Place Richelme, the old-city squares and Cours Mirabeau. Add the Atelier des Lauves only with its dated booking and current bus 5/12 access; otherwise choose one open city collection.'],
        ['Optional Day 5 · Luberon or a slower city', 'Stay a fifth night for a booked rural excursion with a confirmed pickup and return, or spend another full day in Avignon or Aix. A city-to-Apt bus is not the last mile to Gordes, Roussillon or Sénanque; use the existing Luberon guide for its separate branch and access decision.']
      ]
    },
    guides: [
      g({
        slug: 'avignon-papal-city',
        reviewCaption: 'reviewed 12 October 2026 · Provence inland',
        name: 'Avignon Papal City & Rhône Edge',
        instrument: 'Wall-gate papal itinerary',
        layout: 'walled-city-itinerary',
        imageQuery: 'Avignon Palais des Papes Pont France panorama',
        imageAlt: 'Palace of the Popes and historic Avignon skyline',
        purpose: 'Build one walled-city walk around either a booked Palace visit or a flexible museum-and-Rhône day, using the station-to-gate connection that matches your ticket.',
        summary: 'Enter through the walls from Avignon Centre, anchor the day on the papal palace or museums, then finish at the Rhône without looping back through every commercial lane.',
        searchSummary: 'From Avignon Centre enter the walled core for a booked Palace visit, then choose one nearby museum or Rhône/bridge branch. Avignon TGV is 6 km away: use TER or Orizo 10/20, not a walk.',
        reviewedOn: { label: '12 October 2026', iso: '2026-10-12' },
        choices: [
          ['Palace and gardens', 'Make the Palace the fixed appointment and follow the route shown for your date. Its current visitor information estimates about two hours for the Palace and papal gardens; add the bridge only if a separate entry and your energy fit.'],
          ['Museum and river edge', 'If tickets are gone or a shorter route suits better, choose the Petit Palais or another currently open collection, then the Rocher des Doms or a bounded Rhône walk. A museum interior replaces the Palace visit rather than becoming one more stop.'],
          ['Market or festival evening', 'Use Les Halles or Rue des Teinturiers as the local layer, or anchor an evening around one programmed festival venue. Check the event’s current entrance and security approach; a performance day does not also promise a full monument circuit.']
        ],
        access: 'Avignon Centre is the walkable gateway to the walls. Avignon Tourisme places Avignon TGV 6 km from the historic centre and lists TER or Orizo lines 10 and 20 as links. Confirm your exact arrival and evening return before selecting a hotel or a timed Palace entry.',
        tradeoff: 'The Palace and gardens alone are an estimated two-hour visit on the current official visitor page; the bridge has its own access and ticket choice. This route gives up the Luberon, Arles and an exhaustive museum list so its wall-to-Rhône walk stays coherent.',
        stages: [
          ['Match the station to the first gate', 'At Avignon Centre, enter the walled core on foot and orient at Place de l’Horloge. From Avignon TGV, complete the TER or Orizo connection first; do not treat the two stations as one place.'],
          ['Use Place du Palais as the anchor', 'Follow the Palace’s date-specific ticket, visitor route and current room notices. The official 2026–27 page describes an ongoing transformation and newly introduced interpretation, so older room-by-room schedules may not apply.'],
          ['Choose one nearby branch', 'If the booking and pace allow, continue through the gardens toward Notre-Dame-des-Doms and Rocher des Doms, or descend toward Pont Saint-Bénézet. Otherwise select the Petit Palais or Rue des Teinturiers instead of stacking every branch.'],
          ['Return through a named gate', 'Finish along a simple walled-city street toward Avignon Centre or your confirmed connector. During a festival performance, use its live venue/security route and leave a return margin after the show.']
        ],
        fallback: 'If Palace tickets or rooms change, use a currently open Petit Palais/city collection plus one walled-street loop. If heat or mistral makes the exposed garden and river uncomfortable, move that branch to a cooler hour and keep the interior as the day’s anchor.',
        watch: [
          ['A ticket ending at TGV does not end in town', 'Check TER arrival at Avignon Centre or Orizo 10/20 and the last connection back. Keep luggage and check-in time outside the monument block.'],
          ['Palace rooms and festival streets can change', 'The Palace is updating its visit route through the 2026–27 season; the Festival adds venue-specific queues, security and street diversions. Reopen both official calendars for your date.'],
          ['Stone rooms and the hill are tiring', 'Stairs, uneven paving and the rise to the gardens affect the day’s length. Read the Palace access information and substitute a closer interior or shorter lower-town loop when needed.']
        ],
        duration: 'Use about two hours as the current official estimate for Palace plus gardens, then add your walk, meal and any separate bridge or museum entry. A four-to-six-hour city block is an itinerary estimate, not a visit guarantee.',
        combine: 'Combine the papal core with one of the bridge/Rhône, Petit Palais or Rue des Teinturiers branches. Keep Arles, Orange and every Luberon village for a different day.',
        verify: 'Check the Palace’s dated route, entry and last-access rules; Pont Saint-Bénézet admission; Avignon TGV–Centre TER or Orizo 10/20; festival venue/security notices; and the day’s heat, wind and gate access.',
        operations: {
          entryReturn: 'Start from Avignon Centre and walk through the wall to Place de l’Horloge and Place du Palais. For Avignon TGV, use the current TER or Orizo 10/20 connection before joining the walk. From the papal quarter choose either the Rocher des Doms/bridge descent or a nearby indoor museum, then return through the gate serving your confirmed station connection.',
          booking: 'Book the Palace only after checking its live date/route and ticket terms; its official 2026–27 notice describes a visitor-route transition. Check the bridge separately and reserve a festival performance before arranging that evening’s walk. The official Palace page lists final access before closing, so do not arrive at the last minute.',
          weather: 'On hot or windy days make the Palace or a city museum the fixed indoor block, take the garden/bridge branch early or late, and shorten the exposed river edge. If a performance closes a street, follow its current venue directions rather than forcing the shortest map line.'
        },
        hubAccess: 'Avignon Centre is the walkable station; Avignon TGV is 6 km away, linked by TER or Orizo 10/20. Keep the walled city on foot and check event-day gate access.',
        hubTradeoff: 'The Palace and garden already take a substantial block; adding the separately visited bridge means giving up another museum or the rural excursion.',
        hubDuration: 'One full city day after an arrival night; allow about two hours for Palace plus gardens, then add walking, meal and any separate site only if the ticket and pace fit.',
        sources: [
          ['https://avignon-tourisme.com/en/faqs/', 'Avignon Tourisme — station transfer, pedestrian core, markets and city sites'],
          ['https://palais-des-papes.com/', 'Palais des Papes — official 2026–27 visitor-route, ticket and access notices'],
          ['https://festival-avignon.com/en', 'Festival d’Avignon — official program and venue calendar'],
          ['https://www.orizo.fr/', 'Orizo — Avignon bus route and date-specific service planner']
        ],
        siteContext: {
          label: 'AVIGNON WALL-TO-RHÔNE ROUTE',
          heading: 'Use the papal core as one anchor, not a checklist',
          intro: 'The city fits into one walk, but tickets, stairs, event security and exposed river weather decide which branch belongs in it.',
          details: [
            ['Centre station or TGV', 'Avignon Centre is the station beside the wall. Avignon TGV lies 6 km away; the city tourism office points visitors to TER or Orizo lines 10/20, so plan that link before booking a room or entry.'],
            ['Place du Palais and gardens', 'The current Palace page describes a 2026–27 interpretation change. Select the official route and ticket for the date; its current estimate for the Palace and papal gardens is about two hours.'],
            ['The Rhône branch', 'From the papal quarter, choose the gardens/Rocher des Doms and bridge line only if it fits your ticket and walking day. The bridge is a distinct access choice, not a view guaranteed from the Palace ticket.'],
            ['Festival or market layer', 'Les Halles is listed Tuesday–Sunday by Avignon Tourisme. Festival plans need the exact venue, entrance and security route; keep an indoor city alternative when queues or heat change the sequence.']
          ]
        },
        faq: [
          ['Which station should I use for Avignon old town?', 'Avignon Centre is beside the walls. Avignon TGV is 6 km away; Avignon Tourisme lists a TER connection or Orizo bus 10/20. Check the destination on the ticket and the date-specific return before choosing your base.'],
          ['How long does the Palace visit take?', 'The current official visitor page estimates about two hours for the Palace and papal gardens. The route is changing in 2026–27, and the bridge or a museum uses additional time and may need separate access.'],
          ['Can I add the bridge and a museum in one day?', 'Possibly, if you choose one short museum or the bridge and leave space for your Palace entry and meal. The most useful route drops one branch when a ticket or festival window is fixed.']
        ]
      }),
      g({
        slug: 'aix-markets-cezanne',
        reviewCaption: 'reviewed 12 October 2026 · Provence inland',
        name: 'Aix Markets & Cézanne Ground',
        instrument: 'Fountain-market studio walk',
        layout: 'market-studio-walk',
        imageQuery: 'Aix en Provence Cours Mirabeau fountain France',
        imageAlt: 'Fountain and plane-tree avenue in central Aix-en-Provence',
        purpose: 'Choose one old-city market walk and one booked Cézanne or museum focus, while making the distant TGV transfer and city-bus return part of the itinerary.',
        summary: 'Walk Cours Mirabeau, the old city and one market or museum, then add Atelier de Cézanne or another verified site without assuming every studio and quarry is open.',
        searchSummary: 'Use A2 from Aix TGV to the bus station, walk Place Richelme–old city–Cours Mirabeau, and reserve the Atelier des Lauves before connecting on city bus 5 or 12. Market and studio calendars differ.',
        reviewedOn: { label: '12 October 2026', iso: '2026-10-12' },
        choices: [
          ['Market-first old city', 'The tourist office lists the produce market at Place Richelme daily, 08:00–13:00 except 1 January, and Place Comtales on Tuesday, Thursday and Saturday. Walk one market square, the old-city lanes and Cours Mirabeau; the second market is optional, not a required lap.'],
          ['Reserved Atelier des Lauves', 'The official studio page currently marks visits as booking-required with limited capacity and gives Aix en Bus lines 5/12 to Atelier Cézanne. Its posted 2026 season ends 31 October; use the live calendar for any later year rather than extrapolating that window.'],
          ['One museum instead of the climb', 'Choose Musée Granet or another currently open city collection as the main indoor visit. Check its live exhibition and ticket page; a museum replacement keeps the walk compact when the studio is closed, unavailable or physically unsuitable.']
        ],
        access: 'Aix Centre railway station and the intercity bus station serve the centre. Aix-en-Provence TGV is about 15 km away; La Métropole Mobilité now calls the A2 shuttle the link between Aix bus station, the TGV stop and Marseille airport. The Atelier des Lauves lists city bus lines 5 and 12 to the Atelier Cézanne stop. Check the dated operator map and return before placing a timed visit.',
        tradeoff: 'Market mornings, a booked studio, a major exhibition and Sainte-Victoire belong to different blocks. This city walk chooses one market and one outlying or indoor art anchor; the mountain excursion replaces the city depth and needs its own weather and transport check.',
        stages: [
          ['Solve the correct arrival station', 'If the ticket ends at Aix-en-Provence TGV, use current A2 information for the bus-station transfer. If it ends at Aix Centre, orient at the Rotonde/Cours Mirabeau side and note the return platform or bus stop.'],
          ['Read one market street', 'For a morning market, begin at Place Richelme on a checked date, then continue through the old-city lanes toward Cours Mirabeau and the Rotonde. Keep Place Comtales for its listed market days rather than assuming every square is active.'],
          ['Commit to one art address', 'For Atelier des Lauves, reserve a time first and use Aix en Bus 5/12 to Atelier Cézanne; alternatively choose one open centre museum. Do not turn a studio reservation into a promise that Jas de Bouffan or Bibémus is also open.'],
          ['Return to the same transit edge', 'Come back to the centre by the selected walk or current bus, collect luggage, and take A2 only if your ticket requires Aix TGV. Leave the city-market area before relying on the last shuttle or regional train.']
        ],
        fallback: 'If the Lauves studio has no suitable slot or is out of season, make Place Richelme and one currently open museum the whole day. In heat or for limited walking, use a short old-city circuit and an indoor collection; do not replace a closed studio with an unscheduled cross-town car chain.',
        watch: [
          ['Aix TGV is outside the centre', 'The official tourism office places it about 15 km away; the operator’s A2 shuttle replaced line 40 in August 2025. Use the current A2 notice and add a margin before a museum appointment.'],
          ['Market squares do not share one calendar', 'Place Richelme and Place Comtales have different listed schedules. Check the chosen morning and finish window rather than arriving after the market block.'],
          ['The studio is seasonal and capacity-limited', 'The 2026 listing runs July 4–October 31, requires advance booking and gives bus lines 5/12. The historic building is not mobility-accessible; use the official access note and choose a centre museum if needed.']
        ],
        duration: 'Set aside a five-to-seven-hour city block for the market/old centre and one reserved studio or museum; this is a planning estimate. Add a separate day for Sainte-Victoire, multiple Cézanne locations or both cities.',
        combine: 'Pair Place Richelme and the old city with one studio or museum. Keep Avignon, Marseille, Bibémus/Sainte-Victoire and the Luberon as separate route decisions.',
        verify: 'Recheck the A2 stop and exact timetable, Place Richelme/Comtales market calendar, Atelier date and reservation, bus 5/12 return, museum exhibition, mobility note and forecast.',
        operations: {
          entryReturn: 'From Aix TGV, take the current A2 shuttle to the Aix-en-Provence bus station; from Aix Centre, walk toward the Rotonde and Cours Mirabeau. Put the morning market at Place Richelme first, then one line through the old-city squares. For the Atelier, use city bus 5 or 12 to Atelier Cézanne and confirm the return stop/date.',
          booking: 'The Atelier’s official page says advance booking is required because capacity is limited and access cannot be guaranteed without an online reservation. Its 2026 listing is seasonal through 31 October; the historic building itself is not mobility-accessible and there is no site parking. Check the live year-specific notice before booking a hotel around it.',
          weather: 'For heat, mistral or reduced walking, keep the first market block brief and replace the Lauves climb with one current indoor collection in the centre. If the market is not on, use the old-city route without assuming another square has stalls that day.'
        },
        hubAccess: 'Aix Centre and the bus station serve the city; Aix TGV is 15 km out and connects by A2. Atelier des Lauves lists buses 5/12 to Atelier Cézanne.',
        hubTradeoff: 'A market morning pairs with either the booked studio or a city museum. Adding the mountain or multiple Cézanne sites needs another day and its own transit plan.',
        hubDuration: 'One full day for the old centre, market and one art anchor; count the TGV shuttle and a dated studio reservation separately.',
        sources: [
          ['https://www.aixenprovencetourism.com/en/access-transport/', 'Aix-en-Provence Tourist Office — official station access and transport'],
          ['https://www.lametropolemobilite.fr/en/airport-train-station-shuttles/', 'La Métropole Mobilité — A2 shuttle, Aix bus station and TGV connection'],
          ['https://www.aixenprovencetourism.com/en/fiche/le-marche-aux-fruits-et-legumes-d-aix-en-provence-5466992/', 'Aix-en-Provence Tourist Office — Place Richelme and Place Comtales market schedule'],
          ['https://www.cezanne-en-provence.com/L-Atelier-des-Lauves?lang=en', 'Atelier des Lauves — official seasonal dates, booking, bus and mobility information'],
          ['https://www.aixenprovencetourism.com/en/aix-en-provence-en/paul-cezanne/', 'Aix-en-Provence Tourist Office — Cézanne sites and current interpretation']
        ],
        siteContext: {
          label: 'AIX MARKET-TO-STUDIO LINE',
          heading: 'One central market, then one committed art address',
          intro: 'The old centre is walkable as a connected set of squares; the studio and remote TGV station each add a real transit leg.',
          details: [
            ['A2 before the old town', 'Aix TGV lies outside the centre. The official metropolitan operator identifies A2 as the current Aix bus station–TGV–airport shuttle, replacing line 40 in August 2025; check the exact stop and departure on your date.'],
            ['Place Richelme first', 'Aix Tourism lists the produce market at Place Richelme daily 08:00–13:00 except 1 January. Place Comtales has a separate Tuesday/Thursday/Saturday listing; choose the square from your date.'],
            ['Cézanne by appointment', 'The Atelier des Lauves official 2026 season is July 4–October 31, with advance booking required and limited capacity. Aix en Bus 5/12 serve Atelier Cézanne; confirm later-year hours independently.'],
            ['A centre museum is the fallback', 'The Atelier’s historic building is not mobility-accessible. When a reserved visit is unsuitable or unavailable, choose one currently open city museum and keep the route on the old-town grid.']
          ]
        },
        faq: [
          ['How do I get from Aix TGV into the old city?', 'Aix-en-Provence TGV is about 15 km from the centre. La Métropole Mobilité currently names the shuttle A2, connecting the bus station, TGV station and Marseille airport; it replaced line 40 in August 2025. Check the live stop and timetable.'],
          ['Which Aix market fits a morning walk?', 'The tourist office currently lists produce stalls daily at Place Richelme from 08:00 to 13:00, except 1 January, and Place Comtales on Tuesday, Thursday and Saturday. Verify your date before making the market the trip’s anchor.'],
          ['Can I visit Atelier des Lauves without booking?', 'The official Atelier page says advance booking is required because capacity is limited and access cannot be guaranteed without an online reservation. The posted 2026 opening season is July 4 through October 31; do not carry those dates forward to another year.']
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
