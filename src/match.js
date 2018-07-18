export default function(matcher, value) {
  if (
    typeof matcher === "string" ||
    typeof matcher === "number" ||
    typeof matcher === "boolean" ||
    typeof matcher === "undefined" ||
    typeof matcher === "symbol" ||
    matcher === null
  ) {
    return Object.is(value, matcher);
  }

  if (typeof matcher === "function") {
    return matcher(value);
  }

  throw Error("Matcher of type " + typeof matcher + " unsupported.");
}
