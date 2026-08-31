import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { vietnamGuides } from '../data/vietnam-guides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const imageRoot = path.resolve(root, 'assets', 'images') + path.sep;
const force = process.argv.includes('--force');
const onlyArgument = process.argv.find((argument) => argument.startsWith('--only='))?.slice('--only='.length);
const only = new Set((onlyArgument || '').split(',').map((value) => value.trim()).filter(Boolean));
const allowedLicense = /^(?:CC0|Public domain|CC BY(?:-SA)?)(?:\s|$)/i;
const allImages = [...new Map(vietnamGuides.map((guide) => [guide.image.src, guide.image])).values()];
const images = only.size ? allImages.filter((image) => only.has(image.src) || only.has(path.basename(image.src))) : allImages;
if (only.size && images.length !== only.size) throw new Error(`--only did not match every requested Vietnam image: ${[...only].join(', ')}`);

function commonsTitle(source) {
  const url = new URL(source);
  const pathname = decodeURIComponent(url.pathname);
  if (url.hostname !== 'commons.wikimedia.org' || !pathname.startsWith('/wiki/File:')) {
    throw new Error(`Vietnam image source is not a Wikimedia Commons File page: ${source}`);
  }
  return pathname.slice('/wiki/'.length).replaceAll('_', ' ');
}

function text(value = '') {
  return String(value).replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
}

function creatorTokens(value) {
  const ignored = new Set(['and', 'the', 'image', 'images', 'photo', 'photograph', 'using', 'data', 'from', 'with', 'own', 'work']);
  return String(value).normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase().match(/[\p{L}\p{N}]+/gu)?.filter((token) => token.length >= 2 && !ignored.has(token)) || [];
}

function creatorMatches(declared, remote) {
  const declaredTokens = creatorTokens(declared);
  const remoteTokens = new Set(creatorTokens(remote));
  if (!declaredTokens.length || !remoteTokens.size) return false;
  return declaredTokens.filter((token) => remoteTokens.has(token)).length / declaredTokens.length >= 0.5;
}

async function metadataFor(image) {
  const title = commonsTitle(image.source);
  const api = new URL('https://commons.wikimedia.org/w/api.php');
  api.search = new URLSearchParams({
    action: 'query',
    format: 'json',
    origin: '*',
    prop: 'imageinfo',
    iiprop: 'url|size|extmetadata',
    iiurlwidth: '2000',
    titles: title
  }).toString();
  const response = await fetch(api, { headers: { 'User-Agent': 'TripDistill/1.0 (https://tripdistill.com/contact/)' } });
  if (!response.ok) throw new Error(`Commons API ${response.status} for ${title}`);
  const payload = await response.json();
  const page = Object.values(payload.query?.pages || {})[0];
  const info = page?.imageinfo?.[0];
  if (!info) throw new Error(`Commons returned no image metadata for ${title}`);
  const license = text(info.extmetadata?.LicenseShortName?.value);
  const artist = text(info.extmetadata?.Artist?.value);
  const credit = text(info.extmetadata?.Credit?.value);
  if (!allowedLicense.test(license)) throw new Error(`${title} has unsupported license "${license}"`);
  if (!allowedLicense.test(image.license)) throw new Error(`${title} declares unsupported local license "${image.license}"`);
  if (license.trim().toLowerCase() !== image.license.trim().toLowerCase()) throw new Error(`${title} license mismatch: Commons "${license}", local "${image.license}"`);
  if (!artist) throw new Error(`${title} has no Commons artist metadata`);
  const creatorProblem = creatorMatches(image.creator, `${artist} ${credit}`) ? '' : `${title} creator mismatch: Commons "${artist}", local "${image.creator}"`;
  return { title, license, artist, creatorProblem, width: info.width, height: info.height, download: info.thumburl || info.url };
}

async function download(url, destination) {
  const response = await fetch(url, { headers: { 'User-Agent': 'TripDistill/1.0 (https://tripdistill.com/contact/)' } });
  if (!response.ok) throw new Error(`Image download ${response.status}: ${url}`);
  fs.writeFileSync(destination, Buffer.from(await response.arrayBuffer()));
}

function verifyWebp(file, title) {
  const probe = spawnSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0:s=x', file], { encoding: 'utf8' });
  if (probe.status !== 0 || probe.stdout.trim() !== '1600x1066') throw new Error(`Local WebP dimensions are invalid for ${title}: ${probe.stderr || probe.stdout}`);
  const verification = spawnSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-i', file, '-f', 'null', '-'], { encoding: 'utf8' });
  if (verification.status !== 0) throw new Error(`Encoded WebP failed verification for ${title}: ${verification.stderr || verification.stdout}`);
}

const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'tripdistill-vietnam-images-'));
const resolvedTemporaryDirectory = path.resolve(temporaryDirectory);
const resolvedTemporaryRoot = path.resolve(os.tmpdir()) + path.sep;
if (!resolvedTemporaryDirectory.startsWith(resolvedTemporaryRoot)) throw new Error(`Unsafe temporary directory: ${resolvedTemporaryDirectory}`);
let created = 0;
let skipped = 0;
const provenanceProblems = [];
try {
  for (const [index, image] of images.entries()) {
    const destination = path.join(root, image.src.replace(/^\//, ''));
    const resolvedDestination = path.resolve(destination);
    if (!resolvedDestination.startsWith(imageRoot) || !/^vietnam-[a-z0-9-]+\.webp$/i.test(path.basename(resolvedDestination))) {
      throw new Error(`Unsafe Vietnam image destination: ${resolvedDestination}`);
    }
    const exists = fs.existsSync(resolvedDestination);
    const metadata = await metadataFor(image);
    if (metadata.creatorProblem) {
      provenanceProblems.push(metadata.creatorProblem);
      console.error(`[${index + 1}/${images.length}] ${metadata.creatorProblem}`);
      continue;
    }
    if (exists && !force) {
      verifyWebp(resolvedDestination, metadata.title);
      skipped += 1;
      console.log(`[${created + skipped}/${images.length}] ${path.relative(root, resolvedDestination)} — verified ${metadata.license}, ${metadata.artist}, 1600x1066`);
      continue;
    }
    const temporary = path.join(temporaryDirectory, `${String(index).padStart(3, '0')}.source`);
    await download(metadata.download, temporary);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    const result = spawnSync('ffmpeg', [
      '-hide_banner', '-loglevel', 'error', '-y', '-i', temporary,
      '-vf', 'scale=1600:1066:force_original_aspect_ratio=increase,crop=1600:1066',
      '-c:v', 'libwebp', '-pix_fmt', 'yuv420p', '-quality', '82', '-preset', 'picture', resolvedDestination
    ], { encoding: 'utf8' });
    if (result.status !== 0) throw new Error(`ffmpeg failed for ${metadata.title}: ${result.stderr || result.stdout}`);
    try {
      verifyWebp(resolvedDestination, metadata.title);
    } catch (error) {
      fs.unlinkSync(resolvedDestination);
      throw error;
    }
    created += 1;
    console.log(`[${created + skipped}/${images.length}] ${path.relative(root, resolvedDestination)} — ${metadata.license}, ${metadata.width}x${metadata.height}`);
  }
} finally {
  fs.rmSync(resolvedTemporaryDirectory, { recursive: true, force: true });
}

if (provenanceProblems.length) throw new Error(`Vietnam image provenance validation found ${provenanceProblems.length} creator mismatch(es).`);
console.log(`Vietnam images ready: ${created} created, ${skipped} existing, ${images.length} total.`);
