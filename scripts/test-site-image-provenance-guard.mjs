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
const originalSvgPaths = [
  '/assets/images/tripdistill-dayang-bunting-chain.svg',
  '/assets/images/tripdistill-kellies-castle-transfer.svg',
  '/assets/images/tripdistill-semporna-mabul-kapalai-comparison.svg',
  '/assets/images/tripdistill-semporna-sipadan-permit-flow.svg',
  '/assets/images/tripdistill-italy-bologna-portico-plan.svg',
  '/assets/images/tripdistill-italy-modena-parma-rail-and-booking-plan.svg',
  '/assets/images/tripdistill-canada-banff-two-corridors.svg',
  '/assets/images/australia-blue-mountains-western-line-planning.svg',
  '/assets/images/australia-great-ocean-road-route-schematic.svg',
  '/assets/images/tripdistill-brisbane-bay-crossings.svg',
  '/assets/images/tripdistill-switzerland-graubunden-corridor-choice.svg',
];
const francePageUrl = 'https://tripdistill.com/france/lille-french-flanders/';
const franceSvgPath = '/assets/images/france-lille-arras-vimy-sequence-legend.svg';
const francePhotoPath = '/assets/images/france-lille-french-flanders-old-lille-roubaix.webp';
const lucernePageUrl = 'https://tripdistill.com/switzerland/lucerne-lake-mountains/';
const lucerneSvgPath = '/assets/images/switzerland-lucerne-lake-mountains-rigi-route-choice.svg';

assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}${provenanceLinks}`, pageUrl), true, 'one normalized original SVG with its source and Terms links qualifies');
const blueMountainsImage = `<img src="${blueMountainsPath}" width="1600" height="1140" alt="Not-to-scale station gateway planning schematic">`;
const blueMountainsCredit = `<li><a href="https://tripdistill.com${blueMountainsPath}">Original Blue Mountains planning schematic</a> — TripDistill Editorial Team, <a href="${termsHref}">Project original; no separate reuse license declared</a>.</li>`;
assert.equal(hasVisibleOriginalProjectProvenance(`${blueMountainsImage}${blueMountainsCredit}`, 'https://tripdistill.com/australia/blue-mountains-nsw-coast/'), true, 'the exact Blue Mountains schematic qualifies only with its source and Terms links');
assert.equal(hasVisibleOriginalProjectProvenance(`${blueMountainsImage}<li><a href="https://tripdistill.com${blueMountainsPath}">Original Blue Mountains planning schematic</a></li>`, 'https://tripdistill.com/australia/blue-mountains-nsw-coast/'), false, 'the Blue Mountains schematic still requires a Terms link');
assert.equal(hasVisibleOriginalProjectProvenance(`<img src="${franceSvgPath}" alt="Original planning sequence"><img src="${francePhotoPath}" alt="Lille photo"><li><a href="https://tripdistill.com${franceSvgPath}">Original diagram</a> — <a href="${termsHref}">Terms of Use</a></li><li><a href="https://commons.wikimedia.org/wiki/File:Lille.jpg">Lille source</a> — P. Photographer, CC BY-SA 4.0</li>`, francePageUrl), true, 'the France original diagram keeps its own source and Terms links alongside independently credited photographs');
assert.equal(hasVisibleOriginalProjectProvenance('<img src="https://tripdistill.com/assets/images/china-lhasa-preparation.svg?edition=1" width="960" height="640">' + provenanceLinks, pageUrl), true, 'same-origin absolute URLs normalize to the exact original SVG path');
for (const imagePath of originalSvgPaths) {
  const image = `<img src="${imagePath}" width="960" height="640" alt="Planning schematic">`;
  const source = `<li><a href="https://tripdistill.com${imagePath}">Original project schematic</a> — <a href="${termsHref}">Terms of Use</a></li>`;
  assert.equal(hasVisibleOriginalProjectProvenance(`${image}${source}`, 'https://tripdistill.com/malaysia/'), true, `${imagePath} qualifies only with its exact source and Terms links`);
}
assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}<img src="/assets/images/unlicensed-photo.webp">${provenanceLinks}`, pageUrl), false, 'a second image cannot inherit the SVG exception');
assert.equal(hasVisibleOriginalProjectProvenance(`<img src="${franceSvgPath}"><img src="${francePhotoPath}">${provenanceLinks}`, francePageUrl), false, 'a France route image without a separate Commons credit cannot inherit the SVG exception');
const lucerneSvg = `<img src="${lucerneSvgPath}" width="1600" height="1066" alt="Not to scale">`;
const lucernePhoto = '<img src="/assets/images/lucerne-photo.webp" alt="Licensed photo">';
const lucerneDiagramCredit = `<li><a href="https://tripdistill.com${lucerneSvgPath}">Original Lucerne schematic</a> — <a href="${termsHref}">Terms of Use</a></li>`;
const lucernePhotoCredit = '<li><a href="https://commons.wikimedia.org/wiki/File:Lucerne.jpg">Lucerne photo source</a> — A. Photographer, CC BY-SA 4.0</li>';
assert.equal(hasVisibleOriginalProjectProvenance(`${lucerneSvg}${lucernePhoto}${lucerneDiagramCredit}${lucernePhotoCredit}`, lucernePageUrl), true, 'the Lucerne schematic and separately credited licensed photo retain their distinct provenance');
assert.equal(hasVisibleOriginalProjectProvenance(`${lucerneSvg}${lucernePhoto}${lucerneDiagramCredit}`, lucernePageUrl), false, 'the Lucerne schematic cannot grant its provenance exception to an uncredited photo');
assert.equal(hasVisibleOriginalProjectProvenance(`<img src="/assets/images/other-diagram.svg">${provenanceLinks}`, pageUrl), false, 'a different image source cannot use the exception');
assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}<li><a href="${termsHref}">Terms of Use</a></li>`, pageUrl), false, 'the original image source link is required');
assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}<li><a href="${sourceHref}">Original Lhasa schematic</a></li>`, pageUrl), false, 'the Terms link is required');

const brisbanePath = path.resolve('australia/brisbane-moreton-bay/index.html');
const brisbaneHtml = fs.readFileSync(brisbanePath, 'utf8');
assert.equal(hasVisibleOriginalProjectProvenance(brisbaneHtml, 'https://tripdistill.com/australia/brisbane-moreton-bay/'), true, 'the Brisbane hub schematic has its own source link and Terms link alongside independently credited photos');
const blueMountainsHubPath = path.resolve('australia/blue-mountains-nsw-coast/index.html');
const blueMountainsHub = fs.readFileSync(blueMountainsHubPath, 'utf8');
assert.equal(hasVisibleOriginalProjectProvenance(blueMountainsHub, 'https://tripdistill.com/australia/blue-mountains-nsw-coast/'), true, 'the Blue Mountains hub schematic has its own source and Terms links');
const greatOceanHubPath = path.resolve('australia/great-ocean-road-gariwerd/index.html');
const greatOceanHub = fs.readFileSync(greatOceanHubPath, 'utf8');
assert.equal(hasVisibleOriginalProjectProvenance(greatOceanHub, 'https://tripdistill.com/australia/great-ocean-road-gariwerd/'), true, 'the Great Ocean Road hub schematic has its own source and Terms links');

console.log('Site image provenance regression passed: allowlisted original SVGs require exact visible source and Terms links; France, Switzerland and Australia routes retain separate photo credits.');
