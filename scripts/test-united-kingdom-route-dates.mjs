import fs from 'node:fs';
import path from 'node:path';
import { unitedKingdomClusters, unitedKingdomGuides } from '../data/united-kingdom-guides.mjs';
import { localeConfigs, root } from './i18n-lib.mjs';

const baselineDate = '2026-09-20';
const reviewGroups = [
  {
    date: '2026-10-09',
    label: '9 October 2026',
    guideCount: 9,
    hubCount: 3,
    batch: '99zzzzz-sprint-uk-02-20261009.json',
    sources: [
      'checked 9 October 2026',
      'Planning facts and image licensing were reviewed on 9 October 2026. Admission, transport, roads, paths, tides, weather and local access can change; reopen the linked authority or operator before travel.',
      'Editorial review: 9 October 2026 · Recheck time-sensitive details before booking.'
    ]
  },
  {
    date: '2026-10-10',
    label: '10 October 2026',
    guideCount: 6,
    hubCount: 2,
    batch: '99zzzzzzzz-sprint-uk-20261009-lake-04.json',
    sources: [
      'checked 10 October 2026',
      'Planning facts and image licensing were reviewed on 10 October 2026. Admission, transport, roads, paths, tides, weather and local access can change; reopen the linked authority or operator before travel.',
      'Editorial review: 10 October 2026 · Recheck time-sensitive details before booking.'
    ]
  }
];
const baselineReviewSources = [
  'checked 20 September 2026',
  'Planning facts and image licensing were reviewed on 20 September 2026. Admission, transport, roads, paths, tides, weather and local access can change; reopen the linked authority or operator before travel.',
  'Editorial review: 20 September 2026 · Recheck time-sensitive details before booking.'
];
const targetGuides = unitedKingdomGuides.filter((guide) => guide.reviewDate || guide.reviewDateISO);
for (const group of reviewGroups) {
  const count = targetGuides.filter((guide) => guide.reviewDateISO === group.date).length;
  if (count !== group.guideCount) throw new Error(`Expected ${group.guideCount} UK route date overrides for ${group.date}, found ${count}.`);
}
if (targetGuides.length !== reviewGroups.reduce((total, group) => total + group.guideCount, 0)) {
  throw new Error(`Found ${targetGuides.length} UK route overrides outside the expected review groups.`);
}
for (const guide of targetGuides) {
  const group = reviewGroups.find((item) => item.date === guide.reviewDateISO);
  if (!group || guide.reviewDate !== group.label) {
    throw new Error(`Unexpected UK date override on ${guide.url}.`);
  }
}
const targetHubs = unitedKingdomClusters.filter((cluster) => cluster.reviewDate || cluster.reviewDateISO);
for (const group of reviewGroups) {
  const count = targetHubs.filter((cluster) => cluster.reviewDateISO === group.date).length;
  if (count !== group.hubCount) throw new Error(`Expected ${group.hubCount} UK hub date overrides for ${group.date}, found ${count}.`);
}
if (targetHubs.length !== reviewGroups.reduce((total, group) => total + group.hubCount, 0)) {
  throw new Error(`Found ${targetHubs.length} UK hub overrides outside the expected review groups.`);
}
for (const cluster of targetHubs) {
  const group = reviewGroups.find((item) => item.date === cluster.reviewDateISO);
  if (!group || cluster.reviewDate !== group.label) {
    throw new Error(`Unexpected UK date override on /united-kingdom/${cluster.slug}/.`);
  }
}

const languages = [
  { code: 'en', dir: '', prefix: '' },
  ...localeConfigs
];
const routes = [
  { url: '/united-kingdom/', kind: 'country', reviewDateISO: null },
  ...unitedKingdomClusters.map((cluster) => ({ url: `/united-kingdom/${cluster.slug}/`, kind: 'hub', reviewDateISO: cluster.reviewDateISO || null })),
  ...unitedKingdomGuides.map((guide) => ({ url: guide.url, kind: 'guide', reviewDateISO: guide.reviewDateISO || null }))
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
const targetHubSourceTranslations = new Map();
for (const locale of localeConfigs) {
  for (const group of reviewGroups) {
    const batchPath = path.join(root, 'data', 'i18n', 'reviewed', locale.code, group.batch);
    const batch = JSON.parse(fs.readFileSync(batchPath, 'utf8'));
    const key = `${locale.code}:${group.date}`;
    targetSourceTranslations.set(key, group.sources.map((source) => batch.translations[source]));
    targetHubSourceTranslations.set(key, group.sources.slice(1).map((source) => batch.translations[source]));
  }
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
    const expectedModified = route.reviewDateISO || baselineDate;
    if (article.datePublished !== baselineDate) throw new Error(`${file}: datePublished changed to ${article.datePublished}.`);
    if (article.dateModified !== expectedModified) throw new Error(`${file}: expected dateModified ${expectedModified}, got ${article.dateModified}.`);

    if (route.kind === 'guide') {
      const reviewGroup = reviewGroups.find((group) => group.date === route.reviewDateISO);
      const visibleSources = reviewGroup?.sources || baselineReviewSources;
      const visibleValues = locale.code === 'en'
        ? visibleSources
        : reviewGroup ? targetSourceTranslations.get(`${locale.code}:${reviewGroup.date}`) : baselineTranslations.get(locale.code);
      if (visibleValues.some((value) => !value?.trim())) throw new Error(`Missing expected date translations for ${locale.code}.`);
      for (const value of visibleValues) {
        if (!html.includes(value)) throw new Error(`${file}: missing visible review text: ${value}`);
      }
    } else if (route.kind === 'hub' && route.reviewDateISO) {
      const reviewGroup = reviewGroups.find((group) => group.date === route.reviewDateISO);
      if (!reviewGroup) throw new Error(`${file}: unknown review date ${route.reviewDateISO}.`);
      const visibleValues = locale.code === 'en'
        ? reviewGroup.sources.slice(1)
        : targetHubSourceTranslations.get(`${locale.code}:${reviewGroup.date}`);
      if (visibleValues.some((value) => !value?.trim())) throw new Error(`Missing expected hub review-date translations for ${locale.code}.`);
      for (const value of visibleValues) {
        if (!html.includes(value)) throw new Error(`${file}: missing visible hub review text: ${value}`);
      }
    }
    checked += 1;
  }
}

if (checked !== 405) throw new Error(`Expected 405 UK language pages, checked ${checked}.`);
console.log(`United Kingdom route date regression passed: ${checked} language pages; ${targetGuides.length} route overrides and ${targetHubs.length} hub overrides across ${reviewGroups.length} dates; published dates and all other route dates unchanged.`);
