import path from 'path';
// 一些配置文件

// 输出路径
const docsPath = path.resolve(__dirname, '../docs/backups');
const downPath = 'https://github.com/zhongsp/TypeScript/archive/master.zip';
const dirZip = path.resolve(__dirname, '../output');
const dirZipPath = path.join(dirZip, 'master.zip');
// json的输出路基
const jsonPath = path.resolve(__dirname, '../config.json');
const sidebarConfig = {
  collapsable: false,
  sidebarDepth: 1,
};
export default {
  docsPath,
  downPath,
  dirZip,
  dirZipPath,
  sidebarConfig,
  jsonPath,
};
