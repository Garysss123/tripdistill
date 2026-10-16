#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { localeConfigs, loadCatalog } from './i18n-lib.mjs';

const routeKeywords = {
  '/united-kingdom/scottish-highlands/': ['Highland Main Line', 'Citylink 919', 'Inverness base'],
  '/united-kingdom/scottish-highlands/inverness-loch-ness/': ['River Ness walk', 'Citylink 919 Urquhart Castle', 'Urquhart Castle timed entry'],
  '/united-kingdom/scottish-highlands/glencoe-fort-william/': ['Fort William station walk', 'A82 Glencoe bus stop', 'West Highland Museum'],
  '/united-kingdom/scottish-highlands/aviemore-cairngorms/': ['Stagecoach 30 Cairngorm', 'Rothiemurchus transfer', 'Aviemore station walk'],
  '/united-kingdom/pembrokeshire-west-wales/': ['Tenby base nights', 'St Davids no railway', '387 388 winter Coastal Cruiser'],
  '/united-kingdom/pembrokeshire-west-wales/st-davids-coast/': ['St Davids Cathedral Close walk', 'St Non’s bus transfer', 'Pembrokeshire winter bus'],
  '/united-kingdom/pembrokeshire-west-wales/tenby-caldey-coast/': ['Tenby station to harbour walk', 'Caldey Island closed 2026', 'Caldey Easter 2027'],
  '/united-kingdom/pembrokeshire-west-wales/aberystwyth-ceredigion/': ['Aberystwyth station promenade walk', 'Constitution Hill cliff railway', 'Vale of Rheidol 2026 season']
};
const properNameLiterals = new Set(['Citylink 919', 'West Highland Museum']);
const countryCardExcerpt = 'Tenby, St Davids and Aberystwyth are three different bases linked by long road or rail legs, not one compact coastal loop. Tenby and Aberystwyth have rail…';
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
    const countryPagePath = path.join(output, locale.dir, 'united-kingdom', 'index.html');
    const countryPage = fs.readFileSync(countryPagePath, 'utf8');
    const expectedExcerpt = locale.code === 'en' ? countryCardExcerpt : loadCatalog(locale.code).translations[countryCardExcerpt];
    assert.ok(expectedExcerpt?.trim(), `${locale.code}: missing UK overview card excerpt translation`);
    assert.equal(countryPage.split(expectedExcerpt).length - 1, 1, `${countryPagePath}: expected one Pembrokeshire card excerpt`);
    for (const [route, expectedKeywords] of Object.entries(routeKeywords)) {
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
        assert.ok(expected, `${locale.code}: missing reviewed summary translation for ${route}`);
        assert.equal(localized.summary, expected, `${filename}: ${localizedRoute} summary differs from reviewed translation`);
        assert.notEqual(localized.summary, source.summary, `${filename}: ${localizedRoute} summary remained English`);
        assert.match(localized.summary, locale.script, `${filename}: ${localizedRoute} summary lacks ${locale.code} script`);
      } else {
        assert.equal(localized.summary, source.summary, `${filename}: English source summary drifted`);
      }
      for (const keyword of expectedKeywords) {
        assert.ok(source.keywords.includes(keyword), `${route}: missing English keyword ${keyword}`);
        const expectedKeyword = locale.code === 'en' ? keyword : loadCatalog(locale.code).translations[keyword];
        assert.ok(expectedKeyword, `${locale.code}: missing reviewed translation for ${keyword}`);
        assert.ok(localized.keywords.includes(expectedKeyword), `${filename}: ${localizedRoute} missing localized keyword ${expectedKeyword}`);
        if (locale.code !== 'en') {
          if (!properNameLiterals.has(keyword)) {
            assert.notEqual(expectedKeyword, keyword, `${locale.code}: ${keyword} was not translated`);
            assert.match(expectedKeyword, locale.script, `${locale.code}: ${expectedKeyword} lacks locale script`);
          }
        }
      }
      checked += 1;
    }
  }
}

console.log(`UK19 search regression passed: ${checked} route records across eight routes plus the UK overview card excerpt, English and all four localized editions (${outputs.length === 2 ? 'source and dist' : 'source'}).`);
