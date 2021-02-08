import Vue from 'vue';
import com from './switchThemes.vue';
import { Observer } from '../utils/dom';

export default {
  updated() {
    this.updateSwitchThemes();
  },
  methods: {
    updateSwitchThemes() {
      const observer = new Observer('.sidebar');
      observer.start().then(([e]) => {
        const dom = e;
        const nav = document.body.querySelector('.sidebar .sidebar-links');
        if (!nav || document.querySelector('.vue-dark-mode')) {
          return;
        }
        const Root = Vue.extend(com);
        const app = new Root();
        const vm = app.$mount();
        dom.insertBefore(vm.$el, nav);
      });
    },
  },
};
