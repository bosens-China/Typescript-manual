<template>
  <div v-if="false"></div>
</template>

<script>
import Vue from 'vue';
import copy from './copy.vue';
import { Observer } from '../utils/dom';

export default {
  watch: {
    $route() {
      this.update();
    },
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      const observer = new Observer('div[class*="language-"]');
      observer.start().then((e) => {
        const domAll = e;
        domAll.forEach((item) => {
          if (item.querySelector('.copy-code-btn')) {
            return;
          }
          const Root = Vue.extend(copy);
          const app = new Root({ data: { parentDom: item } });
          const vm = app.$mount();
          item.appendChild(vm.$el);
        });
      });
    },
  },

};
</script>
