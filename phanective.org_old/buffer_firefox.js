"use strict";

var data = {
  "name": "Buffer",
  "iconURL": "https://raw.githubusercontent.com/bufferapp/buffer-extension-shared/master/img/buffer-icon.png",
  "icon32URL": "https://raw.githubusercontent.com/bufferapp/buffer-extension-shared/master/img/buffer-icon.png",
  "icon64URL": "https://raw.githubusercontent.com/bufferapp/buffer-extension-shared/master/img/buffer-icon.png",

  "shareURL": "https://buffer.com/add?url=%{url}&text=%{title}",

  "description": "Social media management for marketers and agencies",
  "author": "Jumpei Ogawa",
  "homepageURL": "https://buffer.com/",
  "version": "1.0"
}

function activate(node) {
  var event = new CustomEvent("ActivateSocialFeature");
  node.setAttribute("data-service", JSON.stringify(data));
  node.dispatchEvent(event);
}

function forceHttps() {
  if (window.location.protocol != "https:") {
    window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
  }
}

forceHttps();
