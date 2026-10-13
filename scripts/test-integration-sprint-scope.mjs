#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import {
  integrationRoutes,
  integrationRouteGroups,
  integrationSearchRoutes,
  integrationSitemapRoutes,
  integrationSprintBaseline,
  postIntegrationHawaiiRoutes,
  postHawaiiNewOrleansRoutes,
  postIntegrationAustraliaRoutes,
  postIntegrationCanberraRoutes,
  postIntegrationAlpsMargaretRoutes,
  postNewOrleansAtlantaRoutes,
  postAtlantaFloridaRoutes,
  postHaLongHCMCIntegrationRoutes,
  postMekongDeltaIntegrationRoutes,
  followingVietnamDaLatRoutes,
  postNewEnglandIntegrationRoutes,
  postIntegrationMargaretRemainingRoutes,
  postFloridaChicagoRoutes,
  postNewEnglandArizonaRoutes,
  postArizonaLosAngelesRoutes,
  postLosAngelesBostonRoutes,
  postLosAngelesSanDiegoRoutes,
  postBostonOverviewJuneauRoutes,
  postBostonOverviewJuneauSearchRoutes,
  postIntegrationPhongNhaRoutes,
  postIntegrationPhuQuocRoutes,
  followingVietnamNhaTrangRoutes,
  followingVietnamAfterNhaTrangRoutes,
  followingVietnamSouthernGapsRoutes,
  followingVietnamBayGapsRoutes,
  followingVietnamCavesIslandsGapsRoutes,
  postIntegrationBroomeTasmaniaRoutes,
  postIntegrationBroomeRoutes,
  postIntegrationMuiNeRoutes,
  postAustraliaFinalRoutes,
  localizedIntegrationSitemapRoutes
} from './integration-sprint-scope.mjs';

const root = path.resolve(import.meta.dirname, '..');
const git = (args) => execFileSync('git', args, { cwd: root });
const readFromGit = (spec) => git(['show', spec]);
const sorted = (values) => [...values].sort();

assert.equal(integrationRouteGroups.unitedKingdom.length, 9);
assert.equal(integrationRouteGroups.australia.length, 48);
assert.equal(integrationRouteGroups.france.length, 17);
assert.equal(integrationRouteGroups.switzerland.length, 61);
assert.ok(integrationRouteGroups.switzerland.includes('/switzerland/'), 'the substantively refreshed Switzerland country overview stays in the route ledger');
assert.equal(integrationRouteGroups.italy.length, 61);
assert.equal(integrationRouteGroups.canada.length, 53);
assert.equal(integrationRouteGroups.malaysia.length, 41);
assert.equal(integrationRouteGroups.vietnam.length, 12);
assert.equal(integrationRoutes.length, 302);
assert.equal(integrationSitemapRoutes.length, 301);
assert.equal(integrationSearchRoutes.length, 271);
for (const route of [
  '/switzerland/lugano-southern-ticino/lugano-lakefront/',
  '/switzerland/lugano-southern-ticino/san-salvatore-morcote/',
  '/switzerland/locarno-ascona-valleys/locarno-ascona/',
  '/switzerland/schaffhausen-rhine-falls/rhine-falls/',
  '/switzerland/schaffhausen-rhine-falls/schaffhausen-old-town/'
]) {
  assert(integrationSitemapRoutes.includes(route), `${route}: CH16 date belongs in exact integration scope`);
  assert(integrationSearchRoutes.includes(route), `${route}: CH16 search belongs in exact integration scope`);
}
const haLongBase = '10b3f39eb069646b8381bfe43767a0998f4ad2c8';
const haLongTerminal = '92996ef6631fb3775f1bf4f996292059b4aeca83';
const haLongRoutes = [
  '/vietnam/ha-long-cat-ba/',
  '/vietnam/ha-long-cat-ba/bai-tu-long/',
  '/vietnam/ha-long-cat-ba/lan-ha-town/',
  '/vietnam/ha-long-cat-ba/national-park/'
];
const alpsMargaretBase = '5f1205bbbee0ef636c34e883c399e6fceaa7b508';
const alpsMargaretContent = '55e3b9710c24b45975bdaea5769ab3e4a39ffc44';
const alpsMargaretTerminal = 'a99fbe9fe996ccedbac42b1b9386447a11403854';
const alpsMargaretRoutes = postIntegrationAlpsMargaretRoutes;
assert.equal(git(['rev-parse', `${alpsMargaretContent}^1`]).toString('utf8').trim(), '768151d3f42378358c122a1cde55100fcec9eafa', 'the Alps/Margaret content source has the exact reviewed arrow-fix parent');
assert.equal(git(['rev-parse', `${alpsMargaretTerminal}^1`]).toString('utf8').trim(), alpsMargaretContent, 'the Alps/Margaret terminal has the exact content parent');
assert.equal(git(['rev-parse', `${alpsMargaretTerminal}^{tree}`]).toString('utf8').trim(), 'a2452494f1f0240329a90c1ccf7036f2c0aab3ef', 'the Alps/Margaret terminal tree matches the verified source');
assert.equal(git(['merge-base', alpsMargaretBase, alpsMargaretTerminal]).toString('utf8').trim(), alpsMargaretBase, 'the Alps/Margaret source descends from its exact Canberra base');
const changedAlpsMargaretHtml = git(['diff', '--name-only', alpsMargaretBase, alpsMargaretContent, '--', 'australia'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedAlpsMargaretHtml, alpsMargaretRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Alps/Margaret content source changes exactly four English bodies');
for (const route of alpsMargaretRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${alpsMargaretContent}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches the exact Alps/Margaret content commit`);

assert.equal(git(['rev-parse', `${haLongTerminal}^1`]).toString('utf8').trim(), haLongBase, 'the Ha Long terminal has the exact authorized Vietnam parent');
assert.equal(git(['rev-parse', `${haLongTerminal}^{tree}`]).toString('utf8').trim(), '9cc6e4dccc94b701e6a6579c0f05b32b275beb28', 'the Ha Long source terminal tree matches the verified source');
assert.equal(git(['merge-base', haLongBase, haLongTerminal]).toString('utf8').trim(), haLongBase, 'the Ha Long source descends from its exact base');
assert.deepEqual(sorted(integrationRouteGroups.vietnam.filter((route) => route.startsWith('/vietnam/ha-long-cat-ba/'))), sorted(['/vietnam/ha-long-cat-ba/core-cruise/', ...haLongRoutes]), "Ha Long's current four routes are disjoint from the already-counted core-cruise guide.");
const changedHaLongHtml = git(['diff', '--name-only', haLongBase, haLongTerminal, '--', 'vietnam/ha-long-cat-ba'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedHaLongHtml, haLongRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Ha Long source changes exactly four existing body paths, excluding core-cruise');
for (const route of haLongRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${haLongTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches the exact Ha Long terminal`);
assert.equal(readFromGit(`${haLongBase}:vietnam/ha-long-cat-ba/core-cruise/index.html`).toString('utf8'), readFromGit(`${haLongTerminal}:vietnam/ha-long-cat-ba/core-cruise/index.html`).toString('utf8'), 'the already-counted core-cruise body is unchanged by the Ha Long follow-on');

assert.deepEqual(
  readFromGit(`${integrationSprintBaseline}:switzerland/index.html`),
  readFromGit('545800b8d30c9494e3555e56ca02df6dc4ad6094:switzerland/index.html'),
  'the original Zurich refresh did not substantively update the Switzerland country overview'
);

const changedFiles = git([
  'diff', '--name-only', integrationSprintBaseline, '--',
  'united-kingdom', 'australia', 'france', 'switzerland', 'italy', 'canada', 'malaysia', 'vietnam', 'usa/hawaii', 'usa/new-orleans', 'usa/atlanta', 'usa/miami', 'usa/orlando', 'usa/new-england', 'usa/chicago', 'usa/arizona', 'usa/los-angeles', 'usa/boston', 'usa/san-diego', 'usa/index.html', 'usa/alaska/juneau-southeast'
]).toString('utf8').trim().split('\n').filter(Boolean);
const changedBodyRoutes = changedFiles
  .filter((file) => file.endsWith('/index.html'))
  .map((file) => `/${file.slice(0, -'index.html'.length)}`);
assert.equal(changedBodyRoutes.length, 417);
assert.deepEqual(sorted(changedBodyRoutes), sorted([...integrationRoutes, ...postIntegrationHawaiiRoutes, ...postIntegrationAustraliaRoutes, ...postHawaiiNewOrleansRoutes, ...postIntegrationCanberraRoutes, ...postNewOrleansAtlantaRoutes, ...postIntegrationAlpsMargaretRoutes, ...postAtlantaFloridaRoutes, ...postFloridaChicagoRoutes, ...postHaLongHCMCIntegrationRoutes, ...postMekongDeltaIntegrationRoutes, ...postNewEnglandIntegrationRoutes, ...postIntegrationMargaretRemainingRoutes, ...followingVietnamDaLatRoutes, ...postNewEnglandArizonaRoutes, ...postArizonaLosAngelesRoutes, ...postIntegrationBroomeRoutes, ...postIntegrationMuiNeRoutes, ...postLosAngelesBostonRoutes, ...postLosAngelesSanDiegoRoutes, ...postIntegrationPhongNhaRoutes, ...postIntegrationPhuQuocRoutes, ...followingVietnamNhaTrangRoutes, ...followingVietnamAfterNhaTrangRoutes, ...followingVietnamSouthernGapsRoutes, ...followingVietnamBayGapsRoutes, ...followingVietnamCavesIslandsGapsRoutes, ...postIntegrationBroomeTasmaniaRoutes, ...postBostonOverviewJuneauRoutes, ...postAustraliaFinalRoutes]), 'the exact integration scope and separately accounted follow-on batches changed');

const phuQuocParent = '01144e03bf6173f468cb836d0899163e1a98c4ea';
const phuQuocTerminal = 'a639c760ec728d90a0c271e512cbb7af2fa8bfa4';
assert.equal(git(['rev-parse', `${phuQuocTerminal}^`]).toString('utf8').trim(), phuQuocParent, 'the Phu Quoc source terminal has the exact authorized parent');
assert.equal(git(['rev-parse', `${phuQuocTerminal}^{tree}`]).toString('utf8').trim(), '684472c3bfce12d07ad60cf3727cf3bb2dd73845', 'the Phu Quoc source terminal tree matches the verified source');
const changedPhuQuocHtml = git(['diff', '--name-only', phuQuocParent, phuQuocTerminal, '--', 'vietnam/phu-quoc-southern-islands'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedPhuQuocHtml, postIntegrationPhuQuocRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Phu Quoc source changes exactly four existing English body paths');
for (const route of postIntegrationPhuQuocRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${phuQuocTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches the exact Phu Quoc source terminal`);

const nhaTrangParent = 'a639c760ec728d90a0c271e512cbb7af2fa8bfa4';
const nhaTrangTerminal = 'c604392705e094d5f0ee1effa9e98e38f04ed8c6';
assert.equal(git(['rev-parse', `${nhaTrangTerminal}^`]).toString('utf8').trim(), nhaTrangParent, 'the Nha Trang source terminal has the exact authorized Phu Quoc parent');
assert.equal(git(['rev-parse', `${nhaTrangTerminal}^{tree}`]).toString('utf8').trim(), '069731bc35aaa19ca38ab1c00ae1141811cbde9c', 'the Nha Trang source terminal tree matches the verified source');
const changedNhaTrangHtml = git(['diff', '--name-only', nhaTrangParent, nhaTrangTerminal, '--', 'vietnam/nha-trang-khanh-hoa'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedNhaTrangHtml, followingVietnamNhaTrangRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Nha Trang source changes exactly four existing English body paths');
for (const route of followingVietnamNhaTrangRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${nhaTrangTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches the exact Nha Trang source terminal`);

const taskBase = 'c7df46be0dc3f40649ff44d672861e971d0c082b';
const newOrleansTerminal = 'dffbdfaacd0f8b583b35cbb4985ae007d3daf1a7';
const newOrleansRoutes = [
  '/usa/new-orleans/',
  '/usa/new-orleans/french-quarter/',
  '/usa/new-orleans/garden-district/',
  '/usa/new-orleans/river-wetlands/'
];
assert.equal(git(['rev-parse', `${newOrleansTerminal}^1`]).toString('utf8').trim(), taskBase, 'the New Orleans source terminal must have the exact authorized Hawaii parent');
assert.equal(git(['rev-parse', `${newOrleansTerminal}^{tree}`]).toString('utf8').trim(), '15f9c37ba5a27ab84ecb3b1ada1f1a645ef2ec10', 'the New Orleans source terminal tree must match the verified source');
assert.equal(git(['merge-base', taskBase, newOrleansTerminal]).toString('utf8').trim(), taskBase, 'the New Orleans source must descend from the exact authorized base');
const changedNewOrleansHtml = git(['diff', '--name-only', taskBase, '--', 'usa/new-orleans'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedNewOrleansHtml, newOrleansRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the source branch adds exactly the four authorized New Orleans English body paths');
for (const route of newOrleansRoutes) {
  const relative = `${route.slice(1)}index.html`;
  assert.equal(fs.readFileSync(path.join(root, relative), 'utf8'), readFromGit(`${newOrleansTerminal}:${relative}`).toString('utf8'), `${route}: integrated English body matches the exact New Orleans source terminal`);
}
const atlantaTerminal = '55147104cc93f80b6c9ec7f0b01436b01661e435';
const atlantaBase = 'dffbdfaacd0f8b583b35cbb4985ae007d3daf1a7';
const atlantaRoutes = postNewOrleansAtlantaRoutes;
assert.equal(git(['rev-parse', `${atlantaTerminal}^1`]).toString('utf8').trim(), atlantaBase, 'the Atlanta source terminal has the exact authorized New Orleans parent');
assert.equal(git(['rev-parse', `${atlantaTerminal}^{tree}`]).toString('utf8').trim(), '6d50ae96a20b8a9e4069a7d0d7d27fb3f1daeaed', 'the Atlanta source terminal tree matches the verified source');
assert.equal(git(['merge-base', atlantaBase, atlantaTerminal]).toString('utf8').trim(), atlantaBase, 'the Atlanta source descends from its exact base');
const changedAtlantaHtml = git(['diff', '--name-only', atlantaBase, '--', 'usa/atlanta'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedAtlantaHtml, atlantaRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Atlanta source changes exactly its four selected English routes');
for (const route of atlantaRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${atlantaTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches exact Atlanta terminal`);
assert.deepEqual(git(['diff', '--name-only', taskBase, '--', 'usa/new-york']).toString('utf8').trim(), '', 'the New York acceptance sample is unchanged from the exact task base');
const floridaTerminal = '654f0475dcbaa22f88f88a20169e1f18a04b14ab';
const floridaRoutes = postAtlantaFloridaRoutes;
assert.equal(git(['rev-parse', `${floridaTerminal}^1`]).toString('utf8').trim(), atlantaTerminal, 'the Florida terminal has the exact authorized Atlanta parent');
assert.equal(git(['rev-parse', `${floridaTerminal}^{tree}`]).toString('utf8').trim(), 'e58a2ef60dbbb84e85b6d4a1f306a74c38431ddc', 'the Florida terminal tree matches the verified source');
assert.equal(git(['merge-base', atlantaTerminal, floridaTerminal]).toString('utf8').trim(), atlantaTerminal, 'the Florida source descends from the exact Atlanta base');
const changedFloridaHtml = git(['diff', '--name-only', atlantaTerminal, floridaTerminal, '--', 'usa/miami', 'usa/orlando'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedFloridaHtml, floridaRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Florida source changes exactly four existing Miami/Orlando English bodies');
for (const route of floridaRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${floridaTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches exact Florida source`);
const hcmcTerminal = '75c8caf79053a67cf645a53bed215a72eff07baf';
const hcmcBase = '92996ef6631fb3775f1bf4f996292059b4aeca83';
const hcmcRoutes = postHaLongHCMCIntegrationRoutes;
assert.equal(git(['rev-parse', `${hcmcTerminal}^1`]).toString('utf8').trim(), hcmcBase, 'the HCMC terminal has the exact authorized Ha Long parent');
assert.equal(git(['rev-parse', `${hcmcTerminal}^{tree}`]).toString('utf8').trim(), '9cb808e06ae3468a0b79844d08f2ac5f2831c50f', 'the HCMC terminal tree matches the verified source');
assert.equal(git(['merge-base', hcmcBase, hcmcTerminal]).toString('utf8').trim(), hcmcBase, 'the HCMC source descends from the exact Ha Long base');
const changedHcmcHtml = git(['diff', '--name-only', hcmcBase, hcmcTerminal, '--', 'vietnam/ho-chi-minh-city'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedHcmcHtml, hcmcRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the HCMC source changes exactly four existing English bodies');
for (const route of hcmcRoutes.filter((route) => route !== '/vietnam/ho-chi-minh-city/')) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${hcmcTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches exact HCMC source`);
const mekongTerminal = 'a0210a56c0205158ffbd1021768b101b31aa9a86';
const mekongBase = hcmcTerminal;
const mekongRoutes = postMekongDeltaIntegrationRoutes;
assert.equal(git(['rev-parse', `${mekongTerminal}^1`]).toString('utf8').trim(), mekongBase, 'the Mekong terminal has the exact authorized HCMC parent');
assert.equal(git(['rev-parse', `${mekongTerminal}^{tree}`]).toString('utf8').trim(), 'b8ff88e952360a530261b7f507812ac83c54a523', 'the Mekong terminal tree matches the verified source');
assert.equal(git(['merge-base', mekongBase, mekongTerminal]).toString('utf8').trim(), mekongBase, 'the Mekong source descends from the exact HCMC base');
const changedMekongHtml = git(['diff', '--name-only', mekongBase, mekongTerminal, '--', 'vietnam/mekong-delta'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedMekongHtml, mekongRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Mekong source changes exactly four existing English bodies');
for (const route of mekongRoutes.filter((route) => route !== '/vietnam/mekong-delta/')) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${mekongTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches exact Mekong source`);

const daLatTerminal = '1c54448e4548004d6d012fd12682c33d69fbd25f';
const daLatBase = 'a0210a56c0205158ffbd1021768b101b31aa9a86';
assert.equal(git(['rev-parse', `${daLatTerminal}^1`]).toString('utf8').trim(), daLatBase, 'the Da Lat terminal has the exact authorized Mekong parent');
assert.equal(git(['rev-parse', `${daLatTerminal}^{tree}`]).toString('utf8').trim(), '74bb6db392cf0be040a01470ec0504a27f6d9e27', 'the Da Lat source terminal tree matches the verified source');
assert.equal(git(['merge-base', daLatBase, daLatTerminal]).toString('utf8').trim(), daLatBase, 'the Da Lat source descends from its exact base');
const changedDaLatHtml = git(['diff', '--name-only', daLatBase, daLatTerminal, '--', 'vietnam/da-lat-central-highlands'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedDaLatHtml, followingVietnamDaLatRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Da Lat source changes exactly four existing English body paths');
for (const route of followingVietnamDaLatRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${daLatTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches exact Da Lat source`);

const newEnglandTerminal = '45cae962fdc7fb500cfceb505203efbfd2dbc396';
const newEnglandBase = 'dc88a75c561d3e7a4f30bd00afadb6e8d52841d7';
const newEnglandRoutes = postNewEnglandIntegrationRoutes;
assert.equal(git(['rev-parse', `${newEnglandTerminal}^1`]).toString('utf8').trim(), newEnglandBase, 'the New England source terminal has the exact Chicago source parent');
assert.equal(git(['rev-parse', `${newEnglandTerminal}^{tree}`]).toString('utf8').trim(), '4ef18fd863211f9dc67745684250d76041958bbe', 'the New England source terminal tree matches the verified source');
const changedNewEnglandHtml = git(['diff', '--name-only', newEnglandBase, newEnglandTerminal, '--', 'usa/new-england'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedNewEnglandHtml, newEnglandRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the source changes exactly the four selected New England English body paths');
for (const route of newEnglandRoutes) {
  const relativePath = `${route.slice(1)}index.html`;
  assert.equal(readFromGit(`${newEnglandBase}:${relativePath}`).toString('utf8'), readFromGit(`${integrationSprintBaseline}:${relativePath}`).toString('utf8'), `${route}: exact source task base has the same pre-refresh body as the integration baseline`);
  assert.equal(fs.readFileSync(path.join(root, relativePath), 'utf8'), readFromGit(`${newEnglandTerminal}:${relativePath}`).toString('utf8'), `${route}: integrated body matches exact New England source terminal`);
}

const chicagoTerminal = 'dc88a75c561d3e7a4f30bd00afadb6e8d52841d7';
const chicagoBase = '654f0475dcbaa22f88f88a20169e1f18a04b14ab';
const chicagoRoutes = postFloridaChicagoRoutes;
assert.equal(git(['rev-parse', `${chicagoTerminal}^1`]).toString('utf8').trim(), chicagoBase, 'the Chicago terminal has the exact authorized Florida parent');
assert.equal(git(['rev-parse', `${chicagoTerminal}^{tree}`]).toString('utf8').trim(), '9c4c8220881f8794660d3b604ba345cdbe7ed0bc', 'the Chicago source terminal tree matches the verified source');
assert.equal(git(['merge-base', chicagoBase, chicagoTerminal]).toString('utf8').trim(), chicagoBase, 'the Chicago source descends from its exact Florida base');
const changedChicagoHtml = git(['diff', '--name-only', chicagoBase, chicagoTerminal, '--', 'usa/chicago'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedChicagoHtml, chicagoRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Chicago source changes exactly four existing English bodies');
for (const route of chicagoRoutes) {
  const relativePath = `${route.slice(1)}index.html`;
  assert.equal(fs.readFileSync(path.join(root, relativePath), 'utf8'), readFromGit(`${chicagoTerminal}:${relativePath}`).toString('utf8'), `${route}: integrated body matches exact Chicago source`);
}

const arizonaTerminal = 'd5f7d1689b784b4930cd9f7d4496ab3148929162';
const arizonaBase = '45cae962fdc7fb500cfceb505203efbfd2dbc396';
const arizonaRoutes = postNewEnglandArizonaRoutes;
assert.equal(git(['rev-parse', `${arizonaTerminal}^1`]).toString('utf8').trim(), arizonaBase, 'the Arizona terminal has the exact authorized New England parent');
assert.equal(git(['rev-parse', `${arizonaTerminal}^{tree}`]).toString('utf8').trim(), '435585af5d8bb6871d36a54576d096c4c04275d2', 'the Arizona source terminal tree matches the verified source');
assert.equal(git(['merge-base', arizonaBase, arizonaTerminal]).toString('utf8').trim(), arizonaBase, 'the Arizona source descends from its exact base');
const changedArizonaHtml = git(['diff', '--name-only', arizonaBase, arizonaTerminal, '--', 'usa/arizona'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedArizonaHtml, arizonaRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Arizona source changes exactly four existing English body paths');
for (const route of arizonaRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${arizonaTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches exact Arizona source`);

const losAngelesTerminal = 'b7d32c7e1585d5af3cf3d4291dd323e5d2da30eb';
const losAngelesBase = 'd5f7d1689b784b4930cd9f7d4496ab3148929162';
const losAngelesRoutes = postArizonaLosAngelesRoutes;
assert.equal(git(['rev-parse', `${losAngelesTerminal}^1`]).toString('utf8').trim(), losAngelesBase, 'the Los Angeles terminal has the exact Arizona parent');
assert.equal(git(['rev-parse', `${losAngelesTerminal}^{tree}`]).toString('utf8').trim(), 'ba6cff9ee753c9db53e5da79590021f4fe9af63d', 'the Los Angeles source terminal tree matches the verified source');
assert.equal(git(['merge-base', losAngelesBase, losAngelesTerminal]).toString('utf8').trim(), losAngelesBase, 'the Los Angeles source descends from its exact base');
const changedLosAngelesHtml = git(['diff', '--name-only', losAngelesBase, losAngelesTerminal, '--', 'usa/los-angeles'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedLosAngelesHtml, losAngelesRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Los Angeles source changes exactly four existing English body paths');
for (const route of losAngelesRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${losAngelesTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches exact Los Angeles source`);

const bostonTerminal = 'b4045e0b7265cc6c3ceb8f16acb3e591d4b87eda';
const bostonBase = 'bc08029d36448bcb9d0a42a986caddec883b3d1f';
const bostonRoutes = postLosAngelesBostonRoutes;
assert.equal(git(['rev-parse', `${bostonTerminal}^1`]).toString('utf8').trim(), bostonBase, 'the Boston source terminal has the exact disclosed source base as parent');
assert.equal(git(['rev-parse', `${bostonTerminal}^{tree}`]).toString('utf8').trim(), '4cd883f1ba0c53bd91539e92ad82e0acaf5afd39', 'the Boston source terminal tree matches the verified source');
assert.equal(git(['merge-base', bostonBase, bostonTerminal]).toString('utf8').trim(), bostonBase, 'the Boston source terminal descends from its exact task base');
const changedBostonHtml = git(['diff', '--name-only', bostonBase, bostonTerminal, '--', 'usa/boston'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedBostonHtml, bostonRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the direct Boston commit changes exactly the four authorized Boston English bodies');
for (const route of bostonRoutes) {
  const relative = `${route.slice(1)}index.html`;
  assert.equal(readFromGit(`${bostonBase}:${relative}`).toString('utf8'), readFromGit(`${integrationSprintBaseline}:${relative}`).toString('utf8'), `${route}: the Boston task base and integration baseline have the same pre-refresh body`);
  assert.equal(fs.readFileSync(path.join(root, relative), 'utf8'), readFromGit(`${bostonTerminal}:${relative}`).toString('utf8'), `${route}: integrated body matches exact Boston source`);
}

const sanDiegoTerminal = 'bc08029d36448bcb9d0a42a986caddec883b3d1f';
const sanDiegoBase = 'b7d32c7e1585d5af3cf3d4291dd323e5d2da30eb';
const sanDiegoRoutes = postLosAngelesSanDiegoRoutes;
assert.equal(git(['rev-parse', `${sanDiegoTerminal}^1`]).toString('utf8').trim(), sanDiegoBase, 'the San Diego source terminal has the exact Los Angeles source parent');
assert.equal(git(['rev-parse', `${sanDiegoTerminal}^{tree}`]).toString('utf8').trim(), '2ca0dc7e9ea5ecd5d64824775848bfdd9154f603', 'the San Diego source terminal tree matches the verified source');
assert.equal(git(['merge-base', sanDiegoBase, sanDiegoTerminal]).toString('utf8').trim(), sanDiegoBase, 'the San Diego source terminal descends from the exact Los Angeles source');
const changedSanDiegoHtml = git(['diff', '--name-only', sanDiegoBase, sanDiegoTerminal, '--', 'usa/san-diego'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedSanDiegoHtml, sanDiegoRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the San Diego source changes exactly four existing English bodies');
for (const route of sanDiegoRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${sanDiegoTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches exact San Diego source`);

const phongNhaTerminal = '01144e03bf6173f468cb836d0899163e1a98c4ea';
const phongNhaBase = 'cc6de926e49c81324d09cb02590366fefbd8a4eb';
const phongNhaRoutes = postIntegrationPhongNhaRoutes;
assert.equal(git(['rev-parse', `${phongNhaTerminal}^1`]).toString('utf8').trim(), phongNhaBase, 'the Phong Nha source terminal has the exact Mui Ne source parent');
assert.equal(git(['rev-parse', `${phongNhaTerminal}^{tree}`]).toString('utf8').trim(), '97cf53203b697ca824ba86dbffd86b8ae9af5d10', 'the Phong Nha source terminal tree matches the verified source');
assert.equal(git(['merge-base', phongNhaBase, phongNhaTerminal]).toString('utf8').trim(), phongNhaBase, 'the Phong Nha source descends from the exact Mui Ne source');
const changedPhongNhaHtml = git(['diff', '--name-only', phongNhaBase, phongNhaTerminal, '--', 'vietnam/phong-nha-ke-bang'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedPhongNhaHtml, phongNhaRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Phong Nha source changes exactly four existing English bodies');
assert(!phongNhaRoutes.includes('/vietnam/phong-nha-ke-bang/paradise-tien-son-caves/'), 'the previously counted Paradise/Tien Son route is not recounted');
for (const route of phongNhaRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${phongNhaTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches exact Phong Nha source`);

const broomeTasmaniaTerminal = '335f19b4f3cbc69038ff943a1beec7049c135a2c';
const broomeTasmaniaBase = '8baea8a720ebd88ff6834e60235e29c03343c4c4';
const broomeTasmaniaRoutes = postIntegrationBroomeTasmaniaRoutes;
assert.equal(git(['rev-parse', `${broomeTasmaniaTerminal}^1`]).toString('utf8').trim(), broomeTasmaniaBase, 'the Broome/Tasmania source terminal has the exact Broome source parent');
assert.equal(git(['rev-parse', `${broomeTasmaniaTerminal}^{tree}`]).toString('utf8').trim(), '57308daba879626f870eea6c62a57879151ede00', 'the Broome/Tasmania source terminal tree matches the verified source');
assert.equal(git(['merge-base', broomeTasmaniaBase, broomeTasmaniaTerminal]).toString('utf8').trim(), broomeTasmaniaBase, 'the Broome/Tasmania source descends from the exact Broome source');
const changedBroomeTasmaniaHtml = git(['diff', '--name-only', broomeTasmaniaBase, broomeTasmaniaTerminal, '--', 'australia/broome-kimberley', 'australia/tasmania'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedBroomeTasmaniaHtml, broomeTasmaniaRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Broome/Tasmania source changes exactly four existing English bodies');
for (const route of broomeTasmaniaRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${broomeTasmaniaTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches exact Broome/Tasmania source`);

const margaretRemainingTerminal = '5578d6da740ca9d7ec07fca6c7eed65cc67868e8';
const margaretRemainingBase = 'a99fbe9fe996ccedbac42b1b9386447a11403854';
const margaretRemainingRoutes = postIntegrationMargaretRemainingRoutes;
assert.equal(git(['rev-parse', `${margaretRemainingTerminal}^1`]).toString('utf8').trim(), margaretRemainingBase, 'the Margaret remaining source terminal has the exact Alps/Margaret parent');
assert.equal(git(['rev-parse', `${margaretRemainingTerminal}^{tree}`]).toString('utf8').trim(), 'c46575bcc9e3e10db68863a79919f8878c29d04f', 'the Margaret remaining source terminal tree matches the reviewed source');
assert.equal(git(['merge-base', margaretRemainingBase, margaretRemainingTerminal]).toString('utf8').trim(), margaretRemainingBase, 'the Margaret remaining source descends from its exact base');
const changedMargaretRemainingHtml = git(['diff', '--name-only', margaretRemainingBase, margaretRemainingTerminal, '--', 'australia/margaret-river-southwest'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedMargaretRemainingHtml, margaretRemainingRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Margaret remaining source changes exactly its four selected existing English bodies');
for (const route of margaretRemainingRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${margaretRemainingTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches exact Margaret remaining source`);



function parseSitemap(xml) {
  return new Map([...xml.matchAll(/<url><loc>(.*?)<\/loc><lastmod>(.*?)<\/lastmod>.*?<\/url>/gs)]
    .map(([, url, date]) => [url, date]));
}

const baselineSitemap = parseSitemap(readFromGit(`${integrationSprintBaseline}:sitemap.xml`).toString('utf8'));
const currentSitemap = parseSitemap(fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8'));
assert.equal(baselineSitemap.size, 4560);
assert.equal(currentSitemap.size, 4560);
assert.deepEqual(new Set(currentSitemap.keys()), new Set(baselineSitemap.keys()), 'the exact 4,560-URL set is unchanged');
const changedSitemapUrls = [...currentSitemap]
  .filter(([url, date]) => baselineSitemap.get(url) !== date)
  .map(([url]) => url);
const prefixes = ['', '/zh', '/ja', '/ko', '/th'];
const expectedChangedSitemapPaths = localizedIntegrationSitemapRoutes(prefixes);
for (const prefix of prefixes) {
  for (const route of postIntegrationHawaiiRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postHawaiiNewOrleansRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postIntegrationCanberraRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postIntegrationAlpsMargaretRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postNewOrleansAtlantaRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postAtlantaFloridaRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postHaLongHCMCIntegrationRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postMekongDeltaIntegrationRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postNewEnglandIntegrationRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postIntegrationMargaretRemainingRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postIntegrationBroomeRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postIntegrationMuiNeRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of followingVietnamDaLatRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postNewEnglandArizonaRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postArizonaLosAngelesRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postLosAngelesBostonRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postLosAngelesSanDiegoRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postIntegrationPhongNhaRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postIntegrationPhuQuocRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of followingVietnamNhaTrangRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of [...followingVietnamAfterNhaTrangRoutes, ...followingVietnamSouthernGapsRoutes, ...followingVietnamBayGapsRoutes, ...followingVietnamCavesIslandsGapsRoutes]) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postIntegrationBroomeTasmaniaRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postAustraliaFinalRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postFloridaChicagoRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postIntegrationAustraliaRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
  for (const route of postBostonOverviewJuneauRoutes) expectedChangedSitemapPaths.add(`${prefix}${route}`);
}
assert.equal(changedSitemapUrls.length, 2080);
assert.deepEqual(
  new Set(changedSitemapUrls.map((url) => new URL(url).pathname)),
  expectedChangedSitemapPaths,
  'only the exact integrated routes and twenty separately counted four-route follow-on batches have updated sitemap dates across five editions'
);
for (const url of changedSitemapUrls) {
  const route = new URL(url).pathname;
  const expectedDate = [...alpsMargaretRoutes, ...postAtlantaFloridaRoutes, ...postFloridaChicagoRoutes, ...hcmcRoutes, ...mekongRoutes, ...postNewEnglandIntegrationRoutes, ...postIntegrationMargaretRemainingRoutes, ...followingVietnamDaLatRoutes, ...postNewEnglandArizonaRoutes, ...postArizonaLosAngelesRoutes, ...postIntegrationBroomeRoutes, ...postIntegrationMuiNeRoutes, ...postLosAngelesBostonRoutes, ...postLosAngelesSanDiegoRoutes, ...postIntegrationPhongNhaRoutes, ...postIntegrationPhuQuocRoutes, ...followingVietnamNhaTrangRoutes, ...followingVietnamAfterNhaTrangRoutes, ...followingVietnamSouthernGapsRoutes, ...followingVietnamBayGapsRoutes, ...followingVietnamCavesIslandsGapsRoutes, ...postIntegrationBroomeTasmaniaRoutes, ...postBostonOverviewJuneauRoutes, ...postAustraliaFinalRoutes].some((candidate) => route.endsWith(candidate)) ? '2026-10-13' : '2026-10-12';
  assert.equal(currentSitemap.get(url), expectedDate, `${url}: current sitemap date`);
}
const alpsMargaretBaseSitemap = parseSitemap(readFromGit(`${alpsMargaretBase}:sitemap.xml`).toString('utf8'));
const changedAlpsMargaretDates = [...currentSitemap]
  .filter(([url, date]) => alpsMargaretRoutes.some((route) => new URL(url).pathname.endsWith(route)) && alpsMargaretBaseSitemap.get(url) !== date)
  .map(([url]) => new URL(url).pathname).sort();
assert.deepEqual(changedAlpsMargaretDates, prefixes.flatMap((prefix) => alpsMargaretRoutes.map((route) => `${prefix}${route}`)).sort(), 'exactly four Alps/Margaret dates across five editions changed from the exact Canberra base');
const taskBaseSitemap = parseSitemap(readFromGit(`${taskBase}:sitemap.xml`).toString('utf8'));
const changedTaskBaseNewOrleansUrls = [...currentSitemap]
  .filter(([url, date]) => newOrleansRoutes.some((route) => new URL(url).pathname.endsWith(route)) && taskBaseSitemap.get(url) !== date)
  .map(([url]) => new URL(url).pathname).sort();
assert.deepEqual(changedTaskBaseNewOrleansUrls, prefixes.flatMap((prefix) => newOrleansRoutes.map((route) => `${prefix}${route}`)).sort(), 'exactly the four New Orleans dates across all five editions changed from the task base');
const haLongBaseSitemap = parseSitemap(readFromGit(`${haLongBase}:sitemap.xml`).toString('utf8'));
const changedHaLongDates = [...currentSitemap]
  .filter(([url, date]) => haLongRoutes.some((route) => new URL(url).pathname.endsWith(route)) && haLongBaseSitemap.get(url) !== date)
  .map(([url]) => new URL(url).pathname).sort();
assert.deepEqual(changedHaLongDates, prefixes.flatMap((prefix) => haLongRoutes.map((route) => `${prefix}${route}`)).sort(), 'exactly four Ha Long dates across five editions changed from the exact Vietnam base');
const taskBaseAtlantaSitemap = parseSitemap(readFromGit(`${atlantaBase}:sitemap.xml`).toString('utf8'));
const changedTaskBaseAtlantaUrls = [...currentSitemap]
  .filter(([url, date]) => atlantaRoutes.some((route) => new URL(url).pathname.endsWith(route)) && taskBaseAtlantaSitemap.get(url) !== date)
  .map(([url]) => new URL(url).pathname).sort();
assert.deepEqual(changedTaskBaseAtlantaUrls, prefixes.flatMap((prefix) => atlantaRoutes.map((route) => `${prefix}${route}`)).sort(), 'exactly the four selected Atlanta dates across all five editions changed from the exact task base');

const baselineSearch = JSON.parse(readFromGit(`${integrationSprintBaseline}:data/search-index.json`).toString('utf8'));
const currentSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const recordsByUrl = (records) => new Map(records.map((record) => [record.url, record]));
const baselineSearchByUrl = recordsByUrl(baselineSearch);
const currentSearchByUrl = recordsByUrl(currentSearch);
assert.equal(baselineSearch.length, 955);
assert.equal(currentSearch.length, 955);
assert.deepEqual(new Set(currentSearchByUrl.keys()), new Set(baselineSearchByUrl.keys()), 'the English search URL set is unchanged');
const changedSearchRoutes = [...currentSearchByUrl]
  .filter(([url, record]) => !isDeepStrictEqual(record, baselineSearchByUrl.get(url)))
  .map(([url]) => url);
assert.equal(changedSearchRoutes.length, 373);
assert.deepEqual(new Set(changedSearchRoutes), new Set([...integrationSearchRoutes, ...postIntegrationHawaiiRoutes, ...postIntegrationAustraliaRoutes, ...postHawaiiNewOrleansRoutes, ...postIntegrationCanberraRoutes, ...postNewOrleansAtlantaRoutes, ...postIntegrationAlpsMargaretRoutes, ...postAtlantaFloridaRoutes, ...postFloridaChicagoRoutes, ...postNewEnglandIntegrationRoutes, ...postIntegrationMargaretRemainingRoutes, ...postNewEnglandArizonaRoutes, ...postArizonaLosAngelesRoutes, ...postIntegrationBroomeRoutes, ...postIntegrationMuiNeRoutes, ...postLosAngelesBostonRoutes, ...postLosAngelesSanDiegoRoutes, ...postIntegrationPhongNhaRoutes, ...postIntegrationPhuQuocRoutes, ...followingVietnamNhaTrangRoutes, ...followingVietnamAfterNhaTrangRoutes, ...followingVietnamSouthernGapsRoutes, ...followingVietnamBayGapsRoutes, ...followingVietnamCavesIslandsGapsRoutes, ...postIntegrationBroomeTasmaniaRoutes, ...postBostonOverviewJuneauSearchRoutes, ...postAustraliaFinalRoutes]), 'only the exact integrated and disjoint follow-on search groups changed');
const alpsMargaretSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${alpsMargaretTerminal}:data/search-index.json`).toString('utf8')));
for (const route of alpsMargaretRoutes) assert.deepEqual(currentSearchByUrl.get(route), alpsMargaretSourceSearch.get(route), `${route}: exact Alps/Margaret source search record is integrated`);
const haLongSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${haLongTerminal}:data/search-index.json`).toString('utf8')));
for (const route of haLongRoutes) assert.deepEqual(currentSearchByUrl.get(route), haLongSourceSearch.get(route), `${route}: exact Ha Long source search record is integrated`);
const atlantaSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${atlantaTerminal}:data/search-index.json`).toString('utf8')));
for (const route of atlantaRoutes) assert.deepEqual(currentSearchByUrl.get(route), atlantaSourceSearch.get(route), `${route}: exact Atlanta source search record is integrated`);
const floridaSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${floridaTerminal}:data/search-index.json`).toString('utf8')));
for (const route of floridaRoutes) assert.deepEqual(currentSearchByUrl.get(route), floridaSourceSearch.get(route), `${route}: exact Florida source search record is integrated`);
const chicagoSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${chicagoTerminal}:data/search-index.json`).toString('utf8')));
for (const route of chicagoRoutes) assert.deepEqual(currentSearchByUrl.get(route), chicagoSourceSearch.get(route), `${route}: exact Chicago source search record is integrated`);
const hcmcSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${hcmcTerminal}:data/search-index.json`).toString('utf8')));
for (const route of hcmcRoutes) assert.deepEqual(currentSearchByUrl.get(route), hcmcSourceSearch.get(route), `${route}: exact HCMC source search record is integrated`);
const mekongSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${mekongTerminal}:data/search-index.json`).toString('utf8')));
for (const route of mekongRoutes) assert.deepEqual(currentSearchByUrl.get(route), mekongSourceSearch.get(route), `${route}: exact Mekong source search record is integrated`);
const daLatSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${daLatTerminal}:data/search-index.json`).toString('utf8')));
for (const route of followingVietnamDaLatRoutes) assert.deepEqual(currentSearchByUrl.get(route), daLatSourceSearch.get(route), `${route}: exact Da Lat source search record is retained unchanged`);
const arizonaSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${arizonaTerminal}:data/search-index.json`).toString('utf8')));
for (const route of arizonaRoutes) assert.deepEqual(currentSearchByUrl.get(route), arizonaSourceSearch.get(route), `${route}: exact Arizona source search record is integrated`);
const losAngelesSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${losAngelesTerminal}:data/search-index.json`).toString('utf8')));
for (const route of losAngelesRoutes) assert.deepEqual(currentSearchByUrl.get(route), losAngelesSourceSearch.get(route), `${route}: exact Los Angeles source search record is integrated`);
const sanDiegoSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${sanDiegoTerminal}:data/search-index.json`).toString('utf8')));
for (const route of sanDiegoRoutes) assert.deepEqual(currentSearchByUrl.get(route), sanDiegoSourceSearch.get(route), `${route}: exact San Diego source search record is integrated`);
const phongNhaSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${phongNhaTerminal}:data/search-index.json`).toString('utf8')));
for (const route of phongNhaRoutes) assert.deepEqual(currentSearchByUrl.get(route), phongNhaSourceSearch.get(route), `${route}: exact Phong Nha source search record is integrated`);
const broomeTasmaniaSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${broomeTasmaniaTerminal}:data/search-index.json`).toString('utf8')));
for (const route of broomeTasmaniaRoutes) assert.deepEqual(currentSearchByUrl.get(route), broomeTasmaniaSourceSearch.get(route), `${route}: exact Broome/Tasmania source search record is integrated`);
const margaretRemainingSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${margaretRemainingTerminal}:data/search-index.json`).toString('utf8')));
for (const route of margaretRemainingRoutes) assert.deepEqual(currentSearchByUrl.get(route), margaretRemainingSourceSearch.get(route), `${route}: exact Margaret remaining source search record is integrated`);
const broomeTerminal = '8baea8a720ebd88ff6834e60235e29c03343c4c4';
const broomeBase = '5578d6da740ca9d7ec07fca6c7eed65cc67868e8';
assert.equal(git(['rev-parse', `${broomeTerminal}^`]).toString('utf8').trim(), broomeBase, 'the Broome source terminal has the exact Margaret remaining parent');
assert.equal(git(['rev-parse', `${broomeTerminal}^{tree}`]).toString('utf8').trim(), '131a08dd4e49882bbb8b16f5cb36364c9a2d3eeb', 'the Broome source terminal tree matches the reviewed source');
assert.equal(git(['merge-base', broomeBase, broomeTerminal]).toString('utf8').trim(), broomeBase, 'the Broome source descends from its exact base');
const changedBroomeHtml = git(['diff', '--name-only', broomeBase, broomeTerminal, '--', 'australia/broome-kimberley'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedBroomeHtml, postIntegrationBroomeRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Broome source changes exactly four existing English body paths');
for (const route of postIntegrationBroomeRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${broomeTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches exact Broome source`);
const broomeSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${broomeTerminal}:data/search-index.json`).toString('utf8')));
for (const route of postIntegrationBroomeRoutes) assert.deepEqual(currentSearchByUrl.get(route), broomeSourceSearch.get(route), `${route}: exact Broome source search record is integrated`);
const muiNeTerminal = 'cc6de926e49c81324d09cb02590366fefbd8a4eb';
const muiNeBase = '1c54448e4548004d6d012fd12682c33d69fbd25f';
assert.equal(git(['rev-parse', `${muiNeTerminal}^`]).toString('utf8').trim(), muiNeBase, 'the Mui Ne source terminal has the exact requested base parent');
assert.equal(git(['rev-parse', `${muiNeTerminal}^{tree}`]).toString('utf8').trim(), 'be5c32768a72f18d2ac9f8982162112f36502ed2', 'the Mui Ne source terminal tree matches the reviewed source');
assert.equal(git(['merge-base', muiNeBase, muiNeTerminal]).toString('utf8').trim(), muiNeBase, 'the Mui Ne source descends from its exact base');
const changedMuiNeHtml = git(['diff', '--name-only', muiNeBase, muiNeTerminal, '--', 'vietnam/mui-ne-binh-thuan'])
  .toString('utf8').trim().split('\n').filter((file) => file.endsWith('.html')).sort();
assert.deepEqual(changedMuiNeHtml, postIntegrationMuiNeRoutes.map((route) => `${route.slice(1)}index.html`).sort(), 'the Mui Ne source changes exactly four existing English body paths');
for (const route of postIntegrationMuiNeRoutes) assert.equal(fs.readFileSync(path.join(root, `${route.slice(1)}index.html`), 'utf8'), readFromGit(`${muiNeTerminal}:${route.slice(1)}index.html`).toString('utf8'), `${route}: integrated body matches exact Mui Ne source`);
const muiNeSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${muiNeTerminal}:data/search-index.json`).toString('utf8')));
for (const route of postIntegrationMuiNeRoutes) assert.deepEqual(currentSearchByUrl.get(route), muiNeSourceSearch.get(route), `${route}: exact Mui Ne source search record is integrated`);

const bostonSourceSearch = recordsByUrl(JSON.parse(readFromGit(`${bostonTerminal}:data/search-index.json`).toString('utf8')));
for (const route of bostonRoutes) assert.deepEqual(currentSearchByUrl.get(route), bostonSourceSearch.get(route), `${route}: exact Boston source search record is integrated`);

console.log('Integration scope regression passed: 417 exact English bodies (415 source-work bodies plus two separately accounted USA historical paths), 2,080 date changes over 416 routes × five editions, 373 English search changes, and the unchanged 4,560-URL set.');
