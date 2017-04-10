#!/bin/bash

set -eu
set -v

hash git
hash harp
hash npm

rm --recursive --force ./.build
rm --recursive --force ./npm_modules

npm install

mkdir .build
cp --recursive ./.git ./.build/

cd .build

git fetch origin
git checkout --force gh-pages
git reset --hard origin/gh-pages

harp compile ../ ./

git add --all
git commit --message="Deployment at $(date "+%F %H:%M:%S")"
git push origin gh-pages
