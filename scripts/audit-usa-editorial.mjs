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
plans['san-francisco']=[['base','arrival','days','tradeoffs'],['ticket','island','access','mainland'],['shape','route','bridge','transport'],['corridor','read','day','extend']];
plans['los-angeles']=[['base','airport','days','car'],['anchor','route','architecture','extend'],['hollywood','hill','visit','return'],['arrival','pier','venice','return']];
plans['san-diego']=[['base','airport','days','extra'],['choose','admission','route','adapt'],['places','rules','route','water'],['choose','mainland','crossing','coronado']];
plans['sierra-parks']=[['base','shape','access','season'],['entry','transport','walk','limits'],['road','shuttle','forest','return'],['choice','grant','cedar','limits']];
const problems=[],seen=new Map();
plans['las-vegas']=[['base','arrival','days','cost'],['segment','bellagio','evening','movement'],['museum','neon','street','return'],['access','shape','route','return']];
plans['utah-parks']=[['bases','shape','rules','conditions'],['shuttles','walk','day','special'],['rim','landscape','day','descent'],['choose','arches','mesa','extra']];
plans.arizona=[['bases','arrival','shape','different'],['place','route','shuttle','limits'],['base','access','day','town'],['choose','garden','culture','transport']];
plans.colorado=[['base','arrival','days','season'],['arrival','local','museum','day'],['entry','bus','day','road'],['base','town','activity','roads']];
const check=(v,m)=>{if(!v)problems.push(m);};
plans['yellowstone-tetons']=[['bases','sequence','roads','field'],['focus','prediction','sequence','prismatic','surface'],['choice','rim','day','lamar','distance'],['base','lake','boat','day','history']];
plans['new-orleans']=[['base','arrival','days','evening'],['purpose','walk','museum','music','shorten'],['arrival','walk','cemetery','magazine','adapt'],['choose','ferry','closure','wetland','care']];
plans.atlanta=[['base','airport','days','extra'],['start','places','route','home','meaning'],['arrival','compare','garden','day','access'],['section','arrival','walk','shared','food']];
plans.texas=[['bases','journey','days','cost'],['arrival','capitol','afternoon','day','music'],['choose','alamo','missions','day','river'],['base','tram','space','museum','return']];
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const dateExceptions=new Set(['/usa/alaska/','/usa/alaska/anchorage-kenai/','/usa/alaska/denali/','/usa/sierra-parks/','/usa/sierra-parks/sequoia-giant-forest/','/usa/sierra-parks/kings-canyon/','/usa/yellowstone-tetons/','/usa/yellowstone-tetons/geyser-basins/','/usa/yellowstone-tetons/canyon-lamar/','/usa/yellowstone-tetons/grand-teton/','/usa/utah-parks/','/usa/utah-parks/bryce/','/usa/utah-parks/moab-arches-canyonlands/']);
const dateLocales=[['en',''],['zh-Hant','/zh'],['ja','/ja'],['ko','/ko'],['th','/th']];
const usaRoutes=['/usa/',...usaHubs.flatMap(h=>[`/usa/${h.slug}/`,...h.guides.map(g=>g.url)])];
plans.miami=[['base','arrival','days','extra'],['start','architecture','walk','shore','finish'],['choose','havana','walls','art','return'],['entrance','shark','royal','day','wildlife']];
plans.orlando=[['base','arrival','days','budget'],['choose','disney','universal','day','extras'],['arrival','museum','boat','day','shorten'],['arrival','bus','atlantis','launch','day']];
plans.alaska=[['shape','bases','season','time'],['arrival','choose','exit','day','alternative'],['status','bus','base','day','fall'],['arrival','choose','mendenhall','day','onward']];
plans.hawaii=[['purpose','transfer','days','care'],['base','city','pearl','windward','limits'],['base','summit','east','recovery','days'],['bases','services','park','coasts','change']];
const text=n=>n.nodeName==='#text'?n.value:['script','style'].includes(n.tagName)?'':(n.childNodes||[]).map(text).join(' ');
const flatten=n=>[n,...(n.childNodes||[]).flatMap(flatten)];
for(const [locale,prefix] of dateLocales)for(const route of usaRoutes){
 const file=path.join(root,prefix,route.slice(1),'index.html');
 if(!fs.existsSync(file)){check(false,`${locale}${route}: missing generated route for JSON-LD date regression`);continue;}
 const dom=flatten(parse(fs.readFileSync(file,'utf8'))),scripts=dom.filter(n=>n.tagName==='script'&&attr(n,'type')==='application/ld+json');
 let articles=[];
 try{
  for(const script of scripts){const raw=script.childNodes?.map(n=>n.value||'').join('')||'';const data=JSON.parse(raw);articles.push(...(data['@graph']||[]).filter(node=>node['@type']==='Article'));}
 }catch(error){check(false,`${locale}${route}: invalid JSON-LD (${error.message})`);continue;}
 check(articles.length===1,`${locale}${route}: expected exactly one JSON-LD Article, found ${articles.length}`);
 if(articles.length!==1)continue;
 const article=articles[0],expectedModified=dateExceptions.has(route)?'2026-10-09':'2026-09-11';
 check(article.datePublished==='2026-09-11',`${locale}${route}: datePublished changed from original 2026-09-11`);
 check(article.dateModified===expectedModified,`${locale}${route}: expected dateModified ${expectedModified}, found ${article.dateModified}`);
}
const reviewSource={updated:'Editorial review: 9 October 2026. Check current official information before travel.',original:'Editorial review: 11 September 2026. Check current official information before travel.'};
const reviewCatalogs=new Map([['en',null]]);
for(const [locale] of dateLocales){
 if(locale==='en')continue;
 const file=path.join(root,'data','i18n',`${locale}.json`);
 if(!fs.existsSync(file)){check(false,`Visible review text audit: approved ${locale} catalog missing at ${file}`);continue;}
 try{reviewCatalogs.set(locale,JSON.parse(fs.readFileSync(file,'utf8')).translations||{});}
 catch(error){check(false,`Visible review text audit: cannot read approved ${locale} catalog (${error.message})`);}
}
for(const [locale,prefix] of dateLocales)for(const route of usaRoutes){
 const file=path.join(root,prefix,route.slice(1),'index.html');
 if(!fs.existsSync(file))continue;
 const dom=flatten(parse(fs.readFileSync(file,'utf8'))),reviewNodes=dom.filter(n=>n.tagName==='p'&&(attr(n,'class')||'').split(/\s+/).includes('us-review'));
 check(reviewNodes.length===1,`${locale}${route}: expected exactly one visible p.us-review, found ${reviewNodes.length}`);
 if(reviewNodes.length!==1)continue;
 const key=dateExceptions.has(route)?reviewSource.updated:reviewSource.original;
 let expected=key;
 if(locale!=='en'){
  const catalog=reviewCatalogs.get(locale),translation=catalog?.[key];
  if(!translation){check(false,`${locale}${route}: approved catalog missing visible review translation for exact source key "${key}"`);continue;}
  expected=translation;
 }
 check(text(reviewNodes[0]).trim()===expected,`${locale}${route}: visible review text does not match expected ${dateExceptions.has(route)?'9 October':'11 September'} source/catalog string`);
}
for(const [slug,sections] of Object.entries(plans)){
 const h=usaHubs.find(h=>h.slug===slug),routes=[`/usa/${slug}/`,...h.guides.map(g=>g.url)];
 const assetSlug=slug==='washington-dc'?'dc':slug;
 for(const [i,route] of routes.entries()){
  const html=fs.readFileSync(path.join(root,route.slice(1),'index.html'),'utf8'),dom=flatten(parse(html));
  const markerDate=dateExceptions.has(route)?'20261009':'20260911';
  check(html.includes(`data-editorial-revision="${assetSlug}-${markerDate}"`),route+': missing editorial marker');
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
   check(fs.existsSync(file)&&fs.readFileSync(file,'utf8').includes(`data-editorial-revision="${assetSlug}-${markerDate}"`),locale+route+': rewritten locale missing');
  }
 }
}
const countryHtml=fs.readFileSync(path.join(root,'usa/index.html'),'utf8'),countryDom=flatten(parse(countryHtml));
check(countryHtml.includes('data-editorial-revision="usa-country-20260911"'),'Country editorial marker missing');
check(countryHtml.includes('/css/usa-country-editorial.css?v=20260911-1'),'Country editorial stylesheet missing');
check(countryDom.filter(n=>n.tagName==='h1').length===1,'Country H1 count');
const countryIds=countryDom.map(n=>attr(n,'id')).filter(Boolean);
for(const paragraph of countryDom.filter(n=>n.tagName==='p')){
 const mixedLinks=flatten(paragraph).some(n=>n.tagName==='a')&&(paragraph.childNodes||[]).some(n=>n.nodeName==='#text'&&n.value.trim());
 check(!mixedLinks,'Country: keep city navigation separate from full-paragraph translation units');
}
check(countryIds.length===new Set(countryIds).size,'Country duplicate IDs');
for(const id of ['choose','time','directory','cost','season','entry','questions'])check(countryIds.includes(id),'Country section missing '+id);
for(const n of countryDom.filter(n=>n.tagName==='a'&&attr(n,'href')?.startsWith('#')))check(countryIds.includes(attr(n,'href').slice(1)),'Country broken anchor '+attr(n,'href'));
for(const h of usaHubs)check(countryDom.some(n=>n.tagName==='a'&&attr(n,'href')===`/usa/${h.slug}/`),'Country hub link missing '+h.slug);
if(!process.argv.includes('--english-only'))for(const locale of ['zh','ja','ko','th'])check(fs.readFileSync(path.join(root,locale,'usa/index.html'),'utf8').includes('data-editorial-revision="usa-country-20260911"'),locale+' country rewrite missing');
if(problems.length){console.error(problems.join('\n'));process.exitCode=1;}else console.log(`${Object.keys(plans).length} rewritten U.S. clusters and country passed structural regression checks; NYC has its own audit. Not an editorial acceptance or AdSense verdict.`);
