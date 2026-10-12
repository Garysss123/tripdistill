import { parse } from 'parse5';

const SITE_ORIGIN = 'https://tripdistill.com';
const ORIGINAL_IMAGE_PATHS = new Set([
  '/assets/images/china-lhasa-preparation.svg',
  '/assets/images/tripdistill-dayang-bunting-chain.svg',
  '/assets/images/tripdistill-kellies-castle-transfer.svg',
  '/assets/images/france-lille-arras-vimy-sequence-legend.svg'
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
  const originalImages = images
    .map((image) => normalizeSitePath(attributes(image).src, pageUrl))
    .filter((imagePath) => ORIGINAL_IMAGE_PATHS.has(imagePath));
  if (originalImages.length !== 1) return false;
  const imagePath = originalImages[0];

  const creditItems = findAll(document, (node) => node.tagName === 'li');
  const hasOriginalCredit = creditItems.some((item) => {
    const anchors = findAll(item, (node) => node.tagName === 'a').map(attributes);
    const hasMatchingSource = anchors.some((anchor) =>
      normalizeSitePath(anchor.href, pageUrl) === imagePath
      && new URL(anchor.href, pageUrl).origin === SITE_ORIGIN
    );
    const hasTermsLink = anchors.some((anchor) => normalizeSitePath(anchor.href, pageUrl) === TERMS_PATH);
    return hasMatchingSource && hasTermsLink;
  });
  if (!hasOriginalCredit) return false;
  const otherImagePaths = new Set(images
    .map((image) => normalizeSitePath(attributes(image).src, pageUrl))
    .filter((imagePath) => imagePath && !ORIGINAL_IMAGE_PATHS.has(imagePath)));
  if (!otherImagePaths.size) return true;
  const photoCredits = creditItems.filter((item) => {
    const anchors = findAll(item, (node) => node.tagName === 'a').map(attributes);
    const hasCommonsSource = anchors.some((anchor) => /^(?:https?:)?\/\/commons\.wikimedia\.org\/wiki\/File:/i.test(anchor.href || ''));
    const hasPhotoLicense = /\b(?:CC0|CC BY(?:-SA)?|Public domain)\b/i.test(textContent(item));
    return hasCommonsSource && hasPhotoLicense;
  });
  return photoCredits.length >= otherImagePaths.size;
}

function textContent(node) {
  if (node?.nodeName === '#text') return node.value;
  return (node?.childNodes || []).map(textContent).join(' ');
}
