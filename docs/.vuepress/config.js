const path = require("path");
const moment = require("moment");
const sidebar = require(path.resolve(process.cwd(), "config.json"));
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jp?g|gif|svg)$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                outputPath: "assets/img"
              }
            }
          ]
        }
      ]
    }
  },

  // 将会被设置为 <html> 的 lang 属性
  title: "Hello TypeScript",
  description: `TypeScript是JavaScript类型的超集，它可以编译成纯JavaScript。\n  TypeScript可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。`,
  head: [
    ["meta", { name: "keywords", content: "typescript,中文,手册,文档" }],
    ["meta", { name: "author", content: "boses" }],
    ["link", { rel: "icon", href: `/favicon.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["link", { rel: "apple-touch-icon", href: `/icons/128.png` }],
    ["link", { rel: "mask-icon", href: "/favicon.png", color: "#3eaf7c" }],
    ["meta", { name: "msapplication-TileImage", content: "/icons/144.png" }],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  // base: process.env.NODE_ENV === "production" ? "/dist/" : "/",
  base:
    process.env.NODE_ENV === "production" ? "/Typescript-manual/dist/" : "/",
  dest: path.resolve(process.cwd(), "dist"),
  themeConfig: {
    lastUpdated: "最后更新时间",
    nextLinks: true,
    prevLinks: true,
    smoothScroll: true,
    nav: [
      { text: "进入目录", link: "/describe/" },
      {
        text: "友情链接",
        ariaLabel: "友情链接菜单",
        items: [
          {
            text: "深入理解 TypeScript",
            link: "https://jkchao.github.io/typescript-book-chinese/"
          },
          {
            text: "hello-typescript",
            link: "https://ts.xcatliu.com/introduction/hello-typescript"
          },
          {
            text: "参与贡献",
            link:
              "https://github.com/zhongsp/TypeScript/blob/master/CONTRIBUTING.md"
          }
        ]
      },
      {
        text: "Github",
        link: "https://github.com/bosens-China/Typescript-manual"
      },
      {
        text: "问题反馈",
        link: "https://github.com/bosens-China/Typescript-manual/issues"
      }
    ],
    sidebar: ["/describe/", ...sidebar]
  },
  plugins: [
    "@vuepress/active-header-links",
    "@vuepress/back-to-top",
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          // moment.locale(lang);
          return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
        }
      }
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    "@vuepress/nprogress"
  ]
};
