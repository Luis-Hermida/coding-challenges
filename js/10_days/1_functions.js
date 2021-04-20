function factorial(n) {
  let nNextCounter = n;
  let factorialResult = n;

  while (nNextCounter > 1) {
    factorialResult *= nNextCounter - 1;
    nNextCounter--;
  }

  return factorialResult;
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(8));
