import { italyCentralCampaniaClusters } from '../data/italy-central-campania-guides.mjs';
import { italyCentralNortheastClusters } from '../data/italy-central-northeast-guides.mjs';
import { italyNorthwestAdriaticClusters } from '../data/italy-northwest-adriatic-guides.mjs';
import { italySouthIslandsClusters } from '../data/italy-south-islands-guides.mjs';

const italyCountrySources = [
  ['https://www.italia.it/en', 'Italia.it — official national tourism portal'],
  ['https://www.italia.it/en/italy/practical-information/how-to-travel-around-italy', 'Italia.it — official travel-around-Italy guidance'],
  ['https://www.trenitalia.com/en.html', 'Trenitalia — official national and regional rail planning'],
  ['https://www.it-alert.gov.it/en/how-it-works/', 'IT-alert — official public warning information']
];
const italyClusters = [
  ...italyCentralCampaniaClusters,
  ...italyCentralNortheastClusters,
  ...italyNorthwestAdriaticClusters,
  ...italySouthIslandsClusters
];
const italyGuides = italyClusters.flatMap((cluster) => cluster.guides);

const sources = [...new Map([
  ...italyCountrySources,
  ...italyClusters.flatMap((cluster) => cluster.sources),
  ...italyGuides.flatMap((guide) => guide.sources)
].map(([url, label]) => [url, { url, label }])).values()];
const problems = [];
const warnings = [];
let cursor = 0;

const restrictedStatuses = new Set([401, 403, 405, 406, 416, 418, 429, 451]);
const transientStatuses = new Set([408, 425, 500, 502, 503, 504, 520, 521, 522, 523, 524]);

function visibleText(html = '') {
  return String(html)
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:nbsp|amp|quot|apos);|&#\d+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchSource(url, ranged = true) {
  const headers = {
    'User-Agent': 'TripDistill/1.0 (https://tripdistill.com/contact/)',
    Accept: 'text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8'
  };
  if (ranged) headers.Range = 'bytes=0-16383';
  return fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(20_000), headers });
}

async function worker() {
  while (cursor < sources.length) {
    const source = sources[cursor++];
    try {
      let response = await fetchSource(source.url, true);
      if (response.status === 404 || response.status === 410 || response.status === 416) {
        try { await response.body?.cancel(); } catch {}
        response = await fetchSource(source.url, false);
      }

      const status = response.status;
      const broken = status === 404 || status === 410;
      const restricted = restrictedStatuses.has(status);
      const transient = transientStatuses.has(status);
      const ok = status >= 200 && status < 400;
      const contentType = response.headers.get('content-type') || '';
      let sample = '';
      if (/text\/html|application\/xhtml\+xml/i.test(contentType)) {
        try { sample = await response.text(); } catch {}
      } else {
        try { await response.body?.cancel(); } catch {}
      }
      const jsOnly = ok && /text\/html|application\/xhtml\+xml/i.test(contentType)
        && /<script\b/i.test(sample) && visibleText(sample).length < 80;
      const state = broken ? 'BROKEN' : restricted ? 'RESTRICTED' : transient ? 'SLOW' : jsOnly ? 'JS-SHELL' : ok ? 'OK' : 'FAIL';
      console.log(`${state} ${status} ${source.url}${response.url !== source.url ? ` -> ${response.url}` : ''}`);

      if (broken) problems.push(`${status} ${source.url} (${source.label})`);
      else if (restricted) warnings.push(`${status} automated access restricted: ${source.url}`);
      else if (transient) warnings.push(`${status} transient or slow endpoint: ${source.url}`);
      else if (jsOnly) warnings.push(`JavaScript-only or thin automated response requires manual review: ${source.url}`);
      else if (!ok) problems.push(`${status} ${source.url} (${source.label})`);
    } catch (error) {
      const uncertain = error.name === 'TimeoutError' || error.name === 'AbortError' || error instanceof TypeError;
      console.log(`${uncertain ? 'SLOW' : 'FAIL'} ERR ${source.url} — ${error.message}`);
      if (uncertain) warnings.push(`Automated check could not establish a reliable response: ${source.url}`);
      else problems.push(`ERR ${source.url} (${source.label}): ${error.message}`);
    }
  }
}

await Promise.all(Array.from({ length: 8 }, () => worker()));
if (problems.length) {
  console.error(`Italy source check failed with ${problems.length} confirmed problem(s):`);
  for (const problem of problems) console.error(`- ${problem}`);
  console.error(`${warnings.length} restricted, slow or JavaScript-only endpoint warning(s) were reported separately.`);
  process.exitCode = 1;
} else {
  console.log(`Italy source check passed: ${sources.length} unique official references checked; ${warnings.length} restricted, slow or JavaScript-only endpoint warning(s), no confirmed broken response.`);
}
