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
for (const phrase of ['not to scale', 'Plan separate days', '獨立安排不同日子', '別日に計画', '별도 날짜로 계획', 'วางแผนคนละวัน', 'MALIGNE VALLEY', 'COLUMBIA ICEFIELD']) {
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
assert len(texts) >= 14
assert len(list(root.iter(ns + 'circle'))) >= 5
for node in root.iter():
    if node.tag == ns + 'rect':
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
console.log('CA08 SVG/assets regression passed: real Python ElementTree XML parse, five-language legend, text/shape geometry bounds, five localized page provenance links, and retained-but-unpublished Johnston photo.');
