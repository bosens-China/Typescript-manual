import Vue from 'vue';
import com from './update.vue';
import { Observer } from '../utils/dom';

export default {
  updated() {
    this.updateUpdate();
  },
  methods: {
    updateUpdate() {
      if (this._updateObserverStarted) return;
      this._updateObserverStarted = true;
      const observer = new Observer('.page-edit');
      observer
        .start()
        .then(([d]) => {
          if (!d) return;
          const dom = d;
          if (document.querySelector('.last-updated')) return;
          const Root = Vue.extend(com);
          const app = new Root();
          const vm = app.$mount();

          dom.innerHTML = '';
          dom.appendChild(vm.$el);
        })
        .catch(() => {});
    },
  },
};
