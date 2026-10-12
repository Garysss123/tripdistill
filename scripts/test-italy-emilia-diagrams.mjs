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
const bologna = diagramGuides.find((guide) => guide.url.endsWith('/bologna-porticoes-markets/'));
const modenaParma = diagramGuides.find((guide) => guide.url.endsWith('/modena-parma-via-emilia/'));
assert.deepEqual(bologna.image.legend.map((line) => Number(line.match(/^(\d+)/)?.[1])), [1, 2, 3], 'Bologna legend markers must match the SVG nodes');
assert.match(bologna.image.legend[2], /San Luca is a separate branch/i, 'Bologna marker 3 must identify the separate San Luca branch');
assert.deepEqual(modenaParma.image.legend.map((line) => Number(line.match(/^(\d+)/)?.[1])), [1, 2, 3, 4, 5], 'Modena/Parma legend must explain each unique SVG node');
assert.match(modenaParma.image.legend[3], /Maranello/i, 'Modena/Parma marker 4 must identify the Maranello branch');
assert.match(modenaParma.image.legend[4], /producer/i, 'Modena/Parma marker 5 must identify the booked-producer branch');
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
const outputRoots = fs.existsSync(path.join(root, 'dist')) ? ['', 'dist/'] : [''];
for (const outputRoot of outputRoots) {
  for (const file of sourcePages) {
    const html = fs.readFileSync(path.join(root, outputRoot, file), 'utf8');
    for (const image of diagramGuides) {
      if (file === 'italy/emilia-romagna/index.html' || file === image.url.slice(1) + 'index.html') {
        assert.ok(html.includes(image.image.src), `${outputRoot}${file}: original diagram not rendered`);
        assert.ok(html.includes(image.image.legendTitle) && image.image.legend.every((item) => html.includes(item)), `${outputRoot}${file}: diagram key missing or inconsistent with numbered nodes`);
        assert.ok(html.includes(image.image.rightsStatusUrl) && html.includes(image.image.rightsStatus), `${outputRoot}${file}: visible source / Terms of Use provenance missing`);
      }
    }
    for (const imagePath of retired) assert.ok(!html.includes('/' + imagePath), `${outputRoot}${file}: retired photo is still publicly referenced`);
  }
  for (const [locale, batchLocale] of [['zh', 'zh-Hant'], ['ja', 'ja'], ['ko', 'ko'], ['th', 'th']]) {
    const batch = JSON.parse(fs.readFileSync(path.join(root, 'data/i18n/reviewed', batchLocale, 'zzzzzzma-italy-emilia-pages-20261012.json'), 'utf8'));
    for (const guide of diagramGuides) {
      const html = fs.readFileSync(path.join(root, outputRoot, locale, guide.url.slice(1), 'index.html'), 'utf8');
      assert.ok(html.includes(guide.image.src) && html.includes('terms-of-use'), `${outputRoot}${locale}${guide.url}: localized original provenance missing`);
      for (const key of guide.image.legend) {
        const translated = batch.translations[key];
        assert.ok(translated && html.includes(translated), `${outputRoot}${locale}${guide.url}: visible localized legend entry missing for ${key}`);
      }
      assert.ok(!retired.some((imagePath) => html.includes('/' + imagePath)), `${outputRoot}${locale}${guide.url}: retired photo is live`);
    }
  }
}
if (outputRoots.includes('dist/')) {
  for (const imagePath of retired) assert.ok(!fs.existsSync(path.join(root, 'dist', imagePath)), `${imagePath}: retired local-only photo leaked into dist`);
  for (const guide of diagramGuides) assert.ok(fs.existsSync(path.join(root, 'dist', guide.image.src.slice(1))), `${guide.image.src}: original SVG missing in dist`);
}
console.log('Emilia diagram regression passed: XML route endpoints match numbered nodes; source/dist five-language legends and provenance are visible; retired photos remain local-only.');
