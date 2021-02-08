import VueClipboard from 'vue-clipboard2';
import Element from 'element-ui';
import index from './index.vue';

export default ({ Vue, isServer }) => {
  // 如果服务器环境，不做任何处理
  if (isServer) {
    return;
  }
  Vue.component('copy', index);
  Vue.use(VueClipboard);
  // Vue.use(notification);
};
