// const { path } = require("@vuepress/shared-utils");
const path = require('path');

module.exports = (options = {}) => ({
  name: 'juejin-copy',
  define() {
    const {
      selector = 'div[class*="language-"] pre',
      copyText = 'Copy code',
      tip: { time = 3000, content = 'copy success', title = 'Tips' } = {},
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
