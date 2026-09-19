import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { franceNorthWestClusters } from '../data/france-north-west-guides.mjs';
import { franceCentralEastClusters } from '../data/france-central-east-guides.mjs';
import { franceAtlanticSouthwestClusters } from '../data/france-atlantic-southwest-guides.mjs';
import { franceMediterraneanClusters } from '../data/france-mediterranean-guides.mjs';
import { franceImageManifest as existingManifest } from '../data/france-image-manifest.mjs';
import { franceImageOverrides } from '../data/france-image-overrides.mjs';

const root = path.resolve(import.meta.dirname, '..');
const manifestPath = path.join(root, 'data', 'france-image-manifest.mjs');
const imageRoot = path.join(root, 'assets', 'images') + path.sep;
const sourceClusters = [
  ...franceNorthWestClusters,
  ...franceCentralEastClusters,
  ...franceAtlanticSouthwestClusters,
  ...franceMediterraneanClusters
];
const allGuides = sourceClusters.flatMap((cluster) => cluster.guides.map((guide) => ({
  cluster,
  guide,
  key: `${cluster.slug}/${guide.slug}`
})));
if (allGuides.length !== 60) throw new Error(`Expected 60 France image jobs, found ${allGuides.length}.`);

const onlyArg = process.argv.find((arg) => arg.startsWith('--only='));
const only = new Set(onlyArg ? onlyArg.slice(7).split(',').map((value) => value.trim()).filter(Boolean) : allGuides.map(({ key }) => key));
const unknown = [...only].filter((key) => !allGuides.some((job) => job.key === key));
if (unknown.length) throw new Error(`Unknown France image job(s): ${unknown.join(', ')}`);
const force = process.argv.includes('--force');
const jobs = allGuides.filter(({ key }) => only.has(key));

const allowedLicenses = new Set([
  'CC0', 'Public domain',
  'CC BY 1.0', 'CC BY 2.0', 'CC BY 2.5', 'CC BY 3.0', 'CC BY 4.0',
  'CC BY-SA 1.0', 'CC BY-SA 2.0', 'CC BY-SA 2.5', 'CC BY-SA 3.0', 'CC BY-SA 4.0'
]);
const commercialCreativeCommons = /^CC BY(?:-SA)? [1-4](?:\.\d)?(?: [a-z]{2})?$/i;
const ignoredTokens = new Set(['france', 'french', 'view', 'city', 'town', 'old', 'panorama', 'landscape', 'the', 'and', 'with', 'near']);
const rejectedTitle = /\b(?:map|flag|logo|diagram|chart|locator|location|coat of arms|seal|poster|advertisement|plaque|satellite|street sign)\b/i;
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
  const response = await fetch(url, { headers: { 'User-Agent': userAgent }, signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`Commons API ${response.status}: ${url}`);
  return response.json();
}

function imageInfo(page, allowRejectedTitle = false) {
  const info = page?.imageinfo?.[0];
  if (!info) return null;
  const license = clean(info.extmetadata?.LicenseShortName?.value);
  const creator = clean(info.extmetadata?.Artist?.value || info.extmetadata?.Credit?.value);
  const ratio = info.width / info.height;
  if (!['image/jpeg', 'image/png'].includes(info.mime)) return null;
  if (info.width < 1000 || info.height < 600 || ratio < 1.05 || ratio > 2.8) return null;
  if ((!allowedLicenses.has(license) && !commercialCreativeCommons.test(license)) || !creator || (!allowRejectedTitle && rejectedTitle.test(page.title))) return null;
  return { page, info, license, creator, ratio };
}

function scoreCandidate(candidate, query, index) {
  const title = candidate.page.title.toLowerCase().normalize('NFKD').replace(/\p{M}/gu, '');
  const tokens = query.toLowerCase().normalize('NFKD').replace(/\p{M}/gu, '').match(/[a-z0-9]+/g)?.filter((token) => token.length > 2 && !ignoredTokens.has(token)) || [];
  const matches = tokens.filter((token) => title.includes(token)).length;
  const landscape = 1 - Math.min(Math.abs(candidate.ratio - 1.5), 1);
  const photoBonus = /\.(?:jpe?g)$/i.test(candidate.page.title) ? 2 : 0;
  return matches * 10 + landscape * 3 + photoBonus - index * 0.18;
}

async function metadataForTitle(title) {
  const payload = await api({ prop: 'imageinfo', iiprop: 'url|size|mime|sha1|extmetadata', iiurlwidth: '2200', titles: normalizeFileTitle(title) });
  const candidate = imageInfo(payload.query?.pages?.[0], true);
  if (!candidate) throw new Error(`Override image is missing, too small, portrait, or not commercially licensed: ${title}`);
  return candidate;
}

async function searchImage(query, usedTitles) {
  const words = query.split(/\s+/).filter(Boolean);
  const placeTokens = words.filter((word) => /paris|versailles|fontainebleau|giverny|lille|vimy|opal|rouen|bayeux|michel|malo|carnac|crozon|chambord|chenonceau|villandry|reims|epernay|troyes|strasbourg|colmar|alsace|dijon|beaune|vezelay|lyon|annecy|chamonix|grenoble|bordeaux|emilion|arcachon|sarlat|vezere|dordogne|toulouse|albi|carcassonne|biarritz|luz|gavarnie|montpellier|nimes|arles|avignon|aix|luberon|marseille|calanques|cassis|nice|eze|antibes|ajaccio|bastia|bonifacio/i.test(word));
  const attempts = [...new Set([
    query,
    words.slice(0, Math.max(3, words.length - 2)).join(' '),
    words.slice(0, Math.max(2, words.length - 4)).join(' '),
    [placeTokens[0], placeTokens[1], 'France'].filter(Boolean).join(' '),
    [placeTokens[0], 'France'].filter(Boolean).join(' ')
  ].filter(Boolean))];
  for (const attempt of attempts) {
    const payload = await api({
      generator: 'search', gsrsearch: attempt, gsrnamespace: '6', gsrlimit: '35',
      prop: 'imageinfo', iiprop: 'url|size|mime|sha1|extmetadata', iiurlwidth: '2200'
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
  return {
    src: `/assets/images/france-${job.cluster.slug}-${job.guide.slug}.webp`,
    alt: job.guide.imageAlt,
    source: info.descriptionurl || `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title).replaceAll('%3A', ':').replaceAll('%20', '_')}`,
    label: page.title.replace(/^File:/, '').replaceAll('_', ' '),
    creator,
    license,
    commonsTitle: page.title,
    remoteSha1: info.sha1
  };
}

async function validateEntry(entry, job) {
  const candidate = await metadataForTitle(entry.commonsTitle);
  const expectedSrc = `/assets/images/france-${job.cluster.slug}-${job.guide.slug}.webp`;
  if (entry.src !== expectedSrc) throw new Error(`${job.key}: asset path mismatch ${entry.src}`);
  if (entry.alt !== job.guide.imageAlt) throw new Error(`${job.key}: manifest alt is stale`);
  if (entry.license !== candidate.license || entry.creator !== candidate.creator || entry.remoteSha1 !== candidate.info.sha1) {
    throw new Error(`${job.key}: Commons metadata changed; review before refreshing`);
  }
  return candidate;
}

async function download(url, destination) {
  const response = await fetch(url, { headers: { 'User-Agent': userAgent }, signal: AbortSignal.timeout(45000) });
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
  fs.writeFileSync(manifestPath, `// Generated and verified by scripts/fetch-france-images.mjs.\nexport const franceImageManifest = ${JSON.stringify(ordered, null, 2)};\n`);
}

const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'tripdistill-france-images-'));
const manifest = { ...existingManifest };
const usedTitles = new Set(Object.entries(manifest).filter(([key]) => !only.has(key)).map(([, entry]) => entry.commonsTitle));
let created = 0;
let verified = 0;

try {
  for (const [index, job] of jobs.entries()) {
    let candidate;
    let entry = manifest[job.key];
    const override = franceImageOverrides[job.key];
    const needsSelection = force || !entry || (override && normalizeFileTitle(override) !== entry.commonsTitle);
    if (needsSelection) {
      candidate = override ? await metadataForTitle(override) : await searchImage(job.guide.imageQuery, usedTitles);
      entry = entryFrom(candidate, job);
      manifest[job.key] = entry;
      usedTitles.add(entry.commonsTitle);
    } else {
      if (entry.alt !== job.guide.imageAlt) entry = manifest[job.key] = { ...entry, alt: job.guide.imageAlt };
      candidate = await validateEntry(entry, job);
      usedTitles.add(entry.commonsTitle);
    }

    const destination = path.resolve(root, entry.src.replace(/^\//, ''));
    if (!destination.startsWith(imageRoot) || !/^france-[a-z0-9-]+\.webp$/.test(path.basename(destination))) throw new Error(`${job.key}: unsafe image destination ${destination}`);
    if (fs.existsSync(destination) && !needsSelection && !force) {
      verifyWebp(destination, job.key);
      verified += 1;
      console.log(`[${index + 1}/${jobs.length}] verified ${job.key} — ${entry.license}`);
      continue;
    }

    fs.mkdirSync(path.dirname(destination), { recursive: true });
    const original = path.join(tempRoot, `${String(index).padStart(3, '0')}.source`);
    const encoded = `${destination}.${process.pid}.tmp.webp`;
    await download(candidate.info.thumburl || candidate.info.url, original);
    const ffmpeg = spawnSync('ffmpeg', [
      '-hide_banner', '-loglevel', 'error', '-y', '-i', original,
      '-vf', 'scale=1600:1066:force_original_aspect_ratio=increase,crop=1600:1066',
      '-frames:v', '1',
      '-c:v', 'libwebp', '-pix_fmt', 'yuv420p', '-quality', '82', '-preset', 'picture', encoded
    ], { encoding: 'utf8' });
    if (ffmpeg.status !== 0) throw new Error(`${job.key}: ffmpeg failed (${ffmpeg.stderr})`);
    verifyWebp(encoded, job.key);
    fs.renameSync(encoded, destination);
    verifyWebp(destination, job.key);
    created += 1;
    writeManifest(manifest);
    console.log(`[${index + 1}/${jobs.length}] selected ${job.key} — ${entry.label} · ${entry.creator} · ${entry.license}`);
  }
  writeManifest(manifest);
} finally {
  fs.rmSync(tempRoot, { recursive: true, force: true });
}

console.log(`France images ready: ${created} created, ${verified} verified, ${Object.keys(manifest).length}/60 manifest entries.`);
