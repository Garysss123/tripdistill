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
  australiaCanberraNewSubstantiveRoutes,
  australiaAlpsMargaretNewSubstantiveRoutes,
  correctedCoverageCheckpoints,
  correctedSubstantiveBaseline,
  reportedSubstantiveBaseline,
  usaPreviouslyCountedRoutes,
  usaHawaiiNewSubstantiveRoutes,
  usaNewOrleansNewSubstantiveRoutes,
  usaAtlantaNewSubstantiveRoutes,
  vietnamCompletedRoutes,
  vietnamHistoricalExclusions,
  vietnamNewSubstantiveRoutes,
  vietnamHaLongNewSubstantiveRoutes
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
assert.equal(vietnamHistoricalExclusions.length, 4);
assert(vietnamHistoricalExclusions.every((route) => !vietnamCompletedRoutes.includes(route)), 'The four original exclusions stay outside the historical Vietnam 39.');
assert.equal(vietnamNewSubstantiveRoutes.length, 8, 'The Vietnam next-content and overview/north-gap batches add eight substantive routes.');
assert.equal(new Set(vietnamNewSubstantiveRoutes).size, 8, 'Vietnam additions must be unique.');
assert.deepEqual(new Set(vietnamNewSubstantiveRoutes), new Set([
  '/vietnam/ha-long-cat-ba/core-cruise/',
  '/vietnam/phong-nha-ke-bang/paradise-tien-son-caves/',
  '/vietnam/ho-chi-minh-city/saigon-river-waterbus/',
  '/vietnam/da-lat-central-highlands/da-lat-lake-railway-core/',
  '/vietnam/',
  '/vietnam/hanoi/west-lake-truc-bach/',
  '/vietnam/sapa-northwest-highlands/o-quy-ho-waterfalls/',
  '/vietnam/ha-giang/meo-vac-du-gia/'
]), 'The source-ledger Vietnam route set must match exactly the eight evidenced paths.');
assert(vietnamNewSubstantiveRoutes.every((route) => !vietnamCompletedRoutes.includes(route)), 'The eight Vietnam additions are disjoint from the historical 39.');
assert.equal(vietnamHaLongNewSubstantiveRoutes.length, 4, 'The Ha Long follow-on adds four exact existing bodies.');
assert.equal(new Set(vietnamHaLongNewSubstantiveRoutes).size, 4, 'Ha Long additions must be unique.');
assert(vietnamHaLongNewSubstantiveRoutes.every((route) => !vietnamCompletedRoutes.includes(route) && !vietnamNewSubstantiveRoutes.includes(route)), 'Ha Long and Cat Ba routes are disjoint from the historical 39 and the prior eight Vietnam additions.');
assert(vietnamNewSubstantiveRoutes.includes('/vietnam/ha-long-cat-ba/core-cruise/') && !vietnamHaLongNewSubstantiveRoutes.includes('/vietnam/ha-long-cat-ba/core-cruise/'), 'The previously completed core-cruise page is counted exactly once.');
assert(vietnamHistoricalExclusions.every((route) => vietnamNewSubstantiveRoutes.includes(route)), 'All four historic exclusions have new substantive body evidence in the later Vietnam batches.');
for (const route of vietnamNewSubstantiveRoutes) {
  assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Vietnam addition is missing: ${route}`);
}
for (const route of vietnamHaLongNewSubstantiveRoutes) {
  assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Ha Long ledger path is missing: ${route}`);
}
for (const route of vietnamCompletedRoutes) {
  assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Vietnam ledger path is missing: ${route}`);
}
for (const checkpoint of correctedCoverageCheckpoints) assert(Number.isInteger(checkpoint.count) && checkpoint.count > 0, `${checkpoint.label}: checkpoint count must be an integer.`);
assert.deepEqual(correctedCoverageCheckpoints.map(({ count }) => count), [697, 701, 703, 707, 711, 719, 723, 727, 732, 736, 740, 744, 748, 752, 757, 765, 769, 773, 777, 781]);

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
assert.equal(australiaCanberraNewSubstantiveRoutes.length, 4, 'Canberra adds four exact existing substantive routes.');
assert.equal(new Set(australiaCanberraNewSubstantiveRoutes).size, 4, 'Canberra additions must be unique.');
assert(australiaCanberraNewSubstantiveRoutes.every((route) => !australiaNewSubstantiveRoutes.includes(route)), 'Canberra routes are disjoint from earlier late Australia additions.');
for (const route of australiaCanberraNewSubstantiveRoutes) assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Canberra ledger path is missing: ${route}`);
assert.equal(australiaAlpsMargaretNewSubstantiveRoutes.length, 4, 'The Alps/Margaret batch adds four exact existing Australia bodies.');
assert.equal(new Set(australiaAlpsMargaretNewSubstantiveRoutes).size, 4, 'Alps/Margaret additions must be unique.');
assert(australiaAlpsMargaretNewSubstantiveRoutes.every((route) => !australiaNewSubstantiveRoutes.includes(route) && !australiaCanberraNewSubstantiveRoutes.includes(route)), 'Alps/Margaret routes are disjoint from earlier Australia gap improvements and the first Canberra batch.');
for (const route of australiaAlpsMargaretNewSubstantiveRoutes) assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Alps/Margaret ledger path is missing: ${route}`);
assert.equal(new Set(australiaNewSubstantiveRoutes).size, 12, 'Australia additions must be unique.');
for (const route of australiaNewSubstantiveRoutes) {
  assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Australia ledger path is missing: ${route}`);
}
assert.equal(usaPreviouslyCountedRoutes.length, 25, 'The earlier U.S. source-work ledger has exactly 25 disclosed existing paths.');
assert.equal(new Set(usaPreviouslyCountedRoutes).size, 25, 'The earlier U.S. path set must be unique.');
assert.equal(usaHawaiiNewSubstantiveRoutes.length, 4, 'Hawaii adds four source-verified substantive routes.');
assert.equal(new Set(usaHawaiiNewSubstantiveRoutes).size, 4, 'Hawaii additions must be unique.');
assert(usaHawaiiNewSubstantiveRoutes.every((route) => !usaPreviouslyCountedRoutes.includes(route)), 'Hawaii routes are disjoint from the exact preceding 25-route U.S. ledger.');
assert.equal(usaNewOrleansNewSubstantiveRoutes.length, 4, 'New Orleans adds four exact existing-route improvements.');
assert.equal(usaAtlantaNewSubstantiveRoutes.length, 4, 'Atlanta adds four exact existing-route improvements.');
assert.equal(new Set(usaAtlantaNewSubstantiveRoutes).size, 4, 'Atlanta additions must be unique.');
assert(usaAtlantaNewSubstantiveRoutes.every((route) => !usaPreviouslyCountedRoutes.includes(route) && !usaHawaiiNewSubstantiveRoutes.includes(route) && !usaNewOrleansNewSubstantiveRoutes.includes(route)), 'Atlanta routes are disjoint from the prior 25, Hawaii and New Orleans route sets.');
assert.equal(new Set(usaNewOrleansNewSubstantiveRoutes).size, 4, 'New Orleans additions must be unique.');
assert(usaNewOrleansNewSubstantiveRoutes.every((route) => !usaPreviouslyCountedRoutes.includes(route) && !usaHawaiiNewSubstantiveRoutes.includes(route)), 'New Orleans routes are disjoint from the historical 25 and the four Hawaii paths.');
for (const route of [...usaPreviouslyCountedRoutes, ...usaHawaiiNewSubstantiveRoutes, ...usaNewOrleansNewSubstantiveRoutes, ...usaAtlantaNewSubstantiveRoutes]) {
  assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `U.S. ledger path is missing: ${route}`);
}

const originalOverview = git(['show', `${originalAtlas}:vietnam/index.html`]);
const reviewedOverview = git(['show', `${reviewedAtlas}:vietnam/index.html`]);
assert.equal(
  substantiveOverviewText(reviewedOverview),
  substantiveOverviewText(originalOverview),
  'Vietnam overview non-card editorial text must not count toward the route ledger; later card excerpts are excluded.'
);

console.log('Substantive route ledger passed: Vietnam 39 historical routes plus eight prior and four disjoint Ha Long improvements (core-cruise counted once); Canada 73 unique paths and 13 CA16–CA18 improvements; the exact 25 historical U.S. paths are disjoint from four Hawaii, four New Orleans and four Atlanta improvements; Australia’s twelve late gap improvements plus four Canberra and four Alps/Margaret improvements; corrected checkpoints through 781.');
