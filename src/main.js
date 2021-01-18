const fs = require('fs-extra');
const path = require('path');
const { downloadGie, globFile, isUrl } = require('./utils');

// 下载路径
const downloadPath = path.resolve(process.cwd(), 'docs/download');
// 镜像网站
const downloadUrl = 'https://github.com.cnpmjs.org:zhongsp/TypeScript#dev';
const configJson = path.resolve(process.cwd(), 'configJson.json');

async function readDate(readme) {
  // 所有的md文件，用作对比的用途
  const mdArr = await globFile(`${path.dirname(readme)}/**/*.md`);
  const content = await fs.readFile(readme, 'utf-8');
  const reg = /\*\s+\[(.+?)\]\((.+?)\.md\)/gm;
  const map = new Map();
  for (const match of content.matchAll(reg)) {
    const [, name, namePath] = match;
    // 判断是不是目录名称
    if (/readme/i.test(namePath)) {
      map.set(name, []);
    } else {
      // 取最后一位键名加入
      const key = [...map.keys()].pop();
      const item = map.get(key);
      let readmePath = namePath;
      if (isUrl(readmePath)) {
        continue;
      }
      if (!path.isAbsolute(namePath)) {
        readmePath = mdArr.find((f) => {
          const v = f.includes(namePath);
          if (v) {
            return v;
          }
          const n = namePath.split('/').pop();
          return f.includes(n);
        });
      }
      if (readmePath) {
        // 路径要返回相对的路径
        readmePath = readmePath.replace(path.join(process.cwd(), 'docs').replace(/\\/g, '/'), '');
        item.push({ name, path: readmePath });
      }
    }
  }
  // 将读取到的信息定制成json写到文件
  const json = [];
  for (const [name, value] of map.entries()) {
    json.push({
      title: name,
      collapsable: false,
      sidebarDepth: 1,
      children: value.map((item) => {
        const obj = {};
        obj.title = item.name;
        obj.path = item.path;
        return obj;
      }),
    });
  }

  await fs.outputFile(configJson, JSON.stringify(json, null, 2));
}

async function App() {
  // 删除目录和重新创建目录
  await fs.remove(downloadPath);
  await fs.ensureDir(downloadPath);
  // 下载文件
  await downloadGie(downloadUrl, downloadPath);
  // 读取到markwon的描述文件，然后解析确定里面的文件
  const file = await globFile('/**/README.md', {
    root: downloadPath,
  });
  // 排序一下输出
  const [typeScriptDir] = file.sort((x, y) => x.length - y.length);
  await readDate(typeScriptDir);
}

App();
