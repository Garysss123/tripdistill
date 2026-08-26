import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';

const browserPath = process.env.TRIPDISTILL_EDGE || 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const baseUrl = process.env.TRIPDISTILL_BASE_URL || 'http://127.0.0.1:8877';
const port = Number(process.env.TRIPDISTILL_CDP_PORT || 9333);
const runId = new Date().toISOString().replace(/[:.]/g, '-');
const outputDir = path.join(os.tmpdir(), `tripdistill-visual-audit-${runId}-${process.pid}`);
const profileDir = path.join(os.tmpdir(), `tripdistill-edge-profile-${process.pid}`);
fs.mkdirSync(outputDir, { recursive: true });

const allRoutes = [
  ['home', '/'],
  ['about', '/about/'],
  ['contact', '/contact/'],
  ['privacy-policy', '/privacy-policy/'],
  ['terms-of-use', '/terms-of-use/'],
  ['japan', '/japan/'],
  ['hokkaido', '/japan/hokkaido/'],
  ['sapporo', '/japan/hokkaido/sapporo/'],
  ['otaru-shakotan', '/japan/hokkaido/otaru-shakotan/'],
  ['hakodate-onuma', '/japan/hokkaido/hakodate-onuma/'],
  ['furano-biei', '/japan/hokkaido/furano-biei/'],
  ['asahikawa-daisetsuzan', '/japan/hokkaido/asahikawa-daisetsuzan/'],
  ['niseko-yoichi', '/japan/hokkaido/niseko-yoichi/'],
  ['noboribetsu-lake-toya', '/japan/hokkaido/noboribetsu-lake-toya/'],
  ['kushiro-lake-akan', '/japan/hokkaido/kushiro-lake-akan/'],
  ['abashiri-shiretoko', '/japan/hokkaido/abashiri-shiretoko/'],
  ['kyoto', '/japan/kyoto/'],
  ['gion-pontocho', '/japan/kyoto/gion-pontocho/'],
  ['kiyomizudera-higashiyama', '/japan/kyoto/kiyomizudera-higashiyama/'],
  ['arashiyama-sagano', '/japan/kyoto/arashiyama-sagano/'],
  ['fushimi-inari-sake', '/japan/kyoto/fushimi-inari-sake-district/'],
  ['central-kyoto-nishiki', '/japan/kyoto/central-kyoto-nishiki/'],
  ['kyoto-station-south', '/japan/kyoto/kyoto-station-south/'],
  ['kinkakuji-northwest', '/japan/kyoto/kinkakuji-northwest/'],
  ['philosophers-path-okazaki', '/japan/kyoto/philosophers-path-okazaki/'],
  ['tokyo', '/japan/tokyo/'],
  ['shinjuku', '/japan/tokyo/shinjuku/'],
  ['shibuya-harajuku', '/japan/tokyo/shibuya-harajuku/'],
  ['asakusa-ueno', '/japan/tokyo/asakusa-ueno/'],
  ['tokyo-station-ginza', '/japan/tokyo/tokyo-station-ginza/'],
  ['akihabara-kanda', '/japan/tokyo/akihabara-kanda/'],
  ['roppongi-azabu', '/japan/tokyo/roppongi-azabu/'],
  ['odaiba-toyosu', '/japan/tokyo/odaiba-toyosu/'],
  ['ikebukuro', '/japan/tokyo/ikebukuro/'],
  ['osaka', '/japan/osaka/'],
  ['namba', '/japan/osaka/namba/'],
  ['umeda', '/japan/osaka/umeda/'],
  ['tennoji-shinsekai', '/japan/osaka/tennoji-shinsekai/'],
  ['osaka-castle', '/japan/osaka/osaka-castle-area/'],
  ['osaka-bay', '/japan/osaka/osaka-bay/'],
  ['south-korea', '/south-korea/'],
  ['seoul', '/south-korea/seoul/'],
  ['jongno-gwanghwamun', '/south-korea/seoul/jongno-gwanghwamun/'],
  ['bukchon-seochon', '/south-korea/seoul/bukchon-seochon/'],
  ['myeongdong-namsan', '/south-korea/seoul/myeongdong-namsan/'],
  ['hongdae-yeonnam', '/south-korea/seoul/hongdae-yeonnam/'],
  ['gangnam-jamsil', '/south-korea/seoul/gangnam-jamsil/'],
  ['itaewon-hannam', '/south-korea/seoul/itaewon-hannam/'],
  ['seongsu-seoul-forest', '/south-korea/seoul/seongsu-seoul-forest/'],
  ['yeouido-hangang', '/south-korea/seoul/yeouido-hangang/'],
  ['busan', '/south-korea/busan/'],
  ['nampo-jagalchi', '/south-korea/busan/nampo-jagalchi/'],
  ['gamcheon-songdo', '/south-korea/busan/gamcheon-songdo/'],
  ['haeundae-dongbaek', '/south-korea/busan/haeundae-dongbaek/'],
  ['gwangalli-millak', '/south-korea/busan/gwangalli-millak/'],
  ['seomyeon-jeonpo', '/south-korea/busan/seomyeon-jeonpo/'],
  ['yeongdo-taejongdae', '/south-korea/busan/yeongdo-taejongdae/'],
  ['haedong-yonggungsa-gijang', '/south-korea/busan/haedong-yonggungsa-gijang/'],
  ['dadaepo-amisan', '/south-korea/busan/dadaepo-amisan/'],
  ['gyeongju', '/south-korea/gyeongju/'],
  ['daereungwon-hwangnidan-gil', '/south-korea/gyeongju/daereungwon-hwangnidan-gil/'],
  ['wolseong-donggung-wolji', '/south-korea/gyeongju/wolseong-donggung-wolji/'],
  ['bulguksa-seokguram', '/south-korea/gyeongju/bulguksa-seokguram/'],
  ['namsan', '/south-korea/gyeongju/namsan/'],
  ['bomun-lake', '/south-korea/gyeongju/bomun-lake/'],
  ['yangdong-village', '/south-korea/gyeongju/yangdong-village/'],
  ['jeju', '/south-korea/jeju/'],
  ['jeju-city-yongduam', '/south-korea/jeju/jeju-city-yongduam/'],
  ['aewol-hyeopjae', '/south-korea/jeju/aewol-hyeopjae/'],
  ['hallasan', '/south-korea/jeju/hallasan/'],
  ['seogwipo-jeongbang', '/south-korea/jeju/seogwipo-jeongbang/'],
  ['jungmun-andeok', '/south-korea/jeju/jungmun-andeok/'],
  ['moseulpo-gapado', '/south-korea/jeju/moseulpo-gapado/'],
  ['seongsan-udo', '/south-korea/jeju/seongsan-udo/'],
  ['woljeongri-gimnyeong', '/south-korea/jeju/woljeongri-gimnyeong/'],
  ['thailand', '/thailand/'],
  ['bangkok', '/thailand/bangkok/'],
  ['rattanakosin-grand-palace', '/thailand/bangkok/rattanakosin-grand-palace/'],
  ['banglamphu-phra-athit', '/thailand/bangkok/banglamphu-phra-athit/'],
  ['yaowarat-talat-noi', '/thailand/bangkok/yaowarat-talat-noi/'],
  ['siam-ratchaprasong', '/thailand/bangkok/siam-ratchaprasong/'],
  ['sukhumvit-thong-lo', '/thailand/bangkok/sukhumvit-thong-lo/'],
  ['silom-sathorn', '/thailand/bangkok/silom-sathorn/'],
  ['thonburi-khlong-bang-luang', '/thailand/bangkok/thonburi-khlong-bang-luang/'],
  ['chatuchak-ari', '/thailand/bangkok/chatuchak-ari/'],
  ['chiang-mai', '/thailand/chiang-mai/'],
  ['old-city-moat', '/thailand/chiang-mai/old-city-moat/'],
  ['nimman-university', '/thailand/chiang-mai/nimman-university/'],
  ['doi-suthep-wat-pha-lat', '/thailand/chiang-mai/doi-suthep-wat-pha-lat/'],
  ['chang-moi-warorot', '/thailand/chiang-mai/chang-moi-warorot/'],
  ['wat-ket-ping-river', '/thailand/chiang-mai/wat-ket-ping-river/'],
  ['mae-rim-mae-sa', '/thailand/chiang-mai/mae-rim-mae-sa/'],
  ['mae-kampong', '/thailand/chiang-mai/mae-kampong/'],
  ['doi-inthanon', '/thailand/chiang-mai/doi-inthanon/'],
  ['andaman', '/thailand/andaman/'],
  ['phuket-old-town-south', '/thailand/andaman/phuket-old-town-south/'],
  ['phang-nga-ko-yao', '/thailand/andaman/phang-nga-ko-yao/'],
  ['krabi-railay', '/thailand/andaman/krabi-railay/'],
  ['phi-phi-islands', '/thailand/andaman/phi-phi-islands/'],
  ['ko-lanta', '/thailand/andaman/ko-lanta/'],
  ['trang-islands', '/thailand/andaman/trang-islands/'],
  ['ko-lipe-tarutao', '/thailand/andaman/ko-lipe-tarutao/'],
  ['similan-surin', '/thailand/andaman/similan-surin/']
];

const requestedRoutes = new Set((process.env.TRIPDISTILL_ROUTE_FILTER || '').split(',').map((item) => item.trim()).filter(Boolean));
const routes = requestedRoutes.size ? allRoutes.filter(([slug]) => requestedRoutes.has(slug)) : allRoutes;
if (!routes.length) throw new Error(`TRIPDISTILL_ROUTE_FILTER did not match a known route: ${[...requestedRoutes].join(', ')}`);

const allViewports = [
  ['desktop', 1440, 1000, false],
  ['mobile', 390, 844, true]
];
const requestedViewports = new Set((process.env.TRIPDISTILL_VIEWPORT_FILTER || '').split(',').map((item) => item.trim()).filter(Boolean));
const viewports = requestedViewports.size ? allViewports.filter(([name]) => requestedViewports.has(name)) : allViewports;
if (!viewports.length) throw new Error(`TRIPDISTILL_VIEWPORT_FILTER did not match desktop or mobile: ${[...requestedViewports].join(', ')}`);

if (!fs.existsSync(browserPath)) throw new Error(`Microsoft Edge not found at ${browserPath}`);

const browser = spawn(browserPath, [
  '--headless=new',
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profileDir}`,
  'about:blank'
], { stdio: 'ignore', windowsHide: true });

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function waitForDebugger() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (response.ok) return;
    } catch {}
    await delay(100);
  }
  throw new Error('Chrome DevTools endpoint did not become ready');
}

class CdpClient {
  constructor(url) {
    this.socket = new WebSocket(url);
    this.nextId = 1;
    this.pending = new Map();
    this.listeners = new Map();
  }

  async open() {
    await new Promise((resolve, reject) => {
      this.socket.addEventListener('open', resolve, { once: true });
      this.socket.addEventListener('error', reject, { once: true });
    });
    this.socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (message.id) {
        const pending = this.pending.get(message.id);
        if (!pending) return;
        this.pending.delete(message.id);
        if (message.error) pending.reject(new Error(message.error.message));
        else pending.resolve(message.result);
        return;
      }
      const listeners = this.listeners.get(message.method) || [];
      for (const listener of listeners) listener(message.params);
    });
  }

  send(method, params = {}) {
    const id = this.nextId++;
    this.socket.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }

  once(method) {
    return new Promise((resolve) => {
      const listener = (params) => {
        const list = this.listeners.get(method) || [];
        this.listeners.set(method, list.filter((item) => item !== listener));
        resolve(params);
      };
      this.listeners.set(method, [...(this.listeners.get(method) || []), listener]);
    });
  }

  on(method, listener) {
    this.listeners.set(method, [...(this.listeners.get(method) || []), listener]);
  }
}

async function evaluate(client, expression) {
  const result = await client.send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true
  });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || 'Browser evaluation failed');
  return result.result.value;
}

async function navigate(client, url) {
  const loaded = client.once('Page.loadEventFired');
  await client.send('Page.navigate', { url });
  await loaded;
  return evaluate(client, `new Promise((resolve) => {
    const started = Date.now();
    const timer = setInterval(() => {
      const ready = document.querySelector('#layout-header .site-header') &&
        document.querySelector('#layout-sidebar nav') &&
        document.querySelector('#layout-footer .site-footer');
      if (ready || Date.now() - started > 8000) {
        clearInterval(timer);
        resolve(Boolean(ready));
      }
    }, 80);
  })`);
}

function sanitizeErrors(errors) {
  const browserOrAdFrameNoise = [
    'Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist.',
    "Framing 'https://www.google.com/' violates the following report-only Content Security Policy directive"
  ];
  return [...new Set(errors.filter(Boolean).filter((error) => !browserOrAdFrameNoise.some((noise) => error.includes(noise))))];
}

await waitForDebugger();
const targetResponse = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent('about:blank')}`, { method: 'PUT' });
if (!targetResponse.ok) throw new Error(`Could not create Chrome target: HTTP ${targetResponse.status}`);
const target = await targetResponse.json();
const client = new CdpClient(target.webSocketDebuggerUrl);
await client.open();
await client.send('Page.enable');
await client.send('Page.bringToFront');
await client.send('Runtime.enable');
await client.send('Log.enable');

const runtimeErrors = [];
client.on('Runtime.exceptionThrown', (event) => {
  const details = event.exceptionDetails || {};
  const message = details.exception?.description || details.text || 'Runtime exception';
  const source = details.url ? ` (${details.url}:${Number(details.lineNumber || 0) + 1})` : '';
  runtimeErrors.push(`${message}${source}`);
});
client.on('Log.entryAdded', (event) => {
  if (event.entry?.level === 'error') {
    const source = event.entry.url ? ` (${event.entry.url}:${Number(event.entry.lineNumber || 0) + 1})` : '';
    runtimeErrors.push(`${event.entry.text}${source}`);
  }
});

const report = [];

for (const [viewportName, width, height, mobile] of viewports) {
  await client.send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile,
    screenWidth: width,
    screenHeight: height
  });
  await client.send('Emulation.setTouchEmulationEnabled', { enabled: mobile, maxTouchPoints: mobile ? 5 : 1 });

  for (const [slug, route] of routes) {
    runtimeErrors.length = 0;
    const componentsReady = await navigate(client, `${baseUrl}${route}`);
    await delay(250);
    await evaluate(client, `new Promise((resolve) => {
      const images = [...document.images];
      images.forEach((image) => { image.loading = 'eager'; });
      const pending = images.filter((image) => !image.complete);
      if (!pending.length) {
        resolve(true);
        return;
      }
      let remaining = pending.length;
      const finish = () => {
        remaining -= 1;
        if (remaining <= 0) resolve(true);
      };
      pending.forEach((image) => {
        image.addEventListener('load', finish, { once: true });
        image.addEventListener('error', finish, { once: true });
      });
      setTimeout(() => resolve(false), 8000);
    })`);
    await evaluate(client, `(async () => {
      const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
      const step = Math.max(500, Math.floor(innerHeight * .75));
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        scrollTo(0, y);
        await wait(45);
      }
      scrollTo(0, 0);
      await wait(200);
      return true;
    })()`);

    const state = await evaluate(client, `(() => {
      const root = document.documentElement;
      const brokenImages = [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src);
      const activeLinks = [...document.querySelectorAll('[data-nav-key].active')].map((link) => link.textContent.trim());
      const header = document.querySelector('.site-header')?.getBoundingClientRect();
      const componentErrors = [...document.querySelectorAll('.status-card[role="alert"]')].map((item) => item.textContent.trim());
      return {
        title: document.title,
        h1: document.querySelector('h1')?.textContent.trim() || '',
        viewportWidth: innerWidth,
        scrollWidth: root.scrollWidth,
        overflowX: root.scrollWidth > innerWidth + 1,
        brokenImages,
        activeLinks,
        componentErrors,
        headerHeight: header ? Math.round(header.height) : 0,
        footerLoaded: Boolean(document.querySelector('.site-footer')),
        mainTextLength: document.querySelector('main')?.innerText.length || 0
      };
    })()`);

    const metrics = await client.send('Page.getLayoutMetrics');
    const content = metrics.cssContentSize || metrics.contentSize;
    const screenshot = await client.send('Page.captureScreenshot', {
      format: 'jpeg',
      quality: 86,
      fromSurface: true,
      captureBeyondViewport: true,
      clip: {
        x: 0,
        y: 0,
        width: Math.ceil(content.width),
        height: Math.min(Math.ceil(content.height), 14000),
        scale: 1
      }
    });
    const screenshotPath = path.join(outputDir, `${slug}-${viewportName}.jpg`);
    fs.writeFileSync(screenshotPath, screenshot.data, 'base64');
    await client.send('HeapProfiler.collectGarbage').catch(() => {});

    report.push({
      route,
      viewport: viewportName,
      componentsReady,
      ...state,
      runtimeErrors: sanitizeErrors(runtimeErrors),
      screenshot: screenshotPath
    });
  }
}

const interactionClient = client;
const skipInteractions = process.env.TRIPDISTILL_SKIP_INTERACTIONS === '1';
let interactions = { skipped: true };
if (!skipInteractions) {
  await interactionClient.send('Page.bringToFront');
  await interactionClient.send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true,
    screenWidth: 390,
    screenHeight: 844
  });
  await delay(300);
  await navigate(interactionClient, `${baseUrl}/thailand/andaman/`);
  await delay(400);
  interactions = await evaluate(interactionClient, `(async () => {
  const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.style.transition = 'none';
  document.querySelector('[data-menu-toggle]')?.click();
  await wait(100);
  const sidebarRect = sidebar?.getBoundingClientRect();
  const sidebarStyle = sidebar ? getComputedStyle(sidebar) : null;
  const menu = {
    opened: document.body.classList.contains('menu-open'),
    expanded: document.querySelector('[data-menu-toggle]')?.getAttribute('aria-expanded'),
    viewportWidth: innerWidth,
    mobileMedia: matchMedia('(max-width: 1080px)').matches,
    selectorMatch: Boolean(document.querySelector('body.menu-open .sidebar')),
    visible: sidebarRect ? sidebarRect.right > 0 && sidebarRect.left < innerWidth : false,
    rect: sidebarRect ? { left: sidebarRect.left, right: sidebarRect.right, width: sidebarRect.width } : null,
    transform: sidebarStyle?.transform || '',
    display: sidebarStyle?.display || '',
    active: document.querySelector('#layout-sidebar .active')?.textContent.trim() || ''
  };
  document.querySelector('[data-menu-close]')?.click();
  await wait(450);
  document.querySelector('[data-search-toggle]')?.click();
  const input = document.querySelector('#site-search');
  input.value = 'Andaman';
  input.dispatchEvent(new Event('input', { bubbles: true }));
  await wait(500);
  const results = document.querySelector('#search-results');
  const resultRect = results?.getBoundingClientRect();
  const search = {
    open: document.body.classList.contains('search-open'),
    count: results?.querySelectorAll('.search-result').length || 0,
    first: results?.querySelector('.search-result strong')?.textContent.trim() || '',
    withinViewport: resultRect ? resultRect.left >= 0 && resultRect.right <= innerWidth : false
  };
  document.querySelector('.faq-list summary')?.click();
  const faq = { opened: Boolean(document.querySelector('.faq-list details[open]')) };
  return { menu, search, faq };
  })()`);
}

const failures = report.filter((item) => !item.componentsReady || item.overflowX || item.brokenImages.length || item.componentErrors.length || item.runtimeErrors.length || !item.footerLoaded || !item.h1);
const result = {
  outputDir,
  pagesChecked: report.length,
  failures,
  interactions,
  report
};

fs.writeFileSync(path.join(outputDir, 'report.json'), JSON.stringify(result, null, 2));
console.log(JSON.stringify({
  outputDir,
  pagesChecked: report.length,
  failureCount: failures.length,
  interactions,
  pageSummary: report.map(({ route, viewport, overflowX, brokenImages, runtimeErrors, activeLinks, mainTextLength }) => ({
    route,
    viewport,
    overflowX,
    brokenImages: brokenImages.length,
    runtimeErrors: runtimeErrors.length,
    activeLinks,
    mainTextLength
  }))
}, null, 2));

await interactionClient.send('Browser.close').catch(() => {});
await delay(250);
if (!browser.killed) browser.kill();
const interactionFailed = !skipInteractions && (!interactions.menu.opened || interactions.menu.expanded !== 'true' || !interactions.menu.visible || interactions.menu.active !== 'Andaman islands guide' || interactions.search.count < 1 || interactions.search.first !== 'Andaman Islands Travel Guide' || !interactions.search.withinViewport || !interactions.faq.opened);
if (failures.length || interactionFailed) {
  process.exitCode = 1;
}
