import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const jobs = JSON.parse(fs.readFileSync(path.join(root, 'data/spain/image-jobs.json'), 'utf8').replace(/^\uFEFF/, ''));
const manifestPath = path.join(root, 'data/spain/images.json');
const assetRoot = path.join(root, 'assets/images');
const ffmpeg = process.env.FFMPEG_PATH || 'ffmpeg';
const ffprobe = process.env.FFPROBE_PATH || 'ffprobe';
const allowed = /^CC BY(?:-SA)? [1-4](?:\.\d)?(?: [a-z]{2})?$/i;
const userAgent = 'TripDistill/1.0 (https://tripdistill.com/contact/)';
const clean = (value = '') => String(value).replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'tripdistill-spain-images-'));
const manifest = {};
fs.mkdirSync(assetRoot, { recursive: true });
try {
  for (const [index, job] of jobs.entries()) {
    const api = new URL('https://commons.wikimedia.org/w/api.php');
    api.search = new URLSearchParams({ action: 'query', format: 'json', formatversion: '2', prop: 'imageinfo', iiprop: 'url|size|mime|sha1|extmetadata', iiurlwidth: '2200', titles: job.title }).toString();
    const response = await fetch(api, { headers: { 'User-Agent': userAgent }, signal: AbortSignal.timeout(45000) });
    if (!response.ok) throw new Error(`${job.slug}: Commons metadata request failed (${response.status})`);
    const data = await response.json();
    const page = data.query?.pages?.[0];
    const info = page?.imageinfo?.[0];
    if (!info) throw new Error(`${job.slug}: no metadata for ${job.title}`);
    const license = clean(info.extmetadata?.LicenseShortName?.value);
    const creator = clean(info.extmetadata?.Artist?.value || info.extmetadata?.Credit?.value).replace('User:', '');
    if (!['image/jpeg', 'image/png'].includes(info.mime) || info.width < 1000 || info.height < 600 || info.width / info.height < 1.05) throw new Error(`${job.slug}: unsuitable image dimensions or format`);
    if (!allowed.test(license) || license !== job.license || creator !== job.creator) throw new Error(`${job.slug}: license/creator mismatch; expected ${job.creator}, ${job.license}; got ${creator}, ${license}`);
    const downloadUrl = info.thumburl || info.url;
    if (!downloadUrl) throw new Error(`${job.slug}: Commons did not return an image URL`);
    const imageResponse = await fetch(downloadUrl, { headers: { 'User-Agent': userAgent }, signal: AbortSignal.timeout(60000) });
    if (!imageResponse.ok) throw new Error(`${job.slug}: image download failed (${imageResponse.status})`);
    const input = path.join(temp, `${job.slug}.source`);
    const output = path.join(assetRoot, `spain-${job.slug}.webp`);
    fs.writeFileSync(input, Buffer.from(await imageResponse.arrayBuffer()));
    const convert = spawnSync(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-y', '-i', input, '-vf', 'scale=1600:1066:force_original_aspect_ratio=increase,crop=1600:1066', '-frames:v', '1', '-quality', '84', output], { encoding: 'utf8' });
    if (convert.status !== 0) throw new Error(`${job.slug}: WebP conversion failed (${convert.stderr})`);
    const probe = spawnSync(ffprobe, ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0:s=x', output], { encoding: 'utf8' });
    if (probe.status !== 0 || probe.stdout.trim() !== '1600x1066') throw new Error(`${job.slug}: incorrect WebP dimensions (${probe.stdout})`);
    const decode = spawnSync(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-i', output, '-f', 'null', '-'], { encoding: 'utf8' });
    if (decode.status !== 0) throw new Error(`${job.slug}: WebP decode check failed (${decode.stderr})`);
    manifest[job.slug] = { src: `/assets/images/spain-${job.slug}.webp`, alt: job.alt, source: info.descriptionurl, label: page.title.replace(/^File:/, ''), creator, license, commonsTitle: page.title, remoteSha1: info.sha1, width: 1600, height: 1066, derivative: '2200px Commons thumbnail, center-cropped and resized to 1600x1066 WebP; visual crop subject to page render review.' };
    console.log(`[${index + 1}/${jobs.length}] ${job.slug}: ${creator}, ${license}; 1600x1066 WebP verified.`);
  }
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
} finally {
  fs.rmSync(temp, { recursive: true, force: true });
}
