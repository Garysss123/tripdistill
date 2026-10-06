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
      ['https://www.notredamedeparis.fr/en/visit/reservation-free/', 'Notre-Dame de Paris — official visit and reservation information'],
      ['https://www.sainte-chapelle.fr/en/visite/informations-pratiques', 'Sainte-Chapelle — current hours, access, security and accessibility'],
      ['https://www.sainte-chapelle.fr/en/discover/history-of-the-sainte-chapelle', 'Sainte-Chapelle — official history and royal chapel architecture'],
      ['https://www.paris-conciergerie.fr/en/visit/practical-information', 'Conciergerie — official visit information'],
      ['https://www.musee-moyenage.fr/en/home', 'Musée de Cluny — National Museum of the Middle Ages']
    ],
    faq: [
      ['Which paid interior should I choose on Île de la Cité?', 'Choose Sainte-Chapelle for its royal chapel and stained glass, or the Conciergerie for the former palace and prison history. Their official combined ticket exists, but two security-managed visits can crowd out the Left Bank; reserve both only when the schedule genuinely allows it.'],
      ['Can I visit Notre-Dame without a paid tour?', 'Use the cathedral’s official visit page for current free-entry and reservation conditions. Do not buy a third-party “skip-the-line” product as a substitute for the cathedral’s own instructions.'],
      ['Is the Panthéon an easy add-on?', 'It is an uphill branch beyond the lower Latin Quarter. Give it a separate time block and check current entry and access information; Cluny and Saint-Germain make a flatter finish.']
    ],
    editorial: {
      sectionTitle: 'One island, several kinds of power',
      routeTitle: 'Cross once, then choose the hill or the lower street',
      routeIntro: 'Begin with the reservation, read the island on foot, and let the single bridge crossing commit you to one Left Bank branch.',
      sectionIntro: 'The route’s history is legible in the change of institutions: worship at the royal chapel, administration and imprisonment in the old palace, then scholarship across the river. Read these as neighboring uses of a small island and its Left Bank crossing, not as interchangeable “old Paris” stops.',
      layers: [
        ['Mid-13th century · A royal reliquary', 'Louis IX had the Sainte-Chapelle built in less than seven years to house the Crown of Thorns and a fragment of the True Cross. The upper chapel was reserved for the king and distinguished guests; the lower chapel served palace staff. Read the two levels as part of the former royal palace rather than as separate monuments.'],
        ['Palace · Court · Prison', 'The Conciergerie occupies part of the former royal palace on the island and later became a prison. Its rooms provide a civic and revolutionary counterpoint to the chapel; choose one official circuit rather than racing through both institutions.'],
        ['Across Petit Pont · Study and collections', 'The Musée de Cluny brings medieval objects together with the remains and setting of the Hôtel de Cluny. Continue toward the Sorbonne if that scholarly landscape is the point; take the steeper Panthéon line only as a deliberate second chapter.']
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
      ['https://www.louvre.fr/en/visit/hours-admission', 'Louvre — current opening hours, admission and Tuileries schedule'],
      ['https://www.louvre.fr/en/visit/accessibility', 'Louvre — accessible arrival, priority entry and visitor facilities'],
      ['https://www.louvre.fr/en/visit', 'Louvre — entrances, visitor map and practical information'],
      ['https://www.louvre.fr/en/explore', 'Louvre — palace, collections and visitor trails'],
      ['https://www.operadeparis.fr/en/visits/palais-garnier', 'Paris Opera — official Palais Garnier visits']
    ],
    faq: [
      ['Which Louvre entrance should I use?', 'Read the current visitor page and follow the entrance written for your ticket: the Pyramid is the main entry, Carrousel and Porte des Lions have specific ticket conditions, and group or membership access uses Passage Richelieu. Do not infer the entrance from a Metro stop.'],
      ['How many Louvre departments fit in one visit?', 'Choose a small connected group that matches your interest and energy. The museum’s official visitor trails and current room-closure list help bound the walk; the sequence here treats two neighboring areas as a planning ceiling, not a museum rule.'],
      ['Can I enter the Louvre and leave for lunch?', 'The museum says any exit is final. Plan your meal and garden break for after leaving, or use the current in-museum facilities before exiting.']
    ],
    editorial: {
      sectionTitle: 'A museum is a sequence of rooms, not a pin',
      routeTitle: 'The exit decides the garden and the northward finish',
      routeIntro: 'Use a small collection choice, one outdoor reset and one final neighborhood. The timing below reflects the published rules checked on 6 October 2026.',
      sectionIntro: 'The palace’s former royal scale still shapes a visit: courtyards set the approach, entrances lead to the central lobby, and galleries branch farther than a street map can show. Treat a museum day as a small curatorial choice. A particular period, material or region is enough to give the building a point of view.',
      layers: [
        ['Approach · Entrance', 'The Pyramid is the museum’s main entrance, but the official visitor guide also lists Carrousel and Porte des Lions for visitors with tickets and reserves Passage Richelieu for groups and members. The courtyard photograph is not a substitute for checking the entry assigned to your visit.'],
        ['Choose · Collection', 'The Louvre’s own collection database organizes national works by departments that include Egyptian, Near Eastern, Greek–Etruscan–Roman, Islamic, paintings, sculpture and decorative arts. Choose a theme and nearby rooms from the current map; this avoids crossing the building repeatedly for isolated highlights.'],
        ['Exit · City garden', 'Use the Tuileries as an outdoor threshold after the museum rather than a second checklist. Its official schedule changes by season, toilets are at the Concorde and rue de Rivoli entrances, and the garden clears before its closing time. Follow the exit you actually used toward Palais Royal or the northern streets.']
      ],
      accessTitle: 'Hours and accessibility, checked 6 October 2026',
      accessCopy: 'The Louvre is closed all day Tuesday; Monday, Thursday, Saturday and Sunday are listed as 09:00–18:00, and Wednesday and Friday as 09:00–21:00. Last entry is one hour before closing and rooms clear 30 minutes before. The museum strongly advises time-slot booking, including for free admission; visitors with disabilities and one accompanying person receive free admission and priority access with supporting documents. The central lift serves the lobby below the Pyramid, and mobility equipment is available at Assistance. Recheck the official pages before travel.'
    }
  },
  'eiffel-invalides-montparnasse': {
    name: 'Eiffel Tower & Invalides: the Western Axis',
    instrument: 'Skyline-to-ground route board',
    layout: 'paris-western-field',
    imageAlt: 'The Eiffel Tower seen across the Seine from western Paris',
    imageCreditTitle: 'Eiffel Tower across the Seine from Trocadéro',
    imageCaption: 'The Eiffel Tower viewed across the Seine from the Trocadéro side.',
    purpose: 'Decide whether the tower ascent or the Musée de l’Armée is the paid anchor, then connect it to a single ground-level approach. The route preserves the Seine and Champ de Mars as the city’s visual frame and avoids the closed Montparnasse observatory.',
    summary: 'The Eiffel Tower was completed for the 1889 Exposition Universelle; Invalides tells a different story of military care, state ceremony and French campaigns. Choose one major interior, use Trocadéro, Bir-Hakeim or Champ de Mars for a ground-level reading, and treat a tower summit as a ticketed option with real access limits.',
    choices: [
      ['Elevator and second floor', 'Choose the second-floor elevator product when the skyline view matters but height, time or mobility makes the summit less suitable. The official ticket page lists this separately; check the live ticket time and the visit rules for your needs.'],
      ['Summit or stair ascent', 'The summit route uses elevators; the stair product reaches the second floor, while the summit stair product transfers to an elevator at level two. Ticket stock and operating conditions vary. The operator says stairs and the summit are not suitable for people with limited mobility.'],
      ['Tower from the ground, Invalides inside', 'Skip the ascent and read the tower from Trocadéro, the bridge and Champ de Mars, then reserve your longer interior block for the Musée de l’Armée and the Dôme des Invalides. This is the strongest option when a climb is not the experience you want.']
    ],
    access: 'Trocadéro frames the tower from across the river; Bir-Hakeim brings you to the bridge and western bank; Champ de Mars–Tour Eiffel serves the south side. Security checks occur at the site entrance and again before the pillar. Large luggage is not accepted and there is no nearby tower cloakroom; choose the entrance and transport from the official access map, not a saved photo pin.',
    tradeoff: 'A tower ticket and a full Invalides museum visit are both substantial anchors. Choose one as the day’s interior: the other becomes a short exterior or garden approach. This keeps the day from becoming a queue at one end and an exhausted dash through collections at the other.',
    duration: 'Allow four to six hours for a tower appointment, river crossing and one outdoor branch. Give Invalides six or more hours if the Army Museum and Dôme are the main visit. A ground-level Trocadéro–Champ de Mars walk takes less time, but allow for security perimeters and an indoor pause.',
    combine: 'Pair tower ascent with one stretch of Champ de Mars or the river, or pair Invalides with the École Militaire and western lawns. The Montparnasse Observatory closed on 31 March 2026 for a renovation lasting several years; no reopening date is posted, so do not build a panorama plan around it.',
    verify: 'Check the tower’s exact ticket level, stairs or elevator product, security and baggage rules; review Invalides’ current collection and Dôme access; then check Île-de-France Mobilités disruptions and visibility. The Montparnasse operator’s closure notice was checked 6 October 2026.',
    stages: [
      ['Choose the view before the station', 'For a tower ticket, follow the official access map and approach gate for that product. Without an ascent, begin at Trocadéro for the cross-river frame or Bir-Hakeim for the bridge and river edge. Security zones can redirect the walk.'],
      ['Use the tower as an engineering visit', 'The iron structure was assembled between 1887 and 1889 for the Exposition Universelle. Read the open lattice and four curved legs from the esplanade, or use the exact elevator/stair ticket you selected. Keep bags small: the tower says it has no luggage storage in or near the monument.'],
      ['Choose one westward branch', 'Walk through Champ de Mars toward École Militaire for a longer view of the structure, or turn toward Invalides for the Army Museum and Dôme. Do not take both branches as equal full visits. The museum’s collections cover military history; check the day’s open galleries and ticket conditions.'],
      ['Leave with a direct return', 'Finish at École Militaire, La Tour-Maubourg, Invalides, Bir-Hakeim or the station specified by the current route. If weather removes the view, keep a ground-level tower loop and the booked indoor museum; the closed Montparnasse observatory is not a fallback.']
    ],
    fallback: 'If visibility, wind or ticket availability removes the ascent, the tower’s public esplanade and river approaches remain a complete outdoor reading when access is open. Put Invalides indoors only if its current ticket and galleries suit the remaining day. If both anchors fail, keep the Trocadéro–bridge–river loop short and use a confirmed nearby indoor stop; do not travel to Montparnasse, whose observatory has been closed for renovation since 31 March 2026.',
    watch: [
      ['The ticket defines the climb', 'Second floor and summit, stairs and elevator are separate products. The tower requires two security checks, bars large luggage and has no nearby cloakroom. Read the current product and bag rules before taking the trip across Paris.'],
      ['Mobility and height change the choice', 'The official rates page says the summit and stairways are unsuitable for people with limited mobility; the practical guide recommends the second floor for visitors who are uncomfortable with heights. A ground-level route remains a valid way to understand the tower and its setting.'],
      ['One famous panorama is unavailable', 'The Paris Montparnasse Observatory closed to the public on 31 March 2026 for renovation lasting several years, with no reopening date announced. Use the public views across the Seine and lawns instead, and verify any other paid viewpoint directly before relying on it.']
    ],
    sources: [
      ['https://www.toureiffel.paris/en/the-monument/history', 'Eiffel Tower — official construction history'],
      ['https://ticket.toureiffel.paris/en', 'Eiffel Tower — official ticket products, availability and security'],
      ['https://www.toureiffel.paris/en/rates-opening-times', 'Eiffel Tower — current ticket levels and mobility notice'],
      ['https://www.toureiffel.paris/en/news/visit/visitors-practical-guide', 'Eiffel Tower — bags, security and visitor rules'],
      ['https://www.musee-armee.fr/en/home.html', 'Musée de l’Armée — official Invalides museum information'],
      ['https://www.tourmontparnasse56.com/', 'Paris Montparnasse Observatory — current renovation closure notice']
    ],
    faq: [
      ['Is the Montparnasse Observatory open?', 'No. The operator says it closed to visitors on 31 March 2026 for renovations expected to last several years; there is no reopening date yet. This route uses public viewpoints from the Seine, Trocadéro and Champ de Mars instead.'],
      ['Can I go to the Eiffel Tower summit by stairs?', 'The official product combines stairs to the second floor with an elevator to the summit. The stairs do not reach the summit itself, and the operator says the summit and stairways are not suitable for people with limited mobility. Confirm the current ticket and access guidance before booking.'],
      ['Can I combine the tower and Invalides?', 'Yes, if one is the primary interior. A tower ticket plus a short Champ de Mars walk can fit with an Invalides exterior; a full Army Museum visit deserves the main block and is better paired with the tower from the ground.']
    ],
    editorial: {
      sectionTitle: 'A 1889 engineering landmark, read from the ground up',
      routeTitle: 'Choose the height, then keep the western walk direct',
      routeIntro: 'Make the ticket or ground-level view the first decision. Use one nearby branch for the second half, with Invalides as the indoor alternative.',
      sectionIntro: 'The Eiffel Tower was built for the 1889 Exposition Universelle marking the centenary of the French Revolution. Work began in January 1887; the structure was complete on 31 March 1889 after two years, two months and five days. Its four lattice legs curve toward the summit to manage wind forces. The city route makes that engineering legible before asking whether the lift, stairs or ground view is right for you.',
      layers: [
        ['Across the Seine · Trocadéro', 'Start on the west bank for the framed view, then cross only if the next choice is the tower or Champ de Mars. Crowds and security controls move the approach; use the current entrance map and keep the pedestrian flow clear.'],
        ['Inside the structure · Ticketed levels', 'Current official products include elevator access to the second floor, stairs to the second floor and summit combinations that transfer to an elevator. Ticket availability and rates change. The operator’s current guidance says stairs and summit are unsuitable for limited mobility; a ground-level visit is a complete alternative.'],
        ['West of the lawns · Invalides', 'The Army Museum occupies the Hôtel national des Invalides complex. Make its collections and Dôme the main interior if military history is the focus; use the tower as an outdoor landmark rather than trying to complete two large visits in a single afternoon.']
      ],
      accessTitle: 'The skyline option has changed',
      accessCopy: 'The Paris Montparnasse Observatory operator reports closure to the public from 31 March 2026 for a multi-year renovation and gives no reopening date. Do not send visitors there for a substitute panorama. Use Trocadéro, Bir-Hakeim or the Champ de Mars for the west-Paris sightline, checking live access and weather before leaving.'
    }
  }
};
