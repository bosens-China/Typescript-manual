import Vue from 'vue';
import com from './update.vue';
import { Observer } from '../utils/dom';

export default {
  updated() {
    this.updateUpdate();
  },
  methods: {
    updateUpdate() {
      const observer = new Observer('.page-edit');
      observer.start().then(([d]) => {
        const dom = d;
        const Root = Vue.extend(com);
        const app = new Root();
        const vm = app.$mount();

        dom.innerHTML = '';
        dom.appendChild(vm.$el);
      });
    },
  },
};
