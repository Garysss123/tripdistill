import fs from 'node:fs';
import path from 'node:path';
import { collectTranslationWork, root } from './i18n-lib.mjs';

const fileArgument = process.argv.find((argument) => argument.startsWith('--file='))?.slice('--file='.length);
if (!fileArgument) throw new Error('Usage: node scripts/sample-i18n-batch.mjs --file=data/i18n/reviewed/<locale>/<batch>.json');

const absolutePath = path.resolve(root, fileArgument);
const reviewedRoot = path.join(root, 'data', 'i18n', 'reviewed') + path.sep;
if (!absolutePath.startsWith(reviewedRoot) || path.extname(absolutePath) !== '.json') {
  throw new Error('The batch must be a JSON file under data/i18n/reviewed/.');
}

const batch = JSON.parse(fs.readFileSync(absolutePath, 'utf8'));
if (!Array.isArray(batch.routes) || !batch.translations || typeof batch.translations !== 'object') {
  throw new Error('Invalid batch schema: routes and translations are required.');
}

const workByRoute = new Map(collectTranslationWork().map((record) => [record.route, record]));
const translations = batch.translations;

function selectSamples(units) {
  if (!units.length) return [];
  const sampleCount = units.length > 500 ? 20 : 5;
  const positions = Array.from({ length: Math.min(sampleCount, units.length) }, (_, index) => {
    if (sampleCount === 1) return 0;
    return Math.round(index * (units.length - 1) / (sampleCount - 1));
  });
  const longest = [...units].sort((left, right) => right.length - left.length).slice(0, 3);
  return [...new Set([...positions.map((index) => units[Math.max(0, index)]), ...longest])].filter(Boolean);
}

for (const route of batch.routes) {
  const record = workByRoute.get(route);
  if (!record) throw new Error(`Unknown declared route: ${route}`);
  const owned = record.units.filter((source) => Object.hasOwn(translations, source));
  console.log(`\n[${route}] ${owned.length}/${record.units.length} route keys owned by this batch`);
  for (const source of selectSamples(owned)) {
    console.log(`SOURCE: ${source}`);
    console.log(`TARGET: ${translations[source]}`);
  }
}

const longTargetOwners = new Map();
for (const [source, target] of Object.entries(translations)) {
  if (source.length < 80 || typeof target !== 'string' || target.length < 20) continue;
  const owners = longTargetOwners.get(target) || [];
  owners.push(source);
  longTargetOwners.set(target, owners);
}
const suspiciousDuplicates = [...longTargetOwners.entries()].filter(([, sources]) => sources.length > 1);
if (suspiciousDuplicates.length) {
  console.warn(`\n${suspiciousDuplicates.length} long target(s) are reused for different source sentences; review them manually:`);
  for (const [target, sources] of suspiciousDuplicates.slice(0, 20)) {
    console.warn(`TARGET: ${target}`);
    for (const source of sources) console.warn(`  SOURCE: ${source}`);
  }
  process.exitCode = 2;
} else {
  console.log('\nNo long translated target is reused for a different source sentence.');
}
