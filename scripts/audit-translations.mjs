import { collectTranslationWork, loadCatalog, localeConfigs } from './i18n-lib.mjs';

const work = collectTranslationWork();
const required = new Set(work.flatMap((record) => record.units));
const vietnamRequired = new Set(work.filter((record) => record.route === '/vietnam/' || record.route.startsWith('/vietnam/')).flatMap((record) => record.units));
const problems = [];
const suspicious = [];
const localeScripts = {
  'zh-Hant': /[\u3400-\u9fff]/gu,
  ja: /[\u3040-\u30ff\u3400-\u9fff]/gu,
  ko: /[\uac00-\ud7af]/gu,
  th: /[\u0e00-\u0e7f]/gu
};
const localeEditionFallbacks = {
  'zh-Hant': { short: '繁中', edition: '繁體中文版' },
  ja: { short: '日本語', edition: '日本語版' },
  ko: { short: '한국어', edition: '한국어판' },
  th: { short: 'ไทย', edition: 'ฉบับภาษาไทย' }
};
const literalPairsByLocale = {
  'zh-Hant': [
    ['working appointment', '工作中的約定'],
    ['landscape argument', '地景論證'],
    ['geographic argument', '地理論述'],
    ['immigration plan', '移民查驗計畫'],
    ['mainland reset', '返回本土的重新整理'],
    ['working-water ledger', '工作中的水域帳冊'],
    ['working water', '工作的水域'],
    ['working lagoon', '工作的潟湖'],
    ['working village', '工作的村落'],
    ['working infrastructure', '工作的基礎設施'],
    ['working vehicle', '工作的車輛'],
    ['working hours', '實際工作時間'],
    ['working horticultural landscape', '工作的園藝地景'],
    ['transfer buffer', '交通緩衝'],
    ['daylight buffer', '日光緩衝'],
    ['return contract', '返程契約'],
    ['return transfer', '返程轉移'],
    ['visual ledger', '視覺帳冊'],
    ['dispersed heritage day', '分散的遺產日'],
    ['reading stop', '閱讀停留'],
    ['living ledger', '活帳冊'],
    ['city reset', '城市重新整理'],
    ['base chapter', '基地章節'],
    ['decision chapter', '決策章節'],
    ['vessel identity', '船舶身分'],
    ['menu of islands', '島嶼選單']
  ],
  ja: [
    ['marine day', '海の日'],
    ['return buffer', '保護された帰りの余白'],
    ['return buffer', '帰りの余白'],
    ['no-touch reef', '触れない礁'],
    ['exact licensed operator', '正確な認可運航会社'],
    ['rigid schedule', '硬い日程'],
    ['working national site', '国家の現役の場所'],
    ['reading stop', '読書の時間'],
    ['working lagoon', '働く潟湖'],
    ['working area', '働く区域'],
    ['working neighborhood', '働く街区'],
    ['working waters', '働く水域'],
    ['visual ledger', '目で読む帳簿'],
    ['dispersed heritage day', '分散した遺産の日'],
    ['transfer chapter', '移動章'],
    ['base chapter', '拠点章'],
    ['land-side buffer', '陸上の余白'],
    ['transfer buffer', '移動の余白'],
    ['decision chapter', '判断の章'],
    ['menu of islands', '島のメニュー'],
    ['vessel identity', '船の身元'],
    ['flight connection', 'フライト接続']
  ],
  ko: [],
  th: [
    ['transfer buffer', 'บัฟเฟอร์การถ่ายโอน'],
    ['transfer contract', 'สัญญาโอน'],
    ['live lane', 'เลนสด'],
    ['legal viewpoint', 'มุมมองทางกฎหมาย'],
    ['scan the forest', 'สแกนป่า'],
    ['reading stop', 'จุดอ่านหนังสือ'],
    ['working neighborhood', 'บริเวณใกล้เคียงที่ทำงาน'],
    ['menu of islands', 'เมนูเกาะ'],
    ['northern, central and southern argument', 'ข้อโต้แย้งทางเหนือ'],
    ['compact architecture', 'สถาปัตยกรรมขนาดกะทัดรัด'],
    ['vessel identity', 'ตัวเรือ'],
    ['return contract', 'ข้อตกลงขากลับ'],
    ['civic spaces', 'พื้นที่พลเมือง'],
    ['working shoreline', 'แนวชายฝั่งในคราวเดียว'],
    ['rushed island departure', 'การออกเดินทางจากเกาะที่เร่งรีบ'],
    ['city page', 'หน้าเมืองที่เป็นประโยชน์'],
    ['working-lane notebook', 'สมุดบันทึกช่องทางการทำงาน'],
    ['construction diversions', 'การเปลี่ยนแปลงการก่อสร้าง'],
    ['riverfront opening', 'ช่องเปิดริมฝั่ง'],
    ['weather cancellation', 'การยกเลิกสภาพอากาศ'],
    ['last return', 'การคืนครั้งสุดท้าย'],
    ['waterbus route', 'ขึ้นเครื่อง']
  ]
};
const numberTokenPattern = /(?<!\d)\d+(?:[.,]\d+)*(?!\d)/g;
const englishDatePattern = /\b\d{1,2} (?:January|February|March|April|May|June|July|August|September|October|November|December) \d{4}\b/g;
const localizedRegionLabelPattern = /^(?:Northern Vietnam|Northwest Vietnam|Northeast Vietnam|North-Central Vietnam|North Central Coast|Central Vietnam|Central Coast|South-Central Coast|South-Central Vietnam|Southern Vietnam|Urban South|Island South|River and Garden South)$/;

function tokens(value, pattern) {
  return [...value.matchAll(pattern)].map((match) => match[0]);
}

function hasExactNumberToken(value, number) {
  return tokens(value, numberTokenPattern).some((candidate) => {
    if (candidate === number) return true;
    if (/^\d+$/.test(candidate) && /^\d+$/.test(number)) return BigInt(candidate) === BigInt(number);
    return false;
  });
}

for (const locale of localeConfigs) {
  const catalog = loadCatalog(locale.code);
  if (catalog.locale !== locale.code) problems.push(`${locale.code}: catalog locale is "${catalog.locale}"`);
  if (catalog.qualityStatus !== 'reviewed') problems.push(`${locale.code}: catalog qualityStatus is "${catalog.qualityStatus || 'missing'}", expected "reviewed"`);
  for (const source of required) {
    const target = catalog.translations[source];
    if (!target || !target.trim()) {
      problems.push(`${locale.code} missing: ${source}`);
      continue;
    }
    const editionFallback = localeEditionFallbacks[locale.code];
    if (source === 'EN' && target.trim() !== editionFallback.short) problems.push(`${locale.code} current-edition short label must be "${editionFallback.short}": ${target}`);
    if (source.startsWith('English edition ·') && !target.trim().startsWith(editionFallback.edition)) problems.push(`${locale.code} current-edition footer must start with "${editionFallback.edition}": ${target}`);
    for (const [sourceNeedle, targetNeedle] of literalPairsByLocale[locale.code]) {
      if (source.toLowerCase().includes(sourceNeedle) && target.includes(targetNeedle)) problems.push(`${locale.code} contextual phrase is translated literally (${targetNeedle}): ${source} => ${target}`);
    }
    if (vietnamRequired.has(source) && locale.code === 'zh-Hant' && /\btransfer(?:s|red|ring)?\b/i.test(source) && target.includes('轉移')) problems.push(`${locale.code} travel transfer is translated as non-Taiwan usage "轉移": ${source} => ${target}`);
    if (vietnamRequired.has(source) && locale.code === 'zh-Hant' && /\bboat\b/i.test(source) && target.includes('船遊')) problems.push(`${locale.code} boat travel is translated as non-Taiwan usage "船遊": ${source} => ${target}`);
    if (vietnamRequired.has(source) && locale.code === 'th' && target.includes('ฮับ')) problems.push(`${locale.code} regional destination is translated with technical loanword "ฮับ": ${source} => ${target}`);
    if (vietnamRequired.has(source) && locale.code === 'ja' && /\bhubs?\b/i.test(source) && target.includes('ハブ')) problems.push(`${locale.code} regional destination is translated with technical loanword "ハブ": ${source} => ${target}`);
    if (vietnamRequired.has(source) && locale.code === 'ja' && source === 'Explore Vietnam' && target.includes('探す')) problems.push(`${locale.code} explore call-to-action is translated as search: ${source} => ${target}`);
    if (vietnamRequired.has(source) && locale.code === 'ja' && source === 'Plan Vietnam' && target.includes('ベトナムを計画')) problems.push(`${locale.code} travel-planning call-to-action is unnatural: ${source} => ${target}`);
    if (vietnamRequired.has(source) && locale.code === 'ja' && /\d日\s+に/.test(target)) problems.push(`${locale.code} localized Japanese date contains an unnatural space: ${source} => ${target}`);
    if (/^(?:translation|translated text|翻譯|번역|การแปล)\s*[:：]/i.test(target) || /(?:as an ai|cannot translate|無法翻譯)/i.test(target)) {
      problems.push(`${locale.code} model commentary: ${source} => ${target}`);
    }
    for (const number of new Set(tokens(source, numberTokenPattern))) {
      if (!hasExactNumberToken(target, number)) problems.push(`${locale.code} number token "${number}" changed: ${source} => ${target}`);
    }
    for (const date of new Set(tokens(source, englishDatePattern))) {
      if (target.includes(date)) problems.push(`${locale.code} English-form date remains unlocalized: ${source} => ${target}`);
    }
    for (const url of new Set(tokens(source, /https?:\/\/[^\s)]+/g))) {
      if (!target.includes(url)) problems.push(`${locale.code} URL changed: ${source} => ${target}`);
    }
    for (const marker of ['TripDistill', 'CC0', 'CC BY-SA', 'CC BY']) {
      if (source.includes(marker) && !target.includes(marker)) problems.push(`${locale.code} protected marker "${marker}" changed: ${source} => ${target}`);
    }
    const sourceLetters = tokens(source, /[A-Za-z]/g).length;
    const targetScript = tokens(target, localeScripts[locale.code]).length;
    if (localizedRegionLabelPattern.test(source) && targetScript < 2) problems.push(`${locale.code} regional label appears untranslated: ${source} => ${target}`);
    const exempt = /^(?:—|Photo:|Image:)|(?:CC BY|Wikimedia Commons|TripDistill\.com)/.test(source);
    const creditHasLocalizedProse = /\b(?:resized|converted|cropped?|edited|display|watermark|retained)\b/i.test(source);
    if (creditHasLocalizedProse && targetScript < 4) problems.push(`${locale.code} image-credit processing note appears untranslated: ${source} => ${target}`);
    if (/\bedited by\b/i.test(source) && /\bedited by\b/i.test(target)) problems.push(`${locale.code} image-credit editor note remains in English: ${source} => ${target}`);
    if (sourceLetters >= 55 && targetScript < 8 && !exempt) problems.push(`${locale.code} long copy appears untranslated: ${source} => ${target}`);
    if (sourceLetters >= 80 && target.trim() === source.trim() && !exempt) problems.push(`${locale.code} long copy is identical to English: ${source}`);
    if (source.length >= 80 && target.length < source.length * 0.14) suspicious.push(`${locale.code} very short translation: ${source} => ${target}`);
  }

  const stale = Object.keys(catalog.translations).filter((source) => !required.has(source));
  if (stale.length) suspicious.push(`${locale.code}: ${stale.length} stale catalog entries are not currently used.`);
  console.log(`${locale.code}: ${required.size} required strings, ${stale.length} stale entries.`);
}

if (problems.length) {
  console.error(`Translation audit failed with ${problems.length} problem(s):`);
  for (const problem of problems.slice(0, 150)) console.error(`- ${problem}`);
  if (problems.length > 150) console.error(`- ...and ${problems.length - 150} more`);
  process.exitCode = 1;
} else {
  console.log(`Translation audit passed across ${localeConfigs.length} localized editions (${required.size} strings each).`);
}
if (suspicious.length) {
  console.warn(`Translation review notes (${suspicious.length}):`);
  for (const note of suspicious.slice(0, 40)) console.warn(`- ${note}`);
}
