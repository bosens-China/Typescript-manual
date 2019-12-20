/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';
import Open from './open.vue';

export default {
  updated() {
    this.update();
  },
  methods: {
    update() {
      setTimeout(() => {
        // 判断一下是不是在主页面，如果是主页面直接不展示
        const home = document.body.querySelector('.home');
        const toggle = document.body.querySelector('.octotree-toggle');
        if (home || toggle) {
          return;
        }
        const C = Vue.extend(Open);
        const open = new C();
        open.openText = openText;
        open.retractText = retractText;
        open.$mount();
        document.body.appendChild(open.$el);
      }, 0);
    },
  },
};
