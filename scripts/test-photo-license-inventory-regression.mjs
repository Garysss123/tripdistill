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
const yongduamAssetPath = '/assets/images/korea-jeju-yongduam.webp';
const yongduamSourceUrl = 'https://commons.wikimedia.org/wiki/File:%EC%9A%A9%EB%91%90%EC%95%94.jpg';
const hueTombAssetPath = '/assets/images/vietnam-hue-minh-mang-20261008.webp';
const hueTombSourceUrl = 'https://commons.wikimedia.org/wiki/File:Royal_Tomb_of_Minh_Mang_(14720605126).jpg';
const hueTombLicenseUrl = 'https://creativecommons.org/licenses/by-sa/2.0/';
const legacyHueTombAssetPath = '/assets/images/vietnam-hue-minh-mang-tomb.webp';
const legacyHueTombSourceUrl = 'https://commons.wikimedia.org/wiki/File:Minh-Mang-Royal-Tomb.jpg';
const pagePath = path.join(root, 'japan', 'osaka', 'osaka-castle-area', 'index.html');
const artifactPaths = [
  path.join(root, 'reports', 'photo-license-inventory.json'),
  path.join(root, 'reports', 'photo-license-inventory.md')
];
const originalArtifacts = artifactPaths.map((file) => [file, fs.readFileSync(file)]);
const checkedInReport = JSON.parse(originalArtifacts[0][1].toString('utf8'));
const checkedInYongduam = checkedInReport.entries.flatMap((group) => group.sourceRecords).find((record) => record.assetPath === '/assets/images/korea-jeju-yongduam.webp');
assert.ok(checkedInYongduam, 'checked-in inventory must retain the Jeju Yongduam asset record');
assert.equal(checkedInYongduam.sourceUrl, 'https://commons.wikimedia.org/wiki/File:%EC%9A%A9%EB%91%90%EC%95%94.jpg');
assert.equal(checkedInYongduam.sourceTitle, '용두암.jpg');
assert.equal(checkedInYongduam.creator, 'Ahn Beom-jin');
assert.equal(checkedInYongduam.license, 'CC BY-SA 4.0');
assert.ok(checkedInYongduam.editHistory.includes('no further per-image edit details'));

function attrs(node) { return Object.fromEntries((node.attrs || []).map((item) => [item.name, item.value])); }
function findAll(node, predicate, output = []) {
  if (predicate(node)) output.push(node);
  for (const child of node.childNodes || []) findAll(child, predicate, output);
  return output;
}
function textContent(node) {
  if (node.nodeName === '#text') return node.value || '';
  return (node.childNodes || []).map(textContent).join('');
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
  const hueTomb = report.entries.flatMap((group) => group.sourceRecords).find((record) => record.assetPath === hueTombAssetPath);
  assert.ok(hueTomb, 'inventory regeneration must include the new Hue Minh Mang asset');
  assert.equal(hueTomb.sourceUrl, hueTombSourceUrl);
  assert.equal(hueTomb.sourceTitle, 'Royal Tomb of Minh Mang (14720605126).jpg');
  assert.equal(hueTomb.creditLabel, 'Royal Tomb of Minh Mang');
  assert.equal(hueTomb.creator, 'Erwin Verbruggen');
  assert.equal(hueTomb.license, 'CC BY-SA 2.0');
  assert.equal(hueTomb.licenseUrl, hueTombLicenseUrl);
  assert.equal(hueTomb.commercialReuseEligibility, 'permitted_under_source_page_checked_license_terms');
  assert.equal(hueTomb.metadataOrigin, 'structured_data_record');
  assert.equal(hueTomb.verificationStatus, 'source_page_checked');
  assert.equal(hueTomb.verificationDate, '2026-10-08');
  assert.equal(hueTomb.visualReviewStatus, 'visually_reviewed_2026-10-08');
  assert.ok(hueTomb.editHistory.includes('same license version'));
  assert.ok(hueTomb.verificationDetail.includes('25 June 2014'));
  assert.equal(report.unmatchedAssets.some((item) => item.src === hueTombAssetPath), false);
  const legacyHueTomb = report.entries.flatMap((group) => group.sourceRecords).find((record) => record.assetPath === legacyHueTombAssetPath);
  assert.ok(legacyHueTomb, 'inventory must retain the superseded Hue tomb asset record');
  assert.equal(legacyHueTomb.useCount, 0, 'superseded tomb image must not remain in any published page');
  assert.deepEqual(legacyHueTomb.routes, [], 'superseded tomb image must not be mapped to a published route');
  const hueRoutes = [
    'vietnam/hue/',
    'vietnam/hue/imperial-city-citadel/',
    'vietnam/hue/royal-tombs/',
    'vietnam/hue/thien-mu-perfume-river/',
    'vietnam/hue/thanh-toan-rural-loop/',
    'vietnam/hue/bach-ma-national-park/',
    'vietnam/hue/lang-co-lap-an-lagoon/'
  ];
  const hueLocales = [
    { locale: 'en', prefix: '' },
    { locale: 'zh-Hant', prefix: 'zh' },
    { locale: 'ja', prefix: 'ja' },
    { locale: 'ko', prefix: 'ko' },
    { locale: 'th', prefix: 'th' }
  ];
  for (const { locale, prefix } of hueLocales) {
    for (const route of hueRoutes) {
      const document = parse(fs.readFileSync(path.join(root, prefix, route, 'index.html'), 'utf8'));
      const exactCredits = findAll(document, (node) => node.tagName === 'li' && findAll(node, (link) => link.tagName === 'a' && attrs(link).href === hueTombSourceUrl).length > 0);
      assert.equal(exactCredits.length, 1, `${locale} ${route} must expose the exact tomb-photo source once`);
      const credit = exactCredits[0];
      assert.ok(findAll(credit, (link) => link.tagName === 'a' && attrs(link).href === hueTombLicenseUrl).length, `${locale} ${route} must link CC BY-SA 2.0`);
      assert.ok(textContent(credit).includes('CC BY-SA 2.0'), `${locale} ${route} must retain the exact license version`);
      const editNotes = findAll(credit, (node) => node.tagName === 'span' && attrs(node).translate !== 'no');
      assert.equal(editNotes.length, 1, `${locale} ${route} must contain one visible adaptation note`);
      assert.ok(textContent(editNotes[0]).length > 24, `${locale} ${route} must retain a visible edit and share-alike note`);
      const legacyCredits = findAll(document, (node) => node.tagName === 'li' && findAll(node, (link) => link.tagName === 'a' && attrs(link).href === legacyHueTombSourceUrl).length > 0);
      assert.equal(legacyCredits.length, 0, `${locale} ${route} must not expose the superseded tomb photo`);
    }
  }
  for (const route of ['vietnam/hue/thanh-toan-rural-loop/', 'vietnam/hue/bach-ma-national-park/', 'vietnam/hue/lang-co-lap-an-lagoon/']) {
    const document = parse(fs.readFileSync(path.join(root, route, 'index.html'), 'utf8'));
    const bodyText = textContent(findAll(document, (node) => node.tagName === 'body')[0]);
    assert.ok(bodyText.includes('Editorial review: 8 October 2026'), `${route} must show the current substantive editorial review date`);
    const schema = findAll(document, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json').flatMap((node) => {
      try { const parsed = JSON.parse(textContent(node)); return parsed['@graph'] || [parsed]; } catch { return []; }
    });
    const article = schema.find((item) => item['@type'] === 'Article');
    assert.equal(article?.dateModified, '2026-10-08', `${route} substantive rewrite must advance Article.dateModified`);
  }
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
  const yongduam = report.entries.flatMap((group) => group.sourceRecords).find((record) => record.assetPath === yongduamAssetPath);
  assert.ok(yongduam, 'inventory regeneration must retain the Jeju Yongduam asset record');
  assert.equal(yongduam.sourceUrl, yongduamSourceUrl, 'Yongduam pixels must not inherit the separate Seongsan photo credit');
  assert.equal(yongduam.sourceTitle, '용두암.jpg', 'inventory should preserve the exact Commons original title');
  assert.equal(yongduam.creator, 'Ahn Beom-jin');
  assert.equal(yongduam.license, 'CC BY-SA 4.0');
  assert.equal(yongduam.licenseUrl, 'https://creativecommons.org/licenses/by-sa/4.0/');
  assert.equal(yongduam.commercialReuseEligibility, 'permitted_under_source_page_checked_license_terms');
  assert.equal(yongduam.metadataOrigin, 'explicit_asset_credit_match');
  assert.equal(yongduam.verificationStatus, 'source_page_checked');
  assert.equal(yongduam.verificationDate, '2026-10-07');
  assert.equal(yongduam.visualReviewStatus, 'visually_reviewed_2026-10-07');
  assert.ok(yongduam.verificationDetail.includes('안범진'), 'verification note should retain the Commons author name');
  assert.ok(yongduam.editHistory.includes('Jeju hub states'), 'image edits should follow the site disclosure without claiming an unsupported crop');
  assert.equal(yongduam.creditMatchNote.includes('separate Seongsan Ilchulbong photo credit'), true);
  assert.equal(yongduam.altTexts.some((alt) => /Yongduam/i.test(alt)), true, 'the image alternatives must identify Yongduam, not Seongsan');
  const localizedJejuRoutes = [
    { locale: 'en', prefix: '' },
    { locale: 'zh-Hant', prefix: 'zh' },
    { locale: 'ja', prefix: 'ja' },
    { locale: 'ko', prefix: 'ko' },
    { locale: 'th', prefix: 'th' }
  ];
  const sourceAltKeys = {
    hub: "Dark volcanic rock and waves around Yongduam on Jeju's north coast",
    guide: 'Dark volcanic rock and waves around Yongduam on the north coast of Jeju'
  };
  for (const { locale, prefix } of localizedJejuRoutes) {
    const translations = locale === 'en'
      ? null
      : JSON.parse(fs.readFileSync(path.join(root, 'data', 'i18n', 'reviewed', locale, '11-jeju.json'), 'utf8'));
    const target = (key) => translations ? (translations.translations || translations)[key] : key;
    for (const [segment, route] of [['hub', 'south-korea/jeju/'], ['guide', 'south-korea/jeju/jeju-city-yongduam/']]) {
      const pagePath = path.join(root, prefix, route, 'index.html');
      const document = parse(fs.readFileSync(pagePath, 'utf8'));
      const expectedAlt = target(sourceAltKeys[segment]);
      assert.ok(expectedAlt, `${locale} must have a reviewed ${segment} alt string`);
      const image = findAll(document, (node) => node.tagName === 'img' && attrs(node).src === yongduamAssetPath);
      assert.equal(image.length, 1, `${locale} ${route} must contain exactly one Yongduam image`);
      assert.equal(attrs(image[0]).alt, expectedAlt, `${locale} ${route} must describe the actual Yongduam image`);
      const exactSourceCredit = findAll(document, (node) => node.tagName === 'li' && findAll(node, (link) => link.tagName === 'a' && attrs(link).href === yongduamSourceUrl).length > 0);
      assert.equal(exactSourceCredit.length, 1, `${locale} ${route} must link the exact Yongduam Commons file page`);
      const creditText = textContent(exactSourceCredit[0]);
      assert.ok(creditText.includes('Ahn Beom-jin'), `${locale} ${route} must retain the credited photographer`);
      assert.ok(creditText.includes('CC BY-SA 4.0'), `${locale} ${route} must retain the declared license version`);
    }
  }
  assert.equal(report.countInterpretation.includes('do not count pages never researched'), true);
  console.log('Photo inventory regression passed: Osaka Castle sakura, Jeju Yongduam and the new Hue Minh Mang image retain source/creator/license records; all 35 Hue locale routes show the replacement image credit, the superseded image is absent, and three rewritten siblings carry the October editorial date.');
} finally {
  // The audit command is read-only with respect to committed generated reports.
  for (const [file, content] of originalArtifacts) fs.writeFileSync(file, content);
}
