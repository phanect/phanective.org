/* eslint-env node */
"use strict";

module.exports = {
  extends: "phanective/plain",
  root: true,

  env: {
    browser: true,
  },

  overrides: [{
    files: [ "*.js", "**/*.js" ],
    parserOptions: {
      sourceType: "module",
    },
  }],
};
