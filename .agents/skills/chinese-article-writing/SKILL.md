---
name: chinese-article-writing
description: Create, rewrite, polish, and proofread Chinese articles, technical blogs, documentation, and technical talks. Use when the user asks for Chinese writing help, Chinese technical article structure, tone consistency, proofreading, terminology consistency, punctuation, spacing, formatting, or fixing awkward Chinese prose.
---

# 中文文章书写助手

本技能用于指导中文文章的书写，解决“不知道如何写、只能凭感觉写”的问题。
内容分为写作语气、写作流程和写作规范。请根据任务按需读取参考文件，不要默认加载全部 references。

## 适用场景

当用户需要以下任务时，使用本技能：

- 编写中文技术文章、博客或技术分享
- 规范或润色已有中文文档
- 统一文章风格与结构
- 提高文章的专业性与可读性
- **修复文章中的语气不一致问题**
- **修正错别字、病句、用词不当**
- **统一英文大小写、术语与格式**

## 使用流程

根据用户需求，选择以下执行方式：

### 生成或重写模式

1. 明确文章类型与目标读者
2. 判断是否需要读取语气示例
3. 按任务类型读取对应写作规范
4. 生成完整文章或重写指定内容

### 修复与校对模式

1. 通读用户提供的全文或指定段落
2. 统一整体语气，避免前后风格不一致
3. 修复以下常见问题：
   - 错别字与明显病句
   - 英文与缩写的大小写不一致
   - 技术术语前后不统一
   - 口语化、模糊或不精确表达
4. 在不改变原意的前提下提升清晰度与专业度

## 参考文件选择

按任务选择参考文件，不要为了普通润色或短文本修复加载全部文件：

- 标题、层级、目录命名：读取 [标题规范](./references/title.md)
- 句子、字间距、英文处理、表达风格：读取 [文本规范](./references/text.md)
- 段落组织、引用、段落长度：读取 [段落规范](./references/paragraph.md)
- 数字、百分比、货币、范围表达：读取 [数值规范](./references/number.md)
- 标点、引号、括号、破折号、省略号：读取 [标点符号规范](./references/marks.md)
- 技术文档、手册、知识库结构：读取 [文档体系规范](./references/structure.md)
- 长文写作、技术分享、需要模仿语气时：读取 [语气示例](./references/sample-article.md)

`sample-article.md` 只用于参考表达节奏、段落组织和技术叙述语气，不要复用其中的主题、观点或具体内容。

## 中文写作规范

中文技术文档应优先保证清晰、准确、克制和一致。修改文章时，先保持原意，再优化结构和表达。

## 常见写作问题修复规范

在修复与校对模式下，请遵循以下原则：

### 语气

- 保持全文语气一致（技术理性 / 分享叙述 / 教学说明）
- 避免同一篇文章中混用口语与正式书面语
- 避免情绪化或夸张表达（除非是分享类文章）

### 错别字与病句

- 修正明显错别字
- 调整语序不通顺的句子
- 删除重复或冗余表达

### 大小写与格式

- 英文缩写统一大小写（如 API、HTTP、i18n）
- 中英文之间保留适当空格
- 数字与单位格式保持一致

### 术语一致性

- 同一概念只使用一种表述
- 首次出现时可给出全称，后续使用简称
