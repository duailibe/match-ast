export default function match(matcher, value) {
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

  if (Array.isArray(matcher)) {
    return (
      Array.isArray(value) &&
      matcher.length === value.length &&
      matcher.every((_matcher, idx) => match(_matcher, value[idx]))
    );
  }

  throw Error("Matcher of type " + typeof matcher + " unsupported.");
}
