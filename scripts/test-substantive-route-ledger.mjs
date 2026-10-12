#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
import { canadaClusters } from '../data/canada-guides.mjs';
import {
  canadaNewSubstantiveRoutes,
  completedCanadaRouteCount,
  australiaNewSubstantiveRoutes,
  correctedCoverageCheckpoints,
  correctedSubstantiveBaseline,
  reportedSubstantiveBaseline,
  usaPreviouslyCountedRoutes,
  usaHawaiiNewSubstantiveRoutes,
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
assert.deepEqual(correctedCoverageCheckpoints.map(({ count }) => count), [697, 701, 703, 707, 711, 719, 723, 727, 732, 736, 740, 744, 748]);

const canadaRoutes = ['/canada/', ...canadaClusters.flatMap((cluster) => [
  `/canada/${cluster.slug}/`,
  ...cluster.guides.map((guide) => guide.url)
])];
assert.equal(completedCanadaRouteCount, 73);
assert.equal(canadaRoutes.length, completedCanadaRouteCount, 'Canada must have 73 existing route paths.');
assert.equal(new Set(canadaRoutes).size, completedCanadaRouteCount, 'Canada route paths must remain unique.');
assert.equal(canadaNewSubstantiveRoutes.length, 13, 'CA16–CA18 add 13 substantive improvements, including the CA18 overview.');
assert.equal(new Set(canadaNewSubstantiveRoutes).size, 13, 'Canada additions must be unique.');
assert(canadaNewSubstantiveRoutes.every((route) => canadaRoutes.includes(route)), 'CA16–CA18 entries must belong to the exact Canada route set.');
for (const route of canadaNewSubstantiveRoutes) {
  assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Canada ledger path is missing: ${route}`);
}
assert.equal(australiaNewSubstantiveRoutes.length, 12, 'The three later Australia gap batches add twelve exact substantive body improvements, not routes.');
assert.equal(new Set(australiaNewSubstantiveRoutes).size, 12, 'Australia additions must be unique.');
for (const route of australiaNewSubstantiveRoutes) {
  assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Australia ledger path is missing: ${route}`);
}
assert.equal(usaPreviouslyCountedRoutes.length, 25, 'The earlier U.S. source-work ledger has exactly 25 disclosed existing paths.');
assert.equal(new Set(usaPreviouslyCountedRoutes).size, 25, 'The earlier U.S. path set must be unique.');
assert.equal(usaHawaiiNewSubstantiveRoutes.length, 4, 'Hawaii adds four source-verified substantive routes.');
assert.equal(new Set(usaHawaiiNewSubstantiveRoutes).size, 4, 'Hawaii additions must be unique.');
assert(usaHawaiiNewSubstantiveRoutes.every((route) => !usaPreviouslyCountedRoutes.includes(route)), 'Hawaii routes are disjoint from the exact preceding 25-route U.S. ledger.');
for (const route of [...usaPreviouslyCountedRoutes, ...usaHawaiiNewSubstantiveRoutes]) {
  assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `U.S. ledger path is missing: ${route}`);
}

const originalOverview = git(['show', `${originalAtlas}:vietnam/index.html`]);
const reviewedOverview = git(['show', `${reviewedAtlas}:vietnam/index.html`]);
assert.equal(
  substantiveOverviewText(reviewedOverview),
  substantiveOverviewText(originalOverview),
  'Vietnam overview non-card editorial text must not count toward the route ledger; later card excerpts are excluded.'
);

console.log('Substantive route ledger passed: Vietnam 39 with four explicit exclusions; Canada 73 unique paths and 13 CA16–CA18 improvements; the exact 25 prior U.S. paths are disjoint from four new Hawaii routes; Australia’s exact twelve late gap improvements; corrected checkpoints through 748; unchanged non-card Vietnam overview copy.');
