#!/usr/bin/env node
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import { malaysiaDepthGuides } from '../data/malaysia-depth-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const date = '2026-10-12';
const routes = [
  '/malaysia/perhentian-redang/',
  '/malaysia/perhentian-redang/kuala-besut-transfer/',
  '/malaysia/perhentian-redang/perhentian-kecil/',
  '/malaysia/perhentian-redang/perhentian-besar/',
  '/malaysia/perhentian-redang/redang-merang-transfer/'
];
const editions = [
  { locale: 'en', prefix: '' },
  { locale: 'zh-Hant', prefix: 'zh/' },
  { locale: 'ja', prefix: 'ja/' },
  { locale: 'ko', prefix: 'ko/' },
  { locale: 'th', prefix: 'th/' }
];
const reviewDate = {
  en: /12\s+October\s+2026/i,
  'zh-Hant': /2026\s*年\s*10\s*月\s*12\s*日/,
  ja: /2026\s*年\s*10\s*月\s*12\s*日/,
  ko: /2026\s*년\s*10\s*월\s*12\s*일/,
  th: /12\s*ตุลาคม\s*2026/
};
const photos = [
  ['assets/images/malaysia-perhentian.webp', '9d2e1e4769065a4180cba213edbbbbd0a1c0db6e63f67572f21ade22a356acf5'],
  ['assets/images/malaysia-perhentian-coral-bay.webp', '672395b6855f37d02329d90dda66c7398e9425c410dc25bb83da7af5daf99510'],
  ['assets/images/malaysia-redang-beach.webp', '742bca8e068e1364dc5a94946499289a3aee0a1ce318244bbb3d626469f2ab5b']
];

function walk(node, visit) {
  visit(node);
  for (const child of node.childNodes || []) walk(child, visit);
}
function elements(document, predicate) {
  const found = [];
  walk(document, (node) => { if (node.tagName && predicate(node)) found.push(node); });
  return found;
}
function attrs(node) {
  return Object.fromEntries((node.attrs || []).map(({ name, value }) => [name, value]));
}
function textContent(node) {
  if (node.nodeName === '#text') return node.value || '';
  return (node.childNodes || []).map(textContent).join('');
}

const guides = new Map(malaysiaDepthGuides.map((guide) => [guide.url, guide]));
const englishSearch = JSON.parse(fs.readFileSync(path.join(root, 'data/search-index.json'), 'utf8'));
const localizedSearch = new Map(editions.filter(({ prefix }) => prefix).map(({ prefix }) => [
  prefix,
  JSON.parse(fs.readFileSync(path.join(root, prefix, 'data/search-index.json'), 'utf8'))
]));
const outputs = fs.existsSync(path.join(root, 'dist')) ? ['', 'dist/'] : [''];
let checked = 0;

for (const photo of photos) {
  const bytes = fs.readFileSync(path.join(root, photo[0]));
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), photo[1], `${photo[0]} retained bytes`);
}

for (const output of outputs) {
  const sitemap = fs.readFileSync(path.join(root, `${output}sitemap.xml`), 'utf8');
  for (const { locale, prefix } of editions) {
    for (const route of routes) {
      const localizedRoute = `/${prefix}${route.slice(1)}`;
      assert.ok(sitemap.includes(`<loc>https://tripdistill.com${localizedRoute}</loc><lastmod>${date}</lastmod>`), `${output}sitemap.xml: ${localizedRoute} date`);
      const file = path.join(root, output, prefix, route.slice(1), 'index.html');
      const html = fs.readFileSync(file, 'utf8');
      assert.match(html, reviewDate[locale], `${file}: localized review date`);
      const document = parse(html);
      const scripts = elements(document, (node) => node.tagName === 'script' && attrs(node).type === 'application/ld+json');
      assert.ok(scripts.length, `${file}: JSON-LD exists`);
      const graph = scripts.flatMap((node) => {
        const raw = node.childNodes.find((child) => child.nodeName === '#text')?.value;
        return raw ? JSON.parse(raw)['@graph'] || [] : [];
      });
      const guideSchema = graph.find((node) => node['@type'] === 'TravelGuide');
      assert.ok(guideSchema, `${file}: TravelGuide schema exists`);
      assert.equal(guideSchema.dateModified, date, `${file}: TravelGuide date`);
      const expectedGuide = guides.get(route);
      if (expectedGuide) assert.equal(expectedGuide.reviewedOnIso, date, `${route}: source date`);
      if (locale !== 'en') {
        const localizedRecord = localizedSearch.get(prefix)?.find((record) => record.url === localizedRoute);
        const englishRecord = englishSearch.find((record) => record.url === route);
        assert.ok(localizedRecord?.title && localizedRecord?.summary, `${localizedRoute}: localized search record`);
        assert.notEqual(localizedRecord.title, englishRecord.title, `${localizedRoute}: localized search title`);
        assert.notEqual(localizedRecord.summary, englishRecord.summary, `${localizedRoute}: localized search summary`);
      }
      checked += 1;
    }
  }
}

console.log(`Perhentian/Redang regression passed: ${checked} route-language pages; 25 sitemap entries per checked sitemap; all three retained photo hashes match.`);
