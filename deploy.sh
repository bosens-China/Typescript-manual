#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run climb
npm run build

git init
git add -A
git commit -m 'type: 脚本自动上传'
git push

cd -