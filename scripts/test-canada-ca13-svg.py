#!/usr/bin/env python3
"""Validate the five-language Saguenay sector schematic and render its pixels."""
import re
import shutil
import struct
import subprocess
import tempfile
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SVG = ROOT / 'assets/images/tripdistill-canada-saguenay-sector-decisions.svg'
INKSCAPE = shutil.which('inkscape')
assert INKSCAPE, 'Pixel regression requires the local Inkscape renderer.'

tree = ET.parse(SVG)
root = tree.getroot()
SVG_NS = 'http://www.w3.org/2000/svg'
ns = {'s': SVG_NS}
assert root.tag == f'{{{SVG_NS}}}svg'
assert root.attrib.get('width') == '1200' and root.attrib.get('height') == '700'
assert root.attrib.get('viewBox') == '0 0 1200 700'
assert root.attrib.get('role') == 'img'
assert root.attrib.get('aria-labelledby') == 'title desc'
ids = [element.attrib['id'] for element in root.iter() if element.attrib.get('id')]
assert len(ids) == len(set(ids)), 'SVG IDs must be unique.'
assert {'title', 'desc'} <= set(ids)
assert root.find('.//{http://www.w3.org/2000/svg}script') is None
assert root.find('.//{http://www.w3.org/2000/svg}image') is None, 'The diagram must use actual SVG geometry, not a raster image.'

def number(element, name, default=0):
    return float(element.attrib.get(name, default))

for element in root.iter():
    tag = element.tag.rsplit('}', 1)[-1]
    if tag == 'rect':
        x, y = number(element, 'x'), number(element, 'y')
        width, height = number(element, 'width'), number(element, 'height')
        assert x >= 0 and y >= 0 and x + width <= 1200 and y + height <= 700, (tag, element.attrib)
    elif tag == 'circle':
        cx, cy, radius = number(element, 'cx'), number(element, 'cy'), number(element, 'r')
        assert cx - radius >= 0 and cy - radius >= 0 and cx + radius <= 1200 and cy + radius <= 700, (tag, element.attrib)
    elif tag == 'text':
        x, y = number(element, 'x'), number(element, 'y')
        assert 0 <= x <= 1200 and 0 <= y <= 700, (tag, element.attrib)
    elif tag == 'path' and element.attrib.get('d'):
        tokens = re.findall(r'[A-Za-z]|[-+]?(?:\d*\.\d+|\d+\.?\d*)(?:[eE][-+]?\d+)?', element.attrib['d'])
        index = 0
        command = None
        x = y = 0.0
        while index < len(tokens):
            if tokens[index].isalpha():
                command = tokens[index]
                index += 1
                if command in 'Zz':
                    continue
            assert command is not None
            upper = command.upper()
            arity = {'M': 2, 'L': 2, 'H': 1, 'V': 1, 'Q': 4, 'C': 6}.get(upper)
            assert arity is not None, (command, element.attrib['d'])
            values = [float(value) for value in tokens[index:index + arity]]
            assert len(values) == arity, element.attrib['d']
            index += arity
            relative = command.islower()
            points = []
            if upper in ('M', 'L'):
                nx, ny = values
                if relative:
                    nx += x
                    ny += y
                points = [(nx, ny)]
                x, y = nx, ny
                if upper == 'M':
                    command = 'l' if relative else 'L'
            elif upper == 'H':
                x = x + values[0] if relative else values[0]
                points = [(x, y)]
            elif upper == 'V':
                y = y + values[0] if relative else values[0]
                points = [(x, y)]
            elif upper == 'Q':
                points = [(values[0], values[1]), (values[2], values[3])]
                if relative:
                    points = [(px + x, py + y) for px, py in points]
                x, y = points[-1]
            else:
                points = [(values[i], values[i + 1]) for i in range(0, 6, 2)]
                if relative:
                    points = [(px + x, py + y) for px, py in points]
                x, y = points[-1]
            for px, py in points:
                assert 0 <= px <= 1200 and 0 <= py <= 700, (command, px, py, element.attrib['d'])

texts = {element.attrib['id']: ''.join(element.itertext()).strip() for element in root.findall('.//s:text', ns)}
required = {
    'legend-en-title': 'ENGLISH', 'legend-zh-title': '繁體中文', 'legend-ja-title': '日本語',
    'legend-ko-title': '한국어', 'legend-th-title': 'ภาษาไทย',
    'legend-en-1': 'Hike / fjord views', 'legend-zh-1': '健行／峽灣景觀', 'legend-ja-1': 'ハイキング／フィヨルド眺望',
    'legend-ko-1': '하이킹 / 피오르 전망', 'legend-th-1': 'เดินป่า / ชมฟยอร์ด',
    'scope-en': 'Schematic · no scale · no actual routes',
    'scope-zh': '僅示意・無比例・非實際路線',
    'scope-ja': '概念図・縮尺なし・実際の経路ではない',
    'scope-ko': '개념도 · 축척 없음 · 실제 경로 아님',
    'scope-th': 'แผนภาพ · ไม่ตามสเกล · ไม่ใช่เส้นทางจริง'
}
for element_id, phrase in required.items():
    assert texts.get(element_id) == phrase, (element_id, texts.get(element_id))
assert {'sector-eternite', 'sector-sainte-marguerite', 'sector-tadoussac'} <= set(ids)

with tempfile.TemporaryDirectory(prefix='ca13-svg-') as temp_dir:
    png = Path(temp_dir) / 'saguenay.png'
    subprocess.run([INKSCAPE, str(SVG), '--export-filename', str(png)], check=True, capture_output=True, text=True)
    data = png.read_bytes()
    assert data[:8] == b'\x89PNG\r\n\x1a\n'
    width, height = struct.unpack('>II', data[16:24])
    assert (width, height) == (1200, 700)
    assert len(data) > 30_000, f'Rendered pixel output unexpectedly small ({len(data)} bytes).'

print('CA13 Saguenay SVG passed XML, unique ID, bounds, genuine geometry, five-language legend and Inkscape pixel-render checks.')
