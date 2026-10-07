import { defineFranceCluster, franceGuide } from './france-guide-builder.mjs';

export const normandyEditorialCluster = defineFranceCluster({
  slug: 'normandy',
  name: 'Normandy: Rouen, Bayeux & Mont-Saint-Michel',
  region: 'Normandy',
  band: 'capital-north',
  family: 'normandy-landscape-atlas',
  label: 'River, memory & tide atlas',
  tagline: 'Give the river city, landing coast and tidal monument separate days.',
  reviewDate: '7 October 2026',
  reviewDateISO: '2026-10-07',
  hubIntro: 'Normandy is three different travel systems, not a chain of nearby icons. Rouen is a compact rail city where a Gothic façade, civic memory and the Seine fit into one walk. Bayeux is a walkable base, but the D-Day coast spreads across limited bus corridors or a planned tour. Mont-Saint-Michel begins on the mainland, about 9 km from Pontorson station, then adds a shuttle or signed walk, village stairs and the abbey.',
  stay: 'Four nights make the three places legible: one in Rouen, two in Bayeux for a separate town and coast day, and one near the bay or Pontorson for Mont-Saint-Michel. With fewer nights, choose two systems and keep the third for another trip; a same-day Paris loop compresses both interpretation and the return.',
  transfer: 'Use TER trains for Rouen and Bayeux, then treat the last miles as separate plans. NOMAD 120 serves a western Bayeux–Grandcamp-Maisy corridor Monday to Saturday except public holidays, with some school-period-only trips; line 121 links Bayeux and Courseulles through the eastern coast on weekdays in school and short school-vacation periods, plus two Saturday round trips all year except public holidays. Neither is a complete hop-on battlefield circuit. Mont-Saint-Michel uses the current Pontorson or visitor-parking coach and shuttle sequence.',
  season: 'Rain, wind and short winter daylight can change a coast day even when the town remains comfortable. Summer brings longer light and heavier road, shuttle and monument pressure. Tide tables describe the bay, not a safe crossing: leave any guided passage to an authorized operator using current conditions.',
  fallback: 'Keep the three bases useful when one exposed or distant layer falls away. Rouen can become one cathedral quarter plus a selected museum; Bayeux can use the cathedral and a currently open museum while the Tapestry gallery remains closed for renovation; Mont-Saint-Michel can be an exterior and village visit from safe ground, or a mainland day if transport or weather disrupts the approach.',
  sources: [
    ['https://en.normandie-tourisme.fr/', 'Normandy Tourism — official regional destination guide'],
    ['https://www.ter.sncf.com/normandie', 'TER Normandie — official regional rail information'],
    ['https://nomad.normandie.fr/lignes-de-cars/ligne-120', 'NOMAD line 120 — current Bayeux–western-coast corridor and timetable'],
    ['https://nomad.normandie.fr/lignes-de-cars/ligne-121', 'NOMAD line 121 — current Bayeux–eastern-coast corridor and timetable'],
    ['https://www.ot-montsaintmichel.com/en/discover/visit-the-mont-saint-michel/access-the-mont-saint-michel/by-bus-and-coach/', 'Mont-Saint-Michel tourism office — mainland bus and shuttle access'],
    ['https://meteofrance.com/', 'Météo-France — official forecasts and warnings']
  ],
  faq: [
    ['Can I visit Rouen, Bayeux and Mont-Saint-Michel in one day?', 'No useful version covers all three. Rail, the dispersed landing coast and the mainland-to-abbey approach are separate systems. Use this route book to choose two bases at most, or give the region four nights.'],
    ['Can I reach the D-Day sites by bus from Bayeux?', 'NOMAD 120 and 121 serve different coast corridors on limited calendars; some 120 trips vary by school period and line 121 has a much thinner Saturday service. Match a published departure and return to an exact stop, or book a tour or vehicle.'],
    ['Can I see the Bayeux Tapestry in Bayeux now?', 'The official museum says its gallery is closed for renovation until autumn 2027. Its full scene-by-scene online viewer remains available; confirm the current notice before planning a future in-person visit.'],
    ['Is it safe to walk across Mont-Saint-Michel bay independently?', 'No. Channels and tides change quickly. Stay on the causeway, dam and signed public approaches unless joining an authorized guided crossing with current local conditions.']
  ],
  guides: [
    franceGuide({
      slug: 'rouen-seine-cathedral',
      name: 'Rouen Cathedral, Old Streets & the Seine',
      instrument: 'Gothic-to-river street section',
      layout: 'cathedral-street-section',
      imageQuery: 'Rouen Cathedral Gros Horloge old town France',
      imageAlt: 'The Gros-Horloge street axis in Rouen, with the cathedral visible in the distance',
      imageCreditTitle: 'Rouen’s Gros-Horloge street, with the cathedral beyond',
      imageCaption: 'The Gros-Horloge street axis, with Rouen Cathedral in the distance.',
      purpose: 'Read Rouen as a layered city rather than a cathedral photo stop: compare seven centuries of Gothic construction, choose one focused history or art interior, then use the Seine to understand the port edge and the return toward the station.',
      summary: 'A 151-metre cast-iron spire, a west façade carved with 70 figures, and Monet’s 28 changing views make Rouen Cathedral a route through time as well as stone.',
      choices: [
        ['Gothic fabric and parish streets', 'Give the cathedral and exterior route the day: Saint-Maclou, the Aître and the timbered center. Keep church entry subject to services and use the façade as the reliable anchor.'],
        ['Joan of Arc and civic memory', 'Choose the Historial Jeanne d’Arc inside the archbishop’s palace, then connect its trial and later rehabilitation narrative to Place du Vieux-Marché. Do not reduce the site to a single execution marker.'],
        ['Art and the river city', 'Make the Musée des Beaux-Arts your one long interior, then descend toward the Seine. Its 1909 Depeaux donation brought 50 paintings by Monet, Sisley, Pissarro, Renoir and Lebourg into the collection.']
      ],
      access: 'Rouen Rive Droite is above the historic center. Descend with a route that ends near a direct bus or a known station approach; the return climb matters with luggage or limited mobility. Check local transit and cathedral access on the day, and solve luggage storage before joining narrow streets.',
      tradeoff: 'Etretat, Giverny and the landing coast are distinct trips with different onward transport. This plan gives them up so the cathedral, one interpretive interior, a meal and a river finish can fit without a cross-region race.',
      siteContext: {
        label: 'A façade used as a clock',
        heading: 'Read the building by its construction seams and changing light.',
        intro: 'Rouen Cathedral did not arrive as a single Gothic design. Its unequal towers, layered portals and later spire make the west end a visible chronology before you step inside.',
        details: [
          ['12th to 16th centuries', 'Saint-Romain’s tower belongs to the 12th century; the Libraires and Calende portals to the 14th; the west façade and Butter Tower developed in the 15th and 16th. The cast-iron spire is a 19th-century addition.'],
          ['Seventy carved figures', 'The 61-metre-wide west façade carries 70 sculptures made between 1362 and 1421. Look across the width before moving close enough to separate the portals and their shadow lines.'],
          ['Twenty-eight Monet views', 'In 1892–93 Claude Monet made 28 views of the west portal at different hours. He later worked upstairs in the Bureau des Finances, now Rouen’s tourist information office; the sequence turns this same façade into a study of light rather than a single “best” view.'],
          ['Trial and rehabilitation', 'The Historial Jeanne d’Arc uses the archbishop’s palace, including the Officiality where the 1431 condemnation was pronounced. Its account also reaches the 1456 rehabilitation, so the route follows how evidence and authority changed.']
        ]
      },
      stages: [
        ['Begin above the center', 'From Rive Droite, decide whether the downhill walk is comfortable before leaving the station. Follow one approach toward the cathedral and save a bus or taxi option for the uphill return.'],
        ['Read the cathedral outside first', 'Stand back for the asymmetric 61-metre façade, then compare the 14th-century portals with the 15th–16th-century work and later spire. Check service access before committing to an interior visit.'],
        ['Choose one interpretive interior', 'Turn toward the Historial for the 1431 trial and 1456 rehabilitation, or to the Beaux-Arts for its Depeaux impressionist holdings. Give one institution time instead of sampling both entrances.'],
        ['Cross the old street axis once', 'Use the Gros-Horloge and market quarter to reach a meal or the Seine edge. Check the exact train and use a direct return toward Rive Droite before the final climb becomes urgent.']
      ],
      fallback: 'For hard rain, choose one confirmed open interior—cathedral, Historial or Beaux-Arts—and connect it with the covered market streets. If church entry pauses for worship, the carved façade, Saint-Maclou exterior and Aître still make a coherent walk.',
      watch: [
        ['The station sits above the center', 'A downhill start creates an uphill finish. Keep the return bus or taxi option visible and do not let luggage dictate a rushed cathedral visit.'],
        ['Church access follows worship', 'Masses, ceremonies and maintenance can restrict visitor movement. Treat the exterior as the fixed point and confirm entry on the day.'],
        ['One interior is enough', 'The Historial and Beaux-Arts tell different stories. Choose based on the day’s question, opening and energy rather than trying to stack both after a long walk.']
      ],
      duration: 'Allow five to seven hours for the cathedral quarter, one museum or Historial, a meal and the river edge. A compact exterior walk can take three to four hours, excluding luggage and a slower return climb.',
      combine: 'Pair Rouen with an overnight or onward rail journey. Giverny, Etretat and the D-Day coast each require a separate last-mile plan; add only one if private transport and a protected return are already settled.',
      verify: 'Reopen Rouen Cathedral visitor notices, Historial or Beaux-Arts hours, local bus service and your Rive Droite departure before setting the river finish.',
      sources: [
        ['https://www.visiterouen.com/patrimoines/histoire/cathedrale-rouen-intime-flamboyante/', 'Rouen Normandy Tourism — cathedral chronology, dimensions and Monet series'],
        ['https://www.historial-jeannedarc.fr/en/', 'Historial Jeanne d’Arc — official visitor route and trial interpretation'],
        ['https://mbarouen.fr/fr/expositions/francois-depeaux-l-homme-aux-600-tableaux', 'Musée des Beaux-Arts de Rouen — François Depeaux collection history']
      ]
    }),
    franceGuide({
      slug: 'bayeux-dday-landscape',
      name: 'Bayeux & the D-Day Landscape',
      instrument: 'Memory-site route dossier',
      layout: 'coast-history-dossier',
      imageQuery: 'Bayeux Normandy cathedral old town France',
      imageAlt: 'Bayeux Cathedral’s towers and Gothic west façade above the historic town',
      imageCreditTitle: 'Bayeux Cathedral, an urban landmark rather than a landing-site scene',
      imageCaption: 'Bayeux Cathedral: a town anchor, not a photograph of the landing coast.',
      purpose: 'Use Bayeux as a walkable historic base and make the coast day interpretable: choose a western or eastern corridor, reserve the last mile, and give memorial sites time rather than counting beaches.',
      summary: 'Plan Bayeux as two honest days: the Tapestry gallery is closed until autumn 2027, while the scattered landing coast needs a chosen sector, exact transport and a protected return.',
      choices: [
        ['Bayeux town and open museums', 'Walk from the station to the cathedral and the former episcopal palace. The MAHB’s 14 sections span prehistory to the 20th century; confirm its current opening and choose whether the Battle of Normandy museum fits your interests.'],
        ['Western coast corridor', 'NOMAD 120 runs from Bayeux toward Grandcamp-Maisy Monday through Saturday except public holidays and includes communes such as Colleville-sur-Mer and Port-en-Bessin. Match a dated timetable to the actual site entrance; the bus is not a door-to-door battlefield tour.'],
        ['Eastern landing sector', 'NOMAD 121 links Bayeux and Courseulles via Ryes, Arromanches, Asnelles and Ver-sur-Mer on weekdays in school and short school-vacation periods, plus two Saturday round trips all year except public holidays. A guided route can supply the chronology; choose it when a bus departure and return leave enough time at the sites.']
      ],
      access: 'Bayeux station is about a 10–15 minute walk from the museum area. The coast is dispersed: NOMAD lines 120 and 121 cover different corridors, some 120 trips vary by school period, and the 121 schedule is limited. For a cemetery or beach, identify the exact stop, walking connection and return from the current timetable—or reserve a guide, car or taxi before arrival.',
      tradeoff: 'No single day can do justice to Bayeux’s town museums and every landing sector. This guide trades name-count for one chronological route, time at memorials, and a return that does not depend on an improvised driver.',
      siteContext: {
        label: 'Town museums and a dispersed coast',
        heading: 'Separate what is open in Bayeux from what lies beyond it.',
        intro: 'Bayeux can support a full car-free town visit, but it is not a transport hub for every beach, cemetery and battery. Start with the distinction between a museum day and a selected coast corridor.',
        details: [
          ['The Tapestry gallery is closed', 'The official Bayeux Museum notice says renovation keeps the gallery closed until autumn 2027. The museum offers a free scene-by-scene online viewer; it is a useful preparation option, not an in-town substitute visit.'],
          ['A different palace collection', 'The MAHB occupies the former episcopal palace beside the cathedral. Its 14 sections cover European art and Bayeux history from prehistory to the 20th century; check the museum’s current hours before making it the indoor anchor.'],
          ['Two limited bus corridors', 'Line 120 runs Bayeux–Grandcamp-Maisy, Monday to Saturday except public holidays; selected departures are school-period dependent. Line 121 links Bayeux and Courseulles via the eastern coast on weekdays in school and short school-vacation periods, plus two Saturday round trips all year except public holidays. Read the current timetable, not just the route map.'],
          ['An image of the town', 'The guide photograph shows the cathedral and its towers. It helps orient the Bayeux day; it does not depict Omaha, a cemetery or a landing beach.']
        ]
      },
      stages: [
        ['Anchor the town day separately', 'Walk from the station to the cathedral quarter. Check the MAHB and Battle of Normandy museum notices; the Tapestry gallery remains closed for renovation, although its online scene viewer can prepare the story.'],
        ['Choose one coast corridor', 'Before booking, compare a guided sector with NOMAD 120 west or 121 east. Write down the exact stop, walking link, operating day and final return; the coast lines do not form a complete hop-on loop.'],
        ['Follow a sequence, not a checklist', 'For an American route, choose a connected Omaha-area story with the cemetery only if time and respectful conduct allow. For the eastern sector, select Gold, Juno or Sword with a guide who explains the relationship among the chosen sites.'],
        ['Return to Bayeux with space', 'Leave room for the transfer, weather or a delayed site visit before the last train. A quiet meal or short town walk is a better finish than racing to add another beach.']
      ],
      fallback: 'If coast transport or a tour fails, stay in Bayeux: use the cathedral and a museum confirmed open, then explore the old center. The Tapestry’s online viewer can be followed from your lodging, but do not describe it as an in-person museum visit.',
      watch: [
        ['The map hides the last mile', 'A bus stop in a commune may not place you at the cemetery or visitor center. Check the walking link, crossing conditions and a return before buying the outward ticket.'],
        ['The bus calendars differ', 'Line 120 can have school-period-only departures; line 121’s Saturday service is sparse and neither line operates as a full daily circuit. Compare the current operator timetable for your date.'],
        ['Memorials are active places of remembrance', 'Follow cemetery and museum rules, keep voices and photography respectful, and avoid staged poses on graves or markers. Give visitors and ceremonies space.']
      ],
      duration: 'Give the town museums and cathedral at least half a day. A coast sector merits a separate full day; two nights in Bayeux allow both without squeezing either against a long-distance connection.',
      combine: 'Combine Bayeux with one coast sector only. Keep Rouen, Mont-Saint-Michel and other landing areas for distinct travel days unless a planned multi-day vehicle route connects them.',
      verify: 'Check the current Bayeux Museum renovation notice, MAHB and Memorial Museum hours, NOMAD line 120 or 121 date-specific departures, site access, guide pickup and the return train.',
      sources: [
        ['https://www.bayeuxmuseum.com/en/the-bayeux-tapestry/', 'Bayeux Museum — Tapestry renovation notice and online viewer'],
        ['https://www.bayeuxmuseum.com/en/mahb-museum-of-art-and-history-bayeux/', 'Bayeux Museum — MAHB palace, collection and station access'],
        ['https://www.bayeuxmuseum.com/en/', 'Bayeux Museum — official museum notices and visitor information'],
        ['https://nomad.normandie.fr/lignes-de-cars/ligne-120', 'NOMAD line 120 — western corridor calendar and stops'],
        ['https://nomad.normandie.fr/lignes-de-cars/ligne-121', 'NOMAD line 121 — eastern corridor calendar and stops'],
        ['https://en.normandie-tourisme.fr/discover/d-day-and-the-battle-of-normandy/dday-landing-beaches/', 'Normandy Tourism — official D-Day coast orientation']
      ]
    }),
    franceGuide({
      slug: 'mont-saint-michel-bay',
      name: 'Mont-Saint-Michel & the Bay Approach',
      instrument: 'Tide-gate approach clock',
      layout: 'tidal-causeway-clock',
      imageQuery: 'Mont Saint Michel bay causeway France panorama',
      imageAlt: 'The abbey wall and upper buildings of Mont-Saint-Michel rising above the bay',
      imageCreditTitle: 'The abbey wall of Mont-Saint-Michel above the bay',
      imageCaption: 'The abbey rises above part of the bay; use the official route for safe access.',
      purpose: 'Separate the mainland transfer, safe approach, village climb and abbey visit so the tidal landscape can be read without risking the return or attempting an unsafe bay crossing.',
      summary: 'Pontorson station is about 9 km from the mount; the mainland shuttle or bus, village streets and abbey stairs are separate legs to plan before choosing a tide or sunset window.',
      choices: [
        ['Abbey and architecture', 'Reserve an entry window, reach the village early and budget for the climb and security. The abbey is a substantial sequence of rooms and levels, not a short stop after a bay walk.'],
        ['Approach and bay from safe ground', 'Use the mainland dam, causeway and approved viewpoints to read channels, polders and the mount’s changing outline. Keep the visit outside the bay unless joining an authorized guided crossing.'],
        ['Overnight at the bay', 'Choose lodging near the transfer you will actually use, then confirm the late return and what remains open. This gives changing light more room than forcing a same-day rail connection.']
      ],
      access: 'The nearest rail station is Pontorson, about 9 km from the mount. From the visitor parking area, the free Le Passeur shuttle and signed pedestrian approach run toward the village; the shuttle stops before the village, so count the remaining walk and steep stairs separately. Coaches and line 308 have their own stops and calendars. Private cars do not drive to the abbey gate.',
      tradeoff: 'The abbey, a guided bay crossing, sunset and a long rail return are separate time commitments. Choose one primary reason to come; this route protects the approach and onward connection instead of treating all four as guaranteed.',
      siteContext: {
        label: 'A monument built in vertical layers',
        heading: 'The ascent is part of the architecture, not a shortcut to the view.',
        intro: 'The abbey’s route climbs from the Guard Room through the Grand Degré to the church and northern Merveille. Moving upward reveals how the rocky summit, monastic rooms and fortifications occupy the same narrow footprint.',
        details: [
          ['A long construction sequence', 'Work on the church began in 1023. The Romanesque nave belongs to the earlier abbey; the choir collapsed in 1421 during the Hundred Years War and was rebuilt in Flamboyant Gothic about a century later.'],
          ['The Merveille above the bay', 'The early-13th-century north-side Merveille stacks monastic rooms over three floors. Its cloister uses 137 staggered columns and opens toward the bay through a small garden, so the view is framed by the gallery rather than a broad terrace.'],
          ['The first and last threshold', 'The Guard Room marked the former welcome to pilgrims. The Grand Degré then makes the climb explicit; on the way down, leave the upper village before crowds and shuttle queues consume the mainland margin.'],
          ['Village access and abbey entry differ', 'The village is freely accessible, while the abbey requires its own ticket and has separate opening and last-entry rules. Confirm both schedules; a village visit does not reserve access to the monument.']
        ]
      },
      stages: [
        ['Start at the mainland arrival point', 'Find the return stop, parking zone or coach bay before heading out. From Pontorson, match the dated regional service; from visitor parking, check the Le Passeur timetable and any current operating notice.'],
        ['Read the bay from the dam or causeway', 'Use the signed public approach and official viewing points to observe the channels and distance. Tide tables explain conditions; they are not permission to enter the bay on foot.'],
        ['Climb the monument in sequence', 'Allow for the village stairs and abbey security. Inside, the Guard Room and Grand Degré lead upward to the church and the northern Merveille; confirm current accessibility information before committing.'],
        ['Descend before the connection narrows', 'Leave time for the route back to the shuttle or coach stop and for a queue. Stay for evening light only if the last regional leg or overnight is already secured.']
      ],
      fallback: 'If abbey entry is unavailable, the lower village, signed approach and mainland viewpoints can still explain the mount and bay. If severe weather or transport interrupts access, remain on the mainland; do not substitute an improvised tidal crossing.',
      watch: [
        ['Tide does not make a crossing safe', 'Channels and quicksand-like sediment make the bay hazardous. Cross only with an authorized guide and current local conditions; never use a photograph or tide time as a route map.'],
        ['The climb is steep and crowded', 'The village and abbey route include stairs and narrow passages. Check official reduced-mobility guidance and ticket access before arrival.'],
        ['The final regional leg is separate', 'A shuttle arriving near the mount does not guarantee a connection to Pontorson or a long-distance train. Confirm both legs and preserve a delay margin.']
      ],
      duration: 'Allow five to seven hours on site including the mainland approach, village and abbey, plus the full transfer from Pontorson or your base. A guided bay crossing or an evening stay is a separate commitment.',
      combine: 'Pair the visit with an overnight near the bay or make it a dedicated transfer day. Do not add Bayeux, Saint-Malo and several Breton towns around a single abbey reservation.',
      verify: 'Check the abbey ticket, opening and accessibility notices; the visitor parking and shuttle; the dated regional bus or train; tide information; weather; and any authorized guide before departure.',
      sources: [
        ['https://www.ot-montsaintmichel.com/en/discover/visit-the-mont-saint-michel/access-the-mont-saint-michel/by-bus-and-coach/', 'Mont-Saint-Michel tourism office — bus, visitor parking and shuttle access'],
        ['https://www.abbaye-mont-saint-michel.fr/en/visit/practical-information', 'Abbey of Mont-Saint-Michel — tickets, hours and last entry'],
        ['https://www.abbaye-mont-saint-michel.fr/decouvrir/histoire-du-monument', 'Abbey of Mont-Saint-Michel — official building history and 1023–1421 chronology'],
        ['https://www.abbaye-mont-saint-michel.fr/en/discover/finding-your-way-around-the-monument', 'Abbey of Mont-Saint-Michel — official monument route and architectural history'],
        ['https://www.abbaye-mont-saint-michel.fr/en/discover/the-cloister-between-sky-and-sea', 'Abbey of Mont-Saint-Michel — the Merveille cloister and its columns'],
        ['https://www.ot-montsaintmichel.com/en/', 'Mont-Saint-Michel tourism office — current tide, weather and local notices']
      ]
    })
  ]
});
