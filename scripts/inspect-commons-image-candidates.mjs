import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const queries = process.argv.slice(2).filter(Boolean);
if (!queries.length) throw new Error('Pass one or more quoted Commons search queries.');
const output = fs.mkdtempSync(path.join(os.tmpdir(), 'trip-commons-candidates-'));
const allowed = /^(?:CC0|Public domain|CC BY(?:-SA)? [1-4](?:\.\d)?(?: [a-z]{2})?)$/i;
const rejected = /\b(?:map|flag|logo|diagram|chart|locator|coat of arms|seal|poster|advertisement|plaque|satellite|street sign|painting|engraving|drawing|illustration|postcard|model|miniature)\b/i;

function clean(value = '') {
  return String(value).replace(/<br\s*\/?>/gi, ', ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

async function api(query) {
  const url = new URL('https://commons.wikimedia.org/w/api.php');
  url.search = new URLSearchParams({
    action: 'query', format: 'json', formatversion: '2', origin: '*', generator: 'search',
    gsrsearch: query, gsrnamespace: '6', gsrlimit: '40', prop: 'imageinfo',
    iiprop: 'url|size|mime|extmetadata', iiurlwidth: '960'
  }).toString();
  const response = await fetch(url, { headers: { 'User-Agent': 'TripDistill/1.0 (https://tripdistill.com/contact/)' }, signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`${response.status}: ${url}`);
  return response.json();
}

for (const [queryIndex, query] of queries.entries()) {
  const payload = await api(query);
  const candidates = (payload.query?.pages || [])
    .sort((a, b) => (a.index || 999) - (b.index || 999))
    .map((page) => ({ page, info: page.imageinfo?.[0] }))
    .filter(({ page, info }) => {
      if (!info || !['image/jpeg', 'image/png'].includes(info.mime) || rejected.test(page.title)) return false;
      const license = clean(info.extmetadata?.LicenseShortName?.value);
      const ratio = info.width / info.height;
      return allowed.test(license) && info.width >= 1000 && info.height >= 600 && ratio >= 1.05 && ratio <= 2.8;
    })
    .slice(0, 9);
  if (!candidates.length) {
    console.log(`NO CANDIDATES: ${query}`);
    continue;
  }
  const files = [];
  for (const [index, candidate] of candidates.entries()) {
    const file = path.join(output, `${queryIndex}-${index}.jpg`);
    const response = await fetch(candidate.info.thumburl || candidate.info.url, { signal: AbortSignal.timeout(30000) });
    fs.writeFileSync(file, Buffer.from(await response.arrayBuffer()));
    files.push(file);
  }
  const inputs = files.flatMap((file) => ['-i', file]);
  const filters = files.map((_, index) => `[${index}:v]scale=320:213:force_original_aspect_ratio=increase,crop=320:213,setsar=1[v${index}]`).join(';')
    + ';' + files.map((_, index) => `[v${index}]`).join('')
    + `xstack=inputs=${files.length}:layout=`
    + files.map((_, index) => `${(index % 3) * 320}_${Math.floor(index / 3) * 213}`).join('|')
    + '[out]';
  const sheet = path.join(output, `query-${queryIndex}.jpg`);
  const result = spawnSync('ffmpeg', ['-v', 'error', ...inputs, '-filter_complex', filters, '-map', '[out]', '-frames:v', '1', '-y', sheet], { encoding: 'utf8' });
  if (result.status) throw new Error(result.stderr);
  console.log(`QUERY ${queryIndex}: ${query}`);
  console.log(sheet);
  console.log(candidates.map(({ page, info }, index) => `${index + 1}: ${page.title} · ${clean(info.extmetadata?.LicenseShortName?.value)}`).join('\n'));
}
