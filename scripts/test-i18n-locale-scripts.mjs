import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {wrongLocaleScriptReason} from './i18n-locale-script-check.mjs';
const japanese='実際に組み立てられるアメリカ旅行を選びましょう。鉄道で結ばれた都市、選び抜いた公園の旅、または島での滞在から選び、地域ガイドと現地の章を組み合わせます。';
const chinese='先依實際的交通與住宿據點選擇行程，為參觀、休息與返回飯店預留時間。不同的國家公園入口和遊客中心可能各有營運季節，應確認實際路線與當天的開放資訊。';
const korean='실제 교통과 숙박 거점에 맞춰 여행을 선택하세요. 국립공원 입구와 방문자 센터의 운영 기간은 다를 수 있으므로 당일의 안내를 확인하고 돌아오는 시간도 계획하세요.';
const thai='เลือกการเดินทางตามที่พักและการเดินทางจริง ตรวจสอบวันเปิดของอุทยานแห่งชาติและศูนย์บริการนักท่องเที่ยว แล้วเผื่อเวลาเที่ยว พักผ่อน และเดินทางกลับให้เพียงพอ';
for(const[locale,value]of [['zh-Hant',chinese],['ja',japanese],['ko',korean],['th',thai]])assert.equal(wrongLocaleScriptReason(locale,'Plan a visit.',value),null);
for(const[locale,value]of [['zh-Hant',japanese],['zh-Hant',korean],['ja',thai],['ko',chinese],['th',japanese]])assert.ok(wrongLocaleScriptReason(locale,'Plan a visit.',value),locale+' should reject the wrong script');
assert.equal(wrongLocaleScriptReason('zh-Hant','A named dish.',chinese+' お好み焼き'),null);
assert.equal(wrongLocaleScriptReason('zh-Hant',japanese,japanese),null,'preserved source-language quotation is not this guard\'s job');
console.log('Locale-script guard fixtures passed. This does not establish semantic accuracy.');
if(process.argv.includes('--scan-reviewed')){
 const base=path.resolve(import.meta.dirname,'../data/i18n/reviewed');let checked=0;const problems=[];
 for(const locale of ['zh-Hant','ja','ko','th'])for(const name of fs.readdirSync(path.join(base,locale)).filter(n=>n.endsWith('.json'))){
  const b=JSON.parse(fs.readFileSync(path.join(base,locale,name),'utf8'));if(b.qualityStatus!=='reviewed')continue;
  for(const[source,target]of Object.entries(b.translations)){checked++;const reason=wrongLocaleScriptReason(locale,source,target);if(reason)problems.push({file:locale+'/'+name,source,reason});}
 }
 console.log(JSON.stringify({reviewedTargetsChecked:checked,problems},null,2));if(problems.length)process.exitCode=1;
}
