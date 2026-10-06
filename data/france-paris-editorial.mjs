const parisSources = [
  ['https://parisjetaime.com/eng/', 'Paris je t’aime — official visitor information'],
  ['https://www.iledefrance-mobilites.fr/en/', 'Île-de-France Mobilités — journey planning and live service information'],
  ['https://www.sncf-connect.com/en-en/', 'SNCF Connect — rail planning and service information'],
  ['https://www.paris.fr/', 'City of Paris — current public-space and service notices']
];

export const parisHubEditorial = {
  label: 'A river-city field guide',
  tagline: 'Let the Seine join your days; let reservations decide their shape.',
  hubIntro: 'Paris is easiest to read from the water outward. Île de la Cité holds the old civic and religious center; the Louvre and Tuileries stretch west along the Right Bank; the Latin Quarter climbs away from the Left Bank; and the Eiffel–Invalides landscape opens into larger lawns and military collections. These are different walking scales. Pick one district as the day’s spine, reserve one interior that matters, and let a bridge or garden carry the transition instead of crossing the city for another checklist stop.',
  stay: 'Four to six nights gives a first visit room for the island and Left Bank, a bounded Louvre day, and the western monuments without repeating long cross-city transfers. Choose a hotel beside the line you will use most, then check the actual station entrance and step-free route; a famous interchange can be tiring with bags.',
  transfer: 'For city days, choose a bank and its closest useful station before opening the map. Châtelet–Les Halles, Saint-Michel–Notre-Dame and the mainline termini are large complexes with long corridors and multiple exits. Match CDG or Orly journeys to the hotel’s real entrance using the live Île-de-France Mobilités planner; airport services and station access can change.',
  season: 'Spring and autumn suit long walks but still bring rain and timed-entry queues. In summer, put the exposed Champ de Mars or Tuileries edge earlier or later and carry water; in winter, build the route around one warm interior and daylight. Demonstrations, ceremonies, security zones and river levels can change a familiar crossing on the day.',
  fallback: 'If a timed door closes or the river edge is restricted, stay inside the same field: pair the island with Cluny, the Louvre exterior with the Tuileries only while gardens are open, or the Eiffel lawns with Invalides. A short metro ride to a planned indoor anchor is more useful than rescuing a distant landmark.',
  sources: parisSources,
  reviewDate: '6 October 2026',
  reviewDateISO: '2026-10-06',
  faq: [
    ['How many full days should I plan in Paris?', 'Four to six nights is a useful first-visit range if you want the historic core, one major museum day and the western monuments at a humane pace. Add time for a regional estate separately; Versailles, Fontainebleau and Giverny have their own route guides.'],
    ['Should I group Paris by arrondissement?', 'Use the river, a museum reservation and the walking scale as your first grouping. A day can cross arrondissement lines naturally; crossing from the island to the Eiffel corridor and back usually spends time without adding much context.'],
    ['Is the Montparnasse Observatory open?', 'No. Its operator says the observatory closed to the public on 31 March 2026 for renovation lasting several years and has not published a reopening date. The western guide uses public river and garden viewpoints instead.']
  ]
};

export const parisGuideEditorial = {
  'seine-islands-latin-quarter': {
    name: 'Seine Islands & the Latin Quarter',
    instrument: 'Island-to-left-bank crossing plan',
    layout: 'paris-island-crossing',
    imageCreditTitle: 'Notre-Dame and the Seine at Île de la Cité',
    imageCaption: 'Notre-Dame rises above the quays at the historic center of the Seine.',
    purpose: 'Follow Île de la Cité into the Latin Quarter as one readable walk: choose a single timed interior, cross once by Petit Pont or Pont Saint-Michel, and use the Left Bank streets to finish instead of returning over the same bridge.',
    summary: 'Begin where the Seine narrows around Île de la Cité, compare the royal chapel with the former palace-courthouse, then cross to Cluny and the university quarter. The day works because its medieval, judicial and scholarly layers sit within one compact river field.',
    choices: [
      ['The island’s royal pair', 'Book Sainte-Chapelle or the Conciergerie as the one interior anchor. Sainte-Chapelle makes the royal relic story tangible through its two-level chapel; the Conciergerie follows the island’s royal palace into its later prison history. The combined ticket is useful only if both visits fit your pace.'],
      ['Cathedral and river edge', 'Check Notre-Dame’s official visitor notice, then give the cathedral and its surroundings the center of the morning. Use the island circuit and quays for context; add one nearby interior only if its timed admission and security leave space for it.'],
      ['Left Bank collections', 'Keep the island mostly outdoors and devote the longer block to the Musée de Cluny and its medieval collections. The Panthéon and Luxembourg direction adds a climb and deserves a separate choice, especially in heat or when steps are a concern.']
    ],
    access: 'Choose the first station from the first booked door: Cité for the island, Saint-Michel–Notre-Dame for the south bank, or Hôtel de Ville for an eastern approach. The Sainte-Chapelle sits inside the Palais de Justice security perimeter; arrive at the time printed on the ticket, travel light and keep a second route if its nearby bus stop is not served.',
    tradeoff: 'This is a river-and-history day, not a monument sampler. Leaving the Louvre, Eiffel Tower and Montmartre out protects time for the island’s security queues, a complete chapel or courthouse visit, and the transition into the Left Bank rather than making each place a rushed exterior stop.',
    duration: 'Allow five to seven hours with one timed interior, a meal and the lower Latin Quarter. A shorter three-to-four-hour walk can cover the island and Saint-Germain edge from outside; two major ticketed interiors usually take most of the day once checks and transfers are counted.',
    combine: 'Cluny, the Sorbonne edge and Saint-Germain fit the same bank and can follow the island without another train ride. The Panthéon and Luxembourg Gardens form a hillward branch; choose them instead of the Cluny loop when the climb and extra time suit your group.',
    verify: 'Check Notre-Dame’s current visitor conditions, the Sainte-Chapelle or Conciergerie time slot and prohibited-item rules, the live Metro/RER exits, and any Palais de Justice security notice on the morning of the walk.',
    stages: [
      ['Choose the island door', 'Start at the entrance that matches the reservation: Sainte-Chapelle’s appointment, the Conciergerie ticket or Notre-Dame’s current visitor procedure. Save the exact address and arrive at the booked time; the surrounding courthouse perimeter can add checks.'],
      ['Read the island in layers', 'Walk from the cathedral parvis toward the eastern point and back along the upper quays. Then enter the chosen chapel or former palace. Sainte-Chapelle’s stained glass belongs to a royal devotional setting; the Conciergerie makes the island’s administrative and prison history visible.'],
      ['Cross once to the Left Bank', 'Use Petit Pont for Cluny and the Sorbonne side, or Pont Saint-Michel for the riverfront and Saint-Germain edge. Choose one route after the crossing. The Panthéon sits uphill; do not add it as a casual extension to a low-energy day.'],
      ['Finish without retracing', 'End near Saint-Michel, Odéon or Luxembourg according to the route chosen and the live transport map. If the lower quays are closed or wet, stay on the signed upper streets; skip the river-level detour rather than forcing a barrier.']
    ],
    fallback: 'If a chapel slot is lost, keep the sequence outdoors on the island, then visit Cluny only after confirming its current admission. If the courthouse perimeter closes the usual approach, turn toward the south-bank bridges and preserve the walk; do not wait at a blocked gate. In rain or low energy, finish with the compact Cluny–Saint-Germain line and leave the uphill Panthéon for another day.',
    watch: [
      ['Security can change the approach', 'Sainte-Chapelle is within the Palais de Justice complex. Checks may happen nearby, the Palais de Justice bus stop can be suspended, and bulky bags are prohibited. Use the official time slot and entry rules rather than arriving early with luggage.'],
      ['A bridge crossing is a route decision', 'Petit Pont and Pont Saint-Michel lead to different Left Bank walks. Pick Cluny or the hill toward the Panthéon before crossing; changing your mind at each street creates unnecessary backtracking.'],
      ['The high route and low route differ', 'Flood, policing and events can close the lower quays. The Panthéon line rises through older streets, while Cluny and Saint-Germain provide a lower alternative. Check the day’s access and choose the level that fits your mobility and energy.']
    ],
    sources: [
      ["https://www.notredamedeparis.fr/en/visit/reservation-free/", "Notre-Dame de Paris — official visit and reservation information"],
      ["https://www.notredamedeparis.fr/en/", "Notre-Dame de Paris — current worship, visitor and restoration information"],
      ["https://www.sainte-chapelle.fr/en/visite/informations-pratiques", "Sainte-Chapelle — current hours, access, security and accessibility"],
      ["https://www.sainte-chapelle.fr/en/discover/history-of-the-sainte-chapelle", "Sainte-Chapelle — official history and royal chapel architecture"],
      ["https://www.sainte-chapelle.fr/en/discover/the-radiant-gothic", "Sainte-Chapelle — Gothic architecture and stained-glass context"],
      ["https://www.paris-conciergerie.fr/en/visit/practical-information", "Conciergerie — official visit information"],
      ["https://www.paris-conciergerie.fr/en/discover/the-palais-de-la-cite-residence-and-center-of-capetian-power", "Conciergerie — the former palace and its civic rooms"],
      ["https://www.paris-conciergerie.fr/en/discover/prison-life-during-the-revolution", "Conciergerie — prison life during the Revolution"],
      ["https://www.musee-moyenage.fr/en/building-collections/the-collection-database/the-lady-and-the-unicorn-tapestries", "Musée de Cluny — collection record and current room for The Lady and the Unicorn"],
      ["https://www.musee-moyenage.fr/en/practical-information", "Musée de Cluny — current route, hours and access information"],
      ["https://www.culture.gouv.fr/thematiques/architecture/actualites-de-l-architecture/Les-metamorphoses-du-musee-de-Cluny", "French Ministry of Culture — restored Roman-baths visitor route and museum access"]
    ],
    faq: [
      ["Which paid interior should I choose on Île de la Cité?", "Choose Sainte-Chapelle for its royal chapel and stained glass, or the Conciergerie for the former palace and prison history. Their official combined ticket exists, but two security-managed visits can crowd out the Left Bank; reserve both only when the schedule genuinely allows it."],
      ["Can I visit Notre-Dame without a paid tour?", "Use the cathedral’s official visit page for current free-entry and reservation conditions. Do not buy a third-party “skip-the-line” product as a substitute for the cathedral’s own instructions."],
      ["Is the Panthéon an easy add-on?", "It is an uphill branch beyond the lower Latin Quarter, so give it a separate time block and check current entry information. Cluny and Saint-Germain make a flatter finish; Cluny also includes visible remains of Lutetia’s Roman baths, including the monumental frigidarium. Check the museum’s current route and access page before assuming every archaeological space is open on your date."]
    ],
    editorial: {
      sectionTitle: 'One island, several kinds of power',
      routeTitle: 'Cross once, then choose the hill or the lower street',
      routeIntro: 'Begin with the reservation, read the island on foot, and let the single bridge crossing commit you to one Left Bank branch.',
      sectionIntro: 'The route’s history is legible in the change of institutions: worship at the royal chapel, administration and imprisonment in the old palace, then scholarship across the river. Read these as neighboring uses of a small island and its Left Bank crossing, not as interchangeable “old Paris” stops.',
      layers: [
        ["Sainte-Chapelle · a story told in light", "Louis IX commissioned the chapel as a royal home for sacred relics. Its upper chapel is a deliberate shift from stone wall to stained glass: read the tall windows as a sequence of biblical scenes, not as a single decorative panel. The lower chapel served the palace staff, so the two levels also reveal the hierarchy of the royal household."],
        ["Conciergerie · palace rooms and a revolutionary prison", "The Salle des Gens d’Armes and the vaulted rooms recall the scale of the former royal palace and its court. After the royal household moved away, the complex became a prison; during the Revolution, prisoners passed from crowded cells to the Revolutionary Court. Read the surviving rooms as evidence of changing uses, not as a complete reconstruction of every prisoner’s cell."],
        ["Cluny · tapestries, medieval objects and Roman baths", "The six-tapestry Lady and the Unicorn ensemble is often read through the five senses and a final, enigmatic motto; the museum’s collection page currently locates it in room 20. Cluny also incorporates visible remains of Lutetia’s Roman baths, including the monumental frigidarium. Check the museum’s current route and access page before relying on any particular bath room or gallery being open."],
        ["Notre-Dame · Gothic structure after the fire", "From the parvis, look from the west façade and rose windows down the nave axis; outside, flying buttresses carry the structure beyond the walls while the interior’s pointed arches and rib vaults draw the eye upward. The 2019 fire led to a major rebuilding and restoration campaign. Main-cathedral entry, worship times, crowd controls, treasury and tower visits have different conditions, so check Notre-Dame’s own current visitor notice before choosing an interior."]
      ],
      accessTitle: 'Timed entry is part of the route',
      accessCopy: 'As checked on 6 October 2026, Sainte-Chapelle lists 09:00–17:00 from 1 October through 31 March and a last access 30 minutes before closing. It advises visitors to arrive at the time on the booking, describes the visit as accessible to people with reduced mobility, and lists RER B/C Saint-Michel, Metro 4 Cité and Metro 1/7/11/14 Châtelet. Recheck the official page before travel; temporary security measures and transport service can change.'
    }
  },
  'louvre-tuileries-opera': {
    name: 'Louvre, Tuileries & the Opera Axis',
    instrument: 'Collection-and-exit field plan',
    layout: 'paris-gallery-axis',
    imageAlt: 'Red-walled Salle Mollien gallery with a skylight inside the Louvre palace',
    imageCreditTitle: 'Salle Mollien (room 700), Louvre',
    imageCaption: 'The skylit, red-walled Salle Mollien offers an interior view of the Louvre palace.',
    purpose: 'Give the Louvre one bounded collection visit, use the courtyard and Tuileries as a decompression line, then turn north once toward Palais Royal, the passages or Palais Garnier. The chosen exit should determine the final district, not an overloaded checklist.',
    summary: 'The Louvre is a former royal palace and a collection so large that the useful question is where to stop. Select a few adjacent departments before arrival, follow the entrance named by your ticket, then let the Tuileries carry you west or north without promising yourself a second museum.',
    choices: [
      ['Collections first', 'Choose a theme before a famous-object queue chooses it for you: Egyptian or Near Eastern antiquities, Greek and Roman works, European painting, Islamic art, sculpture, or decorative arts. Select two neighboring areas from the current official map and let room closures decide the final turn.'],
      ['Palace and garden, no museum entry', 'Read the Cour Carrée, the palace frontage and the Tuileries as a public-space route. The garden is free and has seasonal hours; this option is better for architecture and open air, while the interiors remain a separate booked day.'],
      ['Northward interiors', 'Choose Palais Royal, a covered passage or Palais Garnier as the principal indoor stop and keep the Louvre to its exterior axis. The Palais Garnier is a distinct visit with its own calendar; do not combine two large collections simply because both are central.']
    ],
    access: 'Match the arrival to the admission: the Pyramid is the main entrance, while Carrousel and Porte des Lions serve ticketed visitors; groups and membership-card holders use Passage Richelieu. Metro 1/7 Palais-Royal–Musée du Louvre and line 14 Pyramides serve different edges. Visitors with disabilities have priority access, and the central lift reaches the lobby beneath the Pyramid; verify the exact entrance, room status and route before departure.',
    tradeoff: 'A useful Louvre day ends while attention remains. The route gives up the idea of seeing every department, the Opera interior and a second major museum in one sweep. It keeps time for the chosen collection, a seat and meal, and a garden or covered-passage finish that matches the actual exit.',
    duration: 'Reserve a substantial half-day for a focused museum circuit; six to eight hours can cover selected galleries, a meal, the Tuileries and one northern stop. The exterior palace-and-garden walk can be shorter, but check the garden’s seasonal closing time and leave its grounds before clearance.',
    combine: 'The Tuileries, Palais Royal and nearby covered passages fit the museum axis. Palais Garnier works as a northward finish if its visit calendar fits. Keep Orsay, Versailles and Montmartre for another day; each adds a separate admission, distance or transfer decision.',
    verify: 'As checked on 6 October 2026, the Louvre closes Tuesdays; other opening days and evening hours vary, last entry is one hour before closing, and galleries clear 30 minutes before. Confirm the ticket time, official entrance, day-of room closures, access arrangements, current garden hours and the onward station before leaving.',
    stages: [
      ['Book the right door', 'The Pyramid is the main museum entrance; ticketed visitors may also use Carrousel or Porte des Lions, while group and membership access follows Passage Richelieu. Read the current entrance notice and use the station that reaches that door with the least complicated transfer.'],
      ['Choose a collection, then stop', 'Before arrival, select two adjacent departments from the museum map. The Louvre spans ancient civilizations, European painting, sculpture, decorative arts and more; room closures and walking fatigue are real constraints. Check the live room schedule at the information desk and leave the second wing for another visit if needed.'],
      ['Reset along the palace edge', 'Leave through the exit that best fits Cour Carrée, the Tuileries or Palais Royal. Eat and sit before adding distance. In October, the garden’s published closing window is shorter than summer’s; the Louvre asks visitors to leave the grounds 30 minutes before closing.'],
      ['Turn north once', 'Take rue de Rivoli or the Palais Royal side toward a covered passage or Palais Garnier, then finish at the station that matches the return. If museum rooms are closed or the entry fails, stay outdoors and use the garden only while its live access is open.']
    ],
    fallback: 'If the reservation is unavailable, the Louvre interior closes early or selected rooms are shut, keep the palace axis outdoors and verify the Tuileries’ current hours. Palais Royal and the covered passages offer nearby shelter; the Musée de l’Orangerie or Arts Décoratifs are alternatives only after checking their own date-specific admission. Do not purchase a distant backup on impulse.',
    watch: [
      ['Opening hours are not uniform', 'The Louvre is closed on Tuesdays. Its evening days, last entry and room-clear time differ; the Tuileries has separate seasonal hours and closes before its published end time. Plan against the official page for your actual date.'],
      ['The entrance changes the route', 'Pyramid, Carrousel, Porte des Lions and Passage Richelieu have different admission conditions. A nearby-sounding station is not the same as the door on your ticket. Confirm the route and bag rules before crossing the courtyards.'],
      ['Museum distance is physical distance', 'A plan that crosses departments for one painting consumes more time and energy than the street map suggests. Use the current map and room-closure list, choose the collection that matters most, and schedule a seated break before the gardens.']
    ],
    sources: [
      ["https://www.louvre.fr/en/visit/hours-admission", "Louvre — current opening hours, admission and Tuileries schedule"],
      ["https://www.louvre.fr/en/visit/accessibility", "Louvre — accessible arrival, priority entry and visitor facilities"],
      ["https://www.louvre.fr/en/visit", "Louvre — entrances, visitor map and practical information"],
      ["https://www.louvre.fr/en/explore", "Louvre — palace, collections and visitor trails"],
      ["https://www.louvre.fr/en/visit/list-of-available-galleries", "Louvre — live gallery availability and room closures"],
      ["https://www.louvre.fr/en/explore/the-palace/a-stairway-to-victory", "Louvre — Winged Victory and the Daru staircase"],
      ["https://www.louvre.fr/en/explore/the-palace/ideal-greek-beauty", "Louvre — Venus de Milo and the Galerie des Antiques"],
      ["https://www.louvre.fr/en/explore/the-palace/from-the-mona-lisa-to-the-wedding-feast-at-cana", "Louvre — Mona Lisa and Venetian painting in Salle des États"],
      ["https://votrebanc.louvre.fr/en/the-project/", "Louvre — Tuileries Garden history, public opening and Le Nôtre redesign"],
      ["https://www.operadeparis.fr/en/visits/palais-garnier", "Paris Opera — public rooms, visit access and auditorium closures"],
      ["https://www.operadeparis.fr/en/about/history", "Paris Opera — Palais Garnier history"]
    ],
    faq: [
      ["Which Louvre entrance should I use?", "Read the current visitor page and follow the entrance written for your ticket: the Pyramid is the main entry, Carrousel and Porte des Lions have specific ticket conditions, and group or membership access uses Passage Richelieu. Do not infer the entrance from a Metro stop."],
      ["How many Louvre departments fit in one visit?", "Choose a small connected group that matches your interest and energy. The museum’s official visitor trails and live gallery list help bound the walk. Room 345 for the Venus de Milo, the Daru staircase and room 703 for Winged Victory, and Salle des États / room 711 for the Mona Lisa are route examples, never promises of access; confirm the day’s rooms before choosing two neighboring areas."],
      ["Can I enter the Louvre and leave for lunch?", "The museum says any exit is final. Plan your meal and garden break for after leaving, or use the current in-museum facilities before exiting."],
    ],
    editorial: {
      sectionTitle: 'A museum is a sequence of rooms, not a pin',
      routeTitle: 'The exit decides the garden and the northward finish',
      routeIntro: 'Use a small collection choice, one outdoor reset and one final neighborhood. The timing below reflects the published rules checked on 6 October 2026.',
      sectionIntro: 'The palace’s former royal scale still shapes a visit: courtyards set the approach, entrances lead to the central lobby, and galleries branch farther than a street map can show. Treat a museum day as a small curatorial choice. A particular period, material or region is enough to give the building a point of view.',
      layers: [
        ["Sully · Greek sculpture and a question left open", "The Louvre’s current guide places the Venus de Milo in room 345 of the Sully wing, level 0, among Classical and Hellenistic Greek sculpture. Its missing arms leave her identity unresolved between Aphrodite and Amphitrite; the gallery turns that uncertainty into part of the encounter. Room locations are clues for a focused route, not guarantees of day-of access."],
        ["Denon · a Hellenistic victory at the top of the stairs", "The Winged Victory of Samothrace is listed at the upper landing of the Daru staircase, room 703 in the Denon wing, level 1. Nike appears about to land on a ship; the 19th-century staircase makes the sculpture’s original elevated setting legible again. Treat the wing and room number as a map anchor, then confirm the daily room list."],
        ["Denon · Renaissance painting in Salle des États", "The Louvre locates the Mona Lisa in room 711, Denon wing, level 1. Leonardo’s sfumato softens the portrait’s contours; across the same large room, Veronese’s Wedding Feast at Cana turns the visit from one closely guarded panel to a vast Venetian crowd scene. The museum’s own page explains how the room’s former legislative use became a gallery for Venetian painting."],
        ["Sully below ground · the medieval fortress", "The Medieval Louvre / History of the Louvre is on level -1 of the Sully wing, where the remains mark the palace’s fortified beginning. On 6 October 2026 the museum’s live gallery list showed this area closed for renovation. Check the live list before planning around the foundations; do not count the room as available from an old map."],
        ["Salle Mollien · read the room between the highlights", "The guide’s image shows Salle Mollien, room 700 in the Denon wing: red wall surfaces and overhead light give a sense of the museum’s monumental gallery scale. Use a room such as this to notice how the former palace organizes movement and display, then check the current gallery list rather than promising it will be open."],
        ["Tuileries · a royal garden turned public promenade", "Catherine de’ Medici created the Tuileries Garden in 1564; it opened to the public by the end of Louis XIII’s reign. André Le Nôtre began reshaping its long formal axis for Louis XIV in 1664. Today, terraces, basins and sculpture turn the walk between Louvre and Place de la Concorde into a designed outdoor sequence; seasonal hours and clearance still set its limit."],
        ["Palais Garnier · architecture that choreographs arrival", "Charles Garnier’s 19th-century opera house makes the visit a sequence: approach the façade, climb the grand staircase, then read the paintings and decoration of the Grand Foyer before looking into the auditorium. The Opera sells self-guided visits to public areas, but rehearsals cause frequent, unpredictable auditorium closures and no ticket guarantees access. Check the visit calendar and bag rules for the day."]
      ],
      accessTitle: 'Hours and accessibility, checked 6 October 2026',
      accessCopy: 'The Louvre is closed all day Tuesday; Monday, Thursday, Saturday and Sunday are listed as 09:00–18:00, and Wednesday and Friday as 09:00–21:00. Last entry is one hour before closing and rooms clear 30 minutes before. The museum strongly advises time-slot booking, including for free admission; visitors with disabilities and one accompanying person receive free admission and priority access with supporting documents. The central lift serves the lobby below the Pyramid, and mobility equipment is available at Assistance. Recheck the official pages before travel.'
    }
  },
  'eiffel-invalides-montparnasse': {
    name: 'Eiffel Tower & Invalides: the Western Axis',
    instrument: 'Skyline-to-ground route board',
    layout: 'paris-western-field',
    imageAlt: "View from the Eiffel Tower’s third floor across the Seine toward the Trocadéro gardens",
    imageCreditTitle: "View from the Eiffel Tower toward the Trocadéro gardens",
    imageCaption: "From the tower’s third floor, the view crosses the Seine toward the Trocadéro gardens.",
    purpose: 'Decide whether the tower ascent or the Musée de l’Armée is the paid anchor, then connect it to a single ground-level approach. The route preserves the Seine and Champ de Mars as the city’s visual frame and avoids the closed Montparnasse observatory.',
    summary: 'The Eiffel Tower was completed for the 1889 Exposition Universelle; Invalides tells a different story of military care, state ceremony and French campaigns. Choose one major interior, use Trocadéro, Bir-Hakeim or Champ de Mars for a ground-level reading, and treat a tower summit as a ticketed option with real access limits.',
    choices: [
      ['Elevator and second floor', 'Choose the second-floor elevator product when the skyline view matters but height, time or mobility makes the summit less suitable. The official ticket page lists this separately; check the live ticket time and the visit rules for your needs.'],
      ['Summit or stair ascent', 'The summit route uses elevators; the stair product reaches the second floor, while the summit stair product transfers to an elevator at level two. Ticket stock and operating conditions vary. The operator says stairs and the summit are not suitable for people with limited mobility.'],
      ['Tower from the ground, Invalides inside', 'Skip the ascent and read the tower from Trocadéro, the bridge and Champ de Mars, then reserve your longer interior block for the Musée de l’Armée and the Dôme des Invalides. This is the strongest option when a climb is not the experience you want.']
    ],
    access: 'Trocadéro frames the tower from across the river; Bir-Hakeim brings you to the bridge and western bank; Champ de Mars–Tour Eiffel serves the south side. Security checks occur at the site entrance and again before the pillar. Large luggage is not accepted and there is no nearby tower cloakroom; choose the entrance and transport from the official access map, not a saved photo pin.',
    tradeoff: 'A tower ticket and a full Invalides museum visit are both substantial anchors. Choose one as the day’s interior: the other becomes a short exterior or garden approach. This keeps the day from becoming a queue at one end and an exhausted dash through collections at the other.',
    duration: "A focused Musée de l’Armée visit with the Dôme can fill a half-day. Allow most of a day if you want several collection periods, the Dôme and Napoleon I’s tomb, the Invalides complex and a meal; six hours is one optional planning block, not a minimum. A ground-level Trocadéro–Champ de Mars walk takes less time, but allow for security perimeters and an indoor pause.",
    combine: 'Pair tower ascent with one stretch of Champ de Mars or the river, or pair Invalides with the École Militaire and western lawns. The Montparnasse Observatory closed on 31 March 2026 for a renovation lasting several years; no reopening date is posted, so do not build a panorama plan around it.',
    verify: 'Check the tower’s exact ticket level, stairs or elevator product, security and baggage rules; review Invalides’ current collection and Dôme access; then check Île-de-France Mobilités disruptions and visibility. The Montparnasse operator’s closure notice was checked 6 October 2026.',
    stages: [
      ['Choose the view before the station', 'For a tower ticket, follow the official access map and approach gate for that product. Without an ascent, begin at Trocadéro for the cross-river frame or Bir-Hakeim for the bridge and river edge. Security zones can redirect the walk.'],
      ['Use the tower as an engineering visit', 'The iron structure was assembled between 1887 and 1889 for the Exposition Universelle. Read the open lattice and four curved legs from the esplanade, or use the exact elevator/stair ticket you selected. Keep bags small: the tower says it has no luggage storage in or near the monument.'],
        ["Choose the eastward branch · Invalides", "Cross east from Champ de Mars toward École Militaire and the Invalides courtyard. Decide whether today’s interior is the Dôme and tomb or one selected museum period; several collection sections and a meal make a fuller-day option. Check today’s opening and ticket coverage before leaving the lawns."],
      ['Leave with a direct return', 'Finish at École Militaire, La Tour-Maubourg, Invalides, Bir-Hakeim or the station specified by the current route. If weather removes the view, keep a ground-level tower loop and the booked indoor museum; the closed Montparnasse observatory is not a fallback.']
    ],
    fallback: 'If visibility, wind or ticket availability removes the ascent, the tower’s public esplanade and river approaches remain a complete outdoor reading when access is open. Put Invalides indoors only if its current ticket and galleries suit the remaining day. If both anchors fail, keep the Trocadéro–bridge–river loop short and use a confirmed nearby indoor stop; do not travel to Montparnasse, whose observatory has been closed for renovation since 31 March 2026.',
    watch: [
      ['The ticket defines the climb', 'Second floor and summit, stairs and elevator are separate products. The tower requires two security checks, bars large luggage and has no nearby cloakroom. Read the current product and bag rules before taking the trip across Paris.'],
      ['Mobility and height change the choice', 'The official rates page says the summit and stairways are unsuitable for people with limited mobility; the practical guide recommends the second floor for visitors who are uncomfortable with heights. A ground-level route remains a valid way to understand the tower and its setting.'],
      ['One famous panorama is unavailable', 'The Paris Montparnasse Observatory closed to the public on 31 March 2026 for renovation lasting several years, with no reopening date announced. Use the public views across the Seine and lawns instead, and verify any other paid viewpoint directly before relying on it.']
    ],
    sources: [
      ["https://www.toureiffel.paris/en/the-monument/history", "Eiffel Tower — official construction history"],
      ["https://ticket.toureiffel.paris/en", "Eiffel Tower — official ticket products, availability and security"],
      ["https://www.toureiffel.paris/en/rates-opening-times", "Eiffel Tower — current ticket levels and mobility notice"],
      ["https://www.toureiffel.paris/en/news/visit/visitors-practical-guide", "Eiffel Tower — bags, security and visitor rules"],
      ["https://www.musee-armee.fr/en/home.html", "Musée de l’Armée — official Invalides museum information"],
      ["https://www.musee-armee.fr/en/collections.html", "Musée de l’Armée — collections from Prehistory to the present"],
      ["https://www.musee-armee.fr/en/your-visit/museum-spaces.html", "Musée de l’Armée — museum galleries by historical period"],
      ["https://www.musee-armee.fr/en/your-visit/museum-spaces/the-dome-tomb-of-napoleon.html", "Musée de l’Armée — history of the Dôme and Napoleon I’s tomb"],
      ["https://www.musee-armee.fr/en/your-visit/opening-times-and-prices-1.html", "Musée de l’Armée — current ticket coverage and opening times"],
      ["https://www.tourmontparnasse56.com/", "Paris Montparnasse Observatory — current renovation closure notice"]
    ],
    faq: [
      ["Is the Montparnasse Observatory open?", "No. The operator says it closed to visitors on 31 March 2026 for renovations expected to last several years; there is no reopening date yet. This route uses public viewpoints from the Seine, Trocadéro and Champ de Mars instead."],
      ["Can I go to the Eiffel Tower summit by stairs?", "The official product combines stairs to the second floor with an elevator to the summit. The stairs do not reach the summit itself, and the operator says the summit and stairways are not suitable for people with limited mobility. Confirm the current ticket and access guidance before booking."],
      ["Can I combine the tower and Invalides?", "Yes, if one is the primary interior. A tower ticket plus a short Champ de Mars walk can fit with an Invalides exterior; a focused Dôme and tomb visit with one museum section can fill a half-day. Several collection periods and a meal can take most of a day; six hours is an optional planning example, not a minimum. Check the live opening and ticket coverage before booking."]
    ],
    editorial: {
      sectionTitle: 'A 1889 engineering landmark, read from the ground up',
      routeTitle: 'Choose the height, then keep the western walk direct',
      routeIntro: 'Make the ticket or ground-level view the first decision. Use one nearby branch for the second half, with Invalides as the indoor alternative.',
      sectionIntro: 'The Eiffel Tower was built for the 1889 Exposition Universelle marking the centenary of the French Revolution. Work began in January 1887; the structure was complete on 31 March 1889 after two years, two months and five days. Its four lattice legs curve toward the summit to manage wind forces. The city route makes that engineering legible before asking whether the lift, stairs or ground view is right for you.',
      layers: [
        ["Across the Seine · Trocadéro", "Start on the west bank for the framed view, then cross only if the next choice is the tower or Champ de Mars. Crowds and security controls move the approach; use the current entrance map and keep the pedestrian flow clear."],
        ["Inside the structure · Ticketed levels", "Current official products include elevator access to the second floor, stairs to the second floor and summit combinations that transfer to an elevator. Ticket availability and rates change. The operator’s current guidance says stairs and summit are unsuitable for limited mobility; a ground-level visit is a complete alternative."],
        ["East of Champ de Mars · Invalides", "The Hôtel national des Invalides lies east of the Champ de Mars lawns. Its gilded Dôme began as Louis XIV’s royal chapel and now contains Napoleon I’s monumental tomb; the wider museum spans arms and armour, the age of Louis XIV and Napoleon, and the two world wars. A focused selection can be a half-day; several galleries and the Dôme are an optional fuller-day plan, not a minimum. Confirm current access to the galleries and Dôme before booking."]
      ],
      accessTitle: 'The skyline option has changed',
      accessCopy: 'The Paris Montparnasse Observatory operator reports closure to the public from 31 March 2026 for a multi-year renovation and gives no reopening date. Do not send visitors there for a substitute panorama. Use Trocadéro, Bir-Hakeim or the Champ de Mars for the west-Paris sightline, checking live access and weather before leaving.'
    }
  }
};
