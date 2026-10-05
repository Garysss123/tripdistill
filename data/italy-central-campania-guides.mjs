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
    hubIntro: "Three Rome walks give the city a practical shape: the Colosseum, Forum valley and Capitoline hill form one archaeological landscape, while their ticketed sites and museum have distinct entrances. At the Vatican, the Museums, St Peter’s Basilica and dome follow separate visitor arrangements. In the historic centre, the Pantheon, Navona and Ghetto make compact walking routes; a Trastevere finish adds a Tiber crossing. Start with the booking that matters most, then see whether time and energy allow a second nearby stop.",
    stay: "Four to six nights gives these three walks room, especially if arrival or departure uses part of a day. Monti and the Celio are practical for an early Colosseum start; Prati shortens the morning approach to the Vatican Museums; Centro Storico keeps the Pantheon and Navona on foot. Trastevere suits evenings on that bank but adds a river crossing to most other days. Compare the hotel’s walk to the specific entrance you have booked, not just the district name.",
    transfer: "From Fiumicino, the Leonardo Express runs directly to Termini; Trenitalia’s regional FL1 serves stations including Ostiense and Tiburtina. Choose the station that fits your hotel rather than assuming every airport train ends at Termini. Ciampino uses a separate airport-to-city connection. In town, Colosseo, Ottaviano and Cipro serve different sides of the archaeological and Vatican visits; the Pantheon and Piazza Navona have no adjacent metro station. Check the current ATAC route and the final walk with your luggage.",
    season: "The Forum, Palatine and Campidoglio involve long stretches outdoors, uneven surfaces and little shelter. In hot weather, put that walk early and plan an indoor stop or a long meal before the afternoon heat; in rain, keep a museum option near the same area. Check Rome’s event notices before crossing central streets around major religious or civic gatherings, and check site closure notices on the day.",
    fallback: "If your Colosseum-area entry changes, the Capitoline Museums and Piazza del Campidoglio still make a coherent visit: approach by the Cordonata, use the museum route for the Tabularium gallery and Forum view, then finish on the hill. If Vatican access changes, keep the day in Prati and use Castel Sant’Angelo only if its own admission is available. For a wet historic-centre day, choose one open civic museum near your planned walk instead of crossing town for another reservation.",
    reviewDate: "4 October 2026",
    reviewIsoDate: "2026-10-04",
    faq: [
      ["How many nights should I plan for Rome?", "Four to six nights gives a first visit room for these walks, meals and a recovery block. Colosseum and Forum-Palatine access can be linked by some ticket products, so check what your booking includes and budget most of a day if you want to explore both. A late arrival or early flight can remove one usable day."],
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
        routeTitle: 'Four stages through the Capitoline',
        routeLead: 'Read the Forum from two elevations: its archaeological valley, the redesigned Capitoline summit, and the Tabularium looking back across the ruins.',
        routeLabels: ['Arrive', 'Cross the threshold', 'Use the layer', 'Read the Forum from the Tabularium'],
        layout: 'forum-gate-time-score',
        structure: 'booked-door-score',
        imageQuery: 'Roman Forum Colosseum Capitoline Rome panorama',
        imageAlt: "Roman Forum seen through the Arch of Septimius Severus",
        purpose: "Follow the Forum from the Arch of Titus toward the Capitoline, then see how Michelangelo’s Piazza del Campidoglio reshaped the summit. A ticket may link a Colosseum visit with the Forum and Palatine; decide how much of the ancient landscape and museum fits the time you have.",
        summary: "The Forum occupies the hollow below the Capitoline, with the Palatine rising along its other side and the Colosseum close by. Some current ticket products link Colosseum entry with Forum-Palatine access; check the exact route and allow most of a day if you want time to look closely.",
        choices: [
          ["Colosseum first", "Make the ticketed Colosseum visit the day’s fixed point. Read its current product description to see whether and when it also permits Forum and Palatine access; products, entrances and visit limits differ. Keep the Capitoline collection for another day if the booked route already fills the available time."],
          ["Forum and Palatine on foot", "Choose an official ticket whose current terms include the route you want, then follow its named entrance and the on-site direction. The long open-air walk links the low Forum with the rising Palatine. A Colosseum interior or museum visit can be added when the relevant entry is available and your time and energy allow."],
          ["Capitoline Museums and hill", "Start at the Cordonata and Piazza del Campidoglio, then use the museum’s Tabularium corridor to look back across the Forum. The hill and museum make a more weather-resilient starting point. If your ticket, remaining time and energy allow, extend the visit with part of the archaeological route after checking its current entry and access terms."]
        ],
        access: "The Colosseo Metro stop is useful for the Colosseum side, but it does not tell you which archaeological entrance your ticket uses. Check the ticket’s exact site, time, named gate, identity rules and current access map before choosing a station exit. The Capitoline approach is uphill by the Cordonata; the Forum floor and Palatine paths are uneven.",
        tradeoff: "A linked Colosseum and Forum-Palatine ticket can make one coherent archaeological day, but the route is long, exposed and rich in detail. Keep the Capitoline Museums as a possible extension only if the ticket, opening hours, energy and exit point leave room for them.",
        stages: [
          ["Read the booking details", "Open the official ticket before leaving the hotel. Save the named entrance, entry time, included areas and exit or route instructions; “Colosseum” on a map is not a gate assignment."],
          ["Stay with one archaeological route", "Once inside, follow the direction shown for your ticket. Notice how the Forum lies in the hollow beneath the Capitoline while the Palatine rises on its other side; do not reverse a long traverse to collect a second viewpoint."],
          ["Climb to Piazza del Campidoglio", "The ancient Capitolium and Arx stood on separate heights divided by a valley; today’s square sits about eight metres above that old valley floor. Musei Capitolini describes Michelangelo’s buildings, sculpture and patterned paving as one planned composition."],
          ["The archive corridor above the Forum", "The Capitoline Museums’ Tabularium was completed under Quintus Lutatius Catulus in 78 BCE for Rome’s public records. Its surviving vaulted corridor remains part of the museum and looks out at the Forum from the hill’s side. Check the current museum route before relying on it."]
        ],
        whatToSee: [
          [
            "ROMAN FORUM",
            "Arch of Titus",
            "Reliefs inside the arch show Roman soldiers carrying spoils from Jerusalem’s Temple, including a menorah. The monument turns imperial victory into a carved scene whose objects still identify the conquered city."
          ],
          [
            "ROMAN FORUM",
            "Curia Julia",
            "Julius Caesar began this Senate house after fire damaged the earlier Curia in 52 BCE; Augustus completed it in 29 BCE. Its compact footprint helps locate political assembly among the Forum’s temples and ceremonial monuments."
          ],
          [
            "ROMAN FORUM",
            "Arch of Augustus",
            "Only low paving and foundation traces remain between the Temples of Castor and Pollux and Caesar. The arch marked the recovery of standards lost by Crassus to Parthia, making a slight change in ground level carry a large Augustan claim."
          ],
          [
            "PALATINE",
            "House of Augustus",
            "Octavian chose the Palatine for his residence, and imperial palaces later spread across the hill. In the surviving painted rooms, look for intimate decoration and domestic scale beside the monumental public image of the emperor."
          ],
          [
            "COLOSSEUM",
            "Arena and underground",
            "The arena floor sat above service spaces now included with some ticket types. From the seating bowl, read the crowd’s view toward the central arena; if your ticket includes underground access, compare that public spectacle with the working spaces below."
          ]
        ],
        fallback: "If the booked archaeological entry is cancelled or moved, make the Capitoline hill the whole visit: climb the Cordonata, compare the modern square with the two ancient heights, and use the museum and Tabularium only if that route is open. Keep any replacement ticket separate until the official operator confirms it.",
        watch: [
          ["A nearby station may serve the wrong gate", "The official Colosseum ticket names the entrance and included area. Follow that booking’s map rather than choosing the nearest metro stop first."],
          ["The route is exposed and uneven", "Forum and Palatine paths include changes in level and irregular paving. In high heat or wet weather, shorten the open-air route and confirm any access needs with the official site."],
          ["Museum access is separate", "The Tabularium corridor is inside the Capitoline Museums. A Colosseum-area ticket does not by itself establish museum admission or opening."]
        ],
        duration: "Allow most of a day for a linked Colosseum and Forum-Palatine visit if you want time to pause at the monuments and understand the terrain. Add the Capitoline Museums only when their current last-entry time, your energy and the route out leave a realistic visit; a hill-and-museum day also works well by itself.",
        combine: "A Capitoline finish can lead to a nearby meal in the Ghetto or Monti, depending on your exit. Colosseum and Forum-Palatine access may fit the same day on a linked ticket; leave the Vatican or Borghese Gallery for another day if your schedule includes more than one booked interior.",
        verify: "Before departure, check the exact official Colosseum ticket and gate, archaeological-area access notice, Capitoline route and accessibility information, and current ATAC service. Do not rely on a map pin to resolve the entrance.",
        reviewDate: "5 October 2026",
        reviewIsoDate: "2026-10-05",
        publishedIsoDate: "2026-10-04",
        faq: [["What was the Tabularium?","Completed under Quintus Lutatius Catulus in 78 BCE, it held the bronze records of Roman laws and state acts. The remaining vaulted corridor is now within the Capitoline Museums, where its openings face the Forum."],["Why is Piazza del Campidoglio above the Forum?","The Capitoline originally had two high points, the Capitolium and the Arx, separated by a deep valley. The present square occupies that gap and stands about eight metres above the original valley floor."],["Can I visit the Colosseum and Forum on one day?","Some official ticket products link Colosseum entry with Forum and Palatine access, while others have different inclusions and visit conditions. Check the exact ticket and allow most of a day for the combined archaeological visit."]],
        sources: [
          ["https://colosseo.it/en/visit/", "Parco archeologico del Colosseo — current official visit and ticket information"],
          ["https://www.museicapitolini.org/en/sede/campidoglio_antico", "Musei Capitolini — the ancient Capitoline topography"],
          ["https://www.museicapitolini.org/en/sede/piazza_e_palazzi", "Musei Capitolini — Piazza del Campidoglio and Michelangelo’s design"],
          ["https://www.museicapitolini.org/en/sede/campidoglio_antico/tabularium", "Musei Capitolini — Tabularium history and surviving gallery"],
          ["https://www.museicapitolini.org/en/informazioni_pratiche/orari_e_indirizzi", "Musei Capitolini — current visitor and access information"],
          ["https://colosseo.it/en/marvels/arch-of-titus/", "Parco archeologico del Colosseo — Arch of Titus and its reliefs"],
          ["https://colosseo.it/en/marvels/curia-iulia/", "Parco archeologico del Colosseo — Curia Julia"],
          ["https://colosseo.it/en/marvels/arch-of-augustus/", "Parco archeologico del Colosseo — Arch of Augustus"],
          ["https://colosseo.it/en/marvels/the-house-of-augustus/", "Parco archeologico del Colosseo — House of Augustus"],
          ["https://colosseo.it/en/area/the-colosseum/", "Parco archeologico del Colosseo — Colosseum and visit products"],
          ["https://www.atac.roma.it/en", "ATAC — Rome public transport information"]
        ]
      }),
      g({
        slug: 'vatican-borgo-prati',
        name: 'Vatican, Borgo & Prati',
        instrument: "Vatican, Basilica and Borgo guide",
        layout: 'holy-door-nested-threshold',
        structure: 'living-sacred-threshold',
        imageQuery: 'Saint Peters Square Vatican Basilica Rome wide',
        imageAlt: "St Peter’s Square and Via della Conciliazione viewed from the dome of St Peter’s Basilica",
        purpose: "Plan around the Vatican Museums, St Peter’s Basilica and dome, or an outdoor walk through Borgo to Castel Sant’Angelo. The Vatican and castle sit on the Tiber’s right bank; their entrances, security and booking arrangements are distinct even though a walk connects them.",
        summary: "The Vatican precinct and Castel Sant’Angelo are on the Tiber’s right bank. Borgo links them on foot; Ponte Sant’Angelo crosses from the castle toward the historic-centre bank. Treat each ticketed interior as its own visit, then connect the places that fit your day.",
        choices: [["Vatican Museums","Make the Vatican Museums the main visit and finish in Borgo or Prati. Book through the official portal and check the closure calendar for your date; the Basilica and dome can be a separate visit or a later stop if time allows."],["St Peter’s Basilica and dome","Keep the Basilica as the focus and decide whether the dome fits your time and energy. The Basilica is an active place of worship with its own security, clothing rules and access notices; museum admission does not cover that visit."],["Borgo and Castel Sant’Angelo","Start outdoors at St Peter’s Square or in Borgo and walk along the right bank to Castel Sant’Angelo. Cross Ponte Sant’Angelo only if you want to continue toward the historic centre; the castle museum has its own opening and admission."]],
        access: "The Vatican Museums visitor entrance is on Viale Vaticano; St Peter’s Basilica is approached from the square on the other side of the Vatican walls. Castel Sant’Angelo lies farther along the same Tiber bank, with Ponte Sant’Angelo providing the crossing toward Centro Storico. Match your transit stop to the address on the booking; security and admission arrangements remain separate.",
        tradeoff: "The Museums and a Basilica visit with a dome climb are both substantial experiences. Choose which deserves the longest block, then use Borgo, Prati or the riverside as a flexible finish. If you combine two interiors, leave time for separate security and any change in access.",
        stages: [["Choose the entrance before the station","Save the exact destination and official ticket: Viale Vaticano for the Museums, or the Basilica’s current visitor approach for St Peter’s. Check the booking and live access notice before travelling."],["Follow Italy through the map gallery","The Gallery of Geographical Maps was commissioned by Gregory XIII in 1581 and runs 120 metres along the Museums route. Its frescoed panels map Italy; pause to follow the peninsula before continuing through the collection."],["Pack for Basilica security","St Peter’s publishes below-knee clothing and covered-shoulder rules and currently has no cloakroom. Travel light, check its visit and worship notices, and follow staff instructions; allow time for its own security."],["Finish along the right bank","From Borgo, walk toward Castel Sant’Angelo without crossing the Tiber. Ponte Sant’Angelo is the crossing to the historic-centre bank; enter the castle only if you have checked its current admission and opening."]],
        whatToSee: [
          [
            "MUSEUMS",
            "Choose a collection thread",
            "The Vatican Museums hold more than one day’s worth of art and archaeology. Choose an anchor such as ancient sculpture, the Raphael Rooms or the Sistine Chapel, then leave time for the galleries and corridors that connect them."
          ],
          [
            "SISTINE CHAPEL",
            "Ceiling and Last Judgement",
            "Nine scenes from Genesis sit within painted architectural frames among prophets and sibyls on the ceiling. Michelangelo’s Last Judgement fills the altar wall; reading them as two projects helps explain the room’s changed direction and scale."
          ],
          [
            "ST PETER’S",
            "Look up from the crossing",
            "Michelangelo conceived the dome, which Giacomo della Porta completed after his death; mosaic decoration followed later. At the crossing, Bernini’s bronze baldachin stands beneath the dome over the papal altar, setting a vertical axis through the vast interior."
          ],
          [
            "BORGO",
            "Follow the Passetto line",
            "The fortified elevated passage runs along Borgo between the Vatican walls and Castel Sant’Angelo. Its route explains how the district connected the papal palace to the former mausoleum and why the castle belongs in the same right-bank walk."
          ]
        ],
        fallback: "If a Museum booking is unavailable, make a Borgo and river walk the main plan, adding Castel Sant’Angelo only when its own admission is available. If the Basilica changes access for worship or security, keep the day outdoors or in Prati rather than assuming a nearby church will admit visitors.",
        watch: [
          ["Museum tickets have one official online seller", "The Vatican Museums identify tickets.museivaticani.va as the only official online purchase site. Check the domain before paying and reopen its current closure calendar."],
          ["Basilica rules affect what you carry", "The Basilica lists covered shoulders and below-knee clothing and says there is no cloakroom at present. A large bag can make the visit impractical."],
          ["Dome, Basilica and Museums are separate", "Each has separate access and timing. Do not treat a Museum reservation as a Basilica entry or assume the dome queue will fit after it."]
        ],
        duration: "Reserve most of a day for the Vatican Museums and use Borgo as a flexible finish. A Basilica visit with the dome also deserves a generous block; you can pair it with the river or another stop if current access, security and your energy allow.",
        combine: "The Museums or Basilica can lead into a right-bank walk through Borgo to Castel Sant’Angelo. Cross Ponte Sant’Angelo to reach the historic centre if you have time and want a longer return; the Colosseum and Forum fit more comfortably on another day.",
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
          ["https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/museo-pio-clementino.html", "Vatican Museums — Pio-Clementino Museum"],
          ["https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/stanze-di-raffaello.html", "Vatican Museums — Raphael Rooms"],
          ["https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/cappella-sistina.html", "Vatican Museums — Sistine Chapel"],
          ["https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/cappella-sistina/volta.html", "Vatican Museums — Sistine Chapel ceiling"],
          ["https://www.basilicasanpietro.va/en/san-pietro/the-dome", "St Peter’s Basilica — dome history and decoration"],
          ["https://www.basilicasanpietro.va/en/faq/who-designed-the-baldachin-inside-st-peters-basilica", "St Peter’s Basilica — Bernini’s bronze baldachin"],
          ["https://www.turismoroma.it/en/places/passetto-di-borgo", "Turismo Roma — Passetto di Borgo"],
          ["https://www.italia.it/en/lazio/rome/castel-sant-angelo-national-museum", "Italia.it — Castel Sant’Angelo on the Tiber’s right bank"],
          ["https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/cappella-sistina/giudizio-universale.html", "Vatican Museums — Michelangelo’s Last Judgement"],
          ["https://www.atac.roma.it/en", "ATAC — Rome public transport information"]
        ]
      }),
      g({
        slug: 'historic-centre-trastevere',
        name: 'Historic Centre & Trastevere',
        instrument: "Historic centre and Tiber walking guide",
        layout: 'piazza-river-evening-circuit',
        structure: 'piazza-circuit',
        imageQuery: 'Piazza Navona Pantheon historic centre Rome evening',
        imageAlt: "Fountain in Piazza Santa Maria in Trastevere",
        purpose: "Read Rome through the Pantheon and Navona, Trevi’s aqueduct, the former Ghetto around Portico d’Ottavia, or Trastevere across the river. Each route joins monuments to the streets and later histories around them; choose a direction that fits your time and finish.",
        summary: "Central Rome is a short-block walking area with slow points: site entry, crowded fountains, churches and uneven paving. Piazza Navona follows the outline of Domitian’s stadium; the remains of the Portico d’Ottavia sit in the former Ghetto. Choose one line through these places and cross the Tiber only when Trastevere is your finish.",
        choices: [
          ["Pantheon and Navona", "Check the Pantheon’s current visit arrangement first, then walk to Piazza Navona and follow the oval outline of the Stadium of Domitian. Add one nearby civic museum if it is open; leave Trevi and Trastevere for another walk."],
          ["Trevi and the Spanish Steps", "Link Trevi with Piazza di Spagna on the eastern side. Turismo Roma identifies the fountain as the outlet of the Virgo aqueduct and dates Salvi’s design commission to 1732; let that water system guide the walk. Check current basin-access terms before planning a close visit."],
          ["Ghetto and Trastevere", "Start at Portico d’Ottavia, whose surviving corner and entrance belonged to a much larger Augustan portico. Continue toward Tiber Island, cross to Trastevere and finish near the river. The sequence gives the ancient Ghetto and evening district a shared walk without circling back to Navona."]
        ],
        access: "There is no metro station at the Pantheon or Piazza Navona. Barberini and Spagna are useful for the eastern route; for the Ghetto, check current bus service to the area and use the Tiber bridges to continue toward Trastevere. Pin the first site and the final return stop before setting out.",
        tradeoff: "Pantheon, Navona, Trevi, the former Ghetto and Trastevere can be linked on foot, but the full list becomes a long day with crowded, slow sections. Choose two or three places along one direction and leave the next area as an option for another walk.",
        stages: [
          ["Start at the site that sets your pace", "Use the Pantheon when you want a booked interior first, Trevi for the eastern fountain walk, or Portico d’Ottavia for the Ghetto route. Check entry and event notices before choosing the first stop."],
          ["Compare the Pantheon and Navona", "The Pantheon’s rebuilt Roman rotunda and Piazza Navona’s elongated stadium footprint are different kinds of surviving ancient fabric. Walk the square end to end before moving on; do not add the eastern fountains just to fill a checklist."],
          ["Keep one pause on the same side", "Choose an open museum or a meal near the route already underfoot. For the Portico d’Ottavia line, pause in the Ghetto or Trastevere; for the Pantheon line, stay around the historic centre. Recheck museum or church access before relying on it."],
          ["Cross once only if Trastevere is the finish", "From the Ghetto, use Tiber Island and a bridge to enter Trastevere, then plan the return from that bank. If your walk begins around Pantheon or Trevi, end on the Centro side instead of adding a second crossing."]
        ],
        whatToSee: [
          [
            "PANTHEON",
            "A room measured by its dome",
            "Hadrian rebuilt the present rotunda in 118–125 CE, preserving Agrippa’s inscription on the portico. Inside, the height and dome diameter are each just over 43 metres; the central oculus makes daylight part of the architecture."
          ],
          [
            "PIAZZA NAVONA",
            "A stadium held in a piazza",
            "The long oval follows the plan of Domitian’s Stadium, built in 86 CE. Bernini’s Four Rivers Fountain and its obelisk turn the centre into a Baroque stage, so read the ancient outline and later civic display together."
          ],
          [
            "TREVI",
            "Water at the end of an aqueduct",
            "The fountain marks the outlet of the Aqua Virgo aqueduct. Clement XII’s 1732 competition selected Nicola Salvi; the triumphal-arch façade and Oceanus on a shell chariot make a water system legible as theatre."
          ],
          [
            "JEWISH GHETTO",
            "Portico d’Ottavia’s many lives",
            "Augustus rebuilt the portico in 27–23 BCE and dedicated it to Octavia; the visible corner belongs to a restoration after a fire in 191 CE, carried out under Septimius Severus in 203. In later centuries the entrance vestibule became a fish market, and the remains now sit within the former Ghetto."
          ],
          [
            "TRASTEVERE",
            "Rome seen through its changing streets",
            "The Museo di Roma in Trastevere uses Ettore Roesler Franz’s watercolours to record vanished riverbanks and neighbourhood corners during Rome’s transformation into Italy’s capital. Photographs of Trastevere residents shift the view from monuments to the people who lived among them."
          ]
        ],
        fallback: "For rain or a site closure, keep to the same walk and choose one open indoor stop nearby: a civic museum around Navona, or Museo di Roma in Trastevere after the Ghetto crossing. If neither is available, shorten the outdoor route and save the next district for another day.",
        watch: [
          ["Crowds change the walking time", "Trevi and the Pantheon can slow a short map distance. Keep the next appointment on the same side of the centre and leave a way to drop one stop."],
          ["The river changes the return", "Tiber Island is a natural crossing point on the Ghetto route. A Trastevere dinner works best when the evening return also starts from that bank."],
          ["Churches remain places of worship", "The Pantheon is a basilica and local churches can limit tourist visits during services. Check current access and keep a civic museum as an alternative."]
        ],
        duration: "Treat the Pantheon–Navona or Trevi–Spanish Steps line as a half-day walk with time for an interior or meal. The Ghetto–Trastevere line works as an afternoon and evening; combine it with another nearby stop only if your pace and opening times allow.",
        combine: "Pair the Ghetto route with Tiber Island and dinner in Trastevere, or combine Pantheon and Navona with a nearby museum or meal on the Centro Storico side. The Vatican or Colosseum can be added only if your bookings and available hours make the longer day comfortable.",
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
          ["https://www.turismoroma.it/en/places/pantheon", "Turismo Roma — Pantheon architecture and history"],
          ["https://www.museodiromaintrastevere.it/en/il_museo/la_collezione", "Museo di Roma in Trastevere — collections and Roesler Franz watercolours"],
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
        imageAlt: 'Ancient Pompeii, modern Pompeii and Vesuvius in one view',
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
        imageAlt: 'Excavated buildings and courtyard inside Herculaneum',
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
    label: 'Tuscany · Florence / Pisa / Lucca',
    tagline: 'Read Florence on foot, then choose one western city—or give each its own day.',
    reviewDate: '5 October 2026',
    reviewIsoDate: '2026-10-05',
    publishedIsoDate: '2026-09-26',
    hubIntro: 'Florence concentrates its cathedral, Uffizi and civic centre in a walkable core; across the Arno, Pitti Palace and Boboli make a separate, hillier day. Pisa gathers cathedral, baptistery, bell tower and Camposanto in the Piazza del Duomo. Lucca turns its sixteenth-century walls into a tree-lined public park around a compact historic centre. Treat Pisa and Lucca as distinct day choices unless the actual trains leave time for both.',
    stay: 'Three nights in Florence can cover the historic centre, a separate Oltrarno day and, if it fits, one western rail day. Stay near Firenze Santa Maria Novella for train departures and easier luggage; choose the Duomo or Signoria side for an early timed visit and short centre walks; the Oltrarno suits Pitti and Boboli, but every return across the Arno means a bridge crossing. These are walking trade-offs, not a ranking.',
    transfer: 'Firenze Santa Maria Novella is the useful main arrival for the centre; Campo di Marte and Rifredi serve other trains but are not interchangeable with it when carrying bags. In Pisa, Centrale serves the river and central streets; San Rossore is closer to Piazza del Duomo only on trains that stop there. Lucca station is just outside the walls at Piazza Ricasoli. Check the exact Trenitalia service and the station shown on your ticket before setting a day route.',
    season: 'Summer sun makes the Dome climb, Boboli slopes and both cities’ open squares tiring; start exposed visits early, carry water and shorten the outdoor loop at midday. In rain, move toward the Uffizi, Opera del Duomo Museum or Pitti interiors and check whether Boboli has an access notice. Museum closure days, timed entries and rail changes matter more than a generic seasonal calendar.',
    fallback: 'Keep a same-city alternative: use the Opera del Duomo Museum and ground-level cathedral quarter if the Dome climb is not a fit; choose Pitti interiors when rain or heat defeats a full Boboli walk; or give Pisa or Lucca a complete day if the cross-city train plan no longer works.',
    hubCopy: {
      countryLabel: 'ITALY · TUSCANY', routeCount: 'three different day shapes',
      primaryAction: 'Choose a city day', secondaryAction: 'Choose where to stay',
      baseBoardLabel: 'MAKE THE DAYS FIT',
      baseBoardTitle: 'Stay near the departure you will use; give each day one main visit.',
      stayHeading: 'Choose the bank or station that saves time.',
      transferHeading: 'Match each station to the first stop.',
      seasonHeading: 'Plan around sun, rain and timed doors.',
      fallbackHeading: 'Keep a nearby alternative in the same city.',
      routeSectionLabel: 'THREE DIFFERENT CITY DAYS',
      routeSectionTitle: 'Florence centre, Florence across the Arno, or western Tuscany.',
      routeSectionIntro: 'Start with one of three distinct places: cathedral and art, palace gardens or hilltop archaeology, or two rail cities with different station approaches.',
      authorityLabel: 'MUSEUMS, CITY INFORMATION & RAIL'
    },
    faq: [
      ['How many days should I give Florence?', 'As a planning estimate, give Florence at least two full days: one for the cathedral and historic centre, another for a chosen museum or the Oltrarno. Add a separate day for Fiesole or for Pisa or Lucca rather than treating those places as quick stops.'],
      ['Can I visit Pisa and Lucca in one day from Florence?', 'It is possible only when the published trains give you meaningful time in each city and a protected return. Choose one main interior or timed climb, travel light and drop the second city if the service gaps shrink the visit to a platform transfer.'],
      ['Where should I stay in Florence?', 'Santa Maria Novella is practical for rail days and luggage; the Duomo or Signoria area shortens walks to the central visits; the Oltrarno is convenient for Pitti and evening walks but adds bridge crossings to the north-bank core.'],
      ['What is the best alternative in bad weather?', 'Use the Uffizi, the Opera del Duomo Museum or Pitti interiors, after checking their current opening notices. Boboli, Fiesole’s archaeological area and Pisa or Lucca’s main squares are more exposed, so keep their outdoor sections flexible.']
    ],
    sources: [
      ['https://feelflorence.it/', 'FeelFlorence — official Florence visitor information'],
      ['https://duomo.firenze.it/en/visit/plan-your-visit', 'Opera di Santa Maria del Fiore — official visit planning'],
      ['https://www.uffizi.it/en/visit', 'Uffizi Galleries — official visitor information and notices'],
      ['https://www.turismo.pisa.it/', 'Comune di Pisa — official tourism information'],
      ['https://turismo.lucca.it/en/information/how-to-get/', 'Lucca Tourism — official rail arrival and city access'],
      ['https://www.trenitalia.com/en.html', 'Trenitalia — official rail planning']
    ],
    guides: [
      g({
        slug: 'duomo-uffizi-centre',
        name: 'Duomo, Uffizi & the Renaissance Centre',
        instrument: 'Cathedral, Uffizi & civic centre', layout: 'renaissance-attention-spread', structure: 'collection-attention-spread',
        imageQuery: 'Florence Duomo Uffizi Arno panorama', imageAlt: 'Florence Cathedral dome above the Renaissance city centre',
        purpose: 'Use Brunelleschi’s Dome to understand the cathedral’s engineering, then decide whether the Uffizi collection or civic streets deserve the day’s remaining attention. The cathedral monuments and Uffizi have separate entrances and visit conditions; do not treat a pass as one queue or every included site as compulsory.',
        summary: 'The cathedral complex is a group of distinct visits. Choose a timed Dome climb or a ground-level museum and monument visit, then add the Uffizi only if the bookings leave enough attention for a real gallery visit.',
        decisionLabel: 'Choose the main visit', decisionTitle: 'A timed climb, a painting collection or the city between them.',
        decisionIntro: 'Give one interior the long block and use nearby streets to connect it to a lighter second layer.',
        choices: [
          ['Dome and cathedral engineering', 'Book the Dome’s timed entry through the Opera. Its 463-step stair passes between two masonry shells; there is no lift and large bags must go to official luggage storage. Build around that slot, not a second deep museum visit.'],
          ['Opera Museum and Baptistery', 'Keep the visit at ground level and see the original Baptistery bronze doors in the Museo dell’Opera del Duomo; the versions on the building are replicas. Add the Cathedral or another monument only after checking its access and worship notices.'],
          ['Uffizi and civic centre', 'Reserve a focused Uffizi visit, then walk to Piazza della Signoria and the Arno. The Gallery’s June 2026 notice says Botticelli’s Venus and Primavera now face one another in the reinstalled rooms; confirm current displays before making them the whole purpose of the visit.']
        ],
        access: 'Firenze Santa Maria Novella lies west of the historic core. Match the first walk and ticket to its printed entrance: the Dome climb, Opera Museum, Cathedral and Uffizi use different doors and admission rules. The Uffizi meets Piazza della Signoria and the river; a central location does not make its timed entry interchangeable with the Duomo.',
        tradeoff: 'A Dome climb, a careful Uffizi visit and an unhurried city walk compete for the same daylight and attention. Choose one major interior, then one nearby outdoor line. If both Dome and Uffizi are priorities, separate them rather than turning each into a rushed checklist.',
        stages: [
          ['Set the first timed door', 'Open the official ticket and save the exact entrance, slot and restrictions. For the Dome, plan for 463 steps, no lift and the Opera’s luggage-storage rule for large bags.'],
          ['Read one part of the cathedral complex', 'Follow the Dome’s double shell and herringbone brick from the climb, or stay at ground level with the Opera Museum and Cathedral. Check which monument your selected pass actually includes.'],
          ['Give one collection a clear thread', 'If the Uffizi is the major visit, reserve it separately and choose a few connected works. The current Botticelli-room notice offers Venus and Primavera as a paired comparison; check current notices for changes.'],
          ['Walk from Signoria to the Arno', 'Use Piazza della Signoria as the outdoor transition to the river, take a seated break, then finish near your evening plan or station instead of recrossing town to the first queue.']
        ],
        routeTitle: 'A Florence centre day: one major visit, one city walk',
        routeLead: 'Choose the cathedral quarter or Uffizi as the first commitment; let the piazzas and river connect the rest.',
        routeLabels: ['Name the entrance', 'Read the cathedral', 'Choose the collection', 'Walk to the river'],
        whatToSee: [
          ['DUOMO · MASONRY', 'Two shells, one climb', 'The Opera describes inner and outer domes linked by ribs, with the stairway to the lantern between them. Herringbone brick is part of the construction, not surface decoration. The 463-step route is an architectural cross-section as well as a viewpoint.'],
          ['BAPTISTERY · BRONZE DOORS', 'Find the originals in the museum', 'The Opera keeps the original Baptistery doors in the Museo dell’Opera del Duomo; the doors on the octagonal building are replicas. Seeing the originals indoors lets you look closely at the bronze reliefs without confusing the conservation display with the monument outside.'],
          ['UFFIZI · BOTICELLI ROOMS', 'Compare Venus with Primavera', 'In its notice dated 16 June 2026, the Uffizi says Botticelli’s Venus and Primavera are displayed facing one another after a room reinstallation. The pairing makes a specific comparison possible; check the Gallery’s current notices in case the arrangement changes.']
        ],
        fallback: 'If the Dome climb is unavailable or not appropriate, keep the day at ground level: use the Opera Museum for the original doors and construction models, then the Cathedral quarter or Piazza della Signoria. If Uffizi entry changes, choose a currently open civic or cathedral museum instead of crossing town for another queue.',
        watch: [
          ['The Dome is a physical climb', 'The official route has 463 steps, no lift and a timed slot. People who avoid stairs or enclosed spaces should choose the ground-level museum visit; do not buy the climb as a default pass feature.'],
          ['A combined ticket is not one entrance', 'The Opera and Uffizi are separate institutions. Check the named monument, slot, entry door and current display notices for every paid visit.'],
          ['Rain and heat change the outdoor finish', 'Keep the Signoria-to-Arno walk short in strong sun and take a seated interval. In heavy rain, protect the interior visit and use the exposed piazza only as a short connection.']
        ],
        duration: 'Guide estimate: allow about 6–8 hours for one major timed visit, a nearby city walk and a meal. A Dome climb plus a deep Uffizi visit is a very full day; separate them if both matter.',
        combine: 'Pair the Dome or Opera Museum with Piazza della Signoria; pair the Uffizi with a short Arno walk. Save Pitti, Boboli, Fiesole, Pisa and Lucca for other days.',
        verify: 'Check the exact Opera pass and entrance, Dome slot and bag rules, Uffizi notices and work displays, then confirm the walk from your arrival station.',
        faq: [
          ['Can I climb the Dome without a time slot?', 'No. Opera del Duomo says Dome access requires a reserved time. Its guidance lists 463 steps, no lift and luggage storage for large bags. Recheck the ticket and access conditions before buying.'],
          ['Does one ticket cover the Cathedral and Uffizi?', 'Do not assume so. Opera di Santa Maria del Fiore controls the Cathedral monuments and museum; the Uffizi Galleries run a separate museum. Check each named product, entrance and slot.'],
          ['Are Venus and Primavera still facing one another?', 'The Uffizi’s 16 June 2026 notice describes that arrangement in the reinstalled rooms. Displays can change, so check the Gallery’s current notices before visiting.']
        ],
        reviewDate: '5 October 2026', reviewIsoDate: '2026-10-05', publishedIsoDate: '2026-09-26',
        sources: [
          ['https://duomo.firenze.it/en/discover/dome', 'Opera di Santa Maria del Fiore — Dome structure, climb and access'],
          ['https://duomo.firenze.it/en/discover/baptistry', 'Opera di Santa Maria del Fiore — Baptistery and original doors'],
          ['https://duomo.firenze.it/en/visit/plan-your-visit', 'Opera di Santa Maria del Fiore — current monument passes and visit rules'],
          ['https://www.uffizi.it/en/visit', 'Uffizi Galleries — entry, notices and visitor information'],
          ['https://www.uffizi.it/en/news/the-new-permanent-installation-of-the-botticelli-rooms', 'Uffizi Galleries — Botticelli-room notice, 16 June 2026']
        ]

      }),
      g({
        slug: 'oltrarno-pitti-fiesole',
        name: 'Oltrarno, Pitti & Fiesole', instrument: 'Pitti, Oltrarno or Fiesole', layout: 'arno-hill-section', structure: 'hill-town-section',
        imageQuery: 'Florence Oltrarno Pitti Boboli panorama', imageAlt: 'Florence viewed across the Arno toward the Oltrarno hills',
        purpose: 'Choose a north-bank crossing into Pitti and Boboli, a compact Oltrarno street day, or a separate bus trip to Fiesole. These are three different visits: palace and garden, neighborhood and church, or Etruscan and Roman archaeology above Florence.',
        summary: 'Pitti, Boboli and Fiesole all add slopes or a bus journey. Choose one day shape: palace and garden across the Arno, streets around Santo Spirito, or Fiesole’s archaeological area and Roman theatre.',
        decisionLabel: 'Choose a side of Florence', decisionTitle: 'Palace and garden, Oltrarno streets, or Fiesole archaeology.',
        decisionIntro: 'Do not stack the Boboli slopes and Fiesole hill on the same day; their bridge and bus returns work better as separate outings.',
        choices: [
          ['Pitti Palace and Boboli', 'Enter Pitti for its indoor collections, then decide whether the garden’s terraces, grottoes and fountains suit the weather and your walking energy. The Uffizi describes Boboli as predominantly sloping clay and gravel; its guidance recommends carrying water in hot weather.'],
          ['Santo Spirito and the Oltrarno', 'Cross once and keep the day on the south bank: use Piazza Santo Spirito and its basilica as anchors, then choose a short lane-and-river walk. Working studios are businesses, not guaranteed open-house stops; check access locally and leave room for a meal.'],
          ['Fiesole archaeological area', 'Take the current bus connection to Piazza Mino and visit the archaeological area as a real half-day: Etruscan-Roman temple phases, Roman theatre, baths and Archaeological Museum share one site. Check the Comune’s hours and the bus return before leaving Florence.']
        ],
        access: 'For Pitti, cross the Arno toward Piazza de’ Pitti; choose Ponte Vecchio or Ponte Santa Trinita according to your starting side. For Fiesole, the Comune’s visitor directions list bus 7 from Firenze Santa Maria Novella to Piazza Mino; check Autolinee Toscane for the current stop, service and return. The two routes do not share a useful last mile.',
        tradeoff: 'Pitti and Boboli reward a slow visit but combine indoor galleries with extensive uneven, sloping paths. Fiesole trades the street grid for an archaeological area reached by bus. Choosing one keeps the return manageable and leaves the other for a separate day.',
        stages: [
          ['Choose bridge or bus', 'For Pitti, cross from the north bank toward Piazza de’ Pitti. For Fiesole, check the current bus 7 departure from the SMN area and the return from Piazza Mino before boarding.'],
          ['Give one collection or site the long block', 'Start with Pitti’s current indoor galleries, or with Fiesole’s Archaeological Museum and the remains around it. Confirm opening notices and admission before setting out.'],
          ['Add only the outdoor layer that fits', 'Walk a selected part of Boboli with its official map, water and slope conditions in mind, or continue through the Fiesole theatre, temple and baths. Shorten the outdoor route in heat or rain.'],
          ['Return by the useful corridor', 'Leave Boboli by the entrance nearest your next stop or return to the chosen bridge. From Fiesole, verify the live bus back to Florence instead of assuming the outbound frequency continues.']
        ],
        routeTitle: 'Across the Arno or up to Fiesole', routeLead: 'Choose the day’s elevation before leaving central Florence; each branch has a different return.',
        routeLabels: ['Choose bridge or bus', 'Start indoors or at the site', 'Walk the hill selectively', 'Protect the return'],
        whatToSee: [
          ['PITTI · COURT COLLECTIONS', 'Read the palace as a residence', 'Pitti is not a single gallery. The Uffizi groups several collections in the palace; check current room and closure notices and choose one section to follow rather than trying to see every interior before crossing into the garden.'],
          ['BOBOLI · LANDSCAPE', 'A court garden that became a public park', 'The Uffizi traces the regular layout to the Medici and describes it as a model for European courts. Buontalenti’s grotto, the Amphitheatre and later terraces make the garden an outdoor museum, but clay-and-gravel paths slope across much of the site.'],
          ['FIESOLE · ARCHAEOLOGICAL AREA', 'Look for the layers under the hill town', 'The Comune’s site includes an Etruscan-Roman temple rebuilt across several periods, a Roman theatre, baths and an archaeological museum. Its collection follows Etruscan, Roman and Longobard evidence from the territory; this is a distinct history, not just a viewpoint over Florence.']
        ],
        fallback: 'In heavy rain, keep the day indoors at Pitti or choose a Florence museum after checking openings; Boboli and Fiesole’s ruins are exposed. In strong heat, carry water and shorten the sloping garden or archaeological walk. If Fiesole bus service is disrupted, stay in the Oltrarno rather than replacing it with a distant hill.',
        watch: [
          ['Boboli is not a flat park loop', 'The Uffizi describes clay and gravel surfaces, slopes and climbs across most of the garden. Its accessibility page notes that visitors who need the accessible entrance require an accompanying person; check the current map and support before planning.'],
          ['Fiesole requires a live bus check', 'The Comune lists bus 7 to Piazza Mino from the SMN area and directs visitors from that stop to the museums. Use Autolinee Toscane’s current timetable and service notices for your date.'],
          ['Weather affects both hills', 'Boboli may restrict access during weather emergencies; Fiesole’s outdoor remains offer less shelter than its museum. Put the indoor visit first when rain is likely and shorten slopes during hot hours.']
        ],
        duration: 'Guide estimates: allow about 4–6 hours for Pitti and a selected Boboli route, 3–5 hours for an Oltrarno street-and-church walk, or about 4–5 hours for Fiesole including the bus journey. Check current entry and service times; these are not venue guarantees.',
        combine: 'Pair Pitti with a short Oltrarno meal or river walk. Keep Fiesole separate from a full Pitti/Boboli visit and from a deep Uffizi day.',
        verify: 'Check Pitti and Boboli openings, garden conditions and accessible-route information; for Fiesole check the Comune’s archaeological-area hours and Autolinee Toscane service to and from Piazza Mino.',
        faq: [
          ['Is Fiesole a quick add-on from Florence?', 'Treat it as a separate outing. The Comune lists bus 7 from the SMN area to Piazza Mino, followed by the museum entrance near Via Dupré. The archaeological area has a theatre, temple remains, baths and museum; check the return service.'],
          ['Can I comfortably walk all of Boboli?', 'It is a sizeable garden with clay and gravel surfaces and extensive slopes. Choose a section from the official map, carry water in hot weather and check access support if you need an accessible route.'],
          ['What should I do in rain or heat?', 'Use Pitti’s indoor collections as a wet-weather anchor after checking current rooms and hours. In heat, carry water, shorten Boboli or Fiesole’s exposed remains and put the indoor visit first.'],
        ],
        reviewDate: '5 October 2026', reviewIsoDate: '2026-10-05', publishedIsoDate: '2026-09-26',
        sources: [
          ['https://www.uffizi.it/en/pitti-palace', 'Uffizi Galleries — Pitti Palace collections and visitor information'],
          ['https://www.uffizi.it/en/boboli-garden', 'Uffizi Galleries — Boboli history, map, slopes and accessibility'],
          ['https://www.comune.fiesole.fi.it/vivere-il-comune/luoghi/musei-di-fiesole', 'Comune di Fiesole — archaeological area, museum and bus directions'],
          ['https://www.at-bus.it/en', 'Autolinee Toscane — current regional bus service and timetable'],
          ['https://feelflorence.it/', 'FeelFlorence — official Florence visitor information']
        ]

      }),
      g({
        slug: 'pisa-lucca-rail-pair',
        name: 'Pisa or Lucca by Rail', instrument: 'Pisa or Lucca by train', layout: 'western-tuscany-rail-hinge', structure: 'rail-to-street-braid',
        imageQuery: 'Lucca walls Tuscany city panorama Pisa tower', imageAlt: 'Lucca’s historic walls and Tuscan city landscape',
        purpose: 'Choose one western-city day around its strongest route: Pisa’s cathedral precinct or Lucca’s rampart park and street grid. Add the second city only if the current train schedule leaves time for a visit rather than a station-to-station checklist.',
        summary: 'Pisa is a concentrated cathedral square; Lucca is a walkable walled city. Choose the useful station, reserve the Tower only if you want the climb, and treat the other city as a second day unless the trains make a long pair worthwhile.',
        decisionLabel: 'Choose the city first', decisionTitle: 'Pisa for the cathedral square; Lucca for the wall walk.',
        decisionIntro: 'Pick one city as the anchor, then check the train gap and return before adding a second.',
        choices: [
          ['Pisa and Piazza del Duomo', 'From a train that actually stops at Pisa San Rossore, the station is nearer the cathedral square; Pisa Centrale is more useful for the river and central streets. The square holds Cathedral, Baptistery, Campanile and Camposanto. Book the Tower only if its timed slot and 251-step climb suit the day.'],
          ['Lucca and the city walls', 'From Lucca station at Piazza Ricasoli, walk from just outside the walls into the historic centre. Use the ramparts as a 4-kilometre-plus tree-lined public park, then descend for one church, piazza or meal. A full circuit is the main outing, not a short station layover.'],
          ['A limited two-city rail day', 'Keep one city’s main interior or the Tower as the anchor and give the second a short, preselected walk. This is a long day with train gaps and station approaches; keep the pairing only if published services leave useful time in both cities and a protected Florence return.']
        ],
        access: 'Check the actual stop on each train: Pisa San Rossore approaches Piazza del Duomo, while Pisa Centrale serves the river and central streets. Lucca station is at Piazza Ricasoli just outside the walls, a short walk from the historic centre. Match the ticket and first route before leaving Florence; the two Pisa stations are not interchangeable.',
        tradeoff: 'Pisa concentrates four major monuments in one square; Lucca spreads a visit between its wall park and streets. Seeing both in a day saves a hotel move but costs time to explore either one. A full day in one city usually leaves room for a museum, a proper meal and a slower walk.',
        stages: [
          ['Read the train stops', 'Use the date-specific Trenitalia service: choose Pisa San Rossore only when your train stops there, Pisa Centrale for its river and centre, or Lucca for Piazza Ricasoli. Save the return before booking a timed monument.'],
          ['Give one city the long block', 'In Pisa, walk the Piazza del Duomo ensemble and take the Tower only with a booked slot. In Lucca, enter from Piazza Ricasoli and start with either the wall promenade or the street centre, not both as a race.'],
          ['Choose the second layer', 'Stay in Pisa for the Arno-side streets or a museum; in Lucca, descend from the ramparts for a church or piazza. Add the other city only when the real service gap still leaves a meaningful visit.'],
          ['Leave from the station you planned', 'Walk back to the named station with time for the return train. In a two-city day, cut the second stop if its transfer would put the Florence connection or reserved entry at risk.']
        ],
        routeTitle: 'One station, one complete city, then decide', routeLead: 'Choose Pisa or Lucca as the anchor before leaving Florence; build any second stop around the live train board.',
        routeLabels: ['Check the train stops', 'Walk the main site', 'Add a nearby layer', 'Protect the return'],
        whatToSee: [
          ['PISA · PIAZZA DEL DUOMO', 'Look beyond the leaning tower', 'The Opera della Primaziale describes a four-monument square: Cathedral, Baptistery, Campanile and Camposanto. Their scale and placement make the visit a medieval religious ensemble, not just a queue for a tower photograph. Select the interior or climb you actually want.'],
          ['PISA · CAMPANILE', 'A timed visit with a steep stair', 'The Opera’s accessibility information describes the Tower visit as about 30 minutes and 251 steps, with access restrictions. Check current admission and slot availability; the square and its other monuments remain an option if the climb does not fit.'],
          ['LUCCA · CITY WALLS', 'A defensive ring turned into a public park', 'Lucca Tourism dates the walls’ construction to 1504–1645 and describes a continuous, tree-lined path over four kilometres long. Their nineteenth-century conversion into a public promenade is the point of the walk: military embankment, shade and everyday city life share one circuit.']
        ],
        fallback: 'If the train pair is awkward or disrupted, choose one city and complete its main visit. Stay in Pisa for the river and central streets, or in Lucca for the walls and historic centre. In hot weather shorten the exposed square or wall circuit; in rain use indoor museums or churches after checking current openings.',
        watch: [
          ['Pisa has two useful but different stations', 'San Rossore is close to the cathedral precinct only on trains that call there. Centrale is not a failed arrival; it serves a different walk. Check the date-specific stop and return on Trenitalia.'],
          ['The Tower uses a timed climb', 'The Opera describes about 30 minutes and 251 steps, with access restrictions. Confirm the official slot and current conditions; do not build a rail pair around an unconfirmed climb.'],
          ['Lucca’s wall circuit is over four kilometres', 'The ramparts are a substantial walk. Choose a shorter section or another city layer if heat, rain or mobility makes the full ring unsuitable.']
        ],
        duration: 'Guide estimates: allow about 4–6 hours for one city’s main visit and a meal; a full Lucca wall circuit adds a substantial walk. A Pisa–Lucca pair can take most of a long day once trains, station walks and a timed Tower visit are counted; verify the schedule rather than relying on a fixed duration.',
        combine: 'In Pisa, add the Arno-side centre to Piazza del Duomo. In Lucca, combine the walls with one church or piazza. Join both cities only when current rail times leave a real visit in each.',
        verify: 'Check Trenitalia’s date-specific stops and return, the Opera’s Pisa monument slots and access restrictions, and Lucca’s current arrival and wall information.',
        faq: [
          ['Which Pisa station should I use?', 'San Rossore is close to Piazza del Duomo when your chosen train stops there. Centrale serves the river and central streets. Check the actual calling pattern and return; the stations serve different walks.'],
          ['How long is the Leaning Tower visit?', 'The Opera della Primaziale lists about 30 minutes and 251 steps for the Tower visit, with access restrictions. Treat that as the climb itself, not a full square visit, and check the current timed admission.'],
          ['Can I visit both cities in one day?', 'Only if date-specific trains leave time for a meaningful visit in each city and a protected Florence return. Choose one main interior or Tower climb and drop the second city if the train gap is too short.']
        ],
        reviewDate: '5 October 2026', reviewIsoDate: '2026-10-05', publishedIsoDate: '2026-09-26',
        sources: [
          ['https://www.opapisa.it/en/', 'Opera della Primaziale Pisana — official monument visits and tickets'],
          ['https://www.opapisa.it/en/informations/accessibility-2/', 'Opera della Primaziale Pisana — Tower duration, steps and access'],
          ['https://www.turismo.pisa.it/', 'Comune di Pisa — official city visitor information'],
          ['https://turismo.lucca.it/en/information/how-to-get/', 'Lucca Tourism — station and historic-centre arrival'],
          ['https://turismo.lucca.it/en/the-Lucca-walls/city-%E2%80%8B%E2%80%8Bwalls-park/', 'Lucca Tourism — walls history and public promenade'],
          ['https://www.trenitalia.com/en.html', 'Trenitalia — date-specific official rail planning']
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
        imageAlt: 'Medieval palaces surrounding Siena’s Piazza del Campo',
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
