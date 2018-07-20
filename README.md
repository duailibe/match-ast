# `ast-verify`

[![Travis](https://api.travis-ci.com/duailibe/ast-verify.svg)](https://travis-ci.com/duailibe/ast-verify)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/ast-verify.svg)](https://npmjs.org/ast-verify)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Collection of helper functions to verify a AST tree structure.

## Usage

### Type matchers

Example: verify if a tree represents a `JSON.stringify()` call

```js
const {
  isCallExpression,
  isMemberExpression,
  isIdentifier
} = require("ast-verify");

// Check if the tree represents a `JSON.stringify()` call.
const isJsonStringify = isCallExpression({
  callee: isMemberExpression({
    object: isIdentifier("JSON"),
    property: isIdentifier("stringify")
  })
});
```

Most functions are named `isSomething` where `Something` is the type of the node (i.e. `isIdentifier` checks if `node.type === "Identifier"`). They accept a single argument: an object where keys represent the property of a node and the value is a matcher for that property.

The accepted matchers are: a matcher function, primitive values, arrays or functions.

Calling a function with no arguments means it will only assert its type and none of the properties. For types with no properties (i.e. `ThisExpression`), arguments are ignored.

For nodes with only a single property (i.e. `Identifier` with property `name`), you can pass directly the matcher for that property, so you don't have to pass an object with a single property. For example, `isIdentifier("foo")` is equivalent to `isIdentifier({ name: "foo" })`.

Passing extra properties to a matcher will make it always return false:

```js
// check() will always return false since there's no `name` property in CallExpression
const check = isCallExpression({ name: "foo" });
```

### Other matchers

#### `either`

For cases where a node can be one of many values:

```js
const { either, isIdentifier, isMemberExpression } = require("ast-verify");

// Check if the three is a `JSON.stringify()` or `stringify()` call
const isStringify = isCallExpression({
  callee: either(
    isMemberExpression({
      object: isIdentifier("JSON"),
      property: isIdentifier("stringify")
    }),
    isIdentifier("stringify")
  )
});
```

## Credits

This library consists of helper functions automatically generated on top of the excellent [`@babel/types`](https://npmjs.org/@babel/types) definitions.
