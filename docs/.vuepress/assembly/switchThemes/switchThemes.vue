<template>
  <button
    v-if="show"
    @click="onClick"
    aria-label="切换主题"
    title="切换主题"
    class="vue-dark-mode btn-color-mode"
  >
    当前主题为: <span data-cy="color-mode">{{ mode }}</span>
  </button>
</template>

<script>
import loc from './localStorage';

const key = '__mode';

export default {
  data() {
    return {
      isLight: true,
      show: false,
    };
  },
  computed: {
    mode() {
      return this.isLight ? 'light' : 'dark';
    },
  },
  mounted() {
    this.show = this.isVariableCss();
    this.getThemeValue();
  },
  methods: {
    // 获取主题的初始值，思路如下，如果系统可以使用深色模式则使用系统的设置，否则使用用户配置
    getThemeValue() {
      if (!window.matchMedia) {
        const value = loc.get(key);
        if (!value) {
          this.isLight = document.documentElement.getAttribute('theme') === 'light';
        } else {
          this.isLight = loc.get(key) === 'light';
        }
      } else {
        const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
        if (darkMode.matches) {
          this.isLight = false;
        }
        // 监听主题切换事件
        darkMode.addEventListener('change', (e) => {
          this.isLight = e.matches;
        });
      }
      this.setTheme();
    },
    // 切换主题
    onClick() {
      this.isLight = !this.isLight;
      this.setTheme();
    },
    setTheme() {
      this.$nextTick().then(() => {
        document.documentElement.setAttribute('theme', this.mode);
        loc.set(key, this.mode);
      });
    },
    // 是否支持css变量，如果不支持隐藏视图
    isVariableCss() {
      const isSupported = window.CSS && window.CSS.supports && window.CSS.supports('--switch-themes-test', 0);
      return !!isSupported;
    },
  },
};
</script>

<style >
:root {
  --bg-secondary: #fafafa;
  --text-accent-color-button: #232b32;
  --border-color: #eaecef;
}
[theme="dark"] {
  --bg-secondary: #1c2228;
  --text-accent-color-button: #232b32;
  --border-color: #565656;
}

:root,
[theme="dark"] {
  --accent-color: #3ab982;
  --accent-color-darken: #2e9468;
}
.btn-color-mode {
  margin-top: 2.75rem;
  margin-left: 1.5rem;
}

.vue-dark-mode {
  appearance: none;
  background-color: transparent;
  color: inherit;
  border: none;
  cursor: pointer;
}
.btn-color-mode.vue-dark-mode {
  border: 2px solid #eaecef;
  border: 2px solid var(--border-color);
  background-color: #fafafa;
  background-color: var(--bg-secondary);
  border-radius: 2rem;
  padding: 10px 16px;
  font-weight: 700;
  outline: none;
}
.btn-color-mode.vue-dark-mode:focus {
  border-color: ##3ab982;
  border-color: var(--accent-color);
}
/* 对于不支持 */
</style>
