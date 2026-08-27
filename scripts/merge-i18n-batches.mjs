import fs from 'node:fs';
import path from 'node:path';
import { collectTranslationWork, localeConfigs, root } from './i18n-lib.mjs';

const requestedLocale = process.argv.find((argument) => argument.startsWith('--locale='))?.split('=')[1];
const approve = process.argv.includes('--approve');
const required = new Set(collectTranslationWork().flatMap((record) => record.units));
const selected = requestedLocale ? localeConfigs.filter((locale) => locale.code === requestedLocale || locale.dir === requestedLocale) : localeConfigs;
if (!selected.length) throw new Error(`Unknown locale: ${requestedLocale}`);

for (const locale of selected) {
  const batchDirectory = path.join(root, 'data', 'i18n', 'reviewed', locale.code);
  const files = fs.existsSync(batchDirectory)
    ? fs.readdirSync(batchDirectory).filter((name) => name.endsWith('.json')).sort()
    : [];
  const translations = {};
  const owners = new Map();
  const problems = [];

  for (const name of files) {
    const relativePath = path.join('data', 'i18n', 'reviewed', locale.code, name);
    const rawBatch = fs.readFileSync(path.join(root, relativePath), 'utf8');
    const batch = JSON.parse(rawBatch);
    const rawKeyCounts = new Map();
    for (const line of rawBatch.split(/\r?\n/)) {
      const match = line.match(/^\s{4}("(?:\\.|[^"\\])*")\s*:/);
      if (!match) continue;
      const source = JSON.parse(match[1]);
      rawKeyCounts.set(source, (rawKeyCounts.get(source) || 0) + 1);
    }
    for (const [source, count] of rawKeyCounts) {
      if (count > 1) problems.push(`${relativePath}: raw JSON contains ${count} copies of "${source}"`);
    }
    if (batch.locale !== locale.code) problems.push(`${relativePath}: locale is "${batch.locale}"`);
    if (batch.qualityStatus !== 'reviewed') problems.push(`${relativePath}: qualityStatus must be "reviewed"`);
    if (!batch.translations || typeof batch.translations !== 'object') {
      problems.push(`${relativePath}: translations object is missing`);
      continue;
    }
    for (const [source, target] of Object.entries(batch.translations)) {
      if (!required.has(source)) problems.push(`${relativePath}: stale or unknown source key "${source}"`);
      if (!target?.trim()) problems.push(`${relativePath}: empty translation for "${source}"`);
      if (source in translations && translations[source] !== target) problems.push(`${relativePath}: conflicts with ${owners.get(source)} for "${source}"`);
      if (source in translations && translations[source] === target) problems.push(`${relativePath}: duplicates ${owners.get(source)} for "${source}"; keep the earlier owner only`);
      if (!(source in translations)) {
        translations[source] = target;
        owners.set(source, relativePath);
      }
    }
  }

  const missing = [...required].filter((source) => !translations[source]);
  if (approve && missing.length) problems.push(`Cannot approve ${locale.code}: ${missing.length} required translations are missing`);
  if (problems.length) {
    console.error(`${locale.code} batch merge failed with ${problems.length} problem(s):`);
    for (const problem of problems.slice(0, 100)) console.error(`- ${problem}`);
    if (problems.length > 100) console.error(`- ...and ${problems.length - 100} more`);
    process.exitCode = 1;
    continue;
  }

  const sorted = Object.fromEntries(Object.entries(translations).sort(([left], [right]) => left.localeCompare(right, 'en')));
  const output = path.join(root, 'data', 'i18n', `${locale.code}.json`);
  fs.writeFileSync(output, JSON.stringify({
    locale: locale.code,
    qualityStatus: approve ? 'reviewed' : 'draft',
    generatedAt: new Date().toISOString(),
    batchFiles: files,
    translations: sorted
  }, null, 2) + '\n');
  console.log(`${locale.code}: merged ${Object.keys(sorted).length}/${required.size} translations from ${files.length} reviewed batches; ${missing.length} missing; status=${approve ? 'reviewed' : 'draft'}.`);
}

if (process.exitCode) process.exit(process.exitCode);
