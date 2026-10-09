import assert from 'node:assert/strict';
import fs from 'node:fs';

const reviewDate = '2026-10-09';
const routes = [
  '/china/datong/',
  '/china/luoyang/',
  '/china/pingyao/',
  '/china/xian/',
  '/china/beijing/central-axis-forbidden-city/',
  '/china/beijing/jingshan-beihai/',
  '/china/beijing/shichahai-drum-tower/',
  '/china/hangzhou/lingyin-feilai-peak/',
  '/china/hangzhou/longjing-nine-creeks/',
  '/china/hangzhou/xixi-wetland/',
  '/china/shanghai/peoples-square-museums/',
  '/china/shanghai/yuyuan-old-city/',
  '/china/shanghai/the-bund-huangpu/',
];
const editions = [
  { locale: 'en', prefix: '', visibleDate: /(?:9\s+October\s+2026|October\s+9,?\s+2026)/i },
  { locale: 'zh-Hant', prefix: 'zh/', visibleDate: /2026\s*年\s*10\s*月\s*9\s*日/ },
  { locale: 'ja', prefix: 'ja/', visibleDate: /2026\s*年\s*10\s*月\s*9\s*日/ },
  { locale: 'ko', prefix: 'ko/', visibleDate: /2026\s*년\s*10\s*월\s*9\s*일/ },
  { locale: 'th', prefix: 'th/', visibleDate: /9\s*ตุลาคม\s*2026/ },
];

function schemaObjects(value, found = []) {
  if (!value || typeof value !== 'object') return found;
  found.push(value);
  for (const child of Object.values(value)) {
    if (child && typeof child === 'object') schemaObjects(child, found);
  }
  return found;
}

const roots = ['', 'dist/'];
let checked = 0;
for (const root of roots) {
  for (const route of routes) {
    for (const edition of editions) {
      const file = `${root}${edition.prefix}${route.slice(1)}index.html`;
      const html = fs.readFileSync(file, 'utf8');
      const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
      assert.ok(scripts.length, `${file}: missing JSON-LD`);
      const schemas = scripts.map(([, raw]) => JSON.parse(raw));
      const objects = schemas.flatMap((schema) => schemaObjects(schema));
      const pages = objects.filter((item) => item['@type'] === 'WebPage' && item.dateModified);
      assert.equal(pages.length, 1, `${file}: expected one WebPage.dateModified`);
      assert.equal(pages[0].dateModified, reviewDate, `${file}: dateModified mismatch`);
      assert.equal(
        objects.some((item) => Object.hasOwn(item, 'datePublished')),
        false,
        `${file}: datePublished must remain absent and unmodified`,
      );

      const sources = html.match(/<section class="section sources"[\s\S]*?<\/section>/)?.[0];
      assert.ok(sources, `${file}: missing visible sources/review section`);
      const visible = sources
        .replace(/<script[\s\S]*?<\/script>/g, ' ')
        .replace(/<style[\s\S]*?<\/style>/g, ' ')
        .replace(/<[^>]*>/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ');
      assert.match(visible, edition.visibleDate, `${file}: visible review date mismatch`);
      checked += 1;
    }
  }
}

console.log(`China route date regression passed: ${checked} documents (${routes.length} routes × ${editions.length} editions in source and dist); dateModified=${reviewDate}, visible review dates match, and datePublished remains absent.`);
