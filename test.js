"use strict";

const parser = require("@babel/parser");
const t = require(".");

const ast = parser.parse("this.foo(bar, eggs, spam)").program.body[0]
  .expression;

test("no args", () => {
  const check = t.isCallExpression();
  expect(check(ast)).toBeTruthy();
});

test("object", () => {
  const check = t.isCallExpression({
    callee: t.isMemberExpression()
  });
  expect(check(ast)).toBeTruthy();
});

test("array", () => {
  const checkFail = t.isCallExpression({
    arguments: [t.isIdentifier()]
  });
  const checkOk = t.isCallExpression({
    arguments: [t.isIdentifier(), t.isIdentifier(), t.isIdentifier()]
  });
  expect(checkFail(ast)).toBeFalsy();
  expect(checkOk(ast)).toBeTruthy();
});

test("value", () => {
  const check = t.isIdentifier("bar");
  expect(check(ast.arguments[0])).toBeTruthy();
});

test("array value", () => {
  const check = t.isArrayExpression([t.isIdentifier("foo"), t.isIdentifier()]);
  const ast = parser.parseExpression("[foo, bar]");
  expect(check(ast)).toBeTruthy();
});

test("function", () => {
  const check = t.isCallExpression({
    arguments: args => args.every(t.isIdentifier())
  });
  expect(check(ast)).toBeTruthy();
});
