const path = require('path');
const { globFileAll } = require('./utils');

const jsonPath = path.resolve(process.cwd(), 'configJson.json');
// eslint-disable-next-line import/no-dynamic-require
const sidebar = require(jsonPath);

const copy = require('./assembly/copy');
const update = require('./assembly/update');
const switchThemes = require('./assembly/switchThemes');

module.exports = {
  theme: 'default-prefers-color-scheme',
  configureWebpack: (config) => {
    config.entry.app.unshift('babel-polyfill');
    // 修改所有的规则，让其支持大小写
    config.module.rules.forEach((list) => {
      const item = list;
      item.test = new RegExp(item.test, 'i');
      if (item.test.source.includes('.md$')) {
        item.use.push({
          loader: 'md-imgage-error-loader',
          options: {
            src(value, mdPath) {
              return globFileAll(value, mdPath);
            },
          },
        });
      }
    });
  },

  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0,user-scalable=no, viewport-fit=cover',
      },
    ],
    ['meta', { name: 'keywords', content: 'typescript,docs,手册,文档' }],
    ['meta', { name: 'author', content: 'boses' }],
    // 禁止自动翻译
    ['meta', { name: 'google', content: 'notranslate' }],
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  base: process.env.NODE_ENV === 'production' ? '/Typescript-manual/' : '/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'TypeScript手册',
      description:
        'TypeScript是JavaScript类型的超集，它可以编译成纯JavaScript。\n  TypeScript可以在任何浏览器、任何计算机和任何操作系统上运行，并且是开源的。',
    },
  },
  themeConfig: {
    // logo: '/favicon.png',
    locales: {
      '/': {
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
    // 显示阅读进度条
    'reading-progress',
    // md更好格式
    'pangu',
    copy,
    update,
    switchThemes,
  ],
  evergreen: false,
};
