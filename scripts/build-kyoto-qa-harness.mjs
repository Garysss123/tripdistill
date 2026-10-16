import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const projectRoot = path.resolve(import.meta.dirname, '..');
const distRoot = path.join(projectRoot, 'dist');
const harnessDir = path.join(distRoot, 'qa', 'kyoto-responsive');
const harnessPath = path.join(harnessDir, 'index.html');
const releasePath = path.join(harnessDir, 'release.json');
const sitemapPath = path.join(distRoot, 'sitemap.xml');

if (!fs.existsSync(sitemapPath)) throw new Error('Run `npm run build` before building the Kyoto harness.');
const sitemap = fs.readFileSync(sitemapPath, 'utf8');
if (sitemap.includes('/qa/kyoto-responsive/')) throw new Error('Kyoto QA harness must remain outside the sitemap.');

const locales = [
  { code: 'en', label: 'English', prefix: '' },
  { code: 'zh-Hant', label: 'Traditional Chinese', prefix: '/zh' },
  { code: 'ja', label: 'Japanese', prefix: '/ja' },
  { code: 'ko', label: 'Korean', prefix: '/ko' },
  { code: 'th', label: 'Thai', prefix: '/th' }
];
const routes = [
  { path: '/japan/kyoto/', label: 'Kyoto hub' },
  { path: '/japan/kyoto/arashiyama-sagano/', label: 'Arashiyama & Sagano' },
  { path: '/japan/kyoto/fushimi-inari-sake-district/', label: 'Fushimi Inari & Sake District' },
  { path: '/japan/kyoto/gion-pontocho/', label: 'Gion & Pontocho' },
  { path: '/japan/kyoto/kiyomizudera-higashiyama/', label: 'Kiyomizudera & Higashiyama' },
  { path: '/japan/kyoto/central-kyoto-nishiki/', label: 'Central Kyoto & Nishiki' },
  { path: '/japan/kyoto/kyoto-station-south/', label: 'Kyoto Station & South' },
  { path: '/japan/kyoto/kinkakuji-northwest/', label: 'Kinkakuji & Northwest' },
  { path: '/japan/kyoto/philosophers-path-okazaki/', label: "Philosopher's Path & Okazaki" }
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

const pageRecords = [];
const imagePaths = new Set();
for (const locale of locales) {
  for (const route of routes) {
    const urlPath = `${locale.prefix}${route.path}`;
    const localPath = path.join(distRoot, urlPath.slice(1), 'index.html');
    if (!fs.existsSync(localPath)) throw new Error(`Missing built route: ${locale.code} ${urlPath}`);
    const html = fs.readFileSync(localPath);
    pageRecords.push({ locale: locale.code, path: urlPath, sha256: sha256(html) });
    walk(parse(html.toString('utf8')), (node) => {
      if (node.tagName !== 'img') return;
      const src = attr(node, 'src');
      if (!src) return;
      const url = new URL(src, `https://tripdistill.com${urlPath}`);
      if (url.origin === 'https://tripdistill.com' && url.pathname.startsWith('/assets/')) imagePaths.add(decodeURIComponent(url.pathname));
    });
  }
}

const imageRecords = [...imagePaths].sort().map((urlPath) => {
  const localPath = path.join(distRoot, decodeURIComponent(urlPath).slice(1));
  if (!fs.existsSync(localPath)) throw new Error(`Missing referenced build image: ${urlPath}`);
  return { path: urlPath, sha256: sha256(fs.readFileSync(localPath)) };
});
const stylesheetPath = path.join(distRoot, 'css', 'site.css');
if (!fs.existsSync(stylesheetPath)) throw new Error('Missing built site stylesheet.');
const stylesheet = { path: '/css/site.css', sha256: sha256(fs.readFileSync(stylesheetPath)) };
const districtStylesheetPath = path.join(distRoot, 'css', 'kyoto-districts.css');
if (!fs.existsSync(districtStylesheetPath)) throw new Error('Missing built Kyoto district stylesheet.');
const districtStylesheet = { path: '/css/kyoto-districts.css', sha256: sha256(fs.readFileSync(districtStylesheetPath)) };
const commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: projectRoot, encoding: 'utf8' }).trim();
const branch = execFileSync('git', ['branch', '--show-current'], { cwd: projectRoot, encoding: 'utf8' }).trim();
const workingTree = execFileSync('git', ['status', '--porcelain'], { cwd: projectRoot, encoding: 'utf8' }).trim();
if (branch !== 'kyoto-qa') throw new Error(`Build the Kyoto preview from branch kyoto-qa, not ${branch}.`);
if (workingTree) throw new Error('Commit and push the reviewed source before generating the Kyoto preview manifest.');
const release = {
  project: 'trip',
  branch: 'kyoto-qa',
  commit,
  routeCount: pageRecords.length,
  viewportWidths: [320, 390],
  routes,
  locales: locales.map(({ code, label }) => ({ code, label })),
  pages: pageRecords,
  images: imageRecords,
  stylesheet,
  districtStylesheet
};

const page = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow,noarchive">
  <meta name="referrer" content="same-origin">
  <title>Kyoto responsive QA harness</title>
  <style>
    :root { color-scheme: light; font-family: system-ui, sans-serif; background: #f2f0ea; color: #202c36; }
    * { box-sizing: border-box; }
    body { margin: 0; min-width: 280px; }
    main { max-width: 1280px; margin: 0 auto; padding: clamp(16px, 3vw, 32px); }
    h1 { margin: 0 0 8px; font-size: clamp(1.55rem, 4vw, 2rem); }
    .intro { max-width: 76ch; margin: 0 0 20px; color: #4b5a64; line-height: 1.5; }
    .controls { display: grid; grid-template-columns: repeat(2, minmax(180px, 1fr)) auto; gap: 12px; align-items: end; }
    label { display: grid; gap: 6px; font-weight: 650; }
    select, button { min-height: 44px; border: 1px solid #697983; border-radius: 6px; background: #fff; color: inherit; font: inherit; padding: 8px 10px; }
    button { cursor: pointer; font-weight: 650; }
    button[aria-pressed="true"] { background: #183849; border-color: #183849; color: #fff; }
    :focus-visible { outline: 3px solid #b65325; outline-offset: 2px; }
    .width-controls { display: flex; flex-wrap: wrap; gap: 8px; }
    .width-controls span { border: 1px solid #87939a; border-radius: 999px; padding: 7px 12px; background: #fff; font-weight: 650; }
    .status { min-height: 1.5em; margin: 14px 0 8px; color: #384956; }
    .release { color: #56646d; font-size: .86rem; overflow-wrap: anywhere; }
    .viewport-rail { overflow-x: auto; padding: 6px 2px 18px; }
    .frames { display: flex; gap: 18px; width: max-content; margin: 0 auto; align-items: start; }
    .frame-card { padding: 10px; border: 1px solid #d1d5d2; border-radius: 8px; background: #fff; }
    .frame-card h2 { margin: 0 0 8px; font-size: .95rem; }
    iframe { display: block; height: 820px; border: 0; background: #fff; box-shadow: 0 5px 20px #202b3526; }
    @media (max-width: 740px) {
      main { padding: 16px 12px; }
      .controls { grid-template-columns: 1fr; }
      .frames { margin-left: 0; }
    }
  </style>
</head>
<body>
  <main>
    <h1>Kyoto responsive QA harness</h1>
    <p class="intro">Review the four Kyoto routes in all five published languages. Both previews load the selected route at fixed 320 and 390 CSS-pixel widths. The guide pages load from this preview origin so their navigation and controls remain usable.</p>
    <div class="controls">
      <label for="route">Guide
        <select id="route">${routes.map((route, index) => `<option value="${index}">${route.label}</option>`).join('')}</select>
      </label>
      <label for="locale">Language
        <select id="locale">${locales.map((locale) => `<option value="${locale.code}">${locale.label}</option>`).join('')}</select>
      </label>
      <div class="width-picker">
        <span><strong>Viewports shown</strong></span>
        <div class="width-controls" id="viewport-widths" role="group" aria-label="Both viewport widths shown">
          <span>320 px</span>
          <span>390 px</span>
        </div>
      </div>
    </div>
    <p class="status" id="status" role="status" aria-live="polite"></p>
    <p class="release" id="release" aria-live="polite">Loading build identity…</p>
    <div class="viewport-rail">
      <div class="frames">
        <section class="frame-card" aria-labelledby="wide320label"><h2 id="wide320label">320 CSS pixels</h2><iframe id="frame320" width="320" title="Kyoto hub, English, 320 CSS pixels wide"></iframe></section>
        <section class="frame-card" aria-labelledby="wide390label"><h2 id="wide390label">390 CSS pixels</h2><iframe id="frame390" width="390" title="Kyoto hub, English, 390 CSS pixels wide"></iframe></section>
      </div>
    </div>
  </main>
  <script type="application/json" id="qa-config">${JSON.stringify({ routes, locales })}</script>
  <script>
    const config = JSON.parse(document.querySelector('#qa-config').textContent);
    const routeSelect = document.querySelector('#route');
    const localeSelect = document.querySelector('#locale');
    const status = document.querySelector('#status');
    const frames = [[document.querySelector('#frame320'), 320], [document.querySelector('#frame390'), 390]];
    function updateFrames() {
      const route = config.routes[Number(routeSelect.value)];
      const locale = config.locales.find((item) => item.code === localeSelect.value);
      const path = locale.prefix + route.path;
      for (const [frame, width] of frames) {
        frame.style.width = width + 'px';
        frame.src = path;
        frame.title = route.label + ', ' + locale.label + ', ' + width + ' CSS pixels wide';
      }
      status.textContent = route.label + ' / ' + locale.label + ' / shown at 320 and 390 CSS pixels';
    }
    routeSelect.addEventListener('change', updateFrames);
    localeSelect.addEventListener('change', updateFrames);
    updateFrames();
    fetch('./release.json', { cache: 'no-store' }).then((response) => response.json()).then((release) => {
      document.querySelector('#release').textContent = 'Pages project ' + release.project + ' · branch ' + release.branch + ' · commit ' + release.commit;
    }).catch(() => { document.querySelector('#release').textContent = 'Build identity is unavailable.'; });
  </script>
</body>
</html>
`;

fs.mkdirSync(harnessDir, { recursive: true });
fs.writeFileSync(harnessPath, page, 'utf8');
fs.writeFileSync(releasePath, `${JSON.stringify(release, null, 2)}\n`, 'utf8');
console.log(`Generated preview-only Kyoto QA harness for ${pageRecords.length} localized routes and ${imageRecords.length} referenced images; source commit ${commit}.`);
