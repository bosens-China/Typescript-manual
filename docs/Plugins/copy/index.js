// const { path } = require("@vuepress/shared-utils");
const path = require("path");

module.exports = (options = {}, ctx) => ({
  define: {
    selector: options.selector || 'div[class*="language-"] pre',
    copyText: options.copyText || '复制代码',
    change: options.change
  },
  clientRootMixin: path.resolve(__dirname, "clientRootMixin.js")
});
