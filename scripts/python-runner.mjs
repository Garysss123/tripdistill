import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

function wslPath(value) {
  const match = /^([a-z]):[\\/](.*)$/iu.exec(value);
  return match ? `/mnt/${match[1].toLowerCase()}/${match[2].replace(/\\/gu, '/')}` : value;
}

export function spawnPython3(args, options = {}) {
  const native = spawnSync('python3', args, options);
  if (process.platform !== 'win32' || (native.status !== null && native.status !== 9009)) return native;

  const cwd = wslPath(options.cwd || process.cwd());
  const wslArgs = ['--cd', cwd, '--exec', 'python3', ...args.map((arg) => typeof arg === 'string' ? wslPath(arg) : arg)];
  const wslExe = path.join(process.env.SystemRoot || 'C:\\Windows', 'System32', 'wsl.exe');
  return spawnSync(wslExe, wslArgs, options);
}

export function execFilePython3(args, options = {}) {
  const result = spawnPython3(args, options);
  if (result.error) throw result.error;
  if (result.status !== 0) {
    const error = new Error(`Command failed: python3 ${args.join(' ')}`);
    error.status = result.status;
    error.signal = result.signal;
    error.stdout = result.stdout;
    error.stderr = result.stderr;
    throw error;
  }
  return result.stdout;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = spawnPython3(process.argv.slice(2), { stdio: 'inherit' });
  if (result.error) {
    console.error(result.error.message);
    process.exitCode = 1;
  } else {
    process.exitCode = result.status ?? 1;
  }
}
