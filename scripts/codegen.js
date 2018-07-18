"use strict";

const typeKeys = require("@babel/types").BUILDER_KEYS;
const prettier = require("prettier");

function checkNode(type) {
  return `node && node.type === "${type}"`;
}

let uid = 0;
function noMatcher(type) {
  const f = `f${uid++}`;
  return `
    var ${f};
    export function is${type}() {
      return ${f} || (${f} = node => ${checkNode(type)});
    }
  `;
}

function singleMatcher(type, key) {
  return `
    export function is${type}(matchers) {
      if (typeof matchers === "undefined") {
        return node => ${checkNode(type)};
      }

      const m = typeof matchers === "object" && !Array.isArray(matchers)
        ? matchers["${key}"]
        : matchers;

      return node => ${checkNode(type)} && match(m, node["${key}"]);
    }
  `;
}

function objMatcher(type, keys) {
  const decls = [];
  const matchs = [];

  keys.forEach((key, idx) => {
    const id = `m${idx}`;
    decls.push(`${id} = matchers["${key}"]`);
    matchs.push(`(!${id} || match(${id}, node["${key}"]))`);
  });

  return `
    export function is${type}(matchers) {
      if (typeof matchers === "undefined") {
        return node => node && node.type === "${type}";
      }

      const ${decls.join(",")};

      return node => ${checkNode(type)} && ${matchs.join("&&")}
    }
  `;
}

module.exports = function() {
  let code = `
    import match from "./match";

    export * from "./builtins";
  `;

  for (const type of Object.keys(typeKeys)) {
    const keys = typeKeys[type];
    code +=
      keys.length === 0
        ? noMatcher(type)
        : keys.length === 1
          ? singleMatcher(type, keys[0])
          : objMatcher(type, keys);
  }

  return prettier.format(code, { parser: "babylon" });
};
