import fs from 'node:fs';
import path from 'node:path';
import { guides } from '../data/china-expansion-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const reviewDate = '28 August 2026';
const assetVersion = '20260828-1';
const searchParents = {
  guangzhou: 'China · Guangdong',
  shenzhen: 'China · Guangdong',
  'xiamen-fujian-tulou': 'China · Fujian',
  'sanya-hainan': 'China · Hainan',
  'guilin-yangshuo': 'China · Guangxi',
  changsha: 'China · Hunan',
  wuhan: 'China · Hubei',
  chengdu: 'China · Sichuan',
  chongqing: 'China · Chongqing',
  kunming: 'China · Yunnan',
  dali: 'China · Yunnan',
  'lijiang-shangri-la': 'China · Yunnan',
  zhangjiajie: 'China · Hunan',
  'guiyang-guizhou': 'China · Guizhou',
  'dunhuang-hexi-corridor': 'China · Gansu',
  'xinjiang-corridor': 'China · Xinjiang',
  'lhasa-tibetan-plateau': 'China · Tibet',
  datong: 'China · Shanxi',
  pingyao: 'China · Shanxi',
  luoyang: 'China · Henan',
  xian: 'China · Shaanxi',
  harbin: 'China · Heilongjiang',
  'hohhot-inner-mongolia': 'China · Inner Mongolia',
  suzhou: 'China · Jiangsu',
  nanjing: 'China · Jiangsu',
  huangshan: 'China · Anhui',
  qingdao: 'China · Shandong'
};

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function jsonLd(guide) {
  const route = `/china/${guide.slug}/`;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristDestination',
        '@id': `https://tripdistill.com${route}#destination`,
        name: guide.name,
        url: `https://tripdistill.com${route}`,
        image: `https://tripdistill.com${guide.image.path}`,
        description: guide.metaDescription,
        containedInPlace: { '@type': 'Country', name: 'China' }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tripdistill.com/' },
          { '@type': 'ListItem', position: 2, name: 'China', item: 'https://tripdistill.com/china/' },
          { '@type': 'ListItem', position: 3, name: guide.name, item: `https://tripdistill.com${route}` }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: guide.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer }
        }))
      }
    ]
  }).replaceAll('<', '\\u003c');
}

function alternates(route) {
  const locales = [
    ['en', route],
    ['zh-Hant', `/zh${route}`],
    ['ja', `/ja${route}`],
    ['ko', `/ko${route}`],
    ['th', `/th${route}`]
  ];
  return locales.map(([language, localizedRoute]) => `<link rel="alternate" hreflang="${language}" href="https://tripdistill.com${localizedRoute}">`).join('')
    + `<link rel="alternate" hreflang="x-default" href="https://tripdistill.com${route}">`;
}

function renderCards(items, className) {
  return items.map((item, index) => `<article><small>${escapeHtml(item.label || String(index + 1).padStart(2, '0'))}</small><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p></article>`).join('');
}

function serializeSearchIndex(entries) {
  const objects = entries.map((entry) => [
    '  {',
    `    "title": ${JSON.stringify(entry.title)},`,
    `    "url": ${JSON.stringify(entry.url)},`,
    `    "parent": ${JSON.stringify(entry.parent)},`,
    `    "type": ${JSON.stringify(entry.type)},`,
    `    "summary": ${JSON.stringify(entry.summary)},`,
    `    "keywords": [${entry.keywords.map((keyword) => JSON.stringify(keyword)).join(', ')}]`,
    '  }'
  ].join('\n'));
  return `[\n${objects.join(',\n')}\n]\n`;
}

function renderGuide(guide) {
  const route = `/china/${guide.slug}/`;
  const motifs = guide.motifs.map((motif, index) => `<span><b>${String(index + 1).padStart(2, '0')}</b>${escapeHtml(motif)}</span>`).join('');
  const chapters = guide.chapters.map((chapter, index) => `<article id="chapter-${index + 1}"><small>${String(index + 1).padStart(2, '0')} / ${escapeHtml(chapter.label)}</small><h3>${escapeHtml(chapter.title)}</h3><p>${escapeHtml(chapter.text)}</p></article>`).join('');
  const sources = guide.sources.map((source) => `<li><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener">${escapeHtml(source.label)}</a>.</li>`).join('');
  const faqHtml = guide.faqs.map((faq) => `<details><summary>${escapeHtml(faq.question)}</summary><div class="faq-answer"><p>${escapeHtml(faq.answer)}</p></div></details>`).join('');

  return `<!doctype html>
<html lang="en" data-adsense-client="ca-pub-1732059148394592">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(guide.title)} | TripDistill</title>
  <meta name="description" content="${escapeHtml(guide.metaDescription)}">
  <link rel="canonical" href="https://tripdistill.com${route}">${alternates(route)}<meta name="theme-color" content="${guide.themeColor}">
  <meta property="og:type" content="article"><meta property="og:site_name" content="TripDistill"><meta property="og:title" content="${escapeHtml(guide.ogTitle)}"><meta property="og:description" content="${escapeHtml(guide.metaDescription)}"><meta property="og:url" content="https://tripdistill.com${route}"><meta property="og:image" content="https://tripdistill.com${guide.image.path}"><meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/favicon.ico" sizes="any"><link rel="stylesheet" href="/css/site.css?v=20260831-1"><link rel="stylesheet" href="/css/china.css?v=20260827-3"><link rel="stylesheet" href="/css/china-expansion.css?v=${assetVersion}">${guide.extraStylesheet ? `<link rel="stylesheet" href="${escapeHtml(guide.extraStylesheet)}">` : ''}<script src="/js/adsense.js?v=20260826-9" defer></script>
  <script type="application/ld+json">${jsonLd(guide)}</script>
</head>
<body class="china-expansion-page" data-page="${guide.slug}" data-parent-page="china" data-country="china" data-region="${guide.slug}">
  <a class="skip-link" href="#main-content">Skip to content</a><div id="layout-header"></div>
  <div class="site-shell"><div class="mobile-overlay" data-mobile-overlay aria-hidden="true"></div><aside id="layout-sidebar" class="sidebar" aria-label="TripDistill navigation"></aside><main id="main-content" class="page-content">
    <nav class="breadcrumbs china-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/china/">China</a><span>/</span><span aria-current="page">${escapeHtml(guide.name)}</span></nav>

    <article class="exp-guide" data-visual="${guide.visual}">
      <header class="exp-hero"><div class="exp-hero-copy"><span class="exp-kicker">${escapeHtml(guide.eyebrow)}</span><h1>${escapeHtml(guide.name)} <span>${escapeHtml(guide.titleAccent)}</span></h1><p>${escapeHtml(guide.intro)}</p><div class="exp-facts"><span>Useful stay / ${escapeHtml(guide.nights)}</span><span>Core logic / ${escapeHtml(guide.coreLogic)}</span><span>Watch first / ${escapeHtml(guide.watchFirst)}</span></div></div><figure class="exp-hero-media"><img src="${guide.image.path}" width="960" height="640" alt="${escapeHtml(guide.image.alt)}" fetchpriority="high"><figcaption>${escapeHtml(guide.image.caption)}</figcaption></figure><div class="exp-motif" aria-label="Guide themes">${motifs}</div></header>

      <section class="section compact" aria-label="Advertisement"><div class="ad-slot" data-ad-slot><div><strong>Advertisement</strong><span>Responsive AdSense placement reserved</span></div></div></section>

      <section class="section exp-orientation" id="orientation" aria-labelledby="orientation-title"><div class="exp-section-heading"><span>THE LOCAL INSTRUMENT</span><h2 id="orientation-title">${escapeHtml(guide.orientationTitle)}</h2><p>${escapeHtml(guide.orientationIntro)}</p></div><div class="exp-chapters">${chapters}</div></section>

      <section class="section exp-decisions" id="arrival" aria-labelledby="arrival-title"><div class="exp-section-heading"><span>BEFORE THE FIRST MORNING</span><h2 id="arrival-title">Make three decisions while the map is still quiet</h2></div><div class="exp-decision-grid">${renderCards(guide.decisions, 'exp-decision-grid')}</div></section>

      <section class="section exp-itinerary" id="itinerary" aria-labelledby="itinerary-title"><div class="exp-section-heading"><span>${escapeHtml(guide.itineraryKicker)}</span><h2 id="itinerary-title">${escapeHtml(guide.itineraryTitle)}</h2><p>${escapeHtml(guide.itineraryIntro)}</p></div><div class="exp-route">${renderCards(guide.itinerary, 'exp-route')}</div></section>

      <section class="section exp-practical" id="practical" aria-labelledby="practical-title"><div class="exp-section-heading"><span>FRICTION WORTH SOLVING</span><h2 id="practical-title">${escapeHtml(guide.practicalTitle)}</h2></div><div class="exp-practical-grid">${renderCards(guide.practical, 'exp-practical-grid')}</div></section>

      <section class="section" id="faq" aria-labelledby="faq-title"><div class="exp-section-heading"><span>QUICK ANSWERS</span><h2 id="faq-title">${escapeHtml(guide.name)} planning FAQ</h2></div><div class="faq-list">${faqHtml}</div></section>

      <section class="section sources" aria-labelledby="sources-title"><h2 id="sources-title">Official sources and photo credit</h2><p>Planning facts and licenses were reviewed on ${reviewDate}. Transport, reservations, protected-area access, border rules and local operating arrangements change; verify the current authority or operator close to travel. The image was resized and converted to WebP; its display crop may vary by screen, with no other material changes.</p><ul>${sources}<li><a href="https://www.12306.cn/en/faq.html?item=1" target="_blank" rel="noopener">China Railway 12306 — official ticket and identity-document guidance</a>.</li><li><a href="${escapeHtml(guide.image.source)}" target="_blank" rel="noopener">${escapeHtml(guide.image.creditTitle)}</a> — ${escapeHtml(guide.image.creator)}, ${escapeHtml(guide.image.license)}.</li></ul></section>
    </article>
  </main></div><div id="layout-footer"></div><script src="/js/main.js?v=20260828-1" defer></script>
</body></html>
`;
}

const seen = new Set();
for (const guide of guides) {
  if (seen.has(guide.slug)) throw new Error(`Duplicate guide slug: ${guide.slug}`);
  seen.add(guide.slug);
  if (guide.chapters.length !== 8) throw new Error(`${guide.slug}: expected 8 chapters`);
  if (guide.decisions.length !== 3 || guide.itinerary.length !== 4 || guide.practical.length !== 3 || guide.faqs.length !== 4) {
    throw new Error(`${guide.slug}: invalid section counts`);
  }
  const destination = path.join(root, 'china', guide.slug);
  fs.mkdirSync(destination, { recursive: true });
  const html = renderGuide(guide);
  const visibleWords = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z0-9#]+;/gi, ' ').trim().split(/\s+/).length;
  if (visibleWords < 850) throw new Error(`${guide.slug}: only ${visibleWords} visible English words`);
  fs.writeFileSync(path.join(destination, 'index.html'), html);
  console.log(`${guide.slug}: ${visibleWords} words`);
}

console.log(`Generated ${guides.length} complete China destination guides.`);

const searchPath = path.join(root, 'data', 'search-index.json');
const existingSearch = JSON.parse(fs.readFileSync(searchPath, 'utf8'));
const expansionUrls = new Set(guides.map((guide) => `/china/${guide.slug}/`));
const expansionSearch = guides.map((guide) => ({
  title: `${guide.name} Travel Guide`,
  url: `/china/${guide.slug}/`,
  parent: searchParents[guide.slug],
  type: guide.search.type,
  summary: guide.search.summary,
  keywords: guide.search.keywords
}));
const updatedSearch = existingSearch.filter((entry) => !expansionUrls.has(entry.url)).concat(expansionSearch);
fs.writeFileSync(searchPath, serializeSearchIndex(updatedSearch));
console.log(`Synchronized ${expansionSearch.length} China destination search records.`);
