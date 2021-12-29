/*! THIS FILE WAS AUTO-GENERATED, TO UPDATE IT, RUN `npm run gen` !*/
import match from "./match";

export * from "./builtins";

export function isArrayExpression(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ArrayExpression";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "ArrayExpression" &&
      match(matcher, node["elements"]);
  }

  const m = matcher["elements"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ArrayExpression" &&
    (!m || match(m, node["elements"]));
}

export function isAssignmentExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "AssignmentExpression";
  }

  let n = 3,
    m0 = matchers["operator"] || (n--, false),
    m1 = matchers["left"] || (n--, false),
    m2 = matchers["right"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "AssignmentExpression" &&
    (!m0 || match(m0, node["operator"])) &&
    (!m1 || match(m1, node["left"])) &&
    (!m2 || match(m2, node["right"]));
}

export function isBinaryExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "BinaryExpression";
  }

  let n = 3,
    m0 = matchers["operator"] || (n--, false),
    m1 = matchers["left"] || (n--, false),
    m2 = matchers["right"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "BinaryExpression" &&
    (!m0 || match(m0, node["operator"])) &&
    (!m1 || match(m1, node["left"])) &&
    (!m2 || match(m2, node["right"]));
}

export function isInterpreterDirective(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "InterpreterDirective";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "InterpreterDirective" &&
      match(matcher, node["value"]);
  }

  const m = matcher["value"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "InterpreterDirective" &&
    (!m || match(m, node["value"]));
}

export function isDirective(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "Directive";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "Directive" && match(matcher, node["value"]);
  }

  const m = matcher["value"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "Directive" && (!m || match(m, node["value"]));
}

export function isDirectiveLiteral(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "DirectiveLiteral";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "DirectiveLiteral" && match(matcher, node["value"]);
  }

  const m = matcher["value"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "DirectiveLiteral" && (!m || match(m, node["value"]));
}

export function isBlockStatement(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "BlockStatement";
  }

  let n = 2,
    m0 = matchers["body"] || (n--, false),
    m1 = matchers["directives"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "BlockStatement" &&
    (!m0 || match(m0, node["body"])) &&
    (!m1 || match(m1, node["directives"]));
}

export function isBreakStatement(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "BreakStatement";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "BreakStatement" && match(matcher, node["label"]);
  }

  const m = matcher["label"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "BreakStatement" && (!m || match(m, node["label"]));
}

export function isCallExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "CallExpression";
  }

  let n = 2,
    m0 = matchers["callee"] || (n--, false),
    m1 = matchers["arguments"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "CallExpression" &&
    (!m0 || match(m0, node["callee"])) &&
    (!m1 || match(m1, node["arguments"]));
}

export function isCatchClause(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "CatchClause";
  }

  let n = 2,
    m0 = matchers["param"] || (n--, false),
    m1 = matchers["body"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "CatchClause" &&
    (!m0 || match(m0, node["param"])) &&
    (!m1 || match(m1, node["body"]));
}

export function isConditionalExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ConditionalExpression";
  }

  let n = 3,
    m0 = matchers["test"] || (n--, false),
    m1 = matchers["consequent"] || (n--, false),
    m2 = matchers["alternate"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ConditionalExpression" &&
    (!m0 || match(m0, node["test"])) &&
    (!m1 || match(m1, node["consequent"])) &&
    (!m2 || match(m2, node["alternate"]));
}

export function isContinueStatement(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ContinueStatement";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "ContinueStatement" &&
      match(matcher, node["label"]);
  }

  const m = matcher["label"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ContinueStatement" &&
    (!m || match(m, node["label"]));
}

export function isDebuggerStatement() {
  return (node) => node && node.type === "DebuggerStatement";
}

export function isDoWhileStatement(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "DoWhileStatement";
  }

  let n = 2,
    m0 = matchers["test"] || (n--, false),
    m1 = matchers["body"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "DoWhileStatement" &&
    (!m0 || match(m0, node["test"])) &&
    (!m1 || match(m1, node["body"]));
}

export function isEmptyStatement() {
  return (node) => node && node.type === "EmptyStatement";
}

export function isExpressionStatement(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ExpressionStatement";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "ExpressionStatement" &&
      match(matcher, node["expression"]);
  }

  const m = matcher["expression"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ExpressionStatement" &&
    (!m || match(m, node["expression"]));
}

export function isFile(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "File";
  }

  let n = 3,
    m0 = matchers["program"] || (n--, false),
    m1 = matchers["comments"] || (n--, false),
    m2 = matchers["tokens"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "File" &&
    (!m0 || match(m0, node["program"])) &&
    (!m1 || match(m1, node["comments"])) &&
    (!m2 || match(m2, node["tokens"]));
}

export function isForInStatement(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ForInStatement";
  }

  let n = 3,
    m0 = matchers["left"] || (n--, false),
    m1 = matchers["right"] || (n--, false),
    m2 = matchers["body"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ForInStatement" &&
    (!m0 || match(m0, node["left"])) &&
    (!m1 || match(m1, node["right"])) &&
    (!m2 || match(m2, node["body"]));
}

export function isForStatement(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ForStatement";
  }

  let n = 4,
    m0 = matchers["init"] || (n--, false),
    m1 = matchers["test"] || (n--, false),
    m2 = matchers["update"] || (n--, false),
    m3 = matchers["body"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ForStatement" &&
    (!m0 || match(m0, node["init"])) &&
    (!m1 || match(m1, node["test"])) &&
    (!m2 || match(m2, node["update"])) &&
    (!m3 || match(m3, node["body"]));
}

export function isFunctionDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "FunctionDeclaration";
  }

  let n = 5,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["params"] || (n--, false),
    m2 = matchers["body"] || (n--, false),
    m3 = matchers["generator"] || (n--, false),
    m4 = matchers["async"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "FunctionDeclaration" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["params"])) &&
    (!m2 || match(m2, node["body"])) &&
    (!m3 || match(m3, node["generator"])) &&
    (!m4 || match(m4, node["async"]));
}

export function isFunctionExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "FunctionExpression";
  }

  let n = 5,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["params"] || (n--, false),
    m2 = matchers["body"] || (n--, false),
    m3 = matchers["generator"] || (n--, false),
    m4 = matchers["async"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "FunctionExpression" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["params"])) &&
    (!m2 || match(m2, node["body"])) &&
    (!m3 || match(m3, node["generator"])) &&
    (!m4 || match(m4, node["async"]));
}

export function isIdentifier(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "Identifier";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "Identifier" && match(matcher, node["name"]);
  }

  const m = matcher["name"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "Identifier" && (!m || match(m, node["name"]));
}

export function isIfStatement(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "IfStatement";
  }

  let n = 3,
    m0 = matchers["test"] || (n--, false),
    m1 = matchers["consequent"] || (n--, false),
    m2 = matchers["alternate"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "IfStatement" &&
    (!m0 || match(m0, node["test"])) &&
    (!m1 || match(m1, node["consequent"])) &&
    (!m2 || match(m2, node["alternate"]));
}

export function isLabeledStatement(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "LabeledStatement";
  }

  let n = 2,
    m0 = matchers["label"] || (n--, false),
    m1 = matchers["body"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "LabeledStatement" &&
    (!m0 || match(m0, node["label"])) &&
    (!m1 || match(m1, node["body"]));
}

export function isStringLiteral(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "StringLiteral";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "StringLiteral" && match(matcher, node["value"]);
  }

  const m = matcher["value"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "StringLiteral" && (!m || match(m, node["value"]));
}

export function isNumericLiteral(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "NumericLiteral";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "NumericLiteral" && match(matcher, node["value"]);
  }

  const m = matcher["value"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "NumericLiteral" && (!m || match(m, node["value"]));
}

export function isNullLiteral() {
  return (node) => node && node.type === "NullLiteral";
}

export function isBooleanLiteral(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "BooleanLiteral";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "BooleanLiteral" && match(matcher, node["value"]);
  }

  const m = matcher["value"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "BooleanLiteral" && (!m || match(m, node["value"]));
}

export function isRegExpLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "RegExpLiteral";
  }

  let n = 2,
    m0 = matchers["pattern"] || (n--, false),
    m1 = matchers["flags"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "RegExpLiteral" &&
    (!m0 || match(m0, node["pattern"])) &&
    (!m1 || match(m1, node["flags"]));
}

export function isLogicalExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "LogicalExpression";
  }

  let n = 3,
    m0 = matchers["operator"] || (n--, false),
    m1 = matchers["left"] || (n--, false),
    m2 = matchers["right"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "LogicalExpression" &&
    (!m0 || match(m0, node["operator"])) &&
    (!m1 || match(m1, node["left"])) &&
    (!m2 || match(m2, node["right"]));
}

export function isMemberExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "MemberExpression";
  }

  let n = 4,
    m0 = matchers["object"] || (n--, false),
    m1 = matchers["property"] || (n--, false),
    m2 = matchers["computed"] || (n--, false),
    m3 = matchers["optional"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "MemberExpression" &&
    (!m0 || match(m0, node["object"])) &&
    (!m1 || match(m1, node["property"])) &&
    (!m2 || match(m2, node["computed"])) &&
    (!m3 || match(m3, node["optional"]));
}

export function isNewExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "NewExpression";
  }

  let n = 2,
    m0 = matchers["callee"] || (n--, false),
    m1 = matchers["arguments"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "NewExpression" &&
    (!m0 || match(m0, node["callee"])) &&
    (!m1 || match(m1, node["arguments"]));
}

export function isProgram(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "Program";
  }

  let n = 4,
    m0 = matchers["body"] || (n--, false),
    m1 = matchers["directives"] || (n--, false),
    m2 = matchers["sourceType"] || (n--, false),
    m3 = matchers["interpreter"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "Program" &&
    (!m0 || match(m0, node["body"])) &&
    (!m1 || match(m1, node["directives"])) &&
    (!m2 || match(m2, node["sourceType"])) &&
    (!m3 || match(m3, node["interpreter"]));
}

export function isObjectExpression(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ObjectExpression";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "ObjectExpression" &&
      match(matcher, node["properties"]);
  }

  const m = matcher["properties"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ObjectExpression" &&
    (!m || match(m, node["properties"]));
}

export function isObjectMethod(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ObjectMethod";
  }

  let n = 5,
    m0 = matchers["kind"] || (n--, false),
    m1 = matchers["key"] || (n--, false),
    m2 = matchers["params"] || (n--, false),
    m3 = matchers["body"] || (n--, false),
    m4 = matchers["computed"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ObjectMethod" &&
    (!m0 || match(m0, node["kind"])) &&
    (!m1 || match(m1, node["key"])) &&
    (!m2 || match(m2, node["params"])) &&
    (!m3 || match(m3, node["body"])) &&
    (!m4 || match(m4, node["computed"]));
}

export function isObjectProperty(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ObjectProperty";
  }

  let n = 5,
    m0 = matchers["key"] || (n--, false),
    m1 = matchers["value"] || (n--, false),
    m2 = matchers["computed"] || (n--, false),
    m3 = matchers["shorthand"] || (n--, false),
    m4 = matchers["decorators"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ObjectProperty" &&
    (!m0 || match(m0, node["key"])) &&
    (!m1 || match(m1, node["value"])) &&
    (!m2 || match(m2, node["computed"])) &&
    (!m3 || match(m3, node["shorthand"])) &&
    (!m4 || match(m4, node["decorators"]));
}

export function isRestElement(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "RestElement";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "RestElement" && match(matcher, node["argument"]);
  }

  const m = matcher["argument"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "RestElement" && (!m || match(m, node["argument"]));
}

export function isReturnStatement(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ReturnStatement";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "ReturnStatement" &&
      match(matcher, node["argument"]);
  }

  const m = matcher["argument"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ReturnStatement" &&
    (!m || match(m, node["argument"]));
}

export function isSequenceExpression(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "SequenceExpression";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "SequenceExpression" &&
      match(matcher, node["expressions"]);
  }

  const m = matcher["expressions"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "SequenceExpression" &&
    (!m || match(m, node["expressions"]));
}

export function isParenthesizedExpression(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ParenthesizedExpression";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "ParenthesizedExpression" &&
      match(matcher, node["expression"]);
  }

  const m = matcher["expression"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ParenthesizedExpression" &&
    (!m || match(m, node["expression"]));
}

export function isSwitchCase(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "SwitchCase";
  }

  let n = 2,
    m0 = matchers["test"] || (n--, false),
    m1 = matchers["consequent"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "SwitchCase" &&
    (!m0 || match(m0, node["test"])) &&
    (!m1 || match(m1, node["consequent"]));
}

export function isSwitchStatement(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "SwitchStatement";
  }

  let n = 2,
    m0 = matchers["discriminant"] || (n--, false),
    m1 = matchers["cases"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "SwitchStatement" &&
    (!m0 || match(m0, node["discriminant"])) &&
    (!m1 || match(m1, node["cases"]));
}

export function isThisExpression() {
  return (node) => node && node.type === "ThisExpression";
}

export function isThrowStatement(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ThrowStatement";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "ThrowStatement" &&
      match(matcher, node["argument"]);
  }

  const m = matcher["argument"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ThrowStatement" &&
    (!m || match(m, node["argument"]));
}

export function isTryStatement(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TryStatement";
  }

  let n = 3,
    m0 = matchers["block"] || (n--, false),
    m1 = matchers["handler"] || (n--, false),
    m2 = matchers["finalizer"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TryStatement" &&
    (!m0 || match(m0, node["block"])) &&
    (!m1 || match(m1, node["handler"])) &&
    (!m2 || match(m2, node["finalizer"]));
}

export function isUnaryExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "UnaryExpression";
  }

  let n = 3,
    m0 = matchers["operator"] || (n--, false),
    m1 = matchers["argument"] || (n--, false),
    m2 = matchers["prefix"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "UnaryExpression" &&
    (!m0 || match(m0, node["operator"])) &&
    (!m1 || match(m1, node["argument"])) &&
    (!m2 || match(m2, node["prefix"]));
}

export function isUpdateExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "UpdateExpression";
  }

  let n = 3,
    m0 = matchers["operator"] || (n--, false),
    m1 = matchers["argument"] || (n--, false),
    m2 = matchers["prefix"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "UpdateExpression" &&
    (!m0 || match(m0, node["operator"])) &&
    (!m1 || match(m1, node["argument"])) &&
    (!m2 || match(m2, node["prefix"]));
}

export function isVariableDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "VariableDeclaration";
  }

  let n = 2,
    m0 = matchers["kind"] || (n--, false),
    m1 = matchers["declarations"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "VariableDeclaration" &&
    (!m0 || match(m0, node["kind"])) &&
    (!m1 || match(m1, node["declarations"]));
}

export function isVariableDeclarator(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "VariableDeclarator";
  }

  let n = 2,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["init"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "VariableDeclarator" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["init"]));
}

export function isWhileStatement(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "WhileStatement";
  }

  let n = 2,
    m0 = matchers["test"] || (n--, false),
    m1 = matchers["body"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "WhileStatement" &&
    (!m0 || match(m0, node["test"])) &&
    (!m1 || match(m1, node["body"]));
}

export function isWithStatement(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "WithStatement";
  }

  let n = 2,
    m0 = matchers["object"] || (n--, false),
    m1 = matchers["body"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "WithStatement" &&
    (!m0 || match(m0, node["object"])) &&
    (!m1 || match(m1, node["body"]));
}

export function isAssignmentPattern(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "AssignmentPattern";
  }

  let n = 2,
    m0 = matchers["left"] || (n--, false),
    m1 = matchers["right"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "AssignmentPattern" &&
    (!m0 || match(m0, node["left"])) &&
    (!m1 || match(m1, node["right"]));
}

export function isArrayPattern(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ArrayPattern";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "ArrayPattern" && match(matcher, node["elements"]);
  }

  const m = matcher["elements"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "ArrayPattern" && (!m || match(m, node["elements"]));
}

export function isArrowFunctionExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ArrowFunctionExpression";
  }

  let n = 3,
    m0 = matchers["params"] || (n--, false),
    m1 = matchers["body"] || (n--, false),
    m2 = matchers["async"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ArrowFunctionExpression" &&
    (!m0 || match(m0, node["params"])) &&
    (!m1 || match(m1, node["body"])) &&
    (!m2 || match(m2, node["async"]));
}

export function isClassBody(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ClassBody";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "ClassBody" && match(matcher, node["body"]);
  }

  const m = matcher["body"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "ClassBody" && (!m || match(m, node["body"]));
}

export function isClassDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ClassDeclaration";
  }

  let n = 4,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["superClass"] || (n--, false),
    m2 = matchers["body"] || (n--, false),
    m3 = matchers["decorators"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ClassDeclaration" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["superClass"])) &&
    (!m2 || match(m2, node["body"])) &&
    (!m3 || match(m3, node["decorators"]));
}

export function isClassExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ClassExpression";
  }

  let n = 4,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["superClass"] || (n--, false),
    m2 = matchers["body"] || (n--, false),
    m3 = matchers["decorators"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ClassExpression" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["superClass"])) &&
    (!m2 || match(m2, node["body"])) &&
    (!m3 || match(m3, node["decorators"]));
}

export function isExportAllDeclaration(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ExportAllDeclaration";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "ExportAllDeclaration" &&
      match(matcher, node["source"]);
  }

  const m = matcher["source"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ExportAllDeclaration" &&
    (!m || match(m, node["source"]));
}

export function isExportDefaultDeclaration(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ExportDefaultDeclaration";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "ExportDefaultDeclaration" &&
      match(matcher, node["declaration"]);
  }

  const m = matcher["declaration"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ExportDefaultDeclaration" &&
    (!m || match(m, node["declaration"]));
}

export function isExportNamedDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ExportNamedDeclaration";
  }

  let n = 3,
    m0 = matchers["declaration"] || (n--, false),
    m1 = matchers["specifiers"] || (n--, false),
    m2 = matchers["source"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ExportNamedDeclaration" &&
    (!m0 || match(m0, node["declaration"])) &&
    (!m1 || match(m1, node["specifiers"])) &&
    (!m2 || match(m2, node["source"]));
}

export function isExportSpecifier(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ExportSpecifier";
  }

  let n = 2,
    m0 = matchers["local"] || (n--, false),
    m1 = matchers["exported"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ExportSpecifier" &&
    (!m0 || match(m0, node["local"])) &&
    (!m1 || match(m1, node["exported"]));
}

export function isForOfStatement(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ForOfStatement";
  }

  let n = 3,
    m0 = matchers["left"] || (n--, false),
    m1 = matchers["right"] || (n--, false),
    m2 = matchers["body"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ForOfStatement" &&
    (!m0 || match(m0, node["left"])) &&
    (!m1 || match(m1, node["right"])) &&
    (!m2 || match(m2, node["body"]));
}

export function isImportDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ImportDeclaration";
  }

  let n = 2,
    m0 = matchers["specifiers"] || (n--, false),
    m1 = matchers["source"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ImportDeclaration" &&
    (!m0 || match(m0, node["specifiers"])) &&
    (!m1 || match(m1, node["source"]));
}

export function isImportDefaultSpecifier(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ImportDefaultSpecifier";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "ImportDefaultSpecifier" &&
      match(matcher, node["local"]);
  }

  const m = matcher["local"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ImportDefaultSpecifier" &&
    (!m || match(m, node["local"]));
}

export function isImportNamespaceSpecifier(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ImportNamespaceSpecifier";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "ImportNamespaceSpecifier" &&
      match(matcher, node["local"]);
  }

  const m = matcher["local"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ImportNamespaceSpecifier" &&
    (!m || match(m, node["local"]));
}

export function isImportSpecifier(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ImportSpecifier";
  }

  let n = 2,
    m0 = matchers["local"] || (n--, false),
    m1 = matchers["imported"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ImportSpecifier" &&
    (!m0 || match(m0, node["local"])) &&
    (!m1 || match(m1, node["imported"]));
}

export function isMetaProperty(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "MetaProperty";
  }

  let n = 2,
    m0 = matchers["meta"] || (n--, false),
    m1 = matchers["property"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "MetaProperty" &&
    (!m0 || match(m0, node["meta"])) &&
    (!m1 || match(m1, node["property"]));
}

export function isClassMethod(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ClassMethod";
  }

  let n = 6,
    m0 = matchers["kind"] || (n--, false),
    m1 = matchers["key"] || (n--, false),
    m2 = matchers["params"] || (n--, false),
    m3 = matchers["body"] || (n--, false),
    m4 = matchers["computed"] || (n--, false),
    m5 = matchers["static"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ClassMethod" &&
    (!m0 || match(m0, node["kind"])) &&
    (!m1 || match(m1, node["key"])) &&
    (!m2 || match(m2, node["params"])) &&
    (!m3 || match(m3, node["body"])) &&
    (!m4 || match(m4, node["computed"])) &&
    (!m5 || match(m5, node["static"]));
}

export function isObjectPattern(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ObjectPattern";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "ObjectPattern" &&
      match(matcher, node["properties"]);
  }

  const m = matcher["properties"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ObjectPattern" &&
    (!m || match(m, node["properties"]));
}

export function isSpreadElement(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "SpreadElement";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "SpreadElement" && match(matcher, node["argument"]);
  }

  const m = matcher["argument"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "SpreadElement" && (!m || match(m, node["argument"]));
}

export function isSuper() {
  return (node) => node && node.type === "Super";
}

export function isTaggedTemplateExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TaggedTemplateExpression";
  }

  let n = 2,
    m0 = matchers["tag"] || (n--, false),
    m1 = matchers["quasi"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TaggedTemplateExpression" &&
    (!m0 || match(m0, node["tag"])) &&
    (!m1 || match(m1, node["quasi"]));
}

export function isTemplateElement(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TemplateElement";
  }

  let n = 2,
    m0 = matchers["value"] || (n--, false),
    m1 = matchers["tail"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TemplateElement" &&
    (!m0 || match(m0, node["value"])) &&
    (!m1 || match(m1, node["tail"]));
}

export function isTemplateLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TemplateLiteral";
  }

  let n = 2,
    m0 = matchers["quasis"] || (n--, false),
    m1 = matchers["expressions"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TemplateLiteral" &&
    (!m0 || match(m0, node["quasis"])) &&
    (!m1 || match(m1, node["expressions"]));
}

export function isYieldExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "YieldExpression";
  }

  let n = 2,
    m0 = matchers["argument"] || (n--, false),
    m1 = matchers["delegate"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "YieldExpression" &&
    (!m0 || match(m0, node["argument"])) &&
    (!m1 || match(m1, node["delegate"]));
}

export function isAnyTypeAnnotation() {
  return (node) => node && node.type === "AnyTypeAnnotation";
}

export function isArrayTypeAnnotation(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ArrayTypeAnnotation";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "ArrayTypeAnnotation" &&
      match(matcher, node["elementType"]);
  }

  const m = matcher["elementType"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ArrayTypeAnnotation" &&
    (!m || match(m, node["elementType"]));
}

export function isBooleanTypeAnnotation() {
  return (node) => node && node.type === "BooleanTypeAnnotation";
}

export function isBooleanLiteralTypeAnnotation(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "BooleanLiteralTypeAnnotation";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "BooleanLiteralTypeAnnotation" &&
      match(matcher, node["value"]);
  }

  const m = matcher["value"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "BooleanLiteralTypeAnnotation" &&
    (!m || match(m, node["value"]));
}

export function isNullLiteralTypeAnnotation() {
  return (node) => node && node.type === "NullLiteralTypeAnnotation";
}

export function isClassImplements(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ClassImplements";
  }

  let n = 2,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["typeParameters"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ClassImplements" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"]));
}

export function isDeclareClass(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "DeclareClass";
  }

  let n = 4,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["typeParameters"] || (n--, false),
    m2 = matchers["extends"] || (n--, false),
    m3 = matchers["body"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "DeclareClass" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["extends"])) &&
    (!m3 || match(m3, node["body"]));
}

export function isDeclareFunction(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "DeclareFunction";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "DeclareFunction" && match(matcher, node["id"]);
  }

  const m = matcher["id"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "DeclareFunction" && (!m || match(m, node["id"]));
}

export function isDeclareInterface(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "DeclareInterface";
  }

  let n = 4,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["typeParameters"] || (n--, false),
    m2 = matchers["extends"] || (n--, false),
    m3 = matchers["body"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "DeclareInterface" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["extends"])) &&
    (!m3 || match(m3, node["body"]));
}

export function isDeclareModule(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "DeclareModule";
  }

  let n = 3,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["body"] || (n--, false),
    m2 = matchers["kind"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "DeclareModule" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["body"])) &&
    (!m2 || match(m2, node["kind"]));
}

export function isDeclareModuleExports(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "DeclareModuleExports";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "DeclareModuleExports" &&
      match(matcher, node["typeAnnotation"]);
  }

  const m = matcher["typeAnnotation"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "DeclareModuleExports" &&
    (!m || match(m, node["typeAnnotation"]));
}

export function isDeclareTypeAlias(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "DeclareTypeAlias";
  }

  let n = 3,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["typeParameters"] || (n--, false),
    m2 = matchers["right"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "DeclareTypeAlias" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["right"]));
}

export function isDeclareOpaqueType(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "DeclareOpaqueType";
  }

  let n = 3,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["typeParameters"] || (n--, false),
    m2 = matchers["supertype"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "DeclareOpaqueType" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["supertype"]));
}

export function isDeclareVariable(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "DeclareVariable";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "DeclareVariable" && match(matcher, node["id"]);
  }

  const m = matcher["id"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "DeclareVariable" && (!m || match(m, node["id"]));
}

export function isDeclareExportDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "DeclareExportDeclaration";
  }

  let n = 3,
    m0 = matchers["declaration"] || (n--, false),
    m1 = matchers["specifiers"] || (n--, false),
    m2 = matchers["source"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "DeclareExportDeclaration" &&
    (!m0 || match(m0, node["declaration"])) &&
    (!m1 || match(m1, node["specifiers"])) &&
    (!m2 || match(m2, node["source"]));
}

export function isDeclareExportAllDeclaration(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "DeclareExportAllDeclaration";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "DeclareExportAllDeclaration" &&
      match(matcher, node["source"]);
  }

  const m = matcher["source"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "DeclareExportAllDeclaration" &&
    (!m || match(m, node["source"]));
}

export function isDeclaredPredicate(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "DeclaredPredicate";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "DeclaredPredicate" &&
      match(matcher, node["value"]);
  }

  const m = matcher["value"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "DeclaredPredicate" &&
    (!m || match(m, node["value"]));
}

export function isExistsTypeAnnotation() {
  return (node) => node && node.type === "ExistsTypeAnnotation";
}

export function isFunctionTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "FunctionTypeAnnotation";
  }

  let n = 4,
    m0 = matchers["typeParameters"] || (n--, false),
    m1 = matchers["params"] || (n--, false),
    m2 = matchers["rest"] || (n--, false),
    m3 = matchers["returnType"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "FunctionTypeAnnotation" &&
    (!m0 || match(m0, node["typeParameters"])) &&
    (!m1 || match(m1, node["params"])) &&
    (!m2 || match(m2, node["rest"])) &&
    (!m3 || match(m3, node["returnType"]));
}

export function isFunctionTypeParam(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "FunctionTypeParam";
  }

  let n = 2,
    m0 = matchers["name"] || (n--, false),
    m1 = matchers["typeAnnotation"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "FunctionTypeParam" &&
    (!m0 || match(m0, node["name"])) &&
    (!m1 || match(m1, node["typeAnnotation"]));
}

export function isGenericTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "GenericTypeAnnotation";
  }

  let n = 2,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["typeParameters"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "GenericTypeAnnotation" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"]));
}

export function isInferredPredicate() {
  return (node) => node && node.type === "InferredPredicate";
}

export function isInterfaceExtends(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "InterfaceExtends";
  }

  let n = 2,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["typeParameters"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "InterfaceExtends" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"]));
}

export function isInterfaceDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "InterfaceDeclaration";
  }

  let n = 4,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["typeParameters"] || (n--, false),
    m2 = matchers["extends"] || (n--, false),
    m3 = matchers["body"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "InterfaceDeclaration" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["extends"])) &&
    (!m3 || match(m3, node["body"]));
}

export function isInterfaceTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "InterfaceTypeAnnotation";
  }

  let n = 2,
    m0 = matchers["extends"] || (n--, false),
    m1 = matchers["body"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "InterfaceTypeAnnotation" &&
    (!m0 || match(m0, node["extends"])) &&
    (!m1 || match(m1, node["body"]));
}

export function isIntersectionTypeAnnotation(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "IntersectionTypeAnnotation";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "IntersectionTypeAnnotation" &&
      match(matcher, node["types"]);
  }

  const m = matcher["types"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "IntersectionTypeAnnotation" &&
    (!m || match(m, node["types"]));
}

export function isMixedTypeAnnotation() {
  return (node) => node && node.type === "MixedTypeAnnotation";
}

export function isEmptyTypeAnnotation() {
  return (node) => node && node.type === "EmptyTypeAnnotation";
}

export function isNullableTypeAnnotation(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "NullableTypeAnnotation";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "NullableTypeAnnotation" &&
      match(matcher, node["typeAnnotation"]);
  }

  const m = matcher["typeAnnotation"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "NullableTypeAnnotation" &&
    (!m || match(m, node["typeAnnotation"]));
}

export function isNumberLiteralTypeAnnotation(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "NumberLiteralTypeAnnotation";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "NumberLiteralTypeAnnotation" &&
      match(matcher, node["value"]);
  }

  const m = matcher["value"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "NumberLiteralTypeAnnotation" &&
    (!m || match(m, node["value"]));
}

export function isNumberTypeAnnotation() {
  return (node) => node && node.type === "NumberTypeAnnotation";
}

export function isObjectTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ObjectTypeAnnotation";
  }

  let n = 5,
    m0 = matchers["properties"] || (n--, false),
    m1 = matchers["indexers"] || (n--, false),
    m2 = matchers["callProperties"] || (n--, false),
    m3 = matchers["internalSlots"] || (n--, false),
    m4 = matchers["exact"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ObjectTypeAnnotation" &&
    (!m0 || match(m0, node["properties"])) &&
    (!m1 || match(m1, node["indexers"])) &&
    (!m2 || match(m2, node["callProperties"])) &&
    (!m3 || match(m3, node["internalSlots"])) &&
    (!m4 || match(m4, node["exact"]));
}

export function isObjectTypeInternalSlot(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ObjectTypeInternalSlot";
  }

  let n = 5,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["value"] || (n--, false),
    m2 = matchers["optional"] || (n--, false),
    m3 = matchers["static"] || (n--, false),
    m4 = matchers["method"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ObjectTypeInternalSlot" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["value"])) &&
    (!m2 || match(m2, node["optional"])) &&
    (!m3 || match(m3, node["static"])) &&
    (!m4 || match(m4, node["method"]));
}

export function isObjectTypeCallProperty(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ObjectTypeCallProperty";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "ObjectTypeCallProperty" &&
      match(matcher, node["value"]);
  }

  const m = matcher["value"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ObjectTypeCallProperty" &&
    (!m || match(m, node["value"]));
}

export function isObjectTypeIndexer(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ObjectTypeIndexer";
  }

  let n = 4,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["key"] || (n--, false),
    m2 = matchers["value"] || (n--, false),
    m3 = matchers["variance"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ObjectTypeIndexer" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["key"])) &&
    (!m2 || match(m2, node["value"])) &&
    (!m3 || match(m3, node["variance"]));
}

export function isObjectTypeProperty(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ObjectTypeProperty";
  }

  let n = 3,
    m0 = matchers["key"] || (n--, false),
    m1 = matchers["value"] || (n--, false),
    m2 = matchers["variance"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ObjectTypeProperty" &&
    (!m0 || match(m0, node["key"])) &&
    (!m1 || match(m1, node["value"])) &&
    (!m2 || match(m2, node["variance"]));
}

export function isObjectTypeSpreadProperty(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ObjectTypeSpreadProperty";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "ObjectTypeSpreadProperty" &&
      match(matcher, node["argument"]);
  }

  const m = matcher["argument"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ObjectTypeSpreadProperty" &&
    (!m || match(m, node["argument"]));
}

export function isOpaqueType(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "OpaqueType";
  }

  let n = 4,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["typeParameters"] || (n--, false),
    m2 = matchers["supertype"] || (n--, false),
    m3 = matchers["impltype"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "OpaqueType" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["supertype"])) &&
    (!m3 || match(m3, node["impltype"]));
}

export function isQualifiedTypeIdentifier(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "QualifiedTypeIdentifier";
  }

  let n = 2,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["qualification"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "QualifiedTypeIdentifier" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["qualification"]));
}

export function isStringLiteralTypeAnnotation(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "StringLiteralTypeAnnotation";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "StringLiteralTypeAnnotation" &&
      match(matcher, node["value"]);
  }

  const m = matcher["value"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "StringLiteralTypeAnnotation" &&
    (!m || match(m, node["value"]));
}

export function isStringTypeAnnotation() {
  return (node) => node && node.type === "StringTypeAnnotation";
}

export function isThisTypeAnnotation() {
  return (node) => node && node.type === "ThisTypeAnnotation";
}

export function isTupleTypeAnnotation(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TupleTypeAnnotation";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TupleTypeAnnotation" &&
      match(matcher, node["types"]);
  }

  const m = matcher["types"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TupleTypeAnnotation" &&
    (!m || match(m, node["types"]));
}

export function isTypeofTypeAnnotation(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TypeofTypeAnnotation";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TypeofTypeAnnotation" &&
      match(matcher, node["argument"]);
  }

  const m = matcher["argument"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TypeofTypeAnnotation" &&
    (!m || match(m, node["argument"]));
}

export function isTypeAlias(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TypeAlias";
  }

  let n = 3,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["typeParameters"] || (n--, false),
    m2 = matchers["right"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TypeAlias" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["right"]));
}

export function isTypeAnnotation(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TypeAnnotation";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TypeAnnotation" &&
      match(matcher, node["typeAnnotation"]);
  }

  const m = matcher["typeAnnotation"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TypeAnnotation" &&
    (!m || match(m, node["typeAnnotation"]));
}

export function isTypeCastExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TypeCastExpression";
  }

  let n = 2,
    m0 = matchers["expression"] || (n--, false),
    m1 = matchers["typeAnnotation"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TypeCastExpression" &&
    (!m0 || match(m0, node["expression"])) &&
    (!m1 || match(m1, node["typeAnnotation"]));
}

export function isTypeParameter(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TypeParameter";
  }

  let n = 3,
    m0 = matchers["bound"] || (n--, false),
    m1 = matchers["default"] || (n--, false),
    m2 = matchers["variance"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TypeParameter" &&
    (!m0 || match(m0, node["bound"])) &&
    (!m1 || match(m1, node["default"])) &&
    (!m2 || match(m2, node["variance"]));
}

export function isTypeParameterDeclaration(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TypeParameterDeclaration";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TypeParameterDeclaration" &&
      match(matcher, node["params"]);
  }

  const m = matcher["params"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TypeParameterDeclaration" &&
    (!m || match(m, node["params"]));
}

export function isTypeParameterInstantiation(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TypeParameterInstantiation";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TypeParameterInstantiation" &&
      match(matcher, node["params"]);
  }

  const m = matcher["params"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TypeParameterInstantiation" &&
    (!m || match(m, node["params"]));
}

export function isUnionTypeAnnotation(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "UnionTypeAnnotation";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "UnionTypeAnnotation" &&
      match(matcher, node["types"]);
  }

  const m = matcher["types"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "UnionTypeAnnotation" &&
    (!m || match(m, node["types"]));
}

export function isVariance(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "Variance";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "Variance" && match(matcher, node["kind"]);
  }

  const m = matcher["kind"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "Variance" && (!m || match(m, node["kind"]));
}

export function isVoidTypeAnnotation() {
  return (node) => node && node.type === "VoidTypeAnnotation";
}

export function isJSXAttribute(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "JSXAttribute";
  }

  let n = 2,
    m0 = matchers["name"] || (n--, false),
    m1 = matchers["value"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "JSXAttribute" &&
    (!m0 || match(m0, node["name"])) &&
    (!m1 || match(m1, node["value"]));
}

export function isJSXClosingElement(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "JSXClosingElement";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "JSXClosingElement" && match(matcher, node["name"]);
  }

  const m = matcher["name"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "JSXClosingElement" && (!m || match(m, node["name"]));
}

export function isJSXElement(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "JSXElement";
  }

  let n = 4,
    m0 = matchers["openingElement"] || (n--, false),
    m1 = matchers["closingElement"] || (n--, false),
    m2 = matchers["children"] || (n--, false),
    m3 = matchers["selfClosing"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "JSXElement" &&
    (!m0 || match(m0, node["openingElement"])) &&
    (!m1 || match(m1, node["closingElement"])) &&
    (!m2 || match(m2, node["children"])) &&
    (!m3 || match(m3, node["selfClosing"]));
}

export function isJSXEmptyExpression() {
  return (node) => node && node.type === "JSXEmptyExpression";
}

export function isJSXExpressionContainer(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "JSXExpressionContainer";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "JSXExpressionContainer" &&
      match(matcher, node["expression"]);
  }

  const m = matcher["expression"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "JSXExpressionContainer" &&
    (!m || match(m, node["expression"]));
}

export function isJSXSpreadChild(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "JSXSpreadChild";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "JSXSpreadChild" &&
      match(matcher, node["expression"]);
  }

  const m = matcher["expression"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "JSXSpreadChild" &&
    (!m || match(m, node["expression"]));
}

export function isJSXIdentifier(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "JSXIdentifier";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "JSXIdentifier" && match(matcher, node["name"]);
  }

  const m = matcher["name"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "JSXIdentifier" && (!m || match(m, node["name"]));
}

export function isJSXMemberExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "JSXMemberExpression";
  }

  let n = 2,
    m0 = matchers["object"] || (n--, false),
    m1 = matchers["property"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "JSXMemberExpression" &&
    (!m0 || match(m0, node["object"])) &&
    (!m1 || match(m1, node["property"]));
}

export function isJSXNamespacedName(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "JSXNamespacedName";
  }

  let n = 2,
    m0 = matchers["namespace"] || (n--, false),
    m1 = matchers["name"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "JSXNamespacedName" &&
    (!m0 || match(m0, node["namespace"])) &&
    (!m1 || match(m1, node["name"]));
}

export function isJSXOpeningElement(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "JSXOpeningElement";
  }

  let n = 3,
    m0 = matchers["name"] || (n--, false),
    m1 = matchers["attributes"] || (n--, false),
    m2 = matchers["selfClosing"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "JSXOpeningElement" &&
    (!m0 || match(m0, node["name"])) &&
    (!m1 || match(m1, node["attributes"])) &&
    (!m2 || match(m2, node["selfClosing"]));
}

export function isJSXSpreadAttribute(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "JSXSpreadAttribute";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "JSXSpreadAttribute" &&
      match(matcher, node["argument"]);
  }

  const m = matcher["argument"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "JSXSpreadAttribute" &&
    (!m || match(m, node["argument"]));
}

export function isJSXText(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "JSXText";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "JSXText" && match(matcher, node["value"]);
  }

  const m = matcher["value"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "JSXText" && (!m || match(m, node["value"]));
}

export function isJSXFragment(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "JSXFragment";
  }

  let n = 3,
    m0 = matchers["openingFragment"] || (n--, false),
    m1 = matchers["closingFragment"] || (n--, false),
    m2 = matchers["children"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "JSXFragment" &&
    (!m0 || match(m0, node["openingFragment"])) &&
    (!m1 || match(m1, node["closingFragment"])) &&
    (!m2 || match(m2, node["children"]));
}

export function isJSXOpeningFragment() {
  return (node) => node && node.type === "JSXOpeningFragment";
}

export function isJSXClosingFragment() {
  return (node) => node && node.type === "JSXClosingFragment";
}

export function isNoop() {
  return (node) => node && node.type === "Noop";
}

export function isPlaceholder(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "Placeholder";
  }

  let n = 2,
    m0 = matchers["expectedNode"] || (n--, false),
    m1 = matchers["name"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "Placeholder" &&
    (!m0 || match(m0, node["expectedNode"])) &&
    (!m1 || match(m1, node["name"]));
}

export function isArgumentPlaceholder() {
  return (node) => node && node.type === "ArgumentPlaceholder";
}

export function isAwaitExpression(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "AwaitExpression";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "AwaitExpression" &&
      match(matcher, node["argument"]);
  }

  const m = matcher["argument"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "AwaitExpression" &&
    (!m || match(m, node["argument"]));
}

export function isBindExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "BindExpression";
  }

  let n = 2,
    m0 = matchers["object"] || (n--, false),
    m1 = matchers["callee"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "BindExpression" &&
    (!m0 || match(m0, node["object"])) &&
    (!m1 || match(m1, node["callee"]));
}

export function isClassProperty(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ClassProperty";
  }

  let n = 5,
    m0 = matchers["key"] || (n--, false),
    m1 = matchers["value"] || (n--, false),
    m2 = matchers["typeAnnotation"] || (n--, false),
    m3 = matchers["decorators"] || (n--, false),
    m4 = matchers["computed"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ClassProperty" &&
    (!m0 || match(m0, node["key"])) &&
    (!m1 || match(m1, node["value"])) &&
    (!m2 || match(m2, node["typeAnnotation"])) &&
    (!m3 || match(m3, node["decorators"])) &&
    (!m4 || match(m4, node["computed"]));
}

export function isOptionalMemberExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "OptionalMemberExpression";
  }

  let n = 4,
    m0 = matchers["object"] || (n--, false),
    m1 = matchers["property"] || (n--, false),
    m2 = matchers["computed"] || (n--, false),
    m3 = matchers["optional"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "OptionalMemberExpression" &&
    (!m0 || match(m0, node["object"])) &&
    (!m1 || match(m1, node["property"])) &&
    (!m2 || match(m2, node["computed"])) &&
    (!m3 || match(m3, node["optional"]));
}

export function isPipelineTopicExpression(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "PipelineTopicExpression";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "PipelineTopicExpression" &&
      match(matcher, node["expression"]);
  }

  const m = matcher["expression"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "PipelineTopicExpression" &&
    (!m || match(m, node["expression"]));
}

export function isPipelineBareFunction(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "PipelineBareFunction";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "PipelineBareFunction" &&
      match(matcher, node["callee"]);
  }

  const m = matcher["callee"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "PipelineBareFunction" &&
    (!m || match(m, node["callee"]));
}

export function isPipelinePrimaryTopicReference() {
  return (node) => node && node.type === "PipelinePrimaryTopicReference";
}

export function isOptionalCallExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "OptionalCallExpression";
  }

  let n = 3,
    m0 = matchers["callee"] || (n--, false),
    m1 = matchers["arguments"] || (n--, false),
    m2 = matchers["optional"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "OptionalCallExpression" &&
    (!m0 || match(m0, node["callee"])) &&
    (!m1 || match(m1, node["arguments"])) &&
    (!m2 || match(m2, node["optional"]));
}

export function isClassPrivateProperty(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ClassPrivateProperty";
  }

  let n = 2,
    m0 = matchers["key"] || (n--, false),
    m1 = matchers["value"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ClassPrivateProperty" &&
    (!m0 || match(m0, node["key"])) &&
    (!m1 || match(m1, node["value"]));
}

export function isClassPrivateMethod(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "ClassPrivateMethod";
  }

  let n = 5,
    m0 = matchers["kind"] || (n--, false),
    m1 = matchers["key"] || (n--, false),
    m2 = matchers["params"] || (n--, false),
    m3 = matchers["body"] || (n--, false),
    m4 = matchers["static"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ClassPrivateMethod" &&
    (!m0 || match(m0, node["kind"])) &&
    (!m1 || match(m1, node["key"])) &&
    (!m2 || match(m2, node["params"])) &&
    (!m3 || match(m3, node["body"])) &&
    (!m4 || match(m4, node["static"]));
}

export function isImport() {
  return (node) => node && node.type === "Import";
}

export function isDecorator(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "Decorator";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "Decorator" && match(matcher, node["expression"]);
  }

  const m = matcher["expression"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "Decorator" && (!m || match(m, node["expression"]));
}

export function isDoExpression(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "DoExpression";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "DoExpression" && match(matcher, node["body"]);
  }

  const m = matcher["body"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "DoExpression" && (!m || match(m, node["body"]));
}

export function isExportDefaultSpecifier(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ExportDefaultSpecifier";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "ExportDefaultSpecifier" &&
      match(matcher, node["exported"]);
  }

  const m = matcher["exported"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ExportDefaultSpecifier" &&
    (!m || match(m, node["exported"]));
}

export function isExportNamespaceSpecifier(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "ExportNamespaceSpecifier";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "ExportNamespaceSpecifier" &&
      match(matcher, node["exported"]);
  }

  const m = matcher["exported"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "ExportNamespaceSpecifier" &&
    (!m || match(m, node["exported"]));
}

export function isPrivateName(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "PrivateName";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "PrivateName" && match(matcher, node["id"]);
  }

  const m = matcher["id"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "PrivateName" && (!m || match(m, node["id"]));
}

export function isBigIntLiteral(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "BigIntLiteral";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "BigIntLiteral" && match(matcher, node["value"]);
  }

  const m = matcher["value"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "BigIntLiteral" && (!m || match(m, node["value"]));
}

export function isTSParameterProperty(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSParameterProperty";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TSParameterProperty" &&
      match(matcher, node["parameter"]);
  }

  const m = matcher["parameter"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSParameterProperty" &&
    (!m || match(m, node["parameter"]));
}

export function isTSDeclareFunction(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSDeclareFunction";
  }

  let n = 4,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["typeParameters"] || (n--, false),
    m2 = matchers["params"] || (n--, false),
    m3 = matchers["returnType"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSDeclareFunction" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["params"])) &&
    (!m3 || match(m3, node["returnType"]));
}

export function isTSDeclareMethod(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSDeclareMethod";
  }

  let n = 5,
    m0 = matchers["decorators"] || (n--, false),
    m1 = matchers["key"] || (n--, false),
    m2 = matchers["typeParameters"] || (n--, false),
    m3 = matchers["params"] || (n--, false),
    m4 = matchers["returnType"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSDeclareMethod" &&
    (!m0 || match(m0, node["decorators"])) &&
    (!m1 || match(m1, node["key"])) &&
    (!m2 || match(m2, node["typeParameters"])) &&
    (!m3 || match(m3, node["params"])) &&
    (!m4 || match(m4, node["returnType"]));
}

export function isTSQualifiedName(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSQualifiedName";
  }

  let n = 2,
    m0 = matchers["left"] || (n--, false),
    m1 = matchers["right"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSQualifiedName" &&
    (!m0 || match(m0, node["left"])) &&
    (!m1 || match(m1, node["right"]));
}

export function isTSCallSignatureDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSCallSignatureDeclaration";
  }

  let n = 3,
    m0 = matchers["typeParameters"] || (n--, false),
    m1 = matchers["parameters"] || (n--, false),
    m2 = matchers["typeAnnotation"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSCallSignatureDeclaration" &&
    (!m0 || match(m0, node["typeParameters"])) &&
    (!m1 || match(m1, node["parameters"])) &&
    (!m2 || match(m2, node["typeAnnotation"]));
}

export function isTSConstructSignatureDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSConstructSignatureDeclaration";
  }

  let n = 3,
    m0 = matchers["typeParameters"] || (n--, false),
    m1 = matchers["parameters"] || (n--, false),
    m2 = matchers["typeAnnotation"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSConstructSignatureDeclaration" &&
    (!m0 || match(m0, node["typeParameters"])) &&
    (!m1 || match(m1, node["parameters"])) &&
    (!m2 || match(m2, node["typeAnnotation"]));
}

export function isTSPropertySignature(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSPropertySignature";
  }

  let n = 3,
    m0 = matchers["key"] || (n--, false),
    m1 = matchers["typeAnnotation"] || (n--, false),
    m2 = matchers["initializer"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSPropertySignature" &&
    (!m0 || match(m0, node["key"])) &&
    (!m1 || match(m1, node["typeAnnotation"])) &&
    (!m2 || match(m2, node["initializer"]));
}

export function isTSMethodSignature(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSMethodSignature";
  }

  let n = 4,
    m0 = matchers["key"] || (n--, false),
    m1 = matchers["typeParameters"] || (n--, false),
    m2 = matchers["parameters"] || (n--, false),
    m3 = matchers["typeAnnotation"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSMethodSignature" &&
    (!m0 || match(m0, node["key"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["parameters"])) &&
    (!m3 || match(m3, node["typeAnnotation"]));
}

export function isTSIndexSignature(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSIndexSignature";
  }

  let n = 2,
    m0 = matchers["parameters"] || (n--, false),
    m1 = matchers["typeAnnotation"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSIndexSignature" &&
    (!m0 || match(m0, node["parameters"])) &&
    (!m1 || match(m1, node["typeAnnotation"]));
}

export function isTSAnyKeyword() {
  return (node) => node && node.type === "TSAnyKeyword";
}

export function isTSUnknownKeyword() {
  return (node) => node && node.type === "TSUnknownKeyword";
}

export function isTSNumberKeyword() {
  return (node) => node && node.type === "TSNumberKeyword";
}

export function isTSObjectKeyword() {
  return (node) => node && node.type === "TSObjectKeyword";
}

export function isTSBooleanKeyword() {
  return (node) => node && node.type === "TSBooleanKeyword";
}

export function isTSStringKeyword() {
  return (node) => node && node.type === "TSStringKeyword";
}

export function isTSSymbolKeyword() {
  return (node) => node && node.type === "TSSymbolKeyword";
}

export function isTSVoidKeyword() {
  return (node) => node && node.type === "TSVoidKeyword";
}

export function isTSUndefinedKeyword() {
  return (node) => node && node.type === "TSUndefinedKeyword";
}

export function isTSNullKeyword() {
  return (node) => node && node.type === "TSNullKeyword";
}

export function isTSNeverKeyword() {
  return (node) => node && node.type === "TSNeverKeyword";
}

export function isTSThisType() {
  return (node) => node && node.type === "TSThisType";
}

export function isTSFunctionType(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSFunctionType";
  }

  let n = 3,
    m0 = matchers["typeParameters"] || (n--, false),
    m1 = matchers["parameters"] || (n--, false),
    m2 = matchers["typeAnnotation"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSFunctionType" &&
    (!m0 || match(m0, node["typeParameters"])) &&
    (!m1 || match(m1, node["parameters"])) &&
    (!m2 || match(m2, node["typeAnnotation"]));
}

export function isTSConstructorType(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSConstructorType";
  }

  let n = 3,
    m0 = matchers["typeParameters"] || (n--, false),
    m1 = matchers["parameters"] || (n--, false),
    m2 = matchers["typeAnnotation"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSConstructorType" &&
    (!m0 || match(m0, node["typeParameters"])) &&
    (!m1 || match(m1, node["parameters"])) &&
    (!m2 || match(m2, node["typeAnnotation"]));
}

export function isTSTypeReference(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSTypeReference";
  }

  let n = 2,
    m0 = matchers["typeName"] || (n--, false),
    m1 = matchers["typeParameters"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSTypeReference" &&
    (!m0 || match(m0, node["typeName"])) &&
    (!m1 || match(m1, node["typeParameters"]));
}

export function isTSTypePredicate(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSTypePredicate";
  }

  let n = 2,
    m0 = matchers["parameterName"] || (n--, false),
    m1 = matchers["typeAnnotation"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSTypePredicate" &&
    (!m0 || match(m0, node["parameterName"])) &&
    (!m1 || match(m1, node["typeAnnotation"]));
}

export function isTSTypeQuery(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSTypeQuery";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "TSTypeQuery" && match(matcher, node["exprName"]);
  }

  const m = matcher["exprName"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "TSTypeQuery" && (!m || match(m, node["exprName"]));
}

export function isTSTypeLiteral(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSTypeLiteral";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "TSTypeLiteral" && match(matcher, node["members"]);
  }

  const m = matcher["members"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "TSTypeLiteral" && (!m || match(m, node["members"]));
}

export function isTSArrayType(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSArrayType";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TSArrayType" &&
      match(matcher, node["elementType"]);
  }

  const m = matcher["elementType"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSArrayType" &&
    (!m || match(m, node["elementType"]));
}

export function isTSTupleType(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSTupleType";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TSTupleType" &&
      match(matcher, node["elementTypes"]);
  }

  const m = matcher["elementTypes"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSTupleType" &&
    (!m || match(m, node["elementTypes"]));
}

export function isTSOptionalType(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSOptionalType";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TSOptionalType" &&
      match(matcher, node["typeAnnotation"]);
  }

  const m = matcher["typeAnnotation"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSOptionalType" &&
    (!m || match(m, node["typeAnnotation"]));
}

export function isTSRestType(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSRestType";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TSRestType" &&
      match(matcher, node["typeAnnotation"]);
  }

  const m = matcher["typeAnnotation"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSRestType" &&
    (!m || match(m, node["typeAnnotation"]));
}

export function isTSUnionType(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSUnionType";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "TSUnionType" && match(matcher, node["types"]);
  }

  const m = matcher["types"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "TSUnionType" && (!m || match(m, node["types"]));
}

export function isTSIntersectionType(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSIntersectionType";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TSIntersectionType" &&
      match(matcher, node["types"]);
  }

  const m = matcher["types"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSIntersectionType" &&
    (!m || match(m, node["types"]));
}

export function isTSConditionalType(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSConditionalType";
  }

  let n = 4,
    m0 = matchers["checkType"] || (n--, false),
    m1 = matchers["extendsType"] || (n--, false),
    m2 = matchers["trueType"] || (n--, false),
    m3 = matchers["falseType"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSConditionalType" &&
    (!m0 || match(m0, node["checkType"])) &&
    (!m1 || match(m1, node["extendsType"])) &&
    (!m2 || match(m2, node["trueType"])) &&
    (!m3 || match(m3, node["falseType"]));
}

export function isTSInferType(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSInferType";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TSInferType" &&
      match(matcher, node["typeParameter"]);
  }

  const m = matcher["typeParameter"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSInferType" &&
    (!m || match(m, node["typeParameter"]));
}

export function isTSParenthesizedType(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSParenthesizedType";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TSParenthesizedType" &&
      match(matcher, node["typeAnnotation"]);
  }

  const m = matcher["typeAnnotation"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSParenthesizedType" &&
    (!m || match(m, node["typeAnnotation"]));
}

export function isTSTypeOperator(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSTypeOperator";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TSTypeOperator" &&
      match(matcher, node["typeAnnotation"]);
  }

  const m = matcher["typeAnnotation"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSTypeOperator" &&
    (!m || match(m, node["typeAnnotation"]));
}

export function isTSIndexedAccessType(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSIndexedAccessType";
  }

  let n = 2,
    m0 = matchers["objectType"] || (n--, false),
    m1 = matchers["indexType"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSIndexedAccessType" &&
    (!m0 || match(m0, node["objectType"])) &&
    (!m1 || match(m1, node["indexType"]));
}

export function isTSMappedType(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSMappedType";
  }

  let n = 2,
    m0 = matchers["typeParameter"] || (n--, false),
    m1 = matchers["typeAnnotation"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSMappedType" &&
    (!m0 || match(m0, node["typeParameter"])) &&
    (!m1 || match(m1, node["typeAnnotation"]));
}

export function isTSLiteralType(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSLiteralType";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "TSLiteralType" && match(matcher, node["literal"]);
  }

  const m = matcher["literal"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "TSLiteralType" && (!m || match(m, node["literal"]));
}

export function isTSExpressionWithTypeArguments(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSExpressionWithTypeArguments";
  }

  let n = 2,
    m0 = matchers["expression"] || (n--, false),
    m1 = matchers["typeParameters"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSExpressionWithTypeArguments" &&
    (!m0 || match(m0, node["expression"])) &&
    (!m1 || match(m1, node["typeParameters"]));
}

export function isTSInterfaceDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSInterfaceDeclaration";
  }

  let n = 4,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["typeParameters"] || (n--, false),
    m2 = matchers["extends"] || (n--, false),
    m3 = matchers["body"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSInterfaceDeclaration" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["extends"])) &&
    (!m3 || match(m3, node["body"]));
}

export function isTSInterfaceBody(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSInterfaceBody";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "TSInterfaceBody" && match(matcher, node["body"]);
  }

  const m = matcher["body"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "TSInterfaceBody" && (!m || match(m, node["body"]));
}

export function isTSTypeAliasDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSTypeAliasDeclaration";
  }

  let n = 3,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["typeParameters"] || (n--, false),
    m2 = matchers["typeAnnotation"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSTypeAliasDeclaration" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["typeAnnotation"]));
}

export function isTSAsExpression(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSAsExpression";
  }

  let n = 2,
    m0 = matchers["expression"] || (n--, false),
    m1 = matchers["typeAnnotation"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSAsExpression" &&
    (!m0 || match(m0, node["expression"])) &&
    (!m1 || match(m1, node["typeAnnotation"]));
}

export function isTSTypeAssertion(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSTypeAssertion";
  }

  let n = 2,
    m0 = matchers["typeAnnotation"] || (n--, false),
    m1 = matchers["expression"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSTypeAssertion" &&
    (!m0 || match(m0, node["typeAnnotation"])) &&
    (!m1 || match(m1, node["expression"]));
}

export function isTSEnumDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSEnumDeclaration";
  }

  let n = 2,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["members"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSEnumDeclaration" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["members"]));
}

export function isTSEnumMember(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSEnumMember";
  }

  let n = 2,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["initializer"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSEnumMember" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["initializer"]));
}

export function isTSModuleDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSModuleDeclaration";
  }

  let n = 2,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["body"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSModuleDeclaration" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["body"]));
}

export function isTSModuleBlock(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSModuleBlock";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node && node.type === "TSModuleBlock" && match(matcher, node["body"]);
  }

  const m = matcher["body"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node && node.type === "TSModuleBlock" && (!m || match(m, node["body"]));
}

export function isTSImportType(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSImportType";
  }

  let n = 3,
    m0 = matchers["argument"] || (n--, false),
    m1 = matchers["qualifier"] || (n--, false),
    m2 = matchers["typeParameters"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSImportType" &&
    (!m0 || match(m0, node["argument"])) &&
    (!m1 || match(m1, node["qualifier"])) &&
    (!m2 || match(m2, node["typeParameters"]));
}

export function isTSImportEqualsDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSImportEqualsDeclaration";
  }

  let n = 2,
    m0 = matchers["id"] || (n--, false),
    m1 = matchers["moduleReference"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSImportEqualsDeclaration" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["moduleReference"]));
}

export function isTSExternalModuleReference(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSExternalModuleReference";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TSExternalModuleReference" &&
      match(matcher, node["expression"]);
  }

  const m = matcher["expression"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSExternalModuleReference" &&
    (!m || match(m, node["expression"]));
}

export function isTSNonNullExpression(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSNonNullExpression";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TSNonNullExpression" &&
      match(matcher, node["expression"]);
  }

  const m = matcher["expression"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSNonNullExpression" &&
    (!m || match(m, node["expression"]));
}

export function isTSExportAssignment(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSExportAssignment";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TSExportAssignment" &&
      match(matcher, node["expression"]);
  }

  const m = matcher["expression"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSExportAssignment" &&
    (!m || match(m, node["expression"]));
}

export function isTSNamespaceExportDeclaration(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSNamespaceExportDeclaration";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TSNamespaceExportDeclaration" &&
      match(matcher, node["id"]);
  }

  const m = matcher["id"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSNamespaceExportDeclaration" &&
    (!m || match(m, node["id"]));
}

export function isTSTypeAnnotation(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSTypeAnnotation";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TSTypeAnnotation" &&
      match(matcher, node["typeAnnotation"]);
  }

  const m = matcher["typeAnnotation"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSTypeAnnotation" &&
    (!m || match(m, node["typeAnnotation"]));
}

export function isTSTypeParameterInstantiation(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSTypeParameterInstantiation";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TSTypeParameterInstantiation" &&
      match(matcher, node["params"]);
  }

  const m = matcher["params"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSTypeParameterInstantiation" &&
    (!m || match(m, node["params"]));
}

export function isTSTypeParameterDeclaration(matcher) {
  if (typeof matcher === "undefined") {
    return (node) => node && node.type === "TSTypeParameterDeclaration";
  }

  if (typeof matcher !== "object" || Array.isArray(matcher)) {
    return (node) =>
      node &&
      node.type === "TSTypeParameterDeclaration" &&
      match(matcher, node["params"]);
  }

  const m = matcher["params"],
    n = Object.keys(matcher).length;

  if (n > 1 || (n === 1 && !m)) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSTypeParameterDeclaration" &&
    (!m || match(m, node["params"]));
}

export function isTSTypeParameter(matchers) {
  if (typeof matchers === "undefined") {
    return (node) => node && node.type === "TSTypeParameter";
  }

  let n = 2,
    m0 = matchers["constraint"] || (n--, false),
    m1 = matchers["default"] || (n--, false);

  if (Object.keys(matchers).length !== n) {
    return () => false;
  }

  return (node) =>
    node &&
    node.type === "TSTypeParameter" &&
    (!m0 || match(m0, node["constraint"])) &&
    (!m1 || match(m1, node["default"]));
}
