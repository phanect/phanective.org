/* eslint-env node */
"use strict";

module.exports = {
  extends: "plugin:@phanect/plain",
  root: true,

  env: {
    browser: true,
  },
  plugins: [ "@phanect" ],

  overrides: [{
    files: [ "*.js", "**/*.js" ],
    parserOptions: {
      sourceType: "module",
    },
  }],
};
