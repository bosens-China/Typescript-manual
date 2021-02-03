const fs = require('fs-extra');
const download = require('download-git-repo');

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
function isExistence(p) {
  return fs
    // eslint-disable-next-line no-bitwise
    .access(p, fs.constants.R_OK | fs.constants.W_OK)
    .then(() => true)
    .catch(() => false);
}

exports.downloadGie = downloadGie;
exports.isExistence = isExistence;
