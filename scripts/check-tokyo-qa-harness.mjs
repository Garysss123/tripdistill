import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const root = path.resolve(import.meta.dirname, '..');
const relativeHarness = path.join('qa', 'tokyo-responsive', 'index.html');
const harnessPath = path.join(root, 'dist', relativeHarness);
const liveOriginArg = process.argv.find((argument) => argument.startsWith('--url='))?.slice('--url='.length);
const liveOrigin = (liveOriginArg || 'https://tokyo-qa.trip-68e.pages.dev').replace(/\/+$/, '');
const harnessUrl = `${liveOrigin}/qa/tokyo-responsive/`;
const sitemapUrl = `${liveOrigin}/sitemap.xml`;
const expectedRoutes = [
  ['/japan/tokyo/', 'Tokyo hub'],
  ['/japan/tokyo/ikebukuro/', 'Ikebukuro'],
  ['/japan/tokyo/odaiba-toyosu/', 'Odaiba & Toyosu'],
  ['/japan/tokyo/roppongi-azabu/', 'Roppongi & Azabu'],
  ['/japan/tokyo/shinjuku/', 'Shinjuku'],
  ['/japan/tokyo/shibuya-harajuku/', 'Shibuya & Harajuku'],
  ['/japan/tokyo/asakusa-ueno/', 'Asakusa & Ueno'],
  ['/japan/tokyo/tokyo-station-ginza/', 'Tokyo Station & Ginza'],
  ['/japan/tokyo/akihabara-kanda/', 'Akihabara & Kanda']
];

function walk(node, visit) {
  visit(node);
  for (const child of node.childNodes || []) walk(child, visit);
}

function nodeText(node) {
  if (node.nodeName === '#text') return node.value;
  return (node.childNodes || []).map(nodeText).join('');
}

function attribute(node, name) {
  return node.attrs?.find((item) => item.name === name)?.value || '';
}

function assertHarness(html, label) {
  const document = parse(html);
  const robotsMeta = [];
  const routeSelects = [];
  walk(document, (node) => {
    if (node.tagName === 'meta' && attribute(node, 'name').toLowerCase() === 'robots') robotsMeta.push(attribute(node, 'content'));
    if (node.tagName === 'select' && attribute(node, 'id') === 'route') routeSelects.push(node);
  });
  if (robotsMeta.length !== 1 || !robotsMeta[0].split(',').map((value) => value.trim().toLowerCase()).includes('noindex')) {
    throw new Error(`${label}: expected exactly one robots meta containing noindex`);
  }
  if (!routeSelects.length) throw new Error(`${label}: missing #route selector`);
  const options = [];
  walk(routeSelects[0], (node) => {
    if (node.tagName === 'option') options.push({ value: attribute(node, 'value'), label: nodeText(node).trim() });
  });
  if (options.length !== 9) throw new Error(`${label}: #route has ${options.length} options, expected 9`);
  for (let index = 0; index < expectedRoutes.length; index += 1) {
    const option = options[index];
    if (option.value !== String(index) || option.label !== expectedRoutes[index][1]) {
      throw new Error(`${label}: route option ${index + 1} is ${JSON.stringify(option)}, expected ${JSON.stringify({ value: String(index), label: expectedRoutes[index][1] })}`);
    }
  }
  const routeData = html.match(/const routes = (\[[\s\S]*?\]);/);
  if (!routeData) throw new Error(`${label}: missing embedded route definitions`);
  const parsedRoutes = JSON.parse(routeData[1]);
  const paths = parsedRoutes.map((route) => route.path);
  if (paths.length !== expectedRoutes.length || expectedRoutes.some(([routePath]) => !paths.includes(routePath))) {
    throw new Error(`${label}: embedded route list does not contain exactly the nine Tokyo routes`);
  }
}

async function fetchNoStore(url) {
  return fetch(url, { cache: 'no-store', redirect: 'manual', signal: AbortSignal.timeout(15000) });
}

if (!process.argv.includes('--live')) {
  if (!fs.existsSync(harnessPath)) throw new Error(`Missing ${path.relative(root, harnessPath)}; run npm run build:tokyo-qa-harness after npm run build.`);
  assertHarness(fs.readFileSync(harnessPath, 'utf8'), 'dist harness');
  const sitemap = fs.readFileSync(path.join(root, 'dist', 'sitemap.xml'), 'utf8');
  if (sitemap.includes('/qa/tokyo-responsive/')) throw new Error('The preview harness must not be listed in the sitemap.');
  console.log('Tokyo QA harness release check passed locally: noindex, all nine route options, correct route data, and absent from sitemap.');
} else {
  let response;
  for (let attempt = 1; attempt <= 12; attempt += 1) {
    response = await fetchNoStore(`${harnessUrl}?release-check=${Date.now()}`);
    if (response.status === 200) break;
    if (attempt === 12) throw new Error(`Live harness returned HTTP ${response.status} after ${attempt} attempts.`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
  assertHarness(await response.text(), 'live tokyo-qa alias');
  const sitemapResponse = await fetchNoStore(`${sitemapUrl}?release-check=${Date.now()}`);
  if (sitemapResponse.status !== 200) throw new Error(`Live sitemap returned HTTP ${sitemapResponse.status}.`);
  if ((await sitemapResponse.text()).includes('/qa/tokyo-responsive/')) throw new Error('The live preview sitemap must not list the QA harness.');
  console.log(`Tokyo QA harness release check passed live: HTTP 200, noindex, nine route options; ${harnessUrl}`);
}