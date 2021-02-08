<template>
  <button
    @click="onClick"
    aria-label="切换主题"
    title="切换主题"
    class="vue-dark-mode btn-color-mode"
  >
    当前主题为: <span data-cy="color-mode">{{ mode }}</span>
  </button>
</template>

<script>
import { Observer } from '../utils/dom';
import loc from './localStorage';

const key = '__mode';

export default {
  data() {
    return {
      isLight: true,
      observer: new Observer('.sidebar'),
    };
  },
  watch: {
    $route() {
      this.observer.clear();
      this.update();
    },
  },

  computed: {
    mode() {
      return this.isLight ? 'light' : 'dark';
    },
  },
  mounted() {
    this.getThemeValue();
    this.update();
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
    update() {
      this.observer.start().then(([e]) => {
        const dom = e;
        const nav = document.body.querySelector('.sidebar .nav-links');
        if (!nav) {
          return;
        }
        dom.insertBefore(this.$el, nav);
      });
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
</style>
