#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { descendants, descendantsByTag, numberAttr, parseXmlFile, pathPoints, textContent } from './svg-test-utils.mjs';
import { removeRenderedTemp, renderSvgToTempPng } from './svg-test-render.mjs';

const rootDir = path.resolve(import.meta.dirname, '..');
const svgFile = path.join(rootDir, 'assets/images/tripdistill-canada-niagara-falls-decision.svg');
const root = parseXmlFile(svgFile);
const namespace = 'http://www.w3.org/2000/svg';
assert.equal(root.tag, 'svg');
assert.equal(root.uri, namespace);
assert.equal(root.attrs.width, '1200');
assert.equal(root.attrs.height, '700');
assert.equal(root.attrs.viewBox, '0 0 1200 700');
assert.equal(root.attrs.role, 'img');
assert.equal(root.attrs['aria-labelledby'], 'title desc');
const elements = descendants(root);
const ids = elements.filter((element) => element.attrs.id).map((element) => element.attrs.id);
assert.equal(ids.length, new Set(ids).size, 'SVG IDs must be unique.');
assert.ok(['title', 'desc'].every((id) => ids.includes(id)));

for (const element of elements) {
  if (element.tag === 'rect') {
    const x = numberAttr(element, 'x'), y = numberAttr(element, 'y');
    const width = numberAttr(element, 'width'), height = numberAttr(element, 'height');
    assert.ok(x >= 0 && y >= 0 && x + width <= 1200 && y + height <= 700, ['rect', element.attrs]);
  } else if (element.tag === 'circle') {
    const cx = numberAttr(element, 'cx'), cy = numberAttr(element, 'cy'), radius = numberAttr(element, 'r');
    assert.ok(cx - radius >= 0 && cy - radius >= 0 && cx + radius <= 1200 && cy + radius <= 700, ['circle', element.attrs]);
  } else if (element.tag === 'text') {
    const x = numberAttr(element, 'x'), y = numberAttr(element, 'y');
    assert.ok(x >= 0 && x <= 1200 && y >= 0 && y <= 700, ['text', element.attrs]);
  } else if (element.tag === 'path' && element.attrs.d) {
    for (const [x, y] of pathPoints(element.attrs.d, element.attrs.d, ['M', 'L', 'H', 'V', 'C'])) {
      assert.ok(x >= 0 && x <= 1200 && y >= 0 && y <= 700, [element.attrs.d, x, y]);
    }
  }
}

const textNodes = descendantsByTag(root, 'text');
const texts = textNodes.map((element) => [numberAttr(element, 'x'), numberAttr(element, 'y'), textContent(element).trim()]);
const transferTitles = textNodes.filter((element) => textContent(element).trim() === 'PICK A TRANSFER');
assert.equal(transferTitles.length, 1, 'The second card must have exactly one transfer heading.');
const transferTitle = transferTitles[0];
assert.equal(numberAttr(transferTitle, 'x'), 404);
assert.equal(numberAttr(transferTitle, 'y'), 174);
assert.equal(numberAttr(transferTitle, 'font-size'), 13, 'The second-card heading needs its inset-safe font size.');
const headers = ['ENGLISH', '繁體中文', '日本語', '한국어', 'ภาษาไทย'];
const headerX = [70, 290, 510, 730, 950];
for (const [index, label] of headers.entries()) assert.ok(texts.some(([x, y, text]) => x === headerX[index] && y === 427 && text === label), [headerX[index], label]);
const columns = [80, 290, 510, 730, 950];
const expectedRows = [
  ['Rail arrival', '鐵路抵達', '鉄道で到着', '철도 도착', 'เดินทางด้วยรถไฟ'],
  ['Local transfer', '當地接駁', '現地の移動', '현지 환승', 'ต่อรถในพื้นที่'],
  ['Falls district', '瀑布區', '滝エリア', '폭포 지구', 'ย่านน้ำตก'],
  ['Other day / book ride', '另一天／預約接送', '別日／送迎を予約', '다른 날 / 차량 예약', 'วันอื่น / จองรถรับส่ง']
];
const rowY = [459, 496, 533, 570];
for (const [rowIndex, y] of rowY.entries()) {
  for (const [columnIndex, x] of columns.entries()) {
    const phrase = expectedRows[rowIndex][columnIndex];
    assert.ok(texts.some(([tx, ty, text]) => tx === x && ty === y && text === phrase), [x, y, phrase]);
  }
}
const disclaimers = [
  'Schematic only; not to scale. Dashed links show itinerary decisions, not actual roads, rail, shuttle routes or travel times.',
  '僅為示意，非按比例。虛線表示行程規劃，不代表實際道路、鐵路、接駁路線或交通時間。',
  '概念図で縮尺なし。破線は旅程の判断を示し、実際の道路・鉄道・シャトル路線・所要時間ではありません。',
  '개념도이며 축척에 맞지 않습니다. 점선은 일정 결정을 나타내며 실제 도로, 철도, 셔틀 노선 또는 이동 시간이 아닙니다.',
  'แผนภาพแนวคิด ไม่ได้วาดตามมาตราส่วน เส้นประแสดงการวางแผน ไม่ใช่ถนน รถไฟ เส้นทางรถรับส่ง หรือเวลาเดินทางจริง'
];
assert.ok(disclaimers.every((line) => texts.some(([, , text]) => text === line)));

function readPng(file) {
  const raw = fs.readFileSync(file);
  assert.equal(raw.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  let cursor = 8;
  const chunks = [];
  let width, height, bitDepth, colorType;
  while (cursor < raw.length) {
    const length = raw.readUInt32BE(cursor);
    const kind = raw.toString('ascii', cursor + 4, cursor + 8);
    const payload = raw.subarray(cursor + 8, cursor + 8 + length);
    cursor += length + 12;
    if (kind === 'IHDR') {
      width = payload.readUInt32BE(0);
      height = payload.readUInt32BE(4);
      bitDepth = payload[8];
      colorType = payload[9];
      assert.equal(payload[10], 0);
      assert.equal(payload[11], 0);
      assert.equal(payload[12], 0);
    } else if (kind === 'IDAT') chunks.push(payload);
    else if (kind === 'IEND') break;
  }
  assert.ok(bitDepth === 8 && [2, 6].includes(colorType), [bitDepth, colorType]);
  const channels = colorType === 2 ? 3 : 4;
  const stride = width * channels;
  const packed = zlib.inflateSync(Buffer.concat(chunks));
  const rows = [];
  let previous = Buffer.alloc(stride);
  let offset = 0;
  for (let rowIndex = 0; rowIndex < height; rowIndex++) {
    const filterType = packed[offset];
    const scanline = Buffer.from(packed.subarray(offset + 1, offset + 1 + stride));
    offset += stride + 1;
    for (let index = 0; index < stride; index++) {
      const left = index >= channels ? scanline[index - channels] : 0;
      const above = previous[index];
      const upperLeft = index >= channels ? previous[index - channels] : 0;
      if (filterType === 1) scanline[index] = (scanline[index] + left) & 255;
      else if (filterType === 2) scanline[index] = (scanline[index] + above) & 255;
      else if (filterType === 3) scanline[index] = (scanline[index] + Math.floor((left + above) / 2)) & 255;
      else if (filterType === 4) {
        const predictor = left + above - upperLeft;
        const distances = [Math.abs(predictor - left), Math.abs(predictor - above), Math.abs(predictor - upperLeft)];
        const nearest = distances[0] <= distances[1] && distances[0] <= distances[2] ? left : distances[1] <= distances[2] ? above : upperLeft;
        scanline[index] = (scanline[index] + nearest) & 255;
      } else assert.equal(filterType, 0, `Unsupported PNG filter: ${filterType}`);
    }
    rows.push(scanline);
    previous = scanline;
  }
  return { width, height, channels, rows };
}

const rendered = renderSvgToTempPng(svgFile, 1200, 700, 'ca12-niagara-svg-');
try {
  const { width, height, channels, rows } = readPng(rendered.pngFile);
  assert.deepEqual([width, height], [1200, 700], [width, height]);
  const pixel = (x, y) => [...rows[y].subarray(x * channels, x * channels + 3)];
  assert.deepEqual(pixel(10, 10), [244, 241, 233], 'Rendered background pixel changed.');
  const cardColors = [[246, 231, 227], [232, 239, 240], [232, 238, 229], [242, 237, 219]];
  const cardPoints = [[80, 145], [356, 145], [632, 145], [908, 145]];
  for (const [index, point] of cardPoints.entries()) assert.deepEqual(pixel(...point), cardColors[index], [point, pixel(...point), cardColors[index]]);
  const headingPixels = [];
  for (let y = 150; y < 180; y++) for (let x = 400; x < 593; x++) if (Math.max(...pixel(x, y)) < 190) headingPixels.push([x, y]);
  assert.ok(headingPixels.length, 'The second-card transfer heading did not render.');
  const headingRight = Math.max(...headingPixels.map(([x]) => x));
  const cardInnerRight = 348 + 246 - 1;
  const headingRightClearance = cardInnerRight - (headingRight + 1);
  assert.ok(headingRightClearance >= 20, `The second-card heading leaves only ${headingRightClearance}px before the inner right edge.`);
  const darkPixelCount = (left, top, right, bottom) => {
    let count = 0;
    for (let y = top; y < bottom; y++) for (let x = left; x < right; x++) if (Math.max(...pixel(x, y)) < 190) count++;
    return count;
  };
  const legendBounds = [[73, 274], [285, 495], [505, 715], [725, 935], [945, 1148]];
  for (const [rowIndex, y] of rowY.entries()) {
    const top = y - 18, bottom = y + 2;
    for (const [left, right] of legendBounds) assert.ok(darkPixelCount(left, top, right, bottom) >= 12, `Localized legend row ${rowIndex + 1} did not render in column ${left}.`);
  }
  for (const [index, line] of disclaimers.entries()) {
    const baseline = [615, 633, 651, 669, 687][index];
    assert.ok(darkPixelCount(48, baseline - 13, 1150, baseline + 2) >= 25, `Five-language not-to-scale disclaimer did not render: ${line}`);
  }
  console.log(`CA12 SVG passed: XML and ${elements.length}-element geometry fit 1200×700; all five localized legend columns and disclaimers are present; ${rendered.renderer} pixel checks confirmed background, four card fills and rendered text; second-card heading clearance is ${headingRightClearance}px.`);
} finally {
  removeRenderedTemp(rendered.directory);
}
