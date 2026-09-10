import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {parse} from 'parse5';
import {localizeHtml,root} from './i18n-lib.mjs';

function allNodes(html){const out=[];function walk(n){out.push(n);for(const c of n.childNodes||[])walk(c);}walk(parse(html));return out;}
const attr=(n,name)=>n.attrs?.find(a=>a.name===name)?.value;
const text=n=>n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join('');
const translations={Trip:'旅行',Distill:'蒸餾',Home:'首頁','United States':'美國'};
const sample='<html lang="en"><body><span translate="no">Trip<span>Distill</span><a href="/usa/">United States</a><b translate="yes">Home</b></span><p>Home</p></body></html>';
const result=allNodes(localizeHtml(sample,translations,'zh-Hant','/usa/'));
assert.equal(attr(result.find(n=>n.tagName==='html'),'lang'),'zh-Hant');
assert.equal(text(result.find(n=>n.tagName==='span')),'TripDistillUnited States首頁');
assert.equal(attr(result.find(n=>n.tagName==='a'),'href'),'/zh/usa/');
assert.equal(text(result.find(n=>n.tagName==='p')),'首頁');
for(const locale of ['zh-Hant','ja','ko','th'])for(const name of ['header','footer']){
 const html=fs.readFileSync(path.join(root,'components',name+'.html'),'utf8');
 // Identity translations isolate literal-brand behavior from unrelated catalog coverage.
 const fixture=new Proxy(translations,{get:(target,key)=>target[key]??key});
 const nodes=allNodes(localizeHtml(html,fixture,locale,'/components/'+name+'.html'));
 const brand=nodes.find(n=>n.tagName==='span'&&attr(n,'translate')==='no');
 assert.ok(brand,`${locale} ${name}: missing protected brand`);
 assert.equal(text(brand),'TripDistill',`${locale} ${name}: brand was translated`);
 const prefix=locale==='zh-Hant'?'zh':locale;
 const link=nodes.find(n=>n.tagName==='a'&&attr(n,'class')==='brand');
 assert.equal(attr(link,'href'),'/'+prefix+'/');
}
console.log('i18n literal tests passed: brand preservation, inherited translate=no, nested translate=yes and localized links.');
