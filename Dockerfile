FROM nodesource/xenial

RUN apt-get update -qq && apt-get dist-upgrade --yes \
  && apt-get install --yes apt-transport-https \
  && curl --silent --show-error --location https://deb.nodesource.com/setup_8.x | sudo -E bash - \
  && curl --silent --show-error --location https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
  && apt-get update -qq && apt-get install --yes git nodejs python yarn \
  && npm install --global npm \
  && apt-get clean
