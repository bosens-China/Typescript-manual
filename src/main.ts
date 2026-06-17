import path from 'node:path';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { gitClone, fileExists } from './utils.js';
import getJson from './getJson.js';

const downloadPath = path.resolve(process.cwd(), 'docs/download');
const repoUrl = 'https://github.com/zhongsp/TypeScript.git';
const branch = 'dev';
const configJson = path.resolve(process.cwd(), 'configJson.json');

async function App(): Promise<void> {
  if (!(await fileExists(downloadPath))) {
    await mkdir(downloadPath, { recursive: true });
    try {
      gitClone(repoUrl, downloadPath, branch);
    } catch {
      // 第一次克隆可能已经向目录写入了部分内容，git clone 要求目标为空，先清理。
      await rm(downloadPath, { recursive: true, force: true });
      await mkdir(downloadPath, { recursive: true });
      const mirrorUrl = repoUrl.replace('github.com', 'kkgithub.com');
      gitClone(mirrorUrl, downloadPath, branch);
    }
  }

  const md = path.join(downloadPath, 'README.md');
  if (!(await fileExists(md))) {
    throw new Error('README描述文件发生变化，请排查后修改文件');
  }

  const json = await getJson(md);
  if (!json.length) {
    throw new Error('获取json的list长度为0');
  }

  await writeFile(configJson, JSON.stringify(json, null, 2));
}

App().catch((e) => {
  console.error(e);
  process.exit(1);
});
