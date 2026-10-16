#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { canadaClusters } from '../data/canada-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const cluster = canadaClusters.find((item) => item.slug === 'newfoundland-labrador');
const guide = cluster?.guides.find((item) => item.slug === 'gros-morne');
const diagram = guide?.routeDiagram;
assert.equal(diagram?.src, '/assets/images/tripdistill-canada-newfoundland-regions.svg');
const svgFile = path.join(root, diagram.src.slice(1));
const source = fs.readFileSync(svgFile, 'utf8');
assert.ok(source.startsWith('<?xml version="1.0" encoding="UTF-8"?>'), 'SVG must declare XML encoding.');
assert.match(source, /xmlns="http:\/\/www\.w3\.org\/2000\/svg"/);
for (const id of ['legend-en-1','legend-en-2','legend-zh-1','legend-zh-2','legend-ja-1','legend-ja-2','legend-ko-1','legend-ko-2','legend-th-1','legend-th-2']) {
  assert.match(source, new RegExp(`id="${id}"`), `SVG legend lacks ${id}.`);
}
const geometryCheck = String.raw`
import re, sys, xml.etree.ElementTree as ET
file = sys.argv[1]
root = ET.parse(file).getroot()
assert root.tag == '{http://www.w3.org/2000/svg}svg'
assert root.attrib.get('viewBox') == '0 0 860 1120'
ns = '{http://www.w3.org/2000/svg}'
assert len(list(root.iter(ns + 'text'))) >= 20
assert len(list(root.iter(ns + 'circle'))) == 3
ids = [e.attrib['id'] for e in root.iter() if 'id' in e.attrib]
assert len(ids) == len(set(ids)), 'SVG IDs must be unique.'
for node in root.iter():
    if node.tag == ns + 'rect':
        x, y = float(node.attrib.get('x', '0')), float(node.attrib.get('y', '0'))
        w, h = float(node.attrib.get('width', '0')), float(node.attrib.get('height', '0'))
        assert 0 <= x <= 860 and 0 <= y <= 1120 and x + w <= 860 and y + h <= 1120
    elif node.tag == ns + 'circle':
        cx, cy, radius = (float(node.attrib[k]) for k in ('cx', 'cy', 'r'))
        assert radius > 0 and radius <= cx <= 860 - radius and radius <= cy <= 1120 - radius
    elif node.tag == ns + 'polygon':
        pairs = node.attrib['points'].replace(',', ' ').split()
        coords = [float(v) for v in pairs]
        assert len(coords) >= 6 and len(coords) % 2 == 0
        assert all(0 <= coords[i] <= 860 and 0 <= coords[i+1] <= 1120 for i in range(0, len(coords), 2))
    elif node.tag == ns + 'text':
        x, y = float(node.attrib['x']), float(node.attrib['y'])
        assert 0 <= x <= 860 and 0 <= y <= 1120
        size = float(node.attrib.get('font-size', '16'))
        assert y - size >= 0 and y + size <= 1120
texts = {node.attrib.get('id'): ''.join(node.itertext()).strip() for node in root.iter(ns + 'text')}
assert texts.get('legend-en-1') and texts.get('legend-en-2')
for locale in ('zh', 'ja', 'ko', 'th'):
    assert texts.get(f'legend-{locale}-1') and texts.get(f'legend-{locale}-2')
    assert texts[f'legend-{locale}-1'] != texts['legend-en-1']
    assert texts[f'legend-{locale}-2'] != texts['legend-en-2']
    scripts = {
        'zh': r'[\u4e00-\u9fff]',
        'ja': r'[\u3040-\u30ff]',
        'ko': r'[\uac00-\ud7af]',
        'th': r'[\u0e00-\u0e7f]'
    }
    assert re.search(scripts[locale], texts[f'legend-{locale}-1'] + texts[f'legend-{locale}-2']), f'{locale} legend lacks native-script text.'
regions = {node.attrib['id']: float(node.attrib['cx']) for node in root.iter(ns + 'circle')}
assert regions['gros-morne'] < regions['bonavista-trinity'] < regions['st-johns'], 'Island nodes must preserve west-to-east geographic order.'
assert float(next(n for n in root.iter(ns + 'rect') if n.attrib.get('x') == '545').attrib['x']) > regions['st-johns'], 'Labrador inset must remain separate from the Newfoundland island nodes.'
assert not list(root.iter(ns + 'path')), 'The diagram must not imply a surveyed road or ferry line.'
`;
const parsed = spawnSync('python3', ['-c', geometryCheck, svgFile], { encoding: 'utf8' });
assert.equal(parsed.status, 0, `Python ElementTree XML/geometry verification failed:\n${parsed.stdout}\n${parsed.stderr}`);

for (const locale of ['', 'zh/', 'ja/', 'ko/', 'th/']) {
  const pageFile = path.join(root, locale, 'canada/newfoundland-labrador/gros-morne/index.html');
  const page = fs.readFileSync(pageFile, 'utf8');
  assert.ok(page.includes(diagram.src) && page.includes(diagram.source) && page.includes(diagram.rightsStatusUrl), `${locale || 'en'} page lacks diagram source and terms links.`);
  assert.ok(page.includes('ca-jasper-route-diagram'), `${locale || 'en'} page lacks the shared diagram figure styling.`);
}
console.log('CA10 SVG regression passed: real XML parse, five separately translated visible legend rows, in-view geometry, west-to-east Newfoundland nodes, disconnected Labrador inset, and five-language page source/terms links.');
