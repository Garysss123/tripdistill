import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(import.meta.dirname, '..');
const distRoot = path.join(projectRoot, 'dist');
const relativeOutput = path.join('qa', 'tokyo-responsive', 'index.html');
const outputPath = path.join(distRoot, relativeOutput);
const sitemapPath = path.join(distRoot, 'sitemap.xml');

// Run only after `npm run build`. The regular build removes and recreates dist,
// and build-dist.mjs does not copy this generated QA-only artifact. The normal
// deploy script never invokes this command.
if (!fs.existsSync(path.join(distRoot, 'sitemap.xml'))) {
  throw new Error('Build dist first with `npm run build`; no dist/sitemap.xml found.');
}

const sitemap = fs.readFileSync(sitemapPath, 'utf8');
if (sitemap.includes('/qa/tokyo-responsive/')) {
  throw new Error('The Tokyo QA harness must not be included in the sitemap.');
}

const locales = [
  { code: 'en', label: 'English', prefix: '' },
  { code: 'zh-Hant', label: '繁體中文', prefix: '/zh' },
  { code: 'ja', label: '日本語', prefix: '/ja' },
  { code: 'ko', label: '한국어', prefix: '/ko' },
  { code: 'th', label: 'ไทย', prefix: '/th' }
];
const routes = [
  { path: '/japan/tokyo/', label: 'Tokyo hub' },
  { path: '/japan/tokyo/ikebukuro/', label: 'Ikebukuro' },
  { path: '/japan/tokyo/odaiba-toyosu/', label: 'Odaiba & Toyosu' },
  { path: '/japan/tokyo/roppongi-azabu/', label: 'Roppongi & Azabu' }
];

for (const locale of locales) {
  for (const route of routes) {
    const builtPage = path.join(distRoot, `${locale.prefix}${route.path}`, 'index.html');
    if (!fs.existsSync(builtPage)) {
      throw new Error(`Missing built route for ${locale.code}: ${locale.prefix}${route.path}`);
    }
  }
}

const page = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow,noarchive">
  <meta name="referrer" content="same-origin">
  <title>Tokyo responsive QA harness</title>
  <style>
    :root { color-scheme: light; font-family: system-ui, sans-serif; background: #f4f2ec; color: #202b35; }
    * { box-sizing: border-box; }
    body { margin: 0; min-width: 280px; }
    main { max-width: 1080px; margin: 0 auto; padding: clamp(16px, 4vw, 36px); }
    h1 { margin: 0 0 8px; font-size: clamp(1.5rem, 4vw, 2rem); }
    .intro { margin: 0 0 22px; color: #495763; line-height: 1.5; }
    .controls { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; align-items: end; }
    label { display: grid; gap: 6px; font-weight: 650; }
    select, button { min-height: 44px; border: 1px solid #667480; border-radius: 6px; background: #fff; color: inherit; font: inherit; padding: 8px 10px; }
    .width-controls { display: flex; flex-wrap: wrap; gap: 8px; }
    button { cursor: pointer; font-weight: 650; }
    button[aria-pressed="true"] { background: #183849; border-color: #183849; color: #fff; }
    :focus-visible { outline: 3px solid #b65325; outline-offset: 2px; }
    .status { min-height: 1.5em; margin: 16px 0 8px; color: #384956; }
    .viewport-rail { overflow-x: auto; padding: 4px 0 16px; }
    .frame-wrap { width: max-content; max-width: none; margin: 0 auto; }
    iframe { display: block; width: 320px; height: 800px; border: 0; background: #fff; box-shadow: 0 8px 28px #202b3526; }
    @media (max-width: 600px) {
      main { padding: 16px 12px; }
      .controls { grid-template-columns: 1fr; }
      .frame-wrap { margin-left: 0; }
    }
  </style>
</head>
<body>
  <main>
    <h1>Tokyo responsive QA harness</h1>
    <p class="intro">Preview four Tokyo guides in each published language at a fixed 320 or 390 CSS-pixel viewport. The guide loads from this preview origin so its menus, language links, and other controls remain usable.</p>
    <div class="controls">
      <label for="route">Guide
        <select id="route">
          ${routes.map((route, index) => `<option value="${index}">${route.label}</option>`).join('\n          ')}
        </select>
      </label>
      <label for="locale">Language
        <select id="locale">
          ${locales.map((locale) => `<option value="${locale.code}">${locale.label}</option>`).join('\n          ')}
        </select>
      </label>
      <div class="width-picker">
        <span><strong>Viewport width</strong></span>
        <div class="width-controls" role="group" aria-label="Viewport width">
          <button type="button" data-width="320" aria-pressed="true">320 px</button>
          <button type="button" data-width="390" aria-pressed="false">390 px</button>
        </div>
      </div>
    </div>
    <p class="status" id="status" role="status" aria-live="polite"></p>
    <div class="viewport-rail">
      <div class="frame-wrap"><iframe id="guide" title="Tokyo hub, English, 320 CSS pixels wide"></iframe></div>
    </div>
  </main>
  <script>
    const routes = ${JSON.stringify(routes)};
    const locales = ${JSON.stringify(locales)};
    const routeSelect = document.querySelector('#route');
    const localeSelect = document.querySelector('#locale');
    const frame = document.querySelector('#guide');
    const status = document.querySelector('#status');
    const widthButtons = [...document.querySelectorAll('[data-width]')];
    let width = 320;
    function updateFrame() {
      const route = routes[Number(routeSelect.value)];
      const locale = locales.find((item) => item.code === localeSelect.value);
      const path = locale.prefix + route.path;
      frame.style.width = width + 'px';
      frame.src = path;
      frame.title = route.label + ', ' + locale.label + ', ' + width + ' CSS pixels wide';
      status.textContent = route.label + ' · ' + locale.label + ' · ' + width + ' CSS px';
    }
    for (const button of widthButtons) {
      button.addEventListener('click', () => {
        width = Number(button.dataset.width);
        for (const candidate of widthButtons) candidate.setAttribute('aria-pressed', String(candidate === button));
        updateFrame();
      });
    }
    routeSelect.addEventListener('change', updateFrame);
    localeSelect.addEventListener('change', updateFrame);
    updateFrame();
  </script>
</body>
</html>
`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, page, 'utf8');
console.log(`Generated preview-only QA harness: dist/${relativeOutput.replaceAll(path.sep, '/')}`);
