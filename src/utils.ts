import fs from "fs";
import path from "path";
function awaitWrap<T, U = any>(
  promise: Promise<T>
): Promise<[U | null, T | null]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, null]>(err => [err, null]);
}
// 写入文件
function setFile<T>(path: string, content: T): Promise<T> {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, err => {
      if (err) {
        return reject(err);
      }
      return resolve(content);
    });
  });
}
// 读取文件
function getFile(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}
// 创建目录
function setDir(path: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, err => {
      if (err) {
        return reject(err);
      }
      return resolve(true);
    });
  });
}

// 文件或者目录是否存在
function hasFile(path: string) {
  return new Promise((resolve, reject) => {
    fs.access(path, err => {
      if (err) {
        return reject(err);
      }
      return resolve(true);
    });
  });
}
// 删除目录
function removeDir(dir: string) {
  return new Promise(function(resolve, reject) {
    //先读文件夹
    fs.stat(dir, function(err, stat) {
      if (stat.isDirectory()) {
        fs.readdir(dir, function(err, files) {
          files = files.map(file => path.join(dir, file)); 
          files = files.map(file => removeDir(file)) as any; 
          Promise.all(files).then(function() {
            fs.rmdir(dir, resolve);
          });
        });
      } else {
        fs.unlink(dir, resolve);
      }
    });
  });
}

export { awaitWrap, setFile, getFile, hasFile, setDir, removeDir };
