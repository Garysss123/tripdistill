import assert from 'node:assert/strict';
import path from 'node:path';
import { children, descendantsByTag, numberAttr, parseXmlFile, pathPoints, textContent } from './svg-test-utils.mjs';

const rootDir = path.resolve(import.meta.dirname, '..');
const svgNamespace = 'http://www.w3.org/2000/svg';
const markerSets = {
  'assets/images/tripdistill-italy-bologna-portico-plan.svg': ['1', '2', '3'],
  'assets/images/tripdistill-italy-modena-parma-rail-and-booking-plan.svg': ['1', '2', '3', '4', '5']
};

export function checkItalyEmiliaSvgXml() {
  for (const [relative, markers] of Object.entries(markerSets)) {
    const root = parseXmlFile(path.join(rootDir, relative));
    assert.equal(root.tag, 'svg', `${relative}: wrong SVG root namespace`);
    assert.equal(root.uri, svgNamespace, `${relative}: wrong SVG root namespace`);
    const box = (root.attrs.viewBox || '').split(/\s+/u).map(Number);
    assert.ok(box.length === 4 && box[0] === 0 && box[1] === 0 && box[2] > 0 && box[3] > 0, `${relative}: invalid viewBox`);
    const [, , width, height] = box;
    assert.equal(children(root, 'title').length + children(root, 'desc').length, 0, `${relative}: use the translated HTML alt instead of embedded English accessibility text`);
    const elements = descendantsByTag(root, 'image');
    assert.equal(elements.length, 0, `${relative}: embedded raster is not allowed`);
    const circles = descendantsByTag(root, 'circle');
    assert.equal(circles.length, markers.length, `${relative}: expected ${markers.length} numbered markers, got ${circles.length}`);
    for (const node of circles) {
      const cx = numberAttr(node, 'cx'), cy = numberAttr(node, 'cy'), radius = numberAttr(node, 'r');
      const strokeWidth = numberAttr(node, 'stroke-width');
      assert.ok(radius > 0 && cx - radius - strokeWidth / 2 >= 0 && cy - radius - strokeWidth / 2 >= 0);
      assert.ok(cx + radius + strokeWidth / 2 <= width && cy + radius + strokeWidth / 2 <= height, `${relative}: circle/stroke spills outside canvas`);
    }
    const texts = descendantsByTag(root, 'text');
    assert.deepEqual(texts.map((node) => node.content.filter((item) => typeof item === 'string').join('')), markers, `${relative}: visible SVG labels must be only the numbered legend markers`);
    for (const node of texts) {
      assert.ok(numberAttr(node, 'x') >= 0 && numberAttr(node, 'x') <= width && numberAttr(node, 'y') >= 0 && numberAttr(node, 'y') <= height, `${relative} text: coordinate outside viewBox`);
    }
    for (const node of descendantsByTag(root, 'rect')) {
      const x = numberAttr(node, 'x'), y = numberAttr(node, 'y');
      const rectWidth = numberAttr(node, 'width'), rectHeight = numberAttr(node, 'height');
      assert.ok(rectWidth > 0 && rectHeight > 0 && x >= 0 && y >= 0 && x + rectWidth <= width && y + rectHeight <= height, `${relative}: rect outside canvas`);
    }
    const paths = descendantsByTag(root, 'path');
    for (const node of paths) {
      const points = pathPoints(node.attrs.d || '', relative);
      assert.ok(points.length, `${relative}: empty path geometry`);
      for (const [x, y] of points) assert.ok(x >= 0 && x <= width && y >= 0 && y <= height, `${relative}: path coordinate outside canvas`);
    }
    const centers = circles.map((node) => [numberAttr(node, 'cx'), numberAttr(node, 'cy')]);
    if (relative.endsWith('tripdistill-italy-bologna-portico-plan.svg')) {
      const [solid, branch] = paths;
      assert.equal(solid.attrs.stroke, '#2f625a', `${relative}: expected one main route and one distinct branch`);
      assert.equal(branch.attrs.stroke, '#b86b42', `${relative}: expected one main route and one distinct branch`);
      const solidPoints = pathPoints(solid.attrs.d, relative);
      const branchPoints = pathPoints(branch.attrs.d, relative);
      assert.deepEqual(solidPoints[0], centers[0], `${relative}: main route must start at marker 1`);
      assert.deepEqual(solidPoints.at(-1), centers[1], `${relative}: solid route must end at marker 2`);
      assert.deepEqual(branchPoints[0], centers[1], `${relative}: San Luca branch must leave marker 2`);
      assert.deepEqual(branchPoints.at(-1), centers[2], `${relative}: San Luca branch must end at marker 3`);
    } else if (relative.endsWith('tripdistill-italy-modena-parma-rail-and-booking-plan.svg')) {
      const [trunk, branches] = paths;
      assert.equal(trunk.attrs.stroke, '#2f625a', `${relative}: expected a rail corridor and distinct optional branches`);
      assert.equal(branches.attrs.stroke, '#b86b42', `${relative}: expected a rail corridor and distinct optional branches`);
      const trunkPoints = pathPoints(trunk.attrs.d, relative);
      assert.deepEqual(trunkPoints[0], centers[0]);
      assert.deepEqual(trunkPoints.at(-1), centers[2], `${relative}: Via Emilia trunk must connect markers 1 and 3`);
      const branchSubpaths = branches.attrs.d.split('M').slice(1).map((segment) => `M${segment}`);
      const branchEnds = branchSubpaths.map((segment) => pathPoints(segment, relative).at(-1));
      assert.deepEqual(branchEnds.sort((a, b) => a[0] - b[0] || a[1] - b[1]), [centers[3], centers[4]].sort((a, b) => a[0] - b[0] || a[1] - b[1]), `${relative}: both distinct dashed branch ends must connect to markers 4 and 5`);
    }
    assert.ok(paths.length >= 2, `${relative}: route geometry missing`);
    assert.ok(descendantsByTag(root, 'rect').length >= 1, `${relative}: background geometry missing`);
    console.log(`Parsed and geometry-checked ${relative}: ${circles.length} markers, ${paths.length} paths, viewBox ${width}×${height}.`);
  }
}
