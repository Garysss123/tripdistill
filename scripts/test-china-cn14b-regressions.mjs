#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parse } from 'parse5';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const oldAsset = '/assets/images/china-destination-lhasa.webp';
const oldSource = 'https://commons.wikimedia.org/wiki/File:Potala_Palace_HQ.jpg';
const diagramAsset = '/assets/images/china-lhasa-preparation.svg';
const xinjiangAsset = '/assets/images/china-destination-xinjiang.webp';
const xinjiangSource = 'https://commons.wikimedia.org/wiki/File:Hëytgah_Mosque,_Kashi_(20230923100109).jpg';
const routes = ['/china/', '/china/lhasa-tibetan-plateau/', '/china/xinjiang-corridor/'];
const editions = [
  { locale: 'en', prefix: '' },
  { locale: 'zh-Hant', prefix: 'zh/' },
  { locale: 'ja', prefix: 'ja/' },
  { locale: 'ko', prefix: 'ko/' },
  { locale: 'th', prefix: 'th/' }
];

function attrs(node) { return Object.fromEntries((node.attrs || []).map(({ name, value }) => [name, value])); }
function findAll(node, predicate, output = []) {
  if (predicate(node)) output.push(node);
  for (const child of node.childNodes || []) findAll(child, predicate, output);
  return output;
}

for (const edition of editions) {
  for (const route of routes) {
    const relative = `${edition.prefix}${route.slice(1)}index.html`;
    const html = fs.readFileSync(path.join(root, relative), 'utf8');
    assert.ok(!html.includes(oldAsset), `${relative} must not display the retired Lhasa photo`);
    assert.ok(!html.includes(oldSource), `${relative} must not retain a misleading live Lhasa photo credit`);
    if (route === '/china/' || route === '/china/lhasa-tibetan-plateau/') {
      assert.ok(html.includes(diagramAsset), `${relative} must use the original Lhasa planning schematic`);
    }
    if (route === '/china/lhasa-tibetan-plateau/') {
      const links = findAll(parse(html), (node) => node.tagName === 'a').map(attrs);
      assert.ok(links.some((link) => link.href === 'https://tripdistill.com/assets/images/china-lhasa-preparation.svg'), `${relative} must visibly link the original diagram source`);
      assert.ok(links.some((link) => link.href === 'https://tripdistill.com/terms-of-use/'), `${relative} must visibly state the reuse terms`);
      if (edition.locale === 'en') {
        assert.doesNotMatch(html, /official booking portal currently describes real-name reservations|does not sell same-day tickets/i, `${relative} must not assert Potala booking rules that could not be verified`);
        assert.match(html, /official Potala booking portal could not be retrieved in this review/i, `${relative} must tell readers to verify the live official portal`);
      }
    }
    if (route === '/china/xinjiang-corridor/') {
      const document = parse(html);
      const image = findAll(document, (node) => node.tagName === 'img' && attrs(node).src === xinjiangAsset);
      assert.equal(image.length, 1, `${relative} must show the documented Kashgar asset once`);
      const links = findAll(document, (node) => node.tagName === 'a').map(attrs);
      assert.ok(links.some((link) => link.href === xinjiangSource), `${relative} must link the exact Commons source`);
      assert.ok(links.some((link) => link.href === 'https://creativecommons.org/licenses/by-sa/4.0/'), `${relative} must link CC BY-SA 4.0`);
      assert.match(html, /N509FZ/);
      assert.match(html, /CC BY-SA 4\.0/);
      if (edition.locale === 'en') assert.match(html, /same CC BY-SA 4\.0 license/i);
    }
  }
}

const retirement = (await import(pathToFileURL(path.join(root, 'data/china-expansion-guides.mjs')).href + '?cn14b-regression=1')).retiredImageRecords[0];
assert.equal(retirement.src, oldAsset);
assert.equal(retirement.license, null, 'the old Commons label must not become an inventory license claim');
assert.equal(retirement.inventoryStatus, 'unused');
assert.match(retirement.retirementNote, /deletion nomination opened 2026-06-04/i);
assert.match(retirement.retirementNote, /not treated as permission/i);
assert.equal(crypto.createHash('sha1').update(fs.readFileSync(path.join(root, oldAsset.slice(1)))).digest('hex'), retirement.localSha1);

const report = JSON.parse(fs.readFileSync(path.join(root, 'reports/photo-license-inventory.json'), 'utf8'));
const records = report.entries.flatMap((group) => group.sourceRecords);
const retired = records.find((record) => record.assetPath === oldAsset);
assert.ok(retired, 'inventory must preserve the legacy Lhasa asset record');
assert.equal(retired.inventoryStatus, 'unused');
assert.equal(retired.useCount, 0);
assert.deepEqual(retired.routes, []);
assert.equal(retired.license, null);
assert.equal(retired.verificationStatus, 'source_page_checked');
assert.equal(retired.verificationDate, '2026-10-11');
assert.match(retired.verificationDetail, /unresolved deletion nomination/i);

const diagram = records.find((record) => record.assetPath === diagramAsset);
assert.ok(diagram, 'inventory must include the code-authored SVG');
assert.equal(diagram.assetType, 'original-planning-diagram');
assert.equal(diagram.inventoryStatus, 'used');
assert.ok(diagram.useCount >= 2, 'diagram should appear on the Lhasa guide and China hub');
assert.equal(diagram.license, null, 'the original diagram must not claim a public license');
assert.equal(diagram.rightsStatus, 'Project original; no separate reuse license declared');
assert.equal(diagram.visualReviewStatus, 'visually_reviewed_2026-10-11');
assert.match(diagram.verificationDetail, /not a geographic map/i);

const xinjiang = records.find((record) => record.assetPath === xinjiangAsset);
assert.ok(xinjiang, 'inventory must include the Xinjiang image');
assert.equal(xinjiang.sourceUrl, xinjiangSource);
assert.equal(xinjiang.sourceTitle, 'File:Hëytgah Mosque, Kashi (20230923100109).jpg');
assert.equal(xinjiang.creator, 'N509FZ');
assert.equal(xinjiang.sourcePhotoDate, '2023-09-23');
assert.equal(xinjiang.license, 'CC BY-SA 4.0');
assert.equal(xinjiang.licenseUrl, 'https://creativecommons.org/licenses/by-sa/4.0/');
assert.equal(xinjiang.verificationStatus, 'source_page_checked');
assert.equal(xinjiang.verificationDate, '2026-10-11');
assert.equal(xinjiang.visualReviewStatus, 'visually_reviewed_2026-10-11');
assert.match(xinjiang.verificationDetail, /4,990 × 3,327/);
assert.match(xinjiang.editHistory, /shared under CC BY-SA 4\.0/);

const search = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
for (const route of routes.slice(1)) assert.ok(search.some((item) => item.url === route && item.title && item.summary), `search index missing ${route}`);

for (const sitemapFile of ['sitemap.xml', 'dist/sitemap.xml']) {
  if (!fs.existsSync(path.join(root, sitemapFile))) continue;
  const sitemap = fs.readFileSync(path.join(root, sitemapFile), 'utf8');
  const recordsByRoute = new Map([...sitemap.matchAll(/<url><loc>https:\/\/tripdistill\.com([^<]*)<\/loc><lastmod>([^<]*)<\/lastmod>/g)].map(([, route, date]) => [route, date]));
  for (const route of routes) {
    for (const edition of editions) {
      const localized = edition.prefix ? `/${edition.prefix}${route.slice(1)}` : route;
      assert.equal(recordsByRoute.get(localized), '2026-10-11', `${sitemapFile} lastmod mismatch for ${localized}`);
    }
  }
}

console.log('China CN14B regressions passed: legacy image has no live HTML references; retirement/inventory rights status, original SVG, Xinjiang source/rights, search records and five-edition sitemap dates are consistent.');
