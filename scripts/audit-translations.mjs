import { collectTranslationWork, loadCatalog, localeConfigs } from './i18n-lib.mjs';

const work = collectTranslationWork();
const required = new Set(work.flatMap((record) => record.units));
const problems = [];
const suspicious = [];
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

for (const locale of localeConfigs) {
  const catalog = loadCatalog(locale.code);
  if (catalog.locale !== locale.code) problems.push(`${locale.code}: catalog locale is "${catalog.locale}"`);
  if (catalog.qualityStatus !== 'reviewed') problems.push(`${locale.code}: catalog qualityStatus is "${catalog.qualityStatus || 'missing'}", expected "reviewed"`);
  for (const source of required) {
    const target = catalog.translations[source];
    if (!target || !target.trim()) {
      problems.push(`${locale.code} missing: ${source}`);
      continue;
    }
    const editionFallback = localeEditionFallbacks[locale.code];
    if (source === 'EN' && target.trim() !== editionFallback.short) problems.push(`${locale.code} current-edition short label must be "${editionFallback.short}": ${target}`);
    if (source.startsWith('English edition ·') && !target.trim().startsWith(editionFallback.edition)) problems.push(`${locale.code} current-edition footer must start with "${editionFallback.edition}": ${target}`);
    if (/^(?:translation|translated text|翻譯|번역|การแปล)\s*[:：]/i.test(target) || /(?:as an ai|cannot translate|無法翻譯)/i.test(target)) {
      problems.push(`${locale.code} model commentary: ${source} => ${target}`);
    }
    for (const number of new Set(tokens(source, numberTokenPattern))) {
      if (!hasExactNumberToken(target, number)) problems.push(`${locale.code} number token "${number}" changed: ${source} => ${target}`);
    }
    for (const url of new Set(tokens(source, /https?:\/\/[^\s)]+/g))) {
      if (!target.includes(url)) problems.push(`${locale.code} URL changed: ${source} => ${target}`);
    }
    for (const marker of ['TripDistill', 'CC0', 'CC BY-SA', 'CC BY']) {
      if (source.includes(marker) && !target.includes(marker)) problems.push(`${locale.code} protected marker "${marker}" changed: ${source} => ${target}`);
    }
    const sourceLetters = tokens(source, /[A-Za-z]/g).length;
    const targetScript = tokens(target, localeScripts[locale.code]).length;
    const exempt = /^(?:—|Photo:|Image:)|(?:CC BY|Wikimedia Commons|TripDistill\.com)/.test(source);
    const creditHasLocalizedProse = /\b(?:resized|converted|cropped?|edited|display|watermark|retained)\b/i.test(source);
    if (creditHasLocalizedProse && targetScript < 4) problems.push(`${locale.code} image-credit processing note appears untranslated: ${source} => ${target}`);
    if (sourceLetters >= 55 && targetScript < 8 && !exempt) problems.push(`${locale.code} long copy appears untranslated: ${source} => ${target}`);
    if (sourceLetters >= 80 && target.trim() === source.trim() && !exempt) problems.push(`${locale.code} long copy is identical to English: ${source}`);
    if (source.length >= 80 && target.length < source.length * 0.14) suspicious.push(`${locale.code} very short translation: ${source} => ${target}`);
  }

  const stale = Object.keys(catalog.translations).filter((source) => !required.has(source));
  if (stale.length) suspicious.push(`${locale.code}: ${stale.length} stale catalog entries are not currently used.`);
  console.log(`${locale.code}: ${required.size} required strings, ${stale.length} stale entries.`);
}

if (problems.length) {
  console.error(`Translation audit failed with ${problems.length} problem(s):`);
  for (const problem of problems.slice(0, 150)) console.error(`- ${problem}`);
  if (problems.length > 150) console.error(`- ...and ${problems.length - 150} more`);
  process.exitCode = 1;
} else {
  console.log(`Translation audit passed across ${localeConfigs.length} localized editions (${required.size} strings each).`);
}
if (suspicious.length) {
  console.warn(`Translation review notes (${suspicious.length}):`);
  for (const note of suspicious.slice(0, 40)) console.warn(`- ${note}`);
}
