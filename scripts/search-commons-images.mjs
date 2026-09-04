const queries = process.argv.filter((argument) => argument.startsWith('--query=')).map((argument) => argument.slice(8));
if (!queries.length) throw new Error('Usage: node scripts/search-commons-images.mjs --query="place words" [--query="another"]');

function clean(value = '') {
  return String(value).replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
}

for (const query of queries) {
  const url = new URL('https://commons.wikimedia.org/w/api.php');
  url.search = new URLSearchParams({
    action: 'query', format: 'json', formatversion: '2', origin: '*', generator: 'search', gsrsearch: query,
    gsrnamespace: '6', gsrlimit: '20', prop: 'imageinfo', iiprop: 'url|size|mime|extmetadata', iiurlwidth: '900'
  }).toString();
  const response = await fetch(url, { headers: { 'User-Agent': 'TripDistill/1.0 (https://tripdistill.com/contact/)' } });
  if (!response.ok) throw new Error(`${query}: Commons API ${response.status}`);
  const payload = await response.json();
  console.log(`\n### ${query}`);
  for (const page of payload.query?.pages || []) {
    const info = page.imageinfo?.[0];
    if (!info || !/^image\/(?:jpeg|png)$/.test(info.mime) || info.width < 1000 || info.height < 600 || info.width / info.height < 1.05) continue;
    console.log(`${page.title} | ${info.width}x${info.height} | ${clean(info.extmetadata?.LicenseShortName?.value)} | ${clean(info.extmetadata?.Artist?.value)}`);
  }
}
