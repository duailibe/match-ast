"use strict";

const commonjs = require("rollup-plugin-commonjs");

module.exports = {
  input: "src/index.js",
  plugins: [commonjs()],
  output: {
    file: "index.js",
    format: "cjs"
  }
};
