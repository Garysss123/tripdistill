import fs from 'node:fs';
import path from 'node:path';
import { unitedKingdomClusters, unitedKingdomGuides } from '../data/united-kingdom-guides.mjs';
import { localeConfigs, root } from './i18n-lib.mjs';

const baselineDate = '2026-09-20';
const expectedReviewDate = '2026-10-09';
const expectedReviewLabel = '9 October 2026';
const newReviewSources = [
  'checked 9 October 2026',
  'Planning facts and image licensing were reviewed on 9 October 2026. Admission, transport, roads, paths, tides, weather and local access can change; reopen the linked authority or operator before travel.',
  'Editorial review: 9 October 2026 · Recheck time-sensitive details before booking.'
];
const baselineReviewSources = [
  'checked 20 September 2026',
  'Planning facts and image licensing were reviewed on 20 September 2026. Admission, transport, roads, paths, tides, weather and local access can change; reopen the linked authority or operator before travel.',
  'Editorial review: 20 September 2026 · Recheck time-sensitive details before booking.'
];
const targetGuides = unitedKingdomGuides.filter((guide) => guide.reviewDate || guide.reviewDateISO);
if (targetGuides.length !== 9) throw new Error(`Expected nine UK route date overrides, found ${targetGuides.length}.`);
for (const guide of targetGuides) {
  if (guide.reviewDate !== expectedReviewLabel || guide.reviewDateISO !== expectedReviewDate) {
    throw new Error(`Unexpected UK date override on ${guide.url}.`);
  }
}
const targetHubs = unitedKingdomClusters.filter((cluster) => cluster.reviewDate || cluster.reviewDateISO);
if (targetHubs.length !== 1) throw new Error(`Expected one UK hub date override, found ${targetHubs.length}.`);
for (const cluster of targetHubs) {
  if (cluster.reviewDate !== expectedReviewLabel || cluster.reviewDateISO !== expectedReviewDate) {
    throw new Error(`Unexpected UK date override on /united-kingdom/${cluster.slug}/.`);
  }
}

const languages = [
  { code: 'en', dir: '', prefix: '' },
  ...localeConfigs
];
const routes = [
  { url: '/united-kingdom/', kind: 'country', target: false },
  ...unitedKingdomClusters.map((cluster) => ({ url: `/united-kingdom/${cluster.slug}/`, kind: 'hub', target: targetHubs.includes(cluster) })),
  ...unitedKingdomGuides.map((guide) => ({ url: guide.url, kind: 'guide', target: targetGuides.some((item) => item.url === guide.url) }))
];
if (routes.length !== 81) throw new Error(`Expected 81 UK routes, found ${routes.length}.`);

function getArticleDates(html, file) {
  const blocks = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  for (const [, raw] of blocks) {
    let json;
    try { json = JSON.parse(raw); } catch { continue; }
    const graph = Array.isArray(json['@graph']) ? json['@graph'] : [json];
    const dated = graph.find((item) => item && (item['@type'] === 'Article' || item['@type'] === 'WebPage') && item.datePublished && item.dateModified);
    if (dated) return dated;
  }
  throw new Error(`No dated Article or WebPage JSON-LD found in ${file}.`);
}

const targetSourceTranslations = new Map();
for (const locale of localeConfigs) {
  const batchPath = path.join(root, 'data', 'i18n', 'reviewed', locale.code, '99zzzzz-sprint-uk-02-20261009.json');
  const batch = JSON.parse(fs.readFileSync(batchPath, 'utf8'));
  targetSourceTranslations.set(locale.code, newReviewSources.map((source) => batch.translations[source]));
}
const targetHubSourceTranslations = new Map();
for (const locale of localeConfigs) {
  const batchPath = path.join(root, 'data', 'i18n', 'reviewed', locale.code, '99zzzzz-sprint-uk-02-20261009.json');
  const batch = JSON.parse(fs.readFileSync(batchPath, 'utf8'));
  targetHubSourceTranslations.set(locale.code, newReviewSources.slice(1).map((source) => batch.translations[source]));
}
const baselineTranslations = new Map();
for (const locale of localeConfigs) {
  const catalogPath = path.join(root, 'data', 'i18n', `${locale.code}.json`);
  const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
  baselineTranslations.set(locale.code, baselineReviewSources.map((source) => catalog.translations[source]));
}

let checked = 0;
for (const route of routes) {
  for (const locale of languages) {
    const routePath = route.url.replace(/^\/+|\/+$/g, '');
    const file = path.join(root, locale.dir, routePath, 'index.html');
    const html = fs.readFileSync(file, 'utf8');
    const article = getArticleDates(html, file);
    const expectedModified = route.target ? expectedReviewDate : baselineDate;
    if (article.datePublished !== baselineDate) throw new Error(`${file}: datePublished changed to ${article.datePublished}.`);
    if (article.dateModified !== expectedModified) throw new Error(`${file}: expected dateModified ${expectedModified}, got ${article.dateModified}.`);

    if (route.kind === 'guide') {
      const visibleSources = route.target ? newReviewSources : baselineReviewSources;
      const visibleValues = locale.code === 'en'
        ? visibleSources
        : route.target ? targetSourceTranslations.get(locale.code) : baselineTranslations.get(locale.code);
      if (visibleValues.some((value) => !value?.trim())) throw new Error(`Missing expected date translations for ${locale.code}.`);
      for (const value of visibleValues) {
        if (!html.includes(value)) throw new Error(`${file}: missing visible review text: ${value}`);
      }
    } else if (route.kind === 'hub' && route.target) {
      const visibleValues = locale.code === 'en' ? newReviewSources.slice(1) : targetHubSourceTranslations.get(locale.code);
      if (visibleValues.some((value) => !value?.trim())) throw new Error(`Missing expected hub review-date translations for ${locale.code}.`);
      for (const value of visibleValues) {
        if (!html.includes(value)) throw new Error(`${file}: missing visible hub review text: ${value}`);
      }
    }
    checked += 1;
  }
}

if (checked !== 405) throw new Error(`Expected 405 UK language pages, checked ${checked}.`);
console.log(`United Kingdom route date regression passed: ${checked} language pages; nine route overrides, one hub override; published dates and all other route dates unchanged.`);
