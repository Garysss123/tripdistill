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
`;
const parsed = spawnSync('python3', ['-c', geometryCheck, svgFile], { encoding: 'utf8' });
assert.equal(parsed.status, 0, `Python XML/geometry verification failed:\n${parsed.stdout}\n${parsed.stderr}`);

const page = fs.readFileSync(path.join(root, 'canada/banff-lake-louise/johnston-minnewanka/index.html'), 'utf8');
assert.ok(page.includes(diagram.src) && page.includes(diagram.source) && page.includes(diagram.rightsStatusUrl));
assert.ok(page.includes('ca-banff-map-wrap'));
assert.ok(!page.includes('/assets/images/canada-banff-lake-louise-johnston-minnewanka.webp'));
console.log('Banff SVG regression passed: project source is assigned to the Johnston/Minnewanka guide; Python ElementTree parsed the XML and all checked path, shape and text geometry stays within the viewBox; five-language legend and visible source/Terms provenance are present.');
