FROM circleci/buildpack-deps

RUN sudo apt-get update -qq && sudo apt-get dist-upgrade --yes \
  && sudo apt-get install --yes apt-transport-https \
  && curl --silent --show-error --location https://deb.nodesource.com/setup_8.x | sudo -E bash - \
  && curl --silent --show-error --location https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list \
  && sudo apt-get update -qq && sudo apt-get install --yes git nodejs python yarn \
  && sudo npm install --global npm \
  && sudo apt-get clean
