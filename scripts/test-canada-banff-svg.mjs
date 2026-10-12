#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { canadaClusters } from '../data/canada-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const cluster = canadaClusters.find((item) => item.slug === 'banff-lake-louise');
const guide = cluster?.guides.find((item) => item.slug === 'johnston-minnewanka');
const diagram = guide?.mapTreatment;
assert.equal(diagram?.src, '/assets/images/tripdistill-canada-banff-two-corridors.svg');
const svgFile = path.join(root, diagram.src.slice(1));
const source = fs.readFileSync(svgFile, 'utf8');
assert.match(source, /xmlns="http:\/\/www\.w3\.org\/2000\/svg"/);
assert.match(source, /not to scale/i);
for (const phrase of [
  'Separate days', '分開安排日期', '別日に計画', '별도 일정으로 계획', 'วางแผนแยกวัน',
  'Johnston Canyon', 'Lake Minnewanka', 'BANFF BASE'
]) assert.ok(source.includes(phrase), `SVG legend/content missing: ${phrase}`);

const geometryCheck = String.raw`
import re, sys, xml.etree.ElementTree as ET
file = sys.argv[1]
root = ET.parse(file).getroot()
assert root.tag == '{http://www.w3.org/2000/svg}svg'
assert root.attrib.get('viewBox') == '0 0 1200 700'
ns = '{http://www.w3.org/2000/svg}'
texts = [n.text or '' for n in root.iter(ns + 'text')]
assert len(texts) >= 10
paths = list(root.iter(ns + 'path'))
assert len(paths) >= 4
for node in root.iter():
    if node.tag == ns + 'path':
        nums = [float(x) for x in re.findall(r'[-+]?(?:\d*\.\d+|\d+\.?\d*)', node.attrib.get('d', ''))]
        assert nums and all(0 <= n <= 1200 for n in nums), ('path coordinate outside viewBox', node.attrib)
    elif node.tag == ns + 'rect':
        x, y = float(node.attrib.get('x', '0')), float(node.attrib.get('y', '0'))
        w, h = float(node.attrib.get('width', '0')), float(node.attrib.get('height', '0'))
        assert 0 <= x <= 1200 and 0 <= y <= 700 and x + w <= 1200 and y + h <= 700
    elif node.tag == ns + 'circle':
        cx, cy, radius = (float(node.attrib[k]) for k in ('cx', 'cy', 'r'))
        assert radius > 0 and radius <= cx <= 1200 - radius and radius <= cy <= 700 - radius
    elif node.tag == ns + 'text':
        x, y = float(node.attrib['x']), float(node.attrib['y'])
        assert 0 <= x <= 1200 and 0 <= y <= 700
children = list(root)
rects = [n for n in root.iter(ns + 'rect')]
west_card = next(n for n in rects if n.attrib.get('x') == '118')
east_card = next(n for n in rects if n.attrib.get('x') == '778')
red_arrow = next(n for n in paths if n.attrib.get('fill') == '#b5503d')
blue_arrow = next(n for n in paths if n.attrib.get('fill') == '#2f7184')
red_marker = next(n for n in root.iter(ns + 'circle') if n.attrib.get('cx') == '476')
blue_marker = next(n for n in root.iter(ns + 'circle') if n.attrib.get('cx') == '734')
assert children.index(west_card) < children.index(red_arrow) < children.index(red_marker)
assert children.index(east_card) < children.index(blue_arrow) < children.index(blue_marker)
west_card_right = float(west_card.attrib['x']) + float(west_card.attrib['width'])
east_card_left = float(east_card.attrib['x'])
assert float(red_marker.attrib['cx']) - float(red_marker.attrib['r']) > west_card_right
assert float(blue_marker.attrib['cx']) + float(blue_marker.attrib['r']) < east_card_left
assert red_arrow.attrib['d'].startswith('M 434 228 ')
assert blue_arrow.attrib['d'].startswith('M 772 225 ')
thai = next(n for n in root.iter(ns + 'text') if (n.text or '').startswith('ไทย ·'))
assert float(thai.attrib['y']) <= 633 and 658 - float(thai.attrib['y']) >= 25
`;
const parsed = spawnSync('python3', ['-c', geometryCheck, svgFile], { encoding: 'utf8' });
assert.equal(parsed.status, 0, `Python XML/geometry verification failed:\n${parsed.stdout}\n${parsed.stderr}`);

const page = fs.readFileSync(path.join(root, 'canada/banff-lake-louise/johnston-minnewanka/index.html'), 'utf8');
assert.ok(page.includes(diagram.src) && page.includes(diagram.source) && page.includes(diagram.rightsStatusUrl));
assert.ok(page.includes('ca-banff-map-wrap'));
assert.ok(!page.includes('/assets/images/canada-banff-lake-louise-johnston-minnewanka.webp'));
console.log('Banff SVG regression passed: Python ElementTree parsed the XML; route markers/arrows render beyond the corridor cards in visible order, Thai legend keeps bottom padding, geometry stays within the viewBox, and five-language/source/Terms checks pass.');
