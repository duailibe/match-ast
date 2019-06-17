import match from "./match";

export function either() {
  const args = arguments;
  return function(node) {
    for (let i = 0; i < args.length; i++) {
      if (match(args[i], node)) {
        return true;
      }
    }
    return false;
  };
}
