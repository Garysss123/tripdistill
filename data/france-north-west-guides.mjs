import { defineFranceCluster, franceGuide } from './france-guide-builder.mjs';

const g = franceGuide;
const c = defineFranceCluster;

export const franceNorthWestClusters = [
  c({
    slug: 'paris',
    name: 'Paris',
    region: 'Île-de-France',
    band: 'capital-north',
    family: 'seine-cadastral-sheet',
    label: 'Capital transfer sheet',
    tagline: 'Build each day on one bank and one reservation anchor.',
    hubIntro: 'Paris works best as a set of walkable river and neighborhood fields joined by short Métro or RER moves. The useful decision is not how many landmarks fit on a map, but which timed interior anchors the day and which streets, gardens and river crossings form a coherent approach and exit.',
    stay: 'Four to six nights lets a first visit separate the historic Seine, one major museum axis and western Paris while retaining a weather or closure buffer. Staying near a useful Métro interchange usually saves more energy than staying beside one monument.',
    transfer: 'Match the airport route to the hotel’s actual line and station entrance, then plan sightseeing by bank and corridor. Châtelet–Les Halles, Gare du Nord and the large termini are transfer systems, not single doors; allow time for platforms, stairs and luggage.',
    season: 'Spring and autumn soften long walks but still bring queues and variable rain. Summer requires shade and water planning, while winter rewards indoor anchors and earlier river light. Major events, demonstrations and security perimeters can alter access in any season.',
    fallback: 'When a booked monument, strike or weather change breaks the plan, keep the same district: replace an interior with a nearby church, covered passage, market, smaller museum or river walk instead of crossing Paris to rescue a checklist.',
    sources: [
      ['https://parisjetaime.com/eng/', 'Paris je t’aime — official tourist office'],
      ['https://www.iledefrance-mobilites.fr/en/', 'Île-de-France Mobilités — network, fares and service information'],
      ['https://www.sncf-connect.com/en-en/', 'SNCF Connect — national and regional rail planning']
    ],
    guides: [
      g({
        slug: 'seine-islands-latin-quarter',
        name: 'Seine Islands & the Latin Quarter',
        instrument: 'Two-bank crossing ledger',
        layout: 'river-fold',
        imageQuery: 'Paris Notre Dame Seine Ile de la Cite panorama',
        imageAlt: 'Notre-Dame and the Seine around Île de la Cité in Paris',
        purpose: 'Choose a historic-core route that joins Île de la Cité to the Latin Quarter without repeating bridges or treating Notre-Dame, Sainte-Chapelle and the river as interchangeable stops.',
        summary: 'Use one reserved interior on the island, cross once into the Latin Quarter, and finish along a different Seine edge so the oldest part of Paris reads as connected ground rather than a queue of monuments.',
        choices: [
          ['Cathedral and island evidence', 'Prioritize Notre-Dame’s current visitor conditions, the exterior archaeology of the parvis and one island circuit. This is the clearest first-visit narrative but leaves less time for the Left Bank.'],
          ['Sainte-Chapelle and civic history', 'Use a timed Sainte-Chapelle or Conciergerie entry as the anchor, then read the Palais de Justice perimeter and western island. Security and ticket timing make this the least improvisable option.'],
          ['Left-Bank streets and collections', 'Keep the island mostly outdoors, then give the Cluny Museum, Panthéon area or Luxembourg edge the long block. This suits repeat visitors and poor weather better than chasing every church interior.']
        ],
        access: 'Start at Cité for the island, Saint-Michel–Notre-Dame for the south bank, or Hôtel de Ville for an east-to-west approach. Check which RER or Métro exits are operating and never assume a station name puts you on the correct bank. Timed monument security belongs inside the schedule.',
        tradeoff: 'This route deliberately omits the Louvre, Eiffel Tower and Montmartre. Adding one of them creates a cross-city transfer and turns the Latin Quarter into filler; pair the historic core with nearby Saint-Germain or Luxembourg only if the reserved interior ends early.',
        stages: [
          ['Enter by the useful bank', 'Approach from Hôtel de Ville or Saint-Michel according to the first booked site. Pause on the bridge before joining the island crowd so the two banks and cathedral orientation are clear.'],
          ['Read the island spine', 'Move between the parvis, rue d’Arcole, the quieter eastern island edge and the Palais de Justice side. Keep security-controlled interiors in their ticket order rather than walking past and returning.'],
          ['Cross once into the Latin Quarter', 'Use Petit Pont or Pont Saint-Michel, then choose one line: Cluny and the Sorbonne edge, or the Panthéon and Luxembourg direction. Do not zig-zag between both.'],
          ['Finish on a second river edge', 'Return through Saint-Germain streets or the bookstalls and quays, ending near Saint-Michel, Odéon or Pont Neuf for a direct onward line rather than retracing the island.']
        ],
        fallback: 'If cathedral or Sainte-Chapelle access is suspended, keep the geography: use the exterior island circuit, Saint-Séverin or Saint-Étienne-du-Mont where open, the Cluny collections, and a covered café pause. The day still explains medieval Paris without an improvised cross-city substitute.',
        watch: [
          ['Security is part of the visit', 'Separate lines may serve free cathedral access, timed monuments and judicial buildings. Confirm the exact entrance and prohibited items before joining a queue.'],
          ['Flood and event controls move edges', 'High water, ceremonies or policing can close lower quays and alter bridge approaches. Stay on signed upper quays rather than forcing a river-level route.'],
          ['The Latin Quarter climbs', 'The Panthéon line gains elevation and old streets can be uneven. Use the flatter Cluny–Saint-Germain option when steps or heat are the limiting factor.']
        ],
        duration: 'Allow five to seven hours with one timed interior and a real meal; use three to four hours for an exterior island and lower Latin Quarter loop. Two major ticketed interiors usually consume most of the day once security is included.',
        combine: 'Combine with Saint-Germain or Luxembourg Gardens because they preserve the same bank and walking logic. Keep the Louvre, Montmartre and the Eiffel corridor for separate days.',
        verify: 'Check Notre-Dame visitor notices, Centre des monuments nationaux ticket conditions, Île-de-France Mobilités disruptions and any local security perimeter on the morning of the visit.',
        sources: [
          ['https://www.notredamedeparis.fr/en/', 'Notre-Dame de Paris — official visitor information'],
          ['https://www.sainte-chapelle.fr/en/', 'Sainte-Chapelle — official monument information']
        ]
      }),
      g({
        slug: 'louvre-tuileries-opera',
        name: 'Louvre, Tuileries & the Opéra Axis',
        instrument: 'Reservation-and-distance ruler',
        layout: 'gallery-axis',
        imageQuery: 'Louvre Pyramid Tuileries Paris wide view',
        imageAlt: 'Red-walled Salle Mollien gallery with a skylight inside the Louvre palace',
        purpose: 'Decide whether the Louvre is the day’s main collection or merely one part of a westward city walk, then protect enough attention for the museum, garden and Opéra district you actually choose.',
        summary: 'Anchor the day at one museum entrance, move west through courtyards and the Tuileries, and turn north only once toward Palais Royal, the covered passages or Palais Garnier.',
        choices: [
          ['Louvre depth', 'Reserve a collection-led visit and select two neighboring departments before arrival. The exterior axis becomes a short decompression walk, not a second attraction marathon.'],
          ['Palace and garden city line', 'Keep the Louvre exterior, Cour Carrée, Tuileries and Place de la Concorde as the main sequence. This works for architecture and open air but sacrifices the museum interior.'],
          ['Decorative arts and Opéra', 'Use the Musée des Arts Décoratifs, Palais Royal, passages or Palais Garnier as the interior focus. This creates a more compact northward route and avoids pretending every visitor needs a full Louvre day.']
        ],
        access: 'For a Louvre reservation, follow the entrance printed in the current visitor instructions rather than walking automatically to the pyramid. Palais Royal–Musée du Louvre, Pyramides and Tuileries serve different parts of the axis; choose the arrival station from the first door, not the district name.',
        tradeoff: 'A serious Louvre visit and a serious Opéra or Orsay visit do not comfortably share one day. The plan gives up one major collection so the selected museum, lunch and outdoor axis retain enough time to be meaningful.',
        stages: [
          ['Meet the booked door', 'Arrive with ticket, bag rules and entrance identified. Use the courtyard or Carrousel only as directed, and keep a buffer for security rather than scheduling a second timed entry immediately.'],
          ['Work a bounded collection', 'Follow the museum’s current room status and choose adjacent departments. When attention fades, stop; crossing the building for one famous object is rarely the best final hour.'],
          ['Reset in the palace grounds', 'Move through Cour Carrée, Palais Royal or the Tuileries according to the exit used. Sit, eat and reorient before adding the northern city layer.'],
          ['Turn north once', 'Finish through rue Saint-Honoré and Palais Royal toward the passages or Opéra. End at Pyramides, Opéra or Auber so the return does not require walking back through the garden.']
        ],
        fallback: 'If the Louvre booking fails or rooms close, do not buy an unplanned attraction chain. Use the exterior palace sequence, Musée de l’Orangerie or Musée des Arts Décoratifs only when current admission works, then finish with Palais Royal and the passages.',
        watch: [
          ['Entrance names matter', 'The pyramid, Carrousel and group or accessibility entrances are not interchangeable. Follow the ticket and official access notice.'],
          ['Museum scale hides fatigue', 'Long internal corridors and standing time are real distance. Choose departments before arrival and schedule food outside peak pressure.'],
          ['Garden edges can close', 'Security operations, weather or events may alter Tuileries and Concorde circulation. Keep rue de Rivoli as the parallel exit line.']
        ],
        duration: 'Allow six to eight hours for a bounded Louvre visit, meal, Tuileries and one northward district. An exterior palace-and-garden route can fit four hours; a full collection day should stand alone.',
        combine: 'Combine the museum axis with Palais Royal, covered passages or Opéra according to the final exit. Do not add Versailles, Montmartre or a second large museum merely because the Métro makes it possible.',
        verify: 'Check Louvre reservations, gallery closures and entrance rules, then confirm Palais Garnier or other selected interior access and current transport notices before setting the sequence.',
        sources: [
          ['https://www.louvre.fr/en', 'Musée du Louvre — official visits and current gallery information'],
          ['https://www.operadeparis.fr/en/visits/palais-garnier', 'Paris Opera — official Palais Garnier visits']
        ]
      }),
      g({
        slug: 'eiffel-invalides-montparnasse',
        name: 'Eiffel Tower, Invalides & Western Views',
        instrument: 'Viewpoint commitment board',
        layout: 'western-aperture',
        imageQuery: 'Eiffel Tower Seine Trocadero Paris landscape',
        imageAlt: 'The Eiffel Tower seen across the Seine from western Paris',
        purpose: 'Choose one paid viewpoint and connect it to the Champ de Mars or Invalides without spending the day in duplicate queues and cross-river backtracking.',
        summary: 'Treat the Eiffel Tower as a ticketed operating system, not a photo stop, then choose either military history, Seine space or a separate skyline view as the day’s second argument.',
        choices: [
          ['Tower ascent', 'Reserve the exact level and access method that matter, accept the security envelope and make the tower the main paid event. The rest of the route stays outdoors and nearby.'],
          ['Ground-level icon and Invalides', 'Read Trocadéro, the bridge, Champ de Mars and the tower exterior, then give the Musée de l’Armée and dome the interior block. This is stronger for history than for height.'],
          ['Alternative panorama', 'Skip the tower ascent and use Montparnasse or another verified viewpoint if the skyline composition matters more than standing on the monument itself. This saves the tower queue but adds one transit move.']
        ],
        access: 'Trocadéro gives the classic west-to-east approach; Bir-Hakeim and Champ de Mars–Tour Eiffel serve the river and south side; École Militaire suits an Invalides-first day. Security perimeters can change pedestrian entry, so follow current tower instructions rather than a saved map pin.',
        tradeoff: 'Choosing the tower ascent gives up a second major museum and much of the flexible river walk. Choosing Invalides gives up the summit. The route refuses to schedule both the tower, a full museum and Montparnasse as if queues and travel were invisible.',
        stages: [
          ['Approach from the chosen sightline', 'Begin at Trocadéro for the frontal view or Bir-Hakeim for bridge and river context. If holding an early tower ticket, use the access side specified by the operator and photograph later.'],
          ['Complete the paid anchor', 'Clear security, follow the ticketed lift or stair product, and keep weather expectations realistic. Do not assume a summit ticket can be improvised from a lower-level product.'],
          ['Choose field or museum', 'After the tower, either cross Champ de Mars toward École Militaire and Invalides or use the Seine edge and Île aux Cygnes. One branch preserves energy; doing both turns the middle into transit.'],
          ['Exit on a direct line', 'Finish at La Tour-Maubourg, Invalides, École Militaire or Bir-Hakeim according to the branch. If using a separate viewpoint, move there only after a meal and a clear weather check.']
        ],
        fallback: 'When wind, visibility or ticket disruption removes the ascent, keep the western route: Trocadéro and the tower exterior, the Musée de l’Armée if open, and a Seine or Champ de Mars circuit. A later alternative viewpoint is optional, not compensation debt.',
        watch: [
          ['Ticket products are specific', 'Level, lift or stair access, date and named-holder conditions can differ. Buy only through the official operator and read the current entry instructions.'],
          ['Open space is exposed', 'Heat, wind and rain are amplified around Trocadéro and Champ de Mars. Carry water and place the indoor block at the harshest part of the day.'],
          ['Street sellers and petitions distract', 'Keep belongings controlled in dense viewing areas and decline unsolicited transactions without stopping the group in a pedestrian flow.']
        ],
        duration: 'Allow four to six hours for a tower reservation and one nearby branch; give six to eight hours when Invalides is the main interior. A photo-only west-Paris walk can be two to three hours.',
        combine: 'Combine with Invalides, the Seine river edge or Montparnasse only when one is the clear second choice. Save the Louvre, Montmartre and the historic islands for their own geographic days.',
        verify: 'Reopen the Eiffel Tower ticket and access notice, Musée de l’Armée visitor information, visibility and Île-de-France Mobilités service status before leaving.',
        sources: [
          ['https://www.toureiffel.paris/en', 'Eiffel Tower — official tickets and visitor information'],
          ['https://www.musee-armee.fr/en/home.html', 'Musée de l’Armée — official visitor information']
        ]
      })
    ]
  }),
  c({
    slug: 'paris-region-day-trips',
    name: 'Versailles, Fontainebleau & Giverny',
    region: 'Île-de-France and Seine valley',
    band: 'capital-north',
    family: 'royal-branch-diagram',
    label: 'Day-trip departure board',
    tagline: "Choose the estate by its story, season and complete rail-to-door route.",
    hubIntro: "Versailles, Fontainebleau and Giverny sit in different directions and reward different kinds of attention: the state rooms and engineered garden axis at Versailles; a many-period royal residence at Fontainebleau; Monet’s house, Clos Normand and water garden at Giverny. They are separate day plans. A ticket, train or shuttle for one does not solve the others.",
    countryCardIntro: "Choose Versailles for palace rooms and its formal garden axis, Fontainebleau for layered royal history, or Giverny for Monet's house and seasonal gardens.",
    stay: "Use Paris as the base for one of these excursions at a time. Keep the chosen rail terminal near the day’s first reservation; changing hotels saves little for a single visit. An overnight in Vernon or Fontainebleau makes sense only when the town or surrounding countryside is part of the plan.",
    transfer: "Versailles has three stations: RER C to Château–Rive Gauche (about 10 minutes on foot), line N/U to Chantiers (about 18), or line L to Rive Droite (about 17). Fontainebleau uses Transilien R from Gare de Lyon to Fontainebleau–Avon, then local bus 1 to the Château stop. Giverny uses a train to Vernon–Giverny and a separate seasonal last mile. Check both legs and their return.",
    season: "The château at Versailles and its Trianon estate close on Mondays; gardens and park have different access and event-ticket rules. Fontainebleau closes on Tuesdays and listed public holidays. Monet’s house and gardens operate seasonally: the foundation lists 1 April–1 November 2026, 10:00–18:00, last entry 17:30. Recheck the operator calendar for your date.",
    fallback: "If a reserved interior is unavailable, keep the day in its arrival town: Versailles town and the Palace’s independently open park or gardens when permitted; Fontainebleau town and only the palace grounds confirmed open; Vernon or a separately confirmed museum when Giverny is closed or full. Do not transfer to a second estate without rebuilding its ticket, last mile and return.",
    faq: [
          [
            "Which estate works best for a first visit?",
            "Choose Versailles for the palace rooms and long garden axis; Fontainebleau when layered royal history and a real town setting matter; Giverny when Monet’s house and gardens are the purpose and the seasonal date works. Give each a separate day."
          ],
          [
            "Can I combine two estates in one day?",
            "Not by public transport without sacrificing the visit. Their rail terminals and local connections differ, while Palace, Trianon and Giverny each have separate entry or seasonal limits."
          ],
          [
            "Which day is the most weather-proof?",
            "Fontainebleau and Versailles have substantial interiors, but room access and Monday/Tuesday closures still control the plan. Giverny is chiefly an outdoor, seasonal visit; keep a Paris or Vernon indoor alternative ready."
          ],
          [
            "What should I book first?",
            "Reserve the specific timed admission that anchors the day, then buy rail only after checking the station and local connection. For Giverny the foundation recommends online booking and warns that on-site waits can grow after its online quota is reached."
          ]
        ],
    reviewDate: "6 October 2026",
    reviewDateISO: "2026-10-06",
    sources: [
          [
            "https://www.visitparisregion.com/en",
            "Paris Region official destination planning"
          ],
          [
            "https://www.sncf-connect.com/en-en/",
            "SNCF Connect official rail schedules and service notices"
          ],
          [
            "https://www.iledefrance-mobilites.fr/en/",
            "Île-de-France Mobilités official network, fares and disruption information"
          ]
        ],
    guides: [
      g({
        slug: 'versailles-palace-estate',
        name: 'Versailles Palace & Estate',
        instrument: 'Gate-and-garden docket',
        layout: 'estate-grid',
        imageQuery: 'Palace of Versailles gardens France panorama',
        imageAlt: "The Orangerie parterre at Versailles, with clipped hedges, potted trees and a central fountain",
        purpose: "Plan a timed Palace visit around one legible architectural sequence, then choose either the gardens or Trianon instead of treating this vast estate as a checklist.",
        summary: "Enter the Palace at the time on your ticket, read the State Apartments through the 73-metre Hall of Mirrors toward Le Nôtre’s garden axis, then choose a bounded garden walk or a separate Trianon block. The three Versailles stations lead to different walks and Paris terminals.",
        choices: [
          [
            "State Apartments and the Hall of Mirrors",
            "The Palace route is the strongest first visit: start at the Main Courtyard, read the Marble Courtyard, then follow the official circulation into the King’s Apartments and Hall of Mirrors. The official “Marvels” route estimates 1.5 hours inside."
          ],
          [
            "Garden perspective and fountains",
            "Choose the formal axis, a single open grove or the Grand Canal and let the fountains calendar set the date. On event days the Gardens require the relevant ticket; the Palace is a separate timed entry."
          ],
          [
            "Trianon and Marie-Antoinette’s Estate",
            "Make the Grand Trianon, Petit Trianon and Hamlet the main visit. Trianon opens at noon, lies about 30 minutes on foot from the Palace through the Gardens and Park, and the official route suggests four hours."
          ]
        ],
        access: "Match the Paris origin to the door: RER C reaches Versailles Château–Rive Gauche, about a 10-minute walk from the Palace; line N/U from Montparnasse reaches Chantiers, about 18 minutes on foot; line L from Saint-Lazare reaches Rive Droite, about 17 minutes. Follow the entrance printed for the ticket. Allow time for bag checks; luggage over 55 × 35 × 25 cm is not admitted.",
        tradeoff: "The Palace rooms, full garden axis and Trianon are not one compact loop. The visit keeps the timed Palace and one outdoor branch substantial, then leaves the third for another date. The Gardens–Trianon crossing alone is a 30-minute walk each way before the interior visit.",
        stages: [
          [
            "Choose the matching station",
            "From Paris, pick the live RER C, N/U or L route by the terminal nearest your hotel, then save the station-to-entrance walk and a return option. Do not choose “Versailles” without its station suffix."
          ],
          [
            "Read the Palace along its axis",
            "Use the Main Courtyard and Marble Courtyard to notice how Louis XIV’s enlargement surrounds his father’s earlier hunting lodge. Follow the State Apartments to the Hall of Mirrors: its 357 mirrors face windows onto the garden perspective, making the view part of the room’s design."
          ],
          [
            "Spend the second block in one domain",
            "Take the official garden route toward one grove or the Grand Canal, or reserve the later Trianon visit. The Estate of Trianon ticket covers that estate and the Park, not the Palace; the Passport includes timed Palace entry, Trianon, exhibitions, Gardens and Park. Check the date’s exact product and show calendar."
          ],
          [
            "Return before the estate closes",
            "The Trianon branch requires retracing or using a verified internal vehicle. Recheck seasonal closing time, gate access and rail works; keep a train in reserve rather than ending at the latest possible departure."
          ]
        ],
        fallback: "If the timed Palace entry is sold out, use only the Park or Gardens that your date’s rules permit; a fountain or Musical Gardens day can require its own ticket. If wind, rain or heat makes the long axis unworkable, keep to the Palace and the town rather than crossing to Trianon late.",
        watch: [
          [
            "Monday closes both palaces",
            "The Palace and Trianon estate are closed on Mondays; the Park and Gardens have different hours and access rules. Confirm the exact calendar before buying rail."
          ],
          [
            "The closest station depends on the hotel",
            "Rive Gauche is the shortest walk, but a direct train from Montparnasse or Saint-Lazare can make another station simpler. Choose by complete journey, not walking distance alone."
          ],
          [
            "Tickets cover different places",
            "A Trianon ticket is not Palace admission. The Passport includes a timed Palace slot and wider estate access; event days change garden admission. Read the ticket inclusions for your date."
          ]
        ],
        duration: "Planning estimate: allow about seven to nine hours door-to-door from central Paris for a timed Palace visit plus one estate branch. Inside, the official route suggests 1.5 hours for the Palace highlights, two hours for Gardens and Fountains, or four hours for Trianon; queues, meals and walking add time.",
        combine: "Use the town or a short park walk as the nearby extra. Keep Fontainebleau and Giverny for separate dates: each starts at another Paris terminal and adds a distinct last-mile contract.",
        verify: "Reopen the dated Versailles calendar, ticket inclusions, garden-event schedule, bag rules, entrance map and Île-de-France service notices. Confirm the return station and latest comfortable train before leaving Paris.",
        imageCreditTitle: "Versailles Orangerie parterre and fountain",
        imageCaption: "The Orangerie parterre, clipped lawns and central fountain at Versailles",
        imageEditNote: "Cropped and resized from the original to WebP; this adaptation is shared under CC BY-SA 4.0.",
        siteContext: {
          "label": "How to read the estate",
          "heading": "Follow the rooms out into the landscape.",
          "intro": "The Palace is not an isolated facade: its central state rooms, garden axis and distant Trianon estate form separate scales of royal display and retreat.",
          "details": [
            [
              "Room to horizon",
              "The Hall of Mirrors is 73 metres long. Turn from Charles Le Brun’s decorated ceiling and mirrored wall toward the windows: they frame the Grande Perspective laid out by André Le Nôtre."
            ],
            [
              "Garden as a timed visit",
              "The official Gardens and Fountains route is about two hours. Pick one open grove or the central axis, then turn back when your legs and the return train require it."
            ],
            [
              "Trianon has its own threshold",
              "The official visit route assigns four hours to Grand Trianon, Petit Trianon and the Queen’s Hamlet. Reach it after noon and budget the crossing as part of the visit."
            ]
          ]
        },
        faq: [
          [
            "Does a Trianon ticket include the Palace?",
            "No. The official Trianon ticket covers the Trianon estate, its exhibitions and the Park. The Passport includes timed Palace admission plus Trianon, exhibitions, Gardens and Park; event-day garden access and exact products can vary."
          ],
          [
            "How much time do the main routes need?",
            "The Palace highlights route is estimated at 1.5 hours, Gardens and Fountains at two hours, and Trianon at four hours. Those are on-site route estimates; add transit, security, food and the walk back."
          ],
          [
            "Which Versailles station should I use?",
            "RER C to Versailles Château–Rive Gauche is about 10 minutes on foot; Chantiers is about 18 minutes and Rive Droite about 17. The best one depends on your Paris origin and current service."
          ]
        ],
        reviewDate: "6 October 2026",
        reviewDateISO: "2026-10-06",
        sources: [
          [
            "https://en.chateauversailles.fr/plan-your-visit",
            "Château de Versailles: opening, tickets and visit planning"
          ],
          [
            "https://en.chateauversailles.fr/plan-your-visit/practical-information",
            "Official entrances, station walks, access and Trianon transfer"
          ],
          [
            "https://en.chateauversailles.fr/marvels-palace",
            "Official Palace route and Hall of Mirrors interpretation"
          ],
          [
            "https://www.iledefrance-mobilites.fr/en/",
            "Live regional rail, fare and disruption information"
          ]
        ],
      }),
      g({
        slug: 'fontainebleau-palace-forest',
        name: 'Fontainebleau Palace & Forest Edge',
        instrument: 'Court-to-forest hinge map',
        layout: 'palace-forest-section',
        imageQuery: 'Chateau Fontainebleau courtyard horseshoe staircase France',
        imageAlt: "The Château de Fontainebleau’s horseshoe staircase framed by the Cour des Adieux wings",
        purpose: "Make the rail-to-castle transfer explicit, then use the Cour des Adieux as a key to the château’s changing court functions before choosing a measured town or forest-edge finish.",
        summary: "From Gare de Lyon take Transilien R to Fontainebleau–Avon, then bus 1 toward Les Lilas to the “Château” stop. Begin in the Cour des Adieux: its ceremonial horseshoe staircase and mixed wings reveal a residence assembled across reigns, not a single-period palace.",
        choices: [
          [
            "Château rooms and galleries",
            "Use the official visitor circuit to compare rooms from successive royal periods. The courtyard arrival gives the clearest start; check the day’s room closures before deciding which interiors anchor the visit."
          ],
          [
            "Château and formal grounds",
            "After the interiors, keep to the palace courtyards, gardens and the town center. This gives a complete car-free day without adding a separate forest bus or trail return."
          ],
          [
            "Château plus a forest threshold",
            "Add a signed, short forest walk only after checking the official map, daylight, weather and your return to Fontainebleau–Avon. Forest bouldering sectors and long trails are not an automatic extension of the palace gardens."
          ]
        ],
        access: "Board Transilien line R at Paris Gare de Lyon for Fontainebleau–Avon. The château’s official directions specify local bus 1 toward Les Lilas to the “Château” stop. The station is not beside the palace: check the bus timetable and stop in both directions, and retain the rail ticket and return connection details.",
        tradeoff: "The château spans many royal periods and is large enough to reward an interior-focused visit. A forest walk uses the same remaining daylight as the gardens and town; this itinerary gives up a deep trail or second château so the palace circuit and Paris return keep their margin.",
        stages: [
          [
            "Ride Line R to Fontainebleau–Avon",
            "Start at Gare de Lyon and verify the train destination on the day. At Fontainebleau–Avon, follow the official bus 1 direction toward Les Lilas and get off at “Château”; do not plan on the station name meaning palace doorstep."
          ],
          [
            "Start with the Cour des Adieux",
            "Look back across the full horseshoe staircase and the different wings around the courtyard. Château records describe this space as a service court that became a parade court under François I, Henri II and Henri IV; the staircase was rebuilt in 1632–34."
          ],
          [
            "Choose depth before the late block",
            "Follow the current official interior circuit rather than crossing rooms at random. The courtyard is also called the Cour des Adieux for Napoleon’s farewell to the Old Guard on 20 April 1814; use that moment to place the residence’s imperial layer among its earlier courts."
          ],
          [
            "Return through town or a mapped edge",
            "Keep the last hour for the town or palace grounds unless a named forest path, closure notice and bus/train return are already checked. Reach the Fontainebleau–Avon stop with one later service still available."
          ]
        ],
        fallback: "In rain or when forest access is uncertain, spend the second block in rooms confirmed open, the palace grounds or Fontainebleau town. If the château circuit changes, do not replace it with an unplanned forest trail; use the town’s independent museum or café only after checking its opening day.",
        watch: [
          [
            "Tuesday is the château closure day",
            "The château also lists closures on 1 January, 1 May and 25 December. Seasonal hours and last access differ; check the official calendar for your actual date."
          ],
          [
            "Bus 1 has its own timetable",
            "Fontainebleau–Avon is the rail station, not the château stop. Confirm “Château” in the Les Lilas direction outbound and the correct return service before entering."
          ],
          [
            "Forest routes need their own plan",
            "The forest is broad and includes bouldering sectors. Use a named official route, signed access, suitable footwear and enough daylight; stay on the palace/town loop when any of those are missing."
          ]
        ],
        duration: "Planning estimate: reserve roughly three hours for a focused interior and courtyard visit, then add the Line R journey, two bus legs, meals and whichever single garden, town or forest-edge block you choose. A full Paris day is realistic; the official opening and last-entry times govern the usable window.",
        combine: "Pair the château with Fontainebleau town or one mapped forest-edge loop. Save Vaux-le-Vicomte for another day: it has separate access, hours and a different transport problem.",
        verify: "Check château opening day, last admission and room status; Transilien R works; bus 1 direction and timetable; and the current ONF map, weather and forest access if walking beyond the palace grounds.",
        imageCreditTitle: "Fontainebleau’s Cour des Adieux and staircase",
        imageCaption: "The Cour des Adieux and double horseshoe staircase at Fontainebleau",
        siteContext: {
          "label": "Layers in the residence",
          "heading": "Read the courtyard as a changing stage.",
          "intro": "Fontainebleau’s significance lies in the way its courts and wings were adapted across generations. Use the entry courtyard to orient yourself before the interior rooms.",
          "details": [
            [
              "A working court becomes ceremonial",
              "The Cour du Cheval Blanc began as a service court and became a parade court during the reigns of François I, Henri II and Henri IV. Its enclosing wings do not share one architectural moment."
            ],
            [
              "The staircase fixes the view",
              "The horseshoe staircase was rebuilt by Jean Androuet du Cerceau in 1632–34. Stand opposite it long enough to see how it organizes the central pavilion and courtyard."
            ],
            [
              "Imperial memory is part of the place",
              "The name Cour des Adieux recalls Napoleon’s farewell to the Old Guard here in April 1814. The same space reads differently as a service court, royal approach and imperial departure."
            ]
          ]
        },
        faq: [
          [
            "How do I get from Paris to the château?",
            "Take Transilien R from Gare de Lyon to Fontainebleau–Avon, then the château-listed bus 1 toward Les Lilas to “Château.” Check the current return departure before the palace visit."
          ],
          [
            "What should I notice before entering?",
            "The Cour des Adieux was a service court that became a parade space under several kings. Its horseshoe staircase was rebuilt in 1632–34; the name also recalls Napoleon’s farewell to the Old Guard in 1814."
          ],
          [
            "Can I add a forest walk?",
            "Yes, if you choose a signed route and check its starting point, current access, weather, daylight and return transport in advance. A short edge walk is not the same as visiting a bouldering sector or crossing the forest."
          ]
        ],
        reviewDate: "6 October 2026",
        reviewDateISO: "2026-10-06",
        sources: [
          [
            "https://www.chateaudefontainebleau.fr/en/plan-your-visit/",
            "Château de Fontainebleau: opening and visitor planning"
          ],
          [
            "https://www.chateaudefontainebleau.fr/en/plan-your-visit/how-to-get-there/",
            "Official access directions and bus 1 to “Château”"
          ],
          [
            "https://collections-ressources.chateaudefontainebleau.fr/document/cour-d-honneur/6414bdbce655ae02e29713a7",
            "Château collection record for the Cour d’Honneur and staircase"
          ],
          [
            "https://www.garesetconnexions.sncf/en/stations-services/fontainebleau-avon",
            "SNCF station services and accessibility"
          ],
          [
            "https://www.fontainebleau-tourisme.com/en/planning-your-stay/how-to-get-here-2/moving-around-fontainebleau/",
            "Official local bus and town movement information"
          ],
          [
            "https://www.fontainebleau-tourisme.com/en/the-forest/the-forest-2/",
            "Official regional forest access and trail information"
          ]
        ],
      }),
      g({
        slug: 'giverny-monet-vernon',
        name: 'Giverny, Monet’s Gardens & Vernon',
        instrument: 'Seasonal shuttle clock',
        layout: 'garden-arrival-clock',
        imageQuery: 'Giverny Monet garden water lilies house France',
        imageAlt: "The green Japanese bridge and pond in Monet’s Water Garden at Giverny",
        purpose: "Plan the seasonal garden visit around its ticket window and the Vernon last mile, then read Monet’s two gardens as deliberately different compositions instead of making a rushed photo stop.",
        summary: "Gare Saint-Lazare trains reach Vernon–Giverny, not Monet’s gate; from the station arrange the current shuttle, bus, bicycle or taxi. Inside, compare the flower beds of the Clos Normand with the water, willows and Japanese bridge of the Water Garden.",
        choices: [
          [
            "House and both gardens",
            "Book the foundation ticket, then take time for the house, Clos Normand and Water Garden. The operator suggests 1.5–2 hours for an unguided visit; the Vernon transfer and Paris train sit outside that estimate."
          ],
          [
            "Garden with the Impressionism museum",
            "Add the Musée des Impressionnismes only if its current exhibition is a reason to go. It is a separate admission and visit, so choose it before buying a return connection with little slack."
          ],
          [
            "Giverny and Vernon",
            "Return to Vernon for the town center or Seine edge only when the shuttle arrival and next train leave real time. This is a lower-pressure extension than adding a second distant Normandy stop."
          ]
        ],
        access: "From Paris, use a train from Gare Saint-Lazare to Vernon–Giverny. Continue by the seasonal shuttle or another confirmed local option; the foundation lists train and access information but does not make the last mile part of the rail ticket. Check where the shuttle leaves and match its return to your reserved garden entry and train.",
        tradeoff: "The garden is the reason for the trip and opens only for a defined season. Adding Vernon or another museum takes time from the house and both garden spaces; this plan gives up a second Normandy destination so a delayed shuttle does not consume the Paris return margin.",
        stages: [
          [
            "Secure the seasonal date",
            "Check the foundation’s calendar before buying the train. For 2026 it lists daily opening from 1 April through 1 November, 10:00–18:00, last admission 17:30; later seasons need a fresh check. Book online when your date is fixed."
          ],
          [
            "Build the train and last mile together",
            "Travel from Gare Saint-Lazare to Vernon–Giverny, then use the currently listed shuttle, bus, bicycle or taxi. Save its departure point and the return timetable; the station-to-garden leg is not automatic."
          ],
          [
            "Compare the two designed gardens",
            "Start with Monet’s house and the Clos Normand flower garden, then follow the signed route to the Water Garden. Slow down at the pond and green Japanese bridge: their water, reflected forms and willows offer a different composition from the ordered beds."
          ],
          [
            "Leave room for the Vernon train",
            "The foundation’s 1.5–2-hour recommendation covers an unguided house-and-garden visit only. Add the shuttle wait and rail margins before deciding on the Impressionism museum or Vernon; keep one later train available."
          ]
        ],
        fallback: "If the foundation is closed or its online ticket quota is exhausted, do not travel to Giverny expecting a quick walk-in; the operator warns of significant waits after the online quota is reached. Use Vernon only if its town visit still works for your schedule, or return to Paris and choose an open museum. If mobility access is essential, note that the gardens are accessible but the house is not wheelchair accessible.",
        watch: [
          [
            "The opening season ends",
            "The foundation currently lists 1 April–1 November 2026. Do not use a summer timetable for a date outside that window; verify the next season directly."
          ],
          [
            "Entry and e-ticket rules matter",
            "Online booking is recommended; on-site tickets may be sold daily but waits can be significant after the online quota fills. E-tickets are non-refundable and change rules depend on purchase date."
          ],
          [
            "Garden and house access differ",
            "The foundation says the gardens are accessible to visitors with reduced mobility, but the house is not wheelchair accessible. Priority access requires the stated disability card at the group entrance on Sente Leroy."
          ]
        ],
        duration: "The foundation recommends 1.5–2 hours for an unguided visit to the house and gardens. Add the Paris–Vernon train, local transfer, its waiting buffer and your return train; in practice protect most of a day rather than treating the garden estimate as door-to-door time.",
        combine: "Use the Musée des Impressionnismes or Vernon as one nearby second layer, not both by default. Keep Rouen, the coast and Versailles for another date with their own rail and return plans.",
        verify: "Check the Fondation Claude Monet’s opening date, timed ticket and change rules; SNCF trains to Vernon–Giverny; the seasonal shuttle timetable and stop; and the Musée des Impressionnismes calendar if adding it.",
        imageCreditTitle: "Monet’s Water Garden and bridge at Giverny",
        imageCaption: "The pond and Japanese bridge in Monet’s Water Garden",
        siteContext: {
          "label": "Two gardens, two compositions",
          "heading": "Follow Monet’s change of scale.",
          "intro": "The Clos Normand and Water Garden are distinct spaces connected as one visit. The photograph shows the pond and bridge, only one part of the grounds.",
          "details": [
            [
              "Clos Normand",
              "Read the house and flower garden first: beds, paths and the house front give a close, cultivated scale. Allow room for narrow paths and other visitors rather than trying to hold a fast pace."
            ],
            [
              "Water Garden",
              "The pond and Japanese bridge introduce reflection, water lilies and overhanging willows. Pause on both sides of the bridge and compare how the same scene changes with your position."
            ],
            [
              "Museum is a separate door",
              "The Musée des Impressionnismes has its own address, calendar and admission. Treat it as an optional second visit, not as part of the Monet garden ticket."
            ]
          ]
        },
        faq: [
          [
            "How long should I spend in the garden?",
            "The foundation recommends 1.5–2 hours for the unguided house-and-garden visit. That excludes the Paris train, Vernon transfer and waiting time."
          ],
          [
            "Can I buy a ticket at the gate?",
            "The foundation says on-site tickets are available daily, but recommends booking online and warns of significant waits once the online quota is reached. E-tickets are non-refundable; check change conditions before purchase."
          ],
          [
            "Is the entire visit wheelchair accessible?",
            "The foundation says the gardens are accessible to people with reduced mobility, while the house is not wheelchair accessible. Priority access is available with the stated disability card at the group entrance on Sente Leroy."
          ],
        ],
        reviewDate: "6 October 2026",
        reviewDateISO: "2026-10-06",
        sources: [
          [
            "https://fondation-monet.com/en/useful-information/",
            "Fondation Claude Monet: 2026 season, tickets, duration and accessibility"
          ],
          [
            "https://fondation-monet.com/en/",
            "Fondation Claude Monet: house, Clos Normand and Water Garden"
          ],
          [
            "https://www.garesetconnexions.sncf/en/stations-services/vernon-giverny",
            "SNCF Vernon–Giverny station and intermodal services"
          ],
          [
            "https://www.mdig.fr/en/",
            "Musée des Impressionnismes Giverny: separate exhibitions and visits"
          ]
        ],
      })
    ]
  }),
  c({
    slug: 'lille-french-flanders',
    name: 'Lille, Arras & the Opal Coast',
    region: 'Hauts-de-France',
    band: 'capital-north',
    family: 'brick-border-register',
    label: 'Northern border register',
    tagline: 'Separate urban art, remembrance ground and open coast.',
    hubIntro: 'Lille is a rail gateway to three very different northern trips: Flemish-influenced city streets and collections, First World War remembrance landscapes around Arras, and weather-exposed Channel headlands. Each uses a different last mile and deserves its own day.',
    stay: 'Two or three nights in Lille supports the city plus one excursion. Stay in Arras for an early memorial circuit, or near the coast only when the headlands and tide are the trip rather than a rushed rail add-on.',
    transfer: 'Lille Flandres and Lille Europe are close but distinct terminals. Roubaix is urban transit, Arras is a rail base with dispersed memorial sites, and the Opal Coast often needs a bus, bicycle, tour or car after the train.',
    season: 'Northern weather changes quickly; carry a wind and rain layer even in summer. Museum closures, remembrance-site hours and coastal bus frequencies can shape the day more than temperature alone.',
    fallback: 'In coastal wind or rain, keep the city or use a named museum rather than forcing exposed cliffs. When a memorial last mile is unavailable, concentrate on Arras and its interpreted underground or civic sites instead of roadside improvisation.',
    sources: [
      ['https://en.lilletourism.com/', 'Lille Tourist Office — official destination information'],
      ['https://www.ter.sncf.com/hauts-de-france', 'TER Hauts-de-France — official regional rail information'],
      ['https://www.visitpasdecalais.com/', 'Pas-de-Calais tourism — official regional planning']
    ],
    guides: [
      g({
        slug: 'old-lille-roubaix',
        name: 'Old Lille, La Piscine & Roubaix',
        instrument: 'Brick-and-collection tramline',
        layout: 'urban-diptych',
        imageQuery: 'Lille Grand Place old town France architecture',
        imageAlt: 'Historic façades around Lille’s central square',
        purpose: 'Decide whether Lille’s center or Roubaix’s converted swimming-pool museum carries the day, then connect them without reducing both to a rushed checklist.',
        summary: 'Walk Lille’s civic and Flemish-influenced core as one compact loop, then use the Métro or tram for a deliberate Roubaix collection block only when its opening and return fit.',
        choices: [
          ['Lille city depth', 'Keep Grand Place, Vieille Bourse, Vieux-Lille and one Lille museum as the full day. This gives streets and meals enough time and avoids a late museum dash.'],
          ['Lille plus La Piscine', 'Use the center early, then travel to Roubaix for the museum’s art and industrial architecture. The split works when the museum is the clear afternoon anchor.'],
          ['Industrial and design north', 'Prioritize Roubaix or Tourcoing collections and use Lille only for arrival and evening. This suits repeat visitors and poor weather.']
        ],
        access: 'Lille Flandres is the practical center arrival for many regional trains; Lille Europe may require a short walk or one transit move. For La Piscine, follow the current Métro or tram route to Roubaix and the museum’s official final approach.',
        tradeoff: 'Adding Roubaix removes time for a second Lille museum, Citadel circuit or long market meal. The route treats the two centers as a curated pair, not proof that every northern collection can fit in one day.',
        stages: [
          ['Orient between the two Lille stations', 'Confirm which terminal you arrived at, then move to Grand Place and mark the return platform before entering the old-town lanes.'],
          ['Walk the civic core', 'Connect Grand Place, Vieille Bourse, the cathedral area and Vieux-Lille in one loop. Choose a market or museum only if it supports the day’s theme.'],
          ['Commit to Lille or Roubaix', 'Stay for a Lille collection and Citadel edge, or take the verified transit to La Piscine with enough time for its building and galleries.'],
          ['Return without a terminal mistake', 'Come back to the correct Lille station or continue from Roubaix only on a checked service. Leave a food stop before the last comfortable train.']
        ],
        fallback: 'If La Piscine is closed or transit disrupted, keep the Lille loop and use the Palais des Beaux-Arts or Hospice Comtesse when open. If city streets are wet, reverse the order and place the longest interior in the harshest weather.',
        watch: [
          ['Two main stations cause missed trains', 'Lille Flandres and Lille Europe are walkably close but not the same building. Read the ticket before the final meal.'],
          ['Museum days differ', 'La Piscine and Lille museums may close on different weekdays or change galleries. Check the exact date.'],
          ['Private courtyards remain private', 'Old Lille rewards looking upward, but residential doors and courtyards are not invitations. Use signed public passages.']
        ],
        duration: 'Allow six to eight hours for Lille plus La Piscine and four to six hours for Lille center alone. A collection-led Roubaix day can stand independently.',
        combine: 'Combine Lille with Roubaix because the urban network supports it. Keep Arras memorial ground and the Opal Coast as separate days with their own last-mile plans.',
        verify: 'Check Lille transit, La Piscine and the selected Lille museum’s opening day, plus the exact departure terminal and any regional rail engineering works.',
        sources: [
          ['https://www.roubaix-lapiscine.com/', 'La Piscine, Roubaix — official museum information'],
          ['https://www.ilevia.fr/', 'Ilévia — official Lille metropolitan transport information']
        ]
      }),
      g({
        slug: 'arras-vimy-remembrance',
        name: 'Arras, Vimy & Remembrance Ground',
        instrument: 'Context-before-distance dossier',
        layout: 'memorial-field-file',
        imageQuery: 'Canadian National Vimy Memorial France landscape',
        imageAlt: 'The Canadian National Vimy Memorial rising above its preserved landscape',
        purpose: 'Choose a respectful, interpreted First World War route with a solved last mile, rather than attempting to collect dispersed cemeteries and memorials from a station platform.',
        summary: 'Use Arras as the civic and rail anchor, then visit Vimy or another defined remembrance site through an official tour, taxi, bicycle plan or car route whose return is already fixed.',
        choices: [
          ['Arras civic and underground history', 'Stay in town for the squares, belfry context and a verified interpreted underground site. This is the strongest car-free fallback and a full history day in its own right.'],
          ['Vimy focus', 'Give the Canadian memorial, visitor center and preserved ground the main block. The landscape needs time and respectful pacing, not a quick photo transfer.'],
          ['Broader remembrance circuit', 'Add another named cemetery or museum only with a pre-arranged route and historical reason. Dispersed sites make this a vehicle or guided-day choice.']
        ],
        access: 'Arras station is walkable to the central squares, but Vimy and many battlefield sites are not ordinary urban-transit stops. Pre-book or verify the exact tour, taxi, bicycle or driving arrangement and confirm where the return pickup occurs.',
        tradeoff: 'A Vimy visit and an extensive Somme or Ypres circuit do not belong in the same casual day. This route gives up geographic coverage so the interpretation, visitor center and preserved terrain receive more than a photo pause.',
        stages: [
          ['Begin with Arras orientation', 'Walk from the station to the civic center, identify the belfry and squares, and use a museum or interpreted underground visit to establish local wartime context.'],
          ['Meet the arranged last mile', 'Join the booked guide or vehicle at the agreed point. Carry the official site name and pickup details; similar memorial names can produce costly navigation errors.'],
          ['Read one landscape carefully', 'At Vimy or the selected site, use the visitor center and signed paths before the monument. Respect closures, preserved ground and cemetery conduct.'],
          ['Return through Arras with margin', 'Leave enough time for the vehicle transfer and a later train. Use the squares for a meal or reflection only after the return is secure.']
        ],
        fallback: 'If the last-mile provider cancels, do not walk unsafe rural roads. Keep an Arras day with official underground, museum and civic interpretation where open, or reschedule the memorial rather than replacing it with an unresearched roadside stop.',
        watch: [
          ['Rural distance is deceptive', 'A site may look close to Arras on a regional map while lacking safe pedestrian access or frequent transit.'],
          ['Preserved terrain has boundaries', 'Unexploded ordnance history and conservation make signed paths and closures essential, not optional etiquette.'],
          ['Commemoration can change access', 'Ceremonies and official events may restrict parking, tours or visitor-center hours. Check the precise date.']
        ],
        duration: 'Allow a full seven-to-nine-hour day for Arras plus Vimy with a booked last mile. Arras alone merits four to six hours when an underground or museum visit is included.',
        combine: 'Combine one memorial landscape with Arras. Save the Somme, Ypres or multiple cemetery routes for a dedicated guided or driving day.',
        verify: 'Confirm the official Vimy visitor information, any tour reservation, ceremony access, Arras attraction openings and the return train before departure.',
        sources: [
          ['https://www.veterans.gc.ca/en/remembrance/memorials/overseas/first-world-war/france/vimy', 'Veterans Affairs Canada — official Vimy memorial information'],
          ['https://www.arraspaysdartois.com/en/', 'Arras Pays d’Artois tourism — official local planning']
        ]
      }),
      g({
        slug: 'opal-coast-headlands',
        name: 'Opal Coast Headlands & Boulogne',
        instrument: 'Wind-tide-return chart',
        layout: 'coastal-weather-sheet',
        imageQuery: 'Cap Blanc Nez Opal Coast France cliffs sea',
        imageAlt: 'White cliffs and coastal grassland at Cap Blanc-Nez on the Opal Coast',
        purpose: 'Choose a coast segment whose rail or bus access, walking exposure and return work in the day’s wind and visibility, instead of chasing both capes from an unsolved station.',
        summary: 'Use Boulogne-sur-Mer, Calais or a smaller coast base according to the chosen headland, then match one exposed walk with one sheltered town or marine visit.',
        choices: [
          ['Boulogne city and sea', 'Pair the old town or port with Nausicaá when open. This is the most weather-resilient public-transport day and does not require a cliff walk.'],
          ['Cap Blanc-Nez', 'Choose a defined headland approach for Channel views and open grassland. Wind and bus or parking access are the controlling facts.'],
          ['Two-Caps landscape', 'Link Cap Gris-Nez and nearby coast only with a verified car, tour, bicycle or seasonal transport plan. The distance and return make this the least spontaneous option.']
        ],
        access: 'Use the rail station that matches the actual day—Boulogne-Ville for the city, Calais for a planned Blanc-Nez connection, or another verified stop. Coastal buses can be seasonal and sparse; save the stop name and last two return options.',
        tradeoff: 'The route gives up covering the entire Grand Site des Deux-Caps. One headland plus one town produces a safer and more readable day than a fast vehicle loop with no time for weather or interpretation.',
        stages: [
          ['Arrive at the correct coast base', 'Confirm the station exit, local stop and return before walking into town. Buy food and water before the exposed segment when services near the trail are uncertain.'],
          ['Read wind and visibility', 'Use the official forecast and on-site signs to decide whether the headland remains the plan. A clear town does not guarantee a comfortable cliff edge.'],
          ['Commit to one signed segment', 'Follow marked paths and setbacks, pausing at interpreted viewpoints. Do not create a cliff-edge shortcut to recover time.'],
          ['Return through shelter', 'Use Boulogne’s old town, port or a booked Nausicaá window as the sheltered layer, then take a train with a backup rather than the last service.']
        ],
        fallback: 'In strong wind, poor visibility or path closure, use Boulogne’s city walls and Nausicaá if admission is available, or Calais museums and seafront. The fallback should reduce exposure, not merely move to another cliff.',
        watch: [
          ['Wind changes the effort', 'An easy map distance can become tiring or unsafe in headwind. Shorten before the turnaround point becomes a trap.'],
          ['Edges and tides are not scenery only', 'Stay on signed paths, respect closures and never descend to an unfamiliar beach without tide and exit knowledge.'],
          ['Seasonal buses create one-way plans', 'A morning connection may not imply an evening return. Capture the live timetable and stop location.']
        ],
        duration: 'Allow a full day for a headland plus Boulogne or Calais. A Boulogne old-town and Nausicaá day needs six to eight hours; a short signed headland circuit still needs transport margin.',
        combine: 'Combine one headland with its nearest practical base. Do not add both capes, Le Touquet and Boulogne unless traveling by car with a deliberately limited route.',
        verify: 'Check the Grand Site access information, coastal bus or parking status, Météo-France marine conditions, trail notices, Nausicaá admission and the return train.',
        sources: [
          ['https://www.lesdeuxcaps.fr/', 'Grand Site de France Les Deux-Caps — official landscape and access information'],
          ['https://www.nausicaa.fr/en', 'Nausicaá — official visitor information']
        ]
      })
    ]
  }),
  c({
    slug: 'normandy',
    name: 'Normandy: Rouen, Bayeux & Mont-Saint-Michel',
    region: 'Normandy',
    band: 'capital-north',
    family: 'tide-memory-ledger',
    label: 'Estuary and memory ledger',
    tagline: 'Give each historical landscape its own base and last mile.',
    hubIntro: 'Normandy’s best-known places lie on different rail and road systems: Rouen is a compact Seine city, Bayeux is a base for interpreted D-Day landscapes, and Mont-Saint-Michel is a tidal monument with a controlled final approach. They are not one Paris day-trip chain.',
    stay: 'Use two to four nights for two Normandy systems. Rouen works as a rail stop; Bayeux rewards an overnight before a guided coast day; Mont-Saint-Michel is calmer when the visit is not tied to an immediate long-distance return.',
    transfer: 'Regional trains reach Rouen, Bayeux and Pontorson on different corridors. D-Day sites need an arranged last mile, while Mont-Saint-Michel requires the current bus, parking and shuttle sequence rather than driving to the abbey door.',
    season: 'Rain and wind are part of the coast year-round. Summer extends daylight but intensifies road and monument pressure; winter reduces services. Tides change the bay’s appearance but do not justify entering it without an authorized guide.',
    fallback: 'Keep a city or museum layer ready for coastal weather. Rouen’s center, Bayeux’s museums and the Mont-Saint-Michel village or mainland interpretation can still work when an exposed walk or distant site is removed.',
    sources: [
      ['https://en.normandie-tourisme.fr/', 'Normandy Tourism — official regional guide'],
      ['https://www.ter.sncf.com/normandie', 'TER Normandie — official regional rail information'],
      ['https://meteofrance.com/', 'Météo-France — official forecasts and warnings']
    ],
    guides: [
      g({
        slug: 'rouen-seine-cathedral',
        name: 'Rouen Cathedral, Old Streets & the Seine',
        instrument: 'Gothic-to-river street section',
        layout: 'cathedral-street-section',
        imageQuery: 'Rouen Cathedral Gros Horloge old town France',
        imageAlt: 'Rouen Cathedral rising above the historic center',
        purpose: 'Walk Rouen as a connected cathedral, civic and Seine city while choosing one museum or memorial interior, rather than using it as a short transfer between Paris and the coast.',
        summary: 'Start at the cathedral quarter, cross the Gros-Horloge and market area, then finish at the Seine or a collection that explains the city’s art, Joan of Arc history or wartime layers.',
        choices: [
          ['Cathedral and medieval street fabric', 'Prioritize the cathedral, Saint-Maclou, the aître and timbered streets. This is the strongest architecture route and leaves museums optional.'],
          ['Joan of Arc civic narrative', 'Connect Place du Vieux-Marché with the official interpretation site and relevant streets. This needs focused reading rather than a generic old-town loop.'],
          ['Art and Seine city', 'Use the Musée des Beaux-Arts or another current collection as the main interior, then trace the center toward the river and modern rebuilding.']
        ],
        access: 'Rouen Rive Droite station sits uphill from the historic center. Walk or use current local transport according to luggage and mobility, then plan the return climb or an easier bus connection rather than discovering it at departure time.',
        tradeoff: 'Étretat, Giverny and the D-Day coast are separate transport problems. This route gives them up so Rouen’s cathedral, civic center, meal and river edge can form a complete city day.',
        stages: [
          ['Descend from the station deliberately', 'Move toward the cathedral through the center, noting the gradient and a return option. If carrying luggage, solve storage before entering narrow streets.'],
          ['Read the cathedral quarter', 'Use the cathedral exterior and current interior access, then connect Saint-Maclou and the aître without looping through the same shopping street.'],
          ['Choose civic memory or collection', 'Turn west to Place du Vieux-Marché and the Joan of Arc interpretation, or north to the art museum. Give one interior a real block.'],
          ['Finish at the Seine and climb once', 'Use the river to understand port and rebuilding layers, then take a direct line or local bus back toward Rive Droite with margin.']
        ],
        fallback: 'In heavy rain, use the cathedral when open, the Historial Jeanne d’Arc or Musée des Beaux-Arts and covered meal stops. If an interior closes, the Saint-Maclou–aître–market sequence remains a substantive exterior route.',
        watch: [
          ['The station is above the center', 'The final uphill return matters for luggage and limited mobility. Save a bus or taxi alternative.'],
          ['Religious access can pause', 'Services and events take priority at churches. Visit quietly and keep an exterior sequence that does not depend on entry.'],
          ['Timbered streets are lived space', 'Stay out of private courtyards and keep groups from blocking narrow sidewalks or shop doors.']
        ],
        duration: 'Allow five to seven hours for the city with one museum or interpretation site. A compact cathedral and old-street loop needs three to four hours without luggage.',
        combine: 'Combine Rouen with an overnight or onward train, not a rushed same-day Mont-Saint-Michel or D-Day circuit. Giverny can pair only with a deliberately limited private-transport plan.',
        verify: 'Check cathedral service access, the chosen museum or Historial opening, Rouen transit and the exact Rive Droite train before beginning the river finish.',
        sources: [
          ['https://en.rouentourisme.com/', 'Rouen Normandy Tourism — official city guide'],
          ['https://www.historial-jeannedarc.fr/en/', 'Historial Jeanne d’Arc — official visitor information']
        ]
      }),
      g({
        slug: 'bayeux-dday-landscape',
        name: 'Bayeux & the D-Day Landscape',
        instrument: 'Memory-site route dossier',
        layout: 'coast-history-dossier',
        imageQuery: 'Bayeux Normandy cathedral old town France',
        imageAlt: 'Bayeux Cathedral and historic roofs in Normandy',
        purpose: 'Use Bayeux as an interpreted base and choose one coherent D-Day sector with a responsible guide or vehicle, instead of hopping among beaches, cemeteries and bunkers without context.',
        summary: 'Separate Bayeux’s medieval and museum day from a coast circuit, then build the D-Day route around a defined theme, respectful site conduct and a dependable return.',
        choices: [
          ['Bayeux city and tapestry', 'Reserve the Bayeux Tapestry experience and connect the cathedral, old streets and one war-history museum. This is a complete car-free day.'],
          ['American sector', 'Use an official or reputable interpreted circuit for Omaha, the American Cemetery and selected related sites. Distances and emotional load make selection essential.'],
          ['British and Canadian sector', 'Choose a coherent eastern landing-beach narrative around Gold, Juno or Sword sectors rather than adding them after Omaha. A guide should explain what connects the places.']
        ],
        access: 'Bayeux station is walkable to the center, but the landing beaches and cemeteries are dispersed. Arrange a guide, tour, taxi, bicycle route or car before arrival and confirm pickup, lunch and return; ordinary local transit is not a complete battlefield solution.',
        tradeoff: 'A single day cannot interpret every landing beach and inland battle site responsibly. The route gives up coverage to preserve historical sequence, time at cemeteries and a clear connection back to Bayeux.',
        stages: [
          ['Establish context in Bayeux', 'Use the town, tapestry or a selected museum to distinguish medieval Bayeux from its 1944 role. If the coast tour begins early, move this block to the previous evening or next morning.'],
          ['Meet the arranged route', 'Confirm the exact pickup and guide credentials. Carry water and a weather layer; food opportunities can be limited between sites.'],
          ['Follow one historical sector', 'Let chronology and geography determine the stops. Use visitor centers and signed paths, and give cemeteries time without turning memorials into backdrops.'],
          ['Return for a quiet town finish', 'End in Bayeux with a meal or short river walk, leaving complex debriefing and souvenir stops outside the train deadline.']
        ],
        fallback: 'If the coast tour is cancelled, stay in Bayeux for the tapestry, cathedral, Battle of Normandy museum and Commonwealth cemetery where open. Do not hire an improvised driver with no interpretive or return plan just to reach a beach sign.',
        watch: [
          ['Sites are widely dispersed', 'Map proximity can hide narrow roads and long transfers. Select stops by narrative, not name count.'],
          ['Commemoration requires restraint', 'Follow cemetery and memorial rules, avoid staged photos on graves and keep voices and drones within current regulations.'],
          ['The tapestry is a separate reservation', 'Current admission systems and renovation projects can change access. Verify before building the Bayeux half-day around it.']
        ],
        duration: 'Give a D-Day sector a full day and Bayeux at least a separate half-day; two nights is the comfortable minimum for both. A combined one-day visit must choose a shorter town block.',
        combine: 'Combine Bayeux with one guided coast sector. Keep Mont-Saint-Michel, Étretat and Rouen for separate days or travel stages.',
        verify: 'Check the Bayeux Museum official notices, the chosen memorial authorities, guide pickup, weather and the final train. Reconfirm any 2026 commemoration or construction restrictions.',
        sources: [
          ['https://www.bayeuxmuseum.com/en/the-bayeux-tapestry/', 'Bayeux Museum — official tapestry visitor information'],
          ['https://en.normandie-tourisme.fr/discover/d-day-and-the-battle-of-normandy/dday-landing-beaches/', 'Normandy Tourism — official D-Day planning overview']
        ]
      }),
      g({
        slug: 'mont-saint-michel-bay',
        name: 'Mont-Saint-Michel & the Bay Approach',
        instrument: 'Tide-gate approach clock',
        layout: 'tidal-causeway-clock',
        imageQuery: 'Mont Saint Michel bay causeway France panorama',
        imageAlt: 'Mont-Saint-Michel rising above its tidal bay and approach',
        purpose: 'Choose the arrival corridor, abbey window and bay viewpoint while respecting the tidal landscape and avoiding an unsafe self-guided crossing.',
        summary: 'Treat the mainland arrival, shuttle or walk, village climb and abbey as four separate layers, then protect the bus, train or parking return before lingering for changing light.',
        choices: [
          ['Abbey-first day visit', 'Reserve the abbey and arrive early enough for security and the climb. This gives the monument priority over sunset or village browsing.'],
          ['Tidal landscape and exterior', 'Use the causeway, dam and approved viewpoints as the main story, adding the abbey only if the ticket and crowd conditions work.'],
          ['Evening or overnight rhythm', 'Stay nearby to experience lower visitor pressure and changing light, but verify late transport, lodging access and what remains open after day visitors leave.']
        ],
        access: 'Arrive through the official mainland reception area by the current bus, coach, bicycle or parking system. Private vehicles do not drive to the abbey gate. From the mainland, use the shuttle or the signed pedestrian approach and count the steep village stairs separately.',
        tradeoff: 'The abbey, a guided bay crossing, sunset and a same-day long-distance rail return do not fit comfortably together. This route gives up one layer so tide, safety and the final connection stay under control.',
        stages: [
          ['Enter through the mainland hub', 'Locate the return stop, visitor services and current shuttle boarding before moving toward the mount. Photograph the timetable or parking zone.'],
          ['Read the bay from safe ground', 'Use the dam or causeway to understand channels and tidal scale. Never step into the bay from visual confidence alone.'],
          ['Climb for the chosen interior', 'Follow the village route to the abbey, allowing for stairs, narrow passages and security. Use the official accessible or reduced-mobility guidance where relevant.'],
          ['Descend before the return narrows', 'Leave the upper village with enough time for crowd delay and the mainland transfer. Stay for evening light only when the onward connection is protected.']
        ],
        fallback: 'If abbey access closes, the official approach, village lower streets and bay interpretation can still form a useful visit. If severe weather or transport interrupts the approach, remain on the mainland; never improvise a bay route.',
        watch: [
          ['Tides are fast and channels are complex', 'Cross the bay only with an authorized guide and current conditions. A low-tide photograph is not a route map.'],
          ['Stairs define the monument', 'The village and abbey climb are steep and crowded. Consult official accessibility information before committing.'],
          ['The final regional connection may be sparse', 'Shuttle frequency near the mount does not guarantee a matching bus or train beyond the mainland hub.']
        ],
        duration: 'Allow five to seven hours on site, plus the full regional transfer. An abbey visit alone needs a generous half-day; a guided bay crossing or evening stay is a separate commitment.',
        combine: 'Combine with an overnight in the bay area or a simple travel day. Do not attach Saint-Malo, Bayeux or multiple Brittany towns unless using a planned multi-day road route.',
        verify: 'Check the abbey ticket and closures, official mainland transport, regional bus or train, tide information and guided-bay provider before departure.',
        sources: [
          ['https://www.mont-saint-michel.gouv.fr/en', 'Mont-Saint-Michel — official state information and access'],
          ['https://www.abbaye-mont-saint-michel.fr/en/', 'Abbey of Mont-Saint-Michel — official monument visits']
        ]
      })
    ]
  }),
  c({
    slug: 'brittany-coasts',
    name: 'Brittany: Walled Ports, Megaliths & Atlantic Headlands',
    region: 'Brittany',
    band: 'capital-north',
    family: 'granite-tide-notebook',
    label: 'Granite and tide notebook',
    tagline: 'Let tide, peninsula distance and local buses define the route.',
    hubIntro: 'Brittany is not one coastal loop. Saint-Malo and Dinan form a rail-and-bus pair, Carnac and the Gulf of Morbihan revolve around megaliths and boat or local connections, while Quimper and Crozon require a western-base decision. Tides and wind alter each system differently.',
    stay: 'Use at least three nights for two Breton systems and avoid changing base every day. Saint-Malo, Vannes or Quimper each supports a different coast; a car increases reach but does not erase parking, tide or return constraints.',
    transfer: 'TGV and regional trains reach the main cities, but peninsulas, alignments and headlands often depend on seasonal buses, boats, bicycles or a car. Confirm the final connection before choosing the postcard.',
    season: 'Summer adds boats and buses but also pressure on walled towns and coast roads. Shoulder seasons are quieter but services thin out; Atlantic wind and rain can make exposed paths unsuitable even when the town forecast looks mild.',
    fallback: 'Use a walled town, museum, market or sheltered estuary when headland weather fails. Keep the fallback in the same base so a cancelled boat or bus does not trigger a long cross-region drive.',
    sources: [
      ['https://www.brittanytourism.com/', 'Brittany Tourism — official regional guide'],
      ['https://www.breizhgo.bzh/', 'BreizhGo — official regional transport information'],
      ['https://meteofrance.com/', 'Météo-France — official forecasts and coastal warnings']
    ],
    guides: [
      g({
        slug: 'saint-malo-dinan',
        name: 'Saint-Malo Ramparts & Dinan',
        instrument: 'Tide-and-wall transfer ledger',
        layout: 'walled-port-ledger',
        imageQuery: 'Saint Malo walled city ramparts Brittany sea France',
        imageAlt: 'Saint-Malo’s walled old town and ramparts beside the sea',
        purpose: 'Choose whether Saint-Malo’s tide-and-rampart circuit or Dinan’s hill-and-port streets leads the day, then use the regional connection without treating both towns as identical medieval scenery.',
        summary: 'Walk Saint-Malo by wall, gate and shoreline condition, then add Dinan only when the bus or train and steep port-to-town gradient leave a comfortable return.',
        choices: [
          ['Saint-Malo in depth', 'Use the complete rampart circuit, intra-muros streets and one shore or museum layer. Tide determines which beaches and offshore approaches are safe.'],
          ['Dinan hill and port', 'Make Dinan’s upper town, ramparts and descent toward the Rance the central route. The climb back is part of the schedule.'],
          ['Two-town comparison', 'Link a bounded Saint-Malo morning to Dinan by a verified regional connection. This works only when services support a non-fragile evening return.']
        ],
        access: 'Saint-Malo station is outside intra-muros; walk or use local transit to the walls. Dinan’s rail or bus arrival sits above or apart from the port. Save the exact regional service and stop, especially outside summer.',
        tradeoff: 'A two-town day gives up beach time, a boat excursion and most interiors. Staying in Saint-Malo protects tide watching; staying in Dinan protects the port descent and evening streets. Choose the experience, not the number of ramparts.',
        stages: [
          ['Enter Saint-Malo through a named gate', 'Approach intra-muros, identify the return line to the station and check tide conditions before descending toward any beach or causeway.'],
          ['Complete wall or street loop', 'Use the ramparts for orientation, then descend once for the cathedral, civic streets and meal. Avoid repeatedly climbing the same stairs.'],
          ['Commit to shore or Dinan', 'Choose a safe tide-aware shoreline block, or take the verified regional service to Dinan and begin in the upper town.'],
          ['Protect the final climb and connection', 'In Dinan, descend to the port only with time and ability to return uphill; in Saint-Malo, leave offshore rocks well before the official safe window closes.']
        ],
        fallback: 'In strong wind or rain, use intra-muros streets, the cathedral and museums, or remain in Dinan’s upper town. If the intercity connection fails, deepen the town already reached rather than paying for an improvised coastal loop.',
        watch: [
          ['Tide can isolate offshore paths', 'Use posted access windows and turn back early. Never follow other visitors as proof of safety.'],
          ['Dinan has a real vertical gap', 'The port and upper town are linked by a steep route. Mobility and return time must shape the choice.'],
          ['Seasonal service is not a promise', 'Recheck BreizhGo and rail schedules on the date; a summer timetable copied into autumn can strand the plan.']
        ],
        duration: 'Give either town five to seven hours. A combined day needs eight to ten hours and a robust connection; it should omit long museums and boat trips.',
        combine: 'Combine Saint-Malo with Dinan only on a verified service day. Keep Mont-Saint-Michel, Cancale and Cap Fréhel for separate, planned excursions.',
        verify: 'Check Saint-Malo tide and access notices, BreizhGo or rail service, Dinan visitor information and the final return before leaving the first town.',
        sources: [
          ['https://www.saint-malo-tourisme.co.uk/', 'Saint-Malo Bay tourism — official visitor information'],
          ['https://www.dinan-capfrehel.com/en/', 'Dinan–Cap Fréhel tourism — official local planning']
        ]
      }),
      g({
        slug: 'morbihan-carnac',
        name: 'Carnac Megaliths & the Gulf of Morbihan',
        instrument: 'Stone-and-water access register',
        layout: 'megalith-estuary-map',
        imageQuery: 'Carnac alignments menhirs Brittany France landscape',
        imageAlt: 'Rows of standing stones at the Carnac alignments in Brittany',
        purpose: 'Visit the Carnac alignments through the current conservation access system and decide whether a Gulf boat, Vannes or a coastal bicycle segment is the day’s second contract.',
        summary: 'Start with protected megalithic ground and its interpretation, then choose one water or town layer whose departure point and return are known.',
        choices: [
          ['Carnac archaeology', 'Give the alignments, Maison des Mégalithes and a permitted circuit the main block. Guided-access rules may change by season.'],
          ['Gulf boat and islands', 'Use Vannes, Port-Navalo or another verified quay for a current boat itinerary. Tide and operator schedule replace the stone circuit as the main clock.'],
          ['Vannes and estuary edge', 'Keep the walled town and port as the base, adding a short coastal or megalithic excursion only when local transport works.']
        ],
        access: 'Vannes and Auray are the principal rail gateways; Carnac and many Gulf quays require a current regional bus, bicycle, taxi or car. Confirm whether the bus serves the alignments, town or beach, and where the return stop sits.',
        tradeoff: 'Carnac, a substantial island cruise and Vannes all deserve more than a transfer gap. The route gives up one so conservation interpretation, boarding time and the last regional connection remain credible.',
        stages: [
          ['Reach the correct local gateway', 'From Vannes or Auray, follow the verified bus or road plan to the first site. Record the return stop and service number before exploring.'],
          ['Read the stones through official access', 'Begin at the interpretation point, follow fenced or guided routes and distinguish the major alignments rather than walking randomly along traffic edges.'],
          ['Commit to water or town', 'Board only the reserved Gulf service at its named quay, or return to Vannes for walls, port and a meal. Keep bicycle routes within daylight and weather ability.'],
          ['Close the regional chain', 'Reach the station or base with a backup connection. Boat delays and summer road traffic belong inside the margin.']
        ],
        fallback: 'If a Gulf sailing is cancelled, use Vannes and a confirmed land-side megalith circuit. If Carnac guided access changes, the official exterior paths and interpretation remain preferable to entering protected ground.',
        watch: [
          ['Protected stones have seasonal rules', 'Interior access, guided visits and fencing can change. Follow the Centre des monuments nationaux notice.'],
          ['Quay names are not interchangeable', 'Gulf cruises depart from several ports with different parking and transit. Use the operator’s exact boarding point.'],
          ['Road traffic compresses connections', 'Summer congestion between beaches, Carnac and Auray can erase a tight train transfer. Keep a backup.']
        ],
        duration: 'Allow a full day for Carnac plus Vannes or a short Gulf sailing. A longer island circuit should stand alone, with another half-day reserved for the alignments.',
        combine: 'Combine Carnac with Vannes or one verified boat route. Do not add Quiberon and Belle-Île unless they are the primary excursion with an overnight or very early start.',
        verify: 'Check Carnac monument access, BreizhGo service, the selected boat operator, tide and weather notices, and the final Auray or Vannes train.',
        sources: [
          ['https://www.menhirs-carnac.fr/en/', 'Carnac alignments — official monument information'],
          ['https://www.golfedumorbihan.bzh/', 'Gulf of Morbihan tourism — official destination and port planning']
        ]
      }),
      g({
        slug: 'quimper-crozon',
        name: 'Quimper, Cornouaille & the Crozon Peninsula',
        instrument: 'Western-peninsula weather board',
        layout: 'granite-peninsula-section',
        imageQuery: 'Crozon peninsula cliffs Brittany France sea',
        imageAlt: 'Cliffs and Atlantic water on Brittany’s Crozon Peninsula',
        purpose: 'Choose a western Brittany base and one exposed peninsula sector, keeping Quimper’s cathedral city as an independent route or weather fallback rather than a hurried morning stop.',
        summary: 'Quimper supplies rail, culture and shelter; Crozon supplies headlands and long last miles. The useful itinerary decides which one owns the day before chasing Atlantic views.',
        choices: [
          ['Quimper city and museum', 'Use the cathedral, Odet edges, old streets and Breton collections as a full city day. This is the car-free and bad-weather choice.'],
          ['Crozon headland', 'Select one named sector such as Camaret, Pointe de Pen-Hir or another current signed route, then solve its bus, car or bicycle return.'],
          ['Cornouaille coast', 'Use Quimper as a gateway to one nearby town or coast segment with a verified regional connection. This favors a slower base over a peninsula grand tour.']
        ],
        access: 'Quimper is the rail anchor. Crozon and western headlands require the current BreizhGo network, a car, bicycle or arranged excursion; service patterns can be sparse and seasonal. Do not set out from Quimper without the exact final stop and return.',
        tradeoff: 'A single day cannot cover Quimper, Locronan, Pointe du Raz and Crozon responsibly. The route gives up the regional highlights reel to create one readable city or peninsula day.',
        stages: [
          ['Establish the western base', 'At Quimper station, confirm local transport and the last service. Store luggage before the cathedral loop or collect supplies before a peninsula transfer.'],
          ['Read city or harbor first', 'In Quimper, connect cathedral, old streets and Odet; on Crozon, begin at Camaret or the named settlement that provides orientation and shelter.'],
          ['Commit to one cultural or coastal line', 'Choose a museum and craft context in town, or one signed headland walk matched to wind, distance and mobility.'],
          ['Return before exposure compounds', 'Turn back from the coast with a bus or daylight buffer, or finish the Quimper loop near the station side of the center rather than adding a late remote village.']
        ],
        fallback: 'If wind, rain or the last-mile service removes Crozon, stay in Quimper for the Musée départemental breton, Musée des Beaux-Arts and sheltered old-town route where open. If a city museum closes, use the cathedral and Odet circuit.',
        watch: [
          ['The peninsula is larger than it looks', 'Headlands sit far apart on slow roads. Pick one sector and record the turnaround.'],
          ['Cliff paths need conservative weather judgment', 'Wind, wet rock and visibility can make a short route unsuitable. Follow official closures and stay back from edges.'],
          ['Sunday and shoulder-season service thins', 'A weekday itinerary may not transfer to weekends or autumn. Recheck BreizhGo for the exact date.']
        ],
        duration: 'Allow five to seven hours for Quimper and a full day for one Crozon sector from a nearby base. From Quimper by public transport, expect a long day with substantial connection time.',
        combine: 'Combine Quimper with one close Cornouaille town only when transport is strong. Keep Crozon, Pointe du Raz and the Gulf of Morbihan as separate geographic commitments.',
        verify: 'Check Quimper attraction openings, the Crozon tourist office trail or access notice, BreizhGo services and the official coastal forecast before departure.',
        sources: [
          ['https://www.quimper-tourisme.bzh/en/', 'Quimper Cornouaille tourism — official visitor information'],
          ['https://www.crozon-tourisme.bzh/', 'Crozon Peninsula tourism — official local planning']
        ]
      })
    ]
  })
];
