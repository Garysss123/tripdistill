import fs from 'node:fs';
import path from 'node:path';
import { collectTranslationWork, getLocaleConfig, root } from './i18n-lib.mjs';
import {wrongLocaleScriptReason} from './i18n-locale-script-check.mjs';

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
const isItalyBatch = batch.routes.some((route) => route === '/italy/' || route.startsWith('/italy/')) || /^46[a-v]-italy/i.test(path.basename(batchPath));
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
const italyLiteralPairsByLocale = {
  'zh-Hant': [
    ['commitment', '承諾'],
    ['product', '產品'],
    ['threshold', '門檻'],
    ['role', '角色'],
    ['civic', '市民'],
    ['civic', '市政文化'],
    ['save', '保存'],
    ['use one layer', '使用一層'],
    ['complete layers', '完整層次'],
    ['visual layer', '視覺層次'],
    ['street layers', '街道層次'],
    ['solve different days', '適合不同日子'],
    ['deliberate road routes', '刻意規劃的道路路線'],
    ['booked excursions', '預約好的遊覽'],
    ['cultural day', '文化日'],
    ['civic day', '市政文化日'],
    ['civic day', '城市文化日'],
    ['basilica city', '大殿城市'],
    ['competing bases', '互相競爭的基地'],
    ['collection argument', '收藏主題'],
    ['po delta day', '波河三角洲日'],
    ['working-water', '運作中的水域'],
    ['choosing one sestiere', '一個 sestieri'],
    ['optional stop', '選配停點'],
    ['lagoon reading', '潟湖理解'],
    ['glass institutions', '玻璃機構'],
    ['open the local threshold', '打開街區入口'],
    ['controlled centre', '受控主軸'],
    ['time-lock', '時間鎖'],
    ['event closures', '活動關閉'],
    ['non-negotiable threshold', '不可妥協的進入條件'],
    ['palladian city', 'Palladian 城市'],
    ['villa decision', '別墅決定'],
    ['controlled cultural anchor', '受控的文化主軸'],
    ['producer', '生產者的時鐘'],
    ['working city', '仍在運作的城市'],
    ['regulated visit', '受規範的參訪'],
    ['walls consume distance', '吃掉距離'],
    ['mosaic-and-estuary', '河口分線'],
    ['regional services', '區域服務'],
    ['southbound line', '南側出口'],
    ['two clocks', '兩個時鐘'],
    ['summer storms', '早晨後形成'],
    ['operating margin', '運作餘裕'],
    ['erase the rail return', '吃掉鐵路返程'],
    ['open the principal threshold', '開始主要入口'],
    ['lower valley day', '低海拔山谷日'],
    ['city day', '城市日'],
    ['museum city', '博物館城市'],
    ['remaining attention', '剩餘注意力'],
    ['unlocks', '解鎖'],
    ['milan rewards', '米蘭重視'],
    ['operating zones', '運作區域'],
    ['one more pin', '圖釘'],
    ['when a roof', '屋頂'],
    ['fixed-slot-to-castle score', '評分'],
    ['arriving train', '抵達中的火車'],
    ['controlled visit', '受控參觀'],
    ['daypart braid', '時段編織'],
    ['optional design venue', '選配設計場館'],
    ['museum day', '博物館日'],
    ['arrival product', '抵達票券'],
    ['mainland gateway', '本土入口'],
    ['mainland towns', '本土城鎮'],
    ['mainland pier', '本土碼頭'],
    ['mainland buffer', '本土餘裕'],
    ['crossing clock', '穿越時鐘'],
    ['central-lake board', '中央湖區看板'],
    ['give one town real time', '給一座城鎮真正的時間'],
    ['read one town on foot', '步行理解'],
    ['street-and-waterfront chapter', '街道與湖濱篇章'],
    ['regular services', '普通服務'],
    ['mountain-edge day', '山邊日'],
    ['lake day', '湖區日'],
    ['service in reserve', '保留一班服務'],
    ['landing-and-return billet', '返程票據'],
    ['land with one purpose', '帶著一個目的登島'],
    ['time to read it', '留足理解時間'],
    ['service and admissions still agree', '服務與入場仍相配'],
    ['rail gateway', '鐵路入口'],
    ['road circuit', '道路環線'],
    ['civic rooms', '市政空間'],
    ['civic layer', '市政層次'],
    ['bounded plan', '清楚界線規劃'],
    ['reset in', '重新整頓'],
    ['arcaded street sequence', '拱廊街道序列'],
    ['dynastic city reading', '王朝城市閱讀'],
    ['exterior reading', '閱讀外部空間'],
    ['second layer', '第二層'],
    ['read the current visit', '讀取目前參觀安排'],
    ['vertical approach', '垂直進程'],
    ['landscape reading', '景觀理解'],
    ['selected threshold remains complete', '入口真正完成'],
    ['protected branch', '受保護的支線'],
    ['town day', '小鎮日'],
    ['town clock', '小鎮時鐘'],
    ['entry pressure', '入場壓力'],
    ['eastern sicily', '東西西里'],
    ['sea-state exposure', '海況曝曬'],
    ['mainland journey', '本土旅程'],
    ['reposition', '重新定位'],
    ['city day', '城市一日'],
    ['capacity control', '容量管制']
  ],
  ja: [
    ['commitment', '約束'],
    ['product', '商品'],
    ['hinge', '蝶番'],
    ['hinge', 'ヒンジ'],
    ['save', '保存'],
    ['service gaps', '運休'],
    ['complete layers', '完結した層'],
    ['visual layer', '視覚の層'],
    ['secondary layer', '副次的な層'],
    ['disposable stops', '使い捨て'],
    ['rail decision', '鉄道の判断'],
    ['solve different days', '別々の日を解決'],
    ['deliberate road routes', '意図的な道路ルート'],
    ['booked excursions', '予約した遠足'],
    ['useful', '有用な'],
    ['civic', '市民史'],
    ['civic spaces', '市民空間'],
    ['civic', '市民中心'],
    ['civic', '都市文化'],
    ['regional', '近郊列車'],
    ['palladian villa', 'パッラーディオ邸'],
    ['interior depth', '内部を深く'],
    ['fixed admission', '固定の入場'],
    ['remote beaches', '遠い浜'],
    ['distant beaches', '遠い浜'],
    ['ridge city', '尾根都市'],
    ['central block', '中心の時間帯'],
    ['as context', '背景に使います'],
    ['return to that station rather than', '戻るのではなく'],
    ['civic buildings', '市民施設'],
    ['transport decisions', '交通判断'],
    ['working city', '仕事が続く都市'],
    ['working-water', '仕事が続く水辺'],
    ['trunk ticket', '幹線チケット'],
    ['po delta day', 'ポー川デルタの日'],
    ['walking city interrupted by water', '水で歩みが区切られる'],
    ['same side of the lagoon logic', 'ラグーンの理屈'],
    ['controlled centre', '管理された中心'],
    ['historical street reading', '通りを読む集中力'],
    ['adds two waterbus boardings', '乗船を2回加え'],
    ['booked interior', '予約した内部'],
    ['read the piazza', '広場と湾を読み'],
    ['security-controlled interior', '保安管理の内部'],
    ['disciplined two-island', '規律ある2島'],
    ['open the local threshold', '地域の入口を開く'],
    ['written inter-island manifest', '帰路が取り残され'],
    ['lagoon reading', 'ラグーンを読む'],
    ['read the displayed', '目的地を読みます'],
    ['visitor conditions', '来訪条件を使います'],
    ['time-lock', '時間ロック'],
    ['civic palace', '市民宮殿'],
    ['license to compress', '許可'],
    ['changes character', '性格が変わ'],
    ['palladian villas', 'パッラーディオ邸'],
    ['event closures', '行事の閉鎖'],
    ['civic museums', '都市文化博物館'],
    ['non-negotiable threshold', '変更できない入口'],
    ['major interior', '大きな内部'],
    ['controlled cultural anchor', '都市文化の軸'],
    ['civic collections', '都市文化コレクション'],
    ['central civic interior', '都市文化施設'],
    ['villa decision', '邸宅の判断'],
    ['civic core', '都市文化地区'],
    ['museum context', '博物館の背景'],
    ['outward line', '外向きのルート'],
    ['open different corridors', '回廊を開'],
    ['vertical system', '高低差の仕組み'],
    ['operating season', '固有の運行季節'],
    ['clear valley', '谷の通りが晴れ'],
    ['summer storms', '朝の後'],
    ['summer trail translated', '雪の上に置き換え'],
    ['museum city', '博物館の町'],
    ['operating margin', '運行余裕'],
    ['lower valley day', '低い谷の日'],
    ['rail gateway', '鉄道の入口'],
    ['rail-and-bus corridor', '鉄道・バスの回廊'],
    ['open the principal threshold', '主な入口を開く'],
    ['erase the rail return', '帰路が消え'],
    ['station corridor', '駅の回廊'],
    ['mainland gateway', '本土の入口'],
    ['mainland towns', '本土の別の町'],
    ['mainland pier', '本土の桟橋'],
    ['crossing clock', '渡り時間表'],
    ['give one town real time', '本当の時間'],
    ['read one town on foot', '歩いて読む'],
    ['street-and-waterfront chapter', '一章'],
    ['mountain-edge day', '山際の日'],
    ['landing-and-return billet', 'ビレット'],
    ['land with one purpose', '目的ひとつで上陸'],
    ['time to read it', '読む時間'],
    ['mainland buffer', '本土側の余裕'],
    ['lake day', '湖の日'],
    ['close connection', '接続が消え'],
    ['protected rail', '保護した鉄道'],
    ['unlocks', '全体が開く'],
    ['operating zones', '移動区域'],
    ['one more pin', 'ピン'],
    ['controlled interior', '管理入場の内部'],
    ['coherent day', '一日を保て'],
    ['correct product', '入場プラン'],
    ['civic threshold', '街の歴史を読む入口'],
    ['deliberate street line', '意図した通りの線'],
    ['controlled threshold', '管理された入口'],
    ['civic room', '街の空間を読む'],
    ['current inclusion', '対象範囲を読み'],
    ['eastward line', '東へ一本の線'],
    ['arriving train', '到着列車を'],
    ['controlled visit', '管理された見学'],
    ['public-space focus', '主題をひとつ使い'],
    ['modern-city reading', '現代都市を最も明確に読め'],
    ['long daytime block', '昼の長い時間帯を与え'],
    ['short evening finish', '短い夜の終点'],
    ['optional design venue', '任意のデザイン施設'],
    ['museum day', '博物館の日'],
    ['daypart braid', '時間帯ブレイド'],
    ['rail gateways', '鉄道入口'],
    ['late return', '遅い帰路'],
    ['pedestrian and traffic field', '歩行者・交通空間'],
    ['regional services', '近郊列車'],
    ['booking contract', '予約計画を与え'],
    ['competing bases', '競合する'],
    ['regulated visit', '規定訪問'],
    ['rail-centre day', '鉄道中心部'],
    ['controlled civic door', '管理された都市文化'],
    ['walls consume distance', '距離を使う'],
    ['arrive at the chosen system', '仕組み'],
    ['changing systems', '仕組み'],
    ['mosaic-and-estuary', '河口の分岐'],
    ['mosaic-delta-split-spread', '分岐スプレッド'],
    ['landscape system', '景観の仕組み'],
    ['not permission', '許可ではありません'],
    ['access system', 'アクセスの仕組み'],
    ['cultural day', '文化の日'],
    ['legal parking', '合法駐車'],
    ['shuttle gaps', '空白']
  ],
  ko: [
    ['product', '상품'],
    ['layer', '층위'],
    ['civic', '시민'],
    ['folio', '도감'],
    ['controlled interior', '통제된 실내'],
    ['official booking', '공식 예약을 읽'],
    ['solve different arrivals', '도착 동선을 해결'],
    ['base board', '거점 보드'],
    ['street argument', '거리 주제'],
    ['room-by-room reading', '방마다 천천히 읽'],
    ['recovery margin', '회복 여유'],
    ['rail gate', '철도 입구'],
    ['day table', '하루표'],
    ['ledger', '장부'],
    ['crater product', '행사'],
    ['one-way controls', '통제를 읽'],
    ['full window', '전체 창구'],
    ['buried city carefully', '도시를 세심하게 읽']
  ],
  th: [
    ['', 'โปรดตรวจสอบทางเข้า การเดินทาง สภาพอากาศ และขากลับจากข้อมูลทางการก่อนเดินทาง'],
    ['', 'ข้อมูลเฉพาะของเส้นทาง:'],
    ['', 'เส้นทางและการเข้าชม'],
    ['', 'คู่มือท่องเที่ยวเส้นทางนี้'],
    ['', 'แนวทางและการเข้าชมของ:']
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
  const wrongScript=wrongLocaleScriptReason(locale.code,source,target);
  if(wrongScript)problems.push(`${wrongScript}: ${source}`);
  if (!required.has(source)) problems.push(`source key is outside the declared routes: ${source}`);
  if (typeof target !== 'string' || !target.trim()) problems.push(`empty target: ${source}`);
  if (typeof target !== 'string') continue;
  const editionFallback = localeEditionFallbacks[locale.code];
  if (source === 'EN' && target.trim() !== editionFallback.short) problems.push(`current-edition short label must be "${editionFallback.short}": ${source}`);
  if (source.startsWith('English edition ·') && !target.trim().startsWith(editionFallback.edition)) problems.push(`current-edition footer must start with "${editionFallback.edition}": ${source}`);
  for (const [sourceNeedle, targetNeedle] of literalPairsByLocale[locale.code]) {
    if (source.toLowerCase().includes(sourceNeedle) && target.includes(targetNeedle)) problems.push(`contextual phrase is translated literally (${targetNeedle}): ${source}`);
  }
  if (isItalyBatch) {
    for (const [sourceNeedle, targetNeedle] of italyLiteralPairsByLocale[locale.code]) {
      if (source.toLowerCase().includes(sourceNeedle) && target.includes(targetNeedle)) problems.push(`Italy planning phrase is translated literally (${targetNeedle}): ${source}`);
    }
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
  if (/\bedited by\b/i.test(source) && /\bedited by\b/i.test(target)) problems.push(`image-credit editor note remains in English: ${source}`);
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
