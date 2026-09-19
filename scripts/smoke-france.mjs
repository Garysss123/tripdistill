import { franceClusters, franceGuides } from '../data/france-guides.mjs';

const args = process.argv.slice(2);
const baseArg = args.find((arg) => arg.startsWith('--base='));
const base = (baseArg ? baseArg.slice('--base='.length) : 'http://127.0.0.1:4173').replace(/\/$/, '');
const locales = [['en', ''], ['zh-Hant', '/zh'], ['ja', '/ja'], ['ko', '/ko'], ['th', '/th']];
const englishRoutes = ['/france/', ...franceClusters.map((cluster) => `/france/${cluster.slug}/`), ...franceGuides.map((guide) => guide.url)];
const pageRoutes = locales.flatMap(([language, prefix]) => englishRoutes.map((route) => ({ language, prefix, route, localized: `${prefix}${route}` })));
const failures = [];

async function request(pathname, label = pathname, allowComponentCanonical = false) {
  try {
    let response = await fetch(base + pathname, { redirect: 'manual', signal: AbortSignal.timeout(20000) });
    if (allowComponentCanonical && [301, 308].includes(response.status)) {
      const origin = new URL(base).origin;
      const target = new URL(response.headers.get('location') || '/', origin);
      const expected = new URL(pathname.replace(/\.html$/, ''), origin);
      if (target.href === expected.href) response = await fetch(target, { redirect: 'manual', signal: AbortSignal.timeout(20000) });
    }
    if (response.status !== 200) failures.push(`${label}: HTTP ${response.status}`);
    if (response.status >= 300 && response.status < 400) failures.push(`${label}: unexpected redirect to ${response.headers.get('location') || '(missing location)'}`);
    return { response, body: await response.text() };
  } catch (error) {
    failures.push(`${label}: ${error.message}`);
    return { response: null, body: '' };
  }
}

for (const { language, prefix, route, localized } of pageRoutes) {
  const { body: html } = await request(localized);
  if (!html) continue;
  if (!/<h1[ >]/i.test(html)) failures.push(`${localized}: missing H1`);
  if (!new RegExp(`<html[^>]+lang=["']${language}["']`, 'i').test(html)) failures.push(`${localized}: expected document language ${language}`);
  if (!html.includes('/css/france.css?v=20260919-1')) failures.push(`${localized}: France stylesheet missing`);
  if (route.split('/').filter(Boolean).length === 3 && !html.includes('/css/france-field.css?v=20260919-1')) failures.push(`${localized}: France field stylesheet missing`);
  if (!html.includes('data-ad-slot')) failures.push(`${localized}: ad placeholder missing`);
  if (!html.includes('https://commons.wikimedia.org/')) failures.push(`${localized}: image provenance missing`);
  if (!html.includes(`rel="canonical" href="https://tripdistill.com${localized}"`)) failures.push(`${localized}: canonical mismatch`);
  for (const [targetLanguage, targetPrefix] of locales) {
    if (!html.includes(`hreflang="${targetLanguage}" href="https://tripdistill.com${targetPrefix}${route}"`)) failures.push(`${localized}: missing hreflang ${targetLanguage}`);
  }
}

for (const guide of franceGuides) {
  const { response } = await request(guide.image.src, guide.image.src);
  if (response && !/^image\/webp\b/i.test(response.headers.get('content-type') || '')) failures.push(`${guide.image.src}: unexpected content type ${response.headers.get('content-type') || '(missing)'}`);
}

for (const [, prefix] of locales) {
  const searchPath = `${prefix}/data/search-index.json`;
  const { body } = await request(searchPath);
  if (body) {
    try {
      const records = JSON.parse(body);
      const france = records.filter((item) => item.url?.startsWith(`${prefix}/france/`) || (!prefix && item.url?.startsWith('/france/')));
      if (france.length !== 81) failures.push(`${searchPath}: expected 81 France search records, found ${france.length}`);
    } catch (error) {
      failures.push(`${searchPath}: invalid JSON (${error.message})`);
    }
  }
  const sidebarPath = `${prefix}/components/sidebar.html`;
  const { body: sidebar } = await request(sidebarPath, sidebarPath, true);
  if (sidebar && (!sidebar.includes('data-sidebar-id="europe"') || !sidebar.includes('data-sidebar-id="france"') || !sidebar.includes('data-sidebar-id="switzerland"'))) failures.push(`${sidebarPath}: Europe/France/Switzerland navigation missing`);
  const headerPath = `${prefix}/components/header.html`;
  const { body: header } = await request(headerPath, headerPath, true);
  if (header && !header.includes('data-language-option="en"')) failures.push(`${headerPath}: English language option missing`);
}

const { body: sitemap } = await request('/sitemap.xml');
for (const { prefix, route, localized } of pageRoutes) {
  if (sitemap && !sitemap.includes(`<loc>https://tripdistill.com${prefix}${route}</loc><lastmod>2026-09-20</lastmod>`)) failures.push(`${localized}: sitemap route missing or stale`);
}

await request('/css/france.css?v=20260919-1', 'France stylesheet');
await request('/css/france-field.css?v=20260919-1', 'France field stylesheet');

if (failures.length) {
  console.error(failures.join('\n'));
  console.error(`France smoke: ${failures.length} failure(s).`);
  process.exitCode = 1;
} else {
  console.log(`France smoke passed against ${base}: ${pageRoutes.length} five-language pages, ${franceGuides.length} images, ${locales.length} search indexes and sidebars, plus sitemap/CSS checks.`);
}
