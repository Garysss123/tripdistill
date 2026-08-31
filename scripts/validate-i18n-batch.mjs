import fs from 'node:fs';
import path from 'node:path';
import { collectTranslationWork, getLocaleConfig, root } from './i18n-lib.mjs';

const fileArgument = process.argv.find((argument) => argument.startsWith('--file='))?.slice('--file='.length);
if (!fileArgument) throw new Error('Usage: node scripts/validate-i18n-batch.mjs --file=data/i18n/reviewed/<locale>/<batch>.json');

const batchPath = path.resolve(root, fileArgument);
const reviewedRoot = path.resolve(root, 'data', 'i18n', 'reviewed');
if (batchPath !== reviewedRoot && !batchPath.startsWith(reviewedRoot + path.sep)) {
  throw new Error('Batch file must be inside data/i18n/reviewed/.');
}
if (!fs.existsSync(batchPath)) throw new Error(`Batch file does not exist: ${fileArgument}`);

const rawBatch = fs.readFileSync(batchPath, 'utf8');
const batch = JSON.parse(rawBatch);
const locale = getLocaleConfig(batch.locale);
const expectedLocaleDirectory = path.join(reviewedRoot, locale.code);
if (path.dirname(batchPath) !== expectedLocaleDirectory) {
  throw new Error(`Batch locale ${locale.code} must live directly in data/i18n/reviewed/${locale.code}/.`);
}
if (batch.qualityStatus !== 'reviewed') throw new Error('Batch qualityStatus must be "reviewed".');
if (!Array.isArray(batch.routes) || !batch.routes.length) throw new Error('Batch routes must be a non-empty array.');
if (new Set(batch.routes).size !== batch.routes.length) throw new Error('Batch routes contains duplicates.');
if (!batch.translations || typeof batch.translations !== 'object' || Array.isArray(batch.translations)) {
  throw new Error('Batch translations must be an object.');
}

const workByRoute = new Map(collectTranslationWork().map((record) => [record.route, record]));
const unknownRoutes = batch.routes.filter((route) => !workByRoute.has(route));
if (unknownRoutes.length) throw new Error(`Unknown routes: ${unknownRoutes.join(', ')}`);

const records = batch.routes.map((route) => workByRoute.get(route));
const isVietnamBatch = batch.routes.some((route) => route === '/vietnam/' || route.startsWith('/vietnam/')) || /^29[a-o]-vietnam/i.test(path.basename(batchPath));
const rawUnits = records.flatMap((record) => record.units);
const required = new Set(rawUnits);
const localEntries = Object.entries(batch.translations);
const localKeys = new Set(localEntries.map(([source]) => source));
const problems = [];
const rawKeyCounts = new Map();
for (const line of rawBatch.split(/\r?\n/)) {
  const match = line.match(/^\s{4}("(?:\\.|[^"\\])*")\s*:/);
  if (!match) continue;
  const source = JSON.parse(match[1]);
  rawKeyCounts.set(source, (rawKeyCounts.get(source) || 0) + 1);
}
for (const [source, count] of rawKeyCounts) {
  if (count > 1) problems.push(`raw JSON contains ${count} copies of source key; keep one: ${source}`);
}
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

for (const [source, target] of localEntries) {
  if (!required.has(source)) problems.push(`source key is outside the declared routes: ${source}`);
  if (typeof target !== 'string' || !target.trim()) problems.push(`empty target: ${source}`);
  if (typeof target !== 'string') continue;
  const editionFallback = localeEditionFallbacks[locale.code];
  if (source === 'EN' && target.trim() !== editionFallback.short) problems.push(`current-edition short label must be "${editionFallback.short}": ${source}`);
  if (source.startsWith('English edition ·') && !target.trim().startsWith(editionFallback.edition)) problems.push(`current-edition footer must start with "${editionFallback.edition}": ${source}`);
  for (const [sourceNeedle, targetNeedle] of literalPairsByLocale[locale.code]) {
    if (source.toLowerCase().includes(sourceNeedle) && target.includes(targetNeedle)) problems.push(`contextual phrase is translated literally (${targetNeedle}): ${source}`);
  }
  if (isVietnamBatch && locale.code === 'zh-Hant' && /\btransfer(?:s|red|ring)?\b/i.test(source) && target.includes('轉移')) problems.push(`travel transfer is translated as non-Taiwan usage "轉移": ${source}`);
  if (isVietnamBatch && locale.code === 'zh-Hant' && /\bboat\b/i.test(source) && target.includes('船遊')) problems.push(`boat travel is translated as non-Taiwan usage "船遊": ${source}`);
  if (isVietnamBatch && locale.code === 'th' && target.includes('ฮับ')) problems.push(`regional destination is translated with technical loanword "ฮับ": ${source}`);
  if (isVietnamBatch && locale.code === 'ja' && /\bhubs?\b/i.test(source) && target.includes('ハブ')) problems.push(`regional destination is translated with technical loanword "ハブ": ${source}`);
  if (isVietnamBatch && locale.code === 'ja' && source === 'Explore Vietnam' && target.includes('探す')) problems.push(`explore call-to-action is translated as search: ${source}`);
  if (isVietnamBatch && locale.code === 'ja' && source === 'Plan Vietnam' && target.includes('ベトナムを計画')) problems.push(`travel-planning call-to-action is unnatural: ${source}`);
  if (isVietnamBatch && locale.code === 'ja' && /\d日\s+に/.test(target)) problems.push(`localized Japanese date contains an unnatural space: ${source}`);
  for (const number of new Set(tokens(source, numberTokenPattern))) {
    if (!hasExactNumberToken(target, number)) problems.push(`number token "${number}" changed: ${source}`);
  }
  for (const date of new Set(tokens(source, englishDatePattern))) {
    if (target.includes(date)) problems.push(`English-form date remains unlocalized: ${source}`);
  }
  for (const url of new Set(tokens(source, /https?:\/\/[^\s)]+/g))) {
    if (!target.includes(url)) problems.push(`URL changed: ${source}`);
  }
  for (const marker of ['TripDistill', 'CC0', 'CC BY-SA', 'CC BY']) {
    if (source.includes(marker) && !target.includes(marker)) problems.push(`protected marker "${marker}" changed: ${source}`);
  }
  const sourceLetters = tokens(source, /[A-Za-z]/g).length;
  const targetScript = tokens(target, localeScripts[locale.code]).length;
  if (localizedRegionLabelPattern.test(source) && targetScript < 2) problems.push(`regional label appears untranslated: ${source}`);
  const exempt = /^(?:—|Photo:|Image:)|(?:CC BY|Wikimedia Commons|TripDistill\.com)/.test(source);
  const creditHasLocalizedProse = /\b(?:resized|converted|cropped?|edited|display|watermark|retained)\b/i.test(source);
  if (creditHasLocalizedProse && targetScript < 4) problems.push(`image-credit processing note appears untranslated: ${source}`);
  if (sourceLetters >= 55 && targetScript < 8 && !exempt) problems.push(`long copy appears untranslated: ${source}`);
  if (sourceLetters >= 80 && target.trim() === source.trim() && !exempt) problems.push(`long copy is identical to English: ${source}`);
}

const siblingTranslations = new Map();
const currentBatchName = path.basename(batchPath);
const earlierBatchNames = fs.readdirSync(expectedLocaleDirectory)
  .filter((name) => name.endsWith('.json') && name.localeCompare(currentBatchName, 'en') < 0)
  .sort();
for (const name of earlierBatchNames) {
  const siblingPath = path.join(expectedLocaleDirectory, name);
  const sibling = JSON.parse(fs.readFileSync(siblingPath, 'utf8'));
  if (sibling.qualityStatus !== 'reviewed') {
    problems.push(`earlier sibling ${name} is not reviewed; it cannot provide route coverage`);
    continue;
  }
  for (const [source, target] of Object.entries(sibling.translations || {})) {
    if (typeof target !== 'string' || !target.trim()) {
      problems.push(`earlier sibling ${name} has an empty target and cannot provide route coverage: ${source}`);
      continue;
    }
    if (!siblingTranslations.has(source)) siblingTranslations.set(source, { target, name });
    else if (siblingTranslations.get(source).target !== target) problems.push(`existing sibling conflict for source key: ${source}`);
  }
}

for (const [source, target] of localEntries) {
  const sibling = siblingTranslations.get(source);
  if (sibling && sibling.target !== target) problems.push(`conflicts with ${sibling.name}: ${source}`);
  if (sibling && sibling.target === target) problems.push(`duplicates earlier ${sibling.name}; omit this source key: ${source}`);
}

const covered = new Set([...localKeys, ...siblingTranslations.keys()]);
const missing = [...required].filter((source) => !covered.has(source));
if (missing.length) {
  for (const source of missing.slice(0, 25)) problems.push(`missing route source key: ${source}`);
  if (missing.length > 25) problems.push(`...and ${missing.length - 25} additional route source keys are missing`);
}

console.log(`${path.relative(root, batchPath)}: ${records.length} routes, ${rawUnits.length} raw units, ${required.size} unique source keys.`);
console.log(`${localKeys.size} keys in this file; ${[...required].filter((source) => siblingTranslations.has(source)).length} route keys already available in sibling batches; ${missing.length} missing.`);

if (problems.length) {
  console.error(`Batch validation failed with ${problems.length} problem(s):`);
  for (const problem of problems.slice(0, 100)) console.error(`- ${problem}`);
  if (problems.length > 100) console.error(`- ...and ${problems.length - 100} more`);
  process.exit(1);
}

console.log('Batch structure and declared-route coverage passed.');
