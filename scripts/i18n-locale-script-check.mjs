// A narrow wrong-language guard, not a claim of linguistic or semantic quality.
const scripts={han:/[\u3400-\u9fff]/gu,kana:/[\u3040-\u30ff]/gu,hangul:/[\u1100-\u11ff\uac00-\ud7af]/gu,thai:/[\u0e00-\u0e7f]/gu};
const expected={'zh-Hant':['han'],ja:['han','kana'],ko:['hangul'],th:['thai']};
const count=(value,names)=>names.reduce((sum,name)=>sum+(String(value).match(scripts[name])||[]).length,0);
export function wrongLocaleScriptReason(locale,source,target){
 if(!expected[locale]||typeof target!=='string')return null;
 const other=Object.keys(scripts).filter(name=>!expected[locale].includes(name));
 const foreign=count(target,other),local=count(target,expected[locale]),sourceForeign=count(source,other);
 // Allow short names and foreign writing already present in the English source.
 // Long paragraphs dominated by a different writing system need review.
 return foreign>=40&&foreign/(foreign+local)>.35&&foreign>sourceForeign+20
  ?`possible wrong language for ${locale}: ${foreign} unexpected-script characters versus ${local} expected-script characters`
  :null;
}
