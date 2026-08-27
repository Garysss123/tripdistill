import fs from 'node:fs';
import path from 'node:path';
import { parse, serialize } from 'parse5';

export const root = path.resolve(import.meta.dirname, '..');
export const localeConfigs = Object.freeze([
  { code: 'zh-Hant', dir: 'zh', prefix: '/zh', nativeName: '繁體中文', targetName: 'Traditional Chinese', targetCode: 'zh-Hant', termsFile: 'terms-zh-Hant.json' },
  { code: 'ja', dir: 'ja', prefix: '/ja', nativeName: '日本語', targetName: 'Japanese', targetCode: 'ja-JP', termsFile: 'terms-ja.json' },
  { code: 'ko', dir: 'ko', prefix: '/ko', nativeName: '한국어', targetName: 'Korean', targetCode: 'ko-KR', termsFile: 'terms-ko.json' },
  { code: 'th', dir: 'th', prefix: '/th', nativeName: 'ไทย', targetName: 'Thai', targetCode: 'th-TH', termsFile: 'terms-th.json' }
]);
export const englishLocale = Object.freeze({ code: 'en', dir: '', prefix: '', nativeName: 'English', targetName: 'English', targetCode: 'en' });
export const allLocales = Object.freeze([englishLocale, ...localeConfigs]);

const skippedTextParents = new Set(['script', 'style', 'svg', 'code', 'pre', 'noscript']);
const jsonLdKeys = new Set(['name', 'description', 'text']);
const translatableAttributes = new Set(['alt', 'aria-label', 'placeholder', 'title']);
const publicAssetPrefixes = ['/assets/', '/css/', '/js/', '/components/', '/data/', '/favicon.'];

export function getLocaleConfig(codeOrDir) {
  const config = localeConfigs.find((item) => item.code === codeOrDir || item.dir === codeOrDir || item.prefix === codeOrDir);
  if (!config) throw new Error('Unsupported locale: ' + codeOrDir);
  return config;
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function routeToFile(route) {
  const pathname = decodeURIComponent(route.split(/[?#]/, 1)[0]);
  if (pathname === '/') return 'index.html';
  const clean = pathname.replace(/^\//, '');
  return clean.endsWith('/') ? path.join(clean, 'index.html') : clean;
}

function normalizeText(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function shouldTranslate(value) {
  const normalized = normalizeText(value);
  if (!normalized || !/[A-Za-z]/.test(normalized)) return false;
  if (/^(?:https?:|mailto:|tel:|\/)/i.test(normalized)) return false;
  if (/^[\w.-]+\.(?:html?|css|js|json|svg|ico|webp|jpe?g|png)$/i.test(normalized)) return false;
  return true;
}

function getAttribute(node, name) {
  return node.attrs?.find((attribute) => attribute.name === name)?.value;
}

function setAttribute(node, name, value) {
  if (!node.attrs) node.attrs = [];
  const attribute = node.attrs.find((item) => item.name === name);
  if (attribute) attribute.value = value;
  else node.attrs.push({ name, value });
}

function isJsonLd(node) {
  return node.tagName === 'script' && getAttribute(node, 'type') === 'application/ld+json';
}

function walkJson(value, visitor, key = '') {
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      if (typeof item === 'string') value[index] = visitor(item, key);
      else walkJson(item, visitor, key);
    });
    return;
  }
  if (!value || typeof value !== 'object') return;
  for (const [childKey, childValue] of Object.entries(value)) {
    if (typeof childValue === 'string') value[childKey] = visitor(childValue, childKey);
    else walkJson(childValue, visitor, childKey);
  }
}

function collectJsonLd(text, units) {
  try {
    const data = JSON.parse(text);
    walkJson(data, (value, key) => {
      if (jsonLdKeys.has(key) && shouldTranslate(value)) units.add(normalizeText(value));
      return value;
    });
  } catch {
    // The site audit reports malformed JSON-LD separately.
  }
}

function collectDocumentUnits(document) {
  const units = new Set();
  function visit(node, parentTag = '') {
    if (node.nodeName === '#text' && !skippedTextParents.has(parentTag) && shouldTranslate(node.value)) units.add(normalizeText(node.value));
    if (node.tagName) {
      for (const attribute of node.attrs || []) {
        if (translatableAttributes.has(attribute.name) && shouldTranslate(attribute.value)) units.add(normalizeText(attribute.value));
      }
      if (node.tagName === 'meta') {
        const name = (getAttribute(node, 'name') || '').toLowerCase();
        const property = (getAttribute(node, 'property') || '').toLowerCase();
        if (name === 'description' || property === 'og:title' || property === 'og:description' || name === 'twitter:title' || name === 'twitter:description') {
          const content = getAttribute(node, 'content') || '';
          if (shouldTranslate(content)) units.add(normalizeText(content));
        }
      }
      if (isJsonLd(node) && node.childNodes?.[0]?.nodeName === '#text') collectJsonLd(node.childNodes[0].value, units);
    }
    for (const child of node.childNodes || []) visit(child, node.tagName || parentTag);
  }
  visit(document);
  return [...units];
}

function isLocalizedRoute(pathname) {
  return localeConfigs.some((config) => pathname === config.prefix + '/' || pathname.startsWith(config.prefix + '/'));
}

export function englishRouteRecords() {
  const sitemap = read('sitemap.xml');
  const urls = [...sitemap.matchAll(/<loc>(https:\/\/tripdistill\.com[^<]*)<\/loc>/g)].map((match) => match[1]);
  const seen = new Set();
  return urls.filter((absoluteUrl) => {
    const pathname = new URL(absoluteUrl).pathname;
    if (isLocalizedRoute(pathname) || seen.has(pathname)) return false;
    seen.add(pathname);
    return true;
  }).map((absoluteUrl) => {
    const pathname = new URL(absoluteUrl).pathname;
    return { kind: 'page', route: pathname, relativePath: routeToFile(pathname), absoluteUrl };
  });
}

export function sourceRecords() {
  const records = englishRouteRecords();
  for (const name of ['header.html', 'sidebar.html', 'footer.html']) {
    records.push({ kind: 'component', route: '/components/' + name, relativePath: path.join('components', name), absoluteUrl: '' });
  }
  return records;
}

function pageContext(html, record) {
  const title = normalizeText(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || 'TripDistill shared navigation');
  return { route: record.route, title };
}

export function collectTranslationWork() {
  const work = [];
  for (const record of sourceRecords()) {
    const html = read(record.relativePath);
    work.push({ ...record, context: pageContext(html, record), units: collectDocumentUnits(parse(html)) });
  }
  const search = JSON.parse(read('data/search-index.json'));
  const searchUnits = new Set();
  for (const item of search) {
    for (const key of ['title', 'parent', 'type', 'summary']) if (shouldTranslate(item[key] || '')) searchUnits.add(normalizeText(item[key]));
    for (const keyword of item.keywords || []) if (shouldTranslate(keyword)) searchUnits.add(normalizeText(keyword));
  }
  work.push({ kind: 'search', route: '/data/search-index.json', relativePath: 'data/search-index.json', context: { route: '/data/search-index.json', title: 'TripDistill search index' }, units: [...searchUnits] });
  return work;
}

export function catalogPathFor(codeOrDir) {
  const config = getLocaleConfig(codeOrDir);
  return path.join(root, 'data', 'i18n', config.code + '.json');
}

export function loadCatalog(codeOrDir) {
  const config = getLocaleConfig(codeOrDir);
  const catalogPath = catalogPathFor(config.code);
  if (!fs.existsSync(catalogPath)) return { locale: config.code, generatedAt: null, translations: {} };
  const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
  if (!catalog.translations || typeof catalog.translations !== 'object') throw new Error('Invalid catalog for ' + config.code);
  return catalog;
}

export function saveCatalog(catalog, codeOrDir) {
  const config = getLocaleConfig(codeOrDir);
  const catalogPath = catalogPathFor(config.code);
  fs.mkdirSync(path.dirname(catalogPath), { recursive: true });
  const sorted = Object.fromEntries(Object.entries(catalog.translations).sort(([a], [b]) => a.localeCompare(b, 'en')));
  fs.writeFileSync(catalogPath, JSON.stringify({ locale: config.code, qualityStatus: catalog.qualityStatus || 'draft', generatedAt: new Date().toISOString(), translations: sorted }, null, 2) + '\n');
}

function translateValue(value, translations) {
  const normalized = normalizeText(value);
  if (!shouldTranslate(normalized)) return value;
  const translated = translations[normalized];
  if (!translated) throw new Error('Missing translation: ' + normalized);
  return translated;
}

function translateTextNode(node, translations) {
  const normalized = normalizeText(node.value);
  if (!shouldTranslate(normalized)) return;
  const leading = node.value.match(/^\s*/)?.[0] || '';
  const trailing = node.value.match(/\s*$/)?.[0] || '';
  node.value = leading + translateValue(normalized, translations) + trailing;
}

function hasLocalePrefix(pathname) {
  return localeConfigs.some((item) => pathname === item.prefix || pathname.startsWith(item.prefix + '/'));
}

function localizedInternalHref(value, config) {
  if (!value.startsWith('/') || value.startsWith('//')) return value;
  const suffixIndex = value.search(/[?#]/);
  const pathname = suffixIndex === -1 ? value : value.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? '' : value.slice(suffixIndex);
  if (hasLocalePrefix(pathname) || publicAssetPrefixes.some((prefix) => pathname.startsWith(prefix))) return value;
  return pathname === '/' ? config.prefix + '/' + suffix : config.prefix + pathname + suffix;
}

function localizedAbsoluteUrl(value, config) {
  if (!value.startsWith('https://tripdistill.com/')) return value;
  const url = new URL(value);
  if (publicAssetPrefixes.some((prefix) => url.pathname.startsWith(prefix)) || hasLocalePrefix(url.pathname)) return value;
  url.pathname = url.pathname === '/' ? config.prefix + '/' : config.prefix + url.pathname;
  return url.toString();
}

function localeRouteUrl(route, locale) {
  const prefix = locale.prefix;
  return 'https://tripdistill.com' + (prefix ? (route === '/' ? prefix + '/' : prefix + route) : route);
}

function localizeJsonLd(node, translations, config) {
  if (!node.childNodes?.[0] || node.childNodes[0].nodeName !== '#text') return;
  const data = JSON.parse(node.childNodes[0].value);
  walkJson(data, (value, key) => {
    if (jsonLdKeys.has(key) && shouldTranslate(value)) return translateValue(value, translations);
    if (value.startsWith('https://tripdistill.com/')) return localizedAbsoluteUrl(value, config);
    return value;
  });
  node.childNodes[0].value = JSON.stringify(data);
}

function localizeDocument(document, translations, config, route) {
  function visit(node, parentTag = '') {
    if (node.nodeName === '#text' && !skippedTextParents.has(parentTag)) translateTextNode(node, translations);
    if (node.tagName) {
      for (const attribute of node.attrs || []) {
        if (translatableAttributes.has(attribute.name)) attribute.value = translateValue(attribute.value, translations);
      }
      if (node.tagName === 'html') setAttribute(node, 'lang', config.code);
      if (node.tagName === 'a') {
        const href = getAttribute(node, 'href');
        if (href) setAttribute(node, 'href', localizedInternalHref(href, config));
      }
      if (node.tagName === 'meta') {
        const name = (getAttribute(node, 'name') || '').toLowerCase();
        const property = (getAttribute(node, 'property') || '').toLowerCase();
        const content = getAttribute(node, 'content') || '';
        if (name === 'description' || property === 'og:title' || property === 'og:description' || name === 'twitter:title' || name === 'twitter:description') {
          setAttribute(node, 'content', translateValue(content, translations));
        } else if (property === 'og:url') {
          setAttribute(node, 'content', localizedAbsoluteUrl(content, config));
        }
      }
      if (node.tagName === 'link') {
        const rel = getAttribute(node, 'rel');
        const href = getAttribute(node, 'href') || '';
        const hreflang = getAttribute(node, 'hreflang');
        if (rel === 'canonical') setAttribute(node, 'href', localizedAbsoluteUrl(href, config));
        if (rel === 'alternate' && hreflang) {
          const targetLocale = hreflang === 'x-default' ? englishLocale : allLocales.find((item) => item.code === hreflang);
          if (targetLocale) setAttribute(node, 'href', localeRouteUrl(route, targetLocale));
        }
      }
      if (isJsonLd(node)) localizeJsonLd(node, translations, config);
    }
    for (const child of node.childNodes || []) visit(child, node.tagName || parentTag);
    if (node.tagName === 'a' && getAttribute(node, 'data-language-option')) {
      const targetCode = getAttribute(node, 'data-language-option');
      const targetLocale = allLocales.find((item) => item.code === targetCode);
      if (targetLocale) {
        setAttribute(node, 'href', targetLocale.prefix ? targetLocale.prefix + '/' : '/');
        setAttribute(node, 'lang', targetLocale.code);
        setAttribute(node, 'hreflang', targetLocale.code);
        if (node.childNodes?.[0]?.nodeName === '#text') node.childNodes[0].value = targetLocale.nativeName;
      }
    }
  }
  visit(document);
}

export function localizeHtml(html, translations, codeOrDir, route) {
  const config = getLocaleConfig(codeOrDir);
  const document = parse(html);
  localizeDocument(document, translations, config, route);
  return serialize(document);
}

export function localizeSearchIndex(source, translations, codeOrDir) {
  const config = getLocaleConfig(codeOrDir);
  return source.map((item) => ({
    ...item,
    title: translateValue(item.title, translations),
    url: localizedInternalHref(item.url, config),
    parent: translateValue(item.parent, translations),
    type: translateValue(item.type, translations),
    summary: translateValue(item.summary, translations),
    keywords: (item.keywords || []).map((keyword) => shouldTranslate(keyword) ? translateValue(keyword, translations) : keyword)
  }));
}

export function outputPathFor(record, codeOrDir) {
  const config = getLocaleConfig(codeOrDir);
  return path.join(root, config.dir, record.relativePath);
}

export function readSource(relativePath) {
  return read(relativePath);
}
