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
    transfer: 'The last mile is different at every stop: Rémi line 2 runs from Blois-Chambord station to Chambord in about 35 minutes; Amboise station is roughly a ten-minute walk from the Royal Château; Chenonceaux station is about 400 m from Chenonceau’s ticket office. Fil Bleu line 32 serves Villandry Centre about 280 m from its entrance, while Azay-le-Rideau station is a 2.1 km walk from its château. Recheck dated services and the final return.',
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
      ['https://www.loirevalley-france.co.uk/', 'Loire Valley — official regional tourism guide'],
      ['https://www.filbleu.fr/en/timetable-routes/all-lines/ligne-32', 'Fil Bleu — line 32, Villandry Centre to Lycée Grandmont'],
      ['https://www.filbleu.fr/en/timetable-routes/all-lines/ligne-r5', 'Fil Bleu — R5 Résabus for Villandry and Savonnières'],
      ['https://www.filbleu.fr/en/services/resabus-transport-on-demand', 'Fil Bleu — current on-demand booking information']
    ],
    guides: [
      g({
        slug: 'blois-chambord',
        name: 'Blois & Chambord',
        reviewDate: '7 October 2026',
        reviewDateISO: '2026-10-07',
        instrument: 'Town-to-domain shuttle docket',
        layout: 'royal-courtyard-ledger',
        imageQuery: 'Loire River at Blois France riverbank',
        imageAlt: 'The Loire at Blois, seen from the riverbank with the town beyond',
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
          ['A two-palace comparison', 'Pair a focused Blois visit with Chambord only when a dated Rémi line 2 shuttle returns you from the estate to Blois-Chambord station in time for a separately checked onward train; confirm both legs before booking.']
        ],
        access: 'Blois–Chambord is the Blois railway station, not a station at the estate. Rémi line 2 currently runs from there to Chambord in about 35 minutes; confirm the service on the travel date, including the return. At the domain, check where the bus drops you and allow time for the walk between the entrance, château and stop. A bike or car is a separate plan, not an automatic fallback.',
        tradeoff: 'A two-palace day gives up the full Chambord grounds, a slow Fine Arts Museum visit and spontaneous river cycling. Keep the pairing only if the timetable supports an unhurried Blois interior and enough Chambord time for the rooms you selected.',
        stages: [
          ['Start at Blois station', 'Walk into the town and identify the Château Royal entrance, then locate the Rémi line 2 departure point and the last workable return before choosing a combination ticket.'],
          ['Read Blois by dynasty', 'Trace the medieval remains, Louis XII’s Gothic wing, François I’s Renaissance stair and the unfinished classical wing of Gaston d’Orléans. Enter the Fine Arts Museum if its rooms match your interest.'],
          ['Choose Chambord’s scale', 'At the 1519 domain, follow the double-helix staircase and a deliberate set of rooms; add a terrace or nearby grounds path only after checking current access and closing time.'],
          ['Return with a margin', 'Before starting Chambord, confirm a dated Rémi line 2 service will return from the estate to Blois-Chambord station; allow time for the walk to the estate stop. Continue only if a separate onward rail train from that station remains usable. If no workable shuttle return is published, stay in Blois for its château and museum and save Chambord for a date with a verified return.']
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
            ['Chenonceau over water', 'The Tour des Marques is the surviving keep of the earlier medieval château; the residence seen today was built separately between 1513 and 1517 by Thomas Bohier and Catherine Briçonnet. Diane de Poitiers and Catherine de’ Medici each shaped the estate; Catherine used the Green Cabinet as a place of government.'],
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
            ['The last mile changes the ticket day', 'Fil Bleu line 32 stops at Villandry Centre, about 280 m from the entrance; Fil Bleu R5 Résabus serves the Villandry/Savonnières area on demand; check its route-specific service and reserve through the operator before travel. Azay-le-Rideau station is about 2.1 km from the château, so check a local link or plan the walk before relying on rail alone.']
          ]
        },
        choices: [
          ['Villandry, gardens only', 'Buy the garden-only admission when the parterres are your main interest. Fil Bleu line 32 stops at Villandry Centre, about 280 m from the entrance, making it the simplest named public-transport approach from Tours when its dated timetable fits.'],
          ['Villandry, château and gardens', 'Use the combined ticket when you want both the Renaissance rooms and outdoor garden sequence. Check seasonal château dates and heat adjustments; check the current R5 Résabus booking details with Fil Bleu before travel.'],
          ['Azay-le-Rideau and the Indre', 'Take the Tours–Chinon rail branch only after planning the 2.1 km station-to-château gap. Give the interior and eight-hectare park a full half-day rather than adding Villandry by default.']
        ],
        access: 'Tours Centre and Saint-Pierre-des-Corps are separate rail nodes; check the arrival station before planning a local transfer. From Tours, Fil Bleu line 32 runs between Lycée Grandmont and Villandry Centre, about 280 m from the gardens; tram A connects with it at Fac 2 Lions. Check the date-specific timetable. Azay-le-Rideau is on the Tours–Chinon line, but the station-to-château walk is about 2.1 km. Fil Bleu R5 Résabus serves the Villandry/Savonnières area on demand; check its route-specific service and reserve through the operator before travel.',
        tradeoff: 'Villandry and Azay each need time outdoors and have different last miles. Visiting both from Tours can consume the day in transfers and leave no protected time for the formal garden rooms or the château’s park. Choose one estate and keep Tours itself as the flexible city plan.',
        siteContext: {
          label: 'Designed garden or water-framed château',
          heading: 'Two western estates, two different reasons to go.',
          intro: 'Villandry is read outdoors through a sequence of reconstructed formal gardens. Azay-le-Rideau places a 16th-century château on an island in the Indre and sets it inside a later landscaped park. A ticket and transport plan should reflect which layer you want to see.',
          details: [
            ['Villandry’s garden rooms', 'The estate’s terraces organize kitchen, ornamental and water gardens into distinct spaces, each with a different pattern and use. The formal layout was restored by Joachim Carvallo and Ann Coleman after they acquired the property in 1906; the gardens opened to the public in 1920.'],
            ['Admission follows your interest', 'Villandry offers a garden-only ticket and a combined château-and-gardens ticket. Official planning guidance estimates about an hour inside the château and around an hour and a half in the gardens; use the current calendar because the château and gardens do not share identical opening dates.'],
            ['Azay on the Indre', 'Financier Gilles Berthelot began the château under François I. Its composition blends French and Italian Renaissance forms, with the river setting shaping the approach and views. The current landscaped park is a later layer, with paths, bridges and water mirrors across eight hectares.'],
            ['The last mile changes the ticket day', 'Fil Bleu line 32 stops at Villandry Centre, about 280 m from the entrance; Fil Bleu R5 Résabus serves the Villandry/Savonnières area on demand; check its route-specific service and reserve through the operator before travel. Azay-le-Rideau station is about 2.1 km from the château, so check a local link or plan the walk before relying on rail alone.']
          ]
        },
        stages: [
          ['Choose the Tours departure point', 'Confirm Tours Centre versus Saint-Pierre-des-Corps, and the correct bus stop or Tours–Chinon platform before starting the excursion.'],
          ['Reach one estate with a return plan', 'Use Fil Bleu line 32 for Villandry, or check whether the on-demand R5 Résabus fits; for Azay, plan the rail journey and 2.1 km last mile. Save the return service before entering.'],
          ['Read the landscape you chose', 'At Villandry, follow the garden rooms from one terrace to another and decide whether the château interior belongs in the ticket. At Azay, connect the island setting to the later park paths and bridges.'],
          ['Return to Tours by the protected service', 'Allow the full walk from Azay station or the bus approach from Villandry. Keep a meal or old-town loop in Tours only after the booked return is secure.']
        ],
        fallback: 'If bus 32 or the branch train does not fit the date, spend the day in Tours: visit the cathedral and Musée des Beaux-Arts where open, walk the old center and follow the Loire edge. If heat changes garden hours, use Villandry’s current notice before switching to any indoor admission.',
        watch: [
          ['The bus stop is close, the service is date-specific', 'Fil Bleu line 32 serves Villandry Centre about 280 m away; check its date-specific timetable and return rather than assuming a frequent urban bus.'],
          ['Azay station is not the château entrance', 'The 2.1 km gap can be a significant walk with heat, bags or mobility limits. Verify a local option or use a transport mode that can complete the trip.'],
          ['Garden and château calendars diverge', 'Villandry’s gardens and château have different opening periods, with outdoor hours also affected by heat. Confirm what your ticket includes on the chosen date.']
        ],
        duration: 'Villandry’s official visit guidance allows about one hour for the château and roughly an hour and a half for the gardens. Azay needs time for its rooms, eight-hectare park and the 2.1 km station walk. Give either estate at least a half-day from Tours, plus the outbound and return service.',
        combine: 'Pair Tours with Villandry or Azay. Do not combine both by public transport without a dated connection plan that includes the Villandry bus or Azay’s 2.1 km station gap. Keep Amboise, Chenonceau and Chambord for separate corridor days.',
        verify: 'Check the 2026 Villandry garden and château calendar, heat-related hours, Fil Bleu line 32 timetable and R5 Résabus booking details, and the Tours–Chinon service plus Azay station walk before selecting the estate.',
        faq: [
          ['Can I buy a Villandry garden-only ticket?', 'Yes. Villandry sells garden-only admission separately from the château-and-gardens ticket. Check the estate’s current calendar and heat-related opening notices for the date.'],
          ['How far is Azay-le-Rideau station from the château?', 'The château’s official access page gives the station walk as about 2.1 km. Check for a suitable local connection before treating the branch train as a door-to-door trip.'],
          ['Which Villandry bus stop should I use?', 'Fil Bleu line 32 serves Villandry Centre, about 280 m from the entrance. Fil Bleu R5 is an on-demand Résabus for Villandry/Savonnières; check its route page and reserve through the operator before travel.']
        ],
        sources: [
          ['https://www.chateauvillandry.fr/useful-information/prices-opening-times-how-to-get-there-how-to-visit-villandry/?lang=en', 'Villandry — admission, 2026 calendar and access'],
          ['https://www.chateauvillandry.fr/villandry-through-the-ages/the-gardens-of-villandry-are-restored-to-their-renaissance-glory/?lang=en', 'Villandry — garden reconstruction history and collaborators'],
          ['https://www.azay-le-rideau.fr/en/visit/practical-information', 'Château d’Azay-le-Rideau — 2026 practical information'],
          ['https://www.azay-le-rideau.fr/en/discover/history-of-the-castle', 'Château d’Azay-le-Rideau — history and architecture'],
          ['https://www.azay-le-rideau.fr/en/discover/the-landscaped-park', 'Château d’Azay-le-Rideau — landscaped park'],
          ['https://www.filbleu.fr/en/timetable-routes/all-lines/ligne-32', 'Fil Bleu — line 32, Villandry Centre to Lycée Grandmont'],
          ['https://www.filbleu.fr/en/timetable-routes/all-lines/ligne-r5', 'Fil Bleu — R5 Résabus for Villandry and Savonnières'],
          ['https://www.filbleu.fr/en/services/resabus-transport-on-demand', 'Fil Bleu — on-demand booking information']
        ]
      })
    ]
  }),
  c({
    slug: 'champagne',
    name: "Reims, Épernay & Champagne Country",
    region: 'Grand Est',
    band: 'valleys-east',
    family: 'cellar-reservation-book',
    label: 'Cellar and cathedral book',
    tagline: 'Reserve the cellar, respect the working landscape, protect the return.',
    hubIntro: "UNESCO maps Champagne as a working chain, not one tasting strip: historic vineyards around Hautvillers, Aÿ and Mareuil-sur-Aÿ feed production and chalk cellars at Reims’ Saint-Nicaise Hill and Épernay’s Avenue de Champagne and Fort Chabrol. Reims is the cathedral-and-cellar city; Épernay puts the house architecture on one walkable avenue; Troyes opens a separate southern city-and-vineyard day.",
    stay: "Base in Reims for the cathedral, Saint-Nicaise Hill and the broadest city choice; choose Épernay to put the 1.5 km Avenue de Champagne and its houses at the door; use Troyes for its timber-framed center and a separately planned Aube vineyard excursion. Moving bases is worthwhile only when the second landscape is a real priority.",
    transfer: "Keep Reims Centre and Champagne-Ardenne TGV at Bezannes distinct: Grand Reims currently sends T1 or T2 from Gare Centre to Opéra-Cathédrale, and T2 toward Neufchâtel from the TGV station. Épernay and Troyes are different rail stops; rural producers and Côte des Bar villages need their own appointment and return plan. Recheck SNCF and local service on the travel date.",
    season: "Cellar visits are booked experiences, not an always-open street activity. Harvest can bring vineyard work and appointment changes; shorter winter daylight makes village returns less forgiving. Use current house calendars and keep the city’s architecture or museum as a complete alternative in every season.",
    fallback: "If a tasting or rural appointment falls through, the cathedral and collections in Reims, the Avenue and Château Perrier museum in Épernay, or Troyes’ old center and Cité du Vitrail remain full days. A vineyard view does not require alcohol; keep the driver sober and never enter working rows without permission.",
    sources: [
      [
        "https://whc.unesco.org/en/list/1465/",
        "UNESCO World Heritage Centre — Champagne Hillsides, Houses and Cellars"
      ],
      [
        "https://www.champagne.fr/en/visit-champagne/the-champagne-region/champagne-wine-trails/reims-and-its-region",
        "Comité Champagne — Reims and its region"
      ],
      [
        "https://www.ter.sncf.com/grand-est",
        "TER Grand Est — official regional rail information"
      ],
      [
        "https://www.grandreims-mobilites.fr/fr/mMl-Arriver-dans-le-Grand-Reims.html",
        "Grand Reims Mobilités — arriving in Reims"
      ]
    ],
    countryCardIntro: "Three different Champagne landscapes: Reims’ cathedral and chalk-cellar hill, Épernay’s house-lined avenue, and Troyes with a separately planned Aube vineyard day.",
    reviewDate: "7 October 2026",
    reviewDateISO: "2026-10-07",
    faq: [
      [
        "Why are Reims, Épernay and the vineyards grouped together?",
        "UNESCO describes three connected ensembles: the historic vineyard supply area around Hautvillers, Aÿ and Mareuil-sur-Aÿ; Saint-Nicaise Hill in Reims; and Avenue de Champagne with Fort Chabrol in Épernay. The route pages split the city experiences instead of pretending this is one walk."
      ],
      [
        "Can I visit Champagne without tasting?",
        "Yes. Reims Cathedral, the chalk-cellar landscape, Épernay’s architecture and Château Perrier museum, Troyes’ old streets and stained glass all make substantial visits. If you do taste, choose a sober return before the appointment."
      ],
      [
        "Can I make a vineyard visit from either city on foot?",
        "No single vineyard route follows from the city name. Book a named producer or guided route, check its exact address and arrange the outbound and return transport before leaving Reims, Épernay or Troyes."
      ]
    ],
    guides: [
      g({
        slug: 'reims-cathedral-cellars',
        name: 'Reims Cathedral & Cellar Districts',
        instrument: 'Cathedral-to-crayère reservation spine',
        layout: 'ceremonial-city-spine',
        imageQuery: 'Reims Cathedral facade France Champagne',
        imageAlt: "Sculpted south-side buttresses of Notre-Dame de Reims Cathedral",
        purpose: "Read Reims as two linked but separate UNESCO landscapes: the cathedral and coronation center above ground, and the chalk quarries reused as cellars at Saint-Nicaise Hill. Put one booked house between them without making alcohol the point of the day.",
        summary: "Start at Reims Cathedral, note that Palais du Tau is closed for renovation until 2027, then cross the city for one confirmed cellar tour or stay with the museums. The cathedral is not the TGV station, and the cellar requires its own reservation.",
        choices: [
          ['Cathedral and city history', 'Prioritize the cathedral, civic center and museums. This is a complete non-tasting day and the best option when cellar slots do not align.'],
          ['One major cellar house', 'Reserve a specific tour and build the day around its district. Cellar temperature, stairs and tasting rules belong in the plan.'],
          ['Reims plus vineyard edge', 'Use an arranged excursion to a nearby village or producer after a compact city morning. The rural pickup and designated driver must be explicit.']
        ],
        access: "For the center, Grand Reims lists T1 toward Hôpital Debré or T2 toward Champagne-Ardenne TGV from Reims Gare Centre to Opéra-Cathédrale. From Champagne-Ardenne TGV at Bezannes, take T2 toward Neufchâtel to Opéra-Cathédrale. Saint-Nicaise cellar visits begin at each house’s named reception, not at the cathedral.",
        tradeoff: "A second cellar tour repeats the underground production layer and squeezes the city. Keep one house, then use the Cathedral, its towers if open, or a museum for the other half; a cellar visit can be enjoyed without tasting.",
        imageCreditTitle: "South side of Reims Cathedral",
        imageEditNote: "Resized, display-cropped and converted to WebP; shared under the source CC BY-SA 3.0 license. The source page credits danigmarx.",
        imageCaption: "South side of Reims Cathedral",
        siteContext: {
          "label": "Reims in the UNESCO landscape",
          "heading": "A coronation city above a monumental cellar hill.",
          "intro": "Reims joins a civic and religious center to an industrial landscape built below ground. UNESCO identifies Saint-Nicaise Hill as one of the Champagne property’s three ensembles; the chalk quarries became part of the cellar network used by Champagne houses.",
          "details": [
            [
              "The Cathedral",
              "Notre-Dame de Reims anchors the city’s coronation history. Read the west-front sculpture from outside even if an interior, service or tower visit is unavailable."
            ],
            [
              "The Tau closure",
              "The former archbishop’s palace next door is closed for renovation until 2027. Use the official Cathedral calendar for its tower alternative rather than treating the museum as an open stop."
            ],
            [
              "The cellar hill",
              "Saint-Nicaise is south-east of the central Cathedral precinct. Tours descend into cool, sometimes stair-heavy chalk spaces; follow the named house entrance and access notes."
            ]
          ]
        },
        stages: [
          [
            "Choose the actual arrival station",
            "From Reims Gare Centre, take T1 toward Hôpital Debré or T2 toward Champagne-Ardenne TGV to Opéra-Cathédrale. From Champagne-Ardenne TGV at Bezannes, take T2 toward Neufchâtel to the same stop; verify live departures."
          ],
          [
            "Read the coronation center",
            "Walk the Cathedral exterior and surrounding civic core. Palais du Tau is closed through 2027, so use the official towers page or choose a currently open museum; allow services and event controls to change entry."
          ],
          [
            "Reserve one chalk-cellar visit",
            "Cross to the named Saint-Nicaise house reception for a booked tour. Reims’ former chalk quarries are part of the UNESCO cellar landscape; confirm language, stairs, temperature, tour length and whether tasting is included."
          ],
          [
            "Protect a sober return",
            "Return by the confirmed tram, bus or arranged driver, eat and leave margin before the train. Anyone tasting should not drive; keep the central museum route as the alternative if a tour cancels."
          ]
        ],
        fallback: "If the house cancels or access is unsuitable, stay above ground: the Cathedral, Musée Saint-Remi and other confirmed collections can carry a full day. Palais du Tau remains closed for renovation until 2027; its official page points visitors to the Cathedral towers, subject to current access.",
        watch: [
          [
            "The two rail stations are not interchangeable",
            "A ticket for Champagne-Ardenne TGV lands at Bezannes, not beside the Cathedral. Allow for T2 and recheck the direction and service on the day."
          ],
          [
            "Cellar stairs and temperature matter",
            "A tour may descend into cool chalk galleries and may not suit every mobility need. Ask the specific operator about step-free access, seating and an alternative before paying."
          ],
          [
            "The Tau is closed",
            "The official Palais du Tau page states closure until 2027. Do not send visitors to its doors; check the Cathedral’s tower calendar if that is a useful substitute."
          ]
        ],
        duration: "Allow six to eight hours for the cathedral precinct, meal and one booked cellar visit, including the urban transfer. A second house or arranged vineyard excursion deserves another half or full day.",
        combine: "Keep the Cathedral and one Saint-Nicaise cellar together. Save Épernay’s avenue and vineyard villages for a separate day rather than adding another cross-city tasting.",
        verify: "Check Cathedral entry or tower tickets, Palais du Tau status, the selected house’s reservation and tour language, its entrance and stairs, and the T1/T2 route from the exact rail station.",
        faq: [
          [
            "Is Palais du Tau open?",
            "No. Its official visitor page says the palace is closed for renovation until 2027 and recommends the Cathedral towers during the works. Check the Cathedral’s own calendar before planning the alternative."
          ],
          [
            "Which station should I use for the Cathedral?",
            "Reims Gare Centre is the central station. Champagne-Ardenne TGV is at Bezannes; Grand Reims currently lists T2 toward Neufchâtel to Opéra-Cathédrale. Confirm live service before a timed entry."
          ],
          [
            "Do I have to taste during a cellar tour?",
            "Not necessarily: tours and tasting formats vary by house and booking. Ask the operator what is included, and choose a sober way back before the visit. The Cathedral and museum route works without a cellar booking."
          ]
        ],
        sources: [
          [
            "https://www.cathedrale-reims.fr/en/",
            "Notre-Dame de Reims Cathedral — official visitor information"
          ],
          [
            "https://www.palais-du-tau.fr/en/visit/visits-and-activities",
            "Palais du Tau — current renovation and Cathedral-tower guidance"
          ],
          [
            "https://grandreims-mobilites.fr/fr/mMl-Arriver-dans-le-Grand-Reims.html",
            "Grand Reims Mobilités — current station-to-center routes"
          ],
          [
            "https://www.taittinger.com/en/experiences",
            "Taittinger — official cellar experiences at Saint-Nicaise Hill"
          ]
        ],
      }),
      g({
        slug: 'epernay-avenue-vineyards',
        name: 'Épernay, Avenue de Champagne & Vineyard Villages',
        instrument: 'Appointment-and-driver ledger',
        layout: 'cellar-avenue-ledger',
        imageQuery: 'Epernay Avenue de Champagne vineyard France',
        imageAlt: "Ornate entrance gate and brick façade of Château Perrier on Avenue de Champagne, Épernay",
        purpose: "Use Épernay’s walkable avenue to understand the public face of Champagne commerce, then decide whether a cellar tour, Château Perrier museum or separately arranged vineyard visit best fits the day.",
        summary: "The Avenue de Champagne runs about 1.5 km and begins a five-minute walk from Épernay station. Its house façades and Château Perrier can make a complete city day; vineyard villages need a separate booking and sober transport plan.",
        choices: [
          ['Avenue and house tour', 'Stay in Épernay for one major house, the avenue and town. This is the clearest rail-based option.'],
          ['Small-producer appointments', 'Arrange visits in one village cluster with a driver, guide, bicycle plan or sober car. Appointments and distances determine the route.'],
          ['Landscape without a tasting chain', 'Use a guided walk, viewpoint or museum context and keep alcohol optional. This suits families, non-drinkers and active travelers.']
        ],
        access: "Épernay tourism describes the avenue as a five-minute walk from the station and about 1.5 km long. Follow the public avenue on foot; a named cellar tour may use a separate entrance and appointment. Do not assume vineyards beyond town are part of the same walk.",
        tradeoff: "A country producer circuit trades away the avenue’s architecture and Château Perrier museum. Choose either one urban cellar appointment plus a short avenue walk, or a pre-arranged rural cluster with a driver; the museum and street are strong non-tasting choices.",
        imageCreditTitle: "Château Perrier entrance on Avenue de Champagne",
        imageEditNote: "Resized, display-cropped and converted to WebP; original image credited to Michal Osmenda under CC BY 2.0.",
        imageCaption: "Château Perrier entrance on Avenue de Champagne",
        siteContext: {
          "label": "Épernay’s avenue and underground city",
          "heading": "A 1.5 km street built to show the trade.",
          "intro": "Épernay’s Avenue de Champagne is both a walkable civic street and one of UNESCO’s selected commercial ensembles, alongside Fort Chabrol. Its façades and gardens show how Champagne houses presented a product whose storage and maturation happens below the chalk.",
          "details": [
            [
              "Walk from the station",
              "The local tourist office describes the avenue as a five-minute station walk. The full street is about 1.5 km; choose a return point rather than treating every house entrance as an open attraction."
            ],
            [
              "Read the house frontage",
              "Courtyards, formal façades and gardens tell a commercial story. Cellar tours are separate timed visits and must be booked with each house."
            ],
            [
              "Use Château Perrier for depth",
              "At 26 Avenue de Champagne, the former merchant’s home houses the regional wine and archaeology museum, with a collection that starts in geology and continues through archaeology and wine. Check its live hours."
            ]
          ]
        },
        stages: [
          [
            "Walk out from Épernay station",
            "The tourism office places Avenue de Champagne about five minutes from the station. Start on foot, note the return route and decide which house or museum actually has a confirmed entry."
          ],
          [
            "Follow the 1.5 km public avenue",
            "Read the house architecture, gates, courtyards and gardens from the public street. Only enter a cellar reception with a booking or current visitor permission."
          ],
          [
            "Choose one interior",
            "Reserve one house tour or visit the Musée du Vin de Champagne et d’Archéologie Régionale at Château Perrier, number 26. The museum’s geology, archaeology and wine sequence gives the day a non-tasting anchor."
          ],
          [
            "Add the countryside only on purpose",
            "For a village visit, confirm the producer’s address, appointment, driver or tour and return before leaving Épernay. If that arrangement is missing, keep the complete day in town."
          ]
        ],
        fallback: "If a house visit cancels, keep the avenue walk and check the current opening of the Musée du Vin de Champagne et d’Archéologie Régionale at Château Perrier, 26 avenue de Champagne. It interprets the region from geology and archaeology through wine; no tasting is needed.",
        watch: [
          [
            "The street is not a vineyard trail",
            "Avenue de Champagne is urban. Nearby slopes and villages require a planned route; do not walk into working vineyard rows or private courtyards."
          ],
          [
            "House doors are not all open",
            "Tours, retail and tasting can operate on different booking rules. Check the exact house schedule and entrance rather than assuming the street-facing gate is a walk-in visitor door."
          ],
          [
            "An appointment can outlast the train gap",
            "Confirm tour duration and the final rail connection; an overnight is safer than an unplanned rural transfer after tasting."
          ]
        ],
        duration: "Allow four to six hours for the station, a section of the 1.5 km avenue and Château Perrier or one booked cellar visit. A rural producer cluster adds transport and appointment time; protect most of a day and the return.",
        combine: "Pair one avenue visit with the museum or one cellar appointment. Use a separate day for Reims Cathedral or a vineyard village; do not stack multiple appointments across the Marne valley.",
        verify: "Recheck the house’s named entrance, appointment and language, current museum opening at Château Perrier, whether any tasting is included, and the last train or booked rural return.",
        faq: [
          [
            "Can I walk the Avenue de Champagne from the train?",
            "Yes. Épernay Tourism places it about a five-minute walk from the station and describes the avenue as roughly 1.5 km long. A particular cellar tour may start at another gate, so follow its confirmation."
          ],
          [
            "Does the avenue walk take me through vineyards?",
            "No. The avenue is an urban heritage route. Vineyard villages and producers are outside that compact walk; book the address and transport, including a sober return, before leaving town."
          ],
          [
            "What is a good non-tasting visit?",
            "The Musée du Vin de Champagne et d’Archéologie Régionale at Château Perrier, 26 avenue de Champagne, connects local geology and archaeology with the wine landscape. Check its current opening and ticket details before you go."
          ]
        ],
        sources: [
          [
            "https://www.epernay-tourisme.com/en/discover/avenue-de-champagne/",
            "Épernay Tourism — Avenue de Champagne and Château Perrier museum"
          ],
          [
            "https://www.epernay-tourisme.com/en/champagne-visit/producers-champagne-houses/avenue-de-champagne-epernay/",
            "Épernay Tourism — houses and visitor appointments on the avenue"
          ],
          [
            "https://whc.unesco.org/en/list/1465/",
            "UNESCO — Avenue de Champagne and Fort Chabrol"
          ]
        ],
      }),
      g({
        slug: 'troyes-southern-champagne',
        name: 'Troyes & Southern Champagne',
        instrument: 'Timber-and-vine southern folio',
        layout: 'medieval-vine-folio',
        imageQuery: 'Troyes old town half timbered houses France',
        imageAlt: "Timber-framed shop façades along Rue Émile-Zola in Troyes",
        purpose: "Give Troyes’ timber-framed center, cathedral glass and Cité du Vitrail a complete city route; extend toward Montgueux or the Côte des Bar only when the appointment and rural return are arranged.",
        summary: "Troyes’ historic center forms a recognizable Bouchon de Champagne outline, with Rue Émile-Zola’s timber façades and a major stained-glass collection at Hôtel-Dieu-Le-Comte. Côte des Bar is a separate road-and-appointment day, not a walk from the station.",
        choices: [
          ['Historic Troyes', 'Follow the “cork-shaped” center, cathedral and selected churches, using one museum or stained-glass collection as the indoor anchor.'],
          ['Textile and design context', 'Use Troyes’s industrial and outlet history selectively, keeping the historic center as a contrasting layer rather than a shopping transfer.'],
          ['Côte des Bar excursion', 'Arrange one southern producer or vineyard landscape route with transport and appointments. This is a separate rural contract from the city walk.']
        ],
        access: "Walk from Troyes station into the historic center and keep a station-side exit in mind. The Cité du Vitrail is at Hôtel-Dieu-Le-Comte, 31 quai des Comtes de Champagne. Southern vineyard villages require a separately arranged car, driver or guided visit; check onward service and return.",
        tradeoff: "Adding Côte des Bar means giving up several churches, lanes or collections in Troyes. Choose the compact city and its stained-glass interpretation, or arrange one rural producer and transport as the main event; do not treat both as casual half-day add-ons.",
        imageCreditTitle: "Timber-framed façades on Rue Émile-Zola",
        imageEditNote: "Resized, display-cropped and converted to WebP; shared under the source CC BY-SA 4.0 license. The source page credits Myrabella.",
        imageCaption: "Timber façades on Rue Émile-Zola",
        siteContext: {
          "label": "Troyes, glass and the Aube vineyards",
          "heading": "A timber-framed city with a separate rural horizon.",
          "intro": "The city’s old center is known locally as the Bouchon de Champagne for its cork-like outline. Rue Émile-Zola preserves a clear street-level timber-house sequence; the cathedral and Cité du Vitrail shift the reading from façades to stained glass.",
          "details": [
            [
              "Start with the street plan",
              "Walk the old-center loop before adding a rural destination. Rue Émile-Zola, Ruelle des Chats and the Cathedral area each offer a different scale of the historic core."
            ],
            [
              "Make glass the indoor anchor",
              "The Cité du Vitrail at Hôtel-Dieu-Le-Comte, 31 quai des Comtes de Champagne, presents stained glass across periods, functions and styles. Its posted hours change by season."
            ],
            [
              "Separate town from vineyard",
              "The Comité Champagne places Montgueux about 15 km east of Troyes; the Côte des Bar lies on a more southerly rural trail. Confirm the exact place and transport rather than applying one city-walk plan to both."
            ]
          ]
        },
        stages: [
          [
            "Enter the Bouchon on foot",
            "Walk from Troyes station into the cork-shaped old-center plan. Keep the westward return in view and use Rue Émile-Zola as a clear timber-façade street rather than searching for a single photo stop."
          ],
          [
            "Read the Cathedral and its glass",
            "Use the Cathedral precinct and one open church interior, checking services and current visitor access. The city’s stained-glass heritage is a subject in its own right, not a tasting-day accessory."
          ],
          [
            "Choose the Cité or a vineyard transfer",
            "For indoor depth, go to the Cité du Vitrail at Hôtel-Dieu-Le-Comte, 31 quai des Comtes de Champagne. For vineyards, arrange a named Montgueux or Côte des Bar destination and transport; those are different rural directions."
          ],
          [
            "Return on a plan that survives",
            "Check the seasonal museum closing time and leave margin for the station. A rural tasting day needs a sober driver or suitable guided transport and a pre-agreed return; keep the city loop if either is missing."
          ]
        ],
        fallback: "If the rural appointment or road plan fails, stay in Troyes: the timber-framed center, cathedral and Cité du Vitrail give the day an independent historical and visual thread. The Cité changes its seasonal hours, so check the current official schedule.",
        watch: [
          [
            "Seasonal museum hours change",
            "The Cité du Vitrail publishes different date ranges and opening hours. Confirm the schedule for your day and do not rely on a generic timetable."
          ],
          [
            "The Bouchon is a city shape, not a vineyard route",
            "Montgueux and Côte des Bar have different locations and transport needs. A map pin called Champagne does not make a village walkable from Troyes."
          ],
          [
            "Churches may pause for services",
            "Keep the exterior, lanes and museum route useful if an interior is closed; check local access before crossing the city for one door."
          ]
        ],
        duration: "Allow five to seven hours for the historic core, a selected church or cathedral visit and the Cité du Vitrail. A Côte des Bar producer excursion needs a separately planned full day and may be more useful with an overnight.",
        combine: "Combine Rue Émile-Zola, the cathedral area and Cité du Vitrail within Troyes. Add Montgueux or Côte des Bar only with a named destination, confirmed appointment and arranged driver; keep Reims and Épernay for separate rail days.",
        verify: "Check the cathedral’s current entry, Cité du Vitrail seasonal hours and ticket, church service closures, the rural producer’s exact location, sober transport and the return train.",
        faq: [
          [
            "Can I add a Côte des Bar cellar on foot from Troyes?",
            "No. Treat the Côte des Bar as a rural excursion: name the producer, reserve, and arrange both directions with a sober driver or suitable guided transport before you depart."
          ],
          [
            "What is the Cité du Vitrail?",
            "It is the Aube department’s stained-glass center at Hôtel-Dieu-Le-Comte, 31 quai des Comtes de Champagne. The permanent exhibition covers windows from different periods, functions and styles; seasonal opening hours change."
          ],
          [
            "Is Troyes worth a day without Champagne tasting?",
            "Yes. Use the Bouchon-shaped old center, timber-framed Rue Émile-Zola, the Cathedral precinct and the Cité du Vitrail as a self-contained city day. The vineyards are a separate choice, not a requirement."
          ]
        ],
        sources: [
          [
            "https://en.troyeslachampagne.com/cultural-heritage/cite-du-vitrail/",
            "Troyes Champagne Tourism — Cité du Vitrail, access and seasonal hours"
          ],
          [
            "https://www.champagne.fr/en/visit-champagne/the-champagne-region/champagne-wine-trails/cote-des-bar",
            "Comité Champagne — Côte des Bar and Troyes landscape"
          ],
          [
            "https://en.troyeslachampagne.com/",
            "Troyes Champagne Tourism — official city and heritage information"
          ],
          [
            "https://whc.unesco.org/en/list/1465/",
            "UNESCO — historic Champagne vineyard landscapes"
          ]
        ],
      })
    ]
  }),
  c({
    slug: 'alsace',
    name: 'Strasbourg, Colmar & the Alsace Wine Route',
    region: 'Alsace, Grand Est',
    band: 'valleys-east',
    reviewedOn: { iso: '2026-10-11', label: '11 October 2026' },
    reviewDisclaimer: 'Admission, rail and coach timetables, walking paths, weather, harvest work and local access can change; reopen the linked authority or operator before travel.',
    countryCardIntro: 'Strasbourg and Colmar are strong rail cities with different urban rhythms; the wine-route villages sit on a patchwork of trains, buses, bicycles and roads. A useful Alsace trip separates city depth from a village circuit and does not reduce living communities to façades.',
    countryCardImageAlt: 'Ponts Couverts in Strasbourg’s Petite France, with the cathedral spire beyond the rooftops',
    family: 'rhine-vineyard-fold',
    label: 'Rhine and vineyard fold',
    tagline: 'Split the city days from one named village corridor.',
    hubIntro: 'Treat Alsace as two rail cities plus a rural last mile, not as one 170-kilometre village checklist. Strasbourg gives you the Grande Île, museums and a separately reached European Quarter; Colmar puts the old town, Unterlinden and Fluo buses toward Riquewihr, Ribeauvillé and Eguisheim within a different day plan. Pick one village corridor, confirm both directions before leaving, and keep the return at Colmar Gare SNCF visible before booking a cellar.',
    searchSummary: 'Plan five nights across Strasbourg and Colmar, then choose one precise wine-village route. Compare TER between the two stations with Fluo 816 to Riquewihr/Ribeauvillé, 830 to Eguisheim, or the seasonal Kut’zig loop; preserve the return before booking a cellar.',
    stay: 'For three nights, stay in one city: Strasbourg suits the cathedral, museums and European Quarter; Colmar suits the old town plus a single rural outing. Five nights support two nights around Strasbourg Gare Centrale or Grande Île, then three near Colmar Gare SNCF or the pedestrian center. With seven nights, add one castle or extra city day rather than changing hotels again; arrival and departure days are not full sightseeing days.',
    transfer: 'Use TER Grand Est between Strasbourg Gare Centrale and Colmar Gare SNCF, then plan the village leg separately. Fluo line 816 runs from the Colmar station stop to Riquewihr - Poste and Ribeauvillé - Gare Routière; line 830 serves Eguisheim - Place De Gaulle and continues toward Rouffach. Return from the same named stop on the Colmar-bound direction. The Kut’zig loop is a separate seasonal, reserved product; Haut-Koenigsbourg’s line 500 starts at Sélestat SNCF station. Match both outward and return legs to the travel date, day type and exact stop.',
    season: 'Fluo route numbers and timetables change: the regional network renumbered many coach lines on 1 September 2026, so older 68R016/68R030 references do not replace current lines 816/830. The Colmar tourism page lists Kut’zig as seasonal and reservation-required; its published 3 April–11 October operating period ends on this review date, so do not assume a later service without the next calendar. Summer heat and harvest work favor one early village walk with private vineyard rows left undisturbed. In December, city-market crowd controls and rural service calendars need their own date checks.',
    fallback: 'If Fluo has no useful same-day return, keep the day in Colmar: Unterlinden and the old-town loop still make a complete plan. If rain, heat or a trail closure removes the vineyard walk, drop the village rather than improvise a roadside transfer. A castle day is a real alternative only when the published line 500 timetable from Sélestat and the castle admission plan agree in both directions.',
    itineraryLabel: 'Five-night, two-base route',
    itineraryHeading: 'One city day in each base, then one rural corridor.',
    itineraryIntro: 'A five-night model uses two nights in Strasbourg and three in Colmar. Keep the hotel-change day light, and choose either line 816, line 830 or a confirmed seasonal alternative for the village day; do not treat every arrival and departure as a full sightseeing day.',
    itinerary: [
      ['Day 1 · Arrive Strasbourg', 'Sleep near Strasbourg Gare Centrale or Grande Île. If arrival time and energy allow, take a short orientation walk toward Place Kléber or Petite France; keep the Cathedral interior and any timed visit for the next day.'],
      ['Day 2 · Strasbourg on foot', 'Follow the Grande Île route from the Cathedral and Place du Château through the civic center to Petite France, Ponts Couverts and Barrage Vauban. Choose one interior or tower visit, not every ticketed option.'],
      ['Day 3 · TER to Colmar', 'Take TER Grand Est from Strasbourg Gare Centrale to Colmar Gare SNCF, then check in near the station or old town. Keep the afternoon to one museum or a short civic walk rather than adding a village coach after the hotel move.'],
      ['Day 4 · Colmar city loop', 'Start at Unterlinden or the northern old-town edge, continue through Saint-Martin and the market streets to Petite Venise, then return south toward Place Rapp and Colmar station. Reverse the order if the museum calendar requires it.'],
      ['Day 5 · One rural decision', 'Choose Riquewihr/Ribeauvillé on Fluo 816, Eguisheim on Fluo 830, or a separately published Kut’zig/line 500 plan. Save the return from the same named stop before reserving a tasting or castle entry.'],
      ['Day 6 · Depart Colmar', 'Use Colmar Gare SNCF for the onward train, or allow the full TER connection back to Strasbourg only when the booked departure requires it. Add a buffer for the transfer; do not spend the final morning in a village.']
    ],
    sources: [
      ['https://www.visit.alsace/en/the-alsace-wine-route/', 'Visit Alsace — official 170 km Wine Route overview'],
      ['https://www.ter.sncf.com/grand-est', 'TER Grand Est — rail journey and live timetable planning'],
      ['https://services.fluo.grandest.fr/fr/schedules/line/30671', 'Fluo Grand Est — current line 816 to Riquewihr and Ribeauvillé'],
      ['https://services.fluo.grandest.fr/fr/schedules/line/30647', 'Fluo Grand Est — current line 830 to Eguisheim and Rouffach'],
      ['https://www.tourisme-colmar.com/en/practical/travel-and-mobility/public-transport', 'Colmar Tourist Office — regional bus and station information'],
      ['https://www.tourisme-colmar.com/en/visit/visit/kut-zig-open-top-bus', 'Colmar Tourist Office — Kut’zig route, season and reservation'],
      ['https://www.haut-koenigsbourg.fr/en/practical-informations/the-haut-koenigsbourg-shuttle-bus-l500/', 'Haut-Koenigsbourg — line 500 from Sélestat station'],
      ['https://www.cts-strasbourg.eu/en/cts-network-maps/', 'CTS Strasbourg — official tram and bus network maps']
    ],
    faq: [
      ['How many nights should I spend in Alsace?', 'Three nights work best in one city so the hotel change does not consume the short trip. Five nights can support two in Strasbourg and three in Colmar, with one village day. Count the TER move and partial arrival/departure days honestly.'],
      ['Can I reach wine-route villages by public transport?', 'Yes, for selected corridors: Fluo 816 serves Riquewihr - Poste and Ribeauvillé - Gare Routière from Colmar Gare SNCF; line 830 serves Eguisheim - Place De Gaulle. Use the date-specific return direction to Colmar before committing.'],
      ['What if the village bus or weather does not work?', 'Keep Strasbourg or Colmar as a complete city day. The Sélestat-to-Haut-Koenigsbourg line 500 or the Kut’zig loop can replace a village route only when the official annual calendar, reservation and return all fit your date.']
    ],
    guides: [
      g({
        slug: 'strasbourg-grande-ile',
        name: 'Strasbourg Grande Île & European Quarter',
        instrument: 'Island-to-institutions tram map',
        layout: 'rhine-civic-axis',
        imageQuery: 'Strasbourg cathedral Petite France river France',
        imageAlt: 'Ponts Couverts in Strasbourg’s Petite France, with the cathedral spire beyond the rooftops',
        imageCaption: 'Ponts Couverts and the cathedral above Petite France',
        purpose: 'Choose a complete Grande Île walk or a separately planned European Quarter visit, then use the right CTS stop, booking and return instead of treating the city center and institutions as one short loop.',
        summary: 'Start at Strasbourg Gare Centrale, walk the Grande Île from Place du Château to Petite France, and decide whether a second day is worth the Tram E trip to Parlement Européen.',
        searchSummary: 'Follow Strasbourg Gare Centrale to the Cathedral, Place du Château, Petite France and Ponts Couverts; treat the European Quarter as a separate Tram E outing with a booked Parliament visit, physical ID and a planned return.',
        choices: [
          ['Cathedral, civic core and Petite France', 'Make one walking day of the Cathedral, Place du Château, Place Kléber, the Ill-side lanes, Ponts Couverts and Barrage Vauban. It is the best first-day route when the old town is the reason for the stop.'],
          ['Cathedral and Neustadt', 'Give the Cathedral and one current museum the main block, then cross toward Place de la République and the imperial-era Neustadt. This keeps the route central and sacrifices the European institutions.'],
          ['European Quarter by Tram E', 'Take CTS tram E to the stop Parlement Européen for the Parliament or a public-space walk. The institution visit has its own calendar, reservation, physical-ID and security conditions; do not treat the tram ride as admission.']
        ],
        access: 'Arrive at Strasbourg Gare Centrale. CTS lines A and D serve the underground Gare Centrale stop; use the current CTS map for the central stop that best fits the day, then complete Grande Île on foot. The European Parliament is not beside the Cathedral: tram E serves Parlement Européen. Return from that named stop using the live CTS route planner; bus H may provide a direct Gare Centrale link when the current service shows it.',
        tradeoff: 'A full Grande Île loop and a Parliament interior compete for time. Keep the Cathedral, Petite France and the river route together; use a second day for the European Quarter or give it priority and drop a museum. Colmar and vineyard villages require a separate rail day.',
        stages: [
          ['Leave Gare Centrale for the island', 'Use CTS A or D from Gare Centrale toward the central area, or walk if the arrival is light and the route is clear. Save the exact return stop before starting; check service changes in the CTS traffic panel.'],
          ['Read the Cathedral and Place du Château', 'Start at the Cathedral’s west front and Place du Château. If climbing the platform, its entrance is on Place du Château at the Cathedral’s right side; the official seasonal hours, last ascent and access notices control the visit.'],
          ['Walk the water edge once', 'Continue through Place Kléber and the central streets toward Petite France, then read Ponts Couverts and Barrage Vauban from the river. Choose this walk or the separate Tram E Parliament visit; do not bolt on both after a booked interior.'],
          ['Return from the stop you saved', 'For the old-town route, use the chosen central CTS stop back to Gare Centrale. For Parlement Européen, depart from the same named stop on the current direct H service if listed, or take Tram E back to a central interchange and transfer.']
        ],
        fallback: 'If rain weakens the river walk, choose one open Strasbourg museum or a shorter Cathedral-to-civic-center loop, then use CTS for the return. If Parliament entry is unavailable, keep the European Quarter to its public exterior spaces or return to the Neustadt; do not travel there expecting an interior without a confirmed visit.',
        watch: [
          ['The Cathedral platform is a separate visit', 'The climb has its own entrance at Place du Château and seasonal hours. Check the official last-ascent time and any closure before building the rest of the day around it.'],
          ['Parliament admission is controlled', 'During plenary sessions, the European Parliament requires a reservation for the Hemicycle and a valid physical identity document; security rules and opening times differ by session.'],
          ['The return is an operator decision', 'CTS tram, bus and TER are separate networks. Save the actual CTS stop and the Colmar-bound TER station connection you need; maintenance and event control can change the shortest route.']
        ],
        duration: 'Editorial estimate: allow most of a day for the Cathedral, one selected interior, Petite France and the return. A Parliament visit needs its own timed block and security margin; move the old-town walk to another day if both matter.',
        combine: 'Pair Grande Île with either Neustadt or the European Quarter. Keep Colmar, line 816/830 villages and Haut-Koenigsbourg for days based from the appropriate rail gateway.',
        verify: 'Check the Cathedral’s platform entrance and seasonal last ascent, the European Parliament visit calendar and ID rules, the CTS map/traffic status, and the exact CTS-to-TER return before leaving the hotel.',
        hubAccess: 'Strasbourg Gare Centrale anchors the city walk; CTS A/D reach central stops, while Tram E serves Parlement Européen. The Parliament visit is booked separately and the return to Gare Centrale must be checked in CTS.',
        hubTradeoff: 'Choose one full historic-core walk or a booked European Quarter visit; a fast tram transfer does not make the two experiences interchangeable.',
        hubDuration: 'One full day for the Cathedral, Grande Île and Petite France; budget a separate day for Parliament plus a shorter center route.',
        siteContext: {
          label: 'Island streets and an institutional edge',
          heading: 'Read the river city before making the separate tram move.',
          intro: 'Strasbourg’s Grande Île concentrates the Cathedral, civic streets and canal edges. Petite France preserves the work-and-water character of the former millers, tanners and fishermen district; the European institutions sit beyond the old-town walking circuit.',
          details: [
            ['Cathedral and Place du Château', 'Use the west front and surrounding square as the urban anchor. The platform entrance is on Place du Château to the Cathedral’s right; climbing hours and access notices change by season.'],
            ['Petite France and Ponts Couverts', 'Follow the Ill-side lanes to the covered bridges and Barrage Vauban, then return by a different central street. Keep the bridges and narrow lanes clear for residents and other pedestrians.'],
            ['European Parliament', 'CTS Tram E stops at Parlement Européen. A Parliament interior is an independent booked visit with a valid physical ID and security checks; the stop name does not guarantee same-day admission.']
          ]
        },
        operations: {
          entryReturn: 'Start at Strasbourg Gare Centrale. Lines A and D serve the underground station stop; use CTS’s live map to choose a central stop for the Cathedral walk. For the European Quarter, Tram E serves Parlement Européen. At the end, check whether bus H is running directly to Gare Centrale or reverse Tram E to a central interchange and transfer.',
          booking: 'The Cathedral platform has a separate Place du Château entrance and seasonal last ascent. Parliament visits are free but, during plenary sessions, Hemicycle reservations are compulsory; a valid physical ID is required and security applies. Check the exact session calendar and visit offer before choosing a day.',
          weather: 'In sustained rain, reduce the Petite France waterfront portion and choose one currently open museum. In heat, begin the exposed civic walk earlier and keep the tram-based Parliament option for a day whose visit slot and return fit.'
        },
        faq: [
          ['Where should I start the Strasbourg walk from the train?', 'Use Strasbourg Gare Centrale. CTS lines A and D serve the underground Gare Centrale stop; choose a current central stop, then walk the Grande Île route. Keep the exact station return in your CTS planner.'],
          ['Can I visit the European Parliament without booking?', 'The official visitor page changes rules by plenary period and visit type. During plenary sessions, Hemicycle reservations are compulsory for individuals and groups and a valid physical ID is required; check the current calendar before taking Tram E to Parlement Européen.'],
          ['Is the Cathedral platform the same entrance as the main visit?', 'No. The official platform page places the climb entrance at Place du Château on the Cathedral’s right side and publishes seasonal hours and last ascent times. Confirm access separately from the main Cathedral visit.']
        ],
        sources: [
          ['https://www.visitstrasbourg.fr/en/welcome-in-strasbourg/', 'Strasbourg Tourist Office — city districts and visit planning'],
          ['https://www.cts-strasbourg.eu/en/cts-network-maps/', 'CTS Strasbourg — current tram and bus network maps'],
          ['https://www.cts-strasbourg.eu/en/know-us/our-network/tram-and-bus/', 'CTS Strasbourg — official public transport information'],
          ['https://www.strasbourg.eu/lieu/-/entity/id/686064/parlement-europeen', 'Strasbourg city — Parliament location and Tram E stop'],
          ['https://visiting.europarl.europa.eu/en/visitor-offer/strasbourg/hemicycle', 'European Parliament — visitor calendar, booking and security'],
          ['https://www.cathedrale-strasbourg.fr/ascension-cathedrale', 'Strasbourg Cathedral — platform entrance and seasonal hours']
        ]
      }),
      g({
        slug: 'colmar-canals-museums',
        name: 'Colmar Canals, Old Town & Museums',
        instrument: 'Canal-and-collection walking score',
        layout: 'canal-museum-score',
        imageQuery: 'Colmar Petite Venise canal France Alsace',
        imageAlt: 'Half-timbered houses and canal in Colmar’s Petite Venise',
        imageCaption: 'The canal-side houses of Colmar’s Petite Venise',
        purpose: 'Choose a substantial museum visit, a complete old-town and market walk, or a short city day before a village excursion; connect Colmar Gare SNCF to Petite Venise in one loop rather than retracing its busiest bridge.',
        summary: 'From Colmar Gare SNCF, walk through Champ de Mars to Unterlinden, Saint-Martin and the covered market, then follow the canal edge through Petite Venise and return south to the station.',
        searchSummary: 'Walk Colmar Gare SNCF → Champ de Mars → Unterlinden → Saint-Martin/market streets → Petite Venise → Place Rapp → station. Choose one major interior or the street loop; keep Fluo 816/830 for a separate village day.',
        choices: [
          ['Unterlinden first', 'Give the museum the main indoor block, then walk through Saint-Martin and the old town to Petite Venise. Check current ticket, gallery and opening information before choosing a weekday.'],
          ['Old town and market', 'Skip the long museum visit and read the civic streets, covered market, Koïfhus and canal in one walking circuit. This is easier to shorten around a train departure but depends on the market calendar.'],
          ['City then village another day', 'Use Colmar as a compact orientation day and base the rural day on one named Fluo route from Colmar Gare SNCF. Do not attach an unverified bus excursion to the end of a museum visit.']
        ],
        access: 'Colmar Gare SNCF sits south-west of the old town. Walk north through Place Rapp and Champ de Mars toward Unterlinden, continue south-east through Saint-Martin and the covered market to Petite Venise, then return via Place Rapp to the station. The regional Fluo 816 and 830 departure stop is named COLMAR - Gare SNCF; it is not the same as a central-city tram or a hotel pickup.',
        tradeoff: 'Unterlinden plus a full street route is already a substantial day. A village excursion uses its own Colmar Gare SNCF departure and return block; combine the two only by making the museum a short, preselected visit and verifying the bus connection first.',
        stages: [
          ['Leave Colmar Gare SNCF on foot', 'Set the station as both origin and finish. Walk north via Place Rapp and Champ de Mars; keep luggage at your accommodation or storage rather than carrying it through the museum and narrow canal lanes.'],
          ['Choose the interior before the street loop', 'If Unterlinden is open and is your priority, use its current ticket and gallery information to set the visit block. Otherwise take the civic route through Rue des Têtes and the Saint-Martin precinct.'],
          ['Walk the market-to-canal section once', 'Continue to the covered market, Koïfhus area and Petite Venise. Use Quai de la Poissonnerie and a different return street so the route is a loop, not a second queue at the same bridge.'],
          ['Return south to the rail station', 'Leave the old town via Place Rapp and Champ de Mars to Colmar Gare SNCF. If continuing to a village, make that a separate day using Fluo 816 or 830 and its published return from the named stop.']
        ],
        fallback: 'For a wet or very hot day, shorten the outdoor canal section and make Unterlinden the anchor if its current calendar suits. If the museum is closed or unavailable, keep a shorter architecture-and-market walk and do not force a rural bus connection into the same day.',
        watch: [
          ['The station and old town are different doors', 'Regional buses 816 and 830 use COLMAR - Gare SNCF; allow time to reach that stop from the center and verify the opposite-direction departure before going rural.'],
          ['Museum and market days do not match', 'Check Unterlinden’s current opening/ticket information and the covered market calendar separately. Do not assume a Monday, holiday or seasonal opening.'],
          ['The canal is a lived street', 'Petite Venise bridges and lanes carry residents and local activity. Keep the narrow route moving and use a wider quay or civic square for a longer pause.']
        ],
        duration: 'Allow five to seven hours with Unterlinden and a meal; three to four hours suits a street-and-market loop. A village excursion should have its own half or full day.',
        combine: 'Keep Strasbourg as a separate full city day. Pair Colmar with one nearby village only when the museum plan is short and the date-specific Fluo return still reaches Colmar Gare SNCF with time to spare.',
        verify: 'Check Unterlinden’s current tickets, gallery status and opening day; the covered market calendar; Colmar Gare SNCF departure point; and the exact Fluo 816/830 round trip if a village is added.',
        hubAccess: 'Colmar Gare SNCF anchors the walk and the regional Fluo departures. The old-town loop is on foot; Fluo 816 and 830 are separate rural products, not a continuation of the city walk.',
        hubTradeoff: 'Choose a museum-led Colmar day or a full village excursion; trying to fit both usually turns the rural return into a time pressure.',
        hubDuration: 'One full walking day with a selected museum, or a compact city walk before a separate all-day village route.',
        siteContext: {
          label: 'Museum threshold to canal quay',
          heading: 'Use a north-to-south loop to keep the city legible.',
          intro: 'Colmar’s center is compact enough for a deliberate walking route, but the station, Unterlinden, covered market and Petite Venise each occupy a different edge of the day. Choose one large indoor anchor before adding the popular canal lanes.',
          details: [
            ['Unterlinden', 'The museum is the north-side interior anchor. Check its live ticket, gallery and opening information before assigning it as the rainy-day guarantee.'],
            ['Saint-Martin and the market', 'Use the collegiate church precinct, Koïfhus area and covered market as the civic middle of the route. Market hours are a separate calendar from museum opening.'],
            ['Petite Venise', 'Finish at the canal and Quai de la Poissonnerie, then leave by Place Rapp toward Colmar Gare SNCF. The narrow bridges are circulation space, not a place to stop a group.']
          ]
        },
        operations: {
          entryReturn: 'From Colmar Gare SNCF, walk north through Place Rapp and Champ de Mars toward Unterlinden. Continue through Saint-Martin and the market to Petite Venise, then return south through Place Rapp. The Fluo rural stop is also named COLMAR - Gare SNCF; check the live stop location and direction before boarding.',
          booking: 'Unterlinden’s ticketing, galleries and opening calendar control the museum block; do not assume that a specific room or a same-day ticket is available. Reserve only when its current official ticket flow offers the needed slot. The city walk itself has no single gate.',
          weather: 'In rain, prioritize one confirmed museum and shorten the canal loop. In heat, use the shaded civic streets and a shorter exterior route; postpone the village bus rather than adding a rural last mile after the hottest part of the day.'
        },
        faq: [
          ['How long does the Colmar walking route take?', 'Allow five to seven hours if Unterlinden is the main interior plus lunch; a three-to-four-hour street route can cover the civic center and Petite Venise. These are planning estimates, not museum visit measurements.'],
          ['Where do I catch the village buses?', 'The Colmar Tourist Office identifies the station as a regional coach departure point; Fluo names the stop COLMAR - Gare SNCF. Current lines 816 and 830 use that stop, but each has its own route and date-specific return.'],
          ['What is the better rainy-day choice?', 'Use Unterlinden if its current ticketing and gallery calendar fit. If it is closed or unavailable, keep the market-and-architecture loop shorter and leave the rural village day for a date when the outdoor route and return work.']
        ],
        sources: [
          ['https://www.tourisme-colmar.com/en/', 'Colmar Tourist Office — official city guide'],
          ['https://www.tourisme-colmar.com/en/practical/travel-and-mobility/public-transport', 'Colmar Tourist Office — station and regional-coach information'],
          ['https://www.musee-unterlinden.com/en/', 'Unterlinden Museum — official tickets and visitor calendar'],
          ['https://services.fluo.grandest.fr/fr/schedules/line/30671', 'Fluo Grand Est — current line 816 stop list and timetable'],
          ['https://services.fluo.grandest.fr/fr/schedules/line/30647', 'Fluo Grand Est — current line 830 stop list and timetable']
        ]
      }),
      g({
        slug: 'alsace-wine-route-villages',
        name: 'Alsace Wine Route Villages',
        instrument: 'Village-cluster sober route',
        layout: 'vineyard-village-cluster',
        imageQuery: 'Alsace wine route village vineyards France Riquewihr',
        imageAlt: 'Alsace Wine Route road sign among the vineyards near Orschwihr',
        imageCaption: 'Route des Vins d’Alsace sign among vineyards near Orschwihr',
        purpose: 'Choose one named village corridor and a sober return plan instead of trying to collect the villages along the 170-kilometre route.',
        summary: 'From Colmar Gare SNCF, line 816 serves Riquewihr - Poste and Ribeauvillé - Gare Routière; line 830 serves Eguisheim - Place De Gaulle. Plan one corridor, then add a second village only if the dated timetable gives a workable return.',
        searchSummary: 'From Colmar Gare SNCF, compare Fluo 816 to Riquewihr - Poste/Ribeauvillé - Gare Routière with 830 to Eguisheim - Place De Gaulle. Save the date-specific Colmar-bound return first; use Kut’zig only on its published reserved season.',
        choices: [
          ['Riquewihr, one village day', 'Use Fluo 816 from COLMAR - Gare SNCF to RIQUIEWIHR - Poste and return from that same named stop on the Colmar-bound direction. Walk the public village streets; add Ribeauvillé only if the date-specific onward and return legs both fit.'],
          ['Eguisheim, a separate corridor', 'Use Fluo 830 from COLMAR - Gare SNCF to EGUISHEIM - Place De Gaulle and plan the reverse direction back to Colmar. Do not assume the line 816 villages share this route or that the timetable supports a same-day pair.'],
          ['Seasonal loop or castle', 'Kut’zig is a separate seasonal open-top loop with reservation; its current published 2026 season ends 11 October. For a castle day, check Fluo line 500 from Sélestat SNCF to Haut-Koenigsbourg. Either replaces the village corridor.']
        ],
        access: 'Reach Colmar Gare SNCF by TER, then use the exact Fluo departure stop of the same name. Line 816 serves Riquewihr - Poste and Ribeauvillé - Gare Routière; line 830 serves Eguisheim - Place De Gaulle and continues toward Rouffach. Open the official dated timetable for both outbound and Colmar-bound return, day type and any stop notice before leaving. The regional Wine Route is about 170 km from Marlenheim to Thann, not a walkable village chain.',
        tradeoff: 'One bus corridor leaves time for the village and a respectful public-street walk. A second village, producer appointment or castle uses a separate transfer block; choose which one matters and drop the rest. A tasting also requires a sober return, so do not plan to drive afterward.',
        stages: [
          ['Start at the rail-coach interchange', 'Use Colmar Gare SNCF as the base gateway. Check the train arrival and exact Fluo 816 or 830 stop and direction before buying any tasting slot.'],
          ['Choose one stop and one walk', 'For Riquewihr, use RIQUIEWIHR - Poste on line 816; for Eguisheim, use EGUISHEIM - Place De Gaulle on line 830. Walk the public center and a currently open signed route without entering vineyards or work yards.'],
          ['Book one visit only after the return works', 'If you want a cellar visit, confirm its appointment directly with the producer, travel time from the named stop and enough margin for the Colmar-bound departure. Keep the driver sober or use transit throughout.'],
          ['Return from the same stop', 'Recheck the Colmar-bound line, date and stop notices. Add Ribeauvillé after Riquewihr only if both lines and the last return are feasible; otherwise keep one village and return to Colmar.']
        ],
        fallback: 'If the dated outward/return pair is poor, use a full Colmar day instead of a one-way rural trip. In rain, heat or a harvest closure, stay on public streets or move the outing to a later date. The Kut’zig loop or line 500 to the castle is a substitute only when its own current operating calendar, reservation/admission and return fit.',
        watch: [
          ['Line numbers and timetables change', 'Fluo renumbered many Grand Est coach lines on 1 September 2026. Use current lines 816/830 rather than legacy 68R016/68R030 references, and verify stop notices and both directions for your travel date.'],
          ['Kut’zig is seasonal and reserved', 'The Colmar Tourist Office lists an operating season of 3 April–11 October 2026 and requires reservation. That period ends on this review date; a later trip needs the next published calendar.'],
          ['A tasting changes the return plan', 'The Fluo 8152 school route is access-limited and is not a tourist substitute. Do not rely on it. After any tasting, use the confirmed public transport or a pre-arranged sober driver; never drive after drinking.']
        ],
        duration: 'Allow most of a day for one coach corridor, a village walk, meal and return. If a producer appointment is added, budget its booked duration and travel to the actual cellar; the second village is optional only when the timetable still protects the return.',
        combine: 'Choose Riquewihr (and conditionally Ribeauvillé) on line 816, or Eguisheim on line 830. Keep Strasbourg, the 170-km route’s distant sections and the Sélestat castle shuttle for separate days.',
        verify: 'Open the official Fluo 816 or 830 date-specific timetable, stop list and service notices; verify the return from the same stop to Colmar Gare SNCF. Confirm the producer appointment and walk, current weather/harvest notices, and the next Kut’zig or line 500 calendar if substituting.',
        hubAccess: 'From Colmar Gare SNCF, line 816 serves RIQUIEWIHR - Poste and RIBEAUVILLE - Gare Routière; 830 serves EGUISHEIM - Place De Gaulle. Both are date-specific coach trips with their own return directions.',
        hubTradeoff: 'Choose one corridor and protect its return. Add a second village or cellar only when the actual timetable and appointment fit without sacrificing the connection back to Colmar.',
        hubDuration: 'Most of a day for one village and its bus return; a second stop depends on the specific date and a remaining return service.',
        siteContext: {
          label: 'A long route, several local decisions',
          heading: 'Treat the Wine Route as a corridor, not one walk.',
          intro: 'The official Wine Route extends about 170 km between Marlenheim and Thann. Its villages are separate communities with different public-transport stops and calendars. This page uses two concrete Colmar corridors as examples; each trip still needs a dated return plan.',
          details: [
            ['North-central: Riquewihr and Ribeauvillé', 'Current Fluo 816 lists Colmar Gare SNCF, Riquewihr - Poste and Ribeauvillé - Gare Routière. These stops make the places possible by coach on selected dates, but do not guarantee a convenient sequence or connection between villages.'],
            ['South-central: Eguisheim', 'Current Fluo 830 lists Colmar Gare SNCF and Eguisheim - Place De Gaulle. Plan Eguisheim on its own route and check the Colmar-bound departure before leaving the village.'],
            ['What an image can and cannot show', 'The page image is a Route des Vins d’Alsace road sign among vineyards near Orschwihr; it does not depict a named village. Use it as route context rather than as a claim about a destination façade.']
          ]
        },
        operations: {
          entryReturn: 'Use TER to Colmar Gare SNCF, then the Fluo coach stop COLMAR - Gare SNCF. For Riquewihr, check line 816 to RIQUIEWIHR - Poste; for Eguisheim, line 830 to EGUISHEIM - Place De Gaulle. Read the outbound and Colmar-bound listings for your exact date and stop; save a return with margin before any village walk.',
          booking: 'There is no single Wine Route ticket or universal cellar walk-in. Contact a named producer directly for its current visitor calendar and reservation conditions. Kut’zig requires reservation through the official visitor channel during its published season; its 2026 listing ends 11 October. The castle shuttle has a separate annual calendar.',
          weather: 'Check the official forecast and local route notices. Rain, heat, harvest machinery or a temporary vineyard-path closure should shorten or cancel the exposed walk; preserve a full Colmar museum and old-town day rather than improvising on a roadside.'
        },
        faq: [
          ['Which bus reaches Riquewihr from Colmar?', 'Fluo’s current line 816 lists COLMAR - Gare SNCF and RIQUIEWIHR - Poste, plus RIBEAUVILLE - Gare Routiere. Confirm both directions and the exact travel date in the live Fluo timetable.'],
          ['Can I visit Eguisheim on the same bus route?', 'Eguisheim is on current Fluo line 830 at EGUISHEIM - Place De Gaulle, not line 816. Treat it as a separate corridor unless a date-specific connection plan explicitly joins them.'],
          ['Can I use Kut’zig after 11 October 2026?', 'The Colmar Tourist Office currently lists 3 April through 11 October 2026 and says reservation is required. Check for a newly published season before planning a later trip; do not assume winter operation.']
        ],
        sources: [
          ['https://pro.visit.alsace/en/the-wine-route/', 'Visit Alsace — official route length and Marlenheim–Thann extent'],
          ['https://pro.visit.alsace/en/discover-alsace-without-a-car/', 'Visit Alsace — regional rail and car-free planning'],
          ['https://services.fluo.grandest.fr/fr/schedules/line/30671', 'Fluo Grand Est — line 816 stop list and live timetable'],
          ['https://services.fluo.grandest.fr/fr/schedules/line/30647', 'Fluo Grand Est — line 830 stop list and live timetable'],
          ['https://www.fluo.grandest.fr/cars-fluo/', 'Fluo Grand Est — current coach network and 2026 renumbering'],
          ['https://www.tourisme-colmar.com/en/practical/travel-and-mobility/public-transport', 'Colmar Tourist Office — station and regional-coach planning'],
          ['https://www.tourisme-colmar.com/en/visit/visit/kut-zig-open-top-bus', 'Colmar Tourist Office — Kut’zig season and reservation'],
          ['https://www.haut-koenigsbourg.fr/en/practical-informations/the-haut-koenigsbourg-shuttle-bus-l500/', 'Haut-Koenigsbourg — current seasonal line 500 from Sélestat']
        ]
      })
    ]
  }),
  c({
    slug: 'burgundy',
    reviewDate: '11 October 2026',
    reviewedOn: { iso: '2026-10-11', label: '11 October 2026' },
    name: 'Dijon, Beaune & Burgundy',
    region: 'Bourgogne-Franche-Comté',
    band: 'valleys-east',
    family: 'climat-cellar-atlas',
    label: 'Climat and cellar atlas',
    tagline: 'Choose the city base before the vineyard or abbey transfer.',
    hubIntro: 'Burgundy is a set of different days: Dijon’s ducal center, Beaune’s Hôtel-Dieu and cellar appointments, vineyard villages on the Route des Grands Crus, and two distant abbey landscapes. The Climats are named, bounded vineyard parcels shaped by people and place, not one attraction road. Let the TER and Mobigo spine carry the city move; book each rural last mile separately.',
    searchSummary: 'Plan Burgundy around a two-city rail spine: give Dijon a city day, use Beaune for the Hôtel-Dieu and one booked vineyard day, and treat Vézelay or Fontenay as separate rural excursions. TER and Mobigo connect named bases; harvest, cellar appointments and the return decide which plan works.',
    stay: 'For two or three nights, choose one base: Dijon suits the ducal center, museums and a checked Côte de Nuits outing; Beaune suits the Hôtel-Dieu, cellars and the southern vineyard edge. Four or five nights can support two Dijon nights and two or three in Beaune, with one city day in each and a separate vineyard day. Add a fifth or sixth night only when an abbey has a confirmed transfer. Moving hotels costs a usable block, and Vézelay and Fontenay point in different directions.',
    transfer: 'The named city link is TER Bourgogne-Franche-Comté between Dijon-Ville and Beaune-Ville; Mobigo coach 113 also links Dijon and Beaune, while coach 114 serves the Gevrey-Chambertin and Brochon corridor. Check the exact stop, date and return in the live operator schedule: no headway is promised here. A train or coach to a base does not reach every cellar. Book a tour, taxi or bicycle for a vineyard day, and treat Vézelay and Fontenay as separate rural transfers.',
    season: 'Spring and summer open longer walking and cycling days, but heat, rain and rental hours can change the route. The Beaune tourism office notes pruning in February and harvest in September; harvest work can restrict access and makes cellar appointments more important. The November Hospices wine sale draws visitors, so check the current event date before choosing a Beaune weekend. Short winter daylight and rural service calendars favor the city museums and a confirmed cellar over an improvised village chain.',
    fallback: 'If a rural pickup, cellar appointment or weather window falls through, keep the day in its booked city: use Dijon’s Palace and museum, or Beaune’s Hôtel-Dieu and walled center. Do not replace a missed coach with a vineyard road walk or assume a taxi will appear. If the Beaune event calendar or harvest crowds make the base awkward, stay in Dijon and make only a dated rail or coach excursion that has a verified return.',
    reviewDisclaimer: 'Route and seasonal notes were checked on 11 October 2026. Recheck TER and Mobigo timetables, named stops, market and monument calendars, cellar appointments, harvest access and weather for the actual date; no fare, frequency or journey-time promise is made here.',
    itineraryLabel: 'Four-night city-and-vineyard plan',
    itineraryHeading: 'Use the rail spine for the cities; book the vineyard day as its own trip.',
    itineraryIntro: 'This framework assumes four usable days. If arrival or departure removes a day, drop the rural excursion before compressing the two city visits. Fontenay and Vézelay need separate plans beyond this sequence.',
    itinerary: [
      ['Day 1 · Dijon', 'Start at Dijon-Ville, walk into the central pedestrian streets, and give the Palace of the Dukes and Musée des Beaux-Arts one substantial block. Finish at Les Halles or the gastronomy district only if its calendar fits; keep the station return clear.'],
      ['Day 2 · Côte de Nuits choice', 'Book one cellar or guided vineyard visit. Check Mobigo coach 114 toward Gevrey-Chambertin/Brochon or a named operator pickup, then confirm the outbound and return before paying for the appointment. If the route does not fit, keep a second Dijon museum and market day.'],
      ['Day 3 · Move to Beaune', 'Use TER between Dijon-Ville and Beaune-Ville or check Mobigo coach 113. Leave luggage at the actual lodging, then visit the Hôtel-Dieu and old center. Do not add a tasting until its time and location fit the hotel move.'],
      ['Day 4 · Beaune and one vineyard layer', 'Choose a booked cellar in town or a short, signed section of the Voie des Vignes/Chemin des Grands Crus toward a named village such as Pommard or Meursault. The routes are for walking or cycling, not a substitute for return transport; check the exact route, weather and rental return.']
    ],
    faq: [
      ['How many nights should I plan for Burgundy?', 'Two or three nights work best in one base. Four or five can split between Dijon and Beaune for one day in each plus a planned vineyard outing. Reserve extra nights for a rural abbey transfer rather than trying to reach both abbeys from a city day.'],
      ['Can I use Dijon as a base for Beaune?', 'Yes. TER Bourgogne-Franche-Comté connects Dijon-Ville and Beaune-Ville, and Mobigo lists coach 113 between Dijon and Beaune. Check the date-specific return; staying in Beaune is more useful when the Hôtel-Dieu, cellar appointment and vineyard day are the focus.'],
      ['Can I reach vineyards by public transport?', 'Some routes reach named towns: Mobigo coach 114 serves the Gevrey-Chambertin/Brochon corridor, and Côte & Bus lists routes between Beaune and nearby villages. A stop is not a cellar appointment. Check its exact location, service date and return, or book a driver, tour or bicycle.'],
      ['Should I combine Vézelay and Fontenay?', 'Only with a planned vehicle or guided route. Mobigo coach 119 runs between Dijon and Avallon; Fontenay is 6 km from Montbard TGV station and needs its own transfer. They are separate countryside days, not a rail-and-walk pairing.']
    ],
    sources: [
      ['https://www.burgundy-tourism.com/', 'Burgundy Tourism — official regional guide'],
      ['https://www.beaune-tourisme.fr/explorer/decouvrir-les-hospices-de-beaune/la-vente-des-vins/', 'Beaune Tourism — official Hospices wine-sale information'],
      ['https://www.ter.sncf.com/bourgogne-franche-comte', 'TER Bourgogne-Franche-Comté — official rail information'],
      ['https://www.viamobigo.fr/en/route-schedules/6/RouteSchedules/getall', 'Mobigo — current regional coach and city-network route list'],
      ['https://www.climats-bourgogne.com/en/', 'Climats of Burgundy — official World Heritage interpretation']
    ],
    guides: [
      g({
        slug: 'dijon-ducal-city',
        reviewedOn: { iso: '2026-10-11', label: '11 October 2026' },
        name: 'Dijon Ducal City & Markets',
        instrument: 'Owl-trail civic register',
        layout: 'ducal-city-register',
        imageQuery: 'Dijon Palace of Dukes Burgundy France old town',
        imageAlt: 'The Palace of the Dukes in Dijon’s historic center',
        purpose: 'Choose a substantial Dijon city day or a separate, booked Côte de Nuits excursion instead of treating the ducal center as a pre-tasting walk.',
        summary: 'Walk from Dijon-Ville through Place Darcy and the old center to the Palace of the Dukes and Musée des Beaux-Arts; choose a market finish or check Mobigo coach 114 toward Gevrey-Chambertin for a separately planned vineyard day.',
        searchSummary: 'Dijon works as Burgundy’s rail base: walk from Dijon-Ville through Place Darcy to the Palace of the Dukes, Musée des Beaux-Arts and Les Halles, then add Gevrey only with a checked Mobigo 114 return and a booked cellar.',
        siteContext: {
          label: 'Ducal seat, city museum and working market',
          heading: 'Give the palace, collection and food streets different jobs.',
          intro: 'Dijon’s historic center is compact enough to walk, but the Palace of the Dukes contains more than one visit. Choose the civic and ducal setting, the museum collection, or a timed rural appointment as the main block.',
          details: [
            ['Place Darcy to the old center', 'From Dijon-Ville, use Place Darcy as the first orientation point, then walk east through the central streets toward Notre-Dame and Place de la Libération. Keep the return westward in mind before adding a second district.'],
            ['Palace and Musée des Beaux-Arts', 'The Palace of the Dukes is both a civic landmark and the home of the Musée des Beaux-Arts. Select the galleries or current exhibition that matter to you; a broad collection is not a quick stop between trains.'],
            ['Les Halles and gastronomy', 'Use the covered market and nearby food streets as a separate choice from a vineyard tasting. Market days and trading hours change the value of this finish, so check the current city calendar.']
          ]
        },
        choices: [
          ['Palace and a chosen museum collection', 'Enter the Palace of the Dukes for the Musée des Beaux-Arts, then walk the central streets and note how civic rooms share the site. This is the strongest wet-weather and first-visit option.'],
          ['Market and old-town walk', 'Begin at Les Halles when its current market calendar fits, then follow the old streets toward Notre-Dame and Place de la Libération. This leaves museum galleries for another date and works best when market access is confirmed.'],
          ['Dijon plus one Côte de Nuits stop', 'Book one cellar or guided visit and check Mobigo coach 114 toward Gevrey-Chambertin/Brochon, including the named stop and return. The transfer and appointment replace a long museum visit; do not drive after tasting.']
        ],
        access: 'Arrive at Dijon-Ville and orient at Place Darcy before walking through the center toward Notre-Dame and Place de la Libération. For the rural alternative, Mobigo lists coach 114 through Gevrey-Chambertin and Brochon; verify the exact stop and date in the live route schedule, then meet any cellar or guide at its confirmed pickup point.',
        tradeoff: 'A vineyard excursion uses a separate coach or booked pickup and removes either the museum block or the market finish. Keep the city day complete unless the return transport and appointment leave an unhurried route.',
        stages: [
          ['Start from Dijon-Ville', 'Walk west to Place Darcy, mark the same return point, then turn east into the old center. If you have luggage, settle it before attempting a museum or market day.'],
          ['Read the ducal center', 'Visit the Palace of the Dukes and choose a meaningful section of the Musée des Beaux-Arts. Check the museum’s current visitor information and any timed entry before setting the day around a specific room.'],
          ['Choose one city finish', 'Continue to Les Halles and nearby food streets when the market calendar fits, or use the quieter streets and church exteriors. A Côte de Nuits trip is a different day unless coach 114 and a reserved visit line up.'],
          ['Return through Place Darcy', 'Walk back toward Dijon-Ville before the final train becomes urgent. If you took coach 114, return to the exact stop and direction confirmed in the dated Mobigo schedule; do not assume the vineyard operator returns to the station.']
        ],
        fallback: 'If a rural appointment or coach does not fit, stay in the center: use the current Musée des Beaux-Arts visit, the covered market when open, or a self-guided old-town walk between Place Darcy and Place de la Libération. If the museum schedule changes, do not replace it with an unbooked vineyard taxi.',
        watch: [
          ['The market has its own calendar', 'Check Les Halles’ current opening days before choosing it as the lunch anchor; keep the museum or old-town walk as the alternative.'],
          ['A named coach stop is not a cellar door', 'Mobigo 114 serves a corridor, not every producer. Confirm the stop, appointment address and onward walk or pickup before leaving Dijon.'],
          ['The return sets the tasting plan', 'Check the last workable coach or booked driver before tasting. Anyone driving the vineyard route stays sober.']
        ],
        duration: 'Give Dijon most of a day: allow one substantial block for the Palace and museum, then a market or old-town finish. A Côte de Nuits appointment needs a separate full-day envelope once coach or pickup and return are counted.',
        combine: 'Combine the Palace and Musée des Beaux-Arts with one walkable city finish. Keep Beaune, Vézelay and Fontenay on separate days; Gevrey belongs only with a dated coach or driver plan.',
        verify: 'Reopen Dijon Museums’ visitor calendar, Les Halles’ market days, Mobigo coach 114 stops and timetable, the cellar appointment and the return to Dijon-Ville before committing.',
        faq: [
          ['Can I see Dijon without a car?', 'Yes. Dijon-Ville, Place Darcy, the Palace of the Dukes, Musée des Beaux-Arts and Les Halles form a walkable city day. A Côte de Nuits cellar is a separate trip; check Mobigo coach 114 or arrange a named pickup.'],
          ['How long should I give the Musée des Beaux-Arts?', 'Make it the main indoor block and choose the current galleries or exhibition you care about. The museum’s visitor calendar controls access; do not squeeze the Palace into a short gap before a rural booking.'],
          ['Can I visit Gevrey-Chambertin from Dijon by bus?', 'Mobigo currently lists coach 114 on the Dijon–Saint-Philibert corridor serving Gevrey-Chambertin and Brochon. Check the dated route, exact stop, return and cellar reservation before treating it as a day trip.']
        ],
        sources: [
          ['https://musees.dijon.fr/', 'Dijon Museums — current visitor information and collections'],
          ['https://www.ter.sncf.com/bourgogne-franche-comte', 'TER Bourgogne-Franche-Comté — current rail planning'],
          ['https://www.viamobigo.fr/en/route-schedules/6/RouteSchedules/getall', 'Mobigo — coach 114 corridor and current route schedule']
        ]
      }),
      g({
        slug: 'beaune-hospices-vineyards',
        reviewedOn: { iso: '2026-10-11', label: '11 October 2026' },
        name: 'Beaune Hospices & Vineyard Edge',
        instrument: 'Hospices-and-climat ledger',
        layout: 'wine-capital-ledger',
        imageQuery: 'Hospices de Beaune Hotel Dieu Burgundy France roof',
        imageAlt: 'Colorful tiled roofs of the Hospices de Beaune',
        purpose: 'Make the Hôtel-Dieu and Beaune’s historic center the anchor, then add one booked cellar or a clearly bounded vineyard walk with a verified return.',
        summary: 'From Beaune-Ville, walk to the Hôtel-Dieu and walled center, then choose one cellar appointment or a signed section of the Voie des Vignes. Côte & Bus 20.2 reaches Meursault, but check the exact stop and return before leaving the city.',
        searchSummary: 'Make Beaune a one-day historic visit or a two-night wine base: visit the Hôtel-Dieu, then choose a cellar appointment or a signed Voie des Vignes segment toward Pommard or Meursault. Check Côte & Bus 20.2, the exact stop and return.',
        siteContext: {
          label: 'Hospital foundation and working vineyard landscape',
          heading: 'Read the Hôtel-Dieu before treating Beaune as a tasting stop.',
          intro: 'The Hospices site joins medical history, charitable care, art and vineyard endowment. The patterned roofs are an entrance to a larger story; the Côte de Beaune outside town is a working landscape with its own transport.',
          details: [
            ['Hôtel-Dieu', 'Use the official visit to understand the hospital’s founders, care and collections, not only the famous roof. Guided programs and special experiences can have their own reservation conditions.'],
            ['Old town and walls', 'The walled center is a practical walking layer between Beaune-Ville, the Hôtel-Dieu, dining and central cellars. Keep the station return and luggage plan visible if this is a day trip.'],
            ['Climats and vineyard routes', 'The Climats are distinct parcels; the Route des Grands Crus and marked walking or cycling paths cross a working wine region. Stay on public routes and do not enter planted rows or interrupt harvest work.']
          ]
        },
        choices: [
          ['Hôtel-Dieu and walled Beaune', 'Walk from Beaune-Ville to the Hôtel-Dieu, spend a substantial block on the hospital and collections, then complete the old center and walls. This is the clearest rail day.'],
          ['One cellar by appointment', 'Book a single producer or guided visit whose location and duration fit the town plan. Côte & Bus route 20.2 is listed between Beaune and Meursault, but the precise stop and return must fit the appointment.'],
          ['A signed vineyard segment', 'Choose a short section of the Voie des Vignes or Chemin des Grands Crus toward a named village such as Pommard or Meursault. Walking or cycling replaces a long interior visit; it does not provide a tasting shuttle.']
        ],
        access: 'Arrive at Beaune-Ville and walk toward the Hôtel-Dieu and walled center. For a Meursault outing, Mobigo’s current Côte & Bus list names route 20.2 between Beaune and Meursault; check the exact stop (including the listed Meursault stop), date and direction, then confirm the walk or pickup to the booked cellar. Do not assume a bus stop is at the vineyard gate.',
        tradeoff: 'The Hôtel-Dieu, a long wine-museum visit, more than one cellar and a vineyard walk compete for a day. Keep the Hospices as the history anchor and choose either one appointment or one outdoor segment; a tasting route requires a sober return plan.',
        stages: [
          ['Start at Beaune-Ville', 'Walk into the walled center and identify the return to Beaune-Ville before visiting. Resolve luggage first; a bottle purchase or late cellar booking changes what is practical by rail.'],
          ['Visit the Hôtel-Dieu', 'Use the official visitor circuit to read the hospital foundation, care, art and current exhibition. Check the live ticket page; reserve a guided or special experience when its listing requires it.'],
          ['Choose one wine landscape', 'For a cellar, follow the booked address and confirm whether it is walkable or needs Côte & Bus 20.2, a driver or a tour. For a walk or ride, choose a signed public segment toward Pommard or Meursault and check weather and rental return.'],
          ['Close the day in Beaune', 'Return to the center, eat and collect purchases before the station. If the November Hospices wine sale coincides with your stay, check the current event date and accommodation early.']
        ],
        fallback: 'In rain or high heat, keep the Hôtel-Dieu and a confirmed town museum or indoor stop, then walk the old center when conditions allow. If a cellar cancels, return to Beaune rather than asking an unbooked producer to receive you or stretching the route into a roadside walk.',
        watch: [
          ['A village stop is not a winery booking', 'Côte & Bus 20.2 serves a Beaune–Meursault corridor; confirm the current stop and the last useful return, then arrange the walk or pickup to your appointment.'],
          ['The route is an outdoor day', 'Check heat, rain, bike rental hours and daylight before choosing the Voie des Vignes. Keep wine tasting separate from cycling and driving.'],
          ['Harvest changes the working landscape', 'Growers prune and harvest in season. Stay on the public signed path, avoid rows and machinery, and expect appointments or access to change.']
        ],
        duration: 'Give the Hôtel-Dieu and old town most of one day. A cellar adds its appointment and transfer; a village walk or cycle route needs a separate full-day envelope and should replace, not follow, a long museum visit.',
        combine: 'Pair the Hôtel-Dieu with either one central cellar or one signed vineyard segment. Keep Dijon, Vézelay and Fontenay for separate days; Beaune is most useful as the base when the vineyard is the point.',
        verify: 'Check the Hôtel-Dieu ticket and guided-visit conditions, the cellar booking, Côte & Bus route 20.2 or the selected walking/cycling route, harvest access, weather and return to Beaune-Ville.',
        faq: [
          ['Can I visit Beaune as a day trip from Dijon?', 'Yes. TER Bourgogne-Franche-Comté and Mobigo coach 113 link the city bases. Keep the day to the Hôtel-Dieu and old center unless the dated return and a separate cellar appointment both fit.'],
          ['Can I reach Meursault by bus?', 'Mobigo’s current Côte & Bus list names route 20.2 between Beaune and Meursault. Confirm its dated timetable, exact stop and return, then check the walk or transfer to the cellar; a route label does not guarantee access to a producer.'],
          ['Should I book the Hospices in advance?', 'Check the official Hôtel-Dieu ticketing page for your date. Guided and special visit experiences are reservation-based; ticket categories and current availability can change.']
        ],
        sources: [
          ['https://musee.hospices-de-beaune.com/acces-et-tarifs', 'Hospices Civils de Beaune — Hôtel-Dieu ticketing and visit reservations'],
          ['https://www.beaune-tourisme.fr/explorer/decouvrir-les-hospices-de-beaune/la-vente-des-vins/', 'Beaune Tourism — official Hospices wine-sale information'],
          ['https://www.beaune-tourism.com/to-see-and-do/wine-tourism-experience/4-ways-to-discover-the-vineyards/', 'Beaune Tourism — vineyard visits and Route des Grands Crus'],
          ['https://www.beaune-tourism.com/to-see-and-do/enjoy-nature/walk-vineyard-path/', 'Beaune Tourism — Chemin des Grands Crus and vineyard walks'],
          ['https://www.viamobigo.fr/en/route-schedules/6/RouteSchedules/getall', 'Mobigo — Côte & Bus 20.2 and current route schedule']
        ]
      }),
      g({
        slug: 'vezelay-fontenay-abbeys',
        reviewedOn: { iso: '2026-10-11', label: '11 October 2026' },
        name: 'Vézelay, Fontenay & Abbey Country',
        instrument: 'Abbey-hill last-mile chart',
        layout: 'monastic-landscape-chart',
        imageQuery: 'Vezelay basilica hill Burgundy France panorama',
        imageAlt: 'The sculpted western façade of Vézelay Basilica in Burgundy',
        purpose: 'Choose one abbey landscape and secure its last mile before leaving a rail base; the hilltop basilica and secluded valley abbey are separate trips.',
        summary: 'For Vézelay, Mobigo coach 119 reaches Avallon from Dijon, but the basilica hill needs a separately confirmed onward plan. For Fontenay, take TER to Montbard TGV station and arrange the 6 km transfer to the abbey before travel.',
        searchSummary: 'Plan Vézelay and Fontenay as separate rural days: Mobigo coach 119 from Dijon reaches Avallon, while Fontenay is 6 km from Montbard TGV station and needs a booked transfer. Check the date, site access, group booking and return before leaving.',
        siteContext: {
          label: 'Pilgrimage hill and Cistercian valley',
          heading: 'The two abbeys ask for different routes and different pace.',
          intro: 'Vézelay’s basilica rises above a village on a steep hill. Fontenay sits in a quiet valley, where the monastic buildings, gardens and waterworks make the approach part of the visit.',
          details: [
            ['Vézelay and the basilica', 'UNESCO describes the basilica, village and surrounding hill as one heritage landscape. Walk the rising village street at a pace that suits your mobility and leave time to descend before the booked return.'],
            ['Fontenay’s Cistercian plan', 'The abbey’s cloister, church, chapter room, forge and valley setting reward a slow visit. The official FAQ says a half day can include a walk in the valley; the grounds are not a picnic site.'],
            ['Two different gateways', 'Mobigo coach 119 is listed between Dijon and Avallon; Fontenay’s official visitor FAQ places Montbard TGV station 6 km from the abbey. Neither connection takes you directly to both sites.']
          ]
        },
        choices: [
          ['Vézelay from an Avallon base', 'Use Mobigo coach 119 from Dijon toward Avallon only when the dated service fits, then book the separate road transfer to Vézelay and back. Walk the rising village street to the basilica; do not mistake Avallon for the monument entrance.'],
          ['Fontenay from Montbard', 'Take TER to Montbard TGV station, then pre-book a taxi or arrange the official visitor-office bicycle option for the 6 km last mile. Give the abbey, cloister and valley the day’s main block.'],
          ['Compare both by private vehicle', 'A two-abbey day is a long road itinerary, not a public-transport combination. Use a confirmed driver or guided route, compare each site’s current visit window and keep time for the return.']
        ],
        access: 'The two access plans are different. Mobigo lists coach 119 between Dijon and Avallon, but Avallon is not the Vézelay Basilica: book the onward road transfer and return before departure. Fontenay’s official FAQ says Montbard TGV station is 6 km away and identifies taxi or bicycle options. TER or coach arrival alone does not solve either monument’s last mile.',
        tradeoff: 'Choosing one abbey protects its landscape walk and leaves room for a meal and the confirmed return. A two-site comparison trades away both slow visits and depends on a driver; there is no verified public-transport pairing in this plan.',
        stages: [
          ['Choose the abbey and gateway', 'For Vézelay, check Mobigo coach 119 to Avallon and book the separate transfer. For Fontenay, find a TER to Montbard and confirm the taxi or bicycle before buying the outward trip.'],
          ['Arrive at the actual entrance route', 'At Vézelay, allow for the uphill village street and cobbles. At Fontenay, follow the booked transfer to the abbey entrance and use the valley approach to understand its seclusion.'],
          ['Give one site a full reading', 'At Vézelay, attend to the Romanesque portal and basilica as an active sacred place. At Fontenay, follow the cloister, church, chapter room and forge; add the valley walk only if current conditions and mobility allow.'],
          ['Return to the named pickup', 'Confirm the driver, stop and exact return before entering. Reach the meeting point early enough for the TER or coach you selected; if no reliable return is confirmed, do not leave the base.']
        ],
        fallback: 'If the transfer cannot be confirmed, keep the day in Dijon, Beaune or the rail town already in your itinerary. Do not walk a rural road to the abbey. If the Basilica or Fontenay changes visitor access, keep only the public village or grounds route permitted on that date.',
        watch: [
          ['Avallon is not the Vézelay hill', 'Coach 119 reaches the Avallon corridor, not the basilica door. Confirm the onward transfer and same-day return before treating this as car-free.'],
          ['Fontenay needs a separate last mile', 'The abbey’s current FAQ places Montbard TGV 6 km away. Book the taxi or check the visitor-office bicycle arrangement; do not rely on an unplanned walk.'],
          ['Season and group rules matter', 'Fontenay’s current FAQ says individual advance booking is not required, while group visits must be booked; summer attendance is higher. Recheck before travel, and respect worship, conservation and any temporary closure.']
        ],
        duration: 'Give either abbey most of a day once the rail or coach trunk, reserved last mile, visit and return are counted. Fontenay can be a half-day on site, but Montbard’s transfer still sets the day. A two-site road plan needs a separate full-day check.',
        combine: 'Choose Vézelay or Fontenay for one rural day. Combine both only with a pre-arranged driver or guide who confirms each site’s access window and a return to the overnight base.',
        verify: 'Check Mobigo coach 119 to Avallon, TER to Montbard, the chosen taxi or bicycle transfer, current site opening and group-booking rules, worship or conservation notices, weather and the complete return.',
        faq: [
          ['Can I visit Vézelay without a car?', 'Mobigo lists coach 119 between Dijon and Avallon, but Avallon is not the basilica. Confirm the date-specific onward transfer to the hill and its return before leaving; otherwise use a booked car or guided trip.'],
          ['How do I reach Fontenay Abbey by train?', 'Use TER to Montbard TGV station, then pre-book a taxi or arrange the visitor-office bicycle option. Fontenay’s official FAQ places the station 6 km from the abbey, so the final leg must be part of the plan.'],
          ['Can I combine both abbeys or book Fontenay as a group?', 'Only with a confirmed private vehicle or guided route. Their transfers start from different gateways, and the comparison day sacrifices time at each site. Fontenay’s current FAQ says individual visitors do not need advance booking while groups do; recheck the live visit notice and picnic rules before travel.']
        ],
        sources: [
          ['https://whc.unesco.org/en/list/84/', 'UNESCO — Vézelay, Church and Hill heritage landscape'],
          ['https://www.viamobigo.fr/en/route-schedules/6/RouteSchedules/getall', 'Mobigo — coach 119 Dijon–Avallon and current route schedule'],
          ['https://www.ter.sncf.com/bourgogne-franche-comte', 'TER Bourgogne-Franche-Comté — current rail planning'],
          ['https://www.abbayedefontenay.com/en/faq', 'Fontenay Abbey — access, individual and group booking, season and facilities'],
          ['https://www.abbayedefontenay.com/en/decouvrir-fontenay', 'Fontenay Abbey — official buildings and Cistercian history']
        ]
      })
    ]
  }),
  c({
    slug: 'lyon-rhone',
    reviewedOn: { iso: '2026-10-11', label: '11 October 2026' },
    name: 'Lyon & the Rhône Gateway',
    region: 'Auvergne-Rhône-Alpes',
    band: 'valleys-east',
    family: 'two-rivers-urban-section',
    label: 'Two-rivers urban section',
    tagline: 'Use the rivers and hills to stop the city from becoming one long climb.',
    hubIntro: 'Lyon’s planning logic comes from the Saône, Rhône and two hills. Vieux Lyon and Fourvière form a vertical historic route; Presqu’île and Croix-Rousse connect commerce to silk-worker history; Beaujolais and Pérouges require separate regional last miles. Choose the hill before the meal reservation so the final descent, not fatigue, decides where the evening ends.',
    searchSummary: 'Lyon is a four-night base for two focused city days and one regional excursion. Pair Vieux Lyon and Fourvière on one funicular route and Presqu’île with Croix-Rousse on a separate Métro A/C day. On the third full day choose TER to Pérouges or a booked Beaujolais pickup from Villefranche station; these are separate directions.',
    stay: 'Use four nights for two full Lyon days and one full excursion, sleeping near Bellecour or Cordeliers in Presqu’île for Métro A/D and walkable river routes. Part-Dieu suits an early TER start, but still needs a city-transit ride for the hills. Three nights works only when arrival or departure supplies one usable day segment; otherwise drop the excursion rather than race.',
    transfer: 'Part-Dieu and Perrache are different stations. For Pérouges, take TER from Lyon Part-Dieu to Meximieux-Pérouges, walk about 20 minutes uphill from the station to the medieval town, then reverse the same route. For Beaujolais, use TER to Villefranche-sur-Saône and continue only with a booked local pickup; TCL 217 serves named villages and stops, but its school-term, holiday, Saturday and Sunday patterns differ.',
    season: 'Summer heat makes Fourvière stairs and exposed squares harder at midday; winter rain makes Pérouges cobbles slick and can complicate the rural last mile. Traboules are private residential passages except those currently signed open. Festival dates and major events can alter access and transit.',
    fallback: 'If hill weather or the F2 funicular fails, keep the day on flat Presqu’île with a booked museum. If the rural return or Beaujolais pickup cannot be confirmed, replace the excursion with Villefranche’s Paul-Dini museum or another Lyon indoor visit; do not improvise a vineyard taxi after arrival.',
    itinerary: [
      ['Day 1 · Vieux Lyon and Fourvière', 'Enter at Métro D Vieux Lyon–Cathédrale Saint-Jean. Walk the signed public streets and a small number of open traboules, then take TCL funicular F2 up to Fourvière. Choose the basilica and viewpoints or the Roman theatres as the main upper-hill visit. Return on F2 to Vieux Lyon and Métro D; check the live line and site notices before setting the day.'],
      ['Day 2 · Presqu’île and Croix-Rousse', 'Start around Bellecour or Cordeliers, follow the central river-to-river spine north, then use Métro A to Hôtel de Ville and transfer to Métro C for Croix-Rousse. Book Maison des Canuts or its guided traboule visit before fixing lunch. Return by Métro C to Hôtel de Ville and Métro A, or walk downhill only if the stairs suit your group.'],
      ['Day 3 · Choose Pérouges or Beaujolais', 'Pérouges is the self-guided rail choice: TER from Lyon Part-Dieu to Meximieux-Pérouges, the signed uphill walk to the town, and the same walk and train back. For Beaujolais, TER to Villefranche-sur-Saône is only the regional gateway: reserve a driver or tour that confirms pickup and return to the same station, or use TCL 217 only after checking the exact stop and both directions for your date. Never combine both branches in one day.']
    ],
    sources: [
      ['https://en.visiterlyon.com/', 'ONLYLYON Tourism — official city guide'],
      ['https://www.tcl.fr/en', 'TCL — official Lyon public transport information'],
      ['https://www.tcl.fr/lignes/funiculaire-f2', 'TCL F2 — official Vieux Lyon–Fourvière funicular status and timetable'],
      ['https://www.tcl.fr/lignes/bus-217', 'TCL bus 217 — official route and date-specific timetable'],
      ['https://www.ter.sncf.com/auvergne-rhone-alpes/trajet-lyon-villefranche-sur-saone', 'TER Lyon–Villefranche-sur-Saône — official rail planning'],
      ['https://www.ter.sncf.com/auvergne-rhone-alpes/trajet-lyon-meximieux-perouges', 'TER Lyon–Meximieux-Pérouges — official rail planning'],
      ['https://meteofrance.com/previsions-meteo-france/lyon/69000', 'Météo-France Lyon — official local forecast and warnings'],
      ['https://maisondescanuts.fr/infos-utiles/', 'Maison des Canuts — official visit, reservation and access information'],
      ['https://www.plainedelain-tourisme.com/en/discover/the-medieval-city-of-P%C3%A9rouges/', 'Plaine de l’Ain Tourism — official Pérouges walking access and accessibility']
    ],
    guides: [
      g({
        slug: 'vieux-lyon-fourviere',
        name: 'Vieux Lyon & Fourvière',
        instrument: 'Funicular-and-traboule elevation card',
        layout: 'vertical-renaissance-section',
        imageQuery: 'Lyon Fourviere old town Saone France panorama',
        imageAlt: 'The stone towers of Notre-Dame de Fourvière Basilica against a clear blue sky',
        purpose: 'Connect Vieux Lyon’s Renaissance streets to Fourvière through one controlled ascent, using only signed public traboules and protecting the downhill finish.',
        summary: 'Read the Saône-side old town at street level, take the funicular or a deliberate climb once, and descend by a different safe route with the Roman or basilica layer clearly chosen.',
        choices: [
          ['Renaissance Vieux Lyon', 'Prioritize Saint-Jean, public traboules, Gadagne or another museum. Keep Fourvière to the viewpoint and funicular.'],
          ['Basilica and Roman hill', 'Ride or climb early, then give the basilica, viewpoints and Roman theaters the main block before descending.'],
          ['Two-level city comparison', 'Use one museum below and one interpreted site above. This needs a full day and a single planned ascent.']
        ],
        access: 'Enter from Métro D Vieux Lyon–Cathédrale Saint-Jean. TCL funicular F2 runs between Vieux Lyon and Fourvière; check its live status before using it as the hill connection. Only passages currently signed open to visitors are public; private residential courtyards remain off-limits.',
        tradeoff: 'Adding Croix-Rousse creates a second hill and weakens both. The route gives up Presqu’île shopping and distant food stops so Vieux Lyon and Fourvière form one legible vertical story.',
        stages: [
          ['Enter at Saint-Jean', 'Use Métro D to Vieux Lyon–Cathédrale Saint-Jean, orient to the Saône and select only public passages with current visitor signage.'],
          ['Read the Renaissance ground', 'Connect cathedral, courtyards and one museum or interpretation site, keeping resident access clear and watching the hill above for weather.'],
          ['Ascend once', 'Take TCL F2 from Vieux Lyon to Fourvière when it is operating, then choose the basilica and viewpoint or Lugdunum and the Roman theatres as the main upper layer.'],
          ['Protect the return', 'Return on F2 to Vieux Lyon and Métro D. Use a signed walking descent only when the official transit status, weather, mobility and daylight support it.']
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
        operations: {
          entryReturn: 'Start at Métro D Vieux Lyon–Cathédrale Saint-Jean. Walk the Saône-side streets and only the traboules currently signed open to visitors. Take TCL F2 from Vieux Lyon to Fourvière; return on F2 to the same station, then Métro D toward the central base. If F2 is disrupted, use a signed public street route only when weather, mobility and daylight make the climb reasonable.',
          booking: 'The basilica is an active place of worship: check its current access and service notices, and confirm Lugdunum or museum opening before choosing the upper-hill anchor. Do not enter private courtyards or assume every traboule is open.',
          weather: 'In heavy rain or heat, skip the exposed ascent and keep Vieux Lyon at street level with a booked indoor museum, or move to the flatter Presqu’île. Wet stone steps are a reason to cancel the hill, not to hurry down them.'
        },
        sources: [
          ['https://en.visiterlyon.com/discover/heritage-unesco/vieux-lyon', 'ONLYLYON Tourism — official Vieux Lyon information'],
          ['https://lugdunum.grandlyon.com/en/', 'Lugdunum Museum and Roman theatres — official visits'],
          ['https://www.tcl.fr/lignes/funiculaire-f2', 'TCL F2 — official Vieux Lyon–Fourvière funicular status and timetable'],
          ['https://www.fourviere.org/en/times/', 'Notre-Dame de Fourvière — official access, opening and worship information']
        ]
      }),
      g({
        slug: 'presquile-croix-rousse',
        name: 'Presqu’île, Croix-Rousse & the Silk City',
        instrument: 'Slope-and-silk workshop grid',
        layout: 'silk-hill-grid',
        imageQuery: 'Lyon Croix Rousse Presquile France city',
        imageAlt: 'A Croix-Rousse street junction with a TCL bus stop, route map, café terrace and trees',
        purpose: 'Move from Presqu’île’s civic and commercial center to Croix-Rousse’s silk-worker hill through one slope, one workshop or museum, and a planned transit descent.',
        summary: 'Begin between the rivers, climb by Métro or signed slope to the canut district, and use silk history to explain the urban form rather than treating traboules as a scavenger hunt.',
        choices: [
          ['Presqu’île civic route', 'Keep Bellecour, Hôtel de Ville, Terreaux and one museum on the flat central spine. This is the accessible and rain-flexible option.'],
          ['Croix-Rousse silk history', 'Use a guided passage, Maison des Canuts or current workshop visit, then read the slopes and plateau. Appointments matter.'],
          ['Food and contemporary city', 'Use markets, a reserved food experience or river edges as the main layer, adding only a compact silk-history block.']
        ],
        access: 'Start on Métro A at Bellecour or Cordeliers, change at Hôtel de Ville for Métro C to Croix-Rousse, then return by the same interchange. The steep slopes are optional; confirm any guided visit meeting point and language before arrival.',
        tradeoff: 'A full art museum, long food hall visit and deep Croix-Rousse walk exceed one day. The route keeps one central collection or meal and one hill narrative.',
        stages: [
          ['Start between the rivers', 'Use Bellecour or Cordeliers on Métro A, then follow the Presqu’île spine north toward Hôtel de Ville without zig-zagging back across the Rhône.'],
          ['Choose the central anchor', 'Visit the Musée des Beaux-Arts, market or another selected site, keeping the Croix-Rousse reservation time protected.'],
          ['Ride to silk history', 'At Hôtel de Ville, transfer from Métro A to Métro C for Croix-Rousse; join a booked Maison des Canuts or workshop visit.'],
          ['Return through Hôtel de Ville', 'Take Métro C back to Hôtel de Ville and Métro A to Bellecour or Cordeliers. Walk down only if the steep streets suit your group.']
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
        operations: {
          entryReturn: 'Start at Bellecour or Cordeliers. Ride Métro A north to Hôtel de Ville, transfer to Métro C for Croix-Rousse, and walk between Maison des Canuts and the plateau sights. Return on Métro C to Hôtel de Ville and Métro A to the central base. A downhill walk to Terreaux is an option only for people comfortable with steep, stepped streets.',
          booking: 'Maison des Canuts lists Métro C, Croix-Rousse, as its stop and accepts online reservations for its program. Its current practical page lists museum opening Tuesday–Saturday; check the selected visit and language before buying, especially for a guided traboule walk. The plateau is a working residential district, not an open-door attraction.',
          weather: 'For heavy rain or heat, keep the route on Presqu’île: choose the Musée des Beaux-Arts or another confirmed indoor stop and skip the slopes. If the museum or silk visit is closed, do not replace it with an unbooked private passage.'
        },
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
        imageAlt: 'Vineyards and the village of Juliénas among the Beaujolais hills',
        purpose: 'Choose one Lyon-region excursion—Beaujolais wine villages or the fortified town of Pérouges—and solve its last mile rather than merging them into a generic countryside day.',
        summary: 'Beaujolais needs a sober vineyard route and appointments; Pérouges needs the correct regional stop and a cobbled hill approach. The two branches answer different interests.',
        choices: [
          ['Beaujolais wine villages', 'Arrange a guide, driver, bicycle plan or sober car through one village cluster and one producer appointment. Landscape and working agriculture lead.'],
          ['Pérouges medieval town', 'Use the current rail or bus approach and give the cobbled walled town a half-day, possibly paired with a nearby town on the same line.'],
          ['Stay in Lyon', 'When rural transport or weather is weak, use a Lyon food, silk or river day. This is a legitimate choice, not a failed excursion.']
        ],
        access: 'For Pérouges, take TER from Lyon Part-Dieu to Meximieux-Pérouges and walk about 20 minutes uphill to the walled town. For Beaujolais, TER to Villefranche-sur-Saône is the rail gateway; book the vineyard pickup and return before leaving Lyon. TCL 217 stops in the region, but no bus stop is inside every village or cellar.',
        tradeoff: 'The route gives up combining Beaujolais and Pérouges. Their roads run in different directions and each needs time for context, meals and a safe return.',
        stages: [
          ['Board the chosen branch', 'For Pérouges, board TER at Lyon Part-Dieu for Meximieux-Pérouges. For Beaujolais, board TER for Villefranche-sur-Saône only after confirming the booked pickup there.'],
          ['Orient through landscape or walls', 'In Beaujolais, learn the village and climat pattern before tasting; in Pérouges, enter through the public gate and read the street plan.'],
          ['Commit to one encounter', 'Use one producer appointment or one town-and-museum route, keeping private vines and resident doorways clear.'],
          ['Return on the confirmed chain', 'Walk back down to Meximieux-Pérouges station and take TER to Part-Dieu, or meet the prebooked Beaujolais driver at Villefranche station for the return TER. Do not depend on an unverified late bus.']
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
        operations: {
          entryReturn: 'For Pérouges, board TER at Lyon Part-Dieu for Meximieux-Pérouges; follow the official walking map uphill for about 20 minutes, then return to the same station on foot and use TER back to Part-Dieu. For Beaujolais, travel by TER to Villefranche-sur-Saône and prebook a driver or tour with a named station pickup and return. TCL 217 also serves Villefranche Gare Routière and stops including Theizé Merloux and Val d’Oingt LBO Centre D120; it does not put you at every old village or vineyard, so use it only with a confirmed last mile and a checked return bus.',
          booking: 'Choose one branch. Pérouges is an inhabited village with steep access and difficult cobbles for wheelchairs, canes and strollers; use flat, closed shoes and check the current visitor map. Beaujolais cellars are appointment visits: book one producer or a guided route and ask who handles the transfer between stops. Do not drink and drive or assume a local taxi will be waiting.',
          weather: 'Rain, ice or heat can make Pérouges’s final climb and cobbles unsafe; switch to Lyon or Villefranche indoor culture. If the Beaujolais pickup, winery appointment or matching return cannot be confirmed before departure, stay in Lyon instead of boarding a one-way rural bus.'
        },
        sources: [
          ['https://www.beaujolais-tourisme.com/en/', 'Destination Beaujolais — official regional planning and bookable wine experiences'],
          ['https://www.tcl.fr/lignes/bus-217', 'TCL bus 217 — official route and date-specific timetable'],
          ['https://www.ter.sncf.com/auvergne-rhone-alpes/trajet-lyon-villefranche-sur-saone', 'TER Lyon–Villefranche-sur-Saône — official rail planning'],
          ['https://www.ter.sncf.com/auvergne-rhone-alpes/trajet-lyon-meximieux-perouges', 'TER Lyon–Meximieux-Pérouges — official rail planning'],
          ['https://www.ter.sncf.com/auvergne-rhone-alpes/se-deplacer/gares/OCE87723585', 'TER Meximieux-Pérouges station — official location and access'],
          ['https://www.plainedelain-tourisme.com/en/discover/the-medieval-city-of-P%C3%A9rouges/', 'Plaine de l’Ain Tourism — official Pérouges walking access, map and accessibility']
        ]
      })
    ]
  })
];
