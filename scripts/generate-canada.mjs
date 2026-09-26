import fs from 'node:fs';
import path from 'node:path';
import { canadaClusters, canadaCountrySources, canadaGuides } from '../data/canada-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const reviewDate = '12 September 2026';
const isoDate = '2026-09-12';
const siteCss = '/css/site.css?v=20260926-1';
const countryCss = '/css/canada.css?v=20260912-1';
const fieldCss = '/css/canada-field.css?v=20260912-1';
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

function compact(value, maximum = 138) {
  const text = String(value).replace(/\s+/g, ' ').trim();
  if (text.length <= maximum) return text;
  return text.slice(0, maximum - 1).replace(/\s+\S*$/, '') + '…';
}

function metaDescription(value) {
  let text = String(value).replace(/\s+/g, ' ').trim();
  if (text.length < 120) text += ' Compare access, transport, timing, weather and the return before committing the day.';
  if (text.length > 170) text = text.slice(0, 167).replace(/\s+\S*$/, '') + '…';
  return text;
}

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

function sourceList(sources) {
  return sources.map(([url, label]) => `<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(label)}</a>.</li>`).join('');
}

function licenseUrl(license) {
  if (/^CC0$/i.test(license)) return 'https://creativecommons.org/publicdomain/zero/1.0/';
  if (/^Public domain$/i.test(license)) return 'https://creativecommons.org/publicdomain/mark/1.0/';
  const match = String(license).match(/^CC (BY(?:-SA)?) ([1-4](?:\.\d)?)(?: ([a-z]{2}))?$/i);
  return match ? `https://creativecommons.org/licenses/${match[1].toLowerCase()}/${match[2]}/${match[3] ? `${match[3]}/` : ''}` : '';
}

function imageCredit(image) {
  const license = licenseUrl(image.license);
  const licenseText = license
    ? `<a href="${license}" target="_blank" rel="noopener">${escapeHtml(image.license)}</a>`
    : escapeHtml(image.license);
  return `<li><a href="${escapeHtml(image.source)}" target="_blank" rel="noopener">${escapeHtml(image.label)}</a> — ${escapeHtml(image.creator)}, ${licenseText}. ${escapeHtml(image.editNote)}</li>`;
}

const ad = '<section class="section compact" aria-label="Advertisement"><div class="ad-slot" data-ad-slot><div><strong>Advertisement</strong><span>Responsive AdSense placement reserved</span></div></div></section>';

function sharedHead({ title, description, route, image, type = 'article', extraCss = '' }) {
  return `<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${absolute(route)}">${hreflang(route)}
  <meta name="theme-color" content="#b91c2c"><meta property="og:type" content="${type}"><meta property="og:site_name" content="TripDistill"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${absolute(route)}"><meta property="og:image" content="${absolute(image.src)}"><meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/favicon.ico" sizes="any"><link rel="stylesheet" href="${siteCss}"><link rel="stylesheet" href="${countryCss}">${extraCss}`;
}

function shellStart(bodyAttrs = '') {
  return `<a class="skip-link" href="#main-content">Skip to content</a><div id="layout-header"></div><div class="site-shell"><div class="mobile-overlay" data-mobile-overlay aria-hidden="true"></div><aside id="layout-sidebar" class="sidebar" aria-label="TripDistill navigation"></aside>${bodyAttrs}`;
}

function shellEnd() {
  return `</div><div id="layout-footer"></div><script src="${mainJs}" defer></script>`;
}

function guideSchema(guide) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${absolute(guide.url)}#article`,
        headline: `${guide.name} Travel Guide`,
        description: guide.summary,
        inLanguage: 'en',
        datePublished: isoDate,
        dateModified: isoDate,
        mainEntityOfPage: absolute(guide.url),
        image: absolute(guide.image.src),
        about: { '@type': 'TouristDestination', name: guide.name },
        publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' }
      },
      breadcrumb([
        ['Home', 'https://tripdistill.com/'],
        ['Canada', 'https://tripdistill.com/canada/'],
        [guide.hubName, absolute(`/canada/${guide.hubSlug}/`)],
        [guide.name, absolute(guide.url)]
      ]),
      {
        '@type': 'FAQPage',
        mainEntity: guide.faq.map(([question, answer]) => ({
          '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer }
        }))
      }
    ]
  };
}

function relatedCards(cluster, currentSlug) {
  return cluster.guides.filter((guide) => guide.slug !== currentSlug).map((guide) => `<a class="ca-related-card" href="${guide.url}"><img src="${guide.image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(guide.image.alt)}"><div><small>Survey ${String(guide.chapter).padStart(2, '0')} · ${escapeHtml(guide.layout)}</small><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(compact(guide.summary, 122))}</p><strong>Open the guide →</strong></div></a>`).join('');
}

function guidePage(guide, cluster) {
  const description = metaDescription(`${guide.summary} ${guide.access}`);
  const route = guide.url;
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>${sharedHead({ title: `${guide.name} Travel Guide | TripDistill Canada`, description, route, image: guide.image, extraCss: `<link rel="stylesheet" href="${fieldCss}">` })}<script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(guideSchema(guide))}</script></head>
<body data-page="ca-${escapeHtml(cluster.slug)}-${escapeHtml(guide.slug)}" data-parent-page="canada" data-country="canada" data-region="${escapeHtml(cluster.slug)}">
${shellStart(`<main id="main-content" class="page-content ca-field" data-ca-family="${escapeHtml(cluster.family)}" data-ca-layout="${escapeHtml(guide.layout)}" data-ca-instrument="${escapeHtml(guide.instrument)}">`)}
  <nav class="ca-breadcrumb" aria-label="Breadcrumb"><a href="/canada/">Canada</a><span>/</span><a href="/canada/${cluster.slug}/">${escapeHtml(cluster.name)}</a><span>/</span><strong>${escapeHtml(guide.name)}</strong></nav>
  <section class="ca-field-hero" aria-labelledby="ca-field-title"><div class="ca-field-copy"><span class="ca-kicker">${escapeHtml(cluster.region)} · survey ${String(guide.chapter).padStart(2, '0')} · reviewed ${reviewDate}</span><h1 id="ca-field-title">${escapeHtml(guide.name)}</h1><p>${escapeHtml(guide.summary)}</p><div class="hero-actions"><a class="button primary" href="#route">Trace the route</a><a class="button secondary" href="#checks">Check the failure points</a></div></div><figure><img src="${guide.image.src}" width="1600" height="1066" alt="${escapeHtml(guide.image.alt)}" fetchpriority="high"><figcaption>${escapeHtml(guide.image.label)} · ${escapeHtml(guide.image.license)}</figcaption></figure><div class="ca-instrument" aria-hidden="true"><span>${escapeHtml(guide.layout)}</span><strong>${String(guide.chapter).padStart(2, '0')}</strong><small>${escapeHtml(guide.instrument)}</small></div></section>
  <section class="ca-decision-grid" aria-label="Planning decisions">${guide.decisions.map(([label, copy]) => `<article><small>${escapeHtml(label)}</small><p>${escapeHtml(copy)}</p></article>`).join('')}</section>
  ${ad}
  <section class="ca-orientation"><div><span class="ca-section-label">Orientation</span><h2>Make the operating decision before adding distance.</h2><p>${escapeHtml(guide.tradeoff)}</p><p>${escapeHtml(guide.duration)}</p></div><aside><small>Access</small><p>${escapeHtml(guide.access)}</p><small>Combine carefully</small><p>${escapeHtml(guide.combine)}</p></aside></section>
  <section class="ca-field-section" id="route"><div class="ca-section-heading"><span>Four-stage route</span><h2>A sequence that protects the return.</h2><p>${escapeHtml(guide.verify)}</p></div><div class="ca-route-grid">${guide.route.map(([label, title, copy], index) => `<article class="ca-route-step"><span>${String(index + 1).padStart(2, '0')}</span><small>${escapeHtml(label)}</small><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></article>`).join('')}</div></section>
  <section class="ca-field-section ca-fallback-section"><div class="ca-section-heading"><span>Fallback logic</span><h2>The day still needs a useful shape when conditions change.</h2></div><div class="ca-fallback-card"><strong>Plan B</strong><p>${escapeHtml(guide.fallback)}</p><span>Recheck before leaving: ${escapeHtml(guide.verify)}</span></div></section>
  <section class="ca-field-section" id="checks"><div class="ca-section-heading"><span>Failure points</span><h2>Three reasons to change the plan.</h2></div><div class="ca-check-grid">${guide.checks.map(([title, copy], index) => `<article><span>0${index + 1}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></article>`).join('')}</div></section>
  <section class="ca-field-section"><div class="ca-section-heading"><span>Same survey sheet</span><h2>Continue within ${escapeHtml(cluster.name)}.</h2></div><div class="ca-related-grid">${relatedCards(cluster, guide.slug)}</div><p class="ca-back"><a href="/canada/${cluster.slug}/">← Return to ${escapeHtml(cluster.name)}</a></p></section>
  <section class="ca-field-section"><div class="ca-section-heading"><span>Planning answers</span><h2>${escapeHtml(guide.name)} FAQ</h2></div><div class="faq-list">${guide.faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>
  <section class="section sources"><h2>Official sources and photo credits</h2><p>Planning facts and image licensing were reviewed on ${reviewDate}. Transport, park, weather, reservation and operator status can change; verify the linked source before travel.</p><ul>${sourceList(cluster.sources)}${cluster.guides.map((item) => imageCredit(item.image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
</main>${shellEnd()}</body></html>`;
}

function hubFaq(cluster) {
  return [
    [`How long should I give ${cluster.name}?`, cluster.stay],
    [`What is the main transport decision in ${cluster.name}?`, cluster.transfer],
    [`What should I do if conditions change?`, cluster.fallback]
  ];
}

function hubSchema(cluster) {
  const route = `/canada/${cluster.slug}/`;
  const faq = hubFaq(cluster);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', '@id': `${absolute(route)}#article`, headline: `${cluster.name} Travel Guide`, description: cluster.hubIntro,
        inLanguage: 'en', datePublished: isoDate, dateModified: isoDate, mainEntityOfPage: absolute(route), image: absolute(cluster.guides[0].image.src),
        about: { '@type': 'TouristDestination', name: cluster.name }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' }
      },
      breadcrumb([['Home', 'https://tripdistill.com/'], ['Canada', 'https://tripdistill.com/canada/'], [cluster.name, absolute(route)]]),
      { '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }
    ]
  };
}

function hubCards(cluster) {
  return cluster.guides.map((guide) => `<a class="ca-hub-card" href="${guide.url}" data-layout="${escapeHtml(guide.layout)}"><img src="${guide.image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(guide.image.alt)}"><div><small>Survey ${String(guide.chapter).padStart(2, '0')} · ${escapeHtml(guide.layout)}</small><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(guide.summary)}</p><strong>Open the focused guide →</strong></div></a>`).join('');
}

function hubPage(cluster, index) {
  const route = `/canada/${cluster.slug}/`;
  const hero = cluster.guides[0].image;
  const description = metaDescription(`${cluster.hubIntro} ${cluster.transfer}`);
  const faq = hubFaq(cluster);
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>${sharedHead({ title: `${cluster.name} Travel Guide — 3 Focused Routes | TripDistill`, description, route, image: hero })}<script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(hubSchema(cluster))}</script></head>
<body data-page="ca-${escapeHtml(cluster.slug)}" data-parent-page="canada" data-country="canada" data-region="${escapeHtml(cluster.slug)}">
${shellStart(`<main id="main-content" class="page-content ca-hub" data-ca-family="${escapeHtml(cluster.family)}">`)}
  <section class="ca-hub-hero"><div class="ca-hub-copy"><span class="ca-kicker">${escapeHtml(cluster.label)} · reviewed ${reviewDate}</span><h1>${escapeHtml(cluster.name)}</h1><p class="ca-tagline">${escapeHtml(cluster.tagline)}</p><p>${escapeHtml(cluster.hubIntro)}</p><div class="hero-actions"><a class="button primary" href="#guides">Choose a focused route</a><a class="button secondary" href="#operating-model">Read the operating model</a></div></div><figure><img src="${hero.src}" width="1600" height="1066" alt="${escapeHtml(hero.alt)}" fetchpriority="high"><figcaption>${escapeHtml(hero.label)} · ${escapeHtml(hero.license)}</figcaption></figure><div class="ca-map-index" aria-hidden="true"><small>Canada survey atlas</small><strong>${String(index + 1).padStart(2, '0')}</strong><span>${escapeHtml(cluster.region)}</span></div></section>
  <section class="ca-hub-stats"><article><small>Useful stay</small><p>${escapeHtml(cluster.stay)}</p></article><article><small>Transfer logic</small><p>${escapeHtml(cluster.transfer)}</p></article><article><small>Season gate</small><p>${escapeHtml(cluster.season)}</p></article></section>
  ${ad}
  <section class="ca-hub-section" id="guides"><div class="ca-hub-heading"><span>Three independent guides</span><h2>Pick the operating system, not every pin.</h2><p>Each route below has its own arrival logic, sequence, weak points, fallback and current-source checks.</p></div><div class="ca-hub-grid">${hubCards(cluster)}</div></section>
  <section class="ca-hub-section" id="operating-model"><div class="ca-hub-heading"><span>Regional operating model</span><h2>Distance, weather and access are part of the itinerary.</h2></div><div class="ca-contract-grid"><article><small>Base</small><h3>Sleep where the first decision is easy.</h3><p>${escapeHtml(cluster.stay)}</p></article><article><small>Movement</small><h3>Name the rail, road, ferry or flight.</h3><p>${escapeHtml(cluster.transfer)}</p></article><article><small>Season</small><h3>Use the local condition, not a national average.</h3><p>${escapeHtml(cluster.season)}</p></article><article><small>Fallback</small><h3>Keep one lower-risk day ready.</h3><p>${escapeHtml(cluster.fallback)}</p></article><article><small>Respect</small><h3>Community guidance outranks a map pin.</h3><p>Follow current park, community and Indigenous tourism guidance for access, photography, wildlife and cultural places. Proximity never implies permission.</p></article></div></section>
  <section class="ca-hub-section"><div class="ca-hub-heading"><span>Route comparison</span><h2>Three different reasons to leave the hotel.</h2></div><div class="ca-route-compare">${cluster.guides.map((guide) => `<a href="${guide.url}"><span>0${guide.chapter}</span><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(guide.tradeoff)}</p><strong>${escapeHtml(compact(guide.duration, 96))}</strong></a>`).join('')}</div></section>
  <section class="ca-hub-section"><div class="ca-hub-heading"><span>Planning answers</span><h2>${escapeHtml(cluster.name)} FAQ</h2></div><div class="faq-list">${faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>
  <section class="section sources"><h2>Official sources and photo credits</h2><p>Planning facts and image licensing were reviewed on ${reviewDate}. Recheck transport, weather, park, marine, reservation and operator conditions before travel.</p><ul>${sourceList(cluster.sources)}${cluster.guides.map((guide) => imageCredit(guide.image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
</main>${shellEnd()}</body></html>`;
}

function countrySchema() {
  const faq = [
    ['How much of Canada fits into two weeks?', 'Choose two connected operating regions or one region plus one flight bridge. A coast-to-coast checklist spends too much of the trip in airports, cars or trains.'],
    ['Do I need a rental car in Canada?', 'Not for every trip. Vancouver, Toronto, Montreal, Ottawa and Quebec City can support substantial car-free stays, while mountain parks, coastlines and northern routes often need a car, shuttle or booked operator.'],
    ['What changes fastest in Canada?', 'Wildfire smoke, winter roads, park reservations, marine weather, ferries, daylight and northern operator schedules can change the practical route quickly. Recheck official sources before departure.']
  ];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', '@id': 'https://tripdistill.com/canada/#article', headline: 'Canada Travel Guide',
        description: 'Eighteen complete Canadian travel hubs and fifty-four focused local guides.', inLanguage: 'en', datePublished: isoDate, dateModified: isoDate,
        mainEntityOfPage: 'https://tripdistill.com/canada/', image: absolute(canadaClusters[0].guides[0].image.src), about: { '@type': 'Country', name: 'Canada' },
        publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' }
      },
      breadcrumb([['Home', 'https://tripdistill.com/'], ['Canada', 'https://tripdistill.com/canada/']]),
      { '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }
    ]
  };
}

const countryGroups = [
  [['pacific'], '01 · Pacific edge', 'City inlets, island ferries and rainforest coast.', 'Vancouver, Victoria and the Pacific Rim work through transit, ferries, marine weather and a very different rhythm once the road reaches the outer coast.'],
  [['rockies'], '02 · Rockies', 'Reservation windows, elevation and road status.', 'Banff, Lake Louise and Jasper reward a base-first plan that separates town access, shuttle reservations, mountain weather and the long Icefields Parkway.'],
  [['central', 'quebec'], '03 · Great Lakes & St Lawrence', 'Big-city grids, museums, river history and bilingual context.', 'Toronto, Niagara, Ottawa, Montreal, Quebec City and Saguenay use dense urban networks until the escarpment, fjord, island or rural road changes the transport contract.'],
  [['atlantic'], '04 · Atlantic Canada', 'Harbours, headlands, ferries and weather margins.', 'Nova Scotia, Prince Edward Island and Newfoundland are not one coastal loop: marine conditions, ferry reservations and long rural roads determine what fits.'],
  [['prairies', 'north'], '05 · Prairies & North', 'Long daylight, deep cold and operator-led distance.', 'Calgary, Winnipeg, Churchill, Whitehorse and Yellowknife make season, daylight, road condition and expedition logistics visible before the scenic promise.']
];

function countryCards(bands) {
  return canadaClusters.filter((cluster) => bands.includes(cluster.band)).map((cluster) => {
    const image = cluster.guides[0].image;
    return `<a class="ca-country-card" href="/canada/${cluster.slug}/" data-family="${escapeHtml(cluster.family)}"><img src="${image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(image.alt)}"><div><small>${escapeHtml(cluster.region)} · 3 focused guides</small><h3>${escapeHtml(cluster.name)}</h3><p>${escapeHtml(compact(cluster.hubIntro, 154))}</p><strong>Open the regional survey →</strong></div><span>${String(canadaClusters.indexOf(cluster) + 1).padStart(2, '0')}</span></a>`;
  }).join('');
}

function countryPage() {
  const hero = canadaClusters[0].guides[0].image;
  const description = metaDescription('Plan Canada through eighteen complete travel hubs and fifty-four focused guides spanning Pacific cities, the Rockies, Great Lakes, Quebec, Atlantic coasts, prairies and the North.');
  const faq = [
    ['How much of Canada fits into two weeks?', 'Choose two connected operating regions or one region plus one flight bridge. A coast-to-coast checklist spends too much of the trip in airports, cars or trains.'],
    ['Do I need a rental car in Canada?', 'Not for every trip. Vancouver, Toronto, Montreal, Ottawa and Quebec City can support substantial car-free stays, while mountain parks, coastlines and northern routes often need a car, shuttle or booked operator.'],
    ['What changes fastest in Canada?', 'Wildfire smoke, winter roads, park reservations, marine weather, ferries, daylight and northern operator schedules can change the practical route quickly. Recheck official sources before departure.']
  ];
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>${sharedHead({ title: 'Canada Travel Guide — 18 Complete Regional Hubs | TripDistill', description, route: '/canada/', image: hero, type: 'website' })}<script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(countrySchema())}</script></head>
<body data-page="canada" data-country="canada">
${shellStart('<main id="main-content" class="page-content ca-country">')}
  <section class="ca-country-hero"><div class="ca-country-copy"><span class="ca-kicker">National survey atlas · reviewed ${reviewDate}</span><h1>Canada <span>plan the operating region before the postcard.</span></h1><p>Canada is too large for one generic “road trip.” Eighteen complete hubs separate city transit, intercity rail, mountain reservations, ferries, long rural roads, winter systems, wildfire smoke and northern operator logistics before distance becomes invisible.</p><div class="hero-actions"><a class="button primary" href="#regions">Compare 18 hubs</a><a class="button secondary" href="#distance">Read the distance contract</a></div><div class="ca-country-facts"><div><strong>18</strong><span>complete hubs</span></div><div><strong>54</strong><span>focused guides</span></div><div><strong>5</strong><span>static languages</span></div></div></div><figure><img src="${hero.src}" width="1600" height="1066" alt="${escapeHtml(hero.alt)}" fetchpriority="high"><figcaption>${escapeHtml(hero.label)} · ${escapeHtml(hero.license)}</figcaption></figure><div class="ca-contour-stamp" aria-hidden="true"><span>PACIFIC</span><i></i><span>LAKES</span><i></i><span>ATLANTIC</span><i></i><span>NORTH</span></div></section>
  <section class="ca-country-principles"><article><span>01</span><h2>Choose one operating region.</h2><p>Connect places that share transport and weather instead of treating the country outline as a single itinerary.</p></article><article><span>02</span><h2>Make the transfer visible.</h2><p>Flight, rail, ferry, road, shuttle and the last safe return belong in the day plan, not in a footnote.</p></article><article><span>03</span><h2>Respect land, community and season.</h2><p>Follow current park, Indigenous tourism and community guidance for access, wildlife, photography and cultural places.</p></article></section>
  ${ad}
  <div id="regions">${countryGroups.map(([bands, kicker, heading, copy], index) => `<section class="ca-country-band" data-band="${bands.join('-')}"><div class="ca-band-heading"><span>${kicker}</span><h2 id="ca-band-${index}">${heading}</h2><p>${copy}</p></div><div class="ca-country-grid">${countryCards(bands)}</div></section>`).join('')}</div>
  <section class="ca-country-section" id="distance"><div class="ca-band-heading"><span>Distance contract</span><h2>Choose the transport after the geography.</h2><p>Canada has excellent city transit and selective intercity rail, but neither eliminates mountain roads, ferry terminals, weather closures or long northern sectors.</p></div><div class="ca-transport-grid"><article><small>City transit</small><h3>Use dense networks where they exist.</h3><p>Vancouver, Toronto, Ottawa, Montreal and Quebec City can support substantial car-free days. Name the final bus, ferry or walk whenever the network ends before the attraction.</p></article><article><small>Rail</small><h3>Use rail as a corridor, not a national shortcut.</h3><p>VIA Rail is useful on selected corridors and long-distance experiential journeys, but schedules and journey times require a deliberate overnight or multi-day plan.</p></article><article><small>Road</small><h3>Budget winter, fuel and the driver.</h3><p>Mountain passes, construction, wildlife, snow, wildfire, remote services and fatigue can change a neat map line into a full operating day.</p></article><article><small>Water & air</small><h3>Name the terminal and the buffer.</h3><p>Island ferries, marine tours and regional flights have check-in, weather, baggage and missed-connection consequences that belong in the route.</p></article></div></section>
  <section class="ca-country-section"><div class="ca-band-heading"><span>Season board</span><h2>One national forecast is not enough.</h2></div><div class="ca-condition-grid"><article><strong>Summer</strong><p>High demand, wildfire smoke, park reservations, marine conditions and long daylight can all matter at once.</p></article><article><strong>Winter</strong><p>Snow, ice, avalanche control, road closures, short daylight and extreme cold change both equipment and travel time.</p></article><article><strong>Shoulder seasons</strong><p>Lower crowds can arrive with reduced schedules, trail snow, freeze–thaw, spring runoff or variable ferry and operator service.</p></article><article><strong>North</strong><p>Daylight, cold, aurora probability, road status and operator season define the useful travel window more than a national “best month.”</p></article></div></section>
  <section class="ca-country-section"><div class="ca-band-heading"><span>Entry & care</span><h2>Check the legal and local boundary before booking.</h2></div><div class="ca-country-notes"><article><h3>Entry documents</h3><p>Use Immigration, Refugees and Citizenship Canada for current visitor entry rules. Eligibility depends on nationality, passport, purpose and individual circumstances.</p></article><article><h3>Parks and reservations</h3><p>Use Parks Canada and the relevant provincial or local authority for reservations, closures, trail conditions, wildlife rules and seasonal services.</p></article><article><h3>Indigenous tourism and community access</h3><p>Prefer community-led or clearly authorized experiences. Do not treat public map visibility as permission to enter cultural places, private land or sensitive community spaces.</p></article></div></section>
  <section class="ca-country-section"><div class="ca-band-heading"><span>Planning answers</span><h2>Canada FAQ</h2></div><div class="faq-list">${faq.map(([question, answer]) => `<details><summary>${question}</summary><div class="faq-answer"><p>${answer}</p></div></details>`).join('')}</div></section>
  <section class="section sources"><h2>Official sources and photo credits</h2><p>Country planning and image licensing were reviewed on ${reviewDate}. Entry, transport, weather, park and operator rules change; verify directly before travel.</p><ul>${sourceList(canadaCountrySources)}${canadaClusters.map((cluster) => imageCredit(cluster.guides[0].image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
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

function canadaCityNavigation(cluster) {
  return `<details name="canada-city-chapters" class="sidebar-accordion sidebar-chapters" data-sidebar-id="chapters-ca-${cluster.slug}"><summary><span class="sidebar-summary-main">${escapeHtml(cluster.name)}</span><span class="sidebar-summary-meta">3</span></summary><div class="sidebar-links sidebar-accordion-body"><a class="sidebar-link" href="/canada/${cluster.slug}/" data-nav-key="ca-${cluster.slug}">${escapeHtml(cluster.name)}</a>${cluster.guides.map((guide) => `<a class="sidebar-link" href="${guide.url}" data-nav-key="ca-${cluster.slug}-${guide.slug}">${escapeHtml(guide.name)}</a>`).join('')}</div></details>`;
}

function updateSidebar() {
  const file = path.join(root, 'components', 'sidebar.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- CANADA_NAV_START -->';
  const end = '<!-- CANADA_NAV_END -->';
  const block = `${start}\n<details class="sidebar-accordion sidebar-country" data-sidebar-id="canada"><summary><span class="sidebar-summary-main">Canada</span><span class="sidebar-summary-meta">18</span></summary><div class="sidebar-links sidebar-accordion-body"><a class="sidebar-link" href="/canada/" data-nav-key="canada">Canada guide</a>${canadaClusters.map(canadaCityNavigation).join('')}</div></details>\n${end}`;
  if (html.includes(start)) html = replaceMarked(html, start, end, block);
  else if (html.includes('<!-- USA_NAV_END -->')) {
    const close = '</div></details></div></details>';
    const usaEnd = html.indexOf('<!-- USA_NAV_END -->');
    const before = html.slice(0, usaEnd);
    const closeAt = before.lastIndexOf(close);
    if (closeAt === -1) throw new Error('Could not locate North America accordion closure.');
    html = before.slice(0, closeAt) + `</div></details>${block}</div></details>` + before.slice(closeAt + close.length) + html.slice(usaEnd);
  } else throw new Error('USA navigation marker missing.');
  fs.writeFileSync(file, html);
}

function updateHeader() {
  const file = path.join(root, 'components', 'header.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- CANADA_HEADER_START -->';
  const end = '<!-- CANADA_HEADER_END -->';
  const block = `${start}\n      <a class="nav-link" href="/canada/" data-nav-key="canada">Canada</a>\n${end}`;
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- USA_HEADER_END -->', block);
  fs.writeFileSync(file, html);
}

function updateFooter() {
  const file = path.join(root, 'components', 'footer.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- CANADA_FOOTER_START -->';
  const end = '<!-- CANADA_FOOTER_END -->';
  const block = `${start}<a href="/canada/">Canada</a><a href="/canada/vancouver-north-shore/">Vancouver &amp; North Shore</a><a href="/canada/banff-lake-louise/">Banff &amp; Lake Louise</a><a href="/canada/toronto/">Toronto</a><a href="/canada/montreal/">Montreal</a><a href="/canada/quebec-city-charlevoix/">Quebec City &amp; Charlevoix</a><a href="/canada/halifax-nova-scotia/">Halifax &amp; Nova Scotia</a>${end}`;
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- USA_FOOTER_END -->', block);
  fs.writeFileSync(file, html);
}

function updateSearch() {
  const file = path.join(root, 'data', 'search-index.json');
  const records = JSON.parse(fs.readFileSync(file, 'utf8')).filter((item) => !item.url.startsWith('/canada/'));
  records.push({ title: 'Canada Travel Guide', url: '/canada/', parent: 'North America', type: 'Country', summary: 'Plan Canada through eighteen complete travel hubs and fifty-four focused guides across cities, mountains, coasts, prairies and the North.', keywords: ['Canada', 'Canadian travel', 'North America'] });
  for (const cluster of canadaClusters) {
    records.push({ title: cluster.name, url: `/canada/${cluster.slug}/`, parent: 'Canada', type: 'Regional guide', summary: cluster.hubIntro, keywords: [cluster.name, cluster.region, cluster.band] });
    for (const guide of cluster.guides) records.push({ title: guide.name, url: guide.url, parent: cluster.name, type: 'Local guide', summary: guide.summary, keywords: [guide.name, cluster.name, cluster.region, guide.layout] });
  }
  fs.writeFileSync(file, JSON.stringify(records, null, 2) + '\n');
}

function updateHome() {
  const file = path.join(root, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- CANADA_HOME_START -->';
  const end = '<!-- CANADA_HOME_END -->';
  const image = canadaClusters[0].guides[0].image;
  const block = `${start}\n<a class="destination-card featured" href="/canada/"><img src="${image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(image.alt)}"><div class="destination-copy"><small>North America · New complete country</small><h3>Canada</h3><p>Compare eighteen complete regional hubs and fifty-four focused guides from Pacific cities and the Rockies to Atlantic coasts and the North.</p><span class="card-arrow">Plan Canada →</span></div></a>\n${end}`;
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- USA_HOME_END -->', block);
  const creditStart = '<!-- CANADA_HOME_CREDIT_START -->';
  const creditEnd = '<!-- CANADA_HOME_CREDIT_END -->';
  const credit = `${creditStart}<ul>${imageCredit(image)}</ul>${creditEnd}`;
  html = html.includes(creditStart) ? replaceMarked(html, creditStart, creditEnd, credit) : insertAfterMarker(html, '<!-- USA_HOME_CREDIT_END -->', credit);
  html = html.replace('8 countries live', '9 countries live');
  html = html.replace('The United States collection connects 24 cities and regions with 72 local guides.', 'Canada adds 18 complete regional hubs and 54 focused local guides alongside the United States collection.');
  html = html.replace('Explore the United States, Australia and Asia', 'Explore Canada, the United States, Australia and Asia');
  html = html.replace('The United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand are live.', 'Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand are live.');
  html = html.replace('Plan the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand', 'Plan Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand');
  html = html.replace('Practical United States, Australia and Asia country, city and regional travel guides.', 'Practical Canada, United States, Australia and Asia country, city and regional travel guides.');
  fs.writeFileSync(file, html);
}

function updateAbout() {
  const file = path.join(root, 'about', 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  if (!html.includes('TripDistill now covers Italy,')) html = html.replace(/TripDistill now covers[^<]*/, 'TripDistill now covers Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand. Canada adds 18 complete regional hubs and 54 focused guides; every destination URL is published only after it contains useful planning decisions, current official sources and visible image provenance.');
  fs.writeFileSync(file, html);
}

for (const [index, cluster] of canadaClusters.entries()) {
  const file = routeFile(`/canada/${cluster.slug}/`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, hubPage(cluster, index));
}
for (const guide of canadaGuides) {
  const cluster = canadaClusters.find((item) => item.slug === guide.hubSlug);
  const file = routeFile(guide.url);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, guidePage(guide, cluster));
}
const countryFile = routeFile('/canada/');
fs.mkdirSync(path.dirname(countryFile), { recursive: true });
fs.writeFileSync(countryFile, countryPage());
updateSidebar();
updateHeader();
updateFooter();
updateSearch();
updateHome();
updateAbout();

console.log(`Generated Canada: 1 country page, ${canadaClusters.length} hubs and ${canadaGuides.length} focused guides (73 English routes), plus shell, home and search integration.`);
