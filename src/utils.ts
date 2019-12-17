import fs from "fs";
import path from "path";
function awaitWrap<T, U = any>(
  promise: Promise<T>
): Promise<[U | null, T | null]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, null]>(err => [err, undefined]);
}
// 读取文件
function getFile(path: string, code = "utf8"): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, code, (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}
// 数组去重
function Arrayremoval<T>(arr: T[]): T[] {
  const set = new Set(arr);
  return [...set];
}
export { awaitWrap,Arrayremoval,getFile };
