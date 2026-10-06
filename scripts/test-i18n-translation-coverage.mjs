import assert from 'node:assert/strict';
import { inspectTranslationCoverage } from './i18n-translation-coverage.mjs';

const required = new Set(['Current Kyoto access sentence', 'Current Kyoto title']);
const complete = {
  'Current Kyoto access sentence': 'Reviewed translated access sentence',
  'Current Kyoto title': 'Reviewed translated title'
};

assert.deepEqual(inspectTranslationCoverage(required, complete), { stale: [], missing: [] });

const missingActive = { 'Current Kyoto access sentence': 'Reviewed translated access sentence' };
assert.deepEqual(inspectTranslationCoverage(required, missingActive), {
  stale: [],
  missing: ['Current Kyoto title']
});

const staleActive = {
  ...complete,
  'Removed English route key': 'An old reviewed translation'
};
assert.deepEqual(inspectTranslationCoverage(required, staleActive), {
  stale: ['Removed English route key'],
  missing: []
});

console.log('Translation coverage guard regression passed: missing active keys and stale keys remain errors.');
