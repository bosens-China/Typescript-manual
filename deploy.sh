#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# 时间
current=`date "+%Y-%m-%d %H:%M:%S"`
# 生成静态文件
npm run build

git init
git add -A
git commit -m "type: build time: ${current} content: sh脚本自动上传"
git push
