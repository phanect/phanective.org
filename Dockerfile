FROM node:4-slim

RUN apt-get update -qq && apt-get dist-upgrade --yes \
  && apt-get install --yes git \
  && npm install --global npm && npm install --global bower harp
