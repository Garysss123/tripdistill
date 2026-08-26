import fs from 'node:fs';
import path from 'node:path';

const sourceRoot = path.resolve(import.meta.dirname, '..');
const outputRoot = path.resolve(sourceRoot, 'dist');
const hardLimit = 20_000;
const warningLimit = 18_000;
const maxFileBytes = 25 * 1024 * 1024;

const publicDirectories = [
  'about',
  'assets',
  'components',
  'contact',
  'css',
  'data',
  'japan',
  'js',
  'privacy-policy',
  'south-korea',
  'thailand',
  'terms-of-use'
];

const publicFiles = [
  '404.html',
  'ads.txt',
  'articles-osaka-food.html',
  'favicon.ico',
  'favicon.svg',
  'index.html',
  'robots.txt',
  'sitemap.xml',
  '_headers',
  '_redirects'
];

function assertSafeOutput() {
  const expected = path.join(sourceRoot, 'dist');
  if (outputRoot !== expected || path.dirname(outputRoot) !== sourceRoot || path.basename(outputRoot) !== 'dist') {
    throw new Error(`Refusing to clean unexpected output path: ${outputRoot}`);
  }
}

function requireSource(relativePath) {
  const source = path.join(sourceRoot, relativePath);
  if (!fs.existsSync(source)) throw new Error(`Required public source is missing: ${relativePath}`);
  return source;
}

function collectFiles(directory) {
  const results = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) results.push(...collectFiles(absolute));
    else if (entry.isFile()) results.push(absolute);
  }
  return results;
}

assertSafeOutput();
fs.rmSync(outputRoot, { recursive: true, force: true });
fs.mkdirSync(outputRoot, { recursive: true });

for (const directory of publicDirectories) {
  fs.cpSync(requireSource(directory), path.join(outputRoot, directory), { recursive: true });
}

for (const file of publicFiles) {
  fs.copyFileSync(requireSource(file), path.join(outputRoot, file));
}

const outputFiles = collectFiles(outputRoot);
const oversized = outputFiles.filter((file) => fs.statSync(file).size > maxFileBytes);

if (oversized.length) {
  const labels = oversized.map((file) => path.relative(outputRoot, file));
  throw new Error(`Cloudflare Pages rejects files over 25 MiB: ${labels.join(', ')}`);
}

if (outputFiles.length >= hardLimit) {
  throw new Error(`Deployment blocked: ${outputFiles.length.toLocaleString()} files reaches the 20,000-file safety boundary.`);
}

if (outputFiles.length >= warningLimit) {
  console.warn(`Warning: dist contains ${outputFiles.length.toLocaleString()} files; review consolidation before 20,000.`);
}

const htmlCount = outputFiles.filter((file) => file.endsWith('.html')).length;
const imageCount = outputFiles.filter((file) => /\.(?:avif|gif|jpe?g|png|svg|webp)$/i.test(file)).length;
const totalBytes = outputFiles.reduce((sum, file) => sum + fs.statSync(file).size, 0);

console.log(`Built dist: ${outputFiles.length.toLocaleString()} files (${htmlCount} HTML, ${imageCount} images, ${(totalBytes / 1024 / 1024).toFixed(1)} MiB).`);
console.log(`Cloudflare Pages file headroom: ${(hardLimit - outputFiles.length).toLocaleString()} files before the safety boundary.`);
