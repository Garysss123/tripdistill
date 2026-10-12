#!/usr/bin/env python3
"""Regression checks for the original five-language Niagara planning schematic."""
import os
import re
import shutil
import struct
import subprocess
import tempfile
import xml.etree.ElementTree as ET
import zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SVG = ROOT / 'assets/images/tripdistill-canada-niagara-falls-decision.svg'
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

def number(element, name, default=0):
    return float(element.attrib.get(name, default))

elements = list(root.iter())
for element in elements:
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
        d = element.attrib['d']
        tokens = re.findall(r'[A-Za-z]|[-+]?(?:\d*\.\d+|\d+\.?\d*)(?:[eE][-+]?\d+)?', d)
        index = 0
        command = None
        current_x = current_y = 0.0
        while index < len(tokens):
            if tokens[index].isalpha():
                command = tokens[index]
                index += 1
                if command in 'Zz':
                    continue
            assert command is not None, d
            upper = command.upper()
            arity = {'M': 2, 'L': 2, 'H': 1, 'V': 1, 'C': 6}.get(upper)
            assert arity is not None, (command, d)
            values = [float(value) for value in tokens[index:index + arity]]
            assert len(values) == arity, d
            index += arity
            relative = command.islower()
            if upper in ('M', 'L'):
                x, y = values
                if relative:
                    x += current_x
                    y += current_y
                current_x, current_y = x, y
                points = [(x, y)]
                if upper == 'M':
                    command = 'l' if relative else 'L'
            elif upper == 'H':
                current_x = current_x + values[0] if relative else values[0]
                points = [(current_x, current_y)]
            elif upper == 'V':
                current_y = current_y + values[0] if relative else values[0]
                points = [(current_x, current_y)]
            else:
                points = []
                for offset in range(0, 6, 2):
                    x, y = values[offset], values[offset + 1]
                    if relative:
                        x += current_x
                        y += current_y
                    points.append((x, y))
                current_x, current_y = points[-1]
            for x, y in points:
                assert 0 <= x <= 1200 and 0 <= y <= 700, (command, x, y, d)

texts = [(number(element, 'x'), number(element, 'y'), ''.join(element.itertext()).strip()) for element in root.findall('.//s:text', ns)]
headers = ['ENGLISH', '繁體中文', '日本語', '한국어', 'ภาษาไทย']
header_x = [70, 290, 510, 730, 950]
for x, label in zip(header_x, headers):
    assert any(tx == x and y == 427 and text == label for tx, y, text in texts), (x, label)
columns = [80, 290, 510, 730, 950]
expected_rows = [
    ['Rail arrival', '鐵路抵達', '鉄道で到着', '철도 도착', 'เดินทางด้วยรถไฟ'],
    ['Local transfer', '當地接駁', '現地の移動', '현지 환승', 'ต่อรถในพื้นที่'],
    ['Falls district', '瀑布區', '滝エリア', '폭포 지구', 'ย่านน้ำตก'],
    ['Other day / book ride', '另一天／預約接送', '別日／送迎を予約', '다른 날 / 차량 예약', 'วันอื่น / จองรถรับส่ง']
]
row_y = [459, 496, 533, 570]
for y, row in zip(row_y, expected_rows):
    for x, phrase in zip(columns, row):
        assert any(tx == x and ty == y and text == phrase for tx, ty, text in texts), (x, y, phrase)
disclaimers = [
    'Schematic only; not to scale. Dashed links show itinerary decisions, not actual roads, rail, shuttle routes or travel times.',
    '僅為示意，非按比例。虛線表示行程規劃，不代表實際道路、鐵路、接駁路線或交通時間。',
    '概念図で縮尺なし。破線は旅程の判断を示し、実際の道路・鉄道・シャトル路線・所要時間ではありません。',
    '개념도이며 축척에 맞지 않습니다. 점선은 일정 결정을 나타내며 실제 도로, 철도, 셔틀 노선 또는 이동 시간이 아닙니다.',
    'แผนภาพแนวคิด ไม่ได้วาดตามมาตราส่วน เส้นประแสดงการวางแผน ไม่ใช่ถนน รถไฟ เส้นทางรถรับส่ง หรือเวลาเดินทางจริง'
]
assert all(any(text == phrase for _, _, text in texts) for phrase in disclaimers)

def read_png(path):
    raw = path.read_bytes()
    assert raw[:8] == b'\x89PNG\r\n\x1a\n'
    cursor = 8
    chunks = []
    width = height = bit_depth = color_type = None
    while cursor < len(raw):
        length = struct.unpack('>I', raw[cursor:cursor + 4])[0]
        kind = raw[cursor + 4:cursor + 8]
        payload = raw[cursor + 8:cursor + 8 + length]
        cursor += length + 12
        if kind == b'IHDR':
            width, height, bit_depth, color_type, compression, filtering, interlace = struct.unpack('>IIBBBBB', payload)
            assert compression == filtering == interlace == 0
        elif kind == b'IDAT':
            chunks.append(payload)
        elif kind == b'IEND':
            break
    assert bit_depth == 8 and color_type in (2, 6), (bit_depth, color_type)
    channels = 3 if color_type == 2 else 4
    bpp = channels
    stride = width * channels
    packed = zlib.decompress(b''.join(chunks))
    rows = []
    previous = bytearray(stride)
    offset = 0
    for _ in range(height):
        filter_type = packed[offset]
        scanline = bytearray(packed[offset + 1:offset + 1 + stride])
        offset += stride + 1
        for index in range(stride):
            left = scanline[index - bpp] if index >= bpp else 0
            above = previous[index]
            upper_left = previous[index - bpp] if index >= bpp else 0
            if filter_type == 1:
                scanline[index] = (scanline[index] + left) & 255
            elif filter_type == 2:
                scanline[index] = (scanline[index] + above) & 255
            elif filter_type == 3:
                scanline[index] = (scanline[index] + ((left + above) // 2)) & 255
            elif filter_type == 4:
                predictor = left + above - upper_left
                distances = (abs(predictor - left), abs(predictor - above), abs(predictor - upper_left))
                nearest = left if distances[0] <= distances[1] and distances[0] <= distances[2] else above if distances[1] <= distances[2] else upper_left
                scanline[index] = (scanline[index] + nearest) & 255
            else:
                assert filter_type == 0, f'Unsupported PNG filter: {filter_type}'
        rows.append(bytes(scanline))
        previous = scanline
    return width, height, channels, rows

with tempfile.TemporaryDirectory(prefix='ca12-niagara-svg-') as scratch:
    png_path = Path(scratch) / 'niagara.png'
    rendered = subprocess.run([INKSCAPE, str(SVG), f'--export-filename={png_path}'], capture_output=True, text=True, check=False)
    assert rendered.returncode == 0 and png_path.is_file(), rendered.stderr
    width, height, channels, pixels = read_png(png_path)
    assert (width, height) == (1200, 700), (width, height)

    def pixel(x, y):
        start = x * channels
        return tuple(pixels[y][start:start + 3])

    assert pixel(10, 10) == (244, 241, 233), 'Rendered background pixel changed.'
    card_colors = [(246, 231, 227), (232, 239, 240), (232, 238, 229), (242, 237, 219)]
    card_points = [(80, 145), (356, 145), (632, 145), (908, 145)]
    for point, expected in zip(card_points, card_colors):
        assert pixel(*point) == expected, (point, pixel(*point), expected)

    def dark_pixel_count(left, top, right, bottom):
        count = 0
        for y in range(top, bottom):
            for x in range(left, right):
                rgb = pixel(x, y)
                if max(rgb) < 190:
                    count += 1
        return count

    legend_bounds = [(73, 274), (285, 495), (505, 715), (725, 935), (945, 1148)]
    for row_index, y in enumerate(row_y):
        top, bottom = y - 18, y + 2
        for left, right in legend_bounds:
            assert dark_pixel_count(left, top, right, bottom) >= 12, f'Localized legend row {row_index + 1} did not render in column {left}.'
    for line, baseline in zip(disclaimers, [615, 633, 651, 669, 687]):
        assert dark_pixel_count(48, baseline - 13, 1150, baseline + 2) >= 25, f'Five-language not-to-scale disclaimer did not render: {line}'

print(f'CA12 SVG passed: XML and {len(elements)}-element geometry fit 1200×700; all five localized legend columns and disclaimers are present; Inkscape pixel checks confirmed background, four card fills and rendered text.')
