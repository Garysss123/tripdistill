import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

function executable(command) {
  const candidates = process.platform === 'win32' ? [
    `C:\\Program Files\\${command}\\${command}.exe`,
    `C:\\Program Files (x86)\\${command}\\${command}.exe`
  ] : [];
  const direct = candidates.find((candidate) => fs.existsSync(candidate));
  if (direct) return direct;
  const finder = process.platform === 'win32' ? 'where.exe' : 'which';
  try {
    return execFileSync(finder, [command], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim().split(/\r?\n/u)[0] || null;
  } catch {
    return null;
  }
}

function renderSvg(svgFile, pngFile, width, height) {
  const inkscape = executable('inkscape');
  const magick = executable(process.platform === 'win32' ? 'magick' : 'magick') || (process.platform === 'win32' ? null : executable('convert'));
  if (inkscape) {
    execFileSync(inkscape, [svgFile, '--export-filename', pngFile], { stdio: 'pipe', timeout: 60000 });
    return 'Inkscape';
  }
  if (magick) {
    const version = execFileSync(magick, ['-version'], { encoding: 'utf8', stdio: 'pipe', timeout: 5000 });
    if (version.includes('ImageMagick')) {
      execFileSync(magick, [svgFile, '-depth', '8', pngFile], { stdio: 'pipe', timeout: 60000 });
      return 'ImageMagick';
    }
  }
  if (process.platform === 'win32') {
    const edge = executable('Microsoft\\Edge\\Application\\msedge')
      || ['C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', 'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'].find((candidate) => fs.existsSync(candidate))
      || executable('Google\\Chrome\\Application\\chrome');
    if (edge) {
      const profile = `${pngFile}.profile`;
      execFileSync(edge, [
        '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
        '--no-first-run', '--no-default-browser-check', `--user-data-dir=${profile}`,
        `--window-size=${width},${height}`, `--screenshot=${pngFile}`, pathToFileURL(svgFile).href
      ], { stdio: 'pipe', timeout: 60000 });
      return 'Microsoft Edge';
    }
  }
  throw new Error('Pixel regression requires Inkscape, ImageMagick, or (on Windows) the existing Microsoft Edge browser.');
}

export function renderSvgToTempPng(svgFile, width, height, prefix) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  const pngFile = path.join(directory, 'render.png');
  try {
    const renderer = renderSvg(svgFile, pngFile, width, height);
    return { directory, pngFile, renderer };
  } catch (error) {
    fs.rmSync(directory, { recursive: true, force: true });
    throw error;
  }
}

export function removeRenderedTemp(directory) {
  const tempRoot = path.resolve(os.tmpdir());
  const resolved = path.resolve(directory);
  if (path.dirname(resolved) !== tempRoot) throw new Error(`Refusing to remove non-temp render directory: ${resolved}`);
  fs.rmSync(resolved, { recursive: true, force: true });
}
