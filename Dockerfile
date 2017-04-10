FROM node:4-slim

RUN apt-get update -qq && apt-get dist-upgrade --yes \
  && curl --silent --show-error https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
  && apt-get update -qq \
  && apt-get install --yes git yarn \
  && npm install --global npm && npm install --global harp
