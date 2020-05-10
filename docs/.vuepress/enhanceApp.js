/* eslint-disable no-unused-vars */
import dayjs from 'dayjs';
import 'mutationobserver-shim';
// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  router.afterEach((to, from) => {
    // 服务器渲染直接返回
    if (isServer) {
      return;
    }
    // 为app添加id
    const dom = document.body;
    if (to.path === '/') {
      dom.id = '';
    } else {
      dom.id = 'home';
    }
  });
  if (!isServer) {
    // 添加最后修改时间
    const observer = new MutationObserver(((mutations) => {
      // 修改的元素不能是.page-edit，否则会造成无限循环
      const existence = mutations.some((dom) => /page-edit/.test(dom.target.className));
      if (existence) {
        return;
      }
      const edit = document.body.querySelector('.page-edit');
      if (edit) {
        edit.innerHTML = `<div class="last-updated"><span class="prefix">上次更新:</span> <span class="time">${dayjs(document.lastModified).format(
          'YYYY-MM-DD HH:mm:ss',
        )}</span></div>`;
      }
    }));
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
};
