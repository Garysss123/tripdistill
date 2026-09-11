import fs from 'node:fs';
// Optional live network diagnostic. A blocked automated client is not a broken source.
const names=['boston','philadelphia','dc','new-england','chicago','seattle','portland-oregon',...(process.argv.includes('--drafts')?['san-francisco','los-angeles','san-diego','sierra-parks']:[])];
const urls=[...new Set(names.flatMap(n=>[...fs.readFileSync(new URL('./'+n+'-editorial.mjs',import.meta.url),'utf8').matchAll(/https:\/\/[^'"\s<>]+/g)].map(m=>m[0])))];
let i=0;const results=[];
await Promise.all(Array.from({length:5},async()=>{while(i<urls.length){const url=urls[i++];try{const r=await fetch(url,{signal:AbortSignal.timeout(15000)});results.push({url,status:r.status,final:r.url});await r.body?.cancel();}catch(e){results.push({url,error:e.message});}}}));
console.log(JSON.stringify(results,null,2));
if(results.some(r=>r.status===404||r.status===410))process.exitCode=1;
