import { access, constants } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

export function gitClone(url: string, dir: string, branch?: string): void {
  const args = ['clone', '--depth', '1'];
  if (branch) {
    args.push('--branch', branch);
  }
  args.push(url, dir);
  execFileSync('git', args, { stdio: 'inherit' });
}

export async function fileExists(p: string): Promise<boolean> {
  try {
    await access(p, constants.R_OK);
    return true;
  } catch {
    return false;
  }
}
