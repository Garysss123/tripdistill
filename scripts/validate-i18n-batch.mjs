import fs from 'node:fs';
import path from 'node:path';
import { collectTranslationWork, getLocaleConfig, root } from './i18n-lib.mjs';

const fileArgument = process.argv.find((argument) => argument.startsWith('--file='))?.slice('--file='.length);
if (!fileArgument) throw new Error('Usage: node scripts/validate-i18n-batch.mjs --file=data/i18n/reviewed/<locale>/<batch>.json');

const batchPath = path.resolve(root, fileArgument);
const reviewedRoot = path.resolve(root, 'data', 'i18n', 'reviewed');
if (batchPath !== reviewedRoot && !batchPath.startsWith(reviewedRoot + path.sep)) {
  throw new Error('Batch file must be inside data/i18n/reviewed/.');
}
if (!fs.existsSync(batchPath)) throw new Error(`Batch file does not exist: ${fileArgument}`);

const rawBatch = fs.readFileSync(batchPath, 'utf8');
const batch = JSON.parse(rawBatch);
const locale = getLocaleConfig(batch.locale);
const expectedLocaleDirectory = path.join(reviewedRoot, locale.code);
if (path.dirname(batchPath) !== expectedLocaleDirectory) {
  throw new Error(`Batch locale ${locale.code} must live directly in data/i18n/reviewed/${locale.code}/.`);
}
if (batch.qualityStatus !== 'reviewed') throw new Error('Batch qualityStatus must be "reviewed".');
if (!Array.isArray(batch.routes) || !batch.routes.length) throw new Error('Batch routes must be a non-empty array.');
if (new Set(batch.routes).size !== batch.routes.length) throw new Error('Batch routes contains duplicates.');
if (!batch.translations || typeof batch.translations !== 'object' || Array.isArray(batch.translations)) {
  throw new Error('Batch translations must be an object.');
}

const workByRoute = new Map(collectTranslationWork().map((record) => [record.route, record]));
const unknownRoutes = batch.routes.filter((route) => !workByRoute.has(route));
if (unknownRoutes.length) throw new Error(`Unknown routes: ${unknownRoutes.join(', ')}`);

const records = batch.routes.map((route) => workByRoute.get(route));
const rawUnits = records.flatMap((record) => record.units);
const required = new Set(rawUnits);
const localEntries = Object.entries(batch.translations);
const localKeys = new Set(localEntries.map(([source]) => source));
const problems = [];
const rawKeyCounts = new Map();
for (const line of rawBatch.split(/\r?\n/)) {
  const match = line.match(/^\s{4}("(?:\\.|[^"\\])*")\s*:/);
  if (!match) continue;
  const source = JSON.parse(match[1]);
  rawKeyCounts.set(source, (rawKeyCounts.get(source) || 0) + 1);
}
for (const [source, count] of rawKeyCounts) {
  if (count > 1) problems.push(`raw JSON contains ${count} copies of source key; keep one: ${source}`);
}
const localeScripts = {
  'zh-Hant': /[\u3400-\u9fff]/gu,
  ja: /[\u3040-\u30ff\u3400-\u9fff]/gu,
  ko: /[\uac00-\ud7af]/gu,
  th: /[\u0e00-\u0e7f]/gu
};
const localeEditionFallbacks = {
  'zh-Hant': { short: '繁中', edition: '繁體中文版' },
  ja: { short: '日本語', edition: '日本語版' },
  ko: { short: '한국어', edition: '한국어판' },
  th: { short: 'ไทย', edition: 'ฉบับภาษาไทย' }
};
const numberTokenPattern = /(?<!\d)\d+(?:[.,]\d+)*(?!\d)/g;

function tokens(value, pattern) {
  return [...value.matchAll(pattern)].map((match) => match[0]);
}

function hasExactNumberToken(value, number) {
  return tokens(value, numberTokenPattern).some((candidate) => {
    if (candidate === number) return true;
    if (/^\d+$/.test(candidate) && /^\d+$/.test(number)) return BigInt(candidate) === BigInt(number);
    return false;
  });
}

for (const [source, target] of localEntries) {
  if (!required.has(source)) problems.push(`source key is outside the declared routes: ${source}`);
  if (typeof target !== 'string' || !target.trim()) problems.push(`empty target: ${source}`);
  if (typeof target !== 'string') continue;
  const editionFallback = localeEditionFallbacks[locale.code];
  if (source === 'EN' && target.trim() !== editionFallback.short) problems.push(`current-edition short label must be "${editionFallback.short}": ${source}`);
  if (source.startsWith('English edition ·') && !target.trim().startsWith(editionFallback.edition)) problems.push(`current-edition footer must start with "${editionFallback.edition}": ${source}`);
  for (const number of new Set(tokens(source, numberTokenPattern))) {
    if (!hasExactNumberToken(target, number)) problems.push(`number token "${number}" changed: ${source}`);
  }
  for (const url of new Set(tokens(source, /https?:\/\/[^\s)]+/g))) {
    if (!target.includes(url)) problems.push(`URL changed: ${source}`);
  }
  for (const marker of ['TripDistill', 'CC0', 'CC BY-SA', 'CC BY']) {
    if (source.includes(marker) && !target.includes(marker)) problems.push(`protected marker "${marker}" changed: ${source}`);
  }
  const sourceLetters = tokens(source, /[A-Za-z]/g).length;
  const targetScript = tokens(target, localeScripts[locale.code]).length;
  const exempt = /^(?:—|Photo:|Image:)|(?:CC BY|Wikimedia Commons|TripDistill\.com)/.test(source);
  const creditHasLocalizedProse = /\b(?:resized|converted|cropped?|edited|display|watermark|retained)\b/i.test(source);
  if (creditHasLocalizedProse && targetScript < 4) problems.push(`image-credit processing note appears untranslated: ${source}`);
  if (sourceLetters >= 55 && targetScript < 8 && !exempt) problems.push(`long copy appears untranslated: ${source}`);
  if (sourceLetters >= 80 && target.trim() === source.trim() && !exempt) problems.push(`long copy is identical to English: ${source}`);
}

const siblingTranslations = new Map();
const currentBatchName = path.basename(batchPath);
const earlierBatchNames = fs.readdirSync(expectedLocaleDirectory)
  .filter((name) => name.endsWith('.json') && name.localeCompare(currentBatchName, 'en') < 0)
  .sort();
for (const name of earlierBatchNames) {
  const siblingPath = path.join(expectedLocaleDirectory, name);
  const sibling = JSON.parse(fs.readFileSync(siblingPath, 'utf8'));
  if (sibling.qualityStatus !== 'reviewed') {
    problems.push(`earlier sibling ${name} is not reviewed; it cannot provide route coverage`);
    continue;
  }
  for (const [source, target] of Object.entries(sibling.translations || {})) {
    if (typeof target !== 'string' || !target.trim()) {
      problems.push(`earlier sibling ${name} has an empty target and cannot provide route coverage: ${source}`);
      continue;
    }
    if (!siblingTranslations.has(source)) siblingTranslations.set(source, { target, name });
    else if (siblingTranslations.get(source).target !== target) problems.push(`existing sibling conflict for source key: ${source}`);
  }
}

for (const [source, target] of localEntries) {
  const sibling = siblingTranslations.get(source);
  if (sibling && sibling.target !== target) problems.push(`conflicts with ${sibling.name}: ${source}`);
  if (sibling && sibling.target === target) problems.push(`duplicates earlier ${sibling.name}; omit this source key: ${source}`);
}

const covered = new Set([...localKeys, ...siblingTranslations.keys()]);
const missing = [...required].filter((source) => !covered.has(source));
if (missing.length) {
  for (const source of missing.slice(0, 25)) problems.push(`missing route source key: ${source}`);
  if (missing.length > 25) problems.push(`...and ${missing.length - 25} additional route source keys are missing`);
}

console.log(`${path.relative(root, batchPath)}: ${records.length} routes, ${rawUnits.length} raw units, ${required.size} unique source keys.`);
console.log(`${localKeys.size} keys in this file; ${[...required].filter((source) => siblingTranslations.has(source)).length} route keys already available in sibling batches; ${missing.length} missing.`);

if (problems.length) {
  console.error(`Batch validation failed with ${problems.length} problem(s):`);
  for (const problem of problems.slice(0, 100)) console.error(`- ${problem}`);
  if (problems.length > 100) console.error(`- ...and ${problems.length - 100} more`);
  process.exit(1);
}

console.log('Batch structure and declared-route coverage passed.');
