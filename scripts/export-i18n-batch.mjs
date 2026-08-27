import fs from 'node:fs';
import path from 'node:path';
import { collectTranslationWork, getLocaleConfig, root } from './i18n-lib.mjs';

function argument(name) {
  return process.argv.find((value) => value.startsWith(`--${name}=`))?.slice(name.length + 3);
}

const requestedLocale = argument('locale');
const requestedFile = argument('file');
const requestedRoutes = argument('routes')?.split(',').map((route) => route.trim()).filter(Boolean) || [];

if (!requestedLocale || !requestedFile || !requestedRoutes.length) {
  throw new Error('Usage: node scripts/export-i18n-batch.mjs --locale=zh-Hant --file=NN-cluster.json --routes=/country/city/,/country/city/area/');
}

const locale = getLocaleConfig(requestedLocale);
if (path.basename(requestedFile) !== requestedFile || !/^\d{2}[a-z]?-[a-z0-9-]+\.json$/i.test(requestedFile)) {
  throw new Error('--file must be a plain zero-padded batch filename such as 17-new-city.json.');
}
if (new Set(requestedRoutes).size !== requestedRoutes.length) {
  throw new Error('--routes contains duplicates.');
}

const workByRoute = new Map(collectTranslationWork().map((record) => [record.route, record]));
const unknownRoutes = requestedRoutes.filter((route) => !workByRoute.has(route));
if (unknownRoutes.length) throw new Error(`Unknown routes: ${unknownRoutes.join(', ')}`);

const batchDirectory = path.join(root, 'data', 'i18n', 'reviewed', locale.code);
const outputPath = path.join(batchDirectory, requestedFile);
if (fs.existsSync(outputPath)) {
  throw new Error(`Refusing to overwrite existing batch: ${path.relative(root, outputPath)}`);
}

const earlierTranslations = new Map();
if (fs.existsSync(batchDirectory)) {
  const earlierFiles = fs.readdirSync(batchDirectory)
    .filter((name) => name.endsWith('.json') && name.localeCompare(requestedFile, 'en') < 0)
    .sort();
  for (const name of earlierFiles) {
    const batch = JSON.parse(fs.readFileSync(path.join(batchDirectory, name), 'utf8'));
    if (batch.qualityStatus !== 'reviewed') {
      throw new Error(`Finish and review earlier batch ${name} before exporting ${requestedFile}.`);
    }
    for (const [source, target] of Object.entries(batch.translations || {})) {
      if (!earlierTranslations.has(source) && typeof target === 'string' && target.trim()) {
        earlierTranslations.set(source, target);
      }
    }
  }
}

const rawUnits = requestedRoutes.flatMap((route) => workByRoute.get(route).units);
const uniqueUnits = [...new Set(rawUnits)];
const freshUnits = uniqueUnits.filter((source) => !earlierTranslations.has(source));
const translations = Object.fromEntries(freshUnits.map((source) => [source, '']));

fs.mkdirSync(batchDirectory, { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify({
  locale: locale.code,
  qualityStatus: 'draft',
  routes: requestedRoutes,
  translations
}, null, 2) + '\n');

console.log(`Created ${path.relative(root, outputPath)}.`);
console.log(`${requestedRoutes.length} routes, ${rawUnits.length} raw units, ${uniqueUnits.length} unique source keys.`);
console.log(`${freshUnits.length} blank translations exported; ${uniqueUnits.length - freshUnits.length} keys already covered by earlier batches.`);
