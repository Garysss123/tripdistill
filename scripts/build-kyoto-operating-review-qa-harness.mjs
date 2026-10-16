import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const harnessDir = path.join(dist, 'qa', 'kyoto-operating-review-responsive');
const routeChoices = [
  { path: '/japan/kyoto/central-kyoto-nishiki/', label: 'Central Kyoto & Nishiki' },
  { path: '/japan/kyoto/kinkakuji-northwest/', label: 'Kinkakuji & Northwest Kyoto' },
  { path: '/japan/kyoto/kiyomizudera-higashiyama/', label: 'Kiyomizudera & Southern Higashiyama' },
  { path: '/japan/kyoto/kyoto-station-south/', label: 'Kyoto Station & South' },
  { path: '/japan/kyoto/philosophers-path-okazaki/', label: "Philosopher's Path & Okazaki" }
];
const locales = [
  { code: 'en', label: 'English', prefix: '' },
  { code: 'zh-Hant', label: 'Traditional Chinese', prefix: '/zh' },
  { code: 'ja', label: 'Japanese', prefix: '/ja' },
  { code: 'ko', label: 'Korean', prefix: '/ko' },
  { code: 'th', label: 'Thai', prefix: '/th' }
];
const viewportWidths = [320, 390];
const sitemapPath = path.join(dist, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) throw new Error('Run `npm run build` before building the Kyoto operating-review QA harness.');
const sitemap = fs.readFileSync(sitemapPath, 'utf8');
if (sitemap.includes('/qa/kyoto-operating-review-responsive/')) throw new Error('The QA harness must remain outside the sitemap.');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const attr = (node, name) => node.attrs?.find((item) => item.name === name)?.value || '';
function walk(node, visit) { visit(node); for (const child of node.childNodes || []) walk(child, visit); }
function git(args) {
  const safeDirectory = root.replaceAll('\\', '/');
  return execFileSync('git', ['-c', `safe.directory=${safeDirectory}`, ...args], { cwd: root, encoding: 'utf8' }).trim();
}
function distFile(urlPath) {
  const pathname = decodeURIComponent(new URL(urlPath, 'https://tripdistill.com').pathname);
  return path.join(dist, pathname.replace(/^\//, ''));
}

const pages = [];
const assets = new Map();
for (const locale of locales) {
  for (const route of routeChoices) {
    const urlPath = `${locale.prefix}${route.path}`;
    const pagePath = distFile(`${urlPath}index.html`);
    if (!fs.existsSync(pagePath)) throw new Error(`Missing built Kyoto guide: ${locale.code} ${urlPath}`);
    const bytes = fs.readFileSync(pagePath);
    const doc = parse(bytes.toString('utf8'));
    let declaredLocale = '';
    let pageMarker = '';
    let headingCount = 0;
    const pageAssets = new Set();
    walk(doc, (node) => {
      if (node.tagName === 'html') declaredLocale = attr(node, 'lang');
      if (node.tagName === 'body') pageMarker = attr(node, 'data-page');
      if (node.tagName === 'h1') headingCount += 1;
      if (node.tagName === 'img' && attr(node, 'src').startsWith('/assets/')) pageAssets.add(new URL(attr(node, 'src'), 'https://tripdistill.com').pathname);
      if (node.tagName === 'link' && attr(node, 'rel') === 'stylesheet' && attr(node, 'href').startsWith('/')) pageAssets.add(new URL(attr(node, 'href'), 'https://tripdistill.com').pathname);
      if (node.tagName === 'script' && attr(node, 'src')?.startsWith('/')) pageAssets.add(new URL(attr(node, 'src'), 'https://tripdistill.com').pathname);
    });
    const expectedMarker = route.path.replace(/\/+$/, '').split('/').at(-1);
    if (headingCount !== 1) throw new Error(`${urlPath}: expected one h1, found ${headingCount}.`);
    if (declaredLocale !== locale.code) throw new Error(`${urlPath}: html lang is ${declaredLocale}, expected ${locale.code}.`);
    if (pageMarker !== expectedMarker) throw new Error(`${urlPath}: expected data-page=${expectedMarker}, found ${pageMarker}.`);
    if (!sitemapUrls.includes(`https://tripdistill.com${urlPath}`)) throw new Error(`Sitemap omits ${urlPath}.`);
    pages.push({ locale: locale.code, path: urlPath, sha256: sha256(bytes) });
    for (const asset of pageAssets) assets.set(asset, true);
  }
}

const releaseAssets = [...assets.keys()].sort().map((urlPath) => {
  const file = distFile(urlPath);
  if (!fs.existsSync(file)) throw new Error(`Missing Kyoto guide asset: ${urlPath}`);
  return { path: urlPath, sha256: sha256(fs.readFileSync(file)) };
});
const branch = git(['branch', '--show-current']);
const commit = git(['rev-parse', 'HEAD']);
if (branch !== 'hokkaido-qa') throw new Error(`Build the Kyoto operating-review preview from hokkaido-qa, not ${branch}.`);
if (git(['status', '--porcelain'])) throw new Error('Commit and push the reviewed source before building the Kyoto operating-review preview manifest.');
const release = {
  project: 'trip',
  branch,
  commit,
  routeCount: routeChoices.length,
  pageCount: pages.length,
  viewportWidths,
  routes: routeChoices,
  locales: locales.map(({ code, label }) => ({ code, label })),
  pages,
  assets: releaseAssets,
  sitemap: { path: '/sitemap.xml', sha256: sha256(fs.readFileSync(sitemapPath)), urlCount: sitemapUrls.length }
};

const shell = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow,noarchive">
  <meta name="referrer" content="same-origin">
  <title>Kyoto operating guide responsive review</title>
  <style>
    :root { color-scheme: light; font-family: system-ui, sans-serif; background: #f2f0ea; color: #202c36; }
    * { box-sizing: border-box; }
    body { margin: 0; min-width: 280px; }
    main { max-width: 1320px; margin: 0 auto; padding: clamp(16px, 3vw, 32px); }
    h1 { margin: 0 0 8px; font-size: clamp(1.55rem, 4vw, 2rem); }
    .intro { max-width: 76ch; margin: 0 0 20px; color: #4b5a64; line-height: 1.5; }
    .controls { display: grid; grid-template-columns: minmax(220px, 1.2fr) minmax(180px, .8fr) auto; gap: 12px; align-items: end; }
    label { display: grid; gap: 6px; font-weight: 650; }
    select { width: 100%; min-height: 44px; border: 1px solid #697983; border-radius: 6px; background: #fff; color: inherit; font: inherit; padding: 8px 10px; }
    :focus-visible { outline: 3px solid #b65325; outline-offset: 2px; }
    .width-controls { display: flex; flex-wrap: wrap; gap: 8px; }
    .width-controls span { border: 1px solid #87939a; border-radius: 999px; padding: 8px 12px; background: #fff; font-weight: 650; }
    .status { min-height: 1.5em; margin: 14px 0 8px; color: #384956; }
    .release { color: #56646d; font-size: .86rem; overflow-wrap: anywhere; }
    .viewport-rail { overflow-x: auto; padding: 6px 2px 18px; }
    .frames { display: flex; gap: 18px; width: max-content; margin: 0 auto; align-items: start; }
    .frame-card { padding: 10px; border: 1px solid #d1d5d2; border-radius: 8px; background: #fff; }
    .frame-card h2 { margin: 0 0 8px; font-size: .95rem; }
    iframe { display: block; height: 900px; border: 0; background: #fff; box-shadow: 0 5px 20px #202b3526; }
    @media (max-width: 740px) { main { padding: 16px 12px; } .controls { grid-template-columns: 1fr; } .frames { margin-left: 0; } }
  </style>
</head>
<body>
  <main>
    <h1>Kyoto operating guide review</h1>
    <p class="intro">Choose one of the five updated Kyoto guides and one of the five static languages. Review paired 320 and 390 CSS-pixel frames. This noindex preview supports rendered review; it does not certify a completed browser, keyboard, or screen-reader review.</p>
    <div class="controls">
      <label for="route">Kyoto guide<select id="route"></select></label>
      <label for="locale">Language<select id="locale"></select></label>
      <div class="width-controls" role="group" aria-label="Both viewport widths shown"><span>320 px</span><span>390 px</span></div>
    </div>
    <p class="status" id="status" role="status" aria-live="polite"></p>
    <p class="release" id="release" aria-live="polite">Loading build identity...</p>
    <div class="viewport-rail"><div class="frames">
      <section class="frame-card" aria-labelledby="frame320label"><h2 id="frame320label">320 CSS pixels</h2><iframe id="frame320" width="320" title="Kyoto guide, English, 320 CSS pixels wide"></iframe></section>
      <section class="frame-card" aria-labelledby="frame390label"><h2 id="frame390label">390 CSS pixels</h2><iframe id="frame390" width="390" title="Kyoto guide, English, 390 CSS pixels wide"></iframe></section>
    </div></div>
  </main>
  <script type="application/json" id="qa-config">__CONFIG__</script>
  <script>
    const config = JSON.parse(document.querySelector('#qa-config').textContent);
    const routeSelect = document.querySelector('#route');
    const localeSelect = document.querySelector('#locale');
    const status = document.querySelector('#status');
    const frames = [[document.querySelector('#frame320'), 320], [document.querySelector('#frame390'), 390]];
    for (const route of config.routes) { const option = document.createElement('option'); option.value = route.path; option.textContent = route.label; routeSelect.append(option); }
    for (const locale of config.locales) { const option = document.createElement('option'); option.value = locale.code; option.textContent = locale.label; localeSelect.append(option); }
    function updateFrames() {
      const route = config.routes.find((item) => item.path === routeSelect.value) || config.routes[0];
      const locale = config.locales.find((item) => item.code === localeSelect.value) || config.locales[0];
      const url = locale.prefix + route.path;
      for (const [frame, width] of frames) { if (frame.getAttribute('src') !== url) frame.src = url; frame.title = route.label + ', ' + locale.label + ', ' + width + ' CSS pixels wide'; }
      status.textContent = 'Showing ' + route.label + ' in ' + locale.label + ' at 320 and 390 CSS pixels.';
    }
    routeSelect.addEventListener('change', updateFrames);
    localeSelect.addEventListener('change', updateFrames);
    fetch('./release.json').then((response) => { if (!response.ok) throw new Error('Manifest request failed'); return response.json(); })
      .then((release) => { document.querySelector('#release').textContent = 'Project ' + release.project + ' | branch ' + release.branch + ' | commit ' + release.commit; })
      .catch(() => { document.querySelector('#release').textContent = 'Release manifest unavailable'; });
    updateFrames();
  </script>
</body>
</html>`;

fs.mkdirSync(harnessDir, { recursive: true });
fs.writeFileSync(path.join(harnessDir, 'index.html'), shell.replace('__CONFIG__', JSON.stringify({ routes: routeChoices, locales })));
fs.writeFileSync(path.join(harnessDir, 'release.json'), `${JSON.stringify(release, null, 2)}\n`);
console.log(`Built /qa/kyoto-operating-review-responsive/ for ${routeChoices.length} guides × ${locales.length} locales at ${viewportWidths.join('/')} CSS-pixel widths.`);
