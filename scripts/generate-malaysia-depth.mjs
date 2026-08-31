import fs from 'node:fs';
import path from 'node:path';
import { malaysiaDepthClusters, malaysiaDepthGuides } from '../data/malaysia-depth-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const depthCss = '/css/malaysia-depth.css?v=20260830-1';
const sarawakCss = '/css/malaysia-sarawak.css?v=20260830-2';
const markerStart = '<!-- MALAYSIA_DEPTH_START -->';
const markerEnd = '<!-- MALAYSIA_DEPTH_END -->';
const sidebarStart = '<!-- MALAYSIA_DEPTH_SIDEBAR_START -->';
const sidebarEnd = '<!-- MALAYSIA_DEPTH_SIDEBAR_END -->';
const malaysiaChapterOrder = [
  'kuala-lumpur-putrajaya',
  'george-town-penang',
  'melaka',
  'ipoh-kinta-valley',
  'langkawi',
  'cameron-highlands',
  'taman-negara',
  'perhentian-redang',
  'kota-kinabalu-tunku-abdul-rahman',
  'kinabalu-park-kundasang',
  'sandakan-kinabatangan',
  'semporna-tun-sakaran',
  'kuching-bako',
  'gunung-mulu'
];
const malaysiaChapterRank = new Map(malaysiaChapterOrder.map((slug, index) => [slug, index]));
const orderedMalaysiaDepthClusters = [...malaysiaDepthClusters].sort(
  (left, right) => (malaysiaChapterRank.get(left.hubSlug) ?? Number.MAX_SAFE_INTEGER)
    - (malaysiaChapterRank.get(right.hubSlug) ?? Number.MAX_SAFE_INTEGER)
);

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const absolute = (route) => `https://tripdistill.com${route}`;
const routeFile = (route) => path.join(root, route.replace(/^\//, ''), 'index.html');

function ensureMetaDescription(summary) {
  let value = summary;
  if (value.length < 120) value += ' Plan access, pacing and current official checks for a realistic visit.';
  if (value.length < 120) value += ' Keep transport and conditions explicit.';
  if (value.length > 170) value = value.slice(0, 167).replace(/\s+\S*$/, '') + '…';
  if (value.length < 120) value += ' Verify conditions before travel.';
  return value;
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

function sourcesList(sources) {
  return sources.map(([href, label]) => `<li><a href="${escapeHtml(href)}" target="_blank" rel="noopener">${escapeHtml(label)}</a>.</li>`).join('');
}

function imageCredit(image) {
  return `<li><a href="${escapeHtml(image.source)}" target="_blank" rel="noopener">${escapeHtml(image.label)}</a> — ${escapeHtml(image.creator)}, ${escapeHtml(image.license)}. Resized, center-cropped and converted to WebP; no other material edits.</li>`;
}

function relatedCards(cluster, currentSlug = '') {
  return cluster.guides.filter((guide) => guide.slug !== currentSlug).map((guide) => `
          <a class="md-related-card" href="/malaysia/${cluster.hubSlug}/${guide.slug}/">
            <img src="${guide.image.src}" width="1440" height="960" loading="lazy" decoding="async" alt="${escapeHtml(guide.image.alt)}">
            <span><small>Chapter ${String(cluster.guides.indexOf(guide) + 1).padStart(2, '0')}</small><strong>${escapeHtml(guide.name)}</strong><em>${escapeHtml(guide.motif)}</em></span>
          </a>`).join('');
}

function guideSchema(guide) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TravelGuide',
        '@id': `${absolute(guide.url)}#guide`,
        name: `${guide.name} Travel Guide`,
        description: guide.summary,
        url: absolute(guide.url),
        inLanguage: 'en',
        dateModified: '2026-08-30',
        image: absolute(guide.image.src),
        about: { '@type': 'TouristDestination', name: guide.name, containedInPlace: { '@type': 'Country', name: 'Malaysia' } },
        publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tripdistill.com/' },
          { '@type': 'ListItem', position: 2, name: 'Malaysia', item: 'https://tripdistill.com/malaysia/' },
          { '@type': 'ListItem', position: 3, name: guide.hubName, item: absolute(`/malaysia/${guide.hubSlug}/`) },
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

function childPage(guide, cluster) {
  const description = ensureMetaDescription(guide.summary);
  const title = `${guide.name} | TripDistill`;
  const checks = guide.checks.map(([label, copy], index) => `<article class="md-check"><span>${String(index + 1).padStart(2, '0')}</span><h3>${escapeHtml(label)}</h3><p>${escapeHtml(copy)}</p></article>`).join('');
  const decisions = guide.decisions.map(([label, copy]) => `<article><small>${escapeHtml(label)}</small><p>${escapeHtml(copy)}</p></article>`).join('');
  const route = guide.route.map(([phase, heading, copy], index) => `<article class="md-route-step"><span>${String(index + 1).padStart(2, '0')}</span><small>${escapeHtml(phase)}</small><h3>${escapeHtml(heading)}</h3><p>${escapeHtml(copy)}</p></article>`).join('');
  const faq = guide.faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('');
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${absolute(guide.url)}">${hreflang(guide.url)}
  <meta name="theme-color" content="#173f37">
  <meta property="og:type" content="article"><meta property="og:site_name" content="TripDistill"><meta property="og:title" content="${escapeHtml(guide.name)} — ${escapeHtml(guide.motif)}"><meta property="og:description" content="${escapeHtml(guide.summary)}"><meta property="og:url" content="${absolute(guide.url)}"><meta property="og:image" content="${absolute(guide.image.src)}"><meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/favicon.ico" sizes="any">
  <link rel="stylesheet" href="/css/site.css?v=20260831-1"><link rel="stylesheet" href="/css/malaysia.css?v=20260829-1"><link rel="stylesheet" href="${depthCss}">
  <script src="/js/adsense.js?v=20260826-9" defer></script>
  <script type="application/ld+json">${JSON.stringify(guideSchema(guide))}</script>
</head>
<body data-page="${escapeHtml(guide.slug)}" data-parent-page="${escapeHtml(guide.hubSlug)}" data-country="malaysia" data-region="${escapeHtml(guide.hubSlug)}" data-depth-family="${escapeHtml(guide.family)}" data-depth-instrument="${escapeHtml(guide.instrument)}">
  <a class="skip-link" href="#main-content">Skip to content</a><div id="layout-header"></div>
  <div class="site-shell"><div class="mobile-overlay" data-mobile-overlay aria-hidden="true"></div><aside id="layout-sidebar" class="sidebar" aria-label="TripDistill navigation"></aside>
    <main id="main-content" class="page-content md-guide">
      <section class="md-hero" aria-labelledby="md-title">
        <div class="md-hero-copy"><nav class="md-breadcrumb" aria-label="Breadcrumb"><a href="/malaysia/">Malaysia</a><span>/</span><a href="/malaysia/${cluster.hubSlug}/">${escapeHtml(cluster.hubName)}</a><span>/</span><strong>${escapeHtml(guide.name)}</strong></nav><span class="md-kicker">${escapeHtml(guide.region)} field chapter ${String(guide.chapter).padStart(2, '0')} · reviewed 30 August 2026</span><h1 id="md-title">${escapeHtml(guide.name)} <span>${escapeHtml(guide.motif)}.</span></h1><p>${escapeHtml(guide.summary)}</p><div class="hero-actions"><a class="button primary" href="#route">Follow the route</a><a class="button secondary" href="#checks">Check the weak points</a></div></div>
        <figure class="md-hero-image"><img src="${guide.image.src}" width="1440" height="960" alt="${escapeHtml(guide.image.alt)}" fetchpriority="high"><figcaption>${escapeHtml(guide.image.label)} · ${escapeHtml(guide.image.license)}</figcaption></figure>
        <div class="md-instrument" aria-hidden="true"><span>${escapeHtml(guide.instrument)}</span><strong>${String(guide.chapter).padStart(2, '0')}</strong><em>${escapeHtml(guide.motif)}</em></div>
      </section>

      <section class="md-decision-strip" aria-label="Three planning decisions">${decisions}</section>

      <section class="md-section md-orientation" aria-labelledby="orientation-title"><div><span class="md-section-label">Read the place</span><h2 id="orientation-title">One chapter, with its edges left visible.</h2><p class="md-lead">${escapeHtml(guide.lead)}</p></div><aside><small>Orientation note</small><p>${escapeHtml(guide.orientation)}</p></aside></section>

      <section class="section compact" aria-label="Advertisement"><div class="ad-slot" data-ad-slot><div><strong>Advertisement</strong><span>Responsive AdSense placement reserved</span></div></div></section>

      <section class="md-section" id="route" aria-labelledby="route-title"><div class="md-section-head"><div><span class="md-section-label">Four-stage field route</span><h2 id="route-title">Keep the sequence legible.</h2></div><p>${escapeHtml(guide.decisions[1][1])}</p></div><div class="md-route">${route}</div></section>

      <section class="md-section" id="checks" aria-labelledby="checks-title"><div class="md-section-head"><div><span class="md-section-label">Before committing the day</span><h2 id="checks-title">Three weak points to solve.</h2></div><p>These checks change faster than the page. Reconfirm them with the listed official source and the actual operator close to travel.</p></div><div class="md-check-grid">${checks}</div><div class="md-boundary"><small>Keep this boundary</small><strong>${escapeHtml(guide.decisions[2][0])}</strong><p>${escapeHtml(guide.decisions[2][1])}</p></div></section>

      <section class="md-section md-faq" id="faq" aria-labelledby="faq-title"><div class="md-section-head"><div><span class="md-section-label">Planning answers</span><h2 id="faq-title">${escapeHtml(guide.name)} FAQ</h2></div></div><div class="faq-list">${faq}</div></section>

      <section class="md-section" aria-labelledby="related-title"><div class="md-section-head"><div><span class="md-section-label">Continue within ${escapeHtml(cluster.hubName)}</span><h2 id="related-title">Choose the next chapter by purpose.</h2></div><p>Return to the regional guide before joining distant branches into one day.</p></div><div class="md-related">${relatedCards(cluster, guide.slug)}</div><p class="md-back"><a href="/malaysia/${cluster.hubSlug}/">← Return to the complete ${escapeHtml(cluster.hubName)} guide</a></p></section>

      <section class="section sources" aria-labelledby="sources-title"><h2 id="sources-title">Official sources and photo credit</h2><p>Planning facts and the image license were reviewed on 30 August 2026. Schedules, access, permits, weather and operator terms change; verify directly before travel.</p><ul>${sourcesList(cluster.sources)}${imageCredit(guide.image)}</ul><span class="review-note">Editorial review: 30 August 2026 · Recheck time-sensitive details before booking.</span></section>
    </main>
  </div><div id="layout-footer"></div><script src="/js/main.js?v=20260830-2" defer></script>
</body>
</html>
`;
}

function hubCards(cluster) {
  return `${markerStart}
      <section class="md-hub-section" id="area-guides" aria-labelledby="area-guides-title" data-depth-family="${escapeHtml(cluster.family)}">
        <div class="md-hub-heading"><div><span>Four focused field chapters</span><h2 id="area-guides-title">Go beyond the regional overview.</h2></div><p>${escapeHtml(cluster.hubPrompt)}</p></div>
        <div class="md-hub-grid">${cluster.guides.map((guide, index) => `<a class="md-hub-card" href="/malaysia/${cluster.hubSlug}/${guide.slug}/" data-instrument="${escapeHtml(guide.instrument)}"><img src="${guide.image.src}" width="1440" height="960" loading="lazy" decoding="async" alt="${escapeHtml(guide.image.alt)}"><span class="md-hub-number">${String(index + 1).padStart(2, '0')}</span><div><small>${escapeHtml(guide.motif)}</small><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(guide.summary)}</p><strong>Open the field guide →</strong></div></a>`).join('')}</div>
      </section>
${markerEnd}`;
}

function sarawakHubPage(cluster) {
  const route = `/malaysia/${cluster.hubSlug}/`;
  const primary = cluster.guides[0].image;
  const description = ensureMetaDescription(`Plan ${cluster.hubName} through four distinct Sarawak chapters with practical transport, access, weather and responsible-visit guidance.`);
  const faq = cluster.guides.map((guide) => [guide.faq[0][0], guide.faq[0][1]]);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'TravelGuide', '@id': `${absolute(route)}#guide`, name: `${cluster.hubName} Travel Guide`, description, url: absolute(route), inLanguage: 'en', dateModified: '2026-08-30', image: absolute(primary.src), about: { '@type': 'TouristDestination', name: cluster.hubName }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tripdistill.com/' }, { '@type': 'ListItem', position: 2, name: 'Malaysia', item: 'https://tripdistill.com/malaysia/' }, { '@type': 'ListItem', position: 3, name: cluster.hubName, item: absolute(route) }] },
      { '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }
    ]
  };
  const sourceImages = [...new Map(cluster.guides.map((guide) => [guide.image.src, guide.image])).values()];
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(cluster.hubName)} Guide | TripDistill</title><meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${absolute(route)}">${hreflang(route)}
  <meta name="theme-color" content="#123c35"><meta property="og:type" content="article"><meta property="og:site_name" content="TripDistill"><meta property="og:title" content="${escapeHtml(cluster.hubName)} — a Sarawak field cabinet"><meta property="og:description" content="${escapeHtml(cluster.hubPrompt)}"><meta property="og:url" content="${absolute(route)}"><meta property="og:image" content="${absolute(primary.src)}"><meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/favicon.ico" sizes="any"><link rel="stylesheet" href="/css/site.css?v=20260831-1"><link rel="stylesheet" href="/css/malaysia.css?v=20260829-1"><link rel="stylesheet" href="${sarawakCss}"><link rel="stylesheet" href="${depthCss}">
  <script src="/js/adsense.js?v=20260826-9" defer></script><script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body data-page="${escapeHtml(cluster.hubSlug)}" data-country="malaysia" data-cluster="malaysia-sarawak" data-depth-family="${escapeHtml(cluster.family)}">
  <a class="skip-link" href="#main-content">Skip to content</a><div id="layout-header"></div><div class="site-shell"><div class="mobile-overlay" data-mobile-overlay aria-hidden="true"></div><aside id="layout-sidebar" class="sidebar" aria-label="TripDistill navigation"></aside>
    <main id="main-content" class="page-content sarawak-guide ${cluster.hubSlug === 'gunung-mulu' ? 'mulu-guide' : 'kuching-guide'}">
      <section class="sr-hero" aria-labelledby="sr-title"><div class="sr-hero-copy"><span class="sr-kicker">Sarawak field cabinet · reviewed 30 August 2026</span><h1 id="sr-title">${escapeHtml(cluster.hubName)} <span>${cluster.hubSlug === 'gunung-mulu' ? 'inside the limestone clock.' : 'from river cabinet to coastal forest.'}</span></h1><p>${escapeHtml(cluster.hubPrompt)}</p><div class="hero-actions"><a class="button primary" href="#area-guides">Choose a chapter</a><a class="button secondary" href="#route">Read the four-day logic</a></div></div><figure><img src="${primary.src}" width="1440" height="960" alt="${escapeHtml(primary.alt)}" fetchpriority="high"><figcaption>${escapeHtml(primary.label)} · ${escapeHtml(primary.license)}</figcaption></figure><div class="sr-seal"><strong>04</strong><span>Sarawak chapters</span></div></section>

      ${hubCards(cluster)}

      <section class="section compact" aria-label="Advertisement"><div class="ad-slot" data-ad-slot><div><strong>Advertisement</strong><span>Responsive AdSense placement reserved</span></div></div></section>

      <section class="sr-section" aria-labelledby="contract-title"><div class="sr-heading"><span>Operating contract</span><h2 id="contract-title">Four places, four different kinds of permission.</h2><p>A city street, museum collection, rehabilitation centre or World Heritage park cannot be visited with one generic “things to do” mindset.</p></div><div class="sr-contract">${cluster.guides.map((guide, index) => `<article><small>0${index + 1} / ${escapeHtml(guide.instrument)}</small><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(guide.decisions[0][1])}</p><strong>${escapeHtml(guide.decisions[2][0])}</strong><span>${escapeHtml(guide.decisions[2][1])}</span></article>`).join('')}</div></section>

      <section class="sr-section" id="route" aria-labelledby="route-title"><div class="sr-heading"><span>Four-chapter route</span><h2 id="route-title">Protect the transfer that makes each day possible.</h2><p>This is a pacing model, not a promise that every activity runs every day. Move or remove a chapter when weather, capacity or ability changes.</p></div><div class="sr-route">${cluster.guides.map((guide, index) => `<a href="/malaysia/${cluster.hubSlug}/${guide.slug}/"><span>Day ${String(index + 1).padStart(2, '0')}</span><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(guide.route[0][2])} ${escapeHtml(guide.route.at(-1)[2])}</p></a>`).join('')}</div></section>

      <section class="sr-section" id="faq" aria-labelledby="faq-title"><div class="sr-heading"><span>Planning answers</span><h2 id="faq-title">${escapeHtml(cluster.hubName)} FAQ</h2></div><div class="faq-list">${faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>

      <section class="section sources" aria-labelledby="sources-title"><h2 id="sources-title">Official sources and photo credits</h2><p>Planning facts and image licenses were reviewed on 30 August 2026. Park capacity, guided departures, trails, river or boat access and weather change; verify directly before travel.</p><ul>${sourcesList(cluster.sources)}${sourceImages.map(imageCredit).join('')}</ul><span class="review-note">Editorial review: 30 August 2026 · Recheck time-sensitive details before booking.</span></section>
    </main></div><div id="layout-footer"></div><script src="/js/main.js?v=20260830-2" defer></script>
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

function injectHubCards(cluster) {
  const file = routeFile(`/malaysia/${cluster.hubSlug}/`);
  let html = fs.readFileSync(file, 'utf8');
  if (!html.includes(depthCss)) html = html.replace('</head>', `  <link rel="stylesheet" href="${depthCss}">\n</head>`);
  if (html.includes(markerStart)) html = replaceMarked(html, markerStart, markerEnd, hubCards(cluster));
  else {
    const main = html.indexOf('<main');
    const hero = html.indexOf('<section', main);
    const heroEnd = html.indexOf('</section>', hero);
    if (main === -1 || hero === -1 || heroEnd === -1) throw new Error(`Cannot find hero insertion point in ${file}`);
    const insertAt = heroEnd + '</section>'.length;
    html = html.slice(0, insertAt) + `\n\n      ${hubCards(cluster)}` + html.slice(insertAt);
  }
  fs.writeFileSync(file, html);
}

function updateCountryHub() {
  const file = routeFile('/malaysia/');
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace('The first twelve cards now open complete guides across the peninsula and Sabah. Sarawak remains a planning brief until each route can support an independently useful page.', 'All fourteen cards now open complete regional guides, and every guide continues into four focused field chapters with its own transport, conduct and official-source checks.');
  for (const [asset, route] of [['malaysia-bako.webp', '/malaysia/kuching-bako/'], ['malaysia-mulu.webp', '/malaysia/gunung-mulu/']]) {
    const cardPattern = new RegExp(`<article class="malaysia-region-card ([^"]+)" data-scene="([^"]+)">(?=[\\s\\S]*?${asset})([\\s\\S]*?)<\\/article>`);
    html = html.replace(cardPattern, (_, classes, scene, inner) => `<a class="malaysia-region-card ${classes} is-live" data-scene="${scene}" href="${route}">${inner.replace('Regional guide expansion brief', 'Open the complete guide →')}</a>`);
  }
  fs.writeFileSync(file, html);
}

function updateSidebar() {
  const file = path.join(root, 'components', 'sidebar.html');
  let html = fs.readFileSync(file, 'utf8');
  if (!html.includes('href="/malaysia/kuching-bako/"')) {
    const anchor = '      <a class="sidebar-link sub" href="/malaysia/semporna-tun-sakaran/" data-nav-key="semporna-tun-sakaran">Semporna &amp; Tun Sakaran</a>';
    const added = `${anchor}\n      <a class="sidebar-link sub" href="/malaysia/kuching-bako/" data-nav-key="kuching-bako">Kuching &amp; Bako</a>\n      <a class="sidebar-link sub" href="/malaysia/gunung-mulu/" data-nav-key="gunung-mulu">Gunung Mulu</a>`;
    if (!html.includes(anchor)) throw new Error('Cannot find Malaysia sidebar anchor');
    html = html.replace(anchor, added);
  }
  const chapters = `${sidebarStart}\n${orderedMalaysiaDepthClusters.map((cluster) => `  <section class="sidebar-section malaysia-depth-chapter" data-malaysia-chapter="${escapeHtml(cluster.hubSlug)}">\n    <h2 class="sidebar-label">${escapeHtml(cluster.hubName)} chapters</h2>\n    <div class="sidebar-links">${cluster.guides.map((guide) => `\n      <a class="sidebar-link" href="/malaysia/${cluster.hubSlug}/${guide.slug}/" data-nav-key="${escapeHtml(guide.slug)}">${escapeHtml(guide.name)}</a>`).join('')}\n    </div>\n  </section>`).join('\n')}\n${sidebarEnd}`;
  if (html.includes(sidebarStart)) html = replaceMarked(html, sidebarStart, sidebarEnd, chapters);
  else {
    const explore = html.indexOf('<h2 class="sidebar-label">Explore</h2>');
    const exploreEnd = html.indexOf('</section>', explore);
    if (explore === -1 || exploreEnd === -1) throw new Error('Cannot find Explore sidebar section');
    const insertAt = exploreEnd + '</section>'.length;
    html = html.slice(0, insertAt) + `\n${chapters}` + html.slice(insertAt);
  }
  fs.writeFileSync(file, html);
}

function updateSearch() {
  const file = path.join(root, 'data', 'search-index.json');
  const index = JSON.parse(fs.readFileSync(file, 'utf8'));
  const generatedUrls = new Set([
    ...malaysiaDepthGuides.map((guide) => guide.url),
    ...malaysiaDepthClusters.filter((cluster) => cluster.newHub).map((cluster) => `/malaysia/${cluster.hubSlug}/`)
  ]);
  const clean = index.filter((item) => !generatedUrls.has(item.url));
  const hubEntries = malaysiaDepthClusters.filter((cluster) => cluster.newHub).map((cluster) => ({
    title: `${cluster.hubName} Travel Guide`,
    url: `/malaysia/${cluster.hubSlug}/`,
    parent: 'Malaysia · Sarawak',
    type: cluster.hubSlug === 'gunung-mulu' ? 'World Heritage cave and rainforest guide' : 'River city, wildlife and coastal park guide',
    summary: cluster.hubPrompt,
    keywords: [cluster.hubName.toLowerCase(), 'sarawak', 'malaysia borneo', ...cluster.guides.map((guide) => guide.name.toLowerCase())]
  }));
  const guideEntries = malaysiaDepthGuides.map((guide) => ({
    title: `${guide.name} Guide`,
    url: guide.url,
    parent: `Malaysia · ${guide.hubName}`,
    type: 'Focused area and field guide',
    summary: guide.summary,
    keywords: [guide.name.toLowerCase(), guide.hubName.toLowerCase(), guide.slug.replaceAll('-', ' '), guide.region.toLowerCase(), 'malaysia travel guide']
  }));
  fs.writeFileSync(file, JSON.stringify([...clean, ...hubEntries, ...guideEntries], null, 2) + '\n');
}

for (const cluster of malaysiaDepthClusters.filter((item) => item.newHub)) {
  const file = routeFile(`/malaysia/${cluster.hubSlug}/`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, sarawakHubPage(cluster));
}

for (const guide of malaysiaDepthGuides) {
  const cluster = malaysiaDepthClusters.find((item) => item.hubSlug === guide.hubSlug);
  const file = routeFile(guide.url);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, childPage(guide, cluster));
}

for (const cluster of malaysiaDepthClusters.filter((item) => !item.newHub)) injectHubCards(cluster);
updateCountryHub();
updateSidebar();
updateSearch();

console.log(`Generated ${malaysiaDepthGuides.length} Malaysia field guides, ${malaysiaDepthClusters.filter((cluster) => cluster.newHub).length} Sarawak hubs, 14 hub directories and synchronized English navigation/search.`);
