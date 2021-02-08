<template>
  <div v-if="false"></div>
</template>

<script>
import Vue from 'vue';
import copy from './copy.vue';

export default {
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.$nextTick().then(() => {
          const domAll = Array.from(document.body.querySelectorAll('div[class*="language-"]'));
          domAll.forEach((item) => {
            const Root = Vue.extend(copy);
            const app = new Root({ data: { parentDom: item } });
            const vm = app.$mount();
            item.appendChild(vm.$el);
          });
        });
      },
    },
  },

};
</script>
