#!/usr/bin/env node
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const assetPath = 'assets/images/tripdistill-zermatt-glacier-route-choice.svg';
const svg = fs.readFileSync(path.join(root, assetPath), 'utf8');

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function elementById(tag, id) {
  const expression = new RegExp(`<${tag}\\b(?=[^>]*\\bid="${escapeRegExp(id)}")[^>]*>`);
  const element = svg.match(expression)?.[0];
  assert.ok(element, `${tag}#${id} exists in ${assetPath}`);
  return element;
}

function attr(element, name) {
  const expression = new RegExp(`\\b${escapeRegExp(name)}="([^"]*)"`);
  return element.match(expression)?.[1] ?? null;
}

function pathPoints(data, samplesPerCurve = 200) {
  const tokens = data.match(/[A-Za-z]|[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g) || [];
  const points = [];
  let index = 0;
  let command = null;
  let current = [0, 0];

  const readPoint = () => [Number(tokens[index++]), Number(tokens[index++])];
  while (index < tokens.length) {
    if (/^[A-Za-z]$/.test(tokens[index])) command = tokens[index++];
    assert.ok(command, `path data must start with a command: ${data}`);

    if (command === 'M' || command === 'L') {
      const next = readPoint();
      if (command === 'M') {
        points.push(next);
        current = next;
        command = 'L';
        continue;
      }
      const start = current;
      for (let sample = 1; sample <= samplesPerCurve; sample++) {
        const t = sample / samplesPerCurve;
        points.push([start[0] + (next[0] - start[0]) * t, start[1] + (next[1] - start[1]) * t]);
      }
      current = next;
      continue;
    }

    if (command === 'C') {
      const control1 = readPoint();
      const control2 = readPoint();
      const end = readPoint();
      const start = current;
      for (let sample = 1; sample <= samplesPerCurve; sample++) {
        const t = sample / samplesPerCurve;
        const inverse = 1 - t;
        const x = inverse ** 3 * start[0]
          + 3 * inverse ** 2 * t * control1[0]
          + 3 * inverse * t ** 2 * control2[0]
          + t ** 3 * end[0];
        const y = inverse ** 3 * start[1]
          + 3 * inverse ** 2 * t * control1[1]
          + 3 * inverse * t ** 2 * control2[1]
          + t ** 3 * end[1];
        points.push([x, y]);
      }
      current = end;
      continue;
    }

    assert.fail(`unsupported path command ${command} in geometry test`);
  }
  return points;
}

function geometry(id) {
  const element = elementById('path', id);
  return {
    element,
    points: pathPoints(attr(element, 'd')),
    strokeWidth: Number(attr(element, 'stroke-width') || 0)
  };
}

function assertOutside(points, safeBox, description) {
  const firstTouch = points.find(([x, y]) => x >= safeBox.left && x <= safeBox.right && y >= safeBox.top && y <= safeBox.bottom);
  assert.equal(firstTouch, undefined, `${description} route stays outside the icon's padded clearance box`);
}

function translatedCenter(transform) {
  const match = transform.match(/^translate\((-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)\)$/);
  assert.ok(match, `icon transform is a tested translation: ${transform}`);
  return [Number(match[1]), Number(match[2])];
}

function paddedWorldBox(center, localBox, routeStrokeWidth, minimumGap = 6) {
  const [cx, cy] = center;
  const padding = routeStrokeWidth / 2 + minimumGap;
  return {
    left: cx + localBox.left - padding,
    top: cy + localBox.top - padding,
    right: cx + localBox.right + padding,
    bottom: cy + localBox.bottom + padding
  };
}

const rootTag = svg.match(/<svg\b[^>]*>/)?.[0];
assert.ok(rootTag, 'SVG root exists');
assert.equal(attr(rootTag, 'viewBox'), '0 0 1600 1066', 'source canvas remains 1600 × 1066');

const ridge = geometry('matterhorn-ridge');
const ridgeMaxX = Math.max(...ridge.points.map(([x]) => x)) + ridge.strokeWidth / 2;
assert.ok(ridgeMaxX < 1524, `mountain silhouette including stroke remains inside the content panel (max x ${ridgeMaxX})`);
assert.ok(ridgeMaxX < 1600, `mountain silhouette including stroke remains inside the SVG canvas (max x ${ridgeMaxX})`);

const iconClearances = [
  {
    id: 'sunnegga-ski-icon',
    transform: 'translate(935 489)',
    route: 'sunnegga-access',
    localIconBounds: { left: -41, top: -30, right: 41, bottom: 41 }
  },
  {
    id: 'matterhorn-cablecar-icon',
    transform: 'translate(929 711)',
    route: 'matterhorn-lift-chain',
    localIconBounds: { left: -62, top: -50, right: 62, bottom: 61 }
  },
  {
    id: 'village-chalet-icon',
    transform: 'translate(700 735)',
    route: 'village-fallback',
    localIconBounds: { left: -47, top: -32, right: 47, bottom: 56 }
  }
];

const measuredClearances = new Map();
for (const icon of iconClearances) {
  const element = elementById('g', icon.id);
  assert.equal(attr(element, 'transform'), icon.transform, `${icon.id} remains in its tested position`);
  const route = geometry(icon.route);
  const safeBox = paddedWorldBox(translatedCenter(icon.transform), icon.localIconBounds, route.strokeWidth);
  measuredClearances.set(icon.id, safeBox);
  assertOutside(route.points, safeBox, `${icon.route} (stroke ${route.strokeWidth})`);
}

const sunnegga = geometry('sunnegga-access').points;
assert.deepEqual(sunnegga[0], [327, 489], 'Sunnegga route retains its Zermatt-side origin');
assert.deepEqual(sunnegga.at(-1), [1101, 484], 'Sunnegga route retains its upper transfer endpoint');
const glacier = geometry('matterhorn-lift-chain').points;
assert.deepEqual(glacier[0], [326, 530], 'Glacier Paradise route retains its Zermatt-side origin');
assert.deepEqual(glacier.at(-1), [1077, 596], 'Glacier Paradise route retains its upper-chain transfer endpoint');
const village = geometry('village-fallback').points;
assert.deepEqual(village[0], [250, 576], 'village fallback retains its Zermatt-side origin');
assert.deepEqual(village.at(-1), [588, 725], 'village fallback arrow stops before the chalet');
assert.ok(measuredClearances.get('village-chalet-icon').left - village.at(-1)[0] > 40, 'village fallback arrow tip retains a visible gap before the chalet');

console.log('Zermatt SVG geometry regression passed: route paths clear the ski/cable-car/chalet symbols, the fallback arrow stops before the chalet, and the ridge remains within the panel and canvas.');
