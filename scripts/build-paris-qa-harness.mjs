import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { parse } from 'parse5';

const root = path.resolve(import.meta.dirname, '..');
const distRoot = path.join(root, 'dist');
const outputDir = path.join(distRoot, 'qa', 'paris-responsive');
const outputPath = path.join(outputDir, 'index.html');
const branch = execFileSync('git', ['branch', '--show-current'], { cwd: root, encoding: 'utf8' }).trim();
const sourceCommit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();
const sourceTreeClean = execFileSync('git', ['status', '--porcelain'], { cwd: root, encoding: 'utf8' }).trim().length === 0;

if (!fs.existsSync(path.join(distRoot, 'sitemap.xml'))) {
  throw new Error('Build dist first with `npm run build`; no dist/sitemap.xml found.');
}
if (branch !== 'paris-qa') throw new Error(`Refusing to create Paris QA harness from branch ${branch}; expected paris-qa.`);

const sitemap = fs.readFileSync(path.join(distRoot, 'sitemap.xml'), 'utf8');
if (sitemap.includes('/qa/paris-responsive/')) throw new Error('Paris QA harness must not be included in the sitemap.');

const locales = [
  { code: 'en', label: 'English', prefix: '' },
  { code: 'zh-Hant', label: '繁體中文', prefix: '/zh' },
  { code: 'ja', label: '日本語', prefix: '/ja' },
  { code: 'ko', label: '한국어', prefix: '/ko' },
  { code: 'th', label: 'ไทย', prefix: '/th' }
];
const routes = [
  { path: '/france/paris/', label: 'Paris hub' },
  { path: '/france/paris/seine-islands-latin-quarter/', label: 'Seine Islands & Latin Quarter' },
  { path: '/france/paris/louvre-tuileries-opera/', label: 'Louvre, Tuileries & Opera' },
  { path: '/france/paris/eiffel-invalides-montparnasse/', label: 'Eiffel Tower & Invalides' }
];
const viewportWidths = [320, 390];
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');

function walk(node, visit) {
  visit(node);
  for (const child of node.childNodes || []) walk(child, visit);
}

function attr(node, name) {
  return node.attrs?.find((item) => item.name === name)?.value || '';
}

function localAssetPath(urlPath) {
  const pathname = new URL(urlPath, 'https://tripdistill.com').pathname;
  if (!pathname.startsWith('/') || pathname.includes('..')) throw new Error(`Unsafe asset path: ${urlPath}`);
  const filePath = path.resolve(distRoot, `.${pathname}`);
  if (!filePath.startsWith(distRoot + path.sep)) throw new Error(`Asset escaped dist: ${urlPath}`);
  return filePath;
}

const routeRecords = [];
const assetPaths = new Set();
for (const locale of locales) {
  for (const route of routes) {
    const localePath = `${locale.prefix}${route.path}`;
    const pagePath = path.join(distRoot, localePath.replace(/^\//, ''), 'index.html');
    if (!fs.existsSync(pagePath)) throw new Error(`Missing built route ${locale.code}: ${localePath}`);
    const bytes = fs.readFileSync(pagePath);
    const html = bytes.toString('utf8');
    const document = parse(html);
    const assets = [];
    walk(document, (node) => {
      if (node.tagName === 'link' && attr(node, 'rel').toLowerCase().split(/\s+/).includes('stylesheet')) {
        assets.push(attr(node, 'href'));
      }
      if ((node.tagName === 'img' || node.tagName === 'source') && attr(node, 'src')) assets.push(attr(node, 'src'));
      if ((node.tagName === 'img' || node.tagName === 'source') && attr(node, 'srcset')) {
        for (const candidate of attr(node, 'srcset').split(',')) assets.push(candidate.trim().split(/\s+/)[0]);
      }
    });
    for (const asset of assets) if (asset.startsWith('/')) assetPaths.add(new URL(asset, 'https://tripdistill.com').pathname);
    routeRecords.push({
      locale: locale.code,
      path: route.path,
      label: route.label,
      urlPath: localePath,
      bytes: bytes.byteLength,
      sha256: sha256(bytes)
    });
  }
}

const assets = [...assetPaths].sort().map((urlPath) => {
  const assetPath = localAssetPath(urlPath);
  if (!fs.existsSync(assetPath)) throw new Error(`Missing local route asset ${urlPath}`);
  const bytes = fs.readFileSync(assetPath);
  return { path: urlPath, bytes: bytes.byteLength, sha256: sha256(bytes) };
});
const manifest = {
  project: 'trip',
  branch,
  sourceCommit,
  sourceTreeClean,
  viewportWidths,
  routes,
  locales: locales.map(({ code, label, prefix }) => ({ code, label, prefix })),
  routeCount: routeRecords.length,
  routesByLocale: Object.fromEntries(locales.map((locale) => [locale.code, routes.length])),
  maxHtmlBytes: 160_000,
  maxSingleImageBytes: 700_000,
  maxParisStylesBytes: 350_000,
  pages: routeRecords,
  assets
};

const page = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow,noarchive">
  <meta name="referrer" content="same-origin">
  <title>Paris responsive QA harness</title>
  <style>
    :root { color-scheme: light; font-family: system-ui, sans-serif; background: #f2f0eb; color: #1e2931; }
    * { box-sizing: border-box; }
    body { margin: 0; min-width: 280px; }
    main { max-width: 1280px; margin: 0 auto; padding: clamp(16px, 3vw, 34px); }
    h1 { margin: 0 0 8px; font-size: clamp(1.5rem, 3vw, 2rem); }
    .intro { max-width: 76ch; margin: 0 0 20px; color: #4a5963; line-height: 1.55; }
    .controls { display: grid; grid-template-columns: minmax(220px, 1fr) minmax(180px, .7fr) auto; gap: 12px; align-items: end; }
    label { display: grid; gap: 6px; font-weight: 650; }
    select { min-height: 44px; min-width: 0; border: 1px solid #71808a; border-radius: 6px; background: white; color: inherit; font: inherit; padding: 8px 10px; }
    :focus-visible { outline: 3px solid #a14323; outline-offset: 3px; }
    .status { min-height: 1.5em; margin: 14px 0 6px; color: #3d4d56; }
    .preview-rail { overflow-x: auto; padding: 6px 2px 18px; }
    .frames { display: flex; width: max-content; gap: 18px; margin: 0 auto; align-items: start; }
    figure { margin: 0; }
    figcaption { margin: 0 0 8px; font-weight: 700; }
    iframe { display: block; height: min(78vh, 940px); min-height: 660px; border: 0; background: #fff; box-shadow: 0 7px 24px #1e293128; }
    .meta { margin-top: 16px; color: #59666e; font: 12px/1.45 ui-monospace, monospace; overflow-wrap: anywhere; }
    @media (max-width: 700px) { main { padding: 14px 10px; } .controls { grid-template-columns: 1fr; } .frames { margin-left: 0; } }
  </style>
</head>
<body>
  <main>
    <a href="#main-content">Skip to controls</a>
    <section id="main-content" aria-labelledby="page-title">
      <h1 id="page-title">Paris responsive QA harness</h1>
      <p class="intro">Review the Paris hub and three in-city guides in all five published languages at paired 320 px and 390 px CSS viewport widths. The page frames use the current preview origin, so links, menus and language controls stay available for manual keyboard review.</p>
      <div class="controls">
        <label for="route">Guide
          <select id="route">${routes.map((route, index) => `<option value="${index}">${route.label}</option>`).join('')}</select>
        </label>
        <label for="locale">Language
          <select id="locale">${locales.map((locale) => `<option value="${locale.code}">${locale.label}</option>`).join('')}</select>
        </label>
        <p class="status" id="status" role="status" aria-live="polite"></p>
      </div>
      <div class="preview-rail"><div class="frames">
        <figure><figcaption>320 CSS px</figcaption><iframe id="frame-320" title="Paris hub, English, 320 CSS pixels wide"></iframe></figure>
        <figure><figcaption>390 CSS px</figcaption><iframe id="frame-390" title="Paris hub, English, 390 CSS pixels wide"></iframe></figure>
      </div></div>
      <p class="meta" id="release"></p>
    </section>
  </main>
  <script id="qa-manifest" type="application/json">${JSON.stringify(manifest).replaceAll('<', '\\u003c')}</script>
  <script>
    const manifest = JSON.parse(document.querySelector('#qa-manifest').textContent);
    const routeSelect = document.querySelector('#route');
    const localeSelect = document.querySelector('#locale');
    const status = document.querySelector('#status');
    const frames = manifest.viewportWidths.map((width) => ({ width, element: document.querySelector('#frame-' + width) }));
    function updateFrames() {
      const route = manifest.routes[Number(routeSelect.value)];
      const locale = manifest.locales.find((item) => item.code === localeSelect.value);
      for (const item of frames) {
        item.element.style.width = item.width + 'px';
        item.element.src = locale.prefix + route.path;
        item.element.title = route.label + ', ' + locale.label + ', ' + item.width + ' CSS pixels wide';
      }
      status.textContent = route.label + ' · ' + locale.label + ' · paired 320 / 390 CSS px';
    }
    routeSelect.addEventListener('change', updateFrames);
    localeSelect.addEventListener('change', updateFrames);
    updateFrames();
    document.querySelector('#release').textContent = 'Preview project ' + manifest.project + ' · branch ' + manifest.branch + ' · source ' + manifest.sourceCommit + ' · ' + (manifest.sourceTreeClean ? 'clean source tree' : 'working tree included before release commit');
  </script>
</body>
</html>
`;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, page, 'utf8');
console.log(`Generated paired-width Paris QA harness: ${path.relative(root, outputPath).replaceAll(path.sep, '/')}`);
console.log(`${manifest.routeCount} route-language pages, ${assets.length} unique local image/stylesheet assets; source ${sourceCommit}${sourceTreeClean ? '' : ' (working tree not clean)'}.`);
