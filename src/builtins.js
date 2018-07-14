import match from "./match";

export function either(...matchers) {
  return node => matchers.some(matcher => match(matcher, node));
};
