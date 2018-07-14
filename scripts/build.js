"use strict";

const fs = require("fs");
const rollup = require("rollup");
const rollupConfig = require("./rollup.config");
const codegen = require("./codegen");

fs.writeFileSync("src/index.js", codegen());
rollup.rollup(rollupConfig).then(result => result.write(rollupConfig.output));
