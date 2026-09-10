import {usaHubs,usaGuides} from '../data/usa-guides.mjs';
const urls=[...new Set([...usaHubs.map(x=>x.source),...usaGuides.map(x=>x.source)])];
let cursor=0;const failures=[];
await Promise.all(Array.from({length:5},async()=>{while(cursor<urls.length){const url=urls[cursor++];try{const r=await fetch(url,{signal:AbortSignal.timeout(25000)});const html=await r.text();const title=html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g,' ').slice(0,100)||'';console.log(r.status,url,title);if(r.status===404||r.status===410)failures.push(url);}catch(e){console.log('UNVERIFIED',url,e.message)}}}));
console.log('Checked',urls.length,'sources; dead links',failures.length);if(failures.length)process.exitCode=1;
