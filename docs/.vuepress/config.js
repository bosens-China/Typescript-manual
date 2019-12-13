const path = require("path");
module.exports = {
  title: "Hello TypeScript",
  description: "TypeScript 手册",
  dest: path.resolve(__dirname, "dist"),
  themeConfig: {
    nav: [
      { text: "返回主页", link: "/" },
      { text: "返回主页", link: "/" },
      { text: "github", link: "/guide/" },
      { text: "问题反馈", link: "https://google.com" },
      {
        text: "友情链接",
        ariaLabel: "Language Menu",
        items: [
          { text: "深入理解 TypeScript", link: "https://jkchao.github.io/typescript-book-chinese/" },
          { text: "hello-typescript", link: "https://ts.xcatliu.com/introduction/hello-typescript" }
        ]
      }
    ]
  }
};
