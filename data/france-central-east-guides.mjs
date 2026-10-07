import { defineFranceCluster, franceGuide } from './france-guide-builder.mjs';

const g = franceGuide;
const c = defineFranceCluster;

export const franceCentralEastClusters = [
  c({
    slug: 'loire-valley',
    name: 'Loire Valley Châteaux',
    region: 'Centre-Val de Loire',
    band: 'valleys-east',
    family: 'river-estate-sequence',
    label: 'River and estate sequence',
    tagline: 'Follow the river corridors; give each estate its own arrival.',
    reviewDate: '7 October 2026',
    reviewDateISO: '2026-10-07',
    hubIntro: 'The Loire is not one château district with interchangeable stops. Blois places four centuries of royal building inside a walkable town, while Chambord sits beyond the station in a forest estate. Amboise pairs a Loire promontory and Leonardo’s last home; Chenonceau crosses the Cher from its own rail stop. West of Tours, Villandry is a garden visit with a seasonal château calendar, and Azay-le-Rideau is a separate branch-line town. Choose the corridor before choosing the number of tickets.',
    stay: 'Blois is the practical base for its urban château and a Rémi line 2 day at Chambord; Amboise keeps the Royal Château and Clos Lucé close while Chenonceau needs its own train excursion. Tours has the widest city choice for Villandry or Azay-le-Rideau. Pick one base around the sites you intend to enter, and check the return train before committing to a rural day.',
    transfer: 'The last mile is different at every stop: Rémi line 2 runs from Blois-Chambord station to Chambord in about 35 minutes; Amboise station is roughly a ten-minute walk from the Royal Château; Chenonceaux station is about 400 m from Chenonceau’s ticket office. Tours bus 32 stops about 280 m from Villandry, while Azay-le-Rideau station is a 2.1 km walk from its château. Recheck dated services and the final return.',
    season: 'The garden calendar changes the route. Villandry’s gardens remain open through the year except 25 December, while château opening is seasonal and outdoor hours may change in heat. Chenonceau is open daily through the year; Chambord’s château calendar has low-season closure days and holiday exceptions. Use each estate’s live calendar for the exact date, not a summer photograph or an old shuttle timetable.',
    fallback: 'When a rural link fails, make the town on your booked rail line the complete day: Blois has its royal apartments and Fine Arts Museum, Amboise has the royal site and Clos Lucé, and Tours has its cathedral, museums and old quarters. Do not replace one cancelled transfer with an unverified taxi chain. Keep the estate visit that still has a confirmed arrival and return.',
    faq: [
      ['Can I reach Chambord by train?', 'The train reaches Blois-Chambord station, not the château gate. Rémi line 2 currently links the station and estate in about 35 minutes; check the dated service and return before buying timed admission.'],
      ['Which Loire base suits a first visit?', 'Use Blois for Blois and Chambord, Amboise for its royal château and Clos Lucé, or Tours for a city stay with a Villandry or Azay excursion. Chenonceau is reached from its own Chenonceaux station.'],
      ['Can I visit Villandry gardens without the château?', 'Yes. Villandry sells a garden-only ticket separately from the combined château-and-gardens ticket; check the current calendar and heat-related hours before travelling.']
    ],
    sources: [
      ['https://www.remi-centrevaldeloire.fr/s-evader/chateau-chambord-lechappee-royale', 'Rémi — Blois-Chambord to the estate, line 2'],
      ['https://www.ter.sncf.com/centre-val-de-loire', 'SNCF TER Centre-Val de Loire — regional rail information'],
      ['https://www.loirevalley-france.co.uk/', 'Loire Valley — official regional tourism guide']
    ],
    guides: [
      g({
        slug: 'blois-chambord',
        name: 'Blois & Chambord',
        reviewDate: '7 October 2026',
        reviewDateISO: '2026-10-07',
        instrument: 'Town-to-domain shuttle docket',
        layout: 'royal-courtyard-ledger',
        imageQuery: 'Chateau de Chambord Loire Valley France panorama',
        imageAlt: 'Château de Chambord and its formal grounds in the Loire Valley',
        purpose: 'Compare Blois’s layered royal residence with François I’s vast forest domain while keeping the station-to-Chambord transfer and a realistic return inside the plan.',
        summary: 'Blois is an urban palace whose wings record changing dynasties; Chambord is a 1519 royal project surrounded by an estate. The 35-minute Rémi line 2 ride from Blois-Chambord station makes the pair possible, but the return timetable decides whether it is sensible.',
        siteContext: {
          label: 'Two royal projects, two scales',
          heading: 'Read the city palace before the forest monument.',
          intro: 'Blois preserves four architectural periods in sequence without leaving the town. Chambord asks you to step into a planned royal landscape, where the celebrated staircase is only one part of the visit.',
          details: [
            ['Blois, four periods', 'The château preserves medieval remains and wings built for Louis XII, François I and Gaston d’Orléans. The Fine Arts Museum occupies rooms in the Louis XII wing, so treat the visit as an architectural and collection route, not just a royal apartment tour.'],
            ['A court made visible', 'Henry III’s apartments are associated with the 1588 killing of the Duke of Guise during the Wars of Religion. Use the state rooms and official interpretation to understand the event’s political setting; the room is not a generic “royal bedroom.”'],
            ['Chambord’s double helix', 'François I began Chambord in 1519. Its central keep organizes four towers around a double-helix staircase. Leonardo da Vinci influenced the wider court culture, but the château’s architect is unknown; do not assign the building to Leonardo.'],
            ['Estate beyond the façade', 'Chambord’s collections exceed 4,500 objects and include works gathered from elsewhere. The château was not continuously furnished as a permanent royal home; combine the interiors with a chosen terrace or grounds loop rather than assuming every room is original to the building.']
          ]
        },
        choices: [
          ['Blois, rooms and collection', 'Follow the Gothic Louis XII wing into the François I Renaissance wing, then reserve time for the Fine Arts Museum. This is the most flexible option when the Chambord shuttle does not fit.'],
          ['Chambord and one estate loop', 'Choose the double-helix staircase, selected rooms and a short grounds circuit as the day’s center. Keep the return stop and estate closing time in view.'],
          ['A two-palace comparison', 'Pair a focused Blois visit with Chambord only when the dated line 2 departures leave protected time at both sites and a later Blois train remains available.']
        ],
        access: 'Blois–Chambord is the Blois railway station, not a station at the estate. Rémi line 2 currently runs from there to Chambord in about 35 minutes; confirm the service on the travel date, including the return. At the domain, check where the bus drops you and allow time for the walk between the entrance, château and stop. A bike or car is a separate plan, not an automatic fallback.',
        tradeoff: 'A two-palace day gives up the full Chambord grounds, a slow Fine Arts Museum visit and spontaneous river cycling. Keep the pairing only if the timetable supports an unhurried Blois interior and enough Chambord time for the rooms you selected.',
        stages: [
          ['Start at Blois station', 'Walk into the town and identify the Château Royal entrance, then locate the Rémi line 2 departure point and the last workable return before choosing a combination ticket.'],
          ['Read Blois by dynasty', 'Trace the medieval remains, Louis XII’s Gothic wing, François I’s Renaissance stair and the unfinished classical wing of Gaston d’Orléans. Enter the Fine Arts Museum if its rooms match your interest.'],
          ['Choose Chambord’s scale', 'At the 1519 domain, follow the double-helix staircase and a deliberate set of rooms; add a terrace or nearby grounds path only after checking current access and closing time.'],
          ['Return with a margin', 'Reach the line 2 stop with time for the estate path and the next service. If the timetable has no useful later return, do Chambord alone and keep Blois for a separate day.']
        ],
        fallback: 'If line 2 does not serve the needed return, make Blois the complete day: compare its four architectural periods and visit the Fine Arts Museum when open. If Blois is the fixed arrival, do not improvise a taxi chain to Chambord; use the estate only with a confirmed transfer.',
        watch: [
          ['Station name versus estate gate', '“Blois–Chambord” names the Blois station. The Rémi connection is a separate 35-minute ride; check its exact stop and dated return.'],
          ['A vast domain is not one room', 'The château, gardens and forest routes take different amounts of time. Set the turnaround before walking away from the bus stop.'],
          ['A two-site ticket cannot fix a timetable', 'Seasonal departures can make the pairing unusable. Confirm the service and each site’s closing hour before buying the second admission.']
        ],
        duration: 'Allow about three to four hours for Blois town and its château, then add the full transfer and the interior or grounds time you choose at Chambord. A same-day pairing needs most of a day; the actual Rémi schedule may rule it out.',
        combine: 'Combine Blois and Chambord only when a dated line 2 service allows protected time at each. Keep Cheverny, Chaumont and Chenonceau for another day; their additional road transfers do not belong in this town-to-domain sequence.',
        verify: 'Check Blois and Chambord admission calendars, the current Rémi line 2 timetable and stop, Chambord grounds access, and the last useful Blois train before booking the day.',
        faq: [
          ['Does the Blois-Chambord train station sit at Chambord?', 'No. It serves Blois. Rémi line 2 currently connects the station to the Chambord estate in about 35 minutes; verify the dated departure and return before treating it as a day trip.'],
          ['Was Chambord designed by Leonardo da Vinci?', 'The château’s architect is unknown. Leonardo’s influence on the court and the double-helix idea is discussed by the estate, but it is not sound to label him the architect.'],
          ['What should I see inside the Château de Blois?', 'Compare the medieval remains and the Gothic, Renaissance and classical wings. The Fine Arts Museum is housed in the Louis XII wing and makes the visit broader than the royal apartments alone.']
        ],
        sources: [
          ['https://www.chateaudeblois.fr/?lang=en', 'Château Royal de Blois — official visitor information'],
          ['https://en.chateaudeblois.fr/2194-four-architectural-styles.htm', 'Château de Blois — four architectural periods'],
          ['https://en.chateaudeblois.fr/2369-illustrious-historical-figures.htm', 'Château de Blois — Henri III and the Duke of Guise'],
          ['https://www.chambord.org/en/history/the-chateau/architecture/', 'Domaine national de Chambord — architecture and unknown architect'],
          ['https://www.chambord.org/en/history/the-chateau/the-collections/', 'Domaine national de Chambord — collections and court use'],
          ['https://www.remi-centrevaldeloire.fr/s-evader/chateau-chambord-lechappee-royale', 'Rémi — line 2 from Blois-Chambord station']
        ]
      }),
      g({
        slug: 'amboise-chenonceau',
        name: 'Amboise, Clos Lucé & Chenonceau',
        reviewDate: '7 October 2026',
        reviewDateISO: '2026-10-07',
        instrument: 'Leonardo-and-Cher branch line',
        layout: 'river-palace-diptych',
        imageQuery: 'Chateau Chenonceau Cher river Loire Valley France',
        imageAlt: 'Château de Chenonceau spanning the River Cher',
        purpose: 'Choose an Amboise story—royal residence or Leonardo’s last home—or give Chenonceau’s bridge-galleries and gardens a separate train day, without stacking three interiors.',
        summary: 'Amboise’s château rises above a Loire town and its station; Clos Lucé is a 400 m walk away. Chenonceau is another rail stop: the station stands roughly 400 m from the estate ticket office, so the river château can be visited without inventing a long last mile.',
        siteContext: {
          label: 'Promontory, workshop and river crossing',
          heading: 'Keep the three sites distinct in both meaning and movement.',
          intro: 'The Amboise pair fits on foot once you reach town. Chenonceau belongs to a different station and a different story: a Renaissance residence built across the Cher, repeatedly shaped by women who held political or estate power.',
          details: [
            ['Amboise above the Loire', 'The Royal Château occupies a promontory above the town. From Amboise station, cross toward the center and follow the sloping access route from Place Michel Debré; the château’s official visitor guidance describes this approach.'],
            ['Leonardo’s last home', 'Clos Lucé is about 400 m from the Royal Château. Leonardo spent the final years of his life there and is buried in the château chapel at Amboise. Clos Lucé’s standard self-guided admission includes the house, park and Leonardo galleries; the full visit takes time beyond the short walk.'],
            ['Chenonceau over water', 'The current château took shape from 1513 to 1517 under Thomas Bohier and Catherine Briçonnet, above the medieval Tour des Marques. Diane de Poitiers and Catherine de’ Medici each shaped the estate; Catherine used the Green Cabinet as a place of government.'],
            ['A gallery with wartime meaning', 'The long gallery crosses the Cher. During the Second World War, the river marked the boundary between occupied and free zones; the Menier family used the château’s position to help people escape. Read this within the estate’s own interpretation, not as a casual photo stop.']
          ]
        },
        choices: [
          ['Royal Amboise and the Loire', 'Follow the promontory rooms and town view, then descend to the old center. Use the sloped visitor approach from Place Michel Debré and allow time for the climb back.'],
          ['Clos Lucé and Leonardo', 'Spend the visit inside the house and in its park and galleries, all included in the standard self-guided ticket. The 400 m link to the Royal Château makes a second stop possible only with a deliberate time budget.'],
          ['Chenonceau and the Cher', 'Use Chenonceaux station for the nearby ticket office, then read the long gallery and one garden. Keep the estate as the day’s primary visit rather than squeezing it between two Amboise admissions.']
        ],
        access: 'Amboise station is across the Loire from the historic center; the château’s official visitor route uses the bridge and sloping Emir Abd El-Kader path from Place Michel Debré, about a ten-minute walk from the station entrance. Clos Lucé is 400 m from the Royal Château. Chenonceaux station is about 400 m from Chenonceau’s ticket office, but train frequency and the last return still control the day.',
        tradeoff: 'The Royal Château, Clos Lucé and Chenonceau each have enough rooms or grounds to fill a meaningful visit. A same-day three-site sprint loses the Amboise town context and reduces the Cher crossing to a timetable exercise; choose one Amboise site plus Chenonceau only if service times leave a recovery margin.',
        stages: [
          ['Arrive at the intended station', 'For Amboise, cross the Loire toward Place Michel Debré and the sloping château approach. For Chenonceau, follow the signed path from Chenonceaux station to the ticket office; check the return before entering.'],
          ['Choose the main story', 'At Amboise, follow the elevated royal residence; at Clos Lucé, use the house, park and galleries together; at Chenonceau, connect the bridge-galleries to the Cher and its women patrons.'],
          ['Add one contrasting place', 'Pair Amboise with Clos Lucé on foot, or pair one Amboise admission with Chenonceau only when the train leaves enough time for the distant site and its grounds.'],
          ['Keep a rail margin', 'Return to the correct platform with one service in reserve. If the chosen day cannot absorb a delay, finish the Amboise town route and leave Chenonceau for another date.']
        ],
        fallback: 'If an Amboise admission is unavailable, make the other site and old town the complete outing. If the Chenonceaux service is disrupted, stay with a confirmed Amboise plan rather than relying on an unbooked taxi; the stations are not interchangeable.',
        watch: [
          ['Amboise and Chenonceaux are different stations', 'The former serves Amboise town; the latter is the small station near Chenonceau. Confirm the destination code and return direction.'],
          ['Clos Lucé’s ticket covers more than a house', 'The standard visit includes the park and galleries. A 400 m map gap from the Royal Château is not the full visit duration.'],
          ['The Amboise approach rises from the river', 'The bridge and sloping visitor path take time, especially with bags or limited mobility. Check the official access route and luggage arrangements before arrival.']
        ],
        duration: 'Give several hours to one Amboise site and the town, or to Chenonceau and one garden. Clos Lucé’s standard self-guided visit includes the house, park and galleries and its official visitor information suggests about two to three hours; add the walk to or from the Royal Château separately.',
        combine: 'The easiest foot pairing is the Royal Château and Clos Lucé, separated by about 400 m. Combine one Amboise admission with Chenonceau only when the dated TER schedule allows the bridge walk, station approach, full visit and a backup return.',
        verify: 'Check current room and garden access, the Royal Château’s pedestrian approach, Clos Lucé ticket scope, Chenonceaux train times and the final train before buying admissions for the same day.',
        faq: [
          ['Can I walk from the Royal Château of Amboise to Clos Lucé?', 'Yes. The two sites are about 400 m apart. Clos Lucé’s standard self-guided ticket includes the château, park and Leonardo galleries, so plan for a full visit rather than only the short walk.'],
          ['How far is Chenonceaux station from the château?', 'The station is about 400 m from Chenonceau’s ticket office. Check the TER timetable for the exact date and keep a return service in reserve.'],
          ['Did Leonardo da Vinci design Chenonceau?', 'No. The current château was built from 1513 to 1517 under Thomas Bohier and Catherine Briçonnet. Leonardo’s connection is to Amboise and Clos Lucé, where he lived late in life and is buried in the château chapel.']
        ],
        sources: [
          ['https://www.chateau-amboise.com/en/', 'Royal Château of Amboise — visitor access and history'],
          ['https://www.vinci-closluce.com/en/prices/', 'Château du Clos Lucé — ticket scope and self-guided visit'],
          ['https://www.chenonceau.com/en/chateau/the-history-of-the-chateau/', 'Château de Chenonceau — history and gallery across the Cher'],
          ['https://www.chenonceau.com/en/practical-information/how-to-get-here/', 'Château de Chenonceau — access from Chenonceaux station'],
          ['https://www.chenonceau.com/en/practical-information/', 'Château de Chenonceau — current practical information']
        ]
      }),
      g({
        slug: 'tours-villandry-azay',
        name: 'Tours, Villandry & Azay-le-Rideau',
        reviewDate: '7 October 2026',
        reviewDateISO: '2026-10-07',
        instrument: 'Garden-and-rail choice matrix',
        layout: 'garden-corridor-matrix',
        imageQuery: 'Loire River, France landscape river boat',
        imageAlt: 'A small boat on the Loire beside a riverside path',
        purpose: 'Choose between Villandry’s reconstructed garden rooms and Azay-le-Rideau’s château on the Indre, using Tours as a city base instead of forcing two rural last miles into one day.',
        summary: 'Villandry sells separate garden-only and château-plus-garden admissions; its garden calendar lasts longer than the château’s. Azay-le-Rideau pairs a French-Italian Renaissance interior with an eight-hectare water-framed park, but the station is 2.1 km away.',
        siteContext: {
          label: 'Designed garden or water-framed château',
          heading: 'Two western estates, two different reasons to go.',
          intro: 'Villandry is read outdoors through a sequence of reconstructed formal gardens. Azay-le-Rideau places a 16th-century château on an island in the Indre and sets it inside a later landscaped park. A ticket and transport plan should reflect which layer you want to see.',
          details: [
            ['Villandry’s garden rooms', 'The estate’s terraces organize kitchen, ornamental and water gardens into distinct spaces, each with a different pattern and use. Joachim Carvallo bought the neglected estate in 1906 and recreated its Renaissance gardens from 1908 to 1918; the estate says they have been open to the public since 1920. Its account names painter Lozano and landscape architect Javier de Winthuysen among the collaborators on individual ornamental salons.'],
            ['Admission follows your interest', 'Villandry offers a garden-only ticket and a combined château-and-gardens ticket. Official planning guidance estimates about an hour inside the château and around an hour and a half in the gardens; use the current calendar because the château and gardens do not share identical opening dates.'],
            ['Azay on the Indre', 'Financier Gilles Berthelot began the château under François I. Its composition blends French and Italian Renaissance forms, with the river setting shaping the approach and views. The current landscaped park is a later layer, with paths, bridges and water mirrors across eight hectares.'],
            ['The last mile changes the ticket day', 'Touraine bus 32 stops at Villandry Centre, about 280 m from the entrance; the accessible R5 Résabus must be requested in advance. Azay-le-Rideau station is about 2.1 km from the château, so check a local link or plan the walk before relying on rail alone.']
          ]
        },
        choices: [
          ['Villandry, gardens only', 'Buy the garden-only admission when the parterres are your main interest. The 280 m walk from Touraine bus 32 makes this the simplest named public-transport approach from Tours.'],
          ['Villandry, château and gardens', 'Use the combined ticket when you want both the Renaissance rooms and outdoor garden sequence. Check seasonal château dates and heat adjustments; reserve the accessible R5 Résabus the previous day if needed.'],
          ['Azay-le-Rideau and the Indre', 'Take the Tours–Chinon rail branch only after planning the 2.1 km station-to-château gap. Give the interior and eight-hectare park a full half-day rather than adding Villandry by default.']
        ],
        access: 'Tours Centre and Saint-Pierre-des-Corps are separate rail nodes; check the arrival station before planning a local transfer. From Tours, bus 32 stops at Villandry Centre about 280 m from the gardens. Azay-le-Rideau is on the Tours–Chinon line, but the station-to-château walk is about 2.1 km. The accessible R5 Résabus to Villandry requires advance request, currently by the previous day.',
        tradeoff: 'Villandry and Azay each need time outdoors and have different last miles. Visiting both from Tours can consume the day in transfers and leave no protected time for the formal garden rooms or the château’s park. Choose one estate and keep Tours itself as the flexible city plan.',
        siteContext: {
          label: 'Designed garden or water-framed château',
          heading: 'Two western estates, two different reasons to go.',
          intro: 'Villandry is read outdoors through a sequence of reconstructed formal gardens. Azay-le-Rideau places a 16th-century château on an island in the Indre and sets it inside a later landscaped park. A ticket and transport plan should reflect which layer you want to see.',
          details: [
            ['Villandry’s garden rooms', 'The estate’s terraces organize kitchen, ornamental and water gardens into distinct spaces, each with a different pattern and use. The formal layout was restored by Joachim Carvallo and Ann Coleman after they acquired the property in 1906; the gardens opened to the public in 1920.'],
            ['Admission follows your interest', 'Villandry offers a garden-only ticket and a combined château-and-gardens ticket. Official planning guidance estimates about an hour inside the château and around an hour and a half in the gardens; use the current calendar because the château and gardens do not share identical opening dates.'],
            ['Azay on the Indre', 'Financier Gilles Berthelot began the château under François I. Its composition blends French and Italian Renaissance forms, with the river setting shaping the approach and views. The current landscaped park is a later layer, with paths, bridges and water mirrors across eight hectares.'],
            ['The last mile changes the ticket day', 'Touraine bus 32 stops at Villandry Centre, about 280 m from the entrance; the accessible R5 Résabus must be requested in advance. Azay-le-Rideau station is about 2.1 km from the château, so check a local link or plan the walk before relying on rail alone.']
          ]
        },
        stages: [
          ['Choose the Tours departure point', 'Confirm Tours Centre versus Saint-Pierre-des-Corps, and the correct bus stop or Tours–Chinon platform before starting the excursion.'],
          ['Reach one estate with a return plan', 'Use bus 32 for Villandry, prebook R5 if needed, or follow the rail and 2.1 km last mile for Azay. Save the return service before entering.'],
          ['Read the landscape you chose', 'At Villandry, follow the garden rooms from one terrace to another and decide whether the château interior belongs in the ticket. At Azay, connect the island setting to the later park paths and bridges.'],
          ['Return to Tours by the protected service', 'Allow the full walk from Azay station or the bus approach from Villandry. Keep a meal or old-town loop in Tours only after the booked return is secure.']
        ],
        fallback: 'If bus 32 or the branch train does not fit the date, spend the day in Tours: visit the cathedral and Musée des Beaux-Arts where open, walk the old center and follow the Loire edge. If heat changes garden hours, use Villandry’s current notice before switching to any indoor admission.',
        watch: [
          ['The bus stop is close, the service is date-specific', 'Touraine bus 32 serves Villandry Centre about 280 m away; check the current line calendar and return rather than assuming a frequent urban bus.'],
          ['Azay station is not the château entrance', 'The 2.1 km gap can be a significant walk with heat, bags or mobility limits. Verify a local option or use a transport mode that can complete the trip.'],
          ['Garden and château calendars diverge', 'Villandry’s gardens and château have different opening periods, with outdoor hours also affected by heat. Confirm what your ticket includes on the chosen date.']
        ],
        duration: 'Villandry’s official visit guidance allows about one hour for the château and roughly an hour and a half for the gardens. Azay needs time for its rooms, eight-hectare park and the 2.1 km station walk. Give either estate at least a half-day from Tours, plus the outbound and return service.',
        combine: 'Pair Tours with Villandry or Azay. Do not combine both by public transport without a dated connection plan that includes the Villandry bus or Azay’s 2.1 km station gap. Keep Amboise, Chenonceau and Chambord for separate corridor days.',
        verify: 'Check the 2026 Villandry garden and château calendar, heat-related hours, bus 32 or an advance R5 booking, and the Tours–Chinon service plus Azay station walk before selecting the estate.',
        faq: [
          ['Can I buy a Villandry garden-only ticket?', 'Yes. Villandry sells garden-only admission separately from the château-and-gardens ticket. Check the estate’s current calendar and heat-related opening notices for the date.'],
          ['How far is Azay-le-Rideau station from the château?', 'The château’s official access page gives the station walk as about 2.1 km. Check for a suitable local connection before treating the branch train as a door-to-door trip.'],
          ['Which Villandry bus stop should I use?', 'Touraine bus 32 serves Villandry Centre, about 280 m from the entrance. The accessible R5 Résabus is a separate service and currently needs to be requested the previous day.']
        ],
        sources: [
          ['https://www.chateauvillandry.fr/useful-information/prices-opening-times-how-to-get-there-how-to-visit-villandry/?lang=en', 'Villandry — admission, 2026 calendar and access'],
          ['https://www.chateauvillandry.fr/villandry-through-the-ages/the-gardens-of-villandry-are-restored-to-their-renaissance-glory/?lang=en', 'Villandry — garden reconstruction history and collaborators'],
          ['https://www.azay-le-rideau.fr/en/visit/practical-information', 'Château d’Azay-le-Rideau — 2026 practical information'],
          ['https://www.azay-le-rideau.fr/en/discover/history-of-the-castle', 'Château d’Azay-le-Rideau — history and architecture'],
          ['https://www.azay-le-rideau.fr/en/discover/the-landscaped-park', 'Château d’Azay-le-Rideau — landscaped park']
        ]
      })
    ]
  }),
  c({
    slug: 'champagne',
    name: 'Reims, Épernay & Champagne Country',
    region: 'Grand Est',
    band: 'valleys-east',
    family: 'cellar-reservation-book',
    label: 'Cellar and cathedral book',
    tagline: 'Reserve the cellar, respect the working landscape, protect the return.',
    hubIntro: 'Champagne travel combines cathedral cities, working cellars, regulated tastings and vineyard villages. Reims and Épernay are rail-friendly bases, while rural producers and southern Champagne need appointments or a clear last mile. Alcohol tasting also changes who can drive.',
    stay: 'Two nights support one city and one vineyard or second-city day. Reims offers the broadest rail and museum base; Épernay places the avenue and nearby vineyards closer; Troyes opens a separate southern circuit.',
    transfer: 'High-speed and regional trains connect the main cities, but cellar houses, villages and vineyards have different appointments and local transport. Never build a rural tasting day around spontaneous taxis alone.',
    season: 'Cellar visits operate year-round but schedules, harvest activity and village transport vary. Harvest is working time, not an open festival everywhere; winter offers quieter cities with shorter daylight.',
    fallback: 'When a rural visit cancels, keep the city’s cathedral, museums and one confirmed house. If tasting is no longer appropriate, use architecture and vineyard landscape without treating consumption as compulsory.',
    sources: [
      ['https://www.explore-grandest.com/en/champagne/', 'Explore Grand Est — official Champagne destination guide'],
      ['https://www.champagne.fr/en', 'Comité Champagne — official appellation and responsible-visit context'],
      ['https://www.ter.sncf.com/grand-est', 'TER Grand Est — official regional rail information']
    ],
    guides: [
      g({
        slug: 'reims-cathedral-cellars',
        name: 'Reims Cathedral & Cellar Districts',
        instrument: 'Cathedral-to-crayère reservation spine',
        layout: 'ceremonial-city-spine',
        imageQuery: 'Reims Cathedral facade France Champagne',
        imageAlt: 'The sculpted façade of Reims Cathedral',
        purpose: 'Connect Reims’s cathedral and coronation history to one reserved cellar house, accounting for the distance between the center and the chalk-cellar districts.',
        summary: 'Use the cathedral and Palais du Tau context in the center, then travel to one house whose tour language, time and tasting conditions are confirmed.',
        choices: [
          ['Cathedral and city history', 'Prioritize the cathedral, civic center and museums. This is a complete non-tasting day and the best option when cellar slots do not align.'],
          ['One major cellar house', 'Reserve a specific tour and build the day around its district. Cellar temperature, stairs and tasting rules belong in the plan.'],
          ['Reims plus vineyard edge', 'Use an arranged excursion to a nearby village or producer after a compact city morning. The rural pickup and designated driver must be explicit.']
        ],
        access: 'Reims Centre station serves the core; Champagne-Ardenne TGV may require a tram or train connection. Many cellar houses are south or east of the cathedral center, so use the current urban route and exact visitor entrance.',
        tradeoff: 'Two cellar tours can repeat production explanations and crowd out the cathedral. The route chooses one house and one historic layer, leaving comparison tasting or rural producers for another day.',
        stages: [
          ['Enter through the correct station', 'Confirm whether the train ends at Reims Centre or Champagne-Ardenne TGV and complete the urban transfer before the first reservation.'],
          ['Read the coronation center', 'Use the cathedral, exterior sculpture and nearby interpretation in a compact loop. Respect services and temporary access controls.'],
          ['Travel to one booked cellar', 'Arrive at the named visitor reception, dress for cool underground conditions and follow the tour’s age, mobility and language rules.'],
          ['Return without driving pressure', 'Use tram, bus, taxi or a designated driver and finish near the center. Leave time after tasting before the train and eat before more alcohol.']
        ],
        fallback: 'If the cellar cancels, deepen the cathedral and museum day or reserve a city-based tasting only through a current official provider. If cathedral access pauses, use the exterior and Musée Saint-Remi or another confirmed collection.',
        watch: [
          ['Cellars are cool and physical', 'Long stairs, uneven surfaces and low temperatures may affect visitors; check accessibility directly with the house.'],
          ['TGV station assumptions cause delays', 'Champagne-Ardenne TGV is not the cathedral station. Build the connector into every timed booking.'],
          ['Tasting needs a transport decision', 'Do not drive after alcohol. Confirm a sober driver, transit or tour before the first glass.']
        ],
        duration: 'Allow six to eight hours for cathedral context, meal and one cellar tour. A rural producer excursion or second house needs another half or full day.',
        combine: 'Combine the center with one Reims cellar district. Keep Épernay’s avenue and vineyard villages for a separate day.',
        verify: 'Check cathedral access, the cellar house reservation and language, Reims transit and the correct TGV or central station before departure.',
        sources: [
          ['https://www.reims-tourisme.com/en/', 'Reims Tourism — official city and cellar planning'],
          ['https://www.cathedrale-reims.com/', 'Notre-Dame de Reims Cathedral — official visitor information']
        ]
      }),
      g({
        slug: 'epernay-avenue-vineyards',
        name: 'Épernay, Avenue de Champagne & Vineyard Villages',
        instrument: 'Appointment-and-driver ledger',
        layout: 'cellar-avenue-ledger',
        imageQuery: 'Epernay Avenue de Champagne vineyard France',
        imageAlt: 'Champagne vineyards near Épernay in northern France',
        purpose: 'Choose between an urban house visit and a rural producer route, then solve appointments and sober transport before arriving in Épernay.',
        summary: 'The Avenue de Champagne is walkable from town; the vineyards are not a free-form extension. One booked house plus one safely reached village creates the useful day.',
        choices: [
          ['Avenue and house tour', 'Stay in Épernay for one major house, the avenue and town. This is the clearest rail-based option.'],
          ['Small-producer appointments', 'Arrange visits in one village cluster with a driver, guide, bicycle plan or sober car. Appointments and distances determine the route.'],
          ['Landscape without a tasting chain', 'Use a guided walk, viewpoint or museum context and keep alcohol optional. This suits families, non-drinkers and active travelers.']
        ],
        access: 'Épernay station is close to the center and avenue, but rural villages spread along both sides of the Marne. Confirm the exact producer address, appointment, parking or pickup and return before leaving town.',
        tradeoff: 'Multiple appointments reduce flexibility and encourage unsafe rushing. The route gives up a long producer list so one house, one village cluster and a meal can be experienced responsibly.',
        stages: [
          ['Orient at Épernay station', 'Walk toward the avenue, identify the reserved house and establish the pickup or bicycle point for any rural segment.'],
          ['Complete one urban appointment', 'Use the cellar tour to understand production and storage, then pause for food and water rather than stacking an immediate second tasting.'],
          ['Commit to one village cluster', 'Travel only through the pre-arranged method. Keep appointments geographically close and respect working yards and private vineyards.'],
          ['Return sober and early enough', 'Reach Épernay with a backup train or remain overnight. The driver should not participate in tastings, even when pours seem small.']
        ],
        fallback: 'If a producer cancels, remain in Épernay for the avenue, a confirmed house, museum or self-guided town route. Do not knock on unlisted cellar doors or enter vineyard rows as public trails.',
        watch: [
          ['Appointments are real commitments', 'Small producers may be working and cannot absorb late arrivals. Reconfirm and cancel promptly if plans change.'],
          ['Vineyards are working property', 'Use signed paths and public roads; avoid rows during operations and never treat harvest as a spectacle without permission.'],
          ['Bicycle and alcohol conflict', 'Cycling still requires sobriety and road awareness. A guided bicycle product is not permission to over-taste.']
        ],
        duration: 'Allow six to eight hours for Épernay plus one nearby village cluster. An avenue-only day needs four to six hours; several producer visits require an overnight and arranged transport.',
        combine: 'Combine one Épernay house with one village or landscape activity. Keep Reims cathedral and Troyes for separate rail days.',
        verify: 'Confirm every cellar appointment, tour language, designated transport, harvest or road restrictions and the final Épernay train.',
        sources: [
          ['https://www.epernay-tourisme.com/en/', 'Épernay Pays de Champagne tourism — official planning'],
          ['https://www.champagne.fr/en/visit-champagne', 'Comité Champagne — official visiting and producer context']
        ]
      }),
      g({
        slug: 'troyes-southern-champagne',
        name: 'Troyes & Southern Champagne',
        instrument: 'Timber-and-vine southern folio',
        layout: 'medieval-vine-folio',
        imageQuery: 'Troyes old town half timbered houses France',
        imageAlt: 'Colorful half-timbered houses in the historic center of Troyes',
        purpose: 'Give Troyes’s half-timbered city and stained-glass collections an independent day, adding southern Champagne only through a deliberate appointment or landscape route.',
        summary: 'Troyes is not a consolation stop after Reims: its compact medieval streets, churches and museums support a complete city route before any vineyard transfer.',
        choices: [
          ['Historic Troyes', 'Follow the “cork-shaped” center, cathedral and selected churches, using one museum or stained-glass collection as the indoor anchor.'],
          ['Textile and design context', 'Use Troyes’s industrial and outlet history selectively, keeping the historic center as a contrasting layer rather than a shopping transfer.'],
          ['Côte des Bar excursion', 'Arrange one southern producer or vineyard landscape route with transport and appointments. This is a separate rural contract from the city walk.']
        ],
        access: 'Troyes station is walkable to the historic center. Côte des Bar villages lie much farther south and generally need a car, guide or arranged transfer; do not infer a rural route from the city’s Champagne name.',
        tradeoff: 'A rural excursion removes time for several churches and museums. The route gives up outlet shopping or an additional producer so Troyes remains more than a lunch stop.',
        stages: [
          ['Enter the cork-shaped center', 'Walk from the station through the western edge, identify the return route and begin with the market or central streets.'],
          ['Read timber, church and glass', 'Connect cathedral and selected churches with a stained-glass or museum interior. Check religious closures rather than assuming every door is open.'],
          ['Choose city depth or Côte des Bar', 'Continue through lanes and collections, or meet the booked rural transport. One choice should own the afternoon.'],
          ['Return through a simple western line', 'Finish near the station side of the center or return from the Côte des Bar with enough road margin for the booked train.']
        ],
        fallback: 'If a rural appointment fails, use Troyes’s museums, cathedral and old streets. If churches close, the Cité du Vitrail or another current collection can carry the interpretation without an unscheduled drive.',
        watch: [
          ['Church access changes around services', 'Keep the street and museum route useful even when an interior pauses.'],
          ['Côte des Bar is not suburban Troyes', 'Road distance and sparse transit require a vehicle and sober-driver plan.'],
          ['Outlet districts consume time', 'If shopping is a priority, treat it as the main second block rather than a quick stop between heritage sites.']
        ],
        duration: 'Allow five to seven hours for Troyes and a full day for a city-plus-Côte des Bar itinerary. Rural appointments work best with an overnight.',
        combine: 'Combine Troyes with one southern Champagne appointment or nearby lake only on a planned road day. Keep Reims and Épernay on their own northern corridor.',
        verify: 'Check Troyes museum and church access, any Côte des Bar appointment, road conditions, responsible transport and the final train.',
        sources: [
          ['https://en.troyeslachampagne.com/', 'Troyes La Champagne tourism — official city guide'],
          ['https://www.lacotedesbar.com/en/', 'Côte des Bar tourism — official southern Champagne planning']
        ]
      })
    ]
  }),
  c({
    slug: 'alsace',
    name: 'Strasbourg, Colmar & the Alsace Wine Route',
    region: 'Alsace, Grand Est',
    band: 'valleys-east',
    family: 'rhine-vineyard-fold',
    label: 'Rhine and vineyard fold',
    tagline: 'Use rail for the cities and appointments for the villages.',
    hubIntro: 'Strasbourg and Colmar are strong rail cities with different urban rhythms; the wine-route villages sit on a patchwork of trains, buses, bicycles and roads. A useful Alsace trip separates city depth from a village circuit and does not reduce living communities to façades.',
    stay: 'Three nights support Strasbourg, Colmar and one village or castle day. Strasbourg is the stronger international and museum base; Colmar shortens access to central wine-route villages.',
    transfer: 'Regional rail links Strasbourg, Sélestat, Colmar and Mulhouse well, but the final village may require a bus, bicycle, seasonal shuttle, tour or car. Check Sunday and evening returns carefully.',
    season: 'Christmas-market periods transform crowding, prices and security; summer increases village and bicycle pressure. Harvest remains working time, while winter reduces some castle, bus and cellar options.',
    fallback: 'Use Strasbourg or Colmar collections when village buses, heat or storms undermine the route. A closed castle should become a signed lower walk or city day, not a scramble onto an unsafe trail.',
    sources: [
      ['https://www.visit.alsace/en/', 'Visit Alsace — official regional tourism guide'],
      ['https://www.ter.sncf.com/grand-est', 'TER Grand Est — official regional rail information'],
      ['https://www.fluo.grandest.fr/', 'Fluo Grand Est — official regional journey planning']
    ],
    guides: [
      g({
        slug: 'strasbourg-grande-ile',
        name: 'Strasbourg Grande Île & European Quarter',
        instrument: 'Island-to-institutions tram map',
        layout: 'rhine-civic-axis',
        imageQuery: 'Strasbourg cathedral Petite France river France',
        imageAlt: 'Strasbourg Cathedral and historic center near the river',
        purpose: 'Choose between the cathedral-and-river historic core and the European institutions, then connect them by tram without compressing both into a superficial loop.',
        summary: 'Walk Grande Île by cathedral, canals and civic streets, then use one tram move for either the Neustadt or European Quarter as the second urban layer.',
        choices: [
          ['Grande Île in depth', 'Keep the cathedral, Maison Kammerzell area, river edges and Petite France together. This is a complete first day without institutions.'],
          ['Cathedral and Neustadt', 'Pair medieval and imperial urban layers through Place de la République and selected museums. The route remains mostly central.'],
          ['European Quarter', 'Use a current booked visit or exterior civic route around the institutions. This requires calendar and security checks, not just a tram ticket.']
        ],
        access: 'Strasbourg station connects to the center by tram or a direct walk. Trams cross the historic area but cathedral-side pedestrian controls and market events may alter the final approach; use the current network map and named stop.',
        tradeoff: 'The European Quarter removes time from Petite France and museums. The route gives up a wine-route village so Strasbourg’s medieval, imperial or European identity can be read properly.',
        stages: [
          ['Enter through station and river ring', 'Move from the station toward Grande Île, noting the tram stop for the return and any event perimeter before entering narrow streets.'],
          ['Anchor at the cathedral', 'Use the exterior, current interior access and surrounding urban fabric; timed astronomical-clock or platform products should be treated as separate reservations.'],
          ['Choose canal, Neustadt or Europe', 'Walk Petite France, continue to the Neustadt, or take the tram to an arranged institution visit. Do not attempt all three after a long cathedral queue.'],
          ['Return on a different city edge', 'Use the river ring or tram to finish near the station, avoiding a second pass through the busiest cathedral lanes.']
        ],
        fallback: 'In rain or security closures, use one of Strasbourg’s museums and the covered tram network. If an institution visit cancels, substitute the Neustadt or a river circuit, not a distant wine village.',
        watch: [
          ['Cathedral products differ', 'Free worship access, platform access and clock presentation can use different schedules and lines.'],
          ['Market periods rewrite circulation', 'Christmas and major events add security gates and crowd channels. Allow extra time and avoid large luggage.'],
          ['Institutions are working buildings', 'Tours may require advance registration, identity documents and security. Confirm the exact institution and entrance.']
        ],
        duration: 'Allow six to eight hours for Grande Île plus one second district. A booked institution tour can turn the route into a full day.',
        combine: 'Combine Grande Île with Neustadt or the European Quarter. Keep Colmar and wine-route villages for separate rail days.',
        verify: 'Check cathedral notices, CTS tram service, institution-tour confirmation, museum openings and any event security perimeter before departure.',
        sources: [
          ['https://www.visitstrasbourg.fr/en/', 'Strasbourg Tourist Office — official city planning'],
          ['https://www.cts-strasbourg.eu/en/', 'CTS Strasbourg — official tram and bus information']
        ]
      }),
      g({
        slug: 'colmar-canals-museums',
        name: 'Colmar Canals, Old Town & Museums',
        instrument: 'Canal-and-collection walking score',
        layout: 'canal-museum-score',
        imageQuery: 'Colmar Petite Venise canal France Alsace',
        imageAlt: 'Half-timbered houses and canal in Colmar’s Petite Venise',
        purpose: 'Decide whether Colmar is a museum city, a market-and-canal walk or the base for a village day, then use a clear station loop instead of repeating Petite Venise.',
        summary: 'Use the Unterlinden Museum or another selected interior as the attention anchor, then connect the old town and canal without repeating the same crowded lanes.',
        choices: [
          ['Unterlinden and art history', 'Give the museum the long block and use the old town as approach and decompression. This is the strongest wet-weather plan.'],
          ['Market and canal city', 'Focus on covered market, Petite Venise, civic streets and architecture. This favors street rhythm over a large collection.'],
          ['Colmar as a village base', 'Keep the city to a compact morning or evening and reserve the main day for one verified wine-route excursion.']
        ],
        access: 'Colmar station is south-west of the old town. Walk a loop that enters through the museum or Champ de Mars side and exits through the canal or market side, rather than using Petite Venise as an out-and-back photo stop.',
        tradeoff: 'Colmar plus several villages creates a transport-heavy day with little museum time. The route either treats Colmar as the main city or as the base; it does not pretend both roles fit without sacrifice.',
        stages: [
          ['Enter through the museum side', 'From the station, pass Champ de Mars toward Unterlinden or the northern old-town edge, confirming luggage and return timing.'],
          ['Complete one collection or civic route', 'Use the museum’s current galleries, or trace Maison des Têtes, the Dominican church area and civic streets without rushing to the canal.'],
          ['Cross market and canal once', 'Move through the covered market and Petite Venise, respecting resident doors and narrow bridges. Use quieter lanes for the return.'],
          ['Close the loop toward the station', 'Exit through the southern center and Champ de Mars, leaving a meal or wine tasting within walking distance of the train.']
        ],
        fallback: 'If weather turns, use Unterlinden and another confirmed museum or church interior. If the museum closes, retain the architecture, market and canal loop rather than boarding an unverified village bus.',
        watch: [
          ['Petite Venise bottlenecks', 'Narrow bridges are circulation space, not private photo sets. Keep moving and use side streets for longer pauses.'],
          ['Market and museum calendars differ', 'Check Monday, holiday and seasonal hours before assigning the morning.'],
          ['Wine tasting still needs limits', 'City-center tastings do not remove alcohol responsibility or the need to catch the correct train.']
        ],
        duration: 'Allow five to seven hours with Unterlinden and a meal; three to four hours suits a street-and-market loop. A village excursion should have its own half or full day.',
        combine: 'Combine Colmar with one nearby village only when transit is direct and the museum plan is short. Keep Strasbourg as another full city day.',
        verify: 'Check Unterlinden and market opening, Colmar local events, regional rail and any selected village connection before setting the route.',
        sources: [
          ['https://www.tourisme-colmar.com/en/', 'Colmar Tourist Office — official city guide'],
          ['https://www.musee-unterlinden.com/en/', 'Unterlinden Museum — official visitor information']
        ]
      }),
      g({
        slug: 'alsace-wine-route-villages',
        name: 'Alsace Wine Route Villages',
        instrument: 'Village-cluster sober route',
        layout: 'vineyard-village-cluster',
        imageQuery: 'Alsace wine route village vineyards France Riquewihr',
        imageAlt: 'An Alsace wine-route village surrounded by vineyards',
        purpose: 'Choose one connected village cluster and a sober transport method, replacing the impossible goal of collecting every half-timbered village on the 170-kilometre route.',
        summary: 'Use Sélestat, Colmar or another rail gateway to reach one village pair, one walk and one reserved producer, with the return fixed before tasting.',
        choices: [
          ['Central village pair', 'Select two nearby places such as Kaysersberg and Riquewihr or Eguisheim and Colmar’s edge, based on current bus or bicycle links.'],
          ['Vineyard walk', 'Choose one signed trail with a clear start, finish and weather plan. Working vines and harvest equipment require respectful boundaries.'],
          ['Castle and village', 'Pair a village with Haut-Koenigsbourg or another open site through the verified shuttle or car route. This substitutes for a second village cluster.']
        ],
        access: 'Regional trains reach Strasbourg, Sélestat, Colmar and other gateways; most famous villages need a bus, bicycle, seasonal shuttle, tour or car. Build the exact outward and return chain, including the stop side and Sunday service.',
        tradeoff: 'The route gives up the full Wine Route. Two villages and one appointment already fill a useful day once meals, walking and rural transport are honest.',
        stages: [
          ['Choose a gateway from the live timetable', 'Arrive at Sélestat, Colmar or another station and locate the rural connection before leaving for breakfast or sightseeing.'],
          ['Read one village before tasting', 'Walk the public streets, interpretation and vineyard edge first, keeping resident lanes and working yards clear.'],
          ['Commit to one producer or castle', 'Honor the reservation and use a sober driver or transit. If visiting a castle, follow current trail or shuttle access and closing times.'],
          ['Return through a second nearby stop', 'Add only a village on the same connection; otherwise return directly to the gateway with one service in reserve.']
        ],
        fallback: 'If rural transit or weather fails, remain in Colmar, Sélestat or Strasbourg. If a producer cancels, use a public vineyard trail or museum only where officially open; do not enter private cellars or rows.',
        watch: [
          ['Village buses can be sparse', 'A morning departure may have no symmetric evening return. Save the full timetable, not a single journey result.'],
          ['Harvest is active work', 'Keep clear of machinery, do not pick grapes and follow any temporary route closure.'],
          ['A designated driver must remain sober', 'Small pours add up across appointments. Use a tour, taxi or transit if everyone wishes to taste.']
        ],
        duration: 'Allow a full day for two nearby villages and one appointment. A castle or long vineyard walk should replace, not supplement, the second cluster.',
        combine: 'Combine villages that share one transit or bicycle corridor. Do not add Strasbourg, multiple castles and both ends of the Wine Route in one day.',
        verify: 'Check Fluo or TER connections, producer appointment, castle access, trail condition, harvest notices and weather before leaving the gateway.',
        sources: [
          ['https://www.visit.alsace/en/the-alsace-wine-route/', 'Visit Alsace — official Wine Route planning'],
          ['https://www.haut-koenigsbourg.fr/en/', 'Haut-Koenigsbourg Castle — official access and visits']
        ]
      })
    ]
  }),
  c({
    slug: 'burgundy',
    name: 'Dijon, Beaune & Burgundy',
    region: 'Bourgogne-Franche-Comté',
    band: 'valleys-east',
    family: 'climat-cellar-atlas',
    label: 'Climat and cellar atlas',
    tagline: 'Separate ducal city, wine capital and abbey country.',
    hubIntro: 'Burgundy’s “climats” are working vineyard parcels, not a single attraction road. Dijon and Beaune are rail-connected city bases; the Route des Grands Crus and abbey hills require a bicycle, tour, car or rural connection plus responsible tasting decisions.',
    stay: 'Two or three nights between Dijon and Beaune support both cities and one vineyard or abbey day. Dijon has broader rail and museum depth; Beaune makes cellars and the southern Côte-d’Or easier.',
    transfer: 'Frequent regional trains join Dijon and Beaune, but vineyard villages and abbeys need a deliberate last mile. Bicycle routes can be excellent yet still require weather, rental hours and sober riding.',
    season: 'Harvest alters vineyard traffic and appointment availability; summer increases heat and bicycle pressure. Winter favors city collections and cellar visits, while rural openings and daylight can be limited.',
    fallback: 'Use Dijon or Beaune museums and markets when rural appointments or weather fail. A cancelled tasting should become architecture, food and landscape—not a search for an unverified cellar door.',
    sources: [
      ['https://www.burgundy-tourism.com/', 'Burgundy Tourism — official regional guide'],
      ['https://www.ter.sncf.com/bourgogne-franche-comte', 'TER Bourgogne-Franche-Comté — official rail information'],
      ['https://www.climats-bourgogne.com/en/', 'Climats of Burgundy — official World Heritage interpretation']
    ],
    guides: [
      g({
        slug: 'dijon-ducal-city',
        name: 'Dijon Ducal City & Markets',
        instrument: 'Owl-trail civic register',
        layout: 'ducal-city-register',
        imageQuery: 'Dijon Palace of Dukes Burgundy France old town',
        imageAlt: 'The Palace of the Dukes in Dijon’s historic center',
        purpose: 'Use Dijon’s ducal center, Musée des Beaux-Arts and market streets as a complete city decision, not merely a platform before the vineyards.',
        summary: 'Follow the compact center from station to ducal palace, choose one collection, and use market or gastronomy stops without turning branded foods into the whole story.',
        choices: [
          ['Ducal history and fine arts', 'Give the palace complex and Musée des Beaux-Arts the main block, then use the Owl Trail for urban context.'],
          ['Market and architecture', 'Prioritize Les Halles, timbered streets, churches and civic façades. This is more flexible but depends on market day and religious access.'],
          ['Dijon plus vineyard edge', 'Use the city early, then join a pre-arranged Côte de Nuits excursion. The rural transport and sober return replace a second museum.']
        ],
        access: 'Dijon-Ville station is walkable to the historic center by avenue and pedestrian streets. If continuing to a vineyard, meet the operator at a named point rather than assuming departures use the station forecourt.',
        tradeoff: 'A Côte de Nuits excursion removes time for the art museum and long market lunch. The route gives up one city layer so Dijon remains legible rather than a hurried pre-tasting walk.',
        stages: [
          ['Enter on the station-to-palace line', 'Walk through the western center, note the return route and use the Owl Trail markers as orientation rather than a requirement to collect every plaque.'],
          ['Anchor at the ducal complex', 'Use the palace courtyards and selected museum galleries. Check current room access before planning around a single artwork.'],
          ['Choose market or vineyard', 'Continue through Les Halles and churches, or meet the arranged rural transport. Eat before tasting and keep purchases manageable for the return.'],
          ['Finish near a direct station route', 'Use Darcy or the western center for the final stop so the train does not require another cross-city loop.']
        ],
        fallback: 'If the vineyard trip cancels, use the Musée des Beaux-Arts, Musée de la Vie Bourguignonne or covered market where open. If a museum closes, the Owl Trail and church exteriors still produce a coherent city route.',
        watch: [
          ['Market days and hours matter', 'Do not build the food section around Les Halles without checking the current trading schedule.'],
          ['Museum scale can absorb the afternoon', 'Select galleries and stop before a rural appointment becomes rushed.'],
          ['Tastings change the return', 'Use a tour, driver or train; the person driving the vineyard route remains sober.']
        ],
        duration: 'Allow five to seven hours for Dijon city and a full day if adding one vineyard cluster. The art museum alone can justify several hours.',
        combine: 'Combine Dijon with a short, arranged Côte de Nuits visit. Keep Beaune, Vézelay and Fontenay as separate days.',
        verify: 'Check museum and market opening, any tower reservation, vineyard pickup, urban access and the return train before setting the order.',
        sources: [
          ['https://en.destinationdijon.com/', 'Dijon Tourism — official city planning'],
          ['https://beaux-arts.dijon.fr/', 'Musée des Beaux-Arts de Dijon — official visitor information']
        ]
      }),
      g({
        slug: 'beaune-hospices-vineyards',
        name: 'Beaune Hospices & Vineyard Edge',
        instrument: 'Hospices-and-climat ledger',
        layout: 'wine-capital-ledger',
        imageQuery: 'Hospices de Beaune Hotel Dieu Burgundy France roof',
        imageAlt: 'Colorful tiled roofs of the Hospices de Beaune',
        purpose: 'Anchor Beaune on the Hôtel-Dieu and walled center, then choose one cellar or vineyard-edge experience with a responsible return.',
        summary: 'The Hospices provide the civic and medical-history center; a booked cellar or signed vineyard walk becomes the second layer, not a string of anonymous tastings.',
        choices: [
          ['Hôtel-Dieu and walled town', 'Give the Hospices collections, rampart edge and market streets the full city day. This works by rail without a rural transfer.'],
          ['Cellar appointment', 'Reserve one house whose tour and tasting style fit. Pair it with the Hospices rather than stacking several commercial visits.'],
          ['Vineyard edge by foot or bicycle', 'Use an official signed route toward nearby climats with weather, rental and sobriety limits. This replaces a long interior block.']
        ],
        access: 'Beaune station is an easy walk from the center. Cellars may be central, but vineyard villages require a bicycle, tour, taxi or car; verify rental return hours and do not treat a tasting route as ordinary cycling.',
        tradeoff: 'The Hospices, wine museum, multiple cellars and a vineyard ride do not fit meaningfully into one day. The route keeps one heritage anchor and one wine-landscape choice.',
        stages: [
          ['Walk from station to the walls', 'Enter the center from the east, noting the station return and any luggage storage before joining market or Hospices queues.'],
          ['Complete the Hôtel-Dieu narrative', 'Use the official circuit and current exhibition spaces, allowing time for the hospital, art and charitable history rather than only roof photographs.'],
          ['Choose cellar or climat', 'Attend one reservation, or follow a signed low-risk walking or cycling segment. Stay on public paths and clear of vineyard work.'],
          ['Return through the walled center', 'Eat and rehydrate, collect purchases and reach the station or lodging without relying on a last-minute taxi.']
        ],
        fallback: 'In bad weather, retain the Hospices, wine museum or another confirmed town interior. If a cellar cancels, use the public rampart and market route; do not solicit private producers without appointments.',
        watch: [
          ['Wine purchases become luggage', 'Plan storage and carrying before buying bottles on a rail day.'],
          ['Cycling still requires sobriety', 'Limit or skip alcohol and use a guided or driven route when tastings are the purpose.'],
          ['Vineyards are workplaces', 'Do not enter rows, handle grapes or obstruct machinery, especially at harvest.']
        ],
        duration: 'Allow five to seven hours for Beaune and one cellar. A vineyard bicycle route needs a full day and should reduce museum time.',
        combine: 'Combine the Hospices with one cellar or a short climat route. Keep Dijon city and distant abbeys for separate days.',
        verify: 'Check Hospices tickets, cellar appointment, bicycle or tour conditions, harvest activity and the final train before starting.',
        sources: [
          ['https://musee.hospices-de-beaune.com/acces-et-tarifs', 'Hospices Civils de Beaune — official Hôtel-Dieu visits'],
          ['https://www.beaune-tourism.com/', 'Beaune & Pays Beaunois tourism — official local planning']
        ]
      }),
      g({
        slug: 'vezelay-fontenay-abbeys',
        name: 'Vézelay, Fontenay & Abbey Country',
        instrument: 'Abbey-hill last-mile chart',
        layout: 'monastic-landscape-chart',
        imageQuery: 'Vezelay basilica hill Burgundy France panorama',
        imageAlt: 'The sculpted western façade of Vézelay Basilica in Burgundy',
        purpose: 'Choose one abbey landscape and solve its rural access, rather than assuming Vézelay and Fontenay form an easy public-transport pair.',
        summary: 'Vézelay is a pilgrimage hill with a steep village approach; Fontenay is a secluded Cistercian domain. Each deserves its own last mile, quiet reading and return.',
        choices: [
          ['Vézelay hill and basilica', 'Use the village climb, basilica and viewpoints as one route. Rail travelers need the current connection from a regional station.'],
          ['Fontenay Abbey', 'Make the preserved monastic complex and valley setting the sole rural anchor. A car, taxi or arranged tour is usually the practical contract.'],
          ['Two-abbey road day', 'Compare Romanesque pilgrimage and Cistercian seclusion only with a planned car or guide route and ample opening-hour margin.']
        ],
        access: 'Neither monument sits beside a major mainline platform. Vézelay commonly requires a bus, taxi, bicycle or car from a regional station; Fontenay requires its own road connection. Confirm pickup and mobile coverage before departure.',
        tradeoff: 'A two-abbey day gives up museum depth, village meals and walking. The route favors one site by public transport or a deliberate comparative road day, not an improvised rural transfer.',
        stages: [
          ['Meet the rural connection', 'Arrive at the correct station or road junction and confirm the return with the driver or timetable before leaving.'],
          ['Approach through the landscape', 'At Vézelay, accept the village climb; at Fontenay, use the valley approach and grounds to understand seclusion before entering.'],
          ['Read one abbey slowly', 'Respect worship, silence and conservation. Use current interpretation and do not force access to closed liturgical or restoration areas.'],
          ['Leave before the last mile becomes uncertain', 'Return to the pickup point early and keep one regional train or road buffer. Rural dining should not endanger the connection.']
        ],
        fallback: 'If the rural connection fails, use Dijon, Beaune, Auxerre or another confirmed rail city rather than attempting a long roadside walk. If an abbey interior closes, keep only the publicly permitted village or grounds route.',
        watch: [
          ['Rural taxis need advance booking', 'Do not assume an app car will serve the return. Reconfirm the driver and meeting point.'],
          ['Vézelay is steep and cobbled', 'Mobility and heat matter on the climb; consult official access options.'],
          ['Religious sites set their own rhythm', 'Services, retreats and conservation may restrict visits. Quiet conduct is part of access.']
        ],
        duration: 'Allow most of a day for either abbey from a rail base. A two-site road route needs eight to ten hours and should be booked around opening windows.',
        combine: 'Combine Vézelay and Fontenay only by deliberate car or guide itinerary. Otherwise pair one abbey with its nearest town or stay overnight.',
        verify: 'Check monument opening, worship notices, exact rural transport, driver return, road weather and the last regional train before leaving the base.',
        sources: [
          ['https://www.basiliquedevezelay.org/en/', 'Basilica of Vézelay — official visitor and worship information'],
          ['https://www.abbayedefontenay.com/en/', 'Fontenay Abbey — official visitor information']
        ]
      })
    ]
  }),
  c({
    slug: 'lyon-rhone',
    name: 'Lyon & the Rhône Gateway',
    region: 'Auvergne-Rhône-Alpes',
    band: 'valleys-east',
    family: 'two-rivers-urban-section',
    label: 'Two-rivers urban section',
    tagline: 'Use the rivers and hills to stop the city from becoming one long climb.',
    hubIntro: 'Lyon’s planning logic comes from the Saône, Rhône and two hills. Vieux Lyon and Fourvière form a vertical historic route; Presqu’île and Croix-Rousse connect commerce to silk-worker history; Beaujolais and Pérouges require separate regional last miles. Choose the hill before the meal reservation so the final descent, not fatigue, decides where the evening ends.',
    stay: 'Three nights allow two city days and one excursion. Base near a useful Métro or tram connection rather than assuming the old town is easiest for every station, hill and dinner.',
    transfer: 'Part-Dieu and Perrache are distinct main stations. Metro, tram and funicular lines solve different axes; regional excursions require an exact station, bus or tour rather than a generic Lyon departure.',
    season: 'Summer heat makes hills and exposed squares harder at midday; winter and rain favor traboules only where publicly signed and museums where open. Festival and major-event periods alter crowds and transit.',
    fallback: 'Use the city’s museums, covered food hall or flatter Presqu’île route when heat, funicular disruption or rural weather changes the plan. Keep the substitute on the same transport axis.',
    sources: [
      ['https://en.visiterlyon.com/', 'ONLYLYON Tourism — official city guide'],
      ['https://www.tcl.fr/en', 'TCL — official Lyon public transport information'],
      ['https://www.ter.sncf.com/auvergne-rhone-alpes', 'TER Auvergne-Rhône-Alpes — official regional rail information']
    ],
    guides: [
      g({
        slug: 'vieux-lyon-fourviere',
        name: 'Vieux Lyon & Fourvière',
        instrument: 'Funicular-and-traboule elevation card',
        layout: 'vertical-renaissance-section',
        imageQuery: 'Lyon Fourviere old town Saone France panorama',
        imageAlt: 'Fourvière hill and Vieux Lyon above the Saône',
        purpose: 'Connect Vieux Lyon’s Renaissance streets to Fourvière through one controlled ascent, using only signed public traboules and protecting the downhill finish.',
        summary: 'Read the Saône-side old town at street level, take the funicular or a deliberate climb once, and descend by a different safe route with the Roman or basilica layer clearly chosen.',
        choices: [
          ['Renaissance Vieux Lyon', 'Prioritize Saint-Jean, public traboules, Gadagne or another museum. Keep Fourvière to the viewpoint and funicular.'],
          ['Basilica and Roman hill', 'Ride or climb early, then give the basilica, viewpoints and Roman theaters the main block before descending.'],
          ['Two-level city comparison', 'Use one museum below and one interpreted site above. This needs a full day and a single planned ascent.']
        ],
        access: 'Vieux Lyon Métro serves the old town and funicular interchange. Check current funicular operation and replacement service before committing; signed public traboules are limited and private passages remain off-limits.',
        tradeoff: 'Adding Croix-Rousse creates a second hill and weakens both. The route gives up Presqu’île shopping and distant food stops so Vieux Lyon and Fourvière form one legible vertical story.',
        stages: [
          ['Begin along the Saône edge', 'Enter Vieux Lyon near Saint-Jean, orient to the river and select a few officially public passages rather than searching every doorway.'],
          ['Read the Renaissance ground', 'Connect cathedral, courtyards and one museum or interpretation site, keeping resident access clear and watching the hill above for weather.'],
          ['Ascend once', 'Use the operating funicular or a chosen stair route to Fourvière, then select basilica and viewpoint or the Roman theaters as the main upper layer.'],
          ['Descend on a different line', 'Return by funicular or a signed slope toward Saint-Jean or Saint-Paul, ending near transit instead of climbing again for a missed view.']
        ],
        fallback: 'If the funicular is disrupted, keep Vieux Lyon and Gadagne or cross to Presqu’île; climb only if heat, mobility and daylight make it reasonable. If passages close, the public streets retain the route.',
        watch: [
          ['Traboules are not all public', 'Enter only signed passages during allowed hours and keep noise low in residential courtyards.'],
          ['One ascent is enough', 'Fourvière stairs and slopes add quickly. Use transit for one direction when mobility or heat is a concern.'],
          ['Religious and event access changes', 'Basilica services and Roman-site events can redirect circulation. Check current notices.']
        ],
        duration: 'Allow five to seven hours for both levels with one museum. A compact old-town and viewpoint route needs three to four hours.',
        combine: 'Combine Vieux Lyon with Fourvière because they share one vertical axis. Keep Croix-Rousse, Parc de la Tête d’Or and Beaujolais for separate routes.',
        verify: 'Check TCL funicular status, Gadagne or Roman-site openings, basilica access and any event perimeter before beginning the ascent.',
        sources: [
          ['https://en.visiterlyon.com/discover/heritage-unesco/vieux-lyon', 'ONLYLYON Tourism — official Vieux Lyon information'],
          ['https://lugdunum.grandlyon.com/en/', 'Lugdunum Museum and Roman theatres — official visits']
        ]
      }),
      g({
        slug: 'presquile-croix-rousse',
        name: 'Presqu’île, Croix-Rousse & the Silk City',
        instrument: 'Slope-and-silk workshop grid',
        layout: 'silk-hill-grid',
        imageQuery: 'Lyon Croix Rousse Presquile France city',
        imageAlt: 'Lyon city streets between Presqu’île and Croix-Rousse hill',
        purpose: 'Move from Presqu’île’s civic and commercial center to Croix-Rousse’s silk-worker hill through one slope, one workshop or museum, and a planned transit descent.',
        summary: 'Begin between the rivers, climb by Métro or signed slope to the canut district, and use silk history to explain the urban form rather than treating traboules as a scavenger hunt.',
        choices: [
          ['Presqu’île civic route', 'Keep Bellecour, Hôtel de Ville, Terreaux and one museum on the flat central spine. This is the accessible and rain-flexible option.'],
          ['Croix-Rousse silk history', 'Use a guided passage, Maison des Canuts or current workshop visit, then read the slopes and plateau. Appointments matter.'],
          ['Food and contemporary city', 'Use markets, a reserved food experience or river edges as the main layer, adding only a compact silk-history block.']
        ],
        access: 'Metro A and C serve the civic center and Croix-Rousse, while many slopes are steep. Decide whether to ride uphill and walk down, and verify any guided traboule or workshop meeting point before arrival.',
        tradeoff: 'A full art museum, long food hall visit and deep Croix-Rousse walk exceed one day. The route keeps one central collection or meal and one hill narrative.',
        stages: [
          ['Start between the rivers', 'Use Bellecour or Cordeliers to orient Presqu’île, then move north through civic squares without zig-zagging to both riverbanks.'],
          ['Choose the central anchor', 'Visit the Musée des Beaux-Arts, market or another selected site, keeping the Croix-Rousse reservation time protected.'],
          ['Ride or climb to silk history', 'Use Métro C or a deliberate slope, then join the official workshop, Maison des Canuts or public passage route.'],
          ['Descend toward useful transit', 'Walk one signed slope or use the metro, finishing near Hôtel de Ville or a river crossing rather than returning to the plateau.']
        ],
        fallback: 'In heat or rain, stay on Presqu’île with museums and covered food options, or ride directly to a booked silk interior. If a guided passage cancels, use the public streets and Maison des Canuts where open.',
        watch: [
          ['Slopes are the route, not decoration', 'Cobble, stairs and gradients affect footwear and mobility. Ride uphill when needed.'],
          ['Workshops need reservations', 'Living silk businesses are not open-display attractions. Confirm language, time and purchase expectations.'],
          ['Food halls have trading rhythms', 'Check current opening and vendor hours; a building may be open while the intended stalls are not.']
        ],
        duration: 'Allow six to eight hours for Presqu’île plus Croix-Rousse and one interior. Either district alone supports four to five hours.',
        combine: 'Combine the central spine with one Croix-Rousse route. Keep Fourvière, Confluence and Beaujolais for their own days.',
        verify: 'Check TCL service, museum and market hours, workshop reservation and public-passage guidance before choosing the slope.',
        sources: [
          ['https://maisondescanuts.fr/infos-utiles/', 'Maison des Canuts — official silk-history visits'],
          ['https://www.mba-lyon.fr/en', 'Musée des Beaux-Arts de Lyon — official visitor information']
        ]
      }),
      g({
        slug: 'beaujolais-perouges',
        name: 'Beaujolais Villages or Pérouges',
        instrument: 'Two-excursion decision fork',
        layout: 'regional-choice-fork',
        imageQuery: 'Beaujolais vineyards villages France autumn landscape',
        imageAlt: 'Vineyards and stone villages in the Beaujolais countryside',
        purpose: 'Choose one Lyon-region excursion—Beaujolais wine villages or the fortified town of Pérouges—and solve its last mile rather than merging them into a generic countryside day.',
        summary: 'Beaujolais needs a sober vineyard route and appointments; Pérouges needs the correct regional stop and a cobbled hill approach. The two branches answer different interests.',
        choices: [
          ['Beaujolais wine villages', 'Arrange a guide, driver, bicycle plan or sober car through one village cluster and one producer appointment. Landscape and working agriculture lead.'],
          ['Pérouges medieval town', 'Use the current rail or bus approach and give the cobbled walled town a half-day, possibly paired with a nearby town on the same line.'],
          ['Stay in Lyon', 'When rural transport or weather is weak, use a Lyon food, silk or river day. This is a legitimate choice, not a failed excursion.']
        ],
        access: 'Beaujolais villages spread north of Lyon and generally need an arranged route. Pérouges is reached through a nearby station or bus stop rather than a train inside the walls; confirm the exact walk, gradient and return.',
        tradeoff: 'The route gives up combining Beaujolais and Pérouges. Their roads run in different directions and each needs time for context, meals and a safe return.',
        stages: [
          ['Meet the chosen branch', 'Join the booked Beaujolais transport or board the exact regional service for Pérouges. Carry the return details before leaving Lyon.'],
          ['Orient through landscape or walls', 'In Beaujolais, learn the village and climat pattern before tasting; in Pérouges, enter through the public gate and read the street plan.'],
          ['Commit to one encounter', 'Use one producer appointment or one town-and-museum route, keeping private vines and resident doorways clear.'],
          ['Return before rural options narrow', 'Leave with a road or train backup and eat before the final connection rather than depending on late village service.']
        ],
        fallback: 'If the Beaujolais driver or producer cancels, remain in Lyon or use a confirmed rail town. If Pérouges paths are icy or inaccessible, choose a lower urban route; do not force steep cobbles to preserve a photo plan.',
        watch: [
          ['Wine villages require sober transport', 'A designated driver does not taste. Bicycle users must also remain sober and visible on rural roads.'],
          ['Pérouges cobbles are demanding', 'Wet, icy or uneven surfaces affect mobility. Check access guidance and wear suitable footwear.'],
          ['Rural businesses keep appointment hours', 'Reconfirm visits and avoid arriving early into working spaces without invitation.']
        ],
        duration: 'Allow a full day for a Beaujolais circuit and five to seven hours for Pérouges including the Lyon return. Do not schedule both.',
        combine: 'Combine Beaujolais with one compact village cluster, or Pérouges with a stop on the same regional line. Keep the two branches separate.',
        verify: 'Check every producer or guide booking, regional train or bus, weather, accessibility and the last comfortable return to Lyon.',
        sources: [
          ['https://www.beaujolais-tourisme.com/en/', 'Beaujolais tourism — official regional planning'],
          ['https://www.perouges-bugey-tourisme.com/en/', 'Pérouges Bugey tourism — official visitor information']
        ]
      })
    ]
  })
];
