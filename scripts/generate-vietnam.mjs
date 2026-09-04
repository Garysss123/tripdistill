import fs from 'node:fs';
import path from 'node:path';
import { vietnamClusters, vietnamGuides, vietnamCountrySources } from '../data/vietnam-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const reviewDate = '31 August 2026';
const isoDate = '2026-08-31';
const siteCss = '/css/site.css?v=20260904-1';
const countryCss = '/css/vietnam.css?v=20260831-2';
const fieldCss = '/css/vietnam-field.css?v=20260831-1';
const mainJs = '/js/main.js?v=20260904-1';
const vietnamNavStart = '<!-- VIETNAM_NAV_START -->';
const vietnamNavEnd = '<!-- VIETNAM_NAV_END -->';
const vietnamChaptersStart = '<!-- VIETNAM_CHAPTERS_START -->';
const vietnamChaptersEnd = '<!-- VIETNAM_CHAPTERS_END -->';
const vietnamHomeStart = '<!-- VIETNAM_HOME_CARD_START -->';
const vietnamHomeEnd = '<!-- VIETNAM_HOME_CARD_END -->';
const vietnamHomeCreditStart = '<!-- VIETNAM_HOME_CREDIT_START -->';
const vietnamHomeCreditEnd = '<!-- VIETNAM_HOME_CREDIT_END -->';

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const absolute = (route) => `https://tripdistill.com${route}`;
const routeFile = (route) => path.join(root, route.replace(/^\//, ''), 'index.html');

function ensureMetaDescription(summary) {
  let value = String(summary).trim();
  if (value.length < 120) value += ' Plan transport, weather, access and a realistic sequence with current official sources.';
  if (value.length > 170) value = value.slice(0, 167).replace(/\s+\S*$/, '') + '…';
  if (value.length < 120) value += ' Recheck conditions before travel.';
  return value;
}

function compactText(value, maximum = 118) {
  const text = String(value).trim();
  const firstSentence = text.match(/^.*?[.!?](?=\s|$)/)?.[0] || text;
  if (firstSentence.length <= maximum) return firstSentence;
  return firstSentence.slice(0, maximum - 1).replace(/\s+\S*$/, '') + '…';
}

function hreflang(route) {
  return [
    ['en', route],
    ['zh-Hant', `/zh${route}`],
    ['ja', `/ja${route}`],
    ['ko', `/ko${route}`],
    ['th', `/th${route}`],
    ['x-default', route]
  ].map(([language, href]) => `<link rel="alternate" hreflang="${language}" href="${absolute(href)}">`).join('');
}

function sourceList(sources) {
  return sources.map(([href, label]) => `<li><a href="${escapeHtml(href)}" target="_blank" rel="noopener">${escapeHtml(label)}</a>.</li>`).join('');
}

function imageCredit(image) {
  return `<li><a href="${escapeHtml(image.source)}" target="_blank" rel="noopener">${escapeHtml(image.label)}</a> — ${escapeHtml(image.creator)}, ${escapeHtml(image.license)}. ${escapeHtml(image.editNote)}</li>`;
}

function uniqueImages(guides) {
  return [...new Map(guides.map((guide) => [guide.image.src, guide.image])).values()];
}

function relatedCards(cluster, currentSlug) {
  return cluster.guides.filter((guide) => guide.slug !== currentSlug).map((guide) => `
          <a class="vn-related-card" href="/vietnam/${cluster.slug}/${guide.slug}/">
            <img src="${guide.image.src}" width="1600" height="1066" loading="lazy" decoding="async" alt="${escapeHtml(guide.image.alt)}">
            <span><small>${escapeHtml(guide.instrument)}</small><strong>${escapeHtml(guide.name)}</strong><em>${escapeHtml(guide.motif)}</em></span>
          </a>`).join('');
}

function guideSchema(guide) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${absolute(guide.url)}#guide`,
        name: `${guide.name} Travel Guide`,
        description: guide.summary,
        url: absolute(guide.url),
        inLanguage: 'en',
        dateModified: isoDate,
        image: absolute(guide.image.src),
        about: { '@type': 'TouristDestination', name: guide.name, containedInPlace: { '@type': 'Country', name: 'Vietnam' } },
        publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tripdistill.com/' },
          { '@type': 'ListItem', position: 2, name: 'Vietnam', item: 'https://tripdistill.com/vietnam/' },
          { '@type': 'ListItem', position: 3, name: guide.hubName, item: absolute(`/vietnam/${guide.hubSlug}/`) },
          { '@type': 'ListItem', position: 4, name: guide.name, item: absolute(guide.url) }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: guide.faq.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer }
        }))
      }
    ]
  };
}

function guidePage(guide, cluster) {
  const decisions = guide.decisions.map(([label, copy]) => `<article><small>${escapeHtml(label)}</small><p>${escapeHtml(copy)}</p></article>`).join('');
  const route = guide.route.map(([phase, heading, copy], index) => `<article class="vn-route-step"><span>${String(index + 1).padStart(2, '0')}</span><small>${escapeHtml(phase)}</small><h3>${escapeHtml(heading)}</h3><p>${escapeHtml(copy)}</p></article>`).join('');
  const checks = guide.checks.map(([label, copy], index) => `<article class="vn-check"><span>${String(index + 1).padStart(2, '0')}</span><h3>${escapeHtml(label)}</h3><p>${escapeHtml(copy)}</p></article>`).join('');
  const faq = guide.faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('');
  const description = ensureMetaDescription(guide.summary);
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(guide.name)} | TripDistill</title><meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${absolute(guide.url)}">${hreflang(guide.url)}
  <meta name="theme-color" content="#8d2f25"><meta property="og:type" content="article"><meta property="og:site_name" content="TripDistill"><meta property="og:title" content="${escapeHtml(guide.name)} — ${escapeHtml(guide.motif)}"><meta property="og:description" content="${escapeHtml(guide.summary)}"><meta property="og:url" content="${absolute(guide.url)}"><meta property="og:image" content="${absolute(guide.image.src)}"><meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/favicon.ico" sizes="any"><link rel="stylesheet" href="${siteCss}"><link rel="stylesheet" href="${countryCss}"><link rel="stylesheet" href="${fieldCss}">
  <script src="/js/adsense.js?v=20260826-9" defer></script><script type="application/ld+json">${JSON.stringify(guideSchema(guide))}</script>
</head>
<body data-page="${escapeHtml(guide.slug)}" data-parent-page="vietnam" data-country="vietnam" data-region="${escapeHtml(cluster.slug)}" data-vn-family="${escapeHtml(cluster.family)}" data-vn-instrument="${escapeHtml(guide.instrument)}">
  <a class="skip-link" href="#main-content">Skip to content</a><div id="layout-header"></div><div class="site-shell"><div class="mobile-overlay" data-mobile-overlay aria-hidden="true"></div><aside id="layout-sidebar" class="sidebar" aria-label="TripDistill navigation"></aside>
    <main id="main-content" class="page-content vn-field">
      <section class="vn-field-hero" aria-labelledby="vn-field-title">
        <div class="vn-field-copy"><nav class="vn-breadcrumb" aria-label="Breadcrumb"><a href="/vietnam/">Vietnam</a><span>/</span><a href="/vietnam/${cluster.slug}/">${escapeHtml(cluster.name)}</a><span>/</span><strong>${escapeHtml(guide.name)}</strong></nav><span class="vn-kicker">${escapeHtml(cluster.label)} · chapter ${String(guide.chapter).padStart(2, '0')} · reviewed ${reviewDate}</span><h1 id="vn-field-title">${escapeHtml(guide.name)} <span>${escapeHtml(guide.motif)}.</span></h1><p>${escapeHtml(guide.summary)}</p><div class="hero-actions"><a class="button primary" href="#route">Follow the sequence</a><a class="button secondary" href="#checks">Check the weak points</a></div></div>
        <figure class="vn-field-image"><img src="${guide.image.src}" width="1600" height="1066" alt="${escapeHtml(guide.image.alt)}" fetchpriority="high"><figcaption>${escapeHtml(guide.image.label)} · ${escapeHtml(guide.image.license)}</figcaption></figure>
        <div class="vn-field-stamp" aria-hidden="true"><small>${escapeHtml(guide.instrument)}</small><strong>${String(guide.chapter).padStart(2, '0')}</strong><span>${escapeHtml(cluster.region)}</span></div>
      </section>

      <section class="vn-decision-strip" aria-label="Three planning decisions">${decisions}</section>
      <section class="vn-reading" aria-labelledby="vn-reading-title"><div><span class="vn-section-label">Read the place</span><h2 id="vn-reading-title">Keep the local logic visible.</h2><p>${escapeHtml(guide.lead)}</p></div><aside><small>Orientation note</small><p>${escapeHtml(guide.orientation)}</p></aside></section>
      <section class="section compact" aria-label="Advertisement"><div class="ad-slot" data-ad-slot><div><strong>Advertisement</strong><span>Responsive AdSense placement reserved</span></div></div></section>
      <section class="vn-field-section" id="route" aria-labelledby="vn-route-title"><div class="vn-section-head"><div><span class="vn-section-label">Four-stage route</span><h2 id="vn-route-title">Let sequence do the editing.</h2></div><p>${escapeHtml(guide.sequence)}</p></div><div class="vn-route">${route}</div></section>
      <section class="vn-field-section" id="checks" aria-labelledby="vn-checks-title"><div class="vn-section-head"><div><span class="vn-section-label">Before committing</span><h2 id="vn-checks-title">Three weak points to solve.</h2></div><p>Conditions change faster than an editorial page. Verify the named official source, actual operator and local weather close to travel.</p></div><div class="vn-check-grid">${checks}</div><div class="vn-boundary"><small>${escapeHtml(guide.decisions[2][0])}</small><strong>Protect this boundary</strong><p>${escapeHtml(guide.decisions[2][1])}</p></div></section>
      <section class="vn-field-section" aria-labelledby="vn-faq-title"><div class="vn-section-head"><div><span class="vn-section-label">Planning answers</span><h2 id="vn-faq-title">${escapeHtml(guide.name)} FAQ</h2></div></div><div class="faq-list">${faq}</div></section>
      <section class="vn-field-section" aria-labelledby="vn-related-title"><div class="vn-section-head"><div><span class="vn-section-label">Continue in ${escapeHtml(cluster.name)}</span><h2 id="vn-related-title">Choose the next chapter by purpose.</h2></div><p>Return to the hub before joining distant branches into one day.</p></div><div class="vn-related">${relatedCards(cluster, guide.slug)}</div><p class="vn-back"><a href="/vietnam/${cluster.slug}/">← Return to the complete ${escapeHtml(cluster.name)} guide</a></p></section>
      <section class="section sources" aria-labelledby="sources-title"><h2 id="sources-title">Official sources and photo credits</h2><p>Planning facts and image licenses were reviewed on ${reviewDate}. Schedules, access, tickets, weather and operator terms change; verify directly before travel.</p><ul>${sourceList(cluster.sources)}${uniqueImages(cluster.guides).map(imageCredit).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
    </main>
  </div><div id="layout-footer"></div><script src="${mainJs}" defer></script>
</body>
</html>
`;
}

function hubSchema(cluster) {
  const route = `/vietnam/${cluster.slug}/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', '@id': `${absolute(route)}#guide`, name: `${cluster.name} Travel Guide`, description: cluster.hubIntro, url: absolute(route), inLanguage: 'en', dateModified: isoDate, image: absolute(cluster.guides[0].image.src), about: { '@type': 'TouristDestination', name: cluster.name, containedInPlace: { '@type': 'Country', name: 'Vietnam' } }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tripdistill.com/' }, { '@type': 'ListItem', position: 2, name: 'Vietnam', item: 'https://tripdistill.com/vietnam/' }, { '@type': 'ListItem', position: 3, name: cluster.name, item: absolute(route) }] },
      { '@type': 'FAQPage', mainEntity: cluster.guides.map((guide) => ({ '@type': 'Question', name: guide.faq[0][0], acceptedAnswer: { '@type': 'Answer', text: guide.faq[0][1] } })) }
    ]
  };
}

function hubCards(cluster) {
  return cluster.guides.map((guide, index) => `<a class="vn-hub-card" href="/vietnam/${cluster.slug}/${guide.slug}/" data-instrument="${escapeHtml(guide.instrument)}"><img src="${guide.image.src}" width="1600" height="1066" loading="lazy" decoding="async" alt="${escapeHtml(guide.image.alt)}"><span class="vn-hub-card-number">${String(index + 1).padStart(2, '0')}</span><div><small>${escapeHtml(guide.motif)}</small><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(guide.summary)}</p><strong>Open the field guide →</strong></div></a>`).join('');
}

function hubPage(cluster, index) {
  const route = `/vietnam/${cluster.slug}/`;
  const description = ensureMetaDescription(cluster.hubIntro);
  const hero = cluster.guides[0].image;
  const faq = cluster.guides.map((guide) => `<details><summary>${escapeHtml(guide.faq[0][0])}</summary><div class="faq-answer"><p>${escapeHtml(guide.faq[0][1])}</p></div></details>`).join('');
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(cluster.name)} Guide | TripDistill</title><meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${absolute(route)}">${hreflang(route)}
  <meta name="theme-color" content="#8d2f25"><meta property="og:type" content="article"><meta property="og:site_name" content="TripDistill"><meta property="og:title" content="${escapeHtml(cluster.name)} — ${escapeHtml(cluster.tagline)}"><meta property="og:description" content="${escapeHtml(cluster.hubIntro)}"><meta property="og:url" content="${absolute(route)}"><meta property="og:image" content="${absolute(hero.src)}"><meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/favicon.ico" sizes="any"><link rel="stylesheet" href="${siteCss}"><link rel="stylesheet" href="${countryCss}"><link rel="stylesheet" href="${fieldCss}">
  <script src="/js/adsense.js?v=20260826-9" defer></script><script type="application/ld+json">${JSON.stringify(hubSchema(cluster))}</script>
</head>
<body data-page="${escapeHtml(cluster.slug)}" data-parent-page="vietnam" data-country="vietnam" data-region="${escapeHtml(cluster.slug)}" data-vn-family="${escapeHtml(cluster.family)}">
  <a class="skip-link" href="#main-content">Skip to content</a><div id="layout-header"></div><div class="site-shell"><div class="mobile-overlay" data-mobile-overlay aria-hidden="true"></div><aside id="layout-sidebar" class="sidebar" aria-label="TripDistill navigation"></aside>
    <main id="main-content" class="page-content vn-hub">
      <section class="vn-hub-hero" aria-labelledby="vn-hub-title"><div class="vn-hub-copy"><span class="vn-kicker">${escapeHtml(cluster.label)} · reviewed ${reviewDate}</span><h1 id="vn-hub-title">${escapeHtml(cluster.name)} <span>${escapeHtml(cluster.tagline)}</span></h1><p>${escapeHtml(cluster.hubIntro)}</p><div class="hero-actions"><a class="button primary" href="#area-guides">Choose a chapter</a><a class="button secondary" href="#route-model">Read the route model</a></div><dl><div><dt>Useful stay</dt><dd>${escapeHtml(compactText(cluster.stay))}</dd></div><div><dt>Transfer logic</dt><dd>${escapeHtml(compactText(cluster.transfer))}</dd></div></dl></div><figure><img src="${hero.src}" width="1600" height="1066" alt="${escapeHtml(hero.alt)}" fetchpriority="high"><figcaption>${escapeHtml(hero.label)} · ${escapeHtml(hero.license)}</figcaption></figure><div class="vn-hub-index" aria-hidden="true"><small>Vietnam field atlas</small><strong>${String(index + 1).padStart(2, '0')}</strong><span>06 chapters</span></div></section>
      <section class="vn-hub-directory" id="area-guides" aria-labelledby="vn-directory-title"><div class="vn-hub-heading"><div><span>Six independent field guides</span><h2 id="vn-directory-title">Open the place at the right scale.</h2></div><p>Each card solves a different transport, access or conduct problem. None is a placeholder.</p></div><div class="vn-hub-grid">${hubCards(cluster)}</div></section>
      <section class="section compact" aria-label="Advertisement"><div class="ad-slot" data-ad-slot><div><strong>Advertisement</strong><span>Responsive AdSense placement reserved</span></div></div></section>
      <section class="vn-hub-section" aria-labelledby="vn-contract-title"><div class="vn-hub-heading"><div><span>Operating contracts</span><h2 id="vn-contract-title">Six chapters, six different conditions.</h2></div><p>Distance, weather, sacred space, working neighborhoods and protected landscapes cannot share one generic checklist.</p></div><div class="vn-contract-grid">${cluster.guides.map((guide, guideIndex) => `<article><small>0${guideIndex + 1} / ${escapeHtml(guide.instrument)}</small><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(guide.arrival)}</p><strong>${escapeHtml(guide.decisions[2][0])}</strong><span>${escapeHtml(guide.boundary)}</span></article>`).join('')}</div></section>
      <section class="vn-hub-section" id="route-model" aria-labelledby="vn-hub-route-title"><div class="vn-hub-heading"><div><span>Six-chapter route model</span><h2 id="vn-hub-route-title">Protect the transfer before adding the view.</h2></div><p>This is an editorial sequence, not a promise that every activity operates every day.</p></div><div class="vn-hub-route">${cluster.guides.map((guide, guideIndex) => `<a href="/vietnam/${cluster.slug}/${guide.slug}/"><span>Chapter ${String(guideIndex + 1).padStart(2, '0')}</span><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(guide.sequence)}</p></a>`).join('')}</div></section>
      <section class="vn-hub-section" aria-labelledby="vn-hub-faq-title"><div class="vn-hub-heading"><div><span>Planning answers</span><h2 id="vn-hub-faq-title">${escapeHtml(cluster.name)} FAQ</h2></div></div><div class="faq-list">${faq}</div></section>
      <section class="section sources" aria-labelledby="sources-title"><h2 id="sources-title">Official sources and photo credits</h2><p>Planning facts and image licenses were reviewed on ${reviewDate}. Recheck transport, entry, weather, park and operator conditions before travel.</p><ul>${sourceList(cluster.sources)}${uniqueImages(cluster.guides).map(imageCredit).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
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
      { '@type': 'Article', '@id': 'https://tripdistill.com/vietnam/#guide', name: 'Vietnam Travel Guide', description: 'Plan Vietnam through fourteen complete city and regional hubs, each opening six focused guides with transport, weather, access and responsible-visit checks.', url: 'https://tripdistill.com/vietnam/', inLanguage: 'en', dateModified: isoDate, image: absolute(vietnamClusters[0].guides[0].image.src), about: { '@type': 'Country', name: 'Vietnam' }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tripdistill.com/' }, { '@type': 'ListItem', position: 2, name: 'Vietnam', item: 'https://tripdistill.com/vietnam/' }] },
      { '@type': 'FAQPage', mainEntity: [
        ['How much time does a first Vietnam route need?', 'Two focused weeks can connect a north, central and south argument, but three weeks gives weather and transfer buffers. A short trip should remain in one region.'],
        ['Should I book every transfer before arrival?', 'Secure identity-bound flights, trains and regulated expeditions first. Keep local road and boat days flexible enough for weather and operator checks.'],
        ['Does one season work for all of Vietnam?', 'No. Northern highlands, central coast and southern delta have different temperature, rain, flood and sea patterns. Check each region rather than applying one national label.']
      ].map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }
    ]
  };
}

function countryCards(band) {
  return vietnamClusters.filter((cluster) => cluster.band === band).map((cluster, index) => { const image = cluster.guides[0].image; return `<a class="vn-country-card" href="/vietnam/${cluster.slug}/" data-family="${escapeHtml(cluster.family)}"><figure><img src="${image.src}" width="1600" height="1066" loading="lazy" decoding="async" alt="${escapeHtml(image.alt)}"><span>${String(index + 1).padStart(2, '0')}</span></figure><div><small>${escapeHtml(cluster.label)}</small><h3>${escapeHtml(cluster.name)}</h3><p>${escapeHtml(compactText(cluster.hubIntro, 220))}</p><dl><div><dt>Stay</dt><dd>${escapeHtml(compactText(cluster.stay, 92))}</dd></div><div><dt>Logic</dt><dd>${escapeHtml(compactText(cluster.transfer, 92))}</dd></div></dl><strong>Open six field guides →</strong></div></a>`; }).join('');
}

function countryPage() {
  const hero = vietnamClusters[0].guides[0].image;
  const description = ensureMetaDescription('Plan Vietnam through fourteen complete city and regional hubs, each opening six focused guides for transport, weather, heritage, nature and realistic route decisions.');
  const bands = [
    ['north', '01 · Northern Vietnam', 'Lakes, karst, highland roads and river approaches', 'The north changes scale quickly. Separate Hanoi walking chapters from mountain road days, regulated bays and conservation landscapes.'],
    ['central', '02 · Central Vietnam', 'Heritage rain, cave country, coast and highland cultivation', 'Central routes share a long coast but not one weather system. Rail, road, flood, marine and mountain conditions need separate clocks.'],
    ['south', '03 · Southern Vietnam', 'Metropolitan heat, dunes, delta channels and island seas', 'The south shifts from urban crossings to tidal wetlands and open-water transfers. Protect the final boat, road or flight before adding another stop.']
  ];
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Vietnam Travel Guide — 14 Complete Regional Hubs | TripDistill</title><meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="https://tripdistill.com/vietnam/">${hreflang('/vietnam/')}
  <meta name="theme-color" content="#9b3028"><meta property="og:type" content="website"><meta property="og:site_name" content="TripDistill"><meta property="og:title" content="Vietnam — the north–south field atlas"><meta property="og:description" content="Fourteen complete hubs and eighty-four focused guides from Hanoi to the southern islands."><meta property="og:url" content="https://tripdistill.com/vietnam/"><meta property="og:image" content="${absolute(hero.src)}"><meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/favicon.ico" sizes="any"><link rel="stylesheet" href="${siteCss}"><link rel="stylesheet" href="${countryCss}">
  <script src="/js/adsense.js?v=20260826-9" defer></script><script type="application/ld+json">${JSON.stringify(countrySchema())}</script>
</head>
<body data-page="vietnam" data-country="vietnam">
  <a class="skip-link" href="#main-content">Skip to content</a><div id="layout-header"></div><div class="site-shell"><div class="mobile-overlay" data-mobile-overlay aria-hidden="true"></div><aside id="layout-sidebar" class="sidebar" aria-label="TripDistill navigation"></aside>
    <main id="main-content" class="page-content vn-country">
      <section class="vn-country-hero" aria-labelledby="vn-country-title"><div class="vn-country-copy"><span class="vn-kicker">North–south field atlas · reviewed ${reviewDate}</span><h1 id="vn-country-title">Vietnam <span>follow the curve, not a checklist.</span></h1><p>Build the trip as a geographic argument. Fourteen complete hubs separate city walking, highland roads, heritage thresholds, marine forecasts, cave permits and delta tides before they become one overloaded itinerary.</p><div class="hero-actions"><a class="button primary" href="#regions">Compare 14 hubs</a><a class="button secondary" href="#transport">Read the transfer spine</a></div><div class="vn-country-facts"><div><strong>14</strong><span>complete hubs</span></div><div><strong>84</strong><span>focused chapters</span></div><div><strong>5</strong><span>static languages</span></div></div></div><figure><img src="${hero.src}" width="1600" height="1066" alt="${escapeHtml(hero.alt)}" fetchpriority="high"><figcaption>${escapeHtml(hero.label)} · ${escapeHtml(hero.license)}</figcaption></figure><div class="vn-spine" aria-hidden="true"><span>Hanoi</span><i></i><span>Central coast</span><i></i><span>Mekong</span></div></section>
      <section class="vn-country-intro" aria-label="Vietnam planning principles"><article><span>01</span><h2>Choose one regional clock.</h2><p>Northern winter, central rain, southern thunderstorms and island sea conditions do not obey one national “best season.”</p></article><article><span>02</span><h2>Protect identity-bound transport.</h2><p>Flights, trains, regulated cave programs and named boats deserve confirmed operators, stations, ports and cancellation rules.</p></article><article><span>03</span><h2>Keep living places alive.</h2><p>Markets, temples, farms, villages and memorial landscapes require consent and context, not a camera-first route.</p></article></section>
      <section class="section compact" aria-label="Advertisement"><div class="ad-slot" data-ad-slot><div><strong>Advertisement</strong><span>Responsive AdSense placement reserved</span></div></div></section>
      <div id="regions">${bands.map(([band, kicker, heading, copy]) => `<section class="vn-country-band" data-band="${band}" aria-labelledby="vn-${band}-title"><div class="vn-band-heading"><span>${kicker}</span><h2 id="vn-${band}-title">${heading}</h2><p>${copy}</p></div><div class="vn-country-grid">${countryCards(band)}</div></section>`).join('')}</div>
      <section class="vn-country-section" id="transport" aria-labelledby="vn-transport-title"><div class="vn-band-heading"><span>Transfer spine</span><h2 id="vn-transport-title">Match the vehicle to the geography.</h2><p>Verify current schedules on the named official operator. A map line does not prove a useful same-day connection.</p></div><div class="vn-transport-grid"><article><small>Rail</small><h3>Use stations as anchors</h3><p>The north–south railway can link Hanoi, Ninh Binh, Hue, Da Nang and Ho Chi Minh City, but each exact train, berth, station and arrival hour must be checked.</p></article><article><small>Flight</small><h3>Bridge only earned distance</h3><p>Flights can protect a north–central–south route. Airport transfer, terminal and weather margin belong to the ticket.</p></article><article><small>Road</small><h3>Separate city from mountain</h3><p>Highland loops, national parks and rural corridors require daylight, capable drivers, weather checks and realistic fuel or rest stops.</p></article><article><small>Water</small><h3>Name the port and operator</h3><p>Bay cruises, river boats, ferries and island transfers run on different permits, sea states, tides and return contracts.</p></article></div></section>
      <section class="vn-country-section" aria-labelledby="vn-season-title"><div class="vn-band-heading"><span>Three weather clocks</span><h2 id="vn-season-title">Do not reduce Vietnam to one monsoon.</h2></div><div class="vn-season-board"><article><strong>North</strong><p>Temperature, fog, mountain visibility, rainfall and road stability change by elevation as well as month.</p></article><article><strong>Central</strong><p>Coastal rain, flood, heat, cave water and mountain weather can interrupt different routes on the same day.</p></article><article><strong>South</strong><p>Heat, thunderstorms, delta water, tide and open-sea conditions shape urban, wetland and island plans differently.</p></article></div></section>
      <section class="vn-country-section" aria-labelledby="vn-country-faq-title"><div class="vn-band-heading"><span>Planning answers</span><h2 id="vn-country-faq-title">Vietnam FAQ</h2></div><div class="faq-list"><details><summary>How much time does a first Vietnam route need?</summary><div class="faq-answer"><p>Two focused weeks can connect one northern, central and southern argument. Three weeks gives weather and transfer buffers. A short trip should remain in one region.</p></div></details><details><summary>Should I book every transfer before arrival?</summary><div class="faq-answer"><p>Secure identity-bound flights, trains and regulated expeditions first. Keep local road and boat days flexible enough for current weather and operator checks.</p></div></details><details><summary>Does one season work for all of Vietnam?</summary><div class="faq-answer"><p>No. Northern highlands, central coast and southern delta have different temperature, rain, flood and sea patterns. Check each region rather than applying one national label.</p></div></details></div></section>
      <section class="section sources" aria-labelledby="sources-title"><h2 id="sources-title">Official sources and photo credits</h2><p>Country planning and image licenses were reviewed on ${reviewDate}. Immigration, transport, weather, park, marine and operator rules change; verify directly before travel.</p><ul>${sourceList(vietnamCountrySources)}${vietnamClusters.map((cluster) => imageCredit(cluster.guides[0].image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
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
  const nav = `${vietnamNavStart}\n      <a class="sidebar-link" href="/vietnam/" data-nav-key="vietnam"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4c4 2 5 5 3 8s-1 6 4 8M14 3c-3 3-3 6 0 8s4 5 2 10M3 8h6M13 15h7"/></svg>Vietnam guide</a>${vietnamClusters.map((cluster) => `\n      <a class="sidebar-link sub" href="/vietnam/${cluster.slug}/" data-nav-key="${escapeHtml(cluster.slug)}">${escapeHtml(cluster.name)}</a>`).join('')}\n${vietnamNavEnd}`;
  if (html.includes(vietnamNavStart)) html = replaceMarked(html, vietnamNavStart, vietnamNavEnd, nav);
  else {
    const anchor = '      <a class="sidebar-link sub" href="/thailand/ayutthaya/" data-nav-key="ayutthaya">Ayutthaya river-island guide</a>';
    if (!html.includes(anchor)) throw new Error('Cannot find Thailand sidebar anchor for Vietnam navigation');
    html = html.replace(anchor, `${anchor}\n${nav}`);
  }
  const chapters = `${vietnamChaptersStart}\n${vietnamClusters.map((cluster) => `  <section class="sidebar-section vietnam-chapter" data-vietnam-chapter="${escapeHtml(cluster.slug)}"><h2 class="sidebar-label">${escapeHtml(cluster.name)} chapters</h2><div class="sidebar-links">${cluster.guides.map((guide) => `<a class="sidebar-link" href="/vietnam/${cluster.slug}/${guide.slug}/" data-nav-key="${escapeHtml(guide.slug)}">${escapeHtml(guide.name)}</a>`).join('')}</div></section>`).join('\n')}\n${vietnamChaptersEnd}`;
  if (html.includes(vietnamChaptersStart)) html = replaceMarked(html, vietnamChaptersStart, vietnamChaptersEnd, chapters);
  else {
    const anchor = '<!-- MALAYSIA_DEPTH_SIDEBAR_END -->';
    if (!html.includes(anchor)) throw new Error('Cannot find Malaysia chapter marker for Vietnam insertion');
    html = html.replace(anchor, `${anchor}\n${chapters}`);
  }
  fs.writeFileSync(file, html);
}

function updateHeader() {
  const file = path.join(root, 'components', 'header.html');
  let html = fs.readFileSync(file, 'utf8');
  if (!html.includes('href="/vietnam/"')) {
    const anchor = '      <a class="nav-link" href="/thailand/" data-nav-key="thailand">Thailand</a>';
    html = html.replace(anchor, `${anchor}\n      <a class="nav-link" href="/vietnam/" data-nav-key="vietnam">Vietnam</a>`);
  }
  html = html.replace('Search Malaysia, Beijing, Jeju…', 'Search Vietnam, Malaysia, Beijing…');
  fs.writeFileSync(file, html);
}

function updateFooter() {
  const file = path.join(root, 'components', 'footer.html');
  let html = fs.readFileSync(file, 'utf8');
  if (!html.includes('href="/vietnam/"')) {
    const anchor = '<div class="footer-column"><h2>Explore</h2><div class="footer-links">';
    const links = `<a href="/vietnam/">Vietnam</a>${vietnamClusters.map((cluster) => `<a href="/vietnam/${cluster.slug}/">${escapeHtml(cluster.name)}</a>`).join('')}`;
    html = html.replace(anchor, `${anchor}${links}`);
  }
  fs.writeFileSync(file, html);
}

function updateSearch() {
  const file = path.join(root, 'data', 'search-index.json');
  const current = JSON.parse(fs.readFileSync(file, 'utf8')).filter((item) => !item.url.startsWith('/vietnam/'));
  const country = { title: 'Vietnam Travel Guide', url: '/vietnam/', parent: 'Asia', type: 'Country field atlas', summary: 'Fourteen complete hubs and eighty-four focused guides from Hanoi and the northern highlands to the central coast, delta and southern islands.', keywords: ['vietnam', 'viet nam', 'hanoi', 'ho chi minh city', 'hoi an', 'mekong delta', 'vietnam travel guide'] };
  const hubs = vietnamClusters.map((cluster) => ({ title: `${cluster.name} Travel Guide`, url: `/vietnam/${cluster.slug}/`, parent: `Vietnam · ${cluster.region}`, type: 'Complete regional hub with six field guides', summary: cluster.hubIntro, keywords: [cluster.name.toLowerCase(), cluster.slug.replaceAll('-', ' '), cluster.region.toLowerCase(), ...cluster.guides.map((guide) => guide.name.toLowerCase())] }));
  const guides = vietnamGuides.map((guide) => ({ title: `${guide.name} Guide`, url: guide.url, parent: `Vietnam · ${guide.hubName}`, type: 'Focused area and decision guide', summary: guide.summary, keywords: [guide.name.toLowerCase(), guide.hubName.toLowerCase(), guide.slug.replaceAll('-', ' '), guide.motif.toLowerCase(), 'vietnam travel guide'] }));
  fs.writeFileSync(file, JSON.stringify([...current, country, ...hubs, ...guides], null, 2) + '\n');
}

function updateHome() {
  const file = path.join(root, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  const image = vietnamClusters[0].guides[0].image;
  html = html.replace('Plan Malaysia, China, Japan, South Korea and Thailand with practical country, city, island and neighborhood guides for transport and realistic routes.', 'Plan Vietnam, Malaysia, China, Japan, South Korea and Thailand with practical country, city, island and neighborhood guides for realistic routes.');
  html = html.replace('https://tripdistill.com/assets/images/malaysia-kuala-lumpur.webp', `https://tripdistill.com${image.src}`);
  html = html.replace(/<a class="button primary" href="\/malaysia\/">Explore Malaysia[\s\S]*?<\/a>\s*<a class="button secondary" href="\/malaysia\/#regions">Compare 14 Malaysian regions<\/a>/, '<a class="button primary" href="/vietnam/">Explore Vietnam <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg></a><a class="button secondary" href="/vietnam/#regions">Compare 14 Vietnam hubs</a>');
  html = html.replace(/<div class="hero-visual" aria-label="[^"]*">\s*<img class="hero-image-main"[^>]*>/, `<div class="hero-visual" aria-label="${escapeHtml(image.alt)}"><img class="hero-image-main" src="${image.src}" width="1600" height="1066" alt="${escapeHtml(image.alt)}" fetchpriority="high">`);
  html = html.replace('<div class="hero-stamp"><strong>5 countries live</strong><span>Malaysia joins China, Japan, South Korea and Thailand with a complete first planning layer.</span></div>', '<div class="hero-stamp"><strong>6 countries live</strong><span>Vietnam joins Malaysia, China, Japan, South Korea and Thailand with fourteen complete regional hubs.</span></div>');
  html = html.replace('<div><span class="section-kicker">Destinations now live</span><h2 id="destinations-title">Start with Malaysia, China, Japan, South Korea or Thailand</h2><p>Compare country context first, then move into city, island and neighborhood guides built around real transport, time and stay decisions.</p></div>', '<div><span class="section-kicker">Destinations now live</span><h2 id="destinations-title">Start with Vietnam, Malaysia, China, Japan, South Korea or Thailand</h2><p>Compare country context first, then move into city, island and neighborhood guides built around real transport, time and stay decisions.</p></div>');
  html = html.replace('<a class="text-link" href="/malaysia/">Open the newest country guide →</a>', '<a class="text-link" href="/vietnam/">Open the newest country guide →</a>');
  const card = `${vietnamHomeStart}\n          <a class="destination-card featured" href="/vietnam/"><img src="${image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(image.alt)}"><div class="destination-copy"><small>Country guide · New</small><h3>Vietnam</h3><p>Follow fourteen complete hubs from northern lakes and highland roads through heritage rain, delta channels and southern island seas.</p><span class="card-arrow">Plan Vietnam →</span></div></a>\n${vietnamHomeEnd}`;
  if (html.includes(vietnamHomeStart)) html = replaceMarked(html, vietnamHomeStart, vietnamHomeEnd, card);
  else html = html.replace('<div class="destination-grid">', `<div class="destination-grid">\n${card}`);
  html = html.replace('Malaysia, China, Japan, South Korea and Thailand are live. The next expansion will deepen regional guides only when each page has enough real planning value to stand on its own.', 'Vietnam, Malaysia, China, Japan, South Korea and Thailand are live. Every regional card now opens only after it supports an independently useful guide and a deeper planning layer.');
  const credit = `${vietnamHomeCreditStart}\n          ${imageCredit(image)}\n${vietnamHomeCreditEnd}`;
  html = html.replace('        <ul hidden aria-hidden="true"><li>Vietnam source marker</li></ul>\n', '');
  if (html.includes(vietnamHomeCreditStart)) html = replaceMarked(html, vietnamHomeCreditStart, vietnamHomeCreditEnd, credit);
  else {
    const sourcesHeading = html.indexOf('<h2 id="home-sources-title">Photo sources and licenses</h2>');
    const sourcesList = html.indexOf('<ul>', sourcesHeading);
    if (sourcesHeading === -1 || sourcesList === -1) throw new Error('Cannot find home photo-credit list');
    const insertAt = sourcesList + '<ul>'.length;
    html = html.slice(0, insertAt) + `\n${credit}` + html.slice(insertAt);
  }
  fs.writeFileSync(file, html);
}

function updateAbout() {
  const file = path.join(root, 'about', 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/TripDistill now covers Malaysia, China, Japan, South Korea and Thailand\.[^<]*/, 'TripDistill now covers Vietnam, Malaysia, China, Japan, South Korea and Thailand. Vietnam opens fourteen complete regional hubs and eighty-four focused guides; every destination URL is published only after it contains original structure, practical decisions, current official sources and visible image provenance.');
  fs.writeFileSync(file, html);
}

function updateEnglishMainScriptReferences() {
  const excludedRoots = new Set(['.git', 'dist', 'node_modules', 'zh', 'ja', 'ko', 'th']);
  const stack = [root];
  let changed = 0;
  while (stack.length) {
    const directory = stack.pop();
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      if (directory === root && excludedRoots.has(entry.name)) continue;
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
        continue;
      }
      if (!entry.isFile() || !entry.name.endsWith('.html')) continue;
      const before = fs.readFileSync(fullPath, 'utf8');
      const after = before
        .replace(/\/js\/main\.js\?v=\d{8}-\d+/g, mainJs)
        .replace(/\/css\/site\.css\?v=\d{8}-\d+/g, siteCss);
      if (after !== before) {
        fs.writeFileSync(fullPath, after);
        changed += 1;
      }
    }
  }
  return changed;
}

for (const [index, cluster] of vietnamClusters.entries()) {
  const file = routeFile(`/vietnam/${cluster.slug}/`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, hubPage(cluster, index));
}
for (const guide of vietnamGuides) {
  const cluster = vietnamClusters.find((item) => item.slug === guide.hubSlug);
  const file = routeFile(guide.url);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, guidePage(guide, cluster));
}
const countryFile = routeFile('/vietnam/');
fs.mkdirSync(path.dirname(countryFile), { recursive: true });
fs.writeFileSync(countryFile, countryPage());
updateSidebar();
updateHeader();
updateFooter();
updateSearch();
updateHome();
updateAbout();
const updatedMainReferences = updateEnglishMainScriptReferences();

console.log(`Generated Vietnam: 1 country hub, ${vietnamClusters.length} regional hubs, ${vietnamGuides.length} focused guides, synchronized English shell/search, and ${updatedMainReferences} script references.`);
