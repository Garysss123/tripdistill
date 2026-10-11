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
const potalaChecks = {
  en: {
    forbidden: /official booking portal currently describes real-name reservations|does not sell same-day tickets/i,
    reviewNote: 'official Potala booking portal could not be retrieved in this review',
    uncertaintyNote: 'no booking window, same-day policy, ticket availability or entry is asserted'
  },
  'zh-Hant': {
    forbidden: /實名預約|不販售當日票/,
    reviewNote: '本次審查期間無法取得布達拉宮官方訂票入口',
    uncertaintyNote: '不對預約開放時間、當日售票政策、票券名額或入場作任何聲稱'
  },
  ja: {
    forbidden: /実名予約|当日券は販売しない/,
    reviewNote: 'ポタラ宮の公式予約ポータルは今回の確認時に内容を取得できなかった',
    uncertaintyNote: '予約受付期間、当日販売の方針、チケットの空き状況、入場可否については断定していません'
  },
  ko: {
    forbidden: /실명 예약|당일권은 판매하지 않는다고/,
    reviewNote: '이번 검토에서는 포탈라궁 공식 예약 사이트에 접속할 수 없어',
    uncertaintyNote: '예약 시기, 당일 판매 정책, 티켓 현황 또는 입장 가능 여부를 단정하지 않습니다'
  },
  th: {
    forbidden: /จองโดยใช้ชื่อจริงตามเอกสาร|ไม่มีจำหน่ายบัตรเข้าชมในวันเดียวกัน/,
    reviewNote: 'ในการตรวจสอบครั้งนี้ไม่สามารถเรียกดูพอร์ทัลจองอย่างเป็นทางการของ Potala ได้',
    uncertaintyNote: 'ไม่มีการกล่าวอ้างถึงช่วงเวลาเปิดจอง นโยบายจำหน่ายบัตรในวันเดียวกัน จำนวนบัตรที่ว่าง หรือการได้เข้าชม'
  }
};

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
      const check = potalaChecks[edition.locale];
      assert.doesNotMatch(html, check.forbidden, `${relative} must not retain unverified Potala booking claims`);
      assert.ok(html.includes(check.reviewNote), `${relative} must say the official portal could not be retrieved in this review`);
      assert.ok(html.includes(check.uncertaintyNote), `${relative} must not assert booking windows, same-day policy, availability or entry`);
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

const { guides, retiredImageRecords } = await import(pathToFileURL(path.join(root, 'data/china-expansion-guides.mjs')).href + '?cn14b-regression=1');
const lhasaSource = guides.find((guide) => guide.slug === 'lhasa-tibetan-plateau');
assert.ok(lhasaSource, 'Lhasa source guide must exist');
const potalaChapter = lhasaSource.chapters.find((chapter) => chapter.label === 'POTALA ENTRY');
assert.ok(potalaChapter);
assert.equal(potalaChapter.title, 'Check the live official reservation rules after access is approved');
assert.match(potalaChapter.text, /could not be retrieved during this review/i);
assert.match(potalaChapter.text, /no claim about booking windows, same-day sales, ticket availability or entry/i);
assert.doesNotMatch(potalaChapter.text, /real-name reservations|does not sell same-day tickets/i);
assert.match(lhasaSource.sourceNote, /official Potala booking portal could not be retrieved in this review/i);
assert.match(lhasaSource.sourceNote, /no booking window, same-day policy, ticket availability or entry is asserted/i);
assert.doesNotMatch(lhasaSource.sourceNote, /Potala reservation page.*were reviewed/i);

const distLhasaPages = editions.map((edition) => ({
  edition,
  relative: `${edition.prefix}china/lhasa-tibetan-plateau/index.html`
}));
const distLhasaCount = distLhasaPages.filter(({ relative }) => fs.existsSync(path.join(root, 'dist', relative))).length;
if (distLhasaCount > 0) {
  assert.equal(distLhasaCount, editions.length, 'built output must contain all five Lhasa editions when dist exists');
  for (const { edition, relative } of distLhasaPages) {
    const builtHtml = fs.readFileSync(path.join(root, 'dist', relative), 'utf8');
    const check = potalaChecks[edition.locale];
    assert.doesNotMatch(builtHtml, check.forbidden, `dist/${relative} must not retain unverified Potala booking claims`);
    assert.ok(builtHtml.includes(check.reviewNote), `dist/${relative} must say the official portal could not be retrieved in this review`);
    assert.ok(builtHtml.includes(check.uncertaintyNote), `dist/${relative} must not assert booking windows, same-day policy, availability or entry`);
  }
}

const retirement = retiredImageRecords[0];
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

console.log('China CN14B regressions passed: Potala claims are withdrawn in source and all five rendered editions (including complete dist output when built); the official-live-info caution remains; legacy-image retirement, original SVG rights, Xinjiang photo provenance, search records and five-edition sitemap dates are consistent.');
