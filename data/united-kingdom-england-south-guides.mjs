import { defineUnitedKingdomCluster, unitedKingdomGuide } from './united-kingdom-guide-builder.mjs';

const g = unitedKingdomGuide;
const c = defineUnitedKingdomCluster;

export const unitedKingdomEnglandSouthClusters = [
  c({
    slug: 'london',
    name: 'London',
    nation: 'England',
    band: 'england-south',
    family: 'thames-signal-book',
    label: 'Capital line book',
    tagline: 'Choose the London base by the last return, then give each day one district spine.',
    hubIntro: 'London is not one compact centre but a chain of walkable districts joined by rail, Underground, bus and river services. A useful plan fixes one timed interior, reads the correct station exit and keeps the rest of the day on a coherent street or river line instead of repeatedly crossing the city.',
    searchSummary: 'Plan London as one hotel base and three district days: Westminster/South Bank, Bloomsbury/Covent Garden, and Tower/City or Greenwich. Compare four, five and six nights; name the arrival station, transfer and return before adding another interior.',
    stay: 'Four nights usually means two or three full sightseeing days after the arrival and departure days are protected: choose Westminster, one museum district and either the Tower/City or Greenwich. Five nights lets you add the other eastern choice or a genuine weather-and-rest day without changing rooms. Six nights can support both east routes or one outer-day trip, but only if that extra journey matters more than a slower London day. Keep one hotel for the stay: a one-night move often trades away the time it saves. Bloomsbury or Holborn suits museum-and-West-End walking; King’s Cross/St Pancras suits a rail arrival and onward train, with more cross-city trips to southern sights; the South Bank/Waterloo area shortens river-side returns but can feel busy around events. Compare the actual evening route to the hotel, not just the daytime map pin.',
    transfer: 'Start with the station or terminal that matches the room. Heathrow offers Elizabeth line and Piccadilly line routes into London, but the best interchange depends on whether you are staying near Paddington, Bloomsbury, Westminster or the eastern City; confirm the dated service and step-free path before choosing. Gatwick, Stansted, Luton and London City use different rail links and London arrival points, so do not treat “central London” as one terminal. For sightseeing, Westminster is the shared starting area for Parliament and the Abbey; Russell Square, Holborn and Tottenham Court Road serve different sides of Bloomsbury; Tower Hill is not London Bridge; and Bank–Monument is a large, multi-level interchange. Name the operator, station and exit for each leg, then check the Transport for London map/status board and National Rail for the travel date.',
    season: 'Rain and gusts can arrive in any month, so keep an indoor anchor and a short outside loop in the same district. Summer gives longer evening light but more pressure at timed doors, popular museums and river piers; book the one interior that shapes the day, then verify current entry rules rather than assuming space remains. Short winter daylight argues for ending the South Bank or Greenwich walk at a station before dusk. Parliamentary business, ceremonies, demonstrations, security perimeters and engineering work can change street access or the useful station exit at short notice. As reviewed on 11 October 2026, Royal Museums Greenwich says the Royal Observatory closes from 2 November 2026 for refurbishment; check its current notice if the trip overlaps that date, and do not assume this means every Greenwich museum is closed.',
    fallback: 'If weather, a closure or a late arrival removes an anchor, shorten the same district instead of crossing town: keep Parliament Square and one bridge; use a prechecked Bloomsbury museum or a shorter Seven Dials walk; or choose the Tower/City day or the Greenwich day, not an improvised chain of both. For Greenwich, retain the low-ground National Maritime Museum/Queen’s House/Cutty Sark option when hill access or weather is poor, but verify which sites are operating on the date. A central hotel base makes the shortened return practical without a second check-in.',
    reviewDate: '11 October 2026',
    reviewDateISO: '2026-10-11',
    sources: [
      ['https://www.visitlondon.com/', 'Visit London — official visitor guide and accommodation areas'],
      ['https://tfl.gov.uk/maps/track', 'Transport for London — Tube, rail, DLR and live route map'],
      ['https://tfl.gov.uk/', 'Transport for London — current service status and journey planning'],
      ['https://www.nationalrail.co.uk/', 'National Rail — rail planning and disruption information'],
      ['https://www.parliament.uk/visiting/', 'UK Parliament — visitor planning and current booking guidance'],
      ['https://www.britishmuseum.org/visit', 'British Museum — current entry and gallery notices'],
      ['https://www.rmg.co.uk/plan-your-visit', 'Royal Museums Greenwich — current site hours and Observatory refurbishment notice']
    ],
    faq: [
      ['How many nights should I book for London?', 'Four nights can support two or three full days if arrival and departure are not treated as sightseeing days. Five nights makes room for a fourth district day or a weather reserve. Six nights can add both eastern choices or an outward trip; keep one hotel unless the second base serves a separately planned journey.'],
      ['Where should I stay for a first visit?', 'Bloomsbury or Holborn works well for museum and theatre walks; King’s Cross/St Pancras favors rail arrivals and onward trains; Waterloo or the South Bank shortens some river-side returns. Compare the specific hotel-to-station route you will use at night, and do not assume one famous landmark is a useful base for every district.'],
      ['Should I combine the Tower of London and Greenwich in one day?', 'Usually choose one anchor. The Tower plus a compact City walk is a full day; Greenwich has its own clustered museums, park and hill. The two districts sit on different operating routes, so combining them cuts the time available at both and adds a transfer that depends on the day’s live service.']
    ],
    sources: [
      ['https://www.visitlondon.com/', 'Visit London — official city visitor guide'],
      ['https://tfl.gov.uk/', 'Transport for London — fares, routes and service status'],
      ['https://www.nationalrail.co.uk/', 'National Rail — rail planning and disruption information']
    ],
    guides: [
      g({
        slug: 'westminster-south-bank',
        name: 'Westminster & the South Bank',
        instrument: 'Ceremony-and-crossing clock',
        layout: 'parliament-river-fold',
        imageQuery: 'Westminster Parliament Thames London panorama',
        imageAlt: 'The Palace of Westminster beside the River Thames in London',
        purpose: 'Decide which single interior, if any, will anchor the day—Parliament, Westminster Abbey or neither—then make a one-way civic-to-river walk with one planned bridge crossing and an explicit Waterloo-side return.',
        summary: 'Start at the booked Parliament or Abbey entrance, connect Parliament Square and Whitehall on foot, then cross once to the South Bank and finish near Waterloo; save a longer Blackfriars extension for a separate choice.',
        searchSummary: 'Walk Parliament Square and Whitehall from a booked Parliament or Abbey entrance, cross the Thames once, and finish by Waterloo. Budget security time and do not add another timed interior.',
        showHubOperatingBoard: false,
        choices: [
          ['Parliament interior', 'Book a tour or other visit that is actually offered for your date and follow its named entrance, ticket and security instructions. This gives the strongest institutional context, but the queue and visit displace the Abbey interior.'],
          ['Abbey and royal precinct', 'Make Westminster Abbey the only planned interior, then connect Parliament Square, St James’s Park or Whitehall as the outdoor context. This suits architecture and worship history, but leaves Parliament outside.'],
          ['Civic walk without an interior', 'Read the Palace exterior, Parliament Square, Whitehall and the Thames, then spend the longer block on the South Bank. It keeps the day adaptable, but does not include a Parliament or Abbey visit inside.']
        ],
        access: 'Westminster station is served by the District, Circle and Jubilee lines and sits beside Parliament Square, but the pavement exit is not the visitor entrance. Parliament’s main public entrance for tours is Cromwell Green on St Margaret Street; the Abbey’s own visit instructions govern its entrance. Parliament currently advises allowing time for security searches and reports longer average queues at busy periods, so use its live guidance rather than a fixed transfer estimate. Waterloo is a practical South Bank return; Blackfriars only makes sense if you deliberately extend east.',
        tradeoff: 'A Parliament tour, Abbey visit, ceremonial detours and a South Bank attraction cannot all be equal priorities in one day. One booked door already creates a security and entry block; choosing it means giving up the other interior and keeping the river walk bounded. An exterior day trades interior access for a looser route and more time at bridges and public spaces.',
        stages: [
          ['Morning · reach the named door', 'Use Westminster station for the square, then follow the ticket’s route to Cromwell Green or the Abbey entrance. Keep the booked time and Parliament’s current security-queue guidance in the plan; do not count a ceremony as a timed connection.'],
          ['Late morning · Parliament Square to Whitehall', 'After the interior, or on an exterior-only day, take one compact loop past Parliament Square and the Abbey precinct, then choose either St James’s Park or the Whitehall frontage. Allow a real sit-down break before the river crossing.'],
          ['Early afternoon · choose one bridge', 'Cross Westminster Bridge for the direct South Bank turn, or use the Golden Jubilee pedestrian bridges if the route comes north through Whitehall. Pick one; crossing back for a second photograph adds steps without adding a new district.'],
          ['Afternoon · end near Waterloo', 'Keep the South Bank segment to Jubilee Gardens, Southbank Centre or another chosen riverside stop, then finish at Waterloo. Continue east toward Tate Modern and Blackfriars only if that was the day’s selected venue and you have preserved the return.']
        ],
        fallback: 'In rain or after a ticket change, keep the same west-side base: use the booked Parliament or Abbey interior only if your date-specific entry is confirmed, shorten the outdoor loop to Parliament Square and Whitehall, then decide whether the river crossing is still comfortable. If you need another indoor stop, verify a local venue’s current entry first; do not rescue the day by adding the Tower or a second timed ticket.',
        watch: [
          ['Security time is real route time', 'Parliament searches bags and people; its visitor guidance publishes current queue expectations. Arrive by the instructed entrance, keep prohibited-item rules in view and do not schedule the Abbey or a performance immediately after.'],
          ['Public events can close the line', 'Parliamentary business, ceremonies, demonstrations and protective perimeters can change access around Parliament Square or Whitehall. Check official notices and TfL status on the day, and keep the exterior loop reversible.'],
          ['A second crossing costs more than a photo stop', 'The South Bank is busy and crossings have signals, steps and crowd slowdowns. Choose Waterloo as the default finish; treat Tate Modern or Blackfriars as an intentional extension, not a guaranteed short stroll.']
        ],
        duration: 'Treat six to eight hours as an editorial day allowance for one interior, a proper break and a bounded South Bank finish; it is not a measured visit time. A shorter exterior circuit can work in roughly three to four hours if the event calendar and walking pace cooperate. Do not attach another major booked site.',
        combine: 'Pair the civic core with St James’s Park or one South Bank stop because they share this west-to-south river line. Keep Bloomsbury, the Tower, Greenwich and a West End performance for separate days unless one explicitly replaces the main interior.',
        verify: 'Reopen Parliament’s visit, entrance and security guidance or Westminster Abbey’s date-specific visit notices; check TfL status, the bridge route and any public-event or road closure. Confirm that the return station matches the final South Bank stop.',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        faq: [
          ['How long should I allow for Westminster and the South Bank?', 'Use six to eight hours as a planning allowance for one interior, a break and a short riverside finish. Parliament’s security queue is variable, so do not treat the published average as a maximum or schedule a second timed entry against it.'],
          ['Which station should I use for Parliament Square?', 'Westminster station is the closest Underground arrival and serves the District, Circle and Jubilee lines. The correct public entrance still depends on the ticket: Parliament visitors generally follow the Cromwell Green instructions, while the Abbey provides its own route.'],
          ['What if I cannot book Parliament or Westminster Abbey?', 'Keep the Palace and Abbey precinct as an exterior civic walk, then choose one South Bank stop. If rain makes that uncomfortable, replace the outdoor leg with a verified local indoor visit rather than crossing the city for another headline attraction.']
        ],
        sources: [
          ['https://www.parliament.uk/visiting/', 'UK Parliament — official visitor information'],
          ['https://www.parliament.uk/visiting/access/directions/', 'UK Parliament — visitor entrances and public-transport directions'],
          ['https://www.parliament.uk/visiting/access/disabled-access/getting-in/', 'UK Parliament — arrival, security and access guidance'],
          ['https://www.westminster-abbey.org/visit-us', 'Westminster Abbey — official visitor information'],
          ['https://tfl.gov.uk/maps/track', 'Transport for London — current route map and service board']
        ]
      }),
      g({
        slug: 'bloomsbury-covent-garden',
        name: 'Bloomsbury, the British Museum & Covent Garden',
        instrument: 'Collection-attention register',
        layout: 'museum-quarter-ledger',
        imageQuery: 'British Museum Great Court London interior',
        imageAlt: 'The Great Court inside the British Museum in London',
        purpose: 'Choose between a bounded British Museum visit and a street-and-performance day, then walk south through Bloomsbury and Seven Dials without doubling back for another major collection.',
        summary: 'Start with the British Museum’s Great Court and a short, preselected gallery route, pause in Bloomsbury, then follow Bedford Square and Seven Dials toward Covent Garden or a booked West End evening.',
        searchSummary: 'Use Russell Square or a south-side Tube station to reach the British Museum, select a bounded gallery plan, pause in Bloomsbury, then walk through Seven Dials to Covent Garden. Save other major museums for another day.',
        showHubOperatingBoard: false,
        choices: [
          ['British Museum first', 'Use the Great Court to orient, then choose one story from galleries that the current floor plan confirms are open. Covent Garden becomes a meal and street finish, not a second collection.'],
          ['One smaller collection instead', 'Choose the National Gallery or Courtauld as the day’s only museum, then shape the walk around its own location and entry rules. You give up the Bloomsbury-to-Covent Garden line but spend less time in a vast building.'],
          ['Bloomsbury and theatre', 'Keep the British Museum exterior or brief, use the squares and Seven Dials for the main walk, and work back from a performance door. This gives the collection less time but protects a meal and a firm evening arrival.']
        ],
        access: 'Russell Square on the Piccadilly line is a useful north-side approach; Holborn (Central/Piccadilly) and Tottenham Court Road (Central/Northern/Elizabeth line) serve different southern approaches and onward connections. Treat each as a different start point, not as interchangeable “British Museum” stops. Follow the Museum’s current entrance, bag and room notices; use Covent Garden or Leicester Square only for the south-side finish, after checking service and step-free access for the date.',
        tradeoff: 'The British Museum’s scale makes a short highlight list feel like a whole visit when the internal walking and standing still take time. This plan gives one collection a clear morning block and releases the afternoon for a real break and a single southern street sequence. A second major museum or a matinee must replace part of that sequence, not be stacked on top.',
        stages: [
          ['Morning · enter with a room plan', 'Start at the Great Court, read the day’s gallery and entrance notices, then select one story and a nearby fallback room from the current floor plan. Keep Russell Square as the north-side start unless your hotel or service status points elsewhere.'],
          ['Late morning · follow one collection line', 'Stay within one or two neighboring galleries that are open on the date. Ancient Egypt or the Parthenon displays can anchor a visit if the current room status supports that choice; do not cross the building to collect unrelated famous objects. A two-to-three-hour museum allowance is an editorial estimate, not a measured visit.'],
          ['Lunch · reset in Bloomsbury', 'Leave time to sit in Russell Square or Bedford Square before the busier southern stretch. This is a real rest between standing indoors and navigating Covent Garden crowds, not spare time to add another museum.'],
          ['Afternoon · Bedford Square to Seven Dials', 'Walk south by a single street line through Bedford Square and Seven Dials toward Covent Garden. Reserve roughly thirty to forty-five minutes for this moving leg before stops and crowds, then choose Covent Garden or a booked theatre as the finish; return from Covent Garden or Leicester Square rather than retracing north.']
        ],
        fallback: 'If entry arrangements or a gallery closure change the museum block, keep the same district: use the Great Court only if the Museum confirms access, take the squares and Bedford Square as the longer outdoor route, and continue to Seven Dials if the weather permits. A smaller nearby museum is a replacement only after its opening and admission rules are checked for that date; do not replace a closed gallery with a cross-city queue.',
        watch: [
          ['Admission and rooms are separate checks', 'A general museum visit does not promise that a particular exhibition or gallery is open. Reopen the Museum’s entry, security and collection notices for the date, especially before centering the day on one room.'],
          ['Indoor distance drains the afternoon', 'Standing and walking accumulate inside a large museum. Name a stop point and café or square before entering; if attention or mobility drops, go straight to the southern street leg.'],
          ['The theatre clock decides dinner', 'A performance fixes the finish and can make a full museum morning too long. Check the actual theatre entrance and curtain time, set a museum exit point, and keep a direct route south instead of returning to the hotel first.']
        ],
        duration: 'Allow about five to seven hours for a bounded museum visit, a seated break, the southbound street walk and time in Covent Garden. The museum and street allocations are planning estimates; crowds, room availability and walking pace change them. Add a performance only when its entrance and start time are confirmed, and do not add a second major collection.',
        combine: 'Combine this line with Seven Dials, Covent Garden or a West End performance whose location fits the return. If the National Gallery or Courtauld is the priority, let it replace the British Museum and redesign the route around Trafalgar Square or Somerset House instead of adding both.',
        verify: 'Check the British Museum’s visit, entrance, security and gallery notices; confirm any exhibition or theatre ticket for the date; and check TfL status and step-free access for the chosen Russell Square, Holborn, Tottenham Court Road or Covent Garden leg.',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        faq: [
          ['How long do the British Museum and Covent Garden need?', 'For this route, reserve a two-to-three-hour museum block as a planning estimate, a proper seated break, then a single southbound walk and a shorter Covent Garden finish. A more detailed museum visit should replace the evening add-on.'],
          ['Which station is best for Bloomsbury?', 'Russell Square fits a north-side arrival; Holborn or Tottenham Court Road can suit a southbound finish or a different hotel line. Check the actual museum entrance and live station access before choosing rather than selecting only by the word “closest”.'],
          ['Can I add a West End show?', 'Yes if the performance is the day’s fixed finish. Work backward from its named entrance, allow for the meal and southbound walk, and leave the museum at a planned time. Do not add a second major collection before the show.']
        ],
        sources: [
          ['https://www.britishmuseum.org/visit', 'British Museum — official visitor information'],
          ['https://www.nationalgallery.org.uk/visiting', 'National Gallery — official visitor information'],
          ['https://courtauld.ac.uk/visit/', 'Courtauld Gallery — official visitor information'],
          ['https://tfl.gov.uk/maps/track', 'Transport for London — current route map and service board']
        ]
      }),
      g({
        slug: 'tower-city-greenwich',
        name: 'Tower of London, the City & Greenwich',
        instrument: 'Fortress-to-meridian tide board',
        layout: 'east-thames-section',
        imageQuery: 'Tower of London Thames city skyline wide',
        imageAlt: 'The Tower of London beside the Thames and the City skyline',
        purpose: 'Choose one complete day—Tower of London with a compact City walk, or Greenwich’s maritime quarter—before choosing the paid site, station and return; do not treat a river hop as enough time for both.',
        summary: 'Use Tower Hill for a Tower-and-City day, or begin separately at Cutty Sark/Greenwich for the maritime district. Keep the two plans distinct, and check the Observatory’s current operating notice before choosing the hill.',
        searchSummary: 'Choose a Tower Hill and City day or a separate Greenwich day; do not plan both as one guaranteed transfer. Royal Museums Greenwich currently says the Observatory closes from 2 November 2026 for refurbishment, so verify the date-specific site status.',
        showHubOperatingBoard: false,
        choices: [
          ['Tower and nearby City', 'Use Tower Hill for the Tower’s own entry and visit, then add one compact City line such as St Dunstan-in-the-East and Leadenhall Market. This prioritizes the fortress and urban fabric; Greenwich is another day.'],
          ['Greenwich low ground', 'Start at Cutty Sark DLR or Greenwich station, then choose the National Maritime Museum, Queen’s House and Cutty Sark according to current entry and available time. This builds a complete river-and-maritime day without the uphill Observatory.'],
          ['Greenwich with the Observatory hill', 'Choose Greenwich Park and the hill only if the Royal Observatory’s date-specific opening, ticket and access notice supports the visit. At review on 11 October 2026, Royal Museums Greenwich says the Observatory closes from 2 November 2026 for refurbishment; do not infer a reopening date.']
        ],
        access: 'Tower Hill Underground (District/Circle) is the Tower-side approach; Tower Gateway DLR is a separate station, and London Bridge is a different entrance to the wider City. For Greenwich, choose Cutty Sark DLR or Greenwich/Maze Hill rail by the first and last venue, not by a generic “Greenwich” pin. DLR, National Rail and river boats have separate service, pier and ticket rules; confirm the chosen operator and return for the exact date.',
        tradeoff: 'The Tower’s controlled entrance, grounds and internal queues can use a large part of the day; Greenwich then needs its own journey, low-ground museums and possibly a steep park climb. Choosing one district leaves the other for another day but gives the selected visit a real margin. A tower-exterior and City walk is a lighter alternative, not a substitute for a Tower ticket.',
        stages: [
          ['Before leaving · select a district', 'Check the Tower admission/security instructions or the Royal Museums Greenwich site and ticket notices. If choosing Greenwich, read the current Observatory refurbishment notice first; there is no assumption that the hilltop site is open on every travel date.'],
          ['Tower day · Tower Hill to one City line', 'Enter at the Tower’s instructed door and protect a substantial visit block. Afterward, choose either St Dunstan-in-the-East and Leadenhall Market or a direct riverside return; finish at Tower Hill, Monument/Bank or London Bridge according to the last stop.'],
          ['Greenwich day · DLR/rail to low ground', 'Arrive at Cutty Sark DLR or Greenwich station, then group the National Maritime Museum, Queen’s House and Cutty Sark from their current operating notices. Leave a seated break before deciding whether the park slope is worth adding.'],
          ['Return · match the final door', 'For Greenwich low ground, leave from Cutty Sark DLR, Greenwich or Maze Hill only after checking the live route and walking connection; the Observatory hill adds a climb back down. Use a named river pier only when its current departure and return fit the day. Do not cross back to the Tower as a default finale.']
        ],
        fallback: 'If the Tower entry or City service changes, keep a Tower exterior-and-nearby-street day or move the interior to a date with confirmed admission. If the Observatory is closed or the park hill is unsuitable, use Greenwich low ground only after checking the National Maritime Museum, Queen’s House and Cutty Sark individually; each site’s status is separate. Rain or a delayed river boat is a reason to omit the transfer, not to assume a replacement sailing.',
        watch: [
          ['A river boat is a separate operating choice', 'A river-bus connection and a sightseeing cruise are different products and stopping patterns. Confirm the exact operator, pier, departure and return; never build the Tower-to-Greenwich sequence on an assumed sailing.'],
          ['The Observatory is a dated gate', 'Royal Museums Greenwich currently lists a refurbishment closure from 2 November 2026. Recheck its notice for later dates, and do not describe the whole Greenwich quarter as closed if only one site is affected.'],
          ['The Greenwich Park climb changes the finish', 'The Royal Observatory sits uphill from the low-ground museums. If rain, fatigue or mobility makes that climb unsuitable, leave the hill out and return from the museum-side station or pier you have checked.']
        ],
        duration: 'Use about five to seven hours as an editorial allowance for a Tower visit and one compact City line, or a separate half-to-full day for Greenwich’s selected museums and park. These are planning estimates, not operator visit times. Do not add the other district, Westminster or Bloomsbury to the same schedule.',
        combine: 'Pair the Tower with St Dunstan-in-the-East or Leadenhall Market on the same City line. Pair Greenwich with the National Maritime Museum, Queen’s House, Cutty Sark and—only if open and suitable—the Observatory hill. Choose one pair; keep the other district for another day.',
        verify: 'Check Historic Royal Palaces’ Tower entry and security guidance, Royal Museums Greenwich’s site-by-site hours and dated Observatory notice, TfL DLR status, National Rail service and any chosen river operator’s named pier and return. None of these pages guarantees same-day availability.',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        faq: [
          ['Can I visit the Tower of London and Greenwich in one day?', 'It is possible to travel between them, but the guide recommends choosing one as the main day. A Tower visit plus one City walk is already a full plan; Greenwich has its own museums and park. A river boat does not guarantee a convenient connection or enough visit time.'],
          ['Is the Royal Observatory open for a late-2026 visit?', 'At editorial review on 11 October 2026, Royal Museums Greenwich says the Observatory closes from 2 November 2026 for refurbishment and does not state a reopening date on the planning page. Recheck the current notice for your travel date; the National Maritime Museum, Queen’s House and Cutty Sark each have separate status.'],
          ['Which station should I use for Greenwich?', 'Cutty Sark DLR suits the low-ground maritime quarter; Greenwich and Maze Hill are separate rail approaches. Choose by the first and final venue, current step-free access and the live return rather than assuming one station serves the whole park.']
        ],
        sources: [
          ['https://www.hrp.org.uk/tower-of-london/visit/', 'Historic Royal Palaces — Tower of London visits'],
          ['https://www.rmg.co.uk/plan-your-visit', 'Royal Museums Greenwich — current site hours, tickets and refurbishment notice'],
          ['https://tfl.gov.uk/maps/track', 'Transport for London — DLR, rail and river service map'],
          ['https://www.nationalrail.co.uk/', 'National Rail — current rail planning and disruptions']
        ]
      })
    ]
  }),
  c({
    slug: 'oxford-cotswolds',
    name: 'Oxford, Blenheim & the Cotswolds',
    nation: 'England',
    band: 'england-south',
    family: 'college-and-coach-docket',
    label: 'College-and-coach docket',
    tagline: 'Keep Oxford on foot; give Blenheim and each Cotswold corridor its own outward day.',
    hubIntro: 'Oxford is a rail-connected walking city, while Blenheim Palace and the Cotswold towns depend on buses, tours, bicycles or a car. A strong base plan distinguishes college opening windows from rural timetables and never treats “the Cotswolds” as one station or one attraction.',
    searchSummary: 'Oxford is a walkable base; choose Blenheim by Stagecoach S3 or S7, or plan one dated Pulhams 801 corridor from Moreton-in-Marsh. Give each rural area its own day.',
    stay: 'Two nights in Oxford is a short base: protect one full city day and choose either Blenheim or one rural corridor, not both. Three nights keeps the same room for Oxford plus a single outward day and a weather reserve. With four or five nights, consider keeping Oxford nights together and adding two nights near Moreton-in-Marsh only if the Pulhams 801 route fits the dated plan; a one-night hotel split can cost the time it was meant to save. Keep arrival and departure days separate from these full-day allowances.',
    transfer: 'Oxford Railway Station and Gloucester Green coach station serve different arrivals. Walk the Oxford centre from one base; take Stagecoach S3 from Oxford Railway Station/Magdalen Street or S7 via Oxford Parkway for Blenheim, then follow the Palace pedestrian approach. For a Cotswold day, plan the rail leg to Moreton-in-Marsh and use Pulhams 801 only for its named corridor through Stow-on-the-Wold and Bourton-on-the-Water. Check the exact date, direction, stop and return before committing; no bus frequency or same-day rail connection is assumed here.',
    season: 'College doors, Bodleian tours and museum access follow their own calendars and can change for academic use, ceremonies or events; check the place you actually intend to enter. Rural bus timetables are date-specific, while short winter daylight and wet paths argue for fewer stops. Summer weekends and Palace events can add visitor and road pressure around Woodstock. Recheck the operator and venue on the travel date.',
    fallback: 'If a college or library interior is closed, keep the Oxford walk through Carfax, Broad Street and Radcliffe Square, then choose one open museum such as the Ashmolean. If the 801 connection does not leave a sound return, stay in Moreton-in-Marsh or make the Cotswolds a separate booked tour; do not link villages with an assumed roadside walk or an unbooked taxi chain.',
    reviewDate: '11 October 2026',
    reviewDateISO: '2026-10-11',
    sources: [
      ['https://www.ox.ac.uk/visitors/visiting-oxford', 'University of Oxford — visitor guidance'],
      ['https://www.blenheimpalace.com/visitus/getting-here/', 'Blenheim Palace — public-transport and pedestrian access'],
      ['https://www.stagecoachbus.com/routes/oxfordshire/s3/oxford-chipping-norton/xoas003.o', 'Stagecoach — S3 route and date-specific timetable'],
      ['https://www.pulhams.co.uk/busservices/timetables/service801/', 'Pulhams — 801 route and timetable'],
      ['https://www.nationalrail.co.uk/stations/moreton-in-marsh/', 'National Rail — Moreton-in-Marsh station']
    ],
    faq: [
      ['How many nights should I book for Oxford, Blenheim and the Cotswolds?', 'Two nights leaves room for Oxford and one outward choice if your arrival and departure allow it. Three nights supports Oxford plus a separate rural day. Four or five nights can justify a rural base near Moreton-in-Marsh, but only when the dated rail and 801 return suit the stay.'],
      ['Can I visit Blenheim without a car?', 'Yes. Blenheim lists Stagecoach S3 from Oxford Railway Station/Magdalen Street and S7 via Oxford Parkway. Use its current directions from the bus stop to the pedestrian entrance and check the exact date and return before buying a timed ticket.'],
      ['Can I cover several Cotswold villages by bus?', 'Build around one corridor, not a map-wide village list. Pulhams 801 serves Bourton-on-the-Water, Stow-on-the-Wold and Moreton-in-Marsh; select one or two stops only after checking the travel-date timetable in both directions.'],
      ['Should I change hotels between Oxford and the Cotswolds?', 'Stay in Oxford if the rural visit is one day. A Moreton-in-Marsh base is more useful when you have enough nights to use its railway station and the 801 corridor without moving luggage for a single outing.']
    ],
    guides: [
      g({
        slug: 'oxford-colleges-museums',
        name: 'Oxford Colleges, Libraries & Museums',
        instrument: 'College-opening matrix',
        layout: 'quadrangle-threshold-plan',
        imageQuery: 'Oxford Radcliffe Camera university street',
        imageAlt: 'Radcliffe Camera and historic university buildings in Oxford',
        purpose: 'Choose one genuinely visitable college or Bodleian experience, then connect Oxford’s academic quarter to one collection or river edge. The plan distinguishes public streets and exteriors from doors that require their own visitor window or booking.',
        summary: 'Walk from Oxford Railway Station through Carfax to Broad Street and Radcliffe Square; use one checked college or Bodleian entry, then finish at the Ashmolean or one university museum.',
        searchSummary: 'Plan Oxford on foot from Carfax to Broad Street and Radcliffe Square, then choose one date-checked college or Bodleian visit and one museum collection.',
        choices: [
          ['One college interior', 'Pick a named college only after its own visitor page confirms the gate and date; Christ Church is a separate ticketed visit. This gives a close view of college life but makes the day depend on one opening window.'],
          ['Bodleian plus Radcliffe Square', 'Reserve a public Bodleian tour or choose its currently listed visitor experience, then read the Old Schools and Radcliffe Camera from Catte Street. This gives library context without treating a working reading room as a walk-in museum.'],
          ['Museum-first Oxford', 'Choose the Ashmolean on Beaumont Street or the Oxford University Museum of Natural History/Pitt Rivers on Parks Road, then keep the college precinct to its public streets. This is the rain-resilient option but offers less access to private quads.']
        ],
        access: 'Oxford Railway Station lies west of the centre; Gloucester Green is a separate coach arrival. Walk east via Park End Street and George Street to Carfax, continue through Cornmarket to Broad Street, then use Catte Street for Radcliffe Square and the Bodleian visitor entrance. College gates are not interchangeable: follow the named visitor door on that college’s current page.',
        tradeoff: 'A full museum visit, a Bodleian tour and several college interiors compete for the same hours. Choose one booked or controlled interior and one secondary layer; Radcliffe Camera is a reading library, not an unreserved public interior.',
        stages: [
          ['Arrive at Carfax', 'From Oxford Railway Station use Park End Street and George Street; from Gloucester Green enter from the north. Set a return station and keep luggage out of the narrow centre streets.'],
          ['Use one confirmed door', 'Follow the current visitor entrance and time for the college or Bodleian product you selected. If no suitable slot or public opening is listed, keep the visit exterior.'],
          ['Read the academic quarter', 'Walk Broad Street, Catte Street and Radcliffe Square; use the University Church viewpoint only if it is open. Keep the route on public streets instead of trying several college porter’s lodges.'],
          ['Choose one indoor finish', 'Turn west to the Ashmolean or north to the Natural History Museum/Pitt Rivers pair, following their current visit notices. Leave time for the station walk; the meadow is a separate outdoor extension, not an automatic add-on.']
        ],
        fallback: 'If a college or Bodleian slot is unavailable, keep the same walk through Broad Street and Radcliffe Square, then move to the Ashmolean or the Natural History Museum/Pitt Rivers if its current visitor notice fits. The day still has a complete Oxford story without a second private gate.',
        watch: [
          ['College pages control the door', 'Opening windows and visitor products are set by each college; ceremonies, teaching and private events can change access. Check the exact date before shaping the route around an interior.'],
          ['A library tour is a timed product', 'Bodleian public tours and library access are separate from the street-side Radcliffe Camera view. Read the current ticket and arrival instructions; do not arrive at a reading-room entrance expecting general admission.'],
          ['Rain changes the finish', 'Christ Church Meadow and the river edge are exposed and can be muddy. Trade that outdoor leg for one museum rather than crossing town to rescue every planned stop.']
        ],
        duration: 'Allow five to seven hours for the Carfax–Broad Street–Radcliffe Square walk, one booked or open interior, one museum choice and a break. A shorter exterior-only circuit can be planned separately; these are editorial allowances, not venue visit times.',
        combine: 'Keep the sequence within the centre: pair the academic quarter with one museum or, on a dry day, a short Christ Church Meadow walk. Blenheim and the Cotswold towns need their own outward day.',
        verify: 'Check the chosen college’s own visitor page, Bodleian tour availability, the Ashmolean or university museum notices, and the Oxford station return before fixing the order.',
        faq: [
          ['Can visitors walk into any Oxford college?', 'No. Public access and entry times vary by college and date. Choose one college whose own visitor page lists the exact door and conditions; keep other colleges as exteriors.'],
          ['Can I go inside the Radcliffe Camera?', 'Treat it as an exterior landmark unless the Bodleian’s current visitor information explicitly includes an interior experience. Public tours and working library access have their own terms and availability.'],
          ['Which museum fits this walk?', 'The Ashmolean sits west of the academic quarter; the Natural History Museum and Pitt Rivers are the north-side option. Choose one based on its current opening notice and collection interest instead of trying to do both in a short city day.']
        ],
        sources: [
          ['https://www.ox.ac.uk/visitors/visiting-oxford', 'University of Oxford — official visitor information'],
          ['https://www.experienceoxfordshire.org/things-to-do/top-10-oxford-university-colleges-to-visit/', 'Experience Oxfordshire — college visitor guide'],
          ['https://visit.bodleian.ox.ac.uk/plan-your-visit', 'Bodleian Libraries — tours and visit planning'],
          ['https://www.ashmolean.org/plan-your-visit', 'Ashmolean Museum — official visit planning']
        ],
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11'
      }),
      g({
        slug: 'blenheim-woodstock',
        name: 'Blenheim Palace & Woodstock',
        instrument: 'Palace-gate connection sheet',
        layout: 'estate-arrival-section',
        imageQuery: 'Blenheim Palace Oxfordshire landscape',
        imageAlt: 'Blenheim Palace and its landscaped grounds in Oxfordshire',
        purpose: 'Make the bus approach, Palace pedestrian entrance, ticketed rooms and long parkland compete honestly for one day; use Woodstock as a real town stop only when the dated return still works.',
        summary: 'From Oxford Railway Station use Stagecoach S3, or check S7 via Oxford Parkway; follow Blenheim’s current pedestrian directions, choose Palace-and-garden depth or a longer park walk, then protect the return.',
        searchSummary: 'Reach Blenheim from Oxford on Stagecoach S3 or S7 via Oxford Parkway, follow the Palace pedestrian approach, and choose State Rooms, gardens or parkland before planning the Woodstock return.',
        choices: [
          ['State Rooms and formal gardens', 'Give the Palace interior and Water Terraces the protected block, then use the nearby garden paths. This is the clearest first visit, but leaves the wider park and a long Woodstock stop for another day.'],
          ['Parkland and Great Lake', 'Choose the outdoor landscape and set a turning point before leaving the garden core. It suits a dry, longer day but gives up detailed State Room time and depends more on path and daylight conditions.'],
          ['Woodstock with a shorter Palace visit', 'Walk Woodstock’s centre and use the Marlborough Arms stop only after matching the outbound and return direction in the current timetable. This adds town context but reduces time for both the house and estate.']
        ],
        access: 'Blenheim’s current getting-here page lists Stagecoach S3 from Oxford Railway Station/Magdalen Street and S7 via Oxford Parkway. It describes the bus arrival by the main entrance and a further walk through the park to the Palace; follow that pedestrian route, not the vehicle gate. Confirm the stop and direction on the exact departure you will use.',
        tradeoff: 'The State Rooms, formal gardens, Great Lake circuit and Woodstock streets are separate time blocks. Choose one main estate depth plus a short town stop; the park walk is not a compressed indoor tour, and the Palace interior is not a substitute for the wider landscape.',
        stages: [
          ['Choose the right bus leg', 'From Oxford Railway Station or Magdalen Street compare the date-specific S3; S7 is the Oxford Parkway approach. Save the return stop and departure before leaving the city.'],
          ['Walk to the visitor threshold', 'At the bus arrival follow Blenheim’s current signed pedestrian approach through the park. Check that your ticket covers the Palace, gardens or event you intend to enter.'],
          ['Set one estate turning point', 'Visit the State Rooms and Water Terraces, or give the Great Lake/parkland the longer block. Shorten the outdoor branch first in rain, heat or limited-walking conditions.'],
          ['Add Woodstock only if it fits', 'Use the town streets for a planned break, then board at the confirmed Woodstock stop for Oxford. Do not infer a later return from the morning pattern or rely on an unbooked taxi.']
        ],
        fallback: 'If an interior or event area is closed, use only the gardens or parkland included in the day’s ticket and still open. If rain or a bus disruption breaks the outdoor plan, return to Oxford for the Ashmolean or another currently open museum instead of waiting at a rural stop.',
        watch: [
          ['Entry products and events differ', 'The Palace, gardens, park and special events do not always share the same access conditions. Confirm what your selected date and ticket include before leaving Oxford.'],
          ['The pedestrian leg is part of the day', 'The Palace site describes a walk through the park from the bus arrival. Count it both ways and choose a shorter route if the estate distance, terrain or weather is limiting.'],
          ['A Woodstock stop changes the return', 'The S3 and S7 are separate route choices and stop patterns can vary by date. Match the town stop and direction to the live operator timetable; do not use an old frequency estimate.']
        ],
        duration: 'Allow most of a day from Oxford for the bus legs, pedestrian approach, one estate focus and a short Woodstock stop. This is a planning allowance; use the Palace map and your own walking needs to set the turning point.',
        combine: 'Combine with Woodstock only when its stop and return fit the dated plan. Oxford colleges, museums and Cotswold villages deserve separate days.',
        verify: 'Check Blenheim’s dated ticket inclusions and event notices, the Stagecoach S3/S7 direction and stop, the return service, and the day’s weather before leaving Oxford.',
        faq: [
          ['Which bus should I take from Oxford?', 'Blenheim lists Stagecoach S3 from Oxford Railway Station/Magdalen Street and S7 via Oxford Parkway. Compare the exact travel date and direction on the operator page; the two routes do not share every stop.'],
          ['How far is the Palace from the bus?', 'Blenheim’s getting-here page describes a walk through the park from the bus arrival to the Palace. Follow its current pedestrian directions and allow for the return leg; do not navigate to the vehicle entrance.'],
          ['Can I add Woodstock after the Palace?', 'Yes if the estate visit and the date-specific bus return leave enough time. Use the current timetable for the Woodstock stop and return direction; otherwise keep Woodstock for another visit and return directly from the estate.']
        ],
        sources: [
          ['https://www.blenheimpalace.com/visitus/', 'Blenheim Palace — official visitor information'],
          ['https://www.blenheimpalace.com/visitus/getting-here/', 'Blenheim Palace — directions and public transport'],
          ['https://www.stagecoachbus.com/routes/oxfordshire/s3/oxford-chipping-norton/xoas003.o', 'Stagecoach — S3 route and timetable'],
          ['https://www.nationalrail.co.uk/stations/oxford/', 'National Rail — Oxford station']
        ],
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11'
      }),
      g({
        slug: 'cotswold-towns-without-car',
        name: 'Cotswold Towns Without a Car',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        instrument: 'Village-return dependency chart',
        layout: 'bus-window-gazetteer',
        imageQuery: 'Cotswolds village stone houses England',
        imageAlt: 'Honey-coloured stone houses in a Cotswold village',
        purpose: 'Plan a single no-car day by joining a real rail gateway to one named bus corridor, then cap the village count at the return the dated timetable supports. The map is not a substitute for the final rural connection.',
        summary: 'Use Moreton-in-Marsh station and the Pulhams 801 as a planning spine; choose Bourton-on-the-Water, Stow-on-the-Wold or both only after checking the exact-date journey and return.',
        searchSummary: 'No-car Cotswolds day: plan Moreton-in-Marsh rail and Pulhams 801 to a named Bourton or Stow stop; add a second town only if dated return services fit.',
        choices: [
          ['Moreton-in-Marsh plus one town', 'Arrive at Moreton-in-Marsh Railway Station, confirm the Pulhams 801 stop and direction, then choose either Stow-on-the-Wold Library or Bourton-on-the-Water Edinburgh Wool Shop. One town leaves the clearest margin for the station return.'],
          ['Bourton and Stow on the 801', 'The published 801 corridor includes Moreton-in-Marsh, Bourton-on-the-Water and Stow-on-the-Wold. Treat the two-town day as conditional: verify that the service dates, stop order and both onward and return legs line up before booking rail.'],
          ['A wider village circuit', 'If several smaller villages or a specific walking route matter, book a tour with confirmed pickup/drop-off or arrange a car. This extends geographic reach but is a separate product with its own booking, pickup and cancellation terms.']
        ],
        access: 'There is no single Cotswolds station. Moreton-in-Marsh Railway Station is a rail gateway for the 801 corridor; the bus lists Moreton-in-Marsh Railway Station, Stow-on-the-Wold Library and Bourton-on-the-Water Edinburgh Wool Shop as stops. Match the stop name to the destination centre and leave walking time at each end. If travelling from Oxford, plan the dated rail journey separately; this guide does not assume a direct train or a guaranteed same-day connection.',
        tradeoff: 'The 801 offers a named corridor, not an all-villages shuttle. A one-town visit gives more time for streets, an interior and a meal; adding a second town makes the day depend on the published timetable and leaves less slack. A footpath is an independent walking choice, not an automatic link between bus stops.',
        stages: [
          ['Build outward from the station', 'Check National Rail for the date-specific journey to Moreton-in-Marsh and Pulhams for the 801 service in your direction. Save the exact stop names and return plan before buying a train ticket.'],
          ['Choose one first town', 'At Moreton, board only after checking the 801 departure and destination display. In Bourton or Stow, walk the centre from the named stop and locate that same stop for the onward leg.'],
          ['Add a second town only on paper first', 'Check both 801 legs and leave time for a missed connection or a shorter visit. If the timetable leaves no workable return, keep the second town for another day instead of improvising a roadside walk.'],
          ['Protect the gateway return', 'Return to Moreton with daylight and rail disruption information in view. Keep the operator’s service updates and a pre-decided same-town fallback; an unbooked rural taxi is not the base plan.']
        ],
        fallback: 'If the connecting bus is cancelled, disrupted or unsuitable for your date, stay in Moreton-in-Marsh or spend the day in the first town you can reach. Choose a local museum, church, high street or meal, and drop the second village before sacrificing the return journey.',
        watch: [
          ['The dated timetable decides the village count', 'Pulhams publishes the 801 timetable separately from the route description. Check the service date, direction, stop and any holiday variation; this guide makes no frequency or last-bus promise.'],
          ['Stops can sit outside the place you pictured', 'Confirm the named stop and walking route to the town centre. Narrow roads and fields are not safe default shortcuts between villages.'],
          ['Walking routes need a separate plan', 'Check path condition, distance, daylight, access and a turn-back point. Remove a rural walk in wet or short-day conditions before compressing the transit return.']
        ],
        duration: 'Reserve a full day for the gateway and one town. A second town is a timetable-dependent addition, not a standard promise. If you want multiple rural stops on separate days, consider a booked base near the corridor; avoid changing hotels for one marginal bus connection.',
        combine: 'Pair Moreton-in-Marsh with one 801 stop, or link Bourton and Stow only if the dated service allows both directions. Keep Oxford and Blenheim as separate days; they are not Cotswold bus stops.',
        verify: 'Check Pulhams 801 timetable and service updates, the Moreton-in-Marsh rail journey and disruption notice, stop names in both directions, holiday service changes, daylight, weather and any planned footpath before departure.',
        faq: [
          ['Which Cotswold towns does the 801 serve?', 'Pulhams lists Moreton-in-Marsh Railway Station, Stow-on-the-Wold Library and Bourton-on-the-Water Edinburgh Wool Shop among the 801 stops. Check the current route and dated timetable for the direction and service you need.'],
          ['Can I see Bourton and Stow in one day without a car?', 'The 801 route links both towns, but a visit is practical only if the exact-date timetable supports your rail arrival, both town stops and the return to Moreton. If it does not, choose one town or book a tour with confirmed pickup.'],
          ['Can I walk between villages when the bus does not fit?', 'Only with a separately checked walking route, daylight, weather and safe access. A short map distance beside a rural road is not an assumed footpath or a safe connection.']
        ],
        sources: [
          ['https://www.pulhams.co.uk/busservices/timetables/service801/', 'Pulhams — 801 route and timetable'],
          ['https://www.oxfordbus.co.uk/services/PULH/801', 'Oxford Bus Company — Pulhams 801 route and stops'],
          ['https://www.nationalrail.co.uk/stations/moreton-in-marsh/', 'National Rail — Moreton-in-Marsh station']
        ]
      })
    ]
  }),
  c({
    slug: 'cambridge-east-anglia',
    name: 'Cambridge & East Anglia',
    nation: 'England',
    band: 'england-south',
    family: 'fen-waterline-register',
    label: 'Fen waterline register',
    tagline: 'Use rail for the cathedral and city spine; make coast and fen edges separate decisions.',
    hubIntro: 'Cambridge, Ely and Norwich sit on useful rail lines, but their stations, historic cores and surrounding fen or coast landscapes operate at different scales. A good plan distinguishes a walkable academic city from a cathedral stop and a wider East Anglian excursion with its own onward connection.',
    stay: 'Use Cambridge for two nights and an Ely day; add a third or fourth night before choosing Norwich or a north-coast branch. The Norwich–Sheringham rail line and onward coast bus are separate connections, so protect a return and choose one branch per day rather than stacking several Norfolk villages into a short stay. Norwich can also function as a separate base for northern Norfolk.',
    transfer: 'Cambridge station is south-east of the colleges, Cambridge North serves a different edge and Ely station sits below the cathedral core. Greater Anglia routes are useful but do not remove the final walk or rural bus; check engineering works, especially at weekends.',
    season: 'College access follows academic use, while fen paths, river activities and coast services respond to weather and daylight. Summer brings punting and visitor pressure; winter gives clear urban days but shorter rural returns.',
    fallback: 'When college access or an outdoor branch fails, Cambridge and Norwich both have complete museum-led alternatives. Keep the fallback in the same rail city rather than chasing a distant village.',
    reviewDate: '10 October 2026',
    reviewDateISO: '2026-10-10',
    sources: [
      ['https://www.visitcambridge.org/', 'Visit Cambridge — official destination guide'],
      ['https://www.greateranglia.co.uk/', 'Greater Anglia — rail planning and service updates'],
      ['https://www.traveline.info/', 'Traveline — public transport journey planning']
    ],
    guides: [
      g({
        slug: 'cambridge-colleges-backs',
        name: 'Cambridge Colleges & the Backs',
        reviewDate: '10 October 2026',
        reviewDateISO: '2026-10-10',
        instrument: 'College-gate and river clock',
        layout: 'backs-and-courts-fold',
        imageQuery: 'Cambridge Kings College Backs river Cam',
        imageAlt: 'King’s College and the River Cam in Cambridge',
        purpose: 'Choose one publicly accessible college and one river-side line, then connect them without assuming every court, chapel and stretch of the Backs is open to visitors.',
        summary: 'Walk 1.5 miles from the station to King’s College and the public Backs. In rain, use the Fitzwilliam’s U bus option; protect the return train.',
        choices: [
          ['College and chapel', 'Anchor the day at one college or chapel with current public access. This gives depth but makes the schedule dependent on academic and worship use.'],
          ['Museums and public streets', 'Use the Fitzwilliam and university museums with market streets between them. It is the most weather-resistant option but sees fewer private courts.'],
          ['River and Backs', 'Prioritize public river paths, bridges and a verified punt product. This suits clear weather but should not be described as access to every college landscape.']
        ],
        access: 'Cambridge station is roughly a city walk from the central colleges; buses and taxis use different drop points. Confirm the college’s visitor gate and the punt departure operator. The Backs include public views and private land, so follow signed routes rather than map shortcuts.',
        tradeoff: 'Several college interiors, the Fitzwilliam and a long punting session do not fit comfortably. Choosing a controlled college visit sacrifices museum depth; choosing collections gives up some famous court access.',
        stages: [
          ['Cross the station gap', 'Use Station Road and a planned city line or a verified bus, keeping the final train time visible. Do not treat the station as part of the old centre.'],
          ['Meet one college gate', 'Follow current opening and ticket instructions. If access is suspended, use the exterior sequence without waiting indefinitely.'],
          ['Read streets and Backs', 'Move through Market Square, Senate House passage and one river-side line. Respect private boundaries and avoid repeated bridge crossings.'],
          ['Finish at museum or river', 'Choose the Fitzwilliam or a verified punt and end near a direct station route. Keep the final activity bounded by the return train.']
        ],
        fallback: 'If colleges close, use the Fitzwilliam, Museum of Archaeology and Anthropology or Museum of Zoology according to current hours, plus public streets and river views. The city remains a complete trip without buying an improvised tour.',
        watch: [
          ['Colleges are working institutions', 'Opening can change for study, worship and events. Check the individual college rather than a city-wide summary.'],
          ['The Backs are not wholly public', 'Some lawns, bridges and paths are controlled. Stay on signed public routes and do not follow crowds through an unmarked gate.'],
          ['Punt products differ', 'Self-hire, shared tours and private tours use different landings and conditions. Confirm operator, weather policy and finish point.']
        ],
        duration: 'Allow six to eight hours for one college, the public core and either a museum or river activity. A compact streets-and-Backs circuit can fit four hours.',
        combine: 'Combine with the Fitzwilliam or a single punt because both remain inside Cambridge. Keep Ely, Norwich and London for separate days.',
        verify: 'Check the selected college, chapel and museum notices, punt conditions, Greater Anglia service and the last comfortable train before leaving.',
        sources: [
          ['https://www.kings.cam.ac.uk/getting-kings', 'King’s College — official station, bus and parking directions'],
          ['https://www.kings.cam.ac.uk/opening-times-and-tickets', 'King’s College — date-specific visitor times and tickets'],
          ['https://www.kings.cam.ac.uk/accessibility-guide', 'King’s College — visitor accessibility guide'],
          ['https://www.fitzmuseum.cam.ac.uk/plan-your-visit', 'Fitzwilliam Museum — transport, entry and accessibility']
        ]
      }),
      g({
        slug: 'ely-cathedral-fens',
        name: 'Ely Cathedral & the Fen Edge',
        reviewDate: '10 October 2026',
        reviewDateISO: '2026-10-10',
        instrument: 'Cathedral-to-town elevation strip',
        layout: 'island-in-fens-section',
        imageQuery: 'Ely Cathedral fen landscape England',
        imageAlt: 'Ely Cathedral rising above the low Fenland landscape',
        purpose: 'Use Ely as a cathedral-and-town day, connecting the station, riverside and elevated historic core. Treat a wider fen excursion as optional only after an official current source confirms a named route, surface, distance and return.',
        summary: 'Walk under 10 minutes via Cherry Hill Park; choose the cathedral, town and riverside by default. Add a fen walk only after checking a named official route, surface, distance and return; towers involve 165/288 stairs.',
        choices: [
          ['Cathedral depth', 'Prioritize the cathedral floor, towers or museum product currently available. This gives architectural depth but leaves less time for the fen landscape.'],
          ['City and riverside', 'Use the cathedral exterior, market area, Cromwell context and Great Ouse edge. It is flexible and lower-cost but sacrifices the full interior.'],
          ['Fen route only after verification', 'Default to the cathedral, town and riverside. Add a fen route only after verifying a named current route, surface, distance and return on an official source. East Cambridgeshire Council’s current trail page could not be verified for this review, so no specific fen route is claimed.']
        ],
        access: 'Ely station sits below the historic core and near the river; the cathedral approach climbs through town. The council’s detailed trail page could not be verified for this review, so this guide defaults to the town and riverside rather than implying a specific fen route. Keep the rail return and daylight limit in view.',
        tradeoff: 'A tower or extended cathedral visit uses time available for the town and riverside. Prioritize the cathedral for its interior interpretation, or keep to the compact town-and-river circuit; add a fen excursion only after verifying its route and return from a current official source.',
        stages: [
          ['Orient at river level', 'Leave the station toward the Great Ouse, locate the return path and read how the cathedral rises above the low ground before climbing.'],
          ['Climb into the city', 'Use the signed streets to the market and cathedral precinct. Avoid adding distant residential loops before the booked interior.'],
          ['Commit to cathedral or town', 'Complete the cathedral visit or keep to the town and riverside. Add a fen route only after checking an official source for its current name, surface, distance and return; the East Cambridgeshire Council trail page could not be verified for this review.'],
          ['Return downhill with margin', 'Finish at the riverside or station with one train in reserve where possible. Wet surfaces and level crossings can slow the final leg.']
        ],
        fallback: 'In poor weather, use the cathedral, local museum, market and riverside. The East Cambridgeshire Council trail page could not be verified for this review; skip the fen extension unless a named current route, surface, distance and return are confirmed from an official source.',
        watch: [
          ['Tower products have conditions', 'Access, steps and schedules differ from general cathedral entry. Confirm the exact experience and mobility requirements.'],
          ['Verify before a fen excursion', 'The current East Cambridgeshire Council trail page could not be verified for this review. If adding a fen route, confirm its current name, surface, distance and return from an official source; wind, rain and saturated ground can change the effort.'],
          ['Station and cathedral are different levels', 'The final descent takes time and can be slippery. Do not leave it to the train’s departure minute.']
        ],
        duration: 'Allow five to seven hours for the cathedral, town and riverside; a cathedral-only stop can fit three hours between trains. Add a fen route only after an official current source confirms its name, surface, distance and return.',
        combine: 'Combine with Cambridge only as a short second stop when the cathedral is the sole purpose. A full Ely day should not also include Norwich or the Norfolk coast.',
        verify: 'Check Ely Cathedral opening and tower products and Greater Anglia service. Add a fen route only when a current official source confirms its name, surface, distance and return; East Cambridgeshire Council’s trail page could not be verified for this review.',
        sources: [
          ['https://www.elycathedral.org/plan-your-visit/information-for-visitors/getting-here', 'Ely Cathedral — station walk and arrival options'],
          ['https://www.elycathedral.org/plan-your-visit/information-for-visitors/accessibility', 'Ely Cathedral — ramps, ground-floor and tower access'],
          ['https://www.elycathedral.org/plan-your-visit/visitor-tickets-and-tours', 'Ely Cathedral — visitor entry and tours'],
          ['https://www.greateranglia.co.uk/', 'Greater Anglia — rail planning and service updates']
        ]
      }),
      g({
        slug: 'norwich-north-norfolk',
        name: 'Norwich & a North Norfolk Branch',
        reviewDate: '10 October 2026',
        reviewDateISO: '2026-10-10',
        instrument: 'City-to-coast branch board',
        layout: 'lanes-and-rail-branch',
        imageQuery: 'Norwich Cathedral river Wensum England',
        imageAlt: 'Norwich Cathedral above the River Wensum in Norfolk',
        purpose: 'Decide whether Norwich is the full historic-city destination or the rail base for one north Norfolk branch, and name the onward connection instead of advertising city, Broads and coast as one effortless day.',
        summary: 'Choose Norwich or one coast branch. Cromer/Sheringham are by rail; Blakeney, Cley and Wells need a Sheringham change to CH1; check a return.',
        choices: [
          ['Norwich city depth', 'Give the cathedral close, castle area, market and lanes the full day. This provides the strongest city narrative and the most reliable poor-weather plan.'],
          ['Broads gateway', 'Use a rail-served gateway such as Wroxham for a verified boat or waterside plan. This adds water landscape but gives up much of central Norwich.'],
          ['North coast branch', 'Take the Bittern Line from Norwich to Sheringham, then transfer at Sheringham Railway Approach to Sanders Coasthopper CH1 for one of Blakeney, Cley or Wells-next-the-Sea. Check the date-specific outward and return connections before leaving; this is a poor fit with a full Norwich city day.']
        ],
        access: 'Norwich station is east of the central lanes across the Wensum. Coast and Broads branches depart by specific rail or bus corridors, not from every city stop. Check the exact interchange and final return before beginning the Norwich walk.',
        tradeoff: 'A complete Norwich city day and a meaningful coast excursion are separate products. The branch gains landscape but sacrifices the cathedral, castle and market depth; staying in Norwich gives up the coast but avoids timetable pressure.',
        stages: [
          ['Cross from the station', 'Follow the river or Prince of Wales Road toward the cathedral quarter, recording the station return. Do not detour into the centre before confirming the branch decision.'],
          ['Read the historic spine', 'Connect the cathedral close, Elm Hill and market or castle area in one direction. Keep one interior as the anchor.'],
          ['Commit to city or branch', 'For the coast, take the Bittern Line from Norwich to Sheringham and change at Sheringham Railway Approach to Sanders Coasthopper CH1 for one selected village. Confirm the live outward rail-and-bus leg for the travel date before starting; never improvise both Broads and coast.'],
          ['Protect the final connection', 'Check the paired CH1 and rail return for the actual travel date before departure. End near the correct return stop with a service in reserve; rural evening alternatives can be limited.']
        ],
        fallback: 'If the branch is disrupted, Norwich remains complete through the cathedral, museum, market and covered or compact lanes. If a city interior closes, use the river and cathedral-close public realm rather than boarding an unresearched bus.',
        watch: [
          ['Norfolk branches diverge', 'Broads, Cromer, Sheringham and other coast points use different services. A single “Norfolk” timetable does not cover the whole plan.'],
          ['Boat times create a second booking', 'A train arrival does not guarantee a useful cruise connection. Confirm operator, landing and return independently.'],
          ['City hills are easy to overlook', 'The station, cathedral and market sit on different levels. Preserve energy for the climb back or choose a bus intentionally.']
        ],
        duration: 'Allow a full day for Norwich or for one branch with a short city prelude. Two nights are better if both city depth and the coast matter.',
        combine: 'Combine Norwich with one rail branch only when its times work cleanly. Keep Cambridge and Ely for different days or a multi-night East Anglia base.',
        verify: 'Check cathedral and museum access, Greater Anglia or bus service, any boat booking and the final return from the chosen branch on the actual travel date.',
        sources: [
          ['https://www.visitnorwich.co.uk/', 'Visit Norwich — official destination guide'],
          ['https://www.greateranglia.co.uk/media/15508/download?inline=', 'Greater Anglia — Norwich to Cromer and Sheringham timetable (published 14 December 2025; verify current journey)'],
          ['https://www.greateranglia.co.uk/', 'Greater Anglia — live rail planning and service updates'],
          ['https://www.sanderscoaches.com/services/SNDR/CH1', 'Sanders Coaches — Coasthopper CH1 live date selector and route map'],
          ['https://www.sanderscoaches.com/services/SNDR/44', 'Sanders Coaches — routes 44/44A/X40/X41 and date-specific variants']
        ]
      })
    ]
  }),
  c({
    slug: 'bath-bristol-somerset',
    reviewDate: '11 October 2026',
    reviewDateISO: '2026-10-11',
    name: 'Bath, Bristol & Somerset',
    nation: 'England',
    band: 'england-south',
    family: 'avon-stone-and-harbour-book',
    label: 'Avon city-pair book',
    tagline: 'Give Bath and Bristol separate city arguments before adding rural Somerset.',
    hubIntro: 'Bath and Bristol are close by rail but reward different days: one concentrates Roman archaeology and Georgian streets, the other a working harbour, collections and steep neighbourhoods. Wells, Glastonbury and the Mendips introduce bus-dependent rural connections that should not be hidden inside a city itinerary.',
    stay: 'For three nights, choose one city base: Bath Spa/SouthGate suits a first Roman-and-Georgian day and onward GWR trains; Bathwick is quieter near the Holburne and Sydney Gardens but adds a river crossing or uphill walk to the centre. Bristol’s Temple Quay/Temple Meads edge makes rail arrivals and early departures easier; Old City/Harbourside shortens evening quay walks, while Clifton Village puts the bridge and Downs closer at the cost of a steep return to the stations. Split the stay only when the Somerset branch or separate city evenings justify moving bags.',
    transfer: 'GWR links Bristol Temple Meads and Bath Spa; check the dated journey and engineering notice, then walk into each city core from its station. First Bus route 8 serves the Temple Meads–city centre–Clifton Downs corridor; its notice places westbound Clifton journeys at T10 and inbound Clifton journeys at T1 through 31 December 2026, so reopen the live stop notice. First Bus 376 is the Bristol–Wells–Glastonbury spine; 174 connects Bath and Wells via Shepton Mallet. Rural bus stops and Sunday patterns differ, so save the outward and return journeys before choosing a second town.',
    season: 'Bath’s timed interiors and Bristol’s covered collections help in rain, but the Circus–Royal Crescent climb, harbour paths and exposed Glastonbury Tor are weather-sensitive. Summer weekends bring heavier city and rural demand; reserve a Roman Baths entry slot and check No.1 Royal Crescent if it is an anchor. Bath Abbey can change access for services or events. In winter, shorten the Tor or Mendip walk for daylight and keep Wells Cathedral or an open city museum as the complete alternative.',
    fallback: 'If the Wells/Glastonbury return no longer works, stay in the departure city: use M Shed and the harbour/Old City in Bristol, or Bath Abbey’s current visitor access, the Victoria Art Gallery and a lower-level river walk in Bath. Check the venue calendar first. Do not try to rescue the rural day with an unverified cave shuttle or an assumed taxi.',
    itineraryKicker: 'THREE DAYS, ONE RURAL BRANCH',
    itineraryTitle: 'Give each city its own walk; choose Wells or Glastonbury only after checking the dated bus return.',
    itineraryIntro: 'A route framework for three full days, not a promise about service frequency or entry availability. Keep the day sequence aligned with booked slots and the operator’s current timetable.',
    itinerary: [
      ['Bath lower city, then the Georgian rise', 'From Bath Spa, keep the booked Roman Baths visit, Bath Abbey precinct and Pulteney Bridge in the lower centre. Continue via Queen Square and the Circus to the Royal Crescent only if energy and weather permit; otherwise keep the river line and save the climb.'],
      ['Bristol harbour or Clifton ridge', 'Walk from Temple Meads toward M Shed and the Floating Harbour for one collection and a quay-side loop. If the bridge and Downs are the priority, use First Bus 8 from the currently signed city-centre stop toward Clifton; check the T10/T1 notice and return before setting out.'],
      ['One Somerset town, with a second only if the bus fits', 'From Bristol, check First Bus 376 for Wells and Glastonbury; from Bath, check route 174 for Wells. Anchor the day in Wells Cathedral and the close or Glastonbury Abbey and town/Tor. Add the second town only when dated onward and return legs leave a comfortable margin.']
    ],
    searchKeywords: ['Bath Spa', 'Bathwick', 'Temple Meads', 'Temple Quay', 'route 8', 'route 174', 'route 376', 'Wells', 'Glastonbury'],
    faq: [
      ['Should I stay in Bath or Bristol?', 'Use Bath for a compact Roman, abbey and Georgian walk; choose Bristol for a harbour, museum and evening-district day. Compare the hotel’s exact walk to Bath Spa or Temple Meads if the trip includes rail or a rural-bus start.'],
      ['Can I visit Wells and Glastonbury on one day?', 'Possibly on a date-specific First Bus 376 plan from Bristol, but the route does not guarantee useful town time or a protected return. Choose one town as the anchor and add the other only after checking both directions and site entry.'],
      ['What should I do if the Tor or a rural connection fails?', 'Keep the day in Bath or Bristol, or stay in the first Somerset town. Do not assume a cave shuttle, taxi or later bus is available without checking the operator and attraction directly.']
    ],
    sources: [
      ['https://www.visitbath.co.uk/travel-and-maps/travelling-to-and-around-bath', 'Visit Bath — getting around and station approaches'],
      ['https://www.visitbath.co.uk/where-to-stay', 'Visit Bath — official accommodation areas and listings'],
      ['https://www.visitwest.co.uk/', 'Visit West — official regional destination guide'],
      ['https://www.gwr.com/stations-and-destinations/popular-routes/bristol-to-bath', 'GWR — Bristol to Bath route information'],
      ['https://www.gwr.com/travel-information/train-times', 'GWR — live train planning and updates'],
      ['https://www.firstbus.co.uk/bristol-bath-and-west/plan-journey/timetables?service=376', 'First Bus — route 376 timetable and date selector'],
      ['https://www.firstbus.co.uk/bristol-bath-and-west/plan-journey/timetables?day=mf&service=174', 'First Bus — route 174 timetable and date selector'],
      ['https://www.firstbus.co.uk/bristol-bath-and-west/news-and-service-updates/updates/service-8-route-change-temple-meads-8th', 'First Bus — route 8 Temple Meads stop change (through 31 December 2026)'],
      ['https://www.romanbaths.co.uk/visit', 'Roman Baths — official visit planning'],
      ['https://no1royalcrescent.org.uk/visit/', 'No.1 Royal Crescent — visit and ticket guidance'],
      ['https://www.bristolmuseums.org.uk/m-shed/plan-your-visit/', 'M Shed — official planning and visit calendar'],
      ['https://www.wellscathedral.org.uk/visit/admission-and-opening-times', 'Wells Cathedral — current access and opening information'],
      ['https://www.glastonburyabbey.com/plan-your-visit.php', 'Glastonbury Abbey — current visit planning']
    ],
    guides: [
      g({
        slug: 'bath-roman-georgian-city',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        name: 'Bath: Roman & Georgian City',
        instrument: 'Thermal-city time ledger',
        layout: 'stone-terrace-sequence',
        imageQuery: 'Bath Royal Crescent England panorama',
        imageAlt: 'Georgian architecture at the Royal Crescent in Bath',
        purpose: 'Choose whether the Roman Baths, abbey or Georgian uphill circuit anchors the day, then connect the thermal centre to the crescents without treating every interior and viewpoint as mandatory.',
        summary: 'From Bath Spa, book one lower-city interior, link Abbey Green and Pulteney Bridge, then climb Queen Square–the Circus–Royal Crescent only if time and energy allow.',
        searchKeywords: ['Bath Spa', 'Roman Baths', 'Bath Abbey', 'Bathwick', 'Pulteney Bridge', 'Royal Crescent'],
        stay: 'Stay around Bath Spa/SouthGate for the simplest luggage and early-entry walk; it trades a quieter evening for station and lower-centre convenience. Bathwick, east of the river, suits the Holburne, Sydney Gardens and a calmer night but adds a bridge crossing. A Royal Crescent or Lansdown-side address brings the upper-city walk close while leaving a longer, sloping station approach; confirm the exact door, lift and bag route before booking.',
        showHubOperatingBoard: false,
        choices: [
          ['Roman Baths depth', 'Use the timed archaeological visit as the central event and keep the abbey and Georgian city mostly exterior. This offers the clearest ancient-water story.'],
          ['Abbey and compact centre', 'Prioritize the abbey, river and central streets with a shorter museum stop. It reduces queues and elevation but sacrifices the full Roman interpretation.'],
          ['Georgian city climb', 'Use the Circus, Royal Crescent and a selected museum as the main sequence. This reveals later urban planning but requires more uphill walking.']
        ],
        access: 'Bath Spa is the GWR gateway south of the centre. The Roman Baths and Abbey Green sit together in the lower city; Pulteney Bridge is east, while Queen Square, the Circus and Royal Crescent rise to the north-west. Set a timed interior first, then choose the east-bank loop or upper-city climb rather than crossing back and forth.',
        tradeoff: 'A deep Roman Baths visit, abbey tower product and full Georgian circuit create a rushed sequence. Choosing one major interior gives up another but allows the city’s layers and hills to make sense.',
        stages: [
          ['Arrive on the lower-city side', 'Use Bath Spa and walk into the centre; check the exact GWR service and station access on the travel date. Leave bags before the booked entry and keep the station return in mind.'],
          ['Book one central interior', 'Treat the Roman Baths’ allocated entry as the anchor, or choose Bath Abbey if its visitor access suits the day. Abbey worship and events can change access; do not plan both interiors as guaranteed.'],
          ['Read the east-bank or Georgian district', 'From Abbey Green, cross Pulteney Bridge for the river and Holburne-side walk, or go via Queen Square and the Circus to the Royal Crescent. The upper line gains elevation; choose one.'],
          ['Return on the line you chose', 'Come back toward Bath Spa by a parallel lower-city street, or shorten the upper walk when rain, steps or energy make the descent a poor finish. Confirm any bus alternative before relying on it.']
        ],
        fallback: 'If the Roman Baths booking fails, use the abbey, Victoria Art Gallery or No. 1 Royal Crescent only when current access works, plus the exterior thermal and Georgian sequence. In heavy rain, shorten the upper-city loop.',
        watch: [
          ['Timed entry sets the whole city line', 'The lower historic core crowds around common arrival windows. Build the climb after the ticket rather than hoping to return through queues.'],
          ['The Georgian circuit gains height', 'Royal Crescent is not a flat extension from the baths. Use buses or the river-side branch when walking capacity is limited.'],
          ['Spa bathing is a different product', 'Modern thermal bathing, Roman archaeology and Pump Room dining have separate bookings and age or timing conditions. Do not conflate them.']
        ],
        duration: 'Allow six to eight hours for one major interior and either the Georgian climb or river branch. A compact Roman Baths and abbey visit can fit four hours.',
        combine: 'Combine Bath with its river and Georgian streets. Keep Bristol, Wells and Stonehenge for separate days rather than compressing them into the same rail stop.',
        verify: 'Check Roman Baths and abbey admission products, any event closures, Bath Spa rail service and mobility information before setting the route.',
        sources: [
          ['https://www.romanbaths.co.uk/visit', 'Roman Baths — official visit planning'],
          ['https://www.bathabbey.org/visiting/', 'Bath Abbey — visitor access, worship and event information'],
          ['https://no1royalcrescent.org.uk/visit/', 'No.1 Royal Crescent — visit and ticket guidance'],
          ['https://www.visitbath.co.uk/travel-and-maps/travelling-to-and-around-bath', 'Visit Bath — station approach and getting around'],
          ['https://www.gwr.com/stations-and-destinations/popular-routes/bristol-to-bath', 'GWR — Bristol to Bath rail route']
        ]
      }),
      g({
        slug: 'bristol-harbourside-clifton',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        name: 'Bristol Harbourside & Clifton',
        instrument: 'Harbour-to-ridge gradient board',
        layout: 'floating-harbour-cross-section',
        imageQuery: 'Bristol harbour coloured houses England',
        imageAlt: 'Colourful terraced houses above Cumberland Road in Bristol',
        purpose: 'Choose the low harbour loop or the Clifton ridge before leaving Temple Meads; use First Bus 8 for the steep westbound link and check its temporary station stops before setting the return.',
        summary: 'Walk from Temple Meads toward M Shed and the Floating Harbour for one collection and quay loop, or use First Bus 8 to connect a harbour start with Clifton and the suspension bridge.',
        searchKeywords: ['Temple Meads', 'M Shed', 'Floating Harbour', 'First Bus 8', 'T10', 'T1', 'Clifton Suspension Bridge'],
        stay: 'Temple Quay/Temple Meads is practical for GWR arrivals and an early return, but puts an evening harbour walk farther away. Old City or Harbourside keeps M Shed, quays and food streets closer on foot. Clifton Village suits a bridge-and-Downs morning and quieter evening; the climb back to Temple Meads is substantial, so check the First Bus 8 stop and last useful return for the date.',
        showHubOperatingBoard: false,
        choices: [
          ['Harbour collections', 'Use M Shed, a historic ship or Arnolfini as the main interior and complete the Floating Harbour circuit. This is compact and weather-resilient.'],
          ['Clifton and suspension bridge', 'Give the village, gorge and bridge viewpoint priority, using the harbour as a shorter arrival line. This adds elevation and bus dependence.'],
          ['Street and food city', 'Connect Old City, St Nicholas Market and a shorter waterside section. It suits a flexible day but sacrifices the major bridge panorama.']
        ],
        access: 'Temple Meads is east of the Floating Harbour; M Shed is about a 20-minute walk from the station according to the museum. Clifton is uphill and west. First Bus 8 serves Temple Meads, the centre, Clifton Village and Clifton Downs. The current operator notice (8 September–31 December 2026) sends westbound Clifton journeys from Temple Gate stop T10 and inbound journeys to T1; verify the notice and live stop on your date.',
        tradeoff: 'A full ship visit, harbour circuit and relaxed Clifton bridge walk exceed a casual day. Choosing Clifton sacrifices some museum depth; choosing the harbour avoids the hill but gives up the gorge perspective.',
        stages: [
          ['Choose the westbound stop before walking', 'For a Clifton-first day, use First Bus 8 from the current Temple Gate stop T10 toward Clifton Downs; its dated notice lists T1 for the inbound Clifton direction. Recheck both stops and the day’s live service.'],
          ['Keep the harbour in one loop', 'From Temple Meads, walk to M Shed (the museum estimates about 20 minutes), then choose M Shed or one ship as the interior anchor and follow the Floating Harbour toward Wapping Wharf.'],
          ['Decide at the centre: water or ridge', 'Stay by the quays and Old City, or take route 8 west to Clifton Village and the bridge. The bridge is a pedestrian crossing; check visitor-facility and maintenance notices and choose the Bristol-side or Leigh Woods-side walk deliberately.'],
          ['Return on a checked corridor', 'From Clifton, use the currently signed route 8 stop for Temple Meads or finish near a verified city-centre rail connection. If the stop notice or service changes, keep the day to the harbour rather than improvising a hill descent.']
        ],
        fallback: 'If wind or rain makes Clifton unpleasant, keep M Shed, Arnolfini and the Old City with short covered links. If a harbour interior closes, use the public quays and one verified city museum.',
        watch: [
          ['Bristol is hillier than the map suggests', 'The harbour, centre and Clifton sit at different levels. Preserve energy or use a bus intentionally.'],
          ['Bridge access has two sides', 'Viewpoints, visitor facilities and road crossings are not identical. Confirm the intended side before climbing.'],
          ['Harbour vessels have separate tickets', 'Museum entry, ship visits and ferry transport do not share one admission. Treat each as an explicit choice.']
        ],
        duration: 'Allow six to eight hours for the harbour plus Clifton, or five hours for a collection-led harbour day. Add a historic ship only when it is the main paid anchor.',
        combine: 'Combine the harbour with Old City or Clifton with the Downs. Keep Bath and rural Somerset as separate excursions.',
        verify: 'Check M Shed or the selected vessel, suspension bridge visitor information, bus status and any harbour event closure before departure.',
        sources: [
          ['https://www.bristolmuseums.org.uk/m-shed/plan-your-visit/', 'M Shed — visit calendar and access'],
          ['https://www.bristolmuseums.org.uk/m-shed/plan-your-visit/getting-here/', 'M Shed — official station and harbour approach'],
          ['https://www.firstbus.co.uk/bristol-bath-and-west/plan-journey/timetables?service=8', 'First Bus — route 8 timetable and route plan'],
          ['https://www.firstbus.co.uk/bristol-bath-and-west/news-and-service-updates/updates/service-8-route-change-temple-meads-8th', 'First Bus — route 8 stop notice through 31 December 2026'],
          ['https://cliftonbridge.org.uk/crossing-the-bridge/', 'Clifton Suspension Bridge — crossing and closure information'],
          ['https://www.gwr.com/travel-information/train-times', 'GWR — live train planning and updates']
        ]
      }),
      g({
        slug: 'wells-glastonbury-mendips',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        name: 'Wells, Glastonbury & the Mendip Edge',
        instrument: 'Somerset bus-and-weather docket',
        layout: 'cathedral-tor-decision-sheet',
        imageQuery: 'Wells Cathedral west front Somerset',
        imageAlt: 'Planning diagram comparing a Wells day, Glastonbury day and separately transferred Mendip visit; not to scale',
        purpose: 'Choose Wells or Glastonbury as the main town and add only the rural edge supported by the day’s bus, weather and daylight, instead of presenting cathedral, tor and caves as a single compact circuit.',
        summary: 'Use First Bus 174 from Bath toward Wells or 376 from Bristol toward Wells and Glastonbury; anchor the day in one town, and arrange a confirmed separate transfer for any Mendip cave.',
        searchKeywords: ['First Bus 174', 'First Bus 376', 'Wells Cathedral', 'Glastonbury Abbey', 'Glastonbury Tor', 'Cheddar Gorge', 'Wookey Hole'],
        stay: 'For a city-led trip, Bath Spa/SouthGate keeps route 174 toward Wells within reach; Bristol’s Temple Quay/Temple Meads edge is the clearer start for route 376 toward Wells and Glastonbury. A Wells-centre overnight puts the cathedral close on foot but still needs a bus for Glastonbury and has no mainline rail station. Glastonbury town suits an Abbey/Tor focus, while cave sites need a separately confirmed road transfer; do not book a remote bed on the assumption that a public bus reaches the attraction.',
        showHubOperatingBoard: false,
        choices: [
          ['Wells cathedral city', 'Prioritize the cathedral, close and Bishop’s Palace area. This creates the strongest compact heritage day and the simplest return.'],
          ['Glastonbury abbey and Tor', 'Use the abbey and town before a weather-dependent Tor climb. It offers landscape and legend but requires more walking and timing.'],
          ['Mendip or cave branch', 'Choose one booked cave or landscape site with a named bus, tour or car plan. This gains geology but sacrifices the two-town narrative.']
        ],
        access: 'Neither Wells nor Glastonbury has a mainline railway station. From Bristol, First Bus 376 serves the Wells–Glastonbury corridor; from Bath, route 174 reaches Wells via Shepton Mallet. Check the actual dated direction, stop and return, including Sunday/holiday variations. No public bus connection from these town routes to Cheddar Gorge or Wookey Hole was verified for this review; treat either cave as a separate car or confirmed-tour transfer.',
        tradeoff: 'Wells Cathedral, Glastonbury Abbey, the Tor and a cave cannot all receive useful time in one public-transport day. Choosing one town sacrifices the other’s depth but protects the return and a real meal.',
        stages: [
          ['Choose the route by the overnight base', 'From Bristol, check First Bus 376 for Wells or Glastonbury; from Bath, check route 174 to Wells. Save the correct departure stop and return before leaving the city; do not infer the pattern from a route map.'],
          ['Anchor one town first', 'In Wells, walk between the cathedral, close and market centre and confirm cathedral access. In Glastonbury, use the Abbey and town as the core before deciding whether the exposed Tor is suitable.'],
          ['Add only a proven second leg', 'A Wells–Glastonbury link may fit route 376 on some dates, but confirm the direction and gap. Cheddar Gorge and Wookey Hole need a verified car or tour transfer and their own ticket/arrival check; no public link is claimed here.'],
          ['Protect the return in daylight', 'Be at the correct bus stop with margin and a checked alternative journey. If the second connection or weather fails, remain in the first town instead of relying on a taxi or a final rural service you have not confirmed.']
        ],
        fallback: 'If the onward bus or weather fails, remain in Wells or Glastonbury for the complete town circuit, museum or interior. If rural service is already unstable at the base, replace the day with Bath or Bristol rather than relying on taxis.',
        watch: [
          ['No rail station means no automatic rescue', 'A missed bus can create a long wait or expensive taxi. Save the final two return options before departure.'],
          ['The Tor is exposed', 'Wind, rain and muddy slopes change the climb. The abbey and town remain a valid complete plan when the hill is unsuitable.'],
          ['Caves are booked destinations', 'Underground attractions have separate arrival, mobility and ticket conditions. Do not add one as a casual roadside stop.']
        ],
        duration: 'Allow a full day from Bath or Bristol for one main town and one modest extension. Wells or Glastonbury alone needs four to six hours including bus margin.',
        combine: 'Combine Wells with its close and palace edge, or Glastonbury with the Tor. Pairing both towns is reasonable only when the dated bus pattern leaves a protected return.',
        verify: 'Check Wells Cathedral or Glastonbury Abbey access, the exact bus timetable, Tor weather and any cave booking or road disruption on the actual day.',
        sources: [
          ['https://www.firstbus.co.uk/bristol-bath-and-west/plan-journey/timetables?day=fr&service=376', 'First Bus — route 376 date selector and current timetable'],
          ['https://www.firstbus.co.uk/bristol-bath-and-west/plan-journey/timetables?day=mf&service=174', 'First Bus — route 174 date selector and current timetable'],
          ['https://www.wellscathedral.org.uk/visit/admission-and-opening-times', 'Wells Cathedral — current access and opening information'],
          ['https://www.glastonburyabbey.com/plan-your-visit.php', 'Glastonbury Abbey — current visit planning'],
          ['https://www.cheddargorge.co.uk/visit', 'Cheddar Gorge — official visit, ticket and opening checks']
        ]
      })
    ]
  }),
  c({
    slug: 'cornwall-devon',
    reviewDate: '11 October 2026',
    reviewDateISO: '2026-10-11',
    name: 'Cornwall & Devon',
    nation: 'England',
    band: 'england-south',
    family: 'peninsula-weather-log',
    label: 'Peninsula weather log',
    tagline: 'Choose a rail spine, then add only the coast or moor return you can protect.',
    hubIntro: 'This is a long peninsula, not one compact day-trip region. The dependable rail spine reaches Exeter St David’s, Plymouth, Truro and Penzance; the St Ives and Maritime branches serve separate west and south-coast bases. St Erth is the transfer for the St Ives branch; Truro is the Maritime Line gateway to Perranwell, Penryn, Penmere, Falmouth Town and Falmouth Docks. Dartmoor is a different Exeter-based day: the Dartmoor Line reaches Okehampton, but the station, town interchange and open-moor trailheads are not interchangeable. Choose one corridor per day and preserve its final return.',
    stay: 'For four to six nights, use two bases only if the trip genuinely crosses the peninsula: St Ives or Penzance for west Cornwall, Falmouth or Truro for the Fal, and Exeter for the city and Dartmoor Line. St Ives keeps the harbour and Tate close but does not make Land’s End a casual extension; Penzance is the stronger western rail-and-bus interchange. Falmouth suits the Maritime Line and harbour; Truro is the better central rail junction. Exeter is the resilient Devon base; Okehampton is useful for a deliberately moor-focused overnight. A two-night trip should stay on one line rather than spend a daylight block changing hotels.',
    transfer: 'Use named rail corridors: the St Erth–Lelant–Carbis Bay–St Ives branch; Truro’s Maritime Line through Perranwell, Penryn and Penmere to Falmouth Town and Falmouth Docks; and the Exeter St David’s–Crediton–Okehampton Dartmoor Line. They solve different days, not one coast circuit. Transport for Cornwall’s route 16/16A timetable has inland trips via Gulval and Nancledra and selected 16A journeys via Gurnards Head Hotel and Zennor Turn; the variants make a date- and direction-specific check essential. A ferry from Falmouth is a separate water crossing, not a rail replacement, and rural Dartmoor buses vary by day and season.',
    season: 'Atlantic wind, rain, surf and tide affect cliff paths and ferry operation throughout the year. Fal River lists the St Mawes passenger ferry as year-round but says sailings remain subject to weather and tide; its Enterprise Boats Falmouth–Trelissick–Malpas product is seasonal, with the 2026 window shown by the operator. Do not carry that 2026 season into a later year. Short winter daylight also makes an exposed Penwith or moor walk a poor late start. Before leaving the base, compare the dated operator timetable, live disruption, tide, forecast and sunset; if the last useful connection cannot be protected, choose the town day.',
    fallback: 'Keep one complete indoor-and-town alternative beside each base: Tate and the harbour at St Ives; the National Maritime Museum Cornwall and Falmouth town; or Exeter Cathedral, RAMM and the quays. If a boat is cancelled, remain on its departure shore. If a rural bus return is uncertain, shorten to a signed walk from the rail station or make the city the whole day. Never treat a taxi as the planned rescue for a remote coastal or moor route.',
    sources: [
      ['https://www.visitcornwall.com/', 'Visit Cornwall — official destination guide'],
      ['https://www.visitdevon.co.uk/', 'Visit Devon — official destination guide'],
      ['https://www.gwr.com/', 'Great Western Railway — rail planning and service updates']
    ],
    guides: [
      g({
        slug: 'st-ives-penwith',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        name: 'St Ives & the Penwith Coast',
        instrument: 'Branch-line and headland clock',
        layout: 'gallery-coast-tide-strip',
        imageQuery: 'St Ives Cornwall harbour beach',
        imageAlt: 'St Ives harbour and waterfront in Cornwall',
        purpose: 'Choose a station-to-gallery town day or one separately verified Penwith bus or coast section, matching the St Erth branch connection to the last practical return.',
        summary: 'From St Erth, use the branch through Lelant and Carbis Bay to St Ives; stay in town for Tate or the Hepworth, or commit to one dated bus corridor with its return saved before leaving the harbour.',
        choices: [
          ['St Ives art and harbour', 'Use Tate St Ives, Barbara Hepworth or one collection plus the harbour and beaches. This is the strongest poor-weather and car-free day.'],
          ['Short coast walk', 'Take one signed section from St Ives with a clear turn-back or bus return. It adds landscape but sacrifices museum depth.'],
          ['Penwith bus circuit', 'Use a verified bus to one further town or headland, not every famous stop. This gains reach but depends most on seasonal frequency.']
        ],
        access: 'Change at St Erth for the St Ives branch; its named stops are Lelant, Carbis Bay and St Ives, whose station stands above town. Transport for Cornwall route 16/16A connects Penzance and St Ives: the operator timetable shows inland journeys via Gulval and Nancledra plus selected 16A journeys at Gurnards Head Hotel and Zennor Turn. Do not assume every 16A run serves the coastal stops; choose a journey for the exact date and direction and confirm the return before leaving St Ives. The separate 14/18 corridor links St Ives/Penzance with Truro via Hayle, Camborne and Redruth. None of these claims a Land’s End connection; verify a separate current route and stop if adding that area.',
        tradeoff: 'Tate St Ives, the Hepworth garden and a substantial coast extension compete for the same daylight. Choosing art gives up the distant headland; choosing Penwith gives up collection depth and a relaxed harbour meal.',
        stages: [
          ['Ride the branch deliberately', 'Make the St Erth connection with enough margin and note the final branch train. Descend toward the first booked gallery or harbour line.'],
          ['Read harbour and collection', 'Use one museum, the working harbour and a bounded town circuit. Avoid walking past the bus stop needed for the afternoon branch.'],
          ['Commit to town or coast', 'Stay for the second collection and beaches or board the verified bus or signed path. Turn back early when wind, rain or delay increases.'],
          ['Climb to the return', 'Allow time to regain the station or reach the correct bus interchange. Do not leave the uphill station approach to the final minutes.']
        ],
        fallback: 'If coast conditions or buses fail, keep Tate St Ives, the Hepworth garden when open, harbour lanes and a sheltered beach edge. If galleries close, use the town and a short lower-risk coastal segment rather than a distant taxi plan.',
        watch: [
          ['The branch connection is a hard edge', 'A late bus into St Ives can miss the useful train at St Erth. Protect the interchange rather than assuming the main line will wait.'],
          ['Coast paths are weather-facing', 'Cliffs, wet rock and wind make mileage a poor planning measure. Carry a turn-back point and avoid unsurveyed shortcuts.'],
          ['Tides alter beach links', 'A beach that appears to connect two areas may narrow or disappear. Use streets and signed paths as the dependable route.']
        ],
        duration: 'Allow a full day from a nearby base for St Ives plus one chosen extension. The harbour and one gallery need at least four to five hours without Penwith.',
        combine: 'Combine St Ives with one gallery pair or one coast branch. Keep Land’s End, Penzance and St Michael’s Mount as separate weather-and-transport days.',
        verify: 'Check Tate and Hepworth admission, the St Erth branch service, Transport for Cornwall buses, tide and coast-path weather before departure.',
        sources: [
          ['https://www.tate.org.uk/visit/tate-st-ives', 'Tate St Ives — official visitor information'],
          ['https://www.tate.org.uk/visit/tate-st-ives/barbara-hepworth-museum-and-sculpture-garden', 'Barbara Hepworth Museum and Sculpture Garden — official visitor information'],
          ['https://www.transportforcornwall.co.uk/services/TFCN/16', 'Transport for Cornwall route 16/16A — Penzance and St Ives corridor'],
          ['https://www.transportforcornwall.co.uk/services/TFCN/14', 'Transport for Cornwall route 14/18 — St Ives, Penzance and Truro corridor'],
          ['https://www.gwr.com/plan-journey/train-times', 'Great Western Railway — dated rail journey planning']
        ],
        faq: [
          ['Where do I change for St Ives?', 'Change from the main line at St Erth for the branch via Lelant and Carbis Bay to St Ives. Allow time for the uphill station-to-town walk on return and check the day’s GWR timetable.'],
          ['Can I reach Zennor on the St Ives bus?', 'Some selected route 16A journeys call at Gurnards Head Hotel and Zennor Turn, while other 16/16A journeys use the inland corridor via Gulval and Nancledra. Read the operator timetable for your chosen date and direction, then save the return before starting a one-way coastal walk.'],
          ['What is the low-weather plan?', 'Stay near the harbour and choose Tate St Ives or the Barbara Hepworth Museum and Sculpture Garden, subject to each venue’s opening and admission information. Keep the other visit or an exposed coast walk for another day.']
        ]
      }),
      g({
        slug: 'falmouth-roseland',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        name: 'Falmouth Harbour & the Roseland',
        instrument: 'Estuary vessel decision card',
        layout: 'harbour-ferry-compass',
        imageQuery: 'Falmouth Cornwall harbour Pendennis',
        imageAlt: 'Falmouth harbour and the Carrick Roads estuary in Cornwall',
        purpose: 'Choose a museum-and-harbour Falmouth day or one estuary crossing, distinguishing passenger ferries, seasonal boats and coast paths before the Roseland becomes an unplanned final-mile problem.',
        summary: 'Arrive on the correct Falmouth branch station, use the maritime museum or Pendennis as the fixed anchor, then cross the estuary only with a verified outward and return sailing.',
        choices: [
          ['Maritime museum and town', 'Keep the day around the National Maritime Museum, harbour streets and a short waterfront line. It is the most resilient choice in variable weather.'],
          ['Pendennis headland', 'Give the castle and headland views the main block. This adds walking and exposure but remains on the Falmouth side.'],
          ['Roseland crossing', 'Use one confirmed passenger ferry to St Mawes or another named landing. It creates a two-shore day but makes the final sailing non-negotiable.']
        ],
        access: 'From Truro the Maritime Line calls at Perranwell, Penryn, Penmere, Falmouth Town and Falmouth Docks; select the stop for the first anchor rather than assuming all are interchangeable. Fal River’s St Mawes Ferry runs between Prince of Wales Pier, Falmouth and The Quay, St Mawes; the operator describes it as year-round, with a reduced winter pattern, but all sailings are subject to tide and weather. Enterprise Boats is a separate seasonal Falmouth–Trelissick–Malpas route; the operator also lists special high-tide cruises to Truro for 2026. Bus 496 from Malpas is a separately charged onward connection. King Harry Ferry is a vehicle crossing between Feock and Philleigh, not the Falmouth passenger ferry. Confirm a named outward and return product, its landing and live sailing status before making a two-shore day.',
        tradeoff: 'A full museum, Pendennis and a relaxed Roseland crossing do not share one comfortable day. Crossing the estuary sacrifices collection or castle depth; staying in Falmouth gives up the village but removes the marine cutoff.',
        stages: [
          ['Use the correct branch stop', 'Leave the train at the station nearest the first anchor and note the final service. Do not descend to the wrong quay for a similarly named boat.'],
          ['Complete the harbour anchor', 'Visit the maritime museum or Pendennis and read the working harbour from one shore before buying another transport product.'],
          ['Commit to one water move', 'Board only the verified ferry with a return sailing and weather policy. If it is cancelled, deepen Falmouth instead of improvising around the estuary by road.'],
          ['Return before the marine edge', 'Come back with a sailing in reserve and allow the uphill station approach. Keep a town-side meal as the final flexible element.']
        ],
        fallback: 'If ferries stop, use the museum, harbour, art gallery and Pendennis approach according to weather. If the headland is exposed, retain the lower waterfront and indoor collection without attempting another coast.',
        watch: [
          ['Quays are product-specific', 'Sightseeing, passenger and event boats may leave from different landings. Confirm the operator and boat name, not only “Falmouth harbour.”'],
          ['Wind can break the two-shore plan', 'A fine rail journey does not guarantee an estuary sailing. Keep the complete Falmouth alternative ready.'],
          ['The town rises from the water', 'Walking between harbour, Pendennis and stations adds gradients. Choose the final station before the day becomes tired.']
        ],
        duration: 'Allow six to eight hours for Falmouth and one ferry branch, or five hours for the museum-and-harbour route. Roseland depth is better with an overnight or separate day.',
        combine: 'Combine the museum with the harbour or Pendennis, or Falmouth with one St Mawes crossing. Keep St Ives and the Lizard for different days.',
        verify: 'Check museum or castle access, the exact Fal River sailing, branch-line service, wind and the final return before committing to the second shore.',
        sources: [
          ['https://nmmc.co.uk/visit/', 'National Maritime Museum Cornwall — official visit planning'],
          ['https://www.falriver.co.uk/ferries/st-mawes-ferry', 'Fal River — St Mawes Ferry route and operating information'],
          ['https://www.falriver.co.uk/ferries/enterprise-boats', 'Fal River — Enterprise Boats seasonal route and tide information'],
          ['https://www.kingharryscornwall.co.uk/getting-about/ferries/king-harry-ferry/', 'King Harry Ferry — Feock–Philleigh crossing and current service information'],
          ['https://www.falriver.co.uk/ferries', 'Fal River — ferry status and product directory'],
          ['https://www.falriver.co.uk/trains/great-western-railway', 'Fal River — Maritime Line stations and rail planning'],
          ['https://www.english-heritage.org.uk/visit/places/pendennis-castle/', 'English Heritage — Pendennis Castle visitor information']
        ],
        faq: [
          ['Which Falmouth stop is closest to the harbour?', 'Falmouth Town is the central-town stop; Falmouth Docks is nearer the docks and Pendennis approach, while Penmere sits uphill from the centre. Check the walk to your first anchor and return to the same or another planned stop.'],
          ['Is the St Mawes boat the same as Enterprise Boats?', 'No. The St Mawes passenger ferry links Prince of Wales Pier with The Quay at St Mawes. Enterprise Boats is a seasonal Falmouth–Trelissick–Malpas route; its operator also lists special high-tide cruises to Truro for 2026. Bus 496 from Malpas is a separately charged onward connection. Check current status and the return sailing for either product.'],
          ['What should I do if wind cancels the crossing?', 'Stay on the Falmouth shore and use the museum, town or Pendennis according to conditions. Do not attempt to recreate the crossing by an unplanned road transfer; King Harry is a separate vehicle ferry route.']
        ]
      }),
      g({
        slug: 'exeter-dartmoor-edge',
        reviewDate: '11 October 2026',
        reviewDateISO: '2026-10-11',
        name: 'Exeter & the Dartmoor Edge',
        instrument: 'Cathedral-to-moor weather gate',
        layout: 'red-stone-moor-transect',
        imageQuery: 'Exeter Cathedral Devon green',
        imageAlt: 'Exeter Cathedral and Cathedral Green in Devon',
        purpose: 'Use Exeter as a complete historic city or as the rail gateway to one Dartmoor edge, naming the branch station, onward bus or walking route instead of treating the national park as directly outside the cathedral.',
        summary: 'Read Exeter’s cathedral and quays first, then remain in the city or commit to one verified moor gateway with weather, daylight and the final rail return already checked.',
        choices: [
          ['Exeter city depth', 'Prioritize the cathedral, Roman and medieval streets, museum and quays. This is the strongest all-weather choice and needs no rural connection.'],
          ['Rail-to-moor gateway', 'Use a current Dartmoor Line or other rail gateway and a bounded local walk. It adds landscape while preserving a train-based return.'],
          ['Bus or guided moor day', 'Reach a deeper moor village or trail by verified bus, tour or car. This gives broader scenery but depends most on weather and sparse frequency.']
        ],
        access: 'For a car-free northern edge, board the Dartmoor Line from Exeter St David’s via Crediton. The line serves both Okehampton Station and the newer Okehampton Interchange: the station is the named start for the Yes Tor and High Willhays walk, while the interchange is on the town’s eastern side and is not the trailhead. The walk is a serious open-moor route, not a station stroll: carry a map, set a daylight turn-back, check weather and heed military red flags. Haytor Visitor Centre is a different eastern gateway at Haytor Vale, with the lower car park and walks to Haytor Rocks and the old Granite Tramway; use it by car or only with a dated bus/tour plan verified for that day. Do not infer a direct Exeter-to-Haytor bus from the rail map.',
        tradeoff: 'A full Exeter heritage day and a meaningful moor walk are separate days. Choosing the moor sacrifices cathedral and museum depth; staying in the city gives up open landscape but avoids an exposed, timetable-bound return.',
        stages: [
          ['Choose city station or gateway', 'Leave Exeter Central for the compact city or use St David’s and the correct branch for the rural plan. Do not cross the city with luggage between them without time.'],
          ['Complete the urban anchor', 'Use the cathedral and green or the museum and quays as one city line. For a moor day, keep this step short and reach the branch train on time.'],
          ['Pass the weather gate', 'Continue only on the verified rail, bus or signed walk when visibility, surface and daylight remain suitable. Use a firm turn-back point.'],
          ['Return through Exeter', 'Reach the gateway before the final comfortable service and allow any change at St David’s. Use Exeter as the fallback evening, not another rural detour.']
        ],
        fallback: 'If Dartmoor weather or transport fails, use Exeter Cathedral, the Royal Albert Memorial Museum and the quays as a complete city day. If a city interior closes, retain the walls, green and river route.',
        watch: [
          ['Dartmoor is not one stop', 'Rail and bus gateways serve different edges and trails. Name the exact start instead of navigating to “Dartmoor.”'],
          ['Open moor conditions change quickly', 'Mist, wind, rain and saturated ground can erase easy-looking routes. Carry a proper route and turn back early.'],
          ['Exeter stations are not interchangeable', 'Central is higher and closer to the core; St David’s is lower and serves mainline connections. Preserve the transfer time.']
        ],
        duration: 'Allow a full day for Exeter or one Dartmoor gateway. A city-plus-short-rural combination works only when the branch schedule creates a clear five-to-seven-hour window.',
        combine: 'Combine Exeter’s cathedral with the quays, or a rail gateway with one signed local walk. Keep the deeper moor, Plymouth and Cornwall for separate days.',
        verify: 'Check cathedral access, Dartmoor National Park alerts, GWR or local bus service, Met Office conditions and daylight before leaving the city.',
        sources: [
          ['https://www.exeter-cathedral.org.uk/plan-your-visit/', 'Exeter Cathedral — official visitor information'],
          ['https://dartmoorline.com/', 'Dartmoor Line — official railway route and service planning'],
          ['https://greatscenicrailways.co.uk/lines/dartmoor-line/', 'Great Scenic Railways — Okehampton station and named walk access'],
          ['https://www.dartmoor.gov.uk/enjoy-dartmoor/planning-your-visit/travel-information', 'Dartmoor National Park — seasonal public transport guidance'],
          ['https://www.dartmoor.gov.uk/enjoy-dartmoor/planning-your-visit/our-visitor-centres/haytor-visitor-centre', 'Dartmoor National Park — Haytor Visitor Centre and access'],
          ['https://rammuseum.org.uk/visit/', 'Royal Albert Memorial Museum — official visitor information']
        ],
        faq: [
          ['Which station starts the Okehampton moor walk?', 'Okehampton Station is the walk gateway identified for Yes Tor and High Willhays. Okehampton Interchange is a separate station on the town’s eastern side; do not confuse it with the trail start. Check the Dartmoor Line timetable and your return before setting out.'],
          ['Can I take the train to Haytor?', 'No rail station serves Haytor Visitor Centre. It is at Haytor Vale, about three miles west of Bovey Tracey. Plan a car journey or verify a dated seasonal bus or tour; if that connection is not confirmed, choose the Okehampton rail gateway or remain in Exeter.'],
          ['What is the safer bad-weather alternative?', 'Make Exeter the full day: Cathedral Green and Exeter Cathedral, the Royal Albert Memorial Museum when open, and the quays. Open-moor visibility, wind, wet ground, military red flags and short daylight can make the walk unsuitable even while the train is running.']
        ]
      })
    ]
  })
];
