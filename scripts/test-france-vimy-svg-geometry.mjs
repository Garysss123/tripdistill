import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const svg = fs.readFileSync(path.join(root, 'assets/images/france-lille-arras-vimy-sequence-legend.svg'), 'utf8');

const viewBox = svg.match(/\bviewBox="([^"]+)"/)?.[1]?.split(/\s+/).map(Number);
assert.deepEqual(viewBox, [0, 0, 1600, 1066], 'preserve the five-language diagram canvas');

const rects = [...svg.matchAll(/<rect\b([^>]*)\/>/g)].map(([, attrs]) => attrs);
const readAttr = (attrs, name) => attrs.match(new RegExp(`\\b${name}="([^"]+)"`))?.[1];
const cards = rects.filter((attrs) => readAttr(attrs, 'y') === '264');
assert.equal(cards.length, 4, 'keep the four numbered route cards');
const arrowPath = svg.match(/<path d="([^"]+)" stroke="#c5553f" stroke-width="4" marker-end="url\(#arrow\)"\/>/)?.[1];
assert.ok(arrowPath, 'keep the sequence arrows');
assert.equal((arrowPath.match(/M\d+ \d+/g) || []).length, 3, 'keep all three sequence arrows');

const textNodes = [...svg.matchAll(/<text\b([^>]*)>([\s\S]*?)<\/text>/g)].map(([, attrs, text]) => ({ attrs, text }));
for (const label of ['01', '02', '03', '04']) {
  assert.equal(textNodes.filter((node) => node.text === label).length, 1, `keep stage ${label}`);
}
for (const label of ['EN', '繁', '日本語', '한국어', 'ไทย']) {
  assert.equal(textNodes.filter((node) => node.text === label).length, 4, `keep the visible ${label} legend in every card`);
}

const caution = rects.find((attrs) => readAttr(attrs, 'x') === '70' && readAttr(attrs, 'width') === '1460');
assert.ok(caution, 'keep the lower caution frame');
const frameTop = Number(readAttr(caution, 'y'));
const frameBottom = frameTop + Number(readAttr(caution, 'height'));
const cardsBottom = Math.max(...cards.map((attrs) => Number(readAttr(attrs, 'y')) + Number(readAttr(attrs, 'height'))));
const canvasBottom = viewBox[1] + viewBox[3];
const rows = textNodes.filter((node) => readAttr(node.attrs, 'x') === '98' && readAttr(node.attrs, 'fill') === '#dce7e9');
assert.equal(rows.length, 2, 'keep both translated caution rows');

const expectedRows = [
  '參訪流程示意，非地理地圖、不按比例、非即時班表。 · 訪問順序の例で、地理地図・縮尺図・リアルタイム時刻表ではありません。',
  '방문 순서 예시이며 지리 지도·축척도·실시간 시간표가 아닙니다. · ลำดับการเยี่ยมชมเพื่อประกอบความเข้าใจ ไม่ใช่แผนที่ภูมิศาสตร์ ไม่ได้แสดงตามมาตราส่วน และไม่ใช่ตารางเวลาสด'
];
assert.deepEqual(rows.map((node) => node.text), expectedRows, 'preserve all localized caution wording');

const finalBaseline = Number(readAttr(rows.at(-1).attrs, 'y'));
const fontSize = Number(readAttr(rows.at(-1).attrs, 'font-size'));
const conservativeDescender = fontSize / 2;
assert.ok(frameBottom - finalBaseline - conservativeDescender >= 24, 'leave at least 24 SVG units below the final Korean/Thai glyph row inside its dark frame');
assert.ok(canvasBottom - frameBottom >= 32, 'leave at least 32 SVG units between the caution frame and canvas bottom');
assert.ok(frameTop - cardsBottom >= 32, 'leave space between the four route cards and lower caution frame');

console.log(`France Vimy SVG geometry passed: 4 cards, 3 arrows, 5 language labels, ${frameBottom - finalBaseline - conservativeDescender} units of final-row clearance and ${canvasBottom - frameBottom} units of canvas margin.`);
