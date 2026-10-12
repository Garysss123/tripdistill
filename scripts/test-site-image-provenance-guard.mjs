#!/usr/bin/env node
import assert from 'node:assert/strict';
import { hasVisibleOriginalProjectProvenance } from './site-image-provenance-guard.mjs';

const pageUrl = 'https://tripdistill.com/china/lhasa-tibetan-plateau/';
const sourceHref = 'https://tripdistill.com/assets/images/china-lhasa-preparation.svg';
const termsHref = 'https://tripdistill.com/terms-of-use/';
const provenanceLinks = `<li><a href="${sourceHref}">Original Lhasa schematic</a> — <a href="${termsHref}">Terms of Use</a></li>`;
const originalSvg = '<img src="/assets/images/china-lhasa-preparation.svg" width="960" height="640" alt="Planning schematic">';
const malaysiaPaths = [
  '/assets/images/tripdistill-dayang-bunting-chain.svg',
  '/assets/images/tripdistill-kellies-castle-transfer.svg'
];
const lucerneSvgPath = '/assets/images/switzerland-lucerne-lake-mountains-rigi-route-choice.svg';

assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}${provenanceLinks}`, pageUrl), true, 'one normalized original SVG with its source and Terms links qualifies');
assert.equal(hasVisibleOriginalProjectProvenance('<img src="https://tripdistill.com/assets/images/china-lhasa-preparation.svg?edition=1" width="960" height="640">' + provenanceLinks, pageUrl), true, 'same-origin absolute URLs normalize to the exact original SVG path');
for (const imagePath of malaysiaPaths) {
  const image = `<img src="${imagePath}" width="960" height="640" alt="Planning schematic">`;
  const source = `<li><a href="https://tripdistill.com${imagePath}">Original Malaysia schematic</a> — <a href="${termsHref}">Terms of Use</a></li>`;
  assert.equal(hasVisibleOriginalProjectProvenance(`${image}${source}`, 'https://tripdistill.com/malaysia/'), true, `${imagePath} qualifies only with its exact source and Terms links`);
}
assert.equal(hasVisibleOriginalProjectProvenance(`<img src="${lucerneSvgPath}" width="1600" height="1066" alt="Not to scale"><img src="/assets/images/lucerne-photo.webp" alt="Licensed photo">${`<li><a href="https://tripdistill.com${lucerneSvgPath}">Original Lucerne schematic</a> — <a href="${termsHref}">Terms of Use</a></li>`}`, 'https://tripdistill.com/switzerland/lucerne-lake-mountains/'), true, 'the original SVG can appear with separately credited licensed photos on a hub page');
assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}<img src="/assets/images/unlicensed-photo.webp"><li><a href="${termsHref}">Terms of Use</a></li>`, pageUrl), false, 'an additional photo cannot substitute for the SVG source link');
assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}${originalSvg}${provenanceLinks}`, pageUrl), false, 'duplicate project-original image uses cannot collapse into a single provenance record');
assert.equal(hasVisibleOriginalProjectProvenance(`<img src="/assets/images/other-diagram.svg">${provenanceLinks}`, pageUrl), false, 'a different image source cannot use the exception');
assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}<li><a href="${termsHref}">Terms of Use</a></li>`, pageUrl), false, 'the original image source link is required');
assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}<li><a href="${sourceHref}">Original Lhasa schematic</a></li>`, pageUrl), false, 'the Terms link is required');

console.log('Site image provenance regression passed: four original SVGs require exact source and Terms links; separately credited photos may share the page.');
