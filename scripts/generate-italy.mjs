import fs from 'node:fs';
import path from 'node:path';
import { italyClusters, italyCountrySources, italyGuides } from '../data/italy-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const reviewDate = '26 September 2026';
const isoDate = '2026-09-26';
const siteCss = '/css/site.css?v=20260926-1';
const countryCss = '/css/italy.css?v=20260926-1';
const fieldCss = '/css/italy-field.css?v=20260926-1';
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
  if (text.length < 120) text += ' Compare access, reservations, transport, alternatives and the return before committing the day.';
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
  <meta name="theme-color" content="#202825"><meta property="og:type" content="${type}"><meta property="og:site_name" content="TripDistill"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${absolute(route)}"><meta property="og:image" content="${absolute(image.src)}"><meta name="twitter:card" content="summary_large_image">
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
      breadcrumb([['Home', absolute('/')], ['Italy', absolute('/italy/')], [guide.hubName, absolute(`/italy/${guide.hubSlug}/`)], [guide.name, absolute(guide.url)]]),
      faqSchema(guide.faq)
    ]
  };
}

const decisionHeader = (guide) => `<header><span>Choose the operating layer</span><h2>Three useful routes, each with a visible sacrifice.</h2><p>${escapeHtml(guide.purpose)}</p></header>`;
const choiceArticle = ([title, copy], index, extra = '') => `<article ${extra}><b>${String(index + 1).padStart(2, '0')}</b><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></article>`;

function decisionInstrument(guide) {
  const choices = guide.choices;
  const structure = guide.structure;
  let body;
  if (structure === 'booked-door-score') {
    body = `<ol class="it-scoreboard">${choices.map((choice, index) => `<li>${choiceArticle(choice, index)}</li>`).join('')}</ol>`;
  } else if (structure === 'rail-to-street-braid') {
    body = `<div class="it-braid"><i aria-hidden="true"></i>${choices.map((choice, index) => choiceArticle(choice, index, `data-lane="${index + 1}"`)).join('')}<aside>Rail arrival and street exit are separate decisions.</aside></div>`;
  } else if (structure === 'lagoon-waterline') {
    body = `<div class="it-waterline"><div class="it-water-out"><span>OUTWARD WATERLINE</span>${choiceArticle(choices[0], 0)}</div><div class="it-water-islands">${choiceArticle(choices[1], 1)}${choiceArticle(choices[2], 2)}</div><aside>Save the mainland or island return before boarding.</aside></div>`;
  } else if (structure === 'hill-town-section') {
    body = `<ol class="it-hill-steps">${choices.map((choice, index) => `<li style="--step:${index}">${choiceArticle(choice, index)}</li>`).join('')}</ol>`;
  } else if (structure === 'ztl-threshold-ring') {
    body = `<div class="it-rings">${choices.map((choice, index) => `<div class="it-ring it-ring-${index + 1}">${choiceArticle(choice, index)}</div>`).join('')}<span class="it-ring-core">WALKABLE CORE</span></div>`;
  } else if (structure === 'excavation-traverse') {
    body = `<div class="it-traverse"><span class="it-datum">ENTRY → SHADE → EXIT</span>${choices.map((choice, index) => choiceArticle(choice, index, `data-stratum="${index + 1}"`)).join('')}</div>`;
  } else if (structure === 'coast-capacity-braid') {
    body = `<div class="it-coast-braid">${choices.map((choice, index) => `<section><span>MODE ${String(index + 1).padStart(2, '0')}</span>${choiceArticle(choice, index)}</section>`).join('')}<aside>Choose one transport spine before adding a second town.</aside></div>`;
  } else if (structure === 'island-return-billet') {
    body = `<div class="it-billet"><aside><strong>OUT</strong><span>port · check-in · landing</span></aside><div>${choices.map((choice, index) => choiceArticle(choice, index)).join('')}</div><aside><strong>BACK</strong><span>last practical return</span></aside></div>`;
  } else if (structure === 'summit-operating-stack') {
    body = `<ol class="it-summit-stack">${choices.map((choice, index) => `<li><span>${['VALLEY', 'LIFT', 'HIGH LINE'][index]}</span>${choiceArticle(choice, index)}</li>`).join('')}</ol>`;
  } else if (structure === 'two-shore-clock') {
    body = `<div class="it-shore-clock"><section><span>SHORE A · OUTWARD</span>${choiceArticle(choices[0], 0)}</section><section><span>SHORE B · RETURN</span>${choiceArticle(choices[1], 1)}</section><aside>${choiceArticle(choices[2], 2)}</aside></div>`;
  } else if (structure === 'piazza-circuit') {
    body = `<ol class="it-piazza-circuit">${choices.map((choice, index) => `<li>${choiceArticle(choice, index)}<i aria-hidden="true">${index === 2 ? '↺' : '→'}</i></li>`).join('')}</ol>`;
  } else if (structure === 'collection-attention-spread') {
    body = `<div class="it-collection-spread"><section>${choiceArticle(choices[0], 0)}</section><aside>${choiceArticle(choices[1], 1)}${choiceArticle(choices[2], 2)}</aside></div>`;
  } else if (structure === 'market-daypart-table') {
    body = `<div class="it-daypart-table" role="table"><div role="row"><span role="columnheader">MORNING</span><span role="columnheader">MIDDAY</span><span role="columnheader">EVENING</span></div><div role="row">${choices.map((choice, index) => `<div role="cell"><small class="it-mobile-daypart">${['MORNING', 'MIDDAY', 'EVENING'][index]}</small>${choiceArticle(choice, index)}</div>`).join('')}</div></div>`;
  } else if (structure === 'living-sacred-threshold') {
    body = `<div class="it-sacred-thresholds"><section><h3 class="it-threshold-label">PUBLIC APPROACH</h3>${choiceArticle(choices[0], 0)}</section><section><h3 class="it-threshold-label">CONTROLLED INTERIOR</h3>${choiceArticle(choices[1], 1)}</section><section><h3 class="it-threshold-label">QUIET ALTERNATIVE</h3>${choiceArticle(choices[2], 2)}</section></div>`;
  } else if (structure === 'volcano-status-board') {
    body = `<div class="it-status-board">${choices.map((choice, index) => `<section data-status="${['FULL', 'PARTIAL', 'CLOSED-DAY'][index]}"><span>${['FULL WINDOW', 'PARTIAL WINDOW', 'LOWER FALLBACK'][index]}</span>${choiceArticle(choice, index)}</section>`).join('')}</div>`;
  } else {
    body = `<div class="it-road-folio">${choices.map((choice, index) => `<section><small>STAGE ${String(index + 1).padStart(2, '0')}</small>${choiceArticle(choice, index)}<footer>car / bus / walk threshold</footer></section>`).join('')}</div>`;
  }
  return `<section class="it-decision-instrument it-structure-${escapeHtml(structure)}" data-it-structure="${escapeHtml(structure)}">${decisionHeader(guide)}${body}</section>`;
}

function guidePage(guide, cluster, guideIndex) {
  const description = metaDescription(`${guide.summary} ${guide.access}`);
  const planningSources = uniqueSources(guide.sources, cluster.sources);
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>${sharedHead({ title: `${guide.name} Travel Guide | TripDistill Italy`, description, route: guide.url, image: guide.image, field: true })}<script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(guideSchema(guide))}</script></head>
<body data-page="it-${escapeHtml(cluster.slug)}-${escapeHtml(guide.slug)}" data-parent-page="italy" data-country="italy" data-region="${escapeHtml(cluster.slug)}">
${shellStart(`<main id="main-content" class="page-content it-field" data-it-family="${escapeHtml(cluster.family)}" data-it-layout="${escapeHtml(guide.layout)}" data-it-structure="${escapeHtml(guide.structure)}" data-it-instrument="${escapeHtml(guide.instrument)}">`)}
  <nav class="it-breadcrumb" aria-label="Breadcrumb"><a href="/italy/">Italy</a><span>›</span><a href="/italy/${cluster.slug}/">${escapeHtml(cluster.name)}</a><span>›</span><strong>${escapeHtml(guide.name)}</strong></nav>
  <section class="it-field-hero"><div class="it-field-index"><span>${escapeHtml(cluster.region)}</span><b>${String(guideIndex + 1).padStart(2, '0')}</b></div><div class="it-field-copy"><span class="it-kicker">${escapeHtml(cluster.label)}</span><h1>${escapeHtml(guide.name)}</h1><p>${escapeHtml(guide.summary)}</p><div class="it-purpose"><small>Decision this guide resolves</small><strong>${escapeHtml(guide.purpose)}</strong></div><div class="hero-actions"><a class="button primary" href="#route">Follow the route</a><a class="button secondary" href="#failure-points">Read the weak points</a></div></div><figure><img src="${guide.image.src}" width="1600" height="1066" fetchpriority="high" alt="${escapeHtml(guide.image.alt)}"><figcaption>${escapeHtml(guide.image.label)} · ${escapeHtml(guide.image.license)}</figcaption></figure><aside class="it-instrument-tab"><small>${escapeHtml(guide.layout)}</small><strong>${escapeHtml(guide.instrument)}</strong><span>reviewed ${reviewDate}</span></aside></section>
  ${decisionInstrument(guide)}
  ${ad}
  <section class="it-threshold-board"><article><span>REAL GATEWAY</span><h2>Begin where the transport actually ends.</h2><p>${escapeHtml(guide.access)}</p></article><article><span>VISIBLE SACRIFICE</span><h2>Know what the chosen line leaves out.</h2><p>${escapeHtml(guide.tradeoff)}</p></article><aside><div><small>TIME ENVELOPE</small><p>${escapeHtml(guide.duration)}</p></div><div><small>PAIR ONLY WHEN USEFUL</small><p>${escapeHtml(guide.combine)}</p></div></aside></section>
  <section class="it-regional-strata"><header><span>${escapeHtml(cluster.label)}</span><h2>${escapeHtml(cluster.name)} has four layers to align.</h2><p>${escapeHtml(cluster.hubIntro)}</p></header><div><article><h3>BASE</h3><p>${escapeHtml(cluster.stay)}</p></article><article><h3>TRANSFER</h3><p>${escapeHtml(cluster.transfer)}</p></article><article><h3>SEASON</h3><p>${escapeHtml(cluster.season)}</p></article><article><h3>LOWER-RISK DAY</h3><p>${escapeHtml(cluster.fallback)}</p></article></div></section>
  <section class="it-route-folio" id="route" data-it-route-structure="${escapeHtml(guide.structure)}"><header><span>Four thresholds</span><h2>Arrive, cross one gate, use one layer, then protect the return.</h2><p>${escapeHtml(guide.verify)}</p></header><ol>${guide.route.map(([label, title, copy], index) => `<li><b>${String(index + 1).padStart(2, '0')}</b><small>${escapeHtml(label)}</small><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></li>`).join('')}</ol></section>
  <section class="it-live-desk"><div><span>LIVE AUTHORITIES</span><h2>Reopen the pages that control today’s gate.</h2><p>The guide provides the decision structure; these authorities control admission, transport, paths, weather, marine operation and closures.</p></div><ul>${sourceList(planningSources)}</ul></section>
  <section class="it-fallback"><div><span>WHEN THE GATE CLOSES</span><h2>Keep a complete alternative, not fragments.</h2><p>${escapeHtml(guide.fallback)}</p></div><blockquote>${escapeHtml(guide.verify)}</blockquote></section>
  <section class="it-breakpoints" id="failure-points"><header><span>Three weak points</span><h2>Change the plan while the return is still strong.</h2></header><div>${guide.watch.map(([title, copy], index) => `<article><b>${String(index + 1).padStart(2, '0')}</b><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></article>`).join('')}</div></section>
  <section class="it-related"><header><span>SAME REGIONAL FOLIO</span><h2>Other complete ways to use ${escapeHtml(cluster.name)}.</h2></header><div>${cluster.guides.filter((item) => item.slug !== guide.slug).map((item) => `<a href="${item.url}"><img src="${item.image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(item.image.alt)}"><div><small>${escapeHtml(item.instrument)}</small><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(compact(item.purpose, 125))}</p><strong>Open this route folio →</strong></div></a>`).join('')}</div></section>
  <section class="it-faq"><header><span>PLANNING ANSWERS</span><h2>${escapeHtml(guide.name)} FAQ</h2></header><div class="faq-list">${guide.faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>
  <section class="section sources"><h2>Official sources and photo credits</h2><p>Planning facts and image licensing were reviewed on ${reviewDate}. Admission, rail, roads, ZTLs, paths, ferries, weather and local access can change; reopen the linked authority or operator before travel.</p><ul>${sourceList(planningSources)}${cluster.guides.map((item) => imageCredit(item.image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
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
  const route = `/italy/${cluster.slug}/`;
  return { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', '@id': `${absolute(route)}#article`, headline: `${cluster.name} Travel Guide`, description: cluster.hubIntro, inLanguage: 'en', datePublished: isoDate, dateModified: isoDate, mainEntityOfPage: absolute(route), image: absolute(cluster.guides[0].image.src), about: { '@type': 'TouristDestination', name: cluster.name }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
    breadcrumb([['Home', absolute('/')], ['Italy', absolute('/italy/')], [cluster.name, absolute(route)]]), faqSchema(hubFaq(cluster))
  ] };
}
function hubPage(cluster, clusterIndex) {
  const route = `/italy/${cluster.slug}/`;
  const hero = cluster.guides[0].image;
  const faq = hubFaq(cluster);
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>${sharedHead({ title: `${cluster.name} Travel Guide — 3 Complete Routes | TripDistill`, description: metaDescription(`${cluster.hubIntro} ${cluster.transfer}`), route, image: hero })}<script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(hubSchema(cluster))}</script></head>
<body data-page="it-${escapeHtml(cluster.slug)}" data-parent-page="italy" data-country="italy" data-region="${escapeHtml(cluster.slug)}">
${shellStart(`<main id="main-content" class="page-content it-hub" data-it-family="${escapeHtml(cluster.family)}" data-it-hub-variant="${(clusterIndex % 8) + 1}">`)}
  <section class="it-hub-hero"><div class="it-hub-number"><span>ITALY FIELD FOLIO</span><b>${String(clusterIndex + 1).padStart(2, '0')}</b></div><div class="it-hub-copy"><span class="it-kicker">${escapeHtml(cluster.region)}</span><h1>${escapeHtml(cluster.name)}</h1><p class="it-tagline">${escapeHtml(cluster.tagline)}</p><p>${escapeHtml(cluster.hubIntro)}</p><div class="hero-actions"><a class="button primary" href="#route-folios">Choose a route folio</a><a class="button secondary" href="#base-board">Read the base board</a></div></div><figure><img src="${hero.src}" width="1600" height="1066" fetchpriority="high" alt="${escapeHtml(hero.alt)}"><figcaption>${escapeHtml(hero.label)} · ${escapeHtml(hero.license)}</figcaption></figure><aside class="it-hub-tab"><small>${escapeHtml(cluster.label)}</small><strong>3</strong><span>independent route systems</span></aside></section>
  <section class="it-base-board" id="base-board"><header><span>ALIGN THE REGION</span><h2>Base, transfer, season and fallback must work together.</h2></header><div><article><b>BASE</b><h3>Sleep beside the useful departure.</h3><p>${escapeHtml(cluster.stay)}</p></article><article><b>TRANSFER</b><h3>Name the whole last mile.</h3><p>${escapeHtml(cluster.transfer)}</p></article><article><b>SEASON</b><h3>Let current conditions edit the route.</h3><p>${escapeHtml(cluster.season)}</p></article><article><b>FALLBACK</b><h3>Keep one complete lower-risk day.</h3><p>${escapeHtml(cluster.fallback)}</p></article></div></section>
  ${ad}
  <section class="it-hub-guides" id="route-folios"><header><span>THREE DIFFERENT OPERATING DAYS</span><h2>Choose the gateway, threshold and return you actually have.</h2><p>Each route uses a different planning instrument, exact official sources and a complete alternative when the main gate closes.</p></header><div>${cluster.guides.map((guide, index) => `<a class="it-guide-card" href="${guide.url}" data-it-layout="${escapeHtml(guide.layout)}" data-it-structure="${escapeHtml(guide.structure)}"><span class="it-card-index">${String(index + 1).padStart(2, '0')}</span><img src="${guide.image.src}" width="1600" height="1066" loading="${index === 0 ? 'eager' : 'lazy'}" alt="${escapeHtml(guide.image.alt)}"><div><small>${escapeHtml(guide.instrument)}</small><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(guide.purpose)}</p><strong>Open the complete route →</strong></div></a>`).join('')}</div></section>
  <section class="it-comparison-slab"><header><span>COMPARE BEFORE COMMITTING</span><h2>Every route gains something by leaving something else out.</h2></header><div>${cluster.guides.map((guide) => `<article><header><small>${escapeHtml(guide.instrument)}</small><h3>${escapeHtml(guide.name)}</h3></header><p><strong>Gateway:</strong> ${escapeHtml(guide.access)}</p><p><strong>Sacrifice:</strong> ${escapeHtml(guide.tradeoff)}</p><p><strong>Time:</strong> ${escapeHtml(guide.duration)}</p></article>`).join('')}</div></section>
  <section class="it-hub-live"><div><span>REGIONAL AUTHORITIES</span><h2>These sources control the moving parts.</h2><p>Use this guide for structure, then reopen the official destination, transport, park or venue information for the exact date.</p></div><ul>${sourceList(cluster.sources)}</ul></section>
  <section class="it-hub-faq"><div><span>REGIONAL ANSWERS</span><h2>${escapeHtml(cluster.name)} FAQ</h2></div><div class="faq-list">${faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>
  <section class="section sources"><h2>Official sources and photo credits</h2><p>Planning facts and image licensing were reviewed on ${reviewDate}. Verify current tickets, rail, roads, ZTLs, paths, ferries and site access before travel.</p><ul>${sourceList(cluster.sources)}${cluster.guides.map((guide) => imageCredit(guide.image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
</main>${shellEnd()}</body></html>`;
}

const countryFaq = [
  ['How many bases suit a first Italy trip?', 'For seven to ten days, choose one north–central rail corridor or one southern system and use two or three bases. For fourteen to twenty-one days, add a second corridor only when the transfer day and luggage move are explicit.'],
  ['Should I buy a rail pass?', 'Price the exact high-speed and regional journeys against advance or flexible tickets. Local buses, private railways, ferries, mountain lifts and reservations are separate products and may matter more than the trunk fare.'],
  ['Do I need a car?', 'Rome, Florence, Venice, Milan, Naples and many art cities work better without one. A car can help in rural Tuscany, Basilicata, Calabria and Sardinia, but ZTLs, parking, mountain roads, ferries and wine visits can make it a liability.'],
  ['What should I reserve first?', 'Reserve the highest-priority controlled monument or collection after the corridor and base are stable. Then align the train, station exit or port; do not build the country route around a list of unrelated ticket times.'],
  ['How should I handle strikes, heat or closures?', 'Recheck the operator and local authority, keep a complete city-strength fallback in the same base and avoid tying a separate flight, ferry or long rail ticket to a fragile exposed day.']
];
function countrySchema() {
  return { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', '@id': `${absolute('/italy/')}#page`, name: 'Italy Travel Guide', description: 'Plan Italy through twenty complete regional hubs and sixty route-specific city, art, coast, mountain and island guides.', inLanguage: 'en', datePublished: isoDate, dateModified: isoDate, primaryImageOfPage: absolute(italyClusters[0].guides[0].image.src), about: { '@type': 'Country', name: 'Italy' }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
    breadcrumb([['Home', absolute('/')], ['Italy', absolute('/italy/')]]), faqSchema(countryFaq)
  ] };
}
const countryGroups = [
  [['north', 'northwest-adriatic'], '01 · Northern rail cities, lakes and Ligurian coast', 'Use fast rail for the trunk; price every lake, vineyard and headland last mile separately.', 'Milan, the lakes, Turin, Genoa and the Via Emilia combine strong rail gateways with ferry clocks, booked collections, rural producers and protected coast paths.'],
  [['northeast'], '02 · Lagoon, Veneto cities and the alpine threshold', 'Water, fresco reservations and mountain operation use three different clocks.', 'Venice, Verona, Padua and the Dolomites demand exact doors, island returns, valley bases and weather-controlled lift or trail decisions.'],
  [['central-art-cities', 'central'], '03 · Central art cities, hill towns and the Adriatic spine', 'Reserve one interior; name the climb, ZTL edge or rural bus that completes the day.', 'Rome, Florence, Siena, Umbria and the central Adriatic mix walkable cores with steep thresholds and sparse countryside links.'],
  [['south-volcano-coast', 'south-adriatic', 'southern-apennines', 'sicily-west', 'sicily-east', 'sardinia'], '04 · Southern volcanoes, coasts and islands', 'Let the port, sea state, volcano gate and final return control the postcard.', 'Naples, Amalfi, Puglia, Calabria, Sicily and Sardinia need strong bases, complete fallbacks and honest transfer days.']
];
function countryCards(bands) {
  return italyClusters.filter((cluster) => bands.includes(cluster.band)).map((cluster) => {
    const image = cluster.guides[0].image;
    return `<a class="it-country-card" href="/italy/${cluster.slug}/" data-family="${escapeHtml(cluster.family)}"><span class="it-card-number">${String(italyClusters.indexOf(cluster) + 1).padStart(2, '0')}</span><div><small>${escapeHtml(cluster.region)} · 3 complete routes</small><h3>${escapeHtml(cluster.name)}</h3><p>${escapeHtml(compact(cluster.hubIntro, 165))}</p><strong>Open the regional folio →</strong></div><img src="${image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(image.alt)}"></a>`;
  }).join('');
}
function countryPage() {
  const images = [italyClusters[0].guides[0].image, italyClusters[7].guides[0].image, italyClusters[17].guides[0].image];
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>${sharedHead({ title: 'Italy Travel Guide — 20 Complete Regional Hubs | TripDistill', description: metaDescription('Plan Italy through twenty regional hubs and sixty focused guides covering art cities, rail corridors, hill towns, coasts, volcanoes, mountains and islands.'), route: '/italy/', image: images[0], type: 'website' })}<script src="${adsenseJs}" defer></script><script type="application/ld+json">${JSON.stringify(countrySchema())}</script></head>
<body data-page="italy" data-country="italy">
${shellStart('<main id="main-content" class="page-content it-country">')}
  <section class="it-country-hero"><div class="it-country-title"><span class="it-kicker">Peninsula field atlas · reviewed ${reviewDate}</span><h1>Italy</h1><p class="it-country-deck">Align the trunk, the threshold and the return before collecting cities.</p><p>High-speed rail links the largest art cities, but timed monuments, private railways, lagoon boats, ZTL edges, mountain lifts, coast buses, ferries and live volcano or weather gates decide the usable trip.</p><div class="hero-actions"><a class="button primary" href="#regions">Compare 20 hubs</a><a class="button secondary" href="#spine">Read the peninsula spine</a></div></div><ol class="it-peninsula-spine" aria-label="Four-stage Italy travel spine"><li><b>01</b><span>NORTH</span><small>rail cities · lakes · Alps</small></li><li><b>02</b><span>CENTRE</span><small>art doors · hill towns</small></li><li><b>03</b><span>SOUTH</span><small>volcanoes · coast roads</small></li><li><b>04</b><span>ISLANDS</span><small>ports · marine windows</small></li></ol><div class="it-country-images">${images.map((image, index) => `<figure data-window="${index + 1}"><img src="${image.src}" width="1600" height="1066" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} alt="${escapeHtml(image.alt)}"><figcaption>${escapeHtml(image.label)} · ${escapeHtml(image.license)}</figcaption></figure>`).join('')}</div><div class="it-country-facts"><div><strong>20</strong><span>regional hubs</span></div><div><strong>60</strong><span>focused guides</span></div><div><strong>16</strong><span>decision structures</span></div><div><strong>5</strong><span>static languages</span></div></div></section>
  <section class="it-country-rules"><article><b>01</b><h2>Choose a corridor before a monument list.</h2><p>Rome–Florence–Venice, a northern lake system, Campania, Sicily or Sardinia each needs a different number of bases and transfer days.</p></article><article><b>02</b><h2>Every famous interior is a separate threshold.</h2><p>Ticket names, identity rules, entrances, worship, security and capacity can make two adjacent sites incompatible on the same clock.</p></article><article><b>03</b><h2>Keep a complete same-base alternative.</h2><p>Heat, strikes, sea state, volcano access and mountain weather are normal planning conditions; a useful fallback should still make sense as a day.</p></article></section>
  ${ad}
  <div id="regions">${countryGroups.map(([bands, kicker, heading, copy]) => `<section class="it-country-band"><header><span>${kicker}</span><h2>${heading}</h2><p>${copy}</p></header><div class="it-country-grid">${countryCards(bands)}</div></section>`).join('')}</div>
  <section class="it-country-section" id="spine"><header><span>PENINSULA OPERATING SPINE</span><h2>The trunk is fast; the meaningful day begins at the last mile.</h2><p>Keep national rail, city access, rural thresholds and coast or mountain operation as separate contracts.</p></header><div class="it-network-grid"><article><small>HIGH-SPEED TRUNK</small><h3>Price the named train and station.</h3><p>Advance fares, operator rules and station identity matter. A fast journey does not include hotel checkout, platform access or the next rural connection.</p></article><article><small>ART-CITY DOORS</small><h3>One reservation should shape the day.</h3><p>Uffizi, Vatican, Colosseum, Last Supper, Scrovegni and other controlled interiors each need their own arrival and fallback.</p></article><article><small>RURAL &amp; ZTL EDGE</small><h3>Stop outside the historic core.</h3><p>Hill towns, vineyards and parks require a named bus, legal lot, tour, bicycle or walking threshold; a map pin is not a transport plan.</p></article><article><small>SEA, LAGOON &amp; HEIGHT</small><h3>Operation can override the booking.</h3><p>Vaporetto routes, ferries, lifts, trails, volcanoes and coast roads need live checks and a return that survives disruption.</p></article></div></section>
  <section class="it-country-section"><header><span>TRIP-LENGTH SLABS</span><h2>Count stable bases, not regions crossed.</h2></header><div class="it-trip-grid"><article><strong>7–10 days</strong><h3>One clear corridor</h3><p>Choose Rome plus Tuscany, Venice plus the north, Campania, Sicily or another coherent system. Use two or three bases at most.</p></article><article><strong>12–16 days</strong><h3>Two systems with one honest transfer</h3><p>Pair a northern or central rail corridor with one southern or island system, counting the luggage and port day.</p></article><article><strong>18–21 days</strong><h3>Three bases and one landscape branch</h3><p>Add a lake, hill-town, coast or mountain system only when it changes the trip’s argument, not to collect another region.</p></article></div></section>
  <section class="it-country-section it-entry-board"><header><span>ARRIVAL &amp; BOOKING BOARD</span><h2>Do not protect the second ticket before the first threshold is real.</h2></header><div><article><h3>Airports and terminal cities</h3><p>Rome, Milan, Venice, Naples, Bologna, Pisa, Sicily and Sardinia use different airport-to-city contracts. Leave margin before separately ticketed rail or ferries.</p></article><article><h3>High-speed versus regional</h3><p>Fast trains solve the trunk; regional rail, private operators, bus links and port transfers solve the places visitors actually sleep and enter.</p></article><article><h3>Cars, ZTLs and islands</h3><p>Use cars selectively outside city cores, identify legal parking and treat vehicle ferries, island roads and wine visits as separate decisions.</p></article></div></section>
  <section class="it-country-section"><header><span>PLANNING ANSWERS</span><h2>Italy FAQ</h2></header><div class="faq-list">${countryFaq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>
  <section class="section sources"><h2>Official sources and photo credits</h2><p>Country planning and image licensing were reviewed on ${reviewDate}. Entry, rail, roads, ZTLs, paths, ferries, weather and operating status change; verify directly before travel.</p><ul>${sourceList(italyCountrySources)}${italyClusters.map((cluster) => imageCredit(cluster.guides[0].image)).join('')}</ul><span class="review-note">Editorial review: ${reviewDate} · Recheck time-sensitive details before booking.</span></section>
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
function italyNavBlock() {
  const chapters = italyClusters.map((cluster) => `<details name="italy-chapters" class="sidebar-accordion sidebar-chapters" data-sidebar-id="chapters-it-${cluster.slug}"><summary><span class="sidebar-summary-main">${escapeHtml(cluster.name)}</span><span class="sidebar-summary-meta">3</span></summary><div class="sidebar-links sidebar-accordion-body"><a class="sidebar-link" href="/italy/${cluster.slug}/" data-nav-key="it-${cluster.slug}">${escapeHtml(cluster.name)}</a>${cluster.guides.map((guide) => `<a class="sidebar-link" href="${guide.url}" data-nav-key="it-${cluster.slug}-${guide.slug}">${escapeHtml(guide.name)}</a>`).join('')}</div></details>`).join('');
  return `<!-- ITALY_NAV_START --><details class="sidebar-accordion sidebar-country" data-sidebar-id="italy"><summary><span class="sidebar-summary-main">Italy</span><span class="sidebar-summary-meta">20</span></summary><div class="sidebar-links sidebar-accordion-body"><a class="sidebar-link" href="/italy/" data-nav-key="italy">Italy guide</a>${chapters}</div></details><!-- ITALY_NAV_END -->`;
}
function updateSidebar() {
  const file = path.join(root, 'components', 'sidebar.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- ITALY_NAV_START -->';
  const end = '<!-- ITALY_NAV_END -->';
  const block = italyNavBlock();
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- UNITED_KINGDOM_NAV_END -->', block);
  fs.writeFileSync(file, html);
}
function updateHeader() {
  const file = path.join(root, 'components', 'header.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- ITALY_HEADER_START -->';
  const end = '<!-- ITALY_HEADER_END -->';
  const block = `${start}<a class="nav-link" href="/italy/" data-nav-key="italy">Italy</a>${end}`;
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- UNITED_KINGDOM_HEADER_END -->', block);
  fs.writeFileSync(file, html);
}
function updateFooter() {
  const file = path.join(root, 'components', 'footer.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- ITALY_FOOTER_START -->';
  const end = '<!-- ITALY_FOOTER_END -->';
  const block = `${start}<a href="/italy/">Italy</a><a href="/italy/rome/">Rome</a><a href="/italy/florence-pisa-lucca/">Florence</a><a href="/italy/venice-lagoon/">Venice</a><a href="/italy/naples-pompeii-vesuvius/">Naples &amp; Pompeii</a><a href="/italy/western-sicily/">Western Sicily</a>${end}`;
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- UNITED_KINGDOM_FOOTER_END -->', block);
  fs.writeFileSync(file, html);
}
function updateSearch() {
  const file = path.join(root, 'data', 'search-index.json');
  const records = JSON.parse(fs.readFileSync(file, 'utf8')).filter((item) => !item.url.startsWith('/italy/'));
  records.push({ title: 'Italy Travel Guide', url: '/italy/', parent: 'Europe', type: 'Country', summary: 'Plan Italy through twenty complete regional hubs and sixty focused guides for art cities, rail corridors, hill towns, coasts, volcanoes, mountains and islands.', keywords: ['Italy', 'Italia', 'Italy travel', 'Rome', 'Florence', 'Venice', 'Sicily'] });
  for (const cluster of italyClusters) {
    records.push({ title: cluster.name, url: `/italy/${cluster.slug}/`, parent: 'Italy', type: 'Regional guide', summary: cluster.hubIntro, keywords: [cluster.name, cluster.region, cluster.band] });
    for (const guide of cluster.guides) records.push({ title: guide.name, url: guide.url, parent: cluster.name, type: 'Local guide', summary: guide.summary, keywords: [guide.name, cluster.name, guide.instrument, guide.layout, guide.structure] });
  }
  fs.writeFileSync(file, JSON.stringify(records, null, 2) + '\n');
}
function updateHome() {
  const file = path.join(root, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  const start = '<!-- ITALY_HOME_START -->';
  const end = '<!-- ITALY_HOME_END -->';
  const image = italyClusters[0].guides[0].image;
  const block = `${start}<a class="destination-card featured" href="/italy/"><img src="${image.src}" width="1600" height="1066" loading="lazy" alt="${escapeHtml(image.alt)}"><div class="destination-copy"><small>Europe · New complete country</small><h3>Italy</h3><p>Compare twenty regional strata books and sixty focused guides across art cities, hill towns, coasts, volcanoes, mountains and islands.</p><span class="card-arrow">Plan Italy →</span></div></a>${end}`;
  html = html.includes(start) ? replaceMarked(html, start, end, block) : insertAfterMarker(html, '<!-- UNITED_KINGDOM_HOME_END -->', block);
  const creditStart = '<!-- ITALY_HOME_CREDIT_START -->';
  const creditEnd = '<!-- ITALY_HOME_CREDIT_END -->';
  const credit = `${creditStart}<ul>${imageCredit(image)}</ul>${creditEnd}`;
  html = html.includes(creditStart) ? replaceMarked(html, creditStart, creditEnd, credit) : insertAfterMarker(html, '<!-- UNITED_KINGDOM_HOME_CREDIT_END -->', credit);
  html = html.replace(/\b(?:12|13) countries live\b/, '13 countries live');
  html = html.replace('The United Kingdom adds 20 complete regional hubs and 60 focused guides across cities, castles, coasts, mountains and islands.', 'Italy adds 20 complete regional hubs and 60 focused guides across art cities, hill towns, coasts, volcanoes, mountains and islands.');
  html = html.replace(/<title>[^<]*<\/title>/, '<title>TripDistill — Practical Travel Guides Across 13 Countries</title>');
  html = html.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="Plan Italy, the United Kingdom, France, Switzerland, Canada, USA, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand with practical destination guides.">');
  html = html.replace(/Practical (?:Italy, )?United Kingdom, France, Switzerland, Canada, United States, Australia and Asia country, city and regional travel guides\./, 'Practical Italy, United Kingdom, France, Switzerland, Canada, United States, Australia and Asia country, city and regional travel guides.');
  html = html.replace(/<h2 id="destinations-title">[^<]*<\/h2>/, '<h2 id="destinations-title">Explore Italy, the United Kingdom, France, Switzerland, Canada, the United States, Australia and Asia</h2>');
  html = html.replace(/<a class="text-link" href="\/(?:italy|united-kingdom)\/">Open the newest country guide →<\/a>/, '<a class="text-link" href="/italy/">Open the newest country guide →</a>');
  html = html.replace(/(?:The\s+)*(?:Italy,\s*)?(?:the\s+)?United Kingdom, France, Switzerland, Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand are live\./, 'Italy, the United Kingdom, France, Switzerland, Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand are live.');
  fs.writeFileSync(file, html);
}
function updateAbout() {
  const file = path.join(root, 'about', 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/TripDistill now covers[^<]*/, 'TripDistill now covers Italy, the United Kingdom, France, Switzerland, Canada, the United States, Australia, Vietnam, Malaysia, China, Japan, South Korea and Thailand. Italy adds 20 complete regional hubs and 60 focused guides built around rail, booked monuments, ZTL thresholds, coast roads, ferries, volcanoes and mountain weather; every destination URL is published only after useful planning detail, current official sources and visible image provenance are present.');
  fs.writeFileSync(file, html);
}

for (const [clusterIndex, cluster] of italyClusters.entries()) {
  const file = routeFile(`/italy/${cluster.slug}/`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, hubPage(cluster, clusterIndex));
}
for (const [guideIndex, guide] of italyGuides.entries()) {
  const cluster = italyClusters.find((item) => item.slug === guide.hubSlug);
  const file = routeFile(guide.url);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, guidePage(guide, cluster, guideIndex));
}
const countryFile = routeFile('/italy/');
fs.mkdirSync(path.dirname(countryFile), { recursive: true });
fs.writeFileSync(countryFile, countryPage());
updateSidebar();
updateHeader();
updateFooter();
updateSearch();
updateHome();
updateAbout();

console.log(`Generated Italy: 1 country page, ${italyClusters.length} hubs and ${italyGuides.length} focused guides (81 English routes), plus Europe navigation, home, about and search integration.`);
