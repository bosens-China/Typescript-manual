const { path } = require('@vuepress/shared-utils');

module.exports = {
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js'),
  ],
  name: 'copy',
  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),
};
