<template>
  <span>
    <span
      ref="btn"
      class="v-copy-code-btn"
      @click="copyClick"
    >{{copyText}}</span>
  </span>
</template>

<script>
import clipboard from "./clipboard";
export default {
  props: {
    copyText: String,
    code: String
  },
  methods: {
    copyClick() {
      const call = e => {
        if (typeof change === "function") {
          change.call(this, e, this.$el);
        }
      };
      if (visibleTip) {
        this.$message({
          time,
          content,
          title
        });
      }

      clipboard(this.code)
        .then(e => call)
        .catch(call);
    }
  }
};
</script>

<style>
div[class][class*="language-"]::before {
  right: 70px;
}
</style>


<style scoped>
.v-copy-code-btn {
  cursor: pointer;
  color: hsla(0, 0%, 54.9%, 0.8);
  transition: color 0.1s;
  position: absolute;
  z-index: 3;
  top: 0.8em;
  right: 15px;
  font-size: 0.75rem;
}

.v-copy-code-btn:hover {
  color: #8c8c8c;
}
</style>