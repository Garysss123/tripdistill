#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { descendants, descendantsByTag, numberAttr, parseXmlFile, pathPoints, textContent } from './svg-test-utils.mjs';
import { removeRenderedTemp, renderSvgToTempPng } from './svg-test-render.mjs';

const rootDir = path.resolve(import.meta.dirname, '..');
const svgFile = path.join(rootDir, 'assets/images/tripdistill-canada-saguenay-sector-decisions.svg');
const root = parseXmlFile(svgFile);
const svgNamespace = 'http://www.w3.org/2000/svg';
assert.equal(root.tag, 'svg');
assert.equal(root.uri, svgNamespace);
assert.equal(root.attrs.width, '1200');
assert.equal(root.attrs.height, '700');
assert.equal(root.attrs.viewBox, '0 0 1200 700');
assert.equal(root.attrs.role, 'img');
assert.equal(root.attrs['aria-labelledby'], 'title desc');
const elements = descendants(root);
const ids = elements.filter((element) => element.attrs.id).map((element) => element.attrs.id);
assert.equal(ids.length, new Set(ids).size, 'SVG IDs must be unique.');
assert.ok(['title', 'desc'].every((id) => ids.includes(id)));
assert.ok(!descendantsByTag(root, 'script').length);
assert.equal(descendantsByTag(root, 'image').length, 0, 'The diagram must use actual SVG geometry, not a raster image.');

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
    for (const [x, y] of pathPoints(element.attrs.d, element.attrs.d, ['M', 'L', 'H', 'V', 'Q', 'C'])) {
      assert.ok(x >= 0 && x <= 1200 && y >= 0 && y <= 700, [element.attrs.d, x, y]);
    }
  }
}

const textById = Object.fromEntries(descendantsByTag(root, 'text').map((element) => [element.attrs.id, textContent(element).trim()]));
const required = {
  'legend-en-title': 'ENGLISH', 'legend-zh-title': '繁體中文', 'legend-ja-title': '日本語',
  'legend-ko-title': '한국어', 'legend-th-title': 'ภาษาไทย',
  'legend-en-1': 'Hike / fjord views', 'legend-zh-1': '健行／峽灣景觀', 'legend-ja-1': 'ハイキング／フィヨルド眺望',
  'legend-ko-1': '하이킹 / 피오르 전망', 'legend-th-1': 'เดินป่า / ชมฟยอร์ด',
  'scope-en': 'Schematic · no scale · no actual routes',
  'scope-zh': '僅示意・無比例・非實際路線',
  'scope-ja': '概念図・縮尺なし・実際の経路ではない',
  'scope-ko': '개념도 · 축척 없음 · 실제 경로 아님',
  'scope-th': 'แผนภาพ · ไม่ตามสเกล · ไม่ใช่เส้นทางจริง'
};
for (const [id, phrase] of Object.entries(required)) assert.equal(textById[id], phrase, [id, textById[id]]);
assert.ok(['sector-eternite', 'sector-sainte-marguerite', 'sector-tadoussac'].every((id) => ids.includes(id)));

const rendered = renderSvgToTempPng(svgFile, 1200, 700, 'ca13-saguenay-svg-');
try {
  const data = fs.readFileSync(rendered.pngFile);
  assert.equal(data.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  assert.deepEqual([data.readUInt32BE(16), data.readUInt32BE(20)], [1200, 700]);
  assert.ok(data.length > 30_000, `Rendered pixel output unexpectedly small (${data.length} bytes).`);
  console.log(`CA13 Saguenay SVG passed XML, unique ID, bounds, genuine geometry, five-language legend and ${rendered.renderer} pixel-render checks.`);
} finally {
  removeRenderedTemp(rendered.directory);
}
