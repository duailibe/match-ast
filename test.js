"use strict";

const parser = require("@babel/parser");
const t = require(".");

const ast = parser.parse("this.foo(bar, eggs, spam)").program.body[0]
  .expression;

test("only checks type with no arguments", () => {
  const check = t.isCallExpression();
  expect(check(ast)).toBeTruthy();
  expect(check(ast.callee)).toBeFalsy();
});

test("should only check type with an empty object", () => {
  const checkCall = t.isCallExpression({});
  const checkIdentifier = t.isIdentifier({});
  expect(checkCall(ast)).toBeTruthy();
  expect(checkIdentifier(parser.parseExpression("foo"))).toBeTruthy();
});

test("checks properties if argument is an object", () => {
  const check = t.isCallExpression({
    callee: t.isMemberExpression()
  });
  const checkFail = t.isCallExpression({
    callee: t.isIdentifier()
  });
  expect(check(ast)).toBeTruthy();
  expect(checkFail(ast)).toBeFalsy();
});

test("fails with extra properties", () => {
  function check(ast, fn, keys, prop) {
    const obj = {};
    do {
      obj[prop[0]] = prop[1];
      const checkFn = fn(obj);
      expect(checkFn(ast)).toBeFalsy();
    } while ((prop = keys.shift()));
  }

  check(
    parser.parseExpression("foo"),
    t.isIdentifier,
    [["name", "foo"]],
    [["value", "bar"]]
  );

  check(
    parser.parseExpression("foo(bar)"),
    t.isCallExpression,
    [
      ["object", t.isIdentifier()],
      ["arguments", [t.isIdentifier()]]
    ],
    [["value", "bar"]]
  );

  expect.assertions(5);
});

test("checks array if argument is an array", () => {
  const checkFail = t.isCallExpression({
    arguments: [t.isIdentifier()]
  });
  const check = t.isCallExpression({
    arguments: [t.isIdentifier(), t.isIdentifier(), t.isIdentifier()]
  });
  expect(checkFail(ast)).toBeFalsy();
  expect(check(ast)).toBeTruthy();
});

test("accepts simple arguments if type has only one property", () => {
  const checkIdentifier = t.isIdentifier("foo");
  const checkNumeric = t.isNumericLiteral(1);
  const checkArray = t.isArrayExpression([
    t.isIdentifier("foo"),
    t.isIdentifier()
  ]);
  expect(checkIdentifier(parser.parseExpression("foo"))).toBeTruthy();
  expect(checkNumeric(parser.parseExpression("1"))).toBeTruthy();
  expect(checkArray(parser.parseExpression("[foo, bar]"))).toBeTruthy();
});

test("accepts functions as matcher", () => {
  const check = t.isCallExpression({
    arguments: args => args.every(t.isIdentifier())
  });
  expect(check(ast)).toBeTruthy();
});
