import fs from 'node:fs';
import path from 'node:path';
import { franceClusters, franceCountrySources, franceGuides } from '../data/france-guides.mjs';
import { switzerlandClusters } from '../data/switzerland-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const reviewDate = '19 September 2026';
const isoDate = '2026-09-19';
const siteCss = '/css/site.css?v=20260904-1';
const countryCss = '/css/france.css?v=20260919-1';
const fieldCss = '/css/france-field.css?v=20260919-1';
const mainJs = '/js/main.js?v=20260911-1';
const adsenseJs = '/js/adsense.js?v=20260826-9';
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');
const absolute = (route) => `https://tripdistill.com${route}`;
const routeFile = (route) => path.join(root, route.replace(/^\//, ''), 'index.html');
const compact = (value, maximum = 155) => {
  const text = String(value).replace(/\s+/g, ' ').trim();
  if (text.length <= maximum) return text;
  return text.slice(0, maximum - 1).replace(/\s+\S*$/, '') + '…';
};
const metaDescription = (value) => {
  let text = String(value).replace(/\s+/g, ' ').trim();
  if (text.length < 120) text += ' Compare access, reservations, timing, alternatives and the return before committing the day.';
  if (text.length > 170) text = text.slice(0, 167).replace(/\s+\S*$/, '') + '…';
  return text;
};

function hreflang(route) {
  return locales.map(([language, prefix]) => `<link rel="alternate" hreflang="${language}" href="${absolute(prefix + route)}">`).join('')
    + `<link rel="alternate" hreflang="x-default" href="${absolute(route)}">`;
}

function breadcrumb(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, item], index) => ({ '@type': 'ListItem', position: index + 1, name, item }))
  };
}

function licenseUrl(license) {
  if (/^CC0$/i.test(license)) return 'https://creativecommons.org/publicdomain/zero/1.0/';
  if (/^Public domain$/i.test(license)) return 'https://creativecommons.org/publicdomain/mark/1.0/';
  const match = String(license).match(/^CC (BY(?:-SA)?) ([1-4](?:\.\d)?)(?: ([a-z]{2}))?$/i);
  return match ? `https://creativecommons.org/licenses/${match[1].toLowerCase()}/${match[2]}/${match[3] ? `${match[3]}/` : ''}` : '';
}

function imageCredit(image) {
  const license = licenseUrl(image.license);
  const licenseText = license ? `<a href="${license}" target="_blank" rel="noopener">${escapeHtml(image.license)}</a>` : escapeHtml(image.license);
  return `<li><a href="${escapeHtml(image.source)}" target="_blank" rel="noopener">${escapeHtml(image.label)}</a> — ${escapeHtml(image.creator)}, ${licenseText}. ${escapeHtml(image.editNote)}</li>`;
}

function sourceList(sources) {
  return sources.map(([url, label]) => `<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(label)}</a>.</li>`).join('');
}

function uniqueSources(...groups) {
  const seen = new Set();
  return groups.flat().filter(([url]) => {
    if (seen.has(url)) return false;
    seen.add(url);
    return true;
  });
}

function sharedHead({ title, description, route, image, type = 'article', field = false }) {
  return `<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${absolute(route)}">${hreflang(route)}
  <meta name="theme-color" content="#183f56"><meta property="og:type" content="${type}"><meta property="og:site_name" content="TripDistill"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${absolute(route)}"><meta property="og:image" content="${absolute(image.src)}"><meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/favicon.ico" sizes="any"><link rel="stylesheet" href="${siteCss}"><link rel="stylesheet" href="${countryCss}">${field ? `<link rel="stylesheet" href="${fieldCss}">` : ''}`;
}

function shellStart(mainOpen) {
  return `<a class="skip-link" href="#main-content">Skip to content</a><div id="layout-header"></div><div class="site-shell"><div class="mobile-overlay" data-mobile-overlay aria-hidden="true"></div><aside id="layout-sidebar" class="sidebar" aria-label="TripDistill navigation"></aside>${mainOpen}`;
}
const shellEnd = () => `</div><div id="layout-footer"></div><script src="${mainJs}" defer></script>`;
const ad = '<section class="section compact" aria-label="Advertisement"><div class="ad-slot" data-ad-slot><div><strong>Advertisement</strong><span>Responsive AdSense placement reserved</span></div></div></section>';

function faqSchema(faq) {
  return { '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) };
}

function guideSchema(guide) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', '@id': `${absolute(guide.url)}#article`, headline: `${guide.name} Travel Guide`, description: guide.summary, inLanguage: 'en', datePublished: isoDate, dateModified: isoDate, mainEntityOfPage: absolute(guide.url), image: absolute(guide.image.src), about: { '@type': 'TouristDestination', name: guide.name }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
      breadcrumb([['Home', absolute('/')], ['France', absolute('/france/')], [guide.hubName, absolute(`/france/${guide.hubSlug}/`)], [guide.name, absolute(guide.url)]]),
      faqSchema(guide.faq)
    ]
  };
}

function guidePage(guide, cluster, guideIndex) {
  const variant = (guideIndex % 12) + 1;
  const description = metaDescription(`${guide.summary} ${guide.access}`);
  const planningSources = uniqueSources(guide.sources, cluster.sources);
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>${sharedHead({ title: `${guide.name} Travel Guide | TripDistill France`, description, route: guide.url, image: guide.image, field: true })}<script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(guideSchema(guide))}</script></head>
<body data-page="fr-${escapeHtml(cluster.slug)}-${escapeHtml(guide.slug)}" data-parent-page="france" data-country="france" data-region="${escapeHtml(cluster.slug)}">
${shellStart(`<main id="main-content" class="page-content fr-field" data-fr-family="${escapeHtml(cluster.family)}" data-fr-layout="${escapeHtml(guide.layout)}" data-fr-variant="${variant}" data-fr-instrument="${escapeHtml(guide.instrument)}">`)}
  <nav class="fr-breadcrumb" aria-label="Breadcrumb"><a href="/france/">France</a><span>→</span><a href="/france/${cluster.slug}/">${escapeHtml(cluster.name)}</a><span>→</span><strong>${escapeHtml(guide.name)}</strong></nav>
  <section class="fr-field-hero"><div class="fr-field-copy"><span class="fr-kicker">${escapeHtml(cluster.region)} · route file ${String(guideIndex + 1).padStart(2, '0')}</span><h1>${escapeHtml(guide.name)}</h1><p>${escapeHtml(guide.summary)}</p><div class="fr-purpose"><small>Decision this guide solves</small><strong>${escapeHtml(guide.purpose)}</strong></div><div class="hero-actions"><a class="button primary" href="#route">Run the route</a><a class="button secondary" href="#failure-points">See the failure points</a></div></div><figure><img src="${guide.image.src}" width="1600" height="1066" fetchpriority="high" alt="${escapeHtml(guide.image.alt)}"><figcaption>${escapeHtml(guide.image.label)} · ${escapeHtml(guide.image.license)}</figcaption></figure><aside class="fr-ticket"><small>${escapeHtml(guide.layout)}</small><strong>${escapeHtml(guide.instrument)}</strong><span>reviewed ${reviewDate}</span></aside></section>
  <section class="fr-choice-deck" aria-label="Three ways to shape the visit">${guide.choices.map(([title, copy], index) => `<article><span>0${index + 1}</span><h2>${escapeHtml(title)}</h2><p>${escapeHtml(copy)}</p></article>`).join('')}</section>
  ${ad}
  <section class="fr-contract"><div><span class="fr-label">Access first</span><h2>Know where the day actually begins.</h2><p>${escapeHtml(guide.access)}</p></div><div><span class="fr-label">Trade-off</span><h2>Choose what the route leaves out.</h2><p>${escapeHtml(guide.tradeoff)}</p></div><aside><span class="fr-label">Time envelope</span><p>${escapeHtml(guide.duration)}</p><span class="fr-label">Combine only when it helps</span><p>${escapeHtml(guide.combine)}</p></aside></section>
  <section class="fr-regional-context"><header><span>Regional operating model</span><h2>Fit this route into ${escapeHtml(cluster.name)}, not into an isolated checklist.</h2><p>${escapeHtml(cluster.hubIntro)}</p></header><div><article><small>Base strategy</small><p>${escapeHtml(cluster.stay)}</p></article><article><small>Transfer system</small><p>${escapeHtml(cluster.transfer)}</p></article><article><small>Season gate</small><p>${escapeHtml(cluster.season)}</p></article><article><small>Regional fallback</small><p>${escapeHtml(cluster.fallback)}</p></article></div></section>
  <section class="fr-route" id="route"><header><span>Four-stage operating line</span><h2>Arrive, read the place, commit, then protect the return.</h2><p>${escapeHtml(guide.verify)}</p></header><ol>${guide.route.map(([label, title, copy], index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><small>${escapeHtml(label)}</small><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></li>`).join('')}</ol></section>
  <section class="fr-live-check"><div><span class="fr-label">Open before you go</span><h2>Use the live operator, monument and destination sources for this route.</h2><p>The route explains the decision; these official pages control current admission, transport, weather, access and closures.</p></div><ul>${sourceList(planningSources)}</ul></section>
  <section class="fr-fallback"><div><span class="fr-label">Lower-risk fallback</span><h2>Keep the day useful when the headline plan disappears.</h2><p>${escapeHtml(guide.fallback)}</p></div><blockquote>${escapeHtml(guide.verify)}</blockquote></section>
  <section class="fr-watch" id="failure-points"><header><span>Three failure points</span><h2>Change the plan before the problem compounds.</h2></header><div>${guide.watch.map(([title, copy], index) => `<article><b>0${index + 1}</b><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></article>`).join('')}</div></section>
  <section class="fr-related"><header><span>Same regional system</span><h2>Other ways to use ${escapeHtml(cluster.name)}.</h2></header><div>${cluster.guides.filter((item) => item.slug !== guide.slug).map((item) => `<a href="${item.url}"><img src="${item.image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(item.image.alt)}"><div><small>${escapeHtml(item.instrument)}</small><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(compact(item.purpose, 125))}</p><strong>Open this guide →</strong></div></a>`).join('')}</div></section>
  <section class="fr-faq"><header><span>Planning answers</span><h2>${escapeHtml(guide.name)} FAQ</h2></header><div class="faq-list">${guide.faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>
  <section class="section sources"><h2>Official sources and photo credits</h2><p>Planning facts and image licensing were reviewed on ${reviewDate}. Admission, transport, roads, trails, sea, fire, weather and local access can change; reopen the linked authority or operator before travel.</p><ul>${sourceList(planningSources)}${cluster.guides.map((item) => imageCredit(item.image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
</main>${shellEnd()}</body></html>`;
}

function hubFaq(cluster) {
  return [
    [`How long should I give ${cluster.name}?`, cluster.stay],
    [`What transport decision matters most around ${cluster.name}?`, cluster.transfer],
    ['What should I do if weather, access or transport changes?', cluster.fallback]
  ];
}

function hubSchema(cluster) {
  const route = `/france/${cluster.slug}/`;
  return {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'Article', '@id': `${absolute(route)}#article`, headline: `${cluster.name} Travel Guide`, description: cluster.hubIntro, inLanguage: 'en', datePublished: isoDate, dateModified: isoDate, mainEntityOfPage: absolute(route), image: absolute(cluster.guides[0].image.src), about: { '@type': 'TouristDestination', name: cluster.name }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
      breadcrumb([['Home', absolute('/')], ['France', absolute('/france/')], [cluster.name, absolute(route)]]), faqSchema(hubFaq(cluster))
    ]
  };
}

function hubPage(cluster, clusterIndex) {
  const route = `/france/${cluster.slug}/`;
  const hero = cluster.guides[0].image;
  const faq = hubFaq(cluster);
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>${sharedHead({ title: `${cluster.name} Travel Guide — 3 Complete Routes | TripDistill`, description: metaDescription(`${cluster.hubIntro} ${cluster.transfer}`), route, image: hero })}<script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(hubSchema(cluster))}</script></head>
<body data-page="fr-${escapeHtml(cluster.slug)}" data-parent-page="france" data-country="france" data-region="${escapeHtml(cluster.slug)}">
${shellStart(`<main id="main-content" class="page-content fr-hub" data-fr-family="${escapeHtml(cluster.family)}" data-fr-hub-variant="${(clusterIndex % 8) + 1}">`)}
  <section class="fr-hub-hero"><div class="fr-hub-copy"><span class="fr-kicker">France route book · ${String(clusterIndex + 1).padStart(2, '0')}</span><h1>${escapeHtml(cluster.name)}</h1><p class="fr-tagline">${escapeHtml(cluster.tagline)}</p><p>${escapeHtml(cluster.hubIntro)}</p><div class="hero-actions"><a class="button primary" href="#route-files">Choose a route file</a><a class="button secondary" href="#operating-model">Read the operating model</a></div></div><figure><img src="${hero.src}" width="1600" height="1066" fetchpriority="high" alt="${escapeHtml(hero.alt)}"><figcaption>${escapeHtml(hero.label)} · ${escapeHtml(hero.license)}</figcaption></figure><div class="fr-hub-index"><small>${escapeHtml(cluster.label)}</small><strong>3</strong><span>independent planning routes</span></div></section>
  <section class="fr-hub-contract" id="operating-model"><article><span>01 · Base</span><h2>Sleep where the useful departures are.</h2><p>${escapeHtml(cluster.stay)}</p></article><article><span>02 · Transfer</span><h2>Solve the complete last mile.</h2><p>${escapeHtml(cluster.transfer)}</p></article><article><span>03 · Season</span><h2>Let current conditions edit the map.</h2><p>${escapeHtml(cluster.season)}</p></article><article><span>04 · Fallback</span><h2>Keep a real lower-risk day.</h2><p>${escapeHtml(cluster.fallback)}</p></article></section>
  ${ad}
  <section class="fr-hub-guides" id="route-files"><header><span>Three separate decisions</span><h2>Choose the route that answers the day you actually have.</h2><p>Each file has its own access contract, sequence, fallback, failure points, official sources and licensed image record.</p></header><div>${cluster.guides.map((guide, index) => `<a class="fr-guide-card" href="${guide.url}" data-fr-layout="${escapeHtml(guide.layout)}"><img src="${guide.image.src}" width="1600" height="1066" loading="${index === 0 ? 'eager' : 'lazy'}" alt="${escapeHtml(guide.image.alt)}"><div><small>Route ${String(index + 1).padStart(2, '0')} · ${escapeHtml(guide.instrument)}</small><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(guide.purpose)}</p><strong>Open the complete route →</strong></div></a>`).join('')}</div></section>
  <section class="fr-comparison"><header><span>Before you choose</span><h2>Three routes, three different sacrifices.</h2></header><div>${cluster.guides.map((guide) => `<article><div><small>${escapeHtml(guide.instrument)}</small><h3>${escapeHtml(guide.name)}</h3></div><p><strong>Access:</strong> ${escapeHtml(guide.access)}</p><p><strong>Trade-off:</strong> ${escapeHtml(guide.tradeoff)}</p><p><strong>Time:</strong> ${escapeHtml(guide.duration)}</p></article>`).join('')}</div></section>
  <section class="fr-hub-sourceband"><div><span>Live planning desk</span><h2>These regional sources control the moving parts.</h2><p>Use the guide for structure, then reopen official transport, destination and weather information for the exact travel date.</p></div><ul>${sourceList(cluster.sources)}</ul></section>
  <section class="fr-hub-faq"><div><span>Regional answers</span><h2>${escapeHtml(cluster.name)} FAQ</h2></div><div class="faq-list">${faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>
  <section class="section sources"><h2>Official sources and photo credits</h2><p>Planning facts and image licensing were reviewed on ${reviewDate}. Verify current tickets, services, roads, weather and site access before travel.</p><ul>${sourceList(cluster.sources)}${cluster.guides.map((guide) => imageCredit(guide.image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
</main>${shellEnd()}</body></html>`;
}

const countryFaq = [
  ['How many bases suit a first trip to France?', 'For seven to ten days, two bases usually protect more useful time than a rapid national circuit. For twelve to fourteen days, three bases can work when each sits on a clear rail corridor or replaces a genuinely long regional transfer.'],
  ['Do I need a rail pass?', 'Not automatically. Price the exact high-speed and regional journeys, read reservation requirements, and compare flexibility with advance fares. Urban transit, rural buses and ferries are separate products.'],
  ['Can I see Paris and Provence in one week?', 'Yes, but keep the trip to Paris plus one southern base and count the station transfer, hotel change and first or last partial day. Do not add several rural day trips to both ends.'],
  ['Do I need a car outside Paris?', 'Many major cities and several excursions work by rail, but rural châteaux, vineyards, mountain valleys, wetlands and Corsican coasts may need a car, driver, tour, bicycle or seasonal bus. Decide route by route.'],
  ['When should I reserve?', 'Reserve the high-priority timed monument, high-speed train, major cellar or limited-access natural route once the itinerary is stable. Keep weather-dependent mountain, sea and fire-risk days flexible where operators allow.']
];

function countrySchema() {
  return {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebPage', '@id': `${absolute('/france/')}#page`, name: 'France Travel Guide', description: 'Plan France through twenty complete regional hubs and sixty route-specific city, coast, vineyard, mountain and island guides.', inLanguage: 'en', datePublished: isoDate, dateModified: isoDate, primaryImageOfPage: absolute(franceClusters[0].guides[0].image.src), about: { '@type': 'Country', name: 'France' }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
      breadcrumb([['Home', absolute('/')], ['France', absolute('/france/')]]), faqSchema(countryFaq)
    ]
  };
}

const countryGroups = [
  [['capital-north'], '01 · Capital and northern gateways', 'Build the first trip from city corridors, not a national checklist.', 'Paris, its regional estates, Lille, Normandy and Brittany combine dense rail cities with very different last-mile contracts for palaces, memorial landscapes, tides and peninsulas.'],
  [['valleys-east'], '02 · Valleys and eastern routes', 'Let estates, cellars, rivers and altitude set the day.', 'The Loire Valley, Champagne, Alsace, Burgundy, Lyon and the French Alps reward fewer bases, booked interiors and a clear distinction between a rail gateway and the rural or mountain site beyond it.'],
  [['atlantic-southwest'], '03 · Atlantic and southwest', 'Read estuary, cave, brick city and mountain weather separately.', 'Bordeaux, Dordogne, Toulouse, Albi, Carcassonne and the Basque-Pyrenean gateways use regional rail well until vineyards, caves, surf or mountain roads create another operating layer.'],
  [['mediterranean-island'], '04 · Mediterranean and island', 'Heat, fire, sea state and road pressure edit the map.', 'Languedoc, Provence, Marseille, the Riviera and Corsica need live access decisions for wetlands, villages, national parks, coast trains, ferries and island roads.']
];

function countryCards(bands) {
  return franceClusters.filter((cluster) => bands.includes(cluster.band)).map((cluster) => {
    const image = cluster.guides[0].image;
    return `<a class="fr-country-card" href="/france/${cluster.slug}/" data-family="${escapeHtml(cluster.family)}"><img src="${image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(image.alt)}"><div><small>${escapeHtml(cluster.region)} · 3 complete routes</small><h3>${escapeHtml(cluster.name)}</h3><p>${escapeHtml(compact(cluster.hubIntro, 160))}</p><strong>Open the regional route book →</strong></div><span>${String(franceClusters.indexOf(cluster) + 1).padStart(2, '0')}</span></a>`;
  }).join('');
}

function countryPage() {
  const hero = franceClusters[0].guides[0].image;
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>${sharedHead({ title: 'France Travel Guide — 20 Complete Regional Hubs | TripDistill', description: metaDescription('Plan France through twenty complete regional hubs and sixty focused guides covering city, rail, palace, vineyard, coast, mountain and island decisions.'), route: '/france/', image: hero, type: 'website' })}<script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(countrySchema())}</script></head>
<body data-page="france" data-country="france">
${shellStart('<main id="main-content" class="page-content fr-country">')}
  <section class="fr-country-hero"><div class="fr-country-copy"><span class="fr-kicker">Correspondence atlas · reviewed ${reviewDate}</span><h1>France <span>choose the route contract before the postcard.</span></h1><p>High-speed rail makes distant cities look adjacent, but stations, timed monuments, cellar appointments, rural buses, mountain lifts, sea state and fire controls decide the usable day. Twenty complete hubs make those transitions visible before you book.</p><div class="hero-actions"><a class="button primary" href="#regions">Compare 20 hubs</a><a class="button secondary" href="#network">Read the national operating model</a></div><div class="fr-country-facts"><div><strong>20</strong><span>regional hubs</span></div><div><strong>60</strong><span>focused guides</span></div><div><strong>5</strong><span>static languages</span></div></div></div><figure><img src="${hero.src}" width="1600" height="1066" fetchpriority="high" alt="${escapeHtml(hero.alt)}"><figcaption>${escapeHtml(hero.label)} · ${escapeHtml(hero.license)}</figcaption></figure><div class="fr-correspondence" aria-hidden="true"><span>CITY</span><i></i><span>REGION</span><i></i><span>LAST MILE</span><i></i><span>RETURN</span></div></section>
  <section class="fr-country-principles"><article><span>01</span><h2>Choose a corridor, not a wish list.</h2><p>Paris–Normandy, the Loire, Alsace–Burgundy, Bordeaux, Occitanie and the Mediterranean each reward a small number of connected bases.</p></article><article><span>02</span><h2>Distinguish station from destination.</h2><p>A station named for a palace, dune, TGV city or mountain region may still require a shuttle, bus, bicycle, taxi or long walk.</p></article><article><span>03</span><h2>Protect one flexible day.</h2><p>Weather, strikes, fire controls, sea state and monument operations change. Keep a complete city or lower-risk route in the same base.</p></article></section>
  ${ad}
  <div id="regions">${countryGroups.map(([bands, kicker, heading, copy]) => `<section class="fr-country-band"><div class="fr-band-heading"><span>${kicker}</span><h2>${heading}</h2><p>${copy}</p></div><div class="fr-country-grid">${countryCards(bands)}</div></section>`).join('')}</div>
  <section class="fr-country-section" id="network"><div class="fr-band-heading"><span>National operating model</span><h2>Fast rail shortens the trunk, not the complete journey.</h2><p>Plan from hotel door to site gate, and keep regional transport, admission and return as separate decisions.</p></div><div class="fr-network-grid"><article><small>TGV and Intercités</small><h3>Reserve the long spine that matters.</h3><p>High-speed and intercity trains can save a full travel day, but station identity, advance fares, reservations and luggage still determine whether the connection is comfortable.</p></article><article><small>TER and city networks</small><h3>Regional rail finishes many city routes.</h3><p>Use TER for places such as Albi, Saint-Émilion, Arcachon and the Riviera, then read the local tram, bus or walking contract from the actual station.</p></article><article><small>Rural last miles</small><h3>Châteaux, vineyards and villages need another mode.</h3><p>Seasonal buses, bicycles, tours, taxis and cars can all work. Verify the return, Sunday pattern and appointment before committing the first direction.</p></article><article><small>Mountains, sea and islands</small><h3>Operations can override the calendar.</h3><p>Lift status, fire closures, marine weather, ferry check-in and island roads are live conditions. A booked hotel does not make a closed route available.</p></article></div></section>
  <section class="fr-country-section"><div class="fr-band-heading"><span>Trip-length board</span><h2>Give each base enough days to absorb its own moving parts.</h2></div><div class="fr-trip-grid"><article><strong>5–7 days</strong><h3>Paris + one connected region</h3><p>Choose Normandy, Loire, Champagne or another corridor with one or two bases. Protect a Paris weather or closure fallback.</p></article><article><strong>8–10 days</strong><h3>Two strong systems</h3><p>Pair Paris with Provence, Bordeaux, Alsace or the Alps, or skip Paris for two regional bases. Count the hotel-change day honestly.</p></article><article><strong>12–14 days</strong><h3>Three bases with contrast</h3><p>Add a coast, mountain or island only when it changes the travel argument. Avoid using the extra days to create daily check-outs.</p></article></div></section>
  <section class="fr-country-section"><div class="fr-band-heading"><span>Season and access board</span><h2>France runs on several weather and event clocks.</h2></div><div class="fr-season-grid"><article><strong>Winter</strong><p>Cities, museums and cellars remain useful, while mountain operations, island services and rural openings need precise checks.</p></article><article><strong>Spring</strong><p>Gardens and walking days expand, but high trails can retain snow and Atlantic or Mediterranean weather remains variable.</p></article><article><strong>Summer</strong><p>Long daylight helps, yet heat, wildfire controls, coast traffic and timed admissions make early starts and backups essential.</p></article><article><strong>Autumn</strong><p>Harvest changes vineyard access, storms can affect mountains and sea, and shortening daylight makes rural returns less forgiving.</p></article></div></section>
  <section class="fr-country-section fr-entry-board"><div class="fr-band-heading"><span>Arrival decisions</span><h2>Do not book the onward train until the airport or ferry transfer is real.</h2></div><div><article><h3>Paris airports</h3><p>Charles de Gaulle and Orly use different rail and Metro links, fares and disruption patterns. Leave a wide buffer before a separate long-distance ticket.</p></article><article><h3>Regional airports</h3><p>Nice, Lyon, Marseille, Toulouse, Bordeaux and others can remove a cross-country transfer. Compare the complete route to the regional base, not the headline airfare.</p></article><article><h3>Ferries and Corsica</h3><p>Port, check-in, vehicle rules and sea state matter. Match the island arrival to the coast you plan to explore instead of crossing Corsica immediately.</p></article></div></section>
  <section class="fr-country-section"><div class="fr-band-heading"><span>Planning answers</span><h2>France FAQ</h2></div><div class="faq-list">${countryFaq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>
  <section class="section sources"><h2>Official sources and photo credits</h2><p>Country planning and image licensing were reviewed on ${reviewDate}. Entry, fares, reservations, roads, weather, fire, sea and operating status change; verify directly before travel.</p><ul>${sourceList(franceCountrySources)}${franceClusters.map((cluster) => imageCredit(cluster.guides[0].image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
</main>${shellEnd()}</body></html>`;
}

function replaceMarked(html, start, end, replacement) {
  const startAt = html.indexOf(start);
  if (startAt === -1) return html;
  const endAt = html.indexOf(end, startAt);
  if (endAt === -1) throw new Error(`Found ${start} without ${end}`);
  return html.slice(0, startAt) + replacement + html.slice(endAt + end.length);
}

function insertAfterMarker(html, marker, block) {
  if (!html.includes(marker)) throw new Error(`Missing integration marker: ${marker}`);
  return html.replace(marker, `${marker}\n${block}`);
}

function switzerlandNavBlock() {
  const chapters = switzerlandClusters.map((cluster) => `<details name="switzerland-chapters" class="sidebar-accordion sidebar-chapters" data-sidebar-id="chapters-ch-${cluster.slug}"><summary><span class="sidebar-summary-main">${escapeHtml(cluster.name)}</span><span class="sidebar-summary-meta">3</span></summary><div class="sidebar-links sidebar-accordion-body"><a class="sidebar-link" href="/switzerland/${cluster.slug}/" data-nav-key="ch-${cluster.slug}">${escapeHtml(cluster.name)}</a>${cluster.guides.map((guide) => `<a class="sidebar-link" href="${guide.url}" data-nav-key="ch-${cluster.slug}-${guide.slug}">${escapeHtml(guide.name)}</a>`).join('')}</div></details>`).join('');
  return `<!-- SWITZERLAND_NAV_START --><details class="sidebar-accordion sidebar-country" data-sidebar-id="switzerland"><summary><span class="sidebar-summary-main">Switzerland</span><span class="sidebar-summary-meta">16</span></summary><div class="sidebar-links sidebar-accordion-body"><a class="sidebar-link" href="/switzerland/" data-nav-key="switzerland">Switzerland guide</a>${chapters}</div></details><!-- SWITZERLAND_NAV_END -->`;
}

function franceNavBlock() {
  const chapters = franceClusters.map((cluster) => `<details name="france-chapters" class="sidebar-accordion sidebar-chapters" data-sidebar-id="chapters-fr-${cluster.slug}"><summary><span class="sidebar-summary-main">${escapeHtml(cluster.name)}</span><span class="sidebar-summary-meta">3</span></summary><div class="sidebar-links sidebar-accordion-body"><a class="sidebar-link" href="/france/${cluster.slug}/" data-nav-key="fr-${cluster.slug}">${escapeHtml(cluster.name)}</a>${cluster.guides.map((guide) => `<a class="sidebar-link" href="${guide.url}" data-nav-key="fr-${cluster.slug}-${guide.slug}">${escapeHtml(guide.name)}</a>`).join('')}</div></details>`).join('');
  return `<!-- FRANCE_NAV_START --><details class="sidebar-accordion sidebar-country" data-sidebar-id="france"><summary><span class="sidebar-summary-main">France</span><span class="sidebar-summary-meta">20</span></summary><div class="sidebar-links sidebar-accordion-body"><a class="sidebar-link" href="/france/" data-nav-key="france">France guide</a>${chapters}</div></details><!-- FRANCE_NAV_END -->`;
}

function updateSidebar() {
  const file = path.join(root, 'components', 'sidebar.html');
  let html = fs.readFileSync(file, 'utf8');
  const europeStart = '<!-- EUROPE_NAV_START -->';
  const europeEnd = '<!-- EUROPE_NAV_END -->';
  const block = `${europeStart}<details class="sidebar-accordion sidebar-continent" data-sidebar-id="europe"><summary><span class="sidebar-summary-main"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>Europe</span></summary><div class="sidebar-accordion-body">${switzerlandNavBlock()}${franceNavBlock()}</div></details>${europeEnd}`;
  if (html.includes(europeStart)) html = replaceMarked(html, europeStart, europeEnd, block);
  else if (html.includes('<!-- SWITZERLAND_NAV_START -->')) html = replaceMarked(html, '<!-- SWITZERLAND_NAV_START -->', '<!-- SWITZERLAND_NAV_END -->', block);
  else html = insertAfterMarker(html, '<!-- USA_NAV_END -->', block);
  fs.writeFileSync(file, html);
}

function updateHeader() {
  const file = path.join(root, 'components', 'header.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- FRANCE_HEADER_START -->';
  const end = '<!-- FRANCE_HEADER_END -->';
  const block = `${start}<a class="nav-link" href="/france/" data-nav-key="france">France</a>${end}`;
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- SWITZERLAND_HEADER_END -->', block);
  fs.writeFileSync(file, html);
}

function updateFooter() {
  const file = path.join(root, 'components', 'footer.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- FRANCE_FOOTER_START -->';
  const end = '<!-- FRANCE_FOOTER_END -->';
  const block = `${start}<a href="/france/">France</a><a href="/france/paris/">Paris</a><a href="/france/loire-valley/">Loire Valley</a><a href="/france/bordeaux-gironde/">Bordeaux</a><a href="/france/provence-inland/">Provence</a><a href="/france/cote-dazur/">Côte d’Azur</a>${end}`;
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- SWITZERLAND_FOOTER_END -->', block);
  fs.writeFileSync(file, html);
}

function updateSearch() {
  const file = path.join(root, 'data', 'search-index.json');
  const records = JSON.parse(fs.readFileSync(file, 'utf8')).filter((item) => !item.url.startsWith('/france/'));
  records.push({ title: 'France Travel Guide', url: '/france/', parent: 'Europe', type: 'Country', summary: 'Plan France through twenty complete regional hubs and sixty focused guides for cities, palaces, vineyards, coasts, mountains and Corsica.', keywords: ['France', 'French travel', 'Europe', 'France rail'] });
  for (const cluster of franceClusters) {
    records.push({ title: cluster.name, url: `/france/${cluster.slug}/`, parent: 'France', type: 'Regional guide', summary: cluster.hubIntro, keywords: [cluster.name, cluster.region, cluster.band] });
    for (const guide of cluster.guides) records.push({ title: guide.name, url: guide.url, parent: cluster.name, type: 'Local guide', summary: guide.summary, keywords: [guide.name, cluster.name, guide.instrument, guide.layout] });
  }
  fs.writeFileSync(file, JSON.stringify(records, null, 2) + '\n');
}

function updateHome() {
  const file = path.join(root, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- FRANCE_HOME_START -->';
  const end = '<!-- FRANCE_HOME_END -->';
  const image = franceClusters[0].guides[0].image;
  const block = `${start}<a class="destination-card featured" href="/france/"><img src="${image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(image.alt)}"><div class="destination-copy"><small>Europe · New complete country</small><h3>France</h3><p>Compare twenty complete regional hubs and sixty focused guides across rail cities, châteaux, vineyards, coasts, mountains and Corsica.</p><span class="card-arrow">Plan France →</span></div></a>${end}`;
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- SWITZERLAND_HOME_END -->', block);
  const creditStart = '<!-- FRANCE_HOME_CREDIT_START -->';
  const creditEnd = '<!-- FRANCE_HOME_CREDIT_END -->';
  const credit = `${creditStart}<ul>${imageCredit(image)}</ul>${creditEnd}`;
  html = html.includes(creditStart) ? replaceMarked(html, creditStart, creditEnd, credit) : insertAfterMarker(html, '<!-- SWITZERLAND_HOME_CREDIT_END -->', credit);
  html = html.replace('10 countries live', '11 countries live');
  html = html.replace('Switzerland adds 16 complete regional hubs and 48 focused guides across rail cities, lake corridors, valleys and mountain systems.', 'France adds 20 complete regional hubs and 60 focused guides across cities, châteaux, vineyards, coasts, mountains and Corsica.');
  html = html.replace('Explore Switzerland, Canada, the United States, Australia and Asia', 'Explore France, Switzerland, Canada, the United States, Australia and Asia');
  html = html.replace('<a class="text-link" href="/australia/">Open the newest country guide →</a>', '<a class="text-link" href="/france/">Open the newest country guide →</a>');
  html = html.replace(/(?:France,\s*)*Switzerland, Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand are live\./, 'France, Switzerland, Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand are live.');
  html = html.replace('Practical Switzerland, Canada, United States, Australia and Asia country, city and regional travel guides.', 'Practical France, Switzerland, Canada, United States, Australia and Asia country, city and regional travel guides.');
  fs.writeFileSync(file, html);
}

function updateAbout() {
  const file = path.join(root, 'about', 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/TripDistill now covers[^<]*/, 'TripDistill now covers France, Switzerland, Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand. France adds 20 complete regional hubs and 60 focused guides built around rail, monument, rural last-mile, coast, mountain and island decisions; every destination URL is published only after useful planning detail, current official sources and visible image provenance are present.');
  fs.writeFileSync(file, html);
}

for (const [clusterIndex, cluster] of franceClusters.entries()) {
  const file = routeFile(`/france/${cluster.slug}/`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, hubPage(cluster, clusterIndex));
}
for (const [guideIndex, guide] of franceGuides.entries()) {
  const cluster = franceClusters.find((item) => item.slug === guide.hubSlug);
  const file = routeFile(guide.url);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, guidePage(guide, cluster, guideIndex));
}
const countryFile = routeFile('/france/');
fs.mkdirSync(path.dirname(countryFile), { recursive: true });
fs.writeFileSync(countryFile, countryPage());
updateSidebar();
updateHeader();
updateFooter();
updateSearch();
updateHome();
updateAbout();

console.log(`Generated France: 1 country page, ${franceClusters.length} hubs and ${franceGuides.length} focused guides (81 English routes), plus Europe navigation, home, about and search integration.`);
