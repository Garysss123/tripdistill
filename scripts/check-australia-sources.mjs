import { australiaClusters, australiaCountrySources } from '../data/australia-guides.mjs';

const sources = [...new Map([...australiaCountrySources, ...australiaClusters.flatMap((cluster) => cluster.sources)].map(([url, label]) => [url, { url, label }])).values()];
const problems = [];
const warnings = [];
let cursor = 0;

async function worker() {
  while (cursor < sources.length) {
    const index = cursor++;
    const source = sources[index];
    try {
      const response = await fetch(source.url, {
        redirect: 'follow',
        signal: AbortSignal.timeout(20_000),
        headers: { 'User-Agent': 'TripDistill/1.0 (https://tripdistill.com/contact/)', Accept: 'text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8', Range: 'bytes=0-4095' }
      });
      const ok = response.status >= 200 && response.status < 400;
      const restricted = response.status === 401 || response.status === 403;
      console.log(`${ok ? 'OK' : restricted ? 'RESTRICTED' : 'FAIL'} ${response.status} ${source.url}${response.url !== source.url ? ` -> ${response.url}` : ''}`);
      if (restricted) warnings.push(`${response.status} automated access restricted: ${source.url}`);
      else if (!ok) problems.push(`${response.status} ${source.url} (${source.label})`);
      try { await response.body?.cancel(); } catch {}
    } catch (error) {
      const timeout = error.name === 'TimeoutError' || error.name === 'AbortError';
      console.log(`${timeout ? 'SLOW' : 'FAIL'} ERR ${source.url} — ${error.message}`);
      if (timeout) warnings.push(`Timed out during automated check: ${source.url}`);
      else problems.push(`ERR ${source.url} (${source.label}): ${error.message}`);
    }
  }
}

await Promise.all(Array.from({ length: 5 }, () => worker()));
if (problems.length) {
  console.error(`Australia source check failed with ${problems.length} problem(s):`);
  for (const problem of problems) console.error(`- ${problem}`);
  process.exitCode = 1;
} else {
  console.log(`Australia source check passed: ${sources.length} unique official references checked; ${warnings.length} restricted/slow endpoint warning(s), no broken response.`);
}
