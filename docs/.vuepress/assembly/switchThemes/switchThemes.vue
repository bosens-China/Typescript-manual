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
import loc from './localStorage';

const key = '__mode';

export default {
  data() {
    return {
      key: 'default',
      list: {
        default: '跟随系统',
        light: '浅色模式',
        dark: '深色模式',
      },
    };
  },
  computed: {
    mode() {
      return this.list[this.key];
    },
  },
  mounted() {
    this.getThemeValue();
  },
  methods: {
    // 获取主题的初始值，思路如下，如果系统可以使用深色模式则使用系统的设置，否则使用用户配置
    getThemeValue() {
      const value = loc.get(key);
      if (!value) {
        this.key = 'default';
      } else {
        this.key = value;
      }
      if (this.key === 'default' && !window.matchMedia) {
        this.setTheme('light');
        return;
      }
      if (this.key === 'default' && window.matchMedia) {
        const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
        this.setTheme(darkMode.matches ? 'dark' : 'light');
        // 监听主题切换事件
        darkMode.addEventListener('change', (e) => {
          this.setTheme(e.matches ? 'dark' : 'light');
        });
        return;
      }
      this.setTheme();
    },
    // 切换主题
    onClick() {
      const defaultKey = () => {
        if (!window.matchMedia) {
          return 'light';
        }
        const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
        return darkMode.matches ? 'dark' : 'light';
      };
      switch (this.key) {
        case 'default':
          this.key = 'light';
          break;
        case 'light':
          this.key = 'dark';
          break;

        default:
          this.key = 'default';
          break;
      }
      this.setTheme(this.key === 'default' ? defaultKey() : this.key);
    },
    setTheme(value = this.key) {
      this.$nextTick().then(() => {
        document.documentElement.setAttribute('theme', value);
        loc.set(key, value);
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
/* 对于不支持 */
@supports (not (--a: 0)) {
  .vue-dark-mode {
    display: none;
  }
}
</style>
