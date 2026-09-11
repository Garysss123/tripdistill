import {usaRoutes} from '../data/usa-guides.mjs';
import {usaImageManifest} from '../data/usa-image-manifest.mjs';

// Read-only checks of the actual served artifact, not just the source tree.
const base=process.argv.find(a=>a.startsWith('--base='))?.slice(7)||'http://127.0.0.1:8877';
const englishOnly=process.argv.includes('--english-only');
const locales=englishOnly?[['en','']]:[['en',''],['zh-Hant','/zh'],['ja','/ja'],['ko','/ko'],['th','/th']];
const origin=new URL(base).origin;
const failures=[];
let successes=0;
async function get(route,allowComponentCanonical=false){
 let response=await fetch(new URL(route,origin),{redirect:'manual',signal:AbortSignal.timeout(30000)});
 // Pages canonicalizes HTML fragments to extensionless URLs. Content-page URLs
 // remain strict: only this exact same-origin component redirect is accepted.
 if(allowComponentCanonical&&[301,308].includes(response.status)){
  const target=new URL(response.headers.get('location')||'/',origin);
  const expected=new URL(route.replace(/\.html$/,''),origin);
  if(target.href===expected.href)response=await fetch(target,{redirect:'manual',signal:AbortSignal.timeout(30000)});
 }
 if(response.status!==200)throw Error(`HTTP ${response.status}${response.headers.get('location')?' → '+response.headers.get('location'):''}`);
 return response;
}
const jobs=locales.flatMap(([locale,prefix])=>usaRoutes.map(route=>({label:prefix+route,run:async()=>{
 const html=await(await get(prefix+route)).text();
 if(!html.includes(`lang="${locale}"`))throw Error('Wrong document language');
 if(!html.includes(`rel="canonical" href="https://tripdistill.com${prefix}${route}"`))throw Error('Wrong canonical or stale HTML');
 if(!html.includes('/css/usa.css?v=20260911-1')||!html.includes('/js/main.js?v=20260911-1'))throw Error('Stale USA/shared assets');
 if(!/<h1\b/.test(html)||!html.includes('"@type":"Article"'))throw Error('Missing page content/schema');
 if(route.startsWith('/usa/new-york/')&&(!html.includes('data-editorial-revision="nyc-20260911"')||!html.includes('/css/nyc-editorial.css?v=20260911-2')))throw Error('Old NYC template served instead of the editorial rewrite');
 for(const [slug,asset] of [['boston','boston'],['philadelphia','philadelphia'],['washington-dc','dc']])if(route.startsWith(`/usa/${slug}/`)&&(!html.includes(`data-editorial-revision="${asset}-20260911"`)||!html.includes(`/css/${asset}-editorial.css?v=20260911-1`)))throw Error(`Old ${slug} template served instead of the editorial rewrite`);
}})));
for(const [locale,prefix]of locales){
 jobs.push({label:`${locale} search`,run:async()=>{
  const records=await(await get(prefix+'/data/search-index.json')).json();
  const usa=records.filter(x=>x.url.startsWith(prefix+'/usa/'));
  if(usa.length!==97||new Set(usa.map(x=>x.url)).size!==97)throw Error(`Expected 97 unique search records; found ${usa.length}`);
 }});
 jobs.push({label:`${locale} sidebar`,run:async()=>{
  const html=await(await get(prefix+'/components/sidebar.html',true)).text();
  if(!html.includes('data-sidebar-id="north-america"')||!html.includes(`href="${prefix}/usa/new-york/lower-manhattan/"`))throw Error('Missing localized North America hierarchy');
 }});
}
for(const x of Object.values(usaImageManifest))jobs.push({label:x.src,run:async()=>{
 const response=await get(x.src);
 if(!response.headers.get('content-type')?.startsWith('image/webp'))throw Error('Wrong image MIME type');
 const bytes=new Uint8Array(await response.arrayBuffer());
 const ascii=(start,end)=>String.fromCharCode(...bytes.slice(start,end));
 if(ascii(0,4)!=='RIFF'||ascii(8,12)!=='WEBP'||bytes.length<1000)throw Error('Truncated or invalid WebP asset');
}});
jobs.push({label:'USA stylesheet',run:async()=>{const css=await(await get('/css/usa.css?v=20260911-1')).text();if(!css.includes('.us-hero')||!css.includes('max-width:650px'))throw Error('USA responsive CSS missing');}});
jobs.push({label:'NYC editorial stylesheet',run:async()=>{const css=await(await get('/css/nyc-editorial.css?v=20260911-2')).text();if(!css.includes('.ny-city-cover')||!css.includes('.ny-brooklyn-cover'))throw Error('NYC editorial layouts missing');}});
for(const [asset,selector] of [['boston','.bo-cover'],['philadelphia','.ph-cover'],['dc','.dc-city-cover']])jobs.push({label:asset+' editorial stylesheet',run:async()=>{const css=await(await get(`/css/${asset}-editorial.css?v=20260911-1`)).text();if(!css.includes(selector)||!css.includes('max-width:520px'))throw Error('Editorial/responsive CSS missing');}});
jobs.push({label:'NYC Grand Central photograph',run:async()=>{const r=await get('/assets/images/nyc-grand-central-concourse.webp');if(!r.headers.get('content-type')?.startsWith('image/webp'))throw Error('NYC context photograph missing');const b=new Uint8Array(await r.arrayBuffer());if(String.fromCharCode(...b.slice(8,12))!=='WEBP')throw Error('Invalid NYC image');}});
jobs.push({label:'sitemap dates',run:async()=>{
 const xml=await(await get('/sitemap.xml')).text();
 for(const[,prefix]of locales)for(const route of usaRoutes)if(!xml.includes(`<loc>https://tripdistill.com${prefix}${route}</loc><lastmod>2026-09-11</lastmod>`))throw Error(`Missing current ${prefix}${route}`);
}});
let cursor=0;
await Promise.all(Array.from({length:6},async()=>{while(cursor<jobs.length){const job=jobs[cursor++];try{await job.run();successes++;}catch(e){failures.push(`${job.label}: ${e.message}`);}}}));
console.log(JSON.stringify({origin,routes:usaRoutes.length*locales.length,checks:jobs.length,successes,failures},null,2));
if(failures.length)process.exitCode=1;
