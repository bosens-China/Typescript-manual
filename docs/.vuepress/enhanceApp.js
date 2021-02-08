export default ({ router, isServer }) => {
  router.afterEach((to) => {
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
};
