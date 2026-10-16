import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { switzerlandGuides } from '../data/switzerland-guides.mjs';
import { parseSvgDimensions } from './svg-dimensions.mjs';

const root = path.resolve(import.meta.dirname, '..');
const valid = '<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1066" viewBox="0 0 1600 1066"><path d="M0 0"/></svg>';
assert.deepEqual(parseSvgDimensions(valid), { width: 1600, height: 1066, viewBox: [0, 0, 1600, 1066] });
assert.deepEqual(parseSvgDimensions('<svg xmlns="http://www.w3.org/2000/svg" width="1600px" height="1066px" viewBox="0,0,1600,1066"/>'), { width: 1600, height: 1066, viewBox: [0, 0, 1600, 1066] });

for (const [label, svg] of [
  ['missing width', '<svg xmlns="http://www.w3.org/2000/svg" height="1066" viewBox="0 0 1600 1066"/>'],
  ['missing height', '<svg xmlns="http://www.w3.org/2000/svg" width="1600" viewBox="0 0 1600 1066"/>'],
  ['missing viewBox', '<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1066"/>'],
  ['zero dimension', '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="1066" viewBox="0 0 1600 1066"/>'],
  ['mismatched dimension', '<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1065" viewBox="0 0 1600 1066"/>'],
  ['malformed XML', '<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1066" viewBox="0 0 1600 1066">'],
  ['DOCTYPE', '<!DOCTYPE svg [<!ENTITY x "1600">]><svg xmlns="http://www.w3.org/2000/svg" width="&x;" height="1066" viewBox="0 0 1600 1066"/>']
]) {
  assert.throws(() => parseSvgDimensions(svg), undefined, `${label} must be rejected`);
}

const diagrams = switzerlandGuides.filter((guide) => guide.image.assetType === 'original-planning-diagram');
assert.equal(diagrams.length, 6, 'Switzerland must retain the six original route diagrams covered by the audit');
for (const guide of diagrams) {
  const file = path.join(root, guide.image.src.replace(/^\//, ''));
  const dimensions = parseSvgDimensions(fs.readFileSync(file, 'utf8'));
  assert.equal(dimensions.width, 1600, `${guide.url}: diagram width`);
  assert.equal(dimensions.height, 1066, `${guide.url}: diagram height`);
}

console.log('SVG dimension parser regression tests passed (valid, missing/invalid metadata, XML safety, and all six Switzerland diagrams).');
