#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { children, descendants, descendantsByTag, numberAttr, parseXmlFile, textContent } from './svg-test-utils.mjs';
import { canadaClusters } from '../data/canada-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const cluster = canadaClusters.find((item) => item.slug === 'jasper-icefields');
const guide = cluster?.guides.find((item) => item.slug === 'icefields-parkway');
const diagram = guide?.routeDiagram;
assert.equal(diagram?.src, '/assets/images/tripdistill-canada-jasper-three-corridors.svg');
const svgFile = path.join(root, diagram.src.slice(1));
const source = fs.readFileSync(svgFile, 'utf8');
assert.match(source, /xmlns="http:\/\/www\.w3\.org\/2000\/svg"/);
for (const phrase of [
  'not to scale', 'MALIGNE VALLEY', 'COLUMBIA ICEFIELD',
  'Teal line · Maligne Valley', 'Orange line · southbound Parkway', 'Purple marker · Columbia Icefield',
  '青綠線 · 瑪琳谷', '橙線 · 冰原大道南行段', '紫色標記 · 哥倫比亞冰原',
  '青緑の線 · マリーン渓谷', '橙色の線 · アイスフィールド・パークウェイ南行', '紫色の点 · コロンビア大氷原',
  '청록색 선 · 말린 밸리', '주황색 선 · 남행 아이스필즈 파크웨이', '보라색 표식 · 컬럼비아 아이스필드',
  'เส้นสีเขียวอมฟ้า · Maligne Valley', 'เส้นสีส้ม · Icefields Parkway ไปทางใต้', 'จุดสีม่วง · Columbia Icefield'
]) {
  assert.ok(source.includes(phrase), `SVG content missing: ${phrase}`);
}

const svgRoot = parseXmlFile(svgFile);
const elements = descendants(svgRoot);
const texts = descendantsByTag(svgRoot, 'text');
const circles = descendantsByTag(svgRoot, 'circle');
assert.equal(svgRoot.tag, 'svg');
assert.equal(svgRoot.uri, 'http://www.w3.org/2000/svg');
assert.equal(svgRoot.attrs.viewBox, '0 0 1200 700');
assert.ok(texts.length >= 27);
assert.ok(circles.length >= 5);
const byId = (id) => elements.find((node) => node.attrs.id === id);
const falls = byId('falls-distance-note');
const parkway = byId('parkway-distance-note');
assert.ok(falls && parkway);
const fallsY = numberAttr(falls, 'y'), parkwayY = numberAttr(parkway, 'y');
assert.equal(falls.content.find((item) => typeof item === 'string'), 'Falls: Athabasca 30 km; Sunwapta 54 km south of Jasper');
assert.equal(parkway.content.find((item) => typeof item === 'string'), 'Highway 93: Jasper to Lake Louise · 232 km');
assert.ok(fallsY + 20 <= parkwayY, 'the two route-distance annotations must occupy separate, non-overlapping lines');
const legend = byId('route-legend');
const frame = byId('diagram-frame');
const card = byId('legend-card');
assert.ok(legend && frame && card);
const frameX = numberAttr(frame, 'x'), frameY = numberAttr(frame, 'y');
const frameRight = frameX + numberAttr(frame, 'width');
const frameBottom = frameY + numberAttr(frame, 'height');
const cardX = numberAttr(card, 'x'), cardY = numberAttr(card, 'y');
const cardRight = cardX + numberAttr(card, 'width');
const cardBottom = cardY + numberAttr(card, 'height');
assert.ok(cardX >= frameX + 14 && cardRight <= frameRight - 14);
assert.ok(cardY >= frameY + 14 && cardBottom <= frameBottom - 14, 'white legend card must stay fully inside the inner frame with a visible bottom gap');
assert.ok(700 - frameBottom >= 30, 'the inner frame must leave clear space before the SVG canvas bottom');
const legendContentBottom = Math.max(...descendantsByTag(legend, 'text').map((node) => numberAttr(node, 'y') + numberAttr(node, 'font-size')));
assert.ok(legendContentBottom <= cardBottom - 8, 'all five-language legend content must stay inside the white card');
const expectedRows = {
  'legend-en': ['Teal line · Maligne Valley', 'Orange line · southbound Parkway', 'Purple marker · Columbia Icefield'],
  'legend-zh-Hant': ['青綠線 · 瑪琳谷', '橙線 · 冰原大道南行段', '紫色標記 · 哥倫比亞冰原'],
  'legend-ja': ['青緑の線 · マリーン渓谷', '橙色の線 · アイスフィールド・パークウェイ南行', '紫色の点 · コロンビア大氷原'],
  'legend-ko': ['청록색 선 · 말린 밸리', '주황색 선 · 남행 아이스필즈 파크웨이', '보라색 표식 · 컬럼비아 아이스필드'],
  'legend-th': ['เส้นสีเขียวอมฟ้า · Maligne Valley', 'เส้นสีส้ม · Icefields Parkway ไปทางใต้', 'จุดสีม่วง · Columbia Icefield']
};
const legendRows = children(legend, 'g');
assert.deepEqual(legendRows.map((row) => row.attrs.id), Object.keys(expectedRows));
for (const row of legendRows) {
  assert.deepEqual(children(row, 'text').map((node) => node.content.filter((item) => typeof item === 'string').join('').trim()), expectedRows[row.attrs.id], `${row.attrs.id} must explain each displayed route color and marker`);
  assert.deepEqual(children(row, 'line').map((node) => node.attrs.stroke), ['#367d75', '#d47a45']);
  assert.deepEqual(children(row, 'circle').map((node) => node.attrs.fill), ['#9b5c91']);
}
for (const node of elements) {
  if (node.tag === 'rect') {
    const x = numberAttr(node, 'x'), y = numberAttr(node, 'y');
    const w = numberAttr(node, 'width'), h = numberAttr(node, 'height');
    assert.ok(x >= 0 && x <= 1200 && y >= 0 && y <= 700 && x + w <= 1200 && y + h <= 700);
  } else if (node.tag === 'circle') {
    const cx = numberAttr(node, 'cx'), cy = numberAttr(node, 'cy'), radius = numberAttr(node, 'r');
    assert.ok(radius > 0 && radius <= cx && cx <= 1200 - radius && radius <= cy && cy <= 700 - radius);
  } else if (node.tag === 'line') {
    const x1 = numberAttr(node, 'x1'), x2 = numberAttr(node, 'x2');
    const y1 = numberAttr(node, 'y1'), y2 = numberAttr(node, 'y2');
    assert.ok(x1 >= 0 && x1 <= 1200 && x2 >= 0 && x2 <= 1200 && y1 >= 0 && y1 <= 700 && y2 >= 0 && y2 <= 700);
  } else if (node.tag === 'text') {
    const x = numberAttr(node, 'x'), y = numberAttr(node, 'y');
    assert.ok(x >= 0 && x <= 1200 && y >= 0 && y <= 700);
  }
}
for (const locale of ['', 'zh/', 'ja/', 'ko/', 'th/']) {
  const pageFile = path.join(root, locale, 'canada/jasper-icefields/icefields-parkway/index.html');
  const page = fs.readFileSync(pageFile, 'utf8');
  assert.ok(page.includes(diagram.src) && page.includes(diagram.source) && page.includes(diagram.rightsStatusUrl), `${locale || 'en'} page is missing diagram provenance.`);
  assert.ok(page.includes('ca-jasper-route-diagram'), `${locale || 'en'} page is missing supplemental diagram figure.`);
}

const retired = '/assets/images/canada-banff-lake-louise-johnston-minnewanka.webp';
assert.ok(fs.existsSync(path.join(root, retired.slice(1))), 'Retired Johnston source photo must remain in the repository.');
const manifest = (await import('../data/canada-image-manifest.mjs')).canadaImageManifest;
assert.equal(manifest['banff-lake-louise/johnston-minnewanka'].inventoryStatus, 'unused');
for (const file of [
  'canada/banff-lake-louise/johnston-minnewanka/index.html',
  'zh/canada/banff-lake-louise/johnston-minnewanka/index.html',
  'ja/canada/banff-lake-louise/johnston-minnewanka/index.html',
  'ko/canada/banff-lake-louise/johnston-minnewanka/index.html',
  'th/canada/banff-lake-louise/johnston-minnewanka/index.html'
]) assert.ok(!fs.readFileSync(path.join(root, file), 'utf8').includes(retired), `${file}: retired mismatched source photo must not be referenced.`);
assert.ok(!fs.existsSync(path.join(root, 'dist', retired.slice(1))), 'Retired Johnston source photo must be excluded from dist.');
console.log('CA08 SVG/assets regression passed: strict Saxes XML parse; separate route-distance note lines; five-language route-color/marker explanations matched to their SVG colors; text/shape geometry bounds; five localized page provenance links; and retained-but-unpublished Johnston photo.');
