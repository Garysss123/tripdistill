#!/usr/bin/env python3
import math
import re
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
NS = '{http://www.w3.org/2000/svg}'
FILES = {
    'assets/images/tripdistill-italy-bologna-portico-plan.svg': ['1', '2', '3'],
    'assets/images/tripdistill-italy-modena-parma-rail-and-booking-plan.svg': ['1', '2', '3', '4', '4'],
}
NUMBER = re.compile(r'[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?')
TOKENS = re.compile(r'[A-Za-z]|[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?')

def inside(x, y, width, height, label):
    assert math.isfinite(x) and math.isfinite(y), f'{label}: non-finite coordinate'
    assert 0 <= x <= width and 0 <= y <= height, f'{label}: coordinate {(x, y)} outside viewBox'

def path_points(d, label):
    tokens = TOKENS.findall(d)
    i = 0
    command = None
    x = y = 0.0
    points = []
    counts = {'M': 2, 'L': 2, 'H': 1, 'V': 1, 'C': 6, 'S': 4, 'Q': 4, 'T': 2}
    while i < len(tokens):
        if tokens[i].isalpha():
            command = tokens[i]
            i += 1
            if command in 'Zz':
                continue
            assert command.upper() in counts, f'{label}: unsupported path command {command}'
        assert command, f'{label}: missing path command'
        upper = command.upper()
        count = counts[upper]
        assert i + count <= len(tokens), f'{label}: incomplete {command} segment'
        vals = [float(v) for v in tokens[i:i + count]]
        assert all(math.isfinite(v) for v in vals), f'{label}: non-finite path coordinate'
        i += count
        relative = command.islower()
        if upper == 'H':
            x = x + vals[0] if relative else vals[0]
            points.append((x, y))
        elif upper == 'V':
            y = y + vals[0] if relative else vals[0]
            points.append((x, y))
        elif upper == 'M' or upper == 'L' or upper == 'T':
            x = x + vals[0] if relative else vals[0]
            y = y + vals[1] if relative else vals[1]
            points.append((x, y))
            if upper == 'M':
                command = 'l' if relative else 'L'
        elif upper == 'C':
            coords = []
            for n in range(0, 6, 2):
                px = x + vals[n] if relative else vals[n]
                py = y + vals[n + 1] if relative else vals[n + 1]
                coords.append((px, py))
            points.extend(coords)
            x, y = coords[-1]
        elif upper == 'S' or upper == 'Q':
            coords = []
            for n in range(0, 4, 2):
                px = x + vals[n] if relative else vals[n]
                py = y + vals[n + 1] if relative else vals[n + 1]
                coords.append((px, py))
            points.extend(coords)
            x, y = coords[-1]
    return points

for relative, markers in FILES.items():
    tree = ET.parse(ROOT / relative)
    root = tree.getroot()
    assert root.tag == NS + 'svg', f'{relative}: wrong SVG root namespace'
    box = [float(value) for value in root.attrib['viewBox'].split()]
    assert len(box) == 4 and box[0] == 0 and box[1] == 0 and box[2] > 0 and box[3] > 0, f'{relative}: invalid viewBox'
    _, _, width, height = box
    assert not root.find(NS + 'title') and not root.find(NS + 'desc'), f'{relative}: use the translated HTML alt instead of embedded English accessibility text'
    assert not root.findall('.//{http://www.w3.org/2000/svg}image'), f'{relative}: embedded raster is not allowed'
    assert not root.findall('.//{http://www.w3.org/1999/xlink}href'), f'{relative}: external linked resource is not allowed'
    circles = root.findall('.//' + NS + 'circle')
    assert len(circles) == len(markers), f'{relative}: expected {len(markers)} numbered markers, got {len(circles)}'
    for node in root.findall('.//' + NS + 'circle'):
        cx, cy, radius = (float(node.attrib[key]) for key in ['cx', 'cy', 'r'])
        sw = float(node.attrib.get('stroke-width', 0))
        assert radius > 0 and cx - radius - sw / 2 >= 0 and cy - radius - sw / 2 >= 0
        assert cx + radius + sw / 2 <= width and cy + radius + sw / 2 <= height, f'{relative}: circle/stroke spills outside canvas'
    texts = [node.text for node in root.findall('.//' + NS + 'text')]
    assert texts == markers, f'{relative}: visible SVG labels must be only the numbered legend markers; got {texts}'
    for node in root.findall('.//' + NS + 'text'):
        inside(float(node.attrib['x']), float(node.attrib['y']), width, height, f'{relative} text')
    for node in root.findall('.//' + NS + 'rect'):
        x, y = float(node.attrib.get('x', 0)), float(node.attrib.get('y', 0))
        w, h = float(node.attrib['width']), float(node.attrib['height'])
        assert w > 0 and h > 0 and x >= 0 and y >= 0 and x + w <= width and y + h <= height, f'{relative}: rect outside canvas'
    for node in root.findall('.//' + NS + 'path'):
        pts = path_points(node.attrib['d'], relative)
        assert pts, f'{relative}: empty path geometry'
        for px, py in pts: inside(px, py, width, height, relative)
    assert len(root.findall('.//' + NS + 'path')) >= 2, f'{relative}: route geometry missing'
    assert len(root.findall('.//' + NS + 'rect')) >= 1, f'{relative}: background geometry missing'
    print(f'Parsed and geometry-checked {relative}: {len(circles)} markers, {len(root.findall(".//" + NS + "path"))} paths, viewBox {width:g}×{height:g}.')
