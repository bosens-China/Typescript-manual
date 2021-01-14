const fs = require('fs-extra');
const rp = require('request-promise');
const unzip = require('node-unzip-2');
const glob = require('glob');

function download(href, route) {
  return new Promise((resolve, reject) => {
    try {
      rp(href)
        .pipe(fs.createWriteStream(route))
        .on('close', () => resolve(true));
    } catch (e) {
      reject(e);
    }
  });
}

// 解压文件夹
function decompression(route, output = {}) {
  return new Promise((resolve, reject) => {
    try {
      fs.createReadStream(route)
        .pipe(unzip.Extract(output))
        .on('close', () => resolve(true));
    } catch (e) {
      reject(e);
    }
  });
}

// 读取文件
function globFile(...rest) {
  return new Promise((resolve, reject) => {
    glob(...rest, (err, me) => {
      if (err) {
        return reject(err);
      }
      return resolve(me);
    });
  });
}
function isUrl(par) {
  return !!/(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(par);
}

exports.download = download;
exports.decompression = decompression;
exports.globFile = globFile;
exports.isUrl = isUrl;
