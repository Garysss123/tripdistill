import fs from 'node:fs';
import path from 'node:path';
import {
  collectTranslationWork,
  loadCatalog,
  localeConfigs,
  localizeHtml,
  localizeSearchIndex,
  outputPathFor,
  readSource,
  root,
  sourceRecords
} from './i18n-lib.mjs';

const work = collectTranslationWork();
const required = new Set(work.flatMap((record) => record.units));
const sourceSearch = JSON.parse(readSource('data/search-index.json'));
const requestedLocale = process.argv.find((argument) => argument.startsWith('--locale='))?.split('=')[1];
const selectedLocales = requestedLocale
  ? localeConfigs.filter((config) => config.code === requestedLocale || config.dir === requestedLocale)
  : localeConfigs;
if (!selectedLocales.length) throw new Error(`Unsupported locale: ${requestedLocale}`);

for (const config of selectedLocales) {
  const catalog = loadCatalog(config.code);
  if (catalog.qualityStatus !== 'reviewed') {
    console.error(`${config.code} catalog is not approved (qualityStatus must be "reviewed").`);
    process.exitCode = 1;
    continue;
  }
  const missing = [...required].filter((unit) => !catalog.translations[unit]);
  if (missing.length) {
    console.error(`${config.code} localization is missing ${missing.length} translation(s).`);
    for (const unit of missing.slice(0, 20)) console.error('- ' + unit);
    console.error(`Assign the missing keys to the Luna Max ${config.code} translation pass, review the catalog, then run localization again.`);
    process.exitCode = 1;
    continue;
  }

  const localeRoot = path.join(root, config.dir);
  if (path.dirname(localeRoot) !== root || path.basename(localeRoot) !== config.dir || !localeConfigs.some((item) => item.dir === config.dir)) {
    throw new Error('Refusing to replace an unexpected localization output path: ' + localeRoot);
  }
  if (fs.existsSync(localeRoot)) fs.rmSync(localeRoot, { recursive: true, force: true });
  fs.mkdirSync(localeRoot, { recursive: true });

  for (const record of sourceRecords()) {
    const output = outputPathFor(record, config.code);
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, localizeHtml(readSource(record.relativePath), catalog.translations, config.code, record.route));
  }

  const localizedSearch = localizeSearchIndex(sourceSearch, catalog.translations, config.code);
  const searchOutput = path.join(localeRoot, 'data', 'search-index.json');
  fs.mkdirSync(path.dirname(searchOutput), { recursive: true });
  fs.writeFileSync(searchOutput, JSON.stringify(localizedSearch, null, 2) + '\n');

  console.log(`Generated ${config.code} edition: ${sourceRecords().filter((record) => record.kind === 'page').length} pages, 3 shared components and ${localizedSearch.length} search records.`);
}

if (process.exitCode) process.exit(process.exitCode);
