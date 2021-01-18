// const fs = require('fs-extra');
const download = require('download-git-repo');
const glob = require('glob');

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

function downloadGie(git, dir) {
  return new Promise((resolve, reject) => {
    download(git, dir, { clone: true }, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve(undefined);
    });
  });
}
exports.globFile = globFile;
exports.isUrl = isUrl;
exports.downloadGie = downloadGie;
