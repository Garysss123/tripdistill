import fs from 'node:fs';
// Optional live network diagnostic. A blocked automated client is not a broken source.
const available=['boston','philadelphia','dc','new-england','chicago','seattle','portland-oregon','san-francisco','los-angeles','san-diego','sierra-parks','las-vegas','utah-parks','arizona','colorado',...(process.argv.includes('--drafts')?['yellowstone-tetons','new-orleans','atlanta','texas']:[])];
const requested=process.argv.find(a=>a.startsWith('--clusters='))?.slice(11).split(',').filter(Boolean);
if(requested?.some(n=>!available.includes(n)))throw Error('Unknown source-check cluster; enable --drafts for draft briefs');
const names=requested||available;
const urls=[...new Set(names.flatMap(n=>[...fs.readFileSync(new URL('./'+n+'-editorial.mjs',import.meta.url),'utf8').matchAll(/https:\/\/[^'"\s<>]+/g)].map(m=>m[0].replaceAll('&amp;','&'))))];
let i=0;const results=[];
await Promise.all(Array.from({length:5},async()=>{while(i<urls.length){const url=urls[i++];try{const r=await fetch(url,{signal:AbortSignal.timeout(15000)});results.push({url,status:r.status,final:r.url});await r.body?.cancel();}catch(e){results.push({url,error:e.message});}}}));
console.log(JSON.stringify(process.argv.includes('--verbose')?results:{checked:results.length,successful:results.filter(r=>r.status>=200&&r.status<400).length,issues:results.filter(r=>r.error||r.status>=400)},null,2));
if(results.some(r=>r.status===404||r.status===410))process.exitCode=1;
