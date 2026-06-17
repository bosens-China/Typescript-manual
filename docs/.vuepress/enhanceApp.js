export default ({ router, isServer }) => {
  router.afterEach((to) => {
    // 服务器渲染直接返回
    if (isServer) {
      return;
    }
    // 为非首页路由打标，配合 styles/index.styl 中的 #subpage 媒体查询
    const dom = document.body;
    if (to.path === '/') {
      dom.id = '';
    } else {
      dom.id = 'subpage';
    }
  });
};
