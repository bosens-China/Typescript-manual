import rp from "request-promise";
import config from "./config";
import { getFile } from "./utils";
import Markdown from "markdown-it";
import path from "path";
import unzip from "node-unzip-2";
import glob from "glob";

import fs from "fs";
import fse from "fs-extra";
import { IdirTree } from "./type";

// 下载文件
function download(href: string, route: string) {
  return new Promise((resolve, reject) => {
    try {
      rp(href)
        .pipe(fs.createWriteStream(route))
        .on("close", () => {
          return resolve(true);
        });
    } catch (e) {
      return reject(e);
    }
  });
}
// 解压文件夹
function decompression(route: string, output = {}) {
  return new Promise((resolve, reject) => {
    try {
      fs.createReadStream(route)
        .pipe(unzip.Extract(output))
        .on("close", () => {
          return resolve(true);
        });
    } catch (e) {
      return reject(e);
    }
  });
}
// 读取文件
function getDirFile(dir: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    glob(dir, (err, me) => {
      if (err) {
        return resolve([]);
      }
      return resolve(me);
    });
  });
}
// 解析成ast同时将md的内容替换掉
function getMk(str: string) {
  // 解析的层级
  const level = 3;
  const md = new Markdown();
  const ast = md.parse(str, {});
  const arr: IdirTree[] = [];
  for (const child of ast) {
    // 如果是标题
    if (child.content && child.level === level) {
      // [快速上手](./doc/handbook/t
      const z = child.content.match(/\[(.+)?\]\((.+?)?\)/);
      if (!z) {
        continue;
      }
      const [, title] = z;
      arr.push({
        title,
        children: [],
        ...config.sidebarConfig,
      });
    } else if (
      child.type === "inline" &&
      child.content &&
      child.level > level
    ) {
      // 对应子列，这里做两步，将标题和href找到
      const z = child.content.match(/\[(.+)?\]\((.+?)?\)/);
      if (!z) {
        continue;
      }
      const [, title, path] = z;
      // 找到最近的上一级插入
      const par = arr[arr.length - 1];
      par.children.push({
        title,
        path
      });
    }
  }

  return arr;
}
function getName(str: string): string {
  return str.split(/\/|\\/).pop();
}
// 将路径替换掉
async function setPath(str: string, dir: Array<IdirTree>, root: string) {
  // 读取目录下所有的文件
  const arr = await getDirFile(str);
  // 这里没有采用递归，因为是定制的目录就两层
  dir.forEach(f => {
    if (Array.isArray(f.children)) {
      f.children.forEach(item => {
        const fileName = getName(item.path);
        // root路径 - name
        const name = arr.find(f => f.includes(fileName));
        item.path = name.slice(root.length);
        return item;
      });
    }
  });
}

(async () => {
  // 写入docs的文件路径
  await fse.remove(config.docsPath);
  // 创建目录
  await fse.ensureDir(config.dirZip);
  // 下载文件
  await download(config.downPath, config.dirZipPath);
  // 解压文件
  await decompression(config.dirZipPath, { path: config.docsPath });
  // 读取目录文件
  const [SUMMARY] = (await getDirFile(
    `${config.docsPath}/**/SUMMARY.md`
  )) as string[];
  const root = path.resolve(config.docsPath, "../");
  const content = await getFile(SUMMARY);
  // 写到文件，主要为了之后文件对比，这里暂时还没对比
  await fse.outputFile(path.resolve(__dirname, "../dir.md"), content);
  // 解析SUMMARY文件
  const sidebar = getMk(content);
  // 替换成 VuePress需要的路径
  await setPath(`${config.docsPath}/**/*.md`, sidebar, root);
  const jsonDate = JSON.stringify(sidebar, null, 2);
  fse.outputFile(path.resolve(__dirname, "../config.json"), jsonDate);
  await fse.remove(config.dirZip);
  console.warn(`下载目录完成`);
})();
