export {};

function matchingBraces(bracesArray) {
  const isBraceIndexBalanced = [];

  bracesArray.forEach((braces) => {
    isBraceIndexBalanced.push(isBracesBalanced(braces));
  });

  return isBraceIndexBalanced;
}

function isBracesBalanced(bracesString) {
  const currentSetOfBraces = [];

  for (const value of bracesString) {
    if (value === "{" || value === "[" || value === "(") {
      currentSetOfBraces.push(value);
    } else if (value === "}" && currentSetOfBraces.pop() !== "{") {
      return "NO";
    } else if (value === "]" && currentSetOfBraces.pop() !== "[") {
      return "NO";
    } else if (value === ")" && currentSetOfBraces.pop() !== "(") {
      return "NO";
    }
  }

  return currentSetOfBraces.length > 0 ? "NO" : "YES";
}

console.log(matchingBraces(["{}[]()", "{[}]}"]));
