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
const victoriaImageRecords = [
  { assetPath: '/assets/images/canada-victoria-south-island-inner-harbour-james-bay.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Inner_Harbour_and_British_Columbia_Parliament_Buildings,_Victoria,_at_dusk_20240827_1.jpg', creator: 'DXR', license: 'CC BY-SA 4.0', sourceDate: '2024-08-27' },
  { assetPath: '/assets/images/canada-victoria-south-island-butchart-saanich.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Butchart_Gardens_-_Victoria,_British_Columbia_(28938334672).jpg', creator: 'Fyre Mael', license: 'CC BY 2.0', sourceDate: '2015-06-26' }
];
const thailandImageRecords = [
  { assetPath: '/assets/images/thailand-wat-arun-river.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Wat_Arun_across_Chao_Phraya_River.jpg', sourceDate: '2016-06-19', license: 'CC BY-SA 4.0' },
  { assetPath: '/assets/images/thailand-wat-arun-sunset.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sunset_view_of_Wat_Arun_in_Bangkok.jpg', sourceDate: '2024-10-22', license: 'CC BY-SA 4.0' },
  { assetPath: '/assets/images/thailand-grand-palace.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Temple_of_the_Emerald_Buddha.jpg', sourceDate: '2019-09-29', license: 'CC BY-SA 4.0' },
  { assetPath: '/assets/images/thailand-phra-athit.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Phra_Athit_Road_-_2017-01-26_(001).jpg', sourceDate: '2017-01-26', license: 'CC0 1.0' },
  { assetPath: '/assets/images/thailand-yaowarat-night.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Yaowarat_Road_at_night.jpg', sourceDate: '2018-05-10', license: 'CC BY-SA 4.0' },
  { assetPath: '/assets/images/thailand-siam-skyline.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bangkok_skyline_at_sunset_from_Siam_BTS_Skytrain_station,_Bangkok,_Thailand.jpg', sourceDate: '2010-01-20', license: 'CC BY 4.0' },
  { assetPath: '/assets/images/thailand-sukhumvit-night.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Night_Panorama_of_Sukhumvit,_Bangkok.jpg', sourceDate: '2018-11-24', license: 'CC BY-SA 4.0' },
  { assetPath: '/assets/images/thailand-lumphini.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lumpini_Park,_Bangkok.jpg', sourceDate: '2006-10-02', license: 'Public domain' },
  { assetPath: '/assets/images/thailand-khlong-bang-luang.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mouth_of_Khlong_Bangkok_Yai.jpg', sourceDate: '2021-02-13', license: 'CC BY-SA 4.0' }
];
const koreaPhotoRecords = [
  { assetPath: '/assets/images/korea-bukchon-blue-hour.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bukchon-ro_11-gil_street_with_hanok_houses_at_blue_hour_in_Bukchon_Hanok_Village_Seoul.jpg', creator: 'Basile Morin', license: 'CC BY-SA 4.0', sourceDate: '2024-06-03' },
  { assetPath: '/assets/images/korea-gyedong-alley.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gyedong-gil_street_with_climbing_plants_at_golden_hour_in_Seoul_South_Korea.jpg', creator: 'Basile Morin', license: 'CC BY-SA 4.0', sourceDate: '2024-06-03' },
  { assetPath: '/assets/images/korea-gwanghwamun-night.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nightview_of_the_Gwanghwamun_Square_2024.jpg', creator: 'Seoul Tourism Organization', license: 'KOGL Type 1', sourceDate: '2024-12-11' },
  { assetPath: '/assets/images/korea-busan-biff-night.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:BIFF_Square_at_night.jpg', creator: 'Christophe95', license: 'CC BY-SA 4.0', sourceDate: '2018-09-27' },
  { assetPath: '/assets/images/korea-busan-dongbaek.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Busan_at_dusk._View_of_nurimaru_APEC_house_from_dongbaekseom_lighthouse.jpg', creator: 'IsouM', license: 'CC BY-SA 4.0', sourceDate: '2018-10-11' }
];
const chiangMaiImageRecords = [
  { assetPath: '/assets/images/thailand-chiang-mai-old-city.webp', sourceDate: '2017-11-05', license: 'CC BY-SA 4.0' },
  { assetPath: '/assets/images/thailand-chiang-mai-wat-pha-lat.webp', sourceDate: '2014-05-24', license: 'CC BY-SA 3.0' },
  { assetPath: '/assets/images/thailand-chiang-mai-ping-river.webp', sourceDate: '2018-09-06', license: 'CC BY-SA 4.0' }
];
const reviewedChiangMaiImageRecords = [
  { assetPath: '/assets/images/thailand-chiang-mai-doi-inthanon.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Wild_Himalayan_Cherry_blossoms_and_mountain_silhouette_at_Doi_Inthanon.jpg', creator: 'Nnthurber', license: 'CC BY-SA 4.0', sourcePhotoDate: null },
  { assetPath: '/assets/images/thailand-chiang-mai-mae-kampong.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mae_Kum_Pong_01.jpg', creator: 'LannaPhoto', license: 'CC BY-SA 3.0', sourcePhotoDate: null },
  { assetPath: '/assets/images/thailand-chiang-mai-one-nimman-street-20261008.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:One_Nimman_-_One_Street_P_20171220_130152.jpg', creator: 'FredTC', license: 'CC BY-SA 4.0', sourcePhotoDate: '2017-12-20' }
];
const newChiangMaiImageRecords = [
  { assetPath: '/assets/images/thailand-chiang-mai-warorot.webp', route: 'thailand/chiang-mai/chang-moi-warorot/', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Warorot_market_4.jpg', sourceTitle: 'File:Warorot market 4.jpg', creator: 'Christophe95', license: 'CC BY-SA 4.0', sourcePhotoDate: '2018-09-06' },
  { assetPath: '/assets/images/thailand-chiang-mai-mae-rim.webp', route: 'thailand/chiang-mai/mae-rim-mae-sa/', sourceUrl: 'https://commons.wikimedia.org/wiki/File:View_of_Mae_Sa_Valley,_Chiang_Mai,_Thailand.jpg', sourceTitle: 'File:View of Mae Sa Valley, Chiang Mai, Thailand.jpg', creator: 'VN.NguyenDucDuy', license: 'CC BY-SA 4.0', sourcePhotoDate: null }
];
const danangImageRecords = [
  { assetPath: '/assets/images/vietnam-da-nang-han-river.webp', sourceDate: '2023-08-19' },
  { assetPath: '/assets/images/vietnam-da-nang-marble-mountains.webp', sourceDate: '2024-08-01' },
  { assetPath: '/assets/images/vietnam-da-nang-my-khe.webp', sourceDate: '2018-07-30' },
  { assetPath: '/assets/images/vietnam-da-nang-son-tra.webp', sourceDate: '2011-05-14' },
  { assetPath: '/assets/images/vietnam-hoi-an-ancient-town.webp', sourceDate: '2020-01-22' },
  { assetPath: '/assets/images/vietnam-my-son-sanctuary.webp', sourceDate: '2024-08-02' }
];
const removedUnverifiedVictoriaAsset = '/assets/images/canada-victoria-south-island-sooke-juan-de-fuca.webp';
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
  const similan = report.entries.flatMap((group) => group.sourceRecords).find((record) => record.assetPath === '/assets/images/thailand-andaman-similan.webp');
  assert.ok(similan, 'inventory regeneration must include the Andaman Similan image');
  assert.equal(similan.sourceUrl, 'https://commons.wikimedia.org/wiki/File:Ko_similan_panorama_from_sailboat_rock.jpg');
  assert.equal(similan.creator, 'Sgroey');
  assert.equal(similan.license, 'CC BY 4.0');
  assert.equal(similan.sourcePhotoDate, null, 'the Commons/EXIF date conflict must remain unresolved');
  assert.equal(similan.visualReviewStatus, 'visually_reviewed_2026-10-09');
  assert.equal(similan.verificationStatus, 'source_page_checked');
  assert.ok(similan.rawVisibleCredits.some((credit) => credit.includes('Sgroey') && !credit.includes('Budelli')));
  assert.equal(report.counts.activeMissingSourceCreditMatch, 0, 'all currently referenced assets have a source, creator and license match');
  assert.equal(report.counts.unreferencedMissingSourceCreditMatch, 24, 'the remaining unmatched records are unused assets');
  assert.equal(report.counts.usedAssetsWithoutIndependentSourcePageCheck, 593, 'nine newly checked Andaman Commons sources reduce the unverified-used-asset count and remain separate from unused incomplete records');
  assert.equal(report.counts.openCreditReviewCount, 0, 'no N Seoul Tower source-to-image question remains open after pixel review');
  const summary = fs.readFileSync(artifactPaths[1], 'utf8');
  assert.ok(summary.includes('Open source-to-image reviews: none.'), 'the Markdown inventory must agree that no source-to-image review remains open');
  assert.ok(!summary.includes('N Seoul Tower subject description conflicts'), 'the resolved N Seoul Tower mismatch must not reappear in the Markdown report');
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
  for (const image of victoriaImageRecords) {
    const record = report.entries.flatMap((group) => group.sourceRecords).find((item) => item.assetPath === image.assetPath);
    assert.ok(record, `Victoria photo inventory must retain ${image.assetPath}`);
    assert.equal(record.sourceUrl, image.sourceUrl);
    assert.equal(record.creator, image.creator);
    assert.equal(record.license, image.license);
    assert.equal(record.verificationStatus, 'source_page_checked');
    assert.equal(record.verificationDate, '2026-10-08');
    assert.equal(record.sourcePhotoDate, image.sourceDate, 'Victoria inventory must retain the source photograph date');
    assert.equal(record.visualReviewStatus, 'visually_reviewed_2026-10-08', 'Victoria pixels were reviewed against the exact Commons subject');
  }
  const photoRecords = report.entries.flatMap((group) => group.sourceRecords);
  for (const image of koreaPhotoRecords) {
    const record = photoRecords.find((item) => item.assetPath === image.assetPath);
    assert.ok(record, `Seoul/Busan photo inventory must retain ${image.assetPath}`);
    assert.equal(record.sourceUrl, image.sourceUrl);
    assert.equal(record.creator, image.creator);
    assert.equal(record.license, image.license);
    assert.equal(record.sourcePhotoDate, image.sourceDate);
    assert.equal(record.verificationStatus, 'source_page_checked');
    assert.equal(record.verificationDate, '2026-10-08');
    assert.equal(record.visualReviewStatus, 'not_individually_visually_reviewed', 'source-page checks must not imply local pixel review');
    assert.ok(record.verificationDetail.includes('pixels were not inspected') || record.verificationDetail.includes('pixels were not inspected in this pass'), 'source-page notes must state that local pixels were not inspected');
  }
  const namsan = photoRecords.find((item) => item.assetPath === '/assets/images/korea-namsan-tower.webp');
  assert.equal(namsan.creator, 'kallerna');
  assert.equal(namsan.license, 'CC BY-SA 4.0');
  assert.equal(namsan.sourceTitle, 'File:N Seoul Tower view 2.jpg');
  assert.equal(namsan.sourcePhotoDate, '2022-11-30');
  assert.equal(namsan.verificationStatus, 'source_page_checked');
  assert.equal(namsan.verificationDate, '2026-10-08');
  assert.equal(namsan.visualReviewStatus, 'visually_reviewed_2026-10-08');
  assert.ok(namsan.verificationDetail.includes('local WebP pixels were inspected'));
  assert.deepEqual(report.openCreditReviews, []);
  for (const image of [...thailandImageRecords, ...danangImageRecords]) {
    const record = photoRecords.find((item) => item.assetPath === image.assetPath);
    assert.ok(record, `source audit must retain ${image.assetPath}`);
    assert.equal(record.sourcePhotoDate, image.sourceDate, `${image.assetPath} must retain the Commons photograph date`);
    assert.equal(record.verificationStatus, 'source_page_checked', `${image.assetPath} must record the checked Commons source page`);
    assert.equal(record.verificationDate, '2026-10-08', `${image.assetPath} Commons page check date must be retained`);
    assert.equal(record.visualReviewStatus, 'visually_reviewed_2026-10-08', `${image.assetPath} local pixel review date must be retained`);
    if (image.license) assert.equal(record.license, image.license, `${image.assetPath} must retain the exact license version`);
  }
  const lumphini = photoRecords.find((item) => item.assetPath === '/assets/images/thailand-lumphini.webp');
  assert.equal(lumphini.creator, 'User: (WT-shared) Adestro at wts wikivoyage');
  assert.equal(lumphini.licenseUrl, null, 'Lumphini public-domain claim must not gain a fabricated license URL');
  assert.ok(lumphini.attributionTerms.includes('released this work into the public domain worldwide'));
  assert.ok(lumphini.verificationDetail.includes('no separate license URL is present'));

  for (const image of chiangMaiImageRecords) {
    const record = photoRecords.find((item) => item.assetPath === image.assetPath);
    assert.ok(record, 'source audit must retain ' + image.assetPath);
    assert.equal(record.sourcePhotoDate, image.sourceDate, image.assetPath + ' must retain the Commons photograph date');
    assert.equal(record.verificationStatus, 'source_page_checked', image.assetPath + ' must record its checked Commons source page');
    assert.equal(record.verificationDate, '2026-10-08', image.assetPath + ' Commons page check date must be retained');
    assert.equal(record.visualReviewStatus, 'not_individually_visually_reviewed', image.assetPath + ' must not claim a prohibited local pixel review');
    assert.equal(record.license, image.license, image.assetPath + ' must retain the exact license version');
    assert.ok(record.verificationDetail.includes('local WebP pixels were not compared'), image.assetPath + ' must state the source-only visual-review limit');
  }
  for (const image of reviewedChiangMaiImageRecords) {
    const record = photoRecords.find((item) => item.assetPath === image.assetPath);
    assert.ok(record, `reviewed Chiang Mai photo inventory must retain ${image.assetPath}`);
    assert.equal(record.sourceUrl, image.sourceUrl);
    assert.equal(record.creator, image.creator);
    assert.equal(record.license, image.license);
    assert.equal(record.licenseUrl, `https://creativecommons.org/licenses/by-sa/${image.license.endsWith('3.0') ? '3.0' : '4.0'}/`);
    assert.equal(record.sourcePhotoDate, image.sourcePhotoDate);
    assert.equal(record.verificationStatus, 'source_page_checked');
    assert.equal(record.verificationDate, '2026-10-08');
    assert.equal(record.commercialReuseEligibility, 'permitted_under_source_page_checked_license_terms');
    assert.equal(record.visualReviewStatus, 'visually_reviewed_2026-10-08');
    assert.match(record.verificationDetail, /local WebP pixels/i);
  }
  for (const image of newChiangMaiImageRecords) {
    const record = photoRecords.find((item) => item.assetPath === image.assetPath);
    assert.ok(record, `inventory must retain ${image.assetPath}`);
    assert.equal(record.sourceUrl, image.sourceUrl);
    assert.equal(record.sourceTitle, image.sourceTitle);
    assert.equal(record.creator, image.creator);
    assert.equal(record.license, image.license);
    assert.equal(record.licenseUrl, 'https://creativecommons.org/licenses/by-sa/4.0/');
    assert.equal(record.sourcePhotoDate, image.sourcePhotoDate, 'unresolved source date must remain null');
    assert.equal(record.verificationStatus, 'source_page_checked');
    assert.equal(record.verificationDate, '2026-10-08');
    assert.equal(record.commercialReuseEligibility, 'permitted_under_source_page_checked_license_terms');
    assert.equal(record.visualReviewStatus, 'visually_reviewed_2026-10-08');
    assert.match(record.verificationDetail, /local WebP pixels were inspected/i);
    assert.ok(record.editHistory.includes('converted to WebP'));
  }
  const maeSaValley = photoRecords.find((item) => item.assetPath === '/assets/images/thailand-chiang-mai-mae-rim.webp');
  assert.ok(maeSaValley.verificationDetail.includes('20 December 2025'));
  assert.ok(maeSaValley.verificationDetail.includes('20 December 2024'));
  assert.ok(maeSaValley.verificationDetail.includes('unresolved'));
  const thailandRoutes = [
    'thailand',
    'thailand/bangkok',
    'thailand/bangkok/rattanakosin-grand-palace',
    'thailand/bangkok/yaowarat-talat-noi',
    'thailand/bangkok/siam-ratchaprasong',
    'thailand/bangkok/silom-sathorn',
    'thailand/bangkok/sukhumvit-thong-lo',
    'thailand/bangkok/thonburi-khlong-bang-luang'
  ];
  const noteBySource = new Map([
    ['https://commons.wikimedia.org/wiki/File:Wat_Arun_across_Chao_Phraya_River.jpg', 'Resized to 1,920 × 1,278 and converted to WebP; proportions retained.'],
    ['https://commons.wikimedia.org/wiki/File:Sunset_view_of_Wat_Arun_in_Bangkok.jpg', 'Converted from JPEG to WebP at the original 960 × 1,280 dimensions.'],
    ['https://commons.wikimedia.org/wiki/File:Temple_of_the_Emerald_Buddha.jpg', 'Resized to 1,920 × 1,282 and converted to WebP; proportions retained.'],
    ['https://commons.wikimedia.org/wiki/File:Yaowarat_Road_at_night.jpg', 'Resized to 1,920 × 1,440 and converted to WebP; proportions retained.'],
    ['https://commons.wikimedia.org/wiki/File:Bangkok_skyline_at_sunset_from_Siam_BTS_Skytrain_station,_Bangkok,_Thailand.jpg', 'Resized to 1,920 × 1,280 and converted to WebP; proportions retained.'],
    ['https://commons.wikimedia.org/wiki/File:Night_Panorama_of_Sukhumvit,_Bangkok.jpg', 'Resized to 1,920 × 568 and converted to WebP; proportions retained.'],
    ['https://commons.wikimedia.org/wiki/File:Lumpini_Park,_Bangkok.jpg', 'Resized to 1,920 × 1,440 and converted to WebP; proportions retained.'],
    ['https://commons.wikimedia.org/wiki/File:Mouth_of_Khlong_Bangkok_Yai.jpg', 'Converted from JPEG to WebP at the original 1,440 × 1,080 dimensions.']
  ]);
  const localeDirs = { en: '', 'zh-Hant': 'zh', ja: 'ja', ko: 'ko', th: 'th' };
  const chiangMaiPhotoPages = [
    { route: 'thailand/chiang-mai/doi-inthanon/', ...reviewedChiangMaiImageRecords[0] },
    { route: 'thailand/chiang-mai/mae-kampong/', ...reviewedChiangMaiImageRecords[1] },
    { route: 'thailand/chiang-mai/nimman-university/', ...reviewedChiangMaiImageRecords[2] },
    ...newChiangMaiImageRecords
  ];
  for (const [locale, prefix] of Object.entries(localeDirs)) {
    for (const image of chiangMaiPhotoPages) {
      const document = parse(fs.readFileSync(path.join(root, prefix, image.route, 'index.html'), 'utf8'));
      const shownImage = findAll(document, (node) => node.tagName === 'img' && attrs(node).src === image.assetPath);
      assert.equal(shownImage.length, 1, `${locale} ${image.route} must use the reviewed local image`);
      const exactCredit = findAll(document, (node) => node.tagName === 'li' && findAll(node, (link) => link.tagName === 'a' && attrs(link).href === image.sourceUrl).length > 0);
      assert.equal(exactCredit.length, 1, `${locale} ${image.route} must link the exact Commons file page`);
      assert.ok(textContent(exactCredit[0]).includes(image.creator), `${locale} ${image.route} must retain creator attribution`);
      assert.ok(textContent(exactCredit[0]).includes(image.license), `${locale} ${image.route} must retain the exact license version`);
      assert.ok(findAll(exactCredit[0], (link) => link.tagName === 'a' && attrs(link).href === `https://creativecommons.org/licenses/by-sa/${image.license.endsWith('3.0') ? '3.0' : '4.0'}/`).length, `${locale} ${image.route} must link the commercial-use license`);
      assert.ok(textContent(exactCredit[0]).length > 50, `${locale} ${image.route} must retain a visible adaptation and share-alike credit`);
    }
  }
  const localeBatch = Object.fromEntries(Object.entries(localeDirs).filter(([code]) => code !== 'en').map(([code]) => [code, JSON.parse(fs.readFileSync(path.join(root, 'data', 'i18n', 'reviewed', code, '99zzzl-thailand-photo-edits-20261008.json'), 'utf8')).translations]));
  const seoulSourceNote = 'Original source: Seoul Tourism Archive 10341.';
  const seoulSourceNoteTranslations = Object.fromEntries(Object.entries(localeDirs).filter(([code]) => code !== 'en').map(([code]) => [code, JSON.parse(fs.readFileSync(path.join(root, 'data', 'i18n', 'reviewed', code, '99y-south-korea-seoul-20261007.json'), 'utf8')).translations[seoulSourceNote]]));
  for (const [locale, prefix] of Object.entries(localeDirs)) {
    const document = parse(fs.readFileSync(path.join(root, prefix, 'south-korea', 'seoul', 'index.html'), 'utf8'));
    const credits = findAll(document, (node) => node.tagName === 'li' && findAll(node, (link) => link.tagName === 'a' && attrs(link).href === 'https://commons.wikimedia.org/wiki/File:Nightview_of_the_Gwanghwamun_Square_2024.jpg').length > 0);
    assert.equal(credits.length, 1, `${locale} Seoul hub must retain the Gwanghwamun source credit`);
    const expectedNote = locale === 'en' ? seoulSourceNote : seoulSourceNoteTranslations[locale];
    assert.ok(expectedNote, `${locale} must translate the Seoul Tourism Archive source note`);
    const notes = findAll(credits[0], (node) => node.tagName === 'span' && attrs(node).class === 'photo-source-note' && textContent(node).trim() === expectedNote);
    assert.equal(notes.length, 1, `${locale} Seoul hub must display the source note in its reviewed language`);
  }
  const chatuchakRecord = photoRecords.find((item) => item.assetPath === '/assets/images/thailand-chatuchak.webp');
  assert.equal(chatuchakRecord.useCount, 1);
  assert.deepEqual(chatuchakRecord.routes, ['/thailand/bangkok/chatuchak-ari/']);
  assert.equal(chatuchakRecord.sourceUrl, 'https://commons.wikimedia.org/wiki/File:Chatuchak_Weekend_Market_2.jpg');
  assert.equal(chatuchakRecord.sourceTitle, 'File:Chatuchak Weekend Market 2.jpg');
  assert.equal(chatuchakRecord.sourcePhotoDate, '2018-05-12');
  assert.equal(chatuchakRecord.creator, 'Christophe95');
  assert.equal(chatuchakRecord.license, 'CC BY-SA 4.0');
  assert.equal(chatuchakRecord.verificationStatus, 'source_page_checked');
  assert.equal(chatuchakRecord.verificationDate, '2026-10-08');
  assert.equal(chatuchakRecord.visualReviewStatus, 'visually_reviewed_2026-10-08');
  const talatNoiRecord = photoRecords.find((item) => item.assetPath === '/assets/images/thailand-talat-noi.webp');
  assert.ok(fs.existsSync(path.join(root, 'assets', 'images', 'thailand-talat-noi.webp')), 'Talat Noi orphan asset remains present but unused');
  assert.equal(talatNoiRecord.useCount, 0);
  assert.deepEqual(talatNoiRecord.routes, []);
  assert.equal(talatNoiRecord.sourceUrl, null);
  for (const [locale, prefix] of Object.entries(localeDirs)) {
    const document = parse(fs.readFileSync(path.join(root, prefix, 'thailand', 'bangkok', 'chatuchak-ari', 'index.html'), 'utf8'));
    assert.equal(findAll(document, (node) => node.tagName === 'img' && attrs(node).src === '/assets/images/thailand-chatuchak.webp').length, 1, `${locale} Chatuchak route must retain its own market photo`);
    const credits = findAll(document, (node) => node.tagName === 'li' && findAll(node, (link) => link.tagName === 'a' && attrs(link).href === 'https://commons.wikimedia.org/wiki/File:Chatuchak_Weekend_Market_2.jpg').length > 0);
    assert.equal(credits.length, 1, `${locale} Chatuchak route must retain its visible Commons credit`);
    assert.ok(textContent(credits[0]).includes('Christophe95') && textContent(credits[0]).includes('CC BY-SA 4.0'), `${locale} Chatuchak route must preserve creator and license`);
    assert.equal(findAll(credits[0], (link) => link.tagName === 'a' && attrs(link).href === 'https://creativecommons.org/licenses/by-sa/4.0/').length, 1, `${locale} Chatuchak route must link the CC BY-SA 4.0 license`);
  }
  for (const [locale, prefix] of Object.entries(localeDirs)) {
    for (const route of thailandRoutes) {
      const page = path.join(root, prefix, route, 'index.html');
      const document = parse(fs.readFileSync(page, 'utf8'));
      const imageSources = findAll(document, (node) => node.tagName === 'img').map((node) => attrs(node).src || '');
      assert.equal(imageSources.some((src) => src.includes('thailand-chatuchak.webp')), false, `${locale} ${route} must not restore Chatuchak imagery`);
      assert.equal(imageSources.some((src) => src.includes('thailand-talat-noi.webp')), false, `${locale} ${route} must not restore Talat Noi imagery`);
      for (const [sourceUrl, englishNote] of noteBySource) {
        const credits = findAll(document, (node) => node.tagName === 'li' && findAll(node, (child) => child.tagName === 'a' && attrs(child).href === sourceUrl).length > 0);
        for (const credit of credits) {
          const note = locale === 'en' ? englishNote : localeBatch[locale][englishNote];
          const matches = findAll(credit, (node) => node.tagName === 'span' && attrs(node).class === 'photo-edit-note' && textContent(node).trim() === note);
          assert.equal(matches.length, 1, `${locale} ${route} must disclose the exact per-image edit for ${sourceUrl}`);
        }
      }
    }
  }
  assert.equal(fs.existsSync(path.join(root, removedUnverifiedVictoriaAsset.slice(1).split('/').join(path.sep))), false, 'removed Sooke image must not remain in the active asset directory');
  assert.ok(fs.readFileSync(path.join(root, 'reports', 'canada-victoria-sooke-photo-status.md'), 'utf8').includes('not independently verified'), 'historical Sooke license claim must remain explicitly unverified');
  assert.equal(report.entries.flatMap((group) => group.sourceRecords).some((record) => record.assetPath === removedUnverifiedVictoriaAsset), false, 'removed Sooke image must not reappear as an active inventory record');
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
  console.log('Photo inventory regression passed: five reviewed Chiang Mai images retain exact source, creator, commercial license, pixel review and five-locale linked credits; the new Mae Sa date discrepancy stays unresolved; 18 Da Nang, Bangkok and Victoria images retain source-page checks, pixel reviews and hashes; five Seoul/Busan credits retain source metadata without implying pixel review; the Seoul Tourism Archive note is localized in all five editions; Chatuchak source, license and pixels are checked, and Talat Noi remains an unused orphan.');
} finally {
  // The audit command is read-only with respect to committed generated reports.
  for (const [file, content] of originalArtifacts) fs.writeFileSync(file, content);
}
