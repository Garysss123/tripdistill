import { parse } from 'parse5';

const SITE_ORIGIN = 'https://tripdistill.com';
const ORIGINAL_IMAGE_PATHS = new Set([
  '/assets/images/china-lhasa-preparation.svg',
  '/assets/images/tripdistill-dayang-bunting-chain.svg',
  '/assets/images/tripdistill-kellies-castle-transfer.svg'
]);
const TERMS_PATH = '/terms-of-use/';

function attributes(node) {
  return Object.fromEntries((node.attrs || []).map(({ name, value }) => [name, value]));
}

function findAll(node, predicate, output = []) {
  if (predicate(node)) output.push(node);
  for (const child of node.childNodes || []) findAll(child, predicate, output);
  return output;
}

function normalizeSitePath(value, pageUrl) {
  if (typeof value !== 'string' || !value.trim()) return null;
  try {
    const url = new URL(value.trim(), pageUrl);
    if (url.origin !== SITE_ORIGIN) return null;
    return decodeURIComponent(url.pathname);
  } catch {
    return null;
  }
}

export function hasVisibleOriginalProjectProvenance(html, pageUrl) {
  const document = parse(html);
  const images = findAll(document, (node) => node.tagName === 'img');
  if (images.length !== 1) return false;
  const imagePath = normalizeSitePath(attributes(images[0]).src, pageUrl);
  if (!ORIGINAL_IMAGE_PATHS.has(imagePath)) return false;

  const creditItems = findAll(document, (node) => node.tagName === 'li');
  return creditItems.some((item) => {
    const anchors = findAll(item, (node) => node.tagName === 'a').map(attributes);
    const hasMatchingSource = anchors.some((anchor) =>
      normalizeSitePath(anchor.href, pageUrl) === imagePath
      && new URL(anchor.href, pageUrl).origin === SITE_ORIGIN
    );
    const hasTermsLink = anchors.some((anchor) => normalizeSitePath(anchor.href, pageUrl) === TERMS_PATH);
    return hasMatchingSource && hasTermsLink;
  });
}
