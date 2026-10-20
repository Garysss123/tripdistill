import fs from 'node:fs';
import path from 'node:path';
import { greeceClusters, greeceGuides, greeceIslandChoices, greeceRoutes, greeceSources } from '../data/greece-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const reviewed = '20 October 2026';
const reviewedIso = '2026-10-20';
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
const esc = (value) => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const abs = (route) => `https://tripdistill.com${route}`;
const clusterRoute = (cluster) => `/greece/${cluster.slug}/`;
const guideRoute = (guide) => `/greece/${guide.cluster?.slug || greeceClusters.find((cluster) => cluster.guides.some((candidate) => candidate.slug === guide.slug))?.slug}/${guide.slug}/`;
const cleanText = (value) => String(value).replace(/\s+/g, ' ').trim();
const metaDescription = (value) => { const text = cleanText(value); return text.length > 165 ? `${text.slice(0, 160).replace(/\s+\S*$/, '')}…` : text; };

function pageHead(title, description, route, type = 'article') {
  return `<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(metaDescription(description))}"><link rel="canonical" href="${abs(route)}">${locales.map(([code, prefix]) => `<link rel="alternate" hreflang="${code}" href="${abs(prefix + route)}">`).join('')}<link rel="alternate" hreflang="x-default" href="${abs(route)}"><meta name="theme-color" content="#173640"><meta property="og:type" content="${type}"><meta property="og:site_name" content="TripDistill"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(metaDescription(description))}"><meta property="og:url" content="${abs(route)}"><meta property="og:image" content="${abs('/assets/images/greece-atlas.svg')}"><meta property="og:image:alt" content="Original TripDistill schematic of Greece’s mainland corridors and island crossings, not to scale"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(metaDescription(description))}"><meta name="twitter:image" content="${abs('/assets/images/greece-atlas.svg')}"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/favicon.ico" sizes="any"><link rel="stylesheet" href="/css/site.css?v=20261016-1"><link rel="stylesheet" href="/css/greece.css?v=20261020-1"><script src="/js/adsense.js?v=20260826-9" defer></script>`;
}

function shell(body, layout) {
  return `<a class="skip-link" href="#main-content">Skip to content</a><div id="layout-header"></div><div class="site-shell"><div class="mobile-overlay" data-mobile-overlay aria-hidden="true"></div><aside id="layout-sidebar" class="sidebar" aria-label="TripDistill navigation"></aside><main id="main-content" class="page-content greece-page" data-greece-layout="${layout}">${body}</main></div><div id="layout-footer"></div><script src="/js/main.js?v=20261016-1" defer></script>`;
}

function routeDiagram(nodes, variant, caption) {
  const points = nodes.map((_, index) => {
    const angle = (Math.PI * (index + 1)) / (nodes.length + 1);
    const x = 80 + ((index * 73 + variant * 31) % 400);
    const y = 68 + ((index * 47 + Math.round(Math.sin(angle) * 80 + variant * 19)) % 165);
    return [x, y];
  });
  const path = points.map(([x, y], index) => `${index ? 'L' : 'M'} ${x} ${y}`).join(' ');
  const dots = points.map(([x, y], index) => `<circle cx="${x}" cy="${y}" r="${index === 0 || index === points.length - 1 ? 11 : 7}" class="node ${index === 0 ? 'start' : index === points.length - 1 ? 'finish' : ''}"/><circle cx="${x}" cy="${y}" r="2.3" class="node-core"/>`).join('');
  return `<figure class="greece-diagram"><svg viewBox="0 0 560 300" role="img" aria-hidden="true" focusable="false"><defs><linearGradient id="sea-${variant}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e9f0eb"/><stop offset="1" stop-color="#d3e3df"/></linearGradient></defs><rect width="560" height="300" rx="28" fill="url(#sea-${variant})"/><path class="landform" d="M30 63C90 32 143 71 194 53S289 42 318 77s89 32 121 13 70-26 94 9l-7 56c-43-11-62 16-88 21-43 7-63-16-98-5-51 15-66 38-117 29s-70-1-102 24-60 27-94 14z"/><path class="route-line" d="${path}"/>${dots}<path class="compass" d="M500 54l8 20-8-4-8 4z"/><text x="508" y="93" class="compass-label">N</text><path class="shore-line" d="M24 248c50-21 94 17 142 0s87-18 128 0 84 16 124-2 71-15 118 3"/></svg><figcaption>${esc(caption)}</figcaption></figure>`;
}

function sourcesBlock(items) {
  const unique = new Map(items);
  return [...unique].map(([url, label]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)}</a>.</li>`).join('');
}

function breadcrumbs(items) {
  return `<nav class="greece-breadcrumb" aria-label="Breadcrumb">${items.map(([label, url], index) => index === items.length - 1 ? `<span aria-current="page">${esc(label)}</span>` : `<a href="${url}">${esc(label)}</a>`).join('<span aria-hidden="true">/</span>')}</nav>`;
}

function faqHtml(items) {
  return `<section class="greece-section greece-faq"><header><span class="greece-kicker">Planning answers</span><h2>Questions to settle before departure</h2></header><div class="greece-faq-grid">${items.map(([question, answer]) => `<details><summary>${esc(question)}</summary><div><p>${esc(answer)}</p></div></details>`).join('')}</div></section>`;
}

function islandSelectionSection() {
  const cards = greeceIslandChoices.map((choice) => `<article class="greece-island-choice"><span class="greece-kicker">Island gateway choice</span><h3>${esc(choice.name)}</h3><dl><div><dt>Best fit</dt><dd>${esc(choice.fit)}</dd></div><div><dt>Airport or port</dt><dd>${esc(choice.gateways)}</dd></div><div><dt>Local connection</dt><dd>${esc(choice.local)}</dd></div><div><dt>If the crossing changes</dt><dd>${esc(choice.recovery)}</dd></div></dl></article>`).join('');
  const refs = sourcesBlock([greeceSources.visitGreece, greeceSources.blueStar, greeceSources.seajets, greeceSources.levante, greeceSources.dodekanisos, greeceSources.hnms]);
  return `<section class="greece-section greece-island-selector" id="island-choices"><header><span class="greece-kicker">Island groups · airport · port · local base</span><h2>Choose the island chain by its actual arrival door.</h2><p>Athens is a useful gateway, but not a shared island bus station. The island, mainland port, airport and last-mile ride have to match before a multi-island plan makes sense.</p></header><div class="greece-island-grid">${cards}</div><aside class="greece-crossing-note"><h3>When no direct ferry is listed</h3><p>Keep one island, or search a carrier-confirmed route back through the mainland port named for that sailing. A port change across Athens or a late arrival may require an overnight. If weather cancels a crossing, ask the original carrier about its ticket terms and stay near the room you have; do not assume another operator or a same-day replacement exists.</p><p>Before departure, recheck the named operator’s live itinerary and service notices, then protect a later flight with an overnight at its actual mainland gateway.</p><ul>${refs}</ul></aside></section>`;
}

function mainlandIslandSection() {
  const combinations = [
    ['Athens + one Cyclades island', 'Keep Athens for the archaeological core, then choose one island by its actual Piraeus, Rafina or Lavrio departure—or a date-confirmed flight. Finish with an overnight near the real mainland departure airport or port before an international connection.'],
    ['Peloponnese + Zakynthos', 'Treat the Peloponnese-to-Zakynthos move as a road/coach leg to Kyllini plus the separately booked ferry. Check both the mainland arrival and island port transfer; add a night if the coach, sailing and lodging check-in do not form one reliable chain.'],
    ['Athens + Crete', 'Choose a flight to Chania or Heraklion, or a ferry to Souda or Heraklion port, according to the first base. Airport and port are different gateways, and a west-to-east Cretan move should not be squeezed between arrival and a boat or flight.']
  ];
  const refs = sourcesBlock([greeceSources.visitGreece, greeceSources.levante, greeceSources.blueStar, greeceSources.blueStarConditions]);
  return `<section class="greece-section greece-combinations" id="mainland-island-combinations"><header><span class="greece-kicker">Mainland plus island · named gateway pairs</span><h2>Combine land and sea only when both doors connect.</h2><p>These are planning shapes, not packaged transfers. Confirm the carrier, coach, port and local ride independently before making the second leg non-refundable.</p></header><div class="greece-combination-grid">${combinations.map(([title, text]) => `<article><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join('')}</div><aside class="greece-crossing-note"><p>For every ferry leg, check the live sailing and disruption notice again close to departure. If it is cancelled, ask the selling carrier about current ticket options and move the flight connection to a later day if needed; another operator or same-day rescue is not guaranteed.</p><ul>${refs}</ul></aside></section>`;
}

function schema(name, description, route, type, breadcrumbsList, faq) {
  const graph = [
    { '@type': type, '@id': `${abs(route)}#page`, name: `${name} Travel Guide`, headline: `${name} Travel Guide`, description, inLanguage: 'en', datePublished: reviewedIso, dateModified: reviewedIso, mainEntityOfPage: abs(route), image: abs('/assets/images/greece-atlas.svg'), about: { '@type': 'TouristDestination', name }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
    { '@type': 'BreadcrumbList', itemListElement: breadcrumbsList.map(([label, url], index) => ({ '@type': 'ListItem', position: index + 1, name: label, item: abs(url) })) }
  ];
  if (faq?.length) graph.push({ '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) });
  return { '@context': 'https://schema.org', '@graph': graph };
}

function countryFaq() {
  return [
    ['Should I begin in Athens or fly directly to an island?', 'Use Athens when its archaeology, museums or mainland rail corridor are part of the trip. A direct island gateway can save a backtrack, but only if flight/port arrival and the local transfer match your first booked night.'],
    ['Can I see several islands on one ferry pass?', 'A ticket product does not guarantee a direct sailing on your date. Confirm the operating company, port pair, call pattern and return before adding a second island; leave a weather buffer before flights.'],
    ['Is Greece easy without a car?', 'Athens, Thessaloniki and several island towns work well on foot, metro or bus. Rural archaeological sites, mountain trailheads and dispersed beaches need a named coach, driver or rental plan for both outbound and return legs.'],
    ['When should I plan outdoor sites?', 'Summer heat affects open ruins and exposed island paths. Start early, keep a confirmed indoor alternative and follow HNMS alerts for the exact city, mountain or coast.'],
    ['Do ferry times stay fixed?', 'No. Seasonal service, wind and operator changes can affect routes. Recheck the carrier’s live notice and preserve an overnight margin before an international departure.']
  ];
}

function countryPage() {
  const route = '/greece/';
  const faq = countryFaq();
  const description = 'Plan Greece through eight mainland and island regions. Compare Athens, the Peloponnese, northern and central corridors, Crete, the Cyclades, Ionian Islands and Dodecanese with practical rail, coach, ferry and last-mile decisions.';
  const cards = greeceClusters.map((cluster, index) => `<article class="greece-region-card"><a href="${clusterRoute(cluster)}"><span class="greece-number">${String(index + 1).padStart(2, '0')}</span><div class="greece-card-route" aria-hidden="true"><i></i><i></i><i></i></div><small>${esc(cluster.region)} · 3 field routes</small><h2>${esc(cluster.name)}</h2><p>${esc(cluster.summary)}</p><strong>Open regional field guide →</strong></a></article>`).join('');
  const body = `<section class="greece-country-hero"><div class="greece-hero-copy"><span class="greece-kicker">Greece · country field atlas · reviewed ${reviewed}</span><h1>Greece</h1><p class="greece-deck">Plan a country of rail corridors, mountain roads and island ports as distinct travel systems. This field atlas links Athens, the Peloponnese, Central and Northern Greece, Crete, the Cyclades, Ionian Islands and Dodecanese; each route starts from a real gateway and leaves its last mile visible.</p><div class="greece-actions"><a class="button primary" href="#regions">Compare 8 regions</a><a class="button secondary" href="#route-shape">Choose a route shape</a></div></div>${routeDiagram([[120, 165], [210, 105], [293, 172], [380, 84], [440, 170], [340, 235], [210, 225]], 1, 'Original TripDistill route schematic; island and mainland links are illustrative, not a geographic map or a timetable.')}</section>
<section class="greece-country-thesis"><article><b>01</b><span>Choose a gateway</span><p>Athens, Thessaloniki, Heraklion and island ports are different arrival systems; name the terminal before booking the next leg.</p></article><article><b>02</b><span>Budget the last mile</span><p>Intercity rail serves selected mainland corridors; KTEL serves regional roads, and the site or beach still needs a separately verified last-mile transfer.</p></article><article><b>03</b><span>Build a weather margin</span><p>Summer heat, mountain conditions and Aegean wind affect exposed sites, ferries and small-boat days. Keep a complete alternative near the same overnight base.</p></article></section>
<section class="greece-section greece-regions" id="regions"><header><span class="greece-kicker">Eight regional decisions · 24 focused local guides</span><h2>Choose a region by its transport spine and overnight logic.</h2><p>Each hub compares its main gateway, useful base, seasonal constraint and the cost of adding another coast, site or island.</p></header><div class="greece-region-grid">${cards}</div></section>
${islandSelectionSection()}
<section class="greece-section greece-route-shape" id="route-shape"><header><span class="greece-kicker">Make the trip shape honest</span><h2>Use a corridor, not a pin collection.</h2><p>The island, the mainland and the urban network each have their own clock. Add a transfer day when a ticket, terminal, local connection or return cannot be comfortably absorbed inside a sightseeing day.</p></header><div class="greece-route-shape-grid"><article><small>5–7 DAYS · ONE REGION</small><h3>Stay close to one gateway</h3><p>Give Athens or Thessaloniki a real city stay, or choose one island with enough nights for an arrival buffer, one complete local day and a weather alternative.</p></article><article><small>8–12 DAYS · ONE CORRIDOR</small><h3>Join two bases on land</h3><p>Use a confirmed mainland rail or KTEL corridor and count the transfer between actual stations and lodging. Delphi, Meteora and Olympus each have a different last-mile plan.</p></article><article><small>13+ DAYS · LAND PLUS ISLAND</small><h3>Protect a separate crossing</h3><p>Pair one mainland region with one island, then leave a spare night before a flight. Avoid turning several islands into a daily check-in and port queue.</p></article></div></section>
${mainlandIslandSection()}
<section class="greece-section greece-transport" id="transport"><header><span class="greece-kicker">Rail · road · ferry · air</span><h2>Match each leg to the operator that runs it.</h2></header><div class="greece-transport-grid"><article><span class="greece-mode">01 / RAIL</span><h3>Use Hellenic Train where the line fits.</h3><p>Rail supports selected mainland and suburban corridors. Check the current route map, station and service notice; a train to a gateway town does not mean the sanctuary, monastery or beach is at the platform.</p></article><article><span class="greece-mode">02 / COACH</span><h3>KTEL is regional, not one national timetable.</h3><p>Operator, departure terminal, seasonal route and final return differ by region. Confirm the local KTEL for the exact date and identify how to reach the site from its town stop.</p></article><article><span class="greece-mode">03 / CITY</span><h3>Athens and Thessaloniki need their own map.</h3><p>OASA/STASY in Athens and Thessaloniki Metro/OASTH are urban networks. Metro, airport coach, port gate and intercity coach terminal are separate doors; keep the final walk and luggage in the plan.</p></article><article><span class="greece-mode">04 / SEA & AIR</span><h3>Island transfers change with date and wind.</h3><p>Use the named ferry or flight operator’s live route and disruption notice. Add port check-in, island transfer, return crossing and a weather buffer; do not infer a daily direct service from a map.</p></article></div></section>
<section class="greece-section greece-condition"><div><span class="greece-kicker">Heat · wind · elevation</span><h2>Put conditions inside the itinerary.</h2><p>Open archaeological ground and summer city streets need cooler-hour walks and a confirmed indoor break. Mountain trails require a route-specific weather and access decision; island boats and ferries depend on sea conditions. Consult HNMS for the actual place and elevation, then keep the plan reversible.</p></div>${routeDiagram([[90, 212], [186, 156], [279, 105], [360, 159], [455, 84]], 5, 'A schematic change-of-conditions chain: check the named site, transport operator and return before departure.')}</section>
${faqHtml(faq)}<section class="greece-section greece-sources"><h2>Official planning and transport references</h2><p>Schedules, tickets, access and weather can change. Reopen the operator or public authority for the exact date and location before travelling.</p><ul>${sourcesBlock([['https://www.visitgreece.gr/', 'Visit Greece official tourism portal'], ['https://www.hellenictrain.gr/en/', 'Hellenic Train services and notices'], ['https://www.oasa.gr/en/visit-athens/airport-express-bus-lines/', 'OASA Athens airport express services'], ['https://www.stasy.gr/en/timetables/line-3/', 'STASY Metro Line 3 notices'], ['https://www.thessmetro.gr/en/', 'Thessaloniki Metro official information'], ['https://www.bluestarferries.com/en-gb', 'Blue Star Ferries route and booking information'], ['https://www.hnms.gr/en/', 'Hellenic National Meteorological Service']])}</ul><p class="greece-image-note">The route diagrams on this page are original TripDistill schematics, not geographic maps and not to scale. No third-party photographs are used.</p><span class="greece-review-note">Editorial review: ${reviewed}. Verify date-sensitive details with linked official operators.</span></section>`;
  return `<!doctype html><html lang="en" data-adsense-client="ca-pub-1732059148394592"><head>${pageHead('Greece Travel Guide | 8 Regional Hubs & 24 Local Routes | TripDistill', description, route, 'website')}<script type="application/ld+json">${JSON.stringify(schema('Greece', description, route, 'WebPage', [['Home', '/'], ['Greece', route]], faq))}</script></head><body data-page="greece" data-country="greece">${shell(body, 'country')}</body></html>`;
}

function clusterPage(cluster, index) {
  const route = clusterRoute(cluster);
  const description = `${cluster.summary} ${cluster.lead}`;
  const faq = [
    ['What should I confirm first?', cluster.arrival],
    ['Where should I stay?', cluster.stay],
    ['What is the lower-risk alternative?', cluster.season],
    ...(cluster.disruption ? [['What should I do if a ferry or island transfer is cancelled?', cluster.disruption]] : [])
  ];
  const gatewayPlan = cluster.gatewayChoices?.length ? `<section class="greece-section greece-island-gateways" id="island-connections"><header><span class="greece-kicker">Named gateways · dated routes · recovery</span><h2>Choose the arrival and the backup as one plan.</h2><p>Use these route shapes to choose where to stay; confirm the dated operating leg with its official carrier before booking the next connection.</p></header><div class="greece-island-gateway-grid">${cluster.gatewayChoices.map((choice, choiceIndex) => `<article><b>${String(choiceIndex + 1).padStart(2, '0')}</b><h3>${esc(choice.title)}</h3><p>${esc(choice.text)}</p></article>`).join('')}</div><aside class="greece-sailing-recovery"><span class="greece-kicker">If the sea or service changes</span><p>${esc(cluster.disruption)}</p></aside></section>` : '';
  const routeCards = cluster.guides.map((guide, guideIndex) => `<a class="greece-route-card" href="${clusterRoute(cluster)}${guide.slug}/"><span class="greece-number">${String(guideIndex + 1).padStart(2, '0')}</span><small>${esc(guide.theme)}</small><h3>${esc(guide.name)}</h3><p>${esc(guide.summary)}</p><strong>Read the local decision →</strong></a>`).join('');
  const body = `${breadcrumbs([['Home', '/'], ['Greece', '/greece/'], [cluster.name, route]])}<section class="greece-hub-hero"><div><span class="greece-kicker">Region ${String(index + 1).padStart(2, '0')} · ${esc(cluster.region)} · 3 local routes</span><h1>${esc(cluster.name)}</h1><p class="greece-deck">${esc(cluster.summary)}</p><div class="greece-decision"><small>Regional decision</small><p>${esc(cluster.lead)}</p></div><div class="greece-actions"><a class="button primary" href="#routes">Compare local routes</a><a class="button secondary" href="#gateway">Check the gateway</a></div></div>${routeDiagram(cluster.guides.map((guide) => [guide.name, guide.theme]), index + 2, `${cluster.name}: original TripDistill access schematic, not to scale.`)}</section>
<section class="greece-regional-ledger"><article><small>ARRIVAL &amp; LAST MILE</small><p>${esc(cluster.arrival)}</p></article><article><small>BASE &amp; NIGHTS</small><p>${esc(cluster.stay)}</p></article><article><small>SEASON &amp; EXPOSURE</small><p>${esc(cluster.season)}</p></article><article><small>CAR OR NO CAR</small><p>${esc(cluster.car)}</p></article></section>
<section class="greece-section greece-plan-lanes"><header><span class="greece-kicker">Build the route from the ground up</span><h2>Give each gateway a realistic day shape.</h2></header><div><article><small>ROUTE SEQUENCE</small><p>${esc(cluster.sequence)}</p></article><article><small>WITHOUT A CAR</small><p>${esc(cluster.noCar)}</p></article></div></section>
${gatewayPlan}
<section class="greece-section greece-route-list" id="routes"><header><span class="greece-kicker">Three distinct route choices · not interchangeable day trips</span><h2>Start with the day you actually want.</h2><p>Each guide names the arrival, core commitment and return problem. Compare the specific transport and access chain before adding another stop.</p></header><div class="greece-route-grid">${routeCards}</div></section>
<section class="greece-section greece-gateway" id="gateway"><header><span class="greece-kicker">Regional operating notes</span><h2>From the trunk route to the actual door.</h2></header><div class="greece-gateway-grid"><article><b>01</b><h3>Reach the named gateway</h3><p>${esc(cluster.arrival)}</p></article><article><b>02</b><h3>Choose a base that protects the evening</h3><p>${esc(cluster.stay)}</p></article><article><b>03</b><h3>Make the car earn its place</h3><p>${esc(cluster.car)}</p></article></div></section>
${faqHtml(faq)}<section class="greece-section greece-sources"><h2>Official regional references</h2><p>Recheck transport, access, weather and site notices for the date you travel.</p><ul>${sourcesBlock([...cluster.sources, ['https://www.visitgreece.gr/', 'Visit Greece official tourism portal'], ['https://www.hnms.gr/en/', 'Hellenic National Meteorological Service']])}</ul><p class="greece-image-note">Original TripDistill schematic; not a geographic map or to scale.</p><span class="greece-review-note">Editorial review: ${reviewed}. Time-sensitive details require a current operator check.</span></section>`;
  return `<!doctype html><html lang="en" data-adsense-client="ca-pub-1732059148394592"><head>${pageHead(`${cluster.name} Travel Guide | 3 Local Routes | TripDistill Greece`, description, route)}<script type="application/ld+json">${JSON.stringify(schema(cluster.name, cluster.summary, route, 'Article', [['Home', '/'], ['Greece', '/greece/'], [cluster.name, route]], faq))}</script></head><body data-page="gr-${cluster.slug}" data-parent-page="greece" data-country="greece" data-region="${cluster.slug}">${shell(body, 'region')}</body></html>`;
}

function guidePage(guide, index) {
  const cluster = guide.cluster;
  const route = guideRoute(guide);
  const description = `${guide.summary} ${guide.purpose}`;
  const related = cluster.guides.filter((item) => item.slug !== guide.slug).map((item) => `<a href="${clusterRoute(cluster)}${item.slug}/"><small>Same regional hub</small><strong>${esc(item.name)}</strong><span>${esc(item.theme)} →</span></a>`).join('');
  const body = `${breadcrumbs([['Home', '/'], ['Greece', '/greece/'], [cluster.name, clusterRoute(cluster)], [guide.name, route]])}<section class="greece-guide-hero"><div><span class="greece-kicker">${esc(cluster.name)} · Local route ${String(index + 1).padStart(2, '0')} · reviewed ${reviewed}</span><h1>${esc(guide.name)}</h1><p class="greece-deck">${esc(guide.summary)}</p><div class="greece-decision"><small>Decision this field guide resolves</small><p>${esc(guide.purpose)}</p></div><div class="greece-actions"><a class="button primary" href="#route">Follow the route logic</a><a class="button secondary" href="#contingency">Check the fallback</a></div></div>${routeDiagram([guide.name, guide.theme, cluster.name], index + 11, `${guide.name}: original TripDistill route schematic, not to scale.`)}</section>
<section class="greece-section greece-field-notes"><header><span class="greece-kicker">Base · access · effort</span><h2>Stay near the first door; solve the last mile.</h2></header><div><article><small>WHERE TO SLEEP</small><p>${esc(guide.stay)}</p></article><article><small>ARRIVAL &amp; LAST MILE</small><p>${esc(guide.access)}</p></article><article><small>MOBILITY &amp; EFFORT</small><p>${esc(guide.mobility)}</p></article></div></section>
<section class="greece-section greece-route-folio" id="route"><header><span class="greece-kicker">Route shape</span><h2>Make the main commitment and the return fit together.</h2><p>${esc(guide.combine)}</p></header></section>
<section class="greece-time-budget"><span class="greece-kicker">TIME BUDGET</span><p>${esc(guide.duration)}</p></section>
<section class="greece-booking-rail"><div><span class="greece-kicker">Before you reserve</span><h2>Verify the service and the place you will enter.</h2></div><p>${esc(guide.bookings)}</p></section>
<section class="greece-section greece-contingency" id="contingency"><header><span class="greece-kicker">Season · mobility · plan change</span><h2>Keep a complete alternative close to the same base.</h2></header><div><article><small>CONDITIONS</small><p>${esc(guide.season)}</p></article><article><small>WHEN ACCESS CHANGES</small><p>${esc(guide.fallback)}</p></article><article><small>VISIBLE TRADE-OFF</small><p>${esc(guide.tradeoff)}</p></article></div></section>
<section class="greece-section greece-related"><header><span class="greece-kicker">Choose another day in ${esc(cluster.name)}</span><h2>Routes with a different priority.</h2></header><div>${related}</div></section>
<section class="greece-section greece-sources"><h2>Official sources and date-sensitive checks</h2><p>Ticketing, routes, weather and access can change. Reopen each operator or authority notice for the exact date before you travel.</p><ul>${sourcesBlock([...cluster.sources, ...guide.sources, ['https://www.hnms.gr/en/', 'Hellenic National Meteorological Service']])}</ul><p class="greece-image-note">The route schematic is an original TripDistill diagram, not a geographic map or to scale.</p><span class="greece-review-note">Editorial review: ${reviewed}. Confirm time-sensitive details before booking.</span></section>`;
  return `<!doctype html><html lang="en" data-adsense-client="ca-pub-1732059148394592"><head>${pageHead(`${guide.name} Travel Guide | ${cluster.name} | TripDistill Greece`, description, route)}<script type="application/ld+json">${JSON.stringify(schema(guide.name, guide.summary, route, 'Article', [['Home', '/'], ['Greece', '/greece/'], [cluster.name, clusterRoute(cluster)], [guide.name, route]], []))}</script></head><body data-page="gr-${cluster.slug}-${guide.slug}" data-parent-page="greece" data-country="greece" data-region="${cluster.slug}">${shell(body, 'route')}</body></html>`;
}

function updateMarked(existing, start, end, replacement, afterMarker) {
  const marker = `<!-- ${start} -->`;
  const endMarker = `<!-- ${end} -->`;
  if (existing.includes(marker) && existing.includes(endMarker)) {
    const startAt = existing.indexOf(marker);
    const endAt = existing.indexOf(endMarker, startAt) + endMarker.length;
    return `${existing.slice(0, startAt)}${replacement}${existing.slice(endAt)}`;
  }
  const insertion = afterMarker ? existing.indexOf(afterMarker) + afterMarker.length : -1;
  if (insertion < 0) throw new Error(`Cannot find integration marker ${afterMarker || marker}`);
  return `${existing.slice(0, insertion)}\n${replacement}\n${existing.slice(insertion)}`;
}

function addNavigation() {
  const sidebarPath = path.join(root, 'components/sidebar.html');
  const sidebarBlock = `<!-- GREECE_NAV_START --><details class="sidebar-accordion sidebar-country" data-sidebar-id="greece"><summary><span class="sidebar-summary-main">Greece</span><span class="sidebar-summary-meta">8 regions</span></summary><div class="sidebar-links sidebar-accordion-body"><a class="sidebar-link" href="/greece/" data-nav-key="greece">Greece guide</a>${greeceClusters.map((cluster) => `<details name="greece-chapters" class="sidebar-accordion sidebar-chapters" data-sidebar-id="chapters-gr-${cluster.slug}"><summary><span class="sidebar-summary-main">${esc(cluster.name)}</span><span class="sidebar-summary-meta">3</span></summary><div class="sidebar-links sidebar-accordion-body"><a class="sidebar-link" href="${clusterRoute(cluster)}" data-nav-key="gr-${cluster.slug}">${esc(cluster.name)}</a>${cluster.guides.map((guide) => `<a class="sidebar-link" href="${clusterRoute(cluster)}${guide.slug}/" data-nav-key="gr-${cluster.slug}-${guide.slug}">${esc(guide.name)}</a>`).join('')}</div></details>`).join('')}</div></details><!-- GREECE_NAV_END -->`;
  fs.writeFileSync(sidebarPath, updateMarked(fs.readFileSync(sidebarPath, 'utf8'), 'GREECE_NAV_START', 'GREECE_NAV_END', sidebarBlock, '<!-- SPAIN_NAV_END -->'));

  const headerPath = path.join(root, 'components/header.html');
  const headerBlock = '<!-- GREECE_HEADER_START --><a class="nav-link" href="/greece/" data-nav-key="greece">Greece</a><!-- GREECE_HEADER_END -->';
  fs.writeFileSync(headerPath, updateMarked(fs.readFileSync(headerPath, 'utf8'), 'GREECE_HEADER_START', 'GREECE_HEADER_END', headerBlock, '<!-- SPAIN_HEADER_END -->'));

  const footerPath = path.join(root, 'components/footer.html');
  const footerBlock = '<!-- GREECE_FOOTER_START --><a href="/greece/">Greece</a><a href="/greece/athens-attica/">Athens</a><a href="/greece/peloponnese/">Peloponnese</a><a href="/greece/crete/">Crete</a><a href="/greece/cyclades/">Cyclades</a><!-- GREECE_FOOTER_END -->';
  fs.writeFileSync(footerPath, updateMarked(fs.readFileSync(footerPath, 'utf8'), 'GREECE_FOOTER_START', 'GREECE_FOOTER_END', footerBlock, '<!-- SPAIN_FOOTER_END -->'));
}

function addHomepageAndAbout() {
  const homePath = path.join(root, 'index.html');
  let home = fs.readFileSync(homePath, 'utf8');
  const card = `<!-- GREECE_HOME_START --><a class="destination-card featured" href="/greece/"><div class="destination-copy"><small>Europe · New complete country</small><h3>Greece</h3><p>Choose eight mainland and island regions through real rail, coach, ferry, heat and last-mile decisions.</p><span class="card-arrow">Plan Greece →</span></div></a><!-- GREECE_HOME_END -->`;
  home = updateMarked(home, 'GREECE_HOME_START', 'GREECE_HOME_END', card, '<!-- SPAIN_HOME_END -->');
  home = home.replace(/\b14 countries live\b/g, '15 countries live')
    .replace(/Spain adds eight regional guides and 24 focused routes across rail cities, Atlantic towns, Mediterranean coasts and volcanic islands\./, 'Greece adds eight mainland and island regions with focused routes shaped by rail, coach, ferry, heat and last-mile access.')
  .replace(/Open the newest country guide →/g, 'Open the Greece country atlas →')
  .replace(/(<a class="text-link" href=")\/spain\/("[^>]*>Open the Greece country atlas)/g, '$1/greece/$2')
    .replace(/<title>TripDistill · Practical Travel Guides Across 14 Countries<\/title>/, '<title>TripDistill · Practical Travel Guides Across 15 Countries</title>')
    .replace(/Across 14 Countries/g, 'Across 15 Countries')
    .replace(/Explore Spain, Italy, the United Kingdom, France, Switzerland, Canada, the United States, Australia and Asia/g, 'Explore Greece, Spain, Italy, the United Kingdom, France, Switzerland, Canada, the United States, Australia and Asia');
  fs.writeFileSync(homePath, home);

  const aboutPath = path.join(root, 'about/index.html');
  let about = fs.readFileSync(aboutPath, 'utf8');
  about = about.replace(/TripDistill now covers Spain, Italy, the United Kingdom, France, Switzerland, Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand\./, 'TripDistill now covers Greece, Spain, Italy, the United Kingdom, France, Switzerland, Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand.');
  about = about.replace(/Spain adds eight regional hubs and 24 focused routes built around rail, local transit, heat, island crossings, lodging bases and route-specific alternatives; each page includes planning detail, official sources and visible image provenance\./, 'Greece adds eight mainland and island hubs with 24 focused local routes built around rail, regional coaches, city transit, island crossings, lodging bases and route-specific alternatives; each page includes planning detail and official sources. Its route schematics are original TripDistill diagrams rather than third-party photographs.');
  fs.writeFileSync(aboutPath, about);
}

function addSearchRecords() {
  const searchPath = path.join(root, 'data/search-index.json');
  const records = JSON.parse(fs.readFileSync(searchPath, 'utf8'));
  const incoming = [{ title: 'Greece Travel Guide', url: '/greece/', parent: 'Europe', type: 'Country', summary: 'Plan Greece through eight mainland and island regions. Compare rail, KTEL, city networks and ferry transfers with practical stay and weather decisions.', keywords: ['Greece', 'Athens', 'Cyclades', 'Crete', 'Meteora', 'Delphi', 'ferry', 'KTEL'] }];
  for (const cluster of greeceClusters) {
    incoming.push({ title: cluster.name, url: clusterRoute(cluster), parent: 'Greece', type: 'Regional guide', summary: cluster.summary, keywords: [cluster.name, cluster.region, 'Greece', 'transport', 'stay'] });
    for (const guide of cluster.guides) incoming.push({ title: guide.name, url: guideRoute(guide), parent: cluster.name, type: 'Local guide', summary: guide.summary, keywords: [guide.name, cluster.name, guide.theme, 'Greece'] });
  }
  const replacements = new Map(incoming.map((item) => [item.url, item]));
  const merged = records.map((record) => {
    const update = replacements.get(record.url);
    if (!update) return record;
    replacements.delete(record.url);
    return update;
  });
  merged.push(...replacements.values());
  fs.writeFileSync(searchPath, JSON.stringify(merged, null, 2) + '\n');
}

function writeDiagramAssets() {
  const imageRoot = path.join(root, 'assets/images');
  fs.mkdirSync(imageRoot, { recursive: true });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#173640"/><path d="M70 440c120-120 170-20 285-100s180-80 260-15 140 22 205-70 128-87 225-5v210c-103-10-152 25-225 8s-112-43-186 5-171 75-257 12-188-13-307 35z" fill="#e7eee6"/><path d="M105 420c113-71 164-52 260-77s134-69 229-16 132 27 197-52 154-53 218 3" fill="none" stroke="#bc9a54" stroke-width="14" stroke-linecap="round" stroke-dasharray="1 29"/><g fill="#e08a61" stroke="#173640" stroke-width="7"><circle cx="186" cy="402" r="25"/><circle cx="378" cy="335" r="21"/><circle cx="567" cy="322" r="25"/><circle cx="751" cy="303" r="19"/><circle cx="910" cy="245" r="23"/><circle cx="1035" cy="281" r="17"/></g><g fill="#e3d7bc"><circle cx="490" cy="475" r="15"/><circle cx="583" cy="500" r="10"/><circle cx="743" cy="473" r="13"/><circle cx="834" cy="511" r="9"/></g><text x="72" y="105" fill="#f4f1e7" font-family="Georgia,serif" font-size="62">Greece / sea and land routes</text><text x="76" y="156" fill="#c7d6ce" font-family="Arial,sans-serif" font-size="24">Original TripDistill schematic · not to scale · no timetable implied</text></svg>`;
  fs.writeFileSync(path.join(imageRoot, 'greece-atlas.svg'), svg);
}

function writePages() {
  const countryPath = path.join(root, 'greece/index.html');
  fs.mkdirSync(path.dirname(countryPath), { recursive: true });
  fs.writeFileSync(countryPath, countryPage());
  for (const [index, cluster] of greeceClusters.entries()) {
    const file = path.join(root, clusterRoute(cluster).slice(1), 'index.html');
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, clusterPage(cluster, index));
  }
  for (const [index, guide] of greeceGuides.entries()) {
    const file = path.join(root, guideRoute(guide).slice(1), 'index.html');
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, guidePage(guide, index));
  }
}

writeDiagramAssets();
writePages();
addNavigation();
addHomepageAndAbout();
addSearchRecords();
console.log(`Greece source generated: 1 country overview, ${greeceClusters.length} regional hubs, ${greeceGuides.length} focused local guides (${greeceRoutes.length} English routes).`);
