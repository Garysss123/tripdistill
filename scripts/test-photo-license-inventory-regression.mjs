#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assetPath = '/assets/images/osaka-castle-sakura.webp';
const sourceUrl = 'https://commons.wikimedia.org/wiki/File:Osaka-Castle-cherry-blossom-2018-Luka-Peternel.jpg';
const pagePath = path.join(root, 'japan', 'osaka', 'osaka-castle-area', 'index.html');
const artifactPaths = [
  path.join(root, 'reports', 'photo-license-inventory.json'),
  path.join(root, 'reports', 'photo-license-inventory.md')
];
const originalArtifacts = artifactPaths.map((file) => [file, fs.readFileSync(file)]);

function attrs(node) { return Object.fromEntries((node.attrs || []).map((item) => [item.name, item.value])); }
function findAll(node, predicate, output = []) {
  if (predicate(node)) output.push(node);
  for (const child of node.childNodes || []) findAll(child, predicate, output);
  return output;
}

try {
  // Regenerate first so this test exercises the actual inventory extraction path.
  execFileSync(process.execPath, [path.join(root, 'scripts', 'audit-photo-license-inventory.mjs')], { cwd: root, stdio: 'inherit' });

  const document = parse(fs.readFileSync(pagePath, 'utf8'));
  const explicitCreditRows = findAll(document, (node) => node.tagName === 'li' && attrs(node)['data-photo-asset'] === assetPath);
  assert.equal(explicitCreditRows.length, 1, 'Osaka sakura asset must keep exactly one explicit visible credit mapping');
  const creditAttrs = attrs(explicitCreditRows[0]);
  assert.equal(creditAttrs['data-photo-creator'], 'Luka Peternel');
  assert.equal(creditAttrs['data-photo-license'], 'CC BY-SA 4.0');
  assert.ok(findAll(explicitCreditRows[0], (node) => node.tagName === 'a' && attrs(node).href === sourceUrl).length, 'visible credit must link to the exact Commons file page');

  const report = JSON.parse(fs.readFileSync(artifactPaths[0], 'utf8'));
  const row = report.entries.flatMap((group) => group.sourceRecords).find((record) => record.assetPath === assetPath);
  assert.ok(row, 'inventory regeneration must retain the Osaka sakura record');
  assert.equal(row.sourceUrl, sourceUrl);
  assert.equal(row.sourceTitle, 'Osaka Castle cherry blossom, 2018');
  assert.equal(row.creator, 'Luka Peternel');
  assert.equal(row.license, 'CC BY-SA 4.0');
  assert.equal(row.licenseUrl, 'https://creativecommons.org/licenses/by-sa/4.0/');
  assert.equal(row.metadataOrigin, 'explicit_asset_credit_match');
  assert.equal(row.verificationStatus, 'source_page_checked');
  assert.equal(row.verificationDate, '2026-10-06');
  assert.equal(row.visualReviewStatus, 'not_individually_visually_reviewed', 'source-page review must not imply visual review');
  assert.equal(report.unmatchedAssets.some((item) => item.src === assetPath), false, 'the credited asset must not return as unmatched');
  assert.equal(report.countInterpretation.includes('do not count pages never researched'), true);
  console.log('Photo inventory regression passed: Osaka Castle sakura source, creator, license, checked-page status, and visual-review limitation are retained.');
} finally {
  // The audit command is read-only with respect to committed generated reports.
  for (const [file, content] of originalArtifacts) fs.writeFileSync(file, content);
}
