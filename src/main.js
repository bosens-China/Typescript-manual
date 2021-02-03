const fs = require('fs-extra');
const path = require('path');
const { downloadGie, isExistence } = require('./utils');

// 下载路径
const downloadPath = path.resolve(process.cwd(), 'docs/download');
// 镜像网站
const downloadUrl = 'https://github.com.cnpmjs.org:zhongsp/TypeScript#dev';
const configJson = path.resolve(process.cwd(), 'configJson.json');

async function readDate(readme) {
  const reg = /\*\s+\[(.+?)\]\((.+?)\/README\.md\)/gu;
  const content = await fs.readFile(readme, 'utf-8');

  const json = [];
  for (const iterator of content.matchAll(reg)) {
    // * [5分钟了解TypeScript](tutorials/typescript-in-5-minutes.md)
    const [, name, dir] = iterator;
    // 根据name生成正则，直接把符合条件的子集全部添加上
    const childReg = new RegExp(`\\*\\s+\\[(.+?)\\]\\((${dir}.+?)\\)`, 'gu');
    const children = [];
    json.push({
      title: name,
      collapsable: false,
      sidebarDepth: 1,
      children,
    });
    for (const item of content.matchAll(childReg)) {
      const [, title, p] = item;
      // 不能包含README.md
      if (/README\.md/.test(p)) {
        continue;
      }
      const completePath = path.join(readme, '../', p).replace(/\\/g, '/');
      const docsPath = path.join(process.cwd(), 'docs').replace(/\\/g, '/');
      // 路径要返回相对的路径
      const readmePath = completePath.replace(docsPath, '');
      children.push({
        title,
        path: readmePath,
      });
    }
  }
  // 将读取到的信息定制成json写到文件
  await fs.outputFile(configJson, JSON.stringify(json, null, 2));
}

async function App() {
  if (!(await isExistence(downloadPath))) {
    await fs.ensureDir(downloadPath);
    // 下载文件
    await downloadGie(downloadUrl, downloadPath);
  }
  // README的路径
  const md = path.join(downloadPath, 'README.md');
  if (!(await isExistence(md))) {
    throw new Error('README描述文件发生变化，请排查后修改文件');
  }
  await readDate(md);
}

App();
