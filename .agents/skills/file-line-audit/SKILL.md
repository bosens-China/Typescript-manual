---
name: file-line-audit
description: Audit oversized source files in a repository. Apply repository .gitignore rules plus extra exclude patterns, filter candidate files with include glob patterns, count physical lines, and output only files at or above the threshold. Use this skill when the user asks to find long files, review file-length distribution, identify split/refactor candidates, or analyze technical debt.
license: MIT
compatibility: Requires a bundled binary from scripts/ matching the host OS and CPU architecture. Current packaged targets are Windows amd64, Linux amd64, Linux arm64, macOS amd64, and macOS arm64.
allowed-tools: run_shell_command
metadata:
  author: github.com/bosens-China
  version: '0.3.0'
---

# File Line Audit

使用这个技能审计仓库中的超长源码文件，只返回达到或超过指定行数阈值的文件。

使用时：

- 从 `scripts/` 目录选择匹配当前操作系统和 CPU 架构的打包二进制。
- 始终在目标仓库根目录运行，这样 `.gitignore` 才能正确生效。
- 先查看仓库结构和语言栈，再决定扫描范围。
- 通过命令行显式传入扫描参数；没有默认配置文件。
- 先应用仓库 `.gitignore`，再应用额外的 `exclude` 规则。
- 使用一个或多个 `include` glob 限定扫描范围。
- 只输出物理行数大于等于阈值的文件。

## 安装

```bash
npx skills add bosens-China/my-skills/skills/file-line-audit
```

## 二进制选择

从 `scripts/` 下选择对应平台的可执行文件：

- Windows amd64: `scripts/line-audit-windows-amd64.exe`
- Linux amd64: `scripts/line-audit-linux-amd64`
- Linux arm64: `scripts/line-audit-linux-arm64`
- macOS amd64: `scripts/line-audit-darwin-amd64`
- macOS arm64: `scripts/line-audit-darwin-arm64`

## 步骤

1. 确认当前位于目标仓库根目录。
2. 检查仓库结构，决定扫描哪些内容：
   - 识别源码目录，例如 `src`、`app`、`apps`、`pkg`、`packages`、`lib`、`internal`、`cmd`、`backend`、`frontend`、`client`、`server`、`service`、`services`、`api`、`web`。
   - 识别相关源码扩展名，例如 `js`、`ts`、`tsx`、`vue`、`py`、`go`、`rs`、`java`、`kt`、`rb`、`php`、`cs`、`swift`。
   - 仅在 `.gitignore` 不足时添加额外 `exclude`，例如 `dist/`、`build/`、`coverage/` 或生成目录。
3. 根据当前平台选择正确的 `scripts/line-audit-*` 二进制。
4. Linux/macOS 下确保二进制可执行：
   ```bash
   chmod +x <binary_path>
   ```
5. 使用显式 `--include`、可选 `--exclude` 和可选 `--threshold` 运行。
6. 向用户返回超阈值文件列表。

## 命令

以下示例中，`<skill_root>` 是当前 skill 目录的绝对路径。

### 使用 include 参数运行

Unix-like 系统：

```bash
chmod +x <skill_root>/scripts/line-audit-<target>
<skill_root>/scripts/line-audit-<target> \
  --threshold 400 \
  --include "src/**/*.{ts,tsx,js,jsx,vue}" \
  --include "apps/**/*.{ts,tsx,js,jsx,vue}" \
  --exclude "dist/" \
  --exclude "build/"
```

Windows：

```powershell
& <skill_root>\scripts\line-audit-windows-amd64.exe `
  --threshold 400 `
  --include "src/**/*.{ts,tsx,js,jsx,vue}" `
  --include "apps/**/*.{ts,tsx,js,jsx,vue}" `
  --exclude "dist/" `
  --exclude "build/"
```

### 使用 JSON 参数运行

如果完整参数对象更方便，使用 `--json`：

```bash
<skill_root>/scripts/line-audit-<target> --json '{
  "threshold": 400,
  "include": [
    "src/**/*.{ts,tsx,js,jsx,vue}",
    "apps/**/*.{ts,tsx,js,jsx,vue}"
  ],
  "exclude": [
    "dist/",
    "build/"
  ]
}'
```

## 参数

- `--include` / `-i`：必填 glob 模式；可以重复传入多个源码根或扩展名范围。
- `--exclude` / `-e`：可选额外忽略规则，语法与 `.gitignore` 一致；可以重复传入。
- `--threshold` / `-t`：输出阈值，默认 `400`。
- `--json` / `-j`：可选 JSON 对象，包含 `threshold`、`include`、`exclude`。
- `--help` / `-h`：显示 CLI 帮助。

## 输出格式

直接返回工具输出。预期格式：

```text
# File Line Audit

## Files Over Threshold (>= 400 lines)

- src/example.ts 512
- apps/web/pages/home.tsx 438
```

## 限制

- 只统计物理行数：不会区分代码、注释或空行。
- 自动跳过二进制文件。
- 依赖 Git 环境解析 `.gitignore`。
- 面向源码扫描优化；避免扫描未被 `.gitignore` 覆盖的大型数据目录或构建产物。

## 说明

- 仓库 `.gitignore` 始终生效，即使没有传入额外 `exclude`。
- 支持嵌套 `.gitignore`。
- 每次运行至少需要一个 `--include` 模式。
