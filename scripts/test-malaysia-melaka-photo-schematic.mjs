#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const root = path.resolve(import.meta.dirname, '..');
const diagramPath = '/assets/images/malaysia-melaka-two-bank-route.svg';
const retiredPhotoPath = '/assets/images/malaysia-melaka-kampung-morten.webp';
const retiredPhotoSource = 'https://commons.wikimedia.org/wiki/File:Waiting_for_Iftar_at_Kampung_Morten,_Malacca.jpg';
const retiredPhotoSha256 = '90256bf4e654aa013b618e1fa46394dbc340fd2e76829b96a13642875fa28d53';
const routes = [
  '/malaysia/melaka/',
  '/malaysia/melaka/dutch-square-st-pauls/',
  '/malaysia/melaka/jonker-harmony-street/',
  '/malaysia/melaka/melaka-river-kampung-morten/',
  '/malaysia/melaka/bandar-hilir-portuguese-settlement/'
];
const locales = [
  { code: 'en', dir: '', alt: 'Non-scale route schematic: follow one confirmed public Melaka River bank from the historic core, check a public bridge before entering Kampung Morten’s public streets, then return on verified paths; an opposite-bank leg is optional only when open.', creator: 'TripDistill Editorial Team', nonScale: 'not to scale', reuse: 'reuse license', terms: 'Terms of use' },
  { code: 'zh-Hant', dir: 'zh', alt: '非比例路線示意：從歷史城區沿已確認可通行的馬六甲河公共河岸步行；先確認公共橋梁開放，再進入甘榜摩登的公共街道，之後沿已確認的路線返回；對岸路段只在確定開放時選用。', creator: 'TripDistill 編輯團隊', nonScale: '不按比例', reuse: '再利用授權', terms: '使用條款' },
  { code: 'ja', dir: 'ja', alt: '縮尺のないルート概念図：旧市街から、通行を確認したマラッカ川の公共河岸を歩き、公共橋の通行可否を確かめてからカンポン・モルテンの公道へ。確認済みの道で戻り、対岸の区間は通行できる場合のみ選びます。', creator: 'TripDistill編集チーム', nonScale: '縮尺なし', reuse: '再利用ライセンス', terms: '利用規約' },
  { code: 'ko', dir: 'ko', alt: '축척 없는 경로 안내도: 구시가지에서 통행이 확인된 말라카강 공공 강변길을 걷고, 공공 다리 통행을 확인한 뒤 캄풍 모르텐의 공공 도로로 들어갑니다. 확인된 길로 돌아오며, 맞은편 강변 구간은 개방된 경우에만 선택합니다.', creator: 'TripDistill 편집팀', nonScale: '축척 없음', reuse: '재사용 라이선스', terms: '이용 약관' },
  { code: 'th', dir: 'th', alt: 'แผนผังเส้นทางแบบไม่ตามมาตราส่วน: เดินจากย่านเมืองเก่าเลียบทางเดินสาธารณะริมแม่น้ำมะละกาที่ตรวจสอบแล้ว ตรวจว่าทางข้ามสาธารณะเปิดก่อนเข้าสู่ถนนสาธารณะใน Kampung Morten แล้วกลับทางที่ยืนยันแล้ว; เลือกช่วงฝั่งตรงข้ามเฉพาะเมื่อเปิดใช้ได้', creator: 'ทีมบรรณาธิการ TripDistill', nonScale: 'ไม่ตามมาตราส่วน', reuse: 'ใบอนุญาตให้ใช้ซ้ำ', terms: 'ข้อกำหนดการใช้งาน' }
];
const legendCopy = {
  en: { label: 'Melaka route diagram key', title: 'Read the numbered route', stages: ['Start at the historic-core public riverfront.', 'Follow one confirmed public riverbank path.', 'Cross one public bridge only after confirming it is open today.', 'Walk Kampung Morten’s public streets; homes and yards are private.'], solid: 'Solid route: return along the same confirmed public path.', dashed: 'Dashed route: optional return only if today’s bridge and opposite-bank public path are confirmed open.' },
  'zh-Hant': { label: '馬六甲路線示意圖圖例', title: '路線編號說明', stages: ['從歷史城區一側的公共河岸出發。', '沿一段已確認可通行的公共河岸路段前進。', '只有確認公共橋梁今日開放後才過橋。', '只走甘榜摩登的公共街道；住宅與庭院屬私人空間。'], solid: '實線：沿已確認可通行的同一條公共路線原路返回。', dashed: '虛線：只有確認橋梁與對岸公共步道今日開放後，才選作回程。' },
  ja: { label: 'マラッカのルート概念図の凡例', title: '番号付きルートの見方', stages: ['旧市街側の公共河岸から出発します。', '通行を確認した公共河岸の歩道を一続きに進みます。', '当日の開通を確認できた場合のみ、公共橋を1つ渡ります。', 'カンポン・モルテンの公道だけを歩き、住宅や庭には入りません。'], solid: '実線：通行を確認した同じ公共ルートで戻ります。', dashed: '破線：当日に橋と対岸の公共歩道の通行を確認できた場合のみ、任意の帰路として選べます。' },
  ko: { label: '말라카 경로 안내도 범례', title: '번호별 경로 읽는 법', stages: ['구시가지 쪽 공공 강변길에서 시작합니다.', '통행이 확인된 하나의 연속된 공공 강변길을 따라갑니다.', '당일 개방이 확인된 경우에만 공공 다리 하나를 건넙니다.', '캄풍 모르텐의 공공 도로만 걷고, 주택과 마당에는 들어가지 않습니다.'], solid: '실선: 통행을 확인한 같은 공공 경로로 돌아옵니다.', dashed: '점선: 당일 다리와 맞은편 공공 강변길이 개방된 것을 확인한 경우에만 선택 귀로로 이용합니다.' },
  th: { label: 'คำอธิบายสัญลักษณ์เส้นทางมะละกา', title: 'วิธีอ่านหมายเลขเส้นทาง', stages: ['เริ่มที่ทางเดินสาธารณะริมแม่น้ำฝั่งย่านเมืองเก่า', 'เดินตามทางเดินสาธารณะริมแม่น้ำที่ตรวจสอบแล้วและต่อเนื่อง', 'ข้ามสะพานสาธารณะหนึ่งแห่งเฉพาะเมื่อยืนยันว่าเปิดในวันนั้น', 'เดินเฉพาะถนนสาธารณะใน Kampung Morten; บ้านและลานบ้านเป็นพื้นที่ส่วนตัว'], solid: 'เส้นทึบ: กลับตามเส้นทางสาธารณะเดิมที่ยืนยันแล้ว', dashed: 'เส้นประ: เลือกเป็นทางกลับได้เฉพาะเมื่อยืนยันว่าสะพานและทางเดินสาธารณะฝั่งตรงข้ามเปิดในวันนั้น' }
};
const retiredCredit = 'Waiting for iftar at Kampung Morten';

function walk(node, out = []) {
  out.push(node);
  for (const child of node.childNodes || []) walk(child, out);
  return out;
}
function attr(node, name) { return node?.attrs?.find((item) => item.name === name)?.value; }
function text(node) { return node?.nodeName === '#text' ? node.value : (node?.childNodes || []).map(text).join(''); }
function pagePath(dir, route) { return path.join(root, dir, route.slice(1), 'index.html'); }

const svgFile = path.join(root, diagramPath.slice(1));
assert.ok(fs.existsSync(svgFile), 'original Melaka SVG must exist');
const svg = fs.readFileSync(svgFile, 'utf8');
assert.match(svg, /<metadata>[^<]*Original TripDistill[\s\S]*no geographic scale[\s\S]*No separate reuse license/i);
assert.match(svg, /historic riverfront[\s\S]*bridge[\s\S]*Kampung Morten/i);
assert.match(svg, /dashed return option is conditional/i);

const retiredFile = path.join(root, retiredPhotoPath.slice(1));
assert.ok(fs.existsSync(retiredFile), 'conflicted source derivative must remain in the repository');
assert.equal(crypto.createHash('sha256').update(fs.readFileSync(retiredFile)).digest('hex'), retiredPhotoSha256, 'retired photo bytes must remain unchanged');

const inventory = JSON.parse(fs.readFileSync(path.join(root, 'reports/photo-license-inventory.json'), 'utf8'));
const records = inventory.entries.flatMap((entry) => entry.sourceRecords || []);
const retired = records.find((item) => item.assetPath === retiredPhotoPath);
assert.ok(retired, 'license inventory must retain the photo provenance record');
assert.equal(retired.sourceUrl, retiredPhotoSource);
assert.equal(retired.license, null);
assert.equal(retired.inventoryStatus, 'unused');
assert.equal(retired.useCount, 0);
assert.match(retired.rightsStatus, /CC BY-SA 4\.0.*EXIF.*Copyright 2019/i);
const original = records.find((item) => item.assetPath === diagramPath);
assert.ok(original, 'license inventory must include the new original SVG');
assert.equal(original.assetType, 'original-planning-diagram');
assert.equal(original.creator, 'TripDistill Editorial Team');
assert.equal(original.license, null);
assert.equal(original.rightsStatus, 'Project original; no separate reuse license declared');
assert.equal(original.useCount, 6);

for (const locale of locales) {
  for (const route of routes) {
    const html = fs.readFileSync(pagePath(locale.dir, route), 'utf8');
    const document = parse(html);
    const nodes = walk(document);
    const images = nodes.filter((node) => node.tagName === 'img');
    const diagramImages = images.filter((node) => attr(node, 'src') === diagramPath);
    const expectedImageUses = route === '/malaysia/melaka/' ? 2 : 1;
    assert.equal(diagramImages.length, expectedImageUses, `${locale.code} ${route} original diagram use count`);
    const routeKey = nodes.find((node) => node.tagName === 'aside' && attr(node, 'class') === 'melaka-route-key');
    assert.ok(routeKey, `${locale.code} ${route} must display a route legend`);
    assert.equal(attr(routeKey, 'aria-label'), legendCopy[locale.code].label, `${locale.code} localized route-key label`);
    const routeKeyText = text(routeKey);
    assert.ok(routeKeyText.includes(legendCopy[locale.code].title), `${locale.code} localized route-key title`);
    for (const stage of legendCopy[locale.code].stages) assert.ok(routeKeyText.includes(stage), `${locale.code} ${route} route key must explain stage ${stage}`);
    assert.ok(routeKeyText.includes(legendCopy[locale.code].solid), `${locale.code} solid return meaning`);
    assert.ok(routeKeyText.includes(legendCopy[locale.code].dashed), `${locale.code} conditional dashed return meaning`);
    if (route === '/malaysia/melaka/') {
      const living = nodes.find((node) => node.tagName === 'section' && attr(node, 'id') === 'living');
      assert.ok(walk(living).includes(routeKey), `${locale.code} hub legend must sit beside the living-neighborhood diagram`);
    } else if (route === '/malaysia/melaka/melaka-river-kampung-morten/') {
      const hero = nodes.find((node) => node.tagName === 'section' && attr(node, 'class') === 'md-hero');
      const decision = nodes.find((node) => node.tagName === 'section' && attr(node, 'class') === 'md-decision-strip');
      assert.ok(nodes.indexOf(routeKey) > nodes.indexOf(hero) && nodes.indexOf(routeKey) < nodes.indexOf(decision), `${locale.code} Morten legend must follow its hero diagram`);
    } else {
      const related = nodes.find((node) => node.tagName === 'section' && attr(node, 'aria-labelledby') === 'related-title');
      assert.ok(walk(related).includes(routeKey), `${locale.code} related-card legend must accompany the Melaka diagram thumbnail`);
    }
    assert.ok(!html.includes(retiredPhotoPath), `${locale.code} ${route} must not load the retired photo`);
    assert.ok(!html.includes(retiredPhotoSource), `${locale.code} ${route} must not credit the retired photo as a live asset`);
    assert.ok(!html.includes(retiredCredit), `${locale.code} ${route} must not show the retired photo caption`);
    assert.ok(html.includes('2026-10-12'), `${locale.code} ${route} reviewed date`);
  }

  const guideHtml = fs.readFileSync(pagePath(locale.dir, '/malaysia/melaka/melaka-river-kampung-morten/'), 'utf8');
  const guideNodes = walk(parse(guideHtml));
  const metas = guideNodes.filter((node) => node.tagName === 'meta');
  assert.equal(attr(metas.find((node) => attr(node, 'property') === 'og:image:alt'), 'content'), locale.alt, `${locale.code} Open Graph image alt`);
  assert.equal(attr(metas.find((node) => attr(node, 'name') === 'twitter:image:alt'), 'content'), locale.alt, `${locale.code} Twitter image alt`);
  const hero = guideNodes.find((node) => node.tagName === 'figure' && attr(node, 'class') === 'md-hero-image');
  assert.ok(hero, `${locale.code} guide must retain its image figure`);
  assert.equal(attr(walk(hero).find((node) => node.tagName === 'img'), 'alt'), locale.alt, `${locale.code} page image alt`);
  const heroCaption = text(walk(hero).find((node) => node.tagName === 'figcaption'));
  assert.ok(heroCaption.includes(locale.nonScale), `${locale.code} visible guide caption must say the diagram is not to scale`);
  const jsonNode = guideNodes.find((node) => node.tagName === 'script' && attr(node, 'type') === 'application/ld+json');
  const graph = JSON.parse(jsonNode.childNodes[0].value)['@graph'];
  const guide = graph.find((node) => node['@type'] === 'TravelGuide');
  assert.equal(guide.image, 'https://tripdistill.com' + diagramPath, `${locale.code} structured guide image`);
  const imageObject = graph.find((node) => node['@type'] === 'ImageObject');
  assert.ok(imageObject, `${locale.code} structured image provenance`);
  assert.equal(imageObject.description, locale.alt, `${locale.code} structured image description`);
  assert.equal(imageObject.creator.name, locale.creator, `${locale.code} structured image creator`);
  assert.ok(imageObject.caption.includes(locale.nonScale), `${locale.code} structured caption scale note`);
  assert.ok(imageObject.creditText.includes(locale.reuse), `${locale.code} structured rights/provenance`);
  assert.ok(!Object.hasOwn(imageObject, 'license'), `${locale.code} original SVG must not imply an open license`);

  const hubHtml = fs.readFileSync(pagePath(locale.dir, '/malaysia/melaka/'), 'utf8');
  const hubNodes = walk(parse(hubHtml));
  const figure = hubNodes.find((node) => node.tagName === 'figure' && attr(node, 'class') === 'melaka-schematic');
  assert.ok(figure, `${locale.code} hub must show the route schematic with a caption`);
  assert.equal(attr(walk(figure).find((node) => node.tagName === 'img'), 'alt'), locale.alt, `${locale.code} hub diagram alt`);
  assert.ok(text(walk(figure).find((node) => node.tagName === 'figcaption')).includes(locale.nonScale), `${locale.code} hub visible scale note`);
  const sourceSection = hubNodes.find((node) => node.tagName === 'section' && attr(node, 'class') === 'section sources');
  const sourceText = text(sourceSection);
  assert.ok(sourceText.includes(locale.creator), `${locale.code} hub original artwork creator credit`);
  assert.ok(sourceText.includes(locale.terms), `${locale.code} hub project terms link`);
}

console.log('Melaka schematic regression passed: six uses, five localized route legends/alt/captions/metadata sets, and retired-photo provenance retained without live references.');
