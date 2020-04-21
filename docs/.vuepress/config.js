const path = require('path');

const jsonPath = path.resolve(process.cwd(), 'configJson.json');
const sidebar = require(jsonPath);

module.exports = {
  configureWebpack: (config) => {
    // 修改所有的规则，让其支持大小写
    config.module.rules.forEach((list) => {
      const item = list;
      item.test = new RegExp(item.test, 'i');
      if (item.test.source.includes('.md$')) {
        item.use.push({
          loader: 'md-imgage-error-loader',
          options: {
            src: 'http://xxxx.png',
          },
        });
      }
    });
  },

  head: [
    ['meta', { name: 'keywords', content: 'typescript,中文,手册,文档' }],
    ['meta', { name: 'author', content: 'boses' }],
    // 禁止自动翻译
    ['meta', { name: 'google', content: 'notranslate' }],
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  // base: process.env.NODE_ENV === "production" ? "/dist/" : "/",
  base: process.env.NODE_ENV === 'production' ? '/Typescript-manual/' : '/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'TypeScript中文手册',
      description:
        'TypeScript是JavaScript类型的超集，它可以编译成纯JavaScript。\n  TypeScript可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。',
    },
  },
  themeConfig: {
    // logo: '/favicon.png',
    locales: {
      '/': {
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新',
          },
        },
        nav: [
          { text: '进入目录', link: '/describe/' },
          {
            text: '友情链接',
            ariaLabel: '友情链接菜单',
            items: [
              {
                text: '深入理解 TypeScript',
                link: 'https://jkchao.github.io/typescript-book-chinese/',
              },
              {
                text: 'hello-typescript',
                link: 'https://ts.xcatliu.com/introduction/hello-typescript',
              },
              {
                text: 'TypeScript手册（英文版）',
                link: 'http://www.typescriptlang.org/docs/home.html',
              },
              {
                text: 'TypeScript语言规范',
                link: 'https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md',
              },
              {
                text: '参与贡献',
                link: 'https://github.com/zhongsp/TypeScript/blob/master/CONTRIBUTING.md',
              },
            ],
          },
          {
            text: 'Github',
            link: 'https://github.com/bosens-China/Typescript-manual',
          },
          {
            text: '问题反馈',
            link: 'https://github.com/bosens-China/Typescript-manual/issues',
          },
        ],
        sidebar: ['/describe/', ...sidebar],
        lastUpdated: false,
      },
    },
    // 上一页下一页
    nextLinks: true,
    prevLinks: true,
    // 滚动效果
    smoothScroll: false,
  },
  plugins: [
    // 启动搜索
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10,
      },
    ],
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    // 百度站点推送
    'vuepress-plugin-baidu-autopush',
    'reading-progress',
  ],
};
