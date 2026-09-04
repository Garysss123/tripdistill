import fs from 'node:fs';
import path from 'node:path';
import { australiaClusters, australiaCountrySources, australiaGuides } from '../data/australia-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const reviewDate = '4 September 2026';
const isoDate = '2026-09-04';
const siteCss = '/css/site.css?v=20260904-1';
const countryCss = '/css/australia.css?v=20260904-1';
const fieldCss = '/css/australia-field.css?v=20260904-1';
const mainJs = '/js/main.js?v=20260904-1';
const adsenseJs = '/js/adsense.js?v=20260826-9';
const navStart = '<!-- AUSTRALIA_NAV_START -->';
const navEnd = '<!-- AUSTRALIA_NAV_END -->';
const chaptersStart = '<!-- AUSTRALIA_CHAPTERS_START -->';
const chaptersEnd = '<!-- AUSTRALIA_CHAPTERS_END -->';
const homeCardStart = '<!-- AUSTRALIA_HOME_CARD_START -->';
const homeCardEnd = '<!-- AUSTRALIA_HOME_CARD_END -->';
const homeCreditStart = '<!-- AUSTRALIA_HOME_CREDIT_START -->';
const homeCreditEnd = '<!-- AUSTRALIA_HOME_CREDIT_END -->';
const headerStart = '<!-- AUSTRALIA_HEADER_START -->';
const headerEnd = '<!-- AUSTRALIA_HEADER_END -->';
const footerStart = '<!-- AUSTRALIA_FOOTER_START -->';
const footerEnd = '<!-- AUSTRALIA_FOOTER_END -->';

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');
const absolute = (route) => `https://tripdistill.com${route}`;
const routeFile = (route) => path.join(root, route.replace(/^\//, ''), 'index.html');

function ensureMetaDescription(value) {
  let text = String(value).replace(/\s+/g, ' ').trim();
  if (text.length < 120) text += ' Plan access, weather, transport and a realistic return with official sources.';
  if (text.length > 170) text = text.slice(0, 167).replace(/\s+\S*$/, '') + '…';
  return text;
}

function compactText(value, maximum = 126) {
  const first = String(value).split(/(?<=[.!?])\s+/)[0];
  return first.length <= maximum ? first : first.slice(0, maximum - 1).replace(/\s+\S*$/, '') + '…';
}

function hreflang(route) {
  const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
  return locales.map(([language, prefix]) => `<link rel="alternate" hreflang="${language}" href="${absolute(prefix + route)}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${absolute(route)}">`;
}

function sourceList(sources) {
  return sources.map(([url, label]) => `<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(label)}</a>.</li>`).join('');
}

function imageCredit(image) {
  return `<li><a href="${escapeHtml(image.source)}" target="_blank" rel="noopener">${escapeHtml(image.label)}</a> — ${escapeHtml(image.creator)}, ${escapeHtml(image.license)}. ${escapeHtml(image.editNote)}</li>`;
}

function relatedCards(cluster, currentSlug) {
  return cluster.guides.filter((guide) => guide.slug !== currentSlug).map((guide) => `<a class="au-related-card" href="${guide.url}"><img src="${guide.image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(guide.image.alt)}"><div><small>Field ${String(guide.chapter).padStart(2, '0')} · ${escapeHtml(guide.motif)}</small><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(compactText(guide.summary, 112))}</p><strong>Open the field guide →</strong></div></a>`).join('');
}

function breadcrumb(items) {
  return { '@type': 'BreadcrumbList', itemListElement: items.map(([name, item], index) => ({ '@type': 'ListItem', position: index + 1, name, item })) };
}

function guideSchema(guide) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', '@id': `${absolute(guide.url)}#article`, headline: `${guide.name} Travel Guide`, description: guide.summary, inLanguage: 'en', datePublished: isoDate, dateModified: isoDate, mainEntityOfPage: absolute(guide.url), image: absolute(guide.image.src), about: { '@type': 'TouristDestination', name: guide.name }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
      breadcrumb([['Home', 'https://tripdistill.com/'], ['Australia', 'https://tripdistill.com/australia/'], [guide.hubName, absolute(`/australia/${guide.hubSlug}/`)], [guide.name, absolute(guide.url)]]),
      { '@type': 'FAQPage', mainEntity: guide.faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }
    ]
  };
}

function guidePage(guide, cluster) {
  const description = ensureMetaDescription(`${guide.summary} ${guide.access}`);
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(guide.name)} Travel Guide | TripDistill Australia</title><meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${absolute(guide.url)}">${hreflang(guide.url)}
  <meta name="theme-color" content="#b8582d"><meta property="og:type" content="article"><meta property="og:site_name" content="TripDistill"><meta property="og:title" content="${escapeHtml(guide.name)} — Australia field guide"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${absolute(guide.url)}"><meta property="og:image" content="${absolute(guide.image.src)}"><meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/favicon.ico" sizes="any"><link rel="stylesheet" href="${siteCss}"><link rel="stylesheet" href="${countryCss}"><link rel="stylesheet" href="${fieldCss}">
  <script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(guideSchema(guide))}</script>
</head>
<body data-page="${escapeHtml(guide.slug)}" data-parent-page="australia" data-country="australia" data-region="${escapeHtml(cluster.slug)}">
  <a class="skip-link" href="#main-content">Skip to content</a><div id="layout-header"></div><div class="site-shell"><div class="mobile-overlay" data-mobile-overlay aria-hidden="true"></div><aside id="layout-sidebar" class="sidebar" aria-label="TripDistill navigation"></aside>
    <main id="main-content" class="page-content au-field" data-au-family="${escapeHtml(cluster.family)}" data-au-instrument="${escapeHtml(guide.instrument)}">
      <nav class="au-breadcrumb" aria-label="Breadcrumb"><a href="/australia/">Australia</a><span>/</span><a href="/australia/${cluster.slug}/">${escapeHtml(cluster.name)}</a><span>/</span><strong>${escapeHtml(guide.name)}</strong></nav>
      <section class="au-field-hero" aria-labelledby="au-field-title"><div class="au-field-copy"><span class="au-kicker">${escapeHtml(cluster.region)} · field ${String(guide.chapter).padStart(2, '0')} · reviewed ${reviewDate}</span><h1 id="au-field-title">${escapeHtml(guide.name)} <span>${escapeHtml(guide.motif)}.</span></h1><p>${escapeHtml(guide.summary)}</p><div class="hero-actions"><a class="button primary" href="#route">Follow the field sequence</a><a class="button secondary" href="#checks">Read the weak points</a></div></div><figure><img src="${guide.image.src}" width="1600" height="1066" alt="${escapeHtml(guide.image.alt)}" fetchpriority="high"><figcaption>${escapeHtml(guide.image.label)} · ${escapeHtml(guide.image.license)}</figcaption></figure><div class="au-field-index" aria-hidden="true"><small>${escapeHtml(cluster.name)}</small><strong>${String(guide.chapter).padStart(2, '0')}</strong><span>Australia field atlas</span></div></section>
      <section class="au-decision-strip" aria-label="Three planning decisions">${guide.decisions.map(([label, copy]) => `<article><small>${escapeHtml(label)}</small><p>${escapeHtml(copy)}</p></article>`).join('')}</section>
      <section class="section compact" aria-label="Advertisement"><div class="ad-slot" data-ad-slot><div><strong>Advertisement</strong><span>Responsive AdSense placement reserved</span></div></div></section>
      <section class="au-reading" aria-labelledby="au-reading-title"><div><span class="au-section-label">Field orientation</span><h2 id="au-reading-title">Make the decision before the distance.</h2><p>${escapeHtml(guide.lead)}</p><p>${escapeHtml(guide.orientation)}</p></div><aside><small>Access first</small><p>${escapeHtml(guide.access)}</p><small>Sequence</small><p>${escapeHtml(guide.sequence)}</p></aside></section>
      <section class="au-field-section" id="route" aria-labelledby="au-route-title"><div class="au-section-heading"><span>Four-stage field sequence</span><h2 id="au-route-title">A route with an exit built in.</h2><p>${escapeHtml(guide.boundary)}</p></div><div class="au-route-grid">${guide.route.map(([label, title, copy], index) => `<article class="au-route-step"><span>${String(index + 1).padStart(2, '0')}</span><small>${escapeHtml(label)}</small><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></article>`).join('')}</div></section>
      <section class="au-field-section" id="checks" aria-labelledby="au-checks-title"><div class="au-section-heading"><span>Failure points</span><h2 id="au-checks-title">Three reasons to change the plan.</h2></div><div class="au-check-grid">${guide.checks.map(([title, copy], index) => `<article class="au-check"><span>0${index + 1}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></article>`).join('')}</div><div class="au-boundary"><small>Country and care boundary</small><h3>Access is never implied by proximity.</h3><p>${escapeHtml(guide.boundary)}</p></div></section>
      <section class="au-field-section" aria-labelledby="au-related-title"><div class="au-section-heading"><span>Stay in this operating region</span><h2 id="au-related-title">Four related field chapters.</h2></div><div class="au-related-grid">${relatedCards(cluster, guide.slug)}</div><p class="au-back"><a href="/australia/${cluster.slug}/">← Return to ${escapeHtml(cluster.name)}</a></p></section>
      <section class="au-field-section" aria-labelledby="au-faq-title"><div class="au-section-heading"><span>Planning answers</span><h2 id="au-faq-title">${escapeHtml(guide.name)} FAQ</h2></div><div class="faq-list">${guide.faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>
      <section class="section sources" aria-labelledby="sources-title"><h2 id="sources-title">Official sources and photo credits</h2><p>Planning facts and image licenses were reviewed on ${reviewDate}. Access, weather, transport, fire, marine and operator conditions change; verify directly before travel.</p><ul>${sourceList(cluster.sources)}${cluster.guides.map((item) => imageCredit(item.image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
    </main>
  </div><div id="layout-footer"></div><script src="${mainJs}" defer></script>
</body>
</html>
`;
}

function hubSchema(cluster) {
  const route = `/australia/${cluster.slug}/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', '@id': `${absolute(route)}#article`, headline: `${cluster.name} Travel Guide`, description: cluster.hubIntro, inLanguage: 'en', datePublished: isoDate, dateModified: isoDate, mainEntityOfPage: absolute(route), image: absolute(cluster.guides[0].image.src), about: { '@type': 'TouristDestination', name: cluster.name }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
      breadcrumb([['Home', 'https://tripdistill.com/'], ['Australia', 'https://tripdistill.com/australia/'], [cluster.name, absolute(route)]]),
      { '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: `How long should I give ${cluster.name}?`, acceptedAnswer: { '@type': 'Answer', text: `Use at least three focused days for one coherent ${cluster.name} route. Add nights whenever remote roads, vessels, parks or weather gates are involved.` } },
        { '@type': 'Question', name: 'Can every chapter be combined in one stay?', acceptedAnswer: { '@type': 'Answer', text: 'No. Choose the base and transport system that serves the first planning problem; distant chapters often need their own overnight and weather window.' } }
      ] }
    ]
  };
}

function hubCards(cluster) {
  return cluster.guides.map((guide) => `<a class="au-hub-card" href="${guide.url}"><img src="${guide.image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(guide.image.alt)}"><div><small>Field ${String(guide.chapter).padStart(2, '0')} · ${escapeHtml(guide.motif)}</small><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(guide.summary)}</p><strong>Open the field guide →</strong></div><span class="au-hub-card-number">${String(guide.chapter).padStart(2, '0')}</span></a>`).join('');
}

function hubPage(cluster, index) {
  const route = `/australia/${cluster.slug}/`;
  const hero = cluster.guides[0].image;
  const description = ensureMetaDescription(`${cluster.hubIntro} ${cluster.transfer}`);
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(cluster.name)} Travel Guide — 5 Complete Field Chapters | TripDistill</title><meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${absolute(route)}">${hreflang(route)}
  <meta name="theme-color" content="#173d46"><meta property="og:type" content="article"><meta property="og:site_name" content="TripDistill"><meta property="og:title" content="${escapeHtml(cluster.name)} — Australia field atlas"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${absolute(route)}"><meta property="og:image" content="${absolute(hero.src)}"><meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/favicon.ico" sizes="any"><link rel="stylesheet" href="${siteCss}"><link rel="stylesheet" href="${countryCss}"><link rel="stylesheet" href="${fieldCss}">
  <script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(hubSchema(cluster))}</script>
</head>
<body data-page="${escapeHtml(cluster.slug)}" data-parent-page="australia" data-country="australia" data-region="${escapeHtml(cluster.slug)}">
  <a class="skip-link" href="#main-content">Skip to content</a><div id="layout-header"></div><div class="site-shell"><div class="mobile-overlay" data-mobile-overlay aria-hidden="true"></div><aside id="layout-sidebar" class="sidebar" aria-label="TripDistill navigation"></aside>
    <main id="main-content" class="page-content au-hub" data-au-family="${escapeHtml(cluster.family)}">
      <section class="au-hub-hero" aria-labelledby="au-hub-title"><div class="au-hub-copy"><span class="au-kicker">${escapeHtml(cluster.label)} · reviewed ${reviewDate}</span><h1 id="au-hub-title">${escapeHtml(cluster.name)} <span>${escapeHtml(cluster.tagline)}</span></h1><p>${escapeHtml(cluster.hubIntro)}</p><div class="hero-actions"><a class="button primary" href="#field-guides">Choose a field</a><a class="button secondary" href="#operating-model">Read the operating model</a></div><dl><div><dt>Useful stay</dt><dd>${escapeHtml(compactText(cluster.stay))}</dd></div><div><dt>Transfer logic</dt><dd>${escapeHtml(compactText(cluster.transfer))}</dd></div></dl></div><figure><img src="${hero.src}" width="1600" height="1066" alt="${escapeHtml(hero.alt)}" fetchpriority="high"><figcaption>${escapeHtml(hero.label)} · ${escapeHtml(hero.license)}</figcaption></figure><div class="au-hub-index" aria-hidden="true"><small>Continental field atlas</small><strong>${String(index + 1).padStart(2, '0')}</strong><span>05 field chapters</span></div></section>
      <section class="au-hub-directory" id="field-guides" aria-labelledby="au-directory-title"><div class="au-hub-heading"><span>Five independently useful guides</span><h2 id="au-directory-title">Choose the operating system, then the place.</h2><p>Every card opens a full route with transport, access, weak points, official sources and visible image provenance.</p></div><div class="au-hub-grid">${hubCards(cluster)}</div></section>
      <section class="section compact" aria-label="Advertisement"><div class="ad-slot" data-ad-slot><div><strong>Advertisement</strong><span>Responsive AdSense placement reserved</span></div></div></section>
      <section class="au-hub-section" id="operating-model" aria-labelledby="au-operating-title"><div class="au-hub-heading"><span>Regional operating model</span><h2 id="au-operating-title">Distance is part of the content.</h2><p>Australia punishes invisible transfer time. These five contracts keep the route honest.</p></div><div class="au-contract-grid"><article><small>Base</small><h3>Sleep near the first decision.</h3><p>${escapeHtml(cluster.stay)}</p></article><article><small>Movement</small><h3>Name the road, rail, ferry or operator.</h3><p>${escapeHtml(cluster.transfer)}</p></article><article><small>Country guidance</small><h3>Permission and guidance come first.</h3><p>Use recognised Traditional Owner language and visitor guidance. Do not infer access to cultural places, communities or Country from an online pin.</p></article><article><small>Condition</small><h3>One national forecast is not enough.</h3><p>Check the local fire, flood, surf, marine, alpine, heat or cyclone condition that actually governs the selected chapter.</p></article><article><small>Return</small><h3>Protect the last safe movement.</h3><p>Every field guide declares a return, turnaround or overnight before adding optional distance.</p></article></div></section>
      <section class="au-hub-section" aria-labelledby="au-sequence-title"><div class="au-hub-heading"><span>Five-field sequence</span><h2 id="au-sequence-title">Do not clear the map in one day.</h2></div><div class="au-hub-route">${cluster.guides.map((guide) => `<a href="${guide.url}"><span>Field ${String(guide.chapter).padStart(2, '0')}</span><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(compactText(guide.sequence, 105))}</p></a>`).join('')}</div></section>
      <section class="au-hub-section" aria-labelledby="au-hub-faq-title"><div class="au-hub-heading"><span>Planning answers</span><h2 id="au-hub-faq-title">${escapeHtml(cluster.name)} FAQ</h2></div><div class="faq-list"><details><summary>How long should I give ${escapeHtml(cluster.name)}?</summary><div class="faq-answer"><p>Use at least three focused days for one coherent route. Add nights whenever remote roads, vessels, parks or weather gates are involved.</p></div></details><details><summary>Can every chapter be combined in one stay?</summary><div class="faq-answer"><p>No. Choose the base and transport system that serves the first planning problem; distant chapters often need their own overnight and weather window.</p></div></details><details><summary>What changes fastest?</summary><div class="faq-answer"><p>Road, park, fire, flood, surf, marine, ferry and operator status. Recheck the linked official source before leaving, even when the booking was made earlier.</p></div></details></div></section>
      <section class="section sources" aria-labelledby="sources-title"><h2 id="sources-title">Official sources and photo credits</h2><p>Planning facts and image licenses were reviewed on ${reviewDate}. Recheck transport, park, fire, weather, marine and operator conditions before travel.</p><ul>${sourceList(cluster.sources)}${cluster.guides.map((guide) => imageCredit(guide.image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
    </main>
  </div><div id="layout-footer"></div><script src="${mainJs}" defer></script>
</body>
</html>
`;
}

function countrySchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', '@id': 'https://tripdistill.com/australia/#article', headline: 'Australia Travel Guide', description: 'Sixteen complete regional hubs and eighty focused field guides across Australia.', inLanguage: 'en', datePublished: isoDate, dateModified: isoDate, mainEntityOfPage: 'https://tripdistill.com/australia/', image: absolute(australiaClusters[0].guides[0].image.src), about: { '@type': 'Country', name: 'Australia' }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
      breadcrumb([['Home', 'https://tripdistill.com/'], ['Australia', 'https://tripdistill.com/australia/']]),
      { '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'How much time does a first Australia trip need?', acceptedAnswer: { '@type': 'Answer', text: 'Two focused weeks can support two or three connected regions. Three or more weeks gives weather and distance margin. A short trip should remain in one state or operating region.' } },
        { '@type': 'Question', name: 'Can I drive between every major Australian destination?', acceptedAnswer: { '@type': 'Answer', text: 'Not usefully in one short trip. Long distances, remote services, fire, flood and driver fatigue make selective flights and regional bases essential.' } }
      ] }
    ]
  };
}

function countryCards(bands) {
  return australiaClusters.filter((cluster) => bands.includes(cluster.band)).map((cluster, index) => {
    const image = cluster.guides[0].image;
    return `<a class="au-country-card" href="/australia/${cluster.slug}/" data-family="${escapeHtml(cluster.family)}"><img src="${image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(image.alt)}"><div><small>${escapeHtml(cluster.region)} · ${cluster.guides.length} field guides</small><h3>${escapeHtml(cluster.name)}</h3><p>${escapeHtml(compactText(cluster.hubIntro, 148))}</p><strong>Open the regional atlas →</strong></div><span>${String(australiaClusters.indexOf(cluster) + 1).padStart(2, '0')}</span></a>`;
  }).join('');
}

function countryPage() {
  const hero = australiaClusters[0].guides[0].image;
  const description = ensureMetaDescription('Plan Australia through sixteen complete regional hubs and eighty focused field guides covering cities, coasts, reefs, rainforest, desert, islands and alpine Country.');
  const groups = [
    [['east'], '01 · eastern gateways', 'Harbours, escarpments, river bends and surf corridors.', 'Sydney, the Blue Mountains, Brisbane and the Gold Coast use public transport well—until the park, island or headland changes the contract.'],
    [['south'], '02 · southern culture and weather', 'Tram grids, cliff roads, parklands and alpine axes.', 'Melbourne, the Great Ocean Road, Adelaide and Canberra reward cultural attention, sober driving and weather-specific regional bases.'],
    [['tropics', 'interior'], '03 · tropics and interior', 'Reef forecast, wet–dry gates and desert distance.', 'Cairns, the Whitsundays, Darwin and the Red Centre must be separated by operator identity, heat, season, cultural guidance and real flight or road time.'],
    [['west', 'islands'], '04 · west and island systems', 'Indian Ocean light, remote road and island weather.', 'Perth, the Southwest, the Kimberley and Tasmania turn ferry, fire, long-road and park access into the visible itinerary.']
  ];
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Australia Travel Guide — 16 Complete Regional Hubs | TripDistill</title><meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="https://tripdistill.com/australia/">${hreflang('/australia/')}
  <meta name="theme-color" content="#b8582d"><meta property="og:type" content="website"><meta property="og:site_name" content="TripDistill"><meta property="og:title" content="Australia — the continental field atlas"><meta property="og:description" content="Sixteen complete hubs and eighty focused guides from the eastern harbours to reef, desert, west coast and Tasmania."><meta property="og:url" content="https://tripdistill.com/australia/"><meta property="og:image" content="${absolute(hero.src)}"><meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/favicon.ico" sizes="any"><link rel="stylesheet" href="${siteCss}"><link rel="stylesheet" href="${countryCss}">
  <script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(countrySchema())}</script>
</head>
<body data-page="australia" data-country="australia">
  <a class="skip-link" href="#main-content">Skip to content</a><div id="layout-header"></div><div class="site-shell"><div class="mobile-overlay" data-mobile-overlay aria-hidden="true"></div><aside id="layout-sidebar" class="sidebar" aria-label="TripDistill navigation"></aside>
    <main id="main-content" class="page-content au-country">
      <section class="au-country-hero" aria-labelledby="au-country-title"><div class="au-country-copy"><span class="au-kicker">Continental field atlas · reviewed ${reviewDate}</span><h1 id="au-country-title">Australia <span>distance is the first itinerary.</span></h1><p>Build the trip from operating regions, not a bucket list. Sixteen complete hubs separate city transport, remote road, reef vessel, alpine weather, fire, flood and Country-specific access before they become an unsafe national blur.</p><div class="hero-actions"><a class="button primary" href="#regions">Compare 16 hubs</a><a class="button secondary" href="#distance">Read the distance contract</a></div><div class="au-country-facts"><div><strong>16</strong><span>complete hubs</span></div><div><strong>80</strong><span>focused fields</span></div><div><strong>5</strong><span>static languages</span></div></div></div><figure><img src="${hero.src}" width="1600" height="1066" alt="${escapeHtml(hero.alt)}" fetchpriority="high"><figcaption>${escapeHtml(hero.label)} · ${escapeHtml(hero.license)}</figcaption></figure><div class="au-distance-scale" aria-hidden="true"><span>Harbour</span><i></i><span>Reef</span><i></i><span>Desert</span><i></i><span>Ocean</span></div></section>
      <section class="au-country-principles" aria-label="Australia planning principles"><article><span>01</span><h2>Name Country and permission.</h2><p>Use recognised Traditional Owner names and guidance. A road, track or map pin never proves cultural or community access.</p></article><article><span>02</span><h2>Make distance visible.</h2><p>Flights, fuel, ferries, regional bases and driver recovery are itinerary content—not a small line between attractions.</p></article><article><span>03</span><h2>Check the governing condition.</h2><p>Fire, flood, cyclone, heat, surf, marine, alpine and park status can close different regions on the same day.</p></article></section>
      <section class="section compact" aria-label="Advertisement"><div class="ad-slot" data-ad-slot><div><strong>Advertisement</strong><span>Responsive AdSense placement reserved</span></div></div></section>
      <div id="regions">${groups.map(([bands, kicker, heading, copy], index) => `<section class="au-country-band" data-band="${bands.join('-')}" aria-labelledby="au-band-${index}"><div class="au-band-heading"><span>${kicker}</span><h2 id="au-band-${index}">${heading}</h2><p>${copy}</p></div><div class="au-country-grid">${countryCards(bands)}</div></section>`).join('')}</div>
      <section class="au-country-section" id="distance" aria-labelledby="au-distance-title"><div class="au-band-heading"><span>Distance contract</span><h2 id="au-distance-title">Choose the vehicle only after the geography.</h2><p>Exact operators, roads, terminals and seasonal limits must be checked directly. A national-scale line on a map is not a useful transfer.</p></div><div class="au-transport-grid"><article><small>Flight</small><h3>Bridge the continent</h3><p>Use domestic flights to protect regional attention. Airport, baggage, car-hire and first-night transfer remain part of the ticket.</p></article><article><small>Rail & city transit</small><h3>Use networks where they exist</h3><p>Major cities reward rail, tram, bus and ferry planning. Regional parks often begin where the urban network ends.</p></article><article><small>Road</small><h3>Budget the driver</h3><p>Fuel, wildlife, left-side practice, tyres, fire, flood and fatigue determine whether a road route is responsible.</p></article><article><small>Water</small><h3>Name the terminal and vessel</h3><p>Island ferries, reef vessels and harbour services use different terminals, check-ins, sea states and cancellation rules.</p></article></div></section>
      <section class="au-country-section" aria-labelledby="au-season-title"><div class="au-band-heading"><span>Four condition boards</span><h2 id="au-season-title">Australia does not share one best season.</h2></div><div class="au-condition-board"><article><strong>Tropical north</strong><p>Wet–dry access, cyclone, flood, heat, crocodile and marine-stinger guidance govern the route.</p></article><article><strong>Temperate south</strong><p>Cold fronts, wind, fire, alpine change and daylight can replace one another quickly.</p></article><article><strong>Interior</strong><p>Extreme heat, water, remote road, communications and cultural closure come before distance.</p></article><article><strong>Coasts and islands</strong><p>Swell, tide, ferry, marine park, wildlife and the safe return define every water day.</p></article></div></section>
      <section class="au-country-section" aria-labelledby="au-country-faq-title"><div class="au-band-heading"><span>Planning answers</span><h2 id="au-country-faq-title">Australia FAQ</h2></div><div class="faq-list"><details><summary>How much time does a first Australia trip need?</summary><div class="faq-answer"><p>Two focused weeks can support two or three connected regions. Three or more weeks gives weather and distance margin. A short trip should remain in one state or operating region.</p></div></details><details><summary>Can I drive between every major destination?</summary><div class="faq-answer"><p>Not usefully in one short trip. Long distances, remote services, fire, flood and driver fatigue make selective flights and regional bases essential.</p></div></details><details><summary>How should First Nations place names be used?</summary><div class="faq-answer"><p>Use the form preferred by the relevant Traditional Owners or managing authority, keep dual names when appropriate and follow current cultural access and photography guidance.</p></div></details></div></section>
      <section class="section sources" aria-labelledby="sources-title"><h2 id="sources-title">Official sources and photo credits</h2><p>Country planning and image licenses were reviewed on ${reviewDate}. Immigration, transport, weather, park, cultural, marine and operator rules change; verify directly before travel.</p><ul>${sourceList(australiaCountrySources)}${australiaClusters.map((cluster) => imageCredit(cluster.guides[0].image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
    </main>
  </div><div id="layout-footer"></div><script src="${mainJs}" defer></script>
</body>
</html>
`;
}

function replaceMarked(html, start, end, replacement) {
  const startAt = html.indexOf(start);
  if (startAt === -1) return html;
  const endAt = html.indexOf(end, startAt);
  if (endAt === -1) throw new Error(`Found ${start} without ${end}`);
  return html.slice(0, startAt) + replacement + html.slice(endAt + end.length);
}

function updateSidebar() {
  const file = path.join(root, 'components', 'sidebar.html');
  let html = fs.readFileSync(file, 'utf8');
  const nav = `${navStart}\n      <a class="sidebar-link" href="/australia/" data-nav-key="australia"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15 7 8l5-3 6 3 2 6-5 5-7-1-4-3Z"/><path d="m8 13 2-2 2 3 3-4 2 5"/></svg>Australia guide</a>${australiaClusters.map((cluster) => `\n      <a class="sidebar-link sub" href="/australia/${cluster.slug}/" data-nav-key="${escapeHtml(cluster.slug)}">${escapeHtml(cluster.name)}</a>`).join('')}\n${navEnd}`;
  if (html.includes(navStart)) html = replaceMarked(html, navStart, navEnd, nav);
  else {
    if (!html.includes('<!-- VIETNAM_NAV_END -->')) throw new Error('Cannot find Vietnam navigation marker for Australia insertion');
    html = html.replace('<!-- VIETNAM_NAV_END -->', `<!-- VIETNAM_NAV_END -->\n${nav}`);
  }
  const chapters = `${chaptersStart}\n${australiaClusters.map((cluster) => `  <section class="sidebar-section australia-chapter" data-australia-chapter="${escapeHtml(cluster.slug)}"><h2 class="sidebar-label">${escapeHtml(cluster.name)} fields</h2><div class="sidebar-links">${cluster.guides.map((guide) => `<a class="sidebar-link" href="${guide.url}" data-nav-key="${escapeHtml(guide.slug)}">${escapeHtml(guide.name)}</a>`).join('')}</div></section>`).join('\n')}\n${chaptersEnd}`;
  if (html.includes(chaptersStart)) html = replaceMarked(html, chaptersStart, chaptersEnd, chapters);
  else {
    if (!html.includes('<!-- VIETNAM_CHAPTERS_END -->')) throw new Error('Cannot find Vietnam chapter marker for Australia insertion');
    html = html.replace('<!-- VIETNAM_CHAPTERS_END -->', `<!-- VIETNAM_CHAPTERS_END -->\n${chapters}`);
  }
  fs.writeFileSync(file, html);
}

function updateHeader() {
  const file = path.join(root, 'components', 'header.html');
  let html = fs.readFileSync(file, 'utf8');
  const link = `${headerStart}\n      <a class="nav-link" href="/australia/" data-nav-key="australia">Australia</a>\n${headerEnd}`;
  if (html.includes(headerStart)) html = replaceMarked(html, headerStart, headerEnd, link);
  else html = html.replace('      <a class="nav-link" href="/vietnam/" data-nav-key="vietnam">Vietnam</a>', `      <a class="nav-link" href="/vietnam/" data-nav-key="vietnam">Vietnam</a>\n${link}`);
  html = html.replace(/placeholder="Search [^"]+"/, 'placeholder="Search Australia, Vietnam, cities…"');
  fs.writeFileSync(file, html);
}

function updateFooter() {
  const file = path.join(root, 'components', 'footer.html');
  let html = fs.readFileSync(file, 'utf8');
  const featured = australiaClusters.filter((_, index) => [0, 2, 4, 6, 9, 10, 13, 14].includes(index));
  const links = `${footerStart}<a href="/australia/">Australia</a>${featured.map((cluster) => `<a href="/australia/${cluster.slug}/">${escapeHtml(cluster.name)}</a>`).join('')}${footerEnd}`;
  if (html.includes(footerStart)) html = replaceMarked(html, footerStart, footerEnd, links);
  else html = html.replace('<div class="footer-column"><h2>Explore</h2><div class="footer-links">', `<div class="footer-column"><h2>Explore</h2><div class="footer-links">${links}`);
  fs.writeFileSync(file, html);
}

function updateSearch() {
  const file = path.join(root, 'data', 'search-index.json');
  const current = JSON.parse(fs.readFileSync(file, 'utf8')).filter((item) => !item.url.startsWith('/australia/'));
  const country = { title: 'Australia Travel Guide', url: '/australia/', parent: 'Oceania', type: 'Continental field atlas', summary: 'Sixteen complete regional hubs and eighty focused guides across Australian cities, coasts, reef, rainforest, desert, west and island systems.', keywords: ['australia', 'australian travel', 'sydney', 'melbourne', 'great barrier reef', 'uluru', 'perth', 'tasmania'] };
  const hubs = australiaClusters.map((cluster) => ({ title: `${cluster.name} Travel Guide`, url: `/australia/${cluster.slug}/`, parent: `Australia · ${cluster.region}`, type: 'Complete regional hub with five field guides', summary: cluster.hubIntro, keywords: [cluster.name.toLowerCase(), cluster.slug.replaceAll('-', ' '), cluster.region.toLowerCase(), ...cluster.guides.map((guide) => guide.name.toLowerCase())] }));
  const guides = australiaGuides.map((guide) => ({ title: `${guide.name} Guide`, url: guide.url, parent: `Australia · ${guide.hubName}`, type: 'Focused field and decision guide', summary: guide.summary, keywords: [guide.name.toLowerCase(), guide.hubName.toLowerCase(), guide.slug.replaceAll('-', ' '), guide.motif.toLowerCase(), 'australia travel guide'] }));
  fs.writeFileSync(file, JSON.stringify([...current, country, ...hubs, ...guides], null, 2) + '\n');
}

function updateHome() {
  const file = path.join(root, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  const image = australiaClusters[0].guides[0].image;
  html = html.replace(/<title>[^<]*<\/title>/, '<title>TripDistill — Practical Australia & Asia Travel Guides</title>');
  html = html.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="Plan Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand with practical country, city, island and regional decision guides.">');
  html = html.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="TripDistill — Australia and Asia travel, distilled">');
  html = html.replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="Country and city travel guides built for real transport, weather, access and distance decisions.">');
  html = html.replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${absolute(image.src)}">`);
  html = html.replace(/(?:Australia and )*Asia travel, without the noise/, 'Australia and Asia travel, without the noise');
  html = html.replace(/<div class="hero-actions">\s*<a class="button primary" href="\/vietnam\/">[\s\S]*?<\/a><a class="button secondary" href="\/vietnam\/#regions">[\s\S]*?<\/a>\s*<\/div>/, '<div class="hero-actions"><a class="button primary" href="/australia/">Explore Australia <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg></a><a class="button secondary" href="/australia/#regions">Compare 16 Australia hubs</a></div>');
  html = html.replace(/<div class="hero-visual" aria-label="[^"]*"><img class="hero-image-main"[^>]*>/, `<div class="hero-visual" aria-label="${escapeHtml(image.alt)}"><img class="hero-image-main" src="${image.src}" width="1600" height="1066" alt="${escapeHtml(image.alt)}" fetchpriority="high">`);
  html = html.replace(/<div class="hero-stamp"><strong>\d+ countries live<\/strong><span>[\s\S]*?<\/span><\/div>/, '<div class="hero-stamp"><strong>7 countries live</strong><span>Australia adds sixteen complete regional hubs and eighty field guides across a new Oceania collection.</span></div>');
  html = html.replace(/<div><span class="section-kicker">Destinations now live<\/span><h2 id="destinations-title">[\s\S]*?<\/h2><p>[\s\S]*?<\/p><\/div>/, '<div><span class="section-kicker">Destinations now live</span><h2 id="destinations-title">Start with Australia, Vietnam, Malaysia, China, Japan, South Korea or Thailand</h2><p>Compare country context first, then move into city, island and regional guides built around real transport, access, weather, time and stay decisions.</p></div>');
  html = html.replace(/<a class="text-link" href="\/vietnam\/">Open the newest country guide →<\/a>/, '<a class="text-link" href="/australia/">Open the newest country guide →</a>');
  const card = `${homeCardStart}\n          <a class="destination-card featured" href="/australia/"><img src="${image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(image.alt)}"><div class="destination-copy"><small>Oceania · New complete country</small><h3>Australia</h3><p>Choose among sixteen complete hubs and eighty field guides where distance, Country, fire, flood, reef, road and return remain visible.</p><span class="card-arrow">Plan Australia →</span></div></a>\n${homeCardEnd}`;
  if (html.includes(homeCardStart)) html = replaceMarked(html, homeCardStart, homeCardEnd, card);
  else html = html.replace('<div class="destination-grid">', `<div class="destination-grid">\n${card}`);
  html = html.replace(/<span class="section-kicker">Publishing roadmap<\/span><h2 id="roadmap-title">[^<]*<\/h2><p>[^<]*<\/p>/, '<span class="section-kicker">Publishing roadmap</span><h2 id="roadmap-title">Oceania and Asia, one useful layer at a time</h2><p>Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand are live. Every regional card opens only after it supports an independently useful guide and a deeper planning layer.</p>');
  const credit = `${homeCreditStart}\n          ${imageCredit(image)}\n${homeCreditEnd}`;
  if (html.includes(homeCreditStart)) html = replaceMarked(html, homeCreditStart, homeCreditEnd, credit);
  else {
    const heading = html.indexOf('<h2 id="home-sources-title">Photo sources and licenses</h2>');
    const list = html.indexOf('<ul>', heading);
    if (heading === -1 || list === -1) throw new Error('Cannot find home photo sources list');
    html = html.slice(0, list + 4) + `\n${credit}` + html.slice(list + 4);
  }
  html = html.replace('"description": "Practical Asia country and city travel guides."', '"description": "Practical Australia and Asia country, city and regional travel guides."');
  fs.writeFileSync(file, html);
}

function updateAbout() {
  const file = path.join(root, 'about', 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/TripDistill now covers[^<]*/, 'TripDistill now covers Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand. Australia opens sixteen complete regional hubs and eighty focused field guides; every destination URL is published only after it contains original structure, practical decisions, current official sources and visible image provenance.');
  fs.writeFileSync(file, html);
}

function updateEnglishAssetReferences() {
  const excluded = new Set(['.git', 'dist', 'node_modules', 'zh', 'ja', 'ko', 'th']);
  const stack = [root];
  let changed = 0;
  while (stack.length) {
    const directory = stack.pop();
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      if (directory === root && excluded.has(entry.name)) continue;
      const full = path.join(directory, entry.name);
      if (entry.isDirectory()) { stack.push(full); continue; }
      if (!entry.isFile() || !entry.name.endsWith('.html')) continue;
      const before = fs.readFileSync(full, 'utf8');
      const after = before.replace(/\/js\/main\.js\?v=\d{8}-\d+/g, mainJs).replace(/\/css\/site\.css\?v=\d{8}-\d+/g, siteCss);
      if (after !== before) { fs.writeFileSync(full, after); changed += 1; }
    }
  }
  return changed;
}

for (const [index, cluster] of australiaClusters.entries()) {
  const file = routeFile(`/australia/${cluster.slug}/`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, hubPage(cluster, index));
}
for (const guide of australiaGuides) {
  const cluster = australiaClusters.find((item) => item.slug === guide.hubSlug);
  const file = routeFile(guide.url);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, guidePage(guide, cluster));
}
const countryFile = routeFile('/australia/');
fs.mkdirSync(path.dirname(countryFile), { recursive: true });
fs.writeFileSync(countryFile, countryPage());
updateSidebar();
updateHeader();
updateFooter();
updateSearch();
updateHome();
updateAbout();
const updatedReferences = updateEnglishAssetReferences();
console.log(`Generated Australia: 1 country hub, ${australiaClusters.length} regional hubs, ${australiaGuides.length} field guides, synchronized English shell/search, and ${updatedReferences} asset references.`);
