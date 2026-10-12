#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { italyClusters } from '../data/italy-guides.mjs';

const root = process.cwd();
const cluster = italyClusters.find((item) => item.slug === 'emilia-romagna');
const retired = [
  'assets/images/italy-emilia-romagna-bologna-porticoes-markets.webp',
  'assets/images/italy-emilia-romagna-modena-parma-via-emilia.webp'
];
const diagramGuides = cluster.guides.filter((guide) => guide.image.assetType === 'original-planning-diagram');
assert.equal(diagramGuides.length, 2);
for (const guide of diagramGuides) {
  const asset = path.join(root, guide.image.src.slice(1));
  assert.ok(fs.existsSync(asset), `${guide.url}: original diagram is missing`);
  assert.equal(guide.image.source, `https://tripdistill.com${guide.image.src}`);
  assert.equal(guide.image.creator, 'TripDistill Editorial Team');
  assert.equal(guide.image.license, null);
  assert.equal(guide.image.rightsStatus, 'Project original; no separate reuse license declared');
  assert.ok(Array.isArray(guide.image.legend) && guide.image.legend.length >= 3);
}
const parsed = spawnSync('python3', ['scripts/test-italy-emilia-svg-xml.py'], { encoding: 'utf8' });
assert.equal(parsed.status, 0, parsed.stderr || parsed.stdout);
process.stdout.write(parsed.stdout);

for (const relative of retired) {
  assert.ok(fs.existsSync(path.join(root, relative)), `${relative}: original bytes must remain in the repository`);
}
const sourcePages = [
  ['italy/emilia-romagna/index.html', ...cluster.guides.map((guide) => guide.url.slice(1) + 'index.html')]
].flat();
for (const file of sourcePages) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  for (const image of diagramGuides) {
    if (file === 'italy/emilia-romagna/index.html' || file === image.url.slice(1) + 'index.html') {
      assert.ok(html.includes(image.image.src), `${file}: original diagram not rendered`);
      assert.ok(html.includes(image.image.legendTitle) && image.image.legend.every((item) => html.includes(item)), `${file}: diagram key missing`);
      assert.ok(html.includes(image.image.rightsStatusUrl) && html.includes(image.image.rightsStatus), `${file}: visible source / Terms of Use provenance missing`);
    }
  }
  for (const imagePath of retired) assert.ok(!html.includes('/' + imagePath), `${file}: retired photo is still publicly referenced`);
}
for (const locale of ['zh', 'ja', 'ko', 'th']) {
  for (const guide of cluster.guides.filter((item) => item.image.assetType === 'original-planning-diagram')) {
    const html = fs.readFileSync(path.join(root, locale, guide.url.slice(1), 'index.html'), 'utf8');
    assert.ok(html.includes(guide.image.src) && html.includes('terms-of-use'), `${locale}${guide.url}: localized original provenance missing`);
    assert.ok(!retired.some((imagePath) => html.includes('/' + imagePath)), `${locale}${guide.url}: retired photo is live`);
  }
}
if (fs.existsSync(path.join(root, 'dist'))) {
  for (const imagePath of retired) assert.ok(!fs.existsSync(path.join(root, 'dist', imagePath)), `${imagePath}: retired local-only photo leaked into dist`);
  for (const guide of diagramGuides) assert.ok(fs.existsSync(path.join(root, 'dist', guide.image.src.slice(1))), `${guide.image.src}: original SVG missing in dist`);
}
console.log('Emilia diagram regression passed: source metadata and visible five-language legends/provenance are present; retired photos remain local-only.');
