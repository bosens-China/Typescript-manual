#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:bosens-China/Typescript-manual.git master:gh-pages
git remote add oschina git@47.102.122.237:/home/typeScript-docs/runoob.git
# 更新阿里云
git push -f oschina master

cd -
