import match from "./match";

export * from "./builtins";

export function isArrayExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ArrayExpression";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["elements"]
      : matchers;

  return node =>
    node && node.type === "ArrayExpression" && match(m, node["elements"]);
}

export function isAssignmentExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "AssignmentExpression";
  }

  const m0 = matchers["operator"],
    m1 = matchers["left"],
    m2 = matchers["right"];

  return node =>
    node &&
    node.type === "AssignmentExpression" &&
    (!m0 || match(m0, node["operator"])) &&
    (!m1 || match(m1, node["left"])) &&
    (!m2 || match(m2, node["right"]));
}

export function isBinaryExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "BinaryExpression";
  }

  const m0 = matchers["operator"],
    m1 = matchers["left"],
    m2 = matchers["right"];

  return node =>
    node &&
    node.type === "BinaryExpression" &&
    (!m0 || match(m0, node["operator"])) &&
    (!m1 || match(m1, node["left"])) &&
    (!m2 || match(m2, node["right"]));
}

export function isInterpreterDirective(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "InterpreterDirective";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["value"]
      : matchers;

  return node =>
    node && node.type === "InterpreterDirective" && match(m, node["value"]);
}

export function isDirective(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "Directive";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["value"]
      : matchers;

  return node => node && node.type === "Directive" && match(m, node["value"]);
}

export function isDirectiveLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DirectiveLiteral";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["value"]
      : matchers;

  return node =>
    node && node.type === "DirectiveLiteral" && match(m, node["value"]);
}

export function isBlockStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "BlockStatement";
  }

  const m0 = matchers["body"],
    m1 = matchers["directives"];

  return node =>
    node &&
    node.type === "BlockStatement" &&
    (!m0 || match(m0, node["body"])) &&
    (!m1 || match(m1, node["directives"]));
}

export function isBreakStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "BreakStatement";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["label"]
      : matchers;

  return node =>
    node && node.type === "BreakStatement" && match(m, node["label"]);
}

export function isCallExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "CallExpression";
  }

  const m0 = matchers["callee"],
    m1 = matchers["arguments"];

  return node =>
    node &&
    node.type === "CallExpression" &&
    (!m0 || match(m0, node["callee"])) &&
    (!m1 || match(m1, node["arguments"]));
}

export function isCatchClause(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "CatchClause";
  }

  const m0 = matchers["param"],
    m1 = matchers["body"];

  return node =>
    node &&
    node.type === "CatchClause" &&
    (!m0 || match(m0, node["param"])) &&
    (!m1 || match(m1, node["body"]));
}

export function isConditionalExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ConditionalExpression";
  }

  const m0 = matchers["test"],
    m1 = matchers["consequent"],
    m2 = matchers["alternate"];

  return node =>
    node &&
    node.type === "ConditionalExpression" &&
    (!m0 || match(m0, node["test"])) &&
    (!m1 || match(m1, node["consequent"])) &&
    (!m2 || match(m2, node["alternate"]));
}

export function isContinueStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ContinueStatement";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["label"]
      : matchers;

  return node =>
    node && node.type === "ContinueStatement" && match(m, node["label"]);
}

var f0;
export function isDebuggerStatement() {
  return f0 || (f0 = node => node && node.type === "DebuggerStatement");
}

export function isDoWhileStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DoWhileStatement";
  }

  const m0 = matchers["test"],
    m1 = matchers["body"];

  return node =>
    node &&
    node.type === "DoWhileStatement" &&
    (!m0 || match(m0, node["test"])) &&
    (!m1 || match(m1, node["body"]));
}

var f1;
export function isEmptyStatement() {
  return f1 || (f1 = node => node && node.type === "EmptyStatement");
}

export function isExpressionStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ExpressionStatement";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["expression"]
      : matchers;

  return node =>
    node && node.type === "ExpressionStatement" && match(m, node["expression"]);
}

export function isFile(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "File";
  }

  const m0 = matchers["program"],
    m1 = matchers["comments"],
    m2 = matchers["tokens"];

  return node =>
    node &&
    node.type === "File" &&
    (!m0 || match(m0, node["program"])) &&
    (!m1 || match(m1, node["comments"])) &&
    (!m2 || match(m2, node["tokens"]));
}

export function isForInStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ForInStatement";
  }

  const m0 = matchers["left"],
    m1 = matchers["right"],
    m2 = matchers["body"];

  return node =>
    node &&
    node.type === "ForInStatement" &&
    (!m0 || match(m0, node["left"])) &&
    (!m1 || match(m1, node["right"])) &&
    (!m2 || match(m2, node["body"]));
}

export function isForStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ForStatement";
  }

  const m0 = matchers["init"],
    m1 = matchers["test"],
    m2 = matchers["update"],
    m3 = matchers["body"];

  return node =>
    node &&
    node.type === "ForStatement" &&
    (!m0 || match(m0, node["init"])) &&
    (!m1 || match(m1, node["test"])) &&
    (!m2 || match(m2, node["update"])) &&
    (!m3 || match(m3, node["body"]));
}

export function isFunctionDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "FunctionDeclaration";
  }

  const m0 = matchers["id"],
    m1 = matchers["params"],
    m2 = matchers["body"],
    m3 = matchers["generator"],
    m4 = matchers["async"];

  return node =>
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
    return node => node && node.type === "FunctionExpression";
  }

  const m0 = matchers["id"],
    m1 = matchers["params"],
    m2 = matchers["body"],
    m3 = matchers["generator"],
    m4 = matchers["async"];

  return node =>
    node &&
    node.type === "FunctionExpression" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["params"])) &&
    (!m2 || match(m2, node["body"])) &&
    (!m3 || match(m3, node["generator"])) &&
    (!m4 || match(m4, node["async"]));
}

export function isIdentifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "Identifier";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["name"]
      : matchers;

  return node => node && node.type === "Identifier" && match(m, node["name"]);
}

export function isIfStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "IfStatement";
  }

  const m0 = matchers["test"],
    m1 = matchers["consequent"],
    m2 = matchers["alternate"];

  return node =>
    node &&
    node.type === "IfStatement" &&
    (!m0 || match(m0, node["test"])) &&
    (!m1 || match(m1, node["consequent"])) &&
    (!m2 || match(m2, node["alternate"]));
}

export function isLabeledStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "LabeledStatement";
  }

  const m0 = matchers["label"],
    m1 = matchers["body"];

  return node =>
    node &&
    node.type === "LabeledStatement" &&
    (!m0 || match(m0, node["label"])) &&
    (!m1 || match(m1, node["body"]));
}

export function isStringLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "StringLiteral";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["value"]
      : matchers;

  return node =>
    node && node.type === "StringLiteral" && match(m, node["value"]);
}

export function isNumericLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "NumericLiteral";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["value"]
      : matchers;

  return node =>
    node && node.type === "NumericLiteral" && match(m, node["value"]);
}

var f2;
export function isNullLiteral() {
  return f2 || (f2 = node => node && node.type === "NullLiteral");
}

export function isBooleanLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "BooleanLiteral";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["value"]
      : matchers;

  return node =>
    node && node.type === "BooleanLiteral" && match(m, node["value"]);
}

export function isRegExpLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "RegExpLiteral";
  }

  const m0 = matchers["pattern"],
    m1 = matchers["flags"];

  return node =>
    node &&
    node.type === "RegExpLiteral" &&
    (!m0 || match(m0, node["pattern"])) &&
    (!m1 || match(m1, node["flags"]));
}

export function isLogicalExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "LogicalExpression";
  }

  const m0 = matchers["operator"],
    m1 = matchers["left"],
    m2 = matchers["right"];

  return node =>
    node &&
    node.type === "LogicalExpression" &&
    (!m0 || match(m0, node["operator"])) &&
    (!m1 || match(m1, node["left"])) &&
    (!m2 || match(m2, node["right"]));
}

export function isMemberExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "MemberExpression";
  }

  const m0 = matchers["object"],
    m1 = matchers["property"],
    m2 = matchers["computed"],
    m3 = matchers["optional"];

  return node =>
    node &&
    node.type === "MemberExpression" &&
    (!m0 || match(m0, node["object"])) &&
    (!m1 || match(m1, node["property"])) &&
    (!m2 || match(m2, node["computed"])) &&
    (!m3 || match(m3, node["optional"]));
}

export function isNewExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "NewExpression";
  }

  const m0 = matchers["callee"],
    m1 = matchers["arguments"];

  return node =>
    node &&
    node.type === "NewExpression" &&
    (!m0 || match(m0, node["callee"])) &&
    (!m1 || match(m1, node["arguments"]));
}

export function isProgram(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "Program";
  }

  const m0 = matchers["body"],
    m1 = matchers["directives"],
    m2 = matchers["sourceType"],
    m3 = matchers["interpreter"];

  return node =>
    node &&
    node.type === "Program" &&
    (!m0 || match(m0, node["body"])) &&
    (!m1 || match(m1, node["directives"])) &&
    (!m2 || match(m2, node["sourceType"])) &&
    (!m3 || match(m3, node["interpreter"]));
}

export function isObjectExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectExpression";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["properties"]
      : matchers;

  return node =>
    node && node.type === "ObjectExpression" && match(m, node["properties"]);
}

export function isObjectMethod(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectMethod";
  }

  const m0 = matchers["kind"],
    m1 = matchers["key"],
    m2 = matchers["params"],
    m3 = matchers["body"],
    m4 = matchers["computed"];

  return node =>
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
    return node => node && node.type === "ObjectProperty";
  }

  const m0 = matchers["key"],
    m1 = matchers["value"],
    m2 = matchers["computed"],
    m3 = matchers["shorthand"],
    m4 = matchers["decorators"];

  return node =>
    node &&
    node.type === "ObjectProperty" &&
    (!m0 || match(m0, node["key"])) &&
    (!m1 || match(m1, node["value"])) &&
    (!m2 || match(m2, node["computed"])) &&
    (!m3 || match(m3, node["shorthand"])) &&
    (!m4 || match(m4, node["decorators"]));
}

export function isRestElement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "RestElement";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["argument"]
      : matchers;

  return node =>
    node && node.type === "RestElement" && match(m, node["argument"]);
}

export function isReturnStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ReturnStatement";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["argument"]
      : matchers;

  return node =>
    node && node.type === "ReturnStatement" && match(m, node["argument"]);
}

export function isSequenceExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "SequenceExpression";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["expressions"]
      : matchers;

  return node =>
    node && node.type === "SequenceExpression" && match(m, node["expressions"]);
}

export function isSwitchCase(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "SwitchCase";
  }

  const m0 = matchers["test"],
    m1 = matchers["consequent"];

  return node =>
    node &&
    node.type === "SwitchCase" &&
    (!m0 || match(m0, node["test"])) &&
    (!m1 || match(m1, node["consequent"]));
}

export function isSwitchStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "SwitchStatement";
  }

  const m0 = matchers["discriminant"],
    m1 = matchers["cases"];

  return node =>
    node &&
    node.type === "SwitchStatement" &&
    (!m0 || match(m0, node["discriminant"])) &&
    (!m1 || match(m1, node["cases"]));
}

var f3;
export function isThisExpression() {
  return f3 || (f3 = node => node && node.type === "ThisExpression");
}

export function isThrowStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ThrowStatement";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["argument"]
      : matchers;

  return node =>
    node && node.type === "ThrowStatement" && match(m, node["argument"]);
}

export function isTryStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TryStatement";
  }

  const m0 = matchers["block"],
    m1 = matchers["handler"],
    m2 = matchers["finalizer"];

  return node =>
    node &&
    node.type === "TryStatement" &&
    (!m0 || match(m0, node["block"])) &&
    (!m1 || match(m1, node["handler"])) &&
    (!m2 || match(m2, node["finalizer"]));
}

export function isUnaryExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "UnaryExpression";
  }

  const m0 = matchers["operator"],
    m1 = matchers["argument"],
    m2 = matchers["prefix"];

  return node =>
    node &&
    node.type === "UnaryExpression" &&
    (!m0 || match(m0, node["operator"])) &&
    (!m1 || match(m1, node["argument"])) &&
    (!m2 || match(m2, node["prefix"]));
}

export function isUpdateExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "UpdateExpression";
  }

  const m0 = matchers["operator"],
    m1 = matchers["argument"],
    m2 = matchers["prefix"];

  return node =>
    node &&
    node.type === "UpdateExpression" &&
    (!m0 || match(m0, node["operator"])) &&
    (!m1 || match(m1, node["argument"])) &&
    (!m2 || match(m2, node["prefix"]));
}

export function isVariableDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "VariableDeclaration";
  }

  const m0 = matchers["kind"],
    m1 = matchers["declarations"];

  return node =>
    node &&
    node.type === "VariableDeclaration" &&
    (!m0 || match(m0, node["kind"])) &&
    (!m1 || match(m1, node["declarations"]));
}

export function isVariableDeclarator(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "VariableDeclarator";
  }

  const m0 = matchers["id"],
    m1 = matchers["init"];

  return node =>
    node &&
    node.type === "VariableDeclarator" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["init"]));
}

export function isWhileStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "WhileStatement";
  }

  const m0 = matchers["test"],
    m1 = matchers["body"];

  return node =>
    node &&
    node.type === "WhileStatement" &&
    (!m0 || match(m0, node["test"])) &&
    (!m1 || match(m1, node["body"]));
}

export function isWithStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "WithStatement";
  }

  const m0 = matchers["object"],
    m1 = matchers["body"];

  return node =>
    node &&
    node.type === "WithStatement" &&
    (!m0 || match(m0, node["object"])) &&
    (!m1 || match(m1, node["body"]));
}

export function isAssignmentPattern(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "AssignmentPattern";
  }

  const m0 = matchers["left"],
    m1 = matchers["right"];

  return node =>
    node &&
    node.type === "AssignmentPattern" &&
    (!m0 || match(m0, node["left"])) &&
    (!m1 || match(m1, node["right"]));
}

export function isArrayPattern(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ArrayPattern";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["elements"]
      : matchers;

  return node =>
    node && node.type === "ArrayPattern" && match(m, node["elements"]);
}

export function isArrowFunctionExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ArrowFunctionExpression";
  }

  const m0 = matchers["params"],
    m1 = matchers["body"],
    m2 = matchers["async"];

  return node =>
    node &&
    node.type === "ArrowFunctionExpression" &&
    (!m0 || match(m0, node["params"])) &&
    (!m1 || match(m1, node["body"])) &&
    (!m2 || match(m2, node["async"]));
}

export function isClassBody(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ClassBody";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["body"]
      : matchers;

  return node => node && node.type === "ClassBody" && match(m, node["body"]);
}

export function isClassDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ClassDeclaration";
  }

  const m0 = matchers["id"],
    m1 = matchers["superClass"],
    m2 = matchers["body"],
    m3 = matchers["decorators"];

  return node =>
    node &&
    node.type === "ClassDeclaration" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["superClass"])) &&
    (!m2 || match(m2, node["body"])) &&
    (!m3 || match(m3, node["decorators"]));
}

export function isClassExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ClassExpression";
  }

  const m0 = matchers["id"],
    m1 = matchers["superClass"],
    m2 = matchers["body"],
    m3 = matchers["decorators"];

  return node =>
    node &&
    node.type === "ClassExpression" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["superClass"])) &&
    (!m2 || match(m2, node["body"])) &&
    (!m3 || match(m3, node["decorators"]));
}

export function isExportAllDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ExportAllDeclaration";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["source"]
      : matchers;

  return node =>
    node && node.type === "ExportAllDeclaration" && match(m, node["source"]);
}

export function isExportDefaultDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ExportDefaultDeclaration";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["declaration"]
      : matchers;

  return node =>
    node &&
    node.type === "ExportDefaultDeclaration" &&
    match(m, node["declaration"]);
}

export function isExportNamedDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ExportNamedDeclaration";
  }

  const m0 = matchers["declaration"],
    m1 = matchers["specifiers"],
    m2 = matchers["source"];

  return node =>
    node &&
    node.type === "ExportNamedDeclaration" &&
    (!m0 || match(m0, node["declaration"])) &&
    (!m1 || match(m1, node["specifiers"])) &&
    (!m2 || match(m2, node["source"]));
}

export function isExportSpecifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ExportSpecifier";
  }

  const m0 = matchers["local"],
    m1 = matchers["exported"];

  return node =>
    node &&
    node.type === "ExportSpecifier" &&
    (!m0 || match(m0, node["local"])) &&
    (!m1 || match(m1, node["exported"]));
}

export function isForOfStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ForOfStatement";
  }

  const m0 = matchers["left"],
    m1 = matchers["right"],
    m2 = matchers["body"];

  return node =>
    node &&
    node.type === "ForOfStatement" &&
    (!m0 || match(m0, node["left"])) &&
    (!m1 || match(m1, node["right"])) &&
    (!m2 || match(m2, node["body"]));
}

export function isImportDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ImportDeclaration";
  }

  const m0 = matchers["specifiers"],
    m1 = matchers["source"];

  return node =>
    node &&
    node.type === "ImportDeclaration" &&
    (!m0 || match(m0, node["specifiers"])) &&
    (!m1 || match(m1, node["source"]));
}

export function isImportDefaultSpecifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ImportDefaultSpecifier";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["local"]
      : matchers;

  return node =>
    node && node.type === "ImportDefaultSpecifier" && match(m, node["local"]);
}

export function isImportNamespaceSpecifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ImportNamespaceSpecifier";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["local"]
      : matchers;

  return node =>
    node && node.type === "ImportNamespaceSpecifier" && match(m, node["local"]);
}

export function isImportSpecifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ImportSpecifier";
  }

  const m0 = matchers["local"],
    m1 = matchers["imported"];

  return node =>
    node &&
    node.type === "ImportSpecifier" &&
    (!m0 || match(m0, node["local"])) &&
    (!m1 || match(m1, node["imported"]));
}

export function isMetaProperty(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "MetaProperty";
  }

  const m0 = matchers["meta"],
    m1 = matchers["property"];

  return node =>
    node &&
    node.type === "MetaProperty" &&
    (!m0 || match(m0, node["meta"])) &&
    (!m1 || match(m1, node["property"]));
}

export function isClassMethod(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ClassMethod";
  }

  const m0 = matchers["kind"],
    m1 = matchers["key"],
    m2 = matchers["params"],
    m3 = matchers["body"],
    m4 = matchers["computed"],
    m5 = matchers["static"];

  return node =>
    node &&
    node.type === "ClassMethod" &&
    (!m0 || match(m0, node["kind"])) &&
    (!m1 || match(m1, node["key"])) &&
    (!m2 || match(m2, node["params"])) &&
    (!m3 || match(m3, node["body"])) &&
    (!m4 || match(m4, node["computed"])) &&
    (!m5 || match(m5, node["static"]));
}

export function isObjectPattern(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectPattern";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["properties"]
      : matchers;

  return node =>
    node && node.type === "ObjectPattern" && match(m, node["properties"]);
}

export function isSpreadElement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "SpreadElement";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["argument"]
      : matchers;

  return node =>
    node && node.type === "SpreadElement" && match(m, node["argument"]);
}

var f4;
export function isSuper() {
  return f4 || (f4 = node => node && node.type === "Super");
}

export function isTaggedTemplateExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TaggedTemplateExpression";
  }

  const m0 = matchers["tag"],
    m1 = matchers["quasi"];

  return node =>
    node &&
    node.type === "TaggedTemplateExpression" &&
    (!m0 || match(m0, node["tag"])) &&
    (!m1 || match(m1, node["quasi"]));
}

export function isTemplateElement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TemplateElement";
  }

  const m0 = matchers["value"],
    m1 = matchers["tail"];

  return node =>
    node &&
    node.type === "TemplateElement" &&
    (!m0 || match(m0, node["value"])) &&
    (!m1 || match(m1, node["tail"]));
}

export function isTemplateLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TemplateLiteral";
  }

  const m0 = matchers["quasis"],
    m1 = matchers["expressions"];

  return node =>
    node &&
    node.type === "TemplateLiteral" &&
    (!m0 || match(m0, node["quasis"])) &&
    (!m1 || match(m1, node["expressions"]));
}

export function isYieldExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "YieldExpression";
  }

  const m0 = matchers["argument"],
    m1 = matchers["delegate"];

  return node =>
    node &&
    node.type === "YieldExpression" &&
    (!m0 || match(m0, node["argument"])) &&
    (!m1 || match(m1, node["delegate"]));
}

var f5;
export function isAnyTypeAnnotation() {
  return f5 || (f5 = node => node && node.type === "AnyTypeAnnotation");
}

export function isArrayTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ArrayTypeAnnotation";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["elementType"]
      : matchers;

  return node =>
    node &&
    node.type === "ArrayTypeAnnotation" &&
    match(m, node["elementType"]);
}

var f6;
export function isBooleanTypeAnnotation() {
  return f6 || (f6 = node => node && node.type === "BooleanTypeAnnotation");
}

export function isBooleanLiteralTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "BooleanLiteralTypeAnnotation";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["value"]
      : matchers;

  return node =>
    node &&
    node.type === "BooleanLiteralTypeAnnotation" &&
    match(m, node["value"]);
}

var f7;
export function isNullLiteralTypeAnnotation() {
  return f7 || (f7 = node => node && node.type === "NullLiteralTypeAnnotation");
}

export function isClassImplements(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ClassImplements";
  }

  const m0 = matchers["id"],
    m1 = matchers["typeParameters"];

  return node =>
    node &&
    node.type === "ClassImplements" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"]));
}

export function isDeclareClass(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareClass";
  }

  const m0 = matchers["id"],
    m1 = matchers["typeParameters"],
    m2 = matchers["extends"],
    m3 = matchers["body"];

  return node =>
    node &&
    node.type === "DeclareClass" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["extends"])) &&
    (!m3 || match(m3, node["body"]));
}

export function isDeclareFunction(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareFunction";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["id"]
      : matchers;

  return node =>
    node && node.type === "DeclareFunction" && match(m, node["id"]);
}

export function isDeclareInterface(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareInterface";
  }

  const m0 = matchers["id"],
    m1 = matchers["typeParameters"],
    m2 = matchers["extends"],
    m3 = matchers["body"];

  return node =>
    node &&
    node.type === "DeclareInterface" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["extends"])) &&
    (!m3 || match(m3, node["body"]));
}

export function isDeclareModule(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareModule";
  }

  const m0 = matchers["id"],
    m1 = matchers["body"],
    m2 = matchers["kind"];

  return node =>
    node &&
    node.type === "DeclareModule" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["body"])) &&
    (!m2 || match(m2, node["kind"]));
}

export function isDeclareModuleExports(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareModuleExports";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["typeAnnotation"]
      : matchers;

  return node =>
    node &&
    node.type === "DeclareModuleExports" &&
    match(m, node["typeAnnotation"]);
}

export function isDeclareTypeAlias(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareTypeAlias";
  }

  const m0 = matchers["id"],
    m1 = matchers["typeParameters"],
    m2 = matchers["right"];

  return node =>
    node &&
    node.type === "DeclareTypeAlias" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["right"]));
}

export function isDeclareOpaqueType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareOpaqueType";
  }

  const m0 = matchers["id"],
    m1 = matchers["typeParameters"],
    m2 = matchers["supertype"];

  return node =>
    node &&
    node.type === "DeclareOpaqueType" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["supertype"]));
}

export function isDeclareVariable(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareVariable";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["id"]
      : matchers;

  return node =>
    node && node.type === "DeclareVariable" && match(m, node["id"]);
}

export function isDeclareExportDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareExportDeclaration";
  }

  const m0 = matchers["declaration"],
    m1 = matchers["specifiers"],
    m2 = matchers["source"];

  return node =>
    node &&
    node.type === "DeclareExportDeclaration" &&
    (!m0 || match(m0, node["declaration"])) &&
    (!m1 || match(m1, node["specifiers"])) &&
    (!m2 || match(m2, node["source"]));
}

export function isDeclareExportAllDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareExportAllDeclaration";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["source"]
      : matchers;

  return node =>
    node &&
    node.type === "DeclareExportAllDeclaration" &&
    match(m, node["source"]);
}

export function isDeclaredPredicate(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclaredPredicate";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["value"]
      : matchers;

  return node =>
    node && node.type === "DeclaredPredicate" && match(m, node["value"]);
}

var f8;
export function isExistsTypeAnnotation() {
  return f8 || (f8 = node => node && node.type === "ExistsTypeAnnotation");
}

export function isFunctionTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "FunctionTypeAnnotation";
  }

  const m0 = matchers["typeParameters"],
    m1 = matchers["params"],
    m2 = matchers["rest"],
    m3 = matchers["returnType"];

  return node =>
    node &&
    node.type === "FunctionTypeAnnotation" &&
    (!m0 || match(m0, node["typeParameters"])) &&
    (!m1 || match(m1, node["params"])) &&
    (!m2 || match(m2, node["rest"])) &&
    (!m3 || match(m3, node["returnType"]));
}

export function isFunctionTypeParam(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "FunctionTypeParam";
  }

  const m0 = matchers["name"],
    m1 = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "FunctionTypeParam" &&
    (!m0 || match(m0, node["name"])) &&
    (!m1 || match(m1, node["typeAnnotation"]));
}

export function isGenericTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "GenericTypeAnnotation";
  }

  const m0 = matchers["id"],
    m1 = matchers["typeParameters"];

  return node =>
    node &&
    node.type === "GenericTypeAnnotation" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"]));
}

var f9;
export function isInferredPredicate() {
  return f9 || (f9 = node => node && node.type === "InferredPredicate");
}

export function isInterfaceExtends(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "InterfaceExtends";
  }

  const m0 = matchers["id"],
    m1 = matchers["typeParameters"];

  return node =>
    node &&
    node.type === "InterfaceExtends" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"]));
}

export function isInterfaceDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "InterfaceDeclaration";
  }

  const m0 = matchers["id"],
    m1 = matchers["typeParameters"],
    m2 = matchers["extends"],
    m3 = matchers["body"];

  return node =>
    node &&
    node.type === "InterfaceDeclaration" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["extends"])) &&
    (!m3 || match(m3, node["body"]));
}

export function isInterfaceTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "InterfaceTypeAnnotation";
  }

  const m0 = matchers["extends"],
    m1 = matchers["body"];

  return node =>
    node &&
    node.type === "InterfaceTypeAnnotation" &&
    (!m0 || match(m0, node["extends"])) &&
    (!m1 || match(m1, node["body"]));
}

export function isIntersectionTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "IntersectionTypeAnnotation";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["types"]
      : matchers;

  return node =>
    node &&
    node.type === "IntersectionTypeAnnotation" &&
    match(m, node["types"]);
}

var f10;
export function isMixedTypeAnnotation() {
  return f10 || (f10 = node => node && node.type === "MixedTypeAnnotation");
}

var f11;
export function isEmptyTypeAnnotation() {
  return f11 || (f11 = node => node && node.type === "EmptyTypeAnnotation");
}

export function isNullableTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "NullableTypeAnnotation";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["typeAnnotation"]
      : matchers;

  return node =>
    node &&
    node.type === "NullableTypeAnnotation" &&
    match(m, node["typeAnnotation"]);
}

export function isNumberLiteralTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "NumberLiteralTypeAnnotation";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["value"]
      : matchers;

  return node =>
    node &&
    node.type === "NumberLiteralTypeAnnotation" &&
    match(m, node["value"]);
}

var f12;
export function isNumberTypeAnnotation() {
  return f12 || (f12 = node => node && node.type === "NumberTypeAnnotation");
}

export function isObjectTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectTypeAnnotation";
  }

  const m0 = matchers["properties"],
    m1 = matchers["indexers"],
    m2 = matchers["callProperties"],
    m3 = matchers["internalSlots"],
    m4 = matchers["exact"];

  return node =>
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
    return node => node && node.type === "ObjectTypeInternalSlot";
  }

  const m0 = matchers["id"],
    m1 = matchers["value"],
    m2 = matchers["optional"],
    m3 = matchers["static"],
    m4 = matchers["method"];

  return node =>
    node &&
    node.type === "ObjectTypeInternalSlot" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["value"])) &&
    (!m2 || match(m2, node["optional"])) &&
    (!m3 || match(m3, node["static"])) &&
    (!m4 || match(m4, node["method"]));
}

export function isObjectTypeCallProperty(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectTypeCallProperty";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["value"]
      : matchers;

  return node =>
    node && node.type === "ObjectTypeCallProperty" && match(m, node["value"]);
}

export function isObjectTypeIndexer(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectTypeIndexer";
  }

  const m0 = matchers["id"],
    m1 = matchers["key"],
    m2 = matchers["value"],
    m3 = matchers["variance"];

  return node =>
    node &&
    node.type === "ObjectTypeIndexer" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["key"])) &&
    (!m2 || match(m2, node["value"])) &&
    (!m3 || match(m3, node["variance"]));
}

export function isObjectTypeProperty(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectTypeProperty";
  }

  const m0 = matchers["key"],
    m1 = matchers["value"],
    m2 = matchers["variance"];

  return node =>
    node &&
    node.type === "ObjectTypeProperty" &&
    (!m0 || match(m0, node["key"])) &&
    (!m1 || match(m1, node["value"])) &&
    (!m2 || match(m2, node["variance"]));
}

export function isObjectTypeSpreadProperty(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectTypeSpreadProperty";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["argument"]
      : matchers;

  return node =>
    node &&
    node.type === "ObjectTypeSpreadProperty" &&
    match(m, node["argument"]);
}

export function isOpaqueType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "OpaqueType";
  }

  const m0 = matchers["id"],
    m1 = matchers["typeParameters"],
    m2 = matchers["supertype"],
    m3 = matchers["impltype"];

  return node =>
    node &&
    node.type === "OpaqueType" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["supertype"])) &&
    (!m3 || match(m3, node["impltype"]));
}

export function isQualifiedTypeIdentifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "QualifiedTypeIdentifier";
  }

  const m0 = matchers["id"],
    m1 = matchers["qualification"];

  return node =>
    node &&
    node.type === "QualifiedTypeIdentifier" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["qualification"]));
}

export function isStringLiteralTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "StringLiteralTypeAnnotation";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["value"]
      : matchers;

  return node =>
    node &&
    node.type === "StringLiteralTypeAnnotation" &&
    match(m, node["value"]);
}

var f13;
export function isStringTypeAnnotation() {
  return f13 || (f13 = node => node && node.type === "StringTypeAnnotation");
}

var f14;
export function isThisTypeAnnotation() {
  return f14 || (f14 = node => node && node.type === "ThisTypeAnnotation");
}

export function isTupleTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TupleTypeAnnotation";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["types"]
      : matchers;

  return node =>
    node && node.type === "TupleTypeAnnotation" && match(m, node["types"]);
}

export function isTypeofTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TypeofTypeAnnotation";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["argument"]
      : matchers;

  return node =>
    node && node.type === "TypeofTypeAnnotation" && match(m, node["argument"]);
}

export function isTypeAlias(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TypeAlias";
  }

  const m0 = matchers["id"],
    m1 = matchers["typeParameters"],
    m2 = matchers["right"];

  return node =>
    node &&
    node.type === "TypeAlias" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["right"]));
}

export function isTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TypeAnnotation";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["typeAnnotation"]
      : matchers;

  return node =>
    node && node.type === "TypeAnnotation" && match(m, node["typeAnnotation"]);
}

export function isTypeCastExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TypeCastExpression";
  }

  const m0 = matchers["expression"],
    m1 = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TypeCastExpression" &&
    (!m0 || match(m0, node["expression"])) &&
    (!m1 || match(m1, node["typeAnnotation"]));
}

export function isTypeParameter(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TypeParameter";
  }

  const m0 = matchers["bound"],
    m1 = matchers["default"],
    m2 = matchers["variance"];

  return node =>
    node &&
    node.type === "TypeParameter" &&
    (!m0 || match(m0, node["bound"])) &&
    (!m1 || match(m1, node["default"])) &&
    (!m2 || match(m2, node["variance"]));
}

export function isTypeParameterDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TypeParameterDeclaration";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["params"]
      : matchers;

  return node =>
    node &&
    node.type === "TypeParameterDeclaration" &&
    match(m, node["params"]);
}

export function isTypeParameterInstantiation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TypeParameterInstantiation";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["params"]
      : matchers;

  return node =>
    node &&
    node.type === "TypeParameterInstantiation" &&
    match(m, node["params"]);
}

export function isUnionTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "UnionTypeAnnotation";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["types"]
      : matchers;

  return node =>
    node && node.type === "UnionTypeAnnotation" && match(m, node["types"]);
}

export function isVariance(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "Variance";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["kind"]
      : matchers;

  return node => node && node.type === "Variance" && match(m, node["kind"]);
}

var f15;
export function isVoidTypeAnnotation() {
  return f15 || (f15 = node => node && node.type === "VoidTypeAnnotation");
}

export function isJSXAttribute(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXAttribute";
  }

  const m0 = matchers["name"],
    m1 = matchers["value"];

  return node =>
    node &&
    node.type === "JSXAttribute" &&
    (!m0 || match(m0, node["name"])) &&
    (!m1 || match(m1, node["value"]));
}

export function isJSXClosingElement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXClosingElement";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["name"]
      : matchers;

  return node =>
    node && node.type === "JSXClosingElement" && match(m, node["name"]);
}

export function isJSXElement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXElement";
  }

  const m0 = matchers["openingElement"],
    m1 = matchers["closingElement"],
    m2 = matchers["children"],
    m3 = matchers["selfClosing"];

  return node =>
    node &&
    node.type === "JSXElement" &&
    (!m0 || match(m0, node["openingElement"])) &&
    (!m1 || match(m1, node["closingElement"])) &&
    (!m2 || match(m2, node["children"])) &&
    (!m3 || match(m3, node["selfClosing"]));
}

var f16;
export function isJSXEmptyExpression() {
  return f16 || (f16 = node => node && node.type === "JSXEmptyExpression");
}

export function isJSXExpressionContainer(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXExpressionContainer";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["expression"]
      : matchers;

  return node =>
    node &&
    node.type === "JSXExpressionContainer" &&
    match(m, node["expression"]);
}

export function isJSXSpreadChild(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXSpreadChild";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["expression"]
      : matchers;

  return node =>
    node && node.type === "JSXSpreadChild" && match(m, node["expression"]);
}

export function isJSXIdentifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXIdentifier";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["name"]
      : matchers;

  return node =>
    node && node.type === "JSXIdentifier" && match(m, node["name"]);
}

export function isJSXMemberExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXMemberExpression";
  }

  const m0 = matchers["object"],
    m1 = matchers["property"];

  return node =>
    node &&
    node.type === "JSXMemberExpression" &&
    (!m0 || match(m0, node["object"])) &&
    (!m1 || match(m1, node["property"]));
}

export function isJSXNamespacedName(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXNamespacedName";
  }

  const m0 = matchers["namespace"],
    m1 = matchers["name"];

  return node =>
    node &&
    node.type === "JSXNamespacedName" &&
    (!m0 || match(m0, node["namespace"])) &&
    (!m1 || match(m1, node["name"]));
}

export function isJSXOpeningElement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXOpeningElement";
  }

  const m0 = matchers["name"],
    m1 = matchers["attributes"],
    m2 = matchers["selfClosing"];

  return node =>
    node &&
    node.type === "JSXOpeningElement" &&
    (!m0 || match(m0, node["name"])) &&
    (!m1 || match(m1, node["attributes"])) &&
    (!m2 || match(m2, node["selfClosing"]));
}

export function isJSXSpreadAttribute(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXSpreadAttribute";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["argument"]
      : matchers;

  return node =>
    node && node.type === "JSXSpreadAttribute" && match(m, node["argument"]);
}

export function isJSXText(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXText";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["value"]
      : matchers;

  return node => node && node.type === "JSXText" && match(m, node["value"]);
}

export function isJSXFragment(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXFragment";
  }

  const m0 = matchers["openingFragment"],
    m1 = matchers["closingFragment"],
    m2 = matchers["children"];

  return node =>
    node &&
    node.type === "JSXFragment" &&
    (!m0 || match(m0, node["openingFragment"])) &&
    (!m1 || match(m1, node["closingFragment"])) &&
    (!m2 || match(m2, node["children"]));
}

var f17;
export function isJSXOpeningFragment() {
  return f17 || (f17 = node => node && node.type === "JSXOpeningFragment");
}

var f18;
export function isJSXClosingFragment() {
  return f18 || (f18 = node => node && node.type === "JSXClosingFragment");
}

var f19;
export function isNoop() {
  return f19 || (f19 = node => node && node.type === "Noop");
}

export function isParenthesizedExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ParenthesizedExpression";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["expression"]
      : matchers;

  return node =>
    node &&
    node.type === "ParenthesizedExpression" &&
    match(m, node["expression"]);
}

export function isAwaitExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "AwaitExpression";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["argument"]
      : matchers;

  return node =>
    node && node.type === "AwaitExpression" && match(m, node["argument"]);
}

export function isBindExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "BindExpression";
  }

  const m0 = matchers["object"],
    m1 = matchers["callee"];

  return node =>
    node &&
    node.type === "BindExpression" &&
    (!m0 || match(m0, node["object"])) &&
    (!m1 || match(m1, node["callee"]));
}

export function isClassProperty(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ClassProperty";
  }

  const m0 = matchers["key"],
    m1 = matchers["value"],
    m2 = matchers["typeAnnotation"],
    m3 = matchers["decorators"],
    m4 = matchers["computed"];

  return node =>
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
    return node => node && node.type === "OptionalMemberExpression";
  }

  const m0 = matchers["object"],
    m1 = matchers["property"],
    m2 = matchers["computed"],
    m3 = matchers["optional"];

  return node =>
    node &&
    node.type === "OptionalMemberExpression" &&
    (!m0 || match(m0, node["object"])) &&
    (!m1 || match(m1, node["property"])) &&
    (!m2 || match(m2, node["computed"])) &&
    (!m3 || match(m3, node["optional"]));
}

export function isOptionalCallExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "OptionalCallExpression";
  }

  const m0 = matchers["callee"],
    m1 = matchers["arguments"],
    m2 = matchers["optional"];

  return node =>
    node &&
    node.type === "OptionalCallExpression" &&
    (!m0 || match(m0, node["callee"])) &&
    (!m1 || match(m1, node["arguments"])) &&
    (!m2 || match(m2, node["optional"]));
}

export function isClassPrivateProperty(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ClassPrivateProperty";
  }

  const m0 = matchers["key"],
    m1 = matchers["value"];

  return node =>
    node &&
    node.type === "ClassPrivateProperty" &&
    (!m0 || match(m0, node["key"])) &&
    (!m1 || match(m1, node["value"]));
}

var f20;
export function isImport() {
  return f20 || (f20 = node => node && node.type === "Import");
}

export function isDecorator(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "Decorator";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["expression"]
      : matchers;

  return node =>
    node && node.type === "Decorator" && match(m, node["expression"]);
}

export function isDoExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DoExpression";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["body"]
      : matchers;

  return node => node && node.type === "DoExpression" && match(m, node["body"]);
}

export function isExportDefaultSpecifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ExportDefaultSpecifier";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["exported"]
      : matchers;

  return node =>
    node &&
    node.type === "ExportDefaultSpecifier" &&
    match(m, node["exported"]);
}

export function isExportNamespaceSpecifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ExportNamespaceSpecifier";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["exported"]
      : matchers;

  return node =>
    node &&
    node.type === "ExportNamespaceSpecifier" &&
    match(m, node["exported"]);
}

export function isPrivateName(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "PrivateName";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["id"]
      : matchers;

  return node => node && node.type === "PrivateName" && match(m, node["id"]);
}

export function isBigIntLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "BigIntLiteral";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["value"]
      : matchers;

  return node =>
    node && node.type === "BigIntLiteral" && match(m, node["value"]);
}

export function isTSParameterProperty(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSParameterProperty";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["parameter"]
      : matchers;

  return node =>
    node && node.type === "TSParameterProperty" && match(m, node["parameter"]);
}

export function isTSDeclareFunction(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSDeclareFunction";
  }

  const m0 = matchers["id"],
    m1 = matchers["typeParameters"],
    m2 = matchers["params"],
    m3 = matchers["returnType"];

  return node =>
    node &&
    node.type === "TSDeclareFunction" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["params"])) &&
    (!m3 || match(m3, node["returnType"]));
}

export function isTSDeclareMethod(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSDeclareMethod";
  }

  const m0 = matchers["decorators"],
    m1 = matchers["key"],
    m2 = matchers["typeParameters"],
    m3 = matchers["params"],
    m4 = matchers["returnType"];

  return node =>
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
    return node => node && node.type === "TSQualifiedName";
  }

  const m0 = matchers["left"],
    m1 = matchers["right"];

  return node =>
    node &&
    node.type === "TSQualifiedName" &&
    (!m0 || match(m0, node["left"])) &&
    (!m1 || match(m1, node["right"]));
}

export function isTSCallSignatureDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSCallSignatureDeclaration";
  }

  const m0 = matchers["typeParameters"],
    m1 = matchers["parameters"],
    m2 = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSCallSignatureDeclaration" &&
    (!m0 || match(m0, node["typeParameters"])) &&
    (!m1 || match(m1, node["parameters"])) &&
    (!m2 || match(m2, node["typeAnnotation"]));
}

export function isTSConstructSignatureDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSConstructSignatureDeclaration";
  }

  const m0 = matchers["typeParameters"],
    m1 = matchers["parameters"],
    m2 = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSConstructSignatureDeclaration" &&
    (!m0 || match(m0, node["typeParameters"])) &&
    (!m1 || match(m1, node["parameters"])) &&
    (!m2 || match(m2, node["typeAnnotation"]));
}

export function isTSPropertySignature(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSPropertySignature";
  }

  const m0 = matchers["key"],
    m1 = matchers["typeAnnotation"],
    m2 = matchers["initializer"];

  return node =>
    node &&
    node.type === "TSPropertySignature" &&
    (!m0 || match(m0, node["key"])) &&
    (!m1 || match(m1, node["typeAnnotation"])) &&
    (!m2 || match(m2, node["initializer"]));
}

export function isTSMethodSignature(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSMethodSignature";
  }

  const m0 = matchers["key"],
    m1 = matchers["typeParameters"],
    m2 = matchers["parameters"],
    m3 = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSMethodSignature" &&
    (!m0 || match(m0, node["key"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["parameters"])) &&
    (!m3 || match(m3, node["typeAnnotation"]));
}

export function isTSIndexSignature(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSIndexSignature";
  }

  const m0 = matchers["parameters"],
    m1 = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSIndexSignature" &&
    (!m0 || match(m0, node["parameters"])) &&
    (!m1 || match(m1, node["typeAnnotation"]));
}

var f21;
export function isTSAnyKeyword() {
  return f21 || (f21 = node => node && node.type === "TSAnyKeyword");
}

var f22;
export function isTSNumberKeyword() {
  return f22 || (f22 = node => node && node.type === "TSNumberKeyword");
}

var f23;
export function isTSObjectKeyword() {
  return f23 || (f23 = node => node && node.type === "TSObjectKeyword");
}

var f24;
export function isTSBooleanKeyword() {
  return f24 || (f24 = node => node && node.type === "TSBooleanKeyword");
}

var f25;
export function isTSStringKeyword() {
  return f25 || (f25 = node => node && node.type === "TSStringKeyword");
}

var f26;
export function isTSSymbolKeyword() {
  return f26 || (f26 = node => node && node.type === "TSSymbolKeyword");
}

var f27;
export function isTSVoidKeyword() {
  return f27 || (f27 = node => node && node.type === "TSVoidKeyword");
}

var f28;
export function isTSUndefinedKeyword() {
  return f28 || (f28 = node => node && node.type === "TSUndefinedKeyword");
}

var f29;
export function isTSNullKeyword() {
  return f29 || (f29 = node => node && node.type === "TSNullKeyword");
}

var f30;
export function isTSNeverKeyword() {
  return f30 || (f30 = node => node && node.type === "TSNeverKeyword");
}

var f31;
export function isTSThisType() {
  return f31 || (f31 = node => node && node.type === "TSThisType");
}

export function isTSFunctionType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSFunctionType";
  }

  const m0 = matchers["typeParameters"],
    m1 = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSFunctionType" &&
    (!m0 || match(m0, node["typeParameters"])) &&
    (!m1 || match(m1, node["typeAnnotation"]));
}

export function isTSConstructorType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSConstructorType";
  }

  const m0 = matchers["typeParameters"],
    m1 = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSConstructorType" &&
    (!m0 || match(m0, node["typeParameters"])) &&
    (!m1 || match(m1, node["typeAnnotation"]));
}

export function isTSTypeReference(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeReference";
  }

  const m0 = matchers["typeName"],
    m1 = matchers["typeParameters"];

  return node =>
    node &&
    node.type === "TSTypeReference" &&
    (!m0 || match(m0, node["typeName"])) &&
    (!m1 || match(m1, node["typeParameters"]));
}

export function isTSTypePredicate(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypePredicate";
  }

  const m0 = matchers["parameterName"],
    m1 = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSTypePredicate" &&
    (!m0 || match(m0, node["parameterName"])) &&
    (!m1 || match(m1, node["typeAnnotation"]));
}

export function isTSTypeQuery(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeQuery";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["exprName"]
      : matchers;

  return node =>
    node && node.type === "TSTypeQuery" && match(m, node["exprName"]);
}

export function isTSTypeLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeLiteral";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["members"]
      : matchers;

  return node =>
    node && node.type === "TSTypeLiteral" && match(m, node["members"]);
}

export function isTSArrayType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSArrayType";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["elementType"]
      : matchers;

  return node =>
    node && node.type === "TSArrayType" && match(m, node["elementType"]);
}

export function isTSTupleType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTupleType";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["elementTypes"]
      : matchers;

  return node =>
    node && node.type === "TSTupleType" && match(m, node["elementTypes"]);
}

export function isTSUnionType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSUnionType";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["types"]
      : matchers;

  return node => node && node.type === "TSUnionType" && match(m, node["types"]);
}

export function isTSIntersectionType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSIntersectionType";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["types"]
      : matchers;

  return node =>
    node && node.type === "TSIntersectionType" && match(m, node["types"]);
}

export function isTSConditionalType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSConditionalType";
  }

  const m0 = matchers["checkType"],
    m1 = matchers["extendsType"],
    m2 = matchers["trueType"],
    m3 = matchers["falseType"];

  return node =>
    node &&
    node.type === "TSConditionalType" &&
    (!m0 || match(m0, node["checkType"])) &&
    (!m1 || match(m1, node["extendsType"])) &&
    (!m2 || match(m2, node["trueType"])) &&
    (!m3 || match(m3, node["falseType"]));
}

export function isTSInferType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSInferType";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["typeParameter"]
      : matchers;

  return node =>
    node && node.type === "TSInferType" && match(m, node["typeParameter"]);
}

export function isTSParenthesizedType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSParenthesizedType";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["typeAnnotation"]
      : matchers;

  return node =>
    node &&
    node.type === "TSParenthesizedType" &&
    match(m, node["typeAnnotation"]);
}

export function isTSTypeOperator(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeOperator";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["typeAnnotation"]
      : matchers;

  return node =>
    node && node.type === "TSTypeOperator" && match(m, node["typeAnnotation"]);
}

export function isTSIndexedAccessType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSIndexedAccessType";
  }

  const m0 = matchers["objectType"],
    m1 = matchers["indexType"];

  return node =>
    node &&
    node.type === "TSIndexedAccessType" &&
    (!m0 || match(m0, node["objectType"])) &&
    (!m1 || match(m1, node["indexType"]));
}

export function isTSMappedType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSMappedType";
  }

  const m0 = matchers["typeParameter"],
    m1 = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSMappedType" &&
    (!m0 || match(m0, node["typeParameter"])) &&
    (!m1 || match(m1, node["typeAnnotation"]));
}

export function isTSLiteralType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSLiteralType";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["literal"]
      : matchers;

  return node =>
    node && node.type === "TSLiteralType" && match(m, node["literal"]);
}

export function isTSExpressionWithTypeArguments(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSExpressionWithTypeArguments";
  }

  const m0 = matchers["expression"],
    m1 = matchers["typeParameters"];

  return node =>
    node &&
    node.type === "TSExpressionWithTypeArguments" &&
    (!m0 || match(m0, node["expression"])) &&
    (!m1 || match(m1, node["typeParameters"]));
}

export function isTSInterfaceDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSInterfaceDeclaration";
  }

  const m0 = matchers["id"],
    m1 = matchers["typeParameters"],
    m2 = matchers["extends"],
    m3 = matchers["body"];

  return node =>
    node &&
    node.type === "TSInterfaceDeclaration" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["extends"])) &&
    (!m3 || match(m3, node["body"]));
}

export function isTSInterfaceBody(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSInterfaceBody";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["body"]
      : matchers;

  return node =>
    node && node.type === "TSInterfaceBody" && match(m, node["body"]);
}

export function isTSTypeAliasDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeAliasDeclaration";
  }

  const m0 = matchers["id"],
    m1 = matchers["typeParameters"],
    m2 = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSTypeAliasDeclaration" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["typeParameters"])) &&
    (!m2 || match(m2, node["typeAnnotation"]));
}

export function isTSAsExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSAsExpression";
  }

  const m0 = matchers["expression"],
    m1 = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSAsExpression" &&
    (!m0 || match(m0, node["expression"])) &&
    (!m1 || match(m1, node["typeAnnotation"]));
}

export function isTSTypeAssertion(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeAssertion";
  }

  const m0 = matchers["typeAnnotation"],
    m1 = matchers["expression"];

  return node =>
    node &&
    node.type === "TSTypeAssertion" &&
    (!m0 || match(m0, node["typeAnnotation"])) &&
    (!m1 || match(m1, node["expression"]));
}

export function isTSEnumDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSEnumDeclaration";
  }

  const m0 = matchers["id"],
    m1 = matchers["members"];

  return node =>
    node &&
    node.type === "TSEnumDeclaration" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["members"]));
}

export function isTSEnumMember(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSEnumMember";
  }

  const m0 = matchers["id"],
    m1 = matchers["initializer"];

  return node =>
    node &&
    node.type === "TSEnumMember" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["initializer"]));
}

export function isTSModuleDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSModuleDeclaration";
  }

  const m0 = matchers["id"],
    m1 = matchers["body"];

  return node =>
    node &&
    node.type === "TSModuleDeclaration" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["body"]));
}

export function isTSModuleBlock(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSModuleBlock";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["body"]
      : matchers;

  return node =>
    node && node.type === "TSModuleBlock" && match(m, node["body"]);
}

export function isTSImportEqualsDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSImportEqualsDeclaration";
  }

  const m0 = matchers["id"],
    m1 = matchers["moduleReference"];

  return node =>
    node &&
    node.type === "TSImportEqualsDeclaration" &&
    (!m0 || match(m0, node["id"])) &&
    (!m1 || match(m1, node["moduleReference"]));
}

export function isTSExternalModuleReference(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSExternalModuleReference";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["expression"]
      : matchers;

  return node =>
    node &&
    node.type === "TSExternalModuleReference" &&
    match(m, node["expression"]);
}

export function isTSNonNullExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSNonNullExpression";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["expression"]
      : matchers;

  return node =>
    node && node.type === "TSNonNullExpression" && match(m, node["expression"]);
}

export function isTSExportAssignment(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSExportAssignment";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["expression"]
      : matchers;

  return node =>
    node && node.type === "TSExportAssignment" && match(m, node["expression"]);
}

export function isTSNamespaceExportDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSNamespaceExportDeclaration";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["id"]
      : matchers;

  return node =>
    node &&
    node.type === "TSNamespaceExportDeclaration" &&
    match(m, node["id"]);
}

export function isTSTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeAnnotation";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["typeAnnotation"]
      : matchers;

  return node =>
    node &&
    node.type === "TSTypeAnnotation" &&
    match(m, node["typeAnnotation"]);
}

export function isTSTypeParameterInstantiation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeParameterInstantiation";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["params"]
      : matchers;

  return node =>
    node &&
    node.type === "TSTypeParameterInstantiation" &&
    match(m, node["params"]);
}

export function isTSTypeParameterDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeParameterDeclaration";
  }

  const m =
    typeof matchers === "object" && !Array.isArray(matchers)
      ? matchers["params"]
      : matchers;

  return node =>
    node &&
    node.type === "TSTypeParameterDeclaration" &&
    match(m, node["params"]);
}

export function isTSTypeParameter(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeParameter";
  }

  const m0 = matchers["constraint"],
    m1 = matchers["default"];

  return node =>
    node &&
    node.type === "TSTypeParameter" &&
    (!m0 || match(m0, node["constraint"])) &&
    (!m1 || match(m1, node["default"]));
}
