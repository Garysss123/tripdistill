import { inspectTranslationCoverage } from './i18n-translation-coverage.mjs';

export function inspectGlobalMergeCoverage(requiredSources, translations) {
  return inspectTranslationCoverage(requiredSources, translations);
}

export function globalApprovalBlockers(locale, missingSources) {
  const missing = [...missingSources];
  return missing.length ? [`Cannot approve ${locale}: ${missing.length} required translations are missing`] : [];
}
