const fs = require('fs-extra');
const { Remarkable } = require('remarkable');
const jsdom = require('jsdom');
const path = require('path');
const { isExistence } = require('./utils');

const { JSDOM } = jsdom;

module.exports = async (filePath) => {
  const content = await fs.readFile(filePath, 'utf-8');
  const md = new Remarkable();
  const html = md.render(content);
  const { document } = new JSDOM(html).window;
  const con = document.body.querySelector('ul');
  const li = Array.from(con.querySelectorAll('li'));
  const title = li.filter((f) => f.parentElement === con);
  const json = [];
  for (const item of title) {
    const titleStr = item.firstChild.textContent;
    const child = {
      title: titleStr,
      collapsable: false,
      sidebarDepth: 1,
    };
    const asyncArr = [];
    const children = [];
    Array.from(item.querySelectorAll('ul li a'))
      .filter((f) => {
        const str = f.getAttribute('href');
        if (/README/i.test(str)) {
          return false;
        }
        return true;
      })
      .forEach((el) => {
        const str = el.getAttribute('href');
        // 当前md的绝对路径
        const completePath = path.join(filePath, '../', str).replace(/\\/g, '/');
        const docsPath = path.join(process.cwd(), 'docs').replace(/\\/g, '/');
        // 路径要返回相对的路径
        const readmePath = completePath.replace(docsPath, '');
        // 检测文件是否存在
        asyncArr.push(
          isExistence(completePath).then((res) => {
            if (!res) {
              return;
            }
            children.push({
              path: readmePath,
              title: el.textContent,
            });
          }),
        );
      });
    // eslint-disable-next-line no-await-in-loop
    await Promise.all(asyncArr);
    // 如果存在才push
    if (children.length) {
      child.children = children;
      json.push(child);
    }
  }
  return json;
};
