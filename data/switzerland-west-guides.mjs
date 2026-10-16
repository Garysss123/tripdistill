import { defineSwitzerlandCluster, switzerlandGuide } from './switzerland-guide-builder.mjs';
import { switzerlandMontreuxCluster } from './switzerland-montreux-refresh.mjs';

const g = (definition) => switzerlandGuide(definition);
const c = (definition) => defineSwitzerlandCluster(definition);

export const switzerlandWestClusters = [
  c({
    slug: 'zurich-lake', name: 'Zurich & Lake Zurich', region: 'Northern Switzerland', band: 'cities', family: 'lake-grid',
    label: 'River city · lake threshold', tagline: 'Read Zurich in three connected scales: the Limmat’s paired old-town banks, the lake’s open edge and the rail-and-reuse streets of Zurich West.',
    hubIntro: 'Zurich is not one continuous sightseeing walk. The Limmat cuts through the old center before opening into Lake Zurich; Lindenhof sits above the western bank, while the eastern lanes lead toward Grossmünster. Beyond the lake head, parks and boat landings pull the day south. Zurich West is a separate rail-and-tram chapter where the 1894 viaduct now meets markets, galleries and a design campus. Choose the historic river, a visibility-led lake-and-ridge day, or the industrial-to-contemporary district instead of stitching all three into a rushed loop.',
    stay: 'Two or three nights make it possible to split the old center, lake and west-side district. Zürich HB or the old-town edge keeps rail departures and the first walking route simple; Enge is a better lakeward base if a quieter evening matters more than a short start at Lindenhof. Compare the exact tram or S-Bahn stop with your hotel rather than choosing by neighborhood name alone.',
    transfer: 'Use Zürich HB for intercity rail and the ZVV network for local trams, buses and S-Bahn. The old center is walkable but the lake shore and Zurich West are separate corridors; check the named stop for each day. Boat trips are date- and route-specific, so compare the ZSG timetable with your return connection before treating a cruise as transport.',
    season: 'The old-town route is the most weather-resilient; the lake gains most in warm, clear light, while Uetliberg is a view-dependent choice rather than a guaranteed summit panorama. Winter favors shorter shore sections and an indoor collection. In fog, decide from the ridge visibility—not only the city-center forecast—before spending time on the climb.',
    fallback: 'For rain, keep the river route to one bank and move the indoor decision forward: choose one church interior in the old town, a museum near HB, or the Museum für Gestaltung at Toni-Areal. For low cloud, leave Uetliberg out and use the lakefront parks or a confirmed short ZSG sector. Check the operator’s live timetable and the museum’s own opening calendar.',
    reviewDate: '8 October 2026', isoDate: '2026-10-08',
    sources: [
      ['https://www.zuerich.com/en/visit/nature/lindenhof', 'Zürich Tourism: Lindenhof'],
      ['https://www.zvv.ch/en/home.html', 'ZVV timetable and traffic information'],
      ['https://www.zsg.ch/en/', 'Lake Zurich Navigation Company (ZSG)'],
      ['https://www.zuerich.com/en/visit/nature/uetliberg-zurichs-very-own-mountain', 'Zürich Tourism: Uetliberg access notice'],
      ['https://museum-gestaltung.ch/en', 'Museum für Gestaltung Zürich'],
      ['https://im-viadukt.ch/en/infos', 'IM VIADUKT location and district history'],
      ['https://www.sbb.ch/en', 'SBB rail planning'],
      ['https://www.stadt-zuerich.ch/tourism.html', 'City of Zurich — tourism information']
    ],
    faq: [
      ['What should I see if I have only one day in Zurich?', 'Choose one of the three route arguments: the river and old-town churches, the lake edge with a weather-dependent ridge, or Zurich West’s rail-reuse and design district. The hub compares their different reasons to go; the child guide gives the actual sequence.'],
      ['Is a Lake Zurich cruise a good way to get around?', 'It can be, when the dated ZSG sailing connects the landing you want and has a useful return. Check the operator timetable before walking to the quay; a scenic round trip is not automatically a city-to-city transfer.'],
      ['What is the strongest rainy-day alternative?', 'Use one indoor anchor rather than trying to save every outdoor stop: a checked church interior or museum in the center, or Museum für Gestaltung at Toni-Areal in Zurich West. Keep the lake and ridge optional until the forecast improves.']
    ],
    guides: [
      g({
        slug: 'old-town-lindenhof', name: 'Old Town, Lindenhof & the Limmat', instrument: 'Limmat crossing ledger', layout: 'river-ledger',
        imageQuery: 'Zurich old town Limmat Grossmunster Switzerland', imageAlt: 'Limmat river and Zurich Old Town viewed from Schipfe on the west bank', imageTitle: 'Limmat and Old Town from Schipfe',
        summary: 'Walk from Zurich HB to Lindenhof for the city’s Roman and Carolingian layers, descend to the Limmat and make one deliberate church choice before ending toward Bellevue.',
        access: 'From Zurich HB, use Rennweg as the direct orientation line to Lindenhof, then descend toward Schipfe on the west bank. Cross once toward Grossmünster only if that is your chosen interior; otherwise stay on the west side for Fraumünster. Use ZVV for a tram return if the cobbles or slopes have become the least useful part of the day.',
        tradeoff: 'This is a compact city-history route: a hilltop civic viewpoint, a river-level lane and one church with a distinct historical or artistic focus. It leaves the lake’s outer shore and Zurich West for another block; adding both churches is less useful than taking time to read one site.',
        fallback: 'In rain, keep the route to Lindenhof and one indoor stop. The Swiss National Museum is by HB; in the old center choose a church only after checking its current visitor access. Lindenhof is listed as partially accessible and the historic streets include slopes and uneven paving, so confirm a step-free route with the city rather than assuming this loop is fully accessible.',
        duration: 'Allow four to six hours for a deliberate first pass; add a museum only if you are willing to drop part of Bahnhofstrasse or Niederdorf rather than stacking everything into one block.',
        combine: 'Pair it with the lakefront only when the weather is clear and you still have energy. Keep Uetliberg or Zurich West for another half day because both change the city’s scale and transport logic.',
        verify: 'Before leaving, check the Grossmünster renovation and tower notice, Fraumünster visitor information if you want to enter, and ZVV for any tram return. Zürich Tourism lists 187 steps to the Grossmünster tower and says its terraces are closed for safety; do not plan around an assumed tower opening.',
        choices: [
          ['Read the hill', 'HB → Rennweg → Lindenhof → Schipfe; best for a first orientation and the west-bank river view.'],
          ['Choose one church', 'Cross to Grossmünster for Romanesque and Reformation layers, or stay west for Fraumünster’s convent history and Chagall windows.'],
          ['Rain-shortened', 'Keep Lindenhof as the outdoor overview, then use one checked church interior or the National Museum by HB instead of adding a second river crossing.']
        ],
        stages: [
          ['HB to Lindenhof', 'Walk via Rennweg, then pause above the Limmat: the view makes the two-bank shape of the old center legible before the route descends.'],
          ['Down to Schipfe', 'Follow the slope to the west-bank river lane; use this lower level to compare the water edge with the elevated Lindenhof rather than doubling back through shops.'],
          ['Make the church fork', 'Cross Münsterbrücke for Grossmünster, or remain west and turn through Münsterhof to Fraumünster. Treat them as alternatives, not a required pair.'],
          ['Finish at the lake head', 'Continue south toward Bellevue and choose the return tram or walk to HB based on the day’s remaining energy and the live ZVV connection.']
        ],
        watch: [
          ['Restoration and stairs', 'Grossmünster is under a published 2025–2029 renovation program; its tower has 187 steps and the terraces are closed for safety. Check the live notice before making it the day’s anchor.'],
          ['Steep or uneven ground', 'Lindenhof is marked partially accessible. If you need a step-free route, contact the city or check its accessibility listing before choosing this hill-and-river sequence.'],
          ['Too many interiors', 'The two churches tell different stories. Decide between Grossmünster’s Romanesque/Reformation collection and Fraumünster’s abbess/Chagall story, then leave the other for another visit.']
        ],
        fieldContext: {
          heading: 'Read authority and memory along the west and east banks.',
          cards: [
            { title: 'Lindenhof is more than a lookout', copy: 'Zürich Tourism places a 4th-century Roman fort here and a 9th-century royal residence on the same hill. The oath sealing the Helvetic Constitution was taken here in 1798. Read those layers against today’s quiet public square and the view over the river.', sources: [0] },
            { title: 'Pick the church by its story', copy: 'Grossmünster pairs a Romanesque crypt with Reformation history, Polke stained glass and Giacometti choir windows; its tower is a 187-step climb during a 2025–2029 renovation program. Across the route, Fraumünster’s abbess once held coin-minting rights, and its choir windows include Marc Chagall’s cycle. Choose the interior that interests you; check current access first.', sources: [1, 2] },
            { title: 'The crossing is the itinerary', copy: 'Lindenhof and Schipfe sit on the west-bank side; Grossmünster is across the Limmat. One crossing gives the walk a clear shape. Re-crossing for every landmark turns a small river corridor into backtracking, so let the church choice determine which bank carries the finish.', sources: [3] }
          ]
        },
        sources: [
          ['https://www.zuerich.com/en/visit/nature/lindenhof', 'Zürich Tourism: Lindenhof history and accessibility'],
          ['https://www.zuerich.com/en/visit/attractions/grossmunster', 'Zürich Tourism: Grossmünster renovation and tower'],
          ['https://www.zuerich.com/en/visit/attractions/fraumunster-art-history-and-divine-stained-glass-windows', 'Zürich Tourism: Fraumünster history and windows'],
          ['https://www.zvv.ch/en/home.html', 'ZVV local timetable']
        ],
        faq: [
          ['What is worth noticing at Lindenhof besides the view?', 'The official city history places a Roman fort on the hill in the 4th century and a royal residence there in the 9th; the 1798 oath sealing the Helvetic Constitution gives the square a later civic layer.'],
          ['Which church should I choose?', 'Choose Grossmünster for the Romanesque crypt, Reformation Museum and stained glass, or Fraumünster for the convent’s civic history and Chagall windows. Check current access before setting the route.'],
          ['Can I make this route step-free?', 'Do not assume so: Zürich Tourism lists Lindenhof as partially accessible, and the historic streets have slopes and uneven paving. Ask the city about a route suited to your mobility needs before starting.']
        ]
      }),
      g({
        slug: 'lake-uetliberg', name: 'Lake Zurich & Uetliberg', instrument: 'water-to-ridge weather dial', layout: 'weather-dial',
        imageQuery: 'Lake Zurich Uetliberg panorama Switzerland', imageAlt: 'Snowy Zurich and Lake Zurich viewed from Uetliberg under hazy skies', imageTitle: 'Winter view of Zurich and Lake Zurich from Uetliberg',
        summary: 'Choose Zurich’s waterline or its local ridge by visibility and the live transport plan: a lake-side half day is low effort, while Uetliberg is a separate view-dependent outing.',
        access: 'Bellevue and Bürkliplatz orient the central shore; Arboretum and Enge extend the lake-side walk south. ZSG publishes round-trip and one-way sailings by date. For Uetliberg, use ZVV’s journey search: until 12 December 2026, Zurich HB’s SZU platforms 21/22 are closed and S10 runs only to Selnau, so the usual direct-HB assumption is wrong.',
        tradeoff: 'The lake day is flexible at shore level and can absorb a short boat trip if the departure and return fit. Uetliberg adds elevation and a wider view only when the ridge is clear; combining both compresses the boat or walking time and can create extra transfers during the published S10 works period.',
        fallback: 'If the summit is in cloud or the Uetliberg reroute does not suit your date, stay low: walk the Bellevue–Bürkliplatz–Arboretum edge, then choose Enge’s Rieterpark or the nearby Museum Rietberg. If a boat is the weather-sensitive part, drop it rather than relying on an unverified return sailing.',
        duration: 'A lakefront half day takes three to four hours; Uetliberg adds roughly another half day once rail, walking and viewpoint time are included. Give the ridge priority only when the forecast supports it.',
        combine: 'This pairs naturally with a short old-town morning. Do not also add Zurich West unless you are comfortable turning the day into a sequence of transfers rather than a coherent city experience.',
        verify: 'Check the Uetliberg notice, ZVV’s exact journey for the date, MeteoSwiss visibility and the ZSG timetable before leaving. The official works notice runs through 12 December 2026; confirm whether the S10 or surface replacement connection serves your chosen start on the actual day.',
        choices: [
          ['Waterline', 'Bellevue → Bürkliplatz → Arboretum → Enge; best for a flexible shore walk and park pauses.'],
          ['Boat as the main event', 'Choose a dated ZSG sailing only after matching the landing and return; useful for a seated lake view, not a guaranteed hop-on network.'],
          ['Clear-ridge outing', 'Make Uetliberg the focus only when visibility is good and ZVV’s S10 works diversion fits your origin and return.']
        ],
        stages: [
          ['Read the forecast at Bellevue', 'If the ridge is hidden, commit to the waterline; if it is clear, decide whether the summit matters more than a longer shore walk.'],
          ['Walk south to Bürkliplatz', 'Continue by the central lake edge toward the Arboretum. At Bürkliplatz, board only a ZSG service whose destination and return match your date.'],
          ['Use Enge as the lower-level finish', 'If you skip the boat, keep walking toward Enge and Rieterpark; the Museum Rietberg is the named indoor substitute when rain defeats the shore.'],
          ['Treat Uetliberg as a second route', 'For the ridge, check the date-specific S10 alternative first. During the 2026 HB works the line ends at Selnau; use the current ZVV surface connection or choose another day.']
        ],
        watch: [
          ['Fog inversion', 'The city can be clear while Uetliberg is in cloud. Use the mountain webcam or current visibility report before routing to the ridge.'],
          ['SZU works at HB', 'From 29 April through 12 December 2026, S10 starts/ends at Selnau rather than the closed Zurich HB platforms 21/22. Recheck the published end date and the exact replacement route.'],
          ['Boat return mismatch', 'ZSG notes that a landing may have no departure at a chosen time. Confirm both the outbound and return legs before walking to the quay.']
        ],
        fieldContext: {
          heading: 'Use the shore as the flexible layer and the ridge as a forecast bet.',
          cards: [
            { title: 'The lake is a route, not a single viewpoint', copy: 'Bellevue and Bürkliplatz mark the central end of Lake Zurich; continuing south adds the Arboretum and Enge without committing to a boat. Start with the shore, then let light, wind and energy decide whether the day stays on foot or moves onto the water.', sources: [1] },
            { title: 'A boat schedule is part of the itinerary', copy: 'ZSG distinguishes one-way trips from round trips and warns that a landing may have no departure at a selected time. Choose the date and destination first, then protect the return by rail or bus if the sailing does not fit.', sources: [2] },
            { title: 'Uetliberg is a visibility choice—and the line is diverted', copy: 'The city tourism notice says Zurich HB’s underground SZU tracks 21/22 are closed from 29 April to 12 December 2026; S10 runs only as far as Selnau. ZVV recommends trams and buses. Use its live planner for your actual start rather than reusing an old direct-HB route.', sources: [0, 1] }
          ]
        },
        sources: [
          ['https://www.zuerich.com/en/visit/nature/uetliberg-zurichs-very-own-mountain', 'Zürich Tourism: Uetliberg and temporary closure'],
          ['https://www.zvv.ch/en/home.html', 'ZVV timetable and traffic information'],
          ['https://www.zsg.ch/en/', 'ZSG current sailings and timetable'],
          ['https://rietberg.ch/en/visit', 'Museum Rietberg visitor information']
        ],
        faq: [
          ['Should I combine the lake and Uetliberg?', 'Only if you want two short contrasts rather than one complete outing. A boat departure and the current S10 diversion can add transfers; choose the shore or ridge as the day’s anchor.'],
          ['Is the S10 running from Zurich HB in autumn 2026?', 'Not during the published closure: from 29 April to 12 December 2026, the SZU platforms 21/22 at HB are closed and S10 serves Selnau only. Follow the date-specific ZVV alternative and recheck after the stated end date.'],
          ['What works when the summit is hidden?', 'Stay at lake level: use the Bellevue-to-Arboretum shore, continue toward Enge and Rieterpark, or choose Museum Rietberg. Check the ZSG sailing in both directions before making a boat part of the fallback.']
        ]
      }),
      g({
        slug: 'zurich-west-museums', name: 'Zurich West & Museum Quarter', instrument: 'tram-and-reuse grid', layout: 'industrial-grid',
        imageQuery: 'Zurich West Prime Tower Viadukt Switzerland', imageAlt: 'Mobimo Tower and Zölly residential tower above Pfingstweidpark in Zurich West', imageTitle: 'Mobimo and Zölly towers above Pfingstweidpark',
        summary: 'Follow Zurich West from Hardbrücke’s railway edge to the reused Viadukt arches, then choose one cultural anchor: Löwenbräu-Areal’s contemporary art or Museum für Gestaltung at Toni-Areal.',
        access: 'Arrive at Zürich Hardbrücke by S-Bahn for the Viadukt and Löwenbräu side; IM VIADUKT also lists tram 4, 13 or 17 to Löwenbräu. Museum für Gestaltung’s Toni-Areal is a separate stop on tram 51, and the museum describes Hardbrücke as a 12-minute walk away. Save the exact destination before setting out.',
        tradeoff: 'This route reads the city through rail infrastructure, adaptive reuse and contemporary design, not medieval landmarks. Choose either a Viadukt/Löwenbräu architecture circuit or a longer Toni-Areal museum visit; chaining both is possible, but costs the unhurried neighborhood time that makes the district distinctive.',
        fallback: 'For wet weather, make the Museum für Gestaltung at Toni-Areal the first commitment and use IM VIADUKT’s Markthalle as the indoor food pause. If you prefer contemporary art at Löwenbräu-Areal, check its own opening calendar before crossing the district; do not assume every gallery is open.',
        duration: 'Give the district three to five hours depending on whether a museum or long meal is central. The useful unit is one cultural stop plus a neighborhood circuit, not every gallery and market hall.',
        combine: 'Pair with an evening in the old town or Langstrasse corridor if desired. Avoid combining it with Uetliberg because both work better when given an uninterrupted half day.',
        verify: 'Check the Museum für Gestaltung exhibition calendar and current opening hours, the Löwenbräu-Areal institutions’ own listings, IM VIADUKT’s tenant hours and ZVV for the exact tram stop. The Toni-Areal museum is closed Mondays under its published schedule; confirm before making it the anchor.',
        choices: [
          ['Rail and reuse', 'Hardbrücke → 1894 Viadukt arches → Markthalle; strongest for adaptive-reuse architecture and a food pause.'],
          ['Contemporary art', 'Löwenbräu-Areal brings Kunsthalle Zürich, Migros Museum and galleries together; choose one current exhibition, not every name.'],
          ['Design campus', 'Tram 51 to Toni-Areal and the Museum für Gestaltung’s Swiss Design Collection; best for a focused indoor visit.']
        ],
        stages: [
          ['Start at Hardbrücke', 'Use the station as the northern rail anchor, then enter the Viadukt district on foot; keep the line and road crossings in view as part of the urban story.'],
          ['Read the arches', 'Follow IM VIADUKT toward the Markthalle. The operator dates the viaduct replacement to 1894 and describes the arches as former workspaces before their current mix of market, shops and culture.'],
          ['Choose one anchor', 'Continue to Löwenbräu-Areal for contemporary art or take tram 51 to Toni-Areal for design. The museum notes that Toni-Areal is a former milk-processing plant converted for the arts university and museum.'],
          ['Return from the chosen stop', 'Use the stop named by the venue—Hardbrücke/Löwenbräu for the arch circuit, Toni-Areal for the design campus—and check ZVV before leaving the museum or market.']
        ],
        watch: [
          ['Monday museum closure', 'The Museum für Gestaltung at Toni-Areal lists Monday as closed. Keep that day for Viadukt and the public-realm walk, or select another museum with a confirmed opening.'],
          ['Changing galleries', 'Löwenbräu tenants and exhibitions have separate schedules. Check the specific institution that interests you rather than treating the whole complex as one ticketed museum.'],
          ['Two different tram anchors', 'The Viadukt operator lists Löwenbräu for trams 4, 13 and 17; the Toni-Areal museum lists tram 51. They are not interchangeable stop names.']
        ],
        fieldContext: {
          heading: 'Trace the change from railway barrier to cultural district.',
          cards: [
            { title: 'The viaduct grew out of a city problem', copy: 'IM VIADUKT’s history says railway embankments blocked expansion in the Industriequartier until viaducts replaced them in 1894. Businesses then occupied the arches; today the same structure holds a market hall, shops and cultural tenants. This is the guide’s main architectural argument—not a second old-town walk.', sources: [0] },
            { title: 'Löwenbräu and Toni-Areal are different visits', copy: 'Löwenbräu-Areal is the contemporary-art stop identified by the Viadukt operator. Toni-Areal is a separate museum-and-university campus: the Museum für Gestaltung lists a permanent Swiss Design Collection there and describes the 1977 milk plant’s conversion for arts, research and culture. Choose by the collection or exhibition you actually want.', sources: [0, 1] },
            { title: 'Use the venue’s own arrival stop', copy: 'For IM VIADUKT and Löwenbräu, the operator lists tram 4, 13 and 17 to Löwenbräu plus S-Bahn to Hardbrücke. For the museum, tram 51 stops at Toni-Areal; the museum says Hardbrücke is a 12-minute walk. Build the route around one of these anchors rather than assuming a continuous, barrier-free stroll.', sources: [0, 1, 2] }
          ]
        },
        sources: [
          ['https://im-viadukt.ch/en/infos', 'IM VIADUKT route, transport and district history'],
          ['https://museum-gestaltung.ch/en/visit/toni-areal', 'Museum für Gestaltung: Toni-Areal access and exhibitions'],
          ['https://www.zvv.ch/en/home.html', 'ZVV timetable and traffic information']
        ],
        faq: [
          ['Which single stop should I choose in Zurich West?', 'Choose IM VIADUKT and its Markthalle for the rail-arch reuse story; choose Löwenbräu-Areal for a current contemporary-art exhibition; choose Toni-Areal for the Swiss Design Collection. These are different visit purposes, not interchangeable names for one museum.'],
          ['How do I reach the design museum?', 'The Museum für Gestaltung lists tram 51 to Toni-Areal and says Hardbrücke is a 12-minute walk. It publishes Monday closure and live exhibition information; check both before building the afternoon around it.'],
          ['Can I do this in the rain?', 'Yes, if you make one indoor anchor the purpose: Toni-Areal for design or the Viadukt Markthalle for food. Keep the outdoor architecture walk short and verify the selected institution’s own opening hours.']
        ]
      })
    ]
  }),

  c({
    slug: 'lucerne-lake-mountains', name: 'Lucerne, Pilatus & Rigi', region: 'Central Switzerland', band: 'lakes', family: 'lake-wheel',
    reviewDate: '12 October 2026', isoDate: '2026-10-12',
    label: 'Lake city · mountain spokes', tagline: 'Lucerne is a transport hub disguised as a postcard: pick one mountain spoke and let the lake connect the story.',
    hubIntro: 'Lucerne is a compact city with a working rail-and-boat hinge, not a promise that every mountain fits into one day. Give the city its own walk, then choose one summit system: Pilatus for the Kriens cableway / Alpnachstad cogwheel decision, or Rigi for the Vitznau lake approach / Arth-Goldau rail approach. Match the route to the dated operating notice and ridge forecast; the other mountain is a second-day choice, not a bonus stop.',
    stay: 'Two nights work for one city block and one carefully chosen mountain day only if arrival/departure leave those blocks intact. Three nights are the practical first-visit choice: one city day, one mountain day, and one movable arrival, departure or weather buffer. Four nights make sense when you want both Pilatus and Rigi with a spare weather day. Stay near Bahnhof/Lucerne station for first-boat, train and luggage convenience; choose the old-town side for evening atmosphere and accept extra luggage handling across the center. The station/lakefront edge is the simplest base when early mountain connections matter.',
    transfer: 'From Lucerne station, the boat piers are beside Bahnhofquai. Pilatus via Kriens: take VBL bus 1 from the station (stand A) toward Obernau Dorf to Kriens, Zentrum Pilatus, then follow the red signs about five minutes on foot to the valley station. The Alpnachstad branch is a separate chain: SBB S5 from Lucerne to Alpnachstad, or the seasonal boat from pier 2. Rigi’s lake chain is boat to Vitznau then the Vitznau–Rigi cogwheel railway; its rail alternative is SBB to Arth-Goldau and the Arth-Rigi cogwheel railway. Write down the chosen ascent, descent, operator, date and final return before leaving the hotel; do not assume one pass or one timetable governs every leg.',
    season: 'Lake boats, Pilatus aerial transport, the Alpnachstad cogwheel railway, Rigi’s two cogwheel branches and mountain paths have different seasonal calendars. Pilatus currently recommends reserving a cogwheel seat on good-weather days; its notice checked 12 October 2026 reports Kriens panorama gondola and cable-car maintenance closure from 19 October through 27 November 2026, with access then only by cogwheel from Alpnachstad. Rigi publishes separate date-bounded seasonal timetables. Recheck the exact travel date, path status, wind/cloud forecast and last descent; a running lift does not guarantee a useful summit view.',
    fallback: 'Keep a lower-elevation plan ready before buying a summit excursion: walk the old town and lakefront, choose one museum with confirmed opening, or take only a short lake-boat sector whose return is confirmed for that date. If cloud or a closure removes the summit value, switch early and keep Lucerne as the base; do not turn a poor-visibility day into a forced exposed ridge walk.',
    sources: [
      ['https://www.luzern.com/en/', 'Lucerne Tourism'],
      ['https://www.pilatus.ch/en', 'Pilatus-Bahnen'],
      ['https://pilatus.ch/infos', 'Pilatus access routes and connections'],
      ['https://pilatus.ch/en/live/disturbances', 'Pilatus dated operating notices'],
      ['https://www.rigi.ch/en', 'Rigi Railways'],
      ['https://www.rigi.ch/en/inform/timetables', 'Rigi date-specific seasonal timetables'],
      ['https://www.lakelucerne.ch/en/', 'Lake Lucerne Navigation'],
      ['https://www.sbb.ch/en', 'SBB rail planning'],
      ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss mountain forecast and warnings']
    ],
    faq: [
      ['How many nights should I base in Lucerne?', 'Two nights allow one city block and one mountain day if travel times leave both intact; three add a weather or transfer buffer; four make both Pilatus and Rigi more realistic without forcing them into consecutive poor-weather slots.'],
      ['Where should I stay for the mountain starts?', 'Near Lucerne station/Bahnhofquai for rail, boat piers and luggage simplicity. The old town is pleasant for evenings but does not remove the need to reach the station for the named bus, boat or train chain.'],
      ['What should replace a cloudy summit day?', 'Use the old-town walking loop, a confirmed-open museum or a short lake-boat segment with a checked return. Keep the summit ticket for a clearer day and verify each operator’s date-specific service notice.']
    ],
    guides: [
      g({
        slug: 'old-town-lakefront', name: 'Lucerne Old Town & Lakefront', instrument: 'bridge-and-bay walkbook', layout: 'walkbook',
        imageQuery: 'Lucerne Chapel Bridge old town lake Switzerland', imageAlt: 'Lucerne Chapel Bridge with the old town and lake',
        summary: 'Walk from Bahnhofquai through Chapel Bridge, Kornmarkt and Weinmarkt to Spreuerbrücke, then return along a different Reuss/lake edge. Pick one museum or boat add-on.',
        access: 'Start at Luzern Bahnhof and Bahnhofquai, where the railway hall, lake piers and the old center meet. Walk west across Kapellbrücke, continue through Kornmarkt and Weinmarkt, then turn toward Spreuerbrücke for the second Reuss crossing. Use the upper old-town lanes for the return, or stay at river level when the paving is dry and footing is comfortable.',
        tradeoff: 'The city circuit gives history, water and an easy arrival-day rhythm with almost no transport risk. It is not a substitute for a mountain day, so resist squeezing Pilatus or Rigi into the same afternoon unless the city is merely a transfer stop.',
        fallback: 'In rain, cut the exposed lakefront and keep the old-town arcades, Jesuit Church exterior/interior where open, or the Swiss Museum of Transport as the main plan. Confirm the museum’s date-specific hours and transit before setting out. A boat is only a weather fallback when that date’s service and return are actually listed.',
        duration: 'Four to six hours is enough for the core plus one chosen museum or short cruise. A full day makes sense if you enjoy slow waterfront time and want an indoor cultural stop.',
        combine: 'Pair with an evening arrival or a short lake cruise. Keep Pilatus and Rigi as separate half-to-full-day systems because their last connections matter.',
        verify: 'Check the Swiss Museum of Transport’s official hours and the Lake Lucerne Navigation timetable only if you add either. For boats, select the actual departure pier and return sailing; for the city walk, use a current map for construction, access and any Musegg-wall opening.',
        choices: [['Historic loop', 'Bridges, old-town squares and riverside architecture; best for a first arrival day.'], ['Water loop', 'Lake promenade plus a short boat sector; best in clear, calm weather.'], ['Museum loop', 'City core plus the Swiss Museum of Transport; strongest in rain or winter.']],
        stages: [['Bahnhofquai to Chapel Bridge', 'From the station’s lake side, identify the pier you would use for any later boat add-on, then cross Kapellbrücke once toward the old town.'], ['Kornmarkt and Weinmarkt', 'Follow Rathausquai into Kornmarkt, continue to Weinmarkt and Hirschenplatz, and use the small squares as the route spine instead of looping through parallel shopping lanes.'], ['Spreuerbrücke and Reuss', 'Cross Spreuerbrücke, pause at the river edge, then return on the opposite bank or upper lanes. Add Museggmauer only if the official access notice says the section is open and the climb suits the group.'], ['Jesuitenkirche and lakefront', 'Finish toward Jesuitenkirche and the station-side waterfront. Check boat pier and return time before boarding; otherwise the walk ends where rail, food and lodging choices remain simple.']],
        watch: [['Crowd compression', 'Kapellbrücke and Rathausquai can bottleneck. Cross once, move toward Kornmarkt and the quieter lanes, and do not queue for a second pass through the same bridge.'], ['Slippery river edge', 'Wet stone steps and uneven river paving change the walk. Keep the upper streets as an easy alternative and do not treat a waterside path as step-free.'], ['Mountain temptation', 'The city loop is not a reason to buy a same-afternoon summit ticket. Use the mountain forecast, exact operator notice and return chain to choose a separate clear window.']]
      }),
      g({
        slug: 'pilatus-round-trip', name: 'Pilatus: Summit & Round-Trip Logic', instrument: 'summit connection wheel', layout: 'connection-wheel',
        imageQuery: 'Mount Pilatus summit Lucerne Switzerland', imageAlt: 'Mount Pilatus above central Switzerland',
        summary: 'Choose between VBL bus 1 + a short walk to Kriens, S5 or seasonal pier-2 boat to Alpnachstad, then confirm the dated mountain branch before making a loop.',
        access: 'Pilatus has two different valley gateways. For Kriens, the operator currently directs visitors from Lucerne Bahnhof, bus stand A, on VBL bus 1 toward Obernau Dorf to Kriens, Zentrum Pilatus, followed by about five minutes on foot using the red signs. For Alpnachstad, the operator lists SBB S5 from Lucerne or a boat from pier 2; the boat is seasonal (the current Pilatus information says May–October). The operator page currently gives approximate journey durations, but check the date-specific SBB, boat and Pilatus notices before treating any segment as available.',
        tradeoff: 'A directional round trip adds variety and lake/rail context but increases dependence on several connections. A simple out-and-back from one side is easier in marginal weather, late starts or when maintenance closes part of the mountain system.',
        fallback: 'If cloud hides the summit, turn the day into the old-town or lakefront plan and move Pilatus to the clearest remaining slot. If the Kriens branch is inside the published 19 October–27 November 2026 maintenance closure, access is by cogwheel from Alpnachstad according to the notice checked 12 October; use S5 or the date-confirmed seasonal boat, then return through the same open chain. Do not assume the cross-mountain loop operates.',
        duration: 'Reserve most of a day for a round trip with summit time. A shorter out-and-back can fit a half day only when connections are clean and you are not adding substantial hiking.',
        combine: 'Do not combine Pilatus with Rigi on the same day. Pair it with an evening in Lucerne because the station and lakefront provide a low-stress finish after the descent.',
        verify: 'Check Pilatus-Bahnen dated disturbances, its seasonal route map, MeteoSwiss and the SBB / Lake Lucerne Navigation connections for your date. The operator currently recommends reserving a cogwheel seat in good weather. Preserve the last descent on the chosen branch and do not infer cross-mountain availability from a generic “open” status.',
        sources: [['https://pilatus.ch/infos', 'Pilatus Kriens and Alpnachstad access chains'], ['https://pilatus.ch/en/live/disturbances', 'Pilatus dated maintenance and operating notices'], ['https://www.sbb.ch/en', 'SBB connection planning'], ['https://www.lakelucerne.ch/en/', 'Lake Lucerne Navigation seasonal timetable'], ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss forecast and warnings']],
        choices: [['Kriens cableway route', 'Bus 1 from Lucerne Bahnhof (stand A) to Kriens, Zentrum Pilatus, then the signed walk to the valley station; use only when the aerial branch is running.'], ['Alpnachstad cogwheel route', 'S5 from Lucerne or the date-confirmed seasonal boat from pier 2 to Alpnachstad; choose for the rack-rail ascent and a simpler one-side return.'], ['Cross-mountain circuit', 'Ascend one branch and descend the other only when both sides, the connection and return are published open for the same date.']],
        stages: [['Check the dated notice', 'Read Pilatus disturbances and the mountain forecast first. On 12 October 2026 the operator lists Kriens aerial maintenance from 19 October through 27 November, leaving cogwheel access from Alpnachstad during that window.'], ['Reach the selected gateway', 'Kriens means VBL bus 1 to Kriens, Zentrum Pilatus and a signed five-minute walk; Alpnachstad means S5 or a currently scheduled pier-2 boat. These are separate transfer chains.'], ['Set a summit and queue limit', 'In good weather, use the operator’s cogwheel reservation recommendation; select a short summit circuit to match visibility, wind, footing and daylight rather than adding a long hike by default.'], ['Return through the open branch', 'Keep the current final descent and onward Lucerne connection visible before exploring. If one side closes or cloud wins, descend the same open route and use the city/lake fallback.']],
        watch: [['Maintenance and reservations', 'A seasonal notice can remove a branch even while Pilatus remains accessible. Seat advice and reservations depend on date and demand; check the current operator notice.'], ['Cloud and wind', 'A running lift does not make an exposed summit worthwhile. Compare the mountain forecast and visibility before committing.'], ['Transfer-chain gaps', 'The bus, boat, S5, cableway and cogwheel train are separate segments. No exact frequency, fare or future seat availability is promised here; check SBB and the operator for the travel date.']]
      }),
      g({
        slug: 'rigi-lake-circuit', name: 'Rigi & Lake Lucerne Circuit', instrument: 'boat-cogwheel timetable braid', layout: 'timetable-braid',
        imageQuery: 'Rigi Kulm Lake Lucerne Switzerland', imageAlt: 'View from Mount Rigi over Lake Lucerne',
        summary: 'Compare the boat from Lucerne to Vitznau + Vitznau cogwheel with SBB to Arth-Goldau + Arth-Rigi railway, then protect the return before choosing any ridge walk.',
        access: 'There are two clearly named rail gateways. The lake-first chain is Lucerne Bahnhofquai pier to Vitznau by Lake Lucerne Navigation, then the Vitznau–Rigi cogwheel railway toward Rigi Kulm. The rail-first chain is SBB from Lucerne to Arth-Goldau, then the Arth-Rigi cogwheel railway. A through loop that ascends one side and descends the other uses multiple operators and can be limited by seasonal timetable or maintenance; plan the exact return from the date-specific Rigi timetable and SBB/boat connections.',
        tradeoff: 'Rigi usually offers a gentler, more distributed day than Pilatus, with lake travel and multiple intermediate stops. The summit profile is less dramatic, but the transport variety and flexible descent options make it strong for mixed-energy groups.',
        fallback: 'If the ridge is in cloud, do not force an exposed walk: keep a lower station or return early if the dated descent is running, or switch to Lucerne old town and a separately verified lake sector. If a boat or mountain branch is not operating on your date, use the single open Arth-Goldau or Vitznau out-and-back only after checking the full return; otherwise keep the day in Lucerne.',
        duration: 'Allow a full day for a boat–rail circuit with a relaxed summit or short ridge walk. A half day works only with a simpler out-and-back and carefully chosen connections.',
        combine: 'Pair with Lucerne’s old town on a separate half day. Do not add another major mountain; Rigi works because the transport and scenery are allowed to be the day.',
        verify: 'Rigi Railways publishes separate date-bounded Vitznau and Arth-Goldau timetables; check the one for your exact day, the Lake Lucerne Navigation departure/return, SBB and MeteoSwiss ridge forecast. The operator’s current page shows seasonal timetable boundaries and maintenance notices, so do not reuse last season’s loop. No specific departure, fare or open status is guaranteed here.',
        sources: [['https://www.rigi.ch/en/inform/arrival', 'Rigi arrival gateways by boat, rail and bus'], ['https://www.rigi.ch/en/inform/timetables', 'Rigi date-specific Vitznau and Arth-Goldau timetables'], ['https://www.lakelucerne.ch/en/', 'Lake Lucerne Navigation timetable'], ['https://www.sbb.ch/en', 'SBB rail and connection planning'], ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss forecast and warnings']],
        choices: [['Boat to Vitznau', 'Start at Lucerne Bahnhofquai, sail to Vitznau on the date’s published service, then take the Vitznau–Rigi cogwheel railway; best when lake travel is part of the day.'], ['SBB to Arth-Goldau', 'Use the rail corridor from Lucerne and continue on the Arth-Rigi cogwheel line; this is the clearer fallback when the boat timetable or lake weather does not suit.'], ['One-side out-and-back', 'Use only one gateway and return by that same open branch; lower connection risk in shoulder season, short daylight or uncertain visibility.']],
        stages: [['Choose the gateway and return', 'Compare the dated Vitznau and Arth-Goldau timetables. Write down the ascent and descent stations before adding a ridge walk or intermediate stop.'], ['Board the correct mode', 'For Vitznau, identify the Lucerne pier and confirmed boat; for Arth-Goldau, use SBB and transfer to the separately operated mountain railway. Confirm that both legs line up on the selected date.'], ['Walk to the conditions', 'At altitude choose a viewpoint or signed ridge section only when cloud, wind, footing and daylight support it. Keep an easy station-area option if the forecast turns.'], ['Protect the return', 'Leave for the booked or published descent with margin. Do not extend to another village unless its onward boat/train and final Lucerne return are confirmed for the same date.']],
        watch: [['Seasonal timetable split', 'Vitznau and Arth-Goldau can use different seasonal timetable dates and maintenance notices. Check both branches if you are making a loop.'], ['Ridge weather', 'The summit forecast can differ from the lakefront. Carry layers and shorten exposed walking before visibility or wind deteriorates.'], ['Loop creep', 'Adding several intermediate villages turns a simple mountain day into a multi-operator connection chase. Keep one optional stop and one named return.']]
      })
    ]
  }),

  c({
    slug: 'bern-emmental', name: 'Bern & Emmental', region: 'Swiss Plateau', band: 'cities', family: 'sandstone-arcade',
    label: 'Capital · river bend',
    tagline: 'Give Bern one unhurried old-city traverse, then choose a museum-and-viewpoint day or a separate Emmental excursion.',
    hubIntro: 'Bern and Emmental work as a two-speed stay. Bern’s medieval street plan runs along a ridge inside the Aare bend, so one west-to-east walk links the market streets, fountains, cathedral terrace and river edge without turning each landmark into a separate trip. The Emmental is a rural region, not a single attraction: choose Burgdorf, Affoltern im Emmental or one mapped walking gateway, then plan its return before leaving the city.',
    stay: 'Two nights fit one full Bern walk and one museum or viewpoint block. Three nights add a full Emmental day without taking time from the old city; four nights suit travelers who want the city walk, a slow museum choice and the countryside. Bahnhofplatz and the western old town simplify luggage, rail departures and first orientation. A room near the eastern old city trades that direct station start for a quieter evening by the Aare; expect slopes and cobbles on the return. Sleeping in Emmental only helps when a specific early trail or rural overnight is the point and the dated local connections are already workable.',
    transfer: 'Start at Bern Hauptbahnhof. Walk the central ridge through Bundesplatz, Zytglogge, Kramgasse and Münsterplatz; use BERNMOBIL for the return from the Nydegg/BearPark end or for the farther museums. Bern Welcome says eligible guests staying overnight in the city receive a Bern-Ticket for local buses and trams, the Gurten and Marzili funiculars, and the Minster terrace lift; check the current eligibility and validity with the accommodation. For Gurten, Bern Welcome names streetcar 9 to Gurtenbahn or S1/S31 to the valley station. For the Emmentaler Show Dairy, its arrival page names trains to Huttwil or via Burgdorf to Hasle-Rüegsau, then a BLS bus or a booked mybuxi ride toward Affoltern im Emmental; verify the exact-date chain and return before choosing it.',
    season: 'The arcaded old city is a practical year-round route and Bern Welcome describes its covered arcade stretch as six kilometres. Rosengarten changes with the season: cherry blossoms are a short spring window, roses peak in summer and autumn colour replaces the flower display later in the year. Emmental walks need daylight, dry footing and a usable rural return; winter and shoulder seasons make the last connection and shorter light the controlling choices. A warm forecast does not make the fast Aare safe for an unfamiliar swimmer.',
    fallback: 'In rain, keep the old-city walk on the covered ridge and choose one open museum rather than descending wet steps to the river. If cloud removes the viewpoint reason, use the collection itself as the day’s anchor and leave Gurten for a clearer window. If the Affoltern bus or booked mybuxi connection does not fit, switch to rail-accessible Burgdorf for its old town and castle, or stay in Bern; do not improvise a rural walk from a missed stop.',
    reviewDate: '12 October 2026', isoDate: '2026-10-12',
    sources: [
      ['https://bern.com/en/inform/on-the-move-in-bern/', 'Bern Welcome: getting around and Bern-Ticket'],
      ['https://bern.com/en/inform/arrival/travelling-to-bern', 'Bern Welcome: arrival and rail connections'],
      ['https://www.bernmobil.ch/en', 'BERNMOBIL: current timetables, service and network'],
      ['https://www.sbb.ch/en', 'SBB: exact-date rail and regional bus planning'],
      ['https://whc.unesco.org/en/list/267/', 'UNESCO: Old City of Berne'],
      ['https://bern.com/en/news/stories-and-recommendations/rose-garden', 'Bern Welcome: Rosengarten seasons'],
      ['https://bern.com/en/explore/activities-and-excursions/gurten', 'Bern Welcome: Gurten access and walking'],
      ['https://www.emmentaler-schaukaeserei.ch/en/emmentaler-swiss-diary/contact-and-arrival.php', 'Emmentaler Show Dairy: arrival by rail, bus and mybuxi'],
      ['https://www.emmentaler-schaukaeserei.ch/en/emmentaler-swiss-diary/reservation.php', 'Emmentaler Show Dairy: reservations and current visitor information'],
      ['https://schloss-burgdorf.ch/en/', 'Burgdorf Castle: visitor information and current access']
    ],
    guides: [
      g({
        slug: 'old-city-aare', name: 'Bern Old City & Aare Bend', instrument: 'arcade-and-river ruler', layout: 'arcade-ruler',
        imageQuery: 'Bern old city Aare river Switzerland', imageAlt: 'Bern old town inside the Aare river bend', imageTitle: 'Bern Old City and the Aare Bend',
        summary: 'Follow Bern’s western-to-eastern ridge from Bern station through Bundesplatz, Zytglogge and the cathedral terrace to Nydeggbrücke and the Aare bend, then choose a lower riverside leg only if footing and energy support it.',
        access: 'Start at Bern Hauptbahnhof and move east through the old city once. The UNESCO description explains why the route reads as one place: medieval market streets and regular blocks sit inside the Aare bend, while arcades and fountains mark different layers of that plan. Bern Welcome describes six kilometres of arcades, useful shelter in light rain but not a reason to repeat every parallel shop street.',
        tradeoff: 'This is Bern’s strongest low-ticket first-day route and keeps the city’s urban story connected. It spends attention on streets and viewpoints rather than a museum interior, and its old-city slopes and cobbles can make the river descent harder than the map suggests.',
        fallback: 'In steady rain, keep the route on the ridge: use the arcades from the station through Marktgasse and Kramgasse, pause at Bundesplatz and Münsterplatz, and omit wet river stairs. For a step-free or shorter day, use the local lift or transit only after checking current accessibility and service notices; do not assume every arcade surface is level.',
        duration: 'Set aside about half a day for the ridge walk with pauses; a riverbank extension, meal or interior visit can make it a full day. These are planning allowances, not measured visit times.',
        combine: 'Keep Rosengarten and Gurten for the separate viewpoint guide unless you have a clear late-day window. Do not add Emmental: its rural transfer and return logic deserve a separate day.',
        verify: 'Before leaving, check Bern Welcome’s accessibility and monument notices, BERNMOBIL for the return from the Nydegg end, and weather or river information if considering a waterside extension. Walking beside the Aare is not a swimming recommendation.',
        sources: [
          ['https://bern.com/en/inform/on-the-move-in-bern/', 'Bern Welcome: on foot, public transport and Bern-Ticket'],
          ['https://whc.unesco.org/en/list/267/', 'UNESCO: Old City of Berne planning and heritage'],
          ['https://www.bernmobil.ch/en', 'BERNMOBIL: current service and route planning']
        ],
        fieldContext: { heading: 'Read the ridge before descending to the water.', cards: [
          { title: 'A living market plan', copy: 'Bern was founded in the 12th century on a hill surrounded by the Aare. UNESCO identifies wide market streets, narrow deep plots, arcades and fountains as parts of one coherent urban structure; follow that long axis instead of treating it as separate photo stops.', sources: [1] },
          { title: 'Shelter has a shape', copy: 'Bern Welcome describes a six-kilometre arcade stretch through the UNESCO-listed old city. Use it to keep moving in light rain, then choose a small number of square or fountain pauses so the sheltered route does not become repetitive.', sources: [0] },
          { title: 'The river changes the return', copy: 'The eastern edge drops from the ridge toward Nydeggbrücke and the Aare. Decide before descending whether you want a lower riverside walk or a city-level finish, and keep BERNMOBIL as the named return option if the climb back is no longer useful.', sources: [0, 2] }
        ] },
        faq: [
          ['How do I walk the old city without doubling back?', 'From Bern station use Bundesplatz, follow the main ridge east past Zytglogge and the fountains to Münsterplatz, then continue to Nydeggbrücke. Return by BERNMOBIL or a higher street instead of retracing every arcade.'],
          ['Should I walk down to the Aare?', 'Only if dry footing, stairs and your return energy suit you. The cathedral terrace and Nydeggbrücke already show the river bend from above; the lower path is optional.'],
          ['Does the covered arcade route work in heavy rain?', 'It helps with light rain, but wind-driven rain and slick paving still matter. Keep the route on the upper streets, use a museum for a longer indoor block, and check step-free access with the relevant venue or operator.']
        ],
        choices: [
          ['Full ridge traverse', 'Bern station → Bundesplatz → Marktgasse/Kramgasse → Zytglogge → Münsterplatz and terrace → Nydeggbrücke. Best for first orientation and the old city’s coherent street plan.'],
          ['River edge in good conditions', 'Follow the same ridge to Nydeggbrücke, cross only if a lower riverside section is your goal, then return by a checked BERNMOBIL stop. It adds water-level context and more climbing.'],
          ['Arcade and interior day', 'Stay on the west-to-east upper streets, shorten the east end, and add one open museum or covered market stop. Useful in winter, rain or for anyone limiting steep descents.']
        ],
        stages: [
          ['Start at Bern station', 'Use Bahnhofplatz as the clear western start. Walk toward Bundesplatz and the Federal Palace before entering the long old-city ridge; check for a current public-visit notice if you want an interior tour.'],
          ['Follow the market street east', 'Continue through Marktgasse and Kramgasse. Stop at one or two fountains and the Zytglogge rather than crossing repeatedly between parallel streets. The clock tower is an orientation point, not a timed show you must build the entire day around.'],
          ['Read the river bend from above', 'Reach Münsterplatz and the cathedral terrace, then continue toward Nydeggbrücke. This is the decision point: keep the upper-city loop, visit BearPark, or descend only if the lower route and return are suitable.'],
          ['Choose a planned return', 'Use the bridge-side BERNMOBIL route after checking its current stop and service, or walk back on the ridge if energy remains. Save the exact stop and your overnight destination before leaving the station area.']
        ],
        watch: [
          ['Slopes and paving', 'The city’s short map distances hide cobbles, steps and steep links to the river. Choose the ridge or a checked transit link when mobility or weather makes the lower paths a poor fit.'],
          ['Clock crowds', 'Zytglogge and the narrow lanes can crowd at popular viewing moments. Let the market axis continue to Münsterplatz instead of waiting through repeated clusters.'],
          ['River risk', 'The Aare has fast water and cold conditions. A scenic bank walk does not establish safe entry points or swimming ability; follow local warnings and skip water access if unsure.']
        ]
      }),
      g({
        slug: 'museums-rose-garden', name: 'Bern Museums, Rosengarten & Gurten', instrument: 'culture-to-viewpoint selector', layout: 'selector-board',
        imageQuery: 'Bern Rosengarten view old town Switzerland', imageAlt: 'View over Bern old town from the Rosengarten', imageTitle: 'Bern Old City from the Rosengarten',
        summary: 'Choose one museum by collection, then add Rosengarten for the Aare-bend view or Gurten for a separate hill outing; the two viewpoints serve different days better than a checklist.',
        access: 'Begin with the museum that matches your interest. Bern Historical Museum lies on the southern edge of the center; Zentrum Paul Klee is farther east and warrants a transit leg. For Gurten, Bern Welcome names streetcar 9 to the Gurtenbahn valley station or S1/S31 from Bern main station; Rosengarten sits across the river near BearPark and involves an uphill approach from the old city.',
        tradeoff: 'The choice is collection depth versus viewpoint time. The History Museum gives a broad regional and national-history anchor; Zentrum Paul Klee is the focused art choice. Add one viewpoint, not both, if you want to give the museum real attention. Rosengarten is close to the old-city route; Gurten takes more travel but changes the scale of the view.',
        fallback: 'In rain or low cloud, keep the chosen museum as the whole anchor and use a café or shorter central walk afterward. If a museum is closed or its exhibition calendar does not interest you, make Rosengarten the short city-view walk only in safe conditions, or use the old-city arcades instead. Do not keep Gurten in the plan merely because a funicular ticket might be included.',
        duration: 'A museum plus Rosengarten can fit a half-day; a full museum visit plus Gurten usually needs most of a day after transit, food and hill time. Check current opening days, exhibition access and any reserved tour before fixing the order.',
        combine: 'Pair one viewpoint with a short old-city evening. Save Emmental for a separate full day and keep the historic ridge walk on another day if you want an unhurried city visit.',
        verify: 'Check Bern Historical Museum or Zentrum Paul Klee for the selected date, Bern Welcome for Rosengarten and Gurten conditions, and BERNMOBIL/SBB for the actual transit return. City-hotel guests should verify Bern-Ticket eligibility and scope with their accommodation.',
        sources: [
          ['https://bern.com/en/explore/tourist-attractions/art-culture/bern-history-museum', 'Bern Welcome: Bern History Museum'],
          ['https://bern.com/en/explore/tourist-attractions/art-culture/zentrum-paul-klee', 'Bern Welcome: Zentrum Paul Klee'],
          ['https://bern.com/en/news/stories-and-recommendations/rose-garden', 'Bern Welcome: Rosengarten flora and seasonal character'],
          ['https://bern.com/en/explore/activities-and-excursions/gurten', 'Bern Welcome: Gurten trails and access'],
          ['https://bern.com/en/inform/on-the-move-in-bern/', 'Bern Welcome: buses, trams and Bern-Ticket'],
          ['https://www.bernmobil.ch/en', 'BERNMOBIL: current route and service information']
        ],
        fieldContext: { heading: 'Give one collection the middle of the day.', cards: [
          { title: 'Bern History Museum', copy: 'Use this as the broad historical choice near the center. Check the museum’s current exhibitions, opening day, entrance rules and any tour reservation before building the rest of the day around it.', sources: [0] },
          { title: 'Zentrum Paul Klee', copy: 'This is a distinct art-led choice rather than an extra stop on the old-city walk. Its position east of the center makes the transit leg part of the decision; check the current exhibition and operating information first.', sources: [1, 5] },
          { title: 'Two different viewpoints', copy: 'Rosengarten frames the old city across the Aare and changes with cherry blossoms, summer roses and autumn colour. Gurten is a separate hill approach: streetcar 9 or S1/S31 reaches its valley station, with the funicular or marked trails continuing the visit.', sources: [2, 3] }
        ] },
        faq: [
          ['Which museum should I choose?', 'Choose Bern History Museum for a broad historical visit or Zentrum Paul Klee for an art-focused visit. Compare the current exhibition and time needed, then visit one deeply instead of rushing between both.'],
          ['Is Rosengarten the same kind of outing as Gurten?', 'No. Rosengarten is a nearby old-city viewpoint with a seasonal flower display; Gurten is a separate local-mountain trip with its own rail or funicular access and walking options.'],
          ['Should I reserve a museum or viewpoint visit?', 'Check the chosen museum’s date-specific exhibitions, guided tours and entry information. If you plan a special Gurten meal or a timed program, reserve that with the provider; ordinary viewpoint access still depends on current operations and weather.']
        ],
        choices: [
          ['History + Rosengarten', 'Bern History Museum first, then the old-city terrace or Rosengarten if the approach and weather suit. Best when the city’s history and its urban form are the main interests.'],
          ['Art + central evening', 'Zentrum Paul Klee as the day’s anchor, with the BERNMOBIL/SBB leg planned both ways and dinner back in the center. Best for visitors who want a focused collection.'],
          ['Viewpoint day', 'Keep museum time short, then choose either Rosengarten or Gurten. Gurten is the larger outing; Rosengarten adds the closer look back across the Aare. Do not try to collect both hills.']
        ],
        stages: [
          ['Check one museum calendar', 'Choose Bern History Museum or Zentrum Paul Klee by collection and current exhibition. Verify its date-specific opening, tour or entry arrangement before buying or reserving.'],
          ['Travel to the chosen collection', 'Use the venue’s own arrival guidance and BERNMOBIL or SBB for the exact stop and return. If you are staying in Bern, ask whether your accommodation issues a valid Bern-Ticket for that day.'],
          ['Choose one high point', 'After the museum, use Rosengarten for the close old-city view, or go to the Gurtenbahn valley station by streetcar 9 or S1/S31 for the more separate hill experience. Check visibility before choosing the longer outing.'],
          ['Finish where dinner is easy', 'Return to the center with the last useful connection saved. Leave a longer old-city walk for another day instead of doubling back to both viewpoints.']
        ],
        watch: [
          ['Calendar before ticket', 'Museum operating days and exhibition arrangements can change. Check the selected institution’s own date-specific page before committing a day around it.'],
          ['View-dependent value', 'Rosengarten still works as a park in cloud, but Gurten may lose its panoramic reason. Keep the museum block and move the hill outing to a clearer window.'],
          ['Overloading the day', 'Two museums and two viewpoints create long transfers and shallow visits. One collection plus one high point is the useful ceiling for this plan.']
        ]
      }),
      g({
        slug: 'emmental-day-trip', name: 'Emmental Gateways & Cheese Country', instrument: 'rural transfer notebook', layout: 'rural-notebook',
        imageQuery: 'Emmental valley farmhouse Switzerland', imageAlt: 'Original schematic comparing Bern rail gateways for a Burgdorf visit, Affoltern show-dairy transfer and a mapped Emmental walk; conceptual and not to scale',
        summary: 'Choose one Emmental gateway—Burgdorf town and castle, the Affoltern show dairy, or a dated signed walk—and plan its last rail or bus return before leaving Bern.',
        access: 'Emmental is a dispersed landscape. Burgdorf is the rail-first town-and-castle option. The Emmentaler Show Dairy’s arrival page lists rail to Huttwil or via Burgdorf to Hasle-Rüegsau, then a BLS bus or a reserved mybuxi ride toward Affoltern im Emmental; the operator says mybuxi can take visitors directly to the dairy. A third option is a short signed countryside walk chosen from the current local map near one rail gateway. These are separate day shapes, not one walkable chain.',
        tradeoff: 'The reward is a rural contrast of working valleys, town history and food production. The cost is a less forgiving last mile: a missed regional bus can strand a carefully chosen dairy booking or shorten the walk. Take this day if the landscape or cheese-making is itself the point; choose Burgdorf or stay in Bern if the weather or connection pattern is poor.',
        fallback: 'If the Affoltern bus or mybuxi ride is unavailable, switch to Burgdorf old town and Castle Museum only after checking the castle’s current hours, or keep the day in Bern. In rain or short winter daylight, do not substitute an unverified farm-road walk; use an indoor visit with confirmed hours and preserve the return connection.',
        duration: 'Use one full day for a Bern-to-Emmental excursion with a rural feeder. A shorter visit is realistic only when the chosen town is rail-accessible and the walk or visit stays close to that station. These are itinerary allowances, not journey-time guarantees.',
        combine: 'Do not combine a remote dairy booking with the Bern museum day or a second Emmental town. If staying overnight in Burgdorf or Langnau, move the day only after checking luggage, accommodation and the next morning’s actual transport.',
        verify: 'Check SBB for Bern to the chosen rail gateway and the complete return; check BLS and mybuxi for the Affoltern feeder, operating date and reservation needs; confirm dairy activities directly with the show dairy. Verify any Burgdorf Castle visit and any selected signed trail on their own current pages.',
        sources: [
          ['https://bern.com/en/explore/destination-bern/emmental-valley/', 'Bern Welcome: Emmental region and seasonal activities'],
          ['https://www.emmentaler-schaukaeserei.ch/en/emmentaler-swiss-diary/contact-and-arrival.php', 'Emmentaler Show Dairy: public-transport arrival'],
          ['https://www.emmentaler-schaukaeserei.ch/en/discover/Kings-Way-Tour.php', 'Emmentaler Show Dairy: King’s Way visitor information'],
          ['https://www.emmentaler-schaukaeserei.ch/en/emmentaler-swiss-diary/reservation.php', 'Emmentaler Show Dairy: current reservations and opening information'],
          ['https://www.bls.ch/en/fahren/fahrplan', 'BLS: current train and bus timetable'],
          ['https://www.mybuxi.ch/en', 'mybuxi: demand-responsive service and booking'],
          ['https://www.sbb.ch/en', 'SBB: date-specific rail planning and return'],
          ['https://schloss-burgdorf.ch/en/', 'Burgdorf Castle: museum, town access and current hours']
        ],
        fieldContext: { heading: 'Pick one gateway, then hold its return in view.', cards: [
          { title: 'Burgdorf: the rail-first fallback', copy: 'Bern Welcome describes Burgdorf as a historic town with its castle above the old center. Use the station, old town and castle as one bounded visit, and check the Castle Museum’s date-specific opening before making the uphill walk your main plan.', sources: [0, 7] },
          { title: 'Affoltern: a named rural feeder', copy: 'The show dairy is at Schaukäsereistrasse 6 in Affoltern im Emmental. Its visitor page says to reach Huttwil or Hasle-Rüegsau by rail, then use the BLS bus or bookable mybuxi connection; confirm the exact stop, service date and return before reserving a workshop.', sources: [1, 4, 5] },
          { title: 'A dairy visit is a timed anchor', copy: 'The operator presents the King’s Way as a self-guided indoor visit and lists separate bookable cheese-making and workshop options. Read the current visitor and reservation pages for the date you want; a listed activity or live reservation link does not guarantee a future slot.', sources: [2, 3] }
        ] },
        faq: [
          ['Can I visit the show dairy by public transport?', 'The venue lists train travel to Huttwil or via Burgdorf to Hasle-Rüegsau, followed by a BLS bus or mybuxi toward Affoltern im Emmental. mybuxi requires its own date-specific check and booking; save the return before committing to an activity.'],
          ['Can I combine Burgdorf and the show dairy in one day?', 'Treat them as separate branches unless the exact-date rail and feeder connections leave comfortable time at both. A direct Burgdorf town visit is the safer rail-first choice when the rural feeder does not fit.'],
          ['What is the rain or winter alternative?', 'Shorten the countryside walk and use one confirmed indoor visit, or keep the trip in Bern. Do not follow unmarked farm roads or depend on a bus connection that has not been checked for the exact date.']
        ],
        choices: [
          ['Burgdorf old town and castle', 'Use the direct rail gateway for a town walk: station → lower old town → climb to Burgdorf Castle → return to the station on the town route. It has a named public anchor and a simpler rail return than a deeper rural day.'],
          ['Affoltern show dairy', 'Choose one King’s Way or a confirmed cheese-making experience. The venue lists Huttwil or Hasle-Rüegsau as rail gateways with a BLS bus or bookable mybuxi feeder; check the exact service and workshop slot first.'],
          ['One signed countryside walk', 'Choose a current marked route near a single rail gateway, start only after confirming its open status and length for your ability, and return to the same town. Best in dry, long-daylight conditions; do not string farms or valleys together by guesswork.']
        ],
        stages: [
          ['Choose the day’s purpose', 'Decide between Burgdorf history, the Affoltern show dairy or one signed countryside walk. Do not choose “Emmental” as if every valley place were one stop beside another.'],
          ['Build from the last return', 'For Affoltern, check the full rail leg to Huttwil or Hasle-Rüegsau and the BLS bus or booked mybuxi transfer both ways. For Burgdorf, check the SBB return and castle hours. For a walk, use a single gateway and the current local trail map.'],
          ['Keep the visit local', 'Walk Burgdorf’s old center up to the castle, use the dairy’s named visitor entrance and booked activity, or stay on the signed trail you selected. Treat rural fields and farm access as working/private land unless the route is clearly marked for visitors.'],
          ['Reach the rail corridor early', 'Set a return alarm before the final local connection. If a feeder is disrupted or the walk is slower than expected, leave the optional stop and return to the named rail station; do not add a second village late in the day.']
        ],
        watch: [
          ['Rural feeder and last connection', 'The dairy’s bus or mybuxi leg is not interchangeable with a city tram. Check the service on the date you travel and reserve demand-responsive transport when required.'],
          ['Workshop availability', 'A show-dairy activity is a separate booking from reaching the building. Confirm the offer, language, time and current visitor information directly with the operator.'],
          ['Daylight and land access', 'Winter light, rain and farm work change the value of a countryside walk. Follow current signed paths, keep off private fields and switch to Burgdorf or Bern when conditions are poor.']
        ]
      })
    ]
  }),

  c({
    slug: 'basel-rhine', name: 'Basel & the Rhine', region: 'Northwest Switzerland', band: 'cities', family: 'rhine-folio',
    label: 'Museum city · border river', tagline: 'Basel is strongest when the Rhine, old city and one serious art decision form the day instead of a museum marathon.',
    hubIntro: 'Basel’s historic core, Rhine banks and unusually dense museum landscape sit close together, but the city still needs selection. Use the river as the organizing line, choose one large collection, and treat cross-border geography as context rather than a checklist of three countries.',
    stay: 'Two nights suit a first visit; add a third only for multiple museums or a day trip. Basel SBB is the easiest national-rail base, while old-town hotels reduce evening transit.',
    transfer: 'Trams dominate local movement. Basel SBB and Basel Badischer Bahnhof are different stations; international services may use either. Save the actual station name before departure.',
    season: 'Museums make Basel robust year-round. Summer strengthens riverbank life; winter shifts the balance toward collections, markets and short tram-linked walks.',
    fallback: 'Rain is rarely a reason to abandon Basel: choose a major museum, use trams between the cathedral/old city and river edges, and leave long river walks for the dry window.',
    sources: [['https://www.basel.com/en', 'Basel Tourism'], ['https://www.bvb.ch/en/', 'Basler Verkehrs-Betriebe'], ['https://www.sbb.ch/en', 'SBB rail planning'], ['https://www.kunstmuseumbasel.ch/en', 'Kunstmuseum Basel']],
    guides: [
      g({slug:'old-town-rhine',name:'Basel Old Town & Rhine Banks',instrument:'two-bank city folio',layout:'two-bank-folio',imageQuery:'Basel old town Rhine Munster Switzerland',imageAlt:'Basel old town and cathedral above the Rhine',summary:'Use Münsterplatz and the Rhine crossings to connect Grossbasel and Kleinbasel, with one deliberate riverbank stretch instead of circling the historic center twice.',access:'From Basel SBB, tram or walk to the old city and Münsterplatz, then descend to the Rhine. Choose one bridge or ferry crossing and use the opposite bank to create a loop rather than returning along the same street.',tradeoff:'This route gives Basel’s urban character without a museum ticket and leaves room for cafés or markets. It sacrifices collection depth, so art-focused travelers should reserve a separate block rather than squeezing a museum into the final hour.',fallback:'In rain, keep Münster, Rathaus and arcaded/shopping streets, then use trams to shorten the river section. Add a museum only if you can give it more than a rushed closing-hour visit.',duration:'Four to five hours covers a strong loop. Add a meal or riverside pause for a full half day.',combine:'Pair with one major museum on a separate morning or afternoon. Do not add a distant border excursion unless it has an independent reason.',verify:'Check Basel Tourism for current ferry or seasonal river information and BVB for tram changes. Rhine swimming requires local safety knowledge and appropriate conditions.',choices:[['Historic loop','Münsterplatz, Rathaus and old streets; strongest for architecture.'],['River loop','One bank down, cross once, return on the other; strongest in good weather.'],['Market-and-evening loop','Shorter sightseeing with Marktplatz and Kleinbasel food/drink; useful on arrival day.']],stages:[['Station to the old city','Use tram or a direct walk to reach the historic core quickly; do not spend the first hour in the station approaches.'],['Münster terrace','Read the river from above and choose the descent point before entering side streets.'],['Cross the Rhine once','Use a bridge or operating ferry as a structural move, then explore a different bank.'],['Return by tram or a second crossing','Finish near the hotel or dinner area instead of retracing the entire waterfront.']],watch:[['River-current risk','The Rhine is powerful. Watching locals swim is not safety guidance for visitors.'],['Station confusion','Basel SBB and Badischer Bahnhof serve different corridors. Verify which one your international train uses.'],['Museum temptation','Basel’s museum density can overwhelm a simple city walk. Choose one collection on purpose.']]}),
      g({slug:'art-museums',name:'Basel Art Museums & Fondation Beyeler',instrument:'collection comparison spread',layout:'museum-spread',imageQuery:'Kunstmuseum Basel Switzerland museum',imageAlt:'Kunstmuseum Basel and surrounding city streets',summary:'Compare Kunstmuseum Basel, Fondation Beyeler and other collections by subject and location, then commit to one major museum plus one smaller contrast rather than collecting ticket stubs.',access:'Kunstmuseum sits close to the center; Fondation Beyeler is in Riehen and requires tram travel. Their geography alone should shape the day: keep central collections together or give Riehen its own half-day block.',tradeoff:'Kunstmuseum offers broad art-historical depth; Fondation Beyeler pairs a focused modern collection with architecture and garden context. Two major museums are possible but attention, not transit, is usually the limiting resource.',fallback:'Museums are the fallback. If weather improves, add a short Rhine or old-town walk between them instead of automatically entering a third collection.',duration:'One major museum deserves two to three hours; two major institutions make a full day once transport and meals are included.',combine:'Pair a central museum with the old town. Pair Fondation Beyeler with Riehen and a simple tram return, not a rushed second distant attraction.',verify:'Check each museum’s official opening day, exhibition access and any timed-entry policy before travel. Use BVB for current tram connections.',choices:[['Kunstmuseum depth','Best for a broad historic-to-modern collection and minimal transport.'],['Beyeler focus','Best for modern art, architecture and a calmer suburban setting.'],['Two-museum day','Only for visitors who genuinely want long collection time; schedule a real break between institutions.']],stages:[['Choose by collection','Read current exhibitions and permanent holdings before buying anything.'],['Give the first museum full attention','Start when energy is high and avoid racing through galleries to preserve a second slot.'],['Use the transfer as a break','Tram to Riehen or walk the central river edge; do not replace lunch and rest with more galleries.'],['Stop after the second anchor','Return to the city for dinner rather than filling the evening with another museum because it is nearby.']],watch:[['Closed-day cascade','Several museums may share weekly closure patterns. Verify the exact date.'],['Exhibition pricing','Special exhibitions can use different ticket logic from permanent collections.'],['Attention fatigue','Collection quality does not remove cognitive fatigue. Two serious museums are already a full cultural day.']]}),
      g({slug:'kleinbasel-border-rhine',name:'Kleinbasel, Dreiländereck & Border Context',instrument:'border-river coordinate sheet',layout:'coordinate-sheet',imageQuery:'Basel Rhine Kleinbasel Switzerland',imageAlt:'Basel Rhine waterfront with Kleinbasel',summary:'Use Kleinbasel and the northern Rhine to understand Basel as a border city, without turning the day into a meaningless dash across three national frontiers.',access:'Start in Kleinbasel and move north by tram or riverside sections. Dreiländereck is a geographic marker in an urban/port landscape, not a major scenic attraction; public transport keeps the industrial stretches proportionate.',tradeoff:'This route gives contemporary Basel, river infrastructure and tri-national context. It gives up the cathedral-and-museum density of the center, so it works best for repeat visitors or travelers interested in urban geography.',fallback:'If weather or construction makes the river walk unpleasant, use tram stops to sample Kleinbasel neighborhoods and return to the old city. The border story does not require completing every waterfront kilometer.',duration:'Three to four hours is enough for Kleinbasel and the northern marker. Add a neighborhood meal rather than extending to multiple cross-border towns without a clear purpose.',combine:'Pair with the central old-town loop for contrast. Cross into France or Germany only when you have a specific museum, town or meal objective.',verify:'Check BVB routes and current access around port/river areas. Carry the travel documents required for your cross-border plans even within the wider Basel urban area.',choices:[['Neighborhood day','Kleinbasel streets, riverbank and food; strongest for lived-in city context.'],['Border-geography day','Add Dreiländereck and port landscapes; strongest for urban geography.'],['Tri-national extension','Only when a named destination in France or Germany adds independent value.']],stages:[['Begin in Kleinbasel','Start near a tram anchor and let the neighborhood scale replace the old-city checklist.'],['Follow the river selectively','Walk the sections with public life and views; use transit past low-value industrial stretches.'],['Read the border marker in context','Treat Dreiländereck as a coordinate in a working port region, not a monument requiring an hour.'],['Return on the tram grid','Finish centrally or at Basel SBB without duplicating the riverside path.']],watch:[['Border symbolism','Standing near three countries is not automatically a full itinerary. Add it only if the urban context interests you.'],['Port access','Working infrastructure can change pedestrian routes. Respect closures and signed access.'],['Documents and roaming','Cross-border travel can still affect tickets, mobile service and document requirements. Verify before extending the route.']]})
    ]
  }),

  c({
    slug: 'geneva-lake', name: 'Geneva & Western Lake Geneva', region: 'Romandy', band: 'cities', family: 'lake-diplomacy',
    label: 'International city · lake basin', tagline: 'Give Geneva two nights for its lake and civic core; add a third when you want the Nations quarter or Carouge at an unhurried pace.',
    reviewDate: '12 October 2026', isoDate: '2026-10-12',
    hubIntro: 'Geneva makes more sense as three walkable districts linked by named transit legs than as a single lakefront checklist: the old town rises above the Rhône, the Nations quarter sits northwest of Cornavin, and Carouge has its own street scale south of the center. Start with the lake to get your bearings, then protect half-days for districts that match your interests. Two nights cover the civic center and one other area; a third night makes room for a timed institutional visit, a museum or a slower lakeshore day. Confirm openings, access and service for your dates.',
    stay: 'Plan two nights for a first visit; choose three if you want both the Nations quarter and Carouge or a museum-heavy day. Cornavin is practical for airport and intercity rail, with trams and buses in several directions. Rive/Eaux-Vives suits a lakefront or old-town evening and Mouettes access; the old town is atmospheric but hilly and less convenient with luggage. Carouge suits a neighborhood stay if you are happy to ride into the center. Compare station walks, late-evening routes and cancellation terms. Ask whether your lodging qualifies for Geneva’s transport card; eligibility and duration depend on the property, so confirm before counting on it.',
    transfer: 'For arrival, use the airport rail link to Genève-Cornavin, then walk or take a current city tram to your hotel; check SBB on your travel date. For Nations, TPG tram 15 runs through Cornavin toward Nations; bus 5 also serves the corridor, but the UN visitor entrance is at Pregny Gate, so follow its current walking and security directions. For Carouge, tram 12 has named stops including Carouge-Rondeau, Carouge-Marché and Carouge-Armes, plus central stops such as Plainpalais, Bel-Air, Molard and Rive. Walk the lakefront or use Mouettes boats when operating. These are route relationships, not promised departures, travel times or fares: check live TPG/SBB service, works and exact-date timetables.',
    season: 'Late spring through early autumn gives longer daylight for the lake promenades and Arve; exposed quays can be windy and boat or fountain operation may change with conditions. Winter still works for the old town, museums and a pre-booked indoor visit, but shorten the waterfront loop and verify seasonal hours. UN tours are reservation-led and availability can change with security or renovation; cathedral and cultural-site hours also vary. Book after checking the official calendar and keep an unbooked neighborhood or museum alternative for closure, rain or a full tour calendar.',
    fallback: 'In rain, keep the walk to covered old-town lanes and a confirmed cathedral or museum visit, then use a tram for the exposed lake or Nations leg. If the UN tour is unavailable, do not assume gate access: choose the Ariana Museum or another open cultural stop if it fits your interests, otherwise stay central. If lake boats or the Jet d’Eau are not operating, the shoreline and Rhône crossings still orient the city. Recheck same-day service and access notices before changing districts.',
    faq: [
      ['How many nights should I book in Geneva?', 'Two nights cover the old town plus one half-day district. Three are more comfortable if you want both Carouge and Nations, or a museum day without compressing the lake walk.'],
      ['Can I count on the Geneva transport card?', 'Only after your accommodation confirms eligibility and explains how to obtain the digital card. Check current coverage with Geneva Tourism; do not assume every short-term rental qualifies.'],
      ['Can I visit the United Nations without booking?', 'Treat a guided Palais des Nations visit as reservation-only. Check the official page for dates released, identity documents, arrival buffer and temporary restrictions; no slot is guaranteed.']
    ],
    sources: [['https://www.geneve.com/en/', 'Geneva Tourism'], ['https://www.geneve.com/en/plan-stay/getting-around/free-geneva-transport-card', 'Geneva transport card eligibility'], ['https://www.tpg.ch/en/lignes', 'TPG line directory and timetable lookup'], ['https://www.tpg.ch/en/travel/plan-journey/maps', 'TPG network maps'], ['https://www.sbb.ch/en', 'SBB rail planning'], ['https://www.ungeneva.org/en/visit', 'United Nations Geneva visitor access'], ['https://www.cathedrale-geneve.ch/en/practical-info/', 'St Pierre Cathedral practical information']],
    guides: [
      g({slug:'old-town-lakefront',name:'Geneva Old Town & Lakefront',instrument:'lake-to-hill civic axis',layout:'civic-axis',imageQuery:'Geneva lakefront civic route schematic',imageAlt:'Original route diagram linking Geneva lakefront, Rhône crossings and Old Town; conceptual and not to scale',imageTitle:'Geneva lakefront and Old Town route choices',summary:'Walk the central lake edge, cross the Rhône once, climb through Bourg-de-Four to St Pierre Cathedral and finish down the Treille side. This is a geographic introduction with an uphill section, not a promise that the Jet d’Eau or every interior is open.',access:'From Genève-Cornavin, walk toward the lake via Rue du Mont-Blanc and cross the Rhône at Pont du Mont-Blanc; alternatively ride a current TPG service to a central stop and begin at Jardin Anglais. Follow signed streets uphill through Bourg-de-Four to the cathedral and Promenade de la Treille, then descend toward Rive or the lake. St Pierre hours vary by season, its tower closes before the cathedral, and guided visits require advance reservation; confirm date-specific access.',tradeoff:'This four-to-five-hour walk explains the lake basin, river and historic hill with little ticket dependence. It includes cobbles and one steady climb, so use transit for the approach or return if mobility, heat or luggage makes the slope uncomfortable. Leave Nations and Carouge for separate half-days.',fallback:'For rain or wind, make the lakefront a short orientation, spend the main block in old-town lanes and a confirmed indoor visit, then take a tram back to Cornavin. If the tower is closed, the public squares and Treille still make a complete route; do not wait for a seasonal opening.',duration:'Allow four to five hours including a café stop; reserve another two or three hours if a museum is the main purpose. Add time for the cathedral interior or tower only after checking seasonal hours and booking rules.',combine:'Use this on arrival day or pair it with a relaxed Eaux-Vives dinner. Do not add Nations on the same half-day: tram 15/bus 5 and security entry create a separate fixed block.',verify:'Check Geneva Tourism for waterfront notices, St Pierre’s current hours/reservations, and TPG/SBB for the return connection. Fares and departures change; no live timetable or price is guaranteed here.',choices:[['Lake first','Cornavin → Pont du Mont-Blanc → Jardin Anglais → Old Town; best for arrival orientation.'],['Old Town first','Start at Rive, visit Bourg-de-Four and St Pierre, then descend to the lake; useful in hot afternoons.'],['Indoor-led','Keep one short Rhône/lake segment, then use a confirmed cathedral or museum visit; strongest for rain or winter.']],stages:[['Cornavin to Pont du Mont-Blanc','Walk through the station approaches to the bridge, then use the harbor and lake edge for orientation; if tired, check current central tram service.'],['Lake edge to Rhône crossing','Follow Jardin Anglais and the lower riverfront, cross once toward the old city and avoid doubling back through shopping streets.'],['Bourg-de-Four to St Pierre','Use public lanes and squares, checking cathedral/tower access separately before making it a timed anchor.'],['Treille down to Rive','Walk the terrace and lower streets to Rive or the waterfront; take a current tram for the hotel leg if needed.']],watch:[['Jet d’Eau status','Wind, maintenance and operating decisions can affect the fountain. Treat it as a view when available, not a scheduled event.'],['Seasonal interiors','Cathedral and tower hours differ; guided tours need reservation. Keep an outdoor civic route ready if access changes.'],['Slope and cobbles','The route is short on a map but includes uphill streets and uneven paving. Choose the Rive start or transit return when it suits your pace.']],faq:[['Is the Jet d’Eau guaranteed to run?','No. Check current notices close to the visit and enjoy the lake route even if the fountain is off.'],['Should I prebook St Pierre?','Check the cathedral’s current opening and reservation details. Guided visits require booking and seasonal hours differ.'],['Can I do Nations afterward?','Only with a separate half-day and, for a UN tour, a confirmed slot. Tram 15 or bus 5 serves Nations, but entry has its own security process.']]}),
      g({slug:'international-quarter',name:'International Geneva & Nations Quarter',instrument:'institution access docket',layout:'access-docket',imageQuery:'Palais des Nations Geneva international district',imageAlt:'Palais des Nations and flags along the international district avenue',summary:'Build a half-day around a confirmed Palais des Nations tour, then walk the public park and museum area. The visit is controlled access with identity screening, so include an exterior-only fallback.',access:'From Cornavin, TPG tram 15 runs toward Nations; bus 5 is another named connection. Follow the UN visitor page to Pregny Gate and allow its current security arrival margin. As checked 12 October 2026, individual tours were limited during renovation and next-month dates were released on the 20th each month; this can change, and no slot is guaranteed. Bring a valid passport or Schengen identity card as currently instructed. Do not treat the visitor entrance as a walk-in stop.',tradeoff:'A guided visit gives institutional context and makes the district distinct from central Geneva. Booking and screening constrain flexibility; if dates do not fit or the UN is not your interest, an Ariana Museum and park walk is a better use of the transfer than waiting at a gate.',fallback:'If tours are full, closed or disrupted by an official event, choose the Ariana Museum if its current hours suit, walk public paths around Ariana Park and Place des Nations, then take tram 15 or bus 5 back. In rain, shorten the park loop and substitute a confirmed indoor museum visit; do not assume the Palais itself is open.',duration:'Allow at least half a day from Cornavin for transit, a confirmed tour, security, the Ariana/park area and the return. Keep onward trains and flights well clear because screening or a temporary closure can shift the schedule.',combine:'Pair with a Cornavin-area museum or a quiet hotel-area evening. Keep Old Town for another half-day and do not place a timed tour immediately before an airport departure.',verify:'Read UN Geneva’s visitor page on booking and again before travel for release dates, renovation limits, accepted ID, prohibited items and entrance. Confirm tram 15/bus 5 via TPG for the exact date; roadworks or diplomatic events may alter access.',choices:[['Confirmed UN tour','Anchor the day to a booked slot, current ID instructions and stated security buffer; strongest for institutional interest.'],['Ariana and parks','Use the museum and public green space without depending on a Palais tour; verify opening before riding out.'],['Short public-space loop','Walk Place des Nations and accessible park paths, then return; choose this only if the district interests you independently.']],stages:[['Cornavin to Nations','Take the current tram 15 or bus 5 from the station area; check exact stops and live works rather than copying an old departure time.'],['Nations stop to Pregny Gate','Follow UN visitor directions and security signs. Arrive with the official buffer and requested identity document.'],['Ariana Park and museum area','After the visit, use public paths and the museum only if open and independently interesting; respect barriers and event closures.'],['Return to Cornavin','Use current tram 15/bus 5 service and leave margin before onward rail. Skip an extra lake walk if the visit runs late.']],watch:[['Monthly tour release','On 12 October 2026, next-month dates were released on the 20th; recheck the live visitor page because renovation and booking rules can change.'],['Security and identity','A reservation does not remove screening. Follow current document and arrival instructions; access is not guaranteed.'],['Event or road closures','Diplomatic activity and roadworks can change public access and bus approaches. Keep Ariana or a central museum as a flexible alternative.']],faq:[['Can I walk in for a Palais tour?','Plan on a reservation. Check current dates and security requirements; never assume a same-day place.'],['What ID should I bring?','Follow the current UN Geneva instruction. The page checked 12 October 2026 requested a valid passport or Schengen identity card; verify again before travel.'],['What if the tour is unavailable?','Visit Ariana Museum or public park spaces if open and suitable, or return to the center. Nearby streets do not open restricted compounds.']]}),
      g({slug:'carouge-arve',name:'Carouge, Plainpalais & the Arve',instrument:'neighborhood tram notebook',layout:'tram-notebook',imageQuery:'Carouge Geneva neighborhood street',imageAlt:'A Carouge neighborhood street with compact historic buildings',summary:'Use tram 12 as the district spine: ride to Carouge-Rondeau, walk the central squares and side streets, then connect north through Plainpalais or return toward Rive. Treat the Arve as an optional signed-path extension.',access:'From central Geneva, ride TPG tram 12 toward Carouge and choose a stop such as Rondeau, Marché or Armes according to your walk direction; verify the line map and stop pattern on your date. A compact loop links Place du Marché, Rue Saint-Joseph and Place du Temple before an optional walk toward Plainpalais. Continue only on signed public Arve paths, then use tram 12 from a current central stop or ride back from Carouge. This is a neighborhood walk, not a river-swimming recommendation.',tradeoff:'Three to four hours gives Carouge’s human-scale streets, cafés and squares without chasing a monument list. The tram-led route keeps transfers efficient, but market activity, independent shops and opening days vary; travelers who want major collections should spend the block in a museum instead.',fallback:'In rain or after a wet-weather river warning, skip the Arve edge and keep to Carouge’s compact streets, a café and any confirmed indoor cultural stop. If Plainpalais market is not operating, the district still works but should not be planned as a stall visit. Return by tram 12 rather than improvising a long wet walk to the lake.',duration:'Allow three to four hours for Carouge’s central streets and a meal. Add another hour only for the Plainpalais connector or a verified market visit; preserve time for the tram return and any dinner booking.',combine:'Pair with Old Town on a separate half-day and let the tram ride connect the two chapters. Avoid Nations on the same afternoon because that adds another transfer and the institutional visit needs its own booking buffer.',verify:'Check TPG line 12 stops/timetable and Geneva Tourism or the market organizer for exact operating days and hours. Check path notices before the Arve extension and reserve directly if a specific dinner matters; no current hours, fares or interval is guaranteed here.',choices:[['Carouge streets','Ride to Rondeau and walk the central squares and Rue Saint-Joseph; best for neighborhood architecture and cafés.'],['Market-dependent','Add Plainpalais only after confirming a market is scheduled on your date.'],['Arve extension','Continue by signed riverside paths in dry, open conditions; turn back at any closure or high water.']],stages:[['Rive to Carouge','Use tram 12 from a verified central stop such as Rive toward Carouge; choose Rondeau, Marché or Armes from today’s line map.'],['Walk the central Carouge grid','Link Place du Marché, Rue Saint-Joseph and Place du Temple at an easy pace; choose a few lanes instead of every parallel street.'],['Carouge to Plainpalais','Extend north on foot only if weather, market timing and energy support it; otherwise stay in the district and save the river walk.'],['Plainpalais or Carouge back to Rive','Return on tram 12 from a current stop and check service changes before dinner. Do not rely on an unverified last departure.']],watch:[['Market day is not assumed','Verify date and market format with an official local listing; do not plan around stalls that may not be there.'],['River and weather','The Arve path is optional. High water, construction, wet paving or closures make the neighborhood-only loop sensible.'],['Independent opening hours','Small shops and cafés vary by day and season. Confirm one named booking directly if it matters.']],faq:[['Does tram 12 stop at every Carouge stop?','Stop patterns and works can change. Use the live TPG line 12 map and timetable, then choose a stop served that day.'],['Which day has the Plainpalais market?','Check Geneva Tourism or the current market organizer listing for your travel date; schedules and formats can change.'],['Is the Arve path good in wet weather?','Keep it optional. Use signed paths only when open and conditions are suitable; in rain or high water, stay in Carouge and return by tram.']]})
    ]
  }),

  c({
    slug: 'lausanne-lavaux', name: 'Lausanne & Lavaux', region: 'Vaud', band: 'lakes', family: 'vineyard-terrace',
    label: 'Hillside city · vineyard coast', tagline: 'Give Lausanne its own night and Lavaux its own daylight: use M2 for the city’s elevation, then let one signed vineyard path set the day’s walking limit.',
    hubIntro: 'Lausanne works as a two-level city day: the old center sits above the station, while Ouchy opens onto the lake below. East of town, Lavaux is a working terraced landscape reached by regional train. A useful stay protects one complete Lausanne route and one selected vineyard section instead of treating every lake village as a stop on the same walk.',
    stay: 'Plan two nights in Lausanne for the old center, Ouchy and a half-day in Lavaux. Three nights leave room for the Olympic Museum or a full vineyard walk without compressing both into one day. For an easy first base, stay near Lausanne-Gare or Lausanne-Flon for M2 and rail links; choose Ouchy for a quieter waterfront evening and accept the uphill M2 ride. Consider Cully only when an early Lavaux start or a confirmed local stay matters more than Lausanne’s late connections.',
    transfer: 'In town, use Métro M2 between Lausanne-Gare, Lausanne-Flon or Riponne-Maurice Béjart and Ouchy-Olympique; walk only one direction across the steep center. For Lavaux, take an SBB regional train from Lausanne to Cully, then follow signed paths through Epesses toward Rivaz only if your legs, daylight and return train allow. The CGN pier at Ouchy is a separate option: compare its live N1 Lausanne–Évian or N2 Lausanne–Thonon sailing with the onward and return plan before buying.',
    season: 'Longer spring-to-autumn daylight gives more room for terrace walking, but open vineyard slopes can be hot, exposed or slippery after rain. Harvest work and cellar availability vary by producer and date; ask before entering a tasting room, and stay on public marked paths around working rows. In winter, shorten the walk around daylight and the current trail condition. Lausanne’s indoor museums and M2-linked districts remain the lower-weather plan.',
    fallback: 'If rain, heat, a trail notice or a missed train makes the terraces a poor bet, keep the visit to Cully’s village and lakeshore, return by rail, and use the saved block for Lausanne’s cathedral quarter or the Olympic Museum. Skip the boat when its departure, return or border-crossing requirements do not fit. Do not trade a safe return for one more vineyard viewpoint.',
    reviewDate: '12 October 2026', isoDate: '2026-10-12',
    sources: [
      ['https://www.lausanne-tourisme.ch/en/public-transportation/', 'Lausanne Tourisme — public transport and Lausanne Transport Card'],
      ['https://www.lausanne-tourisme.ch/en/explore/ouchy/', 'Lausanne Tourisme — Ouchy lakeshore'],
      ['https://www.montreuxriviera.com/en/G515/hikes-and-walks-at-lavaux', 'Montreux Riviera — official Lavaux walks and route grades'],
      ['https://whc.unesco.org/en/list/1243/', 'UNESCO — Lavaux Vineyard Terraces'],
      ['https://www.sbb.ch/en', 'SBB — exact-date rail connections'],
      ['https://www.t-l.ch/en/', 'Transports publics de la région lausannoise — TL'],
      ['https://www.cgn.ch/en/horaires-billets', 'CGN — date-specific lake timetables and tickets'],
      ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss — forecast and warnings']
    ],
    faq: [
      ['How many nights should I stay in Lausanne?', 'Two nights give you one complete city day and a half-day Lavaux visit. Choose three nights if you want a separate museum day, a longer signed vineyard walk or a slower lakeshore evening. Lausanne-Gare and Lausanne-Flon favor rail and M2; Ouchy trades a waterfront base for an uphill metro ride.'],
      ['Can I walk all of Lavaux from Lausanne?', 'The UNESCO landscape stretches along the lake, but a full-length walk is not a sensible default for a short stay. Take a regional train to a chosen village such as Cully, follow one official signed section, and decide the return station before leaving the rail corridor.'],
      ['What if the Lavaux path or lake service does not fit?', 'Use trains between villages, keep a short lakeshore stop, and return to Lausanne for the cathedral district or a checked museum opening. Confirm the exact SBB or CGN date and weather; no fare, departure interval or service is guaranteed by this guide.']
    ],
    guides: [
      g({
        slug: 'old-city-ouchy', name: 'Lausanne Old City & Ouchy', instrument: 'vertical metro section', layout: 'vertical-section', imageQuery: 'Lausanne old city Ouchy Lake Geneva Switzerland', imageAlt: 'Lake Geneva at Lausanne’s Ouchy waterfront, with a small boat near the shore',
        summary: 'Connect Place de la Palud and Lausanne Cathedral to the lower Ouchy quay in one direction: use M2 for the steep transfer and spend your walking energy on the old lanes or lakeside, not a repeated climb.',
        access: 'Start at Lausanne-Gare and ride Métro M2 uphill to Riponne-Maurice Béjart. Walk to Place de la Palud, then climb the Escaliers du Marché to Lausanne Cathedral; Lausanne Tourisme notes 150 steps from the square. Return through Lausanne-Flon and take M2 downhill to Ouchy-Olympique. Reverse the order if you want the lake first. The M2 saves the major vertical change; it does not make every old-town lane level or step-free.',
        tradeoff: 'This is the clearest first-day route for reading Lausanne’s slope: market square, cathedral hill, station interchange and lakefront. It gives up a long museum visit and several neighborhood detours. Pick one interior stop only if its current opening time still leaves a real block for the walk.',
        fallback: 'In rain or strong heat, shorten the cathedral lanes and use M2 between Riponne-Maurice Béjart and Ouchy-Olympique. Keep the walk around the covered market streets or the Olympic Museum only after checking its date-specific hours; omit the exposed quay if wind or rain makes it unpleasant.',
        duration: 'Allow four to five hours including a meal and the walk down through the old center. Add a separate museum block for a longer day; do not count the train ride as a promise about current interval or transfer time.',
        combine: 'Pair the old center with Ouchy in one direction, then keep Lavaux for another half day. Add the Olympic Museum only if you are happy to give the cathedral quarter a shorter visit. Montreux is a separate rail day, not a casual extension.',
        verify: 'Check TL’s live M2 status and the Lausanne Transport Card conditions for your lodging. The official 2026 Lausanne Tourisme listing shows the Olympic Museum open Tuesday–Sunday, 09:00–18:00, with Monday closures except holidays or special events; check the current calendar again before going.',
        choices: [
          ['Upper city to lake','Start at Riponne-Maurice Béjart, visit Place de la Palud and the cathedral, then ride M2 from Lausanne-Flon to Ouchy-Olympique. This minimizes uphill walking.'],
          ['Lake to old center','Begin at Ouchy-Olympique for the quay and Château d’Ouchy, then ride M2 to Riponne for the cathedral hill. Best when the lake is your first light or photo stop.'],
          ['Short historic loop','Stay around Place de la Palud, Escaliers du Marché and the cathedral, then return from Riponne by M2. Choose this when rain, mobility or a train connection limits the day.']
        ],
        stages: [
          ['Lausanne-Gare to Riponne','Board Métro M2 toward Croisettes and leave at Riponne-Maurice Béjart. Check the live line notice and station access before setting out.'],
          ['Place de la Palud to the cathedral','Walk to the historic square and follow the Escaliers du Marché up to Lausanne Cathedral. Keep the 150-step climb in view; pause or skip the interior if stairs are not right for you.'],
          ['Flon to Ouchy-Olympique','Return through the upper center to Lausanne-Flon, take M2 downhill, then follow the signed pedestrian route from Ouchy-Olympique toward the port and quays.'],
          ['Finish by the lake, return by M2','Walk a chosen section of Ouchy’s tree-lined waterfront toward the landing stage or Olympic Park. Use M2 back uphill when ready; confirm the last connection for your actual date rather than assuming one.']
        ],
        watch: [
          ['The stairs are part of the route','The 150 steps from Place de la Palud to the cathedral can be tiring. Use the M2 for elevation and shorten the uphill section when needed.'],
          ['Station works change the approach','Construction around Lausanne station can change pedestrian access. Follow current on-site signs and the TL station notice instead of relying on an old exit.'],
          ['A promenade is not a beach day','Ouchy’s quays are shared by pedestrians and other users. Stay on marked public paths and treat swimming or seasonal facilities as separate, date-specific choices.']
        ],
        faq: [
          ['Which M2 stop is best for the old city?','Riponne-Maurice Béjart is a useful start for Place de la Palud and the cathedral. The exact walk includes uphill lanes and stairs; check current station access and choose another approach if needed.'],
          ['Can I see Ouchy and the old town without climbing twice?','Yes. Walk the upper section once, use M2 between Lausanne-Flon and Ouchy-Olympique, and finish at the lake. Reverse the direction if your hotel or train departure makes that easier.'],
          ['Is the Olympic Museum open every day?','Lausanne Tourisme’s 2026 listing shows Tuesday–Sunday, 09:00–18:00, and Monday closure except holidays or special events. Hours and special closures can change, so confirm on the museum’s official page for your date.']
        ],
        sources: [
          ['https://www.lausanne-tourisme.ch/en/public-transportation/', 'Lausanne Tourisme — public transport and M2'],
          ['https://www.lausanne-tourisme.ch/en/explore/ouchy/', 'Lausanne Tourisme — Ouchy promenade'],
          ['https://www.lausanne-tourisme.ch/en/explore/the-olympic-museum/', 'Lausanne Tourisme — Olympic Museum hours and access'],
          ['https://www.t-l.ch/en/', 'TL — metro and service notices']
        ]
      }),
      g({
        slug: 'lavaux-terraces', name: 'Lavaux Vineyard Terraces', instrument: 'rail-stop terrace ladder', layout: 'terrace-ladder', imageQuery: 'Lavaux vineyards Lake Geneva Switzerland', imageAlt: 'Lavaux vineyard terraces above Lake Geneva',
        summary: 'Use the signed Cully–Epesses–Rivaz path as one half-day walk, with a return train station chosen before you enter the vineyard slopes. The official route listing calls it easy, but the exposed terraces still need weather and footing checks.',
        access: 'From Lausanne-Gare, take an SBB regional train to Cully and start the official Cully–Epesses–Rivaz walk there. Montreux Riviera currently lists the route as 5.6 km, about 1 hour 30 minutes and 120 m of ascent; treat those as published planning figures, not a personal pace guarantee. The route names its finish at Rivaz. Check SBB from Rivaz for your return, and use the official trail map rather than cutting through vineyard rows.',
        tradeoff: 'The walk gives you the working terraces, village edges and lake-facing slopes in one coherent section. It is not a winery tour and does not include a tasting booking. A tasting or long lunch adds time and must be confirmed directly with the producer before you commit to a return train.',
        fallback: 'After rain, in high heat or when an official path notice affects the section, do not force the full walk. Stay around Cully’s public village and lake edge, use regional trains for a short village-to-village view, and return from the station that fits the live timetable. Avoid stepping into cultivated rows to shorten a climb.',
        duration: 'Plan a half day from Lausanne: include both train legs, the officially listed 5.6 km walk (published at roughly 1 hour 30 minutes), pauses and a return buffer. Set aside a longer block for a meal or confirmed cellar visit; do not anchor it to an unverified opening time.',
        combine: 'Pair the walk with a Lausanne evening only when the return train leaves enough time to reach your lodging and eat without rushing. Do not add Ouchy’s museum or a Montreux visit to the same half day. A full Lavaux day should have one booked tasting or a longer walk as its main reason.',
        verify: 'Before leaving, confirm Lausanne–Cully and Rivaz–Lausanne in SBB for the date, read the Montreux Riviera route note and local trail notice, and check MeteoSwiss for sun, rain and warnings. Reserve a cellar visit directly when it matters; the route page does not promise producer hours or a walkable tasting slot.',
        choices: [
          ['Full signed section','Walk Cully → Epesses → Rivaz on the official 5.6 km route, then leave from Rivaz only after checking the return train. Best for a dry half day with steady footing.'],
          ['Short village walk','Start at Cully and walk only the signed section you can comfortably reverse or finish at a checked station. Turn back before heat, steep steps or a missed connection becomes the day’s main story.'],
          ['Rail and village day','Use SBB between Cully, Epesses and Rivaz, choose one public village or lakeside pause, and skip the slope walk. This keeps Lavaux in the itinerary when footing or mobility is uncertain.']
        ],
        stages: [
          ['Lausanne-Gare to Cully','Take an SBB regional train to Cully. Check the exact date, platform and return options before leaving Lausanne; the day should not depend on an assumed interval.'],
          ['Follow the public Cully trail','From Cully, follow the official signed Lavaux path toward Epesses. Keep to marked routes and public lanes; the vineyard is working agricultural land, not an open shortcut network.'],
          ['Choose Epesses or continue to Rivaz','At Epesses, reassess weather, legs and daylight. Continue on the signed path toward Rivaz only if the footing and time still work; the published full section is 5.6 km with 120 m ascent.'],
          ['Rivaz station back to Lausanne','Finish at Rivaz and take a confirmed regional train toward Lausanne. If that service does not fit, use the nearest station shown in the live planner; do not walk an unplanned steep climb to chase a departure.']
        ],
        watch: [
          ['Agriculture is active here','Lavaux is a UNESCO cultural landscape and a working vineyard. Stay on signed public paths, close gates where marked and leave vines, equipment and work areas alone.'],
          ['Published time is not your pace','The tourism listing gives 1 hour 30 minutes for the 5.6 km route. Steps, photo stops, mud, harvest activity and fitness can change that; preserve the train return buffer.'],
          ['Sun and wet stone','The south-facing slopes can feel exposed, while wet stone steps can be slippery. Bring water, check the forecast and switch to rail if conditions are poor.']
        ],
        faq: [
          ['How long is the official Cully–Epesses–Rivaz walk?','Montreux Riviera lists it at 5.6 km, 1 hour 30 minutes and 120 m ascent, graded easy. Those are route-publisher figures, not a guarantee of your pace or current trail condition.'],
          ['Which train station should I use for the return?','The listed walk finishes at Rivaz. Check SBB for a Rivaz-to-Lausanne connection on your exact date before starting, then keep Epesses or Cully as a fallback only if the live map and your position make that safe.'],
          ['Do I need to book a wine tasting?','The walk itself is a public-path itinerary, not a tasting reservation. Contact a named producer directly and confirm the date, time and arrival route before adding a cellar visit; availability is not guaranteed here.']
        ],
        sources: [
          ['https://www.montreuxriviera.com/en/G515/hikes-and-walks-at-lavaux', 'Montreux Riviera — Cully–Epesses–Rivaz official route'],
          ['https://whc.unesco.org/en/list/1243/', 'UNESCO — Lavaux cultural landscape'],
          ['https://www.sbb.ch/en', 'SBB — Lausanne, Cully and Rivaz rail planning'],
          ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss — forecast and warnings']
        ]
      }),
      g({
        slug: 'olympic-lake-cruise', name: 'Olympic Museum & Lake Geneva Day', instrument: 'museum-to-pier timecard', layout: 'timecard', imageQuery: 'Ouchy Lake Geneva Lausanne Switzerland', imageAlt: 'Ouchy waterfront on Lake Geneva in Lausanne',
        summary: 'Use Métro M2 to Ouchy-Olympique for the Olympic Museum, port and lakeside quays. A CGN boat is an optional second leg only when its named route, border documents and dated return fit the museum hours.',
        access: 'Take Métro M2 to Ouchy-Olympique and walk along the signed waterfront to the Olympic Museum at Quai d’Ouchy 1, then continue toward the port and CGN landing stage. Lausanne Tourisme’s current 2026 listing shows the museum Tuesday–Sunday, 09:00–18:00, closed Mondays except holidays or special events. CGN lists N1 Lausanne–Évian and N2 Lausanne–Thonon; check the date-specific sailing, ticket rules and return before treating either as a cruise.',
        tradeoff: 'The lower-city plan is gentler than the cathedral hill and gives the museum a full, unhurried visit. It gives up the medieval center. A boat to Évian or Thonon is a cross-lake journey with a separate return and border crossing, not a short loop that can be assumed to fit between museum stops.',
        fallback: 'If no CGN sailing fits, keep the museum and Ouchy waterfront as the complete plan, then ride M2 uphill for a café or short old-city stop. In wind, low visibility or rain, spend longer indoors and shorten the exposed quays. If the museum is closed on your date, reverse the order around a confirmed alternative indoor venue rather than arriving at the door.',
        duration: 'Allow three to four hours for the museum and an Ouchy lakeshore walk, plus meal time. Add a boat only as a substantial half-day or separate day: include boarding, time ashore and the confirmed return. The current timetable and crossing length vary by date and service.',
        combine: 'Combine the museum and waterfront on the same day. Add Lausanne’s old center only for a short evening after returning by M2. Keep Lavaux as another half day, and do not buy a lake crossing before deciding whether you can return from Évian or Thonon on the same ticket and schedule.',
        verify: 'Check the Olympic Museum’s own opening and admission page for your date, TL M2 status, and CGN’s dated N1/N2 timetable and fare rules. For an international crossing, confirm required travel documents and the return sailing with the operator and relevant authorities. No boat, price or departure is guaranteed here.',
        choices: [
          ['Museum and quay','Ride M2 to Ouchy-Olympique, visit the museum, then walk the lakeside quays toward the port. The best default when you want a complete day without a boat dependency.'],
          ['Museum plus a CGN crossing','Select N1 to Évian or N2 to Thonon only after checking time ashore, return sailing, documents and the museum’s hours. Book the cross-lake transport directly when the schedule makes the day work.'],
          ['Rain-first plan','Start at the museum during its confirmed opening window, then keep only a short waterfront loop. Return by M2 rather than stretching an exposed walk in poor weather.']
        ],
        stages: [
          ['Lausanne-Gare to Ouchy-Olympique','Board Métro M2 downhill to Ouchy-Olympique. Check TL notices, the museum’s current opening and whether any temporary access change affects the waterfront approach.'],
          ['Quai d’Ouchy 1: the Olympic Museum','Walk to the museum and give the collection a protected block. The 2026 Lausanne Tourisme listing shows Tuesday–Sunday, 09:00–18:00; Monday is closed except listed exceptions. Recheck before booking or travelling.'],
          ['Museum to port and landing stage','After the museum, follow public paths along Ouchy’s quays to the port. If considering a boat, compare CGN N1 Lausanne–Évian or N2 Lausanne–Thonon with the actual same-day return and time ashore.'],
          ['Return to Lausanne by the confirmed mode','If sailing, follow the return plan and document requirements confirmed with CGN. Otherwise, walk back to Ouchy-Olympique and take M2 uphill. Leave a buffer for the last metro and do not infer a departure from a typical timetable.']
        ],
        watch: [
          ['The 2026 museum listing is date-bounded','Current tourism information lists 09:00–18:00 Tuesday–Sunday and Monday closure with exceptions. Holidays, special events and later dates need a fresh check with the museum.'],
          ['A cross-lake trip needs a return','CGN N1 and N2 connect Lausanne with Évian and Thonon. Check the full out-and-back plan, fare conditions and required travel documents; a convenient outbound does not prove a convenient return.'],
          ['Lake weather changes the value','Wind, visibility and rain affect the exposed quay and boat experience. Keep the museum as the anchor and drop the sailing when conditions or notices make it a poor fit.']
        ],
        faq: [
          ['What are the Olympic Museum’s current opening hours?','Lausanne Tourisme’s 2026 listing shows Tuesday–Sunday, 09:00–18:00, closed Monday except public holidays or special events. Confirm the museum’s own calendar for the exact date, especially around holiday closures.'],
          ['Which CGN routes leave Lausanne for France?','The CGN timetable lists N1 Lausanne–Évian and N2 Lausanne–Thonon. These are cross-lake routes, not guaranteed sightseeing loops. Check the date-specific return, time ashore, ticket rules and travel documents directly with the operator.'],
          ['Can I skip the boat and still have a full day?','Yes. The Olympic Museum, port and Ouchy quays make a complete lower-Lausanne day. Ride M2 back uphill when you are ready instead of choosing a boat just to fill the itinerary.']
        ],
        sources: [
          ['https://www.lausanne-tourisme.ch/en/explore/the-olympic-museum/', 'Lausanne Tourisme — Olympic Museum hours and address'],
          ['https://olympics.com/museum/en/', 'The Olympic Museum — official visitor information'],
          ['https://www.lausanne-tourisme.ch/en/explore/ouchy/', 'Lausanne Tourisme — Ouchy and quays'],
          ['https://www.cgn.ch/en/horaires-billets', 'CGN — N1 and N2 dated timetables and fares'],
          ['https://www.t-l.ch/en/', 'TL — M2 service information']
        ]
      })
    ]
  }),

  switzerlandMontreuxCluster,

  c({
    slug: 'interlaken-lakes', name: 'Interlaken, Thun & Brienz', region: 'Bernese Oberland gateway', band: 'alps', family: 'two-lake-switchboard',
    label: 'Two lakes · one rail gateway', tagline: 'Use Interlaken as the transfer hinge, then give each day one job: a Brienz-side boat or waterfall, a Thun-side town walk, or a weather-gated mountain view.',
    hubIntro: 'Interlaken links Lake Thun, Lake Brienz and the Jungfrau valley railways, but the two lakes are separate day shapes. Choose one shore as the main anchor, use rail when it protects time, and keep Harder Kulm as a visibility-led extra. This hub compares the Interlaken base walk, the Brienz–Giessbach branch and the Thun–Spiez branch so a short stay does not become a list of rushed piers.',
    stay: 'Two nights suit one lake branch plus a compact town orientation. Three nights let you give both shores a day and move one for weather. Four nights make room for a separate Jungfrau or Harder Kulm window without forcing it onto a lake day. Stay near Interlaken Ost for the Zentralbahn to Brienz, Jungfrau departures and the Harderbahn valley station; choose West for the BLS pier, Thun-side trains and a central evening walk. Base in Thun or Brienz only when most nights and plans stay on that shore; moving hotels adds luggage and check-in time.',
    transfer: 'Use SBB for the Interlaken–Thun–Spiez rail corridor and Zentralbahn for Interlaken Ost–Brienz. BLS boats are the scenic, slower connection: the Lake Thun and Lake Brienz timetables are separate, and a sailing is useful only when both the chosen landing and return fit. Interlaken West is next to its Thun-lake landing; at Spiez the pier is about a 15-minute walk from the station. Interlaken Ost is the rail gateway for Brienz and the short walk to Harderbahn. Search the exact date and named station or pier in SBB and the operator timetable.',
    season: 'Lake Thun navigation has year-round service, while Lake Brienz boat dates and frequency are seasonal; the 2026 BLS page lists 3 April–6 December, which is not a promise for later seasons. Giessbach’s own arrival page describes its funicular and boat connection as seasonal (April–October), so verify the exact landing and funicular separately. Harder Kulm is also seasonal and visibility-dependent. Check current weather, operator notices, trail access and any date-specific ticket or reservation condition before paying or leaving the valley.',
    fallback: 'If high cloud hides the peaks, move the day to Thun’s old town or a Brienz rail-and-lakeside loop. If a boat, Giessbach funicular or Harderbahn is not operating, use the named train route rather than waiting at a pier. Rain can shorten the exposed shore walk: keep one compact town centre, a checked indoor visit or the hotel-area reset, and leave enough time for the last useful return.',
    reviewDate: '12 October 2026', isoDate: '2026-10-12',
    sources: [
      ['https://www.interlaken.ch/en/map', 'Interlaken Tourism regional map'],
      ['https://www.bls.ch/en/freizeit-und-ferien/ausfluege/schifffahrt-thunersee-brienzersee', 'BLS Lake Thun & Lake Brienz navigation'],
      ['https://www.sbb.ch/en', 'SBB date-specific rail planning'],
      ['https://www.zentralbahn.ch/en', 'Zentralbahn route and timetable'],
      ['https://www.jungfrau.ch/en-gb/harder-kulm/', 'Jungfrau Railways: Harder Kulm'],
      ['https://giessbach.ch/en/kontakt-anreise', 'Giessbach: arrival and seasonal access'],
      ['https://www.meteoswiss.admin.ch/', 'MeteoSwiss mountain weather']
    ],
    faq: [
      ['How many nights should I stay in Interlaken?', 'Two nights work for one carefully chosen lake day and a short base walk. Three nights allow both lake branches with a weather move. Choose four only when you also want a separate mountain or Jungfrau day and can use the flexibility.'],
      ['Should I stay near Interlaken Ost or West?', 'Ost simplifies Brienz, Jungfrau-region trains and Harder Kulm; West is convenient for the Lake Thun pier, trains toward Thun and a central evening walk. Check the exact hotel-to-station and luggage route, not only the district name.'],
      ['What if a boat or mountain connection is closed?', 'Check the exact-date operator status before leaving, then swap to the rail-supported town or shore plan: Zentralbahn to Brienz, SBB to Thun or Spiez, or the Interlaken walk. Boat, lift, trail and reservation status can change; no future timetable is guaranteed here.']
    ],
    guides: [
      g({
        slug:'interlaken-base',name:'Interlaken Base & Harder Kulm',instrument:'gateway switchboard',layout:'switchboard',imageQuery:'Interlaken Harder Kulm Switzerland view',imageAlt:'Interlaken and Lake Brienz below the Harder Kulm ridge',imageTitle:'Interlaken and Lake Brienz below Harder Kulm',
        summary:'Make Interlaken a practical base, not a checklist: orient between Ost and West, walk the Höhematte–Aare–Unterseen corridor, and add Harder Kulm only when the summit view and exact-date operation justify it.',
        access:'Interlaken Ost is the useful start for Zentralbahn trains to Brienz, Jungfrau-region departures and the Harderbahn valley station, a short walk away. Interlaken West is beside the BLS landing for Lake Thun and serves the western end of town. From Ost, the station-to-Höheweg walk is an easy orientation; save the hotel’s exact station in your map before handling luggage.',
        tradeoff:'Ost reduces transfers for Brienz and the high valleys; West puts you by the Thun boat pier and closer to the central shopping/evening corridor. Neither station is a universal winner, and changing hotels to chase both can cost a useful half day. Harder Kulm rises to 1,322 metres by a 10-minute funicular ride, but the view is the product: skip it in dense cloud or if the date’s operation does not fit.',
        fallback:'If visibility is poor or the Harderbahn is closed, keep the walk low: Interlaken Ost → Höheweg → Höhematte → the Aare river edge → Unterseen’s old streets → Interlaken West. Shorten it at any point and use the next SBB connection. For rain, keep one central stretch, a meal or a checked indoor stop; do not buy an uphill ticket to stand in cloud.',
        duration:'Allow two to three hours for the station-to-station town walk, longer for a relaxed meal or a short Harder Kulm visit. Make the funicular a separate weather decision; it can turn the visit into a half-day but should not be squeezed between a long Jungfrau excursion and a fixed evening connection.',
        combine:'This route fits an arrival/departure day, a recovery morning or the evening before a Brienz/Thun excursion. Do not add Harder Kulm automatically to an already full high-mountain day. If you have two nights, give one day to a lake branch; with three or four, keep a movable mountain window.',
        verify:'Check the Jungfrau Railways Harder Kulm page for the exact operating period, current interruptions, ticket and any date-specific reservation conditions; the operator describes the funicular ride as 10 minutes and the summit as 1,322 metres. Read MeteoSwiss or the current webcam at the summit, not only Interlaken town weather. Save the descent/return connection before boarding. No future opening, price or booking inventory is guaranteed here.',
        choices:[
          ['Two-station orientation','Walk Ost → Höheweg/Höhematte → Aare → Unterseen → West; useful on arrival and easy to shorten.'],
          ['Clear-weather viewpoint','From Ost, walk to the Harderbahn valley station and take the 10-minute funicular only when the summit is open and visible.'],
          ['Wet or clouded reset','Stay at valley level, take a short central walk and use the extra time for food, laundry or a checked indoor visit.']
        ],
        stages:[
          ['Start at the station you will use','At Ost or West, orient to the hotel, next departure and luggage route; the two stations are not interchangeable when a connection is timed.'],
          ['Walk the central green corridor','From Ost follow Höheweg beside Höhematte, then continue toward the Aare. Use the park as the town’s open-space link rather than treating it as a separate attraction.'],
          ['Cross into Unterseen','Follow the river toward Unterseen and its old-town streets, then turn back toward West. If the summit forecast is clear, branch to Harderbahn from Ost on a separate time block.'],
          ['Finish where the next train starts','End at West for a Thun-side evening or return to Ost for Brienz/Jungfrau; verify the live SBB route and do not assume a boat is the faster transfer.']
        ],
        watch:[
          ['Town and summit weather diverge','A bright valley can still leave Harder Kulm in cloud. Check the summit view before committing to the funicular.'],
          ['Harderbahn is date-specific','Seasonal operation, weather interruptions, tickets and any reservation rule are operator questions; confirm the exact date and descent before paying.'],
          ['Two stations, two departure patterns','Mark Ost or West in the route plan and leave luggage time. A short taxi or walk between them can still matter before a timed train.']
        ],
        fieldContext:{heading:'The two stations organize different days; the ridge is an optional third layer.',cards:[
          {title:'Ost anchors the eastern departure chain',copy:'Interlaken Ost links to the Brienz line and Jungfrau-region trains; the Harderbahn valley station is a short walk from the station. Keep these as distinct departures and save the right platform for the next morning.',sources:[0,2,4]},
          {title:'West connects to Lake Thun by water',copy:'The BLS landing at Interlaken West sits next to the station. The boat is slower than rail and should be chosen for the lake journey itself; check the exact sailing and return before building a two-town day around it.',sources:[1,2]},
          {title:'The summit needs its own forecast',copy:'Harder Kulm sits at 1,322 metres and the funicular ride takes about 10 minutes. A valley forecast is not a summit forecast; check current visibility and operation before adding the viewpoint.',sources:[4,6]}
        ]},
        sources:[
          ['https://www.interlaken.ch/en/map','Interlaken Tourism map'],
          ['https://www.bls.ch/en/freizeit-und-ferien/ausfluege/schifffahrt-thunersee-brienzersee','BLS boat landings and Lake Thun navigation'],
          ['https://www.sbb.ch/en','SBB exact-date journey planner'],
          ['https://www.zentralbahn.ch/en','Zentralbahn Interlaken–Brienz'],
          ['https://www.jungfrau.ch/en-gb/harder-kulm/','Jungfrau Railways Harder Kulm operation'],
          ['https://www.interlaken.ch/en','Interlaken Tourism'],
          ['https://www.meteoswiss.admin.ch/','MeteoSwiss weather']
        ],
        faq:[
          ['Is Harder Kulm worth adding to an Interlaken base day?','Only when the summit is open and the view is likely to be clear. The 10-minute ride reaches 1,322 metres, but check the summit webcam, weather, exact-date operation, ticket and any reservation conditions before committing.'],
          ['Which Interlaken station should I use?','Ost is the eastern gateway for Brienz, Jungfrau-region rail and Harderbahn; West is beside the Lake Thun pier and serves the western corridor. Choose by the next departure and hotel luggage route.'],
          ['Can I walk between Interlaken Ost and West?','Yes. Use Höheweg and Höhematte, then follow the Aare toward Unterseen and West. It is a useful orientation walk, but shorten it if luggage, rain or a train time makes the full corridor impractical.']
        ]
      }),
      g({
        slug:'brienz-giessbach',name:'Lake Brienz, Brienz & Giessbach',instrument:'turquoise-lake route strip',layout:'lake-route-strip',imageQuery:'Lake Brienz Giessbach Switzerland',imageAlt:'Iseltwald village on Lake Brienz, looking toward Giessbach and Brienz',imageTitle:'Iseltwald on Lake Brienz looking toward Giessbach and Brienz',
        summary:'Choose one Lake Brienz anchor—Brienz village or Giessbach Falls—and decide whether the lake boat is the day’s experience or the rail connection is the time-saver.',
        access:'From Interlaken Ost, use Zentralbahn to Brienz for a direct rail fallback or BLS boat when its date-specific sailing suits your day. Giessbach See is a separate boat landing; reaching the falls involves the historic funicular when operating or a signed uphill path. Do not assume a Brienz-town boat date or a general lake service means the Giessbach stop or funicular is open.',
        tradeoff:'The lake is a lower-elevation day with a different pace from Jungfrau peaks. A boat makes the crossing part of the outing but uses more time; rail is the reliable time-saving spine for Brienz. Giessbach adds a steep, wet waterfall walk and a seasonal last mile, so choose it for the falls rather than as a casual pier hop.',
        fallback:'If Lake Brienz boats are not running or the Giessbach landing/funicular does not fit, take Zentralbahn to Brienz and walk the village lanes and waterfront. If rain makes the falls path uncomfortable, keep the lake edge short and return by rail. When the boat is the priority but weather or service is uncertain, check the operator before leaving and keep Brienz as the same-day fallback.',
        duration:'Give Brienz village three to four hours including a meal and lakeside loop. A Giessbach visit needs a half-day block once boat access, the funicular or uphill path, falls viewpoints and the return are included. A full lake crossing plus both stops can use most of a day.',
        combine:'Pair Brienz or Giessbach with an Interlaken evening, not a high summit. With two nights choose one shore; with three, use separate days for Brienz and Thun/Spiez and move them around the weather. A boat round trip is itself a main activity, not free time between attractions.',
        verify:'Check BLS navigation for the exact date and landing. The operator’s 2026 Lake Brienz season is published as 3 April–6 December, while Giessbach’s own arrival page describes boat/funicular access as seasonal April–October; verify both pages for your date and do not infer future seasons from 2026. Check the Giessbach funicular, falls path and weather separately. No timetable, access or booking condition is guaranteed here.',
        choices:[
          ['Brienz village by rail','Zentralbahn Interlaken Ost–Brienz, then walk the station-side lanes toward the waterfront and choose a short village loop.'],
          ['Lake crossing plus one stop','Use a BLS sailing only after matching the outbound, landing and return; choose Brienz or Giessbach, not both by default.'],
          ['Giessbach waterfall focus','Boat to Giessbach See and use the funicular if operating, or take the uphill path only if footing and time suit.']
        ],
        stages:[
          ['Pick the day’s spine','Choose BLS boat for the lake crossing or Zentralbahn for a fast return to Brienz; confirm the exact service and final connection first.'],
          ['Walk Brienz as a village, not a pier','From Brienz station follow the signed route toward the old village and lakefront, then keep the waterfront section short enough to protect the return.'],
          ['Branch to Giessbach only with access confirmed','At Giessbach See, check the historic funicular status and the falls path conditions. Visit the viewpoints near the Grandhotel and do not continue uphill if rain, ice or limited daylight makes the path unsafe.'],
          ['Return on the mode you saved','Use the checked boat or train back to Interlaken Ost. If a Giessbach connection has become uncertain, return to Brienz by the route shown by the operator rather than waiting on an unverified sailing.']
        ],
        watch:[
          ['Two seasonal clocks','Lake Brienz sailings and the Giessbach funicular do not share one simple season. Verify each operating page for the actual date.'],
          ['Falls-path footing','Water spray, rain, snow or ice can make the uphill path less comfortable; use the funicular only if it is operating and the operator permits access.'],
          ['Return connection','Save the last useful boat and rail options before boarding. If the outbound is delayed or crowded, drop the second stop rather than rushing the descent.']
        ],
        fieldContext:{heading:'Separate the lake crossing from the waterfall last mile.',cards:[
          {title:'Brienz is the rail-supported fallback',copy:'Zentralbahn links Interlaken Ost with Brienz. Use SBB or Zentralbahn for the exact journey, then keep the walk to Brienz’s village and lakefront if boat frequency or weather reduces the value of a full crossing.',sources:[0,1]},
          {title:'Giessbach See is not the falls entrance by road',copy:'Giessbach’s arrival guide describes the boat landing followed by its historic funicular, with an uphill path as another way to reach the hotel and falls. The funicular and Lake Brienz sailings are seasonal; check both operators before choosing this branch.',sources:[2,3]},
          {title:'The lake timetable has a dated season',copy:'BLS publishes separate Lake Thun and Brienz navigation details. Its checked 2026 page lists Lake Brienz service from 3 April to 6 December, while Giessbach describes April–October access. Treat those as dated references, not future guarantees.',sources:[2]}
        ]},
        sources:[
          ['https://www.sbb.ch/en','SBB exact-date rail planner'],
          ['https://www.zentralbahn.ch/en','Zentralbahn Interlaken Ost–Brienz'],
          ['https://www.bls.ch/en/freizeit-und-ferien/ausfluege/schifffahrt-thunersee-brienzersee','BLS Lake Brienz boat operations'],
          ['https://giessbach.ch/en/kontakt-anreise','Giessbach boat, funicular and arrival information'],
          ['https://giessbach.ch/en/','Giessbach Hotel and falls access']
        ],
        faq:[
          ['Can I visit Giessbach Falls in winter?','Do not assume the boat or historic funicular operates year-round. Giessbach describes its boat/funicular access as seasonal, and BLS publishes its own lake dates. Check both for the exact day; otherwise use the rail-supported Brienz village plan.'],
          ['Is a boat or train better for Lake Brienz?','Choose the boat when the lake crossing is part of the experience and the dated outbound and return fit. Choose Zentralbahn for a faster, simpler Brienz visit or a weather fallback.'],
          ['How much time should I allow for Giessbach?','Plan a half day so the boat landing, funicular or uphill walk, waterfall viewpoints and return do not compete. The last mile is weather- and season-dependent; verify access and leave a daylight margin.']
        ]
      }),
      g({
        slug:'thun-spiez',name:'Lake Thun, Thun & Spiez',instrument:'castle-and-lake fork',layout:'lake-fork',imageQuery:'Thun Spiez Lake Switzerland castle',imageAlt:'Spiez Castle on the shore of Lake Thun',imageTitle:'Spiez Castle and Lake Thun',
        summary:'Choose Thun’s old-town and Aare walk or Spiez’s bay-and-castle approach as the main stop; connect by SBB train unless a BLS boat is part of the day you want.',
        access:'From Interlaken West or Ost, use SBB rail to Thun or Spiez for the efficient route; BLS boats are a slower scenic alternative. The Interlaken West landing sits beside its station, while the Spiez pier is about a 15-minute walk from Spiez station. Thun station is a short walk from the old centre and Aare crossings; confirm castle access separately.',
        tradeoff:'Thun gives the longer urban sequence: station, Obere Hauptgasse, Rathausplatz, Schlossberg and the Aare. Spiez is a smaller bay-and-castle visit, but the station-to-pier/castle approach is uphill and deserves time. A boat between towns is rewarding when you want the lake journey; it is inefficient if you only want both town centres.',
        fallback:'If boats are seasonal or weather is rough, use SBB between Interlaken, Thun and Spiez and keep one town as the anchor. In rain, choose Thun’s covered old-town arc, then add an indoor castle or museum only after checking its date-specific hours. Keep Spiez for a short bay view if the uphill walk and castle access still make sense.',
        duration:'Allow four to six hours for a focused Thun walk and meal, or three to four hours for Spiez bay and castle grounds. Doing both is a full day when rail or boat connections are convenient; drop the second town if the first visit or return gets compressed.',
        combine:'This is the strongest low-elevation alternative when Jungfrau peaks are clouded. Pair Thun or Spiez with an Interlaken evening, not another major mountain excursion. A two-town loop works best as one primary town plus a short second stop and a train return.',
        verify:'Check BLS Lake Thun sailings for the date and exact landing, SBB for rail alternatives, and the official Thun or Spiez castle page for current entry and opening conditions. Mountain visibility and boat service are separate decisions. Check the forecast again before an exposed bay walk; no future boat timetable or castle opening is promised.',
        choices:[
          ['Thun old-town circuit','Station → Obere Hauptgasse → Rathausplatz → Schlossberg/Thun Castle → Aare edge; spend the main block in town.'],
          ['Spiez bay and castle','Walk from Spiez station toward the castle and bay, allowing for the downhill approach and uphill return; check the castle season before planning an interior visit.'],
          ['Two towns with rail return','Make one town the anchor, add a short second stop only if connections leave time, then use SBB back to Interlaken.']
        ],
        stages:[
          ['Choose the town before the boat','Use SBB to set a protected rail return. Add the BLS boat only when the sailing connects the route you actually want.'],
          ['Read Thun on foot','From the station, reach Obere Hauptgasse and Rathausplatz, climb toward Schlossberg if conditions suit, then follow the Aare-side lanes back toward the station.'],
          ['Or make Spiez a compact bay walk','From Spiez station, follow the signed route down to the castle and bay. Check the castle’s own access calendar and budget the climb back to the train.'],
          ['Finish by rail or the saved sailing','If the day included both towns, protect the SBB return rather than chasing another pier. Skip the second stop if the first visit or weather runs long.']
        ],
        watch:[
          ['Castle interiors have their own calendar','Do not assume the towers, museum rooms or grounds share the same opening window. Confirm the exact date on the official castle page.'],
          ['Spiez is a hillside approach','The bay looks close on a map, but the station-to-pier walk takes about 15 minutes and the return rises. Allow time and consider mobility needs.'],
          ['Boat versus train','The BLS boat is a scenic route, not automatically the quickest connection. Check the dated sailing and return before choosing it over SBB.']
        ],
        fieldContext:{heading:'Follow one coherent town walk; use the lake as a deliberate connector.',cards:[
          {title:'Thun is the deeper urban day',copy:'Start from Thun station and move through Obere Hauptgasse and Rathausplatz toward Schlossberg, then descend to the Aare-side centre. Keep the castle interior as a separate, date-checked choice rather than assuming it is open.',sources:[0,3]},
          {title:'Spiez trades scale for the bay',copy:'The bay and castle sit below the station. BLS notes roughly a 15-minute station-to-pier walk; the climb back and castle’s own season are part of the plan, not incidental details.',sources:[1,4]},
          {title:'Rail and boat solve different problems',copy:'SBB keeps the town pair efficient. BLS boats make the shore-to-shore trip scenic, but check the departure, landing and return before walking to the pier; the Lake Thun timetable is date-specific.',sources:[1,2]}
        ]},
        sources:[
          ['https://www.sbb.ch/en','SBB Interlaken–Thun–Spiez rail planning'],
          ['https://www.bls.ch/en/freizeit-und-ferien/ausfluege/schifffahrt-thunersee-brienzersee','BLS Lake Thun timetable and landings'],
          ['https://www.thunersee.ch/en/experiences/','Lake Thun official experiences'],
          ['https://schlossthun.ch/en/visitor-information/faq/','Thun Castle visitor information and opening hours'],
          ['https://www.schloss-spiez.ch/en/information/opening-hours-fees','Spiez Castle opening hours and fees'],
          ['https://www.spiez.com/en/info','Spiez arrival and visitor information']
        ],
        faq:[
          ['Should I visit Thun or Spiez first?','Choose Thun for a longer old-town, river and castle-context walk; choose Spiez for a shorter bay-and-castle landscape. If visiting both, protect the rail return and drop the second stop when the day becomes rushed.'],
          ['Is the Lake Thun boat faster than the train?','Treat it as a scenic journey, not a time-saving transfer. Check the date-specific BLS sailing and both landings, then compare the actual SBB rail connection.'],
          ['Can I see the castles without booking?','The route does not assume a reservation or guaranteed entry. Check the official Thun and Spiez castle pages for the exact date, opening hours, any booking terms and closures before building the walk around an interior visit.']
        ]
      })
    ]
  })
];
