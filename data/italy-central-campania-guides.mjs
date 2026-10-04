import { defineItalyCluster, italyGuide } from './italy-guide-builder.mjs';

const g = italyGuide;
const c = defineItalyCluster;

export const italyCentralCampaniaClusters = [
  c({
    slug: 'rome',
    name: 'Rome',
    region: 'Lazio',
    band: 'central-art-cities',
    family: 'seven-hills-threshold-book',
    label: 'Lazio · threshold folio 01',
    tagline: "Three Rome walks: the Forum and Capitoline, the Vatican, and the historic centre.",
    hubIntro: "Plan Rome around three separate days. The Colosseum, Forum valley and Capitoline climb belong together geographically, but their archaeological and museum entrances work separately. At the Vatican, the Museums, St Peter’s Basilica and the dome each have their own visitor arrangements. In the historic centre, the Pantheon, Piazza Navona and the Ghetto sit on foot routes, while a Trastevere finish adds a Tiber crossing. Book the main ticketed visit first, then build the day around its actual entrance and exit.",
    stay: "Four to six nights gives these three walks room, especially if arrival or departure uses part of a day. Monti and the Celio are practical for an early Colosseum start; Prati shortens the morning approach to the Vatican Museums; Centro Storico keeps the Pantheon and Navona on foot. Trastevere suits evenings on that bank but adds a river crossing to most other days. Compare the hotel’s walk to the specific entrance you have booked, not just the district name.",
    transfer: "From Fiumicino, the Leonardo Express runs directly to Termini; Trenitalia’s regional FL1 serves stations including Ostiense and Tiburtina. Choose the station that fits your hotel rather than assuming every airport train ends at Termini. Ciampino uses a separate airport-to-city connection. In town, Colosseo, Ottaviano and Cipro serve different sides of the archaeological and Vatican visits; the Pantheon and Piazza Navona have no adjacent metro station. Check the current ATAC route and the final walk with your luggage.",
    season: "The Forum, Palatine and Campidoglio involve long stretches outdoors, uneven surfaces and little shelter. In hot weather, put that walk early and plan an indoor stop or a long meal before the afternoon heat; in rain, keep a museum option near the same area. Check Rome’s event notices before crossing central streets around major religious or civic gatherings, and check site closure notices on the day.",
    fallback: "If your Colosseum-area entry changes, the Capitoline Museums and Piazza del Campidoglio still make a coherent visit: approach by the Cordonata, use the museum route for the Tabularium gallery and Forum view, then finish on the hill. If Vatican access changes, keep the day in Prati and use Castel Sant’Angelo only if its own admission is available. For a wet historic-centre day, choose one open civic museum near your planned walk instead of crossing town for another reservation.",
    reviewDate: "4 October 2026",
    reviewIsoDate: "2026-10-04",
    faq: [
      ["How many nights should I plan for Rome?", "Four to six nights gives a first visit time for the three walks here, meals and a recovery block. Leave the Vatican and Colosseum-area entries on separate days; a late arrival or early flight can remove one usable day."],
      ["Which area is the most practical place to stay?", "Choose by your first booked entrance and your evening return. Monti and Celio suit the Colosseum side, Prati the Vatican Museums, and Centro Storico the Pantheon and Navona. Trastevere is an evening choice across the river, not a central transfer point for every route."],
      ["How do I get from Fiumicino into Rome?", "The Leonardo Express goes directly to Termini; the regional FL1 serves other Rome stations, including Ostiense and Tiburtina. Check the current Trenitalia service and the station nearest your accommodation before choosing."]
    ],
    sources: [
      ["https://www.turismoroma.it/en", "Turismo Roma — official city visitor information"],
      ["https://www.atac.roma.it/en", "ATAC — official Rome public transport information"],
      ["https://www.trenitalia.com/en/services/connections-to-and-from-rome-fiumicino-airport.html", "Trenitalia — official Fiumicino rail connections"],
      ["https://www.adr.it/web/aeroporti-di-roma-en", "Aeroporti di Roma — official airport information"],
      ["https://colosseo.it/en/visit/", "Parco archeologico del Colosseo — official visits and ticket information"],
      ["https://www.museicapitolini.org/en", "Musei Capitolini — official visitor information"],
      ["https://www.museivaticani.va/content/museivaticani/en/info.html", "Vatican Museums — official visitor information"],
      ["https://www.basilicasanpietro.va/en/visits", "St Peter’s Basilica — official visit information"],
      ["https://direzionemuseiroma.cultura.gov.it/pantheon/", "Direzione Musei nazionali della città di Roma — Pantheon visitor information"]
    ],
    guides: [
      g({
        slug: 'ancient-rome-capitoline',
        name: 'Ancient Rome & the Capitoline',
        instrument: 'Forum-to-Capitoline field notes',
        layout: 'forum-gate-time-score',
        structure: 'booked-door-score',
        imageQuery: 'Roman Forum Colosseum Capitoline Rome panorama',
        imageAlt: "Roman Forum seen through the Arch of Septimius Severus",
        purpose: "Walk from the Forum’s low ground up to the Capitoline, then see how Michelangelo’s Piazza del Campidoglio reshaped the summit. Decide whether the Colosseum interior, a continuous Forum–Palatine visit or the Capitoline Museums is the main commitment.",
        summary: "The Forum occupies the hollow below the Capitoline; reaching Piazza del Campidoglio means climbing back to the hill that guarded the valley. Keep the Colosseum, archaeological route and Capitoline Museums as separate entrance decisions when planning the day.",
        choices: [
          ["Colosseum first", "Make the ticketed Colosseum visit the day’s fixed point. Read its current product description to see whether and when it also permits Forum and Palatine access; products, entrances and visit limits differ. Keep the Capitoline collection for another day if the booked route already fills the available time."],
          ["Forum and Palatine on foot", "Choose an official ticket whose current terms include the route you want, then follow its named entrance and the on-site direction. The long open-air walk links the low Forum with the rising Palatine; it leaves little time for a full Colosseum interior or museum visit."],
          ["Capitoline Museums and hill", "Start at the Cordonata and Piazza del Campidoglio, then use the museum’s Tabularium corridor to look back across the Forum. This is the most weather-resilient option and gives up the deeper walk through the archaeological area."]
        ],
        access: "The Colosseo Metro stop is useful for the Colosseum side, but it does not tell you which archaeological entrance your ticket uses. Check the ticket’s exact site, time, named gate, identity rules and current access map before choosing a station exit. The Capitoline approach is uphill by the Cordonata; the Forum floor and Palatine paths are uneven.",
        tradeoff: "A Colosseum interior, a long Forum–Palatine circuit and the Capitoline Museums each demand time and standing. Choose one as the main visit. Add a second only after checking its own admission window and the distance from the exit you will actually use.",
        stages: [
          ["Read the booking details", "Open the official ticket before leaving the hotel. Save the named entrance, entry time, included areas and exit or route instructions; “Colosseum” on a map is not a gate assignment."],
          ["Stay with one archaeological route", "Once inside, follow the direction shown for your ticket. Notice how the Forum lies in the hollow beneath the Capitoline while the Palatine rises on its other side; do not reverse a long traverse to collect a second viewpoint."],
          ["Climb to Piazza del Campidoglio", "The ancient Capitolium and Arx stood on separate heights divided by a valley; today’s square sits about eight metres above that old valley floor. Musei Capitolini describes Michelangelo’s buildings, sculpture and patterned paving as one planned composition."],
          ["Use the Tabularium view if open", "The Capitoline Museums’ Tabularium was completed under Quintus Lutatius Catulus in 78 BCE for Rome’s public records. Its surviving vaulted corridor remains part of the museum and looks out at the Forum from the hill’s side. Check the current museum route before relying on it."]
        ],
        fallback: "If the booked archaeological entry is cancelled or moved, make the Capitoline hill the whole visit: climb the Cordonata, compare the modern square with the two ancient heights, and use the museum and Tabularium only if that route is open. Keep any replacement ticket separate until the official operator confirms it.",
        watch: [
          ["A nearby station may serve the wrong gate", "The official Colosseum ticket names the entrance and included area. Follow that booking’s map rather than choosing the nearest metro stop first."],
          ["The route is exposed and uneven", "Forum and Palatine paths include changes in level and irregular paving. In high heat or wet weather, shorten the open-air route and confirm any access needs with the official site."],
          ["Museum access is separate", "The Tabularium corridor is inside the Capitoline Museums. A Colosseum-area ticket does not by itself establish museum admission or opening."]
        ],
        duration: "Give the ticketed Colosseum and archaeological visit most of a day if you want time to stop and interpret the site. Add the Capitoline Museums only when their own current last-entry time and your route out leave a realistic visit; a hill-and-museum day works well on its own.",
        combine: "Pair a Capitoline finish with the nearby Ghetto or Monti for a meal, depending on which side of the hill you leave from. Keep the Vatican and Borghese Gallery for another day so separate booked interiors do not compete for the same hours.",
        verify: "Before departure, check the exact official Colosseum ticket and gate, archaeological-area access notice, Capitoline route and accessibility information, and current ATAC service. Do not rely on a map pin to resolve the entrance.",
        reviewDate: "4 October 2026",
        reviewIsoDate: "2026-10-04",
        faq: [
          ["What was the Tabularium?", "Completed under Quintus Lutatius Catulus in 78 BCE, it held the bronze records of Roman laws and state acts. The remaining vaulted corridor is now within the Capitoline Museums, where its openings face the Forum."],
          ["Why is Piazza del Campidoglio above the Forum?", "The Capitoline originally had two high points, the Capitolium and the Arx, separated by a deep valley. The present square occupies that gap and stands about eight metres above the original valley floor."],
          ["Does one Colosseum ticket always include the Forum and Palatine?", "No single answer applies to every product. The official ticket page lists different visit types and conditions; check the exact ticket you buy for included areas, entry time and named gate."]
        ],
        sources: [
          ["https://colosseo.it/en/visit/", "Parco archeologico del Colosseo — current official visit and ticket information"],
          ["https://www.museicapitolini.org/en/sede/campidoglio_antico", "Musei Capitolini — the ancient Capitoline topography"],
          ["https://www.museicapitolini.org/en/sede/piazza_e_palazzi", "Musei Capitolini — Piazza del Campidoglio and Michelangelo’s design"],
          ["https://www.museicapitolini.org/en/sede/campidoglio_antico/tabularium", "Musei Capitolini — Tabularium history and surviving gallery"],
          ["https://www.museicapitolini.org/en/informazioni_pratiche/orari_e_indirizzi", "Musei Capitolini — current visitor and access information"],
          ["https://www.atac.roma.it/en", "ATAC — Rome public transport information"]
        ]
      }),
      g({
        slug: 'vatican-borgo-prati',
        name: 'Vatican, Borgo & Prati',
        instrument: 'Sacred-door queue matrix',
        layout: 'holy-door-nested-threshold',
        structure: 'living-sacred-threshold',
        imageQuery: 'Saint Peters Square Vatican Basilica Rome wide',
        imageAlt: "St Peter’s Square and Via della Conciliazione viewed from the dome of St Peter’s Basilica",
        purpose: "Choose one main commitment on the west bank: the Vatican Museums, St Peter’s Basilica and dome, or an outdoor walk through Borgo to Castel Sant’Angelo. Their entrances, security and booking arrangements are separate, even though the sites look close together on a map.",
        summary: "The Vatican Museums begin at Viale Vaticano; St Peter’s Square and Basilica are approached from the east; Castel Sant’Angelo stands across the Tiber. Treat the three as distinct visits, then use Borgo or the river walk to connect only the parts that fit your day.",
        choices: [
          ["Vatican Museums", "Make the Vatican Museums their own visit and finish in Borgo or Prati. Book through the official portal and check the closure calendar for your date; leave the Basilica and dome for a separately planned visit."],
          ["St Peter’s Basilica and dome", "Keep the Basilica as the focus and decide separately whether the dome fits. The Basilica is an active place of worship with its own security, clothing rules and access notices; museum admission does not cover that visit."],
          ["Borgo and Castel Sant’Angelo", "Start outdoors at the square or Borgo, cross toward Castel Sant’Angelo and follow the Tiber. This route can remain useful if a museum slot is unavailable, but the castle museum has its own opening and admission."]
        ],
        access: "The Museums’ visitor entrance is on Viale Vaticano, while St Peter’s Basilica is reached on the far side of the Vatican walls. Match your route and transit stop to the address printed on the booking. Security at the Basilica and admission to the Museums or Castel Sant’Angelo are separate.",
        tradeoff: "A deep museum visit and the Basilica with a dome climb are both substantial visits. Choose the one that matters most and leave the river walk as the flexible finish. Trying to reserve both interiors into a tight sequence leaves no room for separate security or a change in access.",
        stages: [
          ["Choose the entrance before the station", "Save the exact destination and official ticket: Viale Vaticano for the Museums, or the Basilica’s current visitor approach for St Peter’s. Check the booking and live access notice before travelling."],
          ["Follow Italy through the map gallery", "The Gallery of Geographical Maps was commissioned by Gregory XIII in 1581 and runs 120 metres along the Museums route. Its frescoed panels map Italy; pause to follow the peninsula before continuing through the collection."],
          ["Pack for Basilica security", "St Peter’s publishes below-knee clothing and covered-shoulder rules and currently has no cloakroom. Travel light, check its visit and worship notices, and follow staff instructions; allow this as a separate visit from the Museums."],
          ["Finish along the river", "From Borgo, walk toward Castel Sant’Angelo and the Tiber, then choose the return from the bank where you finish. Enter the castle only if you have checked its current admission and opening."]
        ],
        fallback: "If a Museum booking is unavailable, make a Borgo and river walk the main plan, adding Castel Sant’Angelo only when its own admission is available. If the Basilica changes access for worship or security, keep the day outdoors or in Prati rather than assuming a nearby church will admit visitors.",
        watch: [
          ["Museum tickets have one official online seller", "The Vatican Museums identify tickets.museivaticani.va as the only official online purchase site. Check the domain before paying and reopen its current closure calendar."],
          ["Basilica rules affect what you carry", "The Basilica lists covered shoulders and below-knee clothing and says there is no cloakroom at present. A large bag can make the visit impractical."],
          ["Dome, Basilica and Museums are separate", "Each has separate access and timing. Do not treat a Museum reservation as a Basilica entry or assume the dome queue will fit after it."]
        ],
        duration: "Reserve most of a day for the Vatican Museums and use Borgo as the flexible finish. A Basilica visit with the dome also deserves its own generous block; pair it with the river only after checking current access and leaving time for security.",
        combine: "Keep the end of the day on the Vatican side: Borgo, Prati or the walk toward Castel Sant’Angelo. The river crossing into the historic centre is easy to add on foot, but it lengthens the return; leave Ancient Rome for another day.",
        verify: "Check the Vatican Museums’ official ticket portal and closure calendar, St Peter’s Basilica visit and worship notices, any dome access, Castel Sant’Angelo admission and the ATAC route to your chosen entrance.",
        reviewDate: "4 October 2026",
        reviewIsoDate: "2026-10-04",
        faq: [
          ["Does a Vatican Museums ticket include St Peter’s Basilica?", "No. The Museums and Basilica publish separate visitor routes and access information. Plan for the Basilica’s own security and check its notice before going."],
          ["Where should I buy a Vatican Museums ticket?", "Use tickets.museivaticani.va, which the Museums identify as their only official online ticket-purchase site. Recheck the current calendar and terms for your date."],
          ["Is the Gallery of Geographical Maps a short cut through the museum?", "No. It is a 120-metre corridor in the wider Museums route. The frescoes were commissioned under Gregory XIII in 1581; allow time for the collection beyond this one gallery."]
        ],
        sources: [
          ["https://www.museivaticani.va/content/museivaticani/en/info.html", "Vatican Museums — official entry, ticket portal and closure calendar"],
          ["https://www.museivaticani.va/content/museivaticani/en/eventi-e-novita/iniziative/Eventi/archivio-eventi/2016/il-restauro-della-galleria-delle-carte-geografiche.html", "Vatican Museums — Gallery of Geographical Maps history and dimensions"],
          ["https://www.basilicasanpietro.va/en/visits", "St Peter’s Basilica — visit, dress and bag information"],
          ["https://direzionemuseiroma.cultura.gov.it/museo-nazionale-di-castel-santangelo/", "Direzione Musei nazionali della città di Roma — Castel Sant’Angelo museum information"],
          ["https://www.atac.roma.it/en", "ATAC — Rome public transport information"]
        ]
      }),
      g({
        slug: 'historic-centre-trastevere',
        name: 'Historic Centre & Trastevere',
        instrument: 'Piazza-to-river evening fold',
        layout: 'piazza-river-evening-circuit',
        structure: 'piazza-circuit',
        imageQuery: 'Piazza Navona Pantheon historic centre Rome evening',
        imageAlt: "Fountain in Piazza Santa Maria in Trastevere",
        purpose: "Pick one walk: the Pantheon and Piazza Navona, Trevi and the Spanish Steps, or the Ghetto and Trastevere. The first two stay on the historic-centre side; the last follows Portico d’Ottavia across Tiber Island and ends across the river.",
        summary: "Central Rome is a short-block walking area with slow points: site entry, crowded fountains, churches and uneven paving. Piazza Navona follows the outline of Domitian’s stadium; the remains of the Portico d’Ottavia sit in the former Ghetto. Choose one line through these places and cross the Tiber only when Trastevere is your finish.",
        choices: [
          ["Pantheon and Navona", "Check the Pantheon’s current visit arrangement first, then walk to Piazza Navona and follow the oval outline of the Stadium of Domitian. Add one nearby civic museum if it is open; leave Trevi and Trastevere for another walk."],
          ["Trevi and the Spanish Steps", "Link Trevi with Piazza di Spagna on the eastern side. Turismo Roma identifies the fountain as the outlet of the Virgo aqueduct and dates Salvi’s design commission to 1732; let that water system guide the walk. Check current basin-access terms before planning a close visit."],
          ["Ghetto and Trastevere", "Start at Portico d’Ottavia, whose surviving corner and entrance belonged to a much larger Augustan portico. Continue toward Tiber Island, cross to Trastevere and finish near the river. The sequence gives the ancient Ghetto and evening district a shared walk without circling back to Navona."]
        ],
        access: "There is no metro station at the Pantheon or Piazza Navona. Barberini and Spagna are useful for the eastern route; for the Ghetto, check current bus service to the area and use the Tiber bridges to continue toward Trastevere. Pin the first site and the final return stop before setting out.",
        tradeoff: "The Pantheon, Navona, Trevi, Spanish Steps, Ghetto and Trastevere can all be connected on foot, but the whole list makes a long day with crowded, slow sections. Choose the two or three places that fit one direction and leave the others for another visit.",
        stages: [
          ["Start at the site that sets your pace", "Use the Pantheon when you want a booked interior first, Trevi for the eastern fountain walk, or Portico d’Ottavia for the Ghetto route. Check entry and event notices before choosing the first stop."],
          ["Compare the Pantheon and Navona", "The Pantheon’s rebuilt Roman rotunda and Piazza Navona’s elongated stadium footprint are different kinds of surviving ancient fabric. Walk the square end to end before moving on; do not add the eastern fountains just to fill a checklist."],
          ["Keep one pause on the same side", "Choose an open museum or a meal near the route already underfoot. For the Portico d’Ottavia line, pause in the Ghetto or Trastevere; for the Pantheon line, stay around the historic centre. Recheck museum or church access before relying on it."],
          ["Cross once only if Trastevere is the finish", "From the Ghetto, use Tiber Island and a bridge to enter Trastevere, then plan the return from that bank. If your walk begins around Pantheon or Trevi, end on the Centro side instead of adding a second crossing."]
        ],
        fallback: "For rain or a site closure, keep to the same walk and choose one open indoor stop nearby: a civic museum around Navona, or Museo di Roma in Trastevere after the Ghetto crossing. If neither is available, shorten the outdoor route and save the next district for another day.",
        watch: [
          ["Crowds change the walking time", "Trevi and the Pantheon can slow a short map distance. Keep the next appointment on the same side of the centre and leave a way to drop one stop."],
          ["The river changes the return", "Tiber Island is a natural crossing point on the Ghetto route. A Trastevere dinner works best when the evening return also starts from that bank."],
          ["Churches remain places of worship", "The Pantheon is a basilica and local churches can limit tourist visits during services. Check current access and keep a civic museum as an alternative."]
        ],
        duration: "Treat the Pantheon–Navona or Trevi–Spanish Steps line as a half-day walk with time for an interior or meal. The Ghetto–Trastevere line works as an afternoon and evening; do not combine all three routes into one day. Site visits need separate time for their current entry conditions.",
        combine: "Pair the Ghetto walk with Tiber Island and dinner in Trastevere. Pair Pantheon and Navona with a nearby museum or meal on the same side of the river. Keep the Vatican and Colosseum-area visits on their own days.",
        verify: "Check the Pantheon’s official visitor and worship notices, current museum opening and admission, event restrictions in the centre, and the ATAC return service from the bank where you finish.",
        reviewDate: "4 October 2026",
        reviewIsoDate: "2026-10-04",
        faq: [
          ["Why is Piazza Navona shaped like an oval?", "The square follows the footprint of the Stadium of Domitian, built in 86 CE for athletic contests. Walk its long axis and the stadium plan becomes easier to see in the present piazza."],
          ["What is the Portico d’Ottavia?", "Augustus rebuilt the portico between 27 and 23 BCE and dedicated it to his sister Octavia. Most visible remains date from a later restoration by Septimius Severus after a fire in 191 CE; the site stands in the area of the ancient Ghetto."],
          ["Can I end a Navona walk in Trastevere?", "Yes, but it adds a Tiber crossing and a longer return. The Ghetto route through Tiber Island is more direct if Trastevere is the evening destination."]
        ],
        sources: [
          ["https://direzionemuseiroma.cultura.gov.it/pantheon/", "Direzione Musei nazionali della città di Roma — Pantheon visitor information"],
          ["https://www.turismoroma.it/en/places/navona-square", "Turismo Roma — Piazza Navona and the Stadium of Domitian"],
          ["https://www.turismoroma.it/en/places/portico-octavia", "Turismo Roma — Portico d’Ottavia and its history"],
          ["https://www.turismoroma.it/en/places/trevi-fountain", "Turismo Roma — Trevi Fountain and the Virgo aqueduct"],
          ["https://www.turismoroma.it/en/itineraries/passage-over-tiber-rome’s-seven-most-iconic-bridges", "Turismo Roma — bridges and Tiber crossings"],
          ["https://www.museodiromaintrastevere.it/en", "Museo di Roma in Trastevere — official visitor information"],
          ["https://www.atac.roma.it/en", "ATAC — Rome public transport information"]
        ]
      })
    ]
  }),
  c({
    slug: 'naples-pompeii-vesuvius',
    name: 'Naples, Pompeii & Vesuvius',
    region: 'Campania',
    band: 'south-volcano-coast',
    family: 'volcanic-urban-strata',
    label: 'Campania · excavation folio 02',
    tagline: 'Separate the living city, the buried cities and the volcano into complete operating days.',
    hubIntro: 'Naples, Pompeii, Herculaneum and Vesuvius share a volcanic landscape but not one visitor system. The city uses metro, funicular and walking layers; archaeological parks use named entrances and long exposed routes; the crater depends on separate transport, timed access and live safety decisions.',
    stay: 'Three to five nights in Naples supports one complete city day and one archaeological day, with a third day for Herculaneum or a weather-dependent volcano plan. Staying near Centrale/Garibaldi favors regional rail; the historic centre favors evenings but adds the station transfer; the waterfront favors ferries but not every excavation departure.',
    transfer: 'Napoli Centrale, the Garibaldi underground levels, Porta Nolana and Molo Beverello serve different networks. Circumvesuviana/EAV and Trenitalia stops are not interchangeable labels for Pompeii or Herculaneum. Save the exact station, entrance and return before boarding.',
    season: 'Exposed ruins and volcanic paths become strenuous in summer heat, while rain can close surfaces or crater access. Strikes, works and crowd controls affect regional rail. Keep MANN and the city centre as strong all-weather alternatives.',
    fallback: 'When a site or volcano gate closes, use one complete substitute rather than a rushed second attempt: MANN for archaeology, Herculaneum for a smaller excavation, or Naples’ civic and sacred layers for a transport disruption.',
    sources: [
      ['https://www.napolianewcity.it/en/index.html', 'Naples official tourism portal — city visitor information'],
      ['https://www.anm.it/', 'ANM Napoli — official city transport information'],
      ['https://www.eavsrl.it/', 'EAV — official Campania regional rail information']
    ],
    guides: [
      g({
        slug: 'naples-centre-mann-waterfront',
        name: 'Naples Centre, MANN & the Waterfront',
        instrument: 'Decumanus-and-collection day table',
        layout: 'decumanus-daypart-ledger',
        structure: 'market-daypart-table',
        imageQuery: 'Naples historic centre Spaccanapoli street panorama',
        imageAlt: 'The dense historic centre of Naples beneath Vesuvius',
        purpose: 'Choose the decumani, the National Archaeological Museum or the Toledo–waterfront axis as the day’s main layer, then assign markets, food and viewpoints to real dayparts instead of weaving repeatedly across the city.',
        summary: 'Enter from the station or metro stop serving the chosen layer, complete one collection or street spine, reset over a seated meal and finish downhill toward Municipio or the waterfront only when the return works.',
        choices: [
          ['Historic-centre streets', 'Use the decumani, one sacred interior and one food stop as a coherent civic day. It gives living-city depth but sacrifices a long museum block.'],
          ['MANN collection day', 'Let the archaeological museum interpret Pompeii and Campania before or after the sites. This gives strong context but limits the waterfront and market route.'],
          ['Toledo and waterfront', 'Move from the Spanish Quarter or civic centre toward the bay. It provides an easier evening finish but less excavation context.']
        ],
        access: 'Museo and Dante stations serve different edges of the old centre; Toledo and Municipio serve the western civic and waterfront line; Centrale/Garibaldi is a separate arrival system. Use one metro entry and one downhill street direction rather than treating every station as central.',
        tradeoff: 'MANN can absorb the attention needed for churches, underground sites or a long market walk. Choosing one principal layer gives up several famous interiors but creates room for Naples’ density, a proper meal and a calmer evening exit.',
        stages: [
          ['Enter from the useful station', 'Arrive at Museo, Dante, Toledo or Municipio according to the first commitment, not the generic centre label.'],
          ['Read one urban spine', 'Keep Via dei Tribunali, Spaccanapoli or the civic-waterfront line as the main direction and avoid repeated uphill returns.'],
          ['Use collection or meal as the reset', 'Give MANN or a seated meal a protected block rather than squeezing both between street queues.'],
          ['Finish toward the bay or metro', 'End near the planned evening district and transport, saving energy for the hotel return.']
        ],
        fallback: 'When street heat, rain or a church closure changes the route, shift the long block into MANN, Capodimonte or another verified collection and keep only the nearest street sequence. When the museum closes, retain the historic centre without adding a distant substitute.',
        watch: [
          ['Station levels hide transfers', 'Centrale, Garibaldi metro and EAV platforms require real walking and navigation. Allow time before a regional departure.'],
          ['Markets are working places', 'Keep bags controlled, ask before photographing people and do not block narrow commercial lanes.'],
          ['The city is vertical', 'Funiculars, stair streets and downhill finishes change effort. Choose the final elevation before adding a viewpoint.']
        ],
        duration: 'Allow six to eight hours for a museum-led or street-led city day with a real break. Keep a shorter arrival day to one spine and the waterfront.',
        combine: 'Combine MANN with a bounded old-centre line, or Toledo with the waterfront. Keep Pompeii, Herculaneum and Vesuvius as separate operating days.',
        verify: 'Check MANN openings and current rooms, ANM service, any booked underground site and the return from the final waterfront or hill district.',
        sources: [
          ['https://www.museoarcheologiconapoli.it/', 'MANN — official National Archaeological Museum information'],
          ['https://www.anm.it/s/biglietti-e-abbonamenti?language=en_US', 'ANM Napoli — official tickets and network information']
        ]
      }),
      g({
        slug: 'pompeii-city-route',
        name: 'Pompeii Archaeological City',
        instrument: 'Named-entrance excavation grid',
        layout: 'buried-city-datum-traverse',
        structure: 'excavation-traverse',
        imageQuery: 'Pompeii forum Vesuvius archaeological site wide',
        imageAlt: 'The excavated streets of Pompeii with Vesuvius beyond',
        purpose: 'Choose a core Pompeii route, a wider Pompeii+ landscape or the site’s accessible route, then match the correct rail stop and named entrance to the planned exit instead of wandering until heat decides the day.',
        summary: 'Enter at Porta Marina, Piazza Anfiteatro or another official gate suited to the route, traverse one coherent district and leave with time for the confirmed train rather than retracing the whole site.',
        choices: [
          ['Core city traverse', 'Connect the forum, selected houses and theatre district from a useful entrance. It gives the clearest first visit but sacrifices remote villas.'],
          ['Pompeii+ wider landscape', 'Use the relevant ticket and transport for suburban villas or related sites. It adds context but consumes more distance and heat exposure.'],
          ['Accessible or lower-distance route', 'Follow current official access guidance and prioritize connected public buildings. It gives a more reliable route but omits many uneven lanes.']
        ],
        access: 'Pompei Scavi–Villa dei Misteri suits Porta Marina, while Pompei Santuario and other rail services approach the modern town and Anfiteatro side. Gate names, rail operators and ticket products differ. Decide the entrance and exit pair before choosing the train.',
        tradeoff: 'Pompeii’s scale makes a complete checklist impossible. Choosing one urban argument gives up distant houses or villas but preserves water, shade, attention and a reliable route back to the rail gate.',
        stages: [
          ['Match train to gate', 'Use the official entrance name to select the rail station and walking approach; do not assume every Pompei stop serves Porta Marina.'],
          ['Orient with closures', 'Read the current map, open houses and one-way controls before committing to a distant sector.'],
          ['Traverse one city layer', 'Connect forum, domestic, theatre or amphitheatre evidence in a continuous direction and take a real shade break.'],
          ['Exit before the site becomes a return hike', 'Leave through the planned gate with margin for the station, ticket validation and service gaps.']
        ],
        fallback: 'If Pompeii admission, heat or transport breaks the plan, use Herculaneum for a smaller excavation or MANN for an indoor collection-led archaeology day. Do not buy an improvised ride between gates under time pressure.',
        watch: [
          ['The ticket defines the field', 'Named or extended products can cover different sites and entrances. Read what the official ticket actually includes.'],
          ['Stone and heat accumulate', 'Uneven surfaces, little shade and long internal distances require water, footwear and a shorter route in hot conditions.'],
          ['Modern Pompeii is not one station', 'Rail lines and gates use similar place names. Save the operator, stop and entrance together.']
        ],
        duration: 'Allow five to seven hours for a focused route plus arrival and return. A wider villa plan needs most of a day and should not be combined with Vesuvius.',
        combine: 'Combine with a quiet meal in modern Pompeii or MANN on another day. Keep the crater, Amalfi Coast and Naples’ full centre separate.',
        verify: 'Check official ticket availability, current entrances and closures, weather and the exact EAV or Trenitalia service serving the chosen gate.',
        sources: [
          ['https://pompeiisites.org/en/visiting-info/timetables-and-tickets/', 'Pompeii Archaeological Park — official tickets and entrances'],
          ['https://www.eavsrl.it/orari-linee-ferroviarie/', 'EAV — official Campania rail timetables']
        ]
      }),
      g({
        slug: 'herculaneum-vesuvius',
        name: 'Herculaneum or Vesuvius',
        instrument: 'Crater-status operating stack',
        layout: 'crater-access-status-board',
        structure: 'volcano-status-board',
        imageQuery: 'Herculaneum ruins Mount Vesuvius Campania',
        imageAlt: 'Herculaneum archaeological site below Mount Vesuvius',
        purpose: 'Choose an Herculaneum excavation day or a weather-cleared Vesuvius crater product before leaving Naples; the Ercolano walk, park booking and crater transport are separate systems, not a guaranteed combined excursion.',
        summary: 'Reach Ercolano for one declared purpose, complete the excavation or the confirmed mountain chain and keep the other option as a later day rather than a rushed add-on.',
        choices: [
          ['Herculaneum depth', 'Use the compact excavation and preserved domestic evidence as the complete day. It sacrifices the crater but works with more predictable access.'],
          ['Vesuvius crater window', 'Use a confirmed park time and authorized transport for the mountain. It gives volcanic scale but is exposed to weather and operating changes.'],
          ['Excavation plus lower context', 'Pair Herculaneum with the town or a nearby museum only when time remains. This provides balance without claiming both major gates.']
        ],
        access: 'Ercolano Scavi station sits uphill from the archaeological entrance. Vesuvius access requires a separate confirmed road and park-entry chain; arriving at Ercolano does not create a crater transfer automatically. Work backward from the official crater slot and return.',
        tradeoff: 'The excavation rewards slow room-by-room reading, while the crater uses transfer and uphill walking time. Combining both gives up depth and recovery margin; choosing one creates a complete visit with a reliable return.',
        stages: [
          ['Confirm the operating state', 'Check archaeological admission or crater access, weather and the actual transport provider before leaving the hotel.'],
          ['Use the correct Ercolano threshold', 'Walk downhill to the excavation or meet the named mountain transfer; do not follow generic volcano advertising.'],
          ['Complete one vertical layer', 'Read the buried city carefully or follow the authorized crater route within the current safety boundary.'],
          ['Descend with margin', 'Return to the station or booked vehicle before late-day weather and regional rail gaps narrow the options.']
        ],
        fallback: 'When the crater closes for weather or safety, make Herculaneum the complete archaeology day if admission works. When the excavation is disrupted, return to Naples for MANN rather than seeking an unofficial mountain detour.',
        watch: [
          ['Volcanic access is live', 'Weather, safety and capacity can override a reservation. Treat the park’s current status as the gate.'],
          ['Downhill becomes uphill', 'The return from Herculaneum to the station climbs through the modern town; preserve energy and time.'],
          ['Transfer marketing is not authorization', 'Use official park and transport information and verify exactly what the booked service includes.']
        ],
        duration: 'Allow four to six hours for Herculaneum with transport, or most of a day for a crater window from Naples. Do not promise both as a relaxed half-day pair.',
        combine: 'Combine Herculaneum with MANN on a different day or a short Naples evening. Keep Pompeii and the Amalfi Coast separate.',
        verify: 'Check Herculaneum admission, Vesuvius National Park access and safety status, the confirmed mountain transport and current EAV service.',
        sources: [
          ['https://ercolano.cultura.gov.it/', 'Parco Archeologico di Ercolano — official visitor information'],
          ['https://www.vesuviusnationalpark.it/en/', 'Vesuvius National Park — official access and safety information']
        ]
      })
    ]
  }),
  c({
    slug: 'sorrento-amalfi-capri',
    name: 'Sorrento, Amalfi Coast & Capri',
    region: 'Campania',
    band: 'south-volcano-coast',
    family: 'tyrrhenian-return-manifest',
    label: 'Campania · coastal folio 03',
    tagline: 'Choose the base, the vessel or road spine and the final return before the celebrated view.',
    hubIntro: 'Sorrento, the Amalfi Coast and Capri sit close on a map but operate through different rail, bus, road and marine systems. A credible plan chooses Sorrento, Salerno or a coast village as the base, names the port or bus stop and keeps one complete land-side alternative for rough sea or road disruption.',
    stay: 'Three to five nights gives room for one peninsula day, one coast route and one island window without making every evening a transfer. Sorrento works well for Naples rail and Capri boats; Salerno is strong for the eastern coast; a village stay reduces sightseeing transfers but complicates luggage and departure-day reliability.',
    transfer: 'EAV rail reaches Sorrento, mainline rail reaches Salerno, coast buses use named stops and ferries use specific ports with seasonal schedules. Marina Piccola, Sorrento’s centre and the rail station have a real height gap. Build every route from the final return backward.',
    season: 'Marine service, heat, cliff paths and road congestion are strongly seasonal. Summer adds frequency but also full vessels, queues and road pressure; winter can remove routes entirely. Sea state and fire or path controls can override a sunny forecast.',
    fallback: 'Keep a complete land day in the base: Sorrento’s historic centre, Salerno and its collections, or one coast town reached by the most reliable current road service. A cancelled boat is not permission to improvise a multi-town taxi chase.',
    sources: [
      ['https://www.eavsrl.it/', 'EAV — official rail information for Sorrento'],
      ['https://sitasudtrasporti.it/campania/', 'SITA Sud Campania — official coast bus information'],
      ['https://www.travelmar.it/en', 'Travelmar — official Amalfi Coast ferry information']
    ],
    guides: [
      g({
        slug: 'sorrento-gateway',
        name: 'Sorrento Gateway & Peninsula',
        instrument: 'Rail-to-marina gateway board',
        layout: 'station-marina-vertical-braid',
        structure: 'rail-to-street-braid',
        imageQuery: 'Sorrento cliffs Marina Piccola Bay of Naples',
        imageAlt: 'Sorrento’s cliffs and marina above the Bay of Naples',
        purpose: 'Decide whether the day belongs to Sorrento itself, a Massa Lubrense–Punta Campanella peninsula branch or a direct island departure, then account for the station-to-marina height change and luggage before adding distance.',
        summary: 'Arrive by the confirmed EAV service, orient between station, old town and marina, choose the Sorrento, protected-peninsula or port layer and finish near the transport used the next morning.',
        choices: [
          ['Sorrento base day', 'Use the old town, cliff viewpoints and marina as an arrival or reset day. It gives low transport risk but sacrifices a major coast or island excursion.'],
          ['Massa Lubrense & Punta Campanella branch', 'Use one verified bus, tour or legal road approach toward Massa Lubrense, Termini or a currently open protected-area route. It adds peninsula landscape but depends on the named return and current trail access.'],
          ['Direct island gateway', 'Treat Sorrento as the port connection for Capri with minimal town sightseeing. It protects the sailing but gives up a complete Sorrento day.']
        ],
        access: 'EAV trains arrive above the historic centre; Marina Piccola lies below the cliffs and requires a lift, stairs, bus or road transfer. The station and port are not one interchange. With luggage, confirm the vertical connection and accommodation access before arrival.',
        tradeoff: 'Sorrento is useful because it connects several systems, not because every system fits in one day. Choosing the town, peninsula or port as the main role gives up another excursion but removes a fragile transfer.',
        stages: [
          ['Arrive above the cliffs', 'Leave the EAV station with the hotel, old town or port direction already chosen.'],
          ['Resolve the vertical move', 'Use the confirmed lift, road or stair route according to luggage and mobility rather than following the shortest map line.'],
          ['Use one peninsula layer', 'Give the town, marina or one verified land excursion a complete block.'],
          ['Finish beside tomorrow’s system', 'Return near the station, hotel or port needed next, avoiding a late climb with bags.']
        ],
        fallback: 'If rail or marine disruption prevents the planned branch, keep a complete Sorrento day with the centre, museum or cloister when open, viewpoints and one seated meal. Do not replace it with an uncertain coast transfer.',
        watch: [
          ['The marina is below the town', 'A short horizontal map distance can hide lifts, stairs and queues; account for the full vertical journey.'],
          ['Regional rail can be crowded', 'Leave margin for platforms, luggage and service changes, especially around cruise or peak visitor periods.'],
          ['Base convenience is route-specific', 'Sorrento is strong for some coast and island trips but not automatically the best base for eastern Amalfi towns.']
        ],
        duration: 'Allow four to six hours for a complete Sorrento arrival day, or most of a day for one peninsula branch. Keep a ferry departure day lightly scheduled.',
        combine: 'Combine the old town with the marina or a single nearby land branch. Keep Capri and the full Amalfi coast line as their own days.',
        verify: 'Check EAV rail, the current station-to-marina connection, the exact ferry port and any hotel or road access restriction before travel.',
        sources: [
          ['https://www.eavsrl.it/', 'EAV — official Sorrento rail information'],
          ['https://www.comune.sorrento.na.it/', 'Comune di Sorrento — official municipal information'],
          ['https://www.puntacampanella.org/', 'Punta Campanella Marine Protected Area — official access information']
        ]
      }),
      g({
        slug: 'positano-amalfi-ravello',
        name: 'Positano, Amalfi & Ravello',
        instrument: 'Coast ferry-and-bus capacity sheet',
        layout: 'amalfi-marine-road-capacity-braid',
        structure: 'coast-capacity-braid',
        imageQuery: 'Amalfi Coast Positano cliff town sea panorama',
        imageAlt: 'Positano stacked above the sea on the Amalfi Coast',
        purpose: 'Choose Positano’s stair town, Amalfi plus Ravello or a limited ferry corridor as the day’s main coast argument, then protect the last road or marine return before adding another village.',
        summary: 'Enter from Sorrento or Salerno on one verified mode, complete one town pair or bounded coast view and leave before vessel capacity, road congestion or darkness removes the return.',
        choices: [
          ['Positano depth', 'Use one landing or bus stop and accept the town’s vertical streets. It gives iconic coast scale but sacrifices Ravello and a long Amalfi interior.'],
          ['Amalfi and Ravello', 'Use Amalfi as the transport hinge and one confirmed uphill connection to Ravello. This gives cathedral and terrace contrast but not a relaxed Positano visit.'],
          ['Marine coast line', 'Use a verified ferry to understand the cliffs from the water, stopping in at most one principal town. It gives the best geographic view but is weather-dependent.']
        ],
        access: 'SITA buses, Travelmar ferries and private road products use different terminals, ticket rules and capacity. Positano’s landing and upper bus stops are separated by stairs; Ravello requires an uphill road connection from Amalfi. Match the mode to the chosen town and walking ability.',
        tradeoff: 'Three famous towns are not three adjacent platforms. Choosing one town or one pair gives up another postcard but creates time for the stairs, cathedral, gardens and an unhurried return.',
        stages: [
          ['Lock the return first', 'Save the final comfortable bus or sailing from the actual town before buying an outward product.'],
          ['Enter on one mode', 'Use ferry or bus as the day’s main spine; avoid switching repeatedly unless the exact connection is confirmed.'],
          ['Complete one vertical town', 'Allow for stairs, queues and a seated break rather than counting only shoreline distance.'],
          ['Leave before capacity decides', 'Reach the named stop or port early enough for queues and any road or sea-state change.']
        ],
        fallback: 'If marine service is cancelled, choose one land-served town with the strongest current bus connection and return early. If road disruption is severe, remain in Salerno or Sorrento rather than improvising an expensive multi-town route.',
        watch: [
          ['A ticket may not equal a seat', 'Bus and vessel capacity, boarding order and reservation conditions differ. Read the operator’s current rules.'],
          ['Every town is vertical', 'Landings, centres, gardens and upper stops sit at different levels; stairs are part of the itinerary.'],
          ['Path status is independent', 'Do not add a cliff path because the ferry runs. Check fire, weather and trail access separately.']
        ],
        duration: 'Allow a full day for one town pair or a coast sailing with one meaningful stop. A single town still deserves five to seven hours including transport.',
        combine: 'Combine Amalfi with Ravello or Positano with one bounded sea view. Do not add Capri or Pompeii to the same operating day.',
        verify: 'Check SITA and Travelmar schedules, marine weather, stop or port identity, any path closure and the last return to the accommodation base.',
        sources: [
          ['https://sitasudtrasporti.it/campania/', 'SITA Sud Campania — official bus information'],
          ['https://www.travelmar.it/en', 'Travelmar — official Amalfi Coast ferry information']
        ]
      }),
      g({
        slug: 'capri-anacapri',
        name: 'Capri & Anacapri',
        instrument: 'Island landing-and-return billet',
        layout: 'marina-grande-return-billet',
        structure: 'island-return-billet',
        imageQuery: 'Capri Faraglioni island coast panorama Italy',
        imageAlt: 'Capri’s cliffs and Faraglioni rising from the Tyrrhenian Sea',
        purpose: 'Choose Capri town and Villa Jovis, Anacapri and Monte Solaro or a marine circuit as the island’s primary line, then fit funicular, bus and boat products around the last mainland return.',
        summary: 'Land at Marina Grande, move once to the chosen island half, complete one cultural or landscape sequence and return to the port before the sailing queue controls the evening.',
        choices: [
          ['Capri town and Villa Jovis', 'Use the funicular or bus for the upper town and a bounded historical walk. It gives Roman and civic context but sacrifices Anacapri depth.'],
          ['Anacapri and Monte Solaro', 'Move directly to Anacapri for the chairlift or town layer. It offers elevation and quieter streets but less Capri-town time.'],
          ['Marine circuit', 'Use an authorized boat product as the principal experience, treating caves and landings as conditional. It gives coast scale but depends most on sea state.']
        ],
        access: 'Ferries and hydrofoils arrive at Marina Grande; the funicular, island buses and taxis have separate queues. Capri and Anacapri are distinct uphill systems. Blue Grotto and around-island boats use additional operating decisions and never guarantee entry.',
        tradeoff: 'The island’s land routes and marine circuits compete for the same daylight and return margin. Choosing one island half gives up another headline view but prevents the port queue from erasing the visit.',
        stages: [
          ['Land and save the sailing', 'Confirm the return ticket or latest practical departure before leaving Marina Grande.'],
          ['Move to one island half', 'Use the funicular or named bus for Capri or Anacapri rather than sampling every queue.'],
          ['Complete one cultural landscape', 'Give a villa, chairlift, town or bounded walk enough time to justify the climb.'],
          ['Return before the port compresses', 'Descend with margin for island transport, boarding controls and marine changes.']
        ],
        fallback: 'If boats or the Blue Grotto stop, keep a complete land route through Capri town, Certosa di San Giacomo or Anacapri according to the weather. If upper transport fails, remain around Marina Grande and the nearest accessible sites.',
        watch: [
          ['Blue Grotto is conditional', 'Sea state, queues and operating decisions can remove it even on a generally pleasant day.'],
          ['Island buses are small', 'Capacity and narrow roads add waiting. Do not build tight connections between island halves.'],
          ['The mainland return is the hard edge', 'A hotel booking off-island does not make a later sailing operate. Preserve a conservative port margin.']
        ],
        duration: 'Allow a full day from the mainland for one island half plus a secondary stop. An overnight stay supports both halves without making the last sailing the central anxiety.',
        combine: 'Combine Capri town with one villa, or Anacapri with Monte Solaro when operating. Keep the Amalfi Coast and Pompeii for other days.',
        verify: 'Check the exact mainland port, ferry operator and check-in, island transport status, official cultural-site openings and marine conditions before departure.',
        sources: [
          ['https://www.capritourism.com/en', 'Capri official tourism — island planning information'],
          ['https://museicapri.cultura.gov.it/', 'Musei e Parchi Archeologici di Capri — official sites']
        ]
      })
    ]
  }),
  c({
    slug: 'florence-pisa-lucca',
    name: 'Florence, Pisa & Lucca',
    region: 'Tuscany',
    band: 'central-art-cities',
    family: 'renaissance-reservation-braid',
    label: 'Tuscany · art-city folio 04',
    tagline: 'Reserve one masterpiece, then let a river bank or rail branch complete the day.',
    hubIntro: 'Florence is a reservation-heavy walking city; Pisa and Lucca are separate rail cities with different station-to-centre approaches. A strong Tuscany plan gives Florence at least two complete layers and treats the western cities as their own rail decision, not as disposable stops between museum tickets.',
    stay: 'Three to five nights in Florence supports the Duomo/Uffizi core, an Oltrarno day and one western rail branch. Santa Maria Novella is practical for trains; the Duomo core reduces walking to reservations but adds crowd pressure; Oltrarno improves evenings but requires deliberate river crossings.',
    transfer: 'Firenze Santa Maria Novella, Campo di Marte and Rifredi solve different arrivals. Pisa Centrale and Pisa San Rossore approach the Field of Miracles differently, while Lucca station sits outside a particular wall gate. Choose station and city order from the first reserved door.',
    season: 'Summer heat and major-event crowds increase standing and reduce comfortable hill walks. Museum closure days and restoration can alter the art-city plan. Rain strengthens collections but weakens gardens and towers; keep a complete indoor sequence.',
    fallback: 'Use a same-city alternative: Opera del Duomo Museum or Palazzo Vecchio for a climb failure, Pitti interiors for Boboli weather, or a full Pisa or Lucca day when the second rail branch collapses.',
    sources: [
      ['https://feelflorence.it/', 'FeelFlorence — official metropolitan visitor information'],
      ['https://www.visittuscany.com/en/', 'Visit Tuscany — official regional visitor information'],
      ['https://www.trenitalia.com/en.html', 'Trenitalia — official rail planning']
    ],
    guides: [
      g({
        slug: 'duomo-uffizi-centre',
        name: 'Duomo, Uffizi & the Renaissance Centre',
        instrument: 'Renaissance reservation braid',
        layout: 'renaissance-attention-spread',
        structure: 'collection-attention-spread',
        imageQuery: 'Florence Duomo Uffizi Arno panorama',
        imageAlt: 'Florence Cathedral dome above the Renaissance city centre',
        purpose: 'Choose the Duomo climb, Uffizi collection or civic street-and-palace layer as the main reservation, then connect the remaining centre without treating every pass component and gallery as compulsory.',
        summary: 'Meet one timed door, work one bounded collection or vertical climb and finish along a single piazza-to-Arno line with a protected break.',
        choices: [
          ['Duomo complex depth', 'Choose a specific climb or monument combination and use the Opera Museum for interpretation. This gives architectural sequence but sacrifices a long Uffizi visit.'],
          ['Uffizi collection depth', 'Reserve a focused gallery block and use Piazza della Signoria and the Arno as context. It gives painting depth but limits tower and dome time.'],
          ['Civic Renaissance circuit', 'Keep major museums short or exterior, then use Palazzo Vecchio, public sculpture and streets as one layer. It offers flexibility but less collection depth.']
        ],
        access: 'Santa Maria Novella serves the western edge; Duomo entrances and Uffizi doors sit on different piazzas with controlled arrival rules. Dome, bell tower, baptistery and museum products are not one walk-in sequence. Work backward from the timed entry.',
        tradeoff: 'A dome climb and a deep Uffizi visit demand the same morning energy. Choosing one gives up a second masterpiece interior but creates time for careful looking, a meal and the civic spaces that connect them.',
        stages: [
          ['Meet the reserved threshold', 'Arrive at the exact entrance with the product, identity and bag conditions understood.'],
          ['Use one deep visual layer', 'Follow a bounded collection, climb or monument sequence instead of exhausting every included site.'],
          ['Reset in a nearby piazza', 'Take a seated break before moving to Piazza della Signoria or the Arno.'],
          ['Finish without recrossing the centre', 'End near the river, Santa Maria Novella or the evening reservation rather than returning to the first queue.']
        ],
        fallback: 'If the climb closes, use the Opera del Duomo Museum and ground-level monuments when open. If Uffizi entry fails, use Palazzo Vecchio or another verified civic collection and keep the same Renaissance-centre line.',
        watch: [
          ['Pass components have separate clocks', 'A combined product can still require specific slots and entrances. Read each component rather than assuming free sequence.'],
          ['Collection fatigue is real', 'A famous-room checklist is not a coherent visit. Preselect a period or floor and stop before attention collapses.'],
          ['The centre is compact but crowded', 'Short distances can take time around queues and groups. Protect the next timed door.']
        ],
        duration: 'Allow six to eight hours for one major reservation, a secondary civic layer and a meal. Give the Duomo and Uffizi separate days when both are priorities.',
        combine: 'Combine one controlled interior with Piazza della Signoria and the Arno. Keep Pitti, Fiesole, Pisa and Lucca for other days.',
        verify: 'Check the exact Duomo product and slot, Uffizi admission, current gallery or monument closures and the city route from the chosen station.',
        sources: [
          ['https://duomo.firenze.it/en/visit/plan-your-visit', 'Opera di Santa Maria del Fiore — official visit planning'],
          ['https://www.uffizi.it/en/visit', 'Uffizi Galleries — official visitor information']
        ]
      }),
      g({
        slug: 'oltrarno-pitti-fiesole',
        name: 'Oltrarno, Pitti & Fiesole',
        instrument: 'Arno-bank hill section',
        layout: 'arno-hill-section',
        structure: 'hill-town-section',
        imageQuery: 'Florence Oltrarno Pitti Boboli panorama',
        imageAlt: 'Florence viewed across the Arno toward the Oltrarno hills',
        purpose: 'Choose Pitti and Boboli, an Oltrarno craft-and-church line or Fiesole’s hill setting, then make the bridge or bus climb the day’s single elevation change instead of stacking both hills.',
        summary: 'Cross the Arno once for Pitti or Oltrarno, or leave directly for Fiesole; complete one hill layer and return by the confirmed downhill transport.',
        choices: [
          ['Pitti and Boboli', 'Use palace collections and gardens as the principal block. This offers art and landscape together but is weather- and walking-intensive.'],
          ['Oltrarno street layer', 'Connect Santo Spirito, one church or workshop context and a river finish. It gives living-neighborhood rhythm but fewer headline collections.'],
          ['Fiesole hill day', 'Use the confirmed bus for archaeology and views above Florence. It sacrifices Oltrarno depth but provides a different urban scale.']
        ],
        access: 'Ponte Vecchio, Santa Trinita and other bridges lead to different Oltrarno streets. Pitti rises from the river, Boboli adds slopes and Fiesole requires a separate bus corridor. Choose the hill and return before crossing.',
        tradeoff: 'Pitti/Boboli and Fiesole are both elevation days. Choosing one gives up the other viewpoint but preserves energy for a museum, church or neighborhood meal instead of turning the day into climbing and transit.',
        stages: [
          ['Choose river or bus threshold', 'Cross the bridge nearest the first Oltrarno door or board the confirmed Fiesole service from its actual stop.'],
          ['Complete one interior', 'Give Pitti, a church or the Fiesole archaeological area the protected attention block.'],
          ['Use the hill selectively', 'Walk the garden, neighborhood slope or viewpoint only as far as the chosen return supports.'],
          ['Descend without retracing', 'Return by a useful bridge or bus and finish near dinner or the hotel line.']
        ],
        fallback: 'Rain favors Pitti interiors, Oltrarno churches and artisan interpretation over Boboli or exposed Fiesole viewpoints. If the bus is disrupted, keep the day across the Arno rather than substituting a distant hill.',
        watch: [
          ['Garden access follows weather', 'Boboli surfaces and sections can change. Check current conditions separately from palace admission.'],
          ['The river does not remove elevation', 'Pitti and hillside streets climb quickly after the bridge; pace the first hour.'],
          ['Fiesole is a separate transport day', 'A city bus ride does not make it a brief add-on after a full palace visit.']
        ],
        duration: 'Allow five to seven hours for Pitti/Boboli or a Fiesole-led day. An Oltrarno street-and-church route can fit four to six hours.',
        combine: 'Combine Pitti with Santo Spirito or a short river line. Keep Fiesole separate from a deep palace or Uffizi day.',
        verify: 'Check Pitti and Boboli openings, garden conditions, Fiesole archaeological access and the current bus return before departure.',
        sources: [
          ['https://www.uffizi.it/en/visit', 'Uffizi Galleries — official Pitti and Boboli information'],
          ['https://feelflorence.it/', 'FeelFlorence — official district and transport planning']
        ]
      }),
      g({
        slug: 'pisa-lucca-rail-pair',
        name: 'Pisa or Lucca by Rail',
        instrument: 'Two-station rail hinge',
        layout: 'western-tuscany-rail-hinge',
        structure: 'rail-to-street-braid',
        imageQuery: 'Lucca walls Tuscany city panorama Pisa tower',
        imageAlt: 'Lucca’s historic walls and Tuscan city landscape',
        purpose: 'Choose Pisa for the Field of Miracles, Lucca for a wall-and-city circuit or a deliberately limited two-city rail day, matching each station to its first gate and accepting what the second stop removes.',
        summary: 'Reach one western Tuscany city by the useful station, complete its principal urban route and add the second only when the train and return still leave a meaningful block.',
        choices: [
          ['Pisa depth', 'Use the Field of Miracles, one booked monument and the river or civic centre. It gives architectural concentration but sacrifices Lucca’s wall circuit.'],
          ['Lucca depth', 'Use the walls, one church or museum and the street grid as a complete day. It offers a coherent circuit but no Leaning Tower visit.'],
          ['Limited rail pair', 'Give one city the main interior and the other a bounded exterior walk. It provides contrast but requires strict cutoffs and light luggage.']
        ],
        access: 'Pisa Centrale connects to the river and centre, while Pisa San Rossore can be useful for the Field of Miracles on appropriate services. Lucca station sits outside the walls near a specific gate. Check the service pattern rather than choosing solely by station-name proximity.',
        tradeoff: 'Pisa and Lucca are close enough for a rail pair but rich enough for separate days. Choosing both gives up a second major interior and relaxed meals; choosing one allows the city’s river, walls and streets to become more than a photo stop.',
        stages: [
          ['Choose the first station', 'Match Pisa Centrale or San Rossore, or Lucca station, to the first booked or walking commitment.'],
          ['Complete the primary city', 'Use one monument cluster or wall circuit without watching the next train throughout the visit.'],
          ['Decide whether the hinge still works', 'Add the second city only when the confirmed service leaves a useful block and a protected return.'],
          ['Exit through the nearest gate', 'Finish toward the station serving the evening train rather than crossing the centre again.']
        ],
        fallback: 'If the rail pair breaks, stay in the first city and add its river, walls, civic museum or quieter church layer. A complete single city is better than an hour on the second platform.',
        watch: [
          ['Pisa stations are not interchangeable', 'Service patterns and the walking destination matter; the nearest stop is not always served by the chosen train.'],
          ['Tower products use timed rules', 'The square is public, but individual monuments and climbs have separate admission conditions.'],
          ['Lucca’s walls take real time', 'A full circuit plus the street core is a substantial route, not a short station layover.']
        ],
        duration: 'Allow a full day for either city. A two-city pair needs eight to ten hours and should include only one major controlled interior.',
        combine: 'Combine Pisa with its river or Lucca with its walls. Add the other city only as a bounded contrast, not another full checklist.',
        verify: 'Check current rail stops and disruptions, the exact monument ticket in Pisa, Lucca city access and the final Florence return.',
        sources: [
          ['https://www.turismo.pisa.it/', 'Comune di Pisa — official tourism information'],
          ['https://turismo.lucca.it/en/information/how-to-get/', 'Lucca Tourism — official arrival information']
        ]
      })
    ]
  }),
  c({
    slug: 'siena-southern-tuscany',
    name: 'Siena, Val d’Orcia & Maremma',
    region: 'Tuscany',
    band: 'central-art-cities',
    family: 'hill-town-last-mile-folio',
    label: 'Tuscany · hill-country folio 05',
    tagline: 'Name the hill-town gate, rural corridor and return before the road becomes the itinerary.',
    hubIntro: 'Siena is a bus-and-walking city whose rail station sits below the historic core; Val d’Orcia and Maremma depend on sparse buses, deliberate road routes or booked excursions. A useful southern Tuscany plan chooses one town corridor or protected landscape per day and treats ZTL boundaries, heat and Sunday service as core decisions.',
    stay: 'Two to four nights in Siena supports a complete civic day and one rural branch. A Val d’Orcia village stay reduces repeated outbound travel but makes arrival, meals and car-free movement less flexible; Grosseto is a stronger rail base for Maremma than Siena. Moving hotels only helps when the landscape system truly changes.',
    transfer: 'Siena rail station, Piazza Gramsci buses and escalator approaches enter the city at different levels. Val d’Orcia towns do not share one station, while Maremma park access begins at named visitor centres and seasonal shuttles. Save the last return and legal parking threshold first.',
    season: 'Summer heat, Palio periods, harvest traffic, fire risk and seasonal park services alter capacity and route length. Rain makes stone streets and country paths slower. Keep Siena or Grosseto collections as the stable fallback.',
    fallback: 'Use a complete rail- or bus-served city day when the countryside chain fails: Siena museums and cathedral, Grosseto walls and collections, or the first selected town without the second rural stop.',
    sources: [
      ['https://www.visitsiena.it/en/', 'Visit Siena — official visitor information'],
      ['https://www.visittuscany.com/en/areas/maremma/', 'Visit Tuscany — official Maremma information'],
      ['https://www.at-bus.it/en', 'Autolinee Toscane — official regional bus information']
    ],
    guides: [
      g({
        slug: 'siena-civic-cathedral',
        name: 'Siena Civic Centre & Cathedral',
        instrument: 'Contrada threshold circuit',
        layout: 'contrada-sacred-threshold',
        structure: 'living-sacred-threshold',
        imageQuery: 'Siena Piazza del Campo cathedral skyline panorama',
        imageAlt: 'Siena’s Piazza del Campo and medieval skyline in Tuscany',
        purpose: 'Choose the civic museum and tower, the cathedral complex or the contrada street layers as the main argument, then enter Siena through the transport and escalator threshold that fits the first door.',
        summary: 'Climb from the rail or bus arrival into one civic or sacred layer, complete a single ordered centre circuit and leave through the access system nearest the return.',
        choices: [
          ['Civic Siena', 'Use Piazza del Campo, Museo Civico and the tower if operating as the main block. It gives political and urban history but limits cathedral depth.'],
          ['Cathedral complex', 'Choose the current cathedral product and give its connected spaces protected time. It offers sacred art and architecture but less contrada wandering.'],
          ['Contrada street circuit', 'Keep major interiors limited and read fountains, streets and neighborhood boundaries respectfully. It gives living-city context but fewer headline interiors.']
        ],
        access: 'Piazza Gramsci buses arrive near the upper centre; the railway station lies below and connects through local transport and escalator systems. ZTL limits road access. Decide the first gate and the final descent rather than navigating to Piazza del Campo alone.',
        tradeoff: 'The tower, civic museum and cathedral complex can each occupy the best part of a day. Choosing one gives up another interior but creates time to understand streets and contrade without treating a living neighborhood as festival scenery.',
        stages: [
          ['Enter through the useful level', 'Use the bus stop, escalator or legal parking boundary that serves the first reserved door.'],
          ['Complete civic or sacred depth', 'Give the selected museum, tower or cathedral product the long block and respect worship or capacity controls.'],
          ['Read one contrada line', 'Follow a bounded street sequence with public-space conduct rather than chasing every emblem.'],
          ['Descend toward the return', 'Leave through the transport threshold serving the station or bus before hill fatigue controls the evening.']
        ],
        fallback: 'If tower access closes for wind or capacity, retain the civic museum and Campo. If cathedral access changes, use the civic layer and a respectful street circuit without substituting another distant sacred site.',
        watch: [
          ['Event periods rewrite movement', 'Palio and civic events can change access, capacity and resident priorities. Follow current official instructions.'],
          ['The station is below the centre', 'The return includes a real descent and connection; leave energy and time.'],
          ['Contrade are living communities', 'Observe public space respectfully and do not treat residents, doorways or ceremonies as an attraction set.']
        ],
        duration: 'Allow six to eight hours for one deep interior layer plus a complete centre circuit. A lower-mobility version should prioritize the arrival level and one collection.',
        combine: 'Combine a civic or cathedral visit with a bounded contrada route. Keep San Gimignano, Val d’Orcia and Maremma for separate days.',
        verify: 'Check Museo Civico and tower access, the cathedral product and worship conditions, event restrictions and the current station or bus route.',
        sources: [
          ['https://www.visitsiena.it/en/', 'Visit Siena — official city planning'],
          ['https://museocivico.comune.siena.it/organizza-la-tua-visita', 'Museo Civico Siena — official visit information']
        ]
      }),
      g({
        slug: 'val-dorcia-towns',
        name: 'Val d’Orcia Towns',
        instrument: 'Valley last-mile threshold ring',
        layout: 'valley-ztl-threshold-rings',
        structure: 'ztl-threshold-ring',
        imageQuery: 'Val d Orcia Pienza Tuscany rolling hills road',
        imageAlt: 'Rolling hills and stone towns in Val d’Orcia, Tuscany',
        purpose: 'Choose the Pienza–San Quirico corridor, Montalcino or Bagno Vignoni as one workable town line, then define the bus, booked tour, bicycle or legal road threshold instead of treating the valley as a single station.',
        summary: 'Enter one town through its actual stop or parking boundary, connect at most one second place on a confirmed corridor and return before sparse service or darkness removes the options.',
        choices: [
          ['Pienza and San Quirico', 'Use two connected town centres only when the day’s bus, tour or road sequence is confirmed. This gives classic valley contrast but little winery depth.'],
          ['Montalcino focus', 'Give the fortress town, civic context and one booked producer the full day. It sacrifices wider valley sampling but reduces road churn.'],
          ['Bagno Vignoni and landscape', 'Use the thermal-village setting and one bounded walk or nearby town. It provides a slower route but depends on a precise last mile.']
        ],
        access: 'Val d’Orcia has no single rail arrival. Buses vary by day and season; Sunday patterns can be sparse. Drivers must respect ZTL boundaries and use legal lots outside historic centres. A winery reservation does not supply transport unless explicitly stated.',
        tradeoff: 'A broad scenic loop creates more windshield time than town depth. Choosing one corridor gives up several famous viewpoints but leaves time for streets, a meal and a safe return without illegal centre access.',
        stages: [
          ['Choose the corridor, not the list', 'Select one or two places sharing a confirmed bus, tour or road line and save the final return.'],
          ['Stop outside the legal threshold', 'Use the named bus stop or parking area and walk through the town gate.'],
          ['Give one town the long block', 'Use streets, civic evidence, a meal and any booked producer without rushing to the next hill.'],
          ['Leave before rural options narrow', 'Return to Siena, the rail gateway or the valley base with daylight and service margin.']
        ],
        fallback: 'If a connection or producer booking fails, remain in the first town and add its civic museum, fortress, signed walk or meal. Do not drive into a ZTL or hire an unverified transfer to preserve the checklist.',
        watch: [
          ['Sunday changes the network', 'A weekday timetable is not evidence for a Sunday or seasonal return. Check the actual travel date.'],
          ['ZTL cameras enforce the boundary', 'Historic-centre access can be restricted even when navigation suggests the road. Use legal parking and signed entrances.'],
          ['Wine and driving conflict', 'Use a driver, tour or restrained tasting plan; a producer visit is not permission to ignore the return.']
        ],
        duration: 'Allow a full day for one valley corridor from Siena. An overnight town stay supports a slower second place without relying on the last outbound bus.',
        combine: 'Combine only towns on the same verified line or one booked producer near the chosen base. Keep Maremma and Florence separate.',
        verify: 'Check Autolinee Toscane for the exact date, town ZTL and parking information, any producer booking and weather or daylight for the chosen walk.',
        sources: [
          ['https://en.visitvaldorcia.it/', 'Visit Val d’Orcia — official destination information'],
          ['https://www.at-bus.it/en', 'Autolinee Toscane — official regional bus information']
        ]
      }),
      g({
        slug: 'maremma-park-coast',
        name: 'Maremma Park & Coast',
        instrument: 'Marsh-and-heat trail gate',
        layout: 'reserve-coast-capacity-braid',
        structure: 'coast-capacity-braid',
        imageQuery: 'Maremma natural park Tuscany coast Uccellina',
        imageAlt: 'Mediterranean coast and wild landscape in Maremma Natural Park',
        purpose: 'Choose an Alberese park route, Grosseto cultural day or bounded coast segment, then make the visitor centre, seasonal shuttle, heat and fire status the actual gate rather than assuming every beach and trail is open.',
        summary: 'Arrive through Grosseto or Alberese, confirm one official route, complete the signed landscape and return before heat, shuttle gaps or dusk complicate the coast.',
        choices: [
          ['Alberese park route', 'Use the visitor-centre system and one official trail or shuttle product. It gives the strongest protected landscape but depends on capacity and conditions.'],
          ['Grosseto civic day', 'Use the walls, archaeology and museums as a complete low-risk alternative. It sacrifices the coast but works without fragile rural transport.'],
          ['Bounded coast visit', 'Choose one legal beach or shoreline access linked to the day’s transport. It provides water and landscape but less park interpretation.']
        ],
        access: 'Grosseto is the principal rail gateway; Alberese and park routes require named buses, visitor-centre instructions, shuttles, bicycles or legal parking. Trailheads and beaches are not interchangeable. Confirm the route number and return before leaving the rail corridor.',
        tradeoff: 'Park trails, remote beaches and Grosseto collections solve different days. Choosing one gives up a wider coast loop but protects shade, water, conservation rules and the final connection.',
        stages: [
          ['Check the park gate', 'Read route availability, fire and weather status, visitor-centre instructions and any capacity control.'],
          ['Reach the named start', 'Use the confirmed bus, shuttle, bicycle or legal lot rather than navigating to the park name.'],
          ['Complete one signed landscape', 'Stay on the selected trail or beach access and carry the required water and sun protection.'],
          ['Return before heat or service gaps', 'Reach Alberese or Grosseto with margin for the final rural and rail connection.']
        ],
        fallback: 'In extreme heat, fire restrictions, rain or shuttle disruption, make Grosseto a full walls-and-museum day or use another officially open low-distance route. Never cross a closed path to preserve the coast plan.',
        watch: [
          ['Protected routes are conditional', 'Fire risk, flooding, conservation and capacity can change which trail or beach is usable.'],
          ['The visitor centre is not the coast', 'Allow the onward shuttle, bicycle or trail time after check-in.'],
          ['Rural return is sparse', 'Save the final bus or shuttle and do not assume a taxi will be available at a remote trailhead.']
        ],
        duration: 'Allow a full day for a park or coast route from Siena or Grosseto. A Grosseto cultural day can fit five to seven hours.',
        combine: 'Combine one park route with Alberese or one Grosseto evening. Keep Val d’Orcia and distant beaches for separate days.',
        verify: 'Check Maremma Park route and shuttle status, fire and heat conditions, Autolinee Toscane service and the exact rail return.',
        sources: [
          ['https://parco-maremma.it/', 'Parco Regionale della Maremma — official access information'],
          ['https://www.visittuscany.com/en/areas/maremma/', 'Visit Tuscany — official Maremma destination information']
        ]
      })
    ]
  })
];
