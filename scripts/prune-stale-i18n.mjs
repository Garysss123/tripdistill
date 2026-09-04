import fs from 'node:fs';
import path from 'node:path';
import { collectTranslationWork, localeConfigs, root } from './i18n-lib.mjs';

const apply = process.argv.includes('--apply');
const required = new Set(collectTranslationWork().flatMap((record) => record.units));
let total = 0;

for (const locale of localeConfigs) {
  const directory = path.join(root, 'data', 'i18n', 'reviewed', locale.code);
  for (const name of fs.readdirSync(directory).filter((file) => file.endsWith('.json')).sort()) {
    const file = path.join(directory, name);
    const batch = JSON.parse(fs.readFileSync(file, 'utf8'));
    const stale = Object.keys(batch.translations || {}).filter((source) => !required.has(source));
    if (!stale.length) continue;
    total += stale.length;
    console.log(`${locale.code}/${name}: ${stale.length} stale key(s)`);
    if (apply) {
      for (const source of stale) delete batch.translations[source];
      fs.writeFileSync(file, JSON.stringify(batch, null, 2) + '\n');
    }
  }
}

console.log(`${apply ? 'Removed' : 'Found'} ${total} stale reviewed translation key(s).${apply ? '' : ' Re-run with --apply to remove them.'}`);
