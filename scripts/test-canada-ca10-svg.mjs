#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { canadaClusters } from '../data/canada-guides.mjs';
import { descendants, descendantsByTag, numberAttr, parseXmlFile, textContent } from './svg-test-utils.mjs';

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

const svgRoot = parseXmlFile(svgFile);
const elements = descendants(svgRoot);
const textNodes = descendantsByTag(svgRoot, 'text');
const circles = descendantsByTag(svgRoot, 'circle');
assert.equal(svgRoot.tag, 'svg');
assert.equal(svgRoot.uri, 'http://www.w3.org/2000/svg');
assert.equal(svgRoot.attrs.viewBox, '0 0 860 1120');
assert.ok(textNodes.length >= 20);
assert.equal(circles.length, 3);
const ids = elements.filter((node) => node.attrs.id).map((node) => node.attrs.id);
assert.equal(ids.length, new Set(ids).size, 'SVG IDs must be unique.');
for (const node of elements) {
  if (node.tag === 'rect') {
    const x = numberAttr(node, 'x'), y = numberAttr(node, 'y');
    const width = numberAttr(node, 'width'), height = numberAttr(node, 'height');
    assert.ok(x >= 0 && x <= 860 && y >= 0 && y <= 1120 && x + width <= 860 && y + height <= 1120);
  } else if (node.tag === 'circle') {
    const cx = numberAttr(node, 'cx'), cy = numberAttr(node, 'cy'), radius = numberAttr(node, 'r');
    assert.ok(radius > 0 && radius <= cx && cx <= 860 - radius && radius <= cy && cy <= 1120 - radius);
  } else if (node.tag === 'polygon') {
    const coords = (node.attrs.points || '').replaceAll(',', ' ').split(/\s+/u).filter(Boolean).map(Number);
    assert.ok(coords.length >= 6 && coords.length % 2 === 0);
    for (let i = 0; i < coords.length; i += 2) assert.ok(coords[i] >= 0 && coords[i] <= 860 && coords[i + 1] >= 0 && coords[i + 1] <= 1120);
  } else if (node.tag === 'text') {
    const x = numberAttr(node, 'x'), y = numberAttr(node, 'y');
    const size = numberAttr(node, 'font-size', 16);
    assert.ok(x >= 0 && x <= 860 && y >= 0 && y <= 1120);
    assert.ok(y - size >= 0 && y + size <= 1120);
  }
}
const texts = Object.fromEntries(textNodes.map((node) => [node.attrs.id, textContent(node).trim()]));
assert.ok(texts['legend-en-1'] && texts['legend-en-2']);
for (const locale of ['zh', 'ja', 'ko', 'th']) {
  assert.ok(texts[`legend-${locale}-1`] && texts[`legend-${locale}-2`]);
  assert.notEqual(texts[`legend-${locale}-1`], texts['legend-en-1']);
  assert.notEqual(texts[`legend-${locale}-2`], texts['legend-en-2']);
  const scripts = {
    zh: /[\u4e00-\u9fff]/u,
    ja: /[\u3040-\u30ff]/u,
    ko: /[\uac00-\ud7af]/u,
    th: /[\u0e00-\u0e7f]/u
  };
  assert.match(texts[`legend-${locale}-1`] + texts[`legend-${locale}-2`], scripts[locale], `${locale} legend lacks native-script text.`);
}
const regions = Object.fromEntries(circles.map((node) => [node.attrs.id, numberAttr(node, 'cx')]));
assert.ok(regions['gros-morne'] < regions['bonavista-trinity'] && regions['bonavista-trinity'] < regions['st-johns'], 'Island nodes must preserve west-to-east geographic order.');
const labradorInset = descendantsByTag(svgRoot, 'rect').find((node) => node.attrs.x === '545');
assert.ok(numberAttr(labradorInset, 'x') > regions['st-johns'], 'Labrador inset must remain separate from the Newfoundland island nodes.');
assert.equal(descendantsByTag(svgRoot, 'path').length, 0, 'The diagram must not imply a surveyed road or ferry line.');

for (const locale of ['', 'zh/', 'ja/', 'ko/', 'th/']) {
  const pageFile = path.join(root, locale, 'canada/newfoundland-labrador/gros-morne/index.html');
  const page = fs.readFileSync(pageFile, 'utf8');
  assert.ok(page.includes(diagram.src) && page.includes(diagram.source) && page.includes(diagram.rightsStatusUrl), `${locale || 'en'} page lacks diagram source and terms links.`);
  assert.ok(page.includes('ca-jasper-route-diagram'), `${locale || 'en'} page lacks the shared diagram figure styling.`);
}
console.log('CA10 SVG regression passed: strict Saxes XML parse, five separately translated visible legend rows, in-view geometry, west-to-east Newfoundland nodes, disconnected Labrador inset, and five-language page source/terms links.');
