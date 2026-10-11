#!/usr/bin/env node
import assert from 'node:assert/strict';
import { missingPhotoAttributionFields, photoLicenseInventoryBlockingProblems } from './photo-license-inventory-guard.mjs';

const usedPhotoWithoutLicense = {
  assetType: 'photographic-raster',
  inventoryStatus: 'used',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Used_photo_without_license.jpg',
  creator: 'Test creator',
  license: null,
  rightsStatus: null,
  useCount: 1
};
const missingLicenseFields = missingPhotoAttributionFields(usedPhotoWithoutLicense);
assert.deepEqual(missingLicenseFields, ['license'], 'a used image with source and creator but no license is incomplete');
assert.deepEqual(photoLicenseInventoryBlockingProblems([{
  src: '/assets/images/used-photo-without-license.webp',
  missing: missingLicenseFields,
  useCount: usedPhotoWithoutLicense.useCount
}]), ['1 in-use image asset(s) have incomplete required attribution or rights fields.'], 'active missing license fields must block the inventory audit');

assert.deepEqual(missingPhotoAttributionFields({
  assetType: 'photographic-raster',
  inventoryStatus: 'unused',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Retired_photo.jpg',
  creator: 'Recorded creator',
  license: null,
  rightsStatus: 'Unresolved; retained for provenance',
  retirementNote: 'Removed from active pages pending source-rights clarification.'
}), [], 'a documented unused retired photo can remain without an active license claim');

assert.deepEqual(missingPhotoAttributionFields({
  assetType: 'original-planning-diagram',
  inventoryStatus: 'used',
  sourceUrl: 'https://tripdistill.com/assets/images/original-planning-diagram.svg',
  creator: 'TripDistill Editorial Team',
  license: null,
  rightsStatus: 'Project original; no separate reuse license declared'
}), [], 'a project-original diagram with recorded rights status does not require a public license');

const licensedPhoto = {
  assetType: 'photographic-raster',
  inventoryStatus: 'used',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Licensed_photo.jpg',
  creator: 'Licensed creator',
  license: 'CC BY 4.0',
  useCount: 1
};
assert.deepEqual(missingPhotoAttributionFields(licensedPhoto), [], 'a complete licensed photo remains valid');
assert.deepEqual(photoLicenseInventoryBlockingProblems([]), [], 'a complete inventory has no blocker');

console.log('Photo-license guard regressions passed: active missing license blocks, while complete licensed photos, documented retired photos and project-original diagrams retain their existing rules.');
