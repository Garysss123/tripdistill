import fs from 'node:fs';
import path from 'node:path';
import { unitedKingdomClusters, unitedKingdomCountrySources, unitedKingdomGuides } from '../data/united-kingdom-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const reviewDate = '20 September 2026';
const isoDate = '2026-09-20';
const siteCss = '/css/site.css?v=20260904-1';
const countryCss = '/css/united-kingdom.css?v=20260920-1';
const fieldCss = '/css/united-kingdom-field.css?v=20260920-1';
const mainJs = '/js/main.js?v=20260911-1';
const adsenseJs = '/js/adsense.js?v=20260826-9';
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const absolute = (route) => `https://tripdistill.com${route}`;
const routeFile = (route) => path.join(root, route.replace(/^\//, ''), 'index.html');
const compact = (value, maximum = 155) => {
  const text = String(value).replace(/\s+/g, ' ').trim();
  return text.length <= maximum ? text : text.slice(0, maximum - 1).replace(/\s+\S*$/, '') + '…';
};
const metaDescription = (value) => {
  let text = String(value).replace(/\s+/g, ' ').trim();
  if (text.length < 120) text += ' Compare access, weather, bookings, alternatives and the return before committing the day.';
  if (text.length > 170) text = text.slice(0, 167).replace(/\s+\S*$/, '') + '…';
  return text;
};

function hreflang(route) {
  return locales.map(([language, prefix]) => `<link rel="alternate" hreflang="${language}" href="${absolute(prefix + route)}">`).join('')
    + `<link rel="alternate" hreflang="x-default" href="${absolute(route)}">`;
}

function breadcrumb(items) {
  return { '@type': 'BreadcrumbList', itemListElement: items.map(([name, item], index) => ({ '@type': 'ListItem', position: index + 1, name, item })) };
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

const sourceList = (sources) => sources.map(([url, label]) => `<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(label)}</a>.</li>`).join('');

function uniqueSources(...groups) {
  const seen = new Set();
  return groups.flat().filter(([url]) => !seen.has(url) && seen.add(url));
}

function sharedHead({ title, description, route, image, type = 'article', field = false }) {
  return `<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${absolute(route)}">${hreflang(route)}
  <meta name="theme-color" content="#24364b"><meta property="og:type" content="${type}"><meta property="og:site_name" content="TripDistill"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${absolute(route)}"><meta property="og:image" content="${absolute(image.src)}"><meta name="twitter:card" content="summary_large_image">
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
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'Article', '@id': `${absolute(guide.url)}#article`, headline: `${guide.name} Travel Guide`, description: guide.summary, inLanguage: 'en', datePublished: isoDate, dateModified: isoDate, mainEntityOfPage: absolute(guide.url), image: absolute(guide.image.src), about: { '@type': 'TouristDestination', name: guide.name }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
      breadcrumb([['Home', absolute('/')], ['United Kingdom', absolute('/united-kingdom/')], [guide.hubName, absolute(`/united-kingdom/${guide.hubSlug}/`)], [guide.name, absolute(guide.url)]]),
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
<head>${sharedHead({ title: `${guide.name} Travel Guide | TripDistill UK`, description, route: guide.url, image: guide.image, field: true })}<script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(guideSchema(guide))}</script></head>
<body data-page="uk-${escapeHtml(cluster.slug)}-${escapeHtml(guide.slug)}" data-parent-page="united-kingdom" data-country="united-kingdom" data-region="${escapeHtml(cluster.slug)}">
${shellStart(`<main id="main-content" class="page-content uk-field" data-uk-family="${escapeHtml(cluster.family)}" data-uk-layout="${escapeHtml(guide.layout)}" data-uk-variant="${variant}" data-uk-instrument="${escapeHtml(guide.instrument)}">`)}
  <nav class="uk-breadcrumb" aria-label="Breadcrumb"><a href="/united-kingdom/">United Kingdom</a><span>›</span><a href="/united-kingdom/${cluster.slug}/">${escapeHtml(cluster.name)}</a><span>›</span><strong>${escapeHtml(guide.name)}</strong></nav>
  <section class="uk-field-hero"><figure><img src="${guide.image.src}" width="1600" height="1066" fetchpriority="high" alt="${escapeHtml(guide.image.alt)}"><figcaption>${escapeHtml(guide.image.label)} · ${escapeHtml(guide.image.license)}</figcaption></figure><div class="uk-field-copy"><span class="uk-kicker">${escapeHtml(cluster.nation)} · signal file ${String(guideIndex + 1).padStart(2, '0')}</span><h1>${escapeHtml(guide.name)}</h1><p>${escapeHtml(guide.summary)}</p><div class="uk-purpose"><small>Decision this field file resolves</small><strong>${escapeHtml(guide.purpose)}</strong></div><div class="hero-actions"><a class="button primary" href="#route">Follow the line</a><a class="button secondary" href="#failure-points">Check the break points</a></div></div><aside class="uk-signal-tag"><small>${escapeHtml(guide.layout)}</small><strong>${escapeHtml(guide.instrument)}</strong><span>checked ${reviewDate}</span></aside></section>
  <section class="uk-choice-switchboard" aria-label="Three ways to shape the visit"><header><span>Set the day</span><h2>Three useful choices, each with a real sacrifice.</h2></header><div>${guide.choices.map(([title, copy], index) => `<article><b>${String(index + 1).padStart(2, '0')}</b><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></article>`).join('')}</div></section>
  ${ad}
  <section class="uk-window-board"><article><span>ACCESS</span><h2>Meet the day at its real gateway.</h2><p>${escapeHtml(guide.access)}</p></article><article><span>SACRIFICE</span><h2>Know what this route leaves out.</h2><p>${escapeHtml(guide.tradeoff)}</p></article><aside><div><small>TIME WINDOW</small><p>${escapeHtml(guide.duration)}</p></div><div><small>PAIR ONLY WHEN USEFUL</small><p>${escapeHtml(guide.combine)}</p></div></aside></section>
  <section class="uk-regional-board"><header><span>${escapeHtml(cluster.label)}</span><h2>Use ${escapeHtml(cluster.name)} as an operating system, not a pin collection.</h2><p>${escapeHtml(cluster.hubIntro)}</p></header><div><article><small>BASE</small><p>${escapeHtml(cluster.stay)}</p></article><article><small>CONNECTION</small><p>${escapeHtml(cluster.transfer)}</p></article><article><small>WEATHER WINDOW</small><p>${escapeHtml(cluster.season)}</p></article><article><small>LOWER-RISK DAY</small><p>${escapeHtml(cluster.fallback)}</p></article></div></section>
  <section class="uk-route-line" id="route"><header><span>Four checks before the return</span><h2>Arrive, read the window, commit once, then get back.</h2><p>${escapeHtml(guide.verify)}</p></header><ol>${guide.route.map(([label, title, copy], index) => `<li><b>${String(index + 1).padStart(2, '0')}</b><small>${escapeHtml(label)}</small><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></li>`).join('')}</ol></section>
  <section class="uk-live-desk"><div><span>LIVE DESK</span><h2>Reopen the sources that control today’s window.</h2><p>The guide explains the route decision; these official pages control transport, admission, paths, tides, weather and closures.</p></div><ul>${sourceList(planningSources)}</ul></section>
  <section class="uk-fallback"><div><span>WHEN THE SIGNAL CHANGES</span><h2>Keep a complete lower-risk day.</h2><p>${escapeHtml(guide.fallback)}</p></div><blockquote>${escapeHtml(guide.verify)}</blockquote></section>
  <section class="uk-breakpoints" id="failure-points"><header><span>Three break points</span><h2>Change the plan while the return is still strong.</h2></header><div>${guide.watch.map(([title, copy], index) => `<article><b>${String(index + 1).padStart(2, '0')}</b><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></article>`).join('')}</div></section>
  <section class="uk-related"><header><span>SAME REGIONAL BOOK</span><h2>Other ways to use ${escapeHtml(cluster.name)}.</h2></header><div>${cluster.guides.filter((item) => item.slug !== guide.slug).map((item) => `<a href="${item.url}"><img src="${item.image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(item.image.alt)}"><div><small>${escapeHtml(item.instrument)}</small><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(compact(item.purpose, 125))}</p><strong>Open this field file →</strong></div></a>`).join('')}</div></section>
  <section class="uk-faq"><header><span>PLANNING ANSWERS</span><h2>${escapeHtml(guide.name)} FAQ</h2></header><div class="faq-list">${guide.faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>
  <section class="section sources"><h2>Official sources and photo credits</h2><p>Planning facts and image licensing were reviewed on ${reviewDate}. Admission, transport, roads, paths, tides, weather and local access can change; reopen the linked authority or operator before travel.</p><ul>${sourceList(planningSources)}${cluster.guides.map((item) => imageCredit(item.image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
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
  const route = `/united-kingdom/${cluster.slug}/`;
  return {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'Article', '@id': `${absolute(route)}#article`, headline: `${cluster.name} Travel Guide`, description: cluster.hubIntro, inLanguage: 'en', datePublished: isoDate, dateModified: isoDate, mainEntityOfPage: absolute(route), image: absolute(cluster.guides[0].image.src), about: { '@type': 'TouristDestination', name: cluster.name }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
      breadcrumb([['Home', absolute('/')], ['United Kingdom', absolute('/united-kingdom/')], [cluster.name, absolute(route)]]), faqSchema(hubFaq(cluster))
    ]
  };
}

function hubPage(cluster, clusterIndex) {
  const route = `/united-kingdom/${cluster.slug}/`;
  const hero = cluster.guides[0].image;
  const faq = hubFaq(cluster);
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>${sharedHead({ title: `${cluster.name} Travel Guide — 3 Complete Routes | TripDistill`, description: metaDescription(`${cluster.hubIntro} ${cluster.transfer}`), route, image: hero })}<script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(hubSchema(cluster))}</script></head>
<body data-page="uk-${escapeHtml(cluster.slug)}" data-parent-page="united-kingdom" data-country="united-kingdom" data-region="${escapeHtml(cluster.slug)}">
${shellStart(`<main id="main-content" class="page-content uk-hub" data-uk-family="${escapeHtml(cluster.family)}" data-uk-hub-variant="${(clusterIndex % 8) + 1}">`)}
  <section class="uk-hub-hero"><div class="uk-hub-copy"><span class="uk-kicker">${escapeHtml(cluster.nation)} signal book · ${String(clusterIndex + 1).padStart(2, '0')}</span><h1>${escapeHtml(cluster.name)}</h1><p class="uk-tagline">${escapeHtml(cluster.tagline)}</p><p>${escapeHtml(cluster.hubIntro)}</p><div class="hero-actions"><a class="button primary" href="#field-files">Choose a field file</a><a class="button secondary" href="#operating-board">Read the operating board</a></div></div><figure><img src="${hero.src}" width="1600" height="1066" fetchpriority="high" alt="${escapeHtml(hero.alt)}"><figcaption>${escapeHtml(hero.label)} · ${escapeHtml(hero.license)}</figcaption></figure><aside class="uk-hub-board"><small>${escapeHtml(cluster.label)}</small><strong>3</strong><span>independent route files</span></aside></section>
  <section class="uk-operating-board" id="operating-board"><header><span>BEFORE THE FIRST DEPARTURE</span><h2>Four moving parts control this region.</h2></header><div><article><b>BASE</b><h3>Sleep beside the useful departure.</h3><p>${escapeHtml(cluster.stay)}</p></article><article><b>TRANSFER</b><h3>Name the whole connection.</h3><p>${escapeHtml(cluster.transfer)}</p></article><article><b>WINDOW</b><h3>Let current conditions edit the route.</h3><p>${escapeHtml(cluster.season)}</p></article><article><b>FALLBACK</b><h3>Keep a complete lower-risk day.</h3><p>${escapeHtml(cluster.fallback)}</p></article></div></section>
  ${ad}
  <section class="uk-hub-guides" id="field-files"><header><span>THREE SEPARATE DAYS</span><h2>Choose one file from the gateway, weather and return you actually have.</h2><p>Every file carries its own access decision, sequence, fallback, break points, official sources and licensed image record.</p></header><div>${cluster.guides.map((guide, index) => `<a class="uk-guide-card" href="${guide.url}" data-uk-layout="${escapeHtml(guide.layout)}"><img src="${guide.image.src}" width="1600" height="1066" loading="${index === 0 ? 'eager' : 'lazy'}" alt="${escapeHtml(guide.image.alt)}"><div><small>FILE ${String(index + 1).padStart(2, '0')} · ${escapeHtml(guide.instrument)}</small><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(guide.purpose)}</p><strong>Open the complete field file →</strong></div></a>`).join('')}</div></section>
  <section class="uk-comparison-docket"><header><span>COMPARE BEFORE BOARDING</span><h2>Each route buys something by leaving something else out.</h2></header><div>${cluster.guides.map((guide) => `<article><header><small>${escapeHtml(guide.instrument)}</small><h3>${escapeHtml(guide.name)}</h3></header><p><strong>Gateway:</strong> ${escapeHtml(guide.access)}</p><p><strong>Sacrifice:</strong> ${escapeHtml(guide.tradeoff)}</p><p><strong>Time:</strong> ${escapeHtml(guide.duration)}</p></article>`).join('')}</div></section>
  <section class="uk-hub-live"><div><span>REGIONAL LIVE DESK</span><h2>These sources control the moving parts.</h2><p>Use the route book for structure, then reopen current transport, destination and weather information for the exact date.</p></div><ul>${sourceList(cluster.sources)}</ul></section>
  <section class="uk-hub-faq"><div><span>REGIONAL ANSWERS</span><h2>${escapeHtml(cluster.name)} FAQ</h2></div><div class="faq-list">${faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>
  <section class="section sources"><h2>Official sources and photo credits</h2><p>Planning facts and image licensing were reviewed on ${reviewDate}. Verify current tickets, services, roads, paths, tides and site access before travel.</p><ul>${sourceList(cluster.sources)}${cluster.guides.map((guide) => imageCredit(guide.image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
</main>${shellEnd()}</body></html>`;
}

const countryFaq = [
  ['How many bases suit a first United Kingdom trip?', 'For seven to ten days, use London plus one region or two strong regional bases. For twelve to fourteen days, three bases can work when each sits on a clear rail corridor. Do not count an island ferry or Highland transfer as a sightseeing day.'],
  ['Should I buy a rail pass?', 'Price the actual intercity journeys, eligibility and reservation rules against advance tickets. Local buses, London transport, ferries, heritage railways and mountain products are separate decisions.'],
  ['Can I visit England, Scotland, Wales and Northern Ireland in one trip?', 'Yes only with enough time and carefully chosen flights, ferries or long rail days. A short trip is stronger when it chooses two nations or one cross-border corridor rather than collecting capitals.'],
  ['Do I need a car?', 'London and many cities work best without one. Rural coasts, national parks and islands may need a car, tour, bicycle or seasonal bus, but parking, single-track roads, tides and weather can make a car a liability. Decide route by route.'],
  ['What should I reserve first?', 'Reserve the highest-priority timed monument, theatre or intercity fare once the route is stable. Book ferries and island vehicles early, but keep exposed mountain, cliff and boat days flexible where operators allow.']
];

function countrySchema() {
  return {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebPage', '@id': `${absolute('/united-kingdom/')}#page`, name: 'United Kingdom Travel Guide', description: 'Plan the United Kingdom through twenty complete regional hubs and sixty route-specific city, coast, mountain, island and heritage guides.', inLanguage: 'en', datePublished: isoDate, dateModified: isoDate, primaryImageOfPage: absolute(unitedKingdomClusters[0].guides[0].image.src), about: { '@type': 'Country', name: 'United Kingdom' }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
      breadcrumb([['Home', absolute('/')], ['United Kingdom', absolute('/united-kingdom/')]]), faqSchema(countryFaq)
    ]
  };
}

const countryGroups = [
  [['england-south'], '01 · London and southern England', 'Read the capital, university towns, stone cities and chalk coast as separate systems.', 'London, Oxford, Cambridge, Bath, Cornwall and the south-east combine strong rail trunks with very different booked doors, branch lines, rural buses and coast-weather gates.'],
  [['england-midlands-north'], '02 · Midlands and northern England', 'Use city rail first; name every estate, dale, lake and coast last mile.', 'Birmingham, the Peak District, Liverpool, Manchester, Yorkshire, Cumbria and Northumberland reward one regional base and one complete outward branch per day.'],
  [['scotland'], '03 · Scotland', 'Let level changes, road distance, mountain weather and ferry check-in control the map.', 'Edinburgh and Glasgow are complete city systems; the Highlands and islands require named gateways, buffers and lower-risk alternatives.'],
  [['wales', 'northern-ireland'], '04 · Wales and Northern Ireland', 'Castles and cities remain reliable; mountains, peninsulas and tidal coasts need live decisions.', 'Cardiff, Eryri, Pembrokeshire, Belfast, the Causeway Coast and Derry combine rail cities with sparse buses, exposed paths, ferries and causeway clocks.']
];

function countryCards(bands) {
  return unitedKingdomClusters.filter((cluster) => bands.includes(cluster.band)).map((cluster) => {
    const image = cluster.guides[0].image;
    return `<a class="uk-country-card" href="/united-kingdom/${cluster.slug}/" data-family="${escapeHtml(cluster.family)}"><span class="uk-card-number">${String(unitedKingdomClusters.indexOf(cluster) + 1).padStart(2, '0')}</span><img src="${image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(image.alt)}"><div><small>${escapeHtml(cluster.nation)} · 3 complete routes</small><h3>${escapeHtml(cluster.name)}</h3><p>${escapeHtml(compact(cluster.hubIntro, 165))}</p><strong>Open the regional signal book →</strong></div></a>`;
  }).join('');
}

function countryPage() {
  const hero = unitedKingdomClusters[0].guides[0].image;
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>${sharedHead({ title: 'United Kingdom Travel Guide — 20 Complete Regional Hubs | TripDistill', description: metaDescription('Plan the United Kingdom through twenty regional hubs and sixty focused guides covering cities, rail, castles, coasts, mountains, islands and Northern Ireland.'), route: '/united-kingdom/', image: hero, type: 'website' })}<script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(countrySchema())}</script></head>
<body data-page="united-kingdom" data-country="united-kingdom">
${shellStart('<main id="main-content" class="page-content uk-country">')}
  <section class="uk-country-hero"><div class="uk-country-copy"><span class="uk-kicker">Signal book · checked ${reviewDate}</span><h1>United Kingdom</h1><p class="uk-country-deck">Choose the operating window before the postcard.</p><p>Fast rail makes cities look close, but station exits, advance fares, booked monuments, rural buses, mountain weather, tides and ferry check-in decide the usable day. Twenty regional signal books make those constraints visible before you commit.</p><div class="hero-actions"><a class="button primary" href="#regions">Compare 20 hubs</a><a class="button secondary" href="#network">Read the national operating board</a></div><div class="uk-country-facts"><div><strong>20</strong><span>regional hubs</span></div><div><strong>60</strong><span>focused guides</span></div><div><strong>4</strong><span>constituent nations</span></div><div><strong>5</strong><span>static languages</span></div></div></div><figure><img src="${hero.src}" width="1600" height="1066" fetchpriority="high" alt="${escapeHtml(hero.alt)}"><figcaption>${escapeHtml(hero.label)} · ${escapeHtml(hero.license)}</figcaption></figure><div class="uk-nation-strip" aria-label="Constituent nations"><span>ENGLAND</span><span>SCOTLAND</span><span>WALES</span><span>NORTHERN IRELAND</span></div></section>
  <section class="uk-country-rules"><article><b>01</b><h2>Choose a rail or ferry spine, not four capitals.</h2><p>London–York–Edinburgh, a Wales corridor, a Highland roadbook or a Belfast-based route each needs a different number of bases and transfer days.</p></article><article><b>02</b><h2>Read the last mile as a separate ticket.</h2><p>A national-rail arrival rarely completes a castle, valley, island or coast journey. Name the bus, boat, path and return before booking the trunk.</p></article><article><b>03</b><h2>Keep one city-strength fallback.</h2><p>Mountain cloud, cliff wind, tide and marine cancellation are normal planning conditions. Protect a complete museum, town or lower route in the same base.</p></article></section>
  ${ad}
  <div id="regions">${countryGroups.map(([bands, kicker, heading, copy]) => `<section class="uk-country-band"><header><span>${kicker}</span><h2>${heading}</h2><p>${copy}</p></header><div class="uk-country-grid">${countryCards(bands)}</div></section>`).join('')}</div>
  <section class="uk-country-section" id="network"><header><span>NATIONAL OPERATING BOARD</span><h2>The trunk is fast; the useful day still depends on the window.</h2><p>Keep intercity rail, urban transport, rural access and sea or mountain operation as separate decisions.</p></header><div class="uk-network-grid"><article><small>INTERCITY RAIL</small><h3>Price the named train and station.</h3><p>Advance fares, operator restrictions, engineering work and London terminal changes matter. A short journey time does not include hotel-to-platform or a missed connection.</p></article><article><small>CITY NETWORKS</small><h3>Large stations are multi-exit systems.</h3><p>London, Manchester, Birmingham, Edinburgh and Glasgow each use different local products. Choose the arrival door from the first district, not the city name.</p></article><article><small>RURAL LAST MILES</small><h3>Bus frequency edits the itinerary.</h3><p>Castles, villages, national parks and coasts may need seasonal buses, tours, bicycles or cars. Verify the final return and Sunday pattern first.</p></article><article><small>WEATHER, TIDE &amp; SEA</small><h3>Operation can override the booking.</h3><p>Mountain forecasts, cliff closures, causeway times, ferry check-in and marine weather are live gates. A booked room does not open a closed route.</p></article></div></section>
  <section class="uk-country-section"><header><span>TRIP-LENGTH BOARD</span><h2>Count full bases, not flags crossed.</h2></header><div class="uk-trip-grid"><article><strong>5–7 days</strong><h3>London + one regional system</h3><p>Choose Oxford and Bath, York, Edinburgh or another single corridor. Keep the capital and region as two bases at most.</p></article><article><strong>8–10 days</strong><h3>Two nations or one long corridor</h3><p>Pair London with Scotland, Wales or Northern Ireland, or build an England rail route. Count the flight, ferry or hotel-change day honestly.</p></article><article><strong>12–14 days</strong><h3>Three bases with a real contrast</h3><p>Add an island, mountain or coast only when it changes the trip’s argument. Avoid using extra days for daily check-outs.</p></article></div></section>
  <section class="uk-country-section"><header><span>FOUR OPERATING CLOCKS</span><h2>The calendar never replaces live conditions.</h2></header><div class="uk-season-grid"><article><strong>Winter</strong><p>Cities and collections remain strong; mountain, island and rural services need precise checks and short-light planning.</p></article><article><strong>Spring</strong><p>Gardens and coast days expand, but high routes can retain snow and Atlantic weather remains changeable.</p></article><article><strong>Summer</strong><p>Long light helps, yet island vehicles, castle tickets, coast buses and popular trailhead capacity need early commitments.</p></article><article><strong>Autumn</strong><p>Storms and shortening light reduce return margin. Keep a lower city or valley day beside every exposed plan.</p></article></div></section>
  <section class="uk-country-section uk-entry-board"><header><span>ARRIVAL DECISIONS</span><h2>Do not protect an onward ticket before the border, terminal and baggage move are real.</h2></header><div><article><h3>London airports</h3><p>Heathrow, Gatwick, Stansted, Luton and London City use different rail products and terminals. Leave a wide buffer before a separately ticketed intercity train.</p></article><article><h3>Regional airports and Belfast</h3><p>Edinburgh, Glasgow, Manchester, Birmingham, Cardiff and Belfast can remove a cross-country transfer, but compare the complete route to the regional base.</p></article><article><h3>Ferries and islands</h3><p>Port, check-in, vehicle space and sea state matter. Match the island arrival to the road and coast you plan to use rather than crossing it immediately.</p></article></div></section>
  <section class="uk-country-section"><header><span>PLANNING ANSWERS</span><h2>United Kingdom FAQ</h2></header><div class="faq-list">${countryFaq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>
  <section class="section sources"><h2>Official sources and photo credits</h2><p>Country planning and image licensing were reviewed on ${reviewDate}. Entry, fares, reservations, roads, paths, tides, weather and operating status change; verify directly before travel.</p><ul>${sourceList(unitedKingdomCountrySources)}${unitedKingdomClusters.map((cluster) => imageCredit(cluster.guides[0].image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
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

function unitedKingdomNavBlock() {
  const chapters = unitedKingdomClusters.map((cluster) => `<details name="united-kingdom-chapters" class="sidebar-accordion sidebar-chapters" data-sidebar-id="chapters-uk-${cluster.slug}"><summary><span class="sidebar-summary-main">${escapeHtml(cluster.name)}</span><span class="sidebar-summary-meta">3</span></summary><div class="sidebar-links sidebar-accordion-body"><a class="sidebar-link" href="/united-kingdom/${cluster.slug}/" data-nav-key="uk-${cluster.slug}">${escapeHtml(cluster.name)}</a>${cluster.guides.map((guide) => `<a class="sidebar-link" href="${guide.url}" data-nav-key="uk-${cluster.slug}-${guide.slug}">${escapeHtml(guide.name)}</a>`).join('')}</div></details>`).join('');
  return `<!-- UNITED_KINGDOM_NAV_START --><details class="sidebar-accordion sidebar-country" data-sidebar-id="united-kingdom"><summary><span class="sidebar-summary-main">United Kingdom</span><span class="sidebar-summary-meta">20</span></summary><div class="sidebar-links sidebar-accordion-body"><a class="sidebar-link" href="/united-kingdom/" data-nav-key="united-kingdom">United Kingdom guide</a>${chapters}</div></details><!-- UNITED_KINGDOM_NAV_END -->`;
}

function updateSidebar() {
  const file = path.join(root, 'components', 'sidebar.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- UNITED_KINGDOM_NAV_START -->';
  const end = '<!-- UNITED_KINGDOM_NAV_END -->';
  const block = unitedKingdomNavBlock();
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- FRANCE_NAV_END -->', block);
  fs.writeFileSync(file, html);
}

function updateHeader() {
  const file = path.join(root, 'components', 'header.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- UNITED_KINGDOM_HEADER_START -->';
  const end = '<!-- UNITED_KINGDOM_HEADER_END -->';
  const block = `${start}<a class="nav-link" href="/united-kingdom/" data-nav-key="united-kingdom" translate="no">UK</a>${end}`;
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- FRANCE_HEADER_END -->', block);
  fs.writeFileSync(file, html);
}

function updateFooter() {
  const file = path.join(root, 'components', 'footer.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- UNITED_KINGDOM_FOOTER_START -->';
  const end = '<!-- UNITED_KINGDOM_FOOTER_END -->';
  const block = `${start}<a href="/united-kingdom/">United Kingdom</a><a href="/united-kingdom/london/">London</a><a href="/united-kingdom/edinburgh-lothians/">Edinburgh</a><a href="/united-kingdom/scottish-highlands/">Scottish Highlands</a><a href="/united-kingdom/cardiff-south-wales/">Cardiff &amp; South Wales</a><a href="/united-kingdom/belfast-northern-ireland/">Belfast &amp; Northern Ireland</a>${end}`;
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- FRANCE_FOOTER_END -->', block);
  fs.writeFileSync(file, html);
}

function updateSearch() {
  const file = path.join(root, 'data', 'search-index.json');
  const records = JSON.parse(fs.readFileSync(file, 'utf8')).filter((item) => !item.url.startsWith('/united-kingdom/'));
  records.push({ title: 'United Kingdom Travel Guide', url: '/united-kingdom/', parent: 'Europe', type: 'Country', summary: 'Plan the United Kingdom through twenty complete regional hubs and sixty focused guides for cities, castles, coasts, mountains, islands and Northern Ireland.', keywords: ['United Kingdom', 'UK travel', 'Britain', 'England', 'Scotland', 'Wales', 'Northern Ireland'] });
  for (const cluster of unitedKingdomClusters) {
    records.push({ title: cluster.name, url: `/united-kingdom/${cluster.slug}/`, parent: 'United Kingdom', type: 'Regional guide', summary: cluster.hubIntro, keywords: [cluster.name, cluster.nation, cluster.band] });
    for (const guide of cluster.guides) records.push({ title: guide.name, url: guide.url, parent: cluster.name, type: 'Local guide', summary: guide.summary, keywords: [guide.name, cluster.name, guide.instrument, guide.layout] });
  }
  fs.writeFileSync(file, JSON.stringify(records, null, 2) + '\n');
}

function updateHome() {
  const file = path.join(root, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- UNITED_KINGDOM_HOME_START -->';
  const end = '<!-- UNITED_KINGDOM_HOME_END -->';
  const image = unitedKingdomClusters[0].guides[0].image;
  const block = `${start}<a class="destination-card featured" href="/united-kingdom/"><img src="${image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(image.alt)}"><div class="destination-copy"><small>Europe · New complete country</small><h3>United Kingdom</h3><p>Compare twenty regional signal books and sixty focused guides across cities, castles, coasts, mountains, islands and Northern Ireland.</p><span class="card-arrow">Plan the United Kingdom →</span></div></a>${end}`;
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- FRANCE_HOME_END -->', block);
  const creditStart = '<!-- UNITED_KINGDOM_HOME_CREDIT_START -->';
  const creditEnd = '<!-- UNITED_KINGDOM_HOME_CREDIT_END -->';
  const credit = `${creditStart}<ul>${imageCredit(image)}</ul>${creditEnd}`;
  html = html.includes(creditStart) ? replaceMarked(html, creditStart, creditEnd, credit) : insertAfterMarker(html, '<!-- FRANCE_HOME_CREDIT_END -->', credit);
  html = html.replace(/\b(?:11|12) countries live\b/, '12 countries live');
  html = html.replace('France adds 20 complete regional hubs and 60 focused guides across cities, châteaux, vineyards, coasts, mountains and Corsica.', 'The United Kingdom adds 20 complete regional hubs and 60 focused guides across cities, castles, coasts, mountains and islands.');
  html = html.replace(/<title>[^<]*<\/title>/, '<title>TripDistill — Practical Travel Guides Across 12 Countries</title>');
  html = html.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="Plan the United Kingdom, France, Switzerland, Canada, USA, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand with practical destination guides.">');
  html = html.replace('Practical France, Switzerland, Canada, United States, Australia and Asia country, city and regional travel guides.', 'Practical United Kingdom, France, Switzerland, Canada, United States, Australia and Asia country, city and regional travel guides.');
  html = html.replace(/<h2 id="destinations-title">[^<]*<\/h2>/, '<h2 id="destinations-title">Explore the United Kingdom, France, Switzerland, Canada, the United States, Australia and Asia</h2>');
  html = html.replace(/<a class="text-link" href="\/(?:france|united-kingdom)\/">Open the newest country guide →<\/a>/, '<a class="text-link" href="/united-kingdom/">Open the newest country guide →</a>');
  html = html.replace(/(?:The\s+)*(?:United Kingdom,\s*)?France, Switzerland, Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand are live\./, 'The United Kingdom, France, Switzerland, Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand are live.');
  fs.writeFileSync(file, html);
}

function updateAbout() {
  const file = path.join(root, 'about', 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/TripDistill now covers[^<]*/, 'TripDistill now covers the United Kingdom, France, Switzerland, Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand. The United Kingdom adds 20 complete regional hubs and 60 focused guides built around rail, booked monuments, rural buses, weather, tides and ferries; every destination URL is published only after useful planning detail, current official sources and visible image provenance are present.');
  fs.writeFileSync(file, html);
}

for (const [clusterIndex, cluster] of unitedKingdomClusters.entries()) {
  const file = routeFile(`/united-kingdom/${cluster.slug}/`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, hubPage(cluster, clusterIndex));
}
for (const [guideIndex, guide] of unitedKingdomGuides.entries()) {
  const cluster = unitedKingdomClusters.find((item) => item.slug === guide.hubSlug);
  const file = routeFile(guide.url);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, guidePage(guide, cluster, guideIndex));
}
const countryFile = routeFile('/united-kingdom/');
fs.mkdirSync(path.dirname(countryFile), { recursive: true });
fs.writeFileSync(countryFile, countryPage());
updateSidebar();
updateHeader();
updateFooter();
updateSearch();
updateHome();
updateAbout();

console.log(`Generated United Kingdom: 1 country page, ${unitedKingdomClusters.length} hubs and ${unitedKingdomGuides.length} focused guides (81 English routes), plus Europe navigation, home, about and search integration.`);
