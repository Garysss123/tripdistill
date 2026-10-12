#!/usr/bin/env python3
import xml.etree.ElementTree as ET
import hashlib
from pathlib import Path

path = Path(__file__).resolve().parents[1] / 'assets/images/tripdistill-canada-ottawa-gatineau-access.svg'
assert hashlib.sha256(path.read_bytes()).hexdigest() == 'ffeee0c1f94a1eaf3c75db8265fe3b2ead17c0a26e3b45c2095ff75ff854ec8f'
root = ET.parse(path).getroot()
ns = {'s': 'http://www.w3.org/2000/svg'}
assert root.tag == '{http://www.w3.org/2000/svg}svg'
assert root.attrib['width'] == '1200' and root.attrib['height'] == '835'
assert root.attrib['viewBox'] == '0 0 1200 835'
assert root.attrib.get('role') == 'img'

def number(element, name, default=0):
    return float(element.attrib.get(name, default))

elements = list(root.iter())
for element in elements:
    tag = element.tag.rsplit('}', 1)[-1]
    if tag == 'rect':
        x, y = number(element, 'x'), number(element, 'y')
        width, height = number(element, 'width'), number(element, 'height')
        assert x >= 0 and y >= 0 and x + width <= 1200 and y + height <= 835, (tag, element.attrib)
    elif tag == 'circle':
        cx, cy, r = number(element, 'cx'), number(element, 'cy'), number(element, 'r')
        assert cx - r >= 0 and cy - r >= 0 and cx + r <= 1200 and cy + r <= 835, (tag, element.attrib)
    elif tag == 'text':
        x, y = number(element, 'x'), number(element, 'y')
        assert 0 <= x <= 1200 and 0 <= y <= 835, (tag, element.attrib)
    elif tag == 'path' and element.attrib.get('d'):
        # This schematic uses only absolute M/L/H/V/C path commands; every coordinate/control
        # point must stay within the root viewBox. (The marker path has its own 10×10 viewBox.)
        d = element.attrib['d']
        import re
        tokens = re.findall(r'[A-Za-z]|[-+]?(?:\d*\.\d+|\d+\.?\d*)(?:[eE][-+]?\d+)?', d)
        i = 0
        command = None
        current_x = current_y = 0.0
        while i < len(tokens):
            if tokens[i].isalpha():
                command = tokens[i]
                i += 1
                if command in 'Zz':
                    continue
            assert command is not None, d
            upper = command.upper()
            arity = {'M': 2, 'L': 2, 'H': 1, 'V': 1, 'C': 6}.get(upper)
            assert arity is not None, (command, d)
            nums = [float(value) for value in tokens[i:i + arity]]
            assert len(nums) == arity, d
            i += arity
            relative = command.islower()
            if upper in ('M', 'L'):
                x, y = nums
                if relative:
                    x += current_x
                    y += current_y
                current_x, current_y = x, y
                points = [(x, y)]
                if upper == 'M': command = 'l' if relative else 'L'
            elif upper == 'H':
                x = current_x + nums[0] if relative else nums[0]
                current_x = x
                points = [(x, current_y)]
            elif upper == 'V':
                y = current_y + nums[0] if relative else nums[0]
                current_y = y
                points = [(current_x, y)]
            else:
                points = []
                for j in range(0, 6, 2):
                    x, y = nums[j], nums[j + 1]
                    if relative:
                        x += current_x
                        y += current_y
                    points.append((x, y))
                current_x, current_y = points[-1]
            for x, y in points:
                max_x, max_y = (1200, 835)
                assert 0 <= x <= max_x and 0 <= y <= max_y, (command, x, y, d)

texts = [(float(e.attrib.get('x', '0')), float(e.attrib.get('y', '0')), ''.join(e.itertext()).strip()) for e in root.findall('.//s:text', ns)]
headers = ['ENGLISH', '繁體中文', '日本語', '한국어', 'ภาษาไทย']
header_x = [68, 288, 508, 728, 948]
for x, label in zip(header_x, headers):
    assert any(tx == x and y == 505 and text == label for tx, y, text in texts), (x, label)
columns = [82, 288, 508, 728, 948]
expected = [
    ['City base', 'River / crossing', 'Connection to verify', 'Choose one park sector'],
    ['城市住宿基地', '河流／跨河', '需核實的交通', '園區擇一區'],
    ['市内の宿泊拠点', '川／渡河', '要確認の接続', '公園は一地区を選択'],
    ['도시 숙박 거점', '강 / 강 건너기', '확인할 연결편', '공원은 한 구역 선택'],
    ['ฐานที่พักในเมือง', 'แม่น้ำ / ข้ามฝั่ง', 'การเดินทางที่ต้องตรวจสอบ', 'เลือกพื้นที่สวนเพียงแห่งเดียว']
]
row_y = [541, 581, 621, 661]
for x, column, values in zip(columns, expected, zip(*expected)):
    for y, value in zip(row_y, column):
        assert any(tx == x and ty == y and text == value for tx, ty, text in texts), (x, y, value)

assert len([e for e in elements if e.tag == '{http://www.w3.org/2000/svg}text']) >= 35
assert all(any(text == phrase for _, _, text in texts) for phrase in ['示意圖，非按比例；虛線不代表特定橋梁、大眾運輸、道路或行程時間。', '概念図・縮尺なし。点線は特定の橋、公共交通、道路、所要時間を示しません。', '개념도이며 축척에 맞지 않습니다. 점선은 특정 다리, 대중교통, 도로 또는 이동 시간을 나타내지 않습니다.', 'เป็นแผนภาพแนวคิด ไม่ได้วาดตามมาตราส่วน เส้นประไม่ระบุสะพาน ขนส่งสาธารณะ ถนน หรือเวลาเดินทาง'])
print(f'CA11 SVG passed: XML well-formed; {len(elements)} elements; root and shape coordinates fit 1200×835; all five language legend columns and four entries present; five-language non-route disclaimer present.')
