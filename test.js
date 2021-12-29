/* eslint-disable no-console */

"use strict";

const { test } = require("uvu");
const assert = require("assert");
const parser = require("@babel/parser");
const mast = require(".");

const ast = parser.parse("this.foo(bar, eggs, spam)").program.body[0]
  .expression;

test("only checks type with no arguments", () => {
  const check = mast.isCallExpression();

  assert(check(ast) === true);
  assert(check(ast.callee) === false);
});

test("should only check type with an empty object", () => {
  const checkCall = mast.isCallExpression({});
  const checkIdentifier = mast.isIdentifier({});
  assert(checkCall(ast) === true);
  assert(checkIdentifier(ast.arguments[0]) === true);
});

test("checks properties if argument is an object", () => {
  const check = mast.isCallExpression({
    callee: mast.isMemberExpression(),
  });
  const checkFail = mast.isCallExpression({
    callee: mast.isIdentifier(),
  });
  assert(check(ast) === true);
  assert(checkFail(ast) === false);
});

test("fails with foreign properties", () => {
  const checkTypeWithOneProp = mast.isIdentifier({
    name: "bar",
    notName: "bar",
  });
  assert(checkTypeWithOneProp(ast.arguments[0]) === false);

  const checkTypeWithMoreProps = mast.isMemberExpression({
    object: mast.isThisExpression(),
    arguments: [mast.isIdentifier()],
  });
  assert(checkTypeWithMoreProps(ast.callee) === false);
});

test("checks array if argument is an array", () => {
  const checkFail = mast.isCallExpression({
    arguments: [mast.isIdentifier()],
  });
  const check = mast.isCallExpression({
    arguments: [mast.isIdentifier(), mast.isIdentifier(), mast.isIdentifier()],
  });
  assert(checkFail(ast) === false);
  assert(check(ast) === true);
});

test("accepts simple arguments if type has only one property", () => {
  const checkIdentifier = mast.isIdentifier("foo");
  const checkNumeric = mast.isNumericLiteral(1);
  const checkArray = mast.isArrayExpression([
    mast.isIdentifier("foo"),
    mast.isIdentifier(),
  ]);
  assert(checkIdentifier(parser.parseExpression("foo")) === true);
  assert(checkNumeric(parser.parseExpression("1")) === true);
  assert(checkArray(parser.parseExpression("[foo, bar]")) === true);
});

test("accepts functions as matcher", () => {
  const check = mast.isCallExpression({
    arguments: (args) => args.every(mast.isIdentifier()),
  });
  assert(check(ast) === true);
});

test("either works", () => {
  const check = mast.either(mast.isIdentifier(), mast.isNumericLiteral());
  const identifier = parser.parseExpression("foo");
  const number = parser.parseExpression("1");
  assert(check(identifier) === true);
  assert(check(number) === true);
  assert(check(ast) === false);
});

test.run();
