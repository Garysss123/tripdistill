import { greeceRoutes } from '../data/greece-guides.mjs';

const registeredRoutes = new Set(greeceRoutes);
const greeceReviewedBatchSuffixes = [
  '-greece-01-country.json',
  '-greece-02a-hubs.json',
  '-greece-02b-hubs.json',
  '-greece-02c-hubs.json',
  '-greece-02d-hubs.json',
  '-greece-03a-local.json',
  '-greece-03b-local.json',
  '-greece-03c-local.json',
  '-greece-03d-local.json',
  '-greece-04-integration.json'
];

/** Exact reviewed translation batches created for this Greece release. */
export const greeceReviewedBatchPaths = new Set(['zh-Hant', 'ja', 'ko', 'th'].flatMap((locale) =>
  greeceReviewedBatchSuffixes.map((suffix) => `data/i18n/reviewed/${locale}/${'z'.repeat(225)}${suffix}`)
));
/** Exact shared-core locale files with obsolete homepage translation keys pruned for Greece. */
export const greeceSharedCorePrunePaths = new Set(['zh-Hant', 'ja', 'ko', 'th'].map((locale) => `data/i18n/reviewed/${locale}/02-core.json`));

/** Return true only for one of the 33 registered Greek route paths, in any edition. */
export function isGreeceRoutePath(value) {
  if (typeof value !== 'string' || !value) return false;
  let pathname = value;
  if (/^https?:\/\//iu.test(pathname)) {
    try {
      pathname = new URL(pathname).pathname;
    } catch {
      return false;
    }
  }
  pathname = pathname.split(/[?#]/u, 1)[0];
  pathname = pathname.replace(/^\/(?:zh|ja|ko|th)(?=\/)/u, '');
  return registeredRoutes.has(pathname);
}
