"use strict";

const parser = require("@babel/parser");
const mast = require(".");

const ast = parser.parse("this.foo(bar, eggs, spam)").program.body[0]
  .expression;

test("only checks type with no arguments", () => {
  const check = mast.isCallExpression();
  expect(check(ast)).toBe(true);
  expect(check(ast.callee)).toBe(false);
});

test("should only check type with an empty object", () => {
  const checkCall = mast.isCallExpression({});
  const checkIdentifier = mast.isIdentifier({});
  expect(checkCall(ast)).toBe(true);
  expect(checkIdentifier(ast.arguments[0])).toBe(true);
});

test("checks properties if argument is an object", () => {
  const check = mast.isCallExpression({
    callee: mast.isMemberExpression()
  });
  const checkFail = mast.isCallExpression({
    callee: mast.isIdentifier()
  });
  expect(check(ast)).toBe(true);
  expect(checkFail(ast)).toBe(false);
});

test("fails with foreign properties", () => {
  const checkTypeWithOneProp = mast.isIdentifier({
    name: "bar",
    notName: "bar"
  });
  expect(checkTypeWithOneProp(ast.arguments[0])).toBe(false);

  const checkTypeWithMoreProps = mast.isMemberExpression({
    object: mast.isThisExpression(),
    arguments: [mast.isIdentifier()]
  });
  expect(checkTypeWithMoreProps(ast.callee)).toBe(false);
});

test("checks array if argument is an array", () => {
  const checkFail = mast.isCallExpression({
    arguments: [mast.isIdentifier()]
  });
  const check = mast.isCallExpression({
    arguments: [mast.isIdentifier(), mast.isIdentifier(), mast.isIdentifier()]
  });
  expect(checkFail(ast)).toBe(false);
  expect(check(ast)).toBe(true);
});

test("accepts simple arguments if type has only one property", () => {
  const checkIdentifier = mast.isIdentifier("foo");
  const checkNumeric = mast.isNumericLiteral(1);
  const checkArray = mast.isArrayExpression([
    mast.isIdentifier("foo"),
    mast.isIdentifier()
  ]);
  expect(checkIdentifier(parser.parseExpression("foo"))).toBe(true);
  expect(checkNumeric(parser.parseExpression("1"))).toBe(true);
  expect(checkArray(parser.parseExpression("[foo, bar]"))).toBe(true);
});

test("accepts functions as matcher", () => {
  const check = mast.isCallExpression({
    arguments: args => args.every(mast.isIdentifier())
  });
  expect(check(ast)).toBe(true);
});

test("either works", () => {
  const check = mast.either(mast.isIdentifier(), mast.isNumericLiteral());
  const identifier = parser.parseExpression("foo");
  const number = parser.parseExpression("1");
  expect(check(identifier)).toBe(true);
  expect(check(number)).toBe(true);
  expect(check(ast)).toBe(false);
});
