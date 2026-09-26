import { defineItalyCluster, italyGuide } from './italy-guide-builder.mjs';

const g = italyGuide;
const c = defineItalyCluster;

export const italyCentralNortheastClusters = [
  c({
    slug: 'umbria',
    name: 'Umbria',
    region: 'Central Italy',
    band: 'central',
    family: 'umbrian-ridge-thresholds',
    label: 'Ridge-town section',
    tagline: 'Climb once, choose one sacred or civic layer, and keep the descent connected to the last train.',
    hubIntro: 'Umbria’s headline towns occupy different ridges rather than one easy urban corridor. Perugia asks travelers to understand a lower railway station and an upper civic core; Assisi separates Santa Maria degli Angeli from the basilica city above; Orvieto begins with a cliff transfer from the scalo. A useful stay chooses one hill-town threshold per day and protects the descent before adding another church, gallery or viewpoint.',
    stay: 'Three to five nights works well from Perugia when the trip favors regional rail and buses, while an Assisi or Orvieto overnight buys quieter sacred or civic hours. Changing hotels between all three towns usually adds more luggage climbing than useful access.',
    transfer: 'Regional trains connect the main valleys, but they do not finish the journey: Perugia Fontivegge needs Minimetrò, bus or escalator access; Assisi station needs an onward bus from Santa Maria degli Angeli; Orvieto Scalo needs the funicular or replacement service. Confirm the final uphill and downhill leg as part of each ticketed day.',
    season: 'Summer heat makes exposed ridge streets and stone stairways slower than the rail map suggests. Spring and autumn can bring major religious observances, school groups and rain on polished slopes; winter shortens daylight and may reduce peripheral services even when the principal basilicas and museums remain open.',
    fallback: 'Keep a complete indoor-and-covered route in the same town: Perugia’s collections and Rocca Paolina, Assisi’s basilica sequence, or Orvieto’s cathedral and civic museums. If an uphill connection fails before departure, stay in the rail-served valley town rather than improvising a costly cross-region rescue.',
    sources: [
      ['https://www.umbriatourism.it/en/', 'Umbria Tourism — official regional destination information'],
      ['https://www.fsbusitalia.it/eng/umbria.html', 'Busitalia Umbria — official regional bus information'],
      ['https://www.trenitalia.com/en.html', 'Trenitalia — official rail planning and service information']
    ],
    guides: [
      g({
        slug: 'perugia-ridge-city',
        name: 'Perugia Ridge City',
        instrument: 'Hill-escalator section',
        layout: 'ridge-escalator-cutaway',
        structure: 'hill-town-section',
        imageQuery: 'Perugia historic centre Palazzo dei Priori Umbria panorama',
        imageAlt: 'Perugia’s historic centre rising along its Umbrian ridge',
        purpose: 'Choose whether Perugia’s National Gallery, its Etruscan and medieval layers, or the ridge streets are the main reason for the day, then connect Fontivegge to the upper city through one deliberate ascent instead of repeatedly losing height.',
        summary: 'Arrive below the historic core, use Minimetrò or the Rocca Paolina escalator system as part of the city reading, anchor the visit in one collection or archaeological layer, and descend by the connection whose operating window you have already checked.',
        choices: [
          ['National Gallery and civic core', 'Give the Galleria Nazionale dell’Umbria and Palazzo dei Priori the central block, then use Corso Vannucci and Piazza IV Novembre as context. This offers the deepest art reading but leaves little time for distant ridge churches.'],
          ['Etruscan and underground Perugia', 'Prioritize the Etruscan Arch, Rocca Paolina passages and one compatible archaeological interior. The route explains how later streets sit over earlier structures, but sacrifices a long gallery visit.'],
          ['Ridge streets and viewpoints', 'Use the upper-city lanes, aqueduct walk and selected church thresholds as a mostly outdoor section. It is flexible around bookings, but it cannot substitute for the collection context inside Palazzo dei Priori.']
        ],
        access: 'Perugia Fontivegge lies well below the historic centre. The Minimetrò links the station area to Pincetto, while buses and the escalators through Rocca Paolina serve different approaches. Match the ascent to the first doorway and note the last useful descent; a map that labels only “Perugia” hides the vertical transfer.',
        tradeoff: 'The National Gallery deserves sustained attention, while an archaeology-led circuit spends time below ground and at separated city gates. Attempting both at full depth turns the ridge into repeated backtracking; surrender one interior in exchange for a coherent vertical section.',
        stages: [
          ['Fix the uphill contract', 'At Fontivegge, confirm whether Minimetrò, bus or the Piazza Partigiani escalator best serves the first stop. Save the return option before committing to the upper ridge.'],
          ['Enter through one threshold', 'Use Pincetto for a direct civic-core approach or Rocca Paolina for a layered entrance through the former fortress. Treat the ascent as interpretation, not dead transfer time.'],
          ['Work one Perugia layer', 'Stay with the chosen gallery, Etruscan circuit or ridge walk long enough to understand it. Add nearby Piazza IV Novembre and Corso Vannucci without crossing the city merely to collect another ticket.'],
          ['Descend before the connection thins', 'Return through the checked escalator, Minimetrò or bus route with enough margin for Fontivegge’s platform and any regional-train change. Do not discover the lower-city distance after the last museum closes.']
        ],
        fallback: 'If rain, heat or a collection closure breaks the chosen anchor, use Rocca Paolina’s covered passages, Palazzo dei Priori’s available civic spaces and a short Corso Vannucci circuit. If Minimetrò is disrupted, switch to the verified bus or escalator approach before leaving Fontivegge rather than climbing an improvised road route.',
        watch: [
          ['The station is not the old town', 'Fontivegge-to-ridge time includes waiting and a real height gain. A tight onward rail reservation can erase the final museum hour.'],
          ['Vertical systems close on their own clocks', 'Minimetrò, escalators and individual lifts are not one service. Confirm the return system instead of assuming the arrival route remains available all evening.'],
          ['Festivals reshape the civic spine', 'Umbria Jazz, Eurochocolate, markets and public ceremonies can alter access and crowd flow around Corso Vannucci and Piazza IV Novembre.']
        ],
        duration: 'Allow five to seven hours from Fontivegge for one substantial collection or archaeology route plus the ridge streets. A shorter three-hour visit should keep one ascent, one anchor and one reliable descent.',
        combine: 'Combine the National Gallery with the immediate civic core, or the Etruscan Arch with the aqueduct and northern ridge. Do not add Assisi or Orvieto unless Perugia is deliberately reduced to a transfer stop.',
        verify: 'Check the selected museum’s current admission, the Minimetrò operating notice, regional bus or train status and any city-centre event restrictions before leaving the lower station.',
        sources: [
          ['https://turismo.comune.perugia.it/', 'Comune di Perugia — official tourism and city information'],
          ['https://www.minimetrospa.it/', 'Minimetrò Perugia — official service information']
        ]
      }),
      g({
        slug: 'assisi-franciscan-city',
        name: 'Assisi Franciscan City',
        instrument: 'Pilgrimage opening clock',
        layout: 'basilica-hours-threshold',
        structure: 'living-sacred-threshold',
        imageQuery: 'Assisi Basilica Saint Francis Umbria hillside panorama',
        imageAlt: 'The Basilica of Saint Francis and the hill town of Assisi',
        purpose: 'Decide whether the Franciscan basilica sequence, Assisi’s upper medieval town, or the edge of Mount Subasio is the visit’s main act, then respect worship hours and the station-to-hill transfer instead of treating the sacred city as a continuous attraction.',
        summary: 'Transfer from Assisi station in Santa Maria degli Angeli to one end of the hill city, read the basilica or upper-town layer without rushing worship spaces, and finish beside the bus stop that protects the return to the valley railway.',
        choices: [
          ['Franciscan basilica sequence', 'Give the Lower and Upper Basilicas, the tomb and the adjoining sacred precinct unhurried attention. This is the strongest Franciscan reading, but it means the Rocca and a Subasio excursion remain optional.'],
          ['Upper town and Rocca line', 'Climb through Piazza del Comune toward the upper medieval streets and fortress outlook, using the basilica as a shorter threshold. The reward is urban topography; the sacrifice is detailed time with the fresco cycles.'],
          ['Subasio edge and hermitage context', 'Use an authorized bus, taxi or planned walk toward Eremo delle Carceri or another verified park edge, with Assisi’s core kept brief. This adds landscape context but depends on weather and a separately secured return.']
        ],
        access: 'The railway station named Assisi stands in Santa Maria degli Angeli below the historic city. Regional buses climb to stops serving the basilica and upper town; walking the entire ascent consumes time and shade. Choose the first bus stop from the direction of the planned route and note where the return bus actually boards.',
        tradeoff: 'The basilica complex operates as a living place of worship, not an ordinary museum, and its two churches reward slow looking. A Rocca climb or Subasio branch uses the same time and physical reserve, so choosing a landscape extension necessarily shortens the central Franciscan sequence.',
        stages: [
          ['Transfer from the valley', 'At Assisi station, identify the correct uphill bus and validate the fare according to current instructions. Keep Santa Maria degli Angeli only if its basilica forms part of the chosen argument.'],
          ['Enter at the right sacred door', 'Approach the Basilica of Saint Francis from the stop that avoids unnecessary height loss, observe current security and worship guidance, and distinguish the Lower and Upper Basilica sequence.'],
          ['Climb only for the chosen layer', 'Continue through Via San Francesco to Piazza del Comune and, only if selected, toward the Rocca or Subasio edge. Do not climb high merely to descend for an unplanned interior.'],
          ['Close beside the downhill bus', 'Finish near a confirmed return stop with margin for crowding, evening worship or traffic. Protect the valley train rather than waiting for a bus that leaves from the opposite side of town.']
        ],
        fallback: 'If heavy rain, heat or poor visibility removes the Rocca or Subasio branch, keep a complete sacred-city day with the basilica, Piazza del Comune and one nearby church or museum whose hours are confirmed. If a liturgy limits visitor movement, wait respectfully or reverse the street sequence rather than forcing entry.',
        watch: [
          ['Worship outranks the sightseeing clock', 'Masses, feast days, funerals and community use can restrict parts of a church without turning the rest of Assisi into a failed day.'],
          ['The city rises continuously', 'Stone lanes between the basilica, civic square and Rocca add cumulative climbing. Choose the direction before stepping off the bus.'],
          ['Subasio needs its own return', 'A hermitage or park-edge trip is not an extension of the town stroll. Weather, road access and transport must all be secured separately.']
        ],
        duration: 'Allow five to seven hours for the basilica sequence and upper town, plus the station transfers. A Mount Subasio or hermitage branch needs most of a separate day or a deliberately shortened city route.',
        combine: 'Combine the basilica with Piazza del Comune and one upper-town layer because they share the same hill axis. Pair Santa Maria degli Angeli only when train and bus timing leaves a genuine block before departure.',
        verify: 'Check basilica visitor and liturgy notices, the official Assisi event calendar, the current station bus timetable and any Subasio path or road restriction before travel.',
        sources: [
          ['https://www.visit-assisi.it/en/', 'Visit Assisi — official city visitor information'],
          ['https://www.sanfrancescoassisi.org/', 'Basilica of Saint Francis of Assisi — official information']
        ]
      }),
      g({
        slug: 'orvieto-cliff-city',
        name: 'Orvieto Cliff City',
        instrument: 'Cliff-funicular ledger',
        layout: 'tufa-cliff-transfer-ledger',
        structure: 'hill-town-section',
        imageQuery: 'Orvieto Duomo tufa cliff Umbria panorama',
        imageAlt: 'Orvieto Cathedral and the town standing above its tufa cliff',
        purpose: 'Choose the cathedral, an underground appointment, or the fortress-and-cliff edge as Orvieto’s main layer, then join Orvieto Scalo, the funicular and the upper-town streets into one controlled ascent and descent.',
        summary: 'Meet the cliff at Orvieto Scalo, use the current funicular or replacement connection to the old town, reserve only the underground experience that fits the cathedral clock, and return downhill before a thin regional-train connection becomes the day’s final risk.',
        choices: [
          ['Cathedral and sacred art', 'Make the Duomo, its chapels and related museum material the central commitment. This gives the facade and interior proper time, but leaves the underground city as a short or separate appointment.'],
          ['Underground Orvieto', 'Book one authorized cave or well experience and connect it to the streets above. The controlled entry reveals the cliff’s hidden infrastructure, but sacrifices a long cathedral-museum sequence.'],
          ['Fortress and cliff circuit', 'Prioritize the Albornoz fortress edge, viewpoints and a bounded walk through the upper town. It is flexible in ticket terms, yet weather and steep surfaces can remove the very views that justify it.']
        ],
        access: 'Mainline and regional trains arrive at Orvieto Scalo beneath the cliff. The funicular climbs toward Piazza Cahen, from which local buses or an uphill walk reach the Duomo; replacement arrangements can differ during maintenance. Treat Scalo-to-centre and centre-to-platform as timed legs, not a station forecourt crossing.',
        tradeoff: 'A scheduled underground tour or well visit fixes the middle of the day, while the cathedral complex can absorb the same attention window. Choosing both at maximum depth crowds out the cliff circuit and a calm descent, so one controlled threshold must remain secondary.',
        stages: [
          ['Read the scalo connection', 'On arrival, confirm the funicular or replacement service and the next realistic downhill connection. Do not buy an upper-town ticket before knowing how it fits the departure train.'],
          ['Climb to the civic plateau', 'Use Piazza Cahen as the transfer hinge, then take the direct bus or a deliberate street approach to the Duomo. Avoid descending side lanes before the booked anchor.'],
          ['Open one tufa layer', 'Commit to the cathedral complex, one official underground tour, or the fortress edge. Place the other two as context rather than pretending every cave and museum is compulsory.'],
          ['Return through Piazza Cahen', 'Finish the circuit on the side that leads cleanly back to the funicular. Allow for queues, replacement buses and the walk from the lower station to the correct rail platform.']
        ],
        fallback: 'If an underground tour is sold out or a funicular interruption changes the clock, keep the Duomo, Museo dell’Opera where available and a short upper-town civic route. In poor visibility, replace the exposed cliff walk with cathedral and museum interiors rather than chasing another Umbrian hill town.',
        watch: [
          ['Underground visits use controlled slots', 'Caves, wells and tunnels have separate tickets, meeting points and physical restrictions. One booking does not grant access to every subterranean site.'],
          ['The funicular is a real connection', 'Maintenance or crowding can replace a quick ascent with a bus and wait. Preserve margin at both ends of the rail journey.'],
          ['The cliff edge magnifies weather', 'Heat, wind and wet stone change the value and safety of exposed viewpoints. Keep the cathedral-and-museum route complete on its own.']
        ],
        duration: 'Allow five to seven hours from Orvieto Scalo for the cathedral and one additional layer. A compact cathedral-and-streets visit can fit four hours only with generous rail and funicular margins.',
        combine: 'Combine the Duomo with one official underground appointment or the fortress edge, since each makes a different claim about the same tufa plateau. Do not add Civita di Bagnoregio without a separate last-mile plan.',
        verify: 'Check the Duomo and chapel access, the exact underground meeting point and slot, current funicular operation and the return train before ascending from Orvieto Scalo.',
        sources: [
          ['https://www.umbriatourism.it/en/', 'Umbria Tourism — official Orvieto and regional planning information'],
          ['https://www.duomodiorvieto.it/', 'Opera del Duomo di Orvieto — official cathedral information']
        ]
      })
    ]
  }),
  c({
    slug: 'emilia-romagna',
    name: 'Emilia-Romagna',
    region: 'Northern Italy',
    band: 'north',
    family: 'via-emilia-booking-spine',
    label: 'Rail-and-reservation transect',
    tagline: 'Use the Via Emilia as a spine, then give each collection, producer or wetland branch its own booking contract.',
    hubIntro: 'Emilia-Romagna looks simple because frequent trains join Bologna, Modena, Parma, Ferrara and Ravenna, yet the useful trip splits at each station. Towers and mosaics have entry clocks, food producers require real appointments, Maranello is a last-mile branch, and the Po Delta is not on the city-centre rail spine. The region works when one rail city anchors the day and only one reserved branch leaves it.',
    stay: 'Four to six nights supports Bologna as a central rail base plus one eastern or western overnight when early mosaics, an evening performance or a Delta departure matters. A single Bologna base is efficient for city days but should not be used to disguise long returns from Ravenna, Parma or the coast.',
    transfer: 'High-speed and regional services share Bologna Centrale but use different levels, operators and connection margins. Trenitalia TPER covers much of the regional spine; Maranello, rural producers, Comacchio and Delta habitats require buses, booked visits, boats or a car. Name the station exit and the non-rail leg before buying the trunk ticket.',
    season: 'Porticoes soften summer heat and rain in Bologna, but exposed squares, walls and wetlands remain demanding. Autumn food events and trade fairs can compress rooms and trains; winter fog shortens landscape views; spring water levels, storms or conservation work can alter Delta access without affecting the rail cities.',
    fallback: 'When a producer cancels, a tower closes or wetland weather deteriorates, keep a full day in the nearest rail city: Bologna’s civic museums and porticoes, Modena or Parma’s central collections, Ravenna’s confirmed mosaic circuit, or Ferrara’s walls and museums. Do not replace a failed branch with another distant reservation.',
    sources: [
      ['https://emiliaromagnaturismo.it/en', 'Emilia-Romagna Turismo — official regional destination information'],
      ['https://www.trenitaliatper.it/', 'Trenitalia TPER — official regional rail information'],
      ['https://www.bolognawelcome.com/en', 'Bologna Welcome — official city visitor information']
    ],
    guides: [
      g({
        slug: 'bologna-porticoes-markets',
        name: 'Bologna Porticoes & Markets',
        instrument: 'Portico heat grid',
        layout: 'portico-shade-city-grid',
        structure: 'market-daypart-table',
        imageQuery: 'Bologna porticoes Piazza Maggiore historic centre',
        imageAlt: 'Historic porticoes leading through central Bologna',
        purpose: 'Choose Bologna’s civic core and towers, a collection-led day, or a portico-and-market route, then use the covered street network to control heat and distance rather than treating San Luca, every market and every museum as one centre walk.',
        summary: 'Leave Bologna Centrale on one southbound line, fix any tower or museum booking before the markets, use the porticoes as an operating grid between pauses, and finish near the station-facing side of the centre unless San Luca was chosen as the day’s single extension.',
        choices: [
          ['Civic core and tower', 'Anchor Piazza Maggiore, the municipal complex and a confirmed tower product. This gives a strong vertical and civic reading, but San Luca and a deep museum visit must drop away.'],
          ['One collection argument', 'Choose the archaeological, medieval, modern-art or music collections that best match the trip, then connect only the nearest squares. Indoor depth protects a hot or wet day but reduces market and viewpoint time.'],
          ['Porticoes, food streets and market life', 'Follow a bounded line through Quadrilatero, Mercato delle Erbe or another current market and the surrounding porticoes. This emphasizes the working city, but it is not a substitute for a booked tower or full museum.']
        ],
        access: 'Bologna Centrale sits north of the historic core and has multiple exits and levels. Via dell’Indipendenza creates the simplest walking line toward Piazza Maggiore; buses may shorten specific legs. The Asinelli tower, civic buildings and San Luca approach use separate reservations or transport decisions, so identify the first controlled door before leaving the station.',
        tradeoff: 'A timed tower visit and a substantial museum both interrupt the market’s natural morning-to-lunch rhythm, while the Sanctuary of San Luca is a true extension beyond the centre. Selecting one fixed anchor sacrifices a second headline interior but preserves the porticoes as a coherent city system.',
        stages: [
          ['Exit toward the portico spine', 'Use the station exit that aligns with Via dell’Indipendenza, note the return entrance and walk south under one continuous street system instead of detouring to an early peripheral sight.'],
          ['Meet the controlled civic door', 'Take the confirmed tower or museum slot before crowd and heat build. If no reservation exists, keep Piazza Maggiore and the municipal exterior as context rather than joining an uncertain queue.'],
          ['Use shade as route structure', 'Move through Quadrilatero, selected market streets and adjacent porticoes with a real meal or rest. Keep producer shops and market stalls in their actual trading hours.'],
          ['Close on the station axis', 'Return by a different but parallel portico line, or begin the preplanned San Luca branch only if its bus, walking demand and return all remain inside the day.']
        ],
        fallback: 'If tower access closes or heat makes exposed squares uncomfortable, move the main block into a verified civic museum and connect it with covered porticoes and one operating market. If San Luca transport becomes uncertain, finish inside the centre rather than gambling the onward train.',
        watch: [
          ['Covered does not mean cool', 'Long portico walks still accumulate heat and standing time. Schedule water and a seated break before the afternoon rather than after symptoms appear.'],
          ['Markets keep different hours', 'A food district remains visually present after individual stalls close. Check the specific market or producer instead of promising a uniform all-day experience.'],
          ['San Luca is an extension', 'The sanctuary and its long portico cannot be added casually after a tower and museum. Confirm the climb, bus and return as a separate branch.']
        ],
        duration: 'Allow six to eight hours for one booked civic anchor, the central portico grid and a proper food stop. San Luca needs an additional half-day or must replace the museum-depth block.',
        combine: 'Combine Piazza Maggiore with the Quadrilatero and one nearby collection because they share the central grid. Keep San Luca, FICO or a second major collection for a separate route unless one becomes the clear main purpose.',
        verify: 'Check Bologna Welcome for current tower and attraction access, the selected civic museum’s official hours, market trading patterns and Bologna Centrale service information before departure.',
        sources: [
          ['https://www.bolognawelcome.com/en', 'Bologna Welcome — official city visitor and booking information'],
          ['https://www.museibologna.it/', 'Musei Civici Bologna — official civic museum information']
        ]
      }),
      g({
        slug: 'modena-parma-via-emilia',
        name: 'Modena & Parma Along Via Emilia',
        instrument: 'Motor-and-food booking circuit',
        layout: 'via-emilia-reservation-circuit',
        structure: 'rail-to-street-braid',
        imageQuery: 'Modena cathedral Piazza Grande Emilia Romagna',
        imageAlt: 'Modena Cathedral and Piazza Grande along the Via Emilia corridor',
        purpose: 'Choose Modena’s civic and motor story, Parma’s cathedral and cultural collections, or one genuinely reserved food-production visit, then keep factory, dairy, cellar and Maranello branches separate from the easy-looking rail spine.',
        summary: 'Use one Via Emilia station as the day’s base, complete its cathedral, museum or food argument before any last-mile appointment, and return to that station rather than turning Modena, Maranello, Parma and a rural producer into an impossible tasting circuit.',
        choices: [
          ['Modena city and motor culture', 'Pair the cathedral and Piazza Grande with one confirmed city museum or a preplanned Maranello branch. Choosing the motor extension sacrifices Parma and requires a separate bus or road transfer.'],
          ['Parma sacred and performing city', 'Give the cathedral-baptistery group, Teatro Farnese or another compatible collection the long block. This keeps the day walkable, but does not include a countryside dairy by implication.'],
          ['One production appointment', 'Book a dairy, balsamic producer or another regulated visit that explains process and provenance. The appointment controls the day and may require a driver; city sightseeing becomes the supporting layer.']
        ],
        access: 'Modena and Parma have central rail stations on the Via Emilia corridor, but neither station includes the rural producers or Maranello. Local buses, a prearranged visit transfer or a car may be required, and schedules rarely align with several appointments. Confirm the producer’s exact address and meeting instructions rather than navigating to a product name.',
        tradeoff: 'A real production visit occurs on the producer’s clock and often outside the rail city, while Modena’s motor museums and Parma’s cultural interiors each deserve their own block. Accepting one reservation means giving up a second city, which is more useful than reducing three distinct stories to gift shops.',
        stages: [
          ['Choose one rail city', 'Arrive at Modena or Parma, save the departure platform and keep luggage out of the day. Walk the direct station-to-centre line before taking any branch transport.'],
          ['Read the civic foundation', 'Use Modena’s cathedral and Piazza Grande or Parma’s cathedral quarter and historic streets to establish the city before the specialist appointment.'],
          ['Honor one booked branch', 'Meet the exact museum, producer or transfer at the stated time. Allow the full road or bus leg to Maranello or the countryside instead of counting only the admission slot.'],
          ['Return to the same spine', 'Finish back in the selected rail city with margin for a regional service. Do not make the unvisited second city an evening detour after shops and museums are closing.']
        ],
        fallback: 'If a producer cancels or last-mile transport fails, keep a complete rail-city day: Modena’s cathedral and available civic or motor collections, or Parma’s cathedral group, Teatro Farnese and centre. Replace a rural appointment locally rather than searching for an unverified walk-in tasting.',
        watch: [
          ['Producers are not open attractions', 'Dairies, acetaie and cellars may be working premises with fixed tours. A map listing or shop does not confirm production access.'],
          ['Maranello is not Modena station', 'The Ferrari sites and associated destinations use different locations and transport. Check the exact museum and bus, not a generic “Ferrari” direction.'],
          ['Tasting changes the driving plan', 'Do not combine alcohol sampling with an assumed self-drive circuit. Arrange a driver, transit or a non-drinking operator before booking.']
        ],
        duration: 'Give a rail city six to eight hours; a rural producer or Maranello branch normally turns it into a full day. Modena and Parma together are reasonable only as a selective rail sampler with no rural appointment.',
        combine: 'Combine one city core with one confirmed specialist visit that departs from the same base. Keep Modena and Parma on separate days when either food production, motor culture or major collections matter.',
        verify: 'Confirm the producer or museum directly, the complete last-mile transport, regional train status, holiday closures and any tasting or driver conditions before committing the day.',
        sources: [
          ['https://www.visitmodena.it/en/', 'Visit Modena — official destination and visitor information'],
          ['https://www.parmawelcome.it/en/', 'Parma Welcome — official city visitor information']
        ]
      }),
      g({
        slug: 'ravenna-ferrara-po-delta',
        name: 'Ravenna, Ferrara or the Po Delta',
        instrument: 'Mosaic-and-estuary split',
        layout: 'mosaic-delta-split-spread',
        structure: 'two-shore-clock',
        imageQuery: 'Ravenna San Vitale exterior Emilia Romagna',
        imageAlt: 'The Basilica of San Vitale in Ravenna',
        purpose: 'Choose Ravenna’s mosaic circuit, Ferrara’s walled civic landscape, or a properly arranged Comacchio and Po Delta day; use one as the actual base instead of treating three eastern Emilia-Romagna systems as one rapid excursion.',
        summary: 'Begin at the rail station or Delta gateway that belongs to the chosen argument, work one complete urban or wetland sequence, and keep weather and last-mile transport from turning a distant second stop into the return risk.',
        choices: [
          ['Ravenna mosaic circuit', 'Select a compatible group of late-antique and early-Christian sites and leave walking time between them. This gives the strongest art-historical day, but Ferrara and the Delta disappear.'],
          ['Ferrara walls and civic city', 'Use the castle, cathedral quarter, Renaissance streets and a bounded wall segment from Ferrara station. It offers a legible bicycle or walking city, but not Ravenna’s mosaic depth.'],
          ['Comacchio and Po Delta', 'Commit to a verified bus, car, boat or guided nature program from the correct gateway. The reward is wetland ecology and working-water context; the sacrifice is the certainty of a rail-centre day.']
        ],
        access: 'Ravenna and Ferrara sit on different rail branches and each station requires a walk or local bus to the historic core. Comacchio and Delta observation areas need a separate last-mile plan whose departure point depends on the exact program. There is no useful station called “Po Delta” that completes the route.',
        tradeoff: 'Ravenna’s monuments use separate entrances and visiting windows, Ferrara’s walls spread the route horizontally, and a Delta program depends on weather and transport. Combining them strips the time each needs; treat the three as competing bases rather than sequential stops.',
        stages: [
          ['Arrive at the chosen system', 'Use Ravenna or Ferrara station for an urban day, or meet the named Delta transport at its confirmed gateway. Record the final return before entering the first site.'],
          ['Open the principal layer', 'Start Ravenna with the most time-sensitive mosaic site, Ferrara with the castle or civic core, or the Delta with the booked boat, guide or visitor-centre instruction.'],
          ['Build context without changing systems', 'Connect nearby monuments on foot, one coherent wall segment, or one habitat zone. Do not leave the selected system merely because another city appears close on a regional map.'],
          ['Close before the branch thins', 'Return toward the same station, bus stop or landing with margin for museum exits, bicycle return, weather changes and the last regional connection.']
        ],
        fallback: 'If wetland wind, rain or a canceled excursion removes the Delta, move only to a preselected Ravenna or Ferrara day whose train and openings still work. If a Ravenna monument closes, keep the confirmed mosaic set and city museum context rather than racing to Ferrara.',
        watch: [
          ['Mosaic products are not one universal door', 'Ravenna sites can use different custodians, tickets and liturgical limits. Verify the actual monuments included in the chosen product.'],
          ['Walls consume distance', 'Ferrara’s full circuit is far longer than a central museum loop. Select a segment and preserve the station return.'],
          ['Delta access is program-specific', 'A boat, birding hide, bicycle path and Comacchio street route begin in different places. Weather and conservation restrictions can change each independently.']
        ],
        duration: 'Allow a full six-to-eight-hour day for Ravenna or Ferrara and longer margins for a Delta program. Moving between Ravenna and Ferrara is best reserved for a deliberately shallow sampler, never added after a wetland branch.',
        combine: 'Combine Ravenna monuments within one verified ticket geography, Ferrara’s centre with one wall segment, or Comacchio with one official Delta activity. Keep the other two choices for separate days.',
        verify: 'Check the selected monuments or museum, the exact Delta operator and meeting point, regional train or bus status, weather and any current habitat-access restriction before departure.',
        sources: [
          ['https://www.turismo.ra.it/en/', 'Ravenna Tourism — official city visitor information'],
          ['https://www.parcodeltapo.it/', 'Po Delta Park — official protected-area information'],
          ['https://www.ferrarainfo.com/en/', 'Ferrara Info — official destination information']
        ]
      })
    ]
  }),
  c({
    slug: 'venice-lagoon',
    name: 'Venice & the Lagoon',
    region: 'Veneto',
    band: 'northeast',
    family: 'venetian-water-thresholds',
    label: 'Lagoon threshold table',
    tagline: 'Choose the door, sestiere or island before bridges, water levels and boat changes start spending the day.',
    hubIntro: 'Venice is a walking city interrupted by water rather than a compact set of adjacent icons. Santa Lucia, Piazzale Roma, San Marco, Fondamente Nove and the lagoon islands are different operating thresholds; bridges add effort, vaporetti add boarding and waiting, and acqua alta can reroute the most famous squares. A good stay assigns one major doorway or one island chain to each day and keeps the return on the same side of the lagoon logic.',
    stay: 'Three to five nights allows one San Marco day, one quieter sestiere route and one weather-dependent lagoon choice. Sleeping in Venice protects early and evening streets; Mestre can reduce room cost but adds a mainland crossing to every day. Choose by the hours you value, not by a generic “Venice” address.',
    transfer: 'Mainline trains end at Venezia Santa Lucia; road transport ends at Piazzale Roma or Tronchetto; airport boats and buses use still other arrivals. ACTV waterbus routes, stop directions and island services are not interchangeable. Count bridge steps, boarding queues and the walk from the landing to the actual entrance.',
    season: 'Summer heat and crowding make exposed queues and packed boats the limiting factor, while winter offers quieter streets but shorter light, fog and high-water disruption. Regattas, state or religious events and major cultural openings can alter routes around the basin even when normal transport continues elsewhere.',
    fallback: 'When high water, wind or a canceled island service closes the intended line, keep a complete route within the current sestiere: one available museum or church, a bounded street sequence and a direct return. Do not cross the lagoon to rescue a booking unless both the outward and final boat remain confirmed.',
    sources: [
      ['https://www.veneziaunica.it/en', 'Venezia Unica — official visitor, access and city information'],
      ['https://avm.avmspa.it/en', 'AVM/ACTV — official Venice public transport information'],
      ['https://www.comune.venezia.it/en', 'Comune di Venezia — official city information']
    ],
    guides: [
      g({
        slug: 'san-marco-rialto',
        name: 'San Marco & Rialto',
        instrument: 'High-water threshold board',
        layout: 'acqua-alta-gate-board',
        structure: 'lagoon-waterline',
        imageQuery: 'Venice San Marco basin Doges Palace lagoon panorama',
        imageAlt: 'The Doge’s Palace and waterfront at San Marco in Venice',
        purpose: 'Choose the Doge’s Palace, Saint Mark’s Basilica, or the basin and Rialto public realm as the day’s controlled centre, then approach through one walking or vaporetto threshold that can adapt to queues and high water.',
        summary: 'Reach San Marco from Santa Lucia or the selected landing without mixing several arrival strategies, honor one booked or security-controlled interior, and leave through Rialto or Castello on a single directional line before the return crowd closes the useful window.',
        choices: [
          ['Doge’s Palace depth', 'Give the palace route, institutional rooms and related collections the main block. This is the clearest civic-history choice, but the basilica interior and a long Rialto market visit become secondary.'],
          ['Basilica and sacred precinct', 'Work from current basilica access and worship constraints, then read the Piazza and basin. The sacred threshold leads the day, which means the palace cannot also receive a full interior visit.'],
          ['Early public realm and Rialto line', 'Use the square and waterfront before peak crowding, then follow one lane network toward Rialto and the Grand Canal. It offers flexibility without a major ticket, but sacrifices controlled interior depth.']
        ],
        access: 'From Santa Lucia, travelers can walk to San Marco or use a waterbus, but those choices have different time, bridge and crowd costs. Rialto, San Marco Vallaresso and San Zaccaria landings serve different sides of the district. Match the stop and direction to the first doorway and check any high-water access notice before leaving the arrival terminal.',
        tradeoff: 'Security and timed entry at the palace or basilica can consume the same calm morning needed to experience the Piazza and Rialto streets before peak pressure. Selecting one controlled door gives up a second interior but prevents the day becoming a queue between crowded landmarks.',
        stages: [
          ['Select the basin threshold', 'At Santa Lucia, Piazzale Roma or the chosen landing, commit to walking or one waterbus route. Save the final-return stop and do not switch modes merely because another queue appears shorter.'],
          ['Meet one controlled door', 'Use the palace booking or current basilica visitor instructions as the fixed event. Keep bags, security, worship and possible high-water access inside the arrival allowance.'],
          ['Read the Piazza and basin', 'Connect the arcades, waterfront and civic facades without rejoining every visible queue. If the public realm is flooded or diverted, use the official raised-route and access guidance.'],
          ['Leave on one city line', 'Finish toward Rialto for the Grand Canal crossing or toward Castello for quieter streets, ending at a landing or walking route that returns directly to the accommodation or station.']
        ],
        fallback: 'If the booked interior fails, retain San Marco as a civic landscape, use Museo Correr or another verified nearby interior when available, then leave toward Castello rather than waiting indefinitely. During disruptive high water, follow official access guidance and shift the long walking block to a better-drained sestiere.',
        watch: [
          ['High water changes entrances first', 'A pass or reservation does not guarantee the normal doorway or walking line. Use current municipal and venue instructions on the day.'],
          ['Boat-stop names hide direction', 'The same named area can have several platforms and route directions. Confirm the stop letter or destination shown locally before boarding.'],
          ['The Piazza is an event space', 'Ceremonies, religious services, security measures and large public events can close or channel parts of the basin with little relevance to other sestieri.']
        ],
        duration: 'Allow six to eight hours for one major interior, San Marco’s public realm and a directional exit to Rialto or Castello. Two controlled interiors need a separate day or the removal of the wider street route.',
        combine: 'Combine the Doge’s Palace or basilica with the immediate basin and one outward walking line. Keep the lagoon islands, Accademia and Giudecca for days whose transport and attention begin there.',
        verify: 'Check the selected venue’s official entry rules, Venezia Unica access notices, ACTV service, high-water information and any event restriction around San Marco before setting out.',
        sources: [
          ['https://palazzoducale.visitmuve.it/en/', 'Doge’s Palace — official MUVE visitor information'],
          ['https://www.veneziaunica.it/en', 'Venezia Unica — official Venice access and visitor information']
        ]
      }),
      g({
        slug: 'cannaregio-dorsoduro-giudecca',
        name: 'Cannaregio, Dorsoduro & Giudecca',
        instrument: 'Sestieri attention fold',
        layout: 'three-sestiere-attention-fold',
        structure: 'lagoon-waterline',
        imageQuery: 'Venice Cannaregio canal quiet street',
        imageAlt: 'A canal and residential street in Cannaregio, Venice',
        purpose: 'Choose the Jewish Ghetto and Cannaregio, the Accademia-led Dorsoduro shore, or Giudecca’s separate waterline, then stay inside that district’s social and transport logic instead of presenting three communities as one scenic stroll.',
        summary: 'Enter one sestiere from the station, bridge or waterbus stop that actually serves it, make one collection or historical threshold the anchor, and close with a district-scale return that avoids repeated Grand Canal crossings.',
        choices: [
          ['Cannaregio and the Ghetto', 'Follow the station-side canals toward the historic Ghetto and northern residential edges with appropriate respect for living community spaces. This keeps a strong street narrative but leaves Dorsoduro and Giudecca untouched.'],
          ['Accademia and Dorsoduro', 'Make the Gallerie dell’Accademia or another verified collection the fixed door, then use Zattere and nearby churches as the outward line. Museum depth sacrifices Cannaregio.'],
          ['Giudecca waterline', 'Cross deliberately for the island’s churches, waterfront and broad lagoon view. The boat ride creates a distinct half- or full-day, but it cannot be treated as a quick bridge from Dorsoduro.']
        ],
        access: 'Cannaregio can begin directly from Santa Lucia or selected northern ACTV stops; Dorsoduro is approached through Accademia, Zattere or nearby landings; Giudecca always requires a boat. Count bridges and platform direction before choosing a route, and never assume a short map distance across water represents a pedestrian connection.',
        tradeoff: 'The Accademia collection uses the attention needed for Cannaregio’s historical street reading, while Giudecca adds two waterbus boardings. Choosing one sestiere in depth sacrifices a checklist of the others but reveals how Venice changes beyond the San Marco–Rialto corridor.',
        stages: [
          ['Enter from the useful edge', 'Start Cannaregio at Santa Lucia or a northern landing, Dorsoduro at the Accademia side, or Giudecca at the stop nearest the chosen church. Avoid crossing the district simply to begin.'],
          ['Open the local threshold', 'Use the Ghetto’s official visitor context, the Accademia booking or a confirmed Giudecca interior as the fixed point. Respect worship, resident access and photography limits.'],
          ['Follow one water-facing line', 'Connect canals, campi and one shoreline without zig-zagging over bridges. Take the meal or rest within the selected district so the route does not collapse back toward San Marco.'],
          ['Close with one crossing', 'End at the stop or bridge that serves the accommodation, station or next fixed event. For Giudecca, confirm the direction and final practical boat before sunset or dinner.']
        ],
        fallback: 'If the collection or church is closed, keep the same district with its public streets, one verified smaller interior and a shorter waterfront line. If wind or service disruption weakens Giudecca, remain in Dorsoduro rather than beginning an uncertain island crossing.',
        watch: [
          ['The Ghetto is not a stage set', 'Synagogues and community sites operate under their own security and religious calendar. Use current visitor guidance and keep resident privacy central.'],
          ['Bridge count matters', 'A route that looks short can involve many stepped crossings. Choose the shoreline and exit before fatigue makes every bridge a detour.'],
          ['Giudecca has no pedestrian escape', 'Every outward visit depends on the return boat. Check service direction and disruption before committing to an evening finish.']
        ],
        duration: 'Give Cannaregio or Dorsoduro five to seven hours with one significant interior. Giudecca works as a deliberate half-day or slower full day; all three together produce transit rather than depth.',
        combine: 'Combine Cannaregio with the station arrival, Dorsoduro with one Accademia-area collection, or Giudecca with a single Dorsoduro crossing. Do not add San Marco merely because it shares the same island group.',
        verify: 'Check the chosen museum or community visitor information, church access, ACTV route status, bridge accessibility needs and high-water notices before leaving the first district edge.',
        sources: [
          ['https://www.veneziaunica.it/en/sustainable-venice/itineraries', 'Venezia Unica — official sustainable city itineraries'],
          ['https://www.gallerieaccademia.it/en', 'Gallerie dell’Accademia — official visitor information']
        ]
      }),
      g({
        slug: 'murano-burano-torcello',
        name: 'Murano, Burano & Torcello',
        instrument: 'Lagoon manifest',
        layout: 'three-island-departure-manifest',
        structure: 'island-return-billet',
        imageQuery: 'Burano colourful houses Venice lagoon canal',
        imageAlt: 'Colourful houses and a canal on Burano in the Venetian Lagoon',
        purpose: 'Choose one lagoon island in depth or a disciplined two-island sequence, then build the day from the actual departure stop, inter-island service and last return rather than selling Murano, Burano and Torcello as an automatic three-stop loop.',
        summary: 'Board from the verified Venice threshold, give the selected island enough time for craft, settlement or sacred-landscape context, and use a written inter-island manifest so wind, crowding or a missed boat cannot strand the return behind a third optional stop.',
        choices: [
          ['Murano craft and museum day', 'Prioritize the glass museum, furnaces or demonstrations that have confirmed visitor access and keep time for the island’s churches and canals. This offers craft context but gives up the outer lagoon.'],
          ['Burano with Torcello', 'Use Burano as the active settlement and transfer hinge, then add Torcello only while the onward and return boats remain strong. The quieter lagoon reading sacrifices Murano’s glass institutions.'],
          ['Single-island slow visit', 'Choose Murano, Burano or Torcello according to the trip’s purpose and let weather or mobility set a gentler pace. This rejects the island checklist in exchange for fewer queues and safer margins.']
        ],
        access: 'Fondamente Nove is the principal threshold for Line 12 toward the northern lagoon, while Murano also has services from other Venice stops. The islands have multiple landings, and the return may not depart from the platform where you arrived. Verify the complete route and direction in ACTV’s current information before leaving central Venice.',
        tradeoff: 'Every added island creates another queue, boarding and missed-service risk. Murano’s craft institutions, Burano’s lived streets and Torcello’s sparse sacred landscape make different arguments, so visiting all three quickly sacrifices interpretation and weakens the final return.',
        stages: [
          ['Write the outward manifest', 'Identify the Venice departure stop, route, direction and expected island landing. Arrive early enough to absorb a full boat and keep the alternative service visible.'],
          ['Give the first island priority', 'Visit the confirmed museum, church or craft experience before wandering. Do not let souvenir browsing consume the transfer required for the main purpose.'],
          ['Add only one secure branch', 'Continue from Murano or Burano only when the inter-island and final-return boats both remain practical. Torcello should be a chosen landscape, not a rushed gap filler.'],
          ['Return before the outer service thins', 'Board toward the correct Venice side with a full-service margin. Keep the final evening in Cannaregio or another arrival-side district rather than adding San Marco.']
        ],
        fallback: 'If wind, crowding or service disruption removes the outer islands, keep a complete Murano day or remain on Venice with the lagoon-facing museums and northern waterfront. If an inter-island boat is missed, drop the next island immediately and protect the direct return.',
        watch: [
          ['Platforms and patterns change by direction', 'A stop name can contain several boarding points, and not every boat continues through all islands. Read the displayed destination before joining the queue.'],
          ['Glass access must be genuine', 'A sales-room transfer is not automatically a working-furnace visit. Use official museum information or a producer’s explicit visitor conditions.'],
          ['The outer lagoon feels faster than it is', 'Waiting, boarding and slow services accumulate between Burano and Torcello. The last optional island is the first thing to remove.']
        ],
        duration: 'Allow five to seven hours for Murano in depth or Burano plus Torcello with safe margins. A three-island circuit needs a long operating day and still produces less depth than two deliberate visits.',
        combine: 'Combine Burano with Torcello when Line 12 timings work, or Murano with a northern Venice finish. Do not attach the islands to a palace-heavy San Marco morning.',
        verify: 'Check current ACTV routes and disruption, Venezia Unica island guidance, the selected museum or church opening and lagoon weather before boarding.',
        sources: [
          ['https://www.veneziaunica.it/en/things-to-do-in-venice/venice-areas', 'Venezia Unica — official Venice area and island information'],
          ['https://avm.avmspa.it/en', 'AVM/ACTV — official lagoon public transport information']
        ]
      })
    ]
  }),
  c({
    slug: 'veneto-art-cities',
    name: 'Verona, Vicenza & Padua',
    region: 'Veneto',
    band: 'northeast',
    family: 'veneto-art-city-gates',
    label: 'Three-city accession book',
    tagline: 'Give each rail city its own timed work, civic layer and return instead of racing all three.',
    hubIntro: 'Verona, Vicenza and Padua sit on a strong east–west railway, but the fast train is not a license to compress them. Verona’s Arena changes character on performance days, Vicenza’s Palladian villas leave the walkable centre, and Padua’s Scrovegni Chapel uses a strict timed threshold. Each city needs a separate accession plan from station to one principal work, followed by a return that does not depend on squeezing in the next city.',
    stay: 'Three to five nights supports two city days and a third specialist branch, with Verona or Padua offering the broadest onward rail choices. Vicenza rewards an overnight when architecture or evening streets matter. A single base can work, but daily station transfers should not replace time inside the art and civic spaces.',
    transfer: 'Frequent trains join the three principal stations, yet Verona Porta Nuova, Vicenza and Padova stations sit outside their key visitor thresholds. Local buses, trams or walks finish the trip; a rural Palladian villa needs another contract. Keep high-speed reservations, regional flexibility and last-mile city transport as separate choices.',
    season: 'Summer Arena performances, university activity, exhibitions and holiday weekends can transform availability and street flow. Heat makes Verona’s river loop and villa approaches slower; rain changes Padua’s fresco-to-basilica walking plan; winter may simplify crowds while shortening the practical villa and garden window.',
    fallback: 'If a timed chapel, Arena, theatre or villa becomes unavailable, keep a full city day around its civic museums, churches and public architecture. Remain in Verona, Vicenza or Padua rather than boarding a train to replace one missed door with another city’s unresearched schedule.',
    sources: [
      ['https://www.visitverona.it/en/', 'Visit Verona — official destination information'],
      ['https://www.vicenzae.org/en/', 'Vicenzaè — official Vicenza and province visitor information'],
      ['https://www.turismopadova.it/en/', 'Turismo Padova — official destination information']
    ],
    guides: [
      g({
        slug: 'verona-arena-river',
        name: 'Verona Arena & River',
        instrument: 'Arena-to-river clock',
        layout: 'arena-river-event-clock',
        structure: 'piazza-circuit',
        imageQuery: 'Verona Arena Piazza Bra historic centre',
        imageAlt: 'The Roman Arena facing Piazza Bra in Verona',
        purpose: 'Choose an Arena visit or performance, Verona’s Roman and Castelvecchio collections, or an Adige street-and-river circuit, then let event security and the Porta Nuova transfer set the city clock.',
        summary: 'Move from Verona Porta Nuova to one controlled cultural anchor, follow a single line through Piazza Bra, the historic core and the Adige, and finish on the station-facing side before an evening event or regional train removes the margin.',
        choices: [
          ['Arena or performance day', 'Make the Arena ticket, event check-in and Piazza Bra the fixed sequence. This is the strongest monumental choice, but a performance-day security window sacrifices a deep museum and long river circuit.'],
          ['Roman and Castelvecchio layers', 'Choose Castelvecchio with the bridge, or the Roman archaeology line across the river, and connect only nearby civic evidence. Collection depth means the Arena remains exterior context.'],
          ['Adige streets and viewpoints', 'Use Piazza delle Erbe, the river crossings and one elevated or riverside finish as a largely public route. It is flexible around tickets but weather and walking replace the certainty of an interior.']
        ],
        access: 'Verona Porta Nuova is south of Piazza Bra rather than inside the historic centre. City buses and a substantial walk use different arrival points; event closures or ZTL controls can alter drop-offs. Identify the Arena entrance or first museum before leaving the station, and keep the correct Porta Nuova return stop separate from local “Verona” labels.',
        tradeoff: 'An Arena performance controls security, bag, meal and finish times, while Castelvecchio and the Roman sites pull the route in different directions along the Adige. Choosing one central clock gives up another major interior but protects both the river geography and the onward journey.',
        stages: [
          ['Bridge the station gap', 'From Porta Nuova, use the verified bus or direct walk to Piazza Bra and save the return stop. Do not begin with a peripheral detour before the event or museum door.'],
          ['Meet the Arena-side anchor', 'Enter the Arena under current visitor or performance instructions, or use Castelvecchio as the fixed collection. Keep security and ticket collection inside the scheduled block.'],
          ['Follow one Adige line', 'Move through Piazza delle Erbe toward the chosen bridge, Roman layer or river view without shuttling across the centre. Use the second bank only when it serves the planned finish.'],
          ['Return before event pressure', 'End near a direct station bus or the booked performance entrance. If attending an evening event, separate the pre-event meal and security queue from the sightseeing clock.']
        ],
        fallback: 'If the Arena is unavailable, retain Piazza Bra and complete Castelvecchio, the civic centre and a short Adige crossing. If rain or high heat removes the river section, use the confirmed civic museums rather than boarding for another Veneto city.',
        watch: [
          ['Event days change the monument', 'Rehearsals, performances and security setup can modify ordinary Arena access. A daytime admission assumption may not survive an evening program.'],
          ['Porta Nuova is a separate leg', 'The station-to-centre walk and bus wait belong in every arrival and departure calculation, especially after a late performance.'],
          ['The river creates false shortcuts', 'Bridges are specific and slopes differ. Choose the crossing that advances the route instead of chasing viewpoints on both banks.']
        ],
        duration: 'Allow six to eight hours for one major interior and the river-centre route. An evening Arena performance turns the visit into a full day and requires a protected meal and security buffer.',
        combine: 'Combine the Arena with the immediate historic core, or Castelvecchio with one Adige bridge line. Keep Lake Garda, Vicenza and a second performance-scale interior for separate days.',
        verify: 'Check the Arena’s current visitor or event notice, the selected civic museum, local bus service, security and bag rules, and any central traffic restriction before leaving Porta Nuova.',
        sources: [
          ['https://www.visitverona.it/en/', 'Visit Verona — official visitor information'],
          ['https://museiverona.comune.verona.it/', 'Musei Civici Verona — official civic museum information']
        ]
      }),
      g({
        slug: 'vicenza-palladian-city',
        name: 'Vicenza Palladian City',
        instrument: 'Palladian site matrix',
        layout: 'city-villa-proportion-matrix',
        structure: 'collection-attention-spread',
        imageQuery: 'Vicenza Basilica Palladiana Piazza dei Signori',
        imageAlt: 'The Basilica Palladiana on Piazza dei Signori in Vicenza',
        purpose: 'Choose a walk through Palladio’s central city, the Teatro Olimpico and civic collections, or one specifically selected villa, then distinguish walkable architecture from a countryside last mile.',
        summary: 'Enter Vicenza from the railway station along a single central axis, use one museum-card or villa decision as the day’s threshold, and return through the civic core without implying that every Palladian villa belongs to the same pedestrian circuit.',
        choices: [
          ['Central Palladian walk', 'Trace Corso Palladio, Piazza dei Signori and selected palaces as an urban composition. This preserves architectural relationships but leaves theatre and gallery interiors selective.'],
          ['Teatro Olimpico and museums', 'Make the theatre plus a compatible civic collection the central block, using the current combined-card terms. Interior depth sacrifices a rural villa.'],
          ['One Palladian villa', 'Select a villa whose opening and transport genuinely work, and give its setting proper time. The last-mile commitment reduces the central city to an arrival or evening frame.']
        ],
        access: 'Vicenza station lies southwest of the walkable centre, with a direct approach toward Corso Palladio and Piazza dei Signori. Teatro Olimpico and the main civic museums cluster centrally, but villas such as La Rotonda use separate walking, bus, taxi or driving arrangements. Confirm the exact villa entrance rather than navigating to a UNESCO label.',
        tradeoff: 'The city’s Palladian facades are best understood as a connected urban sequence, while Teatro Olimpico and Palazzo Chiericati reward sustained interiors. A villa adds landscape but removes city time and transport flexibility, so one branch must become the explicit sacrifice.',
        stages: [
          ['Enter on the city axis', 'Walk or take local transport from Vicenza station toward the centre, noting the return direction. Use the first facade sequence to establish proportion before entering a museum.'],
          ['Open one Palladian threshold', 'Use Teatro Olimpico, a civic collection or the confirmed villa as the fixed admission. Check whether the selected card covers the actual sites rather than assuming every Palladian work is included.'],
          ['Read the surrounding fabric', 'Connect Piazza dei Signori, Corso Palladio and one compatible palace or church. For a villa day, preserve enough time to understand its setting instead of arriving only for a photograph.'],
          ['Close the matrix', 'Return to the station through a different central segment, or follow the prebooked villa transport back without inserting a second rural property.']
        ],
        fallback: 'If a villa closes or its last-mile transport fails, stay in Vicenza for Teatro Olimpico, the Basilica Palladiana exterior and available civic museums under the current card. If one interior is unavailable, the central architectural sequence remains a complete route.',
        watch: [
          ['Palladian villas are dispersed', 'UNESCO grouping does not create a shuttle or shared opening calendar. Each property needs its own transport, ticket and access check.'],
          ['Museum cards change the calculation', 'Combined products cover a defined list and validity period. Check the current inclusion before building a route around several interiors.'],
          ['Theatre access can be programmed', 'Performances, maintenance or group use may affect ordinary Teatro Olimpico visits. Keep another central civic interior ready.']
        ],
        duration: 'Allow five to seven hours for the central city and two compatible interiors. A villa extension normally needs a full day or a deliberately shortened Vicenza centre.',
        combine: 'Combine Teatro Olimpico with Palazzo Chiericati and the Corso Palladio axis, or pair the centre with one nearby villa whose transport is confirmed. Never treat several villas as casual walk-ins.',
        verify: 'Check the current Vicenza museum card and openings, the exact villa’s official access, local transport and the return to Vicenza station before departure.',
        sources: [
          ['https://www.vicenzae.org/en/', 'Vicenzaè — official destination and Palladian visitor information'],
          ['https://www.vicenzae.org/en/tourism/vicenza-palladio-and-the-villas/what-to-see-in-vicenza-opening-times-of-museums-and-monuments-in-vicenza-area', 'Vicenzaè — official museum, monument and ticket information']
        ]
      }),
      g({
        slug: 'padua-frescoes-basilica',
        name: 'Padua Frescoes & Basilica',
        instrument: 'Fresco time-lock',
        layout: 'fresco-admission-time-lock',
        structure: 'booked-door-score',
        imageQuery: 'Padua Basilica Saint Anthony Prato della Valle',
        imageAlt: 'The domes of the Basilica of Saint Anthony in Padua',
        purpose: 'Choose the Scrovegni Chapel’s strict timed admission, the Basilica of Saint Anthony and pilgrimage city, or Padua’s civic market-and-palace layer, then build the street sequence around that non-negotiable threshold.',
        summary: 'Move from Padova station toward the Eremitani or central tram corridor, report early for the selected fresco admission, and continue in one direction toward the basilica or civic markets instead of crossing the city repeatedly between timed interiors.',
        choices: [
          ['Scrovegni and Eremitani', 'Make the chapel reservation and adjacent museum context the central event. This gives the deepest fresco reading, but the basilica and southern city become a shorter outward line.'],
          ['Basilica and pilgrimage quarter', 'Prioritize the Basilica of Saint Anthony, its living worship context and the southern squares. The chapel remains separate unless a compatible slot was secured well in advance.'],
          ['Palazzo, markets and university city', 'Use Palazzo della Ragione, Piazza delle Erbe, Piazza della Frutta and selected civic interiors as the main system. This is more flexible but sacrifices the controlled chapel experience.']
        ],
        access: 'Padova station stands north of the centre. The Eremitani and Scrovegni area is reachable by a direct walk or urban transit, while the basilica lies farther south along the city axis. The chapel requires the visitor to follow the stated ticket-collection and reporting instructions; the booking time is not the moment to arrive at the park gate.',
        tradeoff: 'Scrovegni admission fixes a precise part of the day and demands punctuality, while the basilica operates around worship rather than museum timing. Attempting both plus every civic palace reduces each to a crossing, so the booked fresco or sacred quarter must take priority.',
        stages: [
          ['Approach the timed district', 'Leave Padova station toward Eremitani with the exact reporting instruction visible. Build in transit, ticket collection and orientation before the admission slot.'],
          ['Pass the fresco threshold', 'Complete the required entry procedure and keep the chapel visit connected to its museum and urban context. Do not schedule another controlled door immediately afterward.'],
          ['Continue south once', 'Move through the market piazzas and Palazzo della Ragione toward the Basilica of Saint Anthony only if worship access and energy remain compatible. Avoid returning north between stops.'],
          ['Choose the station return', 'Finish near a direct tram, bus or walking axis from the basilica or civic centre. Protect the rail departure rather than extending to another peripheral monument.']
        ],
        fallback: 'If Scrovegni tickets are unavailable, build a complete Urbs Picta and civic route from the Eremitani area through other currently open fresco sites, Palazzo della Ragione and the basilica. If worship limits the basilica, keep the surrounding public spaces and civic collections without interrupting services.',
        watch: [
          ['The booking is a time-lock', 'Late arrival can forfeit a controlled chapel visit. Follow the official reporting and access instructions rather than using a generic map estimate.'],
          ['Sacred access follows worship', 'The Basilica of Saint Anthony is an active pilgrimage church. Dress, photography and visitor movement must yield to liturgy.'],
          ['The city axis is longer than one tram stop', 'Eremitani, the market piazzas and the basilica form a real north–south walk. Choose a return mode before fatigue builds.']
        ],
        duration: 'Allow six to eight hours for Scrovegni, civic context and a basilica or market finish. Without chapel admission, a focused civic-and-sacred route still needs most of a day.',
        combine: 'Combine Scrovegni with the Eremitani museum and central market squares, or make the basilica the anchor with Prato della Valle. Do not add Venice simply because the rail journey is short.',
        verify: 'Check the Scrovegni ticket and reporting rules, Turismo Padova’s current city information, basilica worship access and urban transport before leaving the station.',
        sources: [
          ['https://www.cappelladegliscrovegni.it/index.php/en/', 'Scrovegni Chapel — official admission and visitor information'],
          ['https://www.turismopadova.it/en/', 'Turismo Padova — official destination information']
        ]
      })
    ]
  }),
  c({
    slug: 'dolomites-trentino-south-tyrol',
    name: 'Dolomites, Trentino & South Tyrol',
    region: 'Northeast Italian Alps',
    band: 'northeast',
    family: 'alpine-lift-windows',
    label: 'Valley-to-ridge staircase',
    tagline: 'Choose one valley base and let lifts, buses and weather open only the mountain that works today.',
    hubIntro: 'The Dolomites and the neighboring Trentino and South Tyrol valleys are not one rail destination. Bolzano, Trento, Dobbiaco and Calalzo open different corridors; Cortina and Madonna di Campiglio depend on onward buses or roads; every cable car and trailhead has its own operating season. A workable mountain trip fixes one valley base, one vertical system and one lower-weather day instead of chasing famous peaks across passes.',
    stay: 'Four to seven nights in one valley gives enough flexibility to move a high day when cloud, wind or thunderstorms intervene. Split bases only when the transfer opens a genuinely different corridor, such as Bolzano to Cortina or Trento to the Brenta group; changing valleys every night consumes the clear-weather window.',
    transfer: 'Mainline rail reaches Bolzano and Trento, while other gateways use regional rail to Dobbiaco or Calalzo followed by buses. Trailheads, regulated parking, cable cars and refuge approaches are separate contracts. Verify every leg in the direction of the last descent, not only the morning connection.',
    season: 'Lift and mountain-bus seasons do not align perfectly with hotel seasons, and shoulder months can leave high routes inaccessible despite clear valley streets. Summer storms often build after morning; autumn light shortens rapidly; winter requires a snow-specific plan rather than a summer trail translated onto white ground.',
    fallback: 'Keep a complete valley or city day beside every high plan: Bolzano’s archaeology and arcades, Cortina’s town and lower paths, or Trento’s MUSE and Buonconsiglio context. If the first lift or regulated shuttle is canceled, use that fallback immediately rather than driving to another pass under the same weather system.',
    sources: [
      ['https://www.suedtirol.info/en/en/information/mobility', 'South Tyrol — official regional mobility information'],
      ['https://www.visittrentino.info/en/articles/practical-info/travelling', 'Visit Trentino — official regional travel information'],
      ['https://www.dolomiti.org/en/', 'Dolomiti — official Cortina and Dolomites destination information']
    ],
    guides: [
      g({
        slug: 'bolzano-renon',
        name: 'Bolzano & Renon',
        instrument: 'City-to-plateau cable sheet',
        layout: 'city-plateau-cable-section',
        structure: 'summit-operating-stack',
        imageQuery: 'Bolzano Renon Dolomites cable car plateau panorama',
        imageAlt: 'Bolzano below the Renon plateau and Dolomite landscape',
        purpose: 'Choose Bolzano’s archaeology and civic culture, the Renon cable-car and narrow-gauge plateau, or a low vineyard-edge route, then treat station, cableway and mountain railway as one timed vertical connection.',
        summary: 'Walk from Bolzano station to the selected city anchor or cable-car threshold, commit to either the museum city or Renon plateau, and descend with enough operating margin to finish in the arcades rather than racing the final cableway.',
        choices: [
          ['Ötzi and Bolzano culture', 'Make the South Tyrol Museum of Archaeology and the multilingual historic centre the long block. This is the strongest all-weather option, but Renon becomes a separate day.'],
          ['Renon cable-and-rail day', 'Use the cable car from Bolzano and the plateau railway for a bounded Renon sequence. The vertical journey is the main system, so museum depth and distant plateau branches must drop away.'],
          ['Vineyard edge and lower landscape', 'Keep to Bolzano’s river, castle or vineyard margins using a verified low route. This protects a mixed-weather day but sacrifices both a major collection and a high plateau circuit.']
        ],
        access: 'Bolzano station is walkable from the centre and the lower Renon cable-car terminal, but they are different first stops. The cableway and plateau railway operate as linked yet distinct services, with separate boarding and possible maintenance. Choose the plateau stop and return before ascending rather than riding uphill to decide.',
        tradeoff: 'The archaeology museum merits a sustained visit, while Renon uses transit time and rewards a real plateau walk rather than a quick return photograph. Choosing the cable system gives up city collections; choosing the museum gives up the mountain window but secures a weather-resilient day.',
        stages: [
          ['Set the city or cable threshold', 'From Bolzano station, walk directly to the archaeology museum or lower cable-car terminal. Confirm lockers, admission or cable operation before adding city streets.'],
          ['Open the chosen vertical layer', 'Enter the museum on its current visitor terms, or ascend to the Renon plateau and identify the correct narrow-gauge direction. Do not improvise a distant stop after boarding.'],
          ['Use one coherent plateau or city line', 'Connect Bolzano’s arcades and one cultural site, or combine the plateau railway with one verified walk and village. Keep vineyard paths to the selected lower route.'],
          ['Descend before the system closes', 'Return to the cableway with more than one departure in hand, then finish near Bolzano’s centre or station. A late plateau meal must not depend on the final cabin.']
        ],
        fallback: 'If wind or maintenance stops the cable car, use the archaeology museum, cathedral area, arcades and a low river or castle route in Bolzano. If the museum is full, reverse the priority only when Renon’s cableway, railway and weather are all currently operating.',
        watch: [
          ['Cable and railway are two clocks', 'A working cable car does not guarantee every plateau train or onward bus. Read both systems before choosing a remote stop.'],
          ['Museum demand can fix the morning', 'The archaeology museum may require queuing or timed planning. Do not place a tight cable departure immediately after an uncertain exit.'],
          ['Plateau weather differs from the city', 'Wind, cloud and temperature can change after ascent. Carry the layer needed to wait safely for the return connection.']
        ],
        duration: 'Allow five to seven hours for Bolzano with the archaeology museum, or a full six-to-eight-hour operating window for Renon and one plateau walk. Combining both deeply is not a compact day.',
        combine: 'Combine the museum with Bolzano’s arcades and river, or the Renon cable car with one railway stop and walk. Keep distant Dolomite passes and Merano for separate transport days.',
        verify: 'Check South Tyrol mobility notices, cable-car and plateau-railway operation, the archaeology museum’s current admission and the mountain forecast before leaving Bolzano station.',
        sources: [
          ['https://www.suedtirol.info/en/en/information/mobility', 'South Tyrol — official mobility and transport information'],
          ['https://www.iceman.it/en/', 'South Tyrol Museum of Archaeology — official visitor information']
        ]
      }),
      g({
        slug: 'cortina-tre-cime',
        name: 'Cortina & Tre Cime',
        instrument: 'Lift-weather trail gate',
        layout: 'regulated-trail-weather-gate',
        structure: 'summit-operating-stack',
        imageQuery: 'Tre Cime di Lavaredo Dolomites hiking panorama',
        imageAlt: 'Tre Cime di Lavaredo rising above a Dolomite trail',
        purpose: 'Choose a Cortina lift and viewpoint, the regulated Tre Cime access and circuit, or a lower valley day, then verify the correct rail gateway, bus or parking product and storm-safe return before entering the high terrain.',
        summary: 'Reach Cortina from the named rail-and-bus corridor, open only the lift or Tre Cime gate that is actually operating, complete one ability-matched route, and descend before cloud, thunder or the last shuttle turns the trailhead into a transport problem.',
        choices: [
          ['Cortina lift and viewpoint', 'Select one operating lift system and a compatible high viewpoint or short trail. This offers vertical scenery with a controlled descent, but gives up the Tre Cime circuit.'],
          ['Tre Cime regulated route', 'Secure the current bus, road or parking access and choose a circuit that matches ability and forecast. The iconic route consumes the full day and sacrifices Cortina’s other lift sectors.'],
          ['Cortina town and lower valley', 'Use the town, museums and a verified low path when the high window is weak. It is the safest complete alternative, but should not be described as equivalent summit access.']
        ],
        access: 'Cortina has no mainline railway station. Travelers commonly connect by bus from gateways such as Calalzo or Dobbiaco, while Tre Cime trailheads use separate seasonal buses, road controls or parking arrangements. The Cortina arrival, lift base and Tre Cime access point are three different destinations; name every transfer.',
        tradeoff: 'Tre Cime’s regulated access and long trail window conflict with a separate Cortina lift day, and shifting between mountain sectors spends the best weather in transit. Choosing one high gate gives up another famous viewpoint but creates a route with a defensible return.',
        stages: [
          ['Meet the valley gateway', 'Confirm the correct bus from the rail gateway or Cortina base and the final return. Carry the reservation or parking instruction required for the selected mountain sector.'],
          ['Pass one regulated gate', 'Use the named lift, shuttle or road access and reassess wind, cloud and trail notices at the base. Do not continue merely because the reservation was prepaid.'],
          ['Complete the selected mountain line', 'Follow the ability-matched viewpoint or trail without adding an unplanned summit or circuit. Keep turnaround time tied to weather and the transport departure.'],
          ['Descend with two margins', 'Reach the lift or shuttle before the final practical service and preserve a second margin for the bus back to Cortina or the rail gateway.']
        ],
        fallback: 'If high lifts, Tre Cime access or the forecast fail, stay in Cortina for the Regole or other confirmed museum context, town streets and a lower valley walk whose surface and bus return are verified. Do not drive to another pass beneath the same thunder or wind warning.',
        watch: [
          ['Tre Cime access is not static', 'Bus reservations, road controls, parking products and seasonal restrictions can change. Use the official current system rather than an old itinerary description.'],
          ['A blue sky start is not the day’s forecast', 'Mountain cloud and thunderstorms can build quickly. Carry a fixed turnaround rule and accept the lower route when the return window narrows.'],
          ['Cortina spans multiple lift sectors', 'A lift branded with the same destination may begin across town or in another valley. Confirm the base, connector and descent point.']
        ],
        duration: 'Reserve a full eight-to-ten-hour window for Tre Cime including transfers. One Cortina lift sector can fill six to eight hours; a lower town-and-valley day remains useful with four to six hours.',
        combine: 'Combine one lift with its immediate plateau or one Tre Cime circuit with the trailhead refuge network. Keep separate lift sectors, Cinque Torri and distant valleys for other weather windows.',
        verify: 'Check Dolomiti Bus, the official Cortina destination notices, the selected lift or Tre Cime access system, trail status and mountain forecast immediately before departure.',
        sources: [
          ['https://tourism.dolomitibus.it/en/', 'Dolomiti Bus Tourism — official visitor transport information'],
          ['https://www.dolomiti.org/en/', 'Dolomiti — official Cortina and Dolomites destination information']
        ]
      }),
      g({
        slug: 'trento-brenta-dolomites',
        name: 'Trento & the Brenta Dolomites',
        instrument: 'Rail-bus-refuge staircase',
        layout: 'rail-bus-refuge-staircase',
        structure: 'summit-operating-stack',
        imageQuery: 'Trento Brenta Dolomites mountain panorama',
        imageAlt: 'The Brenta Dolomites rising beyond the Trentino valleys',
        purpose: 'Choose a complete Trento and MUSE city day, a Madonna di Campiglio lift window, or a refuge-led Brenta route, then verify every rail, coach, lift and foot stage as a staircase rather than one generic mountain transfer.',
        summary: 'Use Trento station as the city threshold or the start of a named coach corridor, commit to one urban or mountain layer, and descend early enough that a delayed lift or bus cannot erase the rail return.',
        choices: [
          ['Trento and MUSE', 'Make MUSE, the historic centre and Buonconsiglio context a complete urban day. This is the strongest bad-weather plan, but the Brenta range remains landscape context rather than an excursion.'],
          ['Madonna di Campiglio lift day', 'Use the verified coach and one operating lift sector for viewpoints or a bounded walk. The transfer and lift control the clock, sacrificing Trento’s museum depth.'],
          ['Brenta refuge route', 'Choose one official trail and refuge approach that matches ability, opening and conditions. This offers the deepest mountain experience but requires an early start and excludes a city add-on.']
        ],
        access: 'Trento is a mainline rail city with MUSE and the historic centre reachable locally. Madonna di Campiglio and Brenta trailheads require a named coach or road transfer, followed in many cases by a lift and foot approach. A refuge name is not a transport destination; trace every stage from the valley stop to the return platform.',
        tradeoff: 'MUSE and Trento’s civic layers can sustain a full day, while the Brenta corridor spends substantial time on coaches and vertical transport. Attempting both compresses the museum and risks the mountain return, so the city or range must be the explicit primary purpose.',
        stages: [
          ['Choose rail city or mountain coach', 'At Trento, either commit to the urban route or board the prechecked coach toward the selected Brenta gateway. Confirm the final return before leaving the station corridor.'],
          ['Open the principal threshold', 'Enter MUSE under current admission, or meet the named lift and reassess weather and operation. A closed lift is the signal to use the valley fallback, not to improvise a higher road.'],
          ['Work one science or mountain layer', 'Connect MUSE to Trento’s urban history, or complete one ability-matched lift, trail and refuge sequence. Keep optional branches subordinate to the turnaround time.'],
          ['Step down in reverse order', 'Return from refuge to lift, lift to coach and coach to rail with a margin at each boundary. In Trento, finish on the station side of the centre.']
        ],
        fallback: 'If mountain weather, lift operation or coach disruption breaks the high plan, use Trento’s MUSE, Buonconsiglio Castle where current access works and the historic centre as a complete substitute. If already in the mountain valley, keep a low village or valley walk and return on the confirmed coach.',
        watch: [
          ['Every stair has a separate clock', 'Rail, coach, lift and refuge do not wait for one another. A feasible morning connection can still have an unsafe late return.'],
          ['Refuge opening is not trail clearance', 'A listed refuge and an open lift do not prove the full path is suitable. Check official trail, weather and local guidance.'],
          ['Valley names cover wide ground', 'Madonna di Campiglio and the Brenta range contain multiple lift bases and trailheads. Use the exact base printed by the operator.']
        ],
        duration: 'Give Trento and MUSE six to eight hours. A Brenta lift or refuge day needs eight to ten hours including the complete coach connection and should not carry a separate city reservation.',
        combine: 'Combine MUSE with Trento’s centre and Buonconsiglio context, or one Brenta lift with its connected trail and refuge. Keep Lake Garda and other mountain valleys for separate bases.',
        verify: 'Check Visit Trentino transport guidance, the exact coach and lift operator, refuge and trail status, MUSE admission and the mountain forecast before leaving the rail corridor.',
        sources: [
          ['https://www.visittrentino.info/en/articles/practical-info/travelling', 'Visit Trentino — official travel and mobility information'],
          ['https://www.muse.it/en/', 'MUSE — official visitor information']
        ]
      })
    ]
  })
];
