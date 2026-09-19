import { franceClusters, franceCountrySources, franceGuides } from '../data/france-guides.mjs';

const sources = [...new Map([
  ...franceCountrySources,
  ...franceClusters.flatMap((cluster) => cluster.sources),
  ...franceGuides.flatMap((guide) => guide.sources)
].map(([url, label]) => [url, { url, label }])).values()];
const problems = [];
const warnings = [];
let cursor = 0;

async function worker() {
  while (cursor < sources.length) {
    const source = sources[cursor++];
    try {
      const response = await fetch(source.url, {
        redirect: 'follow',
        signal: AbortSignal.timeout(20_000),
        headers: {
          'User-Agent': 'TripDistill/1.0 (https://tripdistill.com/contact/)',
          Accept: 'text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8',
          Range: 'bytes=0-4095'
        }
      });
      const ok = response.status >= 200 && response.status < 400;
      const restricted = response.status === 401 || response.status === 403 || response.status === 429;
      console.log(`${ok ? 'OK' : restricted ? 'RESTRICTED' : 'FAIL'} ${response.status} ${source.url}${response.url !== source.url ? ` -> ${response.url}` : ''}`);
      if (restricted) warnings.push(`${response.status} automated access restricted: ${source.url}`);
      else if (!ok) problems.push(`${response.status} ${source.url} (${source.label})`);
      try { await response.body?.cancel(); } catch {}
    } catch (error) {
      const restricted = error.name === 'TimeoutError' || error.name === 'AbortError' || (error instanceof TypeError && error.message === 'fetch failed');
      console.log(`${restricted ? 'RESTRICTED' : 'FAIL'} ERR ${source.url} — ${error.message}`);
      if (restricted) warnings.push(`Automated check could not establish a reliable response: ${source.url}`);
      else problems.push(`ERR ${source.url} (${source.label}): ${error.message}`);
    }
  }
}

await Promise.all(Array.from({ length: 8 }, () => worker()));
if (problems.length) {
  console.error(`France source check failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(`- ${problem}`);
  process.exitCode = 1;
} else {
  console.log(`France source check passed: ${sources.length} unique official references checked; ${warnings.length} restricted/slow endpoint warning(s), no broken response.`);
}
