import fs from 'node:fs';
import path from 'node:path';
import {parse} from 'parse5';
import {usaHubs} from '../data/usa-guides.mjs';
const root=path.resolve(import.meta.dirname,'..');
const plans={boston:[['bases','arrival','three-days','meals'],['length','walk','charlestown','interiors','interpretation'],['access','collection','day','river','objects'],['island','booking','ashore','conditions','mainland']],philadelphia:[['base','arrival','days','budget'],['entry','sequence','streets','adapt'],['choose','route','river','access','looking'],['timing','meal','circuit','after','counter']]};
plans['washington-dc']=[['stay','airports','days','cost'],['choice','west','basin','return'],['select','passes','day','capitol'],['arrive','layers','walk','extend','return']];
plans['new-england']=[['corridor','week','season','stay'],['town','bay','cape','food'],['access','landscape','days','adapt'],['base','kanc','vermont','conditions']];
plans.chicago=[['base','arrive','days','evening'],['choice','route','levels','alternative'],['institution','tickets','day','shore'],['choose','wicker','logan','evening','care']];
plans.seattle=[['base','arrival','days','mountain'],['market','descent','water','finish'],['boat','winslow','reserve','return'],['status','area','southwest','winter']];
plans['portland-oregon']=[['base','airport','days','transport'],['arrival','choose','route','access'],['access','drive','bus','limits'],['shape','beach','ecola','return']];
const problems=[],seen=new Map();
const check=(v,m)=>{if(!v)problems.push(m);};
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const text=n=>n.nodeName==='#text'?n.value:['script','style'].includes(n.tagName)?'':(n.childNodes||[]).map(text).join(' ');
const flatten=n=>[n,...(n.childNodes||[]).flatMap(flatten)];
for(const [slug,sections] of Object.entries(plans)){
 const h=usaHubs.find(h=>h.slug===slug),routes=[`/usa/${slug}/`,...h.guides.map(g=>g.url)];
 const assetSlug=slug==='washington-dc'?'dc':slug;
 for(const [i,route] of routes.entries()){
  const html=fs.readFileSync(path.join(root,route.slice(1),'index.html'),'utf8'),dom=flatten(parse(html));
  check(html.includes(`data-editorial-revision="${assetSlug}-20260911"`),route+': missing editorial marker');
  check(html.includes(`/css/${assetSlug}-editorial.css?v=20260911-1`),route+': missing editorial stylesheet');
  check(!html.includes('A practical visit plan')&&!html.includes('Fit this visit into your trip'),route+': generic body returned');
  check(dom.filter(n=>n.tagName==='h1').length===1,route+': H1 count');
  const ids=dom.map(n=>attr(n,'id')).filter(Boolean);
  check(ids.length===new Set(ids).size,route+': duplicate IDs');
  for(const id of sections[i])check(ids.includes(id),route+': missing section '+id);
  for(const n of dom.filter(n=>n.tagName==='a'&&attr(n,'href')?.startsWith('#')))check(ids.includes(attr(n,'href').slice(1)),route+': broken anchor '+attr(n,'href'));
  for(const n of dom.filter(n=>n.tagName==='p'&&text(n).trim().length>180)){
   let skip=false;for(let p=n;p;p=p.parentNode)if((attr(p,'class')||'').split(' ').some(c=>['sources','us-card'].includes(c)))skip=true;
   if(skip)continue;const value=text(n).replace(/\s+/g,' ').trim();check(!seen.has(value),route+': duplicated long paragraph from '+seen.get(value));seen.set(value,route);
  }
  if(!process.argv.includes('--english-only'))for(const locale of ['zh','ja','ko','th']){
   const file=path.join(root,locale,route.slice(1),'index.html');
   check(fs.existsSync(file)&&fs.readFileSync(file,'utf8').includes(`data-editorial-revision="${assetSlug}-20260911"`),locale+route+': rewritten locale missing');
  }
 }
}
if(problems.length){console.error(problems.join('\n'));process.exitCode=1;}else console.log(`${Object.keys(plans).length} rewritten U.S. clusters passed structural regression checks. Not an editorial acceptance or AdSense verdict. Other U.S. routes remain outside this audit.`);
