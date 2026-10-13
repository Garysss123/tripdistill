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
  australiaMargaretRemainingNewSubstantiveRoutes,
  australiaBroomeNewSubstantiveRoutes,
  australiaFinalContentNewSubstantiveRoutes,
  correctedCoverageCheckpoints,
  correctedSubstantiveBaseline,
  reportedSubstantiveBaseline,
  usaPreviouslyCountedRoutes,
  usaHawaiiNewSubstantiveRoutes,
  usaNewOrleansNewSubstantiveRoutes,
  usaAtlantaNewSubstantiveRoutes,
  usaFloridaNewSubstantiveRoutes,
  usaNewEnglandNewSubstantiveRoutes,
  usaChicagoNewSubstantiveRoutes,
  usaArizonaNewSubstantiveRoutes,
  usaLosAngelesNewSubstantiveRoutes,
  usaBostonNewSubstantiveRoutes,
  usaNewYorkHistoricalCoverageCorrectionRoutes,
  usaOtherHistoricalCoverageCorrectionRoutes,
  usaOverviewJuneauHistoricalCoverageCorrectionRoutes,
  usaSanDiegoNewSubstantiveRoutes,
  vietnamPhongNhaNewSubstantiveRoutes,
  australiaBroomeTasmaniaNewSubstantiveRoutes,
  vietnamCompletedRoutes,
  vietnamHistoricalExclusions,
  vietnamNewSubstantiveRoutes,
  vietnamHaLongNewSubstantiveRoutes,
  vietnamHcmcNewSubstantiveRoutes,
  vietnamMekongNewSubstantiveRoutes,
  vietnamDaLatNewSubstantiveRoutes,
  vietnamMuiNeNewSubstantiveRoutes,
  vietnamPhuQuocNewSubstantiveRoutes,
  vietnamNhaTrangNewSubstantiveRoutes,
  vietnamAfterNhaTrangNewSubstantiveRoutes,
  vietnamSouthernGapsNewSubstantiveRoutes,
  vietnamBayGapsNewSubstantiveRoutes,
  vietnamCavesIslandsGapsNewSubstantiveRoutes
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

function normalizedMainText(html) {
  const document = parse(html);
  const main = findOne(document, (node) => node.tagName === 'main');
  assert(main, 'Expected an English route page with a main element.');
  const text = [];
  function walk(node) {
    if (node.nodeName === '#text') { text.push(node.value); return; }
    if (['script', 'style', 'svg'].includes(node.tagName)) return;
    for (const child of node.childNodes || []) walk(child);
  }
  walk(main);
  return text.join(' ').replace(/\s+/g, ' ').trim();
}

function substantiveCharacterCount(text) {
  return [...text.replace(/\s/gu, '')].length;
}

const localeSourcePatterns = new Map([
  ['zh', /[\u3400-\u9fff]/u],
  ['ja', /[\u3040-\u30ff\u3400-\u9fff]/u],
  ['ko', /[\uac00-\ud7af]/u],
  ['th', /[\u0e00-\u0e7f]/u]
]);

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
assert.equal(vietnamHcmcNewSubstantiveRoutes.length, 4, 'Ho Chi Minh City adds four exact existing bodies.');
assert.equal(new Set(vietnamHcmcNewSubstantiveRoutes).size, 4, 'Ho Chi Minh City additions must be unique.');
assert(vietnamHcmcNewSubstantiveRoutes.every((route) => !vietnamCompletedRoutes.includes(route) && !vietnamNewSubstantiveRoutes.includes(route) && !vietnamHaLongNewSubstantiveRoutes.includes(route)), 'Ho Chi Minh City routes are disjoint from earlier Vietnam ledger groups.');
for (const route of vietnamHcmcNewSubstantiveRoutes) assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Ho Chi Minh City ledger path is missing: ${route}`);
assert.equal(vietnamMekongNewSubstantiveRoutes.length, 4, 'Mekong Delta adds four exact existing bodies.');
assert.equal(new Set(vietnamMekongNewSubstantiveRoutes).size, 4, 'Mekong Delta additions must be unique.');
assert(vietnamMekongNewSubstantiveRoutes.every((route) => !vietnamCompletedRoutes.includes(route) && !vietnamNewSubstantiveRoutes.includes(route) && !vietnamHaLongNewSubstantiveRoutes.includes(route) && !vietnamHcmcNewSubstantiveRoutes.includes(route)), 'Mekong Delta routes are disjoint from earlier Vietnam ledger groups.');
for (const route of vietnamMekongNewSubstantiveRoutes) assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Mekong Delta ledger path is missing: ${route}`);
assert.equal(vietnamDaLatNewSubstantiveRoutes.length, 4, 'Da Lat and Central Highlands add four exact existing bodies.');
assert.equal(new Set(vietnamDaLatNewSubstantiveRoutes).size, 4, 'Da Lat additions must be unique.');
assert(vietnamDaLatNewSubstantiveRoutes.every((route) => !vietnamCompletedRoutes.includes(route) && !vietnamNewSubstantiveRoutes.includes(route) && !vietnamHaLongNewSubstantiveRoutes.includes(route) && !vietnamHcmcNewSubstantiveRoutes.includes(route) && !vietnamMekongNewSubstantiveRoutes.includes(route)), 'Da Lat routes are disjoint from all earlier Vietnam ledger groups.');
for (const route of vietnamDaLatNewSubstantiveRoutes) assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Da Lat ledger path is missing: ${route}`);
assert.equal(vietnamMuiNeNewSubstantiveRoutes.length, 4, 'Mui Ne and Binh Thuan add four exact existing bodies.');
assert.equal(new Set(vietnamMuiNeNewSubstantiveRoutes).size, 4, 'Mui Ne additions must be unique.');
assert(vietnamMuiNeNewSubstantiveRoutes.every((route) => !vietnamCompletedRoutes.includes(route) && !vietnamNewSubstantiveRoutes.includes(route) && !vietnamHaLongNewSubstantiveRoutes.includes(route) && !vietnamHcmcNewSubstantiveRoutes.includes(route) && !vietnamMekongNewSubstantiveRoutes.includes(route) && !vietnamDaLatNewSubstantiveRoutes.includes(route)), 'Mui Ne routes are disjoint from all earlier Vietnam ledger groups.');
for (const route of vietnamMuiNeNewSubstantiveRoutes) assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Mui Ne ledger path is missing: ${route}`);
assert.equal(vietnamPhuQuocNewSubstantiveRoutes.length, 4, 'Phu Quoc adds exactly four substantive routes.');
assert.equal(new Set(vietnamPhuQuocNewSubstantiveRoutes).size, 4, 'Phu Quoc additions must be unique.');
assert(vietnamPhuQuocNewSubstantiveRoutes.every((route) => !vietnamCompletedRoutes.includes(route) && !vietnamNewSubstantiveRoutes.includes(route) && !vietnamHaLongNewSubstantiveRoutes.includes(route) && !vietnamHcmcNewSubstantiveRoutes.includes(route) && !vietnamMekongNewSubstantiveRoutes.includes(route) && !vietnamDaLatNewSubstantiveRoutes.includes(route) && !vietnamMuiNeNewSubstantiveRoutes.includes(route) && !vietnamPhongNhaNewSubstantiveRoutes.includes(route)), 'Phu Quoc routes are disjoint from all previously counted Vietnam ledger groups.');
for (const route of vietnamPhuQuocNewSubstantiveRoutes) assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Phu Quoc ledger path is missing: ${route}`);
assert.equal(vietnamNhaTrangNewSubstantiveRoutes.length, 4, 'Nha Trang adds exactly four substantive routes.');
assert.equal(new Set(vietnamNhaTrangNewSubstantiveRoutes).size, 4, 'Nha Trang additions must be unique.');
assert(vietnamNhaTrangNewSubstantiveRoutes.every((route) => !vietnamCompletedRoutes.includes(route) && !vietnamNewSubstantiveRoutes.includes(route) && !vietnamHaLongNewSubstantiveRoutes.includes(route) && !vietnamHcmcNewSubstantiveRoutes.includes(route) && !vietnamMekongNewSubstantiveRoutes.includes(route) && !vietnamDaLatNewSubstantiveRoutes.includes(route) && !vietnamMuiNeNewSubstantiveRoutes.includes(route) && !vietnamPhongNhaNewSubstantiveRoutes.includes(route) && !vietnamPhuQuocNewSubstantiveRoutes.includes(route)), 'Nha Trang routes are disjoint from all previously counted Vietnam ledger groups.');
for (const route of vietnamNhaTrangNewSubstantiveRoutes) assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Nha Trang ledger path is missing: ${route}`);
assert.equal(vietnamAfterNhaTrangNewSubstantiveRoutes.length, 4, 'The follow-on Da Lat and Ha Long batch adds four exact substantive routes.');
assert.equal(new Set(vietnamAfterNhaTrangNewSubstantiveRoutes).size, 4, 'Follow-on routes must be unique.');
assert(vietnamAfterNhaTrangNewSubstantiveRoutes.every((route) => !vietnamCompletedRoutes.includes(route) && !vietnamNewSubstantiveRoutes.includes(route) && !vietnamHaLongNewSubstantiveRoutes.includes(route) && !vietnamHcmcNewSubstantiveRoutes.includes(route) && !vietnamMekongNewSubstantiveRoutes.includes(route) && !vietnamDaLatNewSubstantiveRoutes.includes(route) && !vietnamMuiNeNewSubstantiveRoutes.includes(route) && !vietnamPhongNhaNewSubstantiveRoutes.includes(route) && !vietnamPhuQuocNewSubstantiveRoutes.includes(route) && !vietnamNhaTrangNewSubstantiveRoutes.includes(route)), 'Follow-on routes are disjoint from all earlier Vietnam ledger groups.');
for (const route of vietnamAfterNhaTrangNewSubstantiveRoutes) assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Follow-on Vietnam route is missing: ${route}`);
assert.equal(vietnamSouthernGapsNewSubstantiveRoutes.length, 4, 'Southern Vietnam adds four exact substantive routes.');
assert.equal(new Set(vietnamSouthernGapsNewSubstantiveRoutes).size, 4, 'Southern Vietnam routes must be unique.');
assert(vietnamSouthernGapsNewSubstantiveRoutes.every((route) => !vietnamCompletedRoutes.includes(route) && !vietnamNewSubstantiveRoutes.includes(route) && !vietnamHaLongNewSubstantiveRoutes.includes(route) && !vietnamHcmcNewSubstantiveRoutes.includes(route) && !vietnamMekongNewSubstantiveRoutes.includes(route) && !vietnamDaLatNewSubstantiveRoutes.includes(route) && !vietnamMuiNeNewSubstantiveRoutes.includes(route) && !vietnamPhongNhaNewSubstantiveRoutes.includes(route) && !vietnamPhuQuocNewSubstantiveRoutes.includes(route) && !vietnamNhaTrangNewSubstantiveRoutes.includes(route) && !vietnamAfterNhaTrangNewSubstantiveRoutes.includes(route)), 'Southern Vietnam routes are disjoint from all earlier Vietnam ledger groups.');
for (const route of vietnamSouthernGapsNewSubstantiveRoutes) assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Southern Vietnam route is missing: ${route}`);
assert.equal(vietnamBayGapsNewSubstantiveRoutes.length, 4, 'Vietnam bay and Con Dao adds four exact substantive routes.');
assert.equal(new Set(vietnamBayGapsNewSubstantiveRoutes).size, 4, 'Bay and Con Dao routes must be unique.');
assert(vietnamBayGapsNewSubstantiveRoutes.every((route) => !vietnamCompletedRoutes.includes(route) && !vietnamNewSubstantiveRoutes.includes(route) && !vietnamHaLongNewSubstantiveRoutes.includes(route) && !vietnamHcmcNewSubstantiveRoutes.includes(route) && !vietnamMekongNewSubstantiveRoutes.includes(route) && !vietnamDaLatNewSubstantiveRoutes.includes(route) && !vietnamMuiNeNewSubstantiveRoutes.includes(route) && !vietnamPhongNhaNewSubstantiveRoutes.includes(route) && !vietnamPhuQuocNewSubstantiveRoutes.includes(route) && !vietnamNhaTrangNewSubstantiveRoutes.includes(route) && !vietnamAfterNhaTrangNewSubstantiveRoutes.includes(route) && !vietnamSouthernGapsNewSubstantiveRoutes.includes(route)), 'Bay and Con Dao routes are disjoint from all earlier Vietnam ledger groups.');
for (const route of vietnamBayGapsNewSubstantiveRoutes) assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Vietnam bay and Con Dao route is missing: ${route}`);
assert.equal(vietnamCavesIslandsGapsNewSubstantiveRoutes.length, 4, 'Vietnam caves and island gaps adds four exact substantive routes.');
assert.equal(new Set(vietnamCavesIslandsGapsNewSubstantiveRoutes).size, 4, 'Vietnam caves and island gaps routes must be unique.');
const previousVietnamGroups = [vietnamCompletedRoutes, vietnamNewSubstantiveRoutes, vietnamHaLongNewSubstantiveRoutes, vietnamHcmcNewSubstantiveRoutes, vietnamMekongNewSubstantiveRoutes, vietnamDaLatNewSubstantiveRoutes, vietnamMuiNeNewSubstantiveRoutes, vietnamPhongNhaNewSubstantiveRoutes, vietnamPhuQuocNewSubstantiveRoutes, vietnamNhaTrangNewSubstantiveRoutes, vietnamAfterNhaTrangNewSubstantiveRoutes, vietnamSouthernGapsNewSubstantiveRoutes, vietnamBayGapsNewSubstantiveRoutes];
assert(vietnamCavesIslandsGapsNewSubstantiveRoutes.every((route) => previousVietnamGroups.every((group) => !group.includes(route))), 'Vietnam caves and island gaps routes are disjoint from all prior Vietnam ledger groups.');
for (const route of vietnamCavesIslandsGapsNewSubstantiveRoutes) assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Vietnam caves and island gaps route is missing: ${route}`);
for (const route of vietnamCompletedRoutes) {
  assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Vietnam ledger path is missing: ${route}`);
}
for (const checkpoint of correctedCoverageCheckpoints) assert(Number.isInteger(checkpoint.count) && checkpoint.count > 0, `${checkpoint.label}: checkpoint count must be an integer.`);
assert.deepEqual(correctedCoverageCheckpoints.map(({ count }) => count), [697, 701, 703, 707, 711, 719, 723, 727, 732, 736, 740, 744, 748, 752, 757, 765, 769, 773, 777, 781, 785, 789, 793, 797, 801, 805, 809, 813, 817, 821, 825, 829, 833, 837, 841, 845, 871, 873, 878, 882, 886, 890, 894, 898, 902]);

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
assert.equal(australiaMargaretRemainingNewSubstantiveRoutes.length, 4, 'The remaining Margaret River batch adds four exact existing Australia bodies.');
assert.equal(new Set(australiaMargaretRemainingNewSubstantiveRoutes).size, 4, 'The remaining Margaret River routes must be unique.');
assert(australiaMargaretRemainingNewSubstantiveRoutes.every((route) => !australiaNewSubstantiveRoutes.includes(route) && !australiaCanberraNewSubstantiveRoutes.includes(route) && !australiaAlpsMargaretNewSubstantiveRoutes.includes(route)), 'Remaining Margaret guides are disjoint from prior Australia route improvements.');
for (const route of australiaMargaretRemainingNewSubstantiveRoutes) assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Remaining Margaret ledger path is missing: ${route}`);
assert.equal(australiaBroomeNewSubstantiveRoutes.length, 4, 'Broome & Kimberley adds four exact existing Australia bodies.');
assert.equal(new Set(australiaBroomeNewSubstantiveRoutes).size, 4, 'Broome routes must be unique.');
assert(australiaBroomeNewSubstantiveRoutes.every((route) => !australiaNewSubstantiveRoutes.includes(route) && !australiaCanberraNewSubstantiveRoutes.includes(route) && !australiaAlpsMargaretNewSubstantiveRoutes.includes(route) && !australiaMargaretRemainingNewSubstantiveRoutes.includes(route)), 'Broome routes are disjoint from earlier Australia ledger groups.');
for (const route of australiaBroomeNewSubstantiveRoutes) assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Broome ledger path is missing: ${route}`);
assert.deepEqual(australiaFinalContentNewSubstantiveRoutes, [
  '/australia/',
  '/australia/tasmania/cradle-freycinet/',
  '/australia/tasmania/kunanyi-mount-wellington/',
  '/australia/tasmania/launceston-tamar-valley/',
  '/australia/tasmania/port-arthur-tasman-peninsula/'
], 'The final Australia batch contains the overview and four Tasmania guides, not the unchanged Tasmania hub.');
assert.equal(new Set(australiaFinalContentNewSubstantiveRoutes).size, 5, 'Australia final-content routes are unique.');
assert(australiaFinalContentNewSubstantiveRoutes.every((route) => !australiaNewSubstantiveRoutes.includes(route) && !australiaCanberraNewSubstantiveRoutes.includes(route) && !australiaAlpsMargaretNewSubstantiveRoutes.includes(route) && !australiaMargaretRemainingNewSubstantiveRoutes.includes(route) && !australiaBroomeNewSubstantiveRoutes.includes(route) && !australiaBroomeTasmaniaNewSubstantiveRoutes.includes(route)), 'Final Australia content routes are disjoint from every previously counted Australia route group.');
for (const route of australiaFinalContentNewSubstantiveRoutes) assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Australia final-content ledger path is missing: ${route}`);
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
assert.equal(usaFloridaNewSubstantiveRoutes.length, 4, 'Florida adds four exact existing-route improvements.');
assert.equal(new Set(usaFloridaNewSubstantiveRoutes).size, 4, 'Florida additions must be unique.');
assert(usaFloridaNewSubstantiveRoutes.every((route) => !usaPreviouslyCountedRoutes.includes(route) && !usaHawaiiNewSubstantiveRoutes.includes(route) && !usaNewOrleansNewSubstantiveRoutes.includes(route) && !usaAtlantaNewSubstantiveRoutes.includes(route)), 'Florida routes are disjoint from the historical 25 and Hawaii, New Orleans and Atlanta additions.');
assert.equal(usaNewEnglandNewSubstantiveRoutes.length, 4, 'New England adds four exact existing-route improvements.');
assert.equal(new Set(usaNewEnglandNewSubstantiveRoutes).size, 4, 'New England additions must be unique.');
assert(usaNewEnglandNewSubstantiveRoutes.every((route) => !usaPreviouslyCountedRoutes.includes(route) && !usaHawaiiNewSubstantiveRoutes.includes(route) && !usaNewOrleansNewSubstantiveRoutes.includes(route) && !usaAtlantaNewSubstantiveRoutes.includes(route) && !usaFloridaNewSubstantiveRoutes.includes(route)), 'New England routes are disjoint from prior USA ledger improvements.');
assert.equal(usaChicagoNewSubstantiveRoutes.length, 4, 'Chicago adds four exact existing-route improvements.');
assert.equal(new Set(usaChicagoNewSubstantiveRoutes).size, 4, 'Chicago additions must be unique.');
assert(usaChicagoNewSubstantiveRoutes.every((route) => !usaPreviouslyCountedRoutes.includes(route) && !usaHawaiiNewSubstantiveRoutes.includes(route) && !usaNewOrleansNewSubstantiveRoutes.includes(route) && !usaAtlantaNewSubstantiveRoutes.includes(route) && !usaFloridaNewSubstantiveRoutes.includes(route) && !usaNewEnglandNewSubstantiveRoutes.includes(route)), 'Chicago routes are disjoint from prior USA ledger improvements, including New England.');
assert.equal(usaArizonaNewSubstantiveRoutes.length, 4, 'Arizona adds four exact existing-route improvements.');
assert.equal(new Set(usaArizonaNewSubstantiveRoutes).size, 4, 'Arizona additions must be unique.');
assert(usaArizonaNewSubstantiveRoutes.every((route) => !usaPreviouslyCountedRoutes.includes(route) && !usaHawaiiNewSubstantiveRoutes.includes(route) && !usaNewOrleansNewSubstantiveRoutes.includes(route) && !usaAtlantaNewSubstantiveRoutes.includes(route) && !usaFloridaNewSubstantiveRoutes.includes(route) && !usaNewEnglandNewSubstantiveRoutes.includes(route) && !usaChicagoNewSubstantiveRoutes.includes(route)), 'Arizona routes are disjoint from all earlier U.S. ledger groups.');
assert.equal(usaLosAngelesNewSubstantiveRoutes.length, 4, 'Los Angeles adds four exact existing-route improvements.');
assert.equal(new Set(usaLosAngelesNewSubstantiveRoutes).size, 4, 'Los Angeles additions must be unique.');
assert(usaLosAngelesNewSubstantiveRoutes.every((route) => !usaPreviouslyCountedRoutes.includes(route) && !usaHawaiiNewSubstantiveRoutes.includes(route) && !usaNewOrleansNewSubstantiveRoutes.includes(route) && !usaAtlantaNewSubstantiveRoutes.includes(route) && !usaFloridaNewSubstantiveRoutes.includes(route) && !usaNewEnglandNewSubstantiveRoutes.includes(route) && !usaChicagoNewSubstantiveRoutes.includes(route) && !usaArizonaNewSubstantiveRoutes.includes(route)), 'Los Angeles routes are disjoint from all earlier U.S. ledger groups.');
assert.equal(usaBostonNewSubstantiveRoutes.length, 4, 'Boston & Cambridge adds four exact existing-route improvements.');
assert.equal(new Set(usaBostonNewSubstantiveRoutes).size, 4, 'Boston additions must be unique.');
assert(usaBostonNewSubstantiveRoutes.every((route) => !usaPreviouslyCountedRoutes.includes(route) && !usaHawaiiNewSubstantiveRoutes.includes(route) && !usaNewOrleansNewSubstantiveRoutes.includes(route) && !usaAtlantaNewSubstantiveRoutes.includes(route) && !usaFloridaNewSubstantiveRoutes.includes(route) && !usaNewEnglandNewSubstantiveRoutes.includes(route) && !usaChicagoNewSubstantiveRoutes.includes(route) && !usaArizonaNewSubstantiveRoutes.includes(route) && !usaLosAngelesNewSubstantiveRoutes.includes(route)), 'Boston routes are disjoint from the historical 25 and every earlier U.S. refresh group.');
assert.deepEqual(usaNewYorkHistoricalCoverageCorrectionRoutes, [
  '/usa/new-york/',
  '/usa/new-york/lower-manhattan/',
  '/usa/new-york/midtown-central-park/',
  '/usa/new-york/brooklyn-waterfront/'
], 'Historical New York correction is the exact four-route sample, not current source work.');
const usaRecordedSourceWorkRoutes = [
  ...usaPreviouslyCountedRoutes,
  ...usaHawaiiNewSubstantiveRoutes,
  ...usaNewOrleansNewSubstantiveRoutes,
  ...usaAtlantaNewSubstantiveRoutes,
  ...usaFloridaNewSubstantiveRoutes,
  ...usaNewEnglandNewSubstantiveRoutes,
  ...usaChicagoNewSubstantiveRoutes,
  ...usaArizonaNewSubstantiveRoutes,
  ...usaLosAngelesNewSubstantiveRoutes,
  ...usaBostonNewSubstantiveRoutes,
  ...usaSanDiegoNewSubstantiveRoutes
];
assert.equal(new Set(usaRecordedSourceWorkRoutes).size, usaRecordedSourceWorkRoutes.length, 'Current U.S. source-work routes are disjoint.');
assert(usaNewYorkHistoricalCoverageCorrectionRoutes.every((route) => !usaRecordedSourceWorkRoutes.includes(route)), 'The historical New York correction is disjoint from the explicit U.S. source-work route groups.');
assert.equal(new Set(usaNewYorkHistoricalCoverageCorrectionRoutes).size, 4, 'Historical New York correction routes must be unique.');
const newYorkSourceParent = 'e1c4908e99c2cf36e263d00ff67bafe517d77906';
const newYorkSourceTerminal = '6b173d71878f1d4d553fdedd6753e3f74d3aaf21';
assert.equal(git(['show', '-s', '--format=%P', newYorkSourceTerminal]).trim(), newYorkSourceParent, 'The New York history source terminal must retain its exact parent.');
for (const route of usaNewYorkHistoricalCoverageCorrectionRoutes) {
  const file = `${route.slice(1)}index.html`;
  const before = normalizedMainText(git(['show', `${newYorkSourceParent}:${file}`]));
  const source = normalizedMainText(git(['show', `${newYorkSourceTerminal}:${file}`]));
  const current = normalizedMainText(fs.readFileSync(path.join(root, file), 'utf8'));
  const wordCount = (text) => text.split(/\s+/).filter(Boolean).length;
  assert(wordCount(source) - wordCount(before) > 800, `${route}: historical New York source must show a substantial body rewrite.`);
  assert.equal(source, current, `${route}: historical correction must not edit the current New York body.`);
  assert(git(['show', `${newYorkSourceTerminal}:${file}`]).includes('data-editorial-revision="nyc-20260911"'), `${route}: exact source revision marker must remain present.`);
  for (const [locale, script] of localeSourcePatterns) {
    const localized = path.join(root, locale, file);
    assert(fs.existsSync(localized), `${locale} New York route is missing: ${route}`);
    const localizedHtml = fs.readFileSync(localized, 'utf8');
    assert(localizedHtml.includes('data-editorial-revision="nyc-20260911"'), `${locale} New York route lost its exact source revision marker: ${route}`);
    const localizedMain = normalizedMainText(localizedHtml);
    assert(substantiveCharacterCount(localizedMain) > 500, `${locale} New York route lost its translated body: ${route}`);
    assert(script.test(localizedMain), `${locale} New York route lost native-script body content: ${route}`);
  }
}
assert.equal(usaOtherHistoricalCoverageCorrectionRoutes.length, 26, 'The additional historical coverage correction contains exactly 26 already-rewritten U.S. paths.');
assert.equal(new Set(usaOtherHistoricalCoverageCorrectionRoutes).size, 26, 'The 26 historical U.S. paths are unique.');
assert.deepEqual(usaOverviewJuneauHistoricalCoverageCorrectionRoutes, [
  '/usa/',
  '/usa/alaska/juneau-southeast/'
], 'The overview and Juneau are the exact two separately classified historical routes.');
assert.equal(new Set(usaOverviewJuneauHistoricalCoverageCorrectionRoutes).size, 2, 'The overview and Juneau historical paths are unique.');
const allExplicitUsaRouteGroups = [
  ...usaRecordedSourceWorkRoutes,
  ...usaNewYorkHistoricalCoverageCorrectionRoutes,
  ...usaOtherHistoricalCoverageCorrectionRoutes,
  ...usaOverviewJuneauHistoricalCoverageCorrectionRoutes
];
assert.equal(new Set(allExplicitUsaRouteGroups).size, allExplicitUsaRouteGroups.length, 'Historical coverage corrections do not overlap the prior source-work sets or each other.');

const overviewJuneauSourceBase = 'b4045e0b7265cc6c3ceb8f16acb3e591d4b87eda';
const overviewJuneauHistoricalSource = '71def01cd4d489552b9f5d67ca1a202becaa0435e';
const overviewJuneauFollowupTerminal = '73bcb05ae123fe3e4b70f057fa4dc7fc88979693';
assert.equal(git(['show', '-s', '--format=%P', overviewJuneauFollowupTerminal]).trim(), overviewJuneauSourceBase, 'The dated overview/Juneau follow-up has its exact authorized source base.');
for (const route of usaOverviewJuneauHistoricalCoverageCorrectionRoutes) {
  const file = `${route.slice(1)}index.html`;
  const historical = normalizedMainText(git(['show', `${overviewJuneauHistoricalSource}:${file}`]));
  const historicalParent = normalizedMainText(git(['show', `${overviewJuneauHistoricalSource}^:${file}`]));
  const taskBaseBody = normalizedMainText(git(['show', `${overviewJuneauSourceBase}:${file}`]));
  const current = normalizedMainText(fs.readFileSync(path.join(root, file), 'utf8'));
  assert.notEqual(historical, historicalParent, `${route}: historical September source contains a substantive body change.`);
  assert.equal(taskBaseBody, historical, `${route}: exact source task base already contained the historical substantive body.`);
  assert.notEqual(current, taskBaseBody, `${route}: October source follow-up is a distinct dated update, not the historical work itself.`);
}

const historicalUsaSources = [
  {
    label: 'Philadelphia & Washington, DC',
    terminal: '4daf76a4b37ddeaaf6ded8c67032d94afc0adf56',
    parent: '6b173d71878f1d4d553fdedd6753e3f74d3aaf21',
    tree: '45f42e7d8a4e9d17e65575c403a1c9317496a341',
    routes: usaOtherHistoricalCoverageCorrectionRoutes.slice(0, 8)
  },
  {
    label: 'Seattle & Portland',
    terminal: '6b62cc9c5f6202e489626781836191b787e89a21',
    parent: '174c93dd1b4e2f13ee655f8a4e356b26270fc583',
    tree: '37d052c321bea96dbf3a56cbe01d3c8c67782926',
    routes: usaOtherHistoricalCoverageCorrectionRoutes.slice(8, 16)
  },
  {
    label: 'San Francisco & Yosemite Valley',
    terminal: 'ccbd6e9eba654a450e62be24d7b3acbbf9871c6f',
    parent: '6b62cc9c5f6202e489626781836191b787e89a21',
    tree: 'a7af225669a35c3f69021cf99161d93dd8c3990e',
    routes: usaOtherHistoricalCoverageCorrectionRoutes.slice(16, 21)
  },
  {
    label: 'Las Vegas & Zion',
    terminal: '5ef5073b3beb5e06ffcc8cba58359dd09ee70b4b',
    parent: 'ccbd6e9eba654a450e62be24d7b3acbbf9871c6f',
    tree: '06a0ffe6ccbbd51b92b95dce47e1a04de6d8926d',
    routes: usaOtherHistoricalCoverageCorrectionRoutes.slice(21)
  }
];
const historicalTranslationBatches = [
  { file: '35b-philadelphia-editorial.json', keys: 205, routes: usaOtherHistoricalCoverageCorrectionRoutes.slice(0, 4) },
  { file: '35c-dc-editorial.json', keys: 197, routes: usaOtherHistoricalCoverageCorrectionRoutes.slice(4, 8) },
  { file: '37a-seattle-editorial.json', keys: 177, routes: usaOtherHistoricalCoverageCorrectionRoutes.slice(8, 12) },
  { file: '37b-portland-oregon-editorial.json', keys: 189, routes: usaOtherHistoricalCoverageCorrectionRoutes.slice(12, 16) },
  { file: '38a-san-francisco-editorial.json', keys: 182, routes: usaOtherHistoricalCoverageCorrectionRoutes.slice(16, 20) },
  { file: '38d-sierra-parks-editorial.json', keys: 186, routes: [usaOtherHistoricalCoverageCorrectionRoutes[20]] },
  { file: '39a-las-vegas-editorial.json', keys: 186, routes: usaOtherHistoricalCoverageCorrectionRoutes.slice(21, 25) },
  { file: '39b-utah-parks-editorial.json', keys: 187, routes: [usaOtherHistoricalCoverageCorrectionRoutes[25]] },
  { file: '32-nyc-editorial.json', keys: 241, routes: usaNewYorkHistoricalCoverageCorrectionRoutes },
  { file: '34-nyc-japan-baseline.json', keys: 14, routes: [usaNewYorkHistoricalCoverageCorrectionRoutes[0], usaNewYorkHistoricalCoverageCorrectionRoutes[2]] }
];
for (const batchSpec of historicalTranslationBatches) {
  let referenceRoutes;
  for (const locale of ['zh-Hant', 'ja', 'ko', 'th']) {
    const batchPath = path.join(root, 'data/i18n/reviewed', locale, batchSpec.file);
    const batch = JSON.parse(fs.readFileSync(batchPath, 'utf8'));
    assert.equal(batch.qualityStatus, 'reviewed', `${locale}/${batchSpec.file}: historical translation batch status`);
    assert.equal(Object.keys(batch.translations).length, batchSpec.keys, `${locale}/${batchSpec.file}: historical translation key count`);
    for (const route of batchSpec.routes) assert(batch.routes.includes(route), `${locale}/${batchSpec.file}: reviewed batch covers ${route}`);
    if (!referenceRoutes) referenceRoutes = batch.routes;
    else assert.deepEqual(batch.routes, referenceRoutes, `${locale}/${batchSpec.file}: exact reviewed route scope matches other locales`);

    const catalog = JSON.parse(fs.readFileSync(path.join(root, `data/i18n/${locale}.json`), 'utf8'));
    for (const [key, value] of Object.entries(batch.translations)) {
      assert.equal(catalog.translations[key], value, `${locale}/${batchSpec.file}: historical reviewed translation is retained in the catalog`);
    }
  }
}
assert.deepEqual(
  JSON.parse(fs.readFileSync(path.join(root, 'data/i18n/reviewed/zh-Hant/32-nyc-editorial.json'), 'utf8')).routes,
  usaNewYorkHistoricalCoverageCorrectionRoutes,
  'The 241-key New York body batch covers exactly the four documented sample routes.'
);
assert.deepEqual(
  JSON.parse(fs.readFileSync(path.join(root, 'data/i18n/reviewed/zh-Hant/34-nyc-japan-baseline.json'), 'utf8')).routes,
  [usaNewYorkHistoricalCoverageCorrectionRoutes[0], usaNewYorkHistoricalCoverageCorrectionRoutes[2]],
  'The 14-key New York/Japan baseline batch covers only the hub and Midtown route.'
);
for (const group of historicalUsaSources) {
  assert.equal(git(['show', '-s', '--format=%P', group.terminal]).trim(), group.parent, `${group.label}: exact historical source parent`);
  assert.equal(git(['show', '-s', '--format=%T', group.terminal]).trim(), group.tree, `${group.label}: exact historical source tree`);
  for (const route of group.routes) {
    const file = `${route.slice(1)}index.html`;
    const source = normalizedMainText(git(['show', `${group.terminal}:${file}`]));
    const current = normalizedMainText(fs.readFileSync(path.join(root, file), 'utf8'));
    assert.equal(current, source, `${route}: current English body retains its exact historical rewrite`);
    const wordCount = (text) => text.split(/\s+/).filter(Boolean).length;
    const original = normalizedMainText(git(['show', `${group.terminal}^:${file}`]));
    assert(wordCount(source) - wordCount(original) > 500, `${route}: historical rewrite has a substantive body delta`);
    for (const [locale, script] of localeSourcePatterns) {
      const localizedFile = path.join(root, locale, file);
      assert(fs.existsSync(localizedFile), `${locale}: historical route is present: ${route}`);
      const localized = fs.readFileSync(localizedFile, 'utf8');
      const localizedMain = normalizedMainText(localized);
      assert(substantiveCharacterCount(localizedMain) > 500, `${locale}${route}: historical localized main body is present`);
      assert(script.test(localizedMain), `${locale}${route}: historical localized body retains native-script content`);
    }
  }
}
for (const route of [...usaSanDiegoNewSubstantiveRoutes, ...vietnamPhongNhaNewSubstantiveRoutes, ...vietnamPhuQuocNewSubstantiveRoutes, ...vietnamNhaTrangNewSubstantiveRoutes, ...vietnamAfterNhaTrangNewSubstantiveRoutes, ...vietnamSouthernGapsNewSubstantiveRoutes, ...vietnamBayGapsNewSubstantiveRoutes, ...vietnamCavesIslandsGapsNewSubstantiveRoutes, ...australiaBroomeTasmaniaNewSubstantiveRoutes]) {
  assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `Newly integrated route is missing: ${route}`);
}
assert.equal(usaSanDiegoNewSubstantiveRoutes.length, 4, 'San Diego adds four newly integrated body routes.');
assert.equal(vietnamPhongNhaNewSubstantiveRoutes.length, 4, 'Phong Nha adds four distinct body routes; Paradise/Tien Son remains counted in its earlier batch.');
assert(!vietnamPhongNhaNewSubstantiveRoutes.includes('/vietnam/phong-nha-ke-bang/paradise-tien-son-caves/'), 'Paradise/Tien Son is not counted a second time.');
assert.equal(vietnamPhuQuocNewSubstantiveRoutes.length, 4, 'Phu Quoc adds four distinct route improvements.');
assert.equal(vietnamNhaTrangNewSubstantiveRoutes.length, 4, 'Nha Trang adds four distinct route improvements.');
assert.equal(vietnamAfterNhaTrangNewSubstantiveRoutes.length, 4, 'Da Lat and Ha Long follow-on adds four distinct route improvements.');
assert.equal(vietnamSouthernGapsNewSubstantiveRoutes.length, 4, 'Southern Vietnam adds four distinct route improvements.');
assert.equal(vietnamBayGapsNewSubstantiveRoutes.length, 4, 'Bay and Con Dao adds four distinct route improvements.');
assert.equal(australiaBroomeTasmaniaNewSubstantiveRoutes.length, 4, 'Broome/Tasmania adds four newly integrated body routes.');
assert(usaNewOrleansNewSubstantiveRoutes.every((route) => !usaPreviouslyCountedRoutes.includes(route) && !usaHawaiiNewSubstantiveRoutes.includes(route)), 'New Orleans routes are disjoint from the historical 25 and the four Hawaii paths.');
for (const route of [...usaPreviouslyCountedRoutes, ...usaHawaiiNewSubstantiveRoutes, ...usaNewOrleansNewSubstantiveRoutes, ...usaAtlantaNewSubstantiveRoutes, ...usaFloridaNewSubstantiveRoutes, ...usaNewEnglandNewSubstantiveRoutes, ...usaChicagoNewSubstantiveRoutes, ...usaArizonaNewSubstantiveRoutes, ...usaLosAngelesNewSubstantiveRoutes, ...usaBostonNewSubstantiveRoutes, ...usaSanDiegoNewSubstantiveRoutes, ...usaNewYorkHistoricalCoverageCorrectionRoutes, ...usaOtherHistoricalCoverageCorrectionRoutes, ...usaOverviewJuneauHistoricalCoverageCorrectionRoutes]) {
  assert(fs.existsSync(path.join(root, route.slice(1), 'index.html')), `U.S. ledger path is missing: ${route}`);
}

const originalOverview = git(['show', `${originalAtlas}:vietnam/index.html`]);
const reviewedOverview = git(['show', `${reviewedAtlas}:vietnam/index.html`]);
assert.equal(
  substantiveOverviewText(reviewedOverview),
  substantiveOverviewText(originalOverview),
  'Vietnam overview non-card editorial text must not count toward the route ledger; later card excerpts are excluded.'
);

console.log('Substantive route ledger passed: Vietnam 39 historical routes plus eight prior and four each of Ha Long, Ho Chi Minh City, Mekong Delta, Da Lat, Mui Ne, Phong Nha, Phu Quoc and Nha Trang improvements, then four additional Da Lat/Ha Long, Southern Vietnam, Bay/Con Dao and caves/islands routes (core-cruise counted once); Canada 73 unique paths and 13 CA16–CA18 improvements; the exact 25 historical U.S. paths are disjoint from four Hawaii, New Orleans, Atlanta, Florida, New England, Chicago, Arizona, Los Angeles, Boston and San Diego source-work groups; all 32 historical U.S. corrections are separately accounted (New York 4, other historical paths 26, overview/Juneau 2); Australia’s twelve late gap improvements plus four Canberra, four Alps/Margaret, four remaining Margaret, four Broome, four Broome/Tasmania and five final-content improvements; corrected coverage reaches 902/907.');
