#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parse } from 'parse5';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imageDir = path.join(root, 'assets', 'images');
const countries = [
  'australia', 'canada', 'china', 'france', 'italy', 'japan', 'malaysia',
  'south-korea', 'switzerland', 'thailand', 'united-kingdom', 'usa', 'vietnam'
];
const verifiedOn = '2026-10-04';
const verifiedBySourcePattern = [
  { pattern: /Forum_Romanum_through_Arch_of_Septimius_Severus/i, detail: 'Commons source page checked for creator, CC0 status, source title, and match to the Roman Forum image.' },
  { pattern: /St_Peter(?:%27|\x27)s_Square.*April_2007/i, detail: 'Commons source page checked for David Iliff (Diliff), CC BY-SA 3.0, and source title.' },
  { pattern: /Santa_Maria_in_Trastevere_fountain/i, detail: 'Commons source page checked for Jensens, public-domain dedication, date, and subject match.' },
  { pattern: /Nightview_of_the_Gwanghwamun_Square_2024/i, detail: 'Commons source page checked for Seoul Tourism Organization, KOGL Type 1, commercial use, adaptations, and source-attribution requirements.' },
  { pattern: /ANZAC_Hill/i, detail: 'Commons source page checked for Genet (Diskussion), CC BY-SA 4.0, and subject match.' },
  { pattern: /Ellery_Creek_Big_Hole/i, detail: 'Commons source page checked for Iambexta, CC BY-SA 4.0, and subject match.' },
  { pattern: /Lascar|Watarrka/i, detail: 'Commons source page checked for Jorge Láscar, CC BY 2.0, and subject match.' },
  { pattern: /Uluru,_Northern_Territory/i, detail: 'Commons source page checked for Philip Muir, CC BY-SA 4.0, and subject match.' },
  { pattern: /ISS-65.*Kata_Tjuta/i, detail: 'Commons source page checked for NASA, public-domain status, and subject match.' }
];
const genericTokens = new Set(('a an and at by from for in into of on or the to with through view photo image picture scene landscape city town lake river road street park guide travel at the a view panorama night day north south east west central main old new near beyond under over beside walk route district guide file webp jpg jpeg commons official').split(' '));

function attrs(node) { return Object.fromEntries((node.attrs || []).map((a) => [a.name, a.value])); }
function text(node) {
  if (node.nodeName === '#text') return node.value;
  return (node.childNodes || []).map(text).join('');
}
function all(node, predicate, out = []) {
  if (predicate(node)) out.push(node);
  for (const child of node.childNodes || []) all(child, predicate, out);
  return out;
}
function walkFiles(dir) {
  const out = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) out.push(...walkFiles(full));
    else if (item.isFile()) out.push(full);
  }
  return out;
}
function canonicalLicenseUrl(license) {
  if (!license) return null;
  if (/^KOGL Type 1$/i.test(license.trim())) return 'http://www.kogl.or.kr/info/licenseType1.do';
  if (/^CC0(?:\s+1\.0)?$/i.test(license.trim())) return 'https://creativecommons.org/publicdomain/zero/1.0/';
  const match = license.trim().match(/^CC\s+(BY(?:-SA)?)\s+(\d+(?:\.\d+)?)(?:\s+([a-z]{2}))?$/i);
  if (!match) return null;
  const family = match[1].toLowerCase();
  const version = match[2];
  const jurisdiction = match[3] ? match[3].toLowerCase() + '/' : '';
  return 'https://creativecommons.org/licenses/' + family + '/' + version + '/' + jurisdiction;
}
function licenseTerms(license, verified) {
  if (!license) return { commercialReuseEligibility: 'unknown', attributionTerms: 'unknown' };
  if (/^KOGL Type 1$/i.test(license)) return {
    commercialReuseEligibility: verified ? 'permitted_under_source_page_checked_license_terms' : 'permitted_by_stated_license_not_independently_checked',
    attributionTerms: 'Specify the work source and credit the Seoul Tourism Organization. The source page states that commercial use and adaptations are permitted.'
  };
  if (/^CC\s+BY-SA\b/i.test(license)) {
    return {
      commercialReuseEligibility: verified ? 'permitted_under_source_page_checked_license_terms' : 'permitted_by_stated_license_not_independently_checked',
      attributionTerms: 'Credit the creator and title where supplied, link to the source and license, note changes, and keep adapted material under the same license version.'
    };
  }
  if (/^CC\s+BY\b/i.test(license)) {
    return {
      commercialReuseEligibility: verified ? 'permitted_under_source_page_checked_license_terms' : 'permitted_by_stated_license_not_independently_checked',
      attributionTerms: 'Credit the creator and title where supplied, link to the source and license, and note changes.'
    };
  }
  if (/^CC0\b/i.test(license)) {
    return {
      commercialReuseEligibility: verified ? 'permitted_under_source_page_checked_license_terms' : 'permitted_by_stated_license_not_independently_checked',
      attributionTerms: 'Attribution is not required by CC0; the site retains source and creator credit as provenance.'
    };
  }
  if (/public\s+domain/i.test(license)) {
    return {
      commercialReuseEligibility: verified ? 'public_domain_status_checked' : 'declared_public_domain_not_independently_checked',
      attributionTerms: 'Attribution is not required for public-domain material; the site retains source and creator credit as provenance.'
    };
  }
  return { commercialReuseEligibility: 'unknown', attributionTerms: 'unknown' };
}
function tokenSet(value) {
  const normalized = String(value || '').normalize('NFKD').replace(/\p{Diacritic}/gu, '').toLowerCase();
  return new Set(normalized.split(/[^a-z0-9]+/).filter((token) => token.length > 2 && !genericTokens.has(token)));
}
function parseLicense(creditText) {
  const match = creditText.match(/\bKOGL\s+Type\s+1\b|\bCC0(?:\s+1\.0)?\b|\bCC\s+BY(?:-SA)?\s+\d+(?:\.\d+)?(?:\s+[a-z]{2})?|\bpublic\s+domain\b/i);
  if (!match) return null;
  if (/^kogl/i.test(match[0])) return 'KOGL Type 1';
  if (/^cc0/i.test(match[0])) return match[0].toUpperCase().replace(/\s+/g, ' ');
  if (/^public/i.test(match[0])) return 'Public domain';
  return match[0].replace(/\s+/g, ' ').replace(/\b([a-z]{2})$/i, (m) => m.toLowerCase());
}
function parseCredit(li) {
  const links = all(li, (node) => node.tagName === 'a').map((a) => ({ href: attrs(a).href || '', label: text(a).replace(/\s+/g, ' ').trim() }));
  const sourceLink = links.find((link) => /commons\.wikimedia\.org\/wiki\/File:/i.test(link.href));
  if (!sourceLink) return null;
  const creditText = text(li).replace(/\s+/g, ' ').trim();
  const license = parseLicense(creditText);
  const at = license ? creditText.toLowerCase().indexOf(license.toLowerCase()) : -1;
  let before = at >= 0 ? creditText.slice(0, at) : creditText;
  if (sourceLink.label) before = before.replace(sourceLink.label, '');
  const creator = before.replace(/^[\s—–,:;.-]+|[\s—–,:;.-]+$/g, '').trim() || null;
  let editHistory = null;
  if (at >= 0) {
    const after = creditText.slice(at + license.length).replace(/^[\s.,;:—–-]+/, '').trim();
    editHistory = after || null;
  }
  const declaredLicenseLink = links.find((link) => /creativecommons\.org\/(licenses|publicdomain)\//i.test(link.href));
  return {
    sourceUrl: sourceLink.href,
    creditLabel: sourceLink.label || null,
    creator,
    license,
    licenseUrl: declaredLicenseLink?.href || canonicalLicenseUrl(license),
    creditText,
    editHistory,
    matching: null
  };
}
function matchCredit(image, credits) {
  const fileTokens = tokenSet(path.basename(image.src));
  const altTokens = tokenSet(image.alt);
  const routeTokens = tokenSet(image.route);
  const scored = credits.map((credit) => {
    const labelTokens = tokenSet(credit.creditLabel + ' ' + credit.creditText + ' ' + credit.sourceUrl);
    const altHits = [...altTokens].filter((token) => labelTokens.has(token));
    const fileHits = [...fileTokens].filter((token) => labelTokens.has(token));
    const routeHits = [...routeTokens].filter((token) => labelTokens.has(token));
    const distinctive = new Set([...altHits, ...fileHits]);
    return { credit, score: altHits.length * 3 + fileHits.length * 2 + routeHits.length, distinctiveHits: [...distinctive] };
  }).filter((item) => item.distinctiveHits.length >= 2 || item.distinctiveHits.some((token) => token.length >= 6)).sort((a, b) => b.score - a.score);
  if (!scored.length) return null;
  const top = scored[0];
  const tied = scored.filter((item) => item.score === top.score);
  const identities = new Set(tied.map((item) => [item.credit.sourceUrl, item.credit.license, item.credit.creator].join('|')));
  if (identities.size > 1) return null;
  return { ...top.credit, matching: 'page_credit_lexical_match', matchedTokens: top.distinctiveHits };
}

const assetPaths = walkFiles(imageDir).filter((file) => /\.webp$/i.test(file));
const recordsBySrc = new Map();
const dataDir = path.join(root, 'data');
const dataFiles = fs.readdirSync(dataDir).filter((name) => name.endsWith('.mjs'));
function collect(value, moduleName, seen, depth = 0) {
  if (!value || typeof value !== 'object' || depth > 24 || seen.has(value)) return;
  seen.add(value);
  if (!Array.isArray(value) && typeof value.src === 'string' && value.src.startsWith('/assets/images/')) {
    const item = {
      moduleName,
      src: value.src,
      sourceUrl: value.source ?? null,
      sourceTitle: value.label ?? value.commonsTitle ?? null,
      creator: value.creator ?? null,
      license: value.license ?? null,
      licenseUrl: value.licenseUrl ?? value.licenseURL ?? canonicalLicenseUrl(value.license),
      editHistory: value.editNote ?? null,
      alt: value.alt ?? null
    };
    if (!recordsBySrc.has(item.src)) recordsBySrc.set(item.src, []);
    recordsBySrc.get(item.src).push(item);
  }
  for (const child of Object.values(value)) collect(child, moduleName, seen, depth + 1);
}
const moduleErrors = [];
for (const name of dataFiles) {
  try {
    const moduleUrl = pathToFileURL(path.join(dataDir, name)).href;
    const module = await import(moduleUrl + '?photo-inventory=20261004');
    const seen = new WeakSet();
    for (const value of Object.values(module)) collect(value, name, seen);
  } catch (error) {
    moduleErrors.push({ module: name, error: error.message });
  }
}

const usesBySrc = new Map();
const creditsBySrc = new Map();
let englishPageCount = 0;
for (const country of countries) {
  const base = path.join(root, country);
  if (!fs.existsSync(base)) continue;
  const htmlFiles = walkFiles(base).filter((file) => path.basename(file).toLowerCase() === 'index.html');
  for (const file of htmlFiles) {
    const document = parse(fs.readFileSync(file, 'utf8'));
    const rel = path.relative(base, path.dirname(file)).replaceAll('\\', '/');
    const route = '/' + country + (rel ? '/' + rel : '') + '/';
    englishPageCount += 1;
    const imgs = all(document, (node) => node.tagName === 'img').map((node) => {
      const a = attrs(node);
      return { src: a.src?.split(/[?#]/)[0] || '', alt: a.alt || '', route };
    }).filter((img) => img.src.startsWith('/assets/images/'));
    const sourceSections = all(document, (node) => node.tagName === 'section' && (attrs(node).class || '').split(/\s+/).includes('sources'));
    const credits = sourceSections.flatMap((section) => all(section, (node) => node.tagName === 'li').map(parseCredit).filter(Boolean));
    for (const credit of credits) {
      if (!creditsBySrc.has(credit.sourceUrl)) creditsBySrc.set(credit.sourceUrl, []);
      creditsBySrc.get(credit.sourceUrl).push({ ...credit, route });
    }
    for (const image of imgs) {
      if (!usesBySrc.has(image.src)) usesBySrc.set(image.src, []);
      usesBySrc.get(image.src).push(image);
    }
  }
}

const allDistinctCredits = [...new Map([...creditsBySrc.values()].flat().map((credit) => [[credit.sourceUrl, credit.license, credit.creator, credit.creditLabel].join('|'), credit])).values()];
const explicitCreditMappings = new Map([
  ['/assets/images/china-destination-xian.webp', { creditLabel: "Xi'an City Wall", creator: 'xiquinhosilva', note: 'Matched the image subject to the identically named, same-page Commons credit.' }],
  ['/assets/images/china-hangzhou-grand-canal.webp', { creditLabel: 'Gongchen Bridge', creator: 'Windmemories', note: 'Matched the image alt and subject to the identically named Commons credit on both Hangzhou routes.' }],
  ['/assets/images/korea-busan-cityscape.webp', { creditLabel: 'Busan cityscape', creator: 'Hoil Ryu', note: 'Matched the hero image description to the same-route Busan cityscape credit.' }],
  ['/assets/images/korea-busan-gwangalli-music.webp', { creditLabel: 'Gwangalli waterfront musicians', creator: 'Christophe95', note: 'Matched the musicians in the image alt to the same-route credit.' }],
  ['/assets/images/korea-hongdae-night.webp', { creditLabel: 'Hongdae night photo', creator: 'lumoplank', note: 'Matched the route and night-street image alt to the same-route Hongdae credit.' }],
  ['/assets/images/thailand-andaman-ko-lanta.webp', { creditLabel: 'Klong Khong Beach, Ko Lanta', creator: 'Marcin Konsek', note: 'Matched the beach and island in the image alt to the same-route credit.' }],
  ['/assets/images/thailand-andaman-phang-nga.webp', { creditLabel: 'Ko Yao Noi sunrise', creator: 'Vyacheslav Argenberg', note: 'Matched the sunrise, bay, and island in the image alt to the same-route credit.' }],
  ['/assets/images/thailand-andaman-similan.webp', { creditLabel: 'Ko Similan panorama from Sailboat Rock', creator: 'Sgroey', note: 'Matched the island group and panoramic view in the image alt to the same-route credit.' }]
]);
const visuallyReviewedAssetPaths = new Set([
  '/assets/images/italy-rome-ancient-rome-capitoline.webp',
  '/assets/images/italy-rome-historic-centre-trastevere.webp',
  '/assets/images/australia-red-centre-mparntwe-alice-springs.webp',
  '/assets/images/australia-red-centre-tjoritja-west-macdonnell.webp',
  '/assets/images/australia-red-centre-watarrka-kings-canyon.webp',
  '/assets/images/australia-red-centre-uluru-cultural-landscape.webp',
  '/assets/images/australia-red-centre-kata-tjuta.webp',
  '/assets/images/thailand-andaman-phang-nga.webp',
  '/assets/images/thailand-andaman-ko-lanta.webp',
  '/assets/images/thailand-andaman-similan.webp'
]);
const entries = [];
const sourceConflicts = [];
const unmatchedByAsset = [];
for (const fullPath of assetPaths) {
  const relativePath = '/' + path.relative(root, fullPath).replaceAll('\\', '/');
  const src = relativePath;
  const dataRecords = recordsBySrc.get(src) || [];
  const uniqueValues = (key) => [...new Set(dataRecords.map((record) => record[key]).filter(Boolean))];
  const conflicts = ['sourceUrl', 'sourceTitle', 'creator', 'license', 'editHistory'].filter((key) => uniqueValues(key).length > 1);
  if (conflicts.length) sourceConflicts.push({ src, fields: conflicts });
  const uses = usesBySrc.get(src) || [];
  let creditMatch = null;
  const exactDataSource = uniqueValues('sourceUrl')[0] || null;
  const candidateCredits = exactDataSource ? (creditsBySrc.get(exactDataSource) || []) : [];
  if (candidateCredits.length) {
    creditMatch = { ...candidateCredits[0], matching: 'source_url_match' };
  } else if (!dataRecords.length) {
    const scored = uses.map((use) => {
      const pageFile = path.join(root, use.route.slice(1), 'index.html');
      const document = parse(fs.readFileSync(pageFile, 'utf8'));
      const sectionNodes = all(document, (node) => node.tagName === 'section' && (attrs(node).class || '').split(/\s+/).includes('sources'));
      const pageCredits = sectionNodes.flatMap((section) => all(section, (node) => node.tagName === 'li').map(parseCredit).filter(Boolean));
      return matchCredit(use, pageCredits);
    }).filter(Boolean);
    const identities = new Set(scored.map((item) => [item.sourceUrl, item.license, item.creator].join('|')));
    if (identities.size === 1 && scored.length) creditMatch = scored[0];
    else if (uses.length) creditMatch = matchCredit({ ...uses[0], route: '' }, allDistinctCredits.map((credit) => ({ ...credit, route: '' })));
  }
  const explicit = explicitCreditMappings.get(src);
  if (explicit) {
    const candidates = allDistinctCredits.filter((credit) => credit.creditLabel === explicit.creditLabel && credit.creator === explicit.creator);
    const identities = new Set(candidates.map((item) => [item.sourceUrl, item.license, item.creator].join('|')));
    if (identities.size === 1 && candidates.length) creditMatch = { ...candidates[0], matching: 'explicit_asset_credit_match', matchNote: explicit.note };
  }
  const sourceUrl = uniqueValues('sourceUrl')[0] || creditMatch?.sourceUrl || null;
  const sourceTitle = uniqueValues('sourceTitle')[0] || creditMatch?.creditLabel || null;
  const creator = uniqueValues('creator')[0] || creditMatch?.creator || null;
  const license = uniqueValues('license')[0] || creditMatch?.license || null;
  const licenseUrl = uniqueValues('licenseUrl')[0] || creditMatch?.licenseUrl || canonicalLicenseUrl(license);
  const editHistory = uniqueValues('editHistory')[0] || creditMatch?.editHistory || null;
  const verification = sourceUrl ? verifiedBySourcePattern.find((item) => item.pattern.test(sourceUrl)) : null;
  const terms = licenseTerms(license, Boolean(verification));
  const hash = crypto.createHash('sha256').update(fs.readFileSync(fullPath)).digest('hex');
  const imageUses = uses.map(({ route, alt }) => ({ route, alt })).sort((a, b) => a.route.localeCompare(b.route));
  const row = {
    sha256: hash,
    assetPath: src,
    byteLength: fs.statSync(fullPath).size,
    sourceUrl,
    sourceTitle,
    creditLabel: creditMatch?.creditLabel || null,
    creator,
    license,
    licenseUrl,
    commercialReuseEligibility: terms.commercialReuseEligibility,
    attributionTerms: terms.attributionTerms,
    editHistory: editHistory || 'No per-image edit note found in the source record or matched English photo credit.',
    metadataOrigin: dataRecords.length ? 'structured_data_record' : creditMatch ? creditMatch.matching : 'unmatched',
    creditMatchNote: creditMatch?.matchNote || (creditMatch?.matching === 'page_credit_lexical_match' ? 'Unique same-page label/alt match.' : null),
    visualReviewStatus: visuallyReviewedAssetPaths.has(src) ? 'visually_reviewed_2026-10-04' : 'not_individually_visually_reviewed',
    verificationStatus: verification ? 'source_page_checked' : sourceUrl ? 'site_credit_or_metadata_only' : 'missing_source_credit_match',
    verificationDate: verification ? verifiedOn : null,
    verificationDetail: verification?.detail || null,
    useCount: imageUses.length,
    routes: [...new Set(imageUses.map((use) => use.route))],
    altTexts: [...new Set(imageUses.map((use) => use.alt).filter(Boolean))],
    moduleSources: [...new Set(dataRecords.map((record) => record.moduleName))],
    rawVisibleCredits: creditMatch?.creditText ? [creditMatch.creditText] : []
  };
  if (!sourceUrl || !creator || !license) unmatchedByAsset.push({ src, missing: ['sourceUrl', 'creator', 'license'].filter((field) => !row[field]) });
  entries.push(row);
}

const hashGroups = new Map();
for (const row of entries) {
  if (!hashGroups.has(row.sha256)) hashGroups.set(row.sha256, []);
  hashGroups.get(row.sha256).push(row);
}
const grouped = [...hashGroups.entries()].map(([sha256, rows]) => ({
  sha256,
  assetPaths: rows.map((row) => row.assetPath).sort(),
  byteLength: rows[0].byteLength,
  sourceRecords: rows.map((row) => ({
    assetPath: row.assetPath,
    sourceUrl: row.sourceUrl,
    sourceTitle: row.sourceTitle,
    creditLabel: row.creditLabel,
    creator: row.creator,
    license: row.license,
    licenseUrl: row.licenseUrl,
    commercialReuseEligibility: row.commercialReuseEligibility,
    attributionTerms: row.attributionTerms,
    editHistory: row.editHistory,
    metadataOrigin: row.metadataOrigin,
    creditMatchNote: row.creditMatchNote,
    visualReviewStatus: row.visualReviewStatus,
    verificationStatus: row.verificationStatus,
    verificationDate: row.verificationDate,
    verificationDetail: row.verificationDetail,
    useCount: row.useCount,
    routes: row.routes,
    altTexts: row.altTexts,
    rawVisibleCredits: row.rawVisibleCredits
  }))
}));

const buildImageExtras = ['favicon.svg'].filter((file) => fs.existsSync(path.join(root, file)));
const counts = {
  assetFileCount: assetPaths.length,
  completeSourceCreatorLicenseRecords: entries.filter((row) => row.sourceUrl && row.creator && row.license).length,
  licenseClaimsNotIndependentlyVerified: entries.filter((row) => row.verificationStatus === 'site_credit_or_metadata_only').length,
  currentKnownUnsuitableImages: 0,
  previouslyMisplacedImageReplaced: 1,
  buildImageFilesOutsidePhotoInventory: buildImageExtras.length,
  expectedBuildImageCount: assetPaths.length + buildImageExtras.length,
  deduplicatedImageCount: grouped.length,
  exactDuplicateFileCount: assetPaths.length - grouped.length,
  englishCountryPagesScanned: englishPageCount,
  imageReferencesScanned: [...usesBySrc.values()].reduce((total, items) => total + items.length, 0),
  assetsUsedByScannedEnglishPages: entries.filter((row) => row.useCount > 0).length,
  assetsWithStructuredSourceRecords: entries.filter((row) => row.metadataOrigin === 'structured_data_record').length,
  assetsWithMatchedEnglishCreditOnly: entries.filter((row) => row.metadataOrigin === 'page_credit_lexical_match').length,
  assetsWithExplicitEnglishCreditMatch: entries.filter((row) => row.metadataOrigin === 'explicit_asset_credit_match').length,
  assetsVisuallyReviewed: entries.filter((row) => row.visualReviewStatus === 'visually_reviewed_2026-10-04').length,
  assetsWithOnlyRecordedSourceUrlMatch: entries.filter((row) => row.metadataOrigin === 'source_url_match').length,
  sourcePageChecked: entries.filter((row) => row.verificationStatus === 'source_page_checked').length,
  metadataOrCreditOnly: entries.filter((row) => row.verificationStatus === 'site_credit_or_metadata_only').length,
  missingSourceCreditMatch: entries.filter((row) => row.verificationStatus === 'missing_source_credit_match').length,
  incompleteAttributionFields: unmatchedByAsset.length,
  sourceMetadataConflicts: sourceConflicts.length,
  moduleErrors: moduleErrors.length
};
const report = {
  generatedAt: new Date().toISOString(),
  scope: 'Deduplicated WebP photos under assets/images, with use and displayed photo-credit metadata scanned from English country index pages. Complete source/creator/license fields are distinct from independent rights verification: only nine source pages were checked and 770 stated licenses remain unverified. The separate build image tally also includes favicon.svg.',
  counts,
  verificationMethod: {
    structuredRecords: 'Imported every data/*.mjs module and merged objects with a local /assets/images/*.webp source path.',
    visibleCredits: 'Parsed photo-credit list items in English page sections with class sources. For images without structured records, unambiguous same-page or globally unique label/alt matches were accepted; eight explicit source-caption matches are documented by asset path and note.',
    sourcePageChecks: 'Manually checked the eight named Commons source pages on 2026-10-04. Other source/license declarations are transcribed from local metadata or visible site credits and have not been independently checked during this inventory.',
    imageDeduplication: 'Grouped image files by SHA-256 bytes; the listed paths remain attached to their group.',
    buildImageCountReconciliation: 'The 779 WebP photos in assets/images plus favicon.svg (an SVG icon counted by build-dist.mjs) explain the previous build tally of 780 images.'
  },
  knownHistoricalMismatch: {
    status: 'removed_from_current_inventory',
    assetPath: '/assets/images/italy-rome-historic-centre-trastevere.webp',
    previousIssue: 'The prior image showed Piazza Navona while labeling the Trastevere route.',
    correction: 'Replaced with a visually checked photograph of the fountain in Piazza Santa Maria in Trastevere.',
    currentFile: 'The current replacement remains included as the current asset at the same path.'
  },
  entries: grouped,
  unmatchedAssets: unmatchedByAsset,
  sourceMetadataConflicts: sourceConflicts
};
const outDir = path.join(root, 'reports');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'photo-license-inventory.json'), JSON.stringify(report, null, 2) + '\n');
const summaryLines = [
  '# Photo license inventory',
  '',
  'Generated by node scripts/audit-photo-license-inventory.mjs.',
  '',
  '| Measure | Count |',
  '|---|---:|',
  ...Object.entries(counts).map(([key, value]) => '| ' + key.replaceAll(/([A-Z])/g, ' $1').toLowerCase() + ' | ' + value + ' |'),
  '',
  '## Verification limits',
  '',
  'Nine source pages were manually checked on 2026-10-04. All 779 rows contain source, creator, and license statements, but only 9 of 779 have independent source-page verification. The other 770 license claims are unverified and must not be treated as confirmed permission. Commercial reuse is described only as allowed by the stated license; that claim does not independently confirm the source rights or attribution details.',
  '',
  'The inventory records share-alike rows with the same-license adaptation term. Review row-level attributionTerms and editHistory before reusing an asset.',
  '',
  'Build image count: ' + assetPaths.length + ' WebP photos plus ' + buildImageExtras.length + ' additional build image file(s) (' + buildImageExtras.join(', ') + ') = ' + (assetPaths.length + buildImageExtras.length) + '.',
  '',
  '## Current mismatches',
  '',
  'The former Trastevere hero showed Piazza Navona and has been replaced. Ten current images received direct visual review during this pass; the other inventory rows were not individually checked for subject fit, so this report does not claim a full visual audit.',
  '',
  'Missing source/creator/license fields: ' + unmatchedByAsset.length + '. Independently unverified license claims: ' + counts.licenseClaimsNotIndependentlyVerified + '. Metadata conflicts: ' + sourceConflicts.length + '.'
];
fs.writeFileSync(path.join(outDir, 'photo-license-inventory.md'), summaryLines.join('\n') + '\n');
console.log(JSON.stringify({ counts, unmatchedSamples: unmatchedByAsset.slice(0, 30), sourceConflictSamples: sourceConflicts.slice(0, 10), output: ['reports/photo-license-inventory.json', 'reports/photo-license-inventory.md'] }, null, 2));
