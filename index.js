"use strict";

function createMatcher(type, matchers) {
  return node =>
    node.type === type &&
    Object.keys(matchers).every(key => {
      const matcher = matchers[key];
      if (
        typeof matcher === "string" ||
        typeof matcher === "number" ||
        typeof matcher === "boolean" ||
        typeof matcher === "undefined" ||
        typeof matcher === "symbol" ||
        matcher === null
      ) {
        return Object.is(node[key], matcher);
      }

      if (typeof matcher !== "function") {
        throw Error("Matcher of type " + typeof matcher + " unsupported.");
      }
      return matcher(node[key]);
    });
}

const TYPES = {
  isCallExpression: "CallExpression",
  isMemberExpression: "MemberExpression"
};

const matchers = {
  isIdentifier(name) {
    return createMatcher("Identifier", { name });
  },
  either(...matchers) {
    return node => matchers.some(matcher => matcher(node));
  }
};

Object.keys(TYPES).forEach(fn => {
  matchers[fn] = function(matchers) {
    return createMatcher(TYPES[fn], matchers);
  };
});

module.exports = matchers;
