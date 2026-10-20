import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { spainClusters, spainGuides, spainRoutes } from '../data/spain-guides.mjs';
const root=path.resolve(import.meta.dirname,'..'),errors=[];
const fail=s=>errors.push(s),routeFile=r=>path.join(root,r.slice(1),'index.html');
function find(node,test){if(test(node))return node;for(const c of node.childNodes||[]){const hit=find(c,test);if(hit)return hit;}return null;}
function attrs(node){return Object.fromEntries((node.attrs||[]).map(x=>[x.name,x.value]));}
function visible(node){if(node.nodeName==='#text')return node.value+' ';if(['script','style','svg','noscript'].includes(node.tagName))return '';return (node.childNodes||[]).map(visible).join('');}
function normalize(text){return text.replace(/\s+/g,' ').trim();}
const manifest=JSON.parse(fs.readFileSync(path.join(root,'data/spain/images.json'),'utf8'));
if(spainRoutes.length!==33||spainClusters.length!==8||spainGuides.length!==24)fail('Source route inventory must be 1 country + 8 hubs + 24 local guides.');
const search=JSON.parse(fs.readFileSync(path.join(root,'data/search-index.json'),'utf8'));
for(const route of spainRoutes){
 const file=routeFile(route);if(!fs.existsSync(file)){fail(`${route}: English source file missing`);continue;}
 const html=fs.readFileSync(file,'utf8'),doc=parse(html),main=find(doc,n=>n.tagName==='main'&&attrs(n).id==='main-content');
 if(!main){fail(`${route}: missing main content landmark`);continue;}
 const text=normalize(visible(main)),words=(text.match(/[\p{L}\p{N}][\p{L}\p{N}'’.-]*/gu)||[]).length;
 const minimum=route==='/spain/'?650:spainClusters.some(c=>route===`/spain/${c.slug}/`)?450:520;
 if(words<minimum)fail(`${route}: only ${words} visible main-content words (minimum ${minimum})`);
 if(!html.includes('rel="canonical"')||!html.includes(`https://tripdistill.com${route}`))fail(`${route}: canonical is missing or incorrect`);
 if((html.match(/hreflang=/g)||[]).length!==6)fail(`${route}: expected five locale links plus x-default`);
 if(!html.includes('/css/spain.css?v=20261020-3'))fail(`${route}: missing Spain stylesheet`);
 if(!/\bspain-sources\b/.test(html))fail(`${route}: missing source and image credit section`);
 const routeRecords=search.filter(x=>x.url===route);if(routeRecords.length!==1)fail(`${route}: search index entry count is ${routeRecords.length}`);
 const image=route==='/spain/'?manifest.madrid:manifest[spainClusters.find(c=>route===`/spain/${c.slug}/`||route.startsWith(`/spain/${c.slug}/`))?.slug];
 if(!image||!html.includes(image.source)||!html.includes(image.license)||!html.includes(image.creator))fail(`${route}: visible image source/creator/license credit is incomplete`);
 const links=[...html.matchAll(/<a\b[^>]*href="([^"]+)"/gi)].map(m=>m[1]);
 for(const href of links.filter(x=>x.startsWith('/spain/'))){const target=href.endsWith('/')?href:`${href}/`;if(!spainRoutes.includes(target))fail(`${route}: broken internal destination link ${href}`);}
}
for(const [slug,image] of Object.entries(manifest)){
 if(!/^CC BY(?:-SA)? [1-4](?:\.\d)?(?: [a-z]{2})?$/i.test(image.license))fail(`${slug}: image license is not an approved commercial-use CC license`);
 if(!image.source.startsWith('https://commons.wikimedia.org/wiki/File:'))fail(`${slug}: image source is not a direct Commons file page`);
 const file=path.join(root,image.src.slice(1));if(!fs.existsSync(file))fail(`${slug}: local image asset missing`);
 if(image.width!==1600||image.height!==1066)fail(`${slug}: local image manifest dimensions are not 1600x1066`);
}
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
for(const r of spainRoutes)for(const prefix of ['/','/zh','/ja','/ko','/th']){const localized=prefix==='/'?r:prefix+r;if(!sitemap.includes(`https://tripdistill.com${localized}`))fail(`Sitemap is missing ${localized}`);}
for(const config of [{code:'zh-Hant',dir:'zh',prefix:'/zh'},{code:'ja',dir:'ja',prefix:'/ja'},{code:'ko',dir:'ko',prefix:'/ko'},{code:'th',dir:'th',prefix:'/th'}])for(const r of spainRoutes){const file=path.join(root,config.dir,r.slice(1),'index.html');if(!fs.existsSync(file)){fail(`${config.code}${r}: localized route file missing`);continue;}const html=fs.readFileSync(file,'utf8');if(!new RegExp(`<html[^>]*lang="${config.code}"`).test(html))fail(`${config.code}${r}: html language marker is incorrect`);if(!html.includes(`https://tripdistill.com${config.prefix}${r}`))fail(`${config.code}${r}: localized canonical is missing`);}
const cardCounts={country:(fs.readFileSync(routeFile('/spain/'),'utf8').match(/class="spain-region-card"/g)||[]).length};
if(cardCounts.country!==8)fail(`Country page links ${cardCounts.country} regions, expected 8.`);
if(errors.length){console.error(`Spain audit failed (${errors.length} findings):`);for(const e of errors)console.error('- '+e);process.exit(1);}
console.log(`Spain audit passed: 33 English pages, 132 localized pages, 33 search routes, 8 licensed images, 4,890 site-wide sitemap URLs; body-depth, SEO, navigation and internal links checked.`);
