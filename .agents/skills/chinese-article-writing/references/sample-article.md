# 探索现代化 i18n 方案：从工程自动化到 AI 驱动的演进

在最近参与的一个中大型前端项目中，随着业务需求的快速变化和代码的频繁重构，国际化（i18n）逐渐从“基础设施”演变成了一个明显的工程负担。

一个非常典型的场景是：**组件逻辑已经修改完成，但 `locales` 目录下的 JSON 文件却长期处于滞后状态**。新增的文案没有及时补齐，删除的页面却遗留了一堆无人使用的 Key。随着项目规模扩大，这类问题会被不断放大。

这背后其实暴露的是一个更本质的问题：**传统 i18n 的工作流，与现代前端开发节奏并不匹配**。

在深入探讨改进方案之前，我们有必要先回顾一下当前主流 i18n 方案的设计思路及其局限。

## 1. 传统基石：vue-i18n 的设计取舍

在 Vue 生态中，`vue-i18n` 几乎是事实标准。它成熟、稳定，并且覆盖了大多数国际化场景。

从实现机制上看，`vue-i18n` 的核心是 **运行时（Runtime）替换**：

- 开发者在模板或脚本中通过 `$t('key')` 访问文案
- 运行时根据当前语言环境，从预先加载的 JSON 语言包中查找并返回对应字符串
- 同时支持复数规则、日期/数字格式化等高级能力

从“框架插件”的角度来看，这样的设计并没有问题，但在真实工程实践中，它也带来了一些长期被忽视的成本。

**常见痛点包括：**

- **Key 设计成本高**  
  为每一条文案设计一个“语义清晰、层级合理、可长期维护”的 Key，本身就是一项隐性工作量。
- **代码与文案强解耦**  
  Key 分散在业务代码中，真实文案却集中在 JSON 文件里，删除或重构页面时，很容易留下大量“无效翻译”。
- **上下文缺失导致翻译质量不稳定**  
  无论是人工翻译还是机器翻译，单独面对一个 Key，很难准确理解其真实使用场景。  
  这些问题并非 `vue-i18n` 本身的缺陷，而是 **“Key 驱动”这一设计范式的天然代价**。

## 2. 自动化方向的探索：基于 AST 的 i18n 工具

为了降低 Key 维护和手工同步的成本，社区中逐渐出现了一类自动化工具，例如  
[auto-i18n-translation-plugins](https://github.com/auto-i18n/auto-i18n-translation-plugins)。

这类方案的核心思想是：**让工具理解代码，而不是让人维护映射关系**。

其典型流程如下：

1. **静态扫描**  
   基于 AST 分析源代码，提取其中的中文字符串
2. **自动替换**  
   将源码中的中文替换为生成的 Key（通常是 Hash 值）
3. **自动翻译**  
   调用 Google / 百度等翻译 API，生成多语言文案
4. **配置写入**  
   自动维护语言包文件  
   在工程效率层面，这一步已经是一次明显的跃迁：  
   **开发者几乎可以忽略 i18n 的存在，先完成业务，再由工具兜底。**

但当项目进入更复杂的业务领域后，新的问题也随之出现。

**主要瓶颈在于翻译质量：**

- 通用翻译 API 缺乏领域上下文
- 无法区分业务语义（如金融、医疗、后台系统等）
- 仍然需要大量人工校对

这类工具解决了“效率问题”，但并没有真正解决“准确性问题”。

## 3. 进一步演进：AI 驱动的 i18n 设计思路

在当前 LLM 已经高度成熟的背景下，我认为 i18n 方案的设计目标可以进一步升级：

> **以 Developer Experience 为核心，尽可能贴近自然语言，并把翻译质量交给更“理解上下文”的模型。**

### 3.1 语法层面的取舍：回归自然语言

首先，一个关键决策是：**不再强制开发者手动定义 Key**。

代码中的国际化调用，应该尽量接近自然语言本身：

```js
// 基础用法：直接使用中文
const msg = t`你好`;

// 带上下文的用法
const status = t('待审核', '金融风控业务状态');
```

这样的语法带来几个直接收益：

- 文案在代码中是可读的，而不是抽象的 Key
- Code Review 时无需在 JSON 文件和业务代码之间来回切换
- 上下文信息可以显式传递给翻译系统

### 3.2 更合理的 Key 生成策略

在生成语言包时，我们同样可以放弃不可读的 Hash Key，而采用：

> **「中文原文 + 上下文注释」作为唯一标识**

示例：

```json
{
  "待审核#金融风控业务状态": {
    "english": "Pending Review"
  }
}
```

这种设计的优势在于：

- **天然避免语义冲突** 同样是“取消”，在“订单操作”和“账户注销”场景下可以通过上下文区分
- **Key 本身即文档** 语言包文件在人工审核时非常直观
- **更适合多语言扩展** 在后续生成日文、法文、韩文等语言时，可以复用同一套 Key 体系，无需额外维护映射关系

### 3.3 虚拟模块：让翻译数据成为构建产物

为了避免手动管理中间文件，可以利用 Vite / Rollup 的 **Virtual Module（虚拟模块）** 能力。

简单来说，插件可以在构建阶段动态生成一个模块，例如：

```ts
import { t } from 'virtual:ai-i18n';
```

构建工具会拦截该导入，并返回由插件实时生成的运行时代码，其中已经包含：

- 当前语言包
- `t`、`setLang` 等辅助函数

这样一来：

- 翻译数据成为构建流程的一部分
- 不需要关心 JSON 文件的加载和同步问题
- 工程结构更加清晰

**虚拟模块的设计意义**：

1. **语言包属于构建产物，而不是源码文件**
2. **无需生成中间文件，也无需 commit**
3. **极大提升开发者体验**，让文案写作像原生语言特性一样自然

### 3.4 自动导入，进一步压缩心智负担

配合 `unplugin-auto-import`，甚至可以省略显式的 import：

```ts
t`你好`;
```

从开发体验上看，这已经接近“原生写文案”的感觉。

## 4. 插件选项：目标语言与默认语言

插件提供灵活配置：

```ts
aiI18nPlugin({
  targetLangs: ['english', 'ja', 'fr'], // 所有需要生成的目标语言
  defaultLang: 'english', // 默认翻译语言
});
```

- 如果未传 `defaultLang`，默认使用 `'english'`
- `targetLangs` 至少包含默认语言
- 后续生成语言包的结构统一为单文件 JSON

## 5. 插件输出文件：单 JSON + 可人工校准

为了最大化可维护性，输出语言包为：

```
locales/i18n.json
```

格式示例：

```json
{
  "提交#表单操作": {
    "english": "Submit",
    "ja": "",
    "fr": ""
  },
  "待审核#金融风控业务状态": {
    "english": "Pending Review"
  }
}
```

**特点：**

- **单文件管理**：避免多语言文件分散，方便查找与审核
- **只处理未翻译 Key**：插件不会覆盖已有翻译
- **支持人工校准**：你可以在 `locales/i18n.json` 中直接修改或补充翻译
- **增量更新**：每次构建只生成缺失翻译，保证历史翻译安全

## 6. 为什么这里选择 LLM，而不是传统翻译 API？

引入 LLM 并不是为了追逐概念，而是为了解决传统翻译 API 的结构性短板。

### 6.1 领域语义的理解能力

通过 Prompt Engineering，可以显式告诉模型当前的业务背景，例如：

- 金融风控系统
- SaaS 管理后台
- 电商交易流程

配合 Few-Shot 示例或术语表注入，生成的翻译在**准确性和专业度**上，明显优于通用 API。

### 6.2 成本与隐私的可控性

翻译任务本身是低复杂度任务，非常适合：

- 本地运行 4B~8B 级别模型（如 Qwen、Llama 系列）
- 通过 Ollama 等工具进行部署
- 结合 LangChain 进行批处理调用

这种方式的优势包括：

- 无网络依赖，隐私可控
- 无调用费用
- 批量翻译效率高

在企业环境中，也可以直接替换为 GPT-4、DeepSeek 等商业 API，方案本身并不受限。

## 7. 插件实现要点（Vite Plugin）

插件的核心职责可以归纳为两点：

1. **收集需要翻译的文案**
2. **在合适的时机批量调用 LLM，并持久化结果到单文件 JSON**

关键实现细节包括：

- 翻译队列与批处理机制
- 本地缓存与持久化
- 避免重复翻译已存在 Key

```ts
/**
 * vite-plugin-ai-i18n.ts
 *
 * 说明：
 * 这是一个用于解释 AI i18n 插件核心流程的伪代码示例。
 * 重点在于架构、数据流和设计思路，而非具体 API 或可运行实现。
 */

import fs from 'fs';
import path from 'path';

// -------------------------
// 虚拟模块定义
// -------------------------
const VIRTUAL_MODULE_ID = 'virtual:ai-i18n';
const RESOLVED_VIRTUAL_MODULE_ID = '\0' + VIRTUAL_MODULE_ID;

// -------------------------
// 输出文件与默认语言
// -------------------------
const LOCALES_DIR = path.resolve(process.cwd(), 'locales');
const LOCALE_FILE = path.join(LOCALES_DIR, 'i18n.json');
const DEFAULT_LANG = 'english';

// -------------------------
// 类型定义（简化）
// -------------------------
type Lang = string;
type TranslationKey = string;

interface PendingItem {
  key: TranslationKey; // 唯一标识：原文#上下文
  text: string; // 原文
  context?: string; // 可选上下文信息
}

type LangMessages = Record<Lang, string>;
type AllMessages = Record<TranslationKey, LangMessages>;

// -------------------------
// 工具函数（伪实现）
// -------------------------

/**
 * 读取已有 JSON 语言包
 * 如果文件不存在，返回空对象
 */
function loadLocales(): AllMessages {
  if (!fs.existsSync(LOCALE_FILE)) return {};
  return JSON.parse(fs.readFileSync(LOCALE_FILE, 'utf-8'));
}

/**
 * 将最终语言包写入本地 JSON
 * 自动创建目录
 */
function saveLocales(messages: AllMessages) {
  if (!fs.existsSync(LOCALES_DIR)) fs.mkdirSync(LOCALES_DIR);
  fs.writeFileSync(LOCALE_FILE, JSON.stringify(messages, null, 2));
}

/**
 * 扫描源码中所有 t(...) / t`...` 的调用
 * 实际实现应使用 AST
 */
function scanForI18nTexts(code: string): PendingItem[] {
  // 伪逻辑示意：
  // 1. 遍历代码 AST
  // 2. 找到 t`xxx` 或 t('xxx', 'context')
  // 3. 返回 PendingItem 列表
  return [];
}

// -------------------------
// 插件主逻辑
// -------------------------
export default function aiI18nPlugin(options: {
  targetLangs?: Lang[]; // 目标语言列表
  defaultLang?: Lang; // 默认语言
}) {
  const defaultLang = options.defaultLang || DEFAULT_LANG;
  const targetLangs = options.targetLangs || [defaultLang];

  // 加载已有翻译（人工可校准）
  const allMessages: AllMessages = loadLocales();

  // 待翻译队列，只收集尚未存在的 Key
  const pendingQueue: Map<string, PendingItem> = new Map();

  return {
    name: 'vite-plugin-ai-i18n',

    // -------------------------
    // 虚拟模块解析
    // -------------------------
    resolveId(id: string) {
      if (id === VIRTUAL_MODULE_ID) return RESOLVED_VIRTUAL_MODULE_ID;
    },

    // -------------------------
    // 虚拟模块加载
    // -------------------------
    load(id: string) {
      if (id === RESOLVED_VIRTUAL_MODULE_ID) {
        // 这里返回运行时代码：
        // - messages: 当前语言包
        // - t: 翻译函数
        // - setLang/getCurrentLang: 语言切换函数
        return `
          const messages = ${JSON.stringify(allMessages)};
          let currentLang = '${defaultLang}';

          export function t(text, context = '') {
            const key = context ? \`\${text}#\${context}\` : text;
            return messages[key]?.[currentLang] || text;
          }

          export function setLang(lang) { currentLang = lang; }
          export function getCurrentLang() { return currentLang; }
        `;
      }
    },

    // -------------------------
    // 源码扫描阶段
    // -------------------------
    transform(code: string, id: string) {
      // 忽略 node_modules
      if (id.includes('node_modules')) return;

      // 扫描源码，收集 t(...) / t`...` 调用
      const foundItems = scanForI18nTexts(code);

      for (const item of foundItems) {
        // key = 原文 + 可选上下文
        const key = item.context ? `${item.text}#${item.context}` : item.text;

        // 针对每个目标语言，判断是否已存在翻译
        for (const lang of targetLangs) {
          const langMessages = allMessages[key] || {};
          if (!langMessages[lang]) {
            // 尚未存在翻译，加入待翻译队列
            pendingQueue.set(`${lang}:${key}`, { ...item, key });
          }
        }
      }

      // 返回原始代码，不修改
      return code;
    },

    // -------------------------
    // 构建结束 / 批量翻译
    // -------------------------
    async buildEnd() {
      if (!pendingQueue.size) return;

      // 按语言分组
      const groupedByLang: Record<Lang, PendingItem[]> = {};
      for (const [compoundKey, item] of pendingQueue) {
        const [lang] = compoundKey.split(':');
        groupedByLang[lang] ||= [];
        groupedByLang[lang].push(item);
      }

      // 对每个目标语言调用 LLM 翻译（伪逻辑）
      for (const lang in groupedByLang) {
        const items = groupedByLang[lang];

        // === 这里可以调用 LLM API ===
        // const results = await llm.translateBatch(items)

        // 伪结果示例
        const results: { key: string; value: string }[] = [];

        // 将翻译结果写入内存缓存
        for (const { key, value } of results) {
          allMessages[key] ||= {};
          allMessages[key][lang] = value;
        }
      }

      // 持久化到单 JSON 文件，人工可校准
      saveLocales(allMessages);

      // 清空队列，避免重复翻译
      pendingQueue.clear();
    },
  };
}
```

## 8. 实际使用体验

封装后，开发侧使用方式非常简单：

```vue
<div>{{ t`你好` }}</div>
<button>{{ t('提交', '表单操作') }}</button>
```

切换语言：

```ts
setLang('english');
```

扩展新语言（如日文、法文、韩文）时，只需调整插件配置中的 `targetLangs`，**无需额外维护 Key 或复制文案文件**。

## 9. 总结

这套 i18n 方案的核心价值不在于“AI 翻译”本身，而在于：

1. **文案回归自然语言，而不是 Key**
2. **翻译与维护成本前移到工具链**
3. **通过上下文 + LLM 提升翻译质量**
4. **单 JSON 文件 + 虚拟模块 + 增量翻译降低多语言长期成本**
5. **支持人工校准，只处理未翻译 Key，安全可靠**

目前这仍是一个持续演进中的实践方案，但在复杂业务、多语言项目中，已经展现出明显的工程价值。

如果你对 i18n、工程自动化或 AI 在前端工具链中的应用有不同看法，欢迎一起交流和探讨。
