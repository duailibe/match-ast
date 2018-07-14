import match from "./match";

export * from "./builtins";

export function isArrayExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ArrayExpression";
  }

  const matcher =
    typeof matchers === "object" ? matchers["elements"] : matchers;
  return node =>
    node && node.type === "ArrayExpression" && match(matcher, node["elements"]);
}

export function isAssignmentExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "AssignmentExpression";
  }

  const _m0_ = matchers["operator"];
  const _m1_ = matchers["left"];
  const _m2_ = matchers["right"];

  return node =>
    node &&
    node.type === "AssignmentExpression" &&
    (!_m0_ || match(_m0_, node["operator"])) &&
    (!_m1_ || match(_m1_, node["left"])) &&
    (!_m2_ || match(_m2_, node["right"]));
}

export function isBinaryExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "BinaryExpression";
  }

  const _m0_ = matchers["operator"];
  const _m1_ = matchers["left"];
  const _m2_ = matchers["right"];

  return node =>
    node &&
    node.type === "BinaryExpression" &&
    (!_m0_ || match(_m0_, node["operator"])) &&
    (!_m1_ || match(_m1_, node["left"])) &&
    (!_m2_ || match(_m2_, node["right"]));
}

export function isInterpreterDirective(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "InterpreterDirective";
  }

  const matcher = typeof matchers === "object" ? matchers["value"] : matchers;
  return node =>
    node &&
    node.type === "InterpreterDirective" &&
    match(matcher, node["value"]);
}

export function isDirective(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "Directive";
  }

  const matcher = typeof matchers === "object" ? matchers["value"] : matchers;
  return node =>
    node && node.type === "Directive" && match(matcher, node["value"]);
}

export function isDirectiveLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DirectiveLiteral";
  }

  const matcher = typeof matchers === "object" ? matchers["value"] : matchers;
  return node =>
    node && node.type === "DirectiveLiteral" && match(matcher, node["value"]);
}

export function isBlockStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "BlockStatement";
  }

  const _m0_ = matchers["body"];
  const _m1_ = matchers["directives"];

  return node =>
    node &&
    node.type === "BlockStatement" &&
    (!_m0_ || match(_m0_, node["body"])) &&
    (!_m1_ || match(_m1_, node["directives"]));
}

export function isBreakStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "BreakStatement";
  }

  const matcher = typeof matchers === "object" ? matchers["label"] : matchers;
  return node =>
    node && node.type === "BreakStatement" && match(matcher, node["label"]);
}

export function isCallExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "CallExpression";
  }

  const _m0_ = matchers["callee"];
  const _m1_ = matchers["arguments"];

  return node =>
    node &&
    node.type === "CallExpression" &&
    (!_m0_ || match(_m0_, node["callee"])) &&
    (!_m1_ || match(_m1_, node["arguments"]));
}

export function isCatchClause(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "CatchClause";
  }

  const _m0_ = matchers["param"];
  const _m1_ = matchers["body"];

  return node =>
    node &&
    node.type === "CatchClause" &&
    (!_m0_ || match(_m0_, node["param"])) &&
    (!_m1_ || match(_m1_, node["body"]));
}

export function isConditionalExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ConditionalExpression";
  }

  const _m0_ = matchers["test"];
  const _m1_ = matchers["consequent"];
  const _m2_ = matchers["alternate"];

  return node =>
    node &&
    node.type === "ConditionalExpression" &&
    (!_m0_ || match(_m0_, node["test"])) &&
    (!_m1_ || match(_m1_, node["consequent"])) &&
    (!_m2_ || match(_m2_, node["alternate"]));
}

export function isContinueStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ContinueStatement";
  }

  const matcher = typeof matchers === "object" ? matchers["label"] : matchers;
  return node =>
    node && node.type === "ContinueStatement" && match(matcher, node["label"]);
}

function __isDebuggerStatement(node) {
  return node && node.type === "DebuggerStatement";
}
export function isDebuggerStatement() {
  return __isDebuggerStatement;
}

export function isDoWhileStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DoWhileStatement";
  }

  const _m0_ = matchers["test"];
  const _m1_ = matchers["body"];

  return node =>
    node &&
    node.type === "DoWhileStatement" &&
    (!_m0_ || match(_m0_, node["test"])) &&
    (!_m1_ || match(_m1_, node["body"]));
}

function __isEmptyStatement(node) {
  return node && node.type === "EmptyStatement";
}
export function isEmptyStatement() {
  return __isEmptyStatement;
}

export function isExpressionStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ExpressionStatement";
  }

  const matcher =
    typeof matchers === "object" ? matchers["expression"] : matchers;
  return node =>
    node &&
    node.type === "ExpressionStatement" &&
    match(matcher, node["expression"]);
}

export function isFile(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "File";
  }

  const _m0_ = matchers["program"];
  const _m1_ = matchers["comments"];
  const _m2_ = matchers["tokens"];

  return node =>
    node &&
    node.type === "File" &&
    (!_m0_ || match(_m0_, node["program"])) &&
    (!_m1_ || match(_m1_, node["comments"])) &&
    (!_m2_ || match(_m2_, node["tokens"]));
}

export function isForInStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ForInStatement";
  }

  const _m0_ = matchers["left"];
  const _m1_ = matchers["right"];
  const _m2_ = matchers["body"];

  return node =>
    node &&
    node.type === "ForInStatement" &&
    (!_m0_ || match(_m0_, node["left"])) &&
    (!_m1_ || match(_m1_, node["right"])) &&
    (!_m2_ || match(_m2_, node["body"]));
}

export function isForStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ForStatement";
  }

  const _m0_ = matchers["init"];
  const _m1_ = matchers["test"];
  const _m2_ = matchers["update"];
  const _m3_ = matchers["body"];

  return node =>
    node &&
    node.type === "ForStatement" &&
    (!_m0_ || match(_m0_, node["init"])) &&
    (!_m1_ || match(_m1_, node["test"])) &&
    (!_m2_ || match(_m2_, node["update"])) &&
    (!_m3_ || match(_m3_, node["body"]));
}

export function isFunctionDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "FunctionDeclaration";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["params"];
  const _m2_ = matchers["body"];
  const _m3_ = matchers["generator"];
  const _m4_ = matchers["async"];

  return node =>
    node &&
    node.type === "FunctionDeclaration" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["params"])) &&
    (!_m2_ || match(_m2_, node["body"])) &&
    (!_m3_ || match(_m3_, node["generator"])) &&
    (!_m4_ || match(_m4_, node["async"]));
}

export function isFunctionExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "FunctionExpression";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["params"];
  const _m2_ = matchers["body"];
  const _m3_ = matchers["generator"];
  const _m4_ = matchers["async"];

  return node =>
    node &&
    node.type === "FunctionExpression" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["params"])) &&
    (!_m2_ || match(_m2_, node["body"])) &&
    (!_m3_ || match(_m3_, node["generator"])) &&
    (!_m4_ || match(_m4_, node["async"]));
}

export function isIdentifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "Identifier";
  }

  const matcher = typeof matchers === "object" ? matchers["name"] : matchers;
  return node =>
    node && node.type === "Identifier" && match(matcher, node["name"]);
}

export function isIfStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "IfStatement";
  }

  const _m0_ = matchers["test"];
  const _m1_ = matchers["consequent"];
  const _m2_ = matchers["alternate"];

  return node =>
    node &&
    node.type === "IfStatement" &&
    (!_m0_ || match(_m0_, node["test"])) &&
    (!_m1_ || match(_m1_, node["consequent"])) &&
    (!_m2_ || match(_m2_, node["alternate"]));
}

export function isLabeledStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "LabeledStatement";
  }

  const _m0_ = matchers["label"];
  const _m1_ = matchers["body"];

  return node =>
    node &&
    node.type === "LabeledStatement" &&
    (!_m0_ || match(_m0_, node["label"])) &&
    (!_m1_ || match(_m1_, node["body"]));
}

export function isStringLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "StringLiteral";
  }

  const matcher = typeof matchers === "object" ? matchers["value"] : matchers;
  return node =>
    node && node.type === "StringLiteral" && match(matcher, node["value"]);
}

export function isNumericLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "NumericLiteral";
  }

  const matcher = typeof matchers === "object" ? matchers["value"] : matchers;
  return node =>
    node && node.type === "NumericLiteral" && match(matcher, node["value"]);
}

function __isNullLiteral(node) {
  return node && node.type === "NullLiteral";
}
export function isNullLiteral() {
  return __isNullLiteral;
}

export function isBooleanLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "BooleanLiteral";
  }

  const matcher = typeof matchers === "object" ? matchers["value"] : matchers;
  return node =>
    node && node.type === "BooleanLiteral" && match(matcher, node["value"]);
}

export function isRegExpLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "RegExpLiteral";
  }

  const _m0_ = matchers["pattern"];
  const _m1_ = matchers["flags"];

  return node =>
    node &&
    node.type === "RegExpLiteral" &&
    (!_m0_ || match(_m0_, node["pattern"])) &&
    (!_m1_ || match(_m1_, node["flags"]));
}

export function isLogicalExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "LogicalExpression";
  }

  const _m0_ = matchers["operator"];
  const _m1_ = matchers["left"];
  const _m2_ = matchers["right"];

  return node =>
    node &&
    node.type === "LogicalExpression" &&
    (!_m0_ || match(_m0_, node["operator"])) &&
    (!_m1_ || match(_m1_, node["left"])) &&
    (!_m2_ || match(_m2_, node["right"]));
}

export function isMemberExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "MemberExpression";
  }

  const _m0_ = matchers["object"];
  const _m1_ = matchers["property"];
  const _m2_ = matchers["computed"];
  const _m3_ = matchers["optional"];

  return node =>
    node &&
    node.type === "MemberExpression" &&
    (!_m0_ || match(_m0_, node["object"])) &&
    (!_m1_ || match(_m1_, node["property"])) &&
    (!_m2_ || match(_m2_, node["computed"])) &&
    (!_m3_ || match(_m3_, node["optional"]));
}

export function isNewExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "NewExpression";
  }

  const _m0_ = matchers["callee"];
  const _m1_ = matchers["arguments"];

  return node =>
    node &&
    node.type === "NewExpression" &&
    (!_m0_ || match(_m0_, node["callee"])) &&
    (!_m1_ || match(_m1_, node["arguments"]));
}

export function isProgram(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "Program";
  }

  const _m0_ = matchers["body"];
  const _m1_ = matchers["directives"];
  const _m2_ = matchers["sourceType"];
  const _m3_ = matchers["interpreter"];

  return node =>
    node &&
    node.type === "Program" &&
    (!_m0_ || match(_m0_, node["body"])) &&
    (!_m1_ || match(_m1_, node["directives"])) &&
    (!_m2_ || match(_m2_, node["sourceType"])) &&
    (!_m3_ || match(_m3_, node["interpreter"]));
}

export function isObjectExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectExpression";
  }

  const matcher =
    typeof matchers === "object" ? matchers["properties"] : matchers;
  return node =>
    node &&
    node.type === "ObjectExpression" &&
    match(matcher, node["properties"]);
}

export function isObjectMethod(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectMethod";
  }

  const _m0_ = matchers["kind"];
  const _m1_ = matchers["key"];
  const _m2_ = matchers["params"];
  const _m3_ = matchers["body"];
  const _m4_ = matchers["computed"];

  return node =>
    node &&
    node.type === "ObjectMethod" &&
    (!_m0_ || match(_m0_, node["kind"])) &&
    (!_m1_ || match(_m1_, node["key"])) &&
    (!_m2_ || match(_m2_, node["params"])) &&
    (!_m3_ || match(_m3_, node["body"])) &&
    (!_m4_ || match(_m4_, node["computed"]));
}

export function isObjectProperty(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectProperty";
  }

  const _m0_ = matchers["key"];
  const _m1_ = matchers["value"];
  const _m2_ = matchers["computed"];
  const _m3_ = matchers["shorthand"];
  const _m4_ = matchers["decorators"];

  return node =>
    node &&
    node.type === "ObjectProperty" &&
    (!_m0_ || match(_m0_, node["key"])) &&
    (!_m1_ || match(_m1_, node["value"])) &&
    (!_m2_ || match(_m2_, node["computed"])) &&
    (!_m3_ || match(_m3_, node["shorthand"])) &&
    (!_m4_ || match(_m4_, node["decorators"]));
}

export function isRestElement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "RestElement";
  }

  const matcher =
    typeof matchers === "object" ? matchers["argument"] : matchers;
  return node =>
    node && node.type === "RestElement" && match(matcher, node["argument"]);
}

export function isReturnStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ReturnStatement";
  }

  const matcher =
    typeof matchers === "object" ? matchers["argument"] : matchers;
  return node =>
    node && node.type === "ReturnStatement" && match(matcher, node["argument"]);
}

export function isSequenceExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "SequenceExpression";
  }

  const matcher =
    typeof matchers === "object" ? matchers["expressions"] : matchers;
  return node =>
    node &&
    node.type === "SequenceExpression" &&
    match(matcher, node["expressions"]);
}

export function isSwitchCase(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "SwitchCase";
  }

  const _m0_ = matchers["test"];
  const _m1_ = matchers["consequent"];

  return node =>
    node &&
    node.type === "SwitchCase" &&
    (!_m0_ || match(_m0_, node["test"])) &&
    (!_m1_ || match(_m1_, node["consequent"]));
}

export function isSwitchStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "SwitchStatement";
  }

  const _m0_ = matchers["discriminant"];
  const _m1_ = matchers["cases"];

  return node =>
    node &&
    node.type === "SwitchStatement" &&
    (!_m0_ || match(_m0_, node["discriminant"])) &&
    (!_m1_ || match(_m1_, node["cases"]));
}

function __isThisExpression(node) {
  return node && node.type === "ThisExpression";
}
export function isThisExpression() {
  return __isThisExpression;
}

export function isThrowStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ThrowStatement";
  }

  const matcher =
    typeof matchers === "object" ? matchers["argument"] : matchers;
  return node =>
    node && node.type === "ThrowStatement" && match(matcher, node["argument"]);
}

export function isTryStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TryStatement";
  }

  const _m0_ = matchers["block"];
  const _m1_ = matchers["handler"];
  const _m2_ = matchers["finalizer"];

  return node =>
    node &&
    node.type === "TryStatement" &&
    (!_m0_ || match(_m0_, node["block"])) &&
    (!_m1_ || match(_m1_, node["handler"])) &&
    (!_m2_ || match(_m2_, node["finalizer"]));
}

export function isUnaryExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "UnaryExpression";
  }

  const _m0_ = matchers["operator"];
  const _m1_ = matchers["argument"];
  const _m2_ = matchers["prefix"];

  return node =>
    node &&
    node.type === "UnaryExpression" &&
    (!_m0_ || match(_m0_, node["operator"])) &&
    (!_m1_ || match(_m1_, node["argument"])) &&
    (!_m2_ || match(_m2_, node["prefix"]));
}

export function isUpdateExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "UpdateExpression";
  }

  const _m0_ = matchers["operator"];
  const _m1_ = matchers["argument"];
  const _m2_ = matchers["prefix"];

  return node =>
    node &&
    node.type === "UpdateExpression" &&
    (!_m0_ || match(_m0_, node["operator"])) &&
    (!_m1_ || match(_m1_, node["argument"])) &&
    (!_m2_ || match(_m2_, node["prefix"]));
}

export function isVariableDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "VariableDeclaration";
  }

  const _m0_ = matchers["kind"];
  const _m1_ = matchers["declarations"];

  return node =>
    node &&
    node.type === "VariableDeclaration" &&
    (!_m0_ || match(_m0_, node["kind"])) &&
    (!_m1_ || match(_m1_, node["declarations"]));
}

export function isVariableDeclarator(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "VariableDeclarator";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["init"];

  return node =>
    node &&
    node.type === "VariableDeclarator" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["init"]));
}

export function isWhileStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "WhileStatement";
  }

  const _m0_ = matchers["test"];
  const _m1_ = matchers["body"];

  return node =>
    node &&
    node.type === "WhileStatement" &&
    (!_m0_ || match(_m0_, node["test"])) &&
    (!_m1_ || match(_m1_, node["body"]));
}

export function isWithStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "WithStatement";
  }

  const _m0_ = matchers["object"];
  const _m1_ = matchers["body"];

  return node =>
    node &&
    node.type === "WithStatement" &&
    (!_m0_ || match(_m0_, node["object"])) &&
    (!_m1_ || match(_m1_, node["body"]));
}

export function isAssignmentPattern(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "AssignmentPattern";
  }

  const _m0_ = matchers["left"];
  const _m1_ = matchers["right"];

  return node =>
    node &&
    node.type === "AssignmentPattern" &&
    (!_m0_ || match(_m0_, node["left"])) &&
    (!_m1_ || match(_m1_, node["right"]));
}

export function isArrayPattern(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ArrayPattern";
  }

  const matcher =
    typeof matchers === "object" ? matchers["elements"] : matchers;
  return node =>
    node && node.type === "ArrayPattern" && match(matcher, node["elements"]);
}

export function isArrowFunctionExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ArrowFunctionExpression";
  }

  const _m0_ = matchers["params"];
  const _m1_ = matchers["body"];
  const _m2_ = matchers["async"];

  return node =>
    node &&
    node.type === "ArrowFunctionExpression" &&
    (!_m0_ || match(_m0_, node["params"])) &&
    (!_m1_ || match(_m1_, node["body"])) &&
    (!_m2_ || match(_m2_, node["async"]));
}

export function isClassBody(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ClassBody";
  }

  const matcher = typeof matchers === "object" ? matchers["body"] : matchers;
  return node =>
    node && node.type === "ClassBody" && match(matcher, node["body"]);
}

export function isClassDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ClassDeclaration";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["superClass"];
  const _m2_ = matchers["body"];
  const _m3_ = matchers["decorators"];

  return node =>
    node &&
    node.type === "ClassDeclaration" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["superClass"])) &&
    (!_m2_ || match(_m2_, node["body"])) &&
    (!_m3_ || match(_m3_, node["decorators"]));
}

export function isClassExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ClassExpression";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["superClass"];
  const _m2_ = matchers["body"];
  const _m3_ = matchers["decorators"];

  return node =>
    node &&
    node.type === "ClassExpression" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["superClass"])) &&
    (!_m2_ || match(_m2_, node["body"])) &&
    (!_m3_ || match(_m3_, node["decorators"]));
}

export function isExportAllDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ExportAllDeclaration";
  }

  const matcher = typeof matchers === "object" ? matchers["source"] : matchers;
  return node =>
    node &&
    node.type === "ExportAllDeclaration" &&
    match(matcher, node["source"]);
}

export function isExportDefaultDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ExportDefaultDeclaration";
  }

  const matcher =
    typeof matchers === "object" ? matchers["declaration"] : matchers;
  return node =>
    node &&
    node.type === "ExportDefaultDeclaration" &&
    match(matcher, node["declaration"]);
}

export function isExportNamedDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ExportNamedDeclaration";
  }

  const _m0_ = matchers["declaration"];
  const _m1_ = matchers["specifiers"];
  const _m2_ = matchers["source"];

  return node =>
    node &&
    node.type === "ExportNamedDeclaration" &&
    (!_m0_ || match(_m0_, node["declaration"])) &&
    (!_m1_ || match(_m1_, node["specifiers"])) &&
    (!_m2_ || match(_m2_, node["source"]));
}

export function isExportSpecifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ExportSpecifier";
  }

  const _m0_ = matchers["local"];
  const _m1_ = matchers["exported"];

  return node =>
    node &&
    node.type === "ExportSpecifier" &&
    (!_m0_ || match(_m0_, node["local"])) &&
    (!_m1_ || match(_m1_, node["exported"]));
}

export function isForOfStatement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ForOfStatement";
  }

  const _m0_ = matchers["left"];
  const _m1_ = matchers["right"];
  const _m2_ = matchers["body"];

  return node =>
    node &&
    node.type === "ForOfStatement" &&
    (!_m0_ || match(_m0_, node["left"])) &&
    (!_m1_ || match(_m1_, node["right"])) &&
    (!_m2_ || match(_m2_, node["body"]));
}

export function isImportDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ImportDeclaration";
  }

  const _m0_ = matchers["specifiers"];
  const _m1_ = matchers["source"];

  return node =>
    node &&
    node.type === "ImportDeclaration" &&
    (!_m0_ || match(_m0_, node["specifiers"])) &&
    (!_m1_ || match(_m1_, node["source"]));
}

export function isImportDefaultSpecifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ImportDefaultSpecifier";
  }

  const matcher = typeof matchers === "object" ? matchers["local"] : matchers;
  return node =>
    node &&
    node.type === "ImportDefaultSpecifier" &&
    match(matcher, node["local"]);
}

export function isImportNamespaceSpecifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ImportNamespaceSpecifier";
  }

  const matcher = typeof matchers === "object" ? matchers["local"] : matchers;
  return node =>
    node &&
    node.type === "ImportNamespaceSpecifier" &&
    match(matcher, node["local"]);
}

export function isImportSpecifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ImportSpecifier";
  }

  const _m0_ = matchers["local"];
  const _m1_ = matchers["imported"];

  return node =>
    node &&
    node.type === "ImportSpecifier" &&
    (!_m0_ || match(_m0_, node["local"])) &&
    (!_m1_ || match(_m1_, node["imported"]));
}

export function isMetaProperty(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "MetaProperty";
  }

  const _m0_ = matchers["meta"];
  const _m1_ = matchers["property"];

  return node =>
    node &&
    node.type === "MetaProperty" &&
    (!_m0_ || match(_m0_, node["meta"])) &&
    (!_m1_ || match(_m1_, node["property"]));
}

export function isClassMethod(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ClassMethod";
  }

  const _m0_ = matchers["kind"];
  const _m1_ = matchers["key"];
  const _m2_ = matchers["params"];
  const _m3_ = matchers["body"];
  const _m4_ = matchers["computed"];
  const _m5_ = matchers["static"];

  return node =>
    node &&
    node.type === "ClassMethod" &&
    (!_m0_ || match(_m0_, node["kind"])) &&
    (!_m1_ || match(_m1_, node["key"])) &&
    (!_m2_ || match(_m2_, node["params"])) &&
    (!_m3_ || match(_m3_, node["body"])) &&
    (!_m4_ || match(_m4_, node["computed"])) &&
    (!_m5_ || match(_m5_, node["static"]));
}

export function isObjectPattern(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectPattern";
  }

  const matcher =
    typeof matchers === "object" ? matchers["properties"] : matchers;
  return node =>
    node && node.type === "ObjectPattern" && match(matcher, node["properties"]);
}

export function isSpreadElement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "SpreadElement";
  }

  const matcher =
    typeof matchers === "object" ? matchers["argument"] : matchers;
  return node =>
    node && node.type === "SpreadElement" && match(matcher, node["argument"]);
}

function __isSuper(node) {
  return node && node.type === "Super";
}
export function isSuper() {
  return __isSuper;
}

export function isTaggedTemplateExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TaggedTemplateExpression";
  }

  const _m0_ = matchers["tag"];
  const _m1_ = matchers["quasi"];

  return node =>
    node &&
    node.type === "TaggedTemplateExpression" &&
    (!_m0_ || match(_m0_, node["tag"])) &&
    (!_m1_ || match(_m1_, node["quasi"]));
}

export function isTemplateElement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TemplateElement";
  }

  const _m0_ = matchers["value"];
  const _m1_ = matchers["tail"];

  return node =>
    node &&
    node.type === "TemplateElement" &&
    (!_m0_ || match(_m0_, node["value"])) &&
    (!_m1_ || match(_m1_, node["tail"]));
}

export function isTemplateLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TemplateLiteral";
  }

  const _m0_ = matchers["quasis"];
  const _m1_ = matchers["expressions"];

  return node =>
    node &&
    node.type === "TemplateLiteral" &&
    (!_m0_ || match(_m0_, node["quasis"])) &&
    (!_m1_ || match(_m1_, node["expressions"]));
}

export function isYieldExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "YieldExpression";
  }

  const _m0_ = matchers["argument"];
  const _m1_ = matchers["delegate"];

  return node =>
    node &&
    node.type === "YieldExpression" &&
    (!_m0_ || match(_m0_, node["argument"])) &&
    (!_m1_ || match(_m1_, node["delegate"]));
}

function __isAnyTypeAnnotation(node) {
  return node && node.type === "AnyTypeAnnotation";
}
export function isAnyTypeAnnotation() {
  return __isAnyTypeAnnotation;
}

export function isArrayTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ArrayTypeAnnotation";
  }

  const matcher =
    typeof matchers === "object" ? matchers["elementType"] : matchers;
  return node =>
    node &&
    node.type === "ArrayTypeAnnotation" &&
    match(matcher, node["elementType"]);
}

function __isBooleanTypeAnnotation(node) {
  return node && node.type === "BooleanTypeAnnotation";
}
export function isBooleanTypeAnnotation() {
  return __isBooleanTypeAnnotation;
}

export function isBooleanLiteralTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "BooleanLiteralTypeAnnotation";
  }

  const matcher = typeof matchers === "object" ? matchers["value"] : matchers;
  return node =>
    node &&
    node.type === "BooleanLiteralTypeAnnotation" &&
    match(matcher, node["value"]);
}

function __isNullLiteralTypeAnnotation(node) {
  return node && node.type === "NullLiteralTypeAnnotation";
}
export function isNullLiteralTypeAnnotation() {
  return __isNullLiteralTypeAnnotation;
}

export function isClassImplements(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ClassImplements";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["typeParameters"];

  return node =>
    node &&
    node.type === "ClassImplements" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["typeParameters"]));
}

export function isDeclareClass(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareClass";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["typeParameters"];
  const _m2_ = matchers["extends"];
  const _m3_ = matchers["body"];

  return node =>
    node &&
    node.type === "DeclareClass" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["typeParameters"])) &&
    (!_m2_ || match(_m2_, node["extends"])) &&
    (!_m3_ || match(_m3_, node["body"]));
}

export function isDeclareFunction(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareFunction";
  }

  const matcher = typeof matchers === "object" ? matchers["id"] : matchers;
  return node =>
    node && node.type === "DeclareFunction" && match(matcher, node["id"]);
}

export function isDeclareInterface(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareInterface";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["typeParameters"];
  const _m2_ = matchers["extends"];
  const _m3_ = matchers["body"];

  return node =>
    node &&
    node.type === "DeclareInterface" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["typeParameters"])) &&
    (!_m2_ || match(_m2_, node["extends"])) &&
    (!_m3_ || match(_m3_, node["body"]));
}

export function isDeclareModule(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareModule";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["body"];
  const _m2_ = matchers["kind"];

  return node =>
    node &&
    node.type === "DeclareModule" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["body"])) &&
    (!_m2_ || match(_m2_, node["kind"]));
}

export function isDeclareModuleExports(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareModuleExports";
  }

  const matcher =
    typeof matchers === "object" ? matchers["typeAnnotation"] : matchers;
  return node =>
    node &&
    node.type === "DeclareModuleExports" &&
    match(matcher, node["typeAnnotation"]);
}

export function isDeclareTypeAlias(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareTypeAlias";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["typeParameters"];
  const _m2_ = matchers["right"];

  return node =>
    node &&
    node.type === "DeclareTypeAlias" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["typeParameters"])) &&
    (!_m2_ || match(_m2_, node["right"]));
}

export function isDeclareOpaqueType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareOpaqueType";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["typeParameters"];
  const _m2_ = matchers["supertype"];

  return node =>
    node &&
    node.type === "DeclareOpaqueType" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["typeParameters"])) &&
    (!_m2_ || match(_m2_, node["supertype"]));
}

export function isDeclareVariable(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareVariable";
  }

  const matcher = typeof matchers === "object" ? matchers["id"] : matchers;
  return node =>
    node && node.type === "DeclareVariable" && match(matcher, node["id"]);
}

export function isDeclareExportDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareExportDeclaration";
  }

  const _m0_ = matchers["declaration"];
  const _m1_ = matchers["specifiers"];
  const _m2_ = matchers["source"];

  return node =>
    node &&
    node.type === "DeclareExportDeclaration" &&
    (!_m0_ || match(_m0_, node["declaration"])) &&
    (!_m1_ || match(_m1_, node["specifiers"])) &&
    (!_m2_ || match(_m2_, node["source"]));
}

export function isDeclareExportAllDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclareExportAllDeclaration";
  }

  const matcher = typeof matchers === "object" ? matchers["source"] : matchers;
  return node =>
    node &&
    node.type === "DeclareExportAllDeclaration" &&
    match(matcher, node["source"]);
}

export function isDeclaredPredicate(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DeclaredPredicate";
  }

  const matcher = typeof matchers === "object" ? matchers["value"] : matchers;
  return node =>
    node && node.type === "DeclaredPredicate" && match(matcher, node["value"]);
}

function __isExistsTypeAnnotation(node) {
  return node && node.type === "ExistsTypeAnnotation";
}
export function isExistsTypeAnnotation() {
  return __isExistsTypeAnnotation;
}

export function isFunctionTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "FunctionTypeAnnotation";
  }

  const _m0_ = matchers["typeParameters"];
  const _m1_ = matchers["params"];
  const _m2_ = matchers["rest"];
  const _m3_ = matchers["returnType"];

  return node =>
    node &&
    node.type === "FunctionTypeAnnotation" &&
    (!_m0_ || match(_m0_, node["typeParameters"])) &&
    (!_m1_ || match(_m1_, node["params"])) &&
    (!_m2_ || match(_m2_, node["rest"])) &&
    (!_m3_ || match(_m3_, node["returnType"]));
}

export function isFunctionTypeParam(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "FunctionTypeParam";
  }

  const _m0_ = matchers["name"];
  const _m1_ = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "FunctionTypeParam" &&
    (!_m0_ || match(_m0_, node["name"])) &&
    (!_m1_ || match(_m1_, node["typeAnnotation"]));
}

export function isGenericTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "GenericTypeAnnotation";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["typeParameters"];

  return node =>
    node &&
    node.type === "GenericTypeAnnotation" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["typeParameters"]));
}

function __isInferredPredicate(node) {
  return node && node.type === "InferredPredicate";
}
export function isInferredPredicate() {
  return __isInferredPredicate;
}

export function isInterfaceExtends(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "InterfaceExtends";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["typeParameters"];

  return node =>
    node &&
    node.type === "InterfaceExtends" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["typeParameters"]));
}

export function isInterfaceDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "InterfaceDeclaration";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["typeParameters"];
  const _m2_ = matchers["extends"];
  const _m3_ = matchers["body"];

  return node =>
    node &&
    node.type === "InterfaceDeclaration" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["typeParameters"])) &&
    (!_m2_ || match(_m2_, node["extends"])) &&
    (!_m3_ || match(_m3_, node["body"]));
}

export function isInterfaceTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "InterfaceTypeAnnotation";
  }

  const _m0_ = matchers["extends"];
  const _m1_ = matchers["body"];

  return node =>
    node &&
    node.type === "InterfaceTypeAnnotation" &&
    (!_m0_ || match(_m0_, node["extends"])) &&
    (!_m1_ || match(_m1_, node["body"]));
}

export function isIntersectionTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "IntersectionTypeAnnotation";
  }

  const matcher = typeof matchers === "object" ? matchers["types"] : matchers;
  return node =>
    node &&
    node.type === "IntersectionTypeAnnotation" &&
    match(matcher, node["types"]);
}

function __isMixedTypeAnnotation(node) {
  return node && node.type === "MixedTypeAnnotation";
}
export function isMixedTypeAnnotation() {
  return __isMixedTypeAnnotation;
}

function __isEmptyTypeAnnotation(node) {
  return node && node.type === "EmptyTypeAnnotation";
}
export function isEmptyTypeAnnotation() {
  return __isEmptyTypeAnnotation;
}

export function isNullableTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "NullableTypeAnnotation";
  }

  const matcher =
    typeof matchers === "object" ? matchers["typeAnnotation"] : matchers;
  return node =>
    node &&
    node.type === "NullableTypeAnnotation" &&
    match(matcher, node["typeAnnotation"]);
}

export function isNumberLiteralTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "NumberLiteralTypeAnnotation";
  }

  const matcher = typeof matchers === "object" ? matchers["value"] : matchers;
  return node =>
    node &&
    node.type === "NumberLiteralTypeAnnotation" &&
    match(matcher, node["value"]);
}

function __isNumberTypeAnnotation(node) {
  return node && node.type === "NumberTypeAnnotation";
}
export function isNumberTypeAnnotation() {
  return __isNumberTypeAnnotation;
}

export function isObjectTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectTypeAnnotation";
  }

  const _m0_ = matchers["properties"];
  const _m1_ = matchers["indexers"];
  const _m2_ = matchers["callProperties"];
  const _m3_ = matchers["internalSlots"];
  const _m4_ = matchers["exact"];

  return node =>
    node &&
    node.type === "ObjectTypeAnnotation" &&
    (!_m0_ || match(_m0_, node["properties"])) &&
    (!_m1_ || match(_m1_, node["indexers"])) &&
    (!_m2_ || match(_m2_, node["callProperties"])) &&
    (!_m3_ || match(_m3_, node["internalSlots"])) &&
    (!_m4_ || match(_m4_, node["exact"]));
}

export function isObjectTypeInternalSlot(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectTypeInternalSlot";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["value"];
  const _m2_ = matchers["optional"];
  const _m3_ = matchers["static"];
  const _m4_ = matchers["method"];

  return node =>
    node &&
    node.type === "ObjectTypeInternalSlot" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["value"])) &&
    (!_m2_ || match(_m2_, node["optional"])) &&
    (!_m3_ || match(_m3_, node["static"])) &&
    (!_m4_ || match(_m4_, node["method"]));
}

export function isObjectTypeCallProperty(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectTypeCallProperty";
  }

  const matcher = typeof matchers === "object" ? matchers["value"] : matchers;
  return node =>
    node &&
    node.type === "ObjectTypeCallProperty" &&
    match(matcher, node["value"]);
}

export function isObjectTypeIndexer(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectTypeIndexer";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["key"];
  const _m2_ = matchers["value"];
  const _m3_ = matchers["variance"];

  return node =>
    node &&
    node.type === "ObjectTypeIndexer" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["key"])) &&
    (!_m2_ || match(_m2_, node["value"])) &&
    (!_m3_ || match(_m3_, node["variance"]));
}

export function isObjectTypeProperty(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectTypeProperty";
  }

  const _m0_ = matchers["key"];
  const _m1_ = matchers["value"];
  const _m2_ = matchers["variance"];

  return node =>
    node &&
    node.type === "ObjectTypeProperty" &&
    (!_m0_ || match(_m0_, node["key"])) &&
    (!_m1_ || match(_m1_, node["value"])) &&
    (!_m2_ || match(_m2_, node["variance"]));
}

export function isObjectTypeSpreadProperty(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ObjectTypeSpreadProperty";
  }

  const matcher =
    typeof matchers === "object" ? matchers["argument"] : matchers;
  return node =>
    node &&
    node.type === "ObjectTypeSpreadProperty" &&
    match(matcher, node["argument"]);
}

export function isOpaqueType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "OpaqueType";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["typeParameters"];
  const _m2_ = matchers["supertype"];
  const _m3_ = matchers["impltype"];

  return node =>
    node &&
    node.type === "OpaqueType" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["typeParameters"])) &&
    (!_m2_ || match(_m2_, node["supertype"])) &&
    (!_m3_ || match(_m3_, node["impltype"]));
}

export function isQualifiedTypeIdentifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "QualifiedTypeIdentifier";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["qualification"];

  return node =>
    node &&
    node.type === "QualifiedTypeIdentifier" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["qualification"]));
}

export function isStringLiteralTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "StringLiteralTypeAnnotation";
  }

  const matcher = typeof matchers === "object" ? matchers["value"] : matchers;
  return node =>
    node &&
    node.type === "StringLiteralTypeAnnotation" &&
    match(matcher, node["value"]);
}

function __isStringTypeAnnotation(node) {
  return node && node.type === "StringTypeAnnotation";
}
export function isStringTypeAnnotation() {
  return __isStringTypeAnnotation;
}

function __isThisTypeAnnotation(node) {
  return node && node.type === "ThisTypeAnnotation";
}
export function isThisTypeAnnotation() {
  return __isThisTypeAnnotation;
}

export function isTupleTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TupleTypeAnnotation";
  }

  const matcher = typeof matchers === "object" ? matchers["types"] : matchers;
  return node =>
    node &&
    node.type === "TupleTypeAnnotation" &&
    match(matcher, node["types"]);
}

export function isTypeofTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TypeofTypeAnnotation";
  }

  const matcher =
    typeof matchers === "object" ? matchers["argument"] : matchers;
  return node =>
    node &&
    node.type === "TypeofTypeAnnotation" &&
    match(matcher, node["argument"]);
}

export function isTypeAlias(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TypeAlias";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["typeParameters"];
  const _m2_ = matchers["right"];

  return node =>
    node &&
    node.type === "TypeAlias" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["typeParameters"])) &&
    (!_m2_ || match(_m2_, node["right"]));
}

export function isTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TypeAnnotation";
  }

  const matcher =
    typeof matchers === "object" ? matchers["typeAnnotation"] : matchers;
  return node =>
    node &&
    node.type === "TypeAnnotation" &&
    match(matcher, node["typeAnnotation"]);
}

export function isTypeCastExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TypeCastExpression";
  }

  const _m0_ = matchers["expression"];
  const _m1_ = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TypeCastExpression" &&
    (!_m0_ || match(_m0_, node["expression"])) &&
    (!_m1_ || match(_m1_, node["typeAnnotation"]));
}

export function isTypeParameter(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TypeParameter";
  }

  const _m0_ = matchers["bound"];
  const _m1_ = matchers["default"];
  const _m2_ = matchers["variance"];

  return node =>
    node &&
    node.type === "TypeParameter" &&
    (!_m0_ || match(_m0_, node["bound"])) &&
    (!_m1_ || match(_m1_, node["default"])) &&
    (!_m2_ || match(_m2_, node["variance"]));
}

export function isTypeParameterDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TypeParameterDeclaration";
  }

  const matcher = typeof matchers === "object" ? matchers["params"] : matchers;
  return node =>
    node &&
    node.type === "TypeParameterDeclaration" &&
    match(matcher, node["params"]);
}

export function isTypeParameterInstantiation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TypeParameterInstantiation";
  }

  const matcher = typeof matchers === "object" ? matchers["params"] : matchers;
  return node =>
    node &&
    node.type === "TypeParameterInstantiation" &&
    match(matcher, node["params"]);
}

export function isUnionTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "UnionTypeAnnotation";
  }

  const matcher = typeof matchers === "object" ? matchers["types"] : matchers;
  return node =>
    node &&
    node.type === "UnionTypeAnnotation" &&
    match(matcher, node["types"]);
}

export function isVariance(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "Variance";
  }

  const matcher = typeof matchers === "object" ? matchers["kind"] : matchers;
  return node =>
    node && node.type === "Variance" && match(matcher, node["kind"]);
}

function __isVoidTypeAnnotation(node) {
  return node && node.type === "VoidTypeAnnotation";
}
export function isVoidTypeAnnotation() {
  return __isVoidTypeAnnotation;
}

export function isJSXAttribute(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXAttribute";
  }

  const _m0_ = matchers["name"];
  const _m1_ = matchers["value"];

  return node =>
    node &&
    node.type === "JSXAttribute" &&
    (!_m0_ || match(_m0_, node["name"])) &&
    (!_m1_ || match(_m1_, node["value"]));
}

export function isJSXClosingElement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXClosingElement";
  }

  const matcher = typeof matchers === "object" ? matchers["name"] : matchers;
  return node =>
    node && node.type === "JSXClosingElement" && match(matcher, node["name"]);
}

export function isJSXElement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXElement";
  }

  const _m0_ = matchers["openingElement"];
  const _m1_ = matchers["closingElement"];
  const _m2_ = matchers["children"];
  const _m3_ = matchers["selfClosing"];

  return node =>
    node &&
    node.type === "JSXElement" &&
    (!_m0_ || match(_m0_, node["openingElement"])) &&
    (!_m1_ || match(_m1_, node["closingElement"])) &&
    (!_m2_ || match(_m2_, node["children"])) &&
    (!_m3_ || match(_m3_, node["selfClosing"]));
}

function __isJSXEmptyExpression(node) {
  return node && node.type === "JSXEmptyExpression";
}
export function isJSXEmptyExpression() {
  return __isJSXEmptyExpression;
}

export function isJSXExpressionContainer(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXExpressionContainer";
  }

  const matcher =
    typeof matchers === "object" ? matchers["expression"] : matchers;
  return node =>
    node &&
    node.type === "JSXExpressionContainer" &&
    match(matcher, node["expression"]);
}

export function isJSXSpreadChild(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXSpreadChild";
  }

  const matcher =
    typeof matchers === "object" ? matchers["expression"] : matchers;
  return node =>
    node &&
    node.type === "JSXSpreadChild" &&
    match(matcher, node["expression"]);
}

export function isJSXIdentifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXIdentifier";
  }

  const matcher = typeof matchers === "object" ? matchers["name"] : matchers;
  return node =>
    node && node.type === "JSXIdentifier" && match(matcher, node["name"]);
}

export function isJSXMemberExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXMemberExpression";
  }

  const _m0_ = matchers["object"];
  const _m1_ = matchers["property"];

  return node =>
    node &&
    node.type === "JSXMemberExpression" &&
    (!_m0_ || match(_m0_, node["object"])) &&
    (!_m1_ || match(_m1_, node["property"]));
}

export function isJSXNamespacedName(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXNamespacedName";
  }

  const _m0_ = matchers["namespace"];
  const _m1_ = matchers["name"];

  return node =>
    node &&
    node.type === "JSXNamespacedName" &&
    (!_m0_ || match(_m0_, node["namespace"])) &&
    (!_m1_ || match(_m1_, node["name"]));
}

export function isJSXOpeningElement(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXOpeningElement";
  }

  const _m0_ = matchers["name"];
  const _m1_ = matchers["attributes"];
  const _m2_ = matchers["selfClosing"];

  return node =>
    node &&
    node.type === "JSXOpeningElement" &&
    (!_m0_ || match(_m0_, node["name"])) &&
    (!_m1_ || match(_m1_, node["attributes"])) &&
    (!_m2_ || match(_m2_, node["selfClosing"]));
}

export function isJSXSpreadAttribute(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXSpreadAttribute";
  }

  const matcher =
    typeof matchers === "object" ? matchers["argument"] : matchers;
  return node =>
    node &&
    node.type === "JSXSpreadAttribute" &&
    match(matcher, node["argument"]);
}

export function isJSXText(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXText";
  }

  const matcher = typeof matchers === "object" ? matchers["value"] : matchers;
  return node =>
    node && node.type === "JSXText" && match(matcher, node["value"]);
}

export function isJSXFragment(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "JSXFragment";
  }

  const _m0_ = matchers["openingFragment"];
  const _m1_ = matchers["closingFragment"];
  const _m2_ = matchers["children"];

  return node =>
    node &&
    node.type === "JSXFragment" &&
    (!_m0_ || match(_m0_, node["openingFragment"])) &&
    (!_m1_ || match(_m1_, node["closingFragment"])) &&
    (!_m2_ || match(_m2_, node["children"]));
}

function __isJSXOpeningFragment(node) {
  return node && node.type === "JSXOpeningFragment";
}
export function isJSXOpeningFragment() {
  return __isJSXOpeningFragment;
}

function __isJSXClosingFragment(node) {
  return node && node.type === "JSXClosingFragment";
}
export function isJSXClosingFragment() {
  return __isJSXClosingFragment;
}

function __isNoop(node) {
  return node && node.type === "Noop";
}
export function isNoop() {
  return __isNoop;
}

export function isParenthesizedExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ParenthesizedExpression";
  }

  const matcher =
    typeof matchers === "object" ? matchers["expression"] : matchers;
  return node =>
    node &&
    node.type === "ParenthesizedExpression" &&
    match(matcher, node["expression"]);
}

export function isAwaitExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "AwaitExpression";
  }

  const matcher =
    typeof matchers === "object" ? matchers["argument"] : matchers;
  return node =>
    node && node.type === "AwaitExpression" && match(matcher, node["argument"]);
}

export function isBindExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "BindExpression";
  }

  const _m0_ = matchers["object"];
  const _m1_ = matchers["callee"];

  return node =>
    node &&
    node.type === "BindExpression" &&
    (!_m0_ || match(_m0_, node["object"])) &&
    (!_m1_ || match(_m1_, node["callee"]));
}

export function isClassProperty(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ClassProperty";
  }

  const _m0_ = matchers["key"];
  const _m1_ = matchers["value"];
  const _m2_ = matchers["typeAnnotation"];
  const _m3_ = matchers["decorators"];
  const _m4_ = matchers["computed"];

  return node =>
    node &&
    node.type === "ClassProperty" &&
    (!_m0_ || match(_m0_, node["key"])) &&
    (!_m1_ || match(_m1_, node["value"])) &&
    (!_m2_ || match(_m2_, node["typeAnnotation"])) &&
    (!_m3_ || match(_m3_, node["decorators"])) &&
    (!_m4_ || match(_m4_, node["computed"]));
}

export function isOptionalMemberExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "OptionalMemberExpression";
  }

  const _m0_ = matchers["object"];
  const _m1_ = matchers["property"];
  const _m2_ = matchers["computed"];
  const _m3_ = matchers["optional"];

  return node =>
    node &&
    node.type === "OptionalMemberExpression" &&
    (!_m0_ || match(_m0_, node["object"])) &&
    (!_m1_ || match(_m1_, node["property"])) &&
    (!_m2_ || match(_m2_, node["computed"])) &&
    (!_m3_ || match(_m3_, node["optional"]));
}

export function isOptionalCallExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "OptionalCallExpression";
  }

  const _m0_ = matchers["callee"];
  const _m1_ = matchers["arguments"];
  const _m2_ = matchers["optional"];

  return node =>
    node &&
    node.type === "OptionalCallExpression" &&
    (!_m0_ || match(_m0_, node["callee"])) &&
    (!_m1_ || match(_m1_, node["arguments"])) &&
    (!_m2_ || match(_m2_, node["optional"]));
}

export function isClassPrivateProperty(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ClassPrivateProperty";
  }

  const _m0_ = matchers["key"];
  const _m1_ = matchers["value"];

  return node =>
    node &&
    node.type === "ClassPrivateProperty" &&
    (!_m0_ || match(_m0_, node["key"])) &&
    (!_m1_ || match(_m1_, node["value"]));
}

function __isImport(node) {
  return node && node.type === "Import";
}
export function isImport() {
  return __isImport;
}

export function isDecorator(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "Decorator";
  }

  const matcher =
    typeof matchers === "object" ? matchers["expression"] : matchers;
  return node =>
    node && node.type === "Decorator" && match(matcher, node["expression"]);
}

export function isDoExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "DoExpression";
  }

  const matcher = typeof matchers === "object" ? matchers["body"] : matchers;
  return node =>
    node && node.type === "DoExpression" && match(matcher, node["body"]);
}

export function isExportDefaultSpecifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ExportDefaultSpecifier";
  }

  const matcher =
    typeof matchers === "object" ? matchers["exported"] : matchers;
  return node =>
    node &&
    node.type === "ExportDefaultSpecifier" &&
    match(matcher, node["exported"]);
}

export function isExportNamespaceSpecifier(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "ExportNamespaceSpecifier";
  }

  const matcher =
    typeof matchers === "object" ? matchers["exported"] : matchers;
  return node =>
    node &&
    node.type === "ExportNamespaceSpecifier" &&
    match(matcher, node["exported"]);
}

export function isPrivateName(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "PrivateName";
  }

  const matcher = typeof matchers === "object" ? matchers["id"] : matchers;
  return node =>
    node && node.type === "PrivateName" && match(matcher, node["id"]);
}

export function isBigIntLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "BigIntLiteral";
  }

  const matcher = typeof matchers === "object" ? matchers["value"] : matchers;
  return node =>
    node && node.type === "BigIntLiteral" && match(matcher, node["value"]);
}

export function isTSParameterProperty(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSParameterProperty";
  }

  const matcher =
    typeof matchers === "object" ? matchers["parameter"] : matchers;
  return node =>
    node &&
    node.type === "TSParameterProperty" &&
    match(matcher, node["parameter"]);
}

export function isTSDeclareFunction(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSDeclareFunction";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["typeParameters"];
  const _m2_ = matchers["params"];
  const _m3_ = matchers["returnType"];

  return node =>
    node &&
    node.type === "TSDeclareFunction" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["typeParameters"])) &&
    (!_m2_ || match(_m2_, node["params"])) &&
    (!_m3_ || match(_m3_, node["returnType"]));
}

export function isTSDeclareMethod(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSDeclareMethod";
  }

  const _m0_ = matchers["decorators"];
  const _m1_ = matchers["key"];
  const _m2_ = matchers["typeParameters"];
  const _m3_ = matchers["params"];
  const _m4_ = matchers["returnType"];

  return node =>
    node &&
    node.type === "TSDeclareMethod" &&
    (!_m0_ || match(_m0_, node["decorators"])) &&
    (!_m1_ || match(_m1_, node["key"])) &&
    (!_m2_ || match(_m2_, node["typeParameters"])) &&
    (!_m3_ || match(_m3_, node["params"])) &&
    (!_m4_ || match(_m4_, node["returnType"]));
}

export function isTSQualifiedName(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSQualifiedName";
  }

  const _m0_ = matchers["left"];
  const _m1_ = matchers["right"];

  return node =>
    node &&
    node.type === "TSQualifiedName" &&
    (!_m0_ || match(_m0_, node["left"])) &&
    (!_m1_ || match(_m1_, node["right"]));
}

export function isTSCallSignatureDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSCallSignatureDeclaration";
  }

  const _m0_ = matchers["typeParameters"];
  const _m1_ = matchers["parameters"];
  const _m2_ = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSCallSignatureDeclaration" &&
    (!_m0_ || match(_m0_, node["typeParameters"])) &&
    (!_m1_ || match(_m1_, node["parameters"])) &&
    (!_m2_ || match(_m2_, node["typeAnnotation"]));
}

export function isTSConstructSignatureDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSConstructSignatureDeclaration";
  }

  const _m0_ = matchers["typeParameters"];
  const _m1_ = matchers["parameters"];
  const _m2_ = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSConstructSignatureDeclaration" &&
    (!_m0_ || match(_m0_, node["typeParameters"])) &&
    (!_m1_ || match(_m1_, node["parameters"])) &&
    (!_m2_ || match(_m2_, node["typeAnnotation"]));
}

export function isTSPropertySignature(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSPropertySignature";
  }

  const _m0_ = matchers["key"];
  const _m1_ = matchers["typeAnnotation"];
  const _m2_ = matchers["initializer"];

  return node =>
    node &&
    node.type === "TSPropertySignature" &&
    (!_m0_ || match(_m0_, node["key"])) &&
    (!_m1_ || match(_m1_, node["typeAnnotation"])) &&
    (!_m2_ || match(_m2_, node["initializer"]));
}

export function isTSMethodSignature(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSMethodSignature";
  }

  const _m0_ = matchers["key"];
  const _m1_ = matchers["typeParameters"];
  const _m2_ = matchers["parameters"];
  const _m3_ = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSMethodSignature" &&
    (!_m0_ || match(_m0_, node["key"])) &&
    (!_m1_ || match(_m1_, node["typeParameters"])) &&
    (!_m2_ || match(_m2_, node["parameters"])) &&
    (!_m3_ || match(_m3_, node["typeAnnotation"]));
}

export function isTSIndexSignature(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSIndexSignature";
  }

  const _m0_ = matchers["parameters"];
  const _m1_ = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSIndexSignature" &&
    (!_m0_ || match(_m0_, node["parameters"])) &&
    (!_m1_ || match(_m1_, node["typeAnnotation"]));
}

function __isTSAnyKeyword(node) {
  return node && node.type === "TSAnyKeyword";
}
export function isTSAnyKeyword() {
  return __isTSAnyKeyword;
}

function __isTSNumberKeyword(node) {
  return node && node.type === "TSNumberKeyword";
}
export function isTSNumberKeyword() {
  return __isTSNumberKeyword;
}

function __isTSObjectKeyword(node) {
  return node && node.type === "TSObjectKeyword";
}
export function isTSObjectKeyword() {
  return __isTSObjectKeyword;
}

function __isTSBooleanKeyword(node) {
  return node && node.type === "TSBooleanKeyword";
}
export function isTSBooleanKeyword() {
  return __isTSBooleanKeyword;
}

function __isTSStringKeyword(node) {
  return node && node.type === "TSStringKeyword";
}
export function isTSStringKeyword() {
  return __isTSStringKeyword;
}

function __isTSSymbolKeyword(node) {
  return node && node.type === "TSSymbolKeyword";
}
export function isTSSymbolKeyword() {
  return __isTSSymbolKeyword;
}

function __isTSVoidKeyword(node) {
  return node && node.type === "TSVoidKeyword";
}
export function isTSVoidKeyword() {
  return __isTSVoidKeyword;
}

function __isTSUndefinedKeyword(node) {
  return node && node.type === "TSUndefinedKeyword";
}
export function isTSUndefinedKeyword() {
  return __isTSUndefinedKeyword;
}

function __isTSNullKeyword(node) {
  return node && node.type === "TSNullKeyword";
}
export function isTSNullKeyword() {
  return __isTSNullKeyword;
}

function __isTSNeverKeyword(node) {
  return node && node.type === "TSNeverKeyword";
}
export function isTSNeverKeyword() {
  return __isTSNeverKeyword;
}

function __isTSThisType(node) {
  return node && node.type === "TSThisType";
}
export function isTSThisType() {
  return __isTSThisType;
}

export function isTSFunctionType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSFunctionType";
  }

  const _m0_ = matchers["typeParameters"];
  const _m1_ = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSFunctionType" &&
    (!_m0_ || match(_m0_, node["typeParameters"])) &&
    (!_m1_ || match(_m1_, node["typeAnnotation"]));
}

export function isTSConstructorType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSConstructorType";
  }

  const _m0_ = matchers["typeParameters"];
  const _m1_ = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSConstructorType" &&
    (!_m0_ || match(_m0_, node["typeParameters"])) &&
    (!_m1_ || match(_m1_, node["typeAnnotation"]));
}

export function isTSTypeReference(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeReference";
  }

  const _m0_ = matchers["typeName"];
  const _m1_ = matchers["typeParameters"];

  return node =>
    node &&
    node.type === "TSTypeReference" &&
    (!_m0_ || match(_m0_, node["typeName"])) &&
    (!_m1_ || match(_m1_, node["typeParameters"]));
}

export function isTSTypePredicate(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypePredicate";
  }

  const _m0_ = matchers["parameterName"];
  const _m1_ = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSTypePredicate" &&
    (!_m0_ || match(_m0_, node["parameterName"])) &&
    (!_m1_ || match(_m1_, node["typeAnnotation"]));
}

export function isTSTypeQuery(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeQuery";
  }

  const matcher =
    typeof matchers === "object" ? matchers["exprName"] : matchers;
  return node =>
    node && node.type === "TSTypeQuery" && match(matcher, node["exprName"]);
}

export function isTSTypeLiteral(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeLiteral";
  }

  const matcher = typeof matchers === "object" ? matchers["members"] : matchers;
  return node =>
    node && node.type === "TSTypeLiteral" && match(matcher, node["members"]);
}

export function isTSArrayType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSArrayType";
  }

  const matcher =
    typeof matchers === "object" ? matchers["elementType"] : matchers;
  return node =>
    node && node.type === "TSArrayType" && match(matcher, node["elementType"]);
}

export function isTSTupleType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTupleType";
  }

  const matcher =
    typeof matchers === "object" ? matchers["elementTypes"] : matchers;
  return node =>
    node && node.type === "TSTupleType" && match(matcher, node["elementTypes"]);
}

export function isTSUnionType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSUnionType";
  }

  const matcher = typeof matchers === "object" ? matchers["types"] : matchers;
  return node =>
    node && node.type === "TSUnionType" && match(matcher, node["types"]);
}

export function isTSIntersectionType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSIntersectionType";
  }

  const matcher = typeof matchers === "object" ? matchers["types"] : matchers;
  return node =>
    node && node.type === "TSIntersectionType" && match(matcher, node["types"]);
}

export function isTSConditionalType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSConditionalType";
  }

  const _m0_ = matchers["checkType"];
  const _m1_ = matchers["extendsType"];
  const _m2_ = matchers["trueType"];
  const _m3_ = matchers["falseType"];

  return node =>
    node &&
    node.type === "TSConditionalType" &&
    (!_m0_ || match(_m0_, node["checkType"])) &&
    (!_m1_ || match(_m1_, node["extendsType"])) &&
    (!_m2_ || match(_m2_, node["trueType"])) &&
    (!_m3_ || match(_m3_, node["falseType"]));
}

export function isTSInferType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSInferType";
  }

  const matcher =
    typeof matchers === "object" ? matchers["typeParameter"] : matchers;
  return node =>
    node &&
    node.type === "TSInferType" &&
    match(matcher, node["typeParameter"]);
}

export function isTSParenthesizedType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSParenthesizedType";
  }

  const matcher =
    typeof matchers === "object" ? matchers["typeAnnotation"] : matchers;
  return node =>
    node &&
    node.type === "TSParenthesizedType" &&
    match(matcher, node["typeAnnotation"]);
}

export function isTSTypeOperator(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeOperator";
  }

  const matcher =
    typeof matchers === "object" ? matchers["typeAnnotation"] : matchers;
  return node =>
    node &&
    node.type === "TSTypeOperator" &&
    match(matcher, node["typeAnnotation"]);
}

export function isTSIndexedAccessType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSIndexedAccessType";
  }

  const _m0_ = matchers["objectType"];
  const _m1_ = matchers["indexType"];

  return node =>
    node &&
    node.type === "TSIndexedAccessType" &&
    (!_m0_ || match(_m0_, node["objectType"])) &&
    (!_m1_ || match(_m1_, node["indexType"]));
}

export function isTSMappedType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSMappedType";
  }

  const _m0_ = matchers["typeParameter"];
  const _m1_ = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSMappedType" &&
    (!_m0_ || match(_m0_, node["typeParameter"])) &&
    (!_m1_ || match(_m1_, node["typeAnnotation"]));
}

export function isTSLiteralType(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSLiteralType";
  }

  const matcher = typeof matchers === "object" ? matchers["literal"] : matchers;
  return node =>
    node && node.type === "TSLiteralType" && match(matcher, node["literal"]);
}

export function isTSExpressionWithTypeArguments(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSExpressionWithTypeArguments";
  }

  const _m0_ = matchers["expression"];
  const _m1_ = matchers["typeParameters"];

  return node =>
    node &&
    node.type === "TSExpressionWithTypeArguments" &&
    (!_m0_ || match(_m0_, node["expression"])) &&
    (!_m1_ || match(_m1_, node["typeParameters"]));
}

export function isTSInterfaceDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSInterfaceDeclaration";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["typeParameters"];
  const _m2_ = matchers["extends"];
  const _m3_ = matchers["body"];

  return node =>
    node &&
    node.type === "TSInterfaceDeclaration" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["typeParameters"])) &&
    (!_m2_ || match(_m2_, node["extends"])) &&
    (!_m3_ || match(_m3_, node["body"]));
}

export function isTSInterfaceBody(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSInterfaceBody";
  }

  const matcher = typeof matchers === "object" ? matchers["body"] : matchers;
  return node =>
    node && node.type === "TSInterfaceBody" && match(matcher, node["body"]);
}

export function isTSTypeAliasDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeAliasDeclaration";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["typeParameters"];
  const _m2_ = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSTypeAliasDeclaration" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["typeParameters"])) &&
    (!_m2_ || match(_m2_, node["typeAnnotation"]));
}

export function isTSAsExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSAsExpression";
  }

  const _m0_ = matchers["expression"];
  const _m1_ = matchers["typeAnnotation"];

  return node =>
    node &&
    node.type === "TSAsExpression" &&
    (!_m0_ || match(_m0_, node["expression"])) &&
    (!_m1_ || match(_m1_, node["typeAnnotation"]));
}

export function isTSTypeAssertion(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeAssertion";
  }

  const _m0_ = matchers["typeAnnotation"];
  const _m1_ = matchers["expression"];

  return node =>
    node &&
    node.type === "TSTypeAssertion" &&
    (!_m0_ || match(_m0_, node["typeAnnotation"])) &&
    (!_m1_ || match(_m1_, node["expression"]));
}

export function isTSEnumDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSEnumDeclaration";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["members"];

  return node =>
    node &&
    node.type === "TSEnumDeclaration" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["members"]));
}

export function isTSEnumMember(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSEnumMember";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["initializer"];

  return node =>
    node &&
    node.type === "TSEnumMember" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["initializer"]));
}

export function isTSModuleDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSModuleDeclaration";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["body"];

  return node =>
    node &&
    node.type === "TSModuleDeclaration" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["body"]));
}

export function isTSModuleBlock(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSModuleBlock";
  }

  const matcher = typeof matchers === "object" ? matchers["body"] : matchers;
  return node =>
    node && node.type === "TSModuleBlock" && match(matcher, node["body"]);
}

export function isTSImportEqualsDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSImportEqualsDeclaration";
  }

  const _m0_ = matchers["id"];
  const _m1_ = matchers["moduleReference"];

  return node =>
    node &&
    node.type === "TSImportEqualsDeclaration" &&
    (!_m0_ || match(_m0_, node["id"])) &&
    (!_m1_ || match(_m1_, node["moduleReference"]));
}

export function isTSExternalModuleReference(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSExternalModuleReference";
  }

  const matcher =
    typeof matchers === "object" ? matchers["expression"] : matchers;
  return node =>
    node &&
    node.type === "TSExternalModuleReference" &&
    match(matcher, node["expression"]);
}

export function isTSNonNullExpression(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSNonNullExpression";
  }

  const matcher =
    typeof matchers === "object" ? matchers["expression"] : matchers;
  return node =>
    node &&
    node.type === "TSNonNullExpression" &&
    match(matcher, node["expression"]);
}

export function isTSExportAssignment(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSExportAssignment";
  }

  const matcher =
    typeof matchers === "object" ? matchers["expression"] : matchers;
  return node =>
    node &&
    node.type === "TSExportAssignment" &&
    match(matcher, node["expression"]);
}

export function isTSNamespaceExportDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSNamespaceExportDeclaration";
  }

  const matcher = typeof matchers === "object" ? matchers["id"] : matchers;
  return node =>
    node &&
    node.type === "TSNamespaceExportDeclaration" &&
    match(matcher, node["id"]);
}

export function isTSTypeAnnotation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeAnnotation";
  }

  const matcher =
    typeof matchers === "object" ? matchers["typeAnnotation"] : matchers;
  return node =>
    node &&
    node.type === "TSTypeAnnotation" &&
    match(matcher, node["typeAnnotation"]);
}

export function isTSTypeParameterInstantiation(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeParameterInstantiation";
  }

  const matcher = typeof matchers === "object" ? matchers["params"] : matchers;
  return node =>
    node &&
    node.type === "TSTypeParameterInstantiation" &&
    match(matcher, node["params"]);
}

export function isTSTypeParameterDeclaration(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeParameterDeclaration";
  }

  const matcher = typeof matchers === "object" ? matchers["params"] : matchers;
  return node =>
    node &&
    node.type === "TSTypeParameterDeclaration" &&
    match(matcher, node["params"]);
}

export function isTSTypeParameter(matchers) {
  if (typeof matchers === "undefined") {
    return node => node && node.type === "TSTypeParameter";
  }

  const _m0_ = matchers["constraint"];
  const _m1_ = matchers["default"];

  return node =>
    node &&
    node.type === "TSTypeParameter" &&
    (!_m0_ || match(_m0_, node["constraint"])) &&
    (!_m1_ || match(_m1_, node["default"]));
}
