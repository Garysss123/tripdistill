import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { italyImageManifest } from '../data/italy-image-manifest.mjs';

const root = path.resolve(import.meta.dirname, '..');
const output = fs.mkdtempSync(path.join(os.tmpdir(), 'trip-italy-photos-'));
const items = Object.entries(italyImageManifest);
if (items.length !== 60) throw new Error(`Expected 60 Italy images for contact sheets, found ${items.length}.`);

for (let start = 0; start < items.length; start += 12) {
  const chunk = items.slice(start, start + 12);
  const inputs = chunk.flatMap(([, entry]) => ['-i', path.join(root, entry.src)]);
  const filters = chunk.map((_, index) => `[${index}:v]scale=320:213,setsar=1[v${index}]`).join(';')
    + ';' + chunk.map((_, index) => `[v${index}]`).join('')
    + `xstack=inputs=${chunk.length}:layout=`
    + chunk.map((_, index) => `${(index % 4) * 320}_${Math.floor(index / 4) * 213}`).join('|')
    + '[out]';
  const file = path.join(output, `sheet-${String(start + 1).padStart(2, '0')}-${String(start + chunk.length).padStart(2, '0')}.jpg`);
  const result = spawnSync('ffmpeg', ['-v', 'error', ...inputs, '-filter_complex', filters, '-map', '[out]', '-frames:v', '1', '-y', file], { encoding: 'utf8' });
  if (result.status) throw new Error(result.stderr);
  console.log(file);
  console.log(chunk.map(([key], index) => `${start + index + 1}: ${key}`).join('\n'));
}
