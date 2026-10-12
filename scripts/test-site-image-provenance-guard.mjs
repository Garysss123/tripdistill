#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { hasVisibleOriginalProjectProvenance } from './site-image-provenance-guard.mjs';

const pageUrl = 'https://tripdistill.com/china/lhasa-tibetan-plateau/';
const sourceHref = 'https://tripdistill.com/assets/images/china-lhasa-preparation.svg';
const termsHref = 'https://tripdistill.com/terms-of-use/';
const blueMountainsPath = '/assets/images/australia-blue-mountains-western-line-planning.svg';
const provenanceLinks = `<li><a href="${sourceHref}">Original Lhasa schematic</a> — <a href="${termsHref}">Terms of Use</a></li>`;
const originalSvg = '<img src="/assets/images/china-lhasa-preparation.svg" width="960" height="640" alt="Planning schematic">';
const malaysiaPaths = [
  '/assets/images/tripdistill-brisbane-bay-crossings.svg',
  '/assets/images/tripdistill-dayang-bunting-chain.svg',
  '/assets/images/tripdistill-kellies-castle-transfer.svg'
];

const blueMountainsImage = `<img src="${blueMountainsPath}" width="1600" height="1100" alt="Not-to-scale station gateway planning schematic">`;
const blueMountainsCredit = `<li><a href="https://tripdistill.com${blueMountainsPath}">Original Blue Mountains planning schematic</a> — TripDistill Editorial Team, <a href="${termsHref}">Project original; no separate reuse license declared</a>.</li>`;
assert.equal(hasVisibleOriginalProjectProvenance(`${blueMountainsImage}${blueMountainsCredit}`, 'https://tripdistill.com/australia/blue-mountains-nsw-coast/'), true, 'the exact Blue Mountains schematic qualifies only with its source and Terms links');
assert.equal(hasVisibleOriginalProjectProvenance(`${blueMountainsImage}<li><a href="https://tripdistill.com${blueMountainsPath}">Original Blue Mountains planning schematic</a></li>`, 'https://tripdistill.com/australia/blue-mountains-nsw-coast/'), false, 'the Blue Mountains schematic still requires a Terms link');

assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}${provenanceLinks}`, pageUrl), true, 'one normalized original SVG with its source and Terms links qualifies');
assert.equal(hasVisibleOriginalProjectProvenance('<img src="https://tripdistill.com/assets/images/china-lhasa-preparation.svg?edition=1" width="960" height="640">' + provenanceLinks, pageUrl), true, 'same-origin absolute URLs normalize to the exact original SVG path');
for (const imagePath of malaysiaPaths) {
  const image = `<img src="${imagePath}" width="960" height="640" alt="Planning schematic">`;
  const source = `<li><a href="https://tripdistill.com${imagePath}">Original Malaysia schematic</a> — <a href="${termsHref}">Terms of Use</a></li>`;
  assert.equal(hasVisibleOriginalProjectProvenance(`${image}${source}`, 'https://tripdistill.com/malaysia/'), true, `${imagePath} qualifies only with its exact source and Terms links`);
}
assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}<img src="/assets/images/another-photo.webp">${provenanceLinks}`, pageUrl), true, 'the original-graphic check can coexist with separately credited page photos');
assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}<img src="/assets/images/tripdistill-dayang-bunting-chain.svg">${provenanceLinks}`, pageUrl), false, 'two original schematics require their own exact visible source links');
assert.equal(hasVisibleOriginalProjectProvenance(`<img src="/assets/images/other-diagram.svg">${provenanceLinks}`, pageUrl), false, 'a different image source cannot use the exception');
assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}<li><a href="${termsHref}">Terms of Use</a></li>`, pageUrl), false, 'the original image source link is required');
assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}<li><a href="${sourceHref}">Original Lhasa schematic</a></li>`, pageUrl), false, 'the Terms link is required');

const brisbanePath = path.resolve('australia/brisbane-moreton-bay/index.html');
const brisbaneHtml = fs.readFileSync(brisbanePath, 'utf8');
assert.equal(hasVisibleOriginalProjectProvenance(brisbaneHtml, 'https://tripdistill.com/australia/brisbane-moreton-bay/'), true, 'the Brisbane hub schematic has its own source link and Terms link alongside the independently credited destination-card photos');
const blueMountainsHubPath = path.resolve('australia/blue-mountains-nsw-coast/index.html');
const blueMountainsHub = fs.readFileSync(blueMountainsHubPath, 'utf8');
assert.equal(hasVisibleOriginalProjectProvenance(blueMountainsHub, 'https://tripdistill.com/australia/blue-mountains-nsw-coast/'), true, 'the Blue Mountains hub schematic has its own source and Terms links');

console.log('Site image provenance regression passed: one allowlisted original schematic needs its exact visible source and Terms links; additional photo credits are checked separately.');
