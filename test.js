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

test("value", () => {
  const check = t.isIdentifier("bar");
  expect(check(ast.arguments[0])).toBeTruthy();
});

test("function", () => {
  const check = t.isCallExpression({
    arguments: args => args.every(t.isIdentifier())
  });
  expect(check(ast)).toBeTruthy();
});
