<template>
  <div v-if="false"></div>
</template>

<script>
import Vue from 'vue';
import com from './update.vue';
import { Observer } from '../utils/dom';

export default {
  data() {
    return {
      observer: new Observer('.page-edit'),
    };
  },
  watch: {
    $route() {
      this.observer.clear();
      this.update();
    },
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      this.observer.start().then(([d]) => {
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
</script>
