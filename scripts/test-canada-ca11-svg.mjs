#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { descendants, descendantsByTag, numberAttr, parseXmlFile, pathPoints } from './svg-test-utils.mjs';

const rootDir = path.resolve(import.meta.dirname, '..');
const relative = 'assets/images/tripdistill-canada-ottawa-gatineau-access.svg';
const file = path.join(rootDir, relative);
assert.equal(crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'), 'ffeee0c1f94a1eaf3c75db8265fe3b2ead17c0a26e3b45c2095ff75ff854ec8f');
const root = parseXmlFile(file);
const svgNamespace = 'http://www.w3.org/2000/svg';
assert.equal(root.tag, 'svg');
assert.equal(root.uri, svgNamespace);
assert.equal(root.attrs.width, '1200');
assert.equal(root.attrs.height, '835');
assert.equal(root.attrs.viewBox, '0 0 1200 835');
assert.equal(root.attrs.role, 'img');

const elements = descendants(root);
for (const element of elements) {
  if (element.tag === 'rect') {
    const x = numberAttr(element, 'x'), y = numberAttr(element, 'y');
    const width = numberAttr(element, 'width'), height = numberAttr(element, 'height');
    assert.ok(x >= 0 && y >= 0 && x + width <= 1200 && y + height <= 835, ['rect', element.attrs]);
  } else if (element.tag === 'circle') {
    const cx = numberAttr(element, 'cx'), cy = numberAttr(element, 'cy'), radius = numberAttr(element, 'r');
    assert.ok(cx - radius >= 0 && cy - radius >= 0 && cx + radius <= 1200 && cy + radius <= 835, ['circle', element.attrs]);
  } else if (element.tag === 'text') {
    const x = numberAttr(element, 'x'), y = numberAttr(element, 'y');
    assert.ok(x >= 0 && x <= 1200 && y >= 0 && y <= 835, ['text', element.attrs]);
  } else if (element.tag === 'path' && element.attrs.d) {
    for (const [x, y] of pathPoints(element.attrs.d, element.attrs.d, ['M', 'L', 'H', 'V', 'C'])) {
      assert.ok(x >= 0 && x <= 1200 && y >= 0 && y <= 835, ['path coordinate outside viewBox', element.attrs.d]);
    }
  }
}

const texts = descendantsByTag(root, 'text').map((element) => [numberAttr(element, 'x'), numberAttr(element, 'y'), element.content.filter((item) => typeof item === 'string').join('').trim()]);
const headers = ['ENGLISH', '繁體中文', '日本語', '한국어', 'ภาษาไทย'];
const headerX = [68, 288, 508, 728, 948];
for (const [index, label] of headers.entries()) assert.ok(texts.some(([x, y, text]) => x === headerX[index] && y === 505 && text === label), [headerX[index], label]);
const columns = [82, 288, 508, 728, 948];
const expected = [
  ['City base', 'River / crossing', 'Connection to verify', 'Choose one park sector'],
  ['城市住宿基地', '河流／跨河', '需核實的交通', '園區擇一區'],
  ['市内の宿泊拠点', '川／渡河', '要確認の接続', '公園は一地区を選択'],
  ['도시 숙박 거점', '강 / 강 건너기', '확인할 연결편', '공원은 한 구역 선택'],
  ['ฐานที่พักในเมือง', 'แม่น้ำ / ข้ามฝั่ง', 'การเดินทางที่ต้องตรวจสอบ', 'เลือกพื้นที่สวนเพียงแห่งเดียว']
];
const rowY = [541, 581, 621, 661];
for (const [columnIndex, x] of columns.entries()) {
  for (const [rowIndex, y] of rowY.entries()) {
    const text = expected[columnIndex][rowIndex];
    assert.ok(texts.some(([tx, ty, value]) => tx === x && ty === y && value === text), [x, y, text]);
  }
}
assert.ok(elements.filter((element) => element.tag === 'text').length >= 35);
const disclaimers = [
  '示意圖，非按比例；虛線不代表特定橋梁、大眾運輸、道路或行程時間。',
  '概念図・縮尺なし。点線は特定の橋、公共交通、道路、所要時間を示しません。',
  '개념도이며 축척에 맞지 않습니다. 점선은 특정 다리, 대중교통, 도로 또는 이동 시간을 나타내지 않습니다.',
  'เป็นแผนภาพแนวคิด ไม่ได้วาดตามมาตราส่วน เส้นประไม่ระบุสะพาน ขนส่งสาธารณะ ถนน หรือเวลาเดินทาง'
];
assert.ok(disclaimers.every((phrase) => texts.some(([, , text]) => text === phrase)));
console.log(`CA11 SVG passed: strict XML well-formed; ${elements.length} elements; root and shape coordinates fit 1200×835; all five language legend columns and four entries present; five-language non-route disclaimer present.`);
