import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const problems = [];
const notes = [];

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function routeToFile(route) {
  const pathname = decodeURIComponent(route.split(/[?#]/, 1)[0]);
  if (pathname === '/') return 'index.html';
  const clean = pathname.replace(/^\//, '');
  return clean.endsWith('/') ? path.join(clean, 'index.html') : clean;
}

function textContent(value = '') {
  return value.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
}

const sitemap = read('sitemap.xml');
const publishedUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const titles = new Map();
const canonicals = new Set();

for (const absoluteUrl of publishedUrls) {
  const url = new URL(absoluteUrl);
  const relativePath = routeToFile(url.pathname);
  const fullPath = path.join(root, relativePath);
  if (!fs.existsSync(fullPath)) {
    problems.push(`${absoluteUrl}: sitemap target is missing (${relativePath})`);
    continue;
  }

  const html = fs.readFileSync(fullPath, 'utf8');
  const title = textContent(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]);
  const description = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] || '';
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1] || '';
  const h1Count = (html.match(/<h1\b/gi) || []).length;

  if (!title) problems.push(`${relativePath}: missing title`);
  else if (titles.has(title)) problems.push(`${relativePath}: duplicate title also used by ${titles.get(title)}`);
  else titles.set(title, relativePath);
  if (description.length < 120 || description.length > 170) {
    problems.push(`${relativePath}: meta description is ${description.length} characters (expected 120–170)`);
  }
  if (canonical !== absoluteUrl) problems.push(`${relativePath}: canonical is "${canonical}", expected "${absoluteUrl}"`);
  if (canonicals.has(canonical)) problems.push(`${relativePath}: duplicate canonical ${canonical}`);
  canonicals.add(canonical);
  if (h1Count !== 1) problems.push(`${relativePath}: found ${h1Count} h1 elements`);

  for (const match of html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      problems.push(`${relativePath}: invalid JSON-LD (${error.message})`);
    }
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\bwidth="\d+"/i.test(match[0]) || !/\bheight="\d+"/i.test(match[0])) {
      problems.push(`${relativePath}: image is missing numeric width/height attributes`);
    }
  }

  const usesThailandRelease = url.pathname === '/' || url.pathname.startsWith('/thailand/');
  const usesGyeongjuRelease = url.pathname === '/south-korea/' || url.pathname.startsWith('/south-korea/gyeongju/');
  const expectedSiteCss = usesThailandRelease
    ? '/css/site.css?v=20260826-11'
    : usesGyeongjuRelease
      ? '/css/site.css?v=20260826-10'
      : '/css/site.css?v=20260826-9';
  if (!html.includes(expectedSiteCss)) problems.push(`${relativePath}: stale or missing stylesheet version`);
  if (!html.includes('/js/main.js?v=20260826-9')) problems.push(`${relativePath}: stale or missing main script version`);
  if (!html.includes('data-adsense-client="ca-pub-1732059148394592"')) problems.push(`${relativePath}: missing AdSense publisher declaration`);
  if (!html.includes('/js/adsense.js?v=20260826-9')) problems.push(`${relativePath}: stale or missing AdSense loader`);
  if (url.pathname.startsWith('/south-korea/jeju/') && !html.includes('/css/jeju.css?v=20260826-9')) {
    problems.push(`${relativePath}: missing Jeju responsive stylesheet`);
  }
  if (url.pathname.startsWith('/south-korea/gyeongju/') && !html.includes('/css/gyeongju.css?v=20260826-1')) {
    problems.push(`${relativePath}: missing Gyeongju responsive stylesheet`);
  }
  if (url.pathname.startsWith('/thailand/') && !html.includes('/css/thailand.css?v=20260826-1')) {
    problems.push(`${relativePath}: missing Thailand responsive stylesheet`);
  }
}

const linkFiles = [
  ...publishedUrls.map((value) => routeToFile(new URL(value).pathname)),
  'components/header.html',
  'components/sidebar.html',
  'components/footer.html'
];

for (const relativePath of linkFiles) {
  const html = read(relativePath);
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/gi)) {
    const reference = match[1];
    if (!reference.startsWith('/') || reference.startsWith('//')) continue;
    const target = routeToFile(reference);
    if (!fs.existsSync(path.join(root, target))) problems.push(`${relativePath}: missing local target ${reference}`);
  }
}

let searchIndex;
try {
  searchIndex = JSON.parse(read('data/search-index.json'));
} catch (error) {
  problems.push(`data/search-index.json: invalid JSON (${error.message})`);
  searchIndex = [];
}

for (const item of searchIndex) {
  const baseRoute = item.url.split('#', 1)[0];
  if (!fs.existsSync(path.join(root, routeToFile(baseRoute)))) problems.push(`Search item "${item.title}" points to missing route ${item.url}`);
}

const duplicateSearchRoutes = searchIndex
  .map((item) => item.url)
  .filter((value, index, values) => values.indexOf(value) !== index);
if (duplicateSearchRoutes.length) problems.push(`Duplicate search routes: ${[...new Set(duplicateSearchRoutes)].join(', ')}`);

notes.push(`${publishedUrls.length} published routes`);
notes.push(`${searchIndex.length} search records`);
notes.push(`${titles.size} unique page titles`);

if (problems.length) {
  console.error(`Site audit failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(`- ${problem}`);
  process.exitCode = 1;
} else {
  console.log(`Site audit passed: ${notes.join(', ')}.`);
}
