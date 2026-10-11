export function missingPhotoAttributionFields(row) {
  const missing = ['sourceUrl', 'creator'].filter((field) => !row[field]);
  const intentionallyUnlicensedRetiredPhoto = row.assetType === 'photographic-raster'
    && row.inventoryStatus === 'unused'
    && Boolean(row.retirementNote && row.rightsStatus)
    && !row.license;

  if (row.assetType === 'original-planning-diagram' ? !row.rightsStatus : !row.license && !intentionallyUnlicensedRetiredPhoto) {
    missing.push(row.assetType === 'original-planning-diagram' ? 'rightsStatus' : 'license');
  }
  return missing;
}

export function activePhotoAttributionFailures(unmatchedByAsset) {
  return unmatchedByAsset.filter((item) => item.useCount > 0);
}

export function photoLicenseInventoryBlockingProblems(unmatchedByAsset) {
  const activeFailures = activePhotoAttributionFailures(unmatchedByAsset);
  return activeFailures.length
    ? [`${activeFailures.length} in-use image asset(s) have incomplete required attribution or rights fields.`]
    : [];
}
