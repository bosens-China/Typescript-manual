<template>
  <div
    v-if="show"
    class="octotree-toggle"
    @click="openClick"
  >

    <svg
      class="icon octotree-toggle-icon"
      aria-hidden="true"
    >
      <use :xlink:href="!open ? '#iconarrow-lift' : '#iconarrow-right'"></use>
    </svg>
    <span
      class="text"
      v-text="open ? openText:retractText"
    ></span>

  </div>
</template>

<script>

import throttle from 'lodash.throttle'
import './style.styl';

export default {
  props: {
    openText: String,
    retractText: String,
  },
  data() {
    return {
      open: true,
      show: false,
      sidebar: null,
    }
  },
  watch: {
    open: {
      handler(v) {
        const sidebar = this.getSidebar();
        sidebar.classList.add('hide');
        sidebar.classList.toggle('show', !v);
        const main = document.body.querySelector('.page');
        main.classList.toggle('p-0', v);
      },
      immediate: true
    },
    show(v) {
      document.documentElement.classList.toggle('v-open', v);
    }
  },
  beforeCreate() {
    import('classlist-polyfill');
    import('./img.js');
  },
  mounted() {
    this.hendel();
    // 添加一下节流
    window.addEventListener('resize', throttle(this.hendel, 100));
  },
  methods: {
    openClick() {
      this.open = !this.open;
    },
    // 处理数据变化
    hendel() {
      const home = document.body.querySelector('.sidebar-button');
      this.show = !this.isElementSo(home);
      const sidebar = this.getSidebar();
      const box = sidebar.getBoundingClientRect();
      // 如果x大于0说明在可视区域内
      this.open = !(box.x >= 0);
    },
    // 缓存一下dom
    getSidebar() {
      if (!this.sidebar) {
        this.sidebar = document.body.querySelector('.sidebar');
      }
      return this.sidebar;
    },
    isElementSo(el) {
      if (!el || typeof el !== 'object') {
        return false;
      }
      const sty = window.getComputedStyle(el);
      return sty.display !== 'none';
    }
  },



}
</script>

<style scoped>
.octotree-toggle {
  user-select: none;
  background-color: rgb(242, 245, 247);
  box-shadow: rgba(118, 118, 118, 0.11) 2px 0px 5px 0px;
  opacity: 1;
  line-height: 1;
  position: fixed;
  left: 0;
  text-align: center;
  top: 33%;
  z-index: 100;
  cursor: pointer;
  border-radius: 0px 4px 4px 0px;
  border-width: 1px 1px 1px;
  border-style: solid solid solid none;
  border-color: rgb(224, 228, 231) rgb(224, 228, 231) rgb(224, 228, 231);
  border-image: initial;
  border-left: none;
  padding: 20px 6px 35px;
  transition: right 0.25s ease-in 0.2s, opacity 0.35s ease-in 0.2s;
}
.text {
  color: rgb(15, 46, 71);
  display: inline-block;
  font-size: 12px;
  left: -1px;
  line-height: 14px;
  position: relative;
  top: 10px;
  writing-mode: tb-rl;
}
.octotree-toggle-icon {
  color: rgb(15, 46, 71);
  font-size: 15px;
  font-weight: 400;
  display: block;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>