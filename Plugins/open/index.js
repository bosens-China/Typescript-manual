// const { path } = require("@vuepress/shared-utils");
const path = require('path');

module.exports = (options) => ({
  define: {
    openText: options.openText || 'open',
    retractText: options.retractText || 'retract',
  },

  name: 'sider-open',
  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),
});
