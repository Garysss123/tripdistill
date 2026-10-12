#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const floors = [
  {
    file: 'css/china.css',
    marker: '/* China hero typography guard:',
    headings: [
      '.china-country-copy h1', '.axis-hero h1', '.palace-gate-copy h1',
      '.hill-lake-copy h1', '.ritual-hero-copy h1', '.clock-hero-copy h1',
      '.courtyard-hero-copy h1', '.gallery-hero-copy h1',
      '.garden-scroll-copy h1', '.ridge-hero-copy h1'
    ],
    subtitles: [
      '.china-country-copy h1 > span', '.axis-hero h1 > span',
      '.palace-gate-copy h1 > span', '.hill-lake-copy h1 > span',
      '.ritual-hero-copy h1 > span', '.clock-hero-copy h1 > span',
      '.courtyard-hero-copy h1 > span', '.gallery-hero-copy h1 > span',
      '.garden-scroll-copy h1 > span', '.ridge-hero-copy h1 > span'
    ]
  },
  {
    file: 'css/shanghai.css',
    marker: '/* Shanghai hero typography guard:',
    headings: [
      '.shanghai-river-copy h1', '.sh-chapter-copy h1',
      'html[lang="ko"] .shanghai-river-copy h1',
      'html[lang="th"] .shanghai-river-copy h1'
    ],
    subtitles: ['.shanghai-river-copy h1 > span', '.sh-chapter-copy h1 > span']
  },
  {
    file: 'css/hangzhou.css',
    marker: '/* Hangzhou hero typography guard:',
    headings: [
      '.hz-lake-copy h1', '.hz-chapter-copy h1',
      'html[lang="ko"] .hz-lake-copy h1', 'html[lang="th"] .hz-lake-copy h1',
      'html[lang="ko"] .hz-chapter-copy h1', 'html[lang="th"] .hz-chapter-copy h1'
    ],
    subtitles: ['.hz-lake-copy h1 > span', '.hz-chapter-copy h1 > span']
  },
  {
    file: 'css/china-expansion.css',
    marker: '/* China destination hero typography guard',
    headings: ['.exp-guide .exp-hero h1', '.exp-guide[data-visual="karst-scroll"] .exp-hero h1'],
    subtitles: ['.exp-guide .exp-hero h1 > span']
  }
];

function normalized(value) { return value.replace(/\s+/g, ' ').trim(); }
function rulesFor(css, selector) {
  const rules = [];
  const rulePattern = /([^{}]+)\{([^{}]*)\}/g;
  for (const match of css.matchAll(rulePattern)) {
    const selectors = match[1].replace(/\/\*[\s\S]*?\*\//g, '').split(',').map(normalized);
    if (!selectors.includes(selector)) continue;
    const declarations = Object.fromEntries(match[2].split(';').map((entry) => {
      const separator = entry.indexOf(':');
      if (separator < 0) return ['', ''];
      return [entry.slice(0, separator).trim().toLowerCase(), entry.slice(separator + 1).trim().toLowerCase()];
    }).filter(([property]) => property));
    rules.push(declarations);
  }
  return rules;
}
function latestGuardRule(guardCss, selector, description) {
  const rules = rulesFor(guardCss, selector);
  assert.ok(rules.length, `${description}: missing explicit typography guard for ${selector}`);
  return rules.at(-1);
}
function numericLineHeight(value, description) {
  const lineHeight = Number.parseFloat(value);
  assert.ok(Number.isFinite(lineHeight) && lineHeight >= 1.05, `${description}: line-height ${value || '(missing)'} must be at least 1.05`);
}

for (const floor of floors) {
  const css = fs.readFileSync(path.join(root, floor.file), 'utf8');
  const markerAt = css.lastIndexOf(floor.marker);
  assert.notEqual(markerAt, -1, `${floor.file}: missing final China hero typography guard`);
  const guardCss = css.slice(markerAt);
  for (const selector of floor.headings) {
    const rule = latestGuardRule(guardCss, selector, floor.file);
    numericLineHeight(rule['line-height'], `${floor.file} ${selector}`);
    assert.equal(rule['word-break'], 'normal', `${floor.file} ${selector}: prevent keep-all overflow in narrow and Thai layouts`);
  }
  for (const selector of floor.subtitles) {
    const rule = latestGuardRule(guardCss, selector, floor.file);
    assert.equal(rule.display, 'block', `${floor.file} ${selector}: subtitle must start on its own line`);
    numericLineHeight(rule['line-height'], `${floor.file} ${selector}`);
    assert.match(rule['margin-block-start'] || '', /^max\(16px,\s*\.2em\)$/, `${floor.file} ${selector}: subtitle gap must be at least 16px or 0.2em`);
  }
}

const expansion = fs.readFileSync(path.join(root, 'css/china-expansion.css'), 'utf8');
const expansionGuard = expansion.slice(expansion.lastIndexOf('/* China destination hero typography guard'));
const verticalKarst = rulesFor(expansionGuard, '.exp-guide[data-visual="karst-scroll"] .exp-hero h1 > span');
assert.ok(verticalKarst.some((rule) => rule.display === 'inline' && rule.margin === '0 14px 0 0' && rule['line-height'] === '1.18'), 'Karst desktop title must retain its vertical writing and 14px side gap');
assert.ok(verticalKarst.some((rule) => rule.display === 'block' && rule.margin === '16px 0 0' && rule['line-height'] === '1.18'), 'Karst narrow title must switch back to a readable horizontal subtitle gap');

console.log('China hero typography guard passed for country, Beijing, Shanghai, Hangzhou and destination-system templates, including narrow and Thai/Korean selectors.');
