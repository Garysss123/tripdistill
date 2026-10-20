import assert from 'node:assert/strict';
import fs from 'node:fs';
import { SaxesParser } from 'saxes';

export const SVG_NS = 'http://www.w3.org/2000/svg';

export function parseXml(source, label = 'SVG') {
  const roots = [];
  const stack = [];
  let parseError;
  const parser = new SaxesParser({ xmlns: true });
  parser.on('error', (error) => { parseError ??= error; });
  parser.on('opentag', (tag) => {
    const node = {
      tag: tag.local,
      uri: tag.uri,
      attrs: Object.fromEntries(Object.values(tag.attributes).map((attribute) => [attribute.name, attribute.value])),
      content: []
    };
    if (stack.length) stack.at(-1).content.push(node);
    else roots.push(node);
    stack.push(node);
  });
  parser.on('text', (value) => { stack.at(-1)?.content.push(value); });
  parser.on('cdata', (value) => { stack.at(-1)?.content.push(value); });
  parser.on('closetag', () => { stack.pop(); });
  parser.write(source).close();
  assert.equal(parseError, undefined, `${label} must parse as XML: ${parseError?.message || ''}`);
  assert.equal(roots.length, 1, `${label} XML has exactly one root element`);
  return roots[0];
}

export function parseXmlFile(file) {
  return parseXml(fs.readFileSync(file, 'utf8'), file);
}

export function descendants(root, includeRoot = true) {
  const nested = (node) => [node, ...node.content.filter((item) => typeof item === 'object').flatMap(nested)];
  return includeRoot ? nested(root) : root.content.filter((item) => typeof item === 'object').flatMap(nested);
}

export function children(node, name, uri = SVG_NS) {
  return node.content.filter((item) => typeof item === 'object' && item.tag === name && item.uri === uri);
}

export function descendantsByTag(root, name, uri = SVG_NS) {
  return descendants(root).filter((node) => node.tag === name && node.uri === uri);
}

export function textContent(node) {
  return node.content.map((item) => typeof item === 'string' ? item : textContent(item)).join('');
}

export function numberAttr(node, name, fallback = 0) {
  return Number(node.attrs[name] ?? fallback);
}

export function pathPoints(data, label, commands = ['M', 'L', 'H', 'V', 'C', 'Q', 'S', 'T']) {
  const tokens = [...data.matchAll(/[A-Za-z]|[-+]?(?:\d*\.\d+|\d+\.?\d*)(?:[eE][-+]?\d+)?/gu)].map((match) => match[0]);
  const supported = new Set(commands.map((command) => command.toUpperCase()));
  const counts = { M: 2, L: 2, H: 1, V: 1, C: 6, Q: 4, S: 4, T: 2 };
  const points = [];
  let i = 0;
  let command;
  let x = 0;
  let y = 0;
  while (i < tokens.length) {
    if (/^[A-Za-z]$/u.test(tokens[i])) {
      command = tokens[i++];
      if (command === 'Z' || command === 'z') continue;
      assert.ok(supported.has(command.toUpperCase()), `${label}: unsupported path command ${command}`);
    }
    assert.ok(command, `${label}: missing path command`);
    const upper = command.toUpperCase();
    const count = counts[upper];
    assert.ok(count, `${label}: unsupported path command ${command}`);
    assert.ok(i + count <= tokens.length, `${label}: incomplete ${command} segment`);
    const values = tokens.slice(i, i + count).map(Number);
    assert.ok(values.every(Number.isFinite), `${label}: non-finite path coordinate`);
    i += count;
    const relative = command === command.toLowerCase();
    if (upper === 'H') {
      x = relative ? x + values[0] : values[0];
      points.push([x, y]);
    } else if (upper === 'V') {
      y = relative ? y + values[0] : values[0];
      points.push([x, y]);
    } else if (upper === 'M' || upper === 'L' || upper === 'T') {
      x = relative ? x + values[0] : values[0];
      y = relative ? y + values[1] : values[1];
      points.push([x, y]);
      if (upper === 'M') command = relative ? 'l' : 'L';
    } else {
      const pairCount = upper === 'C' ? 3 : 2;
      const segment = [];
      for (let offset = 0; offset < pairCount * 2; offset += 2) {
        segment.push([relative ? x + values[offset] : values[offset], relative ? y + values[offset + 1] : values[offset + 1]]);
      }
      points.push(...segment);
      [x, y] = segment.at(-1);
    }
  }
  return points;
}
