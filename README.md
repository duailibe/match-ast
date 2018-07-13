# `ast-verify`

Collection of helper functions to verify a AST tree structure.

## Usage

Example: verify if a tree represents a `JSON.stringify()` call

```js
const t = require("ast-verify");
// Check if the tree represents a `JSON.stringify()` call.
const isJsonStringify = t.isCallExpression({
  callee: t.isMemberExpression({
    object: t.isIdentifier("JSON"),
    property: t.isIdentifier("stringify")
  })
});
```
