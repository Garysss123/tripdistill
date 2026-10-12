#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
import {
  correctedCoverageCheckpoints,
  correctedSubstantiveBaseline,
  reportedSubstantiveBaseline,
  vietnamCompletedRoutes,
  vietnamExcludedRoutes
} from '../data/substantive-route-ledger.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const originalAtlas = '8a1ada3b4021d077fd468c9c318d91823177c0cb';
const reviewedAtlas = '4c7a5d2bd65a6a82474813c04db718dedb1ffc48';

function git(args) {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
}

function attrs(node) {
  return Object.fromEntries((node?.attrs || []).map(({ name, value }) => [name, value]));
}

function findOne(node, predicate) {
  if (predicate(node)) return node;
  for (const child of node.childNodes || []) {
    const result = findOne(child, predicate);
    if (result) return result;
  }
  return null;
}

function substantiveOverviewText(html) {
  const document = parse(html);
  const main = findOne(document, (node) => node.tagName === 'main' && attrs(node).id === 'main-content');
  assert(main, 'Vietnam overview is missing #main-content.');
  const text = [];
  function walk(node) {
    if (node.nodeName === '#text') { text.push(node.value); return; }
    if (['script', 'style', 'svg'].includes(node.tagName)) return;
    const a = attrs(node);
    const classes = (a.class || '').split(/\s+/);
    if (classes.includes('vn-country-grid') || classes.includes('sources') || a['aria-label'] === 'Advertisement') return;
    for (const child of node.childNodes || []) walk(child);
  }
  walk(main);
  return text.join(' ').replace(/\s+/g, ' ').trim();
}

assert.equal(reportedSubstantiveBaseline, 458);
assert.equal(correctedSubstantiveBaseline, 457, 'The reported baseline counted one extra Vietnam route.');
assert.equal(vietnamCompletedRoutes.length, 39);
assert.equal(new Set(vietnamCompletedRoutes).size, 39, 'Vietnam route ledger must contain 39 unique paths.');
assert.equal(vietnamExcludedRoutes.length, 4);
assert(vietnamExcludedRoutes.every((route) => !vietnamCompletedRoutes.includes(route)), 'Explicit exclusions must stay outside the Vietnam 39.');
for (const route of vietnamCompletedRoutes) {
  assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Vietnam ledger path is missing: ${route}`);
}
for (const checkpoint of correctedCoverageCheckpoints) assert(Number.isInteger(checkpoint.count) && checkpoint.count > 0, `${checkpoint.label}: checkpoint count must be an integer.`);
assert.deepEqual(correctedCoverageCheckpoints.map(({ count }) => count), [697, 701, 703, 707, 711, 719]);

const originalOverview = git(['show', `${originalAtlas}:vietnam/index.html`]);
const reviewedOverview = git(['show', `${reviewedAtlas}:vietnam/index.html`]);
assert.equal(
  substantiveOverviewText(reviewedOverview),
  substantiveOverviewText(originalOverview),
  'Vietnam overview non-card editorial text must not count toward the route ledger; later card excerpts are excluded.'
);

console.log('Substantive route ledger passed: exact Vietnam 39, four explicit exclusions, 457 corrected baseline, corrected checkpoints through 719, and unchanged non-card Vietnam overview copy between the cited atlas commits.');
