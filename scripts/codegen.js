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
    export function is${type}(matcher) {
      if (typeof matcher === "undefined") {
        return node => ${checkNode(type)};
      }

      if (typeof matcher !== "object" || Array.isArray(matcher)) {
        return node => ${checkNode(type)} && match(matcher, node["${key}"]);
      }

      const m = matcher["${key}"], n = Object.keys(matcher).length;

      if (n > 1 || (n === 1 && !m)) {
        return falseFn;
      }

      return node => ${checkNode(type)} && (!m || match(m, node["${key}"]));
    }
  `;
}

function objMatcher(type, keys) {
  const decls = [];
  const matchs = [];

  keys.forEach((key, idx) => {
    const id = `m${idx}`;
    decls.push(`${id} = matchers["${key}"] || (n--, false)`);
    matchs.push(`(!${id} || match(${id}, node["${key}"]))`);
  });

  return `
    export function is${type}(matchers) {
      if (typeof matchers === "undefined") {
        return node => node && node.type === "${type}";
      }

      let n = ${keys.length}, ${decls.join(",")};

      if (Object.keys(matchers).length !== n) {
        return falseFn;
      }

      return node => ${checkNode(type)} && ${matchs.join("&&")}
    }
  `;
}

module.exports = function() {
  let code = `
    import match from "./match";

    export * from "./builtins";

    const falseFn = () => false;
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
