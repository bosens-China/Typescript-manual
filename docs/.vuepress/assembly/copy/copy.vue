<template>
  <span @click="onCopy" title="复制当前代码" class="copy-code-btn">复制代码</span>
</template>

<script>
export default {
  name: 'copy',
  data() {
    return {
      parentDom: null,
    };
  },
  methods: {
    onCopy() {
      const html = this.parentDom.querySelector('pre').textContent;
      this.$copyText(html).then(() => {
        this.$message.success('复制成功');
      });
    },
  },
};
</script>

<style>
.copy-code-btn {
  position: absolute;
  z-index: 3;
  top: 5px;
  right: 1em;
  font-size: 0.75rem;
  line-height: 1;
  cursor: pointer;
  color: hsla(0, 0%, 54.9%, 0.8);
  transition: color 0.1s;
}
.copy-code-btn:hover {
  color: #8c8c8c;
}
div[class*="language-"]::before {
  right: auto;
  left: 1em;
  top: 5px;
}
</style>
