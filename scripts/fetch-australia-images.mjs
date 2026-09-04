import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { australiaEastClusters } from '../data/australia-east-guides.mjs';
import { australiaSouthClusters } from '../data/australia-south-guides.mjs';
import { australiaNorthClusters } from '../data/australia-north-guides.mjs';
import { australiaWestIslandClusters } from '../data/australia-west-islands-guides.mjs';
import { australiaImageManifest as existingManifest } from '../data/australia-image-manifest.mjs';
import { australiaImageOverrides } from '../data/australia-image-overrides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const imageRoot = path.resolve(root, 'assets', 'images') + path.sep;
const manifestPath = path.join(root, 'data', 'australia-image-manifest.mjs');
const allClusters = [...australiaEastClusters, ...australiaSouthClusters, ...australiaNorthClusters, ...australiaWestIslandClusters];
const allGuides = allClusters.flatMap((cluster) => cluster.guides.map((guide) => ({ cluster, guide, key: `${cluster.slug}/${guide.slug}` })));
const force = process.argv.includes('--force');
const missingOnly = process.argv.includes('--missing');
const onlyArg = process.argv.find((arg) => arg.startsWith('--only='))?.slice(7) || '';
const only = new Set(onlyArg.split(',').map((value) => value.trim()).filter(Boolean));
const jobs = only.size ? allGuides.filter(({ key }) => only.has(key)) : missingOnly ? allGuides.filter(({ key }) => !existingManifest[key]) : allGuides;
if (only.size && jobs.length !== only.size) throw new Error(`Unknown Australia image key(s): ${[...only].filter((key) => !allGuides.some((job) => job.key === key)).join(', ')}`);
if (allGuides.length !== 80) throw new Error(`Expected 80 Australia image jobs, found ${allGuides.length}.`);

const allowedLicenses = new Set([
  'CC0', 'Public domain',
  'CC BY 1.0', 'CC BY 2.0', 'CC BY 2.5', 'CC BY 3.0', 'CC BY 4.0',
  'CC BY-SA 1.0', 'CC BY-SA 2.0', 'CC BY-SA 2.5', 'CC BY-SA 3.0', 'CC BY-SA 4.0'
]);
const commercialCreativeCommons = /^CC BY(?:-SA)? [1-4](?:\.\d)?(?: [a-z]{2})?$/i;
const ignoredTokens = new Set(['australia', 'australian', 'the', 'and', 'near', 'view', 'national', 'park', 'coast', 'city']);
const rejectedTitle = /\b(?:map|flag|logo|diagram|chart|locator|location|coat of arms|seal|poster|advertisement|plaque|satellite|street sign|bats?|stork|bird)\b|\bISS\d*/i;
const userAgent = 'TripDistill/1.0 (https://tripdistill.com/contact/)';

function clean(value = '') {
  return String(value)
    .replace(/<br\s*\/?>/gi, ', ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeFileTitle(value) {
  const title = value.replace(/^File:/i, '').replaceAll('_', ' ').trim();
  return `File:${title}`;
}

async function api(params) {
  const url = new URL('https://commons.wikimedia.org/w/api.php');
  url.search = new URLSearchParams({ action: 'query', format: 'json', formatversion: '2', origin: '*', ...params }).toString();
  const response = await fetch(url, { headers: { 'User-Agent': userAgent } });
  if (!response.ok) throw new Error(`Commons API ${response.status}: ${url}`);
  return response.json();
}

function imageInfo(page, allowRejectedTitle = false) {
  const info = page?.imageinfo?.[0];
  if (!info) return null;
  const license = clean(info.extmetadata?.LicenseShortName?.value);
  const creator = clean(info.extmetadata?.Artist?.value || info.extmetadata?.Credit?.value);
  const ratio = info.width / info.height;
  if (info.mime !== 'image/jpeg' && info.mime !== 'image/png') return null;
  if (info.width < 1000 || info.height < 600 || ratio < 1.05 || ratio > 2.6) return null;
  if ((!allowedLicenses.has(license) && !commercialCreativeCommons.test(license)) || !creator || (!allowRejectedTitle && rejectedTitle.test(page.title))) return null;
  return { page, info, license, creator, ratio };
}

function scoreCandidate(candidate, query, index) {
  const title = candidate.page.title.toLowerCase().normalize('NFKD').replace(/\p{M}/gu, '');
  const tokens = query.toLowerCase().normalize('NFKD').replace(/\p{M}/gu, '').match(/[a-z0-9]+/g)?.filter((token) => token.length > 2 && !ignoredTokens.has(token)) || [];
  const matches = tokens.filter((token) => title.includes(token)).length;
  const landscape = 1 - Math.min(Math.abs(candidate.ratio - 1.5), 1);
  const photoBonus = /\.(?:jpe?g)$/i.test(candidate.page.title) ? 2 : 0;
  return matches * 8 + landscape * 3 + photoBonus - index * 0.18;
}

async function metadataForTitle(title) {
  const payload = await api({
    prop: 'imageinfo',
    iiprop: 'url|size|mime|sha1|extmetadata',
    iiurlwidth: '2200',
    titles: normalizeFileTitle(title)
  });
  const candidate = imageInfo(payload.query?.pages?.[0], true);
  if (!candidate) throw new Error(`Override image is missing, too small, portrait, or not commercially licensed: ${title}`);
  return candidate;
}

async function searchImage(query, usedTitles) {
  const words = query.split(/\s+/).filter(Boolean);
  const attempts = [...new Set([query, ...Array.from({ length: Math.max(0, words.length - 2) }, (_, index) => words.slice(0, words.length - index - 1).join(' '))])];
  for (const attempt of attempts) {
    const payload = await api({
      generator: 'search',
      gsrsearch: attempt,
      gsrnamespace: '6',
      gsrlimit: '30',
      prop: 'imageinfo',
      iiprop: 'url|size|mime|sha1|extmetadata',
      iiurlwidth: '2200'
    });
    const candidates = (payload.query?.pages || [])
      .map((page, index) => ({ candidate: imageInfo(page), index }))
      .filter(({ candidate }) => candidate && !usedTitles.has(candidate.page.title))
      .map(({ candidate, index }) => ({ ...candidate, score: scoreCandidate(candidate, query, index) }))
      .sort((a, b) => b.score - a.score);
    if (candidates.length) return candidates[0];
  }
  throw new Error(`No suitable Commons image found for: ${query}`);
}

function entryFrom(candidate, job) {
  const { info, page, license, creator } = candidate;
  const label = page.title.replace(/^File:/, '').replaceAll('_', ' ');
  return {
    src: `/assets/images/australia-${job.cluster.slug}-${job.guide.slug}.webp`,
    alt: job.guide.imageAlt,
    source: info.descriptionurl || `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title).replaceAll('%3A', ':').replaceAll('%20', '_')}`,
    label,
    creator,
    license,
    commonsTitle: page.title,
    remoteSha1: info.sha1
  };
}

async function validateEntry(entry, job) {
  const candidate = await metadataForTitle(entry.commonsTitle);
  const expectedSrc = `/assets/images/australia-${job.cluster.slug}-${job.guide.slug}.webp`;
  if (entry.src !== expectedSrc) throw new Error(`${job.key}: asset path mismatch ${entry.src}`);
  if (entry.alt !== job.guide.imageAlt) throw new Error(`${job.key}: manifest alt is stale`);
  if (entry.license !== candidate.license) throw new Error(`${job.key}: license changed from ${entry.license} to ${candidate.license}`);
  if (entry.creator !== candidate.creator) throw new Error(`${job.key}: creator changed from ${entry.creator} to ${candidate.creator}`);
  if (entry.remoteSha1 !== candidate.info.sha1) throw new Error(`${job.key}: remote Commons revision changed; review before refreshing`);
  return candidate;
}

async function download(url, destination) {
  const response = await fetch(url, { headers: { 'User-Agent': userAgent } });
  if (!response.ok) throw new Error(`Image download ${response.status}: ${url}`);
  fs.writeFileSync(destination, Buffer.from(await response.arrayBuffer()));
}

function verifyWebp(file, key) {
  const probe = spawnSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0:s=x', file], { encoding: 'utf8' });
  if (probe.status !== 0 || probe.stdout.trim() !== '1600x1066') throw new Error(`${key}: invalid local dimensions (${probe.stdout || probe.stderr})`);
  const decode = spawnSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-i', file, '-f', 'null', '-'], { encoding: 'utf8' });
  if (decode.status !== 0) throw new Error(`${key}: local WebP decode failed (${decode.stderr})`);
}

function writeManifest(manifest) {
  const ordered = Object.fromEntries(allGuides.map(({ key }) => [key, manifest[key]]).filter(([, entry]) => entry));
  const source = `// Generated and verified by scripts/fetch-australia-images.mjs.\nexport const australiaImageManifest = ${JSON.stringify(ordered, null, 2)};\n`;
  fs.writeFileSync(manifestPath, source);
}

const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'tripdistill-australia-images-'));
const resolvedTemp = path.resolve(tempRoot);
if (!resolvedTemp.startsWith(path.resolve(os.tmpdir()) + path.sep)) throw new Error(`Unsafe temporary directory: ${resolvedTemp}`);
const manifest = { ...existingManifest };
const usedTitles = new Set(Object.entries(manifest).filter(([key]) => !only.has(key)).map(([, entry]) => entry.commonsTitle));
let created = 0;
let verified = 0;
try {
  for (const [index, job] of jobs.entries()) {
    let candidate;
    let entry = manifest[job.key];
    const override = australiaImageOverrides[job.key];
    const needsSelection = force || !entry || (override && normalizeFileTitle(override) !== entry.commonsTitle);
    if (needsSelection) {
      candidate = override ? await metadataForTitle(override) : await searchImage(job.guide.imageQuery, usedTitles);
      entry = entryFrom(candidate, job);
      manifest[job.key] = entry;
      usedTitles.add(entry.commonsTitle);
    } else {
      if (entry.alt !== job.guide.imageAlt) {
        entry = { ...entry, alt: job.guide.imageAlt };
        manifest[job.key] = entry;
        writeManifest(manifest);
      }
      candidate = await validateEntry(entry, job);
      usedTitles.add(entry.commonsTitle);
    }

    const destination = path.resolve(root, entry.src.replace(/^\//, ''));
    if (!destination.startsWith(imageRoot) || !/^australia-[a-z0-9-]+\.webp$/.test(path.basename(destination))) throw new Error(`${job.key}: unsafe image destination ${destination}`);
    if (fs.existsSync(destination) && !needsSelection && !force) {
      verifyWebp(destination, job.key);
      verified += 1;
      console.log(`[${index + 1}/${jobs.length}] verified ${job.key} — ${entry.license}`);
      continue;
    }

    const original = path.join(tempRoot, `${String(index).padStart(3, '0')}.source`);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    const encoded = `${destination}.${process.pid}.tmp.webp`;
    const backup = `${destination}.${process.pid}.previous.webp`;
    await download(candidate.info.thumburl || candidate.info.url, original);
    try {
      const ffmpeg = spawnSync('ffmpeg', [
        '-hide_banner', '-loglevel', 'error', '-y', '-i', original,
        '-vf', 'scale=1600:1066:force_original_aspect_ratio=increase,crop=1600:1066',
        '-c:v', 'libwebp', '-pix_fmt', 'yuv420p', '-quality', '82', '-preset', 'picture', encoded
      ], { encoding: 'utf8' });
      if (ffmpeg.status !== 0) throw new Error(`${job.key}: ffmpeg failed (${ffmpeg.stderr})`);
      verifyWebp(encoded, job.key);
      if (fs.existsSync(destination)) fs.renameSync(destination, backup);
      try {
        fs.renameSync(encoded, destination);
        verifyWebp(destination, job.key);
        if (fs.existsSync(backup)) fs.rmSync(backup, { force: true });
      } catch (error) {
        if (fs.existsSync(destination)) fs.rmSync(destination, { force: true });
        if (fs.existsSync(backup)) fs.renameSync(backup, destination);
        throw error;
      }
    } finally {
      if (fs.existsSync(encoded)) fs.rmSync(encoded, { force: true });
      if (fs.existsSync(backup)) {
        if (fs.existsSync(destination)) fs.rmSync(backup, { force: true });
        else fs.renameSync(backup, destination);
      }
    }
    created += 1;
    writeManifest(manifest);
    console.log(`[${index + 1}/${jobs.length}] selected ${job.key} — ${entry.label} · ${entry.creator} · ${entry.license}`);
  }
  writeManifest(manifest);
} finally {
  fs.rmSync(resolvedTemp, { recursive: true, force: true });
}

console.log(`Australia images ready: ${created} created, ${verified} verified, ${Object.keys(manifest).length}/80 manifest entries.`);
