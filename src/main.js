const fs = require('fs-extra');
const path = require('path');
const { downloadGie, isExistence } = require('./utils');
const getJson = require('./getJson');

// 下载路径
const downloadPath = path.resolve(process.cwd(), 'docs/download');
// 镜像网站
const downloadUrl = 'https://github.com.cnpmjs.org:zhongsp/TypeScript#dev';
const configJson = path.resolve(process.cwd(), 'configJson.json');

async function App() {
  if (!(await isExistence(downloadPath))) {
    await fs.ensureDir(downloadPath);
    // 下载文件
    try {
      await downloadGie(downloadUrl, downloadPath);
    } catch (e) {
      // 如果下载失败，使用github的镜像再次拉取一次
      await downloadGie(downloadUrl.replace('github.com.cnpmjs.org', 'github.com'), downloadPath);
    }
  }
  // README的路径
  const md = path.join(downloadPath, 'README.md');
  if (!(await isExistence(md))) {
    throw new Error('README描述文件发生变化，请排查后修改文件');
  }
  const json = await getJson(md);
  if (!json.length) {
    throw new Error('获取json的list长度为0');
  }
  // 将读取到的信息定制成json写到文件
  await fs.outputFile(configJson, JSON.stringify(json, null, 2));
}

App();
