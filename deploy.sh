#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 如果是发布到自定义域名
# echo 'www.stm32-mqtt.top' > CNAME
# 发布到二级域名，需要像下面这么写：
echo 'blog.stm32-mqtt.top' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://<USERNAME>.github.io
# git push -f git@github.com:jynba/jynba.github.io.git master

# 直接部署到github 触发github Actions
git push git@github.com:jynba/GRIT.git main

cd -
