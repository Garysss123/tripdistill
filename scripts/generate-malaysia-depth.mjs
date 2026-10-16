import fs from 'node:fs';
import path from 'node:path';
import { malaysiaDepthClusters, malaysiaDepthGuides } from '../data/malaysia-depth-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const depthCss = '/css/malaysia-depth.css?v=20260830-1';
const melakaDepthCss = '/css/malaysia-depth.css?v=20261012-1';
const sarawakCss = '/css/malaysia-sarawak.css?v=20261012-1';
const sempornaCss = '/css/malaysia-sabah.css?v=20261012-1';
const depthCssFor = (hubSlug) => hubSlug === 'melaka' ? melakaDepthCss : depthCss;
const malaysiaCss = (hubSlug) => hubSlug === 'george-town-penang'
  ? '/css/malaysia.css?v=20261008-1'
  : '/css/malaysia.css?v=20260829-1';
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
  if (image.assetType === 'original-planning-diagram') {
    if (image.originalSchematic) {
      return `<li><a href="${escapeHtml(image.source)}" target="_blank" rel="noopener">${escapeHtml(image.label)}</a> — ${escapeHtml(image.creator)}, <a href="${escapeHtml(image.rightsStatusUrl)}" target="_blank" rel="noopener">${escapeHtml(image.rightsStatus)}</a>. ${escapeHtml(image.editNote)}</li>`;
    }
    return `<li><a href="${escapeHtml(image.source)}" target="_blank" rel="noopener">${escapeHtml(image.label)}</a> &#8212; <span>${escapeHtml(image.creator)}</span>. <span>${escapeHtml(image.creditText)}</span> <a href="${escapeHtml(image.rightsStatusUrl)}" target="_blank" rel="noopener">Terms of use</a>.</li>`;
  }
  const attribution = image.attribution || image.creator;
  const attributionEnd = image.attribution ? '.' : ',';
  const license = image.licenseUrl
    ? `<a href="${escapeHtml(image.licenseUrl)}" target="_blank" rel="noopener">${escapeHtml(image.license)}</a>`
    : escapeHtml(image.license);
  const shareAlike = image.licenseUrl && image.license.includes('BY-SA') ? ` The adapted image is shared under ${escapeHtml(image.license)}.` : '';
  return `<li><a href="${escapeHtml(image.source)}" target="_blank" rel="noopener">${escapeHtml(image.label)}</a> &#8212; ${escapeHtml(attribution)}${attributionEnd} ${license}. Resized, center-cropped and converted to WebP; no other material edits.${shareAlike}</li>`;
}

function melakaRouteKey() {
  const stages = [
    'Start at the historic-core public riverfront.',
    'Follow one confirmed public riverbank path.',
    'Cross one public bridge only after confirming it is open today.',
    'Walk Kampung Morten’s public streets; homes and yards are private.'
  ];
  return `<aside class="melaka-route-key" aria-label="Melaka route diagram key"><h3>Read the numbered route</h3><ol>${stages.map((stage, index) => `<li><b aria-hidden="true">${index + 1}</b><span>${escapeHtml(stage)}</span></li>`).join('')}</ol><div class="melaka-route-key-lines"><p><span class="melaka-route-line is-solid" aria-hidden="true"></span><span>Solid route: return along the same confirmed public path.</span></p><p><span class="melaka-route-line is-dashed" aria-hidden="true"></span><span>Dashed route: optional return only if today’s bridge and opposite-bank public path are confirmed open.</span></p></div></aside>`;
}

function addMelakaHubRouteKey(html) {
  const existingKey = /<aside class="melaka-route-key"[\s\S]*?<\/aside>/;
  if (existingKey.test(html)) return html.replace(existingKey, melakaRouteKey());
  const sectionStart = html.indexOf('<section class="sg-section" id="living"');
  const sectionEnd = html.indexOf('</section>', sectionStart);
  if (sectionStart === -1 || sectionEnd === -1) throw new Error('Cannot find Melaka living-neighborhood section for the route key.');
  return html.slice(0, sectionEnd) + `\n${melakaRouteKey()}\n` + html.slice(sectionEnd);
}

function diagramKey(image) {
  if (!image.legend?.items?.length) return '';
  const items = image.legend.items.map((item, index) => `<li><span class="md-diagram-legend-number" aria-hidden="true">${index + 1}</span><span>${escapeHtml(item)}</span></li>`).join('');
  const returnText = image.legend.returnText
    ? `<p><strong>Return arrow:</strong> ${escapeHtml(image.legend.returnText)}</p>`
    : '';
  return `<aside class="md-diagram-legend" aria-labelledby="md-diagram-legend-title"><h2 id="md-diagram-legend-title">Diagram key</h2><ol>${items}</ol>${returnText}<p><strong>Conditions:</strong> ${escapeHtml(image.legend.conditionsText)}</p></aside>`;
}

function relatedCards(cluster, currentSlug = '', showImages = true) {
  return cluster.guides.filter((guide) => guide.slug !== currentSlug).map((guide) => {
    const imageLine = showImages ? `            <img src="${guide.image.src}" width="1440" height="960" loading="lazy" decoding="async" alt="${escapeHtml(guide.image.alt)}">\n` : '';
    return `
          <a class="md-related-card" href="/malaysia/${cluster.hubSlug}/${guide.slug}/">
${imageLine}            <span><small>Chapter ${String(cluster.guides.indexOf(guide) + 1).padStart(2, '0')}</small><strong>${escapeHtml(guide.name)}</strong><em>${escapeHtml(guide.motif)}</em></span>
          </a>`;
  }).join('');
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
        dateModified: guide.reviewedOnIso || '2026-08-30',
        image: absolute(guide.image.src),
        about: { '@type': 'TouristDestination', name: guide.name, containedInPlace: { '@type': 'Country', name: 'Malaysia' } },
        publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' }
      },
      ...(guide.image.assetType === 'original-planning-diagram' ? [{
        '@type': 'ImageObject',
        '@id': `${absolute(guide.image.src)}#artwork`,
        contentUrl: absolute(guide.image.src),
        name: guide.image.label,
        description: guide.image.alt,
        caption: guide.image.caption,
        creator: { '@type': 'Organization', name: guide.image.creator },
        creditText: guide.image.creditText,
        usageInfo: guide.image.rightsStatusUrl
      }] : []),
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
  const sources = [...new Map([...cluster.sources, ...(guide.sources || [])].map(([href, label]) => [href, [href, label]])).values()];
  const originalDiagram = guide.image.assetType === 'original-planning-diagram';
  const melakaDiagram = guide.image.src === '/assets/images/malaysia-melaka-two-bank-route.svg';
  const sourceHeading = guide.image.originalSchematic
    ? 'Official sources and image provenance'
    : originalDiagram ? 'Official sources and original diagram' : cluster.explicitRelatedPhotoCredits ? 'Official sources and photo credits' : 'Official sources and photo credit';
  const sourceIntro = guide.image.originalSchematic
    ? `Planning facts and image provenance were reviewed on ${escapeHtml(guide.reviewedOn || '30 August 2026')}. Schedules, access, permits, weather and operator terms change; verify directly before travel.`
    : originalDiagram
    ? 'Planning facts and public route details were reviewed on 12 October 2026. The original diagram is a non-scale planning schematic, not navigation; confirm the public path, bridge access and return route before walking.'
    : cluster.explicitRelatedPhotoCredits
    ? `Planning facts and photo-source declarations were checked on ${escapeHtml(guide.reviewedOn || '30 August 2026')}. Schedules, access, permits, weather and operator terms change; verify directly before travel. Image license information below reflects the linked source pages, not independent legal clearance.`
    : `Planning facts and the image license were reviewed on ${escapeHtml(guide.reviewedOn || '30 August 2026')}. Schedules, access, permits, weather and operator terms change; verify directly before travel.`;
  const relatedImageCredits = (originalDiagram || cluster.explicitRelatedPhotoCredits) && guide.relatedImages !== false
    ? [...new Map(cluster.guides.filter((related) => related.slug !== guide.slug && related.image.src !== guide.image.src && related.image.assetType !== 'original-planning-diagram').map((related) => [related.image.src, related.image])).values()].map(imageCredit).join('')
    : '';
  const relatedDiagramKey = cluster.hubSlug === 'melaka' && !originalDiagram
    ? melakaRouteKey()
    : '';
  const figureCaption = guide.image.caption || `${guide.image.label} · ${guide.image.license}`;
  const figureDiagramKey = melakaDiagram ? melakaRouteKey() : diagramKey(guide.image);
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
  <meta property="og:type" content="article"><meta property="og:site_name" content="TripDistill"><meta property="og:title" content="${escapeHtml(guide.name)} — ${escapeHtml(guide.motif)}"><meta property="og:description" content="${escapeHtml(guide.summary)}"><meta property="og:url" content="${absolute(guide.url)}"><meta property="og:image" content="${absolute(guide.image.src)}"><meta property="og:image:alt" content="${escapeHtml(guide.image.alt)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image:alt" content="${escapeHtml(guide.image.alt)}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/favicon.ico" sizes="any">
  <link rel="stylesheet" href="/css/site.css?v=20261016-1"><link rel="stylesheet" href="${malaysiaCss(guide.hubSlug)}">${guide.hubSlug === 'semporna-tun-sakaran' ? `<link rel="stylesheet" href="${sempornaCss}">` : ''}<link rel="stylesheet" href="${depthCssFor(guide.hubSlug)}">
  <script src="/js/adsense.js?v=20260826-9" defer></script>
  <script type="application/ld+json">${JSON.stringify(guideSchema(guide))}</script>
</head>
<body data-page="${escapeHtml(guide.slug)}" data-parent-page="${escapeHtml(guide.hubSlug)}" data-country="malaysia" data-region="${escapeHtml(guide.hubSlug)}" data-depth-family="${escapeHtml(guide.family)}" data-depth-instrument="${escapeHtml(guide.instrument)}">
  <a class="skip-link" href="#main-content">Skip to content</a><div id="layout-header"></div>
  <div class="site-shell"><div class="mobile-overlay" data-mobile-overlay aria-hidden="true"></div><aside id="layout-sidebar" class="sidebar" aria-label="TripDistill navigation"></aside>
    <main id="main-content" class="page-content md-guide">
      <section class="md-hero" aria-labelledby="md-title">
        <div class="md-hero-copy"><nav class="md-breadcrumb" aria-label="Breadcrumb"><a href="/malaysia/">Malaysia</a><span>/</span><a href="/malaysia/${cluster.hubSlug}/">${escapeHtml(cluster.hubName)}</a><span>/</span><strong>${escapeHtml(guide.name)}</strong></nav><span class="md-kicker">${escapeHtml(guide.chapterLabelRegion || guide.region)} field chapter ${String(guide.chapter).padStart(2, '0')} · reviewed ${escapeHtml(guide.reviewedOn || '30 August 2026')}</span><h1 id="md-title">${escapeHtml(guide.name)} <span>${escapeHtml(guide.motif)}.</span></h1><p>${escapeHtml(guide.summary)}</p><div class="hero-actions"><a class="button primary" href="#route">Follow the route</a><a class="button secondary" href="#checks">Check the weak points</a></div></div>
        <figure class="md-hero-image"><img src="${guide.image.src}" width="1440" height="960" alt="${escapeHtml(guide.image.alt)}" fetchpriority="high"><figcaption>${escapeHtml(figureCaption)}</figcaption></figure>
        <div class="md-instrument" aria-hidden="true"><span>${escapeHtml(guide.instrument)}</span><strong>${String(guide.chapter).padStart(2, '0')}</strong><em>${escapeHtml(guide.motif)}</em></div>
      </section>

${figureDiagramKey ? `\n      ${figureDiagramKey}` : ''}

      <section class="md-decision-strip" aria-label="Three planning decisions">${decisions}</section>

      <section class="md-section md-orientation" aria-labelledby="orientation-title"><div><span class="md-section-label">Read the place</span><h2 id="orientation-title">One chapter, with its edges left visible.</h2><p class="md-lead">${escapeHtml(guide.lead)}</p></div><aside><small>Orientation note</small><p>${escapeHtml(guide.orientation)}</p></aside></section>

      ${guide.planningNotes ? `<section class="md-section md-orientation" aria-labelledby="planning-title"><div><span class="md-section-label">Stay, transfer and season plan</span><h2 id="planning-title">Choose the nights that protect the route.</h2><p class="md-lead">${escapeHtml(guide.planningNotes)}</p></div><aside><small>Flexible fallback</small><p>${escapeHtml(guide.weatherFallback)}</p></aside></section>` : ''}

      <section class="section compact" aria-label="Advertisement"><div class="ad-slot" data-ad-slot><div><strong>Advertisement</strong><span>Responsive AdSense placement reserved</span></div></div></section>

      <section class="md-section" id="route" aria-labelledby="route-title"><div class="md-section-head"><div><span class="md-section-label">Four-stage field route</span><h2 id="route-title">Keep the sequence legible.</h2></div><p>${escapeHtml(guide.routeLead || 'Use the stops below as handoffs, not a timed march; slow down when access or conditions change.')}</p></div><div class="md-route">${route}</div></section>

      <section class="md-section" id="checks" aria-labelledby="checks-title"><div class="md-section-head"><div><span class="md-section-label">Before committing the day</span><h2 id="checks-title">Three weak points to solve.</h2></div><p>These checks change faster than the page. Reconfirm them with the listed official source and the actual operator close to travel.</p></div><div class="md-check-grid">${checks}</div></section>

      <section class="md-section md-faq" id="faq" aria-labelledby="faq-title"><div class="md-section-head"><div><span class="md-section-label">Planning answers</span><h2 id="faq-title">${escapeHtml(guide.name)} FAQ</h2></div></div><div class="faq-list">${faq}</div></section>

      <section class="md-section" aria-labelledby="related-title"><div class="md-section-head"><div><span class="md-section-label">Continue within ${escapeHtml(cluster.hubName)}</span><h2 id="related-title">Choose the next chapter by purpose.</h2></div><p>Return to the regional guide before joining distant branches into one day.</p></div><div class="md-related">${relatedCards(cluster, guide.slug, guide.relatedImages !== false)}</div>${relatedDiagramKey}<p class="md-back"><a href="/malaysia/${cluster.hubSlug}/">← Return to the complete ${escapeHtml(cluster.hubName)} guide</a></p></section>

      <section class="section sources" aria-labelledby="sources-title"><h2 id="sources-title">${escapeHtml(sourceHeading)}</h2><p>${escapeHtml(sourceIntro)}</p><ul>${sourcesList(sources)}${imageCredit(guide.image)}${relatedImageCredits}</ul><span class="review-note">Editorial review: ${escapeHtml(guide.reviewedOn || '30 August 2026')} · Recheck time-sensitive details before booking.</span></section>
    </main>
  </div><div id="layout-footer"></div><script src="/js/main.js?v=20261016-1" defer></script>
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

function kuchingHubPlanning(cluster) {
  const plan = cluster.hubPlanning;
  if (!plan) return '';
  const options = plan.plans.map((item) => `<article class="kuching-plan-card"><span>${escapeHtml(item.title)}</span><p>${escapeHtml(item.fit)}</p><ol>${item.days.map(([label, detail]) => `<li><strong>${escapeHtml(label)}</strong><p>${escapeHtml(detail)}</p></li>`).join('')}</ol></article>`).join('');
  const walk = plan.walk.stops.map(([name, detail], index) => `<li><b aria-hidden="true">${String(index + 1).padStart(2, '0')}</b><strong>${escapeHtml(name)}</strong><p>${escapeHtml(detail)}</p></li>`).join('');
  const planClass = cluster.hubSlug === 'gunung-mulu' ? 'kuching-plan mulu-plan' : 'kuching-plan';
  const heading = plan.heading || `${cluster.hubName} works best from one city base.`;
  const walkLabel = cluster.hubSlug === 'gunung-mulu' ? 'Walking and transfer sequence' : 'Downtown walk';
  return `<section class="sr-section ${planClass}" id="route" aria-labelledby="route-title"><div class="sr-heading"><span>Nights, base and transfer logic</span><h2 id="route-title">${escapeHtml(heading)}</h2><p>${escapeHtml(plan.intro)}</p></div><aside class="kuching-base-note"><strong>Where to sleep</strong><p>${escapeHtml(plan.base)}</p></aside><div class="kuching-plan-grid">${options}</div><div class="kuching-walk-block"><div class="sr-heading"><span>${escapeHtml(walkLabel)}</span><h2>${escapeHtml(plan.walk.title)}</h2><p>${escapeHtml(plan.walk.intro)}</p></div><ol class="kuching-walk-chain">${walk}</ol></div><div class="kuching-season-grid"><article><span>Season and access</span><p>${escapeHtml(plan.season)}</p></article><article><span>Reserve before you go</span><p>${escapeHtml(plan.booking)}</p></article><article><span>When a link fails</span><p>${escapeHtml(plan.fallback)}</p></article></div></section>`;
}

function sarawakHubPage(cluster) {
  const route = `/malaysia/${cluster.hubSlug}/`;
  const primary = cluster.guides[0].image;
  const reviewedOn = cluster.reviewedOn || '30 August 2026';
  const description = ensureMetaDescription(cluster.hubPlanning?.intro || `Plan ${cluster.hubName} through four distinct Sarawak chapters with practical transport, access, weather and responsible-visit guidance.`);
  const faq = cluster.hubPlanning?.faq || cluster.guides.map((guide) => [guide.faq[0][0], guide.faq[0][1]]);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'TravelGuide', '@id': `${absolute(route)}#guide`, name: `${cluster.hubName} Travel Guide`, description, url: absolute(route), inLanguage: 'en', dateModified: cluster.reviewedOnIso || '2026-08-30', image: absolute(primary.src), about: { '@type': 'TouristDestination', name: cluster.hubName }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
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
  <link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/favicon.ico" sizes="any"><link rel="stylesheet" href="/css/site.css?v=20261016-1"><link rel="stylesheet" href="/css/malaysia.css?v=20260829-1"><link rel="stylesheet" href="${sarawakCss}"><link rel="stylesheet" href="${depthCss}">
  <script src="/js/adsense.js?v=20260826-9" defer></script><script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body data-page="${escapeHtml(cluster.hubSlug)}" data-country="malaysia" data-cluster="malaysia-sarawak" data-depth-family="${escapeHtml(cluster.family)}">
  <a class="skip-link" href="#main-content">Skip to content</a><div id="layout-header"></div><div class="site-shell"><div class="mobile-overlay" data-mobile-overlay aria-hidden="true"></div><aside id="layout-sidebar" class="sidebar" aria-label="TripDistill navigation"></aside>
    <main id="main-content" class="page-content sarawak-guide ${cluster.hubSlug === 'gunung-mulu' ? 'mulu-guide' : 'kuching-guide'}">
      <section class="sr-hero" aria-labelledby="sr-title"><div class="sr-hero-copy"><span class="sr-kicker">Sarawak field cabinet · reviewed ${escapeHtml(reviewedOn)}</span><h1 id="sr-title">${escapeHtml(cluster.hubName)} <span>${cluster.hubSlug === 'gunung-mulu' ? 'inside the limestone clock.' : 'from river cabinet to coastal forest.'}</span></h1><p>${escapeHtml(cluster.hubPrompt)}</p><div class="hero-actions"><a class="button primary" href="#area-guides">Choose a chapter</a><a class="button secondary" href="#route">${cluster.hubPlanning ? 'Plan the nights and field days' : 'Read the four-day logic'}</a></div></div><figure><img src="${primary.src}" width="1440" height="960" alt="${escapeHtml(primary.alt)}" fetchpriority="high"><figcaption>${escapeHtml(primary.label)} · ${escapeHtml(primary.license)}</figcaption></figure><div class="sr-seal"><strong>04</strong><span>Sarawak chapters</span></div></section>

      ${hubCards(cluster)}

      <section class="section compact" aria-label="Advertisement"><div class="ad-slot" data-ad-slot><div><strong>Advertisement</strong><span>Responsive AdSense placement reserved</span></div></div></section>

      <section class="sr-section" aria-labelledby="contract-title"><div class="sr-heading"><span>Operating contract</span><h2 id="contract-title">Four places, four different kinds of permission.</h2><p>A city street, museum collection, rehabilitation centre or World Heritage park cannot be visited with one generic “things to do” mindset.</p></div><div class="sr-contract">${cluster.guides.map((guide, index) => `<article><small>0${index + 1} / ${escapeHtml(guide.instrument)}</small><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(guide.decisions[0][1])}</p><strong>${escapeHtml(guide.decisions[2][0])}</strong><span>${escapeHtml(guide.decisions[2][1])}</span></article>`).join('')}</div></section>

      ${cluster.hubPlanning ? kuchingHubPlanning(cluster) : `<section class="sr-section" id="route" aria-labelledby="route-title"><div class="sr-heading"><span>Four-chapter route</span><h2 id="route-title">Protect the transfer that makes each day possible.</h2><p>This is a pacing model, not a promise that every activity runs every day. Move or remove a chapter when weather, capacity or ability changes.</p></div><div class="sr-route">${cluster.guides.map((guide, index) => `<a href="/malaysia/${cluster.hubSlug}/${guide.slug}/"><span>Day ${String(index + 1).padStart(2, '0')}</span><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(guide.route[0][2])} ${escapeHtml(guide.route.at(-1)[2])}</p></a>`).join('')}</div></section>`}

      <section class="sr-section" id="faq" aria-labelledby="faq-title"><div class="sr-heading"><span>Planning answers</span><h2 id="faq-title">${escapeHtml(cluster.hubName)} FAQ</h2></div><div class="faq-list">${faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>

      <section class="section sources" aria-labelledby="sources-title"><h2 id="sources-title">Official sources and photo credits</h2><p>Planning facts and linked photo source/license declarations were checked on ${escapeHtml(reviewedOn)}. Opening, capacity, tickets, bus and boat departures, trails, river access and weather change; verify directly before travel. Photo-page declarations are recorded here and are not independent legal clearance.</p><ul>${sourcesList(cluster.sources)}${sourceImages.map(imageCredit).join('')}</ul><span class="review-note">Editorial review: ${escapeHtml(reviewedOn)} · Recheck time-sensitive details before booking.</span></section>
    </main></div><div id="layout-footer"></div><script src="/js/main.js?v=20261016-1" defer></script>
</body>
</html>
`;
}

function sempornaHubPage(cluster) {
  const route = `/malaysia/${cluster.hubSlug}/`;
  const plan = cluster.hubPlanning;
  const primary = imageForSempornaHub(cluster);
  const reviewedOn = cluster.reviewedOn || '30 August 2026';
  const description = ensureMetaDescription(cluster.hubPrompt);
  const faq = plan.faq;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'TravelGuide', '@id': `${absolute(route)}#guide`, name: `${cluster.hubName} Travel Guide`, description, url: absolute(route), inLanguage: 'en', dateModified: cluster.reviewedOnIso || '2026-08-30', image: absolute(primary.src), about: { '@type': 'TouristDestination', name: cluster.hubName }, publisher: { '@type': 'Organization', name: 'TripDistill', url: 'https://tripdistill.com/' } },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tripdistill.com/' }, { '@type': 'ListItem', position: 2, name: 'Malaysia', item: 'https://tripdistill.com/malaysia/' }, { '@type': 'ListItem', position: 3, name: cluster.hubName, item: absolute(route) }] },
      { '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }
    ]
  };
  const nightCards = plan.nights.map((item) => `<article class="sp-night-card"><span>${escapeHtml(item.title)}</span><p>${escapeHtml(item.fit)}</p><ol>${item.days.map(([label, detail]) => `<li><strong>${escapeHtml(label)}</strong><p>${escapeHtml(detail)}</p></li>`).join('')}</ol></article>`).join('');
  const walkingZones = plan.walks.zones.map(([name, detail], index) => `<article><b aria-hidden="true">0${index + 1}</b><h3>${escapeHtml(name)}</h3><p>${escapeHtml(detail)}</p></article>`).join('');
  const chapterImages = [...new Map(cluster.guides.map((guide) => [guide.image.src, guide.image])).values()];
  const sourceImages = [...new Map([primary, ...chapterImages].map((image) => [image.src, image])).values()];
  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(cluster.hubName)} Guide | TripDistill</title><meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${absolute(route)}">${hreflang(route)}
  <meta name="theme-color" content="#063b4b"><meta property="og:type" content="article"><meta property="og:site_name" content="TripDistill"><meta property="og:title" content="${escapeHtml(cluster.hubName)} — reef, permit and transfer field guide"><meta property="og:description" content="${escapeHtml(cluster.hubPrompt)}"><meta property="og:url" content="${absolute(route)}"><meta property="og:image" content="${absolute(primary.src)}"><meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/favicon.ico" sizes="any"><link rel="stylesheet" href="/css/site.css?v=20261016-1"><link rel="stylesheet" href="/css/malaysia.css?v=20260829-1"><link rel="stylesheet" href="${sempornaCss}"><link rel="stylesheet" href="${depthCss}">
  <script src="/js/adsense.js?v=20260826-9" defer></script><script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body data-page="${escapeHtml(cluster.hubSlug)}" data-country="malaysia" data-cluster="malaysia-sabah" data-depth-family="${escapeHtml(cluster.family)}">
  <a class="skip-link" href="#main-content">Skip to content</a><div id="layout-header"></div><div class="site-shell"><div class="mobile-overlay" data-mobile-overlay aria-hidden="true"></div><aside id="layout-sidebar" class="sidebar" aria-label="TripDistill navigation"></aside>
    <main id="main-content" class="page-content semporna-guide sp-region">
      <section class="sp-hero" aria-labelledby="sp-title"><img src="${primary.src}" width="1440" height="960" alt="${escapeHtml(primary.alt)}" fetchpriority="high"><div class="sp-hero-copy"><span class="sp-kicker">Sabah reef field guide · reviewed ${escapeHtml(reviewedOn)}</span><h1 id="sp-title">Semporna <span>& Tun Sakaran.</span></h1><p>${escapeHtml(cluster.hubPrompt)}</p><div class="hero-actions"><a class="button primary" href="#chapters">Choose a field chapter</a><a class="button secondary" href="#nights">Plan nights and transfers</a></div></div><div class="sp-permit-stamp">Four routes<br>one verified chain</div></section>

      <section class="sp-region-intro"><div><span>Base before boat</span><h2>One town room can make four different sea days easier to read.</h2><p>${escapeHtml(plan.intro)}</p></div><aside><strong>Where to sleep</strong><p>${escapeHtml(plan.base)}</p></aside></section>

      <section class="sp-region-section" aria-labelledby="sp-chain-title"><div class="sp-region-heading"><span>Named handoffs</span><h2 id="sp-chain-title">Keep the full road-to-boat contract visible.</h2><p>${escapeHtml(plan.transport)}</p></div><ol class="sp-region-chain"><li><b>01</b><strong>Tawau Airport · TWU</strong><span>Pre-booked road leg to the actual town address</span></li><li><b>02</b><strong>Semporna town</strong><span>Licensed operator’s exact desk and reporting point</span></li><li><b>03</b><strong>Named jetty</strong><span>Confirmed boat, park/island scope and passenger list</span></li><li><b>04</b><strong>Same return chain</strong><span>Boat landing → agreed road pickup → town or TWU</span></li></ol><p class="sp-region-note">Sabah Tourism describes the Tawau Airport approach and mentions a Kota Kinabalu coach, but no exact-date schedule, fare or connection time is promised here. Verify every leg with its provider.</p></section>

      <section class="sp-region-section" id="nights" aria-labelledby="sp-nights-title"><div class="sp-region-heading"><span>Overnight base and pace</span><h2 id="sp-nights-title">Choose nights that can absorb a changed boat day.</h2></div><div class="sp-night-grid">${nightCards}</div></section>

      <section class="sp-region-section" aria-labelledby="sp-walk-title"><div class="sp-region-heading"><span>Walking zones and permission</span><h2 id="sp-walk-title">Each walk begins with the right host or landing.</h2><p>${escapeHtml(plan.walks.intro)}</p></div><div class="sp-zone-grid">${walkingZones}</div></section>

      <section class="sp-region-section sp-season-grid" aria-label="Season, booking and fallback"><article><span>Season and access</span><p>${escapeHtml(plan.season)}</p></article><article><span>Reserve before you go</span><p>${escapeHtml(plan.booking)}</p></article><article><span>When a link fails</span><p>${escapeHtml(plan.fallback)}</p></article></section>

      <section class="sp-region-section" id="chapters" aria-labelledby="sp-chapters-title"><div class="sp-region-heading"><span>Four existing field chapters</span><h2 id="sp-chapters-title">Book each chapter on its own terms.</h2><p>${escapeHtml(cluster.hubPrompt)}</p></div><div class="md-hub-grid">${cluster.guides.map((guide, index) => `<a class="md-hub-card" href="/malaysia/${cluster.hubSlug}/${guide.slug}/" data-instrument="${escapeHtml(guide.instrument)}"><img src="${guide.image.src}" width="1440" height="960" loading="lazy" decoding="async" alt="${escapeHtml(guide.image.alt)}"><span class="md-hub-number">0${index + 1}</span><div><small>${escapeHtml(guide.motif)}</small><h3>${escapeHtml(guide.name)}</h3><p>${escapeHtml(guide.summary)}</p><strong>Open the field guide →</strong></div></a>`).join('')}</div></section>

      <section class="sp-region-section" id="faq" aria-labelledby="sp-faq-title"><div class="sp-region-heading"><span>Planning answers</span><h2 id="sp-faq-title">Semporna & Tun Sakaran FAQ</h2></div><div class="faq-list">${faq.map(([question, answer]) => `<details><summary>${escapeHtml(question)}</summary><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></details>`).join('')}</div></section>

      <section class="section sources" aria-labelledby="sources-title"><h2 id="sources-title">Official sources and image credits</h2><p>Planning details and linked image-source declarations were checked on ${escapeHtml(reviewedOn)}. Boat operations, permits, trail access, prices, timetables, weather and openings change. The 2025 Sipadan and 2022 Kapalai page claims are dated and require direct rechecking. Commons declarations are recorded, not independent legal clearance.</p><ul>${sourcesList(cluster.sources)}${sourceImages.map(imageCredit).join('')}</ul><span class="review-note">Editorial review: ${escapeHtml(reviewedOn)} · Recheck time-sensitive details before booking.</span></section>
    </main></div><div id="layout-footer"></div><script src="/js/main.js?v=20261016-1" defer></script>
</body>
</html>
`;
}

function imageForSempornaHub(cluster) {
  return cluster.guides.find((guide) => guide.slug === 'bohey-dulang-bodgaya')?.image || cluster.guides[0].image;
}

function replaceMarked(html, start, end, replacement) {
  const startAt = html.indexOf(start);
  if (startAt === -1) return html;
  const endAt = html.indexOf(end, startAt);
  if (endAt === -1) throw new Error(`Found ${start} without ${end}`);
  return html.slice(0, startAt) + replacement + html.slice(endAt + end.length);
}

function refreshKualaLumpurHubMetadata(html, cluster) {
  const schemaPattern = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/;
  const match = html.match(schemaPattern);
  if (!match) throw new Error('Cannot find Kuala Lumpur hub JSON-LD.');
  const schema = JSON.parse(match[1]);
  for (const item of schema['@graph'] || []) {
    if (item['@type'] === 'TravelGuide') {
      item.dateModified = cluster.reviewedOnIso;
      item.description = cluster.hubPrompt;
    }
    if (item['@type'] === 'FAQPage' && cluster.hubFaq) {
      item.mainEntity = cluster.hubFaq.map(([question, answer]) => ({
        '@type': 'Question', name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer }
      }));
    }
  }
  return html.replace(match[0], `<script type="application/ld+json">\n  ${JSON.stringify(schema)}\n  </script>`)
    .replaceAll('29 August 2026', cluster.reviewedOn || '12 October 2026');
}

function injectHubCards(cluster) {
  const file = routeFile(`/malaysia/${cluster.hubSlug}/`);
  let html = fs.readFileSync(file, 'utf8');
  const clusterDepthCss = depthCssFor(cluster.hubSlug);
  if (cluster.hubSlug === 'george-town-penang') {
    html = html.replace('/css/malaysia.css?v=20260829-1', malaysiaCss(cluster.hubSlug));
    html = html.replace(`  <link rel="stylesheet" href="${clusterDepthCss}">\n`, '');
  } else {
    html = html.replace(`href="${depthCss}"`, `href="${clusterDepthCss}"`);
    if (!html.includes(clusterDepthCss)) html = html.replace('</head>', `  <link rel="stylesheet" href="${clusterDepthCss}">\n</head>`);
  }
  if (cluster.hubSlug === 'melaka') html = addMelakaHubRouteKey(html);
  if (html.includes(markerStart)) html = replaceMarked(html, markerStart, markerEnd, hubCards(cluster));
  else {
    const main = html.indexOf('<main');
    const hero = html.indexOf('<section', main);
    const heroEnd = html.indexOf('</section>', hero);
    if (main === -1 || hero === -1 || heroEnd === -1) throw new Error(`Cannot find hero insertion point in ${file}`);
    const insertAt = heroEnd + '</section>'.length;
    html = html.slice(0, insertAt) + `\n\n      ${hubCards(cluster)}` + html.slice(insertAt);
  }
  if (cluster.hubSlug === 'kuala-lumpur-putrajaya') html = refreshKualaLumpurHubMetadata(html, cluster);
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

function updateSearch(targetGuides = malaysiaDepthGuides, targetCluster = null) {
  const file = path.join(root, 'data', 'search-index.json');
  const index = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (targetCluster) {
    const hubUrl = '/malaysia/' + targetCluster.hubSlug + '/';
    const hub = index.find((item) => item.url === hubUrl);
    if (!hub) throw new Error('Missing existing hub search record for ' + targetCluster.hubSlug);
    hub.summary = targetCluster.hubPrompt;
    if (targetCluster.searchKeywords) hub.keywords = targetCluster.searchKeywords.map((keyword) => keyword.toLowerCase());
    for (const guide of targetGuides) {
      const entry = index.find((item) => item.url === guide.url);
      if (!entry) throw new Error('Missing existing search record for ' + guide.url);
      entry.title = guide.name + ' Guide';
      entry.parent = (targetCluster?.hubSlug === 'cameron-highlands' ? 'Malaysia · ' : 'Malaysia - ') + guide.hubName;
      entry.type = 'Focused area and field guide';
      entry.summary = guide.summary;
      entry.keywords = guide.searchKeywords?.map((keyword) => keyword.toLowerCase())
        ?? [guide.name.toLowerCase(), guide.hubName.toLowerCase(), guide.slug.replaceAll('-', ' '), guide.region.toLowerCase(), 'malaysia travel guide'];
    }
    fs.writeFileSync(file, JSON.stringify(index, null, 2) + '\n');
    return;
  }
  const generatedUrls = new Set([
    ...targetGuides.map((guide) => guide.url),
    ...malaysiaDepthClusters.filter((cluster) => cluster.newHub).map((cluster) => '/malaysia/' + cluster.hubSlug + '/')
  ]);
  const clean = index.filter((item) => !generatedUrls.has(item.url));
  const hubEntries = malaysiaDepthClusters.filter((cluster) => cluster.newHub).map((cluster) => ({
    title: cluster.hubName + ' Travel Guide',
    url: '/malaysia/' + cluster.hubSlug + '/',
    parent: 'Malaysia - Sarawak',
    type: cluster.hubSlug === 'gunung-mulu' ? 'World Heritage cave and rainforest guide' : 'River city, wildlife and coastal park guide',
    summary: cluster.hubPrompt,
    keywords: [cluster.hubName.toLowerCase(), 'sarawak', 'malaysia borneo', ...cluster.guides.map((guide) => guide.name.toLowerCase())]
  }));
  const guideEntries = targetGuides.map((guide) => ({
    title: guide.name + ' Guide',
    url: guide.url,
    parent: 'Malaysia - ' + guide.hubName,
    type: 'Focused area and field guide',
    summary: guide.summary,
    keywords: [guide.name.toLowerCase(), guide.hubName.toLowerCase(), guide.slug.replaceAll('-', ' '), guide.region.toLowerCase(), 'malaysia travel guide']
  }));
  fs.writeFileSync(file, JSON.stringify([...clean, ...hubEntries, ...guideEntries], null, 2) + '\n');
}

const requestedClusterSlug = process.argv.find((argument) => argument.startsWith('--cluster='))?.slice('--cluster='.length);
if (requestedClusterSlug) {
  const boundedGuideLists = {
    'kuala-lumpur-putrajaya': ['merdeka-chinatown', 'klcc-bukit-bintang', 'batu-caves', 'putrajaya-civic-core'],
    'george-town-penang': ['armenian-street-core-zone', 'weld-quay-clan-jetties', 'penang-hill-air-itam'],
    'cameron-highlands': ['tanah-rata-trails', 'brinchang-kea-farm', 'mossy-forest-gunung-brinchang'],
    'langkawi': ['pantai-cenang-tengah', 'machinchang-skycab', 'kilim-geoforest'],
    'kota-kinabalu-tunku-abdul-rahman': ['gaya-street-waterfront', 'tanjung-aru-museum', 'manukan-mamutik', 'sapi-gaya-islands'],
    melaka: ['dutch-square-st-pauls', 'jonker-harmony-street', 'melaka-river-kampung-morten', 'bandar-hilir-portuguese-settlement'],
    'gunung-mulu': ['deer-lang-caves', 'clearwater-wind-caves', 'pinnacles-expedition', 'canopy-night-walks'],
    'taman-negara': ['kuala-tahan-park-headquarters', 'canopy-bukit-teresek', 'tahan-river-lata-berkoh', 'merapoh-sungai-relau'],
    'sandakan-kinabatangan': ['sandakan-heritage-waterfront', 'sepilok-conservation-centres', 'sukau-kinabatangan', 'gomantong-batu-puteh'],
    'kuching-bako': ['kuching-waterfront-old-courthouse', 'borneo-cultures-museum', 'semenggoh-wildlife-centre', 'bako-national-park'],
    'semporna-tun-sakaran': ['semporna-jetty-operator', 'bohey-dulang-bodgaya', 'mabul-kapalai', 'sipadan-permit-day'],
    'perhentian-redang': ['kuala-besut-transfer', 'perhentian-kecil', 'perhentian-besar', 'redang-merang-transfer'],
    'kinabalu-park-kundasang': ['park-headquarters-botanical-garden', 'mount-kinabalu-summit', 'kundasang-ranau', 'poring-hot-springs']
  };
  const reviewedGuideSlugs = boundedGuideLists[requestedClusterSlug];
  if (!reviewedGuideSlugs) throw new Error('Bounded generation is enabled only for reviewed Malaysia source clusters listed in boundedGuideLists.');
  const cluster = malaysiaDepthClusters.find((item) => item.hubSlug === requestedClusterSlug);
  const reviewedGuideSlugSet = new Set(reviewedGuideSlugs);
  const guides = malaysiaDepthGuides.filter((guide) => guide.hubSlug === requestedClusterSlug && reviewedGuideSlugSet.has(guide.slug));
  if (!cluster || guides.length !== reviewedGuideSlugSet.size) throw new Error(`${requestedClusterSlug} bounded route list does not match its reviewed child guides.`);
  for (const guide of guides) {
    const page = routeFile(guide.url);
    fs.mkdirSync(path.dirname(page), { recursive: true });
    fs.writeFileSync(page, childPage(guide, cluster));
  }
  if (cluster.hubSlug === 'kuching-bako' || cluster.hubSlug === 'gunung-mulu') {
    const hubFile = routeFile(`/malaysia/${cluster.hubSlug}/`);
    fs.mkdirSync(path.dirname(hubFile), { recursive: true });
    fs.writeFileSync(hubFile, sarawakHubPage(cluster));
  } else if (cluster.hubSlug === 'semporna-tun-sakaran') {
    const hubFile = routeFile(`/malaysia/${cluster.hubSlug}/`);
    fs.mkdirSync(path.dirname(hubFile), { recursive: true });
    fs.writeFileSync(hubFile, sempornaHubPage(cluster));
  } else {
    injectHubCards(cluster);
  }
  updateSearch(guides, cluster);
  console.log(`Generated the ${cluster.hubName} hub and ${guides.length} reviewed child guides only; country hub, sidebar and other Malaysian routes were not regenerated.`);
} else {
  for (const cluster of malaysiaDepthClusters.filter((item) => item.newHub)) {
    const file = routeFile('/malaysia/' + cluster.hubSlug + '/');
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, sarawakHubPage(cluster));
  }

  for (const guide of malaysiaDepthGuides) {
    const cluster = malaysiaDepthClusters.find((item) => item.hubSlug === guide.hubSlug);
    const file = routeFile(guide.url);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, childPage(guide, cluster));
  }

  for (const cluster of malaysiaDepthClusters.filter((item) => !item.newHub && item.hubSlug !== 'semporna-tun-sakaran')) injectHubCards(cluster);
  const semporna = malaysiaDepthClusters.find((item) => item.hubSlug === 'semporna-tun-sakaran');
  if (semporna) fs.writeFileSync(routeFile(`/malaysia/${semporna.hubSlug}/`), sempornaHubPage(semporna));
  updateCountryHub();
  updateSidebar();
  updateSearch();
  console.log('Generated ' + malaysiaDepthGuides.length + ' Malaysia field guides, ' + malaysiaDepthClusters.filter((cluster) => cluster.newHub).length + ' Sarawak hubs, 14 hub directories and synchronized English navigation/search.');
}
