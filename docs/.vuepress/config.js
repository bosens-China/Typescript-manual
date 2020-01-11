const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const moment = require("moment");

const jsonPath = path.resolve(process.cwd(), "config.json");
// eslint-disable-next-line import/no-dynamic-require
const { sidebar } = require(jsonPath);
const copy = require('../../Plugins/copy');
const open = require('../../Plugins/open');

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          // 只处理大写，原图片有loader处理
          test: /\.(PNG|JP?G|FIG|SVG)$/,
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

  head: [
    ["meta", { name: "keywords", content: "typescript,中文,手册,文档" }],
    ["meta", { name: "author", content: "boses" }],
    // 禁止自动翻译
    ["meta", { name: "google", content: "notranslate" }],
    ["link", { rel: "icon", href: "/favicon.png" }]
    // ["link", { rel: "manifest", href: "/manifest.json" }],
    // ["meta", { name: "theme-color", content: "#3eaf7c" }],
    // ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    // [
    //   "meta",
    //   { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    // ],
    // ["link", { rel: "apple-touch-icon", href: `/icons/128.png` }],
    // ["link", { rel: "mask-icon", href: "/favicon.png", color: "#3eaf7c" }],
    // ["meta", { name: "msapplication-TileImage", content: "/icons/144.png" }],
    // ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  // base: process.env.NODE_ENV === "production" ? "/dist/" : "/",
  base:
    process.env.NODE_ENV === "production" ? "/Typescript-manual/" : "/",
  // dest: path.resolve(process.cwd(), "dist"),
  locales: {
    "/": {
      // lang: "zh-cmn-Hans",
      lang: "zh-CN",
      title: "Hello TypeScript",
      description:
        "TypeScript是JavaScript类型的超集，它可以编译成纯JavaScript。\n  TypeScript可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。"
    }
  },
  themeConfig: {
    locales: {
      "/": {
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
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
        sidebar: ["/describe/", ...sidebar],
        lastUpdated: "最后更新时间"
      }
    },
    // 上一页下一页
    nextLinks: true,
    prevLinks: true,
    // 滚动效果
    smoothScroll: true
  },
  plugins: [
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10
      }
    ],
    "@vuepress/active-header-links",
    "@vuepress/back-to-top",
    [
      "@vuepress/last-updated",
      {
        transformer: timestamp =>
          moment(timestamp).format("YYYY-MM-DD HH:mm:ss")
      }
    ],
    // [
    //   "@vuepress/pwa",
    //   {
    //     serviceWorker: true,
    //     updatePopup: true
    //   }
    // ],
    "@vuepress/nprogress",
    // 百度站点推送
    "vuepress-plugin-baidu-autopush",
    "reading-progress",
    "pangu",
    [
      copy,
      {
        copyText: "复制代码",
        tip: { content: "复制成功" }
      }
    ],
    [
      open,
      {
        openText: "展开",
        retractText: "收起"
      }
    ]
  ]
};
