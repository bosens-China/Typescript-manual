import { access, constants } from 'node:fs/promises';
import { execSync } from 'node:child_process';

export function gitClone(url: string, dir: string, branch?: string): void {
  const branchArg = branch ? `--branch ${branch} ` : '';
  execSync(`git clone --depth 1 ${branchArg}${url} ${dir}`, { stdio: 'inherit' });
}

export async function fileExists(p: string): Promise<boolean> {
  try {
    await access(p, constants.R_OK);
    return true;
  } catch {
    return false;
  }
}
