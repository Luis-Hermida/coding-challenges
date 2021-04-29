function getLetter(s) {
  let letter;
  switch (s.length > 0) {
    case /^[aeiou]/.test(s):
      letter = "A";
      break;
    case /^[bcdfg]/.test(s):
      letter = "B";
      break;
    case /^[hjklm]/.test(s):
      letter = "C";
      break;
    case /^[npqrstvwxyz]/.test(s):
      letter = "D";
      break;
  }
  return letter;
}

console.log(getLetter("asd")); // A
console.log(getLetter("ball")); // B
console.log(getLetter("hello")); // C