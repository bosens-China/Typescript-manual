
// 处理md不存在的图片资源
const glob = require('glob');
const path = require('path');
const loaderUtils = require('loader-utils');
const MarkdownIt = require('markdown-it');

function isUrl(par) {
  return (!!/(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(par));
}

function mdImgage(source) {
  const options = loaderUtils.getOptions(this);
  const { regexp = '*.{jpg,gif,svg,png}', dir, src = 'http://xxx.png' } = options || {};

  const dirArr = Array.isArray(dir) ? dir : [dir];
  const imgage = dirArr
    .map((item) => glob.sync(`${item}/**/${regexp}`, {
      nocase: true,
    }))
    .flat(Infinity);

  const removeArr = [];
  const md = new MarkdownIt();
  const env = {};

  const ast = md.parse(source, env);

  // 解析
  function next(astmd) {
    if (!Array.isArray(astmd)) {
      return;
    }
    for (const child of astmd) {
      // 在末尾插入
      if (child.tag === 'img') {
        // 判断一下图片在不在集合中，如果在就不修改，否则改变
        for (const item of child.attrs) {
          if (item.includes('src')) {
            const [, url] = item;
            if (isUrl(url)) {
              continue;
            }
            const { base } = path.parse(url);
            if (!imgage.find((f) => f.includes(base))) {
              removeArr.push(url);
            }
          }
        }
      }

      if (Array.isArray(child.children)) {
        next(child.children);
      }
    }
  }
  next(ast);
  const text = removeArr.reduce((x, y) => x.replace(y, src), source);
  return text;
}

module.exports = mdImgage;
