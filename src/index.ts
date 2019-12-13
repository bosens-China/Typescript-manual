import rp from "request-promise";
import {
  awaitWrap,
  getFile,
  setFile,
  setDir,
  removeDir
} from "./utils";
import markdown from "markdown-it";
import path from "path";
import unzip from "node-unzip-2";
import glob from "glob";

import fs from "fs";
import { dirTree } from "./type";

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
  const md = new markdown();
  const ast = md.parse(str, {});
  const arr: dirTree[] = [];
  for (let i = 0; i < ast.length; i++) {
    const child = ast[i];
    // 如果是h1之类的标签跳过
    if (/h\d/.test(child.tag)) {
      continue;
    }
    // 如果是标题
    if (child.content && child.level == level) {
      // [快速上手](./doc/handbook/t
      arr.push({
        name: child.content.match(/\[(.+)?\]/)[1],
        child: []
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
      const [, name, href] = z;
      // 找到最近的上一级插入
      const par = arr[arr.length - 1];
      par.child.push({
        name,
        href
      });
    }
  }
  return arr;
}
// 将路径替换掉
async function setPath(str: string, dir: Array<dirTree>) {
  // 读取目录下所有的文件
  const arr = await getDirFile(str);
  const replace = function(d: dirTree[]) {
    if (!Array.isArray(d)) {
      return;
    }
    d.forEach(item => {
      if (Array.isArray(item.child)) {
        replace(item.child);
      } else {
        const fileName = item.href.split("/").pop();
        const href = arr.find(f => f.includes(fileName));
        item.href = href;
      }
    });
  };
  replace(dir);
}

(async () => {
  const catalog = path.resolve(__dirname, "../output");
  // 删除一次目录
  await awaitWrap(removeDir(catalog));
  const route = path.join(catalog, "master.zip");
  // 创建目录
  await setDir(catalog);
  await download(
    "https://github.com/zhongsp/TypeScript/archive/master.zip",
    route
  );
  await decompression(route, { path: "output" });
  const [SUMMARY] = (await getDirFile(`${catalog}/**/SUMMARY.md`)) as string[];
  const content = await getFile(SUMMARY);
  // 写到文件，主要为了方便对比
  await setFile(path.resolve(__dirname, "../dir.md"), content);
  const arr = getMk(content);
  await setPath(`${catalog}/**/*.md`, arr);
  // 写成json的格式
  await setFile(path.resolve(__dirname, "../config.json"), JSON.stringify(arr));
  // 完成后删除整个目录
})();
