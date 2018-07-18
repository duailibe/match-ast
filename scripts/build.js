"use strict";

const fs = require("fs");
const rollup = require("rollup");
const commonjs = require("rollup-plugin-commonjs");
const codegen = require("./codegen");

fs.writeFileSync("src/generated.js", codegen());
rollup
  .rollup({
    input: "src/generated.js",
    plugins: [commonjs()]
  })
  .then(result =>
    result.write({
      file: "index.js",
      format: "cjs"
    })
  );
