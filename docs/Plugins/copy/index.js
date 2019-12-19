// const { path } = require("@vuepress/shared-utils");
const path = require('path');

module.exports = (options = {}) => ({
  define() {
    const {
      selector = 'div[class*="language-"] pre',
      copyText = '复制代码',
      tip: { time = 3000, content = '复制成功', title = '提示' } = {},
      change,
      visibleTip = true,
    } = options;
    return {
      selector,
      copyText,
      time,
      content,
      title,
      change,
      visibleTip,
    };
  },

  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),
  enhanceAppFiles: [path.resolve(__dirname, 'appFile.js')],
});
