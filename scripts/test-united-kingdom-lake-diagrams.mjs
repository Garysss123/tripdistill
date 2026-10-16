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
  'united-kingdom/lake-district-cumbria/',
  'united-kingdom/lake-district-cumbria/keswick-derwentwater/',
  'united-kingdom/lake-district-cumbria/carlisle-hadrians-wall-west/',
  'united-kingdom/lake-district-cumbria/windermere-ambleside/'
];
const locales = [
  { code: 'en', prefix: '' },
  { code: 'zh-Hant', prefix: 'zh' },
  { code: 'ja', prefix: 'ja' },
  { code: 'ko', prefix: 'ko' },
  { code: 'th', prefix: 'th' }
];
const diagrams = [
  {
    key: 'lake-district-cumbria/keswick-derwentwater',
    oldKey: 'keswickDerwentwater',
    path: '/assets/images/united-kingdom-lake-district-cumbria-keswick-derwentwater-route-choice.svg'
  },
  {
    key: 'lake-district-cumbria/carlisle-hadrians-wall-west',
    oldKey: 'carlisleHadriansWall',
    path: '/assets/images/united-kingdom-lake-district-cumbria-carlisle-hadrians-wall-west-route-choice.svg'
  }
];

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
  if (node.nodeName === '#text') return node.value;
  return (node.childNodes || []).map(textContent).join('');
}

function readPage(locale, route) {
  const prefix = locale.prefix ? `${locale.prefix}/` : '';
  return fs.readFileSync(path.join(root, prefix, route, 'index.html'), 'utf8');
}

for (const diagram of diagrams) {
  const image = unitedKingdomImageManifest[diagram.key];
  const retired = unitedKingdomRetiredImageRecords[diagram.oldKey];
  assert.equal(image.src, diagram.path, `${diagram.key} must use its original SVG`);
  assert.equal(image.assetType, 'original-planning-diagram');
  assert.equal(image.creator, 'TripDistill Editorial Team');
  assert.equal(image.license, null, 'the project artwork must not acquire a public reuse license claim');
  assert.equal(image.rightsStatus, 'Project original; no separate reuse license declared');
  assert.equal(image.rightsStatusUrl, 'https://tripdistill.com/terms-of-use/');
  assert.equal(retired.inventoryStatus, 'unused');
  assert.ok(retired.retirementNote, 'retired photo must preserve a reason for removal');

  const svgPath = path.join(root, 'assets', 'images', path.basename(diagram.path));
  const svg = fs.readFileSync(svgPath, 'utf8');
  assert.equal(crypto.createHash('sha1').update(svg).digest('hex'), image.localSha1, `${diagram.path} source hash must match the manifest`);
  assert.match(svg, /TripDistill project original/);
  assert.match(svg, /not a geographic map and not to scale/);
  assert.doesNotMatch(svg, /CC BY|Creative Commons|open license/i, 'diagram metadata must not invent a public license');

  const oldImagePath = path.join(root, 'assets', 'images', path.basename(retired.src));
  assert.ok(fs.existsSync(oldImagePath), `${retired.src} must remain archived in the repository`);
  assert.equal(crypto.createHash('sha1').update(fs.readFileSync(oldImagePath)).digest('hex'), retired.localSha1, 'archived photo integrity must remain recorded');
}

const inventory = JSON.parse(fs.readFileSync(path.join(root, 'reports', 'photo-license-inventory.json'), 'utf8'));
for (const diagram of diagrams) {
  const record = inventory.entries.flatMap((entry) => entry.sourceRecords).find((item) => item.assetPath === diagram.path);
  assert.ok(record, `${diagram.path} must have an inventory record`);
  assert.equal(record.assetType, 'original-planning-diagram');
  assert.equal(record.inventoryStatus, 'used');
  assert.ok(record.useCount > 0);
  assert.equal(record.license, null);
  assert.equal(record.rightsStatus, 'Project original; no separate reuse license declared');
  assert.equal(record.localSha1, unitedKingdomImageManifest[diagram.key].localSha1);
}
for (const retired of Object.values(unitedKingdomRetiredImageRecords)) {
  const record = inventory.entries.flatMap((entry) => entry.sourceRecords).find((item) => item.assetPath === retired.src);
  assert.ok(record, `${retired.src} must remain in the photo inventory`);
  assert.equal(record.inventoryStatus, 'unused');
  assert.equal(record.useCount, 0);
  assert.deepEqual(record.routes, []);
  assert.equal(record.retirementNote, retired.retirementNote);
}

for (const locale of locales) {
  for (const route of routes) {
    const html = readPage(locale, route);
    const document = parse(html);
    const images = elements(document, (node) => node.tagName === 'img').map((node) => attrs(node));
    const imagePaths = images.map((item) => item.src || '');
    for (const retired of Object.values(unitedKingdomRetiredImageRecords)) {
      assert.equal(imagePaths.includes(retired.src), false, `${locale.code} ${route} must not display retired photo ${retired.src}`);
      assert.equal(html.includes(retired.source), false, `${locale.code} ${route} must not retain the retired Commons source link`);
      assert.equal(html.includes(retired.label), false, `${locale.code} ${route} must not retain the retired photo credit`);
      assert.equal(html.includes(retired.commonsTitle), false, `${locale.code} ${route} must not retain the retired Commons title`);
    }
    for (const diagram of diagrams) {
      const matches = images.filter((item) => item.src === diagram.path);
      assert.ok(matches.length > 0, `${locale.code} ${route} must retain the ${diagram.key} diagram in cards or the route hero`);
      for (const item of matches) {
        assert.ok(item.alt, `${locale.code} ${route} SVG references must have readable localized alt text`);
        if (locale.code !== 'en') assert.notEqual(item.alt, unitedKingdomImageManifest[diagram.key].alt, `${locale.code} ${diagram.key} alt must be translated`);
      }
    }
    assert.match(html, /Official sources and image credits|官方來源與圖片署名|公式情報と画像クレジット|공식 정보 및 이미지 출처|แหล่งข้อมูลทางการและเครดิตภาพ/);
  }

  for (const diagram of diagrams) {
    const route = diagram.key.endsWith('keswick-derwentwater')
      ? 'united-kingdom/lake-district-cumbria/keswick-derwentwater/'
      : 'united-kingdom/lake-district-cumbria/carlisle-hadrians-wall-west/';
    const document = parse(readPage(locale, route));
    const image = elements(document, (node) => node.tagName === 'img' && attrs(node).src === diagram.path)[0];
    const alt = attrs(image).alt;
    const captions = elements(document, (node) => node.tagName === 'p' && (attrs(node).class || '').split(/\s+/).includes('uk-diagram-note'));
    assert.equal(captions.length, 1, `${locale.code} ${route} must display the diagram’s textual route choices beside the SVG`);
    assert.equal(textContent(captions[0]).trim(), alt, `${locale.code} ${route} visible diagram summary must match its accessible alternative text`);

    const credit = elements(document, (node) => node.tagName === 'li' && elements(node, (child) => child.tagName === 'a' && attrs(child).href === unitedKingdomImageManifest[diagram.key].source).length > 0)[0];
    assert.ok(credit, `${locale.code} ${route} must credit the project artwork source`);
    const creditText = textContent(credit);
    assert.ok(creditText.includes('TripDistill Editorial Team'));
    assert.ok(!/CC BY|Creative Commons/i.test(creditText), 'the diagram credit must not imply a Creative Commons license');
    assert.ok(elements(credit, (node) => node.tagName === 'a' && (attrs(node).href || '').includes('terms-of-use')).length > 0, 'credit must link the terms status without asserting a reuse license');
    if (locale.code !== 'en') {
      assert.ok(!creditText.includes('Project original; no separate reuse license declared'), `${locale.code} rights disclosure must be translated`);
    }
  }
}

console.log('United Kingdom Lake District original-diagram regression passed: 2 SVGs, 2 archived photos, 4 routes, 5 languages.');
