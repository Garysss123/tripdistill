import fs from 'node:fs';
import path from 'node:path';
import { collectTranslationWork, loadCatalog, localeConfigs, root } from './i18n-lib.mjs';

const required = new Set(collectTranslationWork().flatMap((record) => record.units));
let incomplete = false;

for (const locale of localeConfigs) {
  const batchDirectory = path.join(root, 'data', 'i18n', 'reviewed', locale.code);
  const batchFiles = fs.existsSync(batchDirectory)
    ? fs.readdirSync(batchDirectory).filter((name) => name.endsWith('.json')).sort()
    : [];
  const batchTranslations = new Map();
  const invalidBatches = [];
  const batchProblems = [];

  for (const name of batchFiles) {
    try {
      const batch = JSON.parse(fs.readFileSync(path.join(batchDirectory, name), 'utf8'));
      if (batch.locale !== locale.code || batch.qualityStatus !== 'reviewed' || !batch.translations || typeof batch.translations !== 'object') {
        batchProblems.push(`${name}: invalid locale, status or translations schema`);
        continue;
      }
      for (const [source, target] of Object.entries(batch.translations)) {
        if (!required.has(source)) batchProblems.push(`${name}: stale source key ${source}`);
        if (typeof target !== 'string' || !target.trim()) batchProblems.push(`${name}: empty target for ${source}`);
        if (batchTranslations.has(source) && batchTranslations.get(source) !== target) batchProblems.push(`${name}: conflicting target for ${source}`);
        if (!batchTranslations.has(source) && typeof target === 'string' && target.trim()) batchTranslations.set(source, target);
      }
    } catch (error) {
      invalidBatches.push(`${name}: ${error.message}`);
    }
  }

  const batchMissing = [...required].filter((source) => !batchTranslations.has(source));
  const catalog = loadCatalog(locale.code);
  const available = new Set(Object.keys(catalog.translations));
  const missing = [...required].filter((source) => !catalog.translations[source]?.trim());
  const stale = [...available].filter((source) => !required.has(source));
  console.log(`${locale.code}: batches ${required.size - batchMissing.length}/${required.size} keys across ${batchFiles.length} files; ${invalidBatches.length} invalid/in-progress; ${batchProblems.length} batch problems.`);
  console.log(`  merged catalog ${required.size - missing.length}/${required.size}, ${missing.length} missing, ${stale.length} stale, status=${catalog.qualityStatus || 'unreviewed'}.`);
  for (const problem of [...invalidBatches, ...batchProblems].slice(0, 5)) console.log(`  ! ${problem}`);
  if (invalidBatches.length + batchProblems.length > 5) console.log(`  ! ...and ${invalidBatches.length + batchProblems.length - 5} more batch problems`);
  if (invalidBatches.length || batchProblems.length || batchMissing.length || missing.length || catalog.qualityStatus !== 'reviewed') incomplete = true;
  if (batchMissing.length) {
    for (const source of batchMissing.slice(0, 5)) console.log(`  - ${source}`);
    if (batchMissing.length > 5) console.log(`  - ...and ${batchMissing.length - 5} more`);
  }
}

if (incomplete) process.exitCode = 1;
