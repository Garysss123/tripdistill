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
    label: 'Campania · Naples and the Vesuvian sites',
    tagline: 'Give Naples, Pompeii, Herculaneum and Vesuvius their own clear place in the trip.',
    hubIntro: 'Naples is a living city with Greek, Roman, Bourbon and modern layers. Pompeii preserves a broad commercial town; Herculaneum offers a smaller residential grid with unusually rich organic remains; Vesuvius is a separate park and access decision. Treat them as connected histories with different entrances, transport and days.',
    stay: 'Three nights can support Naples plus one archaeological day; four nights leave room for both Pompeii and Herculaneum without making the crater a rushed add-on. Centrale and Garibaldi are practical for regional rail, the old centre rewards evenings on foot, and the waterfront suits a different city rhythm. Compare the hotel’s actual walk to the rail station and entrance you will use.',
    transfer: 'Pompeii’s park maps Porta Marina and Piazza Esedra to EAV’s Pompei Villa dei Misteri stop, and Piazza Anfiteatro to Pompei Santuario on the Napoli–Poggiomarino line. Trenitalia’s Pompei station is a different arrival. Ercolano Scavi is the Circumvesuviana stop for Herculaneum; the crater needs a separate, currently authorized transport and park-entry plan.',
    season: 'Pompeii is a large open-air site and the crater route is exposed; heat and wind change effort, while weather or safety controls can suspend mountain access. Park maps, opening lists, museum collection plans and rail services can change. Keep a complete Naples or MANN day available when a site route changes.',
    fallback: 'If Vesuvius access is suspended, use Herculaneum only if its entrance and return are working, or stay in Naples for the MANN and one nearby old-centre line. At Pompeii, choose from buildings and routes the Park confirms open that day; do not cross the excavation to chase a closed house.',
    reviewDate: '5 October 2026',
    reviewIsoDate: '2026-10-05',
    sources: [
      ['https://whc.unesco.org/en/list/726/', 'UNESCO World Heritage Centre · Historic Centre of Naples'],
      ['https://www.museoarcheologiconapoli.it/storia-del-museo/', 'MANN · museum history and the Vesuvian collections'],
      ['https://pompeiisites.org/en/visiting-info/how-to-get-there/', 'Pompeii Archaeological Park · named gates and rail approaches'],
      ['https://pompeiisites.org/en/visiting-info/timetables-and-tickets/', 'Pompeii Archaeological Park · current tickets and entry rules'],
      ['https://ercolano.cultura.gov.it/come-arrivare/', 'Herculaneum Archaeological Park · official directions'],
      ['https://orariotreni.eavsrl.it/', 'EAV · official live train timetables'],
      ['https://www.parconazionaledelvesuvio.it/en/visit-the-park/', 'Vesuvius National Park · paths and Gran Cono access']
    ],
    guides: [
      g({
        slug: 'naples-centre-mann-waterfront',
        name: 'Naples Centre, MANN & the Waterfront',
        instrument: 'Farnese-to-decumani day plan',
        layout: 'decumanus-daypart-ledger',
        structure: 'market-daypart-table',
        imageQuery: 'Naples historic centre Spaccanapoli street panorama',
        imageAlt: 'The dense historic centre of Naples beneath Vesuvius',
        purpose: 'Use the MANN to read how Naples collected the ancient past, then decide whether the day belongs to the historic centre or a westward civic walk to the bay. The museum, old streets and waterfront are related layers but are not one compact checklist.',
        summary: 'Choose one MANN collection block or a continuous historic-centre route, then add a nearby street walk. Save Toledo, Piazza del Plebiscito and the waterfront for a separate westward line rather than crossing the city twice.',
        choices: [
          ['MANN and a short old-centre line', 'The museum joins two histories: the Farnese collection brought to Naples under the Bourbons and objects recovered from Pompeii, Herculaneum and Campania. Pick one collection thread, then walk only as far into the historic centre as the return allows.'],
          ['Decumani and the historic centre', 'Follow one east–west street spine from Piazza Bellini toward Via dei Tribunali, with one chosen church, courtyard or food stop. UNESCO describes Naples as a city carrying successive Mediterranean and European cultures; let the changing street fabric be the subject instead of collecting interiors.'],
          ['Toledo and the western civic axis', 'Keep the visit west: connect the Toledo area, Galleria Umberto I, Piazza del Plebiscito and a short seafront finish if energy and current access allow. This is a different day shape from the MANN and decumani route.']
        ],
        access: 'Museo and Dante stations serve different edges of the old centre; Toledo and Municipio serve the western civic line. Check ANM’s current map and service before setting the first stop. Regional EAV trains use separate platforms at Garibaldi and do not leave from the metro entrance marked Centrale.',
        tradeoff: 'A focused MANN visit can absorb the attention needed for the old centre. A historic-street day gives up a long gallery block; a westward walk trades archaeological context for civic architecture and the bay. Choose one main direction, then leave a real meal and a straightforward return.',
        routeTitle: 'A Naples day: one collection or one city spine',
        routeLead: 'Begin with the museum if its collection plan fits your interests; otherwise follow one unbroken street direction through the historic centre.',
        routeLabels: ['Choose the collection', 'Read the old centre', 'Take one cross-street', 'Finish on the planned side of town'],
        stages: [
          ['Check the collection plan', 'MANN publishes a live opening plan because sections can rotate or close. As reviewed on 5 October 2026, its plan listed the Mosaics and Secret Cabinet galleries as closed through 30 November 2026; check again before making either a reason to visit.'],
          ['Read the museum as a meeting of collections', 'Carlo di Borbone promoted the Vesuvian excavations and began the Farnese museum collection; Ferdinand IV brought the Farnese and Vesuvian collections together in the present museum. Start with one open section rather than trying to cover the whole building.'],
          ['Choose one old-centre street line', 'From Piazza Bellini, continue along Via dei Tribunali or choose a single nearby interior. Keep the route moving toward your meal or hotel instead of returning to the museum end of the street.'],
          ['Make the westward walk a separate choice', 'If Toledo and the waterfront are the priority, use that district as the day’s centre of gravity and finish near the planned metro, ferry or dinner. Do not append it automatically to a full museum-and-decumani day.']
        ],
        whatToSee: [
          ['MANN · TWO HISTORIES IN ONE MUSEUM', 'Farnese and Vesuvian collections', 'The museum’s official history links Carlo di Borbone’s excavations at Herculaneum and Pompeii with the Farnese collection inherited from Elisabetta Farnese. Ferdinand IV later brought the two groups together in the present building. Read a sculpture’s collecting history separately from the place where a wall painting or household object was found.'],
          ['FARNESE GALLERY · RENAISSANCE COLLECTING', 'Hercules and the Farnese Bull', 'The MANN identifies the Farnese Hercules and Farnese Bull among sculptures recovered from the Baths of Caracalla excavations that began in 1545. Their route to Naples passes through Renaissance Roman collecting and Bourbon inheritance, not the eruption that buried Pompeii.'],
          ['MOSAICS · A HOUSE REMEMBERED AT MANN', 'The House of the Faun’s Alexander mosaic', 'When the gallery is open, place the Alexander-and-Darius mosaic in its original setting: the MANN identifies it as the floor of the House of the Faun’s exedra, a large reception room. The museum dates the mosaic to the late second century BCE and describes it as made from more than a million tesserae. Check the current opening plan before planning around it.']
        ],
        fallback: 'If MANN’s collections plan or a booked interior changes, keep a short Piazza Bellini–Via dei Tribunali walk and a meal in the same quarter. For rain, choose an open museum section; for heat, shorten the street line instead of crossing to the waterfront.',
        watch: [
          ['A museum collection can rotate', 'Reopen MANN’s collection-opening plan on the travel date. The Mosaic gallery had a dated closure notice through 30 November 2026 at this review; later plans may differ.'],
          ['Old-centre interiors have separate doors', 'Churches, underground sites and museums set their own access and ticket rules. Verify the named venue before building the route around it.'],
          ['Naples changes elevation', 'A waterfront finish and a hill-street finish use different effort and transit. Decide where the walk ends before adding a viewpoint.']
        ],
        duration: 'Editorial estimate: allow five to seven hours for one MANN collection block, a nearby old-centre walk and a meal. A full western civic-and-waterfront route works better as its own day.',
        combine: 'Pair the MANN with Piazza Bellini or one section of Via dei Tribunali. Pair Toledo with the western civic axis. Keep Pompeii, Herculaneum and Vesuvius for separate days.',
        verify: 'Check MANN’s current collection plan and ticket information, ANM’s map and service, any timed underground entry, and the return from your final neighbourhood.',
        reviewDate: '5 October 2026',
        reviewIsoDate: '2026-10-05',
        sources: [
          ['https://www.museoarcheologiconapoli.it/storia-del-museo/', 'MANN · museum history and collection formation'],
          ['https://www.museoarcheologiconapoli.it/portfolio-item/farnese/', 'MANN · Farnese collection and named sculptures'],
          ['https://www.museoarcheologiconapoli.it/portfolio-item/mosaici/', 'MANN · mosaic collection and House of the Faun'],
          ['https://www.museoarcheologiconapoli.it/piano-di-apertura-collezioni/', 'MANN · live collection-opening plan'],
          ['https://www.museoarcheologiconapoli.it/orari-e-biglietti/', 'MANN · official visitor information'],
          ['https://www.anm.it/s/biglietti-e-abbonamenti?language=en_US', 'ANM Napoli · tickets and official network information'],
          ['https://whc.unesco.org/en/list/726/', 'UNESCO World Heritage Centre · Historic Centre of Naples']
        ],
        faq: [
          ['Is the Alexander mosaic always on view at MANN?', 'No. MANN’s current collection-opening plan lists which sections are available; the mosaic gallery had a closure notice through 30 November 2026 at this review. Check the live plan before your visit.'],
          ['What makes the MANN useful before Pompeii?', 'The museum brings together the Farnese collection and material from Vesuvian excavations, so you can compare the history of collecting with objects found in the ancient towns. Choose one open collection section rather than trying to see everything.'],
          ['Can I fit the old centre and waterfront into the same walk?', 'They are different city directions. Choose the historic centre or Toledo-to-waterfront as the main route, and keep the other for another block or day.']
        ]
      }),
      g({
        slug: 'pompeii-city-route',
        name: 'Pompeii Archaeological City',
        instrument: 'Gate-to-rail route map',
        layout: 'buried-city-datum-traverse',
        structure: 'excavation-traverse',
        imageQuery: 'Pompeii forum Vesuvius archaeological site wide',
        imageAlt: 'Ancient Pompeii, modern Pompeii and Vesuvius in one view',
        purpose: 'Read Pompeii as a commercial city with public, domestic and political evidence, then choose the entrance and rail stop that match one continuous route. Its scale and changing open-house list reward a firm theme more than a monument checklist.',
        summary: 'Choose a civic route, a domestic-street route or the accessible itinerary; match the official entrance to the correct station and leave through a gate that still fits your ticket and return train.',
        choices: [
          ['Civic Pompeii', 'Use the Forum and its surrounding public buildings to understand how religion, law and exchange occupied one central square. The Park’s official themed visit is a useful core; extend it only with a building confirmed open.'],
          ['Domestic Pompeii', 'Follow one house-and-street sequence. UNESCO highlights the House of the Faun as a large representative residence; MANN preserves its Alexander mosaic and other floor decoration. Check the Park’s current opening list before treating any house as guaranteed access.'],
          ['Pompeii for All', 'For a lower-barrier route, check the official accessible itinerary from Piazza Anfiteatro; Park guidance describes a return to that gate or Piazza Esedra using the Antiquarium lift. Confirm current conditions and assistance with the Park.']
        ],
        access: 'The Park pairs Porta Marina and Piazza Esedra with the EAV Napoli–Sorrento stop Pompei Villa dei Misteri; Piazza Anfiteatro is approached from Pompei Santuario on the Napoli–Poggiomarino line. Trenitalia’s Pompei station is separate and has its own onward connection. Match operator, stop, gate and intended exit before boarding.',
        tradeoff: 'Pompeii’s 44-hectare excavated city cannot be read well as a rapid sweep. A civic route leaves distant houses for another visit; a domestic route gives up more public buildings; the accessible itinerary covers a different, carefully planned line. Keep water, shade and the chosen exit ahead of the checklist.',
        routeTitle: 'One Pompeii route, one rail pairing',
        routeLead: 'Use the entrance map and current building list first; let one historical question decide which streets deserve your time.',
        routeLabels: ['Select the gate and train', 'Choose a civic or domestic lens', 'Add one open building', 'Leave by the planned exit'],
        stages: [
          ['Book the site, not just the town', 'The Park currently lists personal tickets, daily capacity and seasonal entry slots. Check the live ticket page for the exact product, named entrance, entry time and exit rules before travelling.'],
          ['Pair the EAV stop with the entrance', 'Use Pompei Villa dei Misteri for Porta Marina or Piazza Esedra on the Napoli–Sorrento line; use Pompei Santuario for Piazza Anfiteatro on Napoli–Poggiomarino. If arriving on Trenitalia at Pompei, check the separate Pompei Link connection.'],
          ['Choose an official core itinerary', 'The Park lists Civic Pompeii and Daily Pompeii themed visits at about one and a half hours each. Use one as a starting spine, then add only a house or public building the Park confirms open that day.'],
          ['Read the city, then stop', 'At the Forum, compare the Capitolium, Basilica and temples as a deliberately public centre. On a domestic line, notice how an atrium house opens inward and how a larger residence such as the House of the Faun adds columns, arcades and representative rooms. Leave time for shade and the station approach.']
        ],
        whatToSee: [
          ['FORUM · THE PUBLIC CITY', 'A square of civic institutions', 'UNESCO describes the Forum as flanked by the Capitolium, Basilica and temples. Read their different roles around one plaza before walking outward; this gives the ruins a civic structure that a list of isolated houses cannot provide.'],
          ['DOMESTIC BLOCKS · HOUSE AND GARDEN', 'From atrium to peristyle', 'UNESCO contrasts the inward-looking atrium house with larger homes expanded by columns, arcades and representative rooms, naming the House of the Faun as an example. Verify the day’s opening list, then use the MANN mosaic collection to connect a surviving floor to its original reception room.'],
          ['STREET WALLS · POLITICS IN DAILY LIFE', 'Graffiti beyond the formal monuments', 'UNESCO notes that political election slogans and personal graffiti survive on Pompeian walls. Read them as evidence of a city whose residents used public surfaces for civic campaigning and private messages, rather than treating the walls only as picturesque backdrops.']
        ],
        fallback: 'If a planned house or gate is closed, stay with the current official open-building list and complete the chosen civic or domestic line. If heat, access or rail service cuts the day short, leave through the nearest confirmed gate; move MANN to another day instead of rushing between sites.',
        watch: [
          ['Tickets and daily entry rules change', 'The Park currently uses named tickets, capacity limits and seasonal entry slots. Check the official ticket page again; do not rely on a pass or old screenshot.'],
          ['The gate determines the train', 'Pompei Villa dei Misteri and Pompei Santuario are distinct stops on different EAV lines; Trenitalia’s Pompei station is another arrival. Save the operator, stop and gate together.'],
          ['The accessible route is planned around gates', 'The official Pompeii for All route begins at Piazza Anfiteatro and describes an option to return via Piazza Esedra and the Antiquarium lift. Confirm the current map, building access and assistance with the Park.']
        ],
        duration: 'Editorial estimate: plan four to six hours inside the site for one themed route, one confirmed building and rest breaks, plus the train and entrance approach. A wider suburban-villa ticket is a separate, longer day.',
        combine: 'Take a meal in modern Pompeii after the exit or visit MANN on another day. Do not add Vesuvius to a full archaeological-city route.',
        verify: 'Check the Park’s ticket, named gate, open-building list and accessibility map; then verify the EAV or Trenitalia station and current return service.',
        reviewDate: '5 October 2026',
        reviewIsoDate: '2026-10-05',
        sources: [
          ['https://pompeiisites.org/en/visiting-info/timetables-and-tickets/', 'Pompeii Archaeological Park · tickets, access rules and current openings'],
          ['https://pompeiisites.org/en/visiting-info/how-to-get-there/', 'Pompeii Archaeological Park · gate-to-station pairings'],
          ['https://pompeiisites.org/en/visiting-info/map-and-guide-to-the-excavations/', 'Pompeii Archaeological Park · official site map and guide'],
          ['https://pompeiisites.org/en/visiting-info/', 'Pompeii Archaeological Park · current visitor information and accessibility'],
          ['https://pompeiisites.org/en/visiting-info/how-to-visit-the-excavations/', 'Pompeii Archaeological Park · entrances and Pompeii for All'],
          ['https://whc.unesco.org/en/list/829/', 'UNESCO World Heritage Centre · Pompeii urban fabric and domestic buildings'],
          ['https://www.museoarcheologiconapoli.it/portfolio-item/mosaici/', 'MANN · House of the Faun mosaics and Alexander mosaic'],
          ['https://orariotreni.eavsrl.it/', 'EAV · official live train timetables']
        ],
        faq: [
          ['Which Pompeii entrance should I use?', 'Choose it with the train: the Park pairs Porta Marina and Piazza Esedra with Pompei Villa dei Misteri on Napoli–Sorrento, and Piazza Anfiteatro with Pompei Santuario on Napoli–Poggiomarino. Check the official directions before you buy or board.'],
          ['Can I visit the House of the Faun?', 'It depends on the Park’s current opening list and route controls. The house is historically important for its atrium, peristyles and mosaics, but check the official daily list rather than assuming it is open.'],
          ['Does one ticket include the suburban villas?', 'Ticket products differ. Read the official description to see whether Villa of the Mysteries, Villa of Diomedes or other sites are included, and check any separate access or shuttle rules.']
        ]
      }),
      g({
        slug: 'herculaneum-vesuvius',
        name: 'Herculaneum or Vesuvius',
        instrument: 'Shoreline-to-crater decision map',
        layout: 'crater-access-status-board',
        structure: 'volcano-status-board',
        imageQuery: 'Herculaneum ruins Mount Vesuvius Campania',
        imageAlt: 'Excavated buildings and courtyard inside Herculaneum',
        purpose: 'Choose Herculaneum for a close reading of a compact residential town and its shoreline evidence, or reserve a separate Vesuvius day for the currently authorized Gran Cono route. They share a volcano, not an entrance or a dependable half-day transfer.',
        summary: 'At Herculaneum, follow one street grid from the upper city toward the ancient shoreline; at Vesuvius, confirm the park’s current Gran Cono access and transport before leaving Naples.',
        choices: [
          ['Herculaneum’s streets and houses', 'Read the decumani parallel to the ancient coast and the cardines crossing them. The Park estimates roughly twenty hectares for the ancient town but just over four hectares are visible; the blocks above the excavated edge continue under modern Ercolano.'],
          ['The ancient shoreline', 'The boat pavilion and the nearby fornici tell a human story of flight. The Park reports around 300 people found in nine shoreline chambers; treat the remains and personal objects as evidence of individual lives, not as spectacle.'],
          ['Vesuvius Gran Cono', 'The National Park describes the crater approach as Path No. 5, on the western side of the rim. Use only the current authorized ticket, access route and transport; weather, safety and capacity can change the plan.']
        ],
        access: 'For Herculaneum, the Park directs rail visitors from Napoli Centrale to the EAV Circumvesuviana Napoli–Sorrento service and Ercolano Scavi; its directions estimate about six minutes on foot from the station to Corso Resina 187. Ask about the blue Ercolano per tutti route if you need its accessible itinerary. Vesuvius access is separately controlled by the National Park.',
        tradeoff: 'Herculaneum is not a small version of Pompeii: its visible domestic and commercial blocks, surviving organic material and partly buried public zone reward slow close reading. The crater is an exposed, status-dependent walk. Combining both major sites compresses their different histories and leaves little margin for the uphill return to Ercolano Scavi.',
        routeTitle: 'Choose the town or the crater',
        routeLead: 'Use the excavation’s intersecting streets to descend toward the ancient shore, or build a separate mountain day around the Park’s live access status.',
        routeLabels: ['Confirm the open site', 'Read the street grid', 'Choose houses or shoreline', 'Return with margin'],
        stages: [
          ['Check access and the correct station', 'For the excavation, use Ercolano Scavi and the Park’s mapped walk to the entrance. For Vesuvius, confirm the National Park’s current ticket and authorized transfer; the Herculaneum rail stop does not provide a crater connection.'],
          ['Start with the city plan', 'At Herculaneum, decumani run parallel to the shoreline and cardines cross them. Follow one complete street line and notice where the excavation meets the modern town rather than expecting the whole ancient city to be visible.'],
          ['Choose domestic evidence or the shore', 'Use houses, baths and the Antiquarium for built and household history; continue to the ancient shoreline only if the current route is open and you want to visit its somber memorial evidence.'],
          ['Protect the return', 'The walk back to Ercolano Scavi climbs through the modern town. For Vesuvius, use the booked vehicle’s actual return time and the Park’s current closing and safety instructions.']
        ],
        whatToSee: [
          ['HERCULANEUM · THE CITY GRID', 'A street plan cut by the modern town', 'The Park describes decumani running parallel to the coast and cardines at right angles. Its excavation page places the Decumanus Maximus at the line between the visible ruins and ancient blocks still under Corso Resina; the public heart is less exposed than the residential and commercial insulae.'],
          ['ORGANIC FINDS · HOUSEHOLD TIME', 'Wood, food and written records', 'Carbonization preserved doors, stairs, furniture, food, seeds, textiles, wax tablets and papyri at Herculaneum. Read these beside the street grid: they add household work, trade and legal records to the larger monuments, rather than making the town only a story of destruction.'],
          ['ANCIENT SHORE · THE FORNICI', 'Evidence of people seeking escape', 'The Park records around 300 remains in nine of the twelve chambers at the old shore, alongside keys, jewelry, baskets and work tools. This is a grave site; visitors can understand what the objects reveal without photographing or treating the victims as a display.'],
          ['VESUVIUS · GRAN CONO PATH 5', 'A separate park decision', 'The National Park identifies Path No. 5 as the route to the crater rim on its western side. Trail status, tickets and transport are controlled separately from the archaeological parks; check the official notice immediately before the visit.']
        ],
        fallback: 'If the crater route is closed or weather-limited, make Herculaneum the whole day only if the archaeological entrance is operating. If Herculaneum access changes, use MANN for an indoor Vesuvian collection and keep Vesuvius for another confirmed window.',
        watch: [
          ['The shoreline evidence is a memorial context', 'The Park’s ancient-shore finds include the remains of people trying to escape the eruption. Approach quietly and follow the site’s photography and visitor rules.'],
          ['Herculaneum’s return climbs', 'The Park places Ercolano Scavi about six minutes from the entrance on arrival; allow extra time for the uphill return and your actual train departure.'],
          ['A crater ticket does not fix the weather', 'The National Park controls Path No. 5. Check current access, safety status, transport and return conditions; do not use unofficial paths or transfers.']
        ],
        duration: 'Editorial estimate: allow four to six hours for Herculaneum with travel and a slow site visit. Give a Vesuvius crater window its own day, with transport and safety margin.',
        combine: 'Pair Herculaneum with a short evening in Naples or a separate MANN visit. Keep Pompeii and Vesuvius as other days.',
        verify: 'Recheck Herculaneum tickets, accessible route and station directions; for Vesuvius, check the National Park’s current path status, ticket and authorized transport.',
        reviewDate: '5 October 2026',
        reviewIsoDate: '2026-10-05',
        sources: [
          ['https://ercolano.cultura.gov.it/la-storia/', 'Herculaneum Archaeological Park · history and city plan'],
          ['https://ercolano.cultura.gov.it/area-archeologica/', 'Herculaneum Archaeological Park · excavated districts and buildings'],
          ['https://ercolano.cultura.gov.it/reperti-organici/', 'Herculaneum Archaeological Park · organic finds and everyday evidence'],
          ['https://ercolano.cultura.gov.it/fuggiaschi/', 'Herculaneum Archaeological Park · ancient-shore human remains'],
          ['https://ercolano.cultura.gov.it/antiquarium-padiglione-barca/', 'Herculaneum Archaeological Park · Antiquarium and boat pavilion'],
          ['https://ercolano.cultura.gov.it/come-arrivare/', 'Herculaneum Archaeological Park · station and entrance directions'],
          ['https://ercolano.cultura.gov.it/accessibilita/', 'Herculaneum Archaeological Park · Ercolano per tutti route'],
          ['https://www.parconazionaledelvesuvio.it/en/visit-the-park/', 'Vesuvius National Park · trails and Gran Cono Path No. 5'],
          ['https://orariotreni.eavsrl.it/', 'EAV · official live train timetables'],
          ['https://whc.unesco.org/en/list/829/', 'UNESCO World Heritage Centre · Vesuvian archaeological areas']
        ],
        faq: [
          ['How do I reach Herculaneum by train?', 'The Archaeological Park directs visitors to Ercolano Scavi on the Circumvesuviana Napoli–Sorrento service and estimates about six minutes on foot to the entrance. Confirm the live EAV timetable and allow for the uphill walk back.'],
          ['Can I visit Herculaneum and Vesuvius on one relaxed day?', 'They use different entrance, booking and transport systems. Give Herculaneum time for its streets and shoreline; use a separate day for the crater if the National Park confirms access.'],
          ['Is the ancient shoreline appropriate for everyone?', 'The shoreline display includes the remains of people who died while seeking refuge. Read the Park’s visitor guidance first and choose another part of the site if that context is not right for you.']
        ]
      })
    ]
  }),  c({
    slug: 'sorrento-amalfi-capri',
    name: 'Sorrento, Amalfi Coast & Capri',
    region: 'Campania',
    reviewDate: '12 October 2026',
    reviewIsoDate: '2026-10-12',
    publishedIsoDate: '2026-09-26',
    band: 'south-volcano-coast',
    family: 'tyrrhenian-return-manifest',
    label: 'Campania · coastal folio 03',
    tagline: 'Choose the base, the vessel or road spine and the final return before the celebrated view.',
    hubIntro: 'Sorrento, the Amalfi Coast and Capri sit close on a map but operate through different rail, bus, road and marine systems. A credible plan chooses Sorrento, Salerno or a coast village as the base, names the port or bus stop and keeps one complete land-side alternative for rough sea or road disruption. Sorrento is the Naples-and-Capri anchor; Salerno links mainline rail with the eastern coast; Amalfi puts the cathedral town and Ravello road connection at the centre but adds stairs and luggage handling. Choose the nights first, then build each day around one verified outward-and-return spine.',
    stay: 'Three nights: keep one Sorrento room near Piazza Tasso or the Circumvesuviana station and give the days separate jobs—Sorrento or the peninsula, the coast, and Capri if a direct sailing is operating. Four nights can stay in Sorrento with a weather or arrival buffer, or split two Sorrento nights and two Salerno nights when Capri and the eastern coast both matter. Five nights can support three Sorrento nights plus two in Salerno or Amalfi: Salerno favors mainline rail and the eastern bus corridor; Amalfi favors an early coast start but requires a realistic plan for stairs and bags. Avoid a one-night sequence through Positano, Amalfi and Ravello.',
    transfer: 'From Napoli Centrale, use the EAV Circumvesuviana from Napoli Garibaldi to Sorrento; it is a separate local railway, not the high-speed train. The Sorrento station is above the centre, while Marina Piccola is below it; choose the current lift, bus, road or stair access before carrying luggage downhill. Capri boats use Marina Piccola in Sorrento and Marina Grande on Capri, but the exact operator and seasonal departure must be confirmed. On the coast, SITA Sud serves named road stops and its 5110 route links Amalfi, Ravello and Scala when operating; Travelmar uses separate passenger-ferry piers. Save the return from the same town and port before buying an outward ticket.',
    season: 'Coast ferries and island sailings are date- and sea-state dependent; a sunny forecast does not promise a route or landing. Summer brings heat, queues, road pressure and high demand for boats and timed interiors, so choose one town pair and check the operator before reserving the rest of the day. Shoulder and winter dates can have fewer or no marine options. SITA Sud timetables also carry route and day-type notices; recheck the exact stop, service date and return before fixing an overnight outside the rail towns. Treat path, fire and sea notices as separate gates.',
    fallback: 'Keep one complete land day matched to the booked base: from Sorrento, walk Piazza Tasso, Via San Cesareo, the cathedral quarter and Villa Comunale without descending to the marina; from Salerno, use the old town and waterfront; from Amalfi, stay within the port-to-cathedral core and check the paper-museum opening. If a sailing is cancelled, do not replace it with a taxi chain across several villages. If the road corridor is disrupted, shorten to the town already reached and protect the rail or accommodation return.',
    sources: [
      ['https://www.eavsrl.it/', 'EAV — route planning, ticket and service information'],
      ['https://orariotreni.eavsrl.it/', 'EAV — current station departures and arrivals'],
      ['https://www.eavsrl.it/infomobilita-ferrovia/', 'EAV — railway service notices'],
      ['https://sitasudtrasporti.it/campania/orari/', 'SITA Sud Campania — current bus timetables and line stops'],
      ['https://sitasudtrasporti.it/campania/', 'SITA Sud Campania — tickets and service notices'],
      ['https://www.travelmar.it/en/timetable', 'Travelmar — ferry timetables and fares'],
      ['https://www.snav.it/en/shop-2', 'SNAV — current ferry routes and booking'],
      ['https://www.capritourism.com/en', 'Capri Tourism — official island planning information']
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
        summary: 'Use EAV to reach Sorrento, choose the upper-town walk or the descent to Marina Piccola, and confirm the ferry return before fixing the next day’s base.',
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
        verify: 'Check EAV departures and railway notices, the current station-to-marina connection, the exact ferry operator and port, and any hotel or road access restriction before travel.',
        localPlan: {
          title: 'A Sorrento day with one descent',
          intro: 'Keep the station, upper town and lower marina in one deliberate loop. Do not cross the peninsula to meet a boat.',
          stayTitle: 'Sleep near the first morning threshold',
          stay: 'For one to three nights, choose the upper centre around Piazza Tasso for food and a walk-first morning, or the station side if an early EAV departure matters more. The lower Marina Piccola is convenient only when the hotel’s uphill access and luggage route are clear. If the next day starts with a ferry, stay close enough to reach the port without assuming the lift or shuttle will operate at your preferred time.',
          walkTitle: 'Read the upper town before the cliff',
          walk: 'Start at Sorrento station and walk toward Piazza Tasso; continue through Via San Cesareo to Sedil Dominova and the cathedral quarter. Follow the old lanes to the Chiostro di San Francesco, then use Villa Comunale for the cliff edge and bay view. Descend to Marina Piccola only if stairs or the currently operating lift fit the group; otherwise return to Piazza Tasso by the same upper route. This is a town loop with one optional vertical branch, not a marina-to-station shortcut.',
          bookingTitle: 'Book the sailing; treat caves as conditional',
          booking: 'For a Capri day, check SNAV and any other current operator from Marina Piccola to Marina Grande for the exact date, baggage rules, check-in and return port. Keep the return ticket and boarding margin visible before leaving the town. A Blue Grotto or boat circuit is a separate sea-state and queue decision; do not treat an island ferry ticket as a reservation or guarantee for it. Check the Sorrento municipality and venue pages for any local event or interior opening that changes the walk.',
          seasonTitle: 'Shift the descent around heat and sea',
          season: 'In hot months, walk the upper centre first and place the exposed cliff and marina branch later, only if the lift, stairs or bus access is available. Leave a separate full day for a boat rather than joining it to the arrival walk. In shoulder or winter dates, verify the sailing calendar before choosing a port-side hotel; in rain or rough sea, stay on the upper-town loop and remove the descent.'
        },
        sources: [
          ['https://www.eavsrl.it/', 'EAV — official Sorrento rail information'],
          ['https://www.comune.sorrento.na.it/', 'Comune di Sorrento — official municipal information'],
          ['https://www.puntacampanella.org/', 'Punta Campanella Marine Protected Area — official access information'],
          ['https://www.snav.it/en/shop-2', 'SNAV — ferry routes, booking and current trip conditions'],
          ['https://www.capritourism.com/en', 'Capri Tourism — official island planning information']
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
        summary: 'Choose one Positano landing or an Amalfi-to-Ravello road pair; walk from the named pier or stop, then verify the SITA Sud or Travelmar return for that date.',
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
        verify: 'Check SITA Sud route 5110 and its day-specific notices, Travelmar’s actual departure pier, marine weather, any path closure and the final return to the booked base.',
        localPlan: {
          title: 'One coast pair, one named return',
          intro: 'Use Amalfi as the road-and-sea hinge only when the return from the chosen town is already clear.',
          stayTitle: 'Choose the bed by tomorrow’s exit',
          stay: 'For a day trip, Sorrento works when Naples rail or a Capri sailing is the next priority; Salerno is stronger for mainline rail and an eastern-coast start. An Amalfi night places the cathedral, ferry pier and Ravello bus nearer, but upper lodging can mean stairs with bags. Positano suits an early beach or town start only if the booked room’s actual level and arrival stop are manageable. For two nights, keep the same room rather than changing towns after a full coast day.',
          walkTitle: 'Walk Amalfi, then decide on Ravello',
          walk: 'From Amalfi’s passenger pier, follow the waterfront into Piazza Flavio Gioia and Piazza Duomo; take the cathedral steps only if the interior visit fits the day, then walk the level lanes toward the Paper Museum if it is open. For a second layer, use the confirmed SITA Sud 5110 bus from Amalfi to Ravello, then walk from the stop through Piazza Duomo toward Villa Rufolo; treat Villa Cimbrone as a farther uphill extension, not an automatic add-on. Return by the checked bus to Amalfi or use one Positano landing as a separate day instead of compressing three towns.',
          bookingTitle: 'Match each ticket to its terminal',
          booking: 'Before buying a Travelmar sailing, confirm that the departure is from the pier beside the town you plan to visit and that the return still reaches your accommodation base. For the road option, check SITA Sud’s 5110 line, stop sequence, valid service date and notices; a route listing is not a promise of a particular departure. Check current cathedral, garden and museum access separately. Never build a timed ferry-to-bus transfer on two independently changing tickets.',
          seasonTitle: 'Make heat, sea and road a three-way gate',
          season: 'In summer, start the town walk early and choose ferry or bus as the main spine; do not add a cliff path at midday without checking its status and shade. Shoulder and winter service can differ from the summer pattern, and sea state can remove a sailing after a land plan is fixed. If ferries stop, choose Amalfi plus the verified Ravello bus or one road-served town only. If the road is congested or disrupted, stay in the town already reached and protect the return.'
        },
        sources: [
          ['https://sitasudtrasporti.it/campania/orari/', 'SITA Sud Campania — current route timetables and stops'],
          ['https://sitasudtrasporti.it/campania/', 'SITA Sud Campania — tickets and service notices'],
          ['https://www.travelmar.it/en/timetable', 'Travelmar — ferry timetables and fares'],
          ['https://www.visitamalfi.info/en/', 'Visit Amalfi — official town planning information']
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
        summary: 'From Marina Piccola, choose Capri town or Anacapri, verify SNAV and island transport for the date, and return to Marina Grande with boarding margin.',
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
        verify: 'Check SNAV or the operating ferry company for the exact Marina Piccola–Marina Grande date and return, then verify the island bus, funicular, lift and cultural-site notices.',
        localPlan: {
          title: 'One island half, one mainland return',
          intro: 'Decide whether Capri town or Anacapri is the main ascent before joining the Marina Grande queues.',
          stayTitle: 'Use a base that survives a late boat',
          stay: 'With one Capri day, stay in Sorrento near the upper station or Piazza Tasso if the EAV arrival and the next mainland rail day matter; budget the separate descent to Marina Piccola. An overnight on Capri earns a second day for the other island half and removes the last-sailing pressure, but choose lodging only after checking its stair or bus access from the port. A Salerno base is less direct for this route, so confirm the specific operator and departure pier before booking around it.',
          walkTitle: 'Choose Capri town or Anacapri, not both at full depth',
          walk: 'From Marina Grande, use the currently operating funicular or a checked bus to Capri town. Walk the Piazzetta and Via Camerelle, then continue toward the Gardens of Augustus only if open; return by the same upper connection with time for the port queue. For Anacapri, take the confirmed island bus to Piazza Vittoria, choose Villa San Michele or the Monte Solaro chairlift, and retrace to the bus for Marina Grande. These are alternative uphill lines; do not promise time for both plus a Blue Grotto queue.',
          bookingTitle: 'Protect the return before the viewpoint',
          booking: 'Check the SNAV sailing or the operator serving Sorrento Marina Piccola to Capri Marina Grande on the exact date, including return, check-in, baggage and any separate ticket condition. If the intended return is full or seasonal service is absent, change the day before leaving Sorrento. Confirm the funicular and island-bus notices and the official opening or booking conditions for the chosen site. Blue Grotto entry and around-island circuits remain separate, weather-sensitive activities.',
          seasonTitle: 'Let marine operation set the island day',
          season: 'During busy warm-weather dates, select one town-half route and verify the boat before reserving other activities; queues can form at the port and at the island’s small uphill services. Shoulder and winter schedules may reduce direct sailings, so do not assume the coast route shown for summer will run. If rough sea cancels the crossing, move the island day rather than replacing it with an improvised bus-and-taxi chain; if upper services stop, stay around Marina Grande and the accessible lower town.'
        },
        sources: [
          ['https://www.capritourism.com/en', 'Capri official tourism — island planning information'],
          ['https://museicapri.cultura.gov.it/', 'Musei e Parchi Archeologici di Capri — official sites'],
          ['https://www.snav.it/en/shop-2', 'SNAV — ferry routes, booking and current trip conditions']
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
          ['UFFIZI · BOTTICELLI ROOMS', 'Compare Venus with Primavera', 'In its notice dated 16 June 2026, the Uffizi says Botticelli’s Venus and Primavera are displayed facing one another after a room reinstallation. The pairing makes a specific comparison possible; check the Gallery’s current notices in case the arrangement changes.']
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
    reviewDate: '12 October 2026',
    reviewIsoDate: '2026-10-12',
    publishedIsoDate: '2026-09-26',
    region: 'Tuscany',
    band: 'central-art-cities',
    family: 'hill-town-last-mile-folio',
    label: 'Tuscany · hill-country folio 05',
    tagline: 'Set the night base, rural corridor and return before treating southern Tuscany as one day trip.',
    hubIntro: 'Siena, Val d’Orcia and the Maremma are three different operating systems: a steep, walkable city; a group of hill towns reached by specific rural bus lines or road; and a protected park reached through Grosseto, Alberese and a conditional last mile. Choose one countryside branch per day, name the outward and return legs, and keep a full Siena day available when the rural chain does not fit.',
    stay: 'Two nights in Siena gives you one full civic day plus arrival or departure; it does not cover both countryside regions. Three nights works as a Siena base for one rural day and a spare city or weather day. Four nights can support two nights in Siena plus one or two around the chosen rural system: Pienza or Montalcino only when the bus and evening plan work, or Grosseto/Alberese for a park-led stay. If you want just one day out, remain in Siena: lodging near Campo or Piazza Gramsci favors walking and bus starts, while a station-side room helps an early rail departure but adds the climb back to the upper city.',
    transfer: 'Visit Siena places the railway station about 2 km from the centre and lists city buses as an alternative to the uphill walk. For Val d’Orcia, Autolinee Toscane line 112 runs on the Siena–Buonconvento–Pienza–Montepulciano corridor; line 114 follows Siena–Buonconvento–Torrenieri–Montalcino. Pick one line and check its direction, date and return rather than combining both towns by assumption. For the park, the official chain is Trenitalia to Grosseto, then an Autolinee Toscane bus to Alberese Visitor Centre; Pinottolai and Marina di Alberese are a separate park access leg.',
    season: 'Palio and other event periods can tighten Siena lodging and alter street access, so check the official city calendar before choosing dates. Summer heat and fire-risk rules can restrict Maremma paths or change guided access; the park’s transport page still exposes 2025 seasonal shuttle dates, so verify the current season instead of reusing that timetable. Val d’Orcia has little shade on open approaches, while rain slows Siena’s stone slopes and rural paths. Reserve a producer, controlled interior or park activity only after the transport shape is clear.',
    fallback: 'When a 112/114 return does not fit, keep the day in Siena: Piazza del Campo, one chosen civic or cathedral interior, then the Via di Città/Banchi di Sopra street loop. If the park path or shuttle is unavailable, make Grosseto a complete walls-and-museum day only if you are already based there; do not add it after a fragile Siena-to-park transfer. In Pienza or Montalcino, stay in the first town and drop the second stop.',
    sources: [
      ['https://www.visitsiena.it/en/siena-tourist-information/', 'Visit Siena — walking, city transport and rail-station access'],
      ['https://www.at-bus.it/it/linee-e-orari/siena-extraurbano-112', 'Autolinee Toscane — line 112: Siena, Buonconvento and Pienza corridor'],
      ['https://www.at-bus.it/it/linee-e-orari/siena-extraurbano-114', 'Autolinee Toscane — line 114: Siena, Buonconvento, Torrenieri and Montalcino'],
      ['https://www.trenitalia.com/en.html', 'Trenitalia — date-specific rail planner'],
      ['https://operaduomo.siena.it/en/', 'Opera della Metropolitana — cathedral complex, access and current opening notices'],
      ['https://parco-maremma.it/en/visit/how-to-reach-us/', 'Maremma Park — rail, bus and seasonal shuttle access'],
      ['https://parco-maremma.it/en/visiting-rules/', 'Maremma Park — trail access and seasonal visiting rules'],
      ['https://parco-maremma.it/en/itineraries/walks/', 'Maremma Park — official walking itineraries and route grades'],
      ['https://www.visittuscany.com/en/towns-and-villages/pienza/', 'Visit Tuscany — Pienza’s central monuments and walking context']
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
        purpose: 'Build one upper-city walk from Piazza Gramsci or the signed station lift/bus connection to Piazza del Campo, Via di Città and the Duomo precinct; choose the Museo Civico/Torre del Mangia, the cathedral complex or public contrada streets as the one deep layer.',
        summary: 'Use Siena’s 2 km station-to-centre gap as a transfer decision, not an assumed stroll: reach the upper city, walk from Banchi di Sopra to Campo and Via di Città, visit one interior, then return by the bus, lift or rail approach that fits your departure.',
        localPlan: {
          title: 'One upper-city loop, one interior anchor',
          intro: 'Keep this route on Siena’s central ridge: solve the lower-station climb first, then join the Campo and Duomo streets without doubling back across the city.',
          stayTitle: 'Sleep for the first walk, not the photo',
          stay: 'For a two-night Siena stay, choose the historic centre around Campo/Banchi di Sopra if you want the first walk to begin on foot; choose the station side only when a rail arrival or departure outweighs the uphill return. Piazza Gramsci is useful for bus arrival, but a room near it still needs a station plan. Add a third Siena night if the next day is a Val d’Orcia or Maremma outing.',
          walkTitle: 'Walk from Banchi di Sopra to the Duomo ridge',
          walk: 'Start at Piazza Gramsci or the upper-centre stop that serves your first door. Follow Via Banchi di Sopra to Piazza del Campo, pause before choosing an interior, then continue by Via di Città toward the Duomo and Santa Maria della Scala. Return through the Campo/Banchi di Sopra axis; do not add the lower railway station on foot unless the slope and time suit you.',
          bookingTitle: 'Choose the civic tower or the connected cathedral complex',
          booking: 'The Opera della Metropolitana describes one cathedral-complex ticket covering several connected spaces, but worship, floor displays, access and last entry change by date. Check its current visit page before choosing that long block. If you prefer the civic story, verify Museo Civico and Torre del Mangia access separately; leave the other interior for another visit.',
          seasonTitle: 'Move the walk around event and weather gates',
          season: 'Palio and city-event dates can change access and crowd movement around Campo. In summer, start the exposed street circuit earlier; in rain, the stone slopes and steps slow the return. The Opera’s current access notes distinguish the Cathedral ramp from Museum, Crypt and Baptistery access, so confirm the exact spaces for limited mobility.'
        },
        choices: [
          ['Campo and civic government', 'Anchor the day on Piazza del Campo, Palazzo Pubblico/Museo Civico and the Torre del Mangia if current access allows. This gives the strongest civic reading but leaves less time for the cathedral complex.'],
          ['Duomo and connected rooms', 'Use the Opera della Metropolitana’s current cathedral-complex access information and protect one long visit block. It adds the cathedral, library and associated museum spaces but limits the contrada street walk.'],
          ['Contrada streets without a tower climb', 'Follow the public Campo–Via di Città–Fontebranda edge and read the districts as lived neighborhoods. This lowers the interior load but gives up the tower and deeper collections.']
        ],
        access: 'Visit Siena lists the railway station about 2 km from the historic centre and points visitors to Autolinee Toscane for local buses. Choose the station lift/bus approach or start at Piazza Gramsci; the upper city is hilly and the ZTL is not a drop-off plan. Continue on foot from Campo to Via di Città and the Duomo, then retrace toward the return stop.',
        tradeoff: 'The civic tower, Museo Civico and cathedral complex each deserve a separate protected block. Choosing one gives up another interior but leaves enough attention for the Campo, Via di Città and neighborhood streets. Religious services, crowds and resident routines take priority over a checklist.',
        stages: [
          ['Choose the arrival level', 'Use Trenitalia to Siena station and check the current urban bus/lift link, or arrive directly at the upper-city bus area around Piazza Gramsci.'],
          ['Walk Banchi di Sopra to Campo', 'Follow the named main street into Piazza del Campo; pause here before committing to a second uphill interior.'],
          ['Continue by Via di Città to one door', 'Choose Museo Civico/Torre del Mangia or the Opera cathedral complex, then keep the other interior for a separate day.'],
          ['Return on the same transport spine', 'Use the current bus/lift connection to the lower station or the upper bus stop; check service and slope before fixing a train.']
        ],
        fallback: 'If a tower or cathedral space closes or conflicts with worship, keep the Campo–Via di Città street circuit and choose whichever nearby civic or museum interior is open. For rain, shorten the outer walk and use Santa Maria della Scala or the confirmed interior rather than adding a distant site.',
        watch: [
          ['The centre-to-station link is a real leg', 'The official tourism page puts the rail station about 2 km from the centre; check the lift/bus link and allow a return margin.'],
          ['Worship, last entry and access differ by room', 'The Opera posts current opening and accessibility conditions for the Cathedral, Museum, Crypt and Baptistery; do not transfer one room’s access to the whole complex.'],
          ['Campo events change the public route', 'Check the city calendar for Palio and other events; use current local barriers and keep contrada spaces respectful.']
        ],
        duration: 'Treat this as one full city day: allow time for the upper-city walk, one controlled interior, a meal break and the down-to-station or bus return. That is an editorial planning envelope, not a measured visit time.',
        combine: 'Combine one civic or sacred interior with the Campo/Via di Città street loop. Keep San Gimignano, Val d’Orcia and the Maremma for separate days.',
        verify: 'Check Visit Siena’s event and urban transport notices, the Opera’s current room openings/access notes or Museo Civico/Torre access, and the station bus/lift for your departure date.',
        faq: [
          ['Can I walk from Siena station to Piazza del Campo?', 'Visit Siena places the station about 2 km from the centre. The route climbs; check the current Autolinee Toscane city service or lift access if you do not want that uphill leg.'],
          ['Should I visit the civic museum and the cathedral complex on one day?', 'Choose one as the long interior block, then use Campo, Via di Città and the surrounding streets for the second layer. The Opera’s connected rooms and the civic tower have separate access and current operating conditions.'],
          ['What is the shorter city fallback?', 'Use Piazza Gramsci to Piazza del Campo to Via di Città and return along Banchi di Sopra, with one open interior. Keep the station transfer on a current bus/lift plan.']
        ],
        sources: [
          ['https://www.visitsiena.it/en/siena-tourist-information/', 'Visit Siena — walking, city transport and rail-station access'],
          ['https://operaduomo.siena.it/en/', 'Opera della Metropolitana — cathedral rooms, access and current openings'],
          ['https://museocivico.comune.siena.it/organizza-la-tua-visita', 'Museo Civico Siena — current visit information']
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
        purpose: 'Choose the Pienza/San Quirico bus corridor on Autolinee Toscane line 112, the Montalcino approach on line 114 via Torrenieri, or one booked road-based visit; each has a different last mile and return.',
        summary: 'Use line 112 for a Pienza-centered day or line 114 for Montalcino via Buonconvento and Torrenieri; walk one town in depth, verify the matching return, and add a second place only when the exact date’s service supports it.',
        localPlan: {
          title: 'One town corridor, one return ticket',
          intro: 'Pienza and Montalcino are not one compact stop. Treat the bus line, legal parking edge and booked tasting as separate decisions, then walk the chosen town rather than touring the whole valley by checklist.',
          stayTitle: 'Keep Siena as the base for one day out',
          stay: 'For one Val d’Orcia day, two or three nights in Siena avoids an unnecessary hotel move and keeps the station/bus gateway familiar. If you want a slow town evening or an early booked producer visit, add a Pienza or Montalcino night only after confirming the last bus, dinner and luggage transfer. Rural agriturismi may need a car or prearranged ride even when the town itself is walkable.',
          walkTitle: 'Walk Pienza’s central square and edge viewpoints',
          walk: 'On line 112, use the stop currently shown for Pienza, then walk through Piazza Pio II to the Cathedral of the Assunta, Palazzo Piccolomini and Palazzo Comunale. Choose one interior, continue along the historic centre’s outer edge/viewpoint path if it is open, and return to the same named stop. Do not add San Quirico or a winery until the bus map and return make the second leg real.',
          bookingTitle: 'Confirm the bus before the cellar',
          booking: 'The current Autolinee Toscane pages identify line 112 on the Siena–Buonconvento–Pienza–Montepulciano corridor and line 114 through Torrenieri toward Montalcino. Open the correct direction and date, then set any tasting or museum booking around that window. The operator’s current notices include service changes; no departure or fare is guaranteed here.',
          seasonTitle: 'Treat heat, harvest and Sunday as itinerary inputs',
          season: 'Open slopes and exposed town edges are tiring in summer heat, while rain makes stone lanes and rural shoulders slower. Autumn winery visits may need earlier booking. Bus calendars can distinguish school, weekday, holiday and seasonal service; if the required return is absent, make one town the whole day.'
        },
        choices: [
          ['Pienza by line 112', 'Choose the Renaissance square, cathedral and one interior; add the outer viewpoint walk if access and weather suit. It has a named operator corridor but not an automatic second-town connection.'],
          ['Montalcino by line 114', 'Use the Siena–Buonconvento–Torrenieri–Montalcino route for the fortress town and one booked producer. This sacrifices broad valley sampling and depends on the date’s bus return.'],
          ['San Quirico or a producer by road', 'Use a booked driver/tour or a verified line 112 stop only after you have the return. This can fit a second village or tasting but is not a reason to drive into a ZTL or assume a winery transfer.']
        ],
        access: 'There is no single Val d’Orcia rail station. Autolinee Toscane’s current line pages show 112 from Siena via Buonconvento to Pienza and onward toward Montepulciano, and 114 via Buonconvento/Torrenieri to Montalcino. A car needs a legal lot outside each ZTL; a tasting reservation does not include transport unless the provider says so.',
        tradeoff: 'Trying to join Pienza, San Quirico, Montalcino and a tasting in one loop spends the day waiting or driving between hill towns. Give up the second town and use the saved time for Piazza Pio II, one interior, a meal and a confirmed return.',
        stages: [
          ['Choose line 112 or 114', 'Use 112 for the Pienza/San Quirico corridor or 114 for Montalcino via Torrenieri; confirm direction and date on the operator page.'],
          ['Arrive at the town, not the region pin', 'Use the named Pienza or Montalcino stop from the current line map, or park legally outside the centre’s ZTL.'],
          ['Walk one compact centre in sequence', 'For Pienza, connect Piazza Pio II, the cathedral/Palazzo Piccolomini choice and the historic edge path before a meal.'],
          ['Return on the same verified corridor', 'Keep the named bus stop, legal lot and outbound route together; do not depend on an unconfirmed last rural connection.']
        ],
        fallback: 'If line 112/114, a transfer or a producer visit no longer fits, keep Pienza or Montalcino as the single-town day and use a confirmed local interior or meal. If the return itself is uncertain, return to Siena and use the Siena civic walk rather than relying on an unverified ride.',
        watch: [
          ['Line numbers do not promise a departure', 'The live line 112 and 114 pages carry day-specific schedules and notices. Recheck the outward and return for the actual date.'],
          ['Town centres have a vehicle edge', 'Follow the posted ZTL and lot signs; a navigation pin at the piazza is not permission to drive inside.'],
          ['A tasting is a separate booking', 'Ask the producer how guests reach the property and return; do not combine alcohol and a drive.']
        ],
        duration: 'Protect one full day for a single town corridor from Siena, including the bus or car leg, walking loop, interior/meal and return. The allowance is editorial; actual journey and visit length depend on the date and bookings.',
        combine: 'Combine Pienza with San Quirico only when line 112 or a booked road plan confirms both directions. Keep Montalcino and the Maremma for separate days.',
        verify: 'Check Autolinee Toscane lines 112/114 for the date and direction, the town ZTL/parking boundary, any interior or producer booking, and daylight/weather for the edge walk.',
        faq: [
          ['Can I visit Pienza and Montalcino by bus on the same day?', 'The official operator lists them on different corridors: line 112 for Pienza and line 114 via Torrenieri for Montalcino. Do not plan both until the exact-date map and return connections support that combination.'],
          ['Where should I sleep for one Val d’Orcia day?', 'Stay in Siena if this is one rural day in a city-focused trip. Sleep in Pienza or Montalcino only when your last-mile arrival, meal and next morning transport are arranged.'],
          ['What should I do if my rural bus return does not fit?', 'Keep the first town as the complete day and remove the second stop. If even that return is not usable, stay in Siena and use its centre walk rather than inventing a transfer.']
        ],
        sources: [
          ['https://www.at-bus.it/it/linee-e-orari/siena-extraurbano-112', 'Autolinee Toscane — line 112 to the Pienza corridor'],
          ['https://www.at-bus.it/it/linee-e-orari/siena-extraurbano-114', 'Autolinee Toscane — line 114 to Montalcino via Torrenieri'],
          ['https://www.visittuscany.com/en/towns-and-villages/pienza/', 'Visit Tuscany — Pienza’s central monuments and walking context'],
          ['https://en.visitvaldorcia.it/', 'Visit Val d’Orcia — regional destination information']
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
        purpose: 'Separate the rail arrival at Grosseto, bus to the Alberese Visitor Centre, park access at Pinottolai and the signed walk; choose the easy 5.6 km A7 Bocca d’Ombrone or a longer coast route only if the current access gate is open.',
        summary: 'Use Trenitalia to Grosseto and the operator-confirmed bus to Alberese; then verify current Pinottolai/park access before selecting one signed route such as A7 Bocca d’Ombrone. The 2025 shuttle timetable is not a 2026 promise.',
        localPlan: {
          title: 'A park day with a named rail and trail gate',
          intro: 'Grosseto, Alberese, Pinottolai and Marina di Alberese are separate stops. Build the day around the park’s current route and access notice, not the beach image or a stale shuttle table.',
          stayTitle: 'Use Grosseto for rail, Alberese for the park',
          stay: 'For a rail-led visit, one or two nights in Grosseto keeps the station, meals and city fallback together, but still requires a verified bus leg to Alberese. Stay in Alberese only if your accommodation confirms the final walk/ride to the Visitor Centre and the park opening/access plan. A Siena base is reasonable for a city-plus-one-rural-day trip only after the full Siena–Grosseto–Alberese–return chain checks out.',
          walkTitle: 'Select one signed route from Pinottolai',
          walk: 'The park’s current walking list describes A7 Bocca d’Ombrone as an easy 5.6 km route; use the official map to follow its signed course from the access point open that day. A10 Collelungo beach is listed at 11.2 km and is a longer exposed option. Do not assume either route is open or that the Visitor Centre is the trailhead; follow today’s park instructions and return on the listed access leg.',
          bookingTitle: 'Confirm entry, guide rules and the shuttle separately',
          booking: 'The Park’s how-to page recommends Grosseto rail station followed by bus to Alberese. Its visible shuttle table is labeled Summer/Autumn 2025, so it cannot establish a 2026 departure. Reopen the current park access and visitor notices, ask whether route entry or guided access must be arranged, then confirm the Autolinee Toscane connection and final return.',
          seasonTitle: 'Let fire rules and heat choose the route',
          season: 'The Park says seasonal fire regulations can change how its trails are visited and names Pinottolai for Alberese itineraries. In hotter or fire-risk conditions, do not assume that a beach or longer route is an alternative to a closed path. Choose the shortest currently open signed route, or keep the whole day in Grosseto.'
        },
        choices: [
          ['A7 Bocca d’Ombrone', 'The Park currently lists this as an easy 5.6 km walk across the Ombrone plain. It gives open-landscape interpretation, but the live access rules still control the actual start and route status.'],
          ['A10 Collelungo beach', 'The official walking list gives 11.2 km for this longer beach route. It gives a coast-and-forest day but needs more daylight, water and a confirmed return; do not make it the heat fallback.'],
          ['Grosseto behind the walls', 'Keep the day in the rail town for its Medici walls and museum quarter when park access or weather fails. It gives up the protected coast but removes the seasonal trailhead and shuttle leg.']
        ],
        access: 'The Park’s rail guidance says to leave the train at Grosseto and take a bus to the Alberese Visitor Centre. Its separate access page names a seasonal shuttle through Rispescia, Alberese, Pinottolai and Marina di Alberese; the displayed tables are from 2025. Verify the current bus, trail start and route status before you leave Grosseto.',
        tradeoff: 'A7’s 5.6 km easy listing is a different effort from A10’s 11.2 km beach approach; neither makes a same-day city-and-coast circuit automatic. Choose one park route or stay behind Grosseto’s walls, protecting the final bus and the heat/fire rules.',
        stages: [
          ['Reach Grosseto by rail', 'Use Trenitalia’s exact-date planner for Siena–Grosseto; do not assume a same-day connection fits until the return is visible.'],
          ['Take the bus to Alberese Visitor Centre', 'The Park directs rail arrivals to Grosseto station and then bus to Alberese; check Autolinee Toscane’s current route/date.'],
          ['Choose one open signed route', 'Confirm the active start at Pinottolai and current trail rules, then follow A7 or another approved route from the Park map.'],
          ['Return through the same access chain', 'Use the live shuttle/bus plan back to Alberese and Grosseto before the final rail leg; do not treat Marina di Alberese as the Visitor Centre.']
        ],
        fallback: 'If the park route, fire rules or current shuttle do not fit, stay in Grosseto for a walls-and-museum day. Do not substitute an unverified beach shuttle or attempt a closed trail to save the outing.',
        watch: [
          ['The visible shuttle page is dated 2025', 'Do not copy its season, stop times or parking details into a 2026 plan; ask the Park and operator for current access.'],
          ['Visitor Centre and Pinottolai are different', 'The park page distinguishes the Alberese visitor centre from the trail departure point. Confirm the current last-mile leg.'],
          ['A long route is not a hot-weather fallback', 'A10 Collelungo is listed at 11.2 km; if heat or fire limits the park, use the urban alternative instead.']
        ],
        duration: 'Protect a full day for one park walk from Grosseto, including train, bus, park access and the listed route distance. The kilometre figures are the Park’s route listings, not promised walking times; verify current route conditions and return service.',
        combine: 'Pair one open park route with the Alberese visitor area only if the access plan allows it. Keep Grosseto’s museum/wall circuit, Val d’Orcia and a separate coast trip on different days.',
        verify: 'Recheck the Maremma Park visiting rules, current walk map, trail/fire status and seasonal shuttle; confirm the Grosseto–Alberese Autolinee service and Trenitalia return for your actual date.',
        faq: [
          ['Is Alberese Visitor Centre the park trailhead?', 'No. The Park’s pages distinguish the visitor centre in Alberese from Pinottolai, named for Alberese itineraries, and from Marina di Alberese. Confirm the current access leg for the route you choose.'],
          ['Which Maremma walk suits a shorter day?', 'The current official walking list labels A7 Bocca d’Ombrone as an easy 5.6 km route. Check that it is open and that the current transport reaches its start before using it.'],
          ['Can I use the park’s shuttle timetable for 2026?', 'The access page we checked still labels its visible table Summer/Autumn 2025. It is not evidence of a 2026 departure; check the Park and Autolinee Toscane again.']
        ],
        sources: [
          ['https://parco-maremma.it/en/visit/how-to-reach-us/', 'Maremma Park — rail, bus and seasonal shuttle access'],
          ['https://parco-maremma.it/en/visiting-rules/', 'Maremma Park — trail access and seasonal visiting rules'],
          ['https://parco-maremma.it/en/itineraries/walks/', 'Maremma Park — A7/A10 walking routes and published lengths'],
          ['https://www.at-bus.it/en', 'Autolinee Toscane — current regional bus planner'],
          ['https://www.trenitalia.com/en.html', 'Trenitalia — date-specific rail planner'],
          ['https://www.visittuscany.com/en/areas/maremma/', 'Visit Tuscany — regional Maremma information']
        ]
      })
    ]
  })
];
