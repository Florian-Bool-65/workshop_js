#!/usr/bin/env sh
# abort on errors
set -e
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Florian-Bool-65/workshop_js.git main:gh-pages
cd - 
