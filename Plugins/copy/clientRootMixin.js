/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';
import CodeCopy from './copy.vue';

export default {
  updated() {
    // 等待dom加载完成之后执行
    setTimeout(() => {
      this.$copyUpdates();
    }, 0);
  },
  methods: {
    $copyUpdates() {
      // 获取所有的dom，之后在所有的代码块上插入vue的组件
      const dom = Array.from(document.querySelectorAll(selector));
      dom.forEach((e) => {
        const el = e;
        // const el = e.parentElement;
        // 判断一下，当前节点是不是已经插入了
        if (/v-copy/.test(el.className)) {
          return;
        }
        // 创建copy组件
        const C = Vue.extend(CodeCopy);
        const copy = new C();
        copy.copyText = copyText;
        copy.code = el.textContent;
        copy.$mount();
        el.className += ' v-copy';
        el.parentElement.appendChild(copy.$el);
      });
    },
  },
};
