#!/usr/bin/env node
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { greeceRoutes } from '../data/greece-guides.mjs';
import { greeceReviewedBatchPaths } from './greece-route-test-utils.mjs';

const root = path.resolve(import.meta.dirname, '..');
const base = '34e77a829d91e59301589bfd11850c8b26398ae5';
const run = (args) => execFileSync('git', ['-c', `safe.directory=${root.replaceAll('\\', '/')}`, ...args], { cwd: root, encoding: 'utf8' });
const localizedPrefixes = ['', 'zh', 'ja', 'ko', 'th'];
const publicRoutes = new Set(localizedPrefixes.flatMap((prefix) => greeceRoutes.map((route) => `${prefix ? `${prefix}/` : ''}${route.slice(1)}index.html`)));
const integratedRegressionFiles = [
  'scripts/test-australia-adelaide-perth-gaps.mjs',
  'scripts/test-australia-alps-margaret-gaps.mjs',
  'scripts/test-australia-blue-mountains-refresh.mjs',
  'scripts/test-australia-brisbane-gold-coast-gaps.mjs',
  'scripts/test-australia-brisbane-refresh.mjs',
  'scripts/test-australia-broome-content.mjs',
  'scripts/test-australia-broome-tasmania-gaps.mjs',
  'scripts/test-australia-cairns-refresh.mjs',
  'scripts/test-australia-canberra-gaps.mjs',
  'scripts/test-australia-final-content.mjs',
  'scripts/test-australia-gold-coast-refresh.mjs',
  'scripts/test-australia-great-ocean-refresh.mjs',
  'scripts/test-australia-margaret-remaining.mjs',
  'scripts/test-australia-melbourne-ocean-gaps.mjs',
  'scripts/test-australia-melbourne-refresh.mjs',
  'scripts/test-australia-sydney-refresh.mjs',
  'scripts/test-canada-ca09-route-dates.mjs',
  'scripts/test-canada-ca10-route-dates.mjs',
  'scripts/test-canada-ca11-route-dates.mjs',
  'scripts/test-canada-ca12-route-dates.mjs',
  'scripts/test-canada-ca13-route-dates.mjs',
  'scripts/test-canada-ca14-route-dates.mjs',
  'scripts/test-canada-ca15-route-dates.mjs',
  'scripts/test-canada-ca16-route-dates.mjs',
  'scripts/test-canada-ca17-route-dates.mjs',
  'scripts/test-canada-ca18-route-dates.mjs',
  'scripts/test-italy-emilia-route-dates.mjs',
  'scripts/test-italy-it12-route-dates.mjs',
  'scripts/test-italy-milan-route-dates.mjs',
  'scripts/test-italy-siena-route-dates.mjs',
  'scripts/test-italy-sorrento-route-dates.mjs',
  'scripts/test-italy-umbria-route-dates.mjs',
  'scripts/test-malaysia-gunung-mulu-refresh.mjs',
  'scripts/test-malaysia-kinabalu-refresh.mjs',
  'scripts/test-malaysia-kuala-lumpur-refresh.mjs',
  'scripts/test-malaysia-kuching-bako-refresh.mjs',
  'scripts/test-malaysia-sandakan-kinabatangan-refresh.mjs',
  'scripts/test-malaysia-semporna-refresh.mjs',
  'scripts/test-malaysia-taman-negara-refresh.mjs',
  'scripts/test-switzerland-bern-emmental-refresh.mjs',
  'scripts/test-switzerland-ch10-refresh.mjs',
  'scripts/test-switzerland-ch11-refresh.mjs',
  'scripts/test-switzerland-ch12-refresh.mjs',
  'scripts/test-switzerland-ch13-refresh.mjs',
  'scripts/test-switzerland-ch14-refresh.mjs',
  'scripts/test-switzerland-ch15-refresh.mjs',
  'scripts/test-switzerland-ch16-refresh.mjs',
  'scripts/test-switzerland-interlaken-refresh.mjs',
  'scripts/test-switzerland-jungfrau-refresh.mjs',
  'scripts/test-switzerland-lausanne-refresh.mjs',
  'scripts/test-switzerland-lucerne-refresh.mjs',
  'scripts/test-switzerland-montreux-refresh.mjs',
  'scripts/test-switzerland-zermatt-refresh.mjs',
  'scripts/test-usa-arizona-refresh.mjs',
  'scripts/test-usa-boston-refresh.mjs',
  'scripts/test-usa-chicago-refresh.mjs',
  'scripts/test-usa-florida-neighborhood-refresh.mjs',
  'scripts/test-usa-los-angeles-refresh.mjs',
  'scripts/test-usa-new-england-refresh.mjs',
  'scripts/test-usa-overview-juneau-refresh.mjs',
  'scripts/test-usa-san-diego-refresh.mjs',
  'scripts/test-vietnam-after-nha-trang-refresh.mjs',
  'scripts/test-vietnam-bay-gaps-refresh.mjs',
  'scripts/test-vietnam-caves-islands-gaps-refresh.mjs',
  'scripts/test-vietnam-coastal-gaps-refresh.mjs',
  'scripts/test-vietnam-dalat-refresh.mjs',
  'scripts/test-vietnam-mekong-refresh.mjs',
  'scripts/test-vietnam-mui-ne-refresh.mjs',
  'scripts/test-vietnam-nha-trang-refresh.mjs',
  'scripts/test-vietnam-phong-nha-refresh.mjs',
  'scripts/test-vietnam-phu-quoc-refresh.mjs',
  'scripts/test-vietnam-southern-gaps-refresh.mjs'
];
const fixedFiles = new Set([
  'README.md', 'about/index.html', 'components/footer.html', 'components/header.html', 'components/sidebar.html',
  'index.html', 'zh/index.html', 'ja/index.html', 'ko/index.html', 'th/index.html',
  'zh/about/index.html', 'ja/about/index.html', 'ko/about/index.html', 'th/about/index.html',
  'zh/components/header.html', 'zh/components/sidebar.html', 'zh/components/footer.html',
  'ja/components/header.html', 'ja/components/sidebar.html', 'ja/components/footer.html',
  'ko/components/header.html', 'ko/components/sidebar.html', 'ko/components/footer.html',
  'th/components/header.html', 'th/components/sidebar.html', 'th/components/footer.html',
  'zh/sitemap.xml', 'ja/sitemap.xml', 'ko/sitemap.xml', 'th/sitemap.xml',
  'assets/images/greece-atlas.svg', 'css/greece.css', 'data/greece-guides.mjs',
  'css/site.css',
  'data/search-index.json', 'data/substantive-route-ledger.mjs', 'package.json', 'sitemap.xml',
  'scripts/audit-greece.mjs', 'scripts/audit-photo-license-inventory.mjs', 'scripts/audit-site.mjs', 'scripts/audit-spain.mjs', 'scripts/build-dist.mjs', 'scripts/generate-greece.mjs',
  'scripts/visual-audit.mjs',
  'scripts/greece-route-test-utils.mjs', 'scripts/sync-sitemap.mjs', 'scripts/test-greece-scope.mjs', 'scripts/test-integration-sprint-scope.mjs',
  'scripts/test-vietnam-hcmc-refresh.mjs',
  'scripts/test-photo-license-inventory-regression.mjs', 'scripts/test-thailand-country-overview-refresh.mjs', 'scripts/test-substantive-route-ledger.mjs', 'reports/greece-editorial-review-2026-10-20.md',
  'reports/photo-license-inventory.json', 'reports/photo-license-inventory.md',
  ...integratedRegressionFiles
]);
const portabilityRegressionFiles = new Set([
  'scripts/python-runner.mjs', 'scripts/svg-test-render.mjs', 'scripts/svg-test-utils.mjs',
  'scripts/test-canada-banff-svg.mjs', 'scripts/test-canada-ca08-svg-assets.mjs', 'scripts/test-canada-ca10-svg.mjs',
  'scripts/test-canada-ca11-svg.mjs', 'scripts/test-canada-ca11-svg.py',
  'scripts/test-canada-ca12-svg.mjs', 'scripts/test-canada-ca12-svg.py',
  'scripts/test-canada-ca13-svg.mjs', 'scripts/test-canada-ca13-svg.py',
  'scripts/test-italy-emilia-diagrams.mjs', 'scripts/test-italy-emilia-svg-xml.mjs', 'scripts/test-italy-emilia-svg-xml.py'
]);

const supersededHomepageTranslationFiles = new Set(['ja', 'ko', 'th', 'zh-Hant'].flatMap((locale) => [
  'data/i18n/reviewed/' + locale + '/02-core.json',
  'data/i18n/reviewed/' + locale + '/' + 'z'.repeat(224) + '-spain-00-country-madrid.json'
]));
function isAllowed(file) {
  if (publicRoutes.has(file) || fixedFiles.has(file)) return true;
  if (portabilityRegressionFiles.has(file)) return true;
  if (supersededHomepageTranslationFiles.has(file)) return true;
  if (greeceReviewedBatchPaths.has(file)) return true;
  if (/^data\/i18n\/(?:zh-Hant|ja|ko|th)\.json$/u.test(file)) return true;
  if (/^(?:zh|ja|ko|th)\/data\/search-index\.json$/u.test(file)) return true;
  return false;
}

function assertAllowed(files, label) {
  const rejected = files.filter((file) => !isAllowed(file));
  assert.deepEqual(rejected, [], `${label}: unexpected repository paths must remain visible`);
}

assert.equal(greeceRoutes.length, 33, 'the registered page scope is 33 unique Greece routes');
assert.equal(publicRoutes.size, 165, 'five editions must contain exactly 165 Greece page files');
assert.equal(greeceReviewedBatchPaths.size, 40, 'only 40 exact reviewed Greece locale batches are registered');
for (const locale of ['zh-Hant', 'ja', 'ko', 'th']) {
  const directory = path.join(root, 'data/i18n/reviewed', locale);
  const actual = new Set(fs.readdirSync(directory));
  for (const file of greeceReviewedBatchPaths) {
    if (file.startsWith(`data/i18n/reviewed/${locale}/`)) {
      assert(actual.has(path.basename(file)), `reviewed Greece translation batch is missing: ${file}`);
    }
  }
}
for (const file of publicRoutes) assert(fs.existsSync(path.join(root, file)), `five-language page is missing: ${file}`);

const committed = run(['diff', '--name-only', base, 'HEAD', '--']).split(/\r?\n/u).filter(Boolean);
const uncommitted = run(['diff', '--name-only', base, '--']).split(/\r?\n/u).filter(Boolean);
const untracked = run(['ls-files', '--others', '--exclude-standard']).split(/\r?\n/u).filter(Boolean);
const changed = [...new Set([...committed, ...uncommitted, ...untracked])].sort();
assertAllowed(changed, 'whole-repository diff against the verified Greece branch base');

for (const unrelated of ['australia/cairns-wet-tropics/index.html', 'italy/rome/index.html']) {
  assert.throws(() => assertAllowed([...changed, unrelated], 'negative fixture'), /unexpected repository paths/u, `guard must reject unrelated path ${unrelated}`);
}

console.log(`Greece scope guard passed: whole repository is limited to ${changed.length} reviewed/in-scope paths; all 165 language-edition page files exist; negative Cairns and Rome fixtures are rejected.`);
