#!/usr/bin/env node
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { collectTranslationWork } from './i18n-lib.mjs';
import { inspectBatchRouteCoverage } from './i18n-batch-coverage.mjs';
import { globalApprovalBlockers, inspectGlobalMergeCoverage } from './i18n-merge-coverage.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const validator = path.join(root, 'scripts/validate-i18n-batch.mjs');
const reviewedDirectory = path.join(root, 'data/i18n/reviewed/zh-Hant');
const currentSearchTitle = 'Explore Asia travel guides';
const prefix = `000-codex-search-guard-${process.pid}`;
const batchFixtures = [
  { name: `${prefix}-valid.json`, translations: { [currentSearchTitle]: '探索亞洲旅遊指南' } },
  { name: `${prefix}-empty.json`, translations: {} },
  { name: `${prefix}-wrong-key.json`, translations: { 'Invented search key': '虛構搜尋鍵' } }
];

function validateFixture(fixture) {
  const absolutePath = path.join(reviewedDirectory, fixture.name);
  const relativePath = path.relative(root, absolutePath).split(path.sep).join('/');
  fs.writeFileSync(absolutePath, JSON.stringify({
    locale: 'zh-Hant',
    qualityStatus: 'reviewed',
    routes: ['/data/search-index.json'],
    translations: fixture.translations
  }, null, 2) + '\n');
  return spawnSync(process.execPath, [validator, `--file=${relativePath}`], { cwd: root, encoding: 'utf8' });
}

try {
  const validCliDelta = validateFixture(batchFixtures[0]);
  assert.equal(validCliDelta.status, 0, `current search-index delta should validate: ${validCliDelta.stderr}`);

  const emptyCliDelta = validateFixture(batchFixtures[1]);
  assert.equal(emptyCliDelta.status, 1, 'the batch validator must reject an empty search-index delta');
  assert.match(emptyCliDelta.stderr, /search-index delta batch must contain at least one translated source key/);

  const wrongKeyCliDelta = validateFixture(batchFixtures[2]);
  assert.equal(wrongKeyCliDelta.status, 1, 'the batch validator must reject a key outside the current search index');
  assert.match(wrongKeyCliDelta.stderr, /source key is outside the declared routes: Invented search key/);
} finally {
  for (const fixture of batchFixtures) fs.rmSync(path.join(reviewedDirectory, fixture.name), { force: true });
}

const searchSources = new Set(['Updated destination title', 'Updated destination keywords']);
const validDelta = inspectBatchRouteCoverage({
  routes: ['/data/search-index.json'],
  localSources: ['Updated destination title'],
  siblingSources: [],
  requiredSources: searchSources
});
assert.equal(validDelta.isSearchIndexDelta, true);
assert.deepEqual(validDelta.outside, []);
assert.deepEqual(validDelta.missing, [], 'a valid search delta need only contain its own additive keys');
assert.equal(validDelta.emptyDelta, false);

const emptyDelta = inspectBatchRouteCoverage({
  routes: ['/data/search-index.json'],
  localSources: [],
  siblingSources: [],
  requiredSources: searchSources
});
assert.equal(emptyDelta.emptyDelta, true, 'empty search-index delta batches must fail');

const wrongKeyDelta = inspectBatchRouteCoverage({
  routes: ['/data/search-index.json'],
  localSources: ['Not a current search-index source key'],
  siblingSources: [],
  requiredSources: searchSources
});
assert.deepEqual(wrongKeyDelta.outside, ['Not a current search-index source key'], 'delta batches still reject keys outside the current search index');

const globalRequired = new Set(collectTranslationWork().flatMap((record) => record.units));
assert.ok(globalRequired.has(currentSearchTitle), 'the global required-key set must include current search-index source keys');
const globalCatalogMissingSearchKey = Object.fromEntries([...globalRequired].map((source) => [source, '已審核的翻譯']));
delete globalCatalogMissingSearchKey[currentSearchTitle];
assert.deepEqual(inspectGlobalMergeCoverage(globalRequired, globalCatalogMissingSearchKey).missing, [currentSearchTitle], 'global coverage must find the one missing search-index key across all route keys');
const globalBlockers = globalApprovalBlockers('zh-Hant', inspectGlobalMergeCoverage(globalRequired, globalCatalogMissingSearchKey).missing);
assert.ok(globalBlockers.some((problem) => problem.includes('Cannot approve zh-Hant: 1 required translations are missing')), 'global --approve must still fail if any current search-index key is missing');

console.log('Search-index translation regressions passed: validator CLI accepts a valid additive delta, rejects empty and wrong-key deltas, and global approval still requires every search key.');
