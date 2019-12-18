<template>
  <span
    class="copy-code-btn"
    @click="copyClick"
  >{{copyText}}</span>
</template>

<script>
export default {
  props: {
    copyText: {
      type: String,
      default: '复制代码'
    }
  },
  methods: {
    copyClick() {
      // 添加属性
      const dom = this._parent;
      dom.style.cssText = `-webkit-transition: background-color .3s;
  -o-transition: background-color .3s;
  -moz-transition: background-color .3s;
  transition: background-color .3s;
  `.trim();
      setTimeout(() => {
        dom.style.cssText += `background-color: #666`
      }, 0);
      setTimeout(() => {
        dom.style.cssText = ``
      }, 300);

      // '#0075b8'
    }
  }
}
</script>

<style>
div[class][class*="language-"]::before {
  right: 70px;
}
.copy-code-btn {
  cursor: pointer;
  color: hsla(0, 0%, 54.9%, 0.8);
  transition: color 0.1s;
  position: absolute;
  z-index: 3;
  top: 0.8em;
  right: 15px;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
}
.copy-code-btn:hover {
  color: #8c8c8c;
}
</style>