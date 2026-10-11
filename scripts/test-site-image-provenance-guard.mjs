#!/usr/bin/env node
import assert from 'node:assert/strict';
import { hasVisibleOriginalProjectProvenance } from './site-image-provenance-guard.mjs';

const pageUrl = 'https://tripdistill.com/china/lhasa-tibetan-plateau/';
const sourceHref = 'https://tripdistill.com/assets/images/china-lhasa-preparation.svg';
const termsHref = 'https://tripdistill.com/terms-of-use/';
const provenanceLinks = `<li><a href="${sourceHref}">Original Lhasa schematic</a> — <a href="${termsHref}">Terms of Use</a></li>`;
const originalSvg = '<img src="/assets/images/china-lhasa-preparation.svg" width="960" height="640" alt="Planning schematic">';

assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}${provenanceLinks}`, pageUrl), true, 'one normalized original SVG with its source and Terms links qualifies');
assert.equal(hasVisibleOriginalProjectProvenance('<img src="https://tripdistill.com/assets/images/china-lhasa-preparation.svg?edition=1" width="960" height="640">' + provenanceLinks, pageUrl), true, 'same-origin absolute URLs normalize to the exact original SVG path');
assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}<img src="/assets/images/unlicensed-photo.webp">${provenanceLinks}`, pageUrl), false, 'a second image cannot inherit the SVG exception');
assert.equal(hasVisibleOriginalProjectProvenance(`<img src="/assets/images/other-diagram.svg">${provenanceLinks}`, pageUrl), false, 'a different image source cannot use the exception');
assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}<li><a href="${termsHref}">Terms of Use</a></li>`, pageUrl), false, 'the original image source link is required');
assert.equal(hasVisibleOriginalProjectProvenance(`${originalSvg}<li><a href="${sourceHref}">Original Lhasa schematic</a></li>`, pageUrl), false, 'the Terms link is required');

console.log('Site image provenance regression passed: the original SVG exception is limited to one normalized image with both exact source and Terms links.');
