#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
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

const geometryCheck = String.raw`
import re, sys, xml.etree.ElementTree as ET
file = sys.argv[1]
root = ET.parse(file).getroot()
assert root.tag == '{http://www.w3.org/2000/svg}svg'
assert root.attrib.get('viewBox') == '0 0 1200 700'
ns = '{http://www.w3.org/2000/svg}'
texts = list(root.iter(ns + 'text'))
assert len(texts) >= 27
assert len(list(root.iter(ns + 'circle'))) >= 5
falls = root.find(".//*[@id='falls-distance-note']")
parkway = root.find(".//*[@id='parkway-distance-note']")
assert falls is not None and parkway is not None
falls_y, parkway_y = float(falls.attrib['y']), float(parkway.attrib['y'])
assert falls.text == 'Falls: Athabasca 30 km; Sunwapta 54 km south of Jasper'
assert parkway.text == 'Highway 93: Jasper to Lake Louise · 232 km'
assert falls_y + 20 <= parkway_y, 'the two route-distance annotations must occupy separate, non-overlapping lines'
legend = root.find(".//*[@id='route-legend']")
assert legend is not None
frame = root.find(".//*[@id='diagram-frame']")
card = root.find(".//*[@id='legend-card']")
assert frame is not None and card is not None
frame_x, frame_y = float(frame.attrib['x']), float(frame.attrib['y'])
frame_right = frame_x + float(frame.attrib['width'])
frame_bottom = frame_y + float(frame.attrib['height'])
card_x, card_y = float(card.attrib['x']), float(card.attrib['y'])
card_right = card_x + float(card.attrib['width'])
card_bottom = card_y + float(card.attrib['height'])
assert card_x >= frame_x + 14 and card_right <= frame_right - 14
assert card_y >= frame_y + 14 and card_bottom <= frame_bottom - 14, 'white legend card must stay fully inside the inner frame with a visible bottom gap'
assert 700 - frame_bottom >= 30, 'the inner frame must leave clear space before the SVG canvas bottom'
legend_content_bottom = max(float(node.attrib['y']) + float(node.attrib['font-size']) for node in legend.iter(ns + 'text'))
assert legend_content_bottom <= card_bottom - 8, 'all five-language legend content must stay inside the white card'
expected_rows = {
    'legend-en': ['Teal line · Maligne Valley', 'Orange line · southbound Parkway', 'Purple marker · Columbia Icefield'],
    'legend-zh-Hant': ['青綠線 · 瑪琳谷', '橙線 · 冰原大道南行段', '紫色標記 · 哥倫比亞冰原'],
    'legend-ja': ['青緑の線 · マリーン渓谷', '橙色の線 · アイスフィールド・パークウェイ南行', '紫色の点 · コロンビア大氷原'],
    'legend-ko': ['청록색 선 · 말린 밸리', '주황색 선 · 남행 아이스필즈 파크웨이', '보라색 표식 · 컬럼비아 아이스필드'],
    'legend-th': ['เส้นสีเขียวอมฟ้า · Maligne Valley', 'เส้นสีส้ม · Icefields Parkway ไปทางใต้', 'จุดสีม่วง · Columbia Icefield']
}
legend_rows = legend.findall(ns + 'g')
assert [row.attrib.get('id') for row in legend_rows] == list(expected_rows)
for row in legend_rows:
    labels = [(node.text or '').strip() for node in row.findall(ns + 'text')]
    assert labels == expected_rows[row.attrib['id']], f"{row.attrib['id']} must explain each displayed route color and marker"
    assert [node.attrib.get('stroke') for node in row.findall(ns + 'line')] == ['#367d75', '#d47a45']
    assert [node.attrib.get('fill') for node in row.findall(ns + 'circle')] == ['#9b5c91']
for node in root.iter():
    if node.tag == ns + 'rect':
        x, y = float(node.attrib.get('x', '0')), float(node.attrib.get('y', '0'))
        w, h = float(node.attrib.get('width', '0')), float(node.attrib.get('height', '0'))
        assert 0 <= x <= 1200 and 0 <= y <= 700 and x + w <= 1200 and y + h <= 700
    elif node.tag == ns + 'circle':
        cx, cy, radius = (float(node.attrib[k]) for k in ('cx', 'cy', 'r'))
        assert radius > 0 and radius <= cx <= 1200 - radius and radius <= cy <= 700 - radius
    elif node.tag == ns + 'line':
        x1, x2, y1, y2 = (float(node.attrib[key]) for key in ('x1', 'x2', 'y1', 'y2'))
        assert 0 <= x1 <= 1200 and 0 <= x2 <= 1200 and 0 <= y1 <= 700 and 0 <= y2 <= 700
    elif node.tag == ns + 'text':
        x, y = float(node.attrib['x']), float(node.attrib['y'])
        assert 0 <= x <= 1200 and 0 <= y <= 700
`;
const parsed = spawnSync('python3', ['-c', geometryCheck, svgFile], { encoding: 'utf8' });
assert.equal(parsed.status, 0, `Python XML/geometry verification failed:\n${parsed.stdout}\n${parsed.stderr}`);
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
console.log('CA08 SVG/assets regression passed: real Python ElementTree XML parse; separate route-distance note lines; five-language route-color/marker explanations matched to their SVG colors; text/shape geometry bounds; five localized page provenance links; and retained-but-unpublished Johnston photo.');
