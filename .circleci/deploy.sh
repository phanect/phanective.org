#!/bin/bash

set -eu
set -v

hash git
hash rsync
hash yarn

rm --recursive --force ./.build

mkdir --parent .build
cp --recursive ./.git ./.build/

cd .build

git fetch origin
git checkout --force gh-pages
git reset --hard origin/gh-pages

rsync --recursive --delete-after \
  --exclude=".build" \
  --exclude=".git" \
  --exclude="node_modules" \
  --exclude=".editorconfig" \
  --exclude=".nvmrc" \
  --exclude="LICENSE" \
  --exclude="README.md" \
  .. ./

yarn install
yarn build

rm --recursive --force ./node_modules/

git add --all
git commit --message="Deployment at $(date "+%F %H:%M:%S")"
git push origin gh-pages
