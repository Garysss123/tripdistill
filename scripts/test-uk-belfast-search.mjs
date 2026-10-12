#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { localeConfigs, loadCatalog } from './i18n-lib.mjs';

const routes = [
  '/united-kingdom/belfast-northern-ireland/',
  '/united-kingdom/belfast-northern-ireland/belfast-civic-maritime/',
  '/united-kingdom/belfast-northern-ireland/giants-causeway-coast/',
  '/united-kingdom/belfast-northern-ireland/derry-walls-bogside/'
];
const expectedKeywords = {
  '/united-kingdom/belfast-northern-ireland/': [
    'Belfast–Coleraine rail itinerary', 'Causeway Coast bus connection', 'Derry overnight base'
  ],
  '/united-kingdom/belfast-northern-ireland/belfast-civic-maritime/': [
    'Belfast civic walking route', 'Titanic Quarter timed visit', 'Belfast station choices'
  ],
  '/united-kingdom/belfast-northern-ireland/giants-causeway-coast/': [
    'Coleraine to Giant’s Causeway', 'Causeway Coast seasonal bus', 'Causeway visitor-centre access'
  ],
  '/united-kingdom/belfast-northern-ireland/derry-walls-bogside/': [
    'Derry wall walking route', 'Cityside and Waterside stay', 'Museum of Free Derry opening hours'
  ]
};
const locales = [{ code: 'en', dir: '', prefix: '', script: null }, ...localeConfigs.map(({ code, dir, prefix }) => ({
  code,
  dir,
  prefix,
  script: {
    'zh-Hant': /[\u3400-\u9fff]/u,
    ja: /[\u3040-\u30ff\u3400-\u9fff]/u,
    ko: /[\uac00-\ud7af]/u,
    th: /[\u0e00-\u0e7f]/u
  }[code]
}))];
const sourceIndex = JSON.parse(fs.readFileSync('data/search-index.json', 'utf8'));
let checked = 0;

const outputs = fs.existsSync('dist') ? ['', 'dist/'] : [''];
for (const output of outputs) {
  for (const locale of locales) {
    const filename = path.join(output, locale.dir, 'data/search-index.json');
    const index = JSON.parse(fs.readFileSync(filename, 'utf8'));
    for (const route of routes) {
      const sourceMatches = sourceIndex.filter((record) => record.url === route);
      assert.equal(sourceMatches.length, 1, `${route}: expected one English source record`);
      const [source] = sourceMatches;
      const localizedRoute = `${locale.prefix}${route}`;
      const matches = index.filter((record) => record.url === localizedRoute);
      assert.equal(matches.length, 1, `${filename}: ${localizedRoute} must appear exactly once`);
      const [localized] = matches;
      assert.ok(localized.title?.trim(), `${filename}: ${route} title missing`);
      assert.ok(localized.summary?.trim(), `${filename}: ${route} summary missing`);
      if (locale.code !== 'en') {
        const expected = loadCatalog(locale.code).translations[source.summary];
        assert.ok(expected, `${locale.code}: missing reviewed search summary translation for ${route}`);
        assert.equal(localized.summary, expected, `${filename}: ${localizedRoute} summary differs from reviewed translation`);
        assert.notEqual(localized.summary, source.summary, `${filename}: ${localizedRoute} summary remained English`);
        assert.match(localized.summary, locale.script, `${filename}: ${localizedRoute} summary lacks ${locale.code} script`);
      } else {
        assert.equal(localized.summary, source.summary, `${filename}: ${localizedRoute} English source summary drifted`);
      }
      for (const keyword of expectedKeywords[route]) {
        assert.ok(source.keywords.includes(keyword), `${route}: missing English source search keyword ${keyword}`);
        const expectedKeyword = locale.code === 'en' ? keyword : loadCatalog(locale.code).translations[keyword];
        assert.ok(expectedKeyword, `${locale.code}: missing reviewed translation for search keyword ${keyword}`);
        assert.ok(localized.keywords.includes(expectedKeyword), `${filename}: ${localizedRoute} missing localized search keyword ${expectedKeyword}`);
        if (locale.code !== 'en') {
          assert.notEqual(expectedKeyword, keyword, `${locale.code}: ${keyword} was not translated`);
          assert.match(expectedKeyword, locale.script, `${locale.code}: ${expectedKeyword} lacks the locale script`);
        }
      }
      checked += 1;
    }
  }
}

console.log(`UK Belfast search regression passed: ${checked} route records across ${outputs.length === 2 ? 'source and dist' : 'source'}, English and all four localized editions.`);
