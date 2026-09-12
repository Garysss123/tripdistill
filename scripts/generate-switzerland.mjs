import fs from 'node:fs';
import path from 'node:path';
import { switzerlandClusters, switzerlandCountrySources, switzerlandGuides } from '../data/switzerland-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const reviewDate = '12 September 2026';
const isoDate = '2026-09-12';
const siteCss = '/css/site.css?v=20260904-1';
const countryCss = '/css/switzerland.css?v=20260912-1';
const fieldCss = '/css/switzerland-field.css?v=20260912-1';
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
const compact = (value, maximum = 150) => {
  const text = String(value).replace(/\s+/g, ' ').trim();
  if (text.length <= maximum) return text;
  return text.slice(0, maximum - 1).replace(/\s+\S*$/, '') + '…';
};
const metaDescription = (value) => {
  let text = String(value).replace(/\s+/g, ' ').trim();
  if (text.length < 120) text += ' Compare the rail or lift access, timing, weather gate and return before committing the day.';
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

function sharedHead({ title, description, route, image, type = 'article', field = false }) {
  return `<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${absolute(route)}">${hreflang(route)}
  <meta name="theme-color" content="#d71920"><meta property="og:type" content="${type}"><meta property="og:site_name" content="TripDistill"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${absolute(route)}"><meta property="og:image" content="${absolute(image.src)}"><meta name="twitter:card" content="summary_large_image">
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
      breadcrumb([['Home', absolute('/')], ['Switzerland', absolute('/switzerland/')], [guide.hubName, absolute(`/switzerland/${guide.hubSlug}/`)], [guide.name, absolute(guide.url)]]),
      faqSchema(guide.faq)
    ]
  };
}

function guidePage(guide, cluster, guideIndex) {
  const variant = (guideIndex % 8) + 1;
  const description = metaDescription(`${guide.summary} ${guide.access}`);
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>${sharedHead({ title: `${guide.name} Travel Guide | TripDistill Switzerland`, description, route: guide.url, image: guide.image, field: true })}<script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(guideSchema(guide))}</script></head>
<body data-page="ch-${escapeHtml(cluster.slug)}-${escapeHtml(guide.slug)}" data-parent-page="switzerland" data-country="switzerland" data-region="${escapeHtml(cluster.slug)}">
${shellStart(`<main id="main-content" class="page-content ch-field" data-ch-family="${escapeHtml(cluster.family)}" data-ch-layout="${escapeHtml(guide.layout)}" data-ch-variant="${variant}" data-ch-instrument="${escapeHtml(guide.instrument)}">`)}
  <nav class="ch-breadcrumb" aria-label="Breadcrumb"><a href="/switzerland/">Switzerland</a><span>→</span><a href="/switzerland/${cluster.slug}/">${escapeHtml(cluster.name)}</a><span>→</span><strong>${escapeHtml(guide.name)}</strong></nav>
  <section class="ch-field-hero"><div class="ch-field-copy"><span class="ch-kicker">${escapeHtml(cluster.region)} · field instrument ${String(guideIndex + 1).padStart(2, '0')}</span><h1>${escapeHtml(guide.name)}</h1><p>${escapeHtml(guide.summary)}</p><div class="hero-actions"><a class="button primary" href="#route">Run the route</a><a class="button secondary" href="#failure-points">See the failure points</a></div></div><figure><img src="${guide.image.src}" width="1600" height="1066" fetchpriority="high" alt="${escapeHtml(guide.image.alt)}"><figcaption>${escapeHtml(guide.image.label)} · ${escapeHtml(guide.image.license)}</figcaption></figure><aside class="ch-ticket"><small>${escapeHtml(guide.layout)}</small><strong>${escapeHtml(guide.instrument)}</strong><span>reviewed ${reviewDate}</span></aside></section>
  <section class="ch-choice-deck" aria-label="Three ways to shape the visit">${guide.choices.map(([title, copy], index) => `<article><span>0${index + 1}</span><h2>${escapeHtml(title)}</h2><p>${escapeHtml(copy)}</p></article>`).join('')}</section>
  ${ad}
  <section class="ch-orientation"><div><span class="ch-label">Access first</span><h2>Know where the day actually begins.</h2><p>${escapeHtml(guide.access)}</p></div><div><span class="ch-label">Trade-off</span><h2>What this route gives up.</h2><p>${escapeHtml(guide.tradeoff)}</p></div><aside><span class="ch-label">Time envelope</span><p>${escapeHtml(guide.duration)}</p><span class="ch-label">Combine only when it helps</span><p>${escapeHtml(guide.combine)}</p></aside></section>
  <section class="ch-regional-context"><header><span>Regional context</span><h2>Fit this field guide into ${escapeHtml(cluster.name)}, not into an isolated checklist.</h2><p>${escapeHtml(cluster.hubIntro)}</p></header><div><article><small>Base strategy</small><p>${escapeHtml(cluster.stay)}</p></article><article><small>Transfer system</small><p>${escapeHtml(cluster.transfer)}</p></article><article><small>Season gate</small><p>${escapeHtml(cluster.season)}</p></article><article><small>Regional fallback</small><p>${escapeHtml(cluster.fallback)}</p></article></div></section>
  <section class="ch-route" id="route"><header><span>Four-stage operating line</span><h2>Arrive, orient, commit, then protect the return.</h2><p>${escapeHtml(guide.verify)}</p></header><ol>${guide.route.map(([label, title, copy], index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><small>${escapeHtml(label)}</small><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></li>`).join('')}</ol></section>
  <section class="ch-fallback"><div><span class="ch-label">Fallback</span><h2>A useful day even when the postcard disappears.</h2><p>${escapeHtml(guide.fallback)}</p></div><blockquote>${escapeHtml(guide.verify)}</blockquote></section>
  <section class="ch-watch" id="failure-points"><header><span>Three failure points</span><h2>Change the plan before the problem compounds.</h2></header><div>${guide.watch.map(([title, copy], index) => `<article><b>0${index + 1}</b><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></article>`).join('')}</div></section>
  <section class="ch-related"><header><span>Same regional timetable</span><h2>Other ways to use ${escapeHtml(cluster.name)}.</h2></header><div>${cluster.guides.filter((item) => item.slug !== guide.slug).map((item) => `<a href="${item.url}"><img src="${item.image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(item.image.alt)}"><div><small>${escapeHtml(item.instrument)}</small><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(compact(item.summary, 120))}</p><strong>Open this guide →</strong></div></a>`).join('')}</div></section>
  <section class="ch-faq"><header><span>Planning answers</span><h2>${escapeHtml(guide.name)} FAQ</h2></header><div class="faq-list">${guide.faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>
  <section class="section sources"><h2>Official sources and photo credits</h2><p>Planning facts and image licensing were reviewed on ${reviewDate}. Lift, boat, trail, weather and transport conditions can change quickly; verify the linked operator or authority before travel.</p><ul>${sourceList(cluster.sources)}${cluster.guides.map((item) => imageCredit(item.image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
</main>${shellEnd()}</body></html>`;
}

function hubFaq(cluster) {
  return [
    [`How long should I give ${cluster.name}?`, cluster.stay],
    [`What transport decision matters most around ${cluster.name}?`, cluster.transfer],
    ['What should I do if mountain, lake or weather conditions change?', cluster.fallback]
  ];
}

function hubSchema(cluster) {
  const route = `/switzerland/${cluster.slug}/`;
  return {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'Article', '@id': `${absolute(route)}#article`, headline: `${cluster.name} Travel Guide`, description: cluster.hubIntro, inLanguage: 'en', datePublished: isoDate, dateModified: isoDate, mainEntityOfPage: absolute(route), image: absolute(cluster.guides[0].image.src), about: { '@type': 'TouristDestination', name: cluster.name }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
      breadcrumb([['Home', absolute('/')], ['Switzerland', absolute('/switzerland/')], [cluster.name, absolute(route)]]), faqSchema(hubFaq(cluster))
    ]
  };
}

function hubPage(cluster, clusterIndex) {
  const route = `/switzerland/${cluster.slug}/`;
  const hero = cluster.guides[0].image;
  const faq = hubFaq(cluster);
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>${sharedHead({ title: `${cluster.name} Travel Guide — 3 Focused Routes | TripDistill`, description: metaDescription(`${cluster.hubIntro} ${cluster.transfer}`), route, image: hero })}<script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(hubSchema(cluster))}</script></head>
<body data-page="ch-${escapeHtml(cluster.slug)}" data-parent-page="switzerland" data-country="switzerland" data-region="${escapeHtml(cluster.slug)}">
${shellStart(`<main id="main-content" class="page-content ch-hub" data-ch-family="${escapeHtml(cluster.family)}" data-ch-hub-variant="${(clusterIndex % 6) + 1}">`)}
  <section class="ch-hub-hero"><div class="ch-hub-copy"><span class="ch-kicker">Swiss regional timetable · ${String(clusterIndex + 1).padStart(2, '0')}</span><h1>${escapeHtml(cluster.name)}</h1><p class="ch-tagline">${escapeHtml(cluster.tagline)}</p><p>${escapeHtml(cluster.hubIntro)}</p><div class="hero-actions"><a class="button primary" href="#field-guides">Choose a field guide</a><a class="button secondary" href="#operating-model">Read the operating model</a></div></div><figure><img src="${hero.src}" width="1600" height="1066" fetchpriority="high" alt="${escapeHtml(hero.alt)}"><figcaption>${escapeHtml(hero.label)} · ${escapeHtml(hero.license)}</figcaption></figure><div class="ch-coordinate"><small>${escapeHtml(cluster.label)}</small><strong>${escapeHtml(cluster.family)}</strong><span>reviewed ${reviewDate}</span></div></section>
  <section class="ch-hub-ledger"><article><small>Stay</small><p>${escapeHtml(cluster.stay)}</p></article><article><small>Transfer contract</small><p>${escapeHtml(cluster.transfer)}</p></article><article><small>Season gate</small><p>${escapeHtml(cluster.season)}</p></article></section>
  ${ad}
  <section class="ch-guide-board" id="field-guides"><header><span>Three independent field guides</span><h2>Do not make every rail line, lake and summit compete for the same day.</h2><p>Each guide below has its own access contract, choice set, four-stage route, fallback and current-source check.</p></header><div>${cluster.guides.map((guide) => `<a class="ch-hub-card" href="${guide.url}" data-layout="${escapeHtml(guide.layout)}"><img src="${guide.image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(guide.image.alt)}"><div><small>${escapeHtml(guide.instrument)}</small><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(guide.summary)}</p><strong>Open the field guide →</strong></div><span>0${guide.chapter}</span></a>`).join('')}</div></section>
  <section class="ch-operating" id="operating-model"><header><span>Regional operating model</span><h2>Read the timetable and terrain together.</h2></header><div><article><small>Base</small><h3>Make the first departure easy.</h3><p>${escapeHtml(cluster.stay)}</p></article><article><small>Network</small><h3>Name the actual rail, tram, bus, boat or lift.</h3><p>${escapeHtml(cluster.transfer)}</p></article><article><small>Conditions</small><h3>The mountain forecast is not the city forecast.</h3><p>${escapeHtml(cluster.season)}</p></article><article><small>Fallback</small><h3>Keep a lower-risk layer ready.</h3><p>${escapeHtml(cluster.fallback)}</p></article></div></section>
  <section class="ch-comparison"><header><span>Route comparison</span><h2>Three different reasons to leave the hotel.</h2></header><div>${cluster.guides.map((guide) => `<a href="${guide.url}"><span>0${guide.chapter}</span><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(guide.tradeoff)}</p><small>${escapeHtml(guide.duration)}</small></a>`).join('')}</div></section>
  <section class="ch-faq"><header><span>Planning answers</span><h2>${escapeHtml(cluster.name)} FAQ</h2></header><div class="faq-list">${faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>
  <section class="section sources"><h2>Official sources and photo credits</h2><p>Planning facts and image licensing were reviewed on ${reviewDate}. Recheck transport, trail, lift, boat, weather and attraction status before travel.</p><ul>${sourceList(cluster.sources)}${cluster.guides.map((guide) => imageCredit(guide.image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
</main>${shellEnd()}</body></html>`;
}

const countryFaq = [
  ['How many regions should I combine on a first Switzerland trip?', 'Two or three operating regions usually fit a seven-to-ten-day trip more comfortably than a grand loop. Base in rail-connected cities and add mountain or lake days only when they solve a specific travel goal.'],
  ['Do I need a rental car in Switzerland?', 'No for the core itinerary. National and regional rail, trams, buses, boats and mountain transport cover many major destinations. A car can help selected rural plans, but parking, mountain-road conditions and car-free resorts change the trade-off.'],
  ['Should I buy a Swiss Travel Pass?', 'Price the pass against the actual long-distance rail, local transport, museum and mountain-transport benefits you will use. The best product depends on itinerary and eligibility; confirm current inclusions with SBB or the issuer.'],
  ['What changes fastest in Switzerland?', 'Mountain visibility, trail status, lift maintenance, boat seasons and high-altitude weather can change a day more quickly than city transit. Keep one lower-elevation alternative in every mountain-heavy stay.']
];

function countrySchema() {
  return { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', '@id': 'https://tripdistill.com/switzerland/#article', headline: 'Switzerland Travel Guide', description: 'Sixteen complete Swiss travel hubs and forty-eight focused field guides organized around rail, lakes, cities and mountain access.', inLanguage: 'en', datePublished: isoDate, dateModified: isoDate, mainEntityOfPage: 'https://tripdistill.com/switzerland/', image: absolute(switzerlandClusters[0].guides[0].image.src), about: { '@type': 'Country', name: 'Switzerland' }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
    breadcrumb([['Home', absolute('/')], ['Switzerland', absolute('/switzerland/')]]), faqSchema(countryFaq)
  ] };
}

const countryGroups = [
  [['cities'], '01 · Rail cities', 'Stations are itinerary architecture.', 'Zurich, Bern, Basel and Geneva work best when the main station, tram network, river or lake edge and one cultural anchor define the day before extra districts are added.'],
  [['lakes'], '02 · Lake systems', 'Use water as a connector, not decoration.', 'Lucerne, Lausanne, the Riviera, Interlaken and Ticino add boats, shoreline rail and steep local elevation. A scenic connection still needs a timetable and a useful return.'],
  [['alps'], '03 · Alpine gates', 'Pay for elevation only when conditions justify it.', 'Jungfrau, Zermatt, Engadin, Graubünden and Appenzell turn weather, lift status and final descent into the core planning decision rather than a footnote.']
];

function countryCards(bands) {
  return switzerlandClusters.filter((cluster) => bands.includes(cluster.band)).map((cluster) => {
    const image = cluster.guides[0].image;
    return `<a class="ch-country-card" href="/switzerland/${cluster.slug}/" data-family="${escapeHtml(cluster.family)}"><img src="${image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(image.alt)}"><div><small>${escapeHtml(cluster.region)} · 3 focused guides</small><h3>${escapeHtml(cluster.name)}</h3><p>${escapeHtml(compact(cluster.hubIntro, 155))}</p><strong>Open the regional timetable →</strong></div><span>${String(switzerlandClusters.indexOf(cluster) + 1).padStart(2, '0')}</span></a>`;
  }).join('');
}

function countryPage() {
  const hero = switzerlandClusters[0].guides[0].image;
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>${sharedHead({ title: 'Switzerland Travel Guide — 16 Complete Regional Hubs | TripDistill', description: metaDescription('Plan Switzerland through sixteen complete hubs and forty-eight focused guides for rail cities, lake corridors, alpine regions and Ticino valleys.'), route: '/switzerland/', image: hero, type: 'website' })}<script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(countrySchema())}</script></head>
<body data-page="switzerland" data-country="switzerland">
${shellStart('<main id="main-content" class="page-content ch-country">')}
  <section class="ch-country-hero"><div class="ch-country-copy"><span class="ch-kicker">Precision travel atlas · reviewed ${reviewDate}</span><h1>Switzerland <span>read the timetable and topography as one map.</span></h1><p>The country is compact on a rail map, but a useful day changes with lake shores, valley floors, funiculars, mountain railways, lifts and cloud level. Sixteen complete hubs make those operating systems visible before the postcard decides the route.</p><div class="hero-actions"><a class="button primary" href="#regions">Compare 16 hubs</a><a class="button secondary" href="#network">Read the network contract</a></div><div class="ch-country-facts"><div><strong>16</strong><span>regional hubs</span></div><div><strong>48</strong><span>focused guides</span></div><div><strong>5</strong><span>static languages</span></div></div></div><figure><img src="${hero.src}" width="1600" height="1066" fetchpriority="high" alt="${escapeHtml(hero.alt)}"><figcaption>${escapeHtml(hero.label)} · ${escapeHtml(hero.license)}</figcaption></figure><div class="ch-timetable-mark" aria-hidden="true"><span>RAIL</span><i></i><span>LAKE</span><i></i><span>VALLEY</span><i></i><span>SUMMIT</span></div></section>
  <section class="ch-country-principles"><article><span>01</span><h2>Choose the operating region.</h2><p>Zurich, Lake Lucerne, Jungfrau, Zermatt, Engadin and Ticino may be close in kilometers but they use different local transport and weather gates.</p></article><article><span>02</span><h2>Protect the last descent.</h2><p>Mountain days are built backward from the last practical lift, funicular, boat or valley train—not forward from the first Instagram viewpoint.</p></article><article><span>03</span><h2>Keep one lower layer.</h2><p>Cloud can erase the expensive part of a mountain day while the city, lake or valley below remains useful. A good itinerary already knows that fallback.</p></article></section>
  ${ad}
  <div id="regions">${countryGroups.map(([bands, kicker, heading, copy]) => `<section class="ch-country-band"><div class="ch-band-heading"><span>${kicker}</span><h2>${heading}</h2><p>${copy}</p></div><div class="ch-country-grid">${countryCards(bands)}</div></section>`).join('')}</div>
  <section class="ch-country-section" id="network"><div class="ch-band-heading"><span>Network contract</span><h2>Switzerland is rail-first, not planning-free.</h2><p>Dense public transport removes many car problems but creates a different discipline: know the operator, exact station or quay, reservation rules where relevant, and the last useful connection.</p></div><div class="ch-network-grid"><article><small>Mainline rail</small><h3>Use SBB as the national spine.</h3><p>Intercity and regional rail make multi-base trips easy. Compare door-to-door times and hotel changes, not only the fastest platform-to-platform number.</p></article><article><small>Local networks</small><h3>Trams and buses finish the city route.</h3><p>Zurich, Basel, Bern, Geneva, Lausanne and regional networks reward saving the exact stop and line rather than assuming a station name identifies one entrance.</p></article><article><small>Mountain transport</small><h3>Funicular, cogwheel and lift are separate contracts.</h3><p>Operating seasons, maintenance, wind, snow and cloud can affect each segment differently. Confirm the system that actually reaches your chosen route.</p></article><article><small>Boats</small><h3>Scenic does not mean frequent.</h3><p>Lake services can be excellent itinerary links, but season and route pattern matter. Keep rail or bus as the fallback when water does not match the return.</p></article></div></section>
  <section class="ch-country-section"><div class="ch-band-heading"><span>Trip-length board</span><h2>Fewer bases, more weather flexibility.</h2></div><div class="ch-trip-grid"><article><strong>5–7 days</strong><h3>One city + one mountain/lake region</h3><p>Example: Zurich + Lucerne, or Bern + Jungfrau. Keep one flexible day instead of racing across language regions.</p></article><article><strong>8–10 days</strong><h3>Two or three connected bases</h3><p>Use one mainline rail corridor, then add one alpine branch. Let weather decide the order of mountain and lowland days.</p></article><article><strong>12–14 days</strong><h3>Add a contrasting region</h3><p>Ticino, Engadin or western Lake Geneva becomes worthwhile when the transfer buys a genuinely different landscape and culture, not another hotel key.</p></article></div></section>
  <section class="ch-country-section"><div class="ch-band-heading"><span>Season board</span><h2>Read elevation before the calendar label.</h2></div><div class="ch-season-grid"><article><strong>Winter</strong><p>Lowland cities remain usable while mountain transport, snow conditions and daylight redefine high routes. Resort operations are not the same as summer hiking access.</p></article><article><strong>Spring</strong><p>Valleys can feel mild while high trails remain snowy or muddy. Shoulder-season lift maintenance makes exact operating dates important.</p></article><article><strong>Summer</strong><p>Long daylight helps lake and hiking plans, but thunderstorms, heat and crowding can still push the best mountain window earlier.</p></article><article><strong>Autumn</strong><p>Clear days can be excellent, but shortening daylight and seasonal closures reward conservative return times and current operator checks.</p></article></div></section>
  <section class="ch-country-section"><div class="ch-band-heading"><span>Planning answers</span><h2>Switzerland FAQ</h2></div><div class="faq-list">${countryFaq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>
  <section class="section sources"><h2>Official sources and photo credits</h2><p>Country planning and image licensing were reviewed on ${reviewDate}. Entry, fares, passes, timetables, lifts, trails and weather change; verify directly before travel.</p><ul>${sourceList(switzerlandCountrySources)}${switzerlandClusters.map((cluster) => imageCredit(cluster.guides[0].image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
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

function updateSidebar() {
  const file = path.join(root, 'components', 'sidebar.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- SWITZERLAND_NAV_START -->';
  const end = '<!-- SWITZERLAND_NAV_END -->';
  const chapters = switzerlandClusters.map((cluster) => `<details name="switzerland-chapters" class="sidebar-accordion sidebar-chapters" data-sidebar-id="chapters-ch-${cluster.slug}"><summary><span class="sidebar-summary-main">${escapeHtml(cluster.name)}</span><span class="sidebar-summary-meta">3</span></summary><div class="sidebar-links sidebar-accordion-body"><a class="sidebar-link" href="/switzerland/${cluster.slug}/" data-nav-key="ch-${cluster.slug}">${escapeHtml(cluster.name)}</a>${cluster.guides.map((guide) => `<a class="sidebar-link" href="${guide.url}" data-nav-key="ch-${cluster.slug}-${guide.slug}">${escapeHtml(guide.name)}</a>`).join('')}</div></details>`).join('');
  const block = `${start}\n<details class="sidebar-accordion sidebar-continent" data-sidebar-id="europe"><summary><span class="sidebar-summary-main"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>Europe</span></summary><div class="sidebar-accordion-body"><details class="sidebar-accordion sidebar-country" data-sidebar-id="switzerland"><summary><span class="sidebar-summary-main">Switzerland</span><span class="sidebar-summary-meta">16</span></summary><div class="sidebar-links sidebar-accordion-body"><a class="sidebar-link" href="/switzerland/" data-nav-key="switzerland">Switzerland guide</a>${chapters}</div></details></div></details>\n${end}`;
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- USA_NAV_END -->', block);
  fs.writeFileSync(file, html);
}

function updateHeader() {
  const file = path.join(root, 'components', 'header.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- SWITZERLAND_HEADER_START -->';
  const end = '<!-- SWITZERLAND_HEADER_END -->';
  const block = `${start}<a class="nav-link" href="/switzerland/" data-nav-key="switzerland">Switzerland</a>${end}`;
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- CANADA_HEADER_END -->', block);
  fs.writeFileSync(file, html);
}

function updateFooter() {
  const file = path.join(root, 'components', 'footer.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- SWITZERLAND_FOOTER_START -->';
  const end = '<!-- SWITZERLAND_FOOTER_END -->';
  const block = `${start}<a href="/switzerland/">Switzerland</a><a href="/switzerland/zurich-lake/">Zurich</a><a href="/switzerland/lucerne-lake-mountains/">Lucerne</a><a href="/switzerland/jungfrau-region/">Jungfrau</a><a href="/switzerland/zermatt-matterhorn/">Zermatt</a><a href="/switzerland/lugano-southern-ticino/">Lugano</a>${end}`;
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- CANADA_FOOTER_END -->', block);
  fs.writeFileSync(file, html);
}

function updateSearch() {
  const file = path.join(root, 'data', 'search-index.json');
  const records = JSON.parse(fs.readFileSync(file, 'utf8')).filter((item) => !item.url.startsWith('/switzerland/'));
  records.push({ title: 'Switzerland Travel Guide', url: '/switzerland/', parent: 'Europe', type: 'Country', summary: 'Plan Switzerland through sixteen complete regional hubs and forty-eight focused guides built around rail, lakes, valleys and mountain access.', keywords: ['Switzerland', 'Swiss travel', 'Europe', 'Swiss rail'] });
  for (const cluster of switzerlandClusters) {
    records.push({ title: cluster.name, url: `/switzerland/${cluster.slug}/`, parent: 'Switzerland', type: 'Regional guide', summary: cluster.hubIntro, keywords: [cluster.name, cluster.region, cluster.band] });
    for (const guide of cluster.guides) records.push({ title: guide.name, url: guide.url, parent: cluster.name, type: 'Local guide', summary: guide.summary, keywords: [guide.name, cluster.name, guide.instrument, guide.layout] });
  }
  fs.writeFileSync(file, JSON.stringify(records, null, 2) + '\n');
}

function updateHome() {
  const file = path.join(root, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- SWITZERLAND_HOME_START -->';
  const end = '<!-- SWITZERLAND_HOME_END -->';
  const image = switzerlandClusters[8].guides[0].image;
  const block = `${start}<a class="destination-card featured" href="/switzerland/"><img src="${image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(image.alt)}"><div class="destination-copy"><small>Europe · New complete country</small><h3>Switzerland</h3><p>Compare sixteen complete regional hubs and forty-eight focused guides built around rail cities, lake corridors, valleys and mountain weather gates.</p><span class="card-arrow">Plan Switzerland →</span></div></a>${end}`;
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- CANADA_HOME_END -->', block);
  const creditStart = '<!-- SWITZERLAND_HOME_CREDIT_START -->';
  const creditEnd = '<!-- SWITZERLAND_HOME_CREDIT_END -->';
  const credit = `${creditStart}<ul>${imageCredit(image)}</ul>${creditEnd}`;
  html = html.includes(creditStart) ? replaceMarked(html, creditStart, creditEnd, credit) : insertAfterMarker(html, '<!-- CANADA_HOME_CREDIT_END -->', credit);
  html = html.replace('9 countries live', '10 countries live');
  html = html.replace('Canada adds 18 complete regional hubs and 54 focused local guides alongside the United States collection.', 'Switzerland adds 16 complete regional hubs and 48 focused guides across rail cities, lake corridors, valleys and mountain systems.');
  html = html.replace('Explore Canada, the United States, Australia and Asia', 'Explore Switzerland, Canada, the United States, Australia and Asia');
  html = html.replace(/(?:Europe,\s*)*North America, Oceania and Asia/, 'Europe, North America, Oceania and Asia');
  html = html.replace(/(?:Switzerland,\s*)*Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand are live\./, 'Switzerland, Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand are live.');
  html = html.replace('Plan Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand with practical country, city, island and regional decision guides.', 'Plan Switzerland, Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand with practical destination guides.');
  html = html.replace('Plan Switzerland, Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand with practical country, city, island and regional decision guides.', 'Plan Switzerland, Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand with practical destination guides.');
  html = html.replace('Practical Canada, United States, Australia and Asia country, city and regional travel guides.', 'Practical Switzerland, Canada, United States, Australia and Asia country, city and regional travel guides.');
  fs.writeFileSync(file, html);
}

function updateAbout() {
  const file = path.join(root, 'about', 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/TripDistill now covers[^<]*/, 'TripDistill now covers Switzerland, Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand. Switzerland adds 16 complete regional hubs and 48 focused guides built around rail, lake, valley and mountain operating decisions; every destination URL is published only after useful planning detail, current official sources and visible image provenance are present.');
  fs.writeFileSync(file, html);
}

for (const [clusterIndex, cluster] of switzerlandClusters.entries()) {
  const file = routeFile(`/switzerland/${cluster.slug}/`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, hubPage(cluster, clusterIndex));
}
for (const [guideIndex, guide] of switzerlandGuides.entries()) {
  const cluster = switzerlandClusters.find((item) => item.slug === guide.hubSlug);
  const file = routeFile(guide.url);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, guidePage(guide, cluster, guideIndex));
}
const countryFile = routeFile('/switzerland/');
fs.mkdirSync(path.dirname(countryFile), { recursive: true });
fs.writeFileSync(countryFile, countryPage());
updateSidebar();
updateHeader();
updateFooter();
updateSearch();
updateHome();
updateAbout();

console.log(`Generated Switzerland: 1 country page, ${switzerlandClusters.length} hubs and ${switzerlandGuides.length} focused guides (65 English routes), plus Europe navigation, home, about and search integration.`);
