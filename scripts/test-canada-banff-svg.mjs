#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { descendants, descendantsByTag, numberAttr, parseXmlFile } from './svg-test-utils.mjs';
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

const svgRoot = parseXmlFile(svgFile);
const elements = descendants(svgRoot);
const texts = descendantsByTag(svgRoot, 'text');
const paths = descendantsByTag(svgRoot, 'path');
assert.equal(svgRoot.tag, 'svg');
assert.equal(svgRoot.uri, 'http://www.w3.org/2000/svg');
assert.equal(svgRoot.attrs.viewBox, '0 0 1200 700');
assert.ok(texts.length >= 10);
assert.ok(paths.length >= 4);
for (const node of elements) {
  if (node.tag === 'path') {
    const nums = [...(node.attrs.d || '').matchAll(/[-+]?(?:\d*\.\d+|\d+\.?\d*)/gu)].map((match) => Number(match[0]));
    assert.ok(nums.length && nums.every((value) => value >= 0 && value <= 1200), ['path coordinate outside viewBox', node.attrs]);
  } else if (node.tag === 'rect') {
    const x = numberAttr(node, 'x'), y = numberAttr(node, 'y');
    const w = numberAttr(node, 'width'), h = numberAttr(node, 'height');
    assert.ok(x >= 0 && x <= 1200 && y >= 0 && y <= 700 && x + w <= 1200 && y + h <= 700);
  } else if (node.tag === 'circle') {
    const cx = numberAttr(node, 'cx'), cy = numberAttr(node, 'cy'), radius = numberAttr(node, 'r');
    assert.ok(radius > 0 && radius <= cx && cx <= 1200 - radius && radius <= cy && cy <= 700 - radius);
  } else if (node.tag === 'text') {
    const x = numberAttr(node, 'x'), y = numberAttr(node, 'y');
    assert.ok(x >= 0 && x <= 1200 && y >= 0 && y <= 700);
  }
}
const rects = descendantsByTag(svgRoot, 'rect');
const westCard = rects.find((node) => node.attrs.x === '118');
const eastCard = rects.find((node) => node.attrs.x === '778');
const redArrow = paths.find((node) => node.attrs.fill === '#b5503d');
const blueArrow = paths.find((node) => node.attrs.fill === '#2f7184');
const circles = descendantsByTag(svgRoot, 'circle');
const redMarker = circles.find((node) => node.attrs.cx === '476');
const blueMarker = circles.find((node) => node.attrs.cx === '734');
const rootChildren = svgRoot.content.filter((item) => typeof item === 'object');
assert.ok(rootChildren.indexOf(westCard) < rootChildren.indexOf(redArrow) && rootChildren.indexOf(redArrow) < rootChildren.indexOf(redMarker));
assert.ok(rootChildren.indexOf(eastCard) < rootChildren.indexOf(blueArrow) && rootChildren.indexOf(blueArrow) < rootChildren.indexOf(blueMarker));
const westCardRight = numberAttr(westCard, 'x') + numberAttr(westCard, 'width');
const eastCardLeft = numberAttr(eastCard, 'x');
assert.ok(numberAttr(redMarker, 'cx') - numberAttr(redMarker, 'r') > westCardRight);
assert.ok(numberAttr(blueMarker, 'cx') + numberAttr(blueMarker, 'r') < eastCardLeft);
assert.ok(redArrow.attrs.d.startsWith('M 434 228 '));
assert.ok(blueArrow.attrs.d.startsWith('M 772 225 '));
const thai = texts.find((node) => node.content.find((item) => typeof item === 'string')?.startsWith('ไทย ·'));
assert.ok(numberAttr(thai, 'y') <= 633 && 658 - numberAttr(thai, 'y') >= 25);

const page = fs.readFileSync(path.join(root, 'canada/banff-lake-louise/johnston-minnewanka/index.html'), 'utf8');
assert.ok(page.includes(diagram.src) && page.includes(diagram.source) && page.includes(diagram.rightsStatusUrl));
assert.ok(page.includes('ca-banff-map-wrap'));
assert.ok(!page.includes('/assets/images/canada-banff-lake-louise-johnston-minnewanka.webp'));
console.log('Banff SVG regression passed: strict Saxes XML parse; route markers/arrows render beyond the corridor cards in visible order, Thai legend keeps bottom padding, geometry stays within the viewBox, and five-language/source/Terms checks pass.');
