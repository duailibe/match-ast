"use strict";

const typeKeys = require("@babel/types").BUILDER_KEYS;
const prettier = require("prettier");

function makeHelper(type) {
  const keys = typeKeys[type];

  if (keys.length === 0) {
    return `
      function __is${type}(node) {
        return node && node.type === "${type}";
      }
      export function is${type}() {
        return __is${type};
      }
    `;
  }

  const wrap = body => `
    export function is${type}(matchers) {
      if (typeof matchers === "undefined") {
        return node => node && node.type === "${type}";
      }

      ${body}
    }
  `;

  if (keys.length === 1) {
    const key = keys[0];
    return wrap(`
      const matcher = typeof matchers === "object" && !Array.isArray(matchers)
        ? matchers["${key}"]
        : matchers;
      return node => node && node.type === "${type}" && match(matcher, node["${key}"]);
    `);
  }

  const decls = [];
  const matchs = [];

  keys.forEach((key, idx) => {
    const id = `_m${idx}_`;
    decls.push(`const ${id} = matchers["${key}"];`);
    matchs.push(`(!${id} || match(${id}, node["${key}"]))`);
  });

  return wrap(`
    ${decls.join("\n")}

    return node => node && node.type === "${type}" && ${matchs.join("&&")};
  `);
}

module.exports = function() {
  let code = `
    import match from "./match";

    export * from "./builtins";
  `;

  const names = [];
  for (const type of Object.keys(typeKeys)) {
    names.push(`is${type}`);
    code += makeHelper(type);
  }

  return prettier.format(code, { parser: "babylon" });
};
