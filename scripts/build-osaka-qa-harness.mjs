import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const harnessDir = path.join(dist, 'qa', 'osaka-responsive');
const sitemapPath = path.join(dist, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) throw new Error('Run `npm run build` before building the Osaka QA harness.');
const sitemap = fs.readFileSync(sitemapPath, 'utf8');
if (sitemap.includes('/qa/osaka-responsive/')) throw new Error('The QA harness must remain outside the sitemap.');

const locales = [
  { code: 'en', label: 'English', prefix: '' },
  { code: 'zh-Hant', label: 'Traditional Chinese', prefix: '/zh' },
  { code: 'ja', label: 'Japanese', prefix: '/ja' },
  { code: 'ko', label: 'Korean', prefix: '/ko' },
  { code: 'th', label: 'Thai', prefix: '/th' }
];
const routes = [
  { path: '/japan/osaka/', label: 'Osaka city guide' },
  { path: '/japan/osaka/namba/', label: 'Namba' },
  { path: '/japan/osaka/umeda/', label: 'Umeda' },
  { path: '/japan/osaka/tennoji-shinsekai/', label: 'Tennoji & Shinsekai' },
  { path: '/japan/osaka/osaka-castle-area/', label: 'Osaka Castle area' },
  { path: '/japan/osaka/osaka-bay/', label: 'Osaka Bay & USJ' }
];

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function attr(node, name) {
  return node.attrs?.find((item) => item.name === name)?.value || '';
}

function walk(node, visit) {
  visit(node);
  for (const child of node.childNodes || []) walk(child, visit);
}

const pages = [];
const imagePaths = new Set();
for (const locale of locales) {
  for (const route of routes) {
    const urlPath = `${locale.prefix}${route.path}`;
    const localPath = path.join(dist, urlPath.slice(1), 'index.html');
    if (!fs.existsSync(localPath)) throw new Error(`Missing built Osaka route: ${locale.code} ${urlPath}`);
    const html = fs.readFileSync(localPath);
    const document = parse(html.toString('utf8'));
    let headingCount = 0;
    let declaredLocale = '';
    walk(document, (node) => {
      if (node.tagName === 'h1') headingCount += 1;
      if (node.tagName === 'html') declaredLocale = attr(node, 'lang');
      if (node.tagName === 'img') {
        const src = attr(node, 'src');
        if (src.startsWith('/assets/')) imagePaths.add(decodeURIComponent(new URL(src, `https://tripdistill.com${urlPath}`).pathname));
      }
    });
    if (headingCount !== 1) throw new Error(`${urlPath}: expected one h1, found ${headingCount}.`);
    if (declaredLocale !== locale.code) throw new Error(`${urlPath}: html lang is ${declaredLocale}, expected ${locale.code}.`);
    pages.push({ locale: locale.code, path: urlPath, sha256: sha256(html) });
  }
}

const images = [...imagePaths].sort().map((urlPath) => {
  const localPath = path.join(dist, decodeURIComponent(urlPath).slice(1));
  if (!fs.existsSync(localPath)) throw new Error(`Missing referenced Osaka image: ${urlPath}`);
  return { path: urlPath, sha256: sha256(fs.readFileSync(localPath)) };
});
const stylesheets = ['/css/site.css', '/css/osaka-editorial.css'].map((urlPath) => {
  const localPath = path.join(dist, urlPath.slice(1));
  if (!fs.existsSync(localPath)) throw new Error(`Missing Osaka stylesheet: ${urlPath}`);
  return { path: urlPath, sha256: sha256(fs.readFileSync(localPath)) };
});

const branch = execFileSync('git', ['branch', '--show-current'], { cwd: root, encoding: 'utf8' }).trim();
const commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();
const workingTree = execFileSync('git', ['status', '--porcelain'], { cwd: root, encoding: 'utf8' }).trim();
if (branch !== 'osaka-qa') throw new Error(`Build the Osaka preview from osaka-qa, not ${branch}.`);
if (workingTree) throw new Error('Commit and push reviewed source before building the Osaka preview manifest.');

const release = {
  project: 'trip',
  branch,
  commit,
  routeCount: pages.length,
  viewportWidths: [320, 390],
  routes,
  locales: locales.map(({ code, label }) => ({ code, label })),
  pages,
  images,
  stylesheets
};
const shell = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow,noarchive">
  <meta name="referrer" content="same-origin">
  <title>Osaka responsive QA harness</title>
  <style>
    :root { color-scheme: light; font-family: system-ui, sans-serif; background: #f2f0ea; color: #202c36; }
    * { box-sizing: border-box; }
    body { margin: 0; min-width: 280px; }
    main { max-width: 1320px; margin: 0 auto; padding: clamp(16px, 3vw, 32px); }
    h1 { margin: 0 0 8px; font-size: clamp(1.55rem, 4vw, 2rem); }
    .intro { max-width: 76ch; margin: 0 0 20px; color: #4b5a64; line-height: 1.5; }
    .controls { display: grid; grid-template-columns: repeat(2, minmax(180px, 1fr)) auto; gap: 12px; align-items: end; }
    label { display: grid; gap: 6px; font-weight: 650; }
    select { min-height: 44px; border: 1px solid #697983; border-radius: 6px; background: #fff; color: inherit; font: inherit; padding: 8px 10px; }
    :focus-visible { outline: 3px solid #b65325; outline-offset: 2px; }
    .width-controls { display: flex; flex-wrap: wrap; gap: 8px; }
    .width-controls span { border: 1px solid #87939a; border-radius: 999px; padding: 8px 12px; background: #fff; font-weight: 650; }
    .status { min-height: 1.5em; margin: 14px 0 8px; color: #384956; }
    .release { color: #56646d; font-size: .86rem; overflow-wrap: anywhere; }
    .viewport-rail { overflow-x: auto; padding: 6px 2px 18px; }
    .frames { display: flex; gap: 18px; width: max-content; margin: 0 auto; align-items: start; }
    .frame-card { padding: 10px; border: 1px solid #d1d5d2; border-radius: 8px; background: #fff; }
    .frame-card h2 { margin: 0 0 8px; font-size: .95rem; }
    iframe { display: block; height: 820px; border: 0; background: #fff; box-shadow: 0 5px 20px #202b3526; }
    @media (max-width: 740px) { main { padding: 16px 12px; } .controls { grid-template-columns: 1fr; } .frames { margin-left: 0; } }
  </style>
</head>
<body>
  <main>
    <h1>Osaka responsive QA harness</h1>
    <p class="intro">Review the Osaka city guide and five selected district guides in all five published languages. Both previews load the same guide at fixed 320 and 390 CSS-pixel widths. The harness is excluded from indexing and the public sitemap.</p>
    <div class="controls">
      <label for="route">Guide<select id="route"></select></label>
      <label for="locale">Language<select id="locale"></select></label>
      <div class="width-controls" role="group" aria-label="Both viewport widths shown"><span>320 px</span><span>390 px</span></div>
    </div>
    <p class="status" id="status" role="status" aria-live="polite"></p>
    <p class="release" id="release" aria-live="polite">Loading build identity…</p>
    <div class="viewport-rail"><div class="frames">
      <section class="frame-card" aria-labelledby="frame320label"><h2 id="frame320label">320 CSS pixels</h2><iframe id="frame320" width="320" title="Osaka guide, English, 320 CSS pixels wide"></iframe></section>
      <section class="frame-card" aria-labelledby="frame390label"><h2 id="frame390label">390 CSS pixels</h2><iframe id="frame390" width="390" title="Osaka guide, English, 390 CSS pixels wide"></iframe></section>
    </div></div>
  </main>
  <script type="application/json" id="qa-config">__CONFIG__</script>
  <script>
    const config = JSON.parse(document.querySelector('#qa-config').textContent);
    const routeSelect = document.querySelector('#route');
    const localeSelect = document.querySelector('#locale');
    const status = document.querySelector('#status');
    const frames = [[document.querySelector('#frame320'), 320], [document.querySelector('#frame390'), 390]];
    for (let i = 0; i < config.routes.length; i++) {
      const option = document.createElement('option'); option.value = String(i); option.textContent = config.routes[i].label; routeSelect.append(option);
    }
    for (let i = 0; i < config.locales.length; i++) {
      const option = document.createElement('option'); option.value = config.locales[i].code; option.textContent = config.locales[i].label; localeSelect.append(option);
    }
    function updateFrames() {
      const route = config.routes[Number(routeSelect.value)];
      const locale = config.locales.find((item) => item.code === localeSelect.value);
      const url = locale.prefix + route.path;
      for (const [frame, width] of frames) {
        if (frame.getAttribute('src') !== url) frame.src = url;
        frame.title = route.label + ', ' + locale.label + ', ' + width + ' CSS pixels wide';
      }
      status.textContent = 'Showing ' + route.label + ' in ' + locale.label + ' at 320 and 390 CSS pixels.';
    }
    routeSelect.addEventListener('change', updateFrames);
    localeSelect.addEventListener('change', updateFrames);
    fetch('./release.json').then((response) => { if (!response.ok) throw new Error('Manifest request failed'); return response.json(); })
      .then((release) => { document.querySelector('#release').textContent = 'Project ' + release.project + ' · branch ' + release.branch + ' · commit ' + release.commit; })
      .catch(() => { document.querySelector('#release').textContent = 'Release manifest unavailable'; });
    updateFrames();
  </script>
</body>
</html>`;

fs.mkdirSync(harnessDir, { recursive: true });
fs.writeFileSync(path.join(harnessDir, 'release.json'), `${JSON.stringify(release, null, 2)}\n`);
fs.writeFileSync(path.join(harnessDir, 'index.html'), shell.replace('__CONFIG__', JSON.stringify({ routes, locales })));
console.log(`Built /qa/osaka-responsive/ for ${pages.length} route × locale pages at 320 and 390 CSS-pixel widths.`);
