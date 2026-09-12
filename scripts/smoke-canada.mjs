const args = process.argv.slice(2);
const baseArg = args.find((arg) => arg.startsWith('--base='));
const base = (baseArg ? baseArg.slice('--base='.length) : 'http://127.0.0.1:4173').replace(/\/$/, '');
const routes = [
  '/canada/',
  '/canada/vancouver-north-shore/',
  '/canada/vancouver-north-shore/downtown-stanley-granville/',
  '/canada/banff-lake-louise/',
  '/canada/banff-lake-louise/lake-louise-moraine/',
  '/canada/toronto/',
  '/canada/montreal/plateau-mile-end/',
  '/canada/quebec-city-charlevoix/old-quebec/',
  '/canada/halifax-nova-scotia/',
  '/canada/newfoundland-labrador/gros-morne/',
  '/canada/whitehorse-kluane/kluane-haines-junction/',
  '/canada/yellowknife-great-slave/aurora-dark-sky/'
];

const failures = [];
for (const route of routes) {
  try {
    const response = await fetch(base + route, { redirect: 'manual' });
    const html = await response.text();
    if (response.status !== 200) failures.push(`${route}: HTTP ${response.status}`);
    if (!/<h1[ >]/i.test(html)) failures.push(`${route}: missing H1`);
    if (!html.includes('/css/canada.css?v=20260912-1')) failures.push(`${route}: Canada stylesheet missing`);
    if (!html.includes('Official sources and photo credits')) failures.push(`${route}: visible sources section missing`);
    if (!html.includes('data-ad-slot')) failures.push(`${route}: ad placeholder missing`);
    if (!html.includes('https://commons.wikimedia.org/')) failures.push(`${route}: image provenance missing`);
  } catch (error) {
    failures.push(`${route}: ${error.message}`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Canada smoke passed against ${base}: ${routes.length} representative country, hub and child routes.`);
}
