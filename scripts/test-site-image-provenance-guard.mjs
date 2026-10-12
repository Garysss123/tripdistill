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
  '/assets/images/tripdistill-kellies-castle-transfer.svg',
  '/assets/images/tripdistill-semporna-mabul-kapalai-comparison.svg',
  '/assets/images/tripdistill-semporna-sipadan-permit-flow.svg'
];
const francePageUrl = 'https://tripdistill.com/france/lille-french-flanders/';
const franceSvgPath = '/assets/images/france-lille-arras-vimy-sequence-legend.svg';
const francePhotoPath = '/assets/images/france-lille-french-flanders-old-lille-roubaix.webp';

assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}${provenanceLinks}`, pageUrl), true, 'one normalized original SVG with its source and Terms links qualifies');
assert.equal(hasVisibleOriginalProjectProvenance(`<img src="${franceSvgPath}" alt="Original planning sequence"><img src="${francePhotoPath}" alt="Lille photo"><li><a href="https://tripdistill.com${franceSvgPath}">Original diagram</a> — <a href="${termsHref}">Terms of Use</a></li><li><a href="https://commons.wikimedia.org/wiki/File:Lille.jpg">Lille source</a> — P. Photographer, CC BY-SA 4.0</li>`, francePageUrl), true, 'the France original diagram keeps its own source and Terms links alongside independently credited photographs');
assert.equal(hasVisibleOriginalProjectProvenance('<img src="https://tripdistill.com/assets/images/china-lhasa-preparation.svg?edition=1" width="960" height="640">' + provenanceLinks, pageUrl), true, 'same-origin absolute URLs normalize to the exact original SVG path');
for (const imagePath of malaysiaPaths) {
  const image = `<img src="${imagePath}" width="960" height="640" alt="Planning schematic">`;
  const source = `<li><a href="https://tripdistill.com${imagePath}">Original Malaysia schematic</a> — <a href="${termsHref}">Terms of Use</a></li>`;
  assert.equal(hasVisibleOriginalProjectProvenance(`${image}${source}`, 'https://tripdistill.com/malaysia/'), true, `${imagePath} qualifies only with its exact source and Terms links`);
}
assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}<img src="/assets/images/unlicensed-photo.webp">${provenanceLinks}`, pageUrl), false, 'a second image cannot inherit the SVG exception');
assert.equal(hasVisibleOriginalProjectProvenance(`<img src="${franceSvgPath}"><img src="${francePhotoPath}">${provenanceLinks}`, francePageUrl), false, 'a France route image without a separate Commons credit cannot inherit the SVG exception');
assert.equal(hasVisibleOriginalProjectProvenance(`<img src="/assets/images/other-diagram.svg">${provenanceLinks}`, pageUrl), false, 'a different image source cannot use the exception');
assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}<li><a href="${termsHref}">Terms of Use</a></li>`, pageUrl), false, 'the original image source link is required');
assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}<li><a href="${sourceHref}">Original Lhasa schematic</a></li>`, pageUrl), false, 'the Terms link is required');

console.log('Site image provenance regression passed: original SVGs require exact source and Terms links; France routes may include independently credited photos.');
