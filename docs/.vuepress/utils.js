// config配置文件相关
const { globSync } = require('tinyglobby');
const path = require('path');

function getLinuxPath(file) {
  return file.replace(/\\/g, '/');
}

function getFileName(file) {
  const str = getLinuxPath(file);
  return str.split('/').pop();
}

function getSuffix(file) {
  const index = file.indexOf('.');
  if (index < 0) {
    return undefined;
  }
  return file.split('.').pop();
}

const map = new Map();
function globFileAll(file, mdPath) {
  const error = 'http://xxxx.png';
  const cwd = path.join(__dirname, '../download');
  const suffix = getSuffix(file);
  if (!suffix) {
    return [];
  }

  const mode = `**/*.${suffix}`;
  let arr;
  if (!map.has(mode)) {
    arr = globSync([mode], { cwd }).map((item) =>
      path.isAbsolute(item) ? item : path.join(cwd, item),
    );
    map.set(mode, arr);
  } else {
    arr = map.get(mode);
  }
  const fileName = arr.find((f) => getFileName(f) === getFileName(file));
  if (fileName) {
    return getLinuxPath(`${path.relative(path.dirname(mdPath), fileName)}`);
  }
  return error;
}

module.exports = {
  globFileAll,
};
