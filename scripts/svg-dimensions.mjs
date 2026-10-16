import { SaxesParser } from 'saxes';

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const NUMBER = /^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i;

function positiveNumber(value, label) {
  const text = String(value ?? '').trim().replace(/px$/i, '');
  if (!NUMBER.test(text)) throw new Error(`${label} must be a numeric length`);
  const number = Number(text);
  if (!Number.isFinite(number) || number <= 0) throw new Error(`${label} must be positive and finite`);
  return number;
}

export function parseSvgDimensions(xml) {
  if (typeof xml !== 'string') throw new TypeError('SVG XML must be a string');

  let root;
  let parseError;
  const parser = new SaxesParser({ xmlns: true });
  parser.on('opentag', (tag) => { if (!root) root = tag; });
  parser.on('doctype', () => { throw new Error('DOCTYPE is forbidden in SVG input'); });
  parser.on('error', (error) => { parseError ??= error; });
  parser.write(xml).close();
  if (parseError) throw new Error(`Invalid SVG XML: ${parseError.message}`);
  if (!root || root.local !== 'svg' || root.uri !== SVG_NAMESPACE) throw new Error('Root element must be an SVG svg element');

  const attrs = root.attributes;
  const width = positiveNumber(attrs.width?.value, 'SVG width');
  const height = positiveNumber(attrs.height?.value, 'SVG height');
  const viewBoxText = attrs.viewBox?.value?.trim();
  if (!viewBoxText) throw new Error('SVG viewBox is required');
  const tokens = viewBoxText.split(/[\s,]+/);
  if (tokens.length !== 4 || tokens.some((token) => !NUMBER.test(token))) throw new Error('SVG viewBox must contain four finite numbers');
  const viewBox = tokens.map(Number);
  if (!viewBox.every(Number.isFinite) || viewBox[2] <= 0 || viewBox[3] <= 0) throw new Error('SVG viewBox dimensions must be positive and finite');
  if (Math.abs(width - viewBox[2]) > 1e-6 || Math.abs(height - viewBox[3]) > 1e-6) throw new Error('SVG width and height must match the viewBox dimensions');

  return { width, height, viewBox };
}
