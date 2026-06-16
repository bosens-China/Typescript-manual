---
name: git-step-commit
description: Analyze Git working tree and staged changes, propose one or more coherent commit batches for user approval, infer commit message style from repository history, then run git add/git commit only for approved batches. Use when the user asks for git commit, commit changes, git 分步提交, 分批提交, staged commit cleanup, or wants current changes committed with sensible messages.
---

# Git Step Commit

使用这个技能把当前 Git 更改整理成清晰、可审查、可回滚的提交。

## 核心流程

先出计划，再提交。触发后不要立刻提交，除非用户已经明确给出“按这个计划提交”“提交第一批”等确认指令。

1. 确认当前目录位于 Git 仓库中：
   ```bash
   git rev-parse --show-toplevel
   git status --short
   ```
2. 同时检查暂存区和工作区：
   ```bash
   git diff --stat
   git diff --cached --stat
   git diff --name-status
   git diff --cached --name-status
   ```
   如果当前对话中已经明确这些变更全部由当前 agent/AI 刚刚完成，并且已经了解每个文件的修改意图，可以不重复阅读文件正文；仍需用上述状态和统计命令确认实际变更范围。
   如果变更来源不明确、包含用户已有修改、包含暂存区旧内容，或无法确定每个文件的修改意图，就继续用 `git diff -- <path>` 和 `git diff --cached -- <path>` 查看文件级 diff，必要时阅读相关文件。
3. 如果已经有暂存文件，先分析暂存内容。除非用户明确要求保留当前暂存状态，否则在规划前把暂存内容退回工作区：
   ```bash
   git restore --staged .
   ```
   这不会丢弃文件内容，只是为了后续按批次重新暂存。
   如果 `git status --short` 显示所有更改都在暂存区，也同样先退回工作区，再按计划重新分批暂存。
4. 查看最近提交信息，推断仓库的提交风格：
   ```bash
   git log -12 --pretty=format:%s
   ```
   优先匹配仓库历史里的语言、前缀、scope、大小写和语气。
5. 如果历史没有明确风格，使用简洁的 Conventional Commit：
   - `feat: ...` 用于新能力或用户可见行为
   - `fix: ...` 用于 bug 修复
   - `refactor: ...` 用于不改变行为的内部重构
   - `test: ...` 用于测试变更
   - `docs: ...` 用于文档变更
   - `chore: ...` 用于工具、CI、依赖、生成产物或仓库维护
6. 如果用户指定了提交格式、语言、前缀或消息风格，后续都按用户指定的方式执行，除非用户之后又修改要求。
7. 确认测试状态：
   - 如果本轮对话已经运行过相关测试或验证，在提交大纲中复述测试命令和结果。
   - 如果还没有运行测试，判断是否需要先运行；需要且成本合理时先运行。
   - 如果不运行测试，在提交大纲和最终回复中说明原因。

## 提交大纲

分析完成后，先向用户输出提交大纲并等待确认。大纲应包含：

```text
建议提交计划：
变更来源：本轮 agent 修改 / 用户已有修改 / 混合 / 不确定
额外阅读：已了解修改意图，未重复阅读文件 / 已阅读 diff / 已阅读相关文件
验证状态：已运行 <command> / 建议先运行 <command> / 未运行，原因：...

1. <commit message>
   - 文件：path/a, path/b
   - 目的：...
   - 备注：是否包含生成产物、测试、文档等
2. <commit message>
   - 文件：path/c
   - 目的：...

请确认：全部提交、只提交某几批，或调整批次/消息。
```

用户确认前不要运行 `git add` 或 `git commit`。用户可能会：

- 确认全部批次：按大纲顺序逐批提交。
- 只要求提交第一批或指定批次：只提交用户指定的批次，其他更改保持未提交。
- 修改批次划分：按用户修改后的批次重新暂存和提交。
- 修改提交信息：使用用户指定的消息或格式。
- 要求重新规划：重新分析当前 diff 并输出新的大纲。

## 批次划分

按“意图”分组，不要只按文件类型分组。一个好的批次通常能回答一个审查问题：

- “迁移 skill 仓库目录结构”
- “新增 git 分步提交 skill”
- “更新 CI 以适配 packages 路径”
- “刷新打包二进制”

通常一批提交即可的情况：

- 所有更改服务于同一个目的
- 这些更改应该一起审查、一起回滚
- 拆开后任一提交无法独立成立

应该拆成多批的情况：

- 不同功能或不同问题混在一起
- 行为变更、测试、文档、工具配置之间可以独立审查
- 生成产物 diff 很大，会遮挡源码变更
- 有自然顺序，例如基础设施先于功能实现

推荐顺序：

1. 共享基础设施、目录结构、构建配置
2. 具体实现或功能变更
3. 测试
4. 文档
5. 生成产物或打包二进制

如果仓库历史习惯把测试和实现放在同一提交里，就遵循历史习惯。生成产物如果是仓库正常运行所必需，通常跟产生它的源码变更放在一起；如果体积很大或历史上单独提交，则单独成批。

不要把明显无关的脏文件顺手提交。看起来无关的文件保持未暂存，并在最终回复里说明。

## 执行提交

用户确认后，按确认的批次顺序执行。

目标是少交互、少工具调用地完成“按计划分批提交”。默认使用紧凑命令链，不要为了重复确认而拆成多次工具调用。

每一批默认执行：

```bash
git add <path>... && git commit -m "<message>" && git status --short
```

如果需要在提交前保留暂存摘要，可以使用：

```bash
git add <path>... && git diff --cached --stat && git commit -m "<message>" && git status --short
```

Windows PowerShell 可使用：

```powershell
git add <path>...; if ($LASTEXITCODE -eq 0) { git commit -m "<message>" }; if ($LASTEXITCODE -eq 0) { git status --short }
```

只在以下情况拆开执行并检查暂存内容：

- 同一个文件包含多个无关 hunk，需要 `git add -p`。
- 变更来源不明确，或包含用户已有修改和 agent 修改的混合内容。
- 批次文件很多，容易误包含无关文件。
- 用户明确要求提交前展示暂存内容。
- 上一次提交失败、hook 修改了文件，或状态输出和计划不一致。

拆开执行时，使用：

1. 暂存当前批次：
   ```bash
   git add <path>...
   ```
2. 检查暂存内容：
   ```bash
   git diff --cached --stat
   git diff --cached --name-status
   ```
   如果暂存内容包含其他批次或无关文件，先修正暂存区，不要继续提交。
3. 提交：
   ```bash
   git commit -m "<message>"
   ```
4. 查看状态：
   ```bash
   git status --short
   ```

如果用户只确认部分批次，只提交这些批次。剩余批次保持工作区未提交状态，不要自动继续。

## 安全规则

- 不要使用 `git reset --hard`、`git checkout -- <path>`、`git clean` 这类会丢弃内容的命令，除非用户明确要求。
- 不要改写历史、amend、rebase 或 force push，除非用户明确要求。
- 不要提交密钥、凭据、本地缓存、编辑器文件或非预期构建产物。
- 测试相关且成本合理时，在提交前或最终提交前运行测试；如果没有运行测试，最终回复要说明。
- 如果 commit hook 修改了文件，检查新增 diff；如果属于本批次，重新暂存并重试同一提交。

## 最终回复

提交完成后，报告已创建的提交短 hash 和消息：

```text
已创建提交：
- abc1234 feat: add git step commit skill
- def5678 chore: update skill repository layout
```

同时说明：

- 是否还有未提交文件
- 是否只提交了用户指定的部分批次
- 运行了哪些测试，或为什么没有运行
