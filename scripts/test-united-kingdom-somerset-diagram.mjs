#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { unitedKingdomImageManifest } from '../data/united-kingdom-image-manifest.mjs';
import { unitedKingdomRetiredImageRecords } from '../data/united-kingdom-retired-image-records.mjs';

const root = path.resolve(import.meta.dirname, '..');
const routes = [
  'united-kingdom/bath-bristol-somerset/',
  'united-kingdom/bath-bristol-somerset/bath-roman-georgian-city/',
  'united-kingdom/bath-bristol-somerset/bristol-harbourside-clifton/',
  'united-kingdom/bath-bristol-somerset/wells-glastonbury-mendips/'
];
const locales = [
  { code: 'en', prefix: '' },
  { code: 'zh-Hant', prefix: 'zh/' },
  { code: 'ja', prefix: 'ja/' },
  { code: 'ko', prefix: 'ko/' },
  { code: 'th', prefix: 'th/' }
];
const diagram = unitedKingdomImageManifest['bath-bristol-somerset/wells-glastonbury-mendips'];
const retired = unitedKingdomRetiredImageRecords.wellsCathedral;
const imagePath = (url) => path.join(root, url.replace(/^\//, ''));

function walk(node, visit) {
  visit(node);
  for (const child of node.childNodes || []) walk(child, visit);
}

function elements(document, predicate) {
  const matches = [];
  walk(document, (node) => { if (node.tagName && predicate(node)) matches.push(node); });
  return matches;
}

function attrs(node) {
  return Object.fromEntries((node.attrs || []).map(({ name, value }) => [name, value]));
}

function textContent(node) {
  if (node.nodeName === '#text') return node.value || '';
  return (node.childNodes || []).map(textContent).join('');
}

assert.equal(diagram.src, '/assets/images/united-kingdom-bath-bristol-somerset-wells-glastonbury-mendips-route-choice.svg');
assert.equal(diagram.assetType, 'original-planning-diagram');
assert.equal(diagram.creator, 'TripDistill Editorial Team');
assert.equal(diagram.license, null);
assert.equal(diagram.rightsStatus, 'Project original; no separate reuse license declared');
assert.equal(diagram.rightsStatusUrl, 'https://tripdistill.com/terms-of-use/');
assert.equal(retired.inventoryStatus, 'unused');
assert.match(retired.retirementNote, /could not be independently reached/);
assert.match(retired.retirementNote, /unverified metadata/);

const svgPath = imagePath(diagram.src);
const svg = fs.readFileSync(svgPath, 'utf8');
assert.equal(crypto.createHash('sha1').update(svg).digest('hex'), diagram.localSha1);
assert.match(svg, /TripDistill project original/);
assert.match(svg, /not a geographic map and not to scale/);
assert.doesNotMatch(svg, /CC BY|Creative Commons|open license/i);
assert.ok(fs.existsSync(imagePath(retired.src)), 'retired photo remains archived');
assert.equal(crypto.createHash('sha1').update(fs.readFileSync(imagePath(retired.src))).digest('hex'), retired.localSha1);

const inventory = JSON.parse(fs.readFileSync(path.join(root, 'reports/photo-license-inventory.json'), 'utf8'));
const inventoryRecords = inventory.entries.flatMap((entry) => entry.sourceRecords);
const diagramRecord = inventoryRecords.find((record) => record.assetPath === diagram.src);
const retiredRecord = inventoryRecords.find((record) => record.assetPath === retired.src);
assert.ok(diagramRecord, 'project original must be in the checked-in image inventory');
assert.equal(diagramRecord.inventoryStatus, 'used');
assert.ok(diagramRecord.useCount > 0);
assert.equal(diagramRecord.assetType, 'original-planning-diagram');
assert.equal(diagramRecord.localSha1, diagram.localSha1);
assert.ok(retiredRecord, 'retired Wells photo must remain in the inventory');
assert.equal(retiredRecord.inventoryStatus, 'unused');
assert.equal(retiredRecord.useCount, 0);
assert.deepEqual(retiredRecord.routes, []);
assert.equal(retiredRecord.retirementNote, retired.retirementNote);
assert.equal(retiredRecord.verificationStatus, 'site_credit_or_metadata_only');

for (const locale of locales) {
  for (const route of routes) {
    const prefix = locale.prefix;
    const file = path.join(root, prefix, route, 'index.html');
    const html = fs.readFileSync(file, 'utf8');
    const document = parse(html);
    const images = elements(document, (node) => node.tagName === 'img').map(attrs);
    assert.ok(images.some((image) => image.src === diagram.src), `${locale.code} ${route} must reference the planning diagram`);
    assert.ok(images.every((image) => image.src !== retired.src), `${locale.code} ${route} must not display the unverified photo`);
    assert.ok(!html.includes(retired.source), `${locale.code} ${route} must not credit the unverified photo as active`);
    assert.ok(html.includes(diagram.source), `${locale.code} ${route} must retain the diagram source credit`);
    assert.ok(html.includes(diagram.rightsStatusUrl), `${locale.code} ${route} must link the diagram rights status`);
    const diagramImages = images.filter((image) => image.src === diagram.src);
    for (const image of diagramImages) {
      assert.ok(image.alt, `${locale.code} ${route} diagram needs alternative text`);
      if (locale.code !== 'en') assert.notEqual(image.alt, diagram.alt, `${locale.code} diagram alt text must be translated`);
    }
    if (route.endsWith('wells-glastonbury-mendips/')) {
      const captions = elements(document, (node) => node.tagName === 'p' && (attrs(node).class || '').split(/\s+/).includes('uk-diagram-note'));
      assert.equal(captions.length, 1, `${locale.code} Wells guide must show the diagram's textual summary`);
      const hero = images.find((image) => image.src === diagram.src);
      assert.equal(textContent(captions[0]).trim(), hero.alt, `${locale.code} visible diagram summary and alt must match`);
    }
    const creditRows = elements(document, (node) => node.tagName === 'li' && elements(node, (child) => child.tagName === 'a' && attrs(child).href === diagram.source).length > 0);
    assert.ok(creditRows.length > 0, `${locale.code} ${route} must show the diagram credit`);
    const creditText = textContent(creditRows[0]);
    assert.ok(creditText.includes('TripDistill Editorial Team'));
    if (locale.code !== 'en') {
      assert.ok(!creditText.includes(diagram.rightsStatus), `${locale.code} rights disclosure must be translated`);
      assert.ok(!creditText.includes(diagram.editNote), `${locale.code} schematic disclosure must be translated`);
    }
  }
}

console.log('UK Somerset image regression passed: 1 original diagram, 1 archived pending photo, 4 routes and 5 languages.');
