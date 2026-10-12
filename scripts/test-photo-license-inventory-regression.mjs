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
const bordeauxPhotos = [
  { assetPath: '/assets/images/france-bordeaux-gironde-bordeaux-river-wine-city.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bordeaux_place_de_la_bourse_avec_la_Garonne-2015a.JPG', sourceTitle: 'File:Bordeaux place de la bourse avec la Garonne-2015a.JPG', creator: 'Nataloche', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', sourceDate: '18 February 2015', localSha256: '53a12b65244cfffd88fa11653287771ef87387108112dca87c18b07f93d36387', subject: 'illuminated Place de la Bourse facade and its night reflection in the Garonne' },
  { assetPath: '/assets/images/france-bordeaux-gironde-saint-emilion-vineyards.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Saint-Emilion_33_Place_2013.jpg', sourceTitle: 'File:Saint-Emilion 33 Place 2013.jpg', creator: 'JLPC', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/', sourceDate: '27 May 2013', localSha256: 'c1a821385fa2aeefcda31feb83400e8c0728142dcfbf0ac3807f381c001bbb64', subject: 'Saint-Émilion village and main square as seen from the monolithic church' },
  { assetPath: '/assets/images/france-bordeaux-gironde-arcachon-dune-pilat.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sunrise_Cap_Ferret_Banc_du_Toulinguet_-_Arcachon_-_Oc%C3%A9an_Atlantique_-_Picture_Image_Photography_-_Sunset_-_Coucher_de_soleil_-_Dune_du_pilat_pyla_-_Banc_d%27arguin_water_eau_vagues_waves_beach_plage_sky_colors_red_yellow_(14501089751).jpg', sourceTitle: "File:Sunrise Cap Ferret Banc du Toulinguet - Arcachon - Océan Atlantique - Picture Image Photography - Sunset - Coucher de soleil - Dune du pilat pyla - Banc d'arguin water eau vagues waves beach plage sky colors red yellow (14501089751).jpg", creator: 'Grand Parc - Bordeaux, France from France', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', localSha256: 'b622a8f4affd7f65a959456ba412e0799bd6484d5b6484ef37ec3009224000b3', subject: 'low orange sun above open bay water' }
];
const wadjemupDiagramAssetPath = '/assets/images/australia-wadjemup-ferry-day-sequence.svg';
const wadjemupDiagramSourceUrl = 'https://tripdistill.com/assets/images/australia-wadjemup-ferry-day-sequence.svg';
const ukKeswickOldAssetPath = '/assets/images/united-kingdom-lake-district-cumbria-keswick-derwentwater.webp';
const ukCarlisleOldAssetPath = '/assets/images/united-kingdom-lake-district-cumbria-carlisle-hadrians-wall-west.webp';
const chinaLhasaRetiredAssetPath = '/assets/images/china-destination-lhasa.webp';
const chinaLhasaRetiredSourceUrl = 'https://commons.wikimedia.org/wiki/File:Potala_Palace_HQ.jpg';
const franceVimyRetiredAssetPath = '/assets/images/france-lille-french-flanders-arras-vimy-remembrance.webp';
const franceVimyRetiredSourceUrl = 'https://commons.wikimedia.org/wiki/File:2017-05_Canadian_National_Vimy_Memorial_01.jpg';
const franceVimyDiagramAssetPath = '/assets/images/france-lille-arras-vimy-sequence-legend.svg';
const franceVimyDiagramSourceUrl = 'https://tripdistill.com/assets/images/france-lille-arras-vimy-sequence-legend.svg';
const melakaRetiredAssetPath = '/assets/images/malaysia-melaka-kampung-morten.webp';
const melakaRetiredSourceUrl = 'https://commons.wikimedia.org/wiki/File:Waiting_for_Iftar_at_Kampung_Morten,_Malacca.jpg';
const melakaDiagramAssetPath = '/assets/images/malaysia-melaka-two-bank-route.svg';
const melakaDiagramSourceUrl = 'https://tripdistill.com/assets/images/malaysia-melaka-two-bank-route.svg';
const chinaLhasaDiagramAssetPath = '/assets/images/china-lhasa-preparation.svg';
const chinaXinjiangAssetPath = '/assets/images/china-destination-xinjiang.webp';
const chinaXinjiangSourceUrl = 'https://commons.wikimedia.org/wiki/File:Hëytgah_Mosque,_Kashi_(20230923100109).jpg';
const ukLakeDiagramPaths = [
  '/assets/images/united-kingdom-lake-district-cumbria-keswick-derwentwater-route-choice.svg',
  '/assets/images/united-kingdom-lake-district-cumbria-carlisle-hadrians-wall-west-route-choice.svg'
];
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
  const oxfordPhotoRecords = report.entries.flatMap((group) => group.sourceRecords);
  const oxfordPhotoChecks = [
    {
      assetPath: '/assets/images/united-kingdom-oxford-cotswolds-oxford-colleges-museums.webp',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Oxford_-_Catte_Street_-_View_SSW_on_the_Radcliffe_Camera_1737-48_by_James_Gibbs_-_University_Church_of_St_Mary_the_Virgin_%26_Brasenose_College_in_the_back.jpg',
      creator: 'Txllxt TxllxT',
      license: 'CC BY-SA 4.0'
    },
    {
      assetPath: '/assets/images/united-kingdom-oxford-cotswolds-blenheim-woodstock.webp',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Blenheim_Palace_from_the_Water_Terraces_October_2016.jpg',
      creator: 'DeFacto',
      license: 'CC BY-SA 4.0'
    }
  ];
  for (const expected of oxfordPhotoChecks) {
    const record = oxfordPhotoRecords.find((item) => item.assetPath === expected.assetPath);
    assert.ok(record, `Oxford/Cotswolds inventory must retain ${expected.assetPath}`);
    assert.equal(record.sourceUrl, expected.sourceUrl);
    assert.equal(record.creator, expected.creator);
    assert.equal(record.license, expected.license);
    assert.equal(record.verificationStatus, 'source_page_checked');
    assert.equal(record.verificationDate, '2026-10-11');
    assert.equal(record.visualReviewStatus, 'visually_reviewed_2026-10-11');
    assert.match(record.verificationDetail, /local 1,600 × 1,066 WebP pixels were inspected/i);
    assert.match(record.verificationDetail, /not independent rights clearance/i);
  }
  const peakDistrictPhotoChecks = [
    {
      assetPath: '/assets/images/united-kingdom-peak-district-derbyshire-bakewell-chatsworth.webp',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Chatsworth_House_-_geograph.org.uk_-_2191619.jpg',
      creator: 'Trevor Rickard',
      license: 'CC BY-SA 2.0',
      dimensions: '1,024 × 768'
    },
    {
      assetPath: '/assets/images/united-kingdom-peak-district-derbyshire-hope-valley-edale.webp',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mam_Tor_from_the_Ridge_path_-_Flickr_-_Donnchadh_H.jpg',
      creator: 'Donnchadh H',
      license: 'CC BY 2.0',
      dimensions: '5,568 × 3,712'
    },
    {
      assetPath: '/assets/images/united-kingdom-peak-district-derbyshire-dovedale-ashbourne.webp',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dovedale_-_River_Dove_-_Thorpe_Cloud_-_Stepping_Stones_(15041656340).jpg',
      creator: 'Elliott Brown from Birmingham, United Kingdom',
      license: 'CC BY-SA 2.0',
      dimensions: '3,072 × 2,304'
    }
  ];
  for (const expected of peakDistrictPhotoChecks) {
    const record = report.entries.flatMap((item) => item.sourceRecords).find((photo) => photo.assetPath === expected.assetPath);
    assert.ok(record, `Peak District inventory must retain ${expected.assetPath}`);
    assert.equal(record.sourceUrl, expected.sourceUrl);
    assert.equal(record.creator, expected.creator);
    assert.equal(record.license, expected.license);
    assert.equal(record.verificationStatus, 'source_page_checked');
    assert.equal(record.verificationDate, '2026-10-12');
    assert.equal(record.visualReviewStatus, 'visually_reviewed_2026-10-12');
    assert.ok(record.verificationDetail.includes(expected.dimensions), 'verification details must retain Commons source dimensions');
    assert.match(record.verificationDetail, /not independent rights clearance/i);
    assert.match(record.editHistory, /resiz|crop|WebP/i);
  }
  const cotswoldPhoto = oxfordPhotoRecords.find((item) => item.assetPath === '/assets/images/united-kingdom-oxford-cotswolds-cotswold-towns-without-car.webp');
  assert.ok(cotswoldPhoto, 'Oxford/Cotswolds inventory must retain the Cotswold village image');
  assert.equal(cotswoldPhoto.verificationStatus, 'site_credit_or_metadata_only', 'the inaccessible Commons page must not be reported as verified');
  assert.equal(cotswoldPhoto.verificationDate, null);
  assert.equal(cotswoldPhoto.visualReviewStatus, 'visually_reviewed_2026-10-11', 'local pixel review remains distinct from source-page verification');
  assert.equal(report.counts.activeMissingSourceCreditMatch, 0, 'all currently referenced assets have a source, creator and license match');
  assert.equal(report.counts.activeIncompleteAttributionFields, 0, 'no currently used image is missing required attribution or rights fields');
  assert.equal(report.counts.unreferencedMissingSourceCreditMatch, 24, 'the remaining unmatched records are unused assets');
  const dordognePhotos = [
    { assetPath: '/assets/images/france-dordogne-perigord-dordogne-castles-villages.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Castle_and_church_(left)_of_Beynac_along_the_Dordogneriver_-_panoramio.jpg', creator: 'Henk Monster', license: 'CC BY 3.0' },
    { assetPath: '/assets/images/france-dordogne-perigord-sarlat-market-old-town.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sarlat_2008_05.jpg', creator: 'Manfred Heyde', license: 'CC BY-SA 3.0' },
    { assetPath: '/assets/images/france-dordogne-perigord-vezere-prehistory.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Les_Eyzies-de-Tayac_falaise_bourg_(2).jpg', creator: 'Père Igor', license: 'CC BY-SA 4.0' }
  ];
  for (const photo of dordognePhotos) {
    const record = report.entries.flatMap((group) => group.sourceRecords).find((item) => item.assetPath === photo.assetPath);
    assert.ok(record, `Dordogne inventory must include ${photo.assetPath}`);
    assert.equal(record.sourceUrl, photo.sourceUrl);
    assert.equal(record.creator, photo.creator);
    assert.equal(record.license, photo.license);
    assert.equal(record.visualReviewStatus, 'visually_reviewed_2026-10-11', 'each Dordogne WebP was inspected at pixel level');
  }
  const beynacPhoto = report.entries.flatMap((group) => group.sourceRecords).find((item) => item.assetPath === dordognePhotos[0].assetPath);
  const sarlatPhoto = report.entries.flatMap((group) => group.sourceRecords).find((item) => item.assetPath === dordognePhotos[1].assetPath);
  const lesEyziesPhoto = report.entries.flatMap((group) => group.sourceRecords).find((item) => item.assetPath === dordognePhotos[2].assetPath);
  for (const [record, date] of [[beynacPhoto, '16 October 2011'], [sarlatPhoto, 'May 2008']]) {
    assert.equal(record.verificationStatus, 'source_page_checked');
    assert.equal(record.verificationDate, '2026-10-11');
    assert.ok(record.verificationDetail.includes(date));
  }
  assert.equal(lesEyziesPhoto.verificationStatus, 'site_credit_or_metadata_only', 'an inaccessible exact source page remains explicitly unverified');
  assert.equal(lesEyziesPhoto.verificationDate, null);
  const provencePhotos = [
    {
      assetPath: '/assets/images/france-provence-inland-avignon-papal-city.webp',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Avignon_-_%C3%8Ele_de_Piot_-_Chemin_des_Berges_-_Panorama_View_from_the_Rh%C3%B4ne_river_bank_towards_Pont_Saint_B%C3%A9n%C3%A9zet_(Pont_d%27Avignon),_Jardin_des_doms,_Avignon_Cathedral,_Palais_des_Papes_%26_Pont_%C3%89douard_Daladier_02.jpg',
      creator: 'Txllxt TxllxT',
      license: 'CC BY-SA 4.0',
      localSha256: 'a82d6f1117c6e34ca179d7f001284e99fb3e9da18141962d8cf9908869a905d3',
      pixelNote: 'distant walled Avignon skyline and Palace of the Popes from the Rhône bank at Île de Piot'
    },
    {
      assetPath: '/assets/images/france-provence-inland-aix-markets-cezanne.webp',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:France-002438_-_Cours_Mirabeau_Fountain_(15867627856).jpg',
      creator: 'Dennis G. Jarvis',
      license: 'CC BY-SA 2.0',
      localSha256: 'f072c6ba751bb14712fe4d4675031e450b2c063266cd9090c740391cc2b9e967',
      pixelNote: 'Fontaine de la Rotonde and plane-tree avenue on Cours Mirabeau in Aix-en-Provence'
    },
    {
      assetPath: '/assets/images/france-provence-inland-luberon-villages-abbey.webp',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Village_of_Gordes.jpg',
      creator: 'Einaz80',
      license: 'CC BY-SA 4.0',
      localSha256: '0865181e415724083187a5cbdf601274a86b966a34d28ed22d23791e73cb8d89',
      pixelNote: 'Gordes hillside village and stone buildings in the Luberon'
    }
  ];
  for (const expected of provencePhotos) {
    const record = report.entries.flatMap((group) => group.sourceRecords).find((item) => item.assetPath === expected.assetPath);
    assert.ok(record, `Provence inventory must retain ${expected.assetPath}`);
    assert.equal(record.sourceUrl, expected.sourceUrl);
    assert.equal(record.creator, expected.creator);
    assert.equal(record.license, expected.license);
    assert.equal(record.sha256, expected.localSha256, 'source verification must preserve the inspected local image bytes');
    assert.equal(record.verificationStatus, 'source_page_checked');
    assert.equal(record.verificationDate, '2026-10-12');
    assert.equal(record.visualReviewStatus, 'visually_reviewed_2026-10-12');
    assert.match(record.verificationDetail, /1,600 × 1,066 WebP pixels were inspected/i);
    assert.ok(record.verificationDetail.includes(expected.pixelNote), 'verification note must match the visible subject');
    assert.match(record.verificationDetail, /not independent rights clearance/i);
    assert.equal(record.commercialReuseEligibility, 'permitted_under_source_page_checked_license_terms');
  }
  const marseillePhotos = [
    { assetPath: '/assets/images/france-marseille-calanques-old-port-panier-mucem.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Marseille_-_Vieux_Port_-_MUCEM.jpg', creator: 'Remi Mathis', license: 'CC BY-SA 3.0', sourceSha1: '7d381ee1748237e9db100c3e84e36d09c2180ddb', pixelNote: 'older harbor-side stone building under restoration scaffolding' },
    { assetPath: '/assets/images/france-marseille-calanques-calanques-access-choice.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Calanques_National_Park_seen_from_the_airplane.jpg', creator: 'MikkoNilssonCom', license: 'CC BY-SA 4.0', sourceSha1: '684c46cd9c74d508c0c51324e6533f545ad4b904', pixelNote: 'aerial limestone inlets including Port-Miou, Port-Pin and En-Vau' },
    { assetPath: '/assets/images/france-marseille-calanques-cassis-la-ciotat.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cap_Canaille_depuis_le_port_de_Cassis.jpg', creator: 'DJ Poldoc', license: 'CC0', sourceSha1: '4c262f89d1eaa0d52a65b8d2593f0a972257f6fd', pixelNote: 'Cassis harbor with boats in the foreground and Cap Canaille beyond' }
  ];
  for (const photo of marseillePhotos) {
    const record = report.entries.flatMap((group) => group.sourceRecords).find((item) => item.assetPath === photo.assetPath);
    assert.ok(record, `Marseille inventory must include ${photo.assetPath}`);
    assert.equal(record.sourceUrl, photo.sourceUrl);
    assert.equal(record.creator, photo.creator);
    assert.equal(record.license, photo.license);
    assert.equal(record.verificationStatus, 'source_page_checked');
    assert.equal(record.verificationDate, '2026-10-12');
    assert.equal(record.visualReviewStatus, 'visually_reviewed_2026-10-12');
    assert.ok(record.verificationDetail.includes(photo.pixelNote));
    assert.ok(record.verificationDetail.includes(photo.sourceSha1));
    assert.ok(record.verificationDetail.includes('not independent rights or chain-of-title verification'));
    assert.ok(record.altTexts.length && record.rawVisibleCredits.some((credit) => credit.includes(photo.creator)));
  }
  const coteDAzurPhotos = [
    { assetPath: '/assets/images/france-cote-dazur-nice-old-town-hills.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nice,_Quai_des_%C3%89tats-Unis_and_Promenade_des_Anglais_FRANCE.jpg', creator: 'Lspigon', license: 'Public domain', sourcePhotoDate: '2006-01-01' },
    { assetPath: '/assets/images/france-cote-dazur-eze-monaco-menton.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:02_statue_and_view_Jardin_Exotique_%C3%88ze_Village_French_Riviera_Copr_2022_by_Tim_Adams_CC_by_3.jpg', creator: 'Tim Adams', license: 'CC BY 3.0', sourcePhotoDate: '2022-04-27' },
    { assetPath: '/assets/images/france-cote-dazur-antibes-cannes-west-coast.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Port_vauban_vieille_ville.jpg', creator: 'Abxbay', license: 'CC BY-SA 4.0', sourcePhotoDate: '2016-06-07' }
  ];
  for (const photo of coteDAzurPhotos) {
    const record = report.entries.flatMap((group) => group.sourceRecords).find((item) => item.assetPath === photo.assetPath);
    assert.ok(record, `Côte d’Azur inventory must include ${photo.assetPath}`);
    assert.equal(record.sourceUrl, photo.sourceUrl);
    assert.equal(record.creator, photo.creator);
    assert.equal(record.license, photo.license);
    assert.equal(record.sourcePhotoDate, photo.sourcePhotoDate);
    assert.equal(record.visualReviewStatus, 'visually_reviewed_2026-10-12');
    assert.equal(record.verificationStatus, 'source_page_checked');
    assert.equal(record.verificationDate, '2026-10-12');
    assert.match(record.verificationDetail, /local 1,600 × 1,066 WebP pixels were inspected/i);
  }
  const antibesPhoto = report.entries.flatMap((group) => group.sourceRecords).find((item) => item.assetPath === '/assets/images/france-cote-dazur-antibes-cannes-west-coast.webp');
  assert.ok(antibesPhoto.rawVisibleCredits.some((credit) => credit.includes('adaptation is shared under CC BY-SA 4.0')));
  assert.equal(report.counts.usedAssetsWithoutIndependentSourcePageCheck, 518, 'the merged inventory records Côte d’Azur, Marseille, Peak District and Provence inland photo checks while unresolved claims remain unverified');
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
  const bordeauxRoutes = [
    '/france/bordeaux-gironde/',
    '/france/bordeaux-gironde/bordeaux-river-wine-city/',
    '/france/bordeaux-gironde/saint-emilion-vineyards/',
    '/france/bordeaux-gironde/arcachon-dune-pilat/'
  ];
  for (const image of bordeauxPhotos) {
    const record = photoRecords.find((item) => item.assetPath === image.assetPath);
    assert.ok(record, `Bordeaux/Gironde inventory must retain ${image.assetPath}`);
    assert.equal(record.sourceUrl, image.sourceUrl);
    assert.equal(record.sourceTitle, image.sourceTitle);
    assert.equal(record.creator, image.creator);
    assert.equal(record.license, image.license);
    assert.equal(record.licenseUrl, image.licenseUrl);
    assert.equal(record.sha256, image.localSha256, 'inventory hash must match the reviewed local pixels');
    assert.equal(record.metadataOrigin, 'structured_data_record');
    assert.equal(record.verificationStatus, 'source_page_checked');
    assert.equal(record.verificationDate, '2026-10-11');
    assert.equal(record.commercialReuseEligibility, 'permitted_under_source_page_checked_license_terms');
    assert.equal(record.visualReviewStatus, 'visually_reviewed_2026-10-11');
    assert.ok(record.verificationDetail.includes(image.subject), 'the source-page and pixel match note must state the inspected subject');
    if (image.sourceDate) assert.ok(record.verificationDetail.includes(image.sourceDate), 'the source photo date must be recorded');
    assert.ok(record.verificationDetail.includes('without asserting independent rights clearance'));
    assert.ok(record.rawVisibleCredits.some((credit) => credit.includes(image.creator) && credit.includes(image.license)));
    assert.ok(record.editHistory.includes('WebP'), 'photo edit history must disclose the local WebP asset');
    if (image.license.includes('BY-SA')) assert.ok(record.editHistory.includes(image.license), 'CC BY-SA adaptations must preserve the exact share-alike license version');
    assert.ok(bordeauxRoutes.every((route) => record.routes.includes(route)), 'each current Bordeaux image must be used by the four reviewed routes');
  }
  const bordeauxLocales = [
    { locale: 'en', prefix: '' },
    { locale: 'zh-Hant', prefix: 'zh' },
    { locale: 'ja', prefix: 'ja' },
    { locale: 'ko', prefix: 'ko' },
    { locale: 'th', prefix: 'th' }
  ];
  const bordeauxEditNoteSource = (license) => `. Resized, cropped for display and converted to WebP; changes disclosed. Shared under the same ${license} license.`;
  const bordeauxEditNoteTranslations = Object.fromEntries(bordeauxLocales.filter(({ locale }) => locale !== 'en').map(({ locale }) => {
    const batch = JSON.parse(fs.readFileSync(path.join(root, 'data', 'i18n', 'reviewed', locale, 'zzzzn-fr06-bordeaux-pages-20261011.json'), 'utf8'));
    return [locale, batch.translations];
  }));
  for (const { locale, prefix } of bordeauxLocales) {
    for (const route of bordeauxRoutes) {
      const document = parse(fs.readFileSync(path.join(root, prefix, route, 'index.html'), 'utf8'));
      for (const image of bordeauxPhotos) {
        const matchingPixels = findAll(document, (node) => node.tagName === 'img' && attrs(node).src === image.assetPath);
        assert.ok(matchingPixels.length >= 1, `${locale} ${route} must use the pixel-reviewed image ${image.assetPath}`);
        const exactCredits = findAll(document, (node) => node.tagName === 'li' && findAll(node, (link) => link.tagName === 'a' && attrs(link).href === image.sourceUrl).length > 0);
        assert.equal(exactCredits.length, 1, `${locale} ${route} must link the exact Commons page for ${image.assetPath}`);
        const credit = textContent(exactCredits[0]);
        assert.ok(credit.includes(image.creator), `${locale} ${route} must retain exact creator attribution`);
        assert.ok(credit.includes(image.license), `${locale} ${route} must retain the exact license version`);
        assert.ok(findAll(exactCredits[0], (link) => link.tagName === 'a' && attrs(link).href === image.licenseUrl).length, `${locale} ${route} must link the declared license`);
        assert.ok(credit.includes('WebP'), `${locale} ${route} must show the image adaptation disclosure`);
        if (image.license.includes('BY-SA')) {
          const editNote = locale === 'en' ? bordeauxEditNoteSource(image.license) : bordeauxEditNoteTranslations[locale][bordeauxEditNoteSource(image.license)];
          assert.ok(editNote && credit.includes(editNote), `${locale} ${route} must retain the localized adaptation disclosure and exact share-alike license version`);
        }
      }
    }
  }
  const cornwallPhotos = [
    { assetPath: '/assets/images/united-kingdom-cornwall-devon-st-ives-penwith.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:The_beach_in_St._Ives_harbour,_Cornwall_-_geograph.org.uk_-_2273997.jpg', sourceTitle: 'File:The beach in St. Ives harbour, Cornwall - geograph.org.uk - 2273997.jpg', creator: 'nick macneill', license: 'CC BY-SA 2.0', sourcePhotoDate: '1991-09-15', originalSize: '1,024 × 693' },
    { assetPath: '/assets/images/united-kingdom-cornwall-devon-falmouth-roseland.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ferry_to_Falmouth_%26_sailing_boats,_St_Mawes_Harbour,_Cornwall_-_June_2025.jpg', sourceTitle: 'File:Ferry to Falmouth & sailing boats, St Mawes Harbour, Cornwall - June 2025.jpg', creator: 'Mutney', license: 'CC BY 4.0', sourcePhotoDate: '2025-06-28', originalSize: '4,032 × 2,198' },
    { assetPath: '/assets/images/united-kingdom-cornwall-devon-exeter-dartmoor-edge.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Exeter_,_Exeter_Cathedral_%5E_Green_-_geograph.org.uk_-_3144068.jpg', sourceTitle: 'File:Exeter , Exeter Cathedral ^ Green - geograph.org.uk - 3144068.jpg', creator: 'Lewis Clarke', license: 'CC BY-SA 2.0', sourcePhotoDate: '2012-09-21', originalSize: '4,288 × 2,848' }
  ];
  for (const image of cornwallPhotos) {
    const record = photoRecords.find((item) => item.assetPath === image.assetPath);
    assert.ok(record, `Cornwall photo inventory must retain ${image.assetPath}`);
    assert.equal(record.sourceUrl, image.sourceUrl);
    assert.equal(record.sourceTitle, image.sourceTitle);
    assert.equal(record.creator, image.creator);
    assert.equal(record.license, image.license);
    assert.equal(record.licenseUrl, `https://creativecommons.org/licenses/${image.license === 'CC BY 4.0' ? 'by/4.0' : 'by-sa/2.0'}/`);
    assert.equal(record.sourcePhotoDate, image.sourcePhotoDate);
    assert.equal(record.verificationStatus, 'source_page_checked');
    assert.equal(record.verificationDate, '2026-10-11');
    assert.equal(record.commercialReuseEligibility, 'permitted_under_source_page_checked_license_terms');
    assert.equal(record.visualReviewStatus, 'visually_reviewed_2026-10-11');
    assert.ok(record.verificationDetail.includes(image.originalSize), 'source page original dimensions must be recorded');
    assert.ok(record.verificationDetail.includes('Local WebP pixels were inspected'));
    assert.ok(record.rawVisibleCredits.some((credit) => credit.includes(image.creator) && credit.includes(image.license)));
    assert.ok(record.editHistory.includes('WebP'), 'photo edit history must disclose the local WebP asset');
  }
  const cameronPhotos = [
    { assetPath: '/assets/images/malaysia-cameron-highlands.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cameron_Bharat_Tea_Plantation,_Cameron_Highlands,_Malaysia,_20250829_1535_4120.jpg', creator: 'Jakub Hałun', license: 'CC BY 4.0', sourcePhotoDate: '2025-08-29', originalSize: '5,439 × 3,631' },
    { assetPath: '/assets/images/malaysia-cameron-mossy-forest.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Big_Mossy_Tree_at_Mossy_Forest,_Cameron_Highlands.jpg', creator: 'Pro QueeNia', license: 'CC BY-SA 4.0', sourcePhotoDate: '2019-10-15', originalSize: '2,448 × 3,264' }
  ];
  for (const image of cameronPhotos) {
    const record = photoRecords.find((item) => item.assetPath === image.assetPath);
    assert.ok(record, `Cameron Highlands photo inventory must retain ${image.assetPath}`);
    assert.equal(record.sourceUrl, image.sourceUrl);
    assert.equal(record.creator, image.creator);
    assert.equal(record.license, image.license);
    assert.equal(record.licenseUrl, `https://creativecommons.org/licenses/${image.license === 'CC BY 4.0' ? 'by/4.0' : 'by-sa/4.0'}/`);
    assert.equal(record.sourcePhotoDate, image.sourcePhotoDate);
    assert.equal(record.verificationStatus, 'source_page_checked');
    assert.equal(record.verificationDate, '2026-10-11');
    assert.equal(record.commercialReuseEligibility, 'permitted_under_source_page_checked_license_terms');
    assert.equal(record.visualReviewStatus, 'visually_reviewed_2026-10-11');
    assert.ok(record.verificationDetail.includes(image.originalSize));
    assert.ok(record.verificationDetail.includes('Local WebP pixels show'));
    assert.ok(record.rawVisibleCredits.some((credit) => credit.includes(image.creator) && credit.includes(image.license)));
    assert.ok(record.editHistory.includes('WebP'));
  }
  const chinaCn12Photos = [
    { assetPath: '/assets/images/china-destination-harbin.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Harbin_Saint_Sophia_Cathedral_2017_summer.jpg', sourceTitle: 'File:Harbin Saint Sophia Cathedral 2017 summer.jpg', creator: 'Amarespeco', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', sourcePhotoDate: '2017-07-14', originalSize: '4,000 × 6,000' },
    { assetPath: '/assets/images/china-destination-inner-mongolia.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hulun_Buir.jpg', sourceTitle: 'File:Hulun Buir.jpg', creator: 'Emmazzye', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', sourcePhotoDate: '2018-07-15', originalSize: '4,213 × 3,160' },
    { assetPath: '/assets/images/china-destination-huangshan.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Huangshan_pic_6.jpg', sourceTitle: 'File:Huangshan pic 6.jpg', creator: 'eviltomthai', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/', sourcePhotoDate: '2009-09-28', originalSize: '3,888 × 2,592' },
    { assetPath: '/assets/images/china-destination-qingdao.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Qingdao_Zhanqiao.jpg', sourceTitle: 'File:Qingdao Zhanqiao.jpg', creator: 'Vitsuha', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/', sourcePhotoDate: '2021-07-19', originalSize: '3,648 × 2,736' }
  ];
  for (const image of chinaCn12Photos) {
    const record = photoRecords.find((item) => item.assetPath === image.assetPath);
    assert.ok(record, `China CN12 photo inventory must retain ${image.assetPath}`);
    assert.equal(record.sourceUrl, image.sourceUrl);
    assert.equal(record.sourceTitle, image.sourceTitle);
    assert.equal(record.creator, image.creator);
    assert.equal(record.license, image.license);
    assert.equal(record.licenseUrl, image.licenseUrl);
    assert.equal(record.sourcePhotoDate, image.sourcePhotoDate);
    assert.equal(record.verificationStatus, 'source_page_checked');
    assert.equal(record.verificationDate, '2026-10-11');
    assert.equal(record.commercialReuseEligibility, 'permitted_under_source_page_checked_license_terms');
    assert.equal(record.visualReviewStatus, 'visually_reviewed_2026-10-11');
    assert.ok(record.verificationDetail.includes(image.originalSize), 'Commons original dimensions must be recorded');
    assert.ok(record.verificationDetail?.includes('WebP pixels were inspected'), `${image.assetPath}: source-page metadata does not stand in for pixel review (${record.verificationDetail || 'no verification detail'})`);
    assert.ok(record.rawVisibleCredits.some((credit) => credit.includes(image.creator) && credit.includes(image.license)));
    assert.ok(record.editHistory.includes('WebP'), 'photo edit history must disclose the local WebP asset');
    if (image.license.startsWith('CC BY-SA ')) {
      assert.ok(record.editHistory.includes(`shared under ${image.license}`), 'share-alike adaptations must keep the exact license version');
    }
  }
  const chinaCn15Routes = new Set(['/china/', '/china/beijing/', '/china/hangzhou/', '/china/beijing/summer-palace/']);
  const chinaCn15PhotoRecords = photoRecords.filter((record) => record.routes?.some((route) => chinaCn15Routes.has(route)) && !record.assetPath.includes('lhasa') && !record.assetPath.includes('potala'));
  assert.equal(chinaCn15PhotoRecords.length, 47, 'the four CN15 routes use 47 distinct reviewed local image assets, excluding the Lhasa image assigned to parallel work');
  for (const record of chinaCn15PhotoRecords) {
    assert.ok(!record.assetPath.includes('lhasa') && !record.assetPath.includes('potala'), 'the parallel Lhasa/Potala image must remain outside this review');
    assert.equal(record.verificationStatus, 'source_page_checked', `${record.assetPath} must have an exact source-page check`);
    assert.equal(record.verificationDate, '2026-10-11', `${record.assetPath} source page must carry the CN15 check date`);
    assert.equal(record.visualReviewStatus, 'visually_reviewed_2026-10-11', `${record.assetPath} local pixels must be individually reviewed`);
    assert.ok(/WebP pixels were inspected/i.test(record.verificationDetail), `${record.assetPath} must record a pixel-to-source comparison`);
    assert.ok(/does not independently establish|not independent|not an independent/i.test(record.verificationDetail), `${record.assetPath} must not imply global rights clearance`);
    assert.ok(record.sourceUrl?.startsWith('https://commons.wikimedia.org/wiki/File:'), `${record.assetPath} must identify its exact Commons file page`);
    assert.ok(record.creator && record.license && record.licenseUrl, `${record.assetPath} must retain its author and exact linked license`);
    assert.ok(record.rawVisibleCredits.some((credit) => credit.includes(record.creator) && credit.includes(record.license)), `${record.assetPath} must match its visible creator and license credit`);
    assert.ok(record.editHistory.includes('WebP'), `${record.assetPath} must disclose the local WebP adaptation`);
    if (record.license.startsWith('CC BY-SA ')) {
      for (const credit of record.rawVisibleCredits.filter((item) => /shared under the same/i.test(item))) {
        assert.ok(credit.includes(record.license), `${record.assetPath} must keep any visible share-alike statement on the exact source license version`);
      }
    }
  }
  for (const assetPath of ['/assets/images/china-destination-hangzhou.webp', '/assets/images/china-hangzhou-west-lake.webp']) {
    const record = chinaCn15PhotoRecords.find((item) => item.assetPath === assetPath);
    assert.ok(record, `CN15 West Lake source review must include ${assetPath}`);
    assert.equal(record.sourceUrl, 'https://commons.wikimedia.org/wiki/File:West_lake_and_Leifeng_pagoda_-Hangzhou-China_-_panoramio.jpg');
    assert.equal(record.creator, 'Haluk Comertel');
    assert.equal(record.license, 'CC BY 3.0');
  }
  const hangzhouLeifeng = chinaCn15PhotoRecords.find((record) => record.assetPath === '/assets/images/china-hangzhou-leifeng.webp');
  assert.ok(hangzhouLeifeng, 'CN15 review must distinguish the close Leifeng Pagoda image from the West Lake panorama');
  assert.equal(hangzhouLeifeng.sourceUrl, 'https://commons.wikimedia.org/wiki/File:Hangzhou_Leifeng_Pagoda_20161006.jpg');
  assert.equal(hangzhouLeifeng.sourceTitle, 'File:Hangzhou Leifeng Pagoda 20161006.jpg');
  assert.equal(hangzhouLeifeng.creator, 'Tyg728');
  assert.equal(hangzhouLeifeng.license, 'CC BY-SA 4.0');
  assert.equal(hangzhouLeifeng.verificationStatus, 'source_page_checked');
  assert.equal(hangzhouLeifeng.visualReviewStatus, 'visually_reviewed_2026-10-11');
  const shanghaiPudong = chinaCn15PhotoRecords.find((record) => record.assetPath === '/assets/images/china-shanghai-huangpu-panorama.webp');
  assert.ok(shanghaiPudong, 'CN15 Shanghai skyline review must retain the country-hub panorama');
  assert.equal(shanghaiPudong.sourceUrl, 'https://commons.wikimedia.org/wiki/File:Shanghai_skyline_waterfront_pudong_5166168_69_70.jpg');
  assert.equal(shanghaiPudong.creator, 'Ermell');
  assert.equal(shanghaiPudong.license, 'CC0 1.0');
  assert.ok(!shanghaiPudong.rawVisibleCredits.some((credit) => credit.includes('King of Hearts')));
  const wadjemupDiagram = photoRecords.find((item) => item.assetPath === wadjemupDiagramAssetPath);
  assert.ok(wadjemupDiagram, 'inventory must retain the original Wadjemup planning diagram');
  assert.equal(wadjemupDiagram.assetType, 'original-planning-diagram');
  assert.equal(wadjemupDiagram.sourceUrl, wadjemupDiagramSourceUrl);
  assert.equal(wadjemupDiagram.creator, 'TripDistill Editorial Team');
  assert.equal(wadjemupDiagram.license, null, 'a project-original diagram must not claim an unapproved public license');
  assert.equal(wadjemupDiagram.licenseUrl, null);
  assert.equal(wadjemupDiagram.rightsStatus, 'Project original; no separate reuse license declared');
  assert.equal(wadjemupDiagram.rightsStatusUrl, 'https://tripdistill.com/terms-of-use/');
  assert.equal(wadjemupDiagram.commercialReuseEligibility, 'unknown');
  assert.equal(report.counts.completeProjectOriginalRightsRecords, 9, 'inventory must count project-original artwork, including the Lille–Vimy sequence diagram');
  assert.match(wadjemupDiagram.localSha1, /^[a-f0-9]{40}$/);
  assert.equal(wadjemupDiagram.verificationStatus, 'site_credit_or_metadata_only', 'the original diagram is not represented as an external photo or source-page check');
  assert.ok(wadjemupDiagram.verificationDetail.includes('not a geographic map'));
  assert.ok(wadjemupDiagram.verificationDetail.includes('not an independent source-page check'));
  assert.ok(wadjemupDiagram.verificationDetail.includes('no separate reuse license declared'));
  assert.equal(report.unmatchedAssets.some((item) => item.src === wadjemupDiagramAssetPath), false);
  const melakaDiagram = photoRecords.find((item) => item.assetPath === melakaDiagramAssetPath);
  assert.ok(melakaDiagram, 'inventory must include the original Melaka route schematic');
  assert.equal(melakaDiagram.assetType, 'original-planning-diagram');
  assert.equal(melakaDiagram.sourceUrl, melakaDiagramSourceUrl);
  assert.equal(melakaDiagram.creator, 'TripDistill Editorial Team');
  assert.equal(melakaDiagram.license, null, 'the original Melaka SVG must not claim a public photo license');
  assert.equal(melakaDiagram.rightsStatus, 'Project original; no separate reuse license declared');
  assert.equal(melakaDiagram.rightsStatusUrl, 'https://tripdistill.com/terms-of-use/');
  assert.equal(melakaDiagram.inventoryStatus, 'used');
  assert.equal(melakaDiagram.useCount, 6);
  assert.deepEqual(melakaDiagram.routes, [
    '/malaysia/melaka/',
    '/malaysia/melaka/bandar-hilir-portuguese-settlement/',
    '/malaysia/melaka/dutch-square-st-pauls/',
    '/malaysia/melaka/jonker-harmony-street/',
    '/malaysia/melaka/melaka-river-kampung-morten/'
  ]);
  assert.ok(melakaDiagram.altTexts.some((alt) => /non-scale/i.test(alt)));
  assert.match(melakaDiagram.localSha1, /^[a-f0-9]{40}$/);
  assert.ok(melakaDiagram.verificationDetail.includes('not a geographic map'));
  assert.ok(melakaDiagram.verificationDetail.includes('no separate reuse license declared'));
  const melakaRetired = photoRecords.find((item) => item.assetPath === melakaRetiredAssetPath);
  assert.ok(melakaRetired, 'inventory must retain the conflicted Melaka photo for provenance');
  assert.equal(fs.existsSync(path.join(root, melakaRetiredAssetPath.slice(1))), true, 'retired Melaka photo file must remain in the repository');
  assert.equal(melakaRetired.sourceUrl, melakaRetiredSourceUrl);
  assert.equal(melakaRetired.sourceTitle, 'Waiting for iftar at Kampung Morten');
  assert.equal(melakaRetired.creator, 'Scrivenshaft');
  assert.equal(melakaRetired.license, null, 'the conflicting source-page license statement must not be recorded as permission');
  assert.match(melakaRetired.rightsStatus, /CC BY-SA 4\.0.*EXIF.*Copyright 2019/i);
  assert.equal(melakaRetired.inventoryStatus, 'unused');
  assert.equal(melakaRetired.useCount, 0);
  assert.deepEqual(melakaRetired.routes, []);
  assert.match(melakaRetired.retirementNote, /must not be used on the site/i);
  assert.equal(report.counts.buildImageFilesExcludedForRightsReview, 2, 'both preserved rights-review photographs must be excluded from dist');
  assert.equal(report.counts.expectedBuildImageCount, 800, 'the two original Malaysia diagrams must be included while the preserved Melaka rights-review photo remains excluded');
  assert.equal(report.unmatchedAssets.some((item) => item.src === melakaRetiredAssetPath), false, 'the documented retired photo is not an active attribution gap');
  assert.equal(report.unmatchedAssets.some((item) => item.src === melakaDiagramAssetPath), false, 'the credited original diagram is not an attribution gap');
  const malaysiaChildDiagrams = [
    { assetPath: '/assets/images/tripdistill-dayang-bunting-chain.svg', sourceUrl: 'https://tripdistill.com/assets/images/tripdistill-dayang-bunting-chain.svg', route: '/malaysia/langkawi/dayang-bunting-island/', localSha1: '4fa1aa4f07e34d186ee6527ccb68aaf464371778' },
    { assetPath: '/assets/images/tripdistill-kellies-castle-transfer.svg', sourceUrl: 'https://tripdistill.com/assets/images/tripdistill-kellies-castle-transfer.svg', route: '/malaysia/ipoh-kinta-valley/batu-gajah-kellies-castle/', localSha1: 'e940d32c9085a71ef5b4ca3f52ef8eea2fc2b13f' }
  ];
  for (const diagram of malaysiaChildDiagrams) {
    const record = photoRecords.find((item) => item.assetPath === diagram.assetPath);
    assert.ok(record, `inventory must include the original Malaysia planning diagram ${diagram.assetPath}`);
    assert.equal(fs.existsSync(path.join(root, diagram.assetPath.slice(1))), true);
    assert.equal(record.assetType, 'original-planning-diagram');
    assert.equal(record.sourceUrl, diagram.sourceUrl);
    assert.equal(record.creator, 'TripDistill Editorial Team');
    assert.equal(record.license, null, 'a project-original planning diagram must not claim an unapproved public license');
    assert.equal(record.rightsStatus, 'Project original; no separate reuse license declared');
    assert.equal(record.rightsStatusUrl, 'https://tripdistill.com/terms-of-use/');
    assert.equal(record.commercialReuseEligibility, 'unknown');
    assert.equal(record.inventoryStatus, 'used');
    assert.equal(record.useCount, 1);
    assert.deepEqual(record.routes, [diagram.route]);
    assert.ok(record.altTexts.some((alt) => /not to scale/i.test(alt)));
    assert.equal(record.localSha1, diagram.localSha1);
    assert.equal(record.verificationStatus, 'site_credit_or_metadata_only');
    assert.ok(record.verificationDetail.includes('not an independent source-page check'));
    assert.ok(record.verificationDetail.includes('no separate reuse license declared'));
    assert.equal(report.unmatchedAssets.some((item) => item.src === diagram.assetPath), false);
  }
  const chinaLhasaRetired = photoRecords.find((item) => item.assetPath === chinaLhasaRetiredAssetPath);
  assert.ok(chinaLhasaRetired, 'inventory must retain the challenged Lhasa photo for provenance');
  assert.equal(fs.existsSync(path.join(root, chinaLhasaRetiredAssetPath.slice(1))), true);
  assert.equal(chinaLhasaRetired.sourceUrl, chinaLhasaRetiredSourceUrl);
  assert.equal(chinaLhasaRetired.sourceTitle, 'File:Potala Palace HQ.jpg');
  assert.equal(chinaLhasaRetired.license, null, 'the unresolved Commons license label must not be recorded as permission');
  assert.equal(chinaLhasaRetired.inventoryStatus, 'unused');
  assert.equal(chinaLhasaRetired.useCount, 0);
  assert.deepEqual(chinaLhasaRetired.routes, []);
  assert.equal(chinaLhasaRetired.verificationDate, '2026-10-11');
  assert.match(chinaLhasaRetired.verificationDetail, /unresolved deletion nomination/i);
  assert.match(chinaLhasaRetired.retirementNote, /no evidence that the image was released under the given license/i);
  assert.equal(report.unmatchedAssets.some((item) => item.src === chinaLhasaRetiredAssetPath), false, 'an intentionally unlicensed retired file is documented, not counted as an active attribution gap');
  const franceVimyRetired = photoRecords.find((item) => item.assetPath === franceVimyRetiredAssetPath);
  assert.ok(franceVimyRetired, 'inventory must retain the Vimy photograph with the unresolved NoFoP-France warning');
  assert.equal(fs.existsSync(path.join(root, franceVimyRetiredAssetPath.slice(1))), true, 'the original Vimy WebP remains in the repository');
  assert.equal(franceVimyRetired.sourceUrl, franceVimyRetiredSourceUrl);
  assert.equal(franceVimyRetired.sourceTitle, 'File:2017-05 Canadian National Vimy Memorial 01.jpg');
  assert.equal(franceVimyRetired.creator, '0x010C');
  assert.equal(franceVimyRetired.license, 'CC BY-SA 3.0', 'preserve the Commons declaration as metadata, not as a clearance conclusion');
  assert.equal(franceVimyRetired.localSha1, '2012cdfb09da624b118ecd75a372cc6165497853');
  assert.equal(franceVimyRetired.inventoryStatus, 'unused');
  assert.equal(franceVimyRetired.useCount, 0);
  assert.deepEqual(franceVimyRetired.routes, []);
  assert.equal(franceVimyRetired.verificationStatus, 'source_page_checked');
  assert.equal(franceVimyRetired.verificationDate, '2026-10-12');
  assert.equal(franceVimyRetired.visualReviewStatus, 'visually_reviewed_2026-10-12');
  assert.match(franceVimyRetired.rightsStatus, /NoFoP-France.*do not reuse/i);
  assert.match(franceVimyRetired.retirementNote, /not treated as reuse permission/i);
  assert.match(franceVimyRetired.verificationDetail, /NoFoP-France/i);
  assert.equal(report.unmatchedAssets.some((item) => item.src === franceVimyRetiredAssetPath), false, 'the documented retired Vimy photograph is not an active attribution gap');
  const franceVimyDiagram = photoRecords.find((item) => item.assetPath === franceVimyDiagramAssetPath);
  assert.ok(franceVimyDiagram, 'inventory must include the original five-language Vimy sequence diagram');
  assert.equal(franceVimyDiagram.assetType, 'original-planning-diagram');
  assert.equal(franceVimyDiagram.sourceUrl, franceVimyDiagramSourceUrl);
  assert.equal(franceVimyDiagram.creator, 'TripDistill Editorial Team');
  assert.equal(franceVimyDiagram.license, null, 'original SVG must not claim a third-party license');
  assert.equal(franceVimyDiagram.rightsStatus, 'Project original; no separate reuse license declared');
  assert.equal(franceVimyDiagram.rightsStatusUrl, 'https://tripdistill.com/terms-of-use/');
  assert.equal(franceVimyDiagram.inventoryStatus, 'used');
  assert.equal(franceVimyDiagram.useCount, 4);
  assert.deepEqual(franceVimyDiagram.routes, [
    '/france/lille-french-flanders/',
    '/france/lille-french-flanders/arras-vimy-remembrance/',
    '/france/lille-french-flanders/old-lille-roubaix/',
    '/france/lille-french-flanders/opal-coast-headlands/'
  ]);
  assert.equal(franceVimyDiagram.localSha1, 'f0d98e0797bcff135af3e4997f6795428fd82615');
  assert.equal(franceVimyDiagram.verificationStatus, 'site_credit_or_metadata_only');
  assert.equal(franceVimyDiagram.visualReviewStatus, 'visually_reviewed_2026-10-12');
  assert.ok(franceVimyDiagram.altTexts.some((alt) => /not a geographic map.*not to scale.*not a live timetable/i.test(alt)));
  assert.equal(report.unmatchedAssets.some((item) => item.src === franceVimyDiagramAssetPath), false);
  const chinaLhasaDiagram = photoRecords.find((item) => item.assetPath === chinaLhasaDiagramAssetPath);
  assert.ok(chinaLhasaDiagram, 'inventory must include the original Lhasa SVG');
  assert.equal(chinaLhasaDiagram.assetType, 'original-planning-diagram');
  assert.equal(chinaLhasaDiagram.inventoryStatus, 'used');
  assert.equal(chinaLhasaDiagram.license, null, 'the SVG must not claim a public license');
  assert.equal(chinaLhasaDiagram.rightsStatus, 'Project original; no separate reuse license declared');
  assert.match(chinaLhasaDiagram.localSha1, /^[a-f0-9]{40}$/);
  assert.match(chinaLhasaDiagram.verificationDetail, /not a geographic map/i);
  const chinaXinjiang = photoRecords.find((item) => item.assetPath === chinaXinjiangAssetPath);
  assert.ok(chinaXinjiang, 'inventory must include the Xinjiang corridor photo');
  assert.equal(chinaXinjiang.sourceUrl, chinaXinjiangSourceUrl);
  assert.equal(chinaXinjiang.sourceTitle, 'File:Hëytgah Mosque, Kashi (20230923100109).jpg');
  assert.equal(chinaXinjiang.creator, 'N509FZ');
  assert.equal(chinaXinjiang.sourcePhotoDate, '2023-09-23');
  assert.equal(chinaXinjiang.license, 'CC BY-SA 4.0');
  assert.equal(chinaXinjiang.licenseUrl, 'https://creativecommons.org/licenses/by-sa/4.0/');
  assert.equal(chinaXinjiang.verificationStatus, 'source_page_checked');
  assert.equal(chinaXinjiang.verificationDate, '2026-10-11');
  assert.equal(chinaXinjiang.visualReviewStatus, 'visually_reviewed_2026-10-11');
  assert.match(chinaXinjiang.verificationDetail, /4,990 × 3,327/);
  assert.ok(chinaXinjiang.editHistory.includes('shared under CC BY-SA 4.0'));
  assert.ok(chinaXinjiang.rawVisibleCredits.some((credit) => credit.includes('N509FZ') && credit.includes('CC BY-SA 4.0')));
  assert.equal(report.unmatchedAssets.some((item) => item.src === chinaXinjiangAssetPath), false);
  const ukKeswickOld = photoRecords.find((item) => item.assetPath === ukKeswickOldAssetPath);
  assert.ok(ukKeswickOld, 'inventory must retain the retired Keswick photo record');
  assert.equal(ukKeswickOld.inventoryStatus, 'unused', 'retired Keswick photo must be explicitly marked unused');
  assert.equal(ukKeswickOld.useCount, 0, 'retired Keswick photo must have no live English references');
  assert.match(ukKeswickOld.retirementNote, /private-use-only assertion/i, 'Keswick metadata conflict must remain visible without a rights conclusion');
  const ukCarlisleOld = photoRecords.find((item) => item.assetPath === ukCarlisleOldAssetPath);
  assert.ok(ukCarlisleOld, 'inventory must retain the retired Carlisle photo record');
  assert.equal(ukCarlisleOld.inventoryStatus, 'unused', 'retired Carlisle photo must be explicitly marked unused');
  assert.equal(ukCarlisleOld.useCount, 0, 'retired Carlisle photo must have no live English references');
  assert.match(ukCarlisleOld.retirementNote, /independent source verification/i, 'Carlisle verification limitation must remain visible');
  for (const assetPath of ukLakeDiagramPaths) {
    const diagram = photoRecords.find((item) => item.assetPath === assetPath);
    assert.ok(diagram, `inventory must include original UK diagram ${assetPath}`);
    assert.equal(diagram.assetType, 'original-planning-diagram');
    assert.equal(diagram.inventoryStatus, 'used');
    assert.ok(diagram.useCount > 0);
    assert.equal(diagram.creator, 'TripDistill Editorial Team');
    assert.equal(diagram.license, null, 'original UK diagrams must not claim a public license');
    assert.equal(diagram.rightsStatus, 'Project original; no separate reuse license declared');
    assert.equal(diagram.rightsStatusUrl, 'https://tripdistill.com/terms-of-use/');
    assert.match(diagram.localSha1, /^[a-f0-9]{40}$/);
    assert.ok(diagram.verificationDetail.includes('not a geographic map'));
    assert.equal(report.unmatchedAssets.some((item) => item.src === assetPath), false);
  }
  const ayutthayaPhotos = [
    { assetPath: '/assets/images/thailand-ayutthaya-station.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ayutthaya_railway_station.jpg', creator: 'Jr8825', license: 'CC BY-SA 3.0', sourcePhotoDate: '2013-02-13', revision: '1070665767' },
    { assetPath: '/assets/images/thailand-ayutthaya-wat-lokayasutharam.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Wat_Lokayasutharam_(Temple)_Ayuthaya,_Thailand.jpg', creator: 'Nayika C.', license: 'CC BY-SA 3.0', sourcePhotoDate: '2014-06-03', revision: '1243205521' },
    { assetPath: '/assets/images/thailand-ayutthaya-wat-yai-chai-mongkhon.webp', sourceUrl: 'https://commons.wikimedia.org/wiki/File:%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%A1%E0%B8%87%E0%B8%84%E0%B8%A5_1_%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%Bนคร%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%AD%E0%B8%A2%E0%B8%B8%E0%B8%98%E0%B8%A2%E0%B8%B2.jpg', creator: 'Kriengsak Jirasirirojanakorn', license: 'CC BY-SA 4.0', sourcePhotoDate: '2023-12-26', revision: '1192944501' }
  ];
  for (const image of ayutthayaPhotos) {
    const record = photoRecords.find((item) => item.assetPath === image.assetPath);
    assert.ok(record, `Ayutthaya inventory must retain ${image.assetPath}`);
    assert.equal(record.sourceUrl, image.sourceUrl);
    assert.equal(record.creator, image.creator);
    assert.equal(record.license, image.license);
    assert.equal(record.licenseUrl, `https://creativecommons.org/licenses/${image.license === 'CC BY-SA 3.0' ? 'by-sa/3.0' : 'by-sa/4.0'}/`);
    assert.equal(record.sourcePhotoDate, image.sourcePhotoDate);
    assert.equal(record.metadataOrigin, 'explicit_asset_credit_match');
    assert.equal(record.verificationStatus, 'source_page_checked');
    assert.equal(record.verificationDate, '2026-10-09');
    assert.ok(record.verificationDetail.includes(`revision ${image.revision}`));
    assert.ok(record.verificationDetail.includes('does not independently establish worldwide rights clearance'));
    assert.equal(record.visualReviewStatus, 'visually_reviewed_2026-10-09');
    assert.ok(record.editHistory.includes(`adaptation shared under ${image.license}`));
  }
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
  console.log('Photo inventory regression passed: three Ayutthaya Commons revisions, creators, CC BY-SA versions, pixel reviews and share-alike credits are recorded without implying worldwide rights clearance; the three Côte d’Azur photos retain pixel reviews and source-page declarations without implying independent clearance; five reviewed Chiang Mai images retain source, creator, license, pixel review and five-locale credits; the Mae Sa date discrepancy stays unresolved; 18 Da Nang, Bangkok and Victoria images retain source-page checks, pixel reviews and hashes; five Seoul/Busan credits retain source metadata without implying pixel review; the Seoul Tourism Archive note is localized in all five editions; Chatuchak source, license and pixels are checked, and Talat Noi remains an unused orphan.');
} finally {
  // The audit command is read-only with respect to committed generated reports.
  for (const [file, content] of originalArtifacts) fs.writeFileSync(file, content);
}
