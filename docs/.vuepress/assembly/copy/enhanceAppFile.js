import VueClipboard from 'vue-clipboard2';
import Message from 'vue-m-message';
import 'vue-m-message/dist/index.css';
import index from './copy.vue';

export default ({ Vue }) => {
  Vue.component('copy', index);
  Vue.use(VueClipboard);
  Vue.use(Message);
};
