import VueClipboard from 'vue-clipboard2';
import Message from 'vue-m-message';
import 'vue-m-message/dist/index.css';
import index from './index.vue';

export default ({ Vue, isServer }) => {
  // 如果服务器环境，不做任何处理
  if (isServer) {
    return;
  }
  Vue.component('update', index);
  Vue.use(VueClipboard);
  Vue.use(Message);
};
