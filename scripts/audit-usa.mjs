import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {parse} from 'parse5';
import {usaHubs, usaGuides, usaRoutes} from '../data/usa-guides.mjs';
import {usaImageManifest} from '../data/usa-image-manifest.mjs';

const root=path.resolve(import.meta.dirname,'..');
const failures=[];
const englishOnly=process.argv.includes('--english-only');
const locales=[['en',''],['zh-Hant','/zh'],['ja','/ja'],['ko','/ko'],['th','/th']];
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const check=(condition,message)=>{if(!condition)failures.push(message);};
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
function nodes(html){const out=[];function visit(n){out.push(n);for(const c of n.childNodes||[])visit(c);}visit(parse(html));return out;}
const attr=(n,name)=>n.attrs?.find(a=>a.name===name)?.value;
const text=n=>n.nodeName==='#text'?n.value:['script','style'].includes(n.tagName)?'':(n.childNodes||[]).map(text).join(' ');
const mapImage=g=>usaImageManifest[g.hubSlug+'/'+g.slug];
check(usaHubs.length===24&&usaGuides.length===72&&usaRoutes.length===97,'Expected 24 hubs, 72 guides, 97 routes');
check(new Set(usaRoutes).size===97,'Duplicate USA routes');
for(const field of ['intro','route','practical'])check(new Set(usaGuides.map(g=>g[field])).size===72,`Duplicate local-guide ${field} copy`);
check(new Set(usaHubs.map(h=>h.style)).size>=20,'Regional visual identities have been lost');
check(new Set(usaGuides.map(g=>mapImage(g)?.commonsTitle)).size===72,'USA photos are not unique');
for(const g of usaGuides){
 const i=mapImage(g);
 check(Boolean(i?.creator&&i?.license&&i?.remoteSha1),`${g.url}: incomplete image provenance`);
 if(!i)continue;
 check(/^https:\/\/commons\.wikimedia\.org\//.test(i.source),`${g.url}: missing original Commons source`);
 check(/^(CC0|Public domain|CC BY(?:-SA)? [1-4](?:\.\d)?(?: [a-z]{2})?)$/i.test(i.license),`${g.url}: license does not allow verified commercial reuse`);
 const file=path.join(root,i.src.replace(/^\//,''));
 const probe=spawnSync('ffprobe',['-v','error','-select_streams','v:0','-show_entries','stream=width,height','-of','csv=p=0:s=x',file],{encoding:'utf8'});
 check(probe.status===0&&probe.stdout.trim()==='1600x1066',`${g.url}: invalid image dimensions or missing image`);
 check(g.route.length>100&&g.practical.length>100&&g.intro.length>100,`${g.url}: incomplete visit guidance`);
}
const titles=new Set(),descriptions=new Set();
for(const route of usaRoutes){
 const html=read(route.slice(1)+'index.html');
 const dom=nodes(html), title=text(dom.find(n=>n.tagName==='title'));
 const description=attr(dom.find(n=>n.tagName==='meta'&&attr(n,'name')==='description'),'content');
 check(title&&!titles.has(title),`${route}: missing or duplicate title`);titles.add(title);
 check(description&&description.length>=120&&description.length<=170&&!descriptions.has(description),`${route}: invalid or duplicate description`);descriptions.add(description);
 check(html.includes('/css/usa.css?v=20260911-1')&&html.includes('/js/main.js?v=20260911-1'),`${route}: stale assets`);
 check(dom.filter(n=>n.tagName==='h1').length===1,`${route}: expected one H1`);
 check(html.includes('"@type":"Article"')&&html.includes('"@type":"BreadcrumbList"'),`${route}: structured data missing`);
 check(!/\b(?:TODO|lorem ipsum|coming soon|placeholder copy)\b/i.test(text(dom[0])),`${route}: placeholder copy`);
 check(dom.some(n=>attr(n,'class')?.includes('ad-slot')),`${route}: ad placeholder missing`);
 for(const n of dom.filter(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json')){try{JSON.parse((n.childNodes||[]).map(n=>n.value||'').join(''));}catch{failures.push(`${route}: malformed JSON-LD`);}}
 const hub=usaHubs.find(h=>route.startsWith('/usa/'+h.slug+'/'));
 const photos=hub?hub.guides:usaHubs.map(h=>h.guides[0]);
 for(const g of photos){const i=mapImage(g);check(html.includes(i.source)&&html.includes(escape(i.creator))&&html.includes(i.license),`${route}: missing visible photo credit for ${g.slug}`);}
 const cards=dom.filter(n=>n.tagName==='a'&&(attr(n,'class')||'').split(' ').includes('us-card'));
 check(cards.length===(route==='/usa/'?24:usaGuides.some(g=>g.url===route)?2:3),`${route}: incorrect destination card count`);
 for(const [,prefix] of locales){
  check(html.includes(`hreflang="${prefix==='/zh'?'zh-Hant':prefix?prefix.slice(1):'en'}" href="https://tripdistill.com${prefix}${route}"`),`${route}: missing reciprocal language link ${prefix}`);
  if(englishOnly&&prefix)continue;
  const file=path.join(root,(prefix+route).slice(1),'index.html');
  check(fs.existsSync(file),`${prefix+route}: localized page missing`);
  if(fs.existsSync(file)){
   const localized=fs.readFileSync(file,'utf8');
   check(localized.includes(`rel="canonical" href="https://tripdistill.com${prefix}${route}"`),`${prefix+route}: canonical mismatch`);
   for(const g of photos){const i=mapImage(g);check(localized.includes(i.source)&&localized.includes(i.license),`${prefix+route}: missing localized photo source/license ${g.slug}`);}
   for(const card of cards){const href=attr(card,'href');check(localized.includes(`href="${prefix}${href}"`),`${prefix+route}: card does not retain localized route ${href}`);}
   check(localized.includes('https://creativecommons.org/'),`${prefix+route}: missing license reference link`);
  }
 }
}
const sitemap=read('sitemap.xml');
for(const route of usaRoutes)for(const [,prefix]of locales)check(sitemap.includes(`<url><loc>https://tripdistill.com${prefix}${route}</loc><lastmod>2026-09-11</lastmod>`),`${prefix+route}: stale sitemap entry`);
const records=JSON.parse(read('data/search-index.json')).filter(x=>x.url.startsWith('/usa/'));
check(records.length===97&&new Set(records.map(x=>x.url)).size===97,'USA search index parity');
for(const r of usaRoutes)check(records.some(x=>x.url===r),`${r}: missing search entry`);
check(read('scripts/build-dist.mjs').includes("'usa'"),'USA absent from build allowlist');
check(read('components/sidebar.html').includes('data-sidebar-id="north-america"'),'North America navigation missing');
check(read('components/header.html').includes('data-nav-key="usa"'),'USA header navigation missing');
check(read('components/footer.html').includes('<!-- USA_FOOTER_START -->'),'USA footer navigation missing');
check(read('index.html').includes('<!-- USA_HOME_START -->')&&read('index.html').includes('<!-- USA_HOME_CREDIT_START -->'),'USA home card/credit missing');
if(failures.length){console.error(failures.join('\n'));console.error(`USA audit: ${failures.length} failures`);process.exitCode=1;}
else console.log(`USA audit passed: 24 hubs, 72 focused guides, 97 English / 485 five-language routes, 72 credited images${englishOnly?' (localized file checks deferred)':''}.`);
