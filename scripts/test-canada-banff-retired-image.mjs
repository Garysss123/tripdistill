#!/usr/bin/env node
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { canadaImageManifest } from '../data/canada-image-manifest.mjs';

const root = path.resolve(import.meta.dirname, '..');
const manifest = canadaImageManifest['banff-lake-louise/johnston-minnewanka'];
assert.equal(manifest?.inventoryStatus, 'unused', 'the mismatched Johnston photo must remain marked unused in source metadata');
assert.match(manifest?.retirementNote || '', /forest stream/i, 'the source note must preserve the reason it was retired');
const sourceImagePath = path.join(root, manifest.src.slice(1));
assert.ok(fs.existsSync(sourceImagePath), 'the retired photo must remain preserved in the repository');
const sha256 = createHash('sha256').update(fs.readFileSync(sourceImagePath)).digest('hex');
assert.equal(sha256, '4f610219bead808b3aa29ac941f574c0c9dec2ae40044be26ff444508c632c48', 'the preserved original photo bytes must not change');

const route = 'canada/banff-lake-louise/johnston-minnewanka/index.html';
const editions = ['', 'zh', 'ja', 'ko', 'th'];
const diagramPath = '/assets/images/tripdistill-canada-banff-two-corridors.svg';
for (const edition of editions) {
  const relativePage = edition ? path.join(edition, route) : route;
  const sourcePagePath = path.join(root, relativePage);
  const distPagePath = path.join(root, 'dist', relativePage);
  assert.ok(fs.existsSync(sourcePagePath), `source route must exist: ${relativePage}`);
  assert.ok(fs.existsSync(distPagePath), `built route must exist: ${relativePage}`);
  const sourceHtml = fs.readFileSync(sourcePagePath, 'utf8');
  const distHtml = fs.readFileSync(distPagePath, 'utf8');
  assert.ok(!sourceHtml.includes(manifest.src), `${relativePage} must not reference the retired source image`);
  assert.ok(!distHtml.includes(manifest.src), `dist/${relativePage} must not reference the retired source image`);
  assert.ok(sourceHtml.includes(diagramPath), `${relativePage} must retain the replacement SVG`);
  assert.ok(distHtml.includes(diagramPath), `dist/${relativePage} must retain the replacement SVG`);
}

const distImagePath = path.join(root, 'dist', manifest.src.slice(1));
assert.equal(fs.existsSync(distImagePath), false, 'the retired photo file must not be published in dist');
console.log('Banff retired-image regression passed: original bytes and retirement note stay in source; all five live/source and dist routes omit the photo, retain the SVG, and dist omits the retired asset.');
