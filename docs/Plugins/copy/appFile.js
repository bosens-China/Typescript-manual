import message from './message.vue';

export default ({ Vue: V }) => {
  const Vue = V;
  Vue.prototype.$message = function $message(mess = {}) {
    // 判断一下祖节点存不存在
    let el = document.querySelector('.alert-list');
    if (!el) {
      el = document.createElement('div');
      el.className = 'alert-list';
      document.body.appendChild(el);
    }
    const M = Vue.extend(message);
    const mes = new M();
    Object.assign(mes, mess);
    mes.$mount();
    el.appendChild(mes.$el);
  };
};
