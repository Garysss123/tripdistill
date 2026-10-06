import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dist=path.join(root,'dist');
const harnessDir=path.join(dist,'qa','hokkaido-responsive');
const manifestPath=path.join(harnessDir,'release.json');
const htmlPath=path.join(harnessDir,'index.html');
const live=process.argv.includes('--live');
const origin=(process.argv.find(x=>x.startsWith('--url='))?.slice(6)||'https://hokkaido-qa.trip-68e.pages.dev').replace(/\/+$/,'');
const expectedRoutes=[
 {path:'/japan/hokkaido/',label:'Hokkaido'},
 {path:'/japan/hokkaido/sapporo/',label:'Sapporo'},
 {path:'/japan/hokkaido/otaru-shakotan/',label:'Otaru & Shakotan'},
 {path:'/japan/hokkaido/hakodate-onuma/',label:'Hakodate & Onuma'}
];
const locales=[
 {code:'en',label:'English',prefix:''},
 {code:'zh-Hant',label:'Traditional Chinese',prefix:'/zh'},
 {code:'ja',label:'Japanese',prefix:'/ja'},
 {code:'ko',label:'Korean',prefix:'/ko'},
 {code:'th',label:'Thai',prefix:'/th'}
];
function assert(ok,msg){if(!ok)throw new Error(msg)}
function hash(bytes){return createHash('sha256').update(bytes).digest('hex')}
function escapeRegExp(value){return value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
function attr(node,name){return node.attrs?.find(x=>x.name===name)?.value||''}
function walk(node,visit){visit(node);for(const child of node.childNodes||[])walk(child,visit)}
function find(node,predicate){if(predicate(node))return node;for(const child of node.childNodes||[]){const found=find(child,predicate);if(found)return found}return null}
function textOf(node){if(node.nodeName==='#text')return node.value;if(node.tagName==='br')return ' ';return(node.childNodes||[]).map(textOf).join(' ')}
function localPath(urlPath){return path.join(dist,decodeURIComponent(urlPath).replace(/^\//,''))}
assert(fs.existsSync(manifestPath)&&fs.existsSync(htmlPath),'Build the Hokkaido harness first.');
const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
const harness=fs.readFileSync(htmlPath,'utf8');
const sitemap=fs.readFileSync(path.join(dist,'sitemap.xml'),'utf8');
const sitemapUrls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
assert(manifest.project==='trip'&&manifest.branch==='hokkaido-qa','Manifest must identify the existing trip project and hokkaido-qa branch.');
assert(manifest.routeCount===20,'Manifest must include four routes in five locales (20 pages).');
assert(isDeepStrictEqual(manifest.routes,expectedRoutes),'Manifest route inventory changed.');
assert(isDeepStrictEqual(manifest.locales,locales.map(({code,label})=>({code,label}))),'Manifest locale inventory changed.');
assert(isDeepStrictEqual(manifest.viewportWidths,[320,390]),'Harness must retain the 320 and 390 CSS-pixel frames.');
assert(sitemapUrls.length===4560&&new Set(sitemapUrls).size===4560,'Public sitemap must retain 4,560 unique URLs.');
assert(!sitemap.includes('/qa/hokkaido-responsive/'),'Harness must stay outside the public sitemap.');
assert(harness.includes('name="robots" content="noindex,nofollow,noarchive"'),'Harness must be explicitly noindex.');
assert(harness.includes('width="320"')&&harness.includes('width="390"'),'Harness must contain paired 320/390 pixel frames.');
const css=fs.readFileSync(path.join(root,'css','site.css'),'utf8');
const shrinkRule=css.match(/((?:body\[data-page="(?:hokkaido|sapporo|otaru-shakotan|hakodate-onuma)"\]\s*,?\s*){2,})\{\s*min-width:\s*0\s*;/);
assert(shrinkRule,'Missing grouped shrinkable body rule for the four Hokkaido pages.');
for(const page of ['hokkaido','sapporo','otaru-shakotan','hakodate-onuma'])assert(shrinkRule[1].includes(`body[data-page="${page}"]`),`Grouped shrinkable body rule omits ${page}.`);
assert(/@media\s*\(max-width:\s*390px\)[\s\S]*?body\[data-page="hokkaido"\][\s\S]*?min-width:\s*0/.test(css),'Hokkaido 390px responsive shrink guard is missing.');
assert(/\.hokkaido-live-notice\s*\{[^}]*min-width:0/.test(css)||css.includes('body[data-page="hakodate-onuma"] .hokkaido-live-notice { min-width:0;'),'Hakodate live access note needs a shrink rule.');
assert(!/body\[data-page="(?:hokkaido|sapporo|otaru-shakotan|hakodate-onuma)"\][^{]*\{[^}]*overflow-x:\s*hidden/.test(css),'Hokkaido width guard must not conceal horizontal overflow.');
const inventory=JSON.parse(fs.readFileSync(path.join(root,'reports','photo-license-inventory.json'),'utf8'));
const pages=[];const imageSet=new Set();const cssPaths=new Set();let visiblePhotoCount=0,maxHtmlBytes=0,maxInitialBytes=0,maxHeroBytes=0;
for(const locale of locales){for(const route of expectedRoutes){
 const urlPath=locale.prefix+route.path;
 const sitemapURL='https://tripdistill.com'+urlPath;assert(sitemapUrls.includes(sitemapURL),`Sitemap is missing ${urlPath}.`);const sitemapDate=sitemap.match(new RegExp(`<url><loc>${escapeRegExp(sitemapURL)}</loc><lastmod>([^<]+)</lastmod>`));assert(sitemapDate?.[1]==='2026-10-06',`${urlPath} should have the route-specific 2026-10-06 lastmod.`);
 const record=manifest.pages.find(x=>x.locale===locale.code&&x.path===urlPath);
 assert(record,`Manifest is missing ${locale.code} ${urlPath}.`);
 const file=path.join(localPath(urlPath),'index.html');assert(fs.existsSync(file),`Built route is missing ${urlPath}.`);
 const bytes=fs.readFileSync(file);assert(hash(bytes)===record.sha256,`Built route hash mismatch: ${urlPath}.`);
 const doc=parse(bytes.toString('utf8'));let lang='',city='',h1=0,title='',description='',canonical='',heroPath='';const ids=new Set();const refs=[];let emptyAlt=false;const alternates=new Map();
 const imagePaths=[];const criticalAssets=[];const linkTargets=[];let externalCriticalAsset=false;
 walk(doc,node=>{if(node.tagName==='html')lang=attr(node,'lang');if(node.tagName==='body')city=attr(node,'data-city');if(node.tagName==='title')title=textOf(node).trim();if(node.tagName==='meta'&&attr(node,'name').toLowerCase()==='description')description=attr(node,'content').trim();if(node.tagName==='h1')h1++;const id=attr(node,'id');if(id){assert(!ids.has(id),`${urlPath} repeats id ${id}.`);ids.add(id)}if(attr(node,'aria-labelledby'))refs.push(...attr(node,'aria-labelledby').split(/\s+/));if(node.tagName==='img'){const alt=attr(node,'alt').trim();if(!alt)emptyAlt=true;const src=attr(node,'src');if(src.startsWith('/assets/images/')){imagePaths.push(src);imageSet.add(decodeURIComponent(new URL(src,'https://tripdistill.com'+urlPath).pathname));if(attr(node,'fetchpriority')==='high'){assert(!heroPath,`${urlPath} has more than one high-priority image.`);heroPath=src}else assert(attr(node,'loading')==='lazy',`${urlPath} has a non-hero image without lazy loading.`)}}if(node.tagName==='link'&&attr(node,'rel')==='stylesheet'){const href=attr(node,'href');if(href.startsWith('/'))criticalAssets.push(href);else externalCriticalAsset=true}if(node.tagName==='script'&&attr(node,'src')){const src=attr(node,'src');if(src.startsWith('/'))criticalAssets.push(src);else externalCriticalAsset=true}if(node.tagName==='link'&&attr(node,'rel')==='canonical')canonical=attr(node,'href');if(node.tagName==='link'&&attr(node,'rel')==='alternate'&&attr(node,'hreflang'))alternates.set(attr(node,'hreflang'),attr(node,'href'));if(node.tagName==='a'&&attr(node,'target')==='_blank')linkTargets.push(attr(node,'rel'))});
 assert(lang===locale.code,`${urlPath} lang=${lang}; expected ${locale.code}.`);assert(city==='hokkaido',`${urlPath} must retain data-city=hokkaido.`);assert(h1===1,`${urlPath} must have one h1.`);assert(title.length>=20&&title.length<=100,`${urlPath} has an empty or out-of-range SEO title.`);assert(description.length>=40&&description.length<=300,`${urlPath} has an empty or out-of-range SEO description.`);assert(canonical==='https://tripdistill.com'+urlPath,`${urlPath} canonical does not match its preserved route.`);assert(!emptyAlt,`${urlPath} includes an image without alt text.`);for(const id of refs)assert(ids.has(id),`${urlPath} has broken aria-labelledby target ${id}.`);for(const rel of linkTargets)assert(rel.split(/\s+/).includes('noopener'),`${urlPath} has a new-tab link without rel=noopener.`);for(const item of locales){assert(alternates.get(item.code)==='https://tripdistill.com'+item.prefix+route.path,`${urlPath} has an incorrect ${item.code} hreflang target.`)}assert(alternates.get('x-default')==='https://tripdistill.com'+route.path,`${urlPath} x-default must point to the English route.`);
 const faqSection=find(doc,n=>n.tagName==='section'&&(n.attrs||[]).some(a=>a.name==='id'&&a.value==='faq'));assert(faqSection,`${urlPath} has no visible FAQ section.`);const details=[];walk(faqSection,n=>{if(n.tagName==='details')details.push(n)});const visible=details.map(d=>{const q=find(d,n=>n.tagName==='summary');const a=find(d,n=>n.attrs&&n.attrs.some(x=>x.name==='class'&&x.value.split(/\s+/).includes('faq-answer')));const p=a&&find(a,n=>n.tagName==='p');assert(q&&p,`${urlPath} has a malformed visible FAQ.`);return{'@type':'Question',name:textOf(q).replace(/\s+/g,' ').trim(),acceptedAnswer:{'@type':'Answer',text:textOf(p).replace(/\s+/g,' ').trim()}}});let faqSchema=null;walk(doc,n=>{if(n.tagName==='script'&&attr(n,'type')==='application/ld+json'){try{const data=JSON.parse(n.childNodes?.[0]?.value||'{}');faqSchema=(data['@graph']||[]).find(x=>x['@type']==='FAQPage')||faqSchema}catch{}}});assert(faqSchema&&isDeepStrictEqual(faqSchema.mainEntity,visible),`${urlPath} FAQPage schema does not exactly match visible questions and answers.`);
 if(locale.code==='en'){
  const source=find(doc,n=>n.tagName==='section'&&(n.attrs||[]).some(a=>a.name==='class'&&a.value.split(/\s+/).includes('sources')));assert(source,`${urlPath} has no visible source/credit section.`);const sourceHrefs=new Set();walk(source,n=>{if(n.tagName==='a'&&attr(n,'href'))sourceHrefs.add(attr(n,'href'))});const sourceText=textOf(source).replace(/\s+/g,' ');
  for(const src of imagePaths){const entry=inventory.entries.find(x=>x.assetPaths.includes(src));assert(entry,`${urlPath} image is missing from the license inventory: ${src}`);const r=entry.sourceRecords[0];assert(r?.sourceUrl&&r.creator&&r.license&&r.licenseUrl,`${urlPath} has incomplete image provenance: ${src}`);assert(sourceHrefs.has(r.sourceUrl),`${urlPath} is missing source link ${r.sourceUrl}`);assert(sourceHrefs.has(r.licenseUrl),`${urlPath} is missing linked license ${r.licenseUrl}`);assert(sourceText.includes(r.creator),`${urlPath} is missing creator ${r.creator}`);if(r.license.includes('BY-SA'))assert(/shared under|same license version/i.test(sourceText),`${urlPath} is missing the CC BY-SA same-license note.`);visiblePhotoCount++}
  const required={
   '/japan/hokkaido/':['Otaru is a straightforward rail outing','Kushiro and Shiretoko need local nights','one corridor first'],
   '/japan/hokkaido/sapporo/':['Nijo Market','Tanukikoji','Odori Park'],
   '/japan/hokkaido/otaru-shakotan/':['completed in 1923','half the original channel','Shakotan'],
   '/japan/hokkaido/hakodate-onuma/':['1864 Goryokaku','20 October','12 April 2027']
  };
  const searchableText=(sourceText+' '+bytes.toString('utf8')).toLowerCase();for(const phrase of required[route.path])assert(searchableText.includes(phrase.toLowerCase()),`${urlPath} is missing reviewed destination detail: ${phrase}.`);
 }
 assert(!externalCriticalAsset,`${urlPath} adds an external stylesheet or script outside the local transfer budget.`);assert(heroPath,`${urlPath} is missing a high-priority hero image.`);const heroFile=localPath(new URL(heroPath,'https://tripdistill.com'+urlPath).pathname);assert(fs.existsSync(heroFile),`${urlPath} hero image is missing.`);const heroBytes=fs.statSync(heroFile).size;const htmlBytes=bytes.length;assert(htmlBytes<=55000,`${urlPath} HTML is ${htmlBytes} bytes; Hokkaido limit is 55,000.`);assert(heroBytes<=650000,`${urlPath} hero is ${heroBytes} bytes; limit is 650,000.`);const criticalPaths=[...new Set([...criticalAssets,heroPath])];let initialBytes=htmlBytes;for(const asset of criticalPaths){const assetFile=localPath(new URL(asset,'https://tripdistill.com'+urlPath).pathname);assert(fs.existsSync(assetFile),`${urlPath} initial resource is missing: ${asset}`);initialBytes+=fs.statSync(assetFile).size}assert(initialBytes<=1000000,`${urlPath} initial local transfer is ${initialBytes} bytes; limit is 1,000,000.`);maxHtmlBytes=Math.max(maxHtmlBytes,htmlBytes);maxHeroBytes=Math.max(maxHeroBytes,heroBytes);maxInitialBytes=Math.max(maxInitialBytes,initialBytes);
 pages.push({locale:locale.code,path:urlPath,record,bytes});
}}
assert(manifest.pages.length===20,'Manifest has an unexpected page count.');
assert(imageSet.size===manifest.images.length,'Manifest image set does not cover all route images.');
for(const item of manifest.images){const file=localPath(item.path);assert(fs.existsSync(file),`Missing image ${item.path}.`);const bytes=fs.readFileSync(file);assert(hash(bytes)===item.sha256,`Image hash mismatch ${item.path}.`)}
for(const item of manifest.stylesheets){const file=localPath(item.path);assert(fs.existsSync(file),`Missing stylesheet ${item.path}.`);const bytes=fs.readFileSync(file);assert(hash(bytes)===item.sha256,`Stylesheet hash mismatch ${item.path}.`);cssPaths.add(item.path)}
assert(isDeepStrictEqual([...cssPaths],['/css/site.css']),'Hokkaido harness must pin only the shared site stylesheet.');
const harnessDoc=parse(harness);let routeControl=false,localeControl=false,titledFrames=0;walk(harnessDoc,n=>{if(n.tagName==='select'&&attr(n,'id')==='route')routeControl=true;if(n.tagName==='select'&&attr(n,'id')==='locale')localeControl=true;if(n.tagName==='iframe'&&attr(n,'title'))titledFrames++});assert(routeControl&&localeControl&&titledFrames===2,'Harness needs labeled route/language controls and two titled frames.');
console.log(`Local Hokkaido harness verified: ${pages.length} route-language pages (4 routes x 5 locales), ${manifest.images.length} images, ${manifest.stylesheets.length} stylesheet, 320/390px frame configuration, responsive shrink guard, SEO, accessibility, photo credits, FAQs, locale metadata, 4,560 sitemap URLs, max HTML ${maxHtmlBytes} bytes, max initial local transfer ${maxInitialBytes} bytes, max hero ${maxHeroBytes} bytes.`);
if(live){
 async function remote(urlPath,expectedHash){const response=await fetch(origin+urlPath,{redirect:'follow'});assert(response.status===200,`${urlPath} returned HTTP ${response.status}.`);const bytes=Buffer.from(await response.arrayBuffer());assert(hash(bytes)===expectedHash,`${urlPath} differs from the reviewed build.`)}
 const mr=await fetch(origin+'/qa/hokkaido-responsive/release.json',{redirect:'follow'});assert(mr.status===200,`Remote release manifest HTTP ${mr.status}.`);const remoteManifest=await mr.json();assert(isDeepStrictEqual(remoteManifest,manifest),'Remote preview commit/page manifest differs from local release.');
 const hr=await fetch(origin+'/qa/hokkaido-responsive/',{redirect:'follow'});assert(hr.status===200,`Remote harness HTTP ${hr.status}.`);const hb=Buffer.from(await hr.arrayBuffer());assert(hash(hb)===hash(fs.readFileSync(htmlPath)),'Remote noindex harness differs from local build.');assert(hb.toString('utf8').includes('name="robots" content="noindex,nofollow,noarchive"'),'Live harness noindex policy missing.');
 const sr=await fetch(origin+'/sitemap.xml',{redirect:'follow'});assert(sr.status===200,`Live sitemap HTTP ${sr.status}.`);const sitemapBytes=Buffer.from(await sr.arrayBuffer());const liveUrls=[...sitemapBytes.toString('utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);assert(liveUrls.length===4560&&new Set(liveUrls).size===4560,'Live sitemap route count or uniqueness changed.');assert(hash(sitemapBytes)===hash(fs.readFileSync(path.join(dist,'sitemap.xml'))),'Live sitemap differs from local built sitemap.');
 for(const page of pages)await remote(page.path,page.record.sha256);for(const item of [...manifest.images,...manifest.stylesheets])await remote(item.path,item.sha256);
 console.log(`Live Hokkaido preview verified at ${origin}: 20/20 localized pages, ${manifest.images.length}/${manifest.images.length} images, ${manifest.stylesheets.length}/${manifest.stylesheets.length} stylesheet, noindex harness and unchanged 4,560-URL sitemap.`)
}
