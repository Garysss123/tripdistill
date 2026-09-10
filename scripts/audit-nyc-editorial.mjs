import fs from 'node:fs';
import path from 'node:path';
import {parse} from 'parse5';
import {nycRoutes} from './nyc-editorial.mjs';
const root=path.resolve(import.meta.dirname,'..');
const problems=[];
const check=(ok,message)=>{if(!ok)problems.push(message);};
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const text=n=>n.nodeName==='#text'?n.value:['script','style'].includes(n.tagName)?'':(n.childNodes||[]).map(text).join(' ');
function nodes(html){const a=[];function walk(n){a.push(n);for(const c of n.childNodes||[])walk(c);}walk(parse(html));return a;}
const expected=[['stay','arrive','days','spend'],['choice','islands','mainland','finish'],['museum','west','east','evening'],['arrival','walk','access','return']];
const names=[['JFK','LaGuardia','Newark','Long Island City'],['Stone Street','Trinity Church','Ellis Island','St. George'],['MoMA','The Met','Bethesda','Broadway'],['Squibb','Pier 1','Washington Street','Clark Street']];
const longParagraphs=new Map();
for(const [i,route]of nycRoutes.entries()){
 const html=fs.readFileSync(path.join(root,route.slice(1),'index.html'),'utf8'),dom=nodes(html);
 check(html.includes('data-editorial-revision="nyc-20260911"'),route+': editorial brief lost');
 check(html.includes('/css/nyc-editorial.css?v=20260911-2'),route+': custom stylesheet lost');
 for(const id of expected[i])check(dom.some(n=>attr(n,'id')===id),route+': missing decision section '+id);
 for(const name of names[i])check(text(dom[0]).includes(name),route+': missing place-specific planning anchor '+name);
 check(!html.includes('A practical visit plan')&&!html.includes('Fit this visit into your trip'),route+': generic USA article body returned');
 const bodyParas=dom.filter(n=>n.tagName==='p'&&text(n).trim().length>180).filter(n=>{
  let p=n;while(p){const c=attr(p,'class')||'';if(c.split(' ').some(x=>['sources','us-card'].includes(x)))return false;p=p.parentNode;}return true;
 });
 for(const n of bodyParas){const copy=text(n).replace(/\s+/g,' ').trim();check(!longParagraphs.has(copy),route+': repeated long paragraph also at '+longParagraphs.get(copy));longParagraphs.set(copy,route);}
 check(dom.filter(n=>n.tagName==='h1').length===1,route+': expected one H1');
 if(i===0||i===2){check(html.includes('/assets/images/nyc-grand-central-concourse.webp')&&html.includes('4300streetcar')&&html.includes('https://commons.wikimedia.org/wiki/File:Grand_Central_Terminal_main_concourse_looking_east_Jan_2025.jpg')&&html.includes('https://creativecommons.org/licenses/by/4.0/'),route+': Grand Central image or visible commercial-use credit missing');}
 const anchors=new Set(dom.map(n=>attr(n,'id')).filter(Boolean));
 for(const n of dom.filter(n=>n.tagName==='a'&&attr(n,'href')?.startsWith('#')))check(anchors.has(attr(n,'href').slice(1)),route+': broken in-page anchor '+attr(n,'href'));
}
if(!process.argv.includes('--english-only'))for(const locale of['zh','ja','ko','th'])for(const route of nycRoutes){const file=path.join(root,locale,route.slice(1),'index.html');check(fs.existsSync(file)&&fs.readFileSync(file,'utf8').includes('data-editorial-revision="nyc-20260911"'),locale+route+': rewritten edition missing');}
if(problems.length){console.error(problems.join('\n'));process.exitCode=1;}else console.log('NYC structural regression checks passed. This is not an editorial-quality or AdSense-approval verdict; apply the README human review gate.');
