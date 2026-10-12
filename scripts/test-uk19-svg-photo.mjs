#!/usr/bin/env node
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { unitedKingdomImageManifest } from '../data/united-kingdom-image-manifest.mjs';
import { loadCatalog, localeConfigs } from './i18n-lib.mjs';

const root = path.resolve(import.meta.dirname, '..');
const cases = [
  {
    key: 'scottish-highlands/aviemore-cairngorms',
    route: '/united-kingdom/scottish-highlands/aviemore-cairngorms/',
    svgPath: '/assets/images/united-kingdom-scottish-highlands-aviemore-cairngorms-route-choice.svg',
    photoPath: '/assets/images/united-kingdom-scottish-highlands-aviemore-cairngorms.webp',
    photoSha1: 'ffaf50429bcb54be514707e803d154a396f52dc4',
    languages: ['EN ', '繁中', '日本語', '한국어', 'ไทย'],
    subjects: ['Stagecoach 30', 'ROTHIEMURCHUS', 'final return']
  },
  {
    key: 'pembrokeshire-west-wales/st-davids-coast',
    route: '/united-kingdom/pembrokeshire-west-wales/st-davids-coast/',
    svgPath: '/assets/images/united-kingdom-pembrokeshire-west-wales-st-davids-coast-route-choice.svg',
    photoPath: '/assets/images/united-kingdom-pembrokeshire-west-wales-st-davids-coast.webp',
    photoSha1: '6cf4c89544ad5b08397d395b9cc2dc4cec49bb44',
    languages: ['EN ', '繁中', '日本語', '한국어', 'ไทย'],
    subjects: ['Cathedral Close', 'SEPARATE ROAD / BUS TRANSFER', 'DO NOT WALK THE A487 VERGE']
  }
];

function sha1(file) {
  return createHash('sha1').update(fs.readFileSync(file)).digest('hex');
}

const editions = [{ code: 'en', prefix: '' }, ...localeConfigs.map(({ code, prefix }) => ({ code, prefix }))];
const localizedCatalogs = new Map(localeConfigs.map(({ code }) => [code, loadCatalog(code).translations]));
const outputs = fs.existsSync(path.join(root, 'dist')) ? ['', 'dist/'] : [''];
for (const item of cases) {
  const record = unitedKingdomImageManifest[item.key];
  assert.ok(record, `${item.key}: image manifest entry missing`);
  assert.equal(record.src, item.svgPath, `${item.key}: conflicted photo remains active`);
  assert.equal(record.assetType, 'original-planning-diagram', `${item.key}: expected original diagram asset`);
  assert.equal(record.license, null, `${item.key}: do not invent a reuse license`);
  assert.match(record.rightsStatus, /Project original/);
  assert.equal(record.retainedOriginalPhoto.asset, item.photoPath, `${item.key}: original photo provenance not retained`);
  assert.equal(record.retainedOriginalPhoto.sha1, item.photoSha1, `${item.key}: retained source hash changed`);
  assert.equal(sha1(path.join(root, item.photoPath.slice(1))), item.photoSha1, `${item.key}: retained source photo file changed`);
  assert.match(record.retainedOriginalPhoto.sourcePageConflict, /retained as an unused source file|retained as an unused source file/);
  const svg = fs.readFileSync(path.join(root, item.svgPath.slice(1)), 'utf8');
  assert.match(svg, /^<svg\b[\s\S]*<\/svg>\s*$/);
  assert.match(svg, /TripDistill project original/);
  assert.match(svg, /not to scale/);
  for (const language of item.languages) assert.ok(svg.includes(language), `${item.svgPath}: missing ${language} legend`);
  for (const subject of item.subjects) assert.ok(svg.includes(subject), `${item.svgPath}: missing ${subject}`);

  for (const output of outputs) {
    for (const edition of editions) {
      const htmlPath = path.join(root, output, edition.prefix, item.route.slice(1), 'index.html');
      const html = fs.readFileSync(htmlPath, 'utf8').replaceAll('&amp;', '&');
      assert.ok(html.includes(item.svgPath), `${htmlPath}: live page does not use original SVG`);
      assert.ok(!html.includes(item.photoPath), `${htmlPath}: conflicted photograph is still referenced`);
      if (output === 'dist/') {
        assert.equal(fs.existsSync(path.join(root, output, item.photoPath.slice(1))), false, `${item.photoPath}: rights-review photo must remain local-only`);
      }
      if (edition.code !== 'en') {
        const translations = localizedCatalogs.get(edition.code);
        for (const source of [record.alt, record.label, record.rightsStatus, record.editNote]) {
          const translated = translations[source];
          assert.ok(translated?.trim(), `${edition.code}: missing diagram/image translation for ${item.key}: ${source}`);
          assert.notEqual(translated, source, `${edition.code}: image source remains untranslated: ${source}`);
          assert.ok(html.includes(translated), `${htmlPath}: translated image text missing: ${translated}`);
        }
      }
    }
  }
}

console.log(`UK19 SVG/photo regression passed: both live SVGs, alt/caption/rights/edit notes in five locales, and both conflicting source photos retained unchanged with manifest provenance (${outputs.length === 2 ? 'source and dist' : 'source'}).`);
